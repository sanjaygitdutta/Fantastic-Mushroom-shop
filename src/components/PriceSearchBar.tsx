import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, X, Loader2, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { POPULAR_SEARCHES } from '../data/mockPrices';

interface PriceSearchBarProps {
  variant?: 'hero' | 'page';
  initialQuery?: string;
}

const PLACEHOLDERS = [
  'Search "onion" across all platforms...',
  'Try "chicken breast" — compare instantly...',
  'Search "amul butter" for best price...',
  'Find "bread" cheapest near you...',
  'Compare "basmati rice" prices...',
];

const PriceSearchBar = ({ variant = 'hero', initialQuery = '' }: PriceSearchBarProps) => {
  const [query, setQuery] = useState(initialQuery);
  const [pincode, setPincode] = useState('');
  const [showPincode, setShowPincode] = useState(false);
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);

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
    navigate(`/compare?q=${encodeURIComponent(q)}${pincode ? `&pincode=${pincode}` : ''}`);
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
            {pincode || 'Location'}
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
              title={isListening ? "Listening..." : "Search by voice"}
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
            {isHero ? 'Compare Prices' : 'Search'}
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
                  placeholder="Enter your pincode (e.g. 400001)"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  className="flex-1 bg-transparent text-sm text-forest-900 placeholder-forest-400 outline-none"
                  maxLength={6}
                />
                {pincode && (
                  <button
                    type="button"
                    onClick={() => setPincode('')}
                    className="text-xs text-forest-500 hover:text-forest-700"
                  >
                    Clear
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
          <span className="text-sm text-forest-600 font-medium">Popular:</span>
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
