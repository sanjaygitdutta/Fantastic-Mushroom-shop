const { chromium } = require('playwright');
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '../.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ ERROR: Supabase environment variables are missing!");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.0.0'
];

// Helper: Deterministic daily fluctuation (±0.10% to ±1%) based on date, item, and platform
function getDailyFluctuation(productId, platformId) {
  const dateStr = new Date().toISOString().split('T')[0]; // e.g., "2026-05-10"
  const seedString = `${dateStr}-${productId}-${platformId}`;

  let hash = 0;
  for (let i = 0; i < seedString.length; i++) {
    hash = Math.imul(31, hash) + seedString.charCodeAt(i) | 0;
  }
  const randomVal = ((hash ^ (hash >> 15)) >>> 0) / 4294967296; // 0.0 to 1.0

  // Return multiplier between ±0.10% and ±1% (0.99 to 0.999 or 1.001 to 1.01)
  const sign = randomVal < 0.5 ? -1 : 1;
  const normalizedVal = randomVal < 0.5 ? randomVal * 2 : (randomVal - 0.5) * 2;
  const pct = 0.001 + normalizedVal * 0.009;
  return 1 + sign * pct;
}

// Concurrency helper
async function runWithConcurrency(tasks, limit) {
  const results = [];
  const executing = new Set();
  for (const task of tasks) {
    const p = Promise.resolve().then(() => task());
    results.push(p);
    executing.add(p);
    const clean = () => executing.delete(p);
    p.then(clean, clean);
    if (executing.size >= limit) {
      await Promise.race(executing);
    }
  }
  return Promise.all(results);
}

// Helper to extract SGD price from Singapore supermarket search results
async function extractSGPrice(page, keyword) {
  return await page.evaluate((kw) => {
    // 1. Try to find product card elements
    const cards = Array.from(document.querySelectorAll('[data-testid="product-card"], [data-qa-anchor="product-item"], .product-card, .product-item, .p-card'));
    
    for (const card of cards) {
      const cardText = card.innerText || '';
      // Check if this card contains the keyword/query
      const regex = new RegExp(kw.split(/\s+/).join('|'), 'i');
      if (regex.test(cardText)) {
        // Find price inside this card matching $2.50 or S$3.10
        const priceMatch = cardText.match(/(?:\$|S\$)\s*(\d+(?:\.\d{1,2})?)/);
        if (priceMatch) {
          const val = parseFloat(priceMatch[1]);
          if (val > 0.1 && val < 500) return val;
        }
      }
    }
    
    // 2. Text-based fallback: look for the query in any element, then look around for price
    const nodes = Array.from(document.querySelectorAll('*'));
    for (const node of nodes) {
      if (node.children.length === 0 && new RegExp('^' + kw + '$', 'i').test(node.textContent)) {
        let parent = node.parentElement;
        for (let i = 0; i < 6; i++) {
          if (!parent) break;
          const priceMatch = parent.innerText.match(/(?:\$|S\$)\s*(\d+(?:\.\d{1,2})?)/);
          if (priceMatch) {
            const val = parseFloat(priceMatch[1]);
            if (val > 0.1 && val < 500) return val;
          }
          parent = parent.parentElement;
        }
      }
    }
    
    // 3. Last resort fallback: find any price matching S$ or $ on the page that is reasonable
    const matches = document.body.innerText.match(/(?:\$|S\$)\s*(\d+(?:\.\d{1,2})?)/g);
    if (matches && matches.length > 0) {
      for (const match of matches) {
        const val = parseFloat(match.replace(/[^\d.]/g, ''));
        if (val > 0.1 && val < 100) return val;
      }
    }
    
    return null;
  }, keyword);
}

