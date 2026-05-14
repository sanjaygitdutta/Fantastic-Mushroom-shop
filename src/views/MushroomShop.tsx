'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Award } from 'lucide-react';
import Link from 'next/link';

import ProductGrid from '../components/ProductGrid';
import SEO from '../components/SEO';

const MushroomShop = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Premium Farm Fresh Mushrooms" 
        description="Order premium, organic and farm-fresh mushrooms directly from our cultivators. Get same-day delivery on Oyster, Button, and Shiitake varieties."
        canonicalUrl="https://www.fantasticfood.in/mushroom-shop"
      />
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-linear-to-br from-earth-800 via-earth-700 to-forest-800 py-20 px-4">
        {/* Blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-moss-500/20 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-0" />

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="flex-1 text-white">
            <Link href="/" className="inline-flex items-center gap-2 text-earth-300 hover:text-white text-sm mb-6 transition-colors">
              ← Back to Price Comparison
            </Link>
            <div className="inline-flex items-center gap-2 bg-earth-600/50 border border-earth-500 text-earth-200 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
              <Leaf className="w-4 h-4" />
              Direct from our Farm
            </div>
            <h1 className="text-5xl md:text-6xl font-black font-display leading-tight mb-4">
              Fantastic<br />
              <span className="text-amber-400">Mushroom Shop</span>
            </h1>
            <p className="text-earth-300 text-lg mb-8 max-w-md">
              Premium organic mushrooms — grown fresh, delivered fast. No middlemen. No compromises.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Award, text: 'Premium Quality' },
                { icon: Leaf, text: '100% Organic' },
                { icon: Award, text: 'Farm to Door' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-earth-200 text-sm bg-earth-700/50 border border-earth-600 px-4 py-2 rounded-full">
                  <Icon className="w-4 h-4 text-moss-400" />
                  {text}
                </div>
              ))}
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            className="text-[130px] md:text-[160px] leading-none select-none shrink-0"
          >
            🍄
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 px-4 bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-black text-forest-900 font-display">Our Products</h2>
              <p className="text-forest-600 text-sm mt-1">Fresh stock updated weekly</p>
            </div>
            <Link href="/compare?q=mushroom" className="flex items-center gap-2 text-sm text-forest-600 hover:text-forest-800 border border-forest-300 px-4 py-2 rounded-full hover:border-forest-500 transition-all">
              Compare mushroom prices online <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ProductGrid />
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card p-10 border-forest-200">
            <div className="text-5xl mb-5">📦</div>
            <h2 className="text-2xl font-black text-forest-900 font-display mb-3">Subscribe & Save</h2>
            <p className="text-forest-600 mb-7">
              Get fresh mushrooms delivered weekly to your doorstep — and save 15% on every order.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/subscription" className="btn-forest flex items-center gap-2">
                View Subscription Plans <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/b2b" className="btn-outline flex items-center gap-2">
                Bulk / B2B Orders
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MushroomShop;
