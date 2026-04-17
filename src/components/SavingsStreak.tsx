import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, X, Share2 } from 'lucide-react';

export const STREAK_KEY = 'ff_streak';

interface StreakData {
  count: number;
  lastDate: string; // ISO date string YYYY-MM-DD
}

const BADGES = [
  { days: 3,  emoji: '🌱', label: 'Sprout Saver',    bg: 'from-green-400 to-emerald-500' },
  { days: 7,  emoji: '🔥', label: 'Week Warrior',    bg: 'from-orange-400 to-red-500' },
  { days: 14, emoji: '⚡', label: 'Power Shopper',   bg: 'from-yellow-400 to-amber-500' },
  { days: 30, emoji: '👑', label: 'Smart King',      bg: 'from-purple-400 to-indigo-500' },
  { days: 100,emoji: '🏆', label: 'Legendary Saver', bg: 'from-amber-400 to-yellow-300' },
];

export function useStreak() {
  const today = new Date().toISOString().slice(0, 10);

  const getStreak = (): StreakData => {
    try {
      const raw = localStorage.getItem(STREAK_KEY);
      return raw ? JSON.parse(raw) : { count: 0, lastDate: '' };
    } catch { return { count: 0, lastDate: '' }; }
  };

  const incrementStreak = () => {
    const streak = getStreak();
    if (streak.lastDate === today) return streak; // already counted today

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const isConsecutive = streak.lastDate === yesterday.toISOString().slice(0, 10);

    const newStreak: StreakData = {
      count: isConsecutive ? streak.count + 1 : 1,
      lastDate: today,
    };
    try { localStorage.setItem(STREAK_KEY, JSON.stringify(newStreak)); } catch {}
    return newStreak;
  };

  return { getStreak, incrementStreak };
}

export default function SavingsStreak() {
  const { getStreak, incrementStreak } = useStreak();
  const [streak, setStreak] = useState<StreakData>({ count: 0, lastDate: '' });
  const [showModal, setShowModal] = useState(false);
  const [newBadge, setNewBadge] = useState<typeof BADGES[0] | null>(null);

  useEffect(() => {
    const prev = getStreak();
    const updated = incrementStreak();
    setStreak(updated);

    // Check if user just hit a milestone
    const milestone = BADGES.find(b => updated.count === b.days);
    if (milestone && prev.count !== updated.count) {
      setNewBadge(milestone);
      setShowModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentBadge = [...BADGES].reverse().find(b => streak.count >= b.days);
  if (streak.count < 1) return null;

  const shareStreak = () => {
    const text = `🔥 I'm on a ${streak.count}-day savings streak on Fantastic Food! I compare grocery prices daily across Blinkit, Zepto & more to save money. Try it: https://www.fantasticfood.in`;
    if (navigator.share) {
      navigator.share({ text });
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    }
  };

  return (
    <>
      {/* ── Floating Streak Badge ─────────────────────────────────────────────── */}
      <button
        onClick={() => setShowModal(true)}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform"
        title="Your savings streak"
      >
        <Flame className="w-4 h-4 animate-pulse" />
        {streak.count} day streak
        {currentBadge && <span className="text-base">{currentBadge.emoji}</span>}
      </button>

      {/* ── Modal ─────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.88, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.88, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>

              <div className="text-6xl mb-4">{currentBadge ? currentBadge.emoji : '🔥'}</div>
              <h2 className="text-2xl font-black text-forest-900 mb-1">
                {streak.count}-Day Streak!
              </h2>
              <p className="text-forest-600 text-sm mb-6">
                You've compared grocery prices for <strong>{streak.count} consecutive days</strong> — saving money like a pro!
              </p>

              {/* Badge Grid */}
              <div className="grid grid-cols-5 gap-2 mb-6">
                {BADGES.map(b => (
                  <div key={b.days} className={`flex flex-col items-center gap-1 ${streak.count >= b.days ? 'opacity-100' : 'opacity-25'}`}>
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${b.bg} flex items-center justify-center text-lg shadow`}>
                      {b.emoji}
                    </div>
                    <span className="text-[9px] font-bold text-forest-700 text-center leading-tight">{b.days}d</span>
                  </div>
                ))}
              </div>

              {/* Next milestone */}
              {(() => {
                const next = BADGES.find(b => b.days > streak.count);
                return next ? (
                  <p className="text-xs text-forest-500 mb-5 bg-forest-50 rounded-xl px-4 py-2">
                    🎯 {next.days - streak.count} more days to unlock <strong>{next.label}</strong> {next.emoji}
                  </p>
                ) : null;
              })()}

              <button
                onClick={shareStreak}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Share2 className="w-4 h-4" /> Share on WhatsApp
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Milestone Unlocked Toast ───────────────────────────────────────────── */}
      <AnimatePresence>
        {newBadge && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50"
          >
            <div className={`bg-gradient-to-r ${newBadge.bg} text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3`}>
              <span className="text-3xl">{newBadge.emoji}</span>
              <div>
                <p className="font-black text-sm">Badge Unlocked!</p>
                <p className="text-xs opacity-90">{newBadge.label}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
