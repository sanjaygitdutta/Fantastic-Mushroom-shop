import re

translations = {
    'en': {
        "seas_badge": "Field to Fork",
        "seas_title": "What's In Season",
        "seas_title_highlight": "Right Now?",
        "seas_desc": "In-season produce is always fresher, tastier, and significantly cheaper. Shop smart by buying what nature intended.",
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
        "seas_cta_btn": "Build My Seasonal Basket",
    },
    'hi': {
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
    },
    'bn': {
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
    },
    'mr': {
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
    },
    'te': {
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
    },
    'ta': {
        "seas_badge": "வயலிலிருந்து தட்டு வரை",
        "seas_title": "இப்போது எது பருவகாலத்தில் உள்ளது",
        "seas_title_highlight": "இப்போது?",
        "seas_desc": "பருவகால விளைபொருட்கள் எப்போதும் புதியதாக, சுவையாக மற்றும் கணிசமாக மலிவாக இருக்கும். புத்திசாலித்தனமாக வாங்குங்கள்.",
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
        "seas_cta_title": "பருவகாலத்தில் வாங்குங்கள், அதிகமாக சேமிக்கவும் 🌾",
        "seas_cta_desc": "பருவகால விளைபொருட்கள் சீசனுக்கு வெளியே இறக்குமதிகளை விட 40% வரை குறைவாக செலவாகும். அனைத்து தளங்களிலும் விலைகளை ஒப்பிடுக!",
        "seas_cta_btn": "என் பருவகால கூடையை உருவாக்கு",
    }
}

with open(r'c:\Users\abcom\Desktop\Fantastic food\src\i18n\config.ts', 'r', encoding='utf-8') as f:
    content = f.read()

for lang, trans in translations.items():
    formatted_trans = ""
    for k, v in trans.items():
        formatted_trans += f'      "{k}": "{v}",\n'

    pattern = r'(' + lang + r':\s*\{\s*translation:\s*\{)'
    def repl(match):
        return match.group(1) + '\n' + formatted_trans

    content = re.sub(pattern, repl, content, count=1)

with open(r'c:\Users\abcom\Desktop\Fantastic food\src\i18n\config.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Seasonal Guide translations injected successfully.")
