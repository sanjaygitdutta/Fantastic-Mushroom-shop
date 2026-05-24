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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'FIRST100', discount: '₹100 OFF', description: 'Flat ₹100 off on your first grocery order.', minOrder: 'Min ₹300', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.grabon.in/blinkit-coupons', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + ₹200 Cashback', description: 'Save up to 80% and an extra Rs 200 cashback on groceries, rice, edible oils, ghee, and dry fruits using Paytm UPI.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/blinkit-coupons', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'ZEPTONOW', discount: '10% OFF (up to ₹200)', description: 'Get 10% Flat Off up to Rs. 200 on your first order.', minOrder: 'Min ₹499', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.desidime.com/stores/zepto', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'MBK300', discount: 'Up to ₹300 Cashback', description: 'Get up to Rs 300 cashback on orders using MobiKwik.', minOrder: 'Min ₹399', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/zepto-coupons', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'INSTAMART50', discount: '₹50 OFF', description: 'Flat Rs. 50 discount on Fruits, Vegetables, Dairy, Breads & Eggs for selected users.', minOrder: 'Min ₹199', expiry: 'July 31, 2026', category: 'Vegetables', isHot: true, url: 'https://www.desidime.com/stores/swiggy-instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'MOBIKWIK150', discount: 'Up to ₹150 Cashback', description: 'Get up to Rs. 150 cashback with Mobikwik Wallet on Swiggy Instamart orders.', minOrder: 'Min ₹399', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.desidime.com/stores/swiggy-instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBFIRST200', discount: '₹200 Cashback', description: 'Get flat Rs. 200 cashback on your first grocery order.', minOrder: 'Min ₹1000', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.gopaisa.com/stores/bigbasket-coupons', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'ICICI20', discount: '20% OFF (Max ₹200)', description: 'Flat 20% discount on your first BigBasket order with ICICI Debit or Credit Card.', minOrder: 'Min ₹800', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.buykers.in/bigbasket-com/coupons', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'FRESHNEW', discount: 'Up to ₹400 Cashback', description: 'New Amazon customers can enjoy a cashback of up to ₹400 on their first four Amazon Fresh orders.', minOrder: 'Min ₹399', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'NOCODE', discount: 'Up to 45% OFF', description: 'Up to 45% off on fresh fruits, vegetables, and daily essentials during Super Value Days.', minOrder: 'No minimum', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JM100', discount: '₹100 OFF', description: 'Flat Rs. 100 off on your first order.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.indiafreestuff.in/jiomart-discount-coupon-upto-50-off-extra-3-off-tips-jiomart/', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'NOCODE', discount: '40% OFF', description: 'Get 40% off on various grocery items including biscuits, drinks, packaged foods, fruits & vegetables, cooking essentials, dairy & bakery, personal care, beauty, mom & baby care, and kitchenware.', minOrder: 'No minimum', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/jiomart-coupons', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'MINUTES100', discount: '₹100 OFF', description: 'Flat Rs. 100 off on your first order.', minOrder: 'Min ₹349', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.grabon.in/flipkart-minutes-coupons', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'NOCODE', discount: 'Free Delivery', description: 'Get free delivery on all orders, delivered to your doorstep in just 10 minutes.', minOrder: 'No minimum', expiry: 'May 31, 2026', category: 'Delivery', isHot: true, url: 'https://www.grabon.in/flipkart-minutes-coupons', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];

export const SG_COUPONS: Coupon[] = [
  { id: 'fp1', platform: 'FairPrice', platformId: 'fairprice', code: 'FPNEW8', discount: 'S$8 OFF', description: 'Get S$8 off your first FairPrice online order.', minOrder: 'Min S$50', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.fairprice.com.sg', bgColor: '#E8F5E9', textColor: '#2E7D32', logo: '🛒' },
  { id: 'rm1', platform: 'RedMart', platformId: 'redmart', code: 'RMFRESH10', discount: '10% OFF Fresh Produce', description: 'Save 10% on all fresh vegetables and fruits.', minOrder: 'Min S$40', expiry: 'End of month', category: 'Vegetables', isHot: true, url: 'https://redmart.lazada.sg', bgColor: '#FFEbee', textColor: '#C62828', logo: '🚚' },
  { id: 'cs1', platform: 'Cold Storage', platformId: 'coldstorage', code: 'CSDAIRY5', discount: 'S$5 OFF Dairy', description: 'Discount on milk, cheese, and other dairy products.', minOrder: 'Min S$30', expiry: 'Ongoing', category: 'Dairy', isHot: false, url: 'https://coldstorage.com.sg', bgColor: '#E3F2FD', textColor: '#1565C0', logo: '🥩' },
  { id: 'sh1', platform: 'Shopee Supermarket', platformId: 'shopee', code: 'SHOPGROC15', discount: '15% Cashback', description: 'Get 15% cashback in Shopee Coins for grocery items.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://shopee.sg/supermarket', bgColor: '#FFF3E0', textColor: '#E65100', logo: '🛍️' },
];
