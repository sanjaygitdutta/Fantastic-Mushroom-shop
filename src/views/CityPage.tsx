'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

import { motion } from 'framer-motion';
import { MapPin, Search, TrendingUp, Zap, ArrowRight, Star } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

interface CityData {
  name: string;
  slug: string;
  state: string;
  emoji: string;
  platforms: string[];
  trending: string[];
  description: string;
  pincode: string;
}

const CITIES: Record<string, CityData> = {
  mumbai: { name: 'Mumbai', slug: 'mumbai', state: 'Maharashtra', emoji: '🌆', pincode: '400001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart', 'Flipkart Minutes'], trending: ['Onion', 'Potato', 'Tomato', 'Milk', 'Eggs', 'Paneer', 'Rice', 'Atta'], description: 'Compare grocery prices across all major quick-commerce apps in Mumbai. Find the cheapest delivery for your daily essentials.' },
  delhi: { name: 'Delhi', slug: 'delhi', state: 'Delhi NCR', emoji: '🏛️', pincode: '110001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart', 'Flipkart Minutes'], trending: ['Atta', 'Dahi', 'Tomato', 'Onion', 'Dal', 'Ghee', 'Bread', 'Butter'], description: 'Find the best grocery prices in Delhi NCR. Compare Blinkit, Zepto, Swiggy Instamart and more — all in one click.' },
  bangalore: { name: 'Bangalore', slug: 'bangalore', state: 'Karnataka', emoji: '🌿', pincode: '560001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Ragi', 'Coconut', 'Tomato', 'Milk', 'Coffee', 'Avocado', 'Broccoli', 'Paneer'], description: 'Bangalore grocery price comparison — Blinkit, Zepto, BigBasket, Swiggy Instamart. Find the best deal near you.' },
  hyderabad: { name: 'Hyderabad', slug: 'hyderabad', state: 'Telangana', emoji: '🕌', pincode: '500001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Biryani Rice', 'Chilli', 'Tomato', 'Curd', 'Mutton', 'Chicken', 'Oil', 'Onion'], description: 'Compare grocery and daily essential prices across all delivery apps in Hyderabad. Save money every day.' },
  chennai: { name: 'Chennai', slug: 'chennai', state: 'Tamil Nadu', emoji: '🌊', pincode: '600001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Rice', 'Coconut Oil', 'Idli Batter', 'Tomato', 'Drumstick', 'Curry Leaves', 'Oil', 'Dal'], description: 'Chennai grocery price tracker — compare all delivery platforms for rice, vegetables, and daily essentials.' },
  pune: { name: 'Pune', slug: 'pune', state: 'Maharashtra', emoji: '🎓', pincode: '411001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Milk', 'Eggs', 'Tomato', 'Onion', 'Bread', 'Paneer', 'Potato', 'Curd'], description: 'Pune grocery price comparison — find the cheapest app for delivery of vegetables, dairy, and groceries.' },
  kolkata: { name: 'Kolkata', slug: 'kolkata', state: 'West Bengal', emoji: '🌉', pincode: '700001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Mustard Oil', 'Rice', 'Fish', 'Potato', 'Onion', 'Tomato', 'Dal', 'Sugar'], description: 'Compare grocery delivery prices in Kolkata. Best deals on fish, mustard oil, rice and Bengali essentials.' },
  ahmedabad: { name: 'Ahmedabad', slug: 'ahmedabad', state: 'Gujarat', emoji: '🏙️', pincode: '380001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Groundnut Oil', 'Bajra', 'Milk', 'Curd', 'Tomato', 'Onion', 'Turmeric', 'Atta'], description: 'Gujarat grocery price comparison in Ahmedabad. Compare all apps for best prices on daily essentials.' },
  jaipur: { name: 'Jaipur', slug: 'jaipur', state: 'Rajasthan', emoji: '🌸', pincode: '302001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Dal Baati', 'Ghee', 'Milk', 'Besan', 'Tomato', 'Onion', 'Atta', 'Bajra'], description: 'Jaipur grocery prices — compare Blinkit, Zepto, Swiggy and more for the best deals in the Pink City.' },
  lucknow: { name: 'Lucknow', slug: 'lucknow', state: 'Uttar Pradesh', emoji: '🕌', pincode: '226001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Awadhi Rice', 'Mutton', 'Milk', 'Tomato', 'Onion', 'Paneer', 'Dahi', 'Ghee'], description: 'Compare grocery delivery prices in Lucknow. Find the cheapest platform for your weekly shopping.' },
  noida: { name: 'Noida', slug: 'noida', state: 'Uttar Pradesh', emoji: '🏗️', pincode: '201301', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart', 'Flipkart Minutes'], trending: ['Milk', 'Eggs', 'Bread', 'Tomato', 'Onion', 'Paneer', 'Curd', 'Oil'], description: 'Noida grocery price comparison — compare all 7 platforms for the best daily grocery deals.' },
  gurgaon: { name: 'Gurgaon', slug: 'gurgaon', state: 'Haryana', emoji: '🌃', pincode: '122001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart', 'Flipkart Minutes'], trending: ['Avocado', 'Quinoa', 'Milk', 'Eggs', 'Tomato', 'Paneer', 'Butter', 'Bread'], description: 'Gurgaon grocery prices — compare Blinkit, Zepto & more for premium and everyday grocery savings.' },
  surat: { name: 'Surat', slug: 'surat', state: 'Gujarat', emoji: '💎', pincode: '395001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Ponk', 'Sugarcane', 'Milk', 'Tomato', 'Onion', 'Potato', 'Oil', 'Dal'], description: 'Surat grocery delivery comparison — Zepto, Swiggy, BigBasket price tracker for all your daily needs.' },
  indore: { name: 'Indore', slug: 'indore', state: 'Madhya Pradesh', emoji: '🍜', pincode: '452001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Poha', 'Sev', 'Dahi', 'Tomato', 'Onion', 'Potato', 'Milk', 'Atta'], description: 'Indore grocery price comparison — India\'s food capital gets the best deals on daily essentials.' },
  chandigarh: { name: 'Chandigarh', slug: 'chandigarh', state: 'Punjab/Haryana', emoji: '🌳', pincode: '160001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Milk', 'Butter', 'Paneer', 'Tomato', 'Onion', 'Dahi', 'Mustard', 'Lassi'], description: 'Chandigarh grocery prices — compare delivery apps for the best deals on dairy, vegetables and more.' },
  kochi: { name: 'Kochi', slug: 'kochi', state: 'Kerala', emoji: '🌴', pincode: '682001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Coconut Oil', 'Rice', 'Fish', 'Banana', 'Coconut', 'Curry Leaves', 'Tapioca', 'Dal'], description: 'Kochi grocery price comparison — compare Zepto, Swiggy, BigBasket for the best deals on Kerala essentials.' },
  nagpur: { name: 'Nagpur', slug: 'nagpur', state: 'Maharashtra', emoji: '🍊', pincode: '440001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Orange', 'Dal', 'Rice', 'Tomato', 'Onion', 'Milk', 'Atta', 'Oil'], description: 'Nagpur grocery price tracker — compare Blinkit, Zepto, Swiggy and BigBasket for the best daily deals in the Orange City.' },
  bhopal: { name: 'Bhopal', slug: 'bhopal', state: 'Madhya Pradesh', emoji: '🏰', pincode: '462001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Dal', 'Rice', 'Atta', 'Milk', 'Tomato', 'Onion', 'Ghee', 'Mustard Oil'], description: 'Bhopal grocery price comparison — find the cheapest app for vegetables, dairy and daily essentials.' },
  visakhapatnam: { name: 'Visakhapatnam', slug: 'visakhapatnam', state: 'Andhra Pradesh', emoji: '⚓', pincode: '530001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Fish', 'Chilli', 'Tomato', 'Onion', 'Curd', 'Coconut Oil', 'Dal'], description: 'Visakhapatnam grocery prices — compare delivery apps for the best deals on fish, rice and daily essentials in Vizag.' },
  coimbatore: { name: 'Coimbatore', slug: 'coimbatore', state: 'Tamil Nadu', emoji: '🏭', pincode: '641001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Coconut Oil', 'Banana', 'Dal', 'Tomato', 'Onion', 'Milk', 'Idli Batter'], description: 'Coimbatore grocery price comparison — compare Zepto, Swiggy and BigBasket for the best deals in the Manchester of South India.' },
  vadodara: { name: 'Vadodara', slug: 'vadodara', state: 'Gujarat', emoji: '🎨', pincode: '390001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Groundnut Oil', 'Bajra', 'Milk', 'Curd', 'Tomato', 'Onion', 'Atta', 'Dal'], description: 'Vadodara grocery price tracker — compare all apps for best prices on Gujarati daily essentials.' },
  bhubaneswar: { name: 'Bhubaneswar', slug: 'bhubaneswar', state: 'Odisha', emoji: '🛕', pincode: '751001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Fish', 'Mustard Oil', 'Potato', 'Onion', 'Tomato', 'Dal', 'Milk'], description: 'Bhubaneswar grocery prices — compare delivery apps for the best deals on rice, fish and Odia daily essentials.' },
  thiruvananthapuram: { name: 'Thiruvananthapuram', slug: 'thiruvananthapuram', state: 'Kerala', emoji: '🌅', pincode: '695001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Coconut Oil', 'Fish', 'Banana', 'Tapioca', 'Curry Leaves', 'Coconut', 'Dal'], description: 'Thiruvananthapuram grocery price comparison — compare apps for the best deals on Kerala daily essentials in the capital city.' },

  // ── Tier 2 & Tier 3 Cities ────────────────────────────────────────────
  patna: { name: 'Patna', slug: 'patna', state: 'Bihar', emoji: '🏛️', pincode: '800001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Litti', 'Rice', 'Dal', 'Milk', 'Sattu', 'Tomato', 'Onion', 'Ghee'], description: 'Patna grocery price comparison — compare Zepto, Swiggy and JioMart for the best daily grocery deals in Bihar.' },
  ranchi: { name: 'Ranchi', slug: 'ranchi', state: 'Jharkhand', emoji: '⛰️', pincode: '834001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Dal', 'Milk', 'Tomato', 'Onion', 'Potato', 'Atta', 'Oil'], description: 'Ranchi grocery price tracker — compare delivery apps for the best deals on daily essentials in Jharkhand.' },
  agra: { name: 'Agra', slug: 'agra', state: 'Uttar Pradesh', emoji: '🕌', pincode: '282001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Petha', 'Milk', 'Dal', 'Atta', 'Tomato', 'Onion', 'Rice', 'Dahi'], description: 'Agra grocery price comparison — compare Blinkit, Zepto and Swiggy for the best deals in the city of the Taj.' },
  varanasi: { name: 'Varanasi', slug: 'varanasi', state: 'Uttar Pradesh', emoji: '🪔', pincode: '221001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Malai Lassi', 'Milk', 'Dahi', 'Rice', 'Dal', 'Atta', 'Tomato', 'Onion'], description: 'Varanasi grocery prices — compare all delivery apps for the best deals on daily essentials in the city of light.' },
  meerut: { name: 'Meerut', slug: 'meerut', state: 'Uttar Pradesh', emoji: '⚔️', pincode: '250001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Milk', 'Gur', 'Atta', 'Dal', 'Tomato', 'Onion', 'Rice', 'Butter'], description: 'Meerut grocery price comparison — compare Blinkit, Zepto and Swiggy for the best grocery deals.' },
  faridabad: { name: 'Faridabad', slug: 'faridabad', state: 'Haryana', emoji: '🏗️', pincode: '121001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Milk', 'Eggs', 'Bread', 'Tomato', 'Onion', 'Paneer', 'Curd', 'Atta'], description: 'Faridabad grocery price comparison — compare all major apps for daily grocery savings near Delhi NCR.' },
  amritsar: { name: 'Amritsar', slug: 'amritsar', state: 'Punjab', emoji: '🕌', pincode: '143001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Milk', 'Butter', 'Lassi', 'Paneer', 'Atta', 'Tomato', 'Onion', 'Sarson'], description: 'Amritsar grocery prices — compare Blinkit, Zepto and Swiggy for the best deals on Punjabi daily essentials.' },
  ludhiana: { name: 'Ludhiana', slug: 'ludhiana', state: 'Punjab', emoji: '🏭', pincode: '141001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Milk', 'Butter', 'Paneer', 'Atta', 'Dal', 'Tomato', 'Onion', 'Sarson Oil'], description: 'Ludhiana grocery price tracker — compare all apps for the best daily grocery deals in Punjab\'s largest city.' },
  jodhpur: { name: 'Jodhpur', slug: 'jodhpur', state: 'Rajasthan', emoji: '🏰', pincode: '342001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Bajra', 'Dal', 'Ghee', 'Milk', 'Tomato', 'Onion', 'Atta', 'Besan'], description: 'Jodhpur grocery price comparison — compare delivery apps for the best deals in the Blue City of Rajasthan.' },
  kota: { name: 'Kota', slug: 'kota', state: 'Rajasthan', emoji: '📚', pincode: '324001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Milk', 'Bread', 'Eggs', 'Atta', 'Dal', 'Tomato', 'Onion', 'Noodles'], description: 'Kota grocery price tracker — compare Zepto, Swiggy and JioMart for the best student-friendly grocery deals.' },
  udaipur: { name: 'Udaipur', slug: 'udaipur', state: 'Rajasthan', emoji: '🏯', pincode: '313001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Dal Baati', 'Milk', 'Ghee', 'Bajra', 'Tomato', 'Onion', 'Besan', 'Atta'], description: 'Udaipur grocery price comparison — compare delivery apps for the best deals in the City of Lakes.' },
  nashik: { name: 'Nashik', slug: 'nashik', state: 'Maharashtra', emoji: '🍇', pincode: '422001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Grapes', 'Onion', 'Tomato', 'Milk', 'Dal', 'Rice', 'Atta', 'Oil'], description: 'Nashik grocery prices — compare Blinkit, Zepto and Swiggy for the best deals in Maharashtra\'s wine capital.' },
  thane: { name: 'Thane', slug: 'thane', state: 'Maharashtra', emoji: '🌊', pincode: '400601', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Fish', 'Rice', 'Milk', 'Eggs', 'Tomato', 'Onion', 'Paneer', 'Bread'], description: 'Thane grocery price comparison — compare all apps for the best daily deals near Mumbai.' },
  mysuru: { name: 'Mysuru', slug: 'mysuru', state: 'Karnataka', emoji: '🏯', pincode: '570001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Ragi', 'Coconut', 'Milk', 'Tomato', 'Onion', 'Dal', 'Curd'], description: 'Mysuru grocery price tracker — compare apps for the best deals on Karnataka\'s royal city essentials.' },
  mangalore: { name: 'Mangalore', slug: 'mangalore', state: 'Karnataka', emoji: '🌴', pincode: '575001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Fish', 'Coconut Oil', 'Rice', 'Banana', 'Coconut', 'Curry Leaves', 'Milk', 'Dal'], description: 'Mangalore grocery price comparison — compare Zepto, Swiggy and BigBasket for the best coastal Karnataka deals.' },
  madurai: { name: 'Madurai', slug: 'madurai', state: 'Tamil Nadu', emoji: '🛕', pincode: '625001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Jigarthanda', 'Coconut Oil', 'Banana', 'Dal', 'Tomato', 'Onion', 'Milk'], description: 'Madurai grocery prices — compare delivery apps for the best deals on Tamil daily essentials in the Temple City.' },
  vijayawada: { name: 'Vijayawada', slug: 'vijayawada', state: 'Andhra Pradesh', emoji: '🌊', pincode: '520001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Chilli', 'Fish', 'Curd', 'Tomato', 'Onion', 'Oil', 'Dal'], description: 'Vijayawada grocery price comparison — compare Zepto, Swiggy and BigBasket for the best Andhra deals.' },
  warangal: { name: 'Warangal', slug: 'warangal', state: 'Telangana', emoji: '🏛️', pincode: '506001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Dal', 'Chilli', 'Tomato', 'Onion', 'Oil', 'Curd', 'Milk'], description: 'Warangal grocery prices — compare delivery apps for the best deals on daily essentials in Telangana.' },
  dehradun: { name: 'Dehradun', slug: 'dehradun', state: 'Uttarakhand', emoji: '🏔️', pincode: '248001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Milk', 'Butter', 'Paneer', 'Tomato', 'Onion', 'Atta', 'Dal', 'Dahi'], description: 'Dehradun grocery price comparison — compare Blinkit, Zepto and Swiggy for the best mountain city deals.' },
  raipur: { name: 'Raipur', slug: 'raipur', state: 'Chhattisgarh', emoji: '🌾', pincode: '492001', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Dal', 'Milk', 'Tomato', 'Onion', 'Atta', 'Oil', 'Potato'], description: 'Raipur grocery price tracker — compare all apps for the best daily grocery deals in Chhattisgarh.' },
  guwahati: { name: 'Guwahati', slug: 'guwahati', state: 'Assam', emoji: '🍵', pincode: '781001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Fish', 'Mustard Oil', 'Tea', 'Potato', 'Tomato', 'Onion', 'Dal'], description: 'Guwahati grocery price comparison — compare apps for the best deals on Assamese daily essentials.' },
  kozhikode: { name: 'Kozhikode', slug: 'kozhikode', state: 'Kerala', emoji: '⛵', pincode: '673001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Fish', 'Coconut Oil', 'Rice', 'Banana', 'Coconut', 'Biryani Rice', 'Milk', 'Dal'], description: 'Kozhikode grocery price tracker — compare Zepto, Swiggy and BigBasket for the best deals in Calicut.' },
  thrissur: { name: 'Thrissur', slug: 'thrissur', state: 'Kerala', emoji: '🐘', pincode: '680001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Coconut Oil', 'Fish', 'Banana', 'Tapioca', 'Coconut', 'Curry Leaves', 'Milk'], description: 'Thrissur grocery prices — compare delivery apps for the best deals on Kerala daily essentials in the cultural capital.' },
  siliguri: { name: 'Siliguri', slug: 'siliguri', state: 'West Bengal', emoji: '🍵', pincode: '734001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Fish', 'Mustard Oil', 'Tea', 'Tomato', 'Onion', 'Potato', 'Dal'], description: 'Siliguri grocery price comparison — compare apps for the best deals on daily essentials in North Bengal.' },
  jammu: { name: 'Jammu', slug: 'jammu', state: 'Jammu & Kashmir', emoji: '🏔️', pincode: '180001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rajma', 'Rice', 'Milk', 'Dahi', 'Tomato', 'Onion', 'Atta', 'Ghee'], description: 'Jammu grocery price tracker — compare Zepto, Swiggy and BigBasket for the best daily grocery deals.' },
  guntur: { name: 'Guntur', slug: 'guntur', state: 'Andhra Pradesh', emoji: '🌶️', pincode: '522001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Chilli', 'Rice', 'Dal', 'Tomato', 'Curd', 'Oil', 'Onion', 'Fish'], description: 'Guntur grocery price comparison — compare apps for the best deals in Andhra\'s famous chilli capital.' },
  hubli: { name: 'Hubli', slug: 'hubli', state: 'Karnataka', emoji: '🚂', pincode: '580001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Jowar', 'Rice', 'Dal', 'Tomato', 'Onion', 'Milk', 'Atta', 'Oil'], description: 'Hubli grocery price tracker — compare delivery apps for the best deals on daily essentials in North Karnataka.' },
  tiruchirappalli: { name: 'Tiruchirappalli', slug: 'tiruchirappalli', state: 'Tamil Nadu', emoji: '🛕', pincode: '620001', platforms: ['Zepto', 'Swiggy Instamart', 'BigBasket', 'JioMart'], trending: ['Rice', 'Coconut Oil', 'Banana', 'Dal', 'Tomato', 'Onion', 'Idli Batter', 'Milk'], description: 'Tiruchirappalli grocery prices — compare delivery apps for the best deals on Tamil essentials in Trichy.' },
  'navi-mumbai': { name: 'Navi Mumbai', slug: 'navi-mumbai', state: 'Maharashtra', emoji: '🌆', pincode: '400701', platforms: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart'], trending: ['Fish', 'Rice', 'Milk', 'Eggs', 'Tomato', 'Onion', 'Paneer', 'Bread'], description: 'Navi Mumbai grocery price comparison — compare all 6 apps for the best daily grocery deals in New Mumbai.' },
};

