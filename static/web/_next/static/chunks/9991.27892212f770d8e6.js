(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9991],{39991:function(e,n,t){"use strict";t.r(n),t.d(n,{ChatModerationActionMenu:function(){return E}});var a=t(85893),o=t(85402),s=t(12461),r=t(66516),l=t(13013),i=t(26713),c=t(67294),d=t(5152),h=t.n(d),u=t(29614),p=t(54907),m=t(71230),x=t(15746),j=t(71577),y=t(11382),b=t(20550),f=t(54398),g=t(58091),v=t(35800),k=class{static async removeMessage(e,n){let t=new URL("/api/chat/messagevisibility",window.location.toString());t.searchParams.append("accessToken",n);let a=t.toString(),o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idArray:[e]})};await fetch(a,o)}static async banUser(e,n){let t=new URL("/api/chat/users/setenabled",window.location.toString());t.searchParams.append("accessToken",n);let a=t.toString(),o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:e})};await fetch(a,o)}},w=t(78948),M=t.n(w),C=t(37135),_=t(69183);let{Panel:Z}=p.Z,S=h()(()=>Promise.all([t.e(2074),t.e(7949)]).then(t.t.bind(t,77949,23)),{loadableGenerated:{webpack:()=>[77949]},ssr:!1}),P=async(e,n)=>{try{k.removeMessage(e,n)}catch(e){console.error(e)}},A=e=>{let{label:n,value:t}=e;return(0,a.jsxs)(m.Z,{justify:"space-around",align:"middle",children:[(0,a.jsx)(x.Z,{span:12,children:n}),(0,a.jsx)(x.Z,{span:12,children:t})]})},N=e=>{let{client:n}=e,{messageCount:t,connectedAt:o,geo:s}=n,r=(0,g.Z)(new Date(o),"PP pp");return(0,a.jsxs)("div",{children:[(0,a.jsx)(A,{label:"Messages Sent",value:"".concat(t)}),"N/A"!==s&&(0,a.jsx)(A,{label:"Geo",value:s}),(0,a.jsx)(A,{label:"Connected At",value:r})]})},D=e=>{let{color:n}=e;return(0,a.jsxs)("div",{className:M().colorBlock,style:{backgroundColor:"var(--theme-color-users-".concat(n,")")},children:["Color ",n]})},O=e=>{let{userId:n,accessToken:t}=e,[o,s]=(0,c.useState)(null),[r,l]=(0,c.useState)(!0),i=async()=>{try{let e=await (await fetch("/api/moderation/chat/user/".concat(n,"?accessToken=").concat(t))).json();s(e),l(!1)}catch(e){console.error(e)}};if((0,c.useEffect)(()=>{i()},[]),!o)return null;let{user:d,connectedClients:h,messages:u}=o,{displayColor:m,createdAt:x,previousNames:k,scopes:w,isBot:M,authenticated:O}=d,B=h.reduce((e,n)=>e+n.messageCount,0),T=(0,g.Z)(new Date(x),"PP pp");return(0,a.jsx)(v.ErrorBoundary,{fallbackRender:e=>{let{error:n,resetErrorBoundary:t}=e;return(0,a.jsx)(_.A,{componentName:"ChatModerationDetailsModal",message:n.message,retryFunction:t})},children:(0,a.jsxs)(y.Z,{spinning:r,children:[(0,a.jsx)(D,{color:m}),null==w?void 0:w.map(e=>(0,a.jsx)(b.Z,{children:e},e)),O&&(0,a.jsx)(b.Z,{children:"Authenticated"}),M&&(0,a.jsx)(b.Z,{children:"Bot"}),(0,a.jsx)(A,{label:"Messages Sent Across Clients",value:B.toString()}),(0,a.jsx)(A,{label:"User Created",value:T}),(0,a.jsx)(A,{label:"Known As",value:k.join(",")}),(0,a.jsxs)(p.Z,{accordion:!0,children:[(0,a.jsx)(Z,{header:"Currently Connected Clients",children:(0,a.jsx)(p.Z,{accordion:!0,children:h.map(e=>(0,a.jsx)(Z,{header:(0,C.AB)(e.userAgent),children:(0,a.jsx)(N,{client:e})},e.id))})},"connected-clients"),(0,a.jsx)(p.Z,{accordion:!0,children:(0,a.jsx)(Z,{header:"Recent Chat Messages",children:(0,a.jsx)(f.Z,{size:"small",pagination:null,columns:[{title:"Message",dataIndex:"body",key:"body"},{title:"Sent At",dataIndex:"timestamp",key:"timestamp",render:e=>(0,g.Z)(new Date(e),"PP pp")},{title:"Delete",key:"delete",render:(e,n)=>(0,a.jsx)(j.Z,{type:"primary",ghost:!0,icon:(0,a.jsx)(S,{}),onClick:()=>P(n.id,t)})}],dataSource:u,rowKey:"id"})},"chat-messages")})]})]})})};var B=t(94318),T=t.n(B);let{confirm:G}=o.Z,I=h()(()=>Promise.all([t.e(2074),t.e(4337)]).then(t.t.bind(t,74337,23)),{loadableGenerated:{webpack:()=>[74337]},ssr:!1}),F=h()(()=>Promise.all([t.e(2074),t.e(7039)]).then(t.t.bind(t,67039,23)),{loadableGenerated:{webpack:()=>[67039]},ssr:!1}),R=h()(()=>Promise.all([t.e(2074),t.e(4645)]).then(t.t.bind(t,84645,23)),{loadableGenerated:{webpack:()=>[84645]},ssr:!1}),U=h()(()=>Promise.all([t.e(2074),t.e(500)]).then(t.t.bind(t,40500,23)),{loadableGenerated:{webpack:()=>[40500]},ssr:!1}),E=e=>{let{messageID:n,userID:t,userDisplayName:o,accessToken:d}=e,[h,p]=(0,c.useState)(!1),m=async()=>{try{await k.banUser(t,d)}catch(e){console.error(e),s.ZP.error(e)}},x=async()=>{try{await k.removeMessage(n,d)}catch(e){console.error(e),s.ZP.error(e)}},j=async()=>{G({icon:(0,a.jsx)(F,{}),content:"Are you sure you want to remove this message from ".concat(o,"?"),onOk(){x()}})},y=async()=>{G({icon:(0,a.jsx)(F,{}),content:"Are you sure you want to ban ".concat(o," from chat?"),onOk(){m()}})},b=e=>{let{key:n}=e;"hide-message"===n?j():"ban-user"===n?y():"more-info"===n&&p(!0)},f=(0,a.jsx)(r.Z,{onClick:b,items:[{label:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:T().icon,children:(0,a.jsx)(R,{})}),"Hide Message"]}),key:"hide-message"},{label:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:T().icon,children:(0,a.jsx)(I,{})}),"Ban User"]}),key:"ban-user"},{label:(0,a.jsx)("div",{children:"More Info..."}),key:"more-info"}]});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{overlay:f,trigger:["click"],children:(0,a.jsx)("button",{type:"button",onClick:e=>e.preventDefault(),children:(0,a.jsx)(i.Z,{children:(0,a.jsx)(U,{})})})}),(0,a.jsx)(u.Modal,{title:o,open:h,handleCancel:()=>{p(!1)},children:(0,a.jsx)(O,{userId:t,accessToken:d})})]})}},29614:function(e,n,t){"use strict";t.r(n),t.d(n,{Modal:function(){return u}});var a=t(85893),o=t(85402),s=t(26303),r=t(11382),l=t(67294),i=t(35800),c=t(69183),d=t(70051),h=t.n(d);let u=e=>{let{title:n,url:t,open:d,handleOk:u,handleCancel:p,afterClose:m,height:x,width:j,children:y}=e,[b,f]=(0,l.useState)(!!t),g="100%",v="520px";t&&(g="70vh",v="900px");let k={padding:"0px",minHeight:x,height:null!=x?x:g},w=t&&(0,a.jsx)("iframe",{title:n,src:t,width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",frameBorder:"0",allowFullScreen:!0,style:{display:"block"},onLoad:()=>f(!1)});return(0,a.jsx)(o.Z,{title:n,open:d,onOk:u,onCancel:p,afterClose:m,bodyStyle:k,width:null!=j?j:v,zIndex:999,footer:null,centered:!0,destroyOnClose:!0,children:(0,a.jsx)(i.ErrorBoundary,{fallbackRender:e=>{let{error:n,resetErrorBoundary:t}=e;return(0,a.jsx)(c.A,{componentName:"Modal",message:n.message,retryFunction:t})},children:(0,a.jsxs)("div",{id:"modal-container",style:{height:"100%"},children:[b&&(0,a.jsx)(s.Z,{active:b,style:{padding:"10px"},paragraph:{rows:10}}),w&&(0,a.jsx)("div",{style:{display:b?"none":"inline"},children:w}),y&&(0,a.jsx)("div",{className:h().content,children:y}),b&&(0,a.jsx)(r.Z,{className:h().spinner,spinning:b,size:"large"})]})})})};n.default=u,u.defaultProps={url:void 0,children:void 0,handleOk:void 0,handleCancel:void 0,afterClose:void 0}},37135:function(e,n,t){"use strict";t.d(n,{AB:function(){return c},Qr:function(){return r},t5:function(){return s},wS:function(){return i}});var a=t(42238),o=t.n(a);function s(e){let n=e.split(":");n[n.length-1]="";let t=n.join(":");return"[::1]"===(t=t.slice(0,t.length-1))||"127.0.0.1"===t?"Localhost":t}function r(e){return!e||0===Object.keys(e).length&&e.constructor===Object}function l(e,n,t){return String(n.repeat(t)+e).slice(-t)}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=Number.isFinite(+e)?Math.abs(e):0,t=Math.floor(n/86400),a=t>0?"".concat(t," day").concat(t>1?"s":""," "):"",o=Math.floor(n/3600%24),s=o||t?l("".concat(o,":"),"0",3):"",r=l("".concat(Math.floor(n/60%60),":"),"0",3),i=l("".concat(Math.floor(n%60)),"0",2);return a+s+r+i}function c(e){let n=o()(e),{device:t,os:a,browser:s}=n,{major:r,name:l}=s,{version:i,name:c}=a,{model:d,type:h}=t;return"libmpv"===e?"mpv media player":l&&r&&c?"".concat(l," ").concat(r," on ").concat(c," ").concat(i,"\n  ").concat(d||h?" (".concat(d||h,")"):""):e}},94318:function(e){e.exports={icon:"ChatModerationActionMenu_icon__9j6DF"}},78948:function(e){e.exports={modalContainer:"ChatModerationDetailsModal_modalContainer__czndV",chatHistory:"ChatModerationDetailsModal_chatHistory__PunRk",colorBlock:"ChatModerationDetailsModal_colorBlock___rAlw",displayName:"ChatModerationDetailsModal_displayName__p7pLI"}},70051:function(e){e.exports={spinner:"Modal_spinner__GiSS0",content:"Modal_content__h9my9"}}}]);