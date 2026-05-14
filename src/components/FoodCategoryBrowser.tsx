'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import { FOOD_CATEGORIES } from '../data/mockPrices';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FoodCategoryBrowserProps {
  compact?: boolean;
}

const FoodCategoryBrowser = ({ compact = false }: FoodCategoryBrowserProps) => {
  const router = useRouter();
  const { t } = useTranslation();

  const getCategoryKey = (label: string) => {
    if (label === 'Dairy & Eggs') return 'cat_dairy_eggs';
    if (label === 'Meat & Poultry') return 'cat_meat_poultry';
    if (label === 'Fish & Seafood') return 'cat_fish_seafood';
    if (label === 'Grains & Pulses') return 'cat_grains_pulses';
    if (label === 'Cooking Essentials') return 'cat_cooking_essentials';
    if (label === 'Sweets & Desserts') return 'cat_sweets_desserts';
    if (label === 'Instant Foods') return 'cat_instant_foods';
    if (label === 'Organic & Health') return 'cat_organic_health';
    if (label === 'Mushrooms 🍄') return 'cat_mushrooms';
    return `cat_${label.toLowerCase()}`;
  };

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
            {t('cat_all_food_categories')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle mx-auto"
          >
            {t('cat_compare_subtitle')}
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
                ? 'bg-linear-to-br from-earth-100 to-earth-200 border-earth-300 hover:border-earth-500 hover:shadow-md'
                : 'bg-white border-forest-100 hover:border-forest-300 hover:shadow-sm hover:bg-forest-50'
            }`}
          >
            <span className={compact ? 'text-2xl' : 'text-4xl'}>{cat.icon}</span>
            <span className={`font-medium text-center leading-tight ${
              compact ? 'text-xs text-forest-800' : 'text-sm text-forest-800'
            }`}>
              {t(getCategoryKey(cat.label))}
            </span>
            {cat.special && !compact && (
              <span className="text-xs text-earth-600 font-semibold flex items-center gap-0.5">
                {t('cat_order_direct')} <ArrowRight className="w-3 h-3" />
              </span>
            )}
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default FoodCategoryBrowser;
