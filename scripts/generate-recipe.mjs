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

// Reduce width from 1600 to 800 for faster loading
const FOOD_IMAGES = [
  // Batch 1 — original 20
  'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1631292784640-2b24be784d5d?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1600850056064-a8b380df8395?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1593826904040-3b79e96a5d8f?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1625339020895-c9e64cb8fcce?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1645696301019-35adcc18fc76?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1567364816519-cbc9c4e51d8b?auto=format&fit=crop&q=80&w=1600',
  // Batch 2 — 20 additional food images
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1551183053-bf91798d792e?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1495195134817-a1a28078aca2?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=1600',
  // Batch 3 — 20 more diverse food images
  'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1588316941895-6b85ec765e57?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1585325701954-e33a2d77ec76?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1617196034183-421b4040ed20?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1530469912745-a215c6b256ea?auto=format&fit=crop&q=80&w=1600',
];

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// ── Pick today's cuisine deterministically (cycles through all) ────────────
const now = new Date();
const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
const today = istTime.toISOString().split('T')[0];
const dayOfYear = Math.floor((istTime - new Date(istTime.getFullYear(), 0, 0)) / 86400000);
const selectedCuisine = WORLD_CUISINES[dayOfYear % WORLD_CUISINES.length];
const selectedDish = selectedCuisine.dishes[Math.floor(dayOfYear / WORLD_CUISINES.length) % selectedCuisine.dishes.length];
// Pick fallback image deterministically (offset by prime to avoid aligning with cuisine cycle)
const fallbackImageUrl = FOOD_IMAGES[(dayOfYear * 7 + 13) % FOOD_IMAGES.length];

