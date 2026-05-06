import type { MetadataRoute } from 'next';
import sitemapLinks from '../data/sitemapLinks.json';
import { ALL_RECIPES } from '../data/worldRecipes';
import { BLOG_POSTS } from '../data/blogPosts';
import { supabase } from '../lib/supabase';

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
  
  const coreRoutes: MetadataRoute.Sitemap = [
    { url: `${langBase}`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${langBase}/compare`, lastModified: new Date(), changeFrequency: 'always', priority: 0.95 },
    { url: `${langBase}/mushroom-shop`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${langBase}/recipes`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.85 },
    { url: `${langBase}/basket`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${langBase}/meal-calculator`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${langBase}/coupons`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${langBase}/savings`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${langBase}/community`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
  ];

  // Cities (50+)
  const cityRoutes: MetadataRoute.Sitemap = sitemapLinks.cities.map((city: string) => ({
    url: `${langBase}/city/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Food Items (7300+)
  const foodRoutes: MetadataRoute.Sitemap = sitemapLinks.foodItems.map((food: string) => ({
    url: `${langBase}/food/${food}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // AI Recipes (250+)
  const recipeRoutes: MetadataRoute.Sitemap = ALL_RECIPES.map((recipe) => ({
    url: `${langBase}/recipe/${recipe.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // AI Blogs
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((blog) => ({
    url: `${langBase}/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Community Feed Posts (Dynamic from Supabase)
  let communityRoutes: MetadataRoute.Sitemap = [];
  try {
    const { data: posts } = await supabase
      .from('community_posts')
      .select('id, created_at');
    
    if (posts) {
      communityRoutes = posts.map(post => ({
        url: `${langBase}/community?post=${post.id}`,
        lastModified: new Date(post.created_at),
        changeFrequency: 'monthly',
        priority: 0.85,
      }));
    }
  } catch (error) {
    console.error('Error fetching community posts for sitemap:', error);
  }

  return [...coreRoutes, ...cityRoutes, ...foodRoutes, ...recipeRoutes, ...blogRoutes, ...communityRoutes];
}
