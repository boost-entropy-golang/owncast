(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1487],{99096:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/hardware-info",function(){return n(89369)}])},39315:function(e,t,n){"use strict";n.d(t,{k:function(){return d}});var r=n(85893),o=n(14675),i=n(67294),l=n(72611),a=n(23148),s=n(26495),c=n(90622);function u(e){let t={};return e.forEach(e=>{let n=new Date(e.time);t[(0,o.WU)(n,"H:mma")]=e.value}),t}a.kL.register(a.uw,a.WV,a.f$,a.od,a.jn,a.Dx,a.u,a.De);let d=e=>{let{data:t,title:n,color:o,unit:a,dataCollections:d,yFlipped:f,yLogarithmic:p,minYValue:v,yStepSize:m=0}=e,h=[],g=(0,i.useRef)(null);return t&&t.length>0&&h.push({id:n,label:n,backgroundColor:o,borderColor:o,borderWidth:3,data:u(t)}),d.forEach(e=>{h.push({id:e.name,label:e.name,data:u(e.data),backgroundColor:e.color,borderColor:e.color,borderWidth:3,pointStyle:e.pointStyle||"circle",radius:e.pointRadius||1})}),(0,r.jsxs)("div",{className:"line-chart-container",children:[(0,r.jsx)(s.x1,{ref:g,data:{datasets:h},options:{responsive:!0,clip:!1,scales:{y:{type:p?"logarithmic":"linear",reverse:f,min:v,ticks:{stepSize:m},title:{display:!0,text:a}}}},height:"70vh"}),(0,r.jsx)(c.Z,{size:"small",onClick:()=>{if(g.current){let e=document.createElement("a");e.download="chart.png",e.href=g.current.canvas.toDataURL(),e.click()}},type:"ghost",icon:(0,r.jsx)(l.Z,{}),className:"download-btn"})]})};d.defaultProps={dataCollections:[],data:[],title:"",yFlipped:!1,yLogarithmic:!1}},34849:function(e,t,n){"use strict";n.d(t,{m:function(){return p}});var r=n(85893),o=n(47271),i=n(47066),l=n(94095),a=n(82913);let{Text:s}=o.default,c={title:"",value:0,prefix:null,suffix:null,color:"",progress:!1,centered:!1,formatter:null},u=e=>{let{prefix:t,value:n,suffix:o,title:i}=e;return(0,r.jsxs)("div",{children:[t,(0,r.jsx)("div",{children:(0,r.jsx)(s,{type:"secondary",children:i})}),(0,r.jsx)("div",{children:(0,r.jsxs)(s,{type:"secondary",children:[n,o||"%"]})})]})},d=e=>{let{title:t,value:n,prefix:o,suffix:l,color:a}=e,s=n>90?"red":a,c=(0,r.jsx)(u,{prefix:o,value:n,suffix:l,title:t});return(0,r.jsx)(i.Z,{type:"dashboard",percent:n,width:120,strokeColor:{"0%":a,"90%":s},format:()=>c})};d.defaultProps=c;let f=e=>{let{title:t,value:n,prefix:o,formatter:i}=e;return(0,r.jsx)(l.Z,{title:t,value:n,prefix:o,formatter:i})};f.defaultProps=c;let p=e=>{let{progress:t,centered:n}=e,o=t?d:f;return(0,r.jsx)(a.default,{type:"inner",children:(0,r.jsx)("div",{style:n?{display:"flex",alignItems:"center",justifyContent:"center"}:{},children:(0,r.jsx)(o,{...e})})})};p.defaultProps=c},89369:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(85893),o=n(47271),i=n(46994),l=n(70936),a=n(6647),s=n(55050),c=n(67294),u=n(5152),d=n.n(u),f=n(6925),p=n(39315),v=n(34849),m=n(695);let h=d()(()=>Promise.all([n.e(7298),n.e(1975)]).then(n.t.bind(n,1975,23)),{loadableGenerated:{webpack:()=>[1975]},ssr:!1}),g=d()(()=>Promise.all([n.e(7298),n.e(2486)]).then(n.t.bind(n,62486,23)),{loadableGenerated:{webpack:()=>[62486]},ssr:!1}),x=d()(()=>Promise.all([n.e(7298),n.e(7217)]).then(n.t.bind(n,57217,23)),{loadableGenerated:{webpack:()=>[57217]},ssr:!1});function y(){var e,t,n;let[u,d]=(0,c.useState)({cpu:[],memory:[],disk:[],message:""}),m=async()=>{try{let e=await (0,f.rQ)(f.nx);d({...e})}catch(e){d({...u,message:e.message})}};if((0,c.useEffect)(()=>{let e=null;return m(),e=setInterval(m,f.NE),()=>{clearInterval(e)}},[]),!u.cpu)return(0,r.jsxs)("div",{children:[(0,r.jsx)(o.default.Title,{children:"Hardware Info"}),(0,r.jsx)(i.Z,{style:{marginTop:"10px"},banner:!0,message:"Please wait",description:"No hardware details have been collected yet.",type:"info"}),(0,r.jsx)(l.Z,{spinning:!0,style:{width:"100%",margin:"10px"}})]});let y=null===(e=u.cpu[u.cpu.length-1])||void 0===e?void 0:e.value,b=null===(t=u.memory[u.memory.length-1])||void 0===t?void 0:t.value,w=null===(n=u.disk[u.disk.length-1])||void 0===n?void 0:n.value,j=[{name:"CPU",color:"#B63FFF",data:u.cpu,pointStyle:"rect"},{name:"Memory",color:"#2087E2",data:u.memory,pointStyle:"circle"},{name:"Disk",color:"#FF7700",data:u.disk,pointStyle:"rectRounded"}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.default.Title,{children:"Hardware Info"}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.Z,{gutter:[16,16],justify:"space-around",children:[(0,r.jsx)(s.Z,{children:(0,r.jsx)(v.m,{title:j[0].name,value:Math.round(y)||0,prefix:(0,r.jsx)(g,{style:{color:j[0].color}}),color:j[0].color,progress:!0,centered:!0})}),(0,r.jsx)(s.Z,{children:(0,r.jsx)(v.m,{title:j[1].name,value:Math.round(b)||0,prefix:(0,r.jsx)(h,{style:{color:j[1].color}}),color:j[1].color,progress:!0,centered:!0})}),(0,r.jsx)(s.Z,{children:(0,r.jsx)(v.m,{title:j[2].name,value:Math.round(w)||0,prefix:(0,r.jsx)(x,{style:{color:j[2].color}}),color:j[2].color,progress:!0,centered:!0})})]}),(0,r.jsx)(p.k,{title:"% used",dataCollections:j,color:"#FF7700",unit:"%"})]})]})}y.getLayout=function(e){return(0,r.jsx)(m.l,{page:e})}},60057:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(4942),o=n(1413),i=n(97685),l=n(45987),a=n(67294),s=n(25645),c=n(93967),u=n.n(c),d={adjustX:1,adjustY:1},f=[0,0],p={topLeft:{points:["bl","tl"],overflow:d,offset:[0,-4],targetOffset:f},topCenter:{points:["bc","tc"],overflow:d,offset:[0,-4],targetOffset:f},topRight:{points:["br","tr"],overflow:d,offset:[0,-4],targetOffset:f},bottomLeft:{points:["tl","bl"],overflow:d,offset:[0,4],targetOffset:f},bottomCenter:{points:["tc","bc"],overflow:d,offset:[0,4],targetOffset:f},bottomRight:{points:["tr","br"],overflow:d,offset:[0,4],targetOffset:f}},v=n(79097),m=n(90985),h=n(53792),g=v.Z.ESC,x=v.Z.TAB,y=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"],b=a.forwardRef(function(e,t){var n,c,d,f,v,b,w,j,C,k,E,Z,N,P,F,_,R=e.arrow,S=void 0!==R&&R,O=e.prefixCls,T=void 0===O?"rc-dropdown":O,M=e.transitionName,A=e.animation,L=e.align,V=e.placement,W=e.placements,D=e.getPopupContainer,I=e.showAction,H=e.hideAction,G=e.overlayClassName,Q=e.overlayStyle,U=e.visible,X=e.trigger,z=void 0===X?["hover"]:X,B=e.autoFocus,Y=(0,l.Z)(e,y),$=a.useState(),q=(0,i.Z)($,2),J=q[0],K=q[1],ee="visible"in e?U:J,et=a.useRef(null);a.useImperativeHandle(t,function(){return et.current}),d=(c={visible:ee,setTriggerVisible:K,triggerRef:et,onVisibleChange:e.onVisibleChange,autoFocus:B}).visible,f=c.setTriggerVisible,v=c.triggerRef,b=c.onVisibleChange,w=c.autoFocus,j=a.useRef(!1),C=function(){if(d&&v.current){var e,t,n,r;null===(e=v.current)||void 0===e||null===(t=e.triggerRef)||void 0===t||null===(n=t.current)||void 0===n||null===(r=n.focus)||void 0===r||r.call(n),f(!1),"function"==typeof b&&b(!1)}},k=function(){var e,t,n,r,o=(0,h.tS)(null===(e=v.current)||void 0===e?void 0:null===(t=e.popupRef)||void 0===t?void 0:null===(n=t.current)||void 0===n?void 0:null===(r=n.getElement)||void 0===r?void 0:r.call(n))[0];return null!=o&&!!o.focus&&(o.focus(),j.current=!0,!0)},E=function(e){switch(e.keyCode){case g:C();break;case x:var t=!1;j.current||(t=k()),t?e.preventDefault():C()}},a.useEffect(function(){return d?(window.addEventListener("keydown",E),w&&(0,m.Z)(k,3),function(){window.removeEventListener("keydown",E),j.current=!1}):function(){j.current=!1}},[d]);var en=function(){var t=e.overlay;return"function"==typeof t?t():t},er=function(){var e=en();return a.createElement(a.Fragment,null,S&&a.createElement("div",{className:"".concat(T,"-arrow")}),e)},eo=H;return eo||-1===z.indexOf("contextMenu")||(eo=["click"]),a.createElement(s.Z,(0,o.Z)((0,o.Z)({builtinPlacements:void 0===W?p:W},Y),{},{prefixCls:T,ref:et,popupClassName:u()(G,(0,r.Z)({},"".concat(T,"-show-arrow"),S)),popupStyle:Q,action:z,showAction:I,hideAction:eo||[],popupPlacement:void 0===V?"bottomLeft":V,popupAlign:L,popupTransitionName:M,popupAnimation:A,popupVisible:ee,stretch:(Z=e.minOverlayWidthMatchTrigger,N=e.alignPoint,"minOverlayWidthMatchTrigger"in e?Z:!N)?"minWidth":"",popup:"function"==typeof e.overlay?er:er(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;K(t),"function"==typeof n&&n(t)},onPopupClick:function(t){var n=e.onOverlayClick;K(!1),n&&n(t)},getPopupContainer:D}),(F=(P=e.children).props?P.props:{},_=u()(F.className,void 0!==(n=e.openClassName)?n:"".concat(T,"-open")),ee&&P?a.cloneElement(P,{className:_}):P))})},88370:function(e,t,n){"use strict";function r(e){return t=>{let n=(e?Math[e]:Math.trunc)(t);return 0===n?0:n}}n.d(t,{u:function(){return r}})},87691:function(e,t,n){"use strict";n.d(t,{_:function(){return o}});var r=n(32841);function o(e,t){return+(0,r.Q)(e)-+(0,r.Q)(t)}},20209:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});var r=n(88370),o=n(87691);function i(e,t,n){let i=(0,o._)(e,t)/1e3;return(0,r.u)(n?.roundingMethod)(i)}}},function(e){e.O(0,[2196,6410,8768,947,7406,4716,2862,7271,9083,811,1880,2839,4675,9638,653,2629,695,2888,9774,179],function(){return e(e.s=99096)}),_N_E=e.O()}]);