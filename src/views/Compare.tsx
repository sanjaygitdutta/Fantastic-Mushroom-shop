'use client';
import React, { useEffect, useState } from 'react';
import { useRegion, formatCurrency } from '../utils/region';
import { useSearchParams, useRouter } from 'next/navigation';

import { motion } from 'framer-motion';
import { RefreshCw, Zap, ShieldCheck, TrendingDown, Clock, X, Flame } from 'lucide-react';
import PriceSearchBar from '../components/PriceSearchBar';
import CompareResultsGrid from '../components/CompareResultsGrid';
import FoodCategoryBrowser from '../components/FoodCategoryBrowser';
import TrendingSearches from '../components/TrendingSearches';
import { searchPrices } from '../data/mockPrices';
import type { CompareResult } from '../data/mockPrices';
import SEO from '../components/SEO';
import { useRecentlyCompared } from '../hooks/useRecentlyCompared';
import { getDailyDeal } from '../data/compareFeatures';
import { useStreak } from '../components/SavingsStreak';
import { useTranslation } from 'react-i18next';
import { getTranslatedItem } from '../i18n/dictionary';
import { searchRecipes } from '../data/worldRecipes';
import RecipeCard from '../components/RecipeCard';

// Platform logos strip — Indian platforms
const PLATFORMS_IN = [
  { name: 'Blinkit', logo: '⚡', color: '#f0c029', bg: '#fffbea' },
  { name: 'Zepto', logo: '🟣', color: '#8b5cf6', bg: '#f5f3ff' },
  { name: 'Swiggy', logo: '🟠', color: '#f97316', bg: '#fff7ed' },
  { name: 'BigBasket', logo: '🟢', color: '#16a34a', bg: '#f0fdf4' },
  { name: 'Amazon', logo: '📦', color: '#f59e0b', bg: '#fffbeb' },
  { name: 'JioMart', logo: '🔵', color: '#2563eb', bg: '#eff6ff' },
  { name: 'Flipkart Minutes', logo: '🛍️', color: '#1d4ed8', bg: '#dbeafe' },
];

// Platform logos strip — Singapore platforms
const PLATFORMS_SG = [
  { name: 'FairPrice', logo: '🟡', color: '#f59e0b', bg: '#fffbeb' },
  { name: 'RedMart', logo: '🔴', color: '#ef4444', bg: '#fef2f2' },
  { name: 'Cold Storage', logo: '🔵', color: '#3b82f6', bg: '#eff6ff' },
  { name: 'Sheng Siong', logo: '🟢', color: '#16a34a', bg: '#f0fdf4' },
  { name: 'Giant', logo: '🟣', color: '#7c3aed', bg: '#f5f3ff' },
  { name: 'GrabMart', logo: '🟢', color: '#00b14f', bg: '#ecfdf5' },
  { name: 'Amazon SG', logo: '📦', color: '#f59e0b', bg: '#fffbeb' },
];

// Loading skeleton
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl p-5 border border-forest-100">
    <div className="flex items-center gap-3 mb-4">
      <div className="skeleton w-10 h-10" />
      <div className="space-y-1.5">
        <div className="skeleton w-24 h-4" />
        <div className="skeleton w-16 h-3" />
      </div>
    </div>
    <div className="skeleton w-32 h-3 mb-3" />
    <div className="skeleton w-20 h-7 mb-2" />
    <div className="skeleton w-full h-10 mt-4" />
  </div>
);

