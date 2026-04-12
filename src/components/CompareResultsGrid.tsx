import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDownUp, Zap, Tag, PackageCheck, ArrowRight,
  Sparkles, Share2, Bell, BellOff, LayoutList, LayoutGrid,
  ExternalLink, CheckCircle2, Clock, TrendingDown,
} from 'lucide-react';
import type { CompareResult, PlatformPrice } from '../data/mockPrices';
import { getBestPrice } from '../data/mockPrices';
import PlatformPriceCard from './PlatformPriceCard';
import PriceHistoryChart from './PriceHistoryChart';
import { Link } from 'react-router-dom';
import { getPlatformById } from '../data/platforms';
import { getAffiliateUrl } from '../utils/affiliate';
import { usePriceWatch } from '../hooks/usePriceWatch';
import toast from 'react-hot-toast';

type SortMode = 'price' | 'discount' | 'delivery' | 'availability';
type ViewMode = 'cards' | 'table';

interface CompareResultsGridProps {
  result: CompareResult;
}

const sortByMode = (prices: PlatformPrice[], mode: SortMode): PlatformPrice[] => {
  const sorted = [...prices];
  if (mode === 'price') return sorted.sort((a, b) => a.price - b.price);
  if (mode === 'discount') return sorted.sort((a, b) => b.discount - a.discount);
  if (mode === 'availability') return sorted.sort((a, b) => (b.inStock ? 1 : 0) - (a.inStock ? 1 : 0));
  if (mode === 'delivery') {
    const order: Record<string, number> = { blinkit: 1, zepto: 2, swiggy: 3, bigbasket: 4, amazon: 5, jiomart: 6, flipkart: 7 };
    return sorted.sort((a, b) => (order[a.platformId] || 7) - (order[b.platformId] || 7));
  }
  return sorted;
};

// ── Table row ──────────────────────────────────────────────────────────────────
const TableRow = ({ price, isBest, rank }: { price: PlatformPrice; isBest: boolean; rank: number }) => {
  const platform = getPlatformById(price.platformId);
  if (!platform) return null;
  return (
    <tr className={`border-b border-gray-100 transition-colors ${isBest ? 'bg-amber-50' : 'hover:bg-gray-50'}`}>
      <td className="py-3 px-4">
        <div className="flex items-center gap-2">
          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${rank === 1 ? 'bg-amber-400 text-white' : 'bg-gray-100 text-gray-500'}`}>{rank}</span>
          <span className="text-lg">{platform.logo}</span>
          <span className="font-semibold text-sm text-forest-900">{platform.name}</span>
          {isBest && <span className="text-[10px] bg-amber-400 text-white font-bold px-1.5 py-0.5 rounded-full">BEST</span>}
        </div>
      </td>
      <td className="py-3 px-4">
        <div className="flex items-center gap-1.5 text-xs text-forest-600">
          <Clock className="w-3 h-3" />{platform.deliveryTime}
        </div>
      </td>
      <td className="py-3 px-4">
        {price.inStock
          ? <span className="flex items-center gap-1 text-xs text-green-600 font-medium"><CheckCircle2 className="w-3 h-3" />In Stock</span>
          : <span className="text-xs text-red-400">Unavailable</span>}
      </td>
      <td className="py-3 px-4 font-bold text-forest-900">
        ₹{price.price}
        {price.originalPrice > price.price && (
          <span className="text-xs text-gray-400 line-through ml-1">₹{price.originalPrice}</span>
        )}
      </td>
      <td className="py-3 px-4">
        {price.discount > 0
          ? <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">-{price.discount}%</span>
          : <span className="text-xs text-gray-400">—</span>}
      </td>
      <td className="py-3 px-4">
        <a
          href={getAffiliateUrl(price.platformId, price.url)}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
            isBest ? 'bg-forest-700 text-white hover:bg-forest-800' : 'bg-forest-50 text-forest-700 border border-forest-200 hover:bg-forest-100'
          } ${!price.inStock ? 'opacity-40 pointer-events-none' : ''}`}
        >
          {isBest ? 'Buy Now' : 'View'} <ExternalLink className="w-3 h-3" />
        </a>
      </td>
    </tr>
  );
};

