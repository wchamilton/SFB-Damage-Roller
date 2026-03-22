const CACHE_VERSION = 'sfb-damage-roller-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_VERSION);
      const scopePath = new URL(self.registration.scope).pathname;
      const assets = [
        scopePath,
        `${scopePath}index.html`,
        `${scopePath}manifest.webmanifest`,
        `${scopePath}favicon.svg`
      ];
      await cache.addAll(assets);
      self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (key !== CACHE_VERSION) {
            return caches.delete(key);
          }
          return Promise.resolve();
        })
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_VERSION);
      const cached = await cache.match(event.request);
      if (cached) {
        return cached;
      }

      try {
        const response = await fetch(event.request);
        if (response && response.ok) {
          cache.put(event.request, response.clone());
        }
        return response;
      } catch (error) {
        if (event.request.mode === 'navigate') {
          const scopePath = new URL(self.registration.scope).pathname;
          const offlineShell = await cache.match(`${scopePath}index.html`);
          if (offlineShell) {
            return offlineShell;
          }
        }
        throw error;
      }
    })()
  );
});