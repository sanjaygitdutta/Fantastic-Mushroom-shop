'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Search, MapPin, X, Loader2, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { POPULAR_SEARCHES, MOCK_DB } from '../data/mockPrices';
import { MOCK_DB_SG } from '../data/mockPricesSG';
import { useRegion } from '../utils/region';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';

interface PriceSearchBarProps {
  variant?: 'hero' | 'page';
  initialQuery?: string;
}

const getPlaceholders = (t: any) => [
  t('search_placeholder_1'),
  t('search_placeholder_2'),
  t('search_placeholder_3'),
  t('search_placeholder_4'),
  t('search_placeholder_5'),
];

const PriceSearchBar = ({ variant = 'hero', initialQuery = '' }: PriceSearchBarProps) => {
  const [query, setQuery] = useState(initialQuery);
  const [pincode, setPincode] = useState('');
  const [showPincode, setShowPincode] = useState(false);
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  
  // Autocomplete Suggestions State
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { region } = useRegion();
  const PLACEHOLDERS = getPlaceholders(t);

  const DB = region === 'SG' ? MOCK_DB_SG : MOCK_DB;

  // Filter suggestions on query change
  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const trimmedQuery = query.toLowerCase().trim();
    const fuzzyKey = trimmedQuery.replace(/\s+/g, '%');
    
    let active = true;

    const fetchSuggestions = async () => {
      try {
        const targetPlatforms = region === 'SG' 
          ? ['fairprice', 'redmart', 'coldstorage', 'shengsiong', 'giant', 'grabmart', 'pandamart', 'amazon_sg']
          : ['blinkit', 'zepto', 'swiggy', 'bigbasket', 'amazon', 'jiomart', 'flipkart', 'instamart'];

        // 1. Query products first to get up to 40 unique product candidates matching the key
        const { data: productData, error: prodError } = await supabase
          .from('products')
          .select('id, canonical_name, icon, category')
          .or(`id.ilike.%${fuzzyKey}%,canonical_name.ilike.%${fuzzyKey}%`)
          .order('canonical_name', { ascending: true })
          .limit(40);

        if (prodError) throw prodError;

        if (productData && productData.length > 0 && active) {
          const productIds = productData.map(p => p.id);

          // 2. Query live_prices to filter only the products that have active prices in the current region
          const { data: priceData, error: priceError } = await supabase
            .from('live_prices')
            .select('item_name, platform_id, price')
            .in('item_name', productIds)
            .in('platform_id', targetPlatforms)
            .gt('price', 0);

          if (priceError) throw priceError;

          const activeProductIds = new Set(priceData?.map(p => p.item_name) || []);

          // Keep products that have active prices in this region
          const filteredProducts = productData.filter(p => activeProductIds.has(p.id));

          if (filteredProducts.length > 0) {
            const mapped = filteredProducts.map(p => ({
              key: p.id,
              query: p.canonical_name || p.id,
              canonicalName: p.canonical_name || p.id,
              icon: p.icon || '🛒',
              category: p.category || 'Grocery'
            }));

            if (active) {
              setSuggestions(mapped.slice(0, 5));
            }
          } else if (active) {
            runLocalFallback();
          }
        } else if (active) {
          runLocalFallback();
        }
      } catch (err) {
        console.error("Suggestions fetch error:", err);
        if (active) {
          runLocalFallback();
        }
      }
    };

    const runLocalFallback = () => {
      const filtered = Object.keys(DB)
        .map(key => ({ key, ...DB[key] }))
        .filter(item => {
          const canonical = (item.canonicalName || '').toLowerCase();
          const qKey = (item.query || '').toLowerCase();
          return canonical.includes(trimmedQuery) || qKey.includes(trimmedQuery);
        })
        .slice(0, 5);
      setSuggestions(filtered);
    };

    // Debounce the database fetch (300ms) to avoid spamming queries
    const delayDebounce = setTimeout(() => {
      fetchSuggestions();
    }, 300);

    return () => {
      active = false;
      clearTimeout(delayDebounce);
    };
  }, [query, DB, region]);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Autocomplete helper to highlight matches
  const highlightMatch = (text: string, search: string) => {
    if (!search) return text;
    const parts = text.split(new RegExp(`(${search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === search.toLowerCase() 
            ? <strong key={i} className="text-forest-900 font-bold">{part}</strong> 
            : <span key={i} className="text-forest-600 font-medium">{part}</span>
        )}
      </span>
    );
  };

  const handleSuggestionClick = (suggestionQuery: string) => {
    setQuery(suggestionQuery);
    setShowSuggestions(false);
    handleSearch(undefined, suggestionQuery);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) return;
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % (suggestions.length + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + (suggestions.length + 1)) % (suggestions.length + 1));
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0 && activeIndex < suggestions.length) {
        e.preventDefault();
        handleSuggestionClick(suggestions[activeIndex].query);
      } else if (activeIndex === suggestions.length) {
        e.preventDefault();
        handleSuggestionClick(query);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  // Restore stored location if any
  useEffect(() => {
    const saved = localStorage.getItem('ff_location');
    if (saved) {
      setPincode(saved);
    }
  }, []);

  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const { latitude, longitude } = position.coords;
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
        const data = await res.json();
        
        const city = data.address?.city || data.address?.state_district || data.address?.town;
        if (city) {
          setPincode(city);
          localStorage.setItem('ff_location', city);
          setShowPincode(false);
        }
      } catch (err) {
        console.error("Location error", err);
      } finally {
        setIsLoading(false);
      }
    }, () => {
      setIsLoading(false);
      alert("Unable to retrieve your location. Please check browser permissions.");
    });
  };

  // Initialize Speech Recognition
  useEffect(() => {
    // @ts-ignore
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-IN'; // Indian English for better local food term detection
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        handleSearch(undefined, transcript);
      };
      
      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognitionRef.current = recognition;
    } else {
      setSpeechSupported(false);
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (e) {
        console.error(e);
      }
    }
  };

  // Cycle placeholder text
  useEffect(() => {
    if (query) return;
    const timer = setInterval(() => {
      setPlaceholderIdx((i) => (i + 1) % PLACEHOLDERS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [query]);

  const handleSearch = async (e?: React.FormEvent, overrideQuery?: string) => {
    e?.preventDefault();
    const q = (overrideQuery || query).trim();
    if (!q) return;
    setShowSuggestions(false);
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 200)); // small UX delay
    router.push(`/compare?q=${encodeURIComponent(q)}${pincode ? `&pincode=${pincode}` : ''}`);
    setIsLoading(false);
  };

  const isHero = variant === 'hero';

  return (
    <div ref={searchContainerRef} className={`${isHero ? 'w-full max-w-3xl' : 'w-full max-w-2xl'} relative`}>
      <form onSubmit={handleSearch}>
        <div className={`search-bar flex items-center ${isHero ? 'p-2' : 'p-1.5'} gap-2`}>
          {/* Search icon */}
          <div className={`shrink-0 ${isHero ? 'pl-3' : 'pl-2'}`}>
            {isLoading ? (
              <Loader2 className={`${isHero ? 'w-6 h-6' : 'w-5 h-5'} text-forest-500 animate-spin`} />
            ) : (
              <Search className={`${isHero ? 'w-6 h-6' : 'w-5 h-5'} text-forest-400`} />
            )}
          </div>

          {/* Input */}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
              setActiveIndex(-1);
            }}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={handleKeyDown}
            placeholder={PLACEHOLDERS[placeholderIdx]}
            className={`flex-1 w-full min-w-0 bg-transparent outline-none text-forest-900 placeholder-forest-400 ${isHero ? 'text-lg py-2' : 'text-base py-1.5'} font-medium`}
            autoComplete="off"
          />

          {/* Clear */}
          <AnimatePresence>
            {query && (
              <motion.button
                type="button"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                onClick={() => { setQuery(''); setSuggestions([]); }}
                className="p-1.5 rounded-full hover:bg-forest-100 transition-colors"
              >
                <X className="w-4 h-4 text-forest-500" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Location */}
          <button
            type="button"
            onClick={() => setShowPincode(!showPincode)}
            className={`hidden sm:flex items-center gap-1 text-sm font-medium transition-colors px-3 py-2 rounded-xl ${
              showPincode || pincode
                ? 'text-forest-700 bg-forest-100'
                : 'text-forest-500 hover:text-forest-700 hover:bg-forest-50'
            }`}
          >
            <MapPin className="w-4 h-4" />
            {pincode || t('location')}
          </button>

          {/* Mic */}
          {speechSupported && (
            <button
              type="button"
              onClick={toggleListening}
              className={`p-2 rounded-full transition-all shrink-0 relative ${
                isListening 
                  ? 'bg-amber-100 text-amber-600 hover:bg-amber-200' 
                  : 'text-forest-500 hover:bg-forest-100'
              }`}
              title={isListening ? t('listening') : t('search_by_voice')}
            >
              {isListening && (
                <span className="absolute inset-0 rounded-full animate-ping bg-amber-400 opacity-40"></span>
              )}
              <Mic className={`w-5 h-5 ${isListening ? 'animate-pulse' : ''}`} />
            </button>
          )}

          {/* Search button */}
          <button
            type="submit"
            className={`btn-forest shrink-0 flex items-center justify-center gap-2 ${
              isHero 
                ? 'px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base' 
                : 'px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm'
            }`}
          >
            <span className="hidden sm:inline">{isHero ? t('compare_prices_btn') : t('search_btn')}</span>
            <Search className="w-4 h-4 sm:hidden" />
          </button>
        </div>

        {/* Pincode input */}
        <AnimatePresence>
          {showPincode && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-2 flex items-center gap-3 bg-white border border-forest-200 rounded-xl px-4 py-3">
                <MapPin className="w-4 h-4 text-forest-500 shrink-0" />
                <input
                  type="text"
                  placeholder={t('enter_pincode')}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  className="flex-1 bg-transparent text-sm text-forest-900 placeholder-forest-400 outline-none"
                  maxLength={6}
                />
                {pincode && (
                  <button
                    type="button"
                    onClick={() => { setPincode(''); localStorage.removeItem('ff_location'); }}
                    className="text-xs text-forest-500 hover:text-forest-700 font-bold"
                  >
                    {t('clear')}
                  </button>
                )}
                {!pincode && (
                  <button
                    type="button"
                    onClick={detectLocation}
                    className="text-xs bg-moss-100 text-moss-700 px-3 py-1.5 rounded-lg hover:bg-moss-200 transition-colors font-bold whitespace-nowrap"
                  >
                    {t('auto_detect')}
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      {/* Autocomplete Suggestions Dropdown */}
      <AnimatePresence>
        {showSuggestions && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 right-0 z-50 mt-2 bg-white border border-forest-200 rounded-2xl shadow-xl overflow-hidden max-h-72 overflow-y-auto"
          >
            <div className="py-2.5 px-4 bg-forest-50/50 border-b border-forest-100 text-xs font-bold text-forest-700 tracking-wider uppercase">
              {t('showing_suggestions', { defaultValue: 'Showing suggestions' })}
            </div>
            <ul>
              {suggestions.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <li
                    key={item.key}
                    onClick={() => handleSuggestionClick(item.query)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors ${
                      isActive ? 'bg-forest-50 text-forest-900' : 'hover:bg-forest-50/50 text-forest-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-forest-50 flex items-center justify-center text-lg border border-forest-100/50 shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">
                          {highlightMatch(item.canonicalName || item.key, query)}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs bg-forest-100/80 text-forest-700 font-semibold px-2 py-0.5 rounded-full select-none">
                      {t(item.category?.toLowerCase(), { defaultValue: item.category })}
                    </span>
                  </li>
                );
              })}
              
              {/* Fallback to hit enter */}
              <li
                onClick={() => handleSuggestionClick(query)}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer text-sm font-semibold border-t border-forest-100/40 ${
                  activeIndex === suggestions.length ? 'bg-forest-50 text-forest-900' : 'hover:bg-forest-50/50 text-forest-600'
                }`}
                onMouseEnter={() => setActiveIndex(suggestions.length)}
              >
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-lg shrink-0">
                  🔍
                </div>
                <span>
                  {t('search_all_results_for', { defaultValue: 'Search all results for' })} "{query}"
                </span>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popular searches (hero only) */}
      {isHero && (
        <div className="flex flex-wrap items-center gap-2 mt-4 pl-1">
          <span className="text-sm text-forest-600 font-medium">{t('popular_searches_label')}</span>
          {POPULAR_SEARCHES.slice(0, 6).map((item) => (
            <button
              key={item.query}
              onClick={() => handleSearch(undefined, item.query)}
              className="badge-category hover:scale-105 transition-transform"
            >
              <span>{item.icon}</span>
              {t(item.labelKey, { defaultValue: item.label })}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriceSearchBar; // refresh
