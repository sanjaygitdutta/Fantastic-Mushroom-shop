const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/views/Compare.tsx',
  'src/views/BasketCalculator.tsx',
  'src/views/FoodItemPage.tsx',
  'src/views/MealCostCalculator.tsx'
];

for (const file of filesToUpdate) {
  const fullPath = path.resolve(__dirname, file);
  if (!fs.existsSync(fullPath)) continue;

  let code = fs.readFileSync(fullPath, 'utf8');
  
  // Look for `searchPrices(someVar)` and replace with `searchPrices(someVar, region)`
  code = code.replace(/searchPrices\(([^),]+)\)/g, 'searchPrices($1, region)');

  fs.writeFileSync(fullPath, code);
  console.log(`Updated ${file}`);
}
