'use client';
import { useState, useMemo, useEffect } from 'react';
import { useRegion, formatCurrency } from '../utils/region';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus, Trash2, ExternalLink, Search, Sparkles, X, Trophy, Zap, Share2, Bot, Loader2, Link2, Gift, Users, RefreshCw } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

import confetti from 'canvas-confetti';
import { supabase } from '../lib/supabase';
import { searchPrices } from '../data/mockPrices';
import type { CompareResult } from '../data/mockPrices';
import { PLATFORMS } from '../data/platforms';
import { useTranslation } from 'react-i18next';
import { getAffiliateUrl, handleAffiliateClick } from '../utils/affiliate';

interface BasketItem {
  id: string;
  query: string;
  displayName: string;
  icon: string;
  result: CompareResult;
}

const IN_PLATFORM_IDS = ['blinkit', 'zepto', 'swiggy', 'bigbasket', 'amazon', 'jiomart', 'flipkart'];
const SG_PLATFORM_IDS = ['fairprice', 'redmart', 'coldstorage', 'shengsiong', 'giant', 'grabmart', 'amazon_sg'];

const IN_PLATFORM_COLORS: Record<string, string> = {
  blinkit: '#F5D100', zepto: '#9B30D9', swiggy: '#FC8019',
  bigbasket: '#84C225', amazon: '#FF9900', jiomart: '#0070BA', flipkart: '#2874F0',
};
const SG_PLATFORM_COLORS: Record<string, string> = {
  fairprice: '#F57C00', redmart: '#E53935', coldstorage: '#1565C0',
  shengsiong: '#388E3C', giant: '#C62828', grabmart: '#00B14F',
  pandamart: '#FF1F4B', amazon_sg: '#FF9900',
};

const IN_QUICK_ADDS = [
  { label: 'Onion', query: 'onion', icon: '🧅' },
  { label: 'Tomato', query: 'tomato', icon: '🍅' },
  { label: 'Milk', query: 'milk', icon: '🥛' },
  { label: 'Eggs', query: 'eggs', icon: '🥚' },
  { label: 'Bread', query: 'bread', icon: '🍞' },
  { label: 'Potato', query: 'potato', icon: '🥔' },
  { label: 'Rice', query: 'rice', icon: '🍚' },
  { label: 'Paneer', query: 'paneer', icon: '🧀' },
  { label: 'Dal', query: 'dal', icon: '🫘' },
  { label: 'Tea', query: 'tea', icon: '🍵' },
  { label: 'Banana', query: 'banana', icon: '🍌' },
  { label: 'Chicken', query: 'chicken', icon: '🍗' },
  { label: 'Butter', query: 'butter', icon: '🧈' },
  { label: 'Oil', query: 'oil', icon: '🫙' },
  { label: 'Sugar', query: 'sugar', icon: '🍬' },
  { label: 'Atta', query: 'atta', icon: '🌾' },
];
const SG_QUICK_ADDS = [
  { label: 'Eggs', query: 'eggs', icon: '🥚' },
  { label: 'Rice', query: 'rice', icon: '🍚' },
  { label: 'Tofu', query: 'tofu', icon: '🥬' },
  { label: 'Bok Choy', query: 'bok choy', icon: '🥦' },
  { label: 'Chicken', query: 'chicken', icon: '🍗' },
  { label: 'Fish', query: 'fish', icon: '🐟' },
  { label: 'Milk', query: 'milk', icon: '🥛' },
  { label: 'Bread', query: 'bread', icon: '🍞' },
  { label: 'Milo', query: 'milo', icon: '☕' },
  { label: 'Noodles', query: 'noodles', icon: '🍜' },
  { label: 'Potato', query: 'potato', icon: '🥔' },
  { label: 'Banana', query: 'banana', icon: '🍌' },
  { label: 'Prawn', query: 'prawn', icon: '🦐' },
  { label: 'Soy Sauce', query: 'soy sauce', icon: '🫙' },
  { label: 'Coconut Milk', query: 'coconut milk', icon: '🥥' },
  { label: 'Durian', query: 'durian', icon: '🌵' },
];

const RANK_MEDALS = ['🥇', '🥈', '🥉'];

