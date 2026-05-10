import { useState, useEffect } from 'react';
import { 
  Save, 
  Search, 
  RefreshCw, 
  CheckCircle, 
  AlertCircle, 
  TrendingDown, 
  Filter
} from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { MOCK_DB } from '../../data/mockPrices';

const CATEGORIES = ['All', 'Pending', 'Vegetables', 'Fruits', 'Dairy & Eggs', 'Meat & Poultry', 'Fish & Seafood', 'Bakery', 'Snacks', 'Beverages', 'Grocery'];
const PLATFORMS = [
  { id: 'blinkit', name: 'Blinkit' },
  { id: 'zepto', name: 'Zepto' },
  { id: 'swiggy', name: 'Swiggy' },
  { id: 'bigbasket', name: 'BigBasket' },
  { id: 'amazon', name: 'Amazon' },
  { id: 'jiomart', name: 'JioMart' },
  { id: 'flipkart', name: 'Flipkart' }
];

const ManageGroceryPrices = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [liveData, setLiveData] = useState<any[]>([]);
  const [masterProducts, setMasterProducts] = useState<any[]>([]);
  const [updates, setUpdates] = useState<Record<string, any>>({});
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; msg: string }>({ type: null, msg: '' });
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 51; // 3 per row * 17 rows

  // 1. Fetch current live prices AND product master from Supabase
  const fetchData = async () => {
    setLoading(true);
    
    // Fetch Master Products
    const { data: products, error: pError } = await supabase
      .from('products')
      .select('*')
      .order('canonical_name', { ascending: true })
      .range(0, 9999);
    
    if (!pError && products && products.length > 0) {
      setMasterProducts(products.map(p => ({
        label: p.canonical_name,
        query: p.id,
        icon: p.icon,
        category: p.category
      })));
    } else {
      // Fallback to MOCK_DB if table is empty or missing
      const mockList = Object.keys(MOCK_DB).map(key => ({
        label: MOCK_DB[key].canonicalName,
        query: key,
        icon: MOCK_DB[key].icon,
        category: MOCK_DB[key].category
      }));
      setMasterProducts(mockList);
    }

    // Fetch Live Prices
    const { data: prices, error: lError } = await supabase
      .from('live_prices')
      .select('*')
      .range(0, 9999);
    
    if (!lError && prices) {
      setLiveData(prices);
    }
    
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 2. Filter products based on search AND category
  const filteredItems = masterProducts.filter(item => {
    const matchesSearch = item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.query.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Check if it has ANY live prices
    const hasLivePrices = liveData.some(ld => ld.item_name === item.query && ld.price > 0);
    
    const matchesCategory = activeCategory === 'All' ? true : 
                          activeCategory === 'Pending' ? !hasLivePrices :
                          item.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Calculate Paginated View
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // 4. Handle local price changes
  const handlePriceChange = (itemKey: string, platformId: string, price: string, canonicalName: string) => {
    setUpdates(prev => ({
      ...prev,
      [`${itemKey}_${platformId}`]: {
        item_name: itemKey,
        platform_id: platformId,
        canonical_name: canonicalName,
        price: price === '' ? 0 : parseFloat(price),
        last_updated: new Date().toISOString(),
        in_stock: true
      }
    }));
  };

  // 5. Save updates to Supabase via Secure API Route
  const handleSave = async () => {
    setSaving(true);
    const rowsToUpsert = Object.values(updates).filter(u => u.price > 0);
    
    try {
      const res = await fetch('/api/admin/update-price', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rowsToUpsert })
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ type: 'error', msg: `Failed to save: ${data.error || 'Unknown error'}` });
      } else {
        setStatus({ type: 'success', msg: `Successfully updated ${rowsToUpsert.length} prices!` });
        setUpdates({});
        fetchData();
        setTimeout(() => setStatus({ type: null, msg: '' }), 3000);
      }
    } catch (err: any) {
      setStatus({ type: 'error', msg: `Failed to connect: ${err.message}` });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-forest-900 mb-2 flex items-center gap-3">
              Global Price Manager <span className="text-2xl animate-pulse">🌍</span>
            </h1>
            <p className="text-forest-600 text-lg">
              Update real-time prices for all <span className="font-bold text-forest-900">{masterProducts.length}</span> items
            </p>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              placeholder="Search product (Onion, Milk...)"
              className="pl-10 pr-4 py-3 rounded-2xl border-2 border-forest-100 focus:border-moss-500 outline-none w-full md:w-80 shadow-sm"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
            />
          </div>
        </div>

        {/* Category Filter UI */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white p-4 rounded-3xl border border-forest-50 shadow-sm">
          <Filter className="w-5 h-5 text-forest-300 self-center mr-2" />
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeCategory === cat ? 'bg-forest-900 text-white shadow-lg' : 'bg-forest-50 text-forest-600 hover:bg-forest-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Status Bar */}
        {status.type && (
          <div className={`mb-6 p-4 rounded-2xl flex items-center gap-3 animate-bounce ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {status.type === 'success' ? <CheckCircle className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
            <span className="font-bold">{status.msg}</span>
          </div>
        )}

        {/* Product Grid */}
        <div className="space-y-6">
          {loading ? (
            <div className="text-center py-20">
              <RefreshCw className="w-12 h-12 text-forest-300 animate-spin mx-auto mb-4" />
              <p className="text-forest-500 font-medium">Syncing with Market Data...</p>
            </div>
          ) : (
            <>
              {paginatedItems.map(item => (
                <div key={item.query} className="bg-white rounded-3xl shadow-sm border border-forest-100 overflow-hidden">
                  <div className="bg-forest-900 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl bg-white/10 p-2 rounded-xl">{item.icon}</span>
                      <div>
                        <h2 className="text-xl font-bold text-white">{item.label}</h2>
                        {/* Status Badge */}
                        <div className="mt-1">
                          {liveData.some(ld => ld.item_name === item.query && ld.price > 0) ? (
                            <span className="inline-flex items-center gap-1 text-[9px] font-black bg-emerald-400/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-400/30 uppercase tracking-tighter">
                              <CheckCircle className="w-2 h-2" /> Verified
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[9px] font-black bg-amber-400/20 text-amber-400 px-2 py-0.5 rounded border border-amber-400/30 uppercase tracking-tighter">
                              <AlertCircle className="w-2 h-2" /> Pending
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <span className="text-forest-300 text-xs font-mono uppercase tracking-widest">{item.query}</span>
                  </div>
                  
                  <div className="p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
                    {PLATFORMS.map(platform => {
                      const currentLive = liveData.find(ld => ld.item_name === item.query && ld.platform_id === platform.id);
                      const isModified = updates[`${item.query}_${platform.id}`];
                      
                      return (
                        <div key={platform.id} className={`p-3 rounded-2xl border-2 transition-all ${isModified ? 'border-amber-400 bg-amber-50' : 'border-gray-50 bg-gray-50'}`}>
                          <label className="text-[10px] font-black uppercase text-gray-400 block mb-1">{platform.name}</label>
                          <div className="relative">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 font-bold">₹</span>
                            <input 
                              type="number"
                              placeholder={currentLive ? currentLive.price.toString() : "0"}
                              className="w-full bg-transparent pl-4 pr-1 font-bold text-forest-900 outline-none text-lg"
                              onChange={(e) => handlePriceChange(item.query, platform.id, e.target.value, item.label)}
                              value={isModified ? (isModified.price === 0 ? '' : isModified.price) : (currentLive ? currentLive.price : '')}
                            />
                          </div>
                          {currentLive && !isModified && (
                            <div className="mt-1 flex items-center gap-1 text-[10px] text-green-600 font-bold">
                              <TrendingDown className="w-3 h-3" />
                              Live
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
              
              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center items-center gap-4">
                  <button
                    onClick={() => { setCurrentPage(p => Math.max(1, p - 1)); window.scrollTo(0, 0); }}
                    disabled={currentPage === 1}
                    className="px-6 py-2 rounded-xl bg-forest-900 text-white disabled:opacity-30 hover:bg-black transition-all font-bold"
                  >
                    Previous
                  </button>
                  <span className="text-forest-600 font-bold">
                    Page <span className="text-forest-900 bg-forest-50 px-3 py-1 rounded-lg border border-forest-100">{currentPage}</span> of {totalPages}
                  </span>
                  <button
                    onClick={() => { setCurrentPage(p => Math.min(totalPages, p + 1)); window.scrollTo(0, 0); }}
                    disabled={currentPage === totalPages}
                    className="px-6 py-2 rounded-xl bg-forest-900 text-white disabled:opacity-30 hover:bg-black transition-all font-bold"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}

          {filteredItems.length === 0 && !loading && (
            <div className="text-center py-20 bg-white rounded-3xl border border-forest-100 shadow-sm">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-forest-900 mb-2">No items found</h3>
              <p className="text-forest-500">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>

        {/* Save Button (Floating) */}
        {Object.keys(updates).length > 0 && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <button 
              onClick={handleSave}
              disabled={saving}
              className="bg-forest-900 text-white px-10 py-5 rounded-full shadow-2xl flex items-center gap-3 font-black text-xl hover:scale-105 transition-all hover:bg-black disabled:opacity-50 border-4 border-white"
            >
              {saving ? <RefreshCw className="w-6 h-6 animate-spin" /> : <Save className="w-6 h-6" />}
              Update {Object.keys(updates).length} Live Prices
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageGroceryPrices;
