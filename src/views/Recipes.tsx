'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, TrendingDown, Globe, X } from 'lucide-react';
import Link from 'next/link';

import SEO from '../components/SEO';
import { ALL_RECIPES, ALL_COUNTRIES, type WorldRecipe } from '../data/worldRecipes';
import { useTranslation, Trans } from 'react-i18next';

import RecipeCard, { CATEGORY_ICONS } from '../components/RecipeCard';

const COUNTRY_EMOJIS: Record<string, string> = {
  India: '🇮🇳', Italy: '🇮🇹', Japan: '🇯🇵', China: '🇨🇳', Mexico: '🇲🇽',
  France: '🇫🇷', USA: '🇺🇸', Thailand: '🇹🇭', Turkey: '🇹🇷', Spain: '🇪🇸',
  Greece: '🇬🇷', Lebanon: '🇱🇧', Morocco: '🇲🇦', Korea: '🇰🇷', Vietnam: '🇻🇳',
  Brazil: '🇧🇷', Ethiopia: '🇪🇹', Pakistan: '🇵🇰', Indonesia: '🇮🇩',
  Germany: '🇩🇪', UK: '🇬🇧', Russia: '🇷🇺', Egypt: '🇪🇬', Argentina: '🇦🇷',
  'Sri Lanka': '🇱🇰',
  // New countries
  Singapore: '🇸🇬', Malaysia: '🇲🇾', Peru: '🇵🇪', Portugal: '🇵🇹',
  Canada: '🇨🇦', Australia: '🇦🇺', Sweden: '🇸🇪', Denmark: '🇩🇰',
  Netherlands: '🇳🇱', Belgium: '🇧🇪', Poland: '🇵🇱', Austria: '🇦🇹',
  'Czech Republic': '🇨🇿', Hungary: '🇭🇺', Ukraine: '🇺🇦', Georgia: '🇬🇪',
  Uzbekistan: '🇺🇿', Philippines: '🇵🇭', Taiwan: '🇹🇼', Nigeria: '🇳🇬',
  Kenya: '🇰🇪', Colombia: '🇨🇴', Cuba: '🇨🇺', Chile: '🇨🇱',
  'New Zealand': '🇳🇿', Israel: '🇮🇱', Iran: '🇮🇷', 'South Africa': '🇿🇦',
  Cambodia: '🇰🇭', Nepal: '🇳🇵', Bangladesh: '🇧🇩', Laos: '🇱🇦', Myanmar: '🇲🇲',
  'Aika Recipes': '👩‍🍳',
};