// ── Main component ──────────────────────────────────────────────────────────────
const CompareResultsGrid = ({ result }: CompareResultsGridProps) => {
  const [sortMode, setSortMode] = useState<SortMode>('price');
  const [viewMode, setViewMode] = useState<ViewMode>('cards');
  const [showWatchModal, setShowWatchModal] = useState(false);
  const [watchPrice, setWatchPrice] = useState('');
  const [shared, setShared] = useState(false);

  const { addWatch, removeWatch, isWatching } = usePriceWatch();

  const bestPrice = getBestPrice(result.prices);
  const sortedPrices = sortByMode(result.prices, sortMode);
  const inStockPrices = result.prices.filter((p) => p.inStock);
  const outOfStock = result.prices.length - inStockPrices.length;
  const minPrice = inStockPrices.length ? Math.min(...inStockPrices.map((p) => p.price)) : 0;
  const maxPrice = inStockPrices.length ? Math.max(...inStockPrices.map((p) => p.price)) : 0;
  const savings = maxPrice - minPrice;
  const savingsPct = maxPrice > 0 ? Math.round((savings / maxPrice) * 100) : 0;
  const watching = isWatching(result.query);

  // ── WhatsApp Share ──
  const handleShare = () => {
    const lines = [
      `🛒 *${result.canonicalName} Price Comparison* — Fantastic Food`,
      '',
      ...sortedPrices
        .filter((p) => p.inStock)
        .slice(0, 5)
        .map((p, i) => {
          const platform = getPlatformById(p.platformId);
          return `${i === 0 ? '🏆' : `${i + 1}.`} ${platform?.name}: *₹${p.price}*${p.discount > 0 ? ` (-${p.discount}%)` : ''}`;
        }),
      '',
      `💰 Save up to ₹${savings} by choosing wisely!`,
      `🔗 https://www.fantasticfood.in/compare?q=${encodeURIComponent(result.query)}`,
    ];
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/?text=${text}`, '_blank');
    setShared(true);
    setTimeout(() => setShared(false), 3000);
  };

  // ── Price Watch ──
  const handleWatch = () => {
    if (watching) {
      removeWatch(result.query);
      toast.success('Price watch removed!');
      return;
    }
    setShowWatchModal(true);
    setWatchPrice(String(minPrice > 0 ? Math.max(minPrice - 5, 1) : ''));
  };

  const confirmWatch = () => {
    const target = parseFloat(watchPrice);
    if (!target || target <= 0) { toast.error('Enter a valid price'); return; }
    addWatch({
      query: result.query.toLowerCase(),
      label: result.canonicalName,
      icon: result.icon,
      targetPrice: target,
      currentBest: minPrice,
    });
    toast.success(`Price watch set! We'll alert you when ${result.canonicalName} drops below ₹${target}`);
    setShowWatchModal(false);
  };

  return (
    <div>
      {/* ── Savings callout ── */}
      {savings > 0 && bestPrice && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl px-5 py-4 mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">💡</span>
            <div>
              <p className="text-amber-900 font-black text-base">
                Save up to ₹{savings} ({savingsPct}% cheaper) by choosing the best platform!
              </p>
              <p className="text-amber-800 text-xs">
                Cheapest: <strong>{bestPrice.platformId.charAt(0).toUpperCase() + bestPrice.platformId.slice(1)}</strong> at ₹{minPrice} vs highest ₹{maxPrice}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-amber-900/20 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5" /> Best Deal Found
          </div>
        </motion.div>
      )}

      {/* ── Summary bar ── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-forest-800 to-forest-700 text-white rounded-2xl p-5 mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <span className="text-4xl">{result.icon}</span>
          <div>
            <h2 className="text-xl font-bold font-display">{result.canonicalName}</h2>
            <p className="text-forest-300 text-sm">
              {result.category} · {inStockPrices.length} in stock
              {outOfStock > 0 && <span className="text-red-400"> · {outOfStock} unavailable</span>}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {/* Stats */}
          <div className="flex gap-4">
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

          {/* Action buttons */}
          <div className="flex gap-2">
            {/* WhatsApp Share */}
            <button
              onClick={handleShare}
              title="Share on WhatsApp"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                shared ? 'bg-green-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              {shared ? <CheckCircle2 className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
              {shared ? 'Shared!' : 'WhatsApp'}
            </button>

            {/* Price Watch */}
            <button
              onClick={handleWatch}
              title={watching ? 'Remove price watch' : 'Set price alert'}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                watching ? 'bg-amber-400 text-amber-900' : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              {watching ? <BellOff className="w-4 h-4" /> : <Bell className="w-4 h-4" />}
              {watching ? 'Watching' : 'Price Alert'}
            </button>
          </div>
        </div>
      </motion.div>

      {/* ── Controls row: Sort + View toggle ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        {/* Sort */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-forest-600 font-medium flex items-center gap-1">
            <ArrowDownUp className="w-4 h-4" /> Sort:
          </span>
          {[
            { key: 'price' as SortMode, label: 'Lowest Price', icon: Tag },
            { key: 'discount' as SortMode, label: 'Max Discount', icon: TrendingDown },
            { key: 'delivery' as SortMode, label: 'Fastest', icon: Zap },
            { key: 'availability' as SortMode, label: 'In Stock', icon: PackageCheck },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setSortMode(key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                sortMode === key
                  ? 'bg-forest-700 text-white shadow-sm'
                  : 'bg-white border border-forest-200 text-forest-700 hover:border-forest-400'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />{label}
            </button>
          ))}
        </div>

        {/* View toggle */}
        <div className="flex items-center gap-1 bg-white border border-forest-200 rounded-xl p-1">
          <button
            onClick={() => setViewMode('cards')}
            className={`p-1.5 rounded-lg transition-all ${viewMode === 'cards' ? 'bg-forest-700 text-white' : 'text-forest-500 hover:text-forest-700'}`}
            title="Card view"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`p-1.5 rounded-lg transition-all ${viewMode === 'table' ? 'bg-forest-700 text-white' : 'text-forest-500 hover:text-forest-700'}`}
            title="Table view"
          >
            <LayoutList className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── Card view ── */}
      {viewMode === 'cards' && (
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
      )}

      {/* ── Table view ── */}
      {viewMode === 'table' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl border border-forest-100 overflow-hidden shadow-sm"
        >
          <table className="w-full text-sm">
            <thead className="bg-forest-50 border-b border-forest-100">
              <tr>
                {['Platform', 'Delivery', 'Status', 'Price', 'Discount', 'Action'].map((h) => (
                  <th key={h} className="py-3 px-4 text-left text-xs font-bold text-forest-700 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedPrices.map((price, i) => (
                <TableRow
                  key={price.platformId}
                  price={price}
                  isBest={price.platformId === bestPrice?.platformId}
                  rank={i + 1}
                />
              ))}
            </tbody>
          </table>
        </motion.div>
      )}

      {/* ── Price History ── */}
      <PriceHistoryChart query={result.query} prices={result.prices} />

      {/* ── Mushroom promo ── */}
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

      {/* ── Price Watch Modal ── */}
      <AnimatePresence>
        {showWatchModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
            onClick={() => setShowWatchModal(false)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              className="bg-white rounded-3xl p-7 max-w-sm w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-5">
                <span className="text-5xl mb-3 block">{result.icon}</span>
                <h3 className="text-xl font-black text-forest-900">Set Price Alert</h3>
                <p className="text-sm text-forest-600 mt-1">
                  We'll alert you when <strong>{result.canonicalName}</strong> drops below your target
                </p>
              </div>

              <div className="mb-2">
                <label className="text-xs font-bold text-forest-700 uppercase tracking-wide block mb-2">
                  Alert me when price drops below:
                </label>
                <div className="flex items-center border-2 border-forest-200 rounded-xl overflow-hidden focus-within:border-forest-500 transition-colors">
                  <span className="px-4 py-3 bg-forest-50 text-forest-700 font-bold text-lg border-r border-forest-200">₹</span>
                  <input
                    type="number"
                    value={watchPrice}
                    onChange={(e) => setWatchPrice(e.target.value)}
                    placeholder={String(minPrice)}
                    className="flex-1 px-4 py-3 text-lg font-bold text-forest-900 outline-none bg-white"
                    autoFocus
                  />
                </div>
                <p className="text-xs text-forest-500 mt-1.5">Current best price: ₹{minPrice}</p>
              </div>

              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => setShowWatchModal(false)}
                  className="flex-1 py-3 rounded-xl border border-forest-200 text-forest-700 font-semibold text-sm hover:bg-forest-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmWatch}
                  className="flex-1 py-3 rounded-xl bg-forest-700 text-white font-bold text-sm hover:bg-forest-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Bell className="w-4 h-4" /> Set Alert
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CompareResultsGrid;
