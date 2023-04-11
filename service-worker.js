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
    "revision": "8a130788b25497ef187bf25bae8945fc"
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
    "url": "assets/js/12.221cd6c4.js",
    "revision": "57f4e66b245d6d20ff699d7bb95674f4"
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
    "url": "assets/js/16.312b5bea.js",
    "revision": "bc467476030fc056cc659098f66714de"
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
    "url": "assets/js/app.8a4a48b0.js",
    "revision": "aa45101398ad16be926b473294e5aaaa"
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
    "revision": "277fcf79c669bbe9b503ceceec8becba"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7054dd74ba88fcfb8791610e86f93000"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "0fefc329e7ae52a0e385febdb37c0f48"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2051d4bfd432bb946e43910fd796784a"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "7d150559a1e5c1eea137b27c77a4dffe"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "a88675d1eb881b6676940fced30ba5a9"
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
    "revision": "7520ff182f29e53980f6624455129bf7"
  },
  {
    "url": "js/custom.js",
    "revision": "64135ba7fe1aa98e889ec252f8b3430a"
  },
  {
    "url": "tag/index.html",
    "revision": "1f77ea6230059c7e2a0153e7b50c7a9c"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "ad822379f17e9a6b497ac9dfd35c9512"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "9e84f0ac9adc44e868f01a45b4b9cef5"
  },
  {
    "url": "tags/js/index.html",
    "revision": "a0d60488b948fccf74bf1318587470eb"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "a5b2cc45cae40439b70bdc2e5ac7374d"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "50b772c359ef711fba6aea7ddf437c27"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c33c35dedfe700750b28e62c5b3f82ee"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "54b69374ad1a6fbff26b2cfb2b9ac4cc"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "d5260551ee6751618ebbc5db4931e02f"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "00b59bd279b7a742bb6b020a616d8103"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "c1693e375c98d456cdc080c08d4fe785"
  },
  {
    "url": "timeline/index.html",
    "revision": "056e4c2d29ac4cbc421839662c9ad32a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "4adefbc104f817882ffbc9053b1b8988"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "c9a8abe54d2e03ba526d285c402fd962"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "74ff6eb530e5abf62a09e5452e4a99aa"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "02a4826a39524304bed97ee8e707a763"
  },
  {
    "url": "生活分享/life.html",
    "revision": "bf32dcae3bffc5c3aa64dc3abcbd1f51"
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
