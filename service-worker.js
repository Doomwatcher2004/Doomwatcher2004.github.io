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
    "revision": "84cdb4dc2c2beb7a28b52090fbde2fc3"
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
    "url": "assets/js/15.e5554f2d.js",
    "revision": "d2993fc9923278e52739f9b696cc9cef"
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
    "url": "assets/js/app.941150e3.js",
    "revision": "6ebb3a2335c22db3ac2e4c9fedf4c2b8"
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
    "revision": "731edea1646d33a01ac8fd385b18263c"
  },
  {
    "url": "categories/java/index.html",
    "revision": "f078817c3df4c457584342a5128b1c1a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "5f3b798e58eca241501ffc52095ed011"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "31d870a273f934393f6a02d797e70e22"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "0e2ea692759ecd2544f879bf9342aa65"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "05a5b611895b06181b26bacc26281204"
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
    "revision": "129b225a74ca555e72315aa75db159fd"
  },
  {
    "url": "img/logo1.png",
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
    "url": "img/sidebarCode.png",
    "revision": "281ff28e3c4ec252432502d74878aad5"
  },
  {
    "url": "index.html",
    "revision": "330548fb0d5580647a166cfcc55eef5e"
  },
  {
    "url": "js/custom.js",
    "revision": "6e09eceff4dd28f6123bf85f3813a76f"
  },
  {
    "url": "tag/index.html",
    "revision": "b79d82a75e43971ce7aa1ee86bce0149"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "3440925d59055ca216e330382c74fd6d"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "c1268fff518daed7d0c1a260cbfa2ce2"
  },
  {
    "url": "tags/js/index.html",
    "revision": "2584963167e50f77ff4b5d8d0b76a9a9"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "92a00e77b3123736836d66a0d32aba26"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "41d36cea015ac16db6176e342c62d5d8"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "451cfe3373db2914f8a5a9df94a12f9b"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "4a0d7f666239a42f7bf461e3b4bee5a6"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "a8a3bc4cb794fe2cb3575f0b34d07b4b"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "b2e7772cb85606fde05c7b0d0e9acad5"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "d4b4bd336f9fdfc777eed528909169d0"
  },
  {
    "url": "timeline/index.html",
    "revision": "5a626d38c78af9169623a221cdaa84cf"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c67be5bec7ab81c1df3359c57ec02521"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "c9aa785b9af502de43edfebee0a6e547"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "856c9936e745df63892db82b5990b1bd"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "1a55772e9652729ee430cb80e603a816"
  },
  {
    "url": "生活分享/life.html",
    "revision": "5b9e793ed8401179f6cff29e12fed132"
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
