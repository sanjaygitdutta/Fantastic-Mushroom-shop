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
  { id: 'bl1', platform: 'Blinkit', platformId: 'blinkit', code: 'No Code Needed', discount: '₹100 OFF', description: 'Flat ₹100 off on your first order, applicable on vegetables, munchies, cold drinks, frozen food & more.', minOrder: 'Min ₹300', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.grabon.in/blinkit-coupons', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'bl2', platform: 'Blinkit', platformId: 'blinkit', code: 'PAYTMUPI', discount: 'Up to 80% OFF + ₹200 Cashback', description: 'Save up to 80% and an extra ₹200 cashback on groceries, rice, edible oils, ghee, and dry fruits using Paytm UPI.', minOrder: 'Min ₹199', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/blinkit-coupons', bgColor: '#FFFDE7', textColor: '#F5D100', logo: '⚡' },
  { id: 'ze3', platform: 'Zepto', platformId: 'zepto', code: 'No Code Needed', discount: '10% OFF (Up to ₹200)', description: 'Get 10% flat off up to ₹200 on your first order.', minOrder: 'Min ₹499', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.desidime.com/stores/zepto', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'ze4', platform: 'Zepto', platformId: 'zepto', code: 'ZEPAMZ50', discount: 'Up to 95% OFF + ₹50 Cashback', description: 'Get up to 95% discount with an additional ₹50 cashback on all products, redeemable in the Zepto app.', minOrder: 'No Minimum', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/zepto-coupons', bgColor: '#F3E5FF', textColor: '#9B30D9', logo: '🟣' },
  { id: 'sw5', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'No Code Needed', discount: 'FREE Gift + FREE Delivery', description: 'Get a FREE gift with your very first Swiggy Instamart order and grab FREE delivery.', minOrder: 'No Minimum', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.grabon.in/swiggy-instamart-coupons', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'sw6', platform: 'Swiggy Instamart', platformId: 'swiggy', code: 'MEGASAVINGS', discount: '₹50 OFF', description: 'Claim a Flat ₹50 off on your order of Fruits, Veggies, Dairy, Breads & Eggs.', minOrder: 'Min ₹199', expiry: 'August 16, 2026', category: 'Grocery', isHot: true, url: 'https://www.zingoy.com/swiggy-instamart-coupons', bgColor: '#FFF3E0', textColor: '#FC8019', logo: '🧡' },
  { id: 'bi7', platform: 'BigBasket', platformId: 'bigbasket', code: 'No Code Needed', discount: '50% OFF + ₹200 Cashback', description: 'Get 50% OFF with an additional ₹200 cashback on your first order.', minOrder: 'Min ₹500', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.grabon.in/bigbasket-coupons', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'bi8', platform: 'BigBasket', platformId: 'bigbasket', code: 'No Code Needed', discount: '₹200 OFF', description: 'Flat ₹200 off on orders above ₹1000 for all users.', minOrder: 'Min ₹1000', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF8qTHufyk2Mo751CD2UY8ZCsOsrJHH54UpgI_WMN80glrVrCF8OHodOxg87E5YDoudINYPMOl7BhGDsDDsMVL5G-PmGYE3P9uRnwKxmz73k2x6U7m8xQMWL-IgtOtWgXZbLKg=', bgColor: '#F1F8E9', textColor: '#84C225', logo: '🛒' },
  { id: 'am9', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No Code Needed', discount: '10% Instant Discount (Up to ₹100)', description: 'Get 10% instant discount on groceries and pharma with SBI Debit Cards.', minOrder: 'Min ₹750', expiry: 'September 30, 2026', category: 'Grocery', isHot: true, url: 'https://bank.sbi/web/personal-banking/cards/debit-card/debit-card-offers', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'am10', platform: 'Amazon Fresh', platformId: 'amazon', code: 'No Code Needed', discount: 'Up to ₹400 Cashback', description: 'New Amazon customers can enjoy cashback of up to ₹400 on their first four Amazon Fresh orders.', minOrder: 'Min ₹300', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.aboutamazon.in/news/retail/amazon-fresh-super-value-days', bgColor: '#FFF8EE', textColor: '#FF9900', logo: '📦' },
  { id: 'ji11', platform: 'JioMart', platformId: 'jiomart', code: 'JM100', discount: '₹100 OFF', description: 'Flat ₹100 off on your first order for new users.', minOrder: 'Min ₹199', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.indiafreestuff.in/jiomart-discount-coupon-upto-50-off-extra-3-off-tips-jiomart/', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'ji12', platform: 'JioMart', platformId: 'jiomart', code: 'FLAT150', discount: '₹150 OFF', description: 'Flat ₹150 off on shopping of ₹1499 or more.', minOrder: 'Min ₹1499', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.indiafreestuff.in/jiomart-discount-coupon-upto-50-off-extra-3-off-tips-jiomart/', bgColor: '#E3F2FD', textColor: '#0070BA', logo: '🔵' },
  { id: 'fl13', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No Code Needed', discount: '₹50 - ₹100 OFF', description: 'Flat ₹50 - ₹100 off on your first order, applicable on groceries, fruits, veggies, bakery and eggs, electronics, and more.', minOrder: 'Min ₹199 to ₹699', expiry: 'June 30, 2026', category: 'First Order', isHot: true, url: 'https://www.grabon.in/flipkart-minutes-coupons', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
  { id: 'fl14', platform: 'Flipkart Minutes', platformId: 'flipkart', code: 'No Code Needed', discount: 'Up to 90% OFF', description: 'Shop for sitewide products including groceries & daily essentials, food & snacks, personal care & household, electronics & more, with prices starting from ₹9.', minOrder: 'No Minimum', expiry: 'June 30, 2026', category: 'Grocery', isHot: true, url: 'https://www.grabon.in/flipkart-minutes-coupons', bgColor: '#E8F0FE', textColor: '#2874F0', logo: '🛍️' },
];

export const SG_COUPONS: Coupon[] = [
  { id: 'fp1', platform: 'FairPrice', platformId: 'fairprice', code: 'FPNEW8', discount: 'S$8 OFF', description: 'Get S$8 off your first FairPrice online order.', minOrder: 'Min S$50', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.fairprice.com.sg', bgColor: '#E8F5E9', textColor: '#2E7D32', logo: '🛒' },
  { id: 'rm1', platform: 'RedMart', platformId: 'redmart', code: 'RMFRESH10', discount: '10% OFF Fresh Produce', description: 'Save 10% on all fresh vegetables and fruits.', minOrder: 'Min S$40', expiry: 'End of month', category: 'Vegetables', isHot: true, url: 'https://redmart.lazada.sg', bgColor: '#FFEbee', textColor: '#C62828', logo: '🚚' },
  { id: 'cs1', platform: 'Cold Storage', platformId: 'coldstorage', code: 'CSDAIRY5', discount: 'S$5 OFF Dairy', description: 'Discount on milk, cheese, and other dairy products.', minOrder: 'Min S$30', expiry: 'Ongoing', category: 'Dairy', isHot: false, url: 'https://coldstorage.com.sg', bgColor: '#E3F2FD', textColor: '#1565C0', logo: '🥩' },
  { id: 'sh1', platform: 'Shopee Supermarket', platformId: 'shopee', code: 'SHOPGROC15', discount: '15% Cashback', description: 'Get 15% cashback in Shopee Coins for grocery items.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://shopee.sg/supermarket', bgColor: '#FFF3E0', textColor: '#E65100', logo: '🛍️' },
];
