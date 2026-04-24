// ------------------------------------------------------------------
import { supabase } from '../lib/supabase';
// Fantastic Food — Price Data System
// Phase 1: Rich mock DB covering 50+ frequently ordered food items
// Phase 2 (Production): Replace searchPrices() with live Supabase
//   Edge Function that scrapes Blinkit/Zepto/BigBasket in real-time.
// ------------------------------------------------------------------

export interface PlatformPrice {
  platformId: string;
  productName: string;
  price: number;
  originalPrice: number;
  discount: number;
  unit: string;
  inStock: boolean;
  url: string;
  lastUpdated: string;
  imageUrl?: string;
  deliveryTime?: string;
}

export interface CompareResult {
  query: string;
  canonicalName: string;
  category: string;
  icon: string;
  prices: PlatformPrice[];
}

// Helper: add realistic variation to a base price
const vary = (base: number, min = 0.88, max = 1.18) =>
  Math.round(base * (min + Math.random() * (max - min)));

// Helper: build platform price entry
const p = (
  platformId: string,
  productName: string,
  price: number,
  originalPrice: number,
  discount: number,
  unit: string,
  query: string,
  inStock = true,
  deliveryTime?: string
): PlatformPrice => {
  const urls: Record<string, string> = {
    blinkit:   `https://blinkit.com/s/?q=${encodeURIComponent(query)}`,
    bigbasket: `https://www.bigbasket.com/ps/?q=${encodeURIComponent(query)}`,
    swiggy:    `https://swiggy.com/instamart/search?query=${encodeURIComponent(query)}`,
    zepto:     `https://www.zeptonow.com/search?query=${encodeURIComponent(query)}`,
    amazon:    `https://www.amazon.in/s?k=${encodeURIComponent(query)}&i=amazonfresh`,
    jiomart:   `https://www.jiomart.com/search/${encodeURIComponent(query)}`,
    flipkart:  `https://www.flipkart.com/search?q=${encodeURIComponent(query)}&p%5B%5D=facets.fulfillment_id%255B%255D%3DFlipkart%2BMinutes`,
  };
  return { platformId, productName, price, originalPrice, discount, unit, inStock, url: urls[platformId] || '#', lastUpdated: new Date().toISOString(), deliveryTime };
};

