const filesToCache = [
  './assets/loading.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('timer-app-v1').then(function (cache) {
      return cache.addAll(filesToCache);
    })
  )
});

self.addEventListener('activate', function (e) {
  console.log('activate', e);
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  )
});
