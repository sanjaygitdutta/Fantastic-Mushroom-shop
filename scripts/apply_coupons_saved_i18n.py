import os

coupons_path = r'c:\Users\abcom\Desktop\Fantastic food\src\views\Coupons.tsx'
saved_path = r'c:\Users\abcom\Desktop\Fantastic food\src\views\SavedLists.tsx'

# 1. Update Coupons.tsx
with open(coupons_path, 'r', encoding='utf-8') as f:
    coupons_content = f.read()

coupons_replacements = [
    # Imports
    (
        '''import { useTranslation } from 'react-i18next';\nimport SEO from '../components/SEO';''',
        '''import { useTranslation } from 'react-i18next';\nimport { useRegion } from '../utils/region';\nimport SEO from '../components/SEO';'''
    ),
    # Hook usage
    (
        '''export default function Coupons() { // refresh\n  const { t } = useTranslation();''',
        '''export default function Coupons() { // refresh\n  const { t } = useTranslation();\n  const { region } = useRegion();'''
    ),
    # dynamic coup_desc
    (
        '''            <p className="text-cream-300 text-lg max-w-2xl mx-auto">\n              {t('coup_desc', { defaultValue: 'The best promo codes for Blinkit, Zepto, Swiggy, BigBasket, JioMart & Flipkart Minutes — all in one place. Click to copy instantly!' })}\n            </p>''',
        '''            <p className="text-cream-300 text-lg max-w-2xl mx-auto">\n              {t(region === 'sg' ? 'coup_desc_sg' : 'coup_desc', { defaultValue: 'The best promo codes for Blinkit, Zepto, Swiggy, BigBasket, JioMart & Flipkart Minutes — all in one place. Click to copy instantly!' })}\n            </p>'''
    )
]

for old_str, new_str in coupons_replacements:
    if old_str in coupons_content:
        coupons_content = coupons_content.replace(old_str, new_str)
    else:
        print(f"NOT FOUND in Coupons: {old_str[:50]}...")

with open(coupons_path, 'w', encoding='utf-8') as f:
    f.write(coupons_content)


# 2. Update SavedLists.tsx
with open(saved_path, 'r', encoding='utf-8') as f:
    saved_content = f.read()

saved_replacements = [
    # Imports
    (
        '''import { useTranslation } from 'react-i18next';\n\nimport SEO from '../components/SEO';''',
        '''import { useTranslation } from 'react-i18next';\nimport { useRegion, formatCurrency } from '../utils/region';\n\nimport SEO from '../components/SEO';'''
    ),
    # Hook usage
    (
        '''export default function SavedLists() {\n  const { t } = useTranslation();''',
        '''export default function SavedLists() {\n  const { t } = useTranslation();\n  const { region } = useRegion();'''
    ),
    # Currency formatting
    (
        '''                    <p className="text-xl font-black text-forest-900 flex items-center gap-1 sm:justify-end">\n                      ₹{alert.current_best_price}\n                    </p>''',
        '''                    <p className="text-xl font-black text-forest-900 flex items-center gap-1 sm:justify-end">\n                      {formatCurrency(alert.current_best_price, region)}\n                    </p>'''
    )
]

for old_str, new_str in saved_replacements:
    if old_str in saved_content:
        saved_content = saved_content.replace(old_str, new_str)
    else:
        print(f"NOT FOUND in SavedLists: {old_str[:50]}...")

with open(saved_path, 'w', encoding='utf-8') as f:
    f.write(saved_content)

print("Coupons and SavedLists replacements done!")
