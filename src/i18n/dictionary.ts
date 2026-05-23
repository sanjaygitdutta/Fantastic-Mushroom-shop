// Dictionary for mapping English canonical names to native scripts
// Support for Hindi (hi), Bengali (bn), Marathi (mr), Telugu (te), Tamil (ta)

export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'zh-CN', name: 'Chinese', nativeName: '中文' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu' }
] as const;

export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number]['code'];

// Core 39 Items translation dictionary
export const FOOD_DICTIONARY: Record<string, Record<SupportedLanguage, string>> = {
  // Vegetables
  // Vegetables
  'tomato': { en: 'Tomato', hi: 'टमाटर', bn: 'টমেটো', mr: 'टोमॅटो', te: 'టమాటా', ta: 'தக்காளி', 'zh-CN': '西红柿', ms: 'Tomato' },
  'onion (red)': { en: 'Onion', hi: 'प्याज', bn: 'পেঁয়াজ', mr: 'कांदा', te: 'ఉల్లిపాయ', ta: 'வெங்காயம்', 'zh-CN': '洋葱', ms: 'Bawang Merah' },
  'potato': { en: 'Potato', hi: 'आलू', bn: 'আলু', mr: 'बटाटा', te: 'బంగాళదుంప', ta: 'உருளைக்கிழங்கு', 'zh-CN': '土豆', ms: 'Ubi Kentang' },
  'spinach (palak)': { en: 'Spinach', hi: 'पालक', bn: 'পালং শাক', mr: 'पालक', te: 'పాలకూర', ta: 'பசலைக்கீரை', 'zh-CN': '菠菜', ms: 'Bayam' },
  'carrot (gajar)': { en: 'Carrot', hi: 'गाजर', bn: 'গাজর', mr: 'गाजर', te: 'క్యారెట్', ta: 'கேரட்', 'zh-CN': '胡萝卜', ms: 'Lobak Merah' },
  'capsicum (bell pepper)': { en: 'Capsicum', hi: 'शिमला मिर्च', bn: 'ক্যাপসিকাম', mr: 'सिमला मिरची', te: 'క్యాప్సికమ్', ta: 'குடைமிளகாய்', 'zh-CN': '灯笼椒', ms: 'Capsicum' },
  'cucumber (kheera)': { en: 'Cucumber', hi: 'खीरा', bn: 'শসা', mr: 'काकडी', te: 'దోసకాయ', ta: 'வெள்ளரிக்காய்', 'zh-CN': '黄瓜', ms: 'Timun' },
  'lady finger (bhindi)': { en: 'Lady Finger', hi: 'भिंडी', bn: 'ঢেঁড়স', mr: 'भेंडी', te: 'బెండకాయ', ta: 'வெண்டைக்காய்', 'zh-CN': '秋葵', ms: 'Kacang Bendi' },
  'brinjal (baingan)': { en: 'Brinjal', hi: 'बैंगन', bn: 'বেগুন', mr: 'वांगे', te: 'వంకాయ', ta: 'கத்தரிக்காய்', 'zh-CN': '茄子', ms: 'Terung' },
  'button mushroom': { en: 'Mushroom', hi: 'मशरूम', bn: 'মাশরুম', mr: 'मशरूम', te: 'పుట్టగొడుగు', ta: 'காளான்', 'zh-CN': '蘑菇', ms: 'Cendawan' },
  'cabbage (patta gobhi)': { en: 'Cabbage', hi: 'पत्ता गोभी', bn: 'বাঁধাকপি', mr: 'कोबी', te: 'క్యాబేజీ', ta: 'முட்டைக்கோஸ்', 'zh-CN': '卷心菜', ms: 'Kubis' },
  'cauliflower (phool gobhi)': { en: 'Cauliflower', hi: 'फूल गोभी', bn: 'ফুলকপি', mr: 'फ्लॉवर', te: 'కాలీఫ్లవర్', ta: 'காலிஃபிளவர்', 'zh-CN': '花椰菜', ms: 'Bunga Kobis' },
  'garlic (lahsun)': { en: 'Garlic', hi: 'लहसुन', bn: 'রসুন', mr: 'लसूण', te: 'వెల్లుల్లి', ta: 'பூண்டு', 'zh-CN': '大蒜', ms: 'Bawang Putih' },
  'ginger (adrak)': { en: 'Ginger', hi: 'अदरक', bn: 'আদা', mr: 'आले', te: 'అల్లం', ta: 'இஞ்சி', 'zh-CN': '姜', ms: 'Halia' },
  'green chilli': { en: 'Green Chilli', hi: 'हरी मिर्च', bn: 'কাঁচা লঙ্কা', mr: 'हिरवी मिरची', te: 'పచ్చిమిర్చి', ta: 'பச்சை மிளகாய்', 'zh-CN': '青辣椒', ms: 'Cili Hijau' },
  'coriander leaves (dhaniya)': { en: 'Coriander', hi: 'धनिया पत्ता', bn: 'ধনে পাতা', mr: 'कोथिंबीर', te: 'కొత్తిమీర', ta: 'கொத்தமல்லி', 'zh-CN': '香菜', ms: 'Daun Ketumbar' },
  'mint leaves (pudina)': { en: 'Mint', hi: 'पुदीना', bn: 'পুদিনা পাতা', mr: 'पुदिना', te: 'పుదీనా', ta: 'புதினா', 'zh-CN': '薄荷', ms: 'Daun Pudina' },
  'lemon (nimbu)': { en: 'Lemon', hi: 'नींबू', bn: 'লেবু', mr: 'लिंबू', te: 'నిమ్మకాయ', ta: 'எலுமிச்சை', 'zh-CN': '柠檬', ms: 'Limau' },
  'bottle gourd (lauki)': { en: 'Bottle Gourd', hi: 'लौकी', bn: 'লাউ', mr: 'दुधी भोपळा', te: 'సొరకాయ', ta: 'சுரைக்காய்', 'zh-CN': '葫芦', ms: 'Labu Air' },
  'bitter gourd (karela)': { en: 'Bitter Gourd', hi: 'करेला', bn: 'করলা', mr: 'कारले', te: 'కాకరకాయ', ta: 'பாகற்காய்', 'zh-CN': '苦瓜', ms: 'Peria Katak' },

  // Fruits
  'banana': { en: 'Banana', hi: 'केला', bn: 'কলা', mr: 'केळी', te: 'అరటి పండు', ta: 'வாழைப்பழம்', 'zh-CN': '香蕉', ms: 'Pisang' },
  'apple (fuji)': { en: 'Apple', hi: 'सेब', bn: 'আপেল', mr: 'सफरचंद', te: 'యాపిల్', ta: 'ஆப்பிள்', 'zh-CN': '苹果', ms: 'Epal' },
  'mango (alphonso)': { en: 'Mango', hi: 'आम', bn: 'আম', mr: 'आंबा', te: 'మామిడి', ta: 'மாம்பழம்', 'zh-CN': '芒果', ms: 'Mangga' },
  'orange': { en: 'Orange', hi: 'संतरा', bn: 'কমলালেবু', mr: 'संत्री', te: 'నారింజ', ta: 'ஆரஞ்சு', 'zh-CN': '橙子', ms: 'Oren' },
  'papaya': { en: 'Papaya', hi: 'पपीता', bn: 'পেঁপে', mr: 'पपई', te: 'బొప్పాయి', ta: 'பப்பாளி', 'zh-CN': '木瓜', ms: 'Betik' },
  'watermelon': { en: 'Watermelon', hi: 'तरबूज', bn: 'তরমুজ', mr: 'कलिंगड', te: 'పుచ్చకాయ', ta: 'தர்பூசணி', 'zh-CN': '西瓜', ms: 'Tembikai' },
  'pomegranate (anar)': { en: 'Pomegranate', hi: 'अनार', bn: 'বেদানা', mr: 'डाळिंब', te: 'దానిమ్మ', ta: 'மாதுளை', 'zh-CN': '石榴', ms: 'Delima' },
  'grapes (green)': { en: 'Grapes', hi: 'अंगूर', bn: 'আঙ্গুর', mr: 'द्राक्षे', te: 'ద్రాక్ష', ta: 'திராட்சை', 'zh-CN': '葡萄', ms: 'Anggur' },

  // Dairy & Eggs
  'milk (full cream)': { en: 'Milk', hi: 'दूध', bn: 'দুধ', mr: 'दूध', te: 'పాలు', ta: 'பால்', 'zh-CN': '全脂牛奶', ms: 'Susu' },
  'curd (dahi)': { en: 'Curd', hi: 'दही', bn: 'দই', mr: 'दही', te: 'పెరుగు', ta: 'தயிர்', 'zh-CN': '酸奶', ms: 'Dadih' },
  'paneer (fresh)': { en: 'Paneer', hi: 'पनीर', bn: 'পনির', mr: 'पनीर', te: 'పనీర్', ta: 'பனீர்', 'zh-CN': '印度奶酪', ms: 'Paneer' },
  'butter (amul)': { en: 'Butter', hi: 'मक्खन', bn: 'মাখন', mr: 'लोणी', te: 'వెన్న', ta: 'வெண்ணெய்', 'zh-CN': '黄油', ms: 'Mentega' },
  'cheese slices': { en: 'Cheese', hi: 'पनीर (चीज़)', bn: 'চিজ', mr: 'चीज', te: 'జున్ను', ta: 'பாலாடைக்கட்டி', 'zh-CN': '芝士', ms: 'Keju' },
  'eggs (white)': { en: 'Eggs', hi: 'अंडे', bn: 'ডিম', mr: 'अंडी', te: 'గుడ్లు', ta: 'முட்டை', 'zh-CN': '鸡蛋', ms: 'Telur' },
  'ghee (cow)': { en: 'Ghee', hi: 'घी', bn: 'ঘি', mr: 'तूप', te: 'నెయ్యి', ta: 'நெய்', 'zh-CN': '酥油', ms: 'Ghee' },

  // Meat & Fish
  'chicken breast (boneless)': { en: 'Chicken', hi: 'चिकन', bn: 'মুরগি', mr: 'चिकन', te: 'చికెన్', ta: 'கோழி', 'zh-CN': '鸡肉', ms: 'Ayam' },
  'mutton (curry cut)': { en: 'Mutton', hi: 'मटन', bn: 'খাসির মাংস', mr: 'मटण', te: 'మటన్', ta: 'ஆட்டுக்கறி', 'zh-CN': '羊肉', ms: 'Daging Kambing' },
  'rohu fish': { en: 'Rohu Fish', hi: 'रोहू मछली', bn: 'রুই মাছ', mr: 'रोहू मासा', te: 'రోహు చేప', ta: 'ரோஹு மீன்', 'zh-CN': '鱼', ms: 'Ikan' },
  'prawns (medium)': { en: 'Prawns', hi: 'झींगा', bn: 'চিংড়ি', mr: 'कोळंबी', te: 'రొయ్యలు', ta: 'இறால்', 'zh-CN': '虾', ms: 'Udang' },

  // Grains & Flours
  'wheat atta (ashirvaad)': { en: 'Atta', hi: 'आटा', bn: 'আটা', mr: 'कणीक', te: 'గోధుమ పిండి', ta: 'கோதுமை மாவு', 'zh-CN': '全麦面粉', ms: 'Tepung Gandum' },
  'basmati rice (daawat)': { en: 'Rice', hi: 'चावल', bn: 'চাল', mr: 'तांदूळ', te: 'బియ్యం', ta: 'அரிசி', 'zh-CN': '香米', ms: 'Beras Basmati' },
  'maida (refined flour)': { en: 'Maida', hi: 'मैदा', bn: 'ময়দা', mr: 'मैदा', te: 'మైదా', ta: 'மைதா', 'zh-CN': '精面粉', ms: 'Tepung Halus' },
  'besan (gram flour)': { en: 'Besan', hi: 'बेसन', bn: 'বেসন', mr: 'बेसन', te: 'శనగ పిండి', ta: 'கடலை மாவு', 'zh-CN': '鹰嘴豆粉', ms: 'Tepung Kacang Dhal' },
  'suji (semolina)': { en: 'Suji', hi: 'सूजी', bn: 'সুজি', mr: 'रवा', te: 'ఉప్మా రవ్వ', ta: 'ரவை', 'zh-CN': '粗面粉', ms: 'Semolina' },
  'poha (flattened rice)': { en: 'Poha', hi: 'पोहा', bn: 'চিঁড়ে', mr: 'पोहे', te: 'అటుకులు', ta: 'அவல்', 'zh-CN': '压扁米', ms: 'Beras Pipih' },

  // Pulses & Dals
  'toor dal (arhar)': { en: 'Toor Dal', hi: 'तूर दाल', bn: 'অড়হর ডাল', mr: 'तूर डाळ', te: 'కందిపప్పు', ta: 'துவரம் பருப்பு', 'zh-CN': '木豆', ms: 'Dal Toor' },
  'moong dal (yellow)': { en: 'Moong Dal', hi: 'मूंग दाल', bn: 'মুগ ডাল', mr: 'मूग डाळ', te: 'పెసరపప్పు', ta: 'பாசிப்பருப்பு', 'zh-CN': '绿豆', ms: 'Dal Hijau' },
  'chana dal': { en: 'Chana Dal', hi: 'चना दाल', bn: 'ছোলার ডাল', mr: 'हरभरा डाळ', te: 'శనగపప్పు', ta: 'கடலைப் பருப்பு', 'zh-CN': '鹰嘴豆瓣', ms: 'Dal Kacang Dhal' },
  'masoor dal (red)': { en: 'Masoor Dal', hi: 'मसूर दाल', bn: 'মসুর ডাল', mr: 'मसूर डाळ', te: 'ఎర్ర కందిపప్పు', ta: 'மைசூர் பருப்பு', 'zh-CN': '红扁豆', ms: 'Dal Merah' },
  'urad dal (white)': { en: 'Urad Dal', hi: 'उड़द दाल', bn: 'বিউলির ডাল', mr: 'उडीद डाळ', te: 'మినపప్పు', ta: 'உளுத்தம் பருப்பு', 'zh-CN': '黑豆瓣', ms: 'Dal Urad' },
  'rajma (kidney beans)': { en: 'Rajma', hi: 'राजमा', bn: 'রাজমা', mr: 'राजमा', te: 'రాజ్మా', ta: 'ராஜ்மா', 'zh-CN': '腰豆', ms: 'Kacang Merah' },
  'kabuli chana (chickpeas)': { en: 'Chickpeas', hi: 'काबुली चना', bn: 'কাবুলি ছোলা', mr: 'काबुली चणा', te: 'కాబూలీ శనగలు', ta: 'கொண்டைக்கடலை', 'zh-CN': '鹰嘴豆', ms: 'Kacang Chickpea' },

  // Spices & Condiments
  'salt (tata)': { en: 'Salt', hi: 'नमक', bn: 'লবণ', mr: 'मीठ', te: 'ఉప్పు', ta: 'உப்பு', 'zh-CN': '盐', ms: 'Garam' },
  'sugar (refined)': { en: 'Sugar', hi: 'चीनी', bn: 'চিনি', mr: 'साखर', te: 'చక్కెర', ta: 'சர்க்கரை', 'zh-CN': '白糖', ms: 'Gula' },
  'turmeric powder (haldi)': { en: 'Turmeric', hi: 'हल्दी', bn: 'হলুদ', mr: 'हळद', te: 'పసుపు', ta: 'மஞ்சள் தூள்', 'zh-CN': '姜黄粉', ms: 'Serbuk Kunyit' },
  'red chilli powder': { en: 'Red Chilli Powder', hi: 'लाल मिर्च पाउडर', bn: 'লঙ্কা গুঁড়ো', mr: 'लाल तिखट', te: 'కారం', ta: 'மிளகாய் தூள்', 'zh-CN': '辣椒粉', ms: 'Serbuk Cili Merah' },
  'coriander powder (dhaniya)': { en: 'Coriander Powder', hi: 'धनिया पाउडर', bn: 'ধনে গুঁড়ো', mr: 'धने पूड', te: 'ధనియాల పొడి', ta: 'மல்லித் தூள்', 'zh-CN': '香菜粉', ms: 'Serbuk Ketumbar' },
  'cumin seeds (jeera)': { en: 'Cumin', hi: 'जीरा', bn: 'জিরে', mr: 'जिरे', te: 'జీలకర్ระ', ta: 'சீரகம்', 'zh-CN': '孜然', ms: 'Jintan Putih' },
  'mustard seeds (sarson)': { en: 'Mustard Seeds', hi: 'सरसों', bn: 'সর্ষে', mr: 'मोहरी', te: 'ఆవాలు', ta: 'கடுகு', 'zh-CN': '芥菜籽', ms: 'Biji Sawi' },
  'garam masala': { en: 'Garam Masala', hi: 'गरम मसाला', bn: 'গরম মশলা', mr: 'गरम मसाला', te: 'గరం మసాలా', ta: 'கரம் மசாலா', 'zh-CN': '印度综合香料', ms: 'Rempah Garam Masala' },

  // Oils & Liquids
  'mustard oil (kacchi ghani)': { en: 'Mustard Oil', hi: 'सरसों का तेल', bn: 'সর্ষের তেল', mr: 'मोहरीचे तेल', te: 'ఆవ నూనె', ta: 'கடுகு எண்ணெய்', 'zh-CN': '芥末油', ms: 'Minyak Sawi' },
  'sunflower oil (refined)': { en: 'Sunflower Oil', hi: 'सूरजमुखी का तेल', bn: 'সূর্যমুখী তেল', mr: 'सूर्यफूल तेल', te: 'పొద్దుతిరుగుడు నూనె', ta: 'சூரியகாந்தி எண்ணெய்', 'zh-CN': '葵花籽油', ms: 'Minyak Bunga Matahari' },
  'groundnut oil': { en: 'Groundnut Oil', hi: 'मूंगफली का तेल', bn: 'বাদাম তেল', mr: 'शेंगदाणा तेल', te: 'వేరుశనగ నూనె', ta: 'கடலை எண்ணெய்', 'zh-CN': '花生油', ms: 'Minyak Kacang' }
};