// ─── COMPLETE FOOD DATABASE ────────────────────────────────────────────────────
const MOCK_DB: Record<string, CompareResult> = {

  // ── VEGETABLES ─────────────────────────────────────────────────────────────
  onion: { query: 'onion', canonicalName: 'Onion (Red)', category: 'Vegetables', icon: '🧅', prices: [
    p('blinkit',   'Onion (Red)',           38, 45, 16, '1 kg', 'onion', true, '10 min'),
    p('bigbasket', 'BB Royal Onion',        34, 40, 15, '1 kg', 'onion', true, '2 hrs'),
    p('swiggy',    'Fresh Onion',           40, 46, 13, '1 kg', 'onion', true, '15 min'),
    p('zepto',     'Onion Red',             33, 42, 21, '1 kg', 'onion', true, '10 min'),
    p('amazon',    'Fresh Onion (Red)',     40, 48, 17, '1 kg', 'onion', true, '2 hrs'),
    p('jiomart',   'Onion',                30, 38, 21, '1 kg', 'onion', true, '1 day'),
    p('flipkart',  'Fresh Onion',          32, 40, 20, '1 kg', 'onion', true, '15 min'),
  ]},
  tomato: { query: 'tomato', canonicalName: 'Tomato', category: 'Vegetables', icon: '🍅', prices: [
    p('blinkit',   'Tomato Fresh',          48, 56, 14, '1 kg', 'tomato', true,  '10 min'),
    p('bigbasket', 'Fresho Tomato',         40, 50, 20, '1 kg', 'tomato', true,  '2 hrs'),
    p('swiggy',    'Tomato',                46, 55, 16, '1 kg', 'tomato', true,  '15 min'),
    p('zepto',     'Tomato (Hybrid)',        42, 52, 19, '1 kg', 'tomato', true,  '10 min'),
    p('amazon',    'Fresh Tomato',          50, 58, 14, '1 kg', 'tomato', true,  '2 hrs'),
    p('jiomart',   'Tomato',                36, 46, 22, '1 kg', 'tomato', true,  '1 day'),
    p('flipkart',  'Tomato',                38, 48, 21, '1 kg', 'tomato', true,  '15 min'),
  ]},
  potato: { query: 'potato', canonicalName: 'Potato', category: 'Vegetables', icon: '🥔', prices: [
    p('blinkit',   'White Potato',          28, 35, 20, '1 kg', 'potato', true,  '10 min'),
    p('bigbasket', 'Fresho Potato',         24, 30, 20, '1 kg', 'potato', true,  '2 hrs'),
    p('swiggy',    'Potato',                30, 36, 17, '1 kg', 'potato', true,  '15 min'),
    p('zepto',     'Potato',                25, 32, 22, '1 kg', 'potato', true,  '10 min'),
    p('amazon',    'Fresh Potato',          30, 38, 21, '1 kg', 'potato', true,  '2 hrs'),
    p('jiomart',   'Potato',                22, 28, 21, '1 kg', 'potato', true,  '1 day'),
    p('flipkart',  'Fresh Potato',          24, 30, 20, '1 kg', 'potato', true,  '15 min'),
  ]},
  spinach: { query: 'spinach', canonicalName: 'Spinach (Palak)', category: 'Vegetables', icon: '🌿', prices: [
    p('blinkit',   'Spinach (Palak)',       22, 28, 21, '250g', 'spinach', true,  '10 min'),
    p('bigbasket', 'Fresho Spinach',        18, 22, 18, '250g', 'spinach', true,  '2 hrs'),
    p('swiggy',    'Palak Fresh',           24, 28, 14, '250g', 'spinach', true,  '15 min'),
    p('zepto',     'Spinach Bundle',        19, 25, 24, '250g', 'spinach', true,  '10 min'),
    p('amazon',    'Fresh Spinach',         26, 30, 13, '250g', 'spinach', false, '2 hrs'),
    p('jiomart',   'Spinach',               16, 22, 27, '250g', 'spinach', true,  '1 day'),
  ]},
  carrot: { query: 'carrot', canonicalName: 'Carrot (Gajar)', category: 'Vegetables', icon: '🥕', prices: [
    p('blinkit',   'Fresh Carrot',          48, 56, 14, '500g', 'carrot', true,  '10 min'),
    p('bigbasket', 'Fresho Carrot',         42, 50, 16, '500g', 'carrot', true,  '2 hrs'),
    p('swiggy',    'Carrot',                50, 58, 14, '500g', 'carrot', true,  '15 min'),
    p('zepto',     'Orange Carrot',         44, 55, 20, '500g', 'carrot', true,  '10 min'),
    p('amazon',    'Fresh Carrot',          52, 60, 13, '500g', 'carrot', true,  '2 hrs'),
    p('jiomart',   'Carrot',                38, 48, 21, '500g', 'carrot', true,  '1 day'),
  ]},
  capsicum: { query: 'capsicum', canonicalName: 'Capsicum (Bell Pepper)', category: 'Vegetables', icon: '🫑', prices: [
    p('blinkit',   'Green Capsicum',        55, 65, 15, '500g', 'capsicum', true,  '10 min'),
    p('bigbasket', 'Fresho Capsicum',       48, 55, 13, '500g', 'capsicum', true,  '2 hrs'),
    p('swiggy',    'Capsicum Green',        58, 68, 15, '500g', 'capsicum', true,  '15 min'),
    p('zepto',     'Bell Pepper Green',     50, 62, 19, '500g', 'capsicum', true,  '10 min'),
    p('amazon',    'Fresh Capsicum',        60, 70, 14, '500g', 'capsicum', false, '2 hrs'),
    p('jiomart',   'Capsicum',              44, 55, 20, '500g', 'capsicum', true,  '1 day'),
  ]},
  cucumber: { query: 'cucumber', canonicalName: 'Cucumber (Kheera)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Cucumber',              28, 35, 20, '500g', 'cucumber', true,  '10 min'),
    p('bigbasket', 'Fresho Kheera',         24, 30, 20, '500g', 'cucumber', true,  '2 hrs'),
    p('swiggy',    'Cucumber',              30, 36, 17, '500g', 'cucumber', true,  '15 min'),
    p('zepto',     'Green Cucumber',        22, 30, 27, '500g', 'cucumber', true,  '10 min'),
    p('amazon',    'Fresh Cucumber',        32, 38, 16, '500g', 'cucumber', true,  '2 hrs'),
    p('jiomart',   'Cucumber',              20, 28, 29, '500g', 'cucumber', true,  '1 day'),
  ]},
  ladyfinger: { query: 'ladyfinger', canonicalName: 'Lady Finger (Bhindi)', category: 'Vegetables', icon: '🫘', prices: [
    p('blinkit',   'Bhindi (Lady Finger)',  52, 65, 20, '500g', 'bhindi', true,  '10 min'),
    p('bigbasket', 'Fresho Bhindi',         45, 55, 18, '500g', 'bhindi', true,  '2 hrs'),
    p('swiggy',    'Lady Finger',           55, 65, 15, '500g', 'bhindi', true,  '15 min'),
    p('zepto',     'Bhindi',                48, 60, 20, '500g', 'bhindi', true,  '10 min'),
    p('amazon',    'Fresh Bhindi',          58, 68, 15, '500g', 'bhindi', false, '2 hrs'),
    p('jiomart',   'Lady Finger',           40, 52, 23, '500g', 'bhindi', true,  '1 day'),
  ]},
  brinjal: { query: 'brinjal', canonicalName: 'Brinjal (Baingan)', category: 'Vegetables', icon: '🍆', prices: [
    p('blinkit',   'Brinjal (Baingan)',     38, 45, 16, '500g', 'brinjal', true,  '10 min'),
    p('bigbasket', 'Fresho Brinjal',        32, 40, 20, '500g', 'brinjal', true,  '2 hrs'),
    p('swiggy',    'Baingan',               40, 48, 17, '500g', 'brinjal', true,  '15 min'),
    p('zepto',     'Brinjal Purple',        34, 44, 23, '500g', 'brinjal', true,  '10 min'),
    p('amazon',    'Fresh Brinjal',         42, 50, 16, '500g', 'brinjal', true,  '2 hrs'),
    p('jiomart',   'Brinjal',               28, 38, 26, '500g', 'brinjal', true,  '1 day'),
  ]},
  mushroom: { query: 'mushroom', canonicalName: 'Button Mushroom', category: 'Vegetables', icon: '🍄', prices: [
    p('blinkit',   'Button Mushroom',       55, 65, 15, '200g', 'mushroom', true,  '10 min'),
    p('bigbasket', 'Fresho Button Mushroom',49, 58, 16, '200g', 'mushroom', true,  '2 hrs'),
    p('swiggy',    'Mushroom Button',       58, 65, 11, '200g', 'mushroom', true,  '15 min'),
    p('zepto',     'Button Mushroom',       52, 65, 20, '200g', 'mushroom', true,  '10 min'),
    p('amazon',    'Fresh Button Mushroom', 60, 72, 17, '200g', 'mushroom', true,  '2 hrs'),
    p('jiomart',   'Mushroom',              45, 55, 18, '200g', 'mushroom', true,  '1 day'),
  ]},

  // ── FRUITS ─────────────────────────────────────────────────────────────────
  banana: { query: 'banana', canonicalName: 'Banana', category: 'Fruits', icon: '🍌', prices: [
    p('blinkit',   'Banana (Robusta)',      49, 55, 11, '6 pcs', 'banana', true,  '10 min'),
    p('bigbasket', 'Fresho Banana',         42, 50, 16, '6 pcs', 'banana', true,  '2 hrs'),
    p('swiggy',    'Yellow Banana',         48, 56, 14, '6 pcs', 'banana', true,  '15 min'),
    p('zepto',     'Banana',                39, 50, 22, '6 pcs', 'banana', true,  '10 min'),
    p('amazon',    'Fresh Banana',          52, 58, 10, '6 pcs', 'banana', true,  '2 hrs'),
    p('jiomart',   'Banana',                38, 45, 16, '6 pcs', 'banana', true,  '1 day'),
  ]},
  apple: { query: 'apple', canonicalName: 'Apple (Shimla)', category: 'Fruits', icon: '🍎', prices: [
    p('blinkit',   'Shimla Apple',          185, 220, 16, '4 pcs', 'apple', true,  '10 min'),
    p('bigbasket', 'BB Royal Apple',        165, 195, 15, '4 pcs', 'apple', true,  '2 hrs'),
    p('swiggy',    'Fresh Apple',           178, 210, 15, '4 pcs', 'apple', true,  '15 min'),
    p('zepto',     'Shimla Apple',          160, 200, 20, '4 pcs', 'apple', true,  '10 min'),
    p('amazon',    'Academy Of Apples',     195, 230, 15, '4 pcs', 'apple', true,  '2 hrs'),
    p('jiomart',   'Apple Shimla',          149, 188, 21, '4 pcs', 'apple', true,  '1 day'),
  ]},
  mango: { query: 'mango', canonicalName: 'Mango (Alphonso)', category: 'Fruits', icon: '🥭', prices: [
    p('blinkit',   'Alphonso Mango',        280, 320, 13, '1 kg', 'mango', true,  '10 min'),
    p('bigbasket', 'Hapus Alphonso Mango',  260, 300, 13, '1 kg', 'mango', true,  '2 hrs'),
    p('swiggy',    'Alphonso Mango',        295, 340, 13, '1 kg', 'mango', true,  '15 min'),
    p('zepto',     'Fresh Mango',           245, 300, 18, '1 kg', 'mango', true,  '10 min'),
    p('amazon',    'Premium Alphonso',      310, 360, 14, '1 kg', 'mango', true,  '2 hrs'),
    p('jiomart',   'Mango Alphonso',        235, 285, 18, '1 kg', 'mango', true,  '1 day'),
  ]},
  grapes: { query: 'grapes', canonicalName: 'Green Grapes', category: 'Fruits', icon: '🍇', prices: [
    p('blinkit',   'Green Grapes',          95, 115, 17, '500g', 'grapes', true,  '10 min'),
    p('bigbasket', 'Fresho Grapes',         85, 100, 15, '500g', 'grapes', true,  '2 hrs'),
    p('swiggy',    'Green Grapes',          98, 118, 17, '500g', 'grapes', true,  '15 min'),
    p('zepto',     'Grapes Green',          80, 100, 20, '500g', 'grapes', true,  '10 min'),
    p('amazon',    'Fresh Green Grapes',    105, 125, 16, '500g', 'grapes', true,  '2 hrs'),
    p('jiomart',   'Grapes (Green)',        78, 98, 20,  '500g', 'grapes', true,  '1 day'),
  ]},
  papaya: { query: 'papaya', canonicalName: 'Papaya', category: 'Fruits', icon: '🍈', prices: [
    p('blinkit',   'Raw Papaya',            55, 65, 15, '1 kg', 'papaya', true,  '10 min'),
    p('bigbasket', 'Fresho Papaya',         48, 58, 17, '1 kg', 'papaya', true,  '2 hrs'),
    p('swiggy',    'Papaya',                58, 70, 17, '1 kg', 'papaya', true,  '15 min'),
    p('zepto',     'Fresh Papaya',          50, 62, 19, '1 kg', 'papaya', true,  '10 min'),
    p('amazon',    'Papaya',                62, 72, 14, '1 kg', 'papaya', true,  '2 hrs'),
    p('jiomart',   'Papaya',                44, 55, 20, '1 kg', 'papaya', true,  '1 day'),
  ]},

  // ── DAIRY ──────────────────────────────────────────────────────────────────
  milk: { query: 'milk', canonicalName: 'Full Cream Milk', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Amul Gold Full Cream',  31, 31, 0, '500 ml', 'milk', true,  '10 min'),
    p('bigbasket', 'Nandini Full Cream',    30, 30, 0, '500 ml', 'milk', true,  '2 hrs'),
    p('swiggy',    'Amul Full Cream Milk',  32, 32, 0, '500 ml', 'milk', true,  '15 min'),
    p('zepto',     'Mother Dairy FC',       31, 33, 6, '500 ml', 'milk', true,  '10 min'),
    p('amazon',    'Amul Gold',             31, 31, 0, '500 ml', 'milk', true,  '2 hrs'),
    p('jiomart',   'JioMart FC Milk',       29, 31, 6, '500 ml', 'milk', true,  '1 day'),
  ]},
  butter: { query: 'butter', canonicalName: 'Amul Butter', category: 'Dairy', icon: '🧈', prices: [
    p('blinkit',   'Amul Butter (Salted)',  58, 60, 3,  '100g', 'butter', true,  '10 min'),
    p('bigbasket', 'BB Homemade Butter',    52, 58, 10, '100g', 'butter', true,  '2 hrs'),
    p('swiggy',    'Amul Butter',           59, 60, 2,  '100g', 'butter', true,  '15 min'),
    p('zepto',     'Amul Pasteurised Butter',55,60, 8,  '100g', 'butter', true,  '10 min'),
    p('amazon',    'Amul Butter Block',     60, 60, 0,  '100g', 'butter', true,  '2 hrs'),
    p('jiomart',   'Butter Amul',           56, 60, 7,  '100g', 'butter', true,  '1 day'),
  ]},
  paneer: { query: 'paneer', canonicalName: 'Fresh Paneer', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Amul Fresh Paneer',     95,  110, 14, '200g', 'paneer', true,  '10 min'),
    p('bigbasket', 'Fresho Paneer',         88,  100, 12, '200g', 'paneer', true,  '2 hrs'),
    p('swiggy',    'Mother Dairy Paneer',   98,  115, 15, '200g', 'paneer', true,  '15 min'),
    p('zepto',     'Paneer Fresh',          90,  108, 17, '200g', 'paneer', true,  '10 min'),
    p('amazon',    'Amul Paneer',           102, 118, 14, '200g', 'paneer', true,  '2 hrs'),
    p('jiomart',   'JioMart Paneer',        85,  100, 15, '200g', 'paneer', true,  '1 day'),
  ]},
  curd: { query: 'curd', canonicalName: 'Fresh Curd (Dahi)', category: 'Dairy', icon: '🍶', prices: [
    p('blinkit',   'Amul Masti Dahi',       42, 45, 7,  '400g', 'curd dahi', true,  '10 min'),
    p('bigbasket', 'Mother Dairy Curd',     38, 44, 14, '400g', 'curd dahi', true,  '2 hrs'),
    p('swiggy',    'Epigamia Greek Yogurt', 65, 75, 13, '400g', 'curd dahi', true,  '15 min'),
    p('zepto',     'Amul Masti Dahi',       40, 46, 13, '400g', 'curd dahi', true,  '10 min'),
    p('amazon',    'Amul Dahi',             44, 48, 8,  '400g', 'curd dahi', true,  '2 hrs'),
    p('jiomart',   'Curd (Dahi)',           36, 42, 14, '400g', 'curd dahi', true,  '1 day'),
  ]},
  cheese: { query: 'cheese', canonicalName: 'Processed Cheese', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Amul Cheese Slices',    99,  115, 14, '200g', 'cheese', true,  '10 min'),
    p('bigbasket', 'BB Cheese Block',       88,  100, 12, '200g', 'cheese', true,  '2 hrs'),
    p('swiggy',    'Amul Cheese',           102, 118, 14, '200g', 'cheese', true,  '15 min'),
    p('zepto',     'Britannia Cheese',      92,  108, 15, '200g', 'cheese', true,  '10 min'),
    p('amazon',    'Amul Cheese Block',     108, 125, 14, '200g', 'cheese', true,  '2 hrs'),
    p('jiomart',   'Cheese Slices',         85,  98,  13, '200g', 'cheese', true,  '1 day'),
  ]},

  // ── EGGS & POULTRY ─────────────────────────────────────────────────────────
  eggs: { query: 'eggs', canonicalName: 'Farm Fresh Eggs', category: 'Poultry', icon: '🥚', prices: [
    p('blinkit',   'White Eggs',            78, 84, 7,  '12 pcs', 'eggs', true,  '10 min'),
    p('bigbasket', 'Fresho White Eggs',     72, 80, 10, '12 pcs', 'eggs', true,  '2 hrs'),
    p('swiggy',    'Farm Fresh Eggs',       80, 84, 5,  '12 pcs', 'eggs', true,  '15 min'),
    p('zepto',     'Country Eggs',          69, 80, 14, '12 pcs', 'eggs', true,  '10 min'),
    p('amazon',    'Organic Farm Eggs',     95, 110,14, '12 pcs', 'eggs', true,  '2 hrs'),
    p('jiomart',   'Eggs',                  74, 80, 8,  '12 pcs', 'eggs', false, '1 day'),
  ]},
  chicken: { query: 'chicken', canonicalName: 'Fresh Chicken (Boneless)', category: 'Meat & Poultry', icon: '🍗', prices: [
    p('blinkit',   'Licious Fresh Boneless',289, 320,10, '500g', 'chicken boneless', true,  '10 min'),
    p('bigbasket', 'Fresho Chicken Boneless',275,310,11, '500g', 'chicken boneless', true,  '2 hrs'),
    p('swiggy',    'Chicken Breast',        299, 350,15, '500g', 'chicken boneless', true,  '15 min'),
    p('zepto',     'Fresh Chicken Boneless',265, 310,15, '500g', 'chicken boneless', true,  '10 min'),
    p('amazon',    'Licious Chicken',       310, 360,14, '500g', 'chicken boneless', true,  '2 hrs'),
    p('jiomart',   'Chicken Whole',         180, 200,10, '500g', 'chicken',          false, '1 day'),
  ]},

  // ── FISH & SEAFOOD ─────────────────────────────────────────────────────────
  fish: { query: 'fish', canonicalName: 'Rohu Fish', category: 'Seafood', icon: '🐟', prices: [
    p('blinkit',   'Licious Rohu Fish',     195, 235, 17, '500g', 'rohu fish', true,  '10 min'),
    p('bigbasket', 'Fresho Rohu',           178, 215, 17, '500g', 'rohu fish', true,  '2 hrs'),
    p('swiggy',    'Rohu Fish Curry Cut',   205, 248, 17, '500g', 'rohu fish', true,  '15 min'),
    p('zepto',     'Rohu (Rui) Fish',       182, 220, 17, '500g', 'rohu fish', true,  '10 min'),
    p('amazon',    'Fresh Rohu Fish',       215, 258, 17, '500g', 'rohu fish', true,  '2 hrs'),
    p('jiomart',   'Rohu Fish',             168, 205, 18, '500g', 'rohu fish', false, '1 day'),
  ]},
  prawn: { query: 'prawn', canonicalName: 'Fresh Prawns', category: 'Seafood', icon: '🦐', prices: [
    p('blinkit',   'Licious Fresh Prawns',  325, 380, 14, '250g', 'prawns', true,  '10 min'),
    p('bigbasket', 'Fresho Prawn',          298, 350, 15, '250g', 'prawns', true,  '2 hrs'),
    p('swiggy',    'Tiger Prawns',          345, 400, 14, '250g', 'prawns', true,  '15 min'),
    p('zepto',     'Fresh Prawns',          308, 365, 16, '250g', 'prawns', true,  '10 min'),
    p('amazon',    'Premium Prawns',        360, 420, 14, '250g', 'prawns', true,  '2 hrs'),
    p('jiomart',   'Prawns (Jhinga)',       285, 340, 16, '250g', 'prawns', false, '1 day'),
  ]},

  // ── GRAINS & PULSES ────────────────────────────────────────────────────────
  rice: { query: 'rice', canonicalName: 'Basmati Rice', category: 'Grains & Pulses', icon: '🍚', prices: [
    p('blinkit',   'India Gate Classic',    158, 180, 12, '1 kg', 'basmati rice', true,  '10 min'),
    p('bigbasket', 'BB Royal Basmati',      149, 170, 12, '1 kg', 'basmati rice', true,  '2 hrs'),
    p('swiggy',    'Kohinoor Basmati',      165, 190, 13, '1 kg', 'basmati rice', true,  '15 min'),
    p('zepto',     'India Gate Basmati',    155, 185, 16, '1 kg', 'basmati rice', true,  '10 min'),
    p('amazon',    'Daawat Basmati',        172, 195, 12, '1 kg', 'basmati rice', true,  '2 hrs'),
    p('jiomart',   'JioMart Basmati',       142, 165, 14, '1 kg', 'basmati rice', true,  '1 day'),
  ]},
  dal: { query: 'dal', canonicalName: 'Toor Dal (Arhar)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Sampann Toor Dal', 155, 175, 11, '1 kg', 'toor dal', true,  '10 min'),
    p('bigbasket', 'BB Popular Toor Dal',   148, 170, 13, '1 kg', 'toor dal', true,  '2 hrs'),
    p('swiggy',    'Toor Dal',              160, 180, 11, '1 kg', 'toor dal', true,  '15 min'),
    p('zepto',     'Arhar Dal',             145, 168, 14, '1 kg', 'toor dal', true,  '10 min'),
    p('amazon',    'Toor Dal Premium',      162, 185, 12, '1 kg', 'toor dal', true,  '2 hrs'),
    p('jiomart',   'Toor Dal',              140, 162, 14, '1 kg', 'toor dal', true,  '1 day'),
  ]},
  flour: { query: 'flour', canonicalName: 'Whole Wheat Flour (Atta)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Aashirvaad Atta',       62, 72, 14, '1 kg', 'whole wheat atta', true,  '10 min'),
    p('bigbasket', 'BB Popular Atta',       58, 68, 15, '1 kg', 'whole wheat atta', true,  '2 hrs'),
    p('swiggy',    'Pillsbury Atta',        65, 75, 13, '1 kg', 'whole wheat atta', true,  '15 min'),
    p('zepto',     'Aashirvaad Multigrain', 60, 70, 14, '1 kg', 'whole wheat atta', true,  '10 min'),
    p('amazon',    'Pavitra Atta',          68, 78, 13, '1 kg', 'whole wheat atta', true,  '2 hrs'),
    p('jiomart',   'Whole Wheat Atta',      55, 65, 15, '1 kg', 'whole wheat atta', true,  '1 day'),
  ]},

  // ── BAKERY ─────────────────────────────────────────────────────────────────
  bread: { query: 'bread', canonicalName: 'Whole Wheat Bread', category: 'Bakery', icon: '🍞', prices: [
    p('blinkit',   'Britannia 100% Atta',   42, 50, 16, '400g', 'whole wheat bread', true,  '10 min'),
    p('bigbasket', 'BB Whole Wheat Bread',  38, 42, 10, '400g', 'whole wheat bread', true,  '2 hrs'),
    p('swiggy',    'Harvest Gold Atta',     40, 45, 11, '400g', 'whole wheat bread', true,  '15 min'),
    p('zepto',     'Britannia Atta Bread',  39, 50, 22, '400g', 'whole wheat bread', true,  '10 min'),
    p('amazon',    'Bonn Whole Wheat',      45, 50, 10, '400g', 'whole wheat bread', true,  '2 hrs'),
    p('jiomart',   'Britannia Bread',       37, 45, 18, '400g', 'whole wheat bread', true,  '1 day'),
  ]},

  // ── PACKAGED FOODS ─────────────────────────────────────────────────────────
  pasta: { query: 'pasta', canonicalName: 'Durum Wheat Pasta', category: 'Packaged Foods', icon: '🍝', prices: [
    p('blinkit',   'Barilla Penne',         88, 105, 16, '500g', 'pasta penne', true,  '10 min'),
    p('bigbasket', 'BB Popular Pasta',      72,  85,  15, '500g', 'pasta penne', true,  '2 hrs'),
    p('swiggy',    'Borges Fusilli',        92,  110, 16, '500g', 'pasta penne', true,  '15 min'),
    p('zepto',     'Barilla Pasta',         85,  102, 17, '500g', 'pasta penne', true,  '10 min'),
    p('amazon',    'Barilla Spaghetti',    95,  115, 17, '500g', 'pasta penne', true,  '2 hrs'),
    p('jiomart',   'Durum Wheat Pasta',    68,  82,  17, '500g', 'pasta penne', true,  '1 day'),
  ]},
  noodles: { query: 'noodles', canonicalName: 'Instant Noodles (Maggi)', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Maggi 2-Minute Masala', 14, 14, 0, '70g', 'maggi noodles', true,  '10 min'),
    p('bigbasket', 'Maggi Noodles',         13, 14, 7, '70g', 'maggi noodles', true,  '2 hrs'),
    p('swiggy',    'Maggi Masala Noodles',  14, 14, 0, '70g', 'maggi noodles', true,  '15 min'),
    p('zepto',     'Yippee Noodles',        12, 14, 14,'70g', 'instant noodles', true,  '10 min'),
    p('amazon',    'Maggi 2-Minute',        14, 14, 0, '70g', 'maggi noodles', true,  '2 hrs'),
    p('jiomart',   'Maggi Noodles',         12, 14, 14,'70g', 'maggi noodles', true,  '1 day'),
  ]},
  chips: { query: 'chips', canonicalName: 'Potato Chips (Lays)', category: 'Snacks', icon: '🥔', prices: [
    p('blinkit',   'Lays Classic Salted',   20, 20, 0, '26g', 'lays chips', true,  '10 min'),
    p('bigbasket', 'Pringles Sour Cream',   42, 50, 16,'100g', 'pringles chips', true, '2 hrs'),
    p('swiggy',    'Lays Masala',           20, 20, 0, '26g', 'lays chips', true,  '15 min'),
    p('zepto',     'Lay\'s Spanish Tomato', 20, 20, 0, '26g', 'lays chips', true,  '10 min'),
    p('amazon',    'Pringles Original',     99, 115,14,'165g', 'pringles chips', true, '2 hrs'),
    p('jiomart',   'JioMart Chips',         18, 20, 10,'26g', 'chips', true,  '1 day'),
  ]},

  // ── BEVERAGES ──────────────────────────────────────────────────────────────
  tea: { query: 'tea', canonicalName: 'Assam Tea (CTC)', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Tata Tea Gold 250g',    105, 120, 13, '250g', 'tata tea', true,  '10 min'),
    p('bigbasket', 'Wagh Bakri CTC 250g',   98,  112, 13, '250g', 'wagh bakri tea', true, '2 hrs'),
    p('swiggy',    'Brooke Bond Red Label', 110, 125, 12, '250g', 'red label tea', true, '15 min'),
    p('zepto',     'Tata Tea Gold',         102, 118, 14, '250g', 'tata tea', true,  '10 min'),
    p('amazon',    'Darjeeling CTC Tea',    115, 132, 13, '250g', 'assam tea', true, '2 hrs'),
    p('jiomart',   'Tea Leaf (CTC)',        95,  110, 14, '250g', 'tea', true,  '1 day'),
  ]},
  coffee: { query: 'coffee', canonicalName: 'Instant Coffee (Nescafe)', category: 'Beverages', icon: '☕', prices: [
    p('blinkit',   'Nescafe Classic 50g',   128, 150, 15, '50g', 'nescafe coffee', true,  '10 min'),
    p('bigbasket', 'Bru Gold 50g',          115, 135, 15, '50g', 'bru coffee', true, '2 hrs'),
    p('swiggy',    'Nescafe Classic',       132, 155, 15, '50g', 'nescafe coffee', true, '15 min'),
    p('zepto',     'Nescafe Original 50g',  125, 148, 16, '50g', 'nescafe coffee', true, '10 min'),
    p('amazon',    'Nescafe Intense',       138, 162, 15, '50g', 'nescafe coffee', true, '2 hrs'),
    p('jiomart',   'Coffee Nescafe',        118, 142, 17, '50g', 'coffee', true,  '1 day'),
  ]},
  juice: { query: 'juice', canonicalName: 'Mixed Fruit Juice', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Mixed Fruit Juice',72, 85, 15, '1 L', 'mixed fruit juice', true, '10 min'),
    p('bigbasket', 'Tropicana Mixed Fruit', 78, 92, 15, '1 L', 'tropicana juice', true, '2 hrs'),
    p('swiggy',    'Paper Boat Aamras',     68, 80, 15, '1 L', 'paper boat juice', true, '15 min'),
    p('zepto',     'B Natural Juice 1L',    75, 88, 15, '1 L', 'b natural juice', true, '10 min'),
    p('amazon',    'Tropicana Orange 1L',   82, 98, 16, '1 L', 'tropicana juice', true, '2 hrs'),
    p('jiomart',   'Mixed Fruit Juice',     65, 78, 17, '1 L', 'juice', true,  '1 day'),
  ]},

  // ── SWEETS & DESSERTS ──────────────────────────────────────────────────────
  chocolate: { query: 'chocolate', canonicalName: 'Dark Chocolate', category: 'Sweets & Desserts', icon: '🍫', prices: [
    p('blinkit',   'Cadbury Dairy Milk 150g', 88, 100, 12,'150g', 'cadbury dairy milk', true, '10 min'),
    p('bigbasket', 'Morde Dark Chocolate',    78,  92,  15,'150g', 'dark chocolate', true, '2 hrs'),
    p('swiggy',    'KitKat 150g',             95, 110, 14,'150g', 'kitkat chocolate', true, '15 min'),
    p('zepto',     'Cadbury Silk',            82, 100, 18,'150g', 'cadbury silk', true, '10 min'),
    p('amazon',    'Lindt Dark 100g',        148, 175, 15,'100g', 'lindt dark chocolate', true, '2 hrs'),
    p('jiomart',   'Dairy Milk',              85,  98, 13,'150g', 'dairy milk chocolate', true, '1 day'),
  ]},
  icecream: { query: 'icecream', canonicalName: 'Ice Cream', category: 'Sweets & Desserts', icon: '🍦', prices: [
    p('blinkit',   'Amul Vanilla Ice Cream', 105, 120, 13, '750 ml', 'amul ice cream', true, '10 min'),
    p('bigbasket', 'Kwality Walls Cassata',  88,  105, 16, '750 ml', 'kwality walls ice cream', true, '2 hrs'),
    p('swiggy',    'NIC Natural Ice Cream',  165, 195, 15, '500 ml', 'nic ice cream', true, '15 min'),
    p('zepto',     'Amul Chocolate Icecream',110, 128, 14, '750 ml', 'amul ice cream', true, '10 min'),
    p('amazon',    'Baskin Robbins Tub',     285, 340, 16, '500 ml', 'baskin robbins ice cream', true, '2 hrs'),
    p('jiomart',   'Amul Real Ice Cream',    98,  115, 15, '750 ml', 'ice cream', true, '1 day'),
  ]},

  // ── COOKING ESSENTIALS ─────────────────────────────────────────────────────
  oil: { query: 'oil', canonicalName: 'Sunflower Cooking Oil', category: 'Packaged Foods', icon: '🫙', prices: [
    p('blinkit',   'Fortune Sunlite Oil',   148, 175, 15, '1 L', 'sunflower oil', true, '10 min'),
    p('bigbasket', 'Saffola Gold Oil',      165, 195, 15, '1 L', 'saffola oil', true, '2 hrs'),
    p('swiggy',    'Fortune Sunflower Oil', 152, 178, 15, '1 L', 'sunflower oil', true, '15 min'),
    p('zepto',     'Gemini Sunflower Oil',  140, 165, 15, '1 L', 'sunflower oil', true, '10 min'),
    p('amazon',    'Dhara Sunflower Oil',   158, 185, 15, '1 L', 'sunflower cooking oil', true, '2 hrs'),
    p('jiomart',   'Cooking Oil 1L',        135, 160, 16, '1 L', 'oil', true, '1 day'),
  ]},
  sugar: { query: 'sugar', canonicalName: 'White Sugar', category: 'Packaged Foods', icon: '🍬', prices: [
    p('blinkit',   'Uttam Sugar 1kg',       48, 55, 13, '1 kg', 'sugar', true, '10 min'),
    p('bigbasket', 'BB Popular Sugar',      45, 52, 13, '1 kg', 'sugar', true, '2 hrs'),
    p('swiggy',    'Sugar (White)',         50, 58, 14, '1 kg', 'sugar', true, '15 min'),
    p('zepto',     'Crystal Sugar',         46, 54, 15, '1 kg', 'sugar', true, '10 min'),
    p('amazon',    'Dhampure Sugar',        52, 60, 13, '1 kg', 'sugar', true, '2 hrs'),
    p('jiomart',   'Sugar',                 42, 50, 16, '1 kg', 'sugar', true, '1 day'),
  ]},
  salt: { query: 'salt', canonicalName: 'Iodized Salt', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Tata Rock Salt',        22, 25, 12, '1 kg', 'iodized salt', true, '10 min'),
    p('bigbasket', 'Catch Iodized Salt',    18, 22, 18, '1 kg', 'salt', true, '2 hrs'),
    p('swiggy',    'Tata Salt Classic',     20, 24, 17, '1 kg', 'tata salt', true, '15 min'),
    p('zepto',     'Tata Lite Salt',        28, 32, 13, '1 kg', 'salt', true, '10 min'),
    p('amazon',    'Himalayan Pink Salt',   95, 110, 14, '1 kg', 'himalayan salt', true, '2 hrs'),
    p('jiomart',   'Salt',                  16, 20, 20, '1 kg', 'salt', true, '1 day'),
  ]},
};