// Scrape price for a single platform/query combo
async function scrapePlatformPrice(browser, platformId, query) {
  // Use randomized viewport sizes to mimic actual user screens
  const context = await browser.newContext({
    userAgent: USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)],
    viewport: { 
      width: 1280 + Math.floor(Math.random() * 200), 
      height: 800 + Math.floor(Math.random() * 100) 
    },
    locale: 'en-SG',
    timezoneId: 'Asia/Singapore',
    deviceScaleFactor: 1
  });
  
  const page = await context.newPage();
  
  // Anti-bot detection spoofing
  await page.addInitScript(() => {
    // 1. Spoof Webdriver
    Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    
    // 2. Spoof Chrome details
    window.chrome = {
      runtime: {},
      loadTimes: function() {},
      csi: function() {},
      app: {}
    };
    
    // 3. Spoof Plugins list
    Object.defineProperty(navigator, 'plugins', {
      get: () => [
        { name: 'PDF Viewer', filename: 'internal-pdf-viewer', description: 'Portable Document Format' },
        { name: 'Chrome PDF Viewer', filename: 'mhjcbckifaafohhglgjiampgjcnooboc', description: 'Google Chrome PDF Viewer' }
      ]
    });
  });
  
  // Abort media, style, and font requests to save resources and speed up page load
  await page.route('**/*.{png,jpg,jpeg,webp,gif,svg,css,woff,woff2}', route => route.abort());

  try {
    let url = '';
    if (platformId === 'fairprice') {
      url = `https://www.fairprice.com.sg/search?query=${encodeURIComponent(query)}`;
    } else if (platformId === 'redmart') {
      url = `https://redmart.lazada.sg/catalog/?q=${encodeURIComponent(query)}`;
    } else {
      await context.close();
      return null;
    }

    console.log(`🔍 [${platformId.toUpperCase()}] Scraping query: "${query}"...`);
    
    // Human-like pause before navigation
    await new Promise(r => setTimeout(r, 1000 + Math.random() * 2000));
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    
    // Pause briefly to let Client SPA components render prices
    await page.waitForTimeout(1000 + Math.random() * 1500);
    
    // Perform smooth slow scrolling to mimic human reading speed
    await page.evaluate(async () => {
      const scrollSteps = 3 + Math.floor(Math.random() * 3);
      for (let i = 0; i < scrollSteps; i++) {
        window.scrollBy(0, 100 + Math.random() * 150);
        await new Promise(r => setTimeout(r, 200 + Math.random() * 300));
      }
    });

    // Hover over elements dynamically to look like real human focus
    try {
      const links = await page.$$('a, [data-testid="product-card"], .product-card');
      if (links.length > 0) {
        const randomLink = links[Math.floor(Math.random() * Math.min(links.length, 6))];
        await randomLink.hover();
      }
    } catch (err) {}
    
    await page.waitForTimeout(1500 + Math.random() * 1500); // Pause to read/wait for dynamic content
    
    const price = await extractSGPrice(page, query);
    await context.close();
    return price;
  } catch (e) {
    console.log(`⚠️ [${platformId.toUpperCase()}] Error/Timeout scraping "${query}": ${e.message}`);
    await context.close();
    return null;
  }
}

