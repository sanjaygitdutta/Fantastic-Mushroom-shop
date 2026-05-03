const { chromium } = require('playwright');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '../.env.local' });
require('dotenv').config({ path: '../.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

let supabase = null;
if (!supabaseUrl || !supabaseKey) {
  console.warn("⚠️ Missing Supabase Credentials! Running in Dry-Run mode (no DB inserts).");
} else {
  supabase = createClient(supabaseUrl, supabaseKey);
}

const CORE_ITEMS = [
  { query: 'onion', targetName: 'Onion' },
  { query: 'tomato', targetName: 'Tomato' },
  { query: 'potato', targetName: 'Potato' },
  { query: 'spinach', targetName: 'Spinach' },
  { query: 'carrot', targetName: 'Carrot' },
  { query: 'capsicum', targetName: 'Capsicum' },
  { query: 'cucumber', targetName: 'Cucumber' },
  { query: 'ladyfinger', targetName: 'Bhindi' },
  { query: 'brinjal', targetName: 'Baingan' },
  { query: 'mushroom', targetName: 'Mushroom' },
  { query: 'banana', targetName: 'Banana' },
  { query: 'apple', targetName: 'Apple' },
  { query: 'mango', targetName: 'Mango' },
  { query: 'grapes', targetName: 'Grapes' },
  { query: 'papaya', targetName: 'Papaya' },
  { query: 'milk', targetName: 'Milk' },
  { query: 'butter', targetName: 'Butter' },
  { query: 'paneer', targetName: 'Paneer' },
  { query: 'curd', targetName: 'Curd' },
  { query: 'cheese', targetName: 'Cheese' },
  { query: 'eggs', targetName: 'Eggs' },
  { query: 'chicken', targetName: 'Chicken' },
  { query: 'fish', targetName: 'Fish' },
  { query: 'prawn', targetName: 'Prawns' },
  { query: 'rice', targetName: 'Basmati Rice' },
  { query: 'dal', targetName: 'Toor Dal' },
  { query: 'flour', targetName: 'Atta' },
  { query: 'bread', targetName: 'Bread' },
  { query: 'pasta', targetName: 'Pasta' },
  { query: 'noodles', targetName: 'Maggi' },
  { query: 'chips', targetName: 'Lays' },
  { query: 'tea', targetName: 'Tea' },
  { query: 'coffee', targetName: 'Coffee' },
  { query: 'juice', targetName: 'Juice' },
  { query: 'chocolate', targetName: 'Chocolate' },
  { query: 'icecream', targetName: 'Ice Cream' },
  { query: 'oil', targetName: 'Oil' },
  { query: 'sugar', targetName: 'Sugar' },
  { query: 'salt', targetName: 'Salt' }
];

const delay = ms => new Promise(res => setTimeout(res, ms));
const randomDelay = (min, max) => delay(Math.floor(Math.random() * (max - min + 1) + min));

// Realistic User Agents for Stealth
const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0'
];

async function extractAccuratePrice(page, keyword) {
  // We evaluate inside the browser to find the closest price to the product name
  return await page.evaluate((kw) => {
    const textNodes = [];
    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let n;
    while(n = walk.nextNode()) {
      if (n.textContent.trim()) textNodes.push(n);
    }
    
    // Find a text node that contains the product name
    const regex = new RegExp(kw, 'i');
    let productNode = null;
    for (const node of textNodes) {
      if (regex.test(node.textContent)) {
        productNode = node;
        break;
      }
    }
    
    if (!productNode) return null; // Couldn't find the product name on screen
    
    // Now look for the nearest '₹' in the parent containers
    let parent = productNode.parentElement;
    for (let i=0; i<5; i++) { // Go up to 5 levels deep in the DOM to find the product card container
      if (!parent) break;
      const priceMatch = parent.innerText.match(/₹\s*(\d+)/);
      // Ensure the price isn't a tiny fee (like ₹2 or ₹5 delivery charge)
      if (priceMatch && parseInt(priceMatch[1]) > 10) {
        return parseInt(priceMatch[1]);
      }
      parent = parent.parentElement;
    }
    return null;
  }, keyword);
}

async function scrapeItem(browser, item) {
  console.log(`\n🔍 Scraping item: ${item.query}`);
  const userAgent = USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];
  const context = await browser.newContext({ userAgent, viewport: { width: 1280, height: 720 } });
  const page = await context.newPage();
  
  // Abort only images and media to speed up, but allow CSS/JS so React can hydrate
  await page.route('**/*.{png,jpg,jpeg,webp,gif,svg,mp4}', route => route.abort());
  await page.route('**/*analytics*', route => route.abort());
  await page.route('**/*googletagmanager*', route => route.abort());

  let scrapedData = [];

  // 1. BLINKIT
  try {
    await randomDelay(1000, 2000); // Stealth delay
    await page.goto(`https://blinkit.com/s/?q=${item.query}`, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForSelector('text="₹"', { timeout: 10000 });
    
    const price = await extractAccuratePrice(page, item.targetName) || await extractAccuratePrice(page, item.query);
    if (price) {
      scrapedData.push({ item_name: item.query, canonical_name: item.targetName, platform_id: 'blinkit', price, in_stock: true });
      console.log(`   ✅ Blinkit Price: ₹${price}`);
    } else {
      console.log(`   ⚠️ Could not locate accurate price for ${item.query} on Blinkit`);
    }
  } catch (e) {
    console.error(`   ❌ Blinkit Timeout/Error for ${item.query}`);
  }

  // 2. ZEPTO
  try {
    await randomDelay(1000, 2000); // Stealth delay
    await page.goto(`https://www.zeptonow.com/search?query=${item.query}`, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForSelector('text="₹"', { timeout: 10000 });
    
    const price = await extractAccuratePrice(page, item.targetName) || await extractAccuratePrice(page, item.query);
    if (price) {
      scrapedData.push({ item_name: item.query, canonical_name: item.targetName, platform_id: 'zepto', price, in_stock: true });
      console.log(`   ✅ Zepto Price: ₹${price}`);
    } else {
      console.log(`   ⚠️ Could not locate accurate price for ${item.query} on Zepto`);
    }
  } catch (e) {
    console.error(`   ❌ Zepto Timeout/Error for ${item.query}`);
  }

  await context.close();

  // 3. UPSERT
  if (supabase && scrapedData.length > 0) {
    await supabase.from('live_prices').delete().eq('item_name', item.query);
    const { error } = await supabase.from('live_prices').insert(scrapedData);
    if (error) {
      console.error(`   ⚠️ Supabase Insert Error for ${item.query}:`, error);
    } else {
      console.log(`   💾 Saved ${item.query} to DB!`);
    }
  } else if (scrapedData.length > 0) {
    console.log(`   [DRY RUN] Would have saved ${item.query} to DB`);
  }
}

async function scrapePrices() {
  console.log("🚀 Starting Stealthy & Accurate Price Scrape...");
  const browser = await chromium.launch({ headless: true });
  
  // Controlled Concurrency: Process 2 items at a time
  const BATCH_SIZE = 2;
  for (let i = 0; i < CORE_ITEMS.length; i += BATCH_SIZE) {
    const batch = CORE_ITEMS.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(item => scrapeItem(browser, item)));
  }

  await browser.close();
  console.log("\n🎉 Automated Scraping Job Complete!");
}

scrapePrices().catch(console.error);
