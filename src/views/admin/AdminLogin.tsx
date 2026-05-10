'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import { toast } from 'react-hot-toast';

const AdminLogin = () => {
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password })
            });

            if (res.ok) {
                toast.success('Welcome to Admin Dashboard');
                router.push('/admin');
            } else {
                throw new Error('Invalid admin password');
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
