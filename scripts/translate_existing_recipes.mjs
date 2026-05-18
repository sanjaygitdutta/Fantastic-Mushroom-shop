/**
 * 🌍 Fantastic Food — Static Recipe Translation Pipeline
 * 
 * Localizes all 257 pre-existing recipes into Simplified Chinese (zh-CN) and Malay (ms).
 * Runs in two modes:
 *   1. Mock Mode (default): Generates premium mock translations to verify integration/rendering.
 *   2. Live Mode (--live): Calls Google Gemini API to generate professional translations.
 * 
 * Usage:
 *   node scripts/translate_existing_recipes.mjs
 *   GEMINI_API_KEY="your_key" node scripts/translate_existing_recipes.mjs --live
 */

import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// --- Configuration & Paths ---
const SCRATCH_DIR = path.resolve('C:/Users/abcom/.gemini/antigravity/brain/c889d11d-8969-432f-aa69-3b6ea1f1ce49/scratch');
const RECIPES_TS = path.resolve('src/data/recipes.ts');
const WORLD_RECIPES_TS = path.resolve('src/data/worldRecipes.ts');
const WORLD_TRANSLATIONS_TS = path.resolve('src/data/worldRecipeTranslations.ts');

const IS_LIVE = process.argv.includes('--live');
let GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (IS_LIVE && !GEMINI_API_KEY) {
  // Gracefully load from .env.local if present
  const envLocalPath = path.resolve('.env.local');
  if (fs.existsSync(envLocalPath)) {
    const envContent = fs.readFileSync(envLocalPath, 'utf-8');
    const match = envContent.match(/GEMINI_API_KEY\s*=\s*["']?([^"\n'\r]+)["']?/);
    if (match) {
      GEMINI_API_KEY = match[1];
    }
  }
}

if (IS_LIVE && !GEMINI_API_KEY) {
  console.error('❌ ERROR: GEMINI_API_KEY environment variable or .env.local entry is not set.');
  console.log('   Please run with:');
  console.log('   $env:GEMINI_API_KEY="your_key"; node scripts/translate_existing_recipes.mjs --live');
  process.exit(1);
}

console.log(`🚀 Starting Recipe Translation Pipeline (Mode: ${IS_LIVE ? 'LIVE' : 'MOCK'})`);

// --- Clean Scratch Dir ---
fs.mkdirSync(SCRATCH_DIR, { recursive: true });

// --- Mock Translation Dictionary for Realistic Fallback Mocks ---
const MOCK_DICT = {
  'chicken': { zh: '鸡肉', ms: 'ayam' },
  'butter': { zh: '黄油', ms: 'mentega' },
  'cream': { zh: '奶油', ms: 'krim' },
  'tomato': { zh: '番茄', ms: 'tomat' },
  'onion': { zh: '洋葱', ms: 'bawang' },
  'garlic': { zh: '大蒜', ms: 'bawang putih' },
  'ginger': { zh: '生姜', ms: 'halia' },
  'rice': { zh: '米饭', ms: 'nasi' },
  'bread': { zh: '面包', ms: 'roti' },
  'cheese': { zh: '奶酪', ms: 'keju' },
  'potato': { zh: '土豆', ms: 'kentang' },
  'oil': { zh: '油', ms: 'minyak' },
  'water': { zh: '水', ms: 'air' },
  'salt': { zh: '盐', ms: 'garam' },
  'sugar': { zh: '糖', ms: 'gula' },
  'sauce': { zh: '酱汁', ms: 'sos' },
  'spicy': { zh: '辣味', ms: 'pedas' },
  'curry': { zh: '咖喱', ms: 'kari' },
  'soup': { zh: '汤', ms: 'sup' },
  'salad': { zh: '沙拉', ms: 'salad' },
  'sweet': { zh: '甜味', ms: 'manis' },
  'cake': { zh: '蛋糕', ms: 'kek' },
  'beef': { zh: '牛肉', ms: 'daging lembu' },
  'pork': { zh: '猪肉', ms: 'daging babi' },
  'fish': { zh: '鱼肉', ms: 'ikan' },
  'mutton': { zh: '羊肉', ms: 'daging kambing' }
};

function translateWord(word, lang) {
  const clean = word.toLowerCase().trim();
  for (const [key, value] of Object.entries(MOCK_DICT)) {
    if (clean.includes(key)) {
      return value[lang];
    }
  }
  return word;
}

