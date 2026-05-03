// Cart Hijacker for Blinkit, Zepto, Swiggy, BigBasket
function injectCartHijacker() {
  // Prevent duplicate injections
  if (document.getElementById('fantastic-food-hijacker')) return;

  const hijacker = document.createElement('div');
  hijacker.id = "fantastic-food-hijacker";
  hijacker.innerHTML = `
    <div style="
      position: fixed;
      bottom: 24px;
      left: 24px;
      background: linear-gradient(135deg, #0A1A10, #1A3C2B);
      border: 2px solid #52B788;
      border-radius: 16px;
      box-shadow: 0 15px 35px rgba(0,0,0,0.6);
      padding: 16px;
      z-index: 9999999;
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 300px;
      font-family: system-ui, -apple-system, sans-serif;
      animation: bounceIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    ">
      <style>
        @keyframes bounceIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        #ff-hijacker-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(244, 162, 60, 0.3);
        }
      </style>
      <div style="display: flex; justify-content: space-between; align-items: start;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="background: #1A5E38; padding: 6px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F4A23C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              <path d="M11 14l-2-4h4l-1-4" stroke="#F4A23C" stroke-width="3"></path>
            </svg>
          </div>
          <span style="color: #F4A23C; font-weight: 900; font-size: 16px; letter-spacing: 0.5px;">WAIT! Don't overpay.</span>
        </div>
        <button id="ff-hijacker-close" style="background: none; border: none; color: #f87171; cursor: pointer; font-size: 20px; padding: 0; line-height: 1;">&times;</button>
      </div>
      
      <p style="color: #B3DBBD; font-size: 13px; margin: 0; line-height: 1.5;">
        <strong>Fantastic Food</strong> found cheaper alternatives for items in your cart on other apps.
      </p>

      <button id="ff-hijacker-btn" style="
        background: linear-gradient(135deg, #F4A23C, #E69A28);
        color: #0F2419;
        border: none;
        border-radius: 8px;
        padding: 12px;
        font-weight: 800;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
      ">
        <span>🛒 Compare Cart Prices Now</span>
      </button>
    </div>
  `;
  document.body.appendChild(hijacker);

  document.getElementById('ff-hijacker-close').addEventListener('click', () => {
    hijacker.style.display = 'none';
    // Don't show again for this session
    sessionStorage.setItem('ff-hijacker-dismissed', 'true');
  });

  document.getElementById('ff-hijacker-btn').addEventListener('click', () => {
    // In a fully advanced version, we would parse the DOM for cart items and send them.
    // For now, we redirect them to the compare page.
    window.open('https://www.fantasticfood.in/compare', '_blank');
    hijacker.style.display = 'none';
  });
}

// Very basic detection: wait a few seconds after page load to let the user browse, 
// or trigger when a "cart" element is clicked.
setTimeout(() => {
  if (!sessionStorage.getItem('ff-hijacker-dismissed')) {
    injectCartHijacker();
  }
}, 5000);
