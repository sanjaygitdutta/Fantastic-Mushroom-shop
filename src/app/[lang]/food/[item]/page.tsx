import Link from 'next/link';
import CompareResultsGrid from '../../../../components/CompareResultsGrid';
import { searchPrices } from '../../../../data/mockPrices';
import { getTranslatedItem, getLocalizedSEOTitle, type SupportedLanguage } from '../../../../i18n/dictionary';

// City-food pages for long-tail local SEO
const CITIES = ['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad'];
const PLATFORMS = ['Blinkit', 'BigBasket', 'Zepto', 'Swiggy', 'Amazon Fresh', 'JioMart'];
const PLATFORM_LABELS: Record<string, string> = {
  blinkit: 'Blinkit', zepto: 'Zepto', swiggy: 'Swiggy',
  bigbasket: 'BigBasket', amazon: 'Amazon Fresh', jiomart: 'JioMart',
  flipkart: 'Flipkart Minutes'
};

export async function generateMetadata({ params }: { params: { lang: string; item: string } }) {
  const foodItem = decodeURIComponent(params.item);
  const displayName = foodItem
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const currentLang = (params.lang || 'en') as SupportedLanguage;
  const translatedItem = getTranslatedItem(displayName, currentLang);
  
  const result = await searchPrices(foodItem);
  const sortedPrices = result?.prices
    ? [...result.prices].filter(p => p.price > 0 && p.inStock).sort((a, b) => a.price - b.price)
    : [];

  const lowestPrice = sortedPrices[0]?.price || 0;
  const lowestPlatform = sortedPrices[0]?.platformId || '';
  const secondPrice = sortedPrices[1]?.price || 0;
  const secondPlatform = sortedPrices[1]?.platformId || '';

  const todayLabel = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  const seoTitle = currentLang === 'en'
    ? (lowestPrice > 0 && secondPrice > 0
      ? `${result?.icon || '🛒'} ${displayName} ₹${lowestPrice} on ${PLATFORM_LABELS[lowestPlatform] || lowestPlatform} vs ₹${secondPrice} on ${PLATFORM_LABELS[secondPlatform] || secondPlatform} & More — 7 Apps | Today Real Price`
      : lowestPrice > 0
        ? `${result?.icon || '🛒'} ${displayName} ₹${lowestPrice} on ${PLATFORM_LABELS[lowestPlatform] || 'Blinkit'} — Compare 7 Apps | Today Real Price`
        : `${displayName} Price Today ${todayLabel} — Compare Blinkit, Zepto, BigBasket & More`)
    : `${result?.icon || '🛒'} ${getLocalizedSEOTitle(translatedItem, currentLang)}`;

  const seoDesc = currentLang === 'en'
    ? (lowestPrice > 0 && secondPrice > 0
      ? `${displayName} price today (${todayLabel}): ₹${lowestPrice} on ${PLATFORM_LABELS[lowestPlatform] || 'Blinkit'} vs ₹${secondPrice} on ${PLATFORM_LABELS[secondPlatform] || 'Zepto'}. Compare all 7 apps — Blinkit, Zepto, Swiggy Instamart, BigBasket, Amazon Fresh, JioMart & Flipkart Minutes — before prices change.`
      : `Find the cheapest ${displayName} price on ${todayLabel}. Compare prices across Blinkit, Zepto, BigBasket, Swiggy Instamart, Amazon Fresh and JioMart instantly.`)
    : getLocalizedSEOTitle(translatedItem, currentLang);

  return {
    title: seoTitle,
    description: seoDesc,
    alternates: {
      canonical: `https://www.fantasticfood.in/${currentLang}/food/${foodItem}`,
    }
  };
}

export default async function FoodItemPage({ params }: { params: { lang: string; item: string } }) {
  const foodItem = decodeURIComponent(params.item);
  const displayName = foodItem
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const currentLang = (params.lang || 'en') as SupportedLanguage;
  const translatedItem = getTranslatedItem(displayName, currentLang);
  
  // This runs on the SERVER. No loading spinner. Perfect SEO!
  const result = await searchPrices(foodItem);

  return (
    <div className="min-h-screen bg-cream-50 pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <nav className="text-sm text-forest-500" aria-label="breadcrumb">
          <Link href={`/${currentLang}`} className="hover:text-forest-700">Home</Link>
          {' → '}
          <Link href={`/${currentLang}/compare`} className="hover:text-forest-700">Compare</Link>
          {' → '}
          <span className="text-forest-800 font-medium">{translatedItem}</span>
        </nav>
      </div>

      {/* Hero H1 */}
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <div className="bg-forest-900 text-white rounded-2xl px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-black font-display mb-2">
            {currentLang === 'en' ? `${displayName} Price Today in India` : getLocalizedSEOTitle(translatedItem, currentLang)}
          </h1>
          <p className="text-forest-300 text-lg mb-4">
            Compare prices instantly
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
        <h2 className="text-xl font-bold text-forest-900 mb-6">Live Compare — {translatedItem}</h2>
        {result ? (
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-forest-100 mb-6">
            <CompareResultsGrid result={result} />
          </div>
        ) : (
          <div className="bg-white p-12 text-center rounded-3xl border border-forest-100">
            <h3 className="text-xl font-bold text-forest-900 mb-2">Not Found</h3>
            <p className="text-forest-600">We couldn't find prices for {foodItem}</p>
          </div>
        )}
      </div>
    </div>
  );
}
