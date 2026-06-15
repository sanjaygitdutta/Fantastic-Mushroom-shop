/**
 * Fantastic Food Affiliate Tracker
 * 
 * This utility monetizes outgoing links. It has been upgraded to support:
 * 1. Amazon Associates (Directly appends your tag to Amazon URLs)
 * 2. Cuelinks (Passthrough for BigBasket, Blinkit, Zepto, etc. which the Cuelinks script in index.html will auto-convert)
 */

import React from 'react';

// ** ── SETUP INSTRUCTIONS ── **
// 1. Get your Amazon Associates tracking ID (e.g., fantasticfood-21) and paste it below.
// 2. The other platforms (Blinkit, Zepto, Swiggy) are handled automatically by the Cuelinks script in public/index.html.

const AMAZON_ASSOCIATE_TAG = 'fantasticfood-21'; // Replace with your real Amazon tracking ID!
const CUELINKS_PUB_ID = '242722'; // Your Cuelinks Publisher ID!

/**
 * Ensures affiliate tracking is attached to the URL.
 * 
 * @param platformId The target platform (e.g., 'blinkit', 'amazon')
 * @param originalUrl The raw search URL (e.g., https://amazon.in/s?k=onion)
 * @returns The final destination URL
 */
export const getAffiliateUrl = (platformId: string, originalUrl: string): string => {
  // Handle Amazon Directly
  if (platformId.startsWith('amazon')) {
    try {
      const url = new URL(originalUrl);
      url.searchParams.set('tag', AMAZON_ASSOCIATE_TAG);
      return url.toString();
    } catch {
      return originalUrl;
    }
  }
  
  // For all other platforms, pre-generate the Cuelinks redirect URL.
  // This turns the click into a direct user-initiated navigation to linksredirect.com,
  // bypassing the script conversion and allowing mobile browsers to route the redirect chain to native apps.
  if (originalUrl && originalUrl.startsWith('http')) {
    return `https://linksredirect.com/?pub_id=${CUELINKS_PUB_ID}&url=${encodeURIComponent(originalUrl)}`;
  }
  
  return originalUrl;
};

/**
 * Handles the click event on an affiliate link.
 * On mobile devices, we dynamically set target to '_self' to allow 
 * the mobile OS to launch the native app directly (instead of opening a new tab which blocks it).
 */
export const handleAffiliateClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  if (typeof window !== 'undefined') {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      e.currentTarget.target = '_self';
    }
  }
};
