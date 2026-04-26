'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Tag, Clock, ExternalLink, Star, Zap, TrendingDown } from 'lucide-react';
import toast from 'react-hot-toast';
import SEO from '../components/SEO';

interface Coupon {
  id: string;
  platform: string;
  platformId: string;
  code: string;
  discount: string;
  description: string;
  minOrder: string;
  expiry: string;
  category: string;
  isHot: boolean;
  url: string;
  bgColor: string;
  textColor: string;
  logo: string;
}

const COUPONS: Coupon[] = [
  // Blinkit
  { id: 'b1', platform: 'Blinkit', platformId: 'blinkit', code: 'BLINK50', discount: '50% OFF', description: 'Get 50% off on your first order', minOrder: 'Min ₹199', expiry: 'Apr 30, 2026', category: 'First Order', isHot: true, url: 'https://blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'b2', platform: 'Blinkit', platformId: 'blinkit', code: 'BLINK20', discount: '₹100 OFF', description: 'Flat ₹100 off on groceries', minOrder: 'Min ₹399', expiry: 'Apr 25, 2026', category: 'Grocery', isHot: false, url: 'https://blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'b3', platform: 'Blinkit', platformId: 'blinkit', code: 'VEGBLINK', discount: '15% OFF', description: 'Flat 15% off on fresh vegetables', minOrder: 'Min ₹149', expiry: 'Apr 28, 2026', category: 'Vegetables', isHot: false, url: 'https://blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  // Zepto
  { id: 'z1', platform: 'Zepto', platformId: 'zepto', code: 'ZEPTO40', discount: '40% OFF', description: '40% off on your first Zepto order', minOrder: 'Min ₹249', expiry: 'Apr 30, 2026', category: 'First Order', isHot: true, url: 'https://zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'z2', platform: 'Zepto', platformId: 'zepto', code: 'ZEPTOVEG', discount: '₹75 OFF', description: 'Save ₹75 on fresh fruits & vegetables', minOrder: 'Min ₹299', expiry: 'Apr 22, 2026', category: 'Vegetables', isHot: false, url: 'https://zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'z3', platform: 'Zepto', platformId: 'zepto', code: 'ZPASS', discount: '₹0 Delivery', description: 'Free delivery on all orders this week', minOrder: 'No min order', expiry: 'Apr 20, 2026', category: 'Delivery', isHot: true, url: 'https://zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  // Swiggy Instamart
  { id: 's1', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'INSTAMART60', discount: '60% OFF', description: '60% off up to ₹120 on first order', minOrder: 'Min ₹199', expiry: 'May 5, 2026', category: 'First Order', isHot: true, url: 'https://swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 's2', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'SWIGGY150', discount: '₹150 OFF', description: 'Flat ₹150 off on grocery order', minOrder: 'Min ₹599', expiry: 'Apr 27, 2026', category: 'Grocery', isHot: false, url: 'https://swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  // BigBasket
  { id: 'bb1', platform: 'BigBasket', platformId: 'bigbasket', code: 'BB100', discount: '₹100 OFF', description: 'Flat ₹100 off on orders above ₹799', minOrder: 'Min ₹799', expiry: 'Apr 29, 2026', category: 'Grocery', isHot: false, url: 'https://bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bb2', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBFRESH', discount: '20% OFF', description: '20% off on fresh fruits & vegetables', minOrder: 'Min ₹299', expiry: 'Apr 24, 2026', category: 'Vegetables', isHot: true, url: 'https://bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bb3', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBDAIRY', discount: '10% OFF', description: '10% off on milk & dairy products', minOrder: 'Min ₹199', expiry: 'Apr 26, 2026', category: 'Dairy', isHot: false, url: 'https://bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  // Amazon Fresh
  { id: 'a1', platform: 'Amazon Fresh', platformId: 'amazon', code: 'FRESH200', discount: '₹200 OFF', description: '₹200 off on Amazon Fresh orders', minOrder: 'Min ₹999', expiry: 'Apr 30, 2026', category: 'Grocery', isHot: true, url: 'https://amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'a2', platform: 'Amazon Fresh', platformId: 'amazon', code: 'PRIMEFRESH', discount: 'Free Delivery', description: 'Free delivery on all Fresh orders for Prime', minOrder: 'Prime members only', expiry: 'Ongoing', category: 'Delivery', isHot: false, url: 'https://amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  // JioMart
  { id: 'j1', platform: 'JioMart', platformId: 'jiomart', code: 'JIOMART50', discount: '₹50 OFF', description: 'Flat ₹50 off on first JioMart order', minOrder: 'Min ₹249', expiry: 'May 1, 2026', category: 'First Order', isHot: false, url: 'https://jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'j2', platform: 'JioMart', platformId: 'jiomart', code: 'JIOMONSOON', discount: '25% OFF', description: '25% off sitewide this season', minOrder: 'Min ₹399', expiry: 'Apr 23, 2026', category: 'Grocery', isHot: true, url: 'https://jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  // Flipkart Minutes
  { id: 'f1', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'MINUTES100', discount: '₹100 OFF', description: 'Flat ₹100 off on Flipkart Minutes', minOrder: 'Min ₹499', expiry: 'Apr 28, 2026', category: 'Grocery', isHot: true, url: 'https://flipkart.com', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'f2', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FKVEGGIES', discount: '15% OFF', description: '15% off on fresh vegetables', minOrder: 'Min ₹199', expiry: 'Apr 25, 2026', category: 'Vegetables', isHot: false, url: 'https://flipkart.com', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];

const CATEGORIES = ['All', 'First Order', 'Grocery', 'Vegetables', 'Dairy', 'Delivery'];
const PLATFORMS = ['All', 'Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart', 'Flipkart Minutes'];

const CouponCard = ({ coupon }: { coupon: Coupon }) => {
  const [copied, setCopied] = useState(false);

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
            {copied ? 'Copied!' : 'Copy'}
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
            <span>Expires: {coupon.expiry}</span>
          </div>
          <a
            href={coupon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-forest-600 transition-colors"
          >
            Shop <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Coupons() {
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

  return (
    <>
      <SEO
        title="Grocery Coupon Codes Today | Blinkit, Zepto, Swiggy, BigBasket, JioMart, Flipkart"
        description="Get the latest grocery coupon codes and promo offers for Blinkit, Zepto, Swiggy Instamart, BigBasket, Amazon Fresh, JioMart & Flipkart Minutes. Updated daily — copy & save instantly!"
        canonicalUrl="https://www.fantasticfood.in/coupons"
        keywords="blinkit coupon code, zepto promo code, swiggy instamart offer, bigbasket coupon, jiomart coupon today, flipkart minutes discount"
      />

      <div className="min-h-screen bg-gradient-to-b from-forest-900 via-forest-800 to-cream-50 pt-24 pb-16">

        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-amber-400/30">
              <Zap className="w-4 h-4" /> Updated Daily
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Grocery Coupon Codes<br />
              <span className="text-amber-400">Save More Every Day</span>
            </h1>
            <p className="text-cream-300 text-lg max-w-2xl mx-auto">
              The best promo codes for Blinkit, Zepto, Swiggy, BigBasket, JioMart &amp; Flipkart Minutes — all in one place. Click to copy instantly!
            </p>

            {/* Stats bar */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[
                { label: 'Active Coupons', value: COUPONS.length, icon: '🎟️' },
                { label: 'Hot Deals Today', value: COUPONS.filter(c => c.isHot).length, icon: '🔥' },
                { label: 'Platforms Covered', value: 7, icon: '🏪' },
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
              placeholder="Search coupons, codes, or platforms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-forest-400 transition-colors"
            />
            {/* Category filter */}
            <div>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Category</p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-sm font-semibold px-4 py-1.5 rounded-full border transition-all ${
                      selectedCategory === cat
                        ? 'bg-forest-600 text-white border-forest-600'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-forest-400'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            {/* Platform filter */}
            <div>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Platform</p>
              <div className="flex flex-wrap gap-2">
                {PLATFORMS.map(p => (
                  <button
                    key={p}
                    onClick={() => setSelectedPlatform(p)}
                    className={`text-sm font-semibold px-4 py-1.5 rounded-full border transition-all ${
                      selectedPlatform === p
                        ? 'bg-amber-400 text-forest-900 border-amber-400'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-amber-300'
                    }`}
                  >
                    {p}
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
              Showing <span className="font-bold text-forest-700">{filtered.length}</span> coupons
              {hotCount > 0 && <span className="ml-2 text-red-500 font-medium">🔥 {hotCount} hot deals</span>}
            </p>
            {(selectedCategory !== 'All' || selectedPlatform !== 'All' || search) && (
              <button
                onClick={() => { setSelectedCategory('All'); setSelectedPlatform('All'); setSearch(''); }}
                className="text-sm text-forest-600 hover:underline font-medium flex items-center gap-1"
              >
                <Star className="w-3 h-3" /> Show all
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-lg font-semibold">No coupons found</p>
              <p className="text-sm mt-1">Try changing your filters or search term</p>
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
