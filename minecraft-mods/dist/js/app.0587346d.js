(function(e){function t(t){for(var a,r,u=t[0],s=t[1],c=t[2],l=0,d=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==i[u]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i={app:0},o=[];function u(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"bb18e409"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"57cd9bf6"}[e]+".css",i=s.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var c=o[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===i))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===a||l===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],m.parentNode.removeChild(m),n(o)},m.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){r[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"11a8":function(e,t,n){e.exports=n.p+"img/mod_image_2.e69c14d0.jpg"},1242:function(e,t,n){"use strict";var a=n("5133"),r=n.n(a);r.a},"330f":function(e,t,n){"use strict";var a=n("81c8"),r=n.n(a);r.a},3343:function(e,t,n){e.exports=n.p+"img/mod_image_4.21a389eb.jpg"},"4f6b":function(e,t,n){e.exports=n.p+"img/mod_image_6.7bc7017f.jpg"},5133:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"header"}},[a("img",{attrs:{src:n("8433")}}),a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),a("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),a("router-link",{attrs:{to:"/installations"}},[e._v("HowTo")])],1)]),a("div",{attrs:{id:"content"}},[a("router-view")],1),e._m(0)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"footer"}},[n("a",{attrs:{href:"https://github.com/ChosenGible/MinecraftMods"}},[e._v("---My github---")])])}],o=(n("034f"),n("2877")),u={},s=Object(o["a"])(u,r,i,!1,null,null,null),c=s.exports,l=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("ModList",{attrs:{mods:e.mods}})],1)},m=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"mods"},e._l(e.mods,(function(t){return n("div",{key:t.id,staticClass:"mod"},[n("div",{staticClass:"image"},[n("img",{attrs:{src:e.imagePath(t)}})]),n("div",{staticClass:"info"},[n("h1",[e._v(e._s(t.name))]),n("h2",[e._v("by "+e._s(t.author))]),n("p",[e._v(e._s(t.descr))])])])})),0)])},f=[],g=n("c22b"),h=n.n(g),v=n("11a8"),_=n.n(v),b=n("df7c"),y=n.n(b),j=n("3343"),w=n.n(j),x=n("dace"),C=n.n(x),O=n("4f6b"),k=n.n(O),E=n("6ad0"),P=n.n(E),M=n("91a4"),T=n.n(M),A=n("ca63"),S=n.n(A),$={name:"ModList",props:{mods:Array},methods:{imagePath:function(e){return 1===e.id?h.a:2===e.id?_.a:3===e.id?y.a:4===e.id?w.a:5===e.id?C.a:6===e.id?k.a:7===e.id?P.a:8===e.id?T.a:9===e.id?S.a:void 0}}},q=$,L=(n("1242"),Object(o["a"])(q,p,f,!1,null,"fad82b62",null)),N=L.exports,H={name:"Home",components:{ModList:N},data:function(){return{}},computed:{mods:function(){return this.$root.$data.mods}}},B=H,D=Object(o["a"])(B,d,m,!1,null,null,null),I=D.exports,F=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"instructions"},[n("h1",[e._v("How to install minecraft mods")]),n("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/Fd_IjR3BmOc",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}],G=(n("330f"),{}),J=Object(o["a"])(G,F,z,!1,null,"34462995",null),R=J.exports;a["a"].use(l["a"]);var U=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/installations",name:"HowTo",component:R}],V=new l["a"]({mode:"history",base:"/",routes:U}),K=V,Y=[{id:1,name:"Fixflex",author:"hladd0",image:"mod_image_1.jpg",descr:"Integer ac leo. Pellentesque ultrices mattis odio."},{id:2,name:"Stringtough",author:"egrzelczyk1",image:"mod_image_2.jpg",descr:"In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum."},{id:3,name:"Pannier",author:"tkloser2",image:"mod_image_3.jpg",descr:"Praesent id massa id nisl venenatis lacinia."},{id:4,name:"Treeflex",author:"aucceli3",image:"mod_image_4.jpg",descr:"Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy."},{id:5,name:"Greenlam",author:"wraiston4",image:"mod_image_5.jpg",descr:"Suspendisse accumsan tortor quis turpis."},{id:6,name:"Y-find",author:"dgrimmert5",image:"mod_image_6.jpg",descr:"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."},{id:7,name:"Trippledex",author:"lrichmond6",image:"mod_image_7.jpg",descr:"Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor."},{id:8,name:"Rank",author:"hcatmull7",image:"mod_image_8.jpg",descr:"Aenean sit amet justo. Morbi ut odio."},{id:9,name:"Mo'Blocks",author:"lsmail8",image:"mod_image_9.jpg",descr:"Ut tellus. Nulla ut erat id mauris vulputate elementum."}],Q=Y;a["a"].config.productionTip=!1;var W={mods:Q};new a["a"]({router:K,data:W,render:function(e){return e(c)}}).$mount("#app")},"6ad0":function(e,t,n){e.exports=n.p+"img/mod_image_7.c167e05b.jpg"},"81c8":function(e,t,n){},8433:function(e,t,n){e.exports=n.p+"img/mod-page-title.c11a8ae9.png"},"85ec":function(e,t,n){},"91a4":function(e,t,n){e.exports=n.p+"img/mod_image_8.dc06545a.jpg"},c22b:function(e,t,n){e.exports=n.p+"img/mod_image_1.87f7df6c.jpg"},ca63:function(e,t,n){e.exports=n.p+"img/mod_image_9.c178c0fc.jpg"},dace:function(e,t,n){e.exports=n.p+"img/mod_image_5.74871a07.jpg"},df7c:function(e,t,n){e.exports=n.p+"img/mod_image_3.5aec24a2.jpg"}});
//# sourceMappingURL=app.0587346d.js.map