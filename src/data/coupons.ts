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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'N/A', discount: '20% Cashback', description: 'Flat 20% cashback on your first order for new users, maximum discount of ₹200.', minOrder: 'Min ₹0', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + ₹200 Cashback', description: 'Save up to 80% and get an extra ₹200 cashback on groceries when paying with Paytm UPI.', minOrder: 'Min ₹199', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/blinkit-coupons', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'ZEPAMZ50', discount: 'Up to 95% OFF + ₹50 Cashback', description: 'Get up to 95% discount with an additional ₹50 cashback on all products.', minOrder: 'Min ₹0', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/zepto-coupon-codes', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'MBK300', discount: 'Up to ₹300 Cashback', description: 'Save up to ₹300 cashback when paying with MobiKwik.', minOrder: 'Min ₹399', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/zepto-coupon-codes', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'N/A', discount: 'Free Gift + Free Delivery', description: 'Get a free gift and free delivery on your very first Swiggy Instamart order.', minOrder: 'Min ₹0', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.grabon.in/swiggy-instamart-coupons', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'N/A', discount: '10% OFF (Up to ₹150)', description: 'Exclusive offer for ICICI Bank cardholders: Get 10% off on instant purchases, up to ₹150, with free shipping.', minOrder: 'Min ₹199', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/swiggy-instamart-coupons', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBFIRST200', discount: '₹200 Cashback', description: 'Flat ₹200 cashback on your first grocery order for new users. Not valid on Ghee, oil, and baby foods.', minOrder: 'Min ₹1000', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.gopaisa.com/stores/bigbasket-coupons', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'N/A', discount: '₹200 OFF', description: 'Get ₹200 off on orders using HSBC Bank Credit Cards.', minOrder: 'Min ₹2500', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.desidime.com/stores/bigbasket', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'N/A', discount: 'Free Delivery', description: 'Free delivery for Prime members on orders above ₹300.', minOrder: 'Min ₹300', expiry: 'December 31, 2026', category: 'Delivery', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'N/A', discount: 'Up to 75% OFF', description: 'Save up to 75% on various grocery products.', minOrder: 'Min ₹0', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/amazon-fresh-promo-codes', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JMNEW100', discount: '₹100 OFF', description: 'Flat ₹100 off on your first order for new users.', minOrder: 'Min ₹299', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.woohoo.in/jiomart-promo-codes', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'FLAT150', discount: '₹150 OFF', description: 'Flat ₹150 off on shopping of ₹1499 or more.', minOrder: 'Min ₹1499', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.indiafreestuff.in/jiomart-discount-coupon-upto-50-off-extra-3-off-tips-jiomart/', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'N/A', discount: '₹50 - ₹100 OFF', description: 'New user offer: Get ₹50 to ₹100 off on your orders.', minOrder: 'Min ₹199', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.grabon.in/flipkart-minutes-coupons', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'N/A', discount: 'Extra 15% OFF', description: 'Buy 3 items and get an extra 15% off on groceries, personal care, and more.', minOrder: 'No Min', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.desidime.com/stores/flipkart-minutes', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];

export const SG_COUPONS: Coupon[] = [
  { id: 'fp1', platform: 'FairPrice', platformId: 'fairprice', code: 'FPNEW8', discount: 'S$8 OFF', description: 'Get S$8 off your first FairPrice online order.', minOrder: 'Min S$50', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.fairprice.com.sg', bgColor: '#E8F5E9', textColor: '#2E7D32', logo: '🛒' },
  { id: 'rm1', platform: 'RedMart', platformId: 'redmart', code: 'RMFRESH10', discount: '10% OFF Fresh Produce', description: 'Save 10% on all fresh vegetables and fruits.', minOrder: 'Min S$40', expiry: 'End of month', category: 'Vegetables', isHot: true, url: 'https://redmart.lazada.sg', bgColor: '#FFEbee', textColor: '#C62828', logo: '🚚' },
  { id: 'cs1', platform: 'Cold Storage', platformId: 'coldstorage', code: 'CSDAIRY5', discount: 'S$5 OFF Dairy', description: 'Discount on milk, cheese, and other dairy products.', minOrder: 'Min S$30', expiry: 'Ongoing', category: 'Dairy', isHot: false, url: 'https://coldstorage.com.sg', bgColor: '#E3F2FD', textColor: '#1565C0', logo: '🥩' },
  { id: 'sh1', platform: 'Shopee Supermarket', platformId: 'shopee', code: 'SHOPGROC15', discount: '15% Cashback', description: 'Get 15% cashback in Shopee Coins for grocery items.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://shopee.sg/supermarket', bgColor: '#FFF3E0', textColor: '#E65100', logo: '🛍️' },
];
