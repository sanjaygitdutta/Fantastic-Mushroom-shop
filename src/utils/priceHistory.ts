/**
 * Generates realistic simulated price history for any grocery item.
 * 
 * This uses a deterministic, seeded approach so the same item always gets 
 * the same "historical trend", making it look believable and consistent to users.
 * 
 * When you integrate a real price API in the future, replace `generateHistory`
 * with an actual API call and the chart component won't need any changes.
 */

export interface PriceHistoryPoint {
  date: string;   // "Apr 01"
  price: number;
  fullDate: string; // ISO date for tooltip
}

export interface PlatformHistory {
  platformId: string;
  name: string;
  color: string;
  data: PriceHistoryPoint[];
}

// Simple seeded random to keep history consistent per item+platform
const seededRandom = (seed: number) => {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
};

const PLATFORM_COLORS: Record<string, string> = {
  blinkit:   '#F5D100',
  zepto:     '#9B30D9',
  swiggy:    '#FC8019',
  bigbasket: '#84C225',
  amazon:    '#FF9900',
  jiomart:   '#0070BA',
  flipkart:  '#2874F0',
};

const PLATFORM_NAMES: Record<string, string> = {
  blinkit:   'Blinkit',
  zepto:     'Zepto',
  swiggy:    'Swiggy',
  bigbasket: 'BigBasket',
  amazon:    'Amazon',
  jiomart:   'JioMart',
  flipkart:  'Flipkart',
};

/**
 * Generates 30 days of simulated price history for a single platform.
 */
const generatePlatformHistory = (
  platformId: string,
  basePrice: number,
  itemSeed: number,
): PriceHistoryPoint[] => {
  const points: PriceHistoryPoint[] = [];
  const platformOffset = platformId.charCodeAt(0);
  
  // Each platform has a slightly different base (±15%)
  let currentPrice = basePrice * (0.88 + seededRandom(platformOffset + itemSeed) * 0.25);
  
  const today = new Date();
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Random daily walk: price changes by up to ±5% each day
    const volatility = (seededRandom(i * 13 + platformOffset + itemSeed) - 0.5) * 0.08;
    currentPrice = Math.max(basePrice * 0.6, currentPrice * (1 + volatility));
    currentPrice = Math.min(basePrice * 1.45, currentPrice);
    
    const label = date.toLocaleDateString('en-IN', { month: 'short', day: '2-digit' });
    points.push({
      date: label,
      price: Math.round(currentPrice),
      fullDate: date.toISOString(),
    });
  }
  
  return points;
};

/**
 * Returns full 30-day price history for all platforms of a given item.
 */
export const getPriceHistory = (
  itemQuery: string,
  platformIds: string[],
  currentPrices: Record<string, number>,
): PlatformHistory[] => {
  const itemSeed = itemQuery.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);

  return platformIds.map((platformId) => {
    const basePrice = currentPrices[platformId] || 50;
    return {
      platformId,
      name: PLATFORM_NAMES[platformId] || platformId,
      color: PLATFORM_COLORS[platformId] || '#888',
      data: generatePlatformHistory(platformId, basePrice, itemSeed),
    };
  });
};
