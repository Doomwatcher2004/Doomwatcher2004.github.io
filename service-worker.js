/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7f4fdaa45e711ba7fe49051c820af474"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.8e915205.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.d5a12f0a.js",
    "revision": "7b4b907e345dc71bde5f89b6c8abc8a9"
  },
  {
    "url": "assets/js/13.4ab2683e.js",
    "revision": "7208e8294b490b53b99964be4640a8ae"
  },
  {
    "url": "assets/js/14.a4f14ad7.js",
    "revision": "414390e3837d548064f4ffd1c4809a7b"
  },
  {
    "url": "assets/js/15.c1e5e647.js",
    "revision": "093c90a0e10c4035ae10e0aea613fcc7"
  },
  {
    "url": "assets/js/16.fc67d057.js",
    "revision": "7bed02765cf9056e995bf32ff82bb3e1"
  },
  {
    "url": "assets/js/17.0c8ba930.js",
    "revision": "f3b3829f30862a26a1165dfbe885459c"
  },
  {
    "url": "assets/js/18.5afc78c2.js",
    "revision": "88ff354f0941ee76427a488c0f288c90"
  },
  {
    "url": "assets/js/4.9c1f4aa3.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.c518ddce.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.bf57828f.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.375fd99b.js",
    "revision": "1109d25b1cd56c620933c23b4b22c92e"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "4b928ccb46c7ed8894c381049a0cb912"
  },
  {
    "url": "categories/java/index.html",
    "revision": "240666e7c3eaa05b4f75e62cf750060b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "68757a618cac4270a0d8249705f0eede"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ac176d2ff5cdf5a11c550aa1ae8226c7"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "ac88715121fad3f867a0b279fbb191b6"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "649c8e6c2f9986a340ae007746f20a73"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "6a14242ad427666b3d5d1ac85f392f1c"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "c85543132b3953a3c8cd5ba384b788b9"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "a3baf0a0753467b953ec8f2ff29145a8"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5a979f10fb481f9392d58370de37cdeb"
  },
  {
    "url": "tags/js/index.html",
    "revision": "80ff59a2b109b136686df51a20fba41c"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "fd981ef6706d40b38d1092bb6f566bd9"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "cef0957ccc64741e831924333010ecfa"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "25d0fbef7fb930bd944034c594cff9eb"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "508c0b072f273f83a3b0160b21f86eb8"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "25b97249d1507df520d3e67819de6b41"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "32e78dac0e82b802d76f2ba138a50d63"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "282c4f44bbff91bdeb23af288b2a77d2"
  },
  {
    "url": "timeline/index.html",
    "revision": "8cea201350532b249ade706d19b85068"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "d1badc9b24e1cfca1d7db6dd7e0ebc0c"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "f771f9114ef30ebef3e0f626b002223f"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "267117652693a483a29cdea788325969"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "3b14db3a1cd895d044eb38d2efb0037f"
  },
  {
    "url": "生活分享/life.html",
    "revision": "7aafeb8b1b603ba4a698e181b97c7251"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
