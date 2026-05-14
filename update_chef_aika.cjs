const fs = require('fs');

const path = 'src/views/ChefAika.tsx';
let content = fs.readFileSync(path, 'utf8');

const target1 = `Gift } from 'lucide-react';`;
const replace1 = `Gift, MessageCircle } from 'lucide-react';`;
content = content.replace(target1, replace1);

const target2 = `                      </div>
                      <Link href={\`/community?recipeName=\${encodeURIComponent(recipe.name)}&recipeIngredients=\${encodeURIComponent(recipe.ingredients_used.join(','))}\`}`;

const replace2 = `                      </div>

                      {/* Viral WhatsApp Loop */}
                      <a href={\`https://api.whatsapp.com/send?text=\${encodeURIComponent("An AI just generated a custom 5-star dinner recipe for exactly what I have in my fridge! Try it for free before they start charging for it: https://www.fantasticfood.in/chef-aika")}\`}
                        target="_blank" rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-black transition-all hover:scale-[1.02] shadow-lg shadow-[#25D366]/20"
                        style={{ background: '#25D366', color: '#0F2419' }}
                      >
                        <MessageCircle className="w-5 h-5 fill-current" /> Blast to WhatsApp
                      </a>

                      <Link href={\`/community?recipeName=\${encodeURIComponent(recipe.name)}&recipeIngredients=\${encodeURIComponent(recipe.ingredients_used.join(','))}\`}`;
                      
content = content.replace(target2, replace2);

fs.writeFileSync(path, content, 'utf8');
console.log('Done replacing ChefAika.tsx');
