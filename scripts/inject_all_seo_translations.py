import re
import os

translation_keys = {
    # 1. Home
    "home_seo_title_sg": {
        "en": "Fantastic Food Singapore — Compare FairPrice, RedMart & Cold Storage",
        "zh-CN": "Fantastic Food 新加坡 | 比较 FairPrice、RedMart 和 Cold Storage 超市价格",
        "ms": "Fantastic Food Singapura — Bandingkan Harga FairPrice, RedMart & Cold Storage"
    },
    "home_seo_desc_sg": {
        "en": "Compare grocery prices in real time across FairPrice, RedMart, Cold Storage & Giant in Singapore. Save up to 40% on your weekly grocery bill!",
        "zh-CN": "实时比较新加坡 FairPrice、RedMart、Cold Storage 和 Giant 线上超市价格。每周买菜省钱高达40%！",
        "ms": "Bandingkan harga runcit masa nyata merentasi FairPrice, RedMart, Cold Storage & Giant di Singapura. Jimat sehingga 40% bil barangan runcit anda!"
    },

    # 2. Compare
    "compare_seo_title_sg": {
        "en": "Live Grocery Price Comparison Singapore | Fantastic Food",
        "zh-CN": "新加坡实时杂货价格比较 | Fantastic Food",
        "ms": "Perbandingan Harga Runcit Langsung Singapura | Fantastic Food"
    },
    "compare_seo_desc_sg": {
        "en": "Compare live prices of 7,000+ grocery items across FairPrice, RedMart, Cold Storage and Shopee Supermarket. Lock in the absolute lowest price.",
        "zh-CN": "比较新加坡 FairPrice、RedMart、Cold Storage 和 虾皮超市 7,000 多种商品的实时价格。锁定最低价。",
        "ms": "Bandingkan harga langsung 7,000+ barangan runcit merentasi FairPrice, RedMart, Cold Storage dan Shopee Supermarket."
    },

    # 3. Basket Calculator
    "basket_seo_title_sg": {
        "en": "Smart Grocery Basket Cost Calculator Singapore | Fantastic Food",
        "zh-CN": "智能购物车价格计算器 新加坡 | Fantastic Food",
        "ms": "Kalkulator Kos Bakul Runcit Pintar Singapura | Fantastic Food"
    },
    "basket_seo_desc_sg": {
        "en": "Add your grocery list to our smart basket and instantly find which Singapore delivery app gives you the cheapest total bill.",
        "zh-CN": "将您的买菜清单加入智能购物车，瞬间找出哪家新加坡送货App的总账单最便宜。",
        "ms": "Masukkan senarai barangan runcit anda ke dalam bakul pintar kami dan ketahui aplikasi penghantaran Singapura yang memberikan bil termurah."
    },

    # 4. Meal Cost Calculator
    "meal_cost_seo_title_sg": {
        "en": "Recipe Ingredient Cost Calculator Singapore | Fantastic Food",
        "zh-CN": "菜谱原料成本计算器 新加坡 | Fantastic Food",
        "ms": "Kalkulator Kos Bahan Resipi Singapura | Fantastic Food"
    },

    # 5. Meal Planner
    "meal_planner_seo_title_sg": {
        "en": "Weekly Smart Meal Planner Singapore | Fantastic Food",
        "zh-CN": "每周智能膳食规划器 新加坡 | Fantastic Food",
        "ms": "Perancang Hidangan Pintar Mingguan Singapura | Fantastic Food"
    },
    "meal_planner_seo_desc_sg": {
        "en": "Plan your weekly meals and optimize your grocery list automatically to get the lowest ingredient prices in Singapore.",
        "zh-CN": "规划您的每周膳食并自动优化购物清单，以获取新加坡最低的食材价格。",
        "ms": "Rancang hidangan mingguan anda dan optimumkan senarai barangan runcit secara automatik untuk mendapatkan harga bahan terendah di Singapura."
    },

    # 6. Food Score / Food Rating
    "food_score_seo_title_sg": {
        "en": "Nutritional Rating & Food Score Checker Singapore | Fantastic Food",
        "zh-CN": "营养评级与健康食品评分查询 新加坡 | Fantastic Food",
        "ms": "Penilaian Nutrisi & Pemeriksa Skor Makanan Singapura | Fantastic Food"
    },
    "food_score_seo_desc_sg": {
        "en": "Analyze any food item to check its health score, ultra-processed risk rating, and search cheapest prices in Singapore.",
        "zh-CN": "分析任何食品，检查其健康评分和超加工风险评级，并搜索新加坡的最优价格。",
        "ms": "Analisis mana-mana item makanan untuk memeriksa skor kesihatan, penarafan risiko ultra-proses, dan cari harga termurah di Singapura."
    },

    # 7. Nutrition Info
    "nutrition_seo_title_sg": {
        "en": "Pantry Nutrition Facts & Grocery Calories Guide SG | Fantastic Food",
        "zh-CN": "食品营养成分与卡路里指南 新加坡 | Fantastic Food",
        "ms": "Fakta Nutrisi & Panduan Kalori Barangan Runcit SG | Fantastic Food"
    },
    "nutrition_seo_desc_sg": {
        "en": "Explore complete nutrition details, macro ratios, and compare online delivery prices for thousands of Singapore groceries.",
        "zh-CN": "探索数千种新加坡杂货的完整营养细节、宏量比例，并比较在线送货价格。",
        "ms": "Terokai butiran nutrisi lengkap, nisbah makro, dan bandingkan harga penghantaran dalam talian untuk beribu-ribu barangan runcit Singapura."
    },

    # 8. Coupons
    "coupons_seo_title_sg": {
        "en": "Promo Codes & Discount Coupons Singapore | Fantastic Food",
        "zh-CN": "最新优惠码与折扣代金券 新加坡 | Fantastic Food",
        "ms": "Kod Promo & Kupon Diskaun Singapura | Fantastic Food"
    },
    "coupons_seo_desc_sg": {
        "en": "Get the freshest active promo codes for FairPrice, RedMart, Cold Storage and Shopee Supermarket. Copy and save instantly.",
        "zh-CN": "获取 FairPrice、RedMart、Cold Storage 和 Shopee超市 的最新有效优惠码。即刻复制省钱。",
        "ms": "Dapatkan kod promo aktif terbaharu untuk FairPrice, RedMart, Cold Storage dan Shopee Supermarket. Salin dan simpan segera."
    },

    # 9. Recipes Page Listing
    "recipes_seo_title_sg": {
        "en": "World Recipes Singapore - {{recipeCount}}+ Authentic Recipes from {{countryCount}} Countries | Fantastic Food",
        "zh-CN": "新加坡世界食谱 - 来自 {{countryCount}} 个国家的 {{recipeCount}}+ 道正宗菜肴 | Fantastic Food",
        "ms": "Resipi Dunia Singapura - {{recipeCount}}+ Hidangan Asli dari {{countryCount}} Negara | Fantastic Food"
    },
    "recipes_seo_desc_sg": {
        "en": "Discover {{recipeCount}}+ authentic recipes from {{countryCount}} countries including local Singaporean, Italian, Mexican, Japanese & more. Compare ingredient prices across FairPrice, RedMart and Cold Storage.",
        "zh-CN": "探索来自 {{countryCount}} 个国家的 {{recipeCount}}+ 道正宗食谱，包括本地新加坡、意大利、墨西哥、日本菜等。比较 FairPrice, RedMart 和 Cold Storage 的食材价格。",
        "ms": "Teroka {{recipeCount}}+ resipi asli dari {{countryCount}} negara termasuk Singapura tempatan, Itali, Mexico, Jepun & banyak lagi. Bandingkan harga bahan di FairPrice, RedMart dan Cold Storage."
    },

    # 10. Chef Aika
    "chef_aika_seo_title_sg": {
        "en": "Chef Aika AI Kitchen Assistant & Custom Recipe Maker SG",
        "zh-CN": "爱佳主厨 AI 厨房助手 & 定制食谱生成器 新加坡",
        "ms": "Pembantu Dapur AI Chef Aika & Pembuat Resipi Tersuai SG"
    },
    "chef_aika_seo_desc_sg": {
        "en": "Input your leftover ingredients and let Chef Aika generate a customized, premium recipe while finding cheapest ingredients in Singapore.",
        "zh-CN": "输入您厨房剩余的食材，让爱佳主厨生成定制的美味食谱，同时寻找新加坡最便宜的原料价格。",
        "ms": "Masukkan baki bahan anda dan biarkan Chef Aika menghasilkan resipi tersuai premium sambil mencari harga bahan termurah di Singapura."
    },

    # 10. About Us
    "about_seo_title_sg": {
        "en": "About Us — Premium Organic Mushrooms & AI Grocery Comparison SG",
        "zh-CN": "关于我们 — 优质有机蘑菇与 AI 杂货价格比较 新加坡",
        "ms": "Mengenai Kami — Cendawan Organik Premium & Perbandingan Runcit AI SG"
    },
    "about_seo_desc_sg": {
        "en": "The story of Fantastic Food: How we leverage advanced AI to bring absolute transparency to online grocery pricing in Singapore.",
        "zh-CN": "Fantastic Food的故事：我们如何利用先进的 AI 为新加坡在线杂货定价带来绝对透明度。",
        "ms": "Kisah Fantastic Food: Bagaimana kami menggunakan AI canggih untuk membawa ketelusan mutlak kepada harga barangan runcit dalam talian di Singapura."
    },

    # 11. FAQ
    "faq_seo_title_sg": {
        "en": "Frequently Asked Questions — Save on Grocery Delivery SG",
        "zh-CN": "常见问题解答 — 节省新加坡买菜送货费用",
        "ms": "Soalan Lazim — Jimat Penghantaran Barangan Runcit SG"
    },
    "faq_seo_desc_sg": {
        "en": "Answers on how we crawl live delivery platforms in Singapore and calculate the lowest basket price.",
        "zh-CN": "关于我们如何抓取新加坡实时送货平台并计算购物车最低价格的解答。",
        "ms": "Jawapan tentang bagaimana kami mengimbas platform penghantaran langsung di Singapura dan mengira harga bakul terendah."
    },

    # 12. Community Feed
    "community_seo_title_sg": {
        "en": "Singapore Food Community Feed & Local Recipes | Fantastic Food",
        "zh-CN": "新加坡美食社区动态与本地食谱分享 | Fantastic Food",
        "ms": "Suapan Komuniti Makanan Singapura & Resipi Tempatan | Fantastic Food"
    },
    "community_seo_desc_sg": {
        "en": "See what food lovers in Singapore are cooking, review local ingredients, and share your favorite delivery basket recipes.",
        "zh-CN": "看看新加坡吃货们正在做什么菜，点评本地食材，并分享您最喜欢的买菜食谱购物车。",
        "ms": "Lihat apa yang dimasak oleh pencinta makanan di Singapura, ulas bahan tempatan, dan kongsi resipi bakul penghantaran kegemaran anda."
    },

    # 13. Mushroom Shop
    "mushroom_shop_seo_title_sg": {
        "en": "Organic Paddy Straw Mushrooms & Spawn Shop SG | Fantastic Food",
        "zh-CN": "有机草菇与菌种线上商店 新加坡 | Fantastic Food",
        "ms": "Kedai Cendawan Jerami Padi Organik & Benih SG | Fantastic Food"
    },
    "mushroom_shop_seo_desc_sg": {
        "en": "Shop premium organic Paddy Straw Mushrooms and premium spawn, pesticide-free, grown with deep love.",
        "zh-CN": "选购优质有机草菇和高等级菌种，无农药残留，用心培育。",
        "ms": "Beli Cendawan Jerami Padi organik premium dan benih premium, bebas racun perosak, ditanam dengan penuh kasih sayang."
    },

    # 14. Festival Planner
    "festival_seo_title_sg": {
        "en": "CNY, Hari Raya & Diwali Smart Festive Feast Planner SG",
        "zh-CN": "农历新年、开斋节与屠妖节智能节日宴会规划器 新加坡",
        "ms": "Perancang Jamuan Perayaan Pintar CNY, Hari Raya & Diwali SG"
    },
    "festival_seo_desc_sg": {
        "en": "Plan and compare prices of ingredients for Chinese New Year, Hari Raya, and Deepavali festive meals across all Singapore supermarkets.",
        "zh-CN": "规划并比较农历新年、开斋节和屠妖节等节日宴会食材在新加坡各大超市的在线价格。",
        "ms": "Rancang dan bandingkan harga bahan-bahan untuk hidangan perayaan Tahun Baru Cina, Hari Raya, dan Deepavali di semua pasar raya Singapura."
    },

    # 15. Saved Lists
    "saved_seo_title_sg": {
        "en": "My Saved Lists & Price Drop Alerts SG | Fantastic Food",
        "zh-CN": "我的收藏清单与降价提醒 新加坡 | Fantastic Food",
        "ms": "Senarai Tersimpan Saya & Makluman Penurunan Harga SG | Fantastic Food"
    },
    "saved_seo_desc_sg": {
        "en": "Track, monitor, and compare price drops on your favorite grocery list items in Singapore.",
        "zh-CN": "在新加坡跟踪、监控并比较您最喜欢的购物清单商品的降价情况。",
        "ms": "Jejak, pantau, dan bandingkan penurunan harga pada barangan senarai runcit kegemaran anda di Singapura."
    },

    # 16. Sitemap Directory
    "sitemap_seo_title_sg": {
        "en": "Website Sitemap Directory SG | Fantastic Food",
        "zh-CN": "网站地图目录 新加坡 | Fantastic Food",
        "ms": "Direktori Peta Laman Web SG | Fantastic Food"
    },
    "sitemap_seo_desc_sg": {
        "en": "Browse and discover all localized grocery comparison pages, blog directories, and recipe hubs on Fantastic Food Singapore.",
        "zh-CN": "浏览并发现 Fantastic Food 新加坡站的所有本地化杂货价格比较页面、博客目录和食谱中心。",
        "ms": "Semak imbas dan temui semua halaman perbandingan runcit tempatan, direktori blog, dan hab resipi di Fantastic Food Singapura."
    },

    # 17. Terms of Service
    "terms_seo_title_sg": {
        "en": "Terms of Service & Conditions SG | Fantastic Food",
        "zh-CN": "服务条款与条件 新加坡 | Fantastic Food",
        "ms": "Syarat Perkhidmatan & Syarat SG | Fantastic Food"
    },
    "terms_seo_desc_sg": {
        "en": "Read the terms, rules, and conditions for using the Fantastic Food price comparison engine in Singapore.",
        "zh-CN": "阅读在新加坡使用 Fantastic Food 价格比较引擎的服务条款、规则与条件。",
        "ms": "Baca syarat, peraturan, dan ketetapan untuk menggunakan enjin perbandingan harga Fantastic Food di Singapura."
    },

    # 18. Privacy Policy
    "privacy_seo_title_sg": {
        "en": "Privacy Policy & Data Protection SG | Fantastic Food",
        "zh-CN": "Privacy Policy & Data Protection SG | Fantastic Food",
        "ms": "Dasar Privasi & Perlindungan Data SG | Fantastic Food"
    },
    "privacy_seo_desc_sg": {
        "en": "Read how Fantastic Food Singapore protects, secures, and handles your user account data.",
        "zh-CN": "阅读 Fantastic Food 新加坡如何保护、安全存储和处理您的用户账户数据。",
        "ms": "Baca bagaimana Fantastic Food Singapura melindungi, mengamankan, dan mengendalikan data akaun pengguna anda."
    }
}

