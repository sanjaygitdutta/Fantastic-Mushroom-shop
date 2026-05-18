/**
 * 🍄 Fantastic Food — Ultimate Recipe Humanization Tool
 * 
 * Scans all 258 recipes across:
 *   - src/data/worldRecipes.ts (224 static recipes)
 *   - src/data/worldRecipeTranslations.ts (105 translations)
 *   - src/data/recipes.ts (34 dynamic recipes)
 * 
 * Batches calls to Gemini 2.5 Flash using the key in .env.local to humanize all
 * recipe instructions and descriptions, breaking the AI footprint.
 */

import fs from 'fs';
import path from 'path';

// ── 1. Parse .env.local for API Key ──────────────────────────────────────────
const envPath = path.resolve('.env.local');
let GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  const match = envContent.match(/GEMINI_API_KEY=(.*)/);
  if (match) {
    GEMINI_API_KEY = match[1].trim().replace(/^["']|["']$/g, '');
  }
}

if (!GEMINI_API_KEY) {
  console.error('❌ GEMINI_API_KEY not found in .env.local or environment variables.');
  process.exit(1);
}

console.log('🔑 Gemini API Key successfully loaded.');

// ── 2. Create Safety Backups ─────────────────────────────────────────────────
const backupDir = path.resolve('.recipe-backups');
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
}

const filesToBackup = [
  'src/data/worldRecipes.ts',
  'src/data/worldRecipeTranslations.ts',
  'src/data/recipes.ts'
];

for (const file of filesToBackup) {
  const srcPath = path.resolve(file);
  if (fs.existsSync(srcPath)) {
    const destPath = path.join(backupDir, path.basename(file));
    fs.copyFileSync(srcPath, destPath);
    console.log(`🛡️ Created safety backup of ${file} at ${destPath}`);
  }
}

// ── 3. Parse Database Files ──────────────────────────────────────────────────
console.log('📂 Parsing recipe database files...');

// 3.1 Parse worldRecipes.ts
const worldRecipesPath = path.resolve('src/data/worldRecipes.ts');
const worldRecipesContent = fs.readFileSync(worldRecipesPath, 'utf-8');
const worldRecipesLines = worldRecipesContent.split('\n');

const r = (id, name, country, countryCode, emoji, city, category, difficulty, time, servings, calories, tags, ingredients, steps) => ({
  id, name, country, countryCode, emoji, city, category, difficulty, time, servings, calories, tags, ingredients, steps
});

const worldRecipes = [];
const worldRecipesLineIndex = {};

for (let i = 0; i < worldRecipesLines.length; i++) {
  const trimmed = worldRecipesLines[i].trim();
  if (trimmed.startsWith('r(')) {
    try {
      const expr = trimmed.replace(/,$/, '');
      const recipe = eval(expr);
      worldRecipes.push(recipe);
      worldRecipesLineIndex[recipe.id] = i;
    } catch (e) {
      console.error(`❌ Failed to parse world recipe line ${i}:`, e.message);
    }
  }
}
console.log(`✓ Parsed ${worldRecipes.length} world recipes.`);

// 3.2 Parse worldRecipeTranslations.ts
const worldRecipeTranslationsPath = path.resolve('src/data/worldRecipeTranslations.ts');
const transContent = fs.readFileSync(worldRecipeTranslationsPath, 'utf-8');
const transStartIndex = transContent.indexOf('export const WORLD_RECIPE_TRANSLATIONS');
if (transStartIndex === -1) {
  console.error('❌ Could not find WORLD_RECIPE_TRANSLATIONS in worldRecipeTranslations.ts');
  process.exit(1);
}
let transObjectContent = transContent.substring(transStartIndex);
transObjectContent = transObjectContent.replace(/export const WORLD_RECIPE_TRANSLATIONS:[\s\S]*?=/g, 'const WORLD_RECIPE_TRANSLATIONS =');
const worldRecipeTranslations = eval(transObjectContent + '\nWORLD_RECIPE_TRANSLATIONS');
console.log(`✓ Parsed ${Object.keys(worldRecipeTranslations).length} translated world recipe sets.`);

