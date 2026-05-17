"""Fix raw ASCII double quotes inside zh-CN placeholder string values in config.ts."""
import sys, re
sys.stdout.reconfigure(encoding='utf-8')

CONFIG_PATH = r'src\i18n\config.ts'

with open(CONFIG_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# Each bad line has the pattern: "key": "...\"FOOD\"..."
# where the inner quotes are raw 0x22, breaking TS parsing.
# Strategy: find lines with search_placeholder inside zh-CN block,
# and escape inner quotes that aren't the string delimiters.

bad_lines = {
    'search_placeholder_1': ('\u5728\u6240\u6709\u5e73\u53f0\u641c\u7d22"\u6d0b\u8471"...',
                              '\u5728\u6240\u6709\u5e73\u53f0\u641c\u7d22\\"\u6d0b\u8471\\"...'),
    'search_placeholder_2': ('\u8bd5\u8bd5"\u9e21\u80f8\u8089" \u2014 \u7acb\u5373\u6bd4\u8f83...',
                              '\u8bd5\u8bd5\\"\u9e21\u80f8\u8089\\" \u2014 \u7acb\u5373\u6bd4\u8f83...'),
    'search_placeholder_3': ('\u641c\u7d22"\u725b\u6cb9"\u4ee5\u83b7\u6700\u4f4e\u4ef7...',
                              '\u641c\u7d22\\"\u725b\u6cb9\\"\u4ee5\u83b7\u6700\u4f4e\u4ef7...'),
    'search_placeholder_4': ('\u4fbf\u5b9c\u7684"\u9762\u5305"...',
                              '\u4fbf\u5b9c\u7684\\"\u9762\u5305\\"...'),
    'search_placeholder_5': ('\u6bd4\u8f83"\u8309\u8389\u9999\u7c73"\u4ef7\u683c...',
                              '\u6bd4\u8f83\\"\u8309\u8389\u9999\u7c73\\"\u4ef7\u683c...'),
}

fixed = 0
for key, (bad_part, good_part) in bad_lines.items():
    if bad_part in content:
        content = content.replace(bad_part, good_part, 1)
        print(f'Fixed: {key}')
        fixed += 1
    else:
        print(f'Not found (already fixed?): {key}')

with open(CONFIG_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'\nTotal fixed: {fixed}')
