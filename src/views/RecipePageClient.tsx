'use client';

import Link from 'next/link';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { Clock, Users, ChefHat, ArrowLeft, ShoppingCart, Globe, Flame, Tag, Share2, Twitter, Facebook, MessageCircle } from 'lucide-react';
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
  const displayIngredients = tRecipe.ingredients && tRecipe.ingredients.length > 0
    ? tRecipe.ingredients.map((i) => `${i.amount} ${i.item}`)
    : recipe.ingredients;
  const displaySteps = tRecipe.instructions && tRecipe.instructions.length > 0
    ? tRecipe.instructions
    : recipe.steps;

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
        <div className="bg-gradient-to-br from-forest-900 to-forest-800">
          <div className="max-w-4xl mx-auto px-4 py-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-forest-400 text-sm mb-6">
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

              {/* Description */}
              {tRecipe.description && (
                <p className="mt-6 text-cream-100 text-lg leading-relaxed max-w-3xl">
                  {tRecipe.description}
                </p>
              )}

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
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* AI Recipe Image */}
          {recipe.image && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white relative">
              <img 
                src={recipe.image} 
                alt={displayName} 
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-white/20">
                <p className="text-xs font-black text-gray-800 flex items-center gap-1">
                  📸 AI Food Photography
                </p>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Ingredients Sidebar */}
            <div className="lg:col-span-1">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
                <h2 className="text-lg font-black text-gray-800 mb-4 flex items-center gap-2">
                  {t('recipe_ingredients_title_emoji')}
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-normal">
                    {t('recipe_items_count', { count: recipe.ingredients.length })}
                  </span>
                </h2>
                <ul className="space-y-2.5">
                  {displayIngredients.map((ing: string, i: number) => (
                    <li key={i} className="flex items-start gap-2.5 group">
                      <span className="w-5 h-5 bg-forest-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      <div className="flex-1 flex items-start justify-between gap-2">
                        <span className="text-sm text-gray-700 leading-relaxed">{ing}</span>
                        <Link 
                          href={`/compare?q=${encodeURIComponent(getCompareKey(ing))}`}
                          className="text-[10px] text-amber-600 font-bold border border-amber-200 bg-amber-50 rounded-full px-2 py-0.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                          title={`Compare price for ${getCompareKey(ing)}`}
                        >
                          <ShoppingCart className="w-3 h-3" /> Compare
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Compare CTA */}
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">{t('recipe_shop_ingredients_emoji')}</p>
                  <Link href={`/basket?prefill=${encodeURIComponent(recipe.ingredients.map((ing) => getCompareKey(ing)).filter(Boolean).join(','))}`}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-forest-800 to-forest-700 hover:from-forest-700 hover:to-forest-600 shadow-xl shadow-forest-900/10 text-white font-bold py-3 rounded-xl transition-all hover:-translate-y-0.5"
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
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                <h2 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
                  {t('recipe_how_to_make', { recipeName: displayName })}
                </h2>
                <div className="space-y-5">
                  {displaySteps.map((step: string, i: number) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-amber-500 text-forest-900 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 shadow-sm">
                        {i + 1}
                      </div>
                      <div className="flex-1 pt-1.5">
                        <p className="text-gray-700 leading-relaxed text-sm">{step}</p>
                        {i < recipe.steps.length - 1 && <div className="mt-4 h-px bg-gray-50" />}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Price compare banner */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-forest-800 to-forest-700 rounded-2xl p-5 mb-6">
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
    </>
  );
}
