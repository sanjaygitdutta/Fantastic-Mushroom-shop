import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Search, TrendingUp, Zap, ArrowRight, Star } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';

interface CityData {
  name: string;
  slug: string;
  state: string;
  emoji: string;
  platforms: string[];
  trending: string[];
  description: string;
  pincode: string;
}

const CITIES: Record<string, CityData> = {
  mumbai: { name: 'Mumbai', slug: 'mumbai', state: 'Maharashtra', emoji: '🌆', pincode: '400001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart', 'Flipkart Minutes'], trending: ['Onion', 'Potato', 'Tomato', 'Milk', 'Eggs', 'Paneer', 'Rice', 'Atta'], description: 'Compare grocery prices across all major quick-commerce apps in Mumbai. Find the cheapest delivery for your daily essentials.' },
  delhi: { name: 'Delhi', slug: 'delhi', state: 'Delhi NCR', emoji: '🏛️', pincode: '110001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart', 'Flipkart Minutes'], trending: ['Atta', 'Dahi', 'Tomato', 'Onion', 'Dal', 'Ghee', 'Bread', 'Butter'], description: 'Find the best grocery prices in Delhi NCR. Compare Blinkit, Zepto, Swiggy Instamart and more — all in one click.' },
  bangalore: { name: 'Bangalore', slug: 'bangalore', state: 'Karnataka', emoji: '🌿', pincode: '560001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Ragi', 'Coconut', 'Tomato', 'Milk', 'Coffee', 'Avocado', 'Broccoli', 'Paneer'], description: 'Bangalore grocery price comparison — Blinkit, Zepto, BigBasket, Swiggy Instamart. Find the best deal near you.' },
  hyderabad: { name: 'Hyderabad', slug: 'hyderabad', state: 'Telangana', emoji: '🕌', pincode: '500001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Biryani Rice', 'Chilli', 'Tomato', 'Curd', 'Mutton', 'Chicken', 'Oil', 'Onion'], description: 'Compare grocery and daily essential prices across all delivery apps in Hyderabad. Save money every day.' },
  chennai: { name: 'Chennai', slug: 'chennai', state: 'Tamil Nadu', emoji: '🌊', pincode: '600001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Rice', 'Coconut Oil', 'Idli Batter', 'Tomato', 'Drumstick', 'Curry Leaves', 'Oil', 'Dal'], description: 'Chennai grocery price tracker — compare all delivery platforms for rice, vegetables, and daily essentials.' },
  pune: { name: 'Pune', slug: 'pune', state: 'Maharashtra', emoji: '🎓', pincode: '411001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Milk', 'Eggs', 'Tomato', 'Onion', 'Bread', 'Paneer', 'Potato', 'Curd'], description: 'Pune grocery price comparison — find the cheapest app for delivery of vegetables, dairy, and groceries.' },
  kolkata: { name: 'Kolkata', slug: 'kolkata', state: 'West Bengal', emoji: '🌉', pincode: '700001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Mustard Oil', 'Rice', 'Fish', 'Potato', 'Onion', 'Tomato', 'Dal', 'Sugar'], description: 'Compare grocery delivery prices in Kolkata. Best deals on fish, mustard oil, rice and Bengali essentials.' },
  ahmedabad: { name: 'Ahmedabad', slug: 'ahmedabad', state: 'Gujarat', emoji: '🏙️', pincode: '380001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Groundnut Oil', 'Bajra', 'Milk', 'Curd', 'Tomato', 'Onion', 'Turmeric', 'Atta'], description: 'Gujarat grocery price comparison in Ahmedabad. Compare all apps for best prices on daily essentials.' },
  jaipur: { name: 'Jaipur', slug: 'jaipur', state: 'Rajasthan', emoji: '🌸', pincode: '302001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Dal Baati', 'Ghee', 'Milk', 'Besan', 'Tomato', 'Onion', 'Atta', 'Bajra'], description: 'Jaipur grocery prices — compare Blinkit, Zepto, Swiggy and more for the best deals in the Pink City.' },
  lucknow: { name: 'Lucknow', slug: 'lucknow', state: 'Uttar Pradesh', emoji: '🕌', pincode: '226001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Awadhi Rice', 'Mutton', 'Milk', 'Tomato', 'Onion', 'Paneer', 'Dahi', 'Ghee'], description: 'Compare grocery delivery prices in Lucknow. Find the cheapest platform for your weekly shopping.' },
  noida: { name: 'Noida', slug: 'noida', state: 'Uttar Pradesh', emoji: '🏗️', pincode: '201301', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart', 'Flipkart Minutes'], trending: ['Milk', 'Eggs', 'Bread', 'Tomato', 'Onion', 'Paneer', 'Curd', 'Oil'], description: 'Noida grocery price comparison — compare all 7 platforms for the best daily grocery deals.' },
  gurgaon: { name: 'Gurgaon', slug: 'gurgaon', state: 'Haryana', emoji: '🌃', pincode: '122001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart', 'Flipkart Minutes'], trending: ['Avocado', 'Quinoa', 'Milk', 'Eggs', 'Tomato', 'Paneer', 'Butter', 'Bread'], description: 'Gurgaon grocery prices — compare Blinkit, Zepto & more for premium and everyday grocery savings.' },
  surat: { name: 'Surat', slug: 'surat', state: 'Gujarat', emoji: '💎', pincode: '395001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Ponk', 'Sugarcane', 'Milk', 'Tomato', 'Onion', 'Potato', 'Oil', 'Dal'], description: 'Surat grocery delivery comparison — Zepto, Swiggy, BigBasket price tracker for all your daily needs.' },
  indore: { name: 'Indore', slug: 'indore', state: 'Madhya Pradesh', emoji: '🍜', pincode: '452001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Poha', 'Sev', 'Dahi', 'Tomato', 'Onion', 'Potato', 'Milk', 'Atta'], description: 'Indore grocery price comparison — India\'s food capital gets the best deals on daily essentials.' },
  chandigarh: { name: 'Chandigarh', slug: 'chandigarh', state: 'Punjab/Haryana', emoji: '🌳', pincode: '160001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Milk', 'Butter', 'Paneer', 'Tomato', 'Onion', 'Dahi', 'Mustard', 'Lassi'], description: 'Chandigarh grocery prices — compare delivery apps for the best deals on dairy, vegetables and more.' },
};

