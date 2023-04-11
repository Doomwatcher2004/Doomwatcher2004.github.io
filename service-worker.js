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
    "revision": "25b4329bf2907e1f0c60807a7592256e"
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
    "url": "assets/js/13.ca79d5d9.js",
    "revision": "4546964e157c74eca7b099e89c1175cc"
  },
  {
    "url": "assets/js/14.96939e98.js",
    "revision": "087388776d721e414f81616e1d18a6ac"
  },
  {
    "url": "assets/js/15.e8669f07.js",
    "revision": "42e67a60f2cbd72426f24a5cbb374311"
  },
  {
    "url": "assets/js/16.fc67d057.js",
    "revision": "7bed02765cf9056e995bf32ff82bb3e1"
  },
  {
    "url": "assets/js/17.dd519a46.js",
    "revision": "ae2039acff2a28a34427d168746b4c61"
  },
  {
    "url": "assets/js/18.5ac236ed.js",
    "revision": "6ebf26e8a597d729a1f560a4bfc03fc9"
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
    "url": "assets/js/app.945e0670.js",
    "revision": "e66094afe884799a21e06ac5111ac470"
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
    "revision": "ea9ea66e0dd91af6eec877940b7ab65a"
  },
  {
    "url": "categories/java/index.html",
    "revision": "9dbd2ef43d7d97088a4629ce67c744f3"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "75f72a11a57882e68c9fc855323b0a32"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7034b3bbeec9f2a22e0a70483eb55927"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "1902830881480eebb6727783cef6572c"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "2ca450f37782c6af10a4505718bf0c3c"
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
    "revision": "ba06b7ab9d6cd2f4e72ea607e6c444c6"
  },
  {
    "url": "js/custom.js",
    "revision": "6e09eceff4dd28f6123bf85f3813a76f"
  },
  {
    "url": "tag/index.html",
    "revision": "8e77ae2de7e89a6e33e91f2d2d018b68"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "bcb04b48753a3295acf2c7ae0fcf5227"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5288d8fad8f84f2fb9319bfc5f2ef26d"
  },
  {
    "url": "tags/js/index.html",
    "revision": "1c71fe7b2064e7a0b7451b3c4fb1920c"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "8147ec5d10249007745b45a9d455d102"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "f8750978f902cca267db3e6f8d1cdd8f"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "9f9924071b4cb98729e48c85388529e2"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "7faf06f72182f49e3475614eff848aa1"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "96496b15e5f5d8d820d2404dafa0dbc9"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "58c8abc2613b8d6a1a5b402876e8381a"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "987af33e5013f9bdeb223fd5e6ac4bad"
  },
  {
    "url": "timeline/index.html",
    "revision": "058cc4840458d1ab9049a6eab941f6cd"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "85942ae5b0d41372ac666d398cef82e6"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "5e7011e6848d3673bedb27729ba0ac3f"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "fc1ee2645d11fa70a1aea0fc12082e25"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "8e87a8fcb4b092e146ca3ef5e81e5d13"
  },
  {
    "url": "生活分享/life.html",
    "revision": "e8c0ec4b3f800cb7d475276c296be8da"
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
