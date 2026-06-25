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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + ₹200 Cashback', description: 'Get up to 80% off and an extra ₹200 cashback on groceries and daily essentials when paying with Paytm UPI.', minOrder: 'Min ₹199', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/blinkit-coupons', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'FIRST100', discount: '₹100 OFF', description: 'Flat ₹100 OFF on your first order across vegetables, munchies, cold drinks, frozen food & more.', minOrder: 'Min ₹300', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.grabon.in/blinkit-coupons', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'QUICKSAVE200', discount: 'Up to 95% OFF + ₹200 OFF', description: 'Get up to 95% off and an extra ₹200 discount on all products including electronics, fashion, and more.', minOrder: 'Min ₹1299', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/zepto-coupons', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'WELCOME', discount: '30% OFF + Free Delivery', description: 'Get 30% OFF on your first grocery order plus free delivery on orders above ₹99.', minOrder: 'Min ₹99', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.gopaisa.com/stores/zepto-first-order-coupon', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'NOCODE', discount: 'FREE Gift + FREE Delivery', description: 'Get a FREE gift with your very first Swiggy Instamart order and enjoy free delivery.', minOrder: 'No Min Order', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.grabon.in/swiggy-instamart-coupons', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'NOCODE', discount: '5% OFF', description: 'Enjoy an automatic 5% discount at checkout on your grocery essentials.', minOrder: 'Min ₹499', expiry: 'December 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.zingoy.com/swiggy-instamart-coupons', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBFIRST200', discount: '₹200 Cashback', description: 'Get flat ₹200 cashback on your first grocery order.', minOrder: 'Min ₹1000', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.gopaisa.com/stores/bigbasket-coupons', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBICICI20', discount: '20% OFF', description: 'Exclusive 20% OFF on your first BigBasket order when paying with ICICI debit or credit card.', minOrder: 'No Min Order', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://buykers.in/bigbasket-com-coupons', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'NOCODE', discount: 'Up to ₹400 Cashback', description: 'New Amazon customers can enjoy cashback of up to ₹400 on their first four Amazon Fresh orders.', minOrder: 'No Min Order', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'HOM15', discount: '15% Cashback', description: 'Get 15% cashback on buying products worth ₹200 and more.', minOrder: 'Min ₹200', expiry: 'December 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.gopaisa.com/stores/amazon-fresh-coupons', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JM100', discount: '₹100 OFF', description: 'Get ₹100 off on your first order for new users.', minOrder: 'Min ₹199', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.indiafreestuff.in/jiomart-discount-coupon-upto-50-off-extra-3-off-tips-jiomart/', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'FLAT150', discount: '₹150 OFF', description: 'Flat ₹150 off on shopping of ₹1499 or more.', minOrder: 'Min ₹1499', expiry: 'December 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.indiafreestuff.in/jiomart-discount-coupon-upto-50-off-extra-3-off-tips-jiomart/', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FKG50', discount: '50% OFF', description: 'Get 50% off on your first order.', minOrder: 'No Min Order', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://wethrift.com/flipkart-discount-codes', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FPMNEW100', discount: '₹100 OFF', description: 'Get ₹100 off on your first order across groceries, fruits, veggies, bakery and eggs, electronics and more.', minOrder: 'Min ₹1299', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.desidime.com/stores/flipkart-minutes', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];

export const SG_COUPONS: Coupon[] = [
  { id: 'fp1', platform: 'FairPrice', platformId: 'fairprice', code: 'FPNEW8', discount: 'S$8 OFF', description: 'Get S$8 off your first FairPrice online order.', minOrder: 'Min S$50', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.fairprice.com.sg', bgColor: '#E8F5E9', textColor: '#2E7D32', logo: '🛒' },
  { id: 'rm1', platform: 'RedMart', platformId: 'redmart', code: 'RMFRESH10', discount: '10% OFF Fresh Produce', description: 'Save 10% on all fresh vegetables and fruits.', minOrder: 'Min S$40', expiry: 'End of month', category: 'Vegetables', isHot: true, url: 'https://redmart.lazada.sg', bgColor: '#FFEbee', textColor: '#C62828', logo: '🚚' },
  { id: 'cs1', platform: 'Cold Storage', platformId: 'coldstorage', code: 'CSDAIRY5', discount: 'S$5 OFF Dairy', description: 'Discount on milk, cheese, and other dairy products.', minOrder: 'Min S$30', expiry: 'Ongoing', category: 'Dairy', isHot: false, url: 'https://coldstorage.com.sg', bgColor: '#E3F2FD', textColor: '#1565C0', logo: '🥩' },
  { id: 'sh1', platform: 'Shopee Supermarket', platformId: 'shopee', code: 'SHOPGROC15', discount: '15% Cashback', description: 'Get 15% cashback in Shopee Coins for grocery items.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://shopee.sg/supermarket', bgColor: '#FFF3E0', textColor: '#E65100', logo: '🛍️' },
];
