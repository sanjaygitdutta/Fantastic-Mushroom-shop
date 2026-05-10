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
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'NEW100', discount: '₹100 OFF', description: 'Flat Rs 100 OFF on your first order for new users.', minOrder: 'Min ₹300', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.grabon.in/blinkit-coupons', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'ZEPAMZ50', discount: '₹50 Cashback', description: 'Get an Rs 50 Cashback on all orders, up to 95% discount on electronics, fashion, and more.', minOrder: 'No Min', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/zepto-coupons', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'WELCOME', discount: '30% OFF + Free Delivery', description: 'Get 30% off on your first grocery order plus free delivery.', minOrder: 'Min ₹99', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.gopaisa.com/stores/zepto-coupons', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'FARMFRESH50', discount: '₹50 OFF', description: 'Save Rs 50 on your order instantly on all Vegetable and Fruit buys.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Vegetables', isHot: true, url: 'https://www.zingoy.com/swiggy-instamart-coupons', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'No Code', discount: '₹20 Cashback', description: 'Get a flat Rs 20 cashback when you pay with PhonePe.', minOrder: 'Min ₹399', expiry: 'Ongoing', category: 'Grocery', isHot: false, url: 'https://www.zingoy.com/swiggy-instamart-coupons', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBFIRST200', discount: '₹200 Cashback', description: 'Get flat Rs 200 cashback on your first grocery order. Not valid on Ghee, oil and baby foods.', minOrder: 'Min ₹1000', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.gopaisa.com/stores/bigbasket-coupons', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'No Code', discount: '10% Supercash (Up to ₹200)', description: 'Proceed to checkout and select MobiKwik as your payment method to collect 10% Supercash.', minOrder: 'Min ₹800', expiry: 'Ongoing', category: 'Grocery', isHot: false, url: 'https://www.picodi.in/bigbasket/coupon-code', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'HOM15', discount: '15% Cashback', description: 'Get 15% cashback on Home and Kitchen products.', minOrder: 'Min ₹200', expiry: 'Limited Period', category: 'Grocery', isHot: false, url: 'https://www.dealsmagnet.com/amazon-coupons', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No Code', discount: 'Free Delivery', description: 'Enjoy free delivery on your first grocery order via Amazon Fresh Store.', minOrder: 'No Min', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.gopaisa.com/stores/amazon-fresh-coupons', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'SAVE100', discount: '₹100 OFF', description: 'Flat ₹100 OFF on orders above ₹799.', minOrder: 'Min ₹799', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.woohoo.in/jiomart-promo-codes', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'JMNEW100', discount: '₹100 OFF', description: 'Flat ₹100 OFF on your first order.', minOrder: 'Min ₹399', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.woohoo.in/jiomart-promo-codes', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No Code', discount: '₹50 - ₹100 OFF', description: 'Flat Rs 50 - Rs 100 OFF on your orders for new users across groceries, fruits, veggies, bakery and eggs, electronics, and more.', minOrder: 'Min ₹199 - ₹699', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.grabon.in/flipkart-minutes-coupons', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No Code', discount: 'Up to 90% OFF', description: 'Shop for sitewide products & get up to 90% OFF on your orders. Get your order delivered in just 10 minutes.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: false, url: 'https://www.grabon.in/flipkart-minutes-coupons', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];
