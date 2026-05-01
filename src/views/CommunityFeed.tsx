'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingCart, X, Flame, Loader2, Globe, Search, TrendingUp, MessageSquare, Camera as CameraIcon } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { supabase } from '../lib/supabase';
import SEO from '../components/SEO';

interface CommunityPost {
  id: string;
  recipe_name: string;
  recipe_ingredients: string[];
  photo_url: string | null;
  user_name: string;
  city: string | null;
  likes: number;
  cooksnaps?: number; // Simulated
  created_at: string;
}

const CITY_EMOJIS: Record<string, string> = {
  'Mumbai': '🌊', 'Delhi': '🏛️', 'Bangalore': '🌿', 'Chennai': '🌴',
  'Kolkata': '🎨', 'Hyderabad': '💎', 'Pune': '🏔️', 'Ahmedabad': '🦁',
};
const CITIES = Object.keys(CITY_EMOJIS);

const SAMPLE_POSTS: CommunityPost[] = [
  { id: 'sample-1', recipe_name: 'Dal Makhani', recipe_ingredients: ['urad dal', 'rajma', 'butter', 'cream', 'tomato', 'spices'], photo_url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop', user_name: 'Priya K.', city: 'Delhi', likes: 48, cooksnaps: 12, created_at: new Date(Date.now() - 3600000 * 2).toISOString() },
  { id: 'sample-2', recipe_name: 'Mushroom Masala', recipe_ingredients: ['mushroom', 'onion', 'tomato', 'garlic', 'garam masala'], photo_url: 'https://images.unsplash.com/photo-1585669060258-2dc6a3976d09?q=80&w=800&auto=format&fit=crop', user_name: 'Rahul S.', city: 'Bangalore', likes: 31, cooksnaps: 5, created_at: new Date(Date.now() - 3600000 * 5).toISOString() },
  { id: 'sample-3', recipe_name: 'Paneer Butter Masala', recipe_ingredients: ['paneer', 'butter', 'cream', 'tomato', 'onion', 'cashews'], photo_url: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=800&auto=format&fit=crop', user_name: 'Deepa M.', city: 'Mumbai', likes: 72, cooksnaps: 24, created_at: new Date(Date.now() - 3600000 * 8).toISOString() },
  { id: 'sample-4', recipe_name: 'Chicken Biryani', recipe_ingredients: ['chicken', 'basmati rice', 'onion', 'saffron', 'yogurt', 'whole spices'], photo_url: 'https://images.unsplash.com/photo-1589302168068-964664d93cb0?q=80&w=800&auto=format&fit=crop', user_name: 'Ahmed A.', city: 'Hyderabad', likes: 106, cooksnaps: 41, created_at: new Date(Date.now() - 3600000 * 12).toISOString() },
  { id: 'sample-5', recipe_name: 'Aloo Paratha', recipe_ingredients: ['atta', 'potato', 'green chilli', 'butter', 'coriander'], photo_url: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop', user_name: 'Gurpreet S.', city: 'Delhi', likes: 55, cooksnaps: 8, created_at: new Date(Date.now() - 3600000 * 24).toISOString() },
  { id: 'sample-6', recipe_name: 'Masoor Dal', recipe_ingredients: ['masoor dal', 'onion', 'tomato', 'turmeric', 'mustard seeds'], photo_url: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?q=80&w=800&auto=format&fit=crop', user_name: 'Sunita P.', city: 'Pune', likes: 29, cooksnaps: 2, created_at: new Date(Date.now() - 3600000 * 36).toISOString() },
];

function timeAgo(isoStr: string) {
  const diff = Math.floor((Date.now() - new Date(isoStr).getTime()) / 1000);
  if (diff < 60) return `\${diff}s ago`;
  if (diff < 3600) return `\${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `\${Math.floor(diff / 3600)}h ago`;
  return `\${Math.floor(diff / 86400)}d ago`;
}

function getInitials(name: string) {
  return name.substring(0, 2).toUpperCase();
}

const CommunityFeed = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<CommunityPost[]>(SAMPLE_POSTS);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [showPost, setShowPost] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Post form state
  const [recipeName, setRecipeName] = useState('');
  const [userName, setUserName] = useState('');
  const [city, setCity] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await supabase
          .from('community_posts')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(30);
        if (data && data.length > 0) {
          // Add simulated cooksnaps for new posts
          const withSnaps = data.map(d => ({ ...d, cooksnaps: Math.floor(Math.random() * 10) }));
          setPosts([...withSnaps, ...SAMPLE_POSTS]);
        }
      } catch {}
    };
    fetchPosts();

    const channel = supabase
      .channel('community_posts_feed')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'community_posts' }, payload => {
        const newPost = { ...payload.new as CommunityPost, cooksnaps: 0 };
        setPosts(prev => [newPost, ...prev]);
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoFile(file);
    const reader = new FileReader();
    reader.onloadend = () => setPhotoPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmitPost = async () => {
    if (!recipeName.trim()) return;
    setUploading(true);
    try {
      let finalPhotoUrl = photoPreview; // fallback to whatever was there

      // 1. Upload photo to Supabase Storage if a file was selected
      if (photoFile) {
        const fileExt = photoFile.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('community_photos')
          .upload(fileName, photoFile);

        if (uploadError) {
          console.error('Upload Error:', uploadError);
          // If storage fails but we want to allow post without photo or fallback
        } else if (uploadData) {
          // Get the public URL
          const { data: { publicUrl } } = supabase.storage
            .from('community_photos')
            .getPublicUrl(uploadData.path);
          finalPhotoUrl = publicUrl;
        }
      }

      // 2. Insert into Database
      const newPost: Partial<CommunityPost> = {
        recipe_name: recipeName,
        recipe_ingredients: ingredients.split(',').map(s => s.trim()).filter(Boolean),
        user_name: userName.trim() || 'Anonymous Chef',
        city: city || null,
        photo_url: finalPhotoUrl,
        likes: 0,
      };

      const { data, error } = await supabase.from('community_posts').insert(newPost).select().single();
      
      if (error) throw error;

      if (data) {
        setPosts(prev => [{...data as CommunityPost, cooksnaps: 0}, ...prev]);
      }
      
      setShowPost(false);
      setRecipeName(''); setUserName(''); setCity(''); setIngredients(''); setPhotoPreview(null); setPhotoFile(null);
    } catch (err) {
      console.error(err);
      alert('Could not post. Please ensure you ran the community_setup.sql script in Supabase!');
    }
    setUploading(false);
  };

  const handleLike = async (post: CommunityPost) => {
    if (likedIds.has(post.id)) return;
    setLikedIds(prev => new Set([...prev, post.id]));
    setPosts(prev => prev.map(p => p.id === post.id ? { ...p, likes: p.likes + 1 } : p));
    if (!post.id.startsWith('sample') && !post.id.startsWith('local')) {
      await supabase.from('community_posts').update({ likes: post.likes + 1 }).eq('id', post.id);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-[#0a140f]">
      <SEO
        title="Community Recipes — Fantastic Food India"
        description="See what Indian home chefs are cooking! Browse AI-generated recipes made by real people, add ingredients to your basket, and share your own dishes."
        keywords="community food feed, Indian home cooking, share recipes, cook like India"
        canonicalUrl="https://www.fantasticfood.in/community"
      />

      <div className="max-w-6xl mx-auto px-4 lg:flex lg:gap-8 pt-6">
        
        {/* Main Feed Column */}
        <div className="flex-1 max-w-3xl">
          
          {/* Hero Search / Post Prompt (Cookpad Style) */}
          <div className="bg-[#12261c] rounded-3xl p-5 mb-8 shadow-xl border border-forest-800">
            <h1 className="text-2xl font-black text-white mb-4">
              {t('comm_what_cooking', 'What are you cooking today?')}
            </h1>
            <div 
              onClick={() => setShowPost(true)}
              className="bg-[#0a140f] rounded-2xl p-4 flex items-center gap-3 cursor-text border border-forest-800 hover:border-amber-500/50 transition-colors"
            >
              <Search className="w-5 h-5 text-forest-400" />
              <span className="text-forest-400 text-sm flex-1">
                {t('comm_search_placeholder', 'Search recipes, ingredients, or people...')}
              </span>
              <button className="bg-amber-500 text-forest-900 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-amber-400 transition-colors shadow-lg">
                <CameraIcon className="w-4 h-4" /> {t('comm_write_recipe', 'Write a Recipe')}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-amber-500" /> {t('comm_latest', 'Latest Recipes')}
            </h2>
          </div>

          {/* Feed */}
          <div className="space-y-8">
            <AnimatePresence>
              {posts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#12261c] rounded-[2rem] overflow-hidden border border-forest-800/80 shadow-2xl group"
                >
                  {/* Author Header */}
                  <div className="p-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                        {getInitials(post.user_name)}
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm leading-tight">{post.user_name}</p>
                        <p className="text-forest-400 text-xs mt-0.5">
                          {post.city && <span className="mr-2">{CITY_EMOJIS[post.city] || '📍'} {post.city}</span>}
                          {timeAgo(post.created_at)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Large Hero Image */}
                  <div className="relative w-full aspect-square sm:aspect-video overflow-hidden bg-[#0a140f]">
                    {post.photo_url ? (
                      <img src={post.photo_url} alt={post.recipe_name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center opacity-80">
                         <span className="text-8xl mb-4">🍽️</span>
                         <span className="text-forest-400 font-bold">{post.recipe_name}</span>
                      </div>
                    )}
                  </div>

                  {/* Recipe Details */}
                  <div className="p-5 pb-6">
                    <h3 className="font-black text-white text-2xl mb-3">{post.recipe_name}</h3>
                    
                    {/* Cooksnaps / Activity */}
                    {post.cooksnaps !== undefined && post.cooksnaps > 0 && (
                      <div className="flex items-center gap-2 mb-4 bg-forest-900/50 w-fit px-3 py-1.5 rounded-lg border border-forest-800">
                        <CameraIcon className="w-4 h-4 text-amber-500" />
                        <span className="text-sm text-forest-200 font-medium">
                          {t('comm_cooksnap_count', '{{count}} people cooked this').replace('{{count}}', post.cooksnaps.toString())}
                        </span>
                      </div>
                    )}

                    {/* Ingredients */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1.5">
                        {post.recipe_ingredients.map((ing, idx) => (
                          <span key={idx} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#1b3628] text-cream-200 border border-forest-700/50">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions & Shopping Funnel */}
                    <div className="flex items-center gap-4 border-t border-forest-800/80 pt-5">
                      <button
                        onClick={() => handleLike(post)}
                        className={`flex items-center gap-1.5 transition-all \${likedIds.has(post.id) ? 'text-pink-500' : 'text-forest-400 hover:text-pink-400'}`}
                      >
                        <Heart className={`w-6 h-6 \${likedIds.has(post.id) ? 'fill-current' : ''}`} />
                        <span className="text-sm font-bold">{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-forest-400 hover:text-white transition-colors">
                        <MessageSquare className="w-6 h-6" />
                        <span className="text-sm font-bold">0</span>
                      </button>
                      
                      <div className="flex-1"></div>

                      {/* Reverse Funnel to Basket */}
                      <Link href={`/basket?prefill=${encodeURIComponent(post.recipe_ingredients.join(','))}`}
                        onClick={() => {
                          if (typeof window !== 'undefined' && (window as any).gtag) {
                            (window as any).gtag('event', 'community_shop_ingredients_click', {
                              event_category: 'engagement',
                              event_label: post.recipe_name,
                            });
                          }
                        }}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-black transition-all hover:scale-105 active:scale-95 shadow-xl"
                        style={{ background: 'linear-gradient(135deg, #F4A23C, #f59e0b)', color: '#0F2419' }}
                      >
                        <ShoppingCart className="w-4 h-4" /> 
                        <span className="hidden sm:inline">{t('comm_get_ingredients', 'Get Ingredients')}</span>
                        <span className="sm:hidden">{t('Basket', 'Basket')}</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Sidebar (Trending/Inspiration) */}
        <div className="hidden lg:block w-80 shrink-0">
          <div className="sticky top-24 bg-[#12261c] rounded-3xl p-5 border border-forest-800 shadow-xl">
            <h3 className="text-lg font-black text-white flex items-center gap-2 mb-5">
              <TrendingUp className="w-5 h-5 text-amber-500" /> {t('comm_trending', 'Trending Now')}
            </h3>
            
            <div className="space-y-4">
              {SAMPLE_POSTS.slice(0, 4).map((post, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-pointer">
                  <img src={post.photo_url || ''} alt="" className="w-16 h-16 rounded-2xl object-cover group-hover:opacity-80 transition-opacity" />
                  <div>
                    <h4 className="text-white font-bold text-sm leading-tight group-hover:text-amber-400 transition-colors line-clamp-2">{post.recipe_name}</h4>
                    <p className="text-forest-400 text-xs mt-1">{post.user_name}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/mushroom-shop" className="block mt-8 rounded-2xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1554998171-894458cc10dd?q=80&w=400&auto=format&fit=crop" alt="Mushrooms" className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-4">
                <span className="text-amber-400 text-[10px] font-black uppercase tracking-wider mb-1">Farm Direct</span>
                <span className="text-white font-bold text-sm">Shop Organic Mushrooms</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Post Modal */}
      <AnimatePresence>
        {showPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowPost(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-lg rounded-3xl p-6 shadow-2xl bg-[#12261c] border border-forest-800"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-black text-white text-2xl flex items-center gap-2">
                  <Flame className="w-6 h-6 text-amber-500" /> {t('comm_share_what_cooked', 'Share what you cooked!')}
                </h2>
                <button onClick={() => setShowPost(false)} className="text-forest-400 hover:text-white bg-forest-800/50 p-2 rounded-full"><X className="w-5 h-5" /></button>
              </div>

              <div className="space-y-4">
                <input
                  className="w-full bg-[#0a140f] border border-forest-700 text-white placeholder-forest-500 rounded-2xl px-5 py-4 outline-none focus:border-amber-500 transition-colors font-medium"
                  placeholder={t('comm_recipe_name', 'Recipe Name (e.g. Palak Paneer) *')}
                  value={recipeName} onChange={e => setRecipeName(e.target.value)}
                />
                
                <div className="flex gap-4">
                  <input
                    className="flex-1 bg-[#0a140f] border border-forest-700 text-white placeholder-forest-500 rounded-2xl px-5 py-4 outline-none focus:border-amber-500 transition-colors font-medium text-sm"
                    placeholder={t('comm_author_name', 'Your Name (optional)')}
                    value={userName} onChange={e => setUserName(e.target.value)}
                  />
                  <select
                    className="flex-1 bg-[#0a140f] border border-forest-700 text-white rounded-2xl px-5 py-4 outline-none focus:border-amber-500 transition-colors text-sm appearance-none"
                    value={city} onChange={e => setCity(e.target.value)}
                  >
                    <option value="">City (opt)</option>
                    {CITIES.map(c => <option key={c} value={c}>{CITY_EMOJIS[c]} {c}</option>)}
                  </select>
                </div>
                
                <textarea
                  className="w-full bg-[#0a140f] border border-forest-700 text-white placeholder-forest-500 rounded-2xl px-5 py-4 outline-none focus:border-amber-500 transition-colors font-medium text-sm resize-none"
                  placeholder={t('comm_ingredients_comma', 'Key ingredients, comma separated')}
                  rows={2}
                  value={ingredients} onChange={e => setIngredients(e.target.value)}
                />

                <div
                  onClick={() => fileRef.current?.click()}
                  className="border-2 border-dashed border-forest-700 bg-[#0a140f] rounded-2xl p-6 text-center cursor-pointer hover:border-amber-500/50 transition-colors group"
                >
                  {photoPreview ? (
                    <img src={photoPreview} alt="preview" className="w-full h-48 object-cover rounded-xl" />
                  ) : (
                    <div className="py-4">
                      <div className="w-16 h-16 bg-forest-800 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <CameraIcon className="w-8 h-8 text-forest-400 group-hover:text-amber-500 transition-colors" />
                      </div>
                      <p className="text-forest-400 font-medium">{t('comm_add_photo', 'Add a photo of your dish')}</p>
                    </div>
                  )}
                  <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  onClick={handleSubmitPost}
                  disabled={!recipeName.trim() || uploading}
                  className="w-full py-4 rounded-2xl font-black text-forest-900 text-lg disabled:opacity-50 flex items-center justify-center gap-2 shadow-xl mt-2"
                  style={{ background: 'linear-gradient(135deg, #F4A23C, #f59e0b)' }}
                >
                  {uploading ? <><Loader2 className="w-6 h-6 animate-spin" /> {t('comm_posting', 'Posting...')}</> : `🥘 \${t('comm_post_recipe', 'Post Recipe')}`}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CommunityFeed;