const ComparePage = () => {
  const { region } = useRegion();
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const pincode = searchParams.get('pincode') || '';

  const [result, setResult] = useState<CompareResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [lastQuery, setLastQuery] = useState('');
  const [lastRegion, setLastRegion] = useState<typeof region>('IN');
  const { recents, addRecent, clearRecents } = useRecentlyCompared();
  const { incrementStreak } = useStreak();
  const router = useRouter();
  const dailyDeal = getDailyDeal();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.substring(0, 2) || 'en';

  useEffect(() => {
    if (!query || (query === lastQuery && region === lastRegion)) return;
    setLastQuery(query);
    setLastRegion(region);
    setLoading(true);
    setError('');
    setResult(null);

    let isActive = true;

    searchPrices(query, region)
      .then((data) => {
        if (!isActive) return;
        setResult(data);
        setLoading(false);
        if (data) {
          addRecent(query, data.canonicalName, data.icon);
          incrementStreak();

          // Log savings
          const prices = data.prices.filter(p => p.price > 0 && p.inStock);
          if (prices.length > 1) {
            const maxP = Math.max(...prices.map(p => p.price));
            const minP = Math.min(...prices.map(p => p.price));
            const savings = maxP - minP;
            const bestPlatform = prices.find(p => p.price === minP)?.platformId || 'Multiple';

            if (savings > 0) {
              try {
                const raw = localStorage.getItem('ff_savings_log');
                const log = raw ? JSON.parse(raw) : [];
                log.unshift({
                  query,
                  savings,
                  date: new Date().toLocaleDateString('en-GB'),
                  platform: bestPlatform
                });
                localStorage.setItem('ff_savings_log', JSON.stringify(log.slice(0, 100)));
              } catch { }
            }
          }
        }
      })
      .catch(() => {
        if (!isActive) return;
        setError(t('something_went_wrong') + '. ' + t('try_again') + '.');
        setLoading(false);
      });
      
      return () => {
        isActive = false;
      };
  }, [query, pincode, region, t]);

  let lowestPrice = 0;
  let bestPlatform = region === 'SG' ? 'FairPrice' : 'Blinkit';
  let secondBestPlatform = region === 'SG' ? 'RedMart' : 'Zepto';
  
  if (result && result.prices) {
    const inStock = result.prices.filter(p => p.price > 0 && p.inStock).sort((a, b) => a.price - b.price);
    if (inStock.length > 0) {
      lowestPrice = inStock[0].price;
      bestPlatform = inStock[0].platformId || 'Blinkit';
      if (inStock.length > 1) {
        secondBestPlatform = inStock[1].platformId || 'Zepto';
      }
    }
  }

  // Translate product name for SEO
  const translatedItem = query ? getTranslatedItem(query, currentLang as any) : '';
  const queryCap = query ? translatedItem.charAt(0).toUpperCase() + translatedItem.slice(1) : '';

  // Region-aware SEO helpers
  const currency = region === 'SG' ? 'SGD' : 'INR';
  const seoCurrencySymbol = region === 'SG' ? 'S$' : '₹';
  const seoPlatforms = region === 'SG'
    ? 'FairPrice, RedMart, Cold Storage, Sheng Siong & GrabMart'
    : 'Blinkit, Zepto, Swiggy Instamart, BigBasket & JioMart';
  const seoAppCount = region === 'SG' ? '8' : '7';

  let seoTitle = '';
  let seoDescription = '';

  if (query) {
    if (currentLang === 'zh-CN') {
      seoTitle = lowestPrice > 0
        ? `🧅 比较 ${queryCap} 价格: 最低仅需 ${seoCurrencySymbol}${lowestPrice} 在 ${bestPlatform} vs ${secondBestPlatform} (今日实时)`
        : `🧅 比较 ${queryCap} 价格: 检查新加坡各大线上超市实时价格`;
      seoDescription = lowestPrice > 0
        ? `🔥 新加坡 ${queryCap} 仅需 ${seoCurrencySymbol}${lowestPrice} 在 ${bestPlatform}! 比较 FairPrice、RedMart 及更多平台实时价格省钱。`
        : `在新加坡各大超市如 FairPrice、RedMart 间比较 ${queryCap} 价格。快速获取最低价格优惠。`;
    } else if (currentLang === 'ms') {
      seoTitle = lowestPrice > 0
        ? `🧅 Bandingkan Harga ${queryCap}: Terendah ${seoCurrencySymbol}${lowestPrice} di ${bestPlatform} vs ${secondBestPlatform} (Hari Ini)`
        : `🧅 Bandingkan Harga ${queryCap}: Semak Kos Langsung di Semua Platform SG`;
      seoDescription = lowestPrice > 0
        ? `🔥 Temui ${queryCap} pada harga ${seoCurrencySymbol}${lowestPrice} di ${bestPlatform}! Bandingkan harga langsung untuk jimat wang.`
        : `Bandingkan harga untuk ${queryCap} merentasi FairPrice, RedMart, Cold Storage & Giant. Cari tawaran termurah segera.`;
    } else {
      seoTitle = lowestPrice > 0
        ? `🧅 Compare ${queryCap} Prices: ${seoCurrencySymbol}${lowestPrice} on ${bestPlatform} vs ${secondBestPlatform} (Live Today)`
        : `🧅 Compare ${queryCap} Prices: Check Live Cost Across ${seoAppCount} Apps Today`;
      seoDescription = lowestPrice > 0
        ? `🔥 Found ${queryCap} for just ${seoCurrencySymbol}${lowestPrice} on ${bestPlatform}! Compare live prices across ${seoPlatforms} to save money.`
        : `Compare prices for ${queryCap} across ${seoPlatforms}. Find the cheapest deal instantly.`;
    }
  } else {
    seoTitle = t(region === 'SG' ? 'compare_seo_title_sg' : 'compare_seo_title');
    seoDescription = t(region === 'SG' ? 'compare_seo_desc_sg' : 'compare_seo_desc');
  }

  const compareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Fantastic Food Price Comparison',
    applicationCategory: 'ShoppingApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: currency,
    },
    description: seoDescription,
  };

  const searchActionSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://www.fantasticfood.in/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.fantasticfood.in/compare?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  let productSchema = null;
  if (query && result && result.prices) {
    const inStockPrices = result.prices.filter(p => p.inStock && p.price > 0);
    if (inStockPrices.length > 0) {
      const minP = Math.min(...inStockPrices.map(p => p.price));
      const maxP = Math.max(...inStockPrices.map(p => p.price));
      const bestPlatform = inStockPrices.find(p => p.price === minP)?.platformId || 'Multiple';
      productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: queryCap,
        description: `Compare prices for ${queryCap} across ${seoAppCount} quick-commerce apps. Lowest price found: ${seoCurrencySymbol}${minP} on ${bestPlatform}.`,
        image: 'https://www.fantasticfood.in/og-image.jpg',
        offers: {
          '@type': 'AggregateOffer',
          offerCount: inStockPrices.length,
          lowPrice: minP,
          highPrice: maxP,
          priceCurrency: currency
        }
      };
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">

      <SEO
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={`https://www.fantasticfood.in/compare${query ? `?q=${query}` : ''}`}
        structuredData={compareSchema}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(searchActionSchema) }} />
      {productSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      )}

      {/* ── Premium Hero ── */}
      <div className="bg-linear-to-br from-forest-900 via-forest-800 to-forest-900 text-white pt-8 pb-10 px-4 mb-0 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-forest-400/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Stats strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 mb-6 text-xs text-forest-300">
            <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-amber-400" /> {t('7_platforms')}</span>
            <span className="flex items-center gap-1"><TrendingDown className="w-3 h-3 text-moss-400" /> {t('items_tracked')}</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-blue-400" /> {t('prices_updated_live')}</span>
          </div>

          {/* Headline */}
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-black leading-tight mb-1">
              {t('compare_prices_across')}
              <span className="text-amber-400"> {t('7_platforms')}</span>
            </h1>
            <p className="text-forest-400 text-sm">{t('find_cheapest_deal')}</p>
          </div>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto">
            <PriceSearchBar variant="page" initialQuery={query} />
          </div>

          {/* Platform logo pills — region aware */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {(region === 'SG' ? PLATFORMS_SG : PLATFORMS_IN).map((pl) => (
              <div
                key={pl.name}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ backgroundColor: pl.bg + '22', color: pl.color, border: `1px solid ${pl.color}33` }}
              >
                <span>{pl.logo}</span>
                <span className="text-white/80">{pl.name}</span>
              </div>
            ))}
          </div>

          {pincode && (
            <p className="text-center text-forest-400 text-xs mt-3">📍 {t('showing_prices_pincode')} <strong className="text-white">{pincode}</strong></p>
          )}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto px-4 pt-8">

        {/* Loading state */}
        {loading && (
          <div>
            <div className="skeleton h-24 rounded-2xl mb-6" />
            <div className="flex gap-2 mb-5">
              {[1, 2, 3].map((i) => <div key={i} className="skeleton w-28 h-8 rounded-full" />)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => <SkeletonCard key={i} />)}
            </div>
            <p className="text-center text-forest-500 mt-6 text-sm animate-pulse">
              🔍 {t('fetching_prices')}
            </p>
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <div className="text-5xl mb-4">😕</div>
            <h2 className="text-xl font-bold text-forest-900 mb-2">{t('something_went_wrong')}</h2>
            <p className="text-forest-600 mb-6">{error}</p>
            <button
              onClick={() => setLastQuery('')}
              className="btn-forest flex items-center gap-2 mx-auto"
            >
              <RefreshCw className="w-4 h-4" /> {t('try_again')}
            </button>
          </motion.div>
        )}

        {/* Empty — No query */}
        {!query && !loading && (
          <div>
            {/* Recently Compared */}
            {recents.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-forest-500" />
                    <span className="text-sm font-bold text-forest-700 uppercase tracking-wide">{t('recently_compared')}</span>
                  </div>
                  <button onClick={clearRecents} className="text-xs text-gray-400 hover:text-red-400 transition-colors flex items-center gap-1">
                    <X className="w-3 h-3" /> {t('clear')}
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recents.map((item) => (
                    <button
                      key={item.query}
                      onClick={() => router.push(`/compare?q=${item.query}`)}
                      className="flex items-center gap-2 px-3.5 py-2 bg-white border border-forest-100 hover:border-forest-400 hover:bg-forest-50 rounded-full text-sm font-medium text-forest-800 shadow-sm hover:shadow-md transition-all"
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 🔥 Daily Deal Banner */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-6 bg-linear-to-r from-red-500 via-orange-500 to-amber-500 rounded-2xl p-4 flex items-center justify-between gap-4 cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => router.push(`/compare?q=${dailyDeal.query}`)}
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-xl p-2 text-2xl">{dailyDeal.icon}</div>
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-0.5">
                    <Flame className="w-3.5 h-3.5" />
                    <span className="text-xs font-bold uppercase tracking-wide opacity-90">{t('todays_best_deal')}</span>
                  </div>
                  <p className="font-black text-base">{dailyDeal.label} — {dailyDeal.discount}% {t('off_on')} {dailyDeal.platform}</p>
                  <p className="text-xs opacity-80">
                    <span className="line-through">{formatCurrency(dailyDeal.originalPrice, region)}</span>
                    <span className="ml-1.5 font-bold text-sm">{formatCurrency(dailyDeal.currentPrice, region)}</span>
                    <span className="ml-1.5">· {t('tap_to_compare')}</span>
                  </p>
                </div>
              </div>
              <div className="bg-white text-orange-600 font-black text-sm px-4 py-2 rounded-xl whitespace-nowrap hover:bg-orange-50 transition-colors">
                {t('compare_arrow')}
              </div>
            </motion.div>

            <TrendingSearches />
            <div className="mt-10">
              <h2 className="text-lg font-bold text-forest-900 mb-5 font-display">{t('browse_by_category')}</h2>
              <FoodCategoryBrowser compact />
            </div>
          </div>
        )}

        {/* Results */}
        {result && !loading && (
          <>
            <CompareResultsGrid result={result} />
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 text-center mb-10">
              <p className="text-amber-800 text-sm">
                <span className="font-bold">⚠️ </span> {t('prices_vary_disclaimer')}
              </p>
            </div>

            {/* Suggested Recipes */}
            {(() => {
              const suggestedRecipes = searchRecipes(query).slice(0, 3);
              if (suggestedRecipes.length > 0) {
                return (
                  <div className="mt-14 mb-8">
                    <h3 className="text-xl font-bold text-forest-900 mb-6 font-display flex items-center gap-2">
                      <Flame className="w-5 h-5 text-amber-500" /> {t('compare_cooking_with', { item: query.charAt(0).toUpperCase() + query.slice(1), defaultValue: `Cooking with ${query.charAt(0).toUpperCase() + query.slice(1)}? Try these recipes!` })}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {suggestedRecipes.map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            })()}
          </>
        )}

        {/* Browse categories below results */}
        {result && !loading && (
          <div className="mt-14">
            <h3 className="text-xl font-bold text-forest-900 mb-4 font-display flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-amber-500" /> {t('compare_more_items')}
            </h3>
            <TrendingSearches />
            <div className="mt-8">
              <FoodCategoryBrowser compact />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return <div className="p-10 text-red-500"><h1>CRASH: Something went wrong.</h1><pre id="error-trace">{this.state.error?.toString()}</pre></div>;
    }
    return this.props.children;
  }
}

const ComparePageWrapped = () => (
  <ErrorBoundary>
    <ComparePage />
  </ErrorBoundary>
);

export default ComparePageWrapped;
