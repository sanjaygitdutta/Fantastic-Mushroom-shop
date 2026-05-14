'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Share2, MessageCircle, Lock, Unlock, Copy, CheckCircle2, TrendingUp, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { supabase } from '../../../lib/supabase';

// Mock daily coupon for the reveal
const DAILY_PREMIUM_COUPON = {
  platform: 'Zepto',
  code: 'ZEPTOPRO50',
  discount: 'Flat ₹50 OFF + Free Delivery',
  expires: 'Tonight at 11:59 PM'
};

export default function RewardsPage() {
  const [refCode, setRefCode] = useState<string | null>(null);
  const [clicks, setClicks] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const TARGET_CLICKS = 3;

  useEffect(() => {
    async function initializeReferral() {
      // Check local storage for existing code
      let code = localStorage.getItem('fantastic_ref_code');
      
      if (!code) {
        // Generate new random 6-character code
        code = Math.random().toString(36).substring(2, 8).toUpperCase();
        localStorage.setItem('fantastic_ref_code', code);
        
        // Register in Supabase
        await supabase.from('viral_referrals').insert([{ ref_code: code, click_count: 0 }]);
        setRefCode(code);
        setClicks(0);
      } else {
        setRefCode(code);
        // Fetch current clicks
        const { data } = await supabase
          .from('viral_referrals')
          .select('click_count')
          .eq('ref_code', code)
          .single();
          
        if (data) {
          setClicks(data.click_count || 0);
          
          // Trigger confetti if they just hit the target
          if (data.click_count >= TARGET_CLICKS) {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
              colors: ['#25D366', '#FFD700', '#FF4500'],
              zIndex: 10000
            });
          }
        } else {
          // Fallback if missing from DB for some reason
          await supabase.from('viral_referrals').insert([{ ref_code: code, click_count: 0 }]);
          setClicks(0);
        }
      }
      setLoading(false);
    }
    
    initializeReferral();
    
    // Auto-refresh stats every 5 seconds if they are waiting
    const interval = setInterval(() => {
      const code = localStorage.getItem('fantastic_ref_code');
      if (code && clicks < TARGET_CLICKS) {
        supabase.from('viral_referrals').select('click_count').eq('ref_code', code).single()
          .then(({ data }) => {
            if (data && data.click_count > clicks) {
              setClicks(data.click_count);
              if (data.click_count >= TARGET_CLICKS) {
                confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
              }
            }
          });
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [clicks]);

  if (loading) return <div className="min-h-screen bg-cream-50 flex items-center justify-center font-bold text-forest-800">Loading your secure vault...</div>;

  const shareLink = typeof window !== 'undefined' ? `${window.location.origin}?ref=${refCode}` : '';
  const progressPercent = Math.min(100, (clicks / TARGET_CLICKS) * 100);
  const isUnlocked = clicks >= TARGET_CLICKS;

  const copyLink = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-cream-50 pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-white mb-4 shadow-xl shadow-amber-500/20">
            <Gift className="w-8 h-8" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Unlock Daily Premium Coupons</h1>
          <p className="text-lg text-gray-600 font-medium">Invite {TARGET_CLICKS} friends to reveal today's exclusive grocery discount.</p>
        </div>

        {/* Status Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-8 relative">
          
          {/* Progress Banner */}
          <div className="bg-gray-900 p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
            </div>
            
            <div className="relative z-10">
              <p className="text-gray-400 font-bold uppercase tracking-wider text-xs mb-2">Your Invite Progress</p>
              <div className="flex items-end justify-center gap-2 text-white">
                <span className="text-6xl font-black">{clicks}</span>
                <span className="text-2xl font-bold text-gray-500 mb-2">/ {TARGET_CLICKS}</span>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-6 bg-gray-800 rounded-full h-4 w-full overflow-hidden border border-gray-700">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full ${isUnlocked ? 'bg-gradient-to-r from-green-400 to-green-500' : 'bg-gradient-to-r from-amber-400 to-amber-500'} relative`}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </motion.div>
              </div>
              <p className="text-xs text-gray-400 mt-3 font-medium">
                {isUnlocked ? "Target Reached! Scroll down to claim." : `Just ${TARGET_CLICKS - clicks} more clicks to unlock.`}
              </p>
            </div>
          </div>

          {/* Reward Section */}
          <div className="p-8">
            <AnimatePresence mode="wait">
              {!isUnlocked ? (
                <motion.div key="locked" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-gray-300">
                    <Lock className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-800 mb-2">Reward Locked</h3>
                  <p className="text-gray-500 mb-6 font-medium">Share your link below. Once 3 people click it, today's {DAILY_PREMIUM_COUPON.platform} coupon will automatically appear right here.</p>
                </motion.div>
              ) : (
                <motion.div key="unlocked" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-6 text-center relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 text-green-500/10"><Star className="w-40 h-40" /></div>
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30 relative z-10">
                    <Unlock className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-green-800 font-bold uppercase tracking-wider text-xs mb-1 relative z-10">Today's Premium Coupon</p>
                  <h3 className="text-3xl font-black text-gray-900 mb-2 relative z-10">{DAILY_PREMIUM_COUPON.platform}</h3>
                  <p className="text-green-700 font-bold mb-6 text-lg relative z-10">{DAILY_PREMIUM_COUPON.discount}</p>
                  
                  <div className="bg-white border-2 border-dashed border-green-300 rounded-xl p-4 flex flex-col items-center relative z-10">
                    <span className="text-3xl font-black tracking-widest text-gray-800 font-mono mb-2">{DAILY_PREMIUM_COUPON.code}</span>
                    <span className="text-xs text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3" /> Expires: {DAILY_PREMIUM_COUPON.expires}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Share Tools */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 text-center">
          <h3 className="text-xl font-black text-gray-800 mb-2 flex items-center justify-center gap-2"><TrendingUp className="w-5 h-5 text-amber-500" /> Share & Unlock Faster</h3>
          <p className="text-gray-500 mb-6 font-medium text-sm">Send this link to family groups. Clicks are tracked instantly!</p>

          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl p-2 mb-6">
            <div className="flex-1 overflow-hidden">
              <p className="text-sm text-gray-600 font-mono whitespace-nowrap overflow-x-auto px-2 select-all">{shareLink}</p>
            </div>
            <button onClick={copyLink} className="flex shrink-0 items-center gap-1 bg-white border border-gray-200 shadow-sm hover:bg-gray-50 px-4 py-2 rounded-lg font-bold text-sm text-gray-700 transition-colors">
              {copied ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          <a 
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out Fantastic Food to compare grocery prices! Click here: ${shareLink}`)}`}
            target="_blank" rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-black text-lg transition-all hover:-translate-y-1 shadow-xl shadow-[#25D366]/20"
          >
            <MessageCircle className="w-6 h-6" /> Share on WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
