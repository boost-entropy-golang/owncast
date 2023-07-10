(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6801],{70502:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRenderPropValue=void 0,t.getRenderPropValue=function(e){return e?"function"==typeof e?e():e:null}},5789:function(e,t,a){"use strict";t.Z=void 0;var n=a(38614).Col;t.Z=n},39715:function(e,t,a){"use strict";var n=a(75263).default,r=a(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.Overlay=void 0;var o=r(a(10434)),l=n(a(67294)),i=r(a(65400)),s=a(41954),d=r(a(6459)),c=r(a(73625)),u=r(a(56350)),m=a(70502),f=a(31929);t.Overlay=function(e){var t=e.prefixCls,a=e.okButtonProps,n=e.cancelButtonProps,r=e.title,h=e.cancelText,v=e.okText,p=e.okType,g=e.icon,x=e.showCancel,y=void 0===x||x,b=e.close,j=e.onConfirm,N=e.onCancel,w=l.useContext(f.ConfigContext).getPrefixCls;return l.createElement(c.default,{componentName:"Popconfirm",defaultLocale:u.default.Popconfirm},function(e){return l.createElement("div",{className:"".concat(t,"-inner-content")},l.createElement("div",{className:"".concat(t,"-message")},g&&l.createElement("span",{className:"".concat(t,"-message-icon")},g),l.createElement("div",{className:"".concat(t,"-message-title")},(0,m.getRenderPropValue)(r))),l.createElement("div",{className:"".concat(t,"-buttons")},y&&l.createElement(i.default,(0,o.default)({onClick:N,size:"small"},n),null!=h?h:e.cancelText),l.createElement(d.default,{buttonProps:(0,o.default)((0,o.default)({size:"small"},(0,s.convertLegacyProps)(p)),a),actionFn:j,close:b,prefixCls:w("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!=v?v:e.okText)))})}},35297:function(e,t,a){"use strict";var n=a(64836).default,r=a(75263).default;t.Z=void 0;var o=n(a(10434)),l=n(a(27424)),i=n(a(42461)),s=n(a(94184)),d=n(a(60869)),c=n(a(27712)),u=r(a(67294)),m=a(31929),f=n(a(62443)),h=a(47419),v=a(39715),p=void 0,g=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},x=u.forwardRef(function(e,t){var a=e.prefixCls,n=e.placement,r=e.trigger,x=e.okType,y=e.icon,b=void 0===y?u.createElement(i.default,null):y,j=e.children,N=e.overlayClassName,w=e.onOpenChange,C=e.onVisibleChange,k=g(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),P=u.useContext(m.ConfigContext).getPrefixCls,E=(0,d.default)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),O=(0,l.default)(E,2),T=O[0],S=O[1],_=function(e,t){S(e,!0),null==C||C(e,t),null==w||w(e,t)},V=function(e){e.keyCode===c.default.ESC&&T&&_(!1,e)},I=P("popover",a),L=P("popconfirm",a),R=(0,s.default)(L,N);return u.createElement(f.default,(0,o.default)({},k,{trigger:void 0===r?"click":r,prefixCls:I,placement:void 0===n?"top":n,onOpenChange:function(t){var a=e.disabled;void 0!==a&&a||_(t)},open:T,ref:t,overlayClassName:R,_overlay:u.createElement(v.Overlay,(0,o.default)({okType:void 0===x?"primary":x,icon:b},e,{prefixCls:I,close:function(e){_(!1,e)},onConfirm:function(t){var a;return null===(a=e.onConfirm)||void 0===a?void 0:a.call(p,t)},onCancel:function(t){var a;_(!1,t),null===(a=e.onCancel)||void 0===a||a.call(p,t)}}))}),(0,h.cloneElement)(j,{onKeyDown:function(e){var t,a;u.isValidElement(j)&&(null===(a=null==j?void 0:(t=j.props).onKeyDown)||void 0===a||a.call(t,e)),V(e)}}))});t.Z=x},62443:function(e,t,a){"use strict";var n=a(75263).default,r=a(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(10434)),l=n(a(67294)),i=a(70502),s=a(53683),d=a(31929),c=r(a(94055)),u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},m=function(e){var t=e.title,a=e.content,n=e.prefixCls;return l.createElement(l.Fragment,null,t&&l.createElement("div",{className:"".concat(n,"-title")},(0,i.getRenderPropValue)(t)),l.createElement("div",{className:"".concat(n,"-inner-content")},(0,i.getRenderPropValue)(a)))},f=l.forwardRef(function(e,t){var a=e.prefixCls,n=e.title,r=e.content,i=e._overlay,f=e.placement,h=e.trigger,v=e.mouseEnterDelay,p=e.mouseLeaveDelay,g=e.overlayStyle,x=u(e,["prefixCls","title","content","_overlay","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),y=l.useContext(d.ConfigContext).getPrefixCls,b=y("popover",a),j=y(),N=l.useMemo(function(){return i||(n||r?l.createElement(m,{prefixCls:b,title:n,content:r}):null)},[i,n,r,b]);return l.createElement(c.default,(0,o.default)({placement:void 0===f?"top":f,trigger:void 0===h?"hover":h,mouseEnterDelay:void 0===v?.1:v,mouseLeaveDelay:void 0===p?.1:p,overlayStyle:void 0===g?{}:g},x,{prefixCls:b,ref:t,overlay:N,transitionName:(0,s.getTransitionName)(j,"zoom-big",x.transitionName)}))});t.default=f},55673:function(e,t,a){"use strict";t.Z=void 0;var n=a(38614).Row;t.Z=n},79873:function(e,t,a){"use strict";var n=a(75263).default,r=a(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(10434)),l=r(a(64543)),i=a(75531),s=n(a(67294)),d=r(a(94055)),c=s.forwardRef(function(e,t){var a=e.open,n=(0,s.useRef)(null),r=(0,s.useRef)(null);function c(){l.default.cancel(r.current),r.current=null}return s.useEffect(function(){return a?r.current=(0,l.default)(function(){var e;null===(e=n.current)||void 0===e||e.forcePopupAlign(),r.current=null}):c(),c},[a,e.title]),s.createElement(d.default,(0,o.default)({ref:(0,i.composeRef)(n,t)},e))});t.default=c},36155:function(e,t,a){"use strict";var n=a(75263).default,r=a(64836).default;t.Z=void 0;var o=r(a(18698)),l=r(a(38416)),i=r(a(10434)),s=r(a(27424)),d=r(a(94184)),c=r(a(15560)),u=n(a(67294)),m=a(31929);r(a(13594));var f=r(a(79873)),h=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},v=u.forwardRef(function(e,t){var a=u.useContext(m.ConfigContext),n=a.getPrefixCls,r=a.direction,v=a.getPopupContainer,p=u.useState({}),g=(0,s.default)(p,2),x=g[0],y=g[1],b=function(e,t){y(function(a){return(0,i.default)((0,i.default)({},a),(0,l.default)({},e,t))})},j=e.prefixCls,N=e.range,w=e.className,C=h(e,["prefixCls","range","className"]),k=n("slider",j),P=(0,d.default)(w,(0,l.default)({},"".concat(k,"-rtl"),"rtl"===r));"rtl"!==r||C.vertical||(C.reverse=!C.reverse);var E=u.useMemo(function(){return N?"object"===(0,o.default)(N)?[!0,N.draggableTrack]:[!0,!1]:[!1]},[N]),O=(0,s.default)(E,2),T=O[0],S=O[1];return u.createElement(c.default,(0,i.default)({},C,{step:C.step,range:T,draggableTrack:S,className:P,ref:t,prefixCls:k,handleRender:function(t,a){var o,l=a.index,s=a.dragging,d=n(),c=e.tooltip,m=e.vertical,h=(0,i.default)({formatter:null!==(o=e.tipFormatter)&&void 0!==o?o:function(e){return"number"==typeof e?e.toString():""},open:e.tooltipVisible,placement:e.tooltipPlacement,getPopupContainer:e.getTooltipPopupContainer},void 0===c?{}:c),p=h.open,g=h.placement,y=h.getPopupContainer,j=h.prefixCls,N=h.formatter,w=!!N&&(x[l]||s),C=(0,i.default)((0,i.default)({},t.props),{onMouseEnter:function(){return b(l,!0)},onMouseLeave:function(){return b(l,!1)}}),P=n("tooltip",j);return u.createElement(f.default,{prefixCls:P,title:N?N(a.value):"",open:p||void 0===p&&w,placement:g||(m?"rtl"===r?"left":"right":"top"),transitionName:"".concat(d,"-zoom-down"),key:l,overlayClassName:"".concat(k,"-tooltip"),getPopupContainer:y||v},u.cloneElement(t,C))}}))});t.Z=v},6440:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-video",function(){return a(50246)}])},44716:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(85893),r=a(67294),o=a(40987),l=a(91332),i=a(57520),s=a(24044),d=a(38631);let c=e=>{let{apiPath:t,checked:a,reversed:c=!1,configPath:u="",disabled:m=!1,fieldName:f,label:h,tip:v,useSubmit:p,onChange:g}=e,[x,y]=(0,r.useState)(null),b=null,j=(0,r.useContext)(d.a),{setFieldInConfigState:N}=j||{},w=()=>{y(null),clearTimeout(b),b=null},C=async e=>{if(p){y((0,l.kg)(l.Jk));let a=c?!e:e;await (0,s.Si)({apiPath:t,data:{value:a},onSuccess:()=>{N({fieldName:f,value:a,path:u}),y((0,l.kg)(l.zv))},onError:e=>{y((0,l.kg)(l.Un,"There was an error: ".concat(e)))}}),b=setTimeout(w,s.sI)}g&&g(e)},k=null!==x&&x.type===l.Jk;return(0,n.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[h&&(0,n.jsx)("div",{className:"label-side",children:(0,n.jsx)("span",{className:"formfield-label",children:h})}),(0,n.jsxs)("div",{className:"input-side",children:[(0,n.jsxs)("div",{className:"input-group",children:[(0,n.jsx)(o.Z,{className:"switch field-".concat(f),loading:k,onChange:C,defaultChecked:a,checked:a,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:m}),(0,n.jsx)(i.E,{status:x})]}),(0,n.jsx)("p",{className:"field-tip",children:v})]})]})};c.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},50246:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return z}});var n=a(85893),r=a(5789),o=a(68469),l=a(55673),i=a(53740),s=a(67294),d=a(35297),c=a(64749),u=a(91762),m=a(24044),f=a(91332),h=a(38631),v=a(57520);let p=()=>{let e=(0,s.useContext)(h.a),{serverConfig:t,setFieldInConfigState:a}=e||{},{videoCodec:r,supportedCodecs:o}=t||{},{Title:l}=i.default,{Option:p}=c.default,[g,x]=(0,s.useState)(null),{setMessage:y}=(0,s.useContext)(u.k),[b,j]=(0,s.useState)(r),[N,w]=(0,s.useState)(r),[C,k]=s.useState(!1);(0,s.useEffect)(()=>{j(r)},[r]);let P=()=>{x(null),clearTimeout(null)};async function E(){j(N),w(""),k(!1),await (0,m.Si)({apiPath:m.CQ,data:{value:N},onSuccess:()=>{a({fieldName:"videoCodec",value:N,path:"videoSettings"}),x((0,f.kg)(f.zv,"Video codec updated.")),setTimeout(P,m.sI),e.online&&y("Your latency buffer setting will take effect the next time you begin a live stream.")},onError:e=>{x((0,f.kg)(f.Un,e)),setTimeout(P,m.sI)}})}let O=o.map(e=>{let t=e;return"libx264"===t?t="Default (libx264)":"h264_nvenc"===t?t="NVIDIA GPU acceleration":"h264_vaapi"===t?t="VA-API hardware encoding":"h264_qsv"===t?t="Intel QuickSync":"h264_v4l2m2m"===t?t="Video4Linux hardware encoding":"h264_omx"===t?t="OpenMax (omx) for Raspberry Pi":"h264_videotoolbox"===t&&(t="Apple VideoToolbox (hardware)"),(0,n.jsx)(p,{value:e,children:t},e)}),T="";return"libx264"===b?T="libx264 is the default codec and generally the only working choice for shared VPS environments. This is likely what you should be using unless you know you have set up other options.":"h264_nvenc"===b?T="You can use your NVIDIA GPU for encoding if you have a modern NVIDIA card with encoding cores.":"h264_vaapi"===b?T="VA-API may be supported by your NVIDIA proprietary drivers, Mesa open-source drivers for AMD or Intel graphics.":"h264_qsv"===b?T="Quick Sync Video is Intel's brand for its dedicated video encoding and decoding hardware. It may be an option if you have a modern Intel CPU with integrated graphics.":"h264_v4l2m2m"===b?T="Video4Linux is an interface to multiple different hardware encoding platforms such as Intel and AMD.":"h264_omx"===b?T="OpenMax is a codec most often used with a Raspberry Pi.":"h264_videotoolbox"===b&&(T="Apple VideoToolbox is a low-level framework that provides direct access to hardware encoders and decoders."),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{level:3,className:"section-title",children:"Video Codec"}),(0,n.jsxs)("div",{className:"description",children:["If you have access to specific hardware with the drivers and software installed for them, you may be able to improve your video encoding performance.",(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"https://owncast.online/docs/codecs?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Read the documentation about this setting before changing it or you may make your stream unplayable."})})]}),(0,n.jsxs)("div",{className:"segment-slider-container",children:[(0,n.jsx)(d.Z,{title:"Are you sure you want to change your video codec to ".concat(N," and understand what this means?"),open:C,placement:"leftBottom",onConfirm:E,onCancel:()=>k(!1),okText:"Yes",cancelText:"No",children:(0,n.jsx)(c.default,{defaultValue:b,value:b,style:{width:"100%"},onChange:function(e){w(e),k(!0)},children:O})}),(0,n.jsx)(v.E,{status:g}),(0,n.jsx)("p",{id:"selected-codec-note",className:"selected-value-note",children:T})]})]})};var g=a(36155);let{Title:x}=i.default,y={0:"Lowest",1:" ",2:" ",3:" ",4:"Highest"},b={0:"Lowest latency, lowest error tolerance (Not recommended, may not work for all content/configurations.)",1:"Low latency, low error tolerance",2:"Medium latency, medium error tolerance (Default)",3:"High latency, high error tolerance",4:"Highest latency, highest error tolerance"},j=()=>{let[e,t]=(0,s.useState)(null),[a,r]=(0,s.useState)(null),o=(0,s.useContext)(h.a),{setMessage:l}=(0,s.useContext)(u.k),{serverConfig:i,setFieldInConfigState:d}=o||{},{videoSettings:c}=i||{};if(!c)return null;(0,s.useEffect)(()=>{r(c.latencyLevel)},[c]);let p=()=>{t(null),clearTimeout(null)},j=async e=>{t((0,f.kg)(f.Jk)),await (0,m.Si)({apiPath:m.sv,data:{value:e},onSuccess:()=>{d({fieldName:"latencyLevel",value:e,path:"videoSettings"}),t((0,f.kg)(f.zv,"Latency buffer level updated.")),setTimeout(p,m.sI),o.online&&l("Your latency buffer setting will take effect the next time you begin a live stream.")},onError:e=>{t((0,f.kg)(f.Un,e)),setTimeout(p,m.sI)}})};return(0,n.jsxs)("div",{className:"config-video-latency-container",children:[(0,n.jsx)(x,{level:3,className:"section-title",children:"Latency Buffer"}),(0,n.jsx)("p",{className:"description",children:"While it's natural to want to keep your latency as low as possible, you may experience reduced error tolerance and stability the lower you go. The lowest setting is not recommended."}),(0,n.jsxs)("p",{className:"description",children:["For interactive live streams you may want to experiment with a lower latency, for non-interactive broadcasts you may want to increase it."," ",(0,n.jsx)("a",{href:"https://owncast.online/docs/encoding#latency-buffer?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Read to learn more."})]}),(0,n.jsxs)("div",{className:"segment-slider-container",children:[(0,n.jsx)(g.Z,{tipFormatter:e=>b[e],onChange:e=>{j(e)},min:0,max:4,marks:y,defaultValue:a,value:a}),(0,n.jsx)("p",{className:"selected-value-note",children:b[a]}),(0,n.jsx)(v.E,{status:e})]})]})};var N=a(2307),w=a(56697),C=a(65400),k=a(4863),P=a(5152),E=a.n(P),O=a(94184),T=a.n(O),S=a(67032),_=a(44716);let{Panel:V}=o.default,I=E()(()=>Promise.resolve().then(a.t.bind(a,42461,23)),{loadableGenerated:{webpack:()=>[42461]},ssr:!1}),L=e=>{let{dataState:t=m.gX,onUpdateField:a}=e,s=t.videoPassthrough,c=T()({"config-variant-form":!0,"video-passthrough-enabled":s});return(0,n.jsxs)("div",{className:c,children:[(0,n.jsx)("div",{className:"video-varient-alert",children:(0,n.jsx)(k.default,{type:"info",action:(0,n.jsx)("a",{href:"https://owncast.online/docs/video?source=admin",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)("div",{className:"video-varient-alert-button-container",children:(0,n.jsx)(C.default,{size:"small",type:"text",icon:(0,n.jsx)(I,{}),children:"Read more about how each of these settings can impact the performance of your server."})})})})}),s&&(0,n.jsxs)("p",{className:"passthrough-warning",children:["NOTE: Video Passthrough for this output stream variant is ",(0,n.jsx)("em",{children:"enabled"}),", disabling the below video encoding settings."]}),(0,n.jsxs)(l.Z,{gutter:16,children:[(0,n.jsx)(r.Z,{xs:24,lg:{span:24,pull:3},className:"video-text-field-container",children:(0,n.jsx)(S.nv,{maxLength:"10",...m.SS,value:t.name,onChange:e=>{a({fieldName:"name",value:e.value})}})}),(0,n.jsx)(r.Z,{sm:24,md:12,children:(0,n.jsxs)("div",{className:"form-module cpu-usage-container",children:[(0,n.jsx)(i.default.Title,{level:3,children:"CPU or GPU Utilization"}),(0,n.jsx)("p",{className:"description",children:"Reduce to improve server performance, or increase it to improve video quality."}),(0,n.jsxs)("div",{className:"segment-slider-container",children:[(0,n.jsx)(g.Z,{tipFormatter:e=>m.I$[e],onChange:e=>{a({fieldName:"cpuUsageLevel",value:e})},min:0,max:Object.keys(m.t$).length-1,marks:m.t$,defaultValue:t.cpuUsageLevel,value:t.cpuUsageLevel,disabled:t.videoPassthrough}),(0,n.jsx)("p",{className:"selected-value-note",children:s?"CPU usage selection is disabled when Video Passthrough is enabled.":m.I$[t.cpuUsageLevel]||""})]}),(0,n.jsxs)("p",{className:"read-more-subtext",children:["This could mean GPU or CPU usage depending on your server environment.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin#cpu-usage",target:"_blank",rel:"noopener noreferrer",children:"Read more about hardware performance."})]})]})}),(0,n.jsx)(r.Z,{sm:24,md:11,offset:1,children:(0,n.jsxs)("div",{className:"form-module bitrate-container ".concat(t.videoPassthrough?"disabled":""),children:[(0,n.jsx)(i.default.Title,{level:3,children:"Video Bitrate"}),(0,n.jsx)("p",{className:"description",children:m.yC.tip}),(0,n.jsxs)("div",{className:"segment-slider-container",children:[(0,n.jsx)(g.Z,{tipFormatter:e=>"".concat(e," ").concat(m.yC.unit),disabled:t.videoPassthrough,defaultValue:t.videoBitrate,value:t.videoBitrate,onChange:e=>{a({fieldName:"videoBitrate",value:e})},step:m.yC.incrementBy,min:m.yC.min,max:m.yC.max,marks:m.HM}),(0,n.jsx)("p",{className:"selected-value-note",children:(()=>{if(s)return"Bitrate selection is disabled when Video Passthrough is enabled.";let e="".concat(t.videoBitrate).concat(m.yC.unit);return t.videoBitrate<2e3?"".concat(e," - Good for low bandwidth environments."):t.videoBitrate<3500?"".concat(e," - Good for most bandwidth environments."):"".concat(e," - Good for high bandwidth environments.")})()})]}),(0,n.jsx)("p",{className:"read-more-subtext",children:(0,n.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Read more about bitrates."})})]})})]}),(0,n.jsx)(o.default,{className:"advanced-settings",children:(0,n.jsxs)(V,{header:"Advanced Settings",children:[(0,n.jsxs)(l.Z,{gutter:16,children:[(0,n.jsx)(r.Z,{sm:24,md:12,children:(0,n.jsxs)("div",{className:"form-module resolution-module",children:[(0,n.jsx)(i.default.Title,{level:3,children:"Resolution"}),(0,n.jsxs)("p",{className:"description",children:["Resizing your content will take additional resources on your server. If you wish to optionally resize your content for this stream output then you should either set the width ",(0,n.jsx)("strong",{children:"or"})," the height to keep your aspect ratio. ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Read more about resolutions."})]}),(0,n.jsx)("br",{}),(0,n.jsx)(S.nv,{type:"number",...m.dL.scaledWidth,value:t.scaledWidth,onChange:e=>{let t=Number(e.value);isNaN(t)||a({fieldName:"scaledWidth",value:t||0})},disabled:t.videoPassthrough}),(0,n.jsx)(S.nv,{type:"number",...m.dL.scaledHeight,value:t.scaledHeight,onChange:e=>{let t=Number(e.value);isNaN(t)||a({fieldName:"scaledHeight",value:t||0})},disabled:t.videoPassthrough})]})}),(0,n.jsx)(r.Z,{sm:24,md:12,children:(0,n.jsxs)("div",{className:"form-module video-passthrough-module",children:[(0,n.jsx)(i.default.Title,{level:3,children:"Video Passthrough"}),(0,n.jsxs)("div",{className:"description",children:[(0,n.jsxs)("p",{children:["Enabling video passthrough may allow for less hardware utilization, but may also make your stream ",(0,n.jsx)("strong",{children:"unplayable"}),"."]}),(0,n.jsx)("p",{children:"All other settings for this stream output will be disabled if passthrough is used."}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin#video-passthrough",target:"_blank",rel:"noopener noreferrer",children:"Read the documentation before enabling, as it impacts your stream."})})]}),(0,n.jsx)("div",{className:"advanced-switch-container",children:(0,n.jsxs)(d.Z,{disabled:!0===t.videoPassthrough,title:"Did you read the documentation about video passthrough and understand the risks involved with enabling it?",icon:(0,n.jsx)(I,{}),onConfirm:()=>{a({fieldName:"videoPassthrough",value:!0})},okText:"Yes",cancelText:"No",getPopupContainer:e=>e,placement:"topLeft",children:[(0,n.jsx)("a",{href:"#",children:(0,n.jsxs)("div",{className:"advanced-description-switch-container",children:[(0,n.jsx)("div",{className:"advanced-description-wrapper",children:(0,n.jsx)("p",{children:"Use Video Passthrough?"})}),(0,n.jsx)(_.Z,{label:"",fieldName:"video-passthrough",checked:t.videoPassthrough,onChange:e=>{s&&a({fieldName:"videoPassthrough",value:e})}})]})}),(0,n.jsxs)("p",{children:["*",m.dL.videoPassthrough.tip]})]})})]})})]}),(0,n.jsxs)("div",{className:"form-module frame-rate-module",children:[(0,n.jsx)(i.default.Title,{level:3,children:"Frame rate"}),(0,n.jsx)("p",{className:"description",children:m.nm.tip}),(0,n.jsxs)("div",{className:"segment-slider-container",children:[(0,n.jsx)(g.Z,{tipFormatter:e=>"".concat(e," ").concat(m.nm.unit),defaultValue:t.framerate,value:t.framerate,onChange:e=>{a({fieldName:"framerate",value:e})},step:m.nm.incrementBy,min:m.nm.min,max:m.nm.max,marks:m.Xq,disabled:t.videoPassthrough}),(0,n.jsx)("p",{className:"selected-value-note",children:s?"Framerate selection is disabled when Video Passthrough is enabled.":m.x8[t.framerate]||""})]}),(0,n.jsx)("p",{className:"read-more-subtext",children:(0,n.jsx)("a",{href:"https://owncast.online/docs/video/?source=admin#framerate",target:"_blank",rel:"noopener noreferrer",children:"Read more about framerates."})})]})]},"1")})]})},{Title:R}=i.default,Z=E()(()=>a.e(7949).then(a.t.bind(a,77949,23)),{loadableGenerated:{webpack:()=>[77949]},ssr:!1}),U=()=>{let[e,t]=(0,s.useState)(!1),[a,r]=(0,s.useState)(!1),[o,l]=(0,s.useState)(0),{setMessage:i}=(0,s.useContext)(u.k),[d,c]=(0,s.useState)(m.gX),[p,g]=(0,s.useState)(null),x=(0,s.useContext)(h.a),{serverConfig:y,setFieldInConfigState:b}=x||{},{videoSettings:j}=y||{},{videoQualityVariants:P}=j||{};if(!j)return null;let E=()=>{g(null),clearTimeout(null)},O=()=>{t(!1),l(-1),c(m.gX)},T=async e=>{g((0,f.kg)(f.Jk)),await (0,m.Si)({apiPath:m.vv,data:{value:e},onSuccess:()=>{b({fieldName:"videoQualityVariants",value:e,path:"videoSettings"}),r(!1),O(),g((0,f.kg)(f.zv,"Variants updated")),setTimeout(E,m.sI),x.online&&i("Updating your video configuration will take effect the next time you begin a new stream.")},onError:e=>{g((0,f.kg)(f.Un,e)),r(!1),setTimeout(E,m.sI)}})},S=e=>{let t=[...P];t.splice(e,1),T(t)},_=[{title:"Name",dataIndex:"name",render:e=>e||"No name"},{title:"Video bitrate",dataIndex:"videoBitrate",key:"videoBitrate",render:(e,t)=>!e||t.videoPassthrough?"Same as source":"".concat(e," kbps")},{title:"CPU Usage",dataIndex:"cpuUsageLevel",key:"cpuUsageLevel",render:(e,t)=>{var a;return t.videoPassthrough?"n/a":(null===(a=m.I$[e])||void 0===a?void 0:a.split(" ")[0])||"Warning: please edit & reset"}},{title:"",dataIndex:"",key:"edit",render:e=>{let{key:a}=e,r=a-1;return(0,n.jsxs)("span",{className:"actions",children:[(0,n.jsx)(C.default,{size:"small",onClick:()=>{l(r),c(P[r]),t(!0)},children:"Edit"}),(0,n.jsx)(C.default,{className:"delete-button",icon:(0,n.jsx)(Z,{}),size:"small",disabled:1===P.length,onClick:()=>{S(r)}})]})}}],V=P.map((e,t)=>({key:t+1,...e}));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(R,{level:3,className:"section-title",children:"Stream output"}),(()=>{if(1!==P.length)return!1;let[e]=P;return m.i3.VIDEO_HEIGHT<=e.scaledHeight||m.i3.VIDEO_BITRATE<=e.videoBitrate})()&&(0,n.jsx)(k.default,{message:m.i3.HELP_TEXT,type:"info",closable:!0}),(0,n.jsx)(v.E,{status:p}),(0,n.jsx)(N.Z,{className:"variants-table",pagination:!1,size:"small",columns:_,dataSource:V}),(0,n.jsxs)(w.default,{title:"Edit Video Variant Details",open:e,onOk:()=>{r(!0);let e=[...P];-1===o?e.push(d):e.splice(o,1,d),T(e)},onCancel:O,confirmLoading:a,width:900,children:[(0,n.jsx)(L,{dataState:{...d},onUpdateField:e=>{let{fieldName:t,value:a}=e;c({...d,[t]:a})}}),(0,n.jsx)(v.E,{status:p})]}),(0,n.jsx)("br",{}),(0,n.jsx)(C.default,{type:"primary",onClick:()=>{l(-1),c(m.gX),t(!0)},children:"Add a new variant"})]})};var D=a(34261);let{Panel:A}=o.default,{Title:B}=i.default;function z(){return(0,n.jsxs)("div",{className:"config-video-variants",children:[(0,n.jsx)(B,{children:"Video configuration"}),(0,n.jsxs)("p",{className:"description",children:["Before changing your video configuration"," ",(0,n.jsx)("a",{href:"https://owncast.online/docs/video?source=admin",target:"_blank",rel:"noopener noreferrer",children:"visit the video documentation"})," ","to learn how it impacts your stream performance. The general rule is to start conservatively by having one middle quality stream output variant and experiment with adding more of varied qualities."]}),(0,n.jsxs)(l.Z,{gutter:[45,16],children:[(0,n.jsx)(r.Z,{md:24,lg:12,children:(0,n.jsx)("div",{className:"form-module variants-table-module",children:(0,n.jsx)(U,{})})}),(0,n.jsxs)(r.Z,{md:24,lg:12,children:[(0,n.jsx)("div",{className:"form-module latency-module",children:(0,n.jsx)(j,{})}),(0,n.jsx)(o.default,{className:"advanced-settings codec-module",children:(0,n.jsx)(A,{header:"Advanced Settings",children:(0,n.jsx)("div",{className:"form-module variants-table-module",children:(0,n.jsx)(p,{})})},"1")})]})]})]})}z.getLayout=function(e){return(0,n.jsx)(D.l,{page:e})}}},function(e){e.O(0,[5596,1130,4104,9403,1024,3942,971,6697,1664,1749,1700,2122,9552,7752,5891,2891,4749,6627,8966,4938,8469,5560,4261,9774,2888,179],function(){return e(e.s=6440)}),_N_E=e.O()}]);