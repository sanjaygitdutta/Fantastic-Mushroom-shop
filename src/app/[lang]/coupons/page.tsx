import { Suspense } from 'react';
import Coupons from '../../../views/Coupons';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return {
    title: 'Latest Grocery Coupons & Promo Codes — Blinkit, Zepto, BigBasket | Fantastic Food',
    description: 'Find the best working coupons and bank offers for Blinkit, Zepto, Swiggy Instamart, and BigBasket. Save more on every grocery order.',
    alternates: {
      canonical: lang === 'en' ? 'https://www.fantasticfood.in/coupons' : `https://www.fantasticfood.in/${lang}/coupons`,
      languages: {
        'en': 'https://www.fantasticfood.in/coupons',
        'hi': 'https://www.fantasticfood.in/hi/coupons',
        'bn': 'https://www.fantasticfood.in/bn/coupons',
        'mr': 'https://www.fantasticfood.in/mr/coupons',
        'te': 'https://www.fantasticfood.in/te/coupons',
        'ta': 'https://www.fantasticfood.in/ta/coupons',
        'zh-CN': 'https://www.fantasticfood.in/zh-CN/coupons',
        'ms': 'https://www.fantasticfood.in/ms/coupons',
        'x-default': 'https://www.fantasticfood.in/coupons',
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <Coupons />
    </Suspense>
  );
}
