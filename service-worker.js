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
    "revision": "bd09f9d85d8704eac216b68fc8476a5f"
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
    "url": "assets/js/12.d5946778.js",
    "revision": "8f5295a943bc9282ba34d7885db10bed"
  },
  {
    "url": "assets/js/13.ff8869d1.js",
    "revision": "b8934ecdfbc3eb16d6388595c0372104"
  },
  {
    "url": "assets/js/14.179eaf8f.js",
    "revision": "7fdc669ad85130ad137a228209249b3d"
  },
  {
    "url": "assets/js/15.740d29e0.js",
    "revision": "ed1178aae3893d0a9f56c232548be0df"
  },
  {
    "url": "assets/js/16.fc67d057.js",
    "revision": "7bed02765cf9056e995bf32ff82bb3e1"
  },
  {
    "url": "assets/js/17.287fa90a.js",
    "revision": "6bfe9f510eef6ee814bac18322a20aa7"
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
    "url": "assets/js/app.3a2b4242.js",
    "revision": "29573106258ad38b695583c415cf3e5b"
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
    "revision": "9de3f460dca83880e565d605ae56ee21"
  },
  {
    "url": "categories/java/index.html",
    "revision": "6eeb480a795e17866c3cf9524e8ee47f"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "072d027e7f9be29f0e148e49eaa18b2c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "12a5192a164d31633af5a5e87713763f"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "d8f534f76e0107482f206cde8a8a3f83"
  },
  {
    "url": "css/style.css",
    "revision": "96b38e332aded9ec4a01fc8c1503bbdf"
  },
  {
    "url": "guide/index.html",
    "revision": "4dd46efb2d9eee5a3a14ad34b9123eed"
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
    "revision": "41f7cdeddc17fe4600e3d192a9201c45"
  },
  {
    "url": "js/custom.js",
    "revision": "64135ba7fe1aa98e889ec252f8b3430a"
  },
  {
    "url": "tag/index.html",
    "revision": "6c51dfa6e707bd8f226c81f7fd0bbb47"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "9e31744a7ba9d26b593c1e98f556b4b9"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "cfe5f0c92dc3f7da4c31764615fd525c"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ab30037736c1a696605c06c40ff6de15"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "971d1098ee6a8621260132f137051073"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "8182db2627b928f0349df50c471a08f2"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "1ddba14cba06b3b3ba3881cea98c88fb"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "2335d7572338867655b5d8591df3695b"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "1c7f0ca6ddc157a44f21285968fc10bd"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "33170923d6f221a0a8e8ed5315f0e4ff"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "ebbbc056355154b004485548dcc0971e"
  },
  {
    "url": "timeline/index.html",
    "revision": "7266019bc7aae7723ea4f7723d2d74ba"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "ced743457828d51e2a3bb1629a5b191b"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "fcc3f371dbac8aadda610b81492b2c84"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "ebea3f1186cfb8e7c19eaaef8f17ff0a"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "357146c29cd8c46d057417e14ba2685d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f6fbd7e9b8024015b53d9354adac28cd"
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
