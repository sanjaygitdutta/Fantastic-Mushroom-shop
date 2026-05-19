import type { MetadataRoute } from 'next';
import sitemapLinks from '../data/sitemapLinks.json';
import { ALL_RECIPES } from '../data/worldRecipes';
import { BLOG_POSTS } from '../data/blogPosts';

export const revalidate = 86400; // Cache for 24 hours

const BASE_URL = 'https://www.fantasticfood.in';

const LANGUAGES = ['en', 'hi', 'bn', 'mr', 'te', 'ta'];

export async function generateSitemaps() {
  // We chunk our sitemaps by language to bypass the 50,000 URL limit.
  // Each language will have roughly 7,500 URLs.
  return LANGUAGES.map((_, index) => ({
    id: index,
  }));
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const langCode = LANGUAGES[id] || 'en';
  
  // Base paths - always include langCode prefix, even for 'en'
  // to match the canonical and hreflang tags 100%
  const langBase = `${BASE_URL}/${langCode}`;
  
  // Helper to generate alternates for a path
  const getAlternates = (path: string) => {
    return LANGUAGES.reduce((acc, l) => {
      acc[l] = `${BASE_URL}/${l}/${path}`;
      return acc;
    }, {} as Record<string, string>);
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
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: path === '' ? 1.0 : 0.9,
    alternates: {
      languages: getAlternates(path)
    }
  }));

  // Cities
  const cityRoutes = sitemapLinks.cities.map((city: string) => ({
    url: `${langBase}/city/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
    alternates: {
      languages: getAlternates(`city/${city}`)
    }
  }));

  // Food Items
  const foodRoutes = sitemapLinks.foodItems.map((food: string) => ({
    url: `${langBase}/food/${food}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
    alternates: {
      languages: getAlternates(`food/${food}`)
    }
  }));

  // AI Recipes
  const recipeRoutes = ALL_RECIPES.map((recipe) => ({
    url: `${langBase}/recipe/${recipe.id}`,
    lastModified: new Date(),
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
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: getAlternates(`blog/${blog.slug}`)
      }
    }));

  return [...coreRoutes, ...cityRoutes, ...foodRoutes, ...recipeRoutes, ...blogRoutes];
}
