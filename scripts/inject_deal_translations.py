import re

translations = {
    'zh-CN': {
        "deal_today_best": "今日最佳优惠",
        "deal_of_the_day": "今日特价",
        "deal_refreshes_desc": "每天午夜更新 • 点击比较并购买",
        "deal_see_all": "查看所有价格 →",
        "deal_buy_now": "立即购买",
        "deal_users_saved": "本周用户平均节省了 ",
        "deal_saved_amount": "₹800+",
        "deal_saved_desc": " 通过在 Fantastic Food 上比较价格"
    },
    'ms': {
        "deal_today_best": "TAWARAN TERBAIK HARI INI",
        "deal_of_the_day": "Tawaran Hari Ini",
        "deal_refreshes_desc": "Dikemas kini setiap hari pada tengah malam • Klik untuk banding & beli",
        "deal_see_all": "Lihat semua harga →",
        "deal_buy_now": "Beli Sekarang",
        "deal_users_saved": "Pengguna jimat purata ",
        "deal_saved_amount": "₹800+",
        "deal_saved_desc": " minggu ini dengan membandingkan harga di Fantastic Food"
    }
}

with open(r'c:\Users\abcom\Desktop\Fantastic food\src\i18n\config.ts', 'r', encoding='utf-8') as f:
    content = f.read()

for lang, trans in translations.items():
    formatted_trans = ""
    for k, v in trans.items():
        formatted_trans += f'      "{k}": "{v}",\n'
    
    # Check if the language block exists
    pattern = r"((?:'|\")" + lang + r"(?:'|\"):\s*\{\s*translation:\s*\{)"
    def repl(match):
        return match.group(1) + '\n' + formatted_trans
    content = re.sub(pattern, repl, content, count=1)

with open(r'c:\Users\abcom\Desktop\Fantastic food\src\i18n\config.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Deal of the Day translations added successfully.")
