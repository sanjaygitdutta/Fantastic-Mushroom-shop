import { Suspense } from 'react';
import FAQ from '../../../views/FAQ';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  let title = 'Frequently Asked Questions (FAQ) | Fantastic Food';
  let description = 'Got questions about how we compare prices across Blinkit, Zepto, Swiggy, BigBasket & more? Find all answers in our FAQ.';

  const canonical = lang === 'en' 
    ? 'https://www.fantasticfood.in/faq' 
    : `https://www.fantasticfood.in/${lang}/faq`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'en': 'https://www.fantasticfood.in/faq',
        'hi': 'https://www.fantasticfood.in/hi/faq',
        'bn': 'https://www.fantasticfood.in/bn/faq',
        'mr': 'https://www.fantasticfood.in/mr/faq',
        'te': 'https://www.fantasticfood.in/te/faq',
        'ta': 'https://www.fantasticfood.in/ta/faq',
        'zh-CN': 'https://www.fantasticfood.in/zh-CN/faq',
        'ms': 'https://www.fantasticfood.in/ms/faq',
        'x-default': 'https://www.fantasticfood.in/faq',
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <FAQ />
    </Suspense>
  );
}
