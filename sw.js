/*
 * Retired. For a while the site installed as an app and this worker kept its pages for offline use; that was dropped
 * (an iPhone home-screen app can't receive shares, which was the point). A browser that registered the old worker still
 * checks this file for updates, so it is kept, as a worker that deletes what the old one kept and unregisters itself.
 * `RetireServiceWorker` (components/layout/) unregisters it from the page side as well. Both can go once no visitor
 * from before the change is left — give it a few months.
 */
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((key) => /^(pages|assets)-/.test(key)).map((key) => caches.delete(key)));
      await self.registration.unregister();
      // Pages it was answering load again straight from the network.
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })(),
  );
});
