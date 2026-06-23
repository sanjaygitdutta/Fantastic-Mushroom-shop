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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'BLINK500', discount: 'Up to ₹500 OFF', description: 'Get up to ₹500 off on your first order.', minOrder: 'Min ₹1500', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + Extra Rs 200 Cashback', description: 'Save up to 80% and an extra Rs 200 cashback on groceries.', minOrder: 'Min Rs 199', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'WELCOME', discount: '30% OFF + Free Delivery', description: 'Get 30% OFF on your first order + Free Delivery.', minOrder: 'Min Rs 99', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'ZEPAMZ50', discount: 'Rs 50 Cashback', description: 'Get an Rs 50 Cashback on all orders.', minOrder: 'Min Rs 199', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'INSTANEW', discount: 'FREE Gift + FREE Delivery', description: 'Get a FREE gift with your very first Swiggymart order and FREE delivery.', minOrder: 'Min Rs 49', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'ICICIBANK', discount: '10% OFF, Up to Rs 150', description: 'Get 10% OFF on instant purchases, up to Rs 150, for ICICI Bank cardholders. Also avail free shipping on orders above Rs 199.', minOrder: 'Min Rs 199', expiry: 'June 30, 2026', category: 'Grocery', isHot: false, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBFIRST200', discount: 'Flat Rs 200 Cashback', description: 'Get flat Rs 200 cashback on your first grocery order.', minOrder: 'Min Rs 1,000', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'BB75CASH', discount: 'Flat Rs 75 Cashback', description: 'Get flat Rs 75 cashback on purchases over Rs 999.', minOrder: 'Min Rs 999', expiry: 'June 30, 2026', category: 'Grocery', isHot: false, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'FRESHNEW', discount: 'Free Delivery', description: 'Enjoy free delivery on your first grocery order.', minOrder: 'Min ₹0', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No Code Required', discount: 'Up to 75% OFF', description: 'Get up to 75% off on various grocery products.', minOrder: 'Min ₹0', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'NEW100', discount: 'Flat Rs 100 OFF', description: 'Get flat Rs 100 off on your first order.', minOrder: 'Min Rs 199', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'R2A5V1E4H0T', discount: '25% OFF, Max ₹50', description: 'Get 25% off on your purchase.', minOrder: 'Min Rs 99', expiry: 'June 30, 2026', category: 'Grocery', isHot: false, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'MINUTESNEW', discount: 'Flat Rs 50 OFF', description: 'Enjoy Rs 50 off on your first purchase with free shipping.', minOrder: 'Min Rs 199', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.flipkart.com/minutes', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'BOBCARD300', discount: 'Flat ₹300 OFF', description: 'Get flat ₹300 off on Flipkart Grocery with BOBCARD Credit Card.', minOrder: 'Min ₹3,000', expiry: 'June 26, 2026', category: 'Grocery', isHot: true, url: 'https://www.flipkart.com/minutes', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];

export const SG_COUPONS: Coupon[] = [
  { id: 'fp1', platform: 'FairPrice', platformId: 'fairprice', code: 'FPNEW8', discount: 'S$8 OFF', description: 'Get S$8 off your first FairPrice online order.', minOrder: 'Min S$50', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.fairprice.com.sg', bgColor: '#E8F5E9', textColor: '#2E7D32', logo: '🛒' },
  { id: 'rm1', platform: 'RedMart', platformId: 'redmart', code: 'RMFRESH10', discount: '10% OFF Fresh Produce', description: 'Save 10% on all fresh vegetables and fruits.', minOrder: 'Min S$40', expiry: 'End of month', category: 'Vegetables', isHot: true, url: 'https://redmart.lazada.sg', bgColor: '#FFEbee', textColor: '#C62828', logo: '🚚' },
  { id: 'cs1', platform: 'Cold Storage', platformId: 'coldstorage', code: 'CSDAIRY5', discount: 'S$5 OFF Dairy', description: 'Discount on milk, cheese, and other dairy products.', minOrder: 'Min S$30', expiry: 'Ongoing', category: 'Dairy', isHot: false, url: 'https://coldstorage.com.sg', bgColor: '#E3F2FD', textColor: '#1565C0', logo: '🥩' },
  { id: 'sh1', platform: 'Shopee Supermarket', platformId: 'shopee', code: 'SHOPGROC15', discount: '15% Cashback', description: 'Get 15% cashback in Shopee Coins for grocery items.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://shopee.sg/supermarket', bgColor: '#FFF3E0', textColor: '#E65100', logo: '🛍️' },
];
