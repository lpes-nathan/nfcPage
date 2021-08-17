// This is the "Offline page" service worker

const CACHE = "site-static";

const offlineFallbackPage = [
  '/',
  '/script.js',
  '/style.css',
  '/3dloader/',
  '/img/'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE).then(cache => {
      cache.addAll(offlineFallbackPage);
    })
  )
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  )
});