'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "df40151b79ce836b15f488199e9b3330",
"index.html": "08f1cef8f7f9871c3f36b5219ccc415f",
"/": "08f1cef8f7f9871c3f36b5219ccc415f",
"main.dart.js": "32690293eecb69f89ce5dc7d0fd14e61",
"assets/AssetManifest.json": "0b70c20a48a825da8e0a2a2d6e560794",
"assets/NOTICES": "dbb156c34c89449627585688b8d18a34",
"assets/FontManifest.json": "72c143cd3ccb6043e2d6db2c781edb24",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/fluttertoast/assets/toastify.js": "8f5ac78dd0b9b5c9959ea1ade77f68ae",
"assets/packages/fluttertoast/assets/toastify.css": "8beb4c67569fb90146861e66d94163d7",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/update_icon.png": "586c6f71848218050646e78a2a4ecf68",
"assets/assets/images/bgsign.png": "f44572d0cd9436a911fea04d1b0aa2f0",
"assets/assets/images/image_placeholder_noimage.png": "59b75164b8202be01cc4c528626816ed",
"assets/assets/images/setting_add.png": "cef4ea847c5166291d879ee1b344f3e5",
"assets/assets/images/download.png": "2a63163b84aabd12c2cc8c066d4fe93e",
"assets/assets/images/ic_uncheck.png": "26dd6f2a15cf9f57d6eb64b9c68176ed",
"assets/assets/images/bill/ic_checkbox_normal.png": "baf067a42768a2059921a79957188c5b",
"assets/assets/images/bill/suit_add.png": "ae20019b29fd4ac68d99fee14753fcbc",
"assets/assets/images/bill/icon_prop_chose.png": "4cdaa78bc2b62729442e1d6fb74766c9",
"assets/assets/images/bill/suit_reduce.png": "14ed0b9bf4d357f617609c5dfb45cbbf",
"assets/assets/images/bill/ic_checkbox_checked.png": "ae3db568082d114ed99192e496c2f958",
"assets/assets/images/bill/suit_count.png": "d2d2b8df948ce51b8d5007712e82c3c1",
"assets/assets/images/setting_remove.png": "36f484faced2f9609b9c5ccf350866bc",
"assets/assets/images/ic_indicator_statistics.png": "a439c4391ad0542842c32de3c8b570a4",
"assets/assets/images/login_btn.png": "570e7a7b013dfccc4b7d1806ef2d31e3",
"assets/assets/images/delete_icon.png": "fd3fc57137ac6d400c8e2c7bac0ea872",
"assets/assets/images/ic_dialog_icon_exception.png": "61d5791cb377d2a3a9165fb6cb6b6c21",
"assets/assets/images/ic_stop.png": "9d00dd84934a9f88341e0d981fd3576c",
"assets/assets/images/search_ngp_icon.png": "72509e60f96d09849045c353b6f2a65f",
"assets/assets/images/bg_circle_left.png": "5345587e8e95d83e864cbc64f335af5f",
"assets/assets/images/add_btn.png": "8a8e9b6a06295272fd10c6eaa099a045",
"assets/assets/images/clear_icon.png": "e27723194fd0c42c18ae2c7318f83a23",
"assets/assets/images/contact_us_more.png": "54bf92ff04b28ad197d931e0f4c0bee9",
"assets/assets/images/baseinfo/icon_attr.png": "ad0455335a175a671a3be1dd13af6611",
"assets/assets/images/baseinfo/icon_default.png": "5b64510d545e7ffe0ff7a634d2602755",
"assets/assets/images/baseinfo/icon_attr_1.png": "a859443f266d0294a30f45c917d4cb23",
"assets/assets/images/baseinfo/icon_attr_2.png": "37ecb1934a3822f17655e2dfe9bab5bc",
"assets/assets/images/baseinfo/icon_require.png": "ded1e0e4bae10c05778b836d027caa0d",
"assets/assets/images/ic_dialog_icon_warn.png": "42e4af2b488110d666205bff77d63224",
"assets/assets/images/version_icon.png": "8933c4ef9a37c3aebae9da86ec06d2df",
"assets/assets/images/pwd.png": "6963af4730a3e3aed91ff9cbb949ec65",
"assets/assets/images/bg_circle_right.png": "79b7aee975924eb21c13a8452f02029e",
"assets/assets/images/icon_online.png": "c5ec8174e4c608d6339b81136501090e",
"assets/assets/images/login_header.png": "a7991811c9b9bcd4a987099f8ff6d442",
"assets/assets/images/ic_edit.png": "cd0ffaf14564c415dd4622f0c76c0844",
"assets/assets/images/zixun.png": "39cadad79c8bcfb0c5a3dfd708d4baff",
"assets/assets/images/company.png": "0fb2c564f0d3dd08895e267c3109760d",
"assets/assets/images/info_img@2x.png": "e8777f7a274ae6b24c6860f427640059",
"assets/assets/images/logo.png": "45647c467502a7a86ec79d4a8d15be5d",
"assets/assets/images/online_icon.png": "be265e81a799a09d5823c105e0aabddd",
"assets/assets/images/contact_us_qq.png": "7a2041eab0f4611e94de6265eb469a89",
"assets/assets/images/jia_mianxing@2x.png": "d1251460fac55c2d41a57231b4bbc6e5",
"assets/assets/images/icon_clear.png": "ade17c9d4a83d598382173bb69cfa9ad",
"assets/assets/images/ic_mask.png": "d6a36c02a36f3774f0362d85416c43ed",
"assets/assets/images/contact_us_phone.png": "cc6dcf375428d3d3099779fd8ffb8927",
"assets/assets/images/bill_save_success.png": "319f67f610439c7bae19a7705984632a",
"assets/assets/images/account_icon.png": "e09a3cc8343985bc71617eece9bbe8d7",
"assets/assets/images/setting_bg.png": "d42b65e915d5a30c6b5bccd7ccb1a793",
"assets/assets/images/jian@2x.png": "43c29cf871f03453cf92d1da680f035a",
"assets/assets/images/setting_icon.png": "34bcc21d3727c894641a84cb80a4121d",
"assets/assets/images/bg_setting.png": "d2132acde944e2d9e15d3896cf9699df",
"assets/assets/images/ic_filter_down.png": "1202ea4e303111219d2b1d99f75529b7",
"assets/assets/font/iconfont.ttf": "843342cd7d78e9f30d923191b2f4874b",
"assets/assets/i18n/i18n_zh.json": "736d11e4c8f5fb76dbb705f1256551b4",
"assets/assets/i18n/i18n_en.json": "4100e6240a94d3b1f0576d3b5c658fd4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
