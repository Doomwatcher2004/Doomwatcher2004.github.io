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
    "revision": "f26e967f88506eb6f755f68245f4612d"
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
    "url": "assets/js/app.143f170b.js",
    "revision": "5d86faababeab53625004bf182580827"
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
    "revision": "d9093d14a0f3778d664fe3bf9bd01c96"
  },
  {
    "url": "categories/java/index.html",
    "revision": "76a6e7d3e2b96483ecf67064de57c032"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "8f1bcb0fa20f2f07c4a2fcf206f41b90"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d36546e6301053491cbacf3087279bd6"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "aeec23775782694a4f4f7522e4d2bdac"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "ea57312398d9a475d43e5d0f42ee4c52"
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
    "revision": "d3fed72ba1206ae30252dc484d3e7e2f"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "b4574f67ed4640a3a19f47a2ddc9568d"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "bcc7263ddd34a685d1e6dae638a22746"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5c04088a74727a17101b468c5936a94a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "6d4afa58ebad8e621b8286db2614e3b1"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "0148802a3dd81008dc6dbee89e61ccf0"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "5e06e79b39ea9ec2fce9b6b82d1e6872"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f84425ec3e58ca0cff8a727a3697e02d"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "d43412002f105054508d948783985bd7"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "023f08a6fe2d60b67717a68fcb0878b7"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "d88a3e3f8eddc12875a007294ab5b135"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "1ef28110a9b39911b8690c9718b1c13b"
  },
  {
    "url": "timeline/index.html",
    "revision": "d7a4e3df65796235b1c1ba8edcce3a0e"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "aa097b3dbd629614f7fa8303fa7235af"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "126902a22e622265a82c969d5d5bd832"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "ea780ffb47d2e4a2efbbd28c36f5b9ed"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f431ce56e1b3c8a17ac86709d6e4a1f4"
  },
  {
    "url": "生活分享/life.html",
    "revision": "ba82310e17323dd464a95eaf49ba9956"
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
