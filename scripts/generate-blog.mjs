/**
 * 🌍 Fantastic Food — Daily AI SEO Blog Generator
 *
 * Automatically researches and generates a high-quality, SEO-optimized blog post.
 * Appends to src/data/blogPosts.ts.
 */

import fs from 'fs';
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

// Schedule this post today, but randomize the publish time to be 0 to 6 hours in the future
const calendarDate = istTime.toISOString().split('T')[0]; // e.g. '2026-05-19'
const hoursAhead = Math.random() * 6; // Random float between 0 and 6 hours
const publishTimeObj = new Date(now.getTime() + (hoursAhead * 60 * 60 * 1000));
const today = publishTimeObj.toISOString(); // Full ISO string (e.g. '2026-05-19T10:30:15.123Z')

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

// ── Dynamically plan a highly searched, high-volume topic via Gemini ──────────────
async function generateUniqueBlogTopic(dayOfWeek, recentTitlesList) {
  try {
    let prompt = '';
    if (dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 6) {
      prompt = `You are a world-class Southeast Asian food writer and SEO expert.
Identify the single most popular, highly searched topic, guide, or recipe question about Singaporean/Southeast Asian food, cooking, or hawker culture that has massive search volume on the internet (e.g., 'Why Hainanese Chicken Rice is Singapore's ultimate comfort food', 'How to achieve Wok Hei at home for Char Kway Teow', or 'How to make authentic Singapore Laksa broth').
Return ONLY a single line containing the exact highly-searched blog post title/topic. Do not wrap in quotes or markdown.
CRITICAL: The topic must have high search intent and be under 10-12 words.
CRITICAL: To avoid duplicate content, do NOT write about any of these recent topics: ${recentTitlesList}`;
    } else {
      prompt = `You are a world-class grocery shopping analyst and Indian SEO expert.
Identify the single most popular, highly searched topic, price comparison question, or savings guide about online grocery delivery apps in India (like Blinkit, Zepto, Swiggy Instamart, BigBasket, JioMart, or Amazon Fresh), local market savings, credit card cashback on groceries, or seasonal vegetable/fruit price fluctuations (e.g., 'Blinkit vs Zepto: Which is faster and cheaper in 2026?', 'Which grocery app gives the best discounts in India?', or 'HDFC vs SBI: Best credit card for grocery cashback').
Return ONLY a single line containing the exact highly-searched blog post title/topic. Do not wrap in quotes or markdown.
CRITICAL: The topic must have high search intent, relate directly to smart grocery shopping, delivery apps, or price tracking, and be under 10-12 words.
CRITICAL: To avoid duplicate content, do NOT write about any of these recent topics: ${recentTitlesList}`;
    }

    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.8,
        maxOutputTokens: 100,
        thinkingConfig: {
          thinkingBudget: 0
        }
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
    console.warn(`⚠️ Blog topic generation failed: ${e.message}. Using fallback selection.`);
    return null;
  }
}

const recentTitlesList = usedTitles.slice(-20).join(', ');

console.log(`🧠 Dynamic Planner: Fetching unique, highly-searched blog topic from Gemini...`);
let selectedTopic = await generateUniqueBlogTopic(dayOfWeek, recentTitlesList);

if (!selectedTopic) {
  if (dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 6) {
    selectedTopic = SINGAPORE_TOPICS[Math.floor(Math.random() * SINGAPORE_TOPICS.length)];
  } else {
    selectedTopic = topicPool[Math.floor(Math.random() * topicPool.length)];
  }
  console.log(`⚠️ Falling back to deterministic topic: "${selectedTopic}"`);
} else {
  console.log(`✨ Gemini Dynamically Planned Topic: "${selectedTopic}"`);
}



function getLanguageName(code) {
  switch (code) {
    case 'hi': return 'Hindi';
    case 'bn': return 'Bengali';
    case 'mr': return 'Marathi';
    case 'te': return 'Telugu';
    case 'ta': return 'Tamil';
    case 'kn': return 'Kannada';
    case 'zh-CN': return 'Simplified Chinese';
    case 'ms': return 'Malay';
    default: return 'English';
  }
}

