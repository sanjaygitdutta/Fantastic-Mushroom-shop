const fs = require('fs');

const path = 'src/i18n/dictionary.ts';
let code = fs.readFileSync(path, 'utf8');

// Update SUPPORTED_LANGUAGES
code = code.replace(
  `  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' }\n]`,
  `  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },\n  { code: 'zh-CN', name: 'Mandarin', nativeName: '中文' },\n  { code: 'ms', name: 'Malay', nativeName: 'Melayu' }\n]`
);

// Update FOOD_DICTIONARY entries using regex
// Matches: `en: 'Tomato', hi: 'टमाटर', bn: 'টমেটো', mr: 'टोमॅटो', te: 'టమాటా', ta: 'தக்காளி'`
// And appends `zh-CN` and `ms` using the english word as a generic fallback since English-first is the goal.
code = code.replace(/({ en: '(.*?)', hi: '.*?', bn: '.*?', mr: '.*?', te: '.*?', ta: '.*?' })/g, (match, fullMatch, enWord) => {
  return fullMatch.replace(' }', `, 'zh-CN': '${enWord}', ms: '${enWord}' }`);
});

// Update SEO_TEMPLATES
code = code.replace(
  `  ta: "இன்றைய {item} விலை — பிளிங்கிட், செப்டோ மற்றும் பலவற்றை ஒப்பிடுக"\n};`,
  `  ta: "இன்றைய {item} விலை — பிளிங்கிட், செப்டோ மற்றும் பலவற்றை ஒப்பிடுக",\n  'zh-CN': "{item} 价格 — 今天实际价格 | 比较 FairPrice, RedMart 等",\n  ms: "Harga {item} — Harga Sebenar Hari Ini | Bandingkan FairPrice, RedMart & Lebih Lanjut"\n};`
);

fs.writeFileSync(path, code);
console.log('Dictionary updated!');