// ─── PRICE DETECTION SYSTEM ────────────────────────────────────────────────────
// This system auto-generates real platform search URLs for any food item,
// even if it's not in the MOCK_DB. Production upgrade → replace with real
// scraping API (e.g., foodspark.io) in the Edge Function.

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// Estimate a base price for generic items based on real 2026 Indian market prices
const estimateBasePrice = (query: string): number => {
  const q = query.toLowerCase();
  // Meat & Seafood
  if (/mutton|lamb/.test(q)) return 550;
  if (/chicken boneless/.test(q)) return 290;
  if (/chicken/.test(q)) return 220;
  if (/fish|salmon|tuna|rohu|catla/.test(q)) return 220;
  if (/prawn|shrimp|crab|lobster/.test(q)) return 350;
  // Premium fruits
  if (/avocado/.test(q)) return 160;
  if (/strawberry|blueberry|kiwi/.test(q)) return 140;
  if (/mango|alphonso/.test(q)) return 280;
  if (/apple|shimla/.test(q)) return 180;
  if (/pomegranate/.test(q)) return 130;
  if (/watermelon/.test(q)) return 40;
  if (/banana|papaya|guava/.test(q)) return 55;
  // Grains & Pulses
  if (/basmati|india gate|daawat/.test(q)) return 165;
  if (/rice/.test(q)) return 70;
  if (/atta|flour|maida/.test(q)) return 65;
  if (/urad dal|moong dal|chana dal/.test(q)) return 145;
  if (/toor dal|arhar/.test(q)) return 158;
  if (/dal|pulse|rajma|chana|lentil/.test(q)) return 120;
  // Dairy
  if (/ghee/.test(q)) return 580;
  if (/paneer/.test(q)) return 95;
  if (/cheese/.test(q)) return 100;
  if (/butter/.test(q)) return 58;
  if (/curd|dahi|yogurt/.test(q)) return 42;
  if (/milk/.test(q)) return 31;
  if (/cream/.test(q)) return 75;
  // Oils & Condiments
  if (/mustard oil/.test(q)) return 180;
  if (/olive oil/.test(q)) return 320;
  if (/ghee|clarified/.test(q)) return 580;
  if (/oil/.test(q)) return 150;
  if (/vinegar|sauce|ketchup/.test(q)) return 72;
  // Spices
  if (/turmeric|haldi/.test(q)) return 65;
  if (/cumin|jeera/.test(q)) return 120;
  if (/coriander|dhania/.test(q)) return 40;
  if (/chilli|mirchi/.test(q)) return 85;
  if (/garam masala|biryani masala|curry powder/.test(q)) return 95;
  if (/masala|spice/.test(q)) return 80;
  // Packaged foods
  if (/biscuit|cookie/.test(q)) return 40;
  if (/chocolate|bar/.test(q)) return 90;
  if (/chips|namkeen/.test(q)) return 25;
  if (/noodles|maggi|pasta/.test(q)) return 85;
  if (/bread/.test(q)) return 45;
  // Beverages
  if (/cola|pepsi|coke|soda/.test(q)) return 42;
  if (/juice/.test(q)) return 75;
  if (/tea/.test(q)) return 105;
  if (/coffee/.test(q)) return 130;
  if (/water/.test(q)) return 25;
  // Vegetables (more granular)
  if (/capsicum|bell pepper/.test(q)) return 52;
  if (/mushroom/.test(q)) return 55;
  if (/broccoli/.test(q)) return 70;
  if (/cauliflower|gobi/.test(q)) return 40;
  if (/cabbage|patta gobi/.test(q)) return 30;
  if (/peas|matar/.test(q)) return 60;
  if (/bean|french bean/.test(q)) return 55;
  if (/corn|maize/.test(q)) return 40;
  if (/ginger|adrak/.test(q)) return 150;
  if (/garlic|lahsun/.test(q)) return 200;
  if (/lemon|nimbu/.test(q)) return 80;
  // Eggs
  if (/egg/.test(q)) return 78;
  // Sweet / Dessert
  if (/sugar/.test(q)) return 48;
  if (/jaggery|gur/.test(q)) return 68;
  if (/ice cream/.test(q)) return 105;
  // Default grocery
  return 50;
};

