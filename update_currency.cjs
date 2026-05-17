const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/components/PlatformPriceCard.tsx',
  'src/components/CompareResultsGrid.tsx',
  'src/components/DealOfTheDay.tsx',
  'src/components/ProductCard.tsx',
  'src/components/Cart.tsx',
  'src/views/BasketCalculator.tsx',
  'src/views/Compare.tsx',
  'src/views/FoodScore.tsx',
  'src/views/MealCostCalculator.tsx',
  'src/views/MealPlanner.tsx'
];

function getRelativePath(filePath, targetFile) {
  const dir = path.dirname(filePath);
  let rel = path.relative(dir, targetFile).replace(/\\/g, '/');
  if (!rel.startsWith('.')) rel = './' + rel;
  return rel.replace(/\.ts$/, '');
}

for (const file of filesToUpdate) {
  const fullPath = path.resolve(__dirname, file);
  if (!fs.existsSync(fullPath)) continue;

  let code = fs.readFileSync(fullPath, 'utf8');
  if (!code.includes('₹')) continue;

  const regionPath = getRelativePath(file, 'src/utils/region.ts');
  
  // 1. Add imports
  if (!code.includes('useRegion') && code.includes('react')) {
    code = code.replace(
      /(import .* from 'react';?)/,
      `$1\nimport { useRegion, formatCurrency } from '${regionPath}';`
    );
  } else if (!code.includes('useRegion')) {
    code = `import { useRegion, formatCurrency } from '${regionPath}';\n` + code;
  }

  // 2. Inject `const { region } = useRegion();` into the main component
  // This is a bit hacky: we look for the first `const ComponentName = ... => {` or `export default function ComponentName(...) {`
  const componentRegex = /(const [A-Z][a-zA-Z0-9_]*\s*=\s*(?:async\s*)?\([^)]*\)\s*(?::\s*[A-Za-z<>.\s]+)?\s*=>\s*{|export default (?:async\s*)?function [A-Z][a-zA-Z0-9_]*\([^)]*\)\s*{)/;
  code = code.replace(componentRegex, (match) => {
    return `${match}\n  const { region } = useRegion();`;
  });

  // 3. Replace `₹{VAR}` with `{formatCurrency(VAR, region)}`
  code = code.replace(/₹\{([^}]+)\}/g, '{formatCurrency($1, region)}');
  
  // 4. Replace `₹NUM` with `{formatCurrency(NUM, region)}`
  code = code.replace(/₹([0-9]+(?:\.[0-9]+)?)/g, '{formatCurrency($1, region)}');

  fs.writeFileSync(fullPath, code);
  console.log(`Updated ${file}`);
}
