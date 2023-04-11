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
    "revision": "7b140a624d347718768dd8861f6709c7"
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
    "url": "assets/js/12.d5946778.js",
    "revision": "8f5295a943bc9282ba34d7885db10bed"
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
    "url": "assets/js/15.d618cf92.js",
    "revision": "a2d0f51575afa3dcaa017af980cb1114"
  },
  {
    "url": "assets/js/16.fc67d057.js",
    "revision": "7bed02765cf9056e995bf32ff82bb3e1"
  },
  {
    "url": "assets/js/17.287fa90a.js",
    "revision": "6bfe9f510eef6ee814bac18322a20aa7"
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
    "url": "assets/js/app.01913f6c.js",
    "revision": "47b0d576577694ea88abe65ea760b477"
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
    "revision": "edaf4bb1185a3f7346d69f1a37ee931e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "849020b1881791f2bd789789c03014e2"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "6cdf6f7068ebc7e647bf14bb8ba2a219"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8aa391b01dc625e87334d6469b3914ed"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "bdc60cac968490c03572dae31889b346"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "6c8573a4eb55cce0f1669f5e483ffe79"
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
    "revision": "5a83938f2c00e59cefc78aaa67e31a34"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "c585ca58d740d53daeeb33473e4c0649"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "9b2e39c615f789f955f98a97d3e0c94e"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "a984a0c6fd1aaca75999da5a79f87027"
  },
  {
    "url": "tags/js/index.html",
    "revision": "775c541c64d3833284e6f67ac845aecc"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "f2091a6f0c8257701ef0a7dad45ffa56"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "2e8a4ecccbe0ea22d8420d5ab7d9dd95"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "3c4ddbd0391db82347293424a27e4b12"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "6d9d4d71c576ced41e38ce1d6e10fb03"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "672f3f057300e2db6dd0331dd53c051a"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "ff2b868246180d8ec83339747266a378"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "b9171d631f21d381b560bf5c0f5d4c1e"
  },
  {
    "url": "timeline/index.html",
    "revision": "6be23202af40c6abaeb364f705b4205b"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "285fa2139d15a3871db7dd317eaa7c90"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "4ca8c1054512890a734f493ba10a7c34"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "3bf624aa7324888d4d0ed09e0608ef18"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "a3c07a80f219741546ec325b1c3a9ec1"
  },
  {
    "url": "生活分享/life.html",
    "revision": "6e4e0dce7abcd4bc93ba57d3e8ba1348"
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
