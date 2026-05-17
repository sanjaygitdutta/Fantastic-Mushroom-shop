'use client';
import { useMemo } from 'react';
import { useRegion, formatCurrency } from '../utils/region';
import { motion } from 'framer-motion';
import { Zap, ExternalLink, TrendingDown } from 'lucide-react';
import Link from 'next/link';

import { PLATFORMS } from '../data/platforms';
import { getAffiliateUrl } from '../utils/affiliate';
import { useTranslation } from 'react-i18next';

interface Deal {
  food: string;
  icon: string;
  platformId: string;
  productName: string;
  price: number;
  originalPrice: number;
  discount: number;
  unit: string;
}

// Seeded deals – rotate based on day-of-month so they change daily
const ALL_DEALS: Deal[] = [
  { food: 'tomato',    icon: '🍅', platformId: 'zepto',     productName: 'Tomato Hybrid',          price: 38,  originalPrice: 65,  discount: 42, unit: '1 kg' },
  { food: 'milk',      icon: '🥛', platformId: 'jiomart',   productName: 'Full Cream Milk 1L',      price: 56,  originalPrice: 72,  discount: 22, unit: '1 L'  },
  { food: 'eggs',      icon: '🥚', platformId: 'bigbasket', productName: 'Fresho Brown Eggs',       price: 58,  originalPrice: 80,  discount: 28, unit: '6 pcs'},
  { food: 'paneer',    icon: '🧀', platformId: 'blinkit',   productName: 'Amul Fresh Paneer 200g',  price: 72,  originalPrice: 95,  discount: 24, unit: '200g' },
  { food: 'chicken',   icon: '🍗', platformId: 'zepto',     productName: 'Chicken Boneless 500g',   price: 199, originalPrice: 265, discount: 25, unit: '500g' },
  { food: 'rice',      icon: '🍚', platformId: 'jiomart',   productName: 'India Gate Classic 1kg',  price: 118, originalPrice: 158, discount: 25, unit: '1 kg' },
  { food: 'banana',    icon: '🍌', platformId: 'swiggy',    productName: 'Bangalore Banana 6pcs',   price: 28,  originalPrice: 49,  discount: 43, unit: '6 pcs'},
  { food: 'dal',       icon: '🫘', platformId: 'bigbasket', productName: 'Toor Dal Premium 1kg',    price: 108, originalPrice: 155, discount: 30, unit: '1 kg' },
  { food: 'bread',     icon: '🍞', platformId: 'zepto',     productName: 'Britannia Atta 400g',     price: 30,  originalPrice: 42,  discount: 29, unit: '400g' },
  { food: 'butter',    icon: '🧈', platformId: 'blinkit',   productName: 'Amul Butter 100g',        price: 48,  originalPrice: 58,  discount: 17, unit: '100g' },
  { food: 'apple',     icon: '🍎', platformId: 'jiomart',   productName: 'Shimla Apple 4pcs',       price: 115, originalPrice: 165, discount: 30, unit: '4 pcs'},
  { food: 'oil',       icon: '🫙', platformId: 'swiggy',    productName: 'Fortune Sunflower 1L',    price: 115, originalPrice: 152, discount: 24, unit: '1 L'  },
];

