'use client';
import { useState, useEffect, useRef, useMemo } from 'react';
import * as nsfwjs from 'nsfwjs';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingCart, X, Flame, Loader2, Globe, Search, TrendingUp, MessageSquare, Camera as CameraIcon, Share2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-hot-toast';
import imageCompression from 'browser-image-compression';

import { supabase } from '../lib/supabase';
import SEO from '../components/SEO';
import { recipes } from '../data/recipes';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

export interface CommunityPost {
  id: string;
  recipe_name: string;
  recipe_ingredients: string[];
  instructions?: string[];
  tags?: string[];
  photo_url: string | null;
  user_name: string;
  city: string | null;
  likes: number;
  cooksnaps?: number; // Simulated
  created_at: string;
}

interface CommunityComment {
  id: string;
  post_id: string;
  user_name: string;
  comment_text: string;
  created_at: string;
}

const CITY_EMOJIS: Record<string, string> = {
  'Mumbai': '🌊', 'Delhi': '🏛️', 'Bangalore': '🌿', 'Chennai': '🌴',
  'Kolkata': '🎨', 'Hyderabad': '💎', 'Pune': '🏔️', 'Ahmedabad': '🦁',
};

// Reliable fallback images from Picsum Photos — a free CDN that never rate-limits
const DEFAULT_IMAGES = [
  'https://picsum.photos/seed/food1/800/600',
  'https://picsum.photos/seed/food2/800/600',
  'https://picsum.photos/seed/food3/800/600',
  'https://picsum.photos/seed/food4/800/600',
  'https://picsum.photos/seed/food5/800/600',
  'https://picsum.photos/seed/food6/800/600',
];

function getFallbackImage(id: string) {
  const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return DEFAULT_IMAGES[hash % DEFAULT_IMAGES.length];
}

// Helper: swap to fallback if primary image URL fails to load
function handleImgError(e: React.SyntheticEvent<HTMLImageElement>, fallback: string) {
  const img = e.currentTarget;
  if (img.src !== fallback) {
    img.src = fallback;
  }
}

