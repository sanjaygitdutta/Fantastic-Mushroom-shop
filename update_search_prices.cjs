const fs = require('fs');

const path = 'src/data/mockPrices.ts';
let code = fs.readFileSync(path, 'utf8');

const targetStr = `    if (!prError && dbPrices && dbPrices.length > 0) {
      return {
        query: productId,
        canonicalName: dbProduct?.canonical_name || DB[productId]?.canonicalName || productId.toUpperCase(),
        category: dbProduct?.category || DB[productId]?.category || 'Grocery',
        icon: dbProduct?.icon || DB[productId]?.icon || '🛒',
        prices: dbPrices.map(p => {
          const fluc = getDailyFluctuation(productId, p.platform_id);
          const fPrice = Math.round(p.price * fluc);
          return {
            platformId: p.platform_id,
            productName: p.canonical_name || dbProduct?.canonical_name || productId,
            price: fPrice,
            originalPrice: Math.round(fPrice * 1.15),
            discount: 15,
            unit: '1 unit',
            inStock: p.in_stock,
            url: generateSearchUrl(p.platform_id, productId),
            lastUpdated: p.last_updated,
            deliveryTime: p.platform_id === 'swiggy' ? '15 min' : '10 min',
            isVerified: true
          };
        })
      };
    }`;

const replaceStr = `    if (!prError && dbPrices && dbPrices.length > 0) {
      const canonicalName = dbProduct?.canonical_name || DB[productId]?.canonicalName || productId.toUpperCase();
      const category = dbProduct?.category || DB[productId]?.category || 'Grocery';
      const icon = dbProduct?.icon || DB[productId]?.icon || '🛒';

      // --- SINGAPORE BASELINE GENERATION ---
      if (region === 'SG') {
        const sgBase = dbPrices.find(p => p.platform_id === 'sg_base_price');
        if (sgBase && sgBase.price > 0) {
          const basePrice = sgBase.price;
          const sgPlatformIds = ['fairprice', 'redmart', 'coldstorage', 'shengsiong', 'giant', 'grabmart', 'pandamart', 'amazon_sg'];
          
          return {
            query: productId,
            canonicalName,
            category,
            icon,
            prices: sgPlatformIds.map(pId => {
              const fluc = getDailyFluctuation(productId, pId);
              const fPrice = Math.round((basePrice * vary(basePrice, 0.95, 1.05)) * fluc * 100) / 100;
              
              let deliveryTime = ['redmart', 'fairprice'].includes(pId) ? '1 day' : (['grabmart', 'pandamart'].includes(pId) ? '15 min' : 'Same day');
              if (pId === 'amazon_sg') deliveryTime = '2 hrs';

              return {
                platformId: pId,
                productName: sgBase.canonical_name || canonicalName,
                price: parseFloat(fPrice.toFixed(2)),
                originalPrice: parseFloat((fPrice * vary(basePrice, 1.1, 1.2)).toFixed(2)),
                discount: 10 + Math.floor(Math.random() * 10),
                unit: '1 unit',
                inStock: sgBase.in_stock,
                url: generateSearchUrl(pId, productId),
                lastUpdated: sgBase.last_updated,
                deliveryTime,
                isVerified: true
              };
            })
          };
        }
      }

      // --- INDIA (DEFAULT) LOGIC ---
      const inPrices = dbPrices.filter(p => p.platform_id !== 'sg_base_price');
      if (inPrices.length > 0) {
        return {
          query: productId,
          canonicalName,
          category,
          icon,
          prices: inPrices.map(p => {
            const fluc = getDailyFluctuation(productId, p.platform_id);
            const fPrice = Math.round(p.price * fluc);
            return {
              platformId: p.platform_id,
              productName: p.canonical_name || canonicalName,
              price: fPrice,
              originalPrice: Math.round(fPrice * 1.15),
              discount: 15,
              unit: '1 unit',
              inStock: p.in_stock,
              url: generateSearchUrl(p.platform_id, productId),
              lastUpdated: p.last_updated,
              deliveryTime: p.platform_id === 'swiggy' ? '15 min' : '10 min',
              isVerified: true
            };
          })
        };
      }
    }`;

// Since the file has some garbled characters for the emoji `🛒`, we can use a more robust regex to replace it
const regex = /if \(!prError && dbPrices && dbPrices\.length > 0\) \{[\s\S]*?isVerified: true\s*};\s*}\)\s*};\s*}/;

code = code.replace(regex, replaceStr);

fs.writeFileSync(path, code);
console.log('Replaced successfully');
