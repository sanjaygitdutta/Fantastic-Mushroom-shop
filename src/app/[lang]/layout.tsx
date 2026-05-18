import '../../index.css';
import { Providers } from '../providers';
import { Toaster } from 'react-hot-toast';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Inter, Outfit } from 'next/font/google';
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });

const AIAssistant = dynamic(() => import('../../components/AIAssistant'));
import ReferralTracker from '../../components/ReferralTracker';

import Script from 'next/script';

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || 'en';

  let title = 'Save ₹500+/Week on Groceries | Compare Blinkit vs Zepto vs BigBasket vs More Live';
  let description = 'India\'s #1 grocery price comparator. Compare 7,000+ items across Blinkit, Zepto, BigBasket, Swiggy, Amazon Fresh & More in 2 seconds. Find cheaper save more. Free. Check now →';

  if (lang === 'hi') {
    title = 'किराने पर ₹500+/सप्ताह बचाएं | ब्लिंकिट vs ज़ेप्टो vs बिगबास्केट लाइव कीमतें';
    description = 'भारत का #1 किराना मूल्य तुलनित्र। 2 सेकंड में ब्लिंकिट, ज़ेप्टो और अधिक पर 7,000+ वस्तुओं की तुलना करें।';
  } else if (lang === 'bn') {
    title = 'মুদিতে ₹500+/সপ্তাহ বাঁচান | ব্লিংকিট বনাম জেপ্টো বনাম বিগবাস্কেট লাইভ দাম';
    description = 'ভারতের #1 মুদি দামের তুলনাকারী। ২ সেকেন্ডে 7,000+ আইটেম তুলনা করুন।';
  } else if (lang === 'mr') {
    title = 'किराण्यावर ₹500+/आठवडा वाचवा | ब्लिंकिट वि झेप्टो वि बिगबास्केट लाईव्ह';
    description = 'भारतातील #1 किराणा भाव तुलना करणारा. २ सेकंदात 7,000+ वस्तूंची तुलना करा.';
  } else if (lang === 'te') {
    title = 'కిరాణాపై ₹500+/వారం ఆదా చేయండి | బ్లింకిట్ vs జెప్టో vs బిగ్‌బాస్కెట్ లైవ్';
    description = 'భారతదేశపు #1 కిరాణా ధరల పోలిక యాప్. 2 సెకన్లలో 7,000+ వస్తువులను సరిపోల్చండి.';
  } else if (lang === 'ta') {
    title = 'மளிகையில் ₹500+/வாரம் சேமிக்கவும் | பிளிங்கிட் vs செப்டோ vs பிக்பாஸ்கெட் லைவ்';
    description = 'இந்தியாவின் #1 மளிகை விலை ஒப்பீட்டாளர். 2 வினாடிகளில் 7,000+ பொருட்களை ஒப்பிடுங்கள்.';
  }

  // We are currently in layout.tsx, but Next.js metadata doesn't have easy access 
  // to the path here. However, for the ROOT layout, it's safer to not have a 
  // conflicting canonical if child pages (like food/[item]) provide their own.
  // We will keep the home page canonical ONLY for the home page.
  
  return {
    title,
    description,
    keywords: 'grocery price comparison India, blinkit vs zepto, cheapest grocery app, food price comparison, blinkit zepto swiggy bigbasket prices, fantastic food',
    openGraph: {
      title,
      description,
      url: `https://www.fantasticfood.in/${lang}`,
      siteName: 'Fantastic Food',
      images: [
        {
          url: 'https://www.fantasticfood.in/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Fantastic Food — Compare grocery prices across 7 apps',
        },
      ],
      locale: lang === 'en' ? 'en_IN' : `${lang}_IN`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@fantasticfoodin',
      title,
      description,
      images: ['https://www.fantasticfood.in/og-image.jpg'],
    },
    verification: {
      google: 'yCwjAf_s2oqIMDIzlBtIPj671YFoitNF01dM-zP-Zv0',
    },
    // IMPORTANT: Removing the hardcoded global canonical from Root Layout.
    // Each page component (Home, Food, City, Blog) MUST provide its own 
    // specific canonical to avoid the "Duplicate without user-selected canonical" error.
    alternates: {
      languages: {
        'en': `https://www.fantasticfood.in/en`,
        'hi': `https://www.fantasticfood.in/hi`,
        'bn': `https://www.fantasticfood.in/bn`,
        'mr': `https://www.fantasticfood.in/mr`,
        'te': `https://www.fantasticfood.in/te`,
        'ta': `https://www.fantasticfood.in/ta`,
        'zh-CN': `https://www.fantasticfood.in/zh-CN`,
        'ms': `https://www.fantasticfood.in/ms`,
        'x-default': `https://www.fantasticfood.in/en`,
      },
    },
  };
}

// Enable ISR (Incremental Static Regeneration) to ensure content is always fresh but fast
export const revalidate = 60;

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
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
    { lang: 'zh-CN' },
    { lang: 'ms' },
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
    <html lang={`${lang}-IN`} className={`${inter.variable} ${outfit.variable}`}>
      <body>
        {/* Force Unregister Old Vite PWA Service Workers */}
        <Script id="unregister-sw" strategy="beforeInteractive">
          {`
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.getRegistrations().then(function(registrations) {
                for(let registration of registrations) {
                  registration.unregister().then(function(success) {
                    if (success) {
                      console.log('Successfully unregistered old service worker. Forcing reload for fresh content.');
                      window.location.reload(true);
                    }
                  });
                }
              });
            }
          `}
        </Script>

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

        {/* Grow by Mediavine Integration (Baked directly into HTML so crawlers can instantly see it) */}
        {process.env.NEXT_PUBLIC_GROW_SITE_ID && process.env.NEXT_PUBLIC_GROW_SITE_ID !== 'YOUR_GROW_SITE_ID' && (
          <script
            data-grow-initializer=""
            dangerouslySetInnerHTML={{
              __html: `!(function(){window.growMe||((window.growMe=function(e){window.growMe._push(e);}),(window.growMe._=[]));var e=document.createElement("script");(e.type="text/javascript"),(e.src="https://faves.grow.me/main.js"),(e.defer=!0),e.setAttribute("data-grow-faves-site-id","${process.env.NEXT_PUBLIC_GROW_SITE_ID}");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);})();`
            }}
          />
        )}

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
          <div className="min-h-screen flex flex-col max-w-full overflow-x-hidden">
            <Toaster position="top-center" />
            <Navbar />
            <div className="grow">
              {children}
            </div>
            <Footer />
            <AIAssistant />
            <ReferralTracker />
          </div>
        </Providers>
      </body>
    </html>
  );
}
