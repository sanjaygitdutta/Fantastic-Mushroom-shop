import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, ExternalLink, ShoppingCart, Plus, Minus, Sparkles, Users } from 'lucide-react';
import SEO from '../components/SEO';
import { searchPrices } from '../data/mockPrices';
import { PLATFORMS } from '../data/platforms';

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

const RECIPES: Recipe[] = [
  { name: 'Dal Makhani', emoji: '🫘', description: 'Creamy slow-cooked black lentils', servings: 4, time: '45 min', difficulty: 'Medium', category: 'North Indian', ingredients: [{ query: 'dal', displayName: 'Urad Dal', icon: '🫘', qty: '250g' }, { query: 'butter', displayName: 'Butter', icon: '🧈', qty: '50g' }, { query: 'tomato', displayName: 'Tomato', icon: '🍅', qty: '2 pcs' }, { query: 'onion', displayName: 'Onion', icon: '🧅', qty: '1 pcs' }, { query: 'cream', displayName: 'Fresh Cream', icon: '🥛', qty: '50ml' }] },
  { name: 'Chicken Curry', emoji: '🍛', description: 'Spicy Indian home-style chicken curry', servings: 4, time: '40 min', difficulty: 'Medium', category: 'Non-Veg', ingredients: [{ query: 'chicken', displayName: 'Chicken', icon: '🍗', qty: '500g' }, { query: 'onion', displayName: 'Onion', icon: '🧅', qty: '2 pcs' }, { query: 'tomato', displayName: 'Tomato', icon: '🍅', qty: '2 pcs' }, { query: 'oil', displayName: 'Cooking Oil', icon: '🫙', qty: '30ml' }] },
  { name: 'Palak Paneer', emoji: '🥬', description: 'Cottage cheese in creamy spinach gravy', servings: 4, time: '35 min', difficulty: 'Easy', category: 'North Indian', ingredients: [{ query: 'paneer', displayName: 'Paneer', icon: '🧀', qty: '200g' }, { query: 'spinach', displayName: 'Spinach', icon: '🌿', qty: '300g' }, { query: 'onion', displayName: 'Onion', icon: '🧅', qty: '1 pcs' }, { query: 'tomato', displayName: 'Tomato', icon: '🍅', qty: '1 pcs' }, { query: 'butter', displayName: 'Butter', icon: '🧈', qty: '30g' }] },
  { name: 'Egg Bhurji', emoji: '🍳', description: 'Spiced scrambled eggs — quick breakfast', servings: 2, time: '15 min', difficulty: 'Easy', category: 'Breakfast', ingredients: [{ query: 'eggs', displayName: 'Eggs', icon: '🥚', qty: '4 pcs' }, { query: 'onion', displayName: 'Onion', icon: '🧅', qty: '1 pcs' }, { query: 'tomato', displayName: 'Tomato', icon: '🍅', qty: '1 pcs' }, { query: 'butter', displayName: 'Butter', icon: '🧈', qty: '20g' }] },
  { name: 'Banana Smoothie', emoji: '🥤', description: 'Healthy breakfast smoothie', servings: 2, time: '5 min', difficulty: 'Easy', category: 'Breakfast', ingredients: [{ query: 'banana', displayName: 'Banana', icon: '🍌', qty: '2 pcs' }, { query: 'milk', displayName: 'Milk', icon: '🥛', qty: '300ml' }, { query: 'curd', displayName: 'Curd', icon: '🍶', qty: '100g' }] },
  { name: 'Veg Fried Rice', emoji: '🍚', description: 'Restaurant-style vegetable fried rice', servings: 3, time: '30 min', difficulty: 'Medium', category: 'Chinese', ingredients: [{ query: 'rice', displayName: 'Basmati Rice', icon: '🍚', qty: '1 cup' }, { query: 'carrot', displayName: 'Carrot', icon: '🥕', qty: '1 pcs' }, { query: 'capsicum', displayName: 'Capsicum', icon: '🫑', qty: '1 pcs' }, { query: 'eggs', displayName: 'Eggs', icon: '🥚', qty: '2 pcs' }, { query: 'oil', displayName: 'Oil', icon: '🫙', qty: '20ml' }] },
  { name: 'Aloo Gobi', emoji: '🥔', description: 'Dry potato and cauliflower sabzi', servings: 3, time: '25 min', difficulty: 'Easy', category: 'North Indian', ingredients: [{ query: 'potato', displayName: 'Potato', icon: '🥔', qty: '3 pcs' }, { query: 'cauliflower', displayName: 'Cauliflower', icon: '🥦', qty: '1 head' }, { query: 'tomato', displayName: 'Tomato', icon: '🍅', qty: '1 pcs' }, { query: 'oil', displayName: 'Oil', icon: '🫙', qty: '20ml' }] },
  { name: 'Masala Dosa', emoji: '🥞', description: 'Crispy South Indian crepe with potato filling', servings: 2, time: '20 min', difficulty: 'Hard', category: 'South Indian', ingredients: [{ query: 'potato', displayName: 'Potato', icon: '🥔', qty: '2 pcs' }, { query: 'onion', displayName: 'Onion', icon: '🧅', qty: '1 pcs' }, { query: 'oil', displayName: 'Oil', icon: '🫙', qty: '30ml' }, { query: 'curd', displayName: 'Curd', icon: '🍶', qty: '100g' }] },
  { name: 'Rajma Chawal', emoji: '🍲', description: 'Classic kidney beans curry with rice', servings: 4, time: '50 min', difficulty: 'Medium', category: 'North Indian', ingredients: [{ query: 'rajma', displayName: 'Rajma', icon: '🫘', qty: '200g' }, { query: 'rice', displayName: 'Rice', icon: '🍚', qty: '300g' }, { query: 'tomato', displayName: 'Tomato', icon: '🍅', qty: '2 pcs' }, { query: 'onion', displayName: 'Onion', icon: '🧅', qty: '1 pcs' }, { query: 'ghee', displayName: 'Ghee', icon: '🫙', qty: '20g' }] },
];

