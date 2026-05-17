"""
Adds complete zh-CN and ms translation blocks to src/i18n/config.ts.
Also updates supportedLngs to include zh-CN and ms.
Safe to run — checks if blocks already exist before inserting.
"""

CONFIG_PATH = r'src\i18n\config.ts'

ZH_CN_BLOCK = """  'zh-CN': { translation: {
      "deal_today_best": "今日最佳优惠",
      "deal_of_the_day": "今日特价",
      "deal_refreshes_desc": "每天午夜更新 • 点击比较并购买",
      "deal_see_all": "查看所有价格 →",
      "deal_buy_now": "立即购买",
      "deal_users_saved": "本周用户平均节省了 ",
      "deal_saved_amount": "S$10+",
      "deal_saved_desc": " 通过在 Fantastic Food 上比较价格",

      "Compare Prices": "比较价格",
      "shop_mushrooms": "购买蘑菇",
      "nav_ai_tools": "AI 工具",
      "nav_calculators": "计算器",
      "nav_discover": "发现",
      "nav_sign_in": "登录",

      "home_seo_title": "比较杂货价格 — FairPrice vs Sheng Siong vs RedMart",
      "home_seo_desc": "即时比较实时杂货价格。找到任何食品的最便宜价格，每天省钱。",
      "home_smartest_comparator": "购买杂货的最明智方式",
      "home_compare_food_prices": "比较食品价格",
      "home_save_more": "省更多",
      "home_every_day": "每一天",
      "home_hero_subtitle": "即时找到各大平台中最便宜的选项。能比价为什么要多花钱？",
      "home_hero_subtitle_sg": "即时找到 FairPrice、RedMart、Cold Storage 等平台的最低价选项。能比价，何必多花钱？",
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
      "home_step_2_desc_sg": "我们获取 FairPrice、RedMart、Cold Storage、Sheng Siong、Giant 和 Amazon 的实时价格。",
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
      "home_view_recipes": "查看食谱",

      "search_placeholder_1": "在所有平台搜索"洋葱"...",
      "search_placeholder_2": "试试"鸡胸肉" — 立即比较...",
      "search_placeholder_3": "搜索"牛油"以获最低价...",
      "search_placeholder_4": "在您附近找到最便宜的"面包"...",
      "search_placeholder_5": "比较"茉莉香米"价格...",
      "compare_prices_btn": "比较价格",
      "popular_searches_label": "热门：",
      "location": "位置",
      "listening": "聆听中...",
      "search_by_voice": "语音搜索",
      "enter_pincode": "输入您的邮政编码",
      "auto_detect": "自动检测",

      "cat_vegetables": "蔬菜",
      "cat_fruits": "水果",
      "cat_dairy_eggs": "乳制品和鸡蛋",
      "cat_meat_poultry": "肉类和家禽",
      "cat_fish_seafood": "鱼类和海鲜",
      "cat_bakery": "烘焙",
      "cat_cooking_essentials": "烹饪必备",
      "cat_snacks": "零食",
      "cat_beverages": "饮料",
      "cat_mushrooms": "蘑菇",

      "basket_smart_calculator": "智能菜篮计算器",
      "basket_find_the": "寻找",
      "basket_cheapest_platform": "最便宜的平台",
      "basket_for_entire_basket": "购买您的整个菜篮",
      "basket_add_items": "添加商品到菜篮",
      "basket_shop_btn": "去购买",
      "basket_you_save": "您节省了 S${{savings}} ({{percent}}%)!",

      "nav_chef_aika": "Aika 主厨",
      "nav_chef_aika_desc": "AI 冰箱食谱魔法",
      "nav_meal_planner": "膳食计划",
      "nav_festival_planner": "节日购物计划",
      "nav_health_mode": "健康模式",
      "nav_basket_calculator": "菜篮计算器",
      "nav_recipes": "食谱",

      "footer_desc": "新加坡最智能的食品比价平台。通过寻找所有主要平台的最佳优惠，为您节省每一笔杂货订单的开销。",
      "footer_compare_prices": "比较价格",
      "footer_mushroom_shop": "蘑菇店",
      "footer_copyright": "© 2026 Fantastic Food Platform. 保留所有权利。",

      "compare_prices_across": "比价平台：",
      "7_platforms": "8个平台",
      "prices_updated_live": "价格实时更新",
      "find_cheapest_deal": "下单前找到最便宜的优惠",

      "comm_what_cooking": "你今天打算煮什么？",
      "comm_search_placeholder": "搜索食谱、食材或用户...",
      "comm_trending": "当前热门",
      "comm_latest": "最新食谱",
      "comm_shop_ingredients": "购买食材"
  } },
"""

