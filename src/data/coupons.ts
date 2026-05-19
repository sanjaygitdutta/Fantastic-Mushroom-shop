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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + Extra ₹200 Cashback', description: 'Save up to 80% and an extra Rs 200 cashback on groceries, rice, edible oils, ghee, and dry fruits when paying with Paytm UPI.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'MBKUPI', discount: 'Flat ₹20 Discount', description: 'Get a flat Rs 20 discount on using UPI Payments on MobiKwik Wallet. Valid twice per session for old and new users.', minOrder: 'Min ₹249', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'MBK300', discount: 'Up to ₹300 Cashback', description: 'Save up to Rs 300 cashback with MobiKwik on Zepto orders. Applicable for all users buying via MobiKwik.', minOrder: 'Min ₹399', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'ZEPAMZ50', discount: 'Up to 95% OFF + Extra ₹50 Cashback', description: 'Get up to 95% discount and an additional Rs 50 cashback on all products. Valid on electronics, fashion, and more.', minOrder: 'No minimum', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'INSTAFREE', discount: 'Free Delivery', description: 'Get free delivery on your Swiggy Instamart orders.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Delivery', isHot: true, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'INSTA50', discount: 'Flat ₹50 OFF', description: 'Enjoy a flat Rs 50 discount on fruits, vegetables, dairy, breads & eggs. Applicable for selected users.', minOrder: 'Min ₹199', expiry: 'July 31, 2026', category: 'Vegetables', isHot: true, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBNEW200', discount: 'Flat ₹200 Cashback', description: 'Get flat Rs 200 cashback on your first order.', minOrder: 'Min ₹1000', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBMAY200', discount: 'Flat ₹200 OFF', description: 'Get a flat Rs 200 off on orders above Rs 1000. Applicable for all users.', minOrder: 'Min ₹1000', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'FRESHFREE', discount: 'Free Delivery', description: 'Prime members get free delivery on orders above ₹300. Non-Prime members get free delivery on orders above ₹799.', minOrder: 'Min ₹300 (for Prime members)', expiry: 'May 31, 2026', category: 'Delivery', isHot: true, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'HOM15', discount: '15% OFF Cashback', description: 'Get 15% off cashback on buying products worth Rs. 200 and more.', minOrder: 'Min ₹200', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JMNEW100', discount: 'Flat ₹100 OFF', description: 'Flat Rs 100 off on your first order for new users.', minOrder: 'Min ₹299', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'FRUITS50', discount: 'Flat 50% OFF (Up to ₹100)', description: 'Get 50% discount on fruits, up to Rs 100. Valid between 6 PM - 9 PM. May be location specific.', minOrder: 'No minimum', expiry: 'May 19, 2026', category: 'Fruits', isHot: true, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FPMNEW100', discount: 'Flat ₹100 OFF', description: 'Get flat Rs 100 off on your first order. Applicable for new users on groceries, fruits, veggies, and more.', minOrder: 'Min ₹1299', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.flipkart.com/flipkart-minutes', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FPMFREE', discount: 'Free Delivery', description: 'Get free delivery on all your Flipkart Minutes orders, delivered in just 10 minutes.', minOrder: 'No minimum', expiry: 'May 31, 2026', category: 'Delivery', isHot: true, url: 'https://www.flipkart.com/flipkart-minutes', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];

export const SG_COUPONS: Coupon[] = [
  { id: 'fp1', platform: 'FairPrice', platformId: 'fairprice', code: 'FPNEW8', discount: 'S$8 OFF', description: 'Get S$8 off your first FairPrice online order.', minOrder: 'Min S$50', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.fairprice.com.sg', bgColor: '#E8F5E9', textColor: '#2E7D32', logo: '🛒' },
  { id: 'rm1', platform: 'RedMart', platformId: 'redmart', code: 'RMFRESH10', discount: '10% OFF Fresh Produce', description: 'Save 10% on all fresh vegetables and fruits.', minOrder: 'Min S$40', expiry: 'End of month', category: 'Vegetables', isHot: true, url: 'https://redmart.lazada.sg', bgColor: '#FFEbee', textColor: '#C62828', logo: '🚚' },
  { id: 'cs1', platform: 'Cold Storage', platformId: 'coldstorage', code: 'CSDAIRY5', discount: 'S$5 OFF Dairy', description: 'Discount on milk, cheese, and other dairy products.', minOrder: 'Min S$30', expiry: 'Ongoing', category: 'Dairy', isHot: false, url: 'https://coldstorage.com.sg', bgColor: '#E3F2FD', textColor: '#1565C0', logo: '🥩' },
  { id: 'sh1', platform: 'Shopee Supermarket', platformId: 'shopee', code: 'SHOPGROC15', discount: '15% Cashback', description: 'Get 15% cashback in Shopee Coins for grocery items.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://shopee.sg/supermarket', bgColor: '#FFF3E0', textColor: '#E65100', logo: '🛍️' },
];
