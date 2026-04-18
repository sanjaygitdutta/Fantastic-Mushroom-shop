/**
 * 🌍 Fantastic Food — Daily AI World Recipe Generator
 *
 * Generates a new world-class recipe every day from top global cuisines.
 * Called by GitHub Actions at 6 AM IST daily.
 * Uses Google Gemini 1.5 Flash (free tier).
 *
 * Setup: Add GEMINI_API_KEY to GitHub repository secrets.
 */

import fs from 'fs';
import https from 'https';
import path from 'path';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('❌ GEMINI_API_KEY not set. Add it to GitHub Secrets.');
  process.exit(1);
}

// ── World's Top Cuisines & Signature Dishes ───────────────────────────────
const WORLD_CUISINES = [
  // 🇮🇹 Italy
  { country: 'Italy', cuisine: 'Italian', flag: '🇮🇹', dishes: ['Spaghetti Carbonara', 'Risotto Milanese', 'Osso Buco', 'Tiramisu', 'Penne Arrabbiata', 'Lasagna Bolognese', 'Cacio e Pepe', 'Pesto Genovese', 'Saltimbocca', 'Polenta with Mushrooms'] },

  // 🇯🇵 Japan
  { country: 'Japan', cuisine: 'Japanese', flag: '🇯🇵', dishes: ['Chicken Ramen', 'Teriyaki Salmon', 'Miso Soup with Tofu', 'Gyoza Dumplings', 'Katsu Curry', 'Beef Sukiyaki', 'Yakitori', 'Agedashi Tofu', 'Chawanmushi', 'Japanese Fried Rice (Yakimeshi)'] },

  // 🇫🇷 France
  { country: 'France', cuisine: 'French', flag: '🇫🇷', dishes: ['Coq au Vin', 'Ratatouille', 'French Onion Soup', 'Boeuf Bourguignon', 'Crêpes Suzette', 'Quiche Lorraine', 'Bouillabaisse', 'Duck Confit', 'Vichyssoise', 'Salade Niçoise'] },

  // 🇲🇽 Mexico
  { country: 'Mexico', cuisine: 'Mexican', flag: '🇲🇽', dishes: ['Chicken Tacos al Pastor', 'Guacamole & Chips', 'Enchiladas Verdes', 'Chiles Rellenos', 'Tamales', 'Pozole Rojo', 'Mole Poblano', 'Ceviche', 'Elote (Street Corn)', 'Fajitas'] },

  // 🇹🇭 Thailand
  { country: 'Thailand', cuisine: 'Thai', flag: '🇹🇭', dishes: ['Pad Thai', 'Green Curry', 'Tom Yum Soup', 'Massaman Curry', 'Papaya Salad', 'Thai Basil Chicken', 'Khao Pad (Fried Rice)', 'Tom Kha Gai', 'Pad See Ew', 'Mango Sticky Rice'] },

  // 🇨🇳 China
  { country: 'China', cuisine: 'Chinese', flag: '🇨🇳', dishes: ['Kung Pao Chicken', 'Sweet and Sour Pork', 'Mapo Tofu', 'Peking Duck', 'Dim Sum (Har Gow)', 'Hot and Sour Soup', 'Mongolian Beef', 'General Tso Chicken', 'Char Siu', 'Dan Dan Noodles'] },

  // 🇮🇳 India
  { country: 'India', cuisine: 'Indian', flag: '🇮🇳', dishes: ['Butter Chicken', 'Biryani Hyderabadi', 'Dal Makhani', 'Palak Paneer', 'Chole Bhature', 'Rogan Josh', 'Malai Kofta', 'Pav Bhaji', 'Dosa with Sambar', 'Aloo Gobi'] },

  // 🇹🇷 Turkey
  { country: 'Turkey', cuisine: 'Turkish', flag: '🇹🇷', dishes: ['Adana Kebab', 'Shakshuka', 'Turkish Lentil Soup', 'Imam Bayildi', 'Menemen', 'Pide (Turkish Pizza)', 'Manti Dumplings', 'Çoban Salatası', 'Lahmacun', 'Baklava'] },

  // 🇱🇧 Lebanon
  { country: 'Lebanon', cuisine: 'Lebanese', flag: '🇱🇧', dishes: ['Hummus with Pita', 'Falafel', 'Fattoush Salad', 'Kibbeh', 'Shawarma', 'Tabbouleh', 'Baba Ghanoush', 'Kafta Kebabs', 'Mujadera', 'Molokhia'] },

  // 🇪🇸 Spain
  { country: 'Spain', cuisine: 'Spanish', flag: '🇪🇸', dishes: ['Seafood Paella', 'Gazpacho', 'Tortilla Española', 'Gambas al Ajillo', 'Patatas Bravas', 'Pulpo a la Gallega', 'Croquetas', 'Salmorejo', 'Fabada Asturiana', 'Pisto Manchego'] },

  // 🇬🇷 Greece
  { country: 'Greece', cuisine: 'Greek', flag: '🇬🇷', dishes: ['Moussaka', 'Spanakopita', 'Greek Salad (Horiatiki)', 'Tzatziki', 'Souvlaki', 'Pastitsio', 'Avgolemono Soup', 'Dolmades', 'Stifado', 'Kleftiko'] },

  // 🇲🇦 Morocco
  { country: 'Morocco', cuisine: 'Moroccan', flag: '🇲🇦', dishes: ['Chicken Tagine', 'Lamb Couscous', 'Harira Soup', 'Pastilla', 'Zaalouk Salad', 'Merguez Sausages', 'B\'stilla', 'Chermoula Fish', 'Bissara', 'Moroccan Mint Tea Cake'] },

  // 🇰🇷 South Korea
  { country: 'South Korea', cuisine: 'Korean', flag: '🇰🇷', dishes: ['Bibimbap', 'Korean Fried Chicken', 'Doenjang Jjigae', 'Japchae Noodles', 'Kimchi Jjigae', 'Bulgogi', 'Tteokbokki', 'Sundubu Jjigae', 'Samgyeopsal', 'Jajangmyeon'] },

  // 🇻🇳 Vietnam
  { country: 'Vietnam', cuisine: 'Vietnamese', flag: '🇻🇳', dishes: ['Pho Bo (Beef Noodle Soup)', 'Banh Mi', 'Goi Cuon (Spring Rolls)', 'Bun Bo Hue', 'Cao Lau', 'Com Tam (Broken Rice)', 'Banh Xeo', 'Bun Cha', 'Mi Quang', 'Lau (Hotpot)'] },

  // 🇺🇸 USA
  { country: 'USA', cuisine: 'American', flag: '🇺🇸', dishes: ['BBQ Ribs', 'Clam Chowder', 'Mac and Cheese', 'Buffalo Wings', 'Cajun Jambalaya', 'New England Lobster Roll', 'Texas Chili', 'Shrimp and Grits', 'Philly Cheesesteak', 'Gumbo'] },

  // 🇵🇪 Peru
  { country: 'Peru', cuisine: 'Peruvian', flag: '🇵🇪', dishes: ['Ceviche Peruano', 'Lomo Saltado', 'Aji de Gallina', 'Causa Limeña', 'Anticuchos', 'Arroz con Leche', 'Seco de Cordero', 'Pollo a la Brasa', 'Papa a la Huancaina', 'Tiradito'] },

  // 🇪🇹 Ethiopia
  { country: 'Ethiopia', cuisine: 'Ethiopian', flag: '🇪🇹', dishes: ['Doro Wat (Spicy Chicken Stew)', 'Injera with Tibs', 'Misir Wat (Red Lentils)', 'Shiro Wat', 'Kitfo (Ethiopian Tartare)', 'Zilzil Tibs', 'Ful Medames', 'Gomen (Collard Greens)', 'Ayib Cheese Salad', 'Tej Honey Wine Cake'] },

  // 🇵🇰 Pakistan / 🇮🇳 North India
  { country: 'Pakistan', cuisine: 'Pakistani', flag: '🇵🇰', dishes: ['Nihari', 'Haleem', 'Chicken Karahi', 'Seekh Kebab', 'Saag Gosht', 'Chapli Kebab', 'Daal Chawal', 'Mutton Biryani', 'Paya Soup', 'Sheer Khurma'] },

  // 🇧🇷 Brazil
  { country: 'Brazil', cuisine: 'Brazilian', flag: '🇧🇷', dishes: ['Feijoada (Black Bean Stew)', 'Churrasco', 'Moqueca (Fish Curry)', 'Pão de Queijo', 'Coxinha', 'Vatapá', 'Picanha Steak', 'Acarajé', 'Brigadeiro', 'Caldo Verde'] },

  // 🇮🇩 Indonesia
  { country: 'Indonesia', cuisine: 'Indonesian', flag: '🇮🇩', dishes: ['Nasi Goreng', 'Rendang', 'Satay (Sate)', 'Gado-Gado', 'Soto Ayam', 'Mie Goreng', 'Bakso (Meatball Soup)', 'Opor Ayam', 'Pecel', 'Rawon'] },
];

