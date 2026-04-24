const { chromium } = require('playwright');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '../.env.local' }); // Try local first
require('dotenv').config({ path: '../.env' }); // Fallback

// Connect to your Fantastic Food Supabase
const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase Credentials in environment variables!");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// The Core Items to scrape daily to maintain accurate pricing and capture long-tail SEO traffic
const CORE_ITEMS = [
  { query: 'onion', targetName: 'Onion (Red)' },
  { query: 'tomato', targetName: 'Tomato' },
  { query: 'potato', targetName: 'Potato' },
  { query: 'spinach', targetName: 'Spinach (Palak)' },
  { query: 'carrot', targetName: 'Carrot (Gajar)' },
  { query: 'capsicum', targetName: 'Capsicum (Bell Pepper)' },
  { query: 'cucumber', targetName: 'Cucumber (Kheera)' },
  { query: 'ladyfinger', targetName: 'Lady Finger (Bhindi)' },
  { query: 'brinjal', targetName: 'Brinjal (Baingan)' },
  { query: 'mushroom', targetName: 'Button Mushroom' },
  { query: 'banana', targetName: 'Banana' },
  { query: 'apple', targetName: 'Apple (Shimla)' },
  { query: 'mango', targetName: 'Mango (Alphonso)' },
  { query: 'grapes', targetName: 'Green Grapes' },
  { query: 'papaya', targetName: 'Papaya' },
  { query: 'milk', targetName: 'Full Cream Milk' },
  { query: 'butter', targetName: 'Amul Butter' },
  { query: 'paneer', targetName: 'Fresh Paneer' },
  { query: 'curd', targetName: 'Fresh Curd (Dahi)' },
  { query: 'cheese', targetName: 'Processed Cheese' },
  { query: 'eggs', targetName: 'Farm Fresh Eggs' },
  { query: 'chicken', targetName: 'Fresh Chicken (Boneless)' },
  { query: 'fish', targetName: 'Rohu Fish' },
  { query: 'prawn', targetName: 'Fresh Prawns' },
  { query: 'rice', targetName: 'Basmati Rice' },
  { query: 'dal', targetName: 'Toor Dal (Arhar)' },
  { query: 'flour', targetName: 'Whole Wheat Flour (Atta)' },
  { query: 'bread', targetName: 'Whole Wheat Bread' },
  { query: 'pasta', targetName: 'Durum Wheat Pasta' },
  { query: 'noodles', targetName: 'Instant Noodles (Maggi)' },
  { query: 'chips', targetName: 'Potato Chips (Lays)' },
  { query: 'tea', targetName: 'Assam Tea (CTC)' },
  { query: 'coffee', targetName: 'Instant Coffee (Nescafe)' },
  { query: 'juice', targetName: 'Mixed Fruit Juice' },
  { query: 'chocolate', targetName: 'Dark Chocolate' },
  { query: 'icecream', targetName: 'Ice Cream' },
  { query: 'oil', targetName: 'Sunflower Cooking Oil' },
  { query: 'sugar', targetName: 'White Sugar' },
  { query: 'salt', targetName: 'Iodized Salt' }
];

// Helper to simulate human delay and avoid basic bot detection
const delay = ms => new Promise(res => setTimeout(res, ms));

async function scrapePrices() {
  console.log("🚀 Starting Daily Price Automated Scrape (REAL LIVE DATA)...");
  
  const browser = await chromium.launch({ headless: true });
  // Add plausible user agent to prevent instant blocking
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 720 }
  });
  
  const page = await context.newPage();
  // Block images to speed up scraping
  await page.route('**/*.{png,jpg,jpeg,webp,gif}', route => route.abort());
  
  for (const item of CORE_ITEMS) {
    console.log(`\n🔍 Scraping item: ${item.query}`);
    let scrapedData = [];

    // 1. Scrape Blinkit
    try {
      console.log(` -> Visiting Blinkit for ${item.query}`);
      await page.goto(`https://blinkit.com/s/?q=${item.query}`, { waitUntil: 'domcontentloaded', timeout: 15000 });
      // Wait for at least one element with '₹'
      await page.waitForSelector('text="₹"', { timeout: 10000 });
      
      const priceText = await page.evaluate(() => {
        // Find the first element containing a price like "₹35"
        const elements = Array.from(document.querySelectorAll('*'));
        const priceRegex = /₹\s*(\d+)/;
        for (const el of elements) {
           if (el.children.length === 0 && priceRegex.test(el.textContent)) {
              return el.textContent;
           }
        }
        return null;
      });

      if (priceText) {
         const match = priceText.match(/₹\s*(\d+)/);
         if (match) {
            const price = parseInt(match[1]);
            scrapedData.push({
              item_name: item.query,
              canonical_name: item.targetName,
              platform_id: 'blinkit',
              price: price,
              in_stock: true
            });
            console.log(`   ✅ Blinkit Price: ₹${price}`);
         }
      } else {
         throw new Error("Could not find price text on Blinkit");
      }
    } catch (e) {
      console.error(`   ❌ Failed to scrape Blinkit for ${item.query} - ${e.message}`);
    }

    // 2. Scrape Zepto
    try {
      console.log(` -> Visiting Zepto for ${item.query}`);
      await page.goto(`https://www.zeptonow.com/search?query=${item.query}`, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForSelector('text="₹"', { timeout: 10000 });
      
      const priceText = await page.evaluate(() => {
        const elements = Array.from(document.querySelectorAll('*'));
        const priceRegex = /₹\s*(\d+)/;
        for (const el of elements) {
           if (el.children.length === 0 && priceRegex.test(el.textContent)) {
              return el.textContent;
           }
        }
        return null;
      });

      if (priceText) {
         const match = priceText.match(/₹\s*(\d+)/);
         if (match) {
            const price = parseInt(match[1]);
            scrapedData.push({
              item_name: item.query,
              canonical_name: item.targetName,
              platform_id: 'zepto',
              price: price,
              in_stock: true
            });
            console.log(`   ✅ Zepto Price: ₹${price}`);
         }
      } else {
         throw new Error("Could not find price text on Zepto");
      }
    } catch (e) {
      console.error(`   ❌ Failed to scrape Zepto for ${item.query} - ${e.message}`);
    }

    // 3. Upsert to Supabase
    if (scrapedData.length > 0) {
      // First, delete old entries for this item
      await supabase.from('live_prices').delete().eq('item_name', item.query);
      
      // Insert fresh scraped entries
      const { error } = await supabase.from('live_prices').insert(scrapedData);
      
      if (error) {
        console.error(`   ⚠️ Supabase Insert Error for ${item.query}:`, error);
      } else {
        console.log(`   💾 Successfully synced ${item.query} to Supabase!`);
      }
    }
  }

  await browser.close();
  console.log("\n🎉 Automated Scraping Job Complete!");
}

scrapePrices().catch(console.error);
