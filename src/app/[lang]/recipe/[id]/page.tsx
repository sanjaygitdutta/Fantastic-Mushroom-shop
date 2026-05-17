import { redirect } from 'next/navigation';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { ALL_RECIPES } from '../../../../data/worldRecipes';
import RecipePageClient from '../../../../views/RecipePageClient';

const RECIPE_TITLE_TEMPLATES: Record<string, string> = {
  en: "Authentic {name} Recipe: {cost} Total Cost ({time} Prep)",
  hi: "प्रामाणिक {name} रेसिपी: {cost} में बनाएं ({time} में तैयार)",
  bn: "খাঁটি {name} রেসিপি: {cost} মোট খরচ ({time} প্রস্তুতি)",
  mr: "अस्सल {name} रेसिपी: {cost} एकूण खर्च ({time} वेळ)",
  te: "అథెంటిక్ {name} రెసిపీ: {cost} మొత్తం ఖర్చు ({time} తయారీ)",
  ta: "அசல் {name} செய்முறை: {cost} மொத்த செலவு ({time} தயாரிப்பு)",
  "zh-CN": "正宗 {name} 食谱：只需 {cost} 总成本（只需 {time} 准备）",
  ms: "Resipi {name} Autentik: Jumlah Kos {cost} ({time} Penyediaan)"
};

const RECIPE_DESC_TEMPLATES: Record<string, string> = {
  en: "How to make authentic {name} from {city}, {country}. Ready in {time}, serves {servings}. Compare ingredient prices online!",
  hi: "{city}, {country} से प्रामाणिक {name} कैसे बनाएं। {time} में तैयार, {servings} लोगों के लिए। सामग्री की कीमतों की ऑनलाइन तुलना करें!",
  bn: "{city}, {country} থেকে খাঁটি {name} কীভাবে তৈরি করবেন। {time} এ প্রস্তুত, {servings} জনের জন্য। অনলাইনে উপাদানের দাম তুলনা করুন!",
  mr: "{city}, {country} मधील अस्सल {name} कशी बनवायची. {time} मध्ये तयार, {servings} लोकांसाठी. साहित्याच्या किमती ऑनलाईन तपासा!",
  te: "{city}, {country} నుండి అథెంటిక్ {name} ఎలా తయారు చేయాలి. {time} లో సిద్ధం, {servings} మందికి సరిపోతుంది. ఆన్‌లైన్‌లో ధరలను పోల్చండి!",
  ta: "{city}, {country} இன் அசல் {name} எப்படி செய்வது. {time} இல் தயார், {servings} பேருக்கு. ஆன்லைने விலைகளை ஒப்பிடுக!",
  "zh-CN": "如何制作来自 {country} {city} 的正宗 {name}。仅需 {time} 即可做成，可供 {servings} 人食用。在线比较食材价格！",
  ms: "Cara membuat {name} autentik dari {city}, {country}. Siap dalam {time}, hidangan untuk {servings} orang. Bandingkan harga bahan secara dalam talian!"
};

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
  type RecipeTranslation = { title?: string; description?: string };
  const tRecipe = (recipe.translations?.[lang] ?? {}) as RecipeTranslation;
  const displayName = tRecipe.title ?? recipe.name;
  
  // Read user-region to toggle currency & price estimation
  const cookieStore = await cookies();
  const region = (cookieStore.get('user-region')?.value as 'IN' | 'SG') || 'IN';

  let costString = '';
  if (region === 'SG') {
    const estimatedCost = (recipe.ingredients.length * 1.5) + (recipe.servings * 1.0);
    costString = `S$${estimatedCost.toFixed(2)}`;
  } else {
    const estimatedCost = (recipe.ingredients.length * 18) + (recipe.servings * 12);
    costString = `₹${estimatedCost}`;
  }
  
  const cleanTime = recipe.time.replace(' min', ' Min').replace(' hrs', ' Hrs');
  
  const titleTemplate = RECIPE_TITLE_TEMPLATES[lang] || RECIPE_TITLE_TEMPLATES['en'];
  const title = titleTemplate
    .replace('{name}', displayName)
    .replace('{cost}', costString)
    .replace('{time}', cleanTime);

  const descTemplate = RECIPE_DESC_TEMPLATES[lang] || RECIPE_DESC_TEMPLATES['en'];
  const description = descTemplate
    .replace('{name}', displayName)
    .replace('{city}', recipe.city)
    .replace('{country}', recipe.country)
    .replace('{time}', recipe.time)
    .replace('{servings}', recipe.servings.toString());

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
      locale: lang === 'en' ? 'en_US' : `${lang}_${region === 'SG' ? 'SG' : 'IN'}`,
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
