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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'BLINKITNEW', discount: '₹100 OFF', description: 'Flat ₹100 OFF on your first order. Discount applies automatically or use a common first-user code.', minOrder: 'Min ₹300', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.blinkit.com/', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'CRED200', discount: '₹150 OFF + ₹50 Cashback', description: 'Flat ₹150 discount and ₹50 cashback when paying with Cred UPI.', minOrder: 'Min ₹199', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.blinkit.com/', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'WELCOME', discount: '30% OFF + ₹50 Zepto Cash', description: 'Get 30% OFF on your first order plus ₹50 bonus Zepto Cash.', minOrder: 'No Min', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.zeptonow.com/', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'BONUSOFF50', discount: '₹50 OFF', description: 'Save ₹50 instantly on your order.', minOrder: 'Min ₹599', expiry: 'June 30, 2026', category: 'Grocery', isHot: false, url: 'https://www.zeptonow.com/', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'INSTAMARTNEW', discount: 'Free Delivery', description: 'Enjoy free delivery on your first order.', minOrder: 'Min ₹49', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'MOBIKWIKINSTA', discount: 'Up to ₹150 Cashback', description: 'Get up to ₹150 cashback on your orders when paying with Mobikwik Wallet.', minOrder: 'Min ₹200', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBFIRST200', discount: '₹200 Cashback', description: 'Get flat ₹200 cashback on your first grocery order.', minOrder: 'Min ₹1000', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com/', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'BIGBASKET200', discount: '₹200 OFF', description: 'Flat ₹200 OFF on orders for all users.', minOrder: 'Min ₹1000', expiry: 'June 30, 2026', category: 'Grocery', isHot: false, url: 'https://www.bigbasket.com/', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'AMAZONFRESHNEW', discount: 'First Order Discount', description: 'Enjoy a discount on your first Amazon Fresh order. Specific discount may vary.', minOrder: 'Check App', expiry: 'June 30, 2026', category: 'First Order', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'AMAZONFRESHDEL', discount: 'Free Delivery', description: 'Get free delivery on eligible Amazon Fresh orders. Check app for details.', minOrder: 'Check App', expiry: 'June 30, 2026', category: 'Delivery', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JMNEW100', discount: '₹100 OFF', description: 'Flat ₹100 OFF on your first order for new users.', minOrder: 'Min ₹299', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.jiomart.com/', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'JM100', discount: '₹100 OFF', description: 'Flat ₹100 OFF on your grocery order.', minOrder: 'Min ₹249', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.jiomart.com/', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FPMINUTESNEW', discount: '₹100 OFF', description: 'Get ₹100 OFF on your first order.', minOrder: 'Min ₹1299', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FPMINUTES50', discount: '₹50 OFF', description: 'Enjoy ₹50 OFF on your grocery orders.', minOrder: 'Min ₹799', expiry: 'June 30, 2026', category: 'Grocery', isHot: false, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];

export const SG_COUPONS: Coupon[] = [
  { id: 'fp1', platform: 'FairPrice', platformId: 'fairprice', code: 'FPNEW8', discount: 'S$8 OFF', description: 'Get S$8 off your first FairPrice online order.', minOrder: 'Min S$50', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.fairprice.com.sg', bgColor: '#E8F5E9', textColor: '#2E7D32', logo: '🛒' },
  { id: 'rm1', platform: 'RedMart', platformId: 'redmart', code: 'RMFRESH10', discount: '10% OFF Fresh Produce', description: 'Save 10% on all fresh vegetables and fruits.', minOrder: 'Min S$40', expiry: 'End of month', category: 'Vegetables', isHot: true, url: 'https://redmart.lazada.sg', bgColor: '#FFEbee', textColor: '#C62828', logo: '🚚' },
  { id: 'cs1', platform: 'Cold Storage', platformId: 'coldstorage', code: 'CSDAIRY5', discount: 'S$5 OFF Dairy', description: 'Discount on milk, cheese, and other dairy products.', minOrder: 'Min S$30', expiry: 'Ongoing', category: 'Dairy', isHot: false, url: 'https://coldstorage.com.sg', bgColor: '#E3F2FD', textColor: '#1565C0', logo: '🥩' },
  { id: 'sh1', platform: 'Shopee Supermarket', platformId: 'shopee', code: 'SHOPGROC15', discount: '15% Cashback', description: 'Get 15% cashback in Shopee Coins for grocery items.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://shopee.sg/supermarket', bgColor: '#FFF3E0', textColor: '#E65100', logo: '🛍️' },
];
