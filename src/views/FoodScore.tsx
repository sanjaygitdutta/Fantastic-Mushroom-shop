'use client';
import { useState, useEffect } from 'react';
import { useRegion, formatCurrency } from '../utils/region';
import { motion } from 'framer-motion';
import { TrendingDown, Star, Flame, Share2, ArrowRight, Trophy, TrendingUp, Info, Copy, Check, ShoppingBag } from 'lucide-react';
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

const INFLATION_DATA = {
  IN: {
    cities: [
      { name: 'Delhi', slug: 'delhi', prices: [142, 145, 143, 148, 153, 150, 154], trend: '+8.4%' },
      { name: 'Mumbai', slug: 'mumbai', prices: [148, 152, 150, 155, 160, 158, 162], trend: '+9.4%' },
      { name: 'Bangalore', slug: 'bangalore', prices: [140, 142, 145, 144, 149, 147, 151], trend: '+7.8%' },
      { name: 'Chennai', slug: 'chennai', prices: [138, 140, 139, 142, 147, 145, 148], trend: '+7.2%' },
      { name: 'Kolkata', slug: 'kolkata', prices: [130, 134, 132, 136, 141, 139, 143], trend: '+10.0%' }
    ],
    items: 'Essential Veggie Basket: 1kg Onion + 1kg Potato + 1kg Tomato'
  },
  SG: {
    cities: [
      { name: 'Singapore Central', slug: 'singapore', prices: [6.20, 6.35, 6.30, 6.45, 6.60, 6.55, 6.70], trend: '+8.0%' },
      { name: 'Jurong', slug: 'jurong', prices: [5.90, 6.00, 5.95, 6.10, 6.25, 6.20, 6.35], trend: '+7.6%' },
      { name: 'Woodlands', slug: 'woodlands', prices: [5.80, 5.90, 5.85, 6.00, 6.15, 6.10, 6.25], trend: '+7.7%' },
      { name: 'Tampines', slug: 'tampines', prices: [6.00, 6.10, 6.05, 6.20, 6.35, 6.30, 6.45], trend: '+7.5%' }
    ],
    items: 'Local Farm Veggie Basket: 1kg Cucumber + 1kg Spinach + 1kg Tomato'
  }
};

