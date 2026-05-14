'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Users, Wallet, Loader2, ShoppingCart, ArrowRight, IndianRupee, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import SEO from '../components/SEO';

// ── Festival data ──────────────────────────────────────────────────────────────
const FESTIVALS = [
  { name: 'Diwali', emoji: '🪔', month: 'October–November', description: 'Festival of Lights' },
  { name: 'Holi', emoji: '🎨', month: 'March', description: 'Festival of Colors' },
  { name: 'Navratri', emoji: '🌺', month: 'September–October', description: '9 Nights of Fasting' },
  { name: 'Eid ul-Fitr', emoji: '🌙', month: 'Varies', description: 'Festival of Breaking Fast' },
  { name: 'Ganesh Chaturthi', emoji: '🐘', month: 'August–September', description: 'Lord Ganesha\'s Birthday' },
  { name: 'Onam', emoji: '🌸', month: 'August–September', description: 'Kerala Harvest Festival' },
  { name: 'Pongal', emoji: '🏺', month: 'January', description: 'Tamil Harvest Festival' },
  { name: 'Durga Puja', emoji: '🙏', month: 'October', description: 'Bengali Festival' },
  { name: 'Baisakhi', emoji: '🌾', month: 'April', description: 'Punjabi Harvest Festival' },
  { name: 'Christmas', emoji: '🎄', month: 'December', description: 'Festival of Joy' },
  { name: 'Karwa Chauth', emoji: '🌖', month: 'October', description: 'Fasting for Husband\'s Longevity' },
  { name: 'Raksha Bandhan', emoji: '🎀', month: 'August', description: 'Sibling Bond Festival' },
];

const DIETS = ['None', 'Vegetarian', 'Vegan', 'Jain', 'Halal'];

interface FestivalItem { item: string; quantity: string; estimatedCost: number; purpose: string; }
interface FestivalResult {
  festival: string;
  essentialItems: FestivalItem[];
  sweets: FestivalItem[];
  decorations: FestivalItem[];
  totalEstimatedCost: number;
  budgetTip: string;
  festivalTip: string;
}

const ItemCard = ({ item }: { item: FestivalItem }) => (
  <div className="flex items-center gap-3 bg-forest-50 border border-forest-100 rounded-xl px-4 py-3">
    <div className="flex-1">
      <p className="font-bold text-forest-900 text-sm">{item.item}</p>
      <p className="text-xs text-forest-500">{item.purpose}</p>
    </div>
    <div className="text-right shrink-0">
      <p className="text-sm font-bold text-forest-800">{item.quantity}</p>
      <p className="text-xs text-amber-600 font-bold">~₹{item.estimatedCost}</p>
    </div>
  </div>
);

