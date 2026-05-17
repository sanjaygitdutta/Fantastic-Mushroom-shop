"""Inject pop_* translation keys for popular search chips into zh-CN and ms blocks."""

CONFIG_PATH = r'src\i18n\config.ts'

ZH_KEYS = """      "pop_onion": "\u6d0b\u8471",
      "pop_tomato": "\u897f\u7ea2\u67ff",
      "pop_milk": "\u725b\u5976",
      "pop_eggs": "\u9e21\u86cb",
      "pop_chicken": "\u9e21\u8089",
      "pop_rice": "\u5927\u7c73",
      "pop_paneer": "\u5370\u5ea6\u5976\u916a",
      "pop_banana": "\u9999\u8549",
      "pop_potato": "\u571f\u8c46",
      "pop_dal": "\u5c0f\u6241\u8c46",
      "pop_bread": "\u9762\u5305",
      "pop_atta": "\u9762\u7c89",
      "pop_curd": "\u9178\u5976",
      "pop_mango": "\u8292\u679c",
      "pop_fish": "\u9c7c",
      "pop_mushroom": "\u8611\u83c7",
      "pop_tea": "\u8336",
      "pop_coffee": "\u548b\u5561","""

MS_KEYS = """      "pop_onion": "Bawang",
      "pop_tomato": "Tomato",
      "pop_milk": "Susu",
      "pop_eggs": "Telur",
      "pop_chicken": "Ayam",
      "pop_rice": "Beras",
      "pop_paneer": "Keju India",
      "pop_banana": "Pisang",
      "pop_potato": "Ubi Kentang",
      "pop_dal": "Dal",
      "pop_bread": "Roti",
      "pop_atta": "Tepung",
      "pop_curd": "Yogurt",
      "pop_mango": "Mangga",
      "pop_fish": "Ikan",
      "pop_mushroom": "Cendawan",
      "pop_tea": "Teh",
      "pop_coffee": "Kopi","""

with open(CONFIG_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

def inject_after(content, lang_marker, anchor_key, new_keys):
    """Find the lang block, find anchor_key line, insert new_keys after it."""
    lang_pos = content.find(lang_marker)
    if lang_pos == -1:
        print(f'ERROR: lang marker not found: {lang_marker}')
        return content

    # Search only from lang_pos onwards
    search_from = lang_pos
    anchor_pos = content.find(anchor_key, search_from)
    if anchor_pos == -1:
        print(f'ERROR: anchor key not found in {lang_marker}: {anchor_key}')
        return content

    # Find end of that line
    line_end = content.find('\n', anchor_pos)
    if line_end == -1:
        print(f'ERROR: no newline after anchor')
        return content

    # Check if pop_onion already exists after lang_pos (avoid double-inject)
    if '"pop_onion"' in content[lang_pos:lang_pos+5000]:
        print(f'SKIP: pop keys already present in {lang_marker}')
        return content

    content = content[:line_end + 1] + new_keys + '\n' + content[line_end + 1:]
    print(f'OK: injected pop_* keys into {lang_marker}')
    return content

# Inject into zh-CN block after "auto_detect" key
content = inject_after(content, "'zh-CN'", '"auto_detect"', ZH_KEYS)

# Inject into ms block after "auto_detect" key
content = inject_after(content, "'ms'", '"auto_detect"', MS_KEYS)

with open(CONFIG_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done.')
