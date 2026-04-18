import fs from 'fs';
import path from 'path';

// --- Extensive Product Database for Programmative SEO ---

const categories = {
  vegetables: [
    'onion', 'tomato', 'potato', 'spinach', 'carrot', 'capsicum', 'cucumber', 
    'ladyfinger', 'brinjal', 'mushroom', 'broccoli', 'cauliflower', 'cabbage',
    'green peas', 'garlic', 'ginger', 'green chilli', 'coriander', 'mint',
    'bottle gourd', 'bitter gourd', 'ridge gourd', 'snake gourd', 'pumpkin',
    'sweet potato', 'beetroot', 'radish', 'french beans', 'cluster beans', 'lemon'
  ],
  fruits: [
    'banana', 'apple', 'mango', 'grapes', 'papaya', 'watermelon', 'muskmelon',
    'pomegranate', 'orange', 'sweet lime', 'guava', 'pineapple', 'kiwi',
    'strawberry', 'blueberry', 'avocado', 'dragon fruit', 'pear', 'plum', 'peach'
  ],
  dairy: [
    'milk', 'butter', 'paneer', 'curd', 'cheese', 'buttermilk', 'lassi',
    'ghee', 'dairy whitener', 'condensed milk', 'flavored milk', 'yogurt'
  ],
  brands: {
    dairy: ['amul', 'mother dairy', 'nandini', 'nestle', 'brittania', 'epigamia', 'gowardhan', 'aavin'],
    masala: ['everest', 'mdh', 'catch', 'suhana', 'tata sampann', 'aashirvaad'],
    oil: ['fortune', 'saffola', 'gemini', 'dhara', 'sunpure', 'patanjali', 'emami'],
    fmcg: ['surf excel', 'ariel', 'tide', 'rin', 'wheel', 'vim', 'pril', 'colgate', 'pepsodent', 'sensodyne', 'dettol', 'lifebuoy', 'santoor', 'dove', 'pears'],
    snacks: ['lays', 'kurkure', 'haldiram', 'bikano', 'balaji', 'doritos', 'pringles', 'cheetos']
  },
  staples: [
    'rice', 'basmati rice', 'brown rice', 'toor dal', 'moong dal', 'urad dal', 
    'chana dal', 'masoor dal', 'rajma', 'chole', 'lobia', 'soya chunks',
    'sugar', 'salt', 'jaggery', 'poha', 'sabudana', 'dalia'
  ],
  flours: [
    'atta', 'whole wheat flour', 'maida', 'besan', 'sooji', 'rava', 'rice flour',
    'bajra', 'jowar', 'ragi', 'multi grain atta'
  ],
  oils: [
    'sunflower oil', 'mustard oil', 'groundnut oil', 'soyabean oil', 'olive oil',
    'rice bran oil', 'sesame oil', 'coconut oil'
  ],
  masalas: [
    'turmeric powder', 'red chilli powder', 'coriander powder', 'cumin seeds', 
    'mustard seeds', 'garam masala', 'chicken masala', 'meat masala', 'chaat masala',
    'black pepper', 'cardamom', 'cloves', 'cinnamon'
  ],
  snacks: [
    'chips', 'bhujia', 'namkeen', 'biscuits', 'cookies', 'rusk', 'popcorn',
    'maggi', 'yippee', 'noodles', 'pasta', 'macaroni', 'vermicelli'
  ],
  beverages: [
    'tea', 'green tea', 'coffee', 'instant coffee', 'cold drink', 'soft drink',
    'cola', 'apple juice', 'mixed fruit juice', 'mango drink', 'energy drink'
  ],
  meats: [
    'chicken', 'chicken breast', 'chicken boneless', 'mutton', 'fish', 'rohu fish',
    'prawns', 'eggs', 'brown eggs', 'bacon', 'sausages', 'salami'
  ]
};

// --- Generation Logic ---

let keywords = new Set();
let citySlugs = [
  'mumbai', 'delhi', 'bangalore', 'hyderabad', 'chennai', 'pune', 'kolkata', 'ahmedabad',
  'jaipur', 'lucknow', 'noida', 'gurgaon', 'surat', 'indore', 'chandigarh'
];

// 1. Add all single items (highly searched)
[...categories.vegetables, ...categories.fruits, ...categories.dairy, ...categories.staples, 
 ...categories.flours, ...categories.oils, ...categories.masalas, ...categories.snacks, 
 ...categories.beverages, ...categories.meats].forEach(i => keywords.add(i));

