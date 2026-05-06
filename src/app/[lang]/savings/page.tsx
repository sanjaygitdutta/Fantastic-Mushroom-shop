import { Suspense } from 'react';
import FoodScore from '../../../views/FoodScore';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return {
    title: 'Grocery Savings Tracker — Monitor Your Spending & Save | Fantastic Food',
    description: 'Track how much you save using Fantastic Food. Analyze your shopping habits and find more ways to reduce your monthly grocery bill.',
    alternates: {
      canonical: `https://www.fantasticfood.in/${lang}/savings`,
      languages: {
        'en': `https://www.fantasticfood.in/en/savings`,
        'hi': `https://www.fantasticfood.in/hi/savings`,
        'bn': `https://www.fantasticfood.in/bn/savings`,
        'mr': `https://www.fantasticfood.in/mr/savings`,
        'te': `https://www.fantasticfood.in/te/savings`,
        'ta': `https://www.fantasticfood.in/ta/savings`,
        'x-default': `https://www.fantasticfood.in/en/savings`,
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <FoodScore />
    </Suspense>
  );
}
