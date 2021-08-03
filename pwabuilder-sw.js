// This is the "Offline page" service worker

// importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "site-static";

const offlineFallbackPage = [
  '/',
  '/script.js',
  '/style.css',
  '/img/' ,
  '/icons/'
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

