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
  
  // Fruits
  'banana': { en: 'Banana', hi: 'केला', bn: 'কলা', mr: 'केळी', te: 'అరటి పండు', ta: 'வாழைப்பழம்' },
  'apple (fuji)': { en: 'Apple', hi: 'सेब', bn: 'আপেল', mr: 'सफरचंद', te: 'యాపిల్', ta: 'ஆப்பிள்' },
  'mango (alphonso)': { en: 'Mango', hi: 'आम', bn: 'আম', mr: 'आंबा', te: 'మామిడి', ta: 'மாம்பழம்' },
  'orange': { en: 'Orange', hi: 'संतरा', bn: 'কমলালেবু', mr: 'संत्री', te: 'నారింజ', ta: 'ஆரஞ்சு' },
  'papaya': { en: 'Papaya', hi: 'पपीता', bn: 'পেঁপে', mr: 'पपई', te: 'బొప్పాయి', ta: 'பப்பாளி' },
  'watermelon': { en: 'Watermelon', hi: 'तरबूज', bn: 'তরমুজ', mr: 'कलिंगड', te: 'పుచ్చకాయ', ta: 'தர்பூசணி' },
  
  // Dairy
  'milk (full cream)': { en: 'Milk', hi: 'दूध', bn: 'দুধ', mr: 'दूध', te: 'పాలు', ta: 'பால்' },
  'curd (dahi)': { en: 'Curd', hi: 'दही', bn: 'দই', mr: 'दही', te: 'పెరుగు', ta: 'தயிர்' },
  'paneer (fresh)': { en: 'Paneer', hi: 'पनीर', bn: 'পনির', mr: 'पनीर', te: 'పనీర్', ta: 'பனீர்' },
  'butter (amul)': { en: 'Butter', hi: 'मक्खन', bn: 'মাখন', mr: 'लोणी', te: 'వెన్న', ta: 'வெண்ணெய்' },
  'cheese slices': { en: 'Cheese', hi: 'पनीर (चीज़)', bn: 'চিজ', mr: 'चीज', te: 'జున్ను', ta: 'பாலாடைக்கட்டி' },
  
  // Eggs & Meat
  'eggs (white)': { en: 'Eggs', hi: 'अंडे', bn: 'ডিম', mr: 'अंडी', te: 'గుడ్లు', ta: 'முட்டை' },
  'chicken breast (boneless)': { en: 'Chicken', hi: 'चिकन', bn: 'মুরগি', mr: 'चिकन', te: 'చికెన్', ta: 'கோழி' }
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

// Helper function to generate SEO title
export const getLocalizedSEOTitle = (item: string, lang: SupportedLanguage): string => {
  const template = SEO_TEMPLATES[lang] || SEO_TEMPLATES['en'];
  return template.replace('{item}', item);
};
