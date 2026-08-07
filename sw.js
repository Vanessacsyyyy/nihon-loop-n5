const CACHE='nihon-loop-v5';
const CORE=['./','./index.html','./styles.css','./lesson-data.js','./app.js','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(res=>{if(e.request.url.includes('/public/photos/')){const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return res;}))));
