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
  isVerified?: boolean;
}

export interface CompareResult {
  query: string;
  canonicalName: string;
  category: string;
  icon: string;
  prices: PlatformPrice[];
}

// Helper: Deterministic daily fluctuation (-5% to +5%) based on date, item, and platform
export const getDailyFluctuation = (productId: string, platformId: string): number => {
  const dateStr = new Date().toISOString().split('T')[0]; // e.g., "2026-05-10"
  const seedString = `${dateStr}-${productId}-${platformId}`;
  
  let hash = 0;
  for (let i = 0; i < seedString.length; i++) {
    hash = Math.imul(31, hash) + seedString.charCodeAt(i) | 0;
  }
  const randomVal = ((hash ^ (hash >> 15)) >>> 0) / 4294967296; // 0.0 to 1.0
  
  // Return multiplier between 0.95 and 1.05
  return 0.95 + (randomVal * 0.10);
};

// Helper: add realistic variation to a base price
const vary = (base: number, min = 0.88, max = 1.18) =>
  Math.round(base * (min + Math.random() * (max - min)));

// Helper: build platform-specific search URL
export const generateSearchUrl = (platformId: string, query: string) => {
  const urls: Record<string, string> = {
    blinkit:   `https://blinkit.com/s/?q=${encodeURIComponent(query)}`,
    bigbasket: `https://www.bigbasket.com/ps/?q=${encodeURIComponent(query)}`,
    swiggy:    `https://swiggy.com/instamart/search?query=${encodeURIComponent(query)}`,
    zepto:     `https://www.zeptonow.com/search?query=${encodeURIComponent(query)}`,
    amazon:    `https://www.amazon.in/s?k=${encodeURIComponent(query)}&i=amazonfresh`,
    jiomart:   `https://www.jiomart.com/search/${encodeURIComponent(query)}`,
    flipkart:  `https://www.flipkart.com/search?q=${encodeURIComponent(query)}&p%5B%5D=facets.fulfillment_id%255B%255D%3DFlipkart%2BMinutes`,
  };
  return urls[platformId] || `https://${platformId}.com/s/?q=${encodeURIComponent(query)}`;
};

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
  return { platformId, productName, price, originalPrice, discount, unit, inStock, url: generateSearchUrl(platformId, query), lastUpdated: new Date().toISOString(), deliveryTime };
};

