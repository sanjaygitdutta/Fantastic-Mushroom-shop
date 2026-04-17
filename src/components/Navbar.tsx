import { useState, useRef } from 'react';
import { Menu, Search, User, X, ArrowRight, Bell, ChevronDown, Bot, Calculator, Compass, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { ShoppingBasket } from 'lucide-react';
import { POPULAR_SEARCHES } from '../data/mockPrices';

// ── Mega-menu data ─────────────────────────────────────────────────────────────
interface NavItem {
  to: string;
  icon: string;
  label: string;
  desc: string;
  soon?: boolean;
}

const AI_TOOLS: NavItem[] = [
  { to: '/chef-aika', icon: '👩‍🍳', label: 'Chef Aika', desc: 'AI fridge-to-recipe magic' },
  { to: '/meal-planner', icon: '🗓️', label: 'Meal Planner', desc: 'Budget 7-day meal plan' },
  { to: '/festival', icon: '🎊', label: 'Festival Planner', desc: 'Bulk shopping for festivals' },
  { to: '/health', icon: '🏥', label: 'Health Mode', desc: 'Nutrition & allergen scanner' },
];

const CALCULATORS: NavItem[] = [
  { to: '/basket', icon: '🧺', label: 'Basket Calculator', desc: 'Compare full grocery basket' },
  { to: '/meal-calculator', icon: '🍲', label: 'Meal Cost', desc: 'Cost per serving calculator' },
  { to: '/savings', icon: '💰', label: 'FoodScore', desc: 'Your savings dashboard' },
  { to: '/basket?group=true', icon: '🤝', label: 'Group Buy', desc: 'Share basket with friends' },
];

const DISCOVER: NavItem[] = [
  { to: '/community', icon: '🍳', label: 'Community Feed', desc: 'See what India is cooking!' },
  { to: '/recipes', icon: '📖', label: 'Recipes', desc: 'Global AI-generated recipes' },
  { to: '/coupons', icon: '🏷️', label: 'Coupons', desc: 'Latest platform coupon codes' },
  { to: '/seasonal', icon: '🌾', label: 'Seasonal Guide', desc: "What's fresh & cheap now" },
  { to: '/saved', icon: '🔔', label: 'My Watchlist', desc: 'Your price drop alerts' },
];

interface NavGroup {
  label: string;
  icon: React.ReactNode;
  items: NavItem[];
}

const NAV_GROUPS: NavGroup[] = [
  { label: 'AI Tools', icon: <Bot className="w-4 h-4" />, items: AI_TOOLS },
  { label: 'Calculators', icon: <Calculator className="w-4 h-4" />, items: CALCULATORS },
  { label: 'Discover', icon: <Compass className="w-4 h-4" />, items: DISCOVER },
];

// ── Mega dropdown panel ────────────────────────────────────────────────────────
const MegaPanel = ({ items, onClose }: { items: NavItem[]; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.18 }}
    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-forest-100 overflow-hidden p-2 z-50"
  >
    {items.map((item) => (
      item.soon ? (
        <div key={item.to} className="flex items-start gap-3 px-3 py-2.5 rounded-xl opacity-50 cursor-not-allowed">
          <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-forest-800">{item.label}</p>
              <span className="text-[9px] font-bold bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full uppercase tracking-wider">Soon</span>
            </div>
            <p className="text-xs text-forest-500 truncate">{item.desc}</p>
          </div>
        </div>
      ) : (
        <Link
          key={item.to}
          to={item.to}
          onClick={onClose}
          className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-forest-50 transition-colors group"
        >
          <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-forest-900 group-hover:text-moss-700 transition-colors">{item.label}</p>
            <p className="text-xs text-forest-500 truncate">{item.desc}</p>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-forest-300 group-hover:text-moss-600 mt-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
        </Link>
      )
    ))}
  </motion.div>
);

