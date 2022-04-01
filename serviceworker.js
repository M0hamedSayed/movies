const CASH_NAME = "default-cache";
const urlToCache = ['/index.html'];

const self = this;

//install SW
self.addEventListener('install', async (e) => {
    console.log('From Install');
    let cache = await caches.open(CASH_NAME);
    await cache.addAll(urlToCache);
    await self.skipWaiting();
})

//listen for requests
self.addEventListener('fetch', async (e) => {
    if (!navigator.onLine) {
        console.log("test-offline");
        return await e.respondWith(await caches.match(e.request) || await caches.match('/notfound'))
    } else {
        console.log("test online");
        return await e.respondWith(networkFirst(e.request));
    }

})

//Activate SW
self.addEventListener('activate', async (e) => {
    // const cacheWhiteList = [];
    // cacheWhiteList.push(CASH_NAME);
    // cacheWhiteList.push('dynamic-cache');
    // let allCaches = await caches.keys();
    // allCaches.map((cacheName) => {
    //     if (!cacheWhiteList.includes(cacheName)) {
    //         return caches.delete(cacheName)
    //     }
    // })

})


async function networkFirst(req) {
    let dynamicCache = await caches.open('dynamic-cache');
    let res = await fetch(req);
    await dynamicCache.put(req, res.clone());
    return res;
}