"""Inject compare page translation keys into en, zh-CN, and ms blocks."""
import re

CONFIG_PATH = r'src\i18n\config.ts'

KEYS = {
    'en': {
        'compare_cooking_with': 'Cooking with {{item}}? Try these recipes!',
        '7_platforms': '7 Platforms',
        'compare_prices_across': 'Compare Prices Across',
        'find_cheapest_deal': 'Find the cheapest deal before you order',
        'todays_best_deal': "TODAY'S BEST DEAL",
        'tap_to_compare': 'Tap to compare all platforms',
        'compare_arrow': 'Compare \u2192',
        'recently_compared': 'Recently Compared',
        'fetching_prices': 'Fetching live prices...',
        'browse_by_category': 'Browse by Category',
        'compare_more_items': 'Compare More Items',
        'prices_vary_disclaimer': 'Prices may vary. Always verify on the platform before purchasing.',
        'showing_prices_pincode': 'Showing prices for pincode',
    },
    'zh-CN': {
        'compare_cooking_with': '\u7528{{item}}\u505a\u5f69\u5440\uff1f\u8bd5\u8bd5\u8fd9\u4e9b\u98df\u8c31\uff01',
        '7_platforms': '7 \u4e2a\u5e73\u53f0',
        'compare_prices_across': '\u6bd4\u8f83\u5e73\u53f0\u4ef7\u683c',
        'find_cheapest_deal': '\u5728\u4e0b\u5355\u524d\u627e\u5230\u6700\u5e74\u9886\u4ef7',
        'todays_best_deal': '\u4eca\u65e5\u6700\u4f73\u4f18\u60e0',
        'tap_to_compare': '\u70b9\u51fb\u6bd4\u8f83\u6240\u6709\u5e73\u53f0',
        'compare_arrow': '\u6bd4\u8f83 \u2192',
        'recently_compared': '\u6700\u8fd1\u6bd4\u8f83',
        'fetching_prices': '\u6b63\u5728\u83b7\u53d6\u5b9e\u65f6\u4ef7\u683c...',
        'browse_by_category': '\u6309\u7c7b\u522b\u6d4f\u89c8',
        'compare_more_items': '\u6bd4\u8f83\u66f4\u591a\u5546\u54c1',
        'prices_vary_disclaimer': '\u4ef7\u683c\u53ef\u80fd\u6709\u6240\u4e0d\u540c\uff0c\u8bf7\u5728\u8d2d\u4e70\u524d\u5728\u5e73\u53f0\u4e0a\u6838\u5b9e\u3002',
        'showing_prices_pincode': '\u663e\u793a\u90ae\u653f\u7f16\u7801\u4ef7\u683c',
    },
    'ms': {
        'compare_cooking_with': 'Masak dengan {{item}}? Cuba resipi-resipi ini!',
        '7_platforms': '7 Platform',
        'compare_prices_across': 'Bandingkan Harga Merentasi',
        'find_cheapest_deal': 'Cari tawaran termurah sebelum membuat pesanan',
        'todays_best_deal': 'TAWARAN TERBAIK HARI INI',
        'tap_to_compare': 'Ketik untuk bandingkan semua platform',
        'compare_arrow': 'Bandingkan \u2192',
        'recently_compared': 'Baru Dibandingkan',
        'fetching_prices': 'Mendapatkan harga terkini...',
        'browse_by_category': 'Semak Mengikut Kategori',
        'compare_more_items': 'Bandingkan Lebih Banyak Item',
        'prices_vary_disclaimer': 'Harga mungkin berbeza. Sila sahkan di platform sebelum membeli.',
        'showing_prices_pincode': 'Menunjukkan harga untuk poskod',
    },
}

def find_block_range(content, lang):
    if lang == 'en':
        m = re.search(r'\n  en:\s*\{', content)
    else:
        m = re.search(r"'" + re.escape(lang) + r"'\s*:\s*\{\s*translation", content)
    if not m:
        return -1, -1
    start = m.start()
    remaining = content[start + 50:]
    next_m = re.search(r"\n  (?:en|hi|bn|mr|te|ta|'zh-CN'|'ms'):", remaining)
    end = start + 50 + next_m.start() if next_m else len(content)
    return start, end

with open(CONFIG_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# Use a reliable anchor that exists in all blocks
ANCHOR = '"find_cheapest_deal"'

for lang, keys in KEYS.items():
    block_start, block_end = find_block_range(content, lang)
    if block_start == -1:
        print(f'ERROR: {lang} block not found')
        continue

    block = content[block_start:block_end]
    added = 0

    for key, value in keys.items():
        if f'"{key}"' in block:
            continue

        # Find a good anchor to insert after
        anchor_pos = block.find(ANCHOR)
        if anchor_pos == -1:
            # Try alternate anchor
            anchor_pos = block.find('"compare_prices_across"')
        if anchor_pos == -1:
            anchor_pos = block.find('"prices_updated_live"')
        if anchor_pos == -1:
            # Just append before closing brace
            anchor_pos = block.rfind('}')
            anchor_pos = block.rfind('"', 0, anchor_pos)
            anchor_pos = block.rfind('\n', 0, anchor_pos)

        line_end_rel = block.find('\n', anchor_pos)
        abs_line_end = block_start + line_end_rel

        line_start_rel = block.rfind('\n', 0, anchor_pos) + 1
        indent = ''
        for ch in block[line_start_rel:]:
            if ch in (' ', '\t'):
                indent += ch
            else:
                break

        escaped_value = value.replace('\\', '\\\\').replace('"', '\\"')
        new_line = f'\n{indent}"{key}": "{escaped_value}",'
        content = content[:abs_line_end] + new_line + content[abs_line_end:]
        block_end += len(new_line)
        block = content[block_start:block_end]
        added += 1

    print(f'[{lang}] Added {added}/{len(keys)} compare keys')

with open(CONFIG_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print('\nDone.')
