import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth, type UserProfile } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

const CreateProfile = () => {
    const { user, updateProfile } = useAuth();
    const { cartCount } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        mobile: '',
        email: '',
        building: '',
        state: '',
        pinCode: ''
    });

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }

        // Auto-fill known identifier
        if (user.identifier.includes('@')) {
            setFormData(prev => ({ ...prev, email: user.identifier }));
        } else {
            setFormData(prev => ({ ...prev, mobile: user.identifier }));
        }
    }, [user, navigate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.age || !formData.building || !formData.state || !formData.pinCode) {
            toast.error('Please fill in all required fields');
            return;
        }

        const profile: UserProfile = {
            name: formData.name,
            age: formData.age,
            email: formData.email,
            phone: formData.mobile,
            address: {
                building: formData.building,
                state: formData.state,
                pinCode: formData.pinCode
            }
        };

        updateProfile(profile);

        // Redirect logic
        if (cartCount > 0) {
            navigate('/checkout');
        } else {
            navigate('/');
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-mushroom-100 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl border border-mushroom-200"
            >
                <h2 className="text-3xl font-bold text-mushroom-900 mb-2 text-center">Complete Your Profile</h2>
                <p className="text-center text-mushroom-600 mb-8">Tell us a bit about yourself for faster checkouts.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-mushroom-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-mushroom-300 focus:ring-2 focus:ring-forest-500 outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-mushroom-700 mb-1">Age</label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-mushroom-300 focus:ring-2 focus:ring-forest-500 outline-none"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-mushroom-700 mb-1">Mobile Number</label>
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-mushroom-300 focus:ring-2 focus:ring-forest-500 outline-none"
                                placeholder="e.g. 9876543210"
                                required={!formData.email} // Required if email not present (simplified logic)
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-mushroom-700 mb-1">Email ID</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-mushroom-300 focus:ring-2 focus:ring-forest-500 outline-none"
                                placeholder="e.g. user@example.com"
                                required={!formData.mobile}
                            />
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                        <h3 className="text-lg font-semibold text-mushroom-800 mb-4">Address Details</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-mushroom-700 mb-1">Building No. / Flat / Street</label>
                                <input
                                    type="text"
                                    name="building"
                                    value={formData.building}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-mushroom-300 focus:ring-2 focus:ring-forest-500 outline-none"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-mushroom-700 mb-1">State</label>
                                    <input
                                        type="text"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg border border-mushroom-300 focus:ring-2 focus:ring-forest-500 outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-mushroom-700 mb-1">Pin Code</label>
                                    <input
                                        type="text"
                                        name="pinCode"
                                        value={formData.pinCode}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg border border-mushroom-300 focus:ring-2 focus:ring-forest-500 outline-none"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-forest-900 text-white font-bold rounded-xl hover:bg-forest-800 transition-colors shadow-lg"
                    >
                        Save Profile & Continue
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default CreateProfile;
