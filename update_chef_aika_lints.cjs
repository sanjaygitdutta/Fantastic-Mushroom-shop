const fs = require('fs');

const aikaPath = 'src/views/ChefAika.tsx';
let aikaContent = fs.readFileSync(aikaPath, 'utf8');

// Fix 1: Remove refCode
aikaContent = aikaContent.replace(`const [refCode, setRefCode] = useState('');\n  const [hasCheckedPro, setHasCheckedPro] = useState(false);`, `const [hasCheckedPro, setHasCheckedPro] = useState(false);`);

aikaContent = aikaContent.replace(
  `      const code = localStorage.getItem('fantastic_ref_code');
      if (code) {
        setRefCode(code);
        supabase.from('viral_referrals').select('click_count').eq('ref_code', code).single()`,
  `      const code = localStorage.getItem('fantastic_ref_code');
      if (code) {
        supabase.from('viral_referrals').select('click_count').eq('ref_code', code).single()`
);

// Fix 2: bg-gradient-to-br to bg-linear-to-br
aikaContent = aikaContent.replace(
  `bg-gradient-to-br from-amber-500 to-amber-600`,
  `bg-linear-to-br from-amber-500 to-amber-600`
);

// Fix 3: Add the missing WhatsApp button (which also fixes the MessageCircle lint)
const oldActions = `                        </Link>
                      </div>
                      <Link href={\`/community?recipeName=\${encodeURIComponent(recipe.name)}&recipeIngredients=\${encodeURIComponent(recipe.ingredients_used.join(','))}\`}`;

const newActions = `                        </Link>
                      </div>

                      {/* Viral WhatsApp Loop */}
                      <a href={\`https://api.whatsapp.com/send?text=\${encodeURIComponent(\`An AI just generated a custom 5-star dinner recipe for exactly what I have in my fridge! Try it for free before they start charging for it: https://www.fantasticfood.in/chef-aika?shared=\${recipe.name.replace(/\\s+/g, '_')}\`)}\`}
                        target="_blank" rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-black transition-all hover:scale-[1.02] shadow-lg shadow-[#25D366]/20"
                        style={{ background: '#25D366', color: '#0F2419' }}
                      >
                        <MessageCircle className="w-5 h-5 fill-current" /> Blast to WhatsApp
                      </a>

                      <Link href={\`/community?recipeName=\${encodeURIComponent(recipe.name)}&recipeIngredients=\${encodeURIComponent(recipe.ingredients_used.join(','))}\`}`;

aikaContent = aikaContent.replace(oldActions, newActions);

fs.writeFileSync(aikaPath, aikaContent, 'utf8');
console.log('Fixed lints and added WhatsApp button');
