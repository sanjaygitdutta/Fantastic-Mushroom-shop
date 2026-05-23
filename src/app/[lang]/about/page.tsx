import { Suspense } from 'react';
import About from '../../../views/About';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  let title = 'About Us | Fantastic Food';
  let description = 'Learn more about Fantastic Food, India\'s smart grocery price comparator. Our mission is to help you save ₹500+/week on your grocery bills.';

  if (lang === 'hi') {
    title = 'हमारे बारे में | Fantastic Food';
    description = 'फैंटास्टिक फूड के बारे में और जानें, भारत का स्मार्ट किराना मूल्य तुलनित्र।';
  } else if (lang === 'bn') {
    title = 'আমাদের সম্পর্কে | Fantastic Food';
    description = 'ফ্যান্টাস্টিক ফুড সম্পর্কে আরও জানুন, ভারতের স্মার্ট মুদি মূল্যের তুলনা প্ল্যাটফর্ম।';
  } else if (lang === 'mr') {
    title = 'आमच्याबद्दल | Fantastic Food';
    description = 'फॅन्टॅस्टिक फूडबद्दल अधिक जाणून घ्या, भारताचा स्मार्ट किराणा किंमत तुलनित्र।';
  } else if (lang === 'te') {
    title = 'మా గురించి | Fantastic Food';
    description = 'ఫెంటాస్టిక్ ఫుడ్ గురించి మరింత తెలుసుకోండి, భారతదేశపు స్మార్ట్ కిరాణా ధరల పోలిక యాప్.';
  } else if (lang === 'ta') {
    title = 'எங்களைப் பற்றி | Fantastic Food';
    description = 'ஃபென்டாஸ்டிக் ஃபுட் பற்றி மேலும் அறியவும், இந்தியாவின் ஸ்மார்ட் மளிகை விலை ஒப்பீட்டாளர்.';
  }

  const canonical = lang === 'en' 
    ? 'https://www.fantasticfood.in/about' 
    : `https://www.fantasticfood.in/${lang}/about`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'en': 'https://www.fantasticfood.in/about',
        'hi': 'https://www.fantasticfood.in/hi/about',
        'bn': 'https://www.fantasticfood.in/bn/about',
        'mr': 'https://www.fantasticfood.in/mr/about',
        'te': 'https://www.fantasticfood.in/te/about',
        'ta': 'https://www.fantasticfood.in/ta/about',
        'zh-CN': 'https://www.fantasticfood.in/zh-CN/about',
        'ms': 'https://www.fantasticfood.in/ms/about',
        'x-default': 'https://www.fantasticfood.in/about',
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <About />
    </Suspense>
  );
}
