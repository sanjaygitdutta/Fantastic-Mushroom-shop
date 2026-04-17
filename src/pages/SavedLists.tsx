import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { Bell, Trash2, Clock, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

interface PriceAlert {
  id: string;
  item_query: string;
  current_best_price: number;
  current_best_platform: string;
  created_at: string;
}

export default function SavedLists() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [alerts, setAlerts] = useState<PriceAlert[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login?redirect=/saved');
      return;
    }

    const fetchAlerts = async () => {
      try {
        const { data, error } = await supabase
          .from('price_alerts')
          .select('*')
          .order('created_at', { ascending: false });
          
        if (error) throw error;
        setAlerts(data || []);
      } catch (err) {
        console.error('Error fetching alerts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();
  }, [isAuthenticated, navigate]);

  const deleteAlert = async (id: string) => {
    try {
      const { error } = await supabase.from('price_alerts').delete().eq('id', id);
      if (error) throw error;
      setAlerts(alerts.filter(a => a.id !== id));
    } catch (err) {
      console.error('Error deleting alert:', err);
      alert('Could not remove item');
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 pt-24 pb-16">
      <SEO title="My Saved Lists & Price Alerts — Fantastic Food" description="Track and manage your price alerts on your favorite grocery items." />
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black font-display text-forest-900 flex items-center gap-2">
              <Bell className="w-6 h-6 text-amber-500" /> Watchlist
            </h1>
            <p className="text-forest-600 text-sm mt-1">Items you are tracking for price drops.</p>
          </div>
          <Link to="/compare" className="btn-forest flex items-center gap-2 text-sm px-4 py-2">
            <Search className="w-4 h-4" /> Add Items
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-forest-800"></div>
          </div>
        ) : alerts.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-forest-100 text-center shadow-sm">
            <div className="w-16 h-16 bg-cream-100 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-forest-900 mb-2">Your watchlist is empty</h2>
            <p className="text-forest-600 mb-6 max-w-sm mx-auto">Track your favorite groceries to get notified when prices drop across Quick Commerce platforms.</p>
            <Link to="/compare?q=milk" className="btn-amber inline-flex items-center gap-2">
              Start Tracking Prices
            </Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {alerts.map(alert => (
              <div key={alert.id} className="bg-white p-5 rounded-2xl border border-forest-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-moss-50 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                    🛒
                  </div>
                  <div>
                    <h3 className="font-bold text-forest-900 text-lg capitalize">{alert.item_query}</h3>
                    <div className="flex items-center gap-3 text-xs text-forest-500 mt-1">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Tracked since {new Date(alert.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-auto w-full border-t sm:border-t-0 border-forest-50 pt-4 sm:pt-0">
                  <div className="text-left sm:text-right">
                    <p className="text-xs font-semibold text-moss-600 uppercase tracking-wider mb-0.5">Last Best Price</p>
                    <p className="text-xl font-black text-forest-900 flex items-center gap-1 sm:justify-end">
                      ₹{alert.current_best_price}
                    </p>
                    <p className="text-xs text-forest-500">on {alert.current_best_platform}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Link to={`/compare?q=${encodeURIComponent(alert.item_query)}`} className="bg-forest-100 hover:bg-forest-200 text-forest-800 px-4 py-2 rounded-xl text-sm font-bold transition-colors">
                      Check Live Price
                    </Link>
                    <button 
                      onClick={() => deleteAlert(alert.id)}
                      className="p-2 text-red-400 hover:bg-red-50 hover:text-red-500 rounded-xl transition-colors"
                      title="Remove from Watchlist"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
