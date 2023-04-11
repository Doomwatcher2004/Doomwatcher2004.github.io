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
    "revision": "c42e658f41ecbdc1869386c001fc7731"
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
    "url": "assets/js/15.881f1c71.js",
    "revision": "139fb947484616d1abc8e1b44abbcbda"
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
    "url": "assets/js/app.61177235.js",
    "revision": "1160f5db8d73da536f19366333b997e3"
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
    "revision": "faef5fd862b3a071e1e3c3d97f6029a9"
  },
  {
    "url": "categories/java/index.html",
    "revision": "ab1411ec6a770fa3c6cd994850335c91"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "10a1a005f84d71ea31a68c91ebfe81a8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "214bad632ca5998ff25838459b25ae99"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "eec932f823742f716d5c49ab67eb5770"
  },
  {
    "url": "css/style.css",
    "revision": "c1603c2f4337bc76a52956cc2f13523f"
  },
  {
    "url": "guide/index.html",
    "revision": "a251c7ac7b1697a12d7927f6915425fa"
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
    "revision": "5117473d0af46b69d2fd768a297d5dad"
  },
  {
    "url": "js/custom.js",
    "revision": "960bb4d3167b5766a863e00435f3f383"
  },
  {
    "url": "tag/index.html",
    "revision": "c2d6f847e0f513264f5bed8816ccdff7"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "18c341aace88a6242d866652d9536e4c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ab4737cdea682789b8472e524287007f"
  },
  {
    "url": "tags/js/index.html",
    "revision": "221f644840fcdc5d06db98ec119ecc96"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "e22d637d720017c2dc2e3eef64387366"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "dc32d4cc3456e04b2d6085c58a2a2842"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "096b2c80134dbdc9861522a1f1670794"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "42e90957c701cf17ec095302d5a7bbe2"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "b06b8e3fa6c8a9b2090a371cdad2982c"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "c818543472a427ca8f991e655f6bf9e3"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "f53d66220ab7604a31a3481c5be547f6"
  },
  {
    "url": "timeline/index.html",
    "revision": "2863d7e13aa32370adf036164c94abe3"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "df1f43d7d083057cd4b94468c5767723"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "c226fea2124a6a4ea76fe5ab0096cc12"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "b20ba4f20fcd3ed00ffaae342f52382a"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "697b5aa006efcc36ee0acba0f1258e1f"
  },
  {
    "url": "生活分享/life.html",
    "revision": "41754a1e92df8e8c78c72b4622947be2"
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
