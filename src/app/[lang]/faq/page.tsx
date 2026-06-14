import { Suspense } from 'react';
import FAQ from '../../../views/FAQ';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  let title = 'Frequently Asked Questions (FAQ) | Fantastic Food';
  let description = 'Got questions about how we compare prices across Blinkit, Zepto, Swiggy, BigBasket & more? Find all answers in our FAQ.';

  const canonical = lang === 'en' 
    ? 'https://www.fantasticfood.in/faq' 
    : `https://www.fantasticfood.in/${lang}/faq`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'en': 'https://www.fantasticfood.in/faq',
        'hi': 'https://www.fantasticfood.in/hi/faq',
        'bn': 'https://www.fantasticfood.in/bn/faq',
        'mr': 'https://www.fantasticfood.in/mr/faq',
        'te': 'https://www.fantasticfood.in/te/faq',
        'ta': 'https://www.fantasticfood.in/ta/faq',
        'zh-CN': 'https://www.fantasticfood.in/zh-CN/faq',
        'ms': 'https://www.fantasticfood.in/ms/faq',
        'x-default': 'https://www.fantasticfood.in/faq',
      },
    },
  };
}

const FAQ_ITEMS = [
  {
    q: "Which quick-commerce app is cheapest in India: Blinkit, Zepto, or Swiggy Instamart?",
    a: "Prices fluctuate daily. Fantastic Food tracks live prices in real-time across Blinkit, Zepto, Swiggy Instamart, BigBasket, Amazon Fresh, and JioMart, highlighting the cheapest option at the top."
  },
  {
    q: "How do I compare the total price of my entire grocery list across different apps?",
    a: "Add multiple items to the Fantastic Food comparison basket. Our engine sums the cost of your complete list on Blinkit, Zepto, and Instamart, showing you the cheapest overall app for your full cart."
  },
  {
    q: "Where can I buy fresh organic Oyster and Lion's Mane mushrooms online?",
    a: "You can purchase premium, pesticide-free culinary and medicinal mushrooms directly from the Fantastic Food Mushroom Shop, grown on our organic farm."
  },
  {
    q: "Are Fantastic Food's fresh mushrooms grown organically?",
    a: "Yes. Our farm uses 100% traditional organic methods with zero synthetic pesticides, chemical fertilizers, or artificial growth hormones."
  },
  {
    q: "Are grocery prices on Fantastic Food updated in real-time?",
    a: "Yes, our dedicated team updates prices daily. You can also click the 'Check Live Price' button on any item to force a real-time fresh quote."
  },
  {
    q: "Does Fantastic Food deliver my groceries directly?",
    a: "Fantastic Food is a price comparison platform. When you click buy, we redirect you directly to the partner app (like Blinkit or Zepto) with the item pre-selected so you can checkout instantly at the cheapest price."
  },
  {
    q: "How do I install the Fantastic Food app on my smartphone?",
    a: "Click the 'Install App' button in the footer or browser bar to add Fantastic Food directly to your Android or iPhone home screen as a fast Progressive Web App (PWA)."
  },
  {
    q: "What is Chef Aika and how can it help me cook?",
    a: "Chef Aika is our interactive AI cooking assistant. You can chat with it to get custom recipe adjustments, ingredient substitutions, or step-by-step cooking guidance."
  },
  {
    q: "How does the Daily AI Recipe Generator work?",
    a: "Every day, Aika generates a new, unique recipe showcasing healthy, budget-friendly ingredients. These are translated into 8 languages and mapped to live product prices."
  },
  {
    q: "How can I get notified when grocery prices drop?",
    a: "Enter your email in the 'Set Price Drop Alert' box on any product page. We will email you immediately when the price goes down on any platform."
  },
  {
    q: "How do I check grocery prices in my specific city (like Mumbai, Delhi, or Singapore)?",
    a: "Fantastic Food automatically detects your location or cookies. You can also use the region filter to switch between Indian cities and Singapore to see localized store inventories."
  },
  {
    q: "Which regional languages does Fantastic Food support?",
    a: "We support English, Hindi (हिन्दी), Bengali (বাংলা), Marathi (मराठी), Telugu (తెలుగు), Tamil (தமிழ்), Chinese (简体中文), and Malay (Bahasa Melayu) with full page translation."
  },
  {
    q: "How do I use the AI Meal Planner to plan my weekly groceries?",
    a: "Enter your dietary preferences, serving count, and budget. Our planner generates a weekly meal schedule and automatically calculates the cheapest grocery store for the required ingredients."
  },
  {
    q: "How much money can I save monthly using Fantastic Food?",
    a: "The average household saves between 25% and 40% on monthly grocery bills simply by comparing basket costs before purchasing."
  },
  {
    q: "Does Fantastic Food show coupon codes and discounts for Blinkit and Zepto?",
    a: "Yes, our Coupons section aggregates current promotion codes, cashbacks, and bank offers across all quick-commerce platforms."
  },
  {
    q: "What is the Festival Meal Planner?",
    a: "It is a specialized tool that helps you plan traditional meals for major festivals (like Diwali, Pongal, Eid, etc.) and gathers the ingredients at the lowest prices."
  },
  {
    q: "How can I check the nutritional value of fresh vegetables and fruits?",
    a: "Browse our Health & Nutrition tab to find calorie, protein, vitamin, and mineral breakdowns for hundreds of everyday groceries."
  },
  {
    q: "Does the Mushroom Shop offer weekly or monthly subscriptions?",
    a: "Yes, you can subscribe to regular deliveries of fresh organic mushrooms to get free shipping and discounted farm-direct pricing."
  },
  {
    q: "How do I compare prices between different grocery brands (like Amul vs. Mother Dairy)?",
    a: "Use the Compare tool to search for products. Our platform lists matching brands side-by-side so you can compare prices and sizes."
  },
  {
    q: "How do I search for specific products on the price comparison engine?",
    a: "Type any ingredient, brand, or category in the search bar. The system will suggest relevant matching items instantly."
  },
  {
    q: "What are the benefits of creating a Fantastic Food profile?",
    a: "Creating a profile lets you save grocery lists, track your historical monthly savings, manage price drop alerts, and get personalized recipe recommendations."
  },
  {
    q: "Can I save my favorite recipes and grocery items for later?",
    a: "Yes, click the heart or bookmark icon on any recipe or product page to add it to your Saved portal for quick access."
  },
  {
    q: "How can I contact the support team or send feedback?",
    a: "You can use the contact form in the footer or email us directly at support@fantasticfood.in."
  },
  {
    q: "Is my personal data safe on the Fantastic Food platform?",
    a: "Yes, we secure all user lists and profile data using enterprise-grade encryption and secure database storage (Supabase). We never sell your data to third parties."
  },
  {
    q: "Do you sell fresh mushrooms in bulk for restaurants or wholesale?",
    a: "Yes, we accommodate B2B orders for hotels, restaurants, and retail stores. Please contact us via email for wholesale pricing."
  },
  {
    q: "Is Fantastic Food affiliated with Blinkit, Zepto, or Swiggy Instamart?",
    a: "No. Fantastic Food is a 100% independent comparison platform. We are not owned by, sponsored by, or affiliated with any of the delivery apps listed."
  }
];

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQ />
    </Suspense>
  );
}
