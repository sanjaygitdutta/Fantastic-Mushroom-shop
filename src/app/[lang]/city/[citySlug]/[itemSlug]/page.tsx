import { Suspense } from 'react';
import CityItemPage from '../../../../../views/CityItemPage';
import { searchPrices } from '../../../../../data/mockPrices';
import { getTranslatedItem, getEnglishQuery, getTranslatedCity, getLocalizedCityItemSEO, getLocalizedFAQ, type SupportedLanguage } from '../../../../../i18n/dictionary';
import { cookies } from 'next/headers';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ lang: string; citySlug: string; itemSlug: string }>;
}

const CITIES: Record<string, { name: string; state: string; region: 'IN' | 'SG' }> = {
  mumbai: { name: 'Mumbai', state: 'Maharashtra', region: 'IN' },
  delhi: { name: 'Delhi', state: 'Delhi NCR', region: 'IN' },
  bangalore: { name: 'Bangalore', state: 'Karnataka', region: 'IN' },
  hyderabad: { name: 'Hyderabad', state: 'Telangana', region: 'IN' },
  chennai: { name: 'Chennai', state: 'Tamil Nadu', region: 'IN' },
  pune: { name: 'Pune', state: 'Maharashtra', region: 'IN' },
  kolkata: { name: 'Kolkata', state: 'West Bengal', region: 'IN' },
  ahmedabad: { name: 'Ahmedabad', state: 'Gujarat', region: 'IN' },
  jaipur: { name: 'Jaipur', state: 'Rajasthan', region: 'IN' },
  lucknow: { name: 'Lucknow', state: 'Uttar Pradesh', region: 'IN' },
  noida: { name: 'Noida', state: 'Uttar Pradesh', region: 'IN' },
  gurgaon: { name: 'Gurgaon', state: 'Haryana', region: 'IN' },
  surat: { name: 'Surat', state: 'Gujarat', region: 'IN' },
  indore: { name: 'Indore', state: 'Madhya Pradesh', region: 'IN' },
  chandigarh: { name: 'Chandigarh', state: 'Punjab/Haryana', region: 'IN' },
  kochi: { name: 'Kochi', state: 'Kerala', region: 'IN' },
  nagpur: { name: 'Nagpur', state: 'Maharashtra', region: 'IN' },
  bhopal: { name: 'Bhopal', state: 'Madhya Pradesh', region: 'IN' },
  visakhapatnam: { name: 'Visakhapatnam', state: 'Andhra Pradesh', region: 'IN' },
  coimbatore: { name: 'Coimbatore', state: 'Tamil Nadu', region: 'IN' },
  vadodara: { name: 'Vadodara', state: 'Gujarat', region: 'IN' },
  bhubaneswar: { name: 'Bhubaneswar', state: 'Odisha', region: 'IN' },
  thiruvananthapuram: { name: 'Thiruvananthapuram', state: 'Kerala', region: 'IN' },
  patna: { name: 'Patna', state: 'Bihar', region: 'IN' },
  ranchi: { name: 'Ranchi', state: 'Jharkhand', region: 'IN' },
  agra: { name: 'Agra', state: 'Uttar Pradesh', region: 'IN' },
  varanasi: { name: 'Varanasi', state: 'Uttar Pradesh', region: 'IN' },
  meerut: { name: 'Meerut', state: 'Uttar Pradesh', region: 'IN' },
  faridabad: { name: 'Faridabad', state: 'Haryana', region: 'IN' },
  amritsar: { name: 'Amritsar', state: 'Punjab', region: 'IN' },
  ludhiana: { name: 'Ludhiana', state: 'Punjab', region: 'IN' },
  jodhpur: { name: 'Jodhpur', state: 'Rajasthan', region: 'IN' },
  kota: { name: 'Kota', state: 'Rajasthan', region: 'IN' },
  udaipur: { name: 'Udaipur', state: 'Rajasthan', region: 'IN' },
  nashik: { name: 'Nashik', state: 'Maharashtra', region: 'IN' },
  thane: { name: 'Thane', state: 'Maharashtra', region: 'IN' },
  mysuru: { name: 'Mysuru', state: 'Karnataka', region: 'IN' },
  mangalore: { name: 'Mangalore', state: 'Karnataka', region: 'IN' },
  madurai: { name: 'Madurai', state: 'Tamil Nadu', region: 'IN' },
  vijayawada: { name: 'Vijayawada', state: 'Andhra Pradesh', region: 'IN' },
  warangal: { name: 'Warangal', state: 'Telangana', region: 'IN' },
  dehradun: { name: 'Dehradun', state: 'Uttarakhand', region: 'IN' },
  raipur: { name: 'Raipur', state: 'Chhattisgarh', region: 'IN' },
  guwahati: { name: 'Guwahati', state: 'Assam', region: 'IN' },
  kozhikode: { name: 'Kozhikode', state: 'Kerala', region: 'IN' },
  thrissur: { name: 'Thrissur', state: 'Kerala', region: 'IN' },
  siliguri: { name: 'Siliguri', state: 'West Bengal', region: 'IN' },
  jammu: { name: 'Jammu', state: 'Jammu & Kashmir', region: 'IN' },
  guntur: { name: 'Guntur', state: 'Andhra Pradesh', region: 'IN' },
  hubli: { name: 'Hubli', state: 'Karnataka', region: 'IN' },
  tiruchirappalli: { name: 'Tiruchirappalli', state: 'Tamil Nadu', region: 'IN' },
  'navi-mumbai': { name: 'Navi Mumbai', state: 'Maharashtra', region: 'IN' }
};

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const { lang, citySlug, itemSlug } = resolvedParams;

  const currentLang = (lang || 'en') as SupportedLanguage;
  const englishQuery = getEnglishQuery(itemSlug);
  const translatedItem = getTranslatedItem(englishQuery, currentLang);
  const city = CITIES[citySlug.toLowerCase()];
  
  if (!city) {
    return { title: 'Grocery Price Comparison' };
  }

  const displayName = englishQuery
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const cookieStore = await cookies();
  const region = city.region || (cookieStore.get('user-region')?.value as 'IN' | 'SG') || 'IN';
  const currencySymbol = region === 'SG' ? 'S$' : '₹';

  const result = await searchPrices(englishQuery, region);
  const sortedPrices = result?.prices
    ? [...result.prices].filter(p => p.price > 0 && p.inStock).sort((a, b) => a.price - b.price)
    : [];

  const lowestPrice = sortedPrices[0]?.price || 0;

  const translatedCityName = getTranslatedCity(citySlug, currentLang);
  const seo = getLocalizedCityItemSEO(
    translatedItem,
    translatedCityName,
    city.state,
    lowestPrice,
    currencySymbol,
    currentLang
  );

  const seoTitle = `${result?.icon || '🛒'} ${seo.title}`;
  const seoDesc = seo.description;

  return {
    title: seoTitle,
    description: seoDesc,
    keywords: `${displayName} price in ${city.name}, cheapest ${displayName} ${city.name}, blinkit ${displayName} ${city.name}, zepto ${displayName} ${city.name}, ${translatedItem} price ${city.name}`,
    alternates: {
      canonical: currentLang === 'en' ? `https://www.fantasticfood.in/city/${citySlug}/${itemSlug}` : `https://www.fantasticfood.in/${currentLang}/city/${citySlug}/${itemSlug}`,
      languages: {
        'en': `https://www.fantasticfood.in/city/${citySlug}/${itemSlug}`,
        'hi': `https://www.fantasticfood.in/hi/city/${citySlug}/${itemSlug}`,
        'bn': `https://www.fantasticfood.in/bn/city/${citySlug}/${itemSlug}`,
        'mr': `https://www.fantasticfood.in/mr/city/${citySlug}/${itemSlug}`,
        'te': `https://www.fantasticfood.in/te/city/${citySlug}/${itemSlug}`,
        'ta': `https://www.fantasticfood.in/ta/city/${citySlug}/${itemSlug}`,
        'zh-CN': `https://www.fantasticfood.in/zh-CN/city/${citySlug}/${itemSlug}`,
        'ms': `https://www.fantasticfood.in/ms/city/${citySlug}/${itemSlug}`,
        'x-default': `https://www.fantasticfood.in/city/${citySlug}/${itemSlug}`,
      },
    }
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const { lang, citySlug, itemSlug } = resolvedParams;
  const currentLang = (lang || 'en') as SupportedLanguage;
  const city = CITIES[citySlug.toLowerCase()];

  if (!city) {
    return (
      <div className="min-h-screen pt-32 text-center bg-cream-50">
        <h1 className="text-2xl font-bold text-forest-900">City Not Found</h1>
        <p className="text-forest-600 mt-4">We do not serve this city yet.</p>
        <Link href={`/${currentLang}/compare`} className="mt-8 inline-block text-forest-700 underline">View comparisons</Link>
      </div>
    );
  }

  const englishQuery = getEnglishQuery(itemSlug);
  const displayName = englishQuery
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const region = city.region || 'IN';
  const result = await searchPrices(englishQuery, region);
  const sortedPrices = result?.prices
    ? [...result.prices].filter(p => p.price > 0 && p.inStock).sort((a, b) => a.price - b.price)
    : [];

  const lowestPrice = sortedPrices[0]?.price || 0;

  const translatedCityName = getTranslatedCity(citySlug, currentLang);
  const translatedItem = getTranslatedItem(englishQuery, currentLang);
  const currencySymbol = region === 'SG' ? 'S$' : '₹';

  const seo = getLocalizedCityItemSEO(
    translatedItem,
    translatedCityName,
    city.state,
    lowestPrice,
    currencySymbol,
    currentLang
  );

  const faqData = getLocalizedFAQ(
    translatedItem,
    translatedCityName,
    lowestPrice,
    currencySymbol,
    region,
    currentLang
  );

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": `${translatedItem} in ${translatedCityName}`,
    "image": `https://www.fantasticfood.in/api/og?title=${encodeURIComponent(displayName)}`,
    "description": seo.description,
    "brand": {
      "@type": "Brand",
      "name": "Local Farms"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": region === 'SG' ? "SGD" : "INR",
      "lowPrice": lowestPrice || (region === 'SG' ? 2 : 50),
      "highPrice": result?.prices?.reduce((max: number, p: any) => Math.max(max, p.price), 0) || 100,
      "offerCount": result?.prices?.length || 7,
      "availability": "https://schema.org/InStock"
    }
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": faqData.q1,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faqData.a1
        }
      },
      {
        "@type": "Question",
        "name": faqData.q2,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faqData.a2
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-cream-50"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
        <CityItemPage />
      </Suspense>
    </>
  );
}