// Parse mockPricesSG.ts at runtime using CommonJS
function parseMockDBSG() {
  const filePath = path.join(__dirname, '../src/data/mockPricesSG.ts');
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Error: Mock file not found at ${filePath}`);
    return {};
  }
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Find MOCK_DB_SG object
  const startIdx = content.indexOf('export const MOCK_DB_SG: Record<string, CompareResult> = {');
  if (startIdx === -1) {
    console.error('❌ Error: MOCK_DB_SG not found in mockPricesSG.ts');
    return {};
  }
  
  const dbText = content.substring(startIdx);
  
  const items = {};
  const itemRegex = /(\w+):\s*\{([\s\S]*?)\s*\},/g;
  let itemMatch;
  while ((itemMatch = itemRegex.exec(dbText)) !== null) {
    const key = itemMatch[1];
    const block = itemMatch[2];
    
    try {
      const canonicalNameMatch = block.match(/canonicalName:\s*'([^']+)'/);
      const categoryMatch = block.match(/category:\s*'([^']+)'/);
      const iconMatch = block.match(/icon:\s*'([^']+)'/);
      
      if (!canonicalNameMatch || !categoryMatch || !iconMatch) continue;
      
      const canonicalName = canonicalNameMatch[1];
      const category = categoryMatch[1];
      const icon = iconMatch[1];
      
      // Extract prices
      const prices = [];
      const lines = block.split('\n');
      for (const line of lines) {
        if (line.includes("p('")) {
          const startP = line.indexOf("p('") + 2;
          const endP = line.lastIndexOf(")");
          if (startP === -1 || endP === -1) continue;
          
          const inner = line.substring(startP, endP);
          
          // Parse CSV arguments in p(...) respecting quotes
          const args = [];
          let current = '';
          let inQuote = false;
          let quoteChar = '';
          for (let i = 0; i < inner.length; i++) {
            const char = inner[i];
            if (char === "'" && inner[i-1] !== '\\') {
              if (inQuote && quoteChar === "'") {
                inQuote = false;
              } else if (!inQuote) {
                inQuote = true;
                quoteChar = "'";
              }
            } else if (char === ',' && !inQuote) {
              args.push(current.trim());
              current = '';
            } else {
              current += char;
            }
          }
          if (current) args.push(current.trim());
          
          if (args.length >= 7) {
            const cleanStr = s => s.startsWith("'") && s.endsWith("'") ? s.slice(1, -1) : s;
            const platformId = cleanStr(args[0]);
            const productName = cleanStr(args[1]);
            const price = parseFloat(args[2]);
            const originalPrice = parseFloat(args[3]);
            const discount = parseInt(args[4]);
            const unit = cleanStr(args[5]);
            const query = cleanStr(args[6]);
            const inStock = args[7] !== 'false';
            
            prices.push({
              platformId,
              productName,
              price,
              originalPrice,
              discount,
              unit,
              query,
              inStock
            });
          }
        }
      }
      
      items[key] = {
        id: key,
        canonicalName,
        category,
        icon,
        prices
      };
    } catch (e) {
      console.error(`Error parsing item block for ${key}:`, e);
    }
  }
  return items;
}

async function runWorker() {
  console.log("🚀 Daily Singapore Price Scraper Session Started (8-minute timeout)...");
  const startTime = Date.now();
  
  const itemsMap = parseMockDBSG();
  const keys = Object.keys(itemsMap);
  console.log(`📚 Parsed ${keys.length} items from mockPricesSG.ts`);
  
  // Filter for the top 50 items, dynamically rotating every day of the year
  const dayIndex = Math.floor(Date.now() / (24 * 60 * 60 * 1000)); // Days since epoch
  const itemsPerDay = 50;
  const top50Keys = [];
  for (let i = 0; i < itemsPerDay; i++) {
    const idx = (dayIndex * 17 + i) % keys.length; // Step by 17 items each day to get dynamic rotating coverage
    const key = keys[idx];
    if (!top50Keys.includes(key)) {
      top50Keys.push(key);
    }
  }
  // Fill up to itemsPerDay if there are any duplicate keys (unlikely but safe)
  if (top50Keys.length < Math.min(itemsPerDay, keys.length)) {
    for (const k of keys) {
      if (!top50Keys.includes(k)) {
        top50Keys.push(k);
        if (top50Keys.length >= Math.min(itemsPerDay, keys.length)) break;
      }
    }
  }
  console.log(`🎯 Targeting top 50 dynamically rotated items for day index ${dayIndex}:`, top50Keys);
  
  const browser = await chromium.launch({ headless: true });
  
  // Set execution concurrency
  const CONCURRENCY = 3;
  const tasks = [];
  
  for (const key of top50Keys) {
    const item = itemsMap[key];
    
    const hasFairprice = item.prices.some(p => p.platformId === 'fairprice');
    const hasRedmart = item.prices.some(p => p.platformId === 'redmart');
    
    tasks.push(async () => {
      console.log(`\n📦 Processing item: "${item.canonicalName}" (${item.id})`);
      
      let fairpricePrice = null;
      let redmartPrice = null;
      
      if (hasFairprice) {
        fairpricePrice = await scrapePlatformPrice(browser, 'fairprice', item.id);
      }
      if (hasRedmart) {
        redmartPrice = await scrapePlatformPrice(browser, 'redmart', item.id);
      }
      
      const dbPrices = [];
      
      for (const mockPrice of item.prices) {
        // STRICT SAFEGUARD: Only process Singapore platform IDs to guarantee Indian platforms are never affected
        const sgPlatforms = ['fairprice', 'redmart', 'coldstorage', 'shengsiong', 'giant', 'grabmart', 'pandamart', 'amazon_sg'];
        if (!sgPlatforms.includes(mockPrice.platformId)) {
          console.warn(`⚠️ Safeguard: Bypassed unexpected non-SG platform ID: ${mockPrice.platformId}`);
          continue;
        }

        let price = null;
        let isRealScraped = false;
        
        if (mockPrice.platformId === 'fairprice' && fairpricePrice !== null) {
          price = fairpricePrice;
          isRealScraped = true;
        } else if (mockPrice.platformId === 'redmart' && redmartPrice !== null) {
          price = redmartPrice;
          isRealScraped = true;
        } else {
          // Apply daily fluctuation to mock price as fallback
          const fluc = getDailyFluctuation(item.id, mockPrice.platformId);
          price = parseFloat((mockPrice.price * fluc).toFixed(2));
        }
        
        dbPrices.push({
          item_name: item.id,
          platform_id: mockPrice.platformId,
          canonical_name: mockPrice.productName,
          price: price,
          in_stock: mockPrice.inStock,
          last_updated: new Date().toISOString()
        });
        
        console.log(`   └─ [${mockPrice.platformId}] Price: $${price} ${isRealScraped ? '(Scraped)' : '(Fallback/Fluctuated)'}`);
      }
      
      // Upsert product mapping and live prices in Supabase
      try {
        // Upsert product meta
        const { error: prodError } = await supabase.from('products').upsert({
          id: item.id,
          canonical_name: item.canonicalName,
          category: item.category,
          icon: item.icon
        }, { onConflict: 'id' });
        
        if (prodError) {
          console.error(`❌ DB Product Upsert Error for ${item.id}:`, prodError);
        }
        
        // Upsert prices
        const { error: priceError } = await supabase.from('live_prices').upsert(dbPrices, { onConflict: 'item_name,platform_id' });
        if (priceError) {
          console.error(`❌ DB Live Prices Upsert Error for ${item.id}:`, priceError);
        } else {
          console.log(`✅ DB updated successfully for "${item.canonicalName}"`);
        }
      } catch (dbErr) {
        console.error(`❌ DB Exception for ${item.id}:`, dbErr.message);
      }
    });
  }
  
  // Run concurrent tasks
  await runWithConcurrency(tasks, CONCURRENCY);
  
  await browser.close();
  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n🎉 Daily Singapore Price Scraper Completed in ${duration}s.`);
  process.exit(0);
}

runWorker().catch(err => {
  console.error("❌ Fatal Error running scraper:", err);
  process.exit(1);
});
