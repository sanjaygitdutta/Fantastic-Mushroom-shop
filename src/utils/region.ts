'use client';

import { useEffect, useState } from 'react';

export type Region = 'IN' | 'SG';

export function getRegionFromCookie(): Region {
  if (typeof document === 'undefined') return 'IN';
  const match = document.cookie.match(/(^| )user-region=([^;]+)/);
  if (match) return match[2] as Region;
  return 'IN';
}

export function setRegionCookie(region: Region) {
  if (typeof document === 'undefined') return;
  document.cookie = `user-region=${region}; path=/; max-age=31536000; SameSite=Lax`;
}

export function useRegion() {
  const [region, setRegionState] = useState<Region>('IN');

  useEffect(() => {
    setRegionState(getRegionFromCookie());
  }, []);

  const setRegion = (newRegion: Region) => {
    setRegionCookie(newRegion);
    setRegionState(newRegion);
    // Reload to apply server-side rendering changes
    window.location.reload();
  };

  return { region, setRegion };
}

export function formatCurrency(amount: number, region: Region = 'IN'): string {
  if (region === 'SG') {
    return `S$${amount.toFixed(2)}`;
  }
  return `₹${amount}`;
}
