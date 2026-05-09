'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { POPULAR_SEARCHES } from '../../data/mockPrices';
import { Save, Search, RefreshCw, AlertCircle, CheckCircle, TrendingDown } from 'lucide-react';

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
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [liveData, setLiveData] = useState<any[]>([]);
  const [updates, setUpdates] = useState<Record<string, any>>({});
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; msg: string }>({ type: null, msg: '' });

  // 1. Fetch current live prices from Supabase
  const fetchPrices = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('live_prices')
      .select('*');
    
    if (!error && data) {
      setLiveData(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPrices();
  }, []);

  // 2. Filter products based on search
  const filteredItems = POPULAR_SEARCHES.filter(item => 
    item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.query.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 3. Handle local price changes
  const handlePriceChange = (itemKey: string, platformId: string, price: string) => {
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) return;

    setUpdates(prev => ({
      ...prev,
      [`${itemKey}_${platformId}`]: {
        item_name: itemKey,
        platform_id: platformId,
        price: numericPrice,
        in_stock: true,
        last_updated: new Date().toISOString()
      }
    }));
  };

  // 4. Save to Supabase
  const handleSave = async () => {
    setSaving(true);
    const rowsToUpsert = Object.values(updates);

    if (rowsToUpsert.length === 0) {
      setSaving(false);
      return;
    }

    const { error } = await supabase
      .from('live_prices')
      .upsert(rowsToUpsert, { onConflict: 'item_name,platform_id' });

    if (error) {
      setStatus({ type: 'error', msg: `Save failed: ${error.message}` });
    } else {
      setStatus({ type: 'success', msg: `Successfully updated ${rowsToUpsert.length} prices!` });
      setUpdates({});
      fetchPrices();
      setTimeout(() => setStatus({ type: null, msg: '' }), 3000);
    }
    setSaving(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black text-forest-900">Global Price Manager 🌍</h1>
            <p className="text-forest-600">Update real-time prices for all 7 delivery apps</p>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              placeholder="Search product (Onion, Milk...)"
              className="pl-10 pr-4 py-3 rounded-2xl border-2 border-forest-100 focus:border-moss-500 outline-none w-full md:w-80 shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Status Bar */}
        {status.type && (
          <div className={`mb-6 p-4 rounded-2xl flex items-center gap-3 animate-bounce ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {status.type === 'success' ? <CheckCircle className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
            <span className="font-bold">{status.msg}</span>
          </div>
        )}

        {/* Product List */}
        <div className="space-y-6">
          {loading ? (
            <div className="text-center py-20">
              <RefreshCw className="w-12 h-12 text-forest-300 animate-spin mx-auto mb-4" />
              <p className="text-forest-500 font-medium">Syncing with Market Data...</p>
            </div>
          ) : (
            filteredItems.map(item => (
              <div key={item.query} className="bg-white rounded-3xl shadow-sm border border-forest-100 overflow-hidden">
                <div className="bg-forest-900 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl bg-white/10 p-2 rounded-xl">{item.icon}</span>
                    <h2 className="text-xl font-bold text-white">{item.label}</h2>
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
                            onChange={(e) => handlePriceChange(item.query, platform.id, e.target.value)}
                            value={isModified ? isModified.price : (currentLive ? currentLive.price : '')}
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
            ))
          )}
        </div>

        {/* Save Button (Floating) */}
        {Object.keys(updates).length > 0 && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <button 
              onClick={handleSave}
              disabled={saving}
              className="bg-forest-900 text-white px-10 py-5 rounded-full shadow-2xl flex items-center gap-3 font-black text-xl hover:scale-105 transition-all hover:bg-black disabled:opacity-50"
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
