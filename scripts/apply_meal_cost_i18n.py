import os

filepath = r'c:\Users\abcom\Desktop\Fantastic food\src\views\MealCostCalculator.tsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    # 1. Component definition
    (
        "const MealCostCalculator = () => {\n  const { region } = useRegion();\n  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);",
        "const MealCostCalculator = () => {\n  const { region } = useRegion();\n  const { t } = useTranslation();\n  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);"
    ),
    # 2. SEO Block
    (
        '''      <SEO
        title="Meal Cost Calculator — 250+ World Recipes Cost Comparison | Fantastic Food"
        description="Find the exact cost of cooking 250+ recipes from 25 countries at home. Compare ingredient prices across Blinkit, Zepto, BigBasket and more. Adjust for servings!"
        keywords="meal cost calculator India, recipe cost, cooking cost calculator, world recipes cost, how much to cook biryani, pizza cost India"
        canonicalUrl="https://www.fantasticfood.in/meal-calculator"
      />''',
        '''      <SEO
        title={t(region === 'sg' ? 'meal_cost_seo_title_sg' : 'meal_cost_seo_title').replace('{{count}}', RECIPES.length.toString())}
        description={t(region === 'sg' ? 'meal_cost_seo_desc_sg' : 'meal_cost_seo_desc').replace('{{count}}', RECIPES.length.toString())}
        keywords="meal cost calculator India, recipe cost, cooking cost calculator, world recipes cost, how much to cook biryani, pizza cost India"
        canonicalUrl="https://www.fantasticfood.in/meal-calculator"
      />'''
    ),
    # 3. Servings
    (
        '<span className="text-cream-200 text-sm font-medium">Servings:</span>',
        '<span className="text-cream-200 text-sm font-medium">{t(\'meal_cost_servings\')}</span>'
    ),
    # 4. Comparing prices loading text
    (
        '''<p className="text-forest-600 font-semibold text-lg">Comparing prices…</p>
                    <p className="text-forest-400 text-sm mt-1">Checking 7 platforms for you</p>''',
        '''<p className="text-forest-600 font-semibold text-lg">{t('meal_cost_comparing')}</p>
                    <p className="text-forest-400 text-sm mt-1">{t('meal_cost_checking')}</p>'''
    ),
    # 5. Ingredients Needed
    (
        '<p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-3">Ingredients Needed</p>',
        '<p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-3">{t(\'meal_cost_ingredients\')}</p>'
    ),
    # 6. Save Banner
    (
        '''                        <p className="text-amber-800 font-semibold text-sm">
                          Save <strong className="text-amber-600 text-lg">{formatCurrency(adjustedTotal(recipeSavings), region)}</strong> by choosing the cheapest platform!
                        </p>
                      </div>
                      <span className="text-amber-600 text-xs bg-amber-100 px-3 py-1 rounded-full font-medium">
                        {formatCurrency(Math.round(adjustedTotal(recipeSavings) / servings), region)}/person savings
                      </span>''',
        '''                        <p className="text-amber-800 font-semibold text-sm">
                          {t('meal_cost_save_tip').split('{{amount}}')[0]}<strong className="text-amber-600 text-lg">{formatCurrency(adjustedTotal(recipeSavings), region)}</strong>{t('meal_cost_save_tip').split('{{amount}}')[1]}
                        </p>
                      </div>
                      <span className="text-amber-600 text-xs bg-amber-100 px-3 py-1 rounded-full font-medium">
                        {formatCurrency(Math.round(adjustedTotal(recipeSavings) / servings), region)} {t('meal_cost_per_person')}
                      </span>'''
    ),
    # 7. CHEAPEST text
    (
        '{isBest && <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full font-bold">CHEAPEST</span>}',
        '{isBest && <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full font-bold">{t(\'meal_cost_cheapest\')}</span>}'
    ),
    # 8. For X servings & Order
    (
        '''                              <div className="text-xs text-gray-400">for {servings} servings</div>
                            </div>
                            <a href={platform.searchUrl(selectedRecipe.ingredients[0].query)} target="_blank" rel="noopener noreferrer"
                              className="hidden sm:flex items-center gap-1 text-xs border border-gray-200 rounded-xl px-3 py-2 text-gray-500 hover:text-forest-700 hover:border-forest-300 transition-colors"
                            >
                              <ShoppingCart className="w-3 h-3" /> Order <ExternalLink className="w-3 h-3" />''',
        '''                              <div className="text-xs text-gray-400">{t('meal_cost_for_servings').replace('{{n}}', servings.toString())}</div>
                            </div>
                            <a href={platform.searchUrl(selectedRecipe.ingredients[0].query)} target="_blank" rel="noopener noreferrer"
                              className="hidden sm:flex items-center gap-1 text-xs border border-gray-200 rounded-xl px-3 py-2 text-gray-500 hover:text-forest-700 hover:border-forest-300 transition-colors"
                            >
                              <ShoppingCart className="w-3 h-3" /> {t('meal_cost_order')} <ExternalLink className="w-3 h-3" />'''
    ),
    # 9. Disclaimer
    (
        '<p className="text-gray-400 text-xs text-center">⚠️ Actual prices vary by location & availability. Click Order to see live prices.</p>',
        '<p className="text-gray-400 text-xs text-center">{t(\'meal_cost_disclaimer\')}</p>'
    ),
    # 10. Header area
    (
        '''          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-amber-400/30">
            <ChefHat className="w-4 h-4" /> Smart Meal Planner
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            Cook Smarter<br /><span className="text-amber-400">Spend Less</span>
          </h1>
          <p className="text-cream-300 max-w-xl mx-auto text-lg">
            Pick from <strong className="text-amber-400">{RECIPES.length}+ global recipes</strong> — we'll compare the total ingredient cost across all 7 platforms.
          </p>''',
        '''          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-amber-400/30">
            <ChefHat className="w-4 h-4" /> {t('meal_cost_badge')}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            {t('meal_cost_title_1')}<br /><span className="text-amber-400">{t('meal_cost_title_2')}</span>
          </h1>
          <p className="text-cream-300 max-w-xl mx-auto text-lg">
            {t(region === 'sg' ? 'meal_cost_desc_sg' : 'meal_cost_desc').split('{{count}}')[0]}<strong className="text-amber-400">{RECIPES.length}</strong>{t(region === 'sg' ? 'meal_cost_desc_sg' : 'meal_cost_desc').split('{{count}}')[1]}
          </p>'''
    ),
    # 11. Search input placeholder
    (
        'placeholder={`Search ${RECIPES.length}+ recipes…`}',
        "placeholder={t('meal_cost_search').replace('{{count}}', RECIPES.length.toString())}"
    ),
    # 12. Recipe card footer text
    (
        '''              <div className="mt-3 text-xs text-amber-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Tap to compare prices →
              </div>''',
        '''              <div className="mt-3 text-xs text-amber-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                {t('meal_cost_tap_compare')}
              </div>'''
    )
]

for old_str, new_str in replacements:
    if old_str in content:
        content = content.replace(old_str, new_str)
    else:
        print(f"NOT FOUND: {old_str[:50]}...")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("MealCostCalculator.tsx replacements done!")
