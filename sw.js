// Service worker mínimo: hace que Chrome ofrezca "Instalar aplicación".
// Siempre va a internet, así la app se actualiza sola al subir cambios.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request));
});
