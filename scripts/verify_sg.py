content = open('src/i18n/config.ts', encoding='utf-8').read()

checks = [
    ("zh-CN", "zh-CN block"),
    ("'ms'", "ms block"),
    ("home_hero_subtitle_sg", "SG hero subtitle key"),
    ("home_step_2_desc_sg", "SG step2 desc key"),
    ("compare_prices_btn", "compare_prices_btn key"),
    ("popular_searches_label", "popular_searches_label key"),
    ("search_placeholder_2", "search_placeholder_2 key"),
    ("zh-CN', 'ms'", "supportedLngs updated"),
    ("deal_buy_now", "deal_buy_now key"),
    ("deal_of_the_day", "deal_of_the_day key"),
    ("blog_seo_title_sg", "blog_seo_title_sg key"),
    ("blog_compare_desc_sg", "blog_compare_desc_sg key"),
    ("seas_seo_title_sg", "seas_seo_title_sg key"),
    ("seas_desc_sg", "seas_desc_sg key"),
    ("recipes_seo_title_sg", "recipes_seo_title_sg key"),
    ("recipes_seo_desc_sg", "recipes_seo_desc_sg key"),
]

all_ok = True
for term, label in checks:
    count = content.count(term)
    status = "OK" if count > 0 else "MISSING"
    if count == 0:
        all_ok = False
    print(f"  [{status}] {label} (found {count}x)")

print()
print("ALL CHECKS PASSED" if all_ok else "SOME CHECKS FAILED")
