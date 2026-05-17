const fs = require('fs');
const code = fs.readFileSync('src/i18n/config.ts', 'utf8');

const startIndex = code.indexOf("'en': {");
const endIndex = code.indexOf("'hi': {", startIndex);
let enBlock = code.substring(startIndex, endIndex);

// Just print out the number of keys
const lines = enBlock.split('\n');
const keyLines = lines.filter(l => l.includes('": "'));
console.log("Number of keys: " + keyLines.length);

// Also save it to a file so I can read it
fs.writeFileSync('en_keys.json', enBlock);
