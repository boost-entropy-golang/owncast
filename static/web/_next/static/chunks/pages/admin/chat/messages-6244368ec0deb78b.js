(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7095],{62433:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/chat/messages",function(){return t(13963)}])},13963:function(e,s,t){"use strict";t.r(s),t.d(s,{OUTCOME_TIMEOUT:function(){return C},default:function(){return S}});var a=t(85893),l=t(67294),i=t(47271),n=t(90622),r=t(43796),d=t(93967),o=t.n(d),c=t(58091),u=t(5152),h=t.n(u),m=t(6925),p=t(9507),g=t(27189);let b=h()(()=>Promise.all([t.e(7298),t.e(9688)]).then(t.t.bind(t,89688,23)),{loadableGenerated:{webpack:()=>[89688]},ssr:!1}),w=h()(()=>Promise.all([t.e(7298),t.e(1008)]).then(t.t.bind(t,71008,23)),{loadableGenerated:{webpack:()=>[71008]},ssr:!1}),x=h()(()=>Promise.all([t.e(7298),t.e(4114)]).then(t.t.bind(t,44114,23)),{loadableGenerated:{webpack:()=>[44114]},ssr:!1}),y=h()(()=>Promise.all([t.e(7298),t.e(3801)]).then(t.t.bind(t,83801,23)),{loadableGenerated:{webpack:()=>[83801]},ssr:!1}),f=e=>{let{isVisible:s,message:t,setMessage:i}=e;if(!t||(0,p.Qr)(t))return null;let r=null,[d,o]=(0,l.useState)(0),{id:c}=t||{},u=()=>{r=setTimeout(()=>{o(0)},3e3)};(0,l.useEffect)(()=>()=>{clearTimeout(r)});let h=async()=>{clearTimeout(r),o(0);let e=await (0,m.rQ)(m.hn,{auth:!0,method:"POST",data:{visible:!s,idArray:[c]}});e.success&&"changed"===e.message?(i({...t,visible:!s}),o(1)):(i({...t,visible:s}),o(-1)),u()},f=(0,a.jsx)(x,{style:{color:"transparent"}});d&&(f=d>0?(0,a.jsx)(x,{style:{color:"var(--ant-success)"}}):(0,a.jsx)(y,{style:{color:"var(--ant-warning)"}}));let j="Click to ".concat(s?"hide":"show"," this message");return(0,a.jsxs)("div",{className:"toggle-switch ".concat(s?"":"hidden"),children:[(0,a.jsx)("span",{className:"outcome-icon",children:f}),(0,a.jsx)(g.Z,{title:j,placement:"topRight",children:(0,a.jsx)(n.Z,{shape:"circle",size:"small",type:"text",icon:s?(0,a.jsx)(b,{}):(0,a.jsx)(w,{}),onClick:h})})]})};var j=t(64096),N=t(695);let{Title:v}=i.default,k=h()(()=>Promise.all([t.e(7298),t.e(4114)]).then(t.t.bind(t,44114,23)),{loadableGenerated:{webpack:()=>[44114]},ssr:!1}),T=h()(()=>Promise.all([t.e(7298),t.e(3801)]).then(t.t.bind(t,83801,23)),{loadableGenerated:{webpack:()=>[83801]},ssr:!1}),C=3e3;function S(){let[e,s]=(0,l.useState)([]),[t,i]=(0,l.useState)([]),[d,u]=(0,l.useState)(!1),[h,g]=(0,l.useState)(null),[b,w]=(0,l.useState)(""),x=null,y=null,N=async()=>{try{let e=await (0,m.rQ)(m.WE,{auth:!0});(0,p.Qr)(e)?s([]):s(e)}catch(e){console.log("==== error",e)}};(0,l.useEffect)(()=>(N(),y=setInterval(()=>{N()},m.NE),()=>{clearTimeout(x),clearTimeout(y)}),[]);let S=e.reduce((e,s)=>{let t=s.user.id;return e.some(e=>e.text===t)||e.push({text:t,value:t}),e},[]).sort((e,s)=>{let t=e.text.toUpperCase(),a=s.text.toUpperCase();return t<a?-1:t>a?1:0}),_=t=>{let a=e.findIndex(e=>e.id===t.id);e.splice(a,1,t),s([...e])},P=()=>{x=setTimeout(()=>{g(null),w("")},C)},E=async l=>{u(!0);let n=await (0,m.rQ)(m.hn,{auth:!0,method:"POST",data:{visible:l,idArray:t}});if(n.success&&"changed"===n.message){g((0,a.jsx)(k,{})),P();let n=[...e];t.map(s=>{let t=n.findIndex(e=>e.id===s),a={...e[t],visible:l};return n.splice(t,1,a),null}),s(n),i([])}else g((0,a.jsx)(T,{})),P();u(!1)},I=[{title:"Time",dataIndex:"timestamp",key:"timestamp",className:"timestamp-col",defaultSortOrder:"descend",render:e=>{let s=new Date(e);return(0,c.Z)(s,"PP pp")},sorter:(e,s)=>new Date(e.timestamp).getTime()-new Date(s.timestamp).getTime(),width:90},{title:"User",dataIndex:"user",key:"user",className:"name-col",filters:S,onFilter:(e,s)=>s.user.id===e,sorter:(e,s)=>e.user.displayName.localeCompare(s.user.displayName),sortDirections:["ascend","descend"],ellipsis:!0,render:e=>{let{displayName:s}=e;return(0,a.jsx)(j.Z,{user:e,children:s})},width:110},{title:"Message",dataIndex:"body",key:"body",className:"message-col",width:320,render:e=>(0,a.jsx)("div",{className:"message-contents",dangerouslySetInnerHTML:{__html:e}})},{title:"",dataIndex:"hiddenAt",key:"hiddenAt",className:"toggle-col",filters:[{text:"Visible messages",value:!0},{text:"Hidden messages",value:!1}],onFilter:(e,s)=>s.visible===e,render:(e,s)=>(0,a.jsx)(f,{isVisible:!e,message:s,setMessage:_}),width:30}],O=o()({"bulk-editor":!0,active:t.length});return(0,a.jsxs)("div",{className:"chat-messages",children:[(0,a.jsx)(v,{children:"Chat Messages"}),(0,a.jsx)("p",{children:"Manage the messages from viewers that show up on your stream."}),(0,a.jsxs)("div",{className:O,children:[(0,a.jsx)("span",{className:"label",children:"Check multiple messages to change their visibility to: "}),(0,a.jsx)(n.Z,{type:"primary",size:"small",shape:"round",className:"button",loading:"show"===b&&d,icon:"show"===b&&h,disabled:!t.length||b&&"show"!==b,onClick:()=>{w("show"),E(!0)},children:"Show"}),(0,a.jsx)(n.Z,{type:"primary",size:"small",shape:"round",className:"button",loading:"hide"===b&&d,icon:"hide"===b&&h,disabled:!t.length||b&&"hide"!==b,onClick:()=>{w("hide"),E(!1)},children:"Hide"})]}),(0,a.jsx)(r.Z,{size:"small",className:"table-container",pagination:{defaultPageSize:100,showSizeChanger:!0},scroll:{y:540},rowClassName:e=>e.hiddenAt?"hidden":"",dataSource:e,columns:I,rowKey:e=>e.id,rowSelection:{selectedRowKeys:t,onChange:e=>{i(e)}}})]})}S.getLayout=function(e){return(0,a.jsx)(N.l,{page:e})}}},function(e){e.O(0,[6410,8768,5414,6906,7406,4716,2862,5063,7271,811,5386,9974,8625,3796,773,5938,695,9686,2888,9774,179],function(){return e(e.s=62433)}),_N_E=e.O()}]);