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
    "revision": "ef207e7a140155ece45213a40d79d642"
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
    "url": "assets/js/17.287fa90a.js",
    "revision": "6bfe9f510eef6ee814bac18322a20aa7"
  },
  {
    "url": "assets/js/18.5dd2ba73.js",
    "revision": "4e7c6eed2cd1035eb0452c6068c17d61"
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
    "url": "assets/js/app.4bdcde2f.js",
    "revision": "54f4c6c1648fa61b36c7f8de4de58663"
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
    "revision": "0010b03c4f133edad0ec0f2d2f52135e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e1e2304ab7e68fe5f7d424eb23421a5e"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "cf237c30d9d4f881197cbb6231e2ed3e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f15eaf6d49208a60ea7c8a67e444ce13"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "8c2e264b068ffbcfa52d5f85e5e87d85"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "01e00103e20ef21eeddd3cdf08a8c899"
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
    "revision": "74e2043063da8f8ba04e68834b233e4a"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "919937807a2f40507bf3d126ce956208"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "a3c469a22deb4e59c23d224864e2f4db"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "a2a18ed490fb97cdc80b753492449df1"
  },
  {
    "url": "tags/js/index.html",
    "revision": "48aad823f0e611a7a23a2c6cac2443e2"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "5e3902446dd4ebb195239190dae5929f"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "907a8d6225c864e5c535e658d04f0e49"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "0e0ca9e9954148c6bcc896f818b207fb"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "3e2db7f9123238b28f777b3e513cdf6a"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "e7f591b57293e81b536b97e214cf8e3d"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "5beebc503bd39315695d79d9b6483a90"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "476b823de83d2fdeec3dcae13af6e584"
  },
  {
    "url": "timeline/index.html",
    "revision": "8cb8c8f5b120dff2c051688dc04a0598"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "79c9a8af9e410875770ef120128911ac"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "91159148016fcd20076bd41b938e2a21"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "a68f7c566eb906681a763ebfa2ab17b5"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "5c132ad7febb37999312b1a5a80a8906"
  },
  {
    "url": "生活分享/life.html",
    "revision": "0156539931502f2e69e28af58b50dfa2"
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
