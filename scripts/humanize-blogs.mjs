import fs from 'fs';
import path from 'path';

// ── 1. Load API Key ──────────────────────────────────────────────────────────
const envPath = path.resolve('.env.local');
let GEMINI_API_KEY = '';
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  const match = envContent.match(/GEMINI_API_KEY=(.*)/);
  if (match) {
    GEMINI_API_KEY = match[1].trim().replace(/^["']|["']$/g, '');
  }
}

if (!GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY not found in .env.local file!");
  process.exit(1);
}
console.log("🔑 Gemini API Key successfully loaded.");

// ── 2. Create Safety Backup ──────────────────────────────────────────────────
const backupDir = path.resolve('.recipe-backups');
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}
const dbPath = path.resolve('src/data/blogPosts.ts');
const backupPath = path.join(backupDir, 'blogPosts.ts');
fs.copyFileSync(dbPath, backupPath);
console.log(`🛡️ Created safety backup of blogPosts.ts at ${backupPath}`);

// ── 3. Parse Blog Database ───────────────────────────────────────────────────
console.log("📂 Parsing blog database file...");
const fileContent = fs.readFileSync(dbPath, 'utf-8');
const startIndex = fileContent.indexOf('export const BLOG_POSTS');
if (startIndex === -1) {
  console.error("❌ Could not find BLOG_POSTS export in blogPosts.ts!");
  process.exit(1);
}
const dataOnly = fileContent.substring(startIndex);
const arrayStart = dataOnly.indexOf('[');
const cleanContent = 'const BLOG_POSTS = ' + dataOnly.substring(arrayStart);

let blogPosts = [];
try {
  blogPosts = eval(cleanContent + '\nBLOG_POSTS');
  console.log(`✓ Parsed ${blogPosts.length} blog posts successfully.`);
} catch (err) {
  console.error("❌ Failed to parse blogPosts.ts content using eval:", err);
  process.exit(1);
}

// ── 4. Unified API Requester ─────────────────────────────────────────────────
const cleanString = (str) => String(str || '')
  .replace(/[\r\n]+/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

async function callGemini(prompt, schema, retryCount = 0) {
  const MAX_RETRIES = 5;
  const RETRY_DELAYS = [3000, 8000, 15000, 30000, 60000];

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.3,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 8192,
      responseMimeType: "application/json",
      responseSchema: schema,
      thinkingConfig: {
        thinkingBudget: 0
      }
    }
  };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`API returned status ${response.status}: ${errText}`);
    }

    const rawResponseText = await response.text();
    let resData;
    try {
      resData = JSON.parse(rawResponseText);
    } catch (e) {
      throw new Error(`Google API returned invalid JSON: ${e.message}`);
    }

    const text = resData.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      throw new Error("Empty content in Gemini response candidates.");
    }

    let cleanJson = text.trim();
    if (cleanJson.includes('```')) {
      const match = cleanJson.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
      if (match && match[1]) cleanJson = match[1];
    }

    return JSON.parse(cleanJson);
  } catch (err) {
    if (retryCount < MAX_RETRIES) {
      const waitMs = RETRY_DELAYS[retryCount];
      console.warn(`⚠️ Error calling Gemini: ${err.message}. Retrying in ${waitMs / 1000}s...`);
      await new Promise(res => setTimeout(res, waitMs));
      return callGemini(prompt, schema, retryCount + 1);
    }
    throw err;
  }
}