// 3.3 Parse recipes.ts
const recipesPath = path.resolve('src/data/recipes.ts');
const recipesContent = fs.readFileSync(recipesPath, 'utf-8');
const recipesStartIndex = recipesContent.indexOf('export const recipes');
if (recipesStartIndex === -1) {
  console.error('❌ Could not find recipes in recipes.ts');
  process.exit(1);
}
let recipesObjectContent = recipesContent.substring(recipesStartIndex);
recipesObjectContent = recipesObjectContent.replace(/export const recipes:[\s\S]*?=/g, 'const recipes =');
const recipes = eval(recipesObjectContent + '\nrecipes');
console.log(`✓ Parsed ${recipes.length} dynamic recipes.`);

// ── 4. Unified API Requester ─────────────────────────────────────────────────
async function callGemini(prompt, schema, retryCount = 0) {
  const MAX_RETRIES = 5;
  const RETRY_DELAYS = [3000, 8000, 15000, 30000, 60000];

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.2,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 8192,
      responseMimeType: "application/json",
      responseSchema: schema,
      thinkingConfig: {
        thinkingBudget: 0
      }
    }
  };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if ((response.status === 503 || response.status === 429 || response.status === 500) && retryCount < MAX_RETRIES) {
      const waitMs = RETRY_DELAYS[retryCount];
      console.warn(`⚠️ Gemini busy (${response.status}). Retrying in ${waitMs / 1000}s... (attempt ${retryCount + 1}/${MAX_RETRIES})`);
      await new Promise(res => setTimeout(res, waitMs));
      return callGemini(prompt, schema, retryCount + 1);
    }

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini API error (${response.status}): ${errText}`);
    }

    const rawResponseText = await response.text();
    let resData;
    try {
      resData = JSON.parse(rawResponseText);
    } catch (e) {
      console.error("❌ Failed to parse Google API response as JSON. Raw text was:\n", rawResponseText);
      throw new Error(`Google API returned invalid JSON: ${e.message}`);
    }

    const text = resData.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error("Empty candidate response from Gemini");

    let cleanJson = text.trim();
    if (cleanJson.includes('```')) {
      const match = cleanJson.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
      if (match && match[1]) cleanJson = match[1];
    }

    return JSON.parse(cleanJson);
  } catch (err) {
    if (retryCount < MAX_RETRIES) {
      const waitMs = RETRY_DELAYS[retryCount];
      console.warn(`⚠️ Error calling Gemini: ${err.message}. Retrying in ${waitMs / 1000}s...`);
      await new Promise(res => setTimeout(res, waitMs));
      return callGemini(prompt, schema, retryCount + 1);
    }
    throw err;
  }
}

const cleanString = (str) => String(str || '')
  .replace(/[\r\n]+/g, ' ')
  .replace(/\s+/g, ' ')
  .replace(/[\uFFFD]/g, '°')
  .trim();

const cleanArray = (arr) => Array.isArray(arr) ? arr.map(cleanString) : [];

// ── 5. Multi-Stage Pipeline ──────────────────────────────────────────────────
const humanizedEnglishMap = {};
const humanizedChineseMap = {};
const humanizedMalayMap = {};

