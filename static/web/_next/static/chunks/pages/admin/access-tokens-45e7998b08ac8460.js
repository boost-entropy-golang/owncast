(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9882,5654,3315],{57838:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(97685),o=n(67294);function c(){var e=o.useReducer(function(e){return e+1},0);return(0,r.Z)(e,2)[1]}},24308:function(e,t,n){"use strict";n.d(t,{c4:function(){return c}});var r=n(4942),o=n(87462),c=["xxl","xl","lg","md","sm","xs"],a={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},i=new Map,s=-1,l={};t.ZP={matchHandlers:{},dispatch:function(e){return l=e,i.forEach(function(e){return e(l)}),i.size>=1},subscribe:function(e){return i.size||this.register(),s+=1,i.set(s,e),e(l),s},unsubscribe:function(e){i.delete(e),i.size||this.unregister()},unregister:function(){var e=this;Object.keys(a).forEach(function(t){var n=a[t],r=e.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)}),i.clear()},register:function(){var e=this;Object.keys(a).forEach(function(t){var n=a[t],c=function(n){var c=n.matches;e.dispatch((0,o.Z)((0,o.Z)({},l),(0,r.Z)({},t,c)))},i=window.matchMedia(n);i.addListener(c),e.matchHandlers[n]={mql:i,listener:c},c(i)})}}},15746:function(e,t,n){"use strict";var r=n(21584);t.Z=r.Z},99134:function(e,t,n){"use strict";var r=(0,n(67294).createContext)({});t.Z=r},21584:function(e,t,n){"use strict";var r=n(4942),o=n(87462),c=n(71002),a=n(94184),i=n.n(a),s=n(67294),l=n(53124),u=n(99134),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},p=["xs","sm","md","lg","xl","xxl"],d=s.forwardRef(function(e,t){var n,a=s.useContext(l.E_),d=a.getPrefixCls,m=a.direction,v=s.useContext(u.Z),h=v.gutter,y=v.wrap,x=v.supportFlexGap,b=e.prefixCls,g=e.span,Z=e.order,j=e.offset,O=e.push,w=e.pull,E=e.className,C=e.children,k=e.flex,N=e.style,S=f(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),P=d("col",b),T={};p.forEach(function(t){var n,a={},i=e[t];"number"==typeof i?a.span=i:"object"===(0,c.Z)(i)&&(a=i||{}),delete S[t],T=(0,o.Z)((0,o.Z)({},T),(n={},(0,r.Z)(n,"".concat(P,"-").concat(t,"-").concat(a.span),void 0!==a.span),(0,r.Z)(n,"".concat(P,"-").concat(t,"-order-").concat(a.order),a.order||0===a.order),(0,r.Z)(n,"".concat(P,"-").concat(t,"-offset-").concat(a.offset),a.offset||0===a.offset),(0,r.Z)(n,"".concat(P,"-").concat(t,"-push-").concat(a.push),a.push||0===a.push),(0,r.Z)(n,"".concat(P,"-").concat(t,"-pull-").concat(a.pull),a.pull||0===a.pull),(0,r.Z)(n,"".concat(P,"-rtl"),"rtl"===m),n))});var _=i()(P,(n={},(0,r.Z)(n,"".concat(P,"-").concat(g),void 0!==g),(0,r.Z)(n,"".concat(P,"-order-").concat(Z),Z),(0,r.Z)(n,"".concat(P,"-offset-").concat(j),j),(0,r.Z)(n,"".concat(P,"-push-").concat(O),O),(0,r.Z)(n,"".concat(P,"-pull-").concat(w),w),n),E,T),I={};if(h&&h[0]>0){var A=h[0]/2;I.paddingLeft=A,I.paddingRight=A}if(h&&h[1]>0&&!x){var R=h[1]/2;I.paddingTop=R,I.paddingBottom=R}return k&&(I.flex="number"==typeof k?"".concat(k," ").concat(k," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(k)?"0 0 ".concat(k):k,!1!==y||I.minWidth||(I.minWidth=0)),s.createElement("div",(0,o.Z)({},S,{style:(0,o.Z)((0,o.Z)({},I),N),className:_,ref:t}),C)});t.Z=d},25378:function(e,t,n){"use strict";var r=n(67294),o=n(57838),c=n(24308);t.Z=function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,r.useRef)({}),n=(0,o.Z)();return(0,r.useEffect)(function(){var r=c.ZP.subscribe(function(r){t.current=r,e&&n()});return function(){return c.ZP.unsubscribe(r)}},[]),t.current}},92820:function(e,t,n){"use strict";var r=n(87462),o=n(4942),c=n(71002),a=n(97685),i=n(94184),s=n.n(i),l=n(67294),u=n(53124),f=n(98082),p=n(24308),d=n(93355),m=n(99134),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function h(e,t){var n=l.useState("string"==typeof e?e:""),r=(0,a.Z)(n,2),o=r[0],i=r[1],s=function(){if("string"==typeof e&&i(e),"object"===(0,c.Z)(e))for(var n=0;n<p.c4.length;n++){var r=p.c4[n];if(t[r]){var o=e[r];if(void 0!==o){i(o);return}}}};return l.useEffect(function(){s()},[JSON.stringify(e),t]),o}(0,d.b)("top","middle","bottom","stretch"),(0,d.b)("start","end","center","space-around","space-between","space-evenly");var y=l.forwardRef(function(e,t){var n,i,d=e.prefixCls,y=e.justify,x=e.align,b=e.className,g=e.style,Z=e.children,j=e.gutter,O=void 0===j?0:j,w=e.wrap,E=v(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),C=l.useContext(u.E_),k=C.getPrefixCls,N=C.direction,S=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),P=(0,a.Z)(S,2),T=P[0],_=P[1],I=l.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),A=(0,a.Z)(I,2),R=A[0],M=A[1],$=h(x,R),D=h(y,R),L=(0,f.Z)(),W=l.useRef(O);l.useEffect(function(){var e=p.ZP.subscribe(function(e){M(e);var t=W.current||0;(!Array.isArray(t)&&"object"===(0,c.Z)(t)||Array.isArray(t)&&("object"===(0,c.Z)(t[0])||"object"===(0,c.Z)(t[1])))&&_(e)});return function(){return p.ZP.unsubscribe(e)}},[]);var z=k("row",d),F=(n=[void 0,void 0],(Array.isArray(O)?O:[O,void 0]).forEach(function(e,t){if("object"===(0,c.Z)(e))for(var r=0;r<p.c4.length;r++){var o=p.c4[r];if(T[o]&&void 0!==e[o]){n[t]=e[o];break}}else n[t]=e}),n),G=s()(z,(i={},(0,o.Z)(i,"".concat(z,"-no-wrap"),!1===w),(0,o.Z)(i,"".concat(z,"-").concat(D),D),(0,o.Z)(i,"".concat(z,"-").concat($),$),(0,o.Z)(i,"".concat(z,"-rtl"),"rtl"===N),i),b),H={},U=null!=F[0]&&F[0]>0?-(F[0]/2):void 0,B=null!=F[1]&&F[1]>0?-(F[1]/2):void 0;if(U&&(H.marginLeft=U,H.marginRight=U),L){var Y=(0,a.Z)(F,2);H.rowGap=Y[1]}else B&&(H.marginTop=B,H.marginBottom=B);var q=(0,a.Z)(F,2),Q=q[0],V=q[1],X=l.useMemo(function(){return{gutter:[Q,V],wrap:w,supportFlexGap:L}},[Q,V,w,L]);return l.createElement(m.Z.Provider,{value:X},l.createElement("div",(0,r.Z)({},E,{className:G,style:(0,r.Z)((0,r.Z)({},H),g),ref:t}),Z))});t.Z=y},97183:function(e,t,n){"use strict";var r=n(2897),o=n(7293),c=r.ZP;c.Header=r.h4,c.Footer=r.$_,c.Content=r.VY,c.Sider=o.Z,t.Z=c},71230:function(e,t,n){"use strict";var r=n(92820);t.Z=r.Z},11382:function(e,t,n){"use strict";var r=n(87462),o=n(4942),c=n(97685),a=n(94184),i=n.n(a),s=n(23279),l=n.n(s),u=n(98423),f=n(67294),p=n(53124),d=n(96159),m=n(93355),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};(0,m.b)("small","default","large");var h=null,y=function(e){var t=e.spinPrefixCls,n=e.spinning,a=void 0===n||n,s=e.delay,m=e.className,y=e.size,x=void 0===y?"default":y,b=e.tip,g=e.wrapperClassName,Z=e.style,j=e.children,O=v(e,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),w=f.useState(function(){return a&&(!a||!s||!!isNaN(Number(s)))}),E=(0,c.Z)(w,2),C=E[0],k=E[1];return f.useEffect(function(){var e=l()(function(){k(a)},s);return e(),function(){var t;null===(t=null==e?void 0:e.cancel)||void 0===t||t.call(e)}},[s,a]),f.createElement(p.C,null,function(n){var c,a,s,l=n.direction,p=i()(t,(s={},(0,o.Z)(s,"".concat(t,"-sm"),"small"===x),(0,o.Z)(s,"".concat(t,"-lg"),"large"===x),(0,o.Z)(s,"".concat(t,"-spinning"),C),(0,o.Z)(s,"".concat(t,"-show-text"),!!b),(0,o.Z)(s,"".concat(t,"-rtl"),"rtl"===l),s),m),v=(0,u.Z)(O,["indicator","prefixCls"]),y=f.createElement("div",(0,r.Z)({},v,{style:Z,className:p,"aria-live":"polite","aria-busy":C}),(c=e.indicator,a="".concat(t,"-dot"),null===c?null:(0,d.l$)(c)?(0,d.Tm)(c,{className:i()(c.props.className,a)}):(0,d.l$)(h)?(0,d.Tm)(h,{className:i()(h.props.className,a)}):f.createElement("span",{className:i()(a,"".concat(t,"-dot-spin"))},f.createElement("i",{className:"".concat(t,"-dot-item")}),f.createElement("i",{className:"".concat(t,"-dot-item")}),f.createElement("i",{className:"".concat(t,"-dot-item")}),f.createElement("i",{className:"".concat(t,"-dot-item")}))),b?f.createElement("div",{className:"".concat(t,"-text")},b):null);if(void 0!==j){var w=i()("".concat(t,"-container"),(0,o.Z)({},"".concat(t,"-blur"),C));return f.createElement("div",(0,r.Z)({},v,{className:i()("".concat(t,"-nested-loading"),g)}),C&&f.createElement("div",{key:"loading"},y),f.createElement("div",{className:w,key:"container"},j))}return y})},x=function(e){var t=e.prefixCls,n=(0,f.useContext(p.E_).getPrefixCls)("spin",t),o=(0,r.Z)((0,r.Z)({},e),{spinPrefixCls:n});return f.createElement(y,(0,r.Z)({},o))};x.setDefaultIndicator=function(e){h=e},t.Z=x},20550:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(4942),o=n(87462),c=n(97685),a=n(97937),i=n(94184),s=n.n(i),l=n(98423),u=n(67294),f=n(53124),p=n(98787),d=n(68349),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},h=RegExp("^(".concat(p.Y.join("|"),")(-inverse)?$")),y=RegExp("^(".concat(p.E.join("|"),")$")),x=u.forwardRef(function(e,t){var n,i=e.prefixCls,p=e.className,m=e.style,x=e.children,b=e.icon,g=e.color,Z=e.onClose,j=e.closeIcon,O=e.closable,w=v(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),E=u.useContext(f.E_),C=E.getPrefixCls,k=E.direction,N=u.useState(!0),S=(0,c.Z)(N,2),P=S[0],T=S[1];u.useEffect(function(){"visible"in w&&T(w.visible)},[w.visible]);var _=function(){return!!g&&(h.test(g)||y.test(g))},I=(0,o.Z)({backgroundColor:g&&!_()?g:void 0},m),A=_(),R=C("tag",i),M=s()(R,(n={},(0,r.Z)(n,"".concat(R,"-").concat(g),A),(0,r.Z)(n,"".concat(R,"-has-color"),g&&!A),(0,r.Z)(n,"".concat(R,"-hidden"),!P),(0,r.Z)(n,"".concat(R,"-rtl"),"rtl"===k),n),p),$=function(e){e.stopPropagation(),null==Z||Z(e),!e.defaultPrevented&&("visible"in w||T(!1))},D="onClick"in w||x&&"a"===x.type,L=(0,l.Z)(w,["visible"]),W=b||null,z=W?u.createElement(u.Fragment,null,W,u.createElement("span",null,x)):x,F=u.createElement("span",(0,o.Z)({},L,{ref:t,className:M,style:I}),z,void 0!==O&&O?j?u.createElement("span",{className:"".concat(R,"-close-icon"),onClick:$},j):u.createElement(a.Z,{className:"".concat(R,"-close-icon"),onClick:$}):null);return D?u.createElement(d.Z,null,F):F});x.CheckableTag=function(e){var t,n=e.prefixCls,c=e.className,a=e.checked,i=e.onChange,l=e.onClick,p=m(e,["prefixCls","className","checked","onChange","onClick"]),d=(0,u.useContext(f.E_).getPrefixCls)("tag",n),v=s()(d,(t={},(0,r.Z)(t,"".concat(d,"-checkable"),!0),(0,r.Z)(t,"".concat(d,"-checkable-checked"),a),t),c);return u.createElement("span",(0,o.Z)({},p,{className:v,onClick:function(e){null==i||i(!a),null==l||l(e)}}))};var b=x},93645:function(e,t,n){"use strict";n.d(t,{u:function(){return o}});var r={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function o(e){return e?r[e]:r.trunc}},59910:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(19013),o=n(13882);function c(e,t){return(0,o.Z)(2,arguments),(0,r.Z)(e).getTime()-(0,r.Z)(t).getTime()}},11699:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(59910),o=n(13882),c=n(93645);function a(e,t,n){(0,o.Z)(2,arguments);var a=(0,r.Z)(e,t)/1e3;return(0,c.u)(null==n?void 0:n.roundingMethod)(a)}},62705:function(e,t,n){var r=n(55639).Symbol;e.exports=r},44239:function(e,t,n){var r=n(62705),o=n(89607),c=n(2333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):c(e)}},27561:function(e,t,n){var r=n(67990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},31957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},89607:function(e,t,n){var r=n(62705),o=Object.prototype,c=o.hasOwnProperty,a=o.toString,i=r?r.toStringTag:void 0;e.exports=function(e){var t=c.call(e,i),n=e[i];try{e[i]=void 0;var r=!0}catch(e){}var o=a.call(e);return r&&(t?e[i]=n:delete e[i]),o}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var r=n(31957),o="object"==typeof self&&self&&self.Object===Object&&self,c=r||o||Function("return this")();e.exports=c},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var r=n(13218),o=n(7771),c=n(14841),a=Math.max,i=Math.min;e.exports=function(e,t,n){var s,l,u,f,p,d,m=0,v=!1,h=!1,y=!0;if("function"!=typeof e)throw TypeError("Expected a function");function x(t){var n=s,r=l;return s=l=void 0,m=t,f=e.apply(r,n)}function b(e){var n=e-d,r=e-m;return void 0===d||n>=t||n<0||h&&r>=u}function g(){var e,n,r,c=o();if(b(c))return Z(c);p=setTimeout(g,(e=c-d,n=c-m,r=t-e,h?i(r,u-n):r))}function Z(e){return(p=void 0,y&&s)?x(e):(s=l=void 0,f)}function j(){var e,n=o(),r=b(n);if(s=arguments,l=this,d=n,r){if(void 0===p)return m=e=d,p=setTimeout(g,t),v?x(e):f;if(h)return clearTimeout(p),p=setTimeout(g,t),x(d)}return void 0===p&&(p=setTimeout(g,t)),f}return t=c(t)||0,r(n)&&(v=!!n.leading,u=(h="maxWait"in n)?a(c(n.maxWait)||0,t):u,y="trailing"in n?!!n.trailing:y),j.cancel=function(){void 0!==p&&clearTimeout(p),m=0,s=d=l=p=void 0},j.flush=function(){return void 0===p?f:Z(o())},j}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var r=n(44239),o=n(37005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(55639);e.exports=function(){return r.Date.now()}},14841:function(e,t,n){var r=n(27561),o=n(13218),c=n(33448),a=0/0,i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(c(e))return a;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=s.test(e);return n||l.test(e)?u(e.slice(2),n?2:8):i.test(e)?a:+e}},26562:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/access-tokens",function(){return n(23341)}])},23341:function(e,t,n){"use strict";n.r(t);var r=n(85893),o=n(67294),c=n(85818),a=n(94199),i=n(20550),s=n(15746),l=n(32808),u=n(85402),f=n(79531),p=n(71230),d=n(71577),m=n(26713),v=n(54398),h=n(58091),y=n(5152),x=n.n(y),b=n(64777),g=n(6960);let{Title:Z,Paragraph:j}=c.Z,O=x()(()=>Promise.all([n.e(2074),n.e(7949)]).then(n.t.bind(n,77949,23)),{loadableGenerated:{webpack:()=>[77949]},ssr:!1}),w={CAN_SEND_SYSTEM_MESSAGES:{name:"System messages",description:"Can send official messages on behalf of the system.",color:"purple"},CAN_SEND_MESSAGES:{name:"User chat messages",description:"Can send chat messages on behalf of the owner of this token.",color:"green"},HAS_ADMIN_ACCESS:{name:"Has admin access",description:"Can perform administrative actions such as moderation, get server statuses, etc.",color:"red"}},E=e=>{let{onOk:t,onCancel:n,open:c}=e,[a,i]=(0,o.useState)([]),[m,v]=(0,o.useState)(""),h=Object.keys(w).map(e=>({value:e,label:w[e].description})),y={disabled:0===a.length||""===m},x=h.map(e=>(0,r.jsx)(s.Z,{span:8,children:(0,r.jsx)(l.Z,{value:e.value,children:e.label})},e.value));return(0,r.jsxs)(u.Z,{title:"Create New Access token",open:c,onOk:function(){t(m,a),i([]),v("")},onCancel:n,okButtonProps:y,children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("p",{children:"The name will be displayed as the chat user when sending messages with this access token."}),(0,r.jsx)(f.Z,{value:m,placeholder:"Name of bot, service, or integration",onChange:e=>v(e.currentTarget.value)})]}),(0,r.jsx)("p",{children:"Select the permissions this access token will have. It cannot be edited after it's created."}),(0,r.jsx)(l.Z.Group,{style:{width:"100%"},value:a,onChange:function(e){i(e)},children:(0,r.jsx)(p.Z,{children:x})}),(0,r.jsx)("p",{children:(0,r.jsx)(d.Z,{type:"primary",onClick:function(){i(Object.keys(w))},children:"Select all"})})]})},C=()=>{let[e,t]=(0,o.useState)([]),[n,c]=(0,o.useState)(!1);function s(e){console.error("error",e)}async function l(){try{let e=await (0,b.rQ)(b.ms);t(e)}catch(e){s(e)}}async function u(e){try{await (0,b.rQ)(b.Wr,{method:"POST",data:{token:e}}),l()}catch(e){s(e)}}async function p(n,r){try{let o=await (0,b.rQ)(b.IO,{method:"POST",data:{name:n,scopes:r}});t(e.concat(o))}catch(e){s(e)}}(0,o.useEffect)(()=>{l()},[]);let y=()=>{c(!0)},x=(e,t)=>{c(!1),p(e,t)},g=()=>{c(!1)};return(0,r.jsxs)("div",{children:[(0,r.jsx)(Z,{children:"Access Tokens"}),(0,r.jsx)(j,{children:"Access tokens are used to allow external, 3rd party tools to perform specific actions on your Owncast server. They should be kept secure and never included in client code, instead they should be kept on a server that you control."}),(0,r.jsxs)(j,{children:["Read more about how to use these tokens, with examples, at"," ",(0,r.jsx)("a",{href:"https://owncast.online/docs/integrations/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"our documentation"}),"."]}),(0,r.jsx)(v.Z,{rowKey:"token",columns:[{title:"",key:"delete",render:(e,t)=>(0,r.jsx)(m.Z,{size:"middle",children:(0,r.jsx)(d.Z,{onClick:()=>u(t.accessToken),icon:(0,r.jsx)(O,{})})})},{title:"Name",dataIndex:"displayName",key:"displayName"},{title:"Token",dataIndex:"accessToken",key:"accessToken",render:e=>(0,r.jsx)(f.Z.Password,{size:"small",bordered:!1,value:e})},{title:"Scopes",dataIndex:"scopes",key:"scopes",render:e=>(0,r.jsx)(r.Fragment,{children:e.map(e=>(function(e){if(!e||!w[e])return null;let t=w[e];return(0,r.jsx)(a.Z,{title:t.description,children:(0,r.jsx)(i.Z,{color:t.color,children:t.name})},e)})(e))})},{title:"Last Used",dataIndex:"lastUsed",key:"lastUsed",render:e=>{if(!e)return"Never";let t=new Date(e);return(0,h.Z)(t,"P p")}}],dataSource:e,pagination:!1}),(0,r.jsx)("br",{}),(0,r.jsx)(d.Z,{type:"primary",onClick:y,children:"Create Access Token"}),(0,r.jsx)(E,{open:n,onOk:x,onCancel:g})]})};C.getLayout=function(e){return(0,r.jsx)(g.l,{page:e})},t.default=C},9008:function(e,t,n){e.exports=n(83121)},11163:function(e,t,n){e.exports=n(80880)},92703:function(e,t,n){"use strict";var r=n(50414);function o(){}function c(){}c.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,c,a){if(a!==r){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:o};return n.PropTypes=n,n}},45697:function(e,t,n){e.exports=n(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[173,164,2744,9680,4931,5402,2231,5818,492,7524,9915,4041,3698,3013,4398,8091,180,6960,9774,2888,179],function(){return e(e.s=26562)}),_N_E=e.O()}]);