// ── 5. Humanization Run ──────────────────────────────────────────────────────
async function runHumanization() {
  const humanizedMap = {};
  const BATCH_SIZE = 5;
  const total = blogPosts.length;
  const numBatches = Math.ceil(total / BATCH_SIZE);

  console.log(`\n✍️ [HUMANIZER] Humanizing ${total} English Blog Posts in ${numBatches} batches...`);

  const schema = {
    type: "OBJECT",
    properties: {
      posts: {
        type: "ARRAY",
        items: {
          type: "OBJECT",
          properties: {
            slug: { type: "STRING" },
            title: { type: "STRING" },
            description: { type: "STRING" },
            content: { type: "STRING" }
          },
          required: ["slug", "title", "description", "content"]
        }
      }
    },
    required: ["posts"]
  };

  for (let b = 0; b < numBatches; b++) {
    const startIdx = b * BATCH_SIZE;
    const endIdx = Math.min(startIdx + BATCH_SIZE, total);
    const batch = blogPosts.slice(startIdx, endIdx).map(p => ({
      slug: p.slug,
      title: cleanString(p.title),
      description: cleanString(p.description),
      content: p.content // keep markdown content as is for prompt processing
    }));

    console.log(`  🤖 Blog Batch ${b + 1}/${numBatches} (Posts ${startIdx + 1} to ${endIdx})...`);

    const prompt = `You are a warm, highly engaging local food writer, smart consumer advocate, and experienced home cook.
Your task is to review and completely rewrite the title, description, and markdown content of these blog posts to completely break the "AI footprint".

🔴 STRICT HUMANIZATION STYLE INSTRUCTIONS:
1. WARM, REAL WRITER VOICE:
   - Write in a friendly, helpful, and down-to-earth tone. Sound like a knowledgeable friend sharing smart kitchen and shopping tips.
   - Absolutely ELIMINATE clinical, robotic AI vocabulary (e.g. avoid "furthermore", "tapestry", "delightful", "a testament to", "facilitate", "ensure", "comprehensively").
   - Use smooth, natural, and conversational transitions.
2. PRAGMATIC CONTENT:
   - Keep lists and subheadings natural, conversational, and direct. Do not make them look like clinical bullet lists.
   - Ensure the markdown content remains fully formatted with appropriate markdown headings (###), bold text (**), and lists, but phrased naturally.
3. Keep the titles very catchy, warm, and standard human writing style.
4. Keep descriptions short (1-2 sentences), highly exciting, and inviting.

BATCH DATA:
${JSON.stringify(batch, null, 2)}

Respond ONLY with valid JSON using the provided schema.`;

    const result = await callGemini(prompt, schema);
    if (result && result.posts) {
      for (const p of result.posts) {
        humanizedMap[p.slug] = p;
      }
    }
    await new Promise(res => setTimeout(res, 1200));
  }

  // ── 6. Write Back & Save ───────────────────────────────────────────────────
  console.log("\n✍️ Rebuilding blog database array...");
  const updatedPosts = blogPosts.map(post => {
    const humanized = humanizedMap[post.slug];
    if (humanized) {
      return {
        ...post,
        title: humanized.title,
        description: humanized.description,
        content: humanized.content
      };
    }
    return post;
  });

  console.log("🌟 Serializing data back to TypeScript format...");
  const serialized = serializeBlogPosts(updatedPosts);
  fs.writeFileSync(dbPath, serialized, 'utf-8');
  console.log(`✓ Successfully humanized and wrote back to ${dbPath}`);
}

function serializeBlogPosts(posts) {
  let out = `export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  translations?: Record<string, { title: string; description: string; content: string; }>;
}

export const BLOG_POSTS: BlogPost[] = [
`;

  posts.forEach((post, idx) => {
    out += `  {\n`;
    out += `    slug: ${JSON.stringify(post.slug)},\n`;
    out += `    title: ${JSON.stringify(post.title)},\n`;
    out += `    description: ${JSON.stringify(post.description)},\n`;
    out += `    content: ${JSON.stringify(post.content)},\n`;
    out += `    date: ${JSON.stringify(post.date)},\n`;
    out += `    author: ${JSON.stringify(post.author)},\n`;
    out += `    tags: ${JSON.stringify(post.tags)},\n`;
    if (post.translations) {
      out += `    translations: {\n`;
      Object.entries(post.translations).forEach(([lang, trans]) => {
        out += `      ${JSON.stringify(lang)}: {\n`;
        out += `        title: ${JSON.stringify(trans.title)},\n`;
        out += `        description: ${JSON.stringify(trans.description)},\n`;
        out += `        content: ${JSON.stringify(trans.content)}\n`;
        out += `      },\n`;
      });
      // Trim last comma
      out = out.replace(/,\n$/, '\n');
      out += `    }\n`;
    } else {
      // remove trailing comma
      out = out.replace(/,\n$/, '\n');
    }
    out += `  }${idx < posts.length - 1 ? ',' : ''}\n`;
  });

  out += `];\n`;
  return out;
}

runHumanization().then(() => {
  console.log("\n🎉 ALL BLOG POSTS HUMANIZED AND SAVED SUCCESSFULLY!");
}).catch(err => {
  console.error("❌ Pipeline execution failed:", err);
  process.exit(1);
});
