document.getElementById('scan-btn').addEventListener('click', async () => {
    const btn = document.getElementById('scan-btn');
    const btnText = btn.querySelector('.btn-text');
    const loader = btn.querySelector('.loader');
    const status = document.getElementById('status');
  
    // UI Loading state
    btn.disabled = true;
    btnText.classList.add('hidden');
    loader.classList.remove('hidden');
    
    status.innerText = "Extracting recipe text...";
    status.className = "status-msg"; // reset classes
  
    try {
      // 1. Get the current active tab
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
      if (!tab || !tab.id || tab.url.startsWith('chrome://')) {
          throw new Error('Cannot scan this page type.');
      }
  
      // 2. Inject script to extract the text of the page
      const injectionResults = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => document.body.innerText,
      });
  
      const pageText = injectionResults[0].result;
  
      if (!pageText || pageText.length < 50) {
          throw new Error('No readable text found on this page.');
      }
  
      status.innerText = "AI analyzing ingredients...";
  
      // 3. Send the text to the Fantastic Food Backend API
      // Since this is a local project right now, we assume Vercel creates the domain or localhost
      // In production you would hardcode this to 'https://yourdomain.com/api/parse-ingredients'
      // We will assume 'http://localhost:5173/api/parse-ingredients' temporarily OR assume absolute domain if deployed
      // Let's use the actual vercel/Vite api route technique. If built via Vercel, /api works from root URL. 
      // We need absolute URL for extension. We'll use localhost for testing.
      const API_URL = 'http://localhost:5173/api/parse-ingredients'; 
  
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: pageText })
      });
  
      const data = await response.json();
  
      if (!response.ok || !data.ingredients) {
        throw new Error(data.error || 'Failed to parse ingredients.');
      }

      if (data.ingredients.length === 0) {
          throw new Error('No food ingredients found in this text.');
      }
  
      status.innerText = `Found ${data.ingredients.length} items! Redirecting...`;
  
      // 4. Build the Deep Link
      const ingredientsString = data.ingredients.map(i => encodeURIComponent(i)).join(',');
      const targetUrl = `http://localhost:5173/basket?prefill=${ingredientsString}`;
  
      // 5. Open fantastic food in a new tab
      setTimeout(() => {
        chrome.tabs.create({ url: targetUrl });
        window.close(); // Close the popup
      }, 1000);
  
    } catch (err) {
      console.error(err);
      status.innerText = err.message || "An error occurred.";
      status.classList.add('error-msg');
      
      // Reset UI
      btn.disabled = false;
      btnText.classList.remove('hidden');
      loader.classList.add('hidden');
    }
  });
