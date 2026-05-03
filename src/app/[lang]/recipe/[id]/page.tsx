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
  type RecipeTranslation = { title?: string; description?: string };
  const tRecipe = (recipe.translations?.[lang] ?? {}) as RecipeTranslation;
  const displayName = tRecipe.title ?? recipe.name;
  
  // Basic translations for SEO title/desc.
  // Generate a deterministic estimated cost for the power-word title
  const estimatedCost = (recipe.ingredients.length * 18) + (recipe.servings * 12);
  
  const title = lang === 'en' 
    ? `Authentic ${displayName} Recipe: ₹${estimatedCost} Total Cost (${recipe.time.replace(' min', ' Min').replace(' hrs', ' Hrs')} Prep)`
    : `${displayName} रेसिपी: ₹${estimatedCost} में बनाएं (${recipe.time} में तैयार)`;

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
