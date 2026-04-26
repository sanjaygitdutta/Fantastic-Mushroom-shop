'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Apple } from 'lucide-react';
import Link from 'next/link';

import SEO from '../components/SEO';
import { SEASONAL_PRODUCE, MONTH_NAMES, getCurrentSeasonalItems, getItemsByMonth } from '../data/seasonalProduce';

export default function SeasonalGuide() {
  const currentMonth = new Date().getMonth() + 1;
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [filter, setFilter] = useState<'all' | 'vegetable' | 'fruit'>('all');

  const items = getItemsByMonth(selectedMonth).filter(i => filter === 'all' || i.type === filter);
  const currentItems = getCurrentSeasonalItems();

  return (
    <div className="min-h-screen bg-cream-50 pt-24 pb-16">
      <SEO
        title="Seasonal Fruits & Vegetables Guide India — Fantastic Food"
        description="Discover what fruits and vegetables are in season right now in India. Fresh, cheap, and healthy — compared across Blinkit, Zepto, Swiggy Instamart."
        canonicalUrl="https://www.fantasticfood.in/seasonal"
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-moss-100 text-moss-800 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            <Leaf className="w-4 h-4" /> Field to Fork
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display text-forest-900 mb-4">
            What's In Season <span className="text-moss-600">Right Now?</span>
          </h1>
          <p className="text-forest-600 max-w-2xl mx-auto text-lg">
            In-season produce is always fresher, tastier, and significantly cheaper. Shop smart by buying what nature intended.
          </p>
        </div>

        {/* Current month highlight */}
        <div className="bg-gradient-to-r from-moss-700 to-forest-800 rounded-3xl p-6 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-moss-300 text-sm font-bold uppercase tracking-wider mb-1">Best to buy in {MONTH_NAMES[currentMonth - 1]}</p>
              <h2 className="text-2xl font-black font-display">{currentItems.length} items at their freshest & cheapest!</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentItems.slice(0, 8).map(item => (
                <Link
                  key={item.name}
                  href={`/compare?q=${encodeURIComponent(item.searchQuery)}`}
                  className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
                >
                  {item.emoji} {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Month selector */}
        <div className="flex overflow-x-auto gap-2 pb-3 mb-6 scrollbar-hide">
          {MONTH_NAMES.map((month, i) => {
            const monthNum = i + 1;
            const count = SEASONAL_PRODUCE.filter(item => item.months.includes(monthNum)).length;
            return (
              <button
                key={month}
                onClick={() => setSelectedMonth(monthNum)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  selectedMonth === monthNum
                    ? 'bg-forest-800 text-white shadow-lg'
                    : 'bg-white border border-forest-100 text-forest-700 hover:border-forest-400'
                } ${monthNum === currentMonth ? 'ring-2 ring-amber-400 ring-offset-1' : ''}`}
              >
                {month.slice(0, 3)}
                <span className="block text-xs font-normal opacity-70">{count} items</span>
              </button>
            );
          })}
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-6">
          {(['all', 'vegetable', 'fruit'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                filter === f ? 'bg-forest-800 text-white' : 'bg-white border border-forest-200 text-forest-700 hover:bg-forest-50'
              }`}
            >
              {f === 'vegetable' ? <Leaf className="w-3.5 h-3.5" /> : f === 'fruit' ? <Apple className="w-3.5 h-3.5" /> : null}
              {f === 'all' ? 'All' : f === 'vegetable' ? 'Vegetables' : 'Fruits'}
            </button>
          ))}
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {items.length === 0 ? (
            <div className="col-span-full text-center py-12 text-forest-500">
              No items found for this selection.
            </div>
          ) : items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className={`bg-white rounded-2xl p-4 border shadow-sm text-center group hover:shadow-md transition-shadow ${
                selectedMonth === currentMonth ? 'border-moss-200' : 'border-forest-100'
              }`}
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h3 className="font-bold text-forest-900 text-sm mb-1">{item.name}</h3>
              <p className="text-xs text-forest-500 mb-3 line-clamp-2">{item.benefit}</p>
              <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-3 ${
                item.type === 'vegetable' ? 'bg-moss-100 text-moss-700' : 'bg-amber-100 text-amber-700'
              }`}>
                {item.type === 'vegetable' ? '🥦 Vegetable' : '🍎 Fruit'}
              </span>
              <Link href={`/compare?q=${encodeURIComponent(item.searchQuery)}`}
                className="flex items-center justify-center gap-1 w-full py-1.5 rounded-lg bg-forest-50 hover:bg-forest-100 text-forest-700 text-xs font-bold transition-colors"
              >
                Compare Price <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-white rounded-3xl border border-forest-100 p-8 text-center shadow-sm">
          <h3 className="text-2xl font-black font-display text-forest-900 mb-2">Shop seasonal, save more 🌾</h3>
          <p className="text-forest-600 mb-4 max-w-lg mx-auto">In-season produce costs up to 40% less than out-of-season imports. Compare prices across all platforms and get the freshest at cheapest!</p>
          <Link href="/basket" className="btn-forest inline-flex items-center gap-2 px-6 py-3">
            Build My Seasonal Basket <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
