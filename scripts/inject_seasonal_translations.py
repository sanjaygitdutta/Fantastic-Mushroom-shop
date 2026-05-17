"""
inject_seasonal_translations.py
=======================================================
Injects SG & India locale translations for the /seasonal page.
1. seas_* keys for en (defaults/SG)
2. seas_* keys for zh-CN
3. seas_* keys for ms
4. seas_* keys for hi, bn, mr, te, ta
"""

import re

CONFIG_PATH = r'c:\Users\abcom\Desktop\Fantastic food\src\i18n\config.ts'

SEAS_EN = {
    "seas_badge": "Field to Fork",
    "seas_title": "What's In Season",
    "seas_title_highlight": "Right Now?",
    "seas_desc": "In-season produce is always fresher, tastier, and significantly cheaper. Shop smart by buying what nature intended.",
    "seas_desc_sg": "Since Singapore imports most produce, in-season goods from neighboring countries are fresher, taste better, and are much cheaper. Buy smart!",
    "seas_best_to_buy": "Best to buy in",
    "seas_freshest": "items at their freshest & cheapest!",
    "seas_items": "items",
    "seas_filter_all": "All",
    "seas_filter_vegetables": "Vegetables",
    "seas_filter_fruits": "Fruits",
    "seas_no_items": "No items found for this selection.",
    "seas_type_vegetable": "🥦 Vegetable",
    "seas_type_fruit": "🍎 Fruit",
    "seas_compare_price": "Compare Price",
    "seas_cta_title": "Shop seasonal, save more 🌾",
    "seas_cta_desc": "In-season produce costs up to 40% less than out-of-season imports. Compare prices across all platforms and get the freshest at cheapest!",
    "seas_cta_desc_sg": "In-season imported produce costs up to 40% less than out-of-season air-freighted items. Compare prices across FairPrice, RedMart and Cold Storage!",
    "seas_cta_btn": "Build My Seasonal Basket",
    "seas_seo_title": "Seasonal Fruits & Vegetables Guide India — Fantastic Food",
    "seas_seo_desc": "Discover what fruits and vegetables are in season right now in India. Fresh, cheap, and healthy — compared across Blinkit, Zepto, Swiggy Instamart.",
    "seas_seo_title_sg": "Seasonal Fruits & Vegetables Guide Singapore — Fantastic Food SG",
    "seas_seo_desc_sg": "Discover what fruits and vegetables are in season right now in Singapore. Compare prices across FairPrice, RedMart, Cold Storage.",
}

SEAS_ZH_CN = {
    "seas_badge": "农田到餐桌",
    "seas_title": "现在是什么季节的面市蔬菜",
    "seas_title_highlight": "新鲜又划算？",
    "seas_desc": "当季当地/进口农产品更佳新鲜、美味，且价格更低廉。选择大自然当季馈赠，做精明买家。",
    "seas_desc_sg": "由于新加坡的蔬菜水果多为进口，选购周边邻国（马、泰、中）当季丰收的农产品，更新鲜、美味且更便宜！",
    "seas_best_to_buy": "最适合在以下月份购买：",
    "seas_freshest": "款食材正值最佳赏味期且价格最划算！",
    "seas_items": "个品种",
    "seas_filter_all": "全部",
    "seas_filter_vegetables": "蔬菜",
    "seas_filter_fruits": "水果",
    "seas_no_items": "未找到符合该筛选的食材。",
    "seas_type_vegetable": "🥦 蔬菜",
    "seas_type_fruit": "🍎 水果",
    "seas_compare_price": "比价购买",
    "seas_cta_title": "选购当季食材，省下更多 🌾",
    "seas_cta_desc": "当季农产品的价格比反季进口低多达40%。即时对比各大平台，买到最优质便宜的蔬菜！",
    "seas_cta_desc_sg": "从邻国当季进口的农产品价格，比空运反季食材便宜多达40%。即时对比 FairPrice, RedMart 和 Cold Storage 的价格！",
    "seas_cta_btn": "生成我的当季购物篮",
    "seas_seo_title": "印度当季蔬菜水果选购指南 — Fantastic Food",
    "seas_seo_title_sg": "新加坡当季蔬菜水果选购指南 — Fantastic Food SG",
    "seas_seo_desc": "探索印度当前有哪些应季水果蔬菜。新鲜、便宜又健康，在 Blinkit, Zepto, Swiggy Instamart 之间进行实时比价。",
    "seas_seo_desc_sg": "探索新加坡当前有哪些从周边邻国进口的应季水果蔬菜。在 FairPrice, RedMart, Cold Storage 之间进行实时比价。",
}

