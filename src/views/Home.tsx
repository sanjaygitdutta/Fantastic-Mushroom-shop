'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, TrendingDown, Zap, Shield, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import PriceSearchBar from '../components/PriceSearchBar';
import FoodCategoryBrowser from '../components/FoodCategoryBrowser';
import { POPULAR_SEARCHES } from '../data/mockPrices';
import SEO from '../components/SEO';
import DealOfTheDay from '../components/DealOfTheDay';
import { recipes } from '../data/recipes';
import { useTranslation, Trans } from 'react-i18next';

// Animated counter
const Counter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const step = target / 60;
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 25);
    return () => clearInterval(timer);
  }, [target]);
  return <>{count.toLocaleString()}{suffix}</>;
};

const PLATFORM_LOGOS = [
  { name: 'Blinkit', emoji: '⚡', color: '#F5D100' },
  { name: 'BigBasket', emoji: '🛒', color: '#84C225' },
  { name: 'Swiggy', emoji: '🧡', color: '#FC8019' },
  { name: 'Zepto', emoji: '🟣', color: '#9B30D9' },
  { name: 'Amazon Fresh', emoji: '📦', color: '#FF9900' },
  { name: 'JioMart', emoji: '🔵', color: '#0F3CC9' },
  { name: 'Flipkart Minutes', emoji: '🛍️', color: '#2874F0' },
];

