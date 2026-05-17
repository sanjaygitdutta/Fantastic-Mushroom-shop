/**
 * 🌍 Fantastic Food — Daily AI SEO Blog Generator
 *
 * Automatically researches and generates a high-quality, SEO-optimized blog post.
 * Appends to src/data/blogPosts.ts.
 */

import fs from 'fs';
import path from 'path';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('❌ GEMINI_API_KEY not set.');
  process.exit(1);
}

// ── SEO Topic Seeds (50+ unique topics to prevent duplicates) ────────────────
const ALL_TOPICS = [
  // Grocery Delivery Comparisons
  "Blinkit vs Zepto: Which is faster and cheaper in 2026?",
  "Zepto vs Swiggy Instamart delivery fee comparison",
  "BigBasket vs Blinkit: Which has better quality?",
  "JioMart vs Amazon Fresh: Best for monthly grocery shopping",
  "Dunzo vs Blinkit: 10-minute delivery showdown",
  "Which grocery app gives the best discounts in India?",
  "Swiggy Instamart vs Zepto: Best for late night grocery",

  // Savings & Cashback
  "Blinkit coupon codes and hidden discounts this month",
  "Best credit cards for maximizing grocery cashback on JioMart",
  "How to get free delivery on Amazon Fresh every order",
  "HDFC vs Axis vs SBI: Best card for grocery savings in India",
  "Top 10 ways to save money on Blinkit every week",
  "How to stack coupons on BigBasket for maximum savings",
  "Zepto Gold membership: Is it worth the annual fee?",
  "BigBasket BB Star vs Blinkit Pass: Which saves more money?",
  "How to use Google Pay rewards for grocery cashback",
  "PhonePe grocery vouchers: How to get and use them",

  // Price Tracking
  "Why onion and tomato prices fluctuate so much in India",
  "How to compare prices and stop overpaying for daily milk",
  "Eggs price comparison across Blinkit, Zepto and BigBasket",
  "Atta (wheat flour) price war: Which brand is cheapest?",
  "Rice prices in India 2026: Basmati vs regular comparison",
  "Cooking oil price comparison: Sunflower vs mustard vs refined",
  "Chicken price tracker: Which app has cheapest fresh chicken?",
  "Paneer prices: Homemade vs branded vs store-bought comparison",
  "Dal price guide: Toor, Moong, Masoor — where to buy cheapest",

  // Smart Shopping
  "Top 5 budget meal prep ideas using cheap local groceries",
  "How to plan a week of meals under ₹500 per person",
  "Best time of day to order groceries for fastest delivery",
  "How to avoid impulse buying on grocery apps",
  "Hidden subscription traps in grocery app memberships",
  "Buying groceries in bulk: When it saves vs wastes money",
  "How to read grocery app fine print to avoid fake discounts",
  "Best local markets vs online apps: When to choose which",

  // Seasonal & Trending
  "Mango season price guide: Where to buy the cheapest Alphonso",
  "Monsoon grocery tips: How to avoid price hikes on vegetables",
  "Diwali grocery deals: Best apps for festive season shopping",
  "Summer grocery essentials and where to get them cheapest",
  "Winter vegetables in India: Price and freshness comparison",

  // Recipes & Ingredients
  "Cheapest ingredients for making Biryani at home in 2026",
  "Butter Chicken on a budget: Where to buy cheapest chicken",
  "Healthy breakfast ideas using cheapest grocery app products",
  "5 high-protein meals under ₹100 using Indian groceries",
  "How to make curd at home vs buying from apps: Cost comparison",

  // Platforms & Features
  "Blinkit hidden features most users don't know about",
  "How Zepto's AI-powered pricing works and how to beat it",
  "BigBasket Express vs Next-Day delivery: Pros and cons",
  "JioMart Groceries vs JioMart Plus: Key differences explained",
  "Amazon Fresh vs Amazon Pantry: Which one should you use?",
  "How Fantastic Food's price scanner can save you ₹500/month"
];

// ── Pick a topic not used in the last 30 posts ─────────────────────────────
const __dirname = path.resolve();
const blogPath = path.join(__dirname, 'src', 'data', 'blogPosts.ts');

const existingContent = fs.readFileSync(blogPath, 'utf-8');

// Extract last 30 used topics by scanning existing slugs and titles
const usedTitles = [];
const titleMatches = existingContent.matchAll(/title: '([^']+)'/g);
for (const m of titleMatches) usedTitles.push(m[1].toLowerCase());

