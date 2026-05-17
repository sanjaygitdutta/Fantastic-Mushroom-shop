const fs = require('fs');

const pathIN = 'src/data/mockPrices.ts';
const pathSG = 'src/data/mockPricesSG.ts';

let code = fs.readFileSync(pathIN, 'utf8');

code = code.replace(/export const MOCK_DB/g, 'export const MOCK_DB_SG');

const sgPlatforms = [
  { id: 'fairprice', name: 'FairPrice', time: '2 hrs' },
  { id: 'redmart', name: 'RedMart', time: '1 day' },
  { id: 'coldstorage', name: 'Cold Storage', time: 'Same day' },
  { id: 'shengsiong', name: 'Sheng Siong', time: '4 hrs' },
  { id: 'giant', name: 'Giant', time: 'Same day' },
  { id: 'grabmart', name: 'GrabMart', time: '15 min' },
  { id: 'pandamart', name: 'pandamart', time: '15 min' },
  { id: 'amazon_sg', name: 'Amazon Fresh', time: '2 hrs' }
];

let sgPlatformIndex = 0;

code = code.replace(/p\('([^']+)',\s*'([^']+)',\s*([\d.]+),\s*([\d.]+),\s*([\d.]+),\s*'([^']+)',\s*'([^']+)',\s*(true|false)(?:,\s*'([^']+)')?\)/g, (match, plat, name, priceStr, origStr, disc, unit, query, inStock, deliveryTime) => {
  const sgP = sgPlatforms[sgPlatformIndex % sgPlatforms.length];
  sgPlatformIndex++;
  
  let inrPrice = parseFloat(priceStr);
  let sgdPrice = (inrPrice / 55) + 1.5; 
  sgdPrice = parseFloat(sgdPrice.toFixed(2));
  
  let inrOrig = parseFloat(origStr);
  let sgdOrig = (inrOrig / 55) + 1.8;
  sgdOrig = parseFloat(sgdOrig.toFixed(2));
  
  let sgName = name.replace(/BB Royal|Fresho|Blinkit|JioMart/gi, sgP.name);

  return "p('" + sgP.id + "', '" + sgName + "', " + sgdPrice + ", " + sgdOrig + ", " + disc + ", '" + unit + "', '" + query + "', " + inStock + ", '" + sgP.time + "')";
});

code = code.replace(
  /const urls: Record<string, string> = {[^}]+};/m,
  "const urls: Record<string, string> = {\n" +
  "    fairprice:   `https://www.fairprice.com.sg/search?query=${encodeURIComponent(query)}`,\n" +
  "    redmart:     `https://redmart.lazada.sg/catalog/?q=${encodeURIComponent(query)}`,\n" +
  "    coldstorage: `https://coldstorage.com.sg/search?q=${encodeURIComponent(query)}`,\n" +
  "    shengsiong:  `https://shengsiong.com.sg/search/${encodeURIComponent(query)}`,\n" +
  "    giant:       `https://giant.sg/search?q=${encodeURIComponent(query)}`,\n" +
  "    grabmart:    `https://food.grab.com/sg/en/groceries/search?q=${encodeURIComponent(query)}`,\n" +
  "    pandamart:   `https://www.foodpanda.sg/darkstore/search?q=${encodeURIComponent(query)}`,\n" +
  "    amazon_sg:   `https://www.amazon.sg/s?k=${encodeURIComponent(query)}&i=amazonfresh`,\n" +
  "  };"
);

fs.writeFileSync(pathSG, code);
console.log('Created mockPricesSG.ts!');