// Curated Unsplash food photo pool
const FOOD_IMAGES = [
  'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=2071',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=2081',
  'https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1631292784640-2b24be784d5d?auto=format&fit=crop&q=80&w=2069',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1600850056064-a8b380df8395?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1593826904040-3b79e96a5d8f?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop&q=80&w=2067',
  'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1625339020895-c9e64cb8fcce?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=80&w=2058',
  'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=2069',
  'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=2072',
  'https://images.unsplash.com/photo-1645696301019-35adcc18fc76?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1567364816519-cbc9c4e51d8b?auto=format&fit=crop&q=80&w=2070',
];

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// ── Pick today's cuisine deterministically (cycles through all) ────────────
const today = new Date().toISOString().split('T')[0];
const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
const selectedCuisine = WORLD_CUISINES[dayOfYear % WORLD_CUISINES.length];
const selectedDish = selectedCuisine.dishes[Math.floor(dayOfYear / WORLD_CUISINES.length) % selectedCuisine.dishes.length];
const imageUrl = pick(FOOD_IMAGES);

console.log(`${selectedCuisine.flag} Generating ${selectedCuisine.cuisine} recipe: "${selectedDish}" for ${today}...`);

// ── Build Gemini prompt ────────────────────────────────────────────────────
const prompt = `You are a world-renowned chef and food writer. Write an authentic, detailed recipe for "${selectedDish}" — a classic dish from ${selectedCuisine.country}.

Return ONLY a valid JSON object with NO markdown, NO code blocks, NO extra text. Just raw JSON.

Use EXACTLY this structure:
{
  "title": "${selectedDish}",
  "description": "An appetizing 2-sentence description that captures the soul of the dish and its origin.",
  "prepTime": "20 min",
  "cookTime": "40 min",
  "difficulty": "Medium",
  "servings": 4,
  "ingredients": [
    { "item": "Ingredient Name", "amount": "250g" }
  ],
  "instructions": [
    "Step 1: Detailed cooking step.",
    "Step 2: Continue with next step."
  ],
  "tags": ["${selectedCuisine.cuisine}", "Dinner", "Non-Vegetarian"]
}

Strict rules:
- difficulty: EXACTLY one of "Easy", "Medium", or "Hard"
- 8 to 12 authentic, specific ingredients with precise measurements
- 6 to 9 detailed, clear cooking steps
- 3 tags: [cuisine-name, meal-type, diet-type (Vegetarian/Non-Vegetarian/Vegan)]
- servings as a plain number (not a string)
- prepTime and cookTime as "XX min" strings
- Make it truly authentic to ${selectedCuisine.country}'s culinary tradition
- Use ingredients that are commonly available in India`;

