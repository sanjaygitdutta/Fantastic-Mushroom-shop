const { chromium } = require('playwright');
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
require('dotenv').config({ path: '../.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const DAILY_LIMIT = 40;
const COUNTER_FILE = './daily_counter.json';

// Helper to manage daily limits
function checkLimit() {
    const today = new Date().toDateString();
    let data = { date: today, count: 0 };
    if (fs.existsSync(COUNTER_FILE)) {
        data = JSON.parse(fs.readFileSync(COUNTER_FILE));
    }
    if (data.date !== today) {
        data = { date: today, count: 0 };
    }
    return data;
}

function incrementLimit(data) {
    data.count += 1;
    fs.writeFileSync(COUNTER_FILE, JSON.stringify(data));
}

const delay = ms => new Promise(res => setTimeout(res, ms));
const randomDelay = (min, max) => delay(Math.floor(Math.random() * (max - min + 1) + min));

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
];

async function extractPrice(page, keyword) {
  return await page.evaluate((kw) => {
    const regex = new RegExp(kw, 'i');
    const nodes = Array.from(document.querySelectorAll('*'));
    for (const node of nodes) {
        if (node.children.length === 0 && regex.test(node.textContent)) {
            let parent = node.parentElement;
            for (let i=0; i<6; i++) {
                if (!parent) break;
                const priceMatch = parent.innerText.match(/₹\s*(\d+)/);
                if (priceMatch && parseInt(priceMatch[1]) > 5) return parseInt(priceMatch[1]);
                parent = parent.parentElement;
            }
        }
    }
    return null;
  }, keyword);
}

async function scrapePlatforms(browser, query) {
  const context = await browser.newContext({ userAgent: USER_AGENTS[0] });
  const page = await context.newPage();
  await page.route('**/*.{png,jpg,jpeg,webp,gif,svg}', route => route.abort());

  let results = [];
  
  // 1. BLINKIT
  try {
    console.log(`   - Pausing for stealth...`);
    await delay(3000); // 2-3 second pause before searching
    console.log(`   - Searching Blinkit for "${query}"...`);
    await page.goto(`https://blinkit.com/s/?q=${encodeURIComponent(query)}`, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await delay(2000); 
    const price = await extractPrice(page, query);
    if (price) results.push({ platform_id: 'blinkit', price });
  } catch (e) { console.log("     Blinkit failed/timeout"); }

  await randomDelay(2000, 4000); // Pause between platforms

  // 2. ZEPTO
  try {
    console.log(`   - Pausing for stealth...`);
    await delay(3000); // 2-3 second pause before searching
    console.log(`   - Searching Zepto for "${query}"...`);
    await page.goto(`https://www.zeptonow.com/search?query=${encodeURIComponent(query)}`, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await delay(2000);
    const price = await extractPrice(page, query);
    if (price) results.push({ platform_id: 'zepto', price });
  } catch (e) { console.log("     Zepto failed/timeout"); }

  await context.close();
  return results;
}

async function runWorker() {
  console.log("🚀 Stealth Scraper Worker Started (10-minute limit)...");
  const startTime = Date.now();
  const MAX_RUNTIME = 10 * 60 * 1000; // 10 minutes
  
  const browser = await chromium.launch({ headless: true });

  while (true) {
    // Check if we have exceeded the 10-minute limit
    if (Date.now() - startTime > MAX_RUNTIME) {
        console.log("\n⏰ 10-minute session limit reached. Exiting gracefully...");
        break;
    }

    const limitData = checkLimit();
    if (limitData.count >= DAILY_LIMIT) {
      console.log(`😴 Daily limit (${DAILY_LIMIT}) reached. Sleeping until tomorrow.`);
      await delay(1000 * 60 * 60); 
      continue;
    }

    // Poll for pending requests
    const { data: requests, error } = await supabase
      .from('scrape_requests')
      .select('*')
      .eq('status', 'pending')
      .limit(1)
      .order('requested_at', { ascending: true });

    if (error) {
      console.error("DB Error:", error);
      await delay(10000);
      continue;
    }

    if (!requests || requests.length === 0) {
      process.stdout.write("."); 
      await delay(15000); 
      continue;
    }

    const req = requests[0];
    console.log(`\n📦 Processing Request: "${req.query}" (${limitData.count + 1}/${DAILY_LIMIT})`);

    await supabase.from('scrape_requests').update({ status: 'processing' }).eq('id', req.id);

    const prices = await scrapePlatforms(browser, req.query);

    if (prices.length > 0) {
        const dbPrices = prices.map(p => ({
            item_name: req.query,
            platform_id: p.platform_id,
            canonical_name: req.query,
            price: p.price,
            in_stock: true,
            last_updated: new Date().toISOString()
        }));

        await supabase.from('products').upsert({ 
            id: req.query.toLowerCase().replace(/\s+/g, '_'),
            canonical_name: req.query,
            category: 'Grocery',
            icon: '🛒'
        }, { onConflict: 'id' });

        await supabase.from('live_prices').upsert(dbPrices, { onConflict: 'item_name,platform_id' });
        console.log(`   ✅ Success! Found ${prices.length} platform prices.`);
    }

    await supabase.from('scrape_requests').update({ 
        status: 'completed', 
        completed_at: new Date().toISOString() 
    }).eq('id', req.id);

    incrementLimit(limitData);
    await randomDelay(5000, 10000); 
  }

  await browser.close();
  console.log("👋 Worker finished session.");
  process.exit(0);
}

runWorker().catch(console.error);
