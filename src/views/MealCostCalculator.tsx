'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, ExternalLink, ShoppingCart, Plus, Minus, Sparkles, Users } from 'lucide-react';
import SEO from '../components/SEO';
import { searchPrices } from '../data/mockPrices';
import { PLATFORMS } from '../data/platforms';
import { WORLD_RECIPES } from '../data/worldRecipes';

interface RecipeIngredient {
  query: string;
  displayName: string;
  icon: string;
  qty: string;
}

interface Recipe {
  name: string;
  emoji: string;
  description: string;
  servings: number;
  time: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  ingredients: RecipeIngredient[];
}

const parseIngredient = (ingStr: string): RecipeIngredient => {
  const match = ingStr.match(/^([\d.,\/-]+(?:\s*(?:g|kg|ml|L|tbsp|tsp|cup|cups|pcs|cloves|inch|head|bunch|leaves|slices))?)\s+(.+)$/i);
  let qty = '1 unit';
  let name = ingStr;
  if (match) { qty = match[1]; name = match[2]; }
  const query = name.toLowerCase()
    .replace(/\s*\(.*\)\s*/g, '')
    .replace(/^(fresh|dry|dried|ground|whole|chopped|sliced|minced|diced|cooked|raw)\s+/i, '')
    .trim();
  let icon = '🛒';
  if (query.includes('chicken')) icon = '🍗';
  else if (query.includes('beef') || query.includes('mutton') || query.includes('pork') || query.includes('lamb')) icon = '🥩';
  else if (query.includes('onion')) icon = '🧅';
  else if (query.includes('tomato')) icon = '🍅';
  else if (query.includes('milk') || query.includes('cream')) icon = '🥛';
  else if (query.includes('cheese') || query.includes('paneer') || query.includes('ricotta') || query.includes('mascarpone')) icon = '🧀';
  else if (query.includes('egg')) icon = '🥚';
  else if (query.includes('potato')) icon = '🥔';
  else if (query.includes('rice')) icon = '🍚';
  else if (query.includes('oil') || query.includes('butter') || query.includes('ghee')) icon = '🧈';
  else if (query.includes('garlic')) icon = '🧄';
  else if (query.includes('bread')) icon = '🍞';
  else if (query.includes('pasta') || query.includes('macaroni') || query.includes('spaghetti') || query.includes('noodle')) icon = '🍝';
  else if (query.includes('fish') || query.includes('prawn') || query.includes('shrimp') || query.includes('clam')) icon = '🐟';
  else if (query.includes('flour') || query.includes('maida')) icon = '🌾';
  else if (query.includes('sugar')) icon = '🍬';
  else if (query.includes('lemon') || query.includes('lime')) icon = '🍋';
  else if (query.includes('apple')) icon = '🍎';
  else if (query.includes('banana')) icon = '🍌';
  else if (query.includes('spinach') || query.includes('basil') || query.includes('herb')) icon = '🌿';
  else if (query.includes('carrot')) icon = '🥕';
  return { query, displayName: name.charAt(0).toUpperCase() + name.slice(1), icon, qty };
};

const RECIPES: Recipe[] = WORLD_RECIPES.map(r => ({
  name: r.name,
  emoji: r.emoji,
  description: `${r.country} • ${r.city} • ${r.tags.slice(0, 2).join(', ')}`,
  servings: r.servings,
  time: r.time,
  difficulty: r.difficulty as 'Easy' | 'Medium' | 'Hard',
  category: r.category,
  ingredients: r.ingredients.map(parseIngredient),
}));

const DIFFICULTY_COLORS = { Easy: 'bg-green-100 text-green-700', Medium: 'bg-amber-100 text-amber-700', Hard: 'bg-red-100 text-red-700' };

interface PlatformCost { platformId: string; total: number; }

