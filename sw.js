if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-a953cab6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"f2daf7418d229c6d5ade2d2b9de82227"},{url:"assets/HomeView.3194cd5c.js",revision:null},{url:"assets/index.7b1b3411.js",revision:null},{url:"assets/index.b2ba14aa.css",revision:null},{url:"assets/PseudoClasses.540718cf.js",revision:null},{url:"assets/ResponsiveDesign.e80ac0bf.js",revision:null},{url:"assets/ToastBox.fa211592.js",revision:null},{url:"index.html",revision:"cb054a5b06930a77212f7d248a5f44c9"},{url:"manifest.webmanifest",revision:"d59bea7b331afbc1eb928a3e727a9d21"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
