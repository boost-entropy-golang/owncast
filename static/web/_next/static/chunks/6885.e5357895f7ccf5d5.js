(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6885],{55871:function(e,n,t){"use strict";t.r(n),t.d(n,{ChatModerationActionMenu:function(){return K}});var a=t(85893),o=t(24716),r=t(45257),l=t(28625),c=t(96652),i=t(67294),s=t(5152),d=t.n(s),u=t(22159),f=t(78533),p=t(6647),m=t(55050),v=t(90622),h=t(70936),y=t(14845),C=t(43796),b=t(14675),x=t(4511);class g{static async removeMessage(e,n){let t=new URL("/api/chat/messagevisibility",window.location.toString());t.searchParams.append("accessToken",n);let a=t.toString(),o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idArray:[e]})};await fetch(a,o)}static async banUser(e,n){let t=new URL("/api/chat/users/setenabled",window.location.toString());t.searchParams.append("accessToken",n);let a=t.toString(),o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:e})};await fetch(a,o)}}var Z=t(26024),k=t.n(Z),w=t(9507),j=t(30927);let{Panel:E}=f.default,P=d()(()=>Promise.all([t.e(7298),t.e(7618)]).then(t.t.bind(t,7618,23)),{loadableGenerated:{webpack:()=>[7618]},ssr:!1}),N=async(e,n)=>{try{g.removeMessage(e,n)}catch(e){console.error(e)}},O=e=>{let{label:n,value:t}=e;return(0,a.jsxs)(p.Z,{justify:"space-around",align:"middle",children:[(0,a.jsx)(m.Z,{span:12,children:n}),(0,a.jsx)(m.Z,{span:12,children:t})]})},M=e=>{let{client:n}=e,{messageCount:t,connectedAt:o,geo:r}=n,l=(0,b.WU)(new Date(o),"PP pp");return(0,a.jsxs)("div",{children:[(0,a.jsx)(O,{label:"Messages Sent",value:t.toString()}),"N/A"!==r&&(0,a.jsx)(O,{label:"Geo",value:r}),(0,a.jsx)(O,{label:"Connected At",value:l})]})},S=e=>{let{color:n}=e,t="var(--theme-color-users-".concat(n,")");return(0,a.jsxs)("div",{className:k().colorBlock,style:{backgroundColor:t},children:["Color ",n]})},I=e=>{let{userId:n,accessToken:t}=e,[o,r]=(0,i.useState)(null),[l,c]=(0,i.useState)(!0),s=async()=>{try{let e=await (await fetch("/api/moderation/chat/user/".concat(n,"?accessToken=").concat(t))).json();r(e),c(!1)}catch(e){console.error(e)}};if((0,i.useEffect)(()=>{s()},[]),!o)return null;let{user:d,connectedClients:u,messages:p}=o,{displayColor:m,createdAt:g,previousNames:Z,scopes:k,isBot:I,authenticated:A}=d,_=u.reduce((e,n)=>e+n.messageCount,0),R=(0,b.WU)(new Date(g),"PP pp"),z=[{title:"Message",dataIndex:"body",key:"body"},{title:"Sent At",dataIndex:"timestamp",key:"timestamp",render:e=>(0,b.WU)(new Date(e),"PP pp")},{title:"Delete",key:"delete",render:(e,n)=>(0,a.jsx)(v.Z,{type:"primary",ghost:!0,icon:(0,a.jsx)(P,{}),onClick:()=>N(n.id,t)})}];return(0,a.jsx)(x.SV,{fallbackRender:e=>{let{error:n,resetErrorBoundary:t}=e;return(0,a.jsx)(j.A,{componentName:"ChatModerationDetailsModal",message:n.message,retryFunction:t})},children:(0,a.jsxs)(h.Z,{spinning:l,children:[(0,a.jsx)(S,{color:m}),null==k?void 0:k.map(e=>(0,a.jsx)(y.Z,{children:e},e)),A&&(0,a.jsx)(y.Z,{children:"Authenticated"}),I&&(0,a.jsx)(y.Z,{children:"Bot"}),(0,a.jsx)(O,{label:"Messages Sent Across Clients",value:_.toString()}),(0,a.jsx)(O,{label:"User Created",value:R}),(0,a.jsx)(O,{label:"Known As",value:Z.join(",")}),(0,a.jsxs)(f.default,{accordion:!0,children:[(0,a.jsx)(E,{header:"Currently Connected Clients",children:(0,a.jsx)(f.default,{accordion:!0,children:u.map(e=>(0,a.jsx)(E,{header:(0,w.AB)(e.userAgent),children:(0,a.jsx)(M,{client:e})},e.id))})},"connected-clients"),(0,a.jsx)(f.default,{accordion:!0,children:(0,a.jsx)(E,{header:"Recent Chat Messages",children:(0,a.jsx)(C.Z,{size:"small",pagination:null,columns:z,dataSource:p,rowKey:"id"})},"chat-messages")})]})]})})},{confirm:A}=o.default,_=d()(()=>Promise.all([t.e(7298),t.e(3200)]).then(t.t.bind(t,33200,23)),{loadableGenerated:{webpack:()=>[33200]},ssr:!1}),R=d()(()=>Promise.all([t.e(7298),t.e(2236)]).then(t.t.bind(t,32236,23)),{loadableGenerated:{webpack:()=>[32236]},ssr:!1}),z=d()(()=>Promise.all([t.e(7298),t.e(1008)]).then(t.t.bind(t,71008,23)),{loadableGenerated:{webpack:()=>[71008]},ssr:!1}),T=d()(()=>Promise.all([t.e(7298),t.e(2992)]).then(t.t.bind(t,72992,23)),{loadableGenerated:{webpack:()=>[72992]},ssr:!1}),K=e=>{let{messageID:n,userID:t,userDisplayName:o,accessToken:s}=e,[d,f]=(0,i.useState)(!1),p=async()=>{try{await g.banUser(t,s)}catch(e){console.error(e),r.ZP.error(e)}},m=async()=>{try{await g.removeMessage(n,s)}catch(e){console.error(e),r.ZP.error(e)}},v=async()=>{A({icon:(0,a.jsx)(R,{}),content:"Are you sure you want to remove this message from ".concat(o,"?"),onOk(){m()}})},h=async()=>{A({icon:(0,a.jsx)(R,{}),content:"Are you sure you want to ban ".concat(o," from chat?"),onOk(){p()}})},y=[{icon:(0,a.jsx)(z,{}),label:"Hide Message",key:"hide-message",onClick:v},{icon:(0,a.jsx)(_,{}),label:"Ban User",key:"ban-user",onClick:h},{label:"More Info...",key:"more-info",onClick:()=>f(!0)}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{menu:{items:y},trigger:["click"],children:(0,a.jsx)("button",{type:"button","aria-label":"Chat moderation options",onClick:e=>e.preventDefault(),children:(0,a.jsx)(c.Z,{children:(0,a.jsx)(T,{})})})}),(0,a.jsx)(u.Modal,{title:o,open:d,handleCancel:()=>{f(!1)},children:(0,a.jsx)(I,{userId:t,accessToken:s})})]})}},22159:function(e,n,t){"use strict";t.r(n),t.d(n,{Modal:function(){return u}});var a=t(85893),o=t(24716),r=t(70936),l=t(67294),c=t(4511),i=t(30927),s=t(27705),d=t.n(s);let u=e=>{let{title:n,url:t,open:s,handleOk:u,handleCancel:f,afterClose:p,height:m,width:v,children:h}=e,[y,C]=(0,l.useState)(!!t),b="100%",x="520px";t&&(b="70vh",x="900px");let g={padding:"0px",minHeight:m,height:null!=m?m:b},Z=t&&(0,a.jsx)("iframe",{title:n,src:t,width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",frameBorder:"0",allowFullScreen:!0,style:{display:"block"},onLoad:()=>C(!1)}),k=y?"none":"inline";return(0,a.jsx)(o.default,{title:n,open:s,onOk:u,onCancel:f,afterClose:p,bodyStyle:g,width:null!=v?v:x,zIndex:999,footer:null,centered:!0,destroyOnClose:!0,className:d().modal,children:(0,a.jsx)(c.SV,{fallbackRender:e=>{let{error:n,resetErrorBoundary:t}=e;return(0,a.jsx)(i.A,{componentName:"Modal",message:n.message,retryFunction:t})},children:(0,a.jsxs)("div",{id:"modal-container",style:{height:"100%"},children:[Z&&(0,a.jsx)("div",{style:{display:k},children:Z}),h&&(0,a.jsx)("div",{className:d().content,children:h}),y&&(0,a.jsx)(r.Z,{className:d().spinner,spinning:y,size:"large",tip:n})]})})})};u.defaultProps={url:void 0,children:void 0,handleOk:void 0,handleCancel:void 0,afterClose:void 0}},66192:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var a=t(1413),o=t(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},l=t(32206),c=function(e,n){return o.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:r}))};c.displayName="CheckOutlined";var i=o.forwardRef(c)},38443:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var a=t(1413),o=t(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},l=t(32206),c=function(e,n){return o.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:r}))};c.displayName="DownOutlined";var i=o.forwardRef(c)},2850:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var a=t(1413),o=t(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},l=t(32206),c=function(e,n){return o.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:r}))};c.displayName="EyeOutlined";var i=o.forwardRef(c)},72909:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var a=t(1413),o=t(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},l=t(32206),c=function(e,n){return o.createElement(l.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:r}))};c.displayName="SearchOutlined";var i=o.forwardRef(c)},78533:function(e,n,t){"use strict";t.d(n,{default:function(){return S}});var a=t(87462),o=t(4942),r=t(19395),l=t(93967),c=t.n(l),i=t(74902),s=t(15671),d=t(43144),u=t(32531),f=t(73568),p=t(71002),m=t(78086),v=t(67294),h=t(96774),y=t.n(h),C=t(45987),b=t(82225),x=t(97685),g=v.forwardRef(function(e,n){var t,a=e.prefixCls,r=e.forceRender,l=e.className,i=e.style,s=e.children,d=e.isActive,u=e.role,f=v.useState(d||r),p=(0,x.Z)(f,2),m=p[0],h=p[1];return(v.useEffect(function(){(r||d)&&h(!0)},[r,d]),m)?v.createElement("div",{ref:n,className:c()("".concat(a,"-content"),(t={},(0,o.Z)(t,"".concat(a,"-content-active"),d),(0,o.Z)(t,"".concat(a,"-content-inactive"),!d),t),l),style:i,role:u},v.createElement("div",{className:"".concat(a,"-content-box")},s)):null});g.displayName="PanelContent";var Z=["className","id","style","prefixCls","headerClass","children","isActive","destroyInactivePanel","accordion","forceRender","openMotion","extra","collapsible"],k=function(e){(0,u.Z)(t,e);var n=(0,f.Z)(t);function t(){var e;(0,s.Z)(this,t);for(var a=arguments.length,o=Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).onItemClick=function(){var n=e.props,t=n.onItemClick,a=n.panelKey;"function"==typeof t&&t(a)},e.handleKeyPress=function(n){("Enter"===n.key||13===n.keyCode||13===n.which)&&e.onItemClick()},e.renderIcon=function(){var n=e.props,t=n.showArrow,a=n.expandIcon,o=n.prefixCls,r=n.collapsible;if(!t)return null;var l="function"==typeof a?a(e.props):v.createElement("i",{className:"arrow"});return l&&v.createElement("div",{className:"".concat(o,"-expand-icon"),onClick:"header"===r||"icon"===r?e.onItemClick:null},l)},e.renderTitle=function(){var n=e.props,t=n.header,a=n.prefixCls,o=n.collapsible;return v.createElement("span",{className:"".concat(a,"-header-text"),onClick:"header"===o?e.onItemClick:null},t)},e}return(0,d.Z)(t,[{key:"shouldComponentUpdate",value:function(e){return!y()(this.props,e)}},{key:"render",value:function(){var e,n,t=this.props,r=t.className,l=t.id,i=t.style,s=t.prefixCls,d=t.headerClass,u=t.children,f=t.isActive,p=t.destroyInactivePanel,m=t.accordion,h=t.forceRender,y=t.openMotion,x=t.extra,k=t.collapsible,w=(0,C.Z)(t,Z),j="disabled"===k,E="header"===k,P="icon"===k,N=c()((e={},(0,o.Z)(e,"".concat(s,"-item"),!0),(0,o.Z)(e,"".concat(s,"-item-active"),f),(0,o.Z)(e,"".concat(s,"-item-disabled"),j),e),r),O={className:c()("".concat(s,"-header"),(n={},(0,o.Z)(n,d,d),(0,o.Z)(n,"".concat(s,"-header-collapsible-only"),E),(0,o.Z)(n,"".concat(s,"-icon-collapsible-only"),P),n)),"aria-expanded":f,"aria-disabled":j,onKeyPress:this.handleKeyPress};return E||P||(O.onClick=this.onItemClick,O.role=m?"tab":"button",O.tabIndex=j?-1:0),delete w.header,delete w.panelKey,delete w.onItemClick,delete w.showArrow,delete w.expandIcon,v.createElement("div",(0,a.Z)({},w,{className:N,style:i,id:l}),v.createElement("div",O,this.renderIcon(),this.renderTitle(),null!=x&&"boolean"!=typeof x&&v.createElement("div",{className:"".concat(s,"-extra")},x)),v.createElement(b.default,(0,a.Z)({visible:f,leavedClassName:"".concat(s,"-content-hidden")},y,{forceRender:h,removeOnLeave:p}),function(e,n){var t=e.className,a=e.style;return v.createElement(g,{ref:n,prefixCls:s,className:t,style:a,isActive:f,forceRender:h,role:m?"tabpanel":null},u)}))}}]),t}(v.Component);function w(e){var n=e;if(!Array.isArray(n)){var t=(0,p.Z)(n);n="number"===t||"string"===t?[n]:[]}return n.map(function(e){return String(e)})}k.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var j=function(e){(0,u.Z)(t,e);var n=(0,f.Z)(t);function t(e){(0,s.Z)(this,t),(a=n.call(this,e)).onClickItem=function(e){var n=a.state.activeKey;if(a.props.accordion)n=n[0]===e?[]:[e];else{var t=(n=(0,i.Z)(n)).indexOf(e);t>-1?n.splice(t,1):n.push(e)}a.setActiveKey(n)},a.getNewChild=function(e,n){if(!e)return null;var t=a.state.activeKey,o=a.props,r=o.prefixCls,l=o.openMotion,c=o.accordion,i=o.destroyInactivePanel,s=o.expandIcon,d=o.collapsible,u=e.key||String(n),f=e.props,p=f.header,m=f.headerClass,h=f.destroyInactivePanel,y=f.collapsible,C=!1;C=c?t[0]===u:t.indexOf(u)>-1;var b=null!=y?y:d,x={key:u,panelKey:u,header:p,headerClass:m,isActive:C,prefixCls:r,destroyInactivePanel:null!=h?h:i,openMotion:l,accordion:c,children:e.props.children,onItemClick:"disabled"===b?null:a.onClickItem,expandIcon:s,collapsible:b};return"string"==typeof e.type?e:(Object.keys(x).forEach(function(e){void 0===x[e]&&delete x[e]}),v.cloneElement(e,x))},a.getItems=function(){var e=a.props.children;return(0,m.Z)(e).map(a.getNewChild)},a.setActiveKey=function(e){"activeKey"in a.props||a.setState({activeKey:e}),a.props.onChange(a.props.accordion?e[0]:e)};var a,o=e.activeKey,r=e.defaultActiveKey;return"activeKey"in e&&(r=o),a.state={activeKey:w(r)},a}return(0,d.Z)(t,[{key:"shouldComponentUpdate",value:function(e,n){return!y()(this.props,e)||!y()(this.state,n)}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,a=n.className,r=n.style,l=n.accordion,i=c()((e={},(0,o.Z)(e,t,!0),(0,o.Z)(e,a,!!a),e));return v.createElement("div",{className:i,style:r,role:l?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var n={};return"activeKey"in e&&(n.activeKey=w(e.activeKey)),n}}]),t}(v.Component);j.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},j.Panel=k,j.Panel;var E=t(55548),P=t(71946),N=t(37474),O=t(91604),M=function(e){var n,t=v.useContext(P.E_),l=t.getPrefixCls,i=t.direction,s=e.prefixCls,d=e.className,u=e.bordered,f=e.ghost,p=e.expandIconPosition,h=void 0===p?"start":p,y=l("collapse",s),C=v.useMemo(function(){return"left"===h?"start":"right"===h?"end":h},[h]),b=c()("".concat(y,"-icon-position-").concat(C),(0,o.Z)((0,o.Z)((0,o.Z)({},"".concat(y,"-borderless"),!(void 0===u||u)),"".concat(y,"-rtl"),"rtl"===i),"".concat(y,"-ghost"),!!f),void 0===d?"":d),x=(0,a.Z)((0,a.Z)({},N.ZP),{motionAppear:!1,leavedClassName:"".concat(y,"-content-hidden")});return v.createElement(j,(0,a.Z)({openMotion:x},e,{expandIcon:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.expandIcon,a=t?t(n):v.createElement(r.Z,{rotate:n.isActive?90:void 0});return(0,O.Tm)(a,function(){return{className:c()(a.props.className,"".concat(y,"-arrow"))}})},prefixCls:y,className:b}),(n=e.children,(0,m.Z)(n).map(function(e,n){var t;if(null===(t=e.props)||void 0===t?void 0:t.disabled){var o=e.key||String(n),r=e.props,l=r.disabled,c=r.collapsible,i=(0,a.Z)((0,a.Z)({},(0,E.Z)(e.props,["disabled"])),{key:o,collapsible:null!=c?c:l?"disabled":void 0});return(0,O.Tm)(e,i)}return e})))};M.Panel=function(e){var n=v.useContext(P.E_).getPrefixCls,t=e.prefixCls,r=e.className,l=e.showArrow,i=n("collapse",t),s=c()((0,o.Z)({},"".concat(i,"-no-arrow"),!(void 0===l||l)),void 0===r?"":r);return v.createElement(j.Panel,(0,a.Z)({},e,{prefixCls:i,className:s}))};var S=M},43795:function(e,n,t){"use strict";t.d(n,{default:function(){return _}});var a=t(87462),o=t(4942),r=t(93967),l=t.n(r),c=t(67294),i=t(71946),s=t(24061),d=t(96234),u=t(97685),f=t(71002),p=t(1413),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},v=t(32206),h=function(e,n){return c.createElement(v.Z,(0,p.Z)((0,p.Z)({},e),{},{ref:n,icon:m}))};h.displayName="EyeInvisibleOutlined";var y=c.forwardRef(h),C=t(2850),b=t(55548),x=t(21396),g=t(95905),Z=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)0>n.indexOf(a[o])&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(t[a[o]]=e[a[o]]);return t},k={click:"onClick",hover:"onMouseOver"},w=c.forwardRef(function(e,n){var t=e.visibilityToggle,r=void 0===t||t,s="object"===(0,f.Z)(r)&&void 0!==r.visible,p=(0,c.useState)(function(){return!!s&&r.visible}),m=(0,u.Z)(p,2),v=m[0],h=m[1],w=(0,c.useRef)(null);c.useEffect(function(){s&&h(r.visible)},[s,r]);var j=(0,g.Z)(w),E=function(){e.disabled||(v&&j(),h(function(e){var n,t=!e;return"object"===(0,f.Z)(r)&&(null===(n=r.onVisibleChange)||void 0===n||n.call(r,t)),t}))},P=function(n){var t=e.action,a=e.iconRender,r=k[void 0===t?"click":t]||"",l=(void 0===a?function(e){return e?c.createElement(C.Z,null):c.createElement(y,null)}:a)(v),i=(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},r,E),"className","".concat(n,"-icon")),"key","passwordIcon"),"onMouseDown",function(e){e.preventDefault()}),"onMouseUp",function(e){e.preventDefault()});return c.cloneElement(c.isValidElement(l)?l:c.createElement("span",null,l),i)};return c.createElement(i.C,null,function(t){var i=t.getPrefixCls,s=e.className,u=e.prefixCls,f=e.inputPrefixCls,p=e.size,m=Z(e,["className","prefixCls","inputPrefixCls","size"]),h=i("input",f),y=i("input-password",u),C=r&&P(y),g=l()(y,s,(0,o.Z)({},"".concat(y,"-").concat(p),!!p)),k=(0,a.Z)((0,a.Z)({},(0,b.Z)(m,["suffix","iconRender","visibilityToggle"])),{type:v?"text":"password",className:g,prefixCls:h,suffix:C});return p&&(k.size=p),c.createElement(d.ZP,(0,a.Z)({ref:(0,x.sQ)(n,w)},k))})}),j=t(72909),E=t(90622),P=t(41395),N=t(44053),O=t(91604),M=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)0>n.indexOf(a[o])&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(t[a[o]]=e[a[o]]);return t},S=c.forwardRef(function(e,n){var t,r=e.prefixCls,s=e.inputPrefixCls,u=e.className,f=e.size,p=e.suffix,m=e.enterButton,v=void 0!==m&&m,h=e.addonAfter,y=e.loading,C=e.disabled,b=e.onSearch,g=e.onChange,Z=e.onCompositionStart,k=e.onCompositionEnd,w=M(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),S=c.useContext(i.E_),I=S.getPrefixCls,A=S.direction,_=c.useContext(P.Z),R=c.useRef(!1),z=I("input-search",r),T=I("input",s),K=(0,N.ri)(z,A).compactSize||f||_,B=c.useRef(null),D=function(e){var n;document.activeElement===(null===(n=B.current)||void 0===n?void 0:n.input)&&e.preventDefault()},L=function(e){var n,t;b&&b(null===(t=null===(n=B.current)||void 0===n?void 0:n.input)||void 0===t?void 0:t.value,e)},U="boolean"==typeof v?c.createElement(j.Z,null):null,F="".concat(z,"-button"),G=v||{},Q=G.type&&!0===G.type.__ANT_BUTTON;t=Q||"button"===G.type?(0,O.Tm)(G,(0,a.Z)({onMouseDown:D,onClick:function(e){var n,t;null===(t=null===(n=null==G?void 0:G.props)||void 0===n?void 0:n.onClick)||void 0===t||t.call(n,e),L(e)},key:"enterButton"},Q?{className:F,size:K}:{})):c.createElement(E.Z,{className:F,type:v?"primary":void 0,size:K,disabled:C,key:"enterButton",onMouseDown:D,onClick:L,loading:y,icon:U},v),h&&(t=[t,(0,O.Tm)(h,{key:"addonAfter"})]);var q=l()(z,(0,o.Z)((0,o.Z)((0,o.Z)({},"".concat(z,"-rtl"),"rtl"===A),"".concat(z,"-").concat(K),!!K),"".concat(z,"-with-button"),!!v),u);return c.createElement(d.ZP,(0,a.Z)({ref:(0,x.sQ)(B,n),onPressEnter:function(e){R.current||y||L(e)}},w,{size:K,onCompositionStart:function(e){R.current=!0,null==Z||Z(e)},onCompositionEnd:function(e){R.current=!1,null==k||k(e)},prefixCls:T,addonAfter:t,suffix:p,onChange:function(e){e&&e.target&&"click"===e.type&&b&&b(e.target.value,e),g&&g(e)},className:q,disabled:C}))}),I=t(36410),A=d.ZP;A.Group=function(e){var n=(0,c.useContext)(i.E_),t=n.getPrefixCls,r=n.direction,d=e.prefixCls,u=e.className,f=t("input-group",d),p=l()(f,(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},"".concat(f,"-lg"),"large"===e.size),"".concat(f,"-sm"),"small"===e.size),"".concat(f,"-compact"),e.compact),"".concat(f,"-rtl"),"rtl"===r),void 0===u?"":u),m=(0,c.useContext)(s.aM),v=(0,c.useMemo)(function(){return(0,a.Z)((0,a.Z)({},m),{isFormItemInput:!1})},[m]);return c.createElement("span",{className:p,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},c.createElement(s.aM.Provider,{value:v},e.children))},A.Search=S,A.TextArea=I.Z,A.Password=w;var _=A},14845:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var a=t(4942),o=t(87462),r=t(97685),l=t(96494),c=t(93967),i=t.n(c),s=t(55548),d=t(67294),u=t(71946),f=t(5505),p=t(40823),m=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)0>n.indexOf(a[o])&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(t[a[o]]=e[a[o]]);return t},v=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)0>n.indexOf(a[o])&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(t[a[o]]=e[a[o]]);return t},h=new RegExp("^(".concat(f.Y.join("|"),")(-inverse)?$")),y=new RegExp("^(".concat(f.E.join("|"),")$")),C=d.forwardRef(function(e,n){var t=e.prefixCls,c=e.className,f=e.style,m=e.children,C=e.icon,b=e.color,x=e.onClose,g=e.closeIcon,Z=e.closable,k=v(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),w=d.useContext(u.E_),j=w.getPrefixCls,E=w.direction,P=d.useState(!0),N=(0,r.Z)(P,2),O=N[0],M=N[1];d.useEffect(function(){"visible"in k&&M(k.visible)},[k.visible]);var S=function(){return!!b&&(h.test(b)||y.test(b))},I=(0,o.Z)({backgroundColor:b&&!S()?b:void 0},f),A=S(),_=j("tag",t),R=i()(_,(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},"".concat(_,"-").concat(b),A),"".concat(_,"-has-color"),b&&!A),"".concat(_,"-hidden"),!O),"".concat(_,"-rtl"),"rtl"===E),c),z=function(e){e.stopPropagation(),null==x||x(e),!e.defaultPrevented&&("visible"in k||M(!1))},T="onClick"in k||m&&"a"===m.type,K=(0,s.Z)(k,["visible"]),B=C||null,D=B?d.createElement(d.Fragment,null,B,d.createElement("span",null,m)):m,L=d.createElement("span",(0,o.Z)({},K,{ref:n,className:R,style:I}),D,void 0!==Z&&Z?g?d.createElement("span",{className:"".concat(_,"-close-icon"),onClick:z},g):d.createElement(l.Z,{className:"".concat(_,"-close-icon"),onClick:z}):null);return T?d.createElement(p.Z,null,L):L});C.CheckableTag=function(e){var n=e.prefixCls,t=e.className,r=e.checked,l=e.onChange,c=e.onClick,s=m(e,["prefixCls","className","checked","onChange","onClick"]),f=(0,d.useContext(u.E_).getPrefixCls)("tag",n),p=i()(f,(0,a.Z)((0,a.Z)({},"".concat(f,"-checkable"),!0),"".concat(f,"-checkable-checked"),r),t);return d.createElement("span",(0,o.Z)({},s,{className:p,onClick:function(e){null==l||l(!r),null==c||c(e)}}))};var b=C},59181:function(e,n,t){"use strict";t.d(n,{G:function(){return l}});var a=t(49641),o=function(e){if((0,a.Z)()&&window.document.documentElement){var n=Array.isArray(e)?e:[e],t=window.document.documentElement;return n.some(function(e){return e in t.style})}return!1},r=function(e,n){if(!o(e))return!1;var t=document.createElement("div"),a=t.style[e];return t.style[e]=n,t.style[e]!==a};function l(e,n){return Array.isArray(e)||void 0===n?o(e):r(e,n)}},9507:function(e,n,t){"use strict";t.d(n,{AB:function(){return s},Qr:function(){return l},t5:function(){return r},wS:function(){return i}});var a=t(42238),o=t.n(a);function r(e){let n=e.split(":");n[n.length-1]="";let t=n.join(":");return"[::1]"===(t=t.slice(0,t.length-1))||"127.0.0.1"===t?"Localhost":t}function l(e){return!e||0===Object.keys(e).length&&e.constructor===Object}function c(e,n,t){return String(n.repeat(t)+e).slice(-t)}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=Number.isFinite(+e)?Math.abs(e):0,t=Math.floor(n/86400),a=t>0?"".concat(t," day").concat(t>1?"s":""," "):"",o=Math.floor(n/3600%24);return a+(o||t?c("".concat(o,":"),"0",3):"")+c("".concat(Math.floor(n/60%60),":"),"0",3)+c("".concat(Math.floor(n%60)),"0",2)}function s(e){let{device:n,os:t,browser:a}=o()(e),{major:r,name:l}=a,{version:c,name:i}=t,{model:s,type:d}=n;return"libmpv"===e?"mpv media player":l&&r&&i?"".concat(l," ").concat(r," on ").concat(i," ").concat(c,"\n  ").concat(s||d?" (".concat(s||d,")"):""):e}},26024:function(e){e.exports={modalContainer:"ChatModerationDetailsModal_modalContainer__mtTcg",chatHistory:"ChatModerationDetailsModal_chatHistory__Iksxq",colorBlock:"ChatModerationDetailsModal_colorBlock__eRrFu",displayName:"ChatModerationDetailsModal_displayName__vcRZ5"}},27705:function(e){e.exports={spinner:"Modal_spinner__vORWo",content:"Modal_content__mZkaV",modal:"Modal_modal___vOcW"}}}]);