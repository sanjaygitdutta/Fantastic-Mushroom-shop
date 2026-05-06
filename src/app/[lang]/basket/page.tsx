import { Suspense } from 'react';
import BasketCalculator from '../../../views/BasketCalculator';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return {
    title: 'Smart Basket Calculator — Save on Your Full Grocery List | Fantastic Food',
    description: 'Add your entire grocery list and find which app—Blinkit, Zepto, or BigBasket—is cheapest for your total basket. Save ₹100+ on every order.',
    alternates: {
      canonical: `https://www.fantasticfood.in/${lang}/basket`,
      languages: {
        'en': `https://www.fantasticfood.in/en/basket`,
        'hi': `https://www.fantasticfood.in/hi/basket`,
        'bn': `https://www.fantasticfood.in/bn/basket`,
        'mr': `https://www.fantasticfood.in/mr/basket`,
        'te': `https://www.fantasticfood.in/te/basket`,
        'ta': `https://www.fantasticfood.in/ta/basket`,
        'x-default': `https://www.fantasticfood.in/en/basket`,
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