// ── Fetch real dish image from TheMealDB (free, no API key) ─────────────────
async function getRealDishImage(dishName) {
  try {
    const query = encodeURIComponent(dishName);
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`, {
      headers: { 'User-Agent': 'FantasticFood/1.0' }
    });
    if (!res.ok) return null;
    const data = await res.json();
    const meal = data?.meals?.[0];
    if (meal?.strMealThumb) {
      // TheMealDB images are high quality JPEGs — append /preview for smaller size
      const thumbUrl = meal.strMealThumb.endsWith('/preview')
        ? meal.strMealThumb
        : `${meal.strMealThumb}/preview`;
      console.log(`📸 Found real image for "${dishName}" on TheMealDB!`);
      return thumbUrl;
    }
  } catch (e) {
    console.warn(`⚠️  TheMealDB lookup failed: ${e.message}`);
  }
  return null;
}

// ── Generate AI food photo using Gemini Imagen API ──────────────────────────
async function generateAIImage(dishName, cuisine, date) {
  try {
    const prompt = `Professional food photography of ${dishName}, authentic ${cuisine} cuisine. Close-up overhead shot, beautiful plating, natural warm lighting, restaurant quality, vibrant colors, appetizing presentation.`;

    // Try imagen-3.0-fast first, then fall back to earlier model
    const models = [
      'imagen-3.0-fast-generate-001',
      'imagen-3.0-generate-001',
    ];

    for (const model of models) {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:predict?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            instances: [{ prompt }],
            parameters: {
              sampleCount: 1,
              aspectRatio: '16:9',
            }
          })
        }
      );

      if (!res.ok) {
        const errText = await res.text();
        console.warn(`⚠️  Imagen model ${model} error (${res.status}): ${errText.slice(0, 300)}`);
        continue; // try next model
      }

      const data = await res.json();
      const b64 = data.predictions?.[0]?.bytesBase64Encoded;
      if (!b64) {
        console.warn(`⚠️  Imagen model ${model} returned no image data.`);
        continue;
      }

      // Save to public/recipe-images/{date}.jpg — served as /recipe-images/{date}.jpg
      const imgDir = path.resolve('./public/recipe-images');
      fs.mkdirSync(imgDir, { recursive: true });
      const imgPath = path.join(imgDir, `${date}.jpg`);
      fs.writeFileSync(imgPath, Buffer.from(b64, 'base64'));
      const sizeKB = Math.round(fs.statSync(imgPath).size / 1024);
      console.log(`🎨 AI image saved: public/recipe-images/${date}.jpg (${sizeKB}KB) via ${model}`);
      return `/recipe-images/${date}.jpg`;
    }

    return null; // all models failed

  } catch (e) {
    console.warn(`⚠️  Imagen generation failed: ${e.message}`);
    return null;
  }
}

console.log(`${selectedCuisine.flag} Generating ${selectedCuisine.cuisine} recipe: "${selectedDish}" for ${today}...`);

// ── Build Gemini prompt ────────────────────────────────────────────────────
const prompt = `You are a world-renowned chef. Write an authentic, detailed recipe for "${selectedDish}" — a classic dish from ${selectedCuisine.country}.
Provide translations for title, description, ingredients, and instructions in Hindi ('hi'), Bengali ('bn'), Marathi ('mr'), Telugu ('te'), and Tamil ('ta').

Return ONLY a valid JSON object. Use EXACTLY this structure:
{
  "en": {
    "title": "${selectedDish}",
    "description": "Short appetizing description.",
    "prepTime": "20 min",
    "cookTime": "40 min",
    "difficulty": "Medium",
    "servings": 4,
    "ingredients": [{ "item": "Name", "amount": "Qty" }],
    "instructions": ["Step 1", "Step 2"],
    "tags": ["${selectedCuisine.cuisine}", "Dinner", "Non-Vegetarian"]
  },
  "hi": { "title": "...", "description": "...", "ingredients": [{"item": "...", "amount": "..."}], "instructions": ["..."] },
  "bn": { "title": "...", "description": "...", "ingredients": [{"item": "...", "amount": "..."}], "instructions": ["..."] },
  "mr": { "title": "...", "description": "...", "ingredients": [{"item": "...", "amount": "..."}], "instructions": ["..."] },
  "te": { "title": "...", "description": "...", "ingredients": [{"item": "...", "amount": "..."}], "instructions": ["..."] },
  "ta": { "title": "...", "description": "...", "ingredients": [{"item": "...", "amount": "..."}], "instructions": ["..."] }
}

Rules:
- 5 to 7 ingredients max.
- 4 to 6 SHORT instructions (1 sentence each).
- Descriptions must be UNDER 15 words.
- All property names in double quotes. No trailing commas.`;

// ── Call Gemini REST API ──────────────────────────────────────────────────
async function callGemini(retryCount = 0) {
  const MAX_RETRIES = 3;
  const RETRY_DELAYS_MS = [5000, 15000, 45000];

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { 
      temperature: 0.1, 
      maxOutputTokens: 8192,
      responseMimeType: "application/json"
    }
  };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if ((response.status === 503 || response.status === 429) && retryCount < MAX_RETRIES) {
    const waitMs = RETRY_DELAYS_MS[retryCount];
    console.log(`⏳ Gemini overloaded (${response.status}). Retrying in ${waitMs / 1000}s... (attempt ${retryCount + 1}/${MAX_RETRIES})`);
    await new Promise(r => setTimeout(r, waitMs));
    return callGemini(retryCount + 1);
  }

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Gemini API Error (${response.status}): ${errText}`);
  }

  const data = await response.json();
  let text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  
  if (!text) throw new Error("Empty response from Gemini");

  // ── Robust JSON Repair ──────────────────────────────────────────────────
  function robustParse(raw) {
    let t = raw.trim();
    t = t.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();

    // Try parsing immediately
    try { return JSON.parse(t); } catch (e) {}

    console.log("🛠️ Attempting robust repair on truncated JSON...");

    // 1. Backtrack to find the last potential valid ending point
    // We look for characters that usually precede a new object or closing of a list
    let current = t;
    while (current.length > 50) {
        // Try to close common structures and parse
        const candidates = [
            current,
            current + '"',
            current + '"}',
            current + '"]',
            current + '"}]',
            current + '"}]}',
            current + '"}]}}',
            current + '"}]}}}'
        ];

        for (const cand of candidates) {
            try { return JSON.parse(cand); } catch (e) {}
        }

        // If no candidate works, strip the last character and repeat
        // Specifically strip back to the last comma or brace if we detect it's garbage
        const lastComma = current.lastIndexOf(',');
        const lastBrace = current.lastIndexOf('{');
        const lastBracket = current.lastIndexOf('[');
        const stripTo = Math.max(lastComma, lastBrace, lastBracket);
        
        if (stripTo > 0 && stripTo < current.length - 1) {
            current = current.substring(0, stripTo);
        } else {
            current = current.substring(0, current.length - 1);
        }
    }

    throw new Error("Could not repair JSON even with backtracking.");
  }

  try {
    return robustParse(text);
  } catch (parseErr) {
    console.error('\u274c JSON Parse Failed. Showing raw output snippet:');
    console.error(text.slice(-500));
    throw new Error(`JSON parse failed: ${parseErr.message}`);
  }
}

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
  // ── Resolve dish image: Imagen AI → TheMealDB → curated fallback ─────────
  console.log(`🖼️  Attempting AI image generation via Gemini Imagen...`);
  const aiImage    = await generateAIImage(selectedDish, selectedCuisine.cuisine, today);
  const mealDbImage = aiImage ? null : await getRealDishImage(selectedDish);
  const imageUrl   = aiImage || mealDbImage || fallbackImageUrl;

  if (aiImage)      console.log(`✅ Using AI-generated image: ${imageUrl}`);
  else if (mealDbImage) console.log(`📸 Using TheMealDB image: ${imageUrl}`);
  else              console.log(`🖼️  Using curated fallback image.`);

  const recipe = await callGemini();

  // Validate
  const required = ['title', 'description', 'prepTime', 'cookTime', 'difficulty', 'servings', 'ingredients', 'instructions'];
  for (const field of required) {
    if (recipe.en[field] === undefined || recipe.en[field] === null) {
      throw new Error(`Missing required field in 'en': "${field}"`);
    }
  }
  if (!['Easy', 'Medium', 'Hard'].includes(recipe.en.difficulty)) {
    recipe.en.difficulty = 'Medium'; // safe fallback
  }
  if (!recipe.en.tags || !Array.isArray(recipe.en.tags)) {
    recipe.en.tags = [selectedCuisine.cuisine, 'Dinner']; // safe fallback
  }

  // Escape all characters that could break a TypeScript single-quoted string
  const esc = (s) => String(s)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")           // single quotes
    .replace(/\r/g, '')              // carriage returns
    .replace(/\n/g, ' ')             // actual newlines → space
    .replace(/\t/g, ' ')             // tabs → space
    .trim();

  const recipeTs = `    {
        id: '${today}',
        title: '${esc(recipe.en.title)}',
        description: '${esc(recipe.en.description)}',
        image: '${imageUrl}',
        prepTime: '${esc(recipe.en.prepTime)}',
        cookTime: '${esc(recipe.en.cookTime)}',
        difficulty: '${recipe.en.difficulty}',
        servings: ${Number(recipe.en.servings)},
        ingredients: [
${recipe.en.ingredients.map((i) => `            { item: '${esc(i.item)}', amount: '${esc(i.amount)}' }`).join(',\n')}
        ],
        instructions: [
${recipe.en.instructions.map((s) => `            '${esc(s)}'`).join(',\n')}
        ],
        tags: [${recipe.en.tags.map((t) => `'${esc(t)}'`).join(', ')}],
        translations: {
            hi: {
                title: '${esc(recipe.hi?.title || '')}',
                description: '${esc(recipe.hi?.description || '')}',
                ingredients: [${(recipe.hi?.ingredients || []).map((i) => `{ item: '${esc(i.item)}', amount: '${esc(i.amount)}' }`).join(', ')}],
                instructions: [${(recipe.hi?.instructions || []).map((s) => `'${esc(s)}'`).join(', ')}]
            },
            bn: {
                title: '${esc(recipe.bn?.title || '')}',
                description: '${esc(recipe.bn?.description || '')}',
                ingredients: [${(recipe.bn?.ingredients || []).map((i) => `{ item: '${esc(i.item)}', amount: '${esc(i.amount)}' }`).join(', ')}],
                instructions: [${(recipe.bn?.instructions || []).map((s) => `'${esc(s)}'`).join(', ')}]
            },
            mr: {
                title: '${esc(recipe.mr?.title || '')}',
                description: '${esc(recipe.mr?.description || '')}',
                ingredients: [${(recipe.mr?.ingredients || []).map((i) => `{ item: '${esc(i.item)}', amount: '${esc(i.amount)}' }`).join(', ')}],
                instructions: [${(recipe.mr?.instructions || []).map((s) => `'${esc(s)}'`).join(', ')}]
            },
            te: {
                title: '${esc(recipe.te?.title || '')}',
                description: '${esc(recipe.te?.description || '')}',
                ingredients: [${(recipe.te?.ingredients || []).map((i) => `{ item: '${esc(i.item)}', amount: '${esc(i.amount)}' }`).join(', ')}],
                instructions: [${(recipe.te?.instructions || []).map((s) => `'${esc(s)}'`).join(', ')}]
            },
            ta: {
                title: '${esc(recipe.ta?.title || '')}',
                description: '${esc(recipe.ta?.description || '')}',
                ingredients: [${(recipe.ta?.ingredients || []).map((i) => `{ item: '${esc(i.item)}', amount: '${esc(i.amount)}' }`).join(', ')}],
                instructions: [${(recipe.ta?.instructions || []).map((s) => `'${esc(s)}'`).join(', ')}]
            }
        }
    }`;

  if (!existingContent.match(/\];\s*$/)) {
    throw new Error('Unexpected format in recipes.ts — missing closing `];`');
  }

  const updatedContent = existingContent.replace(/\];\s*$/, `,\n${recipeTs}\n];\n`);
  fs.writeFileSync(recipesPath, updatedContent, 'utf-8');

  console.log(`✅ Added: "${recipe.en.title}"`);
  console.log(`   ${selectedCuisine.flag} ${selectedCuisine.country} | ${recipe.en.difficulty} | Serves ${recipe.en.servings} | ${today}`);

} catch (err) {
  console.error('❌ Failed:', err.message);
  process.exit(1);
}