function mockTranslateItem(name, amount, lang) {
  const transItem = translateWord(name, lang);
  const transAmt = amount.replace(/tbsp/g, lang === 'zh' ? '汤匙' : 'sudu besar')
                         .replace(/tsp/g, lang === 'zh' ? '茶匙' : 'sudu kecil')
                         .replace(/cup/g, lang === 'zh' ? '杯' : 'cawan')
                         .replace(/g\b/g, 'g')
                         .replace(/ml\b/g, 'ml');
  return { item: transItem, amount: transAmt };
}

function generateMockTranslation(recipe) {
  const { title, name, description, ingredients, instructions, steps, country, city, time } = recipe;
  const displayName = title || name || 'Recipe';
  const displayDesc = description || '';
  const displayCountry = country || 'World';
  const displayCity = city || 'Local';
  const displayTime = time || '30 min';

  const rawIngredients = ingredients || [];
  const rawSteps = instructions || steps || [];

  // ZH-CN Mock
  const zhIngredients = rawIngredients.map(ing => {
    if (typeof ing === 'string') {
      const parts = ing.split(' ');
      const amount = parts[0] || '';
      const item = parts.slice(1).join(' ') || ing;
      return mockTranslateItem(item, amount, 'zh');
    }
    return mockTranslateItem(ing.item || '', ing.amount || '', 'zh');
  });

  const zhInstructions = rawSteps.map((step, idx) => {
    return `步骤 ${idx + 1}: ${step.substring(0, 80)}`;
  });

  const zh = {
    title: `正宗 ${displayName}`,
    description: `如何在家制作来自 ${displayCountry} ${displayCity} 的正宗 ${displayName}。只需 ${displayTime} 即可做成！`,
    ingredients: zhIngredients,
    instructions: zhInstructions
  };

  // MS Mock
  const msIngredients = rawIngredients.map(ing => {
    if (typeof ing === 'string') {
      const parts = ing.split(' ');
      const amount = parts[0] || '';
      const item = parts.slice(1).join(' ') || ing;
      return mockTranslateItem(item, amount, 'ms');
    }
    return mockTranslateItem(ing.item || '', ing.amount || '', 'ms');
  });

  const msInstructions = rawSteps.map((step, idx) => {
    return `Langkah ${idx + 1}: ${step.substring(0, 80)}`;
  });

  const ms = {
    title: `Resipi ${displayName} Autentik`,
    description: `Cara mudah untuk membuat ${displayName} autentik dari ${displayCity}, ${displayCountry} di rumah. Siap dalam ${displayTime}!`,
    ingredients: msIngredients,
    instructions: msInstructions
  };

  return { 'zh-CN': zh, ms };
}

// --- High-Fidelity Single Quoted JS Serializer ---
function toSingleQuotedJS(obj, indentCount = 8) {
  const indent = ' '.repeat(indentCount);
  if (typeof obj === 'string') {
    return `'${obj.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
  }
  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]';
    const items = obj.map(item => toSingleQuotedJS(item, indentCount + 4));
    return `[\n${indent}    ${items.join(`,\n${indent}    `)}\n${indent}]`;
  }
  if (typeof obj === 'object' && obj !== null) {
    const keys = Object.keys(obj);
    if (keys.length === 0) return '{}';
    const entries = keys.map(key => {
      const formattedKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `'${key.replace(/'/g, "\\'")}'`;
      return `${formattedKey}: ${toSingleQuotedJS(obj[key], indentCount + 4)}`;
    });
    return `{\n${indent}    ${entries.join(`,\n${indent}    `)}\n${indent}}`;
  }
  return String(obj);
}

// --- Live Gemini API Translation Call ---
async function callGeminiTranslation(recipesBatch) {
  const prompt = `You are an expert culinary translator. Translate the following recipes into Simplified Chinese ('zh-CN') and Malay ('ms').
Return ONLY a valid JSON object matching this structure:
{
  "recipes": [
    {
      "id": "recipe_id",
      "zh-CN": {
        "title": "正宗...",
        "description": "...",
        "ingredients": [{"item": "...", "amount": "..."}],
        "instructions": ["步骤 1...", "步骤 2..."]
      },
      "ms": {
        "title": "Resipi...",
        "description": "...",
        "ingredients": [{"item": "...", "amount": "..."}],
        "instructions": ["Langkah 1...", "Langkah 2..."]
      }
    }
  ]
}

Recipes to translate:
${JSON.stringify(recipesBatch, null, 2)}`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.1,
      responseMimeType: "application/json"
    }
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Gemini API Error: ${errText}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Empty response from Gemini");

  return JSON.parse(text.trim());
}

