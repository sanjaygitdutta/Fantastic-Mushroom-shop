import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import PlatformPriceCard from '../components/PlatformPriceCard';
import { searchPrices } from '../data/mockPrices';
import type { CompareResult } from '../data/mockPrices';


// City-food pages for long-tail local SEO
const CITIES = ['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad'];
const PLATFORMS = ['Blinkit', 'BigBasket', 'Zepto', 'Swiggy', 'Amazon Fresh', 'JioMart'];

const FoodItemPage = () => {
  const { item } = useParams<{ item: string }>();
  const foodItem = item ? decodeURIComponent(item) : '';
  const displayName = foodItem.charAt(0).toUpperCase() + foodItem.slice(1);

  const [result, setResult] = useState<CompareResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!foodItem) return;
    setLoading(true);
    searchPrices(foodItem).then((data) => {
      setResult(data);
      setLoading(false);
    });
  }, [foodItem]);

  // Build schema for Google Rich Results
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${displayName} Price Comparison — Buy ${displayName} Online India`,
    description: `Compare ${displayName} prices on Blinkit, BigBasket, Zepto, Swiggy Instamart, Amazon Fresh, and JioMart. Find the cheapest ${displayName} with home delivery.`,
    publisher: { '@type': 'Organization', name: 'Fantastic Food', url: 'https://fantasticfood.in' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fantasticfood.in/' },
        { '@type': 'ListItem', position: 2, name: 'Compare Prices', item: 'https://fantasticfood.in/compare' },
        { '@type': 'ListItem', position: 3, name: `${displayName} Price`, item: `https://fantasticfood.in/food/${foodItem}` },
      ],
    },
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
        title={`${displayName} Price Today — Compare on Blinkit, Zepto, BigBasket & More`}
        description={`Find the cheapest ${displayName} price today. Compare ${displayName} prices across Blinkit, Zepto, BigBasket, Swiggy Instamart, Amazon Fresh and JioMart instantly. Save up to 30% on your grocery order.`}
        keywords={seoKeywords}
        canonicalUrl={`https://fantasticfood.in/food/${foodItem}`}
        structuredData={pageSchema}
      />
      {/* Also inject FAQ schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <nav className="text-sm text-forest-500" aria-label="breadcrumb">to line 10 of

          index.html
          where it says REPLACE_WITH_YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN, deploy the site to Vercel one more time, and hit "Verify" in Google Console!
          Once it's verified, you can submit the

          sitemap.xml
          URL we just created so Google can start indexing all your new food pages right away.
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
          <div className="grid md:grid-cols-3 gap-4">
            {result.prices.map((price, idx) => (
              <PlatformPriceCard key={price.platformId} index={idx} price={price} isBest={false} />
            ))}
          </div>
        ) : (
          <p className="text-forest-600">No prices found. Try a different search.</p>
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
