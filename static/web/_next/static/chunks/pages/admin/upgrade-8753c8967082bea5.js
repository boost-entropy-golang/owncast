(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9262],{70918:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/upgrade",function(){return a(7494)}])},7494:function(e,t,a){"use strict";a.r(t);var n=a(85893),s=a(67294),l=a(56365),r=a(2307),d=a(53740),u=a(92863),i=a(15578);let{Title:o}=d.default,AssetTable=e=>{let t=Object.values(e);return(0,n.jsx)(r.Z,{dataSource:t,columns:[{title:"Name",dataIndex:"name",key:"name",render:(e,t)=>(0,n.jsx)("a",{href:t.browser_download_url,children:e})},{title:"Size",dataIndex:"size",key:"size",render:e=>"".concat((e/1024/1024).toFixed(2)," MB")}],rowKey:e=>e.id,size:"large",pagination:!1})},Logs=()=>{let[e,t]=(0,s.useState)({html_url:"",name:"",created_at:null,body:"",assets:[]}),getRelease=async()=>{try{let e=await (0,u.Kt)();t(e)}catch(e){console.log("==== error",e)}};return((0,s.useEffect)(()=>{getRelease()},[]),e)?(0,n.jsxs)("div",{className:"upgrade-page",children:[(0,n.jsx)(o,{level:2,children:(0,n.jsx)("a",{href:e.html_url,children:e.name})}),(0,n.jsx)(o,{level:5,children:new Date(e.created_at).toDateString()}),(0,n.jsx)(l.U,{children:e.body}),(0,n.jsx)("h3",{children:"Downloads"}),(0,n.jsx)(AssetTable,{...e.assets})]}):null};Logs.getLayout=function(e){return(0,n.jsx)(i.l,{page:e})},t.default=Logs}},function(e){e.O(0,[5596,1130,4104,9403,1024,3942,971,6697,1664,1749,1700,2122,7752,5891,2891,4749,6627,8966,8410,5578,9774,2888,179],function(){return e(e.s=70918)}),_N_E=e.O()}]);