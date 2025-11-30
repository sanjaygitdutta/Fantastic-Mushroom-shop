import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-forest-900 text-mushroom-100 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="text-2xl font-bold text-white tracking-tight mb-6 block flex items-center gap-2">
                            🍄 Fantastic<span className="text-mushroom-400">Mushroom</span>
                        </Link>
                        <p className="text-mushroom-300 mb-6 leading-relaxed">
                            Cultivating the finest organic mushrooms and delivering nature's superfood straight to your doorstep.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-mushroom-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-mushroom-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-mushroom-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Shop</h4>
                        <ul className="space-y-4">
                            <li><Link to="/?category=fresh" className="text-mushroom-300 hover:text-white transition-colors">Fresh Mushrooms</Link></li>
                            <li><Link to="/?category=dried" className="text-mushroom-300 hover:text-white transition-colors">Dried & Pantry</Link></li>
                            <li><Link to="/subscription" className="text-mushroom-300 hover:text-white transition-colors">Subscriptions</Link></li>
                            <li><Link to="/b2b" className="text-mushroom-300 hover:text-white transition-colors">Wholesale / B2B</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-mushroom-300 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/recipes" className="text-mushroom-300 hover:text-white transition-colors">Fungi Kitchen</Link></li>
                            <li><Link to="/contact" className="text-mushroom-300 hover:text-white transition-colors">Contact</Link></li>
                            <li><Link to="/faq" className="text-mushroom-300 hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <p className="text-mushroom-300 mb-4 text-sm">Get in touch with us</p>
                        <div className="space-y-3">
                            <div>
                                <p className="text-mushroom-400 text-xs mb-1">Phone Numbers:</p>
                                <a href="tel:+917602233220" className="text-mushroom-300 hover:text-white transition-colors block mb-1">
                                    📞 +91 7602233220
                                </a>
                                <a href="tel:+919531775665" className="text-mushroom-300 hover:text-white transition-colors block">
                                    📞 +91 9531775665
                                </a>
                            </div>
                            <div>
                                <p className="text-mushroom-400 text-xs mb-1">Email:</p>
                                <a href="mailto:info@fantasticmushroom.com" className="text-mushroom-300 hover:text-white transition-colors">
                                    ✉️ info@fantasticmushroom.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-forest-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-mushroom-400">
                    <p>&copy; 2025 Fantastic Mushroom. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
