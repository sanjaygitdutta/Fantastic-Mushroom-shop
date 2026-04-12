import { useNavigate } from 'react-router-dom';
import { TrendingUp, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

const TRENDING = [
  { label: 'Onion',   emoji: '🧅', hot: true  },
  { label: 'Chicken', emoji: '🍗', hot: true  },
  { label: 'Milk',    emoji: '🥛', hot: false },
  { label: 'Eggs',    emoji: '🥚', hot: false },
  { label: 'Tomato',  emoji: '🍅', hot: true  },
  { label: 'Rice',    emoji: '🍚', hot: false },
  { label: 'Paneer',  emoji: '🧀', hot: false },
  { label: 'Atta',    emoji: '🌾', hot: false },
  { label: 'Banana',  emoji: '🍌', hot: false },
  { label: 'Butter',  emoji: '🧈', hot: false },
  { label: 'Fish',    emoji: '🐟', hot: false },
  { label: 'Mushroom',emoji: '🍄', hot: false },
];

export default function TrendingSearches() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="mt-8"
    >
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-4 h-4 text-amber-500" />
        <span className="text-sm font-bold text-forest-700 uppercase tracking-wide">Trending Comparisons</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {TRENDING.map((item, i) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04 }}
            onClick={() => navigate(`/compare?q=${item.label.toLowerCase()}`)}
            className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-forest-100 hover:border-forest-400 hover:bg-forest-50 shadow-sm hover:shadow-md transition-all duration-200 text-sm font-medium text-forest-800"
          >
            <span className="text-base">{item.emoji}</span>
            <span>{item.label}</span>
            {item.hot && (
              <span className="flex items-center gap-0.5 text-xs text-orange-500 font-bold">
                <Flame className="w-3 h-3" />
              </span>
            )}
          </motion.button>
        ))}
      </div>

      {/* Savings teaser */}
      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-3.5 flex items-center gap-3">
        <span className="text-2xl">💰</span>
        <div>
          <p className="text-sm font-bold text-amber-900">Users saved an avg of ₹18–₹42 today</p>
          <p className="text-xs text-amber-700">by comparing before buying. Search above to find your best deal!</p>
        </div>
      </div>
    </motion.div>
  );
}
