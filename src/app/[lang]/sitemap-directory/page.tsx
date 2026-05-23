import { Suspense } from 'react';
import SitemapDirectory from '../../../views/SitemapDirectory';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  let title = 'Sitemap Directory — Explore All Pages | Fantastic Food';
  let description = 'Navigate through our entire sitemap catalog of grocery comparisons, cities, ingredients, and expert culinary recipes.';

  const canonical = lang === 'en' 
    ? 'https://www.fantasticfood.in/sitemap-directory' 
    : `https://www.fantasticfood.in/${lang}/sitemap-directory`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'en': 'https://www.fantasticfood.in/sitemap-directory',
        'hi': 'https://www.fantasticfood.in/hi/sitemap-directory',
        'bn': 'https://www.fantasticfood.in/bn/sitemap-directory',
        'mr': 'https://www.fantasticfood.in/mr/sitemap-directory',
        'te': 'https://www.fantasticfood.in/te/sitemap-directory',
        'ta': 'https://www.fantasticfood.in/ta/sitemap-directory',
        'zh-CN': 'https://www.fantasticfood.in/zh-CN/sitemap-directory',
        'ms': 'https://www.fantasticfood.in/ms/sitemap-directory',
        'x-default': 'https://www.fantasticfood.in/sitemap-directory',
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <SitemapDirectory />
    </Suspense>
  );
}
