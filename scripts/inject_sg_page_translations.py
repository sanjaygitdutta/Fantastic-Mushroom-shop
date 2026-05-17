"""
inject_sg_page_translations.py
=======================================================
Injects SG-locale translations for TWO pages:
  1. /savings   → foodscore_* keys  (zh-CN + ms)
  2. /meal-calculator → meal_cost_* keys (en + zh-CN + ms)

SAFE GUARANTEE:
  - Indian locales (hi, bn, mr, te, ta) are NEVER modified.
  - EN gets NEW meal_cost_* keys only (foodscore already exists in EN).
  - Before injecting, each key is checked — skipped if already present
    in that locale block to prevent duplicates.
"""

import re, sys

CONFIG_PATH = r'c:\Users\abcom\Desktop\Fantastic food\src\i18n\config.ts'

# ─── Translation tables ────────────────────────────────────────────────────────

FOODSCORE_ZH_CN = {
    "foodscore_badge":            "FoodScore 仪表板",
    "foodscore_title":            "您的节省智能分析",
    "foodscore_subtitle":         "追踪您的精明购物记录。每次比价都能提升您的分数。",
    "foodscore_share":            "分享分数",
    "foodscore_grade_s":          "传奇节省达人",
    "foodscore_grade_a":          "聪明购物者",
    "foodscore_grade_b":          "砍价猎手",
    "foodscore_grade_c":          "随意买家",
    "foodscore_grade_d":          "刚刚起步",
    "foodscore_grade_label":      "等级",
    "foodscore_total_saved":      "总共节省",
    "foodscore_total_saved_sub":  "与最高平台价格相比",
    "foodscore_comparisons":      "比价次数",
    "foodscore_comparisons_sub":  "完成的总比价次数",
    "foodscore_streak":           "连续天数",
    "foodscore_streak_sub":       "连续活跃天数",
    "foodscore_best_category":    "最佳类别",
    "foodscore_best_category_sub":"在此类别找到最多节省",
    "foodscore_empty_title":      "开始比价，积累您的分数！",
    "foodscore_empty_desc":       "每次在此平台比价，您的 FoodScore 就会增长。开始节省吧！",
    "foodscore_compare_btn":      "立即比价",
    "foodscore_recent":           "最近比价记录",
    "foodscore_best_on":          "最优平台：",
}

FOODSCORE_MS = {
    "foodscore_badge":            "Papan Pemuka FoodScore",
    "foodscore_title":            "Kecerdasan Penjimatan Anda",
    "foodscore_subtitle":         "Jejaki cara anda membeli-belah dengan bijak. Setiap perbandingan harga membina skor anda.",
    "foodscore_share":            "Kongsi Skor",
    "foodscore_grade_s":          "Penjimat Legenda",
    "foodscore_grade_a":          "Pembeli Bijak",
    "foodscore_grade_b":          "Pemburu Tawaran",
    "foodscore_grade_c":          "Pembeli Biasa",
    "foodscore_grade_d":          "Baru Bermula",
    "foodscore_grade_label":      "Gred",
    "foodscore_total_saved":      "Jumlah Jimat",
    "foodscore_total_saved_sub":  "berbanding harga platform tertinggi",
    "foodscore_comparisons":      "Perbandingan Dibuat",
    "foodscore_comparisons_sub":  "jumlah semakan harga selesai",
    "foodscore_streak":           "Hari Berturut-turut",
    "foodscore_streak_sub":       "hari aktif berturut-turut",
    "foodscore_best_category":    "Kategori Terbaik",
    "foodscore_best_category_sub":"penjimatan terbanyak dijumpai di sini",
    "foodscore_empty_title":      "Mula Membandingkan untuk Bina Skor Anda!",
    "foodscore_empty_desc":       "Setiap kali anda membandingkan harga di platform ini, FoodScore anda meningkat. Mula jimat sekarang!",
    "foodscore_compare_btn":      "Bandingkan Harga Sekarang",
    "foodscore_recent":           "Perbandingan Terkini",
    "foodscore_best_on":          "Terbaik di",
}

