/**
 * Fantastic Food Affiliate Tracker
 * 
 * This utility monetizes outgoing links. It has been upgraded to support:
 * 1. Amazon Associates (Directly appends your tag to Amazon URLs)
 * 2. Cuelinks (Passthrough for BigBasket, Blinkit, Zepto, etc. which the Cuelinks script in index.html will auto-convert)
 */

// ** ── SETUP INSTRUCTIONS ── **
// 1. Get your Amazon Associates tracking ID (e.g., fantasticfood-21) and paste it below.
// 2. The other platforms (Blinkit, Zepto, Swiggy) are handled automatically by the Cuelinks script in public/index.html.

const AMAZON_ASSOCIATE_TAG = 'fantasticfood-21'; // Replace with your real Amazon tracking ID!

/**
 * Ensures affiliate tracking is attached to the URL.
 * 
 * @param platformId The target platform (e.g., 'blinkit', 'amazon')
 * @param originalUrl The raw search URL (e.g., https://amazon.in/s?k=onion)
 * @returns The final destination URL
 */
export const getAffiliateUrl = (platformId: string, originalUrl: string): string => {
  // Handle Amazon Directly
  if (platformId === 'amazon') {
    try {
      const url = new URL(originalUrl);
      url.searchParams.set('tag', AMAZON_ASSOCIATE_TAG);
      return url.toString();
    } catch {
      return originalUrl;
    }
  }
  
  // For all other platforms, return the original URL unmodified.
  // The Cuelinks script located in the <head> of index.html will listen for the click 
  // and automatically transform it into a monetized link on the fly!
  return originalUrl;
};
