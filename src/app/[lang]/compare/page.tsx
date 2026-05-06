import { Suspense } from 'react';
import Compare from '../../../views/Compare';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return {
    title: 'Live Grocery Price Comparison — 7 Apps | Fantastic Food',
    description: 'Compare real-time prices for 7,000+ grocery items across Blinkit, Zepto, Swiggy Instamart, BigBasket, Amazon Fresh, JioMart and Flipkart Minutes.',
    alternates: {
      canonical: `https://www.fantasticfood.in/${lang}/compare`,
      languages: {
        'en': `https://www.fantasticfood.in/en/compare`,
        'hi': `https://www.fantasticfood.in/hi/compare`,
        'bn': `https://www.fantasticfood.in/bn/compare`,
        'mr': `https://www.fantasticfood.in/mr/compare`,
        'te': `https://www.fantasticfood.in/te/compare`,
        'ta': `https://www.fantasticfood.in/ta/compare`,
        'x-default': `https://www.fantasticfood.in/en/compare`,
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <Compare />
    </Suspense>
  );
}
