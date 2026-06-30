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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + ₹200 Cashback', description: 'Save up to 80% and an extra Rs 200 cashback on using the code. The deal applies to groceries, rice, edible oils, ghee, and dry fruits.', minOrder: 'Min ₹199', expiry: 'July 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'FIRSTORDER', discount: '₹100 OFF', description: 'Flat Rs 100 OFF on your first order. Applicable on vegetables, munchies, cold drinks, frozen food & more. Valid for new users only.', minOrder: 'Min ₹300', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.blinkit.com', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'WELCOME', discount: '10% OFF (Up to ₹200)', description: '10% Off on your First Order. Valid only for first time users.', minOrder: 'Min ₹499', expiry: 'July 31, 2026', category: 'First Order', isHot: true, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'BONUSOFF50', discount: '₹50 OFF', description: '₹50 OFF on orders above ₹599.', minOrder: 'Min ₹599', expiry: 'Ongoing', category: 'Grocery', isHot: false, url: 'https://www.zeptonow.com', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'INSTAMARTDEAL', discount: 'Up to 70% OFF', description: 'Get up to 70% off on fresh vegetables. Prices start as low as Rs.5. Offer valid for both new and existing customers.', minOrder: 'No Min Order', expiry: 'Ongoing', category: 'Vegetables', isHot: true, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'FREEDELIVERY', discount: 'Free Delivery', description: 'Free delivery on orders above Rs.199.', minOrder: 'Min ₹199', expiry: 'Ongoing', category: 'Delivery', isHot: false, url: 'https://www.swiggy.com/instamart', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'BBFIRST200', discount: '₹200 Cashback', description: 'Get flat Rs. 200 cashback on your first grocery order. Applicable for new users only.', minOrder: 'Min ₹1,000', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'SBIVISA40DC', discount: '40% Instant Discount (Max ₹400)', description: 'Get 40% Instant Discount using State Bank of India Debit cards on orders above Rs 399.', minOrder: 'Min ₹399', expiry: 'September 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.bigbasket.com', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'FRESHDELIVERY', discount: 'Free Delivery', description: 'Prime members get free delivery on orders above ₹300; non-Prime members get free delivery on orders above ₹799.', minOrder: 'Min ₹300 (Prime) / ₹799 (Non-Prime)', expiry: 'Ongoing', category: 'Delivery', isHot: false, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'AMAZONFRESHDEAL', discount: 'Up to 75% OFF', description: 'Grocery Products - Up To 75% OFF On Your Orders.', minOrder: 'No Min Order', expiry: 'July 31, 2026', category: 'Grocery', isHot: true, url: 'https://www.amazon.in/fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JMNEW', discount: 'Flat ₹100 OFF', description: 'Get flat Rs 100 OFF on your purchase. Offer is valid exclusively for new users. Applicable on Groceries, Quick Electronics, Beauty & Beyond, Home & Kitchen & more.', minOrder: 'No Min Order Specified', expiry: 'July 31, 2026', category: 'First Order', isHot: true, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'GROCERY50', discount: 'Flat ₹50 OFF', description: 'Grab Flat Rs. 50 Off on ordering Fruits, Vegetables, Dairy, Breads & Eggs. Applicable on order of Rs. 199 and more. Applicable for selected users only.', minOrder: 'Min ₹199', expiry: 'July 31, 2026', category: 'Grocery', isHot: false, url: 'https://www.jiomart.com', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FKGROCERY10', discount: 'Flat 10% OFF (Max ₹200)', description: 'Avail flat 10% OFF on your orders. Valid on groceries and other kitchen essentials for the customer\'s 1st order only.', minOrder: 'Min ₹1000', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.flipkart.com/grocery-supermart-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'FKGROCERY50', discount: 'Flat ₹50 OFF', description: 'Shop now & get flat Rs 50 OFF on your orders. Applicable on food essentials, home & kitchen, personal care, and more. Valid for all users.', minOrder: 'Min ₹2500', expiry: 'Ongoing', category: 'Grocery', isHot: false, url: 'https://www.flipkart.com/grocery-supermart-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];

export const SG_COUPONS: Coupon[] = [
  { id: 'fp1', platform: 'FairPrice', platformId: 'fairprice', code: 'FPNEW8', discount: 'S$8 OFF', description: 'Get S$8 off your first FairPrice online order.', minOrder: 'Min S$50', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.fairprice.com.sg', bgColor: '#E8F5E9', textColor: '#2E7D32', logo: '🛒' },
  { id: 'rm1', platform: 'RedMart', platformId: 'redmart', code: 'RMFRESH10', discount: '10% OFF Fresh Produce', description: 'Save 10% on all fresh vegetables and fruits.', minOrder: 'Min S$40', expiry: 'End of month', category: 'Vegetables', isHot: true, url: 'https://redmart.lazada.sg', bgColor: '#FFEbee', textColor: '#C62828', logo: '🚚' },
  { id: 'cs1', platform: 'Cold Storage', platformId: 'coldstorage', code: 'CSDAIRY5', discount: 'S$5 OFF Dairy', description: 'Discount on milk, cheese, and other dairy products.', minOrder: 'Min S$30', expiry: 'Ongoing', category: 'Dairy', isHot: false, url: 'https://coldstorage.com.sg', bgColor: '#E3F2FD', textColor: '#1565C0', logo: '🥩' },
  { id: 'sh1', platform: 'Shopee Supermarket', platformId: 'shopee', code: 'SHOPGROC15', discount: '15% Cashback', description: 'Get 15% cashback in Shopee Coins for grocery items.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://shopee.sg/supermarket', bgColor: '#FFF3E0', textColor: '#E65100', logo: '🛍️' },
];
