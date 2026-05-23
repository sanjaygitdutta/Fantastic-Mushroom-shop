import { Suspense } from 'react';
import Compare from '../../../views/Compare';

export async function generateMetadata({ 
  params,
  searchParams 
}: { 
  params: Promise<{ lang: string }>,
  searchParams: Promise<{ q?: string }>
}) {
  const { lang } = await params;
  const { q } = await searchParams;
  const qStr = q ? `?q=${encodeURIComponent(q)}` : '';
  
  const canonical = lang === 'en'
    ? `https://www.fantasticfood.in/compare${qStr}`
    : `https://www.fantasticfood.in/${lang}/compare${qStr}`;

  return {
    title: q ? `${q.charAt(0).toUpperCase() + q.slice(1)} Prices — Compare Blinkit, Zepto & More | Fantastic Food` : 'Live Grocery Price Comparison — 7 Apps | Fantastic Food',
    description: 'Compare real-time prices for 7,000+ grocery items across Blinkit, Zepto, Swiggy Instamart, BigBasket, Amazon Fresh, JioMart and Flipkart Minutes.',
    alternates: {
      canonical,
      languages: {
        'en': `https://www.fantasticfood.in/compare${qStr}`,
        'hi': `https://www.fantasticfood.in/hi/compare${qStr}`,
        'bn': `https://www.fantasticfood.in/bn/compare${qStr}`,
        'mr': `https://www.fantasticfood.in/mr/compare${qStr}`,
        'te': `https://www.fantasticfood.in/te/compare${qStr}`,
        'ta': `https://www.fantasticfood.in/ta/compare${qStr}`,
        'zh-CN': `https://www.fantasticfood.in/zh-CN/compare${qStr}`,
        'ms': `https://www.fantasticfood.in/ms/compare${qStr}`,
        'x-default': `https://www.fantasticfood.in/compare${qStr}`,
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
