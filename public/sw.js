
const staticCacheName = 'site-static';
const dynamicCacheName = 'site-dynamic-v1';

const assets = [
    '/',
    'index.html',
    '/logo.png',
    '/favicon.ico',
    '/manifest.webmanifest',
    '/js/app.js',
    '/js/chunk-vendors.js',
    /*'/img/nums.e1c41590.png',*/
    './pwacalc/src/assets/nums.png',
    'https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
    './pwacalc/src/assets/nums1.jpg',
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    'https://cdn.plot.ly/plotly-1.35.2.min.js',
    'https://pagecdn.io/lib/mathjs/7.1.0/math.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css',
    'https://unpkg.com/mathjs@7.1.0/dist/math.min.js',
    './pwacalc/src/main.js',
    './pwacalc/src/App.vue',
    './pwacalc/src/views/home.css',
    './pwacalc/src/views/top.css',
    './pwacalc/src/views/plot.css',
    './pwacalc/src/views/3.vue',
    './pwacalc/src/views/home.vue',
    './pwacalc/src/views/top.vue',
    './pwacalc/src/views/showRes.vue',
    './pwacalc/src/views/NOTabout.vue',

]

// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if(keys.length > size){
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};


self.addEventListener('install', evt => {
    console.log('service worker installed');
    evt.waitUntil(
        caches.open(staticCacheName).then((cache) => {
          console.log('caching shell assets');
          cache.addAll(assets);
        })
      );
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
  });/* */

// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          limitCacheSize(dynamicCacheName, 15);

          return fetchRes;
        })
      });
    }).catch(() => caches.match('./pwacalc/src/main.js'))
  );
});