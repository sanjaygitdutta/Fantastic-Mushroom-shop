"""Add missing English SG-specific keys directly after their anchor lines."""

CONFIG_PATH = r'src\i18n\config.ts'

with open(CONFIG_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# The EN block uses bare `en:` - find it and the next language block
en_pos = content.find('\n  en: {')
next_block = content.find('\n  hi:', en_pos + 1)  # Hindi is next
if next_block == -1:
    next_block = content.find("\n  'zh-CN':", en_pos + 1)

en_block = content[en_pos:next_block]
print(f"EN block found: chars {en_pos} to {next_block}")
print(f"home_hero_subtitle_sg in EN: {'home_hero_subtitle_sg' in en_block}")
print(f"home_step_2_desc_sg in EN: {'home_step_2_desc_sg' in en_block}")

KEYS_TO_ADD = [
    (
        '"home_hero_subtitle": "Instantly find',
        'home_hero_subtitle_sg',
        'Instantly find the cheapest option across FairPrice, RedMart, Cold Storage & more. Why pay extra when you can compare?'
    ),
    (
        '"home_step_2_desc": "We fetch real-time',
        'home_step_2_desc_sg',
        'We fetch real-time prices from FairPrice, RedMart, Cold Storage, Sheng Siong, Giant & Amazon.'
    ),
]

for anchor_key, new_key, new_value in KEYS_TO_ADD:
    if new_key in en_block:
        print(f'SKIP: {new_key} already in EN block')
        continue

    # Find in full content but only within en block range
    abs_pos = content.find(anchor_key, en_pos)
    if abs_pos == -1 or abs_pos >= next_block:
        print(f'NOT FOUND in EN block: {anchor_key}')
        continue

    line_end = content.find('\n', abs_pos)
    line_start = content.rfind('\n', 0, abs_pos) + 1
    indent = ''
    for ch in content[line_start:]:
        if ch in (' ', '\t'):
            indent += ch
        else:
            break

    new_line = f'\n{indent}"{new_key}": "{new_value}",'
    content = content[:line_end] + new_line + content[line_end:]
    next_block += len(new_line)
    en_block = content[en_pos:next_block]
    print(f'ADDED to EN: {new_key}')

with open(CONFIG_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done.')
