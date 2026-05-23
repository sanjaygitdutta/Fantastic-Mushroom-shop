import { Suspense } from 'react';
import BasketCalculator from '../../../views/BasketCalculator';

export async function generateMetadata({ 
  params,
  searchParams 
}: { 
  params: Promise<{ lang: string }>,
  searchParams: Promise<{ prefill?: string }>
}) {
  const { lang } = await params;
  const { prefill } = await searchParams;
  const qStr = prefill ? `?prefill=${encodeURIComponent(prefill)}` : '';
  
  const canonical = lang === 'en'
    ? `https://www.fantasticfood.in/basket${qStr}`
    : `https://www.fantasticfood.in/${lang}/basket${qStr}`;

  return {
    title: 'Smart Basket Calculator — Save on Your Full Grocery List | Fantastic Food',
    description: 'Add your entire grocery list and find which app—Blinkit, Zepto, or BigBasket—is cheapest for your total basket. Save ₹100+ on every order.',
    alternates: {
      canonical,
      languages: {
        'en': `https://www.fantasticfood.in/basket${qStr}`,
        'hi': `https://www.fantasticfood.in/hi/basket${qStr}`,
        'bn': `https://www.fantasticfood.in/bn/basket${qStr}`,
        'mr': `https://www.fantasticfood.in/mr/basket${qStr}`,
        'te': `https://www.fantasticfood.in/te/basket${qStr}`,
        'ta': `https://www.fantasticfood.in/ta/basket${qStr}`,
        'zh-CN': `https://www.fantasticfood.in/zh-CN/basket${qStr}`,
        'ms': `https://www.fantasticfood.in/ms/basket${qStr}`,
        'x-default': `https://www.fantasticfood.in/basket${qStr}`,
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <BasketCalculator />
    </Suspense>
  );
}
