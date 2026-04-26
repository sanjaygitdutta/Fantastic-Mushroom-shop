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

// ── SEO Topic Seeds ───────────────────────────────────────────────────────────
const TOPICS = [
  "Blinkit coupon codes and hidden discounts",
  "Zepto vs Swiggy Instamart delivery fee comparison",
  "How to get free delivery on Amazon Fresh",
  "Top 5 budget meal prep ideas using cheap local groceries",
  "Why onion and tomato prices fluctuate in India",
  "Best credit cards for maximizing grocery cashback on JioMart",
  "BigBasket BB Star membership: Is it worth it?",
  "How to compare prices and stop overpaying for daily milk"
];

const selectedTopic = TOPICS[Math.floor(Math.random() * TOPICS.length)];
const today = new Date().toISOString().split('T')[0];

const __dirname = path.resolve();
const blogPath = path.join(__dirname, 'src', 'data', 'blogPosts.ts');

async function callGemini(retryCount = 0) {
  const MAX_RETRIES = 3;
  const RETRY_DELAYS_MS = [5000, 15000, 45000];

  const prompt = `You are a professional SEO writer and market analyst for 'Fantastic Food', a modern Indian grocery price comparison platform.
  
Write an engaging, SEO-optimized blog post about: "${selectedTopic}".

Format requirements:
- Use Markdown. 
- Use h3 (###) for subsections. 
- Keep the tone helpful, data-driven, and engaging.
- Ensure length is around 300-400 words.
- Conclude by reminding the user to check "Fantastic Food's live price tracker" before buying anything.

CRITICAL INSTRUCTION: You must generate the original post in English ('en'), and then provide high-quality translations for the title, description, and content in Hindi ('hi'), Bengali ('bn'), Marathi ('mr'), Telugu ('te'), and Tamil ('ta').

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
  "ta": { "title": "...", "description": "...", "content": "..." }
}
CRITICAL: Output ONLY valid RFC 8259 JSON. All property names MUST use double quotes. No trailing commas.`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { 
      temperature: 0.7, 
      topK: 40, 
      topP: 0.95, 
      maxOutputTokens: 4000,
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

  // Sanitize before parsing
  text = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
  // Fix missing commas between properties
  text = text.replace(/([\d\]"tfn])([ \t]*\n[ \t]*")/g, '$1,$2');
  // Remove trailing commas
  text = text.replace(/,(\s*[}\]])/g, '$1');
  
  return JSON.parse(text);
}



// ── Write to Data Array ───────────────────────────────────────────────────────
async function run() {
  const existingContent = fs.readFileSync(blogPath, 'utf-8');

  // Prevent same day duplicate runs
  if (existingContent.includes(`date: '${today}'`)) {
    console.log(`✅ Blog for ${today} already exists. Skipping.`);
    process.exit(0);
  }

  try {
    console.log(`🤖 Generating AI blog post about: ${selectedTopic}...`);
    const post = await callGemini();

    const slug = post.en.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");

    // Format new object entry
    const postTs = `  {
    slug: '${slug}',
    title: '${esc(post.en.title)}',
    description: '${esc(post.en.description)}',
    content: \`${post.en.content.replace(/`/g, '\\`')}\`,
    date: '${today}',
    author: 'Chief AI Analyst',
    tags: [${post.en.tags.map((t) => `'${esc(t)}'`).join(', ')}],
    translations: {
      hi: { title: '${esc(post.hi.title)}', description: '${esc(post.hi.description)}', content: \`${post.hi.content.replace(/`/g, '\\`')}\` },
      bn: { title: '${esc(post.bn.title)}', description: '${esc(post.bn.description)}', content: \`${post.bn.content.replace(/`/g, '\\`')}\` },
      mr: { title: '${esc(post.mr.title)}', description: '${esc(post.mr.description)}', content: \`${post.mr.content.replace(/`/g, '\\`')}\` },
      te: { title: '${esc(post.te.title)}', description: '${esc(post.te.description)}', content: \`${post.te.content.replace(/`/g, '\\`')}\` },
      ta: { title: '${esc(post.ta.title)}', description: '${esc(post.ta.description)}', content: \`${post.ta.content.replace(/`/g, '\\`')}\` }
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
