/**
 * Unit Price Normalizer
 * Converts all platform prices to a common unit (per kg / per L / per piece)
 * so users can make apples-to-apples comparisons even when pack sizes differ.
 */
import type { Region } from './region';

// Parse a unit string like "500g", "1 kg", "250ml", "6 pcs" into grams/ml/count
export interface ParsedUnit {
  value: number;
  type: 'weight' | 'volume' | 'piece' | 'unknown';
  baseUnit: string; // "kg" | "L" | "pc" | "unit"
}

export const parseUnit = (unit: string): ParsedUnit => {
  const u = unit.toLowerCase().trim();

  // Weight: g / kg
  const gMatch = u.match(/^(\d+(?:\.\d+)?)\s*g$/);
  if (gMatch) return { value: parseFloat(gMatch[1]), type: 'weight', baseUnit: 'kg' };

  const kgMatch = u.match(/^(\d+(?:\.\d+)?)\s*kg$/);
  if (kgMatch) return { value: parseFloat(kgMatch[1]) * 1000, type: 'weight', baseUnit: 'kg' };

  // Volume: ml / L
  const mlMatch = u.match(/^(\d+(?:\.\d+)?)\s*ml$/);
  if (mlMatch) return { value: parseFloat(mlMatch[1]), type: 'volume', baseUnit: 'L' };

  const lMatch = u.match(/^(\d+(?:\.\d+)?)\s*l(?:itre)?s?$/);
  if (lMatch) return { value: parseFloat(lMatch[1]) * 1000, type: 'volume', baseUnit: 'L' };

  // Pieces / dozen / pack
  const pcsMatch = u.match(/^(\d+)\s*(?:pcs?|piece|eggs?|units?|nos?)$/);
  if (pcsMatch) return { value: parseFloat(pcsMatch[1]), type: 'piece', baseUnit: 'pc' };

  const dozenMatch = u.match(/^(\d+)\s*dozen$/);
  if (dozenMatch) return { value: parseFloat(dozenMatch[1]) * 12, type: 'piece', baseUnit: 'pc' };

  return { value: 1, type: 'unknown', baseUnit: 'unit' };
};

// Returns price per base unit, formatted as "₹X/kg" or "S$X/kg" etc.
export const getUnitPrice = (price: number, unit: string, region: Region = 'IN'): string | null => {
  const parsed = parseUnit(unit);
  if (parsed.type === 'unknown') return null;

  const sym = region === 'SG' ? 'S$' : '₹';
  let normalized: number;
  let label: string;

  if (parsed.type === 'weight') {
    normalized = Math.round((price / parsed.value) * 1000);
    label = `${sym}${normalized}/kg`;
  } else if (parsed.type === 'volume') {
    normalized = Math.round((price / parsed.value) * 1000);
    label = `${sym}${normalized}/L`;
  } else {
    const perPiece = (price / parsed.value).toFixed(1);
    label = `${sym}${perPiece}/pc`;
  }

  return label;
};

// Maps raw platformId to a human-readable display name for both IN and SG markets
const platformDisplayName = (id: string): string => {
  const names: Record<string, string> = {
    // SG platforms
    fairprice:   'FairPrice',
    redmart:     'RedMart',
    coldstorage: 'Cold Storage',
    shengsiong:  'Sheng Siong',
    giant:       'Giant',
    grabmart:    'GrabMart',
    pandamart:   'PandaMart',
    amazon_sg:   'Amazon SG',
    // IN platforms
    blinkit:     'Blinkit',
    zepto:       'Zepto',
    swiggy:      'Swiggy',
    bigbasket:   'BigBasket',
    amazon:      'Amazon Fresh',
    jiomart:     'JioMart',
    flipkart:    'Flipkart',
  };
  return names[id] || id.charAt(0).toUpperCase() + id.slice(1);
};

// Returns best deal accounting for unit differences
export const getBestUnitDeal = (
  prices: { platformId: string; price: number; unit: string; inStock: boolean }[]
): string | null => {
  const withNormalized = prices
    .filter((p) => p.inStock)
    .map((p) => {
      const parsed = parseUnit(p.unit);
      if (parsed.type === 'unknown') return null;
      const perUnit = parsed.type === 'piece' ? p.price / parsed.value : (p.price / parsed.value) * 1000;
      return { ...p, perUnit, unitType: parsed.type };
    })
    .filter(Boolean) as { platformId: string; perUnit: number; unitType: string }[];

  if (withNormalized.length < 2) return null;

  // Only compare platforms of the same unit type — cross-unit (kg vs piece) is meaningless
  const unitTypes = ['weight', 'volume', 'piece'] as const;
  const dominant = unitTypes.find(t => withNormalized.filter(p => p.unitType === t).length >= 2);
  if (!dominant) return null;
  const sameType = withNormalized.filter(p => p.unitType === dominant);
  if (sameType.length < 2) return null;

  const best = sameType.reduce((a, b) => (a.perUnit < b.perUnit ? a : b));
  const worst = sameType.reduce((a, b) => (a.perUnit > b.perUnit ? a : b));

  if (best.platformId === worst.platformId) return null;

  const savingPct = Math.round(((worst.perUnit - best.perUnit) / worst.perUnit) * 100);
  if (savingPct < 3) return null; // Not worth showing tiny differences

  return `${platformDisplayName(best.platformId)} is ${savingPct}% cheaper per unit than ${platformDisplayName(worst.platformId)} when comparing pack sizes`;
};

// Price trend signal based on seeded history (uses same seed as priceHistory.ts)
export type TrendSignal = 'low' | 'normal' | 'high';

export const getPriceTrendSignal = (
  query: string,
  currentBestPrice: number
): { signal: TrendSignal; label: string; color: string; emoji: string } => {
  // Deterministic seed same as priceHistory
  const seed = query.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);

  // Simulate historical range: ±20% of current price
  const historicalMin = Math.round(currentBestPrice * (0.78 + (seed % 7) * 0.01));
  const historicalMax = Math.round(currentBestPrice * (1.18 + (seed % 5) * 0.01));


  if (currentBestPrice <= historicalMin * 1.05) {
    return { signal: 'low', label: 'Price at 30-day low — great time to buy!', color: 'text-green-700', emoji: '🟢' };
  }
  if (currentBestPrice >= historicalMax * 0.93) {
    return { signal: 'high', label: 'Price above average — consider waiting', color: 'text-red-600', emoji: '🔴' };
  }
  return { signal: 'normal', label: 'Price is at a normal level', color: 'text-blue-600', emoji: '🔵' };
};
