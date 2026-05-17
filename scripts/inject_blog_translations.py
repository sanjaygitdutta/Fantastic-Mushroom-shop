"""
inject_blog_translations.py
=======================================================
Injects SG & India locale translations for the /blog directory and post views.
1. blog_* keys for en (defaults/SG)
2. blog_* keys for zh-CN
3. blog_* keys for ms
"""

import re

CONFIG_PATH = r'c:\Users\abcom\Desktop\Fantastic food\src\i18n\config.ts'

BLOG_EN = {
    "blog_seo_title": "Grocery Deals, Coupons & Price Insights Blog | Fantastic Food",
    "blog_seo_desc": "Read the latest insights on how to save money on grocery delivery in India. Zepto vs Blinkit, coupon codes, and price drops.",
    "blog_seo_title_sg": "Singapore Grocery Deals, Coupons & Price Insights | Fantastic Food SG",
    "blog_seo_desc_sg": "Read the latest insights on how to save money on grocery delivery in Singapore. FairPrice vs RedMart vs Cold Storage, promo codes, and price drops.",
    "blog_deals": "Deals &",
    "blog_market_insights": "Market Insights",
    "blog_directory_desc": "Discover the latest grocery coupons, delivery hacks, and data-driven price comparisons to help you save more on every order.",
    "blog_back": "← Back to Blog",
    "blog_stop_overpaying": "Stop overpaying for groceries.",
    "blog_compare_desc": "Instantly compare live prices across Blinkit, Zepto, and Swiggy Instamart before you buy.",
    "blog_compare_desc_sg": "Instantly compare live prices across FairPrice, RedMart, and Cold Storage before you buy.",
    "blog_compare_btn": "Compare Live Prices Now",
    "button_read_more": "Read →",
}

BLOG_ZH_CN = {
    "blog_seo_title": "杂货优惠、优惠券与价格洞察博客 | Fantastic Food",
    "blog_seo_title_sg": "新加坡杂货优惠、优惠券与省钱洞察 | Fantastic Food SG",
    "blog_seo_desc": "阅读关于印度杂货配送省钱的最新洞察。Zepto 与 Blinkit 对比、优惠券码与降价监控。",
    "blog_seo_desc_sg": "阅读关于新加坡杂货配送省钱的最新洞察。FairPrice、RedMart 与 Cold Storage 对比、促销码与降价监控。",
    "blog_deals": "省钱优惠与",
    "blog_market_insights": "市场洞察",
    "blog_directory_desc": "发现最新的杂货优惠券、配送秘籍以及基于数据的比价，助您在每一笔订单中省下更多钱。",
    "blog_back": "← 返回博客",
    "blog_stop_overpaying": "别再为杂货花冤枉钱了。",
    "blog_compare_desc": "下单前即时对比 Blinkit, Zepto 和 Swiggy Instamart 的实时价格。",
    "blog_compare_desc_sg": "下单前即时对比 FairPrice, RedMart 和 Cold Storage 的实时价格。",
    "blog_compare_btn": "立即对比实时价格",
    "button_read_more": "阅读全文 →",
}

BLOG_MS = {
    "blog_seo_title": "Blog Tawaran Runcit, Kupon & Wawasan Harga | Fantastic Food",
    "blog_seo_title_sg": "Blog Tawaran Runcit, Kupon & Wawasan Harga Singapura | Fantastic Food SG",
    "blog_seo_desc": "Baca wawasan terkini tentang cara menjimatkan wang untuk penghantaran barangan runcit di India. Perbandingan Zepto vs Blinkit, kod kupon dan penurunan harga.",
    "blog_seo_desc_sg": "Baca wawasan terkini tentang cara menjimatkan wang untuk penghantaran barangan runcit di Singapura. Perbandingan FairPrice vs RedMart vs Cold Storage, kod promo dan penurunan harga.",
    "blog_deals": "Tawaran &",
    "blog_market_insights": "Wawasan Pasaran",
    "blog_directory_desc": "Temui kupon barangan runcit terkini, petua penghantaran dan perbandingan harga dipacu data untuk membantu anda berjimat lebih pada setiap pesanan.",
    "blog_back": "← Kembali ke Blog",
    "blog_stop_overpaying": "Berhenti bayar lebih untuk barangan runcit.",
    "blog_compare_desc": "Bandingkan harga langsung di seluruh Blinkit, Zepto dan Swiggy Instamart serta-merta sebelum anda membeli.",
    "blog_compare_desc_sg": "Bandingkan harga langsung di seluruh FairPrice, RedMart dan Cold Storage serta-merta sebelum anda membeli.",
    "blog_compare_btn": "Bandingkan Harga Langsung Sekarang",
    "button_read_more": "Baca Lagi →",
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
    snippet = content[end: end + 80000]
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

    print("\n[blog]  /blog  -- blog_* keys")
    content = inject(content, "en",    BLOG_EN)
    content = inject(content, "zh-CN", BLOG_ZH_CN)
    content = inject(content, "ms",    BLOG_MS)

    with open(CONFIG_PATH, "w", encoding="utf-8") as f:
        f.write(content)

    print("\n[done] config.ts updated successfully with blog page key sets.")

if __name__ == "__main__":
    main()
