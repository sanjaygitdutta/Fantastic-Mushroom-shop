import { Suspense } from 'react';
import MushroomShop from '../../../views/MushroomShop';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const canonical = lang === 'en'
    ? 'https://www.fantasticfood.in/mushroom-shop'
    : `https://www.fantasticfood.in/${lang}/mushroom-shop`;

  return {
    title: 'Fresh Mushrooms Delivered — Shop Global Varieties | Fantastic Food',
    description: 'Order premium Paddy Straw, Oyster, and Milky mushrooms. Farm-fresh quality delivered directly to your doorstep. Best prices guaranteed.',
    alternates: {
      canonical,
      languages: {
        'en': 'https://www.fantasticfood.in/mushroom-shop',
        'hi': 'https://www.fantasticfood.in/hi/mushroom-shop',
        'bn': 'https://www.fantasticfood.in/bn/mushroom-shop',
        'mr': 'https://www.fantasticfood.in/mr/mushroom-shop',
        'te': 'https://www.fantasticfood.in/te/mushroom-shop',
        'ta': 'https://www.fantasticfood.in/ta/mushroom-shop',
        'zh-CN': 'https://www.fantasticfood.in/zh-CN/mushroom-shop',
        'ms': 'https://www.fantasticfood.in/ms/mushroom-shop',
        'x-default': 'https://www.fantasticfood.in/mushroom-shop',
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <MushroomShop />
    </Suspense>
  );
}
