import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus, Trash2, TrendingDown, ExternalLink, Search } from 'lucide-react';
import SEO from '../components/SEO';
import { searchPrices } from '../data/mockPrices';
import type { CompareResult } from '../data/mockPrices';
import { PLATFORMS } from '../data/platforms';

interface BasketItem {
  id: string;
  query: string;
  displayName: string;
  icon: string;
  result: CompareResult;
}

const PLATFORM_IDS = ['blinkit', 'bigbasket', 'swiggy', 'zepto', 'amazon', 'jiomart'];

const QUICK_ADDS = [
  { label: 'Onion', query: 'onion', icon: '🧅' },
  { label: 'Tomato', query: 'tomato', icon: '🍅' },
  { label: 'Milk', query: 'milk', icon: '🥛' },
  { label: 'Eggs', query: 'eggs', icon: '🥚' },
  { label: 'Bread', query: 'bread', icon: '🍞' },
  { label: 'Potato', query: 'potato', icon: '🥔' },
  { label: 'Rice', query: 'rice', icon: '🍚' },
  { label: 'Paneer', query: 'paneer', icon: '🧀' },
  { label: 'Dal', query: 'dal', icon: '🫘' },
  { label: 'Tea', query: 'tea', icon: '🍵' },
  { label: 'Banana', query: 'banana', icon: '🍌' },
  { label: 'Chicken', query: 'chicken', icon: '🍗' },
];

