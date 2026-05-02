/**
 * 🛒 Fantastic Food — Daily AI Coupon Generator
 *
 * Generates fresh, unexpired coupon codes for Indian grocery platforms.
 * Called by GitHub Actions daily.
 * Uses Google Gemini with Web Search Grounding.
 *
 * Setup: Add GEMINI_API_KEY to GitHub repository secrets.
 */

import fs from 'fs';
import path from 'path';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('❌ GEMINI_API_KEY not set. Add it to GitHub Secrets.');
  process.exit(1);
}

const platforms = [
  { platform: 'Blinkit', platformId: 'blinkit', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { platform: 'Zepto', platformId: 'zepto', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { platform: 'Swiggy Instamart', platformId: 'swiggy', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { platform: 'BigBasket', platformId: 'bigbasket', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { platform: 'Amazon Fresh', platformId: 'amazon', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { platform: 'JioMart', platformId: 'jiomart', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { platform: 'Flipkart Minutes', platformId: 'flipkart', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' }
];

console.log(`🔍 Searching the web for real, active grocery coupons...`);

// ── Build Gemini prompt ────────────────────────────────────────────────────
const prompt = `You are a savvy Indian coupon hunter. Search the web for the latest, LIVE, UNEXPIRED coupon codes or major discount offers available today in India for the following quick-commerce grocery platforms: Blinkit, Zepto, Swiggy Instamart, BigBasket, Amazon Fresh, JioMart, and Flipkart Minutes.

IMPORTANT: Do not hallucinate. Find real offers if possible. If no explicit coupon code is found for a platform, provide their standard ongoing "first order" or "free delivery" offer (e.g. ZEPTO40, BLINK50, etc.). 

Return EXACTLY a valid JSON array of objects.
EACH object must follow this format:
{
  "platform": "Blinkit", 
  "platformId": "blinkit", 
  "code": "CODE123", 
  "discount": "₹100 OFF", 
  "description": "Short description of the offer (in English).", 
  "minOrder": "Min ₹399", 
  "expiry": "Month DD, 202X", 
  "category": "One of: 'First Order', 'Grocery', 'Vegetables', 'Dairy', 'Delivery'", 
  "isHot": true or false,
  "url": "https://website.com"
}

Provide EXACTLY 2 coupons for EACH of the 7 platforms. No markdown outside of the JSON block. Do not add any extra text.`;

// ── Call Gemini REST API ──────────────────────────────────────────────────
async function callGemini(retryCount = 0) {
  const MAX_RETRIES = 3;
  const RETRY_DELAYS_MS = [5000, 15000, 45000];

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    tools: [{ googleSearch: {} }],
    generationConfig: { 
      temperature: 0.1, 
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

  function robustParse(raw) {
    let t = raw.trim();
    t = t.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
    try { return JSON.parse(t); } catch (e) {}
    throw new Error("Could not repair JSON.");
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
const couponsPath = path.resolve('./src/data/coupons.ts');

if (!fs.existsSync(couponsPath)) {
  console.error(`❌ Not found: ${couponsPath}`);
  process.exit(1);
}

try {
  let aiCoupons = await callGemini();
  
  if (!Array.isArray(aiCoupons)) {
      throw new Error("Gemini did not return an array.");
  }

  // Merge generated coupons with static UI properties
  const finalCoupons = [];
  let idCounter = 1;
  
  for (const c of aiCoupons) {
      const pData = platforms.find(p => p.platformId === c.platformId || p.platform.toLowerCase() === c.platform?.toLowerCase());
      if (!pData) continue;
      
      finalCoupons.push({
          id: pData.platformId.substring(0, 2) + idCounter++,
          platform: pData.platform,
          platformId: pData.platformId,
          code: c.code || 'SAVE10',
          discount: c.discount || 'Special Offer',
          description: c.description || 'Exclusive deal',
          minOrder: c.minOrder || 'Check app',
          expiry: c.expiry || 'Limited time',
          category: c.category || 'Grocery',
          isHot: Boolean(c.isHot),
          url: c.url || 'https://fantasticfood.in',
          bgColor: pData.bgColor,
          textColor: pData.textColor,
          logo: pData.logo
      });
  }

  const esc = (s) => String(s)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r/g, '')
    .replace(/\n/g, ' ')
    .replace(/\t/g, ' ')
    .trim();

  let fileContent = `export interface Coupon {
  id: string;
  platform: string;
  platformId: string;
  code: string;
  discount: string;
  description: string;
  minOrder: string;
  expiry: string;
  category: string;
  isHot: boolean;
  url: string;
  bgColor: string;
  textColor: string;
  logo: string;
}

export const COUPONS: Coupon[] = [
`;

  finalCoupons.forEach(c => {
      fileContent += `  { id: '${esc(c.id)}', platform: '${esc(c.platform)}', platformId: '${esc(c.platformId)}', code: '${esc(c.code)}', discount: '${esc(c.discount)}', description: '${esc(c.description)}', minOrder: '${esc(c.minOrder)}', expiry: '${esc(c.expiry)}', category: '${esc(c.category)}', isHot: ${c.isHot}, url: '${esc(c.url)}', bgColor: '${esc(c.bgColor)}', textColor: '${esc(c.textColor)}', logo: '${esc(c.logo)}' },\n`;
  });

  fileContent += `];\n`;

  fs.writeFileSync(couponsPath, fileContent, 'utf-8');
  console.log(`✅ Successfully generated ${finalCoupons.length} coupons and updated ${couponsPath}`);

} catch (err) {
  console.error('❌ Failed:', err.message);
  process.exit(1);
}
