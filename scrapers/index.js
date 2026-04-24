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
  // Everyday Staples
  { query: 'onion', targetName: 'Fresh Onion' },
  { query: 'tomato', targetName: 'Fresh Tomato' },
  { query: 'potato', targetName: 'Fresh Potato' },
  { query: 'milk', targetName: 'Full Cream Milk' },
  { query: 'eggs', targetName: 'Farm Fresh Eggs (6 pcs)' },
  { query: 'bread', targetName: 'Whole Wheat Bread' },
  
  // High-Volume Branded Items
  { query: 'nandini ghee', targetName: 'Nandini Pure Cow Ghee' },
  { query: 'amul butter', targetName: 'Amul Butter (Salted)' },
  { query: 'maggi', targetName: 'Maggi 2-Minute Noodles' },
  { query: 'aashirvaad atta', targetName: 'Aashirvaad Whole Wheat Atta' },
  { query: 'tata salt', targetName: 'Tata Salt' },
  { query: 'tata sampann toor dal', targetName: 'Tata Sampann Toor Dal' },
  { query: 'fortune sunflower oil', targetName: 'Fortune Sunflower Oil' },
  { query: 'surf excel', targetName: 'Surf Excel Matic' },
  { query: 'brittania butter', targetName: 'Britannia Butter' },
  
  // Spices & Condiments
  { query: 'turmeric powder', targetName: 'Turmeric (Haldi) Powder' },
  { query: 'red chilli powder', targetName: 'Red Chilli Powder' },
  { query: 'cumin seeds', targetName: 'Cumin (Jeera) Seeds' },
  { query: 'garam masala', targetName: 'Garam Masala' },
  { query: 'ginger garlic paste', targetName: 'Ginger Garlic Paste' },
  { query: 'mustard oil', targetName: 'Mustard Oil (Sarson)' },
  
  // Exotic Fruits & Premium Veggies
  { query: 'avocado', targetName: 'Fresh Avocado' },
  { query: 'kiwi', targetName: 'Green Kiwi' },
  { query: 'dragon fruit', targetName: 'Dragon Fruit' },
  { query: 'blueberries', targetName: 'Fresh Blueberries' },
  { query: 'broccoli', targetName: 'Fresh Broccoli' },
  { query: 'button mushroom', targetName: 'Button Mushroom' },
  { query: 'bell pepper', targetName: 'Colored Capsicum (Bell Pepper)' },
  
  // Snacks & Beverages
  { query: 'lays classic', targetName: 'Lays Classic Salted Chips' },
  { query: 'nescafe classic', targetName: 'Nescafe Classic Coffee' },
  { query: 'tata tea gold', targetName: 'Tata Tea Gold' },
  { query: 'red bull', targetName: 'Red Bull Energy Drink' },
  { query: 'coca cola', targetName: 'Coca-Cola' },
  { query: 'popcorn', targetName: 'Act II Popcorn' }
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
