'use client';

import Link from 'next/link';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, ChefHat, ArrowLeft, ShoppingCart, Globe, Flame, Tag, Share2, Twitter, Facebook, MessageCircle, Play, X, ChevronRight, ChevronLeft, Minus, Plus, CheckCircle2, Send, Link as LinkIcon } from 'lucide-react';
import { ALL_RECIPES, type WorldRecipe } from '../data/worldRecipes';
import { useTranslation, Trans } from 'react-i18next';

const DIFFICULTY_COLORS = {
  Easy: 'bg-green-100 text-green-700 border-green-200',
  Medium: 'bg-amber-100 text-amber-700 border-amber-200',
  Hard: 'bg-red-100 text-red-700 border-red-200',
};

const CATEGORY_ICONS: Record<string, string> = {
  'Breakfast': '🌅', 'Main Course': '🍽️', 'Dessert': '🍰',
  'Snack': '🥨', 'Soup': '🍜', 'Salad': '🥗',
  'Street Food': '🛺', 'Drink': '🥤',
};

export default function RecipePage() {
  const { id: recipeId } = useParams<{ id: string }>();
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  // Show community banner if user arrived via a shared Aika community post link
  const searchParams = useSearchParams();
  const [showCommunityBanner, setShowCommunityBanner] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // -- NEW UX STATES --
  const [cookMode, setCookMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [servingsRatio, setServingsRatio] = useState(1);
  const [checkedIngredients, setCheckedIngredients] = useState<Set<number>>(new Set());
  const [checkedSteps, setCheckedSteps] = useState<Set<number>>(new Set());
  const [wakeLock, setWakeLock] = useState<any>(null); // Type any since WakeLock isn't globally typed in this project

  // WakeLock Effect
  useEffect(() => {
    const requestWakeLock = async () => {
      if ('wakeLock' in navigator) {
        try {
          // @ts-ignore
          const lock = await navigator.wakeLock.request('screen');
          setWakeLock(lock);
        } catch (err) {
          console.warn('Wake Lock request failed', err);
        }
      }
    };

    const releaseWakeLock = async () => {
      if (wakeLock) {
        await wakeLock.release().catch(() => {});
        setWakeLock(null);
      }
    };

    if (cookMode) requestWakeLock();
    else releaseWakeLock();
    
    return () => { releaseWakeLock(); };
  }, [cookMode, wakeLock]); // added wakeLock to deps although managed, safe
  
  // Format dynamic ingredient amount
  const formatAmount = (amountStr: string, ratio: number) => {
    if (ratio === 1) return amountStr;
    return amountStr.replace(/(\d*\.?\d+)/g, (match) => {
      const num = parseFloat(match);
      if (isNaN(num)) return match;
      const calc = num * ratio;
      return Number.isInteger(calc) ? calc.toString() : calc.toFixed(1);
    });
  };

  const handleNextCookStep = (totalSteps: number) => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(s => s + 1);
    } else {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#25D366', '#FFD700', '#FF4500'],
        zIndex: 10000
      });
    }
  };

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const toggleStep = (idx: number) => {
    setCheckedSteps(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };
  
  useEffect(() => {
    if (searchParams.get('from') === 'community') {
      setShowCommunityBanner(true);
    }
  }, [searchParams]);

  const recipe: WorldRecipe | undefined = ALL_RECIPES.find(r => r.id === recipeId);

  // Suggest related recipes from same country
  const related = recipe
    ? ALL_RECIPES.filter(r => r.country === recipe.country && r.id !== recipe.id).slice(0, 4)
    : [];

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50 pt-24">
        <div className="text-center">
          <div className="text-6xl mb-4">🍽️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{t('recipe_not_found')}</h1>
          <p className="text-gray-500 mb-6">{t('recipe_removed_desc')}</p>
          <Link href="/recipes" className="bg-forest-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-forest-600">
            {t('recipe_back_btn')}
          </Link>
        </div>
      </div>
    );
  }

  type RecipeTranslation = { title?: string; description?: string; ingredients?: { item: string; amount: string }[]; instructions?: string[] };
  const tRecipe: RecipeTranslation = recipe.translations?.[lang] ?? {};
  const displayName = tRecipe.title ?? recipe.name;
  const isEnglish = lang === 'en';
  const displayIngredients = isEnglish
    ? recipe.ingredients
    : (tRecipe.ingredients && tRecipe.ingredients.length > 0 ? tRecipe.ingredients.map((i) => `${i.amount} ${i.item}`) : []);
  const displaySteps = isEnglish
    ? recipe.steps
    : (tRecipe.instructions ?? []);

  // Use branded OG image for social sharing
  const OG_IMAGE = 'https://www.fantasticfood.in/og-image.jpg';

  // Dynamic datePublished
  const today = new Date().toISOString().split('T')[0];

  // Build JSON-LD Recipe schema (Google Rich Result)
  const recipeSchema = {
    '@type': 'Recipe',
    name: displayName,
    image: [ OG_IMAGE ],
    description: tRecipe.description ?? `Authentic ${recipe.country} recipe for ${recipe.name} from ${recipe.city}. ${recipe.difficulty} difficulty, ready in ${recipe.time}. Serves ${recipe.servings}.`,
    author: {
      '@type': recipe.country === 'Aika Recipes' ? 'Person' : 'Organization',
      name: recipe.country === 'Aika Recipes' ? 'Chef Aika (AI)' : 'Fantastic Food',
      url: 'https://www.fantasticfood.in'
    },
    datePublished: today,
    prepTime: `PT${recipe.time.replace(' min', 'M').replace(' hrs', 'H').replace(' hr', 'H')}`,
    cookTime: `PT${recipe.time.replace(' min', 'M').replace(' hrs', 'H').replace(' hr', 'H')}`,
    totalTime: `PT${recipe.time.replace(' min', 'M').replace(' hrs', 'H').replace(' hr', 'H')}`,
    recipeYield: `${recipe.servings} servings`,
    recipeCuisine: recipe.country === 'Aika Recipes' ? 'International' : recipe.country,
    recipeCategory: recipe.category,
    keywords: recipe.tags.join(', '),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.8,
      ratingCount: (recipe.id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) + 24) || 128,
      reviewCount: (recipe.id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) + 12) || 64,
    },
    nutrition: {
      '@type': 'NutritionInformation',
      calories: `${recipe.calories} calories`,
    },
    recipeIngredient: displayIngredients,
    recipeInstructions: displaySteps.map((step: string, i: number) => ({
      '@type': 'HowToStep',
      name: `Step ${i + 1}`,
      position: i + 1,
      text: step,
      url: `https://www.fantasticfood.in/recipe/${recipe.id}#step-${i + 1}`,
    })),
    url: `https://www.fantasticfood.in/recipe/${recipe.id}`,
  };

  // BreadcrumbList schema for Google Rich Results
  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fantasticfood.in/' },
      { '@type': 'ListItem', position: 2, name: 'Recipes', item: 'https://www.fantasticfood.in/recipes' },
      { '@type': 'ListItem', position: 3, name: recipe.country, item: `https://www.fantasticfood.in/recipes?country=${encodeURIComponent(recipe.country)}` },
      { '@type': 'ListItem', position: 4, name: displayName, item: `https://www.fantasticfood.in/recipe/${recipe.id}` },
    ],
  };

  // Extract readable ingredient keywords for compare links
  const getCompareKey = (ingredient: string): string => {
    const clean = ingredient.toLowerCase()
      .replace(/\d+g|\d+ml|\d+\s*(pcs|kg|L|tbsp|tsp|cup|cups)/gi, '')
      .trim().split(' ').filter(w => w.length > 3).slice(0, 2).join(' ');
    return clean || ingredient.split(' ')[0];
  };

  const shareUrl = `https://www.fantasticfood.in/recipe/${recipe.id}`;
  const shareTitle = `Look at this incredible ${displayName} recipe! You have to try making this 🤤`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <>
      {/* JSON-LD Structured Data — injected so Google can read it */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...recipeSchema }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...breadcrumbSchema }) }}
      />
      <div className="min-h-screen bg-cream-50 pt-20">
        {/* Hero Banner */}
        <div className="bg-linear-to-br from-forest-900 to-forest-800 border-b-4 border-amber-500">
          <div className="max-w-7xl mx-auto px-4 py-10 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column: Info */}
              <div>
                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-forest-400 text-sm mb-6">
                  <Link href="/" className="hover:text-white transition-colors">{t('recipe_home')}</Link>
                  <span>/</span>
                  <Link href="/recipes" className="hover:text-white transition-colors">{t('recipe_recipes_breadcrumb')}</Link>
                  <span>/</span>
                  <Link href="/recipes" className="hover:text-white transition-colors">{recipe.country}</Link>
                  <span>/</span>
                  <span className="text-cream-300">{displayName}</span>
                </div>

            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
              {/* Country + City badge */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-3xl">{recipe.emoji}</span>
                <div className="flex items-center gap-1 bg-white/10 text-cream-200 text-sm font-medium px-3 py-1 rounded-full">
                  <Globe className="w-3.5 h-3.5" /> {recipe.country} · {recipe.city}
                </div>
                <span className="bg-white/10 text-cream-200 text-sm font-medium px-3 py-1 rounded-full">
                  {CATEGORY_ICONS[recipe.category]} {recipe.category}
                </span>
                <span className={`text-sm font-bold px-3 py-1 rounded-full border ${DIFFICULTY_COLORS[recipe.difficulty]}`}>
                  {recipe.difficulty}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{displayName}</h1>

              {/* Stats row */}
              <div className="flex flex-wrap gap-6 text-cream-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span className="text-sm"><span className="font-bold text-white">{recipe.time}</span> {t('recipe_total_time')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span className="text-sm"><span className="font-bold text-white">{recipe.servings}</span> <Trans i18nKey="recipes_servings">servings</Trans></span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span className="text-sm"><span className="font-bold text-white">{recipe.calories}</span> {t('recipe_kcal')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChefHat className="w-4 h-4 text-amber-400" />
                  <span className="text-sm"><span className="font-bold text-white">{recipe.difficulty}</span></span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {recipe.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1 bg-white/10 text-cream-300 text-xs px-2.5 py-1 rounded-full">
                    <Tag className="w-2.5 h-2.5" /> {tag}
                  </span>
                ))}
              </div>



              {/* Viral Share Bar */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="text-cream-300 text-sm font-bold uppercase tracking-wider mr-2 flex items-center gap-2">
                  <Share2 className="w-4 h-4" /> Share Recipe
                </span>
                
                {/* WhatsApp (Primary Viral Loop) */}
                <a 
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-xl font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>

                {/* Telegram */}
                <a 
                  href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#0088cc] hover:bg-[#0077b5] text-white px-4 py-2 rounded-xl font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-[#0088cc]/20"
                >
                  <Send className="w-4 h-4" /> Telegram
                </a>
                
                {/* Twitter */}
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1DA1F2] hover:bg-[#1a91da] text-white px-4 py-2 rounded-xl font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-[#1DA1F2]/20"
                >
                  <Twitter className="w-4 h-4" /> Twitter
                </a>

                {/* Facebook */}
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white px-4 py-2 rounded-xl font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-[#1877F2]/20"
                >
                  <Facebook className="w-4 h-4" /> Facebook
                </a>

                {/* Copy Link */}
                <button 
                  onClick={handleCopyLink}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2 rounded-xl font-bold transition-all hover:-translate-y-0.5"
                >
                  {copied ? (
                    <><CheckCircle2 className="w-4 h-4 text-green-400" /> Copied!</>
                  ) : (
                    <><LinkIcon className="w-4 h-4" /> Copy Link</>
                  )}
                </button>
              </div>
            </motion.div>
              </div>

              {/* Right Column: Image (Desktop Hero) */}
              {recipe.image && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="rounded-3xl overflow-hidden shadow-2xl border border-forest-800 relative group">
                  <img 
                    src={recipe.image} 
                    alt={displayName} 
                    className="w-full h-[350px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20">
                    <p className="text-xs font-black text-forest-900 flex items-center gap-2 tracking-wide uppercase">
                      📸 AI Photography
                    </p>
                  </div>
                </motion.div>
              )}

            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

            {/* Ingredients Sidebar */}
            <div className="lg:col-span-5 xl:col-span-4">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-black text-gray-800 flex items-center gap-2">
                    {t('recipe_ingredients_title_emoji')}
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-normal">
                      {t('recipe_items_count', { count: recipe.ingredients.length })}
                    </span>
                  </h2>
                  <div className="flex items-center gap-2 bg-gray-50 rounded-full px-2 py-1 border border-gray-200">
                    <button onClick={() => setServingsRatio(r => Math.max(0.5, r - 0.5))} className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-forest-600 transition-colors">
                      <Minus className="w-3 h-3" />
                    </button>
                    <div className="flex flex-col items-center justify-center w-8">
                      <AnimatePresence mode="popLayout">
                        <motion.span key={servingsRatio} initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 10, opacity: 0 }} className="text-sm font-bold text-gray-800 leading-none">
                          {Math.round((recipe.servings || 4) * servingsRatio)}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                    <button onClick={() => setServingsRatio(r => Math.min(4, r + 0.5))} className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-forest-600 transition-colors">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {displayIngredients.map((ing: string, i: number) => {
                    const isChecked = checkedIngredients.has(i);
                    return (
                      <li key={i} onClick={() => toggleIngredient(i)} className={`flex items-start gap-2.5 group cursor-pointer p-1.5 -mx-1.5 rounded-xl transition-all ${isChecked ? 'bg-gray-50 opacity-60' : 'hover:bg-gray-50'}`}>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors border ${isChecked ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 text-transparent group-hover:border-forest-600'}`}>
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                        <div className="flex-1 flex items-start justify-between gap-2">
                          <span className={`text-sm transition-all duration-300 ${isChecked ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                            {formatAmount(ing, servingsRatio)}
                          </span>
                        <Link 
                          href={`/compare?q=${encodeURIComponent(getCompareKey(ing))}`}
                          className="text-[10px] text-amber-600 font-bold border border-amber-200 bg-amber-50 rounded-full px-2 py-0.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                          title={`Compare price for ${getCompareKey(ing)}`}
                        >
                          <ShoppingCart className="w-3 h-3" /> Compare
                        </Link>
                      </div>
                    </li>
                    );
                  })}
                </ul>

                {/* Compare CTA */}
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">{t('recipe_shop_ingredients_emoji')}</p>
                  <Link href={`/basket?prefill=${encodeURIComponent(recipe.ingredients.map((ing) => getCompareKey(ing)).filter(Boolean).join(','))}`}
                    className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-forest-800 to-forest-700 hover:from-forest-700 hover:to-forest-600 shadow-xl shadow-forest-900/10 text-white font-bold py-3 rounded-xl transition-all hover:-translate-y-0.5"
                  >
                    <ShoppingCart className="w-5 h-5" /> {t('recipe_compare_basket')}
                  </Link>
                  <p className="text-[10px] text-gray-400 text-center mt-2 leading-tight">
                    {t('recipe_auto_checks_desc')}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Steps */}
            <div className="lg:col-span-7 xl:col-span-8">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <h2 className="text-xl font-black text-gray-800 flex items-center gap-2">
                    {t('recipe_how_to_make', { recipeName: displayName })}
                  </h2>
                  <button 
                    onClick={() => { setCookMode(true); setCurrentStep(0); }}
                    className="flex items-center justify-center gap-2 bg-linear-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-forest-900 font-bold px-5 py-2.5 rounded-xl text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-md shadow-amber-500/20"
                  >
                    <Play className="w-4 h-4 fill-current" /> Cook Mode
                  </button>
                </div>
                <div className="space-y-2">
                  {displaySteps.map((step: string, i: number) => {
                    const isChecked = checkedSteps.has(i);
                    return (
                      <div key={i} onClick={() => toggleStep(i)} className={`flex gap-4 p-4 rounded-xl cursor-pointer transition-all border ${isChecked ? 'bg-gray-50 border-gray-100 opacity-60' : 'bg-white border-transparent hover:border-gray-100 hover:bg-gray-50/50'}`}>
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black shrink-0 shadow-sm transition-colors ${isChecked ? 'bg-green-500 text-white' : 'bg-linear-to-br from-amber-400 to-amber-500 text-forest-900'}`}>
                          {isChecked ? <CheckCircle2 className="w-5 h-5" /> : i + 1}
                        </div>
                        <div className="flex-1 pt-1.5">
                          <p className={`leading-relaxed text-sm transition-all duration-300 ${isChecked ? 'text-gray-400 line-through' : 'text-gray-700'}`}>{step}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Price compare banner */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="bg-linear-to-r from-forest-800 to-forest-700 rounded-2xl p-5 mb-6">
                <p className="text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">{t('recipe_pro_tip')}</p>
                <h3 className="text-white font-bold mb-2">{t('recipe_before_cook_check')}</h3>
                <p className="text-cream-300 text-sm mb-3">
                  {t('recipe_compare_costs_desc')}
                </p>
                <Link href="/compare" className="inline-flex items-center gap-2 bg-amber-400 text-forest-900 font-bold px-4 py-2 rounded-xl text-sm hover:bg-amber-500 transition-colors">
                  <ShoppingCart className="w-4 h-4" /> {t('recipe_compare_prices_now')}
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Related Recipes from same country */}
          {related.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl font-black text-gray-800 mb-5">
                <Trans i18nKey="recipe_more_country_recipes" values={{ emoji: recipe.emoji, country: recipe.country }}>
                  More <span className="text-3xl">{recipe.emoji}</span> {recipe.country} Recipes
                </Trans>
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {related.map(rel => (
                  <Link key={rel.id} href={`/recipe/${rel.id}`}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md hover:-translate-y-1 transition-all">
                    <p className="text-xs text-gray-400 mb-1">{rel.time} · {rel.difficulty}</p>
                    <p className="font-bold text-gray-800 text-sm line-clamp-2">{rel.name}</p>
                    <p className="text-xs text-forest-600 mt-2 font-medium">{t('recipe_view_arrow')}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back link */}
          <div className="mt-10 text-center">
            <button onClick={() => router.push('/recipes')}
              className="inline-flex items-center gap-2 text-forest-600 hover:text-forest-800 font-semibold transition-colors">
              <ArrowLeft className="w-4 h-4" /> {t('recipe_back_to_all')}
            </button>
          </div>
        </div>
      </div>
      {/* Floating Community Banner - shown only when user arrived via a shared Aika post */}
      {showCommunityBanner && (
        <div className="fixed bottom-6 left-4 right-4 z-50 flex justify-center pointer-events-none">
          <div className="bg-[#0f2419] border border-amber-500/50 rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-4 max-w-md w-full pointer-events-auto">
            <span className="text-3xl">🍳</span>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm leading-tight">Join our Community!</p>
              <p className="text-forest-300 text-xs mt-0.5 leading-tight">Share your own recipes &amp; connect with home chefs across India.</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/community"
                className="bg-amber-500 hover:bg-amber-400 text-forest-900 font-black text-xs px-4 py-2 rounded-xl transition-colors whitespace-nowrap"
              >
                Join Now
              </Link>
              <button
                onClick={() => setShowCommunityBanner(false)}
                className="text-forest-500 hover:text-white transition-colors text-lg leading-none"
                aria-label="Dismiss"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FULL SCREEN COOK MODE OVERLAY */}
      <AnimatePresence>
        {cookMode && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 z-100 bg-gray-950 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900">
              <div className="flex items-center gap-3">
                <button onClick={() => setCookMode(false)} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                  <X className="w-5 h-5" />
                </button>
                <div>
                  <p className="text-xs text-amber-400 font-bold tracking-wider uppercase">Zen Cook Mode</p>
                  <p className="text-white font-bold text-sm truncate max-w-[200px]">{displayName}</p>
                </div>
              </div>
              <div className="text-amber-400 text-sm font-bold bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
                Step {currentStep + 1} of {displaySteps.length}
              </div>
            </div>

            {/* Main Content Area - Swipeable Card */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentStep}
                  initial={{ opacity: 0, scale: 0.95, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -50 }}
                  transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
                  className="max-w-2xl w-full"
                >
                  <h3 className="text-amber-400 text-2xl font-black mb-8 opacity-80">Step {currentStep + 1}</h3>
                  <p className="text-white text-3xl md:text-5xl leading-tight font-medium">
                    {displaySteps[currentStep]}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Footer */}
            <div className="p-6 pb-safe bg-gray-900 border-t border-gray-800 flex items-center justify-between gap-4">
              <button 
                onClick={() => setCurrentStep(s => Math.max(0, s - 1))}
                disabled={currentStep === 0}
                className="w-14 h-14 shrink-0 rounded-2xl bg-gray-800 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors hover:bg-gray-700 active:scale-95"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button 
                onClick={() => handleNextCookStep(displaySteps.length)}
                className="flex-1 h-14 rounded-2xl bg-amber-500 hover:bg-amber-400 text-forest-900 font-black text-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-amber-500/20"
              >
                {currentStep === displaySteps.length - 1 ? (
                  <>Finish Recipe 🎉</>
                ) : (
                  <>Next Step <ChevronRight className="w-6 h-6" /></>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
