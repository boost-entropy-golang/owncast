(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1487],{99096:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/hardware-info",function(){return r(2574)}])},41600:function(e,t,r){"use strict";r.d(t,{k:function(){return Chart}});var a=r(85893),l=r(58091),n=r(67294),s=r(30744),i=r(23148),o=r(26495),d=r(65400);function createGraphDataset(e){let t={};return e.forEach(e=>{let r=new Date(e.time),a=(0,l.Z)(r,"H:mma");t[a]=e.value}),t}i.kL.register(i.uw,i.WV,i.f$,i.od,i.jn,i.Dx,i.u,i.De);let Chart=e=>{let{data:t,title:r,color:l,unit:i,dataCollections:c,yFlipped:u,yLogarithmic:f,minYValue:p,yStepSize:h=0}=e,x=[],m=(0,n.useRef)(null);return t&&t.length>0&&x.push({id:r,label:r,backgroundColor:l,borderColor:l,borderWidth:3,data:createGraphDataset(t)}),c.forEach(e=>{x.push({id:e.name,label:e.name,data:createGraphDataset(e.data),backgroundColor:e.color,borderColor:e.color,borderWidth:3,pointStyle:e.pointStyle||"circle",radius:e.pointRadius||1})}),(0,a.jsxs)("div",{className:"line-chart-container",children:[(0,a.jsx)(o.x1,{ref:m,data:{datasets:x},options:{responsive:!0,clip:!1,scales:{y:{type:f?"logarithmic":"linear",reverse:u,min:p,ticks:{stepSize:h},title:{display:!0,text:i}}}},height:"70vh"}),(0,a.jsx)(d.default,{size:"small",onClick:()=>{if(m.current){let e=document.createElement("a");e.download="chart.png",e.href=m.current.canvas.toDataURL(),e.click()}},type:"ghost",icon:(0,a.jsx)(s.default,{}),className:"download-btn"})]})};Chart.defaultProps={dataCollections:[],data:[],title:"",yFlipped:!1,yLogarithmic:!1}},22607:function(e,t,r){"use strict";r.d(t,{m:function(){return StatisticItem}});var a=r(85893),l=r(53740),n=r(26289),s=r(70302),i=r(74806);let{Text:o}=l.default,d={title:"",value:0,prefix:null,suffix:null,color:"",progress:!1,centered:!1,formatter:null},Content=e=>{let{prefix:t,value:r,suffix:l,title:n}=e;return(0,a.jsxs)("div",{children:[t,(0,a.jsx)("div",{children:(0,a.jsx)(o,{type:"secondary",children:n})}),(0,a.jsx)("div",{children:(0,a.jsxs)(o,{type:"secondary",children:[r,l||"%"]})})]})},ProgressView=e=>{let{title:t,value:r,prefix:l,suffix:n,color:s}=e,o=(0,a.jsx)(Content,{prefix:l,value:r,suffix:n,title:t});return(0,a.jsx)(i.default,{type:"dashboard",percent:r,width:120,strokeColor:{"0%":s,"90%":r>90?"red":s},format:()=>o})};ProgressView.defaultProps=d;let StatisticView=e=>{let{title:t,value:r,prefix:l,formatter:s}=e;return(0,a.jsx)(n.Z,{title:t,value:r,prefix:l,formatter:s})};StatisticView.defaultProps=d;let StatisticItem=e=>{let{progress:t,centered:r}=e,l=t?ProgressView:StatisticView;return(0,a.jsx)(s.default,{type:"inner",children:(0,a.jsx)("div",{style:r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},children:(0,a.jsx)(l,{...e})})})};StatisticItem.defaultProps=d},2574:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return HardwareInfo}});var a=r(85893),l=r(55673),n=r(5789),s=r(53740),i=r(4863),o=r(89552),d=r(67294),c=r(5152),u=r.n(c),f=r(3111),p=r(41600),h=r(22607),x=r(90695);let m=u()(()=>r.e(8695).then(r.t.bind(r,18695,23)),{loadableGenerated:{webpack:()=>[18695]},ssr:!1}),j=u()(()=>r.e(7061).then(r.t.bind(r,77061,23)),{loadableGenerated:{webpack:()=>[77061]},ssr:!1}),y=u()(()=>r.e(9790).then(r.t.bind(r,79790,23)),{loadableGenerated:{webpack:()=>[79790]},ssr:!1});function HardwareInfo(){var e,t,r;let[c,u]=(0,d.useState)({cpu:[],memory:[],disk:[],message:""}),getHardwareStatus=async()=>{try{let e=await (0,f.rQ)(f.nx);u({...e})}catch(e){u({...c,message:e.message})}};if((0,d.useEffect)(()=>{let e=null;return getHardwareStatus(),e=setInterval(getHardwareStatus,f.NE),()=>{clearInterval(e)}},[]),!c.cpu)return(0,a.jsxs)("div",{children:[(0,a.jsx)(s.default.Title,{children:"Hardware Info"}),(0,a.jsx)(i.default,{style:{marginTop:"10px"},banner:!0,message:"Please wait",description:"No hardware details have been collected yet.",type:"info"}),(0,a.jsx)(o.default,{spinning:!0,style:{width:"100%",margin:"10px"}})]});let x=null===(e=c.cpu[c.cpu.length-1])||void 0===e?void 0:e.value,g=null===(t=c.memory[c.memory.length-1])||void 0===t?void 0:t.value,v=null===(r=c.disk[c.disk.length-1])||void 0===r?void 0:r.value,w=[{name:"CPU",color:"#B63FFF",data:c.cpu,pointStyle:"rect"},{name:"Memory",color:"#2087E2",data:c.memory,pointStyle:"circle"},{name:"Disk",color:"#FF7700",data:c.disk,pointStyle:"rectRounded"}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.default.Title,{children:"Hardware Info"}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(l.Z,{gutter:[16,16],justify:"space-around",children:[(0,a.jsx)(n.Z,{children:(0,a.jsx)(h.m,{title:w[0].name,value:Math.round(x)||0,prefix:(0,a.jsx)(j,{style:{color:w[0].color}}),color:w[0].color,progress:!0,centered:!0})}),(0,a.jsx)(n.Z,{children:(0,a.jsx)(h.m,{title:w[1].name,value:Math.round(g)||0,prefix:(0,a.jsx)(m,{style:{color:w[1].color}}),color:w[1].color,progress:!0,centered:!0})}),(0,a.jsx)(n.Z,{children:(0,a.jsx)(h.m,{title:w[2].name,value:Math.round(v)||0,prefix:(0,a.jsx)(y,{style:{color:w[2].color}}),color:w[2].color,progress:!0,centered:!0})})]}),(0,a.jsx)(p.k,{title:"% used",dataCollections:w,color:"#FF7700",unit:"%"})]})]})}HardwareInfo.getLayout=function(e){return(0,a.jsx)(x.l,{page:e})}}},function(e){e.O(0,[2196,5596,1130,4104,9403,1024,3942,971,6697,1664,1749,1700,2122,3068,8091,6300,8531,5283,8187,695,9774,2888,179],function(){return e(e.s=99096)}),_N_E=e.O()}]);