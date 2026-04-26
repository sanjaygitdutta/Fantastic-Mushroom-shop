import re

translations = {
    'en': {
        "footer_disclaimer": "Fantastic Food is an independent comparison platform and is not affiliated with Blinkit, Zepto, or any other brand mentioned."
    },
    'hi': {
        "footer_disclaimer": "फैंटास्टिक फूड एक स्वतंत्र तुलना मंच है और ब्लिंकिट, जेप्टो या उल्लिखित किसी अन्य ब्रांड से संबद्ध नहीं है।"
    },
    'bn': {
        "footer_disclaimer": "ফ্যান্টাস্টিক ফুড একটি স্বাধীন তুলনা প্ল্যাটফর্ম এবং ব্লিনকিট, জেপ্টো বা উল্লিখিত অন্য কোনও ব্র্যান্ডের সাথে যুক্ত নয়।"
    },
    'mr': {
        "footer_disclaimer": "फॅन्टास्टिक फूड हे एक स्वतंत्र तुलना मंच आहे आणि ब्लिंकिट, झेप्टो किंवा नमूद केलेल्या इतर कोणत्याही ब्रँडशी संबंधित नाही।"
    },
    'te': {
        "footer_disclaimer": "ఫెంటాస్టిక్ ఫుడ్ ఒక స్వతంత్ర పోలిక వేదిక మరియు బ్లింకిట్, జెప్టో లేదా పేర్కొన్న ఇతర బ్రాండ్‌లతో అనుబంధం లేదు।"
    },
    'ta': {
        "footer_disclaimer": "ஃபெண்டாஸ்டிக் ஃபுட் ஒரு சுதந்திரமான ஒப்பீட்டு தளமாகும், மேலும் இது பிளிங்க்கிட், ஜெப்டோ அல்லது குறிப்பிடப்பட்டுள்ள பிற பிராண்டுகளுடன் இணைக்கப்படவில்லை।"
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

print("Footer disclaimer translations added successfully.")
