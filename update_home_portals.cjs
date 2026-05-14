const fs = require('fs');

const homePath = 'src/views/Home.tsx';
let content = fs.readFileSync(homePath, 'utf8');

const target = `{/* ── Mushroom Shop Spotlight ── */}`;

const portalsHTML = `
      {/* ── Viral Portals ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Portal 1: Weekly Challenge */}
          <Link href="/meal-planner" className="group relative bg-linear-to-br from-amber-400 via-amber-500 to-amber-600 rounded-[32px] p-8 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/40">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110 blur-xl" />
            <div className="relative z-10 text-forest-900">
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-200/50 backdrop-blur-sm px-3 py-1 rounded-full mb-4 border border-amber-300/50">
                <Flame className="w-3.5 h-3.5" /> Viral Challenge
              </div>
              <h3 className="text-3xl font-black font-display mb-3 leading-tight">The ₹1500 Weekly Food Challenge</h3>
              <p className="text-forest-800 font-medium mb-8 max-w-sm">Can AI feed a family of 2 for under ₹1500 a week? Take the challenge and save money.</p>
              <span className="inline-flex items-center justify-center w-full sm:w-auto bg-forest-900 text-white font-bold px-6 py-3 rounded-xl gap-2 group-hover:bg-forest-800 transition-colors">
                Accept Challenge <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Portal 2: Chef Aika */}
          <Link href="/chef-aika" className="group relative bg-linear-to-br from-forest-800 via-forest-900 to-forest-950 rounded-[32px] p-8 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-moss-500/20 border border-forest-700">
            <div className="absolute top-0 right-0 w-48 h-48 bg-moss-500/20 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110 blur-xl" />
            <div className="relative z-10 text-white">
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-moss-400 bg-moss-900/50 backdrop-blur-sm px-3 py-1 rounded-full mb-4 border border-moss-800">
                <Sparkles className="w-3.5 h-3.5" /> AI Sous-Chef
              </div>
              <h3 className="text-3xl font-black font-display mb-3 leading-tight text-white">Scan Your Fridge with Chef Aika</h3>
              <p className="text-forest-300 mb-8 max-w-sm">Don't know what to cook? Let AI scan your ingredients and generate a 5-star recipe instantly.</p>
              <span className="inline-flex items-center justify-center w-full sm:w-auto bg-moss-500 text-forest-900 font-bold px-6 py-3 rounded-xl gap-2 group-hover:bg-moss-400 transition-colors">
                Try Chef Aika Free <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Mushroom Shop Spotlight ── */}`;

content = content.replace(target, portalsHTML);

// Need to make sure Flame is imported
const targetImport = `import { ArrowRight, TrendingDown, Zap, Shield, Star } from 'lucide-react';`;
const replaceImport = `import { ArrowRight, TrendingDown, Zap, Shield, Star, Flame, Sparkles } from 'lucide-react';`;

content = content.replace(targetImport, replaceImport);

fs.writeFileSync(homePath, content, 'utf8');
console.log('Portals added to Home page');