async function translatePost(englishPost, lang, retryCount = 0) {
  const MAX_RETRIES = 3;
  const RETRY_DELAYS_MS = [3000, 8000, 20000];

  const translationPrompt = `You are a professional, expert human translator for 'Fantastic Food', a premium grocery price comparison website.

Translate the following English blog post into native, natural, and idiomatic ${getLanguageName(lang)}.
Ensure it reads seamlessly and sounds completely organic to a native speaker of ${getLanguageName(lang)}, avoiding robotic or literal word-for-word machine translation. Maintain all markdown formatting, lists, linebreaks, bolding, and headers (e.g. ###, **, etc.) exactly as they are in the original.

English Title: "${englishPost.title}"
English Description: "${englishPost.description}"
English Content:
${englishPost.content}

Respond ONLY with valid JSON using this exact structure (no markdown fences, no other text):
{
  "title": "Translated Title in ${getLanguageName(lang)}",
  "description": "Translated Description in ${getLanguageName(lang)}",
  "content": "Translated Content in ${getLanguageName(lang)} using exact same markdown layout"
}
CRITICAL: Output ONLY valid RFC 8259 JSON. All property names MUST use double quotes. No trailing commas.`;

  const payload = {
    contents: [{ parts: [{ text: translationPrompt }] }],
    generationConfig: { 
      temperature: 0.3,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 8192,
      responseMimeType: "application/json",
      thinkingConfig: {
        thinkingBudget: 0
      },
      responseSchema: {
        type: "OBJECT",
        properties: {
          title: { type: "STRING" },
          description: { type: "STRING" },
          content: { type: "STRING" }
        },
        required: ["title", "description", "content"]
      }
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
    await new Promise(r => setTimeout(r, waitMs));
    return translatePost(englishPost, lang, retryCount + 1);
  }

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Gemini Translation Error for ${lang}: ${errText}`);
  }

  const data = await response.json();
  let text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Empty translation response");

  let cleanJson = text;
  if (text.includes('```')) {
    const match = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (match && match[1]) cleanJson = match[1];
  }

  return JSON.parse(cleanJson);
}

async function callGemini(retryCount = 0) {
  const MAX_RETRIES = 3;
  const RETRY_DELAYS_MS = [5000, 15000, 45000];

  const recentTitlesList = usedTitles.slice(-10).map(t => `- ${t}`).join('\n');

  console.log(`✍️ Generating premium English content...`);

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

Respond ONLY with valid JSON using this exact structure (no markdown fences, no other text):
{
  "title": "A highly clickable, SEO-optimized title (under 60 chars)",
  "description": "A 2-sentence meta description optimized for Google search results.",
  "content": "The full markdown content",
  "tags": ["SEO Tag 1", "SEO Tag 2"]
}
CRITICAL: Output ONLY valid RFC 8259 JSON. All property names MUST use double quotes. No trailing commas.`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { 
      temperature: 0.7, 
      topK: 40, 
      topP: 0.95, 
      maxOutputTokens: 8192,
      responseMimeType: "application/json",
      thinkingConfig: {
        thinkingBudget: 0
      },
      responseSchema: {
        type: "OBJECT",
        properties: {
          title: { type: "STRING" },
          description: { type: "STRING" },
          content: { type: "STRING" },
          tags: {
            type: "ARRAY",
            items: { type: "STRING" }
          }
        },
        required: ["title", "description", "content", "tags"]
      }
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

  let englishPost;
  try {
    englishPost = JSON.parse(cleanJson);
  } catch (e) {
    console.error("❌ Failed to parse JSON:", text);
    throw new Error("Invalid JSON from Gemini: " + e.message);
  }

  console.log(`📝 Generated English blog post: "${englishPost.title}" (${englishPost.content.split(/\s+/).length} words)`);

  // 2. Perform parallel translation for all 8 target languages
  console.log(`🌐 Initiating parallel translations into 8 languages...`);
  const targetLanguages = ['hi', 'bn', 'mr', 'te', 'ta', 'kn', 'zh-CN', 'ms'];

  const translations = {};
  await Promise.all(targetLanguages.map(async (lang) => {
    try {
      console.log(`  ➔ Translating to: ${getLanguageName(lang)} (${lang})...`);
      const transResult = await translatePost(englishPost, lang);
      translations[lang] = transResult;
      console.log(`  ✓ Translated to: ${getLanguageName(lang)} (${lang})`);
    } catch (err) {
      console.error(`  ✗ Translation failed for ${lang}:`, err.message);
      // Fallback: put empty strings so it doesn't crash the script
      translations[lang] = { title: '', description: '', content: '' };
    }
  }));

  return {
    en: englishPost,
    ...translations
  };
}

// ── Write to Data Array ───────────────────────────────────────────────────────
async function run() {

  // Prevent same day duplicate runs
  if (existingContent.includes(calendarDate)) {
    console.log(`✅ Blog for ${calendarDate} already exists. Skipping.`);
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
    const slug = `${calendarDate}-${titleSlug}`;

    const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");

    // Format new object entry
    const postTs = `  {
    slug: '${slug}',
    title: '${esc(post.en.title)}',
    description: '${esc(post.en.description)}',
    content: \`${post.en.content.replace(/`/g, '\\`')}\`,
    date: '${today}',
    author: 'Fantastic Food',
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
