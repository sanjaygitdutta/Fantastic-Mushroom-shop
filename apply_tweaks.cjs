const fs = require('fs');

// 1. Update MealPlanner.tsx
const mealPath = 'src/views/MealPlanner.tsx';
let mealContent = fs.readFileSync(mealPath, 'utf8');

// Replace generatePlan signature
mealContent = mealContent.replace(
  'const generatePlan = async () => {',
  'const generatePlan = async (overrideBudget?: number, overrideDiet?: string, overrideSize?: number) => {'
);

mealContent = mealContent.replace(
  'body: JSON.stringify({ budget, dietary, familySize, days })',
  'body: JSON.stringify({ budget: overrideBudget ?? budget, dietary: overrideDiet ?? dietary, familySize: overrideSize ?? familySize, days })'
);

// Replace button click
mealContent = mealContent.replace(
  `onClick={() => {
                  setBudget(1500);
                  setFamilySize(2);
                  setDietary('Vegetarian');
                  // We can't auto-generate because generatePlan is defined later, but we can call a submit simulation 
                  // Wait, actually we can just let them click "Generate Plan" or we could trigger it. Let's just prepopulate for now to be safe.
                }}`,
  `onClick={() => {
                  setBudget(1500);
                  setFamilySize(2);
                  setDietary('Vegetarian');
                  generatePlan(1500, 'Vegetarian', 2);
                }}`
);

// We need to move generatePlan definition above the return statement, which it already is. But the "onClick={() => generatePlan()}" in the main generate button needs to pass no args.
mealContent = mealContent.replace(
  `onClick={generatePlan}`,
  `onClick={() => generatePlan()}`
);

fs.writeFileSync(mealPath, mealContent, 'utf8');


// 2. Update ChefAika.tsx
const aikaPath = 'src/views/ChefAika.tsx';
let aikaContent = fs.readFileSync(aikaPath, 'utf8');

// Add sharedRecipe state
aikaContent = aikaContent.replace(
  'const [dailyRecipeUsage, setDailyRecipeUsage] = useState(0);',
  `const [sharedRecipeName, setSharedRecipeName] = useState('');\n  const [dailyRecipeUsage, setDailyRecipeUsage] = useState(0);`
);

// Read from URL
aikaContent = aikaContent.replace(
  `const params = new URLSearchParams(window.location.search);
    const extImgUrl = params.get('imgUrl');`,
  `const params = new URLSearchParams(window.location.search);
    const extImgUrl = params.get('imgUrl');
    const sharedName = params.get('shared');
    if (sharedName) {
      setSharedRecipeName(sharedName);
      window.history.replaceState({}, document.title, window.location.pathname);
    }`
);

// Add Banner HTML right after the <SEO> component
const bannerHTML = `
      <AnimatePresence>
        {sharedRecipeName && (
          <motion.div initial={{opacity: 0, y: -50}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, scale: 0.9}} className="fixed top-20 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[400px] z-50 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-4 shadow-2xl shadow-amber-500/30 border-2 border-amber-300">
            <button onClick={() => setSharedRecipeName('')} className="absolute top-2 right-2 text-amber-900 hover:bg-amber-400/50 p-1 rounded-full"><X className="w-4 h-4" /></button>
            <div className="flex items-start gap-3">
              <div className="text-3xl mt-1">😲</div>
              <div>
                <h4 className="font-black text-amber-950 text-sm mb-1">Your friend just made {sharedRecipeName.replace(/_/g, ' ')}!</h4>
                <p className="text-xs text-amber-900 font-medium">Want to see what Chef Aika can make with YOUR fridge? Scan your ingredients now!</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
`;

aikaContent = aikaContent.replace(
  `<div className="min-h-screen pt-16" style={{ background: '#0F2419' }}>`,
  `      ${bannerHTML}\n      <div className="min-h-screen pt-16" style={{ background: '#0F2419' }}>`
);

// Update WhatsApp Link
aikaContent = aikaContent.replace(
  `href={\`https://api.whatsapp.com/send?text=\${encodeURIComponent("An AI just generated a custom 5-star dinner recipe for exactly what I have in my fridge! Try it for free before they start charging for it: https://www.fantasticfood.in/chef-aika")}\`}`,
  `href={\`https://api.whatsapp.com/send?text=\${encodeURIComponent(\`An AI just generated a custom 5-star dinner recipe for exactly what I have in my fridge! Try it for free before they start charging for it: https://www.fantasticfood.in/chef-aika?shared=\${recipe.name.replace(/\\s+/g, '_')}\`)}\`}`
);

fs.writeFileSync(aikaPath, aikaContent, 'utf8');

console.log('Tweaks applied successfully!');
