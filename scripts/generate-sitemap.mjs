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
    dairy: ['amul', 'mother dairy', 'nandini', 'nestle', 'britannia', 'epigamia', 'gowardhan', 'aavin', 'jersey', 'milky mist'],
    masala: ['everest', 'mdh', 'catch', 'suhana', 'tata sampann', 'aashirvaad', 'goldiee', 'mtr', 'eastern', 'nilon'],
    oil: ['fortune', 'saffola', 'gemini', 'dhara', 'sunpure', 'patanjali', 'emami', 'nature fresh', 'sundrop', 'mr gold'],
    fmcg: ['surf excel', 'ariel', 'tide', 'rin', 'wheel', 'vim', 'pril', 'colgate', 'pepsodent', 'sensodyne', 'dettol', 'lifebuoy', 'santoor', 'dove', 'pears', 'cinthol', 'godrej no 1', 'head and shoulders', 'pantene', 'sunflower', 'clinic plus', 'himalaya', 'nivea', 'vaseline', 'parachute'],
    snacks: ['lays', 'kurkure', 'haldiram', 'bikano', 'balaji', 'doritos', 'pringles', 'cheetos', 'bingo', 'yellow diamond', 'britannia', 'parle', 'sunfeast', 'priyagold'],
    staples: ['tata sampann', 'aashirvaad', 'india gate', 'daawat', 'kohinoor', 'fortune', '24 mantra', 'natureland', 'pro nature', 'bb royal', 'rajdhani'],
    beverages: ['taj mahal', 'red label', 'tata tea', 'nescafe', 'bru', 'coca cola', 'pepsi', 'sprite', 'thums up', 'maaza', 'slice', 'frooty', 'paper boat', 'red bull', 'monster'],
    meats: ['licious', 'freshtohome', 'zappfresh', 'tender cuts', 'suguna', 'godrej tyson', 'zorabian']
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
  'jaipur', 'lucknow', 'noida', 'gurgaon', 'surat', 'indore', 'chandigarh',
  'kochi', 'nagpur', 'bhopal', 'visakhapatnam', 'coimbatore', 'vadodara', 'bhubaneswar', 'thiruvananthapuram',
  'patna', 'ranchi', 'agra', 'varanasi', 'meerut', 'faridabad', 'amritsar', 'ludhiana',
  'jodhpur', 'kota', 'udaipur', 'nashik', 'thane', 'mysuru', 'mangalore', 'madurai',
  'vijayawada', 'warangal', 'dehradun', 'raipur', 'guwahati', 'kozhikode', 'thrissur',
  'siliguri', 'jammu', 'guntur', 'hubli', 'tiruchirappalli', 'navi-mumbai'
];

// 1. Add all single items (highly searched)
[...categories.vegetables, ...categories.fruits, ...categories.dairy, ...categories.staples, 
 ...categories.flours, ...categories.oils, ...categories.masalas, ...categories.snacks, 
 ...categories.beverages, ...categories.meats].forEach(i => keywords.add(i));

// 2. Combine Dairy with Brands + Sizes
categories.dairy.forEach(item => {
  ['200ml', '500ml', '1l', '200g', '500g', '1kg'].forEach(size => {
    keywords.add(`${item} ${size}`);
    categories.brands.dairy.forEach(brand => {
      keywords.add(`${brand} ${item}`);
      keywords.add(`${brand} ${item} ${size}`);
    });
  });
});

// 3. Combine Staples/Flours with Brands + Sizes
[...categories.staples, ...categories.flours].forEach(item => {
  ['500g', '1kg', '5kg', '10kg', '25kg'].forEach(size => {
    keywords.add(`${item} ${size}`);
    categories.brands.staples.forEach(brand => {
      keywords.add(`${brand} ${item}`);
      keywords.add(`${brand} ${item} ${size}`);
    });
  });
});

// 4. Combine Oils with Brands + Sizes
categories.oils.forEach(item => {
  ['500ml', '1l', '5l', '15l'].forEach(size => {
    keywords.add(`${item} ${size}`);
    categories.brands.oil.forEach(brand => {
      keywords.add(`${brand} ${item}`);
      keywords.add(`${brand} ${item} ${size}`);
    });
  });
});

// 5. Combine Masalas with Brands + Sizes
categories.masalas.forEach(item => {
  ['50g', '100g', '200g', '500g'].forEach(size => {
    keywords.add(`${item} ${size}`);
    categories.brands.masala.forEach(brand => {
      keywords.add(`${brand} ${item}`);
      keywords.add(`${brand} ${item} ${size}`);
    });
  });
});

// 6. Combine Snacks with Brands + Sizes
categories.snacks.forEach(item => {
  ['30g', '50g', '100g', '200g', '400g'].forEach(size => {
    keywords.add(`${item} ${size}`);
    categories.brands.snacks.forEach(brand => {
      keywords.add(`${brand} ${item}`);
      keywords.add(`${brand} ${item} ${size}`);
    });
  });
});

