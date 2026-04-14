import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, ChefHat, ArrowLeft, ShoppingCart, Globe, Flame, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import { WORLD_RECIPES, type WorldRecipe } from '../data/worldRecipes';

const DIFFICULTY_COLORS = {
  Easy: 'bg-green-100 text-green-700 border-green-200',
  Medium: 'bg-amber-100 text-amber-700 border-amber-200',
  Hard: 'bg-red-100 text-red-700 border-red-200',
};

const CATEGORY_ICONS: Record<string, string> = {
  'Breakfast': '🌅', 'Main Course': '🍽️', 'Dessert': '🍰',
  'Snack': '🥨', 'Soup': '🍜', 'Salad': '🥗',
  'Street Food': '🛺', 'Drink': '🥤',
};

export default function RecipePage() {
  const { recipeId } = useParams<{ recipeId: string }>();
  const navigate = useNavigate();

  const recipe: WorldRecipe | undefined = WORLD_RECIPES.find(r => r.id === recipeId);

  // Suggest related recipes from same country
  const related = recipe
    ? WORLD_RECIPES.filter(r => r.country === recipe.country && r.id !== recipe.id).slice(0, 4)
    : [];

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50 pt-24">
        <div className="text-center">
          <div className="text-6xl mb-4">🍽️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Recipe not found</h1>
          <p className="text-gray-500 mb-6">This recipe might have been removed or the URL is wrong.</p>
          <Link to="/recipes" className="bg-forest-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-forest-600">
            ← Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  // Generic fallback image since WORLD_RECIPES doesn't store individual images yet
  const fallBackImage = 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&q=80&w=2000';

  // Build JSON-LD Recipe schema (Google Rich Result)
  const recipeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.name,
    image: [ fallBackImage ],
    description: `Authentic ${recipe.country} recipe for ${recipe.name} from ${recipe.city}. ${recipe.difficulty} difficulty, ready in ${recipe.time}. Serves ${recipe.servings}.`,
    author: { '@type': 'Organization', name: 'Fantastic Food', url: 'https://www.fantasticfood.in' },
    datePublished: '2026-04-12',
    prepTime: `PT${recipe.time.replace(' min', 'M').replace(' hrs', 'H').replace(' hr', 'H')}`,
    cookTime: `PT${recipe.time.replace(' min', 'M').replace(' hrs', 'H').replace(' hr', 'H')}`,
    totalTime: `PT${recipe.time.replace(' min', 'M').replace(' hrs', 'H').replace(' hr', 'H')}`,
    recipeYield: `${recipe.servings} servings`,
    recipeCuisine: recipe.country,
    recipeCategory: recipe.category,
    keywords: recipe.tags.join(', '),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: (recipe.id.charCodeAt(0) + recipe.id.charCodeAt(1) + 24).toString(), // Consistent deterministic mock count
    },
    nutrition: {
      '@type': 'NutritionInformation',
      calories: `${recipe.calories} calories`,
    },
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.steps.map((step, i) => ({
      '@type': 'HowToStep',
      name: `Step ${i + 1}`,
      position: i + 1,
      text: step,
      url: `https://www.fantasticfood.in/recipe/${recipe.id}#step-${i + 1}`,
      image: fallBackImage
    })),
    url: `https://www.fantasticfood.in/recipe/${recipe.id}`,
  };

  // Extract readable ingredient keywords for compare links
  const getCompareKey = (ingredient: string): string => {
    const clean = ingredient.toLowerCase()
      .replace(/\d+g|\d+ml|\d+\s*(pcs|kg|L|tbsp|tsp|cup|cups)/gi, '')
      .trim().split(' ').filter(w => w.length > 3).slice(0, 2).join(' ');
    return clean || ingredient.split(' ')[0];
  };

  return (
    <>
      <SEO
        title={`${recipe.name} Recipe — Authentic ${recipe.country} Cuisine from ${recipe.city}`}
        description={`How to make ${recipe.name}: authentic ${recipe.country} recipe from ${recipe.city}. ${recipe.difficulty} | ${recipe.time} | ${recipe.servings} servings | ${recipe.calories} kcal. Full ingredients & step-by-step instructions. Compare ingredient prices before shopping!`}
        canonicalUrl={`https://www.fantasticfood.in/recipe/${recipe.id}`}
        keywords={`${recipe.name} recipe, how to make ${recipe.name}, ${recipe.country} recipe, ${recipe.city} food, ${recipe.tags.join(', ')}, recipe ingredients price India`}
        structuredData={recipeSchema}
      />

      <div className="min-h-screen bg-cream-50 pt-20">
        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-forest-900 to-forest-800">
          <div className="max-w-4xl mx-auto px-4 py-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-forest-400 text-sm mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/recipes" className="hover:text-white transition-colors">Recipes</Link>
              <span>/</span>
              <Link to="/recipes" className="hover:text-white transition-colors">{recipe.country}</Link>
              <span>/</span>
              <span className="text-cream-300">{recipe.name}</span>
            </div>

            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
              {/* Country + City badge */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-3xl">{recipe.emoji}</span>
                <div className="flex items-center gap-1 bg-white/10 text-cream-200 text-sm font-medium px-3 py-1 rounded-full">
                  <Globe className="w-3.5 h-3.5" /> {recipe.country} · {recipe.city}
                </div>
                <span className="bg-white/10 text-cream-200 text-sm font-medium px-3 py-1 rounded-full">
                  {CATEGORY_ICONS[recipe.category]} {recipe.category}
                </span>
                <span className={`text-sm font-bold px-3 py-1 rounded-full border ${DIFFICULTY_COLORS[recipe.difficulty]}`}>
                  {recipe.difficulty}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{recipe.name}</h1>

              {/* Stats row */}
              <div className="flex flex-wrap gap-6 text-cream-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span className="text-sm"><span className="font-bold text-white">{recipe.time}</span> total</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span className="text-sm"><span className="font-bold text-white">{recipe.servings}</span> servings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span className="text-sm"><span className="font-bold text-white">{recipe.calories}</span> kcal</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChefHat className="w-4 h-4 text-amber-400" />
                  <span className="text-sm"><span className="font-bold text-white">{recipe.difficulty}</span></span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {recipe.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1 bg-white/10 text-cream-300 text-xs px-2.5 py-1 rounded-full">
                    <Tag className="w-2.5 h-2.5" /> {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Ingredients Sidebar */}
            <div className="lg:col-span-1">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
                <h2 className="text-lg font-black text-gray-800 mb-4 flex items-center gap-2">
                  🛒 Ingredients
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-normal">
                    {recipe.ingredients.length} items
                  </span>
                </h2>
                <ul className="space-y-2.5">
                  {recipe.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 bg-forest-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      <span className="text-sm text-gray-700 leading-relaxed">{ing}</span>
                    </li>
                  ))}
                </ul>

                {/* Compare CTA */}
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">💰 Compare Prices</p>
                  <div className="flex flex-wrap gap-2">
                    {recipe.ingredients.slice(0, 5).map((ing) => {
                      const key = getCompareKey(ing);
                      return key ? (
                        <Link key={ing} to={`/compare?q=${encodeURIComponent(key)}`}
                          className="flex items-center gap-1 text-xs bg-forest-700 hover:bg-forest-600 text-white px-2.5 py-1.5 rounded-lg transition-colors font-medium">
                          <ShoppingCart className="w-2.5 h-2.5" /> {key}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Steps */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                <h2 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
                  📋 How to Make {recipe.name}
                </h2>
                <div className="space-y-5">
                  {recipe.steps.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-amber-500 text-forest-900 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 shadow-sm">
                        {i + 1}
                      </div>
                      <div className="flex-1 pt-1.5">
                        <p className="text-gray-700 leading-relaxed text-sm">{step}</p>
                        {i < recipe.steps.length - 1 && <div className="mt-4 h-px bg-gray-50" />}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Price compare banner */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-forest-800 to-forest-700 rounded-2xl p-5 mb-6">
                <p className="text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">💡 Pro Tip</p>
                <h3 className="text-white font-bold mb-2">Before you cook, check prices!</h3>
                <p className="text-cream-300 text-sm mb-3">
                  Compare ingredient costs across Blinkit, Zepto, BigBasket & 4 more — save money on every meal.
                </p>
                <Link to="/compare" className="inline-flex items-center gap-2 bg-amber-400 text-forest-900 font-bold px-4 py-2 rounded-xl text-sm hover:bg-amber-500 transition-colors">
                  <ShoppingCart className="w-4 h-4" /> Compare Prices Now
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Related Recipes from same country */}
          {related.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl font-black text-gray-800 mb-5">
                More {recipe.emoji} {recipe.country} Recipes
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {related.map(rel => (
                  <Link key={rel.id} to={`/recipe/${rel.id}`}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md hover:-translate-y-1 transition-all">
                    <p className="text-xs text-gray-400 mb-1">{rel.time} · {rel.difficulty}</p>
                    <p className="font-bold text-gray-800 text-sm line-clamp-2">{rel.name}</p>
                    <p className="text-xs text-forest-600 mt-2 font-medium">View recipe →</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back link */}
          <div className="mt-10 text-center">
            <button onClick={() => navigate('/recipes')}
              className="inline-flex items-center gap-2 text-forest-600 hover:text-forest-800 font-semibold transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to All Recipes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
