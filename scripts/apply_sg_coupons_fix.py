import os

data_path = r'c:\Users\abcom\Desktop\Fantastic food\src\data\coupons.ts'
coupons_path = r'c:\Users\abcom\Desktop\Fantastic food\src\views\Coupons.tsx'

# 1. Update coupons.ts to include SG_COUPONS
with open(data_path, 'r', encoding='utf-8') as f:
    data_content = f.read()

sg_coupons_code = """
export const SG_COUPONS: Coupon[] = [
  { id: 'fp1', platform: 'FairPrice', platformId: 'fairprice', code: 'FPNEW8', discount: 'S$8 OFF', description: 'Get S$8 off your first FairPrice online order.', minOrder: 'Min S$50', expiry: 'Ongoing', category: 'First Order', isHot: true, url: 'https://www.fairprice.com.sg', bgColor: '#E8F5E9', textColor: '#2E7D32', logo: '🛒' },
  { id: 'rm1', platform: 'RedMart', platformId: 'redmart', code: 'RMFRESH10', discount: '10% OFF Fresh Produce', description: 'Save 10% on all fresh vegetables and fruits.', minOrder: 'Min S$40', expiry: 'End of month', category: 'Vegetables', isHot: true, url: 'https://redmart.lazada.sg', bgColor: '#FFEbee', textColor: '#C62828', logo: '🚚' },
  { id: 'cs1', platform: 'Cold Storage', platformId: 'coldstorage', code: 'CSDAIRY5', discount: 'S$5 OFF Dairy', description: 'Discount on milk, cheese, and other dairy products.', minOrder: 'Min S$30', expiry: 'Ongoing', category: 'Dairy', isHot: false, url: 'https://coldstorage.com.sg', bgColor: '#E3F2FD', textColor: '#1565C0', logo: '🥩' },
  { id: 'sh1', platform: 'Shopee Supermarket', platformId: 'shopee', code: 'SHOPGROC15', discount: '15% Cashback', description: 'Get 15% cashback in Shopee Coins for grocery items.', minOrder: 'No Min', expiry: 'Ongoing', category: 'Grocery', isHot: true, url: 'https://shopee.sg/supermarket', bgColor: '#FFF3E0', textColor: '#E65100', logo: '🛍️' },
];
"""

if "export const SG_COUPONS" not in data_content:
    data_content += "\n" + sg_coupons_code
    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(data_content)
    print("Added SG_COUPONS to coupons.ts")

# 2. Update Coupons.tsx
with open(coupons_path, 'r', encoding='utf-8') as f:
    coupons_content = f.read()

coupons_replacements = [
    (
        "import { COUPONS } from '../data/coupons';",
        "import { COUPONS, SG_COUPONS } from '../data/coupons';"
    ),
    (
        "const PLATFORM_IDS = ['All', 'Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart', 'Flipkart Minutes'];",
        "const IN_PLATFORMS = ['All', 'Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket', 'Amazon Fresh', 'JioMart', 'Flipkart Minutes'];\nconst SG_PLATFORMS = ['All', 'FairPrice', 'RedMart', 'Cold Storage', 'Shopee Supermarket'];"
    ),
    (
        "  const [search, setSearch] = useState('');\n\n  const filtered = COUPONS.filter(c => {",
        "  const [search, setSearch] = useState('');\n\n  const platformIds = region === 'sg' ? SG_PLATFORMS : IN_PLATFORMS;\n  const couponsList = region === 'sg' ? SG_COUPONS : COUPONS;\n\n  const filtered = couponsList.filter(c => {"
    ),
    (
        "  const couponCount = COUPONS.length;",
        "  const couponCount = couponsList.length;"
    ),
    (
        "mainEntity: COUPONS.slice(0, 5).map(coupon => ({",
        "mainEntity: couponsList.slice(0, 5).map(coupon => ({"
    ),
    (
        "{ label: t('coup_stat_active', { defaultValue: 'Active Coupons' }), value: COUPONS.length, icon: '🎟️' },\n                { label: t('coup_stat_hot', { defaultValue: 'Hot Deals Today' }), value: COUPONS.filter(c => c.isHot).length, icon: '🔥' },\n                { label: t('coup_stat_platforms', { defaultValue: 'Platforms Covered' }), value: 7, icon: '🏪' },",
        "{ label: t('coup_stat_active', { defaultValue: 'Active Coupons' }), value: couponsList.length, icon: '🎟️' },\n                { label: t('coup_stat_hot', { defaultValue: 'Hot Deals Today' }), value: couponsList.filter(c => c.isHot).length, icon: '🔥' },\n                { label: t('coup_stat_platforms', { defaultValue: 'Platforms Covered' }), value: platformIds.length - 1, icon: '🏪' },"
    ),
    (
        "{PLATFORM_IDS.map(p => (",
        "{platformIds.map(p => ("
    )
]

for old_str, new_str in coupons_replacements:
    if old_str in coupons_content:
        coupons_content = coupons_content.replace(old_str, new_str)
    else:
        print(f"NOT FOUND in Coupons.tsx: {old_str[:50]}...")

with open(coupons_path, 'w', encoding='utf-8') as f:
    f.write(coupons_content)

print("Coupons.tsx replacements done!")
