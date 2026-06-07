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

let GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  const envPath = path.resolve('.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    const match = envContent.match(/GEMINI_API_KEY=(.*)/);
    if (match) {
      GEMINI_API_KEY = match[1].trim().replace(/^["']|["']$/g, '');
    }
  }
}

if (!GEMINI_API_KEY) {
  console.error('❌ GEMINI_API_KEY not set. Add it to GitHub Secrets or .env.local.');
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
const FOOD_IMAGES_BY_CATEGORY = {
  curry: [
    'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=75&w=800', // Indian curry
    'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=75&w=800', // fried rice
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=75&w=800', // biryani/rice
    'https://images.unsplash.com/photo-1625339020895-c9e64cb8fcce?auto=format&fit=crop&q=75&w=800', // Indian food
  ],
  grill_meat: [
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=75&w=800', // grilled chicken
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=75&w=800',   // BBQ skewers
    'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=75&w=800', // meat/steak
    'https://images.unsplash.com/photo-1631292784640-2b24be784d5d?auto=format&fit=crop&q=75&w=800', // grilled food
  ],
  salad_fresh: [
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=75&w=800',   // salad bowl
    'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=75&w=800',   // healthy bowl
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=75&w=800', // vegetable bowl
    'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=75&w=800', // breakfast bowl
  ],
  pasta_pizza: [
    'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=75&w=800',   // pizza
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=75&w=800', // pizza slices
    'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=75&w=800', // pasta Italian
    'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=75&w=800', // pasta dish
  ],
  asian: [
    'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop&q=75&w=800', // sushi rolls
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=75&w=800', // Japanese eggs
    'https://images.unsplash.com/photo-1593826904040-3b79e96a5d8f?auto=format&fit=crop&q=75&w=800', // Asian food
  ],
  soup_stew: [
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=75&w=800', // soup/stew
    'https://images.unsplash.com/photo-1600850056064-a8b380df8395?auto=format&fit=crop&q=75&w=800', // hearty food
  ],
  general: [
    'https://images.unsplash.com/photo-1567364816519-cbc9c4e51d8b?auto=format&fit=crop&q=75&w=800', // gourmet dish
    'https://images.unsplash.com/photo-1645696301019-35adcc18fc76?auto=format&fit=crop&q=75&w=800', // plated food
  ]
};

function getCuisineCategory(cuisine, dishName) {
  const c = cuisine.toLowerCase();
  const d = dishName.toLowerCase();
  
  if (d.includes('stew') || d.includes('soup') || d.includes('moqueca') || d.includes('tagine') || d.includes('curry') || d.includes('karahi')) {
    return 'soup_stew';
  }
  if (c.includes('indian') || c.includes('pakistani') || c.includes('thai')) return 'curry';
  if (c.includes('japanese') || c.includes('korean') || c.includes('chinese') || c.includes('vietnamese') || c.includes('indonesian')) return 'asian';
  if (c.includes('italian')) return 'pasta_pizza';
  if (c.includes('mexican') || c.includes('american') || c.includes('brazilian') || c.includes('turkish') || c.includes('moroccan') || c.includes('spanish')) return 'grill_meat';
  return 'general';
}

function getSmartFallbackImage(cuisine, dishName, dayOfYear) {
  const category = getCuisineCategory(cuisine, dishName);
  const images = FOOD_IMAGES_BY_CATEGORY[category];
  return images[(dayOfYear * 7 + 13) % images.length];
}

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// ── Pick today's cuisine & generate unique dish name ──────────────────────
const now = new Date();
const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
const dayOfYear = Math.floor((istTime - new Date(istTime.getFullYear(), 0, 0)) / 86400000);
const dayOfWeek = istTime.getDay(); // 0 is Sunday, 1 is Monday, etc.

// Schedule this post for today (publish immediately or later today at a random time)
const today = istTime.toISOString().split('T')[0];

// Generate a random post time for today (e.g. between 8 AM and 10 PM IST)
const randomHour = Math.floor(Math.random() * 14) + 8; // 8 to 21
const randomMinute = Math.floor(Math.random() * 60);
const publishDate = new Date(`${today}T${String(randomHour).padStart(2, '0')}:${String(randomMinute).padStart(2, '0')}:00+05:30`);
const publishedAtStr = publishDate.toISOString();

let selectedCuisine;
let fallbackDishPool;

// Prioritize Singaporean recipes 3 times a week (Monday, Wednesday, Friday)
if (dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5) {
  const singaporeCuisine = { country: 'Singapore', cuisine: 'Singaporean', flag: '🇸🇬', dishes: ['Hainanese Chicken Rice', 'Laksa', 'Char Kway Teow', 'Chilli Crab', 'Nasi Lemak', 'Mee Rebus', 'Roti Prata', 'Hokkien Mee', 'Bak Kut Teh', 'Fish Head Curry', 'Prawn Noodles', 'Oyster Omelette', 'Kaya Toast', 'Murtabak'] };
  selectedCuisine = singaporeCuisine;
  fallbackDishPool = singaporeCuisine.dishes;
} else {
  selectedCuisine = WORLD_CUISINES[dayOfYear % WORLD_CUISINES.length];
  fallbackDishPool = selectedCuisine.dishes;
}

// Fallback dish selection deterministically
const fallbackDish = fallbackDishPool[dayOfYear % fallbackDishPool.length];

// ── Dynamically generate a completely unique, authentic dish name via Gemini ────
async function generateUniqueDishName(cuisine, country) {
  try {
    const prompt = `You are a world-renowned culinary analyst and SEO expert.
Identify the single most popular, highly searched regional signature dish for ${cuisine} cuisine from ${country} on the internet.
You must choose a dish that real people search for massive numbers of times (e.g., 'Butter Chicken', 'Chicken Biryani', 'Pad Thai', 'Tacos al Pastor', 'Chicken Karahi').
Format the dish title exactly as a search user would type it or expect to see it for high search intent (e.g., 'Authentic Butter Chicken' or 'Easy Chicken Biryani').
Do NOT invent fancy, long, gourmet chef descriptions or artificial titles (like 'Slow-Simmered Murg Makhani with Charcoal-Smoked Gravy') that have zero search volume.
Return ONLY a single line containing the exact highly-searched English title of the dish. Do not wrap in quotes or markdown.
CRITICAL: The title must be a clean, search-optimized proper noun. Never end the title with conjunctions like 'and', 'with', 'for', 'or', or commas. Keep the title under 5-7 words.`;

    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.8,
        maxOutputTokens: 100
      }
    };

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Gemini API returned status ${response.status}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error("Empty response");
    return text.trim().replace(/^["']|["']$/g, '');
  } catch (e) {
    console.warn(`⚠️ Dish name generation failed: ${e.message}. Using fallback selection.`);
    return null;
  }
}

// Fetch dynamic dish or fall back if Gemini call fails
console.log(`🧠 Dynamic Planner: Fetching unique ${selectedCuisine.cuisine} dish name from Gemini...`);
let selectedDish = await generateUniqueDishName(selectedCuisine.cuisine, selectedCuisine.country);
if (!selectedDish) {
  selectedDish = fallbackDish;
  console.log(`⚠️ Falling back to deterministic dish: "${selectedDish}"`);
} else {
  // Sanitization step: clean double quotes and trailing conjunctions
  selectedDish = selectedDish.replace(/["']/g, '').replace(/\s+(and|with|for|&|or|और|এবং)\s*$/i, '').trim();
  console.log(`✨ Gemini Dynamically Planned Dish: "${selectedDish}"`);
}

const fallbackImageUrl = getSmartFallbackImage(selectedCuisine.cuisine, selectedDish, dayOfYear);

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

// AI image generation removed to comply with Mediavine watermark/authenticity guidelines.

console.log(`${selectedCuisine.flag} Generating ${selectedCuisine.cuisine} recipe: "${selectedDish}" scheduled for ${today}...`);

// Generic Gemini JSON fetch helper
async function fetchGeminiJSON(promptText, schema = null, retryCount = 0) {
  const MAX_RETRIES = 3;
  const RETRY_DELAYS_MS = [5000, 15000, 45000];

  const payload = {
    contents: [{ parts: [{ text: promptText }] }],
    generationConfig: {
      temperature: 0.1,
      maxOutputTokens: 8192,
      responseMimeType: "application/json",
      ...(schema ? { responseSchema: schema } : {})
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
    return fetchGeminiJSON(promptText, schema, retryCount + 1);
  }

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Gemini API Error (${response.status}): ${errText}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) throw new Error("Empty response from Gemini");

  let cleanText = text.trim();
  if (cleanText.includes('```')) {
    const match = cleanText.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (match && match[1]) cleanText = match[1].trim();
  }

  // Robustly handle control characters (e.g. unescaped newlines/tabs inside string literals)
  let inString = false;
  let chars = cleanText.split('');
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === '"' && chars[i - 1] !== '\\') {
      inString = !inString;
    } else if (inString) {
      if (chars[i] === '\n') {
        chars[i] = '\\n';
      } else if (chars[i] === '\r') {
        chars[i] = '';
      } else if (chars[i] === '\t') {
        chars[i] = '\\t';
      }
    }
  }
  cleanText = chars.join('');

  try {
    return JSON.parse(cleanText);
  } catch (parseErr) {
    console.error("❌ JSON parsing failed. Sanitized response text was:\n", cleanText);
    console.error("📋 Candidate Details:\n", JSON.stringify(data.candidates?.[0] || {}, null, 2));
    throw new Error(`JSON.parse failed: ${parseErr.message}`);
  }
}

// ── Call Gemini REST API - Batch Translation Pipeline ──────────────────────
async function callGemini() {
  // Step 1: Generate Master English recipe
  const englishPrompt = `You are a passionate home cook, food columnist, and regional SEO expert. Write an authentic, deeply detailed recipe in English for "${selectedDish}" — a highly searched and popular dish from ${selectedCuisine.country}.
Provide the full ingredients and instructions in English.

🔴 FORBIDDEN AI CLICHES (DO NOT USE ANY OF THESE):
"culinary journey", "symphony of flavors", "delight your senses", "dive in", "nestled in", "brimming with", "elevate your dish", "tapestry", "testament", "treasure trove", "more than just a meal", "in conclusion", "game changer", "look no further", "delightful", "a testament to".
Write naturally instead.

🛡️ PSYCHO-LINGUISTIC HUMANIZATION DIRECTIVES:
1. High Sentence Burstiness: Break up smooth AI rhythm. Mix short, blunt sentences with long, detailed narrative thoughts.
2. Warm & Opinionated Voice: Write with a warm, colloquial, strongly opinionated culinary style. Share personal shortcuts, kitchen frustrations, etc.
3. Sensory Visual Cues: For every step, describe physical visual/smell/sound markers instead of dry commands.
4. High Backstory Depth: Write an extensive, 3-paragraph conversational, high-perplexity backstory detailing how you learned to cook this, common failures, and key ingredient rules.

5. SEO HIGH-SEARCH-VOLUME DIRECTIVES:
- Ensure the "title" field matches the exact, highly searched query that users type into Google to find this dish (e.g. 'Authentic Chicken Karahi' or 'Easy Pad Thai').
- Identify the highest search-volume primary keyword for this recipe (e.g. "chicken karahi recipe", "how to make pad thai at home", etc.).
- Generate "seoTitle": a highly engaging, click-through-optimized meta title (maximum 60 characters) that naturally integrates this high-volume keyword.
- Generate "seoDescription": a compelling, click-through-optimized meta description (maximum 155 characters) that naturally integrates the high-volume keyword.
- Generate "seoKeywords": a comma-separated string starting with the main high-volume keyword, followed by 3-4 other highly searched terms.

6. CRITICAL JSON SAFETY: Inside all JSON string values (description, instructions, title, ingredients, seoTitle, seoDescription, seoKeywords), never use raw double-quotes. If you need to write a quote, use single quotes (e.g. 'Sum') instead. Always make sure every JSON string is properly closed and contains no raw unescaped control characters.

Return ONLY a valid JSON object matching EXACTLY this structure:
{
  "title": "${selectedDish}",
  "description": "Write a highly detailed, 3-paragraph conversational backstory here in English. Do not hold back on word count, make it extremely descriptive, personal, and premium.",
  "prepTime": "25 min",
  "cookTime": "45 min",
  "difficulty": "Medium",
  "servings": 4,
  "ingredients": [{ "item": "Name", "amount": "Qty" }],
  "instructions": ["Step 1 detailing tips", "Step 2 with visual cues", "Step 3", "Step 4", "Step 5"],
  "tags": ["${selectedCuisine.cuisine}", "Dinner", "Authentic"],
  "seoTitle": "Engaging Meta Title targeting high-volume keyword",
  "seoDescription": "Compelling Meta Description targeting high-volume keyword",
  "seoKeywords": "high-volume keyword, secondary keyword 1, secondary keyword 2"
}`;

  const englishSchema = {
    type: "OBJECT",
    properties: {
      title: { type: "STRING" },
      description: { type: "STRING" },
      prepTime: { type: "STRING" },
      cookTime: { type: "STRING" },
      difficulty: { type: "STRING" },
      servings: { type: "INTEGER" },
      ingredients: {
        type: "ARRAY",
        items: {
          type: "OBJECT",
          properties: {
            item: { type: "STRING" },
            amount: { type: "STRING" }
          },
          required: ["item", "amount"]
        }
      },
      instructions: {
        type: "ARRAY",
        items: { type: "STRING" }
      },
      tags: {
        type: "ARRAY",
        items: { type: "STRING" }
      },
      seoTitle: { type: "STRING" },
      seoDescription: { type: "STRING" },
      seoKeywords: { type: "STRING" }
    },
    required: ["title", "description", "prepTime", "cookTime", "difficulty", "servings", "ingredients", "instructions", "tags", "seoTitle", "seoDescription", "seoKeywords"]
  };

  console.log(`🤖 Generating master English recipe for "${selectedDish}"...`);
  const englishRecipe = await fetchGeminiJSON(englishPrompt, englishSchema);

  // Programmatic Title guardrail on the generated English title
  englishRecipe.title = englishRecipe.title
    .replace(/\s+(and|with|for|&|or|aur)\s*$/i, '')
    .trim();

  // Helper function to translate into a set of languages
  async function translateBatch(languages) {
    const langListStr = Object.keys(languages).map(code => `${languages[code]} ('${code}')`).join(', ');
    console.log(`🤖 Translating recipe into: ${langListStr}...`);

    const translatePrompt = `You are an expert culinary translator. Translate the following English recipe into:
${langListStr}

CRITICAL RULES:
1. The title for each language MUST be a clean, complete proper noun representing the dish. NEVER append words like "and", "with", "और", "এবং", or commas at the end of the title. Keep it clean!
2. Write a concise, single-paragraph mouth-watering description (approx. 50-80 words) in the target language that captures the essence of the English original's backstory, rather than a long word-for-word translation. This is critical to avoid token truncation limits.
3. Translate all ingredients exactly, keeping the exact amounts and descriptive terms translated into the target language.
4. Translate all preparation steps accurately, keeping them concise and clear (1-2 sentences per step).
5. ELIMINATE ALL AI FOOTPRINTS: The output must sound like a passionate, native home cook from the region writing for local food lovers, NOT an AI translation system. Avoid any robotic language transitions, sterile explanations, or formal syntax structures.
6. NATIVE & COLLOQUIAL FLOW: Use local culinary idioms, authentic kitchen terminology, and warm, natural, conversational phrasing. If an English sentence structure feels stiff or unnatural when translated literally, rewrite it entirely to sound organic, colloquial, and native in the target language.
7. BAN ROBOTIC/FORMAL BUZZWORDS: Avoid overly formal, literary, or clinical transition words (e.g., in Hindi, do not use overly formal sanskritized words when simple Hindustani/colloquial words are common; in Bengali, avoid stiff bookish language (Sadhu Bhasa) and use standard colloquial kitchen language (Cholit Bhasa)). Do not use overly dramatic or repetitive adjectives typical of machine-generated text.
8. SEO DYNAMIC KEYWORDS DIRECTIVES:
Identify the single best high-intent long-tail keyword in the target language for this recipe (e.g., for Hindi, target terms like "Sambar recipe in Hindi", "[Dish Name] recipe in Hindi", or relevant cultural equivalents like "easy lunch ideas for kids", "quick tiffin box ideas", etc.).
- Generate "seoTitle": a highly engaging, localized meta title in the target language (maximum 60 characters) naturally integrating this long-tail keyword.
- Generate "seoDescription": a compelling localized meta description in the target language (maximum 155 characters) naturally integrating the long-tail keyword.
- Generate "seoKeywords": a comma-separated string of search keywords in the target language, starting with the primary long-tail keyword.
9. CRITICAL JSON SAFETY: Inside all JSON string values (descriptions, instructions, titles, ingredients, seoTitle, seoDescription, seoKeywords), never use raw double-quotes. If you need to write a quote, use single quotes (e.g. 'Sum') instead. Make sure every JSON string is properly closed.
10. Return ONLY a valid JSON object matching this structure (no markdown, no backticks):
{
  ${Object.keys(languages).map(code => `"${code}": {
    "title": "Clean translated dish title",
    "description": "Rich translated story/description...",
    "ingredients": [{"item": "translated item", "amount": "translated amount"}],
    "instructions": ["Step 1 translated...", "Step 2 translated..."],
    "seoTitle": "Engaging translated Meta Title targeting long-tail keyword",
    "seoDescription": "Compelling translated Meta Description targeting long-tail keyword",
    "seoKeywords": "translated long-tail keyword, secondary translated keywords"
  }`).join(',\n  ')}
}`;

    const payload = {
      title: englishRecipe.title,
      description: englishRecipe.description,
      ingredients: englishRecipe.ingredients,
      instructions: englishRecipe.instructions
    };

    const schemaProperties = {};
    const requiredKeys = Object.keys(languages);
    for (const code of requiredKeys) {
      schemaProperties[code] = {
        type: "OBJECT",
        properties: {
          title: { type: "STRING" },
          description: { type: "STRING" },
          ingredients: {
            type: "ARRAY",
            items: {
              type: "OBJECT",
              properties: {
                item: { type: "STRING" },
                amount: { type: "STRING" }
              },
              required: ["item", "amount"]
            }
          },
          instructions: {
            type: "ARRAY",
            items: { type: "STRING" }
          },
          seoTitle: { type: "STRING" },
          seoDescription: { type: "STRING" },
          seoKeywords: { type: "STRING" }
        },
        required: ["title", "description", "ingredients", "instructions", "seoTitle", "seoDescription", "seoKeywords"]
      };
    }

    const translationSchema = {
      type: "OBJECT",
      properties: schemaProperties,
      required: requiredKeys
    };

    const finalPrompt = `${translatePrompt}\n\nEnglish Recipe to translate:\n${JSON.stringify(payload, null, 2)}`;
    return await fetchGeminiJSON(finalPrompt, translationSchema);
  }

  // Translate in 8 parallel individual calls to prevent context token truncation
  console.log(`🤖 Starting parallel translation for 8 languages to prevent context token truncation...`);
  const [hiBatch, bnBatch, mrBatch, knBatch, teBatch, taBatch, cnBatch, msBatch] = await Promise.all([
    translateBatch({ hi: 'Hindi' }),
    translateBatch({ bn: 'Bengali' }),
    translateBatch({ mr: 'Marathi' }),
    translateBatch({ kn: 'Kannada' }),
    translateBatch({ te: 'Telugu' }),
    translateBatch({ ta: 'Tamil' }),
    translateBatch({ 'zh-CN': 'Simplified Chinese' }),
    translateBatch({ ms: 'Malay' })
  ]);

  // Combine translations
  const finalResult = {
    en: englishRecipe,
    hi: hiBatch.hi,
    bn: bnBatch.bn,
    mr: mrBatch.mr,
    kn: knBatch.kn,
    te: teBatch.te,
    ta: taBatch.ta,
    'zh-CN': cnBatch['zh-CN'],
    ms: msBatch.ms
  };

  // Programmatic cleanup of all translated titles (extra safety layer)
  for (const code in finalResult) {
    if (finalResult[code] && finalResult[code].title) {
      finalResult[code].title = finalResult[code].title
        .replace(/\s+(and|with|for|&|or|और|এবং|aur)\s*$/i, '')
        .trim();
    }
  }

  return finalResult;
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
  // ── Resolve dish image (Mediavine Compliant, Watermark-free) ──────────────
  // Priority: TheMealDB (real dish photo using base name) → Smart Category-based Unsplash photo
  let imageUrl = fallbackImageUrl;

  console.log(`📸 Checking TheMealDB for real photo of "${fallbackDish}"...`);
  const mealDbImage = await getRealDishImage(fallbackDish);
  if (mealDbImage) {
    imageUrl = mealDbImage;
    console.log(`✅ Using TheMealDB real photo: ${imageUrl}`);
  } else {
    console.log(`🖼️  No TheMealDB photo for "${fallbackDish}" — using smart Unsplash fallback: ${imageUrl}`);
  }

  const recipe = await callGemini();

  // Validate
  const required = ['title', 'description', 'prepTime', 'cookTime', 'difficulty', 'servings', 'ingredients', 'instructions', 'seoTitle', 'seoDescription', 'seoKeywords'];
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
        publishedAt: '${publishedAtStr}',
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
        seoTitle: '${esc(recipe.en.seoTitle || '')}',
        seoDescription: '${esc(recipe.en.seoDescription || '')}',
        seoKeywords: '${esc(recipe.en.seoKeywords || '')}',
        translations: {
            hi: {
                title: '${esc(recipe.hi?.title || '')}',
                description: '${esc(recipe.hi?.description || '')}',
                ingredients: [${(recipe.hi?.ingredients || []).map((i) => `{ item: '${esc(i.item)}', amount: '${esc(i.amount)}' }`).join(', ')}],
                instructions: [${(recipe.hi?.instructions || []).map((s) => `'${esc(s)}'`).join(', ')}],
                seoTitle: '${esc(recipe.hi?.seoTitle || '')}',
                seoDescription: '${esc(recipe.hi?.seoDescription || '')}',
                seoKeywords: '${esc(recipe.hi?.seoKeywords || '')}'
            },
            bn: {
                title: '${esc(recipe.bn?.title || '')}',
                description: '${esc(recipe.bn?.description || '')}',
                ingredients: [${(recipe.bn?.ingredients || []).map((i) => `{ item: '${esc(i.item)}', amount: '${esc(i.amount)}' }`).join(', ')}],
                instructions: [${(recipe.bn?.instructions || []).map((s) => `'${esc(s)}'`).join(', ')}],
                seoTitle: '${esc(recipe.bn?.seoTitle || '')}',
                seoDescription: '${esc(recipe.bn?.seoDescription || '')}',
                seoKeywords: '${esc(recipe.bn?.seoKeywords || '')}'
            },
            mr: {
                title: '${esc(recipe.mr?.title || '')}',
                description: '${esc(recipe.mr?.description || '')}',
                ingredients: [${(recipe.mr?.ingredients || []).map((i) => `{ item: '${esc(i.item)}', amount: '${esc(i.amount)}' }`).join(', ')}],
                instructions: [${(recipe.mr?.instructions || []).map((s) => `'${esc(s)}'`).join(', ')}],
                seoTitle: '${esc(recipe.mr?.seoTitle || '')}',
                seoDescription: '${esc(recipe.mr?.seoDescription || '')}',
                seoKeywords: '${esc(recipe.mr?.seoKeywords || '')}'
            },
            te: {
                title: '${esc(recipe.te?.title || '')}',
                description: '${esc(recipe.te?.description || '')}',
                ingredients: [${(recipe.te?.ingredients || []).map((i) => `{ item: '${esc(i.item)}', amount: '${esc(i.amount)}' }`).join(', ')}],
                instructions: [${(recipe.te?.instructions || []).map((s) => `'${esc(s)}'`).join(', ')}],
                seoTitle: '${esc(recipe.te?.seoTitle || '')}',
                seoDescription: '${esc(recipe.te?.seoDescription || '')}',
                seoKeywords: '${esc(recipe.te?.seoKeywords || '')}'
            },
            ta: {
                title: '${esc(recipe.ta?.title || '')}',
                description: '${esc(recipe.ta?.description || '')}',
                ingredients: [${(recipe.ta?.ingredients || []).map((i) => `{ item: '${esc(i.item)}', amount: '${esc(i.amount)}' }`).join(', ')}],
                instructions: [${(recipe.ta?.instructions || []).map((s) => `'${esc(s)}'`).join(', ')}],
                seoTitle: '${esc(recipe.ta?.seoTitle || '')}',
                seoDescription: '${esc(recipe.ta?.seoDescription || '')}',
                seoKeywords: '${esc(recipe.ta?.seoKeywords || '')}'
            },
            kn: {
                title: '${esc(recipe.kn?.title || '')}',
                description: '${esc(recipe.kn?.description || '')}',
                ingredients: [${(recipe.kn?.ingredients || []).map((i) => `{ item: '${esc(i.item)}', amount: '${esc(i.amount)}' }`).join(', ')}],
                instructions: [${(recipe.kn?.instructions || []).map((s) => `'${esc(s)}'`).join(', ')}],
                seoTitle: '${esc(recipe.kn?.seoTitle || '')}',
                seoDescription: '${esc(recipe.kn?.seoDescription || '')}',
                seoKeywords: '${esc(recipe.kn?.seoKeywords || '')}'
            },
            'zh-CN': {
                title: '${esc(recipe['zh-CN']?.title || recipe.zh?.title || '')}',
                description: '${esc(recipe['zh-CN']?.description || recipe.zh?.description || '')}',
                ingredients: [${(recipe['zh-CN']?.ingredients || recipe.zh?.ingredients || []).map((i) => `{ item: '${esc(i.item)}', amount: '${esc(i.amount)}' }`).join(', ')}],
                instructions: [${(recipe['zh-CN']?.instructions || recipe.zh?.instructions || []).map((s) => `'${esc(s)}'`).join(', ')}],
                seoTitle: '${esc(recipe['zh-CN']?.seoTitle || recipe.zh?.seoTitle || '')}',
                seoDescription: '${esc(recipe['zh-CN']?.seoDescription || recipe.zh?.seoDescription || '')}',
                seoKeywords: '${esc(recipe['zh-CN']?.seoKeywords || recipe.zh?.seoKeywords || '')}'
            },
            ms: {
                title: '${esc(recipe.ms?.title || '')}',
                description: '${esc(recipe.ms?.description || '')}',
                ingredients: [${(recipe.ms?.ingredients || []).map((i) => `{ item: '${esc(i.item)}', amount: '${esc(i.amount)}' }`).join(', ')}],
                instructions: [${(recipe.ms?.instructions || []).map((s) => `'${esc(s)}'`).join(', ')}],
                seoTitle: '${esc(recipe.ms?.seoTitle || '')}',
                seoDescription: '${esc(recipe.ms?.seoDescription || '')}',
                seoKeywords: '${esc(recipe.ms?.seoKeywords || '')}'
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
