"""Add labelKey to each POPULAR_SEARCHES entry in mockPrices.ts"""

FILE = r'src\data\mockPrices.ts'

REPLACEMENTS = [
    ("{ label: 'Onion',      query: 'onion',     icon: '\U0001f9c5' }",
     "{ label: 'Onion',      labelKey: 'pop_onion',    query: 'onion',     icon: '\U0001f9c5' }"),
    ("{ label: 'Tomato',     query: 'tomato',    icon: '\U0001f345' }",
     "{ label: 'Tomato',     labelKey: 'pop_tomato',   query: 'tomato',    icon: '\U0001f345' }"),
    ("{ label: 'Milk',       query: 'milk',      icon: '\U0001f95b' }",
     "{ label: 'Milk',       labelKey: 'pop_milk',     query: 'milk',      icon: '\U0001f95b' }"),
    ("{ label: 'Eggs',       query: 'eggs',      icon: '\U0001f95a' }",
     "{ label: 'Eggs',       labelKey: 'pop_eggs',     query: 'eggs',      icon: '\U0001f95a' }"),
    ("{ label: 'Chicken',    query: 'chicken',   icon: '\U0001f357' }",
     "{ label: 'Chicken',    labelKey: 'pop_chicken',  query: 'chicken',   icon: '\U0001f357' }"),
    ("{ label: 'Rice',       query: 'rice',      icon: '\U0001f35a' }",
     "{ label: 'Rice',       labelKey: 'pop_rice',     query: 'rice',      icon: '\U0001f35a' }"),
    ("{ label: 'Paneer',     query: 'paneer',    icon: '\U0001f9c0' }",
     "{ label: 'Paneer',     labelKey: 'pop_paneer',   query: 'paneer',    icon: '\U0001f9c0' }"),
    ("{ label: 'Banana',     query: 'banana',    icon: '\U0001f34c' }",
     "{ label: 'Banana',     labelKey: 'pop_banana',   query: 'banana',    icon: '\U0001f34c' }"),
    ("{ label: 'Potato',     query: 'potato',    icon: '\U0001f954' }",
     "{ label: 'Potato',     labelKey: 'pop_potato',   query: 'potato',    icon: '\U0001f954' }"),
    ("{ label: 'Dal',        query: 'dal',       icon: '\U0001fad8' }",
     "{ label: 'Dal',        labelKey: 'pop_dal',      query: 'dal',       icon: '\U0001fad8' }"),
    ("{ label: 'Bread',      query: 'bread',     icon: '\U0001f35e' }",
     "{ label: 'Bread',      labelKey: 'pop_bread',    query: 'bread',     icon: '\U0001f35e' }"),
    ("{ label: 'Atta',       query: 'flour',     icon: '\U0001f33e' }",
     "{ label: 'Atta',       labelKey: 'pop_atta',     query: 'flour',     icon: '\U0001f33e' }"),
    ("{ label: 'Curd',       query: 'curd',      icon: '\U0001f376' }",
     "{ label: 'Curd',       labelKey: 'pop_curd',     query: 'curd',      icon: '\U0001f376' }"),
    ("{ label: 'Mango',      query: 'mango',     icon: '\U0001f96d' }",
     "{ label: 'Mango',      labelKey: 'pop_mango',    query: 'mango',     icon: '\U0001f96d' }"),
    ("{ label: 'Fish',       query: 'fish',      icon: '\U0001f41f' }",
     "{ label: 'Fish',       labelKey: 'pop_fish',     query: 'fish',      icon: '\U0001f41f' }"),
    ("{ label: 'Mushroom',   query: 'mushroom',  icon: '\U0001f344' }",
     "{ label: 'Mushroom',   labelKey: 'pop_mushroom', query: 'mushroom',  icon: '\U0001f344' }"),
    ("{ label: 'Tea',        query: 'tea',       icon: '\U0001f375' }",
     "{ label: 'Tea',        labelKey: 'pop_tea',      query: 'tea',       icon: '\U0001f375' }"),
    ("{ label: 'Coffee',     query: 'coffee',    icon: '\u2615' }",
     "{ label: 'Coffee',     labelKey: 'pop_coffee',   query: 'coffee',    icon: '\u2615' }"),
]

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

fixed = 0
for old, new in REPLACEMENTS:
    if old in content:
        content = content.replace(old, new, 1)
        fixed += 1
    else:
        print(f'NOT FOUND: {old[:50]}')

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Fixed {fixed}/{len(REPLACEMENTS)} entries')
