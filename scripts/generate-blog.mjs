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

async function callGemini() {
  const prompt = `You are a professional SEO writer and market analyst for 'Fantastic Food', a modern Indian grocery price comparison platform.
  
Write an engaging, SEO-optimized blog post about: "${selectedTopic}".

Format requirements:
- Use Markdown. 
- Use h3 (###) for subsections. 
- Keep the tone helpful, data-driven, and engaging.
- Ensure length is around 300-400 words.
- Conclude by reminding the user to check "Fantastic Food's live price tracker" before buying anything.

Respond ONLY with valid JSON using this exact structure (no markdown fences, no other text):
{
  "title": "A highly clickable, SEO-optimized title (under 60 chars if possible)",
  "description": "A 2-sentence meta description optimized for Google search results.",
  "content": "The full markdown content",
  "tags": ["SEO Tag 1", "SEO Tag 2"]
}`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { temperature: 0.7, topK: 40, topP: 0.95 }
  };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Gemini API Error (${response.status}): ${errText}`);
  }

  const data = await response.json();
  let text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  
  if (!text) throw new Error("Empty response from Gemini");

  text = text.replace(/^```json\s*/i, '').replace(/\s*```$/, '').trim();
  
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

    const slug = post.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");

    // Format new object entry
    const postTs = `  {
    slug: '${slug}',
    title: '${esc(post.title)}',
    description: '${esc(post.description)}',
    content: \`${post.content.replace(/`/g, '\\`')}\`,
    date: '${today}',
    author: 'Chief AI Analyst',
    tags: [${post.tags.map((t) => `'${esc(t)}'`).join(', ')}]
  }`;

    // Append right before the closing bracket ];
    if (!existingContent.match(/\];\s*$/)) {
      throw new Error('Unexpected format in blogPosts.ts — missing closing `];`');
    }

    const updatedContent = existingContent.replace(/\];\s*$/, `,\n${postTs}\n];\n`);
    fs.writeFileSync(blogPath, updatedContent, 'utf-8');

    console.log(`✅ Success! Added blog: "${post.title}"`);

  } catch (err) {
    console.error('❌ Failed:', err.message);
    process.exit(1);
  }
}

run();
