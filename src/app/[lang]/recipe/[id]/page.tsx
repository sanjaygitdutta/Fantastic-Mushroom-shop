import { redirect } from 'next/navigation';
import { ALL_RECIPES } from '../../../../data/worldRecipes';
import RecipePageClient from '../../../../views/RecipePageClient';

export async function generateMetadata({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const resolvedParams = await params;
  const recipe = ALL_RECIPES.find(r => r.id === resolvedParams.id);
  
  if (!recipe) {
    return {
      title: 'Searching Recipes...',
    };
  }

  const lang = resolvedParams.lang || 'en';
  // ... (Metadata generation stays same)
  type RecipeTranslation = { title?: string; description?: string };
  const tRecipe = (recipe.translations?.[lang] ?? {}) as RecipeTranslation;
  const displayName = tRecipe.title ?? recipe.name;
  
  const estimatedCost = (recipe.ingredients.length * 18) + (recipe.servings * 12);
  
  const title = lang === 'en' 
    ? `Authentic ${displayName} Recipe: ₹${estimatedCost} Total Cost (${recipe.time.replace(' min', ' Min').replace(' hrs', ' Hrs')} Prep)`
    : `${displayName} रेसिपी: ₹${estimatedCost} में बनाएं (${recipe.time} में तैयार)`;

  const description = tRecipe.description ?? 
    `Authentic ${recipe.country} recipe for ${displayName} from ${recipe.city}. ${recipe.difficulty} difficulty, ready in ${recipe.time}.`;

  const defaultImage = 'https://www.fantasticfood.in/og-image.jpg';
  const ogImage = recipe.image ? `https://www.fantasticfood.in${recipe.image}`.replace('https://www.fantasticfood.inhttps://', 'https://') : defaultImage;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.fantasticfood.in/${lang}/recipe/${recipe.id}`,
      languages: {
        'en': `https://www.fantasticfood.in/en/recipe/${recipe.id}`,
        'hi': `https://www.fantasticfood.in/hi/recipe/${recipe.id}`,
        'bn': `https://www.fantasticfood.in/bn/recipe/${recipe.id}`,
        'mr': `https://www.fantasticfood.in/mr/recipe/${recipe.id}`,
        'te': `https://www.fantasticfood.in/te/recipe/${recipe.id}`,
        'ta': `https://www.fantasticfood.in/ta/recipe/${recipe.id}`,
        'x-default': `https://www.fantasticfood.in/en/recipe/${recipe.id}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://www.fantasticfood.in/${lang}/recipe/${recipe.id}`,
      siteName: 'Fantastic Food',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: lang === 'en' ? 'en_US' : `${lang}_IN`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function RecipePageServer({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const resolvedParams = await params;
  const recipe = ALL_RECIPES.find(r => r.id === resolvedParams.id);
  const lang = resolvedParams.lang || 'en';

  if (!recipe) {
    redirect(`/${lang}/recipes`);
  }

  return <RecipePageClient />;
}
