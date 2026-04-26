import { ALL_RECIPES } from '../../../../data/worldRecipes';
import RecipePageClient from '../../../../views/RecipePageClient';

export async function generateMetadata({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const resolvedParams = await params;
  const recipe = ALL_RECIPES.find(r => r.id === resolvedParams.id);
  
  if (!recipe) {
    return {
      title: 'Recipe Not Found',
    };
  }

  const lang = resolvedParams.lang || 'en';
  const tRecipe = recipe.translations?.[lang] ?? {};
  const displayName = tRecipe.title ?? recipe.name;
  
  // Basic translations for SEO title/desc.
  // In a real app, we'd use a server-side translation dictionary for these templates.
  const title = lang === 'en' 
    ? `${displayName} Recipe | Authentic ${recipe.country} Food`
    : `${displayName} रेसिपी | ${recipe.country}`;

  const description = tRecipe.description ?? 
    `Authentic ${recipe.country} recipe for ${displayName} from ${recipe.city}. ${recipe.difficulty} difficulty, ready in ${recipe.time}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.fantasticfood.in/${lang}/recipe/${recipe.id}`,
    }
  };
}

export default async function RecipePageServer({ params }: { params: Promise<{ lang: string; id: string }> }) {
  // The server component simply delegates to the client component.
  // Params are awaited to satisfy Next.js 15+ async params requirement.
  await params;
  return <RecipePageClient />;
}
