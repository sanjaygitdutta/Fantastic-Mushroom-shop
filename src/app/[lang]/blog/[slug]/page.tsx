import { Suspense } from 'react';
import BlogPost from '../../../../views/BlogPost';

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const title = slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: `${title} | Fantastic Food Blog`,
    description: `Read about ${title} on Fantastic Food — India's grocery price comparison platform.`,
    alternates: {
      canonical: `https://www.fantasticfood.in/${lang}/blog/${slug}`,
      languages: {
        'en': `https://www.fantasticfood.in/en/blog/${slug}`,
        'hi': `https://www.fantasticfood.in/hi/blog/${slug}`,
        'bn': `https://www.fantasticfood.in/bn/blog/${slug}`,
        'mr': `https://www.fantasticfood.in/mr/blog/${slug}`,
        'te': `https://www.fantasticfood.in/te/blog/${slug}`,
        'ta': `https://www.fantasticfood.in/ta/blog/${slug}`,
        'x-default': `https://www.fantasticfood.in/en/blog/${slug}`,
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <BlogPost />
    </Suspense>
  );
}
