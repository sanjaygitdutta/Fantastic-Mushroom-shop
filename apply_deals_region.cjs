const fs = require('fs');

let content = fs.readFileSync('src/components/DealOfTheDay.tsx', 'utf-8');

const sgDeals = `const SG_DEALS: Deal[] = [
  { food: 'milk',      icon: '🥛', platformId: 'fairprice',   productName: 'FairPrice Fresh Milk',     price: 3.20,  originalPrice: 3.60,  discount: 11, unit: '1 L'  },
  { food: 'eggs',      icon: '🥚', platformId: 'redmart',     productName: 'Passerine Fresh Eggs',     price: 3.50,  originalPrice: 4.20,  discount: 16, unit: '10 pcs'},
  { food: 'bread',     icon: '🍞', platformId: 'coldstorage', productName: 'Sunshine White Bread',     price: 2.10,  originalPrice: 2.50,  discount: 16, unit: '400g' },
  { food: 'chicken',   icon: '🍗', platformId: 'shengsiong',  productName: 'Fresh Chicken Breast',     price: 6.90,  originalPrice: 8.50,  discount: 18, unit: '500g' },
  { food: 'rice',      icon: '🍚', platformId: 'giant',       productName: 'SongHe Fragrant Rice',     price: 15.50, originalPrice: 18.20, discount: 14, unit: '5 kg' },
  { food: 'banana',    icon: '🍌', platformId: 'fairprice',   productName: 'Cavendish Banana',         price: 2.50,  originalPrice: 3.20,  discount: 21, unit: '1 kg' },
  { food: 'apple',     icon: '🍎', platformId: 'redmart',     productName: 'Fuji Apple 4pcs',          price: 4.80,  originalPrice: 5.90,  discount: 18, unit: '4 pcs'},
  { food: 'oil',       icon: '🫙', platformId: 'shengsiong',  productName: 'Knife Cooking Oil',        price: 8.50,  originalPrice: 10.20, discount: 16, unit: '1 L'  },
  { food: 'tomato',    icon: '🍅', platformId: 'coldstorage', productName: 'Cherry Tomatoes',          price: 3.90,  originalPrice: 4.80,  discount: 18, unit: '250g' },
  { food: 'paneer',    icon: '🧀', platformId: 'giant',       productName: 'Amul Fresh Paneer',        price: 6.50,  originalPrice: 8.00,  discount: 18, unit: '200g' },
  { food: 'dal',       icon: '🫘', platformId: 'fairprice',   productName: 'Toor Dal 1kg',             price: 4.50,  originalPrice: 5.50,  discount: 18, unit: '1 kg' },
  { food: 'butter',    icon: '🧈', platformId: 'redmart',     productName: 'SCS Salted Butter',        price: 5.90,  originalPrice: 7.20,  discount: 18, unit: '250g' },
];

const DealOfTheDay = () => {`;

if (!content.includes('const SG_DEALS: Deal[] = [')) {
  content = content.replace('const DealOfTheDay = () => {', sgDeals);
}

const originalMemo = `  const todayDeals = useMemo(() => {
    const seed = new Date().getDate(); // 1–31
    const offset = seed % ALL_DEALS.length;
    const rotated = [...ALL_DEALS.slice(offset), ...ALL_DEALS.slice(0, offset)];
    return rotated.slice(0, 5);
  }, []);`;

const newMemo = `  const todayDeals = useMemo(() => {
    const dealsArray = region === 'SG' ? SG_DEALS : ALL_DEALS;
    const seed = new Date().getDate(); // 1–31
    const offset = seed % dealsArray.length;
    const rotated = [...dealsArray.slice(offset), ...dealsArray.slice(0, offset)];
    return rotated.slice(0, 5);
  }, [region]);`;

content = content.replace(originalMemo, newMemo);

content = content.replace(
  "{t('deal_saved_amount')}",
  "{region === 'SG' ? 'S$10+' : t('deal_saved_amount')}"
);

fs.writeFileSync('src/components/DealOfTheDay.tsx', content);
console.log('DealOfTheDay updated!');
