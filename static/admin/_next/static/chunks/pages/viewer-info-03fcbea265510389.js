(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1194],{87547:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(1413),a=r(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},s=r(42135),o=function(e,t){return a.createElement(s.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:i}))};o.displayName="UserOutlined";var c=a.forwardRef(o)},31709:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/viewer-info",function(){return r(51237)}])},89270:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(85893),a=r(31877),i=r(92616),s=r.n(i),o=r(58091),c=r(60727);function u(e){var t={};return e.forEach((function(e){var r=new Date(e.time),n=(0,o.Z)(r,"H:mma");t[n]=e.value})),t}function l(e){var t=e.data,r=e.title,a=e.color,i=e.unit,s=e.dataCollections,o=e.yFlipped,l=e.yLogarithmic,d=[];t&&t.length>0&&d.push({name:r,color:a,data:u(t)}),s.forEach((function(e){d.push({name:e.name,data:u(e.data),color:e.color,dataset:e.options})}));var f={scales:{y:{reverse:!1,type:"linear"},x:{type:"time"}}};return f.scales.y.reverse=o,f.scales.y.type=l?"logarithmic":"linear",(0,n.jsx)("div",{className:"line-chart-container",children:(0,n.jsx)(c.wW,{xtitle:"Time",ytitle:r,suffix:i,legend:"bottom",color:a,data:d,download:r,library:f})})}s().use(a.Z),l.defaultProps={dataCollections:[],data:[],title:"",yFlipped:!1,yLogarithmic:!1}},34440:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(85893),a=r(84485),i=r(97910),s=r(74763),o=r(97751);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}var l=a.Z.Text,d={title:"",value:0,prefix:null,suffix:null,color:"",progress:!1,centered:!1,formatter:null};function f(e){var t=e.title,r=e.value,a=e.prefix,s=e.suffix,o=e.color,c=r>90?"red":o,u=(0,n.jsxs)("div",{children:[a,(0,n.jsx)("div",{children:(0,n.jsx)(l,{type:"secondary",children:t})}),(0,n.jsx)("div",{children:(0,n.jsxs)(l,{type:"secondary",children:[r,s||"%"]})})]});return(0,n.jsx)(i.Z,{type:"dashboard",percent:r,width:120,strokeColor:{"0%":o,"90%":c},format:function(){return u}})}function v(e){var t=e.title,r=e.value,a=e.prefix,i=e.formatter;return(0,n.jsx)(s.Z,{title:t,value:r,prefix:a,formatter:i})}function h(e){var t=e.progress?f:v,r=e.centered?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,n.jsx)(o.Z,{type:"inner",children:(0,n.jsx)("div",{style:r,children:(0,n.jsx)(t,u({},e))})})}f.defaultProps=d,v.defaultProps=d,h.defaultProps=d},51237:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return L}});var n=r(34051),a=r.n(n),i=r(85893),s=r(67294),o=r(61709),c=r(84485),u=r(25968),l=r(6226),d=r(14670),f=r(38504),v=r(11382),h=r(87547),x=r(80882),p=r(83946),m=r(19013),y=r(13882);function Z(e,t){(0,y.Z)(2,arguments);var r=(0,m.Z)(e),n=(0,p.Z)(t);return isNaN(n)?new Date(NaN):n?(r.setDate(r.getDate()+n),r):r}function g(e,t){(0,y.Z)(2,arguments);var r=(0,p.Z)(t);return Z(e,-r)}function w(e,t){(0,y.Z)(2,arguments);var r=(0,m.Z)(e),n=(0,p.Z)(t);if(isNaN(n))return new Date(NaN);if(!n)return r;var a=r.getDate(),i=new Date(r.getTime());i.setMonth(r.getMonth()+n+1,0);var s=i.getDate();return a>=s?i:(r.setFullYear(i.getFullYear(),i.getMonth(),a),r)}function j(e,t){(0,y.Z)(2,arguments);var r=(0,p.Z)(t);return w(e,-r)}function b(e,t){if((0,y.Z)(2,arguments),!t||"object"!==typeof t)return new Date(NaN);var r=t.years?(0,p.Z)(t.years):0,n=t.months?(0,p.Z)(t.months):0,a=t.weeks?(0,p.Z)(t.weeks):0,i=t.days?(0,p.Z)(t.days):0,s=t.hours?(0,p.Z)(t.hours):0,o=t.minutes?(0,p.Z)(t.minutes):0,c=t.seconds?(0,p.Z)(t.seconds):0,u=j(e,n+12*r),l=g(u,i+7*a),d=o+60*s,f=c+60*d,v=1e3*f,h=new Date(l.getTime()-v);return h}function D(e){(0,y.Z)(1,arguments);var t=(0,m.Z)(e),r=t.getTime();return r}function S(e){return(0,y.Z)(1,arguments),Math.floor(D(e)/1e3)}var k=r(89270),N=r(34440),C=r(96003),P=r(85533),O=r(2766);function _(e){var t=e.data,r=[{title:"User Agent",dataIndex:"userAgent",key:"userAgent",render:function(e){return(0,O.AB)(e)}},{title:"Location",dataIndex:"geo",key:"geo",render:function(e){return e?"".concat(e.regionName,", ").concat(e.countryCode):"-"}},{title:"Watch Time",dataIndex:"firstSeen",key:"firstSeen",defaultSortOrder:"ascend",render:function(e){return(0,P.Z)(new Date(e))},sorter:function(e,t){return new Date(e.firstSeen).getTime()-new Date(t.firstSeen).getTime()},sortDirections:["descend","ascend"]}];return(0,i.jsx)(C.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:r,dataSource:t,size:"small",rowKey:"id"})}var T=r(35159),E=r(58827);function I(e,t,r,n,a,i,s){try{var o=e[i](s),c=o.value}catch(u){return void r(u)}o.done?t(c):Promise.resolve(c).then(n,a)}function L(){var e,t=(0,s.useContext)(T.aC)||{},r=t.online,n=t.broadcaster,p=t.viewerCount,m=t.overallPeakViewerCount,y=t.sessionPeakViewerCount;n&&n.time&&(e=new Date(n.time));var Z=[{title:"Current stream",start:e},{title:"Last 12 hours",start:b(new Date,{hours:12})},{title:"Last 24 hours",start:b(new Date,{hours:24})},{title:"Last 7 days",start:b(new Date,{days:7})},{title:"Last 30 days",start:b(new Date,{days:30})},{title:"Last 3 months",start:b(new Date,{months:3})},{title:"Last 6 months",start:b(new Date,{months:6})}],g=(0,s.useState)(!0),w=g[0],j=g[1],D=(0,s.useState)([]),C=D[0],P=D[1],O=(0,s.useState)([]),L=O[0],M=O[1],A=(0,s.useState)(Z[1]),F=A[0],V=A[1],z=function(){var e,t=(e=a().mark((function e(){var t,r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(E.iV,"?windowStart=").concat(S(F.start)),e.next=4,(0,E.rQ)(t);case 4:r=e.sent,P(r),j(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("==== error",e.t0);case 12:return e.prev=12,e.next=15,(0,E.rQ)(E.a_);case 15:n=e.sent,M(n),e.next=22;break;case 19:e.prev=19,e.t1=e.catch(12),console.log("==== error",e.t1);case 22:case"end":return e.stop()}}),e,null,[[0,9],[12,19]])})),function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function s(e){I(i,n,a,s,o,"next",e)}function o(e){I(i,n,a,s,o,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}();(0,s.useEffect)((function(){var e=null;return z(),r?(e=setInterval(z,6e4),function(){clearInterval(e)}):function(){return[]}}),[r,F]);var B=function(e){var t=e.key;V(Z[t])},Q=(0,i.jsxs)(o.Z,{children:[r&&e&&(0,i.jsx)(o.Z.Item,{onClick:B,children:Z[0].title},"0"),Z.slice(1).map((function(e,t){return(0,i.jsx)(o.Z.Item,{onClick:B,children:e.title},t+1)}))]});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z.Title,{children:"Viewer Info"}),(0,i.jsx)("br",{}),(0,i.jsxs)(u.Z,{gutter:[16,16],justify:"space-around",children:[r&&(0,i.jsx)(l.Z,{span:8,md:8,children:(0,i.jsx)(N.Z,{title:"Current viewers",value:p.toString(),prefix:(0,i.jsx)(h.Z,{})})}),(0,i.jsx)(l.Z,{md:r?8:12,children:(0,i.jsx)(N.Z,{title:r?"Max viewers this stream":"Max viewers last stream",value:y.toString(),prefix:(0,i.jsx)(h.Z,{})})}),(0,i.jsx)(l.Z,{md:r?8:12,children:(0,i.jsx)(N.Z,{title:"All-time max viewers",value:m.toString(),prefix:(0,i.jsx)(h.Z,{})})})]}),!C.length&&(0,i.jsx)(d.Z,{style:{marginTop:"10px"},banner:!0,message:"Please wait",description:"No viewer data has been collected yet.",type:"info"}),(0,i.jsx)(f.Z,{overlay:Q,trigger:["click"],children:(0,i.jsxs)("button",{type:"button",style:{float:"right",background:"transparent",border:"unset"},children:[F.title," ",(0,i.jsx)(x.Z,{})]})}),C.length>0&&(0,i.jsx)(k.Z,{title:"Viewers",data:C,color:"#2087E2",unit:""}),(0,i.jsx)(v.Z,{spinning:!L.length||w,children:(0,i.jsx)(_,{data:L})})]})}}},function(e){e.O(0,[7570,1741,6003,8091,8879,7751,4763,5533,1080,7910,9774,2888,179],(function(){return t=31709,e(e.s=t);var t}));var t=e.O();_N_E=t}]);