'use client';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';
import { useRegion } from '../utils/region';

const TermsOfService = () => {
    const { t } = useTranslation();
    const { region } = useRegion();
    const isSG = region?.toUpperCase() === 'SG';

    return (
        <>
            <SEO 
                title={t(isSG ? 'terms_seo_title_sg' : 'terms_seo_title', { defaultValue: isSG ? "Terms of Service & Conditions SG | Fantastic Food" : "Terms of Service | Fantastic Food" })}
                description={t(isSG ? 'terms_seo_desc_sg' : 'terms_seo_desc', { defaultValue: isSG ? "Read the terms, rules, and conditions for using the Fantastic Food price comparison engine in Singapore." : "The legal terms and conditions for using the Fantastic Food price comparison platform and mushroom shop." })}
                canonicalUrl="https://www.fantasticfood.in/terms"
            />

            <div className="min-h-screen pt-24 pb-20 bg-cream-50">
                <div className="max-w-4xl mx-auto px-4">
                    
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-forest-100">
                        <h1 className="text-4xl md:text-5xl font-black font-display text-forest-900 mb-8 tracking-tight">
                            Terms of Service
                        </h1>
                        
                        <div className="text-forest-500 mb-12 font-medium">
                            Last Updated: April 28, 2026
                        </div>

                        <div className="prose prose-lg prose-forest max-w-none space-y-12">
                            <section>
                                <h2 className="text-2xl font-black text-forest-900 mb-4">1. Agreement to Terms</h2>
                                <p className="text-forest-700 leading-relaxed">
                                    By accessing or using our Website (https://www.fantasticfood.in), you agree to be bound by 
                                    these Terms of Service. If you do not agree with all of these terms, you are 
                                    prohibited from using the site and must discontinue use immediately.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-forest-900 mb-4">2. Price Comparison & Data Accuracy</h2>
                                <p className="text-forest-700 leading-relaxed">
                                    Fantastic Food provides a price comparison service. While our AI attempts to provide 
                                    the most accurate real-time pricing from third-party apps (Blinkit, Zepto, Swiggy, etc.), 
                                    we cannot guarantee the precision or availability of prices at the moment of your checkout. 
                                    All third-party prices are provided "as-is" for information purposes only.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-forest-900 mb-4">3. Mushroom Shop & Direct Sales</h2>
                                <p className="text-forest-700 leading-relaxed">
                                    Direct purchases of organic mushrooms from our farm are subject to availability. 
                                    We reserve the right to limit order quantities. Shipping times are estimates 
                                    and not guaranteed, particularly for fresh produce which depends on logistical 
                                    factors in Rural India.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-forest-900 mb-4">4. Intellectual Property</h2>
                                <p className="text-forest-700 leading-relaxed">
                                    Unless otherwise indicated, the Website, including our proprietary AI recipe 
                                    generation system (Chef Aika), our marketplace code, logo designs, and 
                                    proprietary content, is our property and protected by copyright and 
                                    trademark laws.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-forest-900 mb-4">5. Affiliate Disclosure & Independence</h2>
                                <p className="text-forest-700 leading-relaxed mb-4">
                                    Fantastic Food is an independent comparison platform and is not affiliated with, 
                                    endorsed by, or sponsored by Blinkit, Zepto, or any other brand mentioned 
                                    on our platform.
                                </p>
                                <p className="text-forest-700 leading-relaxed">
                                    Some of the links on this site are affiliate links. This means that if you click on 
                                    a link and purchase an item from a partner app (Amazon Fresh), we may 
                                    receive an affiliate commission at no extra cost to you. This helps support 
                                    the free use of our price engine.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-forest-900 mb-4">6. Limitation of Liability</h2>
                                <p className="text-forest-700 leading-relaxed">
                                    In no event shall Fantastic Food or its directors be liable for any indirect, 
                                    consequential, or incidental damages arising out of your use of the platform. 
                                    We are not responsible for the quality, delivery, or safety of products 
                                    purchased through third-party apps we compare.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-forest-900 mb-4">7. Governing Law</h2>
                                <p className="text-forest-700 leading-relaxed">
                                    These terms shall be governed by and defined following the laws of India. 
                                    Fantastic Food and yourself irrevocably consent that the courts of West Bengal 
                                    shall have exclusive jurisdiction to resolve any dispute which may arise.
                                </p>
                            </section>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default TermsOfService;