export default function Recipes() {
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const categories = ['All', ...Array.from(new Set(ALL_RECIPES.map(r => r.category))).sort()];
  const allCountries = ['All', ...ALL_COUNTRIES];

  const filtered = useMemo(() => {
    const results = ALL_RECIPES.filter(r => {
      const q = search.toLowerCase();
      // Search English name or localized title
      type RecipeTranslation = { title?: string };
      const tTrans: RecipeTranslation = r.translations?.[lang] ?? {};
      const displayName = tTrans.title ?? r.name;
      const matchSearch = !search || displayName.toLowerCase().includes(q) || r.name.toLowerCase().includes(q) || r.country.toLowerCase().includes(q) || r.city.toLowerCase().includes(q) || r.tags.some(tag => tag.includes(q));
      const matchCountry = selectedCountry === 'All' || r.country === selectedCountry;
      const matchCategory = selectedCategory === 'All' || r.category === selectedCategory;
      const matchDiff = selectedDifficulty === 'All' || r.difficulty === selectedDifficulty;
      return matchSearch && matchCountry && matchCategory && matchDiff;
    });

    return results.sort((a, b) => {
      const isDateA = /^\\d{4}-\\d{2}-\\d{2}$/.test(a.id);
      const isDateB = /^\\d{4}-\\d{2}-\\d{2}$/.test(b.id);
      
      if (isDateA && isDateB) {
        return new Date(b.id).getTime() - new Date(a.id).getTime();
      } else if (isDateA) {
        return -1;
      } else if (isDateB) {
        return 1;
      }
      return 0;
    });
  }, [search, selectedCountry, selectedCategory, selectedDifficulty, lang]);

  const groupedByCountry = useMemo(() => {
    if (selectedCountry !== 'All') return { [selectedCountry]: filtered };
    const groups: Record<string, WorldRecipe[]> = {};
    filtered.forEach(r => {
      if (!groups[r.country]) groups[r.country] = [];
      groups[r.country].push(r);
    });
    return groups;
  }, [filtered, selectedCountry]);

  return (
    <>
      <SEO
        title={t('recipes_seo_title', { recipeCount: ALL_RECIPES.length, countryCount: ALL_COUNTRIES.length })}
        description={t('recipes_seo_desc', { recipeCount: ALL_RECIPES.length, countryCount: ALL_COUNTRIES.length })}
        canonicalUrl="https://www.fantasticfood.in/recipes"
        keywords="world recipes, international cuisine, Indian recipes, Italian recipes, Japanese recipes, Chinese recipes, Mexican recipes, how to cook, recipe ingredients comparison"
      />

      <div className="min-h-screen bg-gradient-to-b from-forest-900 to-gray-50 pt-24 pb-16">

        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 text-center mb-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-wrap justify-center gap-1.5 mb-4 text-2xl">
              {Object.values(COUNTRY_EMOJIS).map(flag => (
                <span key={flag} className="hover:scale-125 transition-transform cursor-default">{flag}</span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-3 leading-tight">
              {t('recipes_world_kitchen')}<br /><span className="text-amber-400">{t('recipes_authentic_count', { recipeCount: ALL_RECIPES.length })}</span>
            </h1>
            <p className="text-cream-300 text-lg max-w-2xl mx-auto mb-6">
              <Trans i18nKey="recipes_explore_desc" values={{ countryCount: ALL_COUNTRIES.length }}>
                From Delhi to Tokyo, Rome to Mexico City — explore authentic recipes from <strong className="text-amber-400">{ALL_COUNTRIES.length} countries</strong> with full ingredients &amp; step-by-step instructions.
              </Trans>
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { val: `${ALL_RECIPES.length}+`, label: t('recipes_label') },
                { val: `${ALL_COUNTRIES.length}`, label: t('recipes_countries_label') },
                { val: '8', label: t('recipes_categories_label') },
              ].map(s => (
                <div key={s.label} className="bg-white/10 border border-white/20 rounded-2xl px-6 py-3 text-center">
                  <div className="text-2xl font-black text-amber-400">{s.val}</div>
                  <div className="text-cream-300 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={t('recipes_search_placeholder')}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 outline-none focus:border-forest-400"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              )}
            </div>

            {/* Country filter */}
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1">
                <Globe className="w-3 h-3" /> {t('recipes_country_filter')}
              </p>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {allCountries.map(c => (
                  <button key={c} onClick={() => setSelectedCountry(c)}
                    className={`flex-shrink-0 text-sm font-semibold px-3 py-1.5 rounded-full border transition-all ${selectedCountry === c ? 'bg-forest-700 text-white border-forest-700' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-forest-300'}`}
                  >
                    {COUNTRY_EMOJIS[c] || ''} {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Category + Difficulty */}
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">{t('recipes_category_filter')}</p>
                <div className="flex flex-wrap gap-1.5">
                  {categories.map(c => (
                    <button key={c} onClick={() => setSelectedCategory(c)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${selectedCategory === c ? 'bg-amber-400 text-forest-900 border-amber-400' : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-amber-300'}`}
                    >
                      {CATEGORY_ICONS[c] || ''} {c}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">{t('recipes_difficulty_filter')}</p>
                <div className="flex gap-1.5">
                  {['All', 'Easy', 'Medium', 'Hard'].map(d => (
                    <button key={d} onClick={() => setSelectedDifficulty(d)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${selectedDifficulty === d ? 'bg-forest-600 text-white border-forest-600' : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-forest-300'}`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="flex items-center justify-between pt-1 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                <Trans i18nKey="recipes_showing" values={{ recipeCount: filtered.length, countryCount: Object.keys(groupedByCountry).length }}>
                  Showing <span className="font-bold text-forest-700">{filtered.length}</span> recipes from{' '}
                  <span className="font-bold text-forest-700">{Object.keys(groupedByCountry).length}</span> countries
                </Trans>
              </p>
              {(selectedCountry !== 'All' || selectedCategory !== 'All' || selectedDifficulty !== 'All' || search) && (
                <button
                  onClick={() => { setSearch(''); setSelectedCountry('All'); setSelectedCategory('All'); setSelectedDifficulty('All'); }}
                  className="text-xs text-forest-600 hover:underline font-medium"
                >
                  {t('recipes_clear_filters')}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Recipes by Country */}
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          {Object.entries(groupedByCountry).sort(([a], [b]) => a.localeCompare(b)).map(([country, recipes]) => (
            <div key={country} className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-3xl shadow-sm border border-gray-100 max-w-fit">
                <span className="text-4xl">{COUNTRY_EMOJIS[country] || '🌍'}</span>
                <div>
                  <h2 className="text-2xl font-black text-gray-800">{country}</h2>
                  <p className="text-forest-600 font-bold text-sm">{t('recipes_recipe_count', { count: recipes.length })}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <AnimatePresence>
                  {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-gray-500 text-lg font-semibold">{t('recipes_no_found')}</p>
              <p className="text-gray-400 text-sm mt-1">{t('recipes_try_different')}</p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="bg-forest-900 mt-16 py-12 px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-2 flex items-center gap-2 justify-center">
            <TrendingDown className="w-6 h-6 text-amber-400" /> {t('recipes_compare_before_cook')}
          </h2>
          <p className="text-cream-300 mb-6 text-sm">{t('recipes_find_cheapest')}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['chicken', 'tomato', 'rice', 'paneer', 'eggs', 'butter', 'onion', 'garlic'].map(item => (
              <Link key={item} href={`/compare?q=${item}`}
                className="text-sm bg-forest-700 hover:bg-forest-600 border border-forest-600 text-cream-200 px-4 py-2 rounded-full transition-all capitalize">
                🔍 {item} {t('recipes_price_suffix')}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