export default function FoodScore() {
  const { region } = useRegion();
  const [log, setLog] = useState<SavingsLog[]>([]);
  const [streak, setStreak] = useState(0);
  const [score, setScore] = useState(0);
  const { t } = useTranslation();

  const regionKey = (region === 'SG') ? 'SG' : 'IN';
  const dataForRegion = INFLATION_DATA[regionKey];
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    setSelectedCityIndex(0);
  }, [region]);

  // Safely get active city with fallbacks
  const activeCity = dataForRegion.cities[selectedCityIndex] || dataForRegion.cities[0];

  // Helper to generate last 7 days dates
  const getPast7DaysLabels = () => {
    const labels = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      labels.push(d.toLocaleDateString(region === 'SG' ? 'en-SG' : 'en-IN', { day: 'numeric', month: 'short' }));
    }
    return labels;
  };
  const dateLabels = getPast7DaysLabels();

  // Compute SVG chart points
  const prices = activeCity.prices;
  const maxPrice = Math.max(...prices) * 1.05;
  const minPrice = Math.min(...prices) * 0.95;
  const priceRange = maxPrice - minPrice;

  const points = prices.map((price, i) => {
    const x = i * (440 / 6) + 30;
    const y = 170 - ((price - minPrice) / (priceRange || 1)) * 140;
    return { x, y, price };
  });

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaPath = `${linePath} L ${points[points.length - 1].x} 170 L ${points[0].x} 170 Z`;

  const getWhatsAppShareUrl = () => {
    const todayPrice = prices[prices.length - 1];
    const cityText = activeCity.name;
    const itemsLabel = region === 'SG' ? 'essential local veggies' : 'onion + potato + tomato basket';
    
    let text = '';
    if (region === 'SG') {
      text = `📈 Live SG Grocery Inflation Index is at ${activeCity.trend}! A 3kg ${itemsLabel} in ${cityText} costs ${formatCurrency(todayPrice, 'SG')} today. I saved money by comparing FairPrice & RedMart on Fantastic Food. Check live rates in your area: https://www.fantasticfood.in/savings`;
    } else {
      text = `📈 लाइव किराना मुद्रास्फीति सूचकांक (${activeCity.trend})! आज ${cityText} में आलू + प्याज + टमाटर की टोकरी का दाम ${formatCurrency(todayPrice, 'IN')} है। मैंने फ़ैंटास्टिक फ़ूड पर कीमतों की तुलना करके बचत की। अपने क्षेत्र के लाइव रेट देखें: https://www.fantasticfood.in/savings`;
    }
    
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  const handleCopyLink = () => {
    if (typeof window === 'undefined') return;
    const url = 'https://www.fantasticfood.in/savings';
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    });
  };

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
    const platforms = region === 'SG' ? 'FairPrice, RedMart & more' : 'Blinkit, Zepto & more';
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

        {/* Grocery Inflation Index & WhatsApp Viral Loop Section */}
        <div className="bg-white rounded-[2.5rem] border border-forest-100 shadow-xl overflow-hidden mb-8">
          <div className="bg-linear-to-br from-forest-900 via-forest-800 to-forest-950 text-white px-8 py-8 md:py-10 relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-moss-500/15 rounded-full blur-2xl" />
            <div className="relative z-10 space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-red-500/25 border border-red-500/30 text-red-200 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5 text-red-400" />
                Live Index Tracker
              </div>
              <h2 className="text-3xl font-black font-display tracking-tight">Grocery Inflation Index</h2>
              <p className="text-cream-200 text-xs md:text-sm font-medium max-w-xl">
                Real-time weekly tracking of the essential 3kg vegetable basket (Onion, Potato, Tomato) across major quick-commerce apps.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col items-end shrink-0">
              <span className="text-red-400 text-5xl font-black tracking-tighter leading-none">{activeCity.trend}</span>
              <span className="text-cream-300 text-xs font-bold uppercase tracking-widest mt-1">This Week Inflation</span>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* City Selector */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-black uppercase text-forest-500 tracking-wider">Select a Local City Index:</span>
              <div className="flex flex-wrap gap-2">
                {dataForRegion.cities.map((city, idx) => (
                  <button
                    key={city.slug}
                    onClick={() => setSelectedCityIndex(idx)}
                    className={`text-xs font-bold px-4.5 py-2.5 rounded-full border transition-all cursor-pointer ${
                      selectedCityIndex === idx
                        ? 'bg-forest-900 border-forest-900 text-white shadow-md'
                        : 'bg-cream-50 border-forest-100 text-forest-700 hover:bg-forest-50 hover:border-forest-200'
                    }`}
                  >
                    {city.name} ({city.trend})
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive SVG Chart */}
            <div className="relative bg-cream-50/50 rounded-3xl border border-forest-50 p-4 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-forest-600" />
                  <span className="text-xs font-bold text-forest-800">{dataForRegion.items}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-forest-500 font-semibold bg-white border border-forest-100 px-3 py-1 rounded-full">
                  <Info className="w-3.5 h-3.5 text-forest-400" />
                  Hover points to inspect prices
                </div>
              </div>

              {/* Pure SVG Line Chart */}
              <div className="w-full overflow-x-auto">
                <svg className="w-full min-w-[500px] h-[220px]" viewBox="0 0 500 200">
                  <defs>
                    <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#52B788" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#52B788" stopOpacity="0.00" />
                    </linearGradient>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#52B788" />
                      <stop offset="100%" stopColor="#2D6A4F" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal grid lines */}
                  <line x1="30" y1="30" x2="470" y2="30" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="30" y1="100" x2="470" y2="100" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="30" y1="170" x2="470" y2="170" stroke="#CBD5E1" strokeWidth="1.5" />

                  {/* Area fill */}
                  <path d={areaPath} fill="url(#chartGrad)" />

                  {/* Line path */}
                  <path d={linePath} fill="none" stroke="url(#lineGrad)" strokeWidth="3.5" strokeLinecap="round" />

                  {/* Data points (circles) */}
                  {points.map((p, i) => (
                    <g key={i}>
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={hoveredPoint === i ? 7 : 4.5}
                        fill={hoveredPoint === i ? '#F4A23C' : '#52B788'}
                        stroke="white"
                        strokeWidth="2.5"
                        className="cursor-pointer transition-all duration-150 drop-shadow-md"
                        onMouseEnter={() => setHoveredPoint(i)}
                        onMouseLeave={() => setHoveredPoint(null)}
                      />
                      
                      {/* Date label at bottom */}
                      <text
                        x={p.x}
                        y="188"
                        fill="#64748B"
                        fontSize="9"
                        fontWeight="700"
                        textAnchor="middle"
                      >
                        {dateLabels[i]}
                      </text>
                    </g>
                  ))}

                  {/* Tooltip render on top */}
                  {hoveredPoint !== null && (
                    <g>
                      <rect
                        x={points[hoveredPoint].x - 40}
                        y={points[hoveredPoint].y - 36}
                        width="80"
                        height="24"
                        rx="8"
                        fill="#1E293B"
                        className="drop-shadow-lg"
                      />
                      <text
                        x={points[hoveredPoint].x}
                        y={points[hoveredPoint].y - 20}
                        fill="white"
                        fontSize="10"
                        fontWeight="800"
                        textAnchor="middle"
                      >
                        {formatCurrency(points[hoveredPoint].price, region)}
                      </text>
                      <line
                        x1={points[hoveredPoint].x}
                        y1={points[hoveredPoint].y}
                        x2={points[hoveredPoint].x}
                        y2="170"
                        stroke="#94A3B8"
                        strokeWidth="1"
                        strokeDasharray="2,2"
                      />
                    </g>
                  )}
                </svg>
              </div>
            </div>

            {/* Social Sharing Loop Section */}
            <div className="bg-green-50/70 border border-green-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 bg-green-500/15 text-green-700 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  🔥 Viral Savings Loop
                </span>
                <h3 className="text-xl font-black text-forest-900 font-display">Spread the Savings with Family!</h3>
                <p className="text-xs md:text-sm text-forest-600 font-medium max-w-xl leading-relaxed">
                  Rising grocery costs are a daily pain point for everyone. Share the live **Inflation Index** and help your family, friends, and neighbors save money instantly by comparing live local prices!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <button
                  onClick={handleCopyLink}
                  className="flex items-center justify-center gap-2 bg-white border border-forest-200 hover:border-forest-300 text-forest-800 font-bold px-6 py-4.5 rounded-2xl shadow-sm hover:shadow transition-all cursor-pointer text-sm"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-green-600 animate-pulse" /> : <Copy className="w-4 h-4" />}
                  {copiedLink ? 'Link Copied!' : 'Copy Share Link'}
                </button>

                <a
                  href={getWhatsAppShareUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-black px-7 py-4.5 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer text-sm hover:scale-[1.02] transform"
                >
                  <Share2 className="w-4 h-4 fill-white text-white" />
                  Share on WhatsApp
                </a>
              </div>
            </div>
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
