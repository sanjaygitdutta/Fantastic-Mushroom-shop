'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';


const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image removed to show Live Wallpaper */}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="max-w-2xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-forest-500/10 text-forest-900 font-semibold text-sm mb-6 border border-forest-500/20"
                    >
                        Premium Organic Fungi
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl md:text-7xl font-bold text-mushroom-900 leading-tight mb-6"
                    >
                        Discover the <br />
                        <span className="text-forest-900">Magic of Nature</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl text-mushroom-700 mb-10 leading-relaxed max-w-lg"
                    >
                        From rare truffles to daily medicinal blends, explore our curated collection of the world's finest mushrooms.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button
                            onClick={() => {
                                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-4 bg-forest-900 text-white rounded-full font-semibold hover:bg-forest-500 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-forest-900/20"
                        >
                            Shop Collection
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <Link
                            to="/about"
                            className="px-8 py-4 bg-white text-mushroom-900 border border-mushroom-300 rounded-full font-semibold hover:bg-mushroom-50 transition-colors duration-300 shadow-sm flex items-center justify-center"
                        >
                            Learn More
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
