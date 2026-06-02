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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + ₹200 Cashback', description: 'Get up to 80% off and an extra Rs 200 cashback on groceries, rice, edible oils, ghee, and dry fruits.', minOrder: 'Min ₹199', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/blinkit-coupons/', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'No Code Required', discount: 'Flat ₹100 OFF', description: 'Flat Rs 100 OFF on your first order. Applicable on vegetables, munchies, cold drinks, frozen food & more.', minOrder: 'Min ₹300', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.grabon.in/blinkit-coupons/', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'ZEPAMZ50', discount: 'Up to 95% OFF + Extra ₹50 Cashback', description: 'Up to 95% discount with an additional Rs 50 cashback on all products.', minOrder: 'Check app', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/zepto-coupons/', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'No Code Required', discount: '10% Flat Off upto ₹200', description: 'Get 10% Flat Off upto Rs. 200 on your first order. Covers daily groceries, breakfast items, snacks, frozen foods, dairy, and beverages.', minOrder: 'Min ₹499', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.desidime.com/stores/zepto', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'No Code Required', discount: '10% OFF up to ₹150', description: 'Get 10% OFF on instant purchases, up to Rs 150 OFF. Exclusive offer for ICICI Bank cardholders.', minOrder: 'Min ₹499', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/swiggy-instamart-coupons/', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'No Code Required', discount: 'FREE Gift + FREE Delivery', description: 'Get a FREE gift with your very first Swiggymart order and grab FREE delivery on your orders.', minOrder: 'Min ₹49', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.grabon.in/swiggy-instamart-coupons/', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'No Code Required', discount: '10% Supercash up to ₹200', description: 'Collect 10% Supercash of up to Rs.200 when paying with MobiKwik. Valid once per week and once a user.', minOrder: 'Min ₹800', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.picodi.com/in/bigbasket', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'No Code Required', discount: '10% OFF up to ₹300', description: 'Get 10% instant discount on minimum purchase of Rs 1500 using Kotak Mahindra bank credit and debit cards. Valid only on Wednesdays.', minOrder: 'Min ₹1500', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.couponzeta.in/bigbasket-coupons', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No Code Required', discount: 'Up to 45% OFF + ₹200 Cashback', description: 'Massive discounts on groceries and essentials, save up to 45% on your favorite products, plus an exclusive Rs. 200 cashback offer.', minOrder: 'Check app', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.desidime.com/stores/amazon-fresh', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No Code Required', discount: 'Up To 50% OFF', description: 'Grab up to 50% OFF on selected products including Breakfast & dairy, Rice, sugar, Tea, Biscuits & snacks.', minOrder: 'Check app', expiry: 'June 30, 2026', category: 'Grocery', isHot: false, url: 'https://www.grabon.in/amazon-fresh-promo-codes/', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'No Code Required', discount: 'Flat ₹100 OFF', description: 'Get flat Rs 100 OFF on your first purchase. Valid exclusively for new users.', minOrder: 'Min ₹399', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.grabon.in/jiomart-coupons/', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'No Code Required', discount: 'Up to ₹100 Cashback', description: 'Get up to Rs.100 cashback on minimum transaction of Rs.399 using Mobikwik UPI. Minimum assured Rs.15.', minOrder: 'Min ₹399', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.indiafreestuff.in/jiomart-discount-coupon-upto-50-off-extra-3-off-tips-jiomart/', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No Code Required', discount: '10% OFF', description: 'Get 10% off on your first grocery order.', minOrder: 'Min ₹500', expiry: 'December 31, 2026', category: 'First Order', isHot: false, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No Code Required', discount: 'Free Delivery', description: 'Enjoy free delivery on all grocery orders above a certain value.', minOrder: 'Min ₹600', expiry: 'December 31, 2026', category: 'Delivery', isHot: false, url: 'https://www.flipkart.com/grocery-store', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];

export const SG_COUPONS: Coupon[] = [
  { id: 'fp1', platform: 'FairPrice', platformId: 'fairprice', code: 'FPNEW8', discount: 'S$8 OFF', description: 'Get S$8 off your first FairPrice online order.', minOrder: 'Min S$50', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.fairprice.com.sg', bgColor: '#E8F5E9', textColor: '#2E7D32', logo: '🛒' },
  { id: 'rm1', platform: 'RedMart', platformId: 'redmart', code: 'RMFRESH10', discount: '10% OFF Fresh Produce', description: 'Save 10% on all fresh vegetables and fruits.', minOrder: 'Min S$40', expiry: 'End of month', category: 'Vegetables', isHot: true, url: 'https://redmart.lazada.sg', bgColor: '#FFEbee', textColor: '#C62828', logo: '🚚' },
  { id: 'cs1', platform: 'Cold Storage', platformId: 'coldstorage', code: 'CSDAIRY5', discount: 'S$5 OFF Dairy', description: 'Discount on milk, cheese, and other dairy products.', minOrder: 'Min S$30', expiry: 'Ongoing', category: 'Dairy', isHot: false, url: 'https://coldstorage.com.sg', bgColor: '#E3F2FD', textColor: '#1565C0', logo: '🥩' },
  { id: 'sh1', platform: 'Shopee Supermarket', platformId: 'shopee', code: 'SHOPGROC15', discount: '15% Cashback', description: 'Get 15% cashback in Shopee Coins for grocery items.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://shopee.sg/supermarket', bgColor: '#FFF3E0', textColor: '#E65100', logo: '🛍️' },
];
