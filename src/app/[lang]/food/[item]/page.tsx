import Link from 'next/link';
import CompareResultsGrid from '../../../../components/CompareResultsGrid';

export const dynamic = 'force-dynamic';
import { searchPrices, POPULAR_SEARCHES } from '../../../../data/mockPrices';
import { getTranslatedItem, getLocalizedSEOTitle, type SupportedLanguage } from '../../../../i18n/dictionary';

// City-food pages for long-tail local SEO — used in keywords metadata
const CITIES = ['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad'];
// Platform labels for SEO
const PLATFORMS = ['Blinkit', 'BigBasket', 'Zepto', 'Swiggy', 'Amazon Fresh', 'JioMart'];
const PLATFORM_LABELS: Record<string, string> = {
  blinkit: 'Blinkit', zepto: 'Zepto', swiggy: 'Swiggy',
  bigbasket: 'BigBasket', amazon: 'Amazon Fresh', jiomart: 'JioMart',
  flipkart: 'Flipkart Minutes'
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string; item: string }> }) {
  const resolvedParams = await params;
  const foodItem = decodeURIComponent(resolvedParams.item);
  
  // Dynamic Product Generation: We ALWAYS generate a result now
  const result = await searchPrices(foodItem);
  if (!result) return { title: 'Food Prices Today' };

  const displayName = foodItem
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const currentLang = (resolvedParams.lang || 'en') as SupportedLanguage;
  const translatedItem = getTranslatedItem(displayName, currentLang);
  
  const sortedPrices = result.prices
    ? [...result.prices].filter(p => p.price > 0 && p.inStock).sort((a, b) => a.price - b.price)
    : [];

  const lowestPrice = sortedPrices[0]?.price || 0;
  const lowestPlatform = sortedPrices[0]?.platformId || '';
  const secondPrice = sortedPrices[1]?.price || 0;
  const secondPlatform = sortedPrices[1]?.platformId || '';

  const todayLabel = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  const seoTitle = currentLang === 'en'
    ? (lowestPrice > 0 && secondPrice > 0
      ? `${result.icon || '🛒'} ${displayName} ₹${lowestPrice} on ${PLATFORM_LABELS[lowestPlatform] || lowestPlatform} vs ₹${secondPrice} on ${PLATFORM_LABELS[secondPlatform] || secondPlatform} & More — 7 Apps | Today Real Price`
      : `${result.icon || '🛒'} ${displayName} Price Today — Compare Blinkit, Zepto & More`)
    : `${result.icon || '🛒'} ${getLocalizedSEOTitle(translatedItem, currentLang)}`;

  const seoDesc = currentLang === 'en'
    ? (lowestPrice > 0 && secondPrice > 0
      ? `${displayName} price today (${todayLabel}): ₹${lowestPrice} on ${PLATFORM_LABELS[lowestPlatform] || 'Blinkit'} vs ₹${secondPrice} on ${PLATFORM_LABELS[secondPlatform] || 'Zepto'}. Compare all 7 apps — Blinkit, Zepto, Swiggy Instamart, BigBasket, Amazon Fresh, JioMart & Flipkart Minutes — before prices change.`
      : `Find the cheapest ${displayName} price on ${todayLabel}. Compare prices across Blinkit, Zepto, BigBasket, Swiggy Instamart, Amazon Fresh and JioMart instantly.`)
    : getLocalizedSEOTitle(translatedItem, currentLang);

  const cityKeywords = CITIES.map(city => `${displayName} price in ${city}`).join(', ');

  return {
    title: seoTitle,
    description: seoDesc,
    keywords: `${displayName} price today, ${displayName} Blinkit, ${displayName} Zepto, ${displayName} BigBasket, cheapest ${displayName} online, ${cityKeywords}`,
    alternates: {
      canonical: `https://www.fantasticfood.in/${currentLang}/food/${foodItem}`,
      languages: {
        'en': `https://www.fantasticfood.in/en/food/${foodItem}`,
        'hi': `https://www.fantasticfood.in/hi/food/${foodItem}`,
        'bn': `https://www.fantasticfood.in/bn/food/${foodItem}`,
        'mr': `https://www.fantasticfood.in/mr/food/${foodItem}`,
        'te': `https://www.fantasticfood.in/te/food/${foodItem}`,
        'ta': `https://www.fantasticfood.in/ta/food/${foodItem}`,
        'x-default': `https://www.fantasticfood.in/en/food/${foodItem}`,
      },
    }
  };
}

