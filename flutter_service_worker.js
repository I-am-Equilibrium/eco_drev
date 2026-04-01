'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "737c56e9b22ac86664eec91879dfc6ed",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fb4bde95dfd53d24353fc056224cc30d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6446615ec98301fc63a12bce91bd3ad3",
".git/logs/refs/heads/main": "c0cb16db2049fbd0b0e8e7d334d610b2",
".git/logs/refs/remotes/origin/main": "2b86f28ff391b4884cd7b2bf9dc1f236",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/0f/5d0569852aec227b83d26069bf7f797eb871eb": "3b5aed26d10f5b55c2b5ac787c2bb539",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/24/a17b6aa786b5bd33bc4f24a2499aeb1aacddbd": "932198de7d325e469e27492e827c3862",
".git/objects/24/d5dbe921b1d2c4adaff6c66a5b20d7a584ab53": "e1da90f0085efa9adc730c3b05f67af5",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/7540414e5815fb370d76a7485cf77620750c70": "f1c4b1a6c3f0b9867a36474bede0324a",
".git/objects/2a/95264750146af70f746a1239cf3375a7f9a56c": "c33f25141805a265cc52d2c3879359e4",
".git/objects/2e/1ff6b7b5985bc2549de420decf8870c23049ae": "6c3afde05fb6ddb0f5ba96f4101d6ea7",
".git/objects/2f/62d66ef3d43e208f0ceb14b30528bc1cd3c996": "4f88ca9e8002ead36ad2c4d0747e2ba9",
".git/objects/2f/d8542b7ee5698a8409a9963db1a11e5cc5ff08": "31d33e41fc8a80f5980306caaf4cc356",
".git/objects/30/cf15d6c8eb8a4ffb59d63f75506cfb1d18b61a": "8d7523156d0ec960f5867c1608f1de28",
".git/objects/36/fee4554a3cb3aeac973af088ed2007f89db16b": "1a21a5f56162ff30cac53a3a86b6bd75",
".git/objects/3b/394a127d3e0156e203782a4a3baa91e5fc16b8": "9d17f6a84817bfe81cd0404ad67d12fc",
".git/objects/41/b760c8f86a3f97655cd39defa51d4eca52d11c": "f52c333f94317a197ee42e1dbcf4fb8b",
".git/objects/46/04ba39f5d4930cabc182725c56cfdb966293e9": "dd096a0a2e0cd8c9a743e325de937df2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/7356fe5b7b6a87f61bd1e80153f0c9cb4502dd": "52ce6d9c675d000b94d75eab369a693b",
".git/objects/48/c757b0dc9a9f23b9498140e4c593d2a713c54d": "1065478c2d8b6b590ba7f0f1d892b6c5",
".git/objects/49/31a01a2164893c9e3250cd704cc7770a1315ba": "8986178e3c79d778b111bb4353a45ab1",
".git/objects/4b/83b1a5e735f6246d0dddaa2eb878b8fc75d06e": "6d7a44c9a2eb40aeb6861a5f2f1d294a",
".git/objects/4b/b8febf4149dd2e7b4fea17004d33185cd5ea86": "e3ac7b3352b6d70d86c35cb3e31cd370",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/65/1faf9218501347d5f5e4cee04b222c438f2aff": "4c320e29d8f4667ed3f5228b9b6fda43",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/09101ba3d840316d5ade51ea7df844eb5af25c": "b83ef1cdcb95028a88d5d4297181cad9",
".git/objects/6f/7f942e314ab02c163b332064fb20d6d42918fb": "4a522e0e1e6a36c7448d5dfb5081e4bc",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/82/1e9de93b806d517e36086f1735cb5fa06be04a": "6b2dd4ad0708e81b168dd46e514e82f7",
".git/objects/87/484fc20f6bf070865024f366dd24c96be529b7": "a42de65962ea11bb785782a6345c91b1",
".git/objects/88/54f34e51630e5f00aae9f93983bac11da7dbdf": "e3af73b0ee38ed1fb846aeda955ec3c4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/7ecea7739fbef70e262f095e962a33ee24256f": "96219310f51dab01fcd39d2d52ffcfb9",
".git/objects/92/e250a71658bbe1b735562ee894ec7940d20bd1": "188efa0924bd71fb38a4d545fecdcf92",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/b0/2820bb460bd675cc05dcf7c7727649de8fcd09": "80336222c977a5d298e3ff6fc5e2af01",
".git/objects/b6/4509dd326302efcf36bb84a62712bc03b623a6": "f4e53a77f7fbdb5d83b2c9760a9a2860",
".git/objects/b6/a786d6da2382a8b367fabb5dc50d909a3afa9d": "57338220fad79af2be0307b7fdfdf84d",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/48041e2555607f0727c7d11bbf1f7ef8db8b8f": "7f383dcbc3598c760f633c5ef0c668ae",
".git/objects/bb/95caea4c8fc46194974186feae2a8fa1ea0553": "1ae908a771d58ec5a869664f8987f4bd",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c8/ebf7558f0b46863ab3703dc9abda1a43a88c57": "c4678e0aca17560c1f9a8f38a7979d27",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d0/7118d24bd28750170093452d3431509e0e4365": "0d04d55bfb3f8b9fc938abb4df1a48c9",
".git/objects/d1/0225635415ab2932d3dfd446158cdb3302c754": "0a97dae1c2e31e51a989e789560720c2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/df/beca09c630e81e977aea280333b052c9e5455d": "c44c1c579516b039dd8c9bd27b90aa90",
".git/objects/e0/fda36df23e60625217f4f2ae6fd76ebd8a792a": "98c685f25518559dfe1d548f217d21ce",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/0290dee73c08627a690ec2e439e9b246a9494a": "0b6ee985075ae0287fd5c7bba7582b6e",
".git/objects/e9/7cc3d5f34ae8b68cdbc1eec01c703a1b70a2a9": "cb783de1ad2daa3e1abf15a55405fbdf",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/ea8d4f090683abddec300a94c04e379f6b2069": "fe4ba13758085f87e1ea4228fb66174d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f0/624a638131d29777ca8c91f24206ff70be985d": "278b52edabfcdf4fdf7435c4b8d31287",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "c2ed410c2d0ebca8e38e16b0705f4981",
".git/refs/remotes/origin/main": "c2ed410c2d0ebca8e38e16b0705f4981",
"assets/AssetManifest.bin": "3ad20395be7fbef8603698b07fcda4d8",
"assets/AssetManifest.bin.json": "d97b1a0772561c065da22d55bcb776f0",
"assets/AssetManifest.json": "a56197f765c03c0a31b0e7f667f01438",
"assets/assets/icons/arrow-right.svg": "218cb707cdf545d4934882df111cc44c",
"assets/assets/icons/axe.svg": "62d04048463c91b081c36267d7ac6f9c",
"assets/assets/icons/check.svg": "87d0b68570de80d0c4649ffb3ff3957e",
"assets/assets/icons/clock.svg": "2c9e615b5481ecf8734125532ef0d9d9",
"assets/assets/icons/mail.svg": "09f5ffded5ad83a47221f6a5e823cffc",
"assets/assets/icons/map-pin.svg": "1341b2b8aff30adf3a63e095731bbc2e",
"assets/assets/icons/medal.svg": "ce1fb3f7db301b353b69650835bc0037",
"assets/assets/icons/menu.svg": "db85d013a8268ed51593a449179f0554",
"assets/assets/icons/phone.svg": "cca3875882bbfebfc74b1cc189f21975",
"assets/assets/icons/scissors.svg": "d8bc6c994ca3d0bb26ff74244c19a37d",
"assets/assets/icons/seedling.svg": "f2608ae1406c69680347937822c1dc47",
"assets/assets/icons/shield.svg": "7331fe89c32642009810946c6e950a50",
"assets/assets/icons/thumb-up.svg": "d14a3548fcf53086534c789c352f86f7",
"assets/assets/icons/tree.svg": "9bf49aa90a1b4cc95d1b1b3bf2e6dc5b",
"assets/assets/icons/truck.svg": "c11b6886f9d3a319541353dccc0b94d4",
"assets/assets/icons/users.svg": "9976dfe403b858130937b2095e52d6ad",
"assets/assets/images/eco_drev_logo.png": "5fd11c4eaa7a125822bead454129ed8b",
"assets/assets/images/image_1.jpg": "8ced6d7b1cf72d694628a34932629c2a",
"assets/assets/images/image_2.jpg": "5db4e8d3e60898607c39494b35ba3ba4",
"assets/assets/images/image_3.jpg": "2566528432ed9345f63ae583f6440239",
"assets/assets/images/image_main.jpg": "da5bf0cc91e6d9907a3a2db3740883e0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4b2aefd6f10794a591343603dfd9fccb",
"assets/NOTICES": "dca9fb8b236ba4b5a8b161d68d4a2e5e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "a9eaf68a2ee1a45c40d4fed5c7b70265",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cd3c8d6eb7b8535275e03f85986f8d6a",
"/": "cd3c8d6eb7b8535275e03f85986f8d6a",
"main.dart.js": "724a70ae2a259a97146f069d22d878ec",
"manifest.json": "c420f0fa898de2059f0e1cf8dcc19e52",
"version.json": "89bf482bd6aa5286832a35e2f307eb92"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
