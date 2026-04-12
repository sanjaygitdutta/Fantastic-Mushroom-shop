// Known coupon codes & offers per platform
// Update these regularly as platforms change offers

export interface Coupon {
  code: string;
  description: string;
  minOrder?: number;
  maxSavings?: number;
  isNew?: boolean;   // new user only
}

export const PLATFORM_COUPONS: Record<string, Coupon[]> = {
  blinkit: [
    { code: 'BLINKIT50',   description: '₹50 off on orders above ₹499',  minOrder: 499, maxSavings: 50 },
    { code: 'NEWBLINK',    description: '₹150 off for new users',          isNew: true,  maxSavings: 150 },
    { code: 'PAYTM20',     description: '20% off with Paytm wallet',       maxSavings: 100 },
  ],
  zepto: [
    { code: 'ZEPTO100',    description: '₹100 off first 3 orders',         isNew: true,  maxSavings: 100 },
    { code: 'ZEPUPI',      description: '10% off via UPI payments',        maxSavings: 75 },
    { code: 'FRESH20',     description: '20% off on fresh produce',        maxSavings: 80 },
  ],
  swiggy: [
    { code: 'SWIGGY200',   description: '₹200 off on ₹699+ orders',       minOrder: 699, maxSavings: 200 },
    { code: 'HDFC10',      description: '10% off with HDFC cards',         maxSavings: 100 },
    { code: 'NEWUSER',     description: '₹125 off first Instamart order',  isNew: true,  maxSavings: 125 },
  ],
  bigbasket: [
    { code: 'BB200',       description: '₹200 off on ₹1499+ orders',      minOrder: 1499, maxSavings: 200 },
    { code: 'BBFRESH',     description: '15% off on fresh veggies',        maxSavings: 90 },
    { code: 'BBNEW',       description: '₹100 off first order',            isNew: true,  maxSavings: 100 },
  ],
  amazon: [
    { code: 'FRESHPRIME',  description: 'Prime: free delivery on ₹200+',  minOrder: 200 },
    { code: 'AMZUPI',      description: '5% off with Amazon Pay UPI',     maxSavings: 50 },
    { code: 'FRESHFIRST',  description: '₹200 off first Fresh order',      isNew: true,  maxSavings: 200 },
  ],
  jiomart: [
    { code: 'JIO50',       description: '₹50 off on ₹299+ orders',        minOrder: 299, maxSavings: 50 },
    { code: 'JIOUPI',      description: '5% cashback with Jio Pay',       maxSavings: 50 },
    { code: 'JIONEW',      description: '₹100 off first JioMart order',   isNew: true,  maxSavings: 100 },
  ],
  flipkart: [
    { code: 'FKMINUTES',   description: '₹75 off first Flipkart Minutes', isNew: true, maxSavings: 75 },
    { code: 'AXIS10',      description: '10% off with Axis Bank cards',   maxSavings: 150 },
  ],
};

// Related/associated food items for "People also compare"
export const RELATED_ITEMS: Record<string, { label: string; icon: string; query: string }[]> = {
  onion:    [{ label: 'Tomato', icon: '🍅', query: 'tomato' }, { label: 'Potato', icon: '🥔', query: 'potato' }, { label: 'Garlic', icon: '🧄', query: 'garlic' }, { label: 'Ginger', icon: '🫚', query: 'ginger' }],
  tomato:   [{ label: 'Onion', icon: '🧅', query: 'onion' }, { label: 'Capsicum', icon: '🫑', query: 'capsicum' }, { label: 'Cucumber', icon: '🥒', query: 'cucumber' }],
  potato:   [{ label: 'Onion', icon: '🧅', query: 'onion' }, { label: 'Tomato', icon: '🍅', query: 'tomato' }, { label: 'Paneer', icon: '🧀', query: 'paneer' }],
  chicken:  [{ label: 'Eggs', icon: '🥚', query: 'eggs' }, { label: 'Onion', icon: '🧅', query: 'onion' }, { label: 'Tomato', icon: '🍅', query: 'tomato' }, { label: 'Fish', icon: '🐟', query: 'fish' }],
  milk:     [{ label: 'Eggs', icon: '🥚', query: 'eggs' }, { label: 'Paneer', icon: '🧀', query: 'paneer' }, { label: 'Butter', icon: '🧈', query: 'butter' }, { label: 'Curd', icon: '🥛', query: 'curd' }],
  eggs:     [{ label: 'Chicken', icon: '🍗', query: 'chicken' }, { label: 'Milk', icon: '🥛', query: 'milk' }, { label: 'Butter', icon: '🧈', query: 'butter' }],
  rice:     [{ label: 'Dal', icon: '🫘', query: 'dal' }, { label: 'Atta', icon: '🌾', query: 'atta' }, { label: 'Paneer', icon: '🧀', query: 'paneer' }],
  paneer:   [{ label: 'Milk', icon: '🥛', query: 'milk' }, { label: 'Butter', icon: '🧈', query: 'butter' }, { label: 'Curd', icon: '🥛', query: 'curd' }],
  mushroom: [{ label: 'Onion', icon: '🧅', query: 'onion' }, { label: 'Capsicum', icon: '🫑', query: 'capsicum' }, { label: 'Tomato', icon: '🍅', query: 'tomato' }],
  banana:   [{ label: 'Apple', icon: '🍎', query: 'apple' }, { label: 'Mango', icon: '🥭', query: 'mango' }, { label: 'Milk', icon: '🥛', query: 'milk' }],
  fish:     [{ label: 'Chicken', icon: '🍗', query: 'chicken' }, { label: 'Prawn', icon: '🦐', query: 'prawn' }, { label: 'Onion', icon: '🧅', query: 'onion' }],
};

// Default related if item not in map
export const getRelatedItems = (query: string) => {
  const key = query.toLowerCase().trim();
  return RELATED_ITEMS[key] ?? [
    { label: 'Onion', icon: '🧅', query: 'onion' },
    { label: 'Tomato', icon: '🍅', query: 'tomato' },
    { label: 'Milk', icon: '🥛', query: 'milk' },
    { label: 'Eggs', icon: '🥚', query: 'eggs' },
  ];
};

// Daily deal - rotates based on day of week
const DAILY_DEALS = [
  { query: 'eggs',    label: 'Eggs',       icon: '🥚', platform: 'Zepto',     discount: 28, originalPrice: 89, currentPrice: 64  },
  { query: 'onion',   label: 'Onion',      icon: '🧅', platform: 'JioMart',   discount: 32, originalPrice: 44, currentPrice: 30  },
  { query: 'chicken', label: 'Chicken',    icon: '🍗', platform: 'Blinkit',   discount: 20, originalPrice: 250, currentPrice: 199 },
  { query: 'milk',    label: 'Milk',       icon: '🥛', platform: 'BigBasket', discount: 15, originalPrice: 68, currentPrice: 58  },
  { query: 'banana',  label: 'Banana',     icon: '🍌', platform: 'Swiggy',    discount: 25, originalPrice: 54, currentPrice: 40  },
  { query: 'paneer',  label: 'Paneer',     icon: '🧀', platform: 'Amazon',    discount: 22, originalPrice: 115, currentPrice: 89 },
  { query: 'tomato',  label: 'Tomato',     icon: '🍅', platform: 'Flipkart',  discount: 30, originalPrice: 58, currentPrice: 40  },
];

export const getDailyDeal = () => {
  const dayOfWeek = new Date().getDay(); // 0-6
  return DAILY_DEALS[dayOfWeek];
};
