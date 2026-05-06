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
  
  const canonicalUrl = prefill 
    ? `https://www.fantasticfood.in/${lang}/basket?prefill=${encodeURIComponent(prefill)}`
    : `https://www.fantasticfood.in/${lang}/basket`;

  return {
    title: 'Smart Basket Calculator — Save on Your Full Grocery List | Fantastic Food',
    description: 'Add your entire grocery list and find which app—Blinkit, Zepto, or BigBasket—is cheapest for your total basket. Save ₹100+ on every order.',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `https://www.fantasticfood.in/en/basket${prefill ? `?prefill=${encodeURIComponent(prefill)}` : ''}`,
        'hi': `https://www.fantasticfood.in/hi/basket${prefill ? `?prefill=${encodeURIComponent(prefill)}` : ''}`,
        'bn': `https://www.fantasticfood.in/bn/basket${prefill ? `?prefill=${encodeURIComponent(prefill)}` : ''}`,
        'mr': `https://www.fantasticfood.in/mr/basket${prefill ? `?prefill=${encodeURIComponent(prefill)}` : ''}`,
        'te': `https://www.fantasticfood.in/te/basket${prefill ? `?prefill=${encodeURIComponent(prefill)}` : ''}`,
        'ta': `https://www.fantasticfood.in/ta/basket${prefill ? `?prefill=${encodeURIComponent(prefill)}` : ''}`,
        'x-default': `https://www.fantasticfood.in/en/basket${prefill ? `?prefill=${encodeURIComponent(prefill)}` : ''}`,
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