// 5.1 English Humanization Stage
async function runEnglishStage() {
  const englishItems = [];

  // Add World Recipes (Skip Indian, they are already concise and humanized)
  for (const recipe of worldRecipes) {
    if (!recipe.id.startsWith('in-')) {
      englishItems.push({
        id: recipe.id,
        name: cleanString(recipe.name),
        steps: cleanArray(recipe.steps)
      });
    }
  }

  // Add Custom Recipes
  for (const recipe of recipes) {
    englishItems.push({
      id: recipe.id,
      name: cleanString(recipe.title),
      description: cleanString(recipe.description),
      steps: cleanArray(recipe.instructions)
    });
  }

  const BATCH_SIZE = 10;
  const total = englishItems.length;
  const numBatches = Math.ceil(total / BATCH_SIZE);

  console.log(`\n🇬🇧 [STAGE 1] Humanizing ${total} English Recipes in ${numBatches} batches...`);

  const schema = {
    type: "OBJECT",
    properties: {
      recipes: {
        type: "ARRAY",
        items: {
          type: "OBJECT",
          properties: {
            id: { type: "STRING" },
            description: { type: "STRING" },
            steps: { type: "ARRAY", items: { type: "STRING" } }
          },
          required: ["id", "steps"]
        }
      }
    },
    required: ["recipes"]
  };

  for (let b = 0; b < numBatches; b++) {
    const startIdx = b * BATCH_SIZE;
    const endIdx = Math.min(startIdx + BATCH_SIZE, total);
    const batch = englishItems.slice(startIdx, endIdx);

    console.log(`  🤖 English Batch ${b + 1}/${numBatches} (Recipes ${startIdx + 1} to ${endIdx})...`);

    const prompt = `You are a warm, highly-experienced professional chef and friendly home cook.
Your task is to review the step-by-step instructions and descriptions for the following batch of recipes and REWRITE them in English to completely break the "AI footprint".

🔴 STRICT HUMANIZATION STYLE INSTRUCTIONS:
1. BREVITY & CONCISENESS IS MANDATORY:
   - Shorten each instruction step to 1-2 punchy, highly practical, and warm sentences. Keep them around 15-30 words each.
   - Absolutely ELIMINATE long, complex, and flowery clinical paragraphs.
   - Remove robotic introductory preambles or transitions (e.g. do NOT write: "To initiate the preparation of Pizza Margherita, begin by...", "Allow it to rest to relax the gluten...", "taking care to prevent any yolk from contaminating").
   - Instead, write direct, friendly, and practical advice: "Let the dough rest at room temperature for an hour. This relaxes it and makes it much easier to stretch."
2. WARM CHEF-LIKE VOICE:
   - Sound like a passionate human cook. Use simple, natural transition words or direct action verbs.
   - Do NOT use clinical, robotic AI cliches or complex vocabulary (e.g. avoid "ensure", "facilitate", "emulsify", "harmonize", "tapestry", "delightful", "a testament to").
3. Limit the total steps to be highly concise (typically 3 to 6 steps per recipe).

BATCH DATA:
${JSON.stringify(batch, null, 2)}

Respond ONLY with valid JSON using the provided schema.`;

    const result = await callGemini(prompt, schema);
    if (result && result.recipes) {
      for (const r of result.recipes) {
        humanizedEnglishMap[r.id] = r;
      }
    }
    await new Promise(res => setTimeout(res, 1200));
  }
}

// 5.2 Chinese Humanization Stage
async function runChineseStage() {
  const chineseItems = [];

  // Add World Recipe Translations
  for (const [id, langs] of Object.entries(worldRecipeTranslations)) {
    if (langs['zh-CN']) {
      chineseItems.push({
        id,
        name: cleanString(langs['zh-CN'].title),
        description: cleanString(langs['zh-CN'].description),
        steps: cleanArray(langs['zh-CN'].instructions)
      });
    }
  }

  // Add Custom Recipes Translations
  for (const recipe of recipes) {
    if (recipe.translations?.['zh-CN']) {
      chineseItems.push({
        id: recipe.id,
        name: cleanString(recipe.translations['zh-CN'].title),
        description: cleanString(recipe.translations['zh-CN'].description),
        steps: cleanArray(recipe.translations['zh-CN'].instructions)
      });
    }
  }

  const BATCH_SIZE = 10;
  const total = chineseItems.length;
  const numBatches = Math.ceil(total / BATCH_SIZE);

  console.log(`\n🇨🇳 [STAGE 2] Humanizing ${total} Chinese Recipes in ${numBatches} batches...`);

  const schema = {
    type: "OBJECT",
    properties: {
      recipes: {
        type: "ARRAY",
        items: {
          type: "OBJECT",
          properties: {
            id: { type: "STRING" },
            description: { type: "STRING" },
            steps: { type: "ARRAY", items: { type: "STRING" } }
          },
          required: ["id", "description", "steps"]
        }
      }
    },
    required: ["recipes"]
  };

  for (let b = 0; b < numBatches; b++) {
    const startIdx = b * BATCH_SIZE;
    const endIdx = Math.min(startIdx + BATCH_SIZE, total);
    const batch = chineseItems.slice(startIdx, endIdx);

    console.log(`  🤖 Chinese Batch ${b + 1}/${numBatches} (Recipes ${startIdx + 1} to ${endIdx})...`);

    const prompt = `You are a warm, experienced local Chinese home cook and grandmother.
Your task is to review the descriptions and step-by-step instructions for the following batch of recipes in Simplified Chinese (zh-CN) and REWRITE them to completely break the "AI footprint".

🔴 STRICT HUMANIZATION STYLE INSTRUCTIONS:
1. BREVITY & CONCISENESS IS MANDATORY:
   - Make each step short, warm, and natural. Keep each step under 20-30 characters if possible.
   - Absolutely eliminate robotic preambles, cliches, or excessively technical explanations.
2. NATIVE COLLOQUIAL TONE:
   - Use warm, home-style language that a real Chinese cook would use.
   - Remove any automated prefixes inside the string (e.g. do not write "步骤 1:", "步骤 2:"). Just return clean array strings for the steps.
3. Keep the descriptions short (1-2 sentences), highly inviting and warm.

BATCH DATA:
${JSON.stringify(batch, null, 2)}

Respond ONLY with valid JSON using the provided schema.`;

    const result = await callGemini(prompt, schema);
    if (result && result.recipes) {
      for (const r of result.recipes) {
        humanizedChineseMap[r.id] = r;
      }
    }
    await new Promise(res => setTimeout(res, 1200));
  }
}

