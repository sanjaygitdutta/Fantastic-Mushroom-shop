// Hook to store and retrieve recently compared items from localStorage
import { useState, useEffect } from 'react';

const KEY = 'ff_recently_compared';
const MAX = 8;

export interface RecentItem {
  query: string;
  label: string;
  icon: string;
  timestamp: number;
}

export function useRecentlyCompared() {
  const [recents, setRecents] = useState<RecentItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setRecents(JSON.parse(raw));
    } catch (_) {}
  }, []);

  const addRecent = (query: string, label: string, icon: string) => {
    setRecents((prev) => {
      const filtered = prev.filter((r) => r.query !== query.toLowerCase());
      const next = [
        { query: query.toLowerCase(), label, icon, timestamp: Date.now() },
        ...filtered,
      ].slice(0, MAX);
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch (_) {}
      return next;
    });
  };

  const clearRecents = () => {
    setRecents([]);
    try { localStorage.removeItem(KEY); } catch (_) {}
  };

  return { recents, addRecent, clearRecents };
}
