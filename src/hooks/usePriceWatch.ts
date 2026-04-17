// Price Watch — lets users set a target price for any item
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

const KEY = 'ff_price_watches';

export interface PriceWatch {
  query: string;
  label: string;
  icon: string;
  targetPrice: number;
  currentBest: number;
  createdAt: number;
}

export function usePriceWatch() {
  const [watches, setWatches] = useState<PriceWatch[]>([]);
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchWatches = async () => {
      if (isAuthenticated && user) {
        // Fetch from Supabase
        const { data, error } = await supabase
          .from('price_alerts')
          .select('*')
          .eq('user_id', user.id);
        
        if (!error && data) {
          const formatted = data.map((d: any) => ({
            query: d.item_query,
            label: d.item_query,
            icon: '🛒',
            targetPrice: d.target_price || 0,
            currentBest: d.current_best_price || 0,
            createdAt: new Date(d.created_at).getTime()
          }));
          setWatches(formatted);
          return;
        }
      }

      // Fallback to local
      try {
        const raw = localStorage.getItem(KEY);
        if (raw) setWatches(JSON.parse(raw));
      } catch (_) {}
    };

    fetchWatches();
  }, [isAuthenticated, user]);

  const addWatch = async (watch: Omit<PriceWatch, 'createdAt'>) => {
    const newWatch = { ...watch, createdAt: Date.now() };
    
    setWatches((prev) => {
      const filtered = prev.filter((w) => w.query !== watch.query);
      const next = [newWatch, ...filtered].slice(0, 50); // Increased limit
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch (_) {}
      return next;
    });

    if (isAuthenticated && user) {
      const { error } = await supabase.from('price_alerts').insert({
        user_id: user.id,
        item_query: watch.query,
        target_price: watch.targetPrice,
        current_best_price: watch.currentBest,
        current_best_platform: 'Multiple' // Will be updated by cron/edge later
      });
      if (error) console.error("Error saving alert to Supabase:", error);
    }
  };

  const removeWatch = async (query: string) => {
    setWatches((prev) => {
      const next = prev.filter((w) => w.query !== query);
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch (_) {}
      return next;
    });

    if (isAuthenticated && user) {
      await supabase.from('price_alerts').delete().eq('user_id', user.id).eq('item_query', query);
    }
  };

  const isWatching = (query: string) => watches.some((w) => w.query === query.toLowerCase());

  return { watches, addWatch, removeWatch, isWatching };
}
