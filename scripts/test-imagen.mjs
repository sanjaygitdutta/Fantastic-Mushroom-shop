/**
 * test-imagen.mjs
 * 
 * Quick test: calls Gemini Imagen API and saves a test image.
 * Run with: GEMINI_API_KEY=your_key node scripts/test-imagen.mjs
 * OR if key is in .env: node --env-file=.env.local scripts/test-imagen.mjs
 */
import fs from 'fs';
import path from 'path';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('❌ Set GEMINI_API_KEY environment variable first.');
  console.error('   Run: $env:GEMINI_API_KEY="your_key_here"; node scripts/test-imagen.mjs');
  process.exit(1);
}

const TEST_DISH    = 'Butter Chicken';
const TEST_CUISINE = 'Indian';
const TEST_DATE    = 'test-imagen';

console.log(`🎨 Testing Gemini Imagen API for "${TEST_DISH}"...`);

const models = [
  'imagen-3.0-fast-generate-001',
  'imagen-3.0-generate-001',
];

const prompt = `Professional food photography of ${TEST_DISH}, authentic ${TEST_CUISINE} cuisine. Close-up overhead shot, beautiful plating, natural warm lighting, restaurant quality, vibrant colors, appetizing presentation.`;

let success = false;

for (const model of models) {
  console.log(`\n🔄 Trying model: ${model}`);
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:predict?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          instances: [{ prompt }],
          parameters: { sampleCount: 1, aspectRatio: '16:9' }
        })
      }
    );

    const rawText = await res.text();

    if (!res.ok) {
      console.warn(`⚠️  HTTP ${res.status}: ${rawText.slice(0, 400)}`);
      continue;
    }

    const data = JSON.parse(rawText);
    const b64 = data.predictions?.[0]?.bytesBase64Encoded;

    if (!b64) {
      console.warn('⚠️  No image data in response. Full response:');
      console.warn(JSON.stringify(data, null, 2).slice(0, 500));
      continue;
    }

    const imgDir = path.resolve('./public/recipe-images');
    fs.mkdirSync(imgDir, { recursive: true });
    const imgPath = path.join(imgDir, `${TEST_DATE}.jpg`);
    fs.writeFileSync(imgPath, Buffer.from(b64, 'base64'));
    const sizeKB = Math.round(fs.statSync(imgPath).size / 1024);

    console.log(`\n✅ SUCCESS with model: ${model}`);
    console.log(`   Saved: public/recipe-images/${TEST_DATE}.jpg (${sizeKB}KB)`);
    console.log(`   Open that file to see the AI-generated food photo!`);
    success = true;
    break;

  } catch (e) {
    console.warn(`⚠️  Error with ${model}: ${e.message}`);
  }
}

if (!success) {
  console.log('\n❌ Imagen API not available with this key.');
  console.log('   Possible reasons:');
  console.log('   1. Imagen is not enabled for your Google AI Studio account.');
  console.log('   2. Your API key is from a project without Imagen access.');
  console.log('   3. Imagen requires Google AI Studio Pro or Vertex AI.');
  console.log('\n   ✅ No worries — the daily script will fall back to TheMealDB real photos automatically.');
}
