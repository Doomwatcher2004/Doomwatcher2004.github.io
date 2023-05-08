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
    "revision": "23eacb918a439e3ab38bb177ff36b9a0"
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
    "url": "assets/js/11.da0f5f85.js",
    "revision": "3cd7f17aa78a0944962253ed581e7e4b"
  },
  {
    "url": "assets/js/12.d5a12f0a.js",
    "revision": "7b4b907e345dc71bde5f89b6c8abc8a9"
  },
  {
    "url": "assets/js/13.4a3c5608.js",
    "revision": "8cb4d7fab0a33a6c8253dae1cc7522ae"
  },
  {
    "url": "assets/js/14.88be41ae.js",
    "revision": "498b1e8d46010741ce9511f2ad330205"
  },
  {
    "url": "assets/js/15.e8669f07.js",
    "revision": "42e67a60f2cbd72426f24a5cbb374311"
  },
  {
    "url": "assets/js/16.dc7c3db8.js",
    "revision": "7bb0e61bd61fb18e74d0c8023b8349b4"
  },
  {
    "url": "assets/js/17.3a23c289.js",
    "revision": "b8c1bb5eafb0f3fab8eaee2303a7552b"
  },
  {
    "url": "assets/js/18.5cb2bfb9.js",
    "revision": "d6a61313508c8d12a80367b9e861f29c"
  },
  {
    "url": "assets/js/19.8f5f4853.js",
    "revision": "ec23c8fcc74aababde810c0e58e3ced0"
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
    "url": "assets/js/app.12defe91.js",
    "revision": "86dd16df93fd0b87ac2f6f5b941768d8"
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
    "revision": "a9ad5512ceff8d52a522b8f7ff21ae36"
  },
  {
    "url": "categories/java/index.html",
    "revision": "2534f7d2b0f20e2d773eaba85e352d40"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "3dec899f984d6d5dfa30093f96e20dfd"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f4c86a55611ed4dde48dedb6daa51a5d"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "c09eaffbcb296a0107da675532386b44"
  },
  {
    "url": "css/style.css",
    "revision": "aff990467c5501a3fe2fd6a2cd9b77fe"
  },
  {
    "url": "guide/index.html",
    "revision": "045502ae96078141fb6af99065c54e79"
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
    "revision": "89810a01e0bcac985cb15bfb9efd7fd2"
  },
  {
    "url": "js/custom.js",
    "revision": "960bb4d3167b5766a863e00435f3f383"
  },
  {
    "url": "tag/index.html",
    "revision": "569cbe59bc32f0399452d69877a7c47b"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "bbbad796a3e5be4df0940366a391afbd"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "28ce01ac5ee107a666fdcdc8acad6346"
  },
  {
    "url": "tags/js/index.html",
    "revision": "5bb47b75588b12823fe29cc2b9dc182d"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "d195fae2fb170e1aaee06cbce62893d6"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "6618ed43995afe57a864497782d91dad"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "5d5457e97b00db30a09eaae63b37265a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "b73d3d9c0c7b8a2165e9e5ae686b1863"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "2e51ae8b831df09cb87de3b0ca27a022"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "3920b48998219cd71d6ee445e515b97e"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "167cc66f26520ce7c86ef23c7e242e1e"
  },
  {
    "url": "timeline/index.html",
    "revision": "ee8f48d5ec8efe1108783d01b960d54e"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "d751dafede4802b899afa51d793b07d8"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "37f73295a8cf656bf986cc2d9a5ee29e"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "e3d5f645ce88e95dc02d90ef4286b754"
  },
  {
    "url": "技术文章/vue/ts.html",
    "revision": "c647f21de53159b222d8b5710fa51d6c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "916767a1aa7908b5166f0bf2f6606705"
  },
  {
    "url": "生活分享/life.html",
    "revision": "9f6d471bd31cd592ecbd56c55048521b"
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
