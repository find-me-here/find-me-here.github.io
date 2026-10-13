/*
 * The installed app's service worker, registered by components/pwa/PwaSetup.tsx in production only.
 *
 * It keeps the app opening without a connection and stays out of the way otherwise:
 * - Pages: the network first, always, so a deploy is seen at once. A copy of each page opened is kept (by its path, never its
 *   query, which can carry a one-time sign-in code) and answered only when the network fails.
 * - /_next/static/: cache first. Those files are named by their content, so a kept copy is never stale.
 * - Anything else, the API above all (another origin, signed in by a token): not touched. A person's data is never kept here,
 *   where whoever signs in next on the same phone could read it.
 *
 * Bump VERSION to drop every kept file on the next visit.
 */
const VERSION = "v1";
const PAGES = `pages-${VERSION}`;
const ASSETS = `assets-${VERSION}`;
/** How many of each are kept, oldest dropped first: every deploy names its files anew, so the old ones would only pile up. */
const LIMITS = { [PAGES]: 60, [ASSETS]: 400 };

const OFFLINE_PAGE = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Offline</title><style>body{margin:0;min-height:100svh;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif;background:#f4f5fa;color:#1a212c;text-align:center;padding:24px}@media (prefers-color-scheme:dark){body{background:#1a212c;color:#f4f5fa}}button{margin-top:16px;font:inherit;font-weight:600;padding:10px 18px;border-radius:999px;border:0;background:#1a212c;color:#f4f5fa}@media (prefers-color-scheme:dark){button{background:#f4f5fa;color:#1a212c}}</style></head><body><div><h1 style="font-size:20px">You’re offline</h1><p style="opacity:.7;font-size:14px">This page hasn’t been opened on this device yet. Reconnect and try again.</p><button onclick="location.reload()">Try again</button></div></body></html>`;

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== PAGES && key !== ASSETS).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(page(request, url, event));
  } else if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(asset(request));
  }
});

async function page(request, url, event) {
  const key = url.origin + url.pathname;
  try {
    const response = await fetch(request);
    if (response.ok && response.type === "basic") {
      const copy = response.clone();
      event.waitUntil(keep(PAGES, key, copy));
    }
    return response;
  } catch {
    const kept = await caches.match(key, { cacheName: PAGES });
    return kept ?? new Response(OFFLINE_PAGE, { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } });
  }
}

async function asset(request) {
  const kept = await caches.match(request, { cacheName: ASSETS });
  if (kept) return kept;
  const response = await fetch(request);
  if (response.ok) keep(ASSETS, request, response.clone());
  return response;
}

async function keep(cacheName, key, response) {
  const cache = await caches.open(cacheName);
  await cache.delete(key);
  await cache.put(key, response);
  const keys = await cache.keys();
  await Promise.all(keys.slice(0, Math.max(0, keys.length - LIMITS[cacheName])).map((old) => cache.delete(old)));
}
