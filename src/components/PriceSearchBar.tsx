'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Search, MapPin, X, Loader2, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { POPULAR_SEARCHES } from '../data/mockPrices';
import { useTranslation } from 'react-i18next';

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
  
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);
  const { t } = useTranslation();
  const PLACEHOLDERS = getPlaceholders(t);

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
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 200)); // small UX delay
    router.push(`/compare?q=${encodeURIComponent(q)}${pincode ? `&pincode=${pincode}` : ''}`);
    setIsLoading(false);
  };

  const isHero = variant === 'hero';

  return (
    <div className={isHero ? 'w-full max-w-3xl' : 'w-full max-w-2xl'}>
      <form onSubmit={handleSearch}>
        <div className={`search-bar flex items-center ${isHero ? 'p-2' : 'p-1.5'} gap-2`}>
          {/* Search icon */}
          <div className={`flex-shrink-0 ${isHero ? 'pl-3' : 'pl-2'}`}>
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
            onChange={(e) => setQuery(e.target.value)}
            placeholder={PLACEHOLDERS[placeholderIdx]}
            className={`flex-1 bg-transparent outline-none text-forest-900 placeholder-forest-400 ${isHero ? 'text-lg py-2' : 'text-base py-1.5'} font-medium`}
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
                onClick={() => setQuery('')}
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
              className={`p-2 rounded-full transition-all flex-shrink-0 relative ${
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
            className={`btn-forest flex-shrink-0 flex items-center gap-2 ${isHero ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'}`}
          >
            {isHero ? t('compare_prices_btn') : t('search_btn')}
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
                <MapPin className="w-4 h-4 text-forest-500 flex-shrink-0" />
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
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriceSearchBar;
