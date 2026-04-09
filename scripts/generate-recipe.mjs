/**
 * 🍄 Fantastic Food — Daily AI Recipe Generator
 *
 * Called by GitHub Actions every day at 6 AM IST.
 * Uses Google Gemini 1.5 Flash (free tier) to generate a new
 * mushroom-focused recipe and appends it to src/data/recipes.ts.
 * Vercel then auto-deploys from the git push.
 *
 * Setup: Add GEMINI_API_KEY to your GitHub repository secrets.
 */

import fs from 'fs';
import https from 'https';
import path from 'path';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('❌ GEMINI_API_KEY environment variable is not set.');
  console.error('   Add it to GitHub Secrets: Settings → Secrets → Actions → New secret');
  process.exit(1);
}

// ── Variety pools ──────────────────────────────────────────────────────────
const MUSHROOM_TYPES = [
  'Paddy Straw Mushroom', 'Oyster Mushroom', 'Button Mushroom',
  'Shiitake Mushroom', "Lion's Mane Mushroom", 'Portobello Mushroom',
  'King Oyster Mushroom', 'Enoki Mushroom', 'Maitake Mushroom',
  'Reishi Mushroom', 'Crimini Mushroom', 'Black Fungus (Wood Ear)',
];

const CUISINES = [
  'Indian', 'South Indian', 'Mughlai', 'Rajasthani',
  'Chinese', 'Thai', 'Japanese', 'Korean',
  'Italian', 'Mediterranean', 'Continental', 'Mexican',
];

// Curated Unsplash food photo URLs (guaranteed to work)
const FOOD_IMAGES = [
  'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=2071',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=2081',
  'https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1600850056064-a8b380df8395?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1631292784640-2b24be784d5d?auto=format&fit=crop&q=80&w=2069',
  'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop&q=80&w=2067',
  'https://images.unsplash.com/photo-1593826904040-3b79e96a5d8f?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&q=80&w=2070',
];

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// ── Build prompt ───────────────────────────────────────────────────────────
const today = new Date().toISOString().split('T')[0];
const mushroom = pick(MUSHROOM_TYPES);
const cuisine = pick(CUISINES);
const imageUrl = pick(FOOD_IMAGES);

console.log(`🍄 Generating ${cuisine} recipe featuring ${mushroom} for ${today}...`);

const prompt = `You are a world-class chef. Generate a unique and delicious ${cuisine} recipe featuring ${mushroom} as the primary ingredient.

Return ONLY a valid JSON object. No markdown, no code blocks, just raw JSON.

Use EXACTLY this structure:
{
  "title": "Creative Recipe Title with ${mushroom}",
  "description": "An appetizing 2-sentence description of the dish.",
  "prepTime": "15 min",
  "cookTime": "25 min",
  "difficulty": "Easy",
  "servings": 4,
  "ingredients": [
    { "item": "Ingredient Name", "amount": "250g" }
  ],
  "instructions": [
    "Step 1: Do this first.",
    "Step 2: Then do this."
  ],
  "tags": ["${cuisine}", "Dinner", "Vegetarian"]
}

Rules:
- difficulty must be exactly "Easy", "Medium", or "Hard"
- 7 to 10 ingredients
- 5 to 8 clear, actionable cooking steps
- 3 tags: [cuisine, meal-type, diet-type]
- servings as a number, not a string
- prepTime and cookTime as "XX min" strings
- Make it genuinely authentic and delicious`;

// ── Call Gemini API ────────────────────────────────────────────────────────
const callGemini = () => new Promise((resolve, reject) => {
  const body = JSON.stringify({
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 1.0,
      maxOutputTokens: 1500,
    },
  });

  const options = {
    hostname: 'generativelanguage.googleapis.com',
    path: `/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body),
    },
  };

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => (data += chunk));
    res.on('end', () => {
      try {
        const parsed = JSON.parse(data);
        if (parsed.error) {
          return reject(new Error(`Gemini API error: ${parsed.error.message}`));
        }
        const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) return reject(new Error('Empty response from Gemini'));

        // Extract JSON from the response (handles cases where Gemini adds extra text)
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) return reject(new Error(`No JSON found in response: ${text}`));

        resolve(JSON.parse(jsonMatch[0]));
      } catch (e) {
        reject(new Error(`Failed to parse Gemini response: ${e.message}\nRaw: ${data}`));
      }
    });
  });

  req.on('error', reject);
  req.write(body);
  req.end();
});

// ── Main logic ────────────────────────────────────────────────────────────
const recipesPath = path.resolve('./src/data/recipes.ts');

if (!fs.existsSync(recipesPath)) {
  console.error(`❌ Could not find ${recipesPath}`);
  process.exit(1);
}

const existingContent = fs.readFileSync(recipesPath, 'utf-8');

// Skip if already generated today
if (existingContent.includes(`id: '${today}'`)) {
  console.log(`✅ Recipe for ${today} already exists. Skipping.`);
  process.exit(0);
}

try {
  const recipe = await callGemini();

  // Validate required fields
  const required = ['title', 'description', 'prepTime', 'cookTime', 'difficulty', 'servings', 'ingredients', 'instructions', 'tags'];
  for (const field of required) {
    if (!recipe[field]) throw new Error(`Missing field in AI response: ${field}`);
  }

  // Sanitise strings to be safe inside single-quoted TS
  const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");

  // Format as TypeScript object block
  const recipeTs = `    {
        id: '${today}',
        title: '${esc(recipe.title)}',
        description: '${esc(recipe.description)}',
        image: '${imageUrl}',
        prepTime: '${esc(recipe.prepTime)}',
        cookTime: '${esc(recipe.cookTime)}',
        difficulty: '${recipe.difficulty}',
        servings: ${Number(recipe.servings)},
        ingredients: [
${recipe.ingredients.map((i) => `            { item: '${esc(i.item)}', amount: '${esc(i.amount)}' }`).join(',\n')}
        ],
        instructions: [
${recipe.instructions.map((s) => `            '${esc(s)}'`).join(',\n')}
        ],
        tags: [${recipe.tags.map((t) => `'${esc(t)}'`).join(', ')}]
    }`;

  // Append before the closing `];` of the recipes array
  if (!existingContent.match(/\];\s*$/)) {
    throw new Error('Could not find closing `];` in recipes.ts — file format may have changed.');
  }

  const updatedContent = existingContent.replace(
    /\];\s*$/,
    `,\n${recipeTs}\n];\n`
  );

  fs.writeFileSync(recipesPath, updatedContent, 'utf-8');
  console.log(`✅ Successfully added: "${recipe.title}"`);
  console.log(`   Cuisine: ${cuisine} | Mushroom: ${mushroom} | Date: ${today}`);

} catch (err) {
  console.error('❌ Failed to generate recipe:', err.message);
  process.exit(1);
}