// ─── COMPLETE FOOD DATABASE ────────────────────────────────────────────────────
export const MOCK_DB: Record<string, CompareResult> = {

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
  cauliflower: { query: 'cauliflower', canonicalName: 'Cauliflower (Gobi)', category: 'Vegetables', icon: '🥦', prices: [
    p('blinkit',   'Cauliflower',           38, 45, 15, '1 pc', 'cauliflower', true, '10 min'),
    p('bigbasket', 'Fresho Gobi',           32, 40, 20, '1 pc', 'cauliflower', true, '2 hrs'),
    p('swiggy',    'Cauliflower Fresh',     40, 48, 17, '1 pc', 'cauliflower', true, '15 min'),
  ]},
  ginger: { query: 'ginger', canonicalName: 'Ginger (Adrak)', category: 'Vegetables', icon: '🫚', prices: [
    p('blinkit',   'Ginger',                35, 45, 22, '250g', 'ginger', true, '10 min'),
    p('bigbasket', 'Fresho Adrak',          30, 40, 25, '250g', 'ginger', true, '2 hrs'),
    p('zepto',     'Ginger Fresh',          32, 42, 24, '250g', 'ginger', true, '10 min'),
  ]},
  garlic: { query: 'garlic', canonicalName: 'Garlic (Lahsun)', category: 'Vegetables', icon: '🧄', prices: [
    p('blinkit',   'Garlic',                45, 55, 18, '250g', 'garlic', true, '10 min'),
    p('bigbasket', 'Fresho Garlic',         40, 50, 20, '250g', 'garlic', true, '2 hrs'),
    p('zepto',     'Garlic (Ooty)',         42, 52, 19, '250g', 'garlic', true, '10 min'),
  ]},
  lemon: { query: 'lemon', canonicalName: 'Lemon (Nimbu)', category: 'Vegetables', icon: '🍋', prices: [
    p('blinkit',   'Lemon (Nimbu)',         25, 30, 16, '4 pcs', 'lemon', true, '10 min'),
    p('bigbasket', 'Fresho Lemon',          20, 25, 20, '4 pcs', 'lemon', true, '2 hrs'),
    p('swiggy',    'Nimbu Fresh',           28, 32, 12, '4 pcs', 'lemon', true, '15 min'),
  ]},
  chilli: { query: 'chilli', canonicalName: 'Green Chilli', category: 'Vegetables', icon: '🌶️', prices: [
    p('blinkit',   'Green Chilli',          18, 22, 18, '100g', 'chilli', true, '10 min'),
    p('bigbasket', 'Fresho Green Chilli',   15, 20, 25, '100g', 'chilli', true, '2 hrs'),
    p('zepto',     'Chilli Green',          16, 20, 20, '100g', 'chilli', true, '10 min'),
  ]},
  coriander: { query: 'coriander', canonicalName: 'Coriander (Dhania)', category: 'Vegetables', icon: '🌿', prices: [
    p('blinkit',   'Coriander Bundle',      15, 20, 25, '100g', 'coriander', true, '10 min'),
    p('bigbasket', 'Fresho Dhania',         12, 18, 33, '100g', 'coriander', true, '2 hrs'),
    p('swiggy',    'Dhania Fresh',          18, 22, 18, '100g', 'coriander', true, '15 min'),
  ]},
  peas: { query: 'peas', canonicalName: 'Green Peas (Matar)', category: 'Vegetables', icon: '🫛', prices: [
    p('blinkit',   'Green Peas',            45, 55, 18, '500g', 'peas', true, '10 min'),
    p('bigbasket', 'Fresho Matar',          40, 50, 20, '500g', 'peas', true, '2 hrs'),
    p('zepto',     'Peas Green',            42, 52, 19, '500g', 'peas', true, '10 min'),
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
  orange: { query: 'orange', canonicalName: 'Orange (Nagpur)', category: 'Fruits', icon: '🍊', prices: [
    p('blinkit',   'Nagpur Orange',         85, 100, 15, '1 kg', 'orange', true, '10 min'),
    p('bigbasket', 'Fresho Orange',         78, 90, 13, '1 kg', 'orange', true, '2 hrs'),
    p('zepto',     'Orange (Kinnow)',       80, 95, 16, '1 kg', 'orange', true, '10 min'),
  ]},
  watermelon: { query: 'watermelon', canonicalName: 'Watermelon', category: 'Fruits', icon: '🍉', prices: [
    p('blinkit',   'Watermelon',            45, 55, 18, '1 pc', 'watermelon', true, '10 min'),
    p('bigbasket', 'Fresho Watermelon',     38, 48, 21, '1 pc', 'watermelon', true, '2 hrs'),
    p('swiggy',    'Kiran Watermelon',      48, 58, 17, '1 pc', 'watermelon', true, '15 min'),
  ]},
  pomegranate: { query: 'pomegranate', canonicalName: 'Pomegranate (Anaar)', category: 'Fruits', icon: '🍎', prices: [
    p('blinkit',   'Anaar (Pomegranate)',   185, 220, 16, '1 kg', 'pomegranate', true, '10 min'),
    p('bigbasket', 'BB Royal Anaar',        175, 210, 17, '1 kg', 'pomegranate', true, '2 hrs'),
    p('zepto',     'Pomegranate Fresh',     180, 215, 16, '1 kg', 'pomegranate', true, '10 min'),
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
  ghee: { query: 'ghee', canonicalName: 'Desi Ghee (Cow)', category: 'Dairy', icon: '🧈', prices: [
    p('blinkit',   'Amul Cow Ghee',         585, 620, 6, '1 L', 'ghee', true, '10 min'),
    p('bigbasket', 'Aashirvaad Ghee',       575, 610, 6, '1 L', 'ghee', true, '2 hrs'),
    p('zepto',     'Amul Pure Ghee',        580, 620, 6, '1 L', 'ghee', true, '10 min'),
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
  moong_dal: { query: 'moong dal', canonicalName: 'Moong Dal (Yellow)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Moong Dal',             135, 150, 10, '1 kg', 'moong dal', true, '10 min'),
    p('bigbasket', 'Fresho Moong Dal',      128, 145, 12, '1 kg', 'moong dal', true, '2 hrs'),
    p('zepto',     'Moong Dal Yellow',      130, 148, 12, '1 kg', 'moong dal', true, '10 min'),
  ]},
  chana_dal: { query: 'chana dal', canonicalName: 'Chana Dal', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Chana Dal',             95, 110, 14, '1 kg', 'chana dal', true, '10 min'),
    p('bigbasket', 'BB Popular Chana Dal',  88, 100, 12, '1 kg', 'chana dal', true, '2 hrs'),
  ]},
  rajma: { query: 'rajma', canonicalName: 'Rajma (Chitra)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Rajma Chitra',          165, 185, 11, '1 kg', 'rajma', true, '10 min'),
    p('bigbasket', 'Fresho Rajma',          155, 180, 14, '1 kg', 'rajma', true, '2 hrs'),
  ]},
  turmeric: { query: 'turmeric', canonicalName: 'Turmeric Powder (Haldi)', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Tata Sampann Haldi',    65, 75, 13, '200g', 'turmeric', true, '10 min'),
    p('bigbasket', 'Everest Haldi',         58, 68, 15, '200g', 'turmeric', true, '2 hrs'),
  ]},
  cumin: { query: 'cumin', canonicalName: 'Cumin Seeds (Jeera)', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Jeera (Cumin)',         125, 150, 17, '200g', 'cumin', true, '10 min'),
    p('bigbasket', 'Catch Jeera',           115, 140, 18, '200g', 'cumin', true, '2 hrs'),
  ]},
  masala: { query: 'garam masala', canonicalName: 'Garam Masala', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Everest Garam Masala',  95, 110, 14, '100g', 'garam masala', true, '10 min'),
    p('bigbasket', 'Catch Garam Masala',    88, 105, 16, '100g', 'garam masala', true, '2 hrs'),
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
  honey: { query: 'honey', canonicalName: 'Pure Honey', category: 'Packaged Foods', icon: '🍯', prices: [
    p('blinkit',   'Dabur Honey 250g',      105, 125, 16, '250g', 'honey', true, '10 min'),
    p('bigbasket', 'Saffola Honey',         95, 115, 17, '250g', 'honey', true, '2 hrs'),
  ]},
  ghee_cow: { query: 'cow ghee', canonicalName: 'Pure Cow Ghee', category: 'Dairy', icon: '🧈', prices: [
    p('blinkit',   'Amul Cow Ghee',         585, 620, 6, '1 L', 'ghee', true, '10 min'),
    p('bigbasket', 'Aashirvaad Ghee',       575, 610, 6, '1 L', 'ghee', true, '2 hrs'),
  ]},
  basmati_rice: { query: 'basmati rice', canonicalName: 'Premium Basmati Rice', category: 'Grains & Pulses', icon: '🍚', prices: [
    p('blinkit',   'India Gate Classic',    158, 180, 12, '1 kg', 'rice', true, '10 min'),
    p('bigbasket', 'Daawat Rozana',         95, 110, 14, '1 kg', 'rice', true, '2 hrs'),
  ]},
  sona_masoori: { query: 'sona masoori', canonicalName: 'Sona Masoori Rice', category: 'Grains & Pulses', icon: '🍚', prices: [
    p('blinkit',   'Sona Masoori',          65, 75, 13, '1 kg', 'rice', true, '10 min'),
    p('bigbasket', 'BB Popular Rice',       58, 68, 15, '1 kg', 'rice', true, '2 hrs'),
  ]},
  poha: { query: 'poha', canonicalName: 'Poha (Beaten Rice)', category: 'Grains & Pulses', icon: '🍚', prices: [
    p('blinkit',   'Thick Poha',            45, 55, 18, '500g', 'poha', true, '10 min'),
    p('bigbasket', 'Tata Sampann Poha',     42, 50, 16, '500g', 'poha', true, '2 hrs'),
  ]},
  besan: { query: 'besan', canonicalName: 'Besan (Gram Flour)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Fortune Besan',         95, 110, 14, '1 kg', 'besan', true, '10 min'),
    p('bigbasket', 'Tata Sampann Besan',    102, 115, 11, '1 kg', 'besan', true, '2 hrs'),
  ]},
  maida: { query: 'maida', canonicalName: 'Maida (Refined Flour)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Refined Maida',         45, 52, 13, '1 kg', 'maida', true, '10 min'),
  ]},
  kabuli_chana: { query: 'kabuli chana', canonicalName: 'Kabuli Chana (Chickpeas)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Kabuli Chana',          155, 175, 11, '1 kg', 'chana', true, '10 min'),
  ]},
  kala_chana: { query: 'kala chana', canonicalName: 'Kala Chana (Black Chickpeas)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Black Chana',           105, 120, 12, '1 kg', 'chana', true, '10 min'),
  ]},
  hing: { query: 'hing', canonicalName: 'Asafoetida (Hing)', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Laxmi Hing',            45, 55, 18, '50g', 'hing', true, '10 min'),
  ]},
  cardamom: { query: 'elaichi', canonicalName: 'Green Cardamom (Elaichi)', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Green Elaichi',         185, 220, 16, '50g', 'elaichi', true, '10 min'),
  ]},
  cloves: { query: 'cloves', canonicalName: 'Cloves (Laung)', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Cloves',                95, 115, 17, '50g', 'cloves', true, '10 min'),
  ]},
  cinnamon: { query: 'cinnamon', canonicalName: 'Cinnamon (Dalchini)', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Dalchini Stick',        45, 55, 18, '50g', 'cinnamon', true, '10 min'),
  ]},
  broccoli: { query: 'broccoli', canonicalName: 'Broccoli', category: 'Vegetables', icon: '🥦', prices: [
    p('blinkit',   'Fresh Broccoli',        125, 150, 17, '1 pc', 'broccoli', true, '10 min'),
  ]},
  sweet_corn: { query: 'sweet corn', canonicalName: 'Sweet Corn', category: 'Vegetables', icon: '🌽', prices: [
    p('blinkit',   'Sweet Corn (Loose)',    35, 45, 22, '1 pc', 'corn', true, '10 min'),
  ]},
  dragonfruit: { query: 'dragonfruit', canonicalName: 'Dragonfruit', category: 'Fruits', icon: '🌵', prices: [
    p('blinkit',   'Dragon Fruit',          95, 115, 17, '1 pc', 'dragonfruit', true, '10 min'),
  ]},
  avocado: { query: 'avocado', canonicalName: 'Avocado', category: 'Fruits', icon: '🥑', prices: [
    p('blinkit',   'Premium Avocado',       185, 220, 16, '1 pc', 'avocado', true, '10 min'),
  ]},
  kiwi: { query: 'kiwi', canonicalName: 'Kiwi', category: 'Fruits', icon: '🥝', prices: [
    p('blinkit',   'Kiwi (Zespri)',         145, 175, 17, '3 pcs', 'kiwi', true, '10 min'),
  ]},
  strawberry: { query: 'strawberry', canonicalName: 'Strawberry', category: 'Fruits', icon: '🍓', prices: [
    p('blinkit',   'Fresh Strawberry',      125, 150, 17, '200g', 'strawberry', true, '10 min'),
  ]},
  coconut_water: { query: 'coconut water', canonicalName: 'Tender Coconut', category: 'Beverages', icon: '🥥', prices: [
    p('blinkit',   'Tender Coconut',        55, 65, 15, '1 pc', 'coconut', true, '10 min'),
  ]},
  biscuits: { query: 'biscuits', canonicalName: 'Biscuits (Parle-G)', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Parle-G 800g',          75, 80, 6, '800g', 'biscuits', true, '10 min'),
  ]},
  maggi: { query: 'maggi', canonicalName: 'Maggi Noodles (Pack of 12)', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Maggi 12-Pack',         168, 180, 7, '12 pack', 'maggi', true, '10 min'),
  ]},
  ketchup: { query: 'ketchup', canonicalName: 'Tomato Ketchup', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Kissan Ketchup',        125, 145, 14, '1 kg', 'ketchup', true, '10 min'),
  ]},
  brown_rice: { query: 'brown rice', canonicalName: 'Brown Rice', category: 'Grains & Pulses', icon: '🍚', prices: [
    p('blinkit',   'Daawat Brown Rice',     145, 170, 15, '1 kg', 'rice', true, '10 min'),
  ]},
  kolam_rice: { query: 'kolam rice', canonicalName: 'Kolam Rice', category: 'Grains & Pulses', icon: '🍚', prices: [
    p('blinkit',   'Lachkari Kolam',        75, 90, 16, '1 kg', 'rice', true, '10 min'),
  ]},
  masoor_dal: { query: 'masoor dal', canonicalName: 'Masoor Dal (Red)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Masoor Dal',            115, 135, 14, '1 kg', 'dal', true, '10 min'),
  ]},
  urad_dal: { query: 'urad dal', canonicalName: 'Urad Dal (Black)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Urad Dal Whole',        145, 165, 12, '1 kg', 'dal', true, '10 min'),
  ]},
  black_pepper: { query: 'black pepper', canonicalName: 'Black Pepper (Kali Mirch)', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Kali Mirch Whole',      125, 150, 16, '100g', 'pepper', true, '10 min'),
  ]},
  horlicks: { query: 'horlicks', canonicalName: 'Horlicks (Classic)', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Horlicks 500g',         285, 310, 8, '500g', 'health drink', true, '10 min'),
  ]},
  bournvita: { query: 'bournvita', canonicalName: 'Bournvita', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Bournvita 500g',        245, 275, 10, '500g', 'health drink', true, '10 min'),
  ]},
  real_juice: { query: 'real juice', canonicalName: 'Real Mixed Fruit Juice', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Juice 1L',         115, 130, 11, '1 L', 'juice', true, '10 min'),
  ]},
  marie_gold: { query: 'marie gold', canonicalName: 'Marie Gold Biscuits', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Marie Gold 250g',       35, 40, 12, '250g', 'biscuits', true, '10 min'),
  ]},
  good_day: { query: 'good day', canonicalName: 'Good Day Cashew', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Good Day 200g',         45, 50, 10, '200g', 'biscuits', true, '10 min'),
  ]},
  bhujia: { query: 'bhujia', canonicalName: 'Aloo Bhujia', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Haldiram Aloo Bhujia',  105, 120, 12, '400g', 'snacks', true, '10 min'),
  ]},
  vinegar: { query: 'vinegar', canonicalName: 'White Vinegar', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Chings Vinegar',        55, 65, 15, '500ml', 'vinegar', true, '10 min'),
  ]},
  soy_sauce: { query: 'soy sauce', canonicalName: 'Dark Soy Sauce', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Chings Soy Sauce',      65, 75, 13, '500ml', 'sauce', true, '10 min'),
  ]},
  pasta_penne: { query: 'penne pasta', canonicalName: 'Penne Pasta (Durum Wheat)', category: 'Packaged Foods', icon: '🍝', prices: [
    p('blinkit',   'Bambino Penne',         85, 105, 19, '500g', 'pasta', true, '10 min'),
  ]},
  macaroni: { query: 'macaroni', canonicalName: 'Macaroni', category: 'Packaged Foods', icon: '🍝', prices: [
    p('blinkit',   'Macaroni Elbow',        45, 55, 18, '500g', 'pasta', true, '10 min'),
  ]},
  almonds: { query: 'almonds', canonicalName: 'Almonds (Badam)', category: 'Snacks', icon: '🥜', prices: [
    p('blinkit',   'California Almonds',    485, 550, 12, '500g', 'dry fruits', true, '10 min'),
  ]},
  cashews: { query: 'cashews', canonicalName: 'Cashews (Kaju)', category: 'Snacks', icon: '🥜', prices: [
    p('blinkit',   'Premium Kaju Whole',    425, 500, 15, '500g', 'dry fruits', true, '10 min'),
  ]},
  walnuts: { query: 'walnuts', canonicalName: 'Walnuts (Akhrot)', category: 'Snacks', icon: '🥜', prices: [
    p('blinkit',   'Walnut Kernels',        385, 450, 14, '250g', 'dry fruits', true, '10 min'),
  ]},
  mustard_oil: { query: 'mustard oil', canonicalName: 'Mustard Oil (Kacchi Ghani)', category: 'Packaged Foods', icon: '🫙', prices: [
    p('blinkit',   'Fortune Mustard Oil',   155, 185, 16, '1 L', 'oil', true, '10 min'),
  ]},
  olive_oil: { query: 'olive oil', canonicalName: 'Extra Virgin Olive Oil', category: 'Packaged Foods', icon: '🫙', prices: [
    p('blinkit',   'Borges Olive Oil',      850, 1100, 22, '1 L', 'oil', true, '10 min'),
  ]},
  sunflower_oil: { query: 'sunflower oil', canonicalName: 'Sunflower Oil', category: 'Packaged Foods', icon: '🫙', prices: [
    p('blinkit',   'Fortune Sunflower',     135, 165, 18, '1 L', 'oil', true, '10 min'),
  ]},
  beetroot: { query: 'beetroot', canonicalName: 'Beetroot', category: 'Vegetables', icon: '🥗', prices: [
    p('blinkit',   'Beetroot Fresh',        35, 45, 22, '500g', 'beetroot', true, '10 min'),
  ]},
  dates: { query: 'dates', canonicalName: 'Dates (Khajur)', category: 'Snacks', icon: '🌴', prices: [
    p('blinkit',   'Kimia Dates',           225, 280, 19, '500g', 'dates', true, '10 min'),
  ]},
  raisins: { query: 'raisins', canonicalName: 'Raisins (Kishmish)', category: 'Snacks', icon: '🍇', prices: [
    p('blinkit',   'Golden Kishmish',       125, 150, 16, '250g', 'dry fruits', true, '10 min'),
  ]},
  saffron: { query: 'saffron', canonicalName: 'Kesar (Saffron)', category: 'Packaged Foods', icon: '🌸', prices: [
    p('blinkit',   'Baby Saffron 1g',       385, 450, 14, '1g', 'kesar', true, '10 min'),
  ]},
  sugar_brown: { query: 'brown sugar', canonicalName: 'Brown Sugar', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Organic Brown Sugar',   85, 105, 19, '500g', 'sugar', true, '10 min'),
  ]},
  jaggery: { query: 'jaggery', canonicalName: 'Jaggery (Gur)', category: 'Packaged Foods', icon: '🍮', prices: [
    p('blinkit',   'Organic Gur',           65, 80, 18, '500g', 'jaggery', true, '10 min'),
  ]},
  coconut_oil: { query: 'coconut oil', canonicalName: 'Coconut Oil', category: 'Packaged Foods', icon: '🫙', prices: [
    p('blinkit',   'Parachute Coconut Oil', 185, 210, 12, '500ml', 'oil', true, '10 min'),
  ]},
  makhana: { query: 'makhana', canonicalName: 'Fox Nuts (Makhana)', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Happilo Makhana',       145, 180, 19, '250g', 'snacks', true, '10 min'),
  ]},
  peanuts: { query: 'peanuts', canonicalName: 'Peanuts (Moongfali)', category: 'Snacks', icon: '🥜', prices: [
    p('blinkit',   'Roasted Peanuts',       95, 110, 14, '500g', 'peanuts', true, '10 min'),
  ]},
  oats: { query: 'oats', canonicalName: 'Rolled Oats', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Quaker Oats',           185, 210, 12, '1 kg', 'oats', true, '10 min'),
  ]},
  quinoa: { query: 'quinoa', canonicalName: 'Quinoa', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'True Elements Quinoa',  245, 280, 12, '500g', 'quinoa', true, '10 min'),
  ]},
  tea_bags: { query: 'tea', canonicalName: 'Tea Bags (Green Tea)', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Tetley Green Tea',      165, 190, 13, '25 bags', 'tea', true, '10 min'),
  ]},
  peanut_butter: { query: 'peanut butter', canonicalName: 'Peanut Butter', category: 'Packaged Foods', icon: '🥜', prices: [
    p('blinkit',   'Pintola Peanut Butter', 165, 195, 15, '350g', 'peanut butter', true, '10 min'),
  ]},
  jam: { query: 'jam', canonicalName: 'Fruit Jam', category: 'Packaged Foods', icon: '🍯', prices: [
    p('blinkit',   'Kissan Mixed Fruit',    155, 180, 14, '500g', 'jam', true, '10 min'),
  ]},
  soya_chunks: { query: 'soya chunks', canonicalName: 'Soya Chunks', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Soya Chunks',   45, 55, 18, '200g', 'soya', true, '10 min'),
  ]},
  frozen_peas: { query: 'frozen peas', canonicalName: 'Frozen Green Peas', category: 'Vegetables', icon: '🧊', prices: [
    p('blinkit',   'Safal Frozen Peas',     115, 140, 18, '1 kg', 'peas', true, '10 min'),
  ]},
  frozen_corn: { query: 'frozen corn', canonicalName: 'Frozen Sweet Corn', category: 'Vegetables', icon: '🧊', prices: [
    p('blinkit',   'Safal Sweet Corn',      95, 120, 21, '500g', 'corn', true, '10 min'),
  ]},
  frozen_fries: { query: 'frozen fries', canonicalName: 'Frozen French Fries', category: 'Snacks', icon: '🧊', prices: [
    p('blinkit',   'McCain French Fries',   145, 175, 17, '750g', 'fries', true, '10 min'),
  ]},
  black_cardamom: { query: 'badi elaichi', canonicalName: 'Black Cardamom', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Badi Elaichi',          95, 115, 17, '50g', 'spices', true, '10 min'),
  ]},
  bay_leaf: { query: 'tej patta', canonicalName: 'Bay Leaf (Tej Patta)', category: 'Packaged Foods', icon: '🍃', prices: [
    p('blinkit',   'Tej Patta',             25, 35, 28, '20g', 'spices', true, '10 min'),
  ]},
  ajwain: { query: 'ajwain', canonicalName: 'Carom Seeds (Ajwain)', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Ajwain',                45, 55, 18, '100g', 'spices', true, '10 min'),
  ]},
  guava: { query: 'guava', canonicalName: 'Guava (Amrud)', category: 'Fruits', icon: '🍐', prices: [
    p('blinkit',   'Fresh Amrud',           65, 85, 23, '1 kg', 'guava', true, '10 min'),
  ]},
  papaya_large: { query: 'papaya', canonicalName: 'Large Papaya', category: 'Fruits', icon: '🥭', prices: [
    p('blinkit',   'Semi-Ripe Papaya',      55, 75, 26, '1 pc', 'papaya', true, '10 min'),
  ]},
  watermelon_large: { query: 'watermelon', canonicalName: 'Watermelon (Kiran)', category: 'Fruits', icon: '🍉', prices: [
    p('blinkit',   'Kiran Watermelon',      45, 65, 30, '1 pc', 'watermelon', true, '10 min'),
  ]},
  cauliflower_fresh: { query: 'cauliflower', canonicalName: 'Cauliflower (Gobi)', category: 'Vegetables', icon: '🥦', prices: [
    p('blinkit',   'Fresh Gobi',            45, 60, 25, '1 pc', 'cauliflower', true, '10 min'),
  ]},
  cabbage_fresh: { query: 'cabbage', canonicalName: 'Cabbage (Patta Gobi)', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Patta Gobi',            25, 40, 37, '1 pc', 'cabbage', true, '10 min'),
  ]},
  brinjal_large: { query: 'brinjal', canonicalName: 'Brinjal (Bharta)', category: 'Vegetables', icon: '🍆', prices: [
    p('blinkit',   'Bharta Baingan',        35, 50, 30, '500g', 'brinjal', true, '10 min'),
  ]},
  sweet_potato_fresh: { query: 'sweet potato', canonicalName: 'Sweet Potato (Shakarkand)', category: 'Vegetables', icon: '🍠', prices: [
    p('blinkit',   'Shakarkand',            45, 65, 30, '500g', 'sweet potato', true, '10 min'),
  ]},
  mustard_seeds: { query: 'mustard seeds', canonicalName: 'Mustard Seeds (Rai)', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Rai Small',             35, 45, 22, '100g', 'spices', true, '10 min'),
  ]},
  fennel_seeds: { query: 'fennel seeds', canonicalName: 'Fennel Seeds (Saunf)', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Saunf Lucknowi',        55, 70, 21, '100g', 'spices', true, '10 min'),
  ]},
  fenugreek_seeds: { query: 'methi seeds', canonicalName: 'Fenugreek Seeds (Methi)', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Methi Seeds',           45, 60, 25, '100g', 'spices', true, '10 min'),
  ]},
  soya_chaap: { query: 'soya chaap', canonicalName: 'Soya Chaap (Tinned)', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Tinned Soya Chaap',     125, 150, 17, '500g', 'soya', true, '10 min'),
  ]},
  muesli: { query: 'muesli', canonicalName: 'Muesli (Fruit & Nut)', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Kelloggs Muesli',       385, 450, 14, '500g', 'muesli', true, '10 min'),
  ]},
  tofu_fresh: { query: 'tofu', canonicalName: 'Fresh Tofu (Soya Paneer)', category: 'Dairy', icon: '⬜', prices: [
    p('blinkit',   'Fresh Tofu',            65, 85, 23, '200g', 'tofu', true, '10 min'),
  ]},
  almond_milk: { query: 'almond milk', canonicalName: 'Almond Milk (Unsweetened)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Epigamia Almond Milk',  245, 280, 12, '1 L', 'milk', true, '10 min'),
  ]},
  peanut_oil: { query: 'peanut oil', canonicalName: 'Groundnut Oil', category: 'Packaged Foods', icon: '🫙', prices: [
    p('blinkit',   'Fortune Groundnut',     185, 210, 12, '1 L', 'oil', true, '10 min'),
  ]},
  rice_bran_oil: { query: 'rice bran oil', canonicalName: 'Rice Bran Oil', category: 'Packaged Foods', icon: '🫙', prices: [
    p('blinkit',   'Fortune Rice Bran',     145, 175, 17, '1 L', 'oil', true, '10 min'),
  ]},
  honey_organic: { query: 'organic honey', canonicalName: 'Organic Raw Honey', category: 'Packaged Foods', icon: '🍯', prices: [
    p('blinkit',   'Organic India Honey',   285, 320, 11, '250g', 'honey', true, '10 min'),
  ]},
  pasta_fusilli: { query: 'fusilli pasta', canonicalName: 'Fusilli Pasta', category: 'Packaged Foods', icon: '🍝', prices: [
    p('blinkit',   'Bambino Fusilli',       85, 105, 19, '500g', 'pasta', true, '10 min'),
  ]},
  noodles_hakka: { query: 'hakka noodles', canonicalName: 'Hakka Noodles', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Chings Hakka',          45, 55, 18, '150g', 'noodles', true, '10 min'),
  ]},
  papad_urad: { query: 'papad', canonicalName: 'Urad Papad', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Lijjat Papad',          65, 75, 13, '200g', 'papad', true, '10 min'),
  ]},
  pickle_mango: { query: 'mango pickle', canonicalName: 'Mango Pickle (Achaar)', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Nilon Mango Pickle',    125, 150, 17, '500g', 'pickle', true, '10 min'),
  ]},
  pickle_lime: { query: 'lime pickle', canonicalName: 'Lime Pickle', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Mother Recipe Lime',    115, 140, 18, '500g', 'pickle', true, '10 min'),
  ]},
  custard_powder: { query: 'custard powder', canonicalName: 'Custard Powder', category: 'Packaged Foods', icon: '🧁', prices: [
    p('blinkit',   'Brown & Polson',        45, 55, 18, '100g', 'dessert', true, '10 min'),
  ]},
  baking_powder: { query: 'baking powder', canonicalName: 'Baking Powder', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Weikfield Baking',      35, 45, 22, '100g', 'baking', true, '10 min'),
  ]},
  biryani_masala: { query: 'biryani masala', canonicalName: 'Biryani Masala', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Everest Biryani',       75, 90, 16, '50g', 'spices', true, '10 min'),
  ]},
  pav_bhaji_masala: { query: 'pav bhaji masala', canonicalName: 'Pav Bhaji Masala', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Everest Pav Bhaji',     72, 85, 15, '50g', 'spices', true, '10 min'),
  ]},
  chicken_masala: { query: 'chicken masala', canonicalName: 'Chicken Masala', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'MDH Chicken Masala',    85, 100, 15, '100g', 'spices', true, '10 min'),
  ]},
  meat_masala: { query: 'meat masala', canonicalName: 'Meat Masala', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Everest Meat Masala',   82, 98, 16, '100g', 'spices', true, '10 min'),
  ]},
  lassi: { query: 'lassi', canonicalName: 'Fresh Lassi (Sweet)', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Amul Lassi 200ml',      25, 30, 16, '200ml', 'beverages', true, '10 min'),
  ]},
  chaas: { query: 'chaas', canonicalName: 'Buttermilk (Chaas)', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Amul Masti Chaas',      15, 20, 25, '200ml', 'beverages', true, '10 min'),
  ]},
  cold_coffee: { query: 'cold coffee', canonicalName: 'Cold Coffee (Bottle)', category: 'Beverages', icon: '🧋', prices: [
    p('blinkit',   'Nescafe Intense',       65, 75, 13, '180ml', 'beverages', true, '10 min'),
  ]},
  chivda: { query: 'chivda', canonicalName: 'Chivda (Snacks)', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Haldiram Chivda',       55, 65, 15, '200g', 'snacks', true, '10 min'),
  ]},
  mixture: { query: 'mixture', canonicalName: 'Madras Mixture', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Haldiram Mixture',      105, 125, 16, '400g', 'snacks', true, '10 min'),
  ]},
  gathiya: { query: 'gathiya', canonicalName: 'Bhavnagari Gathiya', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Haldiram Gathiya',      65, 80, 18, '200g', 'snacks', true, '10 min'),
  ]},
  soup_tomato: { query: 'tomato soup', canonicalName: 'Tomato Soup Packet', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Knorr Tomato Soup',     55, 65, 15, '50g', 'soup', true, '10 min'),
  ]},
  soup_manchow: { query: 'manchow soup', canonicalName: 'Manchow Soup Packet', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Knorr Manchow Soup',    55, 65, 15, '50g', 'soup', true, '10 min'),
  ]},
  zucchini_green: { query: 'zucchini', canonicalName: 'Green Zucchini', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Fresh Zucchini',        85, 110, 22, '250g', 'vegetables', true, '10 min'),
  ]},
  asparagus_fresh: { query: 'asparagus', canonicalName: 'Asparagus', category: 'Vegetables', icon: '🎋', prices: [
    p('blinkit',   'Premium Asparagus',     285, 350, 18, '250g', 'vegetables', true, '10 min'),
  ]},
  baby_corn_fresh: { query: 'baby corn', canonicalName: 'Baby Corn', category: 'Vegetables', icon: '🌽', prices: [
    p('blinkit',   'Fresh Baby Corn',       55, 75, 26, '200g', 'vegetables', true, '10 min'),
  ]},
  oyster_mushroom: { query: 'oyster mushroom', canonicalName: 'Oyster Mushroom', category: 'Vegetables', icon: '🍄', prices: [
    p('blinkit',   'Fresh Oyster',          145, 180, 19, '200g', 'mushrooms', true, '10 min'),
  ]},
  figs_dried: { query: 'figs', canonicalName: 'Dried Figs (Anjeer)', category: 'Snacks', icon: '🥯', prices: [
    p('blinkit',   'Premium Anjeer',        485, 550, 12, '250g', 'dry fruits', true, '10 min'),
  ]},
  apricots_dried: { query: 'apricots', canonicalName: 'Dried Apricots', category: 'Snacks', icon: '🍑', prices: [
    p('blinkit',   'Golden Apricots',       285, 350, 18, '250g', 'dry fruits', true, '10 min'),
  ]},
  pistachios: { query: 'pistachios', canonicalName: 'Pistachios (Pista)', category: 'Snacks', icon: '🥜', prices: [
    p('blinkit',   'Salted Pista',          585, 650, 10, '250g', 'dry fruits', true, '10 min'),
  ]},
  cashew_roasted: { query: 'roasted cashew', canonicalName: 'Roasted Cashews', category: 'Snacks', icon: '🥜', prices: [
    p('blinkit',   'Salted Kaju',           485, 550, 12, '250g', 'dry fruits', true, '10 min'),
  ]},
  peanut_butter_crunchy: { query: 'crunchy peanut butter', canonicalName: 'Crunchy Peanut Butter', category: 'Packaged Foods', icon: '🥜', prices: [
    p('blinkit',   'Pintola Crunchy',       175, 210, 16, '350g', 'peanut butter', true, '10 min'),
  ]},
  mayo_eggless: { query: 'eggless mayo', canonicalName: 'Eggless Mayonnaise', category: 'Packaged Foods', icon: '🧴', prices: [
    p('blinkit',   'Hellmanns Mayo',        165, 195, 15, '250g', 'sauce', true, '10 min'),
  ]},
  schezwan_sauce_chings: { query: 'schezwan sauce', canonicalName: 'Schezwan Chutney', category: 'Packaged Foods', icon: '🔥', prices: [
    p('blinkit',   'Chings Schezwan',       85, 105, 19, '250g', 'sauce', true, '10 min'),
  ]},
  maggi_hot_sweet: { query: 'maggi sauce', canonicalName: 'Maggi Hot & Sweet', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Maggi Sauce 500g',      145, 165, 12, '500g', 'sauce', true, '10 min'),
  ]},
  pasta_macaroni_durum: { query: 'durum macaroni', canonicalName: 'Durum Wheat Macaroni', category: 'Packaged Foods', icon: '🍝', prices: [
    p('blinkit',   'Bambino Durum',         95, 120, 21, '500g', 'pasta', true, '10 min'),
  ]},
  quinoa_white: { query: 'white quinoa', canonicalName: 'Organic White Quinoa', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'True Elements Quinoa',  265, 310, 14, '500g', 'quinoa', true, '10 min'),
  ]},
  chia_seeds_fresh: { query: 'chia seeds', canonicalName: 'Raw Chia Seeds', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Organic Chia',          185, 220, 16, '250g', 'health food', true, '10 min'),
  ]},
  pumpkin_seeds_fresh: { query: 'pumpkin seeds', canonicalName: 'Roasted Pumpkin Seeds', category: 'Snacks', icon: '🎃', prices: [
    p('blinkit',   'Happilo Pumpkin',       145, 180, 19, '250g', 'health food', true, '10 min'),
  ]},
  soya_milk_plain: { query: 'soya milk', canonicalName: 'Soya Milk (Plain)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Sofit Soya Milk',       145, 175, 17, '1 L', 'milk', true, '10 min'),
  ]},
  soya_milk_chocolate: { query: 'chocolate soya milk', canonicalName: 'Chocolate Soya Milk', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Sofit Chocolate',       155, 185, 16, '1 L', 'milk', true, '10 min'),
  ]},
  oat_milk_plain: { query: 'oat milk', canonicalName: 'Oat Milk (Barista)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'OatMlk Barista',        285, 350, 18, '1 L', 'milk', true, '10 min'),
  ]},
  cornflakes_original: { query: 'cornflakes', canonicalName: 'Corn Flakes (Original)', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Kelloggs Corn Flakes',  185, 210, 12, '500g', 'cereal', true, '10 min'),
  ]},
  cornflakes_honey: { query: 'honey cornflakes', canonicalName: 'Honey Corn Flakes', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Kelloggs Honey',        225, 260, 13, '500g', 'cereal', true, '10 min'),
  ]},
  muesli_no_sugar: { query: 'no sugar muesli', canonicalName: 'Muesli (No Added Sugar)', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Yoga Bar Muesli',       325, 380, 14, '400g', 'cereal', true, '10 min'),
  ]},
  peanut_butter_chocolate: { query: 'chocolate peanut butter', canonicalName: 'Chocolate Peanut Butter', category: 'Packaged Foods', icon: '🍫', prices: [
    p('blinkit',   'MyFitness Chocolate',   285, 350, 18, '510g', 'peanut butter', true, '10 min'),
  ]},
  hazelnut_spread: { query: 'nutella', canonicalName: 'Hazelnut Spread', category: 'Packaged Foods', icon: '🍫', prices: [
    p('blinkit',   'Nutella 350g',          385, 450, 14, '350g', 'spread', true, '10 min'),
  ]},
  margarine_table: { query: 'margarine', canonicalName: 'Table Margarine', category: 'Dairy', icon: '🧈', prices: [
    p('blinkit',   'Nutralite 500g',        105, 125, 16, '500g', 'butter', true, '10 min'),
  ]},
  tofu_soft: { query: 'soft tofu', canonicalName: 'Soft Tofu', category: 'Dairy', icon: '⬜', prices: [
    p('blinkit',   'Silken Tofu',           85, 110, 22, '200g', 'tofu', true, '10 min'),
  ]},
  paneer_malai: { query: 'malai paneer', canonicalName: 'Malai Paneer', category: 'Dairy', icon: '⬜', prices: [
    p('blinkit',   'Amul Malai Paneer',     95, 110, 14, '200g', 'paneer', true, '10 min'),
  ]},
  cheese_spread_plain: { query: 'cheese spread', canonicalName: 'Cheese Spread', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Amul Cheese Spread',    105, 125, 16, '200g', 'cheese', true, '10 min'),
  ]},
  cheese_cubes: { query: 'cheese cubes', canonicalName: 'Cheese Cubes', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Amul Cheese Cubes',     145, 170, 15, '200g', 'cheese', true, '10 min'),
  ]},
  mozzarella_cheese: { query: 'mozzarella', canonicalName: 'Mozzarella Cheese', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Amul Mozzarella',       245, 290, 15, '200g', 'cheese', true, '10 min'),
  ]},
  cream_fresh: { query: 'fresh cream', canonicalName: 'Fresh Cream', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Amul Fresh Cream',      65, 75, 13, '250ml', 'cream', true, '10 min'),
  ]},
  whipping_cream: { query: 'whipping cream', canonicalName: 'Whipping Cream', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Tropolite Cream',       185, 220, 16, '1 L', 'cream', true, '10 min'),
  ]},
  condensed_milk: { query: 'condensed milk', canonicalName: 'Condensed Milk', category: 'Dairy', icon: '🥫', prices: [
    p('blinkit',   'Amul Mithai Mate',      145, 165, 12, '400g', 'milk', true, '10 min'),
  ]},
  soy_sauce_dark: { query: 'dark soy sauce', canonicalName: 'Dark Soy Sauce (Premium)', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Lee Kum Kee Soy',       325, 380, 14, '250ml', 'sauce', true, '10 min'),
  ]},
  oyster_sauce: { query: 'oyster sauce', canonicalName: 'Oyster Sauce', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Real Thai Oyster',      285, 350, 18, '250ml', 'sauce', true, '10 min'),
  ]},
  vinegar_apple_cider: { query: 'apple cider vinegar', canonicalName: 'Apple Cider Vinegar', category: 'Packaged Foods', icon: '🫙', prices: [
    p('blinkit',   'WOW ACV',               385, 450, 14, '500ml', 'vinegar', true, '10 min'),
  ]},
  tahini_paste: { query: 'tahini', canonicalName: 'Tahini Paste', category: 'Packaged Foods', icon: '🫙', prices: [
    p('blinkit',   'Urban Platter Tahini',  325, 380, 14, '200g', 'sauce', true, '10 min'),
  ]},
  murmura: { query: 'murmura', canonicalName: 'Puffed Rice (Murmura)', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Plain Murmura 200g',    35, 45, 22, '200g', 'puffed rice', true, '10 min'),
  ]},
  lauki: { query: 'lauki', canonicalName: 'Bottle Gourd (Lauki)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Fresh Lauki',           35, 45, 22, '1 pc', 'bottle gourd', true, '10 min'),
  ]},
  karela: { query: 'karela', canonicalName: 'Bitter Gourd (Karela)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Fresh Karela',          45, 60, 25, '500g', 'bitter gourd', true, '10 min'),
  ]},
  drumstick: { query: 'drumstick', canonicalName: 'Drumsticks', category: 'Vegetables', icon: '🎋', prices: [
    p('blinkit',   'Drumsticks 250g',       25, 35, 28, '250g', 'vegetables', true, '10 min'),
  ]},
  bhindi_fresh: { query: 'bhindi', canonicalName: 'Fresh Okra (Bhindi)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Fresh Bhindi',          35, 45, 22, '500g', 'okra', true, '10 min'),
  ]},
  parwal: { query: 'parwal', canonicalName: 'Pointed Gourd (Parwal)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Fresh Parwal',          45, 65, 30, '500g', 'vegetables', true, '10 min'),
  ]},
  jowar: { query: 'jowar', canonicalName: 'Jowar (Sorghum)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Jowar Flour',           85, 110, 22, '1 kg', 'millets', true, '10 min'),
  ]},
  bajra: { query: 'bajra', canonicalName: 'Bajra (Pearl Millet)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Bajra Flour',           75, 95, 21, '1 kg', 'millets', true, '10 min'),
  ]},
  ragi: { query: 'ragi', canonicalName: 'Ragi (Finger Millet)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Ragi Flour',            95, 120, 21, '1 kg', 'millets', true, '10 min'),
  ]},
  barley: { query: 'barley', canonicalName: 'Barley (Jau)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Barley Daliya',         65, 85, 23, '500g', 'grains', true, '10 min'),
  ]},
  matki: { query: 'matki', canonicalName: 'Moth Beans (Matki)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Moth Beans',            125, 150, 17, '500g', 'pulses', true, '10 min'),
  ]},
  soya_beans: { query: 'soya beans', canonicalName: 'Soya Beans', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'White Soya Beans',      85, 105, 19, '500g', 'pulses', true, '10 min'),
  ]},
  oreo: { query: 'oreo', canonicalName: 'Oreo Biscuits', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Oreo Vanilla 120g',     35, 40, 12, '120g', 'biscuits', true, '10 min'),
  ]},
  dark_fantasy: { query: 'dark fantasy', canonicalName: 'Dark Fantasy Choco Fills', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Dark Fantasy 75g',      45, 50, 10, '75g', 'biscuits', true, '10 min'),
  ]},
  pringles: { query: 'pringles', canonicalName: 'Pringles Potato Chips', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Pringles Original',     105, 115, 8, '107g', 'chips', true, '10 min'),
  ]},
  lays_classic: { query: 'lays', canonicalName: 'Lays Potato Chips', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Lays Classic 50g',      20, 20, 0, '50g', 'chips', true, '10 min'),
  ]},
  kurkure: { query: 'kurkure', canonicalName: 'Kurkure Masala Munch', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Kurkure 90g',           35, 35, 0, '90g', 'snacks', true, '10 min'),
  ]},
  gulab_jamun_tinned: { query: 'gulab jamun', canonicalName: 'Gulab Jamun (Tinned)', category: 'Sweets & Desserts', icon: '🍮', prices: [
    p('blinkit',   'Haldiram Gulab Jamun',  225, 250, 10, '1 kg', 'sweets', true, '10 min'),
  ]},
  rasgulla_tinned: { query: 'rasgulla', canonicalName: 'Rasgulla (Tinned)', category: 'Sweets & Desserts', icon: '🍮', prices: [
    p('blinkit',   'Haldiram Rasgulla',     215, 240, 10, '1 kg', 'sweets', true, '10 min'),
  ]},
  soan_papdi: { query: 'soan papdi', canonicalName: 'Soan Papdi', category: 'Sweets & Desserts', icon: '🍮', prices: [
    p('blinkit',   'Haldiram Soan Papdi',   125, 145, 14, '500g', 'sweets', true, '10 min'),
  ]},
  coke_bottle: { query: 'coca cola', canonicalName: 'Coca Cola', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Coke 750ml',            45, 45, 0, '750ml', 'soft drink', true, '10 min'),
  ]},
  pepsi_bottle: { query: 'pepsi', canonicalName: 'Pepsi', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Pepsi 750ml',           45, 45, 0, '750ml', 'soft drink', true, '10 min'),
  ]},
  sprite_bottle: { query: 'sprite', canonicalName: 'Sprite', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Sprite 750ml',          45, 45, 0, '750ml', 'soft drink', true, '10 min'),
  ]},
  red_bull: { query: 'red bull', canonicalName: 'Red Bull Energy Drink', category: 'Beverages', icon: '⚡', prices: [
    p('blinkit',   'Red Bull 250ml',        125, 125, 0, '250ml', 'energy drink', true, '10 min'),
  ]},
  amla_fresh: { query: 'amla', canonicalName: 'Indian Gooseberry (Amla)', category: 'Fruits', icon: '🍏', prices: [
    p('blinkit',   'Fresh Amla 250g',       45, 60, 25, '250g', 'fruits', true, '10 min'),
  ]},
  jamun_fresh: { query: 'jamun', canonicalName: 'Java Plum (Jamun)', category: 'Fruits', icon: '🍇', prices: [
    p('blinkit',   'Fresh Jamun 250g',      125, 160, 21, '250g', 'fruits', true, '10 min'),
  ]},
  chikoo_fresh: { query: 'chikoo', canonicalName: 'Sapota (Chikoo)', category: 'Fruits', icon: '🥔', prices: [
    p('blinkit',   'Fresh Chikoo 500g',     55, 75, 26, '500g', 'fruits', true, '10 min'),
  ]},
  chicken_curry_cut: { query: 'chicken', canonicalName: 'Chicken (Curry Cut)', category: 'Meat & Poultry', icon: '🍗', prices: [
    p('blinkit',   'Fresh Chicken 500g',    165, 185, 10, '500g', 'meat', true, '10 min'),
  ]},
  mutton_curry_cut: { query: 'mutton', canonicalName: 'Mutton (Curry Cut)', category: 'Meat & Poultry', icon: '🍖', prices: [
    p('blinkit',   'Fresh Mutton 500g',     485, 550, 12, '500g', 'meat', true, '10 min'),
  ]},
  eggs_white: { query: 'eggs', canonicalName: 'Eggs (White)', category: 'Dairy & Eggs', icon: '🥚', prices: [
    p('blinkit',   'Egg Box (6 pcs)',       45, 55, 18, '6 pcs', 'eggs', true, '10 min'),
  ]},
  eggs_brown: { query: 'brown eggs', canonicalName: 'Eggs (Brown)', category: 'Dairy & Eggs', icon: '🥚', prices: [
    p('blinkit',   'Brown Eggs (6 pcs)',    75, 95, 21, '6 pcs', 'eggs', true, '10 min'),
  ]},
  prawns_medium: { query: 'prawns', canonicalName: 'Prawns (Medium)', category: 'Fish & Seafood', icon: '🍤', prices: [
    p('blinkit',   'Fresh Prawns 250g',     245, 290, 15, '250g', 'seafood', true, '10 min'),
  ]},
  rohu_fish: { query: 'rohu', canonicalName: 'Rohu Fish (Steaks)', category: 'Fish & Seafood', icon: '🐟', prices: [
    p('blinkit',   'Rohu Steaks 500g',      185, 220, 16, '500g', 'seafood', true, '10 min'),
  ]},
  ridge_gourd: { query: 'turai', canonicalName: 'Ridge Gourd (Turai)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Fresh Turai 500g',      35, 50, 30, '500g', 'vegetables', true, '10 min'),
  ]},
  ash_gourd: { query: 'petha vegetable', canonicalName: 'Ash Gourd', category: 'Vegetables', icon: '🍈', prices: [
    p('blinkit',   'Ash Gourd (Petha)',     45, 60, 25, '1 pc', 'vegetables', true, '10 min'),
  ]},
  raw_banana: { query: 'raw banana', canonicalName: 'Raw Banana (Kachcha Kela)', category: 'Vegetables', icon: '🍌', prices: [
    p('blinkit',   'Kachcha Kela (3 pcs)',  25, 35, 28, '3 pcs', 'vegetables', true, '10 min'),
  ]},
  arbi_fresh: { query: 'arbi', canonicalName: 'Colocasia (Arbi)', category: 'Vegetables', icon: '🥔', prices: [
    p('blinkit',   'Fresh Arbi 500g',       45, 60, 25, '500g', 'vegetables', true, '10 min'),
  ]},
  jimikand_fresh: { query: 'jimikand', canonicalName: 'Yam (Jimikand)', category: 'Vegetables', icon: '🥔', prices: [
    p('blinkit',   'Fresh Jimikand 500g',   65, 85, 23, '500g', 'vegetables', true, '10 min'),
  ]},
  muesli_fruit_nut: { query: 'fruit nut muesli', canonicalName: 'Muesli (Fruit & Nut)', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Kelloggs Muesli',       385, 450, 14, '500g', 'cereal', true, '10 min'),
  ]},
  honey_dabur: { query: 'honey', canonicalName: 'Pure Honey', category: 'Packaged Foods', icon: '🍯', prices: [
    p('blinkit',   'Dabur Honey 250g',      125, 145, 14, '250g', 'honey', true, '10 min'),
  ]},
  dairy_milk: { query: 'dairy milk', canonicalName: 'Cadbury Dairy Milk', category: 'Snacks', icon: '🍫', prices: [
    p('blinkit',   'Dairy Milk Silk 60g',   80, 80, 0, '60g', 'chocolate', true, '10 min'),
  ]},
  kitkat: { query: 'kitkat', canonicalName: 'Nestle KitKat', category: 'Snacks', icon: '🍫', prices: [
    p('blinkit',   'KitKat Share Bag',      125, 145, 14, '100g', 'chocolate', true, '10 min'),
  ]},
  ferrero_rocher: { query: 'ferrero rocher', canonicalName: 'Ferrero Rocher (T16)', category: 'Snacks', icon: '🍫', prices: [
    p('blinkit',   'Ferrero Rocher T16',    525, 595, 11, '200g', 'chocolate', true, '10 min'),
  ]},
  soan_papdi_sugarfree: { query: 'sugarfree soan papdi', canonicalName: 'Soan Papdi (Sugarfree)', category: 'Sweets & Desserts', icon: '🍮', prices: [
    p('blinkit',   'Haldiram Sugarfree',    185, 210, 12, '500g', 'sweets', true, '10 min'),
  ]},
  agra_petha: { query: 'petha', canonicalName: 'Agra Petha', category: 'Sweets & Desserts', icon: '🍮', prices: [
    p('blinkit',   'Famous Agra Petha',     145, 175, 17, '500g', 'sweets', true, '10 min'),
  ]},
  gajak_roll: { query: 'gajak', canonicalName: 'Gajak Roll', category: 'Sweets & Desserts', icon: '🍮', prices: [
    p('blinkit',   'Winter Special Gajak',  165, 195, 15, '400g', 'sweets', true, '10 min'),
  ]},
  thums_up_bottle: { query: 'thums up', canonicalName: 'Thums Up', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Thums Up 750ml',        45, 45, 0, '750ml', 'soft drink', true, '10 min'),
  ]},
  limca_bottle: { query: 'limca', canonicalName: 'Limca', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Limca 750ml',           45, 45, 0, '750ml', 'soft drink', true, '10 min'),
  ]},
  maaza_bottle: { query: 'maaza', canonicalName: 'Maaza Mango Drink', category: 'Beverages', icon: '🥭', prices: [
    p('blinkit',   'Maaza 1.2 L',           75, 85, 11, '1.2 L', 'beverages', true, '10 min'),
  ]},
  real_fruit_juice: { query: 'real juice', canonicalName: 'Real Mixed Fruit Juice', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Juice 1L',         115, 130, 11, '1 L', 'beverages', true, '10 min'),
  ]},
  raw_pressery_juice: { query: 'raw pressery', canonicalName: 'Raw Pressery Orange Juice', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Raw Pressery 250ml',    85, 100, 15, '250ml', 'beverages', true, '10 min'),
  ]},
  maida_flour: { query: 'maida', canonicalName: 'Refined Flour (Maida)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Fortune Maida 1kg',     45, 55, 18, '1 kg', 'flour', true, '10 min'),
  ]},
  besan_flour: { query: 'besan', canonicalName: 'Gram Flour (Besan)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Fortune Besan 1kg',     105, 125, 16, '1 kg', 'flour', true, '10 min'),
  ]},
  suji_rava: { query: 'suji', canonicalName: 'Semolina (Suji)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Fortune Suji 500g',     35, 45, 22, '500g', 'flour', true, '10 min'),
  ]},
  poha_thick: { query: 'poha', canonicalName: 'Beaten Rice (Poha)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Fortune Poha 500g',     45, 55, 18, '500g', 'grains', true, '10 min'),
  ]},
  kabuli_chana_large: { query: 'kabuli chana', canonicalName: 'Chickpeas (Kabuli Chana)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Kabuli Chana',  145, 175, 17, '500g', 'pulses', true, '10 min'),
  ]},
  kala_chana_large: { query: 'kala chana', canonicalName: 'Black Chickpeas', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Kala Chana',    75, 95, 21, '500g', 'pulses', true, '10 min'),
  ]},
  rajma_chitra: { query: 'rajma', canonicalName: 'Rajma Chitra', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Rajma Chitra',  125, 155, 19, '500g', 'pulses', true, '10 min'),
  ]},
  chaat_masala: { query: 'chaat masala', canonicalName: 'Chaat Masala', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'MDH Chaat Masala',      65, 80, 18, '100g', 'spices', true, '10 min'),
  ]},
  amchur_powder: { query: 'amchur', canonicalName: 'Dry Mango Powder', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Catch Amchur Powder',   45, 60, 25, '100g', 'spices', true, '10 min'),
  ]},
  kitchen_king: { query: 'kitchen king', canonicalName: 'Kitchen King Masala', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Everest Kitchen King',  85, 105, 19, '100g', 'spices', true, '10 min'),
  ]},
  sambhar_masala: { query: 'sambhar masala', canonicalName: 'Sambhar Masala', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Everest Sambhar',       75, 90, 16, '100g', 'spices', true, '10 min'),
  ]},
  brown_bread_fresh: { query: 'brown bread', canonicalName: 'Fresh Brown Bread', category: 'Bakery', icon: '🍞', prices: [
    p('blinkit',   'English Oven Brown',    45, 50, 10, '400g', 'bread', true, '10 min'),
  ]},
  pav_fresh: { query: 'pav', canonicalName: 'Mumbai Pav (Ladi Pav)', category: 'Bakery', icon: '🍞', prices: [
    p('blinkit',   'English Oven Pav',      35, 40, 12, '6 pcs', 'bread', true, '10 min'),
  ]},
  burger_buns_fresh: { query: 'burger buns', canonicalName: 'Burger Buns', category: 'Bakery', icon: '🍞', prices: [
    p('blinkit',   'English Oven Buns',     45, 50, 10, '2 pcs', 'bread', true, '10 min'),
  ]},
  pizza_base_fresh: { query: 'pizza base', canonicalName: 'Pizza Base', category: 'Bakery', icon: '🍞', prices: [
    p('blinkit',   'English Oven Pizza',    55, 65, 15, '2 pcs', 'bread', true, '10 min'),
  ]},
  parle_g_biscuit: { query: 'parle g', canonicalName: 'Parle-G Gold', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Parle-G Gold 1kg',      110, 110, 0, '1 kg', 'biscuits', true, '10 min'),
  ]},
  good_day_biscuit: { query: 'good day', canonicalName: 'Britannia Good Day', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Good Day Cashew 600g',  125, 145, 14, '600g', 'biscuits', true, '10 min'),
  ]},
  marie_gold_biscuit: { query: 'marie gold', canonicalName: 'Britannia Marie Gold', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Marie Gold 250g',       45, 50, 10, '250g', 'biscuits', true, '10 min'),
  ]},
  bourbon_biscuit: { query: 'bourbon', canonicalName: 'Britannia Bourbon', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Bourbon 150g',          35, 40, 12, '150g', 'biscuits', true, '10 min'),
  ]},
  ketchup_maggi: { query: 'ketchup', canonicalName: 'Maggi Tomato Ketchup', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Maggi Ketchup 1kg',     145, 175, 17, '1 kg', 'sauce', true, '10 min'),
  ]},
  chilli_sauce_green: { query: 'green chilli sauce', canonicalName: 'Green Chilli Sauce', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Chings Green Chilli',   65, 80, 18, '200g', 'sauce', true, '10 min'),
  ]},
  pasta_sauce_dr_oetker: { query: 'pasta sauce', canonicalName: 'Pasta & Pizza Sauce', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Dr. Oetker Funfoods',   95, 115, 17, '325g', 'sauce', true, '10 min'),
  ]},
  peanut_butter_myfitness: { query: 'myfitness peanut butter', canonicalName: 'MyFitness Peanut Butter', category: 'Packaged Foods', icon: '🥜', prices: [
    p('blinkit',   'MyFitness Smooth',      285, 350, 18, '510g', 'peanut butter', true, '10 min'),
  ]},
  soy_sauce_chings: { query: 'soy sauce', canonicalName: 'Dark Soy Sauce', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Chings Soy Sauce',      65, 80, 18, '200g', 'sauce', true, '10 min'),
  ]},
  ratlami_sev: { query: 'ratlami sev', canonicalName: 'Ratlami Sev', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Haldiram Ratlami',      55, 65, 15, '200g', 'snacks', true, '10 min'),
  ]},
  bikaneri_bhujia: { query: 'bikaneri bhujia', canonicalName: 'Bikaneri Bhujia', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Haldiram Bikaneri',     105, 125, 16, '400g', 'snacks', true, '10 min'),
  ]},
  navratan_mix: { query: 'navratan mix', canonicalName: 'Navratan Mixture', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Haldiram Navratan',     105, 125, 16, '400g', 'snacks', true, '10 min'),
  ]},
  moong_dal_snack: { query: 'moong dal snack', canonicalName: 'Moong Dal (Salted)', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Haldiram Moong Dal',    65, 80, 18, '200g', 'snacks', true, '10 min'),
  ]},
  aloo_bhujia: { query: 'aloo bhujia', canonicalName: 'Aloo Bhujia', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Haldiram Aloo Bhujia',  105, 125, 16, '400g', 'snacks', true, '10 min'),
  ]},
  oregano_dried: { query: 'oregano', canonicalName: 'Dried Oregano', category: 'Packaged Foods', icon: '🌿', prices: [
    p('blinkit',   'Keya Oregano 50g',      85, 110, 22, '50g', 'herbs', true, '10 min'),
  ]},
  basil_dried: { query: 'basil', canonicalName: 'Dried Basil', category: 'Packaged Foods', icon: '🌿', prices: [
    p('blinkit',   'Keya Basil 50g',        85, 110, 22, '50g', 'herbs', true, '10 min'),
  ]},
  rosemary_dried: { query: 'rosemary', canonicalName: 'Dried Rosemary', category: 'Packaged Foods', icon: '🌿', prices: [
    p('blinkit',   'Keya Rosemary 50g',     95, 120, 21, '50g', 'herbs', true, '10 min'),
  ]},
  thyme_dried: { query: 'thyme', canonicalName: 'Dried Thyme', category: 'Packaged Foods', icon: '🌿', prices: [
    p('blinkit',   'Keya Thyme 50g',        95, 120, 21, '50g', 'herbs', true, '10 min'),
  ]},
  white_pepper_powder: { query: 'white pepper', canonicalName: 'White Pepper Powder', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Catch White Pepper',    65, 85, 23, '50g', 'spices', true, '10 min'),
  ]},
  pomelo_fruit: { query: 'pomelo', canonicalName: 'Pomelo (Chakotra)', category: 'Fruits', icon: '🍊', prices: [
    p('blinkit',   'Fresh Pomelo',          125, 160, 21, '1 pc', 'fruits', true, '10 min'),
  ]},
  star_fruit: { query: 'star fruit', canonicalName: 'Star Fruit (Kamrakh)', category: 'Fruits', icon: '⭐', prices: [
    p('blinkit',   'Fresh Kamrakh 250g',    45, 65, 30, '250g', 'fruits', true, '10 min'),
  ]},
  custard_apple_fresh: { query: 'custard apple', canonicalName: 'Custard Apple (Sharifa)', category: 'Fruits', icon: '🍏', prices: [
    p('blinkit',   'Fresh Sharifa 500g',    145, 185, 21, '500g', 'fruits', true, '10 min'),
  ]},
  badam_milk_bottle: { query: 'badam milk', canonicalName: 'Badam Milk', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Amul Badam Milk',       35, 40, 12, '200ml', 'beverages', true, '10 min'),
  ]},
  jaljeera_drink: { query: 'jaljeera', canonicalName: 'Jaljeera (Paper Boat)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Paper Boat Jaljeera',   35, 40, 12, '250ml', 'beverages', true, '10 min'),
  ]},
  aam_panna_drink: { query: 'aam panna', canonicalName: 'Aam Panna (Paper Boat)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Paper Boat Aam Panna',  35, 40, 12, '250ml', 'beverages', true, '10 min'),
  ]},
  peanut_chikki: { query: 'chikki', canonicalName: 'Peanut Chikki', category: 'Sweets & Desserts', icon: '🍪', prices: [
    p('blinkit',   'Lonavala Chikki',       85, 110, 22, '200g', 'sweets', true, '10 min'),
  ]},
  rewri_snack: { query: 'rewri', canonicalName: 'Sesame Rewri', category: 'Sweets & Desserts', icon: '🍪', prices: [
    p('blinkit',   'Winter Special Rewri',  115, 145, 20, '400g', 'sweets', true, '10 min'),
  ]},
  dark_chocolate_bournville: { query: 'bournville', canonicalName: 'Cadbury Bournville', category: 'Snacks', icon: '🍫', prices: [
    p('blinkit',   'Bournville 80g',        105, 105, 0, '80g', 'chocolate', true, '10 min'),
  ]},
  chicken_wings: { query: 'chicken wings', canonicalName: 'Chicken Wings (Fresh)', category: 'Meat & Poultry', icon: '🍗', prices: [
    p('blinkit',   'Fresh Wings 500g',      185, 210, 12, '500g', 'meat', true, '10 min'),
  ]},
  mutton_keema: { query: 'mutton keema', canonicalName: 'Mutton Keema (Minced)', category: 'Meat & Poultry', icon: '🍖', prices: [
    p('blinkit',   'Fresh Keema 500g',      525, 595, 12, '500g', 'meat', true, '10 min'),
  ]},
  pomfret_fish: { query: 'pomfret', canonicalName: 'White Pomfret (Medium)', category: 'Fish & Seafood', icon: '🐟', prices: [
    p('blinkit',   'Pomfret 1 pc',          385, 450, 14, '300g', 'seafood', true, '10 min'),
  ]},
  surmai_fish: { query: 'surmai', canonicalName: 'Surmai (Seer Fish) Steaks', category: 'Fish & Seafood', icon: '🐟', prices: [
    p('blinkit',   'Surmai Steaks 500g',    585, 650, 10, '500g', 'seafood', true, '10 min'),
  ]},
  greek_yogurt_plain: { query: 'greek yogurt', canonicalName: 'Greek Yogurt (Plain)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Epigamia Plain',        65, 80, 18, '90g', 'yogurt', true, '10 min'),
  ]},
  greek_yogurt_strawberry: { query: 'strawberry greek yogurt', canonicalName: 'Greek Yogurt (Strawberry)', category: 'Dairy', icon: '🍓', prices: [
    p('blinkit',   'Epigamia Strawberry',   75, 90, 16, '90g', 'yogurt', true, '10 min'),
  ]},
  bok_choy_fresh: { query: 'bok choy', canonicalName: 'Bok Choy (Pak Choi)', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Fresh Bok Choy',        115, 145, 20, '250g', 'vegetables', true, '10 min'),
  ]},
  kale_fresh: { query: 'kale', canonicalName: 'Curly Kale', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Fresh Kale 100g',       185, 220, 16, '100g', 'vegetables', true, '10 min'),
  ]},
  leeks_fresh: { query: 'leeks', canonicalName: 'Leeks', category: 'Vegetables', icon: '🎋', prices: [
    p('blinkit',   'Fresh Leeks 250g',      95, 125, 24, '250g', 'vegetables', true, '10 min'),
  ]},
  doritos_nacho: { query: 'doritos', canonicalName: 'Doritos Nacho Cheese', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Doritos 150g',          95, 100, 5, '150g', 'chips', true, '10 min'),
  ]},
  cheetos_puffs: { query: 'cheetos', canonicalName: 'Cheetos Cheese Puffs', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Cheetos 70g',           35, 35, 0, '70g', 'snacks', true, '10 min'),
  ]},
  monster_energy: { query: 'monster energy', canonicalName: 'Monster Energy Drink', category: 'Beverages', icon: '⚡', prices: [
    p('blinkit',   'Monster 500ml',         115, 125, 8, '500ml', 'energy drink', true, '10 min'),
  ]},
  coconut_water_tetra: { query: 'coconut water', canonicalName: 'Coconut Water (Pack)', category: 'Beverages', icon: '🥥', prices: [
    p('blinkit',   'Paper Boat Coconut',    55, 65, 15, '200ml', 'beverages', true, '10 min'),
  ]},
  pasta_penne_wheat: { query: 'penne pasta', canonicalName: 'Whole Wheat Penne', category: 'Packaged Foods', icon: '🍝', prices: [
    p('blinkit',   'Bambino Penne',         95, 120, 21, '500g', 'pasta', true, '10 min'),
  ]},
  rice_noodles_fresh: { query: 'rice noodles', canonicalName: 'Rice Noodles', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Real Thai Noodles',     185, 220, 16, '200g', 'noodles', true, '10 min'),
  ]},
  dragon_fruit_yellow: { query: 'yellow dragon fruit', canonicalName: 'Yellow Dragon Fruit', category: 'Fruits', icon: '🥭', prices: [
    p('blinkit',   'Imported Yellow',       385, 450, 14, '1 pc', 'fruits', true, '10 min'),
  ]},
  passion_fruit_fresh: { query: 'passion fruit', canonicalName: 'Passion Fruit', category: 'Fruits', icon: '🥭', prices: [
    p('blinkit',   'Fresh Passion Fruit',   245, 290, 15, '250g', 'fruits', true, '10 min'),
  ]},
  mangosteen_fresh: { query: 'mangosteen', canonicalName: 'Mangosteen', category: 'Fruits', icon: '🥭', prices: [
    p('blinkit',   'Imported Mangosteen',   485, 550, 12, '500g', 'fruits', true, '10 min'),
  ]},
  blueberries_dried_pack: { query: 'dried blueberries', canonicalName: 'Dried Blueberries', category: 'Snacks', icon: '🍇', prices: [
    p('blinkit',   'True Elements Berry',   385, 450, 14, '150g', 'dry fruits', true, '10 min'),
  ]},
  kaju_katli_pack: { query: 'kaju katli', canonicalName: 'Kaju Katli (Pack)', category: 'Sweets & Desserts', icon: '🍮', prices: [
    p('blinkit',   'Haldiram Kaju Katli',   425, 450, 6, '250g', 'sweets', true, '10 min'),
  ]},
  til_chikki_pack: { query: 'til chikki', canonicalName: 'Til Chikki (Sesame)', category: 'Sweets & Desserts', icon: '🍪', prices: [
    p('blinkit',   'Winter Special Til',    125, 145, 14, '400g', 'sweets', true, '10 min'),
  ]},
  coconut_barfi_pack: { query: 'coconut barfi', canonicalName: 'Coconut Barfi', category: 'Sweets & Desserts', icon: '🍮', prices: [
    p('blinkit',   'Haldiram Coconut',      165, 185, 11, '400g', 'sweets', true, '10 min'),
  ]},
  lotus_stem_fresh: { query: 'lotus stem', canonicalName: 'Lotus Stem (Kamal Kakdi)', category: 'Vegetables', icon: '🎋', prices: [
    p('blinkit',   'Fresh Kamal Kakdi',     85, 110, 22, '250g', 'vegetables', true, '10 min'),
  ]},
  tindora_fresh: { query: 'tindora', canonicalName: 'Ivy Gourd (Tindora)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Fresh Tindora 500g',    35, 50, 30, '500g', 'vegetables', true, '10 min'),
  ]},
  water_chestnut_fresh: { query: 'singhara', canonicalName: 'Water Chestnut (Singhara)', category: 'Vegetables', icon: '🍈', prices: [
    p('blinkit',   'Fresh Singhara 500g',   45, 65, 30, '500g', 'vegetables', true, '10 min'),
  ]},
  raw_mango_fresh: { query: 'raw mango', canonicalName: 'Raw Mango (Katcha Aam)', category: 'Vegetables', icon: '🥭', prices: [
    p('blinkit',   'Katcha Aam 500g',       45, 65, 30, '500g', 'vegetables', true, '10 min'),
  ]},
  rajgira_flour: { query: 'rajgira', canonicalName: 'Amaranth (Rajgira) Flour', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Organic Rajgira',       95, 125, 24, '500g', 'millets', true, '10 min'),
  ]},
  barnyard_millet: { query: 'barnyard millet', canonicalName: 'Barnyard Millet (Sanwa)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Organic Sanwa',         85, 110, 22, '500g', 'millets', true, '10 min'),
  ]},
  soya_sticks_snack: { query: 'soya sticks', canonicalName: 'Soya Sticks', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Haldiram Soya Sticks',  45, 55, 18, '150g', 'snacks', true, '10 min'),
  ]},
  makhana_peri_peri: { query: 'peri peri makhana', canonicalName: 'Peri Peri Makhana', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Happilo Peri Peri',     155, 185, 16, '100g', 'snacks', true, '10 min'),
  ]},
  barbecue_sauce_pack: { query: 'barbecue sauce', canonicalName: 'Barbecue Sauce', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Veeba BBQ Sauce',       95, 115, 17, '300g', 'sauce', true, '10 min'),
  ]},
  sriracha_sauce_pack: { query: 'sriracha', canonicalName: 'Sriracha Hot Sauce', category: 'Packaged Foods', icon: '🔥', prices: [
    p('blinkit',   'Real Thai Sriracha',    185, 220, 16, '250ml', 'sauce', true, '10 min'),
  ]},
  appy_fizz_bottle: { query: 'appy fizz', canonicalName: 'Appy Fizz', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Appy Fizz 600ml',       40, 40, 0, '600ml', 'beverages', true, '10 min'),
  ]},
  frooti_bottle: { query: 'frooti', canonicalName: 'Frooti Mango Drink', category: 'Beverages', icon: '🥭', prices: [
    p('blinkit',   'Frooti 1.2 L',          75, 85, 11, '1.2 L', 'beverages', true, '10 min'),
  ]},
  shrikhand_mango: { query: 'shrikhand', canonicalName: 'Shrikhand (Amrakhand)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Amul Amrakhand',        65, 75, 13, '200g', 'dairy', true, '10 min'),
  ]},
  mishti_doi_pack: { query: 'mishti doi', canonicalName: 'Mishti Doi', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Mother Dairy Mishti',   25, 30, 16, '100g', 'dairy', true, '10 min'),
  ]},
  pesto_sauce_pack: { query: 'pesto sauce', canonicalName: 'Pesto Sauce (Green)', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Barilla Pesto',         325, 380, 14, '190g', 'sauce', true, '10 min'),
  ]},
  couscous_pack: { query: 'couscous', canonicalName: 'Couscous (Semolina)', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Urban Platter Couscous', 245, 290, 15, '500g', 'grains', true, '10 min'),
  ]},
  brown_rice_pack: { query: 'brown rice', canonicalName: 'Brown Rice', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'India Gate Brown',      145, 175, 17, '1 kg', 'rice', true, '10 min'),
  ]},
  red_rice_pack: { query: 'red rice', canonicalName: 'Red Rice (Matta)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Kerala Matta Rice',     95, 115, 17, '1 kg', 'rice', true, '10 min'),
  ]},
  black_rice_pack: { query: 'black rice', canonicalName: 'Black Rice (Forbidden)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Organic Black Rice',    285, 350, 18, '500g', 'rice', true, '10 min'),
  ]},
  jasmine_rice_pack: { query: 'jasmine rice', canonicalName: 'Jasmine Rice', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Thai Jasmine Rice',     225, 280, 19, '1 kg', 'rice', true, '10 min'),
  ]},
  sushi_rice_pack: { query: 'sushi rice', canonicalName: 'Sushi Rice', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Urban Platter Sushi',   325, 380, 14, '1 kg', 'rice', true, '10 min'),
  ]},
  kodo_millet: { query: 'kodo millet', canonicalName: 'Kodo Millet', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Organic Kodo',          85, 110, 22, '500g', 'millets', true, '10 min'),
  ]},
  little_millet: { query: 'little millet', canonicalName: 'Little Millet (Kutki)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Organic Kutki',         85, 110, 22, '500g', 'millets', true, '10 min'),
  ]},
  foxtail_millet: { query: 'foxtail millet', canonicalName: 'Foxtail Millet', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Organic Foxtail',       85, 110, 22, '500g', 'millets', true, '10 min'),
  ]},
  cluster_beans_fresh: { query: 'gawar', canonicalName: 'Cluster Beans (Gawar)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Fresh Gawar 250g',      25, 35, 28, '250g', 'vegetables', true, '10 min'),
  ]},
  broad_beans_fresh: { query: 'sem', canonicalName: 'Broad Beans (Sem)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Fresh Sem 250g',        35, 45, 22, '250g', 'vegetables', true, '10 min'),
  ]},
  snake_gourd_fresh: { query: 'chichinda', canonicalName: 'Snake Gourd (Chichinda)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Fresh Chichinda',       35, 50, 30, '1 pc', 'vegetables', true, '10 min'),
  ]},
  chow_chow_fresh: { query: 'chow chow', canonicalName: 'Chow Chow (Chayote)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Fresh Chow Chow',       45, 65, 30, '1 pc', 'vegetables', true, '10 min'),
  ]},
  peri_peri_sauce_veeba: { query: 'peri peri sauce', canonicalName: 'Peri Peri Sauce', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Veeba Peri Peri',       95, 115, 17, '250g', 'sauce', true, '10 min'),
  ]},
  masala_oats_saffola: { query: 'masala oats', canonicalName: 'Masala Oats (Classic)', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Saffola Masala Oats',   35, 45, 22, '40g', 'oats', true, '10 min'),
  ]},
  steel_cut_oats_pack: { query: 'steel cut oats', canonicalName: 'Steel Cut Oats', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'True Elements Oats',    185, 220, 16, '500g', 'oats', true, '10 min'),
  ]},
  mango_lassi_bottle: { query: 'mango lassi', canonicalName: 'Mango Lassi', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Amul Mango Lassi',      25, 30, 16, '200ml', 'beverages', true, '10 min'),
  ]},
  rose_lassi_bottle: { query: 'rose lassi', canonicalName: 'Rose Lassi', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Amul Rose Lassi',       25, 30, 16, '200ml', 'beverages', true, '10 min'),
  ]},
  masala_chaas_bottle: { query: 'masala chaas', canonicalName: 'Masala Buttermilk', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Amul Masala Chaas',     15, 20, 25, '200ml', 'beverages', true, '10 min'),
  ]},
  aloe_vera_juice_pack: { query: 'aloe vera juice', canonicalName: 'Aloe Vera Juice', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'B Natural Aloe',        125, 145, 14, '1 L', 'beverages', true, '10 min'),
  ]},
  barley_water_bottle: { query: 'barley water', canonicalName: 'Barley Water', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Organic Barley Water',  45, 55, 18, '500ml', 'beverages', true, '10 min'),
  ]},
  shahi_jeera_seeds: { query: 'shahi jeera', canonicalName: 'Shahi Jeera', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Catch Shahi Jeera',     55, 70, 21, '50g', 'spices', true, '10 min'),
  ]},
  kalonji_seeds_pack: { query: 'kalonji', canonicalName: 'Nigella Seeds (Kalonji)', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Catch Kalonji',         45, 60, 25, '50g', 'spices', true, '10 min'),
  ]},
  ice_apple_fresh: { query: 'ice apple', canonicalName: 'Ice Apple (Tadgola)', category: 'Fruits', icon: '🥭', prices: [
    p('blinkit',   'Fresh Tadgola 500g',    185, 220, 16, '500g', 'fruits', true, '10 min'),
  ]},
  wood_apple_fresh: { query: 'wood apple', canonicalName: 'Wood Apple (Bael)', category: 'Fruits', icon: '🥭', prices: [
    p('blinkit',   'Fresh Bael Fruit',      55, 75, 26, '1 pc', 'fruits', true, '10 min'),
  ]},
  custard_apple_premium: { query: 'premium sharifa', canonicalName: 'Premium Custard Apple', category: 'Fruits', icon: '🍏', prices: [
    p('blinkit',   'Large Sharifa 500g',    195, 240, 18, '500g', 'fruits', true, '10 min'),
  ]},
  peanut_butter_jaggery: { query: 'jaggery peanut butter', canonicalName: 'Peanut Butter with Jaggery', category: 'Packaged Foods', icon: '🥜', prices: [
    p('blinkit',   'Pintola Jaggery',       185, 220, 16, '350g', 'peanut butter', true, '10 min'),
  ]},
  muesli_no_added_sugar: { query: 'no sugar muesli', canonicalName: 'Muesli (Sugar-Free)', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Yoga Bar No Sugar',     325, 380, 14, '400g', 'cereal', true, '10 min'),
  ]},
  fruit_custard_pack: { query: 'fruit custard', canonicalName: 'Ready-to-Eat Custard', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Amul Fruit Custard',    45, 55, 18, '200g', 'dairy', true, '10 min'),
  ]},
  sattu_flour_pack: { query: 'sattu', canonicalName: 'Sattu Flour (Chana)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Aashirvaad Sattu',      95, 120, 21, '500g', 'flour', true, '10 min'),
  ]},
  daliya_broken_wheat: { query: 'daliya', canonicalName: 'Broken Wheat (Daliya)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Fortune Daliya 500g',   45, 55, 18, '500g', 'grains', true, '10 min'),
  ]},
  multi_grain_atta_pack: { query: 'multigrain atta', canonicalName: 'Multigrain Atta', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Aashirvaad Multi',      345, 380, 9, '5 kg', 'flour', true, '10 min'),
  ]},
  soan_papdi_sugar_free: { query: 'sugar free soan papdi', canonicalName: 'Soan Papdi (Sugar-Free)', category: 'Sweets & Desserts', icon: '🍮', prices: [
    p('blinkit',   'Haldiram Sugar Free',   185, 210, 12, '500g', 'sweets', true, '10 min'),
  ]},
  besan_ladoo_pack: { query: 'besan ladoo', canonicalName: 'Besan Ladoo (Pack)', category: 'Sweets & Desserts', icon: '🍮', prices: [
    p('blinkit',   'Haldiram Besan Ladoo',  165, 185, 11, '400g', 'sweets', true, '10 min'),
  ]},
  motichoor_ladoo_pack: { query: 'motichoor ladoo', canonicalName: 'Motichoor Ladoo', category: 'Sweets & Desserts', icon: '🍮', prices: [
    p('blinkit',   'Haldiram Motichoor',    175, 195, 10, '400g', 'sweets', true, '10 min'),
  ]},
  dry_fruit_barfi_pack: { query: 'dry fruit barfi', canonicalName: 'Dry Fruit Barfi', category: 'Sweets & Desserts', icon: '🍮', prices: [
    p('blinkit',   'Haldiram Dry Fruit',    325, 360, 10, '250g', 'sweets', true, '10 min'),
  ]},
  roasted_chana_hing: { query: 'roasted chana', canonicalName: 'Roasted Chana (Hing)', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Haldiram Hing Chana',   55, 65, 15, '200g', 'snacks', true, '10 min'),
  ]},
  roasted_peanuts_salted: { query: 'salted peanuts', canonicalName: 'Salted Peanuts', category: 'Snacks', icon: '🥜', prices: [
    p('blinkit',   'Haldiram Salted Kaju',  85, 100, 15, '200g', 'snacks', true, '10 min'),
  ]},
  diet_bhel_mix: { query: 'diet bhel', canonicalName: 'Diet Bhel Mix', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Haldiram Diet Bhel',    65, 80, 18, '200g', 'snacks', true, '10 min'),
  ]},
  proso_millet: { query: 'proso millet', canonicalName: 'Proso Millet (Chena)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Organic Chena',         95, 120, 21, '500g', 'millets', true, '10 min'),
  ]},
  browntop_millet: { query: 'browntop millet', canonicalName: 'Browntop Millet', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Organic Browntop',      115, 145, 21, '500g', 'millets', true, '10 min'),
  ]},
  garlic_bread_fresh: { query: 'garlic bread', canonicalName: 'Fresh Garlic Bread', category: 'Bakery', icon: '🍞', prices: [
    p('blinkit',   'English Oven Garlic',   65, 75, 13, '250g', 'bread', true, '10 min'),
  ]},
  whole_wheat_pizza_base: { query: 'wheat pizza base', canonicalName: 'Wheat Pizza Base', category: 'Bakery', icon: '🍞', prices: [
    p('blinkit',   'English Oven Wheat',    65, 75, 13, '2 pcs', 'bread', true, '10 min'),
  ]},
  greek_yogurt_blueberry: { query: 'blueberry greek yogurt', canonicalName: 'Greek Yogurt (Blueberry)', category: 'Dairy', icon: '🫐', prices: [
    p('blinkit',   'Epigamia Blueberry',    75, 90, 16, '90g', 'yogurt', true, '10 min'),
  ]},
  greek_yogurt_mango: { query: 'mango greek yogurt', canonicalName: 'Greek Yogurt (Mango)', category: 'Dairy', icon: '🥭', prices: [
    p('blinkit',   'Epigamia Mango',        75, 90, 16, '90g', 'yogurt', true, '10 min'),
  ]},
  fruit_cream_pack: { query: 'fruit cream', canonicalName: 'Fresh Fruit Cream', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Amul Fruit Cream',      55, 65, 15, '200g', 'dairy', true, '10 min'),
  ]},
  raw_banana_chips: { query: 'banana chips', canonicalName: 'Kerala Banana Chips', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Beyond Snack Chips',    55, 60, 8, '100g', 'snacks', true, '10 min'),
  ]},
  jackfruit_chips: { query: 'jackfruit chips', canonicalName: 'Jackfruit Chips', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Beyond Snack Jack',     85, 100, 15, '100g', 'snacks', true, '10 min'),
  ]},
  moth_dal_snack: { query: 'moth dal snack', canonicalName: 'Moth Dal (Salted)', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Haldiram Moth Dal',     65, 80, 18, '200g', 'snacks', true, '10 min'),
  ]},
  bhakarwadi_snack: { query: 'bhakarwadi', canonicalName: 'Mini Bhakarwadi', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Haldiram Bhakarwadi',   85, 100, 15, '250g', 'snacks', true, '10 min'),
  ]},
  soya_chips_snack: { query: 'soya chips', canonicalName: 'Soya Chips', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Haldiram Soya Chips',   55, 65, 15, '150g', 'snacks', true, '10 min'),
  ]},
  diet_mixture_snack: { query: 'diet mixture', canonicalName: 'Diet Mixture', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Haldiram Diet Mix',     105, 125, 16, '400g', 'snacks', true, '10 min'),
  ]},
  sugar_free_biscuits: { query: 'sugar free biscuits', canonicalName: 'NutriChoice Sugar Free', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'NutriChoice SF',        25, 25, 0, '150g', 'biscuits', true, '10 min'),
  ]},
  digestive_biscuits: { query: 'digestive biscuits', canonicalName: 'NutriChoice Digestive', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'NutriChoice Dig',       35, 35, 0, '250g', 'biscuits', true, '10 min'),
  ]},
  oats_cookies_pack: { query: 'oats cookies', canonicalName: 'Oats Cookies', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Unibic Oats Cookies',   45, 55, 18, '150g', 'biscuits', true, '10 min'),
  ]},
  multi_grain_cookies: { query: 'multigrain cookies', canonicalName: 'Multigrain Cookies', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Unibic Multigrain',     45, 55, 18, '150g', 'biscuits', true, '10 min'),
  ]},
  honey_ginger_tea: { query: 'ginger tea', canonicalName: 'Honey Ginger Tea Bags', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Tetley Ginger Honey',   185, 210, 12, '25 bags', 'tea', true, '10 min'),
  ]},
  lemon_green_tea: { query: 'lemon tea', canonicalName: 'Lemon Green Tea Bags', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Lipton Lemon Green',    165, 190, 13, '25 bags', 'tea', true, '10 min'),
  ]},
  chamomile_tea_bags: { query: 'chamomile tea', canonicalName: 'Chamomile Tea Bags', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Typhoo Chamomile',      225, 250, 10, '20 bags', 'tea', true, '10 min'),
  ]},
  earl_grey_tea_bags: { query: 'earl grey', canonicalName: 'Earl Grey Tea Bags', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Twinings Earl Grey',    385, 450, 14, '25 bags', 'tea', true, '10 min'),
  ]},
  roasted_vermicelli: { query: 'vermicelli', canonicalName: 'Roasted Vermicelli', category: 'Packaged Foods', icon: '🍝', prices: [
    p('blinkit',   'Bambino Roasted',       45, 55, 18, '450g', 'noodles', true, '10 min'),
  ]},
  poha_thin_pack: { query: 'thin poha', canonicalName: 'Thin Poha', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Fortune Thin Poha',     45, 55, 18, '500g', 'grains', true, '10 min'),
  ]},
  makki_atta_pack: { query: 'makki atta', canonicalName: 'Maize Flour (Makki Atta)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Organic Makki Atta',    85, 110, 22, '1 kg', 'flour', true, '10 min'),
  ]},
  bajra_atta_premium: { query: 'premium bajra', canonicalName: 'Premium Bajra Flour', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Organic Bajra 1kg',     85, 110, 22, '1 kg', 'flour', true, '10 min'),
  ]},
  ragi_atta_premium: { query: 'premium ragi', canonicalName: 'Premium Ragi Flour', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Organic Ragi 1kg',      105, 135, 22, '1 kg', 'flour', true, '10 min'),
  ]},
  soy_sauce_premium: { query: 'premium soy sauce', canonicalName: 'Premium Dark Soy Sauce', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Lee Kum Kee Premium',   425, 480, 11, '500ml', 'sauce', true, '10 min'),
  ]},
  chilli_paste_red: { query: 'red chilli paste', canonicalName: 'Red Chilli Paste', category: 'Packaged Foods', icon: '🔥', prices: [
    p('blinkit',   'Real Thai Red Paste',   185, 220, 16, '227g', 'sauce', true, '10 min'),
  ]},
  curry_paste_green: { query: 'green curry paste', canonicalName: 'Green Curry Paste', category: 'Packaged Foods', icon: '🍲', prices: [
    p('blinkit',   'Real Thai Green',       185, 220, 16, '227g', 'sauce', true, '10 min'),
  ]},
  fish_sauce_bottle: { query: 'fish sauce', canonicalName: 'Fish Sauce', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Real Thai Fish Sauce',  245, 280, 12, '200ml', 'sauce', true, '10 min'),
  ]},
  apple_juice_pack: { query: 'apple juice', canonicalName: 'Pure Apple Juice', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Apple 1L',         115, 130, 11, '1 L', 'beverages', true, '10 min'),
  ]},
  guava_juice_pack: { query: 'guava juice', canonicalName: 'Pink Guava Juice', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Guava 1L',         115, 130, 11, '1 L', 'beverages', true, '10 min'),
  ]},
  pomegranate_juice_pack: { query: 'pomegranate juice', canonicalName: 'Pomegranate Juice', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Pomegranate',      125, 145, 14, '1 L', 'beverages', true, '10 min'),
  ]},
  coconut_milk_pack: { query: 'coconut milk', canonicalName: 'Coconut Milk (Thick)', category: 'Packaged Foods', icon: '🥛', prices: [
    p('blinkit',   'Real Thai Coconut',     185, 220, 16, '400ml', 'sauce', true, '10 min'),
  ]},
  almond_flour_pack: { query: 'almond flour', canonicalName: 'Blanched Almond Flour', category: 'Packaged Foods', icon: '🌾', prices: [
    p('blinkit',   'Urban Platter Almond',  485, 550, 12, '200g', 'flour', true, '10 min'),
  ]},
  dark_chocolate_bits: { query: 'chocolate bits', canonicalName: 'Dark Chocolate Bits', category: 'Snacks', icon: '🍫', prices: [
    p('blinkit',   'Urban Platter Bits',    225, 250, 10, '150g', 'chocolate', true, '10 min'),
  ]},
  amul_cheese_slices: { query: 'amul cheese slices', canonicalName: 'Amul Cheese Slices', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Amul Slices (10 pcs)',  145, 155, 6, '200g', 'cheese', true, '10 min'),
  ]},
  amul_cheese_spread: { query: 'amul cheese spread', canonicalName: 'Amul Cheese Spread', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Amul Spread (Plain)',   95, 110, 13, '200g', 'cheese', true, '10 min'),
  ]},
  maggi_atta_noodles: { query: 'maggi atta', canonicalName: 'Maggi Atta Noodles', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Maggi Atta 4-Pack',     95, 110, 13, '290g', 'noodles', true, '10 min'),
  ]},
  maggi_cup_noodles: { query: 'maggi cup', canonicalName: 'Maggi Cuppa Noodles', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Maggi Cuppa Masala',    45, 50, 10, '70g', 'noodles', true, '10 min'),
  ]},
  mccain_smiles: { query: 'mccain smiles', canonicalName: 'McCain Smiles', category: 'Frozen Foods', icon: '🧊', prices: [
    p('blinkit',   'McCain Smiles 415g',    115, 135, 14, '415g', 'frozen', true, '10 min'),
  ]},
  mccain_veggie_fingers: { query: 'mccain fingers', canonicalName: 'McCain Veggie Fingers', category: 'Frozen Foods', icon: '🧊', prices: [
    p('blinkit',   'McCain Fingers 400g',   125, 150, 16, '400g', 'frozen', true, '10 min'),
  ]},
  nutella_spread_large: { query: 'nutella', canonicalName: 'Nutella Hazelnut Spread', category: 'Packaged Foods', icon: '🍫', prices: [
    p('blinkit',   'Nutella 350g',          385, 425, 9, '350g', 'spread', true, '10 min'),
  ]},
  kelloggs_chocos: { query: 'kelloggs chocos', canonicalName: 'Kellogg’s Chocos', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Chocos 385g',           185, 210, 12, '385g', 'cereal', true, '10 min'),
  ]},
  saffola_masala_oats_peppy: { query: 'peppy tomato oats', canonicalName: 'Masala Oats (Peppy Tomato)', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Saffola Peppy Tomato',  45, 55, 18, '40g', 'oats', true, '10 min'),
  ]},
  amul_kool_kesar: { query: 'amul kool', canonicalName: 'Amul Kool Kesar', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Amul Kool Kesar 200ml', 25, 30, 16, '200ml', 'beverages', true, '10 min'),
  ]},
  amul_kool_kafee: { query: 'amul kool kafee', canonicalName: 'Amul Kool Kafee', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Amul Kool Kafee 200ml', 25, 30, 16, '200ml', 'beverages', true, '10 min'),
  ]},
  sona_masuri_rice: { query: 'sona masuri', canonicalName: 'Sona Masuri Rice', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Fortune Sona Masuri',   385, 450, 14, '5 kg', 'rice', true, '10 min'),
  ]},
  fortune_kolam_rice: { query: 'kolam rice', canonicalName: 'Kolam Rice', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Fortune Kolam Rice',    425, 480, 11, '5 kg', 'rice', true, '10 min'),
  ]},
  gobindobhog_rice: { query: 'gobindobhog', canonicalName: 'Gobindobhog Rice', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Premium Gobindobhog',   125, 145, 14, '1 kg', 'rice', true, '10 min'),
  ]},
  red_label_tea: { query: 'red label', canonicalName: 'Brooke Bond Red Label', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Red Label Tea 500g',    325, 360, 9, '500g', 'tea', true, '10 min'),
  ]},
  tata_tea_gold: { query: 'tata tea gold', canonicalName: 'Tata Tea Gold', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Tata Tea Gold 500g',    345, 385, 10, '500g', 'tea', true, '10 min'),
  ]},
  wagh_bakri_tea: { query: 'wagh bakri', canonicalName: 'Wagh Bakri Premium', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Wagh Bakri 500g',       285, 310, 8, '500g', 'tea', true, '10 min'),
  ]},
  moong_chilka_dal: { query: 'moong chilka', canonicalName: 'Moong Chilka Dal', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Moong Chilka',  105, 125, 16, '500g', 'pulses', true, '10 min'),
  ]},
  urad_chilka_dal: { query: 'urad chilka', canonicalName: 'Urad Chilka Dal', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Urad Chilka',   115, 135, 14, '500g', 'pulses', true, '10 min'),
  ]},
  bell_pepper_red: { query: 'red capsicum', canonicalName: 'Red Bell Pepper', category: 'Vegetables', icon: '🫑', prices: [
    p('blinkit',   'Red Bell Pepper Fresh', 85, 110, 22, '1 pc', 'vegetables', true, '10 min'),
  ]},
  bell_pepper_yellow: { query: 'yellow capsicum', canonicalName: 'Yellow Bell Pepper', category: 'Vegetables', icon: '🫑', prices: [
    p('blinkit',   'Yellow Bell Pepper',    85, 110, 22, '1 pc', 'vegetables', true, '10 min'),
  ]},
  grapes_black: { query: 'black grapes', canonicalName: 'Black Grapes (Seedless)', category: 'Fruits', icon: '🍇', prices: [
    p('blinkit',   'Black Grapes Fresh',    125, 155, 19, '500g', 'fruits', true, '10 min'),
  ]},
  orange_nagpur: { query: 'orange', canonicalName: 'Nagpur Orange', category: 'Fruits', icon: '🍊', prices: [
    p('blinkit',   'Fresh Nagpur Orange',   95, 125, 24, '1 kg', 'fruits', true, '10 min'),
  ]},
  veeba_eggless_mayo: { query: 'eggless mayo', canonicalName: 'Eggless Mayonnaise', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Veeba Eggless Mayo',    145, 165, 12, '250g', 'sauce', true, '10 min'),
  ]},
  mccain_aloo_tikki: { query: 'aloo tikki', canonicalName: 'McCain Aloo Tikki', category: 'Frozen Foods', icon: '🧊', prices: [
    p('blinkit',   'McCain Tikki 400g',     125, 150, 16, '400g', 'frozen', true, '10 min'),
  ]},
  mccain_cheese_nuggets: { query: 'cheese nuggets', canonicalName: 'McCain Cheese Corn', category: 'Frozen Foods', icon: '🧊', prices: [
    p('blinkit',   'McCain Cheese Nuggets', 185, 220, 16, '325g', 'frozen', true, '10 min'),
  ]},
  itc_chicken_nuggets: { query: 'chicken nuggets', canonicalName: 'ITC Chicken Nuggets', category: 'Frozen Foods', icon: '🧊', prices: [
    p('blinkit',   'ITC Master Chef',       245, 290, 15, '500g', 'frozen', true, '10 min'),
  ]},
  knorr_soup_tomato: { query: 'tomato soup', canonicalName: 'Knorr Tomato Soup', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Knorr Classic Tomato',  55, 60, 8, '50g', 'soup', true, '10 min'),
  ]},
  knorr_soup_sweet_corn: { query: 'sweet corn soup', canonicalName: 'Knorr Sweet Corn', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Knorr Sweet Corn Veg',  55, 60, 8, '50g', 'soup', true, '10 min'),
  ]},
  knorr_soup_mixed_veg: { query: 'mixed veg soup', canonicalName: 'Knorr Mixed Veg', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Knorr Mixed Veg Soup',  55, 60, 8, '50g', 'soup', true, '10 min'),
  ]},
  idli_rice_pack: { query: 'idli rice', canonicalName: 'Idli Rice (Premium)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Fortune Idli Rice',     105, 125, 16, '1 kg', 'rice', true, '10 min'),
  ]},
  wada_kolam_rice: { query: 'wada kolam', canonicalName: 'Wada Kolam Rice', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Premium Wada Kolam',    385, 450, 14, '5 kg', 'rice', true, '10 min'),
  ]},
  diabetic_friendly_atta: { query: 'diabetic atta', canonicalName: 'Sugar Release Control Atta', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Aashirvaad Sugar Release', 385, 425, 9, '5 kg', 'flour', true, '10 min'),
  ]},
  amul_butter_100g: { query: 'amul butter', canonicalName: 'Amul Butter 100g', category: 'Dairy', icon: '🧈', prices: [
    p('blinkit',   'Amul Butter 100g',      56, 56, 0, '100g', 'butter', true, '10 min'),
  ]},
  amul_garlic_butter: { query: 'garlic butter', canonicalName: 'Amul Garlic & Herbs Butter', category: 'Dairy', icon: '🧈', prices: [
    p('blinkit',   'Amul Garlic Butter',    58, 62, 6, '100g', 'butter', true, '10 min'),
  ]},
  britannia_cheese_slices: { query: 'britannia cheese', canonicalName: 'Britannia Cheese Slices', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Britannia Slices (10 pcs)', 155, 170, 9, '200g', 'cheese', true, '10 min'),
  ]},
  amul_kool_rose: { query: 'rose amul kool', canonicalName: 'Amul Kool Rose', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Amul Kool Rose 200ml',  25, 30, 16, '200ml', 'beverages', true, '10 min'),
  ]},
  amul_kool_elaichi: { query: 'elaichi amul kool', canonicalName: 'Amul Kool Elaichi', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Amul Kool Elaichi',     25, 30, 16, '200ml', 'beverages', true, '10 min'),
  ]},
  thums_up_can: { query: 'thums up can', canonicalName: 'Thums Up (Can)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Thums Up Can 300ml',    40, 40, 0, '300ml', 'soft drink', true, '10 min'),
  ]},
  coke_can: { query: 'coke can', canonicalName: 'Coca Cola (Can)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Coke Can 300ml',        40, 40, 0, '300ml', 'soft drink', true, '10 min'),
  ]},
  red_bull_big_can: { query: 'big red bull', canonicalName: 'Red Bull (Big Can)', category: 'Beverages', icon: '⚡', prices: [
    p('blinkit',   'Red Bull 350ml',        165, 165, 0, '350ml', 'energy drink', true, '10 min'),
  ]},
  broccoli_fresh: { query: 'broccoli', canonicalName: 'Fresh Broccoli', category: 'Vegetables', icon: '🥦', prices: [
    p('blinkit',   'Premium Broccoli',      85, 110, 22, '1 pc', 'vegetables', true, '10 min'),
  ]},
  celery_fresh: { query: 'celery', canonicalName: 'Fresh Celery', category: 'Vegetables', icon: '🌿', prices: [
    p('blinkit',   'Fresh Celery 250g',     45, 60, 25, '250g', 'vegetables', true, '10 min'),
  ]},
  parsley_fresh: { query: 'parsley', canonicalName: 'Fresh Parsley', category: 'Vegetables', icon: '🌿', prices: [
    p('blinkit',   'Fresh Parsley 100g',    35, 50, 30, '100g', 'vegetables', true, '10 min'),
  ]},
  basmati_rice_premium_5kg: { query: 'basmati rice 5kg', canonicalName: 'Premium Basmati Rice (5kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'India Gate Tibar',      485, 550, 12, '5 kg', 'rice', true, '10 min'),
  ]},
  toor_dal_premium_2kg: { query: 'toor dal 2kg', canonicalName: 'Premium Toor Dal (2kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Sampann Toor',     325, 380, 14, '2 kg', 'pulses', true, '10 min'),
  ]},
  moong_dal_premium_2kg: { query: 'moong dal 2kg', canonicalName: 'Premium Moong Dal (2kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Sampann Moong',    285, 330, 14, '2 kg', 'pulses', true, '10 min'),
  ]},
  milky_mist_paneer: { query: 'milky mist paneer', canonicalName: 'Milky Mist Paneer', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Milky Mist Fresh',      95, 110, 13, '200g', 'paneer', true, '10 min'),
  ]},
  milky_mist_curd_1kg: { query: 'milky mist curd', canonicalName: 'Milky Mist Curd (1kg)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Milky Mist Farm Fresh', 85, 95, 11, '1 kg', 'curd', true, '10 min'),
  ]},
  itc_seekh_kebab: { query: 'seekh kebab', canonicalName: 'ITC Seekh Kebab', category: 'Frozen Foods', icon: '🍖', prices: [
    p('blinkit',   'ITC Chicken Seekh',     195, 240, 19, '320g', 'frozen', true, '10 min'),
  ]},
  itc_fish_fingers: { query: 'fish fingers', canonicalName: 'ITC Fish Fingers', category: 'Frozen Foods', icon: '🐟', prices: [
    p('blinkit',   'ITC Fish Fingers 250g', 225, 275, 18, '250g', 'frozen', true, '10 min'),
  ]},
  itc_chicken_popcorn: { query: 'chicken popcorn', canonicalName: 'ITC Chicken Popcorn', category: 'Frozen Foods', icon: '🍗', prices: [
    p('blinkit',   'ITC Popcorn 250g',      185, 220, 16, '250g', 'frozen', true, '10 min'),
  ]},
  zucchini_yellow: { query: 'yellow zucchini', canonicalName: 'Yellow Zucchini', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Premium Yellow Zucchini', 95, 125, 24, '1 pc', 'vegetables', true, '10 min'),
  ]},
  asparagus_premium: { query: 'asparagus', canonicalName: 'Premium Asparagus', category: 'Vegetables', icon: '🎋', prices: [
    p('blinkit',   'Fresh Asparagus 250g',  285, 350, 18, '250g', 'vegetables', true, '10 min'),
  ]},
  brussels_sprouts_fresh: { query: 'brussels sprouts', canonicalName: 'Brussels Sprouts', category: 'Vegetables', icon: '🥦', prices: [
    p('blinkit',   'Fresh Sprouts 250g',    145, 185, 21, '250g', 'vegetables', true, '10 min'),
  ]},
  avocado_imported: { query: 'avocado', canonicalName: 'Imported Avocado (Hass)', category: 'Fruits', icon: '🥑', prices: [
    p('blinkit',   'Hass Avocado 1 pc',     185, 250, 26, '1 pc', 'fruits', true, '10 min'),
  ]},
  dragon_fruit_red: { query: 'red dragon fruit', canonicalName: 'Red Dragon Fruit', category: 'Fruits', icon: '🥭', prices: [
    p('blinkit',   'Premium Red Dragon',    125, 160, 21, '1 pc', 'fruits', true, '10 min'),
  ]},
  gatorade_blue: { query: 'gatorade blue', canonicalName: 'Gatorade Blue Bolt', category: 'Beverages', icon: '⚡', prices: [
    p('blinkit',   'Gatorade 500ml',        65, 65, 0, '500ml', 'beverages', true, '10 min'),
  ]},
  gatorade_orange: { query: 'gatorade orange', canonicalName: 'Gatorade Orange', category: 'Beverages', icon: '⚡', prices: [
    p('blinkit',   'Gatorade Orange 500ml', 65, 65, 0, '500ml', 'beverages', true, '10 min'),
  ]},
  nutella_spread_750g: { query: 'nutella 750g', canonicalName: 'Nutella (Large Jar)', category: 'Packaged Foods', icon: '🍫', prices: [
    p('blinkit',   'Nutella 750g Jar',      745, 825, 9, '750g', 'spread', true, '10 min'),
  ]},
  alpino_peanut_butter: { query: 'alpino peanut butter', canonicalName: 'Alpino Chocolate Peanut Butter', category: 'Packaged Foods', icon: '🥜', prices: [
    p('blinkit',   'Alpino Dark Chocolate', 245, 290, 15, '400g', 'peanut butter', true, '10 min'),
  ]},
  brown_poha_pack: { query: 'brown poha', canonicalName: 'Brown Poha (Healthy)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Organic Brown Poha',    85, 110, 22, '500g', 'grains', true, '10 min'),
  ]},
  basmati_rice_10kg_family: { query: 'basmati rice 10kg', canonicalName: 'Family Pack Basmati Rice (10kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'India Gate Classic',    945, 1150, 17, '10 kg', 'rice', true, '10 min'),
  ]},
  mccain_smiles_family_pack: { query: 'mccain smiles 1.5kg', canonicalName: 'McCain Smiles (Family Pack)', category: 'Frozen Foods', icon: '🧊', prices: [
    p('blinkit',   'McCain Smiles 1.25kg',  325, 385, 15, '1.25kg', 'frozen', true, '10 min'),
  ]},
  real_aloe_vera_1l: { query: 'aloe vera juice 1l', canonicalName: 'Real Aloe Vera Juice (1L)', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Aloe Vera 1L',     125, 145, 14, '1 L', 'beverages', true, '10 min'),
  ]},
  thums_up_big_bottle: { query: 'thums up 2l', canonicalName: 'Thums Up (2.25 L)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Thums Up 2.25L',        95, 95, 0, '2.25 L', 'soft drink', true, '10 min'),
  ]},
  coke_big_bottle: { query: 'coca cola 2l', canonicalName: 'Coca Cola (2.25 L)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Coke 2.25L',            95, 95, 0, '2.25 L', 'soft drink', true, '10 min'),
  ]},
  iceberg_lettuce_fresh: { query: 'iceberg lettuce', canonicalName: 'Iceberg Lettuce', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Fresh Iceberg',         55, 75, 26, '1 pc', 'vegetables', true, '10 min'),
  ]},
  romaine_lettuce_fresh: { query: 'romaine lettuce', canonicalName: 'Romaine Lettuce', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Fresh Romaine',         85, 110, 22, '1 pc', 'vegetables', true, '10 min'),
  ]},
  purple_cabbage_fresh: { query: 'purple cabbage', canonicalName: 'Purple Cabbage', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Fresh Red Cabbage',     45, 65, 30, '500g', 'vegetables', true, '10 min'),
  ]},
  tandoori_mayo_veeba: { query: 'tandoori mayo', canonicalName: 'Tandoori Mayonnaise', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Veeba Tandoori Mayo',   155, 185, 16, '250g', 'sauce', true, '10 min'),
  ]},
  peanut_butter_creamy_1kg: { query: 'peanut butter 1kg', canonicalName: 'Peanut Butter Creamy (1kg)', category: 'Packaged Foods', icon: '🥜', prices: [
    p('blinkit',   'Pintola Creamy 1kg',    385, 450, 14, '1 kg', 'peanut butter', true, '10 min'),
  ]},
  nutella_spread_1kg: { query: 'nutella 1kg', canonicalName: 'Nutella (Mega Jar)', category: 'Packaged Foods', icon: '🍫', prices: [
    p('blinkit',   'Nutella 1kg Mega Jar',  895, 995, 10, '1 kg', 'spread', true, '10 min'),
  ]},
  orange_capsicum_fresh: { query: 'orange capsicum', canonicalName: 'Orange Bell Pepper', category: 'Vegetables', icon: '🫑', prices: [
    p('blinkit',   'Orange Bell Pepper',    95, 125, 24, '1 pc', 'vegetables', true, '10 min'),
  ]},
  moong_dal_yellow_500g: { query: 'moong dal', canonicalName: 'Moong Dal (Yellow)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Moong Dal',     95, 115, 17, '500g', 'pulses', true, '10 min'),
  ]},
  urad_dal_white_500g: { query: 'urad dal', canonicalName: 'Urad Dal (White Whole)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Urad Dal',      105, 125, 16, '500g', 'pulses', true, '10 min'),
  ]},
  chana_dal_500g: { query: 'chana dal', canonicalName: 'Chana Dal', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Chana Dal',     65, 80, 18, '500g', 'pulses', true, '10 min'),
  ]},
  saffola_gold_5l: { query: 'saffola gold 5l', canonicalName: 'Saffola Gold Oil (5L Can)', category: 'Packaged Foods', icon: '🛢️', prices: [
    p('blinkit',   'Saffola Gold 5L',       845, 950, 11, '5 L', 'oil', true, '10 min'),
  ]},
  fortune_soyabean_5l: { query: 'soyabean oil 5l', canonicalName: 'Fortune Soyabean Oil (5L Can)', category: 'Packaged Foods', icon: '🛢️', prices: [
    p('blinkit',   'Fortune Soyabean 5L',   625, 750, 16, '5 L', 'oil', true, '10 min'),
  ]},
  parle_g_1kg_mega: { query: 'parle g 1kg', canonicalName: 'Parle-G (1kg Mega Pack)', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Parle-G 1kg Pack',      110, 110, 0, '1 kg', 'biscuits', true, '10 min'),
  ]},
  marie_gold_family_pack: { query: 'marie gold family', canonicalName: 'Marie Gold (Family Pack)', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Britannia Marie 1kg',   145, 160, 9, '1 kg', 'biscuits', true, '10 min'),
  ]},
  hide_seek_family_pack: { query: 'hide seek family', canonicalName: 'Hide & Seek (Family Pack)', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Hide & Seek 400g',      125, 145, 14, '400g', 'biscuits', true, '10 min'),
  ]},
  bru_instant_coffee: { query: 'bru coffee', canonicalName: 'Bru Instant Coffee', category: 'Beverages', icon: '☕', prices: [
    p('blinkit',   'Bru Instant 200g',      385, 450, 14, '200g', 'coffee', true, '10 min'),
  ]},
  nescafe_gold_premium: { query: 'nescafe gold', canonicalName: 'Nescafe Gold (Premium)', category: 'Beverages', icon: '☕', prices: [
    p('blinkit',   'Nescafe Gold 100g',     545, 650, 16, '100g', 'coffee', true, '10 min'),
  ]},
  taj_mahal_tea_premium: { query: 'taj mahal tea', canonicalName: 'Brooke Bond Taj Mahal', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Taj Mahal Tea 500g',    425, 480, 11, '500g', 'tea', true, '10 min'),
  ]},
  amul_masti_dahi_1kg: { query: 'amul dahi 1kg', canonicalName: 'Amul Masti Dahi (1kg)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Amul Masti Dahi 1kg',   105, 115, 8, '1 kg', 'curd', true, '10 min'),
  ]},
  kissan_jam_1kg: { query: 'kissan jam 1kg', canonicalName: 'Kissan Mixed Fruit Jam (1kg)', category: 'Packaged Foods', icon: '🍯', prices: [
    p('blinkit',   'Kissan Jam 1kg',        285, 325, 12, '1 kg', 'jam', true, '10 min'),
  ]},
  shakarkandi_fresh_root: { query: 'shakarkandi', canonicalName: 'Sweet Potato (Shakarkandi)', category: 'Vegetables', icon: '🍠', prices: [
    p('blinkit',   'Fresh Shakarkandi',     45, 60, 25, '500g', 'vegetables', true, '10 min'),
  ]},
  radish_fresh_mooli: { query: 'mooli', canonicalName: 'Radish (Mooli)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Fresh Mooli 1kg',       35, 45, 22, '1 kg', 'vegetables', true, '10 min'),
  ]},
  mousambi_fresh: { query: 'mousambi', canonicalName: 'Sweet Lime (Mousambi)', category: 'Fruits', icon: '🍊', prices: [
    p('blinkit',   'Fresh Mousambi 1kg',    85, 110, 22, '1 kg', 'fruits', true, '10 min'),
  ]},
  aashirvaad_multigrain_10kg: { query: 'multigrain atta 10kg', canonicalName: 'Aashirvaad Multigrain Atta (10kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Aashirvaad Multi 10kg', 645, 720, 10, '10 kg', 'flour', true, '10 min'),
  ]},
  fortune_chakki_atta_10kg: { query: 'chakki atta 10kg', canonicalName: 'Fortune Chakki Atta (10kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Fortune Chakki 10kg',   445, 520, 14, '10 kg', 'flour', true, '10 min'),
  ]},
  coke_zero_can: { query: 'coke zero can', canonicalName: 'Coca Cola Zero (Can)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Coke Zero 300ml',       40, 40, 0, '300ml', 'soft drink', true, '10 min'),
  ]},
  diet_coke_can: { query: 'diet coke can', canonicalName: 'Diet Coke (Can)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Diet Coke 300ml',       40, 40, 0, '300ml', 'soft drink', true, '10 min'),
  ]},
  pepsi_black_can: { query: 'pepsi black can', canonicalName: 'Pepsi Black (Can)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Pepsi Black 300ml',     40, 40, 0, '300ml', 'soft drink', true, '10 min'),
  ]},
  moong_dal_yellow_1kg: { query: 'moong dal 1kg', canonicalName: 'Moong Dal Yellow (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Moong 1kg',     185, 210, 12, '1 kg', 'pulses', true, '10 min'),
  ]},
  masoor_dal_red_1kg: { query: 'masoor dal 1kg', canonicalName: 'Masoor Dal Red (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Masoor 1kg',    145, 175, 17, '1 kg', 'pulses', true, '10 min'),
  ]},
  chana_dal_1kg: { query: 'chana dal 1kg', canonicalName: 'Chana Dal (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Chana 1kg',     125, 145, 14, '1 kg', 'pulses', true, '10 min'),
  ]},
  uncle_chipps_classic: { query: 'uncle chipps', canonicalName: 'Uncle Chipps (Classic Salted)', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Uncle Chipps 70g',      35, 35, 0, '70g', 'chips', true, '10 min'),
  ]},
  paper_boat_anardana: { query: 'anardana paper boat', canonicalName: 'Paper Boat Anardana', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Paper Boat Anardana',   35, 40, 12, '250ml', 'beverages', true, '10 min'),
  ]},
  mother_dairy_lassi: { query: 'mother dairy lassi', canonicalName: 'Mother Dairy Lassi', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Mother Dairy Lassi',    25, 30, 16, '200ml', 'beverages', true, '10 min'),
  ]},
  bingo_mad_angles_masala: { query: 'mad angles masala', canonicalName: 'Bingo! Mad Angles (Masala)', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Bingo Mad Angles',      20, 20, 0, '66g', 'chips', true, '10 min'),
  ]},
  nescafe_classic_200g: { query: 'nescafe classic 200g', canonicalName: 'Nescafe Classic (200g Jar)', category: 'Beverages', icon: '☕', prices: [
    p('blinkit',   'Nescafe Classic Jar',   545, 620, 12, '200g', 'coffee', true, '10 min'),
  ]},
  amul_fresh_cream_1l: { query: 'amul fresh cream 1l', canonicalName: 'Amul Fresh Cream (1L)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Amul Fresh Cream 1L',   225, 250, 10, '1 L', 'cream', true, '10 min'),
  ]},
  mother_dairy_full_cream_1l: { query: 'mother dairy milk 1l', canonicalName: 'Mother Dairy Full Cream (1L)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Mother Dairy Full Cream', 68, 68, 0, '1 L', 'milk', true, '10 min'),
  ]},
  amul_mithai_mate: { query: 'amul mithai mate', canonicalName: 'Amul Mithai Mate', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Amul Mithai Mate 200g', 58, 62, 6, '200g', 'condensed milk', true, '10 min'),
  ]},
  chings_hakka_noodles_masala: { query: 'hakka noodles masala', canonicalName: 'Chings Hakka Noodles Masala', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Chings Hakka Masala',   10, 10, 0, '20g', 'spices', true, '10 min'),
  ]},
  chings_schezwan_fried_rice_masala: { query: 'schezwan rice masala', canonicalName: 'Chings Schezwan Rice Masala', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Chings Schezwan Masala', 10, 10, 0, '20g', 'spices', true, '10 min'),
  ]},
  moms_magic_biscuits: { query: 'moms magic', canonicalName: 'Sunfeast Mom’s Magic', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Moms Magic Cashew',     125, 145, 14, '600g', 'biscuits', true, '10 min'),
  ]},
  farmlite_biscuits: { query: 'farmlite', canonicalName: 'Sunfeast Farmlite', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Farmlite Digestive',    145, 165, 12, '800g', 'biscuits', true, '10 min'),
  ]},
  grapes_red_globe: { query: 'red grapes', canonicalName: 'Red Globe Grapes', category: 'Fruits', icon: '🍇', prices: [
    p('blinkit',   'Premium Red Globe',     285, 350, 18, '500g', 'fruits', true, '10 min'),
  ]},
  kiwi_3_pack: { query: 'kiwi', canonicalName: 'Kiwi (3 Pack)', category: 'Fruits', icon: '🥝', prices: [
    p('blinkit',   'Fresh Kiwi 3 pcs',      95, 125, 24, '3 pcs', 'fruits', true, '10 min'),
  ]},
  nutella_giant_jar_1_5kg: { query: 'nutella 1.5kg', canonicalName: 'Nutella (Giant Jar 1.5kg)', category: 'Packaged Foods', icon: '🍫', prices: [
    p('blinkit',   'Nutella 1.5kg Jar',     1295, 1450, 10, '1.5 kg', 'spread', true, '10 min'),
  ]},
  nescafe_gold_200g: { query: 'nescafe gold 200g', canonicalName: 'Nescafe Gold (200g Jar)', category: 'Beverages', icon: '☕', prices: [
    p('blinkit',   'Nescafe Gold Jar',      945, 1100, 14, '200g', 'coffee', true, '10 min'),
  ]},
  mccain_french_fries_mega: { query: 'mccain fries 2.5kg', canonicalName: 'McCain Fries (Mega 2.5kg)', category: 'Frozen Foods', icon: '🧊', prices: [
    p('blinkit',   'McCain Fries 2.5kg',    545, 625, 12, '2.5 kg', 'frozen', true, '10 min'),
  ]},
  appy_fizz_6_pack: { query: 'appy fizz pack', canonicalName: 'Appy Fizz (6 Pack)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Appy Fizz 6x250ml',     240, 240, 0, '6 pcs', 'beverages', true, '10 min'),
  ]},
  thums_up_6_pack: { query: 'thums up pack', canonicalName: 'Thums Up (6 Pack)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Thums Up 6x300ml',      240, 240, 0, '6 pcs', 'beverages', true, '10 min'),
  ]},
  veg_mayo_mega_tub: { query: 'mayo 2kg', canonicalName: 'Veg Mayo (2kg Mega Tub)', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Veeba Veg Mayo 2kg',    385, 450, 14, '2 kg', 'sauce', true, '10 min'),
  ]},
  wagh_bakri_dust_tea_1kg: { query: 'wagh bakri dust', canonicalName: 'Wagh Bakri Dust Tea (1kg)', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Wagh Bakri Dust 1kg',   485, 540, 10, '1 kg', 'tea', true, '10 min'),
  ]},
  aashirvaad_sona_masuri_5kg: { query: 'sona masuri 5kg', canonicalName: 'Aashirvaad Sona Masuri (5kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Aashirvaad Sona 5kg',   425, 480, 11, '5 kg', 'rice', true, '10 min'),
  ]},
  basmati_magnum_rice_5kg: { query: 'basmati magnum', canonicalName: 'Fortune Basmati Magnum (5kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Fortune Magnum 5kg',    585, 650, 10, '5 kg', 'rice', true, '10 min'),
  ]},
  real_sugarcane_juice_1l: { query: 'sugarcane juice', canonicalName: 'Real Sugarcane Juice (1L)', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Sugarcane 1L',     125, 145, 14, '1 L', 'beverages', true, '10 min'),
  ]},
  kissan_ketchup_mega_spout: { query: 'kissan ketchup 2kg', canonicalName: 'Kissan Tomato Ketchup (2kg Spout)', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Kissan Ketchup 2kg',    285, 340, 16, '2 kg', 'sauce', true, '10 min'),
  ]},
  mother_dairy_paneer_1kg: { query: 'paneer 1kg', canonicalName: 'Mother Dairy Paneer (1kg)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Mother Dairy Fresh 1kg', 445, 480, 7, '1 kg', 'paneer', true, '10 min'),
  ]},
  amul_cheese_block_1kg: { query: 'cheese block 1kg', canonicalName: 'Amul Cheese Block (1kg)', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Amul Cheese Block 1kg', 485, 520, 7, '1 kg', 'cheese', true, '10 min'),
  ]},
  coke_1_25l: { query: 'coke 1.25l', canonicalName: 'Coca Cola (1.25 L)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Coke 1.25L Bottle',     65, 65, 0, '1.25 L', 'soft drink', true, '10 min'),
  ]},
  pepsi_1_25l: { query: 'pepsi 1.25l', canonicalName: 'Pepsi (1.25 L)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Pepsi 1.25L Bottle',    65, 65, 0, '1.25 L', 'soft drink', true, '10 min'),
  ]},
  sprite_1_25l: { query: 'sprite 1.25l', canonicalName: 'Sprite (1.25 L)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Sprite 1.25L Bottle',   65, 65, 0, '1.25 L', 'soft drink', true, '10 min'),
  ]},
  lays_magic_masala_mega: { query: 'lays mega', canonicalName: 'Lays Magic Masala (150g)', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Lays Mega Pack',        50, 50, 0, '150g', 'chips', true, '10 min'),
  ]},
  kurkure_masala_munch_mega: { query: 'kurkure mega', canonicalName: 'Kurkure Masala Munch (150g)', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Kurkure Mega Pack',     50, 50, 0, '150g', 'snacks', true, '10 min'),
  ]},
  nescafe_classic_500g_mega: { query: 'nescafe 500g', canonicalName: 'Nescafe Classic (500g Jar)', category: 'Beverages', icon: '☕', prices: [
    p('blinkit',   'Nescafe Classic Mega',  1145, 1250, 8, '500g', 'coffee', true, '10 min'),
  ]},
  tandoori_mayo_1kg: { query: 'tandoori mayo 1kg', canonicalName: 'Tandoori Mayo (1kg Tub)', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Veeba Tandoori 1kg',    285, 330, 14, '1 kg', 'sauce', true, '10 min'),
  ]},
  garlic_mayo_1kg: { query: 'garlic mayo 1kg', canonicalName: 'Garlic Mayo (1kg Tub)', category: 'Packaged Foods', icon: '🥫', prices: [
    p('blinkit',   'Veeba Garlic 1kg',      285, 330, 14, '1 kg', 'sauce', true, '10 min'),
  ]},
  tata_salt_lite: { query: 'tata salt lite', canonicalName: 'Tata Salt Lite (Pro-Health)', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Tata Salt Lite 1kg',    35, 45, 22, '1 kg', 'salt', true, '10 min'),
  ]},
  tata_salt_superlite: { query: 'tata salt superlite', canonicalName: 'Tata Salt SuperLite', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Tata Salt SuperLite',   55, 65, 15, '1 kg', 'salt', true, '10 min'),
  ]},
  aashirvaad_salt_1kg: { query: 'aashirvaad salt', canonicalName: 'Aashirvaad Salt', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Aashirvaad Iodized',    25, 30, 16, '1 kg', 'salt', true, '10 min'),
  ]},
  sona_masuri_10kg_mega: { query: 'sona masuri 10kg', canonicalName: 'Aashirvaad Sona Masuri (10kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Aashirvaad Sona 10kg',  845, 950, 11, '10 kg', 'rice', true, '10 min'),
  ]},
  magnum_basmati_10kg_mega: { query: 'basmati 10kg', canonicalName: 'Fortune Magnum Basmati (10kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Fortune Magnum 10kg',   1145, 1250, 8, '10 kg', 'rice', true, '10 min'),
  ]},
  limca_2l_bottle: { query: 'limca 2l', canonicalName: 'Limca (2.25 L)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Limca 2.25L Bottle',    95, 95, 0, '2.25 L', 'soft drink', true, '10 min'),
  ]},
  sprite_2l_bottle: { query: 'sprite 2l', canonicalName: 'Sprite (2.25 L)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Sprite 2.25L Bottle',   95, 95, 0, '2.25 L', 'soft drink', true, '10 min'),
  ]},
  fanta_2l_bottle: { query: 'fanta 2l', canonicalName: 'Fanta (2.25 L)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Fanta 2.25L Bottle',    95, 95, 0, '2.25 L', 'soft drink', true, '10 min'),
  ]},
  nagpur_orange_5kg_bag: { query: 'orange 5kg', canonicalName: 'Nagpur Oranges (5kg Bag)', category: 'Fruits', icon: '🍊', prices: [
    p('blinkit',   'Nagpur Oranges Bag',    445, 520, 14, '5 kg', 'fruits', true, '10 min'),
  ]},
  apple_royal_gala_4_pack: { query: 'royal gala apples', canonicalName: 'Royal Gala Apples (4 Pack)', category: 'Fruits', icon: '🍎', prices: [
    p('blinkit',   'Fresh Royal Gala',      185, 220, 16, '4 pcs', 'fruits', true, '10 min'),
  ]},
  kiwi_6_pack_mega: { query: 'kiwi pack', canonicalName: 'Kiwi (6 Pack Mega)', category: 'Fruits', icon: '🥝', prices: [
    p('blinkit',   'Fresh Kiwi 6 pcs',      185, 225, 17, '6 pcs', 'fruits', true, '10 min'),
  ]},
  lays_classic_90g_pack: { query: 'lays 90g', canonicalName: 'Lays Classic Salted (90g)', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Lays Classic 90g',      35, 35, 0, '90g', 'chips', true, '10 min'),
  ]},
  bingo_mad_angles_90g_pack: { query: 'mad angles 90g', canonicalName: 'Bingo! Mad Angles (90g)', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Bingo Mad Angles 90g',  35, 35, 0, '90g', 'chips', true, '10 min'),
  ]},
  zucchini_green_1kg: { query: 'green zucchini', canonicalName: 'Green Zucchini (1kg)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Fresh Green Zucchini',  125, 160, 21, '1 kg', 'vegetables', true, '10 min'),
  ]},
  broccoli_1kg_mega: { query: 'broccoli 1kg', canonicalName: 'Fresh Broccoli (1kg)', category: 'Vegetables', icon: '🥦', prices: [
    p('blinkit',   'Premium Broccoli 1kg',  185, 225, 17, '1 kg', 'vegetables', true, '10 min'),
  ]},
  mushroom_button_400g: { query: 'mushrooms 400g', canonicalName: 'Button Mushrooms (400g)', category: 'Vegetables', icon: '🍄', prices: [
    p('blinkit',   'Fresh Button 400g',     95, 115, 17, '400g', 'vegetables', true, '10 min'),
  ]},
  baby_corn_500g_pack: { query: 'baby corn 500g', canonicalName: 'Baby Corn (500g Pack)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Fresh Baby Corn',       85, 105, 19, '500g', 'vegetables', true, '10 min'),
  ]},
  society_tea_1kg_pack: { query: 'society tea', canonicalName: 'Society Tea (1kg)', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Society Tea 1kg',       485, 540, 10, '1 kg', 'tea', true, '10 min'),
  ]},
  bru_instant_coffee_500g: { query: 'bru coffee 500g', canonicalName: 'Bru Instant Coffee (500g)', category: 'Beverages', icon: '☕', prices: [
    p('blinkit',   'Bru Instant 500g',      845, 950, 11, '500g', 'coffee', true, '10 min'),
  ]},
  lipton_green_tea_100: { query: 'lipton green tea', canonicalName: 'Lipton Green Tea (100 bags)', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Lipton Green 100 bags', 545, 650, 16, '100 bags', 'tea', true, '10 min'),
  ]},
  tetley_green_tea_100: { query: 'tetley green tea', canonicalName: 'Tetley Green Tea (100 bags)', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Tetley Green 100 bags', 525, 620, 15, '100 bags', 'tea', true, '10 min'),
  ]},
  tata_tea_agni_1kg: { query: 'tata tea agni', canonicalName: 'Tata Tea Agni (1kg)', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Tata Tea Agni 1kg',     285, 320, 11, '1 kg', 'tea', true, '10 min'),
  ]},
  everest_garam_masala_100g: { query: 'garam masala', canonicalName: 'Everest Garam Masala', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Everest Garam 100g',    75, 85, 12, '100g', 'spices', true, '10 min'),
  ]},
  everest_chicken_masala: { query: 'chicken masala', canonicalName: 'Everest Chicken Masala', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Everest Chicken 100g',  75, 85, 12, '100g', 'spices', true, '10 min'),
  ]},
  catch_sabzi_masala: { query: 'sabzi masala', canonicalName: 'Catch Sabzi Masala', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Catch Sabzi 100g',      55, 65, 15, '100g', 'spices', true, '10 min'),
  ]},
  mother_dairy_ghee_1kg: { query: 'mother dairy ghee', canonicalName: 'Mother Dairy Ghee (1kg)', category: 'Dairy', icon: '🧈', prices: [
    p('blinkit',   'Mother Dairy Ghee 1L',  645, 720, 10, '1 L', 'ghee', true, '10 min'),
  ]},
  amul_butter_500g_mega: { query: 'amul butter 500g', canonicalName: 'Amul Butter (500g Mega)', category: 'Dairy', icon: '🧈', prices: [
    p('blinkit',   'Amul Butter 500g',      275, 275, 0, '500g', 'butter', true, '10 min'),
  ]},
  kelloggs_cornflakes_1_2kg: { query: 'cornflakes 1.2kg', canonicalName: 'Kellogg’s Cornflakes (1.2kg)', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Kelloggs 1.2kg Pack',   385, 450, 14, '1.2 kg', 'cereal', true, '10 min'),
  ]},
  quaker_oats_1kg_mega: { query: 'quaker oats 1kg', canonicalName: 'Quaker Oats (1kg Mega)', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Quaker Oats 1kg',       185, 220, 16, '1 kg', 'oats', true, '10 min'),
  ]},
  tata_tea_gold_premium: { query: 'tata tea gold 1kg', canonicalName: 'Tata Tea Gold (1kg)', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Tata Tea Gold 1kg',     625, 720, 13, '1 kg', 'tea', true, '10 min'),
  ]},
  red_label_natural_care_1kg: { query: 'natural care tea', canonicalName: 'Red Label Natural Care (1kg)', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Red Label Natural 1kg', 585, 650, 10, '1 kg', 'tea', true, '10 min'),
  ]},
  dabur_honey_1kg_mega: { query: 'dabur honey 1kg', canonicalName: 'Dabur Honey (1kg Mega)', category: 'Packaged Foods', icon: '🍯', prices: [
    p('blinkit',   'Dabur Honey 1kg',       395, 450, 12, '1 kg', 'honey', true, '10 min'),
  ]},
  saffola_honey_1kg_mega: { query: 'saffola honey 1kg', canonicalName: 'Saffola Honey (1kg Mega)', category: 'Packaged Foods', icon: '🍯', prices: [
    p('blinkit',   'Saffola Honey 1kg',     385, 440, 12, '1 kg', 'honey', true, '10 min'),
  ]},
  hersheys_syrup_623g: { query: 'hersheys syrup', canonicalName: 'Hershey’s Chocolate Syrup', category: 'Packaged Foods', icon: '🍫', prices: [
    p('blinkit',   'Hersheys Syrup 623g',   195, 220, 11, '623g', 'syrup', true, '10 min'),
  ]},
  mapro_strawberry_crush: { query: 'strawberry crush', canonicalName: 'Mapro Strawberry Crush', category: 'Packaged Foods', icon: '🍓', prices: [
    p('blinkit',   'Mapro Crush 750ml',     185, 210, 12, '750ml', 'syrup', true, '10 min'),
  ]},
  amul_dark_chocolate_pack: { query: 'dark chocolate', canonicalName: 'Amul Dark Chocolate', category: 'Snacks', icon: '🍫', prices: [
    p('blinkit',   'Amul Dark 150g',        115, 125, 8, '150g', 'chocolate', true, '10 min'),
  ]},
  cadbury_celebrations_gift: { query: 'celebrations', canonicalName: 'Cadbury Celebrations (Large)', category: 'Sweets & Desserts', icon: '🎁', prices: [
    p('blinkit',   'Celebrations Large',    185, 200, 7, '180g', 'chocolate', true, '10 min'),
  ]},
  ferrero_rocher_16_pack: { query: 'ferrero rocher 16', canonicalName: 'Ferrero Rocher (16 pcs)', category: 'Sweets & Desserts', icon: '🎁', prices: [
    p('blinkit',   'Ferrero 16 Pack',       525, 595, 11, '16 pcs', 'chocolate', true, '10 min'),
  ]},
  kinder_joy_pack_of_3: { query: 'kinder joy', canonicalName: 'Kinder Joy (Pack of 3)', category: 'Snacks', icon: '🥚', prices: [
    p('blinkit',   'Kinder Joy 3 pcs',      135, 150, 10, '3 pcs', 'chocolate', true, '10 min'),
  ]},
  mms_chocolate_bag: { query: 'mms chocolate', canonicalName: 'M&M’s Chocolate (Large)', category: 'Snacks', icon: '🍬', prices: [
    p('blinkit',   'M&Ms Large 100g',       145, 160, 9, '100g', 'chocolate', true, '10 min'),
  ]},
  snickers_home_pack: { query: 'snickers pack', canonicalName: 'Snickers Home Pack', category: 'Snacks', icon: '🍫', prices: [
    p('blinkit',   'Snickers 5 pcs',        185, 200, 7, '250g', 'chocolate', true, '10 min'),
  ]},
  mars_chocolate_bar: { query: 'mars chocolate', canonicalName: 'Mars Chocolate Bar', category: 'Snacks', icon: '🍫', prices: [
    p('blinkit',   'Mars Bar 50g',          55, 60, 8, '50g', 'chocolate', true, '10 min'),
  ]},
  bounty_chocolate_bar: { query: 'bounty chocolate', canonicalName: 'Bounty Coconut Bar', category: 'Snacks', icon: '🥥', prices: [
    p('blinkit',   'Bounty Bar 57g',        55, 60, 8, '57g', 'chocolate', true, '10 min'),
  ]},
  twix_chocolate_bar: { query: 'twix chocolate', canonicalName: 'Twix Caramel Bar', category: 'Snacks', icon: '🍫', prices: [
    p('blinkit',   'Twix Bar 50g',          55, 60, 8, '50g', 'chocolate', true, '10 min'),
  ]},
  mentos_mint_roll: { query: 'mentos', canonicalName: 'Mentos Mint Roll', category: 'Snacks', icon: '🍬', prices: [
    p('blinkit',   'Mentos 5 Pack',         45, 50, 10, '5 rolls', 'candy', true, '10 min'),
  ]},
  orbit_gum_pack: { query: 'orbit gum', canonicalName: 'Orbit Sugarfree Gum', category: 'Snacks', icon: '🍬', prices: [
    p('blinkit',   'Orbit 12 pcs',          55, 60, 8, '22g', 'candy', true, '10 min'),
  ]},
  center_fresh_gum: { query: 'center fresh', canonicalName: 'Center Fresh Gum', category: 'Snacks', icon: '🍬', prices: [
    p('blinkit',   'Center Fresh 10 pcs',   10, 10, 0, '20g', 'candy', true, '10 min'),
  ]},
  pulse_candy_pack: { query: 'pulse candy', canonicalName: 'Pulse Candy (Large Pack)', category: 'Snacks', icon: '🍬', prices: [
    p('blinkit',   'Pulse Candy 50 pcs',    50, 50, 0, '200g', 'candy', true, '10 min'),
  ]},
  kaccha_mango_bite_pack: { query: 'mango bite', canonicalName: 'Kaccha Mango Bite', category: 'Snacks', icon: '🍬', prices: [
    p('blinkit',   'Mango Bite 50 pcs',     50, 50, 0, '200g', 'candy', true, '10 min'),
  ]},
  parle_melody_pack: { query: 'melody chocolate', canonicalName: 'Parle Melody (Large)', category: 'Snacks', icon: '🍬', prices: [
    p('blinkit',   'Melody 50 pcs',         50, 50, 0, '200g', 'candy', true, '10 min'),
  ]},
  alpenliebe_gold_pack: { query: 'alpenliebe', canonicalName: 'Alpenliebe Gold (Large)', category: 'Snacks', icon: '🍬', prices: [
    p('blinkit',   'Alpenliebe 50 pcs',     50, 50, 0, '200g', 'candy', true, '10 min'),
  ]},
  kopiko_coffee_candy: { query: 'kopiko', canonicalName: 'Kopiko Coffee Candy', category: 'Snacks', icon: '🍬', prices: [
    p('blinkit',   'Kopiko 50 pcs',         50, 50, 0, '200g', 'candy', true, '10 min'),
  ]},
  fox_candy_tin: { query: 'fox candy', canonicalName: 'Fox’s Crystal Candy', category: 'Snacks', icon: '🍬', prices: [
    p('blinkit',   'Fox Tin 180g',          125, 145, 14, '180g', 'candy', true, '10 min'),
  ]},
  skittles_fruit_pack: { query: 'skittles', canonicalName: 'Skittles Fruit Candy', category: 'Snacks', icon: '🍬', prices: [
    p('blinkit',   'Skittles 45g',          45, 50, 10, '45g', 'candy', true, '10 min'),
  ]},
  polo_mint_pack: { query: 'polo mint', canonicalName: 'Polo Mint (Large)', category: 'Snacks', icon: '🍬', prices: [
    p('blinkit',   'Polo 5 Pack',           45, 50, 10, '5 rolls', 'candy', true, '10 min'),
  ]},
  halls_mentholyptus_pack: { query: 'halls candy', canonicalName: 'Halls Mentholyptus', category: 'Snacks', icon: '🍬', prices: [
    p('blinkit',   'Halls 10 pcs',          10, 10, 0, '25g', 'candy', true, '10 min'),
  ]},
  strepsils_ginger_pack: { query: 'strepsils', canonicalName: 'Strepsils (Ginger)', category: 'Snacks', icon: '🍬', prices: [
    p('blinkit',   'Strepsils 8 pcs',       35, 35, 0, '20g', 'candy', true, '10 min'),
  ]},
  vicks_cough_drops: { query: 'vicks candy', canonicalName: 'Vicks Cough Drops', category: 'Snacks', icon: '🍬', prices: [
    p('blinkit',   'Vicks 10 pcs',          10, 10, 0, '25g', 'candy', true, '10 min'),
  ]},
  nutella_3kg_bucket: { query: 'nutella 3kg', canonicalName: 'Nutella (3kg Mega Bucket)', category: 'Packaged Foods', icon: '🍫', prices: [
    p('blinkit',   'Nutella 3kg Bucket',    2495, 2850, 12, '3 kg', 'spread', true, '10 min'),
  ]},
  coke_24_can_case: { query: 'coke case', canonicalName: 'Coca Cola (24 Can Case)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Coke 24x300ml Case',    960, 960, 0, '24 pcs', 'soft drink', true, '10 min'),
  ]},
  red_bull_24_can_case: { query: 'red bull case', canonicalName: 'Red Bull (24 Can Case)', category: 'Beverages', icon: '⚡', prices: [
    p('blinkit',   'Red Bull 24x250ml',     3960, 3960, 0, '24 pcs', 'energy drink', true, '10 min'),
  ]},
  maggi_72_pack_case: { query: 'maggi case', canonicalName: 'Maggi Noodles (72 Pack Case)', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Maggi 72 Pack Box',     864, 1008, 14, '72 pcs', 'noodles', true, '10 min'),
  ]},
  parle_g_case_24: { query: 'parle g case', canonicalName: 'Parle-G (Case of 24)', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Parle-G 24x100g Case',  240, 240, 0, '24 pcs', 'biscuits', true, '10 min'),
  ]},
  marie_gold_case_24: { query: 'marie gold case', canonicalName: 'Marie Gold (Case of 24)', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Marie Gold 24x100g',    360, 360, 0, '24 pcs', 'biscuits', true, '10 min'),
  ]},
  tata_salt_case_12: { query: 'tata salt case', canonicalName: 'Tata Salt (Case of 12)', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Tata Salt 12kg Case',   300, 360, 16, '12 pcs', 'salt', true, '10 min'),
  ]},
  sugar_50kg_bag: { query: 'sugar 50kg', canonicalName: 'White Sugar (50kg Bag)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Sugar 50kg Wholesale',  2150, 2400, 10, '50 kg', 'grains', true, '10 min'),
  ]},
  amul_lassi_1l_family: { query: 'lassi 1l', canonicalName: 'Amul Lassi (1L Family Pack)', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Amul Lassi 1L Tetra',   75, 85, 12, '1 L', 'beverages', true, '10 min'),
  ]},
  davidoff_coffee_rich_aroma: { query: 'davidoff coffee', canonicalName: 'Davidoff Rich Aroma (100g)', category: 'Beverages', icon: '☕', prices: [
    p('blinkit',   'Davidoff Rich 100g',    545, 650, 16, '100g', 'coffee', true, '10 min'),
  ]},
  davidoff_coffee_fine_aroma: { query: 'davidoff fine', canonicalName: 'Davidoff Fine Aroma (100g)', category: 'Beverages', icon: '☕', prices: [
    p('blinkit',   'Davidoff Fine 100g',    545, 650, 16, '100g', 'coffee', true, '10 min'),
  ]},
  twinings_english_breakfast: { query: 'twinings tea', canonicalName: 'Twinings English Breakfast', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Twinings 25 bags',      345, 420, 17, '25 bags', 'tea', true, '10 min'),
  ]},
  organic_india_tulsi_green: { query: 'tulsi green tea', canonicalName: 'Organic India Tulsi Green', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Organic India 25 bags', 175, 210, 16, '25 bags', 'tea', true, '10 min'),
  ]},
  paper_boat_aamras_1l: { query: 'paper boat aamras', canonicalName: 'Paper Boat Aamras (1L)', category: 'Beverages', icon: '🥭', prices: [
    p('blinkit',   'Paper Boat Aamras 1L',  125, 150, 16, '1 L', 'beverages', true, '10 min'),
  ]},
  paper_boat_jaljeera_1l: { query: 'paper boat jaljeera', canonicalName: 'Paper Boat Jaljeera (1L)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Paper Boat Jaljeera 1L', 95, 115, 17, '1 L', 'beverages', true, '10 min'),
  ]},
  mountain_dew_1_25l: { query: 'mountain dew', canonicalName: 'Mountain Dew (1.25 L)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Dew 1.25L Bottle',      65, 65, 0, '1.25 L', 'soft drink', true, '10 min'),
  ]},
  seven_up_1_25l: { query: '7up', canonicalName: '7Up (1.25 L)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   '7Up 1.25L Bottle',      65, 65, 0, '1.25 L', 'soft drink', true, '10 min'),
  ]},
  mirinda_1_25l: { query: 'mirinda', canonicalName: 'Mirinda (1.25 L)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Mirinda 1.25L Bottle',  65, 65, 0, '1.25 L', 'soft drink', true, '10 min'),
  ]},
  oreo_family_pack_original: { query: 'oreo family pack', canonicalName: 'Oreo Original (Family Pack)', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Oreo Family 300g',      85, 100, 15, '300g', 'biscuits', true, '10 min'),
  ]},
  dark_fantasy_choco_fills_mega: { query: 'dark fantasy mega', canonicalName: 'Dark Fantasy Choco Fills (Mega)', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Dark Fantasy 600g',     185, 225, 17, '600g', 'biscuits', true, '10 min'),
  ]},
  good_day_cashew_family: { query: 'good day family', canonicalName: 'Good Day Cashew (Family Pack)', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Good Day 600g',         145, 175, 17, '600g', 'biscuits', true, '10 min'),
  ]},
  toor_dal_2kg_bulk: { query: 'toor dal 2kg', canonicalName: 'Toor Dal (2kg Bulk)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Toor 2kg',      285, 330, 14, '2 kg', 'pulses', true, '10 min'),
  ]},
  moong_dal_2kg_bulk: { query: 'moong dal 2kg', canonicalName: 'Moong Dal (2kg Bulk)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Moong 2kg',     265, 310, 14, '2 kg', 'pulses', true, '10 min'),
  ]},
  soya_chunks_1kg_bulk: { query: 'soya chunks 1kg', canonicalName: 'Soya Chunks (1kg Mega)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Soya 1kg',      125, 150, 16, '1 kg', 'soya', true, '10 min'),
  ]},
  kelloggs_muesli_fruit_nut_750g: { query: 'muesli 750g', canonicalName: 'Kellogg’s Muesli (750g)', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Kelloggs Fruit & Nut',  345, 420, 17, '750g', 'cereal', true, '10 min'),
  ]},
  saffola_gold_1l_bottle: { query: 'saffola gold 1l', canonicalName: 'Saffola Gold (1L Bottle)', category: 'Packaged Foods', icon: '🛢️', prices: [
    p('blinkit',   'Saffola Gold 1L',       185, 210, 12, '1 L', 'oil', true, '10 min'),
  ]},
  fortune_soyabean_1l_bottle: { query: 'soyabean oil 1l', canonicalName: 'Fortune Soyabean (1L)', category: 'Packaged Foods', icon: '🛢️', prices: [
    p('blinkit',   'Fortune Soyabean 1L',   125, 155, 19, '1 L', 'oil', true, '10 min'),
  ]},
  amul_cow_ghee_1l: { query: 'amul cow ghee', canonicalName: 'Amul Cow Ghee (1L)', category: 'Dairy', icon: '🧈', prices: [
    p('blinkit',   'Amul Cow Ghee 1L',      585, 650, 10, '1 L', 'ghee', true, '10 min'),
  ]},
  patanjali_honey_1kg: { query: 'patanjali honey', canonicalName: 'Patanjali Honey (1kg)', category: 'Packaged Foods', icon: '🍯', prices: [
    p('blinkit',   'Patanjali Honey 1kg',   325, 380, 14, '1 kg', 'honey', true, '10 min'),
  ]},
  dabur_chyawanprash_1kg: { query: 'chyawanprash 1kg', canonicalName: 'Dabur Chyawanprash (1kg)', category: 'Packaged Foods', icon: '🏺', prices: [
    p('blinkit',   'Dabur Chyawanprash',    345, 395, 12, '1 kg', 'health', true, '10 min'),
  ]},
  sugar_free_gold_pellets: { query: 'sugar free gold', canonicalName: 'Sugar Free Gold (500 tabs)', category: 'Packaged Foods', icon: '💊', prices: [
    p('blinkit',   'Sugar Free Gold 500',   285, 320, 11, '500 tabs', 'sugar free', true, '10 min'),
  ]},
  stevia_natural_sweetener: { query: 'stevia', canonicalName: 'Stevia Natural (100 sachets)', category: 'Packaged Foods', icon: '🌿', prices: [
    p('blinkit',   'Sugar Free Green 100',  185, 210, 12, '100 sachets', 'sugar free', true, '10 min'),
  ]},
  peanut_butter_unsweetened: { query: 'unsweetened peanut butter', canonicalName: 'Peanut Butter (Unsweetened)', category: 'Packaged Foods', icon: '🥜', prices: [
    p('blinkit',   'Pintola Unsweetened',   185, 220, 16, '350g', 'peanut butter', true, '10 min'),
  ]},
  almond_butter_premium: { query: 'almond butter', canonicalName: 'Premium Almond Butter', category: 'Packaged Foods', icon: '🥜', prices: [
    p('blinkit',   'Urban Platter Almond',  485, 550, 12, '200g', 'peanut butter', true, '10 min'),
  ]},
  quinoa_tri_color: { query: 'tricolor quinoa', canonicalName: 'Quinoa (Tri-Color)', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Urban Platter Quinoa',  325, 380, 14, '500g', 'quinoa', true, '10 min'),
  ]},
  chia_seeds_premium_500g: { query: 'chia seeds 500g', canonicalName: 'Chia Seeds (500g Mega)', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Urban Platter Chia',    325, 380, 14, '500g', 'health food', true, '10 min'),
  ]},
  flax_seeds_roasted: { query: 'flax seeds', canonicalName: 'Roasted Flax Seeds', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Urban Platter Flax',    145, 175, 17, '250g', 'health food', true, '10 min'),
  ]},
  pumpkin_seeds_raw: { query: 'raw pumpkin seeds', canonicalName: 'Raw Pumpkin Seeds', category: 'Packaged Foods', icon: '🎃', prices: [
    p('blinkit',   'Urban Platter Pumpkin', 285, 350, 18, '250g', 'health food', true, '10 min'),
  ]},
  sunflower_seeds_raw: { query: 'sunflower seeds', canonicalName: 'Raw Sunflower Seeds', category: 'Packaged Foods', icon: '🌻', prices: [
    p('blinkit',   'Urban Platter Sun',     185, 220, 16, '250g', 'health food', true, '10 min'),
  ]},
  goji_berries_dried: { query: 'goji berries', canonicalName: 'Dried Goji Berries', category: 'Snacks', icon: '🍒', prices: [
    p('blinkit',   'Urban Platter Goji',    425, 500, 15, '200g', 'dry fruits', true, '10 min'),
  ]},
  cranberries_dried: { query: 'cranberries', canonicalName: 'Dried Cranberries', category: 'Snacks', icon: '🍒', prices: [
    p('blinkit',   'Urban Platter Cran',    325, 380, 14, '250g', 'dry fruits', true, '10 min'),
  ]},
  blueberries_dried: { query: 'dried blueberries', canonicalName: 'Dried Blueberries', category: 'Snacks', icon: '🫐', prices: [
    p('blinkit',   'Urban Platter Blue',    485, 550, 12, '200g', 'dry fruits', true, '10 min'),
  ]},
  walnut_kernels_premium_500g: { query: 'walnuts 500g', canonicalName: 'Walnut Kernels (500g)', category: 'Snacks', icon: '🥜', prices: [
    p('blinkit',   'Premium Akhrot 500g',   645, 750, 14, '500g', 'dry fruits', true, '10 min'),
  ]},
  pistachios_roasted_salted_500g: { query: 'pista 500g', canonicalName: 'Pistachios (500g Mega)', category: 'Snacks', icon: '🥜', prices: [
    p('blinkit',   'Happilo Pista 500g',    845, 950, 11, '500g', 'dry fruits', true, '10 min'),
  ]},
  cashew_whole_premium_1kg: { query: 'kaju 1kg', canonicalName: 'Premium Cashews (1kg Mega)', category: 'Snacks', icon: '🥜', prices: [
    p('blinkit',   'Happilo Kaju 1kg',      945, 1100, 14, '1 kg', 'dry fruits', true, '10 min'),
  ]},
  almonds_premium_1kg: { query: 'badam 1kg', canonicalName: 'Premium Almonds (1kg Mega)', category: 'Snacks', icon: '🥜', prices: [
    p('blinkit',   'Happilo Badam 1kg',     845, 950, 11, '1 kg', 'dry fruits', true, '10 min'),
  ]},
  mixed_nuts_mega_pack: { query: 'mixed nuts', canonicalName: 'Mixed Nuts (Party Pack)', category: 'Snacks', icon: '🥜', prices: [
    p('blinkit',   'Happilo Party Mix',     485, 550, 12, '500g', 'dry fruits', true, '10 min'),
  ]},
  tata_sampann_chana_dal: { query: 'tata chana dal', canonicalName: 'Tata Sampann Chana Dal', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Chana Dal 1kg',    125, 145, 14, '1 kg', 'pulses', true, '10 min'),
  ]},
  tata_sampann_kabuli_chana: { query: 'tata kabuli chana', canonicalName: 'Tata Sampann Kabuli Chana', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Kabuli 1kg',       185, 210, 12, '1 kg', 'pulses', true, '10 min'),
  ]},
  tata_sampann_kala_chana: { query: 'tata kala chana', canonicalName: 'Tata Sampann Kala Chana', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Kala Chana 1kg',   115, 135, 14, '1 kg', 'pulses', true, '10 min'),
  ]},
  fortune_maida_1kg: { query: 'maida 1kg', canonicalName: 'Fortune Maida (1kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Fortune Maida 1kg',     45, 55, 18, '1 kg', 'flour', true, '10 min'),
  ]},
  fortune_suji_1kg: { query: 'suji 1kg', canonicalName: 'Fortune Suji (1kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Fortune Suji 1kg',      55, 65, 15, '1 kg', 'flour', true, '10 min'),
  ]},
  fortune_besan_1kg_premium: { query: 'besan 1kg', canonicalName: 'Fortune Besan (1kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Fortune Besan 1kg',     105, 125, 16, '1 kg', 'flour', true, '10 min'),
  ]},
  maaza_600ml_bottle: { query: 'maaza 600ml', canonicalName: 'Maaza Mango Drink (600ml)', category: 'Beverages', icon: '🥭', prices: [
    p('blinkit',   'Maaza 600ml Bottle',    40, 40, 0, '600ml', 'beverages', true, '10 min'),
  ]},
  sprite_zero_750ml: { query: 'sprite zero', canonicalName: 'Sprite Zero (750ml)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Sprite Zero 750ml',     45, 45, 0, '750ml', 'soft drink', true, '10 min'),
  ]},
  kurkure_chilli_chatka: { query: 'chilli chatka', canonicalName: 'Kurkure Chilli Chatka', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Kurkure Chilli 90g',    20, 20, 0, '90g', 'snacks', true, '10 min'),
  ]},
  bingo_tedhe_medhe_masala: { query: 'tedhe medhe', canonicalName: 'Bingo! Tedhe Medhe', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Tedhe Medhe 100g',      20, 20, 0, '100g', 'snacks', true, '10 min'),
  ]},
  lays_cream_onion_50g: { query: 'lays cream onion', canonicalName: 'Lays Cream & Onion', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Lays Onion 50g',        20, 20, 0, '50g', 'chips', true, '10 min'),
  ]},
  lays_tomato_50g: { query: 'lays tomato', canonicalName: 'Lays Spanish Tomato', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Lays Tomato 50g',       20, 20, 0, '50g', 'chips', true, '10 min'),
  ]},
  tetley_ginger_lemon_honey: { query: 'tetley ginger', canonicalName: 'Tetley Ginger Lemon Honey', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Tetley Ginger 25 bags', 185, 220, 16, '25 bags', 'tea', true, '10 min'),
  ]},
  twining_pure_green_tea: { query: 'twining green tea', canonicalName: 'Twinings Pure Green Tea', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Twinings Green 25 bags', 385, 450, 14, '25 bags', 'tea', true, '10 min'),
  ]},
  sesame_oil_1l_premium: { query: 'sesame oil', canonicalName: 'Premium Sesame Oil (1L)', category: 'Packaged Foods', icon: '🫙', prices: [
    p('blinkit',   'Idhayam Sesame 1L',     385, 450, 14, '1 L', 'oil', true, '10 min'),
  ]},
  rice_flour_1kg_pack: { query: 'rice flour', canonicalName: 'Rice Flour (1kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Organic Rice Flour',    85, 110, 22, '1 kg', 'flour', true, '10 min'),
  ]},
  kala_jeera_seeds: { query: 'kala jeera', canonicalName: 'Black Cumin (Kala Jeera)', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Catch Kala Jeera',      125, 150, 17, '50g', 'spices', true, '10 min'),
  ]},
  star_anise_spices: { query: 'star anise', canonicalName: 'Star Anise (Chakra Phool)', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Catch Star Anise',      85, 110, 22, '50g', 'spices', true, '10 min'),
  ]},
  mace_javitri_spices: { query: 'javitri', canonicalName: 'Mace (Javitri)', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Catch Javitri 50g',     185, 220, 16, '50g', 'spices', true, '10 min'),
  ]},
  nutmeg_jaiphal_spices: { query: 'jaiphal', canonicalName: 'Nutmeg (Jaiphal)', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Catch Nutmeg 2 pcs',    45, 55, 18, '2 pcs', 'spices', true, '10 min'),
  ]},
  white_pepper_seeds: { query: 'white pepper', canonicalName: 'White Pepper Whole', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Catch White Pepper',    125, 155, 19, '50g', 'spices', true, '10 min'),
  ]},
  fennel_seeds_thick: { query: 'thick saunf', canonicalName: 'Fennel Seeds (Thick)', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Catch Thick Saunf',     45, 60, 25, '100g', 'spices', true, '10 min'),
  ]},
  mustard_seeds_yellow: { query: 'yellow sarson', canonicalName: 'Yellow Mustard Seeds', category: 'Packaged Foods', icon: '🧂', prices: [
    p('blinkit',   'Catch Yellow Sarson',   35, 45, 22, '100g', 'spices', true, '10 min'),
  ]},
  mozzarella_cheese_200g: { query: 'mozzarella cheese', canonicalName: 'Mozzarella Cheese (200g)', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Amul Mozzarella',       115, 125, 8, '200g', 'cheese', true, '10 min'),
  ]},
  gouda_cheese_200g: { query: 'gouda cheese', canonicalName: 'Gouda Cheese (200g)', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Amul Gouda Cheese',     185, 210, 12, '200g', 'cheese', true, '10 min'),
  ]},
  cheddar_cheese_200g: { query: 'cheddar cheese', canonicalName: 'Cheddar Cheese (200g)', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Britannia Cheddar',     195, 220, 11, '200g', 'cheese', true, '10 min'),
  ]},
  feta_cheese_200g: { query: 'feta cheese', canonicalName: 'Feta Cheese (200g)', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Urban Platter Feta',    385, 450, 14, '200g', 'cheese', true, '10 min'),
  ]},
  parmesan_cheese_100g: { query: 'parmesan cheese', canonicalName: 'Parmesan Cheese (100g)', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Urban Platter Parm',    485, 550, 12, '100g', 'cheese', true, '10 min'),
  ]},
  haldiram_moong_dal_200g: { query: 'moong dal snack', canonicalName: 'Haldiram Moong Dal (Snack)', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Moong Dal 200g',        55, 65, 15, '200g', 'snacks', true, '10 min'),
  ]},
  haldiram_navratan_mix_400g: { query: 'navratan mix', canonicalName: 'Haldiram Navratan Mix', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Navratan Mix 400g',     105, 125, 16, '400g', 'snacks', true, '10 min'),
  ]},
  haldiram_khatta_meetha_400g: { query: 'khatta meetha', canonicalName: 'Haldiram Khatta Meetha', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Khatta Meetha 400g',    105, 125, 16, '400g', 'snacks', true, '10 min'),
  ]},
  haldiram_cornflakes_mix_400g: { query: 'cornflakes mix', canonicalName: 'Haldiram Cornflakes Mix', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Cornflakes Mix 400g',   105, 125, 16, '400g', 'snacks', true, '10 min'),
  ]},
  oreo_strawberry_120g: { query: 'oreo strawberry', canonicalName: 'Oreo Strawberry Cream', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Oreo Strawberry 120g',  35, 35, 0, '120g', 'biscuits', true, '10 min'),
  ]},
  oreo_vanilla_120g: { query: 'oreo vanilla', canonicalName: 'Oreo Vanilla Cream', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Oreo Vanilla 120g',     35, 35, 0, '120g', 'biscuits', true, '10 min'),
  ]},
  britannia_50_50_biscuits: { query: '50-50 biscuits', canonicalName: 'Britannia 50-50 Maska', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   '50-50 Maska 200g',      35, 40, 12, '200g', 'biscuits', true, '10 min'),
  ]},
  britannia_monaco_biscuits: { query: 'monaco biscuits', canonicalName: 'Britannia Monaco Classic', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Monaco Classic 200g',   35, 40, 12, '200g', 'biscuits', true, '10 min'),
  ]},
  paper_boat_lychee_1l: { query: 'paper boat lychee', canonicalName: 'Paper Boat Lychee (1L)', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Paper Boat Lychee 1L',  125, 150, 16, '1 L', 'beverages', true, '10 min'),
  ]},
  paper_boat_santra_1l: { query: 'paper boat santra', canonicalName: 'Paper Boat Santra (1L)', category: 'Beverages', icon: '🍊', prices: [
    p('blinkit',   'Paper Boat Santra 1L',  95, 115, 17, '1 L', 'beverages', true, '10 min'),
  ]},
  b_natural_mango_1l: { query: 'b natural mango', canonicalName: 'B Natural Mango (1L)', category: 'Beverages', icon: '🥭', prices: [
    p('blinkit',   'B Natural Mango 1L',    115, 130, 11, '1 L', 'beverages', true, '10 min'),
  ]},
  b_natural_orange_1l: { query: 'b natural orange', canonicalName: 'B Natural Orange (1L)', category: 'Beverages', icon: '🍊', prices: [
    p('blinkit',   'B Natural Orange 1L',   115, 130, 11, '1 L', 'beverages', true, '10 min'),
  ]},
  green_moong_whole_1kg: { query: 'moong whole 1kg', canonicalName: 'Green Moong Whole (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Moong 1kg',     185, 210, 12, '1 kg', 'pulses', true, '10 min'),
  ]},
  black_urad_whole_1kg: { query: 'urad whole 1kg', canonicalName: 'Black Urad Whole (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Urad 1kg',      185, 210, 12, '1 kg', 'pulses', true, '10 min'),
  ]},
  horse_gram_500g_pack: { query: 'horse gram', canonicalName: 'Horse Gram (Kulthi)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Organic Horse Gram',    85, 110, 22, '500g', 'pulses', true, '10 min'),
  ]},
  soya_beans_1kg_pack: { query: 'soya beans', canonicalName: 'Soya Beans (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Organic Soya Beans',    125, 155, 19, '1 kg', 'pulses', true, '10 min'),
  ]},
  lobia_white_1kg_pack: { query: 'lobia 1kg', canonicalName: 'White Lobia (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Lobia 1kg',     115, 135, 14, '1 kg', 'pulses', true, '10 min'),
  ]},
  mccain_potato_cheese_shotz_400g: { query: 'mccain shotz', canonicalName: 'McCain Potato Cheese Shotz', category: 'Frozen Foods', icon: '🧊', prices: [
    p('blinkit',   'McCain Shotz 400g',     165, 195, 15, '400g', 'frozen', true, '10 min'),
  ]},
  mccain_chilli_garlic_bites_400g: { query: 'mccain bites', canonicalName: 'McCain Chilli Garlic Bites', category: 'Frozen Foods', icon: '🧊', prices: [
    p('blinkit',   'McCain Bites 400g',     125, 155, 19, '400g', 'frozen', true, '10 min'),
  ]},
  mccain_veggie_patty_12pcs: { query: 'mccain patty', canonicalName: 'McCain Veggie Burger Patty', category: 'Frozen Foods', icon: '🧊', prices: [
    p('blinkit',   'McCain Patty 12 pcs',   245, 290, 15, '12 pcs', 'frozen', true, '10 min'),
  ]},
  yummiez_chicken_nuggets_500g: { query: 'yummiez nuggets', canonicalName: 'Godrej Yummiez Nuggets', category: 'Frozen Foods', icon: '🧊', prices: [
    p('blinkit',   'Yummiez Chicken 500g',  285, 330, 14, '500g', 'frozen', true, '10 min'),
  ]},
  amul_gold_1l_tetra: { query: 'amul gold 1l', canonicalName: 'Amul Gold (1L Tetra)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Amul Gold 1L',          72, 72, 0, '1 L', 'milk', true, '10 min'),
  ]},
  amul_taaza_1l_tetra: { query: 'amul taaza 1l', canonicalName: 'Amul Taaza (1L Tetra)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Amul Taaza 1L',         68, 68, 0, '1 L', 'milk', true, '10 min'),
  ]},
  amul_slim_trim_1l_tetra: { query: 'amul slim 1l', canonicalName: 'Amul Slim N Trim (1L)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Amul Slim 1L',          64, 64, 0, '1 L', 'milk', true, '10 min'),
  ]},
  britannia_bourbon_150g: { query: 'bourbon biscuits', canonicalName: 'Britannia Bourbon', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Bourbon 150g',          30, 35, 14, '150g', 'biscuits', true, '10 min'),
  ]},
  britannia_little_hearts: { query: 'little hearts', canonicalName: 'Britannia Little Hearts', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Little Hearts 75g',     25, 25, 0, '75g', 'biscuits', true, '10 min'),
  ]},
  sunfeast_moms_magic_cashew: { query: 'moms magic cashew', canonicalName: 'Mom’s Magic Cashew', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Moms Magic 200g',       45, 50, 10, '200g', 'biscuits', true, '10 min'),
  ]},
  real_pineapple_juice_1l: { query: 'real pineapple', canonicalName: 'Real Pineapple Juice (1L)', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Pineapple 1L',     115, 130, 11, '1 L', 'beverages', true, '10 min'),
  ]},
  real_litchi_juice_1l: { query: 'real litchi', canonicalName: 'Real Litchi Juice (1L)', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Litchi 1L',        115, 130, 11, '1 L', 'beverages', true, '10 min'),
  ]},
  fanta_600ml_bottle: { query: 'fanta 600ml', canonicalName: 'Fanta Orange (600ml)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Fanta 600ml Bottle',    40, 40, 0, '600ml', 'beverages', true, '10 min'),
  ]},
  limca_600ml_bottle: { query: 'limca 600ml', canonicalName: 'Limca (600ml)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Limca 600ml Bottle',    40, 40, 0, '600ml', 'beverages', true, '10 min'),
  ]},
  thums_up_600ml_bottle: { query: 'thums up 600ml', canonicalName: 'Thums Up (600ml)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Thums Up 600ml Bottle', 40, 40, 0, '600ml', 'beverages', true, '10 min'),
  ]},
  corn_flour_500g_pack: { query: 'corn flour', canonicalName: 'Corn Flour (Maize)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Weikfield Corn Flour',  45, 55, 18, '500g', 'flour', true, '10 min'),
  ]},
  haldiram_bhujia_sev_1kg: { query: 'bhujia 1kg', canonicalName: 'Haldiram Bhujia Sev (1kg)', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Bhujia Sev 1kg',        245, 280, 12, '1 kg', 'snacks', true, '10 min'),
  ]},
  haldiram_aloo_bhujia_1kg: { query: 'aloo bhujia 1kg', canonicalName: 'Haldiram Aloo Bhujia (1kg)', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Aloo Bhujia 1kg',       245, 280, 12, '1 kg', 'snacks', true, '10 min'),
  ]},
  haldiram_mixture_1kg: { query: 'mixture 1kg', canonicalName: 'Haldiram Mixture (1kg)', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Mixture 1kg Pack',      245, 280, 12, '1 kg', 'snacks', true, '10 min'),
  ]},
  mother_dairy_ghee_1l: { query: 'mother dairy ghee', canonicalName: 'Mother Dairy Ghee (1L)', category: 'Dairy', icon: '🧈', prices: [
    p('blinkit',   'Mother Dairy Ghee 1L',  575, 640, 10, '1 L', 'ghee', true, '10 min'),
  ]},
  coke_zero_600ml: { query: 'coke zero 600ml', canonicalName: 'Coke Zero (600ml)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Coke Zero 600ml',       40, 40, 0, '600ml', 'soft drink', true, '10 min'),
  ]},
  pepsi_black_600ml: { query: 'pepsi black 600ml', canonicalName: 'Pepsi Black (600ml)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Pepsi Black 600ml',     40, 40, 0, '600ml', 'soft drink', true, '10 min'),
  ]},
  sprite_zero_600ml: { query: 'sprite zero 600ml', canonicalName: 'Sprite Zero (600ml)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Sprite Zero 600ml',     40, 40, 0, '600ml', 'soft drink', true, '10 min'),
  ]},
  top_ramen_curry_70g: { query: 'top ramen curry', canonicalName: 'Top Ramen Curry Noodles', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Top Ramen Curry 70g',   25, 25, 0, '70g', 'noodles', true, '10 min'),
  ]},
  top_ramen_masala_70g: { query: 'top ramen masala', canonicalName: 'Top Ramen Masala', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Top Ramen Masala 70g',  20, 20, 0, '70g', 'noodles', true, '10 min'),
  ]},
  wai_wai_ready_noodles: { query: 'wai wai noodles', canonicalName: 'Wai Wai Ready-to-Eat', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Wai Wai Veg 70g',       20, 20, 0, '70g', 'noodles', true, '10 min'),
  ]},
  chings_hakka_noodles_150g: { query: 'chings hakka', canonicalName: 'Chings Hakka Noodles', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Chings Hakka 150g',     45, 50, 10, '150g', 'noodles', true, '10 min'),
  ]},
  paper_boat_aam_panna_200ml: { query: 'aam panna', canonicalName: 'Paper Boat Aam Panna', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Paper Boat Aam Panna',  20, 20, 0, '200ml', 'beverages', true, '10 min'),
  ]},
  paper_boat_anardana_200ml: { query: 'anardana', canonicalName: 'Paper Boat Anardana', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Paper Boat Anardana',   20, 20, 0, '200ml', 'beverages', true, '10 min'),
  ]},
  britannia_bourbon_family: { query: 'bourbon family', canonicalName: 'Britannia Bourbon (Family Pack)', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Bourbon 400g Pack',     85, 100, 15, '400g', 'biscuits', true, '10 min'),
  ]},
  alphonso_mango_2pc: { query: 'alphonso mango', canonicalName: 'Alphonso Mango (2 pcs)', category: 'Fruits', icon: '🥭', prices: [
    p('blinkit',   'Alphonso Grade A',      245, 350, 30, '2 pcs', 'fruits', true, '10 min'),
  ]},
  badami_mango_1kg: { query: 'badami mango', canonicalName: 'Badami Mango (1kg)', category: 'Fruits', icon: '🥭', prices: [
    p('blinkit',   'Fresh Badami Mango',    145, 185, 21, '1 kg', 'fruits', true, '10 min'),
  ]},
  kesar_mango_1kg: { query: 'kesar mango', canonicalName: 'Kesar Mango (1kg)', category: 'Fruits', icon: '🥭', prices: [
    p('blinkit',   'Premium Kesar Mango',   185, 240, 23, '1 kg', 'fruits', true, '10 min'),
  ]},
  strawberry_fresh_200g: { query: 'strawberry', canonicalName: 'Fresh Strawberries (200g)', category: 'Fruits', icon: '🍓', prices: [
    p('blinkit',   'Mahabaleshwar Berries', 125, 165, 24, '200g', 'fruits', true, '10 min'),
  ]},
  blueberry_fresh_125g: { query: 'blueberry', canonicalName: 'Fresh Blueberries (125g)', category: 'Fruits', icon: '🫐', prices: [
    p('blinkit',   'Imported Blueberries',  285, 350, 18, '125g', 'fruits', true, '10 min'),
  ]},
  raspberry_fresh_125g: { query: 'raspberry', canonicalName: 'Fresh Raspberries (125g)', category: 'Fruits', icon: '🍓', prices: [
    p('blinkit',   'Imported Raspberries',  345, 450, 23, '125g', 'fruits', true, '10 min'),
  ]},
  pineapple_fresh_1pc: { query: 'pineapple', canonicalName: 'Fresh Pineapple (Queen)', category: 'Fruits', icon: '🍍', prices: [
    p('blinkit',   'Queen Pineapple 1pc',   85, 125, 32, '1 pc', 'fruits', true, '10 min'),
  ]},
  pomegranate_fresh_2pc: { query: 'pomegranate', canonicalName: 'Pomegranate (2 pcs)', category: 'Fruits', icon: '🍎', prices: [
    p('blinkit',   'Bhagwa Anar 2 pcs',     145, 195, 25, '2 pcs', 'fruits', true, '10 min'),
  ]},
  maggi_pazzta_cheese_macaroni: { query: 'maggi pazzta', canonicalName: 'Maggi Pazzta (Cheese)', category: 'Packaged Foods', icon: '🍝', prices: [
    p('blinkit',   'Pazzta Cheese 70g',     25, 28, 10, '70g', 'pasta', true, '10 min'),
  ]},
  maggi_pazzta_masala_penne: { query: 'maggi penne', canonicalName: 'Maggi Pazzta (Masala)', category: 'Packaged Foods', icon: '🍝', prices: [
    p('blinkit',   'Pazzta Masala 70g',     25, 28, 10, '70g', 'pasta', true, '10 min'),
  ]},
  maaza_family_1_2l: { query: 'maaza 1.2l', canonicalName: 'Maaza Mango (1.2L Bottle)', category: 'Beverages', icon: '🥭', prices: [
    p('blinkit',   'Maaza 1.2L Bottle',     65, 75, 13, '1.2 L', 'beverages', true, '10 min'),
  ]},
  slice_family_1_2l: { query: 'slice 1.2l', canonicalName: 'Slice Mango (1.2L Bottle)', category: 'Beverages', icon: '🥭', prices: [
    p('blinkit',   'Slice 1.2L Bottle',     65, 75, 13, '1.2 L', 'beverages', true, '10 min'),
  ]},
  frooti_family_1_2l: { query: 'frooti 1.2l', canonicalName: 'Frooti Mango (1.2L Bottle)', category: 'Beverages', icon: '🥭', prices: [
    p('blinkit',   'Frooti 1.2L Bottle',    60, 70, 14, '1.2 L', 'beverages', true, '10 min'),
  ]},
  bingo_mad_angles_achaari: { query: 'achaari masti', canonicalName: 'Bingo! Mad Angles Achaari', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Mad Angles Achaari',    20, 20, 0, '80g', 'snacks', true, '10 min'),
  ]},
  kurkure_puffcorn_cheese: { query: 'puffcorn cheese', canonicalName: 'Kurkure Puffcorn (Cheese)', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Puffcorn Yummy Cheese', 20, 20, 0, '60g', 'snacks', true, '10 min'),
  ]},
  haldiram_gulab_jamun_tin: { query: 'gulab jamun tin', canonicalName: 'Haldiram Gulab Jamun (Tin)', category: 'Snacks', icon: '🍯', prices: [
    p('blinkit',   'Gulab Jamun 1kg Tin',   225, 250, 10, '1 kg', 'sweets', true, '10 min'),
  ]},
  haldiram_rasgulla_tin: { query: 'rasgulla tin', canonicalName: 'Haldiram Rasgulla (Tin)', category: 'Snacks', icon: '🍯', prices: [
    p('blinkit',   'Rasgulla 1kg Tin',      225, 250, 10, '1 kg', 'sweets', true, '10 min'),
  ]},
  haldiram_soan_papdi_250g: { query: 'soan papdi', canonicalName: 'Haldiram Soan Papdi', category: 'Snacks', icon: '🍮', prices: [
    p('blinkit',   'Soan Papdi 250g',       75, 90, 16, '250g', 'sweets', true, '10 min'),
  ]},
  paper_boat_thandai_180ml: { query: 'paper boat thandai', canonicalName: 'Paper Boat Thandai', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Thandai 180ml Bottle',  35, 40, 12, '180ml', 'beverages', true, '10 min'),
  ]},
  paper_boat_badam_milk_180ml: { query: 'paper boat badam milk', canonicalName: 'Paper Boat Badam Milk', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Badam Milk 180ml',      35, 40, 12, '180ml', 'beverages', true, '10 min'),
  ]},
  paper_boat_rose_milk_180ml: { query: 'paper boat rose milk', canonicalName: 'Paper Boat Rose Milk', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Rose Milk 180ml',       35, 40, 12, '180ml', 'beverages', true, '10 min'),
  ]},
  rajma_chitra_1kg_pack: { query: 'rajma chitra', canonicalName: 'Rajma Chitra (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Rajma Chitra',  165, 195, 15, '1 kg', 'pulses', true, '10 min'),
  ]},
  rajma_jammu_1kg_pack: { query: 'rajma jammu', canonicalName: 'Rajma Jammu (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Rajma Jammu',   185, 220, 16, '1 kg', 'pulses', true, '10 min'),
  ]},
  kabuli_chana_small_1kg: { query: 'kabuli chana small', canonicalName: 'Kabuli Chana (Small)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Kabuli 1kg',    155, 185, 16, '1 kg', 'pulses', true, '10 min'),
  ]},
  green_peas_dried_1kg: { query: 'green peas dried', canonicalName: 'Dried Green Peas', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Organic Green Peas',    95, 125, 24, '1 kg', 'pulses', true, '10 min'),
  ]},
  white_peas_dried_1kg: { query: 'white peas dried', canonicalName: 'Dried White Peas', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Organic White Peas',    85, 115, 26, '1 kg', 'pulses', true, '10 min'),
  ]},
  haldiram_mini_samosa_200g: { query: 'mini samosa', canonicalName: 'Haldiram Mini Samosa', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Mini Samosa 200g',      65, 80, 18, '200g', 'snacks', true, '10 min'),
  ]},
  haldiram_kachori_200g: { query: 'kachori snack', canonicalName: 'Haldiram Kachori (Snack)', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Kachori 200g Pack',     65, 80, 18, '200g', 'snacks', true, '10 min'),
  ]},
  amul_gold_200ml_6pack: { query: 'amul gold 6 pack', canonicalName: 'Amul Gold (200ml x 6)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Amul Gold 6-Pack',      120, 120, 0, '1.2 L', 'milk', true, '10 min'),
  ]},
  amul_taaza_200ml_6pack: { query: 'amul taaza 6 pack', canonicalName: 'Amul Taaza (200ml x 6)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Amul Taaza 6-Pack',     108, 108, 0, '1.2 L', 'milk', true, '10 min'),
  ]},
  gowardhan_ghee_1l: { query: 'gowardhan ghee', canonicalName: 'Gowardhan Pure Ghee (1L)', category: 'Dairy', icon: '🧈', prices: [
    p('blinkit',   'Gowardhan Ghee 1L',     585, 650, 10, '1 L', 'ghee', true, '10 min'),
  ]},
  milk_food_ghee_1l: { query: 'milk food ghee', canonicalName: 'Milk Food Pure Ghee (1L)', category: 'Dairy', icon: '🧈', prices: [
    p('blinkit',   'Milk Food Ghee 1L',     565, 620, 9, '1 L', 'ghee', true, '10 min'),
  ]},
  heritage_cow_ghee_1l: { query: 'heritage ghee', canonicalName: 'Heritage Cow Ghee (1L)', category: 'Dairy', icon: '🧈', prices: [
    p('blinkit',   'Heritage Ghee 1L',      595, 660, 10, '1 L', 'ghee', true, '10 min'),
  ]},
  coke_1l_bottle: { query: 'coke 1l', canonicalName: 'Coca Cola (1L Bottle)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Coke 1L Bottle',        60, 60, 0, '1 L', 'soft drink', true, '10 min'),
  ]},
  pepsi_1l_bottle: { query: 'pepsi 1l', canonicalName: 'Pepsi (1L Bottle)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Pepsi 1L Bottle',       60, 60, 0, '1 L', 'soft drink', true, '10 min'),
  ]},
  sprite_1l_bottle: { query: 'sprite 1l', canonicalName: 'Sprite (1L Bottle)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Sprite 1L Bottle',      60, 60, 0, '1 L', 'soft drink', true, '10 min'),
  ]},
  thums_up_1l_bottle: { query: 'thums up 1l', canonicalName: 'Thums Up (1L Bottle)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Thums Up 1L Bottle',    60, 60, 0, '1 L', 'soft drink', true, '10 min'),
  ]},
  haldiram_murukku_200g: { query: 'murukku', canonicalName: 'Haldiram Murukku', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Murukku 200g Pack',     65, 80, 18, '200g', 'snacks', true, '10 min'),
  ]},
  haldiram_banana_chips_200g: { query: 'banana chips', canonicalName: 'Haldiram Banana Chips', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Banana Chips 200g',     75, 90, 16, '200g', 'snacks', true, '10 min'),
  ]},
  haldiram_tapioca_chips_200g: { query: 'tapioca chips', canonicalName: 'Haldiram Tapioca Chips', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Tapioca Chips 200g',    75, 90, 16, '200g', 'snacks', true, '10 min'),
  ]},
  mccain_aloo_tikki_1_5kg: { query: 'aloo tikki 1.5kg', canonicalName: 'McCain Aloo Tikki (Mega)', category: 'Frozen Foods', icon: '🧊', prices: [
    p('blinkit',   'McCain Tikki 1.5kg',    385, 450, 14, '1.5 kg', 'frozen', true, '10 min'),
  ]},
  mccain_peri_peri_fries_420g: { query: 'peri peri fries', canonicalName: 'McCain Peri Peri Fries', category: 'Frozen Foods', icon: '🧊', prices: [
    p('blinkit',   'McCain Peri Peri 420g', 165, 195, 15, '420g', 'frozen', true, '10 min'),
  ]},
  masoor_whole_1kg_pack: { query: 'masoor whole', canonicalName: 'Masoor Whole (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Masoor 1kg',    125, 155, 19, '1 kg', 'pulses', true, '10 min'),
  ]},
  chana_whole_1kg_pack: { query: 'chana whole', canonicalName: 'Chana Whole (Brown)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Chana 1kg',     115, 145, 20, '1 kg', 'pulses', true, '10 min'),
  ]},
  sting_energy_drink_250ml: { query: 'sting drink', canonicalName: 'Sting Energy Drink (250ml)', category: 'Beverages', icon: '⚡', prices: [
    p('blinkit',   'Sting Energy 250ml',    20, 20, 0, '250ml', 'beverages', true, '10 min'),
  ]},
  monster_energy_drink_350ml: { query: 'monster drink', canonicalName: 'Monster Energy (350ml)', category: 'Beverages', icon: '⚡', prices: [
    p('blinkit',   'Monster Energy 350ml',  110, 110, 0, '350ml', 'beverages', true, '10 min'),
  ]},
  red_bull_sugarfree_250ml: { query: 'red bull sugarfree', canonicalName: 'Red Bull Sugarfree', category: 'Beverages', icon: '⚡', prices: [
    p('blinkit',   'Red Bull SF 250ml',     125, 125, 0, '250ml', 'beverages', true, '10 min'),
  ]},
  real_activ_orange_1l: { query: 'real activ orange', canonicalName: 'Real Activ Orange (1L)', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Activ Orange 1L',  125, 145, 14, '1 L', 'beverages', true, '10 min'),
  ]},
  real_activ_apple_1l: { query: 'real activ apple', canonicalName: 'Real Activ Apple (1L)', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Activ Apple 1L',   125, 145, 14, '1 L', 'beverages', true, '10 min'),
  ]},
  real_activ_mixed_fruit_1l: { query: 'real activ mixed', canonicalName: 'Real Activ Mixed Fruit', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Activ Mixed 1L',   125, 145, 14, '1 L', 'beverages', true, '10 min'),
  ]},
  haldiram_diet_mix_200g: { query: 'diet mix', canonicalName: 'Haldiram Diet Mix', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Diet Mix 200g Pack',    65, 80, 18, '200g', 'snacks', true, '10 min'),
  ]},
  haldiram_lite_chiwda_200g: { query: 'lite chiwda', canonicalName: 'Haldiram Lite Chiwda', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Lite Chiwda 200g',      65, 80, 18, '200g', 'snacks', true, '10 min'),
  ]},
  haldiram_mini_bhakarwadi_200g: { query: 'bhakarwadi', canonicalName: 'Haldiram Mini Bhakarwadi', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Mini Bhakarwadi 200g',  65, 80, 18, '200g', 'snacks', true, '10 min'),
  ]},
  kelloggs_cornflakes_almond_honey: { query: 'cornflakes almond', canonicalName: 'Corn Flakes (Almond Honey)', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Kelloggs Almond Honey', 185, 210, 12, '300g', 'cereal', true, '10 min'),
  ]},
  kelloggs_cornflakes_strawberry: { query: 'cornflakes strawberry', canonicalName: 'Corn Flakes (Strawberry)', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Kelloggs Strawberry',   175, 195, 10, '300g', 'cereal', true, '10 min'),
  ]},
  arhar_dal_1kg_premium: { query: 'arhar dal 1kg', canonicalName: 'Premium Arhar Dal (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Arhar 1kg',     175, 210, 16, '1 kg', 'pulses', true, '10 min'),
  ]},
  masoor_dal_wash_1kg: { query: 'masoor dal wash', canonicalName: 'Masoor Dal Wash (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Masoor Wash',   135, 165, 18, '1 kg', 'pulses', true, '10 min'),
  ]},
  moong_chilka_dal_1kg: { query: 'moong chilka 1kg', canonicalName: 'Moong Chilka Dal (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Moong Chilka',  165, 195, 15, '1 kg', 'pulses', true, '10 min'),
  ]},
  nescafe_sunrise_200g: { query: 'nescafe sunrise', canonicalName: 'Nescafe Sunrise (200g)', category: 'Beverages', icon: '☕', prices: [
    p('blinkit',   'Nescafe Sunrise 200g',  385, 450, 14, '200g', 'coffee', true, '10 min'),
  ]},
  continental_xtra_200g: { query: 'continental coffee', canonicalName: 'Continental Xtra Coffee', category: 'Beverages', icon: '☕', prices: [
    p('blinkit',   'Continental Xtra 200g', 345, 400, 13, '200g', 'coffee', true, '10 min'),
  ]},
  davidoff_espresso_57: { query: 'davidoff espresso', canonicalName: 'Davidoff Espresso 57', category: 'Beverages', icon: '☕', prices: [
    p('blinkit',   'Davidoff Espresso 100g', 545, 650, 16, '100g', 'coffee', true, '10 min'),
  ]},
  pringles_original_107g: { query: 'pringles original', canonicalName: 'Pringles Original', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Pringles Original',     105, 105, 0, '107g', 'chips', true, '10 min'),
  ]},
  pringles_sour_cream_107g: { query: 'pringles sour cream', canonicalName: 'Pringles Sour Cream', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Pringles Sour Cream',   105, 105, 0, '107g', 'chips', true, '10 min'),
  ]},
  pringles_desi_masala_107g: { query: 'pringles masala', canonicalName: 'Pringles Desi Masala', category: 'Snacks', icon: '🍟', prices: [
    p('blinkit',   'Pringles Desi Masala',  105, 105, 0, '107g', 'chips', true, '10 min'),
  ]},
  epigamia_greek_natural: { query: 'epigamia natural', canonicalName: 'Epigamia Greek Yogurt (Natural)', category: 'Dairy', icon: '🍨', prices: [
    p('blinkit',   'Epigamia Natural 90g',  45, 50, 10, '90g', 'yogurt', true, '10 min'),
  ]},
  epigamia_greek_blueberry: { query: 'epigamia blueberry', canonicalName: 'Epigamia Greek (Blueberry)', category: 'Dairy', icon: '🍨', prices: [
    p('blinkit',   'Epigamia Blueberry 90g', 60, 65, 7, '90g', 'yogurt', true, '10 min'),
  ]},
  coke_can_250ml: { query: 'coke can 250ml', canonicalName: 'Coke (250ml Can)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Coke Can 250ml',        35, 35, 0, '250ml', 'soft drink', true, '10 min'),
  ]},
  pepsi_can_250ml: { query: 'pepsi can 250ml', canonicalName: 'Pepsi (250ml Can)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Pepsi Can 250ml',       35, 35, 0, '250ml', 'soft drink', true, '10 min'),
  ]},
  paper_boat_kokum_200ml: { query: 'kokum drink', canonicalName: 'Paper Boat Kokum', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Paper Boat Kokum',      20, 20, 0, '200ml', 'beverages', true, '10 min'),
  ]},
  bajra_atta_1kg_pack: { query: 'bajra atta', canonicalName: 'Bajra Atta (1kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Organic Bajra Atta',    85, 110, 22, '1 kg', 'flour', true, '10 min'),
  ]},
  jowar_atta_1kg_pack: { query: 'jowar atta', canonicalName: 'Jowar Atta (1kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Organic Jowar Atta',    95, 125, 24, '1 kg', 'flour', true, '10 min'),
  ]},
  ragi_atta_1kg_pack: { query: 'ragi atta', canonicalName: 'Ragi Atta (1kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Organic Ragi Atta',     95, 125, 24, '1 kg', 'flour', true, '10 min'),
  ]},
  makka_atta_1kg_pack: { query: 'makka atta', canonicalName: 'Maize Atta (1kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Fortune Makka Atta',    65, 80, 18, '1 kg', 'flour', true, '10 min'),
  ]},
  haldiram_navratan_mix_1kg: { query: 'navratan 1kg', canonicalName: 'Haldiram Navratan (1kg)', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Navratan 1kg Mega',     245, 280, 12, '1 kg', 'snacks', true, '10 min'),
  ]},
  haldiram_khatta_meetha_1kg: { query: 'khatta meetha 1kg', canonicalName: 'Haldiram Khatta Meetha (1kg)', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Khatta Meetha 1kg',     245, 280, 12, '1 kg', 'snacks', true, '10 min'),
  ]},
  real_activ_fiber_orange: { query: 'activ fiber orange', canonicalName: 'Real Activ Fiber + Orange', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Activ Fiber 1L',   145, 175, 17, '1 L', 'beverages', true, '10 min'),
  ]},
  real_activ_fiber_mango: { query: 'activ fiber mango', canonicalName: 'Real Activ Fiber + Mango', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Activ Fiber 1L',   145, 175, 17, '1 L', 'beverages', true, '10 min'),
  ]},
  green_moong_split_1kg: { query: 'moong split 1kg', canonicalName: 'Green Moong Split (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Moong Split',   175, 210, 16, '1 kg', 'pulses', true, '10 min'),
  ]},
  black_urad_split_1kg: { query: 'urad split 1kg', canonicalName: 'Black Urad Split (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Urad Split',    175, 210, 16, '1 kg', 'pulses', true, '10 min'),
  ]},
  rajma_red_1kg_pack: { query: 'rajma red', canonicalName: 'Rajma Red (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Rajma Red',     185, 220, 16, '1 kg', 'pulses', true, '10 min'),
  ]},
  kabuli_chana_large_1kg: { query: 'kabuli chana large', canonicalName: 'Kabuli Chana (Large)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Fortune Kabuli Large',  195, 240, 19, '1 kg', 'pulses', true, '10 min'),
  ]},
  mother_dairy_paneer_400g: { query: 'mother dairy paneer 400g', canonicalName: 'Mother Dairy Paneer (400g)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Mother Dairy 400g',     185, 210, 12, '400g', 'paneer', true, '10 min'),
  ]},
  amul_malai_paneer_400g: { query: 'amul paneer 400g', canonicalName: 'Amul Malai Paneer (400g)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Amul Malai 400g',       195, 220, 11, '400g', 'paneer', true, '10 min'),
  ]},
  milky_mist_paneer_400g: { query: 'milky mist paneer 400g', canonicalName: 'Milky Mist Paneer (400g)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Milky Mist 400g',       185, 210, 12, '400g', 'paneer', true, '10 min'),
  ]},
  coke_300ml_bottle: { query: 'coke 300ml', canonicalName: 'Coca Cola (300ml)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Coke 300ml Bottle',     25, 25, 0, '300ml', 'soft drink', true, '10 min'),
  ]},
  pepsi_300ml_bottle: { query: 'pepsi 300ml', canonicalName: 'Pepsi (300ml)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Pepsi 300ml Bottle',    25, 25, 0, '300ml', 'soft drink', true, '10 min'),
  ]},
  sprite_300ml_bottle: { query: 'sprite 300ml', canonicalName: 'Sprite (300ml)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Sprite 300ml Bottle',   25, 25, 0, '300ml', 'soft drink', true, '10 min'),
  ]},
  seven_up_2l_family: { query: '7up 2l', canonicalName: '7Up (2.25L Family Pack)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   '7Up 2.25L Bottle',      95, 95, 0, '2.25 L', 'soft drink', true, '10 min'),
  ]},
  mountain_dew_2l_family: { query: 'mountain dew 2l', canonicalName: 'Mountain Dew (2.25L)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Dew 2.25L Bottle',      95, 95, 0, '2.25 L', 'soft drink', true, '10 min'),
  ]},
  mirinda_2l_family: { query: 'mirinda 2l', canonicalName: 'Mirinda (2.25L)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Mirinda 2.25L Bottle',  95, 95, 0, '2.25 L', 'soft drink', true, '10 min'),
  ]},
  mccain_french_fries_1_5kg: { query: 'french fries 1.5kg', canonicalName: 'McCain Fries (Mega Pack)', category: 'Frozen Foods', icon: '🧊', prices: [
    p('blinkit',   'McCain Fries 1.5kg',    345, 395, 12, '1.5 kg', 'frozen', true, '10 min'),
  ]},
  mccain_veggie_fingers_1kg: { query: 'veggie fingers 1kg', canonicalName: 'McCain Fingers (1kg)', category: 'Frozen Foods', icon: '🧊', prices: [
    p('blinkit',   'McCain Fingers 1kg',    285, 330, 14, '1 kg', 'frozen', true, '10 min'),
  ]},
  haldiram_bhakarwadi_1kg: { query: 'bhakarwadi 1kg', canonicalName: 'Haldiram Bhakarwadi (1kg)', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Bhakarwadi 1kg Mega',   245, 280, 12, '1 kg', 'snacks', true, '10 min'),
  ]},
  haldiram_diet_mix_1kg: { query: 'diet mix 1kg', canonicalName: 'Haldiram Diet Mix (1kg)', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Diet Mix 1kg Mega',     245, 280, 12, '1 kg', 'snacks', true, '10 min'),
  ]},
  real_activ_fiber_mixed: { query: 'activ fiber mixed', canonicalName: 'Real Activ Fiber + Mixed', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Activ Fiber 1L',   145, 175, 17, '1 L', 'beverages', true, '10 min'),
  ]},
  real_activ_fiber_apple: { query: 'activ fiber apple', canonicalName: 'Real Activ Fiber + Apple', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Activ Fiber 1L',   145, 175, 17, '1 L', 'beverages', true, '10 min'),
  ]},
  tata_sampann_moong_dal_1kg: { query: 'tata moong dal', canonicalName: 'Tata Sampann Moong Dal', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Moong Dal 1kg',    165, 195, 15, '1 kg', 'pulses', true, '10 min'),
  ]},
  tata_sampann_toor_dal_1kg: { query: 'tata toor dal', canonicalName: 'Tata Sampann Toor Dal', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Toor Dal 1kg',     175, 210, 16, '1 kg', 'pulses', true, '10 min'),
  ]},
  tata_sampann_urad_dal_1kg: { query: 'tata urad dal', canonicalName: 'Tata Sampann Urad Dal', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Urad Dal 1kg',     175, 210, 16, '1 kg', 'pulses', true, '10 min'),
  ]},
  maggi_oats_noodles: { query: 'maggi oats', canonicalName: 'Maggi Nutrilicious Oats', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Maggi Oats 4-Pack',     95, 110, 13, '280g', 'noodles', true, '10 min'),
  ]},
  lipton_iced_tea_lemon: { query: 'iced tea lemon', canonicalName: 'Lipton Iced Tea (Lemon)', category: 'Beverages', icon: '🍹', prices: [
    p('blinkit',   'Lipton Lemon 250ml',    35, 35, 0, '250ml', 'beverages', true, '10 min'),
  ]},
  lipton_iced_tea_peach: { query: 'iced tea peach', canonicalName: 'Lipton Iced Tea (Peach)', category: 'Beverages', icon: '🍹', prices: [
    p('blinkit',   'Lipton Peach 250ml',    35, 35, 0, '250ml', 'beverages', true, '10 min'),
  ]},
  lipton_iced_tea_berry: { query: 'iced tea berry', canonicalName: 'Lipton Iced Tea (Berry)', category: 'Beverages', icon: '🍹', prices: [
    p('blinkit',   'Lipton Berry 250ml',    35, 35, 0, '250ml', 'beverages', true, '10 min'),
  ]},
  real_activ_fiber_pomegranate: { query: 'activ fiber pomegranate', canonicalName: 'Real Activ Fiber + Pome', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Activ Pome 1L',    145, 175, 17, '1 L', 'beverages', true, '10 min'),
  ]},
  real_activ_fiber_peach: { query: 'activ fiber peach', canonicalName: 'Real Activ Fiber + Peach', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Activ Peach 1L',   145, 175, 17, '1 L', 'beverages', true, '10 min'),
  ]},
  britannia_maska_chaska: { query: 'maska chaska', canonicalName: 'Britannia 50-50 Maska Chaska', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Maska Chaska 200g',     35, 40, 12, '200g', 'biscuits', true, '10 min'),
  ]},
  britannia_monaco_pizza: { query: 'monaco pizza', canonicalName: 'Britannia Monaco Pizza', category: 'Snacks', icon: '🍪', prices: [
    p('blinkit',   'Monaco Pizza 200g',     35, 40, 12, '200g', 'biscuits', true, '10 min'),
  ]},
  nestle_a_plus_curd_1kg: { query: 'nestle curd', canonicalName: 'Nestle A+ Curd (1kg)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Nestle A+ Curd 1kg',    95, 110, 13, '1 kg', 'curd', true, '10 min'),
  ]},
  saffola_masala_oats_peppy_400g: { query: 'peppy tomato oats 400g', canonicalName: 'Saffola Masala Oats (Peppy)', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Saffola Peppy 400g',    165, 195, 15, '400g', 'oats', true, '10 min'),
  ]},
  saffola_masala_oats_classic_400g: { query: 'classic masala oats 400g', canonicalName: 'Saffola Masala Oats (Classic)', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Saffola Classic 400g',  165, 195, 15, '400g', 'oats', true, '10 min'),
  ]},
  saffola_masala_oats_veggie_400g: { query: 'veggie twist oats 400g', canonicalName: 'Saffola Masala Oats (Veggie)', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Saffola Veggie 400g',   165, 195, 15, '400g', 'oats', true, '10 min'),
  ]},
  coke_mini_can_150ml: { query: 'coke mini can', canonicalName: 'Coke (150ml Mini Can)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Coke Mini 150ml',       20, 20, 0, '150ml', 'soft drink', true, '10 min'),
  ]},
  kelloggs_chocos_moons: { query: 'chocos moons', canonicalName: 'Chocos (Moons & Stars)', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Chocos Moons 300g',     185, 210, 12, '300g', 'cereal', true, '10 min'),
  ]},
  kelloggs_chocos_fills: { query: 'chocos fills', canonicalName: 'Chocos Fills (300g)', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Chocos Fills 300g',     195, 220, 11, '300g', 'cereal', true, '10 min'),
  ]},
  real_activ_fiber_grape: { query: 'activ fiber grape', canonicalName: 'Real Activ Fiber + Grape', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Activ Grape 1L',   145, 175, 17, '1 L', 'beverages', true, '10 min'),
  ]},
  real_activ_fiber_apricot: { query: 'activ fiber apricot', canonicalName: 'Real Activ Fiber + Apricot', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Activ Apricot 1L', 145, 175, 17, '1 L', 'beverages', true, '10 min'),
  ]},
  amul_whipping_cream_250ml: { query: 'whipping cream', canonicalName: 'Amul Whipping Cream', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Amul Whipping 250ml',   125, 140, 10, '250ml', 'cream', true, '10 min'),
  ]},
  milky_mist_greek_natural: { query: 'milky mist greek', canonicalName: 'Milky Mist Greek Yogurt', category: 'Dairy', icon: '🍨', prices: [
    p('blinkit',   'Milky Mist Greek 100g', 55, 60, 8, '100g', 'yogurt', true, '10 min'),
  ]},
  tata_sampann_toor_dal_2kg: { query: 'tata toor dal 2kg', canonicalName: 'Tata Sampann Toor (2kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Toor Dal 2kg',     345, 410, 15, '2 kg', 'pulses', true, '10 min'),
  ]},
  tata_sampann_moong_dal_2kg: { query: 'tata moong dal 2kg', canonicalName: 'Tata Sampann Moong (2kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Moong Dal 2kg',    325, 390, 16, '2 kg', 'pulses', true, '10 min'),
  ]},
  tata_sampann_urad_dal_2kg: { query: 'tata urad dal 2kg', canonicalName: 'Tata Sampann Urad (2kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Urad Dal 2kg',     345, 410, 15, '2 kg', 'pulses', true, '10 min'),
  ]},
  coke_1_75l_family: { query: 'coke 1.75l', canonicalName: 'Coca Cola (1.75L)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Coke 1.75L Bottle',     80, 80, 0, '1.75 L', 'soft drink', true, '10 min'),
  ]},
  pepsi_1_75l_family: { query: 'pepsi 1.75l', canonicalName: 'Pepsi (1.75L)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Pepsi 1.75L Bottle',    80, 80, 0, '1.75 L', 'soft drink', true, '10 min'),
  ]},
  haldiram_moong_dal_1kg_mega: { query: 'moong dal 1kg snack', canonicalName: 'Haldiram Moong Dal (1kg)', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Moong Dal 1kg Mega',    225, 260, 13, '1 kg', 'snacks', true, '10 min'),
  ]},
  amul_lassi_rose_250ml: { query: 'amul rose lassi', canonicalName: 'Amul Lassi (Rose)', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Amul Rose Lassi',       25, 25, 0, '250ml', 'beverages', true, '10 min'),
  ]},
  amul_lassi_mango_250ml: { query: 'amul mango lassi', canonicalName: 'Amul Lassi (Mango)', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Amul Mango Lassi',      25, 25, 0, '250ml', 'beverages', true, '10 min'),
  ]},
  mother_dairy_masala_chach: { query: 'masala chach', canonicalName: 'Mother Dairy Masala Chach', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Masala Chach 200ml',    15, 15, 0, '200ml', 'beverages', true, '10 min'),
  ]},
  mother_dairy_tadka_chach: { query: 'tadka chach', canonicalName: 'Mother Dairy Tadka Chach', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Tadka Chach 200ml',     15, 15, 0, '200ml', 'beverages', true, '10 min'),
  ]},
  coke_zero_can_300ml: { query: 'coke zero can', canonicalName: 'Coke Zero (300ml Can)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Coke Zero 300ml Can',   40, 40, 0, '300ml', 'soft drink', true, '10 min'),
  ]},
  pepsi_black_can_300ml: { query: 'pepsi black can', canonicalName: 'Pepsi Black (300ml Can)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Pepsi Black 300ml Can', 40, 40, 0, '300ml', 'soft drink', true, '10 min'),
  ]},
  real_activ_fiber_peach_200ml: { query: 'activ fiber peach 200ml', canonicalName: 'Real Activ Fiber (Peach)', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Activ Peach 200ml',     30, 30, 0, '200ml', 'beverages', true, '10 min'),
  ]},
  real_activ_fiber_apple_200ml: { query: 'activ fiber apple 200ml', canonicalName: 'Real Activ Fiber (Apple)', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Activ Apple 200ml',     30, 30, 0, '200ml', 'beverages', true, '10 min'),
  ]},
  tata_sampann_toor_dal_5kg: { query: 'tata toor dal 5kg', canonicalName: 'Tata Sampann Toor (5kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Toor Dal 5kg',     825, 950, 13, '5 kg', 'pulses', true, '10 min'),
  ]},
  tata_sampann_moong_dal_5kg: { query: 'tata moong dal 5kg', canonicalName: 'Tata Sampann Moong (5kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Moong Dal 5kg',    785, 900, 12, '5 kg', 'pulses', true, '10 min'),
  ]},
  tata_sampann_urad_dal_5kg: { query: 'tata urad dal 5kg', canonicalName: 'Tata Sampann Urad (5kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Urad Dal 5kg',     825, 950, 13, '5 kg', 'pulses', true, '10 min'),
  ]},
  amul_butter_500g_pack: { query: 'amul butter 500g', canonicalName: 'Amul Butter (500g)', category: 'Dairy', icon: '🧈', prices: [
    p('blinkit',   'Amul Butter 500g',      255, 275, 7, '500g', 'butter', true, '10 min'),
  ]},
  amul_butter_100g_pack: { query: 'amul butter 100g', canonicalName: 'Amul Butter (100g)', category: 'Dairy', icon: '🧈', prices: [
    p('blinkit',   'Amul Butter 100g',      56, 60, 6, '100g', 'butter', true, '10 min'),
  ]},
  amul_garlic_herbs_butter: { query: 'garlic butter', canonicalName: 'Amul Garlic & Herbs', category: 'Dairy', icon: '🧈', prices: [
    p('blinkit',   'Garlic Butter 100g',    65, 70, 7, '100g', 'butter', true, '10 min'),
  ]},
  nescafe_classic_glass_jar: { query: 'nescafe classic jar', canonicalName: 'Nescafe Classic (Jar)', category: 'Beverages', icon: '☕', prices: [
    p('blinkit',   'Nescafe Jar 100g',      345, 380, 9, '100g', 'coffee', true, '10 min'),
  ]},
  bru_instant_glass_jar: { query: 'bru instant jar', canonicalName: 'Bru Instant (Jar)', category: 'Beverages', icon: '☕', prices: [
    p('blinkit',   'Bru Instant Jar 100g',  285, 320, 10, '100g', 'coffee', true, '10 min'),
  ]},
  knorr_hot_sour_soup: { query: 'knorr hot sour', canonicalName: 'Knorr Hot & Sour Soup', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Knorr Hot Sour 45g',    55, 65, 15, '45g', 'soup', true, '10 min'),
  ]},
  knorr_sweet_corn_soup: { query: 'knorr sweet corn', canonicalName: 'Knorr Sweet Corn Soup', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Knorr Sweet Corn 45g',  55, 65, 15, '45g', 'soup', true, '10 min'),
  ]},
  tata_sampann_masoor_dal: { query: 'tata masoor dal', canonicalName: 'Tata Sampann Masoor', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Masoor 1kg',       145, 175, 17, '1 kg', 'pulses', true, '10 min'),
  ]},

  sprite_bottle_250ml: { query: 'sprite 250ml bottle', canonicalName: 'Sprite (250ml)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Sprite 250ml Bottle',   20, 20, 0, '250ml', 'soft drink', true, '10 min'),
  ]},
  thums_up_bottle_250ml: { query: 'thums up 250ml bottle', canonicalName: 'Thums Up (250ml)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Thums Up 250ml Bottle', 20, 20, 0, '250ml', 'soft drink', true, '10 min'),
  ]},
  haldiram_soan_papdi_500g: { query: 'soan papdi 500g', canonicalName: 'Haldiram Soan Papdi (Large)', category: 'Snacks', icon: '🍮', prices: [
    p('blinkit',   'Soan Papdi 500g Pack',  145, 175, 17, '500g', 'sweets', true, '10 min'),
  ]},

  b_natural_guava_1l: { query: 'b natural guava', canonicalName: 'B Natural Guava (1L)', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'B Natural Guava 1L',    115, 130, 11, '1 L', 'beverages', true, '10 min'),
  ]},
  amul_cheese_slices_5pc: { query: 'cheese slices 100g', canonicalName: 'Amul Cheese Slices (5pc)', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Amul Slices 100g',      75, 85, 11, '100g', 'cheese', true, '10 min'),
  ]},
  amul_cheese_slices_10pc: { query: 'cheese slices 200g', canonicalName: 'Amul Cheese Slices (10pc)', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Amul Slices 200g',      145, 160, 9, '200g', 'cheese', true, '10 min'),
  ]},
  amul_cheese_slices_20pc: { query: 'cheese slices 400g', canonicalName: 'Amul Cheese Slices (20pc)', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Amul Slices 400g',      285, 310, 8, '400g', 'cheese', true, '10 min'),
  ]},
  knorr_manchow_soup: { query: 'knorr manchow', canonicalName: 'Knorr Manchow Soup', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Knorr Manchow 45g',     55, 65, 15, '45g', 'soup', true, '10 min'),
  ]},
  knorr_tomato_soup: { query: 'knorr tomato soup', canonicalName: 'Knorr Tomato Soup', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Knorr Tomato 45g',      55, 65, 15, '45g', 'soup', true, '10 min'),
  ]},
  tata_sampann_rajma_1kg: { query: 'tata rajma', canonicalName: 'Tata Sampann Rajma', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Rajma 1kg',        195, 230, 15, '1 kg', 'pulses', true, '10 min'),
  ]},
  tata_sampann_lobia_1kg: { query: 'tata lobia', canonicalName: 'Tata Sampann Lobia', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Lobia 1kg',        145, 175, 17, '1 kg', 'pulses', true, '10 min'),
  ]},
  haldiram_chai_puri_200g: { query: 'chai puri', canonicalName: 'Haldiram Chai Puri', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Chai Puri 200g',        65, 80, 18, '200g', 'snacks', true, '10 min'),
  ]},
  haldiram_methi_puri_200g: { query: 'methi puri', canonicalName: 'Haldiram Methi Puri', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Methi Puri 200g',       65, 80, 18, '200g', 'snacks', true, '10 min'),
  ]},
  real_activ_100_orange_1l: { query: 'activ 100 orange', canonicalName: 'Real Activ 100% Orange', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Activ 100% 1L',    155, 180, 13, '1 L', 'beverages', true, '10 min'),
  ]},
  limca_family_2l: { query: 'limca 2l family', canonicalName: 'Limca (2.25L Family)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Limca 2.25L Bottle',    95, 95, 0, '2.25 L', 'soft drink', true, '10 min'),
  ]},
  fanta_family_2l: { query: 'fanta 2l family', canonicalName: 'Fanta (2.25L Family)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Fanta 2.25L Bottle',    95, 95, 0, '2.25 L', 'soft drink', true, '10 min'),
  ]},
  nescafe_classic_can_50g: { query: 'nescafe classic 50g can', canonicalName: 'Nescafe Classic (50g)', category: 'Beverages', icon: '☕', prices: [
    p('blinkit',   'Nescafe Can 50g',       185, 210, 12, '50g', 'coffee', true, '10 min'),
  ]},

  lipton_green_tea_25: { query: 'green tea 25 bags', canonicalName: 'Lipton Green Tea (25)', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Lipton Green 25ct',     155, 175, 11, '25 bags', 'tea', true, '10 min'),
  ]},
  tata_sampann_suji_500g: { query: 'tata suji', canonicalName: 'Tata Sampann Suji', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Tata Suji 500g',        45, 55, 18, '500g', 'staples', true, '10 min'),
  ]},
  tata_sampann_besan_500g: { query: 'tata besan', canonicalName: 'Tata Sampann Besan', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Tata Besan 500g',       75, 90, 16, '500g', 'staples', true, '10 min'),
  ]},
  tata_sampann_maida_500g: { query: 'tata maida', canonicalName: 'Tata Sampann Maida', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Tata Maida 500g',       45, 55, 18, '500g', 'staples', true, '10 min'),
  ]},
  haldiram_roasted_cashews: { query: 'roasted cashews', canonicalName: 'Haldiram Cashews (35g)', category: 'Snacks', icon: '🥜', prices: [
    p('blinkit',   'Roasted Cashews 35g',   85, 95, 10, '35g', 'nuts', true, '10 min'),
  ]},
  haldiram_roasted_almonds: { query: 'roasted almonds', canonicalName: 'Haldiram Almonds (35g)', category: 'Snacks', icon: '🥜', prices: [
    p('blinkit',   'Roasted Almonds 35g',   85, 95, 10, '35g', 'nuts', true, '10 min'),
  ]},
  maggi_pazzta_mushroom: { query: 'maggi mushroom pazzta', canonicalName: 'Maggi Pazzta (Mushroom)', category: 'Packaged Foods', icon: '🍝', prices: [
    p('blinkit',   'Pazzta Mushroom 70g',   25, 28, 10, '70g', 'pasta', true, '10 min'),
  ]},
  bisleri_5l_jar: { query: 'bisleri 5l jar', canonicalName: 'Bisleri (5L Jar)', category: 'Beverages', icon: '💧', prices: [
    p('blinkit',   'Bisleri 5L Jar',        65, 75, 13, '5 L', 'water', true, '10 min'),
  ]},
  bisleri_1l_case_12: { query: 'bisleri 1l case', canonicalName: 'Bisleri (1L x 12)', category: 'Beverages', icon: '💧', prices: [
    p('blinkit',   'Bisleri 1L Case',       225, 240, 6, '12 L', 'water', true, '10 min'),
  ]},
  real_activ_100_grape_1l: { query: 'activ 100 grape', canonicalName: 'Real Activ 100% Grape', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Activ 100% 1L',    155, 180, 13, '1 L', 'beverages', true, '10 min'),
  ]},
  real_activ_100_pome_1l: { query: 'activ 100 pomegranate', canonicalName: 'Real Activ 100% Pome', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Activ 100% 1L',    155, 180, 13, '1 L', 'beverages', true, '10 min'),
  ]},
  lipton_iced_tea_lemon_1_25l: { query: 'iced tea lemon 1.25l', canonicalName: 'Lipton Lemon (1.25L)', category: 'Beverages', icon: '🍹', prices: [
    p('blinkit',   'Lipton Lemon 1.25L',    115, 130, 11, '1.25 L', 'beverages', true, '10 min'),
  ]},
  lipton_iced_tea_peach_1_25l: { query: 'iced tea peach 1.25l', canonicalName: 'Lipton Peach (1.25L)', category: 'Beverages', icon: '🍹', prices: [
    p('blinkit',   'Lipton Peach 1.25L',    115, 130, 11, '1.25 L', 'beverages', true, '10 min'),
  ]},
  red_bull_4pack: { query: 'red bull 4 pack', canonicalName: 'Red Bull (4 x 250ml)', category: 'Beverages', icon: '⚡', prices: [
    p('blinkit',   'Red Bull 4-Pack',       450, 500, 10, '1 L', 'beverages', true, '10 min'),
  ]},
  red_bull_sf_4pack: { query: 'red bull sf 4 pack', canonicalName: 'Red Bull SF (4 x 250ml)', category: 'Beverages', icon: '⚡', prices: [
    p('blinkit',   'Red Bull SF 4-Pack',    450, 500, 10, '1 L', 'beverages', true, '10 min'),
  ]},
  chings_egg_hakka_150g: { query: 'chings egg hakka', canonicalName: 'Chings Egg Hakka', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Chings Egg Hakka',      55, 60, 8, '150g', 'noodles', true, '10 min'),
  ]},
  chings_schezwan_noodle_60g: { query: 'schezwan noodles', canonicalName: 'Chings Schezwan Noodle', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Schezwan Noodle 60g',   20, 20, 0, '60g', 'noodles', true, '10 min'),
  ]},
  mother_dairy_cream_250ml: { query: 'mother dairy cream 250ml', canonicalName: 'Mother Dairy Cream', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Fresh Cream 250ml',     65, 75, 13, '250ml', 'cream', true, '10 min'),
  ]},
  mother_dairy_cream_500ml: { query: 'mother dairy cream 500ml', canonicalName: 'Mother Dairy Cream', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Fresh Cream 500ml',     120, 140, 14, '500ml', 'cream', true, '10 min'),
  ]},
  tata_sampann_urad_whole: { query: 'tata urad whole', canonicalName: 'Tata Sampann Urad Whole', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Urad Whole 1kg',   175, 210, 16, '1 kg', 'pulses', true, '10 min'),
  ]},
  tata_sampann_moong_whole: { query: 'tata moong whole', canonicalName: 'Tata Sampann Moong Whole', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Moong Whole 1kg',  175, 210, 16, '1 kg', 'pulses', true, '10 min'),
  ]},
  haldiram_mini_samosa_1kg: { query: 'mini samosa 1kg', canonicalName: 'Mini Samosa (Mega Pack)', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Mini Samosa 1kg Mega',  285, 350, 18, '1 kg', 'snacks', true, '10 min'),
  ]},
  mother_dairy_curd_cup_200g: { query: 'curd cup 200g', canonicalName: 'Mother Dairy Curd Cup', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Curd Cup 200g',         30, 30, 0, '200g', 'curd', true, '10 min'),
  ]},
  mother_dairy_curd_cup_400g: { query: 'curd cup 400g', canonicalName: 'Mother Dairy Curd Cup', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Curd Cup 400g',         55, 60, 8, '400g', 'curd', true, '10 min'),
  ]},
  amul_gouda_cheese_250g: { query: 'gouda cheese', canonicalName: 'Amul Gouda Cheese', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Amul Gouda 250g',       225, 250, 10, '250g', 'cheese', true, '10 min'),
  ]},
  amul_emmental_cheese_250g: { query: 'emmental cheese', canonicalName: 'Amul Emmental Cheese', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Amul Emmental 250g',    245, 275, 11, '250g', 'cheese', true, '10 min'),
  ]},
  haldiram_kaju_katli_250g: { query: 'kaju katli', canonicalName: 'Haldiram Kaju Katli', category: 'Snacks', icon: '🍬', prices: [
    p('blinkit',   'Kaju Katli 250g',       245, 280, 12, '250g', 'sweets', true, '10 min'),
  ]},
  haldiram_kaju_katli_500g: { query: 'kaju katli 500g', canonicalName: 'Haldiram Kaju Katli', category: 'Snacks', icon: '🍬', prices: [
    p('blinkit',   'Kaju Katli 500g',       485, 550, 12, '500g', 'sweets', true, '10 min'),
  ]},
  maggi_cup_noodles_masala: { query: 'maggi masala cup', canonicalName: 'Maggi Masala Cup', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Maggi Masala 70g',      45, 50, 10, '70g', 'noodles', true, '10 min'),
  ]},
  maggi_cup_noodles_chilli: { query: 'maggi chilli cup', canonicalName: 'Maggi Chilli Chow', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Maggi Chilli 70g',      45, 50, 10, '70g', 'noodles', true, '10 min'),
  ]},
  tata_sampann_poha_500g: { query: 'tata poha', canonicalName: 'Tata Sampann Poha', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Tata Poha 500g',        55, 65, 15, '500g', 'staples', true, '10 min'),
  ]},
  tata_sampann_daliya_500g: { query: 'tata daliya', canonicalName: 'Tata Sampann Daliya', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Tata Daliya 500g',      55, 65, 15, '500g', 'staples', true, '10 min'),
  ]},
  lipton_green_tea_tulsi_50: { query: 'green tea tulsi', canonicalName: 'Lipton Green Tulsi', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Lipton Tulsi 50ct',     285, 330, 14, '50 bags', 'tea', true, '10 min'),
  ]},
  real_activ_100_pome_200ml: { query: 'activ pome 200ml', canonicalName: 'Real Activ Pome (200ml)', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Activ Pome 200ml',      35, 35, 0, '200ml', 'beverages', true, '10 min'),
  ]},
  coke_can_330ml: { query: 'coke can 330ml', canonicalName: 'Coke (330ml Can)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Coke Can 330ml',        40, 40, 0, '330ml', 'soft drink', true, '10 min'),
  ]},
  pepsi_can_330ml: { query: 'pepsi can 330ml', canonicalName: 'Pepsi (330ml Can)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Pepsi Can 330ml',       40, 40, 0, '330ml', 'soft drink', true, '10 min'),
  ]},
  amul_masti_curd_cup_200g: { query: 'amul curd 200g', canonicalName: 'Amul Masti Dahi Cup', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Amul Dahi 200g',        30, 30, 0, '200g', 'curd', true, '10 min'),
  ]},
  amul_masti_curd_cup_400g: { query: 'amul curd 400g', canonicalName: 'Amul Masti Dahi Cup', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Amul Dahi 400g',        55, 60, 8, '400g', 'curd', true, '10 min'),
  ]},
  haldiram_peanut_chikki: { query: 'peanut chikki', canonicalName: 'Haldiram Peanut Chikki', category: 'Snacks', icon: '🍬', prices: [
    p('blinkit',   'Peanut Chikki 100g',    45, 50, 10, '100g', 'sweets', true, '10 min'),
  ]},
  haldiram_til_chikki: { query: 'til chikki', canonicalName: 'Haldiram Til Chikki', category: 'Snacks', icon: '🍬', prices: [
    p('blinkit',   'Til Chikki 100g',       55, 65, 15, '100g', 'sweets', true, '10 min'),
  ]},
  mother_dairy_lassi_sweet: { query: 'sweet lassi bottle', canonicalName: 'Mother Dairy Lassi', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Sweet Lassi 200ml',     25, 25, 0, '200ml', 'beverages', true, '10 min'),
  ]},
  mother_dairy_lassi_mango: { query: 'mango lassi bottle', canonicalName: 'Mother Dairy Lassi', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Mango Lassi 200ml',     25, 25, 0, '200ml', 'beverages', true, '10 min'),
  ]},
  tata_sampann_rajma_chitra: { query: 'tata rajma chitra', canonicalName: 'Tata Rajma Chitra', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Tata Rajma Chitra 1kg', 215, 250, 14, '1 kg', 'pulses', true, '10 min'),
  ]},
  limca_can_330ml: { query: 'limca can 330ml', canonicalName: 'Limca (330ml Can)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Limca Can 330ml',       40, 40, 0, '330ml', 'soft drink', true, '10 min'),
  ]},
  fanta_can_330ml: { query: 'fanta can 330ml', canonicalName: 'Fanta (330ml Can)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Fanta Can 330ml',       40, 40, 0, '330ml', 'soft drink', true, '10 min'),
  ]},
  b_natural_orange_200ml: { query: 'b natural orange 200ml', canonicalName: 'B Natural Orange', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'B Natural Orange',      20, 20, 0, '200ml', 'beverages', true, '10 min'),
  ]},
  knorr_lemon_coriander_soup: { query: 'lemon coriander soup', canonicalName: 'Knorr Lemon Coriander', category: 'Packaged Foods', icon: '🥣', prices: [
    p('blinkit',   'Knorr Lemon Cor 45g',   55, 65, 15, '45g', 'soup', true, '10 min'),
  ]},
  lipton_green_tea_10: { query: 'green tea 10 bags', canonicalName: 'Lipton Green Tea (10)', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Lipton Green 10ct',     65, 75, 13, '10 bags', 'tea', true, '10 min'),
  ]},
  amul_cheese_block_500g: { query: 'cheese block 500g', canonicalName: 'Amul Cheese Block', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Amul Block 500g',       285, 310, 8, '500g', 'cheese', true, '10 min'),
  ]},

  kinley_soda_750ml: { query: 'kinley soda 750ml', canonicalName: 'Kinley Soda (750ml)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Kinley Soda 750ml',     20, 20, 0, '750ml', 'soft drink', true, '10 min'),
  ]},
  kinley_soda_2l: { query: 'kinley soda 2l', canonicalName: 'Kinley Soda (2L)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Kinley Soda 2L Bottle', 40, 40, 0, '2 L', 'soft drink', true, '10 min'),
  ]},
  tata_sampann_poha_1kg: { query: 'tata poha 1kg', canonicalName: 'Tata Sampann Poha (1kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Tata Poha 1kg',         105, 125, 16, '1 kg', 'staples', true, '10 min'),
  ]},
  tata_sampann_daliya_1kg: { query: 'tata daliya 1kg', canonicalName: 'Tata Sampann Daliya (1kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
    p('blinkit',   'Tata Daliya 1kg',       105, 125, 16, '1 kg', 'staples', true, '10 min'),
  ]},
  amul_gold_1l_poly: { query: 'amul gold poly 1l', canonicalName: 'Amul Gold (1L Poly)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Amul Gold 1L Poly',     68, 68, 0, '1 L', 'milk', true, '10 min'),
  ]},
  amul_taaza_1l_poly: { query: 'amul taaza poly 1l', canonicalName: 'Amul Taaza (1L Poly)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Amul Taaza 1L Poly',    56, 56, 0, '1 L', 'milk', true, '10 min'),
  ]},
  chings_manchurian_noodle_60g: { query: 'manchurian noodles', canonicalName: 'Chings Manchurian Noodle', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Manchurian Noodle 60g', 20, 20, 0, '60g', 'noodles', true, '10 min'),
  ]},
  chings_hot_garlic_noodle_60g: { query: 'hot garlic noodles', canonicalName: 'Chings Hot Garlic Noodle', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Hot Garlic Noodle 60g', 20, 20, 0, '60g', 'noodles', true, '10 min'),
  ]},
  tata_sampann_salt_1kg: { query: 'tata salt 1kg', canonicalName: 'Tata Sampann Salt', category: 'Grains & Pulses', icon: '🧂', prices: [
    p('blinkit',   'Tata Salt 1kg',         25, 28, 10, '1 kg', 'staples', true, '10 min'),
  ]},
  tata_sampann_rock_salt: { query: 'rock salt 1kg', canonicalName: 'Tata Sampann Rock Salt', category: 'Grains & Pulses', icon: '🧂', prices: [
    p('blinkit',   'Tata Rock Salt 1kg',    95, 110, 13, '1 kg', 'staples', true, '10 min'),
  ]},
  tata_sampann_black_salt: { query: 'black salt', canonicalName: 'Tata Sampann Black Salt', category: 'Grains & Pulses', icon: '🧂', prices: [
    p('blinkit',   'Black Salt 100g',       35, 40, 12, '100g', 'staples', true, '10 min'),
  ]},
  top_ramen_fiery_chilli: { query: 'top ramen fiery', canonicalName: 'Top Ramen Fiery Chilli', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Fiery Chilli 70g',      20, 20, 0, '70g', 'noodles', true, '10 min'),
  ]},
  top_ramen_curry: { query: 'top ramen curry', canonicalName: 'Top Ramen Curry', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Top Ramen Curry 70g',   20, 20, 0, '70g', 'noodles', true, '10 min'),
  ]},
  milky_mist_paneer_500g: { query: 'milky mist paneer 500g', canonicalName: 'Milky Mist Paneer (500g)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Milky Mist 500g',       225, 250, 10, '500g', 'paneer', true, '10 min'),
  ]},
  milky_mist_paneer_1kg: { query: 'milky mist paneer 1kg', canonicalName: 'Milky Mist Paneer (1kg)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Milky Mist 1kg',        445, 480, 7, '1 kg', 'paneer', true, '10 min'),
  ]},
  sprite_1_25l_bottle: { query: 'sprite 1.25l', canonicalName: 'Sprite (1.25L)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Sprite 1.25L Bottle',   65, 65, 0, '1.25 L', 'soft drink', true, '10 min'),
  ]},
  mother_dairy_lassi_sweet_1l: { query: 'sweet lassi 1l', canonicalName: 'Mother Dairy Lassi (1L)', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Sweet Lassi 1L Bottle', 95, 110, 13, '1 L', 'beverages', true, '10 min'),
  ]},
  mother_dairy_lassi_mango_1l: { query: 'mango lassi 1l', canonicalName: 'Mother Dairy Lassi (1L)', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Mango Lassi 1L Bottle', 95, 110, 13, '1 L', 'beverages', true, '10 min'),
  ]},
  haldiram_ratlami_sev_200g: { query: 'ratlami sev', canonicalName: 'Haldiram Ratlami Sev', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Ratlami Sev 200g',      65, 80, 18, '200g', 'snacks', true, '10 min'),
  ]},
  organic_toor_dal_1kg: { query: 'organic toor dal', canonicalName: 'Organic Toor Dal (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Organic Toor 1kg',      245, 280, 12, '1 kg', 'pulses', true, '10 min'),
  ]},
  organic_moong_dal_1kg: { query: 'organic moong dal', canonicalName: 'Organic Moong Dal (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Organic Moong 1kg',     225, 260, 13, '1 kg', 'pulses', true, '10 min'),
  ]},
  real_nectar_mango_1l: { query: 'real nectar mango', canonicalName: 'Real Nectar Mango (1L)', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Mango Nectar',     115, 130, 11, '1 L', 'beverages', true, '10 min'),
  ]},
  real_nectar_guava_1l: { query: 'real nectar guava', canonicalName: 'Real Nectar Guava (1L)', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Guava Nectar',     115, 130, 11, '1 L', 'beverages', true, '10 min'),
  ]},
  haldiram_bhujia_1kg_mega: { query: 'bhujia 1kg', canonicalName: 'Haldiram Bhujia (1kg)', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Bhujia 1kg Mega Pack',  245, 280, 12, '1 kg', 'snacks', true, '10 min'),
  ]},
  kinley_water_500ml: { query: 'kinley 500ml', canonicalName: 'Kinley Water (500ml)', category: 'Beverages', icon: '💧', prices: [
    p('blinkit',   'Kinley 500ml Bottle',   10, 10, 0, '500ml', 'water', true, '10 min'),
  ]},
  kinley_water_1l: { query: 'kinley 1l', canonicalName: 'Kinley Water (1L)', category: 'Beverages', icon: '💧', prices: [
    p('blinkit',   'Kinley 1L Bottle',      20, 20, 0, '1 L', 'water', true, '10 min'),
  ]},

  nescafe_classic_stick_10: { query: 'nescafe stick 10', canonicalName: 'Nescafe Stick (10pc)', category: 'Beverages', icon: '☕', prices: [
    p('blinkit',   'Nescafe Stick 10ct',    20, 20, 0, '15g', 'coffee', true, '10 min'),
  ]},
  knorr_soupy_noodles: { query: 'knorr soupy noodles', canonicalName: 'Knorr Soupy Noodles', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Soupy Noodles 300g',    95, 110, 13, '300g', 'noodles', true, '10 min'),
  ]},
  amul_cheese_cubes_200g: { query: 'amul cheese cubes', canonicalName: 'Amul Cheese Cubes', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Amul Cubes 200g',       125, 140, 10, '200g', 'cheese', true, '10 min'),
  ]},
  amul_cheese_spread_garlic: { query: 'cheese spread garlic', canonicalName: 'Amul Garlic Spread', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Garlic Spread 200g',    95, 110, 13, '200g', 'cheese', true, '10 min'),
  ]},

  milky_mist_greek_blueberry: { query: 'greek yogurt blueberry', canonicalName: 'Milky Mist Blueberry', category: 'Dairy', icon: '🍨', prices: [
    p('blinkit',   'Blueberry Greek 100g',  65, 75, 13, '100g', 'yogurt', true, '10 min'),
  ]},
  tata_sampann_organic_moong: { query: 'organic moong dal tata', canonicalName: 'Tata Organic Moong', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Organic Moong 1kg',     245, 280, 12, '1 kg', 'pulses', true, '10 min'),
  ]},
  haldiram_khakhra_plain: { query: 'plain khakhra', canonicalName: 'Haldiram Khakhra', category: 'Snacks', icon: '🍘', prices: [
    p('blinkit',   'Plain Khakhra 200g',    85, 100, 15, '200g', 'snacks', true, '10 min'),
  ]},
  coke_zero_2l_bottle: { query: 'coke zero 2l', canonicalName: 'Coke Zero (2L)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Coke Zero 2L Bottle',   95, 95, 0, '2 L', 'soft drink', true, '10 min'),
  ]},
  real_activ_coconut_water_1l: { query: 'coconut water 1l', canonicalName: 'Real Coconut Water', category: 'Beverages', icon: '🥥', prices: [
    p('blinkit',   'Coconut Water 1L',      145, 175, 17, '1 L', 'beverages', true, '10 min'),
  ]},
  nescafe_gold_jar_100g: { query: 'nescafe gold 100g', canonicalName: 'Nescafe Gold (Jar)', category: 'Beverages', icon: '☕', prices: [
    p('blinkit',   'Nescafe Gold 100g',     545, 600, 9, '100g', 'coffee', true, '10 min'),
  ]},
  amul_dark_chocolate_150g: { query: 'amul dark chocolate', canonicalName: 'Amul Dark Chocolate', category: 'Snacks', icon: '🍫', prices: [
    p('blinkit',   'Dark Chocolate 150g',   125, 150, 16, '150g', 'chocolate', true, '10 min'),
  ]},
  paper_boat_aam_panna: { query: 'aam panna pouch', canonicalName: 'Paper Boat Aam Panna', category: 'Beverages', icon: '🍹', prices: [
    p('blinkit',   'Aam Panna 250ml',       35, 40, 12, '250ml', 'beverages', true, '10 min'),
  ]},
  mother_dairy_fruit_yogurt_blue: { query: 'fruit yogurt blueberry', canonicalName: 'Mother Dairy Blueberry', category: 'Dairy', icon: '🍨', prices: [
    p('blinkit',   'Blueberry Yogurt 100g', 35, 40, 12, '100g', 'yogurt', true, '10 min'),
  ]},
  real_activ_100_cranberry_1l: { query: 'activ 100 cranberry', canonicalName: 'Real Activ Cranberry', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Real Cranberry 1L',     185, 210, 12, '1 L', 'beverages', true, '10 min'),
  ]},
  schweppes_tonic_water_300ml: { query: 'schweppes tonic', canonicalName: 'Schweppes Tonic Water', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Schweppes Tonic 300ml', 65, 75, 13, '300ml', 'beverages', true, '10 min'),
  ]},
  organic_chana_dal_1kg: { query: 'organic chana dal', canonicalName: 'Organic Chana Dal (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Organic Chana 1kg',     195, 230, 15, '1 kg', 'pulses', true, '10 min'),
  ]},
  chings_veg_hakka_1kg: { query: 'chings hakka 1kg', canonicalName: 'Chings Hakka (Mega)', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Chings Hakka 1kg Mega', 185, 220, 16, '1 kg', 'noodles', true, '10 min'),
  ]},
  haldiram_cashews_peppery: { query: 'peppery cashews', canonicalName: 'Haldiram Peppery Cashews', category: 'Snacks', icon: '🥜', prices: [
    p('blinkit',   'Peppery Cashews 35g',   85, 95, 10, '35g', 'nuts', true, '10 min'),
  ]},
  amul_lassi_sweet_1l: { query: 'amul sweet lassi 1l', canonicalName: 'Amul Lassi (1L)', category: 'Beverages', icon: '🥛', prices: [
    p('blinkit',   'Amul Lassi 1L Bottle',  85, 100, 15, '1 L', 'beverages', true, '10 min'),
  ]},
  lipton_green_tea_pure_100: { query: 'green tea pure 100', canonicalName: 'Lipton Green (Pure)', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Lipton Pure 100ct',     455, 520, 12, '100 bags', 'tea', true, '10 min'),
  ]},
  lipton_green_tea_pure_10: { query: 'green tea pure 10 bags', canonicalName: 'Lipton Green (Pure)', category: 'Beverages', icon: '🍵', prices: [
    p('blinkit',   'Lipton Pure 10ct',      65, 75, 13, '10 bags', 'tea', true, '10 min'),
  ]},
  tata_sampann_organic_masoor: { query: 'organic masoor tata', canonicalName: 'Tata Organic Masoor', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Organic Masoor 1kg',    195, 230, 15, '1 kg', 'pulses', true, '10 min'),
  ]},
  top_ramen_curry_family: { query: 'top ramen curry family', canonicalName: 'Top Ramen Curry (FP)', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Top Ramen Curry 280g',  85, 100, 15, '280g', 'noodles', true, '10 min'),
  ]},
  haldiram_punjabi_tadka_40g: { query: 'punjabi tadka 40g', canonicalName: 'Haldiram Tadka', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Punjabi Tadka 40g',     10, 10, 0, '40g', 'snacks', true, '10 min'),
  ]},
  thums_up_zero_can: { query: 'thums up zero can', canonicalName: 'Thums Up Zero (300ml)', category: 'Beverages', icon: '🥤', prices: [
    p('blinkit',   'Thums Up Zero Can',     40, 40, 0, '300ml', 'soft drink', true, '10 min'),
  ]},
  amul_cheese_block_100g: { query: 'cheese block 100g', canonicalName: 'Amul Cheese Block', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Amul Block 100g',       75, 85, 11, '100g', 'cheese', true, '10 min'),
  ]},
  b_natural_mixed_fruit_200ml: { query: 'b natural mixed 200ml', canonicalName: 'B Natural Mixed', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'B Natural Mixed',       20, 20, 0, '200ml', 'beverages', true, '10 min'),
  ]},
  tata_sampann_black_pepper: { query: 'black pepper 50g', canonicalName: 'Tata Black Pepper', category: 'Grains & Pulses', icon: '🧂', prices: [
    p('blinkit',   'Black Pepper 50g',      85, 95, 10, '50g', 'spices', true, '10 min'),
  ]},
  tata_sampann_turmeric: { query: 'turmeric 100g', canonicalName: 'Tata Turmeric', category: 'Grains & Pulses', icon: '🧂', prices: [
    p('blinkit',   'Turmeric 100g',         35, 40, 12, '100g', 'spices', true, '10 min'),
  ]},
  top_ramen_fiery_family: { query: 'top ramen fiery family', canonicalName: 'Top Ramen Fiery (FP)', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Fiery Family 280g',     85, 100, 15, '280g', 'noodles', true, '10 min'),
  ]},
  real_activ_cranberry_200ml: { query: 'activ cranberry 200ml', canonicalName: 'Real Activ Cranberry', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'Activ Cran 200ml',      45, 45, 0, '200ml', 'beverages', true, '10 min'),
  ]},
  amul_gold_200ml_tetra: { query: 'amul gold tetra 200ml', canonicalName: 'Amul Gold (200ml)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Amul Gold 200ml',       25, 25, 0, '200ml', 'milk', true, '10 min'),
  ]},
  bisleri_250ml_bottle: { query: 'bisleri 250ml', canonicalName: 'Bisleri (250ml)', category: 'Beverages', icon: '💧', prices: [
    p('blinkit',   'Bisleri 250ml Bottle',  10, 10, 0, '250ml', 'water', true, '10 min'),
  ]},
  haldiram_gathiya_200g: { query: 'haldiram gathiya', canonicalName: 'Haldiram Gathiya', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Gathiya 200g Pack',     65, 80, 18, '200g', 'snacks', true, '10 min'),
  ]},
  haldiram_bhavnagari_sev: { query: 'bhavnagari sev', canonicalName: 'Bhavnagari Sev', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Bhavnagari Sev 200g',   65, 80, 18, '200g', 'snacks', true, '10 min'),
  ]},
  b_natural_litchi_200ml: { query: 'b natural litchi 200ml', canonicalName: 'B Natural Litchi', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'B Natural Litchi',      20, 20, 0, '200ml', 'beverages', true, '10 min'),
  ]},
  b_natural_apple_200ml: { query: 'b natural apple 200ml', canonicalName: 'B Natural Apple', category: 'Beverages', icon: '🧃', prices: [
    p('blinkit',   'B Natural Apple',       20, 20, 0, '200ml', 'beverages', true, '10 min'),
  ]},
  bisleri_glass_bottle: { query: 'bisleri glass bottle', canonicalName: 'Bisleri (300ml Glass)', category: 'Beverages', icon: '💧', prices: [
    p('blinkit',   'Bisleri Glass 300ml',   45, 45, 0, '300ml', 'water', true, '10 min'),
  ]},
  tata_sampann_black_salt_500g: { query: 'black salt 500g', canonicalName: 'Tata Black Salt', category: 'Grains & Pulses', icon: '🧂', prices: [
    p('blinkit',   'Black Salt 500g',       145, 175, 17, '500g', 'staples', true, '10 min'),
  ]},
  tata_sampann_rock_salt_500g: { query: 'rock salt 500g', canonicalName: 'Tata Rock Salt', category: 'Grains & Pulses', icon: '🧂', prices: [
    p('blinkit',   'Rock Salt 500g',        145, 175, 17, '500g', 'staples', true, '10 min'),
  ]},
  top_ramen_curry_sachet: { query: 'top ramen sachet', canonicalName: 'Top Ramen Curry (S)', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Top Ramen Sachet',      5, 5, 0, '15g', 'noodles', true, '10 min'),
  ]},
  top_ramen_fiery_sachet: { query: 'top ramen fiery sachet', canonicalName: 'Top Ramen Fiery (S)', category: 'Packaged Foods', icon: '🍜', prices: [
    p('blinkit',   'Fiery Chilli Sachet',   5, 5, 0, '15g', 'noodles', true, '10 min'),
  ]},
  mother_dairy_full_cream_200ml: { query: 'mother dairy tetra 200ml', canonicalName: 'Mother Dairy (200ml)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Full Cream 200ml',      25, 25, 0, '200ml', 'milk', true, '10 min'),
  ]},
  amul_garlic_herbs_spread: { query: 'garlic herbs spread', canonicalName: 'Amul Garlic & Herbs', category: 'Dairy', icon: '🧀', prices: [
    p('blinkit',   'Garlic Spread 200g',    95, 110, 13, '200g', 'cheese', true, '10 min'),
  ]},
  mother_dairy_diet_milk: { query: 'diet milk poly', canonicalName: 'Mother Dairy (Diet)', category: 'Dairy', icon: '🥛', prices: [
    p('blinkit',   'Diet Milk 500ml',       25, 25, 0, '500ml', 'milk', true, '10 min'),
  ]},
  haldiram_masala_peanuts: { query: 'masala peanuts', canonicalName: 'Haldiram Masala Peanuts', category: 'Snacks', icon: '🥜', prices: [
    p('blinkit',   'Masala Peanuts 200g',   65, 80, 18, '200g', 'snacks', true, '10 min'),
  ]},
  amul_sugarfree_dark_chocolate_150g: { query: 'sugarfree dark chocolate', canonicalName: 'Amul Sugarfree Dark', category: 'Snacks', icon: '🍫', prices: [
    p('blinkit',   'Sugarfree Dark 150g',   145, 160, 9, '150g', 'chocolate', true, '10 min'),
  ]},
  real_activ_tender_coconut_water: { query: 'tender coconut water', canonicalName: 'Real Activ Coconut', category: 'Beverages', icon: '🥥', prices: [
    p('blinkit',   'Coconut Water 200ml',   45, 50, 10, '200ml', 'beverages', true, '10 min'),
  ]},
  tata_sampann_unpolished_tur_dal: { query: 'unpolished tur dal', canonicalName: 'Tata Unpolished Tur', category: 'Grains & Pulses', icon: '🫘', prices: [
    p('blinkit',   'Unpolished Tur 1kg',    185, 220, 16, '1 kg', 'pulses', true, '10 min'),
  ]},
  mother_dairy_fruit_yogurt_mango: { query: 'mango yogurt cup', canonicalName: 'Mother Dairy Mango', category: 'Dairy', icon: '🍨', prices: [
    p('blinkit',   'Mango Yogurt 100g',     35, 40, 12, '100g', 'yogurt', true, '10 min'),
  ]},
  nescafe_gold_decaf_100g: { query: 'decaf coffee jar', canonicalName: 'Nescafe Gold Decaf', category: 'Beverages', icon: '☕', prices: [
    p('blinkit',   'Gold Decaf 100g',       585, 650, 10, '100g', 'coffee', true, '10 min'),
  ]},
  haldiram_baked_bhujia_200g: { query: 'baked bhujia', canonicalName: 'Haldiram Baked Bhujia', category: 'Snacks', icon: '🍿', prices: [
    p('blinkit',   'Baked Bhujia 200g',     85, 100, 15, '200g', 'snacks', true, '10 min'),
  ]},
  papaya_large_regular: { query: 'papaya', canonicalName: 'Papaya (Large Regular)', category: 'Fruits', icon: '🥭', prices: [
    p('blinkit',   'Papaya (Large Regular)', 91, 102, 10, '1 pc', 'fruits', true, '10 min'),
  ]},
  papaya_organic_small: { query: 'papaya', canonicalName: 'Papaya (Organic Small)', category: 'Fruits', icon: '🥭', prices: [
    p('blinkit',   'Papaya (Organic Small)', 73, 86, 15, '1 pc', 'fruits', true, '10 min'),
  ]},
  guava_pink_1kg: { query: 'guava', canonicalName: 'Guava (Pink) 1kg', category: 'Fruits', icon: '🍐', prices: [
    p('blinkit',   'Guava (Pink) 1kg', 114, 133, 14, '1 kg', 'fruits', true, '10 min'),
  ]},
  guava_white_1kg: { query: 'guava', canonicalName: 'Guava (White) 1kg', category: 'Fruits', icon: '🍐', prices: [
    p('blinkit',   'Guava (White) 1kg', 96, 118, 18, '1 kg', 'fruits', true, '10 min'),
  ]},
  pomegranate_peeled_200g: { query: 'pomegranate', canonicalName: 'Pomegranate (Peeled)', category: 'Fruits', icon: '🍎', prices: [
    p('blinkit',   'Pomegranate (Peeled)', 185, 207, 10, '200g', 'fruits', true, '10 min'),
  ]},
  pineapple_peeled_chunks_200g: { query: 'pineapple', canonicalName: 'Pineapple (Peeled Chunks)', category: 'Fruits', icon: '🍍', prices: [
    p('blinkit',   'Pineapple (Peeled Chunks)', 141, 158, 10, '200g', 'fruits', true, '10 min'),
  ]},
  muskmelon_regular_1pc: { query: 'muskmelon', canonicalName: 'Muskmelon Regular', category: 'Fruits', icon: '🍈', prices: [
    p('blinkit',   'Muskmelon Regular', 66, 78, 15, '1 pc', 'fruits', true, '10 min'),
  ]},
  sunmelon_premium_1pc: { query: 'sunmelon', canonicalName: 'Sunmelon (Premium)', category: 'Fruits', icon: '🍈', prices: [
    p('blinkit',   'Sunmelon (Premium)', 98, 108, 9, '1 pc', 'fruits', true, '10 min'),
  ]},
  watermelon_half_cut: { query: 'watermelon', canonicalName: 'Watermelon (Half Cut)', category: 'Fruits', icon: '🍉', prices: [
    p('blinkit',   'Watermelon (Half Cut)', 60, 69, 13, '1 pc', 'fruits', true, '10 min'),
  ]},
  watermelon_small_2kg: { query: 'watermelon', canonicalName: 'Watermelon (Small 2kg)', category: 'Fruits', icon: '🍉', prices: [
    p('blinkit',   'Watermelon (Small 2kg)', 83, 94, 11, '2 kg', 'fruits', true, '10 min'),
  ]},
  grapes_green_1kg_value: { query: 'grapes', canonicalName: 'Grapes (Green) Value Pack', category: 'Fruits', icon: '🍇', prices: [
    p('blinkit',   'Grapes (Green) Value Pack', 214, 262, 18, '1 kg', 'fruits', true, '10 min'),
  ]},
  grapes_sonaka_500g: { query: 'grapes', canonicalName: 'Grapes (Sonaka)', category: 'Fruits', icon: '🍇', prices: [
    p('blinkit',   'Grapes (Sonaka)', 113, 144, 21, '500g', 'fruits', true, '10 min'),
  ]},
  banana_robusta_12pc: { query: 'banana', canonicalName: 'Banana (Robusta) 12pc', category: 'Fruits', icon: '🍌', prices: [
    p('blinkit',   'Banana (Robusta) 12pc', 78, 87, 10, '12 pc', 'fruits', true, '10 min'),
  ]},
  banana_elaichi_500g: { query: 'banana', canonicalName: 'Banana (Elaichi)', category: 'Fruits', icon: '🍌', prices: [
    p('blinkit',   'Banana (Elaichi)', 67, 75, 10, '500g', 'fruits', true, '10 min'),
  ]},
  banana_red_3pc: { query: 'banana', canonicalName: 'Banana (Red) 3pc', category: 'Fruits', icon: '🍌', prices: [
    p('blinkit',   'Banana (Red) 3pc', 48, 61, 21, '3 pc', 'fruits', true, '10 min'),
  ]},
  orange_valencia_imported_1kg: { query: 'orange', canonicalName: 'Orange (Valencia Imported)', category: 'Fruits', icon: '🍊', prices: [
    p('blinkit',   'Orange (Valencia Imported)', 193, 212, 8, '1 kg', 'fruits', true, '10 min'),
  ]},
  mandarin_premium_500g: { query: 'mandarin', canonicalName: 'Mandarin (Premium)', category: 'Fruits', icon: '🍊', prices: [
    p('blinkit',   'Mandarin (Premium)', 159, 206, 22, '500g', 'fruits', true, '10 min'),
  ]},
  citrus_kinnu_1kg: { query: 'kinnu', canonicalName: 'Citrus (Kinnu) 1kg', category: 'Fruits', icon: '🍊', prices: [
    p('blinkit',   'Citrus (Kinnu) 1kg', 109, 139, 21, '1 kg', 'fruits', true, '10 min'),
  ]},
  pomelo_large_1pc: { query: 'pomelo', canonicalName: 'Pomelo (Large)', category: 'Fruits', icon: '🍊', prices: [
    p('blinkit',   'Pomelo (Large)', 183, 236, 22, '1 pc', 'fruits', true, '10 min'),
  ]},
  custard_apple_500g: { query: 'custard apple', canonicalName: 'Custard Apple (Sitaphal)', category: 'Fruits', icon: '🍏', prices: [
    p('blinkit',   'Custard Apple (Sitaphal)', 112, 139, 19, '500g', 'fruits', true, '10 min'),
  ]},
  pear_green_imported_500g: { query: 'pear', canonicalName: 'Pear (Green Imported)', category: 'Fruits', icon: '🍐', prices: [
    p('blinkit',   'Pear (Green Imported)', 215, 252, 14, '500g', 'fruits', true, '10 min'),
  ]},
  plum_imported_250g: { query: 'plum', canonicalName: 'Plum (Imported)', category: 'Fruits', icon: '🍑', prices: [
    p('blinkit',   'Plum (Imported)', 173, 214, 19, '250g', 'fruits', true, '10 min'),
  ]},
  peach_fresh_250g: { query: 'peach', canonicalName: 'Peach (Fresh)', category: 'Fruits', icon: '🍑', prices: [
    p('blinkit',   'Peach (Fresh)', 145, 164, 11, '250g', 'fruits', true, '10 min'),
  ]},
  apricot_imported_200g: { query: 'apricot', canonicalName: 'Apricot (Imported)', category: 'Fruits', icon: '🍑', prices: [
    p('blinkit',   'Apricot (Imported)', 195, 229, 14, '200g', 'fruits', true, '10 min'),
  ]},
  potato_new_crop_2kg: { query: 'potato', canonicalName: 'Potato (New Crop) 2kg', category: 'Vegetables', icon: '🥔', prices: [
    p('blinkit',   'Potato (New Crop) 2kg', 83, 94, 11, '2 kg', 'vegetables', true, '10 min'),
  ]},
  potato_jyoti_1kg: { query: 'potato', canonicalName: 'Potato (Jyoti)', category: 'Vegetables', icon: '🥔', prices: [
    p('blinkit',   'Potato (Jyoti)', 39, 48, 18, '1 kg', 'vegetables', true, '10 min'),
  ]},
  potato_pahadi_1kg: { query: 'potato', canonicalName: 'Potato (Pahadi)', category: 'Vegetables', icon: '🥔', prices: [
    p('blinkit',   'Potato (Pahadi)', 45, 53, 15, '1 kg', 'vegetables', true, '10 min'),
  ]},
  onion_white_500g: { query: 'onion', canonicalName: 'Onion (White)', category: 'Vegetables', icon: '🧅', prices: [
    p('blinkit',   'Onion (White)', 47, 54, 12, '500g', 'vegetables', true, '10 min'),
  ]},
  onion_sambhar_250g: { query: 'onion', canonicalName: 'Onion (Sambhar)', category: 'Vegetables', icon: '🧅', prices: [
    p('blinkit',   'Onion (Sambhar)', 35, 42, 16, '250g', 'vegetables', true, '10 min'),
  ]},
  tomato_hybrid_2kg_value: { query: 'tomato', canonicalName: 'Tomato (Hybrid) 2kg', category: 'Vegetables', icon: '🍅', prices: [
    p('blinkit',   'Tomato (Hybrid) 2kg', 109, 126, 13, '2 kg', 'vegetables', true, '10 min'),
  ]},
  tomato_local_desi_1kg: { query: 'tomato', canonicalName: 'Tomato (Local Desi)', category: 'Vegetables', icon: '🍅', prices: [
    p('blinkit',   'Tomato (Local Desi)', 57, 74, 22, '1 kg', 'vegetables', true, '10 min'),
  ]},
  tomato_plum_imported_250g: { query: 'tomato', canonicalName: 'Tomato (Plum Imported)', category: 'Vegetables', icon: '🍅', prices: [
    p('blinkit',   'Tomato (Plum Imported)', 98, 120, 18, '250g', 'vegetables', true, '10 min'),
  ]},
  spinach_bunch_large: { query: 'spinach', canonicalName: 'Spinach (Large Bunch)', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Spinach (Large Bunch)', 38, 48, 20, '1 pc', 'vegetables', true, '10 min'),
  ]},
  methi_bunch_large: { query: 'methi', canonicalName: 'Methi (Large Bunch)', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Methi (Large Bunch)', 44, 51, 13, '1 pc', 'vegetables', true, '10 min'),
  ]},
  amaranth_leaves_bunch: { query: 'amaranth', canonicalName: 'Amaranth Leaves', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Amaranth Leaves', 28, 31, 9, '1 pc', 'vegetables', true, '10 min'),
  ]},
  coriander_leaves_value_pack: { query: 'coriander', canonicalName: 'Coriander (Value Pack)', category: 'Vegetables', icon: '🌿', prices: [
    p('blinkit',   'Coriander (Value Pack)', 45, 50, 10, '1 pc', 'vegetables', true, '10 min'),
  ]},
  mint_leaves_value_pack: { query: 'mint', canonicalName: 'Mint (Value Pack)', category: 'Vegetables', icon: '🌿', prices: [
    p('blinkit',   'Mint (Value Pack)', 45, 50, 10, '1 pc', 'vegetables', true, '10 min'),
  ]},
  curry_leaves_pouch: { query: 'curry leaves', canonicalName: 'Curry Leaves (Pouch)', category: 'Vegetables', icon: '🌿', prices: [
    p('blinkit',   'Curry Leaves (Pouch)', 19, 21, 9, '1 pc', 'vegetables', true, '10 min'),
  ]},
  mustard_greens_sarson_bunch: { query: 'mustard greens', canonicalName: 'Mustard Greens (Sarson)', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Mustard Greens (Sarson)', 60, 73, 17, '1 pc', 'vegetables', true, '10 min'),
  ]},
  bathua_greens_bunch: { query: 'bathua', canonicalName: 'Bathua Greens', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Bathua Greens', 40, 45, 11, '1 pc', 'vegetables', true, '10 min'),
  ]},
  bottle_gourd_large_1pc: { query: 'bottle gourd', canonicalName: 'Bottle Gourd (Large)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Bottle Gourd (Large)', 46, 57, 19, '1 pc', 'vegetables', true, '10 min'),
  ]},
  bitter_gourd_small_250g: { query: 'bitter gourd', canonicalName: 'Bitter Gourd (Small)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Bitter Gourd (Small)', 44, 57, 22, '250g', 'vegetables', true, '10 min'),
  ]},
  ridge_gourd_500g: { query: 'ridge gourd', canonicalName: 'Ridge Gourd', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Ridge Gourd', 60, 70, 14, '500g', 'vegetables', true, '10 min'),
  ]},
  snake_gourd_1pc: { query: 'snake gourd', canonicalName: 'Snake Gourd', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Snake Gourd', 44, 55, 20, '1 pc', 'vegetables', true, '10 min'),
  ]},
  sponge_gourd_500g: { query: 'sponge gourd', canonicalName: 'Sponge Gourd', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Sponge Gourd', 59, 68, 13, '500g', 'vegetables', true, '10 min'),
  ]},
  ivy_gourd_tindora_500g: { query: 'ivy gourd', canonicalName: 'Ivy Gourd (Tindora)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Ivy Gourd (Tindora)', 59, 66, 10, '500g', 'vegetables', true, '10 min'),
  ]},
  ash_gourd_cut_500g: { query: 'ash gourd', canonicalName: 'Ash Gourd (Cut)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Ash Gourd (Cut)', 37, 41, 9, '500g', 'vegetables', true, '10 min'),
  ]},
  pumpkin_yellow_cut_500g: { query: 'pumpkin', canonicalName: 'Pumpkin Yellow (Cut)', category: 'Vegetables', icon: '🎃', prices: [
    p('blinkit',   'Pumpkin Yellow (Cut)', 43, 54, 20, '500g', 'vegetables', true, '10 min'),
  ]},
  carrot_orange_1kg: { query: 'carrot', canonicalName: 'Carrot (Orange) 1kg', category: 'Vegetables', icon: '🥕', prices: [
    p('blinkit',   'Carrot (Orange) 1kg', 95, 111, 14, '1 kg', 'vegetables', true, '10 min'),
  ]},
  carrot_red_desi_1kg: { query: 'carrot', canonicalName: 'Carrot (Red Desi) 1kg', category: 'Vegetables', icon: '🥕', prices: [
    p('blinkit',   'Carrot (Red Desi) 1kg', 76, 92, 17, '1 kg', 'vegetables', true, '10 min'),
  ]},
  radish_white_mooli_2pc: { query: 'radish', canonicalName: 'Radish White (Mooli)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Radish White (Mooli)', 39, 46, 15, '2 pc', 'vegetables', true, '10 min'),
  ]},
  radish_red_round_250g: { query: 'radish', canonicalName: 'Radish Red (Round)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Radish Red (Round)', 53, 64, 17, '250g', 'vegetables', true, '10 min'),
  ]},
  beetroot_1kg_value: { query: 'beetroot', canonicalName: 'Beetroot (Value Pack)', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Beetroot (Value Pack)', 94, 110, 14, '1 kg', 'vegetables', true, '10 min'),
  ]},
  turnip_shalgam_500g: { query: 'turnip', canonicalName: 'Turnip (Shalgam)', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Turnip (Shalgam)', 55, 69, 20, '500g', 'vegetables', true, '10 min'),
  ]},
  elephant_yam_suran_500g: { query: 'yam', canonicalName: 'Elephant Yam (Suran)', category: 'Vegetables', icon: '🥔', prices: [
    p('blinkit',   'Elephant Yam (Suran)', 55, 60, 8, '500g', 'vegetables', true, '10 min'),
  ]},
  colocasia_arbi_500g: { query: 'arbi', canonicalName: 'Colocasia (Arbi)', category: 'Vegetables', icon: '🥔', prices: [
    p('blinkit',   'Colocasia (Arbi)', 63, 76, 17, '500g', 'vegetables', true, '10 min'),
  ]},
  cabbage_small_regular: { query: 'cabbage', canonicalName: 'Cabbage (Small Regular)', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Cabbage (Small Regular)', 39, 49, 20, '1 pc', 'vegetables', true, '10 min'),
  ]},
  cauliflower_medium_1pc: { query: 'cauliflower', canonicalName: 'Cauliflower (Medium)', category: 'Vegetables', icon: '🥦', prices: [
    p('blinkit',   'Cauliflower (Medium)', 66, 78, 15, '1 pc', 'vegetables', true, '10 min'),
  ]},
  broccoli_purple_1pc: { query: 'broccoli', canonicalName: 'Broccoli (Purple)', category: 'Vegetables', icon: '🥦', prices: [
    p('blinkit',   'Broccoli (Purple)', 107, 120, 10, '1 pc', 'vegetables', true, '10 min'),
  ]},
  brussels_sprouts_200g: { query: 'brussels sprouts', canonicalName: 'Brussels Sprouts', category: 'Vegetables', icon: '🥦', prices: [
    p('blinkit',   'Brussels Sprouts', 182, 202, 9, '200g', 'vegetables', true, '10 min'),
  ]},
  green_peas_shelled_200g: { query: 'green peas', canonicalName: 'Green Peas (Shelled)', category: 'Vegetables', icon: '🫛', prices: [
    p('blinkit',   'Green Peas (Shelled)', 98, 118, 16, '200g', 'vegetables', true, '10 min'),
  ]},
  french_beans_regular_250g: { query: 'french beans', canonicalName: 'French Beans', category: 'Vegetables', icon: '🫛', prices: [
    p('blinkit',   'French Beans', 56, 64, 12, '250g', 'vegetables', true, '10 min'),
  ]},
  cluster_beans_gawar_250g: { query: 'cluster beans', canonicalName: 'Cluster Beans (Gawar)', category: 'Vegetables', icon: '🫛', prices: [
    p('blinkit',   'Cluster Beans (Gawar)', 43, 48, 10, '250g', 'vegetables', true, '10 min'),
  ]},
  cowpea_chawli_beans_250g: { query: 'cowpea', canonicalName: 'Cowpea (Chawli) Beans', category: 'Vegetables', icon: '🫛', prices: [
    p('blinkit',   'Cowpea (Chawli) Beans', 47, 60, 21, '250g', 'vegetables', true, '10 min'),
  ]},
  flat_beans_sem_250g: { query: 'flat beans', canonicalName: 'Flat Beans (Sem)', category: 'Vegetables', icon: '🫛', prices: [
    p('blinkit',   'Flat Beans (Sem)', 54, 62, 12, '250g', 'vegetables', true, '10 min'),
  ]},
  broad_beans_papdi_250g: { query: 'broad beans', canonicalName: 'Broad Beans (Papdi)', category: 'Vegetables', icon: '🫛', prices: [
    p('blinkit',   'Broad Beans (Papdi)', 58, 70, 17, '250g', 'vegetables', true, '10 min'),
  ]},
  green_chilli_thick_100g: { query: 'green chilli', canonicalName: 'Green Chilli (Thick)', category: 'Vegetables', icon: '🌶️', prices: [
    p('blinkit',   'Green Chilli (Thick)', 30, 34, 11, '100g', 'vegetables', true, '10 min'),
  ]},
  bhavnagri_chilli_200g: { query: 'bhavnagri chilli', canonicalName: 'Bhavnagri Chilli', category: 'Vegetables', icon: '🌶️', prices: [
    p('blinkit',   'Bhavnagri Chilli', 40, 47, 14, '200g', 'vegetables', true, '10 min'),
  ]},
  capsicum_red_yellow_twin_pack: { query: 'capsicum', canonicalName: 'Capsicum (Red & Yellow)', category: 'Vegetables', icon: '🫑', prices: [
    p('blinkit',   'Capsicum (Red & Yellow)', 177, 208, 14, '1 pack', 'vegetables', true, '10 min'),
  ]},
  capsicum_orange_1pc: { query: 'capsicum', canonicalName: 'Capsicum (Orange)', category: 'Vegetables', icon: '🫑', prices: [
    p('blinkit',   'Capsicum (Orange)', 100, 111, 9, '1 pc', 'vegetables', true, '10 min'),
  ]},
  okra_ladies_finger_1kg_value: { query: 'okra', canonicalName: 'Okra (Ladies Finger) 1kg', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Okra (Ladies Finger) 1kg', 96, 107, 10, '1 kg', 'vegetables', true, '10 min'),
  ]},
  brinjal_long_purple_500g: { query: 'brinjal', canonicalName: 'Brinjal (Long Purple)', category: 'Vegetables', icon: '🍆', prices: [
    p('blinkit',   'Brinjal (Long Purple)', 54, 67, 19, '500g', 'vegetables', true, '10 min'),
  ]},
  brinjal_round_green_500g: { query: 'brinjal', canonicalName: 'Brinjal (Round Green)', category: 'Vegetables', icon: '🍆', prices: [
    p('blinkit',   'Brinjal (Round Green)', 48, 56, 14, '500g', 'vegetables', true, '10 min'),
  ]},
  brinjal_small_kateri_250g: { query: 'brinjal', canonicalName: 'Brinjal (Small Kateri)', category: 'Vegetables', icon: '🍆', prices: [
    p('blinkit',   'Brinjal (Small Kateri)', 43, 49, 12, '250g', 'vegetables', true, '10 min'),
  ]},
  drumstick_3pc_pack: { query: 'drumstick', canonicalName: 'Drumstick (3pc Pack)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Drumstick (3pc Pack)', 38, 46, 17, '1 pack', 'vegetables', true, '10 min'),
  ]},
  cucumber_english_long_2pc: { query: 'cucumber', canonicalName: 'Cucumber (English Long)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Cucumber (English Long)', 78, 86, 9, '2 pc', 'vegetables', true, '10 min'),
  ]},
  cucumber_desi_regular_500g: { query: 'cucumber', canonicalName: 'Cucumber (Desi Regular)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Cucumber (Desi Regular)', 36, 43, 16, '500g', 'vegetables', true, '10 min'),
  ]},
  lemon_seedless_large_3pc: { query: 'lemon', canonicalName: 'Lemon (Seedless Large)', category: 'Vegetables', icon: '🍋', prices: [
    p('blinkit',   'Lemon (Seedless Large)', 38, 45, 15, '3 pc', 'vegetables', true, '10 min'),
  ]},
  ginger_fresh_250g_value: { query: 'ginger', canonicalName: 'Ginger (Fresh Value Pack)', category: 'Vegetables', icon: '🫚', prices: [
    p('blinkit',   'Ginger (Fresh Value Pack)', 101, 120, 15, '250g', 'vegetables', true, '10 min'),
  ]},
  garlic_peeled_100g_pouch: { query: 'garlic', canonicalName: 'Garlic (Peeled Pouch)', category: 'Vegetables', icon: '🧄', prices: [
    p('blinkit',   'Garlic (Peeled Pouch)', 95, 111, 14, '100g', 'vegetables', true, '10 min'),
  ]},
  sweet_potato_shakarkandi_1kg: { query: 'sweet potato', canonicalName: 'Sweet Potato (1kg)', category: 'Vegetables', icon: '🍠', prices: [
    p('blinkit',   'Sweet Potato (1kg)', 103, 123, 16, '1 kg', 'vegetables', true, '10 min'),
  ]},
  sweet_corn_cob_2pc: { query: 'sweet corn', canonicalName: 'Sweet Corn (Cob)', category: 'Vegetables', icon: '🌽', prices: [
    p('blinkit',   'Sweet Corn (Cob)', 48, 53, 9, '2 pc', 'vegetables', true, '10 min'),
  ]},
  baby_corn_peeled_200g_pack: { query: 'baby corn', canonicalName: 'Baby Corn (Peeled)', category: 'Vegetables', icon: '🌽', prices: [
    p('blinkit',   'Baby Corn (Peeled)', 85, 93, 8, '200g', 'vegetables', true, '10 min'),
  ]},
  mushroom_oyster_200g: { query: 'mushroom', canonicalName: 'Mushroom (Oyster)', category: 'Vegetables', icon: '🍄', prices: [
    p('blinkit',   'Mushroom (Oyster)', 174, 208, 16, '200g', 'vegetables', true, '10 min'),
  ]},
  mushroom_shiitake_100g: { query: 'mushroom', canonicalName: 'Mushroom (Shiitake)', category: 'Vegetables', icon: '🍄', prices: [
    p('blinkit',   'Mushroom (Shiitake)', 291, 370, 21, '100g', 'vegetables', true, '10 min'),
  ]},
  mushroom_portobello_2pc: { query: 'mushroom', canonicalName: 'Mushroom (Portobello)', category: 'Vegetables', icon: '🍄', prices: [
    p('blinkit',   'Mushroom (Portobello)', 217, 268, 19, '2 pc', 'vegetables', true, '10 min'),
  ]},
  celery_imported_1pc: { query: 'celery', canonicalName: 'Celery (Imported)', category: 'Vegetables', icon: '🌿', prices: [
    p('blinkit',   'Celery (Imported)', 98, 115, 14, '1 pc', 'vegetables', true, '10 min'),
  ]},
  parsley_curly_50g: { query: 'parsley', canonicalName: 'Parsley (Curly)', category: 'Vegetables', icon: '🌿', prices: [
    p('blinkit',   'Parsley (Curly)', 60, 75, 20, '50g', 'vegetables', true, '10 min'),
  ]},
  basil_italian_50g: { query: 'basil', canonicalName: 'Basil (Italian)', category: 'Vegetables', icon: '🌿', prices: [
    p('blinkit',   'Basil (Italian)', 55, 70, 21, '50g', 'vegetables', true, '10 min'),
  ]},
  rosemary_fresh_20g: { query: 'rosemary', canonicalName: 'Rosemary (Fresh)', category: 'Vegetables', icon: '🌿', prices: [
    p('blinkit',   'Rosemary (Fresh)', 39, 46, 15, '20g', 'vegetables', true, '10 min'),
  ]},
  thyme_fresh_20g: { query: 'thyme', canonicalName: 'Thyme (Fresh)', category: 'Vegetables', icon: '🌿', prices: [
    p('blinkit',   'Thyme (Fresh)', 36, 41, 12, '20g', 'vegetables', true, '10 min'),
  ]},
  oregano_fresh_20g: { query: 'oregano', canonicalName: 'Oregano (Fresh)', category: 'Vegetables', icon: '🌿', prices: [
    p('blinkit',   'Oregano (Fresh)', 39, 48, 18, '20g', 'vegetables', true, '10 min'),
  ]},
  avocado_local_indian_1pc: { query: 'avocado', canonicalName: 'Avocado (Local Indian)', category: 'Fruits', icon: '🥑', prices: [
    p('blinkit',   'Avocado (Local Indian)', 116, 128, 9, '1 pc', 'fruits', true, '10 min'),
  ]},
  kiwi_imported_box_3pc: { query: 'kiwi', canonicalName: 'Kiwi (Imported Box)', category: 'Fruits', icon: '🥝', prices: [
    p('blinkit',   'Kiwi (Imported Box)', 149, 178, 16, '3 pc', 'fruits', true, '10 min'),
  ]},
  dragon_fruit_white_1pc: { query: 'dragon fruit', canonicalName: 'Dragon Fruit (White)', category: 'Fruits', icon: '🐉', prices: [
    p('blinkit',   'Dragon Fruit (White)', 114, 131, 12, '1 pc', 'fruits', true, '10 min'),
  ]},
  passion_fruit_imported_2pc: { query: 'passion fruit', canonicalName: 'Passion Fruit (Imported)', category: 'Fruits', icon: '🍇', prices: [
    p('blinkit',   'Passion Fruit (Imported)', 236, 268, 11, '2 pc', 'fruits', true, '10 min'),
  ]},
  mangosteen_imported_250g: { query: 'mangosteen', canonicalName: 'Mangosteen (Imported)', category: 'Fruits', icon: '🥭', prices: [
    p('blinkit',   'Mangosteen (Imported)', 444, 531, 16, '250g', 'fruits', true, '10 min'),
  ]},
  rambutan_imported_250g: { query: 'rambutan', canonicalName: 'Rambutan (Imported)', category: 'Fruits', icon: '🥭', prices: [
    p('blinkit',   'Rambutan (Imported)', 293, 343, 14, '250g', 'fruits', true, '10 min'),
  ]},
  longan_imported_250g: { query: 'longan', canonicalName: 'Longan (Imported)', category: 'Fruits', icon: '🥭', prices: [
    p('blinkit',   'Longan (Imported)', 364, 450, 19, '250g', 'fruits', true, '10 min'),
  ]},
  custard_apple_premium_1kg: { query: 'custard apple', canonicalName: 'Custard Apple (Premium)', category: 'Fruits', icon: '🍏', prices: [
    p('blinkit',   'Custard Apple (Premium)', 208, 246, 15, '1 kg', 'fruits', true, '10 min'),
  ]},
  sapota_chikoo_1kg_value: { query: 'chikoo', canonicalName: 'Sapota (Chikoo) Value Pack', category: 'Fruits', icon: '🥔', prices: [
    p('blinkit',   'Sapota (Chikoo) Value Pack', 103, 127, 18, '1 kg', 'fruits', true, '10 min'),
  ]},
  guava_allahabad_safeda_1kg: { query: 'guava', canonicalName: 'Guava (Allahabad Safeda)', category: 'Fruits', icon: '🍐', prices: [
    p('blinkit',   'Guava (Allahabad Safeda)', 115, 132, 12, '1 kg', 'fruits', true, '10 min'),
  ]},
  apple_fuji_imported_4pc: { query: 'apple', canonicalName: 'Apple Fuji (Imported)', category: 'Fruits', icon: '🍎', prices: [
    p('blinkit',   'Apple Fuji (Imported)', 329, 381, 13, '4 pc', 'fruits', true, '10 min'),
  ]},
  apple_granny_smith_4pc: { query: 'apple', canonicalName: 'Apple Granny Smith', category: 'Fruits', icon: '🍏', prices: [
    p('blinkit',   'Apple Granny Smith', 287, 354, 18, '4 pc', 'fruits', true, '10 min'),
  ]},
  apple_shimla_large_1kg: { query: 'apple', canonicalName: 'Apple Shimla (Large)', category: 'Fruits', icon: '🍎', prices: [
    p('blinkit',   'Apple Shimla (Large)', 209, 251, 16, '1 kg', 'fruits', true, '10 min'),
  ]},
  pear_nashi_imported_2pc: { query: 'pear', canonicalName: 'Pear Nashi (Imported)', category: 'Fruits', icon: '🍐', prices: [
    p('blinkit',   'Pear Nashi (Imported)', 243, 296, 17, '2 pc', 'fruits', true, '10 min'),
  ]},
  pear_regular_1kg_value: { query: 'pear', canonicalName: 'Pear (Regular Value Pack)', category: 'Fruits', icon: '🍐', prices: [
    p('blinkit',   'Pear (Regular Value Pack)', 151, 182, 17, '1 kg', 'fruits', true, '10 min'),
  ]},
  plum_indian_500g: { query: 'plum', canonicalName: 'Plum (Indian)', category: 'Fruits', icon: '🍑', prices: [
    p('blinkit',   'Plum (Indian)', 109, 122, 10, '500g', 'fruits', true, '10 min'),
  ]},
  peach_fuzz_free_250g: { query: 'peach', canonicalName: 'Peach (Fuzz Free)', category: 'Fruits', icon: '🍑', prices: [
    p('blinkit',   'Peach (Fuzz Free)', 178, 200, 11, '250g', 'fruits', true, '10 min'),
  ]},
  apricot_fresh_indian_250g: { query: 'apricot', canonicalName: 'Apricot (Fresh Indian)', category: 'Fruits', icon: '🍑', prices: [
    p('blinkit',   'Apricot (Fresh Indian)', 126, 144, 12, '250g', 'fruits', true, '10 min'),
  ]},
  grapes_red_seedless_500g: { query: 'grapes', canonicalName: 'Grapes (Red Seedless)', category: 'Fruits', icon: '🍇', prices: [
    p('blinkit',   'Grapes (Red Seedless)', 145, 163, 11, '500g', 'fruits', true, '10 min'),
  ]},
  grapes_bangalore_blue_500g: { query: 'grapes', canonicalName: 'Grapes (Bangalore Blue)', category: 'Fruits', icon: '🍇', prices: [
    p('blinkit',   'Grapes (Bangalore Blue)', 94, 117, 19, '500g', 'fruits', true, '10 min'),
  ]},
  pomegranate_premium_large_2pc: { query: 'pomegranate', canonicalName: 'Pomegranate (Premium Large)', category: 'Fruits', icon: '🍎', prices: [
    p('blinkit',   'Pomegranate (Premium Large)', 227, 266, 14, '2 pc', 'fruits', true, '10 min'),
  ]},
  pineapple_queen_small_1pc: { query: 'pineapple', canonicalName: 'Pineapple Queen (Small)', category: 'Fruits', icon: '🍍', prices: [
    p('blinkit',   'Pineapple Queen (Small)', 89, 107, 16, '1 pc', 'fruits', true, '10 min'),
  ]},
  papaya_honey_gold_1pc: { query: 'papaya', canonicalName: 'Papaya Honey Gold', category: 'Fruits', icon: '🥭', prices: [
    p('blinkit',   'Papaya Honey Gold', 127, 151, 15, '1 pc', 'fruits', true, '10 min'),
  ]},
  melon_cantaloupe_1pc: { query: 'melon', canonicalName: 'Melon Cantaloupe', category: 'Fruits', icon: '🍈', prices: [
    p('blinkit',   'Melon Cantaloupe', 103, 125, 17, '1 pc', 'fruits', true, '10 min'),
  ]},
  watermelon_black_box_1pc: { query: 'watermelon', canonicalName: 'Watermelon (Black Box)', category: 'Fruits', icon: '🍉', prices: [
    p('blinkit',   'Watermelon (Black Box)', 169, 186, 9, '1 pc', 'fruits', true, '10 min'),
  ]},
  berries_mixed_pack_200g: { query: 'berries', canonicalName: 'Berries (Mixed Pack)', category: 'Fruits', icon: '🍒', prices: [
    p('blinkit',   'Berries (Mixed Pack)', 403, 490, 17, '200g', 'fruits', true, '10 min'),
  ]},
  strawberry_mahabaleshwar_250g: { query: 'strawberry', canonicalName: 'Strawberry (Mahabaleshwar)', category: 'Fruits', icon: '🍓', prices: [
    p('blinkit',   'Strawberry (Mahabaleshwar)', 136, 150, 9, '250g', 'fruits', true, '10 min'),
  ]},
  blueberry_imported_125g: { query: 'blueberry', canonicalName: 'Blueberry (Imported)', category: 'Fruits', icon: '🫐', prices: [
    p('blinkit',   'Blueberry (Imported)', 423, 467, 9, '125g', 'fruits', true, '10 min'),
  ]},
  raspberry_imported_125g: { query: 'raspberry', canonicalName: 'Raspberry (Imported)', category: 'Fruits', icon: '🍒', prices: [
    p('blinkit',   'Raspberry (Imported)', 425, 524, 18, '125g', 'fruits', true, '10 min'),
  ]},
  blackberry_imported_125g: { query: 'blackberry', canonicalName: 'Blackberry (Imported)', category: 'Fruits', icon: '🫐', prices: [
    p('blinkit',   'Blackberry (Imported)', 472, 572, 17, '125g', 'fruits', true, '10 min'),
  ]},
  mulberry_fresh_200g: { query: 'mulberry', canonicalName: 'Mulberry (Fresh)', category: 'Fruits', icon: '🫐', prices: [
    p('blinkit',   'Mulberry (Fresh)', 132, 170, 22, '200g', 'fruits', true, '10 min'),
  ]},
  jamun_fresh_250g: { query: 'jamun', canonicalName: 'Jamun (Fresh)', category: 'Fruits', icon: '🍇', prices: [
    p('blinkit',   'Jamun (Fresh)', 228, 280, 18, '250g', 'fruits', true, '10 min'),
  ]},
  cherry_imported_250g: { query: 'cherry', canonicalName: 'Cherry (Imported)', category: 'Fruits', icon: '🍒', prices: [
    p('blinkit',   'Cherry (Imported)', 554, 673, 17, '250g', 'fruits', true, '10 min'),
  ]},
  fig_fresh_anjeer_250g: { query: 'fig', canonicalName: 'Fig (Fresh Anjeer)', category: 'Fruits', icon: '🍯', prices: [
    p('blinkit',   'Fig (Fresh Anjeer)', 243, 286, 15, '250g', 'fruits', true, '10 min'),
  ]},
  dates_kimia_regular_500g: { query: 'dates', canonicalName: 'Dates (Kimia Regular)', category: 'Fruits', icon: '🌴', prices: [
    p('blinkit',   'Dates (Kimia Regular)', 236, 284, 16, '500g', 'fruits', true, '10 min'),
  ]},
  dates_medjool_premium_250g: { query: 'dates', canonicalName: 'Dates (Medjool Premium)', category: 'Fruits', icon: '🌴', prices: [
    p('blinkit',   'Dates (Medjool Premium)', 621, 799, 22, '250g', 'fruits', true, '10 min'),
  ]},
  coconut_tender_with_straw: { query: 'tender coconut', canonicalName: 'Coconut Tender (With Straw)', category: 'Fruits', icon: '🥥', prices: [
    p('blinkit',   'Coconut Tender (With Straw)', 65, 82, 20, '1 pc', 'fruits', true, '10 min'),
  ]},
  coconut_mature_whole_1pc: { query: 'coconut', canonicalName: 'Coconut Mature (Whole)', category: 'Fruits', icon: '🥥', prices: [
    p('blinkit',   'Coconut Mature (Whole)', 55, 62, 11, '1 pc', 'fruits', true, '10 min'),
  ]},
  coconut_grated_200g_pouch: { query: 'coconut', canonicalName: 'Coconut (Grated Pouch)', category: 'Fruits', icon: '🥥', prices: [
    p('blinkit',   'Coconut (Grated Pouch)', 109, 129, 15, '200g', 'fruits', true, '10 min'),
  ]},
  water_chestnut_singhara_500g: { query: 'singhara', canonicalName: 'Water Chestnut (Singhara)', category: 'Vegetables', icon: '🥔', prices: [
    p('blinkit',   'Water Chestnut (Singhara)', 86, 100, 14, '500g', 'vegetables', true, '10 min'),
  ]},
  lotus_stem_kamal_kakdi_250g: { query: 'lotus stem', canonicalName: 'Lotus Stem (Kamal Kakdi)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Lotus Stem (Kamal Kakdi)', 114, 128, 10, '250g', 'vegetables', true, '10 min'),
  ]},
  yam_regular_jimikand_500g: { query: 'yam', canonicalName: 'Yam Regular (Jimikand)', category: 'Vegetables', icon: '🥔', prices: [
    p('blinkit',   'Yam Regular (Jimikand)', 83, 106, 21, '500g', 'vegetables', true, '10 min'),
  ]},
  sweet_potato_purple_500g: { query: 'sweet potato', canonicalName: 'Sweet Potato (Purple)', category: 'Vegetables', icon: '🍠', prices: [
    p('blinkit',   'Sweet Potato (Purple)', 146, 171, 14, '500g', 'vegetables', true, '10 min'),
  ]},
  turmeric_raw_fresh_100g: { query: 'turmeric', canonicalName: 'Turmeric (Raw Fresh)', category: 'Vegetables', icon: '🫚', prices: [
    p('blinkit',   'Turmeric (Raw Fresh)', 50, 60, 16, '100g', 'vegetables', true, '10 min'),
  ]},
  galangal_thai_ginger_100g: { query: 'galangal', canonicalName: 'Galangal (Thai Ginger)', category: 'Vegetables', icon: '🫚', prices: [
    p('blinkit',   'Galangal (Thai Ginger)', 139, 160, 13, '100g', 'vegetables', true, '10 min'),
  ]},
  lemongrass_fresh_1bunch: { query: 'lemongrass', canonicalName: 'Lemongrass', category: 'Vegetables', icon: '🌿', prices: [
    p('blinkit',   'Lemongrass', 35, 39, 10, '1 bunch', 'vegetables', true, '10 min'),
  ]},
  kaffir_lime_leaves_10g: { query: 'lime leaves', canonicalName: 'Kaffir Lime Leaves', category: 'Vegetables', icon: '🍃', prices: [
    p('blinkit',   'Kaffir Lime Leaves', 47, 52, 9, '10g', 'vegetables', true, '10 min'),
  ]},
  banana_flower_vazhaipoo_1pc: { query: 'banana flower', canonicalName: 'Banana Flower (Vazhaipoo)', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Banana Flower (Vazhaipoo)', 51, 61, 16, '1 pc', 'vegetables', true, '10 min'),
  ]},
  banana_stem_vazhaithandu_1pc: { query: 'banana stem', canonicalName: 'Banana Stem (Vazhaithandu)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Banana Stem (Vazhaithandu)', 48, 55, 12, '1 pc', 'vegetables', true, '10 min'),
  ]},
  raw_banana_green_3pc: { query: 'raw banana', canonicalName: 'Raw Banana (Green)', category: 'Vegetables', icon: '🍌', prices: [
    p('blinkit',   'Raw Banana (Green)', 42, 52, 19, '3 pc', 'vegetables', true, '10 min'),
  ]},
  raw_mango_totapuri_1kg: { query: 'raw mango', canonicalName: 'Raw Mango (Totapuri)', category: 'Vegetables', icon: '🥭', prices: [
    p('blinkit',   'Raw Mango (Totapuri)', 106, 127, 16, '1 kg', 'vegetables', true, '10 min'),
  ]},
  raw_mango_regular_500g: { query: 'raw mango', canonicalName: 'Raw Mango (Regular)', category: 'Vegetables', icon: '🥭', prices: [
    p('blinkit',   'Raw Mango (Regular)', 56, 72, 22, '500g', 'vegetables', true, '10 min'),
  ]},
  spinach_baby_leaves_100g: { query: 'spinach', canonicalName: 'Spinach (Baby Leaves)', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Spinach (Baby Leaves)', 79, 98, 19, '100g', 'vegetables', true, '10 min'),
  ]},
  lettuce_lollo_rosso_1pc: { query: 'lettuce', canonicalName: 'Lettuce Lollo Rosso', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Lettuce Lollo Rosso', 117, 130, 10, '1 pc', 'vegetables', true, '10 min'),
  ]},
  lettuce_butterhead_1pc: { query: 'lettuce', canonicalName: 'Lettuce Butterhead', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Lettuce Butterhead', 123, 159, 22, '1 pc', 'vegetables', true, '10 min'),
  ]},
  kale_curly_leaves_100g: { query: 'kale', canonicalName: 'Kale (Curly Leaves)', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Kale (Curly Leaves)', 154, 191, 19, '100g', 'vegetables', true, '10 min'),
  ]},
  arugula_rocket_leaves_100g: { query: 'arugula', canonicalName: 'Arugula (Rocket Leaves)', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Arugula (Rocket Leaves)', 174, 202, 13, '100g', 'vegetables', true, '10 min'),
  ]},
  bok_choy_chinese_cabbage_1pc: { query: 'bok choy', canonicalName: 'Bok Choy', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Bok Choy', 109, 128, 14, '1 pc', 'vegetables', true, '10 min'),
  ]},
  pak_choi_medium_1pc: { query: 'pak choi', canonicalName: 'Pak Choi', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Pak Choi', 102, 118, 13, '1 pc', 'vegetables', true, '10 min'),
  ]},
  red_cabbage_small_1pc: { query: 'red cabbage', canonicalName: 'Red Cabbage (Small)', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Red Cabbage (Small)', 48, 55, 12, '1 pc', 'vegetables', true, '10 min'),
  ]},
  chinese_cabbage_large_1pc: { query: 'chinese cabbage', canonicalName: 'Chinese Cabbage', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Chinese Cabbage', 105, 132, 20, '1 pc', 'vegetables', true, '10 min'),
  ]},
  zucchini_yellow_imported_1pc: { query: 'zucchini', canonicalName: 'Zucchini (Yellow Imported)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Zucchini (Yellow Imported)', 130, 157, 17, '1 pc', 'vegetables', true, '10 min'),
  ]},
  zucchini_green_regular_500g: { query: 'zucchini', canonicalName: 'Zucchini (Green Regular)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Zucchini (Green Regular)', 70, 79, 11, '500g', 'vegetables', true, '10 min'),
  ]},
  pumpkin_green_desi_1kg: { query: 'pumpkin', canonicalName: 'Pumpkin Green (Desi)', category: 'Vegetables', icon: '🎃', prices: [
    p('blinkit',   'Pumpkin Green (Desi)', 48, 57, 15, '1 kg', 'vegetables', true, '10 min'),
  ]},
  bottle_gourd_round_1pc: { query: 'bottle gourd', canonicalName: 'Bottle Gourd (Round)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Bottle Gourd (Round)', 45, 58, 22, '1 pc', 'vegetables', true, '10 min'),
  ]},
  bitter_gourd_dark_green_500g: { query: 'bitter gourd', canonicalName: 'Bitter Gourd (Dark Green)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Bitter Gourd (Dark Green)', 65, 81, 19, '500g', 'vegetables', true, '10 min'),
  ]},
  ivy_gourd_baby_tindora_250g: { query: 'ivy gourd', canonicalName: 'Ivy Gourd (Baby Tindora)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Ivy Gourd (Baby Tindora)', 51, 58, 12, '250g', 'vegetables', true, '10 min'),
  ]},
  snake_gourd_small_pack: { query: 'snake gourd', canonicalName: 'Snake Gourd (Small)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Snake Gourd (Small)', 60, 67, 10, '1 pack', 'vegetables', true, '10 min'),
  ]},
  parwal_pointed_gourd_250g: { query: 'parwal', canonicalName: 'Parwal (Pointed Gourd)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Parwal (Pointed Gourd)', 50, 57, 12, '250g', 'vegetables', true, '10 min'),
  ]},
  kundru_ivy_gourd_500g: { query: 'kundru', canonicalName: 'Kundru (Ivy Gourd)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Kundru (Ivy Gourd)', 59, 72, 18, '500g', 'vegetables', true, '10 min'),
  ]},
  kantola_spiny_gourd_250g: { query: 'kantola', canonicalName: 'Kantola (Spiny Gourd)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Kantola (Spiny Gourd)', 89, 104, 14, '250g', 'vegetables', true, '10 min'),
  ]},
  tinda_apple_gourd_500g: { query: 'tinda', canonicalName: 'Tinda (Apple Gourd)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Tinda (Apple Gourd)', 72, 88, 18, '500g', 'vegetables', true, '10 min'),
  ]},
  okra_organic_premium_500g: { query: 'okra', canonicalName: 'Okra (Organic Premium)', category: 'Vegetables', icon: '🥒', prices: [
    p('blinkit',   'Okra (Organic Premium)', 108, 136, 20, '500g', 'vegetables', true, '10 min'),
  ]},
  beans_long_lobia_250g: { query: 'long beans', canonicalName: 'Beans (Long Lobia)', category: 'Vegetables', icon: '🫛', prices: [
    p('blinkit',   'Beans (Long Lobia)', 44, 50, 12, '250g', 'vegetables', true, '10 min'),
  ]},
  beans_soya_fresh_250g: { query: 'soya beans', canonicalName: 'Beans (Soya Fresh)', category: 'Vegetables', icon: '🫛', prices: [
    p('blinkit',   'Beans (Soya Fresh)', 48, 61, 21, '250g', 'vegetables', true, '10 min'),
  ]},
  beans_lima_val_250g: { query: 'lima beans', canonicalName: 'Beans (Lima Val)', category: 'Vegetables', icon: '🫛', prices: [
    p('blinkit',   'Beans (Lima Val)', 78, 89, 12, '250g', 'vegetables', true, '10 min'),
  ]},
  peas_frozen_premium_1kg: { query: 'peas', canonicalName: 'Peas (Frozen Premium) 1kg', category: 'Vegetables', icon: '🫛', prices: [
    p('blinkit',   'Peas (Frozen Premium) 1kg', 225, 251, 10, '1 kg', 'vegetables', true, '10 min'),
  ]},
  corn_frozen_sweet_1kg: { query: 'corn', canonicalName: 'Corn (Frozen Sweet) 1kg', category: 'Vegetables', icon: '🌽', prices: [
    p('blinkit',   'Corn (Frozen Sweet) 1kg', 194, 221, 12, '1 kg', 'vegetables', true, '10 min'),
  ]},
  mushroom_button_value_400g: { query: 'mushroom', canonicalName: 'Mushroom (Button Value)', category: 'Vegetables', icon: '🍄', prices: [
    p('blinkit',   'Mushroom (Button Value)', 163, 203, 19, '400g', 'vegetables', true, '10 min'),
  ]},
  mushroom_milky_white_200g: { query: 'mushroom', canonicalName: 'Mushroom (Milky White)', category: 'Vegetables', icon: '🍄', prices: [
    p('blinkit',   'Mushroom (Milky White)', 138, 179, 22, '200g', 'vegetables', true, '10 min'),
  ]},
  broccoli_florets_cleaned_200g: { query: 'broccoli', canonicalName: 'Broccoli Florets (Cleaned)', category: 'Vegetables', icon: '🥦', prices: [
    p('blinkit',   'Broccoli Florets (Cleaned)', 107, 130, 17, '200g', 'vegetables', true, '10 min'),
  ]},
  cauliflower_florets_cleaned_300g: { query: 'cauliflower', canonicalName: 'Cauliflower Florets (Cleaned)', category: 'Vegetables', icon: '🥦', prices: [
    p('blinkit',   'Cauliflower Florets (Cleaned)', 90, 115, 21, '300g', 'vegetables', true, '10 min'),
  ]},
  cabbage_shredded_cleaned_200g: { query: 'cabbage', canonicalName: 'Cabbage Shredded (Cleaned)', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Cabbage Shredded (Cleaned)', 75, 88, 14, '200g', 'vegetables', true, '10 min'),
  ]},
  salad_mix_garden_fresh_200g: { query: 'salad', canonicalName: 'Salad Mix (Garden Fresh)', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Salad Mix (Garden Fresh)', 127, 150, 15, '200g', 'vegetables', true, '10 min'),
  ]},
  sprouts_mixed_value_pack: { query: 'sprouts', canonicalName: 'Sprouts (Mixed Value Pack)', category: 'Vegetables', icon: '🌱', prices: [
    p('blinkit',   'Sprouts (Mixed Value Pack)', 72, 86, 16, '1 pack', 'vegetables', true, '10 min'),
  ]},
  sprouts_moong_200g_pack: { query: 'sprouts', canonicalName: 'Sprouts (Moong)', category: 'Vegetables', icon: '🌱', prices: [
    p('blinkit',   'Sprouts (Moong)', 45, 51, 11, '200g', 'vegetables', true, '10 min'),
  ]},
  sprouts_chana_200g_pack: { query: 'sprouts', canonicalName: 'Sprouts (Chana)', category: 'Vegetables', icon: '🌱', prices: [
    p('blinkit',   'Sprouts (Chana)', 40, 51, 21, '200g', 'vegetables', true, '10 min'),
  ]},
  sprouts_methi_100g_pack: { query: 'sprouts', canonicalName: 'Sprouts (Methi)', category: 'Vegetables', icon: '🌱', prices: [
    p('blinkit',   'Sprouts (Methi)', 53, 61, 13, '100g', 'vegetables', true, '10 min'),
  ]},
  microgreens_sunflower_50g: { query: 'microgreens', canonicalName: 'Microgreens (Sunflower)', category: 'Vegetables', icon: '🌱', prices: [
    p('blinkit',   'Microgreens (Sunflower)', 227, 255, 10, '50g', 'vegetables', true, '10 min'),
  ]},
  microgreens_radish_50g: { query: 'microgreens', canonicalName: 'Microgreens (Radish)', category: 'Vegetables', icon: '🌱', prices: [
    p('blinkit',   'Microgreens (Radish)', 201, 259, 22, '50g', 'vegetables', true, '10 min'),
  ]},
  microgreens_broccoli_50g: { query: 'microgreens', canonicalName: 'Microgreens (Broccoli)', category: 'Vegetables', icon: '🌱', prices: [
    p('blinkit',   'Microgreens (Broccoli)', 189, 215, 12, '50g', 'vegetables', true, '10 min'),
  ]},
  edible_flowers_mixed_20g: { query: 'edible flowers', canonicalName: 'Edible Flowers (Mixed)', category: 'Vegetables', icon: '🌸', prices: [
    p('blinkit',   'Edible Flowers (Mixed)', 424, 466, 9, '20g', 'vegetables', true, '10 min'),
  ]},
  watercress_fresh_50g: { query: 'watercress', canonicalName: 'Watercress', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Watercress', 146, 166, 12, '50g', 'vegetables', true, '10 min'),
  ]},
  sorrel_leaves_fresh_50g: { query: 'sorrel', canonicalName: 'Sorrel Leaves', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Sorrel Leaves', 152, 168, 9, '50g', 'vegetables', true, '10 min'),
  ]},
  dill_leaves_shepu_1bunch: { query: 'dill', canonicalName: 'Dill Leaves (Shepu)', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Dill Leaves (Shepu)', 36, 45, 20, '1 bunch', 'vegetables', true, '10 min'),
  ]},
  spring_onion_with_greens_250g: { query: 'spring onion', canonicalName: 'Spring Onion (With Greens)', category: 'Vegetables', icon: '🧅', prices: [
    p('blinkit',   'Spring Onion (With Greens)', 60, 68, 11, '250g', 'vegetables', true, '10 min'),
  ]},
  leeks_fresh_imported_1pc: { query: 'leeks', canonicalName: 'Leeks (Imported)', category: 'Vegetables', icon: '🥬', prices: [
    p('blinkit',   'Leeks (Imported)', 147, 175, 16, '1 pc', 'vegetables', true, '10 min'),
  ]},
  scallions_fresh_1bunch: { query: 'scallions', canonicalName: 'Scallions', category: 'Vegetables', icon: '🧅', prices: [
    p('blinkit',   'Scallions', 74, 94, 21, '1 bunch', 'vegetables', true, '10 min'),
  ]},
  shallots_small_onions_250g: { query: 'shallots', canonicalName: 'Shallots (Small Onions)', category: 'Vegetables', icon: '🧅', prices: [
    p('blinkit',   'Shallots (Small Onions)', 99, 120, 17, '250g', 'vegetables', true, '10 min'),
  ]},
  garlic_regular_indian_250g: { query: 'garlic', canonicalName: 'Garlic (Regular Indian)', category: 'Vegetables', icon: '🧄', prices: [
    p('blinkit',   'Garlic (Regular Indian)', 169, 188, 10, '250g', 'vegetables', true, '10 min'),
  ]},
  garlic_single_clove_pearl_100g: { query: 'garlic', canonicalName: 'Garlic (Single Clove Pearl)', category: 'Vegetables', icon: '🧄', prices: [
    p('blinkit',   'Garlic (Single Clove Pearl)', 288, 324, 11, '100g', 'vegetables', true, '10 min'),
  ]},
  ginger_regular_indian_500g: { query: 'ginger', canonicalName: 'Ginger (Regular Indian)', category: 'Vegetables', icon: '🫚', prices: [
    p('blinkit',   'Ginger (Regular Indian)', 236, 269, 12, '500g', 'vegetables', true, '10 min'),
  ]},
  chilies_green_birds_eye_50g: { query: 'green chilli', canonicalName: 'Chilies Green (Birds Eye)', category: 'Vegetables', icon: '🌶️', prices: [
    p('blinkit',   'Chilies Green (Birds Eye)', 65, 81, 19, '50g', 'vegetables', true, '10 min'),
  ]},
  chilies_red_fresh_100g: { query: 'red chilli', canonicalName: 'Chilies Red (Fresh)', category: 'Vegetables', icon: '🌶️', prices: [
    p('blinkit',   'Chilies Red (Fresh)', 56, 72, 22, '100g', 'vegetables', true, '10 min'),
  ]},

  // ─── FISH & SEAFOOD SECTION ──────────────────────────────────────────────────
  rohu_fish_large_1kg: { query: 'rohu fish', canonicalName: 'Rohu Fish (Large - Cut)', category: 'Fish & Seafood', icon: '🐟', prices: [
    p('blinkit',   'Rohu Fish (Large - Cut)', 240, 280, 14, '1 kg', 'seafood', true, '15 min'),
  ]},
  catla_fish_medium_1kg: { query: 'catla fish', canonicalName: 'Catla Fish (Medium)', category: 'Fish & Seafood', icon: '🐟', prices: [
    p('blinkit',   'Catla Fish (Medium)', 220, 260, 15, '1 kg', 'seafood', true, '15 min'),
  ]},
  prawns_medium_cleaned_500g: { query: 'prawns', canonicalName: 'Prawns (Medium - Cleaned)', category: 'Fish & Seafood', icon: '🦐', prices: [
    p('blinkit',   'Prawns (Medium - Cleaned)', 380, 450, 15, '500g', 'seafood', true, '15 min'),
  ]},
  tiger_prawns_large_500g: { query: 'prawns', canonicalName: 'Tiger Prawns (Large)', category: 'Fish & Seafood', icon: '🦐', prices: [
    p('blinkit',   'Tiger Prawns (Large)', 550, 620, 11, '500g', 'seafood', true, '15 min'),
  ]},
  hilsa_fish_ilish_1kg: { query: 'hilsa fish', canonicalName: 'Hilsa Fish (Ilish)', category: 'Fish & Seafood', icon: '🐟', prices: [
    p('blinkit',   'Hilsa Fish (Ilish)', 1200, 1450, 17, '1 kg', 'seafood', true, '20 min'),
  ]},
  pomfret_silver_medium_500g: { query: 'pomfret', canonicalName: 'Pomfret (Silver - Medium)', category: 'Fish & Seafood', icon: '🐟', prices: [
    p('blinkit',   'Pomfret (Silver - Medium)', 450, 520, 13, '500g', 'seafood', true, '15 min'),
  ]},
  surmai_king_fish_steaks_500g: { query: 'surmai', canonicalName: 'Surmai (King Fish Steaks)', category: 'Fish & Seafood', icon: '🐟', prices: [
    p('blinkit',   'Surmai (King Fish Steaks)', 480, 550, 12, '500g', 'seafood', true, '15 min'),
  ]},
  salmon_fillet_premium_250g: { query: 'salmon', canonicalName: 'Salmon Fillet (Premium)', category: 'Fish & Seafood', icon: '🍣', prices: [
    p('blinkit',   'Salmon Fillet (Premium)', 650, 750, 13, '250g', 'seafood', true, '15 min'),
  ]},
  basa_fillet_platinum_1kg: { query: 'basa fish', canonicalName: 'Basa Fillet (Platinum)', category: 'Fish & Seafood', icon: '🐟', prices: [
    p('blinkit',   'Basa Fillet (Platinum)', 320, 380, 15, '1 kg', 'seafood', true, '15 min'),
  ]},
  crabs_blue_swimmer_500g: { query: 'crab', canonicalName: 'Crabs (Blue Swimmer)', category: 'Fish & Seafood', icon: '🦀', prices: [
    p('blinkit',   'Crabs (Blue Swimmer)', 340, 400, 15, '500g', 'seafood', true, '15 min'),
  ]},
  squid_rings_cleaned_250g: { query: 'squid', canonicalName: 'Squid Rings (Cleaned)', category: 'Fish & Seafood', icon: '🦑', prices: [
    p('blinkit',   'Squid Rings (Cleaned)', 210, 250, 16, '250g', 'seafood', true, '15 min'),
  ]},
  mackerel_bangda_small_500g: { query: 'mackerel', canonicalName: 'Mackerel (Bangda)', category: 'Fish & Seafood', icon: '🐟', prices: [
    p('blinkit',   'Mackerel (Bangda)', 180, 210, 14, '500g', 'seafood', true, '15 min'),
  ]},
  singhara_fish_steaks_500g: { query: 'singhara', canonicalName: 'Singhara Fish (Steaks)', category: 'Fish & Seafood', icon: '🐟', prices: [
    p('blinkit',   'Singhara Fish (Steaks)', 260, 310, 16, '500g', 'seafood', true, '15 min'),
  ]},
  lobster_whole_fresh_1pc: { query: 'lobster', canonicalName: 'Lobster (Whole Fresh)', category: 'Fish & Seafood', icon: '🦞', prices: [
    p('blinkit',   'Lobster (Whole Fresh)', 850, 990, 14, '1 pc', 'seafood', true, '20 min'),
  ]},
  tuna_canned_chunks_185g: { query: 'tuna', canonicalName: 'Tuna (Canned Chunks)', category: 'Fish & Seafood', icon: '🥫', prices: [
    p('blinkit',   'Tuna (Canned Chunks)', 145, 175, 17, '185g', 'seafood', true, '10 min'),
  ]},
};

