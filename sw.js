self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('deposit-tracker-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/Branch Cash & Wholesale Deposit Tracker.html'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
