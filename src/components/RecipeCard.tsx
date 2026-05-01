import { motion } from 'framer-motion';
import { Clock, Users, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { useTranslation, Trans } from 'react-i18next';
import type { WorldRecipe } from '../data/worldRecipes';

const DIFFICULTY_COLORS: Record<string, string> = {
  Easy: 'bg-green-100 text-green-700',
  Medium: 'bg-amber-100 text-amber-700',
  Hard: 'bg-red-100 text-red-700',
};

export const CATEGORY_ICONS: Record<string, string> = {
  'Breakfast': '🌅', 'Main Course': '🍽️', 'Dessert': '🍰',
  'Snack': '🥨', 'Soup': '🍜', 'Salad': '🥗',
  'Street Food': '🛺', 'Drink': '🥤',
};

const RecipeCard = ({ recipe }: { recipe: WorldRecipe }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  type RecipeTranslation = { title?: string; description?: string; ingredients?: { item: string; amount: string }[]; instructions?: string[] };
  const tRecipe: RecipeTranslation = recipe.translations?.[lang] ?? {};
  const displayName = tRecipe.title ?? recipe.name;

  return (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    whileHover={{ y: -4 }}
    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all group"
  >
    <div className="h-1.5 bg-gradient-to-r from-forest-500 to-amber-400" />
    <div className="p-5">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{recipe.emoji}</span>
          <div>
            <p className="text-xs font-semibold text-gray-400">{recipe.country} · {recipe.city}</p>
            <span className="text-xs text-gray-400">{CATEGORY_ICONS[recipe.category] || '🍽️'} {recipe.category}</span>
          </div>
        </div>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${DIFFICULTY_COLORS[recipe.difficulty] || 'bg-gray-100 text-gray-700'}`}>
          {recipe.difficulty}
        </span>
      </div>
      <h3 className="font-black text-gray-800 text-base mb-3 group-hover:text-forest-700 transition-colors line-clamp-1">{displayName}</h3>
      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{recipe.time}</span>
        <span className="flex items-center gap-1"><Users className="w-3 h-3" />{recipe.servings} <Trans i18nKey="recipes_servings">servings</Trans></span>
        <span>🔥 {recipe.calories} kcal</span>
      </div>
      <div className="flex flex-wrap gap-1">
        {recipe.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-xs bg-gray-50 text-gray-500 px-2 py-0.5 rounded-full">#{tag}</span>
        ))}
      </div>
    </div>
    <Link href={`/recipe/${recipe.id}`} className="block px-5 pb-4">
      <div className="flex items-center gap-1 text-forest-600 text-xs font-bold group-hover:text-forest-800">
        <BookOpen className="w-3.5 h-3.5" /> <Trans i18nKey="recipes_view_cook">View Recipe & Cook</Trans>
      </div>
    </Link>
  </motion.div>
  );
};

export default RecipeCard;
