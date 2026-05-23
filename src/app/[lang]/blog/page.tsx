import { Suspense } from 'react';
import BlogDirectory from '../../../views/BlogDirectory';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  let title = 'Fantastic Food Blog — Smart Cooking & Grocery Saving Tips';
  let description = 'Read the latest articles on grocery price comparisons, recipe tips, and local food shopping hacks in India to slash your bills.';

  if (lang === 'hi') {
    title = 'फैंटास्टिक फूड ब्लॉग — स्मार्ट कुकिंग और किराना बचत टिप्स';
    description = 'किराने की कीमत की तुलना, रेसिपी टिप्स और अपने बिलों में कटौती करने के लिए स्थानीय खाद्य खरीदारी हैक्स पर नवीनतम लेख पढ़ें।';
  } else if (lang === 'bn') {
    title = 'ফ্যান্টাস্টিক ফুড ব্লগ — স্মার্ট রান্না এবং মুদি সেভিং টিপস';
    description = 'মুদির দামের তুলনা, রান্নার টিপস এবং আপনার বিলগুলি কমানোর জন্য স্থানীয় খাবার কেনাকাটার হ্যাকগুলির সর্বশেষ নিবন্ধগুলি পড়ুন।';
  } else if (lang === 'mr') {
    title = 'फॅन्टॅस्टिक फूड ब्लॉग — स्मार्ट कुकिंग आणि किराणा साहित्याची बचत';
    description = 'किराणा साहित्याच्या किमतीची तुलना, रेसिपी टिप्स आणि आपल्या बिलांमध्ये कपात करण्यासाठी लेख वाचा।';
  } else if (lang === 'te') {
    title = 'ఫెంటాస్టిక్ ఫుడ్ బ్లాగ్ — స్మార్ట్ వంట & కిరాణా పొదుపు చిట్కాలు';
    description = 'మీ బిల్లులను తగ్గించుకోవడానికి కిరాణా ధరల పోలికలు, వంట చిట్కాలు మరియు కిరాణా షాపింగ్ హ్యాక్స్‌పై తాజా కథనాలను చదవండి.';
  } else if (lang === 'ta') {
    title = 'ஃபென்டாஸ்டிக் ஃபுட் வலைப்பதிவு — ஸ்மார்ட் சமையல் & மளிகை சேமிப்பு குறிப்புகள்';
    description = 'மளிகை விலை ஒப்பீடுகள், சமையல் குறிப்புகள் மற்றும் உங்கள் மளிகை பில்களைக் குறைப்பதற்கான உதவிக்குறிப்புகளைப் படியுங்கள்.';
  }

  const canonical = lang === 'en' 
    ? 'https://www.fantasticfood.in/blog' 
    : `https://www.fantasticfood.in/${lang}/blog`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'en': 'https://www.fantasticfood.in/blog',
        'hi': 'https://www.fantasticfood.in/hi/blog',
        'bn': 'https://www.fantasticfood.in/bn/blog',
        'mr': 'https://www.fantasticfood.in/mr/blog',
        'te': 'https://www.fantasticfood.in/te/blog',
        'ta': 'https://www.fantasticfood.in/ta/blog',
        'zh-CN': 'https://www.fantasticfood.in/zh-CN/blog',
        'ms': 'https://www.fantasticfood.in/ms/blog',
        'x-default': 'https://www.fantasticfood.in/blog',
      },
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <BlogDirectory />
    </Suspense>
  );
}
