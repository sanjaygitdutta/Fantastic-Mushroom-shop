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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'NOCODE', discount: 'Flat ₹100 OFF', description: 'Flat ₹100 OFF on your first order. Valid on vegetables, munchies, cold drinks, frozen food & more. No promo code required, offer is usually auto-applied for new users.', minOrder: 'Min ₹300', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.blinkit.com/', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + Extra ₹200 Cashback', description: 'Save up to 80% and an extra ₹200 cashback on groceries when paying with Paytm UPI.', minOrder: 'Min ₹199', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.blinkit.com/', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'WELCOME', discount: '30% OFF + Free Delivery', description: 'Get 30% OFF on your first grocery order plus free delivery on orders above ₹99.', minOrder: 'Min ₹99', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.zeptonow.com/', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'MBK300', discount: 'Up to ₹300 Cashback', description: 'Save up to ₹300 cashback when paying with MobiKwik. Valid for all users.', minOrder: 'Min ₹399', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.zeptonow.com/', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'WELCOME50', discount: '50% OFF + Free Delivery', description: '50% OFF on minimum order of ₹149 for new users, includes free delivery.', minOrder: 'Min ₹149', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'MEGASAVINGS', discount: 'Flat ₹50 OFF', description: 'Flat ₹50 off on Fruits, Vegetables, Dairy, Breads & Eggs. Limited to selected users.', minOrder: 'Min ₹199', expiry: 'July 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBFIRST200', discount: 'Flat ₹200 Cashback', description: 'Get flat ₹200 cashback on your first grocery order. Not valid on Ghee, oil, and baby foods.', minOrder: 'Min ₹1000', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com/', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: '7051', discount: '20% OFF', description: 'ICICI Bank Exclusive: 20% OFF on first BigBasket order when paying with ICICI debit or credit card.', minOrder: 'Min ₹500', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com/', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'NOCODE', discount: 'Up to ₹400 Cashback', description: 'New Amazon customers can enjoy a cashback of up to ₹400 on their first four Amazon Fresh orders. Offer is usually auto-applied.', minOrder: 'Min ₹300', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'NOCODE', discount: 'Up to 50% OFF', description: 'Prime members enjoy discounts of up to 50% on fresh fruits and vegetables, cleaning supplies, and other daily-use products. Deals are usually auto-applied.', minOrder: 'Min ₹300', expiry: 'December 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JMNEW100', discount: 'Flat ₹100 OFF', description: 'Flat ₹100 OFF on your first order for new users.', minOrder: 'Min ₹299', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.jiomart.com/', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'JM100', discount: 'Flat ₹100 OFF', description: 'Flat ₹100 OFF on quick delivery orders.', minOrder: 'Min ₹249', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.jiomart.com/', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'NOCODE', discount: 'Flat 10% OFF', description: 'Flat 10% OFF on your first grocery order. Maximum discount is ₹200. Offer is usually auto-applied.', minOrder: 'Min ₹1000', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.flipkart.com/grocery-supermart-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'NOCODE', discount: 'Up to 60% OFF', description: 'Save up to 60% OFF on a wide range of 75+ products under the super deal section. No coupon code required.', minOrder: 'No minimum', expiry: 'June 30, 2026', category: 'Grocery', isHot: false, url: 'https://www.flipkart.com/grocery-supermart-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];

export const SG_COUPONS: Coupon[] = [
  { id: 'fp1', platform: 'FairPrice', platformId: 'fairprice', code: 'FPNEW8', discount: 'S$8 OFF', description: 'Get S$8 off your first FairPrice online order.', minOrder: 'Min S$50', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.fairprice.com.sg', bgColor: '#E8F5E9', textColor: '#2E7D32', logo: '🛒' },
  { id: 'rm1', platform: 'RedMart', platformId: 'redmart', code: 'RMFRESH10', discount: '10% OFF Fresh Produce', description: 'Save 10% on all fresh vegetables and fruits.', minOrder: 'Min S$40', expiry: 'End of month', category: 'Vegetables', isHot: true, url: 'https://redmart.lazada.sg', bgColor: '#FFEbee', textColor: '#C62828', logo: '🚚' },
  { id: 'cs1', platform: 'Cold Storage', platformId: 'coldstorage', code: 'CSDAIRY5', discount: 'S$5 OFF Dairy', description: 'Discount on milk, cheese, and other dairy products.', minOrder: 'Min S$30', expiry: 'Ongoing', category: 'Dairy', isHot: false, url: 'https://coldstorage.com.sg', bgColor: '#E3F2FD', textColor: '#1565C0', logo: '🥩' },
  { id: 'sh1', platform: 'Shopee Supermarket', platformId: 'shopee', code: 'SHOPGROC15', discount: '15% Cashback', description: 'Get 15% cashback in Shopee Coins for grocery items.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://shopee.sg/supermarket', bgColor: '#FFF3E0', textColor: '#E65100', logo: '🛍️' },
];
