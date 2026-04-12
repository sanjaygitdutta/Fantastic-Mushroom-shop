import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, Users, ChefHat, TrendingDown, Globe, X, BookOpen, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { WORLD_RECIPES, COUNTRIES, type WorldRecipe } from '../data/worldRecipes';

const DIFFICULTY_COLORS = {
  Easy: 'bg-green-100 text-green-700',
  Medium: 'bg-amber-100 text-amber-700',
  Hard: 'bg-red-100 text-red-700',
};

const CATEGORY_ICONS: Record<string, string> = {
  'Breakfast': '🌅', 'Main Course': '🍽️', 'Dessert': '🍰',
  'Snack': '🥨', 'Soup': '🍜', 'Salad': '🥗',
  'Street Food': '🛺', 'Drink': '🥤',
};

const COUNTRY_EMOJIS: Record<string, string> = {
  India: '🇮🇳', Italy: '🇮🇹', Japan: '🇯🇵', China: '🇨🇳', Mexico: '🇲🇽',
  France: '🇫🇷', USA: '🇺🇸', Thailand: '🇹🇭', Turkey: '🇹🇷', Spain: '🇪🇸',
  Greece: '🇬🇷', Lebanon: '🇱🇧', Morocco: '🇲🇦', Korea: '🇰🇷', Vietnam: '🇻🇳',
  Brazil: '🇧🇷', Ethiopia: '🇪🇹', Pakistan: '🇵🇰', Indonesia: '🇮🇩',
  Germany: '🇩🇪', UK: '🇬🇧', Russia: '🇷🇺', Egypt: '🇪🇬', Argentina: '🇦🇷',
  'Sri Lanka': '🇱🇰',
};

