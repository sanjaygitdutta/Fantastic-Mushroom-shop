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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'FIRST100', discount: '₹100 OFF', description: 'Flat ₹100 off on your first order for new users.', minOrder: 'Min ₹300', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + ₹200 Cashback', description: 'Save up to 80% and get an extra ₹200 cashback on groceries when paying with Paytm UPI.', minOrder: 'Min ₹199', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'WELCOME', discount: '30% OFF + Free Delivery', description: 'Get 30% off on your first grocery order with free delivery.', minOrder: 'Min ₹99', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'GPAYFIRST20', discount: '₹20 OFF', description: 'Get ₹20 off on your first grocery order when paid using GPay at checkout.', minOrder: 'No minimum specified', expiry: 'June 30, 2026', category: 'First Order', isHot: false, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'PAYTMUPI', discount: 'Upto ₹100 Cashback', description: 'Get up to ₹100 cashback on orders above ₹499 when paying with Paytm Wallet.', minOrder: 'Min ₹499', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'ICICIINSTA', discount: '10% OFF (Upto ₹150) + Free Shipping', description: 'Get 10% off up to ₹150 on orders with ICICI Bank cards. Free shipping on orders above ₹199.', minOrder: 'Min ₹199', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBFIRST200', discount: '₹200 Cashback', description: 'Get flat ₹200 cashback on your first grocery order.', minOrder: 'Min ₹1000', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'ICICIBB20', discount: '20% OFF', description: 'Flat 20% off on orders of ₹500 for new ICICI Bank users.', minOrder: 'Min ₹500', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No Code Required', discount: 'Free Delivery', description: 'Free delivery for Prime members on orders above ₹300.', minOrder: 'Min ₹300', expiry: 'December 31, 2026', category: 'Delivery', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No Code Required', discount: 'Up to 5% Cashback', description: 'Get up to 5% cashback for Prime members using Amazon Pay ICICI Bank credit card.', minOrder: 'No Minimum Order Value', expiry: 'December 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'FIRSTORDER', discount: '10% OFF', description: 'Standard 10% off on your first order for new users.', minOrder: 'Min ₹500', expiry: 'December 31, 2026', category: 'First Order', isHot: false, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'FREEDEL', discount: 'Free Delivery', description: 'Standard free delivery on orders above a certain value.', minOrder: 'Min ₹250', expiry: 'December 31, 2026', category: 'Delivery', isHot: false, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FKMIN50', discount: '₹50 - ₹100 OFF', description: 'Get ₹50 - ₹100 off on your first order for new users.', minOrder: 'Min ₹199', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.flipkart.com/minutes', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FKMIN100', discount: '₹100 OFF', description: 'Get ₹100 off on your first order above ₹1299 for new users.', minOrder: 'Min ₹1299', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.flipkart.com/minutes', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];

export const SG_COUPONS: Coupon[] = [
  { id: 'fp1', platform: 'FairPrice', platformId: 'fairprice', code: 'FPNEW8', discount: 'S$8 OFF', description: 'Get S$8 off your first FairPrice online order.', minOrder: 'Min S$50', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.fairprice.com.sg', bgColor: '#E8F5E9', textColor: '#2E7D32', logo: '🛒' },
  { id: 'rm1', platform: 'RedMart', platformId: 'redmart', code: 'RMFRESH10', discount: '10% OFF Fresh Produce', description: 'Save 10% on all fresh vegetables and fruits.', minOrder: 'Min S$40', expiry: 'End of month', category: 'Vegetables', isHot: true, url: 'https://redmart.lazada.sg', bgColor: '#FFEbee', textColor: '#C62828', logo: '🚚' },
  { id: 'cs1', platform: 'Cold Storage', platformId: 'coldstorage', code: 'CSDAIRY5', discount: 'S$5 OFF Dairy', description: 'Discount on milk, cheese, and other dairy products.', minOrder: 'Min S$30', expiry: 'Ongoing', category: 'Dairy', isHot: false, url: 'https://coldstorage.com.sg', bgColor: '#E3F2FD', textColor: '#1565C0', logo: '🥩' },
  { id: 'sh1', platform: 'Shopee Supermarket', platformId: 'shopee', code: 'SHOPGROC15', discount: '15% Cashback', description: 'Get 15% cashback in Shopee Coins for grocery items.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://shopee.sg/supermarket', bgColor: '#FFF3E0', textColor: '#E65100', logo: '🛍️' },
];
