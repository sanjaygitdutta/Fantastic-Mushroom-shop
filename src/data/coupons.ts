export interface Coupon {
  id: string;
  platform: string;
  platformId: string;
  code: string;
  discount: string;
  description: string;
  minOrder: string;
  expiry: string;
  category: string;
  isHot: boolean;
  url: string;
  bgColor: string;
  textColor: string;
  logo: string;
}

export const COUPONS: Coupon[] = [
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + Extra ₹200 Cashback', description: 'Save up to 80% and an extra ₹200 cashback on groceries, rice, edible oils, ghee, and dry fruits using Paytm UPI.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'NEW100', discount: 'Flat ₹100 OFF', description: 'Flat ₹100 OFF on your first order for new users.', minOrder: 'Min ₹300', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'ZEPAMZ50', discount: 'Up to 95% OFF + Extra ₹50 Cashback', description: 'Get up to 95% off and an additional ₹50 cashback on all products.', minOrder: 'No Min', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'WELCOME', discount: '30% OFF + ₹50 Zepto Cash', description: 'Get 30% OFF on your first order plus ₹50 bonus Zepto Cash.', minOrder: 'Min ₹99', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'INSTAMARTNEW', discount: '₹125 OFF', description: 'Flat ₹125 off on your first Swiggy Instamart order.', minOrder: 'Min ₹299', expiry: 'December 31, 2026', category: 'First Order', isHot: false, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'FREEDEL', discount: 'Free Delivery', description: 'Enjoy free delivery on your Swiggy Instamart orders.', minOrder: 'Min ₹199', expiry: 'December 31, 2026', category: 'Delivery', isHot: false, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'ICICI20', discount: '20% OFF', description: 'Get 20% off your first purchase at BigBasket when paying with an ICICI debit or credit card.', minOrder: 'Min ₹500', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'KOTAK200', discount: '₹200 OFF', description: 'Apply this coupon code to your first BigBasket order to unlock a discount of ₹200 when paying with Kotak Bank.', minOrder: 'Min ₹1000', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'FRESHNEW', discount: '₹150 OFF', description: 'Get ₹150 off on your first Amazon Fresh order.', minOrder: 'Min ₹500', expiry: 'December 31, 2026', category: 'First Order', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'FREEDELIVERY', discount: 'Free Delivery', description: 'Enjoy free delivery on eligible Amazon Fresh orders.', minOrder: 'Min ₹249', expiry: 'December 31, 2026', category: 'Delivery', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JMNEW100', discount: 'Flat ₹100 OFF', description: 'Flat ₹100 OFF on your first order.', minOrder: 'Min ₹399', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'SAVE250', discount: 'Flat ₹250 OFF', description: 'Flat ₹250 OFF on orders above ₹1499.', minOrder: 'Min ₹1499', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FKMINUTESNEW', discount: '₹100 OFF', description: 'Flat ₹100 OFF on your first order for new users.', minOrder: 'Min ₹299', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FLAT90', discount: 'Up to 90% OFF', description: 'Get up to 90% OFF on sitewide products including groceries, daily essentials, food & snacks.', minOrder: 'No Min', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];