// ── Call Gemini REST API ──────────────────────────────────────────────────
const callGemini = () => new Promise((resolve, reject) => {
  const body = JSON.stringify({
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { 
      temperature: 0.4, 
      maxOutputTokens: 3000
    },
  });

  const options = {
    hostname: 'generativelanguage.googleapis.com',
    path: `/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
  };

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (c) => (data += c));
    res.on('end', () => {
      try {
        const parsed = JSON.parse(data);
        if (parsed.error) return reject(new Error(`Gemini API error: ${parsed.error.message}`));
        const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) return reject(new Error('Empty response from Gemini'));
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) return reject(new Error(`No JSON in response:\n${text}`));
        resolve(JSON.parse(jsonMatch[0]));
      } catch (e) {
        reject(new Error(`Parse error: ${e.message}\nRaw: ${data.slice(0, 500)}`));
      }
    });
  });

  req.on('error', reject);
  req.write(body);
  req.end();
});

// ── Main ──────────────────────────────────────────────────────────────────
const recipesPath = path.resolve('./src/data/recipes.ts');

if (!fs.existsSync(recipesPath)) {
  console.error(`❌ Not found: ${recipesPath}`);
  process.exit(1);
}

const existingContent = fs.readFileSync(recipesPath, 'utf-8');

if (existingContent.includes(`id: '${today}'`)) {
  console.log(`✅ Recipe for ${today} already exists. Nothing to do.`);
  process.exit(0);
}

try {
  const recipe = await callGemini();

  // Validate
  const required = ['title', 'description', 'prepTime', 'cookTime', 'difficulty', 'servings', 'ingredients', 'instructions', 'tags'];
  for (const field of required) {
    if (recipe[field] === undefined || recipe[field] === null) {
      throw new Error(`Missing required field: "${field}"`);
    }
  }
  if (!['Easy', 'Medium', 'Hard'].includes(recipe.difficulty)) {
    recipe.difficulty = 'Medium'; // safe fallback
  }

  const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");

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

  if (!existingContent.match(/\];\s*$/)) {
    throw new Error('Unexpected format in recipes.ts — missing closing `];`');
  }

  const updatedContent = existingContent.replace(/\];\s*$/, `,\n${recipeTs}\n];\n`);
  fs.writeFileSync(recipesPath, updatedContent, 'utf-8');

  console.log(`✅ Added: "${recipe.title}"`);
  console.log(`   ${selectedCuisine.flag} ${selectedCuisine.country} | ${recipe.difficulty} | Serves ${recipe.servings} | ${today}`);

} catch (err) {
  console.error('❌ Failed:', err.message);
  process.exit(1);
}
