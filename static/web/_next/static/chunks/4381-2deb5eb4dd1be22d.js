"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4381],{84381:function(e,t,n){n.d(t,{Z:function(){return er}});var a=n(4942),r=n(87462),o=n(97937),c=n(89705),i=n(1413),l=n(67294),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},s=n(42135),f=function(e,t){return l.createElement(s.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:u}))};f.displayName="PlusOutlined";var d=l.forwardRef(f),v=n(94184),m=n.n(v),b=n(97685),p=n(71002),h=n(45987),y=n(31131),Z=n(21770),g=n(62874),E=(0,l.createContext)(null),k=l.forwardRef(function(e,t){var n=e.prefixCls,a=e.className,r=e.style,o=e.id,c=e.active,i=e.tabKey,u=e.children;return l.createElement("div",{id:o&&"".concat(o,"-panel-").concat(i),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(i),"aria-hidden":!c,style:r,className:m()(n,c&&"".concat(n,"-active"),a),ref:t},u)}),x=["key","forceRender","style","className"];function C(e){var t=e.id,n=e.activeKey,o=e.animated,c=e.tabPosition,u=e.destroyInactiveTabPane,s=l.useContext(E),f=s.prefixCls,d=s.tabs,v=o.tabPane,b="".concat(f,"-tabpane");return l.createElement("div",{className:m()("".concat(f,"-content-holder"))},l.createElement("div",{className:m()("".concat(f,"-content"),"".concat(f,"-content-").concat(c),(0,a.Z)({},"".concat(f,"-content-animated"),v))},d.map(function(e){var a=e.key,c=e.forceRender,s=e.style,f=e.className,d=(0,h.Z)(e,x),p=a===n;return l.createElement(g.Z,(0,r.Z)({key:a,visible:p,forceRender:c,removeOnLeave:!!u,leavedClassName:"".concat(b,"-hidden")},o.tabPaneMotion),function(e,n){var o=e.style,c=e.className;return l.createElement(k,(0,r.Z)({},d,{prefixCls:b,id:t,tabKey:a,animated:v,active:p,style:(0,i.Z)((0,i.Z)({},s),o),className:m()(f,c),ref:n}))})})))}var w=n(74902),P=n(75164),N=n(42550),R=n(48555);function T(e){var t=(0,l.useRef)(),n=(0,l.useRef)(!1);return(0,l.useEffect)(function(){return n.current=!1,function(){n.current=!0,P.Z.cancel(t.current)}},[]),function(){for(var a=arguments.length,r=Array(a),o=0;o<a;o++)r[o]=arguments[o];n.current||(P.Z.cancel(t.current),t.current=(0,P.Z)(function(){e.apply(void 0,r)}))}}var I=n(15105),S=l.forwardRef(function(e,t){var n,r=e.prefixCls,o=e.id,c=e.active,i=e.tab,u=i.key,s=i.label,f=i.disabled,d=i.closeIcon,v=e.closable,b=e.renderWrapper,p=e.removeAriaLabel,h=e.editable,y=e.onClick,Z=e.onRemove,g=e.onFocus,E=e.style,k="".concat(r,"-tab");l.useEffect(function(){return Z},[]);var x=h&&!1!==v&&!f;function C(e){f||y(e)}var w=l.createElement("div",{key:u,ref:t,className:m()(k,(n={},(0,a.Z)(n,"".concat(k,"-with-remove"),x),(0,a.Z)(n,"".concat(k,"-active"),c),(0,a.Z)(n,"".concat(k,"-disabled"),f),n)),style:E,onClick:C},l.createElement("div",{role:"tab","aria-selected":c,id:o&&"".concat(o,"-tab-").concat(u),className:"".concat(k,"-btn"),"aria-controls":o&&"".concat(o,"-panel-").concat(u),"aria-disabled":f,tabIndex:f?null:0,onClick:function(e){e.stopPropagation(),C(e)},onKeyDown:function(e){[I.Z.SPACE,I.Z.ENTER].includes(e.which)&&(e.preventDefault(),C(e))},onFocus:g},s),x&&l.createElement("button",{type:"button","aria-label":p||"remove",tabIndex:0,className:"".concat(k,"-remove"),onClick:function(e){e.stopPropagation(),e.preventDefault(),e.stopPropagation(),h.onEdit("remove",{key:u,event:e})}},d||h.removeIcon||"\xd7"));return b?b(w):w}),M={width:0,height:0,left:0,top:0},B={width:0,height:0,left:0,top:0,right:0},O=n(97868),L=n(60057),A=l.forwardRef(function(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,o=e.style;return a&&!1!==a.showAdd?l.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null==r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}),D=l.memo(l.forwardRef(function(e,t){var n=e.prefixCls,r=e.id,o=e.tabs,c=e.locale,i=e.mobile,u=e.moreIcon,s=e.moreTransitionName,f=e.style,d=e.className,v=e.editable,p=e.tabBarGutter,h=e.rtl,y=e.removeAriaLabel,Z=e.onTabClick,g=e.getPopupContainer,E=e.popupClassName,k=(0,l.useState)(!1),x=(0,b.Z)(k,2),C=x[0],w=x[1],P=(0,l.useState)(null),N=(0,b.Z)(P,2),R=N[0],T=N[1],S="".concat(r,"-more-popup"),M="".concat(n,"-dropdown"),B=null!==R?"".concat(S,"-").concat(R):null,D=null==c?void 0:c.dropdownAriaLabel,j=l.createElement(O.ZP,{onClick:function(e){Z(e.key,e.domEvent),w(!1)},prefixCls:"".concat(M,"-menu"),id:S,tabIndex:-1,role:"listbox","aria-activedescendant":B,selectedKeys:[R],"aria-label":void 0!==D?D:"expanded dropdown"},o.map(function(e){var t=v&&!1!==e.closable&&!e.disabled;return l.createElement(O.sN,{key:e.key,id:"".concat(S,"-").concat(e.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(e.key),disabled:e.disabled},l.createElement("span",null,e.label),t&&l.createElement("button",{type:"button","aria-label":y||"remove",tabIndex:0,className:"".concat(M,"-menu-item-remove"),onClick:function(t){var n;t.stopPropagation(),n=e.key,t.preventDefault(),t.stopPropagation(),v.onEdit("remove",{key:n,event:t})}},e.closeIcon||v.removeIcon||"\xd7"))}));function K(e){for(var t=o.filter(function(e){return!e.disabled}),n=t.findIndex(function(e){return e.key===R})||0,a=t.length,r=0;r<a;r+=1){var c=t[n=(n+e+a)%a];if(!c.disabled){T(c.key);return}}}(0,l.useEffect)(function(){var e=document.getElementById(B);e&&e.scrollIntoView&&e.scrollIntoView(!1)},[R]),(0,l.useEffect)(function(){C||T(null)},[C]);var q=(0,a.Z)({},h?"marginRight":"marginLeft",p);o.length||(q.visibility="hidden",q.order=1);var W=m()((0,a.Z)({},"".concat(M,"-rtl"),h)),_=i?null:l.createElement(L.Z,{prefixCls:M,overlay:j,trigger:["hover"],visible:!!o.length&&C,transitionName:s,onVisibleChange:w,overlayClassName:m()(W,E),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:g},l.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:q,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":S,id:"".concat(r,"-more"),"aria-expanded":C,onKeyDown:function(e){var t=e.which;if(!C){[I.Z.DOWN,I.Z.SPACE,I.Z.ENTER].includes(t)&&(w(!0),e.preventDefault());return}switch(t){case I.Z.UP:K(-1),e.preventDefault();break;case I.Z.DOWN:K(1),e.preventDefault();break;case I.Z.ESC:w(!1);break;case I.Z.SPACE:case I.Z.ENTER:null!==R&&Z(R,e)}}},void 0===u?"More":u));return l.createElement("div",{className:m()("".concat(n,"-nav-operations"),d),style:f,ref:t},_,l.createElement(A,{prefixCls:n,locale:c,editable:v}))}),function(e,t){return t.tabMoving});function j(e,t){var n=l.useRef(e),a=l.useState({}),r=(0,b.Z)(a,2)[1];return[n.current,function(e){var a="function"==typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}function K(e){var t;return e instanceof Map?(t={},e.forEach(function(e,n){t[n]=e})):t=e,JSON.stringify(t)}var q=l.forwardRef(function(e,t){var n,a=e.position,r=e.prefixCls,o=e.extra;if(!o)return null;var c={};return"object"!==(0,p.Z)(o)||l.isValidElement(o)?c.right=o:c=o,"right"===a&&(n=c.right),"left"===a&&(n=c.left),n?l.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},n):null}),W=function(e){var t=e.current||{},n=t.offsetWidth,a=t.offsetHeight;return[void 0===n?0:n,void 0===a?0:a]},_=function(e,t){return e[t?0:1]},V=l.forwardRef(function(e,t){var n,o,c,u,s,f,d,v,p,h,y,Z,g,k,x,C,I,O,L,V,z,G,F,H,X,Y,J,U,Q,$,ee,et,en,ea,er,eo,ec,ei,el,eu,es,ef=l.useContext(E),ed=ef.prefixCls,ev=ef.tabs,em=e.className,eb=e.style,ep=e.id,eh=e.animated,ey=e.activeKey,eZ=e.rtl,eg=e.extra,eE=e.editable,ek=e.locale,ex=e.tabPosition,eC=e.tabBarGutter,ew=e.children,eP=e.onTabClick,eN=e.onTabScroll,eR=(0,l.useRef)(),eT=(0,l.useRef)(),eI=(0,l.useRef)(),eS=(0,l.useRef)(),eM=(0,l.useRef)(),eB=(0,l.useRef)(),eO=(0,l.useRef)(),eL=(n=(0,l.useRef)(new Map),[function(e){return n.current.has(e)||n.current.set(e,l.createRef()),n.current.get(e)},function(e){n.current.delete(e)}]),eA=(0,b.Z)(eL,2),eD=eA[0],ej=eA[1],eK="top"===ex||"bottom"===ex,eq=j(0,function(e,t){eK&&eN&&eN({direction:e>t?"left":"right"})}),eW=(0,b.Z)(eq,2),e_=eW[0],eV=eW[1],ez=j(0,function(e,t){!eK&&eN&&eN({direction:e>t?"top":"bottom"})}),eG=(0,b.Z)(ez,2),eF=eG[0],eH=eG[1],eX=(0,l.useState)([0,0]),eY=(0,b.Z)(eX,2),eJ=eY[0],eU=eY[1],eQ=(0,l.useState)([0,0]),e$=(0,b.Z)(eQ,2),e0=e$[0],e1=e$[1],e8=(0,l.useState)([0,0]),e2=(0,b.Z)(e8,2),e4=e2[0],e7=e2[1],e6=(0,l.useState)([0,0]),e5=(0,b.Z)(e6,2),e9=e5[0],e3=e5[1],te=(o=new Map,c=(0,l.useRef)([]),u=(0,l.useState)({}),s=(0,b.Z)(u,2)[1],f=(0,l.useRef)("function"==typeof o?o():o),d=T(function(){var e=f.current;c.current.forEach(function(t){e=t(e)}),c.current=[],f.current=e,s({})}),[f.current,function(e){c.current.push(e),d()}]),tt=(0,b.Z)(te,2),tn=tt[0],ta=tt[1],tr=(v=e0[0],(0,l.useMemo)(function(){for(var e=new Map,t=tn.get(null===(r=ev[0])||void 0===r?void 0:r.key)||M,n=t.left+t.width,a=0;a<ev.length;a+=1){var r,o,c=ev[a].key,l=tn.get(c);l||(l=tn.get(null===(o=ev[a-1])||void 0===o?void 0:o.key)||M);var u=e.get(c)||(0,i.Z)({},l);u.right=n-u.left-u.width,e.set(c,u)}return e},[ev.map(function(e){return e.key}).join("_"),tn,v])),to=_(eJ,eK),tc=_(e0,eK),ti=_(e4,eK),tl=_(e9,eK),tu=to<tc+ti?to-tl:to-ti,ts=0,tf=0;function td(e){return e<ts?ts:e>tf?tf:e}eK&&eZ?(ts=0,tf=Math.max(0,tc-tu)):(ts=Math.min(0,tu-tc),tf=0);var tv=(0,l.useRef)(),tm=(0,l.useState)(),tb=(0,b.Z)(tm,2),tp=tb[0],th=tb[1];function ty(){th(Date.now())}function tZ(){window.clearTimeout(tv.current)}p=function(e,t){function n(e,t){e(function(e){return td(e+t)})}return!(to>=tc)&&(eK?n(eV,e):n(eH,t),tZ(),ty(),!0)},h=(0,l.useState)(),Z=(y=(0,b.Z)(h,2))[0],g=y[1],k=(0,l.useState)(0),C=(x=(0,b.Z)(k,2))[0],I=x[1],O=(0,l.useState)(0),V=(L=(0,b.Z)(O,2))[0],z=L[1],G=(0,l.useState)(),H=(F=(0,b.Z)(G,2))[0],X=F[1],Y=(0,l.useRef)(),J=(0,l.useRef)(),(U=(0,l.useRef)(null)).current={onTouchStart:function(e){var t=e.touches[0];g({x:t.screenX,y:t.screenY}),window.clearInterval(Y.current)},onTouchMove:function(e){if(Z){e.preventDefault();var t=e.touches[0],n=t.screenX,a=t.screenY;g({x:n,y:a});var r=n-Z.x,o=a-Z.y;p(r,o);var c=Date.now();I(c),z(c-C),X({x:r,y:o})}},onTouchEnd:function(){if(Z&&(g(null),X(null),H)){var e=H.x/V,t=H.y/V;if(!(.1>Math.max(Math.abs(e),Math.abs(t)))){var n=e,a=t;Y.current=window.setInterval(function(){if(.01>Math.abs(n)&&.01>Math.abs(a)){window.clearInterval(Y.current);return}p(20*(n*=.9046104802746175),20*(a*=.9046104802746175))},20)}}},onWheel:function(e){var t=e.deltaX,n=e.deltaY,a=0,r=Math.abs(t),o=Math.abs(n);r===o?a="x"===J.current?t:n:r>o?(a=t,J.current="x"):(a=n,J.current="y"),p(-a,-a)&&e.preventDefault()}},l.useEffect(function(){function e(e){U.current.onTouchMove(e)}function t(e){U.current.onTouchEnd(e)}return document.addEventListener("touchmove",e,{passive:!1}),document.addEventListener("touchend",t,{passive:!1}),eS.current.addEventListener("touchstart",function(e){U.current.onTouchStart(e)},{passive:!1}),eS.current.addEventListener("wheel",function(e){U.current.onWheel(e)}),function(){document.removeEventListener("touchmove",e),document.removeEventListener("touchend",t)}},[]),(0,l.useEffect)(function(){return tZ(),tp&&(tv.current=window.setTimeout(function(){th(0)},100)),tZ},[tp]);var tg=(Q=eK?e_:eF,ea=($=(0,i.Z)((0,i.Z)({},e),{},{tabs:ev})).tabs,er=$.tabPosition,eo=$.rtl,["top","bottom"].includes(er)?(ee="width",et=eo?"right":"left",en=Math.abs(Q)):(ee="height",et="top",en=-Q),(0,l.useMemo)(function(){if(!ea.length)return[0,0];for(var e=ea.length,t=e,n=0;n<e;n+=1){var a=tr.get(ea[n].key)||B;if(a[et]+a[ee]>en+tu){t=n-1;break}}for(var r=0,o=e-1;o>=0;o-=1)if((tr.get(ea[o].key)||B)[et]<en){r=o+1;break}return[r,t]},[tr,tu,tc,ti,tl,en,er,ea.map(function(e){return e.key}).join("_"),eo])),tE=(0,b.Z)(tg,2),tk=tE[0],tx=tE[1],tC=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ey,t=tr.get(e)||{width:0,height:0,left:0,right:0,top:0};if(eK){var n=e_;eZ?t.right<e_?n=t.right:t.right+t.width>e_+tu&&(n=t.right+t.width-tu):t.left<-e_?n=-t.left:t.left+t.width>-e_+tu&&(n=-(t.left+t.width-tu)),eH(0),eV(td(n))}else{var a=eF;t.top<-eF?a=-t.top:t.top+t.height>-eF+tu&&(a=-(t.top+t.height-tu)),eV(0),eH(td(a))}},tw={};"top"===ex||"bottom"===ex?tw[eZ?"marginRight":"marginLeft"]=eC:tw.marginTop=eC;var tP=ev.map(function(e,t){var n=e.key;return l.createElement(S,{id:ep,prefixCls:ed,key:n,tab:e,style:0===t?void 0:tw,closable:e.closable,editable:eE,active:n===ey,renderWrapper:ew,removeAriaLabel:null==ek?void 0:ek.removeAriaLabel,ref:eD(n),onClick:function(e){eP(n,e)},onRemove:function(){ej(n)},onFocus:function(){tC(n),ty(),eS.current&&(eZ||(eS.current.scrollLeft=0),eS.current.scrollTop=0)}})}),tN=T(function(){var e=W(eR),t=W(eT),n=W(eI);eU([e[0]-t[0]-n[0],e[1]-t[1]-n[1]]);var a=W(eO);e7(a),e3(W(eB));var r=W(eM);e1([r[0]-a[0],r[1]-a[1]]),ta(function(){var e=new Map;return ev.forEach(function(t){var n=t.key,a=eD(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})}),e})}),tR=ev.slice(0,tk),tT=ev.slice(tx+1),tI=[].concat((0,w.Z)(tR),(0,w.Z)(tT)),tS=(0,l.useState)(),tM=(0,b.Z)(tS,2),tB=tM[0],tO=tM[1],tL=tr.get(ey),tA=(0,l.useRef)();function tD(){P.Z.cancel(tA.current)}(0,l.useEffect)(function(){var e={};return tL&&(eK?(eZ?e.right=tL.right:e.left=tL.left,e.width=tL.width):(e.top=tL.top,e.height=tL.height)),tD(),tA.current=(0,P.Z)(function(){tO(e)}),tD},[tL,eK,eZ]),(0,l.useEffect)(function(){tC()},[ey,K(tL),K(tr),eK]),(0,l.useEffect)(function(){tN()},[eZ]);var tj=!!tI.length,tK="".concat(ed,"-nav-wrap");return eK?eZ?(el=e_>0,ei=e_+to<tc):(ei=e_<0,el=-e_+to<tc):(eu=eF<0,es=-eF+to<tc),l.createElement(R.default,{onResize:tN},l.createElement("div",{ref:(0,N.x1)(t,eR),role:"tablist",className:m()("".concat(ed,"-nav"),em),style:eb,onKeyDown:function(){ty()}},l.createElement(q,{ref:eT,position:"left",extra:eg,prefixCls:ed}),l.createElement("div",{className:m()(tK,(ec={},(0,a.Z)(ec,"".concat(tK,"-ping-left"),ei),(0,a.Z)(ec,"".concat(tK,"-ping-right"),el),(0,a.Z)(ec,"".concat(tK,"-ping-top"),eu),(0,a.Z)(ec,"".concat(tK,"-ping-bottom"),es),ec)),ref:eS},l.createElement(R.default,{onResize:tN},l.createElement("div",{ref:eM,className:"".concat(ed,"-nav-list"),style:{transform:"translate(".concat(e_,"px, ").concat(eF,"px)"),transition:tp?"none":void 0}},tP,l.createElement(A,{ref:eO,prefixCls:ed,locale:ek,editable:eE,style:(0,i.Z)((0,i.Z)({},0===tP.length?void 0:tw),{},{visibility:tj?"hidden":null})}),l.createElement("div",{className:m()("".concat(ed,"-ink-bar"),(0,a.Z)({},"".concat(ed,"-ink-bar-animated"),eh.inkBar)),style:tB})))),l.createElement(D,(0,r.Z)({},e,{removeAriaLabel:null==ek?void 0:ek.removeAriaLabel,ref:eB,prefixCls:ed,tabs:tI,className:!tj&&"".concat(ed,"-nav-operations-hidden"),tabMoving:!!tp})),l.createElement(q,{ref:eI,position:"right",extra:eg,prefixCls:ed})))}),z=["renderTabBar"],G=["label","key"];function F(e){var t=e.renderTabBar,n=(0,h.Z)(e,z),a=(0,l.useContext)(E).tabs;return t?t((0,i.Z)((0,i.Z)({},n),{},{panes:a.map(function(e){var t=e.label,n=e.key,a=(0,h.Z)(e,G);return l.createElement(k,(0,r.Z)({tab:t,key:n,tabKey:n},a))})}),V):l.createElement(V,n)}n(80334);var H=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],X=0,Y=l.forwardRef(function(e,t){var n,o,c=e.id,u=e.prefixCls,s=void 0===u?"rc-tabs":u,f=e.className,d=e.items,v=e.direction,g=e.activeKey,k=e.defaultActiveKey,x=e.editable,w=e.animated,P=e.tabPosition,N=void 0===P?"top":P,R=e.tabBarGutter,T=e.tabBarStyle,I=e.tabBarExtraContent,S=e.locale,M=e.moreIcon,B=e.moreTransitionName,O=e.destroyInactiveTabPane,L=e.renderTabBar,A=e.onChange,D=e.onTabClick,j=e.onTabScroll,K=e.getPopupContainer,q=e.popupClassName,W=(0,h.Z)(e,H),_=l.useMemo(function(){return(d||[]).filter(function(e){return e&&"object"===(0,p.Z)(e)&&"key"in e})},[d]),V="rtl"===v,z=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:(0,i.Z)({inkBar:!0},"object"===(0,p.Z)(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(w),G=(0,l.useState)(!1),Y=(0,b.Z)(G,2),J=Y[0],U=Y[1];(0,l.useEffect)(function(){U((0,y.Z)())},[]);var Q=(0,Z.Z)(function(){var e;return null===(e=_[0])||void 0===e?void 0:e.key},{value:g,defaultValue:k}),$=(0,b.Z)(Q,2),ee=$[0],et=$[1],en=(0,l.useState)(function(){return _.findIndex(function(e){return e.key===ee})}),ea=(0,b.Z)(en,2),er=ea[0],eo=ea[1];(0,l.useEffect)(function(){var e,t=_.findIndex(function(e){return e.key===ee});-1===t&&(t=Math.max(0,Math.min(er,_.length-1)),et(null===(e=_[t])||void 0===e?void 0:e.key)),eo(t)},[_.map(function(e){return e.key}).join("_"),ee,er]);var ec=(0,Z.Z)(null,{value:c}),ei=(0,b.Z)(ec,2),el=ei[0],eu=ei[1];(0,l.useEffect)(function(){c||(eu("rc-tabs-".concat(X)),X+=1)},[]);var es={id:el,activeKey:ee,animated:z,tabPosition:N,rtl:V,mobile:J},ef=(0,i.Z)((0,i.Z)({},es),{},{editable:x,locale:S,moreIcon:M,moreTransitionName:B,tabBarGutter:R,onTabClick:function(e,t){null==D||D(e,t),et(e),e!==ee&&(null==A||A(e))},onTabScroll:j,extra:I,style:T,panes:null,getPopupContainer:K,popupClassName:q});return l.createElement(E.Provider,{value:{tabs:_,prefixCls:s}},l.createElement("div",(0,r.Z)({ref:t,id:c,className:m()(s,"".concat(s,"-").concat(N),(n={},(0,a.Z)(n,"".concat(s,"-mobile"),J),(0,a.Z)(n,"".concat(s,"-editable"),x),(0,a.Z)(n,"".concat(s,"-rtl"),V),n),f)},W),o,l.createElement(F,(0,r.Z)({},ef,{renderTabBar:L})),l.createElement(C,(0,r.Z)({destroyInactiveTabPane:O},es,{animated:z}))))}),J=n(53124),U=n(97647),Q=n(33603),$={motionAppear:!1,motionEnter:!0,motionLeave:!0},ee=n(50344),et=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},en=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};function ea(e){var t,n=e.type,i=e.className,u=e.size,s=e.onEdit,f=e.hideAdd,v=e.centered,b=e.addIcon,h=e.children,y=e.items,Z=e.animated,g=en(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),E=g.prefixCls,k=g.moreIcon,x=void 0===k?l.createElement(c.Z,null):k,C=l.useContext(J.E_),w=C.getPrefixCls,P=C.direction,N=C.getPopupContainer,R=w("tabs",E);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,a=t.event;null==s||s("add"===e?a:n,e)},removeIcon:l.createElement(o.Z,null),addIcon:b||l.createElement(d,null),showAdd:!0!==f});var T=w(),I=y||(0,ee.Z)(h).map(function(e){if(l.isValidElement(e)){var t=e.key,n=e.props||{},a=n.tab,o=et(n,["tab"]);return(0,r.Z)((0,r.Z)({key:String(t)},o),{label:a})}return null}).filter(function(e){return e}),S=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:(0,r.Z)({inkBar:!0},"object"===(0,p.Z)(n)?n:{})).tabPane&&(t.tabPaneMotion=(0,r.Z)((0,r.Z)({},$),{motionName:(0,Q.mL)(e,"switch")})),t}(R,Z);return l.createElement(U.Z.Consumer,null,function(e){var o,c=void 0!==u?u:e;return l.createElement(Y,(0,r.Z)({direction:P,getPopupContainer:N,moreTransitionName:"".concat(T,"-slide-up")},g,{items:I,className:m()((o={},(0,a.Z)(o,"".concat(R,"-").concat(c),c),(0,a.Z)(o,"".concat(R,"-card"),["card","editable-card"].includes(n)),(0,a.Z)(o,"".concat(R,"-editable-card"),"editable-card"===n),(0,a.Z)(o,"".concat(R,"-centered"),v),o),i),editable:t,moreIcon:x,prefixCls:R,animated:S}))})}ea.TabPane=function(){return null};var er=ea}}]);