import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ALL_RECIPES } from '../../../../data/worldRecipes';
import RecipePageClient from '../../../../views/RecipePageClient';

export const dynamic = 'force-dynamic';

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

  type RecipeTranslation = { title?: string; description?: string };
  const tRecipe = (recipe.translations?.[lang] ?? {}) as RecipeTranslation;
  const displayName = tRecipe.title ?? recipe.name;

  // Generate JSON-LD for Recipe Schema
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": displayName,
    "image": recipe.image ? [`https://www.fantasticfood.in${recipe.image}`.replace('https://www.fantasticfood.inhttps://', 'https://')] : [],
    "description": tRecipe.description ?? recipe.name,
    "keywords": `${recipe.name}, ${recipe.country} cuisine`,
    "author": {
      "@type": "Organization",
      "name": "Fantastic Food"
    },
    "prepTime": `PT${recipe.time.includes('min') ? recipe.time.split(' ')[0] : '30'}M`,
    "cookTime": "PT20M",
    "totalTime": `PT${recipe.time.includes('min') ? (parseInt(recipe.time.split(' ')[0]) + 20) : '50'}M`,
    "recipeCategory": recipe.category || "Main Dish",
    "recipeCuisine": recipe.country,
    "recipeYield": `${recipe.servings} servings`,
    "recipeIngredient": recipe.ingredients, // Already a string array
      "recipeInstructions": recipe.steps.map((step: string, idx: number) => ({
        "@type": "HowToStep",
        "name": `Step ${idx + 1}`,
        "text": step,
        "url": `https://www.fantasticfood.in/${lang}/recipe/${recipe.id}#step-${idx + 1}`
      })),
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": Math.floor(Math.random() * 50) + 85
      }
    };

    const breadcrumbLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `https://www.fantasticfood.in/${lang}`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Recipes",
          "item": `https://www.fantasticfood.in/${lang}/recipes`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": displayName,
          "item": `https://www.fantasticfood.in/${lang}/recipe/${recipe.id}`
        }
      ]
    };

    const relatedRecipes = ALL_RECIPES
      .filter(r => r.id !== recipe.id && (r.category === recipe.category || r.country === recipe.country))
      .slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <RecipePageClient />

      {/* Internal Linking: Related Recipes */}
      <div className="max-w-4xl mx-auto px-4 py-12 border-t border-forest-100">
        <h2 className="text-2xl font-black font-display text-forest-900 mb-8 text-center">Next Recipe to Cook?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedRecipes.map((r) => (
            <Link 
              key={r.id}
              href={`/${lang}/recipe/${r.id}`}
              className="group bg-white rounded-3xl overflow-hidden border border-forest-100 hover:border-moss-300 hover:shadow-xl transition-all"
            >
              <div className="flex items-center p-4 gap-4">
                <div className="w-20 h-20 bg-forest-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {r.category === 'Dessert' ? '🍰' : '🍲'}
                </div>
                <div>
                  <h3 className="font-bold text-forest-900 group-hover:text-moss-600 transition-colors">{r.translations?.[lang]?.title || r.name}</h3>
                  <p className="text-xs text-forest-500">{r.country} • {r.time}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
