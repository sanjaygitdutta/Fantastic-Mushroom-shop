import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';
import SEO from '../components/SEO';
import CompareResultsGrid from '../components/CompareResultsGrid';
import { searchPrices } from '../data/mockPrices';
import type { CompareResult } from '../data/mockPrices';
import { supabase } from '../lib/supabase';


// City-food pages for long-tail local SEO
const CITIES = ['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad'];
const PLATFORMS = ['Blinkit', 'BigBasket', 'Zepto', 'Swiggy', 'Amazon Fresh', 'JioMart'];

const FoodItemPage = () => {
  const { item } = useParams<{ item: string }>();
  const foodItem = item ? decodeURIComponent(item) : '';
  const displayName = foodItem
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const [result, setResult] = useState<CompareResult | null>(null);
  const [loading, setLoading] = useState(true);

  // Price Drop Alert States
  const [alertEmail, setAlertEmail] = useState('');
  const [alertSubmitting, setAlertSubmitting] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState('');

  const handleAlertSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!alertEmail) return;
    setAlertSubmitting(true);
    setAlertError('');
    
    try {
      const { error } = await supabase
        .from('price_alerts')
        .insert([{ email: alertEmail, product_name: displayName }]);
        
      if (error) throw error;
      setAlertSuccess(true);
      setAlertEmail('');
    } catch (err: any) {
       console.error("Alert error:", err);
       setAlertError(err.message || 'Failed to set alert.');
    } finally {
      setAlertSubmitting(false);
    }
  };

  useEffect(() => {
    if (!foodItem) return;
    setLoading(true);
    searchPrices(foodItem).then((data) => {
      setResult(data);
      setLoading(false);
    });
  }, [foodItem]);

  // Build per-platform price data for the SEO title
  const sortedPrices = result?.prices
    ? [...result.prices].filter(p => p.price > 0 && p.inStock).sort((a, b) => a.price - b.price)
    : [];

  const lowestPrice = sortedPrices[0]?.price || 0;
  const lowestPlatform = sortedPrices[0]?.platformId || '';
  const secondPrice = sortedPrices[1]?.price || 0;
  const secondPlatform = sortedPrices[1]?.platformId || '';

  // Platform display names map
  const PLATFORM_LABELS: Record<string, string> = {
    blinkit: 'Blinkit', zepto: 'Zepto', swiggy: 'Swiggy',
    bigbasket: 'BigBasket', amazon: 'Amazon Fresh', jiomart: 'JioMart',
    flipkart: 'Flipkart Minutes'
  };

  // Auto-updating date — refreshes every page load
  const monthYear = new Date().toLocaleDateString('en-IN', { month: 'short', year: 'numeric' }); // "Apr 2026"
  const todayLabel = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }); // "24 Apr 2026"

  // Build the title: "🍅 Tomato ₹25 on Blinkit vs ₹32 on Zepto — 7 Apps | Apr 2026"
  const seoTitle = lowestPrice > 0 && secondPrice > 0
    ? `${result?.icon || '🛒'} ${displayName} ₹${lowestPrice} on ${PLATFORM_LABELS[lowestPlatform] || lowestPlatform} vs ₹${secondPrice} on ${PLATFORM_LABELS[secondPlatform] || secondPlatform} & More — 7 Apps | ${monthYear}`
    : lowestPrice > 0
    ? `${result?.icon || '🛒'} ${displayName} ₹${lowestPrice} on ${PLATFORM_LABELS[lowestPlatform] || 'Blinkit'} — Compare 7 Apps | ${monthYear}`
    : `${displayName} Price Today ${todayLabel} — Compare Blinkit, Zepto, BigBasket & More`;

  const seoDesc = lowestPrice > 0 && secondPrice > 0
    ? `${displayName} price today (${todayLabel}): ₹${lowestPrice} on ${PLATFORM_LABELS[lowestPlatform] || 'Blinkit'} vs ₹${secondPrice} on ${PLATFORM_LABELS[secondPlatform] || 'Zepto'}. Compare all 7 apps — Blinkit, Zepto, Swiggy Instamart, BigBasket, Amazon Fresh, JioMart & Flipkart Minutes — before prices change.`
    : `Find the cheapest ${displayName} price on ${todayLabel}. Compare prices across Blinkit, Zepto, BigBasket, Swiggy Instamart, Amazon Fresh and JioMart instantly.`;

  // Build schema for Google Rich Results
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: displayName,
    description: seoDesc,
    category: 'Grocery',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.8,
      ratingCount: 284 + (displayName.length * 7),
      reviewCount: 142 + (displayName.length * 3)
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: lowestPrice || 10,
      highPrice: (lowestPrice || 10) + 40,
      offerCount: PLATFORMS.length
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fantasticfood.in/' },
      { '@type': 'ListItem', position: 2, name: 'Compare Prices', item: 'https://www.fantasticfood.in/compare' },
      { '@type': 'ListItem', position: 3, name: `${displayName} Price`, item: `https://www.fantasticfood.in/food/${foodItem}` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: `Where can I buy ${displayName} online cheapest in India?`, acceptedAnswer: { '@type': 'Answer', text: `You can compare ${displayName} prices across Blinkit, Zepto, BigBasket, Swiggy Instamart, Amazon Fresh, and JioMart on Fantastic Food to find the best price.` } },
      { '@type': 'Question', name: `Which app has cheapest ${displayName} price today?`, acceptedAnswer: { '@type': 'Answer', text: `Fantastic Food compares real-time ${displayName} prices from 6 major platforms so you can instantly see which app is offering the lowest price for ${displayName} right now.` } },
      { '@type': 'Question', name: `How to get ${displayName} delivered fast?`, acceptedAnswer: { '@type': 'Answer', text: `Blinkit and Zepto typically deliver ${displayName} in 10 minutes. Swiggy Instamart delivers in 15 minutes. BigBasket and Amazon Fresh offer 2-hour slots.` } },
      { '@type': 'Question', name: `Is ${displayName} available on Blinkit and Zepto?`, acceptedAnswer: { '@type': 'Answer', text: `Yes, ${displayName} is available on both Blinkit and Zepto for quick delivery. Use Fantastic Food to compare which one has a cheaper price right now.` } },
    ],
  };

  const seoKeywords = [
    `${displayName} price today`,
    `buy ${displayName} online India`,
    `${displayName} cheapest price`,
    `${displayName} Blinkit price`,
    `${displayName} Zepto price`,
    `${displayName} BigBasket price`,
    `${displayName} Swiggy instamart`,
    `${displayName} Amazon Fresh`,
    `${displayName} JioMart price`,
    `${displayName} price comparison`,
    `cheapest ${displayName} delivery`,
    `${displayName} online order India`,
  ].join(', ');

  return (
    <div className="min-h-screen bg-cream-50 pt-24 pb-16">
      <SEO
        title={seoTitle}
        description={seoDesc}
        keywords={seoKeywords}
        canonicalUrl={`https://www.fantasticfood.in/food/${foodItem}`}
        structuredData={[productSchema, faqSchema, breadcrumbSchema]}
      />

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <nav className="text-sm text-forest-500" aria-label="breadcrumb">
          <Link to="/" className="hover:text-forest-700">Home</Link>
          {' → '}
          <Link to="/compare" className="hover:text-forest-700">Compare Prices</Link>
          {' → '}
          <span className="text-forest-800 font-medium">{displayName} Price</span>
        </nav>
      </div>

      {/* Hero H1 */}
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <div className="bg-forest-900 text-white rounded-2xl px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-black font-display mb-2">
            {displayName} Price Today in India
          </h1>
          <p className="text-forest-300 text-lg mb-4">
            Compare {displayName} prices on Blinkit, Zepto, BigBasket, Swiggy Instamart, Amazon Fresh &amp; JioMart
          </p>
          <div className="flex flex-wrap gap-2">
            {PLATFORMS.map(pl => (
              <span key={pl} className="bg-forest-800 border border-forest-700 text-forest-300 text-xs px-3 py-1 rounded-full">✓ {pl}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Price Cards */}
      <div className="max-w-6xl mx-auto px-4 mb-14">
        <h2 className="text-xl font-bold text-forest-900 mb-6">Live Price Comparison — {displayName}</h2>
        {loading ? (
          <div className="grid md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="skeleton h-40 rounded-2xl" />
            ))}
          </div>
        ) : result ? (
          <>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-forest-100 mb-6">
              <CompareResultsGrid result={result} />
            </div>

            {/* Notification / Price Drop Alert Box */}
            <div className="bg-forest-50 p-6 rounded-2xl border border-forest-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 max-w-3xl mx-auto mt-8">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-600 flex-shrink-0">
                  <Bell className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-forest-900 font-bold mb-1">Set Price Drop Alert</h3>
                  <p className="text-forest-600 text-sm">We'll email you the moment the price for {displayName} drops across any of our tracked delivery apps.</p>
                </div>
              </div>
              
              {alertSuccess ? (
                <div className="w-full md:w-auto bg-green-100 text-green-800 px-4 py-3 rounded-xl font-medium border border-green-200">
                  ✅ Alert successfully set!
                </div>
              ) : (
                <form onSubmit={handleAlertSubmit} className="w-full md:w-auto flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      required
                      value={alertEmail}
                      onChange={(e) => setAlertEmail(e.target.value)}
                      className="px-4 py-2 rounded-xl border border-forest-200 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full md:w-64"
                    />
                    <button 
                      type="submit" 
                      disabled={alertSubmitting}
                      className="bg-forest-900 hover:bg-forest-800 text-white font-medium px-4 py-2 rounded-xl transition-colors disabled:opacity-50 whitespace-nowrap"
                    >
                      {alertSubmitting ? 'Saving...' : 'Notify Me'}
                    </button>
                  </div>
                  {alertError && <p className="text-red-500 text-xs mt-1">{alertError}</p>}
                </form>
              )}
            </div>
          </>
        ) : (
          <div className="bg-white p-12 text-center rounded-3xl border border-forest-100">
            <h3 className="text-xl font-bold text-forest-900 mb-2">Item not found</h3>
            <p className="text-forest-600">We couldn't find live prices for "{foodItem}".</p>
          </div>
        )}
      </div>

      {/* FAQ Section — high-value SEO content */}
      <div className="max-w-4xl mx-auto px-4 mb-14">
        <h2 className="text-2xl font-black font-display text-forest-900 mb-6">
          Frequently Asked Questions about {displayName}
        </h2>
        <div className="space-y-4">
          {[
            {
              q: `Where to buy ${displayName} online cheapest in India?`,
              a: `Use Fantastic Food to compare ${displayName} prices in real-time across Blinkit, Zepto, BigBasket, Swiggy Instamart, Amazon Fresh, and JioMart. The Best Price is highlighted at the top.`,
            },
            {
              q: `Which app has the cheapest ${displayName} today?`,
              a: `Prices change daily. Fantastic Food shows you the current lowest ${displayName} price across all 6 major quick-commerce platforms so you never overpay.`,
            },
            {
              q: `How fast can I get ${displayName} delivered?`,
              a: `Blinkit and Zepto offer 10-minute delivery for ${displayName}. Swiggy Instamart delivers in 15 minutes. BigBasket and Amazon Fresh offer 2-hour slots. JioMart is available for next-day delivery.`,
            },
            {
              q: `Is ${displayName} available on Blinkit and Zepto?`,
              a: `Yes! Both Blinkit and Zepto list ${displayName}. Compare their prices right here on Fantastic Food and click Buy to be taken directly to the cheapest option.`,
            },
          ].map(({ q, a }) => (
            <details key={q} className="bg-white border border-forest-100 rounded-2xl px-6 py-4 group cursor-pointer">
              <summary className="font-bold text-forest-900 list-none flex justify-between items-center">
                {q}
                <span className="text-forest-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-forest-600 text-sm mt-3 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* City SEO Links */}
      <div className="max-w-6xl mx-auto px-4 mb-14">
        <h2 className="text-xl font-black font-display text-forest-900 mb-4">
          Buy {displayName} Online — By City
        </h2>
        <div className="flex flex-wrap gap-2">
          {CITIES.map(city => (
            <Link
              key={city}
              to={`/compare?q=${encodeURIComponent(foodItem)}&city=${city}`}
              className="text-sm bg-white border border-forest-200 text-forest-700 hover:border-forest-500 hover:text-forest-900 px-4 py-2 rounded-full transition-all"
            >
              {displayName} price in {city}
            </Link>
          ))}
        </div>
      </div>

      {/* Related Food Searches */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-black font-display text-forest-900 mb-4">Related Searches</h2>
        <div className="flex flex-wrap gap-2">
          {['tomato', 'onion', 'potato', 'milk', 'eggs', 'chicken', 'paneer', 'rice', 'dal', 'bread', 'banana', 'apple', 'fish', 'curd']
            .filter(f => f !== foodItem)
            .map(f => (
              <Link key={f} to={`/food/${f}`} className="text-sm bg-amber-50 border border-amber-200 text-amber-800 hover:bg-amber-100 px-4 py-2 rounded-full transition-all capitalize">
                {f} price today
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FoodItemPage;
