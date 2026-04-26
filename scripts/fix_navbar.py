import os

filepath = 'src/components/Navbar.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace to=" with href="
new_content = content.replace('to="', 'href="')
# Replace to={ with href={
new_content = new_content.replace('to={', 'href={')

if new_content != content:
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {filepath}")
