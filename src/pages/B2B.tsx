import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const B2B = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        businessName: '',
        email: '',
        volume: 'Less than 10kg',
        message: ''
    });

    const scrollToForm = () => {
        const formSection = document.getElementById('b2b-form');
        formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form
        if (!formData.fullName || !formData.businessName || !formData.email) {
            toast.error('Please fill in all required fields');
            return;
        }

        // Simulate form submission
        toast.success('Quote request submitted! We\'ll contact you within 24 hours.', {
            duration: 4000,
            icon: '📋'
        });

        // Reset form
        setFormData({
            fullName: '',
            businessName: '',
            email: '',
            volume: 'Less than 10kg',
            message: ''
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen pt-20 bg-mushroom-50">
            {/* Hero Section */}
            <div className="bg-forest-900 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Premium Mushrooms for Your Business
                    </motion.h1>
                    <p className="text-xl text-mushroom-200 max-w-2xl mx-auto mb-10">
                        Partner with Fantastic Mushroom to supply your restaurant, hotel, or retail store with the finest fresh and dried mushrooms.
                    </p>
                    <button
                        onClick={scrollToForm}
                        className="bg-mushroom-500 text-white px-8 py-3 rounded-full font-bold hover:bg-mushroom-600 transition-colors"
                    >
                        Get a Quote
                    </button>
                </div>
            </div>

            {/* Features */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { title: 'Farm Fresh Quality', desc: 'Harvested daily and delivered within 24 hours to ensure peak freshness.' },
                        { title: 'Consistent Supply', desc: 'Reliable year-round supply of premium varieties like Oyster, Shiitake, and Lion\'s Mane.' },
                        { title: 'Wholesale Pricing', desc: 'Competitive rates for bulk orders with flexible payment terms.' }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-mushroom-100"
                        >
                            <CheckCircle className="w-10 h-10 text-forest-500 mb-4" />
                            <h3 className="text-xl font-bold text-forest-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Contact Form */}
            <div id="b2b-form" className="max-w-3xl mx-auto px-4 pb-20">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
                    <h2 className="text-3xl font-bold text-forest-900 mb-8 text-center">Partner With Us</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-forest-500 focus:ring-forest-500 p-3 border"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label>
                                <input
                                    type="text"
                                    name="businessName"
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-forest-500 focus:ring-forest-500 p-3 border"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-forest-500 focus:ring-forest-500 p-3 border"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Monthly Volume (kg)</label>
                            <select
                                name="volume"
                                value={formData.volume}
                                onChange={handleChange}
                                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-forest-500 focus:ring-forest-500 p-3 border"
                            >
                                <option>Less than 10kg</option>
                                <option>10kg - 50kg</option>
                                <option>50kg - 100kg</option>
                                <option>100kg+</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message / Requirements</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-forest-500 focus:ring-forest-500 p-3 border"
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-forest-900 text-white py-4 rounded-xl font-bold hover:bg-forest-800 transition-colors flex items-center justify-center">
                            Submit Inquiry <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default B2B;
