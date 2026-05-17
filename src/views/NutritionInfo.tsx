'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Search, Loader2, AlertTriangle, CheckCircle, ArrowRight, Info, Zap } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { useRegion } from '../utils/region';

interface NutritionData {
  name: string;
  servingSize: string;
  healthScore: string;
  healthScoreReason: string;
  calories: number;
  macros: { protein: number; carbs: number; fat: number; fiber: number; sugar: number };
  micronutrients: { name: string; amount: string; dailyValue: string }[];
  allergens: string[];
  warnings: string[];
  benefits: string[];
  dietarySuitability: { vegetarian: boolean; vegan: boolean; glutenFree: boolean; diabeticFriendly: boolean; heartHealthy: boolean };
  healthierAlternative?: { name: string; reason: string; searchQuery: string };
}

// ── Popular foods by region ─────────────────────────────────────────────────
const IN_POPULAR = ['Paneer', 'Amul Butter', 'Whole Milk', 'Chicken Breast', 'Brown Bread', 'Almonds', 'Maggi Noodles', 'Greek Yogurt'];
const SG_POPULAR = ['Tofu', 'Fish Ball', 'Milo', 'Bok Choy', 'Oyster Sauce', 'Prawn', 'Laksa Paste', 'Durian'];

export default function NutritionInfo() {
  const { t } = useTranslation();
  const { region } = useRegion();
  const isSG = region === 'SG';

  const POPULAR = isSG ? SG_POPULAR : IN_POPULAR;

  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<NutritionData | null>(null);

  const search = async (food: string) => {
    if (!food.trim()) return;
    setLoading(true); setError(''); setData(null);
    try {
      const res = await fetch('/api/nutrition-info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ food })
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error);
      setData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const SCORE_CONFIG: Record<string, { color: string; label: string; bg: string }> = {
    A: { color: 'text-green-600', label: t('nutri_score_excellent'), bg: 'bg-green-500' },
    B: { color: 'text-lime-600', label: t('nutri_score_good'), bg: 'bg-lime-500' },
    C: { color: 'text-yellow-600', label: t('nutri_score_ok'), bg: 'bg-yellow-500' },
    D: { color: 'text-orange-600', label: t('nutri_score_poor'), bg: 'bg-orange-500' },
    F: { color: 'text-red-600', label: t('nutri_score_bad'), bg: 'bg-red-500' },
  };

  const scoreConf = data ? SCORE_CONFIG[data.healthScore] || SCORE_CONFIG['C'] : null;

  return (
    <div className="min-h-screen bg-cream-50 pt-24 pb-16">
      <SEO
        title={t(isSG ? 'nutrition_seo_title_sg' : 'nutrition_seo_title', { defaultValue: isSG ? "Pantry Nutrition Facts & Grocery Calories Guide SG | Fantastic Food" : "Food Nutrition Info & Health Score — Fantastic Food" })}
        description={t(isSG ? 'nutrition_seo_desc_sg' : 'nutrition_seo_desc', { defaultValue: isSG ? "Explore complete nutrition details, macro ratios, and compare online delivery prices for thousands of Singapore groceries." : "Check nutrition facts, allergens, health score and find healthier alternatives for any food or grocery item. Powered by AI." })}
        canonicalUrl={isSG ? "https://www.fantasticfood.in/health?region=SG" : "https://www.fantasticfood.in/health"}
      />
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            <Heart className="w-4 h-4" /> {t('nutri_health_mode')}
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display text-forest-900 mb-4">{t('nutri_scanner_title')}</h1>
          <p className="text-forest-600 max-w-xl mx-auto">
            {t(isSG ? 'nutri_scanner_desc_sg' : 'nutri_scanner_desc')}
          </p>
        </div>

        {/* Search bar */}
        <div className="max-w-2xl mx-auto mb-6">
          <form onSubmit={e => { e.preventDefault(); search(query); }} className="flex gap-3">
            <div className="flex-1 flex items-center gap-3 bg-white border-2 border-forest-200 focus-within:border-moss-500 rounded-2xl px-4 py-3 transition-colors">
              <Search className="w-5 h-5 text-forest-400" />
              <input type="text" value={query} onChange={e => setQuery(e.target.value)}
                placeholder={t(isSG ? 'nutri_search_placeholder_sg' : 'nutri_search_placeholder')}
                className="flex-1 outline-none text-forest-900 text-lg placeholder-forest-400 bg-transparent" />
            </div>
            <button type="submit" disabled={loading || !query.trim()}
              className="px-6 py-3 bg-forest-800 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-forest-700 disabled:opacity-50 transition-colors">
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Zap className="w-5 h-5" />}
              {t('nutri_scan_btn')}
            </button>
          </form>
          <div className="flex flex-wrap gap-2 mt-3">
            {POPULAR.map(f => (
              <button key={f} onClick={() => { setQuery(f); search(f); }}
                className="text-xs bg-white border border-forest-200 text-forest-700 px-3 py-1.5 rounded-full hover:bg-forest-50 transition-colors font-medium">
                {t('nutri_pop_' + f.split(' ')[0].toLowerCase(), f)}
              </button>
            ))}
          </div>
        </div>

        {error && <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-sm mb-4 max-w-2xl mx-auto">{error}</div>}

        <AnimatePresence>
          {data && scoreConf && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
              {/* Header card */}
              <div className="bg-white rounded-3xl border border-forest-100 shadow-sm overflow-hidden">
                <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className={`w-20 h-20 rounded-2xl ${scoreConf.bg} flex flex-col items-center justify-center text-white shrink-0 shadow-lg`}>
                    <span className="text-3xl font-black">{data.healthScore}</span>
                    <span className="text-xs font-bold uppercase">{scoreConf.label}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-black text-forest-900">{data.name}</h2>
                    <p className="text-forest-500 text-sm mb-2">{t('nutri_per_serving', { servingSize: data.servingSize })}</p>
                    <p className={`text-sm font-medium ${scoreConf.color}`}>{data.healthScoreReason}</p>
                  </div>
                  <div className="bg-cream-100 rounded-2xl p-4 text-center shrink-0">
                    <p className="text-3xl font-black text-forest-900">{data.calories}</p>
                    <p className="text-xs text-forest-500 font-bold uppercase tracking-wider">{t('nutri_kcal')}</p>
                  </div>
                </div>

                {/* Macros bar */}
                <div className="px-6 pb-6 grid grid-cols-5 gap-3">
                  {[
                    { key: 'protein', label: t('nutri_protein'), color: 'bg-blue-500', unit: 'g' },
                    { key: 'carbs',   label: t('nutri_carbs'),   color: 'bg-amber-500', unit: 'g' },
                    { key: 'fat',     label: t('nutri_fat'),     color: 'bg-red-400',   unit: 'g' },
                    { key: 'fiber',   label: t('nutri_fiber'),   color: 'bg-green-500', unit: 'g' },
                    { key: 'sugar',   label: t('nutri_sugar'),   color: 'bg-pink-500',  unit: 'g' },
                  ].map(m => (
                    <div key={m.key} className="text-center">
                      <div className={`${m.color} rounded-xl py-2 px-1 mb-1`}>
                        <p className="text-white font-black text-base">{data.macros[m.key as keyof typeof data.macros]}{m.unit}</p>
                      </div>
                      <p className="text-xs text-forest-500 font-medium">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3-column grid */}
              <div className="grid md:grid-cols-3 gap-5">
                {/* Allergens & Warnings */}
                <div className="bg-white rounded-2xl border border-red-100 p-5 shadow-sm">
                  <h3 className="font-black text-forest-900 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500" /> {t('nutri_allergens')}
                  </h3>
                  {data.allergens.length > 0 ? (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {data.allergens.map(a => <span key={a} className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full">{a}</span>)}
                    </div>
                  ) : <p className="text-sm text-forest-500 mb-3">{t('nutri_no_allergens')}</p>}
                  {data.warnings.length > 0 && (
                    <div className="space-y-2">
                      {data.warnings.map((w, i) => (
                        <p key={i} className="text-xs text-orange-700 bg-orange-50 rounded-lg px-3 py-2 flex items-start gap-1.5">
                          <AlertTriangle className="w-3 h-3 shrink-0 mt-0.5" /> {w}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                {/* Benefits */}
                <div className="bg-white rounded-2xl border border-green-100 p-5 shadow-sm">
                  <h3 className="font-black text-forest-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" /> {t('nutri_benefits')}
                  </h3>
                  <div className="space-y-2">
                    {data.benefits.map((b, i) => (
                      <p key={i} className="text-xs text-green-800 bg-green-50 rounded-lg px-3 py-2 flex items-start gap-1.5">
                        <CheckCircle className="w-3 h-3 shrink-0 mt-0.5 text-green-500" /> {b}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Diet suitability */}
                <div className="bg-white rounded-2xl border border-blue-100 p-5 shadow-sm">
                  <h3 className="font-black text-forest-900 mb-3 flex items-center gap-2">
                    <Info className="w-4 h-4 text-blue-500" /> {t('nutri_suitable_for')}
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(data.dietarySuitability).map(([key, val]) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-sm text-forest-700">{t('nutri_suit_' + key)}</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${val ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                          {val ? t('nutri_yes') : t('nutri_no')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Healthier Alternative */}
              {data.healthierAlternative && (
                <div className="bg-linear-to-r from-moss-700 to-forest-800 text-white rounded-3xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
                  <div>
                    <p className="text-moss-300 text-sm font-bold uppercase tracking-wider mb-1">{t('nutri_healthier_alt')}</p>
                    <h3 className="text-xl font-black mb-1">{data.healthierAlternative.name}</h3>
                    <p className="text-moss-200 text-sm">{data.healthierAlternative.reason}</p>
                  </div>
                  <Link href={`/compare?q=${encodeURIComponent(data.healthierAlternative.searchQuery)}`}
                    className="bg-amber-400 hover:bg-amber-500 text-forest-900 font-bold px-5 py-3 rounded-xl flex items-center gap-2 whitespace-nowrap transition-colors">
                    {t('nutri_compare_price')} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