const RecipeModal = ({ recipe, onClose }: { recipe: WorldRecipe; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      onClick={e => e.stopPropagation()}
      className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-forest-900 to-forest-800 p-6 rounded-t-3xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30">
          <X className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{recipe.emoji}</span>
          <span className="text-cream-300 text-sm font-medium">{recipe.country} · {recipe.city}</span>
          <span className="text-cream-400 text-sm">· {recipe.category}</span>
        </div>
        <h2 className="text-2xl font-black text-white mb-3">{recipe.name}</h2>
        <div className="flex flex-wrap gap-3 text-sm text-cream-300">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{recipe.time}</span>
          <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{recipe.servings} servings</span>
          <span className="flex items-center gap-1"><ChefHat className="w-3.5 h-3.5" />{recipe.difficulty}</span>
          <span>🔥 {recipe.calories} kcal</span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Ingredients */}
        <div>
          <h3 className="font-black text-gray-800 text-lg mb-3 flex items-center gap-2">
            🛒 Ingredients
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {recipe.ingredients.map((ing, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
                <span className="w-5 h-5 bg-forest-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                <span className="text-sm text-gray-700">{ing}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div>
          <h3 className="font-black text-gray-800 text-lg mb-3 flex items-center gap-2">
            📋 How to Cook
          </h3>
          <div className="space-y-3">
            {recipe.steps.map((step, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-7 h-7 bg-amber-400 text-forest-900 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 mt-0.5">{i + 1}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {recipe.tags.map(tag => (
            <span key={tag} className="text-xs bg-forest-50 text-forest-600 border border-forest-100 px-3 py-1 rounded-full font-medium">#{tag}</span>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
          <p className="text-sm font-semibold text-amber-800 mb-3 flex items-center gap-2">
            <TrendingDown className="w-4 h-4" /> Compare ingredient prices before you shop!
          </p>
          <div className="flex gap-2 flex-wrap">
            {recipe.ingredients.slice(0, 3).map((ing) => {
              const query = ing.split(' ').slice(-1)[0].toLowerCase();
              return (
                <Link key={ing} to={`/compare?q=${encodeURIComponent(query)}`} onClick={onClose}
                  className="flex items-center gap-1 text-xs bg-forest-700 text-white px-3 py-1.5 rounded-full font-medium hover:bg-forest-600 transition-colors">
                  <ShoppingCart className="w-3 h-3" /> Compare {query}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const RecipeCard = ({ recipe }: { recipe: WorldRecipe }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    whileHover={{ y: -4 }}
    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all group"
  >
    {/* Country stripe */}
    <div className="h-1.5 bg-gradient-to-r from-forest-500 to-amber-400" />
    <div className="p-5">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{recipe.emoji}</span>
          <div>
            <p className="text-xs font-semibold text-gray-400">{recipe.country} · {recipe.city}</p>
            <span className="text-xs text-gray-400">{CATEGORY_ICONS[recipe.category]} {recipe.category}</span>
          </div>
        </div>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${DIFFICULTY_COLORS[recipe.difficulty]}`}>
          {recipe.difficulty}
        </span>
      </div>
      <h3 className="font-black text-gray-800 text-base mb-3 group-hover:text-forest-700 transition-colors line-clamp-1">{recipe.name}</h3>
      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{recipe.time}</span>
        <span className="flex items-center gap-1"><Users className="w-3 h-3" />{recipe.servings} servings</span>
        <span>🔥 {recipe.calories} kcal</span>
      </div>
      <div className="flex flex-wrap gap-1">
        {recipe.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-xs bg-gray-50 text-gray-500 px-2 py-0.5 rounded-full">#{tag}</span>
        ))}
      </div>
    </div>
    <Link to={`/recipe/${recipe.id}`} className="block px-5 pb-4">
      <div className="flex items-center gap-1 text-forest-600 text-xs font-bold group-hover:text-forest-800">
        <BookOpen className="w-3.5 h-3.5" /> View Recipe & Cook
      </div>
    </Link>
  </motion.div>
);

export default function Recipes() {
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const categories = ['All', 'Breakfast', 'Main Course', 'Dessert', 'Snack', 'Soup', 'Salad', 'Street Food'];
  const allCountries = ['All', ...COUNTRIES];

  const filtered = useMemo(() => {
    return WORLD_RECIPES.filter(r => {
      const q = search.toLowerCase();
      const matchSearch = !search || r.name.toLowerCase().includes(q) || r.country.toLowerCase().includes(q) || r.city.toLowerCase().includes(q) || r.tags.some(t => t.includes(q));
      const matchCountry = selectedCountry === 'All' || r.country === selectedCountry;
      const matchCategory = selectedCategory === 'All' || r.category === selectedCategory;
      const matchDiff = selectedDifficulty === 'All' || r.difficulty === selectedDifficulty;
      return matchSearch && matchCountry && matchCategory && matchDiff;
    });
  }, [search, selectedCountry, selectedCategory, selectedDifficulty]);

  // Group by country
  const groupedByCountry = useMemo(() => {
    if (selectedCountry !== 'All') return { [selectedCountry]: filtered };
    const groups: Record<string, WorldRecipe[]> = {};
    filtered.forEach(r => {
      if (!groups[r.country]) groups[r.country] = [];
      groups[r.country].push(r);
    });
    return groups;
  }, [filtered, selectedCountry]);

  return (
    <>
      <SEO
        title="World Recipes — 250+ Authentic Recipes from 25 Countries | Fantastic Food"
        description="Discover 250+ authentic recipes from India, Italy, Japan, China, Mexico, France, Thailand, Korea, Turkey and 16 more countries. Full ingredients & step-by-step instructions. Compare ingredient prices before you cook!"
        canonical="https://www.fantasticfood.in/recipes"
        keywords="world recipes, international cuisine, Indian recipes, Italian recipes, Japanese recipes, Chinese recipes, Mexican recipes, how to cook, recipe ingredients comparison"
      />

      <div className="min-h-screen bg-gradient-to-b from-forest-900 to-gray-50 pt-24 pb-16">

        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 text-center mb-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-wrap justify-center gap-1.5 mb-4 text-2xl">
              {Object.values(COUNTRY_EMOJIS).map(flag => (
                <span key={flag} className="hover:scale-125 transition-transform cursor-default">{flag}</span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-3 leading-tight">
              World Kitchen<br /><span className="text-amber-400">250+ Authentic Recipes</span>
            </h1>
            <p className="text-cream-300 text-lg max-w-2xl mx-auto mb-6">
              From Delhi to Tokyo, Rome to Mexico City — explore authentic recipes from 25 countries with full ingredients & step-by-step instructions.
            </p>
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { val: `${WORLD_RECIPES.length}+`, label: 'Recipes' },
                { val: `${COUNTRIES.length}`, label: 'Countries' },
                { val: '8', label: 'Categories' },
              ].map(s => (
                <div key={s.label} className="bg-white/10 border border-white/20 rounded-2xl px-6 py-3 text-center">
                  <div className="text-2xl font-black text-amber-400">{s.val}</div>
                  <div className="text-cream-300 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search recipes, countries, cities or ingredients..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 outline-none focus:border-forest-400"
              />
              {search && <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2"><X className="w-4 h-4 text-gray-400" /></button>}
            </div>

            {/* Country filter - scrollable */}
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1"><Globe className="w-3 h-3" /> Country</p>
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {allCountries.map(c => (
                  <button key={c} onClick={() => setSelectedCountry(c)}
                    className={`flex-shrink-0 text-sm font-semibold px-3 py-1.5 rounded-full border transition-all ${selectedCountry === c ? 'bg-forest-700 text-white border-forest-700' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-forest-300'}`}
                  >
                    {COUNTRY_EMOJIS[c] || ''} {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Category + Difficulty */}
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">Category</p>
                <div className="flex flex-wrap gap-1.5">
                  {categories.map(c => (
                    <button key={c} onClick={() => setSelectedCategory(c)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${selectedCategory === c ? 'bg-amber-400 text-forest-900 border-amber-400' : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-amber-300'}`}
                    >
                      {CATEGORY_ICONS[c] || ''} {c}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">Difficulty</p>
                <div className="flex gap-1.5">
                  {['All', 'Easy', 'Medium', 'Hard'].map(d => (
                    <button key={d} onClick={() => setSelectedDifficulty(d)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${selectedDifficulty === d ? 'bg-forest-600 text-white border-forest-600' : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-forest-300'}`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="flex items-center justify-between pt-1 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                Showing <span className="font-bold text-forest-700">{filtered.length}</span> recipes from <span className="font-bold text-forest-700">{Object.keys(groupedByCountry).length}</span> countries
              </p>
              {(selectedCountry !== 'All' || selectedCategory !== 'All' || selectedDifficulty !== 'All' || search) && (
                <button onClick={() => { setSearch(''); setSelectedCountry('All'); setSelectedCategory('All'); setSelectedDifficulty('All'); }}
                  className="text-xs text-forest-600 hover:underline font-medium">Clear filters</button>
              )}
            </div>
          </div>
        </div>

        {/* Recipes by Country */}
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          {Object.entries(groupedByCountry).sort(([a], [b]) => a.localeCompare(b)).map(([country, recipes]) => (
            <div key={country}>
              {/* Country header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-4xl">{COUNTRY_EMOJIS[country] || '🌍'}</span>
                <div>
                  <h2 className="text-2xl font-black text-gray-800">{country}</h2>
                  <p className="text-gray-400 text-sm">{recipes.length} recipe{recipes.length > 1 ? 's' : ''}</p>
                </div>
                <div className="ml-auto h-px flex-1 bg-gray-200 max-w-xs hidden sm:block" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <AnimatePresence>
                  {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-gray-500 text-lg font-semibold">No recipes found</p>
              <p className="text-gray-400 text-sm mt-1">Try a different search or clear filters</p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="bg-forest-900 mt-16 py-12 px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-2 flex items-center gap-2 justify-center">
            <TrendingDown className="w-6 h-6 text-amber-400" /> Compare Ingredient Prices Before You Cook
          </h2>
          <p className="text-cream-300 mb-6 text-sm">Find the cheapest place to buy your ingredients across 7 platforms.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['chicken', 'tomato', 'rice', 'paneer', 'eggs', 'butter', 'onion', 'garlic'].map(item => (
              <Link key={item} to={`/compare?q=${item}`}
                className="text-sm bg-forest-700 hover:bg-forest-600 border border-forest-600 text-cream-200 px-4 py-2 rounded-full transition-all capitalize">
                🔍 {item} price
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