// Filter out topics whose keywords appear in recent titles
const freshTopics = ALL_TOPICS.filter(topic => {
  const topicWords = topic.toLowerCase().split(/\W+/).filter(w => w.length > 4);
  const usedRecent = usedTitles.slice(-30);
  return !usedRecent.some(title =>
    topicWords.filter(w => title.includes(w)).length >= 2
  );
});

// Fall back to full list if all topics have been used
const topicPool = freshTopics.length > 0 ? freshTopics : ALL_TOPICS;

// Get IST date by adding 5.5 hours to UTC
const now = new Date();
const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
const dayOfWeek = istTime.getDay();

// Schedule this post randomly 1 to 5 days in the future to keep a steady editor calendar
const daysAhead = Math.floor(Math.random() * 5) + 1;
const futureDateObj = new Date(istTime.getTime() + (daysAhead * 24 * 60 * 60 * 1000));
const scheduledDateStr = futureDateObj.toISOString().split('T')[0];
const today = scheduledDateStr; // Alias today as the future date!

const SINGAPORE_TOPICS = [
  "Why Hainanese Chicken Rice is Singapore's ultimate comfort food",
  "The secret to achieving Wok Hei at home for Char Kway Teow",
  "Singapore Laksa: How to recreate the rich coconut broth",
  "Top 5 must-have ingredients for authentic Singaporean cooking",
  "A beginner's guide to Singapore's famous hawker culture",
  "How to make Nasi Lemak and authentic sambal at home",
  "Why Paddy Straw Mushrooms are essential in Southeast Asian soups",
  "Chilli Crab at home: Cracking the secret sauce",
  "Singaporean Zi Char recipes you can cook in 20 minutes",
  "The history and evolution of Singaporean street food"
];

let selectedTopic;

// Prioritize Singaporean blog posts 3 times a week (Tuesday, Thursday, Saturday)
if (dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 6) {
  selectedTopic = SINGAPORE_TOPICS[Math.floor(Math.random() * SINGAPORE_TOPICS.length)];
} else {
  selectedTopic = topicPool[Math.floor(Math.random() * topicPool.length)];
}



