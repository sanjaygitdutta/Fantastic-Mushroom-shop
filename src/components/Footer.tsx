import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Leaf } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-forest-900 border-t border-forest-800 text-cream-100 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 tracking-tight mb-6 block">
                            <div className="w-8 h-8 bg-forest-700 rounded-lg flex items-center justify-center shadow-md">
                                <Leaf className="w-4 h-4 text-moss-400" />
                            </div>
                            <span className="text-2xl font-black text-white font-display">
                                Fantastic<span className="text-amber-400">Food</span>
                            </span>
                        </Link>
                        <p className="text-forest-400 mb-6 leading-relaxed">
                            India's smartest food price comparator. Save money on every grocery order by finding the best deals across all major platforms.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center text-forest-400 hover:bg-moss-500 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center text-forest-400 hover:bg-moss-500 hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center text-forest-400 hover:bg-moss-500 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-display">Compare Prices</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/compare?q=vegetables" className="text-forest-400 hover:text-amber-400 transition-colors">Fresh Vegetables</Link></li>
                            <li><Link to="/compare?q=fruits" className="text-forest-400 hover:text-amber-400 transition-colors">Fruits & Berries</Link></li>
                            <li><Link to="/compare?q=dairy" className="text-forest-400 hover:text-amber-400 transition-colors">Dairy & Eggs</Link></li>
                            <li><Link to="/compare?q=meat" className="text-forest-400 hover:text-amber-400 transition-colors">Meat & Seafood</Link></li>
                            <li><Link to="/compare?q=snacks" className="text-forest-400 hover:text-amber-400 transition-colors">Snacks & Beverages</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-display">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/mushroom-shop" className="text-forest-400 hover:text-amber-400 transition-colors">Mushroom Shop</Link></li>
                            <li><Link to="/about" className="text-forest-400 hover:text-amber-400 transition-colors">About Us</Link></li>
                            <li><Link to="/recipes" className="text-forest-400 hover:text-amber-400 transition-colors">Fungi Kitchen</Link></li>
                            <li><Link to="/faq" className="text-forest-400 hover:text-amber-400 transition-colors">FAQ & Support</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-display">Contact Us</h4>
                        <p className="text-forest-400 mb-4 text-sm">Get in touch with us</p>
                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="text-forest-500 text-xs mb-1 font-semibold uppercase tracking-wider">Phone</p>
                                <a href="tel:+917602233220" className="text-forest-300 hover:text-amber-400 transition-colors block mb-1">
                                    +91 7602233220
                                </a>
                                <a href="tel:+919531775665" className="text-forest-300 hover:text-amber-400 transition-colors block">
                                    +91 9531775665
                                </a>
                            </div>
                            <div>
                                <p className="text-forest-500 text-xs mb-1 font-semibold uppercase tracking-wider">Email</p>
                                <a href="mailto:info@fantasticfood.in" className="text-forest-300 hover:text-amber-400 transition-colors">
                                    info@fantasticfood.in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-forest-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-forest-500">
                    <p>&copy; 2026 Fantastic Food Platform. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-forest-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-forest-300 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
