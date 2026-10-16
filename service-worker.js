self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                'index.html',
                'style.css', // Agar alohida CSS fayli bo'lsa
                'script.js', // Agar alohida JS fayli bo'lsa
                'icon-192x192.png',
                'icon-512x512.png'
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
