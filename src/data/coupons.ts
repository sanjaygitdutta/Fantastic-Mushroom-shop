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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'BLINKIT', discount: '50% OFF (up to ₹100)', description: '50% off on your first grocery order for new users.', minOrder: 'Min ₹200', expiry: 'September 02, 2025', category: 'First Order', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to ₹200 Cashback', description: 'Up to 80% off + extra ₹200 cashback on groceries via Paytm UPI.', minOrder: 'Min ₹199', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'WELCOME', discount: '30% OFF + Free Delivery', description: '30% off on your first order plus free delivery.', minOrder: 'Min ₹99', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'MBK300', discount: 'Up to ₹300 Cashback', description: 'Up to ₹300 cashback on orders via MobiKwik.', minOrder: 'Min ₹399', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'MEGASAVINGS', discount: 'Flat ₹50 OFF', description: 'Flat ₹50 off on fruits, vegetables, dairy, breads & eggs for selected users.', minOrder: 'Min ₹199', expiry: 'July 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'INSTA100', discount: 'Flat ₹100 OFF', description: 'Flat ₹100 off on Instamart orders.', minOrder: 'Min ₹299', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBFIRST200', discount: 'Flat ₹200 Cashback', description: 'Flat ₹200 cashback on your first grocery order.', minOrder: 'Min ₹1000', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'KOTAKCC', discount: '12% Instant Discount (up to ₹300)', description: '12% instant discount on minimum order of ₹2000 with Kotak Credit Card.', minOrder: 'Min ₹2000', expiry: 'September 02, 2025', category: 'Grocery', isHot: true, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No Code (Prime Benefit)', discount: 'Free Delivery', description: 'Unlimited free grocery delivery for Prime members on eligible orders.', minOrder: 'Min ₹350', expiry: 'December 31, 2026', category: 'Delivery', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No Code (Prime Benefit)', discount: 'Up to 50% OFF', description: 'Up to 50% off on rotating grocery favorites for Prime members.', minOrder: 'None', expiry: 'December 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JM100', discount: '₹100 OFF', description: '₹100 off on first order for new users.', minOrder: 'Min ₹199', expiry: 'May 24, 2026', category: 'First Order', isHot: true, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'NEXT75', discount: 'Flat ₹75 OFF', description: 'Flat ₹75 off on orders.', minOrder: 'Min ₹349', expiry: 'June 07, 2026', category: 'Grocery', isHot: true, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No Code (Auto-applied)', discount: 'Upto 50% OFF', description: 'Upto 50% off on grocery collection.', minOrder: 'None', expiry: 'December 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'NEWFLIP', discount: 'Flat ₹100 OFF', description: 'Flat ₹100 off on first grocery order for new users.', minOrder: 'Min ₹500', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];

export const SG_COUPONS: Coupon[] = [
  { id: 'fp1', platform: 'FairPrice', platformId: 'fairprice', code: 'FPNEW8', discount: 'S$8 OFF', description: 'Get S$8 off your first FairPrice online order.', minOrder: 'Min S$50', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.fairprice.com.sg', bgColor: '#E8F5E9', textColor: '#2E7D32', logo: '🛒' },
  { id: 'rm1', platform: 'RedMart', platformId: 'redmart', code: 'RMFRESH10', discount: '10% OFF Fresh Produce', description: 'Save 10% on all fresh vegetables and fruits.', minOrder: 'Min S$40', expiry: 'End of month', category: 'Vegetables', isHot: true, url: 'https://redmart.lazada.sg', bgColor: '#FFEbee', textColor: '#C62828', logo: '🚚' },
  { id: 'cs1', platform: 'Cold Storage', platformId: 'coldstorage', code: 'CSDAIRY5', discount: 'S$5 OFF Dairy', description: 'Discount on milk, cheese, and other dairy products.', minOrder: 'Min S$30', expiry: 'Ongoing', category: 'Dairy', isHot: false, url: 'https://coldstorage.com.sg', bgColor: '#E3F2FD', textColor: '#1565C0', logo: '🥩' },
  { id: 'sh1', platform: 'Shopee Supermarket', platformId: 'shopee', code: 'SHOPGROC15', discount: '15% Cashback', description: 'Get 15% cashback in Shopee Coins for grocery items.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://shopee.sg/supermarket', bgColor: '#FFF3E0', textColor: '#E65100', logo: '🛍️' },
];
