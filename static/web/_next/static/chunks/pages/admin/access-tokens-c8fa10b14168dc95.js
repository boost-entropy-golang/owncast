(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9882],{57838:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(97685),c=t(67294);function o(){var e=c.useReducer(function(e){return e+1},0);return(0,r.Z)(e,2)[1]}},15746:function(e,n,t){"use strict";var r=t(21584);n.Z=r.Z},25378:function(e,n,t){"use strict";var r=t(67294),c=t(57838),o=t(24308);n.Z=function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],n=(0,r.useRef)({}),t=(0,c.Z)();return(0,r.useEffect)(function(){var r=o.ZP.subscribe(function(r){n.current=r,e&&t()});return function(){return o.ZP.unsubscribe(r)}},[]),n.current}},97183:function(e,n,t){"use strict";var r=t(2897),c=t(7293),o=r.ZP;o.Header=r.h4,o.Footer=r.$_,o.Content=r.VY,o.Sider=c.Z,n.default=o},71230:function(e,n,t){"use strict";var r=t(92820);n.Z=r.Z},20550:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(4942),c=t(87462),o=t(97685),s=t(97937),a=t(94184),i=t.n(a),l=t(98423),u=t(67294),d=t(53124),f=t(98787),h=t(68349),p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,r=Object.getOwnPropertySymbols(e);c<r.length;c++)0>n.indexOf(r[c])&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(t[r[c]]=e[r[c]]);return t},m=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,r=Object.getOwnPropertySymbols(e);c<r.length;c++)0>n.indexOf(r[c])&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(t[r[c]]=e[r[c]]);return t},v=new RegExp("^(".concat(f.Y.join("|"),")(-inverse)?$")),y=new RegExp("^(".concat(f.E.join("|"),")$")),b=u.forwardRef(function(e,n){var t,a=e.prefixCls,f=e.className,p=e.style,b=e.children,x=e.icon,k=e.color,Z=e.onClose,g=e.closeIcon,j=e.closable,C=void 0!==j&&j,w=m(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),E=u.useContext(d.E_),S=E.getPrefixCls,O=E.direction,N=u.useState(!0),_=(0,o.Z)(N,2),P=_[0],T=_[1];u.useEffect(function(){"visible"in w&&T(w.visible)},[w.visible]);var A=function(){return!!k&&(v.test(k)||y.test(k))},I=(0,c.Z)({backgroundColor:k&&!A()?k:void 0},p),M=A(),R=S("tag",a),D=i()(R,(t={},(0,r.Z)(t,"".concat(R,"-").concat(k),M),(0,r.Z)(t,"".concat(R,"-has-color"),k&&!M),(0,r.Z)(t,"".concat(R,"-hidden"),!P),(0,r.Z)(t,"".concat(R,"-rtl"),"rtl"===O),t),f),G=function(e){e.stopPropagation(),null==Z||Z(e),!e.defaultPrevented&&("visible"in w||T(!1))},U="onClick"in w||b&&"a"===b.type,F=(0,l.Z)(w,["visible"]),H=x||null,Q=H?u.createElement(u.Fragment,null,H,u.createElement("span",null,b)):b,Y=u.createElement("span",(0,c.Z)({},F,{ref:n,className:D,style:I}),Q,C?g?u.createElement("span",{className:"".concat(R,"-close-icon"),onClick:G},g):u.createElement(s.Z,{className:"".concat(R,"-close-icon"),onClick:G}):null);return U?u.createElement(h.Z,null,Y):Y});b.CheckableTag=function(e){var n,t=e.prefixCls,o=e.className,s=e.checked,a=e.onChange,l=e.onClick,f=p(e,["prefixCls","className","checked","onChange","onClick"]),h=(0,u.useContext(d.E_).getPrefixCls)("tag",t),m=i()(h,(n={},(0,r.Z)(n,"".concat(h,"-checkable"),!0),(0,r.Z)(n,"".concat(h,"-checkable-checked"),s),n),o);return u.createElement("span",(0,c.Z)({},f,{className:m,onClick:function(e){null==a||a(!s),null==l||l(e)}}))};var x=b},93645:function(e,n,t){"use strict";t.d(n,{u:function(){return c}});var r={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function c(e){return e?r[e]:r.trunc}},59910:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(19013),c=t(13882);function o(e,n){return(0,c.Z)(2,arguments),(0,r.Z)(e).getTime()-(0,r.Z)(n).getTime()}},11699:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(59910),c=t(13882),o=t(93645);function s(e,n,t){(0,c.Z)(2,arguments);var s=(0,r.Z)(e,n)/1e3;return(0,o.u)(null==t?void 0:t.roundingMethod)(s)}},26562:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/access-tokens",function(){return t(67288)}])},67288:function(e,n,t){"use strict";t.r(n);var r=t(85893),c=t(67294),o=t(85818),s=t(94199),a=t(20550),i=t(15746),l=t(32808),u=t(85402),d=t(79531),f=t(71230),h=t(71577),p=t(26713),m=t(54398),v=t(58091),y=t(5152),b=t.n(y),x=t(81453),k=t(34261);let{Title:Z,Paragraph:g}=o.default,j=b()(()=>Promise.all([t.e(2074),t.e(7949)]).then(t.t.bind(t,77949,23)),{loadableGenerated:{webpack:()=>[77949]},ssr:!1}),C={CAN_SEND_SYSTEM_MESSAGES:{name:"System messages",description:"Can send official messages on behalf of the system.",color:"purple"},CAN_SEND_MESSAGES:{name:"User chat messages",description:"Can send chat messages on behalf of the owner of this token.",color:"green"},HAS_ADMIN_ACCESS:{name:"Has admin access",description:"Can perform administrative actions such as moderation, get server statuses, etc.",color:"red"}},w=e=>{let{onOk:n,onCancel:t,open:o}=e,[s,a]=(0,c.useState)([]),[p,m]=(0,c.useState)(""),v=Object.keys(C).map(e=>({value:e,label:C[e].description})),y={disabled:0===s.length||""===p},b=v.map(e=>(0,r.jsx)(i.Z,{span:8,children:(0,r.jsx)(l.Z,{value:e.value,children:e.label})},e.value));return(0,r.jsxs)(u.default,{title:"Create New Access token",open:o,onOk:function(){n(p,s),a([]),m("")},onCancel:t,okButtonProps:y,children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("p",{children:"The name will be displayed as the chat user when sending messages with this access token."}),(0,r.jsx)(d.default,{value:p,placeholder:"Name of bot, service, or integration",onChange:e=>m(e.currentTarget.value)})]}),(0,r.jsx)("p",{children:"Select the permissions this access token will have. It cannot be edited after it's created."}),(0,r.jsx)(l.Z.Group,{style:{width:"100%"},value:s,onChange:function(e){a(e)},children:(0,r.jsx)(f.Z,{children:b})}),(0,r.jsx)("p",{children:(0,r.jsx)(h.Z,{type:"primary",onClick:function(){a(Object.keys(C))},children:"Select all"})})]})},E=()=>{let[e,n]=(0,c.useState)([]),[t,o]=(0,c.useState)(!1);function i(e){console.error("error",e)}async function l(){try{let e=await (0,x.rQ)(x.ms);n(e)}catch(e){i(e)}}async function u(e){try{await (0,x.rQ)(x.Wr,{method:"POST",data:{token:e}}),l()}catch(e){i(e)}}async function f(t,r){try{let c=await (0,x.rQ)(x.IO,{method:"POST",data:{name:t,scopes:r}});n(e.concat(c))}catch(e){i(e)}}(0,c.useEffect)(()=>{l()},[]);let y=[{title:"",key:"delete",render:(e,n)=>(0,r.jsx)(p.Z,{size:"middle",children:(0,r.jsx)(h.Z,{onClick:()=>u(n.accessToken),icon:(0,r.jsx)(j,{})})})},{title:"Name",dataIndex:"displayName",key:"displayName"},{title:"Token",dataIndex:"accessToken",key:"accessToken",render:e=>(0,r.jsx)(d.default.Password,{size:"small",bordered:!1,value:e})},{title:"Scopes",dataIndex:"scopes",key:"scopes",render:e=>(0,r.jsx)(r.Fragment,{children:e.map(e=>(function(e){if(!e||!C[e])return null;let n=C[e];return(0,r.jsx)(s.Z,{title:n.description,children:(0,r.jsx)(a.Z,{color:n.color,children:n.name})},e)})(e))})},{title:"Last Used",dataIndex:"lastUsed",key:"lastUsed",render:e=>{if(!e)return"Never";let n=new Date(e);return(0,v.Z)(n,"P p")}}];return(0,r.jsxs)("div",{children:[(0,r.jsx)(Z,{children:"Access Tokens"}),(0,r.jsx)(g,{children:"Access tokens are used to allow external, 3rd party tools to perform specific actions on your Owncast server. They should be kept secure and never included in client code, instead they should be kept on a server that you control."}),(0,r.jsxs)(g,{children:["Read more about how to use these tokens, with examples, at"," ",(0,r.jsx)("a",{href:"https://owncast.online/docs/integrations/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"our documentation"}),"."]}),(0,r.jsx)(m.Z,{rowKey:"token",columns:y,dataSource:e,pagination:!1}),(0,r.jsx)("br",{}),(0,r.jsx)(h.Z,{type:"primary",onClick:()=>{o(!0)},children:"Create Access Token"}),(0,r.jsx)(w,{open:t,onOk:(e,n)=>{o(!1),f(e,n)},onCancel:()=>{o(!1)}})]})};E.getLayout=function(e){return(0,r.jsx)(k.l,{page:e})},n.default=E},11163:function(e,n,t){e.exports=t(96885)}},function(e){e.O(0,[173,5874,7311,2414,4931,5402,6524,1664,5348,9915,1382,4041,3698,3013,4398,8091,4261,9774,2888,179],function(){return e(e.s=26562)}),_N_E=e.O()}]);