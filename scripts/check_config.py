content = open('src/i18n/config.ts', encoding='utf-8').read()
print('File length:', len(content))

# Check encoding/BOM
raw = open('src/i18n/config.ts', 'rb').read(10)
print('First bytes:', raw.hex())

# Find zh-CN (try different quote styles)
for q in ["'zh-CN'", '"zh-CN"', 'zh-CN']:
    idx = content.find(q)
    print(f'Search {repr(q)}: found at {idx}')
    if idx >= 0:
        print('Context:', repr(content[idx:idx+60]))
        break
