import { useState } from 'react';
import { ShoppingBasket, Menu, Search, User, ChevronDown, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const Navbar = () => {
    const { setIsCartOpen, cartCount } = useCart();
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    // Filter products based on search query
    const searchResults = searchQuery.length > 1
        ? products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase()))
        : [];

    const handleSearchNavigate = () => {
        setIsSearchOpen(false);
        setSearchQuery('');

        const element = document.getElementById('products');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/');
            setTimeout(() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        }
    };

    const categories = [
        { name: 'Fresh Mushrooms', link: '/category/fresh' },
        { name: 'Dried Mushrooms', link: '/category/dried' },
        { name: 'Snacks & Ready-to-Eat', link: '/category/snacks' },
        { name: 'Ready-to-Cook', link: '/category/ready-to-cook' },
        { name: 'Spices & Sauces', link: '/category/spices' },
        { name: 'Grow & Learn', link: '/category/grow-learn' },
        { name: 'Gifts & Bundles', link: '/category/gifts' },
        { name: 'Merch & Fun', link: '/category/merch' },
    ];

    return (
        <>
            <nav className="fixed w-full z-50 bg-mushroom-100/80 backdrop-blur-md border-b border-mushroom-300/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <span className="text-2xl font-bold text-forest-700 tracking-tight flex items-center gap-2">
                                    🍄 Fantastic<span className="text-mushroom-500">Mushroom</span>
                                </span>
                            </motion.div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {/* Shop Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setIsShopOpen(true)}
                                onMouseLeave={() => setIsShopOpen(false)}
                            >
                                <button className="flex items-center text-mushroom-900 hover:text-forest-500 transition-colors font-medium focus:outline-none">
                                    Shop <ChevronDown className="w-4 h-4 ml-1" />
                                </button>
                                <AnimatePresence>
                                    {isShopOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-mushroom-100 overflow-hidden py-2"
                                        >
                                            {categories.map((cat) => (
                                                <Link
                                                    key={cat.name}
                                                    to={cat.link}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-mushroom-50 hover:text-forest-600"
                                                >
                                                    {cat.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link to="/subscription" className="text-mushroom-900 hover:text-forest-500 transition-colors font-medium">
                                Subscription
                            </Link>
                            <Link to="/recipes" className="text-mushroom-900 hover:text-forest-500 transition-colors font-medium">
                                Recipes
                            </Link>
                            <Link to="/b2b" className="text-mushroom-900 hover:text-forest-500 transition-colors font-medium">
                                B2B / Bulk
                            </Link>
                            <Link to="/about" className="text-mushroom-900 hover:text-forest-500 transition-colors font-medium">
                                About Us
                            </Link>
                        </div>

                        {/* Icons */}
                        <div className="flex items-center space-x-6">
                            <Link to="/login">
                                <User className="w-5 h-5 text-mushroom-700 cursor-pointer hover:text-forest-500 transition-colors" />
                            </Link>
                            <button onClick={() => setIsSearchOpen(true)} className="focus:outline-none">
                                <Search className="w-5 h-5 text-mushroom-700 cursor-pointer hover:text-forest-500 transition-colors" />
                            </button>
                            <div
                                className="relative cursor-pointer group"
                                onClick={() => setIsCartOpen(true)}
                            >
                                <ShoppingBasket className="w-6 h-6 text-mushroom-700 group-hover:text-forest-500 transition-colors" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-forest-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                            <Menu className="md:hidden w-6 h-6 text-mushroom-700 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Search Overlay */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
                        onClick={() => setIsSearchOpen(false)}
                    >
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="p-4 border-b border-gray-100 flex items-center gap-3">
                                <Search className="w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search for mushrooms, kits, or recipes..."
                                    className="flex-1 text-lg outline-none text-gray-800 placeholder-gray-400"
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                    autoFocus
                                />
                                <button
                                    onClick={() => setIsSearchOpen(false)}
                                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>

                            {/* Search Results */}
                            {searchQuery.length > 1 && (
                                <div className="max-h-[60vh] overflow-y-auto p-2">
                                    {searchResults.length > 0 ? (
                                        <div className="space-y-1">
                                            {searchResults.map(product => (
                                                <button
                                                    key={product.id}
                                                    onClick={() => handleSearchNavigate()}
                                                    className="w-full flex items-center gap-4 p-3 hover:bg-mushroom-50 rounded-xl transition-colors text-left group"
                                                >
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-12 h-12 rounded-lg object-cover bg-gray-100"
                                                    />
                                                    <div className="flex-1">
                                                        <h4 className="font-medium text-gray-900 group-hover:text-forest-700">{product.name}</h4>
                                                        <p className="text-sm text-gray-500 capitalize">{product.category}</p>
                                                    </div>
                                                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-forest-500 opacity-0 group-hover:opacity-100 transition-all" />
                                                </button>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="p-8 text-center text-gray-500">
                                            <p>No results found for "{searchQuery}"</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
