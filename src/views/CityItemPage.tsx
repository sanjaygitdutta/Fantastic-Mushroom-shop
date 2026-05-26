"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Share2, TrendingUp, AlertTriangle, CheckCircle, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useRegion, formatCurrency } from '../utils/region';
import { searchPrices } from '../data/mockPrices';
import { getTranslatedItem, getEnglishQuery } from '../i18n/dictionary';
import CompareResultsGrid from '../components/CompareResultsGrid';
import type { CompareResult } from '../data/mockPrices';

interface CityData {
  name: string;
  slug: string;
  state: string;
  emoji: string;
  platforms: string[];
  trending: string[];
  pincode: string;
  region?: 'IN' | 'SG';
}

const CITIES: Record<string, CityData> = {
  mumbai: { name: 'Mumbai', slug: 'mumbai', state: 'Maharashtra', emoji: '🌆', pincode: '400001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart', 'Flipkart Minutes'], trending: ['Onion', 'Potato', 'Tomato', 'Milk'], region: 'IN' },
  delhi: { name: 'Delhi', slug: 'delhi', state: 'Delhi NCR', emoji: '🏛️', pincode: '110001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart', 'Flipkart Minutes'], trending: ['Atta', 'Tomato', 'Onion', 'Dal'], region: 'IN' },
  bangalore: { name: 'Bangalore', slug: 'bangalore', state: 'Karnataka', emoji: '🌿', pincode: '560001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Ragi', 'Coconut', 'Tomato', 'Milk'], region: 'IN' },
  hyderabad: { name: 'Hyderabad', slug: 'hyderabad', state: 'Telangana', emoji: '🕌', pincode: '500001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Tomato', 'Curd', 'Chicken', 'Onion'], region: 'IN' },
  chennai: { name: 'Chennai', slug: 'chennai', state: 'Tamil Nadu', emoji: '🌊', pincode: '600001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Rice', 'Tomato', 'Coconut Oil', 'Dal'], region: 'IN' },
  pune: { name: 'Pune', slug: 'pune', state: 'Maharashtra', emoji: '🎓', pincode: '411001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Milk', 'Tomato', 'Onion', 'Bread'], region: 'IN' },
  kolkata: { name: 'Kolkata', slug: 'kolkata', state: 'West Bengal', emoji: '🌉', pincode: '700001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Mustard Oil', 'Rice', 'Fish', 'Potato'], region: 'IN' },
  ahmedabad: { name: 'Ahmedabad', slug: 'ahmedabad', state: 'Gujarat', emoji: '🏙️', pincode: '380001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Groundnut Oil', 'Milk', 'Tomato', 'Onion'], region: 'IN' },
  jaipur: { name: 'Jaipur', slug: 'jaipur', state: 'Rajasthan', emoji: '🌸', pincode: '302001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Ghee', 'Milk', 'Tomato', 'Onion'], region: 'IN' },
  lucknow: { name: 'Lucknow', slug: 'lucknow', state: 'Uttar Pradesh', emoji: '🕌', pincode: '226001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Milk', 'Tomato', 'Onion', 'Paneer'], region: 'IN' },
  noida: { name: 'Noida', slug: 'noida', state: 'Uttar Pradesh', emoji: '🏗️', pincode: '201301', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart', 'Flipkart Minutes'], trending: ['Milk', 'Eggs', 'Tomato', 'Onion'], region: 'IN' },
  gurgaon: { name: 'Gurgaon', slug: 'gurgaon', state: 'Haryana', emoji: '🌃', pincode: '122001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart', 'Flipkart Minutes'], trending: ['Avocado', 'Milk', 'Eggs', 'Tomato'], region: 'IN' },
  surat: { name: 'Surat', slug: 'surat', state: 'Gujarat', emoji: '💎', pincode: '395001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Milk', 'Tomato', 'Onion', 'Potato'], region: 'IN' },
  indore: { name: 'Indore', slug: 'indore', state: 'Madhya Pradesh', emoji: '🍜', pincode: '452001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Poha', 'Sev', 'Tomato', 'Onion'], region: 'IN' },
  chandigarh: { name: 'Chandigarh', slug: 'chandigarh', state: 'Punjab/Haryana', emoji: '🌳', pincode: '160001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Milk', 'Butter', 'Paneer', 'Tomato'], region: 'IN' },
  kochi: { name: 'Kochi', slug: 'kochi', state: 'Kerala', emoji: '🌴', pincode: '682001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Coconut Oil', 'Rice', 'Fish', 'Banana'], region: 'IN' },
  nagpur: { name: 'Nagpur', slug: 'nagpur', state: 'Maharashtra', emoji: '🍊', pincode: '440001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Orange', 'Dal', 'Tomato', 'Onion'], region: 'IN' },
  bhopal: { name: 'Bhopal', slug: 'bhopal', state: 'Madhya Pradesh', emoji: '🏰', pincode: '462001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Dal', 'Rice', 'Milk', 'Tomato'], region: 'IN' },
  visakhapatnam: { name: 'Visakhapatnam', slug: 'visakhapatnam', state: 'Andhra Pradesh', emoji: '⚓', pincode: '530001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Fish', 'Chilli', 'Tomato'], region: 'IN' },
  coimbatore: { name: 'Coimbatore', slug: 'coimbatore', state: 'Tamil Nadu', emoji: '🏭', pincode: '641001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Coconut Oil', 'Banana', 'Dal'], region: 'IN' },
  vadodara: { name: 'Vadodara', slug: 'vadodara', state: 'Gujarat', emoji: '🎨', pincode: '390001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Groundnut Oil', 'Milk', 'Curd', 'Tomato'], region: 'IN' },
  bhubaneswar: { name: 'Bhubaneswar', slug: 'bhubaneswar', state: 'Odisha', emoji: '🛕', pincode: '751001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Fish', 'Mustard Oil', 'Potato'], region: 'IN' },
  thiruvananthapuram: { name: 'Thiruvananthapuram', slug: 'thiruvananthapuram', state: 'Kerala', emoji: '🌅', pincode: '695001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Coconut Oil', 'Fish', 'Banana'], region: 'IN' },
  patna: { name: 'Patna', slug: 'patna', state: 'Bihar', emoji: '🏛️', pincode: '800001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Litti', 'Rice', 'Dal', 'Milk'], region: 'IN' },
  ranchi: { name: 'Ranchi', slug: 'ranchi', state: 'Jharkhand', emoji: '⛰️', pincode: '834001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Dal', 'Milk', 'Tomato'], region: 'IN' },
  agra: { name: 'Agra', slug: 'agra', state: 'Uttar Pradesh', emoji: '🕌', pincode: '282001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Petha', 'Milk', 'Dal', 'Atta'], region: 'IN' },
  varanasi: { name: 'Varanasi', slug: 'varanasi', state: 'Uttar Pradesh', emoji: '🪔', pincode: '221001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Malai Lassi', 'Milk', 'Dahi', 'Rice'], region: 'IN' },
  meerut: { name: 'Meerut', slug: 'meerut', state: 'Uttar Pradesh', emoji: '⚔️', pincode: '250001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Milk', 'Gur', 'Atta', 'Dal'], region: 'IN' },
  faridabad: { name: 'Faridabad', slug: 'faridabad', state: 'Haryana', emoji: '🏗️', pincode: '121001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Milk', 'Eggs', 'Bread', 'Tomato'], region: 'IN' },
  amritsar: { name: 'Amritsar', slug: 'amritsar', state: 'Punjab', emoji: '🕌', pincode: '143001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Milk', 'Butter', 'Lassi', 'Paneer'], region: 'IN' },
  ludhiana: { name: 'Ludhiana', slug: 'ludhiana', state: 'Punjab', emoji: '🏭', pincode: '141001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Milk', 'Butter', 'Paneer', 'Atta'], region: 'IN' },
  jodhpur: { name: 'Jodhpur', slug: 'jodhpur', state: 'Rajasthan', emoji: '🏰', pincode: '342001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Bajra', 'Dal', 'Ghee', 'Milk'], region: 'IN' },
  kota: { name: 'Kota', slug: 'kota', state: 'Rajasthan', emoji: '📚', pincode: '324001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Milk', 'Bread', 'Eggs', 'Atta'], region: 'IN' },
  udaipur: { name: 'Udaipur', slug: 'udaipur', state: 'Rajasthan', emoji: '🏯', pincode: '313001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Dal Baati', 'Milk', 'Ghee', 'Bajra'], region: 'IN' },
  nashik: { name: 'Nashik', slug: 'nashik', state: 'Maharashtra', emoji: '🍇', pincode: '422001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Grapes', 'Onion', 'Tomato', 'Milk'], region: 'IN' },
  thane: { name: 'Thane', slug: 'thane', state: 'Maharashtra', emoji: '🌊', pincode: '400601', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Fish', 'Rice', 'Milk', 'Eggs'], region: 'IN' },
  mysuru: { name: 'Mysuru', slug: 'mysuru', state: 'Karnataka', emoji: '🏯', pincode: '570001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Ragi', 'Coconut', 'Milk'], region: 'IN' },
  mangalore: { name: 'Mangalore', slug: 'mangalore', state: 'Karnataka', emoji: '🌴', pincode: '575001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Fish', 'Coconut Oil', 'Rice', 'Banana'], region: 'IN' },
  madurai: { name: 'Madurai', slug: 'madurai', state: 'Tamil Nadu', emoji: '🛕', pincode: '625001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Jigarthanda', 'Coconut Oil', 'Banana'], region: 'IN' },
  vijayawada: { name: 'Vijayawada', slug: 'vijayawada', state: 'Andhra Pradesh', emoji: '🌊', pincode: '520001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Chilli', 'Fish', 'Curd'], region: 'IN' },
  warangal: { name: 'Warangal', slug: 'warangal', state: 'Telangana', emoji: '🏛️', pincode: '506001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Dal', 'Chilli', 'Tomato'], region: 'IN' },
  dehradun: { name: 'Dehradun', slug: 'dehradun', state: 'Uttarakhand', emoji: '🏔️', pincode: '248001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Milk', 'Butter', 'Paneer', 'Tomato'], region: 'IN' },
  raipur: { name: 'Raipur', slug: 'raipur', state: 'Chhattisgarh', emoji: '🌾', pincode: '492001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Dal', 'Milk', 'Tomato'], region: 'IN' },
  guwahati: { name: 'Guwahati', slug: 'guwahati', state: 'Assam', emoji: '🍵', pincode: '781001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Fish', 'Mustard Oil', 'Tea'], region: 'IN' },
  kozhikode: { name: 'Kozhikode', slug: 'kozhikode', state: 'Kerala', emoji: '⛵', pincode: '673001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Fish', 'Coconut Oil', 'Rice', 'Banana'], region: 'IN' },
  thrissur: { name: 'Thrissur', slug: 'thrissur', state: 'Kerala', emoji: '🐘', pincode: '680001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Coconut Oil', 'Fish', 'Banana'], region: 'IN' },
  siliguri: { name: 'Siliguri', slug: 'siliguri', state: 'West Bengal', emoji: '🍵', pincode: '734001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Fish', 'Mustard Oil', 'Tea'], region: 'IN' },
  jammu: { name: 'Jammu', slug: 'jammu', state: 'Jammu & Kashmir', emoji: '🏔️', pincode: '180001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rajma', 'Rice', 'Milk', 'Dahi'], region: 'IN' },
  guntur: { name: 'Guntur', slug: 'guntur', state: 'Andhra Pradesh', emoji: '🌶️', pincode: '522001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Chilli', 'Rice', 'Dal', 'Tomato'], region: 'IN' },
  hubli: { name: 'Hubli', slug: 'hubli', state: 'Karnataka', emoji: '🚂', pincode: '580001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Jowar', 'Rice', 'Dal', 'Tomato'], region: 'IN' },
  tiruchirappalli: { name: 'Tiruchirappalli', slug: 'tiruchirappalli', state: 'Tamil Nadu', emoji: '🛕', pincode: '620001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Coconut Oil', 'Banana', 'Dal'], region: 'IN' },
  'navi-mumbai': { name: 'Navi Mumbai', slug: 'navi-mumbai', state: 'Maharashtra', emoji: '🌆', pincode: '400701', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Fish', 'Rice', 'Milk', 'Eggs'], region: 'IN' }
};

