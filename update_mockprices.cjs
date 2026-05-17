const fs = require('fs');

const path = 'src/data/mockPrices.ts';
let code = fs.readFileSync(path, 'utf8');

if (!code.includes('import { MOCK_DB_SG }')) {
  code = code.replace(
    "import { supabase } from '../lib/supabase';",
    "import { supabase } from '../lib/supabase';\nimport { MOCK_DB_SG } from './mockPricesSG';"
  );
}

code = code.replace(
  /const searchPricesInternal = async \(query: string\) => {/,
  "const searchPricesInternal = async (query: string, region: 'IN' | 'SG' = 'IN') => {"
);

code = code.replace(
  /export const searchPrices = async \(query: string\) => {/,
  "export const searchPrices = async (query: string, region: 'IN' | 'SG' = 'IN') => {"
);

code = code.replace(
  /return searchPricesInternal\(query\);/,
  "return searchPricesInternal(query, region);"
);

code = code.replace(
  /const match = Object\.keys\(MOCK_DB\)\.find\(\(k\) => k === key \|\| k\.includes\(key\) \|\| key\.includes\(k\)\);/g,
  "const DB = region === 'SG' ? MOCK_DB_SG : MOCK_DB;\n  const match = Object.keys(DB).find((k) => k === key || k.includes(key) || key.includes(k));"
);

code = code.replace(
  /resultTemplate = JSON\.parse\(JSON\.stringify\(MOCK_DB\[match\]\)\) as CompareResult;/g,
  "resultTemplate = JSON.parse(JSON.stringify(DB[match])) as CompareResult;"
);

code = code.replace(
  /category: dbProduct\?\.category \|\| MOCK_DB\[productId\]\?\.category \|\| 'Grocery',/g,
  "category: dbProduct?.category || DB[productId]?.category || 'Grocery',"
);

code = code.replace(
  /icon: dbProduct\?\.icon \|\| MOCK_DB\[productId\]\?\.icon \|\| '🛒',/g,
  "icon: dbProduct?.icon || DB[productId]?.icon || '🛒',"
);

code = code.replace(
  /const searchPricesInternal = async \(query: string, region: 'IN' \| 'SG' = 'IN'\) => {/,
  "const searchPricesInternal = async (query: string, region: 'IN' | 'SG' = 'IN') => {\n  const DB = region === 'SG' ? MOCK_DB_SG : MOCK_DB;"
);

code = code.replace(/MOCK_DB\[productId\]/g, "DB[productId]");

code = code.replace(
  /const platformIds = \['blinkit', 'zepto', 'swiggy', 'bigbasket', 'amazon', 'jiomart', 'flipkart'\];/g,
  "const platformIds = region === 'SG' ? ['fairprice', 'redmart', 'coldstorage', 'shengsiong', 'giant', 'amazon'] : ['blinkit', 'zepto', 'swiggy', 'bigbasket', 'amazon', 'jiomart', 'flipkart'];"
);

code = code.replace(
  /const deliveryTime = pId === 'swiggy' \? '15 min' : \(pId === 'jiomart' \? '1 day' : \(\['bigbasket', 'amazon'\]\.includes\(pId\) \? '2 hrs' : '10 min'\)\);/g,
  "let deliveryTime = pId === 'swiggy' ? '15 min' : (pId === 'jiomart' ? '1 day' : (['bigbasket', 'amazon'].includes(pId) ? '2 hrs' : '10 min'));\n        if (region === 'SG') deliveryTime = ['redmart', 'fairprice'].includes(pId) ? '1 day' : 'Same day';"
);

code = code.replace(
  /const basePrice = estimateBasePrice\(key\);(\s+)resultTemplate = {[\s\S]+?};/m,
  (match, p1) => {
    return "const basePrice = estimateBasePrice(key);\n" +
    "    if (region === 'SG') {\n" +
    "        const sgBase = (basePrice / 55) + 1.5;\n" +
    "        resultTemplate = {\n" +
    "            query,\n" +
    "            canonicalName: query.charAt(0).toUpperCase() + query.slice(1),\n" +
    "            category: 'Grocery',\n" +
    "            icon: '🛒',\n" +
    "            prices: [\n" +
    "                { platformId: 'fairprice', productName: query, price: vary(sgBase, 0.92, 1.08), originalPrice: vary(sgBase, 1.1, 1.2),  discount: 8,  unit: '1 unit', inStock: true,  url: '#', lastUpdated: new Date().toISOString(), deliveryTime: '1 day' },\n" +
    "                { platformId: 'redmart', productName: query, price: vary(sgBase, 0.88, 1.02), originalPrice: vary(sgBase, 1.05, 1.15), discount: 12, unit: '1 unit', inStock: true,  url: '#', lastUpdated: new Date().toISOString(), deliveryTime: '1 day'  },\n" +
    "                { platformId: 'coldstorage', productName: query, price: vary(sgBase, 0.95, 1.1),  originalPrice: vary(sgBase, 1.08, 1.18), discount: 10, unit: '1 unit', inStock: true,  url: '#', lastUpdated: new Date().toISOString(), deliveryTime: 'Same day' },\n" +
    "            ]\n" +
    "        };\n" +
    "    } else {\n" +
    match + "\n" +
    "    }";
  }
);

fs.writeFileSync(path, code);
console.log('Updated mockPrices.ts!');
