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
  
  const canonicalUrl = q 
    ? `https://www.fantasticfood.in/${lang}/compare?q=${encodeURIComponent(q)}`
    : `https://www.fantasticfood.in/${lang}/compare`;

  return {
    title: q ? `${q.charAt(0).toUpperCase() + q.slice(1)} Prices — Compare Blinkit, Zepto & More | Fantastic Food` : 'Live Grocery Price Comparison — 7 Apps | Fantastic Food',
    description: 'Compare real-time prices for 7,000+ grocery items across Blinkit, Zepto, Swiggy Instamart, BigBasket, Amazon Fresh, JioMart and Flipkart Minutes.',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `https://www.fantasticfood.in/en/compare${q ? `?q=${encodeURIComponent(q)}` : ''}`,
        'hi': `https://www.fantasticfood.in/hi/compare${q ? `?q=${encodeURIComponent(q)}` : ''}`,
        'bn': `https://www.fantasticfood.in/bn/compare${q ? `?q=${encodeURIComponent(q)}` : ''}`,
        'mr': `https://www.fantasticfood.in/mr/compare${q ? `?q=${encodeURIComponent(q)}` : ''}`,
        'te': `https://www.fantasticfood.in/te/compare${q ? `?q=${encodeURIComponent(q)}` : ''}`,
        'ta': `https://www.fantasticfood.in/ta/compare${q ? `?q=${encodeURIComponent(q)}` : ''}`,
        'x-default': `https://www.fantasticfood.in/en/compare${q ? `?q=${encodeURIComponent(q)}` : ''}`,
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
