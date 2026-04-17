import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingCart, Camera, X, Flame, ChefHat, Loader2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
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
  created_at: string;
}

const CITY_EMOJIS: Record<string, string> = {
  'Mumbai': '🌊', 'Delhi': '🏛️', 'Bangalore': '🌿', 'Chennai': '🌴',
  'Kolkata': '🎨', 'Hyderabad': '💎', 'Pune': '🏔️', 'Ahmedabad': '🦁',
};

const CITIES = Object.keys(CITY_EMOJIS);

const SAMPLE_POSTS: CommunityPost[] = [
  { id: 'sample-1', recipe_name: 'Dal Makhani', recipe_ingredients: ['urad dal', 'rajma', 'butter', 'cream', 'tomato', 'spices'], photo_url: null, user_name: 'Priya K.', city: 'Delhi', likes: 48, created_at: new Date(Date.now() - 3600000 * 2).toISOString() },
  { id: 'sample-2', recipe_name: 'Mushroom Masala', recipe_ingredients: ['mushroom', 'onion', 'tomato', 'garlic', 'garam masala'], photo_url: null, user_name: 'Rahul S.', city: 'Bangalore', likes: 31, created_at: new Date(Date.now() - 3600000 * 5).toISOString() },
  { id: 'sample-3', recipe_name: 'Paneer Butter Masala', recipe_ingredients: ['paneer', 'butter', 'cream', 'tomato', 'onion', 'cashews'], photo_url: null, user_name: 'Deepa M.', city: 'Mumbai', likes: 72, created_at: new Date(Date.now() - 3600000 * 8).toISOString() },
  { id: 'sample-4', recipe_name: 'Chicken Biryani', recipe_ingredients: ['chicken', 'basmati rice', 'onion', 'saffron', 'yogurt', 'whole spices'], photo_url: null, user_name: 'Ahmed A.', city: 'Hyderabad', likes: 106, created_at: new Date(Date.now() - 3600000 * 12).toISOString() },
  { id: 'sample-5', recipe_name: 'Aloo Paratha', recipe_ingredients: ['atta', 'potato', 'green chilli', 'butter', 'coriander'], photo_url: null, user_name: 'Gurpreet S.', city: 'Delhi', likes: 55, created_at: new Date(Date.now() - 3600000 * 24).toISOString() },
  { id: 'sample-6', recipe_name: 'Masoor Dal', recipe_ingredients: ['masoor dal', 'onion', 'tomato', 'turmeric', 'mustard seeds'], photo_url: null, user_name: 'Sunita P.', city: 'Pune', likes: 29, created_at: new Date(Date.now() - 3600000 * 36).toISOString() },
];

const RECIPE_EMOJIS = ['🍛', '🍜', '🥘', '🍲', '🍱', '🥗', '🍝', '🫕', '🥙', '🌮'];
function recipeEmoji(name: string) {
  const code = name.charCodeAt(0) % RECIPE_EMOJIS.length;
  return RECIPE_EMOJIS[code];
}

