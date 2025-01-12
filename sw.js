const cacheName = 'font-cache-v1';
const assetsToCache = [
  '/path/to/tabler-icons.ttf?v2.33.0'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Fetch from cache
self.addEventListener('fetch', (event) => {
  if (event.request.url.endsWith('.ttf')) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
