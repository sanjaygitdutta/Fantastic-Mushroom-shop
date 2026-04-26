'use client';
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, AlertCircle, Smartphone, Globe, CreditCard, Wallet } from 'lucide-react';

interface PaymentFormProps {
    amount: number;
    onSuccess: (paymentId: string) => void;
    onError: (error: string) => void;
}

type PaymentMethod = 'razorpay' | 'card' | 'upi' | 'netbanking' | 'debit';

const PaymentForm: React.FC<PaymentFormProps> = ({ amount, onSuccess, onError }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [cardError, setCardError] = useState<string | null>(null);
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('razorpay');
    const [upiId, setUpiId] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsProcessing(true);
        setCardError(null);

        // Simulate processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        if (selectedMethod === 'card' || selectedMethod === 'debit') {
            if (!stripe || !elements) return;
            const cardElement = elements.getElement(CardElement);
            if (!cardElement) return;

            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (error) {
                setCardError(error.message || 'An error occurred');
                onError(error.message || 'Payment failed');
                setIsProcessing(false);
            } else {
                onSuccess(paymentMethod.id);
                setIsProcessing(false);
            }
        } else if (selectedMethod === 'razorpay') {
            // Mock Razorpay Success
            // In a real app, this would open the Razorpay modal
            onSuccess(`pay_${Date.now()}`); // Razorpay style ID
            setIsProcessing(false);
        } else {
            // Mock success for UPI / NetBanking
            onSuccess(`mock_${selectedMethod}_${Date.now()}`);
            setIsProcessing(false);
        }
    };

    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: 'Inter, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": { color: "#aab7c4" }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    };

    const tabs = [
        { id: 'razorpay', label: 'Razorpay', icon: Wallet, recommended: true },
        { id: 'card', label: 'Card', icon: CreditCard },
        { id: 'upi', label: 'UPI', icon: Smartphone },
        { id: 'netbanking', label: 'Net Banking', icon: Globe },
    ];

    return (
        <div className="w-full">
            {/* Payment Method Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2 custom-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setSelectedMethod(tab.id as PaymentMethod)}
                        className={`relative flex items-center gap-2 px-4 py-3 rounded-xl border transition-all whitespace-nowrap ${selectedMethod === tab.id
                            ? 'border-blue-500 bg-blue-50 text-blue-700 font-bold shadow-sm'
                            : 'border-gray-200 hover:border-gray-300 text-gray-600'
                            }`}
                        type="button"
                    >
                        <tab.icon className="w-4 h-4" />
                        {tab.label}
                        {tab.recommended && (
                            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm">
                                Best
                            </span>
                        )}
                    </button>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedMethod}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {selectedMethod === 'razorpay' && (
                            <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                        <Wallet className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Razorpay Secure</h3>
                                        <p className="text-xs text-gray-500">Cards, UPI, Netbanking, Wallets</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">
                                    You will be redirected to Razorpay's secure gateway to complete your payment.
                                </p>
                            </div>
                        )}

                        {(selectedMethod === 'card' || selectedMethod === 'debit') && (
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {selectedMethod === 'card' ? 'Credit Card Details' : 'Debit Card Details'}
                                </label>
                                <div className="p-4 border border-gray-300 rounded-xl bg-white focus-within:ring-2 focus-within:ring-forest-500 focus-within:border-forest-500 transition-all shadow-sm">
                                    <CardElement options={cardStyle} onChange={(e) => setCardError(e.error ? e.error.message : null)} />
                                </div>
                                {cardError && (
                                    <div className="mt-2 text-red-500 text-sm flex items-center gap-1">
                                        <AlertCircle className="w-4 h-4" />
                                        {cardError}
                                    </div>
                                )}
                            </div>
                        )}

                        {selectedMethod === 'upi' && (
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Enter UPI ID</label>
                                <input
                                    type="text"
                                    placeholder="username@bank"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-forest-500 outline-none"
                                    value={upiId}
                                    onChange={(e) => setUpiId(e.target.value)}
                                    required
                                />
                                <p className="text-xs text-gray-500 mt-2">Google Pay, PhonePe, Paytm, BHIM</p>
                            </div>
                        )}

                        {selectedMethod === 'netbanking' && (
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Select Bank</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-forest-500 outline-none bg-white">
                                    <option>HDFC Bank</option>
                                    <option>SBI</option>
                                    <option>ICICI Bank</option>
                                    <option>Axis Bank</option>
                                    <option>Kotak Mahindra Bank</option>
                                </select>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                <button
                    type="submit"
                    disabled={isProcessing || (!stripe && (selectedMethod === 'card' || selectedMethod === 'debit'))}
                    className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${isProcessing
                        ? 'bg-gray-400 cursor-not-allowed'
                        : selectedMethod === 'razorpay' ? 'bg-blue-600 hover:bg-blue-700 shadow-lg' : 'bg-forest-600 hover:bg-forest-700 shadow-lg'
                        }`}
                >
                    {isProcessing ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Processing...
                        </>
                    ) : (
                        <>
                            <Lock className="w-4 h-4" />
                            {selectedMethod === 'razorpay' ? `Pay ₹${amount.toFixed(2)} with Razorpay` : `Pay ₹${amount.toFixed(2)}`}
                        </>
                    )}
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-gray-400 text-xs">
                    <Lock className="w-3 h-3" />
                    <span>Payments are secure and encrypted</span>
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;
