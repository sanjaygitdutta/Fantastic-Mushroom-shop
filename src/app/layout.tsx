import '../index.css';
import { Providers } from './providers';

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
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
