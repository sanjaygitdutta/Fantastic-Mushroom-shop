'use client';
import { motion } from 'framer-motion';
import { ExternalLink, ShoppingCart, TrendingDown, AlertCircle, Clock, Tag, Scale, CheckCircle2 } from 'lucide-react';
import type { PlatformPrice } from '../data/mockPrices';
import { getPlatformById } from '../data/platforms';
import { getAffiliateUrl } from '../utils/affiliate';
import { PLATFORM_COUPONS } from '../data/compareFeatures';
import { getUnitPrice } from '../utils/unitPrice';
import { useTranslation } from 'react-i18next';

interface PlatformPriceCardProps {
  price: PlatformPrice;
  isBest: boolean;
  index: number;
}

const PlatformPriceCard = ({ price, isBest, index }: PlatformPriceCardProps) => {
  const platform = getPlatformById(price.platformId);
  if (!platform) return null;

  const coupons = PLATFORM_COUPONS[price.platformId] ?? [];
  const topCoupon = coupons[0];
  const unitPrice = getUnitPrice(price.price, price.unit);
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className={isBest ? 'platform-card-best relative' : 'platform-card relative'}
    >
      {/* Best price badge */}
      {isBest && (
        <div className="absolute -top-3 left-4">
          <span className="badge-best">🏆 {t('card_best_price')}</span>
        </div>
      )}

      {/* Out of stock overlay */}
      {!price.inStock && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px] rounded-2xl flex items-center justify-center z-10">
          <div className="flex items-center gap-2 text-gray-500 font-semibold">
            <AlertCircle className="w-5 h-5" />
            {t('card_out_of_stock')}
          </div>
        </div>
      )}

      {/* Platform header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold shadow-sm"
            style={{ backgroundColor: platform.bgColor }}
          >
            {platform.logo}
          </div>
          <div>
            <div className="font-semibold text-forest-900 text-sm">{platform.name}</div>
            <div className="flex items-center gap-1 text-xs text-forest-600">
              <Clock className="w-3 h-3" />
              {platform.deliveryTime}
            </div>
          </div>
        </div>
        {price.discount > 0 && (
          <span className="badge-discount">-{price.discount}%</span>
        )}
      </div>

      {/* Product name & Trust Badge */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <p className="text-sm text-forest-700 line-clamp-1 flex-1">{price.productName}</p>
        {price.isVerified ? (
          <span className="flex items-center gap-1 text-[10px] font-bold bg-green-50 text-green-700 px-1.5 py-0.5 rounded border border-green-200 whitespace-nowrap">
            <CheckCircle2 className="w-3 h-3" /> {t('card_verified_live')}
          </span>
        ) : (
          <div className="group relative flex items-center">
            <span className="flex items-center gap-1 text-[10px] font-bold bg-gray-50 text-gray-500 px-1.5 py-0.5 rounded border border-gray-200 whitespace-nowrap cursor-help">
              ~ {t('card_estimated')}
            </span>
            <div className="absolute bottom-full right-0 mb-1 w-48 p-2 bg-gray-900 text-white text-[10px] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
              {t('card_estimated_tooltip')}
            </div>
          </div>
        )}
      </div>

      {/* Price */}
      <div className="flex items-end gap-2 mb-1">
        <span className={`text-2xl font-bold ${isBest ? 'text-forest-700' : 'text-forest-900'}`}>
          ₹{price.price}
        </span>
        {price.originalPrice > price.price && (
          <span className="text-sm text-gray-400 line-through mb-0.5">₹{price.originalPrice}</span>
        )}
        <span className="text-xs text-forest-600 mb-0.5">/ {price.unit}</span>
      </div>

      {/* Unit price normalizer */}
      {unitPrice && (
        <div className="flex items-center gap-1 text-xs text-forest-500 mb-2">
          <Scale className="w-3 h-3" />
          <span className="font-medium">{unitPrice}</span>
          <span className="text-gray-400">{t('card_effective')}</span>
        </div>
      )}

      {/* Savings */}
      {price.discount > 0 && (
        <div className="flex items-center gap-1 text-xs text-moss-600 mb-3">
          <TrendingDown className="w-3 h-3" />
          {t('card_save')} ₹{price.originalPrice - price.price}
        </div>
      )}

      {/* Coupon code hint */}
      {topCoupon && price.inStock && (
        <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1.5 mb-3">
          <Tag className="w-3 h-3 text-amber-600 flex-shrink-0" />
          <div className="min-w-0">
            <span className="text-xs font-bold text-amber-700 font-mono">{topCoupon.code}</span>
            <span className="text-xs text-amber-600"> — {topCoupon.description}</span>
            {topCoupon.isNew && (
              <span className="ml-1 text-[10px] bg-purple-100 text-purple-700 font-bold px-1 py-0.5 rounded">{t('card_new')}</span>
            )}
          </div>
        </div>
      )}

      {/* CTA */}
      <a
        href={getAffiliateUrl(price.platformId, price.url)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => !price.inStock && e.preventDefault()}
        className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
          isBest
            ? 'bg-forest-700 text-cream-100 hover:bg-forest-800 shadow-md hover:shadow-lg'
            : 'bg-forest-50 text-forest-800 border border-forest-200 hover:bg-forest-100'
        } ${!price.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isBest ? (
          <><ShoppingCart className="w-4 h-4" /> {t('card_buy_at')} {platform.name}</>
        ) : (
          <><ExternalLink className="w-4 h-4" /> {t('card_view_on')} {platform.name}</>
        )}
      </a>
    </motion.div>
  );
};

export default PlatformPriceCard;
