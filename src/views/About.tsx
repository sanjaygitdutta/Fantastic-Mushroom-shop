'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Heart, Leaf, Users, Award, Zap, Globe } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
    return (
        <>
            <SEO 
                title="About Us | AI Grocery Comparison & Organic Mushroom Farm"
                description="The story of Fantastic Food: From a small village mushroom farm to India's most advanced AI-powered grocery price comparison engine."
                canonicalUrl="https://www.fantasticfood.in/about"
            />

            <div className="min-h-screen pt-24 pb-20 bg-cream-50">
                {/* Hero Section */}
                <section className="relative overflow-hidden py-24">
                    <div className="absolute inset-0 bg-linear-to-br from-forest-900 to-forest-800 opacity-95"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-bold tracking-wider uppercase mb-6">
                                The Fantastic Story
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 font-display tracking-tight leading-none">
                                From Rural Roots to <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500">
                                    AI-Powered Savings
                                </span>
                            </h1>
                            <p className="text-xl text-forest-100 max-w-3xl mx-auto leading-relaxed font-medium">
                                We are bridge-builders between nature's organic purity and tomorrow's high-speed technology. 
                                Fantastic Food is India's premier grocery price engine and premium mushroom supplier.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Our Dual Mission */}
                <section className="py-24 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div className="inline-flex items-center gap-3 text-amber-600 font-bold text-lg">
                                    <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    Our Global Vision
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black font-display text-forest-900 leading-tight">
                                    Empowering Households Through Transparency
                                </h2>
                                <p className="text-lg text-forest-600 leading-relaxed">
                                    In an era where grocery prices fluctuate daily across dozens of apps, families are often left overpaying. 
                                    We built Fantastic Food to solve this. Using state-of-the-art AI, we crawl and compare 
                                    thousands of products across Blinkit, Zepto, Swiggy Instamart, and BigBasket to ensure 
                                    you always pay the lowest possible price.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-6 rounded-2xl border border-forest-100 shadow-sm">
                                        <p className="text-3xl font-black text-forest-900 mb-1">7,000+</p>
                                        <p className="text-sm text-forest-500">Products Tracked Daily</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl border border-forest-100 shadow-sm">
                                        <p className="text-3xl font-black text-forest-900 mb-1">₹14M+</p>
                                        <p className="text-sm text-forest-500">Savings Unlocked</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-14 border border-forest-100 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Heart className="w-64 h-64 text-forest-900" />
                                </div>
                                <h2 className="text-3xl font-black text-forest-900 mb-8 flex items-center gap-4 relative z-10">
                                    <Heart className="w-8 h-8 text-amber-500" />
                                    The Village Origin
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-lg mb-8 relative z-10">
                                    Long before the AI algorithms, there was a small farm in a quiet Indian village. 
                                    Our family discovered a passion for organic mushroom cultivation—growing food 
                                    without a single chemical or pesticide.
                                </p>
                                <div className="bg-amber-50 border-l-8 border-amber-500 p-8 rounded-r-3xl my-10 relative z-10">
                                    <p className="text-forest-900 text-xl font-bold italic leading-relaxed">
                                        "Nature doesn't have a middleman. Why should your nutrition?"
                                    </p>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-lg relative z-10">
                                    Today, we carry that same purity into our technology. Whether it's our direct-to-farm 
                                    mushrooms or our AI-suggested low-cost pantry staples, quality is never compromised.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-24 px-4 bg-forest-950 text-white relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-4xl md:text-5xl font-black font-display mb-6 tracking-tight">Our Core Values</h2>
                            <p className="text-forest-300 text-lg">The principles that drive every line of code we write and every crop we harvest.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: <Leaf />, title: '100% Organic', desc: 'No chemicals, no shortcuts. Only pure nature.', color: 'emerald' },
                                { icon: <Zap />, title: 'Real-Time Data', desc: 'AI-powered tracking to save you money in seconds.', color: 'amber' },
                                { icon: <Users />, title: 'Family Protection', desc: 'Helping Indian households fight inflation.', color: 'orange' },
                                { icon: <Award />, title: 'Farm Transparency', desc: 'Direct sourcing to cut costs and increase quality.', color: 'white' }
                            ].map((val, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -10 }}
                                    className="bg-forest-900/50 p-8 rounded-3xl border border-forest-800 hover:border-amber-500/50 transition-all group"
                                >
                                    <div className="w-16 h-16 bg-forest-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500 transition-all duration-300">
                                        {val.icon}
                                    </div>
                                    <h3 className="text-xl font-black mb-3">{val.title}</h3>
                                    <p className="text-forest-400 leading-relaxed">{val.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-4">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-linear-to-r from-amber-500 to-orange-500 rounded-[3rem] p-12 md:p-20 text-center text-forest-900 shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                            <h2 className="text-4xl md:text-6xl font-black font-display mb-8 tracking-tighter relative z-10">
                                Be Part of the <br />Future of Food
                            </h2>
                            <p className="text-forest-900/80 text-xl mb-12 font-medium max-w-2xl mx-auto relative z-10">
                                Whether you are searching for the lowest price or the freshest organic mushrooms, you've landed in the right place.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                                <Link href="/compare"
                                    className="px-10 py-5 bg-forest-900 text-white font-black rounded-2xl transition-all transform hover:scale-105 shadow-xl hover:shadow-forest-900/20"
                                >
                                    Compare Live Prices
                                </Link>
                                <Link href="/mushroom-shop"
                                    className="px-10 py-5 bg-white text-forest-900 font-black rounded-2xl transition-all transform hover:scale-105 shadow-xl"
                                >
                                    Shop Mushrooms
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;
