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
    "revision": "c57878d3a9a6f30698699102ad395b85"
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
    "url": "assets/js/14.96939e98.js",
    "revision": "087388776d721e414f81616e1d18a6ac"
  },
  {
    "url": "assets/js/15.881f1c71.js",
    "revision": "139fb947484616d1abc8e1b44abbcbda"
  },
  {
    "url": "assets/js/16.a59a2cb1.js",
    "revision": "b6580bad26b362445e327cd8b186f3d2"
  },
  {
    "url": "assets/js/17.dd519a46.js",
    "revision": "ae2039acff2a28a34427d168746b4c61"
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
    "url": "assets/js/app.00745997.js",
    "revision": "9d764811b330b1f1d26bcbfb75d9d0ad"
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
    "revision": "13214dab04cd88cc24bcb127c2b6f470"
  },
  {
    "url": "categories/java/index.html",
    "revision": "51cb2562ac38d7f6caef16565e22f5b4"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7555d55b24ab42da8b282ecd42bf89f9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "eb5fb94fecaf46043d452b90fe872aba"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "665a29e941c26d0cd465fef7ebc1f076"
  },
  {
    "url": "css/style.css",
    "revision": "aff990467c5501a3fe2fd6a2cd9b77fe"
  },
  {
    "url": "guide/index.html",
    "revision": "91b66913ca9e07b79d93b56757fb7c7b"
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
    "revision": "e4104c6d4f7e109d4e249d79eb34b8ae"
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
    "url": "img/logo3.png",
    "revision": "b0c564a4ef908b9e58b17d343a5c3c26"
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
    "revision": "0913dd43e4712e809a153be6e3186bd2"
  },
  {
    "url": "js/custom.js",
    "revision": "960bb4d3167b5766a863e00435f3f383"
  },
  {
    "url": "tag/index.html",
    "revision": "6daf1ce4443bccb3f75f9c5fef7be757"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "25c88d07df845b0e9c82efda932f84f3"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "544b673001ddefb4f8fa8694ae989f8e"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ada0d66195e531724013f339532055b7"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "c09976cd19ca0a9c100db3cc5debe8ed"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "2b9f64e0755dab090b341be541b68506"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "45898e7e121a342f8f7d409a5b648060"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "87fdd6b0b64969e4dcc7e6f7ebf47fed"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "31e578a48a42af7424d2d5cf0d8e1a84"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "d70e01a20ebd8bc854974556a0010c41"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "255b47bc79b407dfd314df6508e2cdd8"
  },
  {
    "url": "timeline/index.html",
    "revision": "8ba850e14c4546422e3074fc99cee741"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "76492231898a74af07b529115c32aa75"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "12a0d327399fbf228330f65971d1d57a"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "ba275564495fe474ce9a628f17031f9b"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "50e9fdb4242256effb3df5d8796e085e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b2c174f3552a5c0fdd1506817b944ba1"
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
