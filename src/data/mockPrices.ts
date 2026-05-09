// ------------------------------------------------------------------
import { supabase } from '../lib/supabase';
import { unstable_cache } from 'next/cache';
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
  kolam_rice: { query: 'kolam rice', canonicalName: 'Kolam Rice', category: 'Grains & Pulses', icon: '🌾', prices: [
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
  mayo_eggless: { query: 'eggless mayo', canonicalName: 'Eggless Mayonnaise', category: 'Packaged Foods', icon: '🥫', prices: [
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
  sweet_potato_fresh: { query: 'shakarkandi', canonicalName: 'Sweet Potato (Shakarkandi)', category: 'Vegetables', icon: '🍠', prices: [
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
// 4. Internal implementation (uncached)
const searchPricesInternal = async (query: string, _pincode?: string): Promise<CompareResult | null> => {
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
                live: true,
                isVerified: true
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

// 5. CACHED EXPORT: This protects your Vercel CPU limits!
// Caches results for 24 hours (86400 seconds)
export const searchPrices = unstable_cache(
  async (query: string) => searchPricesInternal(query),
  ['food-prices'],
  { revalidate: 86400, tags: ['prices'] }
);
