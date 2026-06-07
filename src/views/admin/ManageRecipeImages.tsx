import { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Search, 
  Upload, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Filter, 
  X,
  Image as ImageIcon,
  ArrowUpRight
} from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { ALL_RECIPES } from '../../data/worldRecipes';
import imageCompression from 'browser-image-compression';
import { toast } from 'react-hot-toast';

const CATEGORIES = ['All', 'Breakfast', 'Main Course', 'Dessert', 'Snack', 'Soup', 'Salad', 'Street Food', 'Drink'];
const FILTER_TYPES = [
  { label: 'All Recipes', value: 'all' },
  { label: 'Custom Uploads Only', value: 'custom' },
  { label: 'Default Fallbacks Only', value: 'default' }
];

const ManageRecipeImages = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeFilterType, setActiveFilterType] = useState('all');
  const [loading, setLoading] = useState(true);
  const [uploadingRecipeId, setUploadingRecipeId] = useState<string | null>(null);
  const [overrides, setOverrides] = useState<Record<string, string>>({});
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Refs for file inputs
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // 1. Fetch current overrides from Supabase
  const fetchOverrides = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('recipe_image_overrides')
        .select('id, image_url');
      
      if (error) {
        console.error('Error fetching overrides:', error);
      } else if (data) {
        const map: Record<string, string> = {};
        for (const item of data) {
          map[item.id] = item.image_url;
        }
        setOverrides(map);
      }
    } catch (err) {
      console.error('Fetch overrides error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOverrides();
  }, []);

  // 2. Filter recipes based on search, category, and override status
  const filteredRecipes = useMemo(() => {
    return ALL_RECIPES.filter(recipe => {
      const isAI = /^\d{4}-\d{2}-\d{2}$/.test(recipe.id);
      const displayName = recipe.translations?.en?.title || recipe.name;
      
      const matchesSearch = displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           recipe.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           recipe.id.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === 'All' ? true : recipe.category === activeCategory;
      
      const hasOverride = !!overrides[recipe.id];
      const matchesFilterType = activeFilterType === 'all' ? true :
                                activeFilterType === 'custom' ? hasOverride :
                                !hasOverride;

      return matchesSearch && matchesCategory && matchesFilterType;
    });
  }, [searchQuery, activeCategory, activeFilterType, overrides]);

  // Calculate Paginated View
  const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);
  const paginatedRecipes = useMemo(() => {
    return filteredRecipes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  }, [filteredRecipes, currentPage]);

  // Handle image upload
  const handleImageChange = async (recipeId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingRecipeId(recipeId);
    try {
      // 1. Compress image to save bandwidth and storage
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1200,
        useWebWorker: true,
      };
      
      const compressedFile = await imageCompression(file, options);

      // 2. Upload to Supabase Storage in community_photos
      const fileExt = file.name.split('.').pop() || 'jpg';
      const fileName = `recipe-override-${recipeId}-${Date.now()}.${fileExt}`;
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('community_photos')
        .upload(fileName, compressedFile);

      if (uploadError) {
        throw uploadError;
      }

      // 3. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('community_photos')
        .getPublicUrl(fileName);

      // 4. Save to DB override table via secure API route
      const res = await fetch('/api/admin/recipe-image-override', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recipeId, imageUrl: publicUrl })
      });

      if (!res.ok) {
        const errJson = await res.json();
        throw new Error(errJson.error || 'Failed to save recipe override');
      }

      // 5. Update local state
      setOverrides(prev => ({ ...prev, [recipeId]: publicUrl }));
      toast.success('Recipe image uploaded and applied successfully! 🎉');
    } catch (err: any) {
      console.error(err);
      toast.error(`Upload failed: ${err.message || err}`);
    } finally {
      setUploadingRecipeId(null);
      if (e.target) e.target.value = '';
    }
  };

  const triggerFileInput = (recipeId: string) => {
    fileInputRefs.current[recipeId]?.click();
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#0a140f]">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-white mb-2 flex items-center gap-3">
              Recipe Image Manager <span className="text-2xl animate-pulse">📷</span>
            </h1>
            <p className="text-forest-300 text-lg">
              Upload high-quality, watermark-free photos for your <span className="font-bold text-white">{ALL_RECIPES.length}</span> recipes
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            {/* Filter Type Toggle */}
            <div className="flex bg-[#12261c] rounded-2xl p-1 border border-forest-800 w-full md:w-auto">
              {FILTER_TYPES.map(filter => (
                <button
                  key={filter.value}
                  onClick={() => { setActiveFilterType(filter.value); setCurrentPage(1); }}
                  className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeFilterType === filter.value ? 'bg-amber-500 text-forest-900 shadow-md' : 'text-forest-400 hover:text-white'}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-forest-400" />
              <input 
                type="text"
                placeholder="Search recipe (Moqueca, Curry...)"
                className="pl-10 pr-4 py-3 rounded-2xl border border-forest-800 bg-[#12261c] text-white focus:border-amber-500 outline-none w-full md:w-80 shadow-inner placeholder-forest-500"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              />
              {searchQuery && (
                <button onClick={() => { setSearchQuery(''); setCurrentPage(1); }} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X className="w-4 h-4 text-forest-400 hover:text-white" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Filter UI */}
        <div className="flex flex-wrap gap-2 mb-8 bg-[#12261c] p-4 rounded-3xl border border-forest-800 shadow-xl overflow-x-auto custom-scrollbar">
          <Filter className="w-5 h-5 text-forest-400 self-center mr-2 shrink-0" />
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
              className={`shrink-0 px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeCategory === cat ? 'bg-amber-500 text-forest-900 shadow-lg' : 'bg-[#0a140f] text-forest-300 hover:bg-forest-900/50'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Recipe Grid */}
        {loading ? (
          <div className="text-center py-20">
            <Loader2 className="w-12 h-12 text-amber-500 animate-spin mx-auto mb-4" />
            <p className="text-forest-300 font-medium">Fetching recipe details...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedRecipes.map(recipe => {
                const isCustom = !!overrides[recipe.id];
                const activeImage = overrides[recipe.id] || recipe.image;
                const isAI = /^\d{4}-\d{2}-\d{2}$/.test(recipe.id);
                const displayName = recipe.translations?.en?.title || recipe.name;

                return (
                  <div key={recipe.id} className="bg-[#12261c] rounded-3xl overflow-hidden border border-forest-800/80 shadow-2xl flex flex-col group">
                    {/* Header Image Frame */}
                    <div className="relative aspect-video w-full overflow-hidden bg-[#0a140f]">
                      {activeImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img 
                          src={activeImage} 
                          alt={displayName} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-forest-600 bg-forest-950/30">
                          <ImageIcon className="w-10 h-10" />
                        </div>
                      )}

                      {/* AI vs World Badge */}
                      <span className={`absolute top-3 left-3 text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest ${isAI ? 'bg-amber-500 text-forest-900' : 'bg-forest-900 text-cream-200 border border-forest-800'}`}>
                        {isAI ? 'Aika Daily' : 'Static World'}
                      </span>

                      {/* Status Overlay */}
                      <span className={`absolute top-3 right-3 text-[9px] font-black px-2 py-0.5 rounded border uppercase tracking-wider flex items-center gap-1 ${isCustom ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-blue-500/10 text-blue-400 border-blue-500/30'}`}>
                        {isCustom ? <CheckCircle className="w-2.5 h-2.5" /> : <AlertCircle className="w-2.5 h-2.5" />}
                        {isCustom ? 'Custom Upload' : 'Default Image'}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div className="mb-4">
                        <span className="text-xs text-forest-400 font-bold uppercase tracking-wider block mb-1">
                          {recipe.country} · {recipe.category}
                        </span>
                        <h3 className="text-white font-bold text-lg leading-snug line-clamp-2" title={displayName}>
                          {displayName}
                        </h3>
                        <p className="text-[10px] text-forest-500 font-mono mt-1">ID: {recipe.id}</p>
                      </div>

                      <div className="space-y-3">
                        <input 
                          type="file"
                          accept="image/*"
                          ref={el => { fileInputRefs.current[recipe.id] = el; }}
                          onChange={(e) => handleImageChange(recipe.id, e)}
                          className="hidden"
                        />
                        
                        <button
                          onClick={() => triggerFileInput(recipe.id)}
                          disabled={uploadingRecipeId === recipe.id}
                          className="w-full bg-[#0a140f] border border-forest-800 hover:border-amber-500 hover:text-white text-forest-300 py-2.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
                        >
                          {uploadingRecipeId === recipe.id ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
                              Uploading...
                            </>
                          ) : (
                            <>
                              <Upload className="w-4 h-4" />
                              {isCustom ? 'Change Photo' : 'Upload Photo'}
                            </>
                          )}
                        </button>

                        <a
                          href={`/recipe/${recipe.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-forest-900/50 hover:bg-forest-800 border border-forest-800 text-forest-200 py-2 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                        >
                          View Live Recipe <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-4">
                <button
                  onClick={() => { setCurrentPage(p => Math.max(1, p - 1)); window.scrollTo(0, 0); }}
                  disabled={currentPage === 1}
                  className="px-6 py-2 rounded-xl bg-amber-500 text-forest-900 disabled:opacity-30 hover:bg-amber-400 transition-all font-bold text-sm shadow-md"
                >
                  Previous
                </button>
                <span className="text-forest-300 font-bold text-sm">
                  Page <span className="text-white bg-[#12261c] px-3 py-1 rounded-lg border border-forest-800">{currentPage}</span> of {totalPages}
                </span>
                <button
                  onClick={() => { setCurrentPage(p => Math.min(totalPages, p + 1)); window.scrollTo(0, 0); }}
                  disabled={currentPage === totalPages}
                  className="px-6 py-2 rounded-xl bg-amber-500 text-forest-900 disabled:opacity-30 hover:bg-amber-400 transition-all font-bold text-sm shadow-md"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}

        {filteredRecipes.length === 0 && !loading && (
          <div className="text-center py-20 bg-[#12261c] rounded-3xl border border-forest-800 shadow-xl">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2">No recipes found</h3>
            <p className="text-forest-400">Try adjusting your search query or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageRecipeImages;