const PLATFORM_LOGOS: Record<string, string> = {
  'Blinkit': '⚡', 'Zepto': '🟣', 'Swiggy Instamart': '🧡',
  'BigBasket': '🛒', 'Amazon Fresh': '📦', 'JioMart': '🔵',
  'Flipkart Minutes': '🛍️',
};

const COMPARISON_PAIRS = [
  { a: 'Blinkit', b: 'Zepto', label: 'Blinkit vs Zepto' },
  { a: 'Zepto', b: 'Swiggy Instamart', label: 'Zepto vs Swiggy' },
  { a: 'Blinkit', b: 'BigBasket', label: 'Blinkit vs BigBasket' },
  { a: 'Amazon Fresh', b: 'JioMart', label: 'Amazon vs JioMart' },
];

export default function CityPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const city = CITIES[citySlug?.toLowerCase() || ''];

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🏙️</div>
          <h1 className="text-2xl font-bold text-forest-800 mb-2">City not found</h1>
          <p className="text-gray-500 mb-6">We don't have a page for this city yet.</p>
          <Link to="/" className="btn-forest">Go to Homepage</Link>
        </div>
      </div>
    );
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/compare?q=${encodeURIComponent(search.trim())}&city=${city.slug}`);
  };

  return (
    <>
      <SEO
        title={`Grocery Prices in ${city.name} | Blinkit vs Zepto vs Swiggy — Fantastic Food`}
        description={`${city.description} Compare ${city.platforms.join(', ')} instantly. Updated daily for ${city.name}, ${city.state}.`}
        canonicalUrl={`https://www.fantasticfood.in/city/${city.slug}`}
        keywords={`grocery prices ${city.name}, blinkit ${city.name}, zepto ${city.name}, swiggy instamart ${city.name}, bigbasket ${city.name}, cheapest grocery ${city.name}, food price comparison ${city.name}`}
      />

      <div className="min-h-screen bg-gradient-to-b from-forest-900 via-forest-800 to-cream-50 pt-24 pb-20">

        {/* Hero */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 text-cream-200 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-white/20">
              <MapPin className="w-4 h-4 text-amber-400" />
              {city.state}
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              {city.emoji} {city.name}<br />
              <span className="text-amber-400">Grocery Prices</span>
            </h1>
            <p className="text-cream-300 text-lg max-w-2xl mx-auto mb-8">{city.description}</p>

            {/* Search bar */}
            <form onSubmit={handleSearch} className="flex gap-3 max-w-xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder={`Search grocery in ${city.name}...`}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-gray-800 placeholder-gray-400 outline-none text-base shadow-lg border border-gray-100 focus:border-forest-400"
                />
              </div>
              <button type="submit" className="bg-amber-400 hover:bg-amber-500 text-forest-900 font-bold px-6 py-4 rounded-2xl shadow-lg transition-all">
                Compare
              </button>
            </form>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Platforms available */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl shadow-md p-6 md:p-8">
            <h2 className="text-xl font-black text-gray-800 mb-5 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              Apps that deliver in {city.name}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {city.platforms.map(p => (
                <div key={p} className="flex items-center gap-2 bg-gray-50 rounded-2xl px-4 py-3 border border-gray-100">
                  <span className="text-xl">{PLATFORM_LOGOS[p] || '🛒'}</span>
                  <span className="font-semibold text-gray-700 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Trending items */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-md p-6 md:p-8">
            <h2 className="text-xl font-black text-gray-800 mb-5 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-forest-600" />
              Trending Searches in {city.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {city.trending.map((item) => (
                <Link
                  key={item}
                  to={`/compare?q=${encodeURIComponent(item)}&city=${city.slug}`}
                  className="flex items-center gap-2 bg-forest-50 hover:bg-forest-100 text-forest-700 border border-forest-100 px-4 py-2.5 rounded-full font-semibold text-sm transition-all hover:shadow-sm group"
                >
                  {item}
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Head-to-head comparisons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl shadow-md p-6 md:p-8">
            <h2 className="text-xl font-black text-gray-800 mb-5 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-400" />
              Popular Comparisons in {city.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {COMPARISON_PAIRS.map(({ a, b, label }) => {
                if (!city.platforms.includes(a) || !city.platforms.includes(b)) return null;
                return (
                  <Link
                    key={label}
                    to={`/compare?q=tomato&city=${city.slug}`}
                    className="flex items-center justify-between bg-gradient-to-r from-forest-50 to-cream-50 border border-forest-100 rounded-2xl p-4 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{PLATFORM_LOGOS[a]}</span>
                      <span className="font-bold text-gray-700 text-sm">vs</span>
                      <span className="text-xl">{PLATFORM_LOGOS[b]}</span>
                      <span className="font-semibold text-gray-700 text-sm">{label}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-forest-400 group-hover:text-forest-600 transition-colors" />
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* All cities grid */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-forest-800 to-forest-900 rounded-3xl p-6 md:p-8">
            <h2 className="text-xl font-black text-white mb-5 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              Check Prices in Another City
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {Object.values(CITIES).map(c => (
                <Link
                  key={c.slug}
                  to={`/city/${c.slug}`}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    c.slug === city.slug
                      ? 'bg-amber-400 text-forest-900'
                      : 'bg-white/10 text-cream-200 hover:bg-white/20'
                  }`}
                >
                  <span>{c.emoji}</span>
                  <span>{c.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
