(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5685],{54005:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/actions",function(){return n(49783)}])},65765:function(e,t,n){"use strict";var r=n(61185),l=n(59408),o=r.ZP;o.Header=r.h4,o.Footer=r.$_,o.Content=r.VY,o.Sider=l.Z,o._InternalSiderContext=l.D,t.default=o},49783:function(e,t,n){"use strict";n.r(t);var r=n(85893),l=n(23657),o=n(77786),a=n(73211),i=n(87528),u=n(20133),c=n(72370),s=n(4116),d=n(56469),h=n(27043),f=n(95089),p=n(58909),x=n(82261),m=n(5152),y=n.n(m),j=n(67294),v=n(17586),g=n(70869),b=n(28700),k=n(4481),w=n(11),C=n(25889);let{Title:I,Paragraph:S}=l.default,_=y()(()=>Promise.all([n.e(3247),n.e(1506)]).then(n.t.bind(n,81506,23)),{loadableGenerated:{webpack:()=>[81506]},ssr:!1}),E=y()(()=>Promise.all([n.e(3247),n.e(3181)]).then(n.t.bind(n,93181,23)),{loadableGenerated:{webpack:()=>[93181]},ssr:!1}),T=e=>{let{onOk:t,onCancel:n,open:l,action:s}=e,[d,h]=(0,j.useState)("url"),[m,y]=(0,j.useState)(""),[v,g]=(0,j.useState)(""),[b,k]=(0,j.useState)(""),[C,I]=(0,j.useState)(""),[S,_]=(0,j.useState)(""),[E,T]=(0,j.useState)(""),[L,O]=(0,j.useState)(!1);(0,j.useEffect)(()=>{var e;h(((null==s?void 0:null===(e=s.html)||void 0===e?void 0:e.length)||0)>0?"html":"url"),y((null==s?void 0:s.url)||""),g((null==s?void 0:s.html)||""),k((null==s?void 0:s.title)||""),I((null==s?void 0:s.description)||""),_((null==s?void 0:s.icon)||""),T((null==s?void 0:s.color)||""),O((null==s?void 0:s.openExternally)||!1)},[s]);let P={disabled:!("html"===d?""!==v&&""!==b:(0,w.jv)(m,["https:"])&&""!==b)};return(0,r.jsx)(o.default,{destroyOnClose:!0,title:null==s?"Create New Action":"Edit Action",open:l,onOk:function(){t(s,e.index,"html"===d?"":m,"html"===d?v:"",b,C,S,E,L),y(""),g(""),k(""),I(""),_(""),T(""),O(!1)},onCancel:n,okButtonProps:P,children:(0,r.jsxs)(a.default,{initialValues:s,children:["Add the URL for the external action you want to present."," ",(0,r.jsx)("strong",{children:"Only HTTPS URLs and embeds are supported."}),(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:"https://owncast.online/thirdparty/actions/",target:"_blank",rel:"noopener noreferrer",children:"Read more about external actions."})}),(0,r.jsx)(a.default.Item,{children:(0,r.jsx)(i.default,{value:d,onChange:h,placeholder:"Select an action type",options:[{label:"Link or embed an URL",value:"url"},{label:"Custom HTML",value:"html"}]})}),"html"===d?(0,r.jsx)(a.default.Item,{name:"html",children:(0,r.jsx)(f.ZP,{value:v,placeholder:"HTML embed code (required)",theme:p.FZ,height:"200px",extensions:[(0,x.html)()],onChange:e=>{g(e)}})}):(0,r.jsx)(a.default.Item,{name:"url",children:(0,r.jsx)(u.default,{required:!0,placeholder:"https://myserver.com/action (required)",onChange:e=>y(e.currentTarget.value.trim()),type:"url",pattern:w.ax})}),(0,r.jsx)(a.default.Item,{name:"title",children:(0,r.jsx)(u.default,{value:b,required:!0,placeholder:"Your action title (required)",onChange:e=>k(e.currentTarget.value)})}),(0,r.jsx)(a.default.Item,{name:"description",children:(0,r.jsx)(u.default,{value:C,placeholder:"Optional description",onChange:e=>I(e.currentTarget.value)})}),(0,r.jsx)(a.default.Item,{name:"icon",children:(0,r.jsx)(u.default,{value:S,placeholder:"https://myserver.com/action/icon.png (optional)",onChange:e=>_(e.currentTarget.value)})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(a.default.Item,{name:"color",style:{marginBottom:"0px"},children:(0,r.jsx)(u.default,{type:"color",value:E,onChange:e=>T(e.currentTarget.value)})}),"Optional background color of the action button."]}),"html"===d?null:(0,r.jsx)(a.default.Item,{name:"openExternally",children:(0,r.jsx)(c.Z,{checked:L,defaultChecked:L,onChange:e=>{O(e.target.checked)},children:"Open in a new tab instead of within your page."})})]})})},L=()=>{let{serverConfig:e,setFieldInConfigState:t}=(0,j.useContext)(k.a)||{},{externalActions:n}=e,[l,o]=(0,j.useState)(null),[a,i]=(0,j.useState)(!1),[u,c]=(0,j.useState)(null),[f,p]=(0,j.useState)(null),[x,m]=(0,j.useState)(-1),y=()=>{c(null),clearTimeout(null)};async function w(e){await (0,g.Si)({apiPath:g.os,data:{value:e},onSuccess:()=>{t({fieldName:"externalActions",value:e,path:""}),c((0,b.kg)(b.zv,"Updated.")),setTimeout(y,g.sI)},onError:e=>{console.log(e),c((0,b.kg)(b.Un,e)),setTimeout(y,g.sI)}})}async function C(e){let t=[...l];t.splice(e,1);try{o(t),w(t)}catch(e){console.error(e)}}async function L(e,t,n,r,a,i,u,c,s){try{let e=[...l],d={url:n,html:r,title:a,description:i,icon:u,color:c,openExternally:s};t>=0?e[t]=d:e.push(d),o(e),await w(e)}catch(e){console.error(e)}}async function O(e,t){m(t),p(e),i(!0)}(0,j.useEffect)(()=>{o(n||[])},[n]);let P=[{title:"",key:"delete-edit",render:(e,t,n)=>(0,r.jsxs)(s.Z,{size:"middle",children:[(0,r.jsx)(d.Z,{onClick:()=>C(n),icon:(0,r.jsx)(_,{})}),(0,r.jsx)(d.Z,{onClick:()=>O(t,n),icon:(0,r.jsx)(E,{})})]})},{title:"Name",dataIndex:"title",key:"title"},{title:"Description",dataIndex:"description",key:"description"},{title:"URL / Embed",key:"url",dataIndex:"url",render:(e,t)=>t.html?"HTML embed":t.url},{title:"Icon",dataIndex:"icon",key:"icon",render:e=>e?(0,r.jsx)("img",{style:{width:"2vw"},src:e,alt:""}):null},{title:"Color",dataIndex:"color",key:"color",render:e=>e?(0,r.jsx)("div",{style:{backgroundColor:e,height:"30px"},children:e}):null},{title:"Opens",key:"openExternally",dataIndex:"openExternally",render:(e,t)=>!e||t.html?"In the same tab":"In a new tab"}];return(0,r.jsxs)("div",{children:[(0,r.jsx)(I,{children:"External Actions"}),(0,r.jsx)(S,{children:"External action URLs are 3rd party UI you can display, embedded, into your Owncast page when a user clicks on a button to launch your action."}),(0,r.jsxs)(S,{children:["Read more about how to use actions, with examples, at"," ",(0,r.jsx)("a",{href:"https://owncast.online/thirdparty/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"our documentation"}),"."]}),(0,r.jsx)(h.Z,{rowKey:e=>"".concat(e.title,"-").concat(e.url),columns:P,dataSource:l,pagination:!1}),(0,r.jsx)("br",{}),(0,r.jsx)(d.Z,{type:"primary",onClick:()=>{p(null),m(-1),i(!0)},children:"Create New Action"}),(0,r.jsx)(v.E,{status:u}),(0,r.jsx)(T,{action:f,index:x,open:a,onOk:(e,t,n,r,l,o,a,u,c)=>{i(!1),L(e,t,n,r,l,o,a,u,c),p(null),m(-1)},onCancel:()=>{i(!1)}})]})};L.getLayout=function(e){return(0,r.jsx)(C.l,{page:e})},t.default=L},11163:function(e,t,n){e.exports=n(43079)},55945:function(e,t,n){"use strict";function r(e){return t=>{let n=(e?Math[e]:Math.trunc)(t);return 0===n?0:n}}n.d(t,{u:function(){return r}})},96707:function(e,t,n){"use strict";n.d(t,{H_:function(){return u},I7:function(){return c},dP:function(){return l},fH:function(){return i},jE:function(){return r},vh:function(){return a},yJ:function(){return o}});let r=6048e5,l=864e5,o=6e4,a=36e5,i=43200,u=1440,c=Symbol.for("constructDateFrom")},16393:function(e,t,n){"use strict";n.d(t,{L:function(){return l}});var r=n(96707);function l(e,t){return"function"==typeof e?e(t):e&&"object"==typeof e&&r.I7 in e?e[r.I7](t):e instanceof Date?new e.constructor(t):new Date(t)}},64077:function(e,t,n){"use strict";n.d(t,{_:function(){return l}});var r=n(46042);function l(e,t){return+(0,r.Q)(e)-+(0,r.Q)(t)}},94817:function(e,t,n){"use strict";n.d(t,{c:function(){return o}});var r=n(55945),l=n(64077);function o(e,t,n){let o=(0,l._)(e,t)/1e3;return(0,r.u)(null==n?void 0:n.roundingMethod)(o)}},46042:function(e,t,n){"use strict";n.d(t,{Q:function(){return l}});var r=n(16393);function l(e,t){return(0,r.L)(t||e,e)}}},function(e){e.O(0,[5762,83,1287,9796,443,7786,9904,3657,6167,2502,7528,9532,449,7043,7609,5889,2888,9774,179],function(){return e(e.s=54005)}),_N_E=e.O()}]);