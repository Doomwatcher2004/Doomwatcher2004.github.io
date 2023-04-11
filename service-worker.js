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
    "revision": "98a4b32d2a6e4c9e4f1208e50d8b63aa"
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
    "url": "assets/js/14.96939e98.js",
    "revision": "087388776d721e414f81616e1d18a6ac"
  },
  {
    "url": "assets/js/15.740d29e0.js",
    "revision": "ed1178aae3893d0a9f56c232548be0df"
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
    "url": "assets/js/app.f6aaae02.js",
    "revision": "27cc77c0facfd7c52b463a2828983206"
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
    "revision": "9a48cdd95c7808f2f990e063f3aca368"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0173db0e3c4225d272db15c37e206271"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7337a14c9426666b7a588a8592c6eae5"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "98ec0863bdd029bcb2749dd227e064aa"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "8db71104212bbdb477a97a8233b9a567"
  },
  {
    "url": "css/style.css",
    "revision": "282db8a64eca342e1c7c55133f3dba09"
  },
  {
    "url": "guide/index.html",
    "revision": "6d1f53b59f7b5acd1500731cbe9bbee1"
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
    "revision": "e614611853459d625ed95fbfb72d1a04"
  },
  {
    "url": "js/custom.js",
    "revision": "960bb4d3167b5766a863e00435f3f383"
  },
  {
    "url": "tag/index.html",
    "revision": "2efc8de9d698ef2fcf681885a99f01d5"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "8420fc9bd5c9686e3bc31556d3c17b2c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "910fe769a3149c9ccbc45c6f0eb7347c"
  },
  {
    "url": "tags/js/index.html",
    "revision": "7c1076300150fefb890b5626e3a20a24"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "fff79c40c16c845e62e5fb18e8aef470"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "b4def4cf0b956bcd06919adffa6ee733"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f6f407886b9a8287fed4b3d110e46a77"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "e4c33a0a5e680539f0d05768e8a4c9fa"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "3ea84381b73c4cc20658179414516350"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "306b6758eebc723eb9a72ad078a96083"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "bb43c5c32b6fef5408f045eb92aa575a"
  },
  {
    "url": "timeline/index.html",
    "revision": "f7fd6bae725a55ea5519ed2457579a2a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "f1b65b548e384c592d222bfb2769ac6c"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "704dc5f16ef3f8eb293be93568fb745e"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "2d086433b159525d43fe1555d5107fb7"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "6412e1246c6d8fee5af6c0c31635d88b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f43df0b885c76607fd1f2793e3562f35"
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
