'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Camera, ArrowRight, Share2, Flame, Leaf, Zap, Crown } from 'lucide-react';
import confetti from 'canvas-confetti';

const QUESTIONS = [
  {
    question: "What's your ideal weekend food vibe?",
    options: [
      { text: "Late night street food hopping", type: 'A' },
      { text: "Aesthetic cafe brunch date", type: 'B' },
      { text: "Chaotic 2AM fridge raiding", type: 'C' },
      { text: "Fancy fine dining experience", type: 'D' },
    ]
  },
  {
    question: "How much spice can you handle?",
    options: [
      { text: "Bring the absolute fire 🔥", type: 'A' },
      { text: "Just a gentle, warm kick", type: 'B' },
      { text: "I put hot sauce on ice cream", type: 'C' },
      { text: "Zero. I find mayo spicy", type: 'D' },
    ]
  },
  {
    question: "Choose your elixir:",
    options: [
      { text: "Strong Black Coffee", type: 'A' },
      { text: "Iced Matcha Latte", type: 'B' },
      { text: "Neon Energy Drink", type: 'C' },
      { text: "Vintage Red Wine", type: 'D' },
    ]
  },
  {
    question: "What is your cooking style?",
    options: [
      { text: "Fast, loud, and intense", type: 'A' },
      { text: "Following the recipe exactly", type: 'B' },
      { text: "Throwing random things in a pan", type: 'C' },
      { text: "Meticulous meal prep", type: 'D' },
    ]
  }
];

const AURAS = {
  'A': {
    name: 'Neon Spice Demon',
    title: 'The Fire Breather',
    description: 'You thrive in the chaos of late nights and intense flavors. Your energy is electric, bold, and you never back down from a challenge—or a ghost pepper.',
    colors: 'from-red-600 via-pink-600 to-purple-900',
    textColor: 'text-red-100',
    icon: <Flame className="w-16 h-16 text-red-400" />
  },
  'B': {
    name: 'Zen Matcha Master',
    title: 'The Aesthetic Soul',
    description: 'Balance is your middle name. You appreciate the subtle, beautiful things in life. Your food isn\'t just fuel, it\'s an Instagram-worthy work of art.',
    colors: 'from-emerald-300 via-teal-200 to-green-100',
    textColor: 'text-teal-900',
    icon: <Leaf className="w-16 h-16 text-emerald-600" />
  },
  'C': {
    name: 'Flavor Goblin',
    title: 'The Chaotic Chef',
    description: 'Rules? What rules? You are an agent of culinary chaos. You mix sweet with savory and create unholy masterpieces at 3 AM. We fear and respect you.',
    colors: 'from-fuchsia-500 via-cyan-400 to-yellow-400',
    textColor: 'text-white',
    icon: <Zap className="w-16 h-16 text-yellow-300" />
  },
  'D': {
    name: 'Saffron Royalty',
    title: 'The Refined Palate',
    description: 'You have expensive taste and you know it. You prefer quality over quantity, and your standards are sky-high. You are the VIP of the dining table.',
    colors: 'from-yellow-500 via-amber-700 to-black',
    textColor: 'text-amber-100',
    icon: <Crown className="w-16 h-16 text-yellow-500" />
  }
};