MEAL_COST_EN = {
    "meal_cost_badge":          "Smart Meal Planner",
    "meal_cost_title_1":        "Cook Smarter",
    "meal_cost_title_2":        "Spend Less",
    "meal_cost_desc":           "Pick from {{count}}+ global recipes — we'll compare the total ingredient cost across all platforms.",
    "meal_cost_desc_sg":        "Pick from {{count}}+ global recipes — we'll compare the total ingredient cost across FairPrice, RedMart & more.",
    "meal_cost_search":         "Search {{count}}+ recipes…",
    "meal_cost_ingredients":    "Ingredients Needed",
    "meal_cost_comparing":      "Comparing prices…",
    "meal_cost_checking":       "Checking platforms for you",
    "meal_cost_save_tip":       "Save {{amount}} by choosing the cheapest platform!",
    "meal_cost_per_person":     "per person savings",
    "meal_cost_cheapest":       "CHEAPEST",
    "meal_cost_for_servings":   "for {{n}} servings",
    "meal_cost_tap_compare":    "Tap to compare prices →",
    "meal_cost_disclaimer":     "⚠️ Actual prices vary by location & availability. Click Order to see live prices.",
    "meal_cost_servings":       "Servings:",
    "meal_cost_order":          "Order",
    "meal_cost_seo_title":      "Meal Cost Calculator — {{count}}+ World Recipes | Fantastic Food",
    "meal_cost_seo_title_sg":   "Meal Cost Calculator Singapore — {{count}}+ Recipes | Fantastic Food SG",
    "meal_cost_seo_desc":       "Find the exact cost of cooking {{count}}+ recipes at home. Compare ingredient prices across Blinkit, Zepto, BigBasket & more.",
    "meal_cost_seo_desc_sg":    "Find the exact cost of cooking {{count}}+ recipes at home in Singapore. Compare ingredient prices across FairPrice, RedMart, Cold Storage & more.",
}

MEAL_COST_ZH_CN = {
    "meal_cost_badge":          "智能膳食规划器",
    "meal_cost_title_1":        "聪明烹饪",
    "meal_cost_title_2":        "减少开支",
    "meal_cost_desc":           "从 {{count}}+ 道全球食谱中选择 — 我们将比较所有平台的食材总费用。",
    "meal_cost_desc_sg":        "从 {{count}}+ 道全球食谱中选择 — 我们将比较 FairPrice、RedMart 等平台的食材总费用。",
    "meal_cost_search":         "搜索 {{count}}+ 道食谱…",
    "meal_cost_ingredients":    "所需食材",
    "meal_cost_comparing":      "正在比较价格…",
    "meal_cost_checking":       "正在为您查询各平台价格",
    "meal_cost_save_tip":       "选择最便宜的平台可节省 {{amount}}！",
    "meal_cost_per_person":     "每人节省",
    "meal_cost_cheapest":       "最便宜",
    "meal_cost_for_servings":   "共 {{n}} 份",
    "meal_cost_tap_compare":    "点击比较价格 →",
    "meal_cost_disclaimer":     "⚠️ 实际价格因地点和库存而异。点击「订购」查看实时价格。",
    "meal_cost_servings":       "份量：",
    "meal_cost_order":          "订购",
    "meal_cost_seo_title":      "膳食费用计算器 — {{count}}+ 道全球食谱 | Fantastic Food",
    "meal_cost_seo_title_sg":   "新加坡膳食费用计算器 — {{count}}+ 道食谱 | Fantastic Food SG",
    "meal_cost_seo_desc":       "了解在家烹饪 {{count}}+ 道食谱的确切费用。比较各平台的食材价格。",
    "meal_cost_seo_desc_sg":    "了解在新加坡家中烹饪 {{count}}+ 道食谱的确切费用。比较 FairPrice、RedMart 等平台的食材价格。",
}

