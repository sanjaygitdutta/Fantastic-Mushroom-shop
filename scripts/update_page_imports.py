import os
import re

def update_imports(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                filepath = os.path.join(root, file)
                
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Replace paths like from '../pages/Home' or from '../../pages/admin/Orders'
                # Match "pages/" or "'pages/" or "/pages/"
                new_content = content.replace("from '../pages/", "from '../views/")
                new_content = new_content.replace("from '../../pages/", "from '../../views/")
                new_content = new_content.replace("from '../../../pages/", "from '../../../views/")
                new_content = new_content.replace("from '../../../../pages/", "from '../../../../views/")
                new_content = new_content.replace("from '../../../../../pages/", "from '../../../../../views/")
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated imports in {filepath}")

update_imports('src')
