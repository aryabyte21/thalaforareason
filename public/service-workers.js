/* eslint-disable no-restricted-globals */
// public/service-worker.js

const CACHE_NAME = "my-app-cache-v3";

// Install a service worker and cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        // Add static URLs to cache
        return cache.addAll([
          // List of static URLs to cache,
          // e.g., '/', '/index.html', '/static/js/main.chunk.js', etc.
        ]);
      })
      .catch((error) => {
        console.error("Failed to open cache:", error);
      })
  );
});

// Cache and return requests
self.addEventListener("fetch", (event) => {
  // Check if the request is for an image from the assets directory
  if (event.request.url.includes("/static/media/")) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          // Return the cached response
          return response;
        }

        // Fetch the resource from the network, cache it, and return it
        return fetch(event.request).then((response) => {
          // Check for a valid response
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        });
      })
    );
  }
});

// Activate the service worker and clean up old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