// SEO Title Templates provided by user
export const SEO_TEMPLATES: Record<string, string> = {
  en: "{item} Price — Today Real Price | Compare Blinkit, Zepto, BigBasket & More",
  hi: "आज {item} की कीमत — ब्लिंकइट, ज़ेप्टो और अन्य की तुलना करें",
  bn: "আজকের {item} দাম — ব্লিংকিট, জেপ্টো ও আরও অনেক কিছুর তুলনা করুন",
  mr: "आजचा {item} भाव — ब्लिंकइट, झेप्टो आणि इतरांशी तुलना करा",
  te: "ఈరోజు {item} ధర — బ్లింకిట్, జెప్టో మరియు మరిన్నింటిని పోల్చండి",
  ta: "இன்றைய {item} விலை — பிளிங்கிட், செப்டோ மற்றும் பலவற்றை ஒப்பிடுக",
  "zh-CN": "{item} 今日价格 | 比较 FairPrice、RedMart 及更多平台",
  ms: "{item} Harga Hari Ini | Bandingkan FairPrice, RedMart & Lebih"
};

// Helper function to get translated item name (fallback to English if missing)
export const getTranslatedItem = (canonicalName: string, lang: SupportedLanguage): string => {
  const normalized = canonicalName.toLowerCase();
  if (FOOD_DICTIONARY[normalized]) {
    return FOOD_DICTIONARY[normalized][lang] || FOOD_DICTIONARY[normalized]['en'];
  }
  return canonicalName; // fallback to whatever was passed
};

