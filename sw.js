if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const o=e=>i(e,r),u={module:{uri:r},exports:l,require:o};s[r]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(t(...e),l)))}}define(["./workbox-a953cab6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Home.f8a9d413.js",revision:null},{url:"assets/index.16e2cb78.css",revision:null},{url:"assets/index.8450a22f.js",revision:null},{url:"assets/ResponsiveDesign.ae1c8d62.js",revision:null},{url:"assets/States.dbb7b3ee.js",revision:null},{url:"assets/Toast.d2cb73cb.js",revision:null},{url:"index.html",revision:"99e96dae12d996c8530a78dabe9d01d8"},{url:"manifest.webmanifest",revision:"d59bea7b331afbc1eb928a3e727a9d21"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