export default function AuraQuiz() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<keyof typeof AURAS | null>(null);
  const [refCode, setRefCode] = useState('SHARE');

  useEffect(() => {
    // Get their viral referral code to put on the poster
    const code = localStorage.getItem('fantastic_ref_code');
    if (code) setRefCode(code);
  }, []);

  const handleAnswer = (type: string) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate Result
      setIsAnalyzing(true);
      setStep(step + 1);
      
      setTimeout(() => {
        // Find most frequent answer
        const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
        newAnswers.forEach(ans => counts[ans]++);
        const winningAura = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b) as keyof typeof AURAS;
        
        setResult(winningAura);
        setIsAnalyzing(false);
        confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 } });
      }, 3000); // 3 second dramatic pause
    }
  };

  const auraData = result ? AURAS[result] : null;

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col pt-20">
      
      {/* Intro Screen */}
      <AnimatePresence mode="wait">
        {step === -1 && (
          <motion.div key="intro" exit={{ opacity: 0, y: -50 }} className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(168,85,247,0.5)]">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">What is your<br/>Food Aura?</h1>
            <p className="text-xl text-gray-400 mb-12 max-w-md">Take the 4-question AI taste test to discover your culinary personality.</p>
            <button 
              onClick={() => setStep(0)}
              className="px-8 py-4 bg-white text-black rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center gap-2"
            >
              Start Quiz <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Question Screens */}
        {step >= 0 && step < QUESTIONS.length && (
          <motion.div key={`q-${step}`} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="flex-1 flex flex-col max-w-2xl mx-auto w-full p-6 pt-12">
            <div className="mb-12">
              <div className="text-fuchsia-400 font-bold mb-2 tracking-widest text-sm uppercase">Question {step + 1} of {QUESTIONS.length}</div>
              <h2 className="text-3xl md:text-4xl font-black leading-tight">{QUESTIONS[step].question}</h2>
            </div>

            <div className="space-y-4">
              {QUESTIONS[step].options.map((opt, i) => (
                <button 
                  key={i}
                  onClick={() => handleAnswer(opt.type)}
                  className="w-full text-left p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-fuchsia-500 hover:bg-gray-800 transition-all text-xl font-medium"
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Analyzing Screen */}
        {isAnalyzing && (
          <motion.div key="analyzing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-32 h-32 relative mb-8">
              <div className="absolute inset-0 border-4 border-t-fuchsia-500 border-r-cyan-500 border-b-yellow-500 border-l-emerald-500 rounded-full animate-spin"></div>
              <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white animate-pulse" />
              </div>
            </div>
            <h2 className="text-3xl font-black mb-2">Analyzing your taste profile...</h2>
            <p className="text-gray-400">Consulting Chef Aika...</p>
          </motion.div>
        )}

        {/* Result Screen */}
        {result && auraData && (
          <motion.div key="result" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex-1 flex flex-col items-center p-6 pb-24">
            
            <div className="w-full max-w-md text-center mb-6">
              <p className="text-gray-400 flex items-center justify-center gap-2 mb-2"><Camera className="w-4 h-4" /> Screenshot to share on your story</p>
            </div>

            {/* The "Instagram Story" Card */}
            <div className={`w-full max-w-md aspect-[4/5] rounded-[2rem] bg-gradient-to-br ${auraData.colors} p-8 flex flex-col relative overflow-hidden shadow-2xl`}>
              
              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black opacity-20 rounded-full blur-3xl"></div>

              <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10">
                <div className="mb-6 drop-shadow-2xl">{auraData.icon}</div>
                <div className={`font-bold tracking-widest uppercase text-sm mb-2 opacity-80 ${auraData.textColor}`}>{auraData.title}</div>
                <h2 className={`text-5xl font-black mb-6 leading-none ${auraData.textColor}`}>{auraData.name}</h2>
                <p className={`text-lg font-medium opacity-90 leading-snug ${auraData.textColor}`}>{auraData.description}</p>
              </div>

              {/* Card Footer / Viral Loop element */}
              <div className={`mt-auto pt-6 border-t border-white/20 flex items-center justify-between relative z-10 ${auraData.textColor}`}>
                <div>
                  <div className="text-xs font-bold opacity-70 uppercase tracking-wider">Find your aura at</div>
                  <div className="font-black text-sm">FantasticFood.in</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold opacity-70 uppercase tracking-wider">Invite Code</div>
                  <div className="font-mono font-black">{refCode}</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 w-full max-w-md space-y-4">
              <a 
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`I just found out I'm a ${auraData.name} on Fantastic Food! What's your Food Aura? Find out here: https://fantasticfood.in/en/aura?ref=${refCode}`)}`}
                target="_blank" rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-black text-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
              >
                <Share2 className="w-5 h-5" /> Share Quiz on WhatsApp
              </a>
              <p className="text-center text-gray-500 text-sm">
                When 3 friends take the quiz using your link, you unlock the Premium Daily Zepto Coupon!
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
