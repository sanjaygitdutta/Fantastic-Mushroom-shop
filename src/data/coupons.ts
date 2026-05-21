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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + Extra ₹200 Cashback', description: 'Save on groceries, rice, edible oils, ghee, and dry fruits.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.blinkit.com/', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'No code required', discount: 'Flat ₹100 OFF', description: 'Flat ₹100 OFF on your first order for new users.', minOrder: 'Min ₹300', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.blinkit.com/', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'ZEPAMZ50', discount: '₹50 Cashback', description: 'Get ₹50 Cashback on all orders, with up to 95% discount on products.', minOrder: 'Not specified', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.zeptonow.com/', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'WELCOME', discount: '30% OFF + ₹50 Zepto Cash', description: 'Get 30% Off + ₹50 Free Zepto Cash on your first order.', minOrder: 'Not specified', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.zeptonow.com/', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'No code required', discount: '5% Off', description: 'Unlock Extra 5% Off on your orders over ₹499. Automatic discount at checkout.', minOrder: 'Min ₹499', expiry: 'Ongoing', category: 'Grocery', isHot: false, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'No code required', discount: '10% OFF up to ₹150', description: 'Exclusive offer for ICICI Bank cardholders, also avail free shipping.', minOrder: 'Min ₹199', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'No code required', discount: 'Flat ₹200 OFF', description: 'Flat ₹200 OFF on orders above ₹1000 for all users.', minOrder: 'Min ₹1000', expiry: 'Ongoing', category: 'Grocery', isHot: false, url: 'https://www.bigbasket.com/', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBFIRST200', discount: 'Flat ₹200 Cashback', description: 'Flat ₹200 cashback on your first grocery order for new users.', minOrder: 'Min ₹1000', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com/', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No code required', discount: 'Up To 75% OFF', description: 'Grocery Products - Up To 75% OFF on your orders.', minOrder: 'Not specified', expiry: 'Ongoing', category: 'Grocery', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'HOM15', discount: '15% Cashback', description: 'Get 15% Cashback on Home and Kitchen products.', minOrder: 'Min ₹200', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JM100', discount: 'Flat ₹100 OFF', description: 'Flat ₹100 OFF on your purchases.', minOrder: 'Not specified', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.jiomart.com/', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'FRUITS50', discount: 'Flat 50% OFF up to ₹100', description: 'Flat 50% OFF on ordering Fruits, Vegetables, Dairy, Breads & Eggs. Offer valid from 6pm to 9pm.', minOrder: 'Not specified', expiry: 'May 31, 2026', category: 'Vegetables', isHot: true, url: 'https://www.jiomart.com/', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No code required', discount: 'Up To 90% OFF', description: 'Shop for sitewide products & get up to 90% OFF on your orders. Prices start from ₹9.', minOrder: 'Not specified', expiry: 'Ongoing', category: 'Grocery', isHot: false, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No code required', discount: 'Flat ₹50 - ₹100 OFF', description: 'Flipkart Minutes New User Offer: Flat ₹50 - ₹100 OFF on your orders.', minOrder: 'Min ₹199', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];

export const SG_COUPONS: Coupon[] = [
  { id: 'fp1', platform: 'FairPrice', platformId: 'fairprice', code: 'FPNEW8', discount: 'S$8 OFF', description: 'Get S$8 off your first FairPrice online order.', minOrder: 'Min S$50', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.fairprice.com.sg', bgColor: '#E8F5E9', textColor: '#2E7D32', logo: '🛒' },
  { id: 'rm1', platform: 'RedMart', platformId: 'redmart', code: 'RMFRESH10', discount: '10% OFF Fresh Produce', description: 'Save 10% on all fresh vegetables and fruits.', minOrder: 'Min S$40', expiry: 'End of month', category: 'Vegetables', isHot: true, url: 'https://redmart.lazada.sg', bgColor: '#FFEbee', textColor: '#C62828', logo: '🚚' },
  { id: 'cs1', platform: 'Cold Storage', platformId: 'coldstorage', code: 'CSDAIRY5', discount: 'S$5 OFF Dairy', description: 'Discount on milk, cheese, and other dairy products.', minOrder: 'Min S$30', expiry: 'Ongoing', category: 'Dairy', isHot: false, url: 'https://coldstorage.com.sg', bgColor: '#E3F2FD', textColor: '#1565C0', logo: '🥩' },
  { id: 'sh1', platform: 'Shopee Supermarket', platformId: 'shopee', code: 'SHOPGROC15', discount: '15% Cashback', description: 'Get 15% cashback in Shopee Coins for grocery items.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://shopee.sg/supermarket', bgColor: '#FFF3E0', textColor: '#E65100', logo: '🛍️' },
];
