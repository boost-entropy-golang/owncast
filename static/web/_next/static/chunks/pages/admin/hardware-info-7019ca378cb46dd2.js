(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1487],{93645:function(e,t,n){"use strict";n.d(t,{u:function(){return o}});var r={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function o(e){return e?r[e]:r.trunc}},59910:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(19013),o=n(13882);function i(e,t){return(0,o.Z)(2,arguments),(0,r.Z)(e).getTime()-(0,r.Z)(t).getTime()}},11699:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(59910),o=n(13882),i=n(93645);function l(e,t,n){(0,o.Z)(2,arguments);var l=(0,r.Z)(e,t)/1e3;return(0,i.u)(null==n?void 0:n.roundingMethod)(l)}},1469:function(e){var t=Array.isArray;e.exports=t},99096:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/hardware-info",function(){return n(30366)}])},54615:function(e,t,n){"use strict";n.d(t,{k:function(){return d}});var r=n(85893),o=n(58091),i=n(67294),l=n(23430),a=n(23148),s=n(26495),c=n(71577);function u(e){let t={};return e.forEach(e=>{let n=new Date(e.time),r=(0,o.Z)(n,"H:mma");t[r]=e.value}),t}a.kL.register(a.uw,a.WV,a.f$,a.od,a.jn,a.Dx,a.u,a.De);let d=e=>{let{data:t,title:n,color:o,unit:a,dataCollections:d,yFlipped:f,yLogarithmic:p,minYValue:v,yStepSize:m=0}=e,h=[],g=(0,i.useRef)(null);return t&&t.length>0&&h.push({id:n,label:n,backgroundColor:o,borderColor:o,borderWidth:3,data:u(t)}),d.forEach(e=>{h.push({id:e.name,label:e.name,data:u(e.data),backgroundColor:e.color,borderColor:e.color,borderWidth:3,pointStyle:e.pointStyle||"circle",radius:e.pointRadius||1})}),(0,r.jsxs)("div",{className:"line-chart-container",children:[(0,r.jsx)(s.x1,{ref:g,data:{datasets:h},options:{responsive:!0,clip:!1,scales:{y:{type:p?"logarithmic":"linear",reverse:f,min:v,ticks:{stepSize:m},title:{display:!0,text:a}}}},height:"70vh"}),(0,r.jsx)(c.Z,{size:"small",onClick:()=>{if(g.current){let e=document.createElement("a");e.download="chart.png",e.href=g.current.canvas.toDataURL(),e.click()}},type:"ghost",icon:(0,r.jsx)(l.Z,{}),className:"download-btn"})]})};d.defaultProps={dataCollections:[],data:[],title:"",yFlipped:!1,yLogarithmic:!1}},15014:function(e,t,n){"use strict";n.d(t,{m:function(){return p}});var r=n(85893),o=n(85818),i=n(93471),l=n(74763),a=n(59652);let{Text:s}=o.default,c={title:"",value:0,prefix:null,suffix:null,color:"",progress:!1,centered:!1,formatter:null},u=e=>{let{prefix:t,value:n,suffix:o,title:i}=e;return(0,r.jsxs)("div",{children:[t,(0,r.jsx)("div",{children:(0,r.jsx)(s,{type:"secondary",children:i})}),(0,r.jsx)("div",{children:(0,r.jsxs)(s,{type:"secondary",children:[n,o||"%"]})})]})},d=e=>{let{title:t,value:n,prefix:o,suffix:l,color:a}=e,s=(0,r.jsx)(u,{prefix:o,value:n,suffix:l,title:t});return(0,r.jsx)(i.Z,{type:"dashboard",percent:n,width:120,strokeColor:{"0%":a,"90%":n>90?"red":a},format:()=>s})};d.defaultProps=c;let f=e=>{let{title:t,value:n,prefix:o,formatter:i}=e;return(0,r.jsx)(l.Z,{title:t,value:n,prefix:o,formatter:i})};f.defaultProps=c;let p=e=>{let{progress:t,centered:n}=e,o=t?d:f;return(0,r.jsx)(a.default,{type:"inner",children:(0,r.jsx)("div",{style:n?{display:"flex",alignItems:"center",justifyContent:"center"}:{},children:(0,r.jsx)(o,{...e})})})};p.defaultProps=c},30366:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(85893),o=n(85818),i=n(14670),l=n(11382),a=n(71230),s=n(15746),c=n(67294),u=n(5152),d=n.n(u),f=n(81453),p=n(54615),v=n(15014),m=n(34261);let h=d()(()=>Promise.all([n.e(2074),n.e(8695)]).then(n.t.bind(n,18695,23)),{loadableGenerated:{webpack:()=>[18695]},ssr:!1}),g=d()(()=>Promise.all([n.e(2074),n.e(7061)]).then(n.t.bind(n,77061,23)),{loadableGenerated:{webpack:()=>[77061]},ssr:!1}),y=d()(()=>Promise.all([n.e(2074),n.e(9790)]).then(n.t.bind(n,79790,23)),{loadableGenerated:{webpack:()=>[79790]},ssr:!1});function x(){var e,t,n;let[u,d]=(0,c.useState)({cpu:[],memory:[],disk:[],message:""}),m=async()=>{try{let e=await (0,f.rQ)(f.nx);d({...e})}catch(e){d({...u,message:e.message})}};if((0,c.useEffect)(()=>{let e=null;return m(),e=setInterval(m,f.NE),()=>{clearInterval(e)}},[]),!u.cpu)return(0,r.jsxs)("div",{children:[(0,r.jsx)(o.default.Title,{children:"Hardware Info"}),(0,r.jsx)(i.Z,{style:{marginTop:"10px"},banner:!0,message:"Please wait",description:"No hardware details have been collected yet.",type:"info"}),(0,r.jsx)(l.Z,{spinning:!0,style:{width:"100%",margin:"10px"}})]});let x=null===(e=u.cpu[u.cpu.length-1])||void 0===e?void 0:e.value,b=null===(t=u.memory[u.memory.length-1])||void 0===t?void 0:t.value,w=null===(n=u.disk[u.disk.length-1])||void 0===n?void 0:n.value,j=[{name:"CPU",color:"#B63FFF",data:u.cpu,pointStyle:"rect"},{name:"Memory",color:"#2087E2",data:u.memory,pointStyle:"circle"},{name:"Disk",color:"#FF7700",data:u.disk,pointStyle:"rectRounded"}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.default.Title,{children:"Hardware Info"}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.Z,{gutter:[16,16],justify:"space-around",children:[(0,r.jsx)(s.Z,{children:(0,r.jsx)(v.m,{title:j[0].name,value:"".concat(Math.round(x)||0),prefix:(0,r.jsx)(g,{style:{color:j[0].color}}),color:j[0].color,progress:!0,centered:!0})}),(0,r.jsx)(s.Z,{children:(0,r.jsx)(v.m,{title:j[1].name,value:"".concat(Math.round(b)||0),prefix:(0,r.jsx)(h,{style:{color:j[1].color}}),color:j[1].color,progress:!0,centered:!0})}),(0,r.jsx)(s.Z,{children:(0,r.jsx)(v.m,{title:j[2].name,value:"".concat(Math.round(w)||0),prefix:(0,r.jsx)(y,{style:{color:j[2].color}}),color:j[2].color,progress:!0,centered:!0})})]}),(0,r.jsx)(p.k,{title:"% used",dataCollections:j,color:"#FF7700",unit:"%"})]})]})}x.getLayout=function(e){return(0,r.jsx)(m.l,{page:e})}},60057:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(4942),o=n(1413),i=n(97685),l=n(45987),a=n(67294),s=n(81263),c=n(94184),u=n.n(c),d={adjustX:1,adjustY:1},f=[0,0],p={topLeft:{points:["bl","tl"],overflow:d,offset:[0,-4],targetOffset:f},topCenter:{points:["bc","tc"],overflow:d,offset:[0,-4],targetOffset:f},topRight:{points:["br","tr"],overflow:d,offset:[0,-4],targetOffset:f},bottomLeft:{points:["tl","bl"],overflow:d,offset:[0,4],targetOffset:f},bottomCenter:{points:["tc","bc"],overflow:d,offset:[0,4],targetOffset:f},bottomRight:{points:["tr","br"],overflow:d,offset:[0,4],targetOffset:f}},v=n(15105),m=n(75164),h=n(88603),g=v.Z.ESC,y=v.Z.TAB,x=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"],b=a.forwardRef(function(e,t){var n,c,d,f,v,b,w,j,C,k,Z,E,N,P,F,M,R=e.arrow,S=void 0!==R&&R,T=e.prefixCls,O=void 0===T?"rc-dropdown":T,_=e.transitionName,A=e.animation,L=e.align,V=e.placement,D=e.placements,I=e.getPopupContainer,W=e.showAction,H=e.hideAction,G=e.overlayClassName,X=e.overlayStyle,z=e.visible,B=e.trigger,U=void 0===B?["hover"]:B,Q=e.autoFocus,Y=(0,l.Z)(e,x),$=a.useState(),q=(0,i.Z)($,2),J=q[0],K=q[1],ee="visible"in e?z:J,et=a.useRef(null);a.useImperativeHandle(t,function(){return et.current}),d=(c={visible:ee,setTriggerVisible:K,triggerRef:et,onVisibleChange:e.onVisibleChange,autoFocus:Q}).visible,f=c.setTriggerVisible,v=c.triggerRef,b=c.onVisibleChange,w=c.autoFocus,j=a.useRef(!1),C=function(){if(d&&v.current){var e,t,n,r;null===(e=v.current)||void 0===e||null===(t=e.triggerRef)||void 0===t||null===(n=t.current)||void 0===n||null===(r=n.focus)||void 0===r||r.call(n),f(!1),"function"==typeof b&&b(!1)}},k=function(){var e,t,n,r,o=(0,h.tS)(null===(e=v.current)||void 0===e?void 0:null===(t=e.popupRef)||void 0===t?void 0:null===(n=t.current)||void 0===n?void 0:null===(r=n.getElement)||void 0===r?void 0:r.call(n))[0];return null!=o&&!!o.focus&&(o.focus(),j.current=!0,!0)},Z=function(e){switch(e.keyCode){case g:C();break;case y:var t=!1;j.current||(t=k()),t?e.preventDefault():C()}},a.useEffect(function(){return d?(window.addEventListener("keydown",Z),w&&(0,m.Z)(k,3),function(){window.removeEventListener("keydown",Z),j.current=!1}):function(){j.current=!1}},[d]);var en=function(){var t=e.overlay;return"function"==typeof t?t():t},er=function(){var e=en();return a.createElement(a.Fragment,null,S&&a.createElement("div",{className:"".concat(O,"-arrow")}),e)},eo=H;return eo||-1===U.indexOf("contextMenu")||(eo=["click"]),a.createElement(s.Z,(0,o.Z)((0,o.Z)({builtinPlacements:void 0===D?p:D},Y),{},{prefixCls:O,ref:et,popupClassName:u()(G,(0,r.Z)({},"".concat(O,"-show-arrow"),S)),popupStyle:X,action:U,showAction:W,hideAction:eo||[],popupPlacement:void 0===V?"bottomLeft":V,popupAlign:L,popupTransitionName:_,popupAnimation:A,popupVisible:ee,stretch:(E=e.minOverlayWidthMatchTrigger,N=e.alignPoint,"minOverlayWidthMatchTrigger"in e?E:!N)?"minWidth":"",popup:"function"==typeof e.overlay?er:er(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;K(t),"function"==typeof n&&n(t)},onPopupClick:function(t){var n=e.onOverlayClick;K(!1),n&&n(t)},getPopupContainer:I}),(F=(P=e.children).props?P.props:{},M=u()(F.className,void 0!==(n=e.openClassName)?n:"".concat(O,"-open")),ee&&P?a.cloneElement(P,{className:M}):P))})}},function(e){e.O(0,[2196,173,5874,7311,5634,4931,5402,5257,1664,5348,9915,4526,7940,428,7809,4559,4261,9774,2888,179],function(){return e(e.s=99096)}),_N_E=e.O()}]);