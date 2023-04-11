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
    "revision": "d52ad115caf538009743dfbe09d27897"
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
    "url": "assets/js/12.7f231f97.js",
    "revision": "05a328feee3c5a6667fd201c1e077c87"
  },
  {
    "url": "assets/js/13.ff8869d1.js",
    "revision": "b8934ecdfbc3eb16d6388595c0372104"
  },
  {
    "url": "assets/js/14.179eaf8f.js",
    "revision": "7fdc669ad85130ad137a228209249b3d"
  },
  {
    "url": "assets/js/15.740d29e0.js",
    "revision": "ed1178aae3893d0a9f56c232548be0df"
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
    "url": "assets/js/app.7428ed09.js",
    "revision": "008b0aa90f8f269d7cb546a3637e47bb"
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
    "revision": "68023627ea07a9ea6988c92fee5584f3"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7e614eafa2565a9ee01dbb9fdb247aad"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "32e9bf62823128f88f10b239d8d1b05a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "bb5da599124b9305d15d5de00c095e45"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "462f64b21ceaca8234ead62fe4e0a3ef"
  },
  {
    "url": "css/style.css",
    "revision": "9d183018628c17fee740e7c78864b951"
  },
  {
    "url": "guide/index.html",
    "revision": "627f260c84b70e2bb7e1088acc1e0c0d"
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
    "revision": "43204d404f007acf2111248a4c7fc5e7"
  },
  {
    "url": "js/custom.js",
    "revision": "64135ba7fe1aa98e889ec252f8b3430a"
  },
  {
    "url": "tag/index.html",
    "revision": "d9ad7c5bd1cac2350354c9280675a20a"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "9309d5ea459bf1658055f63bd139b11f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ef8a48160f2ef6a99651ff307ad88d81"
  },
  {
    "url": "tags/js/index.html",
    "revision": "1e064321db0ba510f63c7d6b602043f4"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "b89216d0e0755405894dc7d8476f8a25"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "d68ca454a89aab2b9a4afae2d2c0b628"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f3ea9868e009385b58b7b583ad915325"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "5e372a571568343a1811bf0e97736e0f"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "95bf3e9056200cf5c8ecbb95f5a9a15a"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "be6d7677640d6c207d1ffd10e40ca31b"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "e2f721b75e1935ff246e3f994b90ed36"
  },
  {
    "url": "timeline/index.html",
    "revision": "636de5e2ce022c04dd6ccd788122ad51"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "754f99a03305bac609ad8f7c99fd9583"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "2c132e2d4d11824cbcd2081ebe206c3e"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "d1755c57cbdc421ec01475fae5edc724"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ddfccec0a7564db74bd6d506062f8b8f"
  },
  {
    "url": "生活分享/life.html",
    "revision": "21e17f350f8f838a18ddd7a9226e8fb6"
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
