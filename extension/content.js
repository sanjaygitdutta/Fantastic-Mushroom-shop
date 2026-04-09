/**
 * Fantastic Food Chrome Extension - Content Script
 * This script runs directly on competitor websites.
 */

// Heuristics to extract the current product being viewed based on the platform.
// Because SPA (Single Page Applications) change content without full reloads,
// we extract the product precisely when the user clicks the compare button.
function extractProductName() {
  const url = window.location.href;
  let productName = '';

  try {
    // Strategy 1: Look for the main H1 tag (standard for product pages)
    const h1 = document.querySelector('h1');
    if (h1 && h1.innerText && h1.innerText.length > 2) {
      productName = h1.innerText.trim();
    } 
    // Strategy 2: If no H1, fall back to the document title but strip the brand
    else {
      let title = document.title || '';
      
      // Remove common branding from titles
      title = title.replace(/Buy | Online at Best Price(s)?|- Blinkit|- Zepto|- Bigbasket|- Swiggy Instamart|- JioMart|- Flipkart/gi, '');
      title = title.replace(/\|.*/, ''); // Remove anything after a pipe
      
      if (title.trim().length > 0) {
        productName = title.trim();
      }
    }

    // Clean up any extra weights/details if it's too long, but usually keeping it exact is better for search
    // Max reasonable length for a search query
    if (productName.length > 50) {
      productName = productName.substring(0, 50);
    }

    return productName;
  } catch (err) {
    console.error('FantasticFood Ext:', err);
    return '';
  }
}

function handleCompareClick() {
  // Grab the product dynamically at the moment of click
  const product = extractProductName();
  
  // Decide the URL
  let targetUrl = 'https://www.fantasticfood.in/compare';
  
  if (product && product.toLowerCase() !== 'home' && product.toLowerCase() !== 'grocery') {
    // If we confidently found a product, deeplink directly to the search comparison 
    targetUrl = `https://www.fantasticfood.in/compare?q=${encodeURIComponent(product)}`;
  }
  
  // Open Fantastic Food in a new tab
  window.open(targetUrl, '_blank');
}

function injectFloatingUI() {
  // Prevent duplicate injections
  if (document.getElementById('ff-ext-wrapper')) return;

  // Create the container
  const container = document.createElement('div');
  container.id = 'ff-ext-wrapper';
  container.className = 'ff-ext-container';

  // Create the tooltip
  const tooltip = document.createElement('div');
  tooltip.className = 'ff-ext-tooltip';
  
  // Create a close button for the tooltip
  const closeBtn = document.createElement('button');
  closeBtn.className = 'ff-ext-close';
  closeBtn.innerHTML = '✕';
  closeBtn.onclick = (e) => {
    e.stopPropagation();
    tooltip.classList.remove('ff-ext-visible');
    // Save preference to not show tooltip for a while
    sessionStorage.setItem('ff-ext-tooltip-dismissed', 'true');
  };
  
  const title = document.createElement('h4');
  title.className = 'ff-ext-tooltip-title';
  title.innerText = 'Overpaying?';
  
  const desc = document.createElement('p');
  desc.className = 'ff-ext-tooltip-desc';
  desc.innerText = 'Instantly compare this price with Blinkit, Zepto, and BigBasket.';
  
  const btn = document.createElement('button');
  btn.className = 'ff-ext-tooltip-btn';
  btn.innerHTML = '⚡ Find Cheaper Deals';
  btn.onclick = handleCompareClick;

  tooltip.appendChild(closeBtn);
  tooltip.appendChild(title);
  tooltip.appendChild(desc);
  tooltip.appendChild(btn);

  // Create the floating Action Button (Logo)
  const fab = document.createElement('div');
  fab.className = 'ff-ext-fab';
  fab.innerHTML = '🛒'; // Placeholder for the actual logo if we want to use an image
  fab.onclick = () => {
    // If tooltip is hidden, show it. Otherwise, search.
    if (!tooltip.classList.contains('ff-ext-visible')) {
      tooltip.classList.add('ff-ext-visible');
    } else {
      handleCompareClick();
    }
  };

  // Assemble
  container.appendChild(tooltip);
  container.appendChild(fab);
  document.body.appendChild(container);

  // Animate the tooltip in after a few seconds if not dismissed
  setTimeout(() => {
    if (sessionStorage.getItem('ff-ext-tooltip-dismissed') !== 'true') {
      tooltip.classList.add('ff-ext-visible');
      
      // Auto-hide after 10 seconds if ignored
      setTimeout(() => {
        tooltip.classList.remove('ff-ext-visible');
      }, 10000);
    }
  }, 2500);
}

// Start the extension logic
// We use a small delay to ensure the framework (React/Next) has rendered the body
setTimeout(injectFloatingUI, 1000);

// For purely client-side routed apps (like Zepto Next.js), we can optionally monitor URL changes
// to re-trigger the tooltip if they browse to a new product.
let lastUrl = location.href; 
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    // URL changed! Wait a moment for new DOM elements
    setTimeout(() => {
      const tooltip = document.querySelector('.ff-ext-tooltip');
      if (tooltip && sessionStorage.getItem('ff-ext-tooltip-dismissed') !== 'true') {
        tooltip.classList.add('ff-ext-visible');
      }
    }, 1500);
  }
}).observe(document, {subtree: true, childList: true});
