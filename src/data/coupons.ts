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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'No code required', discount: '₹100 OFF', description: 'Flat ₹100 OFF on your first order on vegetables, munchies, cold drinks, frozen food & more.', minOrder: 'Min ₹300', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + ₹200 Cashback', description: 'Save up to 80% and an extra ₹200 cashback on groceries, rice, edible oils, ghee, and dry fruits using Paytm UPI.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'ZEPAMZ50', discount: '₹50 Cashback', description: 'Get an ₹50 Cashback on all orders. Applies to electronics, fashion, and more.', minOrder: 'No minimum specified', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'No code required', discount: '10% OFF', description: '10% off on your first prepaid order through Zepto app or site. Covers daily groceries, breakfast items, snacks, frozen foods, dairy, and beverages.', minOrder: 'Min ₹499', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'No code required', discount: 'Free Delivery', description: 'Free delivery on orders above ₹49. Valid for new users.', minOrder: 'Min ₹49', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'No code required', discount: '15% OFF', description: 'Flat 15% off on orders of ₹499 or more with Yes Bank credit cards. Maximum discount ₹100.', minOrder: 'Min ₹499', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBFIRST200', discount: '₹200 Cashback', description: 'Get flat ₹200 cashback on your first grocery order. Not valid on Ghee, oil and baby foods.', minOrder: 'Min ₹1000', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'No code required', discount: '10% OFF', description: 'Get 10% instant discount on minimum purchase of ₹1500 with Kotak Mahindra bank credit and debit cards. Valid only on Wednesdays, once per user per month.', minOrder: 'Min ₹1500', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No code required', discount: 'Up to 75% OFF', description: 'Grab up to 75% OFF on grocery products. Applicable on various categories.', minOrder: 'No minimum specified', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No code required', discount: '10% OFF', description: 'Shop for groceries at the Amazon Fresh Store and make your transaction via ICICI Bank cards to get 10% off on your shopping.', minOrder: 'No minimum specified', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'NEW100', discount: '₹100 OFF', description: 'Flat ₹100 OFF on your first Quick order. Valid for new users.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'QUICK75', discount: '₹75 OFF', description: 'Flat ₹75 OFF on shopping worth ₹349 or more. Valid for all users.', minOrder: 'Min ₹349', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No code required', discount: '₹50 - ₹100 OFF', description: 'Flat ₹50 - ₹100 OFF on your first orders. Applicable on groceries, fruits, veggies, bakery and eggs, electronics, and more. Delivered in 10 minutes.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No code required', discount: 'Up to 90% OFF', description: 'Shop for sitewide products & get up to 90% OFF on your orders. Categories include groceries & daily essentials, food & snacks, personal care & household, electronics & more. Delivered in 10 minutes.', minOrder: 'No minimum specified', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];