MEAL_COST_MS = {
    "meal_cost_badge":          "Perancang Hidangan Pintar",
    "meal_cost_title_1":        "Masak Lebih Bijak",
    "meal_cost_title_2":        "Belanja Lebih Sedikit",
    "meal_cost_desc":           "Pilih dari {{count}}+ resipi global — kami akan bandingkan jumlah kos bahan merentas semua platform.",
    "meal_cost_desc_sg":        "Pilih dari {{count}}+ resipi global — kami akan bandingkan jumlah kos bahan di FairPrice, RedMart & lagi.",
    "meal_cost_search":         "Cari {{count}}+ resipi…",
    "meal_cost_ingredients":    "Bahan-bahan Diperlukan",
    "meal_cost_comparing":      "Membandingkan harga…",
    "meal_cost_checking":       "Menyemak platform untuk anda",
    "meal_cost_save_tip":       "Jimat {{amount}} dengan memilih platform termurah!",
    "meal_cost_per_person":     "penjimatan setiap orang",
    "meal_cost_cheapest":       "TERMURAH",
    "meal_cost_for_servings":   "untuk {{n}} hidangan",
    "meal_cost_tap_compare":    "Ketik untuk bandingkan harga →",
    "meal_cost_disclaimer":     "⚠️ Harga sebenar berbeza mengikut lokasi & ketersediaan. Klik Pesan untuk lihat harga langsung.",
    "meal_cost_servings":       "Hidangan:",
    "meal_cost_order":          "Pesan",
    "meal_cost_seo_title":      "Kalkulator Kos Hidangan — {{count}}+ Resipi Dunia | Fantastic Food",
    "meal_cost_seo_title_sg":   "Kalkulator Kos Hidangan Singapura — {{count}}+ Resipi | Fantastic Food SG",
    "meal_cost_seo_desc":       "Cari kos tepat memasak {{count}}+ resipi di rumah. Bandingkan harga bahan merentas pelbagai platform.",
    "meal_cost_seo_desc_sg":    "Cari kos tepat memasak {{count}}+ resipi di rumah di Singapura. Bandingkan harga bahan di FairPrice, RedMart, Cold Storage & lagi.",
}

# ─── Injection logic ──────────────────────────────────────────────────────────

def build_block(trans: dict) -> str:
    return "".join(f'      "{k}": "{v}",\n' for k, v in trans.items())


def locale_block_range(content: str, lang: str):
    """Return (start_idx, end_idx) of the translation block for a locale."""
    pat = re.compile(
        r"['\"]" + re.escape(lang) + r"['\"]" +
        r"\s*:\s*\{\s*translation\s*:\s*\{",
        re.DOTALL
    )
    m = pat.search(content)
    if not m:
        return None, None
    # Find matching closing brace pairs — just return the match end (insert point)
    return m.start(), m.end()


def key_exists_in_locale(content: str, lang: str, key: str) -> bool:
    """Check if a key already exists anywhere after the locale declaration."""
    start, end = locale_block_range(content, lang)
    if end is None:
        return False
    # Search for the key within the next 60 000 chars (single locale block)
    snippet = content[end: end + 60000]
    return f'"{key}"' in snippet


def inject(content: str, lang: str, trans: dict) -> str:
    start, end = locale_block_range(content, lang)
    if end is None:
        print(f"  [skip]  '{lang}' -- could not find locale block, skipping")
        return content

    # Filter out keys that already exist
    new_trans = {k: v for k, v in trans.items()
                 if not key_exists_in_locale(content, lang, k)}

    if not new_trans:
        print(f"  [ok]  '{lang}' -- all keys already present, nothing to inject")
        return content

    block = build_block(new_trans)
    insert_at = end
    content = content[:insert_at] + "\n" + block + content[insert_at:]
    print(f"  [ok]  '{lang}' -- injected {len(new_trans)} keys "
          f"(skipped {len(trans) - len(new_trans)} existing)")
    return content


# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    with open(CONFIG_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    print("\n[savings]  /savings  -- foodscore_* keys")
    content = inject(content, "zh-CN", FOODSCORE_ZH_CN)
    content = inject(content, "ms",    FOODSCORE_MS)

    print("\n[meal]   /meal-calculator  -- meal_cost_* keys")
    content = inject(content, "en",    MEAL_COST_EN)
    content = inject(content, "zh-CN", MEAL_COST_ZH_CN)
    content = inject(content, "ms",    MEAL_COST_MS)

    with open(CONFIG_PATH, "w", encoding="utf-8") as f:
        f.write(content)

    print("\n[done] config.ts updated. Indian locales (hi/bn/mr/te/ta) untouched.")


if __name__ == "__main__":
    main()
