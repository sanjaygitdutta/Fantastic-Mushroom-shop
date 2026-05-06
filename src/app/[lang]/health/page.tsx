import { Suspense } from 'react';
import NutritionInfo from '../../../views/NutritionInfo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return {
    title: 'Grocery Health Guide — Eat Better for Less | Fantastic Food',
    description: 'Discover the nutritional value of common grocery items. Learn how to shop for a healthier lifestyle while staying within your budget.',
    alternates: {
      canonical: `https://www.fantasticfood.in/${lang}/health`,
      languages: {
        'en': `https://www.fantasticfood.in/en/health`,
        'hi': `https://www.fantasticfood.in/hi/health`,
        'bn': `https://www.fantasticfood.in/bn/health`,
        'mr': `https://www.fantasticfood.in/mr/health`,
        'te': `https://www.fantasticfood.in/te/health`,
        'ta': `https://www.fantasticfood.in/ta/health`,
        'x-default': `https://www.fantasticfood.in/en/health`,
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <NutritionInfo />
    </Suspense>
  );
}