export const getBestPrice = (prices: PlatformPrice[]): PlatformPrice | null => {
  const inStock = prices.filter((p) => p.inStock);
  if (inStock.length === 0) return null;
  return inStock.reduce((best, curr) => (curr.price < best.price ? curr : best), inStock[0]);
};

// Auto-detect prices: tries MOCK_DB first, then generates realistic platform URLs
// with randomized-but-realistic price variance for any food query.
// It then injects real Live Market Data from Supabase if available!
export const searchPrices = async (query: string, _pincode?: string): Promise<CompareResult | null> => {
  await delay(500 + Math.random() * 400);
  const key = query.toLowerCase().trim();

  // 1. Generate the Base Fallback Array (either from MOCK_DB or Auto-generated)
  let resultTemplate: CompareResult;
  const match = Object.keys(MOCK_DB).find(
    (k) => k === key || k.includes(key) || key.includes(k)
  );

  if (match) {
    resultTemplate = JSON.parse(JSON.stringify(MOCK_DB[match])) as CompareResult;
    if (!resultTemplate.prices.find(p => p.platformId === 'flipkart')) {
      const basePrice = resultTemplate.prices[0]?.originalPrice || estimateBasePrice(key);
      resultTemplate.prices.push({ 
        platformId: 'flipkart', 
        productName: resultTemplate.canonicalName, 
        price: vary(basePrice, 0.85, 1.0), 
        originalPrice: vary(basePrice, 1.08, 1.15), 
        discount: 12, 
        unit: resultTemplate.prices[0]?.unit || '1 unit', 
        inStock: true, 
        url: `https://www.flipkart.com/search?q=${encodeURIComponent(resultTemplate.query)}&p%5B%5D=facets.fulfillment_id%255B%255D%3DFlipkart%2BMinutes`, 
        lastUpdated: new Date().toISOString(), 
        deliveryTime: '15 min' 
      });
    }
  } else {
    // Start with all 7 auto-generated
    const basePrice = estimateBasePrice(key);
    const icon = '🛒';
    resultTemplate = {
        query,
        canonicalName: query.charAt(0).toUpperCase() + query.slice(1),
        category: 'Grocery',
        icon,
        prices: [
            { platformId: 'blinkit',   productName: query, price: vary(basePrice, 0.92, 1.08), originalPrice: vary(basePrice, 1.1, 1.2),  discount: 8,  unit: '1 unit', inStock: true,  url: `https://blinkit.com/s/?q=${encodeURIComponent(query)}`,             lastUpdated: new Date().toISOString(), deliveryTime: '10 min' },
            { platformId: 'bigbasket', productName: query, price: vary(basePrice, 0.88, 1.02), originalPrice: vary(basePrice, 1.05, 1.15), discount: 12, unit: '1 unit', inStock: true,  url: `https://www.bigbasket.com/ps/?q=${encodeURIComponent(query)}`,      lastUpdated: new Date().toISOString(), deliveryTime: '2 hrs'  },
            { platformId: 'swiggy',    productName: query, price: vary(basePrice, 0.95, 1.1),  originalPrice: vary(basePrice, 1.08, 1.18), discount: 10, unit: '1 unit', inStock: true,  url: `https://swiggy.com/instamart/search?query=${encodeURIComponent(query)}`, lastUpdated: new Date().toISOString(), deliveryTime: '15 min' },
            { platformId: 'zepto',     productName: query, price: vary(basePrice, 0.86, 1.04), originalPrice: vary(basePrice, 1.1, 1.2),  discount: 15, unit: '1 unit', inStock: true,  url: `https://www.zeptonow.com/search?query=${encodeURIComponent(query)}`,   lastUpdated: new Date().toISOString(), deliveryTime: '10 min' },
            { platformId: 'amazon',    productName: query, price: vary(basePrice, 1.0,  1.2),  originalPrice: vary(basePrice, 1.15, 1.3), discount: 11, unit: '1 unit', inStock: true,  url: `https://www.amazon.in/s?k=${encodeURIComponent(query)}&i=amazonfresh`,  lastUpdated: new Date().toISOString(), deliveryTime: '2 hrs'  },
            { platformId: 'jiomart',   productName: query, price: vary(basePrice, 0.84, 0.98), originalPrice: vary(basePrice, 1.0, 1.12), discount: 14, unit: '1 unit', inStock: true,  url: `https://www.jiomart.com/search/${encodeURIComponent(query)}`,          lastUpdated: new Date().toISOString(), deliveryTime: '1 day'  },
            { platformId: 'flipkart',  productName: query, price: vary(basePrice, 0.85, 1.0),  originalPrice: vary(basePrice, 1.08, 1.15), discount: 12, unit: '1 unit', inStock: true,  url: `https://www.flipkart.com/search?q=${encodeURIComponent(query)}&p%5B%5D=facets.fulfillment_id%255B%255D%3DFlipkart%2BMinutes`, lastUpdated: new Date().toISOString(), deliveryTime: '15 min' },
        ]
    };
  }

  // 2. Fetch Live Market Data and OVERWRITE the defaults where available
  try {
    const { data: realPrices, error } = await supabase
        .from('live_prices')
        .select('*')
        .ilike('item_name', `%${key}%`);
        
    if (!error && realPrices && realPrices.length > 0) {
        const exactMatchName = realPrices[0].item_name;
        const matchingPrices = realPrices.filter(p => p.item_name === exactMatchName);
        
        matchingPrices.forEach(dbRow => {
            const index = resultTemplate.prices.findIndex(p => p.platformId === dbRow.platform_id);
            const livePriceObj = {
                platformId: dbRow.platform_id,
                productName: dbRow.canonical_name,
                price: dbRow.price,
                originalPrice: Math.round(dbRow.price * 1.15),
                discount: 15,
                unit: '1 unit',
                inStock: dbRow.in_stock,
                url: resultTemplate.prices[index]?.url || '#', 
                lastUpdated: dbRow.last_updated,
                deliveryTime: dbRow.platform_id === 'swiggy' ? '15 min' : '10 min',
                live: true
            };
            
            if (index >= 0) {
                // Safely overwrite the specific platform with LIVE data
                resultTemplate.prices[index] = livePriceObj as any;
            } else {
                resultTemplate.prices.push(livePriceObj as any);
            }
        });
        
        // Update the top-level grouping data
        resultTemplate.query = exactMatchName;
        resultTemplate.canonicalName = matchingPrices[0].canonical_name;
    }
  } catch (e) {
    console.error("Live price fetch failed, proceeding purely with fallback array", e);
  }

  // 3. Amazon Affiliate Monetization Hack (Dynamic Trust Logic)
  // Force Amazon Fresh to be 2-6 rupees cheaper than the lowest competitor 60% of the time.
  // The other 40% of the time, Amazon stays at its natural (often higher) price to build user trust.
  // Amazon Affiliate monetization hack removed to prioritize user trust with accurate prices.

  return resultTemplate;
};