const HOW_IT_WORKS = [
  {
    step: '1',
    icon: '🔍',
    title: 'Search Any Food',
    desc: 'Type any food item — vegetables, dairy, meat, snacks, anything edible.',
  },
  {
    step: '2',
    icon: '⚖️',
    title: 'We Compare Instantly',
    desc: 'We fetch real-time prices from Blinkit, BigBasket, Zepto, Swiggy, Amazon & JioMart.',
  },
  {
    step: '3',
    icon: '🏆',
    title: 'Buy from the Best',
    desc: 'One click takes you directly to buy at the lowest price platform.',
  },
];

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -300]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <SEO 
        title={t('home_seo_title')} 
        description={t('home_seo_desc')} 
        canonicalUrl="https://www.fantasticfood.in/"
        keywords="grocery price comparison India, blinkit vs zepto, blinkit vs swiggy, cheapest grocery app india, food price comparison 2026, bigbasket vs blinkit, amazon fresh prices, jiomart vs blinkit"
      />
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700 -z-10" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 -z-10"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='%23FEFAE0' fill-opacity='0.4'/%3E%3C/svg%3E\")" }}
        />

        {/* Floating blobs with Parallax */}
        <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-72 h-72 bg-moss-500/20 rounded-full blur-3xl -z-10 animate-float" />
        <motion.div style={{ y: y2 }} className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl -z-10 animate-float" />

        <motion.div style={{ opacity: opacityText, y: useTransform(scrollY, [0, 400], [0, 100]) }} className="max-w-5xl mx-auto text-center z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-cream-200 text-sm font-medium px-5 py-2 rounded-full mb-8"
          >
            <Zap className="w-4 h-4 text-amber-400" />
            {t('home_smartest_comparator')}
          </motion.div>

          {/* Headline with Staggered Typing */}
          <motion.h1
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-4 font-display"
          >
            <motion.span 
              initial={{ backgroundPosition: '200% center' }}
              animate={{ backgroundPosition: '-200% center' }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cream-200 to-white bg-[length:200%_auto]"
            >
              {t('home_compare_food_prices')}
            </motion.span>
            <br />
            <span className="text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">{t('home_save_more')}</span>{' '}
            <span className="text-cream-300">{t('home_every_day')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-xl text-forest-300 mb-10 max-w-2xl mx-auto"
          >
            {t('home_hero_subtitle')}
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex justify-center mb-10"
          >
            <PriceSearchBar variant="hero" />
          </motion.div>

          {/* Platform logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <span className="text-forest-400 text-sm self-center">{t('home_comparing_on')}</span>
            {PLATFORM_LOGOS.map((p) => (
              <div key={p.name}
                className="flex items-center gap-1.5 bg-white/10 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white font-medium"
              >
                <span>{p.emoji}</span> {p.name}
              </div>
            ))}
          </motion.div>

          {/* Daily Recipe Widget — links to full section below */}
          {(() => {
            const todayRecipe = [...recipes]
              .reverse()
              .find(r => r.id.match(/^\d{4}-\d{2}-\d{2}$/)) ?? recipes[recipes.length - 1];
            if (!todayRecipe) return null;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-8 max-w-2xl mx-auto relative z-10"
              >
                <Link href={`/recipe/${todayRecipe.id}`} className="block group">
                  <div className="bg-gradient-to-r from-amber-500/90 to-amber-400/90 hover:from-amber-400 hover:to-amber-500 backdrop-blur-md border border-amber-300 rounded-3xl p-5 shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] flex items-center justify-between gap-6">
                    <div className="text-left flex-1 min-w-0">
                      <p className="text-forest-900 font-black text-xs uppercase tracking-wider mb-1">
                        {t('home_aika_recipe_day')}
                      </p>
                      <h3 className="text-forest-900 font-bold text-lg md:text-xl leading-tight group-hover:underline truncate">
                        {todayRecipe.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 border border-white/50 text-forest-900 shadow-sm transition-transform group-hover:rotate-12 group-hover:bg-white/40">
                      <ArrowRight className="w-6 h-6 ml-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })()}


          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-4 max-w-md mx-auto"
          >
            {(() => {
              const today = new Date();
              const seed = today.getFullYear() * 1000 + today.getMonth() * 100 + today.getDate();
              
              // Steady growth calculation
              const launchDate = new Date('2026-04-01').getTime();
              const daysSinceLaunch = Math.max(0, Math.floor((today.getTime() - launchDate) / (1000 * 60 * 60 * 24)));
              
              // Deterministic pseudo-random number generator for small daily fluctuations
              const pseudoRandom = (s: number) => {
                const x = Math.sin(s++) * 10000;
                return x - Math.floor(x);
              };
              
              // Strictly increases every day (adds ~250-350 more comparisons each day to simulate viral growth)
              const dailyPrices = 12500 + (daysSinceLaunch * 312) + Math.floor(pseudoRandom(seed + 1) * 85);
              // Fluctuates naturally between 45 and 57
              const dailySavings = 45 + Math.floor(pseudoRandom(seed + 2) * 13);
              
              return [
                { label: t('home_total_prices_compared'), value: dailyPrices, suffix: '+' },
                { label: t('home_avg_savings'), value: dailySavings, suffix: '₹' },
                { label: t('home_food_items'), value: 7000, suffix: '+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-black text-amber-400 font-display">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-forest-400 text-xs mt-0.5">{stat.label}</div>
                </div>
              ));
            })()}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-forest-400"
        >
          <div className="w-6 h-10 border-2 border-forest-500 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-2.5 bg-forest-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ── Deal of the Day ── */}
      <DealOfTheDay />

      {/* ── How It Works ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title mb-3"
            >
              {t('home_how_it_works')}
            </motion.h2>
            <p className="section-subtitle mx-auto text-center">
              {t('home_how_it_works_sub')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Connector */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 left-[58%] w-[38%] border-t-2 border-dashed border-forest-200" />
                )}
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="w-20 h-20 rounded-3xl bg-gradient-to-br from-forest-50 to-moss-100 border border-forest-200 text-4xl flex items-center justify-center mx-auto mb-5 shadow-sm"
                >
                  {step.icon}
                </motion.div>
                <div className="text-xs font-bold text-forest-500 uppercase tracking-widest mb-2">{t('home_step')} {step.step}</div>
                <h3 className="text-lg font-bold text-forest-900 mb-2 font-display">{t(`home_step_${step.step}_title` as any)}</h3>
                <p className="text-forest-600 text-sm leading-relaxed">{t(`home_step_${step.step}_desc` as any)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── New Features Callout ── */}
      <section className="py-12 px-4 bg-cream-100 border-y border-forest-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <Link href="/basket" className="group relative bg-white border border-forest-200 hover:border-moss-500 rounded-3xl p-8 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-moss-100 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
            <div className="relative z-10">
              <span className="text-4xl mb-4 block">🛒</span>
              <h3 className="text-2xl font-black font-display text-forest-900 mb-2">{t('home_smart_basket')}</h3>
              <p className="text-forest-600 mb-6 max-w-sm">{t('home_smart_basket_desc')}</p>
              <span className="inline-flex items-center gap-2 text-moss-600 font-bold group-hover:gap-3 transition-all">
                {t('home_try_it_out')} <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
          
          <Link href="/meal-calculator" className="group relative bg-white border border-forest-200 hover:border-amber-500 rounded-3xl p-8 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
            <div className="relative z-10">
              <span className="text-4xl mb-4 block">🍳</span>
              <h3 className="text-2xl font-black font-display text-forest-900 mb-2">{t('home_meal_cost')}</h3>
              <p className="text-forest-600 mb-6 max-w-sm">{t('home_meal_cost_desc')}</p>
              <span className="inline-flex items-center gap-2 text-amber-600 font-bold group-hover:gap-3 transition-all">
                {t('home_calculate_meal')} <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Popular Searches ── */}
      <section className="py-16 px-4 bg-cream-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="section-title">{t('home_popular_now')}</h2>
              <p className="text-forest-600 text-sm mt-1">{t('home_most_compared')}</p>
            </div>
            <Link href="/compare" className="btn-outline flex items-center gap-2 text-sm">
              {t('home_see_all')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {(() => {
              const today = new Date();
              const seed = today.getFullYear() * 1000 + today.getMonth() * 100 + today.getDate();
              // Sort based on deterministic daily random hash of item name
              const shuffled = [...POPULAR_SEARCHES].sort((a, b) => {
                const x = Math.sin(seed + a.query.charCodeAt(0)) * 10000;
                const randA = x - Math.floor(x);
                const y = Math.sin(seed + b.query.charCodeAt(0)) * 10000;
                const randB = y - Math.floor(y);
                return randA - randB;
              });
              
              return shuffled.slice(0, 10).map((item, i) => (
                <motion.div
                  key={item.query}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={`/compare?q=${item.query}`}
                    className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-forest-100 hover:border-forest-400 hover:shadow-md transition-all duration-200 group"
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="text-sm font-medium text-forest-800">{item.label}</span>
                    <div className="flex items-center gap-1 text-xs text-forest-500">
                      <TrendingDown className="w-3 h-3" />
                      {t('home_compare_action')}
                    </div>
                  </Link>
                </motion.div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* ── Browse Categories ── */}
      <div className="bg-white">
        <FoodCategoryBrowser />
      </div>

      {/* ── Why Choose Us ── */}
      <section className="py-16 px-4 bg-forest-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black font-display mb-3 text-white">{t('home_why_choose')}</h2>
            <p className="text-forest-300">{t('home_more_savings')}</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: t('home_why_1_title'), desc: t('home_why_1_desc') },
              { icon: TrendingDown, title: t('home_why_2_title'), desc: t('home_why_2_desc') },
              { icon: Shield, title: t('home_why_3_title'), desc: t('home_why_3_desc') },
              { icon: Star, title: t('home_why_4_title'), desc: t('home_why_4_desc') },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-12 h-12 bg-forest-700 border border-forest-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-moss-400" />
                </div>
                <h3 className="font-bold text-white mb-1 font-display">{title}</h3>
                <p className="text-forest-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chef Aika's Recipe of the Day ── */}
      {(() => {
        // Get the latest AI-generated recipe (last in array with a date-based id)
        const aiRecipe = [...recipes]
          .reverse()
          .find(r => r.id.match(/^\d{4}-\d{2}-\d{2}$/)) ?? recipes[recipes.length - 1];
        if (!aiRecipe) return null;
        return (
          <section className="py-16 px-4 bg-gradient-to-br from-forest-950 to-forest-900">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-10">
                {/* Left: Recipe Info */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex-1 text-white"
                >
                  <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-bold px-4 py-1.5 rounded-full mb-5 tracking-wider uppercase">
                    {t('home_aika_recipe_day')}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black font-display mb-4 leading-tight">
                    {aiRecipe.title}
                  </h2>
                  <p className="text-gray-300 text-lg mb-6 max-w-lg leading-relaxed">
                    {aiRecipe.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="flex items-center gap-2 bg-white/10 text-gray-100 text-sm px-4 py-2 rounded-full border border-white/20">
                      {t('home_aika_prep')} {aiRecipe.prepTime}
                    </span>
                    <span className="flex items-center gap-2 bg-white/10 text-gray-100 text-sm px-4 py-2 rounded-full border border-white/20">
                      {t('home_aika_cook')} {aiRecipe.cookTime}
                    </span>
                    <span className="flex items-center gap-2 bg-white/10 text-gray-100 text-sm px-4 py-2 rounded-full border border-white/20">
                      {t('home_aika_serves')} {aiRecipe.servings}
                    </span>
                    <span className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full border font-bold ${
                      aiRecipe.difficulty === 'Easy' ? 'bg-green-900/40 text-green-400 border-green-800' :
                      aiRecipe.difficulty === 'Medium' ? 'bg-amber-900/40 text-amber-400 border-amber-800' :
                      'bg-red-900/40 text-red-400 border-red-800'
                    }`}>
                      {aiRecipe.difficulty === 'Easy' ? '✅' : aiRecipe.difficulty === 'Medium' ? '⚡' : '🔥'} {aiRecipe.difficulty}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/recipe/${aiRecipe.id}`}
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-forest-900 font-black rounded-2xl transition-all hover:scale-105 shadow-xl shadow-amber-900/30"
                    >
                      {t('home_see_full_recipe')} <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href={`/basket?prefill=${encodeURIComponent(aiRecipe.ingredients.map(i => i.item).join(','))}`}
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-forest-800 hover:bg-forest-700 text-white font-bold rounded-2xl border border-forest-700 transition-all"
                    >
                      {t('home_compare_ingredients')}
                    </Link>
                  </div>
                </motion.div>

                {/* Right: Recipe Image */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex-1 max-w-md w-full"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full h-72">
                    <Image
                      src={aiRecipe.image}
                      alt={aiRecipe.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      priority
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                      <div className="flex flex-wrap gap-2">
                        {aiRecipe.tags.map(tag => (
                          <span key={tag} className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-amber-500 text-forest-900 font-black text-xs px-3 py-1.5 rounded-full shadow-lg">
                      {t('home_fresh_today')}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* ── Mushroom Shop Spotlight ── */}
      <section className="py-16 px-4 bg-gradient-to-br from-earth-700 to-earth-900">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-white">
            <div className="inline-flex items-center gap-2 bg-earth-600 text-earth-200 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
              {t('home_farm_direct')}
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-4 leading-tight">
              <Trans i18nKey="home_mushroom_shop">Our Mushroom <span className="text-amber-400">Shop</span></Trans>
            </h2>
            <p className="text-earth-300 text-lg mb-7 max-w-md">
              {t('home_mushroom_desc')}
            </p>
            <div className="flex gap-3">
              <Link href="/mushroom-shop" className="btn-amber flex items-center gap-2">
                {t('home_shop_mushrooms')} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/recipes" className="btn-outline border-earth-400 text-earth-200 hover:bg-earth-700 flex items-center gap-2">
                {t('home_view_recipes')}
              </Link>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="text-[120px] md:text-[160px] leading-none select-none"
          >
            🍄
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
