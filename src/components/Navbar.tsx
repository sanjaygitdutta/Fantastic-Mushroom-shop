import { useState } from 'react';
import { Menu, Search, User, ChevronDown, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { ShoppingBasket } from 'lucide-react';
import { POPULAR_SEARCHES, FOOD_CATEGORIES } from '../data/mockPrices';

const Navbar = () => {
  const { setIsCartOpen, cartCount } = useCart();
  const { isAuthenticated } = useAuth();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const prefetchRoute = (route: string) => {
    switch (route) {
      case '/compare': import('../pages/Compare'); break;
      case '/basket': import('../pages/BasketCalculator'); break;
      case '/meal-calculator': import('../pages/MealCostCalculator'); break;
      case '/mushroom-shop': import('../pages/MushroomShop'); break;
      case '/recipes': import('../pages/Recipes'); break;
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    navigate(`/compare?q=${encodeURIComponent(searchQuery.trim())}`);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleQuickSearch = (q: string) => {
    navigate(`/compare?q=${encodeURIComponent(q)}`);
    setIsSearchOpen(false);
    setIsMobileOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      <nav className="fixed w-full z-50 bg-forest-900/95 backdrop-blur-md border-b border-forest-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 py-3">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-2.5">
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden shadow-md">
                <img src="/logo.png" alt="Fantastic Food Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-black text-white font-display tracking-tight">
                  Fantastic<span className="text-amber-400">Food</span>
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {/* Categories dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsCategoryOpen(true)}
                onMouseLeave={() => setIsCategoryOpen(false)}
              >
                <button className="flex items-center gap-1.5 nav-link px-4 py-2 rounded-lg hover:bg-forest-800 text-cream-200 hover:text-white">
                  Categories <ChevronDown className={`w-4 h-4 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isCategoryOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute left-0 mt-1 w-72 bg-white rounded-2xl shadow-2xl border border-forest-100 overflow-hidden p-3"
                    >
                      <div className="grid grid-cols-2 gap-1.5">
                        {FOOD_CATEGORIES.map((cat) => (
                          <button
                            key={cat.label}
                            onClick={() => cat.special ? navigate('/mushroom-shop') : handleQuickSearch(cat.query)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-colors text-left ${
                              cat.special
                                ? 'bg-earth-50 hover:bg-earth-100 text-earth-700 font-semibold'
                                : 'hover:bg-forest-50 text-forest-700'
                            }`}
                          >
                            <span>{cat.icon}</span>
                            <span className="truncate">{cat.label}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/compare"
                onMouseEnter={() => prefetchRoute('/compare')}
                className={({ isActive }) =>
                  `nav-link px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'text-amber-400 font-semibold' : 'text-cream-200 hover:text-white hover:bg-forest-800'
                  }`
                }
              >
                Compare
              </NavLink>
              <NavLink
                to="/recipes"
                onMouseEnter={() => prefetchRoute('/recipes')}
                className={({ isActive }) =>
                  `nav-link px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'text-amber-400 font-semibold' : 'text-cream-200 hover:text-white hover:bg-forest-800'
                  }`
                }
              >
                Recipes
              </NavLink>
              <NavLink
                to="/chef-aika"
                className={({ isActive }) =>
                  `flex items-center gap-1.5 nav-link px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'text-amber-400 font-semibold' : 'text-cream-200 hover:text-white hover:bg-forest-800'
                  }`
                }
              >
                Chef Aika
              </NavLink>
              <NavLink
                to="/coupons"
                className={({ isActive }) =>
                  `flex items-center gap-1 nav-link px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'text-amber-400 font-semibold' : 'text-cream-200 hover:text-white hover:bg-forest-800'
                  }`
                }
              >
                Coupons
              </NavLink>
              <NavLink
                to="/basket"
                onMouseEnter={() => prefetchRoute('/basket')}
                className={({ isActive }) =>
                  `flex items-center gap-1 nav-link px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'text-amber-400 font-semibold' : 'text-cream-200 hover:text-white hover:bg-forest-800'
                  }`
                }
              >
                Basket
              </NavLink>
              <NavLink
                to="/meal-calculator"
                onMouseEnter={() => prefetchRoute('/meal-calculator')}
                className={({ isActive }) =>
                  `flex items-center gap-1 nav-link px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'text-amber-400 font-semibold' : 'text-cream-200 hover:text-white hover:bg-forest-800'
                  }`
                }
              >
                Meal Cost
              </NavLink>
              <NavLink
                to="/mushroom-shop"
                onMouseEnter={() => prefetchRoute('/mushroom-shop')}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 nav-link px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'text-amber-400 font-semibold' : 'text-cream-200 hover:text-white hover:bg-forest-800'
                  }`
                }
              >
                Mushroom Shop
              </NavLink>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-2">
              {/* Search icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-xl hover:bg-forest-800 transition-colors text-cream-300 hover:text-white"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* User */}
              {isAuthenticated ? (
                <Link to="/profile" className="p-2 rounded-xl hover:bg-forest-800 transition-colors text-cream-300 hover:text-white" title="My Profile">
                  <User className="w-5 h-5" />
                </Link>
              ) : (
                <Link to="/login" className="p-2 rounded-xl hover:bg-forest-800 transition-colors text-cream-300 hover:text-white" title="Login">
                  <User className="w-5 h-5" />
                </Link>
              )}

              {/* Cart (mushroom shop only) */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-xl hover:bg-forest-800 transition-colors text-cream-300 hover:text-white"
              >
                <ShoppingBasket className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-forest-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden p-2 rounded-xl hover:bg-forest-800 transition-colors text-cream-300 hover:text-white"
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSearch} className="p-4 border-b border-gray-100 flex items-center gap-3">
                <Search className="w-5 h-5 text-forest-500" />
                <input
                  type="text"
                  placeholder="Search any food to compare prices..."
                  className="flex-1 text-lg outline-none text-forest-900 placeholder-forest-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                {searchQuery && (
                  <button type="button" onClick={() => setSearchQuery('')} className="p-1 hover:bg-gray-100 rounded-full">
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                )}
                <button type="submit" className="btn-forest py-2 px-4 text-sm">
                  Search
                </button>
              </form>
              <div className="p-4">
                <p className="text-xs text-forest-500 uppercase font-semibold tracking-wider mb-3">Popular Searches</p>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map((item) => (
                    <button
                      key={item.query}
                      onClick={() => handleQuickSearch(item.query)}
                      className="badge-category"
                    >
                      {item.icon} {item.label} <ArrowRight className="w-3 h-3" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-forest-900 border-b border-forest-700 md:hidden"
          >
            <div className="px-4 py-5 space-y-2">
              <NavLink to="/" end onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) => `block py-2.5 font-medium border-b border-forest-800 ${isActive ? 'text-amber-400' : 'text-cream-200'}`}>
                Home
              </NavLink>
              <NavLink to="/compare" onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) => `block py-2.5 font-medium border-b border-forest-800 ${isActive ? 'text-amber-400' : 'text-cream-200'}`}>
                Compare Prices
              </NavLink>
              <NavLink to="/basket" onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) => `block py-2.5 font-medium border-b border-forest-800 ${isActive ? 'text-amber-400' : 'text-cream-200'}`}>
                Basket Calculator
              </NavLink>
              <NavLink to="/meal-calculator" onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) => `block py-2.5 font-medium border-b border-forest-800 ${isActive ? 'text-amber-400' : 'text-cream-200'}`}>
                Meal Cost Calculator
              </NavLink>
              <NavLink to="/mushroom-shop" onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) => `block py-2.5 font-medium border-b border-forest-800 ${isActive ? 'text-amber-400' : 'text-cream-200'}`}>
                Mushroom Shop
              </NavLink>
              <NavLink to="/recipes" onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) => `block py-2.5 font-medium border-b border-forest-800 ${isActive ? 'text-amber-400' : 'text-cream-200'}`}>
                Recipes
              </NavLink>
              <NavLink to="/chef-aika" onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) => `block py-2.5 font-medium border-b border-forest-800 ${isActive ? 'text-amber-400' : 'text-cream-200'}`}>
                Chef Aika
              </NavLink>
              <NavLink to="/coupons" onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) => `block py-2.5 font-bold border-b border-forest-800 ${isActive ? 'text-amber-400' : 'text-cream-200'}`}>
                Coupon Codes
              </NavLink>
              <NavLink to="/about" onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) => `block py-2.5 font-medium ${isActive ? 'text-amber-400' : 'text-cream-200'}`}>
                About
              </NavLink>
              <div className="pt-4 pb-2">
                <p className="text-xs text-forest-400 uppercase tracking-wider mb-3">Quick Compare</p>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.slice(0, 6).map((item) => (
                    <button
                      key={item.query}
                      onClick={() => handleQuickSearch(item.query)}
                      className="text-sm bg-forest-800 text-cream-300 border border-forest-700 px-3 py-1.5 rounded-full hover:bg-forest-700 transition-colors"
                    >
                      {item.icon} {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
