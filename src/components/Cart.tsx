'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

import { useCart } from '../context/CartContext';

const Cart = () => {
    const { isCartOpen, setIsCartOpen, items, removeFromCart, updateQuantity, cartTotal } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-mushroom-100">
                            <h2 className="text-2xl font-bold text-mushroom-900 flex items-center gap-2">
                                <ShoppingBag className="w-6 h-6 text-forest-500" />
                                Your Cart
                            </h2>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 hover:bg-mushroom-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-mushroom-500" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <ShoppingBag className="w-16 h-16 text-mushroom-300" />
                                    <p className="text-mushroom-500 text-lg">Your basket is empty</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="text-forest-500 font-semibold hover:underline"
                                    >
                                        Start Shopping
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <motion.div
                                        layout
                                        key={`${item.id}-${item.selectedWeight || 'unit'}`}
                                        className="flex gap-4 bg-mushroom-50/50 p-4 rounded-xl"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-lg"
                                        />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <div>
                                                    <h3 className="font-semibold text-mushroom-900">{item.name}</h3>
                                                    {item.selectedWeight && (
                                                        <p className="text-xs text-forest-600 font-medium mt-0.5">
                                                            {item.selectedWeight}g
                                                            {item.isCustomWeight && ' (custom)'}
                                                        </p>
                                                    )}
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id, item.selectedWeight)}
                                                    className="text-mushroom-400 hover:text-red-500 transition-colors"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <p className="text-forest-900 font-bold mb-3">
                                                ₹{item.calculatedPrice.toFixed(2)}
                                                {item.selectedWeight && (
                                                    <span className="text-xs text-gray-500 ml-2">
                                                        each
                                                    </span>
                                                )}
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedWeight)}
                                                    className="p-1 hover:bg-white rounded-full transition-colors border border-transparent hover:border-mushroom-200"
                                                >
                                                    <Minus className="w-4 h-4 text-mushroom-600" />
                                                </button>
                                                <span className="font-medium text-mushroom-900 w-4 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedWeight)}
                                                    className="p-1 hover:bg-white rounded-full transition-colors border border-transparent hover:border-mushroom-200"
                                                >
                                                    <Plus className="w-4 h-4 text-mushroom-600" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {items.length > 0 && (
                            <div className="p-6 border-t border-mushroom-100 bg-mushroom-50/30">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-mushroom-600">Subtotal</span>
                                    <span className="text-2xl font-bold text-mushroom-900">₹{cartTotal.toFixed(2)}</span>
                                </div>
                                <Link href="/checkout"
                                    onClick={() => setIsCartOpen(false)}
                                    className="block w-full py-4 bg-forest-900 text-white font-bold rounded-xl hover:bg-forest-800 transition-colors shadow-lg shadow-forest-900/20 text-center"
                                >
                                    Checkout
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Cart;
