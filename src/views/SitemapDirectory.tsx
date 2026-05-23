'use client';
import Link from 'next/link';

import { ALL_RECIPES } from '../data/worldRecipes';
import sitemapLinks from '../data/sitemapLinks.json';
import { useTranslation } from 'react-i18next';
import { useRegion } from '../utils/region';

// Format slug → Proper City Name (handles 'navi-mumbai' → 'Navi Mumbai')
const formatCityName = (slug: string): string =>
  slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

const SitemapDirectory = () => {
  const { foodItems = [], cities = [] } = sitemapLinks as { foodItems: string[], cities: string[] };
  const { t } = useTranslation();
  const { region } = useRegion();
  const isSG = region?.toUpperCase() === 'SG';

  const directorySchema = {
    '@type': 'CollectionPage',
    name: 'Fantastic Food — HTML Sitemap Directory',
    description: 'Complete index of all grocery price pages, city comparisons, and world recipes on Fantastic Food.',
    url: 'https://www.fantasticfood.in/directory',
    hasPart: [
      { '@type': 'WebPage', name: 'Grocery Price Comparisons', url: 'https://www.fantasticfood.in/compare' },
      { '@type': 'WebPage', name: 'City Grocery Trends', url: 'https://www.fantasticfood.in/directory' },
      { '@type': 'WebPage', name: 'World Recipes', url: 'https://www.fantasticfood.in/recipes' },
    ]
  };

  return (
    <div className="min-h-screen bg-cream-50 pt-24 pb-16">

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
              <h2 className="text-2xl font-black font-display text-forest-900">Top Groceries (500)</h2>
            </div>
            <p className="text-xs text-forest-500 mb-2">Displaying top 500 trending out of {foodItems.length} live tracked grocery items across India.</p>
            <div className="flex flex-col gap-2 h-96 overflow-y-auto pr-4 custom-scrollbar bg-white p-4 rounded-xl shadow-sm border border-forest-50">
              {foodItems.slice(0, 500).map((item) => (
                <Link 
                  key={item} 
                  href={`/food/${encodeURIComponent(item)}`}
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
            <div className="flex flex-col gap-2 bg-white p-4 rounded-xl shadow-sm border border-forest-50 max-h-96 overflow-y-auto custom-scrollbar">
              {cities.map((city) => (
                <Link
                  key={city}
                  href={`/city/${encodeURIComponent(city)}`}
                  className="text-forest-600 hover:text-amber-600 hover:underline capitalize text-sm py-1 border-b border-forest-50 last:border-0"
                >
                  Grocery Trends in {formatCityName(city)}
                </Link>
              ))}
            </div>

            {/* Core Pages */}
            <div className="border-b-2 border-forest-200 pb-2 mb-4 mt-8">
              <h2 className="text-2xl font-black font-display text-forest-900">Platform Features</h2>
            </div>
            <div className="flex flex-col gap-2 bg-white p-4 rounded-xl shadow-sm border border-forest-50">
                <Link href="/compare" className="text-forest-600 hover:text-amber-600 hover:underline text-sm py-1">Compare Prices Engine</Link>
                <Link href="/basket" className="text-forest-600 hover:text-amber-600 hover:underline text-sm py-1">Smart Basket Calculator</Link>
                <Link href="/meal-calculator" className="text-forest-600 hover:text-amber-600 hover:underline text-sm py-1">Meal Cost Calculator</Link>
                <Link href="/coupons" className="text-forest-600 hover:text-amber-600 hover:underline text-sm py-1">Daily Coupons & Deals</Link>
                <Link href="/chef-aika" className="text-forest-600 hover:text-amber-600 hover:underline text-sm py-1">Chef Aika — AI Kitchen Assistant</Link>
                <Link href="/community" className="text-forest-600 hover:text-amber-600 hover:underline text-sm py-1">Community Recipe Feed</Link>
                <Link href="/mushroom-shop" className="text-forest-600 hover:text-amber-600 hover:underline text-sm py-1">Premium Mushroom Shop</Link>
                <Link href="/recipes" className="text-forest-600 hover:text-amber-600 hover:underline text-sm py-1">World Recipe Hub</Link>
            </div>
          </div>

          {/* Recipes */}
          <div>
            <div className="border-b-2 border-forest-200 pb-2 mb-4">
            <h2 className="text-2xl font-black font-display text-forest-900">Recipes ({ALL_RECIPES.length})</h2>
            </div>
            <div className="flex flex-col gap-2 h-96 overflow-y-auto pr-4 custom-scrollbar bg-white p-4 rounded-xl shadow-sm border border-forest-50">
              {ALL_RECIPES.map((recipe) => (
                <Link 
                  key={recipe.id} 
                  href={`/recipe/${recipe.id}`}
                  className="text-forest-600 hover:text-amber-600 hover:underline text-sm py-1 border-b border-forest-50 last:border-0"
                >
                  {recipe.emoji} {recipe.name} ({recipe.country})
                </Link>
              ))}
            </div>
          </div>

          {/* Platform Features / Automated Blog */}
          <div>
            <div className="border-b-2 border-forest-200 pb-2 mb-4 mt-8 md:mt-0">
              <h2 className="text-2xl font-black font-display text-forest-900">Platform Features</h2>
            </div>
            <div className="flex flex-col gap-2 bg-white p-4 rounded-xl shadow-sm border border-forest-50">
              <Link href="/blog"
                className="text-forest-600 hover:text-amber-600 hover:underline font-bold py-2 border-b border-forest-50 last:border-0"
              >
                📰 Daily Deals & Coupons Blog (Auto-SEO)
              </Link>
              <Link href="/compare"
                className="text-forest-600 hover:text-amber-600 hover:underline font-bold py-2 border-b border-forest-50 last:border-0"
              >
                🔍 Live Price Comparison Tool
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SitemapDirectory;
