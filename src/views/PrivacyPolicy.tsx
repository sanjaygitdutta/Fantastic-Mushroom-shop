'use client';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';
import { useRegion } from '../utils/region';

const PrivacyPolicy = () => {
    const { t } = useTranslation();
    const { region } = useRegion();
    const isSG = region?.toUpperCase() === 'SG';

    return (
        <>
            <SEO 
                title={t(isSG ? 'privacy_seo_title_sg' : 'privacy_seo_title', { defaultValue: isSG ? "Privacy Policy & Data Protection SG | Fantastic Food" : "Privacy Policy | Fantastic Food" })}
                description={t(isSG ? 'privacy_seo_desc_sg' : 'privacy_seo_desc', { defaultValue: isSG ? "Read how Fantastic Food Singapore protects, secures, and handles your user account data." : "Our commitment to protecting your data and privacy while shopping for mushrooms or comparing grocery prices." })}
                canonicalUrl="https://www.fantasticfood.in/privacy"
            />

            <div className="min-h-screen pt-24 pb-20 bg-cream-50">
                <div className="max-w-4xl mx-auto px-4">
                    
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-forest-100">
                        <h1 className="text-4xl md:text-5xl font-black font-display text-forest-900 mb-8 tracking-tight">
                            Privacy Policy
                        </h1>
                        
                        <div className="text-forest-500 mb-12 font-medium">
                            Last Updated: April 28, 2026
                        </div>

                        <div className="prose prose-lg prose-forest max-w-none space-y-12">
                            <section>
                                <h2 className="text-2xl font-black text-forest-900 mb-4">1. Introduction</h2>
                                <p className="text-forest-700 leading-relaxed">
                                    At Fantastic Food ("we," "our," or "us"), we operate as a grocery price comparison engine 
                                    and an organic mushroom farm. We are committed to protecting your personal information 
                                    and your right to privacy. This policy explains what information we collect, how we 
                                    use it, and what rights you have in relation to it.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-forest-900 mb-4">2. Information We Collect</h2>
                                <div className="space-y-4">
                                    <p className="text-forest-700 font-bold">A. Information you provide to us:</p>
                                    <p className="text-forest-700">
                                        We collect personal information that you voluntarily provide to us when you register on 
                                        the platform, express an interest in obtaining information about us or our products, 
                                        sign up for price drop alerts, or otherwise contact us. This includes your name, 
                                        email address, and contact messages.
                                    </p>
                                    <p className="text-forest-700 font-bold">B. Information collected automatically:</p>
                                    <p className="text-forest-700">
                                        We automatically collect certain information when you visit, use, or navigate the Website. 
                                        This includes device and usage information, such as your IP address, browser and device 
                                        characteristics, operating system, and language preferences.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-forest-900 mb-4">3. How We Use Your Information</h2>
                                <ul className="list-disc pl-6 space-y-3 text-forest-700">
                                    <li>To facilitate account creation and logon process.</li>
                                    <li>To send price drop notifications and grocery deal alerts.</li>
                                    <li>To process and fulfill orders for our mushroom shop.</li>
                                    <li>To respond to user inquiries and offer support.</li>
                                    <li>To improve our AI pricing algorithms and user experience.</li>
                                    <li>To serve personalized advertisements/affiliate content (via cookies).</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-forest-900 mb-4">4. Affiliate Links & Independence Disclosure</h2>
                                <p className="text-forest-700 leading-relaxed">
                                    Fantastic Food is an independent comparison platform and is not affiliated with, 
                                    endorsed by, or sponsored by Blinkit, Zepto, Swiggy, or any other brand mentioned 
                                    on our platform.
                                </p>
                                <p className="text-forest-700 leading-relaxed mt-4">
                                    As a price comparison platform, we provide links to third-party grocery apps. 
                                    When you click these links, a "cookie" may be stored on your browser to track 
                                    the referral for affiliate monetization. These third parties have their own 
                                    privacy policies, and we are not responsible for their data handling practices 
                                    once you leave our site.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-forest-900 mb-4">5. Data Security</h2>
                                <p className="text-forest-700 leading-relaxed">
                                    We use administrative, technical, and physical security measures to help protect your 
                                    personal information. Our data is stored using Supabase's secure infrastructure with 
                                    enterprise-grade encryption. However, please remember that no method of transmission 
                                    over the internet is 100% secure.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-forest-900 mb-4">6. Contact Us</h2>
                                <p className="text-forest-700 leading-relaxed">
                                    If you have questions or comments about this policy, you may email us at:
                                </p>
                                <div className="mt-4 p-6 bg-forest-50 rounded-2xl border border-forest-100">
                                    <p className="font-bold text-forest-900">Fantastic Food Support</p>
                                    <p className="text-forest-600">Email: sanjoydutta1200@gmail.com</p>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