// 5.3 Malay Humanization Stage
async function runMalayStage() {
  const malayItems = [];

  // Add World Recipe Translations
  for (const [id, langs] of Object.entries(worldRecipeTranslations)) {
    if (langs['ms']) {
      malayItems.push({
        id,
        name: cleanString(langs['ms'].title),
        description: cleanString(langs['ms'].description),
        steps: cleanArray(langs['ms'].instructions)
      });
    }
  }

  // Add Custom Recipes Translations
  for (const recipe of recipes) {
    if (recipe.translations?.['ms']) {
      malayItems.push({
        id: recipe.id,
        name: cleanString(recipe.translations['ms'].title),
        description: cleanString(recipe.translations['ms'].description),
        steps: cleanArray(recipe.translations['ms'].instructions)
      });
    }
  }

  const BATCH_SIZE = 10;
  const total = malayItems.length;
  const numBatches = Math.ceil(total / BATCH_SIZE);

  console.log(`\n🇲🇾 [STAGE 3] Humanizing ${total} Malay Recipes in ${numBatches} batches...`);

  const schema = {
    type: "OBJECT",
    properties: {
      recipes: {
        type: "ARRAY",
        items: {
          type: "OBJECT",
          properties: {
            id: { type: "STRING" },
            description: { type: "STRING" },
            steps: { type: "ARRAY", items: { type: "STRING" } }
          },
          required: ["id", "description", "steps"]
        }
      }
    },
    required: ["recipes"]
  };

  for (let b = 0; b < numBatches; b++) {
    const startIdx = b * BATCH_SIZE;
    const endIdx = Math.min(startIdx + BATCH_SIZE, total);
    const batch = malayItems.slice(startIdx, endIdx);

    console.log(`  🤖 Malay Batch ${b + 1}/${numBatches} (Recipes ${startIdx + 1} to ${endIdx})...`);

    const prompt = `You are a warm, experienced local Malay home cook and grandmother.
Your task is to review the descriptions and step-by-step instructions for the following batch of recipes in Malay (ms) and REWRITE them to completely break the "AI footprint".

🔴 STRICT HUMANIZATION STYLE INSTRUCTIONS:
1. BREVITY & CONCISENESS IS MANDATORY:
   - Make each step short, warm, and natural. Keep each step under 15-25 words.
   - Absolutely eliminate robotic preambles, cliches, or excessively technical explanations.
2. NATIVE COLLOQUIAL TONE:
   - Use warm, home-style language that a real Malay cook would use.
   - Remove any automated prefixes inside the string (e.g. do not write "Langkah 1:", "Langkah 2:"). Just return clean array strings for the steps.
3. Keep the descriptions short (1-2 sentences), highly inviting and warm.

BATCH DATA:
${JSON.stringify(batch, null, 2)}

Respond ONLY with valid JSON using the provided schema.`;

    const result = await callGemini(prompt, schema);
    if (result && result.recipes) {
      for (const r of result.recipes) {
        humanizedMalayMap[r.id] = r;
      }
    }
    await new Promise(res => setTimeout(res, 1200));
  }
}

