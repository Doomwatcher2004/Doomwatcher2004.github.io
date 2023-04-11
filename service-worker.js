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
    "revision": "40593ca41774345a4dbe158cc98d4929"
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
    "url": "assets/js/13.4ab2683e.js",
    "revision": "7208e8294b490b53b99964be4640a8ae"
  },
  {
    "url": "assets/js/14.5be2e989.js",
    "revision": "39142490c34d8b87eef5230e87d45f41"
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
    "url": "assets/js/17.81826f14.js",
    "revision": "3ccb10a92edd069925666d9133873238"
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
    "url": "assets/js/app.18f93719.js",
    "revision": "1a410a39f9b76a9098f6358e2a67c8ca"
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
    "revision": "5cdd855a511bc6788a83636a844838eb"
  },
  {
    "url": "categories/java/index.html",
    "revision": "43a4f1b5ea87d1d357fc3d8651deec79"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "56f787fc5e75abd4d058bfa3bbac86c8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b452639c507bf1ab2900edbe44b06171"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "fe8eabc5edc1ab963b0dfe7dae7a596c"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "989ebba422ed9db0402df0fa35495ecb"
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
    "revision": "841159d31012c6135099392adc85377c"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "bc279698b04fbc187b80751bff1831e5"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "fe9b396b0e664a9e405e631a60b7bc63"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "a3734f14c195b29fd2372dfc5ba39241"
  },
  {
    "url": "tags/js/index.html",
    "revision": "570189704428571fe4808acea0f4e298"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "4f60b77b898d6c13fa60abb46b4ba0fc"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "76e18d34eafebcf717b5033040c67c5d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "b8abe021559f5cd99261a7155bb294ab"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "192620d7009ffb9ea2c5168b3bcf22ee"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "3915216cbba095a3f4027221af2b5f9c"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "84a4f75e1229150a26c312c3e34bc63e"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "74f5a13d645cf8c50e95d01e05e43735"
  },
  {
    "url": "timeline/index.html",
    "revision": "05c020a6e50e2db35f1a5863f7c7fdf6"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "9e67912745f110cb28dee6029c22c631"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "044b5df363bd53870f0dbf7c4d1e88d2"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "7a421af9a787d8f35e51660838ffba03"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "dc99d13683eb824cc698a9fc382f6975"
  },
  {
    "url": "生活分享/life.html",
    "revision": "cbfc0fd59ab0140dea07f97a980b3a38"
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
