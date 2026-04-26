'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, Mail, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';

const faqs = [
    {
        question: "How does the live price comparison work?",
        answer: "Our AI-powered engine crawls major grocery platforms like Blinkit, Zepto, Swiggy Instamart, and BigBasket in real-time. We aggregate these prices to show you the lowest cost for every item in your basket based on your location."
    },
    {
        question: "Do you personally deliver the groceries?",
        answer: "No, Fantastic Food is a price comparison and discovery engine. When you find a price you love, we redirect you to the partner app (like Blinkit or Zepto) to complete your purchase. However, we DO deliver our organic mushrooms directly from our farm!"
    },
    {
        question: "How often are the prices updated?",
        answer: "Prices are checked several times daily. However, because grocery platforms use dynamic pricing, we recommend clicking 'Check Live Price' on any item for the most absolute precision before you buy."
    },
    {
        question: "Are the mushrooms really chemical-free?",
        answer: "Yes, 100%. Our farm in the village uses traditional organic methods. We use zero pesticides, chemical fertilizers, or artificial growth enhancers. Every mushroom is as pure as nature intended."
    },
    {
        question: "How do I set a price drop alert?",
        answer: "Simply go to any food item page and click the 'Bell' icon or under the price section, enter your email in the 'Set Price Drop Alert' box. We will email you the second that item becomes cheaper!"
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. We use enterprise-grade encryption and secure database storage (Supabase). We never sell your personal contact information to third parties."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <>
            <SEO 
                title="FAQ & Support | Fantastic Food Help Center"
                description="Find answers to common questions about grocery price comparison, our organic mushrooms, and how to save more money daily."
                canonicalUrl="https://www.fantasticfood.in/faq"
            />

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
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeIndex === index ? 'bg-amber-500 text-white rotate-180' : 'bg-forest-100 text-forest-500'}`}>
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
                        <div className="bg-forest-900 rounded-[2rem] p-8 text-white flex flex-col items-center text-center group">
                            <div className="w-14 h-14 bg-forest-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-black mb-2">Chat with Support</h3>
                            <p className="text-forest-400 mb-6 font-medium">Have a specific question? Send us a message directly from the footer.</p>
                            <span className="text-amber-500 font-bold">Responds in ~2 hours</span>
                        </div>

                        <div className="bg-white rounded-[2rem] p-8 text-forest-900 flex flex-col items-center text-center border border-forest-100 group shadow-sm">
                            <div className="w-14 h-14 bg-cream-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-black mb-2">Email Us</h3>
                            <p className="text-forest-500 mb-6 font-medium">For corporate inquiries, B2B, or marketing partnerships.</p>
                            <a href="mailto:support@fantasticfood.in" className="text-amber-600 font-black hover:underline">support@fantasticfood.in</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default FAQ;
