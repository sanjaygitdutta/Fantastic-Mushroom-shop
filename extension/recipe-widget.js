// Check if the current page is a Recipe page using Schema.org JSON-LD
function isRecipePage() {
  const scripts = document.querySelectorAll('script[type="application/ld+json"]');
  for (let script of scripts) {
    try {
      const data = JSON.parse(script.innerText);
      // It might be an array of schemas or a single schema
      if (Array.isArray(data)) {
        if (data.some(item => item['@type'] === 'Recipe' || item['@type']?.includes('Recipe'))) return true;
      } else {
        if (data['@type'] === 'Recipe' || data['@graph']?.some(item => item['@type'] === 'Recipe')) return true;
      }
    } catch (e) {
      // Ignore parse errors on malformed JSON
    }
  }
  // Fallback: check URL or title for "recipe"
  const url = window.location.href.toLowerCase();
  const title = document.title.toLowerCase();
  if (url.includes('/recipe/') || title.includes('recipe')) {
    return true;
  }
  return false;
}

// Inject the beautiful widget if it's a recipe page
if (isRecipePage()) {
  const widget = document.createElement('div');
  widget.id = "fantastic-food-widget";
  widget.innerHTML = `
    <div style="
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: linear-gradient(135deg, #0A1A10, #1A3C2B);
      border: 1px solid #52B788;
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.5);
      padding: 16px;
      z-index: 999999;
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 280px;
      font-family: system-ui, -apple-system, sans-serif;
      animation: slideIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    ">
      <style>
        @keyframes slideIn {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        #fantastic-food-widget-btn:hover {
          transform: scale(1.05);
        }
      </style>
      <div style="display: flex; justify-content: space-between; align-items: start;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <img src="https://www.fantasticfood.in/logo.png" style="width: 24px; height: 24px; border-radius: 4px; object-fit: contain; background: #0F2419; padding: 2px;" alt="Fantastic Food Logo" />
          <span style="color: white; font-weight: 800; font-size: 14px;">Fantastic Food</span>
        </div>
        <button id="fantastic-food-close" style="background: none; border: none; color: #f87171; cursor: pointer; font-size: 18px; padding: 0; line-height: 1;">&times;</button>
      </div>
      
      <p style="color: #B3DBBD; font-size: 13px; margin: 0; line-height: 1.4;">
        Don't overpay for these ingredients! Get them delivered via Blinkit or Zepto at the lowest price.
      </p>

      <button id="fantastic-food-widget-btn" style="
        background: linear-gradient(135deg, #F4A23C, #D6AD60);
        color: #0F2419;
        border: none;
        border-radius: 8px;
        padding: 10px;
        font-weight: 800;
        font-size: 13px;
        cursor: pointer;
        transition: transform 0.2s;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
      ">
        <span>⚡ Compare Prices</span>
      </button>
    </div>
  `;
  document.body.appendChild(widget);

  // Close logic
  document.getElementById('fantastic-food-close').addEventListener('click', () => {
    widget.style.display = 'none';
  });

  // Action logic
  document.getElementById('fantastic-food-widget-btn').addEventListener('click', async () => {
    const btn = document.getElementById('fantastic-food-widget-btn');
    btn.innerHTML = "<span>Analyzing Recipe...</span>";
    btn.style.opacity = "0.8";

    try {
      const pageText = document.body.innerText;
      const API_URL = 'https://www.fantasticfood.in/api/parse-ingredients'; 
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: pageText })
      });

      const data = await response.json();
      if (!response.ok || !data.ingredients || data.ingredients.length === 0) {
        throw new Error();
      }

      const ingredientsString = data.ingredients.map(i => encodeURIComponent(i)).join(',');
      window.open(`https://www.fantasticfood.in/basket?prefill=${ingredientsString}`, '_blank');
      widget.style.display = 'none';
    } catch {
      btn.innerHTML = "<span>❌ Failed. Try selecting text.</span>";
      setTimeout(() => widget.style.display = 'none', 2000);
    }
  });
}
