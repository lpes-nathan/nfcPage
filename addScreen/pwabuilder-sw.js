// This is the "Offline page" service worker

const staticCacheName = "site-static-v2.2";

const assets = [
  './',
  './script.js',
  './manifest.json',
  './style.css',
  './img/'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      cache.addAll(assets);
    })
  )
});

self.addEventListener('activate', evt => {
  // Cache versioning
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      )
    })
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});