SEAS_MS = {
    "seas_badge": "Dari Ladang Ke Pinggan",
    "seas_title": "Apakah Hasil Musim",
    "seas_title_highlight": "Sekarang Ini?",
    "seas_desc": "Hasil tanaman bermusim sentiasa lebih segar, lebih sedap, dan jauh lebih murah. Beli dengan bijak mengikut musim semula jadi.",
    "seas_desc_sg": "Oleh kerana Singapura mengimport sebagian besar hasil tanaman, membeli barangan bermusim dari negara jiran adalah lebih segar, lebih sedap dan jauh lebih murah!",
    "seas_best_to_buy": "Paling baik dibeli pada bulan",
    "seas_freshest": "item pada keadaan paling segar & paling murah!",
    "seas_items": "item",
    "seas_filter_all": "Semua",
    "seas_filter_vegetables": "Sayur-sayuran",
    "seas_filter_fruits": "Buah-buahan",
    "seas_no_items": "Tiada item ditemui untuk pilihan ini.",
    "seas_type_vegetable": "🥦 Sayur",
    "seas_type_fruit": "🍎 Buah",
    "seas_compare_price": "Banding Harga",
    "seas_cta_title": "Beli mengikut musim, lebih penjimatan 🌾",
    "seas_cta_desc": "Hasil bermusim berharga sehingga 40% kurang daripada barangan import luar musim. Bandingkan harga di semua platform!",
    "seas_cta_desc_sg": "Hasil bermusim yang diimport dari negara jiran berharga sehingga 40% kurang daripada barangan luar musim. Bandingkan harga merentasi FairPrice, RedMart dan Cold Storage!",
    "seas_cta_btn": "Bina Bakul Bermusim Saya",
    "seas_seo_title": "Panduan Buah-Buahan & Sayur-Sayuran Bermusim India — Fantastic Food",
    "seas_seo_title_sg": "Panduan Buah-Buahan & Sayur-Sayuran Bermusim Singapura — Fantastic Food SG",
    "seas_seo_desc": "Temui buah-buahan dan sayur-sayuran yang sedang bermusim sekarang di India. Segar, murah dan sihat — dibandingkan di Blinkit, Zepto, Swiggy Instamart.",
    "seas_seo_desc_sg": "Temui buah-buahan dan sayur-sayuran yang sedang bermusim sekarang di Singapura. Bandingkan harga merentasi FairPrice, RedMart dan Cold Storage.",
}

SEAS_HI = {
    "seas_badge": "खेत से थाली तक",
    "seas_title": "अभी क्या मौसम में है",
    "seas_title_highlight": "इस समय?",
    "seas_desc": "मौसमी उपज हमेशा ताज़ी, स्वादिष्ट और काफी सस्ती होती है। समझदारी से खरीदारी करें — वही खरीदें जो प्रकृति ने तय किया है।",
    "seas_best_to_buy": "खरीदने के लिए सबसे अच्छा",
    "seas_freshest": "आइटम अपने सबसे ताज़े और सस्ते पर!",
    "seas_items": "आइटम",
    "seas_filter_all": "सभी",
    "seas_filter_vegetables": "सब्ज़ियाँ",
    "seas_filter_fruits": "फल",
    "seas_no_items": "इस चयन के लिए कोई आइटम नहीं मिला।",
    "seas_type_vegetable": "🥦 सब्ज़ी",
    "seas_type_fruit": "🍎 फल",
    "seas_compare_price": "कीमत तुलना करें",
    "seas_cta_title": "मौसमी खरीदें, अधिक बचाएं 🌾",
    "seas_cta_desc": "मौसमी उपज आउट-ऑफ-सीज़न आयातों की तुलना में 40% तक कम खर्चीली होती है। सभी प्लेटफार्मों पर कीमतों की तुलना करें!",
    "seas_cta_btn": "मेरी मौसमी बास्केट बनाएं",
}