const PLATFORM_LOGOS: Record<string, string> = {
  'Blinkit': '⚡', 'Zepto': '🟣', 'Swiggy Instamart': '🧡',
  'BigBasket': '🛒', 'Amazon Fresh': '📦', 'JioMart': '🔵',
  'Flipkart Minutes': '🛍️',
};

const COMPARISON_PAIRS = [
  { a: 'Blinkit', b: 'Zepto', label: 'Blinkit vs Zepto' },
  { a: 'Zepto', b: 'Swiggy Instamart', label: 'Zepto vs Swiggy' },
  { a: 'Blinkit', b: 'BigBasket', label: 'Blinkit vs BigBasket' },
  { a: 'Amazon Fresh', b: 'JioMart', label: 'Amazon vs JioMart' },
];

export default function CityPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const router = useRouter();
  const [search, setSearch] = useState('');
  const { t } = useTranslation();
  const city = CITIES[citySlug?.toLowerCase() || ''];

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🏙️</div>
          <h1 className="text-2xl font-bold text-forest-800 mb-2">{t('city_not_found')}</h1>
          <p className="text-gray-500 mb-6">{t('city_no_page')}</p>
          <Link href="/" className="btn-forest">{t('go_to_homepage')}</Link>
        </div>
      </div>
    );
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/compare?q=${encodeURIComponent(search.trim())}&city=${city.slug}`);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: `Which is the cheapest grocery delivery app in ${city.name}?`, acceptedAnswer: { '@type': 'Answer', text: `Prices vary by item and time, but you can compare live deals across ${city.platforms.join(', ')} directly on Fantastic Food.` } },
      { '@type': 'Question', name: `Does Zepto and Blinkit deliver in ${city.name}?`, acceptedAnswer: { '@type': 'Answer', text: `Yes! You can compare both Zepto and Blinkit along with other apps to find the best delivery option in ${city.name}.` } },
      { '@type': 'Question', name: `What are the trending grocery items in ${city.name}?`, acceptedAnswer: { '@type': 'Answer', text: `Currently, ${city.trending.slice(0, 3).join(', ')} are highly searched for grocery delivery in ${city.name}.` } },
    ]
  };

  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Grocery Prices in ${city.name}`,
    description: city.description,
    url: `https://www.fantasticfood.in/city/${city.slug}`,
    about: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'State',
        name: city.state
      }
    }
  };

  return (
    <>
      <SEO
        title={t('city_seo_title', { city: city.name })}
        description={t('city_seo_desc', { city: city.name, platforms: city.platforms.join(', '), state: city.state, desc: city.description })}
        canonicalUrl={`https://www.fantasticfood.in/city/${city.slug}`}
        keywords={`grocery prices ${city.name}, blinkit ${city.name}, zepto ${city.name}, swiggy instamart ${city.name}, bigbasket ${city.name}, cheapest grocery ${city.name}, food price comparison ${city.name}`}
        structuredData={[citySchema, faqSchema]}
      />

      <div className="min-h-screen bg-linear-to-b from-forest-900 via-forest-800 to-cream-50 pt-24 pb-20">

        {/* Hero */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 text-cream-200 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-white/20">
              <MapPin className="w-4 h-4 text-amber-400" />
              {city.state}
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              {city.emoji} {city.name}<br />
              <span className="text-amber-400">{t('city_grocery_prices')}</span>
            </h1>
            <p className="text-cream-300 text-lg max-w-2xl mx-auto mb-8">{city.description}</p>

            {/* Search bar */}
            <form onSubmit={handleSearch} className="flex gap-3 max-w-xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder={t('city_search_placeholder', { city: city.name })}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-gray-800 placeholder-gray-400 outline-none text-base shadow-lg border border-gray-100 focus:border-forest-400"
                />
              </div>
              <button type="submit" className="bg-amber-400 hover:bg-amber-500 text-forest-900 font-bold px-6 py-4 rounded-2xl shadow-lg transition-all">
                {t('city_compare_btn')}
              </button>
            </form>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Platforms available */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl shadow-md p-6 md:p-8">
            <h2 className="text-xl font-black text-gray-800 mb-5 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              {t('city_apps_deliver', { city: city.name })}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {city.platforms.map(p => (
                <div key={p} className="flex items-center gap-2 bg-gray-50 rounded-2xl px-4 py-3 border border-gray-100">
                  <span className="text-xl">{PLATFORM_LOGOS[p] || '🛒'}</span>
                  <span className="font-semibold text-gray-700 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Trending items */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-md p-6 md:p-8">
            <h2 className="text-xl font-black text-gray-800 mb-5 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-forest-600" />
              {t('city_trending_searches', { city: city.name })}
            </h2>
            <div className="flex flex-wrap gap-3">
              {city.trending.map((item) => (
                <Link
                  key={item}
                  href={`/compare?q=${encodeURIComponent(item)}&city=${city.slug}`}
                  className="flex items-center gap-2 bg-forest-50 hover:bg-forest-100 text-forest-700 border border-forest-100 px-4 py-2.5 rounded-full font-semibold text-sm transition-all hover:shadow-sm group"
                >
                  {item}
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Head-to-head comparisons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl shadow-md p-6 md:p-8">
            <h2 className="text-xl font-black text-gray-800 mb-5 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-400" />
              {t('city_popular_comparisons', { city: city.name })}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {COMPARISON_PAIRS.map(({ a, b, label }) => {
                if (!city.platforms.includes(a) || !city.platforms.includes(b)) return null;
                return (
                  <Link
                    key={label}
                    href={`/compare?q=tomato&city=${city.slug}`}
                    className="flex items-center justify-between bg-linear-to-r from-forest-50 to-cream-50 border border-forest-100 rounded-2xl p-4 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{PLATFORM_LOGOS[a]}</span>
                      <span className="font-bold text-gray-700 text-sm">vs</span>
                      <span className="text-xl">{PLATFORM_LOGOS[b]}</span>
                      <span className="font-semibold text-gray-700 text-sm">{label}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-forest-400 group-hover:text-forest-600 transition-colors" />
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* All cities grid */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="bg-linear-to-br from-forest-800 to-forest-900 rounded-3xl p-6 md:p-8">
            <h2 className="text-xl font-black text-white mb-5 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              {t('city_check_another')}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {Object.values(CITIES).map(c => (
                <Link
                  key={c.slug}
                  href={`/city/${c.slug}`}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    c.slug === city.slug
                      ? 'bg-amber-400 text-forest-900'
                      : 'bg-white/10 text-cream-200 hover:bg-white/20'
                  }`}
                >
                  <span>{c.emoji}</span>
                  <span>{c.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
