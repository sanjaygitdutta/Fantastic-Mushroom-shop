'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';

const Signup = () => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await signup(identifier, password);
            toast.success('Account created! Please complete your profile.');
            router.push('/create-profile');
        } catch (error: any) {
            toast.error(error.message || 'Failed to sign up');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-20 flex items-center justify-center bg-mushroom-100 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-mushroom-200"
            >
                <h2 className="text-3xl font-bold text-mushroom-900 mb-6 text-center">Create Account</h2>

                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-mushroom-700 mb-1">Email or Phone Number</label>
                        <input
                            type="text"
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-mushroom-300 focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all"
                            placeholder="e.g. user@example.com or 9876543210"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-mushroom-700 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-mushroom-300 focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-forest-900 text-white font-bold rounded-xl hover:bg-forest-800 transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>

                <p className="mt-6 text-center text-mushroom-600">
                    Already have an account?{' '}
                    <Link href="/login" className="text-forest-600 font-semibold hover:underline">
                        Sign in
                    </Link>
                </p>
            </motion.div>
        </div>
    );
};

export default Signup;
