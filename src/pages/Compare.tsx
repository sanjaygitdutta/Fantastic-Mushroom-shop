import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RefreshCw, Zap, ShieldCheck, TrendingDown, Clock, X, Flame } from 'lucide-react';
import PriceSearchBar from '../components/PriceSearchBar';
import CompareResultsGrid from '../components/CompareResultsGrid';
import FoodCategoryBrowser from '../components/FoodCategoryBrowser';
import TrendingSearches from '../components/TrendingSearches';
import { searchPrices } from '../data/mockPrices';
import type { CompareResult } from '../data/mockPrices';
import SEO from '../components/SEO';
import { useRecentlyCompared } from '../hooks/useRecentlyCompared';
import { getDailyDeal } from '../data/compareFeatures';

// Platform logos strip
const PLATFORMS = [
  { name: 'Blinkit',   logo: '⚡', color: '#f0c029', bg: '#fffbea' },
  { name: 'Zepto',     logo: '🟣', color: '#8b5cf6', bg: '#f5f3ff' },
  { name: 'Swiggy',    logo: '🟠', color: '#f97316', bg: '#fff7ed' },
  { name: 'BigBasket', logo: '🟢', color: '#16a34a', bg: '#f0fdf4' },
  { name: 'Amazon',    logo: '📦', color: '#f59e0b', bg: '#fffbeb' },
  { name: 'JioMart',   logo: '🔵', color: '#2563eb', bg: '#eff6ff' },
  { name: 'Flipkart',  logo: '🛒', color: '#1d4ed8', bg: '#dbeafe' },
];

// Loading skeleton
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl p-5 border border-forest-100">
    <div className="flex items-center gap-3 mb-4">
      <div className="skeleton w-10 h-10" />
      <div className="space-y-1.5">
        <div className="skeleton w-24 h-4" />
        <div className="skeleton w-16 h-3" />
      </div>
    </div>
    <div className="skeleton w-32 h-3 mb-3" />
    <div className="skeleton w-20 h-7 mb-2" />
    <div className="skeleton w-full h-10 mt-4" />
  </div>
);

