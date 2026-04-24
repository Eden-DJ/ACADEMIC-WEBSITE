self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('eden-math-v1').then((cache) => cache.addAll([
      'index.html',
      'mephoto.png'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
