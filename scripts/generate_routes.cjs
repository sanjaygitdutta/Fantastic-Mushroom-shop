const fs = require('fs');
const path = require('path');

const routes = {
  'compare': 'Compare',
  'chef-aika': 'ChefAika',
  'basket': 'BasketCalculator',
  'meal-calculator': 'MealCostCalculator',
  'mushroom-shop': 'MushroomShop',
  'recipes': 'Recipes',
  'community': 'CommunityFeed',
  'coupons': 'Coupons',
  'seasonal': 'SeasonalGuide',
  'saved': 'SavedLists',
  'profile': 'Profile',
  'login': 'Login',
  'signup': 'Signup',
  'about': 'About',
  'blog': 'BlogDirectory',
  'faq': 'FAQ',
  'directory': 'SitemapDirectory',
  'checkout': 'Checkout',
  'festival': 'FestivalPlanner',
  'meal-planner': 'MealPlanner',
  'subscription': 'Subscription',
  'b2b': 'B2B',
  'health': 'NutritionInfo',
  'savings': 'FoodScore'
};

const baseDir = path.join(process.cwd(), 'src', 'app', '[lang]');

for (const [route, component] of Object.entries(routes)) {
  const dirPath = path.join(baseDir, route);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const pagePath = path.join(dirPath, 'page.tsx');
  const content = `'use client';

import { Suspense } from 'react';
import ${component} from '../../../views/${component}';

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin" /></div>}>
      <${component} />
    </Suspense>
  );
}
`;

  fs.writeFileSync(pagePath, content);
  console.log('Updated route with Suspense:', route);
}
