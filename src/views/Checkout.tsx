'use client';
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import PaymentForm from '../components/PaymentForm';
import { motion } from 'framer-motion';
import { MapPin, Truck, CreditCard, CheckCircle } from 'lucide-react';
import Link from 'next/link';


// Replace with your actual publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || 'pk_test_TYooMQauvdEDq54NiTphI7jx');

const Checkout = () => {
    const { items, cartTotal, clearCart } = useCart();
    const { user, addOrder } = useAuth();
    const [step, setStep] = useState<'shipping' | 'payment' | 'success'>('shipping');
    const [shippingDetails, setShippingDetails] = useState({
        fullName: '',
        address: '',
        city: '',
        zipCode: '',
        phone: ''
    });
    const [lastOrder, setLastOrder] = useState<{ id: string, total: number } | null>(null);

    useEffect(() => {
        if (user?.profile) {
            setShippingDetails({
                fullName: user.profile.name || '',
                address: user.profile.address.building || '',
                city: user.profile.address.state || '',
                zipCode: user.profile.address.pinCode || '',
                phone: user.profile.phone || user.identifier || ''
            });
        }
    }, [user]);

    const handleShippingSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep('payment');
    };

    const handlePaymentSuccess = (paymentId: string) => {
        console.log('Payment successful:', paymentId);

        const newOrder = {
            id: paymentId || `ORD-${Date.now()}`,
            date: new Date().toLocaleDateString(),
            items: items,
            total: cartTotal,
            status: 'Processing' as const
        };

        if (user) {
            addOrder(newOrder);
        }

        setLastOrder({ id: newOrder.id, total: newOrder.total });
        clearCart();
        setStep('success');
    };

    const handlePaymentError = (error: string) => {
        console.error('Payment error:', error);
        // Toast notification is handled in PaymentForm
    };

    if (step === 'success') {
        return (
            <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center bg-mushroom-50">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full text-center"
                >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
                    {lastOrder && (
                        <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <p className="text-sm text-gray-500">Transaction ID</p>
                            <p className="font-mono font-bold text-gray-800 mb-2">{lastOrder.id}</p>
                            <p className="text-sm text-gray-500">Amount Paid</p>
                            <p className="font-bold text-forest-700 text-xl">₹{lastOrder.total.toFixed(2)}</p>
                        </div>
                    )}
                    <p className="text-gray-600 mb-8">
                        Thank you for your purchase. Your fresh mushrooms will be on their way soon!
                    </p>
                    <Link href="/"
                        className="block w-full py-4 bg-forest-600 text-white rounded-xl font-bold hover:bg-forest-700 transition-colors"
                    >
                        Continue Shopping
                    </Link>
                </motion.div>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className="min-h-screen pt-32 px-4 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
                <Link href="/" className="text-forest-600 hover:underline">Go back to shop</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 bg-mushroom-50">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left Column: Forms */}
                <div>
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-mushroom-900 mb-2">Checkout</h1>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span className={step === 'shipping' ? 'text-forest-600 font-bold' : ''}>Shipping</span>
                            <span>/</span>
                            <span className={step === 'payment' ? 'text-forest-600 font-bold' : ''}>Payment</span>
                        </div>
                    </div>

                    {step === 'shipping' ? (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white p-6 rounded-2xl shadow-sm"
                        >
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-forest-600" />
                                Shipping Details
                            </h2>
                            <form onSubmit={handleShippingSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition-all"
                                        value={shippingDetails.fullName}
                                        onChange={e => setShippingDetails({ ...shippingDetails, fullName: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition-all"
                                        value={shippingDetails.address}
                                        onChange={e => setShippingDetails({ ...shippingDetails, address: e.target.value })}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition-all"
                                            value={shippingDetails.city}
                                            onChange={e => setShippingDetails({ ...shippingDetails, city: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition-all"
                                            value={shippingDetails.zipCode}
                                            onChange={e => setShippingDetails({ ...shippingDetails, zipCode: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-forest-900 text-white rounded-xl font-bold hover:bg-forest-800 transition-colors mt-4 flex items-center justify-center gap-2"
                                >
                                    Continue to Payment
                                    <Truck className="w-4 h-4" />
                                </button>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white p-6 rounded-2xl shadow-sm"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    <CreditCard className="w-5 h-5 text-forest-600" />
                                    Payment Method
                                </h2>
                                <button
                                    onClick={() => setStep('shipping')}
                                    className="text-sm text-gray-500 hover:text-forest-600 underline"
                                >
                                    Edit Shipping
                                </button>
                            </div>

                            <Elements stripe={stripePromise}>
                                <PaymentForm
                                    amount={cartTotal}
                                    onSuccess={handlePaymentSuccess}
                                    onError={handlePaymentError}
                                />
                            </Elements>
                        </motion.div>
                    )}
                </div>

                {/* Right Column: Order Summary */}
                <div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-24">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                        <div className="space-y-4 mb-6 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                            {items.map((item) => (
                                <div key={`${item.id}-${item.selectedWeight}`} className="flex gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 rounded-lg object-cover bg-gray-100"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                                        <p className="text-sm text-gray-500">
                                            {item.selectedWeight && item.selectedWeight >= 1000
                                                ? `${item.selectedWeight / 1000}kg`
                                                : `${item.selectedWeight || 0}g`} x {item.quantity}
                                        </p>
                                    </div>
                                    <div className="font-bold text-gray-900">
                                        ₹{(item.calculatedPrice * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gray-100 pt-4 space-y-2">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>₹{cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t border-gray-100 mt-2">
                                <span>Total</span>
                                <span>₹{cartTotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
