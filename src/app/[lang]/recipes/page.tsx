import { Suspense } from 'react';
import Recipes from '../../../views/Recipes';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const canonical = lang === 'en'
    ? 'https://www.fantasticfood.in/recipes'
    : `https://www.fantasticfood.in/${lang}/recipes`;

  return {
    title: 'World Recipes — Discover 200+ Professional Cuisines | Fantastic Food',
    description: 'Explore Michelin-star quality recipes from around the world. Step-by-step instructions for authentic dishes across 20 global cuisines.',
    alternates: {
      canonical,
      languages: {
        'en': 'https://www.fantasticfood.in/recipes',
        'hi': 'https://www.fantasticfood.in/hi/recipes',
        'bn': 'https://www.fantasticfood.in/bn/recipes',
        'mr': 'https://www.fantasticfood.in/mr/recipes',
        'te': 'https://www.fantasticfood.in/te/recipes',
        'ta': 'https://www.fantasticfood.in/ta/recipes',
        'zh-CN': 'https://www.fantasticfood.in/zh-CN/recipes',
        'ms': 'https://www.fantasticfood.in/ms/recipes',
        'x-default': 'https://www.fantasticfood.in/recipes',
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <Recipes />
    </Suspense>
  );
}
