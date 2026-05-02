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
  // Blinkit
  { id: 'b1', platform: 'Blinkit', platformId: 'blinkit', code: 'BLINK50', discount: '50% OFF', description: 'Get 50% off on your first order', minOrder: 'Min ₹199', expiry: 'Apr 30, 2026', category: 'First Order', isHot: true, url: 'https://blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'b2', platform: 'Blinkit', platformId: 'blinkit', code: 'BLINK20', discount: '₹100 OFF', description: 'Flat ₹100 off on groceries', minOrder: 'Min ₹399', expiry: 'Apr 25, 2026', category: 'Grocery', isHot: false, url: 'https://blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'b3', platform: 'Blinkit', platformId: 'blinkit', code: 'VEGBLINK', discount: '15% OFF', description: 'Flat 15% off on fresh vegetables', minOrder: 'Min ₹149', expiry: 'Apr 28, 2026', category: 'Vegetables', isHot: false, url: 'https://blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  // Zepto
  { id: 'z1', platform: 'Zepto', platformId: 'zepto', code: 'ZEPTO40', discount: '40% OFF', description: '40% off on your first Zepto order', minOrder: 'Min ₹249', expiry: 'Apr 30, 2026', category: 'First Order', isHot: true, url: 'https://zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'z2', platform: 'Zepto', platformId: 'zepto', code: 'ZEPTOVEG', discount: '₹75 OFF', description: 'Save ₹75 on fresh fruits & vegetables', minOrder: 'Min ₹299', expiry: 'Apr 22, 2026', category: 'Vegetables', isHot: false, url: 'https://zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'z3', platform: 'Zepto', platformId: 'zepto', code: 'ZPASS', discount: '₹0 Delivery', description: 'Free delivery on all orders this week', minOrder: 'No min order', expiry: 'Apr 20, 2026', category: 'Delivery', isHot: true, url: 'https://zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  // Swiggy Instamart
  { id: 's1', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'INSTAMART60', discount: '60% OFF', description: '60% off up to ₹120 on first order', minOrder: 'Min ₹199', expiry: 'May 5, 2026', category: 'First Order', isHot: true, url: 'https://swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 's2', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'SWIGGY150', discount: '₹150 OFF', description: 'Flat ₹150 off on grocery order', minOrder: 'Min ₹599', expiry: 'Apr 27, 2026', category: 'Grocery', isHot: false, url: 'https://swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  // BigBasket
  { id: 'bb1', platform: 'BigBasket', platformId: 'bigbasket', code: 'BB100', discount: '₹100 OFF', description: 'Flat ₹100 off on orders above ₹799', minOrder: 'Min ₹799', expiry: 'Apr 29, 2026', category: 'Grocery', isHot: false, url: 'https://bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bb2', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBFRESH', discount: '20% OFF', description: '20% off on fresh fruits & vegetables', minOrder: 'Min ₹299', expiry: 'Apr 24, 2026', category: 'Vegetables', isHot: true, url: 'https://bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bb3', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBDAIRY', discount: '10% OFF', description: '10% off on milk & dairy products', minOrder: 'Min ₹199', expiry: 'Apr 26, 2026', category: 'Dairy', isHot: false, url: 'https://bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  // Amazon Fresh
  { id: 'a1', platform: 'Amazon Fresh', platformId: 'amazon', code: 'FRESH200', discount: '₹200 OFF', description: '₹200 off on Amazon Fresh orders', minOrder: 'Min ₹999', expiry: 'Apr 30, 2026', category: 'Grocery', isHot: true, url: 'https://amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'a2', platform: 'Amazon Fresh', platformId: 'amazon', code: 'PRIMEFRESH', discount: 'Free Delivery', description: 'Free delivery on all Fresh orders for Prime', minOrder: 'Prime members only', expiry: 'Ongoing', category: 'Delivery', isHot: false, url: 'https://amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  // JioMart
  { id: 'j1', platform: 'JioMart', platformId: 'jiomart', code: 'JIOMART50', discount: '₹50 OFF', description: 'Flat ₹50 off on first JioMart order', minOrder: 'Min ₹249', expiry: 'May 1, 2026', category: 'First Order', isHot: false, url: 'https://jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'j2', platform: 'JioMart', platformId: 'jiomart', code: 'JIOMONSOON', discount: '25% OFF', description: '25% off sitewide this season', minOrder: 'Min ₹399', expiry: 'Apr 23, 2026', category: 'Grocery', isHot: true, url: 'https://jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  // Flipkart Minutes
  { id: 'f1', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'MINUTES100', discount: '₹100 OFF', description: 'Flat ₹100 off on Flipkart Minutes', minOrder: 'Min ₹499', expiry: 'Apr 28, 2026', category: 'Grocery', isHot: true, url: 'https://flipkart.com', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'f2', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FKVEGGIES', discount: '15% OFF', description: '15% off on fresh vegetables', minOrder: 'Min ₹199', expiry: 'Apr 25, 2026', category: 'Vegetables', isHot: false, url: 'https://flipkart.com', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];