export default function FestivalPlanner() {
  const { t } = useTranslation();
  const [selectedFestival, setSelectedFestival] = useState('');
  const [familySize, setFamilySize] = useState(4);
  const [budget, setBudget] = useState(5000);
  const [dietary, setDietary] = useState('None');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<FestivalResult | null>(null);

  const generate = async () => {
    if (!selectedFestival) { setError(t('fest_select_error')); return; }
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/festival-planner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ festival: selectedFestival, familySize, budget, dietary })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const allItems = result ? [...result.essentialItems, ...result.sweets, ...result.decorations] : [];

  return (
    <div className="min-h-screen bg-cream-50 pt-24 pb-16">
      <SEO
        title="Festival Shopping Planner India — Diwali, Holi, Navratri | Fantastic Food"
        description="AI-powered bulk shopping list for every Indian festival. Compare prices on Blinkit, Zepto and save money on Diwali, Holi, Navratri festive groceries."
        canonicalUrl="https://www.fantasticfood.in/festival"
      />
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4" /> {t('fest_mode')}
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display text-forest-900 mb-4">
            {t('fest_title')}
          </h1>
          <p className="text-forest-600 max-w-2xl mx-auto text-lg">
            {t('fest_desc')}
          </p>
        </div>

        {!result ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl shadow-sm border border-forest-100 p-8 max-w-3xl mx-auto">
            {/* Festival selector */}
            <div className="mb-8">
              <label className="block text-forest-900 font-bold mb-4">{t('fest_select')}</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {FESTIVALS.map(f => (
                  <button
                    key={f.name}
                    onClick={() => setSelectedFestival(f.name)}
                    className={`flex flex-col items-center p-3 rounded-2xl border-2 text-center transition-all ${
                      selectedFestival === f.name
                        ? 'border-amber-400 bg-amber-50 shadow-md'
                        : 'border-forest-100 hover:border-forest-300 bg-white'
                    }`}
                  >
                    <span className="text-2xl mb-1">{f.emoji}</span>
                    <span className="font-bold text-forest-900 text-xs leading-tight">{t('fest_name_' + f.name.replace(/[- ]/g, '_'), f.name)}</span>
                    <span className="text-forest-400 text-[10px] mt-0.5">{t('fest_month_' + f.month.toLowerCase().replace(/[^a-z]/g, '_'), f.month)}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Budget */}
              <div>
                <label className="flex items-center justify-between text-forest-900 font-bold mb-3">
                  <span className="flex items-center gap-2"><Wallet className="w-4 h-4 text-amber-500" /> {t('fest_budget')}</span>
                  <span className="text-xl font-black text-amber-600 flex items-center"><IndianRupee className="w-4 h-4" />{budget.toLocaleString()}</span>
                </label>
                <input type="range" min="1000" max="50000" step="500" value={budget}
                  onChange={e => setBudget(Number(e.target.value))} className="w-full accent-amber-500" />
                <div className="flex justify-between text-xs text-forest-400 mt-1"><span>₹1,000</span><span>₹50,000</span></div>
              </div>
              {/* Family size */}
              <div>
                <label className="flex items-center gap-2 text-forest-900 font-bold mb-3">
                  <Users className="w-4 h-4 text-moss-500" /> {t('fest_family')}
                </label>
                <div className="flex items-center gap-4">
                  <button onClick={() => setFamilySize(Math.max(1, familySize - 1))} className="w-10 h-10 rounded-xl bg-forest-100 text-forest-800 font-bold hover:bg-forest-200">-</button>
                  <span className="text-xl font-bold flex-1 text-center">{familySize} {t('fest_people')}</span>
                  <button onClick={() => setFamilySize(familySize + 1)} className="w-10 h-10 rounded-xl bg-forest-100 text-forest-800 font-bold hover:bg-forest-200">+</button>
                </div>
              </div>
            </div>

            {/* Dietary */}
            <div className="mb-8">
              <label className="block text-forest-900 font-bold mb-3">{t('fest_dietary')}</label>
              <div className="flex flex-wrap gap-2">
                {DIETS.map(d => (
                  <button key={d} onClick={() => setDietary(d)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${dietary === d ? 'bg-forest-800 text-white' : 'bg-forest-50 border border-forest-200 text-forest-700 hover:bg-forest-100'}`}>
                    {t('diet_' + d.toLowerCase().replace(' ', '_'), d)}
                  </button>
                ))}
              </div>
            </div>

            {error && <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100 mb-4">{error}</div>}

            <button onClick={generate} disabled={loading || !selectedFestival}
              className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-forest-900 rounded-2xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-[0.98] disabled:opacity-60">
              {loading ? <><Loader2 className="w-5 h-5 animate-spin" /> {t('fest_generating')}</> : <><Sparkles className="w-5 h-5" /> {t('fest_gen_btn', { festival: selectedFestival ? t('fest_name_' + selectedFestival.replace(/[- ]/g, '_'), selectedFestival) : t('fest_gen_placeholder') })}</>}
            </button>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              {/* Summary */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2 bg-linear-to-r from-amber-500 to-orange-500 text-white p-6 rounded-3xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{FESTIVALS.find(f => f.name === result.festival)?.emoji}</span>
                    <div>
                      <h2 className="text-2xl font-black font-display">{t('fest_summary_title', { festival: t('fest_name_' + result.festival.replace(/[- ]/g, '_'), result.festival) })}</h2>
                      <p className="text-amber-100 text-sm">{t('fest_summary_sub', { familySize, budget: budget.toLocaleString() })}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/20 rounded-xl p-3 text-center">
                      <p className="text-2xl font-black">₹{result.totalEstimatedCost?.toLocaleString()}</p>
                      <p className="text-xs text-amber-100">{t('fest_est_total')}</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-3 text-center">
                      <p className="text-2xl font-black">{allItems.length}</p>
                      <p className="text-xs text-amber-100">{t('fest_total_items')}</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-3 text-center">
                      <p className="text-2xl font-black">₹{Math.max(0, budget - (result.totalEstimatedCost || 0)).toLocaleString()}</p>
                      <p className="text-xs text-amber-100">{t('fest_budget_left')}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-forest-800 text-white p-6 rounded-3xl flex flex-col gap-3">
                  <Lightbulb className="w-6 h-6 text-amber-400" />
                  <p className="text-sm font-bold text-amber-300">{t('fest_budget_tip')}</p>
                  <p className="text-forest-200 text-sm italic">"{result.budgetTip}"</p>
                  <p className="text-sm font-bold text-amber-300 mt-2">{t('fest_best_time')}</p>
                  <p className="text-forest-200 text-sm italic">"{result.festivalTip}"</p>
                </div>
              </div>

              {/* Items */}
              {[
                { title: t('fest_sec_essentials'), items: result.essentialItems },
                { title: t('fest_sec_sweets'), items: result.sweets },
                { title: t('fest_sec_decorations'), items: result.decorations },
              ].map(section => section.items?.length > 0 && (
                <div key={section.title} className="bg-white p-6 rounded-3xl border border-forest-100 shadow-sm">
                  <h3 className="font-black text-forest-900 text-lg mb-4">{section.title}</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {section.items.map((item, i) => <ItemCard key={i} item={item} />)}
                  </div>
                </div>
              ))}

              {/* CTA */}
              <div className="bg-white border border-amber-200 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                <div>
                  <h3 className="font-black text-forest-900 text-lg">{t('fest_compare_title')}</h3>
                  <p className="text-forest-600 text-sm">{t('fest_compare_desc')}</p>
                </div>
                <Link href={`/basket?prefill=${encodeURIComponent(allItems.map(i => i.item).join(','))}`}
                  className="bg-amber-500 hover:bg-amber-600 text-forest-900 font-bold px-6 py-3 rounded-xl flex items-center gap-2 whitespace-nowrap transition-colors">
                  <ShoppingCart className="w-4 h-4" /> {t('fest_compare_btn')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="text-center">
                <button onClick={() => { setResult(null); setSelectedFestival(''); }}
                  className="text-forest-600 font-bold hover:text-forest-900 underline">{t('fest_plan_another')}</button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
