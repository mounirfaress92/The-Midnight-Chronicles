
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('epub-cache').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/styles.css',
        '/manifest.json',
        '/images/icon-512.png',
        '/html-0-0.html',
        '/html-0-1.html',
        '/html-0-2.html',
        '/html-0-3.html',
        '/html-0-4.html',
        '/html-0-5.html',
        '/html-0-6.html',
        '/html-0-7.html',
        '/html-0-8.html',
        '/html-0-9.html',
        '/html-0-10.html'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
