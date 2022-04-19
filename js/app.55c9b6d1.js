(function(){"use strict";var e={1188:function(e,n,t){var o=t(9242),r=t(3396);const a={class:"view"};function i(e,n,t,o,i,l){const c=(0,r.up)("AppNavbar"),s=(0,r.up)("router-view"),u=(0,r.up)("AppFooter");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(c),(0,r._)("div",a,[(0,r.Wm)(s)]),(0,r.Wm)(u)],64)}const l={class:"navbar navbar-expand-lg navbar-light text-white"},c={class:"container"},s=["src"],u=(0,r._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r._)("span",{class:"navbar-toggler-icon"})],-1),f={class:"collapse navbar-collapse",id:"navbarSupportedContent"},d={class:"navbar-nav me-auto mb-2 mb-lg-0"},p={class:"nav-item"},m=(0,r.Uk)(" Home "),v={class:"nav-item"},b=(0,r.Uk)(" About "),h=(0,r._)("li",{class:"nav-item"},[(0,r._)("a",{class:"nav-link",href:"#skills"}," Skills ")],-1),g={class:"nav-item"},k=(0,r.Uk)("Portfolio"),w={class:"nav-item"},y=(0,r.Uk)(" Experience "),_={class:"social-icons"},A=["href"],j=["href"],C=["href"],x=["href"];function E(e,n,o,a,i,E){const O=(0,r.up)("router-link"),S=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("nav",l,[(0,r._)("div",c,[(0,r.Wm)(O,{class:"navbar-brand",to:{name:"home"}},{default:(0,r.w5)((()=>[(0,r._)("img",{src:t(9574),alt:"Logo",class:"logo"},null,8,s)])),_:1}),u,(0,r._)("div",f,[(0,r._)("ul",d,[(0,r._)("li",p,[(0,r.Wm)(O,{class:"nav-link",to:{name:"home"}},{default:(0,r.w5)((()=>[m])),_:1})]),(0,r._)("li",v,[(0,r.Wm)(O,{class:"nav-link",to:{name:"about"}},{default:(0,r.w5)((()=>[b])),_:1})]),h,(0,r._)("li",g,[(0,r.Wm)(O,{class:"nav-link",to:{name:"projects"}},{default:(0,r.w5)((()=>[k])),_:1})]),(0,r._)("li",w,[(0,r.Wm)(O,{class:"nav-link",to:{name:"experience"}},{default:(0,r.w5)((()=>[y])),_:1})])]),(0,r._)("div",_,[(0,r._)("li",null,[(0,r._)("a",{href:i.socialLinks.facebook,target:"_blank"},[(0,r.Wm)(S,{icon:["fab","facebook-f"]})],8,A)]),(0,r._)("li",null,[(0,r._)("a",{href:i.socialLinks.twitter,target:"_blank"},[(0,r.Wm)(S,{icon:["fab","twitter"]})],8,j)]),(0,r._)("li",null,[(0,r._)("a",{href:i.socialLinks.github,target:"_blank"},[(0,r.Wm)(S,{icon:["fab","github"]})],8,C)]),(0,r._)("li",null,[(0,r._)("a",{href:i.socialLinks.linkedin,target:"_blank"},[(0,r.Wm)(S,{icon:["fab","linkedin-in"]})],8,x)])])])])])}var O=t(8125),S=t(2234);O.vI.add(S.mdU,S.AYu,S.zhw,S.hwn);var N={name:"AppNavbar",data(){return{socialLinks:{facebook:"https://www.facebook.com/akaKaynite",twitter:"https://twitter.com/akaKaynite",github:"https://github.com/Kaynite",linkedin:"https://www.linkedin.com/in/kareemsaber/"}}}},P=t(89);const T=(0,P.Z)(N,[["render",E]]);var W=T,L=t(7139);const F={class:"m-0"};function D(e,n,t,o,a,i){return(0,r.wg)(),(0,r.iD)("footer",null,[(0,r._)("p",F,"© "+(0,L.zw)(i.year)+" Kareem Saber. All rights reserved.",1)])}var K={name:"AppFooter",computed:{year(){return(new Date).getFullYear()}}};const U=(0,P.Z)(K,[["render",D]]);var B=U,Z={components:{AppNavbar:W,AppFooter:B},setup(){}};const q=(0,P.Z)(Z,[["render",i]]);var z=q,H=t(5431);(0,H.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var M=t(678);const Y=[{path:"/",name:"home",component:()=>Promise.all([t.e(321),t.e(243),t.e(177)]).then(t.bind(t,9211)),meta:{title:"Kareem Saber"}},{path:"/about",name:"about",component:()=>Promise.all([t.e(321),t.e(443)]).then(t.bind(t,432)),meta:{title:"About"}},{path:"/projects",name:"projects",component:()=>Promise.all([t.e(321),t.e(243),t.e(176)]).then(t.bind(t,9407)),meta:{title:"Projects"}},{path:"/experience",name:"experience",component:()=>Promise.all([t.e(321),t.e(417)]).then(t.bind(t,4699)),meta:{title:"Experience"}}],I=(0,M.p7)({history:(0,M.PO)("/"),routes:Y,linkExactActiveClass:"active"});I.beforeEach((e=>{document.title=e.meta.title,setTimeout((()=>{window.scrollTo(0,0)}),100)}));var G=I,J=(t(8937),t(7749)),Q=t(204);(0,o.ri)(z).use(G).use(Q.Z).component("font-awesome-icon",J.GN).mount("#app")},9574:function(e,n,t){e.exports=t.p+"img/logo.5e9d93a8.svg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],a=e[u][2];for(var l=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+({176:"projects",177:"home",417:"experience",443:"about"}[e]||e)+"."+{176:"5e4dd7b7",177:"084d5c07",243:"72f73105",321:"f2018acb",417:"a306ec1e",443:"9f528ee2"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+{417:"experience",443:"about"}[e]+"."+{417:"c86ca515",443:"c3680342"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="portfolio:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var l,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var f=s[u];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+a){l=f;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",n+a),l.src=o),e[o]=[r];var d=function(n,t){l.onerror=l.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),c&&document.head.appendChild(l)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=l,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=a,r.href=n,document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),l=t.p+i;if(n(i,l))return r();e(o,l,r,a)}))},r={143:0};t.f.miniCss=function(e,n){var t={417:1,443:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),l=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,r[1](l)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],l=o[1],c=o[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(c)var u=c(t)}for(n&&n(o);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(1188)}));o=t.O(o)})();
//# sourceMappingURL=app.55c9b6d1.js.map