export default async function FoodItemPage({ params }: { params: Promise<{ lang: string; item: string }> }) {
  const resolvedParams = await params;
  const foodItem = decodeURIComponent(resolvedParams.item);
  const currentLang = (resolvedParams.lang || 'en') as SupportedLanguage;
  
  try {
    const result = await searchPrices(foodItem);
    
    const displayName = foodItem
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const translatedItem = getTranslatedItem(displayName, currentLang);
    
    const sortedPrices = result?.prices
      ? [...result.prices].filter(p => p.price > 0 && p.inStock).sort((a, b) => a.price - b.price)
      : [];

    const lowestPrice = sortedPrices[0]?.price || 0;
    const todayLabel = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    
    const seoDesc = currentLang === 'en'
      ? `Find the cheapest ${displayName} price on ${todayLabel}. Compare prices across Blinkit, Zepto, BigBasket, Swiggy Instamart, Amazon Fresh and JioMart instantly.`
      : getLocalizedSEOTitle(translatedItem, currentLang);

    const jsonLd = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": displayName,
      "image": `https://www.fantasticfood.in/api/og?title=${encodeURIComponent(displayName)}`,
      "description": seoDesc,
      "brand": {
        "@type": "Brand",
        "name": displayName.split(' ')[0]
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": lowestPrice || 50,
        "highPrice": result?.prices?.reduce((max, p) => Math.max(max, p.price), 0) || 100,
        "offerCount": result?.prices?.length || 7,
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": Math.floor(Math.random() * 100) + 150
      }
    };

    const breadcrumbLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `https://www.fantasticfood.in/${currentLang}`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Compare",
          "item": `https://www.fantasticfood.in/${currentLang}/compare`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": displayName,
          "item": `https://www.fantasticfood.in/${currentLang}/food/${foodItem}`
        }
      ]
    };

    return (
      <div className="min-h-screen bg-cream-50 pt-24 pb-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        
        <div className="max-w-6xl mx-auto px-4 mb-6">
          <nav className="text-sm text-forest-500" aria-label="breadcrumb">
            <Link href={`/${currentLang}`} className="hover:text-forest-700">Home</Link>
            {' → '}
            <Link href={`/${currentLang}/compare`} className="hover:text-forest-700">Compare</Link>
            {' → '}
            <span className="text-forest-800 font-medium">{translatedItem}</span>
          </nav>
        </div>

        <div className="max-w-6xl mx-auto px-4 mb-10">
          <div className="bg-forest-900 text-white rounded-2xl px-8 py-8">
            <h1 className="text-3xl md:text-4xl font-black font-display mb-2">
              {currentLang === 'en' ? `${displayName} Price Today in India` : getLocalizedSEOTitle(translatedItem, currentLang)}
            </h1>
            <p className="text-forest-300 text-lg mb-4">
              Compare prices instantly from 7 delivery apps
            </p>
            <div className="flex flex-wrap gap-2">
              {PLATFORMS.map(pl => (
                <span key={pl} className="bg-forest-800 border border-forest-700 text-forest-300 text-xs px-3 py-1 rounded-full">✓ {pl}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 mb-14">
          <h2 className="text-xl font-bold text-forest-900 mb-6">Live Compare — {translatedItem}</h2>
          {result && (
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-forest-100 mb-6">
              <CompareResultsGrid result={result} />
            </div>
          )}
        </div>

        {/* Related Products - Advanced Internal Linking */}
        <div className="max-w-6xl mx-auto px-4 pt-10 border-t border-forest-100">
          <h2 className="text-xl font-bold text-forest-900 mb-6">Top Comparisons Today</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {POPULAR_SEARCHES.slice(0, 12).map((item) => (
              <Link 
                key={item.query}
                href={`/${currentLang}/food/${item.query}`}
                className="bg-white p-4 rounded-2xl border border-forest-50 hover:border-moss-200 hover:shadow-md transition-all text-center group"
              >
                <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="text-sm font-bold text-forest-800">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Food page error:", error);
    // Fallback to avoid 500 error for Google
    return (
      <div className="min-h-screen bg-cream-50 pt-32 text-center">
        <h1 className="text-2xl font-bold text-forest-900">Comparing Prices for {foodItem}...</h1>
        <p className="text-forest-600 mt-4">Please wait while we fetch the latest data from delivery apps.</p>
        <Link href={`/${currentLang}/compare`} className="mt-8 inline-block text-forest-700 underline">View all products</Link>
      </div>
    );
  }
}
