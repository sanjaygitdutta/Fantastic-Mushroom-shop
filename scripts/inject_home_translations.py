import re
import sys

translations = {
    'zh-CN': {
        "home_seo_title": "比较杂货价格 — FairPrice vs Sheng Siong vs RedMart",
        "home_seo_desc": "即时比较实时杂货价格。找到任何食品的最便宜价格，每天省钱。",
        "home_smartest_comparator": "购买杂货的最明智方式",
        "home_compare_food_prices": "比较食品价格",
        "home_save_more": "省更多",
        "home_every_day": "每一天",
        "home_hero_subtitle": "即时找到各大平台中最便宜的选项。能比价为什么要多花钱？",
        "home_comparing_on": "正在比较：",
        "home_aika_recipe_day": "👩‍🍳 Aika 主厨的今日食谱",
        "home_total_prices_compared": "已比较总价",
        "home_avg_savings": "每单平均节省",
        "home_food_items": "食品",
        "home_how_it_works": "Fantastic Food 如何运作",
        "home_how_it_works_sub": "三步找到任何食品的最佳价格",
        "home_step": "步骤",
        "home_step_1_title": "搜索任何食品",
        "home_step_1_desc": "输入任何食品 — 蔬菜、乳制品、肉类、零食，任何可食用的东西。",
        "home_step_2_title": "我们即时比较",
        "home_step_2_desc": "我们从各大平台获取实时价格。",
        "home_step_3_title": "以最低价购买",
        "home_step_3_desc": "一键带您直接以最低价平台购买。",
        "home_smart_basket": "智能购物篮计算器",
        "home_smart_basket_desc": "添加多个杂货，即时找到整个清单最便宜的平台。",
        "home_try_it_out": "试一试",
        "home_meal_cost": "餐费计算器",
        "home_meal_cost_desc": "选择一个食谱，准确了解在各大平台在家烹饪的成本。",
        "home_calculate_meal": "计算餐费",
        "home_popular_now": "现在流行",
        "home_most_compared": "今天比较最多的食品",
        "home_see_all": "查看全部",
        "home_compare_action": "比较",
        "home_why_choose": "为什么选择 Fantastic Food？",
        "home_more_savings": "更多节省，更少努力",
        "home_why_1_title": "实时价格",
        "home_why_1_desc": "各大平台的实时价格，不断更新",
        "home_why_2_title": "节省高达 40%",
        "home_why_2_desc": "每次购物都能找到最便宜的选项",
        "home_why_3_title": "值得信赖的来源",
        "home_why_3_desc": "仅限官方平台数据 — 没有虚假列表",
        "home_why_4_title": "所有食品类型",
        "home_why_4_desc": "所有可食用的东西 — 杂货、肉类、糖果等",
        "home_aika_prep": "⏱️ 准备时间：",
        "home_aika_cook": "🔥 烹饪时间：",
        "home_aika_serves": "👥 份数：",
        "home_see_full_recipe": "查看完整食谱",
        "home_compare_ingredients": "🛒 比较原料",
        "home_fresh_today": "✨ 今日新鲜",
        "home_farm_direct": "🌿 我们农场直供",
        "home_mushroom_shop": "我们的蘑菇<1>商店</1>",
        "home_mushroom_desc": "找不到更便宜的蘑菇？直接订购我们的优质农场新鲜蘑菇 — 没有中间商，品质最好。",
        "home_shop_mushrooms": "购买蘑菇",
        "home_view_recipes": "查看食谱"
    },
    'ms': {
        "home_seo_title": "Bandingkan Harga Barangan Runcit — FairPrice vs Sheng Siong vs RedMart",
        "home_seo_desc": "Bandingkan harga barangan runcit masa nyata. Cari harga termurah untuk sebarang item makanan dan jimat wang setiap hari.",
        "home_smartest_comparator": "Cara paling bijak untuk membeli barangan runcit",
        "home_compare_food_prices": "Banding Harga Makanan",
        "home_save_more": "Jimat Lebih",
        "home_every_day": "Setiap Hari",
        "home_hero_subtitle": "Cari pilihan termurah dengan serta-merta di seluruh platform utama. Kenapa bayar lebih jika anda boleh membandingkan?",
        "home_comparing_on": "Membandingkan di:",
        "home_aika_recipe_day": "👩‍🍳 Resipi Hari Ini oleh Chef Aika",
        "home_total_prices_compared": "Jumlah Harga Dibandingkan",
        "home_avg_savings": "Purata Penjimatan Setiap Pesanan",
        "home_food_items": "Item Makanan",
        "home_how_it_works": "Bagaimana Fantastic Food Berfungsi",
        "home_how_it_works_sub": "Tiga langkah untuk mencari harga terbaik untuk apa sahaja yang boleh dimakan",
        "home_step": "Langkah",
        "home_step_1_title": "Cari Sebarang Makanan",
        "home_step_1_desc": "Taip sebarang item makanan — sayur-sayuran, produk tenusu, daging, snek, apa sahaja yang boleh dimakan.",
        "home_step_2_title": "Kami Bandingkan Serta-merta",
        "home_step_2_desc": "Kami mendapatkan harga masa nyata dari platform utama.",
        "home_step_3_title": "Beli dari yang Terbaik",
        "home_step_3_desc": "Satu klik membawa anda terus untuk membeli di platform dengan harga terendah.",
        "home_smart_basket": "Kalkulator Bakul Pintar",
        "home_smart_basket_desc": "Tambahkan berbilang barangan runcit dan serta-merta cari platform mana yang paling murah untuk keseluruhan senarai anda.",
        "home_try_it_out": "Cubalah",
        "home_meal_cost": "Kalkulator Kos Hidangan",
        "home_meal_cost_desc": "Pilih satu resipi dan ketahui dengan tepat berapa kos untuk memasaknya di rumah di seluruh platform.",
        "home_calculate_meal": "Kira kos hidangan",
        "home_popular_now": "Popular Sekarang",
        "home_most_compared": "Item makanan yang paling kerap dibandingkan hari ini",
        "home_see_all": "Lihat semua",
        "home_compare_action": "Bandingkan",
        "home_why_choose": "Mengapa Fantastic Food?",
        "home_more_savings": "Lebih banyak penjimatan, kurang usaha",
        "home_why_1_title": "Harga Masa Nyata",
        "home_why_1_desc": "Harga langsung dari platform utama, dikemas kini secara berterusan",
        "home_why_2_title": "Jimat Hingga 40%",
        "home_why_2_desc": "Cari pilihan termurah setiap kali anda membeli-belah",
        "home_why_3_title": "Sumber Dipercayai",
        "home_why_3_desc": "Hanya data platform rasmi — tiada senarai palsu",
        "home_why_4_title": "Semua Jenis Makanan",
        "home_why_4_desc": "Apa sahaja yang boleh dimakan — barangan runcit, daging, gula-gula & banyak lagi",
        "home_aika_prep": "⏱️ Persediaan:",
        "home_aika_cook": "🔥 Masak:",
        "home_aika_serves": "👥 Hidangan:",
        "home_see_full_recipe": "Lihat Resipi Penuh",
        "home_compare_ingredients": "🛒 Bandingkan Ramuan",
        "home_fresh_today": "✨ Segar Hari Ini",
        "home_farm_direct": "🌿 Terus Dari Ladang Kami",
        "home_mushroom_shop": "<1>Kedai</1> Cendawan Kami",
        "home_mushroom_desc": "Tidak dapat mencari cendawan yang lebih murah di mana-mana? Pesan cendawan premium dan segar dari ladang kami secara langsung — tiada orang tengah, kualiti terbaik.",
        "home_shop_mushrooms": "Beli Cendawan",
        "home_view_recipes": "Lihat Resipi"
    }
}

