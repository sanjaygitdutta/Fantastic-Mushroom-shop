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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + ₹200 Cashback', description: 'Save up to 80% and an extra Rs 200 cashback on groceries, rice, edible oils, ghee, and dry fruits.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/blinkit-coupons', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'No Code', discount: 'Flat ₹100 OFF', description: 'Flat Rs 100 OFF on your first order. Applicable on vegetables, munchies, cold drinks, frozen food & more.', minOrder: 'Min ₹300', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.grabon.in/blinkit-coupons', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'ZEPAMZ50', discount: 'Up to 95% OFF + Extra ₹50 Cashback', description: 'Get up to 95% off and an extra Rs 50 cashback on all products. Valid in the Zepto app.', minOrder: 'No Min', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/zepto-coupons', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'MBK300', discount: 'Up to ₹300 Cashback', description: 'Save up to Rs 300 cashback with MobiKwik on all users buying via MobiKwik.', minOrder: 'Min ₹399', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/zepto-coupons', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'FREESUGAR', discount: 'Free 1 Kg Sugar', description: 'Get 1 Kg of sugar for free on orders above Rs.700. Valid on sitewide products.', minOrder: 'Min ₹700', expiry: 'May 12, 2026', category: 'Grocery', isHot: true, url: 'https://www.zoutons.com/swiggy-instamart-coupons', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'FARMFRESH50', discount: 'Flat ₹50 OFF', description: 'Save Rs. 50 on your order instantly. Offer valid on all Vegetable and Fruit buys.', minOrder: 'Min ₹199', expiry: 'June 01, 2026', category: 'Vegetables', isHot: true, url: 'https://www.zingoy.com/swiggy-instamart-coupons', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBFIRST200', discount: 'Flat ₹200 Cashback', description: 'Get flat Rs. 200 cashback on your first grocery order. Not valid on Ghee, oil and baby foods.', minOrder: 'Min ₹1000', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.gopaisa.com/stores/bigbasket-coupons', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'No Code', discount: 'Up to 70% OFF', description: 'Sitewide Offer - Up To 70% OFF On All Orders.', minOrder: 'No Min', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/bigbasket-coupons', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No Code', discount: '₹200 OFF', description: 'New users can avail Rs 200 off on grocery orders.', minOrder: 'Min ₹1500', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.grabon.in/amazon-fresh-coupons', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No Code', discount: 'Up to 75% OFF', description: 'Grocery Products - Up To 75% OFF On Your Orders.', minOrder: 'No Min', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/amazon-fresh-coupons', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JMNEW100', discount: 'Flat ₹100 OFF', description: 'Flat ₹100 OFF on Your First Order.', minOrder: 'Min ₹399', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.woohoo.in/jiomart-promo-codes', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'SAVE250', discount: 'Flat ₹250 OFF', description: 'Flat ₹250 OFF on Orders Above ₹1499.', minOrder: 'Min ₹1499', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.woohoo.in/jiomart-promo-codes', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No Code', discount: 'Flat ₹100 OFF', description: 'Flat ₹100 OFF on orders above ₹299.', minOrder: 'Min ₹299', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.couponnxt.com/flipkart-minutes-coupon-code', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No Code', discount: 'Up to 70% OFF', description: 'Unbelievable Savings! Up to 70% Off Atta, Rice & Dal.', minOrder: 'No Min', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.zingoy.com/flipkart-minutes-coupons', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];
