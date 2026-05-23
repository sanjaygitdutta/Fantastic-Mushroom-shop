import { Suspense } from 'react';
import Disclaimer from '../../../views/Disclaimer';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  let title = 'Disclaimer | Fantastic Food';
  let description = 'Read the terms, data sources, and legal disclaimers for Fantastic Food grocery price comparator.';

  const canonical = lang === 'en' 
    ? 'https://www.fantasticfood.in/disclaimer' 
    : `https://www.fantasticfood.in/${lang}/disclaimer`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'en': 'https://www.fantasticfood.in/disclaimer',
        'hi': 'https://www.fantasticfood.in/hi/disclaimer',
        'bn': 'https://www.fantasticfood.in/bn/disclaimer',
        'mr': 'https://www.fantasticfood.in/mr/disclaimer',
        'te': 'https://www.fantasticfood.in/te/disclaimer',
        'ta': 'https://www.fantasticfood.in/ta/disclaimer',
        'zh-CN': 'https://www.fantasticfood.in/zh-CN/disclaimer',
        'ms': 'https://www.fantasticfood.in/ms/disclaimer',
        'x-default': 'https://www.fantasticfood.in/disclaimer',
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <Disclaimer />
    </Suspense>
  );
}
