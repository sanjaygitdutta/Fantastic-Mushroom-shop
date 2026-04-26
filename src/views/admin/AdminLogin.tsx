'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import { toast } from 'react-hot-toast';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Mock Admin Authentication
            await new Promise(resolve => setTimeout(resolve, 800));
            if (email === 'admin@fantasticfood.in' && password === 'admin123') {
                localStorage.setItem('mushroom_admin', 'true');
                toast.success('Welcome to Admin Dashboard');
                router.push('/admin');
            } else {
                throw new Error('Invalid admin credentials. Hint: use admin@fantasticfood.in / admin123');
            }
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-900 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white tracking-tight">Admin Portal</h2>
                    <p className="text-gray-400 mt-2 text-sm">Secure access for staff only</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">Admin Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-gray-700/50 border border-gray-600 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                            placeholder="admin@fantasticfood.in"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-gray-700/50 border border-gray-600 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 mt-4 bg-amber-500 text-gray-900 font-bold rounded-xl hover:bg-amber-400 transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Authenticating...' : 'Access Dashboard'}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
