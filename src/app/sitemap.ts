import type { MetadataRoute } from 'next';
import sitemapLinks from '../data/sitemapLinks.json';
import { ALL_RECIPES } from '../data/worldRecipes';
import { BLOG_POSTS } from '../data/blogPosts';
import { supabase } from '../lib/supabase';
import { MOCK_DB } from '../data/mockPrices';

export const revalidate = 86400; // Cache for 24 hours

const BASE_URL = 'https://www.fantasticfood.in';

const LANGUAGES = ['en', 'hi', 'bn', 'mr', 'te', 'ta', 'zh-CN', 'ms'];

export async function generateSitemaps() {
  const sitemaps = [];
  for (let i = 0; i < LANGUAGES.length; i++) {
    sitemaps.push({ id: `${i}-core` });
    sitemaps.push({ id: `${i}-cityfood-0` });
    sitemaps.push({ id: `${i}-cityfood-1` });
  }
  return sitemaps;
}

export default async function sitemap({ id }: { id: any }): Promise<MetadataRoute.Sitemap> {
  const resolvedId = typeof id === 'object' && id !== null && 'then' in id ? await id : id;
  const parts = String(resolvedId).split('-');
  const numericId = parseInt(parts[0], 10);
  const chunkType = parts.slice(1).join('-'); // 'core', 'cityfood-0', 'cityfood-1'

  const langCode = LANGUAGES[numericId] || 'en';
  
  // Base paths - if 'en', omit the /en prefix to match canonicals perfectly
  const langBase = langCode === 'en' ? BASE_URL : `${BASE_URL}/${langCode}`;
  
  // Format current date as YYYY-MM-DD for standard strict W3C compliance (no milliseconds)
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Fetch active products directly from Supabase live database (paginated to fetch all items)
  let dbProductIds: string[] = [];
  try {
    let page = 0;
    const pageSize = 1000;
    let hasMore = true;
    while (hasMore) {
      const { data: products, error } = await supabase
        .from('products')
        .select('id')
        .range(page * pageSize, (page + 1) * pageSize - 1);
      
      if (error) {
        throw error;
      }
      
      if (products && products.length > 0) {
        dbProductIds.push(...products.map((p: any) => p.id));
        if (products.length < pageSize) {
          hasMore = false;
        } else {
          page++;
        }
      } else {
        hasMore = false;
      }
    }
  } catch (err) {
    console.warn('⚠️ Sitemap DB query failed, falling back to mock DB keys:', err);
  }

  // Combine live product IDs and local mock DB keys to ensure all active products are indexed
  const foodItems = Array.from(new Set([...dbProductIds, ...Object.keys(MOCK_DB)]));
  
  // Chinese (zh-CN) and Malay (ms) focus purely on Singapore.
  // For these languages, the only relevant city is "singapore" (no Indian cities).
  const targetCities = (langCode === 'zh-CN' || langCode === 'ms') ? ['singapore'] : sitemapLinks.cities;
  
  // Helper to generate alternates for a path
  const getAlternates = (path: string) => {
    const alternates = LANGUAGES.reduce((acc, l) => {
      if (l === 'en') {
        acc[l] = `${BASE_URL}${path ? `/${path}` : ''}`;
      } else {
        acc[l] = `${BASE_URL}/${l}${path ? `/${path}` : ''}`;
      }
      return acc;
    }, {} as Record<string, string>);
    // Add x-default pointing to unprefixed English version
    alternates['x-default'] = `${BASE_URL}${path ? `/${path}` : ''}`;
    return alternates;
  };

  if (chunkType === 'core') {
    const coreRoutes = [
      '',
      'compare',
      'mushroom-shop',
      'recipes',
      'basket',
      'meal-calculator',
      'coupons',
      'savings',
      'community'
    ].map(path => ({
      url: `${langBase}${path ? `/${path}` : ''}`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: path === '' ? 1.0 : 0.9,
      alternates: {
        languages: getAlternates(path)
      }
    }));

    // Cities
    const cityRoutes = targetCities.map((city: string) => {
      const encodedCity = encodeURIComponent(city);
      return {
        url: `${langBase}/city/${encodedCity}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
        alternates: {
          languages: getAlternates(`city/${encodedCity}`)
        }
      };
    });

    // Food Items (only active items in price database)
    const foodRoutes = foodItems.map((food: string) => {
      const encodedFood = encodeURIComponent(food);
      return {
        url: `${langBase}/food/${encodedFood}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
        alternates: {
          languages: getAlternates(`food/${encodedFood}`)
        }
      };
    });

    // AI Recipes
    const recipeRoutes = ALL_RECIPES.map((recipe) => {
      const encodedRecipeId = encodeURIComponent(recipe.id);
      return {
        url: `${langBase}/recipe/${encodedRecipeId}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
        alternates: {
          languages: getAlternates(`recipe/${encodedRecipeId}`)
        }
      };
    });

    // AI Blogs
    const blogRoutes = BLOG_POSTS
      .filter((blog) => new Date(blog.date) <= new Date())
      .map((blog) => {
        const encodedSlug = encodeURIComponent(blog.slug);
        return {
          url: `${langBase}/blog/${encodedSlug}`,
          lastModified: currentDate,
          changeFrequency: 'monthly' as const,
          priority: 0.8,
          alternates: {
            languages: getAlternates(`blog/${encodedSlug}`)
          }
        };
      });

    return [...coreRoutes, ...cityRoutes, ...foodRoutes, ...recipeRoutes, ...blogRoutes];
  }

  if (chunkType === 'cityfood-0' || chunkType === 'cityfood-1') {
    // Programmatic local City × Food Item landing pages
    // For standard languages: 52 cities × 100 food items = 5,200 local landing pages
    // For Chinese/Malay: 1 city (singapore) × 100 food items = 100 local landing pages
    const topFoodItems = foodItems.slice(0, 100);

    const allCityItemPairs = targetCities.flatMap((city: string) => {
      return topFoodItems.map((food: string) => ({ city, food }));
    });

    const halfLength = Math.ceil(allCityItemPairs.length / 2);
    const chunkPairs = chunkType === 'cityfood-0'
      ? allCityItemPairs.slice(0, halfLength)
      : allCityItemPairs.slice(halfLength);

    return chunkPairs.map(({ city, food }) => {
      const encodedCity = encodeURIComponent(city);
      const encodedFood = encodeURIComponent(food);
      return {
        url: `${langBase}/city/${encodedCity}/${encodedFood}`,
        lastModified: currentDate,
        changeFrequency: 'daily' as const,
        priority: 0.8,
        alternates: {
          languages: getAlternates(`city/${encodedCity}/${encodedFood}`)
        }
      };
    });
  }

  return [];
}
