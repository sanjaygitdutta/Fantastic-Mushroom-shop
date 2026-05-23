import '../index.css';
import { Providers } from './providers';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Inter, Outfit } from 'next/font/google';
import GoogleAnalytics from '../components/GoogleAnalytics';
import ReferralTracker from '../components/ReferralTracker';
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });

const AIAssistant = dynamic(() => import('../components/AIAssistant'));

type Props = {
  children: React.ReactNode;
};

export const metadata = {
  title: "Save ₹500+/Week on Groceries | Compare Blinkit vs Zepto vs BigBasket vs More Live",
  description:
    "India's #1 grocery price comparator. Compare Blinkit, Zepto, BigBasket, Swiggy, Amazon Fresh & More in 2 seconds. Find cheaper save more. Free. Check now →",
  alternates: {
    canonical: 'https://www.fantasticfood.in',
    languages: {
      en: 'https://www.fantasticfood.in',
      hi: 'https://www.fantasticfood.in/hi',
      bn: 'https://www.fantasticfood.in/bn',
      mr: 'https://www.fantasticfood.in/mr',
      te: 'https://www.fantasticfood.in/te',
      ta: 'https://www.fantasticfood.in/ta',
      'zh-CN': 'https://www.fantasticfood.in/zh-CN',
      ms: 'https://www.fantasticfood.in/ms',
      'x-default': 'https://www.fantasticfood.in',
    },
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-QLDLDN52KB" />
        <Providers>
          <div className="min-h-screen flex flex-col max-w-full overflow-x-hidden">
            <Toaster position="top-center" />
            <Navbar />
            <div className="grow">{children}</div>
            <Footer />
            <AIAssistant />
            <ReferralTracker />
          </div>
        </Providers>
      </body>
    </html>
  );
}
