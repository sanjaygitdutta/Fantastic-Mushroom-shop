'use client';
import { useState, useEffect } from 'react';
import { useRegion, formatCurrency } from '../utils/region';
import { motion } from 'framer-motion';
import { TrendingDown, Star, Flame, Share2, ArrowRight, Trophy } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { STREAK_KEY } from '../components/SavingsStreak';

interface SavingsLog {
  query: string;
  savings: number;
  date: string;
  platform: string;
}

const SCORE_GRADES = [
  { min: 90, grade: 'S', label: 'Legendary Saver', labelKey: 'foodscore_grade_s', color: 'from-amber-400 to-yellow-300', emoji: '🏆' },
  { min: 75, grade: 'A', label: 'Smart Shopper',   labelKey: 'foodscore_grade_a', color: 'from-green-400 to-emerald-500', emoji: '⭐' },
  { min: 55, grade: 'B', label: 'Bargain Hunter',  labelKey: 'foodscore_grade_b', color: 'from-blue-400 to-cyan-500', emoji: '💡' },
  { min: 35, grade: 'C', label: 'Casual Buyer',    labelKey: 'foodscore_grade_c', color: 'from-orange-400 to-amber-500', emoji: '🛒' },
  { min: 0,  grade: 'D', label: 'Getting Started', labelKey: 'foodscore_grade_d', color: 'from-gray-400 to-gray-500', emoji: '🌱' },
];

export default function FoodScore() {
  const { region } = useRegion();
  const [log, setLog] = useState<SavingsLog[]>([]);
  const [streak, setStreak] = useState(0);
  const [score, setScore] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    // Load savings log
    try {
      const raw = localStorage.getItem('ff_savings_log');
      if (raw) setLog(JSON.parse(raw));
    } catch {}

    // Load streak
    try {
      const raw = localStorage.getItem(STREAK_KEY);
      if (raw) setStreak(JSON.parse(raw).count || 0);
    } catch {}
  }, []);

  useEffect(() => {
    // Calculate score 0–100
    const totalSavings = log.reduce((sum, l) => sum + l.savings, 0);
    const comparisons = log.length;
    const savingsScore = Math.min(50, totalSavings / 20); // Up to 50 pts from savings
    const streakScore = Math.min(30, streak * 3);          // Up to 30 pts from streak
    const activityScore = Math.min(20, comparisons * 2);   // Up to 20 pts from activity
    setScore(Math.round(savingsScore + streakScore + activityScore));
  }, [log, streak]);

  const totalSavings = log.reduce((sum, l) => sum + l.savings, 0);
  const totalComparisons = log.length;
  const grade = SCORE_GRADES.find(g => score >= g.min) || SCORE_GRADES[SCORE_GRADES.length - 1];

  // Circumference for SVG circle progress
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const shareScore = () => {
    const platforms = region === 'sg' ? 'FairPrice, RedMart & more' : 'Blinkit, Zepto & more';
    const text = `💰 My FoodScore on Fantastic Food is ${score}/100 — ${t(grade.labelKey)}! I've saved ${formatCurrency(totalSavings, region)} by comparing grocery prices across ${platforms}. Check yours: https://www.fantasticfood.in/savings`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-cream-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            <Star className="w-4 h-4" /> {t('foodscore_badge')}
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display text-forest-900 mb-4">{t('foodscore_title')}</h1>
          <p className="text-forest-600 max-w-lg mx-auto">{t('foodscore_subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Score circle */}
          <div className="md:col-span-1 bg-white rounded-3xl border border-forest-100 shadow-sm p-6 flex flex-col items-center justify-center text-center">
            <div className="relative w-44 h-44 mb-4">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                <circle cx="80" cy="80" r={radius} fill="none" stroke="#e8f4ec" strokeWidth="14" />
                <motion.circle
                  cx="80" cy="80" r={radius} fill="none"
                  stroke="url(#scoreGrad)" strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: offset }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
                <defs>
                  <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#52B788" />
                    <stop offset="100%" stopColor="#F4A23C" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-forest-900">{score}</span>
                <span className="text-xs font-bold text-forest-500 uppercase tracking-wider">/ 100</span>
              </div>
            </div>
            <span className="text-3xl mb-1">{grade.emoji}</span>
            <h2 className={`text-xl font-black bg-linear-to-r ${grade.color} bg-clip-text text-transparent`}>{t(grade.labelKey)}</h2>
            <p className="text-xs text-forest-500 mt-1">{t('foodscore_grade_label')} {grade.grade}</p>
            <button onClick={shareScore} className="mt-4 w-full py-2.5 rounded-xl bg-green-500 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-green-600 transition-colors">
              <Share2 className="w-4 h-4" /> {t('foodscore_share')}
            </button>
          </div>

          {/* Stats */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {[
              { icon: <TrendingDown className="w-6 h-6 text-green-500" />, label: t('foodscore_total_saved'), value: formatCurrency(totalSavings, region), sub: t('foodscore_total_saved_sub'), bg: 'bg-green-50 border-green-100' },
              { icon: <Star className="w-6 h-6 text-amber-500" />, label: t('foodscore_comparisons'), value: totalComparisons, sub: t('foodscore_comparisons_sub'), bg: 'bg-amber-50 border-amber-100' },
              { icon: <Flame className="w-6 h-6 text-orange-500" />, label: t('foodscore_streak'), value: `${streak} 🔥`, sub: t('foodscore_streak_sub'), bg: 'bg-orange-50 border-orange-100' },
              { icon: <Trophy className="w-6 h-6 text-purple-500" />, label: t('foodscore_best_category'), value: log.length > 0 ? log[0].platform : '—', sub: t('foodscore_best_category_sub'), bg: 'bg-purple-50 border-purple-100' },
            ].map((stat, i) => (
              <div key={i} className={`${stat.bg} border rounded-2xl p-5`}>
                {stat.icon}
                <p className="text-2xl font-black text-forest-900 mt-2">{stat.value}</p>
                <p className="text-xs font-bold text-forest-700 mt-0.5">{stat.label}</p>
                <p className="text-xs text-forest-400">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Empty state */}
        {totalComparisons === 0 && (
          <div className="bg-white rounded-3xl border border-forest-100 p-10 text-center shadow-sm">
            <div className="text-5xl mb-4">🛒</div>
            <h3 className="text-xl font-black text-forest-900 mb-2">{t('foodscore_empty_title')}</h3>
            <p className="text-forest-600 mb-6 max-w-sm mx-auto">
              {t('foodscore_empty_desc')}
            </p>
            <Link href="/compare" className="btn-forest inline-flex items-center gap-2 px-6 py-3">
              {t('foodscore_compare_btn')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Recent activity */}
        {log.length > 0 && (
          <div className="bg-white rounded-3xl border border-forest-100 p-6 shadow-sm">
            <h3 className="font-black text-forest-900 text-lg mb-4">{t('foodscore_recent')}</h3>
            <div className="space-y-3">
              {log.slice(0, 10).map((entry, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-forest-50 last:border-0">
                  <div>
                    <p className="font-bold text-forest-900 text-sm capitalize">{entry.query}</p>
                    <p className="text-xs text-forest-500">{entry.date} · {t('foodscore_best_on')} {entry.platform}</p>
                  </div>
                  <span className="text-green-600 font-black text-sm">-{formatCurrency(entry.savings, region)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
