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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'NO CODE REQUIRED', discount: '₹100 OFF', description: 'Flat ₹100 off on your first order.', minOrder: 'Min ₹300', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + ₹200 Cashback', description: 'Save up to 80% and an extra ₹200 cashback on groceries using Paytm UPI.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'WELCOME', discount: '30% OFF + Free Delivery', description: 'Get 30% off on your first order along with free delivery.', minOrder: 'Min ₹99', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.zepto.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'ZEPAMZ50', discount: 'Up to 95% OFF + ₹50 Cashback', description: 'Get up to 95% discount and an additional ₹50 cashback on all products.', minOrder: 'N/A', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.zepto.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'WELCOME50', discount: '50% OFF (Max ₹100) + Free Delivery', description: 'Get 50% off up to ₹100 on your first order with free delivery.', minOrder: 'Min ₹149', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'NO CODE REQUIRED', discount: 'Free Delivery', description: 'Enjoy free delivery on all orders above the minimum value.', minOrder: 'Min ₹199', expiry: 'Ongoing', category: 'Delivery', isHot: false, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBFIRST200', discount: '₹200 Cashback', description: 'Get flat ₹200 cashback on your first grocery order.', minOrder: 'Min ₹1000', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'BIGBASKET50', discount: 'Up to 50% OFF', description: 'Save up to 50% on groceries, personal care, and more.', minOrder: 'N/A', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'NO CODE REQUIRED', discount: 'Free Delivery', description: 'Get free delivery on your first grocery order.', minOrder: 'N/A', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'HOM15', discount: '15% Cashback', description: 'Get 15% cashback on products worth ₹200 and more.', minOrder: 'Min ₹200', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JMNEW100', discount: '₹100 OFF', description: 'Get ₹100 off on your first order.', minOrder: 'N/A', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'NCR2', discount: '₹100 OFF', description: 'Get ₹100 off on Atta, Butter, and Sugar.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'NO CODE REQUIRED', discount: 'Free Delivery', description: 'Enjoy free 10-minute delivery on orders above ₹99.', minOrder: 'Min ₹99', expiry: 'Ongoing', category: 'Delivery', isHot: true, url: 'https://www.flipkart.com/minutes', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FLIPKART50', discount: 'Up to 50% OFF', description: 'Save up to 50% on various grocery items and essentials.', minOrder: 'N/A', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.flipkart.com/minutes', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];
