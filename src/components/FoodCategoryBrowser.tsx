'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import { FOOD_CATEGORIES } from '../data/mockPrices';
import { ArrowRight } from 'lucide-react';

interface FoodCategoryBrowserProps {
  compact?: boolean;
}

const FoodCategoryBrowser = ({ compact = false }: FoodCategoryBrowserProps) => {
  const router = useRouter();

  const handleCategory = (query: string, special?: boolean) => {
    if (special) {
      router.push('/mushroom-shop');
    } else {
      router.push(`/compare?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <section className={compact ? '' : 'py-16 px-4'}>
      {!compact && (
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mb-3"
          >
            All Food Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle mx-auto"
          >
            Compare prices across everything edible — from fresh produce to packaged goods
          </motion.p>
        </div>
      )}

      <div className={`grid ${compact ? 'grid-cols-3 sm:grid-cols-4 gap-3' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto'}`}>
        {FOOD_CATEGORIES.map((cat, index) => (
          <motion.button
            key={cat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleCategory(cat.query, cat.special)}
            className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
              cat.special
                ? 'bg-gradient-to-br from-earth-100 to-earth-200 border-earth-300 hover:border-earth-500 hover:shadow-md'
                : 'bg-white border-forest-100 hover:border-forest-300 hover:shadow-sm hover:bg-forest-50'
            }`}
          >
            <span className={compact ? 'text-2xl' : 'text-4xl'}>{cat.icon}</span>
            <span className={`font-medium text-center leading-tight ${
              compact ? 'text-xs text-forest-800' : 'text-sm text-forest-800'
            }`}>
              {cat.label}
            </span>
            {cat.special && !compact && (
              <span className="text-xs text-earth-600 font-semibold flex items-center gap-0.5">
                Order Direct <ArrowRight className="w-3 h-3" />
              </span>
            )}
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default FoodCategoryBrowser;
