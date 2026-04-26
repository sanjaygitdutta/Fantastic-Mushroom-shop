'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { recipes } from '../data/recipes';
import { products } from '../data/products';
import { Clock, Users, ChefHat, ArrowLeft, ShoppingBag, TrendingDown, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

const RecipeDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const { t, i18n } = useTranslation();
    const recipe = recipes.find(r => r.id === id);

    if (!recipe) {
        return <div className="min-h-screen pt-24 text-center">{t('recipe_not_found')}</div>;
    }

    // Find related products
    const relatedProducts = recipe.ingredients
        .filter(ing => ing.productId)
        .map(ing => products.find(p => p.id === ing.productId))
        .filter(Boolean);

    const lang = i18n.language;
    type RecipeTranslation = { title?: string; description?: string; ingredients?: { item: string; amount: string }[]; instructions?: string[] };
    const tRecipe: RecipeTranslation = recipe.translations?.[lang] || {};
    const displayTitle = tRecipe.title || recipe.title;
    const displayDescription = tRecipe.description || recipe.description;
    const displayIngredients = tRecipe.ingredients || recipe.ingredients;
    const displayInstructions = tRecipe.instructions || recipe.instructions;

    const handleAddIngredient = (product: any) => {
        addToCart(product);
        toast.success(t('recipe_added_cart', { productName: product.name }));
    };

    // Schema.org Recipe structured data — enables Google Rich Results (cook time, ingredient preview in search)
    const recipeSchema = {
        '@type': 'Recipe',
        name: recipe.title,
        description: recipe.description,
        image: recipe.image,
        author: { '@type': 'Organization', name: 'Fantastic Food' },
        prepTime: `PT${recipe.prepTime.replace(' min', 'M')}`,
        cookTime: `PT${recipe.cookTime.replace(' min', 'M')}`,
        recipeYield: `${recipe.servings} servings`,
        recipeCategory: recipe.tags[0] ?? 'Main Course',
        recipeCuisine: recipe.tags[1] ?? 'Indian',
        keywords: `${recipe.title}, mushroom recipe, ${recipe.tags.join(', ')}`,
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: 4.9,
            ratingCount: 158,
        },
        recipeIngredient: displayIngredients.map((i: { item: string; amount: string }) => `${i.amount} ${i.item}`),
        recipeInstructions: displayInstructions.map((step: string, i: number) => ({
            '@type': 'HowToStep',
            name: `Step ${i + 1}`,
            position: i + 1,
            text: step,
            url: `https://www.fantasticfood.in/recipe/${recipe.id}#step-${i + 1}`,
            image: recipe.image
        })),
        url: `https://www.fantasticfood.in/recipe/${recipe.id}`,
        publisher: {
            '@type': 'Organization',
            name: 'Fantastic Food',
            logo: { '@type': 'ImageObject', url: 'https://www.fantasticfood.in/logo.png' },
        },
    };

    const seoDescription = t('recipe_seo_desc', { 
        description: recipe.description, 
        prepTime: recipe.prepTime, 
        cookTime: recipe.cookTime, 
        servings: recipe.servings 
    });

    return (
        <div className="min-h-screen pt-24 pb-20 bg-white">
            <SEO
              title={t('recipe_seo_title', { title: recipe.title })}
              description={seoDescription}
              canonicalUrl={`https://www.fantasticfood.in/recipe/${recipe.id}`}
              keywords={`${recipe.title}, ${recipe.tags.join(', ')}, mushroom recipe, recipe ingredients price`}
              structuredData={recipeSchema}
            />

            <div className="max-w-4xl mx-auto px-4">
                <Link href="/recipes" className="inline-flex items-center text-gray-500 hover:text-forest-600 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t('recipe_back')}
                </Link>

                <div className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-forest-900 mb-6">{displayTitle}</h1>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">{displayDescription}</p>

                    <div className="flex flex-wrap gap-6 text-gray-700 border-y border-gray-100 py-6">
                        <div className="flex items-center">
                            <Clock className="w-5 h-5 mr-2 text-forest-500" />
                            <span className="font-semibold mr-1">{t('recipe_prep')}</span> {recipe.prepTime}
                        </div>
                        <div className="flex items-center">
                            <ChefHat className="w-5 h-5 mr-2 text-forest-500" />
                            <span className="font-semibold mr-1">{t('recipe_cook')}</span> {recipe.cookTime}
                        </div>
                        <div className="flex items-center">
                            <Users className="w-5 h-5 mr-2 text-forest-500" />
                            <span className="font-semibold mr-1">{t('recipe_serves')}</span> {recipe.servings}
                        </div>
                        <div className="flex items-center">
                            <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                                recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                                recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                            }`}>
                                {recipe.difficulty}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Ingredients & Shop */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold text-forest-900 mb-6">{t('recipe_ingredients_title')}</h3>
                        <ul className="space-y-3 mb-8">
                            {displayIngredients.map((ing: { item: string; amount: string }, i: number) => (
                                <li key={i} className="flex justify-between items-center border-b border-gray-50 pb-2">
                                    <span className="text-gray-700">{ing.item}</span>
                                    <span className="text-gray-400 font-medium text-sm">{ing.amount}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Compare ingredient prices — monetization funnel */}
                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                                    <TrendingDown className="w-4 h-4" /> {t('recipe_smart_compare')}
                                </div>
                            </div>
                            <p className="text-amber-800 text-xs mb-4 leading-relaxed">
                                {t('recipe_cheapest_cost_desc')}
                            </p>
                            <Link href={`/basket?prefill=${encodeURIComponent(recipe.ingredients.map(ing => ing.item).join(','))}`}
                                className="w-full bg-forest-800 hover:bg-forest-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 shadow-lg shadow-forest-900/20"
                            >
                                <ShoppingCart className="w-5 h-5" /> {t('recipe_compare_basket')}
                            </Link>
                        </div>

                        {relatedProducts.length > 0 && (
                            <div className="bg-mushroom-50 p-6 rounded-2xl">
                                <h4 className="font-bold text-forest-900 mb-4 flex items-center">
                                    <ShoppingBag className="w-4 h-4 mr-2" />
                                    {t('recipe_shop_ingredients')}
                                </h4>
                                <div className="space-y-4">
                                    {relatedProducts.map((product: any) => (
                                        <div key={product.id} className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3">
                                            <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover" />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-bold text-gray-900 truncate">{product.name}</p>
                                                <p className="text-xs text-forest-600 font-bold">₹{product.price}</p>
                                            </div>
                                            <button
                                                onClick={() => handleAddIngredient(product)}
                                                className="p-2 bg-forest-100 text-forest-700 rounded-lg hover:bg-forest-200 transition-colors"
                                            >
                                                <ShoppingBag className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Instructions */}
                    <div className="md:col-span-2">
                        <div className="rounded-3xl overflow-hidden mb-10 shadow-lg">
                            <img src={recipe.image} alt={recipe.title} className="w-full h-auto" />
                        </div>

                        <h3 className="text-2xl font-bold text-forest-900 mb-6">{t('recipe_instructions_title')}</h3>
                        <div className="space-y-8">
                            {displayInstructions.map((step: string, i: number) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-900 text-white flex items-center justify-center font-bold">
                                        {i + 1}
                                    </div>
                                    <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;