// ── Main Navbar ────────────────────────────────────────────────────────────────
const Navbar = () => {
  const { setIsCartOpen, cartCount } = useCart();
  const { isAuthenticated } = useAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null);
  const navigate = useNavigate();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenGroup(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenGroup(null), 120);
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
  };

  return (
    <>
      <nav className="fixed w-full z-50 bg-forest-900/95 backdrop-blur-md border-b border-forest-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-2.5">
              <div className="w-9 h-9 flex items-center justify-center overflow-hidden shadow-md">
                <img src="/logo.png" alt="Fantastic Food Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[17px] font-black text-white font-display tracking-tight">
                  Fantastic<span className="text-amber-400">Food</span>
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">

              {/* Compare — primary CTA */}
              <NavLink
                to="/compare"
                className={({ isActive }) =>
                  `nav-link px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive ? 'text-amber-400' : 'text-cream-200 hover:text-white hover:bg-forest-800'
                  }`
                }
              >
                Compare Prices
              </NavLink>

              {/* Grouped Mega Dropdowns */}
              {NAV_GROUPS.map((group) => (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(group.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      openGroup === group.label
                        ? 'text-white bg-forest-800'
                        : 'text-cream-300 hover:text-white hover:bg-forest-800'
                    }`}
                  >
                    {group.icon}
                    {group.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openGroup === group.label ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {openGroup === group.label && (
                      <MegaPanel items={group.items} onClose={() => setOpenGroup(null)} />
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Shop — standalone */}
              <NavLink
                to="/mushroom-shop"
                className={({ isActive }) =>
                  `flex items-center gap-1.5 nav-link px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'text-amber-400 font-semibold' : 'text-cream-300 hover:text-white hover:bg-forest-800'
                  }`
                }
              >
                <ShoppingBag className="w-4 h-4" /> Shop
              </NavLink>

            </div>

            {/* Right icons */}
            <div className="flex items-center gap-1.5">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-xl hover:bg-forest-800 transition-colors text-cream-300 hover:text-white"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Auth */}
              {isAuthenticated ? (
                <div className="flex gap-1">
                  <Link to="/saved" className="p-2 rounded-xl hover:bg-forest-800 transition-colors text-amber-400 hover:text-amber-300" title="Watchlist">
                    <Bell className="w-5 h-5" />
                  </Link>
                  <Link to="/profile" className="p-2 rounded-xl hover:bg-forest-800 transition-colors text-cream-300 hover:text-white" title="My Profile">
                    <User className="w-5 h-5" />
                  </Link>
                </div>
              ) : (
                <Link to="/login" className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-forest-900 font-bold text-sm transition-colors">
                  Sign In
                </Link>
              )}

              {/* Cart */}
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
                className="lg:hidden p-2 rounded-xl hover:bg-forest-800 transition-colors text-cream-300 hover:text-white"
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Search Overlay ─────────────────────────────────────────────────────── */}
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
                <button type="submit" className="btn-forest py-2 px-4 text-sm">Search</button>
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

      {/* ── Mobile Menu ────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 z-40 bg-forest-900 border-b border-forest-700 lg:hidden overflow-y-auto max-h-[80vh]"
          >
            <div className="px-4 py-4 space-y-1">
              <Link to="/compare" onClick={() => setIsMobileOpen(false)} className="flex items-center gap-2 py-3 px-3 rounded-xl bg-amber-500/10 text-amber-400 font-bold text-sm border border-amber-500/20 mb-3">
                <Search className="w-4 h-4" /> Compare Prices
              </Link>

              {NAV_GROUPS.map((group) => (
                <div key={group.label}>
                  <button
                    onClick={() => setMobileOpenGroup(mobileOpenGroup === group.label ? null : group.label)}
                    className="w-full flex items-center justify-between gap-2 py-2.5 px-3 rounded-xl text-cream-200 font-semibold text-sm hover:bg-forest-800 transition-colors"
                  >
                    <span className="flex items-center gap-2">{group.icon} {group.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform text-forest-400 ${mobileOpenGroup === group.label ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {mobileOpenGroup === group.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 mt-1 space-y-0.5 border-l border-forest-800 pl-3 pb-2">
                          {group.items.map((item) => (
                            item.soon ? (
                              <div key={item.to} className="flex items-center gap-2 py-2 px-2 text-forest-600 text-sm opacity-60">
                                <span>{item.icon}</span> {item.label}
                                <span className="text-[9px] font-bold bg-forest-800 text-forest-500 px-1.5 rounded-full">Soon</span>
                              </div>
                            ) : (
                              <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setIsMobileOpen(false)}
                                className="flex items-center gap-2 py-2 px-2 rounded-lg text-cream-300 hover:text-white hover:bg-forest-800 text-sm transition-colors"
                              >
                                <span>{item.icon}</span> {item.label}
                              </Link>
                            )
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link to="/mushroom-shop" onClick={() => setIsMobileOpen(false)} className="flex items-center gap-2 py-2.5 px-3 rounded-xl text-cream-200 font-semibold text-sm hover:bg-forest-800 transition-colors">
                <ShoppingBag className="w-4 h-4" /> Mushroom Shop
              </Link>

              {!isAuthenticated && (
                <div className="pt-3 border-t border-forest-800">
                  <Link to="/login" onClick={() => setIsMobileOpen(false)} className="w-full py-3 bg-amber-500 text-forest-900 font-bold rounded-xl text-center text-sm flex items-center justify-center">
                    Sign In / Sign Up
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
