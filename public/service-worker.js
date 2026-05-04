self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          console.log('[Kill Switch SW] Deleting old cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      self.registration.unregister().then(() => {
        console.log('[Kill Switch SW] Unregistered successfully.');
      });
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', (e) => {
  // Do nothing. Let the browser handle the network request normally.
});
