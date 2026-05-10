// Dictionary for mapping English canonical names to native scripts
// Support for Hindi (hi), Bengali (bn), Marathi (mr), Telugu (te), Tamil (ta)

export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' }
] as const;

export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number]['code'];

// Core 39 Items translation dictionary
export const FOOD_DICTIONARY: Record<string, Record<SupportedLanguage, string>> = {
  // Vegetables
  'tomato': { en: 'Tomato', hi: 'टमाटर', bn: 'টমেটো', mr: 'टोमॅटो', te: 'టమాటా', ta: 'தக்காளி' },
  'onion (red)': { en: 'Onion', hi: 'प्याज', bn: 'পেঁয়াজ', mr: 'कांदा', te: 'ఉల్లిపాయ', ta: 'வெங்காயம்' },
  'potato': { en: 'Potato', hi: 'आलू', bn: 'আলু', mr: 'बटाटा', te: 'బంగాళదుంప', ta: 'உருளைக்கிழங்கு' },
  'spinach (palak)': { en: 'Spinach', hi: 'पालक', bn: 'পালং শাক', mr: 'पालक', te: 'పాలకూర', ta: 'பசலைக்கீரை' },
  'carrot (gajar)': { en: 'Carrot', hi: 'गाजर', bn: 'গাজর', mr: 'गाजर', te: 'క్యారెట్', ta: 'கேரட்' },
  'capsicum (bell pepper)': { en: 'Capsicum', hi: 'शिमला मिर्च', bn: 'ক্যাপসিকাম', mr: 'सिमला मिरची', te: 'క్యాప్సికమ్', ta: 'குடைமிளகாய்' },
  'cucumber (kheera)': { en: 'Cucumber', hi: 'खीरा', bn: 'শসা', mr: 'काकडी', te: 'దోసకాయ', ta: 'வெள்ளரிக்காய்' },
  'lady finger (bhindi)': { en: 'Lady Finger', hi: 'भिंडी', bn: 'ঢেঁড়স', mr: 'भेंडी', te: 'బెండకాయ', ta: 'வெண்டைக்காய்' },
  'brinjal (baingan)': { en: 'Brinjal', hi: 'बैंगन', bn: 'বেগুন', mr: 'वांगे', te: 'వంకాయ', ta: 'கத்தரிக்காய்' },
  'button mushroom': { en: 'Mushroom', hi: 'मशरूम', bn: 'মাশরুম', mr: 'मशरूम', te: 'పుట్టగొడుగు', ta: 'காளான்' },
  'cabbage (patta gobhi)': { en: 'Cabbage', hi: 'पत्ता गोभी', bn: 'বাঁধাকপি', mr: 'कोबी', te: 'క్యాబేజీ', ta: 'முட்டைக்கோஸ்' },
  'cauliflower (phool gobhi)': { en: 'Cauliflower', hi: 'फूल गोभी', bn: 'ফুলকপি', mr: 'फ्लॉवर', te: 'కాలీఫ్లవర్', ta: 'காலிஃபிளவர்' },
  'garlic (lahsun)': { en: 'Garlic', hi: 'लहसुन', bn: 'রসুন', mr: 'लसूण', te: 'వెల్లుల్లి', ta: 'பூண்டு' },
  'ginger (adrak)': { en: 'Ginger', hi: 'अदरक', bn: 'আদা', mr: 'आले', te: 'అల్లం', ta: 'இஞ்சி' },
  'green chilli': { en: 'Green Chilli', hi: 'हरी मिर्च', bn: 'কাঁচা লঙ্কা', mr: 'हिरवी मिरची', te: 'పచ్చిమిర్చి', ta: 'பச்சை மிளகாய்' },
  'coriander leaves (dhaniya)': { en: 'Coriander', hi: 'धनिया पत्ता', bn: 'ধনে পাতা', mr: 'कोथिंबीर', te: 'కొత్తిమీర', ta: 'கொத்தமல்லி' },
  'mint leaves (pudina)': { en: 'Mint', hi: 'पुदीना', bn: 'পুদিনা পাতা', mr: 'पुदिना', te: 'పుదీనా', ta: 'புதினா' },
  'lemon (nimbu)': { en: 'Lemon', hi: 'नींबू', bn: 'লেবু', mr: 'लिंबू', te: 'నిమ్మకాయ', ta: 'எலுமிச்சை' },
  'bottle gourd (lauki)': { en: 'Bottle Gourd', hi: 'लौकी', bn: 'লাউ', mr: 'दुधी भोपळा', te: 'సొరకాయ', ta: 'சுரைக்காய்' },
  'bitter gourd (karela)': { en: 'Bitter Gourd', hi: 'करेला', bn: 'করলা', mr: 'कारले', te: 'కాకరకాయ', ta: 'பாகற்காய்' },
  
  // Fruits
  'banana': { en: 'Banana', hi: 'केला', bn: 'কলা', mr: 'केळी', te: 'అరటి పండు', ta: 'வாழைப்பழம்' },
  'apple (fuji)': { en: 'Apple', hi: 'सेब', bn: 'আপেল', mr: 'सफरचंद', te: 'యాపిల్', ta: 'ஆப்பிள்' },
  'mango (alphonso)': { en: 'Mango', hi: 'आम', bn: 'আম', mr: 'आंबा', te: 'మామిడి', ta: 'மாம்பழம்' },
  'orange': { en: 'Orange', hi: 'संतरा', bn: 'কমলালেবু', mr: 'संत्री', te: 'నారింజ', ta: 'ஆரஞ்சு' },
  'papaya': { en: 'Papaya', hi: 'पपीता', bn: 'পেঁপে', mr: 'पपई', te: 'బొప్పాయి', ta: 'பப்பாளி' },
  'watermelon': { en: 'Watermelon', hi: 'तरबूज', bn: 'তরমুজ', mr: 'कलिंगड', te: 'పుచ్చకాయ', ta: 'தர்பூசணி' },
  'pomegranate (anar)': { en: 'Pomegranate', hi: 'अनार', bn: 'বেদানা', mr: 'डाळिंब', te: 'దానిమ్మ', ta: 'மாதுளை' },
  'grapes (green)': { en: 'Grapes', hi: 'अंगूर', bn: 'আঙ্গুর', mr: 'द्राक्षे', te: 'ద్రాక్ష', ta: 'திராட்சை' },
  
  // Dairy & Eggs
  'milk (full cream)': { en: 'Milk', hi: 'दूध', bn: 'দুধ', mr: 'दूध', te: 'పాలు', ta: 'பால்' },
  'curd (dahi)': { en: 'Curd', hi: 'दही', bn: 'দই', mr: 'दही', te: 'పెరుగు', ta: 'தயிர்' },
  'paneer (fresh)': { en: 'Paneer', hi: 'पनीर', bn: 'পনির', mr: 'पनीर', te: 'పనీర్', ta: 'பனீர்' },
  'butter (amul)': { en: 'Butter', hi: 'मक्खन', bn: 'মাখন', mr: 'लोणी', te: 'వెన్న', ta: 'வெண்ணெய்' },
  'cheese slices': { en: 'Cheese', hi: 'पनीर (चीज़)', bn: 'চিজ', mr: 'चीज', te: 'జున్ను', ta: 'பாலாடைக்கட்டி' },
  'eggs (white)': { en: 'Eggs', hi: 'अंडे', bn: 'ডিম', mr: 'अंडी', te: 'గుడ్లు', ta: 'முட்டை' },
  'ghee (cow)': { en: 'Ghee', hi: 'घी', bn: 'ঘি', mr: 'तूप', te: 'నెయ్యి', ta: 'நெய்' },
  
  // Meat & Fish
  'chicken breast (boneless)': { en: 'Chicken', hi: 'चिकन', bn: 'মুরগি', mr: 'चिकन', te: 'చికెన్', ta: 'கோழி' },
  'mutton (curry cut)': { en: 'Mutton', hi: 'मटन', bn: 'খাসির মাংস', mr: 'मटण', te: 'మటన్', ta: 'ஆட்டுக்கறி' },
  'rohu fish': { en: 'Rohu Fish', hi: 'रोहू मछली', bn: 'রুই মাছ', mr: 'रोहू मासा', te: 'రోహు చేప', ta: 'ரோஹு மீன்' },
  'prawns (medium)': { en: 'Prawns', hi: 'झींगा', bn: 'চিংড়ি', mr: 'कोळंबी', te: 'రొయ్యలు', ta: 'இறால்' },

  // Grains & Flours
  'wheat atta (ashirvaad)': { en: 'Atta', hi: 'आटा', bn: 'আটা', mr: 'कणीक', te: 'గోధుమ పిండి', ta: 'கோதுமை மாவு' },
  'basmati rice (daawat)': { en: 'Rice', hi: 'चावल', bn: 'চাল', mr: 'तांदूळ', te: 'బియ్యం', ta: 'அரிசி' },
  'maida (refined flour)': { en: 'Maida', hi: 'मैदा', bn: 'ময়দা', mr: 'मैदा', te: 'మైదా', ta: 'மைதா' },
  'besan (gram flour)': { en: 'Besan', hi: 'बेसन', bn: 'বেসন', mr: 'बेसन', te: 'శనగ పిండి', ta: 'கடலை மாவு' },
  'suji (semolina)': { en: 'Suji', hi: 'सूजी', bn: 'সুজি', mr: 'रवा', te: 'ఉప్మా రవ్వ', ta: 'ரவை' },
  'poha (flattened rice)': { en: 'Poha', hi: 'पोहा', bn: 'চিঁড়ে', mr: 'पोहे', te: 'అటుకులు', ta: 'அவல்' },

  // Pulses & Dals
  'toor dal (arhar)': { en: 'Toor Dal', hi: 'तूर दाल', bn: 'অড়হর ডাল', mr: 'तूर डाळ', te: 'కందిపప్పు', ta: 'துவரம் பருப்பு' },
  'moong dal (yellow)': { en: 'Moong Dal', hi: 'मूंग दाल', bn: 'মুগ ডাল', mr: 'मूग डाळ', te: 'పెసరపప్పు', ta: 'பாசிப்பருப்பு' },
  'chana dal': { en: 'Chana Dal', hi: 'चना दाल', bn: 'ছোলার ডাল', mr: 'हरभरा डाळ', te: 'శనగపప్పు', ta: 'கடலைப் பருப்பு' },
  'masoor dal (red)': { en: 'Masoor Dal', hi: 'मसूर दाल', bn: 'মসুর ডাল', mr: 'मसूर डाळ', te: 'ఎర్ర కందిపప్పు', ta: 'மைசூர் பருப்பு' },
  'urad dal (white)': { en: 'Urad Dal', hi: 'उड़द दाल', bn: 'বিউলির ডাল', mr: 'उडीद डाळ', te: 'మినపప్పు', ta: 'உளுத்தம் பருப்பு' },
  'rajma (kidney beans)': { en: 'Rajma', hi: 'राजमा', bn: 'রাজমা', mr: 'राजमा', te: 'రాజ్మా', ta: 'ராஜ்மா' },
  'kabuli chana (chickpeas)': { en: 'Chickpeas', hi: 'काबुली चना', bn: 'কাবুলি ছোলা', mr: 'काबुली चणा', te: 'కాబూలీ శనగలు', ta: 'கொண்டைக்கடலை' },

  // Spices & Condiments
  'salt (tata)': { en: 'Salt', hi: 'नमक', bn: 'লবণ', mr: 'मीठ', te: 'ఉప్పు', ta: 'உப்பு' },
  'sugar (refined)': { en: 'Sugar', hi: 'चीनी', bn: 'চিনি', mr: 'साखर', te: 'చక్కెర', ta: 'சர்க்கரை' },
  'turmeric powder (haldi)': { en: 'Turmeric', hi: 'हल्दी', bn: 'হলুদ', mr: 'हळद', te: 'పసుపు', ta: 'மஞ்சள் தூள்' },
  'red chilli powder': { en: 'Red Chilli Powder', hi: 'लाल मिर्च पाउडर', bn: 'লঙ্কা গুঁড়ো', mr: 'लाल तिखट', te: 'కారం', ta: 'மிளகாய் தூள்' },
  'coriander powder (dhaniya)': { en: 'Coriander Powder', hi: 'धनिया पाउडर', bn: 'ধনে গুঁড়ো', mr: 'धने पूड', te: 'ధనియాల పొడి', ta: 'மல்லித் தூள்' },
  'cumin seeds (jeera)': { en: 'Cumin', hi: 'जीरा', bn: 'জিরে', mr: 'जिरे', te: 'జీలకర్ระ', ta: 'சீரகம்' },
  'mustard seeds (sarson)': { en: 'Mustard Seeds', hi: 'सरसों', bn: 'সর্ষে', mr: 'मोहरी', te: 'ఆవాలు', ta: 'கடுகு' },
  'garam masala': { en: 'Garam Masala', hi: 'गरम मसाला', bn: 'গরম মশলা', mr: 'गरम मसाला', te: 'గరం మసాలా', ta: 'கரம் மசாலா' },
  
  // Oils & Liquids
  'mustard oil (kacchi ghani)': { en: 'Mustard Oil', hi: 'सरसों का तेल', bn: 'সর্ষের তেল', mr: 'मोहरीचे तेल', te: 'ఆవ నూనె', ta: 'கடுகு எண்ணெய்' },
  'sunflower oil (refined)': { en: 'Sunflower Oil', hi: 'सूरजमुखी का तेल', bn: 'সূর্যমুখী তেল', mr: 'सूर्यफूल तेल', te: 'పొద్దుతిరుగుడు నూనె', ta: 'சூரியகாந்தி எண்ணெய்' },
  'groundnut oil': { en: 'Groundnut Oil', hi: 'मूंगफली का तेल', bn: 'বাদাম তেল', mr: 'शेंगदाणा तेल', te: 'వేరుశనగ నూనె', ta: 'கடலை எண்ணெய்' }
};

// SEO Title Templates provided by user
export const SEO_TEMPLATES = {
  en: "{item} Price — Today Real Price | Compare Blinkit, Zepto, BigBasket & More",
  hi: "आज {item} की कीमत — ब्लिंकइट, ज़ेप्टो और अन्य की तुलना करें",
  bn: "আজকের {item} দাম — ব্লিংকিট, জেপ্টো ও আরও অনেক কিছুর তুলনা করুন",
  mr: "आजचा {item} भाव — ब्लिंकइट, झेप्टो आणि इतरांशी तुलना करा",
  te: "ఈరోజు {item} ధర — బ్లింకిట్, జెప్టో మరియు మరిన్నింటిని పోల్చండి",
  ta: "இன்றைய {item} விலை — பிளிங்கிட், செப்டோ மற்றும் பலவற்றை ஒப்பிடுக"
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
