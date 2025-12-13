const CACHE_NAME = "dreamyo-cache-v1";

const ASSETS = [
  "/dreamyoapp/",
  "/dreamyoapp/home.html",
  "/dreamyoapp/style.css",
  "/dreamyoapp/logo.png",
  "/dreamyoapp/map.png",
  "/dreamyoapp/tteokbokki.png",
  "/dreamyoapp/coffee.png",
  "/dreamyoapp/hambuger.png",
  "/dreamyoapp/qr_payment.html",
  "/dreamyoapp/payment_success.html",
  "/dreamyoapp/qrdemo.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