// --- Dynamic CommonJS Transpilation Helper ---
function loadTypeScriptFileAsCommonJS(filepath, stripTypesFunc) {
  const content = fs.readFileSync(filepath, 'utf-8');
  const jsContent = stripTypesFunc(content);
  const tempPath = path.join(SCRATCH_DIR, `temp_${path.basename(filepath)}.cjs`);
  fs.writeFileSync(tempPath, jsContent, 'utf-8');
  
  // Clear require cache to ensure fresh load
  delete require.cache[require.resolve(tempPath)];
  const loaded = require(tempPath);
  fs.unlinkSync(tempPath);
  return loaded;
}

// --- Main Pipeline Execution ---
async function run() {
  // 1. Load recipes.ts as clean CJS object
  console.log('📦 Parsing src/data/recipes.ts...');
  const { recipes } = loadTypeScriptFileAsCommonJS(RECIPES_TS, (content) => {
    const idx = content.indexOf('export const recipes');
    if (idx === -1) throw new Error('Could not find recipes array in recipes.ts');
    let clean = content.substring(idx);
    clean = clean.replace(/:\s*Recipe\[\]/g, '');
    clean = clean.replace(/:\s*Ingredient\[\]/g, '');
    clean = clean.replace(/\bexport\s+/g, '');
    clean += '\nmodule.exports = { recipes };';
    return clean;
  });

  // 2. Load worldRecipes.ts as clean CJS object
  console.log('📦 Parsing src/data/worldRecipes.ts...');
  const { WORLD_RECIPES } = loadTypeScriptFileAsCommonJS(WORLD_RECIPES_TS, (content) => {
    const idx = content.indexOf('const ORIGINAL_WORLD_RECIPES');
    if (idx === -1) throw new Error('Could not find ORIGINAL_WORLD_RECIPES in worldRecipes.ts');
    
    // Slice right before COUNTRIES export to omit any helper functions with TS types
    const countriesIdx = content.indexOf('export const COUNTRIES');
    let clean = content.substring(idx, countriesIdx !== -1 ? countriesIdx : content.length);
    
    // Stub the r helper and translations object at the top
    clean = `const r = (id, name, country, countryCode, emoji, city, category, difficulty, time, servings, calories, tags, ingredients, steps) => ({
      id, name, country, countryCode, emoji, city, category, difficulty, time, servings, calories, tags, ingredients, steps
    });
    const WORLD_RECIPE_TRANSLATIONS = {};
    \n` + clean;
    
    // Strip types and ES exports
    clean = clean.replace(/:\s*WorldRecipe\[\]/g, '');
    clean = clean.replace(/\bexport\s+/g, '');
    clean += '\nmodule.exports = { WORLD_RECIPES };';
    return clean;
  });

  console.log(`✅ Loaded ${recipes.length} recipes from recipes.ts`);
  console.log(`✅ Loaded ${WORLD_RECIPES.length} recipes from worldRecipes.ts`);

  // 3. Find recipes missing translations
  const missingStatic = recipes.filter(r => !r.translations?.['zh-CN'] || !r.translations?.['ms']);
  const missingWorld = WORLD_RECIPES; // All 224 world recipes are missing zh-CN and ms

  console.log(`📝 Untranslated static recipes: ${missingStatic.length}`);
  console.log(`📝 Untranslated world recipes: ${missingWorld.length}`);

  let staticTranslations = {};
  let worldTranslations = {};

  const PROGRESS_JSON = path.join(SCRATCH_DIR, 'world_translations_progress.json');
  if (IS_LIVE && fs.existsSync(PROGRESS_JSON)) {
    try {
      worldTranslations = JSON.parse(fs.readFileSync(PROGRESS_JSON, 'utf-8'));
      console.log(`📦 Loaded ${Object.keys(worldTranslations).length} pre-translated world recipes from progress cache!`);
    } catch (e) {
      console.log('⚠️ Could not load progress cache:', e.message);
    }
  }

  if (!IS_LIVE) {
    console.log('🎨 Generating realistic premium Mock Translations...');
    for (const r of missingStatic) {
      staticTranslations[r.id] = generateMockTranslation(r);
    }
    for (const r of missingWorld) {
      worldTranslations[r.id] = generateMockTranslation(r);
    }
  } else {
    // --- LIVE MODE: Call Gemini with optimized batching ---
    console.log('🧠 Call Gemini AI to translate recipes...');
    
    // 1. Translate static recipes (Batch size: 2, due to high detail and token length)
    if (missingStatic.length > 0) {
      console.log(`📝 Starting translation for ${missingStatic.length} static recipes (detailed, batch size 2)...`);
      const staticToTranslate = missingStatic.map(r => ({ id: r.id, source: 'static', title: r.title, description: r.description, ingredients: r.ingredients, instructions: r.instructions }));
      const BATCH_SIZE = 2;
      for (let i = 0; i < staticToTranslate.length; i += BATCH_SIZE) {
        const batch = staticToTranslate.slice(i, i + BATCH_SIZE);
        console.log(`⏳ [Static] Translating batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(staticToTranslate.length / BATCH_SIZE)} (Recipes ${i + 1}-${Math.min(i + BATCH_SIZE, staticToTranslate.length)})...`);
        try {
          const responseObj = await callGeminiTranslation(batch);
          for (const tr of responseObj.recipes) {
            staticTranslations[tr.id] = { 'zh-CN': tr['zh-CN'], 'ms': tr.ms };
          }
          await new Promise(res => setTimeout(res, 3000));
        } catch (err) {
          console.error(`❌ Batch failed: ${err.message}. Retrying...`);
          await new Promise(res => setTimeout(res, 8000));
          try {
            const responseObj = await callGeminiTranslation(batch);
            for (const tr of responseObj.recipes) {
              staticTranslations[tr.id] = { 'zh-CN': tr['zh-CN'], 'ms': tr.ms };
            }
          } catch (retryErr) {
            console.error(`❌ Fatal: Batch failed retry. Skipping batch! Error: ${retryErr.message}`);
          }
        }
      }
    }

    // 2. Translate world recipes (Batch size: 5, lightweight one-liners)
    // Filter out already-cached translations to support seamless resuming
    const filteredWorld = missingWorld.filter(r => !worldTranslations[r.id]);
    if (filteredWorld.length > 0) {
      console.log(`📝 Starting translation for ${filteredWorld.length} world recipes (lightweight, batch size 5)...`);
      const worldToTranslate = filteredWorld.map(r => ({ id: r.id, source: 'world', title: r.name, description: `Authentic recipe from ${r.city}, ${r.country}`, ingredients: r.ingredients, instructions: r.steps }));
      const BATCH_SIZE = 5;
      for (let i = 0; i < worldToTranslate.length; i += BATCH_SIZE) {
        const batch = worldToTranslate.slice(i, i + BATCH_SIZE);
        console.log(`⏳ [World] Translating batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(worldToTranslate.length / BATCH_SIZE)} (Recipes ${i + 1}-${Math.min(i + BATCH_SIZE, worldToTranslate.length)})...`);
        try {
          const responseObj = await callGeminiTranslation(batch);
          for (const tr of responseObj.recipes) {
            worldTranslations[tr.id] = { 'zh-CN': tr['zh-CN'], 'ms': tr.ms };
          }
          // Incrementally write cache to handle crashes gracefully
          fs.writeFileSync(PROGRESS_JSON, JSON.stringify(worldTranslations, null, 2), 'utf-8');
          await new Promise(res => setTimeout(res, 3000));
        } catch (err) {
          console.error(`❌ Batch failed: ${err.message}. Retrying...`);
          await new Promise(res => setTimeout(res, 8000));
          try {
            const responseObj = await callGeminiTranslation(batch);
            for (const tr of responseObj.recipes) {
              worldTranslations[tr.id] = { 'zh-CN': tr['zh-CN'], 'ms': tr.ms };
            }
            fs.writeFileSync(PROGRESS_JSON, JSON.stringify(worldTranslations, null, 2), 'utf-8');
          } catch (retryErr) {
            console.error(`❌ Fatal: Batch failed retry. Skipping batch! Error: ${retryErr.message}`);
          }
        }
      }
    } else {
      console.log('✅ All world recipes already pre-translated and cached! Skipping Gemini requests.');
    }
  }

  // --- 4. Write translations back to files safely ---

  // Write static recipes translations in recipes.ts
  if (Object.keys(staticTranslations).length > 0) {
    console.log('💾 Writing static translations back to src/data/recipes.ts...');
    let recipesContent = fs.readFileSync(RECIPES_TS, 'utf-8');

    for (const [id, trans] of Object.entries(staticTranslations)) {
      const escapedZh = toSingleQuotedJS(trans['zh-CN'], 8).replace(/\n/g, '\n            ');
      const escapedMs = toSingleQuotedJS(trans.ms, 8).replace(/\n/g, '\n            ');

      // Find the specific recipe object boundary in the TS file by id
      const regexId = new RegExp(`id:\\s*'${id}'`);
      const idMatch = recipesContent.match(regexId);
      if (!idMatch) continue;

      // Find the translations block or closing block of this recipe
      const startIdx = idMatch.index;
      const sub = recipesContent.substring(startIdx);
      
      // Let's check if the sub-block has an existing translations object
      const translationsMatch = sub.match(/translations:\s*\{/);
      // Ensure the match belongs to the current recipe object (before next recipe object)
      const subNext = sub.substring(8); // skip "id: 'X'" at the beginning of the sub-string
      const nextRecipeMatch = subNext.match(/id:\s*'/);
      const nextIdx = nextRecipeMatch ? nextRecipeMatch.index + 8 : sub.length;

      if (translationsMatch && translationsMatch.index < nextIdx) {
        // translations block exists! Insert zh-CN and ms keys inside it.
        const transStart = startIdx + translationsMatch.index + translationsMatch[0].length;
        const insertBlock = `
            'zh-CN': ${escapedZh},
            ms: ${escapedMs},`;
        recipesContent = recipesContent.substring(0, transStart) + insertBlock + recipesContent.substring(transStart);
      } else {
        // translations block does NOT exist! Insert it before the closing bracket of the recipe object
        // Find closing bracket of the current recipe block
        const closingBracketIdx = sub.substring(0, nextIdx).lastIndexOf('}');
        if (closingBracketIdx > 0) {
          const insertIdx = startIdx + closingBracketIdx;
          const insertBlock = `,
        translations: {
            'zh-CN': ${escapedZh},
            ms: ${escapedMs}
        }
    `;
          recipesContent = recipesContent.substring(0, insertIdx) + insertBlock + recipesContent.substring(insertIdx);
        }
      }
    }

    fs.writeFileSync(RECIPES_TS, recipesContent, 'utf-8');
    console.log('✅ src/data/recipes.ts updated successfully!');
  }

  // Write global recipes translations in worldRecipeTranslations.ts
  console.log('💾 Writing world translations back to src/data/worldRecipeTranslations.ts...');
  
  // Format the dictionary as clean TypeScript exports
  let dictTsContent = `export interface RecipeTranslation {
  title: string;
  description: string;
  ingredients: { item: string; amount: string }[];
  instructions: string[];
}

export const WORLD_RECIPE_TRANSLATIONS: Record<string, Record<string, RecipeTranslation>> = {
`;

  for (const [id, trans] of Object.entries(worldTranslations)) {
    const zh = trans['zh-CN'] || {};
    const ms = trans.ms || {};

    const zhTitle = String(zh.title || '').replace(/'/g, "\\'");
    const zhDesc = String(zh.description || '').replace(/'/g, "\\'");
    const zhIngredients = (zh.ingredients || []).map(ing => {
      const item = String(ing?.item || '').replace(/'/g, "\\'");
      const amount = String(ing?.amount || '').replace(/'/g, "\\'");
      return `        { item: '${item}', amount: '${amount}' }`;
    }).join(',\n');
    const zhInstructions = (zh.instructions || []).map(step => {
      return `        '${String(step || '').replace(/'/g, "\\'")}'`;
    }).join(',\n');

    const msTitle = String(ms.title || '').replace(/'/g, "\\'");
    const msDesc = String(ms.description || '').replace(/'/g, "\\'");
    const msIngredients = (ms.ingredients || []).map(ing => {
      const item = String(ing?.item || '').replace(/'/g, "\\'");
      const amount = String(ing?.amount || '').replace(/'/g, "\\'");
      return `        { item: '${item}', amount: '${amount}' }`;
    }).join(',\n');
    const msInstructions = (ms.instructions || []).map(step => {
      return `        '${String(step || '').replace(/'/g, "\\'")}'`;
    }).join(',\n');

    dictTsContent += `  '${id}': {
    'zh-CN': {
      title: '${zhTitle}',
      description: '${zhDesc}',
      ingredients: [
${zhIngredients}
      ],
      instructions: [
${zhInstructions}
      ]
    },
    ms: {
      title: '${msTitle}',
      description: '${msDesc}',
      ingredients: [
${msIngredients}
      ],
      instructions: [
${msInstructions}
      ]
    }
  },
`;
  }

  dictTsContent += '};\n';
  
  fs.writeFileSync(WORLD_TRANSLATIONS_TS, dictTsContent, 'utf-8');
  console.log('✅ src/data/worldRecipeTranslations.ts populated successfully!');
  console.log('🎉 Recipe Translation Pipeline finished successfully!');
}

run().catch(err => {
  console.error('❌ Pipeline failed:', err);
  process.exit(1);
});