async function callGemini(retryCount = 0) {
  const MAX_RETRIES = 3;
  const RETRY_DELAYS_MS = [5000, 15000, 45000];

  const recentTitlesList = usedTitles.slice(-10).map(t => `- ${t}`).join('\n');

  const prompt = `You are a professional SEO writer, market analyst, and local consumer advocate for 'Fantastic Food', a premium grocery price comparison and smart kitchen platform.
  
Today's topic to write about is: "${selectedTopic}".

IMPORTANT SEO & HUMANIZATION REQUIREMENT:
To completely avoid Google automation, semantic analysis, and manual review penalties, this post MUST have a highly authentic, expert consumer advocate's voice.
- High Sentence Burstiness & Irregularity: Mix short, punchy, blunt clauses ("Look, it is simple.", "Don't fall for this.", "Here is the math.") with lengthy, wandering analytical sentences containing nested parenthesis, personal observations, and raw local shopping advice.
- Word Count Depth: Write extensive, highly thorough, and comprehensive analyses (around 450-600 words of rich content). Do not make it concise. Use your full token capacity for complete intellectual depth.
- Organically Interwoven CTA: Conclude naturally by advising the reader to run their shopping list through "Fantastic Food's live price tracker" before making their next weekly grocery haul.
- Under h3 (###) headers, provide granular cost breakdowns, specific brand insights (e.g. Blinkit vs Swiggy Instamart delivery fee structures), and practical local hacks.
- Zero AI Signature: Never mention AI avatars, digital cooking systems, or programmatic assistance. The page is represented as written by a real expert.

🔴 FORBIDDEN AI CLICHES (DO NOT USE ANY OF THESE):
"in conclusion", "furthermore", "moreover", "delightful", "a testament to", "game changer", "look no further", "nestled in", "brimming with", "tapestry", "treasure trove", "it's important to remember", "crucial first step".
If any of these AI cliches appear, manual review algorithms will flag the page. Use natural conversational transitions instead.

Provide comprehensive translations for:
- English ('en')
- 6 Indian languages: Hindi ('hi'), Bengali ('bn'), Marathi ('mr'), Telugu ('te'), Tamil ('ta'), and Kannada ('kn').
- 3 Singaporean languages: English (covered in 'en'), Simplified Chinese ('zh-CN'), and Malay ('ms').

Respond ONLY with valid JSON using this exact structure (no markdown fences, no other text):
{
  "en": {
    "title": "A highly clickable, SEO-optimized title (under 60 chars)",
    "description": "A 2-sentence meta description optimized for Google search results.",
    "content": "The full markdown content",
    "tags": ["SEO Tag 1", "SEO Tag 2"]
  },
  "hi": { "title": "...", "description": "...", "content": "..." },
  "bn": { "title": "...", "description": "...", "content": "..." },
  "mr": { "title": "...", "description": "...", "content": "..." },
  "te": { "title": "...", "description": "...", "content": "..." },
  "ta": { "title": "...", "description": "...", "content": "..." },
  "kn": { "title": "...", "description": "...", "content": "..." },
  "zh-CN": { "title": "...", "description": "...", "content": "..." },
  "ms": { "title": "...", "description": "...", "content": "..." }
}
CRITICAL: Output ONLY valid RFC 8259 JSON. All property names MUST use double quotes. No trailing commas.`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { 
      temperature: 0.7, 
      topK: 40, 
      topP: 0.95, 
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

  // Handle server overload — retry with backoff
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

  // Robustly parse JSON, stripping markdown fences if they exist
  let cleanJson = text;
  if (text.includes('```')) {
    const match = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (match && match[1]) {
      cleanJson = match[1];
    }
  }

  try {
    return JSON.parse(cleanJson);
  } catch (e) {
    console.error("❌ Failed to parse JSON:", text);
    throw new Error("Invalid JSON from Gemini: " + e.message);
  }
}

// ── Write to Data Array ───────────────────────────────────────────────────────
async function run() {

  // Prevent same day duplicate runs
  if (existingContent.includes(`date: '${today}'`)) {
    console.log(`✅ Blog for ${today} already exists. Skipping.`);
    process.exit(0);
  }

  try {
    console.log(`🤖 Generating AI blog post about: ${selectedTopic}...`);
    const post = await callGemini();

    // Add date prefix to slug to guarantee uniqueness even if same title is reused
    const titleSlug = post.en.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
    const slug = `${today}-${titleSlug}`;

    const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");

    // Format new object entry
    const postTs = `  {
    slug: '${slug}',
    title: '${esc(post.en.title)}',
    description: '${esc(post.en.description)}',
    content: \`${post.en.content.replace(/`/g, '\\`')}\`,
    date: '${today}',
    author: 'Sanjay Dutta',
    tags: [${post.en.tags.map((t) => `'${esc(t)}'`).join(', ')}],
    translations: {
      hi: { title: '${esc(post.hi?.title || '')}', description: '${esc(post.hi?.description || '')}', content: \`${(post.hi?.content || '').replace(/`/g, '\\`')}\` },
      bn: { title: '${esc(post.bn?.title || '')}', description: '${esc(post.bn?.description || '')}', content: \`${(post.bn?.content || '').replace(/`/g, '\\`')}\` },
      mr: { title: '${esc(post.mr?.title || '')}', description: '${esc(post.mr?.description || '')}', content: \`${(post.mr?.content || '').replace(/`/g, '\\`')}\` },
      te: { title: '${esc(post.te?.title || '')}', description: '${esc(post.te?.description || '')}', content: \`${(post.te?.content || '').replace(/`/g, '\\`')}\` },
      ta: { title: '${esc(post.ta?.title || '')}', description: '${esc(post.ta?.description || '')}', content: \`${(post.ta?.content || '').replace(/`/g, '\\`')}\` },
      kn: { title: '${esc(post.kn?.title || '')}', description: '${esc(post.kn?.description || '')}', content: \`${(post.kn?.content || '').replace(/`/g, '\\`')}\` },
      'zh-CN': { title: '${esc(post['zh-CN']?.title || post.zh?.title || '')}', description: '${esc(post['zh-CN']?.description || post.zh?.description || '')}', content: \`${(post['zh-CN']?.content || post.zh?.content || '').replace(/`/g, '\\`')}\` },
      ms: { title: '${esc(post.ms?.title || '')}', description: '${esc(post.ms?.description || '')}', content: \`${(post.ms?.content || '').replace(/`/g, '\\`')}\` }
    }
  }`;

    // Append right before the closing bracket ];
    if (!existingContent.match(/\];\s*$/)) {
      throw new Error('Unexpected format in blogPosts.ts — missing closing `];`');
    }

    const updatedContent = existingContent.replace(/\];\s*$/, `,\n${postTs}\n];\n`);
    fs.writeFileSync(blogPath, updatedContent, 'utf-8');

    console.log(`✅ Success! Added blog: "${post.en.title}"`);

  } catch (err) {
    console.error('❌ Failed:', err.message);
    process.exit(1);
  }
}

run();
