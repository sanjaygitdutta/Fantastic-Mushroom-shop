import Home from '../../views/Home';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return {
    alternates: {
      canonical: `https://www.fantasticfood.in/${lang}`,
      languages: {
        'en': `https://www.fantasticfood.in/en`,
        'hi': `https://www.fantasticfood.in/hi`,
        'bn': `https://www.fantasticfood.in/bn`,
        'mr': `https://www.fantasticfood.in/mr`,
        'te': `https://www.fantasticfood.in/te`,
        'ta': `https://www.fantasticfood.in/ta`,
        'x-default': `https://www.fantasticfood.in/en`,
      },
    },
  };
}

export default function Page() {
  return <Home />;
}