const MealCostCalculator = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [costs, setCosts] = useState<PlatformCost[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [servings, setServings] = useState(4);
  const [activeCategory, setActiveCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...Array.from(new Set(RECIPES.map(r => r.category)))];

  const filteredRecipes = (() => {
    let list = activeCategory === 'All' ? RECIPES : RECIPES.filter(r => r.category === activeCategory);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(r =>
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.ingredients.some(i => i.query.includes(q) || i.displayName.toLowerCase().includes(q))
      );
    }
    return list;
  })();

  const calculateCosts = async (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setServings(recipe.servings);
    setLoading(true);
    setCosts(null);
    setModalOpen(true);

    const results = await Promise.all(recipe.ingredients.map(ing => searchPrices(ing.query)));
    const totals: Record<string, number> = {};
    PLATFORMS.forEach(p => { totals[p.id] = 0; });
    results.forEach(result => {
      if (!result) return;
      result.prices.forEach(p => { if (p.inStock) totals[p.platformId] += p.price; });
    });
    const sorted = Object.entries(totals)
      .filter(([, total]) => total > 0)
      .map(([platformId, total]) => ({ platformId, total }))
      .sort((a, b) => a.total - b.total);
    setCosts(sorted);
    setLoading(false);
  };

  const closeModal = () => { setModalOpen(false); setSelectedRecipe(null); setCosts(null); };

  const cheapest = costs?.[0];
  const mostExp = costs?.[costs.length - 1];
  const recipeSavings = cheapest && mostExp ? mostExp.total - cheapest.total : 0;
  const maxCost = mostExp?.total || 1;
  const adjustedTotal = (base: number) => Math.round(base * (servings / (selectedRecipe?.servings || 1)));

  return (
    <div className="min-h-screen bg-linear-to-b from-forest-900 to-cream-50 pt-24 pb-16">
      <SEO
        title="Meal Cost Calculator — 250+ World Recipes Cost Comparison | Fantastic Food"
        description="Find the exact cost of cooking 250+ recipes from 25 countries at home. Compare ingredient prices across Blinkit, Zepto, BigBasket and more. Adjust for servings!"
        keywords="meal cost calculator India, recipe cost, cooking cost calculator, world recipes cost, how much to cook biryani, pizza cost India"
        canonicalUrl="https://www.fantasticfood.in/meal-calculator"
      />

      {/* ── MODAL POPUP ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {modalOpen && selectedRecipe && (
          <motion.div
            id="meal-cost-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Blurred backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Sticky Header */}
              <div className="sticky top-0 z-10 px-6 py-5 bg-linear-to-r from-forest-900 to-forest-800 text-white rounded-t-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{selectedRecipe.emoji}</span>
                  <div>
                    <h2 className="font-black text-xl">{selectedRecipe.name}</h2>
                    <p className="text-forest-300 text-sm">{selectedRecipe.ingredients.length} ingredients · {selectedRecipe.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-white/10 rounded-2xl px-3 py-2">
                    <Users className="w-4 h-4 text-cream-300" />
                    <span className="text-cream-200 text-sm font-medium">Servings:</span>
                    <button onClick={() => setServings(s => Math.max(1, s - 1))} className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-black text-xl w-6 text-center">{servings}</span>
                    <button onClick={() => setServings(s => Math.min(20, s + 1))} className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <button id="meal-modal-close" onClick={closeModal} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors text-lg font-bold">
                    ✕
                  </button>
                </div>
              </div>

              {/* Body — loading or results */}
              {loading ? (
                <div className="flex items-center justify-center py-24">
                  <div className="text-center">
                    <div className="w-14 h-14 border-4 border-forest-100 border-t-forest-600 rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-forest-600 font-semibold text-lg">Comparing prices…</p>
                    <p className="text-forest-400 text-sm mt-1">Checking 7 platforms for you</p>
                  </div>
                </div>
              ) : costs && (
                <>
                  {/* Ingredients */}
                  <div className="px-6 py-4 bg-cream-50 border-b border-gray-100">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-3">Ingredients Needed</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedRecipe.ingredients.map(ing => (
                        <span key={ing.query} className="text-xs bg-white text-forest-700 px-3 py-1.5 rounded-full border border-forest-100 shadow-sm font-medium">
                          {ing.icon} {ing.displayName} <span className="text-gray-400">({ing.qty})</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Savings Banner */}
                  {recipeSavings > 0 && (
                    <div className="px-6 py-4 bg-linear-to-r from-amber-50 to-yellow-50 border-b border-amber-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-amber-500" />
                        <p className="text-amber-800 font-semibold text-sm">
                          Save <strong className="text-amber-600 text-lg">₹{adjustedTotal(recipeSavings)}</strong> by choosing the cheapest platform!
                        </p>
                      </div>
                      <span className="text-amber-600 text-xs bg-amber-100 px-3 py-1 rounded-full font-medium">
                        ₹{Math.round(adjustedTotal(recipeSavings) / servings)}/person savings
                      </span>
                    </div>
                  )}

                  {/* Platform comparison rows */}
                  <div className="px-6 py-2 divide-y divide-gray-50">
                    {costs.map((cost, rank) => {
                      const platform = PLATFORMS.find(p => p.id === cost.platformId);
                      if (!platform) return null;
                      const isBest = rank === 0;
                      const adjustedCost = adjustedTotal(cost.total);
                      const barWidth = Math.round((cost.total / maxCost) * 100);
                      return (
                        <motion.div key={cost.platformId} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: rank * 0.05 }}
                          className={`py-4 ${isBest ? 'bg-linear-to-r from-green-50 to-transparent -mx-6 px-6' : ''}`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-lg w-6 text-center">{isBest ? '🏆' : `${rank + 1}`}</span>
                            <span className="text-xl">{platform.logo}</span>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-gray-800">{platform.name}</span>
                                {isBest && <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full font-bold">CHEAPEST</span>}
                              </div>
                              <span className="text-xs text-gray-400">₹{Math.round(adjustedCost / servings)}/person · {platform.deliveryTime}</span>
                            </div>
                            <div className="text-right">
                              <div className={`text-xl font-black ${isBest ? 'text-green-600' : 'text-gray-700'}`}>₹{adjustedCost}</div>
                              <div className="text-xs text-gray-400">for {servings} servings</div>
                            </div>
                            <a href={platform.searchUrl(selectedRecipe.ingredients[0].query)} target="_blank" rel="noopener noreferrer"
                              className="hidden sm:flex items-center gap-1 text-xs border border-gray-200 rounded-xl px-3 py-2 text-gray-500 hover:text-forest-700 hover:border-forest-300 transition-colors"
                            >
                              <ShoppingCart className="w-3 h-3" /> Order <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                          <div className="ml-9">
                            <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                              <motion.div initial={{ width: 0 }} animate={{ width: `${barWidth}%` }} transition={{ delay: rank * 0.07, duration: 0.5 }}
                                className={`h-full rounded-full ${isBest ? 'bg-green-400' : 'bg-forest-300'}`}
                              />
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-4 bg-gray-50 rounded-b-3xl">
                    <p className="text-gray-400 text-xs text-center">⚠️ Actual prices vary by location & availability. Click Order to see live prices.</p>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MAIN PAGE ───────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-amber-400/30">
            <ChefHat className="w-4 h-4" /> Smart Meal Planner
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            Cook Smarter<br /><span className="text-amber-400">Spend Less</span>
          </h1>
          <p className="text-cream-300 max-w-xl mx-auto text-lg">
            Pick from <strong className="text-amber-400">{RECIPES.length}+ global recipes</strong> — we'll compare the total ingredient cost across all 7 platforms.
          </p>
        </motion.div>

        {/* Search + Filters */}
        <div className="mb-6 space-y-3">
          <div className="relative max-w-sm mx-auto">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cream-400">🔍</span>
            <input
              id="meal-search"
              type="text"
              placeholder={`Search ${RECIPES.length}+ recipes…`}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-cream-400 rounded-xl py-2.5 pl-9 pr-4 outline-none focus:bg-white/20 transition-all text-sm"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-cream-400 hover:text-white">✕</button>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => {
              const count = cat === 'All' ? RECIPES.length : RECIPES.filter(r => r.category === cat).length;
              return (
                <button key={cat} onClick={() => { setActiveCategory(cat); setSearchQuery(''); }}
                  className={`text-sm font-semibold px-4 py-2 rounded-full border transition-all ${activeCategory === cat && !searchQuery ? 'bg-amber-400 text-forest-900 border-amber-400' : 'bg-white/10 text-cream-200 border-white/20 hover:bg-white/20'}`}
                >{cat} <span className="opacity-60 text-xs">({count})</span></button>
              );
            })}
          </div>
        </div>
        {searchQuery && (
          <p className="text-center text-cream-400 text-sm mb-4">
            {filteredRecipes.length} result{filteredRecipes.length !== 1 ? 's' : ''} for "<span className="text-amber-300">{searchQuery}</span>"
          </p>
        )}

        {/* Recipe Grid — click opens modal */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRecipes.map((recipe) => (
            <motion.button key={recipe.name} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onClick={() => calculateCosts(recipe)}
              className="text-left p-5 rounded-2xl border-2 border-gray-100 bg-white hover:border-amber-300 hover:shadow-lg shadow-sm transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-4xl group-hover:scale-110 transition-transform">{recipe.emoji}</span>
                <div className="flex flex-col items-end gap-1">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${DIFFICULTY_COLORS[recipe.difficulty]}`}>{recipe.difficulty}</span>
                  <span className="text-xs bg-forest-50 text-forest-600 px-2 py-0.5 rounded-full font-medium">{recipe.category}</span>
                </div>
              </div>
              <h3 className="font-black text-forest-900 mb-1 text-base">{recipe.name}</h3>
              <p className="text-gray-400 text-xs mb-3 leading-relaxed">{recipe.description}</p>
              <div className="flex gap-3 text-xs text-gray-400">
                <span>👥 {recipe.servings} servings</span>
                <span>⏱ {recipe.time}</span>
                <span>🥕 {recipe.ingredients.length} items</span>
              </div>
              <div className="mt-3 text-xs text-amber-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Tap to compare prices →
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealCostCalculator;
