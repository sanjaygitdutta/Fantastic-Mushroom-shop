"""
inject_coupons_saved_translations.py
=======================================================
Injects translations for /coupons and /saved pages into config.ts.
1. en: Inject all keys including SG variants.
2. zh-CN: Inject translated keys.
3. ms: Inject translated keys.
"""

import re

CONFIG_PATH = r'c:\Users\abcom\Desktop\Fantastic food\src\i18n\config.ts'

EN_TRANS = {
    # Coupons
    "coup_cat_all": "All",
    "coup_cat_first_order": "First Order",
    "coup_cat_grocery": "Grocery",
    "coup_cat_vegetables": "Vegetables",
    "coup_cat_dairy": "Dairy",
    "coup_cat_delivery": "Delivery",
    "coup_copied": "Copied!",
    "coup_copy": "Copy",
    "coup_expires": "Expires:",
    "coup_shop": "Shop",
    "coup_updated_daily": "Updated Daily",
    "coup_title": "Grocery Coupon Codes",
    "coup_subtitle": "Save More Every Day",
    "coup_desc": "The best promo codes for Blinkit, Zepto, Swiggy, BigBasket, JioMart & Flipkart Minutes — all in one place. Click to copy instantly!",
    "coup_desc_sg": "The best promo codes for FairPrice, RedMart, Cold Storage & Shopee Supermarket — all in one place. Click to copy instantly!",
    "coup_stat_active": "Active Coupons",
    "coup_stat_hot": "Hot Deals Today",
    "coup_stat_platforms": "Platforms Covered",
    "coup_search_placeholder": "Search coupons, codes, or platforms...",
    "coup_category_label": "Category",
    "coup_platform_label": "Platform",
    "coup_showing": "Showing",
    "coup_coupons": "coupons",
    "coup_hot_deals": "hot deals",
    "coup_show_all": "Show all",
    "coup_no_found": "No coupons found",
    "coup_no_found_sub": "Try changing your filters or search term",
    
    # Saved
    "saved_title": "Watchlist",
    "saved_subtitle": "Items you are tracking for price drops.",
    "saved_add_items": "Add Items",
    "saved_empty_title": "Your watchlist is empty",
    "saved_empty_desc": "Track your favorite groceries to get notified when prices drop across Quick Commerce platforms.",
    "saved_start_tracking": "Start Tracking Prices",
    "saved_tracked_since": "Tracked since",
    "saved_last_best_price": "Last Best Price",
    "saved_on_platform": "on",
    "saved_check_live": "Check Live Price",
    "saved_remove_title": "Remove from Watchlist"
}

ZH_CN_TRANS = {
    "coup_cat_all": "全部",
    "coup_cat_first_order": "首单",
    "coup_cat_grocery": "杂货",
    "coup_cat_vegetables": "蔬菜",
    "coup_cat_dairy": "乳制品",
    "coup_cat_delivery": "送货",
    "coup_copied": "已复制!",
    "coup_copy": "复制",
    "coup_expires": "截止日期:",
    "coup_shop": "去购物",
    "coup_updated_daily": "每日更新",
    "coup_title": "杂货优惠券代码",
    "coup_subtitle": "每天省更多",
    "coup_desc": "Blinkit, Zepto, Swiggy 等的最佳优惠码 - 一站式获取。点击立即复制！",
    "coup_desc_sg": "FairPrice, RedMart, Cold Storage 等的最佳优惠码 - 一站式获取。点击立即复制！",
    "coup_stat_active": "有效优惠券",
    "coup_stat_hot": "今日热卖",
    "coup_stat_platforms": "覆盖平台",
    "coup_search_placeholder": "搜索优惠券、代码或平台...",
    "coup_category_label": "类别",
    "coup_platform_label": "平台",
    "coup_showing": "正在显示",
    "coup_coupons": "张优惠券",
    "coup_hot_deals": "个热门优惠",
    "coup_show_all": "显示全部",
    "coup_no_found": "未找到优惠券",
    "coup_no_found_sub": "请尝试更改筛选条件或搜索词",
    
    "saved_title": "观察清单",
    "saved_subtitle": "您正在追踪降价的商品。",
    "saved_add_items": "添加商品",
    "saved_empty_title": "您的观察清单是空的",
    "saved_empty_desc": "追踪您最喜欢的杂货，并在平台降价时收到通知。",
    "saved_start_tracking": "开始追踪价格",
    "saved_tracked_since": "开始追踪于",
    "saved_last_best_price": "上次最低价格",
    "saved_on_platform": "在",
    "saved_check_live": "查看实时价格",
    "saved_remove_title": "从观察清单中移除"
}

