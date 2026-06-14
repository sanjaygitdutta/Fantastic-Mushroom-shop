'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, Mail, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useRegion } from '../utils/region';

const faqs = [
    {
        question: "Which quick-commerce app is cheapest in India: Blinkit, Zepto, or Swiggy Instamart?",
        answer: "Prices fluctuate daily. Fantastic Food tracks live prices in real-time across Blinkit, Zepto, Swiggy Instamart, BigBasket, Amazon Fresh, and JioMart, highlighting the cheapest option at the top."
    },
    {
        question: "How do I compare the total price of my entire grocery list across different apps?",
        answer: "Add multiple items to the Fantastic Food comparison basket. Our engine sums the cost of your complete list on Blinkit, Zepto, and Instamart, showing you the cheapest overall app for your full cart."
    },
    {
        question: "Where can I buy fresh organic Oyster and Lion's Mane mushrooms online?",
        answer: "You can purchase premium, pesticide-free culinary and medicinal mushrooms directly from the Fantastic Food Mushroom Shop, grown on our organic farm."
    },
    {
        question: "Are Fantastic Food's fresh mushrooms grown organically?",
        answer: "Yes. Our farm uses 100% traditional organic methods with zero synthetic pesticides, chemical fertilizers, or artificial growth hormones."
    },
    {
        question: "Are grocery prices on Fantastic Food updated in real-time?",
        answer: "Yes, our dedicated team updates prices daily. You can also click the 'Check Live Price' button on any item to force a real-time fresh quote."
    },
    {
        question: "Does Fantastic Food deliver my groceries directly?",
        answer: "Fantastic Food is a price comparison platform. When you click buy, we redirect you directly to the partner app (like Blinkit or Zepto) with the item pre-selected so you can checkout instantly at the cheapest price."
    },
    {
        question: "How do I install the Fantastic Food app on my smartphone?",
        answer: "Click the 'Install App' button in the footer or browser bar to add Fantastic Food directly to your Android or iPhone home screen as a fast Progressive Web App (PWA)."
    },
    {
        question: "What is Chef Aika and how can it help me cook?",
        answer: "Chef Aika is our interactive AI cooking assistant. You can chat with it to get custom recipe adjustments, ingredient substitutions, or step-by-step cooking guidance."
    },
    {
        question: "How does the Daily AI Recipe Generator work?",
        answer: "Every day, Aika generates a new, unique recipe showcasing healthy, budget-friendly ingredients. These are translated into 8 languages and mapped to live product prices."
    },
    {
        question: "How can I get notified when grocery prices drop?",
        answer: "Enter your email in the 'Set Price Drop Alert' box on any product page. We will email you immediately when the price goes down on any platform."
    },
    {
        question: "How do I check grocery prices in my specific city (like Mumbai, Delhi, or Singapore)?",
        answer: "Fantastic Food automatically detects your location or cookies. You can also use the region filter to switch between Indian cities and Singapore to see localized store inventories."
    },
    {
        question: "Which regional languages does Fantastic Food support?",
        answer: "We support English, Hindi (हिन्दी), Bengali (বাংলা), Marathi (मराठी), Telugu (తెలుగు), Tamil (தமிழ்), Chinese (简体中文), and Malay (Bahasa Melayu) with full page translation."
    },
    {
        question: "How do I use the AI Meal Planner to plan my weekly groceries?",
        answer: "Enter your dietary preferences, serving count, and budget. Our planner generates a weekly meal schedule and automatically calculates the cheapest grocery store for the required ingredients."
    },
    {
        question: "How much money can I save monthly using Fantastic Food?",
        answer: "The average household saves between 25% and 40% on monthly grocery bills simply by comparing basket costs before purchasing."
    },
    {
        question: "Does Fantastic Food show coupon codes and discounts for Blinkit and Zepto?",
        answer: "Yes, our Coupons section aggregates current promotion codes, cashbacks, and bank offers across all quick-commerce platforms."
    },
    {
        question: "What is the Festival Meal Planner?",
        answer: "It is a specialized tool that helps you plan traditional meals for major festivals (like Diwali, Pongal, Eid, etc.) and gathers the ingredients at the lowest prices."
    },
    {
        question: "How can I check the nutritional value of fresh vegetables and fruits?",
        answer: "Browse our Health & Nutrition tab to find calorie, protein, vitamin, and mineral breakdowns for hundreds of everyday groceries."
    },
    {
        question: "Does the Mushroom Shop offer weekly or monthly subscriptions?",
        answer: "Yes, you can subscribe to regular deliveries of fresh organic mushrooms to get free shipping and discounted farm-direct pricing."
    },
    {
        question: "How do I compare prices between different grocery brands (like Amul vs. Mother Dairy)?",
        answer: "Use the Compare tool to search for products. Our platform lists matching brands side-by-side so you can compare prices and sizes."
    },
    {
        question: "How do I search for specific products on the price comparison engine?",
        answer: "Type any ingredient, brand, or category in the search bar. The system will suggest relevant matching items instantly."
    },
    {
        question: "What are the benefits of creating a Fantastic Food profile?",
        answer: "Creating a profile lets you save grocery lists, track your historical monthly savings, manage price drop alerts, and get personalized recipe recommendations."
    },
    {
        question: "Can I save my favorite recipes and grocery items for later?",
        answer: "Yes, click the heart or bookmark icon on any recipe or product page to add it to your Saved portal for quick access."
    },
    {
        question: "How can I contact the support team or send feedback?",
        answer: "You can use the contact form in the footer or email us directly at support@fantasticfood.in."
    },
    {
        question: "Is my personal data safe on the Fantastic Food platform?",
        answer: "Yes, we secure all user lists and profile data using enterprise-grade encryption and secure database storage (Supabase). We never sell your data to third parties."
    },
    {
        question: "Do you sell fresh mushrooms in bulk for restaurants or wholesale?",
        answer: "Yes, we accommodate B2B orders for hotels, restaurants, and retail stores. Please contact us via email for wholesale pricing."
    },
    {
        question: "Is Fantastic Food affiliated with Blinkit, Zepto, or Swiggy Instamart?",
        answer: "No. Fantastic Food is a 100% independent comparison platform. We are not owned by, sponsored by, or affiliated with any of the delivery apps listed."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { t } = useTranslation();
    const { region } = useRegion();
    const isSG = region?.toUpperCase() === 'SG';

    return (
        <>

            <div className="min-h-screen pt-24 pb-20 bg-cream-50">
                <div className="max-w-4xl mx-auto px-4">
                    
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-amber-500 text-white shadow-lg mb-6">
                            <HelpCircle className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black font-display text-forest-900 mb-6 tracking-tight">
                            How can we <span className="text-amber-600">help?</span>
                        </h1>
                        <p className="text-xl text-forest-600 max-w-2xl mx-auto">
                            Search our frequently asked questions for quick answers about our platform, 
                            mushrooms, and savings technology.
                        </p>
                    </div>

                    <div className="space-y-4 mb-20">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-2xl border border-forest-100 shadow-sm overflow-hidden"
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-forest-50 transition-colors"
                                >
                                    <span className="text-lg font-bold text-forest-900 pr-8">{faq.question}</span>
                                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeIndex === index ? 'bg-amber-500 text-white rotate-180' : 'bg-forest-100 text-forest-500'}`}>
                                        {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </div>
                                </button>
                                
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="p-6 pt-0 text-forest-600 leading-relaxed border-t border-forest-50">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Support Contact */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-forest-900 rounded-4xl p-8 text-white flex flex-col items-center text-center group">
                            <div className="w-14 h-14 bg-forest-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-black mb-2">Chat with Support</h3>
                            <p className="text-forest-400 mb-6 font-medium">Have a specific question? Send us a message directly from the footer.</p>
                            <span className="text-amber-500 font-bold">Responds in ~2 hours</span>
                        </div>

                        <div className="bg-white rounded-4xl p-8 text-forest-900 flex flex-col items-center text-center border border-forest-100 group shadow-sm">
                            <div className="w-14 h-14 bg-cream-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-black mb-2">Email Us</h3>
                            <p className="text-forest-500 mb-6 font-medium">For corporate inquiries, B2B, or marketing partnerships.</p>
                            <a href="mailto:sanjoydutta1200@gmail.com" className="text-amber-600 font-black hover:underline">sanjoydutta1200@gmail.com</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default FAQ; // refresh
