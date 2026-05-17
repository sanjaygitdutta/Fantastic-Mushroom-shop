const fs = require('fs');
let content = fs.readFileSync('src/views/Home.tsx', 'utf-8');
content = content.replace(
  "{t('home_hero_subtitle')}",
  "{region === 'SG' ? 'Instantly find the cheapest option across FairPrice, RedMart, Cold Storage & more. Why pay extra when you can compare?' : t('home_hero_subtitle')}"
);
fs.writeFileSync('src/views/Home.tsx', content);
