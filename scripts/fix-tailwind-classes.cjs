const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('C:\\Users\\abcom\\Desktop\\Fantastic food\\src');
let changedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // Replacements for Tailwind v4
  content = content.replace(/flex-shrink-0/g, 'shrink-0');
  content = content.replace(/flex-grow/g, 'grow');
  content = content.replace(/bg-gradient-to-b\b/g, 'bg-linear-to-b');
  content = content.replace(/bg-gradient-to-r\b/g, 'bg-linear-to-r');
  content = content.replace(/bg-gradient-to-tr\b/g, 'bg-linear-to-tr');
  content = content.replace(/bg-gradient-to-br\b/g, 'bg-linear-to-br');
  content = content.replace(/bg-gradient-to-tl\b/g, 'bg-linear-to-tl');
  content = content.replace(/bg-gradient-to-bl\b/g, 'bg-linear-to-bl');
  content = content.replace(/bg-gradient-to-t\b/g, 'bg-linear-to-t');
  content = content.replace(/bg-gradient-to-l\b/g, 'bg-linear-to-l');
  
  // Specific warnings
  content = content.replace(/aspect-\[4\/5\]/g, 'aspect-4/5');
  content = content.replace(/rounded-\[2rem\]/g, 'rounded-4xl');
  content = content.replace(/z-\[60\]/g, 'z-60');
  content = content.replace(/!text-green-500/g, 'text-green-500!');
  content = content.replace(/!text-red-500/g, 'text-red-500!');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    changedCount++;
  }
});

console.log(`Updated ${changedCount} files.`);
