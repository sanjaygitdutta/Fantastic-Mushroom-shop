const fs = require('fs');
let content = fs.readFileSync('src/views/Home.tsx', 'utf-8');

// 1. Import useRegion
if (!content.includes("import { useRegion }")) {
  content = content.replace(
    "import { useTranslation, Trans } from 'react-i18next';",
    "import { useTranslation, Trans } from 'react-i18next';\nimport { useRegion } from '../utils/region';"
  );
}

// 2. Add SG_PLATFORM_LOGOS
if (!content.includes("const SG_PLATFORM_LOGOS =")) {
  content = content.replace(
    "const PLATFORM_LOGOS = [",
    "const SG_PLATFORM_LOGOS = [\n  { name: 'FairPrice', emoji: '🛒', color: '#E31837' },\n  { name: 'RedMart', emoji: '🔴', color: '#E31837' },\n  { name: 'Cold Storage', emoji: '❄️', color: '#006B3F' },\n  { name: 'Sheng Siong', emoji: '🏪', color: '#00A040' },\n  { name: 'Giant', emoji: '🟢', color: '#4B9928' },\n  { name: 'Amazon Fresh', emoji: '📦', color: '#FF9900' },\n];\n\nconst PLATFORM_LOGOS = ["
  );
}

// 3. Hook inside Home
if (!content.includes("const { region } = useRegion();")) {
  content = content.replace(
    "const { t } = useTranslation();",
    "const { t } = useTranslation();\n  const { region } = useRegion();\n  const activeLogos = region === 'SG' ? SG_PLATFORM_LOGOS : PLATFORM_LOGOS;\n  \n  const activeHowItWorks = HOW_IT_WORKS.map(step => {\n    if (step.step === '2') {\n      return { ...step, desc: region === 'SG' ? 'We fetch real-time prices from FairPrice, RedMart, Cold Storage, Sheng Siong, Giant & Amazon.' : step.desc };\n    }\n    return step;\n  });"
  );
}

// 4. Render activeLogos instead of PLATFORM_LOGOS
content = content.replace(
  "{PLATFORM_LOGOS.map((p) => (",
  "{activeLogos.map((p) => ("
);

// 5. Render activeHowItWorks instead of HOW_IT_WORKS
content = content.replace(
  "{HOW_IT_WORKS.map((step, i) => (",
  "{activeHowItWorks.map((step, i) => ("
);

// 6. Fix the Hero subtitle rendering to pass region to translation if we want, or just dynamically render a string here
content = content.replace(
  "<p className=\"text-xl text-forest-300 mb-10 max-w-2xl mx-auto\">\n            {t('home_hero_subtitle')}\n          </p>",
  "<p className=\"text-xl text-forest-300 mb-10 max-w-2xl mx-auto\">\n            {region === 'SG' ? 'Instantly find the cheapest option across FairPrice, RedMart, Cold Storage & more. Why pay extra when you can compare?' : t('home_hero_subtitle')}\n          </p>"
);

fs.writeFileSync('src/views/Home.tsx', content);
console.log('Fixed Home.tsx region logic!');
