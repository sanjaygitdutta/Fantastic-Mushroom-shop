// Seasonal produce calendar for India — month by month
export interface SeasonalItem {
  name: string;
  emoji: string;
  type: 'vegetable' | 'fruit';
  months: number[]; // 1=Jan, 12=Dec
  states?: string[]; // optional state-specific
  benefit: string;
  searchQuery: string;
}

export const SEASONAL_PRODUCE: SeasonalItem[] = [
  // Vegetables
  { name: 'Tomato', emoji: '🍅', type: 'vegetable', months: [11,12,1,2,3], benefit: 'Rich in lycopene, best price in winter', searchQuery: 'tomato' },
  { name: 'Spinach', emoji: '🥬', type: 'vegetable', months: [11,12,1,2,3], benefit: 'High iron content, winter superfood', searchQuery: 'spinach palak' },
  { name: 'Cauliflower', emoji: '🥦', type: 'vegetable', months: [11,12,1,2], benefit: 'Low calorie, great for sabzi', searchQuery: 'cauliflower' },
  { name: 'Carrot', emoji: '🥕', type: 'vegetable', months: [10,11,12,1,2,3], benefit: 'High beta-carotene, cheap in winter', searchQuery: 'carrot' },
  { name: 'Peas', emoji: '🫛', type: 'vegetable', months: [11,12,1,2,3], benefit: 'Fresh green peas, high protein', searchQuery: 'green peas matar' },
  { name: 'Fenugreek', emoji: '🌿', type: 'vegetable', months: [11,12,1,2,3], benefit: 'Methi leaves for diabetes control', searchQuery: 'methi fenugreek' },
  { name: 'Radish', emoji: '🌱', type: 'vegetable', months: [11,12,1,2], benefit: 'Mooli, great for digestion', searchQuery: 'radish mooli' },
  { name: 'Brinjal', emoji: '🍆', type: 'vegetable', months: [7,8,9,10,11,12], benefit: 'Baingan, abundant in monsoon', searchQuery: 'brinjal baingan' },
  { name: 'Bitter Gourd', emoji: '🥒', type: 'vegetable', months: [5,6,7,8,9], benefit: 'Karela, excellent for blood sugar', searchQuery: 'bitter gourd karela' },
  { name: 'Bottle Gourd', emoji: '🫙', type: 'vegetable', months: [4,5,6,7,8,9], benefit: 'Lauki, cooling summer vegetable', searchQuery: 'bottle gourd lauki' },
  { name: 'Lady Finger', emoji: '🫛', type: 'vegetable', months: [3,4,5,6,7,8,9], benefit: 'Bhindi, high fiber summer veggie', searchQuery: 'lady finger bhindi okra' },
  { name: 'Ridge Gourd', emoji: '🥒', type: 'vegetable', months: [6,7,8,9,10], benefit: 'Turai, lightweight and nutritious', searchQuery: 'ridge gourd turai' },
  { name: 'Drumstick', emoji: '🌱', type: 'vegetable', months: [2,3,4,5,6], benefit: 'Moringa, superfood for immunity', searchQuery: 'drumstick moringa sahjan' },
  { name: 'Raw Mango', emoji: '🥭', type: 'vegetable', months: [3,4,5], benefit: 'Kacha aam for chutneys & panna', searchQuery: 'raw mango kacha aam' },
  { name: 'Corn', emoji: '🌽', type: 'vegetable', months: [7,8,9,10], benefit: 'Makai, classic monsoon snack', searchQuery: 'corn makai' },

  // Fruits
  { name: 'Mango', emoji: '🥭', type: 'fruit', months: [4,5,6,7], benefit: 'King of fruits, peak season May-June', searchQuery: 'mango aam' },
  { name: 'Watermelon', emoji: '🍉', type: 'fruit', months: [4,5,6,7], benefit: '92% water, perfect summer hydration', searchQuery: 'watermelon tarbooz' },
  { name: 'Litchi', emoji: '🍒', type: 'fruit', months: [5,6,7], benefit: 'Summer exotic fruit, Bihar special', searchQuery: 'litchi' },
  { name: 'Papaya', emoji: '🍈', type: 'fruit', months: [1,2,3,4,5,6,7,8,9,10,11,12], benefit: 'Year-round, great for digestion', searchQuery: 'papaya' },
  { name: 'Guava', emoji: '🍐', type: 'fruit', months: [10,11,12,1,2], benefit: 'Amrood, high vitamin C, cheapest in winter', searchQuery: 'guava amrood' },
  { name: 'Banana', emoji: '🍌', type: 'fruit', months: [1,2,3,4,5,6,7,8,9,10,11,12], benefit: 'Year-round energy source', searchQuery: 'banana kela' },
  { name: 'Orange', emoji: '🍊', type: 'fruit', months: [11,12,1,2,3], benefit: 'Nagpur oranges, peak winter fruit', searchQuery: 'orange' },
  { name: 'Grapes', emoji: '🍇', type: 'fruit', months: [1,2,3,4,5], benefit: 'Nashik grapes, best Feb-April', searchQuery: 'grapes angur' },
  { name: 'Strawberry', emoji: '🍓', type: 'fruit', months: [12,1,2,3], benefit: 'Maharashtra strawberries, winter only', searchQuery: 'strawberry' },
  { name: 'Pineapple', emoji: '🍍', type: 'fruit', months: [4,5,6,7,8], benefit: 'Summer tropical fruit, high bromelain', searchQuery: 'pineapple ananas' },
  { name: 'Jackfruit', emoji: '🍈', type: 'fruit', months: [3,4,5,6,7,8], benefit: 'Kathal, meaty texture, high nutrients', searchQuery: 'jackfruit kathal' },
  { name: 'Pomegranate', emoji: '🍎', type: 'fruit', months: [9,10,11,12,1,2,3], benefit: 'Anar, high antioxidants, winter peak', searchQuery: 'pomegranate anar' },
  { name: 'Amla', emoji: '🫐', type: 'fruit', months: [10,11,12,1,2], benefit: 'Indian gooseberry, vitamin C powerhouse', searchQuery: 'amla gooseberry' },
  { name: 'Jamun', emoji: '🫐', type: 'fruit', months: [6,7,8], benefit: 'Java plum, monsoon immunity booster', searchQuery: 'jamun java plum' },
];

export const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

export function getCurrentSeasonalItems(): SeasonalItem[] {
  const month = new Date().getMonth() + 1; // 1-indexed
  return SEASONAL_PRODUCE.filter(item => item.months.includes(month));
}

export function getItemsByMonth(month: number): SeasonalItem[] {
  return SEASONAL_PRODUCE.filter(item => item.months.includes(month));
}
