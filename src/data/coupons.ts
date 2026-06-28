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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'No Code', discount: '₹100 OFF', description: 'Flat ₹100 off on your first order, auto-applied for new users.', minOrder: 'Min ₹300', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + ₹200 Cashback', description: 'Save up to 80% and an extra ₹200 cashback on groceries, rice, edible oils, ghee, and dry fruits when paying with Paytm UPI.', minOrder: 'Min ₹199', expiry: 'July 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'WELCOME', discount: '30% OFF + Free Delivery', description: 'Get 30% OFF on your first order plus free delivery on orders above ₹99.', minOrder: 'Min ₹99', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'QUICKSAVE200', discount: 'Up to 95% OFF + ₹200 OFF', description: 'Get up to 95% discount with an additional ₹200 OFF on orders above ₹1299 across various products including electronics and fashion.', minOrder: 'Min ₹1299', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'No Code', discount: 'FREE Gift + FREE Delivery', description: 'Get a FREE gift with your very first Swiggy Instamart order and free delivery on orders above ₹99.', minOrder: 'Min ₹99', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'ICICIINSTA', discount: '10% OFF (up to ₹150)', description: 'Get 10% OFF up to ₹150 on instant purchases for ICICI Bank cardholders.', minOrder: 'Min ₹499', expiry: 'December 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBFIRST200', discount: '₹200 Cashback', description: 'Get flat ₹200 cashback on your first grocery order. Not valid on Ghee, oil and baby foods.', minOrder: 'Min ₹1000', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'ICICI20', discount: '20% OFF', description: '20% OFF on your first BigBasket order when paying with an ICICI debit or credit card.', minOrder: 'Min ₹500', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'HOM15', discount: '15% OFF Cashback', description: 'Get 15% Off cashback on buying products worth ₹200 and more.', minOrder: 'Min ₹200', expiry: 'December 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No Code', discount: 'Free Delivery', description: 'Free delivery on your first grocery order (new users) or on orders above ₹300 for Prime members and ₹799 for non-Prime members.', minOrder: 'Min ₹300 (Prime), Min ₹799 (Non-Prime)', expiry: 'December 31, 2026', category: 'Delivery', isHot: true, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'R2A5V1E4H0T', discount: '10% OFF (up to ₹50)', description: 'Get 10% off up to ₹50 on orders of ₹99 and above.', minOrder: 'Min ₹99', expiry: 'December 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'No Code', discount: 'Free Delivery', description: 'Free delivery for your first three orders.', minOrder: 'Min ₹499 (for first order offers)', expiry: 'December 31, 2026', category: 'Delivery', isHot: true, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No Code', discount: '₹50 - ₹100 OFF', description: 'Flat ₹50 - ₹100 OFF on your first orders for new users.', minOrder: 'Min ₹199', expiry: 'December 31, 2026', category: 'First Order', isHot: true, url: 'https://www.flipkart.com/grocery-store/flipkart-minutes', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No Code', discount: 'Free Delivery', description: 'Get free delivery on all orders, delivered in just 10 minutes.', minOrder: 'No minimum specified', expiry: 'December 31, 2026', category: 'Delivery', isHot: true, url: 'https://www.flipkart.com/grocery-store/flipkart-minutes', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];

export const SG_COUPONS: Coupon[] = [
  { id: 'fp1', platform: 'FairPrice', platformId: 'fairprice', code: 'FPNEW8', discount: 'S$8 OFF', description: 'Get S$8 off your first FairPrice online order.', minOrder: 'Min S$50', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.fairprice.com.sg', bgColor: '#E8F5E9', textColor: '#2E7D32', logo: '🛒' },
  { id: 'rm1', platform: 'RedMart', platformId: 'redmart', code: 'RMFRESH10', discount: '10% OFF Fresh Produce', description: 'Save 10% on all fresh vegetables and fruits.', minOrder: 'Min S$40', expiry: 'End of month', category: 'Vegetables', isHot: true, url: 'https://redmart.lazada.sg', bgColor: '#FFEbee', textColor: '#C62828', logo: '🚚' },
  { id: 'cs1', platform: 'Cold Storage', platformId: 'coldstorage', code: 'CSDAIRY5', discount: 'S$5 OFF Dairy', description: 'Discount on milk, cheese, and other dairy products.', minOrder: 'Min S$30', expiry: 'Ongoing', category: 'Dairy', isHot: false, url: 'https://coldstorage.com.sg', bgColor: '#E3F2FD', textColor: '#1565C0', logo: '🥩' },
  { id: 'sh1', platform: 'Shopee Supermarket', platformId: 'shopee', code: 'SHOPGROC15', discount: '15% Cashback', description: 'Get 15% cashback in Shopee Coins for grocery items.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://shopee.sg/supermarket', bgColor: '#FFF3E0', textColor: '#E65100', logo: '🛍️' },
];