// Reverse lookup: Translate a non-English search query back to its English database key
export const getEnglishQuery = (foreignQuery: string): string => {
  const query = foreignQuery.toLowerCase().trim();
  
  for (const [englishKey, translations] of Object.entries(FOOD_DICTIONARY)) {
    // Check if the query matches any of the translations
    if (Object.values(translations).some(val => val.toLowerCase() === query)) {
      return englishKey; // Return the exact English key used in the database
    }
  }
  
  return foreignQuery; // Fallback to original if no translation found
};

// Helper function to generate SEO title
export const getLocalizedSEOTitle = (item: string, lang: SupportedLanguage): string => {
  const template = SEO_TEMPLATES[lang] || SEO_TEMPLATES['en'];
  return template.replace('{item}', item);
};

// Server-side page translations for metadata
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
}

export const PAGE_SEO_DICTIONARY: Record<string, {
  IN: Record<SupportedLanguage, PageMetadata>;
  SG: Record<SupportedLanguage, PageMetadata>;
}> = {
  home: {
    IN: {
      en: {
        title: "Compare Grocery Prices — Blinkit vs Zepto vs BigBasket vs Swiggy",
        description: "Instantly compare real-time grocery prices across Blinkit, BigBasket, Zepto, Swiggy Instamart, Amazon Fresh & JioMart. Find the cheapest price on any food item and save money every day.",
        keywords: "grocery price comparison India, blinkit vs zepto, blinkit vs swiggy, cheapest grocery app india, food price comparison 2026, bigbasket vs blinkit, amazon fresh prices, jiomart vs blinkit"
      },
      hi: {
        title: "किराने की कीमतों की तुलना करें — Blinkit बनाम Zepto बनाम BigBasket बनाम Swiggy",
        description: "Blinkit, BigBasket, Zepto, Swiggy Instamart, Amazon Fresh और JioMart पर वास्तविक समय की किराने की कीमतों की तुरंत तुलना करें। किसी भी खाद्य पदार्थ पर सबसे सस्ती कीमत खोजें और हर दिन पैसे बचाएं।",
        keywords: "किराना मूल्य तुलना, ब्लिंकिट बनाम ज़ेप्टो, ब्लिंकिट बनाम स्विगी, भारत में सबसे सस्ता किराना ऐप, खाद्य मूल्य तुलना 2026"
      },
      bn: {
        title: "মুদির দাম তুলনা করুন — ব্লিঙ্কিট বনাম জেপ্টো বনাম বিগবাস্কেট বনাম সুইগি",
        description: "ব্লিঙ্কিট, বিগবাস্কেট, জেপ্টো, সুইগি ইনস্টামার্ট, অ্যামাজন ফ্রেশ এবং জিওমার্ট জুড়ে রিয়েল-টাইম মুদির দাম তাৎক্ষণিকভাবে তুলনা করুন। যেকোনো খাদ্য আইটেমে সবচেয়ে সস্তা দাম খুঁজুন এবং প্রতিদিন অর্থ সাশ্রয় করুন।",
        keywords: "মুদির দাম তুলনা, ব্লিঙ্কিট বনাম জেপ্টো, সবচেয়ে সস্তা মুদি অ্যাপ ভারত, বিগবাস্কেট বনাম ব্লিঙ্কিট"
      },
      mr: {
        title: "किराणा मालाच्या किमतीची तुलना करा — ब्लिंकिट विरुद्ध झेप्टो विरुद्ध बिगबास्केट विरुद्ध स्विगी",
        description: "ब्लिंकिट, बिगबास्केट, झेप्टो, स्विगी इन्स्टामार्ट, अॅमेझॉन फ्रेश आणि जिओमार्टवर रिअल-टाइम किराणा किमतींची त्वरित तुलना करा. कोणत्याही खाद्यपदार्थावर सर्वात स्वस्त किंमत शोधा आणि दररोज पैसे वाचवा.",
        keywords: "किराणा मालाच्या किमतीची तुलना, ब्लिंकिट विरुद्ध झेप्टो, सर्वात स्वस्त किराणा ॲप भारत, अन्न किंमत तुलना"
      },
      te: {
        title: "కిరాణా ధరలను సరిపోల్చండి — బ్లింకిట్ vs జెప్టో vs బిగ్‌బాస్కెట్ vs స్విగ్గీ",
        description: "బ్లింకిట్, బిగ్‌బాస్కెట్, జెప్టో, స్విగ్గీ ఇన్‌స్టామార్ట్, అమెజాన్ ఫ్రెష్ & జియోమార్ట్‌లలో రియల్ టైమ్ కిరాణా ధరలను తక్షణమే సరిపోల్చండి. ఏదైనా ఆహార పదార్థంపై అత్యంత చౌకైన ధరను కనుగొనండి మరియు ప్రతిరోజూ డబ్బు ఆదా చేయండి.",
        keywords: "కిరాణా ధరల పోలిక, బ్లింకిట్ వర్సెస్ జెప్టో, భారతదేశంలో చౌకైన కిరాణా యాప్, ఆహార ధరల పోలిక"
      },
      ta: {
        title: "மளிகை விலைகளை ஒப்பிடவும் — Blinkit vs Zepto vs BigBasket vs Swiggy",
        description: "Blinkit, BigBasket, Zepto, Swiggy Instamart, Amazon Fresh & JioMart முழுவதும் நிகழ்நேர மளிகை விலைகளை ஒப்பிட்டுப் பாருங்கள். எந்த உணவுப் பொருளுக்கும் மலிவான விலையைக் கண்டறிந்து ஒவ்வொரு நாளும் பணத்தைச் சேமிக்கவும்.",
        keywords: "மளிகை விலை ஒப்பிடுதல், பிளிங்கிட் வெர்சஸ் செப்டோ, இந்தியாவின் மலிவான மளிகை செயலி, உணவு விலை ஒப்பிடுதல்"
      },
      'zh-CN': {
        title: "比较杂货价格 — FairPrice vs Sheng Siong vs RedMart",
        description: "即时比较实时杂货价格。找到任何食品的最便宜价格，每天省钱。",
        keywords: "杂货价格比较, 新加坡最便宜的在线超市, 食品价格比较"
      },
      ms: {
        title: "Bandingkan Harga Barangan Runcit — FairPrice vs Sheng Siong vs RedMart",
        description: "Bandingkan harga barangan runcit masa nyata. Cari harga termurah untuk sebarang item makanan dan jimat wang setiap hari.",
        keywords: "perbandingan harga barangan runcit, pasar raya dalam talian termurah, perbandingan harga makanan"
      }
    },
    SG: {
      en: {
        title: "Fantastic Food Singapore — Compare FairPrice, RedMart & Cold Storage",
        description: "Compare grocery prices in real time across FairPrice, RedMart, Cold Storage & Giant in Singapore. Save up to 40% on your weekly grocery bill!",
        keywords: "grocery price comparison Singapore, FairPrice vs RedMart, RedMart vs Cold Storage, cheapest online supermarket Singapore, food price comparison SG 2026"
      },
      hi: {
        title: "Fantastic Food सिंगापुर — सुपरमार्केट की कीमतों की तुलना करें",
        description: "सिंगापुर में FairPrice, RedMart, Cold Storage और Giant पर वास्तविक समय में किराने की कीमतों की तुलना करें। अपनी साप्ताहिक किराने की सूची पर बचत करें।"
      },
      bn: {
        title: "Fantastic Food সিঙ্গাপুর — সুপারমার্কেট দাম তুলনা করুন",
        description: "সিঙ্গাপুরে FairPrice, RedMart, Cold Storage এবং Giant জুড়ে রিয়েল-টাইমে মুদির দাম তুলনা করুন।"
      },
      mr: {
        title: "Fantastic Food सिंगापूर — सुपरमार्केट किमतींची तुलना करा",
        description: "सिंगापूरमध्ये FairPrice, RedMart, Cold Storage आणि Giant वर रिअल-टाइम किराणा किमतींची तुलना करा."
      },
      te: {
        title: "Fantastic Food సింగపూర్ — సూపర్ మార్కెట్ ధరలను సరిపోల్చండి",
        description: "సింగపూర్‌లో FairPrice, RedMart, Cold Storage మరియు Giant అంతటా కిరాణా ధరలను నిజ సమయంలో సరిపోల్చండి."
      },
      ta: {
        title: "Fantastic Food சிங்கப்பூர் — சூப்பர் மார்க்கெட் விலைகளை ஒப்பிடுக",
        description: "சிங்கப்பூரில் FairPrice, RedMart, Cold Storage & Giant ஆகியவற்றில் மளிகை விலைகளை நிகழ்நேரத்தில் ஒப்பிட்டுப் பாருங்கள்."
      },
      'zh-CN': {
        title: "Fantastic Food 新加坡 | 比较 FairPrice、RedMart 和 Cold Storage 超市价格",
        description: "实时比较新加坡 FairPrice、RedMart、Cold Storage 和 Giant 线上超市价格。每周买菜省钱高达40%！",
        keywords: "新加坡买菜省钱, 新加坡超市价格对比, 比较 FairPrice 和 RedMart"
      },
      ms: {
        title: "Fantastic Food Singapura — Bandingkan Harga FairPrice, RedMart & Cold Storage",
        description: "Bandingkan harga runcit masa nyata merentasi FairPrice, RedMart, Cold Storage & Giant di Singapura. Jimat sehingga 40% bil barangan runcit anda!",
        keywords: "perbandingan harga runcit Singapura, FairPrice vs RedMart, RedMart vs Cold Storage"
      }
    }
  },
  'mushroom-shop': {
    IN: {
      en: {
        title: "Premium Organic Mushroom Shop — Paddy Straw, Oyster & Spawn | Fantastic Food",
        description: "Shop premium organic Paddy Straw mushrooms and premium spawn, pesticide-free, grown with deep love. Best farm prices guaranteed.",
        keywords: "buy organic mushrooms online, paddy straw mushrooms, oyster mushrooms spawn, buy mushroom spawn online India, farm fresh mushrooms"
      },
      hi: {
        title: "प्रीमियम ऑर्गेनिक मशरूम शॉप — धान पुआल, ऑयस्टर और स्पॉन | Fantastic Food",
        description: "प्रीमियम जैविक धान पुआल मशरूम और स्पॉन खरीदें, कीटनाशक मुक्त, गहरे प्यार से उगाए गए। सर्वोत्तम फार्म दरों की गारंटी।"
      },
      bn: {
        title: "প্রিমিয়াম অর্গানিক মাশরুম শপ — খড় মাশরুম ও স্পন | Fantastic Food",
        description: "প্রিমিয়াম জৈব খড় মাশরুম এবং প্রিমিয়াম স্পন কিনুন, কীটনাশকমুক্ত, যত্ন সহকারে উৎপাদিত। সেরা খামার মূল্যের নিশ্চয়তা।"
      },
      mr: {
        title: "प्रीमियम सेंद्रिय मशरूम शॉप — भाताचा पेंढा, ऑयस्टर आणि स्पॉन",
        description: "प्रीमियम सेंद्रिय भाताचा पेंढा मशरूम आणि स्पॉन खरेदी करा, कीटकनाशकमुक्त, मनापासून पिकवलेले. सर्वोत्तम किमतीची हमी."
      },
      te: {
        title: "ప్రీమియం ఆర్గానిక్ పుట్టగొడుగుల షాప్ — వరి గడ్డి, ఆయిస్టర్ & స్పానీ",
        description: "ప్రీమియం సేంద్రీయ వరి గడ్డి పుట్టగొడుగులు మరియు ప్రీమియం విత్తనాలు కొనండి, రసాయనాలు లేనివి. ఉత్తమ ధర హామీ."
      },
      ta: {
        title: "பிரீமியம் ஆர்கானிக் காளான் கடை — வைக்கோல் காளான் & ஸ்பான்",
        description: "பிரீமியம் ஆர்கானிக் வைக்கோல் காளான்கள் மற்றும் ஸ்பான்களை வாங்குங்கள், பூச்சிக்கொல்லி இல்லாதவை. சிறந்த விலைக்கு உத்தரவாதம்."
      },
      'zh-CN': {
        title: "高端有机草菇与菌种线上商店 | Fantastic Food",
        description: "选购优质有机草菇和高等级菌种，无农药残留，用心培育。源头农场好价保障。"
      },
      ms: {
        title: "Kedai Cendawan Organik Premium — Cendawan Jerami Padi & Benih",
        description: "Beli Cendawan Jerami Padi organik premium dan benih premium, bebas racun perosak, ditanam dengan penuh kasih sayang."
      }
    },
    SG: {
      en: {
        title: "Organic Paddy Straw Mushrooms & Spawn Shop SG | Fantastic Food",
        description: "Shop premium organic Paddy Straw Mushrooms and premium spawn, pesticide-free, grown with deep love. Free delivery on bulk orders in Singapore.",
        keywords: "organic paddy straw mushrooms Singapore, buy mushroom spawn SG, buy fresh mushrooms Singapore, farm fresh mushrooms SG"
      },
      hi: {
        title: "ऑर्गेनिक धान पुआल मशरूम शॉप सिंगापुर | Fantastic Food",
        description: "सिंगापुर में कीटनाशक मुक्त प्रीमियम जैविक धान पुआल मशरूम और स्पॉन खरीदें।"
      },
      bn: {
        title: "অর্গানিক খড় মাশরুম শপ সিঙ্গাপুর | Fantastic Food",
        description: "সিঙ্গাপুরে প্রিমিয়াম জৈব খড় মাশরুম এবং প্রিমিয়াম স্পন কিনুন, কীটনাশকমুক্ত।"
      },
      mr: {
        title: "सेंद्रिय भाताचा पेंढा मशरूम शॉप सिंगापूर | Fantastic Food",
        description: "सिंगापूरमध्ये कीटकनाशकमुक्त प्रीमियम सेंद्रिय भाताचा पेंढा मशरूम आणि स्पॉन खरेदी करा।"
      },
      te: {
        title: "ఆర్గానిక్ వరి గడ్డి పుట్టగొడుగుల షాప్ సింగపూర్",
        description: "సింగపూర్‌లో ప్రీమియం సేంద్రీయ వరి గడ్డి పుట్టగొడుగులు మరియు ప్రీమియం విత్తనాలను కొనుగోలు చేయండి."
      },
      ta: {
        title: "ஆர்கானிக் வைக்கோல் காளான் கடை சிங்கப்பூர்",
        description: "சிங்கப்பூரில் பிரீமியம் ஆர்கானிக் வைக்கோல் காளான்கள் மற்றும் ஸ்பான்களை வாங்குங்கள்."
      },
      'zh-CN': {
        title: "有机草菇与菌种线上商店 新加坡 | Fantastic Food",
        description: "选购优质有机草菇和高等级菌种，无农药残留，用心培育。新加坡全岛送货。"
      },
      ms: {
        title: "Kedai Cendawan Jerami Padi Organik & Benih SG | Fantastic Food",
        description: "Beli Cendawan Jerami Padi organik premium dan benih premium, bebas racun perosak, ditanam dengan penuh kasih sayang."
      }
    }
  },
  basket: {
    IN: {
      en: {
        title: "Smart Basket Calculator — Find Cheapest Platform for Your Grocery List",
        description: "Add multiple grocery items and instantly see which platform gives you the lowest total price for your entire basket. Compare Blinkit, Zepto, BigBasket.",
        keywords: "grocery basket price comparison, compare full grocery list, cheap grocery basket India, blinkit vs zepto basket cost"
      },
      hi: {
        title: "स्मार्ट बास्केट कैलकुलेटर - अपनी किराने की सूची के लिए सबसे सस्ता प्लेटफॉर्म खोजें",
        description: "कई किराने की वस्तुएं जोड़ें और तुरंत देखें कि कौन सा प्लेटफॉर्म आपको अपनी पूरी बास्केट के लिए सबसे कम कुल मूल्य देता है।"
      },
      bn: {
        title: "স্মার্ট বাস্কেট ক্যালকুলেটর - আপনার মুদি তালিকার জন্য সস্তা প্ল্যাটফর্ম খুঁজুন",
        description: "একাধিক মুদি আইটেম যোগ করুন এবং অবিলম্বে দেখুন কোন প্ল্যাটফর্মটি আপনাকে আপনার পুরো ঝুড়ির জন্য সর্বনিম্ন মোট মূল্য দেয়।"
      },
      mr: {
        title: "स्मार्ट बास्केट कॅल्क्युलेटर - तुमच्या किराणा सूचीसाठी सर्वात स्वस्त प्लॅटफॉर्म शोधा",
        description: "अनेक किराणा वस्तू जोडा आणि तुमच्या संपूर्ण बास्केटसाठी कोणता प्लॅटफॉर्म तुम्हाला सर्वात कमी एकूण किंमत देतो ते त्वरित पहा."
      },
      te: {
        title: "స్మార్ట్ బాస్కెట్ క్యాలిక్యులేటర్ - మీ కిరాణా జాబితా కోసం చౌకైన ప్లాట్‌ఫారమ్‌ను కనుగొనండి",
        description: "బహుళ కిరాణా వస్తువులను జోడించండి మరియు మీ మొత్తం బాస్కెట్ కోసం మీకు ఏ ప్లాట్‌ఫారమ్ అత్యల్ప మొత్తం ధరను ఇస్తుందో తక్షణమే చూడండి."
      },
      ta: {
        title: "ஸ்மார்ட் கூடை கால்குலேட்டர் - உங்கள் மளிகை பட்டியலுக்கான மலிவான தளத்தைக் கண்டறியவும்",
        description: "பல மளிகைப் பொருட்களைச் சேர்த்து, உங்கள் முழு கூடைக்கும் எந்த தளம் உங்களுக்குக் குறைந்த மொத்த விலையை அளிக்கிறது என்பதை உடனடியாகப் பாருங்கள்."
      },
      'zh-CN': {
        title: "智能杂货购物篮计算器 — 一键对比整篮最低价",
        description: "添加多件商品，即时对比 Blinkit、Zepto、BigBasket 哪家总价最便宜。明明白白省钱。"
      },
      ms: {
        title: "Kalkulator Bakul Runcit Pintar — Bandingkan Jumlah Harga Runcit",
        description: "Tambah barangan runcit dan lihat platform mana yang paling murah untuk keseluruhan bakul anda."
      }
    },
    SG: {
      en: {
        title: "Smart Basket Calculator Singapore — FairPrice vs RedMart vs Cold Storage | Fantastic Food",
        description: "Add groceries and instantly see which Singapore platform gives you the lowest total price for your entire basket. Real-time cost comparator.",
        keywords: "grocery basket price comparison Singapore, FairPrice vs RedMart basket, RedMart vs Cold Storage total cost"
      },
      hi: {
        title: "स्मार्ट बास्केट कैलकुलेटर सिंगापुर — FairPrice बनाम RedMart",
        description: "किराने का सामान जोड़ें और तुरंत देखें कि कौन सा सिंगापुर प्लेटफॉर्म आपको आपकी पूरी बास्केट के लिए सबसे कम कीमत देता है।"
      },
      bn: {
        title: "স্মার্ট বাস্কেট ক্যালকুলেটর সিঙ্গাপুর — FairPrice বনাম RedMart",
        description: "মুদি আইটেম যোগ করুন এবং সিঙ্গাপুরের কোন প্ল্যাটফর্ম সর্বনিম্ন মোট মূল্য দিচ্ছে তা তাৎক্ষণিকভাবে দেখুন।"
      },
      mr: {
        title: "स्मार्ट बास्केट कॅल्क्युलेटर सिंगापूर — FairPrice विरुद्ध RedMart",
        description: "किराणा सामान जोडा आणि सिंगापूरमधील सर्वात कमी एकूण किमतीची तुलना करा."
      },
      te: {
        title: "స్మార్ట్ బాస్కెట్ క్యాలిక్యులేటర్ సింగపూర్ — సూపర్ మార్కెట్ బాస్కెట్",
        description: "సింగపూర్‌లో మీ మొత్తం బాస్కెట్ కోసం ఏ ప్లాట్‌ఫారమ్ అత్యల్ప ధరను ఇస్తుందో తక్షణమే చూడండి."
      },
      ta: {
        title: "ஸ்மார்ட் கூடை கால்குலேட்டர் சிங்கப்பூர் — மளிகை விலை ஒப்பீடு",
        description: "மளிகைப் பொருட்களைச் சேர்த்து, எந்த சிங்கப்பூர் தளம் உங்களுக்குக் குறைந்த மொத்த விலையை அளிக்கிறது என்பதை உடனடியாகப் பாருங்கள்."
      },
      'zh-CN': {
        title: "智能购物篮计算器 新加坡 — FairPrice vs RedMart vs Cold Storage | Fantastic Food",
        description: "添加杂货并即时查看哪个新加坡平台总价最低。精明买菜必备。"
      },
      ms: {
        title: "Kalkulator Bakul Pintar Singapura — FairPrice vs RedMart vs Cold Storage | Fantastic Food",
        description: "Tambah barangan runcit dan lihat platform Singapura mana yang paling murah untuk keseluruhan bakul anda."
      }
    }
  },
  compare: {
    IN: {
      en: {
        title: "Compare Grocery Prices — Blinkit, Zepto, Swiggy, BigBasket & More",
        description: "Search any grocery or food item to compare real-time prices across 7 major Indian delivery platforms. Save money on every order.",
        keywords: "compare grocery prices, live price checker, blinkit price check, zepto grocery compare, bigbasket prices"
      },
      hi: {
        title: "किराने की कीमतों की तुलना करें — Blinkit, Zepto, Swiggy, BigBasket और अन्य",
        description: "7 प्रमुख भारतीय डिलीवरी प्लेटफॉर्म पर वास्तविक समय की कीमतों की तुलना करने के लिए कोई भी किराना या खाद्य पदार्थ खोजें। हर ऑर्डर पर पैसे बचाएं।"
      },
      bn: {
        title: "মুদির দাম तुलना করুন — ব্লিঙ্কিট, জেপ্টো, সুইগি, বিগবাস্কেট এবং আরও অনেক কিছু",
        description: "৭টি প্রধান ভারতীয় ডেলিভারি প্ল্যাটফর্ম জুড়ে রিয়েল-টাইম দাম তুলনা করতে যেকোনো মুদি বা খাদ্য আইটেম অনুসন্ধান করুন। প্রতিটি অর্डারে অর্থ সাশ্রয় করুন।"
      },
      mr: {
        title: "किराणा किमतींची तुलना करा — ब्लिंकिट, झेप्टो, स्विगी, बिगबास्केट आणि बरेच काही",
        description: "7 प्रमुख भारतीय डिलिव्हरी प्लॅटफॉर्मवर रिअल-टाइम किमतींची तुलना करण्यासाठी कोणतेही किराणा सामान किंवा खाद्यपदार्थ शोधा. प्रत्येक ऑर्डरवर पैसे वाचवा।"
      },
      te: {
        title: "కిరాణా ధరలను సరిపోల్చండి — బ్లింకిట్, జెప్టో, స్విగ్గీ, బిగ్‌బాస్కెట్ & మరిన్ని",
        description: "7 ప్రధాన భారతీయ డెలివరీ ప్లాట్‌ఫారమ్‌లలో రియల్ టైమ్ ధరలను సరిపోल्చడానికి ఏదైనా కిరాణా లేదా ఆహార పదార్థాన్ని శోధించండి. ప్రతి ఆర్డర్‌లో డబ్బు ఆదా చేయండి।"
      },
      ta: {
        title: "மளிகை விலைகளை ஒப்பிடுக — Blinkit, Zepto, Swiggy, BigBasket மற்றும் பல",
        description: "7 முக்கிய இந்திய டெலிவரி தளங்களில் நிகழ்நேர விலைகளை ஒப்பிட்டுப் பார்க்க எந்த மளிகை அல்லது உணவுப் பொருளையும் தேடவும். ஒவ்வொரு ஆர்டரிலும் பணத்தை சேமிக்கவும்।"
      },
      'zh-CN': {
        title: "实时比价系统 — 比较 7 大中国/印度外卖超市价格",
        description: "输入任何食品名称，即可比对各大即时配送平台的实时价格，用最低价格下单购买。"
      },
      ms: {
        title: "Bandingkan Harga Runcit — Cari Tawaran Paling Murah Serta-merta",
        description: "Cari sebarang item makanan untuk membandingkan harga langsung merentasi platform penghantaran utama dan jimat wang."
      }
    },
    SG: {
      en: {
        title: "Live Grocery Price Comparison Singapore | Fantastic Food",
        description: "Compare live prices of 7,000+ grocery items across FairPrice, RedMart, Cold Storage and Giant. Lock in the absolute lowest price instantly.",
        keywords: "live grocery price comparison Singapore, FairPrice price check, RedMart vs Sheng Siong, Cold Storage grocery prices"
      },
      hi: {
        title: "सिंगापुर लाइव किराने की कीमत तुलना | Fantastic Food",
        description: "सिंगापुर में 7,000+ वस्तुओं की लाइव कीमतों की तुलना करें।"
      },
      bn: {
        title: "সিঙ্গাপুর লাইভ মুদির দাম তুলনা | Fantastic Food",
        description: "সিঙ্গাপুরে ৭,০০০+ মুদি আইটেমের লাইভ দামের তুলনা করুন।"
      },
      mr: {
        title: "सिंगापूर थेट किराणा किंमत तुलना | Fantastic Food",
        description: "सिंगापूरमध्ये ७,०००+ किराणा वस्तूंच्या थेट किमतींची तुलना करा."
      },
      te: {
        title: "సింగపూర్ లైవ్ కిరాణా ధరల పోలిక",
        description: "సింగపూర్‌లో 7,000+ కిరాణా వస్తువుల ధరలను తక్షణమే పోల్చండి."
      },
      ta: {
        title: "சிங்கப்பூர் நேரடி மளிகை விலை ஒப்பீடு",
        description: "சிங்கப்பூரில் 7,000+ மளிகைப் பொருட்களின் நேரடி விலைகளை உடனடியாக ஒப்பிடுங்கள்."
      },
      'zh-CN': {
        title: "新加坡实时杂货价格比较 | Fantastic Food",
        description: "比较新加坡 FairPrice、RedMart、Cold Storage 和 虾皮超市 7,000 多种商品的实时价格。锁定最低价。"
      },
      ms: {
        title: "Perbandingan Harga Runcit Langsung Singapura | Fantastic Food",
        description: "Bandingkan harga langsung 7,000+ barangan runcit merentasi FairPrice, RedMart, Cold Storage dan Shopee Supermarket."
      }
    }
  },
  recipes: {
    IN: {
      en: {
        title: "World Recipes Catalog — 100+ Authentic Recipes & Price Comparison | Fantastic Food",
        description: "Discover 100+ authentic recipes from 8 countries. Compare the exact cost of ingredients in real-time across Blinkit, Zepto, BigBasket & save money.",
        keywords: "authentic world recipes, cheap cooking recipes, compare recipe ingredient prices, easy dinner recipes India"
      },
      hi: {
        title: "विश्व रेसिपी कैटलॉग — 100+ प्रामाणिक रेसिपी और मूल्य तुलना | Fantastic Food",
        description: "8 देशों की 100+ प्रामाणिक रेसिपी खोजें। Blinkit, Zepto, BigBasket पर वास्तविक समय में सामग्री की सही लागत की तुलना करें और पैसे बचाएं।"
      },
      bn: {
        title: "বিশ্ব রেসিপি ক্যাটালগ — ১০০+ খাঁটি রেসিপি ও দাম তুলনা | Fantastic Food",
        description: "৮টি দেশের ১০০+ খাঁটি রেসিপি আবিষ্কার করুন। ব্লিঙ্কিট, জেপ্টো, বিগবাস্কেট জুড়ে রিয়েল-টাইমে উপাদানের সঠিক দাম তুলনা করুন এবং অর্থ সাশ্রয় করুন।"
      },
      mr: {
        title: "वर्ल्ड रेसिपी कॅटलॉग — १००+ अस्सल रेसिपी आणि किमतींची तुलना",
        description: "८ देशांमधील १००+ अस्सल रेसिपी शोधा. ब्लिंकिट, झेप्टो, बिगबास्केटवर रिअल-टाइममध्ये किराणा साहित्याच्या अचूक खर्चाची तुलना करा आणि पैसे वाचवा."
      },
      te: {
        title: "ప్రపంచ వంటకాల కేటలాగ్ — 100+ ప్రామాణిక వంటకాలు & ధరల పోలిక",
        description: "8 దేశాల నుండి 100+ ప్రామాణిక వంటకాలను కనుగొనండి. బ్లింకిట్, జెప్టో, బిగ్‌బాస్కెట్‌లో పదార్థాల ధరలను సరిపోల్చండి."
      },
      ta: {
        title: "உலக சமையல் குறிப்புகள் — 100+ உண்மையான சமையல் குறிப்புகள் & விலை ஒப்பீடு",
        description: "8 நாடுகளின் 100+ உண்மையான சமையல் குறிப்புகளைக் கண்டறியவும். பிளிங்கிட், செப்டோ, பிக் பாஸ்கெட்டில் மளிகை விலைகளை ஒப்பிட்டுப் பாருங்கள்."
      },
      'zh-CN': {
        title: "世界美食食谱大全 — 100+ 正宗地道食谱与食材比价 | Fantastic Food",
        description: "发现来自 8 个国家的 100 多种正宗食谱。在 Blinkit、Zepto、BigBasket 实时比较食材成本，精明下厨。"
      },
      ms: {
        title: "Katalog Resepi Dunia — 100+ Resepi Tulen & Perbandingan Harga",
        description: "Temui 100+ resepi tulen dari 8 buah negara. Bandingkan kos sebenar bahan runcit masa nyata dan jimat wang sebelum anda memasak."
      }
    },
    SG: {
      en: {
        title: "World Recipes Singapore — 100+ Recipes & Ingredient Price Comparison SG",
        description: "Discover 100+ authentic global recipes. Automatically compare ingredient prices in Singapore across FairPrice, RedMart, Cold Storage & save up to 45%.",
        keywords: "world recipes Singapore, compare recipe prices SG, FairPrice RedMart recipe cost, home cooking Singapore"
      },
      hi: {
        title: "विश्व रेसिपी सिंगापुर — सामग्री मूल्य तुलना",
        description: "सिंगापुर में 100+ वैश्विक व्यंजनों की खोज करें और सामग्री की कीमतों की तुलना करें।"
      },
      bn: {
        title: "বিশ্ব রেসিপি সিঙ্গাপুর — উপাদান দাম তুলনা",
        description: "সিঙ্গাপুরে ১০০+ বৈশ্বিক রেসিপি আবিষ্কার করুন এবং উপাদানের দাম তুলনা করুন।"
      },
      mr: {
        title: "वर्ल्ड रेसिपी सिंगापूर — साहित्य किमतींची तुलना",
        description: "सिंगापूरमध्ये १००+ जागतिक रेसिपी शोधा आणि साहित्याच्या किमतींची तुलना करा."
      },
      te: {
        title: "ప్రపంచ వంటకాలు సింగపూర్ — పదార్థాల ధరల పోలిక",
        description: "సింగపూర్‌లో 100+ ప్రపంచ వంటకాలను కనుగొనండి మరియు పదార్థాల ధరలను పోల్చండి."
      },
      ta: {
        title: "உலக சமையல் குறிப்புகள் சிங்கப்பூர் — மளிகை விலை ஒப்பீடு",
        description: "சிங்கப்பூரில் 100+ உலகளாவிய சமையல் குறிப்புகளைக் கண்டறிந்து விலைகளை ஒப்பிடுங்கள்."
      },
      'zh-CN': {
        title: "世界美食食谱 新加坡 — 100+ 正宗食谱与新加坡超市食材比价",
        description: "发现来自 8 个国家的 100 多种正宗食谱。在 FairPrice、RedMart、Cold Storage 实时比较食材总成本。"
      },
      ms: {
        title: "Resepi Dunia Singapura — 100+ Resepi & Perbandingan Harga Bahan Runcit SG",
        description: "Temui 100+ resepi global tulen. Bandingkan kos bahan runcit di Singapura merentasi FairPrice, RedMart, Cold Storage & jimat sehingga 45%."
      }
    }
  }
};

export const getLocalizedPageSEO = (
  page: string,
  lang: string,
  region: string = 'IN'
): PageMetadata => {
  const currentLang = (lang || 'en') as SupportedLanguage;
  const currentRegion = (region?.toUpperCase() === 'SG') ? 'SG' : 'IN';
  
  const pageEntry = PAGE_SEO_DICTIONARY[page];
  if (!pageEntry) {
    return {
      title: "Fantastic Food — Compare Grocery Prices & Buy Smart",
      description: "Compare online grocery prices in real time and save money every day."
    };
  }

  const regionEntry = pageEntry[currentRegion] || pageEntry['IN'];
  const localized = regionEntry[currentLang] || regionEntry['en'];
  return localized;
};

