import re

translations = {
    'en': {
        "foodscore_badge":             "FoodScore Dashboard",
        "foodscore_title":             "Your Savings Intelligence",
        "foodscore_subtitle":          "Track how smart you shop. Every price comparison builds your score.",
        "foodscore_share":             "Share Score",
        "foodscore_grade_s":           "Legendary Saver",
        "foodscore_grade_a":           "Smart Shopper",
        "foodscore_grade_b":           "Bargain Hunter",
        "foodscore_grade_c":           "Casual Buyer",
        "foodscore_grade_d":           "Getting Started",
        "foodscore_grade_label":       "Grade",
        "foodscore_total_saved":       "Total Saved",
        "foodscore_total_saved_sub":   "vs highest platform price",
        "foodscore_comparisons":       "Comparisons Made",
        "foodscore_comparisons_sub":   "total price checks done",
        "foodscore_streak":            "Day Streak",
        "foodscore_streak_sub":        "consecutive days active",
        "foodscore_best_category":     "Best Category",
        "foodscore_best_category_sub": "most savings found here",
        "foodscore_empty_title":       "Start Comparing to Build Your Score!",
        "foodscore_empty_desc":        "Every time you compare prices on this platform, your FoodScore grows. Start now!",
        "foodscore_compare_btn":       "Compare Prices Now",
        "foodscore_recent":            "Recent Comparisons",
        "foodscore_best_on":           "Best on",
    },
    'hi': {
        "foodscore_badge":             "फूडस्कोर डैशबोर्ड",
        "foodscore_title":             "आपकी बचत बुद्धिमत्ता",
        "foodscore_subtitle":          "देखें कि आप कितनी स्मार्ट खरीदारी करते हैं। हर कीमत तुलना आपका स्कोर बढ़ाती है।",
        "foodscore_share":             "स्कोर शेयर करें",
        "foodscore_grade_s":           "किंवदंती बचतकर्ता",
        "foodscore_grade_a":           "स्मार्ट खरीदार",
        "foodscore_grade_b":           "सौदेबाज",
        "foodscore_grade_c":           "सामान्य खरीदार",
        "foodscore_grade_d":           "शुरुआत हो रही है",
        "foodscore_grade_label":       "ग्रेड",
        "foodscore_total_saved":       "कुल बचत",
        "foodscore_total_saved_sub":   "सबसे ऊंची कीमत के मुकाबले",
        "foodscore_comparisons":       "तुलनाएं की गईं",
        "foodscore_comparisons_sub":   "कुल कीमत जांच",
        "foodscore_streak":            "दिन की स्ट्रीक",
        "foodscore_streak_sub":        "लगातार सक्रिय दिन",
        "foodscore_best_category":     "सर्वश्रेष्ठ श्रेणी",
        "foodscore_best_category_sub": "यहाँ सबसे ज्यादा बचत मिली",
        "foodscore_empty_title":       "स्कोर बनाने के लिए तुलना शुरू करें!",
        "foodscore_empty_desc":        "हर बार जब आप कीमतों की तुलना करते हैं, तो आपका फूडस्कोर बढ़ता है।",
        "foodscore_compare_btn":       "अभी कीमतें तुलना करें",
        "foodscore_recent":            "हाल की तुलनाएं",
        "foodscore_best_on":           "सबसे सस्ता",
    },
    'bn': {
        "foodscore_badge":             "ফুডস্কোর ড্যাশবোর্ড",
        "foodscore_title":             "আপনার সঞ্চয় বুদ্ধিমত্তা",
        "foodscore_subtitle":          "আপনি কতটা স্মার্টভাবে কেনাকাটা করেন তা দেখুন। প্রতিটি মূল্য তুলনা আপনার স্কোর বাড়ায়।",
        "foodscore_share":             "স্কোর শেয়ার করুন",
        "foodscore_grade_s":           "কিংবদন্তি সঞ্চয়কারী",
        "foodscore_grade_a":           "স্মার্ট ক্রেতা",
        "foodscore_grade_b":           "দর কষাকষিকারী",
        "foodscore_grade_c":           "সাধারণ ক্রেতা",
        "foodscore_grade_d":           "শুরু হচ্ছে",
        "foodscore_grade_label":       "গ্রেড",
        "foodscore_total_saved":       "মোট সঞ্চয়",
        "foodscore_total_saved_sub":   "সর্বোচ্চ প্ল্যাটফর্ম মূল্যের তুলনায়",
        "foodscore_comparisons":       "তুলনা করা হয়েছে",
        "foodscore_comparisons_sub":   "মোট মূল্য পরীক্ষা",
        "foodscore_streak":            "দিনের ধারা",
        "foodscore_streak_sub":        "ধারাবাহিকভাবে সক্রিয় দিন",
        "foodscore_best_category":     "সেরা বিভাগ",
        "foodscore_best_category_sub": "এখানে সবচেয়ে বেশি সঞ্চয় পাওয়া গেছে",
        "foodscore_empty_title":       "স্কোর তৈরি করতে তুলনা শুরু করুন!",
        "foodscore_empty_desc":        "যতবার আপনি মূল্য তুলনা করবেন, আপনার ফুডস্কোর বাড়বে।",
        "foodscore_compare_btn":       "এখনই মূল্য তুলনা করুন",
        "foodscore_recent":            "সাম্প্রতিক তুলনা",
        "foodscore_best_on":           "সবচেয়ে সস্তা",
    },
    'mr': {
        "foodscore_badge":             "फूडस्कोर डॅशबोर्ड",
        "foodscore_title":             "तुमची बचत बुद्धिमत्ता",
        "foodscore_subtitle":          "तुम्ही किती हुशारीने खरेदी करता ते पाहा. प्रत्येक किंमत तुलना तुमचा स्कोर वाढवते.",
        "foodscore_share":             "स्कोर शेअर करा",
        "foodscore_grade_s":           "दंतकथा बचतकर्ता",
        "foodscore_grade_a":           "हुशार खरेदीदार",
        "foodscore_grade_b":           "सौदेबाज",
        "foodscore_grade_c":           "सामान्य खरेदीदार",
        "foodscore_grade_d":           "सुरुवात होत आहे",
        "foodscore_grade_label":       "ग्रेड",
        "foodscore_total_saved":       "एकूण बचत",
        "foodscore_total_saved_sub":   "सर्वोच्च प्लॅटफॉर्म किंमतीच्या तुलनेत",
        "foodscore_comparisons":       "तुलना केल्या",
        "foodscore_comparisons_sub":   "एकूण किंमत तपासण्या",
        "foodscore_streak":            "दिवसाची मालिका",
        "foodscore_streak_sub":        "सलग सक्रिय दिवस",
        "foodscore_best_category":     "सर्वोत्तम श्रेणी",
        "foodscore_best_category_sub": "येथे सर्वाधिक बचत आढळली",
        "foodscore_empty_title":       "स्कोर तयार करण्यासाठी तुलना सुरू करा!",
        "foodscore_empty_desc":        "तुम्ही जेव्हाही किंमतींची तुलना करता, तेव्हा तुमचा फूडस्कोर वाढतो.",
        "foodscore_compare_btn":       "आत्ता किंमती तुलना करा",
        "foodscore_recent":            "अलीकडील तुलना",
        "foodscore_best_on":           "सर्वात स्वस्त",
    },
    'te': {
        "foodscore_badge":             "ఫుడ్‌స్కోర్ డాష్‌బోర్డ్",
        "foodscore_title":             "మీ పొదుపు తెలివితేటలు",
        "foodscore_subtitle":          "మీరు ఎంత తెలివిగా షాపింగ్ చేస్తారో చూడండి. ప్రతి ధర పోలిక మీ స్కోర్‌ను పెంచుతుంది.",
        "foodscore_share":             "స్కోర్ షేర్ చేయండి",
        "foodscore_grade_s":           "పురాణ పొదుపుదారు",
        "foodscore_grade_a":           "స్మార్ట్ షాపర్",
        "foodscore_grade_b":           "బేరగాడు",
        "foodscore_grade_c":           "సాధారణ కొనుగోలుదారు",
        "foodscore_grade_d":           "ప్రారంభమవుతోంది",
        "foodscore_grade_label":       "గ్రేడ్",
        "foodscore_total_saved":       "మొత్తం పొదుపు",
        "foodscore_total_saved_sub":   "అత్యధిక ప్లాట్‌ఫారమ్ ధరతో పోలిస్తే",
        "foodscore_comparisons":       "పోలికలు చేయబడ్డాయి",
        "foodscore_comparisons_sub":   "మొత్తం ధర తనిఖీలు",
        "foodscore_streak":            "రోజు స్ట్రీక్",
        "foodscore_streak_sub":        "వరుసగా చురుకైన రోజులు",
        "foodscore_best_category":     "అత్యుత్తమ వర్గం",
        "foodscore_best_category_sub": "ఇక్కడ అత్యధిక పొదుపు కనుగొనబడింది",
        "foodscore_empty_title":       "స్కోర్ నిర్మించడానికి పోల్చడం ప్రారంభించండి!",
        "foodscore_empty_desc":        "మీరు ధరలను పోల్చినప్పుడల్లా, మీ ఫుడ్‌స్కోర్ పెరుగుతుంది.",
        "foodscore_compare_btn":       "ఇప్పుడే ధరలు పోల్చండి",
        "foodscore_recent":            "ఇటీవలి పోలికలు",
        "foodscore_best_on":           "అత్యంత చౌకగా",
    },
    'ta': {
        "foodscore_badge":             "ஃபுட்ஸ்கோர் டாஷ்போர்டு",
        "foodscore_title":             "உங்கள் சேமிப்பு நுண்ணறிவு",
        "foodscore_subtitle":          "நீங்கள் எவ்வளவு புத்திசாலித்தனமாக கடை பார்க்கிறீர்கள் என்பதை கண்காணிக்கவும். ஒவ்வொரு விலை ஒப்பீடும் உங்கள் மதிப்பெண்ணை அதிகரிக்கும்.",
        "foodscore_share":             "மதிப்பெண்ணை பகிரவும்",
        "foodscore_grade_s":           "புராண சேமிப்பாளர்",
        "foodscore_grade_a":           "புத்திசாலி வாங்குபவர்",
        "foodscore_grade_b":           "பேரம் பேசுபவர்",
        "foodscore_grade_c":           "சாதாரண வாங்குபவர்",
        "foodscore_grade_d":           "தொடங்குகிறது",
        "foodscore_grade_label":       "தரம்",
        "foodscore_total_saved":       "மொத்த சேமிப்பு",
        "foodscore_total_saved_sub":   "அதிகபட்ச தள விலையுடன் ஒப்பிடுகையில்",
        "foodscore_comparisons":       "ஒப்பீடுகள் செய்யப்பட்டன",
        "foodscore_comparisons_sub":   "மொத்த விலை சரிபார்ப்புகள்",
        "foodscore_streak":            "நாள் தொடர்",
        "foodscore_streak_sub":        "தொடர்ச்சியாக செயலில் உள்ள நாட்கள்",
        "foodscore_best_category":     "சிறந்த வகை",
        "foodscore_best_category_sub": "இங்கே அதிகபட்ச சேமிப்பு கண்டறியப்பட்டது",
        "foodscore_empty_title":       "மதிப்பெண்ணை உருவாக்க ஒப்பிடத் தொடங்குங்கள்!",
        "foodscore_empty_desc":        "நீங்கள் விலைகளை ஒப்பிடும் ஒவ்வொரு முறையும் உங்கள் ஃபுட்ஸ்கோர் வளரும்.",
        "foodscore_compare_btn":       "இப்போதே விலைகளை ஒப்பிடுங்கள்",
        "foodscore_recent":            "சமீபத்திய ஒப்பீடுகள்",
        "foodscore_best_on":           "மிகவும் மலிவான",
    },
}

config_path = r'c:\Users\abcom\Desktop\Fantastic food\src\i18n\config.ts'

with open(config_path, 'r', encoding='utf-8') as f:
    content = f.read()

for lang, trans in translations.items():
    formatted_trans = ""
    for k, v in trans.items():
        # Escape any single quotes in the value
        v_escaped = v.replace("'", "\\'")
        formatted_trans += f'      "{k}": "{v_escaped}",\n'

    pattern = r'(' + lang + r':\s*\{\s*translation:\s*\{)'
    def make_repl(ft):
        def repl(match):
            return match.group(1) + '\n' + ft
        return repl

    content = re.sub(pattern, make_repl(formatted_trans), content, count=1)

with open(config_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("FoodScore translations injected successfully for all 6 languages.")
