(function(){"use strict";var e={1910:function(e,t,n){var r=n(538),o=function(){var e=this,t=e._self._c;return t("router-view")},a=[],i={name:"App",data:()=>({})},s=i,c=n(1001),u=(0,c.Z)(s,o,a,!1,null,null,null),d=u.exports,l=n(5205);(0,l.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var f=n(1083),m=n(629);r.ZP.use(m.ZP);var h=new m.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),p=n(9249),g=n(3505),v={...g.Z,TRANSLATION:"TRANSLATION",Admin:"Admin",Provider:"Provider",Services:"Services",Products:"Products",Orders:"Orders",Dashboard:"Dashboard",Apartments:"Apartments","E-Contracts":"E-Contracts","Payment Requests":"Payment Requests",Clients:"Clients",Users:"Users",Notifications:"Notifications",Announcement:"Announcement",Logout:"Logout","Admin Dashboard":"Admin Dashboard","Per month statistics":"Per month statistics","Properties Added":"Properties Added","Rented Apartments":"Rented Apartments","Registered Users":"Registered Users",key1:"key 1 internationalization",key2:"key 2 internationalization",table_header:{EMAIL:"EMAIL",NAME:"NAME","CONTACT NUMBER":"CONTACT NUMBER",CITY:"CITY",RENTED:"RENTED",ACTION:"ACTION",PRICE:"PRICE",STATUS:"STATUS","CUSTOMER NAME":"CUSTOMER NAME",TYPE:"TYPE",DATE:"DATE",TIME:"TIME",COLORS:"COLORS",QUANTITY:"QUANTITY","DATE ADDED":"DATE ADDED","PRODUCT NAME":"PRODUCT NAME"},tabs:{"Assigned to me":"Assigned to me",Requests:"Requests"}},b=n(3608),A={...b.Z,TRANSLATION:"ترجمة",Admin:"مسؤل",Dashboard:"لوحة القيادة",Apartments:"شقق سكنية","E-Contracts":"العقود الإلكترونية","Payment Requests":"طلبات الدفع",Clients:"العملاء",Users:"المستخدمون",Notifications:"إشعارات",Announcement:"إعلان",Logout:"تسجيل خروج","Admin Dashboard":"لوحة تحكم المسؤول","Per month statistics":"إحصائيات شهرية","Properties Added":"تمت إضافة الخصائص","Rented Apartments":"شقق مستأجرة","Registered Users":"المستخدمون المسجلون",key1:"لوحة القيادة",key2:"key 2 internationalization",namespace:{key3:"key 3 internationalization"},table_header:{EMAIL:"البريد الإلكتروني",NAME:"اسم","CONTACT NUMBER":"رقم الاتصال",CITY:"مدينة",RENTED:"مستأجرة",ACTION:"عمل",PRICE:"سعر",STATUS:"حالة"},tabs:{"Assigned to me":"تعيين لي",Requests:"الطلبات"}};r.ZP.use(p.Z);var y=new p.Z({lang:{locales:{ar:A,en:v},current:"ar"},rtl:!1,theme:{dark:!1,themes:{light:{dark:"#2E3034","dark-1":"#474747",light:"#F0F2F5",secondary:"#D9D9D9","secondary-1":"#7B809A","secondary-2":"#767676","secondary-3":"#2c3e50"}}}}),E=n(2058),P=n.n(E);r.ZP.use(P(),{theme:"light",hideProgressbar:!0,position:"top-center"});var T=n(5128),C={install(e){e.prototype.$links=[{name:"Dashboard",route:"Banker Dashboard",icon:"mdi-bell",children:[],role:["PROVIDER",""]},{name:"Services",route:"services",icon:"mdi-account-hard-hat",children:[],role:[T.CD,T.On]},{name:"Products",route:"products",icon:"mdi-server",children:[],role:[T.uc,T.p5,T.JD]},{name:"Orders",route:"orders",icon:"mdi-cart",children:[],role:[T.uc,T.p5,T.JD]}]}},w=n(6086);r.ZP.config.productionTip=!1,r.ZP.use(C),r.ZP.use(w.og);var N=(0,w.WB)();r.ZP.use(P(),{theme:"light",hideProgressbar:!0,position:"top-center"}),new r.ZP({router:f.Z,store:h,vuetify:y,pinia:N,render:function(e){return e(d)}}).$mount("#app")},9403:function(e,t,n){n.d(t,{b:function(){return i}});var r=n(9669),o=n.n(r);let a="https://api.shuqah.sa/v1/api";const i=o().create({baseURL:a});i.interceptors.request.use((e=>{const t=localStorage.getItem("access_token");return t&&(e.headers.common["Authorization"]=`Bearer ${t}`),e}))},5128:function(e,t,n){n.d(t,{CD:function(){return r},JD:function(){return s},On:function(){return o},p5:function(){return a},uc:function(){return i}});const r="Move Furniture",o="Maintenance",a="Home Furnishings",i="Electronic Devices",s="Decorations"},1083:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(538),o=n(8345);function a(e,t,n){const r=t[n];return r?(...o)=>{e.next(...o);const i=a(e,t,n+1);r({...e,next:i})}:e.next}var i=a;n(8467);function s({next:e}){let t=localStorage.getItem("access_token");return t?e():e("/login")}var c=n(6086);(0,c.WB)();r.ZP.use(o.ZP);const u=[{path:"/:locale",component:{template:"<router-view></router-view>"},beforeEnter:(e,t,n)=>{const r=e.params.locale,o=["en","ar"];return o.includes(r)?n():n("en/login")},children:[{path:"login",name:"login",component:()=>Promise.all([n.e(288),n.e(657),n.e(513),n.e(148)]).then(n.bind(n,3148))},{path:"",component:()=>Promise.all([n.e(288),n.e(295),n.e(513),n.e(193)]).then(n.bind(n,6093)),children:[{path:"services",name:"services",component:()=>Promise.all([n.e(288),n.e(657),n.e(295),n.e(762),n.e(913)]).then(n.bind(n,3913)),meta:{middleware:[s]}},{path:"service",name:"service-details",component:()=>Promise.all([n.e(288),n.e(750),n.e(445)]).then(n.bind(n,5436)),meta:{middleware:[s]}},{path:"products",name:"products",component:()=>Promise.all([n.e(288),n.e(657),n.e(295),n.e(750),n.e(762),n.e(152)]).then(n.bind(n,8457)),meta:{middleware:[s]}},{path:"product",name:"product-details",component:()=>Promise.all([n.e(288),n.e(657),n.e(876)]).then(n.bind(n,1876)),meta:{middleware:[s]}},{path:"orders",name:"orders",component:()=>Promise.all([n.e(288),n.e(657),n.e(295),n.e(750),n.e(762),n.e(797)]).then(n.bind(n,1787)),meta:{middleware:[s]}},{path:"order",name:"order-details",component:()=>Promise.all([n.e(288),n.e(750),n.e(927)]).then(n.bind(n,2580)),meta:{middleware:[s]}}]},{path:"*",redirect:{name:"login",params:{locale:"en"}}}]}],d=new o.ZP({mode:"history",base:"/",routes:u});d.beforeEach(((e,t,n)=>{if(e.meta.middleware){const r=Array.isArray(e.meta.middleware)?e.meta.middleware:[e.meta.middleware],o={from:t,next:n,to:e},a=i(o,r,1);return r[0]({...o,next:a})}return n()}));var l=d},8467:function(e,t,n){n.d(t,{t:function(){return s}});var r=n(6086),o=n(9403),a=n(5128),i=n(1083);const s=(0,r.Q_)("authentication",{state(){return{user:null}},actions:{async login(e){return await new Promise(((t,n)=>{o.b.post("/login",e).then((e=>{localStorage.setItem("access_token",e.data.data.access_token);let n="products";this.auth().then((e=>{this.user=e.data,[a.CD,a.On].includes(this.user.category.category.category)&&(n="services")})),i.Z.push({name:n,params:{locale:localStorage.getItem("lang")?localStorage.getItem("lang"):"en"}}),t(e.data.data)})).catch((e=>{n(e.response.data.errors)}))}))},async logout(){await o.b.get("/logout").then((e=>{localStorage.removeItem("access_token"),i.Z.push({name:"login"})}))},async auth(){await o.b.get("/user").then((e=>{this.user=e.data})).catch((e=>{}))}}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],a=e[d][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(d--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{148:"c8b3648b",152:"cabc6167",193:"0a7f1856",288:"306e5b7f",295:"63eced16",445:"9ad9a2fe",513:"2aec90ff",657:"12ad4ff2",750:"a897ac10",762:"f560a14f",797:"d5ea9c14",876:"6ddace05",913:"c1a693a3",927:"6f1c99dd"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{148:"3e138bdc",152:"45b6b464",193:"9761b068",445:"bdec2326",513:"0477ff3d",657:"458bdf96",762:"c94b39b6",797:"f90af4d9",876:"d77f3bb5",927:"bdec2326"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="provider-frontend:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+a){s=l;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return o();e(r,s,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={148:1,152:1,193:1,445:1,513:1,657:1,762:1,797:1,876:1,927:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],c=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var d=c(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},r=self["webpackChunkprovider_frontend"]=self["webpackChunkprovider_frontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1910)}));r=n.O(r)})();
//# sourceMappingURL=app.5ef03508.js.map