import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChefHat, ExternalLink, ShoppingCart } from 'lucide-react';
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
  ingredients: RecipeIngredient[];
}

const RECIPES: Recipe[] = [
  {
    name: 'Dal Makhani',
    emoji: '🫘',
    description: 'Creamy slow-cooked black lentils — a North Indian classic',
    servings: 4,
    time: '45 min',
    ingredients: [
      { query: 'dal',    displayName: 'Urad Dal',    icon: '🫘', qty: '250g' },
      { query: 'butter', displayName: 'Butter',       icon: '🧈', qty: '50g'  },
      { query: 'tomato', displayName: 'Tomato',       icon: '🍅', qty: '2 pcs' },
      { query: 'onion',  displayName: 'Onion',        icon: '🧅', qty: '1 pcs' },
      { query: 'cream',  displayName: 'Fresh Cream',  icon: '🥛', qty: '50ml' },
    ],
  },
  {
    name: 'Chicken Curry',
    emoji: '🍛',
    description: 'Spicy Indian home-style chicken curry',
    servings: 4,
    time: '40 min',
    ingredients: [
      { query: 'chicken', displayName: 'Chicken',  icon: '🍗', qty: '500g'  },
      { query: 'onion',   displayName: 'Onion',    icon: '🧅', qty: '2 pcs' },
      { query: 'tomato',  displayName: 'Tomato',   icon: '🍅', qty: '2 pcs' },
      { query: 'oil',     displayName: 'Cooking Oil', icon: '🫙', qty: '30ml' },
    ],
  },
  {
    name: 'Egg Bhurji',
    emoji: '🍳',
    description: 'Spiced scrambled eggs — quick Indian breakfast',
    servings: 2,
    time: '15 min',
    ingredients: [
      { query: 'eggs',    displayName: 'Eggs',    icon: '🥚', qty: '4 pcs' },
      { query: 'onion',   displayName: 'Onion',   icon: '🧅', qty: '1 pcs' },
      { query: 'tomato',  displayName: 'Tomato',  icon: '🍅', qty: '1 pcs' },
      { query: 'butter',  displayName: 'Butter',  icon: '🧈', qty: '20g'  },
    ],
  },
  {
    name: 'Palak Paneer',
    emoji: '🥬',
    description: 'Cottage cheese in creamy spinach gravy',
    servings: 4,
    time: '35 min',
    ingredients: [
      { query: 'paneer',  displayName: 'Paneer',  icon: '🧀', qty: '200g' },
      { query: 'spinach', displayName: 'Spinach', icon: '🌿', qty: '300g' },
      { query: 'onion',   displayName: 'Onion',   icon: '🧅', qty: '1 pcs' },
      { query: 'tomato',  displayName: 'Tomato',  icon: '🍅', qty: '1 pcs' },
      { query: 'butter',  displayName: 'Butter',  icon: '🧈', qty: '30g'  },
    ],
  },
  {
    name: 'Banana Smoothie',
    emoji: '🥤',
    description: 'Healthy breakfast smoothie with banana & milk',
    servings: 2,
    time: '5 min',
    ingredients: [
      { query: 'banana', displayName: 'Banana',  icon: '🍌', qty: '2 pcs' },
      { query: 'milk',   displayName: 'Milk',    icon: '🥛', qty: '300ml' },
      { query: 'curd',   displayName: 'Curd',    icon: '🍶', qty: '100g'  },
    ],
  },
  {
    name: 'Veg Fried Rice',
    emoji: '🍚',
    description: 'Restaurant-style vegetable fried rice',
    servings: 3,
    time: '30 min',
    ingredients: [
      { query: 'rice',      displayName: 'Basmati Rice', icon: '🍚', qty: '1 cup' },
      { query: 'carrot',    displayName: 'Carrot',       icon: '🥕', qty: '1 pcs' },
      { query: 'capsicum',  displayName: 'Capsicum',     icon: '🫑', qty: '1 pcs' },
      { query: 'eggs',      displayName: 'Eggs',         icon: '🥚', qty: '2 pcs' },
      { query: 'oil',       displayName: 'Oil',          icon: '🫙', qty: '20ml' },
    ],
  },
];

interface PlatformCost {
  platformId: string;
  total: number;
}

