import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import PriceSearchBar from '../components/PriceSearchBar';
import CompareResultsGrid from '../components/CompareResultsGrid';
import FoodCategoryBrowser from '../components/FoodCategoryBrowser';
import { searchPrices } from '../data/mockPrices';
import type { CompareResult } from '../data/mockPrices';
import SEO from '../components/SEO';

// Loading skeleton
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl p-5 border border-forest-100">
    <div className="flex items-center gap-3 mb-4">
      <div className="skeleton w-10 h-10" />
      <div className="space-y-1.5">
        <div className="skeleton w-24 h-4" />
        <div className="skeleton w-16 h-3" />
      </div>
    </div>
    <div className="skeleton w-32 h-3 mb-3" />
    <div className="skeleton w-20 h-7 mb-2" />
    <div className="skeleton w-full h-10 mt-4" />
  </div>
);

const ComparePage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const pincode = searchParams.get('pincode') || '';

  const [result, setResult] = useState<CompareResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [lastQuery, setLastQuery] = useState('');

  useEffect(() => {
    if (!query || query === lastQuery) return;
    setLastQuery(query);
    setLoading(true);
    setError('');
    setResult(null);

    searchPrices(query, pincode)
      .then((data) => {
        setResult(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Something went wrong. Please try again.');
        setLoading(false);
      });
  }, [query, pincode]);

  const seoTitle = query ? `Compare Prices for ${query.charAt(0).toUpperCase() + query.slice(1)}` : 'Compare Food Prices Online';
  const seoDescription = query ? `Compare real-time prices for ${query} across JioMart, Zepto, Blinkit, and BigBasket to find the cheapest option.` : 'Search for any grocery or food item to compare its price across top Indian delivery platforms.';

  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEO title={seoTitle} description={seoDescription} canonicalUrl={`https://www.fantasticfood.in/compare${query ? `?q=${query}` : ''}`} />
      {/* Header bar */}
      <div className="bg-forest-900 text-white py-6 px-4 mb-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-forest-300 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-forest-200 mb-1 font-display">
                Comparing prices across 6 platforms
              </h1>
              {pincode && (
                <p className="text-forest-400 text-sm">Near pincode: {pincode}</p>
              )}
            </div>
            <div className="w-full lg:max-w-xl">
              <PriceSearchBar variant="page" initialQuery={query} />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Loading state */}
        {loading && (
          <div>
            {/* Skeleton summary */}
            <div className="skeleton h-24 rounded-2xl mb-6" />
            {/* Sort skeleton */}
            <div className="flex gap-2 mb-5">
              {[1, 2, 3].map((i) => <div key={i} className="skeleton w-28 h-8 rounded-full" />)}
            </div>
            {/* Card skeletons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => <SkeletonCard key={i} />)}
            </div>
            <p className="text-center text-forest-500 mt-6 text-sm animate-pulse">
              🔍 Fetching prices across Blinkit, BigBasket, Zepto, Swiggy, Amazon & JioMart...
            </p>
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-5xl mb-4">😕</div>
            <h2 className="text-xl font-bold text-forest-900 mb-2">Something went wrong</h2>
            <p className="text-forest-600 mb-6">{error}</p>
            <button
              onClick={() => setLastQuery('')}
              className="btn-forest flex items-center gap-2 mx-auto"
            >
              <RefreshCw className="w-4 h-4" /> Try Again
            </button>
          </motion.div>
        )}

        {/* No query */}
        {!query && !loading && (
          <div className="text-center py-10">
            <p className="text-forest-600 mb-6">Enter a food item above to compare prices</p>
            <FoodCategoryBrowser compact />
          </div>
        )}

        {/* Results */}
        {result && !loading && (
          <>
            <CompareResultsGrid result={result} />
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
              <p className="text-amber-800 text-sm">
                <span className="font-bold">⚠️ Note:</span> Prices shown are estimated market averages for demonstration. 
                Prices vary rapidly based on your exact location and availability. Click "Buy Now" to see the final live price on the platform.
              </p>
            </div>
          </>
        )}

        {/* Browse categories below results */}
        {result && !loading && (
          <div className="mt-16">
            <h3 className="text-xl font-bold text-forest-900 mb-6 font-display">Browse Other Categories</h3>
            <FoodCategoryBrowser compact />
          </div>
        )}
      </div>
    </div>
  );
};
class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return <div className="p-10 text-red-500"><h1>CRASH: Something went wrong.</h1><pre id="error-trace">{this.state.error?.toString()}</pre></div>;
    }
    return this.props.children; 
  }
}

const ComparePageWrapped = () => (
  <ErrorBoundary>
    <ComparePage />
  </ErrorBoundary>
);

export default ComparePageWrapped;
