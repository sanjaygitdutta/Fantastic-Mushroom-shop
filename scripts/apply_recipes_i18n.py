import os

filepath = r'c:\Users\abcom\Desktop\Fantastic food\src\views\Recipes.tsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    # 1. Imports
    (
        '''import { useState, useMemo } from 'react';\nimport { motion, AnimatePresence } from 'framer-motion';''',
        '''import { useState, useMemo } from 'react';\nimport { useRegion } from '../utils/region';\nimport { motion, AnimatePresence } from 'framer-motion';'''
    ),
    # 2. Hook usage
    (
        '''  const { t, i18n } = useTranslation();''',
        '''  const { t, i18n } = useTranslation();\n  const { region } = useRegion();'''
    ),
    # 3. SEO strings
    (
        '''      <SEO
        title={t('recipes_seo_title', { recipeCount: ALL_RECIPES.length, countryCount: ALL_COUNTRIES.length })}
        description={t('recipes_seo_desc', { recipeCount: ALL_RECIPES.length, countryCount: ALL_COUNTRIES.length })}
        canonicalUrl="https://www.fantasticfood.in/recipes"''',
        '''      <SEO
        title={t(region === 'sg' ? 'recipes_seo_title_sg' : 'recipes_seo_title', { recipeCount: ALL_RECIPES.length, countryCount: ALL_COUNTRIES.length })}
        description={t(region === 'sg' ? 'recipes_seo_desc_sg' : 'recipes_seo_desc', { recipeCount: ALL_RECIPES.length, countryCount: ALL_COUNTRIES.length })}
        canonicalUrl="https://www.fantasticfood.in/recipes"'''
    ),
    # 4. Chef Aika texts
    (
        '''                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 flex items-center gap-2">
                  <span className="bg-amber-500 text-forest-900 px-3 py-1 rounded-full text-sm uppercase tracking-widest font-bold">New</span>
                  Have ingredients but no recipe?
                </h2>
                <p className="text-amber-100 text-lg max-w-xl">
                  Tell Chef Aika what you have in your fridge, and she will instantly generate a custom, step-by-step recipe for you!
                </p>''',
        '''                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 flex items-center gap-2">
                  <span className="bg-amber-500 text-forest-900 px-3 py-1 rounded-full text-sm uppercase tracking-widest font-bold">{t('recipes_aika_new')}</span>
                  {t('recipes_aika_title')}
                </h2>
                <p className="text-amber-100 text-lg max-w-xl">
                  {t('recipes_aika_desc')}
                </p>'''
    ),
    (
        '''                  Cook with AI <span className="text-xl">👩‍🍳</span>''',
        '''                  {t('recipes_aika_btn')} <span className="text-xl">👩‍🍳</span>'''
    ),
    # 5. Bottom CTA
    (
        '''          <p className="text-cream-300 mb-6 text-sm">{t('recipes_find_cheapest')}</p>''',
        '''          <p className="text-cream-300 mb-6 text-sm">{t(region === 'sg' ? 'recipes_find_cheapest_sg' : 'recipes_find_cheapest')}</p>'''
    )
]

for old_str, new_str in replacements:
    if old_str in content:
        content = content.replace(old_str, new_str)
    else:
        print(f"NOT FOUND: {old_str[:50]}...")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Recipes.tsx replacements done!")
