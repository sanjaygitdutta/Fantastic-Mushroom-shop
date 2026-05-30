import type { MetadataRoute } from 'next';
import sitemapLinks from '../data/sitemapLinks.json';
import { ALL_RECIPES } from '../data/worldRecipes';
import { BLOG_POSTS } from '../data/blogPosts';

export const revalidate = 86400; // Cache for 24 hours

const BASE_URL = 'https://www.fantasticfood.in';

const LANGUAGES = ['en', 'hi', 'bn', 'mr', 'te', 'ta', 'zh-CN', 'ms'];

export async function generateSitemaps() {
  // We chunk our sitemaps by language to bypass the 50,000 URL limit.
  // Each language will have roughly 7,500 URLs.
  return LANGUAGES.map((_, index) => ({
    id: index,
  }));
}

export default async function sitemap({ id }: { id: any }): Promise<MetadataRoute.Sitemap> {
  const resolvedId = typeof id === 'object' && id !== null && 'then' in id ? await id : id;
  const numericId = parseInt(resolvedId, 10);
  const langCode = LANGUAGES[numericId] || 'en';
  
  // Base paths - if 'en', omit the /en prefix to match canonicals perfectly
  const langBase = langCode === 'en' ? BASE_URL : `${BASE_URL}/${langCode}`;
  
  // Format current date as YYYY-MM-DD for standard strict W3C compliance (no milliseconds)
  const currentDate = new Date().toISOString().split('T')[0];
  
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
  const cityRoutes = targetCities.map((city: string) => ({
    url: `${langBase}/city/${city}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
    alternates: {
      languages: getAlternates(`city/${city}`)
    }
  }));

  // Food Items
  const foodRoutes = sitemapLinks.foodItems.map((food: string) => ({
    url: `${langBase}/food/${food}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
    alternates: {
      languages: getAlternates(`food/${food}`)
    }
  }));

  // AI Recipes
  const recipeRoutes = ALL_RECIPES.map((recipe) => ({
    url: `${langBase}/recipe/${recipe.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    alternates: {
      languages: getAlternates(`recipe/${recipe.id}`)
    }
  }));

  // AI Blogs
  const blogRoutes = BLOG_POSTS
    .filter((blog) => new Date(blog.date) <= new Date())
    .map((blog) => ({
      url: `${langBase}/blog/${blog.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: getAlternates(`blog/${blog.slug}`)
      }
    }));

  // Programmatic local City × Food Item landing pages
  // For standard languages: 52 cities × 100 food items = 5,200 local landing pages
  // For Chinese/Malay: 1 city (singapore) × 100 food items = 100 local landing pages
  const topFoodItems = sitemapLinks.foodItems.slice(0, 100);

  const cityItemRoutes = targetCities.flatMap((city: string) => {
    return topFoodItems.map((food: string) => ({
      url: `${langBase}/city/${city}/${food}`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
      alternates: {
        languages: getAlternates(`city/${city}/${food}`)
      }
    }));
  });

  return [...coreRoutes, ...cityRoutes, ...foodRoutes, ...recipeRoutes, ...blogRoutes, ...cityItemRoutes];
}
