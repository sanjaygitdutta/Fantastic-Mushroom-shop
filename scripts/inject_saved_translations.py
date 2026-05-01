import re

translations = {
    'en': {
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
        "saved_remove_title": "Remove from Watchlist",
    },
    'hi': {
        "saved_title": "वॉचलिस्ट",
        "saved_subtitle": "आप जिन वस्तुओं की कीमत में गिरावट ट्रैक कर रहे हैं।",
        "saved_add_items": "आइटम जोड़ें",
        "saved_empty_title": "आपकी वॉचलिस्ट खाली है",
        "saved_empty_desc": "अपनी पसंदीदा किराना वस्तुओं को ट्रैक करें और जब क्विक कॉमर्स प्लेटफार्मों पर कीमतें गिरें तो सूचना पाएं।",
        "saved_start_tracking": "कीमतें ट्रैक करना शुरू करें",
        "saved_tracked_since": "ट्रैकिंग शुरू",
        "saved_last_best_price": "अंतिम सर्वोत्तम मूल्य",
        "saved_on_platform": "पर",
        "saved_check_live": "लाइव कीमत देखें",
        "saved_remove_title": "वॉचलिस्ट से हटाएं",
    },
    'bn': {
        "saved_title": "ওয়াচলিস্ট",
        "saved_subtitle": "আপনি যে পণ্যগুলির দাম কমার জন্য ট্র্যাক করছেন।",
        "saved_add_items": "আইটেম যোগ করুন",
        "saved_empty_title": "আপনার ওয়াচলিস্ট খালি",
        "saved_empty_desc": "আপনার প্রিয় মুদিখানা পণ্যগুলি ট্র্যাক করুন এবং কুইক কমার্স প্ল্যাটফর্মে দাম কমলে বিজ্ঞপ্তি পান।",
        "saved_start_tracking": "দাম ট্র্যাক করা শুরু করুন",
        "saved_tracked_since": "ট্র্যাকিং শুরু",
        "saved_last_best_price": "সর্বশেষ সেরা দাম",
        "saved_on_platform": "এ",
        "saved_check_live": "লাইভ দাম দেখুন",
        "saved_remove_title": "ওয়াচলিস্ট থেকে সরান",
    },
    'mr': {
        "saved_title": "वॉचलिस्ट",
        "saved_subtitle": "तुम्ही किमती घसरण्यासाठी ट्रॅक करत असलेल्या वस्तू.",
        "saved_add_items": "आयटम जोडा",
        "saved_empty_title": "तुमची वॉचलिस्ट रिकामी आहे",
        "saved_empty_desc": "तुमच्या आवडत्या किराणा वस्तू ट्रॅक करा आणि क्विक कॉमर्स प्लॅटफॉर्मवर किमती कमी झाल्यावर सूचना मिळवा।",
        "saved_start_tracking": "किमती ट्रॅक करणे सुरू करा",
        "saved_tracked_since": "ट्रॅकिंग सुरू",
        "saved_last_best_price": "अंतिम सर्वोत्तम किंमत",
        "saved_on_platform": "वर",
        "saved_check_live": "लाइव्ह किंमत तपासा",
        "saved_remove_title": "वॉचलिस्टमधून काढा",
    },
    'te': {
        "saved_title": "వాచ్‌లిస్ట్",
        "saved_subtitle": "మీరు ధర తగ్గుదల కోసం ట్రాక్ చేస్తున్న వస్తువులు.",
        "saved_add_items": "వస్తువులు జోడించండి",
        "saved_empty_title": "మీ వాచ్‌లిస్ట్ ఖాళీగా ఉంది",
        "saved_empty_desc": "మీకు ఇష్టమైన కిరాణా వస్తువులను ట్రాక్ చేయండి మరియు క్విక్ కామర్స్ ప్లాట్‌ఫారమ్‌లలో ధరలు తగ్గినప్పుడు నోటిఫికేషన్ పొందండి.",
        "saved_start_tracking": "ధరలు ట్రాక్ చేయడం ప్రారంభించండి",
        "saved_tracked_since": "ట్రాకింగ్ ప్రారంభం",
        "saved_last_best_price": "చివరి అత్యుత్తమ ధర",
        "saved_on_platform": "లో",
        "saved_check_live": "లైవ్ ధర చూడండి",
        "saved_remove_title": "వాచ్‌లిస్ట్ నుండి తీసివేయండి",
    },
    'ta': {
        "saved_title": "வாட்ச்லிஸ்ட்",
        "saved_subtitle": "விலை குறைவுக்காக நீங்கள் கண்காணிக்கும் பொருட்கள்.",
        "saved_add_items": "பொருட்கள் சேர்க்கவும்",
        "saved_empty_title": "உங்கள் வாட்ச்லிஸ்ட் காலியாக உள்ளது",
        "saved_empty_desc": "உங்கள் விருப்பமான மளிகை பொருட்களை கண்காணித்து, குவிக் கமர்ஸ் தளங்களில் விலைகள் குறையும்போது அறிவிப்பு பெறுங்கள்.",
        "saved_start_tracking": "விலைகளை கண்காணிக்கத் தொடங்குங்கள்",
        "saved_tracked_since": "கண்காணிப்பு தொடங்கியது",
        "saved_last_best_price": "கடைசி சிறந்த விலை",
        "saved_on_platform": "இல்",
        "saved_check_live": "நேரடி விலையைப் பார்க்கவும்",
        "saved_remove_title": "வாட்ச்லிஸ்ட்டிலிருந்து அகற்று",
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

print("SavedLists translations injected successfully.")
