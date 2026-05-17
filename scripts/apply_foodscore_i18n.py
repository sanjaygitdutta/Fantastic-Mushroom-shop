import os

filepath = r'c:\Users\abcom\Desktop\Fantastic food\src\views\FoodScore.tsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    # 1. Update the share text to use region platforms and formatCurrency
    (
        '''    const text = `💰 My FoodScore on Fantastic Food is ${score}/100 — ${t(grade.labelKey)}! I've saved ₹${totalSavings.toFixed(0)} by comparing grocery prices across Blinkit, Zepto & more. Check yours: https://www.fantasticfood.in/savings`;''',
        '''    const platforms = region === 'sg' ? 'FairPrice, RedMart & more' : 'Blinkit, Zepto & more';
    const text = `💰 My FoodScore on Fantastic Food is ${score}/100 — ${t(grade.labelKey)}! I've saved ${formatCurrency(totalSavings, region)} by comparing grocery prices across ${platforms}. Check yours: https://www.fantasticfood.in/savings`;'''
    ),
    # 2. Update the Stats block
    (
        '''value: `₹${totalSavings.toFixed(0)}`''',
        '''value: formatCurrency(totalSavings, region)'''
    )
]

for old_str, new_str in replacements:
    if old_str in content:
        content = content.replace(old_str, new_str)
    else:
        print(f"NOT FOUND: {old_str[:50]}...")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("FoodScore.tsx replacements done!")