const MealCostCalculator = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [costs, setCosts] = useState<PlatformCost[] | null>(null);
  const [loading, setLoading] = useState(false);

  const calculateCosts = async (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setLoading(true);
    setCosts(null);

    const results = await Promise.all(recipe.ingredients.map(ing => searchPrices(ing.query)));

    const totals: Record<string, number> = {};
    PLATFORMS.forEach(p => { totals[p.id] = 0; });

    results.forEach(result => {
      if (!result) return;
      result.prices.forEach(p => {
        if (p.inStock) totals[p.platformId] += p.price;
      });
    });

    const sorted = Object.entries(totals)
      .map(([platformId, total]) => ({ platformId, total }))
      .sort((a, b) => a.total - b.total);

    setCosts(sorted);
    setLoading(false);
  };

  const cheapest = costs?.[0];
  const mostExp = costs?.[costs.length - 1];
  const recipeSavings = cheapest && mostExp ? mostExp.total - cheapest.total : 0;

  // Generate Recipe Schema if a recipe is selected
  const recipeSchema = selectedRecipe ? {
    '@context': 'https://schema.org/',
    '@type': 'Recipe',
    name: selectedRecipe.name,
    description: selectedRecipe.description,
    recipeYield: `${selectedRecipe.servings} servings`,
    totalTime: `PT${selectedRecipe.time.replace(' min', 'M')}`,
    recipeIngredient: selectedRecipe.ingredients.map(ing => `${ing.qty} ${ing.displayName}`),
    recipeInstructions: [{ '@type': 'HowToStep', text: `Enjoy your homemade ${selectedRecipe.name}!` }]
  } : undefined;

  return (
    <div className="min-h-screen bg-cream-50 pt-24 pb-16">
      <SEO
        title="Meal Cost Calculator — How Much Does Cooking at Home Cost?"
        description="Find out the exact cost of cooking popular Indian recipes at home. Compare ingredient prices across Blinkit, Zepto, BigBasket and more."
        keywords="meal cost calculator, recipe ingredient cost India, cooking cost calculator, how much to cook at home"
        canonicalUrl="https://fantasticfood.in/meal-calculator"
        structuredData={recipeSchema}
      />

      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <ChefHat className="w-4 h-4" /> Meal Cost Calculator
          </div>
          <h1 className="text-3xl md:text-4xl font-black font-display text-forest-900 mb-3">
            How Much Does Cooking Cost? 🍳
          </h1>
          <p className="text-forest-600 max-w-xl mx-auto">
            Pick a recipe and we'll calculate the total ingredient cost across all 6 platforms.
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {RECIPES.map((recipe) => (
            <motion.button
              key={recipe.name}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => calculateCosts(recipe)}
              className={`text-left p-5 rounded-2xl border-2 transition-all ${
                selectedRecipe?.name === recipe.name
                  ? 'border-forest-500 bg-forest-50 shadow-lg'
                  : 'border-forest-100 bg-white hover:border-forest-300'
              }`}
            >
              <div className="text-4xl mb-3">{recipe.emoji}</div>
              <h3 className="font-bold text-forest-900 mb-1">{recipe.name}</h3>
              <p className="text-forest-500 text-xs mb-3 leading-relaxed">{recipe.description}</p>
              <div className="flex gap-3 text-xs text-forest-500">
                <span>👥 {recipe.servings} servings</span>
                <span>⏱ {recipe.time}</span>
                <span>🥕 {recipe.ingredients.length} items</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Results */}
        {(loading || costs) && selectedRecipe && (
          <div className="bg-white rounded-2xl border border-forest-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 bg-forest-900 text-white flex items-center gap-3">
              <span className="text-3xl">{selectedRecipe.emoji}</span>
              <div>
                <h2 className="font-bold text-lg">{selectedRecipe.name} — Ingredient Cost</h2>
                <p className="text-forest-300 text-sm">{selectedRecipe.servings} servings • {selectedRecipe.time}</p>
              </div>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-16">
                <div className="text-center">
                  <div className="w-10 h-10 border-3 border-forest-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                  <p className="text-forest-500 text-sm">Fetching ingredient prices…</p>
                </div>
              </div>
            ) : costs && (
              <div>
                {/* Savings Banner */}
                {recipeSavings > 0 && (
                  <div className="px-6 py-4 bg-amber-50 border-b border-amber-100 flex items-center justify-between">
                    <p className="text-amber-800 font-semibold text-sm">
                      💰 Save <strong className="text-amber-600 text-lg">₹{recipeSavings}</strong> by choosing the cheapest platform!
                    </p>
                    <span className="text-amber-600 text-xs">Per {selectedRecipe.servings} servings = ₹{(recipeSavings / selectedRecipe.servings).toFixed(0)} per person</span>
                  </div>
                )}

                {/* Ingredient List */}
                <div className="px-6 py-4 border-b border-forest-50">
                  <p className="text-xs text-forest-500 font-semibold uppercase tracking-wide mb-3">Ingredients</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedRecipe.ingredients.map(ing => (
                      <span key={ing.query} className="text-xs bg-cream-100 text-forest-700 px-3 py-1.5 rounded-full border border-forest-100">
                        {ing.icon} {ing.displayName} <span className="text-forest-400">({ing.qty})</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Platform Cost Table */}
                <div className="divide-y divide-forest-50">
                  {costs.map((cost, rank) => {
                    const platform = PLATFORMS.find(p => p.id === cost.platformId);
                    if (!platform) return null;
                    const isBest = rank === 0;
                    const perPerson = (cost.total / selectedRecipe.servings).toFixed(0);

                    return (
                      <div key={cost.platformId}
                        className={`flex items-center gap-4 px-6 py-4 ${isBest ? 'bg-moss-50' : ''}`}
                      >
                        <span className="text-sm w-6 font-bold text-forest-400">
                          {isBest ? '🏆' : `#${rank + 1}`}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-forest-900">{platform.logo} {platform.name}</span>
                            {isBest && <span className="text-xs bg-moss-500 text-white px-2 py-0.5 rounded-full">Best deal</span>}
                          </div>
                          <span className="text-xs text-forest-400">₹{perPerson}/person • {platform.deliveryTime}</span>
                        </div>
                        <span className={`font-black text-xl ${isBest ? 'text-moss-700' : 'text-forest-700'}`}>
                          ₹{cost.total}
                        </span>
                        <a
                          href={platform.searchUrl(selectedRecipe.ingredients[0].query)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden sm:flex items-center gap-1 text-xs border border-forest-200 rounded-lg px-2.5 py-1.5 text-forest-500 hover:text-forest-700 hover:border-forest-400 transition-colors"
                        >
                          <ShoppingCart className="w-3 h-3" /> Order <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MealCostCalculator;
