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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'NOCODE', discount: '₹100 OFF', description: 'Flat ₹100 OFF on your first order. No coupon code required.', minOrder: 'Min ₹300', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.blinkit.com/', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + Extra ₹200 Cashback', description: 'Save up to 80% and get an extra ₹200 cashback on groceries using Paytm UPI.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/blinkit-coupons', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'WELCOME', discount: '30% OFF + Free Delivery', description: 'Get 30% off and free delivery on your first grocery order.', minOrder: 'Min ₹99', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.gopaisa.com/stores/zepto-coupons', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'ZEPAMZ50', discount: '₹50 Cashback', description: 'Get ₹50 cashback on all orders.', minOrder: 'Min ₹399', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.grabon.in/zepto-coupons', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'PHONEPE20', discount: '₹20 Cashback', description: 'Get flat ₹20 cashback when you pay with PhonePe.', minOrder: 'Min ₹399', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.grabon.in/swiggy-instamart-coupons', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'MEGASAVINGS', discount: '₹50 OFF', description: 'Enjoy flat ₹50 discount on fruits, vegetables, dairy, breads & eggs.', minOrder: 'Min ₹199', expiry: 'July 31, 2026', category: 'Vegetables', isHot: true, url: 'https://www.desidime.com/stores/swiggy-instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBNEW200', discount: '₹200 Cashback', description: 'Get flat ₹200 cashback on your first order.', minOrder: 'Min ₹1000', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com/', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'KOTAKBB10', discount: '10% OFF (Max ₹300)', description: 'Get 10% instant discount on minimum purchase of ₹1500 with Kotak Mahindra bank cards. Valid on Wednesdays.', minOrder: 'Min ₹1500', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.couponzania.com/bigbasket-coupons', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'NOCODE', discount: 'Up to ₹400 Cashback', description: 'New Amazon customers can enjoy cashback of up to ₹400 on their first four Amazon Fresh orders.', minOrder: 'Check app for details', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'NOCODE', discount: 'Up to 75% OFF', description: 'Get up to 75% off on a wide range of groceries, fruits & vegetables, staples, and more.', minOrder: 'No minimum', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/amazon-fresh-promo-codes', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JMNEW100', discount: '₹100 OFF', description: 'Flat ₹100 OFF on your first order for new users.', minOrder: 'Min ₹299', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.woohoo.in/jiomart-promo-codes', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'JM100', discount: '₹100 OFF', description: 'Flat ₹100 OFF on your order with quick delivery.', minOrder: 'Min ₹249', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.woohoo.in/jiomart-promo-codes', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FIRST100', discount: '₹100 OFF', description: 'Get ₹100 off on your first order.', minOrder: 'Min ₹349', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.flipkart.com/minutes', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FREEDEL', discount: 'Free Delivery', description: 'Enjoy free delivery on all orders with 10-minute delivery.', minOrder: 'No minimum', expiry: 'Ongoing', category: 'Delivery', isHot: false, url: 'https://www.grabon.in/flipkart-minutes-coupons', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];

export const SG_COUPONS: Coupon[] = [
  { id: 'fp1', platform: 'FairPrice', platformId: 'fairprice', code: 'FPNEW8', discount: 'S$8 OFF', description: 'Get S$8 off your first FairPrice online order.', minOrder: 'Min S$50', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.fairprice.com.sg', bgColor: '#E8F5E9', textColor: '#2E7D32', logo: '🛒' },
  { id: 'rm1', platform: 'RedMart', platformId: 'redmart', code: 'RMFRESH10', discount: '10% OFF Fresh Produce', description: 'Save 10% on all fresh vegetables and fruits.', minOrder: 'Min S$40', expiry: 'End of month', category: 'Vegetables', isHot: true, url: 'https://redmart.lazada.sg', bgColor: '#FFEbee', textColor: '#C62828', logo: '🚚' },
  { id: 'cs1', platform: 'Cold Storage', platformId: 'coldstorage', code: 'CSDAIRY5', discount: 'S$5 OFF Dairy', description: 'Discount on milk, cheese, and other dairy products.', minOrder: 'Min S$30', expiry: 'Ongoing', category: 'Dairy', isHot: false, url: 'https://coldstorage.com.sg', bgColor: '#E3F2FD', textColor: '#1565C0', logo: '🥩' },
  { id: 'sh1', platform: 'Shopee Supermarket', platformId: 'shopee', code: 'SHOPGROC15', discount: '15% Cashback', description: 'Get 15% cashback in Shopee Coins for grocery items.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://shopee.sg/supermarket', bgColor: '#FFF3E0', textColor: '#E65100', logo: '🛍️' },
];
