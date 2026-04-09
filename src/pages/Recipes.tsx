import { motion } from 'framer-motion';
import { Clock, Users, ChefHat, ArrowRight, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { recipes } from '../data/recipes';
import SEO from '../components/SEO';

const INGREDIENT_LINKS = [
  { label: 'Mushroom price today', slug: 'mushroom' },
  { label: 'Tomato price today', slug: 'tomato' },
  { label: 'Paneer price today', slug: 'paneer' },
  { label: 'Butter price today', slug: 'butter' },
  { label: 'Coconut milk price', slug: 'coconut milk' },
  { label: 'Arborio rice price', slug: 'rice' },
];

const recipeListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Mushroom Recipes by Fantastic Food',
  description: 'Delicious mushroom recipes with ingredient price comparison across Blinkit, Zepto, BigBasket and more.',
  url: 'https://www.fantasticfood.in/recipes',
  numberOfItems: recipes.length,
  itemListElement: recipes.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `https://www.fantasticfood.in/recipes/${r.id}`,
    name: r.title,
  })),
};

const Recipes = () => {
    return (
        <div className="min-h-screen pt-20 bg-mushroom-50">
            <SEO
              title="Mushroom Recipes | Cook & Compare Ingredient Prices — Fantastic Food"
              description="Explore delicious mushroom recipes from creamy risotto to spicy masala curry. Compare ingredient prices across Blinkit, Zepto, BigBasket, and more to cook for less."
              canonicalUrl="https://www.fantasticfood.in/recipes"
              keywords="mushroom recipes, mushroom curry recipe, mushroom risotto, lion's mane recipe, paddy straw mushroom recipe, ingredients price comparison"
              structuredData={recipeListSchema}
            />

            {/* Hero */}
            <div className="bg-forest-900 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Fungi Kitchen
                    </motion.h1>
                    <p className="text-xl text-mushroom-200 max-w-2xl mx-auto">
                        Discover delicious ways to cook with our premium mushrooms. From quick snacks to gourmet feasts — compare ingredient prices before you shop.
                    </p>
                </div>
            </div>

            {/* Recipe Grid */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipes.map((recipe, index) => (
                        <motion.div
                            key={recipe.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-mushroom-100 group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-forest-900 uppercase tracking-wide">
                                    {recipe.difficulty}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {recipe.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium text-forest-600 bg-forest-50 px-2 py-1 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-1">{recipe.title}</h3>
                                <div className="flex items-center justify-between text-gray-500 text-sm mb-6">
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {recipe.prepTime}
                                    </div>
                                    <div className="flex items-center">
                                        <ChefHat className="w-4 h-4 mr-1" />
                                        {recipe.cookTime}
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="w-4 h-4 mr-1" />
                                        {recipe.servings} pp
                                    </div>
                                </div>
                                <Link
                                    to={`/recipes/${recipe.id}`}
                                    className="inline-flex items-center text-forest-600 font-bold hover:text-forest-800 transition-colors"
                                >
                                    View Recipe <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Compare Ingredients CTA — drives traffic into monetization funnel */}
            <div className="bg-forest-900 py-14 px-4">
              <div className="max-w-5xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-widest mb-3">
                  <TrendingDown className="w-4 h-4" /> Compare Before You Shop
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-3 font-display">
                  Find the Cheapest Ingredients Instantly
                </h2>
                <p className="text-forest-300 mb-8 max-w-xl mx-auto">
                  Before you cook, compare ingredient prices across Blinkit, Zepto, BigBasket & more. Save on every recipe.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {INGREDIENT_LINKS.map(({ label, slug }) => (
                    <Link
                      key={slug}
                      to={`/food/${encodeURIComponent(slug)}`}
                      className="bg-forest-700 hover:bg-forest-600 border border-forest-600 text-cream-200 text-sm px-4 py-2 rounded-full transition-all hover:scale-105"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
        </div>
    );
};

export default Recipes;