// ─── PRICE DETECTION SYSTEM ────────────────────────────────────────────────────
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const estimateBasePrice = (query: string): number => {
  const q = query.toLowerCase();
  if (/mutton|lamb/.test(q)) return 550;
  if (/chicken boneless/.test(q)) return 290;
  if (/chicken/.test(q)) return 220;
  if (/fish|salmon|tuna|rohu|catla/.test(q)) return 220;
  if (/prawn|shrimp|crab|lobster/.test(q)) return 350;
  if (/avocado/.test(q)) return 160;
  if (/strawberry|blueberry|kiwi/.test(q)) return 140;
  if (/mango|alphonso/.test(q)) return 280;
  if (/apple|shimla/.test(q)) return 180;
  if (/pomegranate/.test(q)) return 130;
  if (/watermelon/.test(q)) return 40;
  if (/banana|papaya|guava/.test(q)) return 55;
  if (/basmati|india gate|daawat/.test(q)) return 165;
  if (/rice/.test(q)) return 70;
  if (/atta|flour|maida/.test(q)) return 65;
  if (/dal|pulse|rajma|chana|lentil/.test(q)) return 120;
  if (/ghee/.test(q)) return 580;
  if (/paneer/.test(q)) return 95;
  if (/cheese/.test(q)) return 100;
  if (/butter/.test(q)) return 58;
  if (/curd|dahi|yogurt/.test(q)) return 42;
  if (/milk/.test(q)) return 31;
  if (/mustard oil/.test(q)) return 180;
  if (/oil/.test(q)) return 150;
  if (/biscuit|cookie/.test(q)) return 40;
  if (/chocolate|bar/.test(q)) return 90;
  if (/chips|namkeen/.test(q)) return 25;
  if (/noodles|maggi|pasta/.test(q)) return 85;
  if (/bread/.test(q)) return 45;
  if (/cola|pepsi|coke|soda/.test(q)) return 42;
  if (/juice/.test(q)) return 75;
  if (/tea/.test(q)) return 105;
  if (/coffee/.test(q)) return 130;
  if (/mushroom/.test(q)) return 55;
  if (/egg/.test(q)) return 78;
  return 50;
};