const ComparePage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const pincode = searchParams.get('pincode') || '';

  const [result, setResult] = useState<CompareResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [lastQuery, setLastQuery] = useState('');
  const { recents, addRecent, clearRecents } = useRecentlyCompared();
  const navigate = useNavigate();
  const dailyDeal = getDailyDeal();

  useEffect(() => {
    if (!query || query === lastQuery) return;
    setLastQuery(query);
    setLoading(true);
    setError('');
    setResult(null);

    searchPrices(query, pincode)
      .then((data) => {
        setResult(data);
        setLoading(false);
        if (data) addRecent(query, data.canonicalName, data.icon);
      })
      .catch(() => {
        setError('Something went wrong. Please try again.');
        setLoading(false);
      });
  }, [query, pincode]);

  const seoTitle = query
    ? `Compare ${query.charAt(0).toUpperCase() + query.slice(1)} Price — Blinkit vs Zepto vs Swiggy vs BigBasket`
    : 'Compare Grocery Prices — Blinkit, Zepto, Swiggy, BigBasket & More';
  const seoDescription = query
    ? `Compare prices for ${query} across Blinkit, Zepto, Swiggy Instamart, BigBasket, Amazon Fresh, JioMart & Flipkart Minutes. Find the cheapest deal instantly.`
    : 'Search any grocery or food item to compare real-time prices across 7 major Indian delivery platforms. Save money on every order.';

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={`https://www.fantasticfood.in/compare${query ? `?q=${query}` : ''}`}
      />

      {/* ── Premium Hero ── */}
      <div className="bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900 text-white pt-8 pb-10 px-4 mb-0 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-forest-400/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Stats strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 mb-6 text-xs text-forest-300">
            <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-amber-400" /> 7 Platforms</span>
            <span className="flex items-center gap-1"><TrendingDown className="w-3 h-3 text-moss-400" /> 1,200+ Items Tracked</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-blue-400" /> Prices Updated Live</span>
          </div>

          {/* Headline */}
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-black leading-tight mb-1">
              Compare Prices Across
              <span className="text-amber-400"> 7 Platforms</span>
            </h1>
            <p className="text-forest-400 text-sm">Find the cheapest deal before you order</p>
          </div>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto">
            <PriceSearchBar variant="page" initialQuery={query} />
          </div>

          {/* Platform logo pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {PLATFORMS.map((pl) => (
              <div
                key={pl.name}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ backgroundColor: pl.bg + '22', color: pl.color, border: `1px solid ${pl.color}33` }}
              >
                <span>{pl.logo}</span>
                <span className="text-white/80">{pl.name}</span>
              </div>
            ))}
          </div>

          {pincode && (
            <p className="text-center text-forest-400 text-xs mt-3">📍 Showing prices near pincode: <strong className="text-white">{pincode}</strong></p>
          )}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto px-4 pt-8">

        {/* Loading state */}
        {loading && (
          <div>
            <div className="skeleton h-24 rounded-2xl mb-6" />
            <div className="flex gap-2 mb-5">
              {[1, 2, 3].map((i) => <div key={i} className="skeleton w-28 h-8 rounded-full" />)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => <SkeletonCard key={i} />)}
            </div>
            <p className="text-center text-forest-500 mt-6 text-sm animate-pulse">
              🔍 Fetching prices across Blinkit, BigBasket, Zepto, Swiggy, Amazon &amp; JioMart...
            </p>
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <div className="text-5xl mb-4">😕</div>
            <h2 className="text-xl font-bold text-forest-900 mb-2">Something went wrong</h2>
            <p className="text-forest-600 mb-6">{error}</p>
            <button
              onClick={() => setLastQuery('')}
              className="btn-forest flex items-center gap-2 mx-auto"
            >
              <RefreshCw className="w-4 h-4" /> Try Again
            </button>
          </motion.div>
        )}

        {/* Empty — No query */}
        {!query && !loading && (
          <div>
            {/* Recently Compared */}
            {recents.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-forest-500" />
                    <span className="text-sm font-bold text-forest-700 uppercase tracking-wide">Recently Compared</span>
                  </div>
                  <button onClick={clearRecents} className="text-xs text-gray-400 hover:text-red-400 transition-colors flex items-center gap-1">
                    <X className="w-3 h-3" /> Clear
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recents.map((item) => (
                    <button
                      key={item.query}
                      onClick={() => navigate(`/compare?q=${item.query}`)}
                      className="flex items-center gap-2 px-3.5 py-2 bg-white border border-forest-100 hover:border-forest-400 hover:bg-forest-50 rounded-full text-sm font-medium text-forest-800 shadow-sm hover:shadow-md transition-all"
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 🔥 Daily Deal Banner */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 rounded-2xl p-4 flex items-center justify-between gap-4 cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => navigate(`/compare?q=${dailyDeal.query}`)}
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-xl p-2 text-2xl">{dailyDeal.icon}</div>
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-0.5">
                    <Flame className="w-3.5 h-3.5" />
                    <span className="text-xs font-bold uppercase tracking-wide opacity-90">Today's Best Deal</span>
                  </div>
                  <p className="font-black text-base">{dailyDeal.label} — {dailyDeal.discount}% off on {dailyDeal.platform}</p>
                  <p className="text-xs opacity-80">
                    <span className="line-through">₹{dailyDeal.originalPrice}</span>
                    <span className="ml-1.5 font-bold text-sm">₹{dailyDeal.currentPrice}</span>
                    <span className="ml-1.5">· Tap to compare all platforms</span>
                  </p>
                </div>
              </div>
              <div className="bg-white text-orange-600 font-black text-sm px-4 py-2 rounded-xl whitespace-nowrap hover:bg-orange-50 transition-colors">
                Compare →
              </div>
            </motion.div>

            <TrendingSearches />
            <div className="mt-10">
              <h2 className="text-lg font-bold text-forest-900 mb-5 font-display">Browse by Category</h2>
              <FoodCategoryBrowser compact />
            </div>
          </div>
        )}

        {/* Results */}
        {result && !loading && (
          <>
            <CompareResultsGrid result={result} />
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
              <p className="text-amber-800 text-sm">
                <span className="font-bold">⚠️ Note:</span> Prices vary based on your exact location and availability. Click "Buy Now" to see the final live price on the platform.
              </p>
            </div>
          </>
        )}

        {/* Browse categories below results */}
        {result && !loading && (
          <div className="mt-14">
            <h3 className="text-xl font-bold text-forest-900 mb-4 font-display flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-amber-500" /> Compare More Items
            </h3>
            <TrendingSearches />
            <div className="mt-8">
              <FoodCategoryBrowser compact />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return <div className="p-10 text-red-500"><h1>CRASH: Something went wrong.</h1><pre id="error-trace">{this.state.error?.toString()}</pre></div>;
    }
    return this.props.children;
  }
}

const ComparePageWrapped = () => (
  <ErrorBoundary>
    <ComparePage />
  </ErrorBoundary>
);

export default ComparePageWrapped;
