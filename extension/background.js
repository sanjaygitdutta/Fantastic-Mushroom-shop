chrome.runtime.onInstalled.addListener(() => {
  // Create context menu for highlighted text
  chrome.contextMenus.create({
    id: "aika-text",
    title: "👩‍🍳 Ask Chef Aika to find these on Fantastic Food",
    contexts: ["selection"]
  });

  // Create context menu for right-clicking images
  chrome.contextMenus.create({
    id: "aika-image",
    title: "👩‍🍳 Ask Chef Aika to analyze this food image",
    contexts: ["image"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const BASE_URL = "https://www.fantasticfood.in";

  if (info.menuItemId === "aika-text" && info.selectionText) {
    // Forward the selected text to the basket for price comparison
    const ingredients = encodeURIComponent(info.selectionText);
    const targetUrl = `${BASE_URL}/basket?prefill=${ingredients}`;
    chrome.tabs.create({ url: targetUrl });
  }

  if (info.menuItemId === "aika-image" && info.srcUrl) {
    // Forward the image URL to Chef Aika
    const targetUrl = `${BASE_URL}/chef-aika?imgUrl=${encodeURIComponent(info.srcUrl)}`;
    chrome.tabs.create({ url: targetUrl });
  }
});
