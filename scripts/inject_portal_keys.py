"""Inject portal translation keys into en, zh-CN, and ms language blocks."""

CONFIG_PATH = r'src\i18n\config.ts'

# Keys to add per language
PORTAL_KEYS = {
    'en': {
        'portal_viral_badge': 'Viral Challenge',
        'portal_challenge_title': 'The \u20b91500 Weekly Food Challenge',
        'portal_challenge_title_sg': 'The S$50 Weekly Food Challenge',
        'portal_challenge_desc': 'Can AI feed a family of 2 for under \u20b91500 a week? Take the challenge and save money.',
        'portal_challenge_desc_sg': 'Can AI feed a family of 2 for under S$50 a week? Take the challenge and save money.',
        'portal_challenge_btn': 'Accept Challenge',
        'portal_aika_badge': 'AI Sous-Chef',
        'portal_aika_title': 'Scan Your Fridge with Chef Aika',
        'portal_aika_desc': "Don't know what to cook? Let AI scan your ingredients and generate a 5-star recipe instantly.",
        'portal_aika_btn': 'Try Chef Aika Free',
    },
    'zh-CN': {
        'portal_viral_badge': '\u75af\u4f20\u6311\u6218',
        'portal_challenge_title': 'S$50 \u6bcf\u5468\u996e\u98df\u6316\u6218',
        'portal_challenge_title_sg': 'S$50 \u6bcf\u5468\u996e\u98df\u6316\u6218',
        'portal_challenge_desc': 'AI \u80fd\u5426\u5728 S$50 \u5185\u5582\u9971\u4e00\u5bb6\u4e24\u53e3\uff1f\u63a5\u53d7\u6316\u6218\uff0c\u7701\u94b1\u8d77\u6765\uff01',
        'portal_challenge_desc_sg': 'AI \u80fd\u5426\u5728 S$50 \u5185\u5582\u9971\u4e00\u5bb6\u4e24\u53e3\uff1f\u63a5\u53d7\u6316\u6218\uff0c\u7701\u94b1\u8d77\u6765\uff01',
        'portal_challenge_btn': '\u63a5\u53d7\u6316\u6218',
        'portal_aika_badge': 'AI \u5395\u5385\u5927\u5e08',
        'portal_aika_title': '\u7528 Aika \u4e3b\u53a8\u626b\u63cf\u60a8\u7684\u51b0\u7b97',
        'portal_aika_desc': '\u4e0d\u77e5\u9053\u8bf4\u5565\u597d\uff1f\u8ba9 AI \u626b\u63cf\u60a8\u7684\u98df\u6750\uff0c\u5373\u523b\u751f\u6210\u4e94\u661f\u98df\u8c31\u3002',
        'portal_aika_btn': '\u514d\u8d39\u4f53\u9a8c Aika \u4e3b\u53a8',
    },
    'ms': {
        'portal_viral_badge': 'Cabaran Viral',
        'portal_challenge_title': 'Cabaran Makanan Mingguan S$50',
        'portal_challenge_title_sg': 'Cabaran Makanan Mingguan S$50',
        'portal_challenge_desc': 'Bolehkah AI memberi makan keluarga 2 orang dengan hanya S$50 seminggu? Terima cabaran dan jimat wang!',
        'portal_challenge_desc_sg': 'Bolehkah AI memberi makan keluarga 2 orang dengan hanya S$50 seminggu? Terima cabaran dan jimat wang!',
        'portal_challenge_btn': 'Terima Cabaran',
        'portal_aika_badge': 'Sous-Chef AI',
        'portal_aika_title': 'Imbas Peti Sejuk Anda dengan Chef Aika',
        'portal_aika_desc': 'Tidak tahu nak masak apa? Biarkan AI mengimbas bahan-bahan anda dan menjana resipi 5 bintang seketika.',
        'portal_aika_btn': 'Cuba Chef Aika Percuma',
    },
}

# Anchor: insert after this key in each block
ANCHORS = {
    'en': '"find_cheapest_deal"',
    'zh-CN': '"find_cheapest_deal"',
    'ms': '"find_cheapest_deal"',
}

import re

with open(CONFIG_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

def find_block_range(content, lang):
    """Return (start, end) of the language block."""
    if lang == 'en':
        # en uses bare key: `  en: {`
        m = re.search(r'\n  en:\s*\{', content)
    else:
        m = re.search(r"'" + re.escape(lang) + r"'\s*:\s*\{\s*translation", content)
    if not m:
        return -1, -1
    start = m.start()
    # Find next language block
    remaining = content[start + 50:]
    next_m = re.search(r"\n  (?:en|hi|bn|mr|te|ta|'zh-CN'|'ms'):", remaining)
    end = start + 50 + next_m.start() if next_m else len(content)
    return start, end

for lang, keys in PORTAL_KEYS.items():
    block_start, block_end = find_block_range(content, lang)
    if block_start == -1:
        print(f'ERROR: block not found for {lang}')
        continue

    block = content[block_start:block_end]
    anchor = ANCHORS[lang]

    added = 0
    for key, value in keys.items():
        if f'"{key}"' in block:
            continue  # already exists

        anchor_pos = block.find(anchor)
        if anchor_pos == -1:
            print(f'  [{lang}] anchor not found: {anchor}')
            continue

        line_end_rel = block.find('\n', anchor_pos)
        abs_line_end = block_start + line_end_rel

        line_start_rel = block.rfind('\n', 0, anchor_pos) + 1
        indent = ''
        for ch in block[line_start_rel:]:
            if ch in (' ', '\t'):
                indent += ch
            else:
                break

        # Escape value for TS string
        escaped_value = value.replace('\\', '\\\\').replace('"', '\\"')
        new_line = f'\n{indent}"{key}": "{escaped_value}",'
        content = content[:abs_line_end] + new_line + content[abs_line_end:]

        # Shift block_end and refresh block
        block_end += len(new_line)
        block = content[block_start:block_end]
        added += 1

    print(f'[{lang}] Added {added} portal keys')

with open(CONFIG_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print('\nDone.')
