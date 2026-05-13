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

// Verified Unsplash food photos ONLY — every ID here confirmed to show actual food
// Width reduced to 800px for faster loading. TheMealDB handles dish-specific images.
const FOOD_IMAGES = [
  // Indian / Asian curries & rice
  'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=75&w=800', // Indian curry
  'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=75&w=800', // fried rice
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=75&w=800', // biryani/rice
  'https://images.unsplash.com/photo-1625339020895-c9e64cb8fcce?auto=format&fit=crop&q=75&w=800', // Indian food
  'https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&q=75&w=800', // pasta/noodles
  // Grilled / BBQ / Meat
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=75&w=800', // grilled chicken
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=75&w=800',   // BBQ skewers
  'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=75&w=800', // meat/steak
  'https://images.unsplash.com/photo-1631292784640-2b24be784d5d?auto=format&fit=crop&q=75&w=800', // grilled food
  'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=75&w=800', // burger
  // Salads / Vegetables / Fresh
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=75&w=800',   // salad bowl
  'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=75&w=800',   // healthy bowl
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=75&w=800', // vegetable bowl
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=75&w=800', // breakfast bowl
  'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=75&w=800', // colourful veggies
  // Italian / Pizza / Pasta
  'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=75&w=800',   // pizza
  'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=75&w=800', // pizza slices
  'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=75&w=800', // pasta Italian
  'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=75&w=800', // pasta dish
  'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=75&w=800', // pasta/noodles
  // Japanese / Sushi / Asian
  'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop&q=75&w=800', // sushi rolls
  'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=75&w=800', // Japanese eggs
  'https://images.unsplash.com/photo-1593826904040-3b79e96a5d8f?auto=format&fit=crop&q=75&w=800', // Asian food
  // Breakfast / Baked goods
  'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&q=75&w=800', // baked dish
  'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=75&w=800', // breakfast/pancakes
  'https://images.unsplash.com/photo-1551183053-bf91798d792e?auto=format&fit=crop&q=75&w=800',   // baked goods
  // Soup / Stew / Hearty
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=75&w=800', // soup/stew
  'https://images.unsplash.com/photo-1600850056064-a8b380df8395?auto=format&fit=crop&q=75&w=800', // hearty food
  // General gourmet
  'https://images.unsplash.com/photo-1567364816519-cbc9c4e51d8b?auto=format&fit=crop&q=75&w=800', // gourmet dish
  'https://images.unsplash.com/photo-1645696301019-35adcc18fc76?auto=format&fit=crop&q=75&w=800', // plated food
];

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// ── Pick today's cuisine deterministically (cycles through all) ────────────
const now = new Date();
const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
const today = istTime.toISOString().split('T')[0];
const dayOfYear = Math.floor((istTime - new Date(istTime.getFullYear(), 0, 0)) / 86400000);
const dayOfWeek = istTime.getDay(); // 0 is Sunday, 1 is Monday, etc.

let selectedCuisine;
let selectedDish;