const SG_DEALS: Deal[] = [
  { food: 'milk',      icon: '🥛', platformId: 'fairprice',   productName: 'FairPrice Fresh Milk',     price: 3.20,  originalPrice: 3.60,  discount: 11, unit: '1 L'  },
  { food: 'eggs',      icon: '🥚', platformId: 'redmart',     productName: 'Passerine Fresh Eggs',     price: 3.50,  originalPrice: 4.20,  discount: 16, unit: '10 pcs'},
  { food: 'bread',     icon: '🍞', platformId: 'coldstorage', productName: 'Sunshine White Bread',     price: 2.10,  originalPrice: 2.50,  discount: 16, unit: '400g' },
  { food: 'chicken',   icon: '🍗', platformId: 'shengsiong',  productName: 'Fresh Chicken Breast',     price: 6.90,  originalPrice: 8.50,  discount: 18, unit: '500g' },
  { food: 'rice',      icon: '🍚', platformId: 'giant',       productName: 'SongHe Fragrant Rice',     price: 15.50, originalPrice: 18.20, discount: 14, unit: '5 kg' },
  { food: 'banana',    icon: '🍌', platformId: 'fairprice',   productName: 'Cavendish Banana',         price: 2.50,  originalPrice: 3.20,  discount: 21, unit: '1 kg' },
  { food: 'apple',     icon: '🍎', platformId: 'redmart',     productName: 'Fuji Apple 4pcs',          price: 4.80,  originalPrice: 5.90,  discount: 18, unit: '4 pcs'},
  { food: 'oil',       icon: '🫙', platformId: 'shengsiong',  productName: 'Knife Cooking Oil',        price: 8.50,  originalPrice: 10.20, discount: 16, unit: '1 L'  },
  { food: 'tomato',    icon: '🍅', platformId: 'coldstorage', productName: 'Cherry Tomatoes',          price: 3.90,  originalPrice: 4.80,  discount: 18, unit: '250g' },
  { food: 'paneer',    icon: '🧀', platformId: 'giant',       productName: 'Amul Fresh Paneer',        price: 6.50,  originalPrice: 8.00,  discount: 18, unit: '200g' },
  { food: 'dal',       icon: '🫘', platformId: 'fairprice',   productName: 'Toor Dal 1kg',             price: 4.50,  originalPrice: 5.50,  discount: 18, unit: '1 kg' },
  { food: 'butter',    icon: '🧈', platformId: 'redmart',     productName: 'SCS Salted Butter',        price: 5.90,  originalPrice: 7.20,  discount: 18, unit: '250g' },
];

const DealOfTheDay = () => {
  const { region } = useRegion();
  // Rotate 5 deals per day deterministically (changes at midnight)
  const todayDeals = useMemo(() => { const dealsArray = region === 'SG' ? SG_DEALS : ALL_DEALS; const seed = new Date().getDate(); const offset = seed % dealsArray.length; const rotated = [...dealsArray.slice(offset), ...dealsArray.slice(0, offset)]; return rotated.slice(0, 5); }, [region]);
  const { t } = useTranslation();

  return (
    <section className="py-14 bg-linear-to-b from-forest-900 to-forest-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-5 h-5 text-amber-400 animate-pulse" />
              <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">{t('deal_today_best')}</span>
            </div>
            <h2 className="text-3xl font-black text-white font-display">{t('deal_of_the_day')}</h2>
            <p className="text-forest-400 text-sm mt-1">{t('deal_refreshes_desc')}</p>
          </div>
          <Link href="/compare" className="hidden sm:flex items-center gap-1 text-forest-300 hover:text-white text-sm border border-forest-700 hover:border-forest-500 rounded-xl px-4 py-2 transition-all">
            {t('deal_see_all')}
          </Link>
        </div>

        {/* Deal Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {todayDeals.map((deal, idx) => {
            const platform = PLATFORMS.find(p => p.id === deal.platformId);
            if (!platform) return null;
            const buyUrl = platform.searchUrl(deal.food);

            return (
              <motion.div
                key={deal.food + idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-forest-800 hover:bg-forest-750 border border-forest-700 hover:border-forest-500 rounded-2xl p-4 flex flex-col gap-3 group transition-all cursor-pointer"
              >
                {/* Discount badge */}
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{deal.icon}</span>
                  <span className="bg-red-500 text-white text-xs font-black px-2 py-0.5 rounded-full">
                    -{deal.discount}%
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <p className="text-white font-bold text-sm leading-tight mb-0.5">{deal.productName}</p>
                  <p className="text-forest-400 text-xs">{deal.unit}</p>
                </div>

                {/* Price */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-amber-400 font-black text-xl">{formatCurrency(deal.price, region)}</span>
                    <span className="text-forest-500 text-xs line-through">{formatCurrency(deal.originalPrice, region)}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-forest-300 text-xs">{platform.logo} {platform.name}</span>
                    <span className="text-forest-500 text-xs">• {platform.deliveryTime}</span>
                  </div>
                </div>

                {/* Buy Button */}
                <a
                  href={getAffiliateUrl(deal.platformId, buyUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-forest-900 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  onClick={e => e.stopPropagation()}
                >
                  {t('deal_buy_now')} <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Savings ticker */}
        <div className="mt-8 flex items-center justify-center gap-3 text-forest-500 text-xs">
          <TrendingDown className="w-4 h-4 text-moss-400" />
          <span>{t('deal_users_saved')}<strong className="text-moss-400">{region === 'SG' ? 'S$10+' : t('deal_saved_amount')}</strong>{t('deal_saved_desc')}</span>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;
