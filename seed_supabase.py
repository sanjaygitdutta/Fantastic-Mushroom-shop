import os
import re
import json
import requests
import time
from dotenv import load_dotenv

load_dotenv('.env.local')

SUPABASE_URL = os.getenv('NEXT_PUBLIC_SUPABASE_URL')
SUPABASE_KEY = os.getenv('NEXT_PUBLIC_SUPABASE_ANON_KEY')

def parse_mock_db():
    filepath = 'src/data/mockPrices.ts'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the MOCK_DB object
    match = re.search(r'export const MOCK_DB: Record<string, CompareResult> = \{(.*?)\};', content, re.DOTALL)
    if not match:
        print("MOCK_DB not found!")
        return {}

    # Extract items using a regex that captures keys and their objects
    # This is a simplified parser for the specific structure we have
    items = {}
    item_blocks = re.findall(r'(\w+):\s*\{(.*?)\s*\},', match.group(1), re.DOTALL)
    
    for key, block in item_blocks:
        try:
            # Extract metadata
            canonical_name = re.search(r"canonicalName:\s*'([^']+)'", block).group(1)
            category = re.search(r"category:\s*'([^']+)'", block).group(1)
            icon = re.search(r"icon:\s*'([^']+)'", block).group(1)
            
            # Extract prices
            prices = []
            price_matches = re.findall(r"p\('([^']+)',\s*'([^']+)',\s*(\d+),\s*(\d+),\s*(\d+),\s*'([^']+)',\s*'([^']+)',\s*(true|false),\s*'([^']+)'\)", block)
            
            for p_match in price_matches:
                prices.append({
                    'platform_id': p_match[0],
                    'canonical_name': p_match[1],
                    'price': int(p_match[2]),
                    'in_stock': p_match[7] == 'true'
                })
            
            items[key] = {
                'id': key,
                'canonical_name': canonical_name,
                'category': category,
                'icon': icon,
                'prices': prices
            }
        except Exception as e:
            print(f"Error parsing item {key}: {e}")
            
    return items

def seed():
    items = parse_mock_db()
    print(f"Found {len(items)} items in mockPrices.ts")
    
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "resolution=merge-duplicates"
    }

    # 1. Upsert Products
    product_data = []
    for key, item in items.items():
        product_data.append({
            "id": item['id'],
            "canonical_name": item['canonical_name'],
            "category": item['category'],
            "icon": item['icon']
        })

    print(f"Upserting {len(product_data)} products...")
    for i in range(0, len(product_data), 100):
        batch = product_data[i:i+100]
        res = requests.post(f"{SUPABASE_URL}/rest/v1/products", headers=headers, json=batch)
        if res.status_code >= 400:
            print(f"Error seeding products {i}-{i+100}: {res.text}")
        else:
            print(f"OK: Seeded products {i} to {min(i+100, len(product_data))}")

    # 2. Upsert Prices
    price_data = []
    for key, item in items.items():
        for p in item['prices']:
            price_data.append({
                "item_name": item['id'],
                "platform_id": p['platform_id'],
                "canonical_name": p['canonical_name'],
                "price": p['price'],
                "in_stock": p['in_stock'],
                "last_updated": "now()"
            })

    print(f"Upserting {len(price_data)} price points...")
    for i in range(0, len(price_data), 200):
        batch = price_data[i:i+200]
        res = requests.post(f"{SUPABASE_URL}/rest/v1/live_prices", headers=headers, json=batch)
        if res.status_code >= 400:
            print(f"Error seeding prices {i}-{i+200}: {res.text}")
        else:
            print(f"OK: Seeded prices {i} to {min(i+200, len(price_data))}")

    print("Migration Complete!")

if __name__ == "__main__":
    seed()
