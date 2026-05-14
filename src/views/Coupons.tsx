'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Tag, Clock, ExternalLink, Star, Zap, TrendingDown } from 'lucide-react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import type { Coupon } from '../data/coupons';
import { COUPONS } from '../data/coupons';


const PLATFORM_IDS = ['All', 'Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart', 'Flipkart Minutes'];
const CATEGORY_KEYS = ['All', 'First Order', 'Grocery', 'Vegetables', 'Dairy', 'Delivery'];
const CATEGORY_I18N: Record<string, string> = {
  'All': 'coup_cat_all',
  'First Order': 'coup_cat_first_order',
  'Grocery': 'coup_cat_grocery',
  'Vegetables': 'coup_cat_vegetables',
  'Dairy': 'coup_cat_dairy',
  'Delivery': 'coup_cat_delivery',
};

const CouponCard = ({ coupon }: { coupon: Coupon }) => {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  const handleCopy = () => {
    navigator.clipboard.writeText(coupon.code);
    setCopied(true);
    toast.success(`Copied "${coupon.code}" to clipboard!`, {
      icon: '🎉',
      style: { background: '#2d6a4f', color: '#fff' }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-3 flex items-center justify-between" style={{ borderBottom: `3px solid ${coupon.textColor}20` }}>
        <div className="flex items-center gap-2.5">
          <span className="text-2xl">{coupon.logo}</span>
          <div>
            <p className="font-bold text-gray-800 text-sm">{coupon.platform}</p>
            <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: `${coupon.textColor}15`, color: coupon.textColor }}>
              {coupon.category}
            </span>
          </div>
        </div>
        {coupon.isHot && (
          <span className="flex items-center gap-1 bg-red-50 text-red-500 text-xs font-bold px-2 py-1 rounded-full border border-red-100">
            🔥 HOT
          </span>
        )}
      </div>

      {/* Body */}
      <div className="px-5 py-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-2xl font-black" style={{ color: coupon.textColor }}>{coupon.discount}</p>
            <p className="text-gray-600 text-sm mt-0.5">{coupon.description}</p>
          </div>
        </div>

        {/* Code box */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1 flex items-center justify-between bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl px-4 py-2.5">
            <span className="font-mono font-bold text-gray-800 tracking-widest text-sm">{coupon.code}</span>
            <Tag className="w-4 h-4 text-gray-400" />
          </div>
          <motion.button
            onClick={handleCopy}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
              copied
                ? 'bg-green-500 text-white'
                : 'bg-forest-600 text-white hover:bg-forest-700'
            }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? t('coup_copied', { defaultValue: 'Copied!' }) : t('coup_copy', { defaultValue: 'Copy' })}
          </motion.button>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <TrendingDown className="w-3 h-3" />
            <span>{coupon.minOrder}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{t('coup_expires', { defaultValue: 'Expires:' })} {coupon.expiry}</span>
          </div>
          <a
            href={coupon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-forest-600 transition-colors"
          >
            {t('coup_shop', { defaultValue: 'Shop' })} <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Coupons() { // refresh
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = COUPONS.filter(c => {
    const matchCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchPlat = selectedPlatform === 'All' || c.platform === selectedPlatform;
    const matchSearch = c.code.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase()) ||
      c.platform.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchPlat && matchSearch;
  });

  const hotCount = filtered.filter(c => c.isHot).length;

  const currentMonthYear = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });
  const couponCount = COUPONS.length;

  return (
    <>
      <SEO
        title={`${couponCount}+ Active Grocery Coupons for ${currentMonthYear} (Updated Daily)`}
        description={`Get the latest grocery coupon codes for ${currentMonthYear}. Verified promo offers for Blinkit, Zepto, Swiggy Instamart, BigBasket, Amazon Fresh, JioMart & Flipkart Minutes. Updated daily!`}
        canonicalUrl="https://www.fantasticfood.in/coupons"
        keywords={`blinkit coupon code ${currentMonthYear}, zepto promo code, swiggy instamart offer, bigbasket coupon, jiomart coupon today, flipkart minutes discount`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: COUPONS.slice(0, 5).map(coupon => ({
              '@type': 'Question',
              name: `What is the latest coupon code for ${coupon.platform}?`,
              acceptedAnswer: {
                '@type': 'Answer',
                text: `The latest offer is "${coupon.description}". Use code ${coupon.code} to get ${coupon.discount}. ${coupon.minOrder ? `Minimum order: ${coupon.minOrder}.` : ''}`
              }
            }))
          })
        }}
      />

      <div className="min-h-screen bg-linear-to-b from-forest-900 via-forest-800 to-cream-50 pt-24 pb-16">

        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-amber-400/30">
              <Zap className="w-4 h-4" /> {t('coup_updated_daily', { defaultValue: 'Updated Daily' })}
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              {t('coup_title', { defaultValue: 'Grocery Coupon Codes' })}<br />
              <span className="text-amber-400">{t('coup_subtitle', { defaultValue: 'Save More Every Day' })}</span>
            </h1>
            <p className="text-cream-300 text-lg max-w-2xl mx-auto">
              {t('coup_desc', { defaultValue: 'The best promo codes for Blinkit, Zepto, Swiggy, BigBasket, JioMart & Flipkart Minutes — all in one place. Click to copy instantly!' })}
            </p>

            {/* Stats bar */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[
                { label: t('coup_stat_active', { defaultValue: 'Active Coupons' }), value: COUPONS.length, icon: '🎟️' },
                { label: t('coup_stat_hot', { defaultValue: 'Hot Deals Today' }), value: COUPONS.filter(c => c.isHot).length, icon: '🔥' },
                { label: t('coup_stat_platforms', { defaultValue: 'Platforms Covered' }), value: 7, icon: '🏪' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-6 py-4 text-center">
                  <div className="text-3xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-cream-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-4">
            {/* Search */}
            <input
              type="text"
              placeholder={t('coup_search_placeholder', { defaultValue: 'Search coupons, codes, or platforms...' })}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-forest-400 transition-colors"
            />
            {/* Category filter */}
            <div>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">{t('coup_category_label', { defaultValue: 'Category' })}</p>
              <div className="flex flex-wrap gap-2">
                {CATEGORY_KEYS.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-sm font-semibold px-4 py-1.5 rounded-full border transition-all ${
                      selectedCategory === cat
                        ? 'bg-forest-600 text-white border-forest-600'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-forest-400'
                    }`}
                  >
                    {t(CATEGORY_I18N[cat], { defaultValue: cat })}
                  </button>
                ))}
              </div>
            </div>
            {/* Platform filter */}
            <div>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">{t('coup_platform_label', { defaultValue: 'Platform' })}</p>
              <div className="flex flex-wrap gap-2">
                {PLATFORM_IDS.map(p => (
                  <button
                    key={p}
                    onClick={() => setSelectedPlatform(p)}
                    className={`text-sm font-semibold px-4 py-1.5 rounded-full border transition-all ${
                      selectedPlatform === p
                        ? 'bg-amber-400 text-forest-900 border-amber-400'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-amber-300'
                    }`}
                  >
                    {p === 'All' ? t('coup_cat_all', { defaultValue: 'All' }) : p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-5">
            <p className="text-gray-500 text-sm">
              {t('coup_showing', { defaultValue: 'Showing' })} <span className="font-bold text-forest-700">{filtered.length}</span> {t('coup_coupons', { defaultValue: 'coupons' })}
              {hotCount > 0 && <span className="ml-2 text-red-500 font-medium">🔥 {hotCount} {t('coup_hot_deals', { defaultValue: 'hot deals' })}</span>}
            </p>
            {(selectedCategory !== 'All' || selectedPlatform !== 'All' || search) && (
              <button
                onClick={() => { setSelectedCategory('All'); setSelectedPlatform('All'); setSearch(''); }}
                className="text-sm text-forest-600 hover:underline font-medium flex items-center gap-1"
              >
                <Star className="w-3 h-3" /> {t('coup_show_all', { defaultValue: 'Show all' })}
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-lg font-semibold">{t('coup_no_found', { defaultValue: 'No coupons found' })}</p>
              <p className="text-sm mt-1">{t('coup_no_found_sub', { defaultValue: 'Try changing your filters or search term' })}</p>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence>
                {filtered.map((coupon) => (
                  <CouponCard key={coupon.id} coupon={coupon} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
