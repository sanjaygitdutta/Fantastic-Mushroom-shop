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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'NEWUSER', discount: '₹100 OFF', description: 'Flat ₹100 off on your first order for new users.', minOrder: 'Min ₹300', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + ₹200 Cashback', description: 'Save up to 80% and get an extra ₹200 cashback on groceries when paying with Paytm UPI.', minOrder: 'Min ₹199', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'WELCOME', discount: '30% OFF + Free Delivery', description: 'Get 30% off on your first grocery order with free delivery.', minOrder: 'Min ₹99', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'MBK300', discount: 'Up to ₹300 Cashback', description: 'Save up to ₹300 cashback when paying with MobiKwik.', minOrder: 'Min ₹399', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'No code needed', discount: 'FREE Gift + FREE Delivery', description: 'Get a FREE gift with your very first Swiggy Instamart order and free delivery.', minOrder: 'Min ₹49', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'No code needed', discount: '10% OFF up to ₹150 + Free Shipping', description: 'Get 10% off up to ₹150 on instant purchases and free shipping for ICICI Bank cardholders.', minOrder: 'Min ₹199', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBFIRST200', discount: '₹200 Cashback', description: 'Get flat ₹200 cashback on your first grocery order.', minOrder: 'Min ₹1000', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'No code needed', discount: '10% Supercash up to ₹200', description: 'Get 10% Supercash up to ₹200 when paying with MobiKwik.', minOrder: 'Min ₹800', expiry: 'Ongoing', category: 'Grocery', isHot: false, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No code needed', discount: 'Up to ₹400 Cashback', description: 'New Amazon customers get up to ₹400 cashback on their first four Amazon Fresh orders.', minOrder: 'Min ₹300 (Prime) / ₹799 (Non-Prime)', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No code needed', discount: 'Free Delivery', description: 'Free delivery for Prime members on orders above ₹300, and for non-Prime members on orders above ₹799.', minOrder: 'Min ₹300 (Prime) / ₹799 (Non-Prime)', expiry: 'Ongoing', category: 'Delivery', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JMNEW100', discount: '₹100 OFF', description: 'Flat ₹100 off on your first order for new users.', minOrder: 'Min ₹299', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'JM100', discount: '₹100 OFF', description: 'Flat ₹100 off on grocery orders with quick delivery.', minOrder: 'Min ₹249', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No code needed', discount: '10% OFF up to ₹200', description: 'Flat 10% off up to ₹200 on your first grocery order.', minOrder: 'Min ₹1000', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.flipkart.com/grocery-supermart-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No code needed', discount: 'Groceries at ₹1', description: 'Get premium groceries for just ₹1 on select products and brands.', minOrder: 'No minimum specified', expiry: 'Until stocks last', category: 'Grocery', isHot: true, url: 'https://www.flipkart.com/grocery-supermart-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];

export const SG_COUPONS: Coupon[] = [
  { id: 'fp1', platform: 'FairPrice', platformId: 'fairprice', code: 'FPNEW8', discount: 'S$8 OFF', description: 'Get S$8 off your first FairPrice online order.', minOrder: 'Min S$50', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.fairprice.com.sg', bgColor: '#E8F5E9', textColor: '#2E7D32', logo: '🛒' },
  { id: 'rm1', platform: 'RedMart', platformId: 'redmart', code: 'RMFRESH10', discount: '10% OFF Fresh Produce', description: 'Save 10% on all fresh vegetables and fruits.', minOrder: 'Min S$40', expiry: 'End of month', category: 'Vegetables', isHot: true, url: 'https://redmart.lazada.sg', bgColor: '#FFEbee', textColor: '#C62828', logo: '🚚' },
  { id: 'cs1', platform: 'Cold Storage', platformId: 'coldstorage', code: 'CSDAIRY5', discount: 'S$5 OFF Dairy', description: 'Discount on milk, cheese, and other dairy products.', minOrder: 'Min S$30', expiry: 'Ongoing', category: 'Dairy', isHot: false, url: 'https://coldstorage.com.sg', bgColor: '#E3F2FD', textColor: '#1565C0', logo: '🥩' },
  { id: 'sh1', platform: 'Shopee Supermarket', platformId: 'shopee', code: 'SHOPGROC15', discount: '15% Cashback', description: 'Get 15% cashback in Shopee Coins for grocery items.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://shopee.sg/supermarket', bgColor: '#FFF3E0', textColor: '#E65100', logo: '🛍️' },
];
