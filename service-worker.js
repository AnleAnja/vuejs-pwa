if(!self.define){let s,e={};const l=(l,u)=>(l=new URL(l+".js",u).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(u,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let r={};const o=s=>l(s,i),j={module:{uri:i},exports:r,require:o};e[i]=Promise.all(u.map((s=>j[s]||o(s)))).then((s=>(n(...s),r)))}}define(["./workbox-db5fc017"],(function(s){"use strict";s.setCacheNameDetails({prefix:"monstradore"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/vuejs-pwa/css/105.efca6447.css",revision:null},{url:"/vuejs-pwa/css/250.f785568a.css",revision:null},{url:"/vuejs-pwa/css/384.712ee2e1.css",revision:null},{url:"/vuejs-pwa/css/532.93add22f.css",revision:null},{url:"/vuejs-pwa/css/656.723a2a33.css",revision:null},{url:"/vuejs-pwa/css/683.9d788514.css",revision:null},{url:"/vuejs-pwa/css/965.4fd3d81d.css",revision:null},{url:"/vuejs-pwa/css/app.92fbbd99.css",revision:null},{url:"/vuejs-pwa/css/chunk-vendors.3f2d3037.css",revision:null},{url:"/vuejs-pwa/fonts/materialdesignicons-webfont.21f691f0.ttf",revision:null},{url:"/vuejs-pwa/fonts/materialdesignicons-webfont.54b0f60d.woff2",revision:null},{url:"/vuejs-pwa/fonts/materialdesignicons-webfont.5d875350.eot",revision:null},{url:"/vuejs-pwa/fonts/materialdesignicons-webfont.d671cbf6.woff",revision:null},{url:"/vuejs-pwa/img/sample.896c7907.jpeg",revision:null},{url:"/vuejs-pwa/index.html",revision:"4383eea0c70947d04d28429db30c4e96"},{url:"/vuejs-pwa/js/105.a918e5f8.js",revision:null},{url:"/vuejs-pwa/js/144.b06834a9.js",revision:null},{url:"/vuejs-pwa/js/179.71d45748.js",revision:null},{url:"/vuejs-pwa/js/250.8e2922c2.js",revision:null},{url:"/vuejs-pwa/js/27.c116bba8.js",revision:null},{url:"/vuejs-pwa/js/384.0ac347da.js",revision:null},{url:"/vuejs-pwa/js/434.ac8ebbaa.js",revision:null},{url:"/vuejs-pwa/js/448.7217fc58.js",revision:null},{url:"/vuejs-pwa/js/483.7e63d098.js",revision:null},{url:"/vuejs-pwa/js/532.0d5cbf43.js",revision:null},{url:"/vuejs-pwa/js/572.7435414c.js",revision:null},{url:"/vuejs-pwa/js/656.5b3220d9.js",revision:null},{url:"/vuejs-pwa/js/683.f714d983.js",revision:null},{url:"/vuejs-pwa/js/731.c1562538.js",revision:null},{url:"/vuejs-pwa/js/779.dfd9fab9.js",revision:null},{url:"/vuejs-pwa/js/902.e539f099.js",revision:null},{url:"/vuejs-pwa/js/965.23daef8e.js",revision:null},{url:"/vuejs-pwa/js/999.0cfa742e.js",revision:null},{url:"/vuejs-pwa/js/app.c46e76c1.js",revision:null},{url:"/vuejs-pwa/js/chunk-vendors.74e4b5b7.js",revision:null},{url:"/vuejs-pwa/js/webfontloader.2504eff2.js",revision:null},{url:"/vuejs-pwa/manifest.json",revision:"b706618ebba9b2a367fc4160c35cf12d"},{url:"/vuejs-pwa/obj/sampleobject.mtl",revision:"69fa98403711bc68f68fc995f5556035"},{url:"/vuejs-pwa/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
