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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + Extra ₹200 Cashback', description: 'Save up to 80% and get an extra ₹200 cashback on groceries, rice, edible oils, ghee, and dry fruits.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/blinkit-coupons', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'No Code Required', discount: 'Flat 20% Cashback', description: 'New users can get a flat 20% cashback on their first order. Maximum discount is ₹200.', minOrder: 'Min ₹0', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.gadgets360.com/deals/blinkit-offers-coupons-upto-50-off-promo-code-today-may-2026-4993175', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'WELCOME', discount: '30% OFF + Free Delivery', description: 'Get 30% OFF on your first order and free delivery.', minOrder: 'Min ₹99', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.gopaisa.com/stores/zepto-first-order-coupon', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'ZEPAMZ50', discount: '₹50 Cashback + Up to 95% OFF', description: 'Grab ₹50 cashback on all orders with up to 95% discount on products.', minOrder: 'Min ₹0', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/zepto-coupon-codes', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'No Code Required', discount: '50% OFF + Free Delivery', description: 'Get 50% discount on your first order with free delivery. Maximum discount is ₹100.', minOrder: 'Min ₹149', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.coupondunia.in/swiggy-coupons', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'No Code Required', discount: 'Extra 5% Off', description: 'Unlock an automatic 5% discount at checkout on your orders.', minOrder: 'Min ₹499', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.desidime.com/stores/swiggy-instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'No Code Required', discount: 'Flat 20% OFF', description: 'New users get a flat 20% discount on groceries and household essentials. Maximum discount ₹200.', minOrder: 'Min ₹800', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.couponzeta.in/bigbasket-coupons', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'No Code Required', discount: '10% OFF', description: 'Save 10% on your purchase via Kotak Bank Cards. Maximum discount ₹300.', minOrder: 'Min ₹1500', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.desidime.com/stores/bigbasket', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'HOM15', discount: '15% Cashback', description: 'Get 15% cashback on home and kitchen products. Maximum cashback ₹200.', minOrder: 'Min ₹200', expiry: 'Limited Period', category: 'Grocery', isHot: true, url: 'https://www.dealsmagnet.com/amazon-coupons', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No Code Required', discount: 'Free Delivery', description: 'Enjoy free delivery on your first grocery order.', minOrder: 'Min ₹0', expiry: 'Ongoing', category: 'Delivery', isHot: true, url: 'https://www.gopaisa.com/stores/amazon-fresh-coupons', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'CURATE100', discount: '₹100 OFF', description: 'Get ₹100 OFF on the purchase of Premium Fruits.', minOrder: 'Min ₹499', expiry: 'May 31, 2026', category: 'Vegetables', isHot: true, url: 'https://www.dealsmagnet.com/jiomart-coupons', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'WOW100', discount: '₹100 OFF', description: 'Get ₹100 off on orders over ₹299 (working for all users on new interface).', minOrder: 'Min ₹299', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.indiafreestuff.in/jiomart-quick-offer-free-rs-100-shopping-check-inside/', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No Code Required', discount: 'Flat ₹100 OFF', description: 'Get Flat ₹100 OFF on orders above ₹299.', minOrder: 'Min ₹299', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.couponnxt.com/flipkart-minutes-coupon-code', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No Code Required', discount: 'Flat ₹50 - ₹100 OFF', description: 'New user offer: Flat ₹50 - ₹100 OFF on your orders.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.grabon.in/flipkart-minutes-coupons', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];