SEAS_BN = {
    "seas_badge": "মাঠ থেকে কাঁটা পর্যন্ত",
    "seas_title": "এখন কোনটা মৌসুমে আছে",
    "seas_title_highlight": "এই মুহূর্তে?",
    "seas_desc": "মৌসুমি পণ্য সবসময় তাজা, সুস্বাদু এবং উল্লেখযোগ্যভাবে সস্তা। স্মার্টভাবে কেনাকাটা করুন — প্রকৃতি যা নির্ধারণ করেছে তাই কিনুন।",
    "seas_best_to_buy": "কেনার জন্য সেরা",
    "seas_freshest": "টি আইটেম তাদের সবচেয়ে তাজা ও সস্তায়!",
    "seas_items": "আইটেম",
    "seas_filter_all": "সব",
    "seas_filter_vegetables": "সবজি",
    "seas_filter_fruits": "ফল",
    "seas_no_items": "এই নির্বাচনের জন্য কোনো আইটেম পাওয়া যায়নি।",
    "seas_type_vegetable": "🥦 সবজি",
    "seas_type_fruit": "🍎 ফল",
    "seas_compare_price": "দাম তুলনা করুন",
    "seas_cta_title": "মৌসুমি কিনুন, বেশি সাশ্রয় করুন 🌾",
    "seas_cta_desc": "মৌসুমি পণ্য অফ-সিজন আমদানির তুলনায় ৪০% পর্যন্ত কম খরচ করে। সব প্ল্যাটফর্মে দাম তুলনা করুন!",
    "seas_cta_btn": "আমার মৌসুমি ঝুড়ি তৈরি করুন",
}

SEAS_MR = {
    "seas_badge": "शेतातून ताटापर्यंत",
    "seas_title": "आता कशाचा हंगाम आहे",
    "seas_title_highlight": "आत्ता?",
    "seas_desc": "हंगामी उत्पादने नेहमीच ताजी, चवदार आणि लक्षणीयरीत्या स्वस्त असतात. हुशारीने खरेदी करा — निसर्गाने जे ठरवले ते खरेदी करा।",
    "seas_best_to_buy": "खरेदीसाठी सर्वोत्तम",
    "seas_freshest": "वस्तू त्यांच्या सर्वात ताज्या आणि स्वस्त!",
    "seas_items": "वस्तू",
    "seas_filter_all": "सर्व",
    "seas_filter_vegetables": "भाज्या",
    "seas_filter_fruits": "फळे",
    "seas_no_items": "या निवडीसाठी कोणत्याही वस्तू सापडल्या नाहीत।",
    "seas_type_vegetable": "🥦 भाजी",
    "seas_type_fruit": "🍎 फळ",
    "seas_compare_price": "किंमत तुलना करा",
    "seas_cta_title": "हंगामी खरेदी करा, अधिक बचवा 🌾",
    "seas_cta_desc": "हंगामी उत्पादने ऑफ-सीझन आयातांपेक्षा ४०% पर्यंत कमी खर्च करतात. सर्व प्लॅटफॉर्मवर किमतींची तुलना करा!",
    "seas_cta_btn": "माझी हंगामी बास्केट तयार करा",
}