const DIFFICULTY_COLORS = { Easy: 'bg-green-100 text-green-700', Medium: 'bg-amber-100 text-amber-700', Hard: 'bg-red-100 text-red-700' };

interface PlatformCost { platformId: string; total: number; }

const MealCostCalculator = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [costs, setCosts] = useState<PlatformCost[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [servings, setServings] = useState(4);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(RECIPES.map(r => r.category)))];

  const filteredRecipes = activeCategory === 'All' ? RECIPES : RECIPES.filter(r => r.category === activeCategory);

  const calculateCosts = async (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setServings(recipe.servings);
    setLoading(true);
    setCosts(null);

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

  const cheapest = costs?.[0];
  const mostExp = costs?.[costs.length - 1];
  const recipeSavings = cheapest && mostExp ? mostExp.total - cheapest.total : 0;
  const maxCost = mostExp?.total || 1;

  const adjustedTotal = (base: number) => Math.round(base * (servings / (selectedRecipe?.servings || 1)));

  return (
    <div className="min-h-screen bg-gradient-to-b from-forest-900 to-cream-50 pt-24 pb-16">
      <SEO
        title="Meal Cost Calculator — How Much Does Cooking at Home Cost? | Fantastic Food"
        description="Find the exact cost of cooking 9 popular Indian recipes at home. Compare ingredient prices across Blinkit, Zepto, BigBasket and more. Adjust for servings!"
        keywords="meal cost calculator India, recipe cost, cooking cost calculator, how much to cook dal makhani, palak paneer cost"
        canonicalUrl="https://www.fantasticfood.in/meal-calculator"
      />

      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-amber-400/30">
            <ChefHat className="w-4 h-4" /> Smart Meal Planner
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            Cook Smarter,<br /><span className="text-amber-400">Spend Less</span>
          </h1>
          <p className="text-cream-300 max-w-xl mx-auto text-lg">
            Pick a recipe — we'll compare the total ingredient cost across all 7 platforms and find the cheapest place to order from.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`text-sm font-semibold px-4 py-2 rounded-full border transition-all ${activeCategory === cat ? 'bg-amber-400 text-forest-900 border-amber-400' : 'bg-white/10 text-cream-200 border-white/20 hover:bg-white/20'}`}
            >{cat}</button>
          ))}
        </div>

        {/* Recipe Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {filteredRecipes.map((recipe) => (
            <motion.button key={recipe.name} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onClick={() => calculateCosts(recipe)}
              className={`text-left p-5 rounded-2xl border-2 transition-all ${selectedRecipe?.name === recipe.name ? 'border-amber-400 bg-amber-50 shadow-xl' : 'border-gray-100 bg-white hover:border-forest-300 shadow-sm'}`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-4xl">{recipe.emoji}</span>
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
            </motion.button>
          ))}
        </div>

        {/* Results */}
        <AnimatePresence>
          {(loading || costs) && selectedRecipe && (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
              className="bg-white rounded-3xl border border-forest-100 shadow-xl overflow-hidden"
            >
              {/* Recipe Header */}
              <div className="px-6 py-5 bg-gradient-to-r from-forest-900 to-forest-800 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{selectedRecipe.emoji}</span>
                  <div>
                    <h2 className="font-black text-xl">{selectedRecipe.name}</h2>
                    <p className="text-forest-300 text-sm">{selectedRecipe.ingredients.length} ingredients · {selectedRecipe.time}</p>
                  </div>
                </div>
                {/* Servings adjuster */}
                <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-3">
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
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-16">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-forest-500 font-medium">Fetching ingredient prices…</p>
                  </div>
                </div>
              ) : costs && (
                <div>
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
                    <div className="px-6 py-4 bg-gradient-to-r from-amber-50 to-yellow-50 border-b border-amber-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
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

                  {/* Platform Bars */}
                  <div className="px-6 py-2 divide-y divide-gray-50">
                    {costs.map((cost, rank) => {
                      const platform = PLATFORMS.find(p => p.id === cost.platformId);
                      if (!platform) return null;
                      const isBest = rank === 0;
                      const adjustedCost = adjustedTotal(cost.total);
                      const barWidth = Math.round((cost.total / maxCost) * 100);

                      return (
                        <motion.div key={cost.platformId} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: rank * 0.05 }}
                          className={`py-4 ${isBest ? 'bg-gradient-to-r from-green-50 to-transparent -mx-6 px-6' : ''}`}
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
                          {/* Bar chart row */}
                          <div className="ml-9 flex items-center gap-2">
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
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {!selectedRecipe && (
          <div className="text-center py-12 text-cream-400">
            <ChefHat className="w-12 h-12 mx-auto mb-3 opacity-40" />
            <p className="font-medium">Choose a recipe above to see prices</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealCostCalculator;
