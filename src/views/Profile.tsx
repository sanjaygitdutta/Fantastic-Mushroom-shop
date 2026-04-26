'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { User, Settings, BookOpen, ShoppingBag, LogOut, ArrowRight, Trash2, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

type Tab = 'dashboard' | 'cookbook' | 'orders' | 'settings';

interface CommunityPost {
    id: string;
    recipe_name: string;
    recipe_ingredients: string[];
    likes: number;
    created_at: string;
}

const Profile = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const { user, logout, isAuthenticated, updateProfile } = useAuth();
    const [activeTab, setActiveTab] = useState<Tab>('dashboard');
    
    // Cookbook state
    const [myPosts, setMyPosts] = useState<CommunityPost[]>([]);
    const [loadingPosts, setLoadingPosts] = useState(false);

    // Settings state
    const [settingsForm, setSettingsForm] = useState({
        dietaryPreference: '',
        familySize: 2
    });

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
        } else if (user?.profile) {
            setSettingsForm({
                dietaryPreference: user.profile.dietaryPreference || 'None',
                familySize: user.profile.familySize || 2
            });
        }
    }, [isAuthenticated, navigate, user]);

    useEffect(() => {
        if (activeTab === 'cookbook' && user?.profile?.name) {
            fetchMyPosts();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab, user?.profile?.name]);

    const fetchMyPosts = async () => {
        setLoadingPosts(true);
        try {
            const { data, error } = await supabase
                .from('community_posts')
                .select('*')
                .ilike('user_name', user?.profile?.name || '')
                .order('created_at', { ascending: false });
                
            if (!error && data) {
                setMyPosts(data);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoadingPosts(false);
        }
    };

    const deletePost = async (id: string) => {
        if (!confirm(t('profile_delete_confirm'))) return;
        
        try {
            const { error } = await supabase.from('community_posts').delete().eq('id', id);
            if (error) throw error;
            setMyPosts(prev => prev.filter(p => p.id !== id));
            toast.success(t('profile_delete_success'));
        } catch (err) {
            toast.error(t('profile_delete_error'));
        }
    };

    const handleSaveSettings = (e: React.FormEvent) => {
        e.preventDefault();
        if (user && user.profile) {
            updateProfile({
                ...user.profile,
                dietaryPreference: settingsForm.dietaryPreference,
                familySize: settingsForm.familySize
            });
        }
    };

    const handleSignOut = () => {
        logout();
        router.push('/');
    };

    if (!user) return <div className="min-h-screen pt-24 text-center flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-forest-500" /></div>;

    const mockSavings = 1450; // Visual motivation

    return (
        <div className="min-h-screen pt-24 pb-16 bg-cream-50 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
                
                {/* Sidebar */}
                <div className="md:w-64 flex-shrink-0">
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-forest-100 sticky top-28">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center text-forest-600 font-bold text-xl">
                                {user.profile?.name?.[0]?.toUpperCase() || <User className="w-6 h-6" />}
                            </div>
                            <div>
                                <h3 className="font-bold text-forest-900 leading-tight truncate w-32">{user.profile?.name || 'Hello'}</h3>
                                <p className="text-xs text-forest-500 truncate w-32">{user.identifier}</p>
                            </div>
                        </div>

                        <nav className="space-y-2">
                            <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'dashboard' ? 'bg-forest-900 text-white' : 'text-forest-600 hover:bg-forest-50'}`}>
                                <User className="w-5 h-5" /> {t('profile_dashboard')}
                            </button>
                            <button onClick={() => setActiveTab('cookbook')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'cookbook' ? 'bg-forest-900 text-white' : 'text-forest-600 hover:bg-forest-50'}`}>
                                <BookOpen className="w-5 h-5" /> {t('profile_cookbook')}
                            </button>
                            <button onClick={() => setActiveTab('orders')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'orders' ? 'bg-forest-900 text-white' : 'text-forest-600 hover:bg-forest-50'}`}>
                                <ShoppingBag className="w-5 h-5" /> {t('profile_orders')}
                            </button>
                            <button onClick={() => setActiveTab('settings')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'settings' ? 'bg-forest-900 text-white' : 'text-forest-600 hover:bg-forest-50'}`}>
                                <Settings className="w-5 h-5" /> {t('profile_settings')}
                            </button>
                        </nav>

                        <div className="mt-8 pt-8 border-t border-forest-50">
                            <button onClick={handleSignOut} className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-red-600 hover:bg-red-50 transition-colors">
                                <LogOut className="w-5 h-5" /> {t('profile_sign_out')}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 min-w-0">
                    <AnimatePresence mode="wait">
                        {activeTab === 'dashboard' && (
                            <motion.div key="dash" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                                <h1 className="text-3xl font-black font-display text-forest-900 mb-6">{t('profile_welcome_back', { name: user.profile?.name?.split(' ')[0] })}</h1>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-3xl p-6 text-black shadow-lg">
                                        <Sparkles className="w-6 h-6 mb-4 opacity-50" />
                                        <p className="text-sm font-bold uppercase tracking-wider mb-1 opacity-80">{t('profile_lifetime_savings')}</p>
                                        <p className="text-3xl font-black">₹{mockSavings}</p>
                                    </div>
                                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-forest-100 flex flex-col justify-between">
                                        <div>
                                            <p className="text-sm font-bold text-forest-500 uppercase tracking-wider mb-1">{t('profile_meal_plan_diet')}</p>
                                            <p className="text-xl font-black text-forest-900">{t(`profile_diet_${user.profile?.dietaryPreference?.toLowerCase().replace(' ', '_')}`) || user.profile?.dietaryPreference || t('profile_not_set')}</p>
                                        </div>
                                        <button onClick={() => setActiveTab('settings')} className="text-sm text-forest-500 hover:text-amber-600 font-bold text-left mt-4 underline">{t('profile_change_diet')}</button>
                                    </div>
                                    <div className="bg-moss-900 text-white rounded-3xl p-6 shadow-sm flex flex-col justify-center items-start">
                                        <p className="text-sm font-bold text-moss-300 uppercase tracking-wider mb-2">{t('profile_build_plan')}</p>
                                        <button onClick={() => router.push('/meal-planner')} className="bg-amber-400 text-black px-4 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-amber-300 transition w-full justify-center">
                                            {t('profile_meal_planner')} <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'cookbook' && (
                            <motion.div key="cook" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                                    <h2 className="text-3xl font-black font-display text-forest-900">{t('profile_cookbook')}</h2>
                                    <button onClick={() => router.push('/community')} className="bg-forest-100 text-forest-800 px-4 py-2 rounded-xl font-bold hover:bg-forest-200">
                                        {t('profile_browse_community')}
                                    </button>
                                </div>
                                
                                <div className="bg-white rounded-3xl p-6 shadow-sm border border-forest-100 min-h-[400px]">
                                    {loadingPosts ? (
                                        <div className="flex justify-center items-center h-48"><Loader2 className="w-8 h-8 animate-spin text-forest-400" /></div>
                                    ) : myPosts.length > 0 ? (
                                        <div className="space-y-4">
                                            {myPosts.map(post => (
                                                <div key={post.id} className="flex justify-between items-center p-4 border border-forest-50 hover:bg-cream-50 rounded-2xl transition">
                                                    <div>
                                                        <h3 className="font-bold text-forest-900 text-lg">{post.recipe_name}</h3>
                                                        <p className="text-sm text-forest-500">{new Date(post.created_at).toLocaleDateString()} • {post.likes} {t('profile_likes')} • {post.recipe_ingredients.length} {t('profile_ingredients')}</p>
                                                    </div>
                                                    <button onClick={() => deletePost(post.id)} className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition">
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center py-20">
                                            <div className="bg-forest-50 w-16 h-16 rounded-full flex justify-center items-center mx-auto mb-4">
                                                <BookOpen className="w-8 h-8 text-forest-300" />
                                            </div>
                                            <p className="text-forest-600 font-medium mb-4">{t('profile_no_recipes')}</p>
                                            <button onClick={() => router.push('/community')} className="bg-forest-900 text-cream-50 px-6 py-3 rounded-xl font-bold hover:bg-forest-800">{t('profile_post_recipe')}</button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'orders' && (
                            <motion.div key="orders" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                                <h2 className="text-3xl font-black font-display text-forest-900 mb-6">{t('profile_mushroom_orders')}</h2>
                                <div className="bg-white rounded-3xl shadow-sm border border-forest-100 p-8">
                                    {user?.orders && user.orders.length > 0 ? (
                                        <div className="space-y-4">
                                            {user.orders.map((order) => (
                                                <div key={order.id} className="border border-forest-50 bg-cream-50 rounded-2xl p-6">
                                                    <div className="flex justify-between items-start mb-4">
                                                        <div>
                                                            <p className="font-bold text-forest-900 font-mono">{order.id}</p>
                                                            <p className="text-sm text-forest-500">{new Date(order.date).toLocaleString()}</p>
                                                        </div>
                                                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${order.status === 'Delivered' ? 'bg-moss-100 text-moss-700' :
                                                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                                                                'bg-amber-100 text-amber-700'
                                                            }`}>
                                                            {order.status}
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between items-center pt-4 border-t border-forest-100">
                                                        <span className="text-forest-600 font-medium">{order.items.length} {t('profile_items')}</span>
                                                        <span className="text-xl font-black text-forest-900">₹{order.total.toFixed(2)}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center py-16">
                                            <ShoppingBag className="w-12 h-12 text-forest-200 mx-auto mb-4" />
                                            <p className="text-forest-500 mb-4">{t('profile_no_orders')}</p>
                                            <button onClick={() => router.push('/mushroom-shop')} className="text-amber-600 font-bold hover:underline">{t('profile_visit_shop')}</button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'settings' && (
                            <motion.div key="settings" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                                <h2 className="text-3xl font-black font-display text-forest-900 mb-6">{t('profile_user_settings')}</h2>
                                <form onSubmit={handleSaveSettings} className="bg-white rounded-3xl p-8 shadow-sm border border-forest-100 max-w-2xl">
                                    <div className="flex items-center gap-3 p-4 bg-blue-50 text-blue-800 rounded-2xl mb-8">
                                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                        <p className="text-sm font-medium">{t('profile_settings_hint')}</p>
                                    </div>
                                    
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-bold text-forest-700 mb-2">{t('profile_dietary_pref')}</label>
                                            <select
                                                value={settingsForm.dietaryPreference}
                                                onChange={(e) => setSettingsForm({ ...settingsForm, dietaryPreference: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-forest-200 bg-cream-50 focus:border-amber-500 outline-none transition"
                                            >
                                                {['None', 'Vegetarian', 'Vegan', 'Jain', 'High Protein', 'Keto', 'Diabetes Friendly'].map(d => (
                                                    <option key={d} value={d}>{t(`profile_diet_${d.toLowerCase().replace(' ', '_')}`) || d}</option>
                                                ))}
                                            </select>
                                        </div>
                                        
                                        <div>
                                            <label className="block text-sm font-bold text-forest-700 mb-2">{t('profile_family_size')}</label>
                                            <div className="flex items-center gap-4">
                                                <button type="button" onClick={() => setSettingsForm(s => ({ ...s, familySize: Math.max(1, s.familySize - 1) }))} className="w-12 h-12 rounded-xl bg-forest-100 text-forest-800 font-black hover:bg-forest-200 transition">-</button>
                                                <span className="text-2xl font-black flex-1 text-center text-forest-900">{settingsForm.familySize}</span>
                                                <button type="button" onClick={() => setSettingsForm(s => ({ ...s, familySize: s.familySize + 1 }))} className="w-12 h-12 rounded-xl bg-forest-100 text-forest-800 font-black hover:bg-forest-200 transition">+</button>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" className="mt-8 w-full bg-forest-900 text-cream-50 font-bold py-4 rounded-xl hover:bg-forest-800 transition active:scale-95 shadow-md">
                                        {t('profile_save_prefs')}
                                    </button>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
};

export default Profile;
