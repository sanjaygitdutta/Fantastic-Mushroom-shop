import { Suspense } from 'react';
import TermsOfService from '../../../views/TermsOfService';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  let title = 'Terms of Service | Fantastic Food';
  let description = 'Read the Terms of Service for Fantastic Food. By accessing our grocery price comparison site, you agree to these terms.';

  const canonical = lang === 'en' 
    ? 'https://www.fantasticfood.in/terms' 
    : `https://www.fantasticfood.in/${lang}/terms`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'en': 'https://www.fantasticfood.in/terms',
        'hi': 'https://www.fantasticfood.in/hi/terms',
        'bn': 'https://www.fantasticfood.in/bn/terms',
        'mr': 'https://www.fantasticfood.in/mr/terms',
        'te': 'https://www.fantasticfood.in/te/terms',
        'ta': 'https://www.fantasticfood.in/ta/terms',
        'zh-CN': 'https://www.fantasticfood.in/zh-CN/terms',
        'ms': 'https://www.fantasticfood.in/ms/terms',
        'x-default': 'https://www.fantasticfood.in/terms',
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <TermsOfService />
    </Suspense>
  );
}