function formatDate(isoStr: string) {
  const d = new Date(isoStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
}

function getInitials(name: string) {
  return name.substring(0, 2).toUpperCase();
}

interface CommunityFeedProps {
  initialPosts?: CommunityPost[];
}

const CommunityFeed = ({ initialPosts = [] }: CommunityFeedProps) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();

  const [deepLinkPostId, setDeepLinkPostId] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const postParam = urlParams.get('post');
      if (postParam) setDeepLinkPostId(postParam);
    }
  }, []);

  const [supabasePosts, setSupabasePosts] = useState<CommunityPost[]>(initialPosts);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [showPost, setShowPost] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  
  // Phase 2 State
  const [instructionsStr, setInstructionsStr] = useState('');
  const [expandedCommentsId, setExpandedCommentsId] = useState<string | null>(null);
  const [comments, setComments] = useState<Record<string, CommunityComment[]>>({});
  const [newComment, setNewComment] = useState('');
  
  // Phase 3 State
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [formTagsStr, setFormTagsStr] = useState('');
  
  const TRENDING_FILTERS = [
    { label: '#Vegan', value: 'Vegan' },
    { label: '#HighProtein', value: 'HighProtein' },
    { label: '#Dinner', value: 'Dinner' },
    { label: '#Under30Mins', value: 'Under30Mins' },
    { label: '📍 Mumbai', value: 'Mumbai' },
    { label: '📍 Delhi', value: 'Delhi' }
  ];

  // Dynamically calculate Chef Aika posts using translated values
  const chefAikaPosts = useMemo<CommunityPost[]>(() => {
    const now = Date.now();
    return recipes.map((recipe, index) => {
      const isDate = /^\d{4}-\d{2}-\d{2}$/.test(recipe.id);
      
      let postTime: number;
      if (isDate) {
        // Parse the recipe date and compare to today's IST date
        const istNow = new Date(now + (5.5 * 60 * 60 * 1000));
        const todayIST = istNow.toISOString().split('T')[0];
        
        if (recipe.id === todayIST) {
          // Today's AI recipe: use NOW so it always sorts to the top
          postTime = now;
        } else {
          // Older AI recipes: use their date at a reasonable time (noon IST)
          postTime = new Date(`${recipe.id}T06:30:00.000Z`).getTime(); // 06:30 UTC = 12:00 IST
        }
      } else {
        // Legacy static recipes (id: '1', '2', '3'): place them oldest
        postTime = now - 3600000 - index * 86400000;
      }
      
      const translation = recipe.translations?.[currentLang as keyof typeof recipe.translations];
      const title = translation?.title || recipe.title;
      const ingredientsList = translation?.ingredients 
        ? translation.ingredients.map(i => i.item) 
        : recipe.ingredients.map(i => i.item);
      const instructionsList = translation?.instructions || recipe.instructions;

      return {
        id: `aika-${recipe.id}`,
        recipe_name: title,
        recipe_ingredients: ingredientsList,
        instructions: instructionsList,
        tags: recipe.tags || [],
        photo_url: recipe.image,
        user_name: 'Chef Aika 👩‍🍳',
        city: 'Fantastic Food Kitchen',
        likes: 150 + (index * 12),
        cooksnaps: 30 + index,
        created_at: new Date(postTime).toISOString()
      };
    });
  }, [currentLang]);

  // Combine and sort Supabase posts + Chef Aika posts
  const allPosts = useMemo(() => {
    const combined = [...supabasePosts, ...chefAikaPosts];
    combined.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    return combined.map(p => likedIds.has(p.id) ? { ...p, likes: p.likes + 1 } : p);
  }, [supabasePosts, chefAikaPosts, likedIds]);

  const filteredPosts = useMemo(() => {
    if (!selectedFilter) return allPosts;
    return allPosts.filter(p => 
      p.city === selectedFilter || 
      (p.tags && p.tags.includes(selectedFilter))
    );
  }, [allPosts, selectedFilter]);

  // Post form state
  const [recipeName, setRecipeName] = useState('');
  const [userName, setUserName] = useState('');
  const [city, setCity] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  
  // NSFW moderation state
  const [isScanning, setIsScanning] = useState(false);
  const nsfwModelRef = useRef<nsfwjs.NSFWJS | null>(null);

  const [shareCounts, setShareCounts] = useState<Record<string, number>>({});

  // Lazily load the NSFW model
  const getNsfwModel = async () => {
    if (!nsfwModelRef.current) {
      nsfwModelRef.current = await nsfwjs.load();
    }
    return nsfwModelRef.current;
  };

  const handleOpenPostModal = () => {
    if (!isAuthenticated || !user?.profile?.name) {
      toast.error(t('comm_auth_required', 'Please set up your profile first to share a recipe!'));
      router.push('/profile');
      return;
    }
    setUserName(user.profile.name);
    if (user.profile.address?.state) {
      setCity(user.profile.address.state);
    }
    setShowPost(true);
  };

  // Infinite Scroll Pagination
  useEffect(() => {
    const handleScroll = async () => {
      if (
        window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 800 &&
        !isFetchingMore &&
        hasMore &&
        supabasePosts.length > 0 &&
        !selectedFilter // Only paginate when viewing 'All Posts' for simplicity
      ) {
        setIsFetchingMore(true);
        const oldestPost = supabasePosts[supabasePosts.length - 1];
        try {
          const { data } = await supabase
            .from('community_posts')
            .select('*')
            .order('created_at', { ascending: false })
            .lt('created_at', oldestPost.created_at)
            .limit(10);

          if (data && data.length > 0) {
            const withSnaps = data.map(d => ({ ...d, cooksnaps: 0 })) as CommunityPost[];
            setSupabasePosts(prev => [...prev, ...withSnaps]);
          } else {
            setHasMore(false); // No more posts to load
          }
        } catch (err) {
          console.error("Error fetching more posts:", err);
        } finally {
          setIsFetchingMore(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [supabasePosts, isFetchingMore, hasMore, selectedFilter]);

  useEffect(() => {
    // Only fetch if we don't have initial posts (fallback) or if we want to ensure fresh data
    const fetchPosts = async () => {
      if (initialPosts.length > 0) return; // Skip if server-rendered
      setIsLoading(true);
      try {
        const { data } = await supabase
          .from('community_posts')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(100);
        if (data && data.length > 0) {
          // Add simulated cooksnaps for new posts
          const withSnaps = data.map(d => ({ ...d, cooksnaps: Math.floor(Math.random() * 10) }));
          setSupabasePosts(withSnaps);
        }
      } catch { }
      setIsLoading(false);
    };
    fetchPosts();

    const channel = supabase
      .channel('community_posts_feed')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'community_posts' }, payload => {
        const newPost = { ...payload.new as CommunityPost, cooksnaps: 0 };
        setSupabasePosts(prev => [newPost, ...prev]);
      })
      // Listen for updates (likes/comments changes)
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'community_posts' }, payload => {
        const updatedPost = payload.new as CommunityPost;
        setSupabasePosts(prev => prev.map(p => p.id === updatedPost.id ? { ...p, ...updatedPost } : p));
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [initialPosts.length]);

  // Deep Link Auto-Scroll
  useEffect(() => {
    if (deepLinkPostId && filteredPosts.length > 0) {
      setTimeout(() => {
        const element = document.getElementById(`post-${deepLinkPostId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Highlight effect
          element.style.transition = 'box-shadow 0.5s ease';
          element.style.boxShadow = '0 0 20px 5px rgba(244, 162, 60, 0.5)';
          setTimeout(() => { element.style.boxShadow = 'none'; }, 2000);
          setDeepLinkPostId(null);
        }
      }, 500);
    }
  }, [deepLinkPostId, filteredPosts]);

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsScanning(true);
      // Compress the image before uploading/scanning
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };
      
      const compressedFile = await imageCompression(file, options);

      // Set a preview immediately so user sees the compressed image
      const reader = new FileReader();
      reader.onloadend = async () => {
        const dataUrl = reader.result as string;

        try {
        const img = new window.Image();
        img.src = dataUrl;
        await new Promise(res => { img.onload = res; });

        const model = await getNsfwModel();
        const predictions = await model.classify(img);

        // Sum up all explicit categories
        const explicit = predictions.filter(p => ['Porn', 'Sexy', 'Hentai'].includes(p.className));
        const totalExplicitScore = explicit.reduce((sum, p) => sum + p.probability, 0);

        if (totalExplicitScore > 0.4) {
          toast.error('⚠️ This image was flagged as inappropriate and cannot be uploaded. Please use a food-related photo.');
          if (fileRef.current) fileRef.current.value = '';
          setIsScanning(false);
          return;
        }

          // Image is safe - proceed
          setPhotoFile(compressedFile);
          setPhotoPreview(dataUrl);
        } catch (err) {
          // If model fails to load, allow upload (fail open) but log
          console.warn('NSFW check failed, proceeding:', err);
          setPhotoFile(compressedFile);
          setPhotoPreview(dataUrl);
        }
        setIsScanning(false);
      };
      reader.readAsDataURL(compressedFile);
    } catch (err) {
      console.error('Error compressing image:', err);
      setIsScanning(false);
      toast.error('Failed to process image. Please try another one.');
    }
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
        instructions: instructionsStr.split('\n').map(s => s.trim()).filter(Boolean),
        tags: formTagsStr.split(',').map(t => t.trim().replace(/^#/, '')).filter(Boolean),
        user_name: userName.trim() || 'Anonymous Chef',
        city: city || null,
        photo_url: finalPhotoUrl,
        likes: 0,
      };

      const { data, error } = await supabase.from('community_posts').insert(newPost).select().single();

      if (error) throw error;

      if (data) {
        setSupabasePosts(prev => [{ ...data as CommunityPost, cooksnaps: 0 }, ...prev]);
        toast.success(t('comm_post_success', 'Recipe shared successfully! 🎉'));
      }

      setShowPost(false);
      setRecipeName(''); setUserName(''); setCity(''); setIngredients(''); setInstructionsStr(''); setFormTagsStr(''); setPhotoPreview(null); setPhotoFile(null);
    } catch (err) {
      console.error(err);
      toast.error('Could not post. Please check your connection or try again.');
    }
    setUploading(false);
  };

  const handleLike = async (post: CommunityPost) => {
    if (likedIds.has(post.id)) return;
    setLikedIds(prev => new Set([...prev, post.id]));
    if (!post.id.startsWith('aika') && !post.id.startsWith('local')) {
      await supabase.from('community_posts').update({ likes: post.likes + 1 }).eq('id', post.id);
    }
  };

  const handleToggleComments = async (postId: string) => {
    if (expandedCommentsId === postId) {
      setExpandedCommentsId(null);
      return;
    }
    setExpandedCommentsId(postId);
    if (!comments[postId]) {
      // Avoid fetching for Aika mock posts or fetch if implemented. For now, fetch all.
      if (!postId.startsWith('aika')) {
        const { data } = await supabase
          .from('community_comments')
          .select('*')
          .eq('post_id', postId)
          .order('created_at', { ascending: true });
        if (data) setComments(prev => ({ ...prev, [postId]: data as CommunityComment[] }));
      } else {
        setComments(prev => ({ ...prev, [postId]: [] }));
      }
    }
  };

  const handlePostComment = async (postId: string) => {
    if (!isAuthenticated || !user?.profile?.name) {
      toast.error(t('comm_auth_required', 'Please set up your profile first to comment!'));
      router.push('/profile');
      return;
    }
    if (!newComment.trim()) return;
    
    // Can't save to Aika posts in DB since they don't exist in Supabase, but we can simulate locally
    const commentData = {
      post_id: postId,
      user_name: user.profile.name,
      comment_text: newComment.trim(),
    };
    
    if (!postId.startsWith('aika')) {
      const { data, error } = await supabase.from('community_comments').insert(commentData).select().single();
      if (!error && data) {
        setComments(prev => ({ ...prev, [postId]: [...(prev[postId] || []), data as CommunityComment] }));
      }
    } else {
      // Simulate comment on Aika post locally
      const mockComment = { ...commentData, id: `mock-${Date.now()}`, created_at: new Date().toISOString() };
      setComments(prev => ({ ...prev, [postId]: [...(prev[postId] || []), mockComment] }));
    }
    setNewComment('');
  };

  const handleShare = async (post: CommunityPost) => {
    // Increment local share count
    setShareCounts(prev => ({ ...prev, [post.id]: (prev[post.id] || 0) + 1 }));
    
    // NOTE: To store shares in Supabase, you must add a 'shares' INT column to the community_posts table.
    // if (!post.id.startsWith('aika')) {
    //   await supabase.rpc('increment_share', { post_id: post.id });
    // }

    const shareData = {
      title: `${post.recipe_name} by ${post.user_name}`,
      text: `Check out this amazing recipe for ${post.recipe_name} on Fantastic Food! 🍳🛒`,
      // For Chef Aika posts: share the real /recipe page to avoid duplicate content for Google.
      // For real user posts: share the community deep link so others can discover the feed.
      url: post.id.startsWith('aika')
        ? `https://www.fantasticfood.in/recipe/${post.id.replace('aika-', '')}?from=community`
        : `https://www.fantasticfood.in/community?post=${post.id}`,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
        toast.success(t('comm_link_copied', 'Link copied to clipboard!'));
      }
    } catch (err) {
      console.log('Error sharing:', err);
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
              onClick={handleOpenPostModal}
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

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-amber-500" /> {t('comm_latest', 'Latest Recipes')}
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-3 overflow-x-auto custom-scrollbar pb-4 mb-4">
            <button
              onClick={() => setSelectedFilter(null)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-bold transition-colors \${!selectedFilter ? 'bg-amber-500 text-forest-900' : 'bg-[#12261c] text-forest-300 border border-forest-800 hover:text-white'}`}
            >
              All Posts
            </button>
            {TRENDING_FILTERS.map(filter => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-bold transition-colors \${selectedFilter === filter.value ? 'bg-amber-500 text-forest-900' : 'bg-[#12261c] text-forest-300 border border-forest-800 hover:text-white'}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Feed */}
          <div className="space-y-8">
            {isLoading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="bg-[#12261c] rounded-[2rem] overflow-hidden border border-forest-800/80 shadow-2xl animate-pulse">
                  <div className="p-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-forest-800" />
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-forest-800 rounded w-1/3" />
                      <div className="h-3 bg-forest-800/50 rounded w-1/4" />
                    </div>
                  </div>
                  <div className="w-full aspect-square sm:aspect-video bg-[#0a140f]" />
                  <div className="p-5 space-y-4">
                    <div className="h-8 bg-forest-800 rounded w-2/3" />
                    <div className="h-4 bg-forest-800 rounded w-1/2" />
                    <div className="flex gap-2">
                      <div className="h-8 bg-forest-800 rounded-xl w-24" />
                      <div className="h-8 bg-forest-800 rounded-xl w-24" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <AnimatePresence>
                {filteredPosts.map((post, i) => (
                  <div key={post.id}>
                    <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                          "@context": "https://schema.org",
                          "@type": "Recipe",
                          "name": post.recipe_name,
                          "image": post.photo_url || getFallbackImage(post.id),
                          "author": {
                            "@type": "Person",
                            "name": post.user_name
                          },
                          "datePublished": post.created_at,
                          "description": `A delicious ${post.recipe_name} recipe shared by ${post.user_name} on Fantastic Food.`,
                          "recipeIngredient": post.recipe_ingredients || [],
                          "recipeInstructions": (post.instructions || []).map(step => ({
                            "@type": "HowToStep",
                            "text": step
                          }))
                        })
                      }}
                    />
                    <motion.div
                      id={`post-${post.id}`}
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
                        <Link href={`/profile`} className="font-bold text-white text-sm leading-tight hover:text-amber-500 transition-colors">
                          {post.user_name}
                        </Link>
                        <p className="text-forest-400 text-xs mt-0.5">
                          {post.city && <span className="mr-2">{CITY_EMOJIS[post.city] || '📍'} {post.city}</span>}
                          {formatDate(post.created_at)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Large Hero Image */}
                  <div className="relative w-full aspect-square sm:aspect-video overflow-hidden bg-[#0a140f]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.photo_url || getFallbackImage(post.id)}
                      alt={post.recipe_name}
                      onError={(e) => handleImgError(e, getFallbackImage(post.id))}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
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

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="mb-4 flex flex-wrap gap-2">
                        {post.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs font-bold text-amber-500 bg-amber-500/10 px-2 py-1 rounded-md">
                            #{tag}
                          </span>
                        ))}
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

                    {/* Instructions */}
                    {post.instructions && post.instructions.length > 0 && (
                      <div className="mb-5 space-y-2">
                        <h4 className="text-white font-bold text-sm">Instructions</h4>
                        <ol className="list-decimal list-inside text-sm text-forest-300 space-y-1">
                          {post.instructions.map((step, idx) => (
                            <li key={idx} className="leading-relaxed">{step}</li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {/* Actions & Shopping Funnel */}
                    <div className="flex items-center gap-6 border-t border-forest-800/80 pt-5">
                      <motion.button
                        whileTap={{ scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => handleLike(post)}
                        className={`flex items-center gap-2 transition-colors ${likedIds.has(post.id) ? 'text-pink-500' : 'text-forest-200 hover:text-pink-400'}`}
                      >
                        <Heart className={`w-6 h-6 ${likedIds.has(post.id) ? 'fill-current' : ''}`} />
                        <span className="text-sm font-bold">{post.likes}</span>
                      </motion.button>
                      <button 
                        onClick={() => handleToggleComments(post.id)}
                        className="flex items-center gap-2 text-forest-200 hover:text-white transition-colors"
                      >
                        <MessageSquare className="w-6 h-6" />
                        <span className="text-sm font-bold">{comments[post.id]?.length || 0}</span>
                      </button>
                      <button 
                        onClick={() => handleShare(post)}
                        className="flex items-center gap-2 text-forest-200 hover:text-amber-500 transition-colors"
                        title="Share Recipe"
                      >
                        <Share2 className="w-5 h-5" />
                        <span className="text-sm font-bold">{shareCounts[post.id] || 0}</span>
                      </button>

                      <div className="flex-1"></div>

                      {/* Buy the Kit - Enhanced Shopping Funnel */}
                      <Link href={`/basket?prefill=${encodeURIComponent(post.recipe_ingredients.join(','))}`}
                        onClick={() => {
                          if (typeof window !== 'undefined' && (window as any).gtag) {
                            (window as any).gtag('event', 'community_shop_ingredients_click', {
                              event_category: 'engagement',
                              event_label: post.recipe_name,
                            });
                          }
                        }}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                        style={{ background: 'linear-gradient(135deg, #F4A23C, #f59e0b)', color: '#0F2419' }}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span className="hidden sm:inline">Buy the Kit</span>
                        <span className="sm:hidden">Buy Kit</span>
                      </Link>
                    </div>

                    {/* Comments Section */}
                    <AnimatePresence>
                      {expandedCommentsId === post.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-forest-800/80 pt-4 mt-4 space-y-4"
                        >
                          <div className="space-y-3 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                            {(comments[post.id] || []).map(c => (
                              <div key={c.id} className="bg-forest-900/30 rounded-xl p-3 border border-forest-800/50">
                                <p className="text-xs font-bold text-amber-500 mb-1">{c.user_name}</p>
                                <p className="text-sm text-forest-200">{c.comment_text}</p>
                              </div>
                            ))}
                            {(!comments[post.id] || comments[post.id].length === 0) && (
                              <p className="text-sm text-forest-500 italic">No comments yet. Be the first!</p>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <input
                              className="flex-1 bg-[#0a140f] border border-forest-700 text-white rounded-xl px-4 py-2 outline-none focus:border-amber-500 text-sm"
                              placeholder="Write a comment..."
                              value={newComment}
                              onChange={e => setNewComment(e.target.value)}
                              onKeyDown={e => e.key === 'Enter' && handlePostComment(post.id)}
                            />
                            <button
                              onClick={() => handlePostComment(post.id)}
                              className="bg-amber-500 text-forest-900 px-4 py-2 rounded-xl text-sm font-bold hover:bg-amber-400"
                            >
                              Post
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            ))}
            {isFetchingMore && (
              <div className="flex justify-center py-4">
                <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            </AnimatePresence>
            )}
          </div>
        </div>

        {/* Right Sidebar (Trending/Inspiration) */}
        <div className="hidden lg:block w-80 shrink-0">
          <div className="sticky top-24 bg-[#12261c] rounded-3xl p-5 border border-forest-800 shadow-xl">
            <h3 className="text-lg font-black text-white flex items-center gap-2 mb-5">
              <TrendingUp className="w-5 h-5 text-amber-500" /> {t('comm_trending', 'Trending Now')}
            </h3>

            <div className="space-y-4">
              {allPosts.slice(0, 4).map((post, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-pointer">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.photo_url || getFallbackImage(post.id)}
                      alt=""
                      onError={(e) => handleImgError(e, getFallbackImage(post.id))}
                      className="w-16 h-16 object-cover group-hover:opacity-80 transition-opacity"
                    />
                  </div>
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
              className="w-full max-w-lg rounded-3xl p-6 shadow-2xl bg-[#12261c] border border-forest-800 max-h-[90vh] overflow-y-auto custom-scrollbar"
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



                <textarea
                  className="w-full bg-[#0a140f] border border-forest-700 text-white placeholder-forest-500 rounded-2xl px-5 py-4 outline-none focus:border-amber-500 transition-colors font-medium text-sm resize-none"
                  placeholder={t('comm_ingredients_comma', 'Key ingredients, comma separated')}
                  rows={2}
                  value={ingredients} onChange={e => setIngredients(e.target.value)}
                />

                <textarea
                  className="w-full bg-[#0a140f] border border-forest-700 text-white placeholder-forest-500 rounded-2xl px-5 py-4 outline-none focus:border-amber-500 transition-colors font-medium text-sm resize-none"
                  placeholder="Instructions (one step per line, optional)"
                  rows={4}
                  value={instructionsStr} onChange={e => setInstructionsStr(e.target.value)}
                />

                <input
                  className="w-full bg-[#0a140f] border border-forest-700 text-white placeholder-forest-500 rounded-2xl px-5 py-4 outline-none focus:border-amber-500 transition-colors font-medium text-sm"
                  placeholder="Tags (comma separated, e.g. Vegan, Spicy)"
                  value={formTagsStr} onChange={e => setFormTagsStr(e.target.value)}
                />

                <div
                  onClick={() => !isScanning && fileRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-colors group ${isScanning ? 'border-amber-500 bg-amber-500/5 cursor-wait' : 'border-forest-700 bg-[#0a140f] hover:border-amber-500/50'}`}
                >
                  {isScanning ? (
                    <div className="py-4 flex flex-col items-center gap-3">
                      <Loader2 className="w-10 h-10 text-amber-500 animate-spin" />
                      <p className="text-amber-500 font-bold text-sm">🛡️ Scanning image for safety...</p>
                      <p className="text-forest-500 text-xs">Our AI is checking your photo</p>
                    </div>
                  ) : photoPreview ? (
                    <img src={photoPreview} alt="preview" className="w-full h-48 object-cover rounded-xl" />
                  ) : (
                    <div className="py-4">
                      <div className="w-16 h-16 bg-forest-800 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <CameraIcon className="w-8 h-8 text-forest-400 group-hover:text-amber-500 transition-colors" />
                      </div>
                      <p className="text-forest-400 font-medium">{t('comm_add_photo', 'Add a photo of your dish')}</p>
                      <p className="text-forest-600 text-xs mt-1">🛡️ All images are AI-moderated for safety</p>
                    </div>
                  )}
                  <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  onClick={handleSubmitPost}
                  disabled={!recipeName.trim() || uploading || isScanning}
                  className="w-full py-4 rounded-2xl font-black text-forest-900 text-lg disabled:opacity-50 flex items-center justify-center gap-2 shadow-xl mt-2"
                  style={{ background: 'linear-gradient(135deg, #F4A23C, #f59e0b)' }}
                >
                  {uploading ? <><Loader2 className="w-6 h-6 animate-spin" /> {t('comm_posting', 'Posting...')}</> : <>🥘 {t('comm_post_recipe', 'Post Recipe')}</>}
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
