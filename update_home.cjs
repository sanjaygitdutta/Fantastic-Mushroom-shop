const fs = require('fs');

const path = 'src/views/Home.tsx';
let code = fs.readFileSync(path, 'utf8');

// 1. Add imports
if (!code.includes('import { useRegion, formatCurrency }')) {
  code = code.replace(
    "import { useTranslation, Trans } from 'react-i18next';",
    "import { useTranslation, Trans } from 'react-i18next';\nimport { useRegion, formatCurrency } from '../utils/region';"
  );
}

// 2. Add SG_PLATFORM_LOGOS
if (!code.includes('const SG_PLATFORM_LOGOS')) {
  code = code.replace(
    /];\n\nconst HOW_IT_WORKS/,
    `];\n\nconst SG_PLATFORM_LOGOS = [\n  { name: 'FairPrice', emoji: '🛒', color: '#0054A6' },\n  { name: 'RedMart', emoji: '🔴', color: '#E1251B' },\n  { name: 'Cold Storage', emoji: '❄️', color: '#00833E' },\n  { name: 'Sheng Siong', emoji: '🟢', color: '#006B3F' },\n  { name: 'Giant', emoji: '🐘', color: '#FFD100' },\n  { name: 'Amazon Fresh', emoji: '📦', color: '#FF9900' },\n];\n\nconst HOW_IT_WORKS`
  );
}

// 3. Add useRegion to Home
if (!code.includes('const activeLogos =')) {
  code = code.replace(
    "const { t } = useTranslation();",
    "const { t } = useTranslation();\n  const { region } = useRegion();\n  const activeLogos = region === 'SG' ? SG_PLATFORM_LOGOS : PLATFORM_LOGOS;"
  );
}

// 4. Update logos map
code = code.replace(/PLATFORM_LOGOS\.map\(\(p\)/g, "activeLogos.map((p)");

// 5. Update savings value and format
code = code.replace(
  "const dailySavings = 45 + Math.floor(pseudoRandom(seed + 2) * 13);",
  "const dailySavings = region === 'SG' ? 12 + Math.floor(pseudoRandom(seed + 2) * 4) : 45 + Math.floor(pseudoRandom(seed + 2) * 13);\n              const savingsSuffix = region === 'SG' ? 'S$' : '₹';"
);
code = code.replace(
  "{ label: t('home_avg_savings'), value: dailySavings, suffix: '₹' },",
  "{ label: t('home_avg_savings'), value: dailySavings, suffix: savingsSuffix },"
);

fs.writeFileSync(path, code);
console.log('Home.tsx updated!');