// 7. FMCG Categories (Soaps, Shampoos, Detergents)
categories.brands.fmcg.forEach(brand => {
  keywords.add(brand);
  ['soap', 'shampoo', 'detergent', 'handwash', 'toothpaste', 'dishwash'].forEach(cat => {
    keywords.add(`${brand} ${cat}`);
  });
});

// 8. Beverages with Brands + Sizes
categories.beverages.forEach(item => {
  ['250ml', '500ml', '1l', '1.5l', '2.25l'].forEach(size => {
    keywords.add(`${item} ${size}`);
    categories.brands.beverages.forEach(brand => {
      keywords.add(`${brand} ${item}`);
      keywords.add(`${brand} ${item} ${size}`);
    });
  });
});

// 9. Vegetables & Fruits with Sizes
[...categories.vegetables, ...categories.fruits].forEach(item => {
  ['250g', '500g', '1kg'].forEach(size => {
    keywords.add(`${item} ${size}`);
    keywords.add(`fresh ${item}`);
    keywords.add(`organic ${item}`);
  });
});

// 10. Meats with Brands + Sizes
categories.meats.forEach(item => {
  ['250g', '500g', '1kg'].forEach(size => {
    keywords.add(`${item} ${size}`);
    categories.brands.meats.forEach(brand => {
      keywords.add(`${brand} ${item}`);
      keywords.add(`${brand} ${item} ${size}`);
    });
  });
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
const SUPPORTED_LANGUAGES = ['hi', 'bn', 'mr', 'te', 'ta'];

const generateMultiLangBlock = (baseUrl, priority) => {
  let xml = '';
  // Default English (use < to ensure exact match)
  if (!existingSitemap.includes(baseUrl + '<')) {
    xml += `  <url><loc>${baseUrl}</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>weekly</changefreq><priority>${priority}</priority></url>\n`;
  }
  
  // Regional Variants
  SUPPORTED_LANGUAGES.forEach(lang => {
    const urlObj = new URL(baseUrl);
    urlObj.pathname = `/${lang}${urlObj.pathname === '/' ? '' : urlObj.pathname}`;
    const localizedUrl = urlObj.toString();
    if (!existingSitemap.includes(localizedUrl)) {
      xml += `  <url><loc>${localizedUrl}</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>weekly</changefreq><priority>${(priority - 0.1).toFixed(1)}</priority></url>\n`;
    }
  });
  
  return xml;
};

// Generate the XML blocks for food items
const xmlGenerations = keywordArray.map(slug => {
  const url = `https://www.fantasticfood.in/food/${encodeURIComponent(slug)}`;
  return generateMultiLangBlock(url, 0.7);
}).join('');

// Generate XML blocks for Cities
const cityXmlGenerations = citySlugs.map(slug => {
  const url = `https://www.fantasticfood.in/city/${encodeURIComponent(slug)}`;
  return generateMultiLangBlock(url, 0.9);
}).join('');

// Generate XML blocks for AI Recipes (src/data/recipes.ts)
const recipesContent = fs.readFileSync(path.resolve('./src/data/recipes.ts'), 'utf-8');
const recipeMatches = [...recipesContent.matchAll(/id:\s*'([^']+)'/g)];
const aiRecipeXmlGenerations = recipeMatches.map(m => {
  const url = `https://www.fantasticfood.in/recipe/${m[1]}`;
  return generateMultiLangBlock(url, 0.8);
}).join('');

// Generate XML blocks for AI Blogs (src/data/blogPosts.ts)
const blogsContent = fs.readFileSync(path.resolve('./src/data/blogPosts.ts'), 'utf-8');
const blogMatches = [...blogsContent.matchAll(/slug:\s*'([^']+)'/g)];
const blogXmlGenerations = blogMatches.map(m => {
  const url = `https://www.fantasticfood.in/blog/${m[1]}`;
  return generateMultiLangBlock(url, 0.8);
}).join('');

// Insert into sitemap
const updatedSitemap = existingSitemap.replace(
  injectionPoint,
  `\n  <!-- ── PROGRAMMATIC SEO PAGES (Cities + Food + AI Recipes + Blogs) ── -->\n${cityXmlGenerations}${xmlGenerations}${aiRecipeXmlGenerations}${blogXmlGenerations}${injectionPoint}`
);

fs.writeFileSync(sitemapPath, updatedSitemap);
console.log('Successfully updated /public/sitemap.xml!');

// --- JSON Directory Generation ---
const jsonPath = path.resolve('./src/data/sitemapLinks.json');
fs.writeFileSync(jsonPath, JSON.stringify({ foodItems: keywordArray, cities: citySlugs }, null, 2));
console.log('Successfully extracted JSON arrays to /src/data/sitemapLinks.json for React consumption!');

