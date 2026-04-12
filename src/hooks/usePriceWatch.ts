// Price Watch — lets users set a target price for any item
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setWatches(JSON.parse(raw));
    } catch (_) {}
  }, []);

  const addWatch = (watch: Omit<PriceWatch, 'createdAt'>) => {
    setWatches((prev) => {
      const filtered = prev.filter((w) => w.query !== watch.query);
      const next = [{ ...watch, createdAt: Date.now() }, ...filtered].slice(0, 10);
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch (_) {}
      return next;
    });
  };

  const removeWatch = (query: string) => {
    setWatches((prev) => {
      const next = prev.filter((w) => w.query !== query);
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch (_) {}
      return next;
    });
  };

  const isWatching = (query: string) => watches.some((w) => w.query === query.toLowerCase());

  return { watches, addWatch, removeWatch, isWatching };
}
