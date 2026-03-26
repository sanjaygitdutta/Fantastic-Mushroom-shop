// Platform configuration for price comparison
export interface Platform {
  id: string;
  name: string;
  logo: string;
  color: string;
  bgColor: string;
  baseUrl: string;
  searchUrl: (query: string) => string;
  deliveryTime: string;
  deliveryLabel: string;
}

export const PLATFORMS: Platform[] = [
  {
    id: 'blinkit',
    name: 'Blinkit',
    logo: '⚡',
    color: '#F5d100',
    bgColor: '#FFFDE7',
    baseUrl: 'https://blinkit.com',
    searchUrl: (q) => `https://blinkit.com/s/?q=${encodeURIComponent(q)}`,
    deliveryTime: '10 min',
    deliveryLabel: 'Express',
  },
  {
    id: 'bigbasket',
    name: 'BigBasket',
    logo: '🛒',
    color: '#84C225',
    bgColor: '#F1F8E9',
    baseUrl: 'https://bigbasket.com',
    searchUrl: (q) => `https://www.bigbasket.com/ps/?q=${encodeURIComponent(q)}`,
    deliveryTime: '2 hrs',
    deliveryLabel: 'Scheduled',
  },
  {
    id: 'swiggy',
    name: 'Swiggy Instamart',
    logo: '🧡',
    color: '#FC8019',
    bgColor: '#FFF3E0',
    baseUrl: 'https://swiggy.com/instamart',
    searchUrl: (q) => `https://swiggy.com/instamart/search?query=${encodeURIComponent(q)}`,
    deliveryTime: '15 min',
    deliveryLabel: 'Instamart',
  },
  {
    id: 'zepto',
    name: 'Zepto',
    logo: '🟣',
    color: '#9B30D9',
    bgColor: '#F3E5FF',
    baseUrl: 'https://zeptonow.com',
    searchUrl: (q) => `https://www.zeptonow.com/search?query=${encodeURIComponent(q)}`,
    deliveryTime: '10 min',
    deliveryLabel: 'Express',
  },
  {
    id: 'amazon',
    name: 'Amazon Fresh',
    logo: '📦',
    color: '#FF9900',
    bgColor: '#FFF8EE',
    baseUrl: 'https://amazon.in/fresh',
    searchUrl: (q) => `https://www.amazon.in/s?k=${encodeURIComponent(q)}&i=amazonfresh`,
    deliveryTime: '2 hrs',
    deliveryLabel: 'Fresh',
  },
  {
    id: 'jiomart',
    name: 'JioMart',
    logo: '🔵',
    color: '#0070BA',
    bgColor: '#E3F2FD',
    baseUrl: 'https://jiomart.com',
    searchUrl: (q) => `https://www.jiomart.com/search/${encodeURIComponent(q)}`,
    deliveryTime: '1 day',
    deliveryLabel: 'Standard',
  },
];

export const getPlatformById = (id: string): Platform | undefined =>
  PLATFORMS.find((p) => p.id === id);
