import { Suspense } from 'react';
import ChefAika from '../../../views/ChefAika';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const canonical = lang === 'en'
    ? 'https://www.fantasticfood.in/chef-aika'
    : `https://www.fantasticfood.in/${lang}/chef-aika`;

  return {
    title: 'Chef Aika — AI Personalized Recipe Assistant | Fantastic Food',
    description: 'Ask Chef Aika anything! Get personalized recipe ideas based on the ingredients you have or your dietary preferences. Michelin-star AI at your service.',
    alternates: {
      canonical,
      languages: {
        'en': 'https://www.fantasticfood.in/chef-aika',
        'hi': 'https://www.fantasticfood.in/hi/chef-aika',
        'bn': 'https://www.fantasticfood.in/bn/chef-aika',
        'mr': 'https://www.fantasticfood.in/mr/chef-aika',
        'te': 'https://www.fantasticfood.in/te/chef-aika',
        'ta': 'https://www.fantasticfood.in/ta/chef-aika',
        'zh-CN': 'https://www.fantasticfood.in/zh-CN/chef-aika',
        'ms': 'https://www.fantasticfood.in/ms/chef-aika',
        'x-default': 'https://www.fantasticfood.in/chef-aika',
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <ChefAika />
    </Suspense>
  );
}
