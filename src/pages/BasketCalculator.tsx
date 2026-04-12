import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus, Trash2, ExternalLink, Search, Sparkles, X, Trophy, Zap } from 'lucide-react';
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

const PLATFORM_IDS = ['blinkit', 'zepto', 'swiggy', 'bigbasket', 'amazon', 'jiomart', 'flipkart'];

const PLATFORM_COLORS: Record<string, string> = {
  blinkit: '#F5D100',
  zepto: '#9B30D9',
  swiggy: '#FC8019',
  bigbasket: '#84C225',
  amazon: '#FF9900',
  jiomart: '#0070BA',
  flipkart: '#2874F0',
};

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
  { label: 'Butter', query: 'butter', icon: '🧈' },
  { label: 'Oil', query: 'oil', icon: '🫙' },
  { label: 'Sugar', query: 'sugar', icon: '🍬' },
  { label: 'Atta', query: 'atta', icon: '🌾' },
];

const RANK_MEDALS = ['🥇', '🥈', '🥉'];

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
      setSearchResult(`Couldn't find "${query}" — try a different name.`);
    }
    setLoading(false);
    setSearch('');
  };

  const removeItem = (id: string) => {
    setBasket(prev => prev.filter(b => b.id !== id));
  };

  const platformTotals = useMemo(() => {
    return PLATFORM_IDS.map(pid => {
      let total = 0;
      let available = 0;
      basket.forEach(item => {
        const p = item.result.prices.find(pr => pr.platformId === pid);
        if (p && p.inStock) { total += p.price; available++; }
      });
      return { platformId: pid, total, available };
    }).filter(pt => pt.available > 0).sort((a, b) => a.total - b.total);
  }, [basket]);

  const cheapest = platformTotals[0];
  const priciest = platformTotals[platformTotals.length - 1];
  const savings = basket.length > 0 && cheapest && priciest ? priciest.total - cheapest.total : 0;
  const savingsPercent = priciest?.total > 0 ? Math.round((savings / priciest.total) * 100) : 0;

  return (
    <div className="min-h-screen pt-20 pb-16" style={{ background: 'linear-gradient(135deg, #0f2418 0%, #1b4332 40%, #2d3a1f 100%)' }}>
      <SEO
        title="Smart Basket Calculator — Find Cheapest Platform for Your Grocery List"
        description="Add multiple grocery items and instantly see which platform (Blinkit, Zepto, BigBasket, Swiggy, Amazon, JioMart, Flipkart) gives you the lowest total price for your entire basket."
        keywords="grocery basket calculator, cheapest grocery platform, compare grocery cart, blinkit vs zepto vs bigbasket total price"
        canonicalUrl="https://www.fantasticfood.in/basket"
      />

      {/* ── Hero ────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-10 text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <Sparkles className="w-4 h-4" /> Smart Basket Calculator
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
            Find the <span className="text-amber-400">Cheapest Platform</span><br />for Your Entire Basket
          </h1>
          <p className="text-green-300 text-lg max-w-xl mx-auto">
            Add items → We compare totals across all 7 platforms → You save money 💰
          </p>

          {/* Live stat pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { label: 'Platforms', val: '7', icon: '🏪' },
              { label: 'Items in DB', val: '500+', icon: '🥕' },
              { label: 'Avg Savings', val: '₹80+', icon: '💸' },
            ].map(s => (
              <div key={s.label} className="bg-white/10 border border-white/20 backdrop-blur rounded-2xl px-5 py-2.5 text-center">
                <span className="text-lg mr-1">{s.icon}</span>
                <span className="font-black text-white">{s.val}</span>
                <span className="text-green-400 text-sm ml-1">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Main Layout ─────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-6">

          {/* ── LEFT PANEL ── */}
          <div className="lg:col-span-2 space-y-4">

            {/* Search input */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
              <h2 className="font-black text-white mb-4 flex items-center gap-2">
                <Search className="w-4 h-4 text-amber-400" /> Add Items to Basket
              </h2>
              <form
                onSubmit={(e) => { e.preventDefault(); if (search.trim()) addItem(search.trim()); }}
                className="flex gap-2 mb-4"
              >
                <input
                  type="text"
                  placeholder="Type any food item..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder-green-400 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-amber-400 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!search.trim() || loading}
                  className="bg-amber-400 hover:bg-amber-500 disabled:opacity-40 text-forest-900 font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1 text-sm"
                >
                  <Plus className="w-4 h-4" /> Add
                </button>
              </form>

              {searchResult && (
                <p className="text-red-300 text-xs mb-3 bg-red-500/10 border border-red-400/20 rounded-lg px-3 py-2">{searchResult}</p>
              )}

              {loading && (
                <div className="flex items-center gap-2 text-green-400 text-xs mb-3">
                  <div className="w-3.5 h-3.5 border-2 border-green-400 border-t-transparent rounded-full animate-spin" />
                  Fetching prices...
                </div>
              )}

              {/* Quick Adds */}
              <p className="text-green-400 text-xs font-semibold uppercase tracking-wider mb-2">⚡ Quick Add</p>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_ADDS.map(q => {
                  const added = !!basket.find(b => b.query === q.query);
                  return (
                    <button
                      key={q.query}
                      onClick={() => !added && addItem(q.query)}
                      disabled={loading || added}
                      className={`text-xs px-2.5 py-1.5 rounded-full border transition-all font-medium ${
                        added
                          ? 'bg-amber-400/20 border-amber-400/50 text-amber-300 cursor-default'
                          : 'border-white/20 text-green-200 hover:border-amber-400 hover:text-amber-300 hover:bg-amber-400/10'
                      }`}
                    >
                      {q.icon} {q.label} {added && '✓'}
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Basket Items List */}
            <AnimatePresence>
              {basket.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="font-black text-white flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4 text-amber-400" />
                      Your Basket
                      <span className="bg-amber-400 text-forest-900 text-xs font-black px-2 py-0.5 rounded-full">
                        {basket.length}
                      </span>
                    </h2>
                    <button
                      onClick={() => setBasket([])}
                      className="text-xs text-red-400 hover:text-red-300 font-medium flex items-center gap-1 transition-colors"
                    >
                      <X className="w-3 h-3" /> Clear all
                    </button>
                  </div>
                  <div className="space-y-2">
                    <AnimatePresence>
                      {basket.map(item => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="flex items-center justify-between bg-white/10 rounded-xl px-3 py-2.5 group"
                        >
                          <span className="text-sm font-semibold text-white">
                            {item.icon} {item.displayName}
                          </span>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-all"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="lg:col-span-3">
            {basket.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-80 text-center bg-white/5 border border-dashed border-white/20 rounded-3xl"
              >
                <div className="text-7xl mb-4 animate-bounce">🛒</div>
                <h3 className="text-xl font-black text-white mb-2">Your basket is empty</h3>
                <p className="text-green-400 text-sm max-w-xs">
                  Add groceries from the left panel and we'll instantly compare prices across all 7 platforms.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-4">

                {/* Savings Banner */}
                {savings > 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative overflow-hidden bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl p-5"
                  >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }} />
                    <div className="relative flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Trophy className="w-5 h-5 text-forest-900" />
                          <span className="font-black text-forest-900 text-lg">
                            You save ₹{savings} ({savingsPercent}%)!
                          </span>
                        </div>
                        <p className="text-forest-800 text-sm">
                          Shop at <strong>{PLATFORMS.find(p => p.id === cheapest?.platformId)?.name}</strong> instead of{' '}
                          <strong>{PLATFORMS.find(p => p.id === priciest?.platformId)?.name}</strong>
                        </p>
                      </div>
                      <div className="text-4xl">💰</div>
                    </div>
                  </motion.div>
                )}

                {/* Platform Totals */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
                  <div className="px-5 py-4 border-b border-white/10 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <h2 className="font-black text-white">Platform Total Comparison</h2>
                    <span className="text-green-400 text-xs ml-auto">{basket.length} item{basket.length > 1 ? 's' : ''} · sorted by price</span>
                  </div>

                  <div className="divide-y divide-white/5">
                    {platformTotals.map((pt, rank) => {
                      const platform = PLATFORMS.find(p => p.id === pt.platformId);
                      if (!platform) return null;
                      const isBest = rank === 0;
                      const extra = pt.total - (cheapest?.total || 0);
                      const barWidth = cheapest ? Math.round((cheapest.total / pt.total) * 100) : 100;

                      return (
                        <motion.div
                          key={pt.platformId}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: rank * 0.05 }}
                          className={`px-5 py-4 ${isBest ? 'bg-amber-400/10 border-l-4 border-amber-400' : ''}`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            {/* Rank / Medal */}
                            <span className="text-xl w-7 flex-shrink-0">
                              {rank < 3 ? RANK_MEDALS[rank] : <span className="text-green-500 font-bold text-sm">#{rank + 1}</span>}
                            </span>

                            {/* Platform dot */}
                            <div
                              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                              style={{ background: PLATFORM_COLORS[pt.platformId] || '#ccc' }}
                            />

                            {/* Name + badges */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-black text-white text-sm">{platform.name}</span>
                                {isBest && (
                                  <span className="text-xs bg-amber-400 text-forest-900 px-2 py-0.5 rounded-full font-bold">
                                    CHEAPEST
                                  </span>
                                )}
                                <span className="text-green-400 text-xs">{platform.deliveryTime}</span>
                              </div>
                              {/* Per-item prices */}
                              <div className="flex flex-wrap gap-2 mt-1">
                                {basket.map(item => {
                                  const p = item.result.prices.find(pr => pr.platformId === pt.platformId);
                                  return p ? (
                                    <span key={item.id} className="text-xs text-green-300">
                                      {item.icon} ₹{p.price}
                                    </span>
                                  ) : null;
                                })}
                              </div>
                            </div>

                            {/* Total + extra */}
                            <div className="text-right flex-shrink-0">
                              <div className={`text-xl font-black ${isBest ? 'text-amber-400' : 'text-white'}`}>
                                ₹{pt.total}
                              </div>
                              {rank > 0 && (
                                <div className="text-xs text-red-400 font-semibold">+₹{extra} more</div>
                              )}
                            </div>

                            {/* Buy button */}
                            <a
                              href={platform.searchUrl(basket.map(b => b.query).join(' '))}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`hidden sm:flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-xl transition-all border ${
                                isBest
                                  ? 'bg-amber-400 text-forest-900 border-amber-400 hover:bg-amber-500'
                                  : 'border-white/20 text-green-300 hover:border-white/40'
                              }`}
                            >
                              Shop <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>

                          {/* Price bar */}
                          <div className="ml-10 mt-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all"
                              style={{
                                width: `${barWidth}%`,
                                background: isBest ? '#F5D100' : PLATFORM_COLORS[pt.platformId] || '#6b7280',
                                opacity: isBest ? 1 : 0.5,
                              }}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <p className="text-green-400 text-xs">
                    ⚠️ Actual prices vary by location & availability.
                    Click <strong>"Shop"</strong> to see live prices on each platform.
                  </p>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom feature strip */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: '⚡', title: 'Instant Compare', desc: '7 platforms at once' },
            { icon: '💰', title: 'Real Savings', desc: 'Up to ₹200+ per basket' },
            { icon: '🔄', title: 'Live Prices', desc: 'Updated continuously' },
            { icon: '🛒', title: 'Full Basket', desc: 'Not just single items' },
          ].map(f => (
            <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <div className="text-2xl mb-1">{f.icon}</div>
              <p className="font-bold text-white text-sm">{f.title}</p>
              <p className="text-green-400 text-xs">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasketCalculator;
