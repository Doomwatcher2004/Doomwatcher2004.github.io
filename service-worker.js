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
    "revision": "637fa62d3900c50d137f347f9e6a0d0d"
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
    "url": "assets/js/12.e1bab619.js",
    "revision": "0c777fe88fdd1926f6457e03ff5126c9"
  },
  {
    "url": "assets/js/13.4ab2683e.js",
    "revision": "7208e8294b490b53b99964be4640a8ae"
  },
  {
    "url": "assets/js/14.5f924852.js",
    "revision": "edddc78d86dcaef751018ef08cda00c4"
  },
  {
    "url": "assets/js/15.c1e5e647.js",
    "revision": "093c90a0e10c4035ae10e0aea613fcc7"
  },
  {
    "url": "assets/js/16.a59a2cb1.js",
    "revision": "b6580bad26b362445e327cd8b186f3d2"
  },
  {
    "url": "assets/js/17.66972c9b.js",
    "revision": "206181d85b857baea779be315406a7b6"
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
    "url": "assets/js/app.3318ea1a.js",
    "revision": "75db947fd309b232eb945ba2941a5a64"
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
    "revision": "c1ded9426e5ecfff151d2a0fe22da64f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "3853f2c2f3b2c45d2f4b1e8ca1d7d949"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "df37174a9b6c24b643dfd50aa91586fa"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "730dd633b363c1e8a6ac2636f25c0e61"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "80548ca6ca2630bce1656e4ecf37a797"
  },
  {
    "url": "css/style.css",
    "revision": "aff990467c5501a3fe2fd6a2cd9b77fe"
  },
  {
    "url": "guide/index.html",
    "revision": "4d010a1d273b9a526bf27c5502859daa"
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
    "revision": "e6dc21f1f7ab23cbd0e08129913c9863"
  },
  {
    "url": "js/custom.js",
    "revision": "64135ba7fe1aa98e889ec252f8b3430a"
  },
  {
    "url": "tag/index.html",
    "revision": "1efd518e554d76ee14431843b67db95c"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "5fbcee9d21fa75384bbfdb4df0275d12"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "fefc12979ae42df1289d17ea87e2165f"
  },
  {
    "url": "tags/js/index.html",
    "revision": "717688179a8e5c81b08d05dd50471068"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "ac9205526f783497ee7d06a9da98db49"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "bf35f34689724d87d63a1888b36b7fa2"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "7411c13afa06d584a72c93b89688bafc"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "7000b718d3e6075ccc211d8747cf79ae"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "f516d9545be900a780cdc0d1bb25f11a"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "51a4fd6d01a47c3b0890bae81aa7dbd6"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "31f8c2da92f2bbf9944fa9b7ce54207e"
  },
  {
    "url": "timeline/index.html",
    "revision": "73c9e3d3519983b5e8fc4669b3d7bf43"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "835d86071cff4dda35b47a219f3eead9"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "0d9d60c3b7a3a611e2de93846c79b343"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "b0ea30b01d9307d794311384e1db7067"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "6511c0f5e5ebc167549ce52fc702d100"
  },
  {
    "url": "生活分享/life.html",
    "revision": "e0656347dcebd11e45b7f89280deb459"
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
