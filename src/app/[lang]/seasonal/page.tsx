import { Suspense } from 'react';
import SeasonalGuide from '../../../views/SeasonalGuide';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return {
    title: 'Seasonal Produce Guide — What to Buy & When | Fantastic Food',
    description: 'Find out which fruits and vegetables are in season right now in India. Get better quality and lower prices by shopping seasonally.',
    alternates: {
      canonical: `https://www.fantasticfood.in/${lang}/seasonal`,
      languages: {
        'en': `https://www.fantasticfood.in/en/seasonal`,
        'hi': `https://www.fantasticfood.in/hi/seasonal`,
        'bn': `https://www.fantasticfood.in/bn/seasonal`,
        'mr': `https://www.fantasticfood.in/mr/seasonal`,
        'te': `https://www.fantasticfood.in/te/seasonal`,
        'ta': `https://www.fantasticfood.in/ta/seasonal`,
        'x-default': `https://www.fantasticfood.in/en/seasonal`,
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <SeasonalGuide />
    </Suspense>
  );
}