config_path = 'src/i18n/config.ts'
if not os.path.exists(config_path):
    print("Error: config.ts not found!")
    exit(1)

content = open(config_path, encoding='utf-8').read()

# Locate index intervals of the different locales to scope searches
lang_positions = []
for lang in ['en', 'zh-CN', 'ms']:
    pattern = re.compile(rf'[\'"]?({re.escape(lang)})[\'"]?\s*:\s*{{\s*translation:\s*{{')
    match = pattern.search(content)
    if match:
        lang_positions.append((lang, match.end()))

lang_positions.sort(key=lambda x: x[1])

for i in range(len(lang_positions)):
    lang, start_idx = lang_positions[i]
    end_idx = lang_positions[i+1][1] if i + 1 < len(lang_positions) else len(content)
    
    # Scoped block content
    block_content = content[start_idx:end_idx]
    
    injections = []
    for key, trans_dict in translation_keys.items():
        val = trans_dict.get(lang, "").replace('"', '\\"')
        
        # Check if key exists in this specific block
        if f'"{key}"' not in block_content and f"'{key}'" not in block_content:
            injections.append(f'\n      "{key}": "{val}",')
            
    if injections:
        joined_injections = "".join(injections)
        # Apply injection and shift indices
        content = content[:start_idx] + joined_injections + content[start_idx:]
        print(f"[ok] {lang} -- injected {len(injections)} keys")
        
        # Adjust indices of all subsequent blocks since length changed
        shift_amount = len(joined_injections)
        for j in range(i + 1, len(lang_positions)):
            lang_positions[j] = (lang_positions[j][0], lang_positions[j][1] + shift_amount)
    else:
        print(f"[skip] {lang} -- no new keys to inject")

open(config_path, 'w', encoding='utf-8').write(content)
print("[done] config.ts updated successfully with Singapore SEO key sets.")
