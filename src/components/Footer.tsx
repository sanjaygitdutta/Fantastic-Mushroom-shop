'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import { Instagram, Twitter, Facebook, Leaf, Users } from 'lucide-react';
import InstallPWA from './InstallPWA';
import { supabase } from '../lib/supabase';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const [visitorCount, setVisitorCount] = useState<number | null>(null);
    const [msgStatus, setMsgStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    useEffect(() => {
        const trackVisitor = async () => {
            try {
                // To prevent spamming the counter on every page navigation, 
                // we only increment once per session tab.
                const hasVisited = sessionStorage.getItem('ff_visited');
                
                if (!hasVisited) {
                    const { data, error } = await supabase.rpc('increment_visitor_count');
                    if (!error && data !== null) {
                        setVisitorCount(data);
                        sessionStorage.setItem('ff_visited', 'true');
                    }
                } else {
                    // Just fetch the current count without incrementing
                    const { data } = await supabase.from('site_stats').select('visitor_count').eq('id', 1).single();
                    if (data) setVisitorCount(data.visitor_count);
                }
            } catch (err) {
                console.error("Tracker error", err);
            }
        };

        trackVisitor();
    }, []);

    return (
        <footer className="bg-forest-900 border-t border-forest-800 text-cream-100 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 tracking-tight mb-6 block">
                            <div className="w-8 h-8 bg-forest-700 rounded-lg flex items-center justify-center shadow-md">
                                <Leaf className="w-4 h-4 text-moss-400" />
                            </div>
                            <span className="text-2xl font-black text-white font-display">
                                Fantastic<span className="text-amber-400">Food</span>
                            </span>
                        </Link>
                        <p className="text-forest-400 mb-6 leading-relaxed">
                            {t('footer_desc')}
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center text-forest-400 hover:bg-moss-500 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center text-forest-400 hover:bg-moss-500 hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center text-forest-400 hover:bg-moss-500 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-display">{t('footer_compare_prices')}</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/compare?q=vegetables" className="text-forest-400 hover:text-amber-400 transition-colors">{t('footer_fresh_veg')}</Link></li>
                            <li><Link href="/compare?q=fruits" className="text-forest-400 hover:text-amber-400 transition-colors">{t('footer_fruits')}</Link></li>
                            <li><Link href="/compare?q=dairy" className="text-forest-400 hover:text-amber-400 transition-colors">{t('footer_dairy')}</Link></li>
                            <li><Link href="/compare?q=meat" className="text-forest-400 hover:text-amber-400 transition-colors">{t('footer_meat')}</Link></li>
                            <li><Link href="/compare?q=snacks" className="text-forest-400 hover:text-amber-400 transition-colors">{t('footer_snacks')}</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-display">{t('footer_company')}</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/mushroom-shop" className="text-forest-400 hover:text-amber-400 transition-colors">{t('footer_mushroom_shop')}</Link></li>
                            <li><Link href="/about" className="text-forest-400 hover:text-amber-400 transition-colors">{t('footer_about')}</Link></li>
                            <li><Link href="/recipes" className="text-forest-400 hover:text-amber-400 transition-colors">{t('footer_fungi_kitchen')}</Link></li>
                            <li><Link href="/blog" className="text-forest-400 hover:text-amber-400 transition-colors">{t('footer_blog')}</Link></li>
                            <li><Link href="/directory" className="text-forest-400 hover:text-amber-400 transition-colors">{t('footer_sitemap')}</Link></li>
                            <li><Link href="/faq" className="text-forest-400 hover:text-amber-400 transition-colors">{t('footer_faq')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-display">{t('footer_contact')}</h4>
                        <p className="text-forest-400 mb-4 text-sm">{t('footer_get_in_touch')}</p>

                        <div className="space-y-4 text-sm">
                            <form 
                                onSubmit={async (e) => {
                                    e.preventDefault();
                                    setMsgStatus('sending');
                                    const form = e.target as HTMLFormElement;
                                    const msg = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                                    
                                    const { error } = await supabase.from('contact_messages').insert([{ message: msg }]);
                                    
                                    if (error) {
                                        setMsgStatus('error');
                                    } else {
                                        setMsgStatus('sent');
                                        form.reset();
                                        setTimeout(() => setMsgStatus('idle'), 3000);
                                    }
                                }} 
                                className="mt-2 pt-2"
                            >
                                <p className="text-forest-500 text-xs mb-2 font-semibold uppercase tracking-wider">{t('footer_send_msg_title')}</p>
                                <textarea 
                                    name="message" 
                                    placeholder={t('footer_msg_placeholder')}
                                    required 
                                    className="w-full bg-forest-950 text-sm text-white rounded-lg p-3 border border-forest-700/80 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none min-h-[80px] mb-2 placeholder-forest-600 transition-all" 
                                />
                                <button 
                                    type="submit" 
                                    disabled={msgStatus === 'sending' || msgStatus === 'sent'}
                                    className={`w-full transition-all text-xs font-bold py-2.5 rounded-lg active:scale-[0.98] ${
                                        msgStatus === 'sent' 
                                            ? 'bg-moss-500 text-white' 
                                            : msgStatus === 'error'
                                            ? 'bg-red-500 text-white'
                                            : 'bg-forest-800 hover:bg-amber-500 hover:text-forest-900 text-forest-300'
                                    }`}
                                >
                                    {msgStatus === 'sending' ? t('footer_sending') : msgStatus === 'sent' ? t('footer_sent') : msgStatus === 'error' ? t('footer_error') : t('footer_send_btn')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <InstallPWA />

                <div className="border-t border-forest-800/50 pt-8 flex flex-col items-center text-center">
                    <p className="text-forest-500 text-xs mb-6 max-w-3xl mx-auto">
                        {t('footer_disclaimer')}
                    </p>
                    <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm text-forest-500">
                        <p>{t('footer_copyright')}</p>
                    
                    {visitorCount !== null && (
                        <div className="flex items-center gap-2 mt-4 md:mt-0 font-medium bg-forest-800/50 px-3 py-1.5 rounded-full border border-forest-700">
                            <Users className="w-4 h-4 text-amber-400" />
                            <span className="text-forest-200">
                                <span className="text-white font-bold">{visitorCount.toLocaleString()}</span> {t('footer_savers_joined')}
                            </span>
                        </div>
                    )}

                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-forest-300 transition-colors">{t('footer_privacy')}</Link>
                        <Link href="/terms" className="hover:text-forest-300 transition-colors">{t('footer_terms')}</Link>
                        <Link href="/disclaimer" className="hover:text-forest-300 transition-colors">{t('footer_disclaimer_link', { defaultValue: 'Disclaimer' })}</Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
