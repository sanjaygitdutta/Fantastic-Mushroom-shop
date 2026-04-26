import '../../index.css';
import { Providers } from '../providers';
import { Toaster } from 'react-hot-toast';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AIAssistant from '../../components/AIAssistant';

import Script from 'next/script';

export const metadata = {
  title: 'Fantastic Food | India\'s Smartest Grocery Price Comparator',
  description: 'Compare grocery prices across Blinkit, Zepto, Swiggy Instamart, BigBasket, Amazon Fresh, JioMart & Flipkart Minutes instantly. Find the cheapest deal on any food item in seconds.',
  keywords: 'grocery price comparison India, blinkit vs zepto, cheapest grocery app, food price comparison, blinkit zepto swiggy bigbasket prices, fantastic food',
  openGraph: {
    title: 'Fantastic Food | India\'s Smartest Grocery Price Comparator',
    description: 'Compare grocery prices across Blinkit, Zepto, Swiggy, BigBasket, Amazon Fresh, JioMart & Flipkart Minutes instantly. Save money on every order.',
    url: 'https://www.fantasticfood.in/',
    siteName: 'Fantastic Food',
    images: [
      {
        url: 'https://www.fantasticfood.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fantastic Food — Compare grocery prices across 7 apps',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fantasticfoodin',
    title: 'Fantastic Food | Compare Grocery Prices in India',
    description: 'Compare Blinkit, Zepto, Swiggy, BigBasket, Amazon Fresh, JioMart & Flipkart Minutes prices instantly. Find the cheapest grocery deal!',
    images: ['https://www.fantasticfood.in/og-image.jpg'],
  },
  verification: {
    google: 'yCwjAf_s2oqIMDIzlBtIPj671YFoitNF01dM-zP-Zv0',
  },
  alternates: {
    canonical: 'https://www.fantasticfood.in/',
  },
};

// Required for Next.js static generation of dynamic routes
export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'hi' },
    { lang: 'bn' },
    { lang: 'mr' },
    { lang: 'te' },
    { lang: 'ta' },
  ];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={`${lang}-IN`}>
      <body>
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QLDLDN52KB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QLDLDN52KB', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `}
        </Script>

        {/* Website + SearchAction JSON-LD */}
        <Script
          id="structured-data-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Fantastic Food",
              "alternateName": "Fantastic Food India",
              "url": "https://www.fantasticfood.in",
              "description": "India's smartest grocery price comparator. Compare prices across Blinkit, Zepto, Swiggy Instamart, BigBasket, Amazon Fresh, JioMart and Flipkart Minutes in real-time.",
              "inLanguage": "en-IN",
              "publisher": {
                "@type": "Organization",
                "name": "Fantastic Food",
                "url": "https://www.fantasticfood.in",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.fantasticfood.in/logo.png",
                  "width": 200,
                  "height": 200
                },
                "sameAs": [
                  "https://www.instagram.com/fantasticfoodin",
                  "https://twitter.com/fantasticfoodin"
                ]
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.fantasticfood.in/compare?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Organization JSON-LD */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Fantastic Food",
              "url": "https://www.fantasticfood.in",
              "logo": "https://www.fantasticfood.in/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"]
              },
              "areaServed": "IN",
              "description": "Grocery price comparison platform for India covering Blinkit, Zepto, Swiggy Instamart, BigBasket, Amazon Fresh, JioMart and Flipkart Minutes."
            })
          }}
        />

        {/* Cuelinks Affiliate Monetization */}
        <Script id="cuelinks-config" strategy="afterInteractive">
          {`window.cl_pub = '';`}
        </Script>
        <Script 
          src="https://cdn.cuelinks.com/js/cuelinksmacro_v2.js" 
          strategy="lazyOnload" 
        />
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Toaster position="top-center" />
            <Navbar />
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
            <AIAssistant />
          </div>
        </Providers>
      </body>
    </html>
  );
}
