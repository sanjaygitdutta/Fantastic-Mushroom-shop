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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + Extra ₹200 Cashback', description: 'Save up to 80% and an extra ₹200 cashback on groceries, rice, edible oils, ghee, and dry fruits using Paytm UPI.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'BLINKITNEW', discount: 'Flat ₹100 OFF', description: 'Flat ₹100 OFF on your first order for new users.', minOrder: 'Min ₹300', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'ZEPAMZ50', discount: 'Up to 95% OFF + Extra ₹50 Cashback', description: 'Get up to 95% discount with an additional ₹50 cashback on all products.', minOrder: 'N/A', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://zepto.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'MBK300', discount: 'Up to ₹300 Cashback', description: 'Save up to ₹300 cashback with MobiKwik on your orders.', minOrder: 'Min ₹399', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://zepto.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'NEWINSTAMART', discount: 'Free Delivery', description: 'Free delivery on orders for new users.', minOrder: 'Min ₹49', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'INSTAMART20', discount: 'Flat 20% OFF', description: 'Flat 20% OFF up to ₹200 on orders.', minOrder: 'Min ₹399', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBNEW200', discount: 'Flat ₹200 Cashback + Extra ₹150 Paytm Cashback', description: 'Flat ₹200 cashback to your bb account and additional ₹150 Paytm cashback for new users.', minOrder: 'Min ₹1000', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBSBI250', discount: 'Flat ₹250 OFF', description: 'Flat ₹250 discount on minimum transaction value of ₹1000 with SBI Bank Cards.', minOrder: 'Min ₹1000', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'HOM15', discount: '15% Cashback', description: 'Get 15% cashback on home and kitchen products.', minOrder: 'Min ₹200', expiry: 'May 31, 2026', category: 'Grocery, Home', isHot: true, url: 'https://amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'FRESHNEW', discount: '₹100 Discount', description: 'Additional ₹100 discount for first-time customers.', minOrder: 'Min ₹1000', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JMNEW100', discount: 'Flat ₹100 OFF', description: 'Flat ₹100 OFF on your first order.', minOrder: 'Min ₹399', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'SAVE100', discount: 'Flat ₹100 OFF', description: 'Flat ₹100 OFF on orders.', minOrder: 'Min ₹799', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FKMIN100', discount: '₹100 off', description: '₹100 off on your first order.', minOrder: 'Min ₹199', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://flipkart.com/minutes', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FKMIN50', discount: '₹50 OFF', description: '₹50 Off on orders of groceries and personal care.', minOrder: 'Min ₹799', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://flipkart.com/minutes', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];