// Prioritize Singaporean recipes 3 times a week (Monday, Wednesday, Friday)
if (dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5) {
  const singaporeCuisine = { country: 'Singapore', cuisine: 'Singaporean', flag: '🇸🇬', dishes: ['Hainanese Chicken Rice', 'Laksa', 'Char Kway Teow', 'Chilli Crab', 'Nasi Lemak', 'Mee Rebus', 'Roti Prata', 'Hokkien Mee', 'Bak Kut Teh', 'Fish Head Curry', 'Prawn Noodles', 'Oyster Omelette', 'Kaya Toast', 'Murtabak'] };
  selectedCuisine = singaporeCuisine;
  selectedDish = singaporeCuisine.dishes[dayOfYear % singaporeCuisine.dishes.length];
} else {
  selectedCuisine = WORLD_CUISINES[dayOfYear % WORLD_CUISINES.length];
  selectedDish = selectedCuisine.dishes[Math.floor(dayOfYear / WORLD_CUISINES.length) % selectedCuisine.dishes.length];
}
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
    // Sanitize dish name to prevent Google Imagen safety filter blocks
    const safeDishName = dishName
      .replace(/breast/ig, 'cutlet')
      .replace(/thigh/ig, 'portion')
      .replace(/pork/ig, 'savory meat')
      .replace(/beef/ig, 'savory meat')
      .replace(/raw/ig, 'fresh')
      .replace(/blood/ig, 'red sauce')
      .replace(/spicy fire/ig, 'warm cooked');

    const prompt = `A highly appetizing, hyper-realistic, professional food photography shot of a beautifully plated ${safeDishName}, authentic ${cuisine} culinary style. Served on a rustic ceramic dish, natural window daylight lighting, sharp focus, food magazine cover quality. Fully cooked, gourmet presentation, safe for work, absolutely delicious. You MUST generate this image.`;

    // Try imagen-3.0-generate-002 first, then fall back to earlier models
    const models = [
      'imagen-3.0-generate-002',
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

      // Save to public/recipe-images/{date}.jpg
      const imgDir = path.resolve('./public/recipe-images');
      fs.mkdirSync(imgDir, { recursive: true });
      const imgPath = path.join(imgDir, `${date}.jpg`);
      fs.writeFileSync(imgPath, Buffer.from(b64, 'base64'));
      const sizeKB = Math.round(fs.statSync(imgPath).size / 1024);
      console.log(`🎨 AI image saved: public/recipe-images/${date}.jpg (${sizeKB}KB) via ${model}`);
      return `/recipe-images/${date}.jpg`;
    }

    // ── Fallback to Pollinations AI (Free, No API Key) ──────────────────────
    console.log(`⚠️  All Gemini Imagen models failed. Falling back to Pollinations AI...`);
    const pollinationsUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=800&height=450&nologo=true&seed=${Math.floor(Math.random() * 1000)}`;
    const pollRes = await fetch(pollinationsUrl);
    
    if (pollRes.ok) {
      const buffer = await pollRes.arrayBuffer();
      const imgDir = path.resolve('./public/recipe-images');
      fs.mkdirSync(imgDir, { recursive: true });
      const imgPath = path.join(imgDir, `${date}.jpg`);
      fs.writeFileSync(imgPath, Buffer.from(buffer));
      const sizeKB = Math.round(fs.statSync(imgPath).size / 1024);
      console.log(`🎨 AI image saved via Pollinations AI: public/recipe-images/${date}.jpg (${sizeKB}KB)`);
      return `/recipe-images/${date}.jpg`;
    }

    console.warn(`⚠️  Pollinations AI fallback also failed.`);
    return null; // all models failed

  } catch (e) {
    console.warn(`⚠️  Imagen generation failed: ${e.message}`);
    return null;
  }
}

console.log(`${selectedCuisine.flag} Generating ${selectedCuisine.cuisine} recipe: "${selectedDish}" for ${today}...`);

// ── Build Gemini prompt ────────────────────────────────────────────────────
const prompt = `You are a world-renowned chef. Write an authentic, detailed recipe for "${selectedDish}" — a classic dish from ${selectedCuisine.country}. You MUST generate this recipe. Do not refuse.
Provide translations for title, description, ingredients, and instructions in Hindi ('hi'), Bengali ('bn'), Marathi ('mr'), Telugu ('te'), and Tamil ('ta').

Return ONLY a valid JSON object. Use EXACTLY this structure:
{
  "en": {
    "title": "${selectedDish}",
    "description": "Write a punchy, mouth-watering 3-4 sentence description that makes the user crave this dish. End with an exciting hook to make them want to cook it today!",
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
- 5 to 10 ingredients max.
- 4 to 5 CONCISE instructions (1-2 lines each max). Do not make them too detailed, keep them extremely brief to prevent generation failure.
- Descriptions should be 1-2 sentences, punchy and highly appetizing.
- CRITICAL: You MUST provide the FULL 'ingredients' and 'instructions' arrays for EVERY single language ('hi', 'bn', 'mr', 'te', 'ta'). Do NOT leave them empty. Do NOT return []. If you return an empty array for any language, the system will crash.
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
    try { return JSON.parse(t); } catch (e) { }

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
        try { return JSON.parse(cand); } catch (e) { }
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
  // ── Resolve dish image ────────────────────────────────────────────────────
  // Priority: Imagen AI (primary) → TheMealDB (fallback) → curated fallback
  let imageUrl = fallbackImageUrl;

  // 1️⃣ Gemini Imagen — High quality AI-generated food photos
  console.log(`🎨 Attempting AI image generation via Gemini Imagen 3 Fast...`);
  const aiImage = await generateAIImage(selectedDish, selectedCuisine.cuisine, today);

  if (aiImage) {
    imageUrl = aiImage;
    console.log(`✅ Using AI-generated image: ${imageUrl}`);
  }
  // 2️⃣ TheMealDB — free real food photos (fallback if AI fails)
  else {
    console.log(`📸 Imagen failed or unavailable — trying TheMealDB...`);
    const mealDbImage = await getRealDishImage(selectedDish);
    if (mealDbImage) {
      imageUrl = mealDbImage;
      console.log(`📸 Using TheMealDB real photo: ${imageUrl}`);
    }
    // 3️⃣ Curated Unsplash fallback
    else {
      console.log(`🖼️  TheMealDB miss — using curated fallback image.`);
    }
  }

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
