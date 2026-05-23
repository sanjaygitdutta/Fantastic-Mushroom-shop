import { Suspense } from 'react';
import NutritionInfo from '../../../views/NutritionInfo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  let title = 'Nutrition Scanner & Food Calculator | Fantastic Food';
  let description = 'Check detailed nutrition facts, food ingredients, health scores, and allergens. Powered by AI to help you eat healthier and spend less.';

  const canonical = lang === 'en' 
    ? 'https://www.fantasticfood.in/nutrition' 
    : `https://www.fantasticfood.in/${lang}/nutrition`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'en': 'https://www.fantasticfood.in/nutrition',
        'hi': 'https://www.fantasticfood.in/hi/nutrition',
        'bn': 'https://www.fantasticfood.in/bn/nutrition',
        'mr': 'https://www.fantasticfood.in/mr/nutrition',
        'te': 'https://www.fantasticfood.in/te/nutrition',
        'ta': 'https://www.fantasticfood.in/ta/nutrition',
        'zh-CN': 'https://www.fantasticfood.in/zh-CN/nutrition',
        'ms': 'https://www.fantasticfood.in/ms/nutrition',
        'x-default': 'https://www.fantasticfood.in/nutrition',
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
