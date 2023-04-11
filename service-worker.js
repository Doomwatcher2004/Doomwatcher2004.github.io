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
    "revision": "f2ad9220832b341ed0afebafed07467e"
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
    "url": "assets/js/12.6b98eb08.js",
    "revision": "8e0eee022a448151912136003c905799"
  },
  {
    "url": "assets/js/13.4ab2683e.js",
    "revision": "7208e8294b490b53b99964be4640a8ae"
  },
  {
    "url": "assets/js/14.96939e98.js",
    "revision": "087388776d721e414f81616e1d18a6ac"
  },
  {
    "url": "assets/js/15.740d29e0.js",
    "revision": "ed1178aae3893d0a9f56c232548be0df"
  },
  {
    "url": "assets/js/16.a59a2cb1.js",
    "revision": "b6580bad26b362445e327cd8b186f3d2"
  },
  {
    "url": "assets/js/17.82edbc76.js",
    "revision": "9e25ee41b8d2cc75f53f8354ae523aa8"
  },
  {
    "url": "assets/js/18.f08bf664.js",
    "revision": "826306b4983d384ba3626387a7270c4c"
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
    "url": "assets/js/app.4be68b89.js",
    "revision": "b9e256ac463dad9c9edb2ec0cd71e0fb"
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
    "revision": "1198ca5c1f634af43b513352c4e57cb1"
  },
  {
    "url": "avatar1.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "8ff2a7493eea9cecf57bd8e53843f646"
  },
  {
    "url": "categories/java/index.html",
    "revision": "9cb3d6076004de8f1821692b19efdee0"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "66dbb271f7530746f78b52f1d381c5b0"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "282afe5a51634dad6a4fa382ecc1cdcf"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "8bdbe3b39cf5b790b99d37a84ed2cf6a"
  },
  {
    "url": "css/style.css",
    "revision": "aff990467c5501a3fe2fd6a2cd9b77fe"
  },
  {
    "url": "guide/index.html",
    "revision": "6660cd97895741a75d04fe4bc1f7490b"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/51.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b0c564a4ef908b9e58b17d343a5c3c26"
  },
  {
    "url": "img/logo1.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/logo2.png",
    "revision": "129b225a74ca555e72315aa75db159fd"
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
    "url": "img/sidebarCode.png",
    "revision": "281ff28e3c4ec252432502d74878aad5"
  },
  {
    "url": "index.html",
    "revision": "7dfe47e02223f58750ad98929ad472fb"
  },
  {
    "url": "js/custom.js",
    "revision": "64135ba7fe1aa98e889ec252f8b3430a"
  },
  {
    "url": "tag/index.html",
    "revision": "966a4d21e86aa19905fcfb4deeea35ee"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "3f86ff80ecb2f201ec80559e92052ec6"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "eb0219c88ffdd534600531e1cb072956"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c48aaf9163362557bdfb4b85446bd7a5"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "57f7596a6357fef3ecea5f98cf898a51"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "22b10e10d829c74195129054682bf421"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "73bc47488d06edd710b5bc635b65ac92"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "5a0a5de74d796e37b489e7e9468442ed"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "58d572a206495e7b7fe315780260c257"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "19d613be3676ef7ce09e836f2c2a0bf9"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "02577e53113613ab16d0e9f17a291844"
  },
  {
    "url": "timeline/index.html",
    "revision": "ab6ab9cda3d4eb181a20dbec8fd4cba5"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "a3c74ae89649803da5a817349083c218"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "2948b9f6ed9df02e68d9c815ec40f634"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "ef46e50aabc20c9d5128d7414d458feb"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "496fe12f59624731e1dfc1670921a958"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d16ee0bf63a1305e79d92c2c8d5c213e"
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
