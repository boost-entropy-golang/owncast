(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1591],{42011:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-chat",function(){return t(7343)}])},20284:function(e,n,t){"use strict";t.d(n,{Q:function(){return u},Y:function(){return d}});var s=t(85893),a=t(67294),l=t(47271),c=t(14845),r=t(62376),i=t(65326);let{Title:o}=l.default,u="#5a67d8",d=e=>{let{title:n,description:t,placeholder:l,maxLength:d,values:f,handleDeleteIndex:h,handleCreateString:m,submitStatus:g,continuousStatusMessage:p}=e,[b,v]=(0,a.useState)("");return(0,s.jsxs)("div",{className:"edit-string-array-container",children:[(0,s.jsx)(o,{level:3,className:"section-title",children:n}),(0,s.jsx)("p",{className:"description",children:t}),(0,s.jsx)("div",{className:"edit-current-strings",children:null==f?void 0:f.map((e,n)=>(0,s.jsx)(c.Z,{closable:!0,onClose:()=>{h(n)},color:u,children:e},"tag-".concat(e,"-").concat(n)))}),p&&(0,s.jsx)("div",{className:"continuous-status-section",children:(0,s.jsx)(i.E,{status:p})}),(0,s.jsx)("div",{className:"add-new-string-section",children:(0,s.jsx)(r.nv,{fieldName:"string-input",value:b,onChange:e=>{let{value:n}=e;v(n)},onPressEnter:()=>{m(b.trim()),v("")},maxLength:d,placeholder:l,status:g})})]})};d.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},86088:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var s=t(85893),a=t(67294),l=t(38376),c=t(70329),r=t(65326),i=t(53068),o=t(84443);let u=e=>{let{apiPath:n,checked:t,reversed:u=!1,configPath:d="",disabled:f=!1,fieldName:h,label:m,tip:g,useSubmit:p,onChange:b}=e,[v,x]=(0,a.useState)(null),C=null,{setFieldInConfigState:N}=(0,a.useContext)(o.a)||{},j=()=>{x(null),clearTimeout(C),C=null},k=async e=>{if(p){x((0,c.kg)(c.Jk));let t=u?!e:e;await (0,i.Si)({apiPath:n,data:{value:t},onSuccess:()=>{N({fieldName:h,value:t,path:d}),x((0,c.kg)(c.zv))},onError:e=>{x((0,c.kg)(c.Un,"There was an error: ".concat(e)))}}),C=setTimeout(j,i.sI)}b&&b(e)},y=null!==v&&v.type===c.Jk;return(0,s.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[m&&(0,s.jsx)("div",{className:"label-side",children:(0,s.jsx)("span",{className:"formfield-label",children:m})}),(0,s.jsxs)("div",{className:"input-side",children:[(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)(l.Z,{className:"switch field-".concat(h),loading:y,onChange:k,defaultChecked:t,checked:t,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:f}),(0,s.jsx)(r.E,{status:v})]}),(0,s.jsx)("p",{className:"field-tip",children:g})]})]})};u.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},49947:function(e,n,t){"use strict";var s=t(82215),a=t(63085),l=s.ZP;l.Header=s.h4,l.Footer=s.$_,l.Content=s.VY,l.Sider=a.Z,l._InternalSiderContext=a.D,n.default=l},38376:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var s=t(87462),a=t(4942),l=t(38813),c=t(93967),r=t.n(c),i=t(97685),o=t(45987),u=t(67294),d=t(21640),f=t(79097),h=u.forwardRef(function(e,n){var t,s=e.prefixCls,l=void 0===s?"rc-switch":s,c=e.className,h=e.checked,m=e.defaultChecked,g=e.disabled,p=e.loadingIcon,b=e.checkedChildren,v=e.unCheckedChildren,x=e.onClick,C=e.onChange,N=e.onKeyDown,j=(0,o.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),k=(0,d.Z)(!1,{value:h,defaultValue:m}),y=(0,i.Z)(k,2),E=y[0],w=y[1];function Z(e,n){var t=E;return g||(w(t=e),null==C||C(t,n)),t}var S=r()(l,c,(t={},(0,a.Z)(t,"".concat(l,"-checked"),E),(0,a.Z)(t,"".concat(l,"-disabled"),g),t));return u.createElement("button",Object.assign({},j,{type:"button",role:"switch","aria-checked":E,disabled:g,className:S,ref:n,onKeyDown:function(e){e.which===f.Z.LEFT?Z(!1,e):e.which===f.Z.RIGHT&&Z(!0,e),null==N||N(e)},onClick:function(e){var n=Z(!E,e);null==x||x(n,e)}}),p,u.createElement("span",{className:"".concat(l,"-inner")},E?b:v))});h.displayName="Switch";var m=t(71946),g=t(6089),p=t(41395),b=t(40823),v=function(e,n){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>n.indexOf(s)&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,s=Object.getOwnPropertySymbols(e);a<s.length;a++)0>n.indexOf(s[a])&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(t[s[a]]=e[s[a]]);return t},x=u.forwardRef(function(e,n){var t=e.prefixCls,c=e.size,i=e.disabled,o=e.loading,d=e.className,f=v(e,["prefixCls","size","disabled","loading","className"]),x=u.useContext(m.E_),C=x.getPrefixCls,N=x.direction,j=u.useContext(p.Z),k=u.useContext(g.Z),y=(null!=i?i:k)||o,E=C("switch",t),w=u.createElement("div",{className:"".concat(E,"-handle")},o&&u.createElement(l.Z,{className:"".concat(E,"-loading-icon")})),Z=r()((0,a.Z)((0,a.Z)((0,a.Z)({},"".concat(E,"-small"),"small"===(c||j)),"".concat(E,"-loading"),o),"".concat(E,"-rtl"),"rtl"===N),void 0===d?"":d);return u.createElement(b.Z,{insertExtraNode:!0},u.createElement(h,(0,s.Z)({},f,{prefixCls:E,className:Z,disabled:y,ref:n,loadingIcon:w})))});x.__ANT_SWITCH=!0;var C=x},14845:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var s=t(4942),a=t(87462),l=t(97685),c=t(96494),r=t(93967),i=t.n(r),o=t(55548),u=t(67294),d=t(71946),f=t(5505),h=t(40823),m=function(e,n){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>n.indexOf(s)&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,s=Object.getOwnPropertySymbols(e);a<s.length;a++)0>n.indexOf(s[a])&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(t[s[a]]=e[s[a]]);return t},g=function(e,n){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>n.indexOf(s)&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,s=Object.getOwnPropertySymbols(e);a<s.length;a++)0>n.indexOf(s[a])&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(t[s[a]]=e[s[a]]);return t},p=new RegExp("^(".concat(f.Y.join("|"),")(-inverse)?$")),b=new RegExp("^(".concat(f.E.join("|"),")$")),v=u.forwardRef(function(e,n){var t=e.prefixCls,r=e.className,f=e.style,m=e.children,v=e.icon,x=e.color,C=e.onClose,N=e.closeIcon,j=e.closable,k=g(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),y=u.useContext(d.E_),E=y.getPrefixCls,w=y.direction,Z=u.useState(!0),S=(0,l.Z)(Z,2),O=S[0],_=S[1];u.useEffect(function(){"visible"in k&&_(k.visible)},[k.visible]);var P=function(){return!!x&&(p.test(x)||b.test(x))},U=(0,a.Z)({backgroundColor:x&&!P()?x:void 0},f),I=P(),D=E("tag",t),T=i()(D,(0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)({},"".concat(D,"-").concat(x),I),"".concat(D,"-has-color"),x&&!I),"".concat(D,"-hidden"),!O),"".concat(D,"-rtl"),"rtl"===w),r),M=function(e){e.stopPropagation(),null==C||C(e),!e.defaultPrevented&&("visible"in k||_(!1))},A="onClick"in k||m&&"a"===m.type,J=(0,o.Z)(k,["visible"]),R=v||null,z=R?u.createElement(u.Fragment,null,R,u.createElement("span",null,m)):m,F=u.createElement("span",(0,a.Z)({},J,{ref:n,className:T,style:U}),z,void 0!==j&&j?N?u.createElement("span",{className:"".concat(D,"-close-icon"),onClick:M},N):u.createElement(c.Z,{className:"".concat(D,"-close-icon"),onClick:M}):null);return A?u.createElement(h.Z,null,F):F});v.CheckableTag=function(e){var n=e.prefixCls,t=e.className,l=e.checked,c=e.onChange,r=e.onClick,o=m(e,["prefixCls","className","checked","onChange","onClick"]),f=(0,u.useContext(d.E_).getPrefixCls)("tag",n),h=i()(f,(0,s.Z)((0,s.Z)({},"".concat(f,"-checkable"),!0),"".concat(f,"-checkable-checked"),l),t);return u.createElement("span",(0,a.Z)({},o,{className:h,onClick:function(e){null==c||c(!l),null==r||r(e)}}))};var x=v},7343:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var s=t(85893),a=t(47271),l=t(67294),c=t(62376),r=t(55926),i=t(86088),o=t(20284),u=t(70329),d=t(53068),f=t(84443),h=t(695);function m(){var e;let{Title:n}=a.default,[t,h]=(0,l.useState)(null),[m,g]=(0,l.useState)(null),[p,b]=(0,l.useState)(null),{serverConfig:v,setFieldInConfigState:x}=(0,l.useContext)(f.a)||{},{chatDisabled:C,chatJoinMessagesEnabled:N,forbiddenUsernames:j,instanceDetails:k,suggestedUsernames:y,chatEstablishedUserMode:E}=v,{welcomeMessage:w}=k,Z=e=>{let{fieldName:n,value:s}=e;h({...t,[n]:s})};function S(){g(null)}function O(){(0,d.Si)({apiPath:d.CJ,data:{value:t.forbiddenUsernames},onSuccess:()=>{x({fieldName:"forbiddenUsernames",value:t.forbiddenUsernames}),g((0,u.kg)(u.zv)),setTimeout(S,d.sI)},onError:e=>{g((0,u.kg)(u.Un,e)),setTimeout(S,d.sI)}})}function _(){b(null)}function P(){(0,d.Si)({apiPath:d.cf,data:{value:t.suggestedUsernames},onSuccess:()=>{x({fieldName:"suggestedUsernames",value:t.suggestedUsernames}),b((0,u.kg)(u.zv)),setTimeout(_,d.sI)},onError:e=>{g((0,u.kg)(u.Un,e)),setTimeout(_,d.sI)}})}return((0,l.useEffect)(()=>{h({chatDisabled:C,chatJoinMessagesEnabled:N,forbiddenUsernames:j,suggestedUsernames:y,welcomeMessage:w,chatEstablishedUserMode:E})},[v]),t)?(0,s.jsxs)("div",{className:"config-server-details-form",children:[(0,s.jsx)(n,{children:"Chat Settings"}),(0,s.jsxs)("div",{className:"form-module config-server-details-container",children:[(0,s.jsx)(i.Z,{fieldName:"chatDisabled",...d.yj,checked:!t.chatDisabled,reversed:!0,onChange:function(e){Z({fieldName:"chatDisabled",value:!e})}}),(0,s.jsx)(i.Z,{fieldName:"chatJoinMessagesEnabled",...d.kB,checked:t.chatJoinMessagesEnabled,onChange:function(e){Z({fieldName:"chatJoinMessagesEnabled",value:e})}}),(0,s.jsx)(i.Z,{fieldName:"chatEstablishedUserMode",...d.dj,checked:t.chatEstablishedUserMode,onChange:function(e){Z({fieldName:"chatEstablishedUserMode",value:e})}}),(0,s.jsx)(r.$7,{fieldName:"welcomeMessage",...d.IX,type:c.Sk,value:t.welcomeMessage,initialValue:w,onChange:Z}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Y,{title:d.Dg.label,placeholder:d.Dg.placeholder,description:d.Dg.tip,values:t.forbiddenUsernames,handleDeleteIndex:function(e){t.forbiddenUsernames.splice(e,1),O()},handleCreateString:function(e){t.forbiddenUsernames.push(e),Z({fieldName:"forbiddenUsernames",value:t.forbiddenUsernames}),O()},submitStatus:m}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Y,{title:d.AN.label,placeholder:d.AN.placeholder,description:d.AN.tip,values:t.suggestedUsernames,handleDeleteIndex:function(e){t.suggestedUsernames.splice(e,1),P()},handleCreateString:function(e){t.suggestedUsernames.push(e),Z({fieldName:"suggestedUsernames",value:t.suggestedUsernames}),P()},submitStatus:p,continuousStatusMessage:0===(e=t.suggestedUsernames.length)?(0,u.kg)("success",d.AN.no_entries):e>0&&e<10?(0,u.kg)("warning",d.AN.min_not_reached):null})]})]}):null}m.getLayout=function(e){return(0,s.jsx)(h.l,{page:e})}},11163:function(e,n,t){e.exports=t(73035)},88370:function(e,n,t){"use strict";function s(e){return n=>{let t=(e?Math[e]:Math.trunc)(n);return 0===t?0:t}}t.d(n,{u:function(){return s}})},87691:function(e,n,t){"use strict";t.d(n,{_:function(){return a}});var s=t(32841);function a(e,n){return+(0,s.Q)(e)-+(0,s.Q)(n)}},20209:function(e,n,t){"use strict";t.d(n,{c:function(){return l}});var s=t(88370),a=t(87691);function l(e,n,t){let l=(0,a._)(e,n)/1e3;return(0,s.u)(t?.roundingMethod)(l)}},32841:function(e,n,t){"use strict";function s(e){let n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new e.constructor(+e):new Date("number"==typeof e||"[object Number]"===n||"string"==typeof e||"[object String]"===n?e:NaN)}t.d(n,{Q:function(){return s}})}},function(e){e.O(0,[6410,8768,947,7406,4716,2862,7271,9083,811,695,2888,9774,179],function(){return e(e.s=42011)}),_N_E=e.O()}]);