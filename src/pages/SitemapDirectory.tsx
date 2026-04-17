import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { WORLD_RECIPES } from '../data/worldRecipes';
import sitemapLinks from '../data/sitemapLinks.json';

const SitemapDirectory = () => {
  const { foodItems = [], cities = [] } = sitemapLinks as { foodItems: string[], cities: string[] };

  return (
    <div className="min-h-screen bg-cream-50 pt-24 pb-16">
      <SEO
        title="HTML Sitemap Directory — Fantastic Food"
        description="Index of all grocery items, price comparisons, cities, and world recipes available on Fantastic Food."
        canonicalUrl="https://www.fantasticfood.in/directory"
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-display text-forest-900 mb-4">
            Site Directory
          </h1>
          <p className="text-forest-600 max-w-2xl text-lg">
            A complete index of all pages, price comparisons, and recipes available on our platform. Find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Grocery Items */}
          <div>
            <div className="border-b-2 border-forest-200 pb-2 mb-4">
              <h2 className="text-2xl font-black font-display text-forest-900">Grocery Items ({foodItems.length})</h2>
            </div>
            <div className="flex flex-col gap-2 h-96 overflow-y-auto pr-4 custom-scrollbar bg-white p-4 rounded-xl shadow-sm border border-forest-50">
              {foodItems.map((item) => (
                <Link 
                  key={item} 
                  to={`/food/${encodeURIComponent(item)}`}
                  className="text-forest-600 hover:text-amber-600 hover:underline capitalize text-sm py-1 border-b border-forest-50 last:border-0"
                >
                  {item.replace(/-/g, ' ')} price
                </Link>
              ))}
            </div>
          </div>

          {/* Cities */}
          <div>
            <div className="border-b-2 border-forest-200 pb-2 mb-4">
              <h2 className="text-2xl font-black font-display text-forest-900">City Trends ({cities.length})</h2>
            </div>
            <div className="flex flex-col gap-2 bg-white p-4 rounded-xl shadow-sm border border-forest-50">
              {cities.map((city) => (
                <Link 
                  key={city} 
                  to={`/city/${encodeURIComponent(city)}`}
                  className="text-forest-600 hover:text-amber-600 hover:underline capitalize text-sm py-1 border-b border-forest-50 last:border-0"
                >
                  Grocery Trends in {city}
                </Link>
              ))}
            </div>

            {/* Core Pages */}
            <div className="border-b-2 border-forest-200 pb-2 mb-4 mt-8">
              <h2 className="text-2xl font-black font-display text-forest-900">Platform Features</h2>
            </div>
            <div className="flex flex-col gap-2 bg-white p-4 rounded-xl shadow-sm border border-forest-50">
                <Link to="/compare" className="text-forest-600 hover:text-amber-600 hover:underline text-sm py-1">Compare Prices Engine</Link>
                <Link to="/basket" className="text-forest-600 hover:text-amber-600 hover:underline text-sm py-1">Smart Basket Calculator</Link>
                <Link to="/meal-calculator" className="text-forest-600 hover:text-amber-600 hover:underline text-sm py-1">Meal Cost Calculator</Link>
                <Link to="/coupons" className="text-forest-600 hover:text-amber-600 hover:underline text-sm py-1">Daily Coupons & Deals</Link>
                <Link to="/chef-aika" className="text-forest-600 hover:text-amber-600 hover:underline text-sm py-1">Chef Aika — AI Kitchen Assistant</Link>
                <Link to="/mushroom-shop" className="text-forest-600 hover:text-amber-600 hover:underline text-sm py-1">Premium Mushroom Shop</Link>
                <Link to="/recipes" className="text-forest-600 hover:text-amber-600 hover:underline text-sm py-1">World Recipe Hub</Link>
            </div>
          </div>

          {/* Recipes */}
          <div>
            <div className="border-b-2 border-forest-200 pb-2 mb-4">
              <h2 className="text-2xl font-black font-display text-forest-900">Recipes ({WORLD_RECIPES.length})</h2>
            </div>
            <div className="flex flex-col gap-2 h-96 overflow-y-auto pr-4 custom-scrollbar bg-white p-4 rounded-xl shadow-sm border border-forest-50">
              {WORLD_RECIPES.map((recipe) => (
                <Link 
                  key={recipe.id} 
                  to={`/recipe/${recipe.id}`}
                  className="text-forest-600 hover:text-amber-600 hover:underline text-sm py-1 border-b border-forest-50 last:border-0"
                >
                  {recipe.emoji} {recipe.name} ({recipe.country})
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SitemapDirectory;
