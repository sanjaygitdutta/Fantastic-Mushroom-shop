'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDownUp, Zap, Tag, PackageCheck, ArrowRight,
  Sparkles, Share2, Bell, BellOff, LayoutList, LayoutGrid,
  ExternalLink, CheckCircle2, Clock, TrendingDown, Scale, AlertCircle
} from 'lucide-react';
import type { CompareResult, PlatformPrice } from '../data/mockPrices';
import { getBestPrice } from '../data/mockPrices';
import PlatformPriceCard from './PlatformPriceCard';
import PriceHistoryChart from './PriceHistoryChart';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { getPlatformById } from '../data/platforms';
import { getAffiliateUrl } from '../utils/affiliate';
import { usePriceWatch } from '../hooks/usePriceWatch';
import toast from 'react-hot-toast';
import { getRelatedItems } from '../data/compareFeatures';
import { getPriceTrendSignal, getBestUnitDeal } from '../utils/unitPrice';
import { useTranslation } from 'react-i18next';

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
const TableRow = ({ price, isBest, rank, t }: { price: PlatformPrice; isBest: boolean; rank: number; t: any }) => {
  const platform = getPlatformById(price.platformId);
  if (!platform) return null;
  return (
    <tr className={`border-b border-gray-100 transition-colors ${isBest ? 'bg-amber-50' : 'hover:bg-gray-50'}`}>
      <td className="py-3 px-4">
        <div className="flex items-center gap-2">
          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${rank === 1 ? 'bg-amber-400 text-white' : 'bg-gray-100 text-gray-500'}`}>{rank}</span>
          <span className="text-lg">{platform.logo}</span>
          <span className="font-semibold text-sm text-forest-900">{platform.name}</span>
          {isBest && <span className="text-[10px] bg-amber-400 text-white font-bold px-1.5 py-0.5 rounded-full">{t('best_badge')}</span>}
          {price.isVerified ? (
            <span className="text-[10px] bg-green-50 text-green-700 font-bold px-1.5 py-0.5 rounded-full border border-green-200" title="Live Verified Price">✓ {t('live_verified')}</span>
          ) : (
            <span className="text-[10px] bg-gray-50 text-gray-500 font-bold px-1.5 py-0.5 rounded-full border border-gray-200 cursor-help" title="Based on historical averages">~ {t('est_price')}</span>
          )}
        </div>
      </td>
      <td className="py-3 px-4">
        <div className="flex items-center gap-1.5 text-xs text-forest-600">
          <Clock className="w-3 h-3" />{platform.deliveryTime}
        </div>
      </td>
      <td className="py-3 px-4">
        {price.inStock
          ? <span className="flex items-center gap-1 text-xs text-green-600 font-medium"><CheckCircle2 className="w-3 h-3" />{t('in_stock')}</span>
          : <span className="text-xs text-red-400">{t('unavailable')}</span>}
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
          {isBest ? t('buy_now') : t('view')} <ExternalLink className="w-3 h-3" />
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
  const { t } = useTranslation();

  const router = useRouter();

  const bestPrice = getBestPrice(result.prices);
  const sortedPrices = sortByMode(result.prices, sortMode);
  const inStockPrices = result.prices.filter((p) => p.inStock);
  const outOfStock = result.prices.length - inStockPrices.length;
  const minPrice = inStockPrices.length ? Math.min(...inStockPrices.map((p) => p.price)) : 0;
  const maxPrice = inStockPrices.length ? Math.max(...inStockPrices.map((p) => p.price)) : 0;
  const savings = maxPrice - minPrice;
  const savingsPct = maxPrice > 0 ? Math.round((savings / maxPrice) * 100) : 0;
  const watching = isWatching(result.query);

  // Best time to buy signal
  const trendSignal = minPrice > 0 ? getPriceTrendSignal(result.query, minPrice) : null;
  // Unit price best deal note
  const unitDealNote = getBestUnitDeal(result.prices);
  // People also compare
  const relatedItems = getRelatedItems(result.query);

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
      toast.success(t('toast_watch_removed'));
      return;
    }
    setShowWatchModal(true);
    setWatchPrice(String(minPrice > 0 ? Math.max(minPrice - 5, 1) : ''));
  };

  const confirmWatch = () => {
    const target = parseFloat(watchPrice);
    if (!target || target <= 0) { toast.error(t('toast_enter_valid_price')); return; }
    addWatch({
      query: result.query.toLowerCase(),
      label: result.canonicalName,
      icon: result.icon,
      targetPrice: target,
      currentBest: minPrice,
    });
    toast.success(t('toast_watch_set', { name: result.canonicalName, target }));
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
                {t('save_up_to')} ₹{savings} ({savingsPct}% {t('cheaper')}) {t('by_choosing_platform')}
              </p>
              <p className="text-amber-800 text-xs">
                {t('cheapest_label')} <strong>{bestPrice.platformId.charAt(0).toUpperCase() + bestPrice.platformId.slice(1)}</strong> {t('at_price')} ₹{minPrice} {t('vs_highest')} ₹{maxPrice}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-amber-900/20 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5" /> {t('best_deal_found')}
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
              {result.category} · {inStockPrices.length} {t('in_stock').toLowerCase()}
              {outOfStock > 0 && <span className="text-red-400"> · {outOfStock} {t('unavailable').toLowerCase()}</span>}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {/* Stats */}
          <div className="flex gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">₹{minPrice}</div>
              <div className="text-forest-300 text-xs">{t('lowest_price_label')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cream-300">₹{maxPrice}</div>
              <div className="text-forest-300 text-xs">{t('highest_price_label')}</div>
            </div>
            {savings > 0 && (
              <div className="text-center">
                <div className="text-2xl font-bold text-moss-400">₹{savings}</div>
                <div className="text-forest-300 text-xs">{t('you_save_label')}</div>
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
              {shared ? t('shared') : t('whatsapp_share')}
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
              {watching ? t('watching') : t('price_alert')}
            </button>

            {/* Report Price Feedback */}
            <button
              onClick={() => toast.success(t('toast_report_thanks'))}
              title="Report incorrect price"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all bg-white/10 hover:bg-white/20 text-white"
            >
              <AlertCircle className="w-4 h-4" /> {t('report_price')}
            </button>
          </div>
        </div>
      </motion.div>

      {/* ── Best Time to Buy + Unit price note ── */}
      <div className="flex flex-wrap gap-3 mb-5">
        {trendSignal && (
          <div className={`flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl border bg-white shadow-sm ${
            trendSignal.signal === 'low' ? 'border-green-200 bg-green-50' :
            trendSignal.signal === 'high' ? 'border-red-200 bg-red-50' : 'border-blue-200 bg-blue-50'
          }`}>
            <span>{trendSignal.emoji}</span>
            <span className={trendSignal.color}>{trendSignal.label}</span>
          </div>
        )}
        {unitDealNote && (
          <div className="flex items-center gap-2 text-sm px-4 py-2.5 rounded-xl border border-purple-200 bg-purple-50 text-purple-700 shadow-sm">
            <Scale className="w-4 h-4 flex-shrink-0" />
            <span>{unitDealNote}</span>
          </div>
        )}
      </div>

      {/* ── Controls row: Sort + View toggle ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        {/* Sort */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-forest-600 font-medium flex items-center gap-1">
            <ArrowDownUp className="w-4 h-4" /> {t('sort_label')}
          </span>
          {[
            { key: 'price' as SortMode, label: t('sort_lowest_price'), icon: Tag },
            { key: 'discount' as SortMode, label: t('sort_max_discount'), icon: TrendingDown },
            { key: 'delivery' as SortMode, label: t('sort_fastest'), icon: Zap },
            { key: 'availability' as SortMode, label: t('in_stock'), icon: PackageCheck },
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
                {[t('table_platform'), t('table_delivery'), t('table_status'), t('table_price'), t('table_discount'), t('table_action')].map((h) => (
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
                  t={t}
                />
              ))}
            </tbody>
          </table>
        </motion.div>
      )}

      {/* ── People Also Compare ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-10 pt-8 border-t border-gray-100"
      >
        <h3 className="text-base font-bold text-forest-900 mb-4 flex items-center gap-2">
          🔍 {t('people_also_compare')}
        </h3>
        <div className="flex flex-wrap gap-2">
          {relatedItems.map((item) => (
            <button
              key={item.query}
              onClick={() => router.push(`/compare?q=${item.query}`)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-forest-100 hover:border-forest-400 hover:bg-forest-50 rounded-full text-sm font-medium text-forest-800 shadow-sm hover:shadow-md transition-all"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

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
              <h3 className="text-lg font-bold font-display">{t('mushroom_promo_title')}</h3>
              <p className="text-earth-200 text-sm">{t('mushroom_promo_desc')}</p>
            </div>
          </div>
          <Link href="/mushroom-shop" className="btn-amber whitespace-nowrap flex items-center gap-2">
            {t('shop_mushrooms')} <ArrowRight className="w-4 h-4" />
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
                <h3 className="text-xl font-black text-forest-900">{t('set_price_alert_modal')}</h3>
                <p className="text-sm text-forest-600 mt-1">
                  {t('alert_you_when')} <strong>{result.canonicalName}</strong> {t('drops_below_target')}
                </p>
              </div>

              <div className="mb-2">
                <label className="text-xs font-bold text-forest-700 uppercase tracking-wide block mb-2">
                  {t('alert_me_below')}
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
                <p className="text-xs text-forest-500 mt-1.5">{t('current_best_price')} ₹{minPrice}</p>
              </div>

              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => setShowWatchModal(false)}
                  className="flex-1 py-3 rounded-xl border border-forest-200 text-forest-700 font-semibold text-sm hover:bg-forest-50 transition-colors"
                >
                  {t('cancel')}
                </button>
                <button
                  onClick={confirmWatch}
                  className="flex-1 py-3 rounded-xl bg-forest-700 text-white font-bold text-sm hover:bg-forest-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Bell className="w-4 h-4" /> {t('set_alert_btn')}
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
