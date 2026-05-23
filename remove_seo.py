import os
import re

VIEWS_DIR = os.path.join(os.path.dirname(__file__), "src", "views")

def clean_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    original = content
    # Remove import line
    content = re.sub(r"import SEO from '../components/SEO';\r?\n", "", content)
    # Remove <SEO ... /> multi-line block
    content = re.sub(r"\s*<SEO\b[^>]*?/>", "", content, flags=re.DOTALL)
    if content != original:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        return True
    return False

changed = []
for fname in os.listdir(VIEWS_DIR):
    if fname.endswith(".tsx") or fname.endswith(".ts"):
        fpath = os.path.join(VIEWS_DIR, fname)
        if clean_file(fpath):
            changed.append(fname)

print(f"Cleaned {len(changed)} files:")
for f in sorted(changed):
    print(f"  {f}")
