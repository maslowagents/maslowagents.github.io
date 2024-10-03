'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9edffbe7c8ed0b08b2d77bfda84b8e4d",
".git/config": "003e20d537a632906a8fe1d25ad7f90a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c694dc1c71c60d6655f1d4f0d6751304",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f262fa343b1de57b158817938bb9fb15",
".git/logs/refs/heads/main": "f262fa343b1de57b158817938bb9fb15",
".git/logs/refs/remotes/origin/main": "f72e75448c3dd546491c17008dbc60bb",
".git/objects/02/64ef637a6d99a46a8932d368433c485cc0dcc1": "90f23caed31c9fab10a8a8e390edbb79",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1a/c978f304797cfab06c2da33e66ac1fc7d743ac": "5006d4372653d47f6b94a21bcb6ddbaf",
".git/objects/1d/52385c078ba64458eb6ab1cc630f1e9cc6ac83": "6e45f8e3caf6026f76d3748b8135b0f6",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/4d6d94ac15052c6d79acd27bcef71a4e224279": "0f116e4a1a93cfd19b24af642198dce9",
".git/objects/34/f2e86aeb9b45b50dcb429e697806ebcb45d7e5": "8e188718ccf99d50fd80a682606847e3",
".git/objects/37/70aa2736a7775264e192c20327ce4d6887fe1e": "5c06f3188b55bc5f420cce57b7baa748",
".git/objects/3c/a384934bac57a9e3ee0bf840aa34454be2f637": "2e9bacadd335ca43d46c3b306a8eeed7",
".git/objects/49/4acede0c520f847f75982ca1f671fc6eaa889e": "c4a42624eaa20c8a64455bab6edd0908",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/0e24b38d447a23a32223f17b36fa0205ec75ce": "e0acddd012f19cb604edb227797011c1",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/b1eb573dac86571d212dcf65583d2361af4471": "9758fc81e8fa057a7566c104b78b9855",
".git/objects/4d/6ce6374b362acf96b1662b7393eee4fa64590a": "a0227429b23112962e4eb246b15ae942",
".git/objects/51/7419d974b4a3a7b44397141333eef347c8ee33": "f747c3dc8dc8df38c909e034c48e04f2",
".git/objects/53/dac2e21f8f013256d3159176950f6c598b4712": "30e53393f822eebaae2d9817365ff914",
".git/objects/55/a608921f530ba299826be6717cc906734b5580": "8664e35ecb7c99bc63328460d1895413",
".git/objects/57/ee07420f0410b28a5a1d6408f68c7178751609": "cbbc4c33b132c0d820662d48531ec7af",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/61/e02305df35afc8334a286506e74455431667ed": "3e756a30998790494c2f30105708a03f",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/b0cafc08b659aba4ba6b09dae8c513f224de9b": "2c617ae3f06c09edec4c97499a93c9cc",
".git/objects/74/317c7ec50da626bad8366e23b5660bbc56946e": "6801325d56213b2653be2bd31a633cca",
".git/objects/77/938a01dfe0e1345687bf61feebbf70af4aa9c7": "d157f8cc58cee80f56198cd4809f6593",
".git/objects/7a/c519ec4cffbba0c5ea21ad0601502db41d941d": "632272b0748b24537edcf647a4e7d709",
".git/objects/81/fa7423462d7edc3f57521cf37bfc0b31c663fd": "4917c034a7c1e59893ba971742674297",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/7702d20909310928d864c46afc0c17342e927e": "f4744a1b1caf031a9ae7741dc798d8cb",
".git/objects/87/dd5af1a999e83201f70f73da5a0cc70c8a2b27": "ca091b36b425f7e0a326fe9cc6dc52b0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8f/4909ce82be9c574e8c18ad5a92bcf7f6afd930": "9a94b13dc4f24fdf54fedabf74eb085d",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/0fe86c63bd546aa123aa7e37998f2914044c9b": "712d59ae6f152b71b241e81f3def8b8d",
".git/objects/96/3625f9695c295b0dab93f81ab72a840a192d8a": "a3763312285e0389e2ecb34f3449d360",
".git/objects/99/6978c337a68e3781cff81b207a2e53ebe3ab74": "a2b9a5acca07f163a281806ca666b42e",
".git/objects/99/bfbee88bf774a31456826f1870ab1930f04692": "2c1c84b746c4d09973824edfd50c894a",
".git/objects/9c/3d575dcab2b8bc4dc9032b739e92a0a08fa91d": "60d7c138341d9bf0f1d29dc03f8f911b",
".git/objects/9d/ab9c35beff4cd03482d251faa2ebfdd3be0b3f": "621a8773d0b8301bfb19f1caf3a2eef3",
".git/objects/a9/7764a7baab463bd8b9c38b83ee2a906c882adc": "f9d68fea15adb4dd258d55f9269901a0",
".git/objects/ac/bae8a599bcb21ff1d238605e3d5439d0afc24b": "e4abd51a152257b3ceb5e589a4c2dbe3",
".git/objects/ad/1c948953eca8fcb986a3280a62b66479656cd8": "9da77d0439206310b98b5a34dff15068",
".git/objects/ae/c88019ee4b13722124bcff402e31984358525c": "53487abb1162d0c3e3c0d24c7c15ccca",
".git/objects/b2/eb488861560ee40dda35e215c4dd791fef7bc7": "a5a58a852da4b1dfdabb3d6a69325024",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/0c249998cf400c88ce4b16665b2c65031631dc": "9f3a2b08323fa5e5936ac5b25484ad3e",
".git/objects/c5/2988db9c8d0639e72378334f371c9dc4e27214": "62dc43afa382264ada77781dcfd90852",
".git/objects/c6/7cdbd03e90ce3fd1efcc2faa2e6d33b71f953a": "ba26d499c9ab35f9cc1bf33a665e052c",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d0/d18e480f5d39f5712b1d2a97df785db641ca03": "755b6a4085c5bdf124c3ee5d40c4d37c",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/2887d761e346a45d9f8a6226399ebf751de9cd": "c7289ad5746a1aecc5a97aad9e2b357d",
".git/objects/d1/97cee621a126568cf8c1c32c432d0efcb3b972": "6088803312c4c9deefb6636a219bed1a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/5f5f0f3c82f04d6e498304101a5058cf8c102e": "ac4922cebbd8809ac8718ed3f7823ee4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e3/597adbf4c9f8cc1620551b546196d37d7f9f5d": "27dbb1d19a97341eb575982beb0635c9",
".git/objects/e4/21a2a4a0fb0a79cdc5e67e9c2b8919832a6b29": "9f9daf8fb35a1bf647f6aefc094d2d04",
".git/objects/e4/859f0a18b08e689c0866e3fda477b4f5d38027": "df762c8596ce394464b16a82469d060e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/aae0e82f8bb17ebdae646db01bd342dc263415": "fa82983c8f34c01169b790fe662d5d6d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/1bb92fc499ac2e31a88003fca4286e32609ba3": "62532adf06bb7e5e19434758d5400cc8",
".git/refs/heads/main": "5dd7ffb6cafeb9470defc34fcf2efcf0",
".git/refs/remotes/origin/main": "5dd7ffb6cafeb9470defc34fcf2efcf0",
"404.html": "50af3feaff85fa0015262073091fe370",
"assets/AssetManifest.bin": "19bdb6efe5d4ec3d6125dc4647a38b1e",
"assets/AssetManifest.bin.json": "451ea7c895f96867bf5aed15b6be45a7",
"assets/AssetManifest.json": "68bf420d89ab9765e2b498d8af8b3c50",
"assets/assets/animations/next_agent_lottie.json": "ce4b9f42f2b42aedf130797284a8930e",
"assets/assets/fonts/Graphik-Bold_2.otf": "5e7003445d42c459e5d13cc481338aba",
"assets/assets/fonts/Manrope%2520regular.otf": "700cae876349508f0cfce28253e0faa7",
"assets/assets/images/iv_add_user.png": "346f8a7f9d199ab60de50ff40a655202",
"assets/assets/images/iv_google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/assets/images/iv_share_chats.png": "2869d3b9e9dde7d5c294f1da1909763f",
"assets/assets/images/marketplace.png": "d5039e0adf491735e537436b9463b544",
"assets/assets/images/maslow_icon.png": "8ca592955dc690bb97a79e0d894fa8a5",
"assets/assets/images/maslow_logo.png": "4ff574500c6794c0231f891e98f653c7",
"assets/assets/images/nothing_to_show.jpg": "e8cd3c62123ddcc96c7c4becb97acd20",
"assets/assets/images/user_placeholder.jpg": "35975c8078fbc7111ae9b9252293d710",
"assets/FontManifest.json": "24c9a8f25d2ddf68a1dd3f61cc6d8e62",
"assets/fonts/MaterialIcons-Regular.otf": "e3c35f39f5692524e4ed8a72b6ada7f1",
"assets/NOTICES": "6edf1128d758f7756d04265439b95d44",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "8ca592955dc690bb97a79e0d894fa8a5",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "2a5d3a9d2460bc04f8e55d0ae7c8f366",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "105ed5756b3c96ab05700f1dbb0eb659",
"/": "105ed5756b3c96ab05700f1dbb0eb659",
"main.dart.js": "a7bdc336cea3ffefe5dbc8bb420dc3b8",
"manifest.json": "d40853096af3c36e5a77f4f510c4080b",
"version.json": "2ed77e560fa41d410f6e135afcdff345"};
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
