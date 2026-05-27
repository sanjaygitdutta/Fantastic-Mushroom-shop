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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + ₹200 Cashback', description: 'Save up to 80% and an extra ₹200 cashback on groceries, rice, edible oils, ghee, and dry fruits.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/blinkit-coupons', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'WELCOME20', discount: '20% OFF', description: 'Discount for new customers on their first order.', minOrder: 'Min ₹300-400', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://rootershop.com/blinkit-coupon-code-today/', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'WELCOME', discount: '30% OFF + Free Delivery', description: 'Get 30% OFF on your first grocery order plus free delivery.', minOrder: 'Min ₹99', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.gopaisa.com/stores/zepto-first-order-coupon', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'ZEPAMZ50', discount: '₹50 Cashback', description: 'Get ₹50 Cashback on all orders with up to 95% discount on various products.', minOrder: 'N/A', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/zepto-coupons', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'MEGASAVINGS', discount: '₹50 OFF', description: 'Flat ₹50 discount on fruits, vegetables, dairy, breads & eggs.', minOrder: 'Min ₹199', expiry: 'July 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.desidime.com/stores/swiggy-instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'N/A', discount: 'Up to 90% OFF + Free Shipping', description: 'Enjoy up to 90% OFF on instant groceries with free shipping.', minOrder: 'Min ₹299', expiry: 'December 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/swiggy-instamart-coupons', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBFIRST200', discount: '₹200 Cashback', description: 'Get flat ₹200 cashback on your first grocery order.', minOrder: 'Min ₹1,000', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.gopaisa.com/stores/bigbasket-coupons', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'N/A', discount: '20% OFF', description: 'ICICI Bank Exclusive: 20% OFF on first BigBasket order when paying with ICICI debit or credit card.', minOrder: 'N/A', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://buykers.in/bigbasket-com-coupons', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'HOM15', discount: '15% Cashback', description: 'Get 15% cashback on home and kitchen products.', minOrder: 'Min ₹200', expiry: 'December 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.gopaisa.com/stores/amazon-fresh-coupons', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'N/A', discount: 'Up to ₹400 Cashback', description: 'New Amazon customers can enjoy cashback of up to ₹400 on their first four Amazon Fresh orders.', minOrder: 'N/A', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.indiafreestuff.in/amazon-fresh-super-value-day-upto-90-off-up-to-rs-300-cashback-exclusive-cashback-offers-bank-offers/', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JMNEW100', discount: 'Flat ₹100 OFF', description: 'Flat ₹100 OFF on your first order for new users.', minOrder: 'Min ₹299', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.woohoo.in/jiomart-promo-codes', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'JM100', discount: 'Flat ₹100 OFF', description: 'Flat ₹100 OFF on quick delivery orders.', minOrder: 'Min ₹249', expiry: 'December 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.woohoo.in/jiomart-promo-codes', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'MINUTES50', discount: 'Flat ₹50 OFF', description: 'Flat ₹50 OFF on orders, excluding electronics, mobiles, milk, atta, ghee, oil, butter, tobacco, and coin.', minOrder: 'Min ₹119', expiry: 'December 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.youtube.com/watch?v=DvtY7RDqo4k', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FPMNEW100', discount: '₹100 OFF', description: 'Get ₹100 OFF on your first order for new users.', minOrder: 'Min ₹1299', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.desidime.com/stores/flipkart-minutes', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];

export const SG_COUPONS: Coupon[] = [
  { id: 'fp1', platform: 'FairPrice', platformId: 'fairprice', code: 'FPNEW8', discount: 'S$8 OFF', description: 'Get S$8 off your first FairPrice online order.', minOrder: 'Min S$50', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.fairprice.com.sg', bgColor: '#E8F5E9', textColor: '#2E7D32', logo: '🛒' },
  { id: 'rm1', platform: 'RedMart', platformId: 'redmart', code: 'RMFRESH10', discount: '10% OFF Fresh Produce', description: 'Save 10% on all fresh vegetables and fruits.', minOrder: 'Min S$40', expiry: 'End of month', category: 'Vegetables', isHot: true, url: 'https://redmart.lazada.sg', bgColor: '#FFEbee', textColor: '#C62828', logo: '🚚' },
  { id: 'cs1', platform: 'Cold Storage', platformId: 'coldstorage', code: 'CSDAIRY5', discount: 'S$5 OFF Dairy', description: 'Discount on milk, cheese, and other dairy products.', minOrder: 'Min S$30', expiry: 'Ongoing', category: 'Dairy', isHot: false, url: 'https://coldstorage.com.sg', bgColor: '#E3F2FD', textColor: '#1565C0', logo: '🥩' },
  { id: 'sh1', platform: 'Shopee Supermarket', platformId: 'shopee', code: 'SHOPGROC15', discount: '15% Cashback', description: 'Get 15% cashback in Shopee Coins for grocery items.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://shopee.sg/supermarket', bgColor: '#FFF3E0', textColor: '#E65100', logo: '🛍️' },
];
