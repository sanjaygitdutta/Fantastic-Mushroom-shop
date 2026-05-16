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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + Extra ₹200 Cashback', description: 'Save up to 80% and an extra Rs 200 cashback on groceries, rice, edible oils, ghee, and dry fruits.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.blinkit.com/', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'NEW100', discount: 'Flat ₹100 OFF', description: 'Flat Rs 100 OFF on your first order. Applicable on vegetables, munchies, cold drinks, frozen food & more.', minOrder: 'Min ₹300', expiry: 'Dec 31, 2026', category: 'First Order', isHot: true, url: 'https://www.blinkit.com/', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'ZEPAMZ50', discount: '₹50 Cashback', description: 'Get an Rs 50 Cashback on all orders. Up to 95% discount with an additional Rs 50 cashback on all products.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.zeptonow.com/', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'WELCOME', discount: '30% OFF + Free Delivery', description: 'Get 30% OFF on Your 1st Order + Free Delivery Above Rs 99. Shop Groceries, Milk, Electronics & More.', minOrder: 'Min ₹99', expiry: 'Dec 31, 2026', category: 'First Order', isHot: true, url: 'https://www.zeptonow.com/', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'INSTA50', discount: 'Flat ₹50 OFF', description: 'Flat Rs. 50 Discount on Fruits, Vegetables, Dairy, Breads & Eggs. Applicable for selected users only.', minOrder: 'Min ₹199', expiry: 'Jul 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'FREEDEL', discount: 'Free Shipping', description: 'Enjoy free shipping on orders above Rs 199.', minOrder: 'Min ₹199', expiry: 'Dec 31, 2026', category: 'Delivery', isHot: true, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBFIRST200', discount: 'Flat ₹200 Cashback', description: 'Get flat Rs. 200 cashback on your first grocery order. Offer applicable for new users only.', minOrder: 'Min ₹1,000', expiry: 'Dec 31, 2026', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com/', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'KOTAK200', discount: '₹200 OFF', description: '₹200 OFF on the FIRST Order with Kotak Bank @ BigBasket! Apply this coupon code to your first BigBasket order.', minOrder: 'Min ₹1000', expiry: 'Dec 31, 2026', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com/', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'NOCODE', discount: 'Up to ₹150 OFF', description: 'Get a discount on your first Amazon Fresh grocery order. Discount amount may vary.', minOrder: 'Min ₹500', expiry: 'Dec 31, 2026', category: 'First Order', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'NOCODE', discount: 'Free Delivery', description: 'Enjoy free delivery on your Amazon Fresh grocery orders.', minOrder: 'Min ₹249', expiry: 'Dec 31, 2026', category: 'Delivery', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JM100', discount: 'Flat ₹100 OFF', description: 'Flat ₹100 OFF on your JioMart orders.', minOrder: 'Min ₹399', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.jiomart.com/', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'JMQCF7E881F4918E', discount: '10% OFF', description: 'Get 10% off on your JioMart order.', minOrder: 'Min ₹500', expiry: 'Dec 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.jiomart.com/', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FPMNEW', discount: 'Flat ₹100 OFF', description: 'Get Rs. 100 Off on order above Rs. 1299. Offer is applicable for New users only.', minOrder: 'Min ₹1299', expiry: 'Dec 31, 2026', category: 'First Order', isHot: false, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FPM50', discount: 'Flat ₹50 OFF', description: 'Get Flat Rs 50 Off at checkout page. Applicable on order above Rs. 699 only. Discount will be auto apply.', minOrder: 'Min ₹699', expiry: 'Dec 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];
