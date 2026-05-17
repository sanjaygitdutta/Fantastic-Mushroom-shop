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
    blinkit: `https://blinkit.com/s/?q=${encodeURIComponent(query)}`,
    bigbasket: `https://www.bigbasket.com/ps/?q=${encodeURIComponent(query)}`,
    swiggy: `https://swiggy.com/instamart/search?query=${encodeURIComponent(query)}`,
    zepto: `https://www.zeptonow.com/search?query=${encodeURIComponent(query)}`,
    amazon: `https://www.amazon.in/s?k=${encodeURIComponent(query)}&i=amazonfresh`,
    jiomart: `https://www.jiomart.com/search/${encodeURIComponent(query)}`,
    flipkart: `https://www.flipkart.com/search?q=${encodeURIComponent(query)}&p%5B%5D=facets.fulfillment_id%255B%255D%3DFlipkart%2BMinutes`,
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
export const MOCK_DB_SG: Record<string, CompareResult> = {

  // ── VEGETABLES ─────────────────────────────────────────────────────────────
  onion: {
    query: 'onion', canonicalName: 'Onion (Red)', category: 'Vegetables', icon: '🧅', prices: [
      p('fairprice', 'Onion (Red)', 2.19, 2.62, 16, '1 kg', 'onion', true, '2 hrs'),
      p('redmart', 'RedMart Onion', 2.12, 2.53, 15, '1 kg', 'onion', true, '1 day'),
      p('coldstorage', 'Fresh Onion', 2.23, 2.64, 13, '1 kg', 'onion', true, 'Same day'),
      p('shengsiong', 'Onion Red', 2.1, 2.56, 21, '1 kg', 'onion', true, '4 hrs'),
      p('giant', 'Fresh Onion (Red)', 2.23, 2.67, 17, '1 kg', 'onion', true, 'Same day'),
      p('grabmart', 'Onion', 2.05, 2.49, 21, '1 kg', 'onion', true, '15 min'),
      p('pandamart', 'Fresh Onion', 2.08, 2.53, 20, '1 kg', 'onion', true, '15 min'),
    ]
  },
  tomato: {
    query: 'tomato', canonicalName: 'Tomato', category: 'Vegetables', icon: '🍅', prices: [
      p('amazon_sg', 'Tomato Fresh', 2.37, 2.82, 14, '1 kg', 'tomato', true, '2 hrs'),
      p('fairprice', 'FairPrice Tomato', 2.23, 2.71, 20, '1 kg', 'tomato', true, '2 hrs'),
      p('redmart', 'Tomato', 2.34, 2.8, 16, '1 kg', 'tomato', true, '1 day'),
      p('coldstorage', 'Tomato (Hybrid)', 2.26, 2.75, 19, '1 kg', 'tomato', true, 'Same day'),
      p('shengsiong', 'Fresh Tomato', 2.41, 2.85, 14, '1 kg', 'tomato', true, '4 hrs'),
      p('giant', 'Tomato', 2.15, 2.64, 22, '1 kg', 'tomato', true, 'Same day'),
      p('grabmart', 'Tomato', 2.19, 2.67, 21, '1 kg', 'tomato', true, '15 min'),
    ]
  },
  potato: {
    query: 'potato', canonicalName: 'Potato', category: 'Vegetables', icon: '🥔', prices: [
      p('pandamart', 'White Potato', 2.01, 2.44, 20, '1 kg', 'potato', true, '15 min'),
      p('amazon_sg', 'Amazon Fresh Potato', 1.94, 2.35, 20, '1 kg', 'potato', true, '2 hrs'),
      p('fairprice', 'Potato', 2.05, 2.45, 17, '1 kg', 'potato', true, '2 hrs'),
      p('redmart', 'Potato', 1.95, 2.38, 22, '1 kg', 'potato', true, '1 day'),
      p('coldstorage', 'Fresh Potato', 2.05, 2.49, 21, '1 kg', 'potato', true, 'Same day'),
      p('shengsiong', 'Potato', 1.9, 2.31, 21, '1 kg', 'potato', true, '4 hrs'),
      p('giant', 'Fresh Potato', 1.94, 2.35, 20, '1 kg', 'potato', true, 'Same day'),
    ]
  },
  spinach: {
    query: 'spinach', canonicalName: 'Spinach (Palak)', category: 'Vegetables', icon: '🌿', prices: [
      p('grabmart', 'Spinach (Palak)', 1.9, 2.31, 21, '250g', 'spinach', true, '15 min'),
      p('pandamart', 'pandamart Spinach', 1.83, 2.2, 18, '250g', 'spinach', true, '15 min'),
      p('amazon_sg', 'Palak Fresh', 1.94, 2.31, 14, '250g', 'spinach', true, '2 hrs'),
      p('fairprice', 'Spinach Bundle', 1.85, 2.25, 24, '250g', 'spinach', true, '2 hrs'),
      p('redmart', 'Fresh Spinach', 1.97, 2.35, 13, '250g', 'spinach', false, '1 day'),
      p('coldstorage', 'Spinach', 1.79, 2.2, 27, '250g', 'spinach', true, 'Same day'),
    ]
  },
  carrot: {
    query: 'carrot', canonicalName: 'Carrot (Gajar)', category: 'Vegetables', icon: '🥕', prices: [
      p('shengsiong', 'Fresh Carrot', 2.37, 2.82, 14, '500g', 'carrot', true, '4 hrs'),
      p('giant', 'Giant Carrot', 2.26, 2.71, 16, '500g', 'carrot', true, 'Same day'),
      p('grabmart', 'Carrot', 2.41, 2.85, 14, '500g', 'carrot', true, '15 min'),
      p('pandamart', 'Orange Carrot', 2.3, 2.8, 20, '500g', 'carrot', true, '15 min'),
      p('amazon_sg', 'Fresh Carrot', 2.45, 2.89, 13, '500g', 'carrot', true, '2 hrs'),
      p('fairprice', 'Carrot', 2.19, 2.67, 21, '500g', 'carrot', true, '2 hrs'),
    ]
  },
  capsicum: {
    query: 'capsicum', canonicalName: 'Capsicum (Bell Pepper)', category: 'Vegetables', icon: '🫑', prices: [
      p('redmart', 'Green Capsicum', 2.5, 2.98, 15, '500g', 'capsicum', true, '1 day'),
      p('coldstorage', 'Cold Storage Capsicum', 2.37, 2.8, 13, '500g', 'capsicum', true, 'Same day'),
      p('shengsiong', 'Capsicum Green', 2.55, 3.04, 15, '500g', 'capsicum', true, '4 hrs'),
      p('giant', 'Bell Pepper Green', 2.41, 2.93, 19, '500g', 'capsicum', true, 'Same day'),
      p('grabmart', 'Fresh Capsicum', 2.59, 3.07, 14, '500g', 'capsicum', false, '15 min'),
      p('pandamart', 'Capsicum', 2.3, 2.8, 20, '500g', 'capsicum', true, '15 min'),
    ]
  },
  cucumber: {
    query: 'cucumber', canonicalName: 'Cucumber (Kheera)', category: 'Vegetables', icon: '🥒', prices: [
      p('amazon_sg', 'Cucumber', 2.01, 2.44, 20, '500g', 'cucumber', true, '2 hrs'),
      p('fairprice', 'FairPrice Kheera', 1.94, 2.35, 20, '500g', 'cucumber', true, '2 hrs'),
      p('redmart', 'Cucumber', 2.05, 2.45, 17, '500g', 'cucumber', true, '1 day'),
      p('coldstorage', 'Green Cucumber', 1.9, 2.35, 27, '500g', 'cucumber', true, 'Same day'),
      p('shengsiong', 'Fresh Cucumber', 2.08, 2.49, 16, '500g', 'cucumber', true, '4 hrs'),
      p('giant', 'Cucumber', 1.86, 2.31, 29, '500g', 'cucumber', true, 'Same day'),
    ]
  },
  ladyfinger: {
    query: 'ladyfinger', canonicalName: 'Lady Finger (Bhindi)', category: 'Vegetables', icon: '🫘', prices: [
      p('grabmart', 'Bhindi (Lady Finger)', 2.45, 2.98, 20, '500g', 'bhindi', true, '15 min'),
      p('pandamart', 'pandamart Bhindi', 2.32, 2.8, 18, '500g', 'bhindi', true, '15 min'),
      p('amazon_sg', 'Lady Finger', 2.5, 2.98, 15, '500g', 'bhindi', true, '2 hrs'),
      p('fairprice', 'Bhindi', 2.37, 2.89, 20, '500g', 'bhindi', true, '2 hrs'),
      p('redmart', 'Fresh Bhindi', 2.55, 3.04, 15, '500g', 'bhindi', false, '1 day'),
      p('coldstorage', 'Lady Finger', 2.23, 2.75, 23, '500g', 'bhindi', true, 'Same day'),
    ]
  },
  brinjal: {
    query: 'brinjal', canonicalName: 'Brinjal (Baingan)', category: 'Vegetables', icon: '🍆', prices: [
      p('shengsiong', 'Brinjal (Baingan)', 2.19, 2.62, 16, '500g', 'brinjal', true, '4 hrs'),
      p('giant', 'Giant Brinjal', 2.08, 2.53, 20, '500g', 'brinjal', true, 'Same day'),
      p('grabmart', 'Baingan', 2.23, 2.67, 17, '500g', 'brinjal', true, '15 min'),
      p('pandamart', 'Brinjal Purple', 2.12, 2.6, 23, '500g', 'brinjal', true, '15 min'),
      p('amazon_sg', 'Fresh Brinjal', 2.26, 2.71, 16, '500g', 'brinjal', true, '2 hrs'),
      p('fairprice', 'Brinjal', 2.01, 2.49, 26, '500g', 'brinjal', true, '2 hrs'),
    ]
  },
  mushroom: {
    query: 'mushroom', canonicalName: 'Button Mushroom', category: 'Vegetables', icon: '🍄', prices: [
      p('redmart', 'Button Mushroom', 2.5, 2.98, 15, '200g', 'mushroom', true, '1 day'),
      p('coldstorage', 'Cold Storage Button Mushroom', 2.39, 2.85, 16, '200g', 'mushroom', true, 'Same day'),
      p('shengsiong', 'Mushroom Button', 2.55, 2.98, 11, '200g', 'mushroom', true, '4 hrs'),
      p('giant', 'Button Mushroom', 2.45, 2.98, 20, '200g', 'mushroom', true, 'Same day'),
      p('grabmart', 'Fresh Button Mushroom', 2.59, 3.11, 17, '200g', 'mushroom', true, '15 min'),
      p('pandamart', 'Mushroom', 2.32, 2.8, 18, '200g', 'mushroom', true, '15 min'),
    ]
  },
  cauliflower: {
    query: 'cauliflower', canonicalName: 'Cauliflower (Gobi)', category: 'Vegetables', icon: '🥦', prices: [
      p('amazon_sg', 'Cauliflower', 2.19, 2.62, 15, '1 pc', 'cauliflower', true, '2 hrs'),
      p('fairprice', 'FairPrice Gobi', 2.08, 2.53, 20, '1 pc', 'cauliflower', true, '2 hrs'),
      p('redmart', 'Cauliflower Fresh', 2.23, 2.67, 17, '1 pc', 'cauliflower', true, '1 day'),
    ]
  },
  ginger: {
    query: 'ginger', canonicalName: 'Ginger (Adrak)', category: 'Vegetables', icon: '🫚', prices: [
      p('coldstorage', 'Ginger', 2.14, 2.62, 22, '250g', 'ginger', true, 'Same day'),
      p('shengsiong', 'Sheng Siong Adrak', 2.05, 2.53, 25, '250g', 'ginger', true, '4 hrs'),
      p('giant', 'Ginger Fresh', 2.08, 2.56, 24, '250g', 'ginger', true, 'Same day'),
    ]
  },
  garlic: {
    query: 'garlic', canonicalName: 'Garlic (Lahsun)', category: 'Vegetables', icon: '🧄', prices: [
      p('grabmart', 'Garlic', 2.32, 2.8, 18, '250g', 'garlic', true, '15 min'),
      p('pandamart', 'pandamart Garlic', 2.23, 2.71, 20, '250g', 'garlic', true, '15 min'),
      p('amazon_sg', 'Garlic (Ooty)', 2.26, 2.75, 19, '250g', 'garlic', true, '2 hrs'),
    ]
  },
  lemon: {
    query: 'lemon', canonicalName: 'Lemon (Nimbu)', category: 'Vegetables', icon: '🍋', prices: [
      p('fairprice', 'Lemon (Nimbu)', 1.95, 2.35, 16, '4 pcs', 'lemon', true, '2 hrs'),
      p('redmart', 'RedMart Lemon', 1.86, 2.25, 20, '4 pcs', 'lemon', true, '1 day'),
      p('coldstorage', 'Nimbu Fresh', 2.01, 2.38, 12, '4 pcs', 'lemon', true, 'Same day'),
    ]
  },
  chilli: {
    query: 'chilli', canonicalName: 'Green Chilli', category: 'Vegetables', icon: '🌶️', prices: [
      p('shengsiong', 'Green Chilli', 1.83, 2.2, 18, '100g', 'chilli', true, '4 hrs'),
      p('giant', 'Giant Green Chilli', 1.77, 2.16, 25, '100g', 'chilli', true, 'Same day'),
      p('grabmart', 'Chilli Green', 1.79, 2.16, 20, '100g', 'chilli', true, '15 min'),
    ]
  },
  coriander: {
    query: 'coriander', canonicalName: 'Coriander (Dhania)', category: 'Vegetables', icon: '🌿', prices: [
      p('pandamart', 'Coriander Bundle', 1.77, 2.16, 25, '100g', 'coriander', true, '15 min'),
      p('amazon_sg', 'Amazon Fresh Dhania', 1.72, 2.13, 33, '100g', 'coriander', true, '2 hrs'),
      p('fairprice', 'Dhania Fresh', 1.83, 2.2, 18, '100g', 'coriander', true, '2 hrs'),
    ]
  },
  peas: {
    query: 'peas', canonicalName: 'Green Peas (Matar)', category: 'Vegetables', icon: '🫛', prices: [
      p('redmart', 'Green Peas', 2.32, 2.8, 18, '500g', 'peas', true, '1 day'),
      p('coldstorage', 'Cold Storage Matar', 2.23, 2.71, 20, '500g', 'peas', true, 'Same day'),
      p('shengsiong', 'Peas Green', 2.26, 2.75, 19, '500g', 'peas', true, '4 hrs'),
    ]
  },

  // ── FRUITS ─────────────────────────────────────────────────────────────────
  banana: {
    query: 'banana', canonicalName: 'Banana', category: 'Fruits', icon: '🍌', prices: [
      p('giant', 'Banana (Robusta)', 2.39, 2.8, 11, '6 pcs', 'banana', true, 'Same day'),
      p('grabmart', 'GrabMart Banana', 2.26, 2.71, 16, '6 pcs', 'banana', true, '15 min'),
      p('pandamart', 'Yellow Banana', 2.37, 2.82, 14, '6 pcs', 'banana', true, '15 min'),
      p('amazon_sg', 'Banana', 2.21, 2.71, 22, '6 pcs', 'banana', true, '2 hrs'),
      p('fairprice', 'Fresh Banana', 2.45, 2.85, 10, '6 pcs', 'banana', true, '2 hrs'),
      p('redmart', 'Banana', 2.19, 2.62, 16, '6 pcs', 'banana', true, '1 day'),
    ]
  },
  apple: {
    query: 'apple', canonicalName: 'Apple (Shimla)', category: 'Fruits', icon: '🍎', prices: [
      p('coldstorage', 'Shimla Apple', 4.86, 5.8, 16, '4 pcs', 'apple', true, 'Same day'),
      p('shengsiong', 'Sheng Siong Apple', 4.5, 5.35, 15, '4 pcs', 'apple', true, '4 hrs'),
      p('giant', 'Fresh Apple', 4.74, 5.62, 15, '4 pcs', 'apple', true, 'Same day'),
      p('grabmart', 'Shimla Apple', 4.41, 5.44, 20, '4 pcs', 'apple', true, '15 min'),
      p('pandamart', 'Academy Of Apples', 5.05, 5.98, 15, '4 pcs', 'apple', true, '15 min'),
      p('amazon_sg', 'Apple Shimla', 4.21, 5.22, 21, '4 pcs', 'apple', true, '2 hrs'),
    ]
  },
  mango: {
    query: 'mango', canonicalName: 'Mango (Alphonso)', category: 'Fruits', icon: '🥭', prices: [
      p('fairprice', 'Alphonso Mango', 6.59, 7.62, 13, '1 kg', 'mango', true, '2 hrs'),
      p('redmart', 'Hapus Alphonso Mango', 6.23, 7.25, 13, '1 kg', 'mango', true, '1 day'),
      p('coldstorage', 'Alphonso Mango', 6.86, 7.98, 13, '1 kg', 'mango', true, 'Same day'),
      p('shengsiong', 'Fresh Mango', 5.95, 7.25, 18, '1 kg', 'mango', true, '4 hrs'),
      p('giant', 'Premium Alphonso', 7.14, 8.35, 14, '1 kg', 'mango', true, 'Same day'),
      p('grabmart', 'Mango Alphonso', 5.77, 6.98, 18, '1 kg', 'mango', true, '15 min'),
    ]
  },
  grapes: {
    query: 'grapes', canonicalName: 'Green Grapes', category: 'Fruits', icon: '🍇', prices: [
      p('pandamart', 'Green Grapes', 3.23, 3.89, 17, '500g', 'grapes', true, '15 min'),
      p('amazon_sg', 'Amazon Fresh Grapes', 3.05, 3.62, 15, '500g', 'grapes', true, '2 hrs'),
      p('fairprice', 'Green Grapes', 3.28, 3.95, 17, '500g', 'grapes', true, '2 hrs'),
      p('redmart', 'Grapes Green', 2.95, 3.62, 20, '500g', 'grapes', true, '1 day'),
      p('coldstorage', 'Fresh Green Grapes', 3.41, 4.07, 16, '500g', 'grapes', true, 'Same day'),
      p('shengsiong', 'Grapes (Green)', 2.92, 3.58, 20, '500g', 'grapes', true, '4 hrs'),
    ]
  },
  papaya: {
    query: 'papaya', canonicalName: 'Papaya', category: 'Fruits', icon: '🍈', prices: [
      p('giant', 'Raw Papaya', 2.5, 2.98, 15, '1 kg', 'papaya', true, 'Same day'),
      p('grabmart', 'GrabMart Papaya', 2.37, 2.85, 17, '1 kg', 'papaya', true, '15 min'),
      p('pandamart', 'Papaya', 2.55, 3.07, 17, '1 kg', 'papaya', true, '15 min'),
      p('amazon_sg', 'Fresh Papaya', 2.41, 2.93, 19, '1 kg', 'papaya', true, '2 hrs'),
      p('fairprice', 'Papaya', 2.63, 3.11, 14, '1 kg', 'papaya', true, '2 hrs'),
      p('redmart', 'Papaya', 2.3, 2.8, 20, '1 kg', 'papaya', true, '1 day'),
    ]
  },
  orange: {
    query: 'orange', canonicalName: 'Orange (Nagpur)', category: 'Fruits', icon: '🍊', prices: [
      p('coldstorage', 'Nagpur Orange', 3.05, 3.62, 15, '1 kg', 'orange', true, 'Same day'),
      p('shengsiong', 'Sheng Siong Orange', 2.92, 3.44, 13, '1 kg', 'orange', true, '4 hrs'),
      p('giant', 'Orange (Kinnow)', 2.95, 3.53, 16, '1 kg', 'orange', true, 'Same day'),
    ]
  },
  watermelon: {
    query: 'watermelon', canonicalName: 'Watermelon', category: 'Fruits', icon: '🍉', prices: [
      p('grabmart', 'Watermelon', 2.32, 2.8, 18, '1 pc', 'watermelon', true, '15 min'),
      p('pandamart', 'pandamart Watermelon', 2.19, 2.67, 21, '1 pc', 'watermelon', true, '15 min'),
      p('amazon_sg', 'Kiran Watermelon', 2.37, 2.85, 17, '1 pc', 'watermelon', true, '2 hrs'),
    ]
  },
  pomegranate: {
    query: 'pomegranate', canonicalName: 'Pomegranate (Anaar)', category: 'Fruits', icon: '🍎', prices: [
      p('fairprice', 'Anaar (Pomegranate)', 4.86, 5.8, 16, '1 kg', 'pomegranate', true, '2 hrs'),
      p('redmart', 'RedMart Anaar', 4.68, 5.62, 17, '1 kg', 'pomegranate', true, '1 day'),
      p('coldstorage', 'Pomegranate Fresh', 4.77, 5.71, 16, '1 kg', 'pomegranate', true, 'Same day'),
    ]
  },

  // ── DAIRY ──────────────────────────────────────────────────────────────────
  milk: {
    query: 'milk', canonicalName: 'Full Cream Milk', category: 'Dairy', icon: '🥛', prices: [
      p('shengsiong', 'Amul Gold Full Cream', 2.06, 2.36, 0, '500 ml', 'milk', true, '4 hrs'),
      p('giant', 'Nandini Full Cream', 2.05, 2.35, 0, '500 ml', 'milk', true, 'Same day'),
      p('grabmart', 'Amul Full Cream Milk', 2.08, 2.38, 0, '500 ml', 'milk', true, '15 min'),
      p('pandamart', 'Mother Dairy FC', 2.06, 2.4, 6, '500 ml', 'milk', true, '15 min'),
      p('amazon_sg', 'Amul Gold', 2.06, 2.36, 0, '500 ml', 'milk', true, '2 hrs'),
      p('fairprice', 'FairPrice FC Milk', 2.03, 2.36, 6, '500 ml', 'milk', true, '2 hrs'),
    ]
  },
  ghee: {
    query: 'ghee', canonicalName: 'Desi Ghee (Cow)', category: 'Dairy', icon: '🧈', prices: [
      p('redmart', 'Amul Cow Ghee', 12.14, 13.07, 6, '1 L', 'ghee', true, '1 day'),
      p('coldstorage', 'Aashirvaad Ghee', 11.95, 12.89, 6, '1 L', 'ghee', true, 'Same day'),
      p('shengsiong', 'Amul Pure Ghee', 12.05, 13.07, 6, '1 L', 'ghee', true, '4 hrs'),
    ]
  },
  butter: {
    query: 'butter', canonicalName: 'Amul Butter', category: 'Dairy', icon: '🧈', prices: [
      p('giant', 'Amul Butter (Salted)', 2.55, 2.89, 3, '100g', 'butter', true, 'Same day'),
      p('grabmart', 'BB Homemade Butter', 2.45, 2.85, 10, '100g', 'butter', true, '15 min'),
      p('pandamart', 'Amul Butter', 2.57, 2.89, 2, '100g', 'butter', true, '15 min'),
      p('amazon_sg', 'Amul Pasteurised Butter', 2.5, 2.89, 8, '100g', 'butter', true, '2 hrs'),
      p('fairprice', 'Amul Butter Block', 2.59, 2.89, 0, '100g', 'butter', true, '2 hrs'),
      p('redmart', 'Butter Amul', 2.52, 2.89, 7, '100g', 'butter', true, '1 day'),
    ]
  },
  paneer: {
    query: 'paneer', canonicalName: 'Fresh Paneer', category: 'Dairy', icon: '🧀', prices: [
      p('coldstorage', 'Amul Fresh Paneer', 3.23, 3.8, 14, '200g', 'paneer', true, 'Same day'),
      p('shengsiong', 'Sheng Siong Paneer', 3.1, 3.62, 12, '200g', 'paneer', true, '4 hrs'),
      p('giant', 'Mother Dairy Paneer', 3.28, 3.89, 15, '200g', 'paneer', true, 'Same day'),
      p('grabmart', 'Paneer Fresh', 3.14, 3.76, 17, '200g', 'paneer', true, '15 min'),
      p('pandamart', 'Amul Paneer', 3.35, 3.95, 14, '200g', 'paneer', true, '15 min'),
      p('amazon_sg', 'Amazon Fresh Paneer', 3.05, 3.62, 15, '200g', 'paneer', true, '2 hrs'),
    ]
  },
  curd: {
    query: 'curd', canonicalName: 'Fresh Curd (Dahi)', category: 'Dairy', icon: '🍶', prices: [
      p('fairprice', 'Amul Masti Dahi', 2.26, 2.62, 7, '400g', 'curd dahi', true, '2 hrs'),
      p('redmart', 'Mother Dairy Curd', 2.19, 2.6, 14, '400g', 'curd dahi', true, '1 day'),
      p('coldstorage', 'Epigamia Greek Yogurt', 2.68, 3.16, 13, '400g', 'curd dahi', true, 'Same day'),
      p('shengsiong', 'Amul Masti Dahi', 2.23, 2.64, 13, '400g', 'curd dahi', true, '4 hrs'),
      p('giant', 'Amul Dahi', 2.3, 2.67, 8, '400g', 'curd dahi', true, 'Same day'),
      p('grabmart', 'Curd (Dahi)', 2.15, 2.56, 14, '400g', 'curd dahi', true, '15 min'),
    ]
  },
  cheese: {
    query: 'cheese', canonicalName: 'Processed Cheese', category: 'Dairy', icon: '🧀', prices: [
      p('pandamart', 'Amul Cheese Slices', 3.3, 3.89, 14, '200g', 'cheese', true, '15 min'),
      p('amazon_sg', 'BB Cheese Block', 3.1, 3.62, 12, '200g', 'cheese', true, '2 hrs'),
      p('fairprice', 'Amul Cheese', 3.35, 3.95, 14, '200g', 'cheese', true, '2 hrs'),
      p('redmart', 'Britannia Cheese', 3.17, 3.76, 15, '200g', 'cheese', true, '1 day'),
      p('coldstorage', 'Amul Cheese Block', 3.46, 4.07, 14, '200g', 'cheese', true, 'Same day'),
      p('shengsiong', 'Cheese Slices', 3.05, 3.58, 13, '200g', 'cheese', true, '4 hrs'),
    ]
  },

  // ── EGGS & POULTRY ─────────────────────────────────────────────────────────
  eggs: {
    query: 'eggs', canonicalName: 'Farm Fresh Eggs', category: 'Poultry', icon: '🥚', prices: [
      p('giant', 'White Eggs', 2.92, 3.33, 7, '12 pcs', 'eggs', true, 'Same day'),
      p('grabmart', 'GrabMart White Eggs', 2.81, 3.25, 10, '12 pcs', 'eggs', true, '15 min'),
      p('pandamart', 'Farm Fresh Eggs', 2.95, 3.33, 5, '12 pcs', 'eggs', true, '15 min'),
      p('amazon_sg', 'Country Eggs', 2.75, 3.25, 14, '12 pcs', 'eggs', true, '2 hrs'),
      p('fairprice', 'Organic Farm Eggs', 3.23, 3.8, 14, '12 pcs', 'eggs', true, '2 hrs'),
      p('redmart', 'Eggs', 2.85, 3.25, 8, '12 pcs', 'eggs', false, '1 day'),
    ]
  },
  chicken: {
    query: 'chicken', canonicalName: 'Fresh Chicken (Boneless)', category: 'Meat & Poultry', icon: '🍗', prices: [
      p('coldstorage', 'Licious Fresh Boneless', 6.75, 7.62, 10, '500g', 'chicken boneless', true, 'Same day'),
      p('shengsiong', 'Sheng Siong Chicken Boneless', 6.5, 7.44, 11, '500g', 'chicken boneless', true, '4 hrs'),
      p('giant', 'Chicken Breast', 6.94, 8.16, 15, '500g', 'chicken boneless', true, 'Same day'),
      p('grabmart', 'Fresh Chicken Boneless', 6.32, 7.44, 15, '500g', 'chicken boneless', true, '15 min'),
      p('pandamart', 'Licious Chicken', 7.14, 8.35, 14, '500g', 'chicken boneless', true, '15 min'),
      p('amazon_sg', 'Chicken Whole', 4.77, 5.44, 10, '500g', 'chicken', false, '2 hrs'),
    ]
  },

  // ── FISH & SEAFOOD ─────────────────────────────────────────────────────────
  fish: {
    query: 'fish', canonicalName: 'Rohu Fish', category: 'Seafood', icon: '🐟', prices: [
      p('fairprice', 'Licious Rohu Fish', 5.05, 6.07, 17, '500g', 'rohu fish', true, '2 hrs'),
      p('redmart', 'RedMart Rohu', 4.74, 5.71, 17, '500g', 'rohu fish', true, '1 day'),
      p('coldstorage', 'Rohu Fish Curry Cut', 5.23, 6.31, 17, '500g', 'rohu fish', true, 'Same day'),
      p('shengsiong', 'Rohu (Rui) Fish', 4.81, 5.8, 17, '500g', 'rohu fish', true, '4 hrs'),
      p('giant', 'Fresh Rohu Fish', 5.41, 6.49, 17, '500g', 'rohu fish', true, 'Same day'),
      p('grabmart', 'Rohu Fish', 4.55, 5.53, 18, '500g', 'rohu fish', false, '15 min'),
    ]
  },
  prawn: {
    query: 'prawn', canonicalName: 'Fresh Prawns', category: 'Seafood', icon: '🦐', prices: [
      p('pandamart', 'Licious Fresh Prawns', 7.41, 8.71, 14, '250g', 'prawns', true, '15 min'),
      p('amazon_sg', 'Amazon Fresh Prawn', 6.92, 8.16, 15, '250g', 'prawns', true, '2 hrs'),
      p('fairprice', 'Tiger Prawns', 7.77, 9.07, 14, '250g', 'prawns', true, '2 hrs'),
      p('redmart', 'Fresh Prawns', 7.1, 8.44, 16, '250g', 'prawns', true, '1 day'),
      p('coldstorage', 'Premium Prawns', 8.05, 9.44, 14, '250g', 'prawns', true, 'Same day'),
      p('shengsiong', 'Prawns (Jhinga)', 6.68, 7.98, 16, '250g', 'prawns', false, '4 hrs'),
    ]
  },

  // ── GRAINS & PULSES ────────────────────────────────────────────────────────
  rice: {
    query: 'rice', canonicalName: 'Basmati Rice', category: 'Grains & Pulses', icon: '🍚', prices: [
      p('giant', 'India Gate Classic', 4.37, 5.07, 12, '1 kg', 'basmati rice', true, 'Same day'),
      p('grabmart', 'GrabMart Basmati', 4.21, 4.89, 12, '1 kg', 'basmati rice', true, '15 min'),
      p('pandamart', 'Kohinoor Basmati', 4.5, 5.25, 13, '1 kg', 'basmati rice', true, '15 min'),
      p('amazon_sg', 'India Gate Basmati', 4.32, 5.16, 16, '1 kg', 'basmati rice', true, '2 hrs'),
      p('fairprice', 'Daawat Basmati', 4.63, 5.35, 12, '1 kg', 'basmati rice', true, '2 hrs'),
      p('redmart', 'RedMart Basmati', 4.08, 4.8, 14, '1 kg', 'basmati rice', true, '1 day'),
    ]
  },
  dal: {
    query: 'dal', canonicalName: 'Toor Dal (Arhar)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('coldstorage', 'Tata Sampann Toor Dal', 4.32, 4.98, 11, '1 kg', 'toor dal', true, 'Same day'),
      p('shengsiong', 'BB Popular Toor Dal', 4.19, 4.89, 13, '1 kg', 'toor dal', true, '4 hrs'),
      p('giant', 'Toor Dal', 4.41, 5.07, 11, '1 kg', 'toor dal', true, 'Same day'),
      p('grabmart', 'Arhar Dal', 4.14, 4.85, 14, '1 kg', 'toor dal', true, '15 min'),
      p('pandamart', 'Toor Dal Premium', 4.45, 5.16, 12, '1 kg', 'toor dal', true, '15 min'),
      p('amazon_sg', 'Toor Dal', 4.05, 4.75, 14, '1 kg', 'toor dal', true, '2 hrs'),
    ]
  },
  moong_dal: {
    query: 'moong dal', canonicalName: 'Moong Dal (Yellow)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('fairprice', 'Moong Dal', 3.95, 4.53, 10, '1 kg', 'moong dal', true, '2 hrs'),
      p('redmart', 'RedMart Moong Dal', 3.83, 4.44, 12, '1 kg', 'moong dal', true, '1 day'),
      p('coldstorage', 'Moong Dal Yellow', 3.86, 4.49, 12, '1 kg', 'moong dal', true, 'Same day'),
    ]
  },
  chana_dal: {
    query: 'chana dal', canonicalName: 'Chana Dal', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('shengsiong', 'Chana Dal', 3.23, 3.8, 14, '1 kg', 'chana dal', true, '4 hrs'),
      p('giant', 'BB Popular Chana Dal', 3.1, 3.62, 12, '1 kg', 'chana dal', true, 'Same day'),
    ]
  },
  rajma: {
    query: 'rajma', canonicalName: 'Rajma (Chitra)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('grabmart', 'Rajma Chitra', 4.5, 5.16, 11, '1 kg', 'rajma', true, '15 min'),
      p('pandamart', 'pandamart Rajma', 4.32, 5.07, 14, '1 kg', 'rajma', true, '15 min'),
    ]
  },
  turmeric: {
    query: 'turmeric', canonicalName: 'Turmeric Powder (Haldi)', category: 'Packaged Foods', icon: '🧂', prices: [
      p('amazon_sg', 'Tata Sampann Haldi', 2.68, 3.16, 13, '200g', 'turmeric', true, '2 hrs'),
      p('fairprice', 'Everest Haldi', 2.55, 3.04, 15, '200g', 'turmeric', true, '2 hrs'),
    ]
  },
  cumin: {
    query: 'cumin', canonicalName: 'Cumin Seeds (Jeera)', category: 'Packaged Foods', icon: '🧂', prices: [
      p('redmart', 'Jeera (Cumin)', 3.77, 4.53, 17, '200g', 'cumin', true, '1 day'),
      p('coldstorage', 'Catch Jeera', 3.59, 4.35, 18, '200g', 'cumin', true, 'Same day'),
    ]
  },
  masala: {
    query: 'garam masala', canonicalName: 'Garam Masala', category: 'Packaged Foods', icon: '🧂', prices: [
      p('shengsiong', 'Everest Garam Masala', 3.23, 3.8, 14, '100g', 'garam masala', true, '4 hrs'),
      p('giant', 'Catch Garam Masala', 3.1, 3.71, 16, '100g', 'garam masala', true, 'Same day'),
    ]
  },
  flour: {
    query: 'flour', canonicalName: 'Whole Wheat Flour (Atta)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('grabmart', 'Aashirvaad Atta', 2.63, 3.11, 14, '1 kg', 'whole wheat atta', true, '15 min'),
      p('pandamart', 'BB Popular Atta', 2.55, 3.04, 15, '1 kg', 'whole wheat atta', true, '15 min'),
      p('amazon_sg', 'Pillsbury Atta', 2.68, 3.16, 13, '1 kg', 'whole wheat atta', true, '2 hrs'),
      p('fairprice', 'Aashirvaad Multigrain', 2.59, 3.07, 14, '1 kg', 'whole wheat atta', true, '2 hrs'),
      p('redmart', 'Pavitra Atta', 2.74, 3.22, 13, '1 kg', 'whole wheat atta', true, '1 day'),
      p('coldstorage', 'Whole Wheat Atta', 2.5, 2.98, 15, '1 kg', 'whole wheat atta', true, 'Same day'),
    ]
  },

  // ── BAKERY ─────────────────────────────────────────────────────────────────
  bread: {
    query: 'bread', canonicalName: 'Whole Wheat Bread', category: 'Bakery', icon: '🍞', prices: [
      p('shengsiong', 'Britannia 100% Atta', 2.26, 2.71, 16, '400g', 'whole wheat bread', true, '4 hrs'),
      p('giant', 'BB Whole Wheat Bread', 2.19, 2.56, 10, '400g', 'whole wheat bread', true, 'Same day'),
      p('grabmart', 'Harvest Gold Atta', 2.23, 2.62, 11, '400g', 'whole wheat bread', true, '15 min'),
      p('pandamart', 'Britannia Atta Bread', 2.21, 2.71, 22, '400g', 'whole wheat bread', true, '15 min'),
      p('amazon_sg', 'Bonn Whole Wheat', 2.32, 2.71, 10, '400g', 'whole wheat bread', true, '2 hrs'),
      p('fairprice', 'Britannia Bread', 2.17, 2.62, 18, '400g', 'whole wheat bread', true, '2 hrs'),
    ]
  },

  // ── PACKAGED FOODS ─────────────────────────────────────────────────────────
  pasta: {
    query: 'pasta', canonicalName: 'Durum Wheat Pasta', category: 'Packaged Foods', icon: '🍝', prices: [
      p('redmart', 'Barilla Penne', 3.1, 3.71, 16, '500g', 'pasta penne', true, '1 day'),
      p('coldstorage', 'BB Popular Pasta', 2.81, 3.35, 15, '500g', 'pasta penne', true, 'Same day'),
      p('shengsiong', 'Borges Fusilli', 3.17, 3.8, 16, '500g', 'pasta penne', true, '4 hrs'),
      p('giant', 'Barilla Pasta', 3.05, 3.65, 17, '500g', 'pasta penne', true, 'Same day'),
      p('grabmart', 'Barilla Spaghetti', 3.23, 3.89, 17, '500g', 'pasta penne', true, '15 min'),
      p('pandamart', 'Durum Wheat Pasta', 2.74, 3.29, 17, '500g', 'pasta penne', true, '15 min'),
    ]
  },
  noodles: {
    query: 'noodles', canonicalName: 'Instant Noodles (Maggi)', category: 'Packaged Foods', icon: '🍜', prices: [
      p('amazon_sg', 'Maggi 2-Minute Masala', 1.75, 2.05, 0, '70g', 'maggi noodles', true, '2 hrs'),
      p('fairprice', 'Maggi Noodles', 1.74, 2.05, 7, '70g', 'maggi noodles', true, '2 hrs'),
      p('redmart', 'Maggi Masala Noodles', 1.75, 2.05, 0, '70g', 'maggi noodles', true, '1 day'),
      p('coldstorage', 'Yippee Noodles', 1.72, 2.05, 14, '70g', 'instant noodles', true, 'Same day'),
      p('shengsiong', 'Maggi 2-Minute', 1.75, 2.05, 0, '70g', 'maggi noodles', true, '4 hrs'),
      p('giant', 'Maggi Noodles', 1.72, 2.05, 14, '70g', 'maggi noodles', true, 'Same day'),
    ]
  },
  chips: {
    query: 'chips', canonicalName: 'Potato Chips (Lays)', category: 'Snacks', icon: '🥔', prices: [
      p('grabmart', 'Lays Classic Salted', 1.86, 2.16, 0, '26g', 'lays chips', true, '15 min'),
      p('pandamart', 'Pringles Sour Cream', 2.26, 2.71, 16, '100g', 'pringles chips', true, '15 min'),
      p('amazon_sg', 'Lays Masala', 1.86, 2.16, 0, '26g', 'lays chips', true, '2 hrs'),
      p('zepto', 'Lay\'s Spanish Tomato', 20, 20, 0, '26g', 'lays chips', true, '10 min'),
      p('fairprice', 'Pringles Original', 3.3, 3.89, 14, '165g', 'pringles chips', true, '2 hrs'),
      p('redmart', 'RedMart Chips', 1.83, 2.16, 10, '26g', 'chips', true, '1 day'),
    ]
  },

  // ── BEVERAGES ──────────────────────────────────────────────────────────────
  tea: {
    query: 'tea', canonicalName: 'Assam Tea (CTC)', category: 'Beverages', icon: '🍵', prices: [
      p('coldstorage', 'Tata Tea Gold 250g', 3.41, 3.98, 13, '250g', 'tata tea', true, 'Same day'),
      p('shengsiong', 'Wagh Bakri CTC 250g', 3.28, 3.84, 13, '250g', 'wagh bakri tea', true, '4 hrs'),
      p('giant', 'Brooke Bond Red Label', 3.5, 4.07, 12, '250g', 'red label tea', true, 'Same day'),
      p('grabmart', 'Tata Tea Gold', 3.35, 3.95, 14, '250g', 'tata tea', true, '15 min'),
      p('pandamart', 'Darjeeling CTC Tea', 3.59, 4.2, 13, '250g', 'assam tea', true, '15 min'),
      p('amazon_sg', 'Tea Leaf (CTC)', 3.23, 3.8, 14, '250g', 'tea', true, '2 hrs'),
    ]
  },
  coffee: {
    query: 'coffee', canonicalName: 'Instant Coffee (Nescafe)', category: 'Beverages', icon: '☕', prices: [
      p('fairprice', 'Nescafe Classic 50g', 3.83, 4.53, 15, '50g', 'nescafe coffee', true, '2 hrs'),
      p('redmart', 'Bru Gold 50g', 3.59, 4.25, 15, '50g', 'bru coffee', true, '1 day'),
      p('coldstorage', 'Nescafe Classic', 3.9, 4.62, 15, '50g', 'nescafe coffee', true, 'Same day'),
      p('shengsiong', 'Nescafe Original 50g', 3.77, 4.49, 16, '50g', 'nescafe coffee', true, '4 hrs'),
      p('giant', 'Nescafe Intense', 4.01, 4.75, 15, '50g', 'nescafe coffee', true, 'Same day'),
      p('grabmart', 'Coffee Nescafe', 3.65, 4.38, 17, '50g', 'coffee', true, '15 min'),
    ]
  },
  juice: {
    query: 'juice', canonicalName: 'Mixed Fruit Juice', category: 'Beverages', icon: '🧃', prices: [
      p('pandamart', 'Real Mixed Fruit Juice', 2.81, 3.35, 15, '1 L', 'mixed fruit juice', true, '15 min'),
      p('amazon_sg', 'Tropicana Mixed Fruit', 2.92, 3.47, 15, '1 L', 'tropicana juice', true, '2 hrs'),
      p('fairprice', 'Paper Boat Aamras', 2.74, 3.25, 15, '1 L', 'paper boat juice', true, '2 hrs'),
      p('redmart', 'B Natural Juice 1L', 2.86, 3.4, 15, '1 L', 'b natural juice', true, '1 day'),
      p('coldstorage', 'Tropicana Orange 1L', 2.99, 3.58, 16, '1 L', 'tropicana juice', true, 'Same day'),
      p('shengsiong', 'Mixed Fruit Juice', 2.68, 3.22, 17, '1 L', 'juice', true, '4 hrs'),
    ]
  },

  // ── SWEETS & DESSERTS ──────────────────────────────────────────────────────
  chocolate: {
    query: 'chocolate', canonicalName: 'Dark Chocolate', category: 'Sweets & Desserts', icon: '🍫', prices: [
      p('giant', 'Cadbury Dairy Milk 150g', 3.1, 3.62, 12, '150g', 'cadbury dairy milk', true, 'Same day'),
      p('grabmart', 'Morde Dark Chocolate', 2.92, 3.47, 15, '150g', 'dark chocolate', true, '15 min'),
      p('pandamart', 'KitKat 150g', 3.23, 3.8, 14, '150g', 'kitkat chocolate', true, '15 min'),
      p('amazon_sg', 'Cadbury Silk', 2.99, 3.62, 18, '150g', 'cadbury silk', true, '2 hrs'),
      p('fairprice', 'Lindt Dark 100g', 4.19, 4.98, 15, '100g', 'lindt dark chocolate', true, '2 hrs'),
      p('redmart', 'Dairy Milk', 3.05, 3.58, 13, '150g', 'dairy milk chocolate', true, '1 day'),
    ]
  },
  icecream: {
    query: 'icecream', canonicalName: 'Ice Cream', category: 'Sweets & Desserts', icon: '🍦', prices: [
      p('coldstorage', 'Amul Vanilla Ice Cream', 3.41, 3.98, 13, '750 ml', 'amul ice cream', true, 'Same day'),
      p('shengsiong', 'Kwality Walls Cassata', 3.1, 3.71, 16, '750 ml', 'kwality walls ice cream', true, '4 hrs'),
      p('giant', 'NIC Natural Ice Cream', 4.5, 5.35, 15, '500 ml', 'nic ice cream', true, 'Same day'),
      p('grabmart', 'Amul Chocolate Icecream', 3.5, 4.13, 14, '750 ml', 'amul ice cream', true, '15 min'),
      p('pandamart', 'Baskin Robbins Tub', 6.68, 7.98, 16, '500 ml', 'baskin robbins ice cream', true, '15 min'),
      p('amazon_sg', 'Amul Real Ice Cream', 3.28, 3.89, 15, '750 ml', 'ice cream', true, '2 hrs'),
    ]
  },

  // ── COOKING ESSENTIALS ─────────────────────────────────────────────────────
  oil: {
    query: 'oil', canonicalName: 'Sunflower Cooking Oil', category: 'Packaged Foods', icon: '🫙', prices: [
      p('fairprice', 'Fortune Sunlite Oil', 4.19, 4.98, 15, '1 L', 'sunflower oil', true, '2 hrs'),
      p('redmart', 'Saffola Gold Oil', 4.5, 5.35, 15, '1 L', 'saffola oil', true, '1 day'),
      p('coldstorage', 'Fortune Sunflower Oil', 4.26, 5.04, 15, '1 L', 'sunflower oil', true, 'Same day'),
      p('shengsiong', 'Gemini Sunflower Oil', 4.05, 4.8, 15, '1 L', 'sunflower oil', true, '4 hrs'),
      p('giant', 'Dhara Sunflower Oil', 4.37, 5.16, 15, '1 L', 'sunflower cooking oil', true, 'Same day'),
      p('grabmart', 'Cooking Oil 1L', 3.95, 4.71, 16, '1 L', 'oil', true, '15 min'),
    ]
  },
  sugar: {
    query: 'sugar', canonicalName: 'White Sugar', category: 'Packaged Foods', icon: '🍬', prices: [
      p('pandamart', 'Uttam Sugar 1kg', 2.37, 2.8, 13, '1 kg', 'sugar', true, '15 min'),
      p('amazon_sg', 'BB Popular Sugar', 2.32, 2.75, 13, '1 kg', 'sugar', true, '2 hrs'),
      p('fairprice', 'Sugar (White)', 2.41, 2.85, 14, '1 kg', 'sugar', true, '2 hrs'),
      p('redmart', 'Crystal Sugar', 2.34, 2.78, 15, '1 kg', 'sugar', true, '1 day'),
      p('coldstorage', 'Dhampure Sugar', 2.45, 2.89, 13, '1 kg', 'sugar', true, 'Same day'),
      p('shengsiong', 'Sugar', 2.26, 2.71, 16, '1 kg', 'sugar', true, '4 hrs'),
    ]
  },
  salt: {
    query: 'salt', canonicalName: 'Iodized Salt', category: 'Packaged Foods', icon: '🧂', prices: [
      p('giant', 'Tata Rock Salt', 1.9, 2.25, 12, '1 kg', 'iodized salt', true, 'Same day'),
      p('grabmart', 'Catch Iodized Salt', 1.83, 2.2, 18, '1 kg', 'salt', true, '15 min'),
      p('pandamart', 'Tata Salt Classic', 1.86, 2.24, 17, '1 kg', 'tata salt', true, '15 min'),
      p('amazon_sg', 'Tata Lite Salt', 2.01, 2.38, 13, '1 kg', 'salt', true, '2 hrs'),
      p('fairprice', 'Himalayan Pink Salt', 3.23, 3.8, 14, '1 kg', 'himalayan salt', true, '2 hrs'),
      p('redmart', 'Salt', 1.79, 2.16, 20, '1 kg', 'salt', true, '1 day'),
    ]
  },
  honey: {
    query: 'honey', canonicalName: 'Pure Honey', category: 'Packaged Foods', icon: '🍯', prices: [
      p('coldstorage', 'Dabur Honey 250g', 3.41, 4.07, 16, '250g', 'honey', true, 'Same day'),
      p('shengsiong', 'Saffola Honey', 3.23, 3.89, 17, '250g', 'honey', true, '4 hrs'),
    ]
  },
  ghee_cow: {
    query: 'cow ghee', canonicalName: 'Pure Cow Ghee', category: 'Dairy', icon: '🧈', prices: [
      p('giant', 'Amul Cow Ghee', 12.14, 13.07, 6, '1 L', 'ghee', true, 'Same day'),
      p('grabmart', 'Aashirvaad Ghee', 11.95, 12.89, 6, '1 L', 'ghee', true, '15 min'),
    ]
  },
  basmati_rice: {
    query: 'basmati rice', canonicalName: 'Premium Basmati Rice', category: 'Grains & Pulses', icon: '🍚', prices: [
      p('pandamart', 'India Gate Classic', 4.37, 5.07, 12, '1 kg', 'rice', true, '15 min'),
      p('amazon_sg', 'Daawat Rozana', 3.23, 3.8, 14, '1 kg', 'rice', true, '2 hrs'),
    ]
  },
  sona_masoori: {
    query: 'sona masoori', canonicalName: 'Sona Masoori Rice', category: 'Grains & Pulses', icon: '🍚', prices: [
      p('fairprice', 'Sona Masoori', 2.68, 3.16, 13, '1 kg', 'rice', true, '2 hrs'),
      p('redmart', 'BB Popular Rice', 2.55, 3.04, 15, '1 kg', 'rice', true, '1 day'),
    ]
  },
  poha: {
    query: 'poha', canonicalName: 'Poha (Beaten Rice)', category: 'Grains & Pulses', icon: '🍚', prices: [
      p('coldstorage', 'Thick Poha', 2.32, 2.8, 18, '500g', 'poha', true, 'Same day'),
      p('shengsiong', 'Tata Sampann Poha', 2.26, 2.71, 16, '500g', 'poha', true, '4 hrs'),
    ]
  },
  besan: {
    query: 'besan', canonicalName: 'Besan (Gram Flour)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('giant', 'Fortune Besan', 3.23, 3.8, 14, '1 kg', 'besan', true, 'Same day'),
      p('grabmart', 'Tata Sampann Besan', 3.35, 3.89, 11, '1 kg', 'besan', true, '15 min'),
    ]
  },
  maida: {
    query: 'maida', canonicalName: 'Maida (Refined Flour)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('pandamart', 'Refined Maida', 2.32, 2.75, 13, '1 kg', 'maida', true, '15 min'),
    ]
  },
  kabuli_chana: {
    query: 'kabuli chana', canonicalName: 'Kabuli Chana (Chickpeas)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('amazon_sg', 'Kabuli Chana', 4.32, 4.98, 11, '1 kg', 'chana', true, '2 hrs'),
    ]
  },
  kala_chana: {
    query: 'kala chana', canonicalName: 'Kala Chana (Black Chickpeas)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('fairprice', 'Black Chana', 3.41, 3.98, 12, '1 kg', 'chana', true, '2 hrs'),
    ]
  },
  hing: {
    query: 'hing', canonicalName: 'Asafoetida (Hing)', category: 'Packaged Foods', icon: '🧂', prices: [
      p('redmart', 'Laxmi Hing', 2.32, 2.8, 18, '50g', 'hing', true, '1 day'),
    ]
  },
  cardamom: {
    query: 'elaichi', canonicalName: 'Green Cardamom (Elaichi)', category: 'Packaged Foods', icon: '🧂', prices: [
      p('coldstorage', 'Green Elaichi', 4.86, 5.8, 16, '50g', 'elaichi', true, 'Same day'),
    ]
  },
  cloves: {
    query: 'cloves', canonicalName: 'Cloves (Laung)', category: 'Packaged Foods', icon: '🧂', prices: [
      p('shengsiong', 'Cloves', 3.23, 3.89, 17, '50g', 'cloves', true, '4 hrs'),
    ]
  },
  cinnamon: {
    query: 'cinnamon', canonicalName: 'Cinnamon (Dalchini)', category: 'Packaged Foods', icon: '🧂', prices: [
      p('giant', 'Dalchini Stick', 2.32, 2.8, 18, '50g', 'cinnamon', true, 'Same day'),
    ]
  },
  broccoli: {
    query: 'broccoli', canonicalName: 'Broccoli', category: 'Vegetables', icon: '🥦', prices: [
      p('grabmart', 'Fresh Broccoli', 3.77, 4.53, 17, '1 pc', 'broccoli', true, '15 min'),
    ]
  },
  sweet_corn: {
    query: 'sweet corn', canonicalName: 'Sweet Corn', category: 'Vegetables', icon: '🌽', prices: [
      p('pandamart', 'Sweet Corn (Loose)', 2.14, 2.62, 22, '1 pc', 'corn', true, '15 min'),
    ]
  },
  dragonfruit: {
    query: 'dragonfruit', canonicalName: 'Dragonfruit', category: 'Fruits', icon: '🌵', prices: [
      p('amazon_sg', 'Dragon Fruit', 3.23, 3.89, 17, '1 pc', 'dragonfruit', true, '2 hrs'),
    ]
  },
  avocado: {
    query: 'avocado', canonicalName: 'Avocado', category: 'Fruits', icon: '🥑', prices: [
      p('fairprice', 'Premium Avocado', 4.86, 5.8, 16, '1 pc', 'avocado', true, '2 hrs'),
    ]
  },
  kiwi: {
    query: 'kiwi', canonicalName: 'Kiwi', category: 'Fruits', icon: '🥝', prices: [
      p('redmart', 'Kiwi (Zespri)', 4.14, 4.98, 17, '3 pcs', 'kiwi', true, '1 day'),
    ]
  },
  strawberry: {
    query: 'strawberry', canonicalName: 'Strawberry', category: 'Fruits', icon: '🍓', prices: [
      p('coldstorage', 'Fresh Strawberry', 3.77, 4.53, 17, '200g', 'strawberry', true, 'Same day'),
    ]
  },
  coconut_water: {
    query: 'coconut water', canonicalName: 'Tender Coconut', category: 'Beverages', icon: '🥥', prices: [
      p('shengsiong', 'Tender Coconut', 2.5, 2.98, 15, '1 pc', 'coconut', true, '4 hrs'),
    ]
  },
  biscuits: {
    query: 'biscuits', canonicalName: 'Biscuits (Parle-G)', category: 'Snacks', icon: '🍪', prices: [
      p('giant', 'Parle-G 800g', 2.86, 3.25, 6, '800g', 'biscuits', true, 'Same day'),
    ]
  },
  maggi: {
    query: 'maggi', canonicalName: 'Maggi Noodles (Pack of 12)', category: 'Packaged Foods', icon: '🍜', prices: [
      p('grabmart', 'Maggi 12-Pack', 4.55, 5.07, 7, '12 pack', 'maggi', true, '15 min'),
    ]
  },
  ketchup: {
    query: 'ketchup', canonicalName: 'Tomato Ketchup', category: 'Packaged Foods', icon: '🥫', prices: [
      p('pandamart', 'Kissan Ketchup', 3.77, 4.44, 14, '1 kg', 'ketchup', true, '15 min'),
    ]
  },
  brown_rice: {
    query: 'brown rice', canonicalName: 'Brown Rice', category: 'Grains & Pulses', icon: '🍚', prices: [
      p('amazon_sg', 'Daawat Brown Rice', 4.14, 4.89, 15, '1 kg', 'rice', true, '2 hrs'),
    ]
  },
  kolam_rice: {
    query: 'kolam rice', canonicalName: 'Kolam Rice', category: 'Grains & Pulses', icon: '🍚', prices: [
      p('fairprice', 'Lachkari Kolam', 2.86, 3.44, 16, '1 kg', 'rice', true, '2 hrs'),
    ]
  },
  masoor_dal: {
    query: 'masoor dal', canonicalName: 'Masoor Dal (Red)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('redmart', 'Masoor Dal', 3.59, 4.25, 14, '1 kg', 'dal', true, '1 day'),
    ]
  },
  urad_dal: {
    query: 'urad dal', canonicalName: 'Urad Dal (Black)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('coldstorage', 'Urad Dal Whole', 4.14, 4.8, 12, '1 kg', 'dal', true, 'Same day'),
    ]
  },
  black_pepper: {
    query: 'black pepper', canonicalName: 'Black Pepper (Kali Mirch)', category: 'Packaged Foods', icon: '🧂', prices: [
      p('shengsiong', 'Kali Mirch Whole', 3.77, 4.53, 16, '100g', 'pepper', true, '4 hrs'),
    ]
  },
  horlicks: {
    query: 'horlicks', canonicalName: 'Horlicks (Classic)', category: 'Beverages', icon: '🥛', prices: [
      p('giant', 'Horlicks 500g', 6.68, 7.44, 8, '500g', 'health drink', true, 'Same day'),
    ]
  },
  bournvita: {
    query: 'bournvita', canonicalName: 'Bournvita', category: 'Beverages', icon: '🥛', prices: [
      p('grabmart', 'Bournvita 500g', 5.95, 6.8, 10, '500g', 'health drink', true, '15 min'),
    ]
  },
  real_juice: {
    query: 'real juice', canonicalName: 'Real Mixed Fruit Juice', category: 'Beverages', icon: '🧃', prices: [
      p('pandamart', 'Real Juice 1L', 3.59, 4.16, 11, '1 L', 'juice', true, '15 min'),
    ]
  },
  marie_gold: {
    query: 'marie gold', canonicalName: 'Marie Gold Biscuits', category: 'Snacks', icon: '🍪', prices: [
      p('amazon_sg', 'Marie Gold 250g', 2.14, 2.53, 12, '250g', 'biscuits', true, '2 hrs'),
    ]
  },
  good_day: {
    query: 'good day', canonicalName: 'Good Day Cashew', category: 'Snacks', icon: '🍪', prices: [
      p('fairprice', 'Good Day 200g', 2.32, 2.71, 10, '200g', 'biscuits', true, '2 hrs'),
    ]
  },
  bhujia: {
    query: 'bhujia', canonicalName: 'Aloo Bhujia', category: 'Snacks', icon: '🍿', prices: [
      p('redmart', 'Haldiram Aloo Bhujia', 3.41, 3.98, 12, '400g', 'snacks', true, '1 day'),
    ]
  },
  vinegar: {
    query: 'vinegar', canonicalName: 'White Vinegar', category: 'Packaged Foods', icon: '🥫', prices: [
      p('coldstorage', 'Chings Vinegar', 2.5, 2.98, 15, '500ml', 'vinegar', true, 'Same day'),
    ]
  },
  soy_sauce: {
    query: 'soy sauce', canonicalName: 'Dark Soy Sauce', category: 'Packaged Foods', icon: '🥫', prices: [
      p('shengsiong', 'Chings Soy Sauce', 2.68, 3.16, 13, '500ml', 'sauce', true, '4 hrs'),
    ]
  },
  pasta_penne: {
    query: 'penne pasta', canonicalName: 'Penne Pasta (Durum Wheat)', category: 'Packaged Foods', icon: '🍝', prices: [
      p('giant', 'Bambino Penne', 3.05, 3.71, 19, '500g', 'pasta', true, 'Same day'),
    ]
  },
  macaroni: {
    query: 'macaroni', canonicalName: 'Macaroni', category: 'Packaged Foods', icon: '🍝', prices: [
      p('grabmart', 'Macaroni Elbow', 2.32, 2.8, 18, '500g', 'pasta', true, '15 min'),
    ]
  },
  almonds: {
    query: 'almonds', canonicalName: 'Almonds (Badam)', category: 'Snacks', icon: '🥜', prices: [
      p('pandamart', 'California Almonds', 10.32, 11.8, 12, '500g', 'dry fruits', true, '15 min'),
    ]
  },
  cashews: {
    query: 'cashews', canonicalName: 'Cashews (Kaju)', category: 'Snacks', icon: '🥜', prices: [
      p('amazon_sg', 'Premium Kaju Whole', 9.23, 10.89, 15, '500g', 'dry fruits', true, '2 hrs'),
    ]
  },
  walnuts: {
    query: 'walnuts', canonicalName: 'Walnuts (Akhrot)', category: 'Snacks', icon: '🥜', prices: [
      p('fairprice', 'Walnut Kernels', 8.5, 9.98, 14, '250g', 'dry fruits', true, '2 hrs'),
    ]
  },
  mustard_oil: {
    query: 'mustard oil', canonicalName: 'Mustard Oil (Kacchi Ghani)', category: 'Packaged Foods', icon: '🫙', prices: [
      p('redmart', 'Fortune Mustard Oil', 4.32, 5.16, 16, '1 L', 'oil', true, '1 day'),
    ]
  },
  olive_oil: {
    query: 'olive oil', canonicalName: 'Extra Virgin Olive Oil', category: 'Packaged Foods', icon: '🫙', prices: [
      p('coldstorage', 'Borges Olive Oil', 16.95, 21.8, 22, '1 L', 'oil', true, 'Same day'),
    ]
  },
  sunflower_oil: {
    query: 'sunflower oil', canonicalName: 'Sunflower Oil', category: 'Packaged Foods', icon: '🫙', prices: [
      p('shengsiong', 'Fortune Sunflower', 3.95, 4.8, 18, '1 L', 'oil', true, '4 hrs'),
    ]
  },
  beetroot: {
    query: 'beetroot', canonicalName: 'Beetroot', category: 'Vegetables', icon: '🥗', prices: [
      p('giant', 'Beetroot Fresh', 2.14, 2.62, 22, '500g', 'beetroot', true, 'Same day'),
    ]
  },
  dates: {
    query: 'dates', canonicalName: 'Dates (Khajur)', category: 'Snacks', icon: '🌴', prices: [
      p('grabmart', 'Kimia Dates', 5.59, 6.89, 19, '500g', 'dates', true, '15 min'),
    ]
  },
  raisins: {
    query: 'raisins', canonicalName: 'Raisins (Kishmish)', category: 'Snacks', icon: '🍇', prices: [
      p('pandamart', 'Golden Kishmish', 3.77, 4.53, 16, '250g', 'dry fruits', true, '15 min'),
    ]
  },
  saffron: {
    query: 'saffron', canonicalName: 'Kesar (Saffron)', category: 'Packaged Foods', icon: '🌸', prices: [
      p('amazon_sg', 'Baby Saffron 1g', 8.5, 9.98, 14, '1g', 'kesar', true, '2 hrs'),
    ]
  },
  sugar_brown: {
    query: 'brown sugar', canonicalName: 'Brown Sugar', category: 'Packaged Foods', icon: '🧂', prices: [
      p('fairprice', 'Organic Brown Sugar', 3.05, 3.71, 19, '500g', 'sugar', true, '2 hrs'),
    ]
  },
  jaggery: {
    query: 'jaggery', canonicalName: 'Jaggery (Gur)', category: 'Packaged Foods', icon: '🍮', prices: [
      p('redmart', 'Organic Gur', 2.68, 3.25, 18, '500g', 'jaggery', true, '1 day'),
    ]
  },
  coconut_oil: {
    query: 'coconut oil', canonicalName: 'Coconut Oil', category: 'Packaged Foods', icon: '🫙', prices: [
      p('coldstorage', 'Parachute Coconut Oil', 4.86, 5.62, 12, '500ml', 'oil', true, 'Same day'),
    ]
  },
  makhana: {
    query: 'makhana', canonicalName: 'Fox Nuts (Makhana)', category: 'Snacks', icon: '🍿', prices: [
      p('shengsiong', 'Happilo Makhana', 4.14, 5.07, 19, '250g', 'snacks', true, '4 hrs'),
    ]
  },
  peanuts: {
    query: 'peanuts', canonicalName: 'Peanuts (Moongfali)', category: 'Snacks', icon: '🥜', prices: [
      p('giant', 'Roasted Peanuts', 3.23, 3.8, 14, '500g', 'peanuts', true, 'Same day'),
    ]
  },
  oats: {
    query: 'oats', canonicalName: 'Rolled Oats', category: 'Packaged Foods', icon: '🥣', prices: [
      p('grabmart', 'Quaker Oats', 4.86, 5.62, 12, '1 kg', 'oats', true, '15 min'),
    ]
  },
  quinoa: {
    query: 'quinoa', canonicalName: 'Quinoa', category: 'Packaged Foods', icon: '🥣', prices: [
      p('pandamart', 'True Elements Quinoa', 5.95, 6.89, 12, '500g', 'quinoa', true, '15 min'),
    ]
  },
  tea_bags: {
    query: 'tea', canonicalName: 'Tea Bags (Green Tea)', category: 'Beverages', icon: '🍵', prices: [
      p('amazon_sg', 'Tetley Green Tea', 4.5, 5.25, 13, '25 bags', 'tea', true, '2 hrs'),
    ]
  },
  peanut_butter: {
    query: 'peanut butter', canonicalName: 'Peanut Butter', category: 'Packaged Foods', icon: '🥜', prices: [
      p('fairprice', 'Pintola Peanut Butter', 4.5, 5.35, 15, '350g', 'peanut butter', true, '2 hrs'),
    ]
  },
  jam: {
    query: 'jam', canonicalName: 'Fruit Jam', category: 'Packaged Foods', icon: '🍯', prices: [
      p('redmart', 'Kissan Mixed Fruit', 4.32, 5.07, 14, '500g', 'jam', true, '1 day'),
    ]
  },
  soya_chunks: {
    query: 'soya chunks', canonicalName: 'Soya Chunks', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('coldstorage', 'Fortune Soya Chunks', 2.32, 2.8, 18, '200g', 'soya', true, 'Same day'),
    ]
  },
  frozen_peas: {
    query: 'frozen peas', canonicalName: 'Frozen Green Peas', category: 'Vegetables', icon: '🧊', prices: [
      p('shengsiong', 'Safal Frozen Peas', 3.59, 4.35, 18, '1 kg', 'peas', true, '4 hrs'),
    ]
  },
  frozen_corn: {
    query: 'frozen corn', canonicalName: 'Frozen Sweet Corn', category: 'Vegetables', icon: '🧊', prices: [
      p('giant', 'Safal Sweet Corn', 3.23, 3.98, 21, '500g', 'corn', true, 'Same day'),
    ]
  },
  frozen_fries: {
    query: 'frozen fries', canonicalName: 'Frozen French Fries', category: 'Snacks', icon: '🧊', prices: [
      p('grabmart', 'McCain French Fries', 4.14, 4.98, 17, '750g', 'fries', true, '15 min'),
    ]
  },
  black_cardamom: {
    query: 'badi elaichi', canonicalName: 'Black Cardamom', category: 'Packaged Foods', icon: '🧂', prices: [
      p('pandamart', 'Badi Elaichi', 3.23, 3.89, 17, '50g', 'spices', true, '15 min'),
    ]
  },
  bay_leaf: {
    query: 'tej patta', canonicalName: 'Bay Leaf (Tej Patta)', category: 'Packaged Foods', icon: '🍃', prices: [
      p('amazon_sg', 'Tej Patta', 1.95, 2.44, 28, '20g', 'spices', true, '2 hrs'),
    ]
  },
  ajwain: {
    query: 'ajwain', canonicalName: 'Carom Seeds (Ajwain)', category: 'Packaged Foods', icon: '🧂', prices: [
      p('fairprice', 'Ajwain', 2.32, 2.8, 18, '100g', 'spices', true, '2 hrs'),
    ]
  },
  guava: {
    query: 'guava', canonicalName: 'Guava (Amrud)', category: 'Fruits', icon: '🍐', prices: [
      p('redmart', 'Fresh Amrud', 2.68, 3.35, 23, '1 kg', 'guava', true, '1 day'),
    ]
  },
  papaya_large: {
    query: 'papaya', canonicalName: 'Large Papaya', category: 'Fruits', icon: '🥭', prices: [
      p('coldstorage', 'Semi-Ripe Papaya', 2.5, 3.16, 26, '1 pc', 'papaya', true, 'Same day'),
    ]
  },
  watermelon_large: {
    query: 'watermelon', canonicalName: 'Watermelon (Kiran)', category: 'Fruits', icon: '🍉', prices: [
      p('shengsiong', 'Kiran Watermelon', 2.32, 2.98, 30, '1 pc', 'watermelon', true, '4 hrs'),
    ]
  },
  cauliflower_fresh: {
    query: 'cauliflower', canonicalName: 'Cauliflower (Gobi)', category: 'Vegetables', icon: '🥦', prices: [
      p('giant', 'Fresh Gobi', 2.32, 2.89, 25, '1 pc', 'cauliflower', true, 'Same day'),
    ]
  },
  cabbage_fresh: {
    query: 'cabbage', canonicalName: 'Cabbage (Patta Gobi)', category: 'Vegetables', icon: '🥬', prices: [
      p('grabmart', 'Patta Gobi', 1.95, 2.53, 37, '1 pc', 'cabbage', true, '15 min'),
    ]
  },
  brinjal_large: {
    query: 'brinjal', canonicalName: 'Brinjal (Bharta)', category: 'Vegetables', icon: '🍆', prices: [
      p('pandamart', 'Bharta Baingan', 2.14, 2.71, 30, '500g', 'brinjal', true, '15 min'),
    ]
  },
  sweet_potato_fresh: {
    query: 'sweet potato', canonicalName: 'Sweet Potato (Shakarkand)', category: 'Vegetables', icon: '🍠', prices: [
      p('amazon_sg', 'Shakarkand', 2.32, 2.98, 30, '500g', 'sweet potato', true, '2 hrs'),
    ]
  },
  mustard_seeds: {
    query: 'mustard seeds', canonicalName: 'Mustard Seeds (Rai)', category: 'Packaged Foods', icon: '🧂', prices: [
      p('fairprice', 'Rai Small', 2.14, 2.62, 22, '100g', 'spices', true, '2 hrs'),
    ]
  },
  fennel_seeds: {
    query: 'fennel seeds', canonicalName: 'Fennel Seeds (Saunf)', category: 'Packaged Foods', icon: '🧂', prices: [
      p('redmart', 'Saunf Lucknowi', 2.5, 3.07, 21, '100g', 'spices', true, '1 day'),
    ]
  },
  fenugreek_seeds: {
    query: 'methi seeds', canonicalName: 'Fenugreek Seeds (Methi)', category: 'Packaged Foods', icon: '🧂', prices: [
      p('coldstorage', 'Methi Seeds', 2.32, 2.89, 25, '100g', 'spices', true, 'Same day'),
    ]
  },
  soya_chaap: {
    query: 'soya chaap', canonicalName: 'Soya Chaap (Tinned)', category: 'Packaged Foods', icon: '🥫', prices: [
      p('shengsiong', 'Tinned Soya Chaap', 3.77, 4.53, 17, '500g', 'soya', true, '4 hrs'),
    ]
  },
  muesli: {
    query: 'muesli', canonicalName: 'Muesli (Fruit & Nut)', category: 'Packaged Foods', icon: '🥣', prices: [
      p('giant', 'Kelloggs Muesli', 8.5, 9.98, 14, '500g', 'muesli', true, 'Same day'),
    ]
  },
  tofu_fresh: {
    query: 'tofu', canonicalName: 'Fresh Tofu (Soya Paneer)', category: 'Dairy', icon: '⬜', prices: [
      p('grabmart', 'Fresh Tofu', 2.68, 3.35, 23, '200g', 'tofu', true, '15 min'),
    ]
  },
  almond_milk: {
    query: 'almond milk', canonicalName: 'Almond Milk (Unsweetened)', category: 'Dairy', icon: '🥛', prices: [
      p('pandamart', 'Epigamia Almond Milk', 5.95, 6.89, 12, '1 L', 'milk', true, '15 min'),
    ]
  },
  peanut_oil: {
    query: 'peanut oil', canonicalName: 'Groundnut Oil', category: 'Packaged Foods', icon: '🫙', prices: [
      p('amazon_sg', 'Fortune Groundnut', 4.86, 5.62, 12, '1 L', 'oil', true, '2 hrs'),
    ]
  },
  rice_bran_oil: {
    query: 'rice bran oil', canonicalName: 'Rice Bran Oil', category: 'Packaged Foods', icon: '🫙', prices: [
      p('fairprice', 'Fortune Rice Bran', 4.14, 4.98, 17, '1 L', 'oil', true, '2 hrs'),
    ]
  },
  honey_organic: {
    query: 'organic honey', canonicalName: 'Organic Raw Honey', category: 'Packaged Foods', icon: '🍯', prices: [
      p('redmart', 'Organic India Honey', 6.68, 7.62, 11, '250g', 'honey', true, '1 day'),
    ]
  },
  pasta_fusilli: {
    query: 'fusilli pasta', canonicalName: 'Fusilli Pasta', category: 'Packaged Foods', icon: '🍝', prices: [
      p('coldstorage', 'Bambino Fusilli', 3.05, 3.71, 19, '500g', 'pasta', true, 'Same day'),
    ]
  },
  noodles_hakka: {
    query: 'hakka noodles', canonicalName: 'Hakka Noodles', category: 'Packaged Foods', icon: '🍜', prices: [
      p('shengsiong', 'Chings Hakka', 2.32, 2.8, 18, '150g', 'noodles', true, '4 hrs'),
    ]
  },
  papad_urad: {
    query: 'papad', canonicalName: 'Urad Papad', category: 'Snacks', icon: '🍪', prices: [
      p('giant', 'Lijjat Papad', 2.68, 3.16, 13, '200g', 'papad', true, 'Same day'),
    ]
  },
  pickle_mango: {
    query: 'mango pickle', canonicalName: 'Mango Pickle (Achaar)', category: 'Packaged Foods', icon: '🥫', prices: [
      p('grabmart', 'Nilon Mango Pickle', 3.77, 4.53, 17, '500g', 'pickle', true, '15 min'),
    ]
  },
  pickle_lime: {
    query: 'lime pickle', canonicalName: 'Lime Pickle', category: 'Packaged Foods', icon: '🥫', prices: [
      p('pandamart', 'Mother Recipe Lime', 3.59, 4.35, 18, '500g', 'pickle', true, '15 min'),
    ]
  },
  custard_powder: {
    query: 'custard powder', canonicalName: 'Custard Powder', category: 'Packaged Foods', icon: '🧁', prices: [
      p('amazon_sg', 'Brown & Polson', 2.32, 2.8, 18, '100g', 'dessert', true, '2 hrs'),
    ]
  },
  baking_powder: {
    query: 'baking powder', canonicalName: 'Baking Powder', category: 'Packaged Foods', icon: '🧂', prices: [
      p('fairprice', 'Weikfield Baking', 2.14, 2.62, 22, '100g', 'baking', true, '2 hrs'),
    ]
  },
  biryani_masala: {
    query: 'biryani masala', canonicalName: 'Biryani Masala', category: 'Packaged Foods', icon: '🧂', prices: [
      p('redmart', 'Everest Biryani', 2.86, 3.44, 16, '50g', 'spices', true, '1 day'),
    ]
  },
  pav_bhaji_masala: {
    query: 'pav bhaji masala', canonicalName: 'Pav Bhaji Masala', category: 'Packaged Foods', icon: '🧂', prices: [
      p('coldstorage', 'Everest Pav Bhaji', 2.81, 3.35, 15, '50g', 'spices', true, 'Same day'),
    ]
  },
  chicken_masala: {
    query: 'chicken masala', canonicalName: 'Chicken Masala', category: 'Packaged Foods', icon: '🧂', prices: [
      p('shengsiong', 'MDH Chicken Masala', 3.05, 3.62, 15, '100g', 'spices', true, '4 hrs'),
    ]
  },
  meat_masala: {
    query: 'meat masala', canonicalName: 'Meat Masala', category: 'Packaged Foods', icon: '🧂', prices: [
      p('giant', 'Everest Meat Masala', 2.99, 3.58, 16, '100g', 'spices', true, 'Same day'),
    ]
  },
  lassi: {
    query: 'lassi', canonicalName: 'Fresh Lassi (Sweet)', category: 'Beverages', icon: '🥛', prices: [
      p('grabmart', 'Amul Lassi 200ml', 1.95, 2.35, 16, '200ml', 'beverages', true, '15 min'),
    ]
  },
  chaas: {
    query: 'chaas', canonicalName: 'Buttermilk (Chaas)', category: 'Beverages', icon: '🥛', prices: [
      p('pandamart', 'Amul Masti Chaas', 1.77, 2.16, 25, '200ml', 'beverages', true, '15 min'),
    ]
  },
  cold_coffee: {
    query: 'cold coffee', canonicalName: 'Cold Coffee (Bottle)', category: 'Beverages', icon: '🧋', prices: [
      p('amazon_sg', 'Nescafe Intense', 2.68, 3.16, 13, '180ml', 'beverages', true, '2 hrs'),
    ]
  },
  chivda: {
    query: 'chivda', canonicalName: 'Chivda (Snacks)', category: 'Snacks', icon: '🍿', prices: [
      p('fairprice', 'Haldiram Chivda', 2.5, 2.98, 15, '200g', 'snacks', true, '2 hrs'),
    ]
  },
  mixture: {
    query: 'mixture', canonicalName: 'Madras Mixture', category: 'Snacks', icon: '🍿', prices: [
      p('redmart', 'Haldiram Mixture', 3.41, 4.07, 16, '400g', 'snacks', true, '1 day'),
    ]
  },
  gathiya: {
    query: 'gathiya', canonicalName: 'Bhavnagari Gathiya', category: 'Snacks', icon: '🍿', prices: [
      p('coldstorage', 'Haldiram Gathiya', 2.68, 3.25, 18, '200g', 'snacks', true, 'Same day'),
    ]
  },
  soup_tomato: {
    query: 'tomato soup', canonicalName: 'Tomato Soup Packet', category: 'Packaged Foods', icon: '🥣', prices: [
      p('shengsiong', 'Knorr Tomato Soup', 2.5, 2.98, 15, '50g', 'soup', true, '4 hrs'),
    ]
  },
  soup_manchow: {
    query: 'manchow soup', canonicalName: 'Manchow Soup Packet', category: 'Packaged Foods', icon: '🥣', prices: [
      p('giant', 'Knorr Manchow Soup', 2.5, 2.98, 15, '50g', 'soup', true, 'Same day'),
    ]
  },
  zucchini_green: {
    query: 'zucchini', canonicalName: 'Green Zucchini', category: 'Vegetables', icon: '🥒', prices: [
      p('grabmart', 'Fresh Zucchini', 3.05, 3.8, 22, '250g', 'vegetables', true, '15 min'),
    ]
  },
  asparagus_fresh: {
    query: 'asparagus', canonicalName: 'Asparagus', category: 'Vegetables', icon: '🎋', prices: [
      p('pandamart', 'Premium Asparagus', 6.68, 8.16, 18, '250g', 'vegetables', true, '15 min'),
    ]
  },
  baby_corn_fresh: {
    query: 'baby corn', canonicalName: 'Baby Corn', category: 'Vegetables', icon: '🌽', prices: [
      p('amazon_sg', 'Fresh Baby Corn', 2.5, 3.16, 26, '200g', 'vegetables', true, '2 hrs'),
    ]
  },
  oyster_mushroom: {
    query: 'oyster mushroom', canonicalName: 'Oyster Mushroom', category: 'Vegetables', icon: '🍄', prices: [
      p('fairprice', 'Fresh Oyster', 4.14, 5.07, 19, '200g', 'mushrooms', true, '2 hrs'),
    ]
  },
  figs_dried: {
    query: 'figs', canonicalName: 'Dried Figs (Anjeer)', category: 'Snacks', icon: '🥯', prices: [
      p('redmart', 'Premium Anjeer', 10.32, 11.8, 12, '250g', 'dry fruits', true, '1 day'),
    ]
  },
  apricots_dried: {
    query: 'apricots', canonicalName: 'Dried Apricots', category: 'Snacks', icon: '🍑', prices: [
      p('coldstorage', 'Golden Apricots', 6.68, 8.16, 18, '250g', 'dry fruits', true, 'Same day'),
    ]
  },
  pistachios: {
    query: 'pistachios', canonicalName: 'Pistachios (Pista)', category: 'Snacks', icon: '🥜', prices: [
      p('shengsiong', 'Salted Pista', 12.14, 13.62, 10, '250g', 'dry fruits', true, '4 hrs'),
    ]
  },
  cashew_roasted: {
    query: 'roasted cashew', canonicalName: 'Roasted Cashews', category: 'Snacks', icon: '🥜', prices: [
      p('giant', 'Salted Kaju', 10.32, 11.8, 12, '250g', 'dry fruits', true, 'Same day'),
    ]
  },
  peanut_butter_crunchy: {
    query: 'crunchy peanut butter', canonicalName: 'Crunchy Peanut Butter', category: 'Packaged Foods', icon: '🥜', prices: [
      p('grabmart', 'Pintola Crunchy', 4.68, 5.62, 16, '350g', 'peanut butter', true, '15 min'),
    ]
  },
  mayo_eggless: {
    query: 'eggless mayo', canonicalName: 'Eggless Mayonnaise', category: 'Packaged Foods', icon: '🧴', prices: [
      p('pandamart', 'Hellmanns Mayo', 4.5, 5.35, 15, '250g', 'sauce', true, '15 min'),
    ]
  },
  schezwan_sauce_chings: {
    query: 'schezwan sauce', canonicalName: 'Schezwan Chutney', category: 'Packaged Foods', icon: '🔥', prices: [
      p('amazon_sg', 'Chings Schezwan', 3.05, 3.71, 19, '250g', 'sauce', true, '2 hrs'),
    ]
  },
  maggi_hot_sweet: {
    query: 'maggi sauce', canonicalName: 'Maggi Hot & Sweet', category: 'Packaged Foods', icon: '🥫', prices: [
      p('fairprice', 'Maggi Sauce 500g', 4.14, 4.8, 12, '500g', 'sauce', true, '2 hrs'),
    ]
  },
  pasta_macaroni_durum: {
    query: 'durum macaroni', canonicalName: 'Durum Wheat Macaroni', category: 'Packaged Foods', icon: '🍝', prices: [
      p('redmart', 'Bambino Durum', 3.23, 3.98, 21, '500g', 'pasta', true, '1 day'),
    ]
  },
  quinoa_white: {
    query: 'white quinoa', canonicalName: 'Organic White Quinoa', category: 'Packaged Foods', icon: '🥣', prices: [
      p('coldstorage', 'True Elements Quinoa', 6.32, 7.44, 14, '500g', 'quinoa', true, 'Same day'),
    ]
  },
  chia_seeds_fresh: {
    query: 'chia seeds', canonicalName: 'Raw Chia Seeds', category: 'Packaged Foods', icon: '🧂', prices: [
      p('shengsiong', 'Organic Chia', 4.86, 5.8, 16, '250g', 'health food', true, '4 hrs'),
    ]
  },
  pumpkin_seeds_fresh: {
    query: 'pumpkin seeds', canonicalName: 'Roasted Pumpkin Seeds', category: 'Snacks', icon: '🎃', prices: [
      p('giant', 'Happilo Pumpkin', 4.14, 5.07, 19, '250g', 'health food', true, 'Same day'),
    ]
  },
  soya_milk_plain: {
    query: 'soya milk', canonicalName: 'Soya Milk (Plain)', category: 'Dairy', icon: '🥛', prices: [
      p('grabmart', 'Sofit Soya Milk', 4.14, 4.98, 17, '1 L', 'milk', true, '15 min'),
    ]
  },
  soya_milk_chocolate: {
    query: 'chocolate soya milk', canonicalName: 'Chocolate Soya Milk', category: 'Dairy', icon: '🥛', prices: [
      p('pandamart', 'Sofit Chocolate', 4.32, 5.16, 16, '1 L', 'milk', true, '15 min'),
    ]
  },
  oat_milk_plain: {
    query: 'oat milk', canonicalName: 'Oat Milk (Barista)', category: 'Dairy', icon: '🥛', prices: [
      p('amazon_sg', 'OatMlk Barista', 6.68, 8.16, 18, '1 L', 'milk', true, '2 hrs'),
    ]
  },
  cornflakes_original: {
    query: 'cornflakes', canonicalName: 'Corn Flakes (Original)', category: 'Packaged Foods', icon: '🥣', prices: [
      p('fairprice', 'Kelloggs Corn Flakes', 4.86, 5.62, 12, '500g', 'cereal', true, '2 hrs'),
    ]
  },
  cornflakes_honey: {
    query: 'honey cornflakes', canonicalName: 'Honey Corn Flakes', category: 'Packaged Foods', icon: '🥣', prices: [
      p('redmart', 'Kelloggs Honey', 5.59, 6.53, 13, '500g', 'cereal', true, '1 day'),
    ]
  },
  muesli_no_sugar: {
    query: 'no sugar muesli', canonicalName: 'Muesli (No Added Sugar)', category: 'Packaged Foods', icon: '🥣', prices: [
      p('coldstorage', 'Yoga Bar Muesli', 7.41, 8.71, 14, '400g', 'cereal', true, 'Same day'),
    ]
  },
  peanut_butter_chocolate: {
    query: 'chocolate peanut butter', canonicalName: 'Chocolate Peanut Butter', category: 'Packaged Foods', icon: '🍫', prices: [
      p('shengsiong', 'MyFitness Chocolate', 6.68, 8.16, 18, '510g', 'peanut butter', true, '4 hrs'),
    ]
  },
  hazelnut_spread: {
    query: 'nutella', canonicalName: 'Hazelnut Spread', category: 'Packaged Foods', icon: '🍫', prices: [
      p('giant', 'Nutella 350g', 8.5, 9.98, 14, '350g', 'spread', true, 'Same day'),
    ]
  },
  margarine_table: {
    query: 'margarine', canonicalName: 'Table Margarine', category: 'Dairy', icon: '🧈', prices: [
      p('grabmart', 'Nutralite 500g', 3.41, 4.07, 16, '500g', 'butter', true, '15 min'),
    ]
  },
  tofu_soft: {
    query: 'soft tofu', canonicalName: 'Soft Tofu', category: 'Dairy', icon: '⬜', prices: [
      p('pandamart', 'Silken Tofu', 3.05, 3.8, 22, '200g', 'tofu', true, '15 min'),
    ]
  },
  paneer_malai: {
    query: 'malai paneer', canonicalName: 'Malai Paneer', category: 'Dairy', icon: '⬜', prices: [
      p('amazon_sg', 'Amul Malai Paneer', 3.23, 3.8, 14, '200g', 'paneer', true, '2 hrs'),
    ]
  },
  cheese_spread_plain: {
    query: 'cheese spread', canonicalName: 'Cheese Spread', category: 'Dairy', icon: '🧀', prices: [
      p('fairprice', 'Amul Cheese Spread', 3.41, 4.07, 16, '200g', 'cheese', true, '2 hrs'),
    ]
  },
  cheese_cubes: {
    query: 'cheese cubes', canonicalName: 'Cheese Cubes', category: 'Dairy', icon: '🧀', prices: [
      p('redmart', 'Amul Cheese Cubes', 4.14, 4.89, 15, '200g', 'cheese', true, '1 day'),
    ]
  },
  mozzarella_cheese: {
    query: 'mozzarella', canonicalName: 'Mozzarella Cheese', category: 'Dairy', icon: '🧀', prices: [
      p('coldstorage', 'Amul Mozzarella', 5.95, 7.07, 15, '200g', 'cheese', true, 'Same day'),
    ]
  },
  cream_fresh: {
    query: 'fresh cream', canonicalName: 'Fresh Cream', category: 'Dairy', icon: '🥛', prices: [
      p('shengsiong', 'Amul Fresh Cream', 2.68, 3.16, 13, '250ml', 'cream', true, '4 hrs'),
    ]
  },
  whipping_cream: {
    query: 'whipping cream', canonicalName: 'Whipping Cream', category: 'Dairy', icon: '🥛', prices: [
      p('giant', 'Tropolite Cream', 4.86, 5.8, 16, '1 L', 'cream', true, 'Same day'),
    ]
  },
  condensed_milk: {
    query: 'condensed milk', canonicalName: 'Condensed Milk', category: 'Dairy', icon: '🥫', prices: [
      p('grabmart', 'Amul Mithai Mate', 4.14, 4.8, 12, '400g', 'milk', true, '15 min'),
    ]
  },
  soy_sauce_dark: {
    query: 'dark soy sauce', canonicalName: 'Dark Soy Sauce (Premium)', category: 'Packaged Foods', icon: '🥫', prices: [
      p('pandamart', 'Lee Kum Kee Soy', 7.41, 8.71, 14, '250ml', 'sauce', true, '15 min'),
    ]
  },
  oyster_sauce: {
    query: 'oyster sauce', canonicalName: 'Oyster Sauce', category: 'Packaged Foods', icon: '🥫', prices: [
      p('amazon_sg', 'Real Thai Oyster', 6.68, 8.16, 18, '250ml', 'sauce', true, '2 hrs'),
    ]
  },
  vinegar_apple_cider: {
    query: 'apple cider vinegar', canonicalName: 'Apple Cider Vinegar', category: 'Packaged Foods', icon: '🫙', prices: [
      p('fairprice', 'WOW ACV', 8.5, 9.98, 14, '500ml', 'vinegar', true, '2 hrs'),
    ]
  },
  tahini_paste: {
    query: 'tahini', canonicalName: 'Tahini Paste', category: 'Packaged Foods', icon: '🫙', prices: [
      p('redmart', 'Urban Platter Tahini', 7.41, 8.71, 14, '200g', 'sauce', true, '1 day'),
    ]
  },
  murmura: {
    query: 'murmura', canonicalName: 'Puffed Rice (Murmura)', category: 'Snacks', icon: '🍿', prices: [
      p('coldstorage', 'Plain Murmura 200g', 2.14, 2.62, 22, '200g', 'puffed rice', true, 'Same day'),
    ]
  },
  lauki: {
    query: 'lauki', canonicalName: 'Bottle Gourd (Lauki)', category: 'Vegetables', icon: '🥒', prices: [
      p('shengsiong', 'Fresh Lauki', 2.14, 2.62, 22, '1 pc', 'bottle gourd', true, '4 hrs'),
    ]
  },
  karela: {
    query: 'karela', canonicalName: 'Bitter Gourd (Karela)', category: 'Vegetables', icon: '🥒', prices: [
      p('giant', 'Fresh Karela', 2.32, 2.89, 25, '500g', 'bitter gourd', true, 'Same day'),
    ]
  },
  drumstick: {
    query: 'drumstick', canonicalName: 'Drumsticks', category: 'Vegetables', icon: '🎋', prices: [
      p('grabmart', 'Drumsticks 250g', 1.95, 2.44, 28, '250g', 'vegetables', true, '15 min'),
    ]
  },
  bhindi_fresh: {
    query: 'bhindi', canonicalName: 'Fresh Okra (Bhindi)', category: 'Vegetables', icon: '🥒', prices: [
      p('pandamart', 'Fresh Bhindi', 2.14, 2.62, 22, '500g', 'okra', true, '15 min'),
    ]
  },
  parwal: {
    query: 'parwal', canonicalName: 'Pointed Gourd (Parwal)', category: 'Vegetables', icon: '🥒', prices: [
      p('amazon_sg', 'Fresh Parwal', 2.32, 2.98, 30, '500g', 'vegetables', true, '2 hrs'),
    ]
  },
  jowar: {
    query: 'jowar', canonicalName: 'Jowar (Sorghum)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('fairprice', 'Jowar Flour', 3.05, 3.8, 22, '1 kg', 'millets', true, '2 hrs'),
    ]
  },
  bajra: {
    query: 'bajra', canonicalName: 'Bajra (Pearl Millet)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('redmart', 'Bajra Flour', 2.86, 3.53, 21, '1 kg', 'millets', true, '1 day'),
    ]
  },
  ragi: {
    query: 'ragi', canonicalName: 'Ragi (Finger Millet)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('coldstorage', 'Ragi Flour', 3.23, 3.98, 21, '1 kg', 'millets', true, 'Same day'),
    ]
  },
  barley: {
    query: 'barley', canonicalName: 'Barley (Jau)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('shengsiong', 'Barley Daliya', 2.68, 3.35, 23, '500g', 'grains', true, '4 hrs'),
    ]
  },
  matki: {
    query: 'matki', canonicalName: 'Moth Beans (Matki)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('giant', 'Moth Beans', 3.77, 4.53, 17, '500g', 'pulses', true, 'Same day'),
    ]
  },
  soya_beans: {
    query: 'soya beans', canonicalName: 'Soya Beans', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('grabmart', 'White Soya Beans', 3.05, 3.71, 19, '500g', 'pulses', true, '15 min'),
    ]
  },
  oreo: {
    query: 'oreo', canonicalName: 'Oreo Biscuits', category: 'Snacks', icon: '🍪', prices: [
      p('pandamart', 'Oreo Vanilla 120g', 2.14, 2.53, 12, '120g', 'biscuits', true, '15 min'),
    ]
  },
  dark_fantasy: {
    query: 'dark fantasy', canonicalName: 'Dark Fantasy Choco Fills', category: 'Snacks', icon: '🍪', prices: [
      p('amazon_sg', 'Dark Fantasy 75g', 2.32, 2.71, 10, '75g', 'biscuits', true, '2 hrs'),
    ]
  },
  pringles: {
    query: 'pringles', canonicalName: 'Pringles Potato Chips', category: 'Snacks', icon: '🍟', prices: [
      p('fairprice', 'Pringles Original', 3.41, 3.89, 8, '107g', 'chips', true, '2 hrs'),
    ]
  },
  lays_classic: {
    query: 'lays', canonicalName: 'Lays Potato Chips', category: 'Snacks', icon: '🍟', prices: [
      p('redmart', 'Lays Classic 50g', 1.86, 2.16, 0, '50g', 'chips', true, '1 day'),
    ]
  },
  kurkure: {
    query: 'kurkure', canonicalName: 'Kurkure Masala Munch', category: 'Snacks', icon: '🍟', prices: [
      p('coldstorage', 'Kurkure 90g', 2.14, 2.44, 0, '90g', 'snacks', true, 'Same day'),
    ]
  },
  gulab_jamun_tinned: {
    query: 'gulab jamun', canonicalName: 'Gulab Jamun (Tinned)', category: 'Sweets & Desserts', icon: '🍮', prices: [
      p('shengsiong', 'Haldiram Gulab Jamun', 5.59, 6.35, 10, '1 kg', 'sweets', true, '4 hrs'),
    ]
  },
  rasgulla_tinned: {
    query: 'rasgulla', canonicalName: 'Rasgulla (Tinned)', category: 'Sweets & Desserts', icon: '🍮', prices: [
      p('giant', 'Haldiram Rasgulla', 5.41, 6.16, 10, '1 kg', 'sweets', true, 'Same day'),
    ]
  },
  soan_papdi: {
    query: 'soan papdi', canonicalName: 'Soan Papdi', category: 'Sweets & Desserts', icon: '🍮', prices: [
      p('grabmart', 'Haldiram Soan Papdi', 3.77, 4.44, 14, '500g', 'sweets', true, '15 min'),
    ]
  },
  coke_bottle: {
    query: 'coca cola', canonicalName: 'Coca Cola', category: 'Beverages', icon: '🥤', prices: [
      p('pandamart', 'Coke 750ml', 2.32, 2.62, 0, '750ml', 'soft drink', true, '15 min'),
    ]
  },
  pepsi_bottle: {
    query: 'pepsi', canonicalName: 'Pepsi', category: 'Beverages', icon: '🥤', prices: [
      p('amazon_sg', 'Pepsi 750ml', 2.32, 2.62, 0, '750ml', 'soft drink', true, '2 hrs'),
    ]
  },
  sprite_bottle: {
    query: 'sprite', canonicalName: 'Sprite', category: 'Beverages', icon: '🥤', prices: [
      p('fairprice', 'Sprite 750ml', 2.32, 2.62, 0, '750ml', 'soft drink', true, '2 hrs'),
    ]
  },
  red_bull: {
    query: 'red bull', canonicalName: 'Red Bull Energy Drink', category: 'Beverages', icon: '⚡', prices: [
      p('redmart', 'Red Bull 250ml', 3.77, 4.07, 0, '250ml', 'energy drink', true, '1 day'),
    ]
  },
  amla_fresh: {
    query: 'amla', canonicalName: 'Indian Gooseberry (Amla)', category: 'Fruits', icon: '🍏', prices: [
      p('coldstorage', 'Fresh Amla 250g', 2.32, 2.89, 25, '250g', 'fruits', true, 'Same day'),
    ]
  },
  jamun_fresh: {
    query: 'jamun', canonicalName: 'Java Plum (Jamun)', category: 'Fruits', icon: '🍇', prices: [
      p('shengsiong', 'Fresh Jamun 250g', 3.77, 4.71, 21, '250g', 'fruits', true, '4 hrs'),
    ]
  },
  chikoo_fresh: {
    query: 'chikoo', canonicalName: 'Sapota (Chikoo)', category: 'Fruits', icon: '🥔', prices: [
      p('giant', 'Fresh Chikoo 500g', 2.5, 3.16, 26, '500g', 'fruits', true, 'Same day'),
    ]
  },
  chicken_curry_cut: {
    query: 'chicken', canonicalName: 'Chicken (Curry Cut)', category: 'Meat & Poultry', icon: '🍗', prices: [
      p('grabmart', 'Fresh Chicken 500g', 4.5, 5.16, 10, '500g', 'meat', true, '15 min'),
    ]
  },
  mutton_curry_cut: {
    query: 'mutton', canonicalName: 'Mutton (Curry Cut)', category: 'Meat & Poultry', icon: '🍖', prices: [
      p('pandamart', 'Fresh Mutton 500g', 10.32, 11.8, 12, '500g', 'meat', true, '15 min'),
    ]
  },
  eggs_white: {
    query: 'eggs', canonicalName: 'Eggs (White)', category: 'Dairy & Eggs', icon: '🥚', prices: [
      p('amazon_sg', 'Egg Box (6 pcs)', 2.32, 2.8, 18, '6 pcs', 'eggs', true, '2 hrs'),
    ]
  },
  eggs_brown: {
    query: 'brown eggs', canonicalName: 'Eggs (Brown)', category: 'Dairy & Eggs', icon: '🥚', prices: [
      p('fairprice', 'Brown Eggs (6 pcs)', 2.86, 3.53, 21, '6 pcs', 'eggs', true, '2 hrs'),
    ]
  },
  prawns_medium: {
    query: 'prawns', canonicalName: 'Prawns (Medium)', category: 'Fish & Seafood', icon: '🍤', prices: [
      p('redmart', 'Fresh Prawns 250g', 5.95, 7.07, 15, '250g', 'seafood', true, '1 day'),
    ]
  },
  rohu_fish: {
    query: 'rohu', canonicalName: 'Rohu Fish (Steaks)', category: 'Fish & Seafood', icon: '🐟', prices: [
      p('coldstorage', 'Rohu Steaks 500g', 4.86, 5.8, 16, '500g', 'seafood', true, 'Same day'),
    ]
  },
  ridge_gourd: {
    query: 'turai', canonicalName: 'Ridge Gourd (Turai)', category: 'Vegetables', icon: '🥒', prices: [
      p('shengsiong', 'Fresh Turai 500g', 2.14, 2.71, 30, '500g', 'vegetables', true, '4 hrs'),
    ]
  },
  ash_gourd: {
    query: 'petha vegetable', canonicalName: 'Ash Gourd', category: 'Vegetables', icon: '🍈', prices: [
      p('giant', 'Ash Gourd (Petha)', 2.32, 2.89, 25, '1 pc', 'vegetables', true, 'Same day'),
    ]
  },
  raw_banana: {
    query: 'raw banana', canonicalName: 'Raw Banana (Kachcha Kela)', category: 'Vegetables', icon: '🍌', prices: [
      p('grabmart', 'Kachcha Kela (3 pcs)', 1.95, 2.44, 28, '3 pcs', 'vegetables', true, '15 min'),
    ]
  },
  arbi_fresh: {
    query: 'arbi', canonicalName: 'Colocasia (Arbi)', category: 'Vegetables', icon: '🥔', prices: [
      p('pandamart', 'Fresh Arbi 500g', 2.32, 2.89, 25, '500g', 'vegetables', true, '15 min'),
    ]
  },
  jimikand_fresh: {
    query: 'jimikand', canonicalName: 'Yam (Jimikand)', category: 'Vegetables', icon: '🥔', prices: [
      p('amazon_sg', 'Fresh Jimikand 500g', 2.68, 3.35, 23, '500g', 'vegetables', true, '2 hrs'),
    ]
  },
  muesli_fruit_nut: {
    query: 'fruit nut muesli', canonicalName: 'Muesli (Fruit & Nut)', category: 'Packaged Foods', icon: '🥣', prices: [
      p('fairprice', 'Kelloggs Muesli', 8.5, 9.98, 14, '500g', 'cereal', true, '2 hrs'),
    ]
  },
  honey_dabur: {
    query: 'honey', canonicalName: 'Pure Honey', category: 'Packaged Foods', icon: '🍯', prices: [
      p('redmart', 'Dabur Honey 250g', 3.77, 4.44, 14, '250g', 'honey', true, '1 day'),
    ]
  },
  dairy_milk: {
    query: 'dairy milk', canonicalName: 'Cadbury Dairy Milk', category: 'Snacks', icon: '🍫', prices: [
      p('coldstorage', 'Dairy Milk Silk 60g', 2.95, 3.25, 0, '60g', 'chocolate', true, 'Same day'),
    ]
  },
  kitkat: {
    query: 'kitkat', canonicalName: 'Nestle KitKat', category: 'Snacks', icon: '🍫', prices: [
      p('shengsiong', 'KitKat Share Bag', 3.77, 4.44, 14, '100g', 'chocolate', true, '4 hrs'),
    ]
  },
  ferrero_rocher: {
    query: 'ferrero rocher', canonicalName: 'Ferrero Rocher (T16)', category: 'Snacks', icon: '🍫', prices: [
      p('giant', 'Ferrero Rocher T16', 11.05, 12.62, 11, '200g', 'chocolate', true, 'Same day'),
    ]
  },
  soan_papdi_sugarfree: {
    query: 'sugarfree soan papdi', canonicalName: 'Soan Papdi (Sugarfree)', category: 'Sweets & Desserts', icon: '🍮', prices: [
      p('grabmart', 'Haldiram Sugarfree', 4.86, 5.62, 12, '500g', 'sweets', true, '15 min'),
    ]
  },
  agra_petha: {
    query: 'petha', canonicalName: 'Agra Petha', category: 'Sweets & Desserts', icon: '🍮', prices: [
      p('pandamart', 'Famous Agra Petha', 4.14, 4.98, 17, '500g', 'sweets', true, '15 min'),
    ]
  },
  gajak_roll: {
    query: 'gajak', canonicalName: 'Gajak Roll', category: 'Sweets & Desserts', icon: '🍮', prices: [
      p('amazon_sg', 'Winter Special Gajak', 4.5, 5.35, 15, '400g', 'sweets', true, '2 hrs'),
    ]
  },
  thums_up_bottle: {
    query: 'thums up', canonicalName: 'Thums Up', category: 'Beverages', icon: '🥤', prices: [
      p('fairprice', 'Thums Up 750ml', 2.32, 2.62, 0, '750ml', 'soft drink', true, '2 hrs'),
    ]
  },
  limca_bottle: {
    query: 'limca', canonicalName: 'Limca', category: 'Beverages', icon: '🥤', prices: [
      p('redmart', 'Limca 750ml', 2.32, 2.62, 0, '750ml', 'soft drink', true, '1 day'),
    ]
  },
  maaza_bottle: {
    query: 'maaza', canonicalName: 'Maaza Mango Drink', category: 'Beverages', icon: '🥭', prices: [
      p('coldstorage', 'Maaza 1.2 L', 2.86, 3.35, 11, '1.2 L', 'beverages', true, 'Same day'),
    ]
  },
  real_fruit_juice: {
    query: 'real juice', canonicalName: 'Real Mixed Fruit Juice', category: 'Beverages', icon: '🧃', prices: [
      p('shengsiong', 'Real Juice 1L', 3.59, 4.16, 11, '1 L', 'beverages', true, '4 hrs'),
    ]
  },
  raw_pressery_juice: {
    query: 'raw pressery', canonicalName: 'Raw Pressery Orange Juice', category: 'Beverages', icon: '🧃', prices: [
      p('giant', 'Raw Pressery 250ml', 3.05, 3.62, 15, '250ml', 'beverages', true, 'Same day'),
    ]
  },
  maida_flour: {
    query: 'maida', canonicalName: 'Refined Flour (Maida)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('grabmart', 'Fortune Maida 1kg', 2.32, 2.8, 18, '1 kg', 'flour', true, '15 min'),
    ]
  },
  besan_flour: {
    query: 'besan', canonicalName: 'Gram Flour (Besan)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('pandamart', 'Fortune Besan 1kg', 3.41, 4.07, 16, '1 kg', 'flour', true, '15 min'),
    ]
  },
  suji_rava: {
    query: 'suji', canonicalName: 'Semolina (Suji)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('amazon_sg', 'Fortune Suji 500g', 2.14, 2.62, 22, '500g', 'flour', true, '2 hrs'),
    ]
  },
  poha_thick: {
    query: 'poha', canonicalName: 'Beaten Rice (Poha)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('fairprice', 'Fortune Poha 500g', 2.32, 2.8, 18, '500g', 'grains', true, '2 hrs'),
    ]
  },
  kabuli_chana_large: {
    query: 'kabuli chana', canonicalName: 'Chickpeas (Kabuli Chana)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('redmart', 'Fortune Kabuli Chana', 4.14, 4.98, 17, '500g', 'pulses', true, '1 day'),
    ]
  },
  kala_chana_large: {
    query: 'kala chana', canonicalName: 'Black Chickpeas', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('coldstorage', 'Fortune Kala Chana', 2.86, 3.53, 21, '500g', 'pulses', true, 'Same day'),
    ]
  },
  rajma_chitra: {
    query: 'rajma', canonicalName: 'Rajma Chitra', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('shengsiong', 'Fortune Rajma Chitra', 3.77, 4.62, 19, '500g', 'pulses', true, '4 hrs'),
    ]
  },
  chaat_masala: {
    query: 'chaat masala', canonicalName: 'Chaat Masala', category: 'Packaged Foods', icon: '🧂', prices: [
      p('giant', 'MDH Chaat Masala', 2.68, 3.25, 18, '100g', 'spices', true, 'Same day'),
    ]
  },
  amchur_powder: {
    query: 'amchur', canonicalName: 'Dry Mango Powder', category: 'Packaged Foods', icon: '🧂', prices: [
      p('grabmart', 'Catch Amchur Powder', 2.32, 2.89, 25, '100g', 'spices', true, '15 min'),
    ]
  },
  kitchen_king: {
    query: 'kitchen king', canonicalName: 'Kitchen King Masala', category: 'Packaged Foods', icon: '🧂', prices: [
      p('pandamart', 'Everest Kitchen King', 3.05, 3.71, 19, '100g', 'spices', true, '15 min'),
    ]
  },
  sambhar_masala: {
    query: 'sambhar masala', canonicalName: 'Sambhar Masala', category: 'Packaged Foods', icon: '🧂', prices: [
      p('amazon_sg', 'Everest Sambhar', 2.86, 3.44, 16, '100g', 'spices', true, '2 hrs'),
    ]
  },
  brown_bread_fresh: {
    query: 'brown bread', canonicalName: 'Fresh Brown Bread', category: 'Bakery', icon: '🍞', prices: [
      p('fairprice', 'English Oven Brown', 2.32, 2.71, 10, '400g', 'bread', true, '2 hrs'),
    ]
  },
  pav_fresh: {
    query: 'pav', canonicalName: 'Mumbai Pav (Ladi Pav)', category: 'Bakery', icon: '🍞', prices: [
      p('redmart', 'English Oven Pav', 2.14, 2.53, 12, '6 pcs', 'bread', true, '1 day'),
    ]
  },
  burger_buns_fresh: {
    query: 'burger buns', canonicalName: 'Burger Buns', category: 'Bakery', icon: '🍞', prices: [
      p('coldstorage', 'English Oven Buns', 2.32, 2.71, 10, '2 pcs', 'bread', true, 'Same day'),
    ]
  },
  pizza_base_fresh: {
    query: 'pizza base', canonicalName: 'Pizza Base', category: 'Bakery', icon: '🍞', prices: [
      p('shengsiong', 'English Oven Pizza', 2.5, 2.98, 15, '2 pcs', 'bread', true, '4 hrs'),
    ]
  },
  parle_g_biscuit: {
    query: 'parle g', canonicalName: 'Parle-G Gold', category: 'Snacks', icon: '🍪', prices: [
      p('giant', 'Parle-G Gold 1kg', 3.5, 3.8, 0, '1 kg', 'biscuits', true, 'Same day'),
    ]
  },
  good_day_biscuit: {
    query: 'good day', canonicalName: 'Britannia Good Day', category: 'Snacks', icon: '🍪', prices: [
      p('grabmart', 'Good Day Cashew 600g', 3.77, 4.44, 14, '600g', 'biscuits', true, '15 min'),
    ]
  },
  marie_gold_biscuit: {
    query: 'marie gold', canonicalName: 'Britannia Marie Gold', category: 'Snacks', icon: '🍪', prices: [
      p('pandamart', 'Marie Gold 250g', 2.32, 2.71, 10, '250g', 'biscuits', true, '15 min'),
    ]
  },
  bourbon_biscuit: {
    query: 'bourbon', canonicalName: 'Britannia Bourbon', category: 'Snacks', icon: '🍪', prices: [
      p('amazon_sg', 'Bourbon 150g', 2.14, 2.53, 12, '150g', 'biscuits', true, '2 hrs'),
    ]
  },
  ketchup_maggi: {
    query: 'ketchup', canonicalName: 'Maggi Tomato Ketchup', category: 'Packaged Foods', icon: '🥫', prices: [
      p('fairprice', 'Maggi Ketchup 1kg', 4.14, 4.98, 17, '1 kg', 'sauce', true, '2 hrs'),
    ]
  },
  chilli_sauce_green: {
    query: 'green chilli sauce', canonicalName: 'Green Chilli Sauce', category: 'Packaged Foods', icon: '🥫', prices: [
      p('redmart', 'Chings Green Chilli', 2.68, 3.25, 18, '200g', 'sauce', true, '1 day'),
    ]
  },
  pasta_sauce_dr_oetker: {
    query: 'pasta sauce', canonicalName: 'Pasta & Pizza Sauce', category: 'Packaged Foods', icon: '🥫', prices: [
      p('coldstorage', 'Dr. Oetker Funfoods', 3.23, 3.89, 17, '325g', 'sauce', true, 'Same day'),
    ]
  },
  peanut_butter_myfitness: {
    query: 'myfitness peanut butter', canonicalName: 'MyFitness Peanut Butter', category: 'Packaged Foods', icon: '🥜', prices: [
      p('shengsiong', 'MyFitness Smooth', 6.68, 8.16, 18, '510g', 'peanut butter', true, '4 hrs'),
    ]
  },
  soy_sauce_chings: {
    query: 'soy sauce', canonicalName: 'Dark Soy Sauce', category: 'Packaged Foods', icon: '🥫', prices: [
      p('giant', 'Chings Soy Sauce', 2.68, 3.25, 18, '200g', 'sauce', true, 'Same day'),
    ]
  },
  ratlami_sev: {
    query: 'ratlami sev', canonicalName: 'Ratlami Sev', category: 'Snacks', icon: '🍿', prices: [
      p('grabmart', 'Haldiram Ratlami', 2.5, 2.98, 15, '200g', 'snacks', true, '15 min'),
    ]
  },
  bikaneri_bhujia: {
    query: 'bikaneri bhujia', canonicalName: 'Bikaneri Bhujia', category: 'Snacks', icon: '🍿', prices: [
      p('pandamart', 'Haldiram Bikaneri', 3.41, 4.07, 16, '400g', 'snacks', true, '15 min'),
    ]
  },
  navratan_mix: {
    query: 'navratan mix', canonicalName: 'Navratan Mixture', category: 'Snacks', icon: '🍿', prices: [
      p('amazon_sg', 'Haldiram Navratan', 3.41, 4.07, 16, '400g', 'snacks', true, '2 hrs'),
    ]
  },
  moong_dal_snack: {
    query: 'moong dal snack', canonicalName: 'Moong Dal (Salted)', category: 'Snacks', icon: '🍿', prices: [
      p('fairprice', 'Haldiram Moong Dal', 2.68, 3.25, 18, '200g', 'snacks', true, '2 hrs'),
    ]
  },
  aloo_bhujia: {
    query: 'aloo bhujia', canonicalName: 'Aloo Bhujia', category: 'Snacks', icon: '🍿', prices: [
      p('redmart', 'Haldiram Aloo Bhujia', 3.41, 4.07, 16, '400g', 'snacks', true, '1 day'),
    ]
  },
  oregano_dried: {
    query: 'oregano', canonicalName: 'Dried Oregano', category: 'Packaged Foods', icon: '🌿', prices: [
      p('coldstorage', 'Keya Oregano 50g', 3.05, 3.8, 22, '50g', 'herbs', true, 'Same day'),
    ]
  },
  basil_dried: {
    query: 'basil', canonicalName: 'Dried Basil', category: 'Packaged Foods', icon: '🌿', prices: [
      p('shengsiong', 'Keya Basil 50g', 3.05, 3.8, 22, '50g', 'herbs', true, '4 hrs'),
    ]
  },
  rosemary_dried: {
    query: 'rosemary', canonicalName: 'Dried Rosemary', category: 'Packaged Foods', icon: '🌿', prices: [
      p('giant', 'Keya Rosemary 50g', 3.23, 3.98, 21, '50g', 'herbs', true, 'Same day'),
    ]
  },
  thyme_dried: {
    query: 'thyme', canonicalName: 'Dried Thyme', category: 'Packaged Foods', icon: '🌿', prices: [
      p('grabmart', 'Keya Thyme 50g', 3.23, 3.98, 21, '50g', 'herbs', true, '15 min'),
    ]
  },
  white_pepper_powder: {
    query: 'white pepper', canonicalName: 'White Pepper Powder', category: 'Packaged Foods', icon: '🧂', prices: [
      p('pandamart', 'Catch White Pepper', 2.68, 3.35, 23, '50g', 'spices', true, '15 min'),
    ]
  },
  pomelo_fruit: {
    query: 'pomelo', canonicalName: 'Pomelo (Chakotra)', category: 'Fruits', icon: '🍊', prices: [
      p('amazon_sg', 'Fresh Pomelo', 3.77, 4.71, 21, '1 pc', 'fruits', true, '2 hrs'),
    ]
  },
  star_fruit: {
    query: 'star fruit', canonicalName: 'Star Fruit (Kamrakh)', category: 'Fruits', icon: '⭐', prices: [
      p('fairprice', 'Fresh Kamrakh 250g', 2.32, 2.98, 30, '250g', 'fruits', true, '2 hrs'),
    ]
  },
  custard_apple_fresh: {
    query: 'custard apple', canonicalName: 'Custard Apple (Sharifa)', category: 'Fruits', icon: '🍏', prices: [
      p('redmart', 'Fresh Sharifa 500g', 4.14, 5.16, 21, '500g', 'fruits', true, '1 day'),
    ]
  },
  badam_milk_bottle: {
    query: 'badam milk', canonicalName: 'Badam Milk', category: 'Beverages', icon: '🥛', prices: [
      p('coldstorage', 'Amul Badam Milk', 2.14, 2.53, 12, '200ml', 'beverages', true, 'Same day'),
    ]
  },
  jaljeera_drink: {
    query: 'jaljeera', canonicalName: 'Jaljeera (Paper Boat)', category: 'Beverages', icon: '🥤', prices: [
      p('shengsiong', 'Paper Boat Jaljeera', 2.14, 2.53, 12, '250ml', 'beverages', true, '4 hrs'),
    ]
  },
  aam_panna_drink: {
    query: 'aam panna', canonicalName: 'Aam Panna (Paper Boat)', category: 'Beverages', icon: '🥤', prices: [
      p('giant', 'Paper Boat Aam Panna', 2.14, 2.53, 12, '250ml', 'beverages', true, 'Same day'),
    ]
  },
  peanut_chikki: {
    query: 'chikki', canonicalName: 'Peanut Chikki', category: 'Sweets & Desserts', icon: '🍪', prices: [
      p('grabmart', 'Lonavala Chikki', 3.05, 3.8, 22, '200g', 'sweets', true, '15 min'),
    ]
  },
  rewri_snack: {
    query: 'rewri', canonicalName: 'Sesame Rewri', category: 'Sweets & Desserts', icon: '🍪', prices: [
      p('pandamart', 'Winter Special Rewri', 3.59, 4.44, 20, '400g', 'sweets', true, '15 min'),
    ]
  },
  dark_chocolate_bournville: {
    query: 'bournville', canonicalName: 'Cadbury Bournville', category: 'Snacks', icon: '🍫', prices: [
      p('amazon_sg', 'Bournville 80g', 3.41, 3.71, 0, '80g', 'chocolate', true, '2 hrs'),
    ]
  },
  chicken_wings: {
    query: 'chicken wings', canonicalName: 'Chicken Wings (Fresh)', category: 'Meat & Poultry', icon: '🍗', prices: [
      p('fairprice', 'Fresh Wings 500g', 4.86, 5.62, 12, '500g', 'meat', true, '2 hrs'),
    ]
  },
  mutton_keema: {
    query: 'mutton keema', canonicalName: 'Mutton Keema (Minced)', category: 'Meat & Poultry', icon: '🍖', prices: [
      p('redmart', 'Fresh Keema 500g', 11.05, 12.62, 12, '500g', 'meat', true, '1 day'),
    ]
  },
  pomfret_fish: {
    query: 'pomfret', canonicalName: 'White Pomfret (Medium)', category: 'Fish & Seafood', icon: '🐟', prices: [
      p('coldstorage', 'Pomfret 1 pc', 8.5, 9.98, 14, '300g', 'seafood', true, 'Same day'),
    ]
  },
  surmai_fish: {
    query: 'surmai', canonicalName: 'Surmai (Seer Fish) Steaks', category: 'Fish & Seafood', icon: '🐟', prices: [
      p('shengsiong', 'Surmai Steaks 500g', 12.14, 13.62, 10, '500g', 'seafood', true, '4 hrs'),
    ]
  },
  greek_yogurt_plain: {
    query: 'greek yogurt', canonicalName: 'Greek Yogurt (Plain)', category: 'Dairy', icon: '🥛', prices: [
      p('giant', 'Epigamia Plain', 2.68, 3.25, 18, '90g', 'yogurt', true, 'Same day'),
    ]
  },
  greek_yogurt_strawberry: {
    query: 'strawberry greek yogurt', canonicalName: 'Greek Yogurt (Strawberry)', category: 'Dairy', icon: '🍓', prices: [
      p('grabmart', 'Epigamia Strawberry', 2.86, 3.44, 16, '90g', 'yogurt', true, '15 min'),
    ]
  },
  bok_choy_fresh: {
    query: 'bok choy', canonicalName: 'Bok Choy (Pak Choi)', category: 'Vegetables', icon: '🥬', prices: [
      p('pandamart', 'Fresh Bok Choy', 3.59, 4.44, 20, '250g', 'vegetables', true, '15 min'),
    ]
  },
  kale_fresh: {
    query: 'kale', canonicalName: 'Curly Kale', category: 'Vegetables', icon: '🥬', prices: [
      p('amazon_sg', 'Fresh Kale 100g', 4.86, 5.8, 16, '100g', 'vegetables', true, '2 hrs'),
    ]
  },
  leeks_fresh: {
    query: 'leeks', canonicalName: 'Leeks', category: 'Vegetables', icon: '🎋', prices: [
      p('fairprice', 'Fresh Leeks 250g', 3.23, 4.07, 24, '250g', 'vegetables', true, '2 hrs'),
    ]
  },
  doritos_nacho: {
    query: 'doritos', canonicalName: 'Doritos Nacho Cheese', category: 'Snacks', icon: '🍟', prices: [
      p('redmart', 'Doritos 150g', 3.23, 3.62, 5, '150g', 'chips', true, '1 day'),
    ]
  },
  cheetos_puffs: {
    query: 'cheetos', canonicalName: 'Cheetos Cheese Puffs', category: 'Snacks', icon: '🍟', prices: [
      p('coldstorage', 'Cheetos 70g', 2.14, 2.44, 0, '70g', 'snacks', true, 'Same day'),
    ]
  },
  monster_energy: {
    query: 'monster energy', canonicalName: 'Monster Energy Drink', category: 'Beverages', icon: '⚡', prices: [
      p('shengsiong', 'Monster 500ml', 3.59, 4.07, 8, '500ml', 'energy drink', true, '4 hrs'),
    ]
  },
  coconut_water_tetra: {
    query: 'coconut water', canonicalName: 'Coconut Water (Pack)', category: 'Beverages', icon: '🥥', prices: [
      p('giant', 'Paper Boat Coconut', 2.5, 2.98, 15, '200ml', 'beverages', true, 'Same day'),
    ]
  },
  pasta_penne_wheat: {
    query: 'penne pasta', canonicalName: 'Whole Wheat Penne', category: 'Packaged Foods', icon: '🍝', prices: [
      p('grabmart', 'Bambino Penne', 3.23, 3.98, 21, '500g', 'pasta', true, '15 min'),
    ]
  },
  rice_noodles_fresh: {
    query: 'rice noodles', canonicalName: 'Rice Noodles', category: 'Packaged Foods', icon: '🍜', prices: [
      p('pandamart', 'Real Thai Noodles', 4.86, 5.8, 16, '200g', 'noodles', true, '15 min'),
    ]
  },
  dragon_fruit_yellow: {
    query: 'yellow dragon fruit', canonicalName: 'Yellow Dragon Fruit', category: 'Fruits', icon: '🥭', prices: [
      p('amazon_sg', 'Imported Yellow', 8.5, 9.98, 14, '1 pc', 'fruits', true, '2 hrs'),
    ]
  },
  passion_fruit_fresh: {
    query: 'passion fruit', canonicalName: 'Passion Fruit', category: 'Fruits', icon: '🥭', prices: [
      p('fairprice', 'Fresh Passion Fruit', 5.95, 7.07, 15, '250g', 'fruits', true, '2 hrs'),
    ]
  },
  mangosteen_fresh: {
    query: 'mangosteen', canonicalName: 'Mangosteen', category: 'Fruits', icon: '🥭', prices: [
      p('redmart', 'Imported Mangosteen', 10.32, 11.8, 12, '500g', 'fruits', true, '1 day'),
    ]
  },
  blueberries_dried_pack: {
    query: 'dried blueberries', canonicalName: 'Dried Blueberries', category: 'Snacks', icon: '🍇', prices: [
      p('coldstorage', 'True Elements Berry', 8.5, 9.98, 14, '150g', 'dry fruits', true, 'Same day'),
    ]
  },
  kaju_katli_pack: {
    query: 'kaju katli', canonicalName: 'Kaju Katli (Pack)', category: 'Sweets & Desserts', icon: '🍮', prices: [
      p('shengsiong', 'Haldiram Kaju Katli', 9.23, 9.98, 6, '250g', 'sweets', true, '4 hrs'),
    ]
  },
  til_chikki_pack: {
    query: 'til chikki', canonicalName: 'Til Chikki (Sesame)', category: 'Sweets & Desserts', icon: '🍪', prices: [
      p('giant', 'Winter Special Til', 3.77, 4.44, 14, '400g', 'sweets', true, 'Same day'),
    ]
  },
  coconut_barfi_pack: {
    query: 'coconut barfi', canonicalName: 'Coconut Barfi', category: 'Sweets & Desserts', icon: '🍮', prices: [
      p('grabmart', 'Haldiram Coconut', 4.5, 5.16, 11, '400g', 'sweets', true, '15 min'),
    ]
  },
  lotus_stem_fresh: {
    query: 'lotus stem', canonicalName: 'Lotus Stem (Kamal Kakdi)', category: 'Vegetables', icon: '🎋', prices: [
      p('pandamart', 'Fresh Kamal Kakdi', 3.05, 3.8, 22, '250g', 'vegetables', true, '15 min'),
    ]
  },
  tindora_fresh: {
    query: 'tindora', canonicalName: 'Ivy Gourd (Tindora)', category: 'Vegetables', icon: '🥒', prices: [
      p('amazon_sg', 'Fresh Tindora 500g', 2.14, 2.71, 30, '500g', 'vegetables', true, '2 hrs'),
    ]
  },
  water_chestnut_fresh: {
    query: 'singhara', canonicalName: 'Water Chestnut (Singhara)', category: 'Vegetables', icon: '🍈', prices: [
      p('fairprice', 'Fresh Singhara 500g', 2.32, 2.98, 30, '500g', 'vegetables', true, '2 hrs'),
    ]
  },
  raw_mango_fresh: {
    query: 'raw mango', canonicalName: 'Raw Mango (Katcha Aam)', category: 'Vegetables', icon: '🥭', prices: [
      p('redmart', 'Katcha Aam 500g', 2.32, 2.98, 30, '500g', 'vegetables', true, '1 day'),
    ]
  },
  rajgira_flour: {
    query: 'rajgira', canonicalName: 'Amaranth (Rajgira) Flour', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('coldstorage', 'Organic Rajgira', 3.23, 4.07, 24, '500g', 'millets', true, 'Same day'),
    ]
  },
  barnyard_millet: {
    query: 'barnyard millet', canonicalName: 'Barnyard Millet (Sanwa)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('shengsiong', 'Organic Sanwa', 3.05, 3.8, 22, '500g', 'millets', true, '4 hrs'),
    ]
  },
  soya_sticks_snack: {
    query: 'soya sticks', canonicalName: 'Soya Sticks', category: 'Snacks', icon: '🍿', prices: [
      p('giant', 'Haldiram Soya Sticks', 2.32, 2.8, 18, '150g', 'snacks', true, 'Same day'),
    ]
  },
  makhana_peri_peri: {
    query: 'peri peri makhana', canonicalName: 'Peri Peri Makhana', category: 'Snacks', icon: '🍿', prices: [
      p('grabmart', 'Happilo Peri Peri', 4.32, 5.16, 16, '100g', 'snacks', true, '15 min'),
    ]
  },
  barbecue_sauce_pack: {
    query: 'barbecue sauce', canonicalName: 'Barbecue Sauce', category: 'Packaged Foods', icon: '🥫', prices: [
      p('pandamart', 'Veeba BBQ Sauce', 3.23, 3.89, 17, '300g', 'sauce', true, '15 min'),
    ]
  },
  sriracha_sauce_pack: {
    query: 'sriracha', canonicalName: 'Sriracha Hot Sauce', category: 'Packaged Foods', icon: '🔥', prices: [
      p('amazon_sg', 'Real Thai Sriracha', 4.86, 5.8, 16, '250ml', 'sauce', true, '2 hrs'),
    ]
  },
  appy_fizz_bottle: {
    query: 'appy fizz', canonicalName: 'Appy Fizz', category: 'Beverages', icon: '🥤', prices: [
      p('fairprice', 'Appy Fizz 600ml', 2.23, 2.53, 0, '600ml', 'beverages', true, '2 hrs'),
    ]
  },
  frooti_bottle: {
    query: 'frooti', canonicalName: 'Frooti Mango Drink', category: 'Beverages', icon: '🥭', prices: [
      p('redmart', 'Frooti 1.2 L', 2.86, 3.35, 11, '1.2 L', 'beverages', true, '1 day'),
    ]
  },
  shrikhand_mango: {
    query: 'shrikhand', canonicalName: 'Shrikhand (Amrakhand)', category: 'Dairy', icon: '🥛', prices: [
      p('coldstorage', 'Amul Amrakhand', 2.68, 3.16, 13, '200g', 'dairy', true, 'Same day'),
    ]
  },
  mishti_doi_pack: {
    query: 'mishti doi', canonicalName: 'Mishti Doi', category: 'Dairy', icon: '🥛', prices: [
      p('shengsiong', 'Mother Dairy Mishti', 1.95, 2.35, 16, '100g', 'dairy', true, '4 hrs'),
    ]
  },
  pesto_sauce_pack: {
    query: 'pesto sauce', canonicalName: 'Pesto Sauce (Green)', category: 'Packaged Foods', icon: '🥫', prices: [
      p('giant', 'Barilla Pesto', 7.41, 8.71, 14, '190g', 'sauce', true, 'Same day'),
    ]
  },
  couscous_pack: {
    query: 'couscous', canonicalName: 'Couscous (Semolina)', category: 'Packaged Foods', icon: '🥣', prices: [
      p('grabmart', 'Urban Platter Couscous', 5.95, 7.07, 15, '500g', 'grains', true, '15 min'),
    ]
  },
  brown_rice_pack: {
    query: 'brown rice', canonicalName: 'Brown Rice', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('pandamart', 'India Gate Brown', 4.14, 4.98, 17, '1 kg', 'rice', true, '15 min'),
    ]
  },
  red_rice_pack: {
    query: 'red rice', canonicalName: 'Red Rice (Matta)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('amazon_sg', 'Kerala Matta Rice', 3.23, 3.89, 17, '1 kg', 'rice', true, '2 hrs'),
    ]
  },
  black_rice_pack: {
    query: 'black rice', canonicalName: 'Black Rice (Forbidden)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('fairprice', 'Organic Black Rice', 6.68, 8.16, 18, '500g', 'rice', true, '2 hrs'),
    ]
  },
  jasmine_rice_pack: {
    query: 'jasmine rice', canonicalName: 'Jasmine Rice', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('redmart', 'Thai Jasmine Rice', 5.59, 6.89, 19, '1 kg', 'rice', true, '1 day'),
    ]
  },
  sushi_rice_pack: {
    query: 'sushi rice', canonicalName: 'Sushi Rice', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('coldstorage', 'Urban Platter Sushi', 7.41, 8.71, 14, '1 kg', 'rice', true, 'Same day'),
    ]
  },
  kodo_millet: {
    query: 'kodo millet', canonicalName: 'Kodo Millet', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('shengsiong', 'Organic Kodo', 3.05, 3.8, 22, '500g', 'millets', true, '4 hrs'),
    ]
  },
  little_millet: {
    query: 'little millet', canonicalName: 'Little Millet (Kutki)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('giant', 'Organic Kutki', 3.05, 3.8, 22, '500g', 'millets', true, 'Same day'),
    ]
  },
  foxtail_millet: {
    query: 'foxtail millet', canonicalName: 'Foxtail Millet', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('grabmart', 'Organic Foxtail', 3.05, 3.8, 22, '500g', 'millets', true, '15 min'),
    ]
  },
  cluster_beans_fresh: {
    query: 'gawar', canonicalName: 'Cluster Beans (Gawar)', category: 'Vegetables', icon: '🥒', prices: [
      p('pandamart', 'Fresh Gawar 250g', 1.95, 2.44, 28, '250g', 'vegetables', true, '15 min'),
    ]
  },
  broad_beans_fresh: {
    query: 'sem', canonicalName: 'Broad Beans (Sem)', category: 'Vegetables', icon: '🥒', prices: [
      p('amazon_sg', 'Fresh Sem 250g', 2.14, 2.62, 22, '250g', 'vegetables', true, '2 hrs'),
    ]
  },
  snake_gourd_fresh: {
    query: 'chichinda', canonicalName: 'Snake Gourd (Chichinda)', category: 'Vegetables', icon: '🥒', prices: [
      p('fairprice', 'Fresh Chichinda', 2.14, 2.71, 30, '1 pc', 'vegetables', true, '2 hrs'),
    ]
  },
  chow_chow_fresh: {
    query: 'chow chow', canonicalName: 'Chow Chow (Chayote)', category: 'Vegetables', icon: '🥒', prices: [
      p('redmart', 'Fresh Chow Chow', 2.32, 2.98, 30, '1 pc', 'vegetables', true, '1 day'),
    ]
  },
  peri_peri_sauce_veeba: {
    query: 'peri peri sauce', canonicalName: 'Peri Peri Sauce', category: 'Packaged Foods', icon: '🥫', prices: [
      p('coldstorage', 'Veeba Peri Peri', 3.23, 3.89, 17, '250g', 'sauce', true, 'Same day'),
    ]
  },
  masala_oats_saffola: {
    query: 'masala oats', canonicalName: 'Masala Oats (Classic)', category: 'Packaged Foods', icon: '🥣', prices: [
      p('shengsiong', 'Saffola Masala Oats', 2.14, 2.62, 22, '40g', 'oats', true, '4 hrs'),
    ]
  },
  steel_cut_oats_pack: {
    query: 'steel cut oats', canonicalName: 'Steel Cut Oats', category: 'Packaged Foods', icon: '🥣', prices: [
      p('giant', 'True Elements Oats', 4.86, 5.8, 16, '500g', 'oats', true, 'Same day'),
    ]
  },
  mango_lassi_bottle: {
    query: 'mango lassi', canonicalName: 'Mango Lassi', category: 'Beverages', icon: '🥛', prices: [
      p('grabmart', 'Amul Mango Lassi', 1.95, 2.35, 16, '200ml', 'beverages', true, '15 min'),
    ]
  },
  rose_lassi_bottle: {
    query: 'rose lassi', canonicalName: 'Rose Lassi', category: 'Beverages', icon: '🥛', prices: [
      p('pandamart', 'Amul Rose Lassi', 1.95, 2.35, 16, '200ml', 'beverages', true, '15 min'),
    ]
  },
  masala_chaas_bottle: {
    query: 'masala chaas', canonicalName: 'Masala Buttermilk', category: 'Beverages', icon: '🥛', prices: [
      p('amazon_sg', 'Amul Masala Chaas', 1.77, 2.16, 25, '200ml', 'beverages', true, '2 hrs'),
    ]
  },
  aloe_vera_juice_pack: {
    query: 'aloe vera juice', canonicalName: 'Aloe Vera Juice', category: 'Beverages', icon: '🧃', prices: [
      p('fairprice', 'B Natural Aloe', 3.77, 4.44, 14, '1 L', 'beverages', true, '2 hrs'),
    ]
  },
  barley_water_bottle: {
    query: 'barley water', canonicalName: 'Barley Water', category: 'Beverages', icon: '🥤', prices: [
      p('redmart', 'Organic Barley Water', 2.32, 2.8, 18, '500ml', 'beverages', true, '1 day'),
    ]
  },
  shahi_jeera_seeds: {
    query: 'shahi jeera', canonicalName: 'Shahi Jeera', category: 'Packaged Foods', icon: '🧂', prices: [
      p('coldstorage', 'Catch Shahi Jeera', 2.5, 3.07, 21, '50g', 'spices', true, 'Same day'),
    ]
  },
  kalonji_seeds_pack: {
    query: 'kalonji', canonicalName: 'Nigella Seeds (Kalonji)', category: 'Packaged Foods', icon: '🧂', prices: [
      p('shengsiong', 'Catch Kalonji', 2.32, 2.89, 25, '50g', 'spices', true, '4 hrs'),
    ]
  },
  ice_apple_fresh: {
    query: 'ice apple', canonicalName: 'Ice Apple (Tadgola)', category: 'Fruits', icon: '🥭', prices: [
      p('giant', 'Fresh Tadgola 500g', 4.86, 5.8, 16, '500g', 'fruits', true, 'Same day'),
    ]
  },
  wood_apple_fresh: {
    query: 'wood apple', canonicalName: 'Wood Apple (Bael)', category: 'Fruits', icon: '🥭', prices: [
      p('grabmart', 'Fresh Bael Fruit', 2.5, 3.16, 26, '1 pc', 'fruits', true, '15 min'),
    ]
  },
  custard_apple_premium: {
    query: 'premium sharifa', canonicalName: 'Premium Custard Apple', category: 'Fruits', icon: '🍏', prices: [
      p('pandamart', 'Large Sharifa 500g', 5.05, 6.16, 18, '500g', 'fruits', true, '15 min'),
    ]
  },
  peanut_butter_jaggery: {
    query: 'jaggery peanut butter', canonicalName: 'Peanut Butter with Jaggery', category: 'Packaged Foods', icon: '🥜', prices: [
      p('amazon_sg', 'Pintola Jaggery', 4.86, 5.8, 16, '350g', 'peanut butter', true, '2 hrs'),
    ]
  },
  muesli_no_added_sugar: {
    query: 'no sugar muesli', canonicalName: 'Muesli (Sugar-Free)', category: 'Packaged Foods', icon: '🥣', prices: [
      p('fairprice', 'Yoga Bar No Sugar', 7.41, 8.71, 14, '400g', 'cereal', true, '2 hrs'),
    ]
  },
  fruit_custard_pack: {
    query: 'fruit custard', canonicalName: 'Ready-to-Eat Custard', category: 'Dairy', icon: '🥛', prices: [
      p('redmart', 'Amul Fruit Custard', 2.32, 2.8, 18, '200g', 'dairy', true, '1 day'),
    ]
  },
  sattu_flour_pack: {
    query: 'sattu', canonicalName: 'Sattu Flour (Chana)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('coldstorage', 'Aashirvaad Sattu', 3.23, 3.98, 21, '500g', 'flour', true, 'Same day'),
    ]
  },
  daliya_broken_wheat: {
    query: 'daliya', canonicalName: 'Broken Wheat (Daliya)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('shengsiong', 'Fortune Daliya 500g', 2.32, 2.8, 18, '500g', 'grains', true, '4 hrs'),
    ]
  },
  multi_grain_atta_pack: {
    query: 'multigrain atta', canonicalName: 'Multigrain Atta', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('giant', 'Aashirvaad Multi', 7.77, 8.71, 9, '5 kg', 'flour', true, 'Same day'),
    ]
  },
  soan_papdi_sugar_free: {
    query: 'sugar free soan papdi', canonicalName: 'Soan Papdi (Sugar-Free)', category: 'Sweets & Desserts', icon: '🍮', prices: [
      p('grabmart', 'Haldiram Sugar Free', 4.86, 5.62, 12, '500g', 'sweets', true, '15 min'),
    ]
  },
  besan_ladoo_pack: {
    query: 'besan ladoo', canonicalName: 'Besan Ladoo (Pack)', category: 'Sweets & Desserts', icon: '🍮', prices: [
      p('pandamart', 'Haldiram Besan Ladoo', 4.5, 5.16, 11, '400g', 'sweets', true, '15 min'),
    ]
  },
  motichoor_ladoo_pack: {
    query: 'motichoor ladoo', canonicalName: 'Motichoor Ladoo', category: 'Sweets & Desserts', icon: '🍮', prices: [
      p('amazon_sg', 'Haldiram Motichoor', 4.68, 5.35, 10, '400g', 'sweets', true, '2 hrs'),
    ]
  },
  dry_fruit_barfi_pack: {
    query: 'dry fruit barfi', canonicalName: 'Dry Fruit Barfi', category: 'Sweets & Desserts', icon: '🍮', prices: [
      p('fairprice', 'Haldiram Dry Fruit', 7.41, 8.35, 10, '250g', 'sweets', true, '2 hrs'),
    ]
  },
  roasted_chana_hing: {
    query: 'roasted chana', canonicalName: 'Roasted Chana (Hing)', category: 'Snacks', icon: '🍿', prices: [
      p('redmart', 'Haldiram Hing Chana', 2.5, 2.98, 15, '200g', 'snacks', true, '1 day'),
    ]
  },
  roasted_peanuts_salted: {
    query: 'salted peanuts', canonicalName: 'Salted Peanuts', category: 'Snacks', icon: '🥜', prices: [
      p('coldstorage', 'Haldiram Salted Kaju', 3.05, 3.62, 15, '200g', 'snacks', true, 'Same day'),
    ]
  },
  diet_bhel_mix: {
    query: 'diet bhel', canonicalName: 'Diet Bhel Mix', category: 'Snacks', icon: '🍿', prices: [
      p('shengsiong', 'Haldiram Diet Bhel', 2.68, 3.25, 18, '200g', 'snacks', true, '4 hrs'),
    ]
  },
  proso_millet: {
    query: 'proso millet', canonicalName: 'Proso Millet (Chena)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('giant', 'Organic Chena', 3.23, 3.98, 21, '500g', 'millets', true, 'Same day'),
    ]
  },
  browntop_millet: {
    query: 'browntop millet', canonicalName: 'Browntop Millet', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('grabmart', 'Organic Browntop', 3.59, 4.44, 21, '500g', 'millets', true, '15 min'),
    ]
  },
  garlic_bread_fresh: {
    query: 'garlic bread', canonicalName: 'Fresh Garlic Bread', category: 'Bakery', icon: '🍞', prices: [
      p('pandamart', 'English Oven Garlic', 2.68, 3.16, 13, '250g', 'bread', true, '15 min'),
    ]
  },
  whole_wheat_pizza_base: {
    query: 'wheat pizza base', canonicalName: 'Wheat Pizza Base', category: 'Bakery', icon: '🍞', prices: [
      p('amazon_sg', 'English Oven Wheat', 2.68, 3.16, 13, '2 pcs', 'bread', true, '2 hrs'),
    ]
  },
  greek_yogurt_blueberry: {
    query: 'blueberry greek yogurt', canonicalName: 'Greek Yogurt (Blueberry)', category: 'Dairy', icon: '🫐', prices: [
      p('fairprice', 'Epigamia Blueberry', 2.86, 3.44, 16, '90g', 'yogurt', true, '2 hrs'),
    ]
  },
  greek_yogurt_mango: {
    query: 'mango greek yogurt', canonicalName: 'Greek Yogurt (Mango)', category: 'Dairy', icon: '🥭', prices: [
      p('redmart', 'Epigamia Mango', 2.86, 3.44, 16, '90g', 'yogurt', true, '1 day'),
    ]
  },
  fruit_cream_pack: {
    query: 'fruit cream', canonicalName: 'Fresh Fruit Cream', category: 'Dairy', icon: '🥛', prices: [
      p('coldstorage', 'Amul Fruit Cream', 2.5, 2.98, 15, '200g', 'dairy', true, 'Same day'),
    ]
  },
  raw_banana_chips: {
    query: 'banana chips', canonicalName: 'Kerala Banana Chips', category: 'Snacks', icon: '🍟', prices: [
      p('shengsiong', 'Beyond Snack Chips', 2.5, 2.89, 8, '100g', 'snacks', true, '4 hrs'),
    ]
  },
  jackfruit_chips: {
    query: 'jackfruit chips', canonicalName: 'Jackfruit Chips', category: 'Snacks', icon: '🍟', prices: [
      p('giant', 'Beyond Snack Jack', 3.05, 3.62, 15, '100g', 'snacks', true, 'Same day'),
    ]
  },
  moth_dal_snack: {
    query: 'moth dal snack', canonicalName: 'Moth Dal (Salted)', category: 'Snacks', icon: '🍿', prices: [
      p('grabmart', 'Haldiram Moth Dal', 2.68, 3.25, 18, '200g', 'snacks', true, '15 min'),
    ]
  },
  bhakarwadi_snack: {
    query: 'bhakarwadi', canonicalName: 'Mini Bhakarwadi', category: 'Snacks', icon: '🍿', prices: [
      p('pandamart', 'Haldiram Bhakarwadi', 3.05, 3.62, 15, '250g', 'snacks', true, '15 min'),
    ]
  },
  soya_chips_snack: {
    query: 'soya chips', canonicalName: 'Soya Chips', category: 'Snacks', icon: '🍿', prices: [
      p('amazon_sg', 'Haldiram Soya Chips', 2.5, 2.98, 15, '150g', 'snacks', true, '2 hrs'),
    ]
  },
  diet_mixture_snack: {
    query: 'diet mixture', canonicalName: 'Diet Mixture', category: 'Snacks', icon: '🍿', prices: [
      p('fairprice', 'Haldiram Diet Mix', 3.41, 4.07, 16, '400g', 'snacks', true, '2 hrs'),
    ]
  },
  sugar_free_biscuits: {
    query: 'sugar free biscuits', canonicalName: 'NutriChoice Sugar Free', category: 'Snacks', icon: '🍪', prices: [
      p('redmart', 'NutriChoice SF', 1.95, 2.25, 0, '150g', 'biscuits', true, '1 day'),
    ]
  },
  digestive_biscuits: {
    query: 'digestive biscuits', canonicalName: 'NutriChoice Digestive', category: 'Snacks', icon: '🍪', prices: [
      p('coldstorage', 'NutriChoice Dig', 2.14, 2.44, 0, '250g', 'biscuits', true, 'Same day'),
    ]
  },
  oats_cookies_pack: {
    query: 'oats cookies', canonicalName: 'Oats Cookies', category: 'Snacks', icon: '🍪', prices: [
      p('shengsiong', 'Unibic Oats Cookies', 2.32, 2.8, 18, '150g', 'biscuits', true, '4 hrs'),
    ]
  },
  multi_grain_cookies: {
    query: 'multigrain cookies', canonicalName: 'Multigrain Cookies', category: 'Snacks', icon: '🍪', prices: [
      p('giant', 'Unibic Multigrain', 2.32, 2.8, 18, '150g', 'biscuits', true, 'Same day'),
    ]
  },
  honey_ginger_tea: {
    query: 'ginger tea', canonicalName: 'Honey Ginger Tea Bags', category: 'Beverages', icon: '🍵', prices: [
      p('grabmart', 'Tetley Ginger Honey', 4.86, 5.62, 12, '25 bags', 'tea', true, '15 min'),
    ]
  },
  lemon_green_tea: {
    query: 'lemon tea', canonicalName: 'Lemon Green Tea Bags', category: 'Beverages', icon: '🍵', prices: [
      p('pandamart', 'Lipton Lemon Green', 4.5, 5.25, 13, '25 bags', 'tea', true, '15 min'),
    ]
  },
  chamomile_tea_bags: {
    query: 'chamomile tea', canonicalName: 'Chamomile Tea Bags', category: 'Beverages', icon: '🍵', prices: [
      p('amazon_sg', 'Typhoo Chamomile', 5.59, 6.35, 10, '20 bags', 'tea', true, '2 hrs'),
    ]
  },
  earl_grey_tea_bags: {
    query: 'earl grey', canonicalName: 'Earl Grey Tea Bags', category: 'Beverages', icon: '🍵', prices: [
      p('fairprice', 'Twinings Earl Grey', 8.5, 9.98, 14, '25 bags', 'tea', true, '2 hrs'),
    ]
  },
  roasted_vermicelli: {
    query: 'vermicelli', canonicalName: 'Roasted Vermicelli', category: 'Packaged Foods', icon: '🍝', prices: [
      p('redmart', 'Bambino Roasted', 2.32, 2.8, 18, '450g', 'noodles', true, '1 day'),
    ]
  },
  poha_thin_pack: {
    query: 'thin poha', canonicalName: 'Thin Poha', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('coldstorage', 'Fortune Thin Poha', 2.32, 2.8, 18, '500g', 'grains', true, 'Same day'),
    ]
  },
  makki_atta_pack: {
    query: 'makki atta', canonicalName: 'Maize Flour (Makki Atta)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('shengsiong', 'Organic Makki Atta', 3.05, 3.8, 22, '1 kg', 'flour', true, '4 hrs'),
    ]
  },
  bajra_atta_premium: {
    query: 'premium bajra', canonicalName: 'Premium Bajra Flour', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('giant', 'Organic Bajra 1kg', 3.05, 3.8, 22, '1 kg', 'flour', true, 'Same day'),
    ]
  },
  ragi_atta_premium: {
    query: 'premium ragi', canonicalName: 'Premium Ragi Flour', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('grabmart', 'Organic Ragi 1kg', 3.41, 4.25, 22, '1 kg', 'flour', true, '15 min'),
    ]
  },
  soy_sauce_premium: {
    query: 'premium soy sauce', canonicalName: 'Premium Dark Soy Sauce', category: 'Packaged Foods', icon: '🥫', prices: [
      p('pandamart', 'Lee Kum Kee Premium', 9.23, 10.53, 11, '500ml', 'sauce', true, '15 min'),
    ]
  },
  chilli_paste_red: {
    query: 'red chilli paste', canonicalName: 'Red Chilli Paste', category: 'Packaged Foods', icon: '🔥', prices: [
      p('amazon_sg', 'Real Thai Red Paste', 4.86, 5.8, 16, '227g', 'sauce', true, '2 hrs'),
    ]
  },
  curry_paste_green: {
    query: 'green curry paste', canonicalName: 'Green Curry Paste', category: 'Packaged Foods', icon: '🍲', prices: [
      p('fairprice', 'Real Thai Green', 4.86, 5.8, 16, '227g', 'sauce', true, '2 hrs'),
    ]
  },
  fish_sauce_bottle: {
    query: 'fish sauce', canonicalName: 'Fish Sauce', category: 'Packaged Foods', icon: '🥫', prices: [
      p('redmart', 'Real Thai Fish Sauce', 5.95, 6.89, 12, '200ml', 'sauce', true, '1 day'),
    ]
  },
  apple_juice_pack: {
    query: 'apple juice', canonicalName: 'Pure Apple Juice', category: 'Beverages', icon: '🧃', prices: [
      p('coldstorage', 'Real Apple 1L', 3.59, 4.16, 11, '1 L', 'beverages', true, 'Same day'),
    ]
  },
  guava_juice_pack: {
    query: 'guava juice', canonicalName: 'Pink Guava Juice', category: 'Beverages', icon: '🧃', prices: [
      p('shengsiong', 'Real Guava 1L', 3.59, 4.16, 11, '1 L', 'beverages', true, '4 hrs'),
    ]
  },
  pomegranate_juice_pack: {
    query: 'pomegranate juice', canonicalName: 'Pomegranate Juice', category: 'Beverages', icon: '🧃', prices: [
      p('giant', 'Real Pomegranate', 3.77, 4.44, 14, '1 L', 'beverages', true, 'Same day'),
    ]
  },
  coconut_milk_pack: {
    query: 'coconut milk', canonicalName: 'Coconut Milk (Thick)', category: 'Packaged Foods', icon: '🥛', prices: [
      p('grabmart', 'Real Thai Coconut', 4.86, 5.8, 16, '400ml', 'sauce', true, '15 min'),
    ]
  },
  almond_flour_pack: {
    query: 'almond flour', canonicalName: 'Blanched Almond Flour', category: 'Packaged Foods', icon: '🌾', prices: [
      p('pandamart', 'Urban Platter Almond', 10.32, 11.8, 12, '200g', 'flour', true, '15 min'),
    ]
  },
  dark_chocolate_bits: {
    query: 'chocolate bits', canonicalName: 'Dark Chocolate Bits', category: 'Snacks', icon: '🍫', prices: [
      p('amazon_sg', 'Urban Platter Bits', 5.59, 6.35, 10, '150g', 'chocolate', true, '2 hrs'),
    ]
  },
  amul_cheese_slices: {
    query: 'amul cheese slices', canonicalName: 'Amul Cheese Slices', category: 'Dairy', icon: '🧀', prices: [
      p('fairprice', 'Amul Slices (10 pcs)', 4.14, 4.62, 6, '200g', 'cheese', true, '2 hrs'),
    ]
  },
  amul_cheese_spread: {
    query: 'amul cheese spread', canonicalName: 'Amul Cheese Spread', category: 'Dairy', icon: '🧀', prices: [
      p('redmart', 'Amul Spread (Plain)', 3.23, 3.8, 13, '200g', 'cheese', true, '1 day'),
    ]
  },
  maggi_atta_noodles: {
    query: 'maggi atta', canonicalName: 'Maggi Atta Noodles', category: 'Packaged Foods', icon: '🍜', prices: [
      p('coldstorage', 'Maggi Atta 4-Pack', 3.23, 3.8, 13, '290g', 'noodles', true, 'Same day'),
    ]
  },
  maggi_cup_noodles: {
    query: 'maggi cup', canonicalName: 'Maggi Cuppa Noodles', category: 'Packaged Foods', icon: '🍜', prices: [
      p('shengsiong', 'Maggi Cuppa Masala', 2.32, 2.71, 10, '70g', 'noodles', true, '4 hrs'),
    ]
  },
  mccain_smiles: {
    query: 'mccain smiles', canonicalName: 'McCain Smiles', category: 'Frozen Foods', icon: '🧊', prices: [
      p('giant', 'McCain Smiles 415g', 3.59, 4.25, 14, '415g', 'frozen', true, 'Same day'),
    ]
  },
  mccain_veggie_fingers: {
    query: 'mccain fingers', canonicalName: 'McCain Veggie Fingers', category: 'Frozen Foods', icon: '🧊', prices: [
      p('grabmart', 'McCain Fingers 400g', 3.77, 4.53, 16, '400g', 'frozen', true, '15 min'),
    ]
  },
  nutella_spread_large: {
    query: 'nutella', canonicalName: 'Nutella Hazelnut Spread', category: 'Packaged Foods', icon: '🍫', prices: [
      p('pandamart', 'Nutella 350g', 8.5, 9.53, 9, '350g', 'spread', true, '15 min'),
    ]
  },
  kelloggs_chocos: {
    query: 'kelloggs chocos', canonicalName: 'Kellogg’s Chocos', category: 'Packaged Foods', icon: '🥣', prices: [
      p('amazon_sg', 'Chocos 385g', 4.86, 5.62, 12, '385g', 'cereal', true, '2 hrs'),
    ]
  },
  saffola_masala_oats_peppy: {
    query: 'peppy tomato oats', canonicalName: 'Masala Oats (Peppy Tomato)', category: 'Packaged Foods', icon: '🥣', prices: [
      p('fairprice', 'Saffola Peppy Tomato', 2.32, 2.8, 18, '40g', 'oats', true, '2 hrs'),
    ]
  },
  amul_kool_kesar: {
    query: 'amul kool', canonicalName: 'Amul Kool Kesar', category: 'Beverages', icon: '🥛', prices: [
      p('redmart', 'Amul Kool Kesar 200ml', 1.95, 2.35, 16, '200ml', 'beverages', true, '1 day'),
    ]
  },
  amul_kool_kafee: {
    query: 'amul kool kafee', canonicalName: 'Amul Kool Kafee', category: 'Beverages', icon: '🥛', prices: [
      p('coldstorage', 'Amul Kool Kafee 200ml', 1.95, 2.35, 16, '200ml', 'beverages', true, 'Same day'),
    ]
  },
  sona_masuri_rice: {
    query: 'sona masuri', canonicalName: 'Sona Masuri Rice', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('shengsiong', 'Fortune Sona Masuri', 8.5, 9.98, 14, '5 kg', 'rice', true, '4 hrs'),
    ]
  },
  fortune_kolam_rice: {
    query: 'kolam rice', canonicalName: 'Kolam Rice', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('giant', 'Fortune Kolam Rice', 9.23, 10.53, 11, '5 kg', 'rice', true, 'Same day'),
    ]
  },
  gobindobhog_rice: {
    query: 'gobindobhog', canonicalName: 'Gobindobhog Rice', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('grabmart', 'Premium Gobindobhog', 3.77, 4.44, 14, '1 kg', 'rice', true, '15 min'),
    ]
  },
  red_label_tea: {
    query: 'red label', canonicalName: 'Brooke Bond Red Label', category: 'Beverages', icon: '🍵', prices: [
      p('pandamart', 'Red Label Tea 500g', 7.41, 8.35, 9, '500g', 'tea', true, '15 min'),
    ]
  },
  tata_tea_gold: {
    query: 'tata tea gold', canonicalName: 'Tata Tea Gold', category: 'Beverages', icon: '🍵', prices: [
      p('amazon_sg', 'Tata Tea Gold 500g', 7.77, 8.8, 10, '500g', 'tea', true, '2 hrs'),
    ]
  },
  wagh_bakri_tea: {
    query: 'wagh bakri', canonicalName: 'Wagh Bakri Premium', category: 'Beverages', icon: '🍵', prices: [
      p('fairprice', 'Wagh Bakri 500g', 6.68, 7.44, 8, '500g', 'tea', true, '2 hrs'),
    ]
  },
  moong_chilka_dal: {
    query: 'moong chilka', canonicalName: 'Moong Chilka Dal', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('redmart', 'Fortune Moong Chilka', 3.41, 4.07, 16, '500g', 'pulses', true, '1 day'),
    ]
  },
  urad_chilka_dal: {
    query: 'urad chilka', canonicalName: 'Urad Chilka Dal', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('coldstorage', 'Fortune Urad Chilka', 3.59, 4.25, 14, '500g', 'pulses', true, 'Same day'),
    ]
  },
  bell_pepper_red: {
    query: 'red capsicum', canonicalName: 'Red Bell Pepper', category: 'Vegetables', icon: '🫑', prices: [
      p('shengsiong', 'Red Bell Pepper Fresh', 3.05, 3.8, 22, '1 pc', 'vegetables', true, '4 hrs'),
    ]
  },
  bell_pepper_yellow: {
    query: 'yellow capsicum', canonicalName: 'Yellow Bell Pepper', category: 'Vegetables', icon: '🫑', prices: [
      p('giant', 'Yellow Bell Pepper', 3.05, 3.8, 22, '1 pc', 'vegetables', true, 'Same day'),
    ]
  },
  grapes_black: {
    query: 'black grapes', canonicalName: 'Black Grapes (Seedless)', category: 'Fruits', icon: '🍇', prices: [
      p('grabmart', 'Black Grapes Fresh', 3.77, 4.62, 19, '500g', 'fruits', true, '15 min'),
    ]
  },
  orange_nagpur: {
    query: 'orange', canonicalName: 'Nagpur Orange', category: 'Fruits', icon: '🍊', prices: [
      p('pandamart', 'Fresh Nagpur Orange', 3.23, 4.07, 24, '1 kg', 'fruits', true, '15 min'),
    ]
  },
  veeba_eggless_mayo: {
    query: 'eggless mayo', canonicalName: 'Eggless Mayonnaise', category: 'Packaged Foods', icon: '🥫', prices: [
      p('amazon_sg', 'Veeba Eggless Mayo', 4.14, 4.8, 12, '250g', 'sauce', true, '2 hrs'),
    ]
  },
  mccain_aloo_tikki: {
    query: 'aloo tikki', canonicalName: 'McCain Aloo Tikki', category: 'Frozen Foods', icon: '🧊', prices: [
      p('fairprice', 'McCain Tikki 400g', 3.77, 4.53, 16, '400g', 'frozen', true, '2 hrs'),
    ]
  },
  mccain_cheese_nuggets: {
    query: 'cheese nuggets', canonicalName: 'McCain Cheese Corn', category: 'Frozen Foods', icon: '🧊', prices: [
      p('redmart', 'McCain Cheese Nuggets', 4.86, 5.8, 16, '325g', 'frozen', true, '1 day'),
    ]
  },
  itc_chicken_nuggets: {
    query: 'chicken nuggets', canonicalName: 'ITC Chicken Nuggets', category: 'Frozen Foods', icon: '🧊', prices: [
      p('coldstorage', 'ITC Master Chef', 5.95, 7.07, 15, '500g', 'frozen', true, 'Same day'),
    ]
  },
  knorr_soup_tomato: {
    query: 'tomato soup', canonicalName: 'Knorr Tomato Soup', category: 'Packaged Foods', icon: '🥣', prices: [
      p('shengsiong', 'Knorr Classic Tomato', 2.5, 2.89, 8, '50g', 'soup', true, '4 hrs'),
    ]
  },
  knorr_soup_sweet_corn: {
    query: 'sweet corn soup', canonicalName: 'Knorr Sweet Corn', category: 'Packaged Foods', icon: '🥣', prices: [
      p('giant', 'Knorr Sweet Corn Veg', 2.5, 2.89, 8, '50g', 'soup', true, 'Same day'),
    ]
  },
  knorr_soup_mixed_veg: {
    query: 'mixed veg soup', canonicalName: 'Knorr Mixed Veg', category: 'Packaged Foods', icon: '🥣', prices: [
      p('grabmart', 'Knorr Mixed Veg Soup', 2.5, 2.89, 8, '50g', 'soup', true, '15 min'),
    ]
  },
  idli_rice_pack: {
    query: 'idli rice', canonicalName: 'Idli Rice (Premium)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('pandamart', 'Fortune Idli Rice', 3.41, 4.07, 16, '1 kg', 'rice', true, '15 min'),
    ]
  },
  wada_kolam_rice: {
    query: 'wada kolam', canonicalName: 'Wada Kolam Rice', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('amazon_sg', 'Premium Wada Kolam', 8.5, 9.98, 14, '5 kg', 'rice', true, '2 hrs'),
    ]
  },
  diabetic_friendly_atta: {
    query: 'diabetic atta', canonicalName: 'Sugar Release Control Atta', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('fairprice', 'Aashirvaad Sugar Release', 8.5, 9.53, 9, '5 kg', 'flour', true, '2 hrs'),
    ]
  },
  amul_butter_100g: {
    query: 'amul butter', canonicalName: 'Amul Butter 100g', category: 'Dairy', icon: '🧈', prices: [
      p('redmart', 'Amul Butter 100g', 2.52, 2.82, 0, '100g', 'butter', true, '1 day'),
    ]
  },
  amul_garlic_butter: {
    query: 'garlic butter', canonicalName: 'Amul Garlic & Herbs Butter', category: 'Dairy', icon: '🧈', prices: [
      p('coldstorage', 'Amul Garlic Butter', 2.55, 2.93, 6, '100g', 'butter', true, 'Same day'),
    ]
  },
  britannia_cheese_slices: {
    query: 'britannia cheese', canonicalName: 'Britannia Cheese Slices', category: 'Dairy', icon: '🧀', prices: [
      p('shengsiong', 'Britannia Slices (10 pcs)', 4.32, 4.89, 9, '200g', 'cheese', true, '4 hrs'),
    ]
  },
  amul_kool_rose: {
    query: 'rose amul kool', canonicalName: 'Amul Kool Rose', category: 'Beverages', icon: '🥛', prices: [
      p('giant', 'Amul Kool Rose 200ml', 1.95, 2.35, 16, '200ml', 'beverages', true, 'Same day'),
    ]
  },
  amul_kool_elaichi: {
    query: 'elaichi amul kool', canonicalName: 'Amul Kool Elaichi', category: 'Beverages', icon: '🥛', prices: [
      p('grabmart', 'Amul Kool Elaichi', 1.95, 2.35, 16, '200ml', 'beverages', true, '15 min'),
    ]
  },
  thums_up_can: {
    query: 'thums up can', canonicalName: 'Thums Up (Can)', category: 'Beverages', icon: '🥤', prices: [
      p('pandamart', 'Thums Up Can 300ml', 2.23, 2.53, 0, '300ml', 'soft drink', true, '15 min'),
    ]
  },
  coke_can: {
    query: 'coke can', canonicalName: 'Coca Cola (Can)', category: 'Beverages', icon: '🥤', prices: [
      p('amazon_sg', 'Coke Can 300ml', 2.23, 2.53, 0, '300ml', 'soft drink', true, '2 hrs'),
    ]
  },
  red_bull_big_can: {
    query: 'big red bull', canonicalName: 'Red Bull (Big Can)', category: 'Beverages', icon: '⚡', prices: [
      p('fairprice', 'Red Bull 350ml', 4.5, 4.8, 0, '350ml', 'energy drink', true, '2 hrs'),
    ]
  },
  broccoli_fresh: {
    query: 'broccoli', canonicalName: 'Fresh Broccoli', category: 'Vegetables', icon: '🥦', prices: [
      p('redmart', 'Premium Broccoli', 3.05, 3.8, 22, '1 pc', 'vegetables', true, '1 day'),
    ]
  },
  celery_fresh: {
    query: 'celery', canonicalName: 'Fresh Celery', category: 'Vegetables', icon: '🌿', prices: [
      p('coldstorage', 'Fresh Celery 250g', 2.32, 2.89, 25, '250g', 'vegetables', true, 'Same day'),
    ]
  },
  parsley_fresh: {
    query: 'parsley', canonicalName: 'Fresh Parsley', category: 'Vegetables', icon: '🌿', prices: [
      p('shengsiong', 'Fresh Parsley 100g', 2.14, 2.71, 30, '100g', 'vegetables', true, '4 hrs'),
    ]
  },
  basmati_rice_premium_5kg: {
    query: 'basmati rice 5kg', canonicalName: 'Premium Basmati Rice (5kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('giant', 'India Gate Tibar', 10.32, 11.8, 12, '5 kg', 'rice', true, 'Same day'),
    ]
  },
  toor_dal_premium_2kg: {
    query: 'toor dal 2kg', canonicalName: 'Premium Toor Dal (2kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('grabmart', 'Tata Sampann Toor', 7.41, 8.71, 14, '2 kg', 'pulses', true, '15 min'),
    ]
  },
  moong_dal_premium_2kg: {
    query: 'moong dal 2kg', canonicalName: 'Premium Moong Dal (2kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('pandamart', 'Tata Sampann Moong', 6.68, 7.8, 14, '2 kg', 'pulses', true, '15 min'),
    ]
  },
  milky_mist_paneer: {
    query: 'milky mist paneer', canonicalName: 'Milky Mist Paneer', category: 'Dairy', icon: '🥛', prices: [
      p('amazon_sg', 'Milky Mist Fresh', 3.23, 3.8, 13, '200g', 'paneer', true, '2 hrs'),
    ]
  },
  milky_mist_curd_1kg: {
    query: 'milky mist curd', canonicalName: 'Milky Mist Curd (1kg)', category: 'Dairy', icon: '🥛', prices: [
      p('fairprice', 'Milky Mist Farm Fresh', 3.05, 3.53, 11, '1 kg', 'curd', true, '2 hrs'),
    ]
  },
  itc_seekh_kebab: {
    query: 'seekh kebab', canonicalName: 'ITC Seekh Kebab', category: 'Frozen Foods', icon: '🍖', prices: [
      p('redmart', 'ITC Chicken Seekh', 5.05, 6.16, 19, '320g', 'frozen', true, '1 day'),
    ]
  },
  itc_fish_fingers: {
    query: 'fish fingers', canonicalName: 'ITC Fish Fingers', category: 'Frozen Foods', icon: '🐟', prices: [
      p('coldstorage', 'ITC Fish Fingers 250g', 5.59, 6.8, 18, '250g', 'frozen', true, 'Same day'),
    ]
  },
  itc_chicken_popcorn: {
    query: 'chicken popcorn', canonicalName: 'ITC Chicken Popcorn', category: 'Frozen Foods', icon: '🍗', prices: [
      p('shengsiong', 'ITC Popcorn 250g', 4.86, 5.8, 16, '250g', 'frozen', true, '4 hrs'),
    ]
  },
  zucchini_yellow: {
    query: 'yellow zucchini', canonicalName: 'Yellow Zucchini', category: 'Vegetables', icon: '🥒', prices: [
      p('giant', 'Premium Yellow Zucchini', 3.23, 4.07, 24, '1 pc', 'vegetables', true, 'Same day'),
    ]
  },
  asparagus_premium: {
    query: 'asparagus', canonicalName: 'Premium Asparagus', category: 'Vegetables', icon: '🎋', prices: [
      p('grabmart', 'Fresh Asparagus 250g', 6.68, 8.16, 18, '250g', 'vegetables', true, '15 min'),
    ]
  },
  brussels_sprouts_fresh: {
    query: 'brussels sprouts', canonicalName: 'Brussels Sprouts', category: 'Vegetables', icon: '🥦', prices: [
      p('pandamart', 'Fresh Sprouts 250g', 4.14, 5.16, 21, '250g', 'vegetables', true, '15 min'),
    ]
  },
  avocado_imported: {
    query: 'avocado', canonicalName: 'Imported Avocado (Hass)', category: 'Fruits', icon: '🥑', prices: [
      p('amazon_sg', 'Hass Avocado 1 pc', 4.86, 6.35, 26, '1 pc', 'fruits', true, '2 hrs'),
    ]
  },
  dragon_fruit_red: {
    query: 'red dragon fruit', canonicalName: 'Red Dragon Fruit', category: 'Fruits', icon: '🥭', prices: [
      p('fairprice', 'Premium Red Dragon', 3.77, 4.71, 21, '1 pc', 'fruits', true, '2 hrs'),
    ]
  },
  gatorade_blue: {
    query: 'gatorade blue', canonicalName: 'Gatorade Blue Bolt', category: 'Beverages', icon: '⚡', prices: [
      p('redmart', 'Gatorade 500ml', 2.68, 2.98, 0, '500ml', 'beverages', true, '1 day'),
    ]
  },
  gatorade_orange: {
    query: 'gatorade orange', canonicalName: 'Gatorade Orange', category: 'Beverages', icon: '⚡', prices: [
      p('coldstorage', 'Gatorade Orange 500ml', 2.68, 2.98, 0, '500ml', 'beverages', true, 'Same day'),
    ]
  },
  nutella_spread_750g: {
    query: 'nutella 750g', canonicalName: 'Nutella (Large Jar)', category: 'Packaged Foods', icon: '🍫', prices: [
      p('shengsiong', 'Nutella 750g Jar', 15.05, 16.8, 9, '750g', 'spread', true, '4 hrs'),
    ]
  },
  alpino_peanut_butter: {
    query: 'alpino peanut butter', canonicalName: 'Alpino Chocolate Peanut Butter', category: 'Packaged Foods', icon: '🥜', prices: [
      p('giant', 'Alpino Dark Chocolate', 5.95, 7.07, 15, '400g', 'peanut butter', true, 'Same day'),
    ]
  },
  brown_poha_pack: {
    query: 'brown poha', canonicalName: 'Brown Poha (Healthy)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('grabmart', 'Organic Brown Poha', 3.05, 3.8, 22, '500g', 'grains', true, '15 min'),
    ]
  },
  basmati_rice_10kg_family: {
    query: 'basmati rice 10kg', canonicalName: 'Family Pack Basmati Rice (10kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('pandamart', 'India Gate Classic', 18.68, 22.71, 17, '10 kg', 'rice', true, '15 min'),
    ]
  },
  mccain_smiles_family_pack: {
    query: 'mccain smiles 1.5kg', canonicalName: 'McCain Smiles (Family Pack)', category: 'Frozen Foods', icon: '🧊', prices: [
      p('amazon_sg', 'McCain Smiles 1.25kg', 7.41, 8.8, 15, '1.25kg', 'frozen', true, '2 hrs'),
    ]
  },
  real_aloe_vera_1l: {
    query: 'aloe vera juice 1l', canonicalName: 'Real Aloe Vera Juice (1L)', category: 'Beverages', icon: '🧃', prices: [
      p('fairprice', 'Real Aloe Vera 1L', 3.77, 4.44, 14, '1 L', 'beverages', true, '2 hrs'),
    ]
  },
  thums_up_big_bottle: {
    query: 'thums up 2l', canonicalName: 'Thums Up (2.25 L)', category: 'Beverages', icon: '🥤', prices: [
      p('redmart', 'Thums Up 2.25L', 3.23, 3.53, 0, '2.25 L', 'soft drink', true, '1 day'),
    ]
  },
  coke_big_bottle: {
    query: 'coca cola 2l', canonicalName: 'Coca Cola (2.25 L)', category: 'Beverages', icon: '🥤', prices: [
      p('coldstorage', 'Coke 2.25L', 3.23, 3.53, 0, '2.25 L', 'soft drink', true, 'Same day'),
    ]
  },
  iceberg_lettuce_fresh: {
    query: 'iceberg lettuce', canonicalName: 'Iceberg Lettuce', category: 'Vegetables', icon: '🥬', prices: [
      p('shengsiong', 'Fresh Iceberg', 2.5, 3.16, 26, '1 pc', 'vegetables', true, '4 hrs'),
    ]
  },
  romaine_lettuce_fresh: {
    query: 'romaine lettuce', canonicalName: 'Romaine Lettuce', category: 'Vegetables', icon: '🥬', prices: [
      p('giant', 'Fresh Romaine', 3.05, 3.8, 22, '1 pc', 'vegetables', true, 'Same day'),
    ]
  },
  purple_cabbage_fresh: {
    query: 'purple cabbage', canonicalName: 'Purple Cabbage', category: 'Vegetables', icon: '🥬', prices: [
      p('grabmart', 'Fresh Red Cabbage', 2.32, 2.98, 30, '500g', 'vegetables', true, '15 min'),
    ]
  },
  tandoori_mayo_veeba: {
    query: 'tandoori mayo', canonicalName: 'Tandoori Mayonnaise', category: 'Packaged Foods', icon: '🥫', prices: [
      p('pandamart', 'Veeba Tandoori Mayo', 4.32, 5.16, 16, '250g', 'sauce', true, '15 min'),
    ]
  },
  peanut_butter_creamy_1kg: {
    query: 'peanut butter 1kg', canonicalName: 'Peanut Butter Creamy (1kg)', category: 'Packaged Foods', icon: '🥜', prices: [
      p('amazon_sg', 'Pintola Creamy 1kg', 8.5, 9.98, 14, '1 kg', 'peanut butter', true, '2 hrs'),
    ]
  },
  nutella_spread_1kg: {
    query: 'nutella 1kg', canonicalName: 'Nutella (Mega Jar)', category: 'Packaged Foods', icon: '🍫', prices: [
      p('fairprice', 'Nutella 1kg Mega Jar', 17.77, 19.89, 10, '1 kg', 'spread', true, '2 hrs'),
    ]
  },
  orange_capsicum_fresh: {
    query: 'orange capsicum', canonicalName: 'Orange Bell Pepper', category: 'Vegetables', icon: '🫑', prices: [
      p('redmart', 'Orange Bell Pepper', 3.23, 4.07, 24, '1 pc', 'vegetables', true, '1 day'),
    ]
  },
  moong_dal_yellow_500g: {
    query: 'moong dal', canonicalName: 'Moong Dal (Yellow)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('coldstorage', 'Fortune Moong Dal', 3.23, 3.89, 17, '500g', 'pulses', true, 'Same day'),
    ]
  },
  urad_dal_white_500g: {
    query: 'urad dal', canonicalName: 'Urad Dal (White Whole)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('shengsiong', 'Fortune Urad Dal', 3.41, 4.07, 16, '500g', 'pulses', true, '4 hrs'),
    ]
  },
  chana_dal_500g: {
    query: 'chana dal', canonicalName: 'Chana Dal', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('giant', 'Fortune Chana Dal', 2.68, 3.25, 18, '500g', 'pulses', true, 'Same day'),
    ]
  },
  saffola_gold_5l: {
    query: 'saffola gold 5l', canonicalName: 'Saffola Gold Oil (5L Can)', category: 'Packaged Foods', icon: '🛢️', prices: [
      p('grabmart', 'Saffola Gold 5L', 16.86, 19.07, 11, '5 L', 'oil', true, '15 min'),
    ]
  },
  fortune_soyabean_5l: {
    query: 'soyabean oil 5l', canonicalName: 'Fortune Soyabean Oil (5L Can)', category: 'Packaged Foods', icon: '🛢️', prices: [
      p('pandamart', 'Fortune Soyabean 5L', 12.86, 15.44, 16, '5 L', 'oil', true, '15 min'),
    ]
  },
  parle_g_1kg_mega: {
    query: 'parle g 1kg', canonicalName: 'Parle-G (1kg Mega Pack)', category: 'Snacks', icon: '🍪', prices: [
      p('amazon_sg', 'Parle-G 1kg Pack', 3.5, 3.8, 0, '1 kg', 'biscuits', true, '2 hrs'),
    ]
  },
  marie_gold_family_pack: {
    query: 'marie gold family', canonicalName: 'Marie Gold (Family Pack)', category: 'Snacks', icon: '🍪', prices: [
      p('fairprice', 'Britannia Marie 1kg', 4.14, 4.71, 9, '1 kg', 'biscuits', true, '2 hrs'),
    ]
  },
  hide_seek_family_pack: {
    query: 'hide seek family', canonicalName: 'Hide & Seek (Family Pack)', category: 'Snacks', icon: '🍪', prices: [
      p('redmart', 'Hide & Seek 400g', 3.77, 4.44, 14, '400g', 'biscuits', true, '1 day'),
    ]
  },
  bru_instant_coffee: {
    query: 'bru coffee', canonicalName: 'Bru Instant Coffee', category: 'Beverages', icon: '☕', prices: [
      p('coldstorage', 'Bru Instant 200g', 8.5, 9.98, 14, '200g', 'coffee', true, 'Same day'),
    ]
  },
  nescafe_gold_premium: {
    query: 'nescafe gold', canonicalName: 'Nescafe Gold (Premium)', category: 'Beverages', icon: '☕', prices: [
      p('shengsiong', 'Nescafe Gold 100g', 11.41, 13.62, 16, '100g', 'coffee', true, '4 hrs'),
    ]
  },
  taj_mahal_tea_premium: {
    query: 'taj mahal tea', canonicalName: 'Brooke Bond Taj Mahal', category: 'Beverages', icon: '🍵', prices: [
      p('giant', 'Taj Mahal Tea 500g', 9.23, 10.53, 11, '500g', 'tea', true, 'Same day'),
    ]
  },
  amul_masti_dahi_1kg: {
    query: 'amul dahi 1kg', canonicalName: 'Amul Masti Dahi (1kg)', category: 'Dairy', icon: '🥛', prices: [
      p('grabmart', 'Amul Masti Dahi 1kg', 3.41, 3.89, 8, '1 kg', 'curd', true, '15 min'),
    ]
  },
  kissan_jam_1kg: {
    query: 'kissan jam 1kg', canonicalName: 'Kissan Mixed Fruit Jam (1kg)', category: 'Packaged Foods', icon: '🍯', prices: [
      p('pandamart', 'Kissan Jam 1kg', 6.68, 7.71, 12, '1 kg', 'jam', true, '15 min'),
    ]
  },
  shakarkandi_fresh_root: {
    query: 'shakarkandi', canonicalName: 'Sweet Potato (Shakarkandi)', category: 'Vegetables', icon: '🍠', prices: [
      p('amazon_sg', 'Fresh Shakarkandi', 2.32, 2.89, 25, '500g', 'vegetables', true, '2 hrs'),
    ]
  },
  radish_fresh_mooli: {
    query: 'mooli', canonicalName: 'Radish (Mooli)', category: 'Vegetables', icon: '🥒', prices: [
      p('fairprice', 'Fresh Mooli 1kg', 2.14, 2.62, 22, '1 kg', 'vegetables', true, '2 hrs'),
    ]
  },
  mousambi_fresh: {
    query: 'mousambi', canonicalName: 'Sweet Lime (Mousambi)', category: 'Fruits', icon: '🍊', prices: [
      p('redmart', 'Fresh Mousambi 1kg', 3.05, 3.8, 22, '1 kg', 'fruits', true, '1 day'),
    ]
  },
  aashirvaad_multigrain_10kg: {
    query: 'multigrain atta 10kg', canonicalName: 'Aashirvaad Multigrain Atta (10kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('coldstorage', 'Aashirvaad Multi 10kg', 13.23, 14.89, 10, '10 kg', 'flour', true, 'Same day'),
    ]
  },
  fortune_chakki_atta_10kg: {
    query: 'chakki atta 10kg', canonicalName: 'Fortune Chakki Atta (10kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('shengsiong', 'Fortune Chakki 10kg', 9.59, 11.25, 14, '10 kg', 'flour', true, '4 hrs'),
    ]
  },
  coke_zero_can: {
    query: 'coke zero can', canonicalName: 'Coca Cola Zero (Can)', category: 'Beverages', icon: '🥤', prices: [
      p('giant', 'Coke Zero 300ml', 2.23, 2.53, 0, '300ml', 'soft drink', true, 'Same day'),
    ]
  },
  diet_coke_can: {
    query: 'diet coke can', canonicalName: 'Diet Coke (Can)', category: 'Beverages', icon: '🥤', prices: [
      p('grabmart', 'Diet Coke 300ml', 2.23, 2.53, 0, '300ml', 'soft drink', true, '15 min'),
    ]
  },
  pepsi_black_can: {
    query: 'pepsi black can', canonicalName: 'Pepsi Black (Can)', category: 'Beverages', icon: '🥤', prices: [
      p('pandamart', 'Pepsi Black 300ml', 2.23, 2.53, 0, '300ml', 'soft drink', true, '15 min'),
    ]
  },
  moong_dal_yellow_1kg: {
    query: 'moong dal 1kg', canonicalName: 'Moong Dal Yellow (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('amazon_sg', 'Fortune Moong 1kg', 4.86, 5.62, 12, '1 kg', 'pulses', true, '2 hrs'),
    ]
  },
  masoor_dal_red_1kg: {
    query: 'masoor dal 1kg', canonicalName: 'Masoor Dal Red (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('fairprice', 'Fortune Masoor 1kg', 4.14, 4.98, 17, '1 kg', 'pulses', true, '2 hrs'),
    ]
  },
  chana_dal_1kg: {
    query: 'chana dal 1kg', canonicalName: 'Chana Dal (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('redmart', 'Fortune Chana 1kg', 3.77, 4.44, 14, '1 kg', 'pulses', true, '1 day'),
    ]
  },
  uncle_chipps_classic: {
    query: 'uncle chipps', canonicalName: 'Uncle Chipps (Classic Salted)', category: 'Snacks', icon: '🍟', prices: [
      p('coldstorage', 'Uncle Chipps 70g', 2.14, 2.44, 0, '70g', 'chips', true, 'Same day'),
    ]
  },
  paper_boat_anardana: {
    query: 'anardana paper boat', canonicalName: 'Paper Boat Anardana', category: 'Beverages', icon: '🥤', prices: [
      p('shengsiong', 'Paper Boat Anardana', 2.14, 2.53, 12, '250ml', 'beverages', true, '4 hrs'),
    ]
  },
  mother_dairy_lassi: {
    query: 'mother dairy lassi', canonicalName: 'Mother Dairy Lassi', category: 'Beverages', icon: '🥛', prices: [
      p('giant', 'Mother Dairy Lassi', 1.95, 2.35, 16, '200ml', 'beverages', true, 'Same day'),
    ]
  },
  bingo_mad_angles_masala: {
    query: 'mad angles masala', canonicalName: 'Bingo! Mad Angles (Masala)', category: 'Snacks', icon: '🍟', prices: [
      p('grabmart', 'Bingo Mad Angles', 1.86, 2.16, 0, '66g', 'chips', true, '15 min'),
    ]
  },
  nescafe_classic_200g: {
    query: 'nescafe classic 200g', canonicalName: 'Nescafe Classic (200g Jar)', category: 'Beverages', icon: '☕', prices: [
      p('pandamart', 'Nescafe Classic Jar', 11.41, 13.07, 12, '200g', 'coffee', true, '15 min'),
    ]
  },
  amul_fresh_cream_1l: {
    query: 'amul fresh cream 1l', canonicalName: 'Amul Fresh Cream (1L)', category: 'Dairy', icon: '🥛', prices: [
      p('amazon_sg', 'Amul Fresh Cream 1L', 5.59, 6.35, 10, '1 L', 'cream', true, '2 hrs'),
    ]
  },
  mother_dairy_full_cream_1l: {
    query: 'mother dairy milk 1l', canonicalName: 'Mother Dairy Full Cream (1L)', category: 'Dairy', icon: '🥛', prices: [
      p('fairprice', 'Mother Dairy Full Cream', 2.74, 3.04, 0, '1 L', 'milk', true, '2 hrs'),
    ]
  },
  amul_mithai_mate: {
    query: 'amul mithai mate', canonicalName: 'Amul Mithai Mate', category: 'Dairy', icon: '🥛', prices: [
      p('redmart', 'Amul Mithai Mate 200g', 2.55, 2.93, 6, '200g', 'condensed milk', true, '1 day'),
    ]
  },
  chings_hakka_noodles_masala: {
    query: 'hakka noodles masala', canonicalName: 'Chings Hakka Noodles Masala', category: 'Packaged Foods', icon: '🧂', prices: [
      p('coldstorage', 'Chings Hakka Masala', 1.68, 1.98, 0, '20g', 'spices', true, 'Same day'),
    ]
  },
  chings_schezwan_fried_rice_masala: {
    query: 'schezwan rice masala', canonicalName: 'Chings Schezwan Rice Masala', category: 'Packaged Foods', icon: '🧂', prices: [
      p('shengsiong', 'Chings Schezwan Masala', 1.68, 1.98, 0, '20g', 'spices', true, '4 hrs'),
    ]
  },
  moms_magic_biscuits: {
    query: 'moms magic', canonicalName: 'Sunfeast Mom’s Magic', category: 'Snacks', icon: '🍪', prices: [
      p('giant', 'Moms Magic Cashew', 3.77, 4.44, 14, '600g', 'biscuits', true, 'Same day'),
    ]
  },
  farmlite_biscuits: {
    query: 'farmlite', canonicalName: 'Sunfeast Farmlite', category: 'Snacks', icon: '🍪', prices: [
      p('grabmart', 'Farmlite Digestive', 4.14, 4.8, 12, '800g', 'biscuits', true, '15 min'),
    ]
  },
  grapes_red_globe: {
    query: 'red grapes', canonicalName: 'Red Globe Grapes', category: 'Fruits', icon: '🍇', prices: [
      p('pandamart', 'Premium Red Globe', 6.68, 8.16, 18, '500g', 'fruits', true, '15 min'),
    ]
  },
  kiwi_3_pack: {
    query: 'kiwi', canonicalName: 'Kiwi (3 Pack)', category: 'Fruits', icon: '🥝', prices: [
      p('amazon_sg', 'Fresh Kiwi 3 pcs', 3.23, 4.07, 24, '3 pcs', 'fruits', true, '2 hrs'),
    ]
  },
  nutella_giant_jar_1_5kg: {
    query: 'nutella 1.5kg', canonicalName: 'Nutella (Giant Jar 1.5kg)', category: 'Packaged Foods', icon: '🍫', prices: [
      p('fairprice', 'Nutella 1.5kg Jar', 25.05, 28.16, 10, '1.5 kg', 'spread', true, '2 hrs'),
    ]
  },
  nescafe_gold_200g: {
    query: 'nescafe gold 200g', canonicalName: 'Nescafe Gold (200g Jar)', category: 'Beverages', icon: '☕', prices: [
      p('redmart', 'Nescafe Gold Jar', 18.68, 21.8, 14, '200g', 'coffee', true, '1 day'),
    ]
  },
  mccain_french_fries_mega: {
    query: 'mccain fries 2.5kg', canonicalName: 'McCain Fries (Mega 2.5kg)', category: 'Frozen Foods', icon: '🧊', prices: [
      p('coldstorage', 'McCain Fries 2.5kg', 11.41, 13.16, 12, '2.5 kg', 'frozen', true, 'Same day'),
    ]
  },
  appy_fizz_6_pack: {
    query: 'appy fizz pack', canonicalName: 'Appy Fizz (6 Pack)', category: 'Beverages', icon: '🥤', prices: [
      p('shengsiong', 'Appy Fizz 6x250ml', 5.86, 6.16, 0, '6 pcs', 'beverages', true, '4 hrs'),
    ]
  },
  thums_up_6_pack: {
    query: 'thums up pack', canonicalName: 'Thums Up (6 Pack)', category: 'Beverages', icon: '🥤', prices: [
      p('giant', 'Thums Up 6x300ml', 5.86, 6.16, 0, '6 pcs', 'beverages', true, 'Same day'),
    ]
  },
  veg_mayo_mega_tub: {
    query: 'mayo 2kg', canonicalName: 'Veg Mayo (2kg Mega Tub)', category: 'Packaged Foods', icon: '🥫', prices: [
      p('grabmart', 'Veeba Veg Mayo 2kg', 8.5, 9.98, 14, '2 kg', 'sauce', true, '15 min'),
    ]
  },
  wagh_bakri_dust_tea_1kg: {
    query: 'wagh bakri dust', canonicalName: 'Wagh Bakri Dust Tea (1kg)', category: 'Beverages', icon: '🍵', prices: [
      p('pandamart', 'Wagh Bakri Dust 1kg', 10.32, 11.62, 10, '1 kg', 'tea', true, '15 min'),
    ]
  },
  aashirvaad_sona_masuri_5kg: {
    query: 'sona masuri 5kg', canonicalName: 'Aashirvaad Sona Masuri (5kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('amazon_sg', 'Aashirvaad Sona 5kg', 9.23, 10.53, 11, '5 kg', 'rice', true, '2 hrs'),
    ]
  },
  basmati_magnum_rice_5kg: {
    query: 'basmati magnum', canonicalName: 'Fortune Basmati Magnum (5kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('fairprice', 'Fortune Magnum 5kg', 12.14, 13.62, 10, '5 kg', 'rice', true, '2 hrs'),
    ]
  },
  real_sugarcane_juice_1l: {
    query: 'sugarcane juice', canonicalName: 'Real Sugarcane Juice (1L)', category: 'Beverages', icon: '🧃', prices: [
      p('redmart', 'Real Sugarcane 1L', 3.77, 4.44, 14, '1 L', 'beverages', true, '1 day'),
    ]
  },
  kissan_ketchup_mega_spout: {
    query: 'kissan ketchup 2kg', canonicalName: 'Kissan Tomato Ketchup (2kg Spout)', category: 'Packaged Foods', icon: '🥫', prices: [
      p('coldstorage', 'Kissan Ketchup 2kg', 6.68, 7.98, 16, '2 kg', 'sauce', true, 'Same day'),
    ]
  },
  mother_dairy_paneer_1kg: {
    query: 'paneer 1kg', canonicalName: 'Mother Dairy Paneer (1kg)', category: 'Dairy', icon: '🥛', prices: [
      p('shengsiong', 'Mother Dairy Fresh 1kg', 9.59, 10.53, 7, '1 kg', 'paneer', true, '4 hrs'),
    ]
  },
  amul_cheese_block_1kg: {
    query: 'cheese block 1kg', canonicalName: 'Amul Cheese Block (1kg)', category: 'Dairy', icon: '🧀', prices: [
      p('giant', 'Amul Cheese Block 1kg', 10.32, 11.25, 7, '1 kg', 'cheese', true, 'Same day'),
    ]
  },
  coke_1_25l: {
    query: 'coke 1.25l', canonicalName: 'Coca Cola (1.25 L)', category: 'Beverages', icon: '🥤', prices: [
      p('grabmart', 'Coke 1.25L Bottle', 2.68, 2.98, 0, '1.25 L', 'soft drink', true, '15 min'),
    ]
  },
  pepsi_1_25l: {
    query: 'pepsi 1.25l', canonicalName: 'Pepsi (1.25 L)', category: 'Beverages', icon: '🥤', prices: [
      p('pandamart', 'Pepsi 1.25L Bottle', 2.68, 2.98, 0, '1.25 L', 'soft drink', true, '15 min'),
    ]
  },
  sprite_1_25l: {
    query: 'sprite 1.25l', canonicalName: 'Sprite (1.25 L)', category: 'Beverages', icon: '🥤', prices: [
      p('amazon_sg', 'Sprite 1.25L Bottle', 2.68, 2.98, 0, '1.25 L', 'soft drink', true, '2 hrs'),
    ]
  },
  lays_magic_masala_mega: {
    query: 'lays mega', canonicalName: 'Lays Magic Masala (150g)', category: 'Snacks', icon: '🍟', prices: [
      p('fairprice', 'Lays Mega Pack', 2.41, 2.71, 0, '150g', 'chips', true, '2 hrs'),
    ]
  },
  kurkure_masala_munch_mega: {
    query: 'kurkure mega', canonicalName: 'Kurkure Masala Munch (150g)', category: 'Snacks', icon: '🍟', prices: [
      p('redmart', 'Kurkure Mega Pack', 2.41, 2.71, 0, '150g', 'snacks', true, '1 day'),
    ]
  },
  nescafe_classic_500g_mega: {
    query: 'nescafe 500g', canonicalName: 'Nescafe Classic (500g Jar)', category: 'Beverages', icon: '☕', prices: [
      p('coldstorage', 'Nescafe Classic Mega', 22.32, 24.53, 8, '500g', 'coffee', true, 'Same day'),
    ]
  },
  tandoori_mayo_1kg: {
    query: 'tandoori mayo 1kg', canonicalName: 'Tandoori Mayo (1kg Tub)', category: 'Packaged Foods', icon: '🥫', prices: [
      p('shengsiong', 'Veeba Tandoori 1kg', 6.68, 7.8, 14, '1 kg', 'sauce', true, '4 hrs'),
    ]
  },
  garlic_mayo_1kg: {
    query: 'garlic mayo 1kg', canonicalName: 'Garlic Mayo (1kg Tub)', category: 'Packaged Foods', icon: '🥫', prices: [
      p('giant', 'Veeba Garlic 1kg', 6.68, 7.8, 14, '1 kg', 'sauce', true, 'Same day'),
    ]
  },
  tata_salt_lite: {
    query: 'tata salt lite', canonicalName: 'Tata Salt Lite (Pro-Health)', category: 'Packaged Foods', icon: '🧂', prices: [
      p('grabmart', 'Tata Salt Lite 1kg', 2.14, 2.62, 22, '1 kg', 'salt', true, '15 min'),
    ]
  },
  tata_salt_superlite: {
    query: 'tata salt superlite', canonicalName: 'Tata Salt SuperLite', category: 'Packaged Foods', icon: '🧂', prices: [
      p('pandamart', 'Tata Salt SuperLite', 2.5, 2.98, 15, '1 kg', 'salt', true, '15 min'),
    ]
  },
  aashirvaad_salt_1kg: {
    query: 'aashirvaad salt', canonicalName: 'Aashirvaad Salt', category: 'Packaged Foods', icon: '🧂', prices: [
      p('amazon_sg', 'Aashirvaad Iodized', 1.95, 2.35, 16, '1 kg', 'salt', true, '2 hrs'),
    ]
  },
  sona_masuri_10kg_mega: {
    query: 'sona masuri 10kg', canonicalName: 'Aashirvaad Sona Masuri (10kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('fairprice', 'Aashirvaad Sona 10kg', 16.86, 19.07, 11, '10 kg', 'rice', true, '2 hrs'),
    ]
  },
  magnum_basmati_10kg_mega: {
    query: 'basmati 10kg', canonicalName: 'Fortune Magnum Basmati (10kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('redmart', 'Fortune Magnum 10kg', 22.32, 24.53, 8, '10 kg', 'rice', true, '1 day'),
    ]
  },
  limca_2l_bottle: {
    query: 'limca 2l', canonicalName: 'Limca (2.25 L)', category: 'Beverages', icon: '🥤', prices: [
      p('coldstorage', 'Limca 2.25L Bottle', 3.23, 3.53, 0, '2.25 L', 'soft drink', true, 'Same day'),
    ]
  },
  sprite_2l_bottle: {
    query: 'sprite 2l', canonicalName: 'Sprite (2.25 L)', category: 'Beverages', icon: '🥤', prices: [
      p('shengsiong', 'Sprite 2.25L Bottle', 3.23, 3.53, 0, '2.25 L', 'soft drink', true, '4 hrs'),
    ]
  },
  fanta_2l_bottle: {
    query: 'fanta 2l', canonicalName: 'Fanta (2.25 L)', category: 'Beverages', icon: '🥤', prices: [
      p('giant', 'Fanta 2.25L Bottle', 3.23, 3.53, 0, '2.25 L', 'soft drink', true, 'Same day'),
    ]
  },
  nagpur_orange_5kg_bag: {
    query: 'orange 5kg', canonicalName: 'Nagpur Oranges (5kg Bag)', category: 'Fruits', icon: '🍊', prices: [
      p('grabmart', 'Nagpur Oranges Bag', 9.59, 11.25, 14, '5 kg', 'fruits', true, '15 min'),
    ]
  },
  apple_royal_gala_4_pack: {
    query: 'royal gala apples', canonicalName: 'Royal Gala Apples (4 Pack)', category: 'Fruits', icon: '🍎', prices: [
      p('pandamart', 'Fresh Royal Gala', 4.86, 5.8, 16, '4 pcs', 'fruits', true, '15 min'),
    ]
  },
  kiwi_6_pack_mega: {
    query: 'kiwi pack', canonicalName: 'Kiwi (6 Pack Mega)', category: 'Fruits', icon: '🥝', prices: [
      p('amazon_sg', 'Fresh Kiwi 6 pcs', 4.86, 5.89, 17, '6 pcs', 'fruits', true, '2 hrs'),
    ]
  },
  lays_classic_90g_pack: {
    query: 'lays 90g', canonicalName: 'Lays Classic Salted (90g)', category: 'Snacks', icon: '🍟', prices: [
      p('fairprice', 'Lays Classic 90g', 2.14, 2.44, 0, '90g', 'chips', true, '2 hrs'),
    ]
  },
  bingo_mad_angles_90g_pack: {
    query: 'mad angles 90g', canonicalName: 'Bingo! Mad Angles (90g)', category: 'Snacks', icon: '🍟', prices: [
      p('redmart', 'Bingo Mad Angles 90g', 2.14, 2.44, 0, '90g', 'chips', true, '1 day'),
    ]
  },
  zucchini_green_1kg: {
    query: 'green zucchini', canonicalName: 'Green Zucchini (1kg)', category: 'Vegetables', icon: '🥒', prices: [
      p('coldstorage', 'Fresh Green Zucchini', 3.77, 4.71, 21, '1 kg', 'vegetables', true, 'Same day'),
    ]
  },
  broccoli_1kg_mega: {
    query: 'broccoli 1kg', canonicalName: 'Fresh Broccoli (1kg)', category: 'Vegetables', icon: '🥦', prices: [
      p('shengsiong', 'Premium Broccoli 1kg', 4.86, 5.89, 17, '1 kg', 'vegetables', true, '4 hrs'),
    ]
  },
  mushroom_button_400g: {
    query: 'mushrooms 400g', canonicalName: 'Button Mushrooms (400g)', category: 'Vegetables', icon: '🍄', prices: [
      p('giant', 'Fresh Button 400g', 3.23, 3.89, 17, '400g', 'vegetables', true, 'Same day'),
    ]
  },
  baby_corn_500g_pack: {
    query: 'baby corn 500g', canonicalName: 'Baby Corn (500g Pack)', category: 'Vegetables', icon: '🥒', prices: [
      p('grabmart', 'Fresh Baby Corn', 3.05, 3.71, 19, '500g', 'vegetables', true, '15 min'),
    ]
  },
  society_tea_1kg_pack: {
    query: 'society tea', canonicalName: 'Society Tea (1kg)', category: 'Beverages', icon: '🍵', prices: [
      p('pandamart', 'Society Tea 1kg', 10.32, 11.62, 10, '1 kg', 'tea', true, '15 min'),
    ]
  },
  bru_instant_coffee_500g: {
    query: 'bru coffee 500g', canonicalName: 'Bru Instant Coffee (500g)', category: 'Beverages', icon: '☕', prices: [
      p('amazon_sg', 'Bru Instant 500g', 16.86, 19.07, 11, '500g', 'coffee', true, '2 hrs'),
    ]
  },
  lipton_green_tea_100: {
    query: 'lipton green tea', canonicalName: 'Lipton Green Tea (100 bags)', category: 'Beverages', icon: '🍵', prices: [
      p('fairprice', 'Lipton Green 100 bags', 11.41, 13.62, 16, '100 bags', 'tea', true, '2 hrs'),
    ]
  },
  tetley_green_tea_100: {
    query: 'tetley green tea', canonicalName: 'Tetley Green Tea (100 bags)', category: 'Beverages', icon: '🍵', prices: [
      p('redmart', 'Tetley Green 100 bags', 11.05, 13.07, 15, '100 bags', 'tea', true, '1 day'),
    ]
  },
  tata_tea_agni_1kg: {
    query: 'tata tea agni', canonicalName: 'Tata Tea Agni (1kg)', category: 'Beverages', icon: '🍵', prices: [
      p('coldstorage', 'Tata Tea Agni 1kg', 6.68, 7.62, 11, '1 kg', 'tea', true, 'Same day'),
    ]
  },
  everest_garam_masala_100g: {
    query: 'garam masala', canonicalName: 'Everest Garam Masala', category: 'Packaged Foods', icon: '🧂', prices: [
      p('shengsiong', 'Everest Garam 100g', 2.86, 3.35, 12, '100g', 'spices', true, '4 hrs'),
    ]
  },
  everest_chicken_masala: {
    query: 'chicken masala', canonicalName: 'Everest Chicken Masala', category: 'Packaged Foods', icon: '🧂', prices: [
      p('giant', 'Everest Chicken 100g', 2.86, 3.35, 12, '100g', 'spices', true, 'Same day'),
    ]
  },
  catch_sabzi_masala: {
    query: 'sabzi masala', canonicalName: 'Catch Sabzi Masala', category: 'Packaged Foods', icon: '🧂', prices: [
      p('grabmart', 'Catch Sabzi 100g', 2.5, 2.98, 15, '100g', 'spices', true, '15 min'),
    ]
  },
  mother_dairy_ghee_1kg: {
    query: 'mother dairy ghee', canonicalName: 'Mother Dairy Ghee (1kg)', category: 'Dairy', icon: '🧈', prices: [
      p('pandamart', 'Mother Dairy Ghee 1L', 13.23, 14.89, 10, '1 L', 'ghee', true, '15 min'),
    ]
  },
  amul_butter_500g_mega: {
    query: 'amul butter 500g', canonicalName: 'Amul Butter (500g Mega)', category: 'Dairy', icon: '🧈', prices: [
      p('amazon_sg', 'Amul Butter 500g', 6.5, 6.8, 0, '500g', 'butter', true, '2 hrs'),
    ]
  },
  kelloggs_cornflakes_1_2kg: {
    query: 'cornflakes 1.2kg', canonicalName: 'Kellogg’s Cornflakes (1.2kg)', category: 'Packaged Foods', icon: '🥣', prices: [
      p('fairprice', 'Kelloggs 1.2kg Pack', 8.5, 9.98, 14, '1.2 kg', 'cereal', true, '2 hrs'),
    ]
  },
  quaker_oats_1kg_mega: {
    query: 'quaker oats 1kg', canonicalName: 'Quaker Oats (1kg Mega)', category: 'Packaged Foods', icon: '🥣', prices: [
      p('redmart', 'Quaker Oats 1kg', 4.86, 5.8, 16, '1 kg', 'oats', true, '1 day'),
    ]
  },
  tata_tea_gold_premium: {
    query: 'tata tea gold 1kg', canonicalName: 'Tata Tea Gold (1kg)', category: 'Beverages', icon: '🍵', prices: [
      p('coldstorage', 'Tata Tea Gold 1kg', 12.86, 14.89, 13, '1 kg', 'tea', true, 'Same day'),
    ]
  },
  red_label_natural_care_1kg: {
    query: 'natural care tea', canonicalName: 'Red Label Natural Care (1kg)', category: 'Beverages', icon: '🍵', prices: [
      p('shengsiong', 'Red Label Natural 1kg', 12.14, 13.62, 10, '1 kg', 'tea', true, '4 hrs'),
    ]
  },
  dabur_honey_1kg_mega: {
    query: 'dabur honey 1kg', canonicalName: 'Dabur Honey (1kg Mega)', category: 'Packaged Foods', icon: '🍯', prices: [
      p('giant', 'Dabur Honey 1kg', 8.68, 9.98, 12, '1 kg', 'honey', true, 'Same day'),
    ]
  },
  saffola_honey_1kg_mega: {
    query: 'saffola honey 1kg', canonicalName: 'Saffola Honey (1kg Mega)', category: 'Packaged Foods', icon: '🍯', prices: [
      p('grabmart', 'Saffola Honey 1kg', 8.5, 9.8, 12, '1 kg', 'honey', true, '15 min'),
    ]
  },
  hersheys_syrup_623g: {
    query: 'hersheys syrup', canonicalName: 'Hershey’s Chocolate Syrup', category: 'Packaged Foods', icon: '🍫', prices: [
      p('pandamart', 'Hersheys Syrup 623g', 5.05, 5.8, 11, '623g', 'syrup', true, '15 min'),
    ]
  },
  mapro_strawberry_crush: {
    query: 'strawberry crush', canonicalName: 'Mapro Strawberry Crush', category: 'Packaged Foods', icon: '🍓', prices: [
      p('amazon_sg', 'Mapro Crush 750ml', 4.86, 5.62, 12, '750ml', 'syrup', true, '2 hrs'),
    ]
  },
  amul_dark_chocolate_pack: {
    query: 'dark chocolate', canonicalName: 'Amul Dark Chocolate', category: 'Snacks', icon: '🍫', prices: [
      p('fairprice', 'Amul Dark 150g', 3.59, 4.07, 8, '150g', 'chocolate', true, '2 hrs'),
    ]
  },
  cadbury_celebrations_gift: {
    query: 'celebrations', canonicalName: 'Cadbury Celebrations (Large)', category: 'Sweets & Desserts', icon: '🎁', prices: [
      p('redmart', 'Celebrations Large', 4.86, 5.44, 7, '180g', 'chocolate', true, '1 day'),
    ]
  },
  ferrero_rocher_16_pack: {
    query: 'ferrero rocher 16', canonicalName: 'Ferrero Rocher (16 pcs)', category: 'Sweets & Desserts', icon: '🎁', prices: [
      p('coldstorage', 'Ferrero 16 Pack', 11.05, 12.62, 11, '16 pcs', 'chocolate', true, 'Same day'),
    ]
  },
  kinder_joy_pack_of_3: {
    query: 'kinder joy', canonicalName: 'Kinder Joy (Pack of 3)', category: 'Snacks', icon: '🥚', prices: [
      p('shengsiong', 'Kinder Joy 3 pcs', 3.95, 4.53, 10, '3 pcs', 'chocolate', true, '4 hrs'),
    ]
  },
  mms_chocolate_bag: {
    query: 'mms chocolate', canonicalName: 'M&M’s Chocolate (Large)', category: 'Snacks', icon: '🍬', prices: [
      p('giant', 'M&Ms Large 100g', 4.14, 4.71, 9, '100g', 'chocolate', true, 'Same day'),
    ]
  },
  snickers_home_pack: {
    query: 'snickers pack', canonicalName: 'Snickers Home Pack', category: 'Snacks', icon: '🍫', prices: [
      p('grabmart', 'Snickers 5 pcs', 4.86, 5.44, 7, '250g', 'chocolate', true, '15 min'),
    ]
  },
  mars_chocolate_bar: {
    query: 'mars chocolate', canonicalName: 'Mars Chocolate Bar', category: 'Snacks', icon: '🍫', prices: [
      p('pandamart', 'Mars Bar 50g', 2.5, 2.89, 8, '50g', 'chocolate', true, '15 min'),
    ]
  },
  bounty_chocolate_bar: {
    query: 'bounty chocolate', canonicalName: 'Bounty Coconut Bar', category: 'Snacks', icon: '🥥', prices: [
      p('amazon_sg', 'Bounty Bar 57g', 2.5, 2.89, 8, '57g', 'chocolate', true, '2 hrs'),
    ]
  },
  twix_chocolate_bar: {
    query: 'twix chocolate', canonicalName: 'Twix Caramel Bar', category: 'Snacks', icon: '🍫', prices: [
      p('fairprice', 'Twix Bar 50g', 2.5, 2.89, 8, '50g', 'chocolate', true, '2 hrs'),
    ]
  },
  mentos_mint_roll: {
    query: 'mentos', canonicalName: 'Mentos Mint Roll', category: 'Snacks', icon: '🍬', prices: [
      p('redmart', 'Mentos 5 Pack', 2.32, 2.71, 10, '5 rolls', 'candy', true, '1 day'),
    ]
  },
  orbit_gum_pack: {
    query: 'orbit gum', canonicalName: 'Orbit Sugarfree Gum', category: 'Snacks', icon: '🍬', prices: [
      p('coldstorage', 'Orbit 12 pcs', 2.5, 2.89, 8, '22g', 'candy', true, 'Same day'),
    ]
  },
  center_fresh_gum: {
    query: 'center fresh', canonicalName: 'Center Fresh Gum', category: 'Snacks', icon: '🍬', prices: [
      p('shengsiong', 'Center Fresh 10 pcs', 1.68, 1.98, 0, '20g', 'candy', true, '4 hrs'),
    ]
  },
  pulse_candy_pack: {
    query: 'pulse candy', canonicalName: 'Pulse Candy (Large Pack)', category: 'Snacks', icon: '🍬', prices: [
      p('giant', 'Pulse Candy 50 pcs', 2.41, 2.71, 0, '200g', 'candy', true, 'Same day'),
    ]
  },
  kaccha_mango_bite_pack: {
    query: 'mango bite', canonicalName: 'Kaccha Mango Bite', category: 'Snacks', icon: '🍬', prices: [
      p('grabmart', 'Mango Bite 50 pcs', 2.41, 2.71, 0, '200g', 'candy', true, '15 min'),
    ]
  },
  parle_melody_pack: {
    query: 'melody chocolate', canonicalName: 'Parle Melody (Large)', category: 'Snacks', icon: '🍬', prices: [
      p('pandamart', 'Melody 50 pcs', 2.41, 2.71, 0, '200g', 'candy', true, '15 min'),
    ]
  },
  alpenliebe_gold_pack: {
    query: 'alpenliebe', canonicalName: 'Alpenliebe Gold (Large)', category: 'Snacks', icon: '🍬', prices: [
      p('amazon_sg', 'Alpenliebe 50 pcs', 2.41, 2.71, 0, '200g', 'candy', true, '2 hrs'),
    ]
  },
  kopiko_coffee_candy: {
    query: 'kopiko', canonicalName: 'Kopiko Coffee Candy', category: 'Snacks', icon: '🍬', prices: [
      p('fairprice', 'Kopiko 50 pcs', 2.41, 2.71, 0, '200g', 'candy', true, '2 hrs'),
    ]
  },
  fox_candy_tin: {
    query: 'fox candy', canonicalName: 'Fox’s Crystal Candy', category: 'Snacks', icon: '🍬', prices: [
      p('redmart', 'Fox Tin 180g', 3.77, 4.44, 14, '180g', 'candy', true, '1 day'),
    ]
  },
  skittles_fruit_pack: {
    query: 'skittles', canonicalName: 'Skittles Fruit Candy', category: 'Snacks', icon: '🍬', prices: [
      p('coldstorage', 'Skittles 45g', 2.32, 2.71, 10, '45g', 'candy', true, 'Same day'),
    ]
  },
  polo_mint_pack: {
    query: 'polo mint', canonicalName: 'Polo Mint (Large)', category: 'Snacks', icon: '🍬', prices: [
      p('shengsiong', 'Polo 5 Pack', 2.32, 2.71, 10, '5 rolls', 'candy', true, '4 hrs'),
    ]
  },
  halls_mentholyptus_pack: {
    query: 'halls candy', canonicalName: 'Halls Mentholyptus', category: 'Snacks', icon: '🍬', prices: [
      p('giant', 'Halls 10 pcs', 1.68, 1.98, 0, '25g', 'candy', true, 'Same day'),
    ]
  },
  strepsils_ginger_pack: {
    query: 'strepsils', canonicalName: 'Strepsils (Ginger)', category: 'Snacks', icon: '🍬', prices: [
      p('grabmart', 'Strepsils 8 pcs', 2.14, 2.44, 0, '20g', 'candy', true, '15 min'),
    ]
  },
  vicks_cough_drops: {
    query: 'vicks candy', canonicalName: 'Vicks Cough Drops', category: 'Snacks', icon: '🍬', prices: [
      p('pandamart', 'Vicks 10 pcs', 1.68, 1.98, 0, '25g', 'candy', true, '15 min'),
    ]
  },
  nutella_3kg_bucket: {
    query: 'nutella 3kg', canonicalName: 'Nutella (3kg Mega Bucket)', category: 'Packaged Foods', icon: '🍫', prices: [
      p('amazon_sg', 'Nutella 3kg Bucket', 46.86, 53.62, 12, '3 kg', 'spread', true, '2 hrs'),
    ]
  },
  coke_24_can_case: {
    query: 'coke case', canonicalName: 'Coca Cola (24 Can Case)', category: 'Beverages', icon: '🥤', prices: [
      p('fairprice', 'Coke 24x300ml Case', 18.95, 19.25, 0, '24 pcs', 'soft drink', true, '2 hrs'),
    ]
  },
  red_bull_24_can_case: {
    query: 'red bull case', canonicalName: 'Red Bull (24 Can Case)', category: 'Beverages', icon: '⚡', prices: [
      p('redmart', 'Red Bull 24x250ml', 73.5, 73.8, 0, '24 pcs', 'energy drink', true, '1 day'),
    ]
  },
  maggi_72_pack_case: {
    query: 'maggi case', canonicalName: 'Maggi Noodles (72 Pack Case)', category: 'Packaged Foods', icon: '🍜', prices: [
      p('coldstorage', 'Maggi 72 Pack Box', 17.21, 20.13, 14, '72 pcs', 'noodles', true, 'Same day'),
    ]
  },
  parle_g_case_24: {
    query: 'parle g case', canonicalName: 'Parle-G (Case of 24)', category: 'Snacks', icon: '🍪', prices: [
      p('shengsiong', 'Parle-G 24x100g Case', 5.86, 6.16, 0, '24 pcs', 'biscuits', true, '4 hrs'),
    ]
  },
  marie_gold_case_24: {
    query: 'marie gold case', canonicalName: 'Marie Gold (Case of 24)', category: 'Snacks', icon: '🍪', prices: [
      p('giant', 'Marie Gold 24x100g', 8.05, 8.35, 0, '24 pcs', 'biscuits', true, 'Same day'),
    ]
  },
  tata_salt_case_12: {
    query: 'tata salt case', canonicalName: 'Tata Salt (Case of 12)', category: 'Packaged Foods', icon: '🧂', prices: [
      p('grabmart', 'Tata Salt 12kg Case', 6.95, 8.35, 16, '12 pcs', 'salt', true, '15 min'),
    ]
  },
  sugar_50kg_bag: {
    query: 'sugar 50kg', canonicalName: 'White Sugar (50kg Bag)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('pandamart', 'Sugar 50kg Wholesale', 40.59, 45.44, 10, '50 kg', 'grains', true, '15 min'),
    ]
  },
  amul_lassi_1l_family: {
    query: 'lassi 1l', canonicalName: 'Amul Lassi (1L Family Pack)', category: 'Beverages', icon: '🥛', prices: [
      p('amazon_sg', 'Amul Lassi 1L Tetra', 2.86, 3.35, 12, '1 L', 'beverages', true, '2 hrs'),
    ]
  },
  davidoff_coffee_rich_aroma: {
    query: 'davidoff coffee', canonicalName: 'Davidoff Rich Aroma (100g)', category: 'Beverages', icon: '☕', prices: [
      p('fairprice', 'Davidoff Rich 100g', 11.41, 13.62, 16, '100g', 'coffee', true, '2 hrs'),
    ]
  },
  davidoff_coffee_fine_aroma: {
    query: 'davidoff fine', canonicalName: 'Davidoff Fine Aroma (100g)', category: 'Beverages', icon: '☕', prices: [
      p('redmart', 'Davidoff Fine 100g', 11.41, 13.62, 16, '100g', 'coffee', true, '1 day'),
    ]
  },
  twinings_english_breakfast: {
    query: 'twinings tea', canonicalName: 'Twinings English Breakfast', category: 'Beverages', icon: '🍵', prices: [
      p('coldstorage', 'Twinings 25 bags', 7.77, 9.44, 17, '25 bags', 'tea', true, 'Same day'),
    ]
  },
  organic_india_tulsi_green: {
    query: 'tulsi green tea', canonicalName: 'Organic India Tulsi Green', category: 'Beverages', icon: '🍵', prices: [
      p('shengsiong', 'Organic India 25 bags', 4.68, 5.62, 16, '25 bags', 'tea', true, '4 hrs'),
    ]
  },
  paper_boat_aamras_1l: {
    query: 'paper boat aamras', canonicalName: 'Paper Boat Aamras (1L)', category: 'Beverages', icon: '🥭', prices: [
      p('giant', 'Paper Boat Aamras 1L', 3.77, 4.53, 16, '1 L', 'beverages', true, 'Same day'),
    ]
  },
  paper_boat_jaljeera_1l: {
    query: 'paper boat jaljeera', canonicalName: 'Paper Boat Jaljeera (1L)', category: 'Beverages', icon: '🥤', prices: [
      p('grabmart', 'Paper Boat Jaljeera 1L', 3.23, 3.89, 17, '1 L', 'beverages', true, '15 min'),
    ]
  },
  mountain_dew_1_25l: {
    query: 'mountain dew', canonicalName: 'Mountain Dew (1.25 L)', category: 'Beverages', icon: '🥤', prices: [
      p('pandamart', 'Dew 1.25L Bottle', 2.68, 2.98, 0, '1.25 L', 'soft drink', true, '15 min'),
    ]
  },
  seven_up_1_25l: {
    query: '7up', canonicalName: '7Up (1.25 L)', category: 'Beverages', icon: '🥤', prices: [
      p('amazon_sg', '7Up 1.25L Bottle', 2.68, 2.98, 0, '1.25 L', 'soft drink', true, '2 hrs'),
    ]
  },
  mirinda_1_25l: {
    query: 'mirinda', canonicalName: 'Mirinda (1.25 L)', category: 'Beverages', icon: '🥤', prices: [
      p('fairprice', 'Mirinda 1.25L Bottle', 2.68, 2.98, 0, '1.25 L', 'soft drink', true, '2 hrs'),
    ]
  },
  oreo_family_pack_original: {
    query: 'oreo family pack', canonicalName: 'Oreo Original (Family Pack)', category: 'Snacks', icon: '🍪', prices: [
      p('redmart', 'Oreo Family 300g', 3.05, 3.62, 15, '300g', 'biscuits', true, '1 day'),
    ]
  },
  dark_fantasy_choco_fills_mega: {
    query: 'dark fantasy mega', canonicalName: 'Dark Fantasy Choco Fills (Mega)', category: 'Snacks', icon: '🍪', prices: [
      p('coldstorage', 'Dark Fantasy 600g', 4.86, 5.89, 17, '600g', 'biscuits', true, 'Same day'),
    ]
  },
  good_day_cashew_family: {
    query: 'good day family', canonicalName: 'Good Day Cashew (Family Pack)', category: 'Snacks', icon: '🍪', prices: [
      p('shengsiong', 'Good Day 600g', 4.14, 4.98, 17, '600g', 'biscuits', true, '4 hrs'),
    ]
  },
  toor_dal_2kg_bulk: {
    query: 'toor dal 2kg', canonicalName: 'Toor Dal (2kg Bulk)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('giant', 'Fortune Toor 2kg', 6.68, 7.8, 14, '2 kg', 'pulses', true, 'Same day'),
    ]
  },
  moong_dal_2kg_bulk: {
    query: 'moong dal 2kg', canonicalName: 'Moong Dal (2kg Bulk)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('grabmart', 'Fortune Moong 2kg', 6.32, 7.44, 14, '2 kg', 'pulses', true, '15 min'),
    ]
  },
  soya_chunks_1kg_bulk: {
    query: 'soya chunks 1kg', canonicalName: 'Soya Chunks (1kg Mega)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('pandamart', 'Fortune Soya 1kg', 3.77, 4.53, 16, '1 kg', 'soya', true, '15 min'),
    ]
  },
  kelloggs_muesli_fruit_nut_750g: {
    query: 'muesli 750g', canonicalName: 'Kellogg’s Muesli (750g)', category: 'Packaged Foods', icon: '🥣', prices: [
      p('amazon_sg', 'Kelloggs Fruit & Nut', 7.77, 9.44, 17, '750g', 'cereal', true, '2 hrs'),
    ]
  },
  saffola_gold_1l_bottle: {
    query: 'saffola gold 1l', canonicalName: 'Saffola Gold (1L Bottle)', category: 'Packaged Foods', icon: '🛢️', prices: [
      p('fairprice', 'Saffola Gold 1L', 4.86, 5.62, 12, '1 L', 'oil', true, '2 hrs'),
    ]
  },
  fortune_soyabean_1l_bottle: {
    query: 'soyabean oil 1l', canonicalName: 'Fortune Soyabean (1L)', category: 'Packaged Foods', icon: '🛢️', prices: [
      p('redmart', 'Fortune Soyabean 1L', 3.77, 4.62, 19, '1 L', 'oil', true, '1 day'),
    ]
  },
  amul_cow_ghee_1l: {
    query: 'amul cow ghee', canonicalName: 'Amul Cow Ghee (1L)', category: 'Dairy', icon: '🧈', prices: [
      p('coldstorage', 'Amul Cow Ghee 1L', 12.14, 13.62, 10, '1 L', 'ghee', true, 'Same day'),
    ]
  },
  patanjali_honey_1kg: {
    query: 'patanjali honey', canonicalName: 'Patanjali Honey (1kg)', category: 'Packaged Foods', icon: '🍯', prices: [
      p('shengsiong', 'Patanjali Honey 1kg', 7.41, 8.71, 14, '1 kg', 'honey', true, '4 hrs'),
    ]
  },
  dabur_chyawanprash_1kg: {
    query: 'chyawanprash 1kg', canonicalName: 'Dabur Chyawanprash (1kg)', category: 'Packaged Foods', icon: '🏺', prices: [
      p('giant', 'Dabur Chyawanprash', 7.77, 8.98, 12, '1 kg', 'health', true, 'Same day'),
    ]
  },
  sugar_free_gold_pellets: {
    query: 'sugar free gold', canonicalName: 'Sugar Free Gold (500 tabs)', category: 'Packaged Foods', icon: '💊', prices: [
      p('grabmart', 'Sugar Free Gold 500', 6.68, 7.62, 11, '500 tabs', 'sugar free', true, '15 min'),
    ]
  },
  stevia_natural_sweetener: {
    query: 'stevia', canonicalName: 'Stevia Natural (100 sachets)', category: 'Packaged Foods', icon: '🌿', prices: [
      p('pandamart', 'Sugar Free Green 100', 4.86, 5.62, 12, '100 sachets', 'sugar free', true, '15 min'),
    ]
  },
  peanut_butter_unsweetened: {
    query: 'unsweetened peanut butter', canonicalName: 'Peanut Butter (Unsweetened)', category: 'Packaged Foods', icon: '🥜', prices: [
      p('amazon_sg', 'Pintola Unsweetened', 4.86, 5.8, 16, '350g', 'peanut butter', true, '2 hrs'),
    ]
  },
  almond_butter_premium: {
    query: 'almond butter', canonicalName: 'Premium Almond Butter', category: 'Packaged Foods', icon: '🥜', prices: [
      p('fairprice', 'Urban Platter Almond', 10.32, 11.8, 12, '200g', 'peanut butter', true, '2 hrs'),
    ]
  },
  quinoa_tri_color: {
    query: 'tricolor quinoa', canonicalName: 'Quinoa (Tri-Color)', category: 'Packaged Foods', icon: '🥣', prices: [
      p('redmart', 'Urban Platter Quinoa', 7.41, 8.71, 14, '500g', 'quinoa', true, '1 day'),
    ]
  },
  chia_seeds_premium_500g: {
    query: 'chia seeds 500g', canonicalName: 'Chia Seeds (500g Mega)', category: 'Packaged Foods', icon: '🧂', prices: [
      p('coldstorage', 'Urban Platter Chia', 7.41, 8.71, 14, '500g', 'health food', true, 'Same day'),
    ]
  },
  flax_seeds_roasted: {
    query: 'flax seeds', canonicalName: 'Roasted Flax Seeds', category: 'Packaged Foods', icon: '🧂', prices: [
      p('shengsiong', 'Urban Platter Flax', 4.14, 4.98, 17, '250g', 'health food', true, '4 hrs'),
    ]
  },
  pumpkin_seeds_raw: {
    query: 'raw pumpkin seeds', canonicalName: 'Raw Pumpkin Seeds', category: 'Packaged Foods', icon: '🎃', prices: [
      p('giant', 'Urban Platter Pumpkin', 6.68, 8.16, 18, '250g', 'health food', true, 'Same day'),
    ]
  },
  sunflower_seeds_raw: {
    query: 'sunflower seeds', canonicalName: 'Raw Sunflower Seeds', category: 'Packaged Foods', icon: '🌻', prices: [
      p('grabmart', 'Urban Platter Sun', 4.86, 5.8, 16, '250g', 'health food', true, '15 min'),
    ]
  },
  goji_berries_dried: {
    query: 'goji berries', canonicalName: 'Dried Goji Berries', category: 'Snacks', icon: '🍒', prices: [
      p('pandamart', 'Urban Platter Goji', 9.23, 10.89, 15, '200g', 'dry fruits', true, '15 min'),
    ]
  },
  cranberries_dried: {
    query: 'cranberries', canonicalName: 'Dried Cranberries', category: 'Snacks', icon: '🍒', prices: [
      p('amazon_sg', 'Urban Platter Cran', 7.41, 8.71, 14, '250g', 'dry fruits', true, '2 hrs'),
    ]
  },
  blueberries_dried: {
    query: 'dried blueberries', canonicalName: 'Dried Blueberries', category: 'Snacks', icon: '🫐', prices: [
      p('fairprice', 'Urban Platter Blue', 10.32, 11.8, 12, '200g', 'dry fruits', true, '2 hrs'),
    ]
  },
  walnut_kernels_premium_500g: {
    query: 'walnuts 500g', canonicalName: 'Walnut Kernels (500g)', category: 'Snacks', icon: '🥜', prices: [
      p('redmart', 'Premium Akhrot 500g', 13.23, 15.44, 14, '500g', 'dry fruits', true, '1 day'),
    ]
  },
  pistachios_roasted_salted_500g: {
    query: 'pista 500g', canonicalName: 'Pistachios (500g Mega)', category: 'Snacks', icon: '🥜', prices: [
      p('coldstorage', 'Happilo Pista 500g', 16.86, 19.07, 11, '500g', 'dry fruits', true, 'Same day'),
    ]
  },
  cashew_whole_premium_1kg: {
    query: 'kaju 1kg', canonicalName: 'Premium Cashews (1kg Mega)', category: 'Snacks', icon: '🥜', prices: [
      p('shengsiong', 'Happilo Kaju 1kg', 18.68, 21.8, 14, '1 kg', 'dry fruits', true, '4 hrs'),
    ]
  },
  almonds_premium_1kg: {
    query: 'badam 1kg', canonicalName: 'Premium Almonds (1kg Mega)', category: 'Snacks', icon: '🥜', prices: [
      p('giant', 'Happilo Badam 1kg', 16.86, 19.07, 11, '1 kg', 'dry fruits', true, 'Same day'),
    ]
  },
  mixed_nuts_mega_pack: {
    query: 'mixed nuts', canonicalName: 'Mixed Nuts (Party Pack)', category: 'Snacks', icon: '🥜', prices: [
      p('grabmart', 'Happilo Party Mix', 10.32, 11.8, 12, '500g', 'dry fruits', true, '15 min'),
    ]
  },
  tata_sampann_chana_dal: {
    query: 'tata chana dal', canonicalName: 'Tata Sampann Chana Dal', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('pandamart', 'Tata Chana Dal 1kg', 3.77, 4.44, 14, '1 kg', 'pulses', true, '15 min'),
    ]
  },
  tata_sampann_kabuli_chana: {
    query: 'tata kabuli chana', canonicalName: 'Tata Sampann Kabuli Chana', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('amazon_sg', 'Tata Kabuli 1kg', 4.86, 5.62, 12, '1 kg', 'pulses', true, '2 hrs'),
    ]
  },
  tata_sampann_kala_chana: {
    query: 'tata kala chana', canonicalName: 'Tata Sampann Kala Chana', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('fairprice', 'Tata Kala Chana 1kg', 3.59, 4.25, 14, '1 kg', 'pulses', true, '2 hrs'),
    ]
  },
  fortune_maida_1kg: {
    query: 'maida 1kg', canonicalName: 'Fortune Maida (1kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('redmart', 'Fortune Maida 1kg', 2.32, 2.8, 18, '1 kg', 'flour', true, '1 day'),
    ]
  },
  fortune_suji_1kg: {
    query: 'suji 1kg', canonicalName: 'Fortune Suji (1kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('coldstorage', 'Fortune Suji 1kg', 2.5, 2.98, 15, '1 kg', 'flour', true, 'Same day'),
    ]
  },
  fortune_besan_1kg_premium: {
    query: 'besan 1kg', canonicalName: 'Fortune Besan (1kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('shengsiong', 'Fortune Besan 1kg', 3.41, 4.07, 16, '1 kg', 'flour', true, '4 hrs'),
    ]
  },
  maaza_600ml_bottle: {
    query: 'maaza 600ml', canonicalName: 'Maaza Mango Drink (600ml)', category: 'Beverages', icon: '🥭', prices: [
      p('giant', 'Maaza 600ml Bottle', 2.23, 2.53, 0, '600ml', 'beverages', true, 'Same day'),
    ]
  },
  sprite_zero_750ml: {
    query: 'sprite zero', canonicalName: 'Sprite Zero (750ml)', category: 'Beverages', icon: '🥤', prices: [
      p('grabmart', 'Sprite Zero 750ml', 2.32, 2.62, 0, '750ml', 'soft drink', true, '15 min'),
    ]
  },
  kurkure_chilli_chatka: {
    query: 'chilli chatka', canonicalName: 'Kurkure Chilli Chatka', category: 'Snacks', icon: '🍟', prices: [
      p('pandamart', 'Kurkure Chilli 90g', 1.86, 2.16, 0, '90g', 'snacks', true, '15 min'),
    ]
  },
  bingo_tedhe_medhe_masala: {
    query: 'tedhe medhe', canonicalName: 'Bingo! Tedhe Medhe', category: 'Snacks', icon: '🍟', prices: [
      p('amazon_sg', 'Tedhe Medhe 100g', 1.86, 2.16, 0, '100g', 'snacks', true, '2 hrs'),
    ]
  },
  lays_cream_onion_50g: {
    query: 'lays cream onion', canonicalName: 'Lays Cream & Onion', category: 'Snacks', icon: '🍟', prices: [
      p('fairprice', 'Lays Onion 50g', 1.86, 2.16, 0, '50g', 'chips', true, '2 hrs'),
    ]
  },
  lays_tomato_50g: {
    query: 'lays tomato', canonicalName: 'Lays Spanish Tomato', category: 'Snacks', icon: '🍟', prices: [
      p('redmart', 'Lays Tomato 50g', 1.86, 2.16, 0, '50g', 'chips', true, '1 day'),
    ]
  },
  tetley_ginger_lemon_honey: {
    query: 'tetley ginger', canonicalName: 'Tetley Ginger Lemon Honey', category: 'Beverages', icon: '🍵', prices: [
      p('coldstorage', 'Tetley Ginger 25 bags', 4.86, 5.8, 16, '25 bags', 'tea', true, 'Same day'),
    ]
  },
  twining_pure_green_tea: {
    query: 'twining green tea', canonicalName: 'Twinings Pure Green Tea', category: 'Beverages', icon: '🍵', prices: [
      p('shengsiong', 'Twinings Green 25 bags', 8.5, 9.98, 14, '25 bags', 'tea', true, '4 hrs'),
    ]
  },
  sesame_oil_1l_premium: {
    query: 'sesame oil', canonicalName: 'Premium Sesame Oil (1L)', category: 'Packaged Foods', icon: '🫙', prices: [
      p('giant', 'Idhayam Sesame 1L', 8.5, 9.98, 14, '1 L', 'oil', true, 'Same day'),
    ]
  },
  rice_flour_1kg_pack: {
    query: 'rice flour', canonicalName: 'Rice Flour (1kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('grabmart', 'Organic Rice Flour', 3.05, 3.8, 22, '1 kg', 'flour', true, '15 min'),
    ]
  },
  kala_jeera_seeds: {
    query: 'kala jeera', canonicalName: 'Black Cumin (Kala Jeera)', category: 'Packaged Foods', icon: '🧂', prices: [
      p('pandamart', 'Catch Kala Jeera', 3.77, 4.53, 17, '50g', 'spices', true, '15 min'),
    ]
  },
  star_anise_spices: {
    query: 'star anise', canonicalName: 'Star Anise (Chakra Phool)', category: 'Packaged Foods', icon: '🧂', prices: [
      p('amazon_sg', 'Catch Star Anise', 3.05, 3.8, 22, '50g', 'spices', true, '2 hrs'),
    ]
  },
  mace_javitri_spices: {
    query: 'javitri', canonicalName: 'Mace (Javitri)', category: 'Packaged Foods', icon: '🧂', prices: [
      p('fairprice', 'Catch Javitri 50g', 4.86, 5.8, 16, '50g', 'spices', true, '2 hrs'),
    ]
  },
  nutmeg_jaiphal_spices: {
    query: 'jaiphal', canonicalName: 'Nutmeg (Jaiphal)', category: 'Packaged Foods', icon: '🧂', prices: [
      p('redmart', 'Catch Nutmeg 2 pcs', 2.32, 2.8, 18, '2 pcs', 'spices', true, '1 day'),
    ]
  },
  white_pepper_seeds: {
    query: 'white pepper', canonicalName: 'White Pepper Whole', category: 'Packaged Foods', icon: '🧂', prices: [
      p('coldstorage', 'Catch White Pepper', 3.77, 4.62, 19, '50g', 'spices', true, 'Same day'),
    ]
  },
  fennel_seeds_thick: {
    query: 'thick saunf', canonicalName: 'Fennel Seeds (Thick)', category: 'Packaged Foods', icon: '🧂', prices: [
      p('shengsiong', 'Catch Thick Saunf', 2.32, 2.89, 25, '100g', 'spices', true, '4 hrs'),
    ]
  },
  mustard_seeds_yellow: {
    query: 'yellow sarson', canonicalName: 'Yellow Mustard Seeds', category: 'Packaged Foods', icon: '🧂', prices: [
      p('giant', 'Catch Yellow Sarson', 2.14, 2.62, 22, '100g', 'spices', true, 'Same day'),
    ]
  },
  mozzarella_cheese_200g: {
    query: 'mozzarella cheese', canonicalName: 'Mozzarella Cheese (200g)', category: 'Dairy', icon: '🧀', prices: [
      p('grabmart', 'Amul Mozzarella', 3.59, 4.07, 8, '200g', 'cheese', true, '15 min'),
    ]
  },
  gouda_cheese_200g: {
    query: 'gouda cheese', canonicalName: 'Gouda Cheese (200g)', category: 'Dairy', icon: '🧀', prices: [
      p('pandamart', 'Amul Gouda Cheese', 4.86, 5.62, 12, '200g', 'cheese', true, '15 min'),
    ]
  },
  cheddar_cheese_200g: {
    query: 'cheddar cheese', canonicalName: 'Cheddar Cheese (200g)', category: 'Dairy', icon: '🧀', prices: [
      p('amazon_sg', 'Britannia Cheddar', 5.05, 5.8, 11, '200g', 'cheese', true, '2 hrs'),
    ]
  },
  feta_cheese_200g: {
    query: 'feta cheese', canonicalName: 'Feta Cheese (200g)', category: 'Dairy', icon: '🧀', prices: [
      p('fairprice', 'Urban Platter Feta', 8.5, 9.98, 14, '200g', 'cheese', true, '2 hrs'),
    ]
  },
  parmesan_cheese_100g: {
    query: 'parmesan cheese', canonicalName: 'Parmesan Cheese (100g)', category: 'Dairy', icon: '🧀', prices: [
      p('redmart', 'Urban Platter Parm', 10.32, 11.8, 12, '100g', 'cheese', true, '1 day'),
    ]
  },
  haldiram_moong_dal_200g: {
    query: 'moong dal snack', canonicalName: 'Haldiram Moong Dal (Snack)', category: 'Snacks', icon: '🍿', prices: [
      p('coldstorage', 'Moong Dal 200g', 2.5, 2.98, 15, '200g', 'snacks', true, 'Same day'),
    ]
  },
  haldiram_navratan_mix_400g: {
    query: 'navratan mix', canonicalName: 'Haldiram Navratan Mix', category: 'Snacks', icon: '🍿', prices: [
      p('shengsiong', 'Navratan Mix 400g', 3.41, 4.07, 16, '400g', 'snacks', true, '4 hrs'),
    ]
  },
  haldiram_khatta_meetha_400g: {
    query: 'khatta meetha', canonicalName: 'Haldiram Khatta Meetha', category: 'Snacks', icon: '🍿', prices: [
      p('giant', 'Khatta Meetha 400g', 3.41, 4.07, 16, '400g', 'snacks', true, 'Same day'),
    ]
  },
  haldiram_cornflakes_mix_400g: {
    query: 'cornflakes mix', canonicalName: 'Haldiram Cornflakes Mix', category: 'Snacks', icon: '🍿', prices: [
      p('grabmart', 'Cornflakes Mix 400g', 3.41, 4.07, 16, '400g', 'snacks', true, '15 min'),
    ]
  },
  oreo_strawberry_120g: {
    query: 'oreo strawberry', canonicalName: 'Oreo Strawberry Cream', category: 'Snacks', icon: '🍪', prices: [
      p('pandamart', 'Oreo Strawberry 120g', 2.14, 2.44, 0, '120g', 'biscuits', true, '15 min'),
    ]
  },
  oreo_vanilla_120g: {
    query: 'oreo vanilla', canonicalName: 'Oreo Vanilla Cream', category: 'Snacks', icon: '🍪', prices: [
      p('amazon_sg', 'Oreo Vanilla 120g', 2.14, 2.44, 0, '120g', 'biscuits', true, '2 hrs'),
    ]
  },
  britannia_50_50_biscuits: {
    query: '50-50 biscuits', canonicalName: 'Britannia 50-50 Maska', category: 'Snacks', icon: '🍪', prices: [
      p('fairprice', '50-50 Maska 200g', 2.14, 2.53, 12, '200g', 'biscuits', true, '2 hrs'),
    ]
  },
  britannia_monaco_biscuits: {
    query: 'monaco biscuits', canonicalName: 'Britannia Monaco Classic', category: 'Snacks', icon: '🍪', prices: [
      p('redmart', 'Monaco Classic 200g', 2.14, 2.53, 12, '200g', 'biscuits', true, '1 day'),
    ]
  },
  paper_boat_lychee_1l: {
    query: 'paper boat lychee', canonicalName: 'Paper Boat Lychee (1L)', category: 'Beverages', icon: '🧃', prices: [
      p('coldstorage', 'Paper Boat Lychee 1L', 3.77, 4.53, 16, '1 L', 'beverages', true, 'Same day'),
    ]
  },
  paper_boat_santra_1l: {
    query: 'paper boat santra', canonicalName: 'Paper Boat Santra (1L)', category: 'Beverages', icon: '🍊', prices: [
      p('shengsiong', 'Paper Boat Santra 1L', 3.23, 3.89, 17, '1 L', 'beverages', true, '4 hrs'),
    ]
  },
  b_natural_mango_1l: {
    query: 'b natural mango', canonicalName: 'B Natural Mango (1L)', category: 'Beverages', icon: '🥭', prices: [
      p('giant', 'B Natural Mango 1L', 3.59, 4.16, 11, '1 L', 'beverages', true, 'Same day'),
    ]
  },
  b_natural_orange_1l: {
    query: 'b natural orange', canonicalName: 'B Natural Orange (1L)', category: 'Beverages', icon: '🍊', prices: [
      p('grabmart', 'B Natural Orange 1L', 3.59, 4.16, 11, '1 L', 'beverages', true, '15 min'),
    ]
  },
  green_moong_whole_1kg: {
    query: 'moong whole 1kg', canonicalName: 'Green Moong Whole (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('pandamart', 'Fortune Moong 1kg', 4.86, 5.62, 12, '1 kg', 'pulses', true, '15 min'),
    ]
  },
  black_urad_whole_1kg: {
    query: 'urad whole 1kg', canonicalName: 'Black Urad Whole (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('amazon_sg', 'Fortune Urad 1kg', 4.86, 5.62, 12, '1 kg', 'pulses', true, '2 hrs'),
    ]
  },
  horse_gram_500g_pack: {
    query: 'horse gram', canonicalName: 'Horse Gram (Kulthi)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('fairprice', 'Organic Horse Gram', 3.05, 3.8, 22, '500g', 'pulses', true, '2 hrs'),
    ]
  },
  soya_beans_1kg_pack: {
    query: 'soya beans', canonicalName: 'Soya Beans (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('redmart', 'Organic Soya Beans', 3.77, 4.62, 19, '1 kg', 'pulses', true, '1 day'),
    ]
  },
  lobia_white_1kg_pack: {
    query: 'lobia 1kg', canonicalName: 'White Lobia (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('coldstorage', 'Fortune Lobia 1kg', 3.59, 4.25, 14, '1 kg', 'pulses', true, 'Same day'),
    ]
  },
  mccain_potato_cheese_shotz_400g: {
    query: 'mccain shotz', canonicalName: 'McCain Potato Cheese Shotz', category: 'Frozen Foods', icon: '🧊', prices: [
      p('shengsiong', 'McCain Shotz 400g', 4.5, 5.35, 15, '400g', 'frozen', true, '4 hrs'),
    ]
  },
  mccain_chilli_garlic_bites_400g: {
    query: 'mccain bites', canonicalName: 'McCain Chilli Garlic Bites', category: 'Frozen Foods', icon: '🧊', prices: [
      p('giant', 'McCain Bites 400g', 3.77, 4.62, 19, '400g', 'frozen', true, 'Same day'),
    ]
  },
  mccain_veggie_patty_12pcs: {
    query: 'mccain patty', canonicalName: 'McCain Veggie Burger Patty', category: 'Frozen Foods', icon: '🧊', prices: [
      p('grabmart', 'McCain Patty 12 pcs', 5.95, 7.07, 15, '12 pcs', 'frozen', true, '15 min'),
    ]
  },
  yummiez_chicken_nuggets_500g: {
    query: 'yummiez nuggets', canonicalName: 'Godrej Yummiez Nuggets', category: 'Frozen Foods', icon: '🧊', prices: [
      p('pandamart', 'Yummiez Chicken 500g', 6.68, 7.8, 14, '500g', 'frozen', true, '15 min'),
    ]
  },
  amul_gold_1l_tetra: {
    query: 'amul gold 1l', canonicalName: 'Amul Gold (1L Tetra)', category: 'Dairy', icon: '🥛', prices: [
      p('amazon_sg', 'Amul Gold 1L', 2.81, 3.11, 0, '1 L', 'milk', true, '2 hrs'),
    ]
  },
  amul_taaza_1l_tetra: {
    query: 'amul taaza 1l', canonicalName: 'Amul Taaza (1L Tetra)', category: 'Dairy', icon: '🥛', prices: [
      p('fairprice', 'Amul Taaza 1L', 2.74, 3.04, 0, '1 L', 'milk', true, '2 hrs'),
    ]
  },
  amul_slim_trim_1l_tetra: {
    query: 'amul slim 1l', canonicalName: 'Amul Slim N Trim (1L)', category: 'Dairy', icon: '🥛', prices: [
      p('redmart', 'Amul Slim 1L', 2.66, 2.96, 0, '1 L', 'milk', true, '1 day'),
    ]
  },
  britannia_bourbon_150g: {
    query: 'bourbon biscuits', canonicalName: 'Britannia Bourbon', category: 'Snacks', icon: '🍪', prices: [
      p('coldstorage', 'Bourbon 150g', 2.05, 2.44, 14, '150g', 'biscuits', true, 'Same day'),
    ]
  },
  britannia_little_hearts: {
    query: 'little hearts', canonicalName: 'Britannia Little Hearts', category: 'Snacks', icon: '🍪', prices: [
      p('shengsiong', 'Little Hearts 75g', 1.95, 2.25, 0, '75g', 'biscuits', true, '4 hrs'),
    ]
  },
  sunfeast_moms_magic_cashew: {
    query: 'moms magic cashew', canonicalName: 'Mom’s Magic Cashew', category: 'Snacks', icon: '🍪', prices: [
      p('giant', 'Moms Magic 200g', 2.32, 2.71, 10, '200g', 'biscuits', true, 'Same day'),
    ]
  },
  real_pineapple_juice_1l: {
    query: 'real pineapple', canonicalName: 'Real Pineapple Juice (1L)', category: 'Beverages', icon: '🧃', prices: [
      p('grabmart', 'Real Pineapple 1L', 3.59, 4.16, 11, '1 L', 'beverages', true, '15 min'),
    ]
  },
  real_litchi_juice_1l: {
    query: 'real litchi', canonicalName: 'Real Litchi Juice (1L)', category: 'Beverages', icon: '🧃', prices: [
      p('pandamart', 'Real Litchi 1L', 3.59, 4.16, 11, '1 L', 'beverages', true, '15 min'),
    ]
  },
  fanta_600ml_bottle: {
    query: 'fanta 600ml', canonicalName: 'Fanta Orange (600ml)', category: 'Beverages', icon: '🥤', prices: [
      p('amazon_sg', 'Fanta 600ml Bottle', 2.23, 2.53, 0, '600ml', 'beverages', true, '2 hrs'),
    ]
  },
  limca_600ml_bottle: {
    query: 'limca 600ml', canonicalName: 'Limca (600ml)', category: 'Beverages', icon: '🥤', prices: [
      p('fairprice', 'Limca 600ml Bottle', 2.23, 2.53, 0, '600ml', 'beverages', true, '2 hrs'),
    ]
  },
  thums_up_600ml_bottle: {
    query: 'thums up 600ml', canonicalName: 'Thums Up (600ml)', category: 'Beverages', icon: '🥤', prices: [
      p('redmart', 'Thums Up 600ml Bottle', 2.23, 2.53, 0, '600ml', 'beverages', true, '1 day'),
    ]
  },
  corn_flour_500g_pack: {
    query: 'corn flour', canonicalName: 'Corn Flour (Maize)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('coldstorage', 'Weikfield Corn Flour', 2.32, 2.8, 18, '500g', 'flour', true, 'Same day'),
    ]
  },
  haldiram_bhujia_sev_1kg: {
    query: 'bhujia 1kg', canonicalName: 'Haldiram Bhujia Sev (1kg)', category: 'Snacks', icon: '🍿', prices: [
      p('shengsiong', 'Bhujia Sev 1kg', 5.95, 6.89, 12, '1 kg', 'snacks', true, '4 hrs'),
    ]
  },
  haldiram_aloo_bhujia_1kg: {
    query: 'aloo bhujia 1kg', canonicalName: 'Haldiram Aloo Bhujia (1kg)', category: 'Snacks', icon: '🍿', prices: [
      p('giant', 'Aloo Bhujia 1kg', 5.95, 6.89, 12, '1 kg', 'snacks', true, 'Same day'),
    ]
  },
  haldiram_mixture_1kg: {
    query: 'mixture 1kg', canonicalName: 'Haldiram Mixture (1kg)', category: 'Snacks', icon: '🍿', prices: [
      p('grabmart', 'Mixture 1kg Pack', 5.95, 6.89, 12, '1 kg', 'snacks', true, '15 min'),
    ]
  },
  mother_dairy_ghee_1l: {
    query: 'mother dairy ghee', canonicalName: 'Mother Dairy Ghee (1L)', category: 'Dairy', icon: '🧈', prices: [
      p('pandamart', 'Mother Dairy Ghee 1L', 11.95, 13.44, 10, '1 L', 'ghee', true, '15 min'),
    ]
  },
  coke_zero_600ml: {
    query: 'coke zero 600ml', canonicalName: 'Coke Zero (600ml)', category: 'Beverages', icon: '🥤', prices: [
      p('amazon_sg', 'Coke Zero 600ml', 2.23, 2.53, 0, '600ml', 'soft drink', true, '2 hrs'),
    ]
  },
  pepsi_black_600ml: {
    query: 'pepsi black 600ml', canonicalName: 'Pepsi Black (600ml)', category: 'Beverages', icon: '🥤', prices: [
      p('fairprice', 'Pepsi Black 600ml', 2.23, 2.53, 0, '600ml', 'soft drink', true, '2 hrs'),
    ]
  },
  sprite_zero_600ml: {
    query: 'sprite zero 600ml', canonicalName: 'Sprite Zero (600ml)', category: 'Beverages', icon: '🥤', prices: [
      p('redmart', 'Sprite Zero 600ml', 2.23, 2.53, 0, '600ml', 'soft drink', true, '1 day'),
    ]
  },
  top_ramen_curry_70g: {
    query: 'top ramen curry', canonicalName: 'Top Ramen Curry Noodles', category: 'Packaged Foods', icon: '🍜', prices: [
      p('coldstorage', 'Top Ramen Curry 70g', 1.95, 2.25, 0, '70g', 'noodles', true, 'Same day'),
    ]
  },
  top_ramen_masala_70g: {
    query: 'top ramen masala', canonicalName: 'Top Ramen Masala', category: 'Packaged Foods', icon: '🍜', prices: [
      p('shengsiong', 'Top Ramen Masala 70g', 1.86, 2.16, 0, '70g', 'noodles', true, '4 hrs'),
    ]
  },
  wai_wai_ready_noodles: {
    query: 'wai wai noodles', canonicalName: 'Wai Wai Ready-to-Eat', category: 'Packaged Foods', icon: '🍜', prices: [
      p('giant', 'Wai Wai Veg 70g', 1.86, 2.16, 0, '70g', 'noodles', true, 'Same day'),
    ]
  },
  chings_hakka_noodles_150g: {
    query: 'chings hakka', canonicalName: 'Chings Hakka Noodles', category: 'Packaged Foods', icon: '🍜', prices: [
      p('grabmart', 'Chings Hakka 150g', 2.32, 2.71, 10, '150g', 'noodles', true, '15 min'),
    ]
  },
  paper_boat_aam_panna_200ml: {
    query: 'aam panna', canonicalName: 'Paper Boat Aam Panna', category: 'Beverages', icon: '🥤', prices: [
      p('pandamart', 'Paper Boat Aam Panna', 1.86, 2.16, 0, '200ml', 'beverages', true, '15 min'),
    ]
  },
  paper_boat_anardana_200ml: {
    query: 'anardana', canonicalName: 'Paper Boat Anardana', category: 'Beverages', icon: '🥤', prices: [
      p('amazon_sg', 'Paper Boat Anardana', 1.86, 2.16, 0, '200ml', 'beverages', true, '2 hrs'),
    ]
  },
  britannia_bourbon_family: {
    query: 'bourbon family', canonicalName: 'Britannia Bourbon (Family Pack)', category: 'Snacks', icon: '🍪', prices: [
      p('fairprice', 'Bourbon 400g Pack', 3.05, 3.62, 15, '400g', 'biscuits', true, '2 hrs'),
    ]
  },
  alphonso_mango_2pc: {
    query: 'alphonso mango', canonicalName: 'Alphonso Mango (2 pcs)', category: 'Fruits', icon: '🥭', prices: [
      p('redmart', 'Alphonso Grade A', 5.95, 8.16, 30, '2 pcs', 'fruits', true, '1 day'),
    ]
  },
  badami_mango_1kg: {
    query: 'badami mango', canonicalName: 'Badami Mango (1kg)', category: 'Fruits', icon: '🥭', prices: [
      p('coldstorage', 'Fresh Badami Mango', 4.14, 5.16, 21, '1 kg', 'fruits', true, 'Same day'),
    ]
  },
  kesar_mango_1kg: {
    query: 'kesar mango', canonicalName: 'Kesar Mango (1kg)', category: 'Fruits', icon: '🥭', prices: [
      p('shengsiong', 'Premium Kesar Mango', 4.86, 6.16, 23, '1 kg', 'fruits', true, '4 hrs'),
    ]
  },
  strawberry_fresh_200g: {
    query: 'strawberry', canonicalName: 'Fresh Strawberries (200g)', category: 'Fruits', icon: '🍓', prices: [
      p('giant', 'Mahabaleshwar Berries', 3.77, 4.8, 24, '200g', 'fruits', true, 'Same day'),
    ]
  },
  blueberry_fresh_125g: {
    query: 'blueberry', canonicalName: 'Fresh Blueberries (125g)', category: 'Fruits', icon: '🫐', prices: [
      p('grabmart', 'Imported Blueberries', 6.68, 8.16, 18, '125g', 'fruits', true, '15 min'),
    ]
  },
  raspberry_fresh_125g: {
    query: 'raspberry', canonicalName: 'Fresh Raspberries (125g)', category: 'Fruits', icon: '🍓', prices: [
      p('pandamart', 'Imported Raspberries', 7.77, 9.98, 23, '125g', 'fruits', true, '15 min'),
    ]
  },
  pineapple_fresh_1pc: {
    query: 'pineapple', canonicalName: 'Fresh Pineapple (Queen)', category: 'Fruits', icon: '🍍', prices: [
      p('amazon_sg', 'Queen Pineapple 1pc', 3.05, 4.07, 32, '1 pc', 'fruits', true, '2 hrs'),
    ]
  },
  pomegranate_fresh_2pc: {
    query: 'pomegranate', canonicalName: 'Pomegranate (2 pcs)', category: 'Fruits', icon: '🍎', prices: [
      p('fairprice', 'Bhagwa Anar 2 pcs', 4.14, 5.35, 25, '2 pcs', 'fruits', true, '2 hrs'),
    ]
  },
  maggi_pazzta_cheese_macaroni: {
    query: 'maggi pazzta', canonicalName: 'Maggi Pazzta (Cheese)', category: 'Packaged Foods', icon: '🍝', prices: [
      p('redmart', 'Pazzta Cheese 70g', 1.95, 2.31, 10, '70g', 'pasta', true, '1 day'),
    ]
  },
  maggi_pazzta_masala_penne: {
    query: 'maggi penne', canonicalName: 'Maggi Pazzta (Masala)', category: 'Packaged Foods', icon: '🍝', prices: [
      p('coldstorage', 'Pazzta Masala 70g', 1.95, 2.31, 10, '70g', 'pasta', true, 'Same day'),
    ]
  },
  maaza_family_1_2l: {
    query: 'maaza 1.2l', canonicalName: 'Maaza Mango (1.2L Bottle)', category: 'Beverages', icon: '🥭', prices: [
      p('shengsiong', 'Maaza 1.2L Bottle', 2.68, 3.16, 13, '1.2 L', 'beverages', true, '4 hrs'),
    ]
  },
  slice_family_1_2l: {
    query: 'slice 1.2l', canonicalName: 'Slice Mango (1.2L Bottle)', category: 'Beverages', icon: '🥭', prices: [
      p('giant', 'Slice 1.2L Bottle', 2.68, 3.16, 13, '1.2 L', 'beverages', true, 'Same day'),
    ]
  },
  frooti_family_1_2l: {
    query: 'frooti 1.2l', canonicalName: 'Frooti Mango (1.2L Bottle)', category: 'Beverages', icon: '🥭', prices: [
      p('grabmart', 'Frooti 1.2L Bottle', 2.59, 3.07, 14, '1.2 L', 'beverages', true, '15 min'),
    ]
  },
  bingo_mad_angles_achaari: {
    query: 'achaari masti', canonicalName: 'Bingo! Mad Angles Achaari', category: 'Snacks', icon: '🍟', prices: [
      p('pandamart', 'Mad Angles Achaari', 1.86, 2.16, 0, '80g', 'snacks', true, '15 min'),
    ]
  },
  kurkure_puffcorn_cheese: {
    query: 'puffcorn cheese', canonicalName: 'Kurkure Puffcorn (Cheese)', category: 'Snacks', icon: '🍿', prices: [
      p('amazon_sg', 'Puffcorn Yummy Cheese', 1.86, 2.16, 0, '60g', 'snacks', true, '2 hrs'),
    ]
  },
  haldiram_gulab_jamun_tin: {
    query: 'gulab jamun tin', canonicalName: 'Haldiram Gulab Jamun (Tin)', category: 'Snacks', icon: '🍯', prices: [
      p('fairprice', 'Gulab Jamun 1kg Tin', 5.59, 6.35, 10, '1 kg', 'sweets', true, '2 hrs'),
    ]
  },
  haldiram_rasgulla_tin: {
    query: 'rasgulla tin', canonicalName: 'Haldiram Rasgulla (Tin)', category: 'Snacks', icon: '🍯', prices: [
      p('redmart', 'Rasgulla 1kg Tin', 5.59, 6.35, 10, '1 kg', 'sweets', true, '1 day'),
    ]
  },
  haldiram_soan_papdi_250g: {
    query: 'soan papdi', canonicalName: 'Haldiram Soan Papdi', category: 'Snacks', icon: '🍮', prices: [
      p('coldstorage', 'Soan Papdi 250g', 2.86, 3.44, 16, '250g', 'sweets', true, 'Same day'),
    ]
  },
  paper_boat_thandai_180ml: {
    query: 'paper boat thandai', canonicalName: 'Paper Boat Thandai', category: 'Beverages', icon: '🥛', prices: [
      p('shengsiong', 'Thandai 180ml Bottle', 2.14, 2.53, 12, '180ml', 'beverages', true, '4 hrs'),
    ]
  },
  paper_boat_badam_milk_180ml: {
    query: 'paper boat badam milk', canonicalName: 'Paper Boat Badam Milk', category: 'Beverages', icon: '🥛', prices: [
      p('giant', 'Badam Milk 180ml', 2.14, 2.53, 12, '180ml', 'beverages', true, 'Same day'),
    ]
  },
  paper_boat_rose_milk_180ml: {
    query: 'paper boat rose milk', canonicalName: 'Paper Boat Rose Milk', category: 'Beverages', icon: '🥛', prices: [
      p('grabmart', 'Rose Milk 180ml', 2.14, 2.53, 12, '180ml', 'beverages', true, '15 min'),
    ]
  },
  rajma_chitra_1kg_pack: {
    query: 'rajma chitra', canonicalName: 'Rajma Chitra (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('pandamart', 'Fortune Rajma Chitra', 4.5, 5.35, 15, '1 kg', 'pulses', true, '15 min'),
    ]
  },
  rajma_jammu_1kg_pack: {
    query: 'rajma jammu', canonicalName: 'Rajma Jammu (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('amazon_sg', 'Fortune Rajma Jammu', 4.86, 5.8, 16, '1 kg', 'pulses', true, '2 hrs'),
    ]
  },
  kabuli_chana_small_1kg: {
    query: 'kabuli chana small', canonicalName: 'Kabuli Chana (Small)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('fairprice', 'Fortune Kabuli 1kg', 4.32, 5.16, 16, '1 kg', 'pulses', true, '2 hrs'),
    ]
  },
  green_peas_dried_1kg: {
    query: 'green peas dried', canonicalName: 'Dried Green Peas', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('redmart', 'Organic Green Peas', 3.23, 4.07, 24, '1 kg', 'pulses', true, '1 day'),
    ]
  },
  white_peas_dried_1kg: {
    query: 'white peas dried', canonicalName: 'Dried White Peas', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('coldstorage', 'Organic White Peas', 3.05, 3.89, 26, '1 kg', 'pulses', true, 'Same day'),
    ]
  },
  haldiram_mini_samosa_200g: {
    query: 'mini samosa', canonicalName: 'Haldiram Mini Samosa', category: 'Snacks', icon: '🍿', prices: [
      p('shengsiong', 'Mini Samosa 200g', 2.68, 3.25, 18, '200g', 'snacks', true, '4 hrs'),
    ]
  },
  haldiram_kachori_200g: {
    query: 'kachori snack', canonicalName: 'Haldiram Kachori (Snack)', category: 'Snacks', icon: '🍿', prices: [
      p('giant', 'Kachori 200g Pack', 2.68, 3.25, 18, '200g', 'snacks', true, 'Same day'),
    ]
  },
  amul_gold_200ml_6pack: {
    query: 'amul gold 6 pack', canonicalName: 'Amul Gold (200ml x 6)', category: 'Dairy', icon: '🥛', prices: [
      p('grabmart', 'Amul Gold 6-Pack', 3.68, 3.98, 0, '1.2 L', 'milk', true, '15 min'),
    ]
  },
  amul_taaza_200ml_6pack: {
    query: 'amul taaza 6 pack', canonicalName: 'Amul Taaza (200ml x 6)', category: 'Dairy', icon: '🥛', prices: [
      p('pandamart', 'Amul Taaza 6-Pack', 3.46, 3.76, 0, '1.2 L', 'milk', true, '15 min'),
    ]
  },
  gowardhan_ghee_1l: {
    query: 'gowardhan ghee', canonicalName: 'Gowardhan Pure Ghee (1L)', category: 'Dairy', icon: '🧈', prices: [
      p('amazon_sg', 'Gowardhan Ghee 1L', 12.14, 13.62, 10, '1 L', 'ghee', true, '2 hrs'),
    ]
  },
  milk_food_ghee_1l: {
    query: 'milk food ghee', canonicalName: 'Milk Food Pure Ghee (1L)', category: 'Dairy', icon: '🧈', prices: [
      p('fairprice', 'Milk Food Ghee 1L', 11.77, 13.07, 9, '1 L', 'ghee', true, '2 hrs'),
    ]
  },
  heritage_cow_ghee_1l: {
    query: 'heritage ghee', canonicalName: 'Heritage Cow Ghee (1L)', category: 'Dairy', icon: '🧈', prices: [
      p('redmart', 'Heritage Ghee 1L', 12.32, 13.8, 10, '1 L', 'ghee', true, '1 day'),
    ]
  },
  coke_1l_bottle: {
    query: 'coke 1l', canonicalName: 'Coca Cola (1L Bottle)', category: 'Beverages', icon: '🥤', prices: [
      p('coldstorage', 'Coke 1L Bottle', 2.59, 2.89, 0, '1 L', 'soft drink', true, 'Same day'),
    ]
  },
  pepsi_1l_bottle: {
    query: 'pepsi 1l', canonicalName: 'Pepsi (1L Bottle)', category: 'Beverages', icon: '🥤', prices: [
      p('shengsiong', 'Pepsi 1L Bottle', 2.59, 2.89, 0, '1 L', 'soft drink', true, '4 hrs'),
    ]
  },
  sprite_1l_bottle: {
    query: 'sprite 1l', canonicalName: 'Sprite (1L Bottle)', category: 'Beverages', icon: '🥤', prices: [
      p('giant', 'Sprite 1L Bottle', 2.59, 2.89, 0, '1 L', 'soft drink', true, 'Same day'),
    ]
  },
  thums_up_1l_bottle: {
    query: 'thums up 1l', canonicalName: 'Thums Up (1L Bottle)', category: 'Beverages', icon: '🥤', prices: [
      p('grabmart', 'Thums Up 1L Bottle', 2.59, 2.89, 0, '1 L', 'soft drink', true, '15 min'),
    ]
  },
  haldiram_murukku_200g: {
    query: 'murukku', canonicalName: 'Haldiram Murukku', category: 'Snacks', icon: '🍿', prices: [
      p('pandamart', 'Murukku 200g Pack', 2.68, 3.25, 18, '200g', 'snacks', true, '15 min'),
    ]
  },
  haldiram_banana_chips_200g: {
    query: 'banana chips', canonicalName: 'Haldiram Banana Chips', category: 'Snacks', icon: '🍿', prices: [
      p('amazon_sg', 'Banana Chips 200g', 2.86, 3.44, 16, '200g', 'snacks', true, '2 hrs'),
    ]
  },
  haldiram_tapioca_chips_200g: {
    query: 'tapioca chips', canonicalName: 'Haldiram Tapioca Chips', category: 'Snacks', icon: '🍿', prices: [
      p('fairprice', 'Tapioca Chips 200g', 2.86, 3.44, 16, '200g', 'snacks', true, '2 hrs'),
    ]
  },
  mccain_aloo_tikki_1_5kg: {
    query: 'aloo tikki 1.5kg', canonicalName: 'McCain Aloo Tikki (Mega)', category: 'Frozen Foods', icon: '🧊', prices: [
      p('redmart', 'McCain Tikki 1.5kg', 8.5, 9.98, 14, '1.5 kg', 'frozen', true, '1 day'),
    ]
  },
  mccain_peri_peri_fries_420g: {
    query: 'peri peri fries', canonicalName: 'McCain Peri Peri Fries', category: 'Frozen Foods', icon: '🧊', prices: [
      p('coldstorage', 'McCain Peri Peri 420g', 4.5, 5.35, 15, '420g', 'frozen', true, 'Same day'),
    ]
  },
  masoor_whole_1kg_pack: {
    query: 'masoor whole', canonicalName: 'Masoor Whole (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('shengsiong', 'Fortune Masoor 1kg', 3.77, 4.62, 19, '1 kg', 'pulses', true, '4 hrs'),
    ]
  },
  chana_whole_1kg_pack: {
    query: 'chana whole', canonicalName: 'Chana Whole (Brown)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('giant', 'Fortune Chana 1kg', 3.59, 4.44, 20, '1 kg', 'pulses', true, 'Same day'),
    ]
  },
  sting_energy_drink_250ml: {
    query: 'sting drink', canonicalName: 'Sting Energy Drink (250ml)', category: 'Beverages', icon: '⚡', prices: [
      p('grabmart', 'Sting Energy 250ml', 1.86, 2.16, 0, '250ml', 'beverages', true, '15 min'),
    ]
  },
  monster_energy_drink_350ml: {
    query: 'monster drink', canonicalName: 'Monster Energy (350ml)', category: 'Beverages', icon: '⚡', prices: [
      p('pandamart', 'Monster Energy 350ml', 3.5, 3.8, 0, '350ml', 'beverages', true, '15 min'),
    ]
  },
  red_bull_sugarfree_250ml: {
    query: 'red bull sugarfree', canonicalName: 'Red Bull Sugarfree', category: 'Beverages', icon: '⚡', prices: [
      p('amazon_sg', 'Red Bull SF 250ml', 3.77, 4.07, 0, '250ml', 'beverages', true, '2 hrs'),
    ]
  },
  real_activ_orange_1l: {
    query: 'real activ orange', canonicalName: 'Real Activ Orange (1L)', category: 'Beverages', icon: '🧃', prices: [
      p('fairprice', 'Real Activ Orange 1L', 3.77, 4.44, 14, '1 L', 'beverages', true, '2 hrs'),
    ]
  },
  real_activ_apple_1l: {
    query: 'real activ apple', canonicalName: 'Real Activ Apple (1L)', category: 'Beverages', icon: '🧃', prices: [
      p('redmart', 'Real Activ Apple 1L', 3.77, 4.44, 14, '1 L', 'beverages', true, '1 day'),
    ]
  },
  real_activ_mixed_fruit_1l: {
    query: 'real activ mixed', canonicalName: 'Real Activ Mixed Fruit', category: 'Beverages', icon: '🧃', prices: [
      p('coldstorage', 'Real Activ Mixed 1L', 3.77, 4.44, 14, '1 L', 'beverages', true, 'Same day'),
    ]
  },
  haldiram_diet_mix_200g: {
    query: 'diet mix', canonicalName: 'Haldiram Diet Mix', category: 'Snacks', icon: '🍿', prices: [
      p('shengsiong', 'Diet Mix 200g Pack', 2.68, 3.25, 18, '200g', 'snacks', true, '4 hrs'),
    ]
  },
  haldiram_lite_chiwda_200g: {
    query: 'lite chiwda', canonicalName: 'Haldiram Lite Chiwda', category: 'Snacks', icon: '🍿', prices: [
      p('giant', 'Lite Chiwda 200g', 2.68, 3.25, 18, '200g', 'snacks', true, 'Same day'),
    ]
  },
  haldiram_mini_bhakarwadi_200g: {
    query: 'bhakarwadi', canonicalName: 'Haldiram Mini Bhakarwadi', category: 'Snacks', icon: '🍿', prices: [
      p('grabmart', 'Mini Bhakarwadi 200g', 2.68, 3.25, 18, '200g', 'snacks', true, '15 min'),
    ]
  },
  kelloggs_cornflakes_almond_honey: {
    query: 'cornflakes almond', canonicalName: 'Corn Flakes (Almond Honey)', category: 'Packaged Foods', icon: '🥣', prices: [
      p('pandamart', 'Kelloggs Almond Honey', 4.86, 5.62, 12, '300g', 'cereal', true, '15 min'),
    ]
  },
  kelloggs_cornflakes_strawberry: {
    query: 'cornflakes strawberry', canonicalName: 'Corn Flakes (Strawberry)', category: 'Packaged Foods', icon: '🥣', prices: [
      p('amazon_sg', 'Kelloggs Strawberry', 4.68, 5.35, 10, '300g', 'cereal', true, '2 hrs'),
    ]
  },
  arhar_dal_1kg_premium: {
    query: 'arhar dal 1kg', canonicalName: 'Premium Arhar Dal (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('fairprice', 'Fortune Arhar 1kg', 4.68, 5.62, 16, '1 kg', 'pulses', true, '2 hrs'),
    ]
  },
  masoor_dal_wash_1kg: {
    query: 'masoor dal wash', canonicalName: 'Masoor Dal Wash (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('redmart', 'Fortune Masoor Wash', 3.95, 4.8, 18, '1 kg', 'pulses', true, '1 day'),
    ]
  },
  moong_chilka_dal_1kg: {
    query: 'moong chilka 1kg', canonicalName: 'Moong Chilka Dal (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('coldstorage', 'Fortune Moong Chilka', 4.5, 5.35, 15, '1 kg', 'pulses', true, 'Same day'),
    ]
  },
  nescafe_sunrise_200g: {
    query: 'nescafe sunrise', canonicalName: 'Nescafe Sunrise (200g)', category: 'Beverages', icon: '☕', prices: [
      p('shengsiong', 'Nescafe Sunrise 200g', 8.5, 9.98, 14, '200g', 'coffee', true, '4 hrs'),
    ]
  },
  continental_xtra_200g: {
    query: 'continental coffee', canonicalName: 'Continental Xtra Coffee', category: 'Beverages', icon: '☕', prices: [
      p('giant', 'Continental Xtra 200g', 7.77, 9.07, 13, '200g', 'coffee', true, 'Same day'),
    ]
  },
  davidoff_espresso_57: {
    query: 'davidoff espresso', canonicalName: 'Davidoff Espresso 57', category: 'Beverages', icon: '☕', prices: [
      p('grabmart', 'Davidoff Espresso 100g', 11.41, 13.62, 16, '100g', 'coffee', true, '15 min'),
    ]
  },
  pringles_original_107g: {
    query: 'pringles original', canonicalName: 'Pringles Original', category: 'Snacks', icon: '🍟', prices: [
      p('pandamart', 'Pringles Original', 3.41, 3.71, 0, '107g', 'chips', true, '15 min'),
    ]
  },
  pringles_sour_cream_107g: {
    query: 'pringles sour cream', canonicalName: 'Pringles Sour Cream', category: 'Snacks', icon: '🍟', prices: [
      p('amazon_sg', 'Pringles Sour Cream', 3.41, 3.71, 0, '107g', 'chips', true, '2 hrs'),
    ]
  },
  pringles_desi_masala_107g: {
    query: 'pringles masala', canonicalName: 'Pringles Desi Masala', category: 'Snacks', icon: '🍟', prices: [
      p('fairprice', 'Pringles Desi Masala', 3.41, 3.71, 0, '107g', 'chips', true, '2 hrs'),
    ]
  },
  epigamia_greek_natural: {
    query: 'epigamia natural', canonicalName: 'Epigamia Greek Yogurt (Natural)', category: 'Dairy', icon: '🍨', prices: [
      p('redmart', 'Epigamia Natural 90g', 2.32, 2.71, 10, '90g', 'yogurt', true, '1 day'),
    ]
  },
  epigamia_greek_blueberry: {
    query: 'epigamia blueberry', canonicalName: 'Epigamia Greek (Blueberry)', category: 'Dairy', icon: '🍨', prices: [
      p('coldstorage', 'Epigamia Blueberry 90g', 2.59, 2.98, 7, '90g', 'yogurt', true, 'Same day'),
    ]
  },
  coke_can_250ml: {
    query: 'coke can 250ml', canonicalName: 'Coke (250ml Can)', category: 'Beverages', icon: '🥤', prices: [
      p('shengsiong', 'Coke Can 250ml', 2.14, 2.44, 0, '250ml', 'soft drink', true, '4 hrs'),
    ]
  },
  pepsi_can_250ml: {
    query: 'pepsi can 250ml', canonicalName: 'Pepsi (250ml Can)', category: 'Beverages', icon: '🥤', prices: [
      p('giant', 'Pepsi Can 250ml', 2.14, 2.44, 0, '250ml', 'soft drink', true, 'Same day'),
    ]
  },
  paper_boat_kokum_200ml: {
    query: 'kokum drink', canonicalName: 'Paper Boat Kokum', category: 'Beverages', icon: '🥤', prices: [
      p('grabmart', 'Paper Boat Kokum', 1.86, 2.16, 0, '200ml', 'beverages', true, '15 min'),
    ]
  },
  bajra_atta_1kg_pack: {
    query: 'bajra atta', canonicalName: 'Bajra Atta (1kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('pandamart', 'Organic Bajra Atta', 3.05, 3.8, 22, '1 kg', 'flour', true, '15 min'),
    ]
  },
  jowar_atta_1kg_pack: {
    query: 'jowar atta', canonicalName: 'Jowar Atta (1kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('amazon_sg', 'Organic Jowar Atta', 3.23, 4.07, 24, '1 kg', 'flour', true, '2 hrs'),
    ]
  },
  ragi_atta_1kg_pack: {
    query: 'ragi atta', canonicalName: 'Ragi Atta (1kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('fairprice', 'Organic Ragi Atta', 3.23, 4.07, 24, '1 kg', 'flour', true, '2 hrs'),
    ]
  },
  makka_atta_1kg_pack: {
    query: 'makka atta', canonicalName: 'Maize Atta (1kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('redmart', 'Fortune Makka Atta', 2.68, 3.25, 18, '1 kg', 'flour', true, '1 day'),
    ]
  },
  haldiram_navratan_mix_1kg: {
    query: 'navratan 1kg', canonicalName: 'Haldiram Navratan (1kg)', category: 'Snacks', icon: '🍿', prices: [
      p('coldstorage', 'Navratan 1kg Mega', 5.95, 6.89, 12, '1 kg', 'snacks', true, 'Same day'),
    ]
  },
  haldiram_khatta_meetha_1kg: {
    query: 'khatta meetha 1kg', canonicalName: 'Haldiram Khatta Meetha (1kg)', category: 'Snacks', icon: '🍿', prices: [
      p('shengsiong', 'Khatta Meetha 1kg', 5.95, 6.89, 12, '1 kg', 'snacks', true, '4 hrs'),
    ]
  },
  real_activ_fiber_orange: {
    query: 'activ fiber orange', canonicalName: 'Real Activ Fiber + Orange', category: 'Beverages', icon: '🧃', prices: [
      p('giant', 'Real Activ Fiber 1L', 4.14, 4.98, 17, '1 L', 'beverages', true, 'Same day'),
    ]
  },
  real_activ_fiber_mango: {
    query: 'activ fiber mango', canonicalName: 'Real Activ Fiber + Mango', category: 'Beverages', icon: '🧃', prices: [
      p('grabmart', 'Real Activ Fiber 1L', 4.14, 4.98, 17, '1 L', 'beverages', true, '15 min'),
    ]
  },
  green_moong_split_1kg: {
    query: 'moong split 1kg', canonicalName: 'Green Moong Split (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('pandamart', 'Fortune Moong Split', 4.68, 5.62, 16, '1 kg', 'pulses', true, '15 min'),
    ]
  },
  black_urad_split_1kg: {
    query: 'urad split 1kg', canonicalName: 'Black Urad Split (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('amazon_sg', 'Fortune Urad Split', 4.68, 5.62, 16, '1 kg', 'pulses', true, '2 hrs'),
    ]
  },
  rajma_red_1kg_pack: {
    query: 'rajma red', canonicalName: 'Rajma Red (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('fairprice', 'Fortune Rajma Red', 4.86, 5.8, 16, '1 kg', 'pulses', true, '2 hrs'),
    ]
  },
  kabuli_chana_large_1kg: {
    query: 'kabuli chana large', canonicalName: 'Kabuli Chana (Large)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('redmart', 'Fortune Kabuli Large', 5.05, 6.16, 19, '1 kg', 'pulses', true, '1 day'),
    ]
  },
  mother_dairy_paneer_400g: {
    query: 'mother dairy paneer 400g', canonicalName: 'Mother Dairy Paneer (400g)', category: 'Dairy', icon: '🥛', prices: [
      p('coldstorage', 'Mother Dairy 400g', 4.86, 5.62, 12, '400g', 'paneer', true, 'Same day'),
    ]
  },
  amul_malai_paneer_400g: {
    query: 'amul paneer 400g', canonicalName: 'Amul Malai Paneer (400g)', category: 'Dairy', icon: '🥛', prices: [
      p('shengsiong', 'Amul Malai 400g', 5.05, 5.8, 11, '400g', 'paneer', true, '4 hrs'),
    ]
  },
  milky_mist_paneer_400g: {
    query: 'milky mist paneer 400g', canonicalName: 'Milky Mist Paneer (400g)', category: 'Dairy', icon: '🥛', prices: [
      p('giant', 'Milky Mist 400g', 4.86, 5.62, 12, '400g', 'paneer', true, 'Same day'),
    ]
  },
  coke_300ml_bottle: {
    query: 'coke 300ml', canonicalName: 'Coca Cola (300ml)', category: 'Beverages', icon: '🥤', prices: [
      p('grabmart', 'Coke 300ml Bottle', 1.95, 2.25, 0, '300ml', 'soft drink', true, '15 min'),
    ]
  },
  pepsi_300ml_bottle: {
    query: 'pepsi 300ml', canonicalName: 'Pepsi (300ml)', category: 'Beverages', icon: '🥤', prices: [
      p('pandamart', 'Pepsi 300ml Bottle', 1.95, 2.25, 0, '300ml', 'soft drink', true, '15 min'),
    ]
  },
  sprite_300ml_bottle: {
    query: 'sprite 300ml', canonicalName: 'Sprite (300ml)', category: 'Beverages', icon: '🥤', prices: [
      p('amazon_sg', 'Sprite 300ml Bottle', 1.95, 2.25, 0, '300ml', 'soft drink', true, '2 hrs'),
    ]
  },
  seven_up_2l_family: {
    query: '7up 2l', canonicalName: '7Up (2.25L Family Pack)', category: 'Beverages', icon: '🥤', prices: [
      p('fairprice', '7Up 2.25L Bottle', 3.23, 3.53, 0, '2.25 L', 'soft drink', true, '2 hrs'),
    ]
  },
  mountain_dew_2l_family: {
    query: 'mountain dew 2l', canonicalName: 'Mountain Dew (2.25L)', category: 'Beverages', icon: '🥤', prices: [
      p('redmart', 'Dew 2.25L Bottle', 3.23, 3.53, 0, '2.25 L', 'soft drink', true, '1 day'),
    ]
  },
  mirinda_2l_family: {
    query: 'mirinda 2l', canonicalName: 'Mirinda (2.25L)', category: 'Beverages', icon: '🥤', prices: [
      p('coldstorage', 'Mirinda 2.25L Bottle', 3.23, 3.53, 0, '2.25 L', 'soft drink', true, 'Same day'),
    ]
  },
  mccain_french_fries_1_5kg: {
    query: 'french fries 1.5kg', canonicalName: 'McCain Fries (Mega Pack)', category: 'Frozen Foods', icon: '🧊', prices: [
      p('shengsiong', 'McCain Fries 1.5kg', 7.77, 8.98, 12, '1.5 kg', 'frozen', true, '4 hrs'),
    ]
  },
  mccain_veggie_fingers_1kg: {
    query: 'veggie fingers 1kg', canonicalName: 'McCain Fingers (1kg)', category: 'Frozen Foods', icon: '🧊', prices: [
      p('giant', 'McCain Fingers 1kg', 6.68, 7.8, 14, '1 kg', 'frozen', true, 'Same day'),
    ]
  },
  haldiram_bhakarwadi_1kg: {
    query: 'bhakarwadi 1kg', canonicalName: 'Haldiram Bhakarwadi (1kg)', category: 'Snacks', icon: '🍿', prices: [
      p('grabmart', 'Bhakarwadi 1kg Mega', 5.95, 6.89, 12, '1 kg', 'snacks', true, '15 min'),
    ]
  },
  haldiram_diet_mix_1kg: {
    query: 'diet mix 1kg', canonicalName: 'Haldiram Diet Mix (1kg)', category: 'Snacks', icon: '🍿', prices: [
      p('pandamart', 'Diet Mix 1kg Mega', 5.95, 6.89, 12, '1 kg', 'snacks', true, '15 min'),
    ]
  },
  real_activ_fiber_mixed: {
    query: 'activ fiber mixed', canonicalName: 'Real Activ Fiber + Mixed', category: 'Beverages', icon: '🧃', prices: [
      p('amazon_sg', 'Real Activ Fiber 1L', 4.14, 4.98, 17, '1 L', 'beverages', true, '2 hrs'),
    ]
  },
  real_activ_fiber_apple: {
    query: 'activ fiber apple', canonicalName: 'Real Activ Fiber + Apple', category: 'Beverages', icon: '🧃', prices: [
      p('fairprice', 'Real Activ Fiber 1L', 4.14, 4.98, 17, '1 L', 'beverages', true, '2 hrs'),
    ]
  },
  tata_sampann_moong_dal_1kg: {
    query: 'tata moong dal', canonicalName: 'Tata Sampann Moong Dal', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('redmart', 'Tata Moong Dal 1kg', 4.5, 5.35, 15, '1 kg', 'pulses', true, '1 day'),
    ]
  },
  tata_sampann_toor_dal_1kg: {
    query: 'tata toor dal', canonicalName: 'Tata Sampann Toor Dal', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('coldstorage', 'Tata Toor Dal 1kg', 4.68, 5.62, 16, '1 kg', 'pulses', true, 'Same day'),
    ]
  },
  tata_sampann_urad_dal_1kg: {
    query: 'tata urad dal', canonicalName: 'Tata Sampann Urad Dal', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('shengsiong', 'Tata Urad Dal 1kg', 4.68, 5.62, 16, '1 kg', 'pulses', true, '4 hrs'),
    ]
  },
  maggi_oats_noodles: {
    query: 'maggi oats', canonicalName: 'Maggi Nutrilicious Oats', category: 'Packaged Foods', icon: '🍜', prices: [
      p('giant', 'Maggi Oats 4-Pack', 3.23, 3.8, 13, '280g', 'noodles', true, 'Same day'),
    ]
  },
  lipton_iced_tea_lemon: {
    query: 'iced tea lemon', canonicalName: 'Lipton Iced Tea (Lemon)', category: 'Beverages', icon: '🍹', prices: [
      p('grabmart', 'Lipton Lemon 250ml', 2.14, 2.44, 0, '250ml', 'beverages', true, '15 min'),
    ]
  },
  lipton_iced_tea_peach: {
    query: 'iced tea peach', canonicalName: 'Lipton Iced Tea (Peach)', category: 'Beverages', icon: '🍹', prices: [
      p('pandamart', 'Lipton Peach 250ml', 2.14, 2.44, 0, '250ml', 'beverages', true, '15 min'),
    ]
  },
  lipton_iced_tea_berry: {
    query: 'iced tea berry', canonicalName: 'Lipton Iced Tea (Berry)', category: 'Beverages', icon: '🍹', prices: [
      p('amazon_sg', 'Lipton Berry 250ml', 2.14, 2.44, 0, '250ml', 'beverages', true, '2 hrs'),
    ]
  },
  real_activ_fiber_pomegranate: {
    query: 'activ fiber pomegranate', canonicalName: 'Real Activ Fiber + Pome', category: 'Beverages', icon: '🧃', prices: [
      p('fairprice', 'Real Activ Pome 1L', 4.14, 4.98, 17, '1 L', 'beverages', true, '2 hrs'),
    ]
  },
  real_activ_fiber_peach: {
    query: 'activ fiber peach', canonicalName: 'Real Activ Fiber + Peach', category: 'Beverages', icon: '🧃', prices: [
      p('redmart', 'Real Activ Peach 1L', 4.14, 4.98, 17, '1 L', 'beverages', true, '1 day'),
    ]
  },
  britannia_maska_chaska: {
    query: 'maska chaska', canonicalName: 'Britannia 50-50 Maska Chaska', category: 'Snacks', icon: '🍪', prices: [
      p('coldstorage', 'Maska Chaska 200g', 2.14, 2.53, 12, '200g', 'biscuits', true, 'Same day'),
    ]
  },
  britannia_monaco_pizza: {
    query: 'monaco pizza', canonicalName: 'Britannia Monaco Pizza', category: 'Snacks', icon: '🍪', prices: [
      p('shengsiong', 'Monaco Pizza 200g', 2.14, 2.53, 12, '200g', 'biscuits', true, '4 hrs'),
    ]
  },
  nestle_a_plus_curd_1kg: {
    query: 'nestle curd', canonicalName: 'Nestle A+ Curd (1kg)', category: 'Dairy', icon: '🥛', prices: [
      p('giant', 'Nestle A+ Curd 1kg', 3.23, 3.8, 13, '1 kg', 'curd', true, 'Same day'),
    ]
  },
  saffola_masala_oats_peppy_400g: {
    query: 'peppy tomato oats 400g', canonicalName: 'Saffola Masala Oats (Peppy)', category: 'Packaged Foods', icon: '🥣', prices: [
      p('grabmart', 'Saffola Peppy 400g', 4.5, 5.35, 15, '400g', 'oats', true, '15 min'),
    ]
  },
  saffola_masala_oats_classic_400g: {
    query: 'classic masala oats 400g', canonicalName: 'Saffola Masala Oats (Classic)', category: 'Packaged Foods', icon: '🥣', prices: [
      p('pandamart', 'Saffola Classic 400g', 4.5, 5.35, 15, '400g', 'oats', true, '15 min'),
    ]
  },
  saffola_masala_oats_veggie_400g: {
    query: 'veggie twist oats 400g', canonicalName: 'Saffola Masala Oats (Veggie)', category: 'Packaged Foods', icon: '🥣', prices: [
      p('amazon_sg', 'Saffola Veggie 400g', 4.5, 5.35, 15, '400g', 'oats', true, '2 hrs'),
    ]
  },
  coke_mini_can_150ml: {
    query: 'coke mini can', canonicalName: 'Coke (150ml Mini Can)', category: 'Beverages', icon: '🥤', prices: [
      p('fairprice', 'Coke Mini 150ml', 1.86, 2.16, 0, '150ml', 'soft drink', true, '2 hrs'),
    ]
  },
  kelloggs_chocos_moons: {
    query: 'chocos moons', canonicalName: 'Chocos (Moons & Stars)', category: 'Packaged Foods', icon: '🥣', prices: [
      p('redmart', 'Chocos Moons 300g', 4.86, 5.62, 12, '300g', 'cereal', true, '1 day'),
    ]
  },
  kelloggs_chocos_fills: {
    query: 'chocos fills', canonicalName: 'Chocos Fills (300g)', category: 'Packaged Foods', icon: '🥣', prices: [
      p('coldstorage', 'Chocos Fills 300g', 5.05, 5.8, 11, '300g', 'cereal', true, 'Same day'),
    ]
  },
  real_activ_fiber_grape: {
    query: 'activ fiber grape', canonicalName: 'Real Activ Fiber + Grape', category: 'Beverages', icon: '🧃', prices: [
      p('shengsiong', 'Real Activ Grape 1L', 4.14, 4.98, 17, '1 L', 'beverages', true, '4 hrs'),
    ]
  },
  real_activ_fiber_apricot: {
    query: 'activ fiber apricot', canonicalName: 'Real Activ Fiber + Apricot', category: 'Beverages', icon: '🧃', prices: [
      p('giant', 'Real Activ Apricot 1L', 4.14, 4.98, 17, '1 L', 'beverages', true, 'Same day'),
    ]
  },
  amul_whipping_cream_250ml: {
    query: 'whipping cream', canonicalName: 'Amul Whipping Cream', category: 'Dairy', icon: '🥛', prices: [
      p('grabmart', 'Amul Whipping 250ml', 3.77, 4.35, 10, '250ml', 'cream', true, '15 min'),
    ]
  },
  milky_mist_greek_natural: {
    query: 'milky mist greek', canonicalName: 'Milky Mist Greek Yogurt', category: 'Dairy', icon: '🍨', prices: [
      p('pandamart', 'Milky Mist Greek 100g', 2.5, 2.89, 8, '100g', 'yogurt', true, '15 min'),
    ]
  },
  tata_sampann_toor_dal_2kg: {
    query: 'tata toor dal 2kg', canonicalName: 'Tata Sampann Toor (2kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('amazon_sg', 'Tata Toor Dal 2kg', 7.77, 9.25, 15, '2 kg', 'pulses', true, '2 hrs'),
    ]
  },
  tata_sampann_moong_dal_2kg: {
    query: 'tata moong dal 2kg', canonicalName: 'Tata Sampann Moong (2kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('fairprice', 'Tata Moong Dal 2kg', 7.41, 8.89, 16, '2 kg', 'pulses', true, '2 hrs'),
    ]
  },
  tata_sampann_urad_dal_2kg: {
    query: 'tata urad dal 2kg', canonicalName: 'Tata Sampann Urad (2kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('redmart', 'Tata Urad Dal 2kg', 7.77, 9.25, 15, '2 kg', 'pulses', true, '1 day'),
    ]
  },
  coke_1_75l_family: {
    query: 'coke 1.75l', canonicalName: 'Coca Cola (1.75L)', category: 'Beverages', icon: '🥤', prices: [
      p('coldstorage', 'Coke 1.75L Bottle', 2.95, 3.25, 0, '1.75 L', 'soft drink', true, 'Same day'),
    ]
  },
  pepsi_1_75l_family: {
    query: 'pepsi 1.75l', canonicalName: 'Pepsi (1.75L)', category: 'Beverages', icon: '🥤', prices: [
      p('shengsiong', 'Pepsi 1.75L Bottle', 2.95, 3.25, 0, '1.75 L', 'soft drink', true, '4 hrs'),
    ]
  },
  haldiram_moong_dal_1kg_mega: {
    query: 'moong dal 1kg snack', canonicalName: 'Haldiram Moong Dal (1kg)', category: 'Snacks', icon: '🍿', prices: [
      p('giant', 'Moong Dal 1kg Mega', 5.59, 6.53, 13, '1 kg', 'snacks', true, 'Same day'),
    ]
  },
  amul_lassi_rose_250ml: {
    query: 'amul rose lassi', canonicalName: 'Amul Lassi (Rose)', category: 'Beverages', icon: '🥛', prices: [
      p('grabmart', 'Amul Rose Lassi', 1.95, 2.25, 0, '250ml', 'beverages', true, '15 min'),
    ]
  },
  amul_lassi_mango_250ml: {
    query: 'amul mango lassi', canonicalName: 'Amul Lassi (Mango)', category: 'Beverages', icon: '🥛', prices: [
      p('pandamart', 'Amul Mango Lassi', 1.95, 2.25, 0, '250ml', 'beverages', true, '15 min'),
    ]
  },
  mother_dairy_masala_chach: {
    query: 'masala chach', canonicalName: 'Mother Dairy Masala Chach', category: 'Beverages', icon: '🥛', prices: [
      p('amazon_sg', 'Masala Chach 200ml', 1.77, 2.07, 0, '200ml', 'beverages', true, '2 hrs'),
    ]
  },
  mother_dairy_tadka_chach: {
    query: 'tadka chach', canonicalName: 'Mother Dairy Tadka Chach', category: 'Beverages', icon: '🥛', prices: [
      p('fairprice', 'Tadka Chach 200ml', 1.77, 2.07, 0, '200ml', 'beverages', true, '2 hrs'),
    ]
  },
  coke_zero_can_300ml: {
    query: 'coke zero can', canonicalName: 'Coke Zero (300ml Can)', category: 'Beverages', icon: '🥤', prices: [
      p('redmart', 'Coke Zero 300ml Can', 2.23, 2.53, 0, '300ml', 'soft drink', true, '1 day'),
    ]
  },
  pepsi_black_can_300ml: {
    query: 'pepsi black can', canonicalName: 'Pepsi Black (300ml Can)', category: 'Beverages', icon: '🥤', prices: [
      p('coldstorage', 'Pepsi Black 300ml Can', 2.23, 2.53, 0, '300ml', 'soft drink', true, 'Same day'),
    ]
  },
  real_activ_fiber_peach_200ml: {
    query: 'activ fiber peach 200ml', canonicalName: 'Real Activ Fiber (Peach)', category: 'Beverages', icon: '🧃', prices: [
      p('shengsiong', 'Activ Peach 200ml', 2.05, 2.35, 0, '200ml', 'beverages', true, '4 hrs'),
    ]
  },
  real_activ_fiber_apple_200ml: {
    query: 'activ fiber apple 200ml', canonicalName: 'Real Activ Fiber (Apple)', category: 'Beverages', icon: '🧃', prices: [
      p('giant', 'Activ Apple 200ml', 2.05, 2.35, 0, '200ml', 'beverages', true, 'Same day'),
    ]
  },
  tata_sampann_toor_dal_5kg: {
    query: 'tata toor dal 5kg', canonicalName: 'Tata Sampann Toor (5kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('grabmart', 'Tata Toor Dal 5kg', 16.5, 19.07, 13, '5 kg', 'pulses', true, '15 min'),
    ]
  },
  tata_sampann_moong_dal_5kg: {
    query: 'tata moong dal 5kg', canonicalName: 'Tata Sampann Moong (5kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('pandamart', 'Tata Moong Dal 5kg', 15.77, 18.16, 12, '5 kg', 'pulses', true, '15 min'),
    ]
  },
  tata_sampann_urad_dal_5kg: {
    query: 'tata urad dal 5kg', canonicalName: 'Tata Sampann Urad (5kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('amazon_sg', 'Tata Urad Dal 5kg', 16.5, 19.07, 13, '5 kg', 'pulses', true, '2 hrs'),
    ]
  },
  amul_butter_500g_pack: {
    query: 'amul butter 500g', canonicalName: 'Amul Butter (500g)', category: 'Dairy', icon: '🧈', prices: [
      p('fairprice', 'Amul Butter 500g', 6.14, 6.8, 7, '500g', 'butter', true, '2 hrs'),
    ]
  },
  amul_butter_100g_pack: {
    query: 'amul butter 100g', canonicalName: 'Amul Butter (100g)', category: 'Dairy', icon: '🧈', prices: [
      p('redmart', 'Amul Butter 100g', 2.52, 2.89, 6, '100g', 'butter', true, '1 day'),
    ]
  },
  amul_garlic_herbs_butter: {
    query: 'garlic butter', canonicalName: 'Amul Garlic & Herbs', category: 'Dairy', icon: '🧈', prices: [
      p('coldstorage', 'Garlic Butter 100g', 2.68, 3.07, 7, '100g', 'butter', true, 'Same day'),
    ]
  },
  nescafe_classic_glass_jar: {
    query: 'nescafe classic jar', canonicalName: 'Nescafe Classic (Jar)', category: 'Beverages', icon: '☕', prices: [
      p('shengsiong', 'Nescafe Jar 100g', 7.77, 8.71, 9, '100g', 'coffee', true, '4 hrs'),
    ]
  },
  bru_instant_glass_jar: {
    query: 'bru instant jar', canonicalName: 'Bru Instant (Jar)', category: 'Beverages', icon: '☕', prices: [
      p('giant', 'Bru Instant Jar 100g', 6.68, 7.62, 10, '100g', 'coffee', true, 'Same day'),
    ]
  },
  knorr_hot_sour_soup: {
    query: 'knorr hot sour', canonicalName: 'Knorr Hot & Sour Soup', category: 'Packaged Foods', icon: '🥣', prices: [
      p('grabmart', 'Knorr Hot Sour 45g', 2.5, 2.98, 15, '45g', 'soup', true, '15 min'),
    ]
  },
  knorr_sweet_corn_soup: {
    query: 'knorr sweet corn', canonicalName: 'Knorr Sweet Corn Soup', category: 'Packaged Foods', icon: '🥣', prices: [
      p('pandamart', 'Knorr Sweet Corn 45g', 2.5, 2.98, 15, '45g', 'soup', true, '15 min'),
    ]
  },
  tata_sampann_masoor_dal: {
    query: 'tata masoor dal', canonicalName: 'Tata Sampann Masoor', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('amazon_sg', 'Tata Masoor 1kg', 4.14, 4.98, 17, '1 kg', 'pulses', true, '2 hrs'),
    ]
  },

  sprite_bottle_250ml: {
    query: 'sprite 250ml bottle', canonicalName: 'Sprite (250ml)', category: 'Beverages', icon: '🥤', prices: [
      p('fairprice', 'Sprite 250ml Bottle', 1.86, 2.16, 0, '250ml', 'soft drink', true, '2 hrs'),
    ]
  },
  thums_up_bottle_250ml: {
    query: 'thums up 250ml bottle', canonicalName: 'Thums Up (250ml)', category: 'Beverages', icon: '🥤', prices: [
      p('redmart', 'Thums Up 250ml Bottle', 1.86, 2.16, 0, '250ml', 'soft drink', true, '1 day'),
    ]
  },
  haldiram_soan_papdi_500g: {
    query: 'soan papdi 500g', canonicalName: 'Haldiram Soan Papdi (Large)', category: 'Snacks', icon: '🍮', prices: [
      p('coldstorage', 'Soan Papdi 500g Pack', 4.14, 4.98, 17, '500g', 'sweets', true, 'Same day'),
    ]
  },

  b_natural_guava_1l: {
    query: 'b natural guava', canonicalName: 'B Natural Guava (1L)', category: 'Beverages', icon: '🧃', prices: [
      p('shengsiong', 'B Natural Guava 1L', 3.59, 4.16, 11, '1 L', 'beverages', true, '4 hrs'),
    ]
  },
  amul_cheese_slices_5pc: {
    query: 'cheese slices 100g', canonicalName: 'Amul Cheese Slices (5pc)', category: 'Dairy', icon: '🧀', prices: [
      p('giant', 'Amul Slices 100g', 2.86, 3.35, 11, '100g', 'cheese', true, 'Same day'),
    ]
  },
  amul_cheese_slices_10pc: {
    query: 'cheese slices 200g', canonicalName: 'Amul Cheese Slices (10pc)', category: 'Dairy', icon: '🧀', prices: [
      p('grabmart', 'Amul Slices 200g', 4.14, 4.71, 9, '200g', 'cheese', true, '15 min'),
    ]
  },
  amul_cheese_slices_20pc: {
    query: 'cheese slices 400g', canonicalName: 'Amul Cheese Slices (20pc)', category: 'Dairy', icon: '🧀', prices: [
      p('pandamart', 'Amul Slices 400g', 6.68, 7.44, 8, '400g', 'cheese', true, '15 min'),
    ]
  },
  knorr_manchow_soup: {
    query: 'knorr manchow', canonicalName: 'Knorr Manchow Soup', category: 'Packaged Foods', icon: '🥣', prices: [
      p('amazon_sg', 'Knorr Manchow 45g', 2.5, 2.98, 15, '45g', 'soup', true, '2 hrs'),
    ]
  },
  knorr_tomato_soup: {
    query: 'knorr tomato soup', canonicalName: 'Knorr Tomato Soup', category: 'Packaged Foods', icon: '🥣', prices: [
      p('fairprice', 'Knorr Tomato 45g', 2.5, 2.98, 15, '45g', 'soup', true, '2 hrs'),
    ]
  },
  tata_sampann_rajma_1kg: {
    query: 'tata rajma', canonicalName: 'Tata Sampann Rajma', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('redmart', 'Tata Rajma 1kg', 5.05, 5.98, 15, '1 kg', 'pulses', true, '1 day'),
    ]
  },
  tata_sampann_lobia_1kg: {
    query: 'tata lobia', canonicalName: 'Tata Sampann Lobia', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('coldstorage', 'Tata Lobia 1kg', 4.14, 4.98, 17, '1 kg', 'pulses', true, 'Same day'),
    ]
  },
  haldiram_chai_puri_200g: {
    query: 'chai puri', canonicalName: 'Haldiram Chai Puri', category: 'Snacks', icon: '🍿', prices: [
      p('shengsiong', 'Chai Puri 200g', 2.68, 3.25, 18, '200g', 'snacks', true, '4 hrs'),
    ]
  },
  haldiram_methi_puri_200g: {
    query: 'methi puri', canonicalName: 'Haldiram Methi Puri', category: 'Snacks', icon: '🍿', prices: [
      p('giant', 'Methi Puri 200g', 2.68, 3.25, 18, '200g', 'snacks', true, 'Same day'),
    ]
  },
  real_activ_100_orange_1l: {
    query: 'activ 100 orange', canonicalName: 'Real Activ 100% Orange', category: 'Beverages', icon: '🧃', prices: [
      p('grabmart', 'Real Activ 100% 1L', 4.32, 5.07, 13, '1 L', 'beverages', true, '15 min'),
    ]
  },
  limca_family_2l: {
    query: 'limca 2l family', canonicalName: 'Limca (2.25L Family)', category: 'Beverages', icon: '🥤', prices: [
      p('pandamart', 'Limca 2.25L Bottle', 3.23, 3.53, 0, '2.25 L', 'soft drink', true, '15 min'),
    ]
  },
  fanta_family_2l: {
    query: 'fanta 2l family', canonicalName: 'Fanta (2.25L Family)', category: 'Beverages', icon: '🥤', prices: [
      p('amazon_sg', 'Fanta 2.25L Bottle', 3.23, 3.53, 0, '2.25 L', 'soft drink', true, '2 hrs'),
    ]
  },
  nescafe_classic_can_50g: {
    query: 'nescafe classic 50g can', canonicalName: 'Nescafe Classic (50g)', category: 'Beverages', icon: '☕', prices: [
      p('fairprice', 'Nescafe Can 50g', 4.86, 5.62, 12, '50g', 'coffee', true, '2 hrs'),
    ]
  },

  lipton_green_tea_25: {
    query: 'green tea 25 bags', canonicalName: 'Lipton Green Tea (25)', category: 'Beverages', icon: '🍵', prices: [
      p('redmart', 'Lipton Green 25ct', 4.32, 4.98, 11, '25 bags', 'tea', true, '1 day'),
    ]
  },
  tata_sampann_suji_500g: {
    query: 'tata suji', canonicalName: 'Tata Sampann Suji', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('coldstorage', 'Tata Suji 500g', 2.32, 2.8, 18, '500g', 'staples', true, 'Same day'),
    ]
  },
  tata_sampann_besan_500g: {
    query: 'tata besan', canonicalName: 'Tata Sampann Besan', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('shengsiong', 'Tata Besan 500g', 2.86, 3.44, 16, '500g', 'staples', true, '4 hrs'),
    ]
  },
  tata_sampann_maida_500g: {
    query: 'tata maida', canonicalName: 'Tata Sampann Maida', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('giant', 'Tata Maida 500g', 2.32, 2.8, 18, '500g', 'staples', true, 'Same day'),
    ]
  },
  haldiram_roasted_cashews: {
    query: 'roasted cashews', canonicalName: 'Haldiram Cashews (35g)', category: 'Snacks', icon: '🥜', prices: [
      p('grabmart', 'Roasted Cashews 35g', 3.05, 3.53, 10, '35g', 'nuts', true, '15 min'),
    ]
  },
  haldiram_roasted_almonds: {
    query: 'roasted almonds', canonicalName: 'Haldiram Almonds (35g)', category: 'Snacks', icon: '🥜', prices: [
      p('pandamart', 'Roasted Almonds 35g', 3.05, 3.53, 10, '35g', 'nuts', true, '15 min'),
    ]
  },
  maggi_pazzta_mushroom: {
    query: 'maggi mushroom pazzta', canonicalName: 'Maggi Pazzta (Mushroom)', category: 'Packaged Foods', icon: '🍝', prices: [
      p('amazon_sg', 'Pazzta Mushroom 70g', 1.95, 2.31, 10, '70g', 'pasta', true, '2 hrs'),
    ]
  },
  bisleri_5l_jar: {
    query: 'bisleri 5l jar', canonicalName: 'Bisleri (5L Jar)', category: 'Beverages', icon: '💧', prices: [
      p('fairprice', 'Bisleri 5L Jar', 2.68, 3.16, 13, '5 L', 'water', true, '2 hrs'),
    ]
  },
  bisleri_1l_case_12: {
    query: 'bisleri 1l case', canonicalName: 'Bisleri (1L x 12)', category: 'Beverages', icon: '💧', prices: [
      p('redmart', 'Bisleri 1L Case', 5.59, 6.16, 6, '12 L', 'water', true, '1 day'),
    ]
  },
  real_activ_100_grape_1l: {
    query: 'activ 100 grape', canonicalName: 'Real Activ 100% Grape', category: 'Beverages', icon: '🧃', prices: [
      p('coldstorage', 'Real Activ 100% 1L', 4.32, 5.07, 13, '1 L', 'beverages', true, 'Same day'),
    ]
  },
  real_activ_100_pome_1l: {
    query: 'activ 100 pomegranate', canonicalName: 'Real Activ 100% Pome', category: 'Beverages', icon: '🧃', prices: [
      p('shengsiong', 'Real Activ 100% 1L', 4.32, 5.07, 13, '1 L', 'beverages', true, '4 hrs'),
    ]
  },
  lipton_iced_tea_lemon_1_25l: {
    query: 'iced tea lemon 1.25l', canonicalName: 'Lipton Lemon (1.25L)', category: 'Beverages', icon: '🍹', prices: [
      p('giant', 'Lipton Lemon 1.25L', 3.59, 4.16, 11, '1.25 L', 'beverages', true, 'Same day'),
    ]
  },
  lipton_iced_tea_peach_1_25l: {
    query: 'iced tea peach 1.25l', canonicalName: 'Lipton Peach (1.25L)', category: 'Beverages', icon: '🍹', prices: [
      p('grabmart', 'Lipton Peach 1.25L', 3.59, 4.16, 11, '1.25 L', 'beverages', true, '15 min'),
    ]
  },
  red_bull_4pack: {
    query: 'red bull 4 pack', canonicalName: 'Red Bull (4 x 250ml)', category: 'Beverages', icon: '⚡', prices: [
      p('pandamart', 'Red Bull 4-Pack', 9.68, 10.89, 10, '1 L', 'beverages', true, '15 min'),
    ]
  },
  red_bull_sf_4pack: {
    query: 'red bull sf 4 pack', canonicalName: 'Red Bull SF (4 x 250ml)', category: 'Beverages', icon: '⚡', prices: [
      p('amazon_sg', 'Red Bull SF 4-Pack', 9.68, 10.89, 10, '1 L', 'beverages', true, '2 hrs'),
    ]
  },
  chings_egg_hakka_150g: {
    query: 'chings egg hakka', canonicalName: 'Chings Egg Hakka', category: 'Packaged Foods', icon: '🍜', prices: [
      p('fairprice', 'Chings Egg Hakka', 2.5, 2.89, 8, '150g', 'noodles', true, '2 hrs'),
    ]
  },
  chings_schezwan_noodle_60g: {
    query: 'schezwan noodles', canonicalName: 'Chings Schezwan Noodle', category: 'Packaged Foods', icon: '🍜', prices: [
      p('redmart', 'Schezwan Noodle 60g', 1.86, 2.16, 0, '60g', 'noodles', true, '1 day'),
    ]
  },
  mother_dairy_cream_250ml: {
    query: 'mother dairy cream 250ml', canonicalName: 'Mother Dairy Cream', category: 'Dairy', icon: '🥛', prices: [
      p('coldstorage', 'Fresh Cream 250ml', 2.68, 3.16, 13, '250ml', 'cream', true, 'Same day'),
    ]
  },
  mother_dairy_cream_500ml: {
    query: 'mother dairy cream 500ml', canonicalName: 'Mother Dairy Cream', category: 'Dairy', icon: '🥛', prices: [
      p('shengsiong', 'Fresh Cream 500ml', 3.68, 4.35, 14, '500ml', 'cream', true, '4 hrs'),
    ]
  },
  tata_sampann_urad_whole: {
    query: 'tata urad whole', canonicalName: 'Tata Sampann Urad Whole', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('giant', 'Tata Urad Whole 1kg', 4.68, 5.62, 16, '1 kg', 'pulses', true, 'Same day'),
    ]
  },
  tata_sampann_moong_whole: {
    query: 'tata moong whole', canonicalName: 'Tata Sampann Moong Whole', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('grabmart', 'Tata Moong Whole 1kg', 4.68, 5.62, 16, '1 kg', 'pulses', true, '15 min'),
    ]
  },
  haldiram_mini_samosa_1kg: {
    query: 'mini samosa 1kg', canonicalName: 'Mini Samosa (Mega Pack)', category: 'Snacks', icon: '🍿', prices: [
      p('pandamart', 'Mini Samosa 1kg Mega', 6.68, 8.16, 18, '1 kg', 'snacks', true, '15 min'),
    ]
  },
  mother_dairy_curd_cup_200g: {
    query: 'curd cup 200g', canonicalName: 'Mother Dairy Curd Cup', category: 'Dairy', icon: '🥛', prices: [
      p('amazon_sg', 'Curd Cup 200g', 2.05, 2.35, 0, '200g', 'curd', true, '2 hrs'),
    ]
  },
  mother_dairy_curd_cup_400g: {
    query: 'curd cup 400g', canonicalName: 'Mother Dairy Curd Cup', category: 'Dairy', icon: '🥛', prices: [
      p('fairprice', 'Curd Cup 400g', 2.5, 2.89, 8, '400g', 'curd', true, '2 hrs'),
    ]
  },
  amul_gouda_cheese_250g: {
    query: 'gouda cheese', canonicalName: 'Amul Gouda Cheese', category: 'Dairy', icon: '🧀', prices: [
      p('redmart', 'Amul Gouda 250g', 5.59, 6.35, 10, '250g', 'cheese', true, '1 day'),
    ]
  },
  amul_emmental_cheese_250g: {
    query: 'emmental cheese', canonicalName: 'Amul Emmental Cheese', category: 'Dairy', icon: '🧀', prices: [
      p('coldstorage', 'Amul Emmental 250g', 5.95, 6.8, 11, '250g', 'cheese', true, 'Same day'),
    ]
  },
  haldiram_kaju_katli_250g: {
    query: 'kaju katli', canonicalName: 'Haldiram Kaju Katli', category: 'Snacks', icon: '🍬', prices: [
      p('shengsiong', 'Kaju Katli 250g', 5.95, 6.89, 12, '250g', 'sweets', true, '4 hrs'),
    ]
  },
  haldiram_kaju_katli_500g: {
    query: 'kaju katli 500g', canonicalName: 'Haldiram Kaju Katli', category: 'Snacks', icon: '🍬', prices: [
      p('giant', 'Kaju Katli 500g', 10.32, 11.8, 12, '500g', 'sweets', true, 'Same day'),
    ]
  },
  maggi_cup_noodles_masala: {
    query: 'maggi masala cup', canonicalName: 'Maggi Masala Cup', category: 'Packaged Foods', icon: '🍜', prices: [
      p('grabmart', 'Maggi Masala 70g', 2.32, 2.71, 10, '70g', 'noodles', true, '15 min'),
    ]
  },
  maggi_cup_noodles_chilli: {
    query: 'maggi chilli cup', canonicalName: 'Maggi Chilli Chow', category: 'Packaged Foods', icon: '🍜', prices: [
      p('pandamart', 'Maggi Chilli 70g', 2.32, 2.71, 10, '70g', 'noodles', true, '15 min'),
    ]
  },
  tata_sampann_poha_500g: {
    query: 'tata poha', canonicalName: 'Tata Sampann Poha', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('amazon_sg', 'Tata Poha 500g', 2.5, 2.98, 15, '500g', 'staples', true, '2 hrs'),
    ]
  },
  tata_sampann_daliya_500g: {
    query: 'tata daliya', canonicalName: 'Tata Sampann Daliya', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('fairprice', 'Tata Daliya 500g', 2.5, 2.98, 15, '500g', 'staples', true, '2 hrs'),
    ]
  },
  lipton_green_tea_tulsi_50: {
    query: 'green tea tulsi', canonicalName: 'Lipton Green Tulsi', category: 'Beverages', icon: '🍵', prices: [
      p('redmart', 'Lipton Tulsi 50ct', 6.68, 7.8, 14, '50 bags', 'tea', true, '1 day'),
    ]
  },
  real_activ_100_pome_200ml: {
    query: 'activ pome 200ml', canonicalName: 'Real Activ Pome (200ml)', category: 'Beverages', icon: '🧃', prices: [
      p('coldstorage', 'Activ Pome 200ml', 2.14, 2.44, 0, '200ml', 'beverages', true, 'Same day'),
    ]
  },
  coke_can_330ml: {
    query: 'coke can 330ml', canonicalName: 'Coke (330ml Can)', category: 'Beverages', icon: '🥤', prices: [
      p('shengsiong', 'Coke Can 330ml', 2.23, 2.53, 0, '330ml', 'soft drink', true, '4 hrs'),
    ]
  },
  pepsi_can_330ml: {
    query: 'pepsi can 330ml', canonicalName: 'Pepsi (330ml Can)', category: 'Beverages', icon: '🥤', prices: [
      p('giant', 'Pepsi Can 330ml', 2.23, 2.53, 0, '330ml', 'soft drink', true, 'Same day'),
    ]
  },
  amul_masti_curd_cup_200g: {
    query: 'amul curd 200g', canonicalName: 'Amul Masti Dahi Cup', category: 'Dairy', icon: '🥛', prices: [
      p('grabmart', 'Amul Dahi 200g', 2.05, 2.35, 0, '200g', 'curd', true, '15 min'),
    ]
  },
  amul_masti_curd_cup_400g: {
    query: 'amul curd 400g', canonicalName: 'Amul Masti Dahi Cup', category: 'Dairy', icon: '🥛', prices: [
      p('pandamart', 'Amul Dahi 400g', 2.5, 2.89, 8, '400g', 'curd', true, '15 min'),
    ]
  },
  haldiram_peanut_chikki: {
    query: 'peanut chikki', canonicalName: 'Haldiram Peanut Chikki', category: 'Snacks', icon: '🍬', prices: [
      p('amazon_sg', 'Peanut Chikki 100g', 2.32, 2.71, 10, '100g', 'sweets', true, '2 hrs'),
    ]
  },
  haldiram_til_chikki: {
    query: 'til chikki', canonicalName: 'Haldiram Til Chikki', category: 'Snacks', icon: '🍬', prices: [
      p('fairprice', 'Til Chikki 100g', 2.5, 2.98, 15, '100g', 'sweets', true, '2 hrs'),
    ]
  },
  mother_dairy_lassi_sweet: {
    query: 'sweet lassi bottle', canonicalName: 'Mother Dairy Lassi', category: 'Beverages', icon: '🥛', prices: [
      p('redmart', 'Sweet Lassi 200ml', 1.95, 2.25, 0, '200ml', 'beverages', true, '1 day'),
    ]
  },
  mother_dairy_lassi_mango: {
    query: 'mango lassi bottle', canonicalName: 'Mother Dairy Lassi', category: 'Beverages', icon: '🥛', prices: [
      p('coldstorage', 'Mango Lassi 200ml', 1.95, 2.25, 0, '200ml', 'beverages', true, 'Same day'),
    ]
  },
  tata_sampann_rajma_chitra: {
    query: 'tata rajma chitra', canonicalName: 'Tata Rajma Chitra', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('shengsiong', 'Tata Rajma Chitra 1kg', 5.41, 6.35, 14, '1 kg', 'pulses', true, '4 hrs'),
    ]
  },
  limca_can_330ml: {
    query: 'limca can 330ml', canonicalName: 'Limca (330ml Can)', category: 'Beverages', icon: '🥤', prices: [
      p('giant', 'Limca Can 330ml', 2.23, 2.53, 0, '330ml', 'soft drink', true, 'Same day'),
    ]
  },
  fanta_can_330ml: {
    query: 'fanta can 330ml', canonicalName: 'Fanta (330ml Can)', category: 'Beverages', icon: '🥤', prices: [
      p('grabmart', 'Fanta Can 330ml', 2.23, 2.53, 0, '330ml', 'soft drink', true, '15 min'),
    ]
  },
  b_natural_orange_200ml: {
    query: 'b natural orange 200ml', canonicalName: 'B Natural Orange', category: 'Beverages', icon: '🧃', prices: [
      p('pandamart', 'B Natural Orange', 1.86, 2.16, 0, '200ml', 'beverages', true, '15 min'),
    ]
  },
  knorr_lemon_coriander_soup: {
    query: 'lemon coriander soup', canonicalName: 'Knorr Lemon Coriander', category: 'Packaged Foods', icon: '🥣', prices: [
      p('amazon_sg', 'Knorr Lemon Cor 45g', 2.5, 2.98, 15, '45g', 'soup', true, '2 hrs'),
    ]
  },
  lipton_green_tea_10: {
    query: 'green tea 10 bags', canonicalName: 'Lipton Green Tea (10)', category: 'Beverages', icon: '🍵', prices: [
      p('fairprice', 'Lipton Green 10ct', 2.68, 3.16, 13, '10 bags', 'tea', true, '2 hrs'),
    ]
  },
  amul_cheese_block_500g: {
    query: 'cheese block 500g', canonicalName: 'Amul Cheese Block', category: 'Dairy', icon: '🧀', prices: [
      p('redmart', 'Amul Block 500g', 6.68, 7.44, 8, '500g', 'cheese', true, '1 day'),
    ]
  },

  kinley_soda_750ml: {
    query: 'kinley soda 750ml', canonicalName: 'Kinley Soda (750ml)', category: 'Beverages', icon: '🥤', prices: [
      p('coldstorage', 'Kinley Soda 750ml', 1.86, 2.16, 0, '750ml', 'soft drink', true, 'Same day'),
    ]
  },
  kinley_soda_2l: {
    query: 'kinley soda 2l', canonicalName: 'Kinley Soda (2L)', category: 'Beverages', icon: '🥤', prices: [
      p('shengsiong', 'Kinley Soda 2L Bottle', 2.23, 2.53, 0, '2 L', 'soft drink', true, '4 hrs'),
    ]
  },
  tata_sampann_poha_1kg: {
    query: 'tata poha 1kg', canonicalName: 'Tata Sampann Poha (1kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('giant', 'Tata Poha 1kg', 3.41, 4.07, 16, '1 kg', 'staples', true, 'Same day'),
    ]
  },
  tata_sampann_daliya_1kg: {
    query: 'tata daliya 1kg', canonicalName: 'Tata Sampann Daliya (1kg)', category: 'Grains & Pulses', icon: '🌾', prices: [
      p('grabmart', 'Tata Daliya 1kg', 3.41, 4.07, 16, '1 kg', 'staples', true, '15 min'),
    ]
  },
  amul_gold_1l_poly: {
    query: 'amul gold poly 1l', canonicalName: 'Amul Gold (1L Poly)', category: 'Dairy', icon: '🥛', prices: [
      p('pandamart', 'Amul Gold 1L Poly', 2.74, 3.04, 0, '1 L', 'milk', true, '15 min'),
    ]
  },
  amul_taaza_1l_poly: {
    query: 'amul taaza poly 1l', canonicalName: 'Amul Taaza (1L Poly)', category: 'Dairy', icon: '🥛', prices: [
      p('amazon_sg', 'Amul Taaza 1L Poly', 2.52, 2.82, 0, '1 L', 'milk', true, '2 hrs'),
    ]
  },
  chings_manchurian_noodle_60g: {
    query: 'manchurian noodles', canonicalName: 'Chings Manchurian Noodle', category: 'Packaged Foods', icon: '🍜', prices: [
      p('fairprice', 'Manchurian Noodle 60g', 1.86, 2.16, 0, '60g', 'noodles', true, '2 hrs'),
    ]
  },
  chings_hot_garlic_noodle_60g: {
    query: 'hot garlic noodles', canonicalName: 'Chings Hot Garlic Noodle', category: 'Packaged Foods', icon: '🍜', prices: [
      p('redmart', 'Hot Garlic Noodle 60g', 1.86, 2.16, 0, '60g', 'noodles', true, '1 day'),
    ]
  },
  tata_sampann_salt_1kg: {
    query: 'tata salt 1kg', canonicalName: 'Tata Sampann Salt', category: 'Grains & Pulses', icon: '🧂', prices: [
      p('coldstorage', 'Tata Salt 1kg', 1.95, 2.31, 10, '1 kg', 'staples', true, 'Same day'),
    ]
  },
  tata_sampann_rock_salt: {
    query: 'rock salt 1kg', canonicalName: 'Tata Sampann Rock Salt', category: 'Grains & Pulses', icon: '🧂', prices: [
      p('shengsiong', 'Tata Rock Salt 1kg', 3.23, 3.8, 13, '1 kg', 'staples', true, '4 hrs'),
    ]
  },
  tata_sampann_black_salt: {
    query: 'black salt', canonicalName: 'Tata Sampann Black Salt', category: 'Grains & Pulses', icon: '🧂', prices: [
      p('giant', 'Black Salt 100g', 2.14, 2.53, 12, '100g', 'staples', true, 'Same day'),
    ]
  },
  top_ramen_fiery_chilli: {
    query: 'top ramen fiery', canonicalName: 'Top Ramen Fiery Chilli', category: 'Packaged Foods', icon: '🍜', prices: [
      p('grabmart', 'Fiery Chilli 70g', 1.86, 2.16, 0, '70g', 'noodles', true, '15 min'),
    ]
  },
  top_ramen_curry: {
    query: 'top ramen curry', canonicalName: 'Top Ramen Curry', category: 'Packaged Foods', icon: '🍜', prices: [
      p('pandamart', 'Top Ramen Curry 70g', 1.86, 2.16, 0, '70g', 'noodles', true, '15 min'),
    ]
  },
  milky_mist_paneer_500g: {
    query: 'milky mist paneer 500g', canonicalName: 'Milky Mist Paneer (500g)', category: 'Dairy', icon: '🥛', prices: [
      p('amazon_sg', 'Milky Mist 500g', 5.59, 6.35, 10, '500g', 'paneer', true, '2 hrs'),
    ]
  },
  milky_mist_paneer_1kg: {
    query: 'milky mist paneer 1kg', canonicalName: 'Milky Mist Paneer (1kg)', category: 'Dairy', icon: '🥛', prices: [
      p('fairprice', 'Milky Mist 1kg', 9.59, 10.53, 7, '1 kg', 'paneer', true, '2 hrs'),
    ]
  },
  sprite_1_25l_bottle: {
    query: 'sprite 1.25l', canonicalName: 'Sprite (1.25L)', category: 'Beverages', icon: '🥤', prices: [
      p('redmart', 'Sprite 1.25L Bottle', 2.68, 2.98, 0, '1.25 L', 'soft drink', true, '1 day'),
    ]
  },
  mother_dairy_lassi_sweet_1l: {
    query: 'sweet lassi 1l', canonicalName: 'Mother Dairy Lassi (1L)', category: 'Beverages', icon: '🥛', prices: [
      p('coldstorage', 'Sweet Lassi 1L Bottle', 3.23, 3.8, 13, '1 L', 'beverages', true, 'Same day'),
    ]
  },
  mother_dairy_lassi_mango_1l: {
    query: 'mango lassi 1l', canonicalName: 'Mother Dairy Lassi (1L)', category: 'Beverages', icon: '🥛', prices: [
      p('shengsiong', 'Mango Lassi 1L Bottle', 3.23, 3.8, 13, '1 L', 'beverages', true, '4 hrs'),
    ]
  },
  haldiram_ratlami_sev_200g: {
    query: 'ratlami sev', canonicalName: 'Haldiram Ratlami Sev', category: 'Snacks', icon: '🍿', prices: [
      p('giant', 'Ratlami Sev 200g', 2.68, 3.25, 18, '200g', 'snacks', true, 'Same day'),
    ]
  },
  organic_toor_dal_1kg: {
    query: 'organic toor dal', canonicalName: 'Organic Toor Dal (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('grabmart', 'Organic Toor 1kg', 5.95, 6.89, 12, '1 kg', 'pulses', true, '15 min'),
    ]
  },
  organic_moong_dal_1kg: {
    query: 'organic moong dal', canonicalName: 'Organic Moong Dal (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('pandamart', 'Organic Moong 1kg', 5.59, 6.53, 13, '1 kg', 'pulses', true, '15 min'),
    ]
  },
  real_nectar_mango_1l: {
    query: 'real nectar mango', canonicalName: 'Real Nectar Mango (1L)', category: 'Beverages', icon: '🧃', prices: [
      p('amazon_sg', 'Real Mango Nectar', 3.59, 4.16, 11, '1 L', 'beverages', true, '2 hrs'),
    ]
  },
  real_nectar_guava_1l: {
    query: 'real nectar guava', canonicalName: 'Real Nectar Guava (1L)', category: 'Beverages', icon: '🧃', prices: [
      p('fairprice', 'Real Guava Nectar', 3.59, 4.16, 11, '1 L', 'beverages', true, '2 hrs'),
    ]
  },
  haldiram_bhujia_1kg_mega: {
    query: 'bhujia 1kg', canonicalName: 'Haldiram Bhujia (1kg)', category: 'Snacks', icon: '🍿', prices: [
      p('redmart', 'Bhujia 1kg Mega Pack', 5.95, 6.89, 12, '1 kg', 'snacks', true, '1 day'),
    ]
  },
  kinley_water_500ml: {
    query: 'kinley 500ml', canonicalName: 'Kinley Water (500ml)', category: 'Beverages', icon: '💧', prices: [
      p('coldstorage', 'Kinley 500ml Bottle', 1.68, 1.98, 0, '500ml', 'water', true, 'Same day'),
    ]
  },
  kinley_water_1l: {
    query: 'kinley 1l', canonicalName: 'Kinley Water (1L)', category: 'Beverages', icon: '💧', prices: [
      p('shengsiong', 'Kinley 1L Bottle', 1.86, 2.16, 0, '1 L', 'water', true, '4 hrs'),
    ]
  },

  nescafe_classic_stick_10: {
    query: 'nescafe stick 10', canonicalName: 'Nescafe Stick (10pc)', category: 'Beverages', icon: '☕', prices: [
      p('giant', 'Nescafe Stick 10ct', 1.86, 2.16, 0, '15g', 'coffee', true, 'Same day'),
    ]
  },
  knorr_soupy_noodles: {
    query: 'knorr soupy noodles', canonicalName: 'Knorr Soupy Noodles', category: 'Packaged Foods', icon: '🍜', prices: [
      p('grabmart', 'Soupy Noodles 300g', 3.23, 3.8, 13, '300g', 'noodles', true, '15 min'),
    ]
  },
  amul_cheese_cubes_200g: {
    query: 'amul cheese cubes', canonicalName: 'Amul Cheese Cubes', category: 'Dairy', icon: '🧀', prices: [
      p('pandamart', 'Amul Cubes 200g', 3.77, 4.35, 10, '200g', 'cheese', true, '15 min'),
    ]
  },
  amul_cheese_spread_garlic: {
    query: 'cheese spread garlic', canonicalName: 'Amul Garlic Spread', category: 'Dairy', icon: '🧀', prices: [
      p('amazon_sg', 'Garlic Spread 200g', 3.23, 3.8, 13, '200g', 'cheese', true, '2 hrs'),
    ]
  },

  milky_mist_greek_blueberry: {
    query: 'greek yogurt blueberry', canonicalName: 'Milky Mist Blueberry', category: 'Dairy', icon: '🍨', prices: [
      p('fairprice', 'Blueberry Greek 100g', 2.68, 3.16, 13, '100g', 'yogurt', true, '2 hrs'),
    ]
  },
  tata_sampann_organic_moong: {
    query: 'organic moong dal tata', canonicalName: 'Tata Organic Moong', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('redmart', 'Organic Moong 1kg', 5.95, 6.89, 12, '1 kg', 'pulses', true, '1 day'),
    ]
  },
  haldiram_khakhra_plain: {
    query: 'plain khakhra', canonicalName: 'Haldiram Khakhra', category: 'Snacks', icon: '🍘', prices: [
      p('coldstorage', 'Plain Khakhra 200g', 3.05, 3.62, 15, '200g', 'snacks', true, 'Same day'),
    ]
  },
  coke_zero_2l_bottle: {
    query: 'coke zero 2l', canonicalName: 'Coke Zero (2L)', category: 'Beverages', icon: '🥤', prices: [
      p('shengsiong', 'Coke Zero 2L Bottle', 3.23, 3.53, 0, '2 L', 'soft drink', true, '4 hrs'),
    ]
  },
  real_activ_coconut_water_1l: {
    query: 'coconut water 1l', canonicalName: 'Real Coconut Water', category: 'Beverages', icon: '🥥', prices: [
      p('giant', 'Coconut Water 1L', 4.14, 4.98, 17, '1 L', 'beverages', true, 'Same day'),
    ]
  },
  nescafe_gold_jar_100g: {
    query: 'nescafe gold 100g', canonicalName: 'Nescafe Gold (Jar)', category: 'Beverages', icon: '☕', prices: [
      p('grabmart', 'Nescafe Gold 100g', 11.41, 12.71, 9, '100g', 'coffee', true, '15 min'),
    ]
  },
  amul_dark_chocolate_150g: {
    query: 'amul dark chocolate', canonicalName: 'Amul Dark Chocolate', category: 'Snacks', icon: '🍫', prices: [
      p('pandamart', 'Dark Chocolate 150g', 3.77, 4.53, 16, '150g', 'chocolate', true, '15 min'),
    ]
  },
  paper_boat_aam_panna: {
    query: 'aam panna pouch', canonicalName: 'Paper Boat Aam Panna', category: 'Beverages', icon: '🍹', prices: [
      p('amazon_sg', 'Aam Panna 250ml', 2.14, 2.53, 12, '250ml', 'beverages', true, '2 hrs'),
    ]
  },
  mother_dairy_fruit_yogurt_blue: {
    query: 'fruit yogurt blueberry', canonicalName: 'Mother Dairy Blueberry', category: 'Dairy', icon: '🍨', prices: [
      p('fairprice', 'Blueberry Yogurt 100g', 2.14, 2.53, 12, '100g', 'yogurt', true, '2 hrs'),
    ]
  },
  real_activ_100_cranberry_1l: {
    query: 'activ 100 cranberry', canonicalName: 'Real Activ Cranberry', category: 'Beverages', icon: '🧃', prices: [
      p('redmart', 'Real Cranberry 1L', 4.86, 5.62, 12, '1 L', 'beverages', true, '1 day'),
    ]
  },
  schweppes_tonic_water_300ml: {
    query: 'schweppes tonic', canonicalName: 'Schweppes Tonic Water', category: 'Beverages', icon: '🥤', prices: [
      p('coldstorage', 'Schweppes Tonic 300ml', 2.68, 3.16, 13, '300ml', 'beverages', true, 'Same day'),
    ]
  },
  organic_chana_dal_1kg: {
    query: 'organic chana dal', canonicalName: 'Organic Chana Dal (1kg)', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('shengsiong', 'Organic Chana 1kg', 5.05, 5.98, 15, '1 kg', 'pulses', true, '4 hrs'),
    ]
  },
  chings_veg_hakka_1kg: {
    query: 'chings hakka 1kg', canonicalName: 'Chings Hakka (Mega)', category: 'Packaged Foods', icon: '🍜', prices: [
      p('giant', 'Chings Hakka 1kg Mega', 4.86, 5.8, 16, '1 kg', 'noodles', true, 'Same day'),
    ]
  },
  haldiram_cashews_peppery: {
    query: 'peppery cashews', canonicalName: 'Haldiram Peppery Cashews', category: 'Snacks', icon: '🥜', prices: [
      p('grabmart', 'Peppery Cashews 35g', 3.05, 3.53, 10, '35g', 'nuts', true, '15 min'),
    ]
  },
  amul_lassi_sweet_1l: {
    query: 'amul sweet lassi 1l', canonicalName: 'Amul Lassi (1L)', category: 'Beverages', icon: '🥛', prices: [
      p('pandamart', 'Amul Lassi 1L Bottle', 3.05, 3.62, 15, '1 L', 'beverages', true, '15 min'),
    ]
  },
  lipton_green_tea_pure_100: {
    query: 'green tea pure 100', canonicalName: 'Lipton Green (Pure)', category: 'Beverages', icon: '🍵', prices: [
      p('amazon_sg', 'Lipton Pure 100ct', 9.77, 11.25, 12, '100 bags', 'tea', true, '2 hrs'),
    ]
  },
  lipton_green_tea_pure_10: {
    query: 'green tea pure 10 bags', canonicalName: 'Lipton Green (Pure)', category: 'Beverages', icon: '🍵', prices: [
      p('fairprice', 'Lipton Pure 10ct', 2.68, 3.16, 13, '10 bags', 'tea', true, '2 hrs'),
    ]
  },
  tata_sampann_organic_masoor: {
    query: 'organic masoor tata', canonicalName: 'Tata Organic Masoor', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('redmart', 'Organic Masoor 1kg', 5.05, 5.98, 15, '1 kg', 'pulses', true, '1 day'),
    ]
  },
  top_ramen_curry_family: {
    query: 'top ramen curry family', canonicalName: 'Top Ramen Curry (FP)', category: 'Packaged Foods', icon: '🍜', prices: [
      p('coldstorage', 'Top Ramen Curry 280g', 3.05, 3.62, 15, '280g', 'noodles', true, 'Same day'),
    ]
  },
  haldiram_punjabi_tadka_40g: {
    query: 'punjabi tadka 40g', canonicalName: 'Haldiram Tadka', category: 'Snacks', icon: '🍿', prices: [
      p('shengsiong', 'Punjabi Tadka 40g', 1.68, 1.98, 0, '40g', 'snacks', true, '4 hrs'),
    ]
  },
  thums_up_zero_can: {
    query: 'thums up zero can', canonicalName: 'Thums Up Zero (300ml)', category: 'Beverages', icon: '🥤', prices: [
      p('giant', 'Thums Up Zero Can', 2.23, 2.53, 0, '300ml', 'soft drink', true, 'Same day'),
    ]
  },
  amul_cheese_block_100g: {
    query: 'cheese block 100g', canonicalName: 'Amul Cheese Block', category: 'Dairy', icon: '🧀', prices: [
      p('grabmart', 'Amul Block 100g', 2.86, 3.35, 11, '100g', 'cheese', true, '15 min'),
    ]
  },
  b_natural_mixed_fruit_200ml: {
    query: 'b natural mixed 200ml', canonicalName: 'B Natural Mixed', category: 'Beverages', icon: '🧃', prices: [
      p('pandamart', 'B Natural Mixed', 1.86, 2.16, 0, '200ml', 'beverages', true, '15 min'),
    ]
  },
  tata_sampann_black_pepper: {
    query: 'black pepper 50g', canonicalName: 'Tata Black Pepper', category: 'Grains & Pulses', icon: '🧂', prices: [
      p('amazon_sg', 'Black Pepper 50g', 3.05, 3.53, 10, '50g', 'spices', true, '2 hrs'),
    ]
  },
  tata_sampann_turmeric: {
    query: 'turmeric 100g', canonicalName: 'Tata Turmeric', category: 'Grains & Pulses', icon: '🧂', prices: [
      p('fairprice', 'Turmeric 100g', 2.14, 2.53, 12, '100g', 'spices', true, '2 hrs'),
    ]
  },
  top_ramen_fiery_family: {
    query: 'top ramen fiery family', canonicalName: 'Top Ramen Fiery (FP)', category: 'Packaged Foods', icon: '🍜', prices: [
      p('redmart', 'Fiery Family 280g', 3.05, 3.62, 15, '280g', 'noodles', true, '1 day'),
    ]
  },
  real_activ_cranberry_200ml: {
    query: 'activ cranberry 200ml', canonicalName: 'Real Activ Cranberry', category: 'Beverages', icon: '🧃', prices: [
      p('coldstorage', 'Activ Cran 200ml', 2.32, 2.62, 0, '200ml', 'beverages', true, 'Same day'),
    ]
  },
  amul_gold_200ml_tetra: {
    query: 'amul gold tetra 200ml', canonicalName: 'Amul Gold (200ml)', category: 'Dairy', icon: '🥛', prices: [
      p('shengsiong', 'Amul Gold 200ml', 1.95, 2.25, 0, '200ml', 'milk', true, '4 hrs'),
    ]
  },
  bisleri_250ml_bottle: {
    query: 'bisleri 250ml', canonicalName: 'Bisleri (250ml)', category: 'Beverages', icon: '💧', prices: [
      p('giant', 'Bisleri 250ml Bottle', 1.68, 1.98, 0, '250ml', 'water', true, 'Same day'),
    ]
  },
  haldiram_gathiya_200g: {
    query: 'haldiram gathiya', canonicalName: 'Haldiram Gathiya', category: 'Snacks', icon: '🍿', prices: [
      p('grabmart', 'Gathiya 200g Pack', 2.68, 3.25, 18, '200g', 'snacks', true, '15 min'),
    ]
  },
  haldiram_bhavnagari_sev: {
    query: 'bhavnagari sev', canonicalName: 'Bhavnagari Sev', category: 'Snacks', icon: '🍿', prices: [
      p('pandamart', 'Bhavnagari Sev 200g', 2.68, 3.25, 18, '200g', 'snacks', true, '15 min'),
    ]
  },
  b_natural_litchi_200ml: {
    query: 'b natural litchi 200ml', canonicalName: 'B Natural Litchi', category: 'Beverages', icon: '🧃', prices: [
      p('amazon_sg', 'B Natural Litchi', 1.86, 2.16, 0, '200ml', 'beverages', true, '2 hrs'),
    ]
  },
  b_natural_apple_200ml: {
    query: 'b natural apple 200ml', canonicalName: 'B Natural Apple', category: 'Beverages', icon: '🧃', prices: [
      p('fairprice', 'B Natural Apple', 1.86, 2.16, 0, '200ml', 'beverages', true, '2 hrs'),
    ]
  },
  bisleri_glass_bottle: {
    query: 'bisleri glass bottle', canonicalName: 'Bisleri (300ml Glass)', category: 'Beverages', icon: '💧', prices: [
      p('redmart', 'Bisleri Glass 300ml', 2.32, 2.62, 0, '300ml', 'water', true, '1 day'),
    ]
  },
  tata_sampann_black_salt_500g: {
    query: 'black salt 500g', canonicalName: 'Tata Black Salt', category: 'Grains & Pulses', icon: '🧂', prices: [
      p('coldstorage', 'Black Salt 500g', 4.14, 4.98, 17, '500g', 'staples', true, 'Same day'),
    ]
  },
  tata_sampann_rock_salt_500g: {
    query: 'rock salt 500g', canonicalName: 'Tata Rock Salt', category: 'Grains & Pulses', icon: '🧂', prices: [
      p('shengsiong', 'Rock Salt 500g', 4.14, 4.98, 17, '500g', 'staples', true, '4 hrs'),
    ]
  },
  top_ramen_curry_sachet: {
    query: 'top ramen sachet', canonicalName: 'Top Ramen Curry (S)', category: 'Packaged Foods', icon: '🍜', prices: [
      p('giant', 'Top Ramen Sachet', 1.59, 1.89, 0, '15g', 'noodles', true, 'Same day'),
    ]
  },
  top_ramen_fiery_sachet: {
    query: 'top ramen fiery sachet', canonicalName: 'Top Ramen Fiery (S)', category: 'Packaged Foods', icon: '🍜', prices: [
      p('grabmart', 'Fiery Chilli Sachet', 1.59, 1.89, 0, '15g', 'noodles', true, '15 min'),
    ]
  },
  mother_dairy_full_cream_200ml: {
    query: 'mother dairy tetra 200ml', canonicalName: 'Mother Dairy (200ml)', category: 'Dairy', icon: '🥛', prices: [
      p('pandamart', 'Full Cream 200ml', 1.95, 2.25, 0, '200ml', 'milk', true, '15 min'),
    ]
  },
  amul_garlic_herbs_spread: {
    query: 'garlic herbs spread', canonicalName: 'Amul Garlic & Herbs', category: 'Dairy', icon: '🧀', prices: [
      p('amazon_sg', 'Garlic Spread 200g', 3.23, 3.8, 13, '200g', 'cheese', true, '2 hrs'),
    ]
  },
  mother_dairy_diet_milk: {
    query: 'diet milk poly', canonicalName: 'Mother Dairy (Diet)', category: 'Dairy', icon: '🥛', prices: [
      p('fairprice', 'Diet Milk 500ml', 1.95, 2.25, 0, '500ml', 'milk', true, '2 hrs'),
    ]
  },
  haldiram_masala_peanuts: {
    query: 'masala peanuts', canonicalName: 'Haldiram Masala Peanuts', category: 'Snacks', icon: '🥜', prices: [
      p('redmart', 'Masala Peanuts 200g', 2.68, 3.25, 18, '200g', 'snacks', true, '1 day'),
    ]
  },
  amul_sugarfree_dark_chocolate_150g: {
    query: 'sugarfree dark chocolate', canonicalName: 'Amul Sugarfree Dark', category: 'Snacks', icon: '🍫', prices: [
      p('coldstorage', 'Sugarfree Dark 150g', 4.14, 4.71, 9, '150g', 'chocolate', true, 'Same day'),
    ]
  },
  real_activ_tender_coconut_water: {
    query: 'tender coconut water', canonicalName: 'Real Activ Coconut', category: 'Beverages', icon: '🥥', prices: [
      p('shengsiong', 'Coconut Water 200ml', 2.32, 2.71, 10, '200ml', 'beverages', true, '4 hrs'),
    ]
  },
  tata_sampann_unpolished_tur_dal: {
    query: 'unpolished tur dal', canonicalName: 'Tata Unpolished Tur', category: 'Grains & Pulses', icon: '🫘', prices: [
      p('giant', 'Unpolished Tur 1kg', 4.86, 5.8, 16, '1 kg', 'pulses', true, 'Same day'),
    ]
  },
  mother_dairy_fruit_yogurt_mango: {
    query: 'mango yogurt cup', canonicalName: 'Mother Dairy Mango', category: 'Dairy', icon: '🍨', prices: [
      p('grabmart', 'Mango Yogurt 100g', 2.14, 2.53, 12, '100g', 'yogurt', true, '15 min'),
    ]
  },
  nescafe_gold_decaf_100g: {
    query: 'decaf coffee jar', canonicalName: 'Nescafe Gold Decaf', category: 'Beverages', icon: '☕', prices: [
      p('pandamart', 'Gold Decaf 100g', 12.14, 13.62, 10, '100g', 'coffee', true, '15 min'),
    ]
  },
  haldiram_baked_bhujia_200g: {
    query: 'baked bhujia', canonicalName: 'Haldiram Baked Bhujia', category: 'Snacks', icon: '🍿', prices: [
      p('amazon_sg', 'Baked Bhujia 200g', 3.05, 3.62, 15, '200g', 'snacks', true, '2 hrs'),
    ]
  },
  papaya_large_regular: {
    query: 'papaya', canonicalName: 'Papaya (Large Regular)', category: 'Fruits', icon: '🥭', prices: [
      p('fairprice', 'Papaya (Large Regular)', 3.15, 3.65, 10, '1 pc', 'fruits', true, '2 hrs'),
    ]
  },
  papaya_organic_small: {
    query: 'papaya', canonicalName: 'Papaya (Organic Small)', category: 'Fruits', icon: '🥭', prices: [
      p('redmart', 'Papaya (Organic Small)', 2.83, 3.36, 15, '1 pc', 'fruits', true, '1 day'),
    ]
  },
  guava_pink_1kg: {
    query: 'guava', canonicalName: 'Guava (Pink) 1kg', category: 'Fruits', icon: '🍐', prices: [
      p('coldstorage', 'Guava (Pink) 1kg', 3.57, 4.22, 14, '1 kg', 'fruits', true, 'Same day'),
    ]
  },
  guava_white_1kg: {
    query: 'guava', canonicalName: 'Guava (White) 1kg', category: 'Fruits', icon: '🍐', prices: [
      p('shengsiong', 'Guava (White) 1kg', 3.25, 3.95, 18, '1 kg', 'fruits', true, '4 hrs'),
    ]
  },
  pomegranate_peeled_200g: {
    query: 'pomegranate', canonicalName: 'Pomegranate (Peeled)', category: 'Fruits', icon: '🍎', prices: [
      p('giant', 'Pomegranate (Peeled)', 4.86, 5.56, 10, '200g', 'fruits', true, 'Same day'),
    ]
  },
  pineapple_peeled_chunks_200g: {
    query: 'pineapple', canonicalName: 'Pineapple (Peeled Chunks)', category: 'Fruits', icon: '🍍', prices: [
      p('grabmart', 'Pineapple (Peeled Chunks)', 4.06, 4.67, 10, '200g', 'fruits', true, '15 min'),
    ]
  },
  muskmelon_regular_1pc: {
    query: 'muskmelon', canonicalName: 'Muskmelon Regular', category: 'Fruits', icon: '🍈', prices: [
      p('pandamart', 'Muskmelon Regular', 2.7, 3.22, 15, '1 pc', 'fruits', true, '15 min'),
    ]
  },
  sunmelon_premium_1pc: {
    query: 'sunmelon', canonicalName: 'Sunmelon (Premium)', category: 'Fruits', icon: '🍈', prices: [
      p('amazon_sg', 'Sunmelon (Premium)', 3.28, 3.76, 9, '1 pc', 'fruits', true, '2 hrs'),
    ]
  },
  watermelon_half_cut: {
    query: 'watermelon', canonicalName: 'Watermelon (Half Cut)', category: 'Fruits', icon: '🍉', prices: [
      p('fairprice', 'Watermelon (Half Cut)', 2.59, 3.05, 13, '1 pc', 'fruits', true, '2 hrs'),
    ]
  },
  watermelon_small_2kg: {
    query: 'watermelon', canonicalName: 'Watermelon (Small 2kg)', category: 'Fruits', icon: '🍉', prices: [
      p('redmart', 'Watermelon (Small 2kg)', 3.01, 3.51, 11, '2 kg', 'fruits', true, '1 day'),
    ]
  },
  grapes_green_1kg_value: {
    query: 'grapes', canonicalName: 'Grapes (Green) Value Pack', category: 'Fruits', icon: '🍇', prices: [
      p('coldstorage', 'Grapes (Green) Value Pack', 5.39, 6.56, 18, '1 kg', 'fruits', true, 'Same day'),
    ]
  },
  grapes_sonaka_500g: {
    query: 'grapes', canonicalName: 'Grapes (Sonaka)', category: 'Fruits', icon: '🍇', prices: [
      p('shengsiong', 'Grapes (Sonaka)', 3.55, 4.42, 21, '500g', 'fruits', true, '4 hrs'),
    ]
  },
  banana_robusta_12pc: {
    query: 'banana', canonicalName: 'Banana (Robusta) 12pc', category: 'Fruits', icon: '🍌', prices: [
      p('giant', 'Banana (Robusta) 12pc', 2.92, 3.38, 10, '12 pc', 'fruits', true, 'Same day'),
    ]
  },
  banana_elaichi_500g: {
    query: 'banana', canonicalName: 'Banana (Elaichi)', category: 'Fruits', icon: '🍌', prices: [
      p('grabmart', 'Banana (Elaichi)', 2.72, 3.16, 10, '500g', 'fruits', true, '15 min'),
    ]
  },
  banana_red_3pc: {
    query: 'banana', canonicalName: 'Banana (Red) 3pc', category: 'Fruits', icon: '🍌', prices: [
      p('pandamart', 'Banana (Red) 3pc', 2.37, 2.91, 21, '3 pc', 'fruits', true, '15 min'),
    ]
  },
  orange_valencia_imported_1kg: {
    query: 'orange', canonicalName: 'Orange (Valencia Imported)', category: 'Fruits', icon: '🍊', prices: [
      p('amazon_sg', 'Orange (Valencia Imported)', 5.01, 5.65, 8, '1 kg', 'fruits', true, '2 hrs'),
    ]
  },
  mandarin_premium_500g: {
    query: 'mandarin', canonicalName: 'Mandarin (Premium)', category: 'Fruits', icon: '🍊', prices: [
      p('fairprice', 'Mandarin (Premium)', 4.39, 5.55, 22, '500g', 'fruits', true, '2 hrs'),
    ]
  },
  citrus_kinnu_1kg: {
    query: 'kinnu', canonicalName: 'Citrus (Kinnu) 1kg', category: 'Fruits', icon: '🍊', prices: [
      p('redmart', 'Citrus (Kinnu) 1kg', 3.48, 4.33, 21, '1 kg', 'fruits', true, '1 day'),
    ]
  },
  pomelo_large_1pc: {
    query: 'pomelo', canonicalName: 'Pomelo (Large)', category: 'Fruits', icon: '🍊', prices: [
      p('coldstorage', 'Pomelo (Large)', 4.83, 6.09, 22, '1 pc', 'fruits', true, 'Same day'),
    ]
  },
  custard_apple_500g: {
    query: 'custard apple', canonicalName: 'Custard Apple (Sitaphal)', category: 'Fruits', icon: '🍏', prices: [
      p('shengsiong', 'Custard Apple (Sitaphal)', 3.54, 4.33, 19, '500g', 'fruits', true, '4 hrs'),
    ]
  },
  pear_green_imported_500g: {
    query: 'pear', canonicalName: 'Pear (Green Imported)', category: 'Fruits', icon: '🍐', prices: [
      p('giant', 'Pear (Green Imported)', 5.41, 6.38, 14, '500g', 'fruits', true, 'Same day'),
    ]
  },
  plum_imported_250g: {
    query: 'plum', canonicalName: 'Plum (Imported)', category: 'Fruits', icon: '🍑', prices: [
      p('grabmart', 'Plum (Imported)', 4.65, 5.69, 19, '250g', 'fruits', true, '15 min'),
    ]
  },
  peach_fresh_250g: {
    query: 'peach', canonicalName: 'Peach (Fresh)', category: 'Fruits', icon: '🍑', prices: [
      p('pandamart', 'Peach (Fresh)', 4.14, 4.78, 11, '250g', 'fruits', true, '15 min'),
    ]
  },
  apricot_imported_200g: {
    query: 'apricot', canonicalName: 'Apricot (Imported)', category: 'Fruits', icon: '🍑', prices: [
      p('amazon_sg', 'Apricot (Imported)', 5.05, 5.96, 14, '200g', 'fruits', true, '2 hrs'),
    ]
  },
  potato_new_crop_2kg: {
    query: 'potato', canonicalName: 'Potato (New Crop) 2kg', category: 'Vegetables', icon: '🥔', prices: [
      p('fairprice', 'Potato (New Crop) 2kg', 3.01, 3.51, 11, '2 kg', 'vegetables', true, '2 hrs'),
    ]
  },
  potato_jyoti_1kg: {
    query: 'potato', canonicalName: 'Potato (Jyoti)', category: 'Vegetables', icon: '🥔', prices: [
      p('redmart', 'Potato (Jyoti)', 2.21, 2.67, 18, '1 kg', 'vegetables', true, '1 day'),
    ]
  },
  potato_pahadi_1kg: {
    query: 'potato', canonicalName: 'Potato (Pahadi)', category: 'Vegetables', icon: '🥔', prices: [
      p('coldstorage', 'Potato (Pahadi)', 2.32, 2.76, 15, '1 kg', 'vegetables', true, 'Same day'),
    ]
  },
  onion_white_500g: {
    query: 'onion', canonicalName: 'Onion (White)', category: 'Vegetables', icon: '🧅', prices: [
      p('shengsiong', 'Onion (White)', 2.35, 2.78, 12, '500g', 'vegetables', true, '4 hrs'),
    ]
  },
  onion_sambhar_250g: {
    query: 'onion', canonicalName: 'Onion (Sambhar)', category: 'Vegetables', icon: '🧅', prices: [
      p('giant', 'Onion (Sambhar)', 2.14, 2.56, 16, '250g', 'vegetables', true, 'Same day'),
    ]
  },
  tomato_hybrid_2kg_value: {
    query: 'tomato', canonicalName: 'Tomato (Hybrid) 2kg', category: 'Vegetables', icon: '🍅', prices: [
      p('grabmart', 'Tomato (Hybrid) 2kg', 3.48, 4.09, 13, '2 kg', 'vegetables', true, '15 min'),
    ]
  },
  tomato_local_desi_1kg: {
    query: 'tomato', canonicalName: 'Tomato (Local Desi)', category: 'Vegetables', icon: '🍅', prices: [
      p('pandamart', 'Tomato (Local Desi)', 2.54, 3.15, 22, '1 kg', 'vegetables', true, '15 min'),
    ]
  },
  tomato_plum_imported_250g: {
    query: 'tomato', canonicalName: 'Tomato (Plum Imported)', category: 'Vegetables', icon: '🍅', prices: [
      p('amazon_sg', 'Tomato (Plum Imported)', 3.28, 3.98, 18, '250g', 'vegetables', true, '2 hrs'),
    ]
  },
  spinach_bunch_large: {
    query: 'spinach', canonicalName: 'Spinach (Large Bunch)', category: 'Vegetables', icon: '🥬', prices: [
      p('fairprice', 'Spinach (Large Bunch)', 2.19, 2.67, 20, '1 pc', 'vegetables', true, '2 hrs'),
    ]
  },
  methi_bunch_large: {
    query: 'methi', canonicalName: 'Methi (Large Bunch)', category: 'Vegetables', icon: '🥬', prices: [
      p('redmart', 'Methi (Large Bunch)', 2.3, 2.73, 13, '1 pc', 'vegetables', true, '1 day'),
    ]
  },
  amaranth_leaves_bunch: {
    query: 'amaranth', canonicalName: 'Amaranth Leaves', category: 'Vegetables', icon: '🥬', prices: [
      p('coldstorage', 'Amaranth Leaves', 2.01, 2.36, 9, '1 pc', 'vegetables', true, 'Same day'),
    ]
  },
  coriander_leaves_value_pack: {
    query: 'coriander', canonicalName: 'Coriander (Value Pack)', category: 'Vegetables', icon: '🌿', prices: [
      p('shengsiong', 'Coriander (Value Pack)', 2.32, 2.71, 10, '1 pc', 'vegetables', true, '4 hrs'),
    ]
  },
  mint_leaves_value_pack: {
    query: 'mint', canonicalName: 'Mint (Value Pack)', category: 'Vegetables', icon: '🌿', prices: [
      p('giant', 'Mint (Value Pack)', 2.32, 2.71, 10, '1 pc', 'vegetables', true, 'Same day'),
    ]
  },
  curry_leaves_pouch: {
    query: 'curry leaves', canonicalName: 'Curry Leaves (Pouch)', category: 'Vegetables', icon: '🌿', prices: [
      p('grabmart', 'Curry Leaves (Pouch)', 1.85, 2.18, 9, '1 pc', 'vegetables', true, '15 min'),
    ]
  },
  mustard_greens_sarson_bunch: {
    query: 'mustard greens', canonicalName: 'Mustard Greens (Sarson)', category: 'Vegetables', icon: '🥬', prices: [
      p('pandamart', 'Mustard Greens (Sarson)', 2.59, 3.13, 17, '1 pc', 'vegetables', true, '15 min'),
    ]
  },
  bathua_greens_bunch: {
    query: 'bathua', canonicalName: 'Bathua Greens', category: 'Vegetables', icon: '🥬', prices: [
      p('amazon_sg', 'Bathua Greens', 2.23, 2.62, 11, '1 pc', 'vegetables', true, '2 hrs'),
    ]
  },
  bottle_gourd_large_1pc: {
    query: 'bottle gourd', canonicalName: 'Bottle Gourd (Large)', category: 'Vegetables', icon: '🥒', prices: [
      p('fairprice', 'Bottle Gourd (Large)', 2.34, 2.84, 19, '1 pc', 'vegetables', true, '2 hrs'),
    ]
  },
  bitter_gourd_small_250g: {
    query: 'bitter gourd', canonicalName: 'Bitter Gourd (Small)', category: 'Vegetables', icon: '🥒', prices: [
      p('redmart', 'Bitter Gourd (Small)', 2.3, 2.84, 22, '250g', 'vegetables', true, '1 day'),
    ]
  },
  ridge_gourd_500g: {
    query: 'ridge gourd', canonicalName: 'Ridge Gourd', category: 'Vegetables', icon: '🥒', prices: [
      p('coldstorage', 'Ridge Gourd', 2.59, 3.07, 14, '500g', 'vegetables', true, 'Same day'),
    ]
  },
  snake_gourd_1pc: {
    query: 'snake gourd', canonicalName: 'Snake Gourd', category: 'Vegetables', icon: '🥒', prices: [
      p('shengsiong', 'Snake Gourd', 2.3, 2.8, 20, '1 pc', 'vegetables', true, '4 hrs'),
    ]
  },
  sponge_gourd_500g: {
    query: 'sponge gourd', canonicalName: 'Sponge Gourd', category: 'Vegetables', icon: '🥒', prices: [
      p('giant', 'Sponge Gourd', 2.57, 3.04, 13, '500g', 'vegetables', true, 'Same day'),
    ]
  },
  ivy_gourd_tindora_500g: {
    query: 'ivy gourd', canonicalName: 'Ivy Gourd (Tindora)', category: 'Vegetables', icon: '🥒', prices: [
      p('grabmart', 'Ivy Gourd (Tindora)', 2.57, 3, 10, '500g', 'vegetables', true, '15 min'),
    ]
  },
  ash_gourd_cut_500g: {
    query: 'ash gourd', canonicalName: 'Ash Gourd (Cut)', category: 'Vegetables', icon: '🥒', prices: [
      p('pandamart', 'Ash Gourd (Cut)', 2.17, 2.55, 9, '500g', 'vegetables', true, '15 min'),
    ]
  },
  pumpkin_yellow_cut_500g: {
    query: 'pumpkin', canonicalName: 'Pumpkin Yellow (Cut)', category: 'Vegetables', icon: '🎃', prices: [
      p('amazon_sg', 'Pumpkin Yellow (Cut)', 2.28, 2.78, 20, '500g', 'vegetables', true, '2 hrs'),
    ]
  },
  carrot_orange_1kg: {
    query: 'carrot', canonicalName: 'Carrot (Orange) 1kg', category: 'Vegetables', icon: '🥕', prices: [
      p('fairprice', 'Carrot (Orange) 1kg', 3.23, 3.82, 14, '1 kg', 'vegetables', true, '2 hrs'),
    ]
  },
  carrot_red_desi_1kg: {
    query: 'carrot', canonicalName: 'Carrot (Red Desi) 1kg', category: 'Vegetables', icon: '🥕', prices: [
      p('redmart', 'Carrot (Red Desi) 1kg', 2.88, 3.47, 17, '1 kg', 'vegetables', true, '1 day'),
    ]
  },
  radish_white_mooli_2pc: {
    query: 'radish', canonicalName: 'Radish White (Mooli)', category: 'Vegetables', icon: '🥒', prices: [
      p('coldstorage', 'Radish White (Mooli)', 2.21, 2.64, 15, '2 pc', 'vegetables', true, 'Same day'),
    ]
  },
  radish_red_round_250g: {
    query: 'radish', canonicalName: 'Radish Red (Round)', category: 'Vegetables', icon: '🥒', prices: [
      p('shengsiong', 'Radish Red (Round)', 2.46, 2.96, 17, '250g', 'vegetables', true, '4 hrs'),
    ]
  },
  beetroot_1kg_value: {
    query: 'beetroot', canonicalName: 'Beetroot (Value Pack)', category: 'Vegetables', icon: '🥬', prices: [
      p('giant', 'Beetroot (Value Pack)', 3.21, 3.8, 14, '1 kg', 'vegetables', true, 'Same day'),
    ]
  },
  turnip_shalgam_500g: {
    query: 'turnip', canonicalName: 'Turnip (Shalgam)', category: 'Vegetables', icon: '🥬', prices: [
      p('grabmart', 'Turnip (Shalgam)', 2.5, 3.05, 20, '500g', 'vegetables', true, '15 min'),
    ]
  },
  elephant_yam_suran_500g: {
    query: 'yam', canonicalName: 'Elephant Yam (Suran)', category: 'Vegetables', icon: '🥔', prices: [
      p('pandamart', 'Elephant Yam (Suran)', 2.5, 2.89, 8, '500g', 'vegetables', true, '15 min'),
    ]
  },
  colocasia_arbi_500g: {
    query: 'arbi', canonicalName: 'Colocasia (Arbi)', category: 'Vegetables', icon: '🥔', prices: [
      p('amazon_sg', 'Colocasia (Arbi)', 2.65, 3.18, 17, '500g', 'vegetables', true, '2 hrs'),
    ]
  },
  cabbage_small_regular: {
    query: 'cabbage', canonicalName: 'Cabbage (Small Regular)', category: 'Vegetables', icon: '🥬', prices: [
      p('fairprice', 'Cabbage (Small Regular)', 2.21, 2.69, 20, '1 pc', 'vegetables', true, '2 hrs'),
    ]
  },
  cauliflower_medium_1pc: {
    query: 'cauliflower', canonicalName: 'Cauliflower (Medium)', category: 'Vegetables', icon: '🥦', prices: [
      p('redmart', 'Cauliflower (Medium)', 2.7, 3.22, 15, '1 pc', 'vegetables', true, '1 day'),
    ]
  },
  broccoli_purple_1pc: {
    query: 'broccoli', canonicalName: 'Broccoli (Purple)', category: 'Vegetables', icon: '🥦', prices: [
      p('coldstorage', 'Broccoli (Purple)', 3.45, 3.98, 10, '1 pc', 'vegetables', true, 'Same day'),
    ]
  },
  brussels_sprouts_200g: {
    query: 'brussels sprouts', canonicalName: 'Brussels Sprouts', category: 'Vegetables', icon: '🥦', prices: [
      p('shengsiong', 'Brussels Sprouts', 4.81, 5.47, 9, '200g', 'vegetables', true, '4 hrs'),
    ]
  },
  green_peas_shelled_200g: {
    query: 'green peas', canonicalName: 'Green Peas (Shelled)', category: 'Vegetables', icon: '🫛', prices: [
      p('giant', 'Green Peas (Shelled)', 3.28, 3.95, 16, '200g', 'vegetables', true, 'Same day'),
    ]
  },
  french_beans_regular_250g: {
    query: 'french beans', canonicalName: 'French Beans', category: 'Vegetables', icon: '🫛', prices: [
      p('grabmart', 'French Beans', 2.52, 2.96, 12, '250g', 'vegetables', true, '15 min'),
    ]
  },
  cluster_beans_gawar_250g: {
    query: 'cluster beans', canonicalName: 'Cluster Beans (Gawar)', category: 'Vegetables', icon: '🫛', prices: [
      p('pandamart', 'Cluster Beans (Gawar)', 2.28, 2.67, 10, '250g', 'vegetables', true, '15 min'),
    ]
  },
  cowpea_chawli_beans_250g: {
    query: 'cowpea', canonicalName: 'Cowpea (Chawli) Beans', category: 'Vegetables', icon: '🫛', prices: [
      p('amazon_sg', 'Cowpea (Chawli) Beans', 2.35, 2.89, 21, '250g', 'vegetables', true, '2 hrs'),
    ]
  },
  flat_beans_sem_250g: {
    query: 'flat beans', canonicalName: 'Flat Beans (Sem)', category: 'Vegetables', icon: '🫛', prices: [
      p('fairprice', 'Flat Beans (Sem)', 2.48, 2.93, 12, '250g', 'vegetables', true, '2 hrs'),
    ]
  },
  broad_beans_papdi_250g: {
    query: 'broad beans', canonicalName: 'Broad Beans (Papdi)', category: 'Vegetables', icon: '🫛', prices: [
      p('redmart', 'Broad Beans (Papdi)', 2.55, 3.07, 17, '250g', 'vegetables', true, '1 day'),
    ]
  },
  green_chilli_thick_100g: {
    query: 'green chilli', canonicalName: 'Green Chilli (Thick)', category: 'Vegetables', icon: '🌶️', prices: [
      p('coldstorage', 'Green Chilli (Thick)', 2.05, 2.42, 11, '100g', 'vegetables', true, 'Same day'),
    ]
  },
  bhavnagri_chilli_200g: {
    query: 'bhavnagri chilli', canonicalName: 'Bhavnagri Chilli', category: 'Vegetables', icon: '🌶️', prices: [
      p('shengsiong', 'Bhavnagri Chilli', 2.23, 2.65, 14, '200g', 'vegetables', true, '4 hrs'),
    ]
  },
  capsicum_red_yellow_twin_pack: {
    query: 'capsicum', canonicalName: 'Capsicum (Red & Yellow)', category: 'Vegetables', icon: '🫑', prices: [
      p('giant', 'Capsicum (Red & Yellow)', 4.72, 5.58, 14, '1 pack', 'vegetables', true, 'Same day'),
    ]
  },
  capsicum_orange_1pc: {
    query: 'capsicum', canonicalName: 'Capsicum (Orange)', category: 'Vegetables', icon: '🫑', prices: [
      p('grabmart', 'Capsicum (Orange)', 3.32, 3.82, 9, '1 pc', 'vegetables', true, '15 min'),
    ]
  },
  okra_ladies_finger_1kg_value: {
    query: 'okra', canonicalName: 'Okra (Ladies Finger) 1kg', category: 'Vegetables', icon: '🥒', prices: [
      p('pandamart', 'Okra (Ladies Finger) 1kg', 3.25, 3.75, 10, '1 kg', 'vegetables', true, '15 min'),
    ]
  },
  brinjal_long_purple_500g: {
    query: 'brinjal', canonicalName: 'Brinjal (Long Purple)', category: 'Vegetables', icon: '🍆', prices: [
      p('amazon_sg', 'Brinjal (Long Purple)', 2.48, 3.02, 19, '500g', 'vegetables', true, '2 hrs'),
    ]
  },
  brinjal_round_green_500g: {
    query: 'brinjal', canonicalName: 'Brinjal (Round Green)', category: 'Vegetables', icon: '🍆', prices: [
      p('fairprice', 'Brinjal (Round Green)', 2.37, 2.82, 14, '500g', 'vegetables', true, '2 hrs'),
    ]
  },
  brinjal_small_kateri_250g: {
    query: 'brinjal', canonicalName: 'Brinjal (Small Kateri)', category: 'Vegetables', icon: '🍆', prices: [
      p('redmart', 'Brinjal (Small Kateri)', 2.28, 2.69, 12, '250g', 'vegetables', true, '1 day'),
    ]
  },
  drumstick_3pc_pack: {
    query: 'drumstick', canonicalName: 'Drumstick (3pc Pack)', category: 'Vegetables', icon: '🥒', prices: [
      p('coldstorage', 'Drumstick (3pc Pack)', 2.19, 2.64, 17, '1 pack', 'vegetables', true, 'Same day'),
    ]
  },
  cucumber_english_long_2pc: {
    query: 'cucumber', canonicalName: 'Cucumber (English Long)', category: 'Vegetables', icon: '🥒', prices: [
      p('shengsiong', 'Cucumber (English Long)', 2.92, 3.36, 9, '2 pc', 'vegetables', true, '4 hrs'),
    ]
  },
  cucumber_desi_regular_500g: {
    query: 'cucumber', canonicalName: 'Cucumber (Desi Regular)', category: 'Vegetables', icon: '🥒', prices: [
      p('giant', 'Cucumber (Desi Regular)', 2.15, 2.58, 16, '500g', 'vegetables', true, 'Same day'),
    ]
  },
  lemon_seedless_large_3pc: {
    query: 'lemon', canonicalName: 'Lemon (Seedless Large)', category: 'Vegetables', icon: '🍋', prices: [
      p('grabmart', 'Lemon (Seedless Large)', 2.19, 2.62, 15, '3 pc', 'vegetables', true, '15 min'),
    ]
  },
  ginger_fresh_250g_value: {
    query: 'ginger', canonicalName: 'Ginger (Fresh Value Pack)', category: 'Vegetables', icon: '🫚', prices: [
      p('pandamart', 'Ginger (Fresh Value Pack)', 3.34, 3.98, 15, '250g', 'vegetables', true, '15 min'),
    ]
  },
  garlic_peeled_100g_pouch: {
    query: 'garlic', canonicalName: 'Garlic (Peeled Pouch)', category: 'Vegetables', icon: '🧄', prices: [
      p('amazon_sg', 'Garlic (Peeled Pouch)', 3.23, 3.82, 14, '100g', 'vegetables', true, '2 hrs'),
    ]
  },
  sweet_potato_shakarkandi_1kg: {
    query: 'sweet potato', canonicalName: 'Sweet Potato (1kg)', category: 'Vegetables', icon: '🍠', prices: [
      p('fairprice', 'Sweet Potato (1kg)', 3.37, 4.04, 16, '1 kg', 'vegetables', true, '2 hrs'),
    ]
  },
  sweet_corn_cob_2pc: {
    query: 'sweet corn', canonicalName: 'Sweet Corn (Cob)', category: 'Vegetables', icon: '🌽', prices: [
      p('redmart', 'Sweet Corn (Cob)', 2.37, 2.76, 9, '2 pc', 'vegetables', true, '1 day'),
    ]
  },
  baby_corn_peeled_200g_pack: {
    query: 'baby corn', canonicalName: 'Baby Corn (Peeled)', category: 'Vegetables', icon: '🌽', prices: [
      p('coldstorage', 'Baby Corn (Peeled)', 3.05, 3.49, 8, '200g', 'vegetables', true, 'Same day'),
    ]
  },
  mushroom_oyster_200g: {
    query: 'mushroom', canonicalName: 'Mushroom (Oyster)', category: 'Vegetables', icon: '🍄', prices: [
      p('shengsiong', 'Mushroom (Oyster)', 4.66, 5.58, 16, '200g', 'vegetables', true, '4 hrs'),
    ]
  },
  mushroom_shiitake_100g: {
    query: 'mushroom', canonicalName: 'Mushroom (Shiitake)', category: 'Vegetables', icon: '🍄', prices: [
      p('giant', 'Mushroom (Shiitake)', 6.79, 8.53, 21, '100g', 'vegetables', true, 'Same day'),
    ]
  },
  mushroom_portobello_2pc: {
    query: 'mushroom', canonicalName: 'Mushroom (Portobello)', category: 'Vegetables', icon: '🍄', prices: [
      p('grabmart', 'Mushroom (Portobello)', 5.45, 6.67, 19, '2 pc', 'vegetables', true, '15 min'),
    ]
  },
  celery_imported_1pc: {
    query: 'celery', canonicalName: 'Celery (Imported)', category: 'Vegetables', icon: '🌿', prices: [
      p('pandamart', 'Celery (Imported)', 3.28, 3.89, 14, '1 pc', 'vegetables', true, '15 min'),
    ]
  },
  parsley_curly_50g: {
    query: 'parsley', canonicalName: 'Parsley (Curly)', category: 'Vegetables', icon: '🌿', prices: [
      p('amazon_sg', 'Parsley (Curly)', 2.59, 3.16, 20, '50g', 'vegetables', true, '2 hrs'),
    ]
  },
  basil_italian_50g: {
    query: 'basil', canonicalName: 'Basil (Italian)', category: 'Vegetables', icon: '🌿', prices: [
      p('fairprice', 'Basil (Italian)', 2.5, 3.07, 21, '50g', 'vegetables', true, '2 hrs'),
    ]
  },
  rosemary_fresh_20g: {
    query: 'rosemary', canonicalName: 'Rosemary (Fresh)', category: 'Vegetables', icon: '🌿', prices: [
      p('redmart', 'Rosemary (Fresh)', 2.21, 2.64, 15, '20g', 'vegetables', true, '1 day'),
    ]
  },
  thyme_fresh_20g: {
    query: 'thyme', canonicalName: 'Thyme (Fresh)', category: 'Vegetables', icon: '🌿', prices: [
      p('coldstorage', 'Thyme (Fresh)', 2.15, 2.55, 12, '20g', 'vegetables', true, 'Same day'),
    ]
  },
  oregano_fresh_20g: {
    query: 'oregano', canonicalName: 'Oregano (Fresh)', category: 'Vegetables', icon: '🌿', prices: [
      p('shengsiong', 'Oregano (Fresh)', 2.21, 2.67, 18, '20g', 'vegetables', true, '4 hrs'),
    ]
  },
  avocado_local_indian_1pc: {
    query: 'avocado', canonicalName: 'Avocado (Local Indian)', category: 'Fruits', icon: '🥑', prices: [
      p('giant', 'Avocado (Local Indian)', 3.61, 4.13, 9, '1 pc', 'fruits', true, 'Same day'),
    ]
  },
  kiwi_imported_box_3pc: {
    query: 'kiwi', canonicalName: 'Kiwi (Imported Box)', category: 'Fruits', icon: '🥝', prices: [
      p('grabmart', 'Kiwi (Imported Box)', 4.21, 5.04, 16, '3 pc', 'fruits', true, '15 min'),
    ]
  },
  dragon_fruit_white_1pc: {
    query: 'dragon fruit', canonicalName: 'Dragon Fruit (White)', category: 'Fruits', icon: '🐉', prices: [
      p('pandamart', 'Dragon Fruit (White)', 3.57, 4.18, 12, '1 pc', 'fruits', true, '15 min'),
    ]
  },
  passion_fruit_imported_2pc: {
    query: 'passion fruit', canonicalName: 'Passion Fruit (Imported)', category: 'Fruits', icon: '🍇', prices: [
      p('amazon_sg', 'Passion Fruit (Imported)', 5.79, 6.67, 11, '2 pc', 'fruits', true, '2 hrs'),
    ]
  },
  mangosteen_imported_250g: {
    query: 'mangosteen', canonicalName: 'Mangosteen (Imported)', category: 'Fruits', icon: '🥭', prices: [
      p('fairprice', 'Mangosteen (Imported)', 9.57, 11.45, 16, '250g', 'fruits', true, '2 hrs'),
    ]
  },
  rambutan_imported_250g: {
    query: 'rambutan', canonicalName: 'Rambutan (Imported)', category: 'Fruits', icon: '🥭', prices: [
      p('redmart', 'Rambutan (Imported)', 6.83, 8.04, 14, '250g', 'fruits', true, '1 day'),
    ]
  },
  longan_imported_250g: {
    query: 'longan', canonicalName: 'Longan (Imported)', category: 'Fruits', icon: '🥭', prices: [
      p('coldstorage', 'Longan (Imported)', 8.12, 9.98, 19, '250g', 'fruits', true, 'Same day'),
    ]
  },
  custard_apple_premium_1kg: {
    query: 'custard apple', canonicalName: 'Custard Apple (Premium)', category: 'Fruits', icon: '🍏', prices: [
      p('shengsiong', 'Custard Apple (Premium)', 5.28, 6.27, 15, '1 kg', 'fruits', true, '4 hrs'),
    ]
  },
  sapota_chikoo_1kg_value: {
    query: 'chikoo', canonicalName: 'Sapota (Chikoo) Value Pack', category: 'Fruits', icon: '🥔', prices: [
      p('giant', 'Sapota (Chikoo) Value Pack', 3.37, 4.11, 18, '1 kg', 'fruits', true, 'Same day'),
    ]
  },
  guava_allahabad_safeda_1kg: {
    query: 'guava', canonicalName: 'Guava (Allahabad Safeda)', category: 'Fruits', icon: '🍐', prices: [
      p('grabmart', 'Guava (Allahabad Safeda)', 3.59, 4.2, 12, '1 kg', 'fruits', true, '15 min'),
    ]
  },
  apple_fuji_imported_4pc: {
    query: 'apple', canonicalName: 'Apple Fuji (Imported)', category: 'Fruits', icon: '🍎', prices: [
      p('pandamart', 'Apple Fuji (Imported)', 7.48, 8.73, 13, '4 pc', 'fruits', true, '15 min'),
    ]
  },
  apple_granny_smith_4pc: {
    query: 'apple', canonicalName: 'Apple Granny Smith', category: 'Fruits', icon: '🍏', prices: [
      p('amazon_sg', 'Apple Granny Smith', 6.72, 8.24, 18, '4 pc', 'fruits', true, '2 hrs'),
    ]
  },
  apple_shimla_large_1kg: {
    query: 'apple', canonicalName: 'Apple Shimla (Large)', category: 'Fruits', icon: '🍎', prices: [
      p('fairprice', 'Apple Shimla (Large)', 5.3, 6.36, 16, '1 kg', 'fruits', true, '2 hrs'),
    ]
  },
  pear_nashi_imported_2pc: {
    query: 'pear', canonicalName: 'Pear Nashi (Imported)', category: 'Fruits', icon: '🍐', prices: [
      p('redmart', 'Pear Nashi (Imported)', 5.92, 7.18, 17, '2 pc', 'fruits', true, '1 day'),
    ]
  },
  pear_regular_1kg_value: {
    query: 'pear', canonicalName: 'Pear (Regular Value Pack)', category: 'Fruits', icon: '🍐', prices: [
      p('coldstorage', 'Pear (Regular Value Pack)', 4.25, 5.11, 17, '1 kg', 'fruits', true, 'Same day'),
    ]
  },
  plum_indian_500g: {
    query: 'plum', canonicalName: 'Plum (Indian)', category: 'Fruits', icon: '🍑', prices: [
      p('shengsiong', 'Plum (Indian)', 3.48, 4.02, 10, '500g', 'fruits', true, '4 hrs'),
    ]
  },
  peach_fuzz_free_250g: {
    query: 'peach', canonicalName: 'Peach (Fuzz Free)', category: 'Fruits', icon: '🍑', prices: [
      p('giant', 'Peach (Fuzz Free)', 4.74, 5.44, 11, '250g', 'fruits', true, 'Same day'),
    ]
  },
  apricot_fresh_indian_250g: {
    query: 'apricot', canonicalName: 'Apricot (Fresh Indian)', category: 'Fruits', icon: '🍑', prices: [
      p('grabmart', 'Apricot (Fresh Indian)', 3.79, 4.42, 12, '250g', 'fruits', true, '15 min'),
    ]
  },
  grapes_red_seedless_500g: {
    query: 'grapes', canonicalName: 'Grapes (Red Seedless)', category: 'Fruits', icon: '🍇', prices: [
      p('pandamart', 'Grapes (Red Seedless)', 4.14, 4.76, 11, '500g', 'fruits', true, '15 min'),
    ]
  },
  grapes_bangalore_blue_500g: {
    query: 'grapes', canonicalName: 'Grapes (Bangalore Blue)', category: 'Fruits', icon: '🍇', prices: [
      p('amazon_sg', 'Grapes (Bangalore Blue)', 3.21, 3.93, 19, '500g', 'fruits', true, '2 hrs'),
    ]
  },
  pomegranate_premium_large_2pc: {
    query: 'pomegranate', canonicalName: 'Pomegranate (Premium Large)', category: 'Fruits', icon: '🍎', prices: [
      p('fairprice', 'Pomegranate (Premium Large)', 5.63, 6.64, 14, '2 pc', 'fruits', true, '2 hrs'),
    ]
  },
  pineapple_queen_small_1pc: {
    query: 'pineapple', canonicalName: 'Pineapple Queen (Small)', category: 'Fruits', icon: '🍍', prices: [
      p('redmart', 'Pineapple Queen (Small)', 3.12, 3.75, 16, '1 pc', 'fruits', true, '1 day'),
    ]
  },
  papaya_honey_gold_1pc: {
    query: 'papaya', canonicalName: 'Papaya Honey Gold', category: 'Fruits', icon: '🥭', prices: [
      p('coldstorage', 'Papaya Honey Gold', 3.81, 4.55, 15, '1 pc', 'fruits', true, 'Same day'),
    ]
  },
  melon_cantaloupe_1pc: {
    query: 'melon', canonicalName: 'Melon Cantaloupe', category: 'Fruits', icon: '🍈', prices: [
      p('shengsiong', 'Melon Cantaloupe', 3.37, 4.07, 17, '1 pc', 'fruits', true, '4 hrs'),
    ]
  },
  watermelon_black_box_1pc: {
    query: 'watermelon', canonicalName: 'Watermelon (Black Box)', category: 'Fruits', icon: '🍉', prices: [
      p('giant', 'Watermelon (Black Box)', 4.57, 5.18, 9, '1 pc', 'fruits', true, 'Same day'),
    ]
  },
  berries_mixed_pack_200g: {
    query: 'berries', canonicalName: 'Berries (Mixed Pack)', category: 'Fruits', icon: '🍒', prices: [
      p('grabmart', 'Berries (Mixed Pack)', 8.83, 10.71, 17, '200g', 'fruits', true, '15 min'),
    ]
  },
  strawberry_mahabaleshwar_250g: {
    query: 'strawberry', canonicalName: 'Strawberry (Mahabaleshwar)', category: 'Fruits', icon: '🍓', prices: [
      p('pandamart', 'Strawberry (Mahabaleshwar)', 3.97, 4.53, 9, '250g', 'fruits', true, '15 min'),
    ]
  },
  blueberry_imported_125g: {
    query: 'blueberry', canonicalName: 'Blueberry (Imported)', category: 'Fruits', icon: '🫐', prices: [
      p('amazon_sg', 'Blueberry (Imported)', 9.19, 10.29, 9, '125g', 'fruits', true, '2 hrs'),
    ]
  },
  raspberry_imported_125g: {
    query: 'raspberry', canonicalName: 'Raspberry (Imported)', category: 'Fruits', icon: '🍒', prices: [
      p('fairprice', 'Raspberry (Imported)', 9.23, 11.33, 18, '125g', 'fruits', true, '2 hrs'),
    ]
  },
  blackberry_imported_125g: {
    query: 'blackberry', canonicalName: 'Blackberry (Imported)', category: 'Fruits', icon: '🫐', prices: [
      p('redmart', 'Blackberry (Imported)', 10.08, 12.2, 17, '125g', 'fruits', true, '1 day'),
    ]
  },
  mulberry_fresh_200g: {
    query: 'mulberry', canonicalName: 'Mulberry (Fresh)', category: 'Fruits', icon: '🫐', prices: [
      p('coldstorage', 'Mulberry (Fresh)', 3.9, 4.89, 22, '200g', 'fruits', true, 'Same day'),
    ]
  },
  jamun_fresh_250g: {
    query: 'jamun', canonicalName: 'Jamun (Fresh)', category: 'Fruits', icon: '🍇', prices: [
      p('shengsiong', 'Jamun (Fresh)', 5.65, 6.89, 18, '250g', 'fruits', true, '4 hrs'),
    ]
  },
  cherry_imported_250g: {
    query: 'cherry', canonicalName: 'Cherry (Imported)', category: 'Fruits', icon: '🍒', prices: [
      p('giant', 'Cherry (Imported)', 11.57, 14.04, 17, '250g', 'fruits', true, 'Same day'),
    ]
  },
  fig_fresh_anjeer_250g: {
    query: 'fig', canonicalName: 'Fig (Fresh Anjeer)', category: 'Fruits', icon: '🍯', prices: [
      p('grabmart', 'Fig (Fresh Anjeer)', 5.92, 7, 15, '250g', 'fruits', true, '15 min'),
    ]
  },
  dates_kimia_regular_500g: {
    query: 'dates', canonicalName: 'Dates (Kimia Regular)', category: 'Fruits', icon: '🌴', prices: [
      p('pandamart', 'Dates (Kimia Regular)', 5.79, 6.96, 16, '500g', 'fruits', true, '15 min'),
    ]
  },
  dates_medjool_premium_250g: {
    query: 'dates', canonicalName: 'Dates (Medjool Premium)', category: 'Fruits', icon: '🌴', prices: [
      p('amazon_sg', 'Dates (Medjool Premium)', 12.79, 16.33, 22, '250g', 'fruits', true, '2 hrs'),
    ]
  },
  coconut_tender_with_straw: {
    query: 'tender coconut', canonicalName: 'Coconut Tender (With Straw)', category: 'Fruits', icon: '🥥', prices: [
      p('fairprice', 'Coconut Tender (With Straw)', 2.68, 3.29, 20, '1 pc', 'fruits', true, '2 hrs'),
    ]
  },
  coconut_mature_whole_1pc: {
    query: 'coconut', canonicalName: 'Coconut Mature (Whole)', category: 'Fruits', icon: '🥥', prices: [
      p('redmart', 'Coconut Mature (Whole)', 2.5, 2.93, 11, '1 pc', 'fruits', true, '1 day'),
    ]
  },
  coconut_grated_200g_pouch: {
    query: 'coconut', canonicalName: 'Coconut (Grated Pouch)', category: 'Fruits', icon: '🥥', prices: [
      p('coldstorage', 'Coconut (Grated Pouch)', 3.48, 4.15, 15, '200g', 'fruits', true, 'Same day'),
    ]
  },
  water_chestnut_singhara_500g: {
    query: 'singhara', canonicalName: 'Water Chestnut (Singhara)', category: 'Vegetables', icon: '🥔', prices: [
      p('shengsiong', 'Water Chestnut (Singhara)', 3.06, 3.62, 14, '500g', 'vegetables', true, '4 hrs'),
    ]
  },
  lotus_stem_kamal_kakdi_250g: {
    query: 'lotus stem', canonicalName: 'Lotus Stem (Kamal Kakdi)', category: 'Vegetables', icon: '🥒', prices: [
      p('giant', 'Lotus Stem (Kamal Kakdi)', 3.57, 4.13, 10, '250g', 'vegetables', true, 'Same day'),
    ]
  },
  yam_regular_jimikand_500g: {
    query: 'yam', canonicalName: 'Yam Regular (Jimikand)', category: 'Vegetables', icon: '🥔', prices: [
      p('grabmart', 'Yam Regular (Jimikand)', 3.01, 3.73, 21, '500g', 'vegetables', true, '15 min'),
    ]
  },
  sweet_potato_purple_500g: {
    query: 'sweet potato', canonicalName: 'Sweet Potato (Purple)', category: 'Vegetables', icon: '🍠', prices: [
      p('pandamart', 'Sweet Potato (Purple)', 4.15, 4.91, 14, '500g', 'vegetables', true, '15 min'),
    ]
  },
  turmeric_raw_fresh_100g: {
    query: 'turmeric', canonicalName: 'Turmeric (Raw Fresh)', category: 'Vegetables', icon: '🫚', prices: [
      p('amazon_sg', 'Turmeric (Raw Fresh)', 2.41, 2.89, 16, '100g', 'vegetables', true, '2 hrs'),
    ]
  },
  galangal_thai_ginger_100g: {
    query: 'galangal', canonicalName: 'Galangal (Thai Ginger)', category: 'Vegetables', icon: '🫚', prices: [
      p('fairprice', 'Galangal (Thai Ginger)', 4.03, 4.71, 13, '100g', 'vegetables', true, '2 hrs'),
    ]
  },
  lemongrass_fresh_1bunch: {
    query: 'lemongrass', canonicalName: 'Lemongrass', category: 'Vegetables', icon: '🌿', prices: [
      p('redmart', 'Lemongrass', 2.14, 2.51, 10, '1 bunch', 'vegetables', true, '1 day'),
    ]
  },
  kaffir_lime_leaves_10g: {
    query: 'lime leaves', canonicalName: 'Kaffir Lime Leaves', category: 'Vegetables', icon: '🍃', prices: [
      p('coldstorage', 'Kaffir Lime Leaves', 2.35, 2.75, 9, '10g', 'vegetables', true, 'Same day'),
    ]
  },
  banana_flower_vazhaipoo_1pc: {
    query: 'banana flower', canonicalName: 'Banana Flower (Vazhaipoo)', category: 'Vegetables', icon: '🥬', prices: [
      p('shengsiong', 'Banana Flower (Vazhaipoo)', 2.43, 2.91, 16, '1 pc', 'vegetables', true, '4 hrs'),
    ]
  },
  banana_stem_vazhaithandu_1pc: {
    query: 'banana stem', canonicalName: 'Banana Stem (Vazhaithandu)', category: 'Vegetables', icon: '🥒', prices: [
      p('giant', 'Banana Stem (Vazhaithandu)', 2.37, 2.8, 12, '1 pc', 'vegetables', true, 'Same day'),
    ]
  },
  raw_banana_green_3pc: {
    query: 'raw banana', canonicalName: 'Raw Banana (Green)', category: 'Vegetables', icon: '🍌', prices: [
      p('grabmart', 'Raw Banana (Green)', 2.26, 2.75, 19, '3 pc', 'vegetables', true, '15 min'),
    ]
  },
  raw_mango_totapuri_1kg: {
    query: 'raw mango', canonicalName: 'Raw Mango (Totapuri)', category: 'Vegetables', icon: '🥭', prices: [
      p('pandamart', 'Raw Mango (Totapuri)', 3.43, 4.11, 16, '1 kg', 'vegetables', true, '15 min'),
    ]
  },
  raw_mango_regular_500g: {
    query: 'raw mango', canonicalName: 'Raw Mango (Regular)', category: 'Vegetables', icon: '🥭', prices: [
      p('amazon_sg', 'Raw Mango (Regular)', 2.52, 3.11, 22, '500g', 'vegetables', true, '2 hrs'),
    ]
  },
  spinach_baby_leaves_100g: {
    query: 'spinach', canonicalName: 'Spinach (Baby Leaves)', category: 'Vegetables', icon: '🥬', prices: [
      p('fairprice', 'Spinach (Baby Leaves)', 2.94, 3.58, 19, '100g', 'vegetables', true, '2 hrs'),
    ]
  },
  lettuce_lollo_rosso_1pc: {
    query: 'lettuce', canonicalName: 'Lettuce Lollo Rosso', category: 'Vegetables', icon: '🥬', prices: [
      p('redmart', 'Lettuce Lollo Rosso', 3.63, 4.16, 10, '1 pc', 'vegetables', true, '1 day'),
    ]
  },
  lettuce_butterhead_1pc: {
    query: 'lettuce', canonicalName: 'Lettuce Butterhead', category: 'Vegetables', icon: '🥬', prices: [
      p('coldstorage', 'Lettuce Butterhead', 3.74, 4.69, 22, '1 pc', 'vegetables', true, 'Same day'),
    ]
  },
  kale_curly_leaves_100g: {
    query: 'kale', canonicalName: 'Kale (Curly Leaves)', category: 'Vegetables', icon: '🥬', prices: [
      p('shengsiong', 'Kale (Curly Leaves)', 4.3, 5.27, 19, '100g', 'vegetables', true, '4 hrs'),
    ]
  },
  arugula_rocket_leaves_100g: {
    query: 'arugula', canonicalName: 'Arugula (Rocket Leaves)', category: 'Vegetables', icon: '🥬', prices: [
      p('giant', 'Arugula (Rocket Leaves)', 4.66, 5.47, 13, '100g', 'vegetables', true, 'Same day'),
    ]
  },
  bok_choy_chinese_cabbage_1pc: {
    query: 'bok choy', canonicalName: 'Bok Choy', category: 'Vegetables', icon: '🥬', prices: [
      p('grabmart', 'Bok Choy', 3.48, 4.13, 14, '1 pc', 'vegetables', true, '15 min'),
    ]
  },
  pak_choi_medium_1pc: {
    query: 'pak choi', canonicalName: 'Pak Choi', category: 'Vegetables', icon: '🥬', prices: [
      p('pandamart', 'Pak Choi', 3.35, 3.95, 13, '1 pc', 'vegetables', true, '15 min'),
    ]
  },
  red_cabbage_small_1pc: {
    query: 'red cabbage', canonicalName: 'Red Cabbage (Small)', category: 'Vegetables', icon: '🥬', prices: [
      p('amazon_sg', 'Red Cabbage (Small)', 2.37, 2.8, 12, '1 pc', 'vegetables', true, '2 hrs'),
    ]
  },
  chinese_cabbage_large_1pc: {
    query: 'chinese cabbage', canonicalName: 'Chinese Cabbage', category: 'Vegetables', icon: '🥬', prices: [
      p('fairprice', 'Chinese Cabbage', 3.41, 4.2, 20, '1 pc', 'vegetables', true, '2 hrs'),
    ]
  },
  zucchini_yellow_imported_1pc: {
    query: 'zucchini', canonicalName: 'Zucchini (Yellow Imported)', category: 'Vegetables', icon: '🥒', prices: [
      p('redmart', 'Zucchini (Yellow Imported)', 3.86, 4.65, 17, '1 pc', 'vegetables', true, '1 day'),
    ]
  },
  zucchini_green_regular_500g: {
    query: 'zucchini', canonicalName: 'Zucchini (Green Regular)', category: 'Vegetables', icon: '🥒', prices: [
      p('coldstorage', 'Zucchini (Green Regular)', 2.77, 3.24, 11, '500g', 'vegetables', true, 'Same day'),
    ]
  },
  pumpkin_green_desi_1kg: {
    query: 'pumpkin', canonicalName: 'Pumpkin Green (Desi)', category: 'Vegetables', icon: '🎃', prices: [
      p('shengsiong', 'Pumpkin Green (Desi)', 2.37, 2.84, 15, '1 kg', 'vegetables', true, '4 hrs'),
    ]
  },
  bottle_gourd_round_1pc: {
    query: 'bottle gourd', canonicalName: 'Bottle Gourd (Round)', category: 'Vegetables', icon: '🥒', prices: [
      p('giant', 'Bottle Gourd (Round)', 2.32, 2.85, 22, '1 pc', 'vegetables', true, 'Same day'),
    ]
  },
  bitter_gourd_dark_green_500g: {
    query: 'bitter gourd', canonicalName: 'Bitter Gourd (Dark Green)', category: 'Vegetables', icon: '🥒', prices: [
      p('grabmart', 'Bitter Gourd (Dark Green)', 2.68, 3.27, 19, '500g', 'vegetables', true, '15 min'),
    ]
  },
  ivy_gourd_baby_tindora_250g: {
    query: 'ivy gourd', canonicalName: 'Ivy Gourd (Baby Tindora)', category: 'Vegetables', icon: '🥒', prices: [
      p('pandamart', 'Ivy Gourd (Baby Tindora)', 2.43, 2.85, 12, '250g', 'vegetables', true, '15 min'),
    ]
  },
  snake_gourd_small_pack: {
    query: 'snake gourd', canonicalName: 'Snake Gourd (Small)', category: 'Vegetables', icon: '🥒', prices: [
      p('amazon_sg', 'Snake Gourd (Small)', 2.59, 3.02, 10, '1 pack', 'vegetables', true, '2 hrs'),
    ]
  },
  parwal_pointed_gourd_250g: {
    query: 'parwal', canonicalName: 'Parwal (Pointed Gourd)', category: 'Vegetables', icon: '🥒', prices: [
      p('fairprice', 'Parwal (Pointed Gourd)', 2.41, 2.84, 12, '250g', 'vegetables', true, '2 hrs'),
    ]
  },
  kundru_ivy_gourd_500g: {
    query: 'kundru', canonicalName: 'Kundru (Ivy Gourd)', category: 'Vegetables', icon: '🥒', prices: [
      p('redmart', 'Kundru (Ivy Gourd)', 2.57, 3.11, 18, '500g', 'vegetables', true, '1 day'),
    ]
  },
  kantola_spiny_gourd_250g: {
    query: 'kantola', canonicalName: 'Kantola (Spiny Gourd)', category: 'Vegetables', icon: '🥒', prices: [
      p('coldstorage', 'Kantola (Spiny Gourd)', 3.12, 3.69, 14, '250g', 'vegetables', true, 'Same day'),
    ]
  },
  tinda_apple_gourd_500g: {
    query: 'tinda', canonicalName: 'Tinda (Apple Gourd)', category: 'Vegetables', icon: '🥒', prices: [
      p('shengsiong', 'Tinda (Apple Gourd)', 2.81, 3.4, 18, '500g', 'vegetables', true, '4 hrs'),
    ]
  },
  okra_organic_premium_500g: {
    query: 'okra', canonicalName: 'Okra (Organic Premium)', category: 'Vegetables', icon: '🥒', prices: [
      p('giant', 'Okra (Organic Premium)', 3.46, 4.27, 20, '500g', 'vegetables', true, 'Same day'),
    ]
  },
  beans_long_lobia_250g: {
    query: 'long beans', canonicalName: 'Beans (Long Lobia)', category: 'Vegetables', icon: '🫛', prices: [
      p('grabmart', 'Beans (Long Lobia)', 2.3, 2.71, 12, '250g', 'vegetables', true, '15 min'),
    ]
  },
  beans_soya_fresh_250g: {
    query: 'soya beans', canonicalName: 'Beans (Soya Fresh)', category: 'Vegetables', icon: '🫛', prices: [
      p('pandamart', 'Beans (Soya Fresh)', 2.37, 2.91, 21, '250g', 'vegetables', true, '15 min'),
    ]
  },
  beans_lima_val_250g: {
    query: 'lima beans', canonicalName: 'Beans (Lima Val)', category: 'Vegetables', icon: '🫛', prices: [
      p('amazon_sg', 'Beans (Lima Val)', 2.92, 3.42, 12, '250g', 'vegetables', true, '2 hrs'),
    ]
  },
  peas_frozen_premium_1kg: {
    query: 'peas', canonicalName: 'Peas (Frozen Premium) 1kg', category: 'Vegetables', icon: '🫛', prices: [
      p('fairprice', 'Peas (Frozen Premium) 1kg', 5.59, 6.36, 10, '1 kg', 'vegetables', true, '2 hrs'),
    ]
  },
  corn_frozen_sweet_1kg: {
    query: 'corn', canonicalName: 'Corn (Frozen Sweet) 1kg', category: 'Vegetables', icon: '🌽', prices: [
      p('redmart', 'Corn (Frozen Sweet) 1kg', 5.03, 5.82, 12, '1 kg', 'vegetables', true, '1 day'),
    ]
  },
  mushroom_button_value_400g: {
    query: 'mushroom', canonicalName: 'Mushroom (Button Value)', category: 'Vegetables', icon: '🍄', prices: [
      p('coldstorage', 'Mushroom (Button Value)', 4.46, 5.49, 19, '400g', 'vegetables', true, 'Same day'),
    ]
  },
  mushroom_milky_white_200g: {
    query: 'mushroom', canonicalName: 'Mushroom (Milky White)', category: 'Vegetables', icon: '🍄', prices: [
      p('shengsiong', 'Mushroom (Milky White)', 4.01, 5.05, 22, '200g', 'vegetables', true, '4 hrs'),
    ]
  },
  broccoli_florets_cleaned_200g: {
    query: 'broccoli', canonicalName: 'Broccoli Florets (Cleaned)', category: 'Vegetables', icon: '🥦', prices: [
      p('giant', 'Broccoli Florets (Cleaned)', 3.45, 4.16, 17, '200g', 'vegetables', true, 'Same day'),
    ]
  },
  cauliflower_florets_cleaned_300g: {
    query: 'cauliflower', canonicalName: 'Cauliflower Florets (Cleaned)', category: 'Vegetables', icon: '🥦', prices: [
      p('grabmart', 'Cauliflower Florets (Cleaned)', 3.14, 3.89, 21, '300g', 'vegetables', true, '15 min'),
    ]
  },
  cabbage_shredded_cleaned_200g: {
    query: 'cabbage', canonicalName: 'Cabbage Shredded (Cleaned)', category: 'Vegetables', icon: '🥬', prices: [
      p('pandamart', 'Cabbage Shredded (Cleaned)', 2.86, 3.4, 14, '200g', 'vegetables', true, '15 min'),
    ]
  },
  salad_mix_garden_fresh_200g: {
    query: 'salad', canonicalName: 'Salad Mix (Garden Fresh)', category: 'Vegetables', icon: '🥬', prices: [
      p('amazon_sg', 'Salad Mix (Garden Fresh)', 3.81, 4.53, 15, '200g', 'vegetables', true, '2 hrs'),
    ]
  },
  sprouts_mixed_value_pack: {
    query: 'sprouts', canonicalName: 'Sprouts (Mixed Value Pack)', category: 'Vegetables', icon: '🌱', prices: [
      p('fairprice', 'Sprouts (Mixed Value Pack)', 2.81, 3.36, 16, '1 pack', 'vegetables', true, '2 hrs'),
    ]
  },
  sprouts_moong_200g_pack: {
    query: 'sprouts', canonicalName: 'Sprouts (Moong)', category: 'Vegetables', icon: '🌱', prices: [
      p('redmart', 'Sprouts (Moong)', 2.32, 2.73, 11, '200g', 'vegetables', true, '1 day'),
    ]
  },
  sprouts_chana_200g_pack: {
    query: 'sprouts', canonicalName: 'Sprouts (Chana)', category: 'Vegetables', icon: '🌱', prices: [
      p('coldstorage', 'Sprouts (Chana)', 2.23, 2.73, 21, '200g', 'vegetables', true, 'Same day'),
    ]
  },
  sprouts_methi_100g_pack: {
    query: 'sprouts', canonicalName: 'Sprouts (Methi)', category: 'Vegetables', icon: '🌱', prices: [
      p('shengsiong', 'Sprouts (Methi)', 2.46, 2.91, 13, '100g', 'vegetables', true, '4 hrs'),
    ]
  },
  microgreens_sunflower_50g: {
    query: 'microgreens', canonicalName: 'Microgreens (Sunflower)', category: 'Vegetables', icon: '🌱', prices: [
      p('giant', 'Microgreens (Sunflower)', 5.63, 6.44, 10, '50g', 'vegetables', true, 'Same day'),
    ]
  },
  microgreens_radish_50g: {
    query: 'microgreens', canonicalName: 'Microgreens (Radish)', category: 'Vegetables', icon: '🌱', prices: [
      p('grabmart', 'Microgreens (Radish)', 5.15, 6.51, 22, '50g', 'vegetables', true, '15 min'),
    ]
  },
  microgreens_broccoli_50g: {
    query: 'microgreens', canonicalName: 'Microgreens (Broccoli)', category: 'Vegetables', icon: '🌱', prices: [
      p('pandamart', 'Microgreens (Broccoli)', 4.94, 5.71, 12, '50g', 'vegetables', true, '15 min'),
    ]
  },
  edible_flowers_mixed_20g: {
    query: 'edible flowers', canonicalName: 'Edible Flowers (Mixed)', category: 'Vegetables', icon: '🌸', prices: [
      p('amazon_sg', 'Edible Flowers (Mixed)', 9.21, 10.27, 9, '20g', 'vegetables', true, '2 hrs'),
    ]
  },
  watercress_fresh_50g: {
    query: 'watercress', canonicalName: 'Watercress', category: 'Vegetables', icon: '🥬', prices: [
      p('fairprice', 'Watercress', 4.15, 4.82, 12, '50g', 'vegetables', true, '2 hrs'),
    ]
  },
  sorrel_leaves_fresh_50g: {
    query: 'sorrel', canonicalName: 'Sorrel Leaves', category: 'Vegetables', icon: '🥬', prices: [
      p('redmart', 'Sorrel Leaves', 4.26, 4.85, 9, '50g', 'vegetables', true, '1 day'),
    ]
  },
  dill_leaves_shepu_1bunch: {
    query: 'dill', canonicalName: 'Dill Leaves (Shepu)', category: 'Vegetables', icon: '🥬', prices: [
      p('coldstorage', 'Dill Leaves (Shepu)', 2.15, 2.62, 20, '1 bunch', 'vegetables', true, 'Same day'),
    ]
  },
  spring_onion_with_greens_250g: {
    query: 'spring onion', canonicalName: 'Spring Onion (With Greens)', category: 'Vegetables', icon: '🧅', prices: [
      p('shengsiong', 'Spring Onion (With Greens)', 2.59, 3.04, 11, '250g', 'vegetables', true, '4 hrs'),
    ]
  },
  leeks_fresh_imported_1pc: {
    query: 'leeks', canonicalName: 'Leeks (Imported)', category: 'Vegetables', icon: '🥬', prices: [
      p('giant', 'Leeks (Imported)', 4.17, 4.98, 16, '1 pc', 'vegetables', true, 'Same day'),
    ]
  },
  scallions_fresh_1bunch: {
    query: 'scallions', canonicalName: 'Scallions', category: 'Vegetables', icon: '🧅', prices: [
      p('grabmart', 'Scallions', 2.85, 3.51, 21, '1 bunch', 'vegetables', true, '15 min'),
    ]
  },
  shallots_small_onions_250g: {
    query: 'shallots', canonicalName: 'Shallots (Small Onions)', category: 'Vegetables', icon: '🧅', prices: [
      p('pandamart', 'Shallots (Small Onions)', 3.3, 3.98, 17, '250g', 'vegetables', true, '15 min'),
    ]
  },
  garlic_regular_indian_250g: {
    query: 'garlic', canonicalName: 'Garlic (Regular Indian)', category: 'Vegetables', icon: '🧄', prices: [
      p('amazon_sg', 'Garlic (Regular Indian)', 4.57, 5.22, 10, '250g', 'vegetables', true, '2 hrs'),
    ]
  },
  garlic_single_clove_pearl_100g: {
    query: 'garlic', canonicalName: 'Garlic (Single Clove Pearl)', category: 'Vegetables', icon: '🧄', prices: [
      p('fairprice', 'Garlic (Single Clove Pearl)', 6.74, 7.69, 11, '100g', 'vegetables', true, '2 hrs'),
    ]
  },
  ginger_regular_indian_500g: {
    query: 'ginger', canonicalName: 'Ginger (Regular Indian)', category: 'Vegetables', icon: '🫚', prices: [
      p('redmart', 'Ginger (Regular Indian)', 5.79, 6.69, 12, '500g', 'vegetables', true, '1 day'),
    ]
  },
  chilies_green_birds_eye_50g: {
    query: 'green chilli', canonicalName: 'Chilies Green (Birds Eye)', category: 'Vegetables', icon: '🌶️', prices: [
      p('coldstorage', 'Chilies Green (Birds Eye)', 2.68, 3.27, 19, '50g', 'vegetables', true, 'Same day'),
    ]
  },
  chilies_red_fresh_100g: {
    query: 'red chilli', canonicalName: 'Chilies Red (Fresh)', category: 'Vegetables', icon: '🌶️', prices: [
      p('shengsiong', 'Chilies Red (Fresh)', 2.52, 3.11, 22, '100g', 'vegetables', true, '4 hrs'),
    ]
  },

  // ─── FISH & SEAFOOD SECTION ──────────────────────────────────────────────────
  rohu_fish_large_1kg: {
    query: 'rohu fish', canonicalName: 'Rohu Fish (Large - Cut)', category: 'Fish & Seafood', icon: '🐟', prices: [
      p('giant', 'Rohu Fish (Large - Cut)', 5.86, 6.89, 14, '1 kg', 'seafood', true, 'Same day'),
    ]
  },
  catla_fish_medium_1kg: {
    query: 'catla fish', canonicalName: 'Catla Fish (Medium)', category: 'Fish & Seafood', icon: '🐟', prices: [
      p('grabmart', 'Catla Fish (Medium)', 5.5, 6.53, 15, '1 kg', 'seafood', true, '15 min'),
    ]
  },
  prawns_medium_cleaned_500g: {
    query: 'prawns', canonicalName: 'Prawns (Medium - Cleaned)', category: 'Fish & Seafood', icon: '🦐', prices: [
      p('pandamart', 'Prawns (Medium - Cleaned)', 8.41, 9.98, 15, '500g', 'seafood', true, '15 min'),
    ]
  },
  tiger_prawns_large_500g: {
    query: 'prawns', canonicalName: 'Tiger Prawns (Large)', category: 'Fish & Seafood', icon: '🦐', prices: [
      p('amazon_sg', 'Tiger Prawns (Large)', 11.5, 13.07, 11, '500g', 'seafood', true, '2 hrs'),
    ]
  },
  hilsa_fish_ilish_1kg: {
    query: 'hilsa fish', canonicalName: 'Hilsa Fish (Ilish)', category: 'Fish & Seafood', icon: '🐟', prices: [
      p('fairprice', 'Hilsa Fish (Ilish)', 23.32, 28.16, 17, '1 kg', 'seafood', true, '2 hrs'),
    ]
  },
  pomfret_silver_medium_500g: {
    query: 'pomfret', canonicalName: 'Pomfret (Silver - Medium)', category: 'Fish & Seafood', icon: '🐟', prices: [
      p('redmart', 'Pomfret (Silver - Medium)', 9.68, 11.25, 13, '500g', 'seafood', true, '1 day'),
    ]
  },
  surmai_king_fish_steaks_500g: {
    query: 'surmai', canonicalName: 'Surmai (King Fish Steaks)', category: 'Fish & Seafood', icon: '🐟', prices: [
      p('coldstorage', 'Surmai (King Fish Steaks)', 10.23, 11.8, 12, '500g', 'seafood', true, 'Same day'),
    ]
  },
  salmon_fillet_premium_250g: {
    query: 'salmon', canonicalName: 'Salmon Fillet (Premium)', category: 'Fish & Seafood', icon: '🍣', prices: [
      p('shengsiong', 'Salmon Fillet (Premium)', 13.32, 15.44, 13, '250g', 'seafood', true, '4 hrs'),
    ]
  },
  basa_fillet_platinum_1kg: {
    query: 'basa fish', canonicalName: 'Basa Fillet (Platinum)', category: 'Fish & Seafood', icon: '🐟', prices: [
      p('giant', 'Basa Fillet (Platinum)', 7.32, 8.71, 15, '1 kg', 'seafood', true, 'Same day'),
    ]
  },
  crabs_blue_swimmer_500g: {
    query: 'crab', canonicalName: 'Crabs (Blue Swimmer)', category: 'Fish & Seafood', icon: '🦀', prices: [
      p('grabmart', 'Crabs (Blue Swimmer)', 7.68, 9.07, 15, '500g', 'seafood', true, '15 min'),
    ]
  },
  squid_rings_cleaned_250g: {
    query: 'squid', canonicalName: 'Squid Rings (Cleaned)', category: 'Fish & Seafood', icon: '🦑', prices: [
      p('pandamart', 'Squid Rings (Cleaned)', 5.32, 6.35, 16, '250g', 'seafood', true, '15 min'),
    ]
  },
  mackerel_bangda_small_500g: {
    query: 'mackerel', canonicalName: 'Mackerel (Bangda)', category: 'Fish & Seafood', icon: '🐟', prices: [
      p('amazon_sg', 'Mackerel (Bangda)', 4.77, 5.62, 14, '500g', 'seafood', true, '2 hrs'),
    ]
  },
  singhara_fish_steaks_500g: {
    query: 'singhara', canonicalName: 'Singhara Fish (Steaks)', category: 'Fish & Seafood', icon: '🐟', prices: [
      p('fairprice', 'Singhara Fish (Steaks)', 6.23, 7.44, 16, '500g', 'seafood', true, '2 hrs'),
    ]
  },
  lobster_whole_fresh_1pc: {
    query: 'lobster', canonicalName: 'Lobster (Whole Fresh)', category: 'Fish & Seafood', icon: '🦞', prices: [
      p('redmart', 'Lobster (Whole Fresh)', 16.95, 19.8, 14, '1 pc', 'seafood', true, '1 day'),
    ]
  },
  tuna_canned_chunks_185g: {
    query: 'tuna', canonicalName: 'Tuna (Canned Chunks)', category: 'Fish & Seafood', icon: '🥫', prices: [
      p('coldstorage', 'Tuna (Canned Chunks)', 4.14, 4.98, 17, '185g', 'seafood', true, 'Same day'),
    ]
  },
};
