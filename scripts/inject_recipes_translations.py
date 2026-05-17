"""
inject_recipes_translations.py
=======================================================
Injects SG-locale translations for the /recipes page.
1. recipes_aika_* (en, zh-CN, ms)
2. recipes_find_cheapest_sg (en, zh-CN, ms)
3. all other recipes_* (zh-CN, ms)
"""

import re

CONFIG_PATH = r'c:\Users\abcom\Desktop\Fantastic food\src\i18n\config.ts'

RECIPES_EN_EXTRA = {
    "recipes_aika_new": "New",
    "recipes_aika_title": "Have ingredients but no recipe?",
    "recipes_aika_desc": "Tell Chef Aika what you have in your fridge, and she will instantly generate a custom, step-by-step recipe for you!",
    "recipes_aika_btn": "Cook with AI",
    "recipes_find_cheapest_sg": "Search any ingredient across FairPrice, RedMart & more to find the cheapest price.",
    "recipes_seo_title_sg": "World Recipes Singapore - {{recipeCount}}+ Authentic Recipes from {{countryCount}} Countries | Fantastic Food",
    "recipes_seo_desc_sg": "Discover {{recipeCount}}+ authentic recipes from {{countryCount}} countries including local Singaporean, Italian, Mexican, Japanese & more. Compare ingredient prices across FairPrice, RedMart and Cold Storage.",
}

RECIPES_ZH_CN = {
    "recipes_seo_title": "世界食谱 - 来自 {{countryCount}} 个国家的 {{recipeCount}}+ 道正宗菜肴 | Fantastic Food",
    "recipes_seo_title_sg": "新加坡世界食谱 - 来自 {{countryCount}} 个国家的 {{recipeCount}}+ 道正宗菜肴 | Fantastic Food",
    "recipes_seo_desc": "探索来自 {{countryCount}} 个国家的 {{recipeCount}}+ 道正宗食谱，包括印度、意大利、墨西哥、日本菜等。比较各大平台的食材价格。",
    "recipes_seo_desc_sg": "探索来自 {{countryCount}} 个国家的 {{recipeCount}}+ 道正宗食谱，包括本地新加坡、意大利、墨西哥、日本菜等。比较 FairPrice, RedMart 和 Cold Storage 的食材价格。",
    "recipes_world_kitchen": "世界厨房",
    "recipes_authentic_count": "{{recipeCount}}+ 道正宗食谱",
    "recipes_explore_desc": "从新德里到东京，从罗马到墨西哥城 — 探索来自 <1>{{countryCount}} 个国家</1> 的正宗食谱，包含完整食材与详细步骤。",
    "recipes_label": "食谱",
    "recipes_countries_label": "国家",
    "recipes_categories_label": "类别",
    "recipes_search_placeholder": "搜索食谱、标签或国家...",
    "recipes_country_filter": "国家",
    "recipes_category_filter": "类别",
    "recipes_difficulty_filter": "难度",
    "recipes_showing": "正在显示来自 <3>{{countryCount}}</3> 个国家的 <1>{{recipeCount}}</1> 道食谱",
    "recipes_clear_filters": "清除所有筛选",
    "recipes_recipe_count": "{{count}} 道食谱",
    "recipes_no_found": "未找到食谱",
    "recipes_try_different": "尝试不同的搜索词或筛选条件",
    "recipes_compare_before_cook": "烹饪前比价",
    "recipes_find_cheapest": "在 7 个平台上搜索任何食材并找到最低价格。",
    "recipes_find_cheapest_sg": "在 FairPrice, RedMart 等平台搜索任何食材，找到最低价格。",
    "recipes_price_suffix": "价格",
    "recipes_view_cook": "查看食谱并烹饪",
    "recipes_servings": "份量",
    "recipe_recipes_breadcrumb": "食谱",
    "recipes_aika_new": "新",
    "recipes_aika_title": "有食材却没有食谱？",
    "recipes_aika_desc": "告诉主厨 Aika 您的冰箱里有什么，她会立即为您生成一份定制的分步食谱！",
    "recipes_aika_btn": "与 AI 一起烹饪"
}