SEAS_TE = {
    "seas_badge": "పొలం నుండి పళ్ళెం వరకు",
    "seas_title": "ఇప్పుడు సీజన్‌లో ఏముంది",
    "seas_title_highlight": "ఇప్పుడు?",
    "seas_desc": "సీజన్ ఉత్పత్తులు ఎల్లప్పుడూ తాజాగా, రుచిగా మరియు చాలా చవకగా ఉంటాయి. తెలివిగా కొనండి — ప్రకృతి నిర్ణయించింది అదే కొనండి.",
    "seas_best_to_buy": "కొనడానికి అత్యుత్తమం",
    "seas_freshest": "అంశాలు వాటి అత్యంత తాజాగా మరియు చవకగా!",
    "seas_items": "అంశాలు",
    "seas_filter_all": "అన్నీ",
    "seas_filter_vegetables": "కూరగాయలు",
    "seas_filter_fruits": "పండ్లు",
    "seas_no_items": "ఈ ఎంపికకు ఏ అంశాలూ కనుగొనబడలేదు.",
    "seas_type_vegetable": "🥦 కూరగాయ",
    "seas_type_fruit": "🍎 పండు",
    "seas_compare_price": "ధర పోల్చండి",
    "seas_cta_title": "సీజన్ కొనండి, ఎక్కువ ఆదా చేయండి 🌾",
    "seas_cta_desc": "సీజన్ ఉత్పత్తులు ఆఫ్-సీజన్ దిగుమతులకంటే 40% వరకు తక్కువగా ఉంటాయి. అన్ని ప్లాట్‌ఫారమ్‌లలో ధరలు పోల్చండి!",
    "seas_cta_btn": "నా సీజన్ బాస్కెట్ నిర్మించండి",
}

SEAS_TA = {
    "seas_badge": "வயலிலிருந்து தட்டு வரை",
    "seas_title": "இப்போது எது பருவகாலத்தில் உள்ளது",
    "seas_title_highlight": "இப்போது?",
    "seas_desc": "பруவகால விளைபொருட்கள் எப்போதும் புதியதாக, சுவையாக மற்றும் கணிசமாக மலிவாக இருக்கும். புத்திசாலித்தனமாக வாங்குங்கள்.",
    "seas_best_to_buy": "வாங்க சிறந்தது",
    "seas_freshest": "பொருட்கள் அவற்றின் மிகவும் புதியதாகவும் மலிவாகவும்!",
    "seas_items": "பொருட்கள்",
    "seas_filter_all": "அனைத்தும்",
    "seas_filter_vegetables": "காய்கறிகள்",
    "seas_filter_fruits": "பழங்கள்",
    "seas_no_items": "இந்த தேர்வுக்கு எந்த பொருட்களும் கிடைக்கவில்லை.",
    "seas_type_vegetable": "🥦 காய்கறி",
    "seas_type_fruit": "🍎 பழம்",
    "seas_compare_price": "விலை ஒப்பிடுக",
    "seas_cta_title": "பруவகாலத்தில் வாங்குங்கள், அதிகமாக சேமிக்கவும் 🌾",
    "seas_cta_desc": "பруவகால விளைபொருட்கள் சீசனுக்கு வெளியே இறக்குமதிகளை விட 40% வரை குறைவாக செலவாகும். அனைத்து தளங்களிலும் விலைகளை ஒப்பிடுக!",
    "seas_cta_btn": "என் பருவகால கூடையை உருவாக்கு",
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

    print("\n[seasonal]  /seasonal  -- seas_* keys")
    content = inject(content, "en",    SEAS_EN)
    content = inject(content, "zh-CN", SEAS_ZH_CN)
    content = inject(content, "ms",    SEAS_MS)
    content = inject(content, "hi",    SEAS_HI)
    content = inject(content, "bn",    SEAS_BN)
    content = inject(content, "mr",    SEAS_MR)
    content = inject(content, "te",    SEAS_TE)
    content = inject(content, "ta",    SEAS_TA)

    with open(CONFIG_PATH, "w", encoding="utf-8") as f:
        f.write(content)

    print("\n[done] config.ts updated successfully with seasonal guide page key sets.")

if __name__ == "__main__":
    main()
