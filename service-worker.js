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
    "revision": "939187ae83805ef5e710adfdecfe22a4"
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
    "url": "assets/js/14.179eaf8f.js",
    "revision": "7fdc669ad85130ad137a228209249b3d"
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
    "url": "assets/js/17.0c8ba930.js",
    "revision": "f3b3829f30862a26a1165dfbe885459c"
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
    "url": "assets/js/app.40dae200.js",
    "revision": "a2de7987c52fe53a3bd12c200329ca21"
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
    "revision": "643a776bfc0d58c715a10bdc2a190912"
  },
  {
    "url": "categories/java/index.html",
    "revision": "505c691f81fc1255f59c5adf48c8ef0a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "fc4d86135efb56ca32c3aa7c30308f1c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "50b68e33fc602cbb405d73d8bb68976e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "eeb5b9bfe34684586a1a92308d155536"
  },
  {
    "url": "css/style.css",
    "revision": "282db8a64eca342e1c7c55133f3dba09"
  },
  {
    "url": "guide/index.html",
    "revision": "19a048a48298a4f2667fda883d2520a8"
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
    "revision": "1f9e31ed0def8f4aae546fa9e20e23a7"
  },
  {
    "url": "js/custom.js",
    "revision": "64135ba7fe1aa98e889ec252f8b3430a"
  },
  {
    "url": "tag/index.html",
    "revision": "b8d57d4a54eb259224241df29dcab4bf"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "367aed94180a60972ee625d062ee7f81"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "0f45549506dd79273f10444c5dc96c34"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c2480d1573982aa028f1eec37df822bc"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "eb3846882a10e945d13d6922cf7d4863"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "60c93372b1b46f74a3774aebcb7eee1f"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "ac797ba2badbc306020f5428d5939348"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "68aaea0ac4f5a386ecc5948cc41821fb"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "aa7fed44f13a3bd02b98d52d3f91a20f"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "2ffba15132fb3cd79c93fa480fcaf675"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "5cb349fe2a55caed738dfc2e6914052a"
  },
  {
    "url": "timeline/index.html",
    "revision": "622932798f52865ae7f796b12d8899d0"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "b3da9b53354d4cde1e1c558b85bbcac7"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "362b6869df7a64c673a531b615ed6c8a"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "601895cc89792d43171fc524cc8fd414"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f94dd54e6c9b8b6fa42218ee72587205"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8301e1ee7c7a1bbce265e0852fbb2a42"
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
