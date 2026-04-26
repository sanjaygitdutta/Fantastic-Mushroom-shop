import os

def inject_use_client(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                filepath = os.path.join(root, file)
                
                # Skip layout and page files as they are Next.js server components or wrappers
                if file in ['layout.tsx', 'page.tsx', 'sitemap.ts', 'robots.ts', 'middleware.ts']:
                    continue
                    
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if "'use client'" not in content and '"use client"' not in content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write("'use client';\n" + content)
                    print(f"Injected 'use client' into {filepath}")

inject_use_client('src/components')
inject_use_client('src/context')
inject_use_client('src/pages')
