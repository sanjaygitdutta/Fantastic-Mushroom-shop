"""Patch Compare.tsx to be region-aware for SG users."""

FILE = r'src\views\Compare.tsx'

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# ── Fix 1: Replace static PLATFORMS array with two arrays (IN + SG) ──
OLD_PLATFORMS = """// Platform logos strip
const PLATFORMS = [
  { name: 'Blinkit', logo: '\u26a1', color: '#f0c029', bg: '#fffbea' },
  { name: 'Zepto', logo: '\U0001f7e3', color: '#8b5cf6', bg: '#f5f3ff' },
  { name: 'Swiggy', logo: '\U0001f7e0', color: '#f97316', bg: '#fff7ed' },
  { name: 'BigBasket', logo: '\U0001f7e2', color: '#16a34a', bg: '#f0fdf4' },
  { name: 'Amazon', logo: '\U0001f4e6', color: '#f59e0b', bg: '#fffbeb' },
  { name: 'JioMart', logo: '\U0001f535', color: '#2563eb', bg: '#eff6ff' },
  { name: 'Flipkart Minutes', logo: '\U0001f6cd\ufe0f', color: '#1d4ed8', bg: '#dbeafe' },
];"""

NEW_PLATFORMS = """// Platform logos strip \u2014 Indian platforms
const PLATFORMS_IN = [
  { name: 'Blinkit', logo: '\u26a1', color: '#f0c029', bg: '#fffbea' },
  { name: 'Zepto', logo: '\U0001f7e3', color: '#8b5cf6', bg: '#f5f3ff' },
  { name: 'Swiggy', logo: '\U0001f7e0', color: '#f97316', bg: '#fff7ed' },
  { name: 'BigBasket', logo: '\U0001f7e2', color: '#16a34a', bg: '#f0fdf4' },
  { name: 'Amazon', logo: '\U0001f4e6', color: '#f59e0b', bg: '#fffbeb' },
  { name: 'JioMart', logo: '\U0001f535', color: '#2563eb', bg: '#eff6ff' },
  { name: 'Flipkart Minutes', logo: '\U0001f6cd\ufe0f', color: '#1d4ed8', bg: '#dbeafe' },
];

// Platform logos strip \u2014 Singapore platforms
const PLATFORMS_SG = [
  { name: 'FairPrice', logo: '\U0001f7e1', color: '#f59e0b', bg: '#fffbeb' },
  { name: 'RedMart', logo: '\U0001f534', color: '#ef4444', bg: '#fef2f2' },
  { name: 'Cold Storage', logo: '\U0001f535', color: '#3b82f6', bg: '#eff6ff' },
  { name: 'Sheng Siong', logo: '\U0001f7e2', color: '#16a34a', bg: '#f0fdf4' },
  { name: 'Giant', logo: '\U0001f7e3', color: '#7c3aed', bg: '#f5f3ff' },
  { name: 'GrabMart', logo: '\U0001f7e2', color: '#00b14f', bg: '#ecfdf5' },
  { name: 'Amazon SG', logo: '\U0001f4e6', color: '#f59e0b', bg: '#fffbeb' },
];"""

if OLD_PLATFORMS in content:
    content = content.replace(OLD_PLATFORMS, NEW_PLATFORMS, 1)
    print('Fix 1: Platforms array replaced')
else:
    print('Fix 1 ERROR: PLATFORMS array not found')

# ── Fix 2: Use region-aware platform array in the pills render ──
OLD_PILLS = """          {/* Platform logo pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {PLATFORMS.map((pl) => (
              <div
                key={pl.name}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ backgroundColor: pl.bg + '22', color: pl.color, border: `1px solid ${pl.color}33` }}
              >
                <span>{pl.logo}</span>
                <span className="text-white/80">{pl.name}</span>
              </div>
            ))}
          </div>"""

NEW_PILLS = """          {/* Platform logo pills \u2014 region aware */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {(region === 'SG' ? PLATFORMS_SG : PLATFORMS_IN).map((pl) => (
              <div
                key={pl.name}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ backgroundColor: pl.bg + '22', color: pl.color, border: `1px solid ${pl.color}33` }}
              >
                <span>{pl.logo}</span>
                <span className="text-white/80">{pl.name}</span>
              </div>
            ))}
          </div>"""

if OLD_PILLS in content:
    content = content.replace(OLD_PILLS, NEW_PILLS, 1)
    print('Fix 2: Platform pills made region-aware')
else:
    print('Fix 2 ERROR: pills block not found')

# ── Fix 3: Localize "Cooking with X? Try these recipes!" ──
OLD_RECIPE = 'Cooking with {query.charAt(0).toUpperCase() + query.slice(1)}? Try these recipes!'
NEW_RECIPE = "{t('compare_cooking_with', { item: query.charAt(0).toUpperCase() + query.slice(1), defaultValue: `Cooking with ${query.charAt(0).toUpperCase() + query.slice(1)}? Try these recipes!` })}"

if OLD_RECIPE in content:
    content = content.replace(OLD_RECIPE, NEW_RECIPE, 1)
    print('Fix 3: Recipe section title localized')
else:
    print('Fix 3 ERROR: recipe title not found')

with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print('\nDone.')
