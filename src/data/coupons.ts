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
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'NEWUSER100', discount: '₹100 OFF', description: 'Flat Rs 100 OFF on your first order for new users. Applicable on vegetables, munchies, cold drinks, frozen food & more.', minOrder: 'Min ₹300', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.grabon.in/blinkit-coupons', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'ZEPAMZ50', discount: 'Up to 95% OFF + ₹50 Cashback', description: 'Up to 95% discount with an additional Rs 50 cashback on all products. Redeemable in the Zepto app.', minOrder: 'No min specified', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/zepto-coupons', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'WELCOME', discount: '30% OFF + ₹50 Zepto Cash', description: 'Get 30% OFF plus ₹50 Zepto Cash on your first order.', minOrder: 'Min ₹199', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.woohoo.in/zepto-coupon-codes', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'INSTANEW100', discount: '₹100 OFF', description: 'Flat ₹100 off on your first order.', minOrder: 'Min ₹199', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.paisawapas.com/swiggy-coupons', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'INSTAFREE', discount: 'Free Delivery', description: 'Enjoy free delivery on your orders. Valid for new users.', minOrder: 'Min ₹49', expiry: 'December 31, 2026', category: 'Delivery', isHot: true, url: 'https://www.coupondunia.in/swiggy-instamart-coupons', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBNEW200', discount: '₹200 Cashback', description: 'Flat ₹200 cashback on your first purchase.', minOrder: 'Min ₹1000', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.desidime.com/stores/bigbasket', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBCASH75', discount: '₹75 Cashback', description: 'Flat ₹75 cashback on qualified orders. Apply this offer twice for maximum savings.', minOrder: 'Min ₹999', expiry: 'July 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.desidime.com/stores/bigbasket', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'FRESHNEW100', discount: '₹100 OFF', description: 'Flat ₹100 off on your first Amazon Fresh order.', minOrder: 'Min ₹500', expiry: 'December 31, 2026', category: 'First Order', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'FRESHFREE', discount: 'Free Delivery', description: 'Enjoy free delivery on your Amazon Fresh orders.', minOrder: 'Min ₹299', expiry: 'December 31, 2026', category: 'Delivery', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JMNEW100', discount: '₹100 OFF', description: 'Flat ₹100 OFF on your first order.', minOrder: 'Min ₹399', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.woohoo.in/jiomart-promo-codes', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'SAVE100', discount: '₹100 OFF', description: 'Flat ₹100 OFF on orders above ₹799.', minOrder: 'Min ₹799', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.woohoo.in/jiomart-promo-codes', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FPMIN100', discount: '₹100 OFF', description: 'Flat ₹100 off on your first Flipkart Minutes order.', minOrder: 'Min ₹499', expiry: 'December 31, 2026', category: 'First Order', isHot: false, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FPMINFREE', discount: 'Free Delivery', description: 'Enjoy free delivery on your Flipkart Minutes orders.', minOrder: 'Min ₹199', expiry: 'December 31, 2026', category: 'Delivery', isHot: false, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];