const BasketCalculator = () => {
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const addItem = async (query: string) => {
    if (basket.find(b => b.query.toLowerCase() === query.toLowerCase())) return;
    setLoading(true);
    setSearchResult(null);
    const result = await searchPrices(query);
    if (result) {
      setBasket(prev => [...prev, {
        id: `${query}-${Date.now()}`,
        query,
        displayName: result.canonicalName,
        icon: result.icon,
        result,
      }]);
    } else {
      setSearchResult(`Could not find "${query}"`);
    }
    setLoading(false);
    setSearch('');
  };

  const removeItem = (id: string) => {
    setBasket(prev => prev.filter(b => b.id !== id));
  };

  // Calculate total cost per platform
  const platformTotals = useMemo(() => {
    return PLATFORM_IDS.map(pid => {
      let total = 0;
      let allInStock = true;
      basket.forEach(item => {
        const p = item.result.prices.find(pr => pr.platformId === pid);
        if (p && p.inStock) { total += p.price; }
        else { allInStock = false; }
      });
      return { platformId: pid, total, allInStock };
    }).sort((a, b) => a.total - b.total);
  }, [basket]);

  const cheapestPlatform = platformTotals[0];
  const mostExpensive = platformTotals[platformTotals.length - 1];
  const savings = basket.length > 0 ? mostExpensive.total - cheapestPlatform.total : 0;

  return (
    <div className="min-h-screen bg-cream-50 pt-24 pb-16">
      <SEO
        title="Smart Basket Calculator — Find Cheapest Platform for Your Grocery List"
        description="Add multiple grocery items and instantly see which platform (Blinkit, Zepto, BigBasket, Swiggy, Amazon, JioMart) gives you the lowest total price for your entire basket."
        keywords="grocery basket calculator, cheapest grocery platform, compare grocery cart, blinkit vs zepto vs bigbasket total price"
        canonicalUrl="https://fantasticfood.in/basket"
      />

      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-forest-100 text-forest-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <ShoppingCart className="w-4 h-4" /> Smart Basket Calculator
          </div>
          <h1 className="text-3xl md:text-4xl font-black font-display text-forest-900 mb-3">
            Find the Cheapest Platform<br />for Your Entire Basket 🛒
          </h1>
          <p className="text-forest-600 max-w-xl mx-auto">
            Add items to your basket and we'll compare the total across all 6 platforms in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Add Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Search */}
            <div className="bg-white rounded-2xl border border-forest-100 p-4 shadow-sm">
              <h2 className="font-bold text-forest-800 mb-3 text-sm uppercase tracking-wide">Add Items</h2>
              <form
                onSubmit={(e) => { e.preventDefault(); if (search.trim()) addItem(search.trim()); }}
                className="flex gap-2 mb-4"
              >
                <div className="flex-1 flex items-center gap-2 bg-cream-50 border border-forest-200 rounded-xl px-3 py-2">
                  <Search className="w-4 h-4 text-forest-400 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Type any food…"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="flex-1 bg-transparent text-sm text-forest-900 outline-none placeholder-forest-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!search.trim() || loading}
                  className="btn-forest px-4 py-2 text-sm flex-shrink-0 flex items-center gap-1 disabled:opacity-50"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </form>
              {searchResult && <p className="text-xs text-red-500 mb-2">{searchResult}</p>}

              {/* Quick Adds */}
              <p className="text-xs text-forest-500 font-semibold mb-2">Quick add:</p>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_ADDS.map(q => (
                  <button
                    key={q.query}
                    onClick={() => addItem(q.query)}
                    disabled={loading || !!basket.find(b => b.query === q.query)}
                    className="text-xs px-2.5 py-1 rounded-full border border-forest-200 hover:border-forest-400 hover:bg-forest-50 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {q.icon} {q.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Basket Items */}
            {basket.length > 0 && (
              <div className="bg-white rounded-2xl border border-forest-100 p-4 shadow-sm">
                <h2 className="font-bold text-forest-800 mb-3 text-sm uppercase tracking-wide">Your Basket ({basket.length} items)</h2>
                <div className="space-y-2">
                  <AnimatePresence>
                    {basket.map(item => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex items-center justify-between bg-cream-50 rounded-xl px-3 py-2.5"
                      >
                        <span className="text-sm font-medium text-forest-800">{item.icon} {item.displayName}</span>
                        <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-600 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )}

            {loading && (
              <div className="text-center py-4">
                <div className="w-6 h-6 border-2 border-forest-500 border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-xs text-forest-500 mt-1">Fetching prices…</p>
              </div>
            )}
          </div>

          {/* Right: Results */}
          <div className="lg:col-span-3">
            {basket.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-80 text-center bg-white rounded-2xl border border-dashed border-forest-200">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-xl font-bold text-forest-800 mb-2">Your basket is empty</h3>
                <p className="text-forest-500 text-sm max-w-xs">Add groceries from the left to see which platform saves you the most money.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Savings Banner */}
                {savings > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-forest-700 to-forest-600 text-white rounded-2xl p-5"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <TrendingDown className="w-6 h-6 text-moss-300" />
                      <span className="font-black text-xl">Save ₹{savings} on your basket!</span>
                    </div>
                    <p className="text-forest-300 text-sm">
                      Buying from <strong className="text-white">{PLATFORMS.find(p => p.id === cheapestPlatform.platformId)?.name}</strong> instead of{' '}
                      <strong className="text-white">{PLATFORMS.find(p => p.id === mostExpensive.platformId)?.name}</strong>
                    </p>
                  </motion.div>
                )}

                {/* Platform Comparison Table */}
                <div className="bg-white rounded-2xl border border-forest-100 overflow-hidden shadow-sm">
                  <div className="px-5 py-4 bg-forest-50 border-b border-forest-100">
                    <h2 className="font-bold text-forest-900">Platform Total Comparison</h2>
                  </div>
                  <div className="divide-y divide-forest-50">
                    {platformTotals.map((pt, rank) => {
                      const platform = PLATFORMS.find(p => p.id === pt.platformId);
                      if (!platform) return null;
                      const isBest = rank === 0;
                      return (
                        <div key={pt.platformId}
                          className={`flex items-center gap-4 px-5 py-4 ${isBest ? 'bg-moss-50 border-l-4 border-l-moss-500' : ''}`}
                        >
                          <span className={`text-lg font-black w-6 ${isBest ? 'text-moss-600' : 'text-forest-300'}`}>
                            {isBest ? '🏆' : `#${rank + 1}`}
                          </span>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-bold text-forest-900">{platform.name}</span>
                              {isBest && <span className="text-xs bg-moss-500 text-white px-2 py-0.5 rounded-full">Cheapest</span>}
                              <span className="text-xs text-forest-500">• {platform.deliveryTime}</span>
                            </div>
                            {/* Per-item breakdown */}
                            <div className="flex flex-wrap gap-1">
                              {basket.map(item => {
                                const p = item.result.prices.find(pr => pr.platformId === pt.platformId);
                                return p ? (
                                  <span key={item.id} className="text-xs text-forest-500">
                                    {item.icon} ₹{p.price}
                                  </span>
                                ) : null;
                              })}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`text-xl font-black ${isBest ? 'text-moss-700' : 'text-forest-800'}`}>
                              ₹{pt.total}
                            </div>
                            {rank > 0 && (
                              <div className="text-xs text-red-400 font-medium">
                                +₹{pt.total - cheapestPlatform.total}
                              </div>
                            )}
                          </div>
                          <a
                            href={platform.searchUrl(basket.map(b => b.query).join(' '))}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:flex items-center gap-1 text-xs text-forest-500 hover:text-forest-700 border border-forest-200 rounded-lg px-2.5 py-1.5 transition-colors"
                          >
                            Buy <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Trust Disclaimer */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center mt-6">
                  <p className="text-amber-800 text-sm">
                    <span className="font-bold">⚠️ Note:</span> Prices shown are estimated market averages for demonstration. 
                    Prices vary rapidly based on your exact location and availability. Click "Buy" to see the final live price on the platform.
                  </p>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCalculator;
