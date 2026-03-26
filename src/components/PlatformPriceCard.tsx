import { motion } from 'framer-motion';
import { ExternalLink, ShoppingCart, TrendingDown, AlertCircle, Clock } from 'lucide-react';
import type { PlatformPrice } from '../data/mockPrices';
import { getPlatformById } from '../data/platforms';

interface PlatformPriceCardProps {
  price: PlatformPrice;
  isBest: boolean;
  index: number;
}

const PlatformPriceCard = ({ price, isBest, index }: PlatformPriceCardProps) => {
  const platform = getPlatformById(price.platformId);
  if (!platform) return null;

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
          <span className="badge-best">
            🏆 Best Price
          </span>
        </div>
      )}

      {/* Out of stock overlay */}
      {!price.inStock && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px] rounded-2xl flex items-center justify-center z-10">
          <div className="flex items-center gap-2 text-gray-500 font-semibold">
            <AlertCircle className="w-5 h-5" />
            Out of Stock
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
          <span className="badge-discount">
            -{price.discount}%
          </span>
        )}
      </div>

      {/* Product name */}
      <p className="text-sm text-forest-700 mb-3 line-clamp-1">{price.productName}</p>

      {/* Price */}
      <div className="flex items-end gap-2 mb-4">
        <span className={`text-2xl font-bold ${isBest ? 'text-forest-700' : 'text-forest-900'}`}>
          ₹{price.price}
        </span>
        {price.originalPrice > price.price && (
          <span className="text-sm text-gray-400 line-through mb-0.5">
            ₹{price.originalPrice}
          </span>
        )}
        <span className="text-xs text-forest-600 mb-0.5">/ {price.unit}</span>
      </div>

      {/* Savings */}
      {price.discount > 0 && (
        <div className="flex items-center gap-1 text-xs text-moss-600 mb-4">
          <TrendingDown className="w-3 h-3" />
          Save ₹{price.originalPrice - price.price}
        </div>
      )}

      {/* CTA */}
      <a
        href={price.url}
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
          <>
            <ShoppingCart className="w-4 h-4" />
            Buy at {platform.name}
          </>
        ) : (
          <>
            <ExternalLink className="w-4 h-4" />
            View on {platform.name}
          </>
        )}
      </a>
    </motion.div>
  );
};

export default PlatformPriceCard;
