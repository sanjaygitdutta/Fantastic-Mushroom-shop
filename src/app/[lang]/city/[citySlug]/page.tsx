import { Suspense } from 'react';
import CityPage from '../../../../views/CityPage';
import { getTranslatedCity, getLocalizedCitySEO, type SupportedLanguage } from '../../../../i18n/dictionary';

export async function generateMetadata({ params }: { params: Promise<{ lang: string; citySlug: string }> }) {
  const { lang, citySlug } = await params;
  const currentLang = (lang || 'en') as SupportedLanguage;

  const cityName = getTranslatedCity(citySlug, currentLang);
  const seo = getLocalizedCitySEO(cityName, currentLang);

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: currentLang === 'en' ? `https://www.fantasticfood.in/city/${citySlug}` : `https://www.fantasticfood.in/${currentLang}/city/${citySlug}`,
      languages: {
        'en': `https://www.fantasticfood.in/city/${citySlug}`,
        'hi': `https://www.fantasticfood.in/hi/city/${citySlug}`,
        'bn': `https://www.fantasticfood.in/bn/city/${citySlug}`,
        'mr': `https://www.fantasticfood.in/mr/city/${citySlug}`,
        'te': `https://www.fantasticfood.in/te/city/${citySlug}`,
        'ta': `https://www.fantasticfood.in/ta/city/${citySlug}`,
        'zh-CN': `https://www.fantasticfood.in/zh-CN/city/${citySlug}`,
        'ms': `https://www.fantasticfood.in/ms/city/${citySlug}`,
        'x-default': `https://www.fantasticfood.in/city/${citySlug}`,
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <CityPage />
    </Suspense>
  );
}