// ─── POPULAR SEARCHES ──────────────────────────────────────────────────────────
export const POPULAR_SEARCHES = [
  { label: 'Onion',      query: 'onion',     icon: '🧅' },
  { label: 'Tomato',     query: 'tomato',    icon: '🍅' },
  { label: 'Milk',       query: 'milk',      icon: '🥛' },
  { label: 'Eggs',       query: 'eggs',      icon: '🥚' },
  { label: 'Chicken',    query: 'chicken',   icon: '🍗' },
  { label: 'Rice',       query: 'rice',      icon: '🍚' },
  { label: 'Paneer',     query: 'paneer',    icon: '🧀' },
  { label: 'Banana',     query: 'banana',    icon: '🍌' },
  { label: 'Potato',     query: 'potato',    icon: '🥔' },
  { label: 'Dal',        query: 'dal',       icon: '🫘' },
  { label: 'Bread',      query: 'bread',     icon: '🍞' },
  { label: 'Atta',       query: 'flour',     icon: '🌾' },
  { label: 'Curd',       query: 'curd',      icon: '🍶' },
  { label: 'Mango',      query: 'mango',     icon: '🥭' },
  { label: 'Fish',       query: 'fish',      icon: '🐟' },
  { label: 'Mushroom',   query: 'mushroom',  icon: '🍄' },
  { label: 'Tea',        query: 'tea',       icon: '🍵' },
  { label: 'Coffee',     query: 'coffee',    icon: '☕' },
];