export const getBestPrice = (prices: PlatformPrice[]): PlatformPrice | null => {
  const inStock = prices.filter((p) => p.inStock);
  if (inStock.length === 0) return null;
  return inStock.reduce((best, curr) => (curr.price < best.price ? curr : best), inStock[0]);
};

const searchPricesInternal = async (query: string, _pincode?: string): Promise<CompareResult | null> => {
  await delay(400 + Math.random() * 300);
  const key = query.toLowerCase().trim();

  // 1. Identify the Product ID (Match either Supabase ID or MOCK_DB Key)
  let productId = key;
  let dbProduct: any = null;

  try {
    // Make search fuzzy by replacing spaces with wildcards (e.g., '7 up' -> '%7%up%')
    const fuzzyKey = key.replace(/\s+/g, '%');
    
    const { data: pData, error: pError } = await supabase
      .from('products')
      .select('*')
      .or(`id.eq.${key},canonical_name.ilike.%${fuzzyKey}%`)
      .limit(1)
      .single();
    
    if (!pError && pData) {
      dbProduct = pData;
      productId = pData.id;
    } else {
      // If not in DB, cautiously check MOCK_DB properties
      const match = Object.keys(MOCK_DB).find((k) => 
        k === key || 
        MOCK_DB[k as keyof typeof MOCK_DB].query.toLowerCase() === key ||
        MOCK_DB[k as keyof typeof MOCK_DB].canonicalName.toLowerCase().includes(key)
      );
      if (match) productId = match;
    }

    // 2. NOW fetch Live Prices for this specific ID
    const { data: dbPrices, error: prError } = await supabase
      .from('live_prices')
      .select('*')
      .eq('item_name', productId);

    if (!prError && dbPrices && dbPrices.length > 0) {
      return {
        query: productId,
        canonicalName: dbProduct?.canonical_name || MOCK_DB[productId]?.canonicalName || productId.toUpperCase(),
        category: dbProduct?.category || MOCK_DB[productId]?.category || 'Grocery',
        icon: dbProduct?.icon || MOCK_DB[productId]?.icon || '🛒',
        prices: dbPrices.map(p => {
          const fluc = getDailyFluctuation(productId, p.platform_id);
          const fPrice = Math.round(p.price * fluc);
          return {
            platformId: p.platform_id,
            productName: p.canonical_name || dbProduct?.canonical_name || productId,
            price: fPrice,
            originalPrice: Math.round(fPrice * 1.15),
            discount: 15,
            unit: '1 unit',
            inStock: p.in_stock,
            url: generateSearchUrl(p.platform_id, productId),
            lastUpdated: p.last_updated,
            deliveryTime: p.platform_id === 'swiggy' ? '15 min' : '10 min',
            isVerified: true
          };
        })
      };
    }
  } catch (e) {
    console.error("Database search sequence failed", e);
  }

  // 2. Fallback to MOCK_DB / Auto-generation logic
  let resultTemplate: CompareResult;
  const match = Object.keys(MOCK_DB).find((k) => k === key || k.includes(key) || key.includes(k));

  if (match) {
    resultTemplate = JSON.parse(JSON.stringify(MOCK_DB[match])) as CompareResult;
    const platformIds = ['blinkit', 'zepto', 'swiggy', 'bigbasket', 'amazon', 'jiomart', 'flipkart'];
    const basePrice = resultTemplate.prices[0]?.originalPrice || estimateBasePrice(key);
    
    platformIds.forEach(pId => {
      if (!resultTemplate.prices.find(p => p.platformId === pId)) {
        const deliveryTime = pId === 'swiggy' ? '15 min' : (pId === 'jiomart' ? '1 day' : (['bigbasket', 'amazon'].includes(pId) ? '2 hrs' : '10 min'));
        resultTemplate.prices.push({ 
          platformId: pId, 
          productName: resultTemplate.canonicalName, 
          price: vary(basePrice, 0.85, 1.1), 
          originalPrice: vary(basePrice, 1.1, 1.25), 
          discount: 15, 
          unit: '1 unit', 
          inStock: true, 
          url: '#', 
          lastUpdated: new Date().toISOString(), 
          deliveryTime 
        });
      }
    });
  } else {
    const basePrice = estimateBasePrice(key);
    resultTemplate = {
        query,
        canonicalName: query.charAt(0).toUpperCase() + query.slice(1),
        category: 'Grocery',
        icon: '🛒',
        prices: [
            { platformId: 'blinkit',   productName: query, price: vary(basePrice, 0.92, 1.08), originalPrice: vary(basePrice, 1.1, 1.2),  discount: 8,  unit: '1 unit', inStock: true,  url: '#', lastUpdated: new Date().toISOString(), deliveryTime: '10 min' },
            { platformId: 'bigbasket', productName: query, price: vary(basePrice, 0.88, 1.02), originalPrice: vary(basePrice, 1.05, 1.15), discount: 12, unit: '1 unit', inStock: true,  url: '#', lastUpdated: new Date().toISOString(), deliveryTime: '2 hrs'  },
            { platformId: 'swiggy',    productName: query, price: vary(basePrice, 0.95, 1.1),  originalPrice: vary(basePrice, 1.08, 1.18), discount: 10, unit: '1 unit', inStock: true,  url: '#', lastUpdated: new Date().toISOString(), deliveryTime: '15 min' },
            { platformId: 'zepto',     productName: query, price: vary(basePrice, 0.86, 1.04), originalPrice: vary(basePrice, 1.1, 1.2),  discount: 15, unit: '1 unit', inStock: true,  url: '#', lastUpdated: new Date().toISOString(), deliveryTime: '10 min' },
            { platformId: 'amazon',    productName: query, price: vary(basePrice, 1.0,  1.2),  originalPrice: vary(basePrice, 1.15, 1.3), discount: 11, unit: '1 unit', inStock: true,  url: '#', lastUpdated: new Date().toISOString(), deliveryTime: '2 hrs'  },
            { platformId: 'jiomart',   productName: query, price: vary(basePrice, 0.84, 0.98), originalPrice: vary(basePrice, 1.0, 1.12), discount: 14, unit: '1 unit', inStock: true,  url: '#', lastUpdated: new Date().toISOString(), deliveryTime: '1 day'  },
            { platformId: 'flipkart',  productName: query, price: vary(basePrice, 0.85, 1.0),  originalPrice: vary(basePrice, 1.08, 1.15), discount: 12, unit: '1 unit', inStock: true,  url: '#', lastUpdated: new Date().toISOString(), deliveryTime: '15 min' },
        ]
    };
  }

  // Apply deterministic daily fluctuation to auto-generated/fallback prices
  resultTemplate.prices = resultTemplate.prices.map(p => {
    const fluc = getDailyFluctuation(resultTemplate.query, p.platformId);
    const fPrice = Math.round(p.price * fluc);
    return {
      ...p,
      price: fPrice,
      originalPrice: Math.max(p.originalPrice, Math.round(fPrice * 1.15))
    };
  });

    // 2.5 Log a background Scrape Request for new items (Scrape-on-Demand)
    try {
        // Only request if it's not a known item in MOCK_DB (to save bot capacity)
        if (!match) {
            await supabase.from('scrape_requests').upsert({ 
                query: key,
                status: 'pending'
            }, { onConflict: 'query' });
        }
    } catch (e) {
        console.warn("Could not log scrape request", e);
    }

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

// 5. EXPORT (Live Data - No Cache)
export const searchPrices = async (query: string) => {
  return searchPricesInternal(query);
};
