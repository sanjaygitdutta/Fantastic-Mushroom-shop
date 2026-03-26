import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownUp, Zap, Tag, ArrowRight } from 'lucide-react';
import type { CompareResult, PlatformPrice } from '../data/mockPrices';
import { getBestPrice } from '../data/mockPrices';
import PlatformPriceCard from './PlatformPriceCard';
import { Link } from 'react-router-dom';

type SortMode = 'price' | 'discount' | 'delivery';

interface CompareResultsGridProps {
  result: CompareResult;
}

const sortByMode = (prices: PlatformPrice[], mode: SortMode): PlatformPrice[] => {
  const sorted = [...prices];
  if (mode === 'price') return sorted.sort((a, b) => a.price - b.price);
  if (mode === 'discount') return sorted.sort((a, b) => b.discount - a.discount);
  if (mode === 'delivery') {
    const deliveryOrder: Record<string, number> = { blinkit: 1, zepto: 2, swiggy: 3, bigbasket: 4, amazon: 5, jiomart: 6 };
    return sorted.sort((a, b) => (deliveryOrder[a.platformId] || 6) - (deliveryOrder[b.platformId] || 6));
  }
  return sorted;
};

const CompareResultsGrid = ({ result }: CompareResultsGridProps) => {
  const [sortMode, setSortMode] = useState<SortMode>('price');
  const bestPrice = getBestPrice(result.prices);
  const sortedPrices = sortByMode(result.prices, sortMode);

  const minPrice = Math.min(...result.prices.filter((p) => p.inStock).map((p) => p.price));
  const maxPrice = Math.max(...result.prices.filter((p) => p.inStock).map((p) => p.price));
  const savings = maxPrice - minPrice;

  return (
    <div>
      {/* Summary bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-forest-800 to-forest-700 text-white rounded-2xl p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <span className="text-4xl">{result.icon}</span>
          <div>
            <h2 className="text-xl font-bold font-display">{result.canonicalName}</h2>
            <p className="text-forest-300 text-sm">{result.category} · Prices across 6 platforms</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-400">₹{minPrice}</div>
            <div className="text-forest-300 text-xs">Lowest</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cream-300">₹{maxPrice}</div>
            <div className="text-forest-300 text-xs">Highest</div>
          </div>
          {savings > 0 && (
            <div className="text-center">
              <div className="text-2xl font-bold text-moss-400">₹{savings}</div>
              <div className="text-forest-300 text-xs">You save</div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Sort controls */}
      <div className="flex items-center gap-2 mb-5 flex-wrap">
        <span className="text-sm text-forest-600 font-medium flex items-center gap-1">
          <ArrowDownUp className="w-4 h-4" /> Sort by:
        </span>
        {[
          { key: 'price' as SortMode, label: 'Lowest Price', icon: Tag },
          { key: 'discount' as SortMode, label: 'Max Discount', icon: Tag },
          { key: 'delivery' as SortMode, label: 'Fastest Delivery', icon: Zap },
        ].map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setSortMode(key)}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              sortMode === key
                ? 'bg-forest-700 text-white shadow-sm'
                : 'bg-white border border-forest-200 text-forest-700 hover:border-forest-400'
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </button>
        ))}
      </div>

      {/* Price cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedPrices.map((price, index) => (
          <PlatformPriceCard
            key={price.platformId}
            price={price}
            isBest={price.platformId === bestPrice?.platformId}
            index={index}
          />
        ))}
      </div>

      {/* Mushroom promo if searching mushroom */}
      {result.query.toLowerCase().includes('mushroom') && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-gradient-to-r from-earth-600 to-earth-700 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <span className="text-5xl">🍄</span>
            <div className="text-white">
              <h3 className="text-lg font-bold font-display">Order directly from our Mushroom Farm</h3>
              <p className="text-earth-200 text-sm">Fresh, organic mushrooms — delivered from our farm to your door</p>
            </div>
          </div>
          <Link to="/mushroom-shop" className="btn-amber whitespace-nowrap flex items-center gap-2">
            Shop Mushrooms <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default CompareResultsGrid;