export default function CityItemPage() {
  const { citySlug, itemSlug } = useParams<{ citySlug: string; itemSlug: string }>();
  const [result, setResult] = useState<CompareResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const { i18n } = useTranslation();
  const { region } = useRegion();

  const city = CITIES[citySlug?.toLowerCase() || ''];
  const englishQuery = getEnglishQuery(itemSlug || '');
  const translatedItem = getTranslatedItem(englishQuery, i18n.language as any);
  
  useEffect(() => {
    if (!itemSlug) return;
    const fetchPrices = async () => {
      try {
        const queryRegion = city?.region || region || 'IN';
        const data = await searchPrices(englishQuery, queryRegion);
        setResult(data);
      } catch (e) {
        console.error('Error fetching city item prices:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchPrices();
  }, [itemSlug, city, region, englishQuery]);

  const handleShare = () => {
    if (typeof window === 'undefined') return;
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50">
        <div className="text-center p-6 bg-white rounded-3xl border border-forest-100 shadow-sm max-w-md">
          <AlertTriangle className="w-16 h-16 text-amber-500 mx-auto mb-4 animate-bounce" />
          <h1 className="text-2xl font-black text-forest-900 mb-2">City Not Found</h1>
          <p className="text-forest-600 mb-6">We currently don't have comparison data for this city. Please select another city.</p>
          <Link href="/compare" className="btn-forest inline-block w-full text-center">Go to Compare</Link>
        </div>
      </div>
    );
  }

  const sortedPrices = result?.prices
    ? [...result.prices].filter(p => p.price > 0 && p.inStock).sort((a, b) => a.price - b.price)
    : [];

  const lowestPrice = sortedPrices[0]?.price || 0;
  const lowestPlatformId = sortedPrices[0]?.platformId || '';
  const lowestPlatform = lowestPlatformId ? lowestPlatformId.charAt(0).toUpperCase() + lowestPlatformId.slice(1) : '';
  const queryRegion = city.region || 'IN';

  return (
    <div className="min-h-screen bg-cream-50 pt-24 pb-16">
      {/* Breadcrumbs */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="text-sm text-forest-500 flex items-center gap-1.5 flex-wrap" aria-label="breadcrumb">
          <Link href="/" className="hover:text-forest-700 font-medium">Home</Link>
          <span>→</span>
          <Link href="/compare" className="hover:text-forest-700 font-medium">Compare</Link>
          <span>→</span>
          <Link href={`/city/${city.slug}`} className="hover:text-forest-700 font-medium">{city.name}</Link>
          <span>→</span>
          <span className="text-forest-800 font-bold">{translatedItem}</span>
        </nav>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-linear-to-br from-forest-900 via-forest-800 to-forest-950 text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-moss-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 text-cream-200 text-sm font-semibold px-4 py-2 rounded-full border border-white/20">
              <MapPin className="w-4 h-4 text-amber-400" />
              {city.name}, {city.state}
            </div>

            <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
              {result?.icon || '🛒'} {translatedItem} Price in {city.name} Today
            </h1>

            <p className="text-cream-200 text-base md:text-lg max-w-2xl font-medium">
              Compare live prices for {translatedItem} in {city.name} ({city.pincode}) across quick-commerce delivery apps. 
              {lowestPrice > 0 && (
                <> Save money instantly by ordering from <span className="text-amber-400 font-black">{lowestPlatform}</span> for only <span className="text-amber-400 font-black">{formatCurrency(lowestPrice, queryRegion)}</span>.</>
              )}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 bg-white text-forest-900 hover:bg-amber-400 hover:text-forest-900 font-bold px-6 py-3.5 rounded-2xl shadow-lg transition-all"
              >
                {copied ? <CheckCircle className="w-4 h-4 text-green-600 animate-pulse" /> : <Share2 className="w-4 h-4" />}
                {copied ? 'Link Copied!' : 'Share Price Alert'}
              </button>

              <Link
                href={`/city/${city.slug}`}
                className="flex items-center gap-2 bg-forest-800 border border-forest-700 text-cream-200 hover:text-white px-6 py-3.5 rounded-2xl font-bold transition-all"
              >
                View all items in {city.name}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Live Prices section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-forest-900 font-display">Live Comparison Grid</h2>
            <div className="flex items-center gap-1.5 text-xs font-bold text-forest-500 bg-forest-50 border border-forest-100 px-3 py-1.5 rounded-full">
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              Live Updated
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 border border-forest-100 shadow-sm">
            {loading ? (
              <div className="py-20 flex flex-col items-center justify-center">
                <div className="w-10 h-10 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin mb-4" />
                <p className="text-forest-600 text-sm font-semibold">Comparing live prices across delivery apps...</p>
              </div>
            ) : result ? (
              <div className="space-y-6">
                <CompareResultsGrid result={result} />
                
                {/* Local market insights */}
                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-5">
                  <h3 className="font-bold text-amber-900 text-sm mb-1">💡 Smart Shopping Tip for {city.name}</h3>
                  <p className="text-xs text-amber-800 leading-relaxed font-medium">
                    Grocery prices in {city.name} fluctuates based on delivery timings and localized stock. Compare before placing an order. Most platforms offer free delivery above {formatCurrency(region === 'SG' ? 40 : 199, queryRegion)}.
                  </p>
                </div>
              </div>
            ) : (
              <div className="py-20 text-center">
                <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-2" />
                <p className="text-forest-600 font-bold">Could not load price comparisons for {translatedItem} right now.</p>
                <p className="text-gray-500 text-sm mt-1">Please try again in a few moments.</p>
              </div>
            )}
          </div>
        </div>

        {/* Localized Trending comparisons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-forest-100 shadow-sm space-y-4">
            <h3 className="text-lg font-black text-gray-800 flex items-center gap-2 font-display">
              <TrendingUp className="w-5 h-5 text-forest-600" />
              Other items in {city.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {city.trending.map((item) => (
                <Link
                  key={item}
                  href={`/city/${city.slug}/${item.toLowerCase()}`}
                  className="bg-forest-50 hover:bg-forest-100 text-forest-700 text-sm font-semibold px-4 py-2 rounded-full border border-forest-100 transition-colors inline-flex items-center gap-1 group"
                >
                  {item} Price
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 border border-forest-100 shadow-sm space-y-4">
            <h3 className="text-lg font-black text-gray-800 flex items-center gap-2 font-display">
              <MapPin className="w-5 h-5 text-amber-500" />
              Compare in other cities
            </h3>
            <div className="flex flex-wrap gap-2">
              {Object.values(CITIES).slice(0, 6).map((c) => (
                <Link
                  key={c.slug}
                  href={`/city/${c.slug}/${itemSlug}`}
                  className={`text-sm font-semibold px-4 py-2 rounded-full border border-gray-200 hover:border-forest-300 transition-colors inline-flex items-center gap-1 ${
                    c.slug === city.slug ? 'bg-amber-400 text-forest-900 border-amber-400' : 'bg-white text-gray-700'
                  }`}
                >
                  <span>{c.emoji}</span>
                  <span>{c.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
