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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + Extra ₹200 Cashback', description: 'Save on groceries, rice, edible oils, ghee, and dry fruits with this cashback offer.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'ONECARD', discount: 'Flat 20% Off (Max ₹350)', description: 'Get an instant discount on your order when paying with OneCard Credit Cards.', minOrder: 'Min ₹300', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'ZEPAMZ50', discount: 'Up to 95% OFF + Extra ₹50 Cashback', description: 'Avail a significant discount and additional cashback on all orders.', minOrder: 'No Min', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'WELCOME', discount: '30% OFF + Free Delivery', description: 'Special offer for new users on their first grocery order with free delivery.', minOrder: 'Min ₹99', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'NOCODE', discount: '10% OFF up to ₹150 + Free Shipping', description: 'Exclusive offer for ICICI Bank cardholders on instant purchases with free shipping.', minOrder: 'Min ₹199', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'NOCODE', discount: 'Up to 90% OFF + Free Shipping', description: 'Enjoy significant savings on various products with free shipping on eligible orders.', minOrder: 'Min ₹299', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'NOCODE', discount: '10% OFF (Max ₹300)', description: 'Get an instant discount on groceries and household essentials when paying with Kotak Bank cards on Wednesdays.', minOrder: 'Min ₹1500', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'NOCODE', discount: '20% OFF (Max ₹200)', description: 'First-time users get a discount on groceries and household essentials when paying with ICICI Debit/Credit Cards.', minOrder: 'Min ₹800', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'HOM15', discount: '15% Cashback (Up to ₹200)', description: 'Receive cashback on your purchase of Home and Kitchen products.', minOrder: 'No Min', expiry: 'December 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'NOCODE', discount: '10% OFF on groceries', description: 'Get a discount on your grocery shopping when paying with ICICI Bank cards.', minOrder: 'No Min', expiry: 'May 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'L2I2H3K4I9N', discount: '₹75 OFF', description: 'Save ₹75 on your order of groceries and daily essentials.', minOrder: 'Min ₹349', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'JMNEW100', discount: 'Flat ₹100 OFF', description: 'Exclusive discount for new users on their first order across various categories.', minOrder: 'Min ₹399', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'NOCODE', discount: 'Up to 90% OFF', description: 'Huge discounts on a wide range of products, delivered in minutes.', minOrder: 'No Min', expiry: 'May 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'NOCODE', discount: 'Flat ₹50 - ₹100 OFF', description: 'Special offer for new users on their first order of groceries and other essentials.', minOrder: 'Min ₹199 - ₹699', expiry: 'May 31, 2026', category: 'First Order', isHot: true, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];
