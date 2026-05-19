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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'N/A', discount: '₹100 OFF', description: 'Flat ₹100 OFF on your first grocery order.', minOrder: 'Min ₹300', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + ₹200 Cashback', description: 'Save up to 80% and get an extra ₹200 cashback on groceries using Paytm UPI.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'ZEPAMZ50', discount: 'Up to 95% OFF + ₹50 Cashback', description: 'Get up to 95% off and an additional ₹50 cashback on all products.', minOrder: 'N/A', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'WELCOME', discount: '30% OFF + ₹50 Zepto Cash', description: 'Get 30% off on your first order plus ₹50 bonus Zepto Cash.', minOrder: 'N/A', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'N/A', discount: '20% OFF (Up to ₹200)', description: 'Enjoy 20% off on orders above ₹399.', minOrder: 'Min ₹399', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'N/A', discount: 'Free Delivery', description: 'Get free delivery on your Instamart orders.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Delivery', isHot: false, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'N/A', discount: '₹175 OFF', description: 'Get an instant ₹175 discount on your purchase.', minOrder: 'Min ₹399', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'N/A', discount: '20% OFF (Up to ₹200)', description: 'Flat 20% discount on your first grocery order for new users.', minOrder: 'Min ₹800', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'HOM15', discount: '15% Cashback', description: 'Get 15% cashback on products worth ₹200 and more.', minOrder: 'Min ₹200', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'N/A', discount: 'Free Delivery', description: 'Enjoy free delivery on your very first grocery order.', minOrder: 'N/A', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JMNEW100', discount: '₹100 OFF', description: 'Flat ₹100 off on your first order for new users.', minOrder: 'Min ₹299', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'SAVE300', discount: '₹300 OFF', description: 'Flat ₹300 off on orders above ₹1999 for all users.', minOrder: 'Min ₹1999', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'N/A', discount: '₹50 - ₹100 OFF', description: 'Flat discount on your first order for new users.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'N/A', discount: 'Up to 90% OFF', description: 'Get up to 90% off on groceries and daily essentials.', minOrder: 'N/A', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];

export const SG_COUPONS: Coupon[] = [
  { id: 'fp1', platform: 'FairPrice', platformId: 'fairprice', code: 'FPNEW8', discount: 'S$8 OFF', description: 'Get S$8 off your first FairPrice online order.', minOrder: 'Min S$50', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.fairprice.com.sg', bgColor: '#E8F5E9', textColor: '#2E7D32', logo: '🛒' },
  { id: 'rm1', platform: 'RedMart', platformId: 'redmart', code: 'RMFRESH10', discount: '10% OFF Fresh Produce', description: 'Save 10% on all fresh vegetables and fruits.', minOrder: 'Min S$40', expiry: 'End of month', category: 'Vegetables', isHot: true, url: 'https://redmart.lazada.sg', bgColor: '#FFEbee', textColor: '#C62828', logo: '🚚' },
  { id: 'cs1', platform: 'Cold Storage', platformId: 'coldstorage', code: 'CSDAIRY5', discount: 'S$5 OFF Dairy', description: 'Discount on milk, cheese, and other dairy products.', minOrder: 'Min S$30', expiry: 'Ongoing', category: 'Dairy', isHot: false, url: 'https://coldstorage.com.sg', bgColor: '#E3F2FD', textColor: '#1565C0', logo: '🥩' },
  { id: 'sh1', platform: 'Shopee Supermarket', platformId: 'shopee', code: 'SHOPGROC15', discount: '15% Cashback', description: 'Get 15% cashback in Shopee Coins for grocery items.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://shopee.sg/supermarket', bgColor: '#FFF3E0', textColor: '#E65100', logo: '🛍️' },
];
