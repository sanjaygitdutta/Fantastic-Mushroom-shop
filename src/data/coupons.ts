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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + ₹200 Cashback', description: 'Get up to 80% off and an extra ₹200 cashback on groceries, rice, edible oils, ghee, and dry fruits.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'No Code (First Order)', discount: 'Flat ₹100 OFF', description: 'Flat ₹100 OFF on your first order, applicable on vegetables, munchies, cold drinks, frozen food & more.', minOrder: 'Min ₹300', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'ZEPAMZ50', discount: 'Up to 95% OFF + ₹50 Cashback', description: 'Get up to 95% discount with an additional ₹50 cashback on all products.', minOrder: 'No specific min order found', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'No Code (First Order)', discount: '10% OFF (Up to ₹200)', description: 'Get 10% off on your first order, valid for new users.', minOrder: 'Min ₹499', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'ICICIBANK', discount: '10% OFF (Up to ₹150)', description: 'Exclusive offer for ICICI Bank cardholders: Get 10% OFF on instant purchases.', minOrder: 'Min ₹199 (for free shipping)', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'PHONEPE', discount: 'Flat ₹20 Cashback', description: 'Get a flat ₹20 cashback when you pay with PhonePe, valid up to twice per user.', minOrder: 'Min ₹399', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'MOBIKWIK', discount: '10% Supercash (Up to ₹200)', description: 'Collect 10% Supercash up to ₹200 when you select MobiKwik as your payment method.', minOrder: 'Min ₹800', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'VISA200', discount: 'Flat 20% OFF (Up to ₹200)', description: 'Flat 20% discount on groceries and household essentials for new users paying with VISA cards.', minOrder: 'Min ₹800', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No Code', discount: 'Free 2-hour Delivery', description: 'Enjoy free scheduled 2-hour delivery on all orders.', minOrder: 'Min ₹600', expiry: 'May 31, 2026', category: 'Delivery', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No Code', discount: 'Up to 75% OFF', description: 'Get up to 75% off on a wide range of grocery products.', minOrder: 'No specific min order found', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JMNEW100', discount: 'Flat ₹100 OFF', description: 'Flat ₹100 OFF on your first order.', minOrder: 'Min ₹399', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'SAVE100', discount: 'Flat ₹100 OFF', description: 'Flat ₹100 OFF on orders above ₹799.', minOrder: 'Min ₹799', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No Code (New User)', discount: 'Flat ₹50 - ₹100 OFF', description: 'Flat ₹50 - ₹100 OFF on your first orders, applicable on groceries, fruits, veggies, bakery and eggs, electronics, and more.', minOrder: 'Min ₹199 - ₹699', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No Code', discount: '₹100 OFF', description: 'Get ₹100 Off on orders above ₹1299, applicable for all users.', minOrder: 'Min ₹1299', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];