MS_BLOCK = """  'ms': { translation: {
      "deal_today_best": "TAWARAN TERBAIK HARI INI",
      "deal_of_the_day": "Tawaran Hari Ini",
      "deal_refreshes_desc": "Dikemas kini setiap hari pada tengah malam • Klik untuk banding & beli",
      "deal_see_all": "Lihat semua harga →",
      "deal_buy_now": "Beli Sekarang",
      "deal_users_saved": "Pengguna jimat purata ",
      "deal_saved_amount": "S$10+",
      "deal_saved_desc": " minggu ini dengan membandingkan harga di Fantastic Food",

      "Compare Prices": "Banding Harga",
      "shop_mushrooms": "Beli Cendawan",
      "nav_ai_tools": "Alat AI",
      "nav_calculators": "Kalkulator",
      "nav_discover": "Teroka",
      "nav_sign_in": "Log Masuk",

      "home_seo_title": "Bandingkan Harga Barangan Runcit — FairPrice vs Sheng Siong vs RedMart",
      "home_seo_desc": "Bandingkan harga barangan runcit masa nyata. Cari harga termurah untuk sebarang item makanan dan jimat wang setiap hari.",
      "home_smartest_comparator": "Cara paling bijak untuk membeli barangan runcit",
      "home_compare_food_prices": "Banding Harga Makanan",
      "home_save_more": "Jimat Lebih",
      "home_every_day": "Setiap Hari",
      "home_hero_subtitle": "Cari pilihan termurah dengan serta-merta di seluruh platform utama. Kenapa bayar lebih jika anda boleh membandingkan?",
      "home_hero_subtitle_sg": "Cari pilihan termurah serta-merta merentasi FairPrice, RedMart, Cold Storage & lebih banyak lagi. Kenapa bayar lebih jika anda boleh membandingkan?",
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
      "home_step_2_desc_sg": "Kami mendapatkan harga masa nyata dari FairPrice, RedMart, Cold Storage, Sheng Siong, Giant & Amazon.",
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
      "home_view_recipes": "Lihat Resipi",

      "search_placeholder_1": "Cari \\"bawang\\" di semua platform...",
      "search_placeholder_2": "Cuba \\"dada ayam\\" — bandingkan serta-merta...",
      "search_placeholder_3": "Cari \\"mentega\\" untuk harga terbaik...",
      "search_placeholder_4": "Cari \\"roti\\" termurah berhampiran anda...",
      "search_placeholder_5": "Bandingkan harga \\"beras wangi\\"...",
      "compare_prices_btn": "Bandingkan Harga",
      "popular_searches_label": "Popular:",
      "location": "Lokasi",
      "listening": "Mendengar...",
      "search_by_voice": "Cari dengan suara",
      "enter_pincode": "Masukkan poskod anda",
      "auto_detect": "Kesan Automatik",

      "cat_vegetables": "Sayur-sayuran",
      "cat_fruits": "Buah-buahan",
      "cat_dairy_eggs": "Tenusu & Telur",
      "cat_meat_poultry": "Daging & Ayam",
      "cat_fish_seafood": "Ikan & Makanan Laut",
      "cat_bakery": "Bakeri",
      "cat_cooking_essentials": "Keperluan Memasak",
      "cat_snacks": "Snek",
      "cat_beverages": "Minuman",
      "cat_mushrooms": "Cendawan",

      "basket_smart_calculator": "Kalkulator Bakul Pintar",
      "basket_find_the": "Cari",
      "basket_cheapest_platform": "Platform Termurah",
      "basket_for_entire_basket": "untuk Keseluruhan Bakul Anda",
      "basket_add_items": "Tambah Barang ke Bakul",
      "basket_shop_btn": "Beli",
      "basket_you_save": "Anda jimat S${{savings}} ({{percent}}%)!",

      "nav_chef_aika": "Chef Aika",
      "nav_chef_aika_desc": "Keajaiban AI dari peti sejuk ke resipi",
      "nav_meal_planner": "Perancang Makanan",
      "nav_festival_planner": "Perancang Beli-belah Perayaan",
      "nav_health_mode": "Mod Kesihatan",
      "nav_basket_calculator": "Kalkulator Bakul",
      "nav_recipes": "Resipi",

      "footer_desc": "Pembanding harga makanan paling pintar di Singapura. Jimat wang pada setiap pesanan barangan runcit dengan mencari tawaran terbaik merentasi semua platform utama.",
      "footer_compare_prices": "Banding Harga",
      "footer_mushroom_shop": "Kedai Cendawan",
      "footer_copyright": "© 2026 Fantastic Food Platform. Hak cipta terpelihara.",

      "compare_prices_across": "Banding Harga Di",
      "7_platforms": "8 Platform",
      "prices_updated_live": "Harga Dikemas Kini Langsung",
      "find_cheapest_deal": "Cari tawaran termurah sebelum anda memesan",

      "comm_what_cooking": "Apa yang anda masak hari ini?",
      "comm_search_placeholder": "Cari resipi, bahan, atau pengguna...",
      "comm_trending": "Sangat Popular",
      "comm_latest": "Resipi Terkini",
      "comm_shop_ingredients": "Beli Bahan"
  } }
"""

def main():
    with open(CONFIG_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    print(f"File loaded: {len(content)} chars")

    changed = False

    # 1. Add zh-CN block if missing
    if "'zh-CN'" not in content and '"zh-CN"' not in content:
        # Insert before the closing of the resources object
        # Find: "};\n\ni18n"
        marker = '};\n\ni18n'
        idx = content.find(marker)
        if idx == -1:
            marker = '};\r\n\r\ni18n'
            idx = content.find(marker)
        if idx == -1:
            print("ERROR: Cannot find resources closing marker")
            return
        content = content[:idx] + ',\n' + ZH_CN_BLOCK + MS_BLOCK + content[idx:]
        print("Added zh-CN and ms blocks")
        changed = True
    else:
        print("zh-CN block already present — skipping block insertion")

    # 2. Update supportedLngs to include zh-CN and ms
    old_langs = "supportedLngs: ['en', 'hi', 'bn', 'mr', 'te', 'ta']"
    new_langs = "supportedLngs: ['en', 'hi', 'bn', 'mr', 'te', 'ta', 'zh-CN', 'ms']"
    if old_langs in content:
        content = content.replace(old_langs, new_langs)
        print("Updated supportedLngs")
        changed = True
    elif new_langs in content:
        print("supportedLngs already updated — skipping")
    else:
        print("WARNING: Could not find supportedLngs line to update")

    if changed:
        with open(CONFIG_PATH, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Saved: {len(content)} chars")
    else:
        print("No changes made")

if __name__ == '__main__':
    main()
