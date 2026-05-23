import { Suspense } from 'react';
import FestivalPlanner from '../../../views/FestivalPlanner';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  let title = 'Festival Grocery Budget Planner | Fantastic Food';
  let description = 'Plan your festival meals and grocery lists. Compare ingredients across Blinkit, Zepto, and BigBasket to lock in the lowest prices for your celebrations.';

  const canonical = lang === 'en' 
    ? 'https://www.fantasticfood.in/festival' 
    : `https://www.fantasticfood.in/${lang}/festival`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'en': 'https://www.fantasticfood.in/festival',
        'hi': 'https://www.fantasticfood.in/hi/festival',
        'bn': 'https://www.fantasticfood.in/bn/festival',
        'mr': 'https://www.fantasticfood.in/mr/festival',
        'te': 'https://www.fantasticfood.in/te/festival',
        'ta': 'https://www.fantasticfood.in/ta/festival',
        'zh-CN': 'https://www.fantasticfood.in/zh-CN/festival',
        'ms': 'https://www.fantasticfood.in/ms/festival',
        'x-default': 'https://www.fantasticfood.in/festival',
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <FestivalPlanner />
    </Suspense>
  );
}
