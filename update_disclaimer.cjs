const fs = require('fs');
const path = 'src/i18n/config.ts';

let code = fs.readFileSync(path, 'utf8');

code = code.replace(
  /"footer_disclaimer":\s*"Fantastic Food is an independent comparison platform and is not affiliated with Blinkit, Zepto, or any other brand mentioned."/,
  `"footer_disclaimer": "Fantastic Food is an independent price comparison platform. All product names, logos, and brands are property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement."`
);

fs.writeFileSync(path, code);
console.log('Updated footer_disclaimer in English config.ts');