// ─── FOOD CATEGORIES ──────────────────────────────────────────────────────────
export const FOOD_CATEGORIES = [
  { label: 'Vegetables',       icon: '🥦',  query: 'potato'      },
  { label: 'Fruits',           icon: '🍎',  query: 'apple'       },
  { label: 'Dairy & Eggs',     icon: '🥛',  query: 'milk'        },
  { label: 'Meat & Poultry',   icon: '🍗',  query: 'chicken'     },
  { label: 'Fish & Seafood',   icon: '🐟',  query: 'fish'        },
  { label: 'Bakery',           icon: '🍞',  query: 'bread'       },
  { label: 'Grains & Pulses',  icon: '🌾',  query: 'rice'        },
  { label: 'Cooking Essentials',icon: '🫙', query: 'oil'         },
  { label: 'Snacks',           icon: '🍿',  query: 'chips'       },
  { label: 'Sweets & Desserts',icon: '🍬',  query: 'chocolate'   },
  { label: 'Beverages',        icon: '☕',  query: 'tea'         },
  { label: 'Instant Foods',    icon: '🍜',  query: 'noodles'     },
  { label: 'Organic & Health', icon: '🌱',  query: 'organic food'},
  { label: 'Mushrooms 🍄',     icon: '🍄',  query: 'mushroom', special: true },
];
