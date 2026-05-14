const fs = require('fs');

const path = 'src/views/MealPlanner.tsx';
let content = fs.readFileSync(path, 'utf8');

// Add Flame to imports
const target1 = `CheckCircle2, ShoppingCart } from 'lucide-react';`;
const replace1 = `CheckCircle2, ShoppingCart, Flame } from 'lucide-react';`;
content = content.replace(target1, replace1);

// Add Banner before Configuration Panel
const target2 = `{/* Configuration Panel */}
        {!plan && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl shadow-sm border border-forest-100 p-8 max-w-3xl mx-auto">`;

const replace2 = `{/* ₹1500 Weekly Survival Challenge Banner */}
        {!plan && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto mb-8 p-1 rounded-3xl bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 shadow-xl shadow-amber-500/20">
            <div className="bg-white rounded-[22px] p-6 text-center sm:text-left sm:flex items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-3">
                  <Flame className="w-3.5 h-3.5" /> Viral Challenge
                </div>
                <h3 className="text-xl font-black text-forest-900 mb-2">The ₹1500 Weekly Survival Challenge</h3>
                <p className="text-sm text-forest-600 max-w-md">
                  Can an AI feed a family of 2 for under ₹1500 a week? Take the challenge and get a high-protein, budget-friendly meal plan instantly.
                </p>
              </div>
              <button 
                onClick={() => {
                  setBudget(1500);
                  setFamilySize(2);
                  setDietary('Vegetarian');
                  // We can't auto-generate because generatePlan is defined later, but we can call a submit simulation 
                  // Wait, actually we can just let them click "Generate Plan" or we could trigger it. Let's just prepopulate for now to be safe.
                }}
                className="mt-4 sm:mt-0 w-full sm:w-auto shrink-0 bg-forest-900 hover:bg-forest-800 text-white font-bold py-3 px-6 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                Accept Challenge
              </button>
            </div>
          </motion.div>
        )}

        {/* Configuration Panel */}
        {!plan && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl shadow-sm border border-forest-100 p-8 max-w-3xl mx-auto">`;

content = content.replace(target2, replace2);

fs.writeFileSync(path, content, 'utf8');
console.log('Done replacing MealPlanner.tsx');