function timeAgo(isoStr: string) {
  const diff = Math.floor((Date.now() - new Date(isoStr).getTime()) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

const CommunityFeed = () => {
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
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Fetch real posts from Supabase (falls back gracefully if table doesn't exist)
    const fetchPosts = async () => {
      try {
        const { data } = await supabase
          .from('community_posts')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(30);
        if (data && data.length > 0) setPosts([...data, ...SAMPLE_POSTS]);
      } catch {}
    };
    fetchPosts();

    // Subscribe to new posts in real-time
    const channel = supabase
      .channel('community_posts_feed')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'community_posts' }, payload => {
        setPosts(prev => [payload.new as CommunityPost, ...prev]);
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setPhotoPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmitPost = async () => {
    if (!recipeName.trim()) return;
    setUploading(true);
    try {
      const newPost: Partial<CommunityPost> = {
        recipe_name: recipeName,
        recipe_ingredients: ingredients.split(',').map(s => s.trim()).filter(Boolean),
        user_name: userName.trim() || 'Anonymous Chef',
        city: city || null,
        photo_url: photoPreview, // store base64 for now (for a quick demo)
        likes: 0,
      };
      const { data } = await supabase.from('community_posts').insert(newPost).select().single();
      if (data) {
        setPosts(prev => [data as CommunityPost, ...prev]);
      } else {
        // Graceful fallback if table doesn't exist yet
        const fallback: CommunityPost = {
          id: `local-${Date.now()}`,
          ...newPost as any,
          created_at: new Date().toISOString(),
          likes: 0,
        };
        setPosts(prev => [fallback, ...prev]);
      }
      setShowPost(false);
      setRecipeName(''); setUserName(''); setCity(''); setIngredients(''); setPhotoPreview(null);
    } catch {
      alert('Could not post. Please run community-feed.sql in Supabase first!');
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
    <div className="min-h-screen pt-20 pb-16" style={{ background: 'linear-gradient(135deg, #0f2418 0%, #1b4332 40%, #0f2418 100%)' }}>
      <SEO
        title="Community Cook Feed — Fantastic Food India"
        description="See what Indian home chefs are cooking! Browse AI-generated recipes made by real people, add ingredients to your basket, and share your own dishes."
        keywords="community food feed, Indian home cooking, share recipes, cook like India"
        canonicalUrl="https://www.fantasticfood.in/community"
      />

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-4 pt-8 pb-6 text-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 bg-pink-400/20 border border-pink-400/40 text-pink-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <Globe className="w-4 h-4" /> Live Community Feed
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            🍳 See What <span className="text-amber-400">India</span> is Cooking!
          </h1>
          <p className="text-green-300 text-lg max-w-xl mx-auto mb-6">
            Chefs across India are using Fantastic Food + Chef Aika to cook amazing dishes. Add any dish's ingredients to your basket instantly!
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            onClick={() => setShowPost(true)}
            className="px-8 py-3.5 rounded-2xl font-black text-forest-900 text-base shadow-xl flex items-center gap-2 mx-auto"
            style={{ background: 'linear-gradient(135deg, #F4A23C, #f59e0b)' }}
          >
            <Camera className="w-5 h-5" /> Share What You Cooked!
          </motion.button>
        </motion.div>
      </div>

      {/* Live Feed Grid */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                className="bg-white/10 backdrop-blur border border-white/10 rounded-3xl overflow-hidden hover:border-amber-400/40 transition-all group"
              >
                {/* Photo or Placeholder */}
                <div className="relative h-44 flex items-center justify-center overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #1A3C2B, #0A1A10)' }}>
                  {post.photo_url ? (
                    <img src={post.photo_url} alt={post.recipe_name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-8xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                      {recipeEmoji(post.recipe_name)}
                    </span>
                  )}
                  {/* City badge */}
                  {post.city && (
                    <div className="absolute top-3 left-3 bg-black/50 backdrop-blur text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      {CITY_EMOJIS[post.city] || '📍'} {post.city}
                    </div>
                  )}
                  {/* Time badge */}
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur text-white text-xs px-2.5 py-1 rounded-full">
                    {timeAgo(post.created_at)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-black text-white text-base leading-tight">{post.recipe_name}</h3>
                      <p className="text-green-400 text-xs mt-0.5 flex items-center gap-1">
                        <ChefHat className="w-3 h-3" /> {post.user_name}
                      </p>
                    </div>
                    <button
                      onClick={() => handleLike(post)}
                      className={`flex flex-col items-center gap-0.5 transition-all ${likedIds.has(post.id) ? 'text-pink-400 scale-110' : 'text-white/50 hover:text-pink-400'}`}
                    >
                      <Heart className={`w-5 h-5 ${likedIds.has(post.id) ? 'fill-current' : ''}`} />
                      <span className="text-xs font-bold">{post.likes}</span>
                    </button>
                  </div>

                  {/* Ingredients */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.recipe_ingredients.slice(0, 5).map((ing, idx) => (
                      <span key={idx} className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-green-200 border border-white/10">
                        {ing}
                      </span>
                    ))}
                    {post.recipe_ingredients.length > 5 && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-400">
                        +{post.recipe_ingredients.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* CTA — funnel to basket! */}
                  <Link
                    to={`/basket?prefill=${encodeURIComponent(post.recipe_ingredients.join(','))}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-[1.02] active:scale-95"
                    style={{ background: 'linear-gradient(135deg, #F4A23C, #D6AD60)', color: '#0F2419' }}
                  >
                    <ShoppingCart className="w-4 h-4" /> Get Ingredients Cheapest
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Post Modal */}
      <AnimatePresence>
        {showPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowPost(false)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-md rounded-3xl p-6 shadow-2xl"
              style={{ background: '#0F2419', border: '1px solid #2D6A4F' }}
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-black text-white text-xl flex items-center gap-2"><Flame className="w-5 h-5 text-amber-400" /> Share Your Dish</h2>
                <button onClick={() => setShowPost(false)} className="text-gray-400 hover:text-white"><X className="w-5 h-5" /></button>
              </div>

              <div className="space-y-3">
                <input
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl px-4 py-3 outline-none focus:border-amber-400 transition text-sm"
                  placeholder="What did you cook? (e.g. Palak Paneer) *"
                  value={recipeName} onChange={e => setRecipeName(e.target.value)}
                />
                <input
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl px-4 py-3 outline-none focus:border-amber-400 transition text-sm"
                  placeholder="Your name (optional)"
                  value={userName} onChange={e => setUserName(e.target.value)}
                />
                <select
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 outline-none focus:border-amber-400 transition text-sm"
                  value={city} onChange={e => setCity(e.target.value)}
                >
                  <option value="">Select your city (optional)</option>
                  {CITIES.map(c => <option key={c} value={c}>{CITY_EMOJIS[c]} {c}</option>)}
                </select>
                <textarea
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl px-4 py-3 outline-none focus:border-amber-400 transition text-sm resize-none"
                  placeholder="Key ingredients, comma separated (e.g. paneer, onion, tomato)"
                  rows={2}
                  value={ingredients} onChange={e => setIngredients(e.target.value)}
                />

                {/* Photo upload */}
                <div
                  onClick={() => fileRef.current?.click()}
                  className="border-2 border-dashed border-white/20 rounded-xl p-4 text-center cursor-pointer hover:border-amber-400/50 transition-colors"
                >
                  {photoPreview ? (
                    <img src={photoPreview} alt="preview" className="w-full h-32 object-cover rounded-lg" />
                  ) : (
                    <>
                      <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Tap to add a photo of your dish (optional)</p>
                    </>
                  )}
                  <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  onClick={handleSubmitPost}
                  disabled={!recipeName.trim() || uploading}
                  className="w-full py-3.5 rounded-2xl font-black text-forest-900 text-base disabled:opacity-50 flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #F4A23C, #f59e0b)' }}
                >
                  {uploading ? <><Loader2 className="w-5 h-5 animate-spin" /> Posting...</> : '🍳 Post to Community Feed!'}
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
