import { Suspense } from 'react';
import CommunityFeed from '../../../views/CommunityFeed';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return {
    title: 'Fantastic Food Community — Share Tips & Save Together | Fantastic Food',
    description: 'Join thousands of smart shoppers. Share grocery deals, recipe hacks, and price alerts with the community. Save more, together.',
    alternates: {
      canonical: `https://www.fantasticfood.in/${lang}/community`,
      languages: {
        'en': `https://www.fantasticfood.in/en/community`,
        'hi': `https://www.fantasticfood.in/hi/community`,
        'bn': `https://www.fantasticfood.in/bn/community`,
        'mr': `https://www.fantasticfood.in/mr/community`,
        'te': `https://www.fantasticfood.in/te/community`,
        'ta': `https://www.fantasticfood.in/ta/community`,
        'x-default': `https://www.fantasticfood.in/en/community`,
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <CommunityFeed />
    </Suspense>
  );
}
