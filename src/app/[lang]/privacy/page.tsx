import { Suspense } from 'react';
import PrivacyPolicy from '../../../views/PrivacyPolicy';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  let title = 'Privacy Policy | Fantastic Food';
  let description = 'Read the Privacy Policy for Fantastic Food. Learn how we handle and protect your personal information and browser data.';

  const canonical = lang === 'en' 
    ? 'https://www.fantasticfood.in/privacy' 
    : `https://www.fantasticfood.in/${lang}/privacy`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'en': 'https://www.fantasticfood.in/privacy',
        'hi': 'https://www.fantasticfood.in/hi/privacy',
        'bn': 'https://www.fantasticfood.in/bn/privacy',
        'mr': 'https://www.fantasticfood.in/mr/privacy',
        'te': 'https://www.fantasticfood.in/te/privacy',
        'ta': 'https://www.fantasticfood.in/ta/privacy',
        'zh-CN': 'https://www.fantasticfood.in/zh-CN/privacy',
        'ms': 'https://www.fantasticfood.in/ms/privacy',
        'x-default': 'https://www.fantasticfood.in/privacy',
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <PrivacyPolicy />
    </Suspense>
  );
}
