const CASH_NAME = "default-cache";
const urlToCache = ['/movies'];

const self = this;

//install SW
self.addEventListener('install', async (e) => {
    let cache = await caches.open(CASH_NAME);
    await cache.addAll(urlToCache);
    await self.skipWaiting();
})
console.log(this);
//listen for requests
this.addEventListener('fetch', async function (e) {
    // console.log("test-offline");
    if (!navigator.onLine) {
        // console.log("test-offline");
        return await e.respondWith(await caches.match(e.request) || await caches.match('/notfound'))
    } else {
        // console.log("test online");
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
    // console.log('Claiming control');
    return self.clients.claim();
})


async function networkFirst(req) {
    let dynamicCache = await caches.open('dynamic-cache');
    let res = await fetch(req);
    await dynamicCache.put(req, res.clone());
    return res;
}