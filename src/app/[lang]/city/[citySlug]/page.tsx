import { Suspense } from 'react';
import CityPage from '../../../../views/CityPage';

export async function generateMetadata({ params }: { params: Promise<{ lang: string; citySlug: string }> }) {
  const { lang, citySlug } = await params;
  const cityName = citySlug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: `${cityName} Grocery Prices — Compare Blinkit vs Zepto vs BigBasket | Fantastic Food`,
    description: `Compare live grocery prices in ${cityName} across Blinkit, Zepto, BigBasket, Swiggy Instamart, Amazon Fresh, JioMart & Flipkart Minutes. Find the cheapest deals today.`,
    alternates: {
      canonical: `https://www.fantasticfood.in/${lang}/city/${citySlug}`,
      languages: {
        'en': `https://www.fantasticfood.in/en/city/${citySlug}`,
        'hi': `https://www.fantasticfood.in/hi/city/${citySlug}`,
        'bn': `https://www.fantasticfood.in/bn/city/${citySlug}`,
        'mr': `https://www.fantasticfood.in/mr/city/${citySlug}`,
        'te': `https://www.fantasticfood.in/te/city/${citySlug}`,
        'ta': `https://www.fantasticfood.in/ta/city/${citySlug}`,
        'x-default': `https://www.fantasticfood.in/en/city/${citySlug}`,
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <CityPage />
    </Suspense>
  );
}
