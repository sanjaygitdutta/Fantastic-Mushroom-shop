import re

translations = {
    'zh-CN': {
        "Compare Prices": "比较价格",
        "shop_mushrooms": "购买蘑菇",
        "nav_ai_tools": "AI 工具",
        "nav_calculators": "计算器",
        "nav_discover": "发现",
        "nav_sign_in": "登录"
    },
    'ms': {
        "Compare Prices": "Banding Harga",
        "shop_mushrooms": "Beli Cendawan",
        "nav_ai_tools": "Alat AI",
        "nav_calculators": "Kalkulator",
        "nav_discover": "Teroka",
        "nav_sign_in": "Log Masuk"
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

print("Navbar missing translations added successfully.")