const BasketCalculator = () => {
  const { region } = useRegion();
  const isSG = region === 'SG';
  const PLATFORM_IDS = isSG ? SG_PLATFORM_IDS : IN_PLATFORM_IDS;
  const PLATFORM_COLORS = isSG ? SG_PLATFORM_COLORS : IN_PLATFORM_COLORS;
  const QUICK_ADDS = isSG ? SG_QUICK_ADDS : IN_QUICK_ADDS;
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<string | null>(null);
  
  const searchParams = useSearchParams();
  const [aiAdvice, setAiAdvice] = useState<any>(null);
  const [loadingAdvice, setLoadingAdvice] = useState(false);
  const { t } = useTranslation();

  // Gamification state
  const slashHostParam = searchParams.get('slashHost');
  const [slashClicks, setSlashClicks] = useState(0);
  const [codeGenerated, setCodeGenerated] = useState<string | null>(null);
  const [hostInputCode, setHostInputCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const DISCOUNT_AMOUNT = 50;

  // Family Carts state
  const familyIdParam = searchParams.get('familyId');
  const [isSyncing, setIsSyncing] = useState(false);
  const [remoteFamilyCart, setRemoteFamilyCart] = useState(false);

  // 1-Click Recipe Basket Prefill Live Loading Engine State
  const [isPrefilling, setIsPrefilling] = useState(false);
  const [prefillItemsStatus, setPrefillItemsStatus] = useState<{ name: string; status: 'loading' | 'success' | 'failed' }[]>([]);

  useEffect(() => {
    // 1. Initial Load for Family Cart
    if (familyIdParam) {
      setRemoteFamilyCart(true);
      const fetchInitial = async () => {
        setIsSyncing(true);
        const { data } = await supabase.from('family_carts').select('items').eq('id', familyIdParam).single();
        if (data && (data as any).items) {
          setBasket((data as any).items);
        }
        setIsSyncing(false);
      };
      fetchInitial();

      // 2. Subscribe to remote changes
      const channel = supabase.channel(`public:family_carts:id=eq.${familyIdParam}`)
        .on('postgres_changes', { event: '*', schema: 'public', table: 'family_carts', filter: `id=eq.${familyIdParam}` }, payload => {
           if (payload.new && (payload.new as any).items) {
             setBasket((payload.new as any).items);
           }
        })
        .subscribe();

      return () => { supabase.removeChannel(channel); };
    }
    
    // 3. Prefill load with premium live checkmark optimization
    const prefillQuery = searchParams.get('prefill');
    if (prefillQuery) {
      const itemsToLoad = prefillQuery.split(',').filter(Boolean);
      
      const loadAllPrefill = async () => {
        setIsPrefilling(true);
        setPrefillItemsStatus(itemsToLoad.map(name => ({ name, status: 'loading' })));
        
        const validResults: BasketItem[] = [];
        
        // Sequentially load each item to present a gorgeous animation loop to the user
        for (let i = 0; i < itemsToLoad.length; i++) {
          const item = itemsToLoad[i];
          try {
            const result = await searchPrices(item, region);
            if (result) {
              validResults.push({
                id: `${item}-${Date.now()}-${i}-${Math.random()}`,
                query: item,
                displayName: result.canonicalName,
                icon: result.icon,
                result,
              });
              setPrefillItemsStatus(prev => 
                prev.map((s, idx) => idx === i ? { ...s, status: 'success' } : s)
              );
            } else {
              setPrefillItemsStatus(prev => 
                prev.map((s, idx) => idx === i ? { ...s, status: 'failed' } : s)
              );
            }
          } catch (err) {
            setPrefillItemsStatus(prev => 
              prev.map((s, idx) => idx === i ? { ...s, status: 'failed' } : s)
            );
          }
          // Tiny delay for gorgeous micro-animation pacing
          await new Promise(r => setTimeout(r, 450));
        }

        // Apply bulk update in a single state change to avoid parallel race condition overwrites
        if (validResults.length > 0) {
          setBasket(prev => {
            const existingQueries = new Set(prev.map(b => b.query.toLowerCase()));
            const uniqueNew = validResults.filter(r => !existingQueries.has(r.query.toLowerCase()));
            const nb = [...prev, ...uniqueNew];
            syncToSupabase(nb);
            return nb;
          });
          
          // Trigger epic success confetti celebration!
          setTimeout(() => {
            confetti({ particleCount: 150, spread: 80, zIndex: 9999, colors: ['#fbbf24', '#f59e0b', '#10b981'] });
          }, 100);
        }

        // Keep modal open briefly to allow user to appreciate full checklist before smooth fade out
        await new Promise(r => setTimeout(r, 600));
        setIsPrefilling(false);
      };
      
      loadAllPrefill();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [familyIdParam, searchParams]);


  const syncToSupabase = async (newBasket: BasketItem[]) => {
    if (!familyIdParam) return;
    setIsSyncing(true);
    try {
      await supabase.from('family_carts').upsert({ 
        id: familyIdParam, 
        items: newBasket,
        updated_at: new Date().toISOString()
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSyncing(false);
    }
  };

  const addItem = async (query: string) => {
    if (basket.find(b => b.query.toLowerCase() === query.toLowerCase())) return;
    setLoading(true);
    setSearchResult(null);
    const result = await searchPrices(query, region);
    if (result) {
      setBasket(prev => {
        const nb = [...prev, {
          id: `${query}-${Date.now()}`,
          query,
          displayName: result.canonicalName,
          icon: result.icon,
          result,
        }];
        syncToSupabase(nb);
        return nb;
      });
    } else {
      setSearchResult(`Couldn't find "${query}" — try a different name.`);
    }
    setLoading(false);
    setSearch('');
  };

  const removeItem = (id: string) => {
    setBasket(prev => {
      const nb = prev.filter(b => b.id !== id);
      syncToSupabase(nb);
      return nb;
    });
  };

  const clearBasket = () => {
    setBasket([]);
    syncToSupabase([]);
  };

  const platformTotals = useMemo(() => {
    return PLATFORM_IDS.map(pid => {
      let total = 0;
      let available = 0;
      basket.forEach(item => {
        const p = item.result.prices.find(pr => pr.platformId === pid);
        if (p && p.inStock) { total += p.price; available++; }
      });
      return { platformId: pid, total, available, name: PLATFORMS.find(p => p.id === pid)?.name || pid };
    }).filter(pt => pt.available > 0).sort((a, b) => a.total - b.total);
  }, [basket]);

  const shareBasket = async () => {
    const items = basket.map(b => encodeURIComponent(b.query)).join(',');
    const url = `${window.location.origin}/basket?prefill=${items}`;
    if (navigator.share) {
      navigator.share({ title: 'My Fantastic Food Basket', text: 'Hey, compare prices for our shared basket!', url });
    } else {
      navigator.clipboard.writeText(url);
      alert('Basket shared link copied to clipboard!');
    }
  };

  const startTeamSlash = () => {
    const items = basket.map(b => encodeURIComponent(b.query)).join(',');
    // Generate a viral string parameter
    const url = `${window.location.origin}/basket?slashHost=YourFriend&prefill=${items}`;
    const msg = `Hey! I need your help slicing ${formatCurrency(DISCOUNT_AMOUNT, region)} off my grocery bill on Fantastic Food! Tap this link and help me slash the price: ${url}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const createFamilyCart = async () => {
    const genId = 'FAM-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    await supabase.from('family_carts').upsert({ id: genId, items: basket, updated_at: new Date().toISOString() });
    
    // Redirect to the family mode
    const url = `${window.location.origin}/basket?familyId=${genId}`;
    if (navigator.share) {
      navigator.share({ title: 'Join my Family Fridge!', text: 'Add groceries to our live synced cart instantly.', url });
    } else {
      navigator.clipboard.writeText(url);
      alert('Live Family Cart link generated and copied to clipboard! Share it with your family to sync instantly.');
    }
    window.location.href = url;
  };

  const handleFriendSlash = () => {
    setSlashClicks(prev => prev + 1);
    // Vibrate if mobile
    if (navigator.vibrate) navigator.vibrate(50);
    // If they clicked enough times, generate the fake code
    if (slashClicks >= 9) {
      const code = `SLASH-${Math.floor(1000 + Math.random() * 9000)}-WIN`;
      setCodeGenerated(code);
      confetti({ particleCount: 150, spread: 80, zIndex: 9999, colors: ['#52B788', '#F4A23C', '#2D6A4F'] });
    }
  };

  const redeemCode = () => {
    if (hostInputCode.trim().startsWith('SLASH-') && hostInputCode.trim().endsWith('-WIN')) {
      setDiscountApplied(true);
      setHostInputCode('');
      confetti({ particleCount: 200, spread: 100, origin: { y: 0.8 }, colors: ['#F5D100', '#FC8019'] });
    } else {
      alert("Invalid code. Tell your friend to tap harder!");
    }
  };

  const getAiAdvice = async () => {
    if (basket.length === 0) return;
    setLoadingAdvice(true);
    setAiAdvice(null);
    try {
      const items = basket.map(b => b.query);
      const prices = platformTotals.map(pt => ({ platform: pt.name, total: pt.total }));
      const res = await fetch('/api/group-buy-advice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, prices })
      });
      const data = await res.json();
      setAiAdvice(data);
    } catch {}
    setLoadingAdvice(false);
  };

  const cheapest = platformTotals[0];
  const priciest = platformTotals[platformTotals.length - 1];
  
  // Apply discount mathematically to UI if redeemed
  let finalSavings = basket.length > 0 && cheapest && priciest ? priciest.total - cheapest.total : 0;
  if (discountApplied && cheapest) {
    cheapest.total -= DISCOUNT_AMOUNT;
    finalSavings += DISCOUNT_AMOUNT;
  }
  
  const savingsPercent = priciest?.total > 0 ? Math.round((finalSavings / priciest.total) * 100) : 0;

  // ── FRIEND OVERLAY (Gamification loop) ──
  if (slashHostParam && !codeGenerated) {
    return (
      <div className="min-h-screen bg-forest-900 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-black text-white mb-4">Your friend needs help!</h1>
        <p className="text-green-300 text-lg max-w-sm mb-8">
          Tap the button 10 times to slash {formatCurrency(DISCOUNT_AMOUNT, region)} off their Fantastic Food grocery bill!
        </p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleFriendSlash}
          className="w-48 h-48 rounded-full bg-linear-to-tr from-amber-400 to-amber-600 text-forest-900 font-black text-4xl shadow-2xl flex flex-col items-center justify-center gap-2 border-4 border-amber-300"
        >
          <span>⚔️</span>
          <span>SLASH IT</span>
        </motion.button>
        <div className="mt-8 text-amber-400 font-bold text-xl w-64 h-4 bg-forest-800 rounded-full overflow-hidden">
          <div className="h-full bg-amber-400 transition-all" style={{ width: `${(slashClicks / 10) * 100}%` }} />
        </div>
      </div>
    );
  }

  if (slashHostParam && codeGenerated) {
    return (
      <div className="min-h-screen bg-forest-900 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-black text-amber-400 mb-4">You did it! 🎊</h1>
        <p className="text-green-300 mb-8 max-w-sm">
          You successfully slashed {formatCurrency(DISCOUNT_AMOUNT, region)} off your friend's cart! Send them this secret code so they can claim it.
        </p>
        <div className="bg-forest-800 border-2 border-dashed border-amber-400 rounded-2xl p-6 mb-8 max-w-xs w-full">
          <p className="text-3xl font-black text-white tracking-wider">{codeGenerated}</p>
        </div>
        <button onClick={() => {
            const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(`I slashed your bill! Here is your secret code: ${codeGenerated}`)}`;
            window.open(url, '_blank');
          }}
          className="bg-[#25D366] text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 text-lg w-full max-w-xs shadow-lg transition-transform active:scale-95"
        >
          <Share2 className="w-5 h-5"/> Send Code via WhatsApp
        </button>
        <button onClick={() => window.location.href = '/basket'} className="text-green-400 mt-6 underline">
          Try Fantastic Food Myself
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16 relative" style={{ background: 'linear-gradient(135deg, #0f2418 0%, #1b4332 40%, #2d3a1f 100%)' }}>
      
      {/* ── Prefill Loader Overlay ─────────────────────────────────────────── */}
      <AnimatePresence>
        {isPrefilling && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-forest-950/85 backdrop-blur-md flex items-center justify-center p-4 text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-forest-900 border border-green-500/30 rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
            >
              {/* Rotating background lights */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-green-500/10 rounded-full blur-3xl animate-pulse" />

              <div className="relative z-10">
                {/* Spinner / Icon */}
                <div className="w-20 h-20 bg-forest-950 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-green-500/20 shadow-inner relative">
                  <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin absolute" />
                  <span className="text-3xl animate-bounce">👩‍🍳</span>
                </div>

                <h2 className="text-2xl font-black text-white mb-2 font-display">
                  {t('prefill_loading_title', { defaultValue: 'Preloading Recipe Basket...' })}
                </h2>
                <p className="text-green-300 text-sm mb-6 leading-relaxed">
                  {t('prefill_loading_desc', { defaultValue: 'Fetching live grocery prices across Blinkit, Zepto, Swiggy Instamart, and BigBasket...' })}
                </p>

                {/* Progress Checklist */}
                <div className="bg-forest-950/50 rounded-2xl p-4 border border-forest-850 text-left space-y-3 max-h-[220px] overflow-y-auto custom-scrollbar">
                  {prefillItemsStatus.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-3 text-sm">
                      <span className="text-white font-medium capitalize flex items-center gap-2">
                        <span className="opacity-75">🥕</span> {item.name}
                      </span>
                      {item.status === 'loading' && (
                        <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin shrink-0" />
                      )}
                      {item.status === 'success' && (
                        <span className="text-green-400 font-bold shrink-0 flex items-center gap-1">
                          ✓ <span className="text-[10px] bg-green-500/10 px-1.5 py-0.5 rounded-full border border-green-500/20">Priced</span>
                        </span>
                      )}
                      {item.status === 'failed' && (
                        <span className="text-red-400 font-bold shrink-0">✗</span>
                      )}
                    </div>
                  ))}
                </div>

                <p className="text-forest-400 text-xs mt-6 font-semibold uppercase tracking-wider animate-pulse">
                  {t('prefill_engine_status', { defaultValue: 'Optimizing Basket Totals...' })}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero ────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-10 text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <Sparkles className="w-4 h-4" /> {t('basket_smart_calculator')}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
            {remoteFamilyCart ? (
              <span className="text-blue-400 flex items-center justify-center gap-3">
                <Users className="w-10 h-10" /> {t('basket_live_family_fridge')}
              </span>
            ) : (
              <>{t('basket_find_the')} <span className="text-amber-400">{t('basket_cheapest_platform')}</span><br />{t('basket_for_entire_basket')}</>
            )}
          </h1>
          <p className="text-green-300 text-lg max-w-xl mx-auto">
            {remoteFamilyCart 
              ? t('basket_family_desc')
              : t('basket_hero_desc')}
          </p>

          {/* Live stat pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { label: t('basket_platforms_label'), val: '7', icon: '🏪' },
              { label: t('basket_items_in_db'), val: '500+', icon: '🥕' },
              { label: t('basket_avg_savings'), val: formatCurrency(isSG ? 8 : 80, region) + '+', icon: '💸' },
            ].map(s => (
              <div key={s.label} className="bg-white/10 border border-white/20 backdrop-blur rounded-2xl px-5 py-2.5 text-center">
                <span className="text-lg mr-1">{s.icon}</span>
                <span className="font-black text-white">{s.val}</span>
                <span className="text-green-400 text-sm ml-1">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Main Layout ─────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-6">

          {/* ── LEFT PANEL ── */}
          <div className="lg:col-span-2 space-y-4">

            {/* Search input */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
              <h2 className="font-black text-white mb-4 flex items-center gap-2">
                <Search className="w-4 h-4 text-amber-400" /> {t('basket_add_items')}
              </h2>
              <form
                onSubmit={(e) => { e.preventDefault(); if (search.trim()) addItem(search.trim()); }}
                className="flex gap-2 mb-4"
              >
                <input
                  type="text"
                  placeholder={t('basket_search_placeholder')}
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder-green-400 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-amber-400 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!search.trim() || loading}
                  className="bg-amber-400 hover:bg-amber-500 disabled:opacity-40 text-forest-900 font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1 text-sm"
                >
                  <Plus className="w-4 h-4" /> {t('basket_add_btn')}
                </button>
              </form>

              {searchResult && (
                <p className="text-red-300 text-xs mb-3 bg-red-500/10 border border-red-400/20 rounded-lg px-3 py-2">{searchResult}</p>
              )}

              {loading && (
                <div className="flex items-center gap-2 text-green-400 text-xs mb-3">
                  <div className="w-3.5 h-3.5 border-2 border-green-400 border-t-transparent rounded-full animate-spin" />
                  {t('basket_fetching_prices')}
                </div>
              )}

              {/* Quick Adds */}
              <p className="text-green-400 text-xs font-semibold uppercase tracking-wider mb-2">{t('basket_quick_add')}</p>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_ADDS.map(q => {
                  const added = !!basket.find(b => b.query === q.query);
                  return (
                    <button
                      key={q.query}
                      onClick={() => !added && addItem(q.query)}
                      disabled={loading || added}
                      className={`text-xs px-2.5 py-1.5 rounded-full border transition-all font-medium ${
                        added
                          ? 'bg-amber-400/20 border-amber-400/50 text-amber-300 cursor-default'
                          : 'border-white/20 text-green-200 hover:border-amber-400 hover:text-amber-300 hover:bg-amber-400/10'
                      }`}
                    >
                      {q.icon} {q.label} {added && '✓'}
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Basket Items List */}
            <AnimatePresence>
              {basket.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="font-black text-white flex items-center gap-2">
                      <ShoppingCart className={`w-4 h-4 ${remoteFamilyCart ? 'text-blue-400' : 'text-amber-400'}`} />
                      {remoteFamilyCart ? t('basket_family_basket') : t('basket_your_basket')}
                      <span className={`${remoteFamilyCart ? 'bg-blue-400' : 'bg-amber-400'} text-forest-900 text-xs font-black px-2 py-0.5 rounded-full`}>
                        {basket.length}
                      </span>
                      {isSyncing && (
                        <RefreshCw className="w-3 h-3 text-blue-300 animate-spin ml-2" />
                      )}
                    </h2>
                    <button
                      onClick={clearBasket}
                      className="text-xs text-red-400 hover:text-red-300 font-medium flex items-center gap-1 transition-colors"
                    >
                      <X className="w-3 h-3" /> {t('basket_clear_all')}
                    </button>
                  </div>
                  <div className="space-y-2">
                    <AnimatePresence>
                      {basket.map(item => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="flex items-center justify-between bg-white/10 rounded-xl px-3 py-2.5 group"
                        >
                          <span className="text-sm font-semibold text-white">
                            {item.icon} {item.displayName}
                          </span>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-all"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="lg:col-span-3">
            {basket.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-80 text-center bg-white/5 border border-dashed border-white/20 rounded-3xl"
              >
                <div className="text-7xl mb-4 animate-bounce">🛒</div>
                <h3 className="text-xl font-black text-white mb-2">{t('basket_empty')}</h3>
                <p className="text-green-400 text-sm max-w-xs">
                  {t('basket_empty_desc')}
                </p>
              </motion.div>
            ) : (
              <div className="space-y-4">

                {/* Savings Banner */}
                {finalSavings > 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative overflow-hidden bg-linear-to-r from-amber-400 to-amber-500 rounded-2xl p-5"
                  >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }} />
                    <div className="relative flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Trophy className="w-5 h-5 text-forest-900" />
                          <span className="font-black text-forest-900 text-lg">
                            {isSG
                              ? t('basket_you_save_sg', { savings: formatCurrency(finalSavings, region), percent: savingsPercent })
                              : t('basket_you_save', { savings: finalSavings, percent: savingsPercent })}
                          </span>
                        </div>
                        <p className="text-forest-800 text-sm">
                          {t('basket_shop_at')} <strong>{PLATFORMS.find(p => p.id === cheapest?.platformId)?.name}</strong> {t('basket_instead_of')}{' '}
                          <strong>{PLATFORMS.find(p => p.id === priciest?.platformId)?.name}</strong>
                        </p>
                      </div>
                      <div className="text-4xl">💰</div>
                    </div>
                  </motion.div>
                )}

                {/* Platform Totals */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
                  <div className="px-5 py-4 border-b border-white/10 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <h2 className="font-black text-white">{t('basket_comparison_title')}</h2>
                    <span className="text-green-400 text-xs ml-auto">{t('basket_sorted_by_price', { count: basket.length })}</span>
                  </div>

                  <div className="divide-y divide-white/5">
                    {platformTotals.map((pt, rank) => {
                      const platform = PLATFORMS.find(p => p.id === pt.platformId);
                      if (!platform) return null;
                      const isBest = rank === 0;
                      const extra = pt.total - (cheapest?.total || 0);
                      const barWidth = cheapest ? Math.round((cheapest.total / pt.total) * 100) : 100;

                      return (
                        <motion.div
                          key={pt.platformId}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: rank * 0.05 }}
                          className={`px-5 py-4 ${isBest ? 'bg-amber-400/10 border-l-4 border-amber-400' : ''}`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            {/* Rank / Medal */}
                            <span className="text-xl w-7 shrink-0">
                              {rank < 3 ? RANK_MEDALS[rank] : <span className="text-green-500 font-bold text-sm">#{rank + 1}</span>}
                            </span>

                            {/* Platform dot */}
                            <div
                              className="w-2.5 h-2.5 rounded-full shrink-0"
                              style={{ background: PLATFORM_COLORS[pt.platformId] || '#ccc' }}
                            />

                            {/* Name + badges */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-black text-white text-sm">{platform.name}</span>
                                {isBest && (
                                  <span className="text-xs bg-amber-400 text-forest-900 px-2 py-0.5 rounded-full font-bold">
                                    {t('basket_cheapest_badge')}
                                  </span>
                                )}
                                <span className="text-green-400 text-xs">{platform.deliveryTime}</span>
                              </div>
                              {/* Per-item prices */}
                              <div className="flex flex-wrap gap-2 mt-1">
                                {basket.map(item => {
                                  const p = item.result.prices.find(pr => pr.platformId === pt.platformId);
                                  return p ? (
                                    <span key={item.id} className="text-xs text-green-300">
                                      {item.icon} {formatCurrency(p.price, region)}
                                    </span>
                                  ) : null;
                                })}
                              </div>
                            </div>

                            {/* Total + extra */}
                            <div className="text-right shrink-0">
                              <div className={`text-xl font-black ${isBest ? 'text-amber-400' : 'text-white'}`}>
                                {formatCurrency(pt.total, region)}
                              </div>
                              {rank > 0 && (
                                <div className="text-xs text-red-400 font-semibold">{isSG ? t('basket_more_price_sg', { extra: formatCurrency(extra, region) }) : t('basket_more_price', { extra })}</div>
                              )}
                            </div>

                            {/* Buy button */}
                            <a
                              href={getAffiliateUrl(pt.platformId, platform.searchUrl(basket.map(b => b.query).join(' ')))}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={handleAffiliateClick}
                              className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-xl transition-all border ${
                                isBest
                                  ? 'bg-amber-400 text-forest-900 border-amber-400 hover:bg-amber-500'
                                  : 'border-white/20 text-green-300 hover:border-white/40'
                              }`}
                            >
                              {t('basket_shop_btn')} <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>

                          {/* Price bar */}
                          <div className="ml-10 mt-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all"
                              style={{
                                width: `${barWidth}%`,
                                background: isBest ? '#F5D100' : PLATFORM_COLORS[pt.platformId] || '#6b7280',
                                opacity: isBest ? 1 : 0.5,
                              }}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <p className="text-green-400 text-xs">
                    {t('basket_disclaimer')}
                  </p>
                </div>

                {/* AI Advice */}
                <div className="mt-6">
                  {!aiAdvice ? (
                    <button onClick={getAiAdvice} disabled={loadingAdvice} className="w-full py-4 bg-forest-800 border border-green-500/30 hover:border-green-500 text-white rounded-2xl font-bold flex flex-col items-center justify-center gap-1 transition-colors">
                      {loadingAdvice ? (
                        <><Loader2 className="w-5 h-5 animate-spin text-green-400" /> {t('basket_analyzing_split')}</>
                      ) : (
                        <><div className="flex items-center gap-2 text-green-400"><Bot className="w-5 h-5" /> {t('basket_group_buy_advice')}</div><span className="text-xs text-forest-300 font-normal">{t('basket_ai_desc')}</span></>
                      )}
                    </button>
                  ) : (
                    <div className="bg-linear-to-r from-forest-800 to-forest-900 border border-moss-500/50 rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4 text-green-400 font-bold">
                        <Bot className="w-5 h-5" /> {t('basket_ai_title')}
                      </div>
                      <p className="text-white text-sm mb-5 leading-relaxed">{aiAdvice.recommendationText}</p>
                      <div className="space-y-3 mb-4">
                        {aiAdvice.platformSplit?.map((split: any, i: number) => (
                          <div key={i} className="bg-white/10 rounded-xl p-3 flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                            <div>
                              <p className="font-bold text-amber-300 text-sm">{split.platform}: <span className="text-white font-medium">{split.itemsToBuy}</span></p>
                              <p className="text-xs text-forest-300 mt-0.5">{split.reason}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-amber-400/20 text-amber-300 text-center text-sm font-bold py-2 rounded-lg border border-amber-400/30">
                        {t('basket_est_extra_savings')} {aiAdvice.estimatedSavings}
                      </div>
                    </div>
                  )}
                </div>

              {/* Action buttons under basket */}
              {basket.length > 0 && (
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <button onClick={shareBasket} className="flex-1 py-3 px-4 rounded-xl border border-amber-500/30 text-amber-500 hover:bg-amber-500/10 font-bold flex items-center justify-center gap-2 transition-colors">
                      <Share2 className="w-4 h-4" /> {t('basket_share_snapshot')}
                    </button>
                    {!remoteFamilyCart && (
                      <button onClick={createFamilyCart} className="flex-1 py-3 px-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-500/20">
                        <Users className="w-4 h-4" /> {t('basket_family_cart')}
                      </button>
                    )}
                    <button onClick={clearBasket} className="py-3 px-4 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 font-bold transition-colors">
                      {t('basket_clear')}
                    </button>
                  </div>
                  {remoteFamilyCart && (
                    <div className="text-center text-blue-300 text-xs font-medium flex items-center justify-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" /> {t('basket_live_sync_active')}
                    </div>
                  )}
                </div>
              )}

              {/* TEAM SLASH HOST UI */}
              {basket.length > 0 && (
                <div className="mt-6 bg-linear-to-br from-amber-400/10 to-amber-600/10 border-2 border-dashed border-amber-500/50 rounded-3xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 text-6xl opacity-20 transform rotate-12">⚔️</div>
                  <h3 className="text-xl font-black text-amber-400 mb-2 flex items-center gap-2">
                    <Gift className="w-5 h-5"/> {t('basket_team_slash')}
                  </h3>
                  <p className="text-sm text-green-200 mb-6 max-w-sm">
                    {t(isSG ? 'basket_team_slash_desc_sg' : 'basket_team_slash_desc', { discount: formatCurrency(DISCOUNT_AMOUNT, region) })}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <button onClick={startTeamSlash} className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 font-bold text-forest-900 shadow-lg transition-transform active:scale-95 flex flex-col items-center justify-center gap-1">
                      <div className="flex items-center gap-2"><Link2 className="w-4 h-4"/> {t('basket_invite_slash')}</div>
                    </button>
                  </div>
                  
                  <div className="flex bg-forest-900/50 rounded-xl overflow-hidden border border-amber-500/30">
                    <input 
                      type="text" 
                      placeholder={t('basket_paste_code')}
                      value={hostInputCode}
                      onChange={e => setHostInputCode(e.target.value.toUpperCase())}
                      className="flex-1 bg-transparent px-4 py-3 text-white placeholder-gray-400 outline-none text-sm font-mono"
                    />
                    <button 
                      onClick={redeemCode}
                      disabled={!hostInputCode.trim() || discountApplied}
                      className="bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-forest-900 font-bold px-6 border-l border-amber-600 transition-colors"
                    >
                      {t('basket_redeem_btn')}
                    </button>
                  </div>
                  {discountApplied && (
                    <div className="mt-3 text-amber-400 text-sm font-bold flex items-center gap-2">
                      <Sparkles className="w-4 h-4"/> {t(isSG ? 'basket_slash_success_sg' : 'basket_slash_success', { discount: formatCurrency(DISCOUNT_AMOUNT, region) })}
                    </div>
                  )}
                </div>
              )}
            </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom feature strip */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: '⚡', title: t('basket_feat_instant'), desc: t('basket_feat_instant_desc', { count: isSG ? 7 : 7 }) },
            { icon: '💰', title: t('basket_feat_savings'), desc: t('basket_feat_savings_desc', { amount: formatCurrency(isSG ? 20 : 200, region) }) },
            { icon: '🔄', title: t('basket_feat_live'), desc: t('basket_feat_live_desc') },
            { icon: '🛒', title: t('basket_feat_full'), desc: t('basket_feat_full_desc') },
          ].map(f => (
            <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <div className="text-2xl mb-1">{f.icon}</div>
              <p className="font-bold text-white text-sm">{f.title}</p>
              <p className="text-green-400 text-xs">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasketCalculator;