MS_TRANS = {
    "coup_cat_all": "Semua",
    "coup_cat_first_order": "Pesanan Pertama",
    "coup_cat_grocery": "Barangan Runcit",
    "coup_cat_vegetables": "Sayur-sayuran",
    "coup_cat_dairy": "Tenusu",
    "coup_cat_delivery": "Penghantaran",
    "coup_copied": "Disalin!",
    "coup_copy": "Salin",
    "coup_expires": "Tamat pada:",
    "coup_shop": "Beli",
    "coup_updated_daily": "Dikemas kini Setiap Hari",
    "coup_title": "Kod Kupon Barangan Runcit",
    "coup_subtitle": "Jimat Lebih Setiap Hari",
    "coup_desc": "Kod promo terbaik untuk Blinkit, Zepto, Swiggy dll — semuanya di satu tempat. Klik untuk salin terus!",
    "coup_desc_sg": "Kod promo terbaik untuk FairPrice, RedMart, Cold Storage dll — semuanya di satu tempat. Klik untuk salin terus!",
    "coup_stat_active": "Kupon Aktif",
    "coup_stat_hot": "Tawaran Hangat Hari Ini",
    "coup_stat_platforms": "Platform Diliputi",
    "coup_search_placeholder": "Cari kupon, kod, atau platform...",
    "coup_category_label": "Kategori",
    "coup_platform_label": "Platform",
    "coup_showing": "Menunjukkan",
    "coup_coupons": "kupon",
    "coup_hot_deals": "tawaran hangat",
    "coup_show_all": "Tunjuk semua",
    "coup_no_found": "Tiada kupon dijumpai",
    "coup_no_found_sub": "Cuba tukar penapis atau istilah carian anda",
    
    "saved_title": "Senarai Pantau",
    "saved_subtitle": "Barangan yang anda pantau untuk penurunan harga.",
    "saved_add_items": "Tambah Barang",
    "saved_empty_title": "Senarai pantau anda kosong",
    "saved_empty_desc": "Pantau barangan runcit kegemaran anda untuk mendapat makluman apabila harga turun.",
    "saved_start_tracking": "Mula Memantau Harga",
    "saved_tracked_since": "Dipantau sejak",
    "saved_last_best_price": "Harga Terbaik Terakhir",
    "saved_on_platform": "di",
    "saved_check_live": "Semak Harga Langsung",
    "saved_remove_title": "Buang dari Senarai Pantau"
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
        print(f"  [skip]  '{lang}' -- could not find locale block")
        return content

    new_trans = {k: v for k, v in trans.items() if not key_exists_in_locale(content, lang, k)}

    if not new_trans:
        print(f"  [ok]  '{lang}' -- all keys already present")
        return content

    block = build_block(new_trans)
    insert_at = end
    content = content[:insert_at] + "\n" + block + content[insert_at:]
    print(f"  [ok]  '{lang}' -- injected {len(new_trans)} keys (skipped {len(trans) - len(new_trans)} existing)")
    return content

def main():
    with open(CONFIG_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    print("\n[coupons+saved] Injecting keys...")
    content = inject(content, "en",    EN_TRANS)
    content = inject(content, "zh-CN", ZH_CN_TRANS)
    content = inject(content, "ms",    MS_TRANS)

    with open(CONFIG_PATH, "w", encoding="utf-8") as f:
        f.write(content)

    print("\n[done] config.ts updated. Indian locales untouched.")

if __name__ == "__main__":
    main()
