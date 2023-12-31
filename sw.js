// sw.js
self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("hello-world-cache").then((cache) => {
        return cache.addAll([
            "/",
            "/index.html",
            "/main.js",
            "/jysuis.js",
            "/styles.css",
            "/theo192.png"
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });