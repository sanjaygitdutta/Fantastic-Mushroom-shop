import { Suspense } from 'react';
import MealCostCalculator from '../../../views/MealCostCalculator';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return {
    title: 'Meal Price Calculator — Calculate Your Recipe Cost | Fantastic Food',
    description: 'Enter your recipe ingredients and find out exactly how much your meal costs. Compare ingredient prices across Blinkit, Zepto, and BigBasket automatically.',
    alternates: {
      canonical: lang === 'en' ? 'https://www.fantasticfood.in/meal-calculator' : `https://www.fantasticfood.in/${lang}/meal-calculator`,
      languages: {
        'en': 'https://www.fantasticfood.in/meal-calculator',
        'hi': 'https://www.fantasticfood.in/hi/meal-calculator',
        'bn': 'https://www.fantasticfood.in/bn/meal-calculator',
        'mr': 'https://www.fantasticfood.in/mr/meal-calculator',
        'te': 'https://www.fantasticfood.in/te/meal-calculator',
        'ta': 'https://www.fantasticfood.in/ta/meal-calculator',
        'zh-CN': 'https://www.fantasticfood.in/zh-CN/meal-calculator',
        'ms': 'https://www.fantasticfood.in/ms/meal-calculator',
        'x-default': 'https://www.fantasticfood.in/meal-calculator',
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <MealCostCalculator />
    </Suspense>
  );
}
