import { motion } from 'framer-motion';
import { Heart, Leaf, Users, Award } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-forest-50 to-mushroom-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-forest-900 mb-6">
                            Our Story 🍄
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            A humble journey from a small village family to your table
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Story */}
            <section className="py-20 px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-mushroom-200"
                >
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-forest-800 mb-6 flex items-center gap-3">
                            <Heart className="w-8 h-8 text-mushroom-500" />
                            The Story of a Village Small Family
                        </h2>

                        <p className="text-gray-700 leading-relaxed text-lg mb-6">
                            Fantastic Mushroom began in a small village, where a humble family discovered
                            the magic of mushroom cultivation. What started as a passion for growing food
                            the natural way has blossomed into a mission to bring the purest, healthiest
                            mushrooms to families everywhere.
                        </p>

                        <div className="bg-gradient-to-r from-mushroom-50 to-forest-50 border-l-4 border-mushroom-500 p-6 rounded-r-xl my-8">
                            <p className="text-gray-800 text-xl font-medium italic leading-relaxed">
                                "Here, every mushroom is homemade with care, grown organically, and 100%
                                chemical-free so your family enjoys food that is as pure as nature intended."
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-lg mb-6">
                            Our journey is rooted in tradition, sustainability, and an unwavering commitment
                            to quality. Each mushroom is nurtured by hand, harvested at peak freshness, and
                            delivered with the same care we'd give to our own family's table.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-lg">
                            From our village to your kitchen, we invite you to experience mushrooms the way
                            nature intended—pure, nutritious, and full of flavor. Thank you for being part
                            of our family's story.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-mushroom-50 to-forest-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-forest-900 mb-12">
                        Our Core Values
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-lg text-center border-2 border-transparent hover:border-mushroom-300 transition-all"
                        >
                            <div className="w-16 h-16 bg-mushroom-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-8 h-8 text-mushroom-500" />
                            </div>
                            <h3 className="text-xl font-bold text-forest-900 mb-3">Homemade with Care</h3>
                            <p className="text-gray-600">
                                Every mushroom is grown with love and attention, just like in our village home.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-lg text-center border-2 border-transparent hover:border-forest-300 transition-all"
                        >
                            <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Leaf className="w-8 h-8 text-forest-500" />
                            </div>
                            <h3 className="text-xl font-bold text-forest-900 mb-3">100% Organic</h3>
                            <p className="text-gray-600">
                                Grown organically without any chemicals, pesticides, or artificial additives.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-lg text-center border-2 border-transparent hover:border-accent-300 transition-all"
                        >
                            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-accent-500" />
                            </div>
                            <h3 className="text-xl font-bold text-forest-900 mb-3">Family First</h3>
                            <p className="text-gray-600">
                                We treat our customers like family, ensuring the best for you and yours.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-lg text-center border-2 border-transparent hover:border-mushroom-300 transition-all"
                        >
                            <div className="w-16 h-16 bg-mushroom-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-mushroom-500" />
                            </div>
                            <h3 className="text-xl font-bold text-forest-900 mb-3">Pure Quality</h3>
                            <p className="text-gray-600">
                                Food that is as pure as nature intended—no compromises, ever.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-forest-600 to-forest-700 text-white rounded-3xl p-12 shadow-2xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Join Our Family Today! 🍄
                        </h2>
                        <p className="text-forest-100 text-lg mb-8">
                            Experience the difference that organic, homemade mushrooms can make in your kitchen.
                        </p>
                        <a
                            href="/"
                            className="inline-block px-8 py-4 bg-mushroom-500 hover:bg-mushroom-600 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg"
                        >
                            Shop Our Mushrooms
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
