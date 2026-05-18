'use client';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';
import { useRegion } from '../utils/region';

const Disclaimer = () => {
    const { t } = useTranslation();
    const { region } = useRegion();
    const isSG = region?.toUpperCase() === 'SG';

    return (
        <>
            <SEO 
                title={t('disclaimer_seo_title', { defaultValue: isSG ? "Legal Disclaimer SG | Fantastic Food Singapore" : "Legal Disclaimer | Fantastic Food" })}
                description={t('disclaimer_seo_desc', { defaultValue: "Read the legal disclaimers for the Fantastic Food price comparison engine, AI recipes, and organic mushroom shop." })}
                canonicalUrl="https://www.fantasticfood.in/disclaimer"
            />

            <div className="min-h-screen pt-24 pb-20 bg-cream-50">
                <div className="max-w-4xl mx-auto px-4">
                    
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-forest-100">
                        <h1 className="text-4xl md:text-5xl font-black font-display text-forest-900 mb-8 tracking-tight">
                            Legal Disclaimer
                        </h1>
                        
                        <div className="text-forest-500 mb-12 font-medium">
                            Last Updated: May 18, 2026
                        </div>

                        <div className="prose prose-lg prose-forest max-w-none space-y-12">
                            <section>
                                <h2 className="text-2xl font-black text-forest-900 mb-4">1. Accuracy of Prices & Grocery Availability</h2>
                                <p className="text-forest-700 leading-relaxed">
                                    Fantastic Food is an independent price comparison platform. The grocery prices, delivery fees, 
                                    promotional coupon codes, and product availabilities displayed on this website are gathered in real-time 
                                    or estimated based on historical crawl data from public online delivery services (including, 
                                    but not limited to, FairPrice, RedMart, Cold Storage, Zepto, Blinkit, BigBasket, and Swiggy Instamart).
                                </p>
                                <p className="text-forest-700 leading-relaxed mt-4">
                                    Because grocery prices and stock levels fluctuate constantly based on your exact location, delivery slots, 
                                    and platform demand, <strong>all prices are for informational purposes only and do not constitute legally 
                                    binding guarantees</strong>. You agree that Fantastic Food is not liable for any pricing discrepancies, 
                                    order issues, or delivery delays encountered on external delivery platforms. Always verify final prices on 
                                    the respective delivery app before checkout.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-forest-900 mb-4">2. No Affiliation with Third-Party Brands</h2>
                                <p className="text-forest-700 leading-relaxed">
                                    Fantastic Food is an independent comparison tool and <strong>is not officially affiliated, associated, 
                                    authorized, endorsed by, or in any way officially connected</strong> with any of the delivery apps, 
                                    supermarkets, or brands mentioned on this website (such as FairPrice, RedMart, Cold Storage, Blinkit, 
                                    Zepto, Swiggy Instamart, BigBasket, or JioMart). All product names, logos, and brands are the trademarks 
                                    of their respective owners.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-forest-900 mb-4">3. Recipe Safety & Cooking Disclaimer</h2>
                                <p className="text-forest-700 leading-relaxed">
                                    The recipes provided on this website (including custom recipes generated dynamically by our AI Kitchen Assistant 
                                    or featured on our community pages) are intended for educational and general culinary inspiration purposes only.
                                </p>
                                <div className="space-y-4 mt-4">
                                    <p className="text-forest-700">
                                        <strong>A. Food Safety & Allergens:</strong> You are solely responsible for ensuring that you do not use ingredients 
                                        to which you or your guests are allergic. Fantastic Food does not guarantee the accuracy, completeness, or 
                                        safety of ingredients or steps suggested by AI tools.
                                    </p>
                                    <p className="text-forest-700">
                                        <strong>B. Cooking Precautions:</strong> Always practice safe food handling and cook fresh ingredients 
                                        (including meat, poultry, seafood, dairy, and mushrooms) to their recommended safe internal temperatures to 
                                        prevent foodborne illnesses. Fantastic Food is not responsible for any adverse reactions, illness, injury, or 
                                        cooking mishaps resulting from recipes displayed on this platform.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-forest-900 mb-4">4. Mushroom Spawn & Fresh Harvest Sales</h2>
                                <p className="text-forest-700 leading-relaxed">
                                    For fresh paddy straw mushrooms and organic spawns purchased directly from our farm shop:
                                </p>
                                <ul className="list-disc pl-6 space-y-3 text-forest-700 mt-4">
                                    <li>
                                        <strong>Cultivation Yields:</strong> Mushroom spawns are organic biological cultures. Successful cultivation 
                                        and yield depend heavily on your local indoor environment, sterilization practices, humidity, substrate, 
                                        light, and temperature. Consequently, Fantastic Food cannot guarantee specific cultivation yields or harvest quantities.
                                    </li>
                                    <li>
                                        <strong>Safe Consumption:</strong> All fresh organic mushrooms harvested or purchased must be thoroughly washed 
                                        and properly cooked before eating.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-forest-900 mb-4">5. Limitation of Liability</h2>
                                <p className="text-forest-700 leading-relaxed">
                                    To the maximum extent permitted by applicable law, in no event shall Fantastic Food, its developers, or its 
                                    affiliates be liable for any direct, indirect, incidental, special, exemplary, or consequential damages 
                                    (including, but not limited to, loss of use, data, or profits; or business interruption) arising in any way out 
                                    of the use of this website, its tools, recipes, or products.
                                </p>
                            </section>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Disclaimer;
