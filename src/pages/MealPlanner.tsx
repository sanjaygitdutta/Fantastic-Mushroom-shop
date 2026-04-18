import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Wallet, Users, Utensils, ArrowRight, Loader2, IndianRupee, Sparkles, CheckCircle2, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useAuth } from '../context/AuthContext';

interface Meal {
  name: string;
  ingredients: string[];
}

interface DayPlan {
  day: number;
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
}

interface MealPlanResponse {
  estimatedCost: number;
  savingsTip: string;
  shoppingList: { item: string; quantity: string }[];
  days: DayPlan[];
}

const DIETS = ['None', 'Vegetarian', 'Vegan', 'Jain', 'High Protein', 'Keto', 'Diabetes Friendly'];

const MealPlanner = () => {
  const { user } = useAuth();
  
  const [budget, setBudget] = useState(1500);
  const [dietary, setDietary] = useState('Vegetarian');
  const [familySize, setFamilySize] = useState(2);
  const [days] = useState(7);
  
  // Update from profile when it loads
  useEffect(() => {
    if (user?.profile?.dietaryPreference) {
        setDietary(user.profile.dietaryPreference);
    }
    if (user?.profile?.familySize) {
        setFamilySize(user.profile.familySize);
    }
  }, [user]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [plan, setPlan] = useState<MealPlanResponse | null>(null);

  const generatePlan = async () => {
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('/api/generate-meal-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ budget, dietary, familySize, days })
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to generate specific plan');
      }
      
      setPlan(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 pt-24 pb-16">
      <SEO
        title="Weekly AI Meal Planner (Budget-Based) — Fantastic Food"
        description="Generate a 7-day grocery meal plan that strictly fits your weekly budget constraints."
        canonicalUrl="https://www.fantasticfood.in/meal-planner"
      />

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-moss-100 text-moss-800 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4" /> AI Powered Beta
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display text-forest-900 mb-4">
            Weekly Meal Planner
          </h1>
          <p className="text-forest-600 max-w-2xl mx-auto text-lg">
            Tell us your budget and dietary preferences. Our AI will craft an exact {days}-day Indian menu and shopping list strictly within your budget limit.
          </p>
        </div>

        {/* Configuration Panel */}
        {!plan && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl shadow-sm border border-forest-100 p-8 max-w-3xl mx-auto">
            <div className="space-y-8">
              
              {/* Budget */}
              <div>
                <label className="flex items-center justify-between text-forest-900 font-bold mb-4">
                  <span className="flex items-center gap-2"><Wallet className="w-5 h-5 text-amber-500" /> Weekly Grocery Budget</span>
                  <span className="text-2xl font-black text-amber-500 flex items-center">
                    <IndianRupee className="w-5 h-5" />{budget}
                  </span>
                </label>
                <input 
                  type="range" 
                  min="500" max="10000" step="100"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
                <div className="flex justify-between text-xs text-forest-400 mt-2">
                  <span>₹500</span><span>₹10,000</span>
                </div>
              </div>

              {/* Grid Options */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="flex items-center gap-2 text-forest-900 font-bold mb-3">
                    <Utensils className="w-4 h-4 text-moss-500" /> Dietary Preference
                  </label>
                  <select 
                    value={dietary} 
                    onChange={e => setDietary(e.target.value)}
                    className="w-full p-3 rounded-xl border border-forest-200 bg-forest-50 focus:border-moss-500 outline-none"
                  >
                    {DIETS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-forest-900 font-bold mb-3">
                    <Users className="w-4 h-4 text-moss-500" /> Family Size
                  </label>
                  <div className="flex items-center gap-4">
                    <button onClick={() => setFamilySize(Math.max(1, familySize - 1))} className="w-10 h-10 rounded-xl bg-forest-100 text-forest-800 font-bold hover:bg-forest-200">-</button>
                    <span className="text-xl font-bold flex-1 text-center">{familySize} {familySize === 1 ? 'Person' : 'People'}</span>
                    <button onClick={() => setFamilySize(familySize + 1)} className="w-10 h-10 rounded-xl bg-forest-100 text-forest-800 font-bold hover:bg-forest-200">+</button>
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100">
                  {error}
                </div>
              )}

              <button 
                onClick={generatePlan}
                disabled={loading}
                className="w-full py-4 bg-forest-900 hover:bg-forest-800 text-cream-100 rounded-2xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Crunching Prices...</>
                ) : (
                  <><ChefHat className="w-5 h-5" /> Generate Meal Plan</>
                )}
              </button>

            </div>
          </motion.div>
        )}

        {/* Results Render */}
        <AnimatePresence>
          {plan && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              
              {/* Dashboard */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-forest-100 shadow-sm col-span-2">
                  <h2 className="text-xl font-black font-display text-forest-900 mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-moss-500" /> AI Optimization Complete
                  </h2>
                  <p className="text-forest-600 text-sm mb-6">Generated {days}-day plan for {familySize} people on a {dietary} diet.</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-cream-100 p-4 rounded-2xl">
                      <p className="text-forest-500 text-xs font-bold uppercase tracking-wider mb-1">Target Budget</p>
                      <p className="text-2xl font-black text-forest-900">₹{budget}</p>
                    </div>
                    <div className="bg-amber-100 p-4 rounded-2xl">
                      <p className="text-amber-800 text-xs font-bold uppercase tracking-wider mb-1">Estimated Cost</p>
                      <p className="text-2xl font-black text-amber-900">₹{plan.estimatedCost}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-moss-900 text-white p-6 rounded-3xl border border-moss-800 shadow-sm flex flex-col justify-center">
                  <Sparkles className="w-8 h-8 text-amber-400 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Chef Aika's Tip</h3>
                  <p className="text-moss-200 text-sm italic">"{plan.savingsTip}"</p>
                </div>
              </div>

              {/* Shopping List -> Basket CTA */}
              <div className="bg-white p-6 rounded-3xl border border-amber-200 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                  <div>
                    <h2 className="text-xl font-black font-display text-forest-900 flex items-center gap-2">
                      <ShoppingCart className="w-5 h-5 text-amber-500" /> Generated Shopping List
                    </h2>
                    <p className="text-forest-600 text-sm mt-1">Found {plan.shoppingList.length} core ingredients required for this week.</p>
                  </div>
                  <Link 
                    to="/basket" 
                    state={{ prefill: plan.shoppingList.map(s => s.item) }}
                    className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors whitespace-nowrap"
                  >
                    Compare List Prices <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {plan.shoppingList.map((item, i) => (
                    <div key={i} className="bg-forest-50 border border-forest-100 px-3 py-1.5 rounded-lg text-sm text-forest-800 font-medium">
                      {item.item} <span className="text-forest-400 font-normal ml-1 border-l border-forest-200 pl-2">{item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendar grid */}
              <div className="space-y-4">
                <h2 className="text-2xl font-black font-display text-forest-900">Your {days}-Day Menu</h2>
                <div className="grid gap-4">
                  {plan.days.map((day) => (
                    <div key={day.day} className="bg-white p-6 rounded-3xl border border-forest-100 shadow-sm">
                      <h3 className="text-lg font-black text-forest-800 mb-4 pb-2 border-b border-forest-50">Day {day.day}</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        {['breakfast', 'lunch', 'dinner'].map((mealType) => {
                          const meal = day[mealType as keyof DayPlan] as Meal;
                          if (!meal) return null;
                          return (
                            <div key={mealType}>
                              <p className="text-xs font-bold text-moss-500 uppercase tracking-widest mb-1">{mealType}</p>
                              <p className="font-bold text-forest-900 mb-2">{meal.name}</p>
                              <div className="flex flex-wrap gap-1">
                                {meal.ingredients.slice(0, 3).map((ing, i) => (
                                  <span key={i} className="text-[10px] bg-forest-50 text-forest-600 px-1.5 py-0.5 rounded capitalize">{ing}</span>
                                ))}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center pt-8">
                <button 
                  onClick={() => setPlan(null)}
                  className="text-forest-600 font-bold hover:text-forest-900 underline"
                >
                  Start Over
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default MealPlanner;