// ── 6. Execution Runner ──────────────────────────────────────────────────────
async function run() {
  try {
    await runEnglishStage();
    await runChineseStage();
    await runMalayStage();

    console.log('\n🌟 All pipeline stages completed successfully! Writing back to database files...');

    // ── 7. Write Back to Source Files ──────────────────────────────────────────
    const esc = (s) => String(s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");

    // 7.1 Update worldRecipes.ts
    for (const recipe of worldRecipes) {
      const hum = humanizedEnglishMap[recipe.id];
      if (hum && hum.steps) {
        recipe.steps = hum.steps;
      }
      
      const lineIdx = worldRecipesLineIndex[recipe.id];
      worldRecipesLines[lineIdx] = `  r('${recipe.id}','${esc(recipe.name)}','${esc(recipe.country)}','${recipe.countryCode}','${recipe.emoji}','${esc(recipe.city)}','${recipe.category}','${recipe.difficulty}','${recipe.time}',${recipe.servings},${recipe.calories},[${recipe.tags.map(t => `'${esc(t)}'`).join(', ')}],[${recipe.ingredients.map(i => `'${esc(i)}'`).join(', ')}],[${recipe.steps.map(s => `'${esc(s)}'`).join(', ')}]),`;
    }
    fs.writeFileSync(worldRecipesPath, worldRecipesLines.join('\n'), 'utf-8');
    console.log('✓ Successfully wrote back to src/data/worldRecipes.ts');

    // 7.2 Update worldRecipeTranslations.ts
    for (const [id, langs] of Object.entries(worldRecipeTranslations)) {
      const humZh = humanizedChineseMap[id];
      const humMs = humanizedMalayMap[id];
      
      if (langs['zh-CN'] && humZh) {
        langs['zh-CN'].instructions = humZh.steps;
        langs['zh-CN'].description = humZh.description;
      }
      if (langs['ms'] && humMs) {
        langs['ms'].instructions = humMs.steps;
        langs['ms'].description = humMs.description;
      }
    }

    const transHeader = `export interface RecipeTranslation {
  title: string;
  description: string;
  ingredients: { item: string; amount: string }[];
  instructions: string[];
}

export const WORLD_RECIPE_TRANSLATIONS: Record<string, Record<string, RecipeTranslation>> = {`;

    const transEntries = [];
    for (const [id, langs] of Object.entries(worldRecipeTranslations)) {
      const langEntries = [];
      for (const [lang, trans] of Object.entries(langs)) {
        const ingredientsStr = trans.ingredients.map(ing => `        { item: '${esc(ing.item)}', amount: '${esc(ing.amount)}' }`).join(',\n');
        const instructionsStr = trans.instructions.map(ins => `        '${esc(ins)}'`).join(',\n');
        langEntries.push(`    '${lang}': {
      title: '${esc(trans.title)}',
      description: '${esc(trans.description)}',
      ingredients: [\n${ingredientsStr}\n      ],
      instructions: [\n${instructionsStr}\n      ]
    }`);
      }
      transEntries.push(`  '${id}': {\n${langEntries.join(',\n')}\n  }`);
    }
    const newTranslationsContent = `${transHeader}\n${transEntries.join(',\n')}\n};\n`;
    fs.writeFileSync(worldRecipeTranslationsPath, newTranslationsContent, 'utf-8');
    console.log('✓ Successfully wrote back to src/data/worldRecipeTranslations.ts');

    // 7.3 Update recipes.ts
    for (const recipe of recipes) {
      const humEn = humanizedEnglishMap[recipe.id];
      const humZh = humanizedChineseMap[recipe.id];
      const humMs = humanizedMalayMap[recipe.id];

      if (humEn) {
        if (humEn.description) recipe.description = humEn.description;
        if (humEn.steps) recipe.instructions = humEn.steps;
      }
      
      if (recipe.translations) {
        if (recipe.translations['zh-CN'] && humZh) {
          recipe.translations['zh-CN'].description = humZh.description;
          recipe.translations['zh-CN'].instructions = humZh.steps;
        }
        if (recipe.translations['ms'] && humMs) {
          recipe.translations['ms'].description = humMs.description;
          recipe.translations['ms'].instructions = humMs.steps;
        }
      }
    }

    const recipesHeader = `export interface Ingredient {
    item: string;
    amount: string;
    productId?: string; // Link to a product in our shop
}

export interface Recipe {
    id: string;
    title: string;
    description: string;
    image: string;
    prepTime: string;
    cookTime: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    servings: number;
    ingredients: Ingredient[];
    instructions: string[];
    tags: string[];
    translations?: Record<string, {
        title: string;
        description: string;
        ingredients: { item: string; amount: string }[];
        instructions: string[];
    }>;
    publishedAt?: string;
}

export const recipes: Recipe[] = [`;

    const recipeEntries = [];
    for (const recipe of recipes) {
      const ingredientsStr = recipe.ingredients.map(ing => `            { item: '${esc(ing.item)}', amount: '${esc(ing.amount)}'${ing.productId ? `, productId: '${ing.productId}'` : ''} }`).join(',\n');
      const instructionsStr = recipe.instructions.map(ins => `            '${esc(ins)}'`).join(',\n');
      const tagsStr = recipe.tags.map(t => `'${esc(t)}'`).join(', ');
      
      let translationsStr = '';
      if (recipe.translations) {
        const langEntries = [];
        for (const [lang, trans] of Object.entries(recipe.translations)) {
          const transIngs = trans.ingredients.map(ing => `                    { item: '${esc(ing.item)}', amount: '${esc(ing.amount)}' }`).join(',\n');
          const transIns = trans.instructions.map(ins => `                    '${esc(ins)}'`).join(',\n');
          langEntries.push(`            '${lang}': {
                title: '${esc(trans.title)}',
                description: '${esc(trans.description)}',
                ingredients: [\n${transIngs}\n                ],
                instructions: [\n${transIns}\n                ]
            }`);
        }
        translationsStr = `,\n        translations: {\n${langEntries.join(',\n')}\n        }`;
      }

      recipeEntries.push(`    {
        id: '${recipe.id}',
        title: '${esc(recipe.title)}',
        description: '${esc(recipe.description)}',
        image: '${recipe.image}',
        prepTime: '${recipe.prepTime}',
        cookTime: '${recipe.cookTime}',
        difficulty: '${recipe.difficulty}',
        servings: ${recipe.servings},
        ingredients: [\n${ingredientsStr}\n        ],
        instructions: [\n${instructionsStr}\n        ],
        tags: [${tagsStr}]${translationsStr}${recipe.publishedAt ? `,\n        publishedAt: '${recipe.publishedAt}'` : ''}
    }`);
    }
    const newRecipesContent = `${recipesHeader}\n${recipeEntries.join(',\n')}\n];\n`;
    fs.writeFileSync(recipesPath, newRecipesContent, 'utf-8');
    console.log('✓ Successfully wrote back to src/data/recipes.ts');

    console.log('\n🎉 ALL RECIPES HUMANIZED AND DEPLOYED CORRECTLY!');
    console.log('💡 Run `npx tsc --noEmit` and `npm run build` to confirm compilation.');
  } catch (err) {
    console.error('❌ Critical Pipeline Failure:', err.message);
    console.log('🔄 Restoring files from safety backups and exiting...');
    restoreBackups();
    process.exit(1);
  }
}

function restoreBackups() {
  const files = [
    'src/data/worldRecipes.ts',
    'src/data/worldRecipeTranslations.ts',
    'src/data/recipes.ts'
  ];
  for (const file of files) {
    const srcPath = path.join(backupDir, path.basename(file));
    const destPath = path.resolve(file);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`🔄 Restored ${file} from safety backup.`);
    }
  }
}

run();
