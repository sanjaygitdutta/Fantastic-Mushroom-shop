import { Suspense } from 'react';
import MealPlanner from '../../../views/MealPlanner';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return {
    title: 'Smart Weekly Meal Planner — Optimize Your Grocery Budget | Fantastic Food',
    description: 'Plan your meals for the week and automatically get the cheapest shopping list across Blinkit, Zepto, and BigBasket. Save time and money.',
    alternates: {
      canonical: `https://www.fantasticfood.in/${lang}/meal-planner`,
      languages: {
        'en': `https://www.fantasticfood.in/en/meal-planner`,
        'hi': `https://www.fantasticfood.in/hi/meal-planner`,
        'bn': `https://www.fantasticfood.in/bn/meal-planner`,
        'mr': `https://www.fantasticfood.in/mr/meal-planner`,
        'te': `https://www.fantasticfood.in/te/meal-planner`,
        'ta': `https://www.fantasticfood.in/ta/meal-planner`,
        'x-default': `https://www.fantasticfood.in/en/meal-planner`,
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <MealPlanner />
    </Suspense>
  );
}
