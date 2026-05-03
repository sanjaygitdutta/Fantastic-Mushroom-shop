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
      background: linear-gradient(135deg, #2D1B36, #0F2419);
      border: 2px solid #F4A23C;
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
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 22px;">🛑</span>
          <span style="color: #F4A23C; font-weight: 900; font-size: 16px; letter-spacing: 0.5px;">WAIT! You might be overpaying.</span>
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
