import Home from '../../views/Home';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const canonical = lang === 'en' ? 'https://www.fantasticfood.in' : `https://www.fantasticfood.in/${lang}`;
  return {
    alternates: {
      canonical,
      languages: {
        'en': 'https://www.fantasticfood.in',
        'hi': 'https://www.fantasticfood.in/hi',
        'bn': 'https://www.fantasticfood.in/bn',
        'mr': 'https://www.fantasticfood.in/mr',
        'te': 'https://www.fantasticfood.in/te',
        'ta': 'https://www.fantasticfood.in/ta',
        'zh-CN': 'https://www.fantasticfood.in/zh-CN',
        'ms': 'https://www.fantasticfood.in/ms',
        'x-default': 'https://www.fantasticfood.in',
      },
    },
  };
}

export default function Page() {
  return <Home />;
}