RECIPES_MS = {
    "recipes_seo_title": "Resipi Dunia - {{recipeCount}}+ Hidangan Asli dari {{countryCount}} Negara | Fantastic Food",
    "recipes_seo_title_sg": "Resipi Dunia Singapura - {{recipeCount}}+ Hidangan Asli dari {{countryCount}} Negara | Fantastic Food",
    "recipes_seo_desc": "Teroka {{recipeCount}}+ resipi asli dari {{countryCount}} negara termasuk India, Itali, Mexico, Jepun & banyak lagi. Bandingkan harga bahan di seluruh platform.",
    "recipes_seo_desc_sg": "Teroka {{recipeCount}}+ resipi asli dari {{countryCount}} negara termasuk Singapura tempatan, Itali, Mexico, Jepun & banyak lagi. Bandingkan harga bahan di FairPrice, RedMart dan Cold Storage.",
    "recipes_world_kitchen": "Dapur Dunia",
    "recipes_authentic_count": "{{recipeCount}}+ Resipi Asli",
    "recipes_explore_desc": "Dari Delhi ke Tokyo, Rom ke Bandar Mexico — teroka resipi asli dari <1>{{countryCount}} negara</1> dengan bahan penuh & arahan langkah demi langkah.",
    "recipes_label": "Resipi",
    "recipes_countries_label": "Negara",
    "recipes_categories_label": "Kategori",
    "recipes_search_placeholder": "Cari resipi, tag, atau negara...",
    "recipes_country_filter": "Negara",
    "recipes_category_filter": "Kategori",
    "recipes_difficulty_filter": "Kesukaran",
    "recipes_showing": "Menunjukkan <1>{{recipeCount}}</1> resipi dari <3>{{countryCount}}</3> negara",
    "recipes_clear_filters": "Kosongkan semua penapis",
    "recipes_recipe_count": "{{count}} Resipi",
    "recipes_no_found": "Tiada resipi dijumpai",
    "recipes_try_different": "Cuba terma carian atau penapis yang berbeza",
    "recipes_compare_before_cook": "Bandingkan Harga Sebelum Memasak",
    "recipes_find_cheapest": "Cari sebarang bahan merentas 7 platform dan cari harga termurah.",
    "recipes_find_cheapest_sg": "Cari sebarang bahan di FairPrice, RedMart & lagi untuk mencari harga termurah.",
    "recipes_price_suffix": "harga",
    "recipes_view_cook": "Lihat Resipi & Masak",
    "recipes_servings": "Hidangan",
    "recipe_recipes_breadcrumb": "Resipi",
    "recipes_aika_new": "Baru",
    "recipes_aika_title": "Ada bahan tetapi tiada resipi?",
    "recipes_aika_desc": "Beritahu Chef Aika apa yang ada dalam peti sejuk anda, dan dia akan menghasilkan resipi tersuai langkah demi langkah dengan segera untuk anda!",
    "recipes_aika_btn": "Masak dengan AI"
}

def build_block(trans: dict) -> str:
    return "".join(f'      "{k}": "{v}",\n' for k, v in trans.items())

def locale_block_range(content: str, lang: str):
    pat = re.compile(
        r"['\"]" + re.escape(lang) + r"['\"]" +
        r"\s*:\s*\{\s*translation\s*:\s*\{",
        re.DOTALL
    )
    m = pat.search(content)
    if not m:
        if lang == 'en':
            pat = re.compile(r"en\s*:\s*\{\s*translation\s*:\s*\{", re.DOTALL)
            m = pat.search(content)
            if not m: return None, None
        else:
            return None, None
    return m.start(), m.end()

def key_exists_in_locale(content: str, lang: str, key: str) -> bool:
    start, end = locale_block_range(content, lang)
    if end is None: return False
    snippet = content[end: end + 60000]
    return f'"{key}"' in snippet

def inject(content: str, lang: str, trans: dict) -> str:
    start, end = locale_block_range(content, lang)
    if end is None:
        print(f"  [skip]  '{lang}' -- could not find locale block, skipping")
        return content

    new_trans = {k: v for k, v in trans.items() if not key_exists_in_locale(content, lang, k)}

    if not new_trans:
        print(f"  [ok]  '{lang}' -- all keys already present, nothing to inject")
        return content

    block = build_block(new_trans)
    insert_at = end
    content = content[:insert_at] + "\n" + block + content[insert_at:]
    print(f"  [ok]  '{lang}' -- injected {len(new_trans)} keys (skipped {len(trans) - len(new_trans)} existing)")
    return content

def main():
    with open(CONFIG_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    print("\n[recipes]  /recipes  -- recipes_* keys")
    content = inject(content, "en",    RECIPES_EN_EXTRA)
    content = inject(content, "zh-CN", RECIPES_ZH_CN)
    content = inject(content, "ms",    RECIPES_MS)

    with open(CONFIG_PATH, "w", encoding="utf-8") as f:
        f.write(content)

    print("\n[done] config.ts updated. Indian locales (hi/bn/mr/te/ta) untouched.")

if __name__ == "__main__":
    main()
