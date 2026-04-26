import os
import re

def migrate_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if react-router-dom is imported
    if 'react-router-dom' not in content:
        return

    # Replace imports
    # `import { Link } from 'react-router-dom'` -> `import Link from 'next/link'`
    # We might have `import { Link, useNavigate } from 'react-router-dom'`
    
    # We will use regex to find the imported items
    import_pattern = re.compile(r'import\s+\{([^}]+)\}\s+from\s+[\'"]react-router-dom[\'"];?')
    match = import_pattern.search(content)
    
    if not match:
        return
        
    imports = [i.strip() for i in match.group(1).split(',')]
    
    next_link_imports = []
    next_nav_imports = []
    
    for imp in imports:
        if imp == 'Link' or imp == 'NavLink':
            # Next.js Link is default export
            # We'll just use Link for NavLink too
            pass 
        elif imp in ['useNavigate', 'useLocation', 'useParams', 'useSearchParams']:
            next_nav_imports.append(imp)
            
    # Replace the old import block
    new_imports = ""
    if 'Link' in imports or 'NavLink' in imports:
        new_imports += "import Link from 'next/link';\n"
        
    # Replace useNavigate with useRouter
    if 'useNavigate' in next_nav_imports:
        next_nav_imports.remove('useNavigate')
        next_nav_imports.append('useRouter')
        
    # Replace useLocation with usePathname
    if 'useLocation' in next_nav_imports:
        next_nav_imports.remove('useLocation')
        next_nav_imports.append('usePathname')
        
    if next_nav_imports:
        new_imports += f"import {{ {', '.join(next_nav_imports)} }} from 'next/navigation';\n"
        
    content = content[:match.start()] + new_imports + content[match.end():]
    
    # Replace hook usages in code
    content = content.replace('const navigate = useNavigate();', 'const router = useRouter();')
    content = content.replace('navigate(', 'router.push(')
    content = content.replace('const location = useLocation();', 'const pathname = usePathname();')
    content = content.replace('location.pathname', 'pathname')
    content = content.replace('location.search', "'' /* TODO: searchParams */") # Simplified for now
    content = content.replace('<NavLink', '<Link')
    content = content.replace('</NavLink>', '</Link>')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Migrated: {filepath}")

def main():
    src_dir = os.path.join(os.getcwd(), 'src')
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                filepath = os.path.join(root, file)
                migrate_file(filepath)

if __name__ == '__main__':
    main()