// 2. Combine Dairy with Brands + Sizes
categories.dairy.forEach(item => {
  categories.brands.dairy.forEach(brand => {
    keywords.add(`${brand} ${item}`);
  });
  keywords.add(`${item} 500ml`);
  keywords.add(`${item} 1l`);
});

// 3. Combine Staples/Flours with generic sizes
[...categories.staples, ...categories.flours].forEach(item => {
  ['1kg', '5kg', '10kg'].forEach(size => {
    keywords.add(`${item} ${size}`);
  });
});

// 4. Combine Oils with Brands + Sizes
categories.oils.forEach(item => {
  categories.brands.oil.forEach(brand => {
    keywords.add(`${brand} ${item}`);
    keywords.add(`${brand} ${item} 1l`);
    keywords.add(`${brand} ${item} 5l`);
  });
  keywords.add(`${item} 1l`);
  keywords.add(`${item} 5l`);
});

// 5. Combine Masalas with Brands
categories.masalas.forEach(item => {
  categories.brands.masala.forEach(brand => {
    keywords.add(`${brand} ${item}`);
  });
});

// 6. Combine Snacks with Brands
categories.snacks.forEach(item => {
  categories.brands.snacks.forEach(brand => {
    keywords.add(`${brand} ${item}`);
  });
});

// 7. FMCG (Highest volume grocery app searches)
categories.brands.fmcg.forEach(brand => {
  keywords.add(brand);
});

// 8. Add top long-tail competitors vs searches randomly to boost
const commonCompetitors = "blinkit vs zepto";
const topItems = ['tomato', 'onion', 'milk', 'eggs', 'chicken', 'maggi', 'bread', 'butter'];
topItems.forEach(item => {
  keywords.add(`${item} ${commonCompetitors}`);
});

// Convert to array and clean up formatting for URLs
const keywordArray = Array.from(keywords)
  .map(k => k.trim().replace(/\s+/g, '-').toLowerCase())
  // Remove duplicates resulting from formatting
  .filter((v, i, a) => a.indexOf(v) === i);

console.log(`Generated ${keywordArray.length} unique programmatic SEO keywords...`);

const sitemapPath = path.resolve('./public/sitemap.xml');
let existingSitemap = fs.readFileSync(sitemapPath, 'utf-8');

// We will inject the new URLs right before </urlset>
const injectionPoint = '</urlset>';

if (!existingSitemap.includes(injectionPoint)) {
  console.error('Invalid sitemap.xml structure. Missing </urlset>');
  process.exit(1);
}

// Generate the XML blocks
// Generate the XML blocks for food items
const xmlGenerations = keywordArray.map(slug => {
  const url = `https://www.fantasticfood.in/food/${encodeURIComponent(slug)}`;
  if (existingSitemap.includes(url)) return '';
  return `  <url><loc>${url}</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>\n`;
}).join('');

// Generate XML blocks for Cities
const cityXmlGenerations = citySlugs.map(slug => {
  const url = `https://www.fantasticfood.in/city/${encodeURIComponent(slug)}`;
  if (existingSitemap.includes(url)) return '';
  return `  <url><loc>${url}</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>\n`;
}).join('');

// Generate XML blocks for AI Recipes (src/data/recipes.ts)
const recipesContent = fs.readFileSync(path.resolve('./src/data/recipes.ts'), 'utf-8');
const recipeMatches = [...recipesContent.matchAll(/id:\s*'([^']+)'/g)];
const aiRecipeXmlGenerations = recipeMatches.map(m => {
  const url = `https://www.fantasticfood.in/recipe/${m[1]}`;
  if (existingSitemap.includes(url)) return '';
  return `  <url><loc>${url}</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>daily</changefreq><priority>0.8</priority></url>\n`;
}).join('');

// Insert into sitemap
const updatedSitemap = existingSitemap.replace(
  injectionPoint,
  `\n  <!-- ── PROGRAMMATIC SEO PAGES (Cities + Food + AI Recipes) ── -->\n${cityXmlGenerations}${xmlGenerations}${aiRecipeXmlGenerations}${injectionPoint}`
);

fs.writeFileSync(sitemapPath, updatedSitemap);
console.log('Successfully updated /public/sitemap.xml!');

// --- JSON Directory Generation ---
const jsonPath = path.resolve('./src/data/sitemapLinks.json');
fs.writeFileSync(jsonPath, JSON.stringify({ foodItems: keywordArray, cities: citySlugs }, null, 2));
console.log('Successfully extracted JSON arrays to /src/data/sitemapLinks.json for React consumption!');

