import { motion } from 'framer-motion';
import { Check, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

const Subscription = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const plans = [
        {
            id: 'sub-starter',
            name: 'Starter Box',
            price: 2499.00,
            color: 'forest',
            features: ['2 varieties of fresh mushrooms', '1 dried mushroom pack', 'Recipe card', 'Free shipping', 'Delivery: Weekly'],
            recommended: false,
            interval: 'month'
        },
        {
            id: 'sub-family',
            name: 'Family Feast',
            price: 4199.00,
            color: 'mushroom',
            features: ['4 varieties of fresh mushrooms', '2 dried mushroom packs', '1 gourmet sauce/pickle', 'Recipe booklet', 'Free shipping', 'Delivery: Bi-weekly'],
            recommended: true,
            interval: 'month'
        },
        {
            id: 'sub-chef',
            name: 'Chef\'s Choice',
            price: 7499.00,
            color: 'accent',
            features: ['Premium selection (Truffles/Morels)', 'Exotic dried mushrooms', 'Truffle oil & seasonings', 'Exclusive chef recipes', 'Priority shipping', 'Delivery: Weekly'],
            recommended: false,
            interval: 'month'
        },
        {
            id: 'sub-seasonal',
            name: 'Seasonal Special',
            price: 3999.00,
            color: 'pink',
            features: ['Seasonal mushroom varieties', 'Fresh harvest every season', 'Seasonal recipe collection', 'Farm-to-table guarantee', 'Free shipping', 'Delivery: Every other day'],
            recommended: false,
            interval: 'month'
        },
        {
            id: 'sub-yearly',
            name: 'Yearly Premium',
            price: 49999.00,
            color: 'blue',
            features: ['All mushroom varieties year-round', '12 months premium access', 'Exclusive member events', 'Free cooking workshops', 'Priority customer support', 'Delivery: Every other day', 'Best value - Save 25%'],
            recommended: false,
            interval: 'year'
        }
    ];

    const handleSubscribe = (plan: typeof plans[0]) => {
        // Convert subscription to cart item format
        const subscriptionItem: any = {
            id: plan.id,
            name: `${plan.name} Subscription`,
            price: plan.price,
            category: 'fresh',
            image: 'https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?w=400',
            description: `Subscribe to ${plan.name} - ${plan.interval === 'year' ? 'Yearly' : 'Monthly'} plan`,
            rating: 5,
            isNew: false,
            weights: [1000],
            selectedWeight: 1000,
            calculatedPrice: plan.price
        };

        addToCart(subscriptionItem);
        toast.success(`${plan.name} added to cart!`, {
            icon: '🍄',
            duration: 2000
        });

        // Navigate to checkout
        setTimeout(() => {
            navigate('/checkout');
        }, 500);
    };

    const getPlanColorClasses = (color: string, isRecommended: boolean) => {
        if (isRecommended) return 'border-forest-500 bg-forest-50 shadow-xl scale-105 z-10';

        switch (color) {
            case 'forest': return 'border-forest-200 bg-white hover:border-forest-400';
            case 'mushroom': return 'border-orange-200 bg-white hover:border-orange-400';
            case 'accent': return 'border-purple-200 bg-white hover:border-purple-400';
            case 'pink': return 'border-pink-200 bg-white hover:border-pink-400';
            case 'blue': return 'border-blue-200 bg-white hover:border-blue-400';
            default: return 'border-gray-100 bg-white';
        }
    };

    const getButtonClasses = (color: string, isRecommended: boolean) => {
        if (isRecommended) return 'bg-forest-500 text-white hover:bg-forest-600';

        switch (color) {
            case 'forest': return 'bg-forest-100 text-forest-900 hover:bg-forest-200';
            case 'mushroom': return 'bg-orange-100 text-orange-900 hover:bg-orange-200';
            case 'accent': return 'bg-purple-100 text-purple-900 hover:bg-purple-200';
            case 'pink': return 'bg-pink-100 text-pink-900 hover:bg-pink-200';
            case 'blue': return 'bg-blue-100 text-blue-900 hover:bg-blue-200';
            default: return 'bg-gray-100 text-gray-900 hover:bg-gray-200';
        }
    };

    return (
        <div className="min-h-screen pt-20 bg-white">
            <div className="bg-gradient-to-br from-forest-50 via-mushroom-50 to-orange-50 py-24 px-4 text-center relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-forest-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-mushroom-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-mushroom-900 mb-3">
                        Fresh Mushrooms Delivered to Doorsteps All Over India 🇮🇳
                    </h1>
                    <p className="text-xl text-gray-600 italic font-serif mb-2">
                        From Village to Your Table
                    </p>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Choose your plan and get farm-fresh mushrooms delivered regularly.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Weekly, Seasonal & Yearly Plans</h2>
                    <p className="text-gray-600">Flexible plans for every need. Cancel anytime.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-6 rounded-3xl border-2 transition-all duration-300 ${getPlanColorClasses(plan.color, plan.recommended)}`}
                        >
                            {plan.recommended && (
                                <span className="absolute top-0 right-0 bg-forest-500 text-white px-4 py-1 rounded-bl-xl rounded-tr-2xl text-sm font-bold">
                                    Most Popular
                                </span>
                            )}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <div className="flex items-baseline">
                                    <span className="text-3xl font-bold text-forest-900">₹{plan.price}</span>
                                    <span className="text-gray-500 ml-1 text-sm">/{plan.interval === 'year' ? 'year' : 'mo'}</span>
                                </div>
                            </div>
                            <ul className="space-y-3 mb-8 min-h-[280px]">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-gray-700 text-sm">
                                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => handleSubscribe(plan)}
                                className={`w-full py-3 rounded-xl font-bold transition-colors ${getButtonClasses(plan.color, plan.recommended)}`}
                            >
                                Subscribe Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="bg-forest-900 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Package className="w-16 h-16 mx-auto mb-6 text-mushroom-500" />
                    <h2 className="text-3xl font-bold mb-4">How it works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
                        <div>
                            <div className="text-mushroom-500 font-bold text-xl mb-2">01. Choose Plan</div>
                            <p className="text-mushroom-200">Select the box size that fits your cooking needs.</p>
                        </div>
                        <div>
                            <div className="text-mushroom-500 font-bold text-xl mb-2">02. We Harvest</div>
                            <p className="text-mushroom-200">Our farmers pick the freshest mushrooms just for you.</p>
                        </div>
                        <div>
                            <div className="text-mushroom-500 font-bold text-xl mb-2">03. Fast Delivery</div>
                            <p className="text-mushroom-200">Receive your box within 24 hours of harvest.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;
