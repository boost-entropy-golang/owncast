(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6559],{24308:function(t,e,n){"use strict";n.d(e,{c4:function(){return o}});var r=n(4942),i=n(87462),o=["xxl","xl","lg","md","sm","xs"],a={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},c=new Map,u=-1,s={};e.ZP={matchHandlers:{},dispatch:function(t){return s=t,c.forEach(function(t){return t(s)}),c.size>=1},subscribe:function(t){return c.size||this.register(),u+=1,c.set(u,t),t(s),u},unsubscribe:function(t){c.delete(t),c.size||this.unregister()},unregister:function(){var t=this;Object.keys(a).forEach(function(e){var n=a[e],r=t.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)}),c.clear()},register:function(){var t=this;Object.keys(a).forEach(function(e){var n=a[e],o=function(n){var o=n.matches;t.dispatch((0,i.Z)((0,i.Z)({},s),(0,r.Z)({},e,o)))},c=window.matchMedia(n);c.addListener(o),t.matchHandlers[n]={mql:c,listener:o},o(c)})}}},25378:function(t,e,n){"use strict";var r=n(67294),i=n(57838),o=n(24308);e.Z=function(){var t=!(arguments.length>0)||void 0===arguments[0]||arguments[0],e=(0,r.useRef)({}),n=(0,i.Z)();return(0,r.useEffect)(function(){var r=o.ZP.subscribe(function(r){e.current=r,t&&n()});return function(){return o.ZP.unsubscribe(r)}},[]),e.current}},97183:function(t,e,n){"use strict";var r=n(2897),i=n(7293),o=r.ZP;o.Header=r.h4,o.Footer=r.$_,o.Content=r.VY,o.Sider=i.Z,e.Z=o},11382:function(t,e,n){"use strict";var r=n(87462),i=n(4942),o=n(97685),a=n(94184),c=n.n(a),u=n(23279),s=n.n(u),l=n(98423),f=n(67294),d=n(53124),m=n(96159),p=n(93355),v=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)0>e.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};(0,p.b)("small","default","large");var h=null,g=function(t){var e=t.spinPrefixCls,n=t.spinning,a=void 0===n||n,u=t.delay,p=t.className,g=t.size,x=void 0===g?"default":g,y=t.tip,j=t.wrapperClassName,b=t.style,w=t.children,Z=v(t,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),E=f.useState(function(){return a&&(!a||!u||!!isNaN(Number(u)))}),N=(0,o.Z)(E,2),O=N[0],k=N[1];return f.useEffect(function(){var t=s()(function(){k(a)},u);return t(),function(){var e;null===(e=null==t?void 0:t.cancel)||void 0===e||e.call(t)}},[u,a]),f.createElement(d.C,null,function(n){var o,a,u,s=n.direction,d=c()(e,(u={},(0,i.Z)(u,"".concat(e,"-sm"),"small"===x),(0,i.Z)(u,"".concat(e,"-lg"),"large"===x),(0,i.Z)(u,"".concat(e,"-spinning"),O),(0,i.Z)(u,"".concat(e,"-show-text"),!!y),(0,i.Z)(u,"".concat(e,"-rtl"),"rtl"===s),u),p),v=(0,l.Z)(Z,["indicator","prefixCls"]),g=f.createElement("div",(0,r.Z)({},v,{style:b,className:d,"aria-live":"polite","aria-busy":O}),(o=t.indicator,a="".concat(e,"-dot"),null===o?null:(0,m.l$)(o)?(0,m.Tm)(o,{className:c()(o.props.className,a)}):(0,m.l$)(h)?(0,m.Tm)(h,{className:c()(h.props.className,a)}):f.createElement("span",{className:c()(a,"".concat(e,"-dot-spin"))},f.createElement("i",{className:"".concat(e,"-dot-item")}),f.createElement("i",{className:"".concat(e,"-dot-item")}),f.createElement("i",{className:"".concat(e,"-dot-item")}),f.createElement("i",{className:"".concat(e,"-dot-item")}))),y?f.createElement("div",{className:"".concat(e,"-text")},y):null);if(void 0!==w){var E=c()("".concat(e,"-container"),(0,i.Z)({},"".concat(e,"-blur"),O));return f.createElement("div",(0,r.Z)({},v,{className:c()("".concat(e,"-nested-loading"),j)}),O&&f.createElement("div",{key:"loading"},g),f.createElement("div",{className:E,key:"container"},w))}return g})},x=function(t){var e=t.prefixCls,n=(0,f.useContext(d.E_).getPrefixCls)("spin",e),i=(0,r.Z)((0,r.Z)({},t),{spinPrefixCls:n});return f.createElement(g,(0,r.Z)({},i))};x.setDefaultIndicator=function(t){h=t},e.Z=x},93645:function(t,e,n){"use strict";n.d(e,{u:function(){return i}});var r={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}};function i(t){return t?r[t]:r.trunc}},59910:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(19013),i=n(13882);function o(t,e){return(0,i.Z)(2,arguments),(0,r.Z)(t).getTime()-(0,r.Z)(e).getTime()}},11699:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(59910),i=n(13882),o=n(93645);function a(t,e,n){(0,i.Z)(2,arguments);var a=(0,r.Z)(t,e)/1e3;return(0,o.u)(null==n?void 0:n.roundingMethod)(a)}},62705:function(t,e,n){var r=n(55639).Symbol;t.exports=r},44239:function(t,e,n){var r=n(62705),i=n(89607),o=n(2333),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?i(t):o(t)}},27561:function(t,e,n){var r=n(67990),i=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(i,""):t}},31957:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},89607:function(t,e,n){var r=n(62705),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(t){}var i=a.call(t);return r&&(e?t[c]=n:delete t[c]),i}},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},55639:function(t,e,n){var r=n(31957),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},67990:function(t){var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},23279:function(t,e,n){var r=n(13218),i=n(7771),o=n(14841),a=Math.max,c=Math.min;t.exports=function(t,e,n){var u,s,l,f,d,m,p=0,v=!1,h=!1,g=!0;if("function"!=typeof t)throw TypeError("Expected a function");function x(e){var n=u,r=s;return u=s=void 0,p=e,f=t.apply(r,n)}function y(t){var n=t-m,r=t-p;return void 0===m||n>=e||n<0||h&&r>=l}function j(){var t,n,r,o=i();if(y(o))return b(o);d=setTimeout(j,(t=o-m,n=o-p,r=e-t,h?c(r,l-n):r))}function b(t){return(d=void 0,g&&u)?x(t):(u=s=void 0,f)}function w(){var t,n=i(),r=y(n);if(u=arguments,s=this,m=n,r){if(void 0===d)return p=t=m,d=setTimeout(j,e),v?x(t):f;if(h)return clearTimeout(d),d=setTimeout(j,e),x(m)}return void 0===d&&(d=setTimeout(j,e)),f}return e=o(e)||0,r(n)&&(v=!!n.leading,l=(h="maxWait"in n)?a(o(n.maxWait)||0,e):l,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==d&&clearTimeout(d),p=0,u=m=s=d=void 0},w.flush=function(){return void 0===d?f:b(i())},w}},13218:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},37005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},33448:function(t,e,n){var r=n(44239),i=n(37005);t.exports=function(t){return"symbol"==typeof t||i(t)&&"[object Symbol]"==r(t)}},7771:function(t,e,n){var r=n(55639);t.exports=function(){return r.Date.now()}},14841:function(t,e,n){var r=n(27561),i=n(13218),o=n(33448),a=0/0,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return a;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=u.test(t);return n||s.test(t)?l(t.slice(2),n?2:8):c.test(t)?a:+t}},10887:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/chat/emojis",function(){return n(14518)}])},14518:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return w}});var r=n(85893),i=n(85818),o=n(26713),a=n(71577),c=n(54398),u=n(77916),s=n(67294),l=n(5152),f=n.n(l),d=n(73615),m=n(64777),p=n(60956),v=n(41983),h=n(90745),g=n(6960);let x=f()(()=>Promise.all([n.e(2074),n.e(7949)]).then(n.t.bind(n,77949,23)),{loadableGenerated:{webpack:()=>[77949]},ssr:!1}),{Title:y,Paragraph:j}=i.Z,b=()=>{let[t,e]=(0,s.useState)([]),[n,i]=(0,s.useState)(!1),[l,f]=(0,s.useState)(null),[g,b]=(0,s.useState)(null),w=null,Z=()=>{f(null),clearTimeout(w),w=null};async function E(){i(!0);try{let t=await (0,m.rQ)("/api/emoji");e(t)}catch(t){console.error("error fetching emojis",t)}i(!1)}async function N(t){let e="/".concat(t.split("/").slice(3).join("/"));console.log(e),i(!0),f((0,v.kg)(v.Jk,"Deleting emoji..."));try{let t=await (0,m.rQ)(m.Ff,{method:"POST",data:{name:e}});if(t instanceof Error)throw t;f((0,v.kg)(v.zv,"Emoji deleted")),w=setTimeout(Z,h.sI)}catch(t){f((0,v.kg)(v.Un,"".concat(t))),i(!1),w=setTimeout(Z,h.sI)}E()}async function O(){i(!0);try{f((0,v.kg)(v.Jk,"Converting emoji..."));let t=await new Promise((t,e)=>{if(!p.dr.includes(g.type)){let t="File type is not supported: ".concat(g.type);return e(t)}(0,p.y3)(g,e=>t({name:g.name,url:e}))});f((0,v.kg)(v.Jk,"Uploading emoji..."));let e=await (0,m.rQ)(m.Qc,{method:"POST",data:{name:t.name,data:t.url}});if(e instanceof Error)throw e;f((0,v.kg)(v.zv,"Emoji uploaded successfully!")),E()}catch(t){f((0,v.kg)(v.Un,"".concat(t)))}w=setTimeout(Z,h.sI),i(!1)}return(0,s.useEffect)(()=>{E()},[]),(0,r.jsxs)("div",{children:[(0,r.jsx)(y,{children:"Emojis"}),(0,r.jsx)(j,{children:"Here you can upload new custom emojis for usage in the chat. When uploading a new emoji, the filename will be used as emoji name."}),(0,r.jsx)(c.Z,{rowKey:t=>t.url,dataSource:t,columns:[{title:"",key:"delete",render:(t,e)=>(0,r.jsx)(o.Z,{size:"middle",children:(0,r.jsx)(a.Z,{onClick:()=>N(e.url),icon:(0,r.jsx)(x,{})})})},{title:"Name",key:"name",dataIndex:"name"},{title:"Emoji",key:"url",render:(t,e)=>(0,r.jsx)("img",{src:e.url,alt:e.name,style:{maxWidth:"2vw"}})}],pagination:!1}),(0,r.jsx)("br",{}),(0,r.jsx)(u.Z,{name:"emoji",listType:"picture",className:"emoji-uploader",showUploadList:!1,accept:p.dr.join(","),beforeUpload:b,customRequest:O,disabled:n,children:(0,r.jsx)(a.Z,{type:"primary",disabled:n,children:"Upload new emoji"})}),(0,r.jsx)(d.Z,{status:l})]})};b.getLayout=function(t){return(0,r.jsx)(g.l,{page:t})};var w=b},60956:function(t,e,n){"use strict";n.d(e,{Z7:function(){return r},dr:function(){return i},kR:function(){return a},y3:function(){return o}});let r=2097152,i=["image/png","image/jpeg","image/gif"];function o(t,e){let n=new FileReader;n.addEventListener("load",()=>e(n.result)),n.readAsDataURL(t)}function a(t){let e=Math.floor(Math.log(t)/Math.log(1024)),n=1*Number((t/Math.pow(1024,e)).toFixed(2));return"".concat(n," ").concat(["B","KB","MB","GB","TB","PB","EB","ZB","YB"][e])}},9008:function(t,e,n){t.exports=n(83121)},11163:function(t,e,n){t.exports=n(80880)}},function(t){t.O(0,[173,164,2744,9680,4931,5402,2231,5818,492,7524,9915,4041,3698,3013,4398,4734,7916,180,6960,9774,2888,179],function(){return t(t.s=10887)}),_N_E=t.O()}]);