with open(r'c:\Users\abcom\Desktop\Fantastic food\src\i18n\config.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# For each language, find "translation: {" and insert the new keys
for lang, trans in translations.items():
    formatted_trans = ""
    for k, v in trans.items():
        formatted_trans += f'      "{k}": "{v}",\n'
    
    # Check if the language block exists
    if f"'{lang}': {{" in content or f'"{lang}": {{' in content:
        # It exists, just inject
        pattern = r"((?:'|\")" + lang + r"(?:'|\"):\s*\{\s*translation:\s*\{)"
        def repl(match):
            return match.group(1) + '\n' + formatted_trans
        content = re.sub(pattern, repl, content, count=1)
    else:
        # Doesn't exist, we need to append it at the end of resources block
        # Find the end of resources block (the last '}' before '};')
        # We can look for the closing of resources.
        
        # We know `config.ts` ends with `} }\n};\n\ni18n` or similar.
        # So we can just append it before `};\n\ni18n`
        
        new_lang_block = f""",
  '{lang}': {{
    translation: {{
{formatted_trans.rstrip()}
    }}
  }}"""
        # We insert before `};\n\ni18n`
        content = re.sub(r'\n};\n\ni18n', new_lang_block + r'\n};\n\ni18n', content)

with open(r'c:\Users\abcom\Desktop\Fantastic food\src\i18n\config.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Home Translations added successfully.")
