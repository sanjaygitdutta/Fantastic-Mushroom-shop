import urllib.request

try:
    url = "https://www.fantasticfood.in/"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
    with urllib.request.urlopen(req) as response:
        print("STATUS:", response.status)
        for k, v in response.headers.items():
            print(f"{k}: {v}")
except Exception as e:
    print("ERROR:", e)
