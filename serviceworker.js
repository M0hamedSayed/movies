const CASH_NAME = "default-cache";
const urlToCache = ['/movies'];

const self = this;

//install SW
self.addEventListener('install', async (e) => {
    let cache = await caches.open(CASH_NAME);
    await cache.addAll(urlToCache);
    await self.skipWaiting();
})
//listen for requests
this.addEventListener('fetch', async function (e) {
    // // console.log("test-offline");
    // if (!navigator.onLine) {
    //     // console.log("test-offline");
    //     return await e.respondWith(await caches.match(e.request) || await caches.match('/notfound'))
    // } else {
    //     // console.log("test online");
    //     return await e.respondWith(networkFirst(e.request));
    // }
    e.respondWith(
        caches.match(e.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(e.request);
            }
            )
    );
})

//Activate SW
self.addEventListener('activate', async (e) => {

    return self.clients.claim();
})


async function networkFirst(req) {
    let dynamicCache = await caches.open('dynamic-cache');
    let res = await fetch(req);
    await dynamicCache.put(req, res.clone());
    return res;
}