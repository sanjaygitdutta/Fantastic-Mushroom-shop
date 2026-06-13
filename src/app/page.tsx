import '../index.css';
import Home from '../views/Home';
import { Providers } from './providers';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';
import ReferralTracker from '../components/ReferralTracker';
import GoogleAnalytics from '../components/GoogleAnalytics';
import Script from 'next/script';

const AIAssistant = dynamic(() => import('../components/AIAssistant'));

export async function generateMetadata() {
  return {
    title: "Save ₹500+/Week on Groceries | Compare Blinkit vs Zepto vs BigBasket vs More Live",
    description: "India's #1 grocery price comparator. Compare 7,000+ items across Blinkit, Zepto, BigBasket, Swiggy, Amazon Fresh & More in 2 seconds. Find cheaper save more. Free. Check now →",
    alternates: {
      canonical: "https://www.fantasticfood.in",
      languages: {
        'en': "https://www.fantasticfood.in",
        'hi': "https://www.fantasticfood.in/hi",
        'bn': "https://www.fantasticfood.in/bn",
        'mr': "https://www.fantasticfood.in/mr",
        'te': "https://www.fantasticfood.in/te",
        'ta': "https://www.fantasticfood.in/ta",
        'zh-CN': "https://www.fantasticfood.in/zh-CN",
        'ms': "https://www.fantasticfood.in/ms",
        'x-default': "https://www.fantasticfood.in",
      },
    },
  };
}

export default function Page() {
  return (
    <>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-QLDLDN52KB" />
      <Providers>
        <div className="min-h-screen flex flex-col max-w-full overflow-x-hidden">
          <Toaster position="top-center" />
          <Navbar />
          <main className="grow">
            <Home />
          </main>
          <Footer />
          <AIAssistant />
          <ReferralTracker />
        </div>
      </Providers>
    </>
  );
}
