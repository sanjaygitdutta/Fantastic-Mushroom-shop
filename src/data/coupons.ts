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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'NEW100', discount: '₹100 OFF', description: 'Flat ₹100 off on your first order for new users.', minOrder: 'Min ₹300', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.grabon.in/blinkit-coupons', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + ₹200 Cashback', description: 'Get up to 80% off + extra ₹200 cashback on groceries via Paytm UPI.', minOrder: 'Min ₹199', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/blinkit-coupons', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'ZEPTONOW', discount: '10% OFF', description: 'Get 10% off on your first order.', minOrder: 'Min ₹499', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.woohoo.in/zepto-coupon-codes', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'QUICKSAVE200', discount: 'Up to 95% OFF + ₹200 OFF', description: 'Get up to 95% off and an extra ₹200 discount on all products.', minOrder: 'No minimum', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/zepto-coupons', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'FIRSTDELIVERY', discount: 'Free Delivery + Free Gift', description: 'Get free delivery and a free gift on your first Swiggy Instamart order.', minOrder: 'Min ₹199', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.grabon.in/swiggy-instamart-coupons', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'INSTA5', discount: '5% OFF', description: 'Enjoy an automatic 5% discount on orders over ₹499 for all users.', minOrder: 'Min ₹499', expiry: 'Ongoing', category: 'Grocery', isHot: false, url: 'https://www.desidime.com/stores/swiggy-instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'KOTAK200', discount: '₹200 OFF', description: '₹200 OFF on your first order with Kotak Bank.', minOrder: 'Not specified', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.buykers.in/bigbasket-com/coupons', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'SBIVISA40DC', discount: '40% Instant Discount (Max ₹400)', description: 'Get 40% instant discount using SBI Debit cards.', minOrder: 'Min ₹399', expiry: 'June 27, 2026', category: 'Grocery', isHot: true, url: 'https://www.desidime.com/stores/bigbasket', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'FRESHNEW', discount: 'Free Delivery', description: 'Enjoy free delivery on your first grocery order.', minOrder: 'Not specified', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.gopaisa.com/stores/amazon-fresh-coupons', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No code required', discount: 'Up to 75% OFF', description: 'Get up to 75% off on groceries during Best Deals of the Month.', minOrder: 'No minimum', expiry: 'Ongoing', category: 'Grocery', isHot: false, url: 'https://www.grabon.in/amazon-fresh-promo-codes', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JM100', discount: '₹100 OFF', description: '₹100 off on orders for new users.', minOrder: 'Min ₹199', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.indiafreestuff.in/jiomart-discount-coupon-upto-50-off-extra-3-off-tips-jiomart/', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'FLAT150', discount: 'Flat ₹150 OFF', description: 'Flat ₹150 off on shopping of ₹1499 or more.', minOrder: 'Min ₹1499', expiry: 'Ongoing', category: 'Grocery', isHot: false, url: 'https://www.indiafreestuff.in/jiomart-discount-coupon-upto-50-off-extra-3-off-tips-jiomart/', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'MINUTESNEW', discount: '₹50 - ₹100 OFF', description: 'Flat ₹50 - ₹100 off on your first order for new users.', minOrder: 'Min ₹199', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.grabon.in/flipkart-minutes-coupons', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FIRST50', discount: '₹50 OFF', description: 'Additional ₹50 off for first-time buyers on kitchen needs.', minOrder: 'Not specified', expiry: 'Ongoing', category: 'First Order', isHot: false, url: 'https://www.zingoy.com/flipkart-minutes-coupons', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];

export const SG_COUPONS: Coupon[] = [
  { id: 'fp1', platform: 'FairPrice', platformId: 'fairprice', code: 'FPNEW8', discount: 'S$8 OFF', description: 'Get S$8 off your first FairPrice online order.', minOrder: 'Min S$50', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.fairprice.com.sg', bgColor: '#E8F5E9', textColor: '#2E7D32', logo: '🛒' },
  { id: 'rm1', platform: 'RedMart', platformId: 'redmart', code: 'RMFRESH10', discount: '10% OFF Fresh Produce', description: 'Save 10% on all fresh vegetables and fruits.', minOrder: 'Min S$40', expiry: 'End of month', category: 'Vegetables', isHot: true, url: 'https://redmart.lazada.sg', bgColor: '#FFEbee', textColor: '#C62828', logo: '🚚' },
  { id: 'cs1', platform: 'Cold Storage', platformId: 'coldstorage', code: 'CSDAIRY5', discount: 'S$5 OFF Dairy', description: 'Discount on milk, cheese, and other dairy products.', minOrder: 'Min S$30', expiry: 'Ongoing', category: 'Dairy', isHot: false, url: 'https://coldstorage.com.sg', bgColor: '#E3F2FD', textColor: '#1565C0', logo: '🥩' },
  { id: 'sh1', platform: 'Shopee Supermarket', platformId: 'shopee', code: 'SHOPGROC15', discount: '15% Cashback', description: 'Get 15% cashback in Shopee Coins for grocery items.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://shopee.sg/supermarket', bgColor: '#FFF3E0', textColor: '#E65100', logo: '🛍️' },
];
