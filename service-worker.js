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
    "revision": "886a732a692a3a47afcb3dbc4be6d5f8"
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
    "url": "assets/js/13.4ab2683e.js",
    "revision": "7208e8294b490b53b99964be4640a8ae"
  },
  {
    "url": "assets/js/14.e5112667.js",
    "revision": "35a1c66aad12c4e78731ee928e541c5c"
  },
  {
    "url": "assets/js/15.54c65796.js",
    "revision": "31f6354b53226bdfec8eac4ce8fa2e15"
  },
  {
    "url": "assets/js/16.dc7c3db8.js",
    "revision": "7bb0e61bd61fb18e74d0c8023b8349b4"
  },
  {
    "url": "assets/js/17.82edbc76.js",
    "revision": "9e25ee41b8d2cc75f53f8354ae523aa8"
  },
  {
    "url": "assets/js/18.119233e8.js",
    "revision": "3e2f3b2eeebebe5928428a61ab2a352c"
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
    "url": "assets/js/app.47e53a65.js",
    "revision": "5e9666019bbda1337cb9cd29cfa15723"
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
    "revision": "5ca874fb143cd0d3131380d15c1606d3"
  },
  {
    "url": "categories/java/index.html",
    "revision": "6045945c7dfb7aff04d68d3f6f79417a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "4e52dedc64094d948c1cd0255e5ac0b6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c1fc2b9339af6649583997ec1ae8e4df"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "4971d902179663ff500e166d6bf08ee1"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "b8273dcaff4bfe2cba765613e0d3b622"
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
    "revision": "703ae08171f480aaa6211cc5c2504cc9"
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
    "revision": "2cac0c93380899765c2bc3e094048670"
  },
  {
    "url": "js/custom.js",
    "revision": "6e09eceff4dd28f6123bf85f3813a76f"
  },
  {
    "url": "tag/index.html",
    "revision": "9526bdd20b25607ac07660995e90a1e6"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "a18b0684199a705d11ce1db8f116380c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "2d9322ba5908008316e07757f43a7da8"
  },
  {
    "url": "tags/js/index.html",
    "revision": "97f79a14d7774e46f958e44c4783f149"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "6aedc4e1103e188c1462f4a99a855e67"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "b2c65bc9ed745f579f8daf3ad49092e6"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "63d1cb7652cd1c915c497fb20d56a26b"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "b8e923a64943d8af567f385f2cc4cab0"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "c1e2027e65c91c2d9ea7dd6cab869260"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "7d4749e5f69de9de914ae0192d8ffdbd"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "6d1cb10320ef742e52ed9db716f7655a"
  },
  {
    "url": "timeline/index.html",
    "revision": "e7848c446afb6ccb293e1cbcc7c5a1d6"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "fb2f23955609c86635b200cc54e6d2c2"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "1c5e24550fc2fa5703f08266c6b1e519"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "84de28d1b12b431a6e99c060684a3e33"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "83bc82ea6ede287028eee341eccbbd7f"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b90b68c0c244c3e1d24906faf3ff75e8"
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
