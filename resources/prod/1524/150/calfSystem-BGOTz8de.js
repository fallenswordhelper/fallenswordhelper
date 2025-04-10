function e(e){return new Promise((t=>{const n=document.createElement("script")
n.async=!0,n.onload=t,n.src=e,document.body.appendChild(n)}))}function t(e,t){return t?t.getElementById(e):document.getElementById(e)}function n(e){if(e instanceof Node)return e.textContent}let r=null
const i=()=>function(){const e=t("statbar-character")
return e&&n(e)}()||"string"==typeof window.self&&window.self
function o(){if(!r){const e=i()
e&&(r=e)}return r}function s(){!function(){e("https://www.googletagmanager.com/gtag/js?id=G-14Y99WX8XL"),window.dataLayer=window.dataLayer||[],window.gtag=window.gtag||function(){window.dataLayer.push(arguments)},gtag("js",new Date)
const t=o()
t&&gtag("config","G-14Y99WX8XL",{user_id:t})}()}function a(e,t){return e.exec(t)}function l(e,t){const n=a(e,t)
if(n)return n[1]}const c=["www.keeprefreshing.com"]
let u=!1,d=!1
function f(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?f(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){if(null==e)return{}
var n,r,i=function(e,t){if(null==e)return{}
var n,r,i={},o=Object.keys(e)
for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n])
return i}(e,t)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var g,_="undefined"!=typeof window?window:void 0,m="undefined"!=typeof globalThis?globalThis:_,b=Array.prototype,y=b.forEach,w=b.indexOf,k=null==m?void 0:m.navigator,S=null==m?void 0:m.document,x=null==m?void 0:m.location,E=null==m?void 0:m.fetch,C=null!=m&&m.XMLHttpRequest&&"withCredentials"in new m.XMLHttpRequest?m.XMLHttpRequest:void 0,P=null==m?void 0:m.AbortController,T=null==k?void 0:k.userAgent,L=null!=_?_:{},I={DEBUG:!1,LIB_VERSION:"1.235.0"},O="$copy_autocapture",R=["$snapshot","$pageview","$pageleave","$set","survey dismissed","survey sent","survey shown","$identify","$groupidentify","$create_alias","$$client_ingestion_warning","$web_experiment_applied","$feature_enrollment_update","$feature_flag_called"]
!function(e){e.GZipJS="gzip-js",e.Base64="base64"}(g||(g={}))
var M=["fatal","error","warning","log","info","debug"]
function F(e,t){return-1!==e.indexOf(t)}var A=function(e){return e.trim()},j=function(e){return e.replace(/^\$/,"")},N=Array.isArray,D=Object.prototype,B=D.hasOwnProperty,q=D.toString,H=N||function(e){return"[object Array]"===q.call(e)},U=e=>"function"==typeof e,G=e=>e===Object(e)&&!H(e),W=e=>{if(G(e)){for(var t in e)if(B.call(e,t))return!1
return!0}return!1},z=e=>void 0===e,V=e=>"[object String]"==q.call(e),Q=e=>V(e)&&0===e.trim().length,J=e=>null===e,K=e=>z(e)||J(e),X=e=>"[object Number]"==q.call(e),Y=e=>"[object Boolean]"===q.call(e),Z=e=>e instanceof FormData,ee=e=>F(R,e),te=e=>{var t={_log:function(t){if(_&&(I.DEBUG||L.POSTHOG_DEBUG)&&!z(_.console)&&_.console){for(var n=("__rrweb_original__"in _.console[t]?_.console[t].__rrweb_original__:_.console[t]),r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o]
n(e,...i)}},info:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("log",...n)},warn:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("warn",...n)},error:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("error",...n)},critical:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
console.error(e,...n)},uninitializedWarning:e=>{t.error("You must initialize PostHog before calling ".concat(e))},createLogger:t=>te("".concat(e," ").concat(t))}
return t},ne=te("[PostHog.js]"),re=ne.createLogger,ie={}
function oe(e,t,n){if(H(e))if(y&&e.forEach===y)e.forEach(t,n)
else if("length"in e&&e.length===+e.length)for(var r=0,i=e.length;r<i;r++)if(r in e&&t.call(n,e[r],r)===ie)return}function se(e,t,n){if(!K(e)){if(H(e))return oe(e,t,n)
if(Z(e)){for(var r of e.entries())if(t.call(n,r[1],r[0])===ie)return}else for(var i in e)if(B.call(e,i)&&t.call(n,e[i],i)===ie)return}}var ae=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return oe(n,(function(t){for(var n in t)void 0!==t[n]&&(e[n]=t[n])})),e},le=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return oe(n,(function(t){oe(t,(function(t){e.push(t)}))})),e}
function ce(e){for(var t=Object.keys(e),n=t.length,r=new Array(n);n--;)r[n]=[t[n],e[t[n]]]
return r}var ue=function(e){try{return e()}catch(e){return}},de=function(e){return function(){try{for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return e.apply(this,n)}catch(e){ne.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."),ne.critical(e)}}},fe=function(e){var t={}
return se(e,(function(e,n){V(e)&&e.length>0&&(t[n]=e)})),t}
var pe=["herokuapp.com","vercel.app","netlify.app"]
function he(e){var t=null==e?void 0:e.hostname
if(!V(t))return!1
var n=t.split(".").slice(-2).join(".")
for(var r of pe)if(n===r)return!1
return!0}function ve(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}function ge(e,t,n,r){var{capture:i=!1,passive:o=!0}=null!=r?r:{}
null==e||e.addEventListener(t,n,{capture:i,passive:o})}var _e="$people_distinct_id",me="__alias",be="__timers",ye="$autocapture_disabled_server_side",we="$heatmaps_enabled_server_side",ke="$exception_capture_enabled_server_side",Se="$web_vitals_enabled_server_side",xe="$dead_clicks_enabled_server_side",Ee="$web_vitals_allowed_metrics",Ce="$session_recording_enabled_server_side",Pe="$console_log_recording_enabled_server_side",Te="$session_recording_network_payload_capture",$e="$session_recording_masking",Le="$session_recording_canvas_recording",Ie="$replay_sample_rate",Oe="$replay_minimum_duration",Re="$replay_script_config",Me="$sesid",Fe="$session_is_sampled",Ae="$session_recording_url_trigger_activated_session",je="$session_recording_event_trigger_activated_session",Ne="$enabled_feature_flags",De="$early_access_features",Be="$feature_flag_details",qe="$stored_person_properties",He="$stored_group_properties",Ue="$surveys",Ge="$surveys_activated",We="$flag_call_reported",ze="$user_state",Ve="$client_session_props",Qe="$capture_rate_limit",Je="$initial_campaign_params",Ke="$initial_referrer_info",Xe="$initial_person_info",Ye="$epp",Ze="__POSTHOG_TOOLBAR__",et="$posthog_cookieless",tt=[_e,me,"__cmpns",be,Ce,we,Me,Ne,ze,De,Be,He,qe,Ue,We,Ve,Qe,Je,Ke,Ye]
function nt(e){var t
return e instanceof Element&&(e.id===Ze||!(null===(t=e.closest)||void 0===t||!t.call(e,".toolbar-global-fade-container")))}function rt(e){return!!e&&1===e.nodeType}function it(e,t){return!!e&&!!e.tagName&&e.tagName.toLowerCase()===t.toLowerCase()}function ot(e){return!!e&&3===e.nodeType}function st(e){return!!e&&11===e.nodeType}function at(e){return e?A(e).split(/\s+/):[]}function lt(e){var t=null==_?void 0:_.location.href
return!!(t&&e&&e.some((e=>t.match(e))))}function ct(e){var t=""
switch(typeof e.className){case"string":t=e.className
break
case"object":t=(e.className&&"baseVal"in e.className?e.className.baseVal:null)||e.getAttribute("class")||""
break
default:t=""}return at(t)}function ut(e){return K(e)?null:A(e).split(/(\s+)/).filter((e=>St(e))).join("").replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)}function dt(e){var t=""
return vt(e)&&!gt(e)&&e.childNodes&&e.childNodes.length&&se(e.childNodes,(function(e){var n
ot(e)&&e.textContent&&(t+=null!==(n=ut(e.textContent))&&void 0!==n?n:"")})),A(t)}function ft(e){return z(e.target)?e.srcElement||null:null!==(t=e.target)&&void 0!==t&&t.shadowRoot?e.composedPath()[0]||null:e.target||null
var t}var pt=["a","button","form","input","select","textarea","label"]
function ht(e){var t=e.parentNode
return!(!t||!rt(t))&&t}function vt(e){for(var t=e;t.parentNode&&!it(t,"body");t=t.parentNode){var n=ct(t)
if(F(n,"ph-sensitive")||F(n,"ph-no-capture"))return!1}if(F(ct(e),"ph-include"))return!0
var r=e.type||""
if(V(r))switch(r.toLowerCase()){case"hidden":case"password":return!1}var i=e.name||e.id||""
return!V(i)||!/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g,""))}function gt(e){return!!(it(e,"input")&&!["button","checkbox","submit","reset"].includes(e.type)||it(e,"select")||it(e,"textarea")||"true"===e.getAttribute("contenteditable"))}var _t="(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",mt=new RegExp("^(?:".concat(_t,")$")),bt=new RegExp(_t),yt="\\d{3}-?\\d{2}-?\\d{4}",wt=new RegExp("^(".concat(yt,")$")),kt=new RegExp("(".concat(yt,")"))
function St(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(K(e))return!1
if(V(e)){if(e=A(e),(t?mt:bt).test((e||"").replace(/[- ]/g,"")))return!1
if((t?wt:kt).test(e))return!1}return!0}function xt(e){var t=dt(e)
return St(t="".concat(t," ").concat(Et(e)).trim())?t:""}function Et(e){var t=""
return e&&e.childNodes&&e.childNodes.length&&se(e.childNodes,(function(e){var n
if(e&&"span"===(null===(n=e.tagName)||void 0===n?void 0:n.toLowerCase()))try{var r=dt(e)
t="".concat(t," ").concat(r).trim(),e.childNodes&&e.childNodes.length&&(t="".concat(t," ").concat(Et(e)).trim())}catch(e){ne.error("[AutoCapture]",e)}})),t}function Ct(e){return function(e){var t=e.map((e=>{var t,n,r=""
if(e.tag_name&&(r+=e.tag_name),e.attr_class)for(var i of(e.attr_class.sort(),e.attr_class))r+=".".concat(i.replace(/"/g,""))
var o=p(p(p(p({},e.text?{text:e.text}:{}),{},{"nth-child":null!==(t=e.nth_child)&&void 0!==t?t:0,"nth-of-type":null!==(n=e.nth_of_type)&&void 0!==n?n:0},e.href?{href:e.href}:{}),e.attr_id?{attr_id:e.attr_id}:{}),e.attributes),s={}
return ce(o).sort(((e,t)=>{var[n]=e,[r]=t
return n.localeCompare(r)})).forEach((e=>{var[t,n]=e
return s[Pt(t.toString())]=Pt(n.toString())})),(r+=":")+ce(o).map((e=>{var[t,n]=e
return"".concat(t,'="').concat(n,'"')})).join("")}))
return t.join(";")}(function(e){return e.map((e=>{var t,n,r={text:null===(t=e.$el_text)||void 0===t?void 0:t.slice(0,400),tag_name:e.tag_name,href:null===(n=e.attr__href)||void 0===n?void 0:n.slice(0,2048),attr_class:Tt(e),attr_id:e.attr__id,nth_child:e.nth_child,nth_of_type:e.nth_of_type,attributes:{}}
return ce(e).filter((e=>{var[t]=e
return 0===t.indexOf("attr__")})).forEach((e=>{var[t,n]=e
return r.attributes[t]=n})),r}))}(e))}function Pt(e){return e.replace(/"|\\"/g,'\\"')}function Tt(e){var t=e.attr__class
return t?H(t)?t:at(t):void 0}class $t{constructor(){this.clicks=[]}isRageClick(e,t,n){var r=this.clicks[this.clicks.length-1]
if(r&&Math.abs(e-r.x)+Math.abs(t-r.y)<30&&n-r.timestamp<1e3){if(this.clicks.push({x:e,y:t,timestamp:n}),3===this.clicks.length)return!0}else this.clicks=[{x:e,y:t,timestamp:n}]
return!1}}var Lt=["localhost","127.0.0.1"],It=e=>{var t=null==S?void 0:S.createElement("a")
return z(t)?null:(t.href=e,t)},Ot=function(e,t){for(var n,r=((e.split("#")[0]||"").split(/\?(.*)/)[1]||"").replace(/^\?+/g,"").split("&"),i=0;i<r.length;i++){var o=r[i].split("=")
if(o[0]===t){n=o
break}}if(!H(n)||n.length<2)return""
var s=n[1]
try{s=decodeURIComponent(s)}catch(e){ne.error("Skipping decoding for malformed query param: "+s)}return s.replace(/\+/g," ")},Rt=function(e,t,n){if(!e||!t||!t.length)return e
for(var r=e.split("#"),i=r[0]||"",o=r[1],s=i.split("?"),a=s[1],l=s[0],c=(a||"").split("&"),u=[],d=0;d<c.length;d++){var f=c[d].split("=")
H(f)&&(t.includes(f[0])?u.push(f[0]+"="+n):u.push(c[d]))}var p=l
return null!=a&&(p+="?"+u.join("&")),null!=o&&(p+="#"+o),p},Mt=function(e,t){var n=e.match(new RegExp(t+"=([^&]*)"))
return n?n[1]:null},Ft=re("[AutoCapture]")
function At(e,t){return t.length>e?t.slice(0,e)+"...":t}function jt(e){if(e.previousElementSibling)return e.previousElementSibling
var t=e
do{t=t.previousSibling}while(t&&!rt(t))
return t}function Nt(e,t){for(var n,r,{e:i,maskAllElementAttributes:o,maskAllText:s,elementAttributeIgnoreList:a,elementsChainAsString:l}=t,c=[e],u=e;u.parentNode&&!it(u,"body");)st(u.parentNode)?(c.push(u.parentNode.host),u=u.parentNode.host):(c.push(u.parentNode),u=u.parentNode)
var d,f=[],p={},h=!1,v=!1
if(se(c,(e=>{var t=vt(e)
"a"===e.tagName.toLowerCase()&&(h=e.getAttribute("href"),h=t&&h&&St(h)&&h),F(ct(e),"ph-no-capture")&&(v=!0),f.push(function(e,t,n,r){var i=e.tagName.toLowerCase(),o={tag_name:i}
pt.indexOf(i)>-1&&!n&&("a"===i.toLowerCase()||"button"===i.toLowerCase()?o.$el_text=At(1024,xt(e)):o.$el_text=At(1024,dt(e)))
var s=ct(e)
s.length>0&&(o.classes=s.filter((function(e){return""!==e}))),se(e.attributes,(function(n){var i
if((!gt(e)||-1!==["name","id","class","aria-label"].indexOf(n.name))&&(null==r||!r.includes(n.name))&&!t&&St(n.value)&&(i=n.name,!V(i)||"_ngcontent"!==i.substring(0,10)&&"_nghost"!==i.substring(0,7))){var s=n.value
"class"===n.name&&(s=at(s).join(" ")),o["attr__"+n.name]=At(1024,s)}}))
for(var a=1,l=1,c=e;c=jt(c);)a++,c.tagName===e.tagName&&l++
return o.nth_child=a,o.nth_of_type=l,o}(e,o,s,a))
var n=function(e){if(!vt(e))return{}
var t={}
return se(e.attributes,(function(e){if(e.name&&0===e.name.indexOf("data-ph-capture-attribute")){var n=e.name.replace("data-ph-capture-attribute-",""),r=e.value
n&&r&&St(r)&&(t[n]=r)}})),t}(e)
ae(p,n)})),v)return{props:{},explicitNoCapture:v}
if(s||("a"===e.tagName.toLowerCase()||"button"===e.tagName.toLowerCase()?f[0].$el_text=xt(e):f[0].$el_text=dt(e)),h){var g,m
f[0].attr__href=h
var b=null===(g=It(h))||void 0===g?void 0:g.host,y=null==_||null===(m=_.location)||void 0===m?void 0:m.host
b&&y&&b!==y&&(d=h)}return{props:ae({$event_type:i.type,$ce_version:1},l?{}:{$elements:f},{$elements_chain:Ct(f)},null!==(n=f[0])&&void 0!==n&&n.$el_text?{$el_text:null===(r=f[0])||void 0===r?void 0:r.$el_text}:{},d&&"click"===i.type?{$external_click_url:d}:{},p)}}class Dt{constructor(e){h(this,"_initialized",!1),h(this,"_isDisabledServerSide",null),h(this,"rageclicks",new $t),h(this,"_elementsChainAsString",!1),this.instance=e,this._elementSelectors=null}get config(){var e,t,n=G(this.instance.config.autocapture)?this.instance.config.autocapture:{}
return n.url_allowlist=null===(e=n.url_allowlist)||void 0===e?void 0:e.map((e=>new RegExp(e))),n.url_ignorelist=null===(t=n.url_ignorelist)||void 0===t?void 0:t.map((e=>new RegExp(e))),n}_addDomEventHandlers(){if(this.isBrowserSupported()){if(_&&S){var e=e=>{e=e||(null==_?void 0:_.event)
try{this._captureEvent(e)}catch(e){Ft.error("Failed to capture event",e)}}
if(ge(S,"submit",e,{capture:!0}),ge(S,"change",e,{capture:!0}),ge(S,"click",e,{capture:!0}),this.config.capture_copied_text){var t=e=>{e=e||(null==_?void 0:_.event),this._captureEvent(e,O)}
ge(S,"copy",t,{capture:!0}),ge(S,"cut",t,{capture:!0})}}}else Ft.info("Disabling Automatic Event Collection because this browser is not supported")}startIfEnabled(){this.isEnabled&&!this._initialized&&(this._addDomEventHandlers(),this._initialized=!0)}onRemoteConfig(e){e.elementsChainAsString&&(this._elementsChainAsString=e.elementsChainAsString),this.instance.persistence&&this.instance.persistence.register({[ye]:!!e.autocapture_opt_out}),this._isDisabledServerSide=!!e.autocapture_opt_out,this.startIfEnabled()}setElementSelectors(e){this._elementSelectors=e}getElementSelectors(e){var t,n=[]
return null===(t=this._elementSelectors)||void 0===t||t.forEach((t=>{var r=null==S?void 0:S.querySelectorAll(t)
null==r||r.forEach((r=>{e===r&&n.push(t)}))})),n}get isEnabled(){var e,t,n=null===(e=this.instance.persistence)||void 0===e?void 0:e.props[ye],r=this._isDisabledServerSide
if(J(r)&&!Y(n)&&!this.instance.config.advanced_disable_decide)return!1
var i=null!==(t=this._isDisabledServerSide)&&void 0!==t?t:!!n
return!!this.instance.config.autocapture&&!i}_captureEvent(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$autocapture"
if(this.isEnabled){var n,r=ft(e)
ot(r)&&(r=r.parentNode||null),"$autocapture"===t&&"click"===e.type&&e instanceof MouseEvent&&this.instance.config.rageclick&&null!==(n=this.rageclicks)&&void 0!==n&&n.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._captureEvent(e,"$rageclick")
var i=t===O
if(r&&function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0
if(!_||!e||it(e,"html")||!rt(e))return!1
if(null!=n&&n.url_allowlist&&!lt(n.url_allowlist))return!1
if(null!=n&&n.url_ignorelist&&lt(n.url_ignorelist))return!1
if(null!=n&&n.dom_event_allowlist){var o=n.dom_event_allowlist
if(o&&!o.some((e=>t.type===e)))return!1}for(var s=!1,a=[e],l=!0,c=e;c.parentNode&&!it(c,"body");)if(st(c.parentNode))a.push(c.parentNode.host),c=c.parentNode.host
else{if(!(l=ht(c)))break
if(r||pt.indexOf(l.tagName.toLowerCase())>-1)s=!0
else{var u=_.getComputedStyle(l)
u&&"pointer"===u.getPropertyValue("cursor")&&(s=!0)}a.push(l),c=l}if(!function(e,t){var n=null==t?void 0:t.element_allowlist
if(z(n))return!0
var r=function(e){if(n.some((t=>e.tagName.toLowerCase()===t)))return{v:!0}}
for(var i of e){var o=r(i)
if("object"==typeof o)return o.v}return!1}(a,n))return!1
if(!function(e,t){var n=null==t?void 0:t.css_selector_allowlist
if(z(n))return!0
var r=function(e){if(n.some((t=>e.matches(t))))return{v:!0}}
for(var i of e){var o=r(i)
if("object"==typeof o)return o.v}return!1}(a,n))return!1
var d=_.getComputedStyle(e)
if(d&&"pointer"===d.getPropertyValue("cursor")&&"click"===t.type)return!0
var f=e.tagName.toLowerCase()
switch(f){case"html":return!1
case"form":return(i||["submit"]).indexOf(t.type)>=0
case"input":case"select":case"textarea":return(i||["change","click"]).indexOf(t.type)>=0
default:return s?(i||["click"]).indexOf(t.type)>=0:(i||["click"]).indexOf(t.type)>=0&&(pt.indexOf(f)>-1||"true"===e.getAttribute("contenteditable"))}}(r,e,this.config,i,i?["copy","cut"]:void 0)){var{props:o,explicitNoCapture:s}=Nt(r,{e:e,maskAllElementAttributes:this.instance.config.mask_all_element_attributes,maskAllText:this.instance.config.mask_all_text,elementAttributeIgnoreList:this.config.element_attribute_ignorelist,elementsChainAsString:this._elementsChainAsString})
if(s)return!1
var a=this.getElementSelectors(r)
if(a&&a.length>0&&(o.$element_selectors=a),t===O){var l,c=ut(null==_||null===(l=_.getSelection())||void 0===l?void 0:l.toString()),u=e.type||"clipboard"
if(!c)return!1
o.$selected_content=c,o.$copy_type=u}return this.instance.capture(t,o),!0}}}isBrowserSupported(){return U(null==S?void 0:S.querySelectorAll)}}Math.trunc||(Math.trunc=function(e){return e<0?Math.ceil(e):Math.floor(e)}),Number.isInteger||(Number.isInteger=function(e){return X(e)&&isFinite(e)&&Math.floor(e)===e})
var Bt="0123456789abcdef"
class qt{constructor(e){if(this.bytes=e,16!==e.length)throw new TypeError("not 128-bit length")}static fromFieldsV7(e,t,n,r){if(!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(n)||!Number.isInteger(r)||e<0||t<0||n<0||r<0||e>0xffffffffffff||t>4095||n>1073741823||r>4294967295)throw new RangeError("invalid field value")
var i=new Uint8Array(16)
return i[0]=e/Math.pow(2,40),i[1]=e/Math.pow(2,32),i[2]=e/Math.pow(2,24),i[3]=e/Math.pow(2,16),i[4]=e/Math.pow(2,8),i[5]=e,i[6]=112|t>>>8,i[7]=t,i[8]=128|n>>>24,i[9]=n>>>16,i[10]=n>>>8,i[11]=n,i[12]=r>>>24,i[13]=r>>>16,i[14]=r>>>8,i[15]=r,new qt(i)}toString(){for(var e="",t=0;t<this.bytes.length;t++)e=e+Bt.charAt(this.bytes[t]>>>4)+Bt.charAt(15&this.bytes[t]),3!==t&&5!==t&&7!==t&&9!==t||(e+="-")
if(36!==e.length)throw new Error("Invalid UUIDv7 was generated")
return e}clone(){return new qt(this.bytes.slice(0))}equals(e){return 0===this.compareTo(e)}compareTo(e){for(var t=0;t<16;t++){var n=this.bytes[t]-e.bytes[t]
if(0!==n)return Math.sign(n)}return 0}}class Ht{constructor(){h(this,"timestamp",0),h(this,"counter",0),h(this,"random",new Wt)}generate(){var e=this.generateOrAbort()
if(z(e)){this.timestamp=0
var t=this.generateOrAbort()
if(z(t))throw new Error("Could not generate UUID after timestamp reset")
return t}return e}generateOrAbort(){var e=Date.now()
if(e>this.timestamp)this.timestamp=e,this.resetCounter()
else{if(!(e+1e4>this.timestamp))return
this.counter++,this.counter>4398046511103&&(this.timestamp++,this.resetCounter())}return qt.fromFieldsV7(this.timestamp,Math.trunc(this.counter/Math.pow(2,30)),this.counter&Math.pow(2,30)-1,this.random.nextUint32())}resetCounter(){this.counter=1024*this.random.nextUint32()+(1023&this.random.nextUint32())}}var Ut,Gt=e=>{if("undefined"!=typeof UUIDV7_DENY_WEAK_RNG&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available")
for(var t=0;t<e.length;t++)e[t]=65536*Math.trunc(65536*Math.random())+Math.trunc(65536*Math.random())
return e}
_&&!z(_.crypto)&&crypto.getRandomValues&&(Gt=e=>crypto.getRandomValues(e))
class Wt{constructor(){h(this,"buffer",new Uint32Array(8)),h(this,"cursor",1/0)}nextUint32(){return this.cursor>=this.buffer.length&&(Gt(this.buffer),this.cursor=0),this.buffer[this.cursor++]}}var zt=()=>Vt().toString(),Vt=()=>(Ut||(Ut=new Ht)).generate(),Qt="",Jt=/[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i
var Kt,Xt={is_supported:()=>!!S,error:function(e){ne.error("cookieStore error: "+e)},get:function(e){if(S){try{for(var t=e+"=",n=S.cookie.split(";").filter((e=>e.length)),r=0;r<n.length;r++){for(var i=n[r];" "==i.charAt(0);)i=i.substring(1,i.length)
if(0===i.indexOf(t))return decodeURIComponent(i.substring(t.length,i.length))}}catch(e){}return null}},parse:function(e){var t
try{t=JSON.parse(Xt.get(e))||{}}catch(e){}return t},set:function(e,t,n,r,i){if(S)try{var o="",s="",a=function(e,t){if(t){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S
if(Qt)return Qt
if(!t)return""
if(["localhost","127.0.0.1"].includes(e))return""
for(var n=e.split("."),r=Math.min(n.length,8),i="dmn_chk_"+zt(),o=new RegExp("(^|;)\\s*"+i+"=1");!Qt&&r--;){var s=n.slice(r).join("."),a=i+"=1;domain=."+s
t.cookie=a,o.test(t.cookie)&&(t.cookie=a+";expires=Thu, 01 Jan 1970 00:00:00 GMT",Qt=s)}return Qt}(e)
if(!n){var r=(e=>{var t=e.match(Jt)
return t?t[0]:""})(e)
r!==n&&ne.info("Warning: cookie subdomain discovery mismatch",r,n),n=r}return n?"; domain=."+n:""}return""}(S.location.hostname,r)
if(n){var l=new Date
l.setTime(l.getTime()+24*n*60*60*1e3),o="; expires="+l.toUTCString()}i&&(s="; secure")
var c=e+"="+encodeURIComponent(JSON.stringify(t))+o+"; SameSite=Lax; path=/"+a+s
return c.length>3686.4&&ne.warn("cookieStore warning: large cookie, len="+c.length),S.cookie=c,c}catch(e){return}},remove:function(e,t){try{Xt.set(e,"",-1,t)}catch(e){return}}},Yt=null,Zt={is_supported:function(){if(!J(Yt))return Yt
var e=!0
if(z(_))e=!1
else try{var t="__mplssupport__"
Zt.set(t,"xyz"),'"xyz"'!==Zt.get(t)&&(e=!1),Zt.remove(t)}catch(t){e=!1}return e||ne.error("localStorage unsupported; falling back to cookie store"),Yt=e,e},error:function(e){ne.error("localStorage error: "+e)},get:function(e){try{return null==_?void 0:_.localStorage.getItem(e)}catch(e){Zt.error(e)}return null},parse:function(e){try{return JSON.parse(Zt.get(e))||{}}catch(e){}return null},set:function(e,t){try{null==_||_.localStorage.setItem(e,JSON.stringify(t))}catch(e){Zt.error(e)}},remove:function(e){try{null==_||_.localStorage.removeItem(e)}catch(e){Zt.error(e)}}},en=["distinct_id",Me,Fe,Ye,Xe],tn=p(p({},Zt),{},{parse:function(e){try{var t={}
try{t=Xt.parse(e)||{}}catch(e){}var n=ae(t,JSON.parse(Zt.get(e)||"{}"))
return Zt.set(e,n),n}catch(e){}return null},set:function(e,t,n,r,i,o){try{Zt.set(e,t,void 0,void 0,o)
var s={}
en.forEach((e=>{t[e]&&(s[e]=t[e])})),Object.keys(s).length&&Xt.set(e,s,n,r,i,o)}catch(e){Zt.error(e)}},remove:function(e,t){try{null==_||_.localStorage.removeItem(e),Xt.remove(e,t)}catch(e){Zt.error(e)}}}),nn={},rn={is_supported:function(){return!0},error:function(e){ne.error("memoryStorage error: "+e)},get:function(e){return nn[e]||null},parse:function(e){return nn[e]||null},set:function(e,t){nn[e]=t},remove:function(e){delete nn[e]}},on=null,sn={is_supported:function(){if(!J(on))return on
if(on=!0,z(_))on=!1
else try{var e="__support__"
sn.set(e,"xyz"),'"xyz"'!==sn.get(e)&&(on=!1),sn.remove(e)}catch(e){on=!1}return on},error:function(e){ne.error("sessionStorage error: ",e)},get:function(e){try{return null==_?void 0:_.sessionStorage.getItem(e)}catch(e){sn.error(e)}return null},parse:function(e){try{return JSON.parse(sn.get(e))||null}catch(e){}return null},set:function(e,t){try{null==_||_.sessionStorage.setItem(e,JSON.stringify(t))}catch(e){sn.error(e)}},remove:function(e){try{null==_||_.sessionStorage.removeItem(e)}catch(e){sn.error(e)}}}
!function(e){e[e.PENDING=-1]="PENDING",e[e.DENIED=0]="DENIED",e[e.GRANTED=1]="GRANTED"}(Kt||(Kt={}))
class an{constructor(e){this.instance=e}get config(){return this.instance.config}get consent(){return this.getDnt()?Kt.DENIED:this.storedConsent}isOptedOut(){return this.consent===Kt.DENIED||this.consent===Kt.PENDING&&this.config.opt_out_capturing_by_default}isOptedIn(){return!this.isOptedOut()}optInOut(e){this.storage.set(this.storageKey,e?1:0,this.config.cookie_expiration,this.config.cross_subdomain_cookie,this.config.secure_cookie)}reset(){this.storage.remove(this.storageKey,this.config.cross_subdomain_cookie)}get storageKey(){var{token:e,opt_out_capturing_cookie_prefix:t}=this.instance.config
return(t||"__ph_opt_in_out_")+e}get storedConsent(){var e=this.storage.get(this.storageKey)
return"1"===e?Kt.GRANTED:"0"===e?Kt.DENIED:Kt.PENDING}get storage(){if(!this._storage){var e=this.config.opt_out_capturing_persistence_type
this._storage="localStorage"===e?Zt:Xt
var t="localStorage"===e?Xt:Zt
t.get(this.storageKey)&&(this._storage.get(this.storageKey)||this.optInOut("1"===t.get(this.storageKey)),t.remove(this.storageKey,this.config.cross_subdomain_cookie))}return this._storage}getDnt(){return!!this.config.respect_dnt&&!!ve([null==k?void 0:k.doNotTrack,null==k?void 0:k.msDoNotTrack,L.doNotTrack],(e=>F([!0,1,"1","yes"],e)))}}var ln=re("[Dead Clicks]"),cn=()=>!0,un=e=>{var t,n=!(null===(t=e.instance.persistence)||void 0===t||!t.get_property(xe)),r=e.instance.config.capture_dead_clicks
return Y(r)?r:n}
class dn{get lazyLoadedDeadClicksAutocapture(){return this._lazyLoadedDeadClicksAutocapture}constructor(e,t,n){this.instance=e,this.isEnabled=t,this.onCapture=n,this.startIfEnabled()}onRemoteConfig(e){this.instance.persistence&&this.instance.persistence.register({[xe]:null==e?void 0:e.captureDeadClicks}),this.startIfEnabled()}startIfEnabled(){this.isEnabled(this)&&this.loadScript((()=>{this.start()}))}loadScript(e){var t,n,r
null!==(t=L.__PosthogExtensions__)&&void 0!==t&&t.initDeadClicksAutocapture&&e(),null===(n=L.__PosthogExtensions__)||void 0===n||null===(r=n.loadExternalDependency)||void 0===r||r.call(n,this.instance,"dead-clicks-autocapture",(t=>{t?ln.error("failed to load script",t):e()}))}start(){var e
if(S){if(!this._lazyLoadedDeadClicksAutocapture&&null!==(e=L.__PosthogExtensions__)&&void 0!==e&&e.initDeadClicksAutocapture){var t=G(this.instance.config.capture_dead_clicks)?this.instance.config.capture_dead_clicks:{}
t.__onCapture=this.onCapture,this._lazyLoadedDeadClicksAutocapture=L.__PosthogExtensions__.initDeadClicksAutocapture(this.instance,t),this._lazyLoadedDeadClicksAutocapture.start(S),ln.info("starting...")}}else ln.error("`document` not found. Cannot start.")}stop(){this._lazyLoadedDeadClicksAutocapture&&(this._lazyLoadedDeadClicksAutocapture.stop(),this._lazyLoadedDeadClicksAutocapture=void 0,ln.info("stopping..."))}}var fn=re("[ExceptionAutocapture]")
class pn{constructor(e){var t
h(this,"startCapturing",(()=>{var e
if(_&&this.isEnabled&&null!==(e=L.__PosthogExtensions__)&&void 0!==e&&e.errorWrappingFunctions){var t=L.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,n=L.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,r=L.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError
try{!this.unwrapOnError&&this.config.capture_unhandled_errors&&(this.unwrapOnError=t(this.captureException.bind(this))),!this.unwrapUnhandledRejection&&this.config.capture_unhandled_rejections&&(this.unwrapUnhandledRejection=n(this.captureException.bind(this))),!this.unwrapConsoleError&&this.config.capture_console_errors&&(this.unwrapConsoleError=r(this.captureException.bind(this)))}catch(e){fn.error("failed to start",e),this.stopCapturing()}}})),this.instance=e,this.remoteEnabled=!(null===(t=this.instance.persistence)||void 0===t||!t.props[ke]),this.config=this.requiredConfig(),this.startIfEnabled()}requiredConfig(){var e=this.instance.config.capture_exceptions,t={capture_unhandled_errors:!1,capture_unhandled_rejections:!1,capture_console_errors:!1}
return G(e)?t=p(p({},t),e):(z(e)?this.remoteEnabled:e)&&(t=p(p({},t),{},{capture_unhandled_errors:!0,capture_unhandled_rejections:!0})),t}get isEnabled(){return this.config.capture_console_errors||this.config.capture_unhandled_errors||this.config.capture_unhandled_rejections}startIfEnabled(){this.isEnabled&&(fn.info("enabled"),this.loadScript(this.startCapturing))}loadScript(e){var t,n,r
null!==(t=L.__PosthogExtensions__)&&void 0!==t&&t.errorWrappingFunctions&&e(),null===(n=L.__PosthogExtensions__)||void 0===n||null===(r=n.loadExternalDependency)||void 0===r||r.call(n,this.instance,"exception-autocapture",(t=>{if(t)return fn.error("failed to load script",t)
e()}))}stopCapturing(){var e,t,n
null===(e=this.unwrapOnError)||void 0===e||e.call(this),this.unwrapOnError=void 0,null===(t=this.unwrapUnhandledRejection)||void 0===t||t.call(this),this.unwrapUnhandledRejection=void 0,null===(n=this.unwrapConsoleError)||void 0===n||n.call(this),this.unwrapConsoleError=void 0}onRemoteConfig(e){var t=e.autocaptureExceptions
this.remoteEnabled=!!t||!1,this.config=this.requiredConfig(),this.instance.persistence&&this.instance.persistence.register({[ke]:this.remoteEnabled}),this.startIfEnabled()}captureException(e){var t=this.instance.requestRouter.endpointFor("ui")
e.$exception_personURL="".concat(t,"/project/").concat(this.instance.config.token,"/person/").concat(this.instance.get_distinct_id()),this.instance.exceptions.sendExceptionEvent(e)}}function hn(e){return!z(Event)&&vn(e,Event)}function vn(e,t){try{return e instanceof t}catch(e){return!1}}function gn(e,t){return Object.prototype.toString.call(e)==="[object ".concat(t,"]")}function _n(e){return gn(e,"DOMError")}var mn=/\(error: (.*)\)/,bn="?"
function yn(e,t,n,r){var i={platform:"web:javascript",filename:e,function:"<anonymous>"===t?bn:t,in_app:!0}
return z(n)||(i.lineno=n),z(r)||(i.colno=r),i}var wn=/^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,kn=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,Sn=/\((\S*)(?::(\d+))(?::(\d+))\)/,xn=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,En=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,Cn=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=t.sort(((e,t)=>e[0]-t[0])).map((e=>e[1]))
return function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[],i=e.split("\n"),o=t;o<i.length;o++){var s=i[o]
if(!(s.length>1024)){var a=mn.test(s)?s.replace(mn,"$1"):s
if(!a.match(/\S*Error: /)){for(var l of r){var c=l(a)
if(c){n.push(c)
break}}if(n.length>=50)break}}}return function(e){if(!e.length)return[]
var t=Array.from(e)
return t.reverse(),t.slice(0,50).map((e=>p(p({},e),{},{filename:e.filename||Pn(t).filename,function:e.function||bn})))}(n)}}([30,e=>{var t=wn.exec(e)
if(t){var[,n,r,i]=t
return yn(n,bn,+r,+i)}var o=kn.exec(e)
if(o){if(o[2]&&0===o[2].indexOf("eval")){var s=Sn.exec(o[2])
s&&(o[2]=s[1],o[3]=s[2],o[4]=s[3])}var[a,l]=In(o[1]||bn,o[2])
return yn(l,a,o[3]?+o[3]:void 0,o[4]?+o[4]:void 0)}}],[50,e=>{var t=xn.exec(e)
if(t){if(t[3]&&t[3].indexOf(" > eval")>-1){var n=En.exec(t[3])
n&&(t[1]=t[1]||"eval",t[3]=n[1],t[4]=n[2],t[5]="")}var r=t[3],i=t[1]||bn
return[i,r]=In(i,r),yn(r,i,t[4]?+t[4]:void 0,t[5]?+t[5]:void 0)}}])
function Pn(e){return e[e.length-1]||{}}var Tn,$n,Ln,In=(e,t)=>{var n=-1!==e.indexOf("safari-extension"),r=-1!==e.indexOf("safari-web-extension")
return n||r?[-1!==e.indexOf("@")?e.split("@")[0]:bn,n?"safari-extension:".concat(t):"safari-web-extension:".concat(t)]:[e,t]},On=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
function Rn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.stacktrace||e.stack||"",r=function(e){return e&&Mn.test(e.message)?1:0}(e)
try{var i=Cn,o=function(e,t){var n=function(e){var t=globalThis._posthogChunkIds
if(!t)return{}
var n=Object.keys(t)
return Ln&&n.length===$n||($n=n.length,Ln=n.reduce(((n,r)=>{Tn||(Tn={})
var i=Tn[r]
if(i)n[i[0]]=i[1]
else for(var o=e(r),s=o.length-1;s>=0;s--){var a=o[s],l=null==a?void 0:a.filename,c=t[r]
if(l&&c){n[l]=c,Tn[r]=[l,c]
break}}return n}),{})),Ln}(t)
return e.forEach((e=>{e.filename&&(e.chunk_id=n[e.filename])})),e}(i(n,r),i)
return o.slice(0,o.length-t)}catch(e){}return[]}var Mn=/Minified React error #\d+;/i
function Fn(e,t){var n,r,i=Rn(e),o=null===(n=null==t?void 0:t.handled)||void 0===n||n,s=null!==(r=null==t?void 0:t.synthetic)&&void 0!==r&&r
return{$exception_list:[{type:null!=t&&t.overrideExceptionType?t.overrideExceptionType:e.name,value:function(e){var t=e.message
return t.error&&"string"==typeof t.error.message?String(t.error.message):String(t)}(e),stacktrace:{frames:i,type:"raw"},mechanism:{handled:o,synthetic:s}}],$exception_level:"error"}}function An(e,t){var n,r,i,o=null===(n=null==t?void 0:t.handled)||void 0===n||n,s=null===(r=null==t?void 0:t.synthetic)||void 0===r||r,a={type:null!=t&&t.overrideExceptionType?t.overrideExceptionType:null!==(i=null==t?void 0:t.defaultExceptionType)&&void 0!==i?i:"Error",value:e||(null==t?void 0:t.defaultExceptionMessage),mechanism:{handled:o,synthetic:s}}
if(null!=t&&t.syntheticException){var l=Rn(t.syntheticException,1)
l.length&&(a.stacktrace={frames:l,type:"raw"})}return{$exception_list:[a],$exception_level:"error"}}function jn(e){return V(e)&&!Q(e)&&M.indexOf(e)>=0}function Nn(e,t){var{error:n,event:r}=e,i={$exception_list:[]},o=n||r
if(_n(o)||function(e){return gn(e,"DOMException")}(o)){var s=o
if(function(e){return"stack"in e}(o))i=Fn(o,t)
else{var a=s.name||(_n(s)?"DOMError":"DOMException"),l=s.message?"".concat(a,": ").concat(s.message):a,c=_n(s)?"DOMError":"DOMException"
i=An(l,p(p({},t),{},{overrideExceptionType:c,defaultExceptionMessage:l}))}return"code"in s&&(i.$exception_DOMException_code="".concat(s.code)),i}if(function(e){return gn(e,"ErrorEvent")}(o)&&o.error)return Fn(o.error,t)
if(function(e){switch(Object.prototype.toString.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":case"[object DOMError]":return!0
default:return vn(e,Error)}}(o))return Fn(o,t)
if(function(e){return gn(e,"Object")}(o)||hn(o))return function(e,t){var n,r,i=null===(n=null==t?void 0:t.handled)||void 0===n||n,o=null===(r=null==t?void 0:t.synthetic)||void 0===r||r,s=null!=t&&t.overrideExceptionType?t.overrideExceptionType:hn(e)?e.constructor.name:"Error",a="Non-Error 'exception' captured with keys: ".concat(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:40,n=Object.keys(e)
if(n.sort(),!n.length)return"[object has no keys]"
for(var r=n.length;r>0;r--){var i=n.slice(0,r).join(", ")
if(!(i.length>t))return r===n.length||i.length<=t?i:"".concat(i.slice(0,t),"...")}return""}(e)),l={type:s,value:a,mechanism:{handled:i,synthetic:o}}
if(null!=t&&t.syntheticException){var c=Rn(null==t?void 0:t.syntheticException,1)
c.length&&(l.stacktrace={frames:c,type:"raw"})}return{$exception_list:[l],$exception_level:jn(e.level)?e.level:"error"}}(o,t)
if(z(n)&&V(r)){var u="Error",d=r,f=r.match(On)
return f&&(u=f[1],d=f[2]),An(d,p(p({},t),{},{overrideExceptionType:u,defaultExceptionMessage:d}))}return An(o,t)}function Dn(e){var t,n
return(null===(t=JSON.stringify(e,(n=[],function(e,t){if(G(t)){for(;n.length>0&&n[n.length-1]!==this;)n.pop()
return n.includes(t)?"[Circular]":(n.push(t),t)}return t})))||void 0===t?void 0:t.length)||0}function Bn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6606028.8
if(e.size>=t&&e.data.length>1){var n=Math.floor(e.data.length/2),r=e.data.slice(0,n),i=e.data.slice(n)
return[Bn({size:Dn(r),data:r,sessionId:e.sessionId,windowId:e.windowId}),Bn({size:Dn(i),data:i,sessionId:e.sessionId,windowId:e.windowId})].flatMap((e=>e))}return[e]}var qn=(e=>(e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin",e))(qn||{}),Hn=(e=>(e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration",e[e.Selection=14]="Selection",e[e.AdoptedStyleSheet=15]="AdoptedStyleSheet",e[e.CustomElement=16]="CustomElement",e))(Hn||{}),Un="[SessionRecording]",Gn="redacted",Wn={initiatorTypes:["audio","beacon","body","css","early-hint","embed","fetch","frame","iframe","icon","image","img","input","link","navigation","object","ping","script","track","video","xmlhttprequest"],maskRequestFn:e=>e,recordHeaders:!1,recordBody:!1,recordInitialRequests:!1,recordPerformance:!1,performanceEntryTypeToObserve:["first-input","navigation","paint","resource"],payloadSizeLimitBytes:1e6,payloadHostDenyList:[".lr-ingest.io",".ingest.sentry.io",".clarity.ms","analytics.google.com"]},zn=["authorization","x-forwarded-for","authorization","cookie","set-cookie","x-api-key","x-real-ip","remote-addr","forwarded","proxy-authorization","x-csrf-token","x-csrftoken","x-xsrf-token"],Vn=["password","secret","passwd","api_key","apikey","auth","credentials","mysql_pwd","privatekey","private_key","token"],Qn=["/s/","/e/","/i/"]
function Jn(e,t,n,r){if(K(e))return e
var i=(null==t?void 0:t["content-length"])||function(e){return new Blob([e]).size}(e)
return V(i)&&(i=parseInt(i)),i>n?Un+" ".concat(r," body too large to record (").concat(i," bytes)"):e}function Kn(e,t){if(K(e))return e
var n=e
return St(n,!1)||(n=Un+" "+t+" body "+Gn),se(Vn,(e=>{var r,i
null!==(r=n)&&void 0!==r&&r.length&&-1!==(null===(i=n)||void 0===i?void 0:i.indexOf(e))&&(n=Un+" "+t+" body "+Gn+" as might contain: "+e)})),n}var Xn=(e,t)=>{var n,r,i,o={payloadSizeLimitBytes:Wn.payloadSizeLimitBytes,performanceEntryTypeToObserve:[...Wn.performanceEntryTypeToObserve],payloadHostDenyList:[...t.payloadHostDenyList||[],...Wn.payloadHostDenyList]},s=!1!==e.session_recording.recordHeaders&&t.recordHeaders,a=!1!==e.session_recording.recordBody&&t.recordBody,l=!1!==e.capture_performance&&t.recordPerformance,c=(n=o,i=Math.min(1e6,null!==(r=n.payloadSizeLimitBytes)&&void 0!==r?r:1e6),e=>(null!=e&&e.requestBody&&(e.requestBody=Jn(e.requestBody,e.requestHeaders,i,"Request")),null!=e&&e.responseBody&&(e.responseBody=Jn(e.responseBody,e.responseHeaders,i,"Response")),e)),u=t=>{return c(((e,t)=>{var n,r=It(e.name),i=0===t.indexOf("http")?null===(n=It(t))||void 0===n?void 0:n.pathname:t
"/"===i&&(i="")
var o=null==r?void 0:r.pathname.replace(i||"","")
if(!(r&&o&&Qn.some((e=>0===o.indexOf(e)))))return e})((r=(n=t).requestHeaders,K(r)||se(Object.keys(null!=r?r:{}),(e=>{zn.includes(e.toLowerCase())&&(r[e]=Gn)})),n),e.api_host))
var n,r},d=U(e.session_recording.maskNetworkRequestFn)
return d&&U(e.session_recording.maskCapturedNetworkRequestFn)&&ne.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."),d&&(e.session_recording.maskCapturedNetworkRequestFn=t=>{var n=e.session_recording.maskNetworkRequestFn({url:t.name})
return p(p({},t),{},{name:null==n?void 0:n.url})}),o.maskRequestFn=U(e.session_recording.maskCapturedNetworkRequestFn)?t=>{var n,r,i,o=u(t)
return o&&null!==(n=null===(r=(i=e.session_recording).maskCapturedNetworkRequestFn)||void 0===r?void 0:r.call(i,o))&&void 0!==n?n:void 0}:e=>function(e){if(!z(e))return e.requestBody=Kn(e.requestBody,"Request"),e.responseBody=Kn(e.responseBody,"Response"),e}(u(e)),p(p(p({},Wn),o),{},{recordHeaders:s,recordBody:a,recordPerformance:l,recordInitialRequests:l})}
function Yn(e,t,n,r,i){return t>n&&(ne.warn("min cannot be greater than max."),t=n),X(e)?e>n?(r&&ne.warn(r+" cannot be  greater than max: "+n+". Using max value instead."),n):e<t?(r&&ne.warn(r+" cannot be less than min: "+t+". Using min value instead."),t):e:(r&&ne.warn(r+" must be a number. using max or fallback. max: "+n+", fallback: "+i),Yn(i||n,t,n,r))}class Zn{constructor(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
h(this,"bucketSize",100),h(this,"refillRate",10),h(this,"mutationBuckets",{}),h(this,"loggedTracker",{}),h(this,"refillBuckets",(()=>{Object.keys(this.mutationBuckets).forEach((e=>{this.mutationBuckets[e]=this.mutationBuckets[e]+this.refillRate,this.mutationBuckets[e]>=this.bucketSize&&delete this.mutationBuckets[e]}))})),h(this,"getNodeOrRelevantParent",(e=>{var t=this.rrweb.mirror.getNode(e)
if("svg"!==(null==t?void 0:t.nodeName)&&t instanceof Element){var n=t.closest("svg")
if(n)return[this.rrweb.mirror.getId(n),n]}return[e,t]})),h(this,"numberOfChanges",(e=>{var t,n,r,i,o,s,a,l
return(null!==(t=null===(n=e.removes)||void 0===n?void 0:n.length)&&void 0!==t?t:0)+(null!==(r=null===(i=e.attributes)||void 0===i?void 0:i.length)&&void 0!==r?r:0)+(null!==(o=null===(s=e.texts)||void 0===s?void 0:s.length)&&void 0!==o?o:0)+(null!==(a=null===(l=e.adds)||void 0===l?void 0:l.length)&&void 0!==a?a:0)})),h(this,"throttleMutations",(e=>{if(3!==e.type||0!==e.data.source)return e
var t=e.data,n=this.numberOfChanges(t)
t.attributes&&(t.attributes=t.attributes.filter((e=>{var t,n,r,[i,o]=this.getNodeOrRelevantParent(e.id)
return 0!==this.mutationBuckets[i]&&(this.mutationBuckets[i]=null!==(t=this.mutationBuckets[i])&&void 0!==t?t:this.bucketSize,this.mutationBuckets[i]=Math.max(this.mutationBuckets[i]-1,0),0===this.mutationBuckets[i]&&(this.loggedTracker[i]||(this.loggedTracker[i]=!0,null===(n=(r=this.options).onBlockedNode)||void 0===n||n.call(r,i,o))),e)})))
var r=this.numberOfChanges(t)
return 0!==r||n===r?e:void 0})),this.rrweb=e,this.options=r,this.refillRate=Yn(null!==(t=this.options.refillRate)&&void 0!==t?t:this.refillRate,0,100,"mutation throttling refill rate"),this.bucketSize=Yn(null!==(n=this.options.bucketSize)&&void 0!==n?n:this.bucketSize,0,100,"mutation throttling bucket size"),setInterval((()=>{this.refillBuckets()}),1e3)}}var er=Uint8Array,tr=Uint16Array,nr=Uint32Array,rr=new er([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ir=new er([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),or=new er([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),sr=function(e,t){for(var n=new tr(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1]
var i=new nr(n[30])
for(r=1;r<30;++r)for(var o=n[r];o<n[r+1];++o)i[o]=o-n[r]<<5|r
return[n,i]},ar=sr(rr,2),lr=ar[0],cr=ar[1]
lr[28]=258,cr[258]=28
for(var ur=sr(ir,0)[1],dr=new tr(32768),fr=0;fr<32768;++fr){var pr=(43690&fr)>>>1|(21845&fr)<<1
pr=(61680&(pr=(52428&pr)>>>2|(13107&pr)<<2))>>>4|(3855&pr)<<4,dr[fr]=((65280&pr)>>>8|(255&pr)<<8)>>>1}var hr=function(e,t,n){for(var r=e.length,i=0,o=new tr(t);i<r;++i)++o[e[i]-1]
var s,a=new tr(t)
for(i=0;i<t;++i)a[i]=a[i-1]+o[i-1]<<1
for(s=new tr(r),i=0;i<r;++i)s[i]=dr[a[e[i]-1]++]>>>15-e[i]
return s},vr=new er(288)
for(fr=0;fr<144;++fr)vr[fr]=8
for(fr=144;fr<256;++fr)vr[fr]=9
for(fr=256;fr<280;++fr)vr[fr]=7
for(fr=280;fr<288;++fr)vr[fr]=8
var gr=new er(32)
for(fr=0;fr<32;++fr)gr[fr]=5
var _r=hr(vr,9),mr=hr(gr,5),br=function(e){return(e/8>>0)+(7&e&&1)},yr=function(e,t,n){(null==n||n>e.length)&&(n=e.length)
var r=new(e instanceof tr?tr:e instanceof nr?nr:er)(n-t)
return r.set(e.subarray(t,n)),r},wr=function(e,t,n){n<<=7&t
var r=t/8>>0
e[r]|=n,e[r+1]|=n>>>8},kr=function(e,t,n){n<<=7&t
var r=t/8>>0
e[r]|=n,e[r+1]|=n>>>8,e[r+2]|=n>>>16},Sr=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]})
var i=n.length,o=n.slice()
if(!i)return[new er(0),0]
if(1==i){var s=new er(n[0].s+1)
return s[n[0].s]=1,[s,1]}n.sort((function(e,t){return e.f-t.f})),n.push({s:-1,f:25001})
var a=n[0],l=n[1],c=0,u=1,d=2
for(n[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=i-1;)a=n[n[c].f<n[d].f?c++:d++],l=n[c!=u&&n[c].f<n[d].f?c++:d++],n[u++]={s:-1,f:a.f+l.f,l:a,r:l}
var f=o[0].s
for(r=1;r<i;++r)o[r].s>f&&(f=o[r].s)
var p=new tr(f+1),h=xr(n[u-1],p,0)
if(h>t){r=0
var v=0,g=h-t,_=1<<g
for(o.sort((function(e,t){return p[t.s]-p[e.s]||e.f-t.f}));r<i;++r){var m=o[r].s
if(!(p[m]>t))break
v+=_-(1<<h-p[m]),p[m]=t}for(v>>>=g;v>0;){var b=o[r].s
p[b]<t?v-=1<<t-p[b]++-1:++r}for(;r>=0&&v;--r){var y=o[r].s
p[y]==t&&(--p[y],++v)}h=t}return[new er(p),h]},xr=function(e,t,n){return-1==e.s?Math.max(xr(e.l,t,n+1),xr(e.r,t,n+1)):t[e.s]=n},Er=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new tr(++t),r=0,i=e[0],o=1,s=function(e){n[r++]=e},a=1;a<=t;++a)if(e[a]==i&&a!=t)++o
else{if(!i&&o>2){for(;o>138;o-=138)s(32754)
o>2&&(s(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(s(i),--o;o>6;o-=6)s(8304)
o>2&&(s(o-3<<5|8208),o=0)}for(;o--;)s(i)
o=1,i=e[a]}return[n.subarray(0,r),t]},Cr=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r]
return n},Pr=function(e,t,n){var r=n.length,i=br(t+2)
e[i]=255&r,e[i+1]=r>>>8,e[i+2]=255^e[i],e[i+3]=255^e[i+1]
for(var o=0;o<r;++o)e[i+o+4]=n[o]
return 8*(i+4+r)},Tr=function(e,t,n,r,i,o,s,a,l,c,u){wr(t,u++,n),++i[256]
for(var d=Sr(i,15),f=d[0],p=d[1],h=Sr(o,15),v=h[0],g=h[1],_=Er(f),m=_[0],b=_[1],y=Er(v),w=y[0],k=y[1],S=new tr(19),x=0;x<m.length;++x)S[31&m[x]]++
for(x=0;x<w.length;++x)S[31&w[x]]++
for(var E=Sr(S,7),C=E[0],P=E[1],T=19;T>4&&!C[or[T-1]];--T);var $,L,I,O,R=c+5<<3,M=Cr(i,vr)+Cr(o,gr)+s,F=Cr(i,f)+Cr(o,v)+s+14+3*T+Cr(S,C)+(2*S[16]+3*S[17]+7*S[18])
if(R<=M&&R<=F)return Pr(t,u,e.subarray(l,l+c))
if(wr(t,u,1+(F<M)),u+=2,F<M){$=hr(f,p),L=f,I=hr(v,g),O=v
var A=hr(C,P)
for(wr(t,u,b-257),wr(t,u+5,k-1),wr(t,u+10,T-4),u+=14,x=0;x<T;++x)wr(t,u+3*x,C[or[x]])
u+=3*T
for(var j=[m,w],N=0;N<2;++N){var D=j[N]
for(x=0;x<D.length;++x){var B=31&D[x]
wr(t,u,A[B]),u+=C[B],B>15&&(wr(t,u,D[x]>>>5&127),u+=D[x]>>>12)}}}else $=_r,L=vr,I=mr,O=gr
for(x=0;x<a;++x)if(r[x]>255){B=r[x]>>>18&31,kr(t,u,$[B+257]),u+=L[B+257],B>7&&(wr(t,u,r[x]>>>23&31),u+=rr[B])
var q=31&r[x]
kr(t,u,I[q]),u+=O[q],q>3&&(kr(t,u,r[x]>>>5&8191),u+=ir[q])}else kr(t,u,$[r[x]]),u+=L[r[x]]
return kr(t,u,$[256]),u+L[256]},$r=new nr([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Lr=function(){for(var e=new nr(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(1&n&&3988292384)^n>>>1
e[t]=n}return e}(),Ir=function(){var e=4294967295
return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=Lr[255&n^t[r]]^n>>>8
e=n},d:function(){return 4294967295^e}}},Or=function(e,t,n,r,i){return function(e,t,n,r,i,o){var s=e.length,a=new er(r+s+5*(1+Math.floor(s/7e3))+i),l=a.subarray(r,a.length-i),c=0
if(!t||s<8)for(var u=0;u<=s;u+=65535){var d=u+65535
d<s?c=Pr(l,c,e.subarray(u,d)):(l[u]=true,c=Pr(l,c,e.subarray(u,s)))}else{for(var f=$r[t-1],p=f>>>13,h=8191&f,v=(1<<n)-1,g=new tr(32768),_=new tr(v+1),m=Math.ceil(n/3),b=2*m,y=function(t){return(e[t]^e[t+1]<<m^e[t+2]<<b)&v},w=new nr(25e3),k=new tr(288),S=new tr(32),x=0,E=0,C=(u=0,0),P=0,T=0;u<s;++u){var $=y(u),L=32767&u,I=_[$]
if(g[L]=I,_[$]=L,P<=u){var O=s-u
if((x>7e3||C>24576)&&O>423){c=Tr(e,l,0,w,k,S,E,C,T,u-T,c),C=x=E=0,T=u
for(var R=0;R<286;++R)k[R]=0
for(R=0;R<30;++R)S[R]=0}var M=2,F=0,A=h,j=L-I&32767
if(O>2&&$==y(u-j))for(var N=Math.min(p,O)-1,D=Math.min(32767,u),B=Math.min(258,O);j<=D&&--A&&L!=I;){if(e[u+M]==e[u+M-j]){for(var q=0;q<B&&e[u+q]==e[u+q-j];++q);if(q>M){if(M=q,F=j,q>N)break
var H=Math.min(j,q-2),U=0
for(R=0;R<H;++R){var G=u-j+R+32768&32767,W=G-g[G]+32768&32767
W>U&&(U=W,I=G)}}}j+=(L=I)-(I=g[L])+32768&32767}if(F){w[C++]=268435456|cr[M]<<18|ur[F]
var z=31&cr[M],V=31&ur[F]
E+=rr[z]+ir[V],++k[257+z],++S[V],P=u+M,++x}else w[C++]=e[u],++k[e[u]]}}c=Tr(e,l,true,w,k,S,E,C,T,u-T,c)}return yr(a,0,r+br(c)+i)}(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,n,r)},Rr=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},Mr=function(e,t){var n=t.filename
if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:9==t.level?2:0,e[9]=3,0!=t.mtime&&Rr(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8
for(var r=0;r<=n.length;++r)e[r+10]=n.charCodeAt(r)}},Fr=function(e){return 10+(e.filename&&e.filename.length+1||0)}
function Ar(e,t){void 0===t&&(t={})
var n=Ir(),r=e.length
n.p(e)
var i=Or(e,t,Fr(t),8),o=i.length
return Mr(i,t),Rr(i,o-8,n.d()),Rr(i,o-4,r),i}function jr(e,t){var n=e.length
if("undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e)
for(var r=new er(e.length+(e.length>>>1)),i=0,o=function(e){r[i++]=e},s=0;s<n;++s){if(i+5>r.length){var a=new er(i+8+(n-s<<1))
a.set(r),r=a}var l=e.charCodeAt(s)
l<128||t?o(l):l<2048?(o(192|l>>>6),o(128|63&l)):l>55295&&l<57344?(o(240|(l=65536+(1047552&l)|1023&e.charCodeAt(++s))>>>18),o(128|l>>>12&63),o(128|l>>>6&63),o(128|63&l)):(o(224|l>>>12),o(128|l>>>6&63),o(128|63&l))}return yr(r,0,i)}var Nr="[SessionRecording]",Dr=re(Nr)
function Br(){var e,t
return null==L||null===(e=L.__PosthogExtensions__)||void 0===e||null===(t=e.rrweb)||void 0===t?void 0:t.record}var qr=[Hn.MouseMove,Hn.MouseInteraction,Hn.Scroll,Hn.ViewportResize,Hn.Input,Hn.TouchMove,Hn.MediaInteraction,Hn.Drag],Hr=e=>({rrwebMethod:e,enqueuedAt:Date.now(),attempt:1})
function Ur(e){return function(e,t){for(var n="",r=0;r<e.length;){var i=e[r++]
n+=String.fromCharCode(i)}return n}(Ar(jr(JSON.stringify(e))))}function Gr(e){return e.type===qn.Custom&&"sessionIdle"===e.data.tag}function Wr(e,t){return t.some((t=>"regex"===t.matching&&new RegExp(t.url).test(e)))}class zr{get sessionIdleThresholdMilliseconds(){return this.instance.config.session_recording.session_idle_threshold_ms||3e5}get started(){return this._captureStarted}get sessionManager(){if(!this.instance.sessionManager)throw new Error(Nr+" must be started with a valid sessionManager.")
return this.instance.sessionManager}get fullSnapshotIntervalMillis(){var e,t
return"trigger_pending"===this.triggerStatus?6e4:null!==(e=null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.full_snapshot_interval_millis)&&void 0!==e?e:3e5}get isSampled(){var e=this.instance.get_property(Fe)
return Y(e)?e:null}get sessionDuration(){var e,t,n=null===(e=this.buffer)||void 0===e?void 0:e.data[(null===(t=this.buffer)||void 0===t?void 0:t.data.length)-1],{sessionStartTimestamp:r}=this.sessionManager.checkAndGetSessionAndWindowId(!0)
return n?n.timestamp-r:null}get isRecordingEnabled(){var e=!!this.instance.get_property(Ce),t=!this.instance.config.disable_session_recording
return _&&e&&t}get isConsoleLogCaptureEnabled(){var e=!!this.instance.get_property(Pe),t=this.instance.config.enable_recording_console_log
return null!=t?t:e}get canvasRecording(){var e,t,n,r,i,o,s=this.instance.config.session_recording.captureCanvas,a=this.instance.get_property(Le),l=null!==(e=null!==(t=null==s?void 0:s.recordCanvas)&&void 0!==t?t:null==a?void 0:a.enabled)&&void 0!==e&&e,c=null!==(n=null!==(r=null==s?void 0:s.canvasFps)&&void 0!==r?r:null==a?void 0:a.fps)&&void 0!==n?n:4,u=null!==(i=null!==(o=null==s?void 0:s.canvasQuality)&&void 0!==o?o:null==a?void 0:a.quality)&&void 0!==i?i:.4
if("string"==typeof u){var d=parseFloat(u)
u=isNaN(d)?.4:d}return{enabled:l,fps:Yn(c,0,12,"canvas recording fps",4),quality:Yn(u,0,1,"canvas recording quality",.4)}}get networkPayloadCapture(){var e,t,n=this.instance.get_property(Te),r={recordHeaders:null===(e=this.instance.config.session_recording)||void 0===e?void 0:e.recordHeaders,recordBody:null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.recordBody},i=(null==r?void 0:r.recordHeaders)||(null==n?void 0:n.recordHeaders),o=(null==r?void 0:r.recordBody)||(null==n?void 0:n.recordBody),s=G(this.instance.config.capture_performance)?this.instance.config.capture_performance.network_timing:this.instance.config.capture_performance,a=!!(Y(s)?s:null==n?void 0:n.capturePerformance)
return i||o||a?{recordHeaders:i,recordBody:o,recordPerformance:a}:void 0}get masking(){var e,t,n,r,i,o,s=this.instance.get_property($e),a={maskAllInputs:null===(e=this.instance.config.session_recording)||void 0===e?void 0:e.maskAllInputs,maskTextSelector:null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.maskTextSelector,blockSelector:null===(n=this.instance.config.session_recording)||void 0===n?void 0:n.blockSelector},l=null!==(r=null==a?void 0:a.maskAllInputs)&&void 0!==r?r:null==s?void 0:s.maskAllInputs,c=null!==(i=null==a?void 0:a.maskTextSelector)&&void 0!==i?i:null==s?void 0:s.maskTextSelector,u=null!==(o=null==a?void 0:a.blockSelector)&&void 0!==o?o:null==s?void 0:s.blockSelector
return z(l)&&z(c)&&z(u)?void 0:{maskAllInputs:null==l||l,maskTextSelector:c,blockSelector:u}}get sampleRate(){var e=this.instance.get_property(Ie)
return X(e)?e:null}get minimumDuration(){var e=this.instance.get_property(Oe)
return X(e)?e:null}get status(){return this.receivedDecide?this.isRecordingEnabled?!1===this.isSampled?"disabled":this._urlBlocked?"paused":K(this._linkedFlag)||this._linkedFlagSeen?"trigger_pending"===this.triggerStatus?"buffering":Y(this.isSampled)?this.isSampled?"sampled":"disabled":"active":"buffering":"disabled":"buffering"}get urlTriggerStatus(){var e
return 0===this._urlTriggers.length?"trigger_disabled":(null===(e=this.instance)||void 0===e?void 0:e.get_property(Ae))===this.sessionId?"trigger_activated":"trigger_pending"}get eventTriggerStatus(){var e
return 0===this._eventTriggers.length?"trigger_disabled":(null===(e=this.instance)||void 0===e?void 0:e.get_property(je))===this.sessionId?"trigger_activated":"trigger_pending"}get triggerStatus(){var e="trigger_activated"===this.eventTriggerStatus||"trigger_activated"===this.urlTriggerStatus,t="trigger_pending"===this.eventTriggerStatus||"trigger_pending"===this.urlTriggerStatus
return e?"trigger_activated":t?"trigger_pending":"trigger_disabled"}constructor(e){if(h(this,"queuedRRWebEvents",[]),h(this,"isIdle","unknown"),h(this,"_linkedFlagSeen",!1),h(this,"_lastActivityTimestamp",Date.now()),h(this,"_linkedFlag",null),h(this,"_removePageViewCaptureHook",void 0),h(this,"_onSessionIdListener",void 0),h(this,"_persistDecideOnSessionListener",void 0),h(this,"_samplingSessionListener",void 0),h(this,"_urlTriggers",[]),h(this,"_urlBlocklist",[]),h(this,"_urlBlocked",!1),h(this,"_eventTriggers",[]),h(this,"_removeEventTriggerCaptureHook",void 0),h(this,"_forceAllowLocalhostNetworkCapture",!1),h(this,"_onBeforeUnload",(()=>{this._flushBuffer()})),h(this,"_onOffline",(()=>{this._tryAddCustomEvent("browser offline",{})})),h(this,"_onOnline",(()=>{this._tryAddCustomEvent("browser online",{})})),h(this,"_onVisibilityChange",(()=>{if(null!=S&&S.visibilityState){var e="window "+S.visibilityState
this._tryAddCustomEvent(e,{})}})),this.instance=e,this._captureStarted=!1,this._endpoint="/s/",this.stopRrweb=void 0,this.receivedDecide=!1,!this.instance.sessionManager)throw Dr.error("started without valid sessionManager"),new Error(Nr+" started without valid sessionManager. This is a bug.")
if(this.instance.config.__preview_experimental_cookieless_mode)throw new Error(Nr+" cannot be used with __preview_experimental_cookieless_mode.")
var{sessionId:t,windowId:n}=this.sessionManager.checkAndGetSessionAndWindowId()
this.sessionId=t,this.windowId=n,this.buffer=this.clearBuffer(),this.sessionIdleThresholdMilliseconds>=this.sessionManager.sessionTimeoutMs&&Dr.warn("session_idle_threshold_ms (".concat(this.sessionIdleThresholdMilliseconds,") is greater than the session timeout (").concat(this.sessionManager.sessionTimeoutMs,"). Session will never be detected as idle"))}startIfEnabledOrStop(e){this.isRecordingEnabled?(this._startCapture(e),ge(_,"beforeunload",this._onBeforeUnload),ge(_,"offline",this._onOffline),ge(_,"online",this._onOnline),ge(_,"visibilitychange",this._onVisibilityChange),this._setupSampling(),this._addEventTriggerListener(),K(this._removePageViewCaptureHook)&&(this._removePageViewCaptureHook=this.instance.on("eventCaptured",(e=>{try{if("$pageview"===e.event){var t=null!=e&&e.properties.$current_url?this._maskUrl(null==e?void 0:e.properties.$current_url):""
if(!t)return
this._tryAddCustomEvent("$pageview",{href:t})}}catch(e){Dr.error("Could not add $pageview to rrweb session",e)}}))),this._onSessionIdListener||(this._onSessionIdListener=this.sessionManager.onSessionId(((e,t,n)=>{var r,i,o,s
n&&(this._tryAddCustomEvent("$session_id_change",{sessionId:e,windowId:t,changeReason:n}),null===(r=this.instance)||void 0===r||null===(i=r.persistence)||void 0===i||i.unregister(je),null===(o=this.instance)||void 0===o||null===(s=o.persistence)||void 0===s||s.unregister(Ae))})))):this.stopRecording()}stopRecording(){var e,t,n,r
this._captureStarted&&this.stopRrweb&&(this.stopRrweb(),this.stopRrweb=void 0,this._captureStarted=!1,null==_||_.removeEventListener("beforeunload",this._onBeforeUnload),null==_||_.removeEventListener("offline",this._onOffline),null==_||_.removeEventListener("online",this._onOnline),null==_||_.removeEventListener("visibilitychange",this._onVisibilityChange),this.clearBuffer(),clearInterval(this._fullSnapshotTimer),null===(e=this._removePageViewCaptureHook)||void 0===e||e.call(this),this._removePageViewCaptureHook=void 0,null===(t=this._removeEventTriggerCaptureHook)||void 0===t||t.call(this),this._removeEventTriggerCaptureHook=void 0,null===(n=this._onSessionIdListener)||void 0===n||n.call(this),this._onSessionIdListener=void 0,null===(r=this._samplingSessionListener)||void 0===r||r.call(this),this._samplingSessionListener=void 0,Dr.info("stopped"))}_resetSampling(){var e
null===(e=this.instance.persistence)||void 0===e||e.unregister(Fe)}makeSamplingDecision(e){var t,n=this.sessionId!==e,r=this.sampleRate
if(X(r)){var i=this.isSampled,o=n||!Y(i),s=o?function(e,t){return function(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0
return Math.abs(t)}(e)%100<Yn(100*t,0,100)}(e,r):i
o&&(s?this._reportStarted("sampled"):Dr.warn("Sample rate (".concat(r,") has determined that this sessionId (").concat(e,") will not be sent to the server.")),this._tryAddCustomEvent("samplingDecisionMade",{sampleRate:r,isSampled:s})),null===(t=this.instance.persistence)||void 0===t||t.register({[Fe]:s})}else this._resetSampling()}onRemoteConfig(e){var t,n,r,i,o,s
if(this._tryAddCustomEvent("$remote_config_received",e),this._persistRemoteConfig(e),this._linkedFlag=(null===(t=e.sessionRecording)||void 0===t?void 0:t.linkedFlag)||null,null!==(n=e.sessionRecording)&&void 0!==n&&n.endpoint&&(this._endpoint=null===(s=e.sessionRecording)||void 0===s?void 0:s.endpoint),this._setupSampling(),!K(this._linkedFlag)&&!this._linkedFlagSeen){var a=V(this._linkedFlag)?this._linkedFlag:this._linkedFlag.flag,l=V(this._linkedFlag)?null:this._linkedFlag.variant
this.instance.onFeatureFlags(((e,t)=>{var n=G(t)&&a in t,r=l?t[a]===l:n
r&&this._reportStarted("linked_flag_matched",{linkedFlag:a,linkedVariant:l}),this._linkedFlagSeen=r}))}null!==(r=e.sessionRecording)&&void 0!==r&&r.urlTriggers&&(this._urlTriggers=e.sessionRecording.urlTriggers),null!==(i=e.sessionRecording)&&void 0!==i&&i.urlBlocklist&&(this._urlBlocklist=e.sessionRecording.urlBlocklist),null!==(o=e.sessionRecording)&&void 0!==o&&o.eventTriggers&&(this._eventTriggers=e.sessionRecording.eventTriggers),this.receivedDecide=!0,this.startIfEnabledOrStop()}_setupSampling(){X(this.sampleRate)&&K(this._samplingSessionListener)&&(this._samplingSessionListener=this.sessionManager.onSessionId((e=>{this.makeSamplingDecision(e)})))}_persistRemoteConfig(e){if(this.instance.persistence){var t,n=this.instance.persistence,r=()=>{var t,r,i,o,s,a,l,c,u,d=null===(t=e.sessionRecording)||void 0===t?void 0:t.sampleRate,f=K(d)?null:parseFloat(d)
K(f)&&this._resetSampling()
var h=null===(r=e.sessionRecording)||void 0===r?void 0:r.minimumDurationMilliseconds
n.register({[Ce]:!!e.sessionRecording,[Pe]:null===(i=e.sessionRecording)||void 0===i?void 0:i.consoleLogRecordingEnabled,[Te]:p({capturePerformance:e.capturePerformance},null===(o=e.sessionRecording)||void 0===o?void 0:o.networkPayloadCapture),[$e]:null===(s=e.sessionRecording)||void 0===s?void 0:s.masking,[Le]:{enabled:null===(a=e.sessionRecording)||void 0===a?void 0:a.recordCanvas,fps:null===(l=e.sessionRecording)||void 0===l?void 0:l.canvasFps,quality:null===(c=e.sessionRecording)||void 0===c?void 0:c.canvasQuality},[Ie]:f,[Oe]:z(h)?null:h,[Re]:null===(u=e.sessionRecording)||void 0===u?void 0:u.scriptConfig})}
r(),null===(t=this._persistDecideOnSessionListener)||void 0===t||t.call(this),this._persistDecideOnSessionListener=this.sessionManager.onSessionId(r)}}log(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log"
null===(t=this.instance.sessionRecording)||void 0===t||t.onRRwebEmit({type:6,data:{plugin:"rrweb/console@1",payload:{level:n,trace:[],payload:[JSON.stringify(e)]}},timestamp:Date.now()})}_startCapture(e){var t,n
z(Object.assign)||z(Array.from)||(this._captureStarted||this.instance.config.disable_session_recording||this.instance.consent.isOptedOut())||(this._captureStarted=!0,this.sessionManager.checkAndGetSessionAndWindowId(),Br()?this._onScriptLoaded():null===(t=L.__PosthogExtensions__)||void 0===t||null===(n=t.loadExternalDependency)||void 0===n||n.call(t,this.instance,this.scriptName,(e=>{if(e)return Dr.error("could not load recorder",e)
this._onScriptLoaded()})),Dr.info("starting"),"active"===this.status&&this._reportStarted(e||"recording_initialized"))}get scriptName(){var e,t,n
return(null===(e=this.instance)||void 0===e||null===(t=e.persistence)||void 0===t||null===(n=t.get_property(Re))||void 0===n?void 0:n.script)||"recorder"}isInteractiveEvent(e){var t
return 3===e.type&&-1!==qr.indexOf(null===(t=e.data)||void 0===t?void 0:t.source)}_updateWindowAndSessionIds(e){var t=this.isInteractiveEvent(e)
t||this.isIdle||e.timestamp-this._lastActivityTimestamp>this.sessionIdleThresholdMilliseconds&&(this.isIdle=!0,clearInterval(this._fullSnapshotTimer),this._tryAddCustomEvent("sessionIdle",{eventTimestamp:e.timestamp,lastActivityTimestamp:this._lastActivityTimestamp,threshold:this.sessionIdleThresholdMilliseconds,bufferLength:this.buffer.data.length,bufferSize:this.buffer.size}),this._flushBuffer())
var n=!1
if(t&&(this._lastActivityTimestamp=e.timestamp,this.isIdle)){var r="unknown"===this.isIdle
this.isIdle=!1,r||(this._tryAddCustomEvent("sessionNoLongerIdle",{reason:"user activity",type:e.type}),n=!0)}if(!this.isIdle){var{windowId:i,sessionId:o}=this.sessionManager.checkAndGetSessionAndWindowId(!t,e.timestamp),s=this.sessionId!==o,a=this.windowId!==i
this.windowId=i,this.sessionId=o,s||a?(this.stopRecording(),this.startIfEnabledOrStop("session_id_changed")):n&&this._scheduleFullSnapshot()}}_tryRRWebMethod(e){try{return e.rrwebMethod(),!0}catch(t){return this.queuedRRWebEvents.length<10?this.queuedRRWebEvents.push({enqueuedAt:e.enqueuedAt||Date.now(),attempt:e.attempt++,rrwebMethod:e.rrwebMethod}):Dr.warn("could not emit queued rrweb event.",t,e),!1}}_tryAddCustomEvent(e,t){return this._tryRRWebMethod(Hr((()=>Br().addCustomEvent(e,t))))}_tryTakeFullSnapshot(){return this._tryRRWebMethod(Hr((()=>Br().takeFullSnapshot())))}_onScriptLoaded(){var e,t,n,r,i={blockClass:"ph-no-capture",blockSelector:void 0,ignoreClass:"ph-ignore-input",maskTextClass:"ph-mask",maskTextSelector:void 0,maskTextFn:void 0,maskAllInputs:!0,maskInputOptions:{password:!0},maskInputFn:void 0,slimDOMOptions:{},collectFonts:!1,inlineStylesheet:!0,recordCrossOriginIframes:!1},o=this.instance.config.session_recording
for(var[s,a]of Object.entries(o||{}))s in i&&("maskInputOptions"===s?i.maskInputOptions=p({password:!0},a):i[s]=a)
this.canvasRecording&&this.canvasRecording.enabled&&(i.recordCanvas=!0,i.sampling={canvas:this.canvasRecording.fps},i.dataURLOptions={type:"image/webp",quality:this.canvasRecording.quality}),this.masking&&(i.maskAllInputs=null===(t=this.masking.maskAllInputs)||void 0===t||t,i.maskTextSelector=null!==(n=this.masking.maskTextSelector)&&void 0!==n?n:void 0,i.blockSelector=null!==(r=this.masking.blockSelector)&&void 0!==r?r:void 0)
var l=Br()
if(l){this.mutationRateLimiter=null!==(e=this.mutationRateLimiter)&&void 0!==e?e:new Zn(l,{refillRate:this.instance.config.session_recording.__mutationRateLimiterRefillRate,bucketSize:this.instance.config.session_recording.__mutationRateLimiterBucketSize,onBlockedNode:(e,t)=>{var n="Too many mutations on node '".concat(e,"'. Rate limiting. This could be due to SVG animations or something similar")
Dr.info(n,{node:t}),this.log(Nr+" "+n,"warn")}})
var c=this._gatherRRWebPlugins()
this.stopRrweb=l(p({emit:e=>{this.onRRwebEmit(e)},plugins:c},i)),this._lastActivityTimestamp=Date.now(),this.isIdle=Y(this.isIdle)?this.isIdle:"unknown",this._tryAddCustomEvent("$session_options",{sessionRecordingOptions:i,activePlugins:c.map((e=>null==e?void 0:e.name))}),this._tryAddCustomEvent("$posthog_config",{config:this.instance.config})}else Dr.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")}_scheduleFullSnapshot(){if(this._fullSnapshotTimer&&clearInterval(this._fullSnapshotTimer),!0!==this.isIdle){var e=this.fullSnapshotIntervalMillis
e&&(this._fullSnapshotTimer=setInterval((()=>{this._tryTakeFullSnapshot()}),e))}}_gatherRRWebPlugins(){var e,t,n,r,i=[],o=null===(e=L.__PosthogExtensions__)||void 0===e||null===(t=e.rrwebPlugins)||void 0===t?void 0:t.getRecordConsolePlugin
o&&this.isConsoleLogCaptureEnabled&&i.push(o())
var s=null===(n=L.__PosthogExtensions__)||void 0===n||null===(r=n.rrwebPlugins)||void 0===r?void 0:r.getRecordNetworkPlugin
return this.networkPayloadCapture&&U(s)&&(!Lt.includes(location.hostname)||this._forceAllowLocalhostNetworkCapture?i.push(s(Xn(this.instance.config,this.networkPayloadCapture))):Dr.info("NetworkCapture not started because we are on localhost.")),i}onRRwebEmit(e){var t
if(this._processQueuedEvents(),e&&G(e)){if(e.type===qn.Meta){var n=this._maskUrl(e.data.href)
if(this._lastHref=n,!n)return
e.data.href=n}else this._pageViewFallBack()
if(this._checkUrlTriggerConditions(),!this._urlBlocked||function(e){return e.type===qn.Custom&&"recording paused"===e.data.tag}(e)){e.type===qn.FullSnapshot&&this._scheduleFullSnapshot(),e.type===qn.FullSnapshot&&"trigger_pending"===this.triggerStatus&&this.clearBuffer()
var r=this.mutationRateLimiter?this.mutationRateLimiter.throttleMutations(e):e
if(r){var i=function(e){var t=e
if(t&&G(t)&&6===t.type&&G(t.data)&&"rrweb/console@1"===t.data.plugin){t.data.payload.payload.length>10&&(t.data.payload.payload=t.data.payload.payload.slice(0,10),t.data.payload.payload.push("...[truncated]"))
for(var n=[],r=0;r<t.data.payload.payload.length;r++)t.data.payload.payload[r]&&t.data.payload.payload[r].length>2e3?n.push(t.data.payload.payload[r].slice(0,2e3)+"...[truncated]"):n.push(t.data.payload.payload[r])
return t.data.payload.payload=n,e}return e}(r)
if(this._updateWindowAndSessionIds(i),!0!==this.isIdle||Gr(i)){if(Gr(i)){var o=i.data.payload
if(o){var s=o.lastActivityTimestamp,a=o.threshold
i.timestamp=s+a}}var l=null===(t=this.instance.config.session_recording.compress_events)||void 0===t||t?function(e){if(Dn(e)<1024)return e
try{if(e.type===qn.FullSnapshot)return p(p({},e),{},{data:Ur(e.data),cv:"2024-10"})
if(e.type===qn.IncrementalSnapshot&&e.data.source===Hn.Mutation)return p(p({},e),{},{cv:"2024-10",data:p(p({},e.data),{},{texts:Ur(e.data.texts),attributes:Ur(e.data.attributes),removes:Ur(e.data.removes),adds:Ur(e.data.adds)})})
if(e.type===qn.IncrementalSnapshot&&e.data.source===Hn.StyleSheetRule)return p(p({},e),{},{cv:"2024-10",data:p(p({},e.data),{},{adds:e.data.adds?Ur(e.data.adds):void 0,removes:e.data.removes?Ur(e.data.removes):void 0})})}catch(e){Dr.error("could not compress event - will use uncompressed event",e)}return e}(i):i,c={$snapshot_bytes:Dn(l),$snapshot_data:l,$session_id:this.sessionId,$window_id:this.windowId}
"disabled"!==this.status?this._captureSnapshotBuffered(c):this.clearBuffer()}}}}}_pageViewFallBack(){if(!this.instance.config.capture_pageview&&_){var e=this._maskUrl(_.location.href)
this._lastHref!==e&&(this._tryAddCustomEvent("$url_changed",{href:e}),this._lastHref=e)}}_processQueuedEvents(){if(this.queuedRRWebEvents.length){var e=[...this.queuedRRWebEvents]
this.queuedRRWebEvents=[],e.forEach((e=>{Date.now()-e.enqueuedAt<=2e3&&this._tryRRWebMethod(e)}))}}_maskUrl(e){var t=this.instance.config.session_recording
if(t.maskNetworkRequestFn){var n,r={url:e}
return null===(n=r=t.maskNetworkRequestFn(r))||void 0===n?void 0:n.url}return e}clearBuffer(){return this.buffer={size:0,data:[],sessionId:this.sessionId,windowId:this.windowId},this.buffer}_flushBuffer(){this.flushBufferTimer&&(clearTimeout(this.flushBufferTimer),this.flushBufferTimer=void 0)
var e=this.minimumDuration,t=this.sessionDuration,n=X(t)&&t>=0,r=X(e)&&n&&t<e
return"buffering"===this.status||"paused"===this.status||"disabled"===this.status||r?(this.flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3),this.buffer):(this.buffer.data.length>0&&Bn(this.buffer).forEach((e=>{this._captureSnapshot({$snapshot_bytes:e.size,$snapshot_data:e.data,$session_id:e.sessionId,$window_id:e.windowId,$lib:"web",$lib_version:I.LIB_VERSION})})),this.clearBuffer())}_captureSnapshotBuffered(e){var t,n=2+((null===(t=this.buffer)||void 0===t?void 0:t.data.length)||0)
!this.isIdle&&(this.buffer.size+e.$snapshot_bytes+n>943718.4||this.buffer.sessionId!==this.sessionId)&&(this.buffer=this._flushBuffer()),this.buffer.size+=e.$snapshot_bytes,this.buffer.data.push(e.$snapshot_data),this.flushBufferTimer||this.isIdle||(this.flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3))}_captureSnapshot(e){this.instance.capture("$snapshot",e,{_url:this.instance.requestRouter.endpointFor("api",this._endpoint),_noTruncate:!0,_batchKey:"recordings",skip_client_rate_limiting:!0})}_checkUrlTriggerConditions(){if(void 0!==_&&_.location.href){var e=_.location.href,t=this._urlBlocked,n=Wr(e,this._urlBlocklist)
n&&!t?this._pauseRecording():!n&&t&&this._resumeRecording(),Wr(e,this._urlTriggers)&&this._activateTrigger("url")}}_activateTrigger(e){var t,n
"trigger_pending"===this.triggerStatus&&(null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n||n.register({["url"===e?Ae:je]:this.sessionId}),this._flushBuffer(),this._reportStarted(e+"_trigger_matched"))}_pauseRecording(){this._urlBlocked||(this._urlBlocked=!0,clearInterval(this._fullSnapshotTimer),Dr.info("recording paused due to URL blocker"),this._tryAddCustomEvent("recording paused",{reason:"url blocker"}))}_resumeRecording(){this._urlBlocked&&(this._urlBlocked=!1,this._tryTakeFullSnapshot(),this._scheduleFullSnapshot(),this._tryAddCustomEvent("recording resumed",{reason:"left blocked url"}),Dr.info("recording resumed"))}_addEventTriggerListener(){0!==this._eventTriggers.length&&K(this._removeEventTriggerCaptureHook)&&(this._removeEventTriggerCaptureHook=this.instance.on("eventCaptured",(e=>{try{this._eventTriggers.includes(e.event)&&this._activateTrigger("event")}catch(e){Dr.error("Could not activate event trigger",e)}})))}overrideLinkedFlag(){this._linkedFlagSeen=!0,this._tryTakeFullSnapshot(),this._reportStarted("linked_flag_overridden")}overrideSampling(){var e
null===(e=this.instance.persistence)||void 0===e||e.register({[Fe]:!0}),this._tryTakeFullSnapshot(),this._reportStarted("sampling_overridden")}overrideTrigger(e){this._activateTrigger(e)}_reportStarted(e,t){this.instance.register_for_session({$session_recording_start_reason:e}),Dr.info(e.replace("_"," "),t),F(["recording_initialized","session_id_changed"],e)||this._tryAddCustomEvent(e,t)}}var Vr=re("[SegmentIntegration]")
var Qr="posthog-js"
function Jr(e){var{organization:t,projectId:n,prefix:r,severityAllowList:i=["error"]}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return o=>{var s,a,l,c,u
if("*"!==i&&!i.includes(o.level)||!e.__loaded)return o
o.tags||(o.tags={})
var d=e.requestRouter.endpointFor("ui","/project/".concat(e.config.token,"/person/").concat(e.get_distinct_id()))
o.tags["PostHog Person URL"]=d,e.sessionRecordingStarted()&&(o.tags["PostHog Recording URL"]=e.get_session_replay_url({withTimestamp:!0}))
var f=(null===(s=o.exception)||void 0===s?void 0:s.values)||[],h=f.map((e=>p(p({},e),{},{stacktrace:e.stacktrace?p(p({},e.stacktrace),{},{type:"raw",frames:(e.stacktrace.frames||[]).map((e=>p(p({},e),{},{platform:"web:javascript"})))}):void 0}))),v={$exception_message:(null===(a=f[0])||void 0===a?void 0:a.value)||o.message,$exception_type:null===(l=f[0])||void 0===l?void 0:l.type,$exception_personURL:d,$exception_level:o.level,$exception_list:h,$sentry_event_id:o.event_id,$sentry_exception:o.exception,$sentry_exception_message:(null===(c=f[0])||void 0===c?void 0:c.value)||o.message,$sentry_exception_type:null===(u=f[0])||void 0===u?void 0:u.type,$sentry_tags:o.tags}
return t&&n&&(v.$sentry_url=(r||"https://sentry.io/organizations/")+t+"/issues/?project="+n+"&query="+o.event_id),e.exceptions.sendExceptionEvent(v),o}}class Kr{constructor(e,t,n,r,i){this.name=Qr,this.setupOnce=function(o){o(Jr(e,{organization:t,projectId:n,prefix:r,severityAllowList:i}))}}}var Xr,Yr=null!=_&&_.location?Mt(_.location.hash,"__posthog")||Mt(location.hash,"state"):null,Zr="_postHogToolbarParams",ei=re("[Toolbar]")
!function(e){e[e.UNINITIALIZED=0]="UNINITIALIZED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(Xr||(Xr={}))
class ti{constructor(e){this.instance=e}setToolbarState(e){L.ph_toolbar_state=e}getToolbarState(){var e
return null!==(e=L.ph_toolbar_state)&&void 0!==e?e:Xr.UNINITIALIZED}maybeLoadToolbar(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
if(!_||!S)return!1
n=null!==(e=n)&&void 0!==e?e:_.location,i=null!==(t=i)&&void 0!==t?t:_.history
try{if(!r){try{_.localStorage.setItem("test","test"),_.localStorage.removeItem("test")}catch(e){return!1}r=null==_?void 0:_.localStorage}var o,s=Yr||Mt(n.hash,"__posthog")||Mt(n.hash,"state"),a=s?ue((()=>JSON.parse(atob(decodeURIComponent(s)))))||ue((()=>JSON.parse(decodeURIComponent(s)))):null
return a&&"ph_authorize"===a.action?((o=a).source="url",o&&Object.keys(o).length>0&&(a.desiredHash?n.hash=a.desiredHash:i?i.replaceState(i.state,"",n.pathname+n.search):n.hash="")):((o=JSON.parse(r.getItem(Zr)||"{}")).source="localstorage",delete o.userIntent),!(!o.token||this.instance.config.token!==o.token||(this.loadToolbar(o),0))}catch(e){return!1}}_callLoadToolbar(e){var t=L.ph_load_toolbar||L.ph_load_editor
!K(t)&&U(t)?t(e,this.instance):ei.warn("No toolbar load function found")}loadToolbar(e){var t=!(null==S||!S.getElementById(Ze))
if(!_||t)return!1
var n="custom"===this.instance.requestRouter.region&&this.instance.config.advanced_disable_toolbar_metrics,r=p(p({token:this.instance.config.token},e),{},{apiURL:this.instance.requestRouter.endpointFor("ui")},n?{instrument:!1}:{})
if(_.localStorage.setItem(Zr,JSON.stringify(p(p({},r),{},{source:void 0}))),this.getToolbarState()===Xr.LOADED)this._callLoadToolbar(r)
else if(this.getToolbarState()===Xr.UNINITIALIZED){var i,o
this.setToolbarState(Xr.LOADING),null===(i=L.__PosthogExtensions__)||void 0===i||null===(o=i.loadExternalDependency)||void 0===o||o.call(i,this.instance,"toolbar",(e=>{if(e)return ei.error("[Toolbar] Failed to load",e),void this.setToolbarState(Xr.UNINITIALIZED)
this.setToolbarState(Xr.LOADED),this._callLoadToolbar(r)})),ge(_,"turbolinks:load",(()=>{this.setToolbarState(Xr.UNINITIALIZED),this.loadToolbar(r)}))}return!0}_loadEditor(e){return this.loadToolbar(e)}maybeLoadEditor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
return this.maybeLoadToolbar(e,t,n)}}var ni=re("[TracingHeaders]")
class ri{constructor(e){h(this,"_restoreXHRPatch",void 0),h(this,"_restoreFetchPatch",void 0),h(this,"_startCapturing",(()=>{var e,t,n,r
z(this._restoreXHRPatch)&&(null===(e=L.__PosthogExtensions__)||void 0===e||null===(t=e.tracingHeadersPatchFns)||void 0===t||t._patchXHR(this.instance.sessionManager)),z(this._restoreFetchPatch)&&(null===(n=L.__PosthogExtensions__)||void 0===n||null===(r=n.tracingHeadersPatchFns)||void 0===r||r._patchFetch(this.instance.sessionManager))})),this.instance=e}_loadScript(e){var t,n,r
null!==(t=L.__PosthogExtensions__)&&void 0!==t&&t.tracingHeadersPatchFns&&e(),null===(n=L.__PosthogExtensions__)||void 0===n||null===(r=n.loadExternalDependency)||void 0===r||r.call(n,this.instance,"tracing-headers",(t=>{if(t)return ni.error("failed to load script",t)
e()}))}startIfEnabledOrStop(){var e,t
this.instance.config.__add_tracing_headers?this._loadScript(this._startCapturing):(null===(e=this._restoreXHRPatch)||void 0===e||e.call(this),null===(t=this._restoreFetchPatch)||void 0===t||t.call(this),this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0)}}var ii=re("[Web Vitals]"),oi=9e5
class si{constructor(e){var t
h(this,"_enabledServerSide",!1),h(this,"_initialized",!1),h(this,"buffer",{url:void 0,metrics:[],firstMetricTimestamp:void 0}),h(this,"_flushToCapture",(()=>{clearTimeout(this._delayedFlushTimer),0!==this.buffer.metrics.length&&(this.instance.capture("$web_vitals",this.buffer.metrics.reduce(((e,t)=>p(p({},e),{},{["$web_vitals_".concat(t.name,"_event")]:p({},t),["$web_vitals_".concat(t.name,"_value")]:t.value})),{})),this.buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0})})),h(this,"_addToBuffer",(e=>{var t,n=null===(t=this.instance.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0)
if(z(n))ii.error("Could not read session ID. Dropping metrics!")
else{this.buffer=this.buffer||{url:void 0,metrics:[],firstMetricTimestamp:void 0}
var r=this._currentURL()
z(r)||(K(null==e?void 0:e.name)||K(null==e?void 0:e.value)?ii.error("Invalid metric received",e):this._maxAllowedValue&&e.value>=this._maxAllowedValue?ii.error("Ignoring metric with value >= "+this._maxAllowedValue,e):(this.buffer.url!==r&&(this._flushToCapture(),this._delayedFlushTimer=setTimeout(this._flushToCapture,this.flushToCaptureTimeoutMs)),z(this.buffer.url)&&(this.buffer.url=r),this.buffer.firstMetricTimestamp=z(this.buffer.firstMetricTimestamp)?Date.now():this.buffer.firstMetricTimestamp,e.attribution&&e.attribution.interactionTargetElement&&(e.attribution.interactionTargetElement=void 0),this.buffer.metrics.push(p(p({},e),{},{$current_url:r,$session_id:n.sessionId,$window_id:n.windowId,timestamp:Date.now()})),this.buffer.metrics.length===this.allowedMetrics.length&&this._flushToCapture()))}})),h(this,"_startCapturing",(()=>{var e,t,n,r,i=L.__PosthogExtensions__
z(i)||z(i.postHogWebVitalsCallbacks)||({onLCP:e,onCLS:t,onFCP:n,onINP:r}=i.postHogWebVitalsCallbacks),e&&t&&n&&r?(this.allowedMetrics.indexOf("LCP")>-1&&e(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("CLS")>-1&&t(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("FCP")>-1&&n(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("INP")>-1&&r(this._addToBuffer.bind(this)),this._initialized=!0):ii.error("web vitals callbacks not loaded - not starting")})),this.instance=e,this._enabledServerSide=!(null===(t=this.instance.persistence)||void 0===t||!t.props[Se]),this.startIfEnabled()}get allowedMetrics(){var e,t,n=G(this.instance.config.capture_performance)?null===(e=this.instance.config.capture_performance)||void 0===e?void 0:e.web_vitals_allowed_metrics:void 0
return z(n)?(null===(t=this.instance.persistence)||void 0===t?void 0:t.props[Ee])||["CLS","FCP","INP","LCP"]:n}get flushToCaptureTimeoutMs(){return(G(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals_delayed_flush_ms:void 0)||5e3}get _maxAllowedValue(){var e=G(this.instance.config.capture_performance)&&X(this.instance.config.capture_performance.__web_vitals_max_value)?this.instance.config.capture_performance.__web_vitals_max_value:oi
return 0<e&&e<=6e4?oi:e}get isEnabled(){var e=null==x?void 0:x.protocol
if("http:"!==e&&"https:"!==e)return ii.info("Web Vitals are disabled on non-http/https protocols"),!1
var t=G(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals:void 0
return Y(t)?t:this._enabledServerSide}startIfEnabled(){this.isEnabled&&!this._initialized&&(ii.info("enabled, starting..."),this.loadScript(this._startCapturing))}onRemoteConfig(e){var t=G(e.capturePerformance)&&!!e.capturePerformance.web_vitals,n=G(e.capturePerformance)?e.capturePerformance.web_vitals_allowed_metrics:void 0
this.instance.persistence&&(this.instance.persistence.register({[Se]:t}),this.instance.persistence.register({[Ee]:n})),this._enabledServerSide=t,this.startIfEnabled()}loadScript(e){var t,n,r
null!==(t=L.__PosthogExtensions__)&&void 0!==t&&t.postHogWebVitalsCallbacks&&e(),null===(n=L.__PosthogExtensions__)||void 0===n||null===(r=n.loadExternalDependency)||void 0===r||r.call(n,this.instance,"web-vitals",(t=>{t?ii.error("failed to load script",t):e()}))}_currentURL(){var e=_?_.location.href:void 0
return e||ii.error("Could not determine current URL"),e}}var ai=re("[Heatmaps]")
function li(e){return G(e)&&"clientX"in e&&"clientY"in e&&X(e.clientX)&&X(e.clientY)}class ci{constructor(e){var t
h(this,"rageclicks",new $t),h(this,"_enabledServerSide",!1),h(this,"_initialized",!1),h(this,"_flushInterval",null),this.instance=e,this._enabledServerSide=!(null===(t=this.instance.persistence)||void 0===t||!t.props[we])}get flushIntervalMilliseconds(){var e=5e3
return G(this.instance.config.capture_heatmaps)&&this.instance.config.capture_heatmaps.flush_interval_milliseconds&&(e=this.instance.config.capture_heatmaps.flush_interval_milliseconds),e}get isEnabled(){return z(this.instance.config.capture_heatmaps)?z(this.instance.config.enable_heatmaps)?this._enabledServerSide:this.instance.config.enable_heatmaps:!1!==this.instance.config.capture_heatmaps}startIfEnabled(){if(this.isEnabled){if(this._initialized)return
ai.info("starting..."),this._setupListeners(),this._flushInterval=setInterval(this.flush.bind(this),this.flushIntervalMilliseconds)}else{var e,t
clearInterval(null!==(e=this._flushInterval)&&void 0!==e?e:void 0),null===(t=this.deadClicksCapture)||void 0===t||t.stop(),this.getAndClearBuffer()}}onRemoteConfig(e){var t=!!e.heatmaps
this.instance.persistence&&this.instance.persistence.register({[we]:t}),this._enabledServerSide=t,this.startIfEnabled()}getAndClearBuffer(){var e=this.buffer
return this.buffer=void 0,e}_onDeadClick(e){this._onClick(e.originalEvent,"deadclick")}_setupListeners(){_&&S&&(ge(_,"beforeunload",this.flush.bind(this)),ge(S,"click",(e=>this._onClick(e||(null==_?void 0:_.event))),{capture:!0}),ge(S,"mousemove",(e=>this._onMouseMove(e||(null==_?void 0:_.event))),{capture:!0}),this.deadClicksCapture=new dn(this.instance,cn,this._onDeadClick.bind(this)),this.deadClicksCapture.startIfEnabled(),this._initialized=!0)}_getProperties(e,t){var n=this.instance.scrollManager.scrollY(),r=this.instance.scrollManager.scrollX(),i=this.instance.scrollManager.scrollElement(),o=function(e,t,n){for(var r=e;r&&rt(r)&&!it(r,"body");){if(r===n)return!1
if(F(t,null==_?void 0:_.getComputedStyle(r).position))return!0
r=ht(r)}return!1}(ft(e),["fixed","sticky"],i)
return{x:e.clientX+(o?0:r),y:e.clientY+(o?0:n),target_fixed:o,type:t}}_onClick(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"click"
if(!nt(e.target)&&li(e)){var r=this._getProperties(e,n)
null!==(t=this.rageclicks)&&void 0!==t&&t.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._capture(p(p({},r),{},{type:"rageclick"})),this._capture(r)}}_onMouseMove(e){!nt(e.target)&&li(e)&&(clearTimeout(this._mouseMoveTimeout),this._mouseMoveTimeout=setTimeout((()=>{this._capture(this._getProperties(e,"mousemove"))}),500))}_capture(e){if(_){var t=_.location.href
this.buffer=this.buffer||{},this.buffer[t]||(this.buffer[t]=[]),this.buffer[t].push(e)}}flush(){this.buffer&&!W(this.buffer)&&this.instance.capture("$$heatmap",{$heatmap_data:this.getAndClearBuffer()})}}class ui{constructor(e){this._instance=e}doPageView(e,t){var n,r=this._previousPageViewProperties(e,t)
return this._currentPageview={pathname:null!==(n=null==_?void 0:_.location.pathname)&&void 0!==n?n:"",pageViewId:t,timestamp:e},this._instance.scrollManager.resetContext(),r}doPageLeave(e){var t
return this._previousPageViewProperties(e,null===(t=this._currentPageview)||void 0===t?void 0:t.pageViewId)}doEvent(){var e
return{$pageview_id:null===(e=this._currentPageview)||void 0===e?void 0:e.pageViewId}}_previousPageViewProperties(e,t){var n=this._currentPageview
if(!n)return{$pageview_id:t}
var r={$pageview_id:t,$prev_pageview_id:n.pageViewId},i=this._instance.scrollManager.getContext()
if(i&&!this._instance.config.disable_scroll_properties){var{maxScrollHeight:o,lastScrollY:s,maxScrollY:a,maxContentHeight:l,lastContentY:c,maxContentY:u}=i
if(!(z(o)||z(s)||z(a)||z(l)||z(c)||z(u))){o=Math.ceil(o),s=Math.ceil(s),a=Math.ceil(a),l=Math.ceil(l),c=Math.ceil(c),u=Math.ceil(u)
var d=o<=1?1:Yn(s/o,0,1),f=o<=1?1:Yn(a/o,0,1),p=l<=1?1:Yn(c/l,0,1),h=l<=1?1:Yn(u/l,0,1)
r=ae(r,{$prev_pageview_last_scroll:s,$prev_pageview_last_scroll_percentage:d,$prev_pageview_max_scroll:a,$prev_pageview_max_scroll_percentage:f,$prev_pageview_last_content:c,$prev_pageview_last_content_percentage:p,$prev_pageview_max_content:u,$prev_pageview_max_content_percentage:h})}}return n.pathname&&(r.$prev_pageview_pathname=n.pathname),n.timestamp&&(r.$prev_pageview_duration=(e.getTime()-n.timestamp.getTime())/1e3),r}}class di{constructor(e){this.instance=e}sendExceptionEvent(e){this.instance.capture("$exception",e,{_noTruncate:!0,_batchKey:"exceptionEvent"})}}var fi,pi="Mobile",hi="iOS",vi="Android",gi="Tablet",_i=vi+" "+gi,mi="iPad",bi="Apple",yi=bi+" Watch",wi="Safari",ki="BlackBerry",Si="Samsung",xi=Si+"Browser",Ei=Si+" Internet",Ci="Chrome",Pi=Ci+" OS",Ti=Ci+" "+hi,$i="Internet Explorer",Li=$i+" "+pi,Ii="Opera",Oi=Ii+" Mini",Ri="Edge",Mi="Microsoft "+Ri,Fi="Firefox",Ai=Fi+" "+hi,ji="Nintendo",Ni="PlayStation",Di="Xbox",Bi=vi+" "+pi,qi=pi+" "+wi,Hi="Windows",Ui=Hi+" Phone",Gi="Nokia",Wi="Ouya",zi="Generic",Vi=zi+" "+pi.toLowerCase(),Qi=zi+" "+gi.toLowerCase(),Ji="Konqueror",Ki="(\\d+(\\.\\d+)?)",Xi=new RegExp("Version/"+Ki),Yi=new RegExp(Di,"i"),Zi=new RegExp(Ni+" \\w+","i"),eo=new RegExp(ji+" \\w+","i"),to=new RegExp(ki+"|PlayBook|BB10","i"),no={"NT3.51":"NT 3.11","NT4.0":"NT 4.0","5.0":"2000",5.1:"XP",5.2:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1",6.4:"10","10.0":"10"},ro=function(e,t){return t=t||"",F(e," OPR/")&&F(e,"Mini")?Oi:F(e," OPR/")?Ii:to.test(e)?ki:F(e,"IE"+pi)||F(e,"WPDesktop")?Li:F(e,xi)?Ei:F(e,Ri)||F(e,"Edg/")?Mi:F(e,"FBIOS")?"Facebook "+pi:F(e,"UCWEB")||F(e,"UCBrowser")?"UC Browser":F(e,"CriOS")?Ti:F(e,"CrMo")||F(e,Ci)?Ci:F(e,vi)&&F(e,wi)?Bi:F(e,"FxiOS")?Ai:F(e.toLowerCase(),Ji.toLowerCase())?Ji:((e,t)=>t&&F(t,bi)||function(e){return F(e,wi)&&!F(e,Ci)&&!F(e,vi)}(e))(e,t)?F(e,pi)?qi:wi:F(e,Fi)?Fi:F(e,"MSIE")||F(e,"Trident/")?$i:F(e,"Gecko")?Fi:""},io={[Li]:[new RegExp("rv:"+Ki)],[Mi]:[new RegExp(Ri+"?\\/"+Ki)],[Ci]:[new RegExp("("+Ci+"|CrMo)\\/"+Ki)],[Ti]:[new RegExp("CriOS\\/"+Ki)],"UC Browser":[new RegExp("(UCBrowser|UCWEB)\\/"+Ki)],[wi]:[Xi],[qi]:[Xi],[Ii]:[new RegExp("(Opera|OPR)\\/"+Ki)],[Fi]:[new RegExp(Fi+"\\/"+Ki)],[Ai]:[new RegExp("FxiOS\\/"+Ki)],[Ji]:[new RegExp("Konqueror[:/]?"+Ki,"i")],[ki]:[new RegExp(ki+" "+Ki),Xi],[Bi]:[new RegExp("android\\s"+Ki,"i")],[Ei]:[new RegExp(xi+"\\/"+Ki)],[$i]:[new RegExp("(rv:|MSIE )"+Ki)],Mozilla:[new RegExp("rv:"+Ki)]},oo=[[new RegExp(Di+"; "+Di+" (.*?)[);]","i"),e=>[Di,e&&e[1]||""]],[new RegExp(ji,"i"),[ji,""]],[new RegExp(Ni,"i"),[Ni,""]],[to,[ki,""]],[new RegExp(Hi,"i"),(e,t)=>{if(/Phone/.test(t)||/WPDesktop/.test(t))return[Ui,""]
if(new RegExp(pi).test(t)&&!/IEMobile\b/.test(t))return[Hi+" "+pi,""]
var n=/Windows NT ([0-9.]+)/i.exec(t)
if(n&&n[1]){var r=n[1],i=no[r]||""
return/arm/i.test(t)&&(i="RT"),[Hi,i]}return[Hi,""]}],[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,e=>{if(e&&e[3]){var t=[e[3],e[4],e[5]||"0"]
return[hi,t.join(".")]}return[hi,""]}],[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,e=>{var t=""
return e&&e.length>=3&&(t=z(e[2])?e[3]:e[2]),["watchOS",t]}],[new RegExp("("+vi+" (\\d+)\\.(\\d+)\\.?(\\d+)?|"+vi+")","i"),e=>{if(e&&e[2]){var t=[e[2],e[3],e[4]||"0"]
return[vi,t.join(".")]}return[vi,""]}],[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,e=>{var t=["Mac OS X",""]
if(e&&e[1]){var n=[e[1],e[2],e[3]||"0"]
t[1]=n.join(".")}return t}],[/Mac/i,["Mac OS X",""]],[/CrOS/,[Pi,""]],[/Linux|debian/i,["Linux",""]]],so=function(e){return eo.test(e)?ji:Zi.test(e)?Ni:Yi.test(e)?Di:new RegExp(Wi,"i").test(e)?Wi:new RegExp("("+Ui+"|WPDesktop)","i").test(e)?Ui:/iPad/.test(e)?mi:/iPod/.test(e)?"iPod Touch":/iPhone/.test(e)?"iPhone":/(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)?yi:to.test(e)?ki:/(kobo)\s(ereader|touch)/i.test(e)?"Kobo":new RegExp(Gi,"i").test(e)?Gi:/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e)||/(kf[a-z]+)( bui|\)).+silk\//i.test(e)?"Kindle Fire":/(Android|ZTE)/i.test(e)?!new RegExp(pi).test(e)||/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e)?/pixel[\daxl ]{1,6}/i.test(e)&&!/pixel c/i.test(e)||/(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e)||/lmy47v/i.test(e)&&!/QTAQZ3/i.test(e)?vi:_i:vi:new RegExp("(pda|"+pi+")","i").test(e)?Vi:new RegExp(gi,"i").test(e)&&!new RegExp(gi+" pc","i").test(e)?Qi:""},ao="https?://(.*)",lo=["gclid","gclsrc","dclid","gbraid","wbraid","fbclid","msclkid","twclid","li_fat_id","igshid","ttclid","rdt_cid","irclid","_kx"],co=le(["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gad_source","mc_cid"],lo),uo="<masked>",fo={campaignParams:function(){var{customTrackedParams:e,maskPersonalDataProperties:t,customPersonalDataProperties:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!S)return{}
var r=t?le([],lo,n||[]):[]
return this._campaignParamsFromUrl(Rt(S.URL,r,uo),e)},_campaignParamsFromUrl:function(e,t){var n=co.concat(t||[]),r={}
return se(n,(function(t){var n=Ot(e,t)
r[t]=n||null})),r},_searchEngine:function(e){return e?0===e.search(ao+"google.([^/?]*)")?"google":0===e.search(ao+"bing.com")?"bing":0===e.search(ao+"yahoo.com")?"yahoo":0===e.search(ao+"duckduckgo.com")?"duckduckgo":null:null},_searchInfoFromReferrer:function(e){var t=fo._searchEngine(e),n="yahoo"!=t?"q":"p",r={}
if(!J(t)){r.$search_engine=t
var i=S?Ot(S.referrer,n):""
i.length&&(r.ph_keyword=i)}return r},searchInfo:function(){var e=null==S?void 0:S.referrer
return e?this._searchInfoFromReferrer(e):{}},browser:ro,browserVersion:function(e,t){var n=ro(e,t),r=io[n]
if(z(r))return null
for(var i=0;i<r.length;i++){var o=r[i],s=e.match(o)
if(s)return parseFloat(s[s.length-2])}return null},browserLanguage:function(){return navigator.language||navigator.userLanguage},browserLanguagePrefix:function(){var e=this.browserLanguage()
return"string"==typeof e?e.split("-")[0]:void 0},os:function(e){for(var t=0;t<oo.length;t++){var[n,r]=oo[t],i=n.exec(e),o=i&&(U(r)?r(i,e):r)
if(o)return o}return["",""]},device:so,deviceType:function(e){var t=so(e)
return t===mi||t===_i||"Kobo"===t||"Kindle Fire"===t||t===Qi?gi:t===ji||t===Di||t===Ni||t===Wi?"Console":t===yi?"Wearable":t?pi:"Desktop"},referrer:function(){return(null==S?void 0:S.referrer)||"$direct"},referringDomain:function(){var e
return null!=S&&S.referrer&&(null===(e=It(S.referrer))||void 0===e?void 0:e.host)||"$direct"},referrerInfo:function(){return{$referrer:this.referrer(),$referring_domain:this.referringDomain()}},personInfo:function(){var{maskPersonalDataProperties:e,customPersonalDataProperties:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e?le([],lo,t||[]):[],r=null==x?void 0:x.href.substring(0,1e3)
return{r:this.referrer().substring(0,1e3),u:r?Rt(r,n,uo):void 0}},personPropsFromInfo:function(e){var t,{r:n,u:r}=e,i={$referrer:n,$referring_domain:null==n?void 0:"$direct"==n?"$direct":null===(t=It(n))||void 0===t?void 0:t.host}
if(r){i.$current_url=r
var o=It(r)
i.$host=null==o?void 0:o.host,i.$pathname=null==o?void 0:o.pathname
var s=this._campaignParamsFromUrl(r)
ae(i,s)}if(n){var a=this._searchInfoFromReferrer(n)
ae(i,a)}return i},initialPersonPropsFromInfo:function(e){var t=this.personPropsFromInfo(e),n={}
return se(t,(function(e,t){n["$initial_".concat(j(t))]=e})),n},timezone:function(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){return}},timezoneOffset:function(){try{return(new Date).getTimezoneOffset()}catch(e){return}},properties:function(){var{maskPersonalDataProperties:e,customPersonalDataProperties:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!T)return{}
var n=e?le([],lo,t||[]):[],[r,i]=fo.os(T)
return ae(fe({$os:r,$os_version:i,$browser:fo.browser(T,navigator.vendor),$device:fo.device(T),$device_type:fo.deviceType(T),$timezone:fo.timezone(),$timezone_offset:fo.timezoneOffset()}),{$current_url:Rt(null==x?void 0:x.href,n,uo),$host:null==x?void 0:x.host,$pathname:null==x?void 0:x.pathname,$raw_user_agent:T.length>1e3?T.substring(0,997)+"...":T,$browser_version:fo.browserVersion(T,navigator.vendor),$browser_language:fo.browserLanguage(),$browser_language_prefix:fo.browserLanguagePrefix(),$screen_height:null==_?void 0:_.screen.height,$screen_width:null==_?void 0:_.screen.width,$viewport_height:null==_?void 0:_.innerHeight,$viewport_width:null==_?void 0:_.innerWidth,$lib:"web",$lib_version:I.LIB_VERSION,$insert_id:Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10),$time:Date.now()/1e3})},people_properties:function(){if(!T)return{}
var[e,t]=fo.os(T)
return ae(fe({$os:e,$os_version:t,$browser:fo.browser(T,navigator.vendor)}),{$browser_version:fo.browserVersion(T,navigator.vendor)})}},po=re("[FeatureFlags]"),ho="$active_feature_flags",vo="$override_feature_flags",go="$feature_flag_payloads",_o="$override_feature_flag_payloads",mo="$feature_flag_request_id",bo=e=>{var t={}
for(var[n,r]of ce(e||{}))r&&(t[n]=r)
return t}
!function(e){e.FeatureFlags="feature_flags",e.Recordings="recordings"}(fi||(fi={}))
class yo{constructor(e){h(this,"_override_warning",!1),h(this,"_hasLoadedFlags",!1),h(this,"_requestInFlight",!1),h(this,"_reloadingDisabled",!1),h(this,"_additionalReloadRequested",!1),h(this,"_decideCalled",!1),h(this,"_flagsLoadedFromRemote",!1),this.instance=e,this.featureFlagEventHandlers=[]}decide(){if(this.instance.config.__preview_remote_config)this._decideCalled=!0
else{var e=!this._reloadDebouncer&&(this.instance.config.advanced_disable_feature_flags||this.instance.config.advanced_disable_feature_flags_on_first_load)
this._callDecideEndpoint({disableFlags:e})}}get hasLoadedFlags(){return this._hasLoadedFlags}getFlags(){return Object.keys(this.getFlagVariants())}getFlagsWithDetails(){var e=this.instance.get_property(Be),t=this.instance.get_property(vo),n=this.instance.get_property(_o)
if(!n&&!t)return e||{}
var r=ae({},e||{}),i=[...new Set([...Object.keys(n||{}),...Object.keys(t||{})])]
for(var o of i){var s,a,l=r[o],c=null==t?void 0:t[o],u=z(c)?null!==(s=null==l?void 0:l.enabled)&&void 0!==s&&s:!!c,d=z(c)?l.variant:"string"==typeof c?c:void 0,f=null==n?void 0:n[o],h=p(p({},l),{},{enabled:u,variant:u?null!=d?d:null==l?void 0:l.variant:void 0})
u!==(null==l?void 0:l.enabled)&&(h.original_enabled=null==l?void 0:l.enabled),d!==(null==l?void 0:l.variant)&&(h.original_variant=null==l?void 0:l.variant),f&&(h.metadata=p(p({},null==l?void 0:l.metadata),{},{payload:f,original_payload:null==l||null===(a=l.metadata)||void 0===a?void 0:a.payload})),r[o]=h}return this._override_warning||(po.warn(" Overriding feature flag details!",{flagDetails:e,overriddenPayloads:n,finalDetails:r}),this._override_warning=!0),r}getFlagVariants(){var e=this.instance.get_property(Ne),t=this.instance.get_property(vo)
if(!t)return e||{}
for(var n=ae({},e),r=Object.keys(t),i=0;i<r.length;i++)n[r[i]]=t[r[i]]
return this._override_warning||(po.warn(" Overriding feature flags!",{enabledFlags:e,overriddenFlags:t,finalFlags:n}),this._override_warning=!0),n}getFlagPayloads(){var e=this.instance.get_property(go),t=this.instance.get_property(_o)
if(!t)return e||{}
for(var n=ae({},e||{}),r=Object.keys(t),i=0;i<r.length;i++)n[r[i]]=t[r[i]]
return this._override_warning||(po.warn(" Overriding feature flag payloads!",{flagPayloads:e,overriddenPayloads:t,finalPayloads:n}),this._override_warning=!0),n}reloadFeatureFlags(){this._reloadingDisabled||this.instance.config.advanced_disable_feature_flags||this._reloadDebouncer||(this._reloadDebouncer=setTimeout((()=>{this._callDecideEndpoint()}),5))}clearDebouncer(){clearTimeout(this._reloadDebouncer),this._reloadDebouncer=void 0}ensureFlagsLoaded(){this._hasLoadedFlags||this._requestInFlight||this._reloadDebouncer||this.reloadFeatureFlags()}setAnonymousDistinctId(e){this.$anon_distinct_id=e}setReloadingPaused(e){this._reloadingDisabled=e}_callDecideEndpoint(e){var t
if(this.clearDebouncer(),!this.instance.config.advanced_disable_decide)if(this._requestInFlight)this._additionalReloadRequested=!0
else{var n={token:this.instance.config.token,distinct_id:this.instance.get_distinct_id(),groups:this.instance.getGroups(),$anon_distinct_id:this.$anon_distinct_id,person_properties:p(p({},(null===(t=this.instance.persistence)||void 0===t?void 0:t.get_initial_props())||{}),this.instance.get_property(qe)||{}),group_properties:this.instance.get_property(He)};(null!=e&&e.disableFlags||this.instance.config.advanced_disable_feature_flags)&&(n.disable_flags=!0)
var r=this.instance.config.__preview_flags_v2&&this.instance.config.__preview_remote_config
r&&(n.timezone=fo.timezone()),this._requestInFlight=!0,this.instance._send_request({method:"POST",url:this.instance.requestRouter.endpointFor("api",r?"/flags/?v=2":"/decide/?v=4"),data:n,compression:this.instance.config.disable_compression?void 0:g.Base64,timeout:this.instance.config.feature_flag_request_timeout_ms,callback:e=>{var t,r,i,o=!0
200===e.statusCode&&(this._additionalReloadRequested||(this.$anon_distinct_id=void 0),o=!1),this._requestInFlight=!1,this._decideCalled||(this._decideCalled=!0,this.instance._onRemoteConfig(null!==(i=e.json)&&void 0!==i?i:{})),n.disable_flags&&!this._additionalReloadRequested||(this._flagsLoadedFromRemote=!o,e.json&&null!==(t=e.json.quotaLimited)&&void 0!==t&&t.includes(fi.FeatureFlags)?po.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more."):(this.receivedFeatureFlags(null!==(r=e.json)&&void 0!==r?r:{},o),this._additionalReloadRequested&&(this._additionalReloadRequested=!1,this._callDecideEndpoint())))}})}}getFeatureFlag(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0){var n=this.getFlagVariants()[e],r="".concat(n),i=this.instance.get_property(mo)||void 0,o=this.instance.get_property(We)||{}
if((t.send_event||!("send_event"in t))&&(!(e in o)||!o[e].includes(r))){var s,a,l,c,u,d,f,p,h,v,g
H(o[e])?o[e].push(r):o[e]=[r],null===(s=this.instance.persistence)||void 0===s||s.register({[We]:o})
var _=this.getFeatureFlagDetails(e),m={$feature_flag:e,$feature_flag_response:n,$feature_flag_payload:this.getFeatureFlagPayload(e)||null,$feature_flag_request_id:i,$feature_flag_bootstrapped_response:(null===(a=this.instance.config.bootstrap)||void 0===a||null===(l=a.featureFlags)||void 0===l?void 0:l[e])||null,$feature_flag_bootstrapped_payload:(null===(c=this.instance.config.bootstrap)||void 0===c||null===(u=c.featureFlagPayloads)||void 0===u?void 0:u[e])||null,$used_bootstrap_value:!this._flagsLoadedFromRemote}
z(null==_||null===(d=_.metadata)||void 0===d?void 0:d.version)||(m.$feature_flag_version=_.metadata.version)
var b,y=null!==(f=null==_||null===(p=_.reason)||void 0===p?void 0:p.description)&&void 0!==f?f:null==_||null===(h=_.reason)||void 0===h?void 0:h.code
y&&(m.$feature_flag_reason=y),null!=_&&null!==(v=_.metadata)&&void 0!==v&&v.id&&(m.$feature_flag_id=_.metadata.id),z(null==_?void 0:_.original_variant)&&z(null==_?void 0:_.original_enabled)||(m.$feature_flag_original_response=z(_.original_variant)?_.original_enabled:_.original_variant),null!=_&&null!==(g=_.metadata)&&void 0!==g&&g.original_payload&&(m.$feature_flag_original_payload=null==_||null===(b=_.metadata)||void 0===b?void 0:b.original_payload),this.instance.capture("$feature_flag_called",m)}return n}po.warn('getFeatureFlag for key "'+e+"\" failed. Feature flags didn't load in time.")}getFeatureFlagDetails(e){return this.getFlagsWithDetails()[e]}getFeatureFlagPayload(e){return this.getFlagPayloads()[e]}getRemoteConfigPayload(e,t){var n=this.instance.config.token
this.instance._send_request({method:"POST",url:this.instance.requestRouter.endpointFor("api","/decide/?v=4"),data:{distinct_id:this.instance.get_distinct_id(),token:n},compression:this.instance.config.disable_compression?void 0:g.Base64,timeout:this.instance.config.feature_flag_request_timeout_ms,callback:n=>{var r,i=null===(r=n.json)||void 0===r?void 0:r.featureFlagPayloads
t((null==i?void 0:i[e])||void 0)}})}isFeatureEnabled(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0)return!!this.getFeatureFlag(e,t)
po.warn('isFeatureEnabled for key "'+e+"\" failed. Feature flags didn't load in time.")}addFeatureFlagsHandler(e){this.featureFlagEventHandlers.push(e)}removeFeatureFlagsHandler(e){this.featureFlagEventHandlers=this.featureFlagEventHandlers.filter((t=>t!==e))}receivedFeatureFlags(e,t){if(this.instance.persistence){this._hasLoadedFlags=!0
var n=this.getFlagVariants(),r=this.getFlagPayloads(),i=this.getFlagsWithDetails()
!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=(e=>{var t=e.flags
return t?(e.featureFlags=Object.fromEntries(Object.keys(t).map((e=>{var n
return[e,null!==(n=t[e].variant)&&void 0!==n?n:t[e].enabled]}))),e.featureFlagPayloads=Object.fromEntries(Object.keys(t).filter((e=>t[e].enabled)).filter((e=>{var n
return null===(n=t[e].metadata)||void 0===n?void 0:n.payload})).map((e=>{var n
return[e,null===(n=t[e].metadata)||void 0===n?void 0:n.payload]})))):po.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"),e})(e),s=o.flags,a=o.featureFlags,l=o.featureFlagPayloads
if(a){var c=e.requestId
if(H(a)){po.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.")
var u={}
if(a)for(var d=0;d<a.length;d++)u[a[d]]=!0
t&&t.register({[ho]:a,[Ne]:u})}else{var f=a,h=l,v=s
e.errorsWhileComputingFlags&&(f=p(p({},n),f),h=p(p({},r),h),v=p(p({},i),v)),t&&t.register(p({[ho]:Object.keys(bo(f)),[Ne]:f||{},[go]:h||{},[Be]:v||{}},c?{[mo]:c}:{}))}}}(e,this.instance.persistence,n,r,i),this._fireFeatureFlagsCallbacks(t)}}override(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
po.warn("override is deprecated. Please use overrideFeatureFlags instead."),this.overrideFeatureFlags({flags:e,suppressWarning:t})}overrideFeatureFlags(e){if(!this.instance.__loaded||!this.instance.persistence)return po.uninitializedWarning("posthog.featureFlags.overrideFeatureFlags")
if(!1===e)return this.instance.persistence.unregister(vo),this.instance.persistence.unregister(_o),void this._fireFeatureFlagsCallbacks()
if(e&&"object"==typeof e&&("flags"in e||"payloads"in e)){var t,n=e
if(this._override_warning=Boolean(null!==(t=n.suppressWarning)&&void 0!==t&&t),"flags"in n)if(!1===n.flags)this.instance.persistence.unregister(vo)
else if(n.flags)if(H(n.flags)){for(var r={},i=0;i<n.flags.length;i++)r[n.flags[i]]=!0
this.instance.persistence.register({[vo]:r})}else this.instance.persistence.register({[vo]:n.flags})
return"payloads"in n&&(!1===n.payloads?this.instance.persistence.unregister(_o):n.payloads&&this.instance.persistence.register({[_o]:n.payloads})),void this._fireFeatureFlagsCallbacks()}this._fireFeatureFlagsCallbacks()}onFeatureFlags(e){if(this.addFeatureFlagsHandler(e),this._hasLoadedFlags){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
e(t,n)}return()=>this.removeFeatureFlagsHandler(e)}updateEarlyAccessFeatureEnrollment(e,t){var n,r=(this.instance.get_property(De)||[]).find((t=>t.flagKey===e)),i={["$feature_enrollment/".concat(e)]:t},o={$feature_flag:e,$feature_enrollment:t,$set:i}
r&&(o.$early_access_feature_name=r.name),this.instance.capture("$feature_enrollment_update",o),this.setPersonPropertiesForFlags(i,!1)
var s=p(p({},this.getFlagVariants()),{},{[e]:t})
null===(n=this.instance.persistence)||void 0===n||n.register({[ho]:Object.keys(bo(s)),[Ne]:s}),this._fireFeatureFlagsCallbacks()}getEarlyAccessFeatures(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0,r=this.instance.get_property(De),i=n?"&".concat(n.map((e=>"stage=".concat(e))).join("&")):""
if(r&&!t)return e(r)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api","/api/early_access_features/?token=".concat(this.instance.config.token).concat(i)),method:"GET",callback:t=>{var n
if(t.json){var r=t.json.earlyAccessFeatures
return null===(n=this.instance.persistence)||void 0===n||n.register({[De]:r}),e(r)}}})}_prepareFeatureFlagsForCallbacks(){var e=this.getFlags(),t=this.getFlagVariants()
return{flags:e.filter((e=>t[e])),flagVariants:Object.keys(t).filter((e=>t[e])).reduce(((e,n)=>(e[n]=t[n],e)),{})}}_fireFeatureFlagsCallbacks(e){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
this.featureFlagEventHandlers.forEach((r=>r(t,n,{errorsLoading:e})))}setPersonPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.instance.get_property(qe)||{}
this.instance.register({[qe]:p(p({},n),e)}),t&&this.instance.reloadFeatureFlags()}resetPersonPropertiesForFlags(){this.instance.unregister(qe)}setGroupPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.instance.get_property(He)||{}
0!==Object.keys(n).length&&Object.keys(n).forEach((t=>{n[t]=p(p({},n[t]),e[t]),delete e[t]})),this.instance.register({[He]:p(p({},n),e)}),t&&this.instance.reloadFeatureFlags()}resetGroupPropertiesForFlags(e){if(e){var t=this.instance.get_property(He)||{}
this.instance.register({[He]:p(p({},t),{},{[e]:{}})})}else this.instance.unregister(He)}}var wo=["cookie","localstorage","localstorage+cookie","sessionstorage","memory"]
class ko{constructor(e){this.config=e,this.props={},this.campaign_params_saved=!1,this.name=(e=>{var t=""
return e.token&&(t=e.token.replace(/\+/g,"PL").replace(/\//g,"SL").replace(/=/g,"EQ")),e.persistence_name?"ph_"+e.persistence_name:"ph_"+t+"_posthog"})(e),this.storage=this.buildStorage(e),this.load(),e.debug&&ne.info("Persistence loaded",e.persistence,p({},this.props)),this.update_config(e,e),this.save()}buildStorage(e){-1===wo.indexOf(e.persistence.toLowerCase())&&(ne.critical("Unknown persistence type "+e.persistence+"; falling back to localStorage+cookie"),e.persistence="localStorage+cookie")
var t=e.persistence.toLowerCase()
return"localstorage"===t&&Zt.is_supported()?Zt:"localstorage+cookie"===t&&tn.is_supported()?tn:"sessionstorage"===t&&sn.is_supported()?sn:"memory"===t?rn:"cookie"===t?Xt:tn.is_supported()?tn:Xt}properties(){var e={}
return se(this.props,(function(t,n){if(n===Ne&&G(t))for(var r=Object.keys(t),i=0;i<r.length;i++)e["$feature/".concat(r[i])]=t[r[i]]
else s=n,a=!1,(J(o=tt)?a:w&&o.indexOf===w?-1!=o.indexOf(s):(se(o,(function(e){if(a||(a=e===s))return ie})),a))||(e[n]=t)
var o,s,a})),e}load(){if(!this.disabled){var e=this.storage.parse(this.name)
e&&(this.props=ae({},e))}}save(){this.disabled||this.storage.set(this.name,this.props,this.expire_days,this.cross_subdomain,this.secure,this.config.debug)}remove(){this.storage.remove(this.name,!1),this.storage.remove(this.name,!0)}clear(){this.remove(),this.props={}}register_once(e,t,n){if(G(e)){z(t)&&(t="None"),this.expire_days=z(n)?this.default_expiry:n
var r=!1
if(se(e,((e,n)=>{this.props.hasOwnProperty(n)&&this.props[n]!==t||(this.props[n]=e,r=!0)})),r)return this.save(),!0}return!1}register(e,t){if(G(e)){this.expire_days=z(t)?this.default_expiry:t
var n=!1
if(se(e,((t,r)=>{e.hasOwnProperty(r)&&this.props[r]!==t&&(this.props[r]=t,n=!0)})),n)return this.save(),!0}return!1}unregister(e){e in this.props&&(delete this.props[e],this.save())}update_campaign_params(){if(!this.campaign_params_saved){var e=fo.campaignParams({customTrackedParams:this.config.custom_campaign_params,maskPersonalDataProperties:this.config.mask_personal_data_properties,customPersonalDataProperties:this.config.custom_personal_data_properties})
W(fe(e))||this.register(e),this.campaign_params_saved=!0}}update_search_keyword(){this.register(fo.searchInfo())}update_referrer_info(){this.register_once(fo.referrerInfo(),void 0)}set_initial_person_info(){this.props[Je]||this.props[Ke]||this.register_once({[Xe]:fo.personInfo({maskPersonalDataProperties:this.config.mask_personal_data_properties,customPersonalDataProperties:this.config.custom_personal_data_properties})},void 0)}get_referrer_info(){return fe({$referrer:this.props.$referrer,$referring_domain:this.props.$referring_domain})}get_initial_props(){var e={}
se([Ke,Je],(t=>{var n=this.props[t]
n&&se(n,(function(t,n){e["$initial_"+j(n)]=t}))}))
var t=this.props[Xe]
if(t){var n=fo.initialPersonPropsFromInfo(t)
ae(e,n)}return e}safe_merge(e){return se(this.props,(function(t,n){n in e||(e[n]=t)})),e}update_config(e,t){if(this.default_expiry=this.expire_days=e.cookie_expiration,this.set_disabled(e.disable_persistence),this.set_cross_subdomain(e.cross_subdomain_cookie),this.set_secure(e.secure_cookie),e.persistence!==t.persistence){var n=this.buildStorage(e),r=this.props
this.clear(),this.storage=n,this.props=r,this.save()}}set_disabled(e){this.disabled=e,this.disabled?this.remove():this.save()}set_cross_subdomain(e){e!==this.cross_subdomain&&(this.cross_subdomain=e,this.remove(),this.save())}get_cross_subdomain(){return!!this.cross_subdomain}set_secure(e){e!==this.secure&&(this.secure=e,this.remove(),this.save())}set_event_timer(e,t){var n=this.props[be]||{}
n[e]=t,this.props[be]=n,this.save()}remove_event_timer(e){var t=(this.props[be]||{})[e]
return z(t)||(delete this.props[be][e],this.save()),t}get_property(e){return this.props[e]}set_property(e,t){this.props[e]=t,this.save()}}var So,xo,Eo,Co,Po,To,$o,Lo,Io,Oo,Ro,Mo,Fo,Ao={},jo=[],No=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Do=Array.isArray
function Bo(e,t){for(var n in t)e[n]=t[n]
return e}function qo(e){var t=e.parentNode
t&&t.removeChild(e)}function Ho(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==i?++Eo:i,__i:-1,__u:0}
return null==i&&null!=xo.vnode&&xo.vnode(o),o}function Uo(e){return e.children}function Go(e,t){this.props=e,this.context=t}function Wo(e,t){if(null==t)return e.__?Wo(e.__,e.__i+1):null
for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e
return"function"==typeof e.type?Wo(e):null}function zo(e){var t,n
if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e
break}return zo(e)}}function Vo(e){(!e.__d&&(e.__d=!0)&&Co.push(e)&&!Qo.__r++||Po!==xo.debounceRendering)&&((Po=xo.debounceRendering)||To)(Qo)}function Qo(){var e,t,n,r,i,o,s,a,l
for(Co.sort($o);e=Co.shift();)e.__d&&(t=Co.length,r=void 0,o=(i=(n=e).__v).__e,a=[],l=[],(s=n.__P)&&((r=Bo({},i)).__v=i.__v+1,xo.vnode&&xo.vnode(r),ns(s,r,i,n.__n,void 0!==s.ownerSVGElement,32&i.__u?[o]:null,a,null==o?Wo(i):o,!!(32&i.__u),l),r.__.__k[r.__i]=r,rs(a,r,l),r.__e!=o&&zo(r)),Co.length>t&&Co.sort($o))
Qo.__r=0}function Jo(e,t,n,r,i,o,s,a,l,c,u){var d,f,p,h,v,g=r&&r.__k||jo,_=t.length
for(n.__d=l,function(e,t,n){var r,i,o,s,a,l=t.length,c=n.length,u=c,d=0
for(e.__k=[],r=0;r<l;r++)null!=(i=e.__k[r]=null==(i=t[r])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?Ho(null,i,null,null,i):Do(i)?Ho(Uo,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?Ho(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=e,i.__b=e.__b+1,a=Xo(i,n,s=r+d,u),i.__i=a,o=null,-1!==a&&(u--,(o=n[a])&&(o.__u|=131072)),null==o||null===o.__v?(-1==a&&d--,"function"!=typeof i.type&&(i.__u|=65536)):a!==s&&(a===s+1?d++:a>s?u>l-s?d+=a-s:d--:d=a<s&&a==s-1?a-s:0,a!==r+d&&(i.__u|=65536))):(o=n[r])&&null==o.key&&o.__e&&(o.__e==e.__d&&(e.__d=Wo(o)),os(o,o,!1),n[r]=null,u--)
if(u)for(r=0;r<c;r++)null!=(o=n[r])&&0==(131072&o.__u)&&(o.__e==e.__d&&(e.__d=Wo(o)),os(o,o))}(n,t,g),l=n.__d,d=0;d<_;d++)null!=(p=n.__k[d])&&"boolean"!=typeof p&&"function"!=typeof p&&(f=-1===p.__i?Ao:g[p.__i]||Ao,p.__i=d,ns(e,p,f,i,o,s,a,l,c,u),h=p.__e,p.ref&&f.ref!=p.ref&&(f.ref&&is(f.ref,null,p),u.push(p.ref,p.__c||h,p)),null==v&&null!=h&&(v=h),65536&p.__u||f.__k===p.__k?l=Ko(p,l,e):"function"==typeof p.type&&void 0!==p.__d?l=p.__d:h&&(l=h.nextSibling),p.__d=void 0,p.__u&=-196609)
n.__d=l,n.__e=v}function Ko(e,t,n){var r,i
if("function"==typeof e.type){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=Ko(r[i],t,n))
return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function Xo(e,t,n,r){var i=e.key,o=e.type,s=n-1,a=n+1,l=t[n]
if(null===l||l&&i==l.key&&o===l.type)return n
if(r>(null!=l&&0==(131072&l.__u)?1:0))for(;s>=0||a<t.length;){if(s>=0){if((l=t[s])&&0==(131072&l.__u)&&i==l.key&&o===l.type)return s
s--}if(a<t.length){if((l=t[a])&&0==(131072&l.__u)&&i==l.key&&o===l.type)return a
a++}}return-1}function Yo(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||No.test(t)?n:n+"px"}function Zo(e,t,n,r,i){var o
e:if("style"===t)if("string"==typeof n)e.style.cssText=n
else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Yo(e.style,t,"")
if(n)for(t in n)r&&n[t]===r[t]||Yo(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n.u=r.u:(n.u=Date.now(),e.addEventListener(t,o?ts:es,o)):e.removeEventListener(t,o?ts:es,o)
else{if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s")
else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&"role"!==t&&t in e)try{e[t]=null==n?"":n
break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function es(e){var t=this.l[e.type+!1]
if(e.t){if(e.t<=t.u)return}else e.t=Date.now()
return t(xo.event?xo.event(e):e)}function ts(e){return this.l[e.type+!0](xo.event?xo.event(e):e)}function ns(e,t,n,r,i,o,s,a,l,c){var u,d,f,p,h,v,g,_,m,b,y,w,k,S,x,E=t.type
if(void 0!==t.constructor)return null
128&n.__u&&(l=!!(32&n.__u),o=[a=t.__e=n.__e]),(u=xo.__b)&&u(t)
e:if("function"==typeof E)try{if(_=t.props,m=(u=E.contextType)&&r[u.__c],b=u?m?m.props.value:u.__:r,n.__c?g=(d=t.__c=n.__c).__=d.__E:("prototype"in E&&E.prototype.render?t.__c=d=new E(_,b):(t.__c=d=new Go(_,b),d.constructor=E,d.render=ss),m&&m.sub(d),d.props=_,d.state||(d.state={}),d.context=b,d.__n=r,f=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=E.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=Bo({},d.__s)),Bo(d.__s,E.getDerivedStateFromProps(_,d.__s))),p=d.props,h=d.state,d.__v=t,f)null==E.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount)
else{if(null==E.getDerivedStateFromProps&&_!==p&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(_,b),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(_,d.__s,b)||t.__v===n.__v)){for(t.__v!==n.__v&&(d.props=_,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),y=0;y<d._sb.length;y++)d.__h.push(d._sb[y])
d._sb=[],d.__h.length&&s.push(d)
break e}null!=d.componentWillUpdate&&d.componentWillUpdate(_,d.__s,b),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(p,h,v)}))}if(d.context=b,d.props=_,d.__P=e,d.__e=!1,w=xo.__r,k=0,"prototype"in E&&E.prototype.render){for(d.state=d.__s,d.__d=!1,w&&w(t),u=d.render(d.props,d.state,d.context),S=0;S<d._sb.length;S++)d.__h.push(d._sb[S])
d._sb=[]}else do{d.__d=!1,w&&w(t),u=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++k<25)
d.state=d.__s,null!=d.getChildContext&&(r=Bo(Bo({},r),d.getChildContext())),f||null==d.getSnapshotBeforeUpdate||(v=d.getSnapshotBeforeUpdate(p,h)),Jo(e,Do(x=null!=u&&u.type===Uo&&null==u.key?u.props.children:u)?x:[x],t,n,r,i,o,s,a,l,c),d.base=t.__e,t.__u&=-161,d.__h.length&&s.push(d),g&&(d.__E=d.__=null)}catch(e){t.__v=null,l||null!=o?(t.__e=a,t.__u|=l?160:32,o[o.indexOf(a)]=null):(t.__e=n.__e,t.__k=n.__k),xo.__e(e,t,n)}else null==o&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=function(e,t,n,r,i,o,s,a,l){var c,u,d,f,p,h,v,g=n.props,_=t.props,m=t.type
if("svg"===m&&(i=!0),null!=o)for(c=0;c<o.length;c++)if((p=o[c])&&"setAttribute"in p==!!m&&(m?p.localName===m:3===p.nodeType)){e=p,o[c]=null
break}if(null==e){if(null===m)return document.createTextNode(_)
e=i?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,_.is&&_),o=null,a=!1}if(null===m)g===_||a&&e.data===_||(e.data=_)
else{if(o=o&&So.call(e.childNodes),g=n.props||Ao,!a&&null!=o)for(g={},c=0;c<e.attributes.length;c++)g[(p=e.attributes[c]).name]=p.value
for(c in g)p=g[c],"children"==c||("dangerouslySetInnerHTML"==c?d=p:"key"===c||c in _||Zo(e,c,null,p,i))
for(c in _)p=_[c],"children"==c?f=p:"dangerouslySetInnerHTML"==c?u=p:"value"==c?h=p:"checked"==c?v=p:"key"===c||a&&"function"!=typeof p||g[c]===p||Zo(e,c,p,g[c],i)
if(u)a||d&&(u.__html===d.__html||u.__html===e.innerHTML)||(e.innerHTML=u.__html),t.__k=[]
else if(d&&(e.innerHTML=""),Jo(e,Do(f)?f:[f],t,n,r,i&&"foreignObject"!==m,o,s,o?o[0]:n.__k&&Wo(n,0),a,l),null!=o)for(c=o.length;c--;)null!=o[c]&&qo(o[c])
a||(c="value",void 0!==h&&(h!==e[c]||"progress"===m&&!h||"option"===m&&h!==g[c])&&Zo(e,c,h,g[c],!1),c="checked",void 0!==v&&v!==e[c]&&Zo(e,c,v,g[c],!1))}return e}(n.__e,t,n,r,i,o,s,l,c);(u=xo.diffed)&&u(t)}function rs(e,t,n){t.__d=void 0
for(var r=0;r<n.length;r++)is(n[r],n[++r],n[++r])
xo.__c&&xo.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){xo.__e(e,t.__v)}}))}function is(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){xo.__e(e,n)}}function os(e,t,n){var r,i
if(xo.unmount&&xo.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||is(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){xo.__e(e,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&os(r[i],t,n||"function"!=typeof e.type)
n||null==e.__e||qo(e.__e),e.__=e.__e=e.__d=void 0}function ss(e,t,n){return this.constructor(e,n)}So=jo.slice,xo={__e:function(e,t,n,r){for(var i,o,s;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(e)),s=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(e,r||{}),s=i.__d),s)return i.__E=i}catch(t){e=t}throw e}},Eo=0,Go.prototype.setState=function(e,t){var n
n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=Bo({},this.state),"function"==typeof e&&(e=e(Bo({},n),this.props)),e&&Bo(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),Vo(this))},Go.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Vo(this))},Go.prototype.render=Uo,Co=[],To="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,$o=function(e,t){return e.__v.__b-t.__v.__b},Qo.__r=0,Lo=0,function(e){e.Button="button",e.Tab="tab",e.Selector="selector"}(Io||(Io={})),function(e){e.Popover="popover",e.API="api",e.Widget="widget"}(Oo||(Oo={})),function(e){e.Open="open",e.MultipleChoice="multiple_choice",e.SingleChoice="single_choice",e.Rating="rating",e.Link="link"}(Ro||(Ro={})),function(e){e.NextQuestion="next_question",e.End="end",e.ResponseBased="response_based",e.SpecificQuestion="specific_question"}(Mo||(Mo={})),function(e){e.Once="once",e.Recurring="recurring",e.Always="always"}(Fo||(Fo={})),function(e,t){var n={__c:t="__cC"+Lo++,__:{isPreviewMode:!1,previewPageIndex:0,onPopupSurveyDismissed:()=>{},isPopup:!0,onPreviewSubmit:()=>{}},Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r
return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some((function(e){e.__e=!0,Vo(e)}))},this.sub=function(e){n.push(e)
var t=e.componentWillUnmount
e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}}
n.Provider.__=n.Consumer.contextType=n}()
var as=function(e,t){if(!function(e){try{new RegExp(e)}catch(e){return!1}return!0}(t))return!1
try{return new RegExp(t).test(e)}catch(e){return!1}}
class ls{constructor(){h(this,"events",{}),this.events={}}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),()=>{this.events[e]=this.events[e].filter((e=>e!==t))}}emit(e,t){for(var n of this.events[e]||[])n(t)
for(var r of this.events["*"]||[])r(e,t)}}class cs{constructor(e){h(this,"_debugEventEmitter",new ls),h(this,"checkStep",((e,t)=>this.checkStepEvent(e,t)&&this.checkStepUrl(e,t)&&this.checkStepElement(e,t))),h(this,"checkStepEvent",((e,t)=>null==t||!t.event||(null==e?void 0:e.event)===(null==t?void 0:t.event))),this.instance=e,this.actionEvents=new Set,this.actionRegistry=new Set}init(){var e,t
z(null===(e=this.instance)||void 0===e?void 0:e._addCaptureHook)||(null===(t=this.instance)||void 0===t||t._addCaptureHook(((e,t)=>{this.on(e,t)})))}register(e){var t,n
if(!z(null===(t=this.instance)||void 0===t?void 0:t._addCaptureHook)&&(e.forEach((e=>{var t,n
null===(t=this.actionRegistry)||void 0===t||t.add(e),null===(n=e.steps)||void 0===n||n.forEach((e=>{var t
null===(t=this.actionEvents)||void 0===t||t.add((null==e?void 0:e.event)||"")}))})),null!==(n=this.instance)&&void 0!==n&&n.autocapture)){var r,i=new Set
e.forEach((e=>{var t
null===(t=e.steps)||void 0===t||t.forEach((e=>{null!=e&&e.selector&&i.add(null==e?void 0:e.selector)}))})),null===(r=this.instance)||void 0===r||r.autocapture.setElementSelectors(i)}}on(e,t){var n
null!=t&&0!=e.length&&(this.actionEvents.has(e)||this.actionEvents.has(null==t?void 0:t.event))&&this.actionRegistry&&(null===(n=this.actionRegistry)||void 0===n?void 0:n.size)>0&&this.actionRegistry.forEach((e=>{this.checkAction(t,e)&&this._debugEventEmitter.emit("actionCaptured",e.name)}))}_addActionHook(e){this.onAction("actionCaptured",(t=>e(t)))}checkAction(e,t){if(null==(null==t?void 0:t.steps))return!1
for(var n of t.steps)if(this.checkStep(e,n))return!0
return!1}onAction(e,t){return this._debugEventEmitter.on(e,t)}checkStepUrl(e,t){if(null!=t&&t.url){var n,r=null==e||null===(n=e.properties)||void 0===n?void 0:n.$current_url
if(!r||"string"!=typeof r)return!1
if(!cs.matchString(r,null==t?void 0:t.url,(null==t?void 0:t.url_matching)||"contains"))return!1}return!0}static matchString(e,t,n){switch(n){case"regex":return!!_&&as(e,t)
case"exact":return t===e
case"contains":var r=cs.escapeStringRegexp(t).replace(/_/g,".").replace(/%/g,".*")
return as(e,r)
default:return!1}}static escapeStringRegexp(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}checkStepElement(e,t){if((null!=t&&t.href||null!=t&&t.tag_name||null!=t&&t.text)&&!this.getElementsList(e).some((e=>!(null!=t&&t.href&&!cs.matchString(e.href||"",null==t?void 0:t.href,(null==t?void 0:t.href_matching)||"exact")||null!=t&&t.tag_name&&e.tag_name!==(null==t?void 0:t.tag_name)||null!=t&&t.text&&!cs.matchString(e.text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")&&!cs.matchString(e.$el_text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")))))return!1
if(null!=t&&t.selector){var n,r=null==e||null===(n=e.properties)||void 0===n?void 0:n.$element_selectors
if(!r)return!1
if(!r.includes(null==t?void 0:t.selector))return!1}return!0}getElementsList(e){return null==(null==e?void 0:e.properties.$elements)?[]:null==e?void 0:e.properties.$elements}}class us{constructor(e){this.instance=e,this.eventToSurveys=new Map,this.actionToSurveys=new Map}register(e){var t
z(null===(t=this.instance)||void 0===t?void 0:t._addCaptureHook)||(this.setupEventBasedSurveys(e),this.setupActionBasedSurveys(e))}setupActionBasedSurveys(e){var t=e.filter((e=>{var t,n,r,i
return(null===(t=e.conditions)||void 0===t?void 0:t.actions)&&(null===(n=e.conditions)||void 0===n||null===(r=n.actions)||void 0===r||null===(i=r.values)||void 0===i?void 0:i.length)>0}))
0!==t.length&&(null==this.actionMatcher&&(this.actionMatcher=new cs(this.instance),this.actionMatcher.init(),this.actionMatcher._addActionHook((e=>{this.onAction(e)}))),t.forEach((e=>{var t,n,r,i,o,s,a,l,c,u
e.conditions&&null!==(t=e.conditions)&&void 0!==t&&t.actions&&null!==(n=e.conditions)&&void 0!==n&&null!==(r=n.actions)&&void 0!==r&&r.values&&(null===(i=e.conditions)||void 0===i||null===(o=i.actions)||void 0===o||null===(s=o.values)||void 0===s?void 0:s.length)>0&&(null===(a=this.actionMatcher)||void 0===a||a.register(e.conditions.actions.values),null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c||null===(u=c.values)||void 0===u||u.forEach((t=>{if(t&&t.name){var n=this.actionToSurveys.get(t.name)
n&&n.push(e.id),this.actionToSurveys.set(t.name,n||[e.id])}})))})))}setupEventBasedSurveys(e){var t
0!==e.filter((e=>{var t,n,r,i
return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(r=n.events)||void 0===r||null===(i=r.values)||void 0===i?void 0:i.length)>0})).length&&(null===(t=this.instance)||void 0===t||t._addCaptureHook(((e,t)=>{this.onEvent(e,t)})),e.forEach((e=>{var t,n,r
null===(t=e.conditions)||void 0===t||null===(n=t.events)||void 0===n||null===(r=n.values)||void 0===r||r.forEach((t=>{if(t&&t.name){var n=this.eventToSurveys.get(t.name)
n&&n.push(e.id),this.eventToSurveys.set(t.name,n||[e.id])}}))})))}onEvent(e,t){var n,r,i=(null===(n=this.instance)||void 0===n||null===(r=n.persistence)||void 0===r?void 0:r.props[Ge])||[]
if(us.SURVEY_SHOWN_EVENT_NAME==e&&t&&i.length>0){var o,s=null==t||null===(o=t.properties)||void 0===o?void 0:o.$survey_id
if(s){var a=i.indexOf(s)
a>=0&&(i.splice(a,1),this._updateActivatedSurveys(i))}}else this.eventToSurveys.has(e)&&this._updateActivatedSurveys(i.concat(this.eventToSurveys.get(e)||[]))}onAction(e){var t,n,r=(null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n?void 0:n.props[Ge])||[]
this.actionToSurveys.has(e)&&this._updateActivatedSurveys(r.concat(this.actionToSurveys.get(e)||[]))}_updateActivatedSurveys(e){var t,n
null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n||n.register({[Ge]:[...new Set(e)]})}getSurveys(){var e,t
return(null===(e=this.instance)||void 0===e||null===(t=e.persistence)||void 0===t?void 0:t.props[Ge])||[]}getEventToSurveys(){return this.eventToSurveys}_getActionMatcher(){return this.actionMatcher}}h(us,"SURVEY_SHOWN_EVENT_NAME","survey shown")
var ds=re("[Surveys]"),fs={icontains:(e,t)=>e.some((e=>t.toLowerCase().includes(e.toLowerCase()))),not_icontains:(e,t)=>e.every((e=>!t.toLowerCase().includes(e.toLowerCase()))),regex:(e,t)=>e.some((e=>as(t,e))),not_regex:(e,t)=>e.every((e=>!as(t,e))),exact:(e,t)=>e.some((e=>t===e)),is_not:(e,t)=>e.every((e=>t!==e))}
function ps(e){return null!=e?e:"icontains"}class hs{constructor(e){h(this,"_isFetchingSurveys",!1),h(this,"_isInitializingSurveys",!1),h(this,"_surveyCallbacks",[]),this.instance=e,this._surveyEventReceiver=null}onRemoteConfig(e){var t=e.surveys
if(K(t))return ds.warn("Decide not loaded yet. Not loading surveys.")
var n=H(t)
this._hasSurveys=n?t.length>0:t,ds.info("decide response received, hasSurveys: ".concat(this._hasSurveys)),this._hasSurveys&&this.loadIfEnabled()}reset(){localStorage.removeItem("lastSeenSurveyDate")
var e=(()=>{for(var e=[],t=0;t<localStorage.length;t++){var n=localStorage.key(t)
null!=n&&n.startsWith("seenSurvey_")&&e.push(n)}return e})()
e.forEach((e=>localStorage.removeItem(e)))}loadIfEnabled(){if(!this._surveyManager)if(this._isInitializingSurveys)ds.info("Already initializing surveys, skipping...")
else if(this.instance.config.disable_surveys)ds.info("Disabled. Not loading surveys.")
else{var e=null==L?void 0:L.__PosthogExtensions__
if(e)if(this._hasSurveys){this._isInitializingSurveys=!0
try{var t=e.generateSurveys
if(t)this._surveyManager=t(this.instance),this._isInitializingSurveys=!1,this._surveyEventReceiver=new us(this.instance),ds.info("Surveys loaded successfully"),this._notifySurveyCallbacks({isLoaded:!0})
else{var n=e.loadExternalDependency
if(n)n(this.instance,"surveys",(t=>{if(t||!e.generateSurveys)return ds.error("Could not load surveys script",t),void(this._isInitializingSurveys=!1)
this._surveyManager=e.generateSurveys(this.instance),this._isInitializingSurveys=!1,this._surveyEventReceiver=new us(this.instance),ds.info("Surveys loaded successfully"),this._notifySurveyCallbacks({isLoaded:!0})}))
else{var r="PostHog loadExternalDependency extension not found. Cannot load remote config."
ds.error(r),this._isInitializingSurveys=!1,this._notifySurveyCallbacks({isLoaded:!1,error:r})}}}catch(e){throw ds.error("Error initializing surveys",e),this._isInitializingSurveys=!1,this._notifySurveyCallbacks({isLoaded:!1,error:"Error initializing surveys"}),e}}else ds.info("No surveys to load.")
else ds.error("PostHog Extensions not found.")}}onSurveysLoaded(e){return this._surveyCallbacks.push(e),this._surveyManager&&this._notifySurveyCallbacks({isLoaded:!0}),()=>{this._surveyCallbacks=this._surveyCallbacks.filter((t=>t!==e))}}getSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(this.instance.config.disable_surveys)return ds.info("Disabled. Not loading surveys."),e([])
var n=this.instance.get_property(Ue)
if(n&&!t)return e(n,{isLoaded:!0})
if(this._isFetchingSurveys)return e([],{isLoaded:!1,error:"Surveys are already being loaded"})
try{this._isFetchingSurveys=!0,this.instance._send_request({url:this.instance.requestRouter.endpointFor("api","/api/surveys/?token=".concat(this.instance.config.token)),method:"GET",timeout:this.instance.config.surveys_request_timeout_ms,callback:t=>{var n
this._isFetchingSurveys=!1
var r=t.statusCode
if(200!==r||!t.json){var i="Surveys API could not be loaded, status: ".concat(r)
return ds.error(i),e([],{isLoaded:!1,error:i})}var o,s=t.json.surveys||[],a=s.filter((e=>{var t,n,r,i,o,s,a,l,c,u,d,f
return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(r=n.events)||void 0===r?void 0:r.values)&&(null===(i=e.conditions)||void 0===i||null===(o=i.events)||void 0===o||null===(s=o.values)||void 0===s?void 0:s.length)>0||(null===(a=e.conditions)||void 0===a?void 0:a.actions)&&(null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c?void 0:c.values)&&(null===(u=e.conditions)||void 0===u||null===(d=u.actions)||void 0===d||null===(f=d.values)||void 0===f?void 0:f.length)>0}))
return a.length>0&&(null===(o=this._surveyEventReceiver)||void 0===o||o.register(a)),null===(n=this.instance.persistence)||void 0===n||n.register({[Ue]:s}),e(s,{isLoaded:!0})}})}catch(e){throw this._isFetchingSurveys=!1,e}}_notifySurveyCallbacks(e){for(var t of this._surveyCallbacks)try{e.isLoaded?this.getSurveys(t):t([],e)}catch(e){ds.error("Error in survey callback",e)}}isSurveyFeatureFlagEnabled(e){return!e||this.instance.featureFlags.isFeatureEnabled(e)}getActiveMatchingSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.getSurveys((t=>{var n,r=t.filter((e=>!(!e.start_date||e.end_date))).filter((e=>{var t
if(!e.conditions)return!0
var n=function(e){var t,n,r
if(null===(t=e.conditions)||void 0===t||!t.url)return!0
var i=null==_||null===(n=_.location)||void 0===n?void 0:n.href
if(!i)return!1
var o=[e.conditions.url]
return fs[ps(null===(r=e.conditions)||void 0===r?void 0:r.urlMatchType)](o,i)}(e),r=null===(t=e.conditions)||void 0===t||!t.selector||(null==S?void 0:S.querySelector(e.conditions.selector)),i=function(e){var t,n,r
if(null===(t=e.conditions)||void 0===t||!t.deviceTypes||0===(null===(n=e.conditions)||void 0===n?void 0:n.deviceTypes.length))return!0
if(!T)return!1
var i=fo.deviceType(T)
return fs[ps(null===(r=e.conditions)||void 0===r?void 0:r.deviceTypesMatchType)](e.conditions.deviceTypes,i)}(e)
return n&&r&&i})),i=null===(n=this._surveyEventReceiver)||void 0===n?void 0:n.getSurveys(),o=r.filter((e=>{var t,n,r,o,s,a,l,c,u
if(!(e.linked_flag_key||e.targeting_flag_key||e.internal_targeting_flag_key||null!==(t=e.feature_flag_keys)&&void 0!==t&&t.length))return!0
var d=this.isSurveyFeatureFlagEnabled(e.linked_flag_key),f=this.isSurveyFeatureFlagEnabled(e.targeting_flag_key),p=(null!==(n=null===(r=e.conditions)||void 0===r||null===(o=r.events)||void 0===o||null===(s=o.values)||void 0===s?void 0:s.length)&&void 0!==n?n:0)>0,h=(null!==(a=null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c||null===(u=c.values)||void 0===u?void 0:u.length)&&void 0!==a?a:0)>0,v=!p&&!h||(null==i?void 0:i.includes(e.id)),g=this._canActivateRepeatedly(e)||this.isSurveyFeatureFlagEnabled(e.internal_targeting_flag_key),_=this.checkFlags(e)
return d&&f&&g&&v&&_}))
return e(o)}),t)}checkFlags(e){var t
return null===(t=e.feature_flag_keys)||void 0===t||!t.length||e.feature_flag_keys.every((e=>{var{key:t,value:n}=e
return!t||!n||this.instance.featureFlags.isFeatureEnabled(n)}))}_canActivateRepeatedly(e){var t
return K(null===(t=L.__PosthogExtensions__)||void 0===t?void 0:t.canActivateRepeatedly)?(ds.warn("init was not called"),!1):L.__PosthogExtensions__.canActivateRepeatedly(e)}canRenderSurvey(e){if(K(this._surveyManager))return ds.warn("init was not called"),{visible:!1,disabledReason:"SDK is not enabled or survey functionality is not yet loaded"}
var t=null
return this.getSurveys((n=>{var r=n.filter((t=>t.id===e))[0]
t=r?p({},this._surveyManager.canRenderSurvey(r)):{visible:!1,disabledReason:"Survey not found"}})),t}renderSurvey(e,t){K(this._surveyManager)?ds.warn("init was not called"):this.getSurveys((n=>{var r=n.filter((t=>t.id===e))[0]
this._surveyManager.renderSurvey(r,null==S?void 0:S.querySelector(t))}))}}var vs=re("[RateLimiter]")
class gs{constructor(e){var t,n
h(this,"serverLimits",{}),h(this,"lastEventRateLimited",!1),h(this,"checkForLimiting",(e=>{var t=e.text
if(t&&t.length)try{(JSON.parse(t).quota_limited||[]).forEach((e=>{vs.info("".concat(e||"events"," is quota limited.")),this.serverLimits[e]=(new Date).getTime()+6e4}))}catch(e){return void vs.warn('could not rate limit - continuing. Error: "'.concat(null==e?void 0:e.message,'"'),{text:t})}})),this.instance=e,this.captureEventsPerSecond=(null===(t=e.config.rate_limiting)||void 0===t?void 0:t.events_per_second)||10,this.captureEventsBurstLimit=Math.max((null===(n=e.config.rate_limiting)||void 0===n?void 0:n.events_burst_limit)||10*this.captureEventsPerSecond,this.captureEventsPerSecond),this.lastEventRateLimited=this.clientRateLimitContext(!0).isRateLimited}clientRateLimitContext(){var e,t,n,r=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=(new Date).getTime(),o=null!==(e=null===(t=this.instance.persistence)||void 0===t?void 0:t.get_property(Qe))&&void 0!==e?e:{tokens:this.captureEventsBurstLimit,last:i}
o.tokens+=(i-o.last)/1e3*this.captureEventsPerSecond,o.last=i,o.tokens>this.captureEventsBurstLimit&&(o.tokens=this.captureEventsBurstLimit)
var s=o.tokens<1
return s||r||(o.tokens=Math.max(0,o.tokens-1)),!s||this.lastEventRateLimited||r||this.instance.capture("$$client_ingestion_warning",{$$client_ingestion_warning_message:"posthog-js client rate limited. Config is set to ".concat(this.captureEventsPerSecond," events per second and ").concat(this.captureEventsBurstLimit," events burst limit.")},{skip_client_rate_limiting:!0}),this.lastEventRateLimited=s,null===(n=this.instance.persistence)||void 0===n||n.set_property(Qe,o),{isRateLimited:s,remainingTokens:o.tokens}}isServerRateLimited(e){var t=this.serverLimits[e||"events"]||!1
return!1!==t&&(new Date).getTime()<t}}var _s=re("[RemoteConfig]")
class ms{constructor(e){this.instance=e}get remoteConfig(){var e,t
return null===(e=L._POSTHOG_REMOTE_CONFIG)||void 0===e||null===(t=e[this.instance.config.token])||void 0===t?void 0:t.config}_loadRemoteConfigJs(e){var t,n,r
null!==(t=L.__PosthogExtensions__)&&void 0!==t&&t.loadExternalDependency?null===(n=L.__PosthogExtensions__)||void 0===n||null===(r=n.loadExternalDependency)||void 0===r||r.call(n,this.instance,"remote-config",(()=>e(this.remoteConfig))):(_s.error("PostHog Extensions not found. Cannot load remote config."),e())}_loadRemoteConfigJSON(e){this.instance._send_request({method:"GET",url:this.instance.requestRouter.endpointFor("assets","/array/".concat(this.instance.config.token,"/config")),callback:t=>{e(t.json)}})}load(){try{if(this.remoteConfig)return _s.info("Using preloaded remote config",this.remoteConfig),void this.onRemoteConfig(this.remoteConfig)
if(this.instance.config.advanced_disable_decide)return void _s.warn("Remote config is disabled. Falling back to local config.")
this._loadRemoteConfigJs((e=>{if(!e)return _s.info("No config found after loading remote JS config. Falling back to JSON."),void this._loadRemoteConfigJSON((e=>{this.onRemoteConfig(e)}))
this.onRemoteConfig(e)}))}catch(e){_s.error("Error loading remote config",e)}}onRemoteConfig(e){e?this.instance.config.__preview_remote_config?(this.instance._onRemoteConfig(e),!1!==e.hasFeatureFlags&&this.instance.featureFlags.ensureFlagsLoaded()):_s.info("__preview_remote_config is disabled. Logging config instead",e):_s.error("Failed to fetch remote config from PostHog.")}}var bs=!!C||!!E,ys="text/plain",ws=(e,t)=>{var[n,r]=e.split("?"),i=p({},t)
null==r||r.split("&").forEach((e=>{var[t]=e.split("=")
delete i[t]}))
var o=function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",i=[]
return se(e,(function(e,r){z(e)||z(r)||"undefined"===r||(t=encodeURIComponent((e=>e instanceof File)(e)?e.name:e.toString()),n=encodeURIComponent(r),i[i.length]=n+"="+t)})),i.join(r)}(i)
return o=o?(r?r+"&":"")+o:r,"".concat(n,"?").concat(o)},ks=(e,t)=>JSON.stringify(e,((e,t)=>"bigint"==typeof t?t.toString():t),t),Ss=e=>{var{data:t,compression:n}=e
if(t){if(n===g.GZipJS){var r=Ar(jr(ks(t)),{mtime:0}),i=new Blob([r],{type:ys})
return{contentType:ys,body:i,estimatedSize:i.size}}if(n===g.Base64){var o=function(e){var t,n,r,i,o,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a=0,l=0,c="",u=[]
if(!e)return e
e=function(e){var t,n,r,i,o=""
for(t=n=0,r=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,i=0;i<r;i++){var s=e.charCodeAt(i),a=null
s<128?n++:a=s>127&&s<2048?String.fromCharCode(s>>6|192,63&s|128):String.fromCharCode(s>>12|224,s>>6&63|128,63&s|128),J(a)||(n>t&&(o+=e.substring(t,n)),o+=a,t=n=i+1)}return n>t&&(o+=e.substring(t,e.length)),o}(e)
do{t=(o=e.charCodeAt(a++)<<16|e.charCodeAt(a++)<<8|e.charCodeAt(a++))>>18&63,n=o>>12&63,r=o>>6&63,i=63&o,u[l++]=s.charAt(t)+s.charAt(n)+s.charAt(r)+s.charAt(i)}while(a<e.length)
switch(c=u.join(""),e.length%3){case 1:c=c.slice(0,-2)+"=="
break
case 2:c=c.slice(0,-1)+"="}return c}(ks(t)),s=(e=>"data="+encodeURIComponent("string"==typeof e?e:ks(e)))(o)
return{contentType:"application/x-www-form-urlencoded",body:s,estimatedSize:new Blob([s]).size}}var a=ks(t)
return{contentType:"application/json",body:a,estimatedSize:new Blob([a]).size}}},xs=[]
E&&xs.push({transport:"fetch",method:e=>{var t,n,{contentType:r,body:i,estimatedSize:o}=null!==(t=Ss(e))&&void 0!==t?t:{},s=new Headers
se(e.headers,(function(e,t){s.append(t,e)})),r&&s.append("Content-Type",r)
var a=e.url,l=null
if(P){var c=new P
l={signal:c.signal,timeout:setTimeout((()=>c.abort()),e.timeout)}}E(a,p({method:(null==e?void 0:e.method)||"GET",headers:s,keepalive:"POST"===e.method&&(o||0)<52428.8,body:i,signal:null===(n=l)||void 0===n?void 0:n.signal},e.fetchOptions)).then((t=>t.text().then((n=>{var r,i={statusCode:t.status,text:n}
if(200===t.status)try{i.json=JSON.parse(n)}catch(e){ne.error(e)}null===(r=e.callback)||void 0===r||r.call(e,i)})))).catch((t=>{var n
ne.error(t),null===(n=e.callback)||void 0===n||n.call(e,{statusCode:0,text:t})})).finally((()=>l?clearTimeout(l.timeout):null))}}),C&&xs.push({transport:"XHR",method:e=>{var t,n=new C
n.open(e.method||"GET",e.url,!0)
var{contentType:r,body:i}=null!==(t=Ss(e))&&void 0!==t?t:{}
se(e.headers,(function(e,t){n.setRequestHeader(t,e)})),r&&n.setRequestHeader("Content-Type",r),e.timeout&&(n.timeout=e.timeout),n.withCredentials=!0,n.onreadystatechange=()=>{if(4===n.readyState){var t,r={statusCode:n.status,text:n.responseText}
if(200===n.status)try{r.json=JSON.parse(n.responseText)}catch(e){}null===(t=e.callback)||void 0===t||t.call(e,r)}},n.send(i)}}),null!=k&&k.sendBeacon&&xs.push({transport:"sendBeacon",method:e=>{var t=ws(e.url,{beacon:"1"})
try{var n,{contentType:r,body:i}=null!==(n=Ss(e))&&void 0!==n?n:{},o="string"==typeof i?new Blob([i],{type:r}):i
k.sendBeacon(t,o)}catch(e){}}})
var Es=3e3
class Cs{constructor(e,t){h(this,"isPaused",!0),h(this,"queue",[]),this.flushTimeoutMs=Yn((null==t?void 0:t.flush_interval_ms)||Es,250,5e3,"flush interval",Es),this.sendRequest=e}enqueue(e){this.queue.push(e),this.flushTimeout||this.setFlushTimeout()}unload(){this.clearFlushTimeout()
var e=this.queue.length>0?this.formatQueue():{},t=Object.values(e),n=[...t.filter((e=>0===e.url.indexOf("/e"))),...t.filter((e=>0!==e.url.indexOf("/e")))]
n.map((e=>{this.sendRequest(p(p({},e),{},{transport:"sendBeacon"}))}))}enable(){this.isPaused=!1,this.setFlushTimeout()}setFlushTimeout(){var e=this
this.isPaused||(this.flushTimeout=setTimeout((()=>{if(this.clearFlushTimeout(),this.queue.length>0){var t=this.formatQueue(),n=function(n){var r=t[n],i=(new Date).getTime()
r.data&&H(r.data)&&se(r.data,(e=>{e.offset=Math.abs(e.timestamp-i),delete e.timestamp})),e.sendRequest(r)}
for(var r in t)n(r)}}),this.flushTimeoutMs))}clearFlushTimeout(){clearTimeout(this.flushTimeout),this.flushTimeout=void 0}formatQueue(){var e={}
return se(this.queue,(t=>{var n,r=t,i=(r?r.batchKey:null)||r.url
z(e[i])&&(e[i]=p(p({},r),{},{data:[]})),null===(n=e[i].data)||void 0===n||n.push(r.data)})),this.queue=[],e}}var Ps=["retriesPerformedSoFar"]
class Ts{constructor(e){h(this,"isPolling",!1),h(this,"pollIntervalMs",3e3),h(this,"queue",[]),this.instance=e,this.queue=[],this.areWeOnline=!0,!z(_)&&"onLine"in _.navigator&&(this.areWeOnline=_.navigator.onLine,ge(_,"online",(()=>{this.areWeOnline=!0,this.flush()})),ge(_,"offline",(()=>{this.areWeOnline=!1})))}retriableRequest(e){var{retriesPerformedSoFar:t}=e,n=v(e,Ps)
X(t)&&t>0&&(n.url=ws(n.url,{retry_count:t})),this.instance._send_request(p(p({},n),{},{callback:e=>{var r
200!==e.statusCode&&(e.statusCode<400||e.statusCode>=500)&&(null!=t?t:0)<10?this.enqueue(p({retriesPerformedSoFar:t},n)):null===(r=n.callback)||void 0===r||r.call(n,e)}}))}enqueue(e){var t=e.retriesPerformedSoFar||0
e.retriesPerformedSoFar=t+1
var n=function(e){var t=3e3*Math.pow(2,e),n=t/2,r=Math.min(18e5,t),i=(Math.random()-.5)*(r-n)
return Math.ceil(r+i)}(t),r=Date.now()+n
this.queue.push({retryAt:r,requestOptions:e})
var i="Enqueued failed request for retry in ".concat(n)
navigator.onLine||(i+=" (Browser is offline)"),ne.warn(i),this.isPolling||(this.isPolling=!0,this.poll())}poll(){this.poller&&clearTimeout(this.poller),this.poller=setTimeout((()=>{this.areWeOnline&&this.queue.length>0&&this.flush(),this.poll()}),this.pollIntervalMs)}flush(){var e=Date.now(),t=[],n=this.queue.filter((n=>n.retryAt<e||(t.push(n),!1)))
if(this.queue=t,n.length>0)for(var{requestOptions:r}of n)this.retriableRequest(r)}unload(){for(var{requestOptions:e}of(this.poller&&(clearTimeout(this.poller),this.poller=void 0),this.queue))try{this.instance._send_request(p(p({},e),{},{transport:"sendBeacon"}))}catch(e){ne.error(e)}this.queue=[]}}class $s{constructor(e){h(this,"_updateScrollData",(()=>{var e,t,n,r
this.context||(this.context={})
var i=this.scrollElement(),o=this.scrollY(),s=i?Math.max(0,i.scrollHeight-i.clientHeight):0,a=o+((null==i?void 0:i.clientHeight)||0),l=(null==i?void 0:i.scrollHeight)||0
this.context.lastScrollY=Math.ceil(o),this.context.maxScrollY=Math.max(o,null!==(e=this.context.maxScrollY)&&void 0!==e?e:0),this.context.maxScrollHeight=Math.max(s,null!==(t=this.context.maxScrollHeight)&&void 0!==t?t:0),this.context.lastContentY=a,this.context.maxContentY=Math.max(a,null!==(n=this.context.maxContentY)&&void 0!==n?n:0),this.context.maxContentHeight=Math.max(l,null!==(r=this.context.maxContentHeight)&&void 0!==r?r:0)})),this.instance=e}getContext(){return this.context}resetContext(){var e=this.context
return setTimeout(this._updateScrollData,0),e}startMeasuringScrollPosition(){ge(_,"scroll",this._updateScrollData,{capture:!0}),ge(_,"scrollend",this._updateScrollData,{capture:!0}),ge(_,"resize",this._updateScrollData)}scrollElement(){if(!this.instance.config.scroll_root_selector)return null==_?void 0:_.document.documentElement
var e=H(this.instance.config.scroll_root_selector)?this.instance.config.scroll_root_selector:[this.instance.config.scroll_root_selector]
for(var t of e){var n=null==_?void 0:_.document.querySelector(t)
if(n)return n}}scrollY(){if(this.instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollTop||0}return _&&(_.scrollY||_.pageYOffset||_.document.documentElement.scrollTop)||0}scrollX(){if(this.instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollLeft||0}return _&&(_.scrollX||_.pageXOffset||_.document.documentElement.scrollLeft)||0}}var Ls=e=>fo.personInfo({maskPersonalDataProperties:null==e?void 0:e.config.mask_personal_data_properties,customPersonalDataProperties:null==e?void 0:e.config.custom_personal_data_properties})
class Is{constructor(e,t,n,r){h(this,"_onSessionIdCallback",(e=>{var t=this._getStored()
if(!t||t.sessionId!==e){var n={sessionId:e,props:this._sessionSourceParamGenerator(this.instance)}
this._persistence.register({[Ve]:n})}})),this.instance=e,this._sessionIdManager=t,this._persistence=n,this._sessionSourceParamGenerator=r||Ls,this._sessionIdManager.onSessionId(this._onSessionIdCallback)}_getStored(){return this._persistence.props[Ve]}getSetOnceProps(){var e,t=null===(e=this._getStored())||void 0===e?void 0:e.props
return t?"r"in t?fo.personPropsFromInfo(t):{$referring_domain:t.referringDomain,$pathname:t.initialPathName,utm_source:t.utm_source,utm_campaign:t.utm_campaign,utm_medium:t.utm_medium,utm_content:t.utm_content,utm_term:t.utm_term}:{}}getSessionProps(){var e={}
return se(fe(this.getSetOnceProps()),((t,n)=>{"$current_url"===n&&(n="url"),e["$session_entry_".concat(j(n))]=t})),e}}var Os=re("[SessionId]")
class Rs{constructor(e,t,n){var r
if(h(this,"_sessionIdChangedHandlers",[]),!e.persistence)throw new Error("SessionIdManager requires a PostHogPersistence instance")
if(e.config.__preview_experimental_cookieless_mode)throw new Error("SessionIdManager cannot be used with __preview_experimental_cookieless_mode")
this.config=e.config,this.persistence=e.persistence,this._windowId=void 0,this._sessionId=void 0,this._sessionStartTimestamp=null,this._sessionActivityTimestamp=null,this._sessionIdGenerator=t||zt,this._windowIdGenerator=n||zt
var i=this.config.persistence_name||this.config.token,o=this.config.session_idle_timeout_seconds||1800
if(this._sessionTimeoutMs=1e3*Yn(o,60,36e3,"session_idle_timeout_seconds",1800),e.register({$configured_session_timeout_ms:this._sessionTimeoutMs}),this.resetIdleTimer(),this._window_id_storage_key="ph_"+i+"_window_id",this._primary_window_exists_storage_key="ph_"+i+"_primary_window_exists",this._canUseSessionStorage()){var s=sn.parse(this._window_id_storage_key),a=sn.parse(this._primary_window_exists_storage_key)
s&&!a?this._windowId=s:sn.remove(this._window_id_storage_key),sn.set(this._primary_window_exists_storage_key,!0)}if(null!==(r=this.config.bootstrap)&&void 0!==r&&r.sessionID)try{var l=(e=>{var t=this.config.bootstrap.sessionID.replace(/-/g,"")
if(32!==t.length)throw new Error("Not a valid UUID")
if("7"!==t[12])throw new Error("Not a UUIDv7")
return parseInt(t.substring(0,12),16)})()
this._setSessionId(this.config.bootstrap.sessionID,(new Date).getTime(),l)}catch(e){Os.error("Invalid sessionID in bootstrap",e)}this._listenToReloadWindow()}get sessionTimeoutMs(){return this._sessionTimeoutMs}onSessionId(e){return z(this._sessionIdChangedHandlers)&&(this._sessionIdChangedHandlers=[]),this._sessionIdChangedHandlers.push(e),this._sessionId&&e(this._sessionId,this._windowId),()=>{this._sessionIdChangedHandlers=this._sessionIdChangedHandlers.filter((t=>t!==e))}}_canUseSessionStorage(){return"memory"!==this.config.persistence&&!this.persistence.disabled&&sn.is_supported()}_setWindowId(e){e!==this._windowId&&(this._windowId=e,this._canUseSessionStorage()&&sn.set(this._window_id_storage_key,e))}_getWindowId(){return this._windowId?this._windowId:this._canUseSessionStorage()?sn.parse(this._window_id_storage_key):null}_setSessionId(e,t,n){e===this._sessionId&&t===this._sessionActivityTimestamp&&n===this._sessionStartTimestamp||(this._sessionStartTimestamp=n,this._sessionActivityTimestamp=t,this._sessionId=e,this.persistence.register({[Me]:[t,e,n]}))}_getSessionId(){if(this._sessionId&&this._sessionActivityTimestamp&&this._sessionStartTimestamp)return[this._sessionActivityTimestamp,this._sessionId,this._sessionStartTimestamp]
var e=this.persistence.props[Me]
return H(e)&&2===e.length&&e.push(e[0]),e||[0,null,0]}resetSessionId(){this._setSessionId(null,null,null)}_listenToReloadWindow(){ge(_,"beforeunload",(()=>{this._canUseSessionStorage()&&sn.remove(this._primary_window_exists_storage_key)}),{capture:!1})}checkAndGetSessionAndWindowId(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(this.config.__preview_experimental_cookieless_mode)throw new Error("checkAndGetSessionAndWindowId should not be called in __preview_experimental_cookieless_mode")
var n=t||(new Date).getTime(),[r,i,o]=this._getSessionId(),s=this._getWindowId(),a=X(o)&&o>0&&Math.abs(n-o)>864e5,l=!1,c=!i,u=!e&&Math.abs(n-r)>this.sessionTimeoutMs
c||u||a?(i=this._sessionIdGenerator(),s=this._windowIdGenerator(),Os.info("new session ID generated",{sessionId:i,windowId:s,changeReason:{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}}),o=n,l=!0):s||(s=this._windowIdGenerator(),l=!0)
var d=0===r||!e||a?n:r,f=0===o?(new Date).getTime():o
return this._setWindowId(s),this._setSessionId(i,d,f),e||this.resetIdleTimer(),l&&this._sessionIdChangedHandlers.forEach((e=>e(i,s,l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0))),{sessionId:i,windowId:s,sessionStartTimestamp:f,changeReason:l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0,lastActivityTimestamp:r}}resetIdleTimer(){clearTimeout(this._enforceIdleTimeout),this._enforceIdleTimeout=setTimeout((()=>{this.resetSessionId()}),1.1*this.sessionTimeoutMs)}}var Ms=["$set_once","$set"],Fs=re("[SiteApps]")
class As{constructor(e){this.instance=e,this.bufferedInvocations=[],this.apps={}}get isEnabled(){return!!this.instance.config.opt_in_site_apps}eventCollector(e,t){if(t){var n=this.globalsForEvent(t)
this.bufferedInvocations.push(n),this.bufferedInvocations.length>1e3&&(this.bufferedInvocations=this.bufferedInvocations.slice(10))}}get siteAppLoaders(){var e,t
return null===(e=L._POSTHOG_REMOTE_CONFIG)||void 0===e||null===(t=e[this.instance.config.token])||void 0===t?void 0:t.siteApps}init(){if(this.isEnabled){var e=this.instance._addCaptureHook(this.eventCollector.bind(this))
this.stopBuffering=()=>{e(),this.bufferedInvocations=[],this.stopBuffering=void 0}}}globalsForEvent(e){var t,n,r,i,o,s,a
if(!e)throw new Error("Event payload is required")
var l={},c=this.instance.get_property("$groups")||[],u=this.instance.get_property("$stored_group_properties")||{}
for(var[d,f]of Object.entries(u))l[d]={id:c[d],type:d,properties:f}
var{$set_once:h,$set:g}=e
return{event:p(p({},v(e,Ms)),{},{properties:p(p(p({},e.properties),g?{$set:p(p({},null!==(t=null===(n=e.properties)||void 0===n?void 0:n.$set)&&void 0!==t?t:{}),g)}:{}),h?{$set_once:p(p({},null!==(r=null===(i=e.properties)||void 0===i?void 0:i.$set_once)&&void 0!==r?r:{}),h)}:{}),elements_chain:null!==(o=null===(s=e.properties)||void 0===s?void 0:s.$elements_chain)&&void 0!==o?o:"",distinct_id:null===(a=e.properties)||void 0===a?void 0:a.distinct_id}),person:{properties:this.instance.get_property("$stored_person_properties")},groups:l}}setupSiteApp(e){var t=this.apps[e.id],n=()=>{var n
!t.errored&&this.bufferedInvocations.length&&(Fs.info("Processing ".concat(this.bufferedInvocations.length," events for site app with id ").concat(e.id)),this.bufferedInvocations.forEach((e=>{var n
return null===(n=t.processEvent)||void 0===n?void 0:n.call(t,e)})),t.processedBuffer=!0),Object.values(this.apps).every((e=>e.processedBuffer||e.errored))&&(null===(n=this.stopBuffering)||void 0===n||n.call(this))},r=!1,i=i=>{t.errored=!i,t.loaded=!0,Fs.info("Site app with id ".concat(e.id," ").concat(i?"loaded":"errored")),r&&n()}
try{var{processEvent:o}=e.init({posthog:this.instance,callback:e=>{i(e)}})
o&&(t.processEvent=o),r=!0}catch(t){Fs.error("Error while initializing PostHog app with config id ".concat(e.id),t),i(!1)}if(r&&t.loaded)try{n()}catch(n){Fs.error("Error while processing buffered events PostHog app with config id ".concat(e.id),n),t.errored=!0}}setupSiteApps(){var e=this.siteAppLoaders||[]
for(var t of e)this.apps[t.id]={id:t.id,loaded:!1,errored:!1,processedBuffer:!1}
for(var n of e)this.setupSiteApp(n)}onCapturedEvent(e){if(0!==Object.keys(this.apps).length){var t=this.globalsForEvent(e)
for(var n of Object.values(this.apps))try{var r
null===(r=n.processEvent)||void 0===r||r.call(n,t)}catch(t){Fs.error("Error while processing event ".concat(e.event," for site app ").concat(n.id),t)}}}onRemoteConfig(e){var t,n,r,i=this
if(null!==(t=this.siteAppLoaders)&&void 0!==t&&t.length)return this.isEnabled?(this.setupSiteApps(),void this.instance.on("eventCaptured",(e=>this.onCapturedEvent(e)))):void Fs.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
if(null===(n=this.stopBuffering)||void 0===n||n.call(this),null!==(r=e.siteApps)&&void 0!==r&&r.length)if(this.isEnabled){var o=function(e,t){var n,r
L["__$$ph_site_app_".concat(e)]=i.instance,null===(n=L.__PosthogExtensions__)||void 0===n||null===(r=n.loadSiteApp)||void 0===r||r.call(n,i.instance,t,(t=>{if(t)return Fs.error("Error while initializing PostHog app with config id ".concat(e),t)}))}
for(var{id:s,url:a}of e.siteApps)o(s,a)}else Fs.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')}}var js,Ns=["amazonbot","amazonproductbot","app.hypefactors.com","applebot","archive.org_bot","awariobot","backlinksextendedbot","baiduspider","bingbot","bingpreview","chrome-lighthouse","dataforseobot","deepscan","duckduckbot","facebookexternal","facebookcatalog","http://yandex.com/bots","hubspot","ia_archiver","linkedinbot","meta-externalagent","mj12bot","msnbot","nessus","petalbot","pinterest","prerender","rogerbot","screaming frog","sebot-wa","sitebulb","slackbot","slurp","trendictionbot","turnitin","twitterbot","vercelbot","yahoo! slurp","yandexbot","zoombot","bot.htm","bot.php","(bot;","bot/","crawler","ahrefsbot","ahrefssiteaudit","semrushbot","siteauditbot","splitsignalbot","gptbot","oai-searchbot","chatgpt-user","perplexitybot","better uptime bot","sentryuptimebot","uptimerobot","headlesschrome","cypress","google-hoteladsverifier","adsbot-google","apis-google","duplexweb-google","feedfetcher-google","google favicon","google web preview","google-read-aloud","googlebot","googleweblight","mediapartners-google","storebot-google","bytespider"],Ds=function(e,t){if(!e)return!1
var n=e.toLowerCase()
return Ns.concat(t||[]).some((e=>{var t=e.toLowerCase()
return-1!==n.indexOf(t)}))},Bs=function(e,t){if(!e)return!1
var n=e.userAgent
if(n&&Ds(n,t))return!0
try{var r=null==e?void 0:e.userAgentData
if(null!=r&&r.brands&&r.brands.some((e=>Ds(null==e?void 0:e.brand,t))))return!0}catch(e){}return!!e.webdriver}
function qs(e,t,n){return ks({distinct_id:e,userPropertiesToSet:t,userPropertiesToSetOnce:n})}!function(e){e.US="us",e.EU="eu",e.CUSTOM="custom"}(js||(js={}))
var Hs="i.posthog.com"
class Us{constructor(e){h(this,"_regionCache",{}),this.instance=e}get apiHost(){var e=this.instance.config.api_host.trim().replace(/\/$/,"")
return"https://app.posthog.com"===e?"https://us.i.posthog.com":e}get uiHost(){var e,t=null===(e=this.instance.config.ui_host)||void 0===e?void 0:e.replace(/\/$/,"")
return t||(t=this.apiHost.replace(".".concat(Hs),".posthog.com")),"https://app.posthog.com"===t?"https://us.posthog.com":t}get region(){return this._regionCache[this.apiHost]||(/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=js.US:/https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=js.EU:this._regionCache[this.apiHost]=js.CUSTOM),this._regionCache[this.apiHost]}endpointFor(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
if(t&&(t="/"===t[0]?t:"/".concat(t)),"ui"===e)return this.uiHost+t
if(this.region===js.CUSTOM)return this.apiHost+t
var n=Hs+t
switch(e){case"assets":return"https://".concat(this.region,"-assets.").concat(n)
case"api":return"https://".concat(this.region,".").concat(n)}}}var Gs={icontains:(e,t)=>!!_&&t.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:(e,t)=>!!_&&-1===t.href.toLowerCase().indexOf(e.toLowerCase()),regex:(e,t)=>!!_&&as(t.href,e),not_regex:(e,t)=>!!_&&!as(t.href,e),exact:(e,t)=>t.href===e,is_not:(e,t)=>t.href!==e}
class Ws{constructor(e){var t=this
h(this,"getWebExperimentsAndEvaluateDisplayLogic",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
t.getWebExperiments((e=>{Ws.logInfo("retrieved web experiments from the server"),t._flagToExperiments=new Map,e.forEach((e=>{if(e.feature_flag_key){var n
t._flagToExperiments&&(Ws.logInfo("setting flag key ",e.feature_flag_key," to web experiment ",e),null===(n=t._flagToExperiments)||void 0===n||n.set(e.feature_flag_key,e))
var r=t.instance.getFeatureFlag(e.feature_flag_key)
V(r)&&e.variants[r]&&t.applyTransforms(e.name,r,e.variants[r].transforms)}else if(e.variants)for(var i in e.variants){var o=e.variants[i]
Ws.matchesTestVariant(o)&&t.applyTransforms(e.name,i,o.transforms)}}))}),e)})),this.instance=e,this.instance.onFeatureFlags((e=>{this.onFeatureFlags(e)}))}onFeatureFlags(e){if(this._is_bot())Ws.logInfo("Refusing to render web experiment since the viewer is a likely bot")
else if(!this.instance.config.disable_web_experiments){if(K(this._flagToExperiments))return this._flagToExperiments=new Map,this.loadIfEnabled(),void this.previewWebExperiment()
Ws.logInfo("applying feature flags",e),e.forEach((e=>{var t
if(this._flagToExperiments&&null!==(t=this._flagToExperiments)&&void 0!==t&&t.has(e)){var n,r=this.instance.getFeatureFlag(e),i=null===(n=this._flagToExperiments)||void 0===n?void 0:n.get(e)
r&&null!=i&&i.variants[r]&&this.applyTransforms(i.name,r,i.variants[r].transforms)}}))}}previewWebExperiment(){var e=Ws.getWindowLocation()
if(null!=e&&e.search){var t=Ot(null==e?void 0:e.search,"__experiment_id"),n=Ot(null==e?void 0:e.search,"__experiment_variant")
t&&n&&(Ws.logInfo("previewing web experiments ".concat(t," && ").concat(n)),this.getWebExperiments((e=>{this.showPreviewWebExperiment(parseInt(t),n,e)}),!1,!0))}}loadIfEnabled(){this.instance.config.disable_web_experiments||this.getWebExperimentsAndEvaluateDisplayLogic()}getWebExperiments(e,t,n){if(this.instance.config.disable_web_experiments&&!n)return e([])
var r=this.instance.get_property("$web_experiments")
if(r&&!t)return e(r)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api","/api/web_experiments/?token=".concat(this.instance.config.token)),method:"GET",callback:t=>{if(200!==t.statusCode||!t.json)return e([])
var n=t.json.experiments||[]
return e(n)}})}showPreviewWebExperiment(e,t,n){var r=n.filter((t=>t.id===e))
r&&r.length>0&&(Ws.logInfo("Previewing web experiment [".concat(r[0].name,"] with variant [").concat(t,"]")),this.applyTransforms(r[0].name,t,r[0].variants[t].transforms))}static matchesTestVariant(e){return!K(e.conditions)&&Ws.matchUrlConditions(e)&&Ws.matchUTMConditions(e)}static matchUrlConditions(e){var t
if(K(e.conditions)||K(null===(t=e.conditions)||void 0===t?void 0:t.url))return!0
var n,r,i,o=Ws.getWindowLocation()
return!!o&&(null===(n=e.conditions)||void 0===n||!n.url||Gs[null!==(r=null===(i=e.conditions)||void 0===i?void 0:i.urlMatchType)&&void 0!==r?r:"icontains"](e.conditions.url,o))}static getWindowLocation(){return null==_?void 0:_.location}static matchUTMConditions(e){var t
if(K(e.conditions)||K(null===(t=e.conditions)||void 0===t?void 0:t.utm))return!0
var n=fo.campaignParams()
if(n.utm_source){var r,i,o,s,a,l,c,u,d,f,p,h,v,g,_,m,b=null===(r=e.conditions)||void 0===r||null===(i=r.utm)||void 0===i||!i.utm_campaign||(null===(o=e.conditions)||void 0===o||null===(s=o.utm)||void 0===s?void 0:s.utm_campaign)==n.utm_campaign,y=null===(a=e.conditions)||void 0===a||null===(l=a.utm)||void 0===l||!l.utm_source||(null===(c=e.conditions)||void 0===c||null===(u=c.utm)||void 0===u?void 0:u.utm_source)==n.utm_source,w=null===(d=e.conditions)||void 0===d||null===(f=d.utm)||void 0===f||!f.utm_medium||(null===(p=e.conditions)||void 0===p||null===(h=p.utm)||void 0===h?void 0:h.utm_medium)==n.utm_medium,k=null===(v=e.conditions)||void 0===v||null===(g=v.utm)||void 0===g||!g.utm_term||(null===(_=e.conditions)||void 0===_||null===(m=_.utm)||void 0===m?void 0:m.utm_term)==n.utm_term
return b&&w&&k&&y}return!1}static logInfo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
ne.info("[WebExperiments] ".concat(e),n)}applyTransforms(e,t,n){this._is_bot()?Ws.logInfo("Refusing to render web experiment since the viewer is a likely bot"):"control"!==t?n.forEach((n=>{if(n.selector){var r
Ws.logInfo("applying transform of variant ".concat(t," for experiment ").concat(e," "),n)
var i=null===(r=document)||void 0===r?void 0:r.querySelectorAll(n.selector)
null==i||i.forEach((e=>{var t=e
n.html&&(t.innerHTML=n.html),n.css&&t.setAttribute("style",n.css)}))}})):Ws.logInfo("Control variants leave the page unmodified.")}_is_bot(){return k&&this.instance?Bs(k,this.instance.config.custom_blocked_useragents):void 0}}var zs={},Vs=()=>{},Qs="posthog",Js=!bs&&-1===(null==T?void 0:T.indexOf("MSIE"))&&-1===(null==T?void 0:T.indexOf("Mozilla")),Ks=()=>{var e
return{api_host:"https://us.i.posthog.com",ui_host:null,token:"",autocapture:!0,rageclick:!0,cross_subdomain_cookie:he(null==S?void 0:S.location),persistence:"localStorage+cookie",persistence_name:"",loaded:Vs,save_campaign_params:!0,custom_campaign_params:[],custom_blocked_useragents:[],save_referrer:!0,capture_pageview:!0,capture_pageleave:"if_capture_pageview",debug:x&&V(null==x?void 0:x.search)&&-1!==x.search.indexOf("__posthog_debug=true")||!1,cookie_expiration:365,upgrade:!1,disable_session_recording:!1,disable_persistence:!1,disable_web_experiments:!0,disable_surveys:!1,disable_external_dependency_loading:!1,enable_recording_console_log:void 0,secure_cookie:"https:"===(null==_||null===(e=_.location)||void 0===e?void 0:e.protocol),ip:!0,opt_out_capturing_by_default:!1,opt_out_persistence_by_default:!1,opt_out_useragent_filter:!1,opt_out_capturing_persistence_type:"localStorage",opt_out_capturing_cookie_prefix:null,opt_in_site_apps:!1,property_denylist:[],respect_dnt:!1,sanitize_properties:null,request_headers:{},request_batching:!0,properties_string_max_length:65535,session_recording:{},mask_all_element_attributes:!1,mask_all_text:!1,mask_personal_data_properties:!1,custom_personal_data_properties:[],advanced_disable_decide:!1,advanced_disable_feature_flags:!1,advanced_disable_feature_flags_on_first_load:!1,advanced_disable_toolbar_metrics:!1,feature_flag_request_timeout_ms:3e3,surveys_request_timeout_ms:1e4,on_request_error:e=>{var t="Bad HTTP status: "+e.statusCode+" "+e.text
ne.error(t)},get_device_id:e=>e,capture_performance:void 0,name:"posthog",bootstrap:{},disable_compression:!1,session_idle_timeout_seconds:1800,person_profiles:"identified_only",before_send:void 0,request_queue_config:{flush_interval_ms:Es},_onCapture:Vs}},Xs=e=>{var t={}
z(e.process_person)||(t.person_profiles=e.process_person),z(e.xhr_headers)||(t.request_headers=e.xhr_headers),z(e.cookie_name)||(t.persistence_name=e.cookie_name),z(e.disable_cookie)||(t.disable_persistence=e.disable_cookie),z(e.store_google)||(t.save_campaign_params=e.store_google),z(e.verbose)||(t.debug=e.verbose)
var n=ae({},t,e)
return H(e.property_blacklist)&&(z(e.property_denylist)?n.property_denylist=e.property_blacklist:H(e.property_denylist)?n.property_denylist=[...e.property_blacklist,...e.property_denylist]:ne.error("Invalid value for property_denylist config: "+e.property_denylist)),n}
class Ys{constructor(){h(this,"__forceAllowLocalhost",!1)}get _forceAllowLocalhost(){return this.__forceAllowLocalhost}set _forceAllowLocalhost(e){ne.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),this.__forceAllowLocalhost=e}}class Zs{get decideEndpointWasHit(){var e,t
return null!==(e=null===(t=this.featureFlags)||void 0===t?void 0:t.hasLoadedFlags)&&void 0!==e&&e}constructor(){h(this,"webPerformance",new Ys),h(this,"_personProcessingSetOncePropertiesSent",!1),h(this,"version",I.LIB_VERSION),h(this,"_internalEventEmitter",new ls),this.config=Ks(),this.SentryIntegration=Kr,this.sentryIntegration=e=>function(e,t){var n=Jr(e,t)
return{name:Qr,processEvent:e=>n(e)}}(this,e),this.__request_queue=[],this.__loaded=!1,this.analyticsDefaultEndpoint="/e/",this._initialPageviewCaptured=!1,this._initialPersonProfilesConfig=null,this._cachedPersonProperties=null,this.featureFlags=new yo(this),this.toolbar=new ti(this),this.scrollManager=new $s(this),this.pageViewManager=new ui(this),this.surveys=new hs(this),this.experiments=new Ws(this),this.exceptions=new di(this),this.rateLimiter=new gs(this),this.requestRouter=new Us(this),this.consent=new an(this),this.people={set:(e,t,n)=>{var r=V(e)?{[e]:t}:e
this.setPersonProperties(r),null==n||n({})},set_once:(e,t,n)=>{var r=V(e)?{[e]:t}:e
this.setPersonProperties(void 0,r),null==n||n({})}},this.on("eventCaptured",(e=>ne.info('send "'.concat(null==e?void 0:e.event,'"'),e)))}init(e,t,n){if(n&&n!==Qs){var r,i=null!==(r=zs[n])&&void 0!==r?r:new Zs
return i._init(e,t,n),zs[n]=i,zs[Qs][n]=i,i}return this._init(e,t,n)}_init(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0
if(z(e)||Q(e))return ne.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),this
if(this.__loaded)return ne.warn("You have already initialized PostHog! Re-initializing is a no-op"),this
this.__loaded=!0,this.config={},this._triggered_notifs=[],r.person_profiles&&(this._initialPersonProfilesConfig=r.person_profiles),this.set_config(ae({},Ks(),Xs(r),{name:i,token:e})),this.config.on_xhr_error&&ne.error("on_xhr_error is deprecated. Use on_request_error instead"),this.compression=r.disable_compression?void 0:g.GZipJS,this.persistence=new ko(this.config),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new ko(p(p({},this.config),{},{persistence:"sessionStorage"}))
var o=p({},this.persistence.props),s=p({},this.sessionPersistence.props)
if(this._requestQueue=new Cs((e=>this._send_retriable_request(e)),this.config.request_queue_config),this._retryQueue=new Ts(this),this.__request_queue=[],this.config.__preview_experimental_cookieless_mode||(this.sessionManager=new Rs(this),this.sessionPropsManager=new Is(this,this.sessionManager,this.persistence)),new ri(this).startIfEnabledOrStop(),this.siteApps=new As(this),null===(t=this.siteApps)||void 0===t||t.init(),this.config.__preview_experimental_cookieless_mode||(this.sessionRecording=new zr(this),this.sessionRecording.startIfEnabledOrStop()),this.config.disable_scroll_properties||this.scrollManager.startMeasuringScrollPosition(),this.autocapture=new Dt(this),this.autocapture.startIfEnabled(),this.surveys.loadIfEnabled(),this.heatmaps=new ci(this),this.heatmaps.startIfEnabled(),this.webVitalsAutocapture=new si(this),this.exceptionObserver=new pn(this),this.exceptionObserver.startIfEnabled(),this.deadClicksAutocapture=new dn(this,un),this.deadClicksAutocapture.startIfEnabled(),I.DEBUG=I.DEBUG||this.config.debug,I.DEBUG&&ne.info("Starting in debug mode",{this:this,config:r,thisC:p({},this.config),p:o,s:s}),this._sync_opt_out_with_persistence(),void 0!==(null===(n=r.bootstrap)||void 0===n?void 0:n.distinctID)){var a,l,c=this.config.get_device_id(zt()),u=null!==(a=r.bootstrap)&&void 0!==a&&a.isIdentifiedID?c:r.bootstrap.distinctID
this.persistence.set_property(ze,null!==(l=r.bootstrap)&&void 0!==l&&l.isIdentifiedID?"identified":"anonymous"),this.register({distinct_id:r.bootstrap.distinctID,$device_id:u})}if(this._hasBootstrappedFeatureFlags()){var d,f,h=Object.keys((null===(d=r.bootstrap)||void 0===d?void 0:d.featureFlags)||{}).filter((e=>{var t,n
return!(null===(t=r.bootstrap)||void 0===t||null===(n=t.featureFlags)||void 0===n||!n[e])})).reduce(((e,t)=>{var n,i
return e[t]=(null===(n=r.bootstrap)||void 0===n||null===(i=n.featureFlags)||void 0===i?void 0:i[t])||!1,e}),{}),v=Object.keys((null===(f=r.bootstrap)||void 0===f?void 0:f.featureFlagPayloads)||{}).filter((e=>h[e])).reduce(((e,t)=>{var n,i,o,s
return null!==(n=r.bootstrap)&&void 0!==n&&null!==(i=n.featureFlagPayloads)&&void 0!==i&&i[t]&&(e[t]=null===(o=r.bootstrap)||void 0===o||null===(s=o.featureFlagPayloads)||void 0===s?void 0:s[t]),e}),{})
this.featureFlags.receivedFeatureFlags({featureFlags:h,featureFlagPayloads:v})}if(this.config.__preview_experimental_cookieless_mode)this.register_once({distinct_id:et,$device_id:null},"")
else if(!this.get_distinct_id()){var m=this.config.get_device_id(zt())
this.register_once({distinct_id:m,$device_id:m},""),this.persistence.set_property(ze,"anonymous")}return ge(_,"onpagehide"in self?"pagehide":"unload",this._handle_unload.bind(this),{passive:!1}),this.toolbar.maybeLoadToolbar(),r.segment?function(e,t){var n=e.config.segment
if(!n)return t()
!function(e,t){var n=e.config.segment
if(!n)return t()
var r=n=>{var r=()=>n.anonymousId()||zt()
e.config.get_device_id=r,n.id()&&(e.register({distinct_id:n.id(),$device_id:r()}),e.persistence.set_property(ze,"identified")),t()},i=n.user()
"then"in i&&U(i.then)?i.then((e=>r(e))):r(i)}(e,(()=>{n.register((e=>{Promise&&Promise.resolve||Vr.warn("This browser does not have Promise support, and can not use the segment integration")
var t=(t,n)=>{var r
if(!n)return t
t.event.userId||t.event.anonymousId===e.get_distinct_id()||(Vr.info("No userId set, resetting PostHog"),e.reset()),t.event.userId&&t.event.userId!==e.get_distinct_id()&&(Vr.info("UserId set, identifying with PostHog"),e.identify(t.event.userId))
var i=e._calculate_event_properties(n,null!==(r=t.event.properties)&&void 0!==r?r:{},new Date)
return t.event.properties=Object.assign({},i,t.event.properties),t}
return{name:"PostHog JS",type:"enrichment",version:"1.0.0",isLoaded:()=>!0,load:()=>Promise.resolve(),track:e=>t(e,e.event.event),page:e=>t(e,"$pageview"),identify:e=>t(e,"$identify"),screen:e=>t(e,"$screen")}})(e)).then((()=>{t()}))}))}(this,(()=>this._loaded())):this._loaded(),U(this.config._onCapture)&&this.config._onCapture!==Vs&&(ne.warn("onCapture is deprecated. Please use `before_send` instead"),this.on("eventCaptured",(e=>this.config._onCapture(e.event,e)))),this}_onRemoteConfig(e){var t,n,r,i,o,s,a,l
if(!S||!S.body)return ne.info("document not ready yet, trying again in 500 milliseconds..."),void setTimeout((()=>{this._onRemoteConfig(e)}),500)
this.compression=void 0,e.supportedCompression&&!this.config.disable_compression&&(this.compression=F(e.supportedCompression,g.GZipJS)?g.GZipJS:F(e.supportedCompression,g.Base64)?g.Base64:void 0),null!==(t=e.analytics)&&void 0!==t&&t.endpoint&&(this.analyticsDefaultEndpoint=e.analytics.endpoint),this.set_config({person_profiles:this._initialPersonProfilesConfig?this._initialPersonProfilesConfig:"identified_only"}),null===(n=this.siteApps)||void 0===n||n.onRemoteConfig(e),null===(r=this.sessionRecording)||void 0===r||r.onRemoteConfig(e),null===(i=this.autocapture)||void 0===i||i.onRemoteConfig(e),null===(o=this.heatmaps)||void 0===o||o.onRemoteConfig(e),this.surveys.onRemoteConfig(e),null===(s=this.webVitalsAutocapture)||void 0===s||s.onRemoteConfig(e),null===(a=this.exceptionObserver)||void 0===a||a.onRemoteConfig(e),null===(l=this.deadClicksAutocapture)||void 0===l||l.onRemoteConfig(e)}_loaded(){try{this.config.loaded(this)}catch(e){ne.critical("`loaded` function failed",e)}this._start_queue_if_opted_in(),this.config.capture_pageview&&setTimeout((()=>{this.consent.isOptedIn()&&this._captureInitialPageview()}),1),new ms(this).load(),this.featureFlags.decide()}_start_queue_if_opted_in(){var e
this.has_opted_out_capturing()||this.config.request_batching&&(null===(e=this._requestQueue)||void 0===e||e.enable())}_dom_loaded(){this.has_opted_out_capturing()||oe(this.__request_queue,(e=>this._send_retriable_request(e))),this.__request_queue=[],this._start_queue_if_opted_in()}_handle_unload(){var e,t
this.config.request_batching?(this._shouldCapturePageleave()&&this.capture("$pageleave"),null===(e=this._requestQueue)||void 0===e||e.unload(),null===(t=this._retryQueue)||void 0===t||t.unload()):this._shouldCapturePageleave()&&this.capture("$pageleave",null,{transport:"sendBeacon"})}_send_request(e){this.__loaded&&(Js?this.__request_queue.push(e):this.rateLimiter.isServerRateLimited(e.batchKey)||(e.transport=e.transport||this.config.api_transport,e.url=ws(e.url,{ip:this.config.ip?1:0}),e.headers=p({},this.config.request_headers),e.compression="best-available"===e.compression?this.compression:e.compression,e.fetchOptions=e.fetchOptions||this.config.fetch_options,(e=>{var t,n,r,i=p({},e)
i.timeout=i.timeout||6e4,i.url=ws(i.url,{_:(new Date).getTime().toString(),ver:I.LIB_VERSION,compression:i.compression})
var o=null!==(t=i.transport)&&void 0!==t?t:"fetch",s=null!==(n=null===(r=ve(xs,(e=>e.transport===o)))||void 0===r?void 0:r.method)&&void 0!==n?n:xs[0].method
if(!s)throw new Error("No available transport method")
s(i)})(p(p({},e),{},{callback:t=>{var n,r,i
this.rateLimiter.checkForLimiting(t),t.statusCode>=400&&(null===(r=(i=this.config).on_request_error)||void 0===r||r.call(i,t)),null===(n=e.callback)||void 0===n||n.call(e,t)}}))))}_send_retriable_request(e){this._retryQueue?this._retryQueue.retriableRequest(e):this._send_request(e)}_execute_array(e){var t,n=[],r=[],i=[]
oe(e,(e=>{e&&(t=e[0],H(t)?i.push(e):U(e)?e.call(this):H(e)&&"alias"===t?n.push(e):H(e)&&-1!==t.indexOf("capture")&&U(this[t])?i.push(e):r.push(e))}))
var o=function(e,t){oe(e,(function(e){if(H(e[0])){var n=t
se(e,(function(e){n=n[e[0]].apply(n,e.slice(1))}))}else this[e[0]].apply(this,e.slice(1))}),t)}
o(n,this),o(r,this),o(i,this)}_hasBootstrappedFeatureFlags(){var e,t
return(null===(e=this.config.bootstrap)||void 0===e?void 0:e.featureFlags)&&Object.keys(null===(t=this.config.bootstrap)||void 0===t?void 0:t.featureFlags).length>0||!1}push(e){this._execute_array([e])}capture(e,t,n){var r
if(this.__loaded&&this.persistence&&this.sessionPersistence&&this._requestQueue){if(!this.consent.isOptedOut())if(!z(e)&&V(e)){if(this.config.opt_out_useragent_filter||!this._is_bot()){var i=null!=n&&n.skip_client_rate_limiting?void 0:this.rateLimiter.clientRateLimitContext()
if(null==i||!i.isRateLimited){null!=t&&t.$current_url&&!V(null==t?void 0:t.$current_url)&&(ne.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."),null==t||delete t.$current_url),this.sessionPersistence.update_search_keyword(),this.config.save_campaign_params&&this.sessionPersistence.update_campaign_params(),this.config.save_referrer&&this.sessionPersistence.update_referrer_info(),(this.config.save_campaign_params||this.config.save_referrer)&&this.persistence.set_initial_person_info()
var o=new Date,s=(null==n?void 0:n.timestamp)||o,a=zt(),l={uuid:a,event:e,properties:this._calculate_event_properties(e,t||{},s,a)}
i&&(l.properties.$lib_rate_limit_remaining_tokens=i.remainingTokens),(null==n?void 0:n.$set)&&(l.$set=null==n?void 0:n.$set)
var c=this._calculate_set_once_properties(null==n?void 0:n.$set_once)
c&&(l.$set_once=c),(l=function(e,t){return n=e,r=e=>V(e)&&!J(t)?e.slice(0,t):e,i=new Set,function e(t,n){return t!==Object(t)?r?r(t):t:i.has(t)?void 0:(i.add(t),H(t)?(o=[],oe(t,(t=>{o.push(e(t))}))):(o={},se(t,((t,n)=>{i.has(t)||(o[n]=e(t,n))}))),o)
var o}(n)
var n,r,i}(l,null!=n&&n._noTruncate?null:this.config.properties_string_max_length)).timestamp=s,z(null==n?void 0:n.timestamp)||(l.properties.$event_time_override_provided=!0,l.properties.$event_time_override_system_time=o)
var u=p(p({},l.properties.$set),l.$set)
if(W(u)||this.setPersonPropertiesForFlags(u),!K(this.config.before_send)){var d=this._runBeforeSend(l)
if(!d)return
l=d}this._internalEventEmitter.emit("eventCaptured",l)
var f={method:"POST",url:null!==(r=null==n?void 0:n._url)&&void 0!==r?r:this.requestRouter.endpointFor("api",this.analyticsDefaultEndpoint),data:l,compression:"best-available",batchKey:null==n?void 0:n._batchKey}
return!this.config.request_batching||n&&(null==n||!n._batchKey)||null!=n&&n.send_instantly?this._send_retriable_request(f):this._requestQueue.enqueue(f),l}ne.critical("This capture call is ignored due to client rate limiting.")}}else ne.error("No event name provided to posthog.capture")}else ne.uninitializedWarning("posthog.capture")}_addCaptureHook(e){return this.on("eventCaptured",(t=>e(t.event,t)))}_calculate_event_properties(e,t,n,r){if(n=n||new Date,!this.persistence||!this.sessionPersistence)return t
var i=this.persistence.remove_event_timer(e),o=p({},t)
if(o.token=this.config.token,this.config.__preview_experimental_cookieless_mode&&(o.$cookieless_mode=!0),"$snapshot"===e){var s=p(p({},this.persistence.properties()),this.sessionPersistence.properties())
return o.distinct_id=s.distinct_id,(!V(o.distinct_id)&&!X(o.distinct_id)||Q(o.distinct_id))&&ne.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),o}var a,l=fo.properties({maskPersonalDataProperties:this.config.mask_personal_data_properties,customPersonalDataProperties:this.config.custom_personal_data_properties})
if(this.sessionManager){var{sessionId:c,windowId:u}=this.sessionManager.checkAndGetSessionAndWindowId()
o.$session_id=c,o.$window_id=u}this.sessionPropsManager&&ae(o,this.sessionPropsManager.getSessionProps())
try{var d,f
this.sessionRecording&&(o.$recording_status=this.sessionRecording.status,o.$sdk_debug_replay_internal_buffer_length=this.sessionRecording.buffer.data.length,o.$sdk_debug_replay_internal_buffer_size=this.sessionRecording.buffer.size),o.$sdk_debug_retry_queue_size=null===(d=this._retryQueue)||void 0===d||null===(f=d.queue)||void 0===f?void 0:f.length}catch(e){o.$sdk_debug_error_capturing_properties=String(e)}if(this.requestRouter.region===js.CUSTOM&&(o.$lib_custom_api_host=this.config.api_host),a="$pageview"===e?this.pageViewManager.doPageView(n,r):"$pageleave"===e?this.pageViewManager.doPageLeave(n):this.pageViewManager.doEvent(),o=ae(o,a),"$pageview"===e&&S&&(o.title=S.title),!z(i)){var h=n.getTime()-i
o.$duration=parseFloat((h/1e3).toFixed(3))}T&&this.config.opt_out_useragent_filter&&(o.$browser_type=this._is_bot()?"bot":"browser"),(o=ae({},l,this.persistence.properties(),this.sessionPersistence.properties(),o)).$is_identified=this._isIdentified(),H(this.config.property_denylist)?se(this.config.property_denylist,(function(e){delete o[e]})):ne.error("Invalid value for property_denylist config: "+this.config.property_denylist+" or property_blacklist config: "+this.config.property_blacklist)
var v=this.config.sanitize_properties
v&&(ne.error("sanitize_properties is deprecated. Use before_send instead"),o=v(o,e))
var g=this._hasPersonProcessing()
return o.$process_person_profile=g,g&&this._requirePersonProcessing("_calculate_event_properties"),o}_calculate_set_once_properties(e){var t
if(!this.persistence||!this._hasPersonProcessing())return e
if(this._personProcessingSetOncePropertiesSent)return e
var n=this.persistence.get_initial_props(),r=null===(t=this.sessionPropsManager)||void 0===t?void 0:t.getSetOnceProps(),i=ae({},n,r||{},e||{}),o=this.config.sanitize_properties
return o&&(ne.error("sanitize_properties is deprecated. Use before_send instead"),i=o(i,"$set_once")),this._personProcessingSetOncePropertiesSent=!0,W(i)?void 0:i}register(e,t){var n
null===(n=this.persistence)||void 0===n||n.register(e,t)}register_once(e,t,n){var r
null===(r=this.persistence)||void 0===r||r.register_once(e,t,n)}register_for_session(e){var t
null===(t=this.sessionPersistence)||void 0===t||t.register(e)}unregister(e){var t
null===(t=this.persistence)||void 0===t||t.unregister(e)}unregister_for_session(e){var t
null===(t=this.sessionPersistence)||void 0===t||t.unregister(e)}_register_single(e,t){this.register({[e]:t})}getFeatureFlag(e,t){return this.featureFlags.getFeatureFlag(e,t)}getFeatureFlagPayload(e){var t=this.featureFlags.getFeatureFlagPayload(e)
try{return JSON.parse(t)}catch(e){return t}}isFeatureEnabled(e,t){return this.featureFlags.isFeatureEnabled(e,t)}reloadFeatureFlags(){this.featureFlags.reloadFeatureFlags()}updateEarlyAccessFeatureEnrollment(e,t){this.featureFlags.updateEarlyAccessFeatureEnrollment(e,t)}getEarlyAccessFeatures(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0
return this.featureFlags.getEarlyAccessFeatures(e,t,n)}on(e,t){return this._internalEventEmitter.on(e,t)}onFeatureFlags(e){return this.featureFlags.onFeatureFlags(e)}onSurveysLoaded(e){return this.surveys.onSurveysLoaded(e)}onSessionId(e){var t,n
return null!==(t=null===(n=this.sessionManager)||void 0===n?void 0:n.onSessionId(e))&&void 0!==t?t:()=>{}}getSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.surveys.getSurveys(e,t)}getActiveMatchingSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.surveys.getActiveMatchingSurveys(e,t)}renderSurvey(e,t){this.surveys.renderSurvey(e,t)}canRenderSurvey(e){return this.surveys.canRenderSurvey(e)}identify(e,t,n){if(!this.__loaded||!this.persistence)return ne.uninitializedWarning("posthog.identify")
if(X(e)&&(e=e.toString(),ne.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")),e){if(["distinct_id","distinctid"].includes(e.toLowerCase()))ne.critical('The string "'.concat(e,'" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'))
else if(this._requirePersonProcessing("posthog.identify")){var r=this.get_distinct_id()
if(this.register({$user_id:e}),!this.get_property("$device_id")){var i=r
this.register_once({$had_persisted_distinct_id:!0,$device_id:i},"")}e!==r&&e!==this.get_property(me)&&(this.unregister(me),this.register({distinct_id:e}))
var o="anonymous"===(this.persistence.get_property(ze)||"anonymous")
e!==r&&o?(this.persistence.set_property(ze,"identified"),this.setPersonPropertiesForFlags(p(p({},n||{}),t||{}),!1),this.capture("$identify",{distinct_id:e,$anon_distinct_id:r},{$set:t||{},$set_once:n||{}}),this._cachedPersonProperties=qs(e,t,n),this.featureFlags.setAnonymousDistinctId(r)):(t||n)&&this.setPersonProperties(t,n),e!==r&&(this.reloadFeatureFlags(),this.unregister(We))}}else ne.error("Unique user id has not been set in posthog.identify")}setPersonProperties(e,t){if((e||t)&&this._requirePersonProcessing("posthog.setPersonProperties")){var n=qs(this.get_distinct_id(),e,t)
this._cachedPersonProperties!==n?(this.setPersonPropertiesForFlags(p(p({},t||{}),e||{})),this.capture("$set",{$set:e||{},$set_once:t||{}}),this._cachedPersonProperties=n):ne.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")}}group(e,t,n){if(e&&t){if(this._requirePersonProcessing("posthog.group")){var r=this.getGroups()
r[e]!==t&&this.resetGroupPropertiesForFlags(e),this.register({$groups:p(p({},r),{},{[e]:t})}),n&&(this.capture("$groupidentify",{$group_type:e,$group_key:t,$group_set:n}),this.setGroupPropertiesForFlags({[e]:n})),r[e]===t||n||this.reloadFeatureFlags()}}else ne.error("posthog.group requires a group type and group key")}resetGroups(){this.register({$groups:{}}),this.resetGroupPropertiesForFlags(),this.reloadFeatureFlags()}setPersonPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this.featureFlags.setPersonPropertiesForFlags(e,t)}resetPersonPropertiesForFlags(){this.featureFlags.resetPersonPropertiesForFlags()}setGroupPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this._requirePersonProcessing("posthog.setGroupPropertiesForFlags")&&this.featureFlags.setGroupPropertiesForFlags(e,t)}resetGroupPropertiesForFlags(e){this.featureFlags.resetGroupPropertiesForFlags(e)}reset(e){var t,n,r,i
if(ne.info("reset"),!this.__loaded)return ne.uninitializedWarning("posthog.reset")
var o=this.get_property("$device_id")
if(this.consent.reset(),null===(t=this.persistence)||void 0===t||t.clear(),null===(n=this.sessionPersistence)||void 0===n||n.clear(),this.surveys.reset(),null===(r=this.persistence)||void 0===r||r.set_property(ze,"anonymous"),null===(i=this.sessionManager)||void 0===i||i.resetSessionId(),this._cachedPersonProperties=null,this.config.__preview_experimental_cookieless_mode)this.register_once({distinct_id:et,$device_id:null},"")
else{var s=this.config.get_device_id(zt())
this.register_once({distinct_id:s,$device_id:e?s:o},"")}this.register({$last_posthog_reset:(new Date).toISOString()},1)}get_distinct_id(){return this.get_property("distinct_id")}getGroups(){return this.get_property("$groups")||{}}get_session_id(){var e,t
return null!==(e=null===(t=this.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0).sessionId)&&void 0!==e?e:""}get_session_replay_url(e){if(!this.sessionManager)return""
var{sessionId:t,sessionStartTimestamp:n}=this.sessionManager.checkAndGetSessionAndWindowId(!0),r=this.requestRouter.endpointFor("ui","/project/".concat(this.config.token,"/replay/").concat(t))
if(null!=e&&e.withTimestamp&&n){var i,o=null!==(i=e.timestampLookBack)&&void 0!==i?i:10
if(!n)return r
var s=Math.max(Math.floor(((new Date).getTime()-n)/1e3)-o,0)
r+="?t=".concat(s)}return r}alias(e,t){return e===this.get_property(_e)?(ne.critical("Attempting to create alias for existing People user - aborting."),-2):this._requirePersonProcessing("posthog.alias")?(z(t)&&(t=this.get_distinct_id()),e!==t?(this._register_single(me,e),this.capture("$create_alias",{alias:e,distinct_id:t})):(ne.warn("alias matches current distinct_id - skipping api call."),this.identify(e),-1)):void 0}set_config(e){var t,n,r,i,o=p({},this.config)
G(e)&&(ae(this.config,Xs(e)),null===(t=this.persistence)||void 0===t||t.update_config(this.config,o),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new ko(p(p({},this.config),{},{persistence:"sessionStorage"})),Zt.is_supported()&&"true"===Zt.get("ph_debug")&&(this.config.debug=!0),this.config.debug&&(I.DEBUG=!0,ne.info("set_config",JSON.stringify({config:e,oldConfig:o,newConfig:p({},this.config)},null,2))),null===(n=this.sessionRecording)||void 0===n||n.startIfEnabledOrStop(),null===(r=this.autocapture)||void 0===r||r.startIfEnabled(),null===(i=this.heatmaps)||void 0===i||i.startIfEnabled(),this.surveys.loadIfEnabled(),this._sync_opt_out_with_persistence())}startSessionRecording(e){var t,n,r,i,o,s=!0===e,a={sampling:s||!(null==e||!e.sampling),linked_flag:s||!(null==e||!e.linked_flag),url_trigger:s||!(null==e||!e.url_trigger),event_trigger:s||!(null==e||!e.event_trigger)}
Object.values(a).some(Boolean)&&(null===(t=this.sessionManager)||void 0===t||t.checkAndGetSessionAndWindowId(),a.sampling&&(null===(n=this.sessionRecording)||void 0===n||n.overrideSampling()),a.linked_flag&&(null===(r=this.sessionRecording)||void 0===r||r.overrideLinkedFlag()),a.url_trigger&&(null===(i=this.sessionRecording)||void 0===i||i.overrideTrigger("url")),a.event_trigger&&(null===(o=this.sessionRecording)||void 0===o||o.overrideTrigger("event")))
this.set_config({disable_session_recording:!1})}stopSessionRecording(){this.set_config({disable_session_recording:!0})}sessionRecordingStarted(){var e
return!(null===(e=this.sessionRecording)||void 0===e||!e.started)}captureException(e,t){var n=new Error("PostHog syntheticException")
this.exceptions.sendExceptionEvent(p(p({},Nn((e=>e instanceof Error)(e)?{error:e,event:e.message}:{event:e},{syntheticException:n})),t))}loadToolbar(e){return this.toolbar.loadToolbar(e)}get_property(e){var t
return null===(t=this.persistence)||void 0===t?void 0:t.props[e]}getSessionProperty(e){var t
return null===(t=this.sessionPersistence)||void 0===t?void 0:t.props[e]}toString(){var e,t=null!==(e=this.config.name)&&void 0!==e?e:Qs
return t!==Qs&&(t=Qs+"."+t),t}_isIdentified(){var e,t
return"identified"===(null===(e=this.persistence)||void 0===e?void 0:e.get_property(ze))||"identified"===(null===(t=this.sessionPersistence)||void 0===t?void 0:t.get_property(ze))}_hasPersonProcessing(){var e,t,n,r
return!("never"===this.config.person_profiles||"identified_only"===this.config.person_profiles&&!this._isIdentified()&&W(this.getGroups())&&(null===(e=this.persistence)||void 0===e||null===(t=e.props)||void 0===t||!t[me])&&(null===(n=this.persistence)||void 0===n||null===(r=n.props)||void 0===r||!r[Ye]))}_shouldCapturePageleave(){return!0===this.config.capture_pageleave||"if_capture_pageview"===this.config.capture_pageleave&&this.config.capture_pageview}createPersonProfile(){this._hasPersonProcessing()||this._requirePersonProcessing("posthog.createPersonProfile")&&this.setPersonProperties({},{})}_requirePersonProcessing(e){return"never"===this.config.person_profiles?(ne.error(e+' was called, but process_person is set to "never". This call will be ignored.'),!1):(this._register_single(Ye,!0),!0)}_sync_opt_out_with_persistence(){var e,t,n,r,i=this.consent.isOptedOut(),o=this.config.opt_out_persistence_by_default,s=this.config.disable_persistence||i&&!!o;(null===(e=this.persistence)||void 0===e?void 0:e.disabled)!==s&&(null===(n=this.persistence)||void 0===n||n.set_disabled(s)),(null===(t=this.sessionPersistence)||void 0===t?void 0:t.disabled)!==s&&(null===(r=this.sessionPersistence)||void 0===r||r.set_disabled(s))}opt_in_capturing(e){var t
this.consent.optInOut(!0),this._sync_opt_out_with_persistence(),(z(null==e?void 0:e.captureEventName)||null!=e&&e.captureEventName)&&this.capture(null!==(t=null==e?void 0:e.captureEventName)&&void 0!==t?t:"$opt_in",null==e?void 0:e.captureProperties,{send_instantly:!0}),this.config.capture_pageview&&this._captureInitialPageview()}opt_out_capturing(){this.consent.optInOut(!1),this._sync_opt_out_with_persistence()}has_opted_in_capturing(){return this.consent.isOptedIn()}has_opted_out_capturing(){return this.consent.isOptedOut()}clear_opt_in_out_capturing(){this.consent.reset(),this._sync_opt_out_with_persistence()}_is_bot(){return k?Bs(k,this.config.custom_blocked_useragents):void 0}_captureInitialPageview(){S&&!this._initialPageviewCaptured&&(this._initialPageviewCaptured=!0,this.capture("$pageview",{title:S.title},{send_instantly:!0}))}debug(e){!1===e?(null==_||_.console.log("You've disabled debug mode."),localStorage&&localStorage.removeItem("ph_debug"),this.set_config({debug:!1})):(null==_||_.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),localStorage&&localStorage.setItem("ph_debug","true"),this.set_config({debug:!0}))}_runBeforeSend(e){if(K(this.config.before_send))return e
var t=H(this.config.before_send)?this.config.before_send:[this.config.before_send],n=e
for(var r of t){if(n=r(n),K(n)){var i="Event '".concat(e.event,"' was rejected in beforeSend function")
return ee(e.event)?ne.warn("".concat(i,". This can cause unexpected behavior.")):ne.info(i),null}n.properties&&!W(n.properties)||ne.warn("Event '".concat(e.event,"' has no properties after beforeSend function, this is likely an error."))}return n}getPageViewId(){var e
return null===(e=this.pageViewManager._currentPageview)||void 0===e?void 0:e.pageViewId}captureTraceFeedback(e,t){this.capture("$ai_feedback",{$ai_trace_id:String(e),$ai_feedback_text:t})}captureTraceMetric(e,t,n){this.capture("$ai_metric",{$ai_trace_id:String(e),$ai_metric_name:t,$ai_metric_value:String(n)})}}!function(e,t){for(var n=0;n<t.length;n++)e.prototype[t[n]]=de(e.prototype[t[n]])}(Zs,["identify"])
var ea,ta=(ea=zs[Qs]=new Zs,function(){function e(){e.done||(e.done=!0,Js=!1,se(zs,(function(e){e._dom_loaded()})))}null!=S&&S.addEventListener?"complete"===S.readyState?e():ge(S,"DOMContentLoaded",e,{capture:!1}):_&&ne.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")}(),ea)
function na(...e){console.log(...e)}function ra(e,t){ta.capture(e,t)}function ia(){"string"==typeof window.self&&(o(),window.self=window),function(){try{ta.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N",{advanced_disable_decide:!0,advanced_disable_feature_flags:!0,advanced_disable_feature_flags_on_first_load:!0,advanced_disable_toolbar_metrics:!0,api_host:"https://us.i.posthog.com",autocapture:!1,capture_pageview:!1,disable_compression:!1,disable_persistence:!0,disable_session_recording:!0,disable_surveys:!0,person_profiles:"identified_only"})}catch(e){na(e)}}()}let oa=0,sa=0,aa=0,la=0,ca=0,ua=0,da=0
const fa=()=>Date.now(),pa=()=>Math.floor(fa()/1e3)
function ha(){return oa||(oa=fa()),oa}function va(){return sa||(sa=ha()-3e5),sa}function ga(){return aa||(aa=ha()-1728e5),aa}function _a(){return la||(la=Math.floor(ha()/1e3)),la}function ma(){return ca||(ca=_a()-120),ca}function ba(){return ua||(ua=_a()-86400),ua}function ya(){return da||(da=_a()-604800),da}function wa(e){return null===e}function ka(e){return void 0===e}const Sa=`${document.location.protocol}//${document.location.host}/`,xa=window.HCS?.defines?.cdn,Ea=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],Ca=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],Pa=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ta=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,$a=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,La=/guild_id=(?<guildId>\d+)/,Ia=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,Oa=/player_id=(?<playerId>\d+)/,Ra=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,Ma=/VL:.+?(?<vl>\d+)/,Fa=.2,Aa="joinallgroupsundersize",ja="index.php",Na="?cmd=",Da=`${ja}${Na}`,Ba="&subcmd=",qa="&target_username=",Ha=`${Da}auctionhouse`,Ua=`${Ha}&search=`,Ga=`${Da}log`,Wa=`${Da}ignore${Ba}add&ignore_username=`,za=`${Da}profile`,Va=`${za}&player_id=`,Qa=`${za}${Ba}dropitems`,Ja=`${Da}trade&target_player=`,Ka=`${Da}trade${Ba}createsecure${qa}`,Xa=`${Da}arena${Ba}`,Ya=`${ja}${`${Na}notepad&blank=1${Ba}`}`,Za=`${Ya}auctionsearch`,el=`${Da}points`,tl=`${Da}guild${Ba}`,nl=`${tl}log`,rl=`${tl}scouttower`,il=`${tl}groups&subcmd2=`,ol=`${tl}inventory&subcmd2=report&user=`,sl=`${tl}view&guild_id=`,al=`${il}joinall`,ll=`${il}${Aa}`,cl=`${Da}world`,ul=`${Da}findplayer`,dl=`${ul}&search_show_first=1&search_username=`,fl=`${Da}blacksmith`,pl=`${Da}quickbuff`,hl=`${Da}composing`,vl=`${Da}attackplayer${qa}`,gl=`${Da}${Ba}viewupdatearchive`,_l=`${Da}${Ba}viewarchive`,ml=`${Da}bounty`,bl=`${Da}inventing${Ba}viewrecipe&recipe_id=`,yl=`https://guide.fallensword.com/${Da}`,wl="after-update.actionlist",kl="buffs.player",Sl="update.player",xl="level.stats-player",El="gold.stats-player",Cl="prompt.worldDialogShop",Pl="keydown.controls",Tl="update.realm",$l="-success.action-response",Ll=`-1${$l}`,Il=`1${$l}`,Ol=`2${$l}`,Rl=`9${$l}`,Ml=`5${$l}`,Fl=`25${$l}`,Al=1,jl=2,Nl=16,Dl=128,Bl=256,ql="needToCompose",Hl="lastComposeCheck",Ul="characterVirtualLevel",Gl="enableGuildActivityTracker",Wl="lastLadderReset",zl="form",Vl="table",Ql="td",Jl="fsh_buffLog",Kl="stat-level",Xl="stat-defense",Yl="stat-attack",Zl="stat-damage",ec="stat-armor",tc="stat-hp",nc="stat-vl",rc="GM_",ic=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],oc=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],sc=`${xa}ui/world/action_spinner.gif`,ac=".fa-envelope",lc='a[href*="&player_id="]',cc=.002,uc=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],dc='input[name="blockedSkillList[]"]'
var fc={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addServerNode:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252",compactRanks:!1,lastModalGuildLogCheck:0,dailyQuestReRoll:!1}
const pc=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function hc(e,t){const n=window.localStorage.getItem(rc+e)
return wa(n)||ka(n)?t:function(e){const t=pc.find((t=>e.startsWith(t[0])))
return t?t[1](e):e}(n)}function vc(e){return hc(e,fc[e])}function gc(e){return"boolean"==typeof e}function _c(e){return"string"==typeof e}function mc(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(rc+e,t+n)}const bc=[[_c,(e,t)=>{mc(e,"S]",t)}],[e=>"number"==typeof e,(e,t)=>{t.toString().indexOf(".")<0&&mc(e,"N]",t)}],[gc,(e,t)=>{mc(e,"B]",t)}]]
function yc(e,t){const n=bc.find((e=>e[0](t)))
n&&n[1](e,t)}function wc(e){const t=`screenview__${e}`,n=vc(t)
Number.isFinite(n)&&n>ba()||(ra(t),yc(t,_a()))}function kc(e){return"function"==typeof e}function Sc(e){return"object"==typeof e}function xc(e,t){try{return JSON.parse(e,t)}catch(e){}}function Ec(e,t){return t?t.querySelector(e):document.querySelector(e)}function Cc(e){const t=Ec("link",document.body)
return new Promise((n=>{const r=document.createElement("link")
r.type="text/css",r.rel="stylesheet",r.onload=()=>{n()},r.href=e,t?t.before(r):document.body.append(r)}))}var Pc="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function Tc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $c,Lc={exports:{}}
var Ic=($c||($c=1,Lc.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==Pc?Pc:"undefined"!=typeof self?self:{}
function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){var t=e.default
if("function"==typeof t){var n=function(){return t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var r={},i={},o={},s={},a="<unknown>"
function l(e){return e.split("\n").reduce((function(e,t){var n=d(t)||p(t)||g(t)||y(t)||m(t)
return n&&e.push(n),e}),[])}var c=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,u=/\((\S*)(?::(\d+))(?::(\d+))\)/
function d(e){var t=c.exec(e)
if(!t)return null
var n=t[2]&&0===t[2].indexOf("native"),r=t[2]&&0===t[2].indexOf("eval"),i=u.exec(t[2])
return r&&null!=i&&(t[2]=i[1],t[3]=i[2],t[4]=i[3]),{file:n?null:t[2],methodName:t[1]||a,arguments:n?[t[2]]:[],lineNumber:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}var f=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
function p(e){var t=f.exec(e)
return t?{file:t[2],methodName:t[1]||a,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var h=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,v=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i
function g(e){var t=h.exec(e)
if(!t)return null
var n=t[3]&&t[3].indexOf(" > eval")>-1,r=v.exec(t[3])
return n&&null!=r&&(t[3]=r[1],t[4]=r[2],t[5]=null),{file:t[3],methodName:t[1]||a,arguments:t[2]?t[2].split(","):[],lineNumber:t[4]?+t[4]:null,column:t[5]?+t[5]:null}}var _=/^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i
function m(e){var t=_.exec(e)
return t?{file:t[3],methodName:t[1]||a,arguments:[],lineNumber:+t[4],column:t[5]?+t[5]:null}:null}var b=/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i
function y(e){var t=b.exec(e)
return t?{file:t[2],methodName:t[1]||a,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var w=n(Object.freeze({__proto__:null,parse:l}));(function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i)
return r(t,e),t},o=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){e.done?n(e.value):i(e.value).then(s,a)}l((r=r.apply(e,t||[])).next())}))},s=e&&e.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,r=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1]
break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o
break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o)
break}i[2]&&s.ops.pop(),s.trys.pop()
continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}}
Object.defineProperty(t,"__esModule",{value:!0}),t.logDeprecatedMethod=t.globalThisOrWindow=t.isBrowserConfig=t.clone=t.formatCGIData=t.filterUrl=t.filter=t.generateStackTrace=t.endpoint=t.instrumentConsole=t.instrument=t.isErrorObject=t.makeNotice=t.logger=t.sanitize=t.shallowClone=t.runAfterNotifyHandlers=t.runBeforeNotifyHandlers=t.getSourceForBacktrace=t.getCauses=t.calculateBacktraceShift=t.DEFAULT_BACKTRACE_SHIFT=t.makeBacktrace=t.objectIsExtensible=t.objectIsEmpty=t.mergeNotice=t.merge=void 0
var a=i(w)
function l(e,t){var n={}
for(var r in e)n[r]=e[r]
for(var r in t)n[r]=t[r]
return n}function c(e,t){var n=l(e,t)
return e.context&&t.context&&(n.context=l(e.context,t.context)),n}function u(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1
return!0}function d(e){return"function"!=typeof Object.isExtensible||Object.isExtensible(e)}function f(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=console),!e)return[]
try{var r=a.parse(e).map((function(e){return{file:e.file,method:e.methodName,number:e.lineNumber,column:e.column}}))
return t&&r.splice(0,h(r)),r}catch(e){return n.debug(e),[]}}function p(e){var t=!1,n=!1
return e.file&&(t=e.file.toLowerCase().indexOf("@honeybadger-io")>-1),e.method&&(n=e.method.toLowerCase().indexOf("@honeybadger-io")>-1),t||n}function h(e){for(var n=0,r=0;r<e.length;r++){var i=e[r]
if(!p(i)){if(!i.file||"<anonymous>"===i.file){var o=e[r+1]
if(o&&p(o)){n++
continue}}break}n++}return n||t.DEFAULT_BACKTRACE_SHIFT}function v(e,t){if(e.cause){for(var n=[],r=e;n.length<3&&(r=r.cause);)n.push({class:r.name,message:r.message,backtrace:"string"==typeof r.stack?f(r.stack,!1,t):null})
return n}return[]}function g(e,t){return o(this,void 0,void 0,(function(){var n,r,i,o
return s(this,(function(s){switch(s.label){case 0:if(n=[],!t||!e||!e.length)return[2,n]
r=0,s.label=1
case 1:return e.length?(i=e.splice(0)[r],[4,t(i.file)]):[3,3]
case 2:return o=s.sent(),n[r]=j(o,i.number),r++,[3,1]
case 3:return[2,n]}}))}))}function _(e,t){for(var n=[],r=!0,i=0,o=t.length;i<o;i++){var s=(0,t[i])(e)
!1===s&&(r=!1),n.push(s)}return{results:n,result:r}}function m(e,t,n){e&&e.afterNotify&&e.afterNotify(n,e)
for(var r=0,i=t.length;r<i;r++)t[r](n,e)
return!0}function b(e){if("object"!=typeof e||null===e)return{}
var t={}
for(var n in e)t[n]=e[n]
return t}function y(e,t){void 0===t&&(t=8)
var n=[]
function r(e){if(!e||"object"!=typeof e)return!1
for(var t=0;t<n.length;t++)if(n[t]===e)return!0
return n.push(e),!1}function i(e){var t=typeof e
return/function/.test(t)?"toJSON"===e.name:!/symbol/.test(t)&&null!==e&&("object"!=typeof e||void 0!==e.hasOwnProperty)}function o(e,n){if(void 0===n&&(n=0),n>=t)return"[DEPTH]"
if(!i(e))return Object.prototype.toString.call(e)
if(r(e))return"[RECURSION]"
if(Array.isArray(e))return e.map((function(e){return s(e,n+1)}))
if("object"==typeof e){var o={}
for(var a in e){var l=e[a]
Object.prototype.hasOwnProperty.call(e,a)&&null!=a&&null!=l&&(o[a]=s(l,n+1))}return o}return e}function s(e,t){void 0===t&&(t=0)
try{return o(e,t)}catch(e){return"[ERROR] ".concat(e)}}return s(e)}function k(e){var t=function(t){return function(){for(var n,r=[],i=0;i<arguments.length;i++)r[i]=arguments[i]
if("debug"===t){if(!e.config.debug)return
t="log"}r.unshift("[Honeybadger]"),(n=e.config.logger)[t].apply(n,r)}}
return{log:t("log"),info:t("info"),debug:t("debug"),warn:t("warn"),error:t("error")}}function S(e){var t
if(e)if(x(e)){var n=e
t=l(e,{name:n.name,message:n.message,stack:n.stack,cause:n.cause})}else t="object"==typeof e?b(e):{message:String(e)}
else t={}
return t}function x(e){return e instanceof Error||"[object Error]"===Object.prototype.toString.call(e)}function E(e,t,n){if(e&&t&&n&&t in e)try{for(var r=e[t];r&&r.__hb_original;)r=r.__hb_original
e[t]=n(r),e[t].__hb_original=r}catch(e){}}t.merge=l,t.mergeNotice=c,t.objectIsEmpty=u,t.objectIsExtensible=d,t.makeBacktrace=f,t.DEFAULT_BACKTRACE_SHIFT=3,t.calculateBacktraceShift=h,t.getCauses=v,t.getSourceForBacktrace=g,t.runBeforeNotifyHandlers=_,t.runAfterNotifyHandlers=m,t.shallowClone=b,t.sanitize=y,t.logger=k,t.makeNotice=S,t.isErrorObject=x,t.instrument=E
var C=!1,P=[]
function T(e,t){e&&e.console&&t&&(P.push(t),C||(C=!0,["debug","info","warn","error","log"].forEach((function(t){E(e.console,t,(function(n){return function(){var r=Array.prototype.slice.call(arguments)
P.forEach((function(e){try{e(t,r)}catch(e){}})),"function"==typeof n&&Function.prototype.apply.call(n,e.console,arguments)}}))}))))}function $(e,t){var n=e.trim().replace(/\/$/,"")
return t=t.trim().replace(/(^\/|\/$)/g,""),"".concat(n,"/").concat(t)}function L(){try{throw new Error("")}catch(e){if(e.stack)return e.stack}for(var e=10,t=[],n=arguments.callee;n&&t.length<e;){/function(?:\s+([\w$]+))+\s*\(/.test(n.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>")
try{n=n.caller}catch(e){break}}return t.join("\n")}function I(e,t){if(R("Object",e)){R("Array",t)||(t=[])
var n=[]
return r(e)}function r(e){var i,o
if(R("Object",e)||R("Array",e)){if(-1!==n.indexOf(e))return"[CIRCULAR DATA STRUCTURE]"
n.push(e)}if(R("Object",e)){for(i in o={},e)O(i,t)?o[i]="[FILTERED]":o[i]=r(e[i])
return o}return R("Array",e)?e.map((function(e){return r(e)})):R("Function",e)?"[FUNC]":e}}function O(e,t){for(var n=0;n<t.length;n++)if(-1!==e.toLowerCase().indexOf(t[n].toLowerCase()))return!0
return!1}function R(e,t){var n=Object.prototype.toString.call(t).slice(8,-1)
return null!=t&&n===e}function M(e,t){if(!t)return e
if("string"!=typeof e)return e
var n=e.split(/\?/,2)[1]
if(!n)return e
var r=e
return n.split(/[&]\s?/).forEach((function(e){var n=e.split("=",2),i=n[0],o=n[1]
O(i,t)&&(r=r.replace("".concat(i,"=").concat(o),"".concat(i,"=[FILTERED]")))})),r}function F(e,t){void 0===t&&(t="")
var n={}
return Object.keys(e).forEach((function(r){var i=t+r.replace(/\W/g,"_").toUpperCase()
n[i]=e[r]})),n}function A(e){return JSON.parse(JSON.stringify(e))}function j(e,t,n){if(void 0===n&&(n=2),!e)return null
var r=e.split("\n")
r.unshift("")
for(var i=t+n,o={},s=t-n;s<=i;s++){var a=r[s]
"string"==typeof a&&(o[s]=a)}return o}function N(e){return void 0!==e.async}function D(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window}t.instrumentConsole=T,t.endpoint=$,t.generateStackTrace=L,t.filter=I,t.filterUrl=M,t.formatCGIData=F,t.clone=A,t.isBrowserConfig=N,t.globalThisOrWindow=D
var B={}
function q(e,t,n,r){void 0===r&&(r=100)
var i="".concat(t,"-").concat(n)
if(void 0===B[i]&&(B[i]=0),B[i]%r==0){var o="Deprecation warning: ".concat(t," has been deprecated; please use ").concat(n," instead.")
e.warn(o),B[i]++}else B[i]++}t.logDeprecatedMethod=q})(s),Object.defineProperty(o,"__esModule",{value:!0})
var k=s
function S(e){return void 0===e&&(e=(0,k.globalThisOrWindow)()),{shouldReloadOnConfigure:!1,load:function(t){function n(){return t.config.eventsEnabled}n()&&(0,k.instrumentConsole)(e,(function(e,r){if(n()&&0!==r.length){var i={severity:e}
"string"==typeof r[0]?(i.message=r[0],i.args=r.slice(1)):i.args=r,t.event("log",i)}}))}}}o.default=S
var x={},E={}
Object.defineProperty(E,"__esModule",{value:!0}),E.GlobalStore=void 0
var C=s,P=function(){function e(e,t){this.contents=e,this.breadcrumbsLimit=t}return e.create=function(t,n){return new e(t,n)},e.prototype.available=function(){return!0},e.prototype.getContents=function(e){var t=e?this.contents[e]:this.contents
return JSON.parse(JSON.stringify(t))},e.prototype.setContext=function(e){this.contents.context=(0,C.merge)(this.contents.context,e||{})},e.prototype.addBreadcrumb=function(e){this.contents.breadcrumbs.length==this.breadcrumbsLimit&&this.contents.breadcrumbs.shift(),this.contents.breadcrumbs.push(e)},e.prototype.clear=function(){this.contents.context={},this.contents.breadcrumbs=[]},e.prototype.run=function(e){return e()},e}()
E.GlobalStore=P
var T={}
class ${static parse(e){return e.trim().split("\n").map((e=>JSON.parse(e)))}static stringify(e){return e.map((e=>JSON.stringify(e))).join("\n")}}var L=Object.freeze({__proto__:null,NdJson:$}),I=n(L),O={}
Object.defineProperty(O,"__esModule",{value:!0}),O.CONFIG=void 0,O.CONFIG={apiKey:null,endpoint:"https://api.honeybadger.io",environment:null,hostname:null,projectRoot:null,component:null,action:null,revision:null,reportData:null,breadcrumbsEnabled:!0,eventsEnabled:!1,maxBreadcrumbs:40,maxObjectDepth:8,logger:console,developmentEnvironments:["dev","development","test"],debug:!1,tags:null,enableUncaught:!0,enableUnhandledRejection:!0,afterUncaught:function(){return!0},filters:["creditcard","password"],__plugins:[]}
var R=e&&e.__assign||function(){return R=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},R.apply(this,arguments)},M=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){e.done?n(e.value):i(e.value).then(s,a)}l((r=r.apply(e,t||[])).next())}))},F=e&&e.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,r=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1]
break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o
break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o)
break}i[2]&&s.ops.pop(),s.trys.pop()
continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}}
Object.defineProperty(T,"__esModule",{value:!0}),T.ThrottledEventsLogger=void 0
var A=I,j=s,N=O,D=function(){function e(e,t){this.config=e,this.transport=t,this.queue=[],this.isProcessing=!1,this.config=R(R({},N.CONFIG),e),this.logger=this.originalLogger()}return e.prototype.configure=function(e){for(var t in e)this.config[t]=e[t]},e.prototype.log=function(e){this.queue.push(e),this.isProcessing||this.processQueue()},e.prototype.flushAsync=function(){return this.logger.debug("[Honeybadger] Flushing events"),this.send()},e.prototype.processQueue=function(){var e=this
0===this.queue.length||this.isProcessing||(this.isProcessing=!0,this.send().then((function(){setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)})).catch((function(t){e.logger.error("[Honeybadger] Error making HTTP request:",t),setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)})))},e.prototype.send=function(){return M(this,void 0,void 0,(function(){var e,t
return F(this,(function(n){return 0===this.queue.length?[2]:(e=this.queue.slice(),this.queue=[],t=A.NdJson.stringify(e),[2,this.makeHttpRequest(t)])}))}))},e.prototype.makeHttpRequest=function(e){return M(this,void 0,void 0,(function(){var t=this
return F(this,(function(n){return[2,this.transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json"},method:"POST",endpoint:(0,j.endpoint)(this.config.endpoint,"/v1/events"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},e).then((function(){t.config.debug&&t.logger.debug("[Honeybadger] Events sent successfully")})).catch((function(e){t.logger.error("[Honeybadger] Error sending events: ".concat(e.message))}))]}))}))},e.prototype.originalLogger=function(){var e,t,n,r,i
return{log:null!==(e=console.log.__hb_original)&&void 0!==e?e:console.log,info:null!==(t=console.info.__hb_original)&&void 0!==t?t:console.info,debug:null!==(n=console.debug.__hb_original)&&void 0!==n?n:console.debug,warn:null!==(r=console.warn.__hb_original)&&void 0!==r?r:console.warn,error:null!==(i=console.error.__hb_original)&&void 0!==i?i:console.error}},e}()
T.ThrottledEventsLogger=D
var B=e&&e.__assign||function(){return B=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},B.apply(this,arguments)},q=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){e.done?n(e.value):i(e.value).then(s,a)}l((r=r.apply(e,t||[])).next())}))},H=e&&e.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,r=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1]
break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o
break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o)
break}i[2]&&s.ops.pop(),s.trys.pop()
continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}}
Object.defineProperty(x,"__esModule",{value:!0}),x.Client=void 0
var U=s,G=E,W=T,z=O,V=/,|\s+/,Q=/\S/,J=function(){function e(e,t){void 0===e&&(e={}),this.__pluginsLoaded=!1,this.__store=null,this.__beforeNotifyHandlers=[],this.__afterNotifyHandlers=[],this.__notifier={name:"@honeybadger-io/core",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",version:"6.11.0"},this.config=B(B({},z.CONFIG),e),this.__initStore(),this.__transport=t,this.__eventsLogger=new W.ThrottledEventsLogger(this.config,this.__transport),this.logger=(0,U.logger)(this)}return e.prototype.getVersion=function(){return this.__notifier.version},e.prototype.getNotifier=function(){return this.__notifier},e.prototype.setNotifier=function(e){this.__notifier=e},e.prototype.configure=function(e){for(var t in void 0===e&&(e={}),e)this.config[t]=e[t]
return this.__eventsLogger.configure(this.config),this.loadPlugins(),this},e.prototype.loadPlugins=function(){var e=this;(this.__pluginsLoaded?this.config.__plugins.filter((function(e){return e.shouldReloadOnConfigure})):this.config.__plugins).forEach((function(t){return t.load(e)})),this.__pluginsLoaded=!0},e.prototype.__initStore=function(){this.__store=new G.GlobalStore({context:{},breadcrumbs:[]},this.config.maxBreadcrumbs)},e.prototype.beforeNotify=function(e){return this.__beforeNotifyHandlers.push(e),this},e.prototype.afterNotify=function(e){return this.__afterNotifyHandlers.push(e),this},e.prototype.setContext=function(e){return"object"==typeof e&&null!=e&&this.__store.setContext(e),this},e.prototype.resetContext=function(e){return this.logger.warn("Deprecation warning: `Honeybadger.resetContext()` has been deprecated; please use `Honeybadger.clear()` instead."),this.__store.clear(),"object"==typeof e&&null!==e&&this.__store.setContext(e),this},e.prototype.clear=function(){return this.__store.clear(),this},e.prototype.notify=function(e,t,n){var r=this
void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var i=this.makeNotice(e,t,n),o=i&&i.backtrace?i.backtrace.map((function(e){return(0,U.shallowClone)(e)})):null,s=this.__runPreconditions(i)
return s instanceof Error?((0,U.runAfterNotifyHandlers)(i,this.__afterNotifyHandlers,s),!1):s instanceof Promise?(s.then((function(e){return e instanceof Error?((0,U.runAfterNotifyHandlers)(i,r.__afterNotifyHandlers,e),!1):r.__send(i,o)})),!0):(this.__send(i,o).catch((function(e){})),!0)},e.prototype.notifyAsync=function(e,t,n){var r=this
return void 0===t&&(t=void 0),void 0===n&&(n=void 0),new Promise((function(i,o){var s,a
s=e.afterNotify?e:t&&t.afterNotify?t:n&&n.afterNotify?n:t&&"object"==typeof t?t:n||(t={}),a=s.afterNotify,s.afterNotify=function(e){if(null==a||a.call(r,e),e)return o(e)
i()},r.notify(e,t,n)}))},e.prototype.makeNotice=function(e,t,n){void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var r=(0,U.makeNotice)(e)
if(t&&"object"!=typeof t&&(t={name:String(t)}),t&&(r=(0,U.mergeNotice)(r,t)),"object"==typeof n&&null!==n&&(r=(0,U.mergeNotice)(r,n)),(0,U.objectIsEmpty)(r))return null
var i=this.__store.getContents("context"),o=this.__constructTags(r.tags),s=this.__constructTags(i.tags),a=this.__constructTags(this.config.tags),l=o.concat(s).concat(a),c=l.filter((function(e,t){return l.indexOf(e)===t}))
return r=(0,U.merge)(r,{name:r.name||"Error",context:(0,U.merge)(i,r.context),projectRoot:r.projectRoot||this.config.projectRoot,environment:r.environment||this.config.environment,component:r.component||this.config.component,action:r.action||this.config.action,revision:r.revision||this.config.revision,tags:c}),Array.isArray(r.backtrace)&&r.backtrace.length||("string"==typeof r.stack&&r.stack.trim()?r.backtrace=(0,U.makeBacktrace)(r.stack,!1,this.logger):(r.stack=(0,U.generateStackTrace)(),r.backtrace=(0,U.makeBacktrace)(r.stack,!0,this.logger))),r},e.prototype.addBreadcrumb=function(e,t){if(this.config.breadcrumbsEnabled){t=t||{}
var n=(0,U.shallowClone)(t.metadata),r=t.category||"custom",i=(new Date).toISOString()
return this.__store.addBreadcrumb({category:r,message:e,metadata:n,timestamp:i}),this}},e.prototype.logEvent=function(e){(0,U.logDeprecatedMethod)(this.logger,"Honeybadger.logEvent","Honeybadger.event"),this.event("log",e)},e.prototype.event=function(e,t){var n
"object"==typeof e&&(t=e,e=null!==(n=e.event_type)&&void 0!==n?n:void 0),this.__eventsLogger.log(B({event_type:e,ts:(new Date).toISOString()},t))},e.prototype.flushAsync=function(){return this.__eventsLogger.flushAsync()},e.prototype.__getBreadcrumbs=function(){return this.__store.getContents("breadcrumbs").slice()},e.prototype.__getContext=function(){return this.__store.getContents("context")},e.prototype.__developmentMode=function(){return!0!==this.config.reportData&&this.config.environment&&this.config.developmentEnvironments.includes(this.config.environment)},e.prototype.__buildPayload=function(e){var t=(0,U.filter)(e.headers,this.config.filters)||{},n=(0,U.filter)(B(B({},e.cgiData),(0,U.formatCGIData)(t,"HTTP_")),this.config.filters)
return{notifier:this.__notifier,breadcrumbs:{enabled:!!this.config.breadcrumbsEnabled,trail:e.__breadcrumbs||[]},error:{class:e.name,message:e.message,backtrace:e.backtrace,fingerprint:e.fingerprint,tags:e.tags,causes:(0,U.getCauses)(e,this.logger)},request:{url:(0,U.filterUrl)(e.url,this.config.filters),component:e.component,action:e.action,context:e.context,cgi_data:n,params:(0,U.filter)(e.params,this.config.filters)||{},session:(0,U.filter)(e.session,this.config.filters)||{}},server:{project_root:e.projectRoot,environment_name:e.environment,revision:e.revision,hostname:this.config.hostname,time:(new Date).toUTCString()},details:e.details||{}}},e.prototype.__constructTags=function(e){return e?e.toString().split(V).filter((function(e){return Q.test(e)})):[]},e.prototype.__runPreconditions=function(e){var t=this,n=null
e||(this.logger.debug("failed to build error report"),n=new Error("failed to build error report")),!1===this.config.reportData&&(this.logger.debug("skipping error report: honeybadger.js is disabled",e),n=new Error("honeybadger.js is disabled")),this.__developmentMode()&&(this.logger.log("honeybadger.js is in development mode; the following error report will be sent in production.",e),n=new Error("honeybadger.js is in development mode")),this.config.apiKey||(this.logger.warn("could not send error report: no API key has been configured",e),n=new Error("missing API key"))
var r=(0,U.runBeforeNotifyHandlers)(e,this.__beforeNotifyHandlers)
return n||r.result||(this.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers returned false")),r.results.length&&r.results.some((function(e){return e instanceof Promise}))?Promise.allSettled(r.results).then((function(r){if(!n&&r.some((function(e){return"rejected"===e.status||!1===e.value}))&&(t.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers (async) returned false")),n)return n})):n},e.prototype.__send=function(e,t){var n=this
return this.config.breadcrumbsEnabled?(this.addBreadcrumb("Honeybadger Notice",{category:"notice",metadata:{message:e.message,name:e.name,stack:e.stack}}),e.__breadcrumbs=this.__store.getContents("breadcrumbs")):e.__breadcrumbs=[],(0,U.getSourceForBacktrace)(t,this.__getSourceFileHandler).then((function(t){return q(n,void 0,void 0,(function(){var n
return H(this,(function(r){return t.forEach((function(t,n){e.backtrace[n].source=t})),n=this.__buildPayload(e),[2,this.__transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json",Accept:"text/json, application/json"},method:"POST",endpoint:(0,U.endpoint)(this.config.endpoint,"/v1/notices/js"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},n)]}))}))})).then((function(t){if(201!==t.statusCode)return(0,U.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,new Error("Bad HTTP response: ".concat(t.statusCode))),n.logger.warn("Error report failed: unknown response from server. code=".concat(t.statusCode)),!1
var r=JSON.parse(t.body).id
return(0,U.runAfterNotifyHandlers)((0,U.merge)(e,{id:r}),n.__afterNotifyHandlers),n.logger.info("Error report sent ⚡ https://app.honeybadger.io/notice/".concat(r)),!0})).catch((function(t){return n.logger.error("Error report failed: an unknown error occurred.","message=".concat(t.message)),(0,U.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,t),!1}))},e}()
x.Client=J
var K={}
Object.defineProperty(K,"__esModule",{value:!0}),function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e&&e.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},a=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i)
return r(t,e),t},l=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Plugins=t.Util=t.Types=t.Client=void 0
var c=l(o),u=x
Object.defineProperty(t,"Client",{enumerable:!0,get:function(){return u.Client}}),i(E,t),t.Types=a(K),t.Util=a(s),t.Plugins={events:c.default}}(i)
var X={}
Object.defineProperty(X,"__esModule",{value:!0}),X.preferCatch=X.encodeCookie=X.decodeCookie=X.localURLPathname=X.parseURL=X.nativeFetch=X.stringTextOfElement=X.stringSelectorOfElement=X.stringNameOfElement=void 0
var Y=i.Util.globalThisOrWindow
function Z(e){if(!e||!e.tagName)return""
var t=e.tagName.toLowerCase()
if("html"===t)return""
e.id&&(t+="#".concat(e.id))
var n=e.getAttribute("class")
n&&n.split(/\s+/).forEach((function(e){t+=".".concat(e)})),["alt","name","title","type"].forEach((function(n){var r=e.getAttribute(n)
r&&(t+="[".concat(n,'="').concat(r,'"]'))}))
var r=le(e)
return r.length>1&&(t+=":nth-child(".concat(Array.prototype.indexOf.call(r,e)+1,")")),t}function ee(e){var t=Z(e)
if(e.parentNode&&e.parentNode.tagName){var n=ee(e.parentNode)
if(n.length>0)return"".concat(n," > ").concat(t)}return t}function te(e){var t=e.textContent||e.innerText||""
return t||"submit"!==e.type&&"button"!==e.type||(t=e.value),ce(t.trim(),300)}function ne(){var e=Y()
if(!e.fetch)return!1
if(re(e.fetch))return!0
if("undefined"==typeof document)return!1
try{var t=document.createElement("iframe")
t.style.display="none",document.head.appendChild(t)
var n=t.contentWindow.fetch&&re(t.contentWindow.fetch)
return document.head.removeChild(t),n}catch(e){console&&console.warn&&console.warn("failed to detect native fetch via iframe: "+e)}return!1}function re(e){return-1!==e.toString().indexOf("native")}function ie(e){var t=e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)||{}
return{protocol:t[2],host:t[4],pathname:t[5]}}function oe(e){var t=ie(e),n=ie(document.URL)
return t.host&&t.protocol?t.protocol===n.protocol&&t.host===n.host?t.pathname:"".concat(t.protocol,"://").concat(t.host).concat(t.pathname):t.pathname}function se(e){var t={}
return e.split(/[;,]\s?/).forEach((function(e){var n=e.split("=",2),r=n[0],i=n[1]
t[r]=i})),t}function ae(e){if("object"==typeof e){var t=[]
for(var n in e)t.push(n+"="+e[n])
return t.join(";")}}function le(e){try{var t=e.parentNode.childNodes,n=[]
return Array.prototype.forEach.call(t,(function(t){t.tagName&&t.tagName===e.tagName&&n.push(t)})),n}catch(e){return[]}}function ce(e,t){return e.length>t&&(e=e.substr(0,t)+"..."),e}X.stringNameOfElement=Z,X.stringSelectorOfElement=ee,X.stringTextOfElement=te,X.nativeFetch=ne,X.parseURL=ie,X.localURLPathname=oe,X.decodeCookie=se,X.encodeCookie=ae,X.preferCatch=function(){var e=!0
if("undefined"==typeof window)return e
if(window.atob||(e=!1),window.ErrorEvent)try{0===new window.ErrorEvent("").colno&&(e=!1)}catch(e){}return e}()
var ue={}
Object.defineProperty(ue,"__esModule",{value:!0}),ue.onError=ue.ignoreNextOnError=void 0
var de,fe=i,pe=fe.Util.instrument,he=fe.Util.makeNotice,ve=fe.Util.globalThisOrWindow,ge=0
function _e(){ge+=1,clearTimeout(de),de=setTimeout((function(){ge=0}))}function me(e){return void 0===e&&(e=ve()),{load:function(t){pe(e,"onerror",(function(n){var r=function(e,n,r,i,o){if(t.logger.debug("window.onerror callback invoked",arguments),ge>0)return t.logger.debug("Ignoring window.onerror (error likely reported earlier)",arguments),void(ge-=1)
if(0===r&&/Script error\.?/.test(e))t.config.enableUncaught&&t.logger.warn("Ignoring cross-domain script error: enable CORS to track these types of errors",arguments)
else{var s=he(o)
s.name||(s.name="window.onerror"),s.message||(s.message=e),s.stack||(s.stack=[s.message,"\n    at ? (",n||"unknown",":",r||0,":",i||0,")"].join("")),t.addBreadcrumb("window.onerror"!==s.name&&s.name?"window.onerror: ".concat(s.name):"window.onerror",{category:"error",metadata:{name:s.name,message:s.message,stack:s.stack}}),t.config.enableUncaught&&t.notify(s)}}
return function(t,i,o,s,a){return r(t,i,o,s,a),"function"==typeof n&&n.apply(e,arguments)}}))}}}ue.ignoreNextOnError=_e,ue.onError=me
var be={}
Object.defineProperty(be,"__esModule",{value:!0})
var ye=i,we=ye.Util.instrument,ke=ye.Util.globalThisOrWindow
function Se(e){return void 0===e&&(e=ke()),{load:function(t){t.config.enableUnhandledRejection&&we(e,"onunhandledrejection",(function(e){function n(e){var n
if(t.logger.debug("window.onunhandledrejection callback invoked",arguments),t.config.enableUnhandledRejection){var r=e.reason
if(r instanceof Error){var i="unknown",o=0,s="".concat(r.message,"\n    at ? (").concat(i,":").concat(o,")"),a=r.stack||s,l={name:r.name,message:"UnhandledPromiseRejectionWarning: ".concat(r),stack:a}
return t.addBreadcrumb("window.onunhandledrejection: ".concat(l.name),{category:"error",metadata:l}),void t.notify(l)}var c="string"==typeof r?r:null!==(n=JSON.stringify(r))&&void 0!==n?n:"Unspecified reason"
t.notify({name:"window.onunhandledrejection",message:"UnhandledPromiseRejectionWarning: ".concat(c)})}}return function(t){n(t),"function"==typeof e&&e.apply(this,arguments)}}))}}}be.default=Se
var xe={}
Object.defineProperty(xe,"__esModule",{value:!0})
var Ee=i,Ce=X,Pe=Ee.Util.sanitize,Te=Ee.Util.instrument,$e=Ee.Util.instrumentConsole,Le=Ee.Util.globalThisOrWindow
function Ie(e){return void 0===e&&(e=Le()),{load:function(t){function n(e){return!0===t.config.breadcrumbsEnabled||(e?!0===t.config.breadcrumbsEnabled[e]:!1!==t.config.breadcrumbsEnabled)}!function(){function r(e){return Array.isArray(e)?e.map((function(e){try{return String(e)}catch(e){return"[unknown]"}})).join(" "):""}n("console")&&$e(e,(function(e,n){var i=r(n),o={category:"log",metadata:{level:e,arguments:Pe(n,3)}}
t.addBreadcrumb(i,o)}))}(),n("dom")&&"function"==typeof e.addEventListener&&e.addEventListener("click",(function(e){var n,r,i
try{n=(0,Ce.stringNameOfElement)(e.target),r=(0,Ce.stringSelectorOfElement)(e.target),i=(0,Ce.stringTextOfElement)(e.target)}catch(e){n="UI Click",r="[unknown]",i="[unknown]"}0!==n.length&&t.addBreadcrumb(n,{category:"ui.click",metadata:{selector:r,text:i,event:e}})}),!!e.location),n("network")&&"undefined"!=typeof XMLHttpRequest&&(Te(XMLHttpRequest.prototype,"open",(function(e){return function(){var t=this,n=arguments[1],r="string"==typeof n?n:String(n),i="string"==typeof arguments[0]?arguments[0].toUpperCase():arguments[0],o="".concat(i," ").concat((0,Ce.localURLPathname)(r))
this.__hb_xhr={type:"xhr",method:i,url:r,message:o},"function"==typeof e&&e.apply(t,arguments)}})),Te(XMLHttpRequest.prototype,"send",(function(e){return function(){var n=this
function r(){if(4===n.readyState){var e=void 0
n.__hb_xhr&&(n.__hb_xhr.status_code=n.status,e=n.__hb_xhr.message,delete n.__hb_xhr.message),t.addBreadcrumb(e||"XMLHttpRequest",{category:"request",metadata:n.__hb_xhr})}}"onreadystatechange"in n&&"function"==typeof n.onreadystatechange?Te(n,"onreadystatechange",(function(e){return function(){r(),"function"==typeof e&&e.apply(this,arguments)}})):n.onreadystatechange=r,"function"==typeof e&&e.apply(n,arguments)}}))),n("network")&&(0,Ce.nativeFetch)()&&Te(e,"fetch",(function(n){return function(){var r,i=arguments[0],o="GET"
"string"==typeof i?r=i:"Request"in e&&i instanceof Request?(r=i.url,i.method&&(o=i.method)):r=String(i),arguments[1]&&arguments[1].method&&(o=arguments[1].method),"string"==typeof o&&(o=o.toUpperCase())
var s="".concat(o," ").concat("undefined"==typeof document?r:(0,Ce.localURLPathname)(r)),a={type:"fetch",method:o,url:r}
return n.apply(this,arguments).then((function(e){return a.status_code=e.status,t.addBreadcrumb(s,{category:"request",metadata:a}),e})).catch((function(e){throw t.addBreadcrumb("fetch error",{category:"error",metadata:a}),e}))}})),function(){if(n("navigation")&&null!=e.location){var r=e.location.href
"function"==typeof addEventListener&&addEventListener("popstate",(function(t){i(r,e.location.href)})),void 0!==e.history&&(Te(e.history,"pushState",o),Te(e.history,"replaceState",o))}function i(e,n){r=n,t.addBreadcrumb("Page changed",{category:"navigation",metadata:{from:e,to:n}})}function o(e){return function(){var t=arguments.length>2?arguments[2]:void 0
return t&&i(r,String(t)),e.apply(this,arguments)}}}()}}}xe.default=Ie
var Oe={}
Object.defineProperty(Oe,"__esModule",{value:!0})
var Re=i,Me=Re.Util.instrument,Fe=Re.Util.globalThisOrWindow
function Ae(e){return void 0===e&&(e=Fe()),{load:function(t){!function(){function n(e){return function(n){return function(r,i){if("function"==typeof r){var o=Array.prototype.slice.call(arguments,2)
return r=t.__wrap(r,e),n((function(){r.apply(void 0,o)}),i)}return n(r,i)}}}Me(e,"setTimeout",n({component:"setTimeout"})),Me(e,"setInterval",n({component:"setInterval"}))}()}}}Oe.default=Ae
var je={}
Object.defineProperty(je,"__esModule",{value:!0})
var Ne=i,De=Ne.Util.instrument,Be=Ne.Util.globalThisOrWindow
function qe(e){return void 0===e&&(e=Be()),{load:function(t){["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"].forEach((function(n){var r=e[n]&&e[n].prototype
r&&Object.prototype.hasOwnProperty.call(r,"addEventListener")&&(De(r,"addEventListener",(function(e){var r={component:"".concat(n,".prototype.addEventListener")}
return function(n,i,o,s){try{i&&null!=i.handleEvent&&(i.handleEvent=t.__wrap(i.handleEvent,r))}catch(e){t.logger.error(e)}return e.call(this,n,t.__wrap(i,r),o,s)}})),De(r,"removeEventListener",(function(e){return function(n,r,i,o){return e.call(this,n,r,i,o),e.call(this,n,t.__wrap(r),i,o)}})))}))}}}je.default=qe
var He={},Ue=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){e.done?n(e.value):i(e.value).then(s,a)}l((r=r.apply(e,t||[])).next())}))},Ge=e&&e.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,r=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1]
break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o
break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o)
break}i[2]&&s.ops.pop(),s.trys.pop()
continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}}
Object.defineProperty(He,"__esModule",{value:!0}),He.BrowserTransport=void 0
var We=i,ze=We.Util.sanitize,Ve=We.Util.globalThisOrWindow
function Qe(e){return Object.entries(e)}var Je=function(){function e(e){void 0===e&&(e={}),this.headers={},this.headers=e}return e.prototype.defaultHeaders=function(){return this.headers},e.prototype.send=function(e,t){return Ue(this,void 0,void 0,(function(){var n,r,i,o,s
return Ge(this,(function(a){switch(a.label){case 0:return n=e.headers?Qe(e.headers):[],r=this.defaultHeaders(),n.forEach((function(e){var t=e[0],n=e[1]
null!=t&&null!=n&&(r[String(t)]=String(n))})),i={method:e.method,headers:r},"POST"===e.method&&t&&(i.body="string"==typeof t?t:JSON.stringify(ze(t,e.maxObjectDepth))),[4,Ve().fetch(e.endpoint,i)]
case 1:return[4,(o=a.sent()).text()]
case 2:return s=a.sent(),[2,Promise.resolve({statusCode:o.status,body:s})]}}))}))},e}()
He.BrowserTransport=Je
var Ke={},Xe=e&&e.__assign||function(){return Xe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},Xe.apply(this,arguments)}
Object.defineProperty(Ke,"__esModule",{value:!0}),Ke.BrowserFeedbackForm=void 0
var Ye=i.Util.globalThisOrWindow,Ze=function(){function t(e,t,n){this.config=e,this.logger=t,this.scriptUrl=n}return t.prototype.appendUserFeedbackTag=function(t,n){void 0===n&&(n={})
var r=t.document.createElement("script")
r.setAttribute("src",this.scriptUrl),r.setAttribute("async","true"),n.onLoad&&(r.onload=n.onLoad),(e.document.head||e.document.body).appendChild(r)},t.prototype.isUserFeedbackUrlAlreadyVisible=function(){for(var e=Ye(),t=this.scriptUrl,n=0;n<e.document.scripts.length;n++)if(e.document.scripts[n].src===t)return!0
return!1},t.prototype.show=function(e,t){if(void 0===t&&(t={}),"function"==typeof this.appendUserFeedbackTag)if(this.config&&this.config.apiKey)if(e){var n=Ye()
void 0!==n.document?this.isUserFeedbackUrlAlreadyVisible()?this.logger.debug("User feedback form is already visible"):(n.honeybadgerUserFeedbackOptions=Xe(Xe({},t),{apiKey:this.config.apiKey,endpoint:this.config.userFeedbackEndpoint,noticeId:e}),this.appendUserFeedbackTag(n,t)):this.logger.debug("global.document is undefined. Cannot attach script")}else this.logger.debug("Can't show user feedback form without a notice already reported")
else this.logger.debug("Client not initialized")
else this.logger.debug("Feedback form is not available in this environment")},t}()
Ke.BrowserFeedbackForm=Ze,function(t){var n,r=e&&e.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=e&&e.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},o.apply(this,arguments)},s=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){e.done?n(e.value):i(e.value).then(s,a)}l((r=r.apply(e,t||[])).next())}))},a=e&&e.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i
switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,r=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1]
break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o
break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o)
break}i[2]&&s.ops.pop(),s.trys.pop()
continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}},l=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Types=t.getUserFeedbackScriptUrl=void 0
var c=i,u=X,d=ue,f=l(be),p=l(xe),h=l(Oe),v=l(je),g=He,_=Ke,m=c.Util.merge,b=c.Util.filter,y=c.Util.objectIsExtensible,w=c.Util.globalThisOrWindow,k=function(){var e=w(),t=""
return null!=e.location&&(t=e.location.protocol+"//"+e.location.host),t},S=function(e){var t=e.split(".").slice(0,2).join(".")
return"https://js.honeybadger.io/v".concat(t,"/honeybadger-feedback-form.js")}
t.getUserFeedbackScriptUrl=S
var x=function(e){function n(t){void 0===t&&(t={})
var n=e.call(this,o({userFeedbackEndpoint:"https://api.honeybadger.io/v2/feedback",async:!0,maxErrors:null,projectRoot:k()},t),new g.BrowserTransport({"User-Agent":C()}))||this
return n.__errorsSent=0,n.__lastWrapErr=void 0,n.__lastNoticeId=void 0,n.__beforeNotifyHandlers=[function(e){return n.__exceedsMaxErrors()?(n.logger.debug("Dropping notice: max errors exceeded",e),!1):(e&&!e.url&&"undefined"!=typeof document&&(e.url=document.URL),n.__incrementErrorsCount(),!0)}],n.__afterNotifyHandlers=[function(e,t){t&&(n.__lastNoticeId=t.id)}],n}return r(n,e),n.prototype.configure=function(t){return void 0===t&&(t={}),e.prototype.configure.call(this,t)},n.prototype.resetMaxErrors=function(){return this.__errorsSent=0},n.prototype.factory=function(e){var t=new n(e)
return t.setNotifier(this.getNotifier()),t},n.prototype.checkIn=function(e){throw new Error("Honeybadger.checkIn() is not supported on the browser")},n.prototype.showUserFeedbackForm=function(e){return void 0===e&&(e={}),s(this,void 0,void 0,(function(){return a(this,(function(t){return new _.BrowserFeedbackForm(this.config,this.logger,this.getUserFeedbackSubmitUrl()).show(this.__lastNoticeId,e),[2]}))}))},n.prototype.getUserFeedbackSubmitUrl=function(){return(0,t.getUserFeedbackScriptUrl)(this.getVersion())},n.prototype.__buildPayload=function(t){var n,r={HTTP_USER_AGENT:void 0,HTTP_REFERER:void 0,HTTP_COOKIE:void 0}
"undefined"!=typeof navigator&&navigator.userAgent&&(r.HTTP_USER_AGENT=navigator.userAgent),"undefined"!=typeof document&&document.referrer.match(/\S/)&&(r.HTTP_REFERER=document.referrer),(n="string"==typeof t.cookies?(0,u.decodeCookie)(t.cookies):t.cookies)&&(r.HTTP_COOKIE=(0,u.encodeCookie)(b(n,this.config.filters)))
var i=e.prototype.__buildPayload.call(this,t)
return i.request.cgi_data=m(r,i.request.cgi_data),i},n.prototype.__wrap=function(e,t){void 0===t&&(t={})
var n=e
t||(t={})
try{if("function"!=typeof n)return n
if(!y(n))return n
if(!n.___hb){var r=this
n.___hb=function(){if(!u.preferCatch)return n.apply(this,arguments)
try{return n.apply(this,arguments)}catch(e){if(r.__lastWrapErr===e)throw e
throw r.__lastWrapErr=e,(0,d.ignoreNextOnError)(),r.addBreadcrumb(t.component?"".concat(t.component,": ").concat(e.name):e.name,{category:"error",metadata:{message:e.message,name:e.name,stack:e.stack}}),r.config.enableUncaught&&r.notify(e),e}}}return n.___hb.___hb=n.___hb,n.___hb}catch(e){return n}},n.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},n.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},n}(c.Client),E={name:"@honeybadger-io/js",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",version:"6.11.0"},C=function(){return"undefined"!=typeof navigator?"Honeybadger JS Browser Client ".concat(E.version,"; ").concat(navigator.userAgent):"Honeybadger JS Browser Client ".concat(E.version,"; n/a; n/a")},P=new x({__plugins:[(0,d.onError)(),(0,f.default)(),(0,h.default)(),(0,v.default)(),(0,p.default)(),c.Plugins.events()]})
P.setNotifier(E)
var T=i
Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return T.Types}}),t.default=P}(r)
var et=t(r)
return et}()),Lc.exports),Oc=Tc(Ic)
const Rc=["attackplayer.min.js","Auction-House-Monitor.user.js","Compra-%2526-Venda-de-Recursos-%25E2%259C%2585.user.js","cross-origin frame","Discord-Message-Checks-for-Updates.user.js","dynamically imported module","Fallen-Sword-Auto-Invent.user.js","Fallen-Sword-Auto-Skill-Caster.user.js","Fallen-Sword-Champion-and-Super-Elite-Alert.user.js","Fallen-Sword-Message-Alert.user.js","Fallen-Sword-Super-Elite-%2526-Crate-Notifier.user.js","Fallen-Sword-Super-Elite-Notifier.user.js","Fallen-Sword-Win%252FLoss-Checker-with-Buffs-and-Buff-Levels.user.js","Fallen-Sword-Win%252FLoss-Checker.user.js","Fallensword-GvG-Target-Checker-with-Button-and-Buff-Check.user.js","Fetch-Auction-and-Send-to-Discord.user.js","FS-Fixer.user.js","fs.min.js","FSH1.user.js","Gold-alert.user.js","GVG-and-Relics-Notifications.user.js","GvG-Initiate-Enhanced.user.js","GvG-List-v2.user.js","GVG%252FRelics-Discord.user.js","GVG%252FRelics-Notifications.user.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","New-Userscript.user.js","openuserjs.org","Permission denied to access object","play method is not allowed","Quick-Kill.user.js","se-searcher-v2-draft.user.js","Superelite-searcher.user.js","Titan-3.0.user.js","Titan-Quick-Kill.user.js","UFSG-dodatki.user.js","UnhandledPromiseRejectionWarning: 404","world.min.js","(reading '$$')"],Mc=e=>_c(e)&&Rc.some((t=>e.includes(t)))
function Fc(e){if(Mc(e.message)||Mc(e.stack))return!1}function Ac(){!function(){Oc.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.150"})
const e=o()
e&&Oc.setContext({user_id:e}),Oc.afterNotify((e=>{if(e)return na(`Honeybadger notification failed: ${e}`)})),Oc.beforeNotify(Fc)}()}function jc(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class Nc extends Error{constructor([e,t,n,r],...i){super(function(e,t,n,r){const i=`${t.status} ${t.statusText} - `
if(t.statusText===r.toString())return i+jc(e)
const o=`${i+n} ${r} - ${jc(e)}`
return"parsererror"===n?`${o} - ${t.responseText}`:o}(e,t,n,r),...i),Error.captureStackTrace&&Error.captureStackTrace(this,Nc),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=r}}function Dc(e,t,n,r){e instanceof EventTarget&&e.addEventListener(t,n,r)}function Bc(e,t,n){return JSON.stringify(e,t,n)}function qc(e){vc("betaOptIn")&&na("sendException",e),Oc.notify(e,"sendException")}var Hc={}
function Uc(e){return Array.isArray(e)}function Gc(e,t){return e||t}const Wc=[null]
function zc(e,t){return Wc[e]&&Wc[e].priority<Wc[t].priority}function Vc(e,t){const n=Wc[e]
Wc[e]=Wc[t],Wc[t]=n}function Qc(e,t){return e?2*t:2*t+1}function Jc(){if(1===Wc.length)return
const e=Wc[1].data,t=Wc.pop()
return Wc.length>1&&(Wc[1]=t,function(e){let t=e
for(;2*t<Wc.length;){const e=Qc(!zc(2*t+1,2*t),t)
if(zc(t,e))break
Vc(t,e),t=e}}(1)),e}function Kc(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!zc(t,e))break
Vc(t,e),t=e}}(Wc.push({data:e,priority:t})-1)}let Xc=!0
const Yc="fshMessage"
let Zc=0
function eu(){Wc.length-1==0?Xc=!0:(Xc=!1,window.postMessage(Yc,window.location.origin))}function tu(){const e=Jc()
kc(e)?e():function(e){ka(e)||qc(`pop() was not a function (${typeof e})`)}(e)}function nu(e){const t=e.data
e.origin===window.location.origin&&t===Yc&&function(){try{tu()}catch(e){Oc.notify(e,"taskFailure")}finally{eu()}}()}function ru(e,t,n,r){if(kc(t)){Zc||(Dc(window,"message",nu),Zc=!0)
const i=Gc(r,window),o=Gc(n,[])
Kc(t.bind(i,...o),e),Xc&&eu()}}function iu(e,t){return new URLSearchParams(e).get(t)}function ou(e){try{return iu(decodeURIComponent(window.location.search),e)}catch(e){return na(e),""}}var su=!1,au=Array.isArray,lu=Array.prototype.indexOf,cu=Array.from,uu=Object.defineProperty,du=Object.getOwnPropertyDescriptor,fu=Object.getOwnPropertyDescriptors,pu=Object.prototype,hu=Array.prototype,vu=Object.getPrototypeOf,gu=Object.isExtensible
function _u(e){return"function"==typeof e}const mu=()=>{}
function bu(e){return e()}function yu(e){for(var t=0;t<e.length;t++)e[t]()}const wu=2,ku=4,Su=8,xu=16,Eu=32,Cu=64,Pu=128,Tu=256,$u=512,Lu=1024,Iu=2048,Ou=4096,Ru=8192,Mu=16384,Fu=32768,Au=65536,ju=1<<17,Nu=1<<19,Du=1<<20,Bu=1<<21,qu=Symbol("$state"),Hu=Symbol("legacy props"),Uu=Symbol("")
function Gu(e){return e===this.v}function Wu(e,t){return e!=e?t==t:e!==t||null!==e&&"object"==typeof e||"function"==typeof e}function zu(e){return!Wu(e,this.v)}let Vu=!1,Qu=!1
function Ju(){Vu=!0}const Ku=1,Xu=2,Yu=4,Zu=8,ed=16,td=1,nd=2,rd=4,id=8,od=16,sd=4,ad=Symbol(),ld="http://www.w3.org/1999/xhtml",cd=[]
function ud(e,t=!1){return dd(e,new Map,"",cd)}function dd(e,t,n,r,i=null){if("object"==typeof e&&null!==e){var o=t.get(e)
if(void 0!==o)return o
if(e instanceof Map)return new Map(e)
if(e instanceof Set)return new Set(e)
if(au(e)){var s=Array(e.length)
t.set(e,s),null!==i&&t.set(i,s)
for(var a=0;a<e.length;a+=1){var l=e[a]
a in e&&(s[a]=dd(l,t,n,r))}return s}if(vu(e)===pu){for(var c in s={},t.set(e,s),null!==i&&t.set(i,s),e)s[c]=dd(e[c],t,n,r)
return s}if(e instanceof Date)return structuredClone(e)
if("function"==typeof e.toJSON)return dd(e.toJSON(),t,n,r,e)}if(e instanceof EventTarget)return e
try{return structuredClone(e)}catch(t){return e}}function fd(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let pd=null
function hd(e){pd=e}function vd(e,t=!1,n){var r=pd={p:pd,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null}
Vu&&!t&&(pd.l={s:null,u:null,r1:[],r2:$d(!1)}),Qd((()=>{r.d=!0}))}function gd(e){const t=pd
if(null!==t){const e=t.e
if(null!==e){var n=Pf,r=xf
t.e=null
try{for(var i=0;i<e.length;i++){var o=e[i]
Tf(o.effect),Cf(o.reaction),Xd(o.fn)}}finally{Tf(n),Cf(r)}}pd=t.p,t.m=!0}return{}}function _d(){return!Vu||null!==pd&&null===pd.l}function md(e){if("object"!=typeof e||null===e||qu in e)return e
const t=vu(e)
if(t!==pu&&t!==hu)return e
var n=new Map,r=au(e),i=Ld(0),o=xf,s=e=>{var t=xf
Cf(o)
var n=e()
return Cf(t),n}
return r&&n.set("length",Ld(e.length)),new Proxy(e,{defineProperty(e,t,r){"value"in r&&!1!==r.configurable&&!1!==r.enumerable&&!1!==r.writable||function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}()
var i=n.get(t)
return void 0===i?(i=s((()=>Ld(r.value))),n.set(t,i)):Od(i,s((()=>md(r.value)))),!0},deleteProperty(e,t){var o=n.get(t)
if(void 0===o)t in e&&n.set(t,s((()=>Ld(ad))))
else{if(r&&"string"==typeof t){var a=n.get("length"),l=Number(t)
Number.isInteger(l)&&l<a.v&&Od(a,l)}Od(o,ad),bd(i)}return!0},get(t,r,i){if(r===qu)return e
var o=n.get(r),a=r in t
if(void 0!==o||a&&!du(t,r)?.writable||(o=s((()=>Ld(md(a?t[r]:ad)))),n.set(r,o)),void 0!==o){var l=Yf(o)
return l===ad?void 0:l}return Reflect.get(t,r,i)},getOwnPropertyDescriptor(e,t){var r=Reflect.getOwnPropertyDescriptor(e,t)
if(r&&"value"in r){var i=n.get(t)
i&&(r.value=Yf(i))}else if(void 0===r){var o=n.get(t),s=o?.v
if(void 0!==o&&s!==ad)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return r},has(e,t){if(t===qu)return!0
var r=n.get(t),i=void 0!==r&&r.v!==ad||Reflect.has(e,t)
if((void 0!==r||null!==Pf&&(!i||du(e,t)?.writable))&&(void 0===r&&(r=s((()=>Ld(i?md(e[t]):ad))),n.set(t,r)),Yf(r)===ad))return!1
return i},set(e,t,o,a){var l=n.get(t),c=t in e
if(r&&"length"===t)for(var u=o;u<l.v;u+=1){var d=n.get(u+"")
void 0!==d?Od(d,ad):u in e&&(d=s((()=>Ld(ad))),n.set(u+"",d))}void 0===l?c&&!du(e,t)?.writable||(Od(l=s((()=>Ld(void 0))),s((()=>md(o)))),n.set(t,l)):(c=l.v!==ad,Od(l,s((()=>md(o)))))
var f=Reflect.getOwnPropertyDescriptor(e,t)
if(f?.set&&f.set.call(a,o),!c){if(r&&"string"==typeof t){var p=n.get("length"),h=Number(t)
Number.isInteger(h)&&h>=p.v&&Od(p,h+1)}bd(i)}return!0},ownKeys(e){Yf(i)
var t=Reflect.ownKeys(e).filter((e=>{var t=n.get(e)
return void 0===t||t.v!==ad}))
for(var[r,o]of n)o.v===ad||r in e||t.push(r)
return t},setPrototypeOf(){!function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}()}})}function bd(e,t=1){Od(e,e.v+t)}function yd(e){try{if(null!==e&&"object"==typeof e&&qu in e)return e[qu]}catch{}return e}function wd(e,t){return Object.is(yd(e),yd(t))}function kd(e){var t=wu|Iu,n=null!==xf&&0!=(xf.f&wu)?xf:null
null===Pf||null!==n&&0!=(n.f&Tu)?t|=Tu:Pf.f|=Du
return{ctx:pd,deps:null,effects:null,equals:Gu,f:t,fn:e,reactions:null,rv:0,v:null,wv:0,parent:n??Pf}}function Sd(e){const t=kd(e)
return Lf(t),t}function xd(e){const t=kd(e)
return t.equals=zu,t}function Ed(e){var t=e.effects
if(null!==t){e.effects=null
for(var n=0;n<t.length;n+=1)of(t[n])}}function Cd(e){var t,n=Pf
Tf(function(e){for(var t=e.parent;null!==t;){if(0==(t.f&wu))return t
t=t.parent}return null}(e))
try{Ed(e),t=qf(e)}finally{Tf(n)}return t}function Pd(e){var t=Cd(e)
tp(e,!Af&&0==(e.f&Tu)||null===e.deps?Lu:Ou),e.equals(t)||(e.v=t,e.wv=jf())}const Td=new Map
function $d(e,t){return{f:0,v:e,reactions:null,equals:Gu,rv:0,wv:0}}function Ld(e,t){const n=$d(e)
return Lf(n),n}function Id(e,t=!1){const n=$d(e)
return t||(n.equals=zu),Vu&&null!==pd&&null!==pd.l&&(pd.l.s??=[]).push(n),n}function Od(e,t,n=!1){return null===xf||Ef||!_d()||0==(xf.f&(wu|xu))||$f?.includes(e)||function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),Rd(e,n?md(t):t)}function Rd(e,t){if(!e.equals(t)){var n=e.v
wf?Td.set(e,t):Td.set(e,n),e.v=t,e.wv=jf(),0!=(e.f&wu)&&(0!=(e.f&Iu)&&Cd(e),tp(e,0==(e.f&Tu)?Lu:Ou)),Md(e,Iu),_d()&&null!==Pf&&0!=(Pf.f&Lu)&&0==(Pf.f&(Eu|Cu))&&(null===Rf?function(e){Rf=e}([e]):Rf.push(e))}return t}function Md(e,t){var n=e.reactions
if(null!==n)for(var r=_d(),i=n.length,o=0;o<i;o++){var s=n[o],a=s.f
0==(a&Iu)&&((r||s!==Pf)&&(tp(s,t),0!=(a&(Lu|Tu))&&(0!=(a&wu)?Md(s,Ou):Qf(s))))}}let Fd=!1
var Ad,jd,Nd,Dd
function Bd(e=""){return document.createTextNode(e)}function qd(e){return Nd.call(e)}function Hd(e){return Dd.call(e)}function Ud(e,t){return qd(e)}function Gd(e,t){var n=qd(e)
return n instanceof Comment&&""===n.data?Hd(n):n}function Wd(e,t=1,n=!1){let r=e
for(;t--;)r=Hd(r)
return r}function zd(e){null===Pf&&null===xf&&function(e){throw new Error("https://svelte.dev/e/effect_orphan")}(),null!==xf&&0!=(xf.f&Tu)&&null===Pf&&function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}(),wf&&function(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}()}function Vd(e,t,n,r=!0){var i=Pf,o={ctx:pd,deps:null,nodes_start:null,nodes_end:null,f:e|Iu,first:null,fn:t,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0}
if(n)try{Gf(o),o.f|=Fu}catch(e){throw of(o),e}else null!==t&&Qf(o)
if(!(n&&null===o.deps&&null===o.first&&null===o.nodes_start&&null===o.teardown&&0==(o.f&(Du|Pu)))&&r&&(null!==i&&function(e,t){var n=t.last
null===n?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}(o,i),null!==xf&&0!=(xf.f&wu))){var s=xf;(s.effects??=[]).push(o)}return o}function Qd(e){const t=Vd(Su,null,!1)
return tp(t,Lu),t.teardown=e,t}function Jd(e){if(zd(),!(null!==Pf&&0!=(Pf.f&Eu)&&null!==pd&&!pd.m))return Xd(e)
var t=pd;(t.e??=[]).push({fn:e,effect:Pf,reaction:xf})}function Kd(e){return zd(),Yd(e)}function Xd(e){return Vd(ku,e,!1)}function Yd(e){return Vd(Su,e,!0)}function Zd(e,t=[],n=kd){const r=t.map(n)
return ef((()=>e(...r.map(Yf))))}function ef(e,t=0){return Vd(Su|xu|t,e,!0)}function tf(e,t=!0){return Vd(Su|Eu,e,!0,t)}function nf(e){var t=e.teardown
if(null!==t){const e=wf,n=xf
kf(!0),Cf(null)
try{t.call(null)}finally{kf(e),Cf(n)}}}function rf(e,t=!1){var n=e.first
for(e.first=e.last=null;null!==n;){var r=n.next
0!=(n.f&Cu)?n.parent=null:of(n,t),n=r}}function of(e,t=!0){var n=!1
if((t||0!=(e.f&Nu))&&null!==e.nodes_start){for(var r=e.nodes_start,i=e.nodes_end;null!==r;){var o=r===i?null:Hd(r)
r.remove(),r=o}n=!0}rf(e,t&&!n),Uf(e,0),tp(e,Mu)
var s=e.transitions
if(null!==s)for(const e of s)e.stop()
nf(e)
var a=e.parent
null!==a&&null!==a.first&&sf(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function sf(e){var t=e.parent,n=e.prev,r=e.next
null!==n&&(n.next=r),null!==r&&(r.prev=n),null!==t&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function af(e,t){var n=[]
cf(e,n,!0),lf(n,(()=>{of(e),t&&t()}))}function lf(e,t){var n=e.length
if(n>0){var r=()=>--n||t()
for(var i of e)i.out(r)}else t()}function cf(e,t,n){if(0==(e.f&Ru)){if(e.f^=Ru,null!==e.transitions)for(const r of e.transitions)(r.is_global||n)&&t.push(r)
for(var r=e.first;null!==r;){var i=r.next
cf(r,t,!!(0!=(r.f&Au)||0!=(r.f&Eu))&&n),r=i}}}function uf(e){df(e,!0)}function df(e,t){if(0!=(e.f&Ru)){e.f^=Ru,0==(e.f&Lu)&&(e.f^=Lu),Nf(e)&&(tp(e,Iu),Qf(e))
for(var n=e.first;null!==n;){var r=n.next
df(n,!!(0!=(n.f&Au)||0!=(n.f&Eu))&&t),n=r}if(null!==e.transitions)for(const n of e.transitions)(n.is_global||t)&&n.in()}}let ff=[],pf=[]
function hf(){var e=ff
ff=[],yu(e)}function vf(e){0===ff.length&&queueMicrotask(hf),ff.push(e)}function gf(){var e
ff.length>0&&hf(),pf.length>0&&(e=pf,pf=[],yu(e))}let _f=!1,mf=!1,bf=null,yf=!1,wf=!1
function kf(e){wf=e}let Sf=[],xf=null,Ef=!1
function Cf(e){xf=e}let Pf=null
function Tf(e){Pf=e}let $f=null
function Lf(e){null!==xf&&xf.f&Bu&&(null===$f?$f=[e]:$f.push(e))}let If=null,Of=0,Rf=null
let Mf=1,Ff=0,Af=!1
function jf(){return++Mf}function Nf(e){var t=e.f
if(0!=(t&Iu))return!0
if(0!=(t&Ou)){var n=e.deps,r=0!=(t&Tu)
if(null!==n){var i,o,s=0!=(t&$u),a=r&&null!==Pf&&!Af,l=n.length
if(s||a){var c=e,u=c.parent
for(i=0;i<l;i++)o=n[i],!s&&o?.reactions?.includes(c)||(o.reactions??=[]).push(c)
s&&(c.f^=$u),a&&null!==u&&0==(u.f&Tu)&&(c.f^=Tu)}for(i=0;i<l;i++)if(Nf(o=n[i])&&Pd(o),o.wv>e.wv)return!0}r&&(null===Pf||Af)||tp(e,Lu)}return!1}function Df(e,t,n,r){if(_f){if(null===n&&(_f=!1),function(e){return 0==(e.f&Mu)&&(null===e.parent||0==(e.parent.f&Pu))}(t))throw e}else null!==n&&(_f=!0),function(e,t){for(var n=t;null!==n;){if(0!=(n.f&Pu))try{return void n.fn(e)}catch{n.f^=Pu}n=n.parent}throw _f=!1,e}(e,t)}function Bf(e,t,n=!0){var r=e.reactions
if(null!==r)for(var i=0;i<r.length;i++){var o=r[i]
$f?.includes(e)||(0!=(o.f&wu)?Bf(o,t,!1):t===o&&(n?tp(o,Iu):0!=(o.f&Lu)&&tp(o,Ou),Qf(o)))}}function qf(e){var t=If,n=Of,r=Rf,i=xf,o=Af,s=$f,a=pd,l=Ef,c=e.f
If=null,Of=0,Rf=null,Af=0!=(c&Tu)&&(Ef||!yf||null===xf),xf=0==(c&(Eu|Cu))?e:null,$f=null,hd(e.ctx),Ef=!1,Ff++,e.f|=Bu
try{var u=(0,e.fn)(),d=e.deps
if(null!==If){var f
if(Uf(e,Of),null!==d&&Of>0)for(d.length=Of+If.length,f=0;f<If.length;f++)d[Of+f]=If[f]
else e.deps=d=If
if(!Af)for(f=Of;f<d.length;f++)(d[f].reactions??=[]).push(e)}else null!==d&&Of<d.length&&(Uf(e,Of),d.length=Of)
if(_d()&&null!==Rf&&!Ef&&null!==d&&0==(e.f&(wu|Ou|Iu)))for(f=0;f<Rf.length;f++)Bf(Rf[f],e)
return i!==e&&(Ff++,null!==Rf&&(null===r?r=Rf:r.push(...Rf))),u}finally{If=t,Of=n,Rf=r,xf=i,Af=o,$f=s,hd(a),Ef=l,e.f^=Bu}}function Hf(e,t){let n=t.reactions
if(null!==n){var r=lu.call(n,e)
if(-1!==r){var i=n.length-1
0===i?n=t.reactions=null:(n[r]=n[i],n.pop())}}null!==n||0==(t.f&wu)||null!==If&&If.includes(t)||(tp(t,Ou),0==(t.f&(Tu|$u))&&(t.f^=$u),Ed(t),Uf(t,0))}function Uf(e,t){var n=e.deps
if(null!==n)for(var r=t;r<n.length;r++)Hf(e,n[r])}function Gf(e){var t=e.f
if(0==(t&Mu)){tp(e,Lu)
var n=Pf,r=pd,i=yf
Pf=e,yf=!0
try{0!=(t&xu)?function(e){for(var t=e.first;null!==t;){var n=t.next
0==(t.f&Eu)&&of(t),t=n}}(e):rf(e),nf(e)
var o=qf(e)
e.teardown="function"==typeof o?o:null,e.wv=Mf
e.deps
su&&Qu&&e.f}catch(t){Df(t,e,n,r||e.ctx)}finally{yf=i,Pf=n}}}function Wf(){try{!function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}()}catch(e){if(null===bf)throw e
Df(e,bf,null)}}function zf(){var e=yf
try{var t=0
for(yf=!0;Sf.length>0;){t++>1e3&&Wf()
var n=Sf,r=n.length
Sf=[]
for(var i=0;i<r;i++){Vf(Jf(n[i]))}Td.clear()}}finally{mf=!1,yf=e,bf=null}}function Vf(e){var t=e.length
if(0!==t)for(var n=0;n<t;n++){var r=e[n]
if(0==(r.f&(Mu|Ru)))try{Nf(r)&&(Gf(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown?sf(r):r.fn=null))}catch(e){Df(e,r,null,r.ctx)}}}function Qf(e){mf||(mf=!0,queueMicrotask(zf))
for(var t=bf=e;null!==t.parent;){var n=(t=t.parent).f
if(0!=(n&(Cu|Eu))){if(0==(n&Lu))return
t.f^=Lu}}Sf.push(t)}function Jf(e){for(var t=[],n=e;null!==n;){var r=n.f,i=0!=(r&(Eu|Cu))
if(!(i&&0!=(r&Lu))&&0==(r&Ru)){if(0!=(r&ku))t.push(n)
else if(i)n.f^=Lu
else{var o=xf
try{xf=n,Nf(n)&&Gf(n)}catch(e){Df(e,n,null,n.ctx)}finally{xf=o}}var s=n.first
if(null!==s){n=s
continue}}var a=n.parent
for(n=n.next;null===n&&null!==a;)n=a.next,a=a.parent}return t}function Kf(e){for(gf();Sf.length>0;)mf=!0,zf(),gf()}async function Xf(){await Promise.resolve(),Kf()}function Yf(e){var t=0!=(e.f&wu)
if(null===xf||Ef){if(t&&null===e.deps&&null===e.effects){var n=e,r=n.parent
null!==r&&0==(r.f&Tu)&&(n.f^=Tu)}}else if(!$f?.includes(e)){var i=xf.deps
e.rv<Ff&&(e.rv=Ff,null===If&&null!==i&&i[Of]===e?Of++:null===If?If=[e]:Af&&If.includes(e)||If.push(e))}return t&&Nf(n=e)&&Pd(n),wf&&Td.has(e)?Td.get(e):e.v}function Zf(e){var t=Ef
try{return Ef=!0,e()}finally{Ef=t}}const ep=-7169
function tp(e,t){e.f=e.f&ep|t}function np(e){if("object"==typeof e&&e&&!(e instanceof EventTarget))if(qu in e)rp(e)
else if(!Array.isArray(e))for(let t in e){const n=e[t]
"object"==typeof n&&n&&qu in n&&rp(n)}}function rp(e,t=new Set){if(!("object"!=typeof e||null===e||e instanceof EventTarget||t.has(e))){t.add(e),e instanceof Date&&e.getTime()
for(let n in e)try{rp(e[n],t)}catch(e){}const n=vu(e)
if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const t=fu(n)
for(let n in t){const r=t[n].get
if(r)try{r.call(e)}catch(e){}}}}}const ip=["touchstart","touchmove"]
function op(e){return ip.includes(e)}let sp=!1
function ap(e){var t=xf,n=Pf
Cf(null),Tf(null)
try{return e()}finally{Cf(t),Tf(n)}}function lp(e,t,n,r=n){e.addEventListener(t,(()=>ap(n)))
const i=e.__on_r
e.__on_r=i?()=>{i(),r(!0)}:()=>r(!0),sp||(sp=!0,document.addEventListener("reset",(e=>{Promise.resolve().then((()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()}))}),{capture:!0}))}const cp=new Set,up=new Set
function dp(e,t,n,r,i){var o={capture:r,passive:i},s=function(e,t,n,r={}){function i(e){if(r.capture||pp.call(t,e),!e.cancelBubble)return ap((()=>n?.call(this,e)))}return e.startsWith("pointer")||e.startsWith("touch")||"wheel"===e?vf((()=>{t.addEventListener(e,i,r)})):t.addEventListener(e,i,r),i}(e,t,n,o)
t!==document.body&&t!==window&&t!==document||Qd((()=>{t.removeEventListener(e,s,o)}))}function fp(e){for(var t=0;t<e.length;t++)cp.add(e[t])
for(var n of up)n(e)}function pp(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],o=i[0]||e.target,s=0,a=e.__root
if(a){var l=i.indexOf(a)
if(-1!==l&&(t===document||t===window))return void(e.__root=t)
var c=i.indexOf(t)
if(-1===c)return
l<=c&&(s=l)}if((o=i[s]||e.target)!==t){uu(e,"currentTarget",{configurable:!0,get:()=>o||n})
var u=xf,d=Pf
Cf(null),Tf(null)
try{for(var f,p=[];null!==o;){var h=o.assignedSlot||o.parentNode||o.host||null
try{var v=o["__"+r]
if(null!=v&&(!o.disabled||e.target===o))if(au(v)){var[g,..._]=v
g.apply(o,[e,..._])}else v.call(o,e)}catch(e){f?p.push(e):f=e}if(e.cancelBubble||h===t||null===h)break
o=h}if(f){for(let e of p)queueMicrotask((()=>{throw e}))
throw f}}finally{e.__root=t,delete e.currentTarget,Cf(u),Tf(d)}}}function hp(e){var t=document.createElement("template")
return t.innerHTML=e,t.content}function vp(e,t){var n=Pf
null===n.nodes_start&&(n.nodes_start=e,n.nodes_end=t)}function gp(e,t){var n,r=0!=(1&t),i=0!=(2&t),o=!e.startsWith("<!>")
return()=>{void 0===n&&(n=hp(o?e:"<!>"+e),r||(n=qd(n)))
var t=i||jd?document.importNode(n,!0):n.cloneNode(!0)
r?vp(qd(t),t.lastChild):vp(t,t)
return t}}function _p(e=""){var t=Bd(e+"")
return vp(t,t),t}function mp(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Bd()
return e.append(t,n),vp(t,n),e}function bp(e,t){null!==e&&e.before(t)}let yp=!0
function wp(e,t){var n=null==t?"":"object"==typeof t?t+"":t
n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}function kp(e,t){return function(e,{target:t,anchor:n,props:r={},events:i,context:o,intro:s=!0}){!function(){if(void 0===Ad){Ad=window,jd=/Firefox/.test(navigator.userAgent)
var e=Element.prototype,t=Node.prototype,n=Text.prototype
Nd=du(t,"firstChild").get,Dd=du(t,"nextSibling").get,gu(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),gu(n)&&(n.__t=void 0)}}()
var a=new Set,l=e=>{for(var n=0;n<e.length;n++){var r=e[n]
if(!a.has(r)){a.add(r)
var i=op(r)
t.addEventListener(r,pp,{passive:i})
var o=Sp.get(r)
void 0===o?(document.addEventListener(r,pp,{passive:i}),Sp.set(r,1)):Sp.set(r,o+1)}}}
l(cu(cp)),up.add(l)
var c=void 0,u=function(e){const t=Vd(Cu,e,!0)
return(e={})=>new Promise((n=>{e.outro?af(t,(()=>{of(t),n(void 0)})):(of(t),n(void 0))}))}((()=>{var u=n??t.appendChild(Bd())
return tf((()=>{o&&(vd({}),pd.c=o)
i&&(r.$$events=i),yp=s,c=e(u,r)||{},yp=!0,o&&gd()})),()=>{for(var e of a){t.removeEventListener(e,pp)
var r=Sp.get(e)
0==--r?(document.removeEventListener(e,pp),Sp.delete(e)):Sp.set(e,r)}up.delete(l),u!==n&&u.parentNode?.removeChild(u)}}))
return xp.set(c,u),c}(e,t)}const Sp=new Map
let xp=new WeakMap
function Ep(e,t){const n=xp.get(e)
return n?(xp.delete(e),n(t)):Promise.resolve()}const Cp=0,Pp=1,Tp=2
function $p(e,t,n,r,i){var o,s,a,l=e,c=_d(),u=pd,d=ad,f=(c?$d:Id)(void 0),p=(c?$d:Id)(void 0),h=!1
function v(e,t){h=!0,t&&(Tf(g),Cf(g),hd(u))
try{e===Cp&&n&&(o?uf(o):o=tf((()=>n(l)))),e===Pp&&r&&(s?uf(s):s=tf((()=>r(l,f)))),e===Tp&&i&&(a?uf(a):a=tf((()=>i(l,p)))),e!==Cp&&o&&af(o,(()=>o=null)),e!==Pp&&s&&af(s,(()=>s=null)),e!==Tp&&a&&af(a,(()=>a=null))}finally{t&&(hd(null),Cf(null),Tf(null),Kf())}}var g=ef((()=>{if(d!==(d=t())){if(n=d,"function"==typeof n?.then){var e=d
h=!1,e.then((t=>{e===d&&(Rd(f,t),v(Pp,!0))}),(t=>{if(e===d&&(Rd(p,t),v(Tp,!0),!i))throw p.v})),vf((()=>{h||v(Cp,!0)}))}else Rd(f,d),v(Pp,!1)
var n
return()=>d=ad}}))}function Lp(e,t,[n,r]=[0,0]){var i=e,o=null,s=null,a=ad,l=!1
const c=(e,t=!0)=>{l=!0,u(t,e)},u=(e,t)=>{a!==(a=e)&&(a?(o?uf(o):t&&(o=tf((()=>t(i)))),s&&af(s,(()=>{s=null}))):(s?uf(s):t&&(s=tf((()=>t(i,[n+1,r])))),o&&af(o,(()=>{o=null}))))}
ef((()=>{l=!1,t(c),l||u(null,null)}),n>0?Au:0)}function Ip(e,t){Yd((()=>{var n=t()
for(var r in n){var i=n[r]
i?e.style.setProperty(r,i):e.style.removeProperty(r)}})),Qd((()=>{e.remove()}))}function Op(e,t){return t}function Rp(e,t,n,r,i,o=null){var s=e,a={flags:t,items:new Map,first:null}
0!=(t&Yu)&&(s=e.appendChild(Bd()))
var l=null,c=!1,u=xd((()=>{var e=n()
return au(e)?e:null==e?[]:cu(e)}))
ef((()=>{var e=Yf(u),d=e.length
c&&0===d||(c=0===d,function(e,t,n,r,i,o,s){var a,l,c,u,d,f,p=0!=(i&Zu),h=0!=(i&(Ku|Xu)),v=e.length,g=t.items,_=t.first,m=_,b=null,y=[],w=[]
if(p)for(f=0;f<v;f+=1)u=o(c=e[f],f),void 0!==(d=g.get(u))&&(d.a?.measure(),(l??=new Set).add(d))
for(f=0;f<v;f+=1)if(u=o(c=e[f],f),void 0!==(d=g.get(u))){if(h&&Mp(d,c,f,i),0!=(d.e.f&Ru)&&(uf(d.e),p&&(d.a?.unfix(),(l??=new Set).delete(d))),d!==m){if(void 0!==a&&a.has(d)){if(y.length<w.length){var k,S=w[0]
b=S.prev
var x=y[0],E=y[y.length-1]
for(k=0;k<y.length;k+=1)Ap(y[k],S,n)
for(k=0;k<w.length;k+=1)a.delete(w[k])
jp(t,x.prev,E.next),jp(t,b,x),jp(t,E,S),m=S,b=E,f-=1,y=[],w=[]}else a.delete(d),Ap(d,m,n),jp(t,d.prev,d.next),jp(t,d,null===b?t.first:b.next),jp(t,b,d),b=d
continue}for(y=[],w=[];null!==m&&m.k!==u;)0==(m.e.f&Ru)&&(a??=new Set).add(m),w.push(m),m=m.next
if(null===m)continue
d=m}y.push(d),b=d,m=d.next}else{b=Fp(m?m.e.nodes_start:n,t,b,null===b?t.first:b.next,c,u,f,r,i,s),g.set(u,b),y=[],w=[],m=b.next}if(null!==m||void 0!==a){for(var C=void 0===a?[]:cu(a);null!==m;)0==(m.e.f&Ru)&&C.push(m),m=m.next
var P=C.length
if(P>0){var T=0!=(i&Yu)&&0===v?n:null
if(p){for(f=0;f<P;f+=1)C[f].a?.measure()
for(f=0;f<P;f+=1)C[f].a?.fix()}!function(e,t,n,r){for(var i=[],o=t.length,s=0;s<o;s++)cf(t[s].e,i,!0)
var a=o>0&&0===i.length&&null!==n
if(a){var l=n.parentNode
l.textContent="",l.append(n),r.clear(),jp(e,t[0].prev,t[o-1].next)}lf(i,(()=>{for(var n=0;n<o;n++){var i=t[n]
a||(r.delete(i.k),jp(e,i.prev,i.next)),of(i.e,!a)}}))}(t,C,T,g)}}p&&vf((()=>{if(void 0!==l)for(d of l)d.a?.apply()}))
Pf.first=t.first&&t.first.e,Pf.last=b&&b.e}(e,a,s,i,t,r,n),null!==o&&(0===d?l?uf(l):l=tf((()=>o(s))):null!==l&&af(l,(()=>{l=null}))),Yf(u))}))}function Mp(e,t,n,r){0!=(r&Ku)&&Rd(e.v,t),0!=(r&Xu)?Rd(e.i,n):e.i=n}function Fp(e,t,n,r,i,o,s,a,l,c){var u=0!=(l&Ku)?0==(l&ed)?Id(i):$d(i):i,d=0==(l&Xu)?s:$d(s),f={i:d,v:u,k:o,a:null,e:null,prev:n,next:r}
try{return f.e=tf((()=>a(e,u,d,c)),Fd),f.e.prev=n&&n.e,f.e.next=r&&r.e,null===n?t.first=f:(n.next=f,n.e.next=f.e),null!==r&&(r.prev=f,r.e.prev=f.e),f}finally{}}function Ap(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,o=e.e.nodes_start;o!==r;){var s=Hd(o)
i.before(o),o=s}}function jp(e,t,n){null===t?e.first=n:(t.next=n,t.e.next=n&&n.e),null!==n&&(n.prev=t,n.e.prev=t&&t.e)}function Np(e,t,n,r,i){var o,s=e,a=""
ef((()=>{a!==(a=t()??"")&&(void 0!==o&&(of(o),o=void 0),""!==a&&(o=tf((()=>{var e=hp(a+"")
vp(qd(e),e.lastChild),s.before(e)}))))}))}function Dp(e,t,...n){var r,i=e,o=mu
ef((()=>{o!==(o=t())&&(r&&(of(r),r=null),r=tf((()=>o(i,...n))))}),Au)}function Bp(e,t,n){var r,i,o=e
ef((()=>{r!==(r=t())&&(i&&(af(i),i=null),r&&(i=tf((()=>n(o,r)))))}),Au)}function qp(e,t,n){Xd((()=>{var r=Zf((()=>t(e,n?.())||{}))
if(r?.destroy)return()=>r.destroy()}))}function Hp(e){var t,n,r=""
if("string"==typeof e||"number"==typeof e)r+=e
else if("object"==typeof e)if(Array.isArray(e)){var i=e.length
for(t=0;t<i;t++)e[t]&&(n=Hp(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n)
return r}function Up(e){return"object"==typeof e?function(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Hp(e))&&(r&&(r+=" "),r+=t)
return r}(e):e??""}const Gp=[..." \t\n\r\f \v\ufeff"]
function Wp(e,t=!1){var n=t?" !important;":";",r=""
for(var i in e){var o=e[i]
null!=o&&""!==o&&(r+=" "+i+": "+o+n)}return r}function zp(e){return"-"!==e[0]||"-"!==e[1]?e.toLowerCase():e}function Vp(e,t,n,r,i,o){var s=e.__className
if(s!==n||void 0===s){var a=function(e,t,n){var r=null==e?"":""+e
if(t&&(r=r?r+" "+t:t),n)for(var i in n)if(n[i])r=r?r+" "+i:i
else if(r.length)for(var o=i.length,s=0;(s=r.indexOf(i,s))>=0;){var a=s+o
0!==s&&!Gp.includes(r[s-1])||a!==r.length&&!Gp.includes(r[a])?s=a:r=(0===s?"":r.substring(0,s))+r.substring(a+1)}return""===r?null:r}(n,r,o)
null==a?e.removeAttribute("class"):e.className=a,e.__className=n}else if(o&&i!==o)for(var l in o){var c=!!o[l]
null!=i&&c===!!i[l]||e.classList.toggle(l,c)}return o}function Qp(e,t={},n,r){for(var i in n){var o=n[i]
t[i]!==o&&(null==n[i]?e.style.removeProperty(i):e.style.setProperty(i,o,r))}}function Jp(e,t,n,r){if(e.__style!==t){var i=function(e,t){if(t){var n,r,i=""
if(Array.isArray(t)?(n=t[0],r=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim()
var o=!1,s=0,a=!1,l=[]
n&&l.push(...Object.keys(n).map(zp)),r&&l.push(...Object.keys(r).map(zp))
var c=0,u=-1
const t=e.length
for(var d=0;d<t;d++){var f=e[d]
if(a?"/"===f&&"*"===e[d-1]&&(a=!1):o?o===f&&(o=!1):"/"===f&&"*"===e[d+1]?a=!0:'"'===f||"'"===f?o=f:"("===f?s++:")"===f&&s--,!a&&!1===o&&0===s)if(":"===f&&-1===u)u=d
else if(";"===f||d===t-1){if(-1!==u){var p=zp(e.substring(c,u).trim())
l.includes(p)||(";"!==f&&d++,i+=" "+e.substring(c,d).trim()+";")}c=d+1,u=-1}}}return n&&(i+=Wp(n)),r&&(i+=Wp(r,!0)),""===(i=i.trim())?null:i}return null==e?null:String(e)}(t,r)
null==i?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else r&&(Array.isArray(r)?(Qp(e,n?.[0],r[0]),Qp(e,n?.[1],r[1],"important")):Qp(e,n,r))
return r}const Kp=Symbol("is custom element"),Xp=Symbol("is html")
function Yp(e,t){var n=eh(e)
n.value!==(n.value=t??void 0)&&(e.value!==t||0===t&&"PROGRESS"===e.nodeName)&&(e.value=t??"")}function Zp(e,t,n,r){var i=eh(e)
i[t]!==(i[t]=n)&&("loading"===t&&(e[Uu]=n),null==n?e.removeAttribute(t):"string"!=typeof n&&function(e){var t,n=th.get(e.nodeName)
if(n)return n
th.set(e.nodeName,n=[])
var r=e,i=Element.prototype
for(;i!==r;){for(var o in t=fu(r))t[o].set&&n.push(o)
r=vu(r)}return n}(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function eh(e){return e.__attributes??={[Kp]:e.nodeName.includes("-"),[Xp]:e.namespaceURI===ld}}var th=new Map
const nh={tick:e=>requestAnimationFrame(e),now:()=>performance.now(),tasks:new Set}
function rh(){const e=nh.now()
nh.tasks.forEach((t=>{t.c(e)||(nh.tasks.delete(t),t.f())})),0!==nh.tasks.size&&nh.tick(rh)}function ih(e,t){ap((()=>{e.dispatchEvent(new CustomEvent(t))}))}function oh(e){if("float"===e)return"cssFloat"
if("offset"===e)return"cssOffset"
if(e.startsWith("--"))return e
const t=e.split("-")
return 1===t.length?t[0]:t[0]+t.slice(1).map((e=>e[0].toUpperCase()+e.slice(1))).join("")}function sh(e){const t={},n=e.split(";")
for(const e of n){const[n,r]=e.split(":")
if(!n||void 0===r)break
t[oh(n.trim())]=r.trim()}return t}const ah=e=>e
function lh(e,t,n,r){var i,o,s,a=0!=(e&sd),l=t.inert,c=t.style.overflow
function u(){var e=xf,o=Pf
Cf(null),Tf(null)
try{return i??=n()(t,r?.()??{},{direction:"both"})}finally{Cf(e),Tf(o)}}var d={is_global:a,in(){t.inert=l,ih(t,"introstart"),o=ch(t,u(),s,1,(()=>{ih(t,"introend"),o?.abort(),o=i=void 0,t.style.overflow=c}))},out(e){t.inert=!0,ih(t,"outrostart"),s=ch(t,u(),o,0,(()=>{ih(t,"outroend"),e?.()}))},stop:()=>{o?.abort(),s?.abort()}},f=Pf
if((f.transitions??=[]).push(d),yp){var p=a
if(!p){for(var h=f.parent;h&&0!=(h.f&Au);)for(;(h=h.parent)&&0==(h.f&xu););p=!h||0!=(h.f&Fu)}p&&Xd((()=>{Zf((()=>d.in()))}))}}function ch(e,t,n,r,i){var o=1===r
if(_u(t)){var s,a=!1
return vf((()=>{if(!a){var l=t({direction:o?"in":"out"})
s=ch(e,l,n,r,i)}})),{abort:()=>{a=!0,s?.abort()},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(n?.deactivate(),!t?.duration)return i(),{abort:mu,deactivate:mu,reset:mu,t:()=>r}
const{delay:l=0,css:c,tick:u,easing:d=ah}=t
var f=[]
if(o&&void 0===n&&(u&&u(0,1),c)){var p=sh(c(0,1))
f.push(p,p)}var h=()=>1-r,v=e.animate(f,{duration:l})
return v.onfinish=()=>{var o=n?.t()??1-r
n?.abort()
var s=r-o,a=t.duration*Math.abs(s),l=[]
if(a>0){var f=!1
if(c)for(var p=Math.ceil(a/(1e3/60)),g=0;g<=p;g+=1){var _=o+s*d(g/p),m=sh(c(_,1-_))
l.push(m),f||="hidden"===m.overflow}f&&(e.style.overflow="hidden"),h=()=>{var e=v.currentTime
return o+s*d(e/a)},u&&function(e){let t
0===nh.tasks.size&&nh.tick(rh),new Promise((n=>{nh.tasks.add(t={c:e,f:n})}))}((()=>{if("running"!==v.playState)return!1
var e=h()
return u(e,1-e),!0}))}(v=e.animate(l,{duration:a,fill:"forwards"})).onfinish=()=>{h=()=>r,u?.(r,1-r),i()}},{abort:()=>{v&&(v.cancel(),v.effect=null,v.onfinish=mu)},deactivate:()=>{i=mu},reset:()=>{0===r&&u?.(1,0)},t:()=>h()}}function uh(e,t,n=t){var r=_d()
lp(e,"input",(i=>{var o=i?e.defaultValue:e.value
if(o=fh(e)?ph(o):o,n(o),r&&o!==(o=t())){var s=e.selectionStart,a=e.selectionEnd
e.value=o??"",null!==a&&(e.selectionStart=s,e.selectionEnd=Math.min(a,e.value.length))}})),null==Zf(t)&&e.value&&n(fh(e)?ph(e.value):e.value),Yd((()=>{var n=t()
fh(e)&&n===ph(e.value)||("date"!==e.type||n||e.value)&&n!==e.value&&(e.value=n??"")}))}function dh(e,t,n=t){lp(e,"change",(t=>{var r=t?e.defaultChecked:e.checked
n(r)})),null==Zf(t)&&n(e.checked),Yd((()=>{var n=t()
e.checked=Boolean(n)}))}function fh(e){var t=e.type
return"number"===t||"range"===t}function ph(e){return""===e?null:+e}function hh(e,t,n){if(e.multiple)return function(e,t){for(var n of e.options)n.selected=~t.indexOf(gh(n))}(e,t)
for(var r of e.options){if(wd(gh(r),t))return void(r.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}function vh(e,t,n=t){var r=!0
lp(e,"change",(t=>{var r,i=t?"[selected]":":checked"
if(e.multiple)r=[].map.call(e.querySelectorAll(i),gh)
else{var o=e.querySelector(i)??e.querySelector("option:not([disabled])")
r=o&&gh(o)}n(r)})),Xd((()=>{var i=t()
if(hh(e,i,r),r&&void 0===i){var o=e.querySelector(":checked")
null!==o&&(i=gh(o),n(i))}e.__value=i,r=!1})),function(e,t){Xd((()=>{var t=new MutationObserver((()=>{var t=e.__value
hh(e,t)}))
return t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{t.disconnect()}}))}(e)}function gh(e){return"__value"in e?e.__value:e.value}class _h{#e=new WeakMap
#t
#n
static entries=new WeakMap
constructor(e){this.#n=e}observe(e,t){var n=this.#e.get(e)||new Set
return n.add(t),this.#e.set(e,n),this.#r().observe(e,this.#n),()=>{var n=this.#e.get(e)
n.delete(t),0===n.size&&(this.#e.delete(e),this.#t.unobserve(e))}}#r(){return this.#t??(this.#t=new ResizeObserver((e=>{for(var t of e)for(var n of(_h.entries.set(t.target,t),this.#e.get(t.target)||[]))n(t)})))}}var mh=new _h({box:"border-box"})
function bh(e,t){return e===t||e?.[qu]===t}function yh(e={},t,n,r){return Xd((()=>{var r,i
return Yd((()=>{r=i,i=[],Zf((()=>{e!==n(...i)&&(t(e,...i),r&&bh(n(...r),e)&&t(null,...r))}))})),()=>{vf((()=>{i&&bh(n(...i),e)&&t(null,...i)}))}})),e}function wh(e,t,n){if(null==e)return t(void 0),n&&n(void 0),mu
const r=Zf((()=>e.subscribe(t,n)))
return r.unsubscribe?()=>r.unsubscribe():r}const kh=[]
function Sh(e,t=mu){let n=null
const r=new Set
function i(t){if(Wu(e,t)&&(e=t,n)){const t=!kh.length
for(const t of r)t[1](),kh.push(t,e)
if(t){for(let e=0;e<kh.length;e+=2)kh[e][0](kh[e+1])
kh.length=0}}}function o(t){i(t(e))}return{set:i,update:o,subscribe:function(s,a=mu){const l=[s,a]
return r.add(l),1===r.size&&(n=t(i,o)||mu),s(e),()=>{r.delete(l),0===r.size&&n&&(n(),n=null)}}}}function xh(e,t,n){const r=!Array.isArray(e),i=r?[e]:e
if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const o=t.length<2
return s=(e,n)=>{let s=!1
const a=[]
let l=0,c=mu
const u=()=>{if(l)return
c()
const i=t(r?a[0]:a,e,n)
o?e(i):c="function"==typeof i?i:mu},d=i.map(((e,t)=>wh(e,(e=>{a[t]=e,l&=~(1<<t),s&&u()}),(()=>{l|=1<<t}))))
return s=!0,u(),function(){yu(d),c(),s=!1}},{subscribe:Sh(n,s).subscribe}
var s}function Eh(e){let t
return wh(e,(e=>t=e))(),t}let Ch=!1,Ph=Symbol()
function Th(e,t,n){const r=n[t]??={store:null,source:Id(void 0),unsubscribe:mu}
if(r.store!==e&&!(Ph in n))if(r.unsubscribe(),r.store=e??null,null==e)r.source.v=void 0,r.unsubscribe=mu
else{var i=!0
r.unsubscribe=wh(e,(e=>{i?r.source.v=e:Od(r.source,e)})),i=!1}return e&&Ph in n?Eh(e):Yf(r.source)}function $h(e,t){return e.set(t),t}function Lh(){const e={}
return[e,function(){Qd((()=>{for(var t in e){e[t].unsubscribe()}uu(e,Ph,{enumerable:!1,value:!0})}))}]}const Ih={get(e,t){let n=e.props.length
for(;n--;){let r=e.props[n]
if(_u(r)&&(r=r()),"object"==typeof r&&null!==r&&t in r)return r[t]}},set(e,t,n){let r=e.props.length
for(;r--;){let i=e.props[r]
_u(i)&&(i=i())
const o=du(i,t)
if(o&&o.set)return o.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length
for(;n--;){let r=e.props[n]
if(_u(r)&&(r=r()),"object"==typeof r&&null!==r&&t in r){const e=du(r,t)
return e&&!e.configurable&&(e.configurable=!0),e}}},has(e,t){if(t===qu||t===Hu)return!1
for(let n of e.props)if(_u(n)&&(n=n()),null!=n&&t in n)return!0
return!1},ownKeys(e){const t=[]
for(let n of e.props){_u(n)&&(n=n())
for(const e in n)t.includes(e)||t.push(e)}return t}}
function Oh(e){return e.ctx?.d??!1}function Rh(e,t,n,r){var i,o=0!=(n&td),s=!Vu||0!=(n&nd),a=0!=(n&id),l=0!=(n&od),c=!1
a?[i,c]=function(e){var t=Ch
try{return Ch=!1,[e(),Ch]}finally{Ch=t}}((()=>e[t])):i=e[t]
var u,d=qu in e||Hu in e,f=a&&(du(e,t)?.set??(d&&t in e&&(n=>e[t]=n)))||void 0,p=r,h=!0,v=!1,g=()=>(v=!0,h&&(h=!1,p=l?Zf(r):r),p)
if(void 0===i&&void 0!==r&&(f&&s&&function(e){throw new Error("https://svelte.dev/e/props_invalid_value")}(),i=g(),f&&f(i)),s)u=()=>{var n=e[t]
return void 0===n?g():(h=!0,v=!1,n)}
else{var _=(o?kd:xd)((()=>e[t]))
_.f|=ju,u=()=>{var e=Yf(_)
return void 0!==e&&(p=void 0),void 0===e?p:e}}if(0==(n&rd))return u
if(f){var m=e.$$legacy
return function(e,t){return arguments.length>0?(s&&t&&!m&&!c||f(t?u():e),e):u()}}var b=!1,y=Id(i),w=kd((()=>{var e=u(),t=Yf(y)
return b?(b=!1,t):y.v=e}))
return a&&Yf(w),o||(w.equals=zu),function(e,t){if(arguments.length>0){const n=t?Yf(w):s&&a?md(e):e
if(!w.equals(n)){if(b=!0,Od(y,n),v&&void 0!==p&&(p=n),Oh(w))return e
Zf((()=>Yf(w)))}return e}return Oh(w)?w.v:Yf(w)}}function Mh(e){null===pd&&fd(),Vu&&null!==pd.l?function(e){var t=e.l
return t.u??={a:[],b:[],m:[]}}(pd).m.push(e):Jd((()=>{const t=Zf(e)
if("function"==typeof t)return t}))}function Fh(e){null===pd&&fd(),Mh((()=>()=>Zf(e)))}const Ah=Sh("")
"undefined"!=typeof window&&((window.__svelte??={}).v??=new Set).add("5")
const jh=e=>e
function Nh(e){const t=e-1
return t*t*t+1}function Dh(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function Bh(e,{delay:t=0,duration:n=400,easing:r=jh}={}){const i=+getComputedStyle(e).opacity
return{delay:t,duration:n,easing:r,css:e=>"opacity: "+e*i}}function qh(e,{delay:t=0,duration:n=400,easing:r=Nh,x:i=0,y:o=0,opacity:s=0}={}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-s),[d,f]=Dh(i),[p,h]=Dh(o)
return{delay:t,duration:n,easing:r,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*d}${f}, ${(1-e)*p}${h});\n\t\t\topacity: ${l-u*t}`}}function Hh(e,{delay:t=0,duration:n=400,easing:r=Nh,axis:i="y"}={}){const o=getComputedStyle(e),s=+o.opacity,a="y"===i?"height":"width",l=parseFloat(o[a]),c="y"===i?["top","bottom"]:["left","right"],u=c.map((e=>`${e[0].toUpperCase()}${e.slice(1)}`)),d=parseFloat(o[`padding${u[0]}`]),f=parseFloat(o[`padding${u[1]}`]),p=parseFloat(o[`margin${u[0]}`]),h=parseFloat(o[`margin${u[1]}`]),v=parseFloat(o[`border${u[0]}Width`]),g=parseFloat(o[`border${u[1]}Width`])
return{delay:t,duration:n,easing:r,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*s};${a}: ${e*l}px;padding-${c[0]}: ${e*d}px;padding-${c[1]}: ${e*f}px;margin-${c[0]}: ${e*p}px;margin-${c[1]}: ${e*h}px;border-${c[0]}-width: ${e*v}px;border-${c[1]}-width: ${e*g}px;min-${a}: 0`}}var Uh=(e,t)=>{Od(t,!1)},Gh=gp('<div role="alert" class="svelte-1c416no"><p class="svelte-1c416no"> </p></div>')
function Wh(e,t){vd(t,!0)
const[n,r]=Lh(),i=()=>Th(Ah,"$alert",n)
let o=Rh(t,"ms",3,3e3),s=Ld(!1),a=0,l=Ld("")
const c=(e,t)=>{clearTimeout(a),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
Od(l,`translate(${t}px, ${e.offsetTop}px)`),Od(s,!0)}(),t>0&&(a=setTimeout((()=>{Od(s,!1),$h(Ah,"")}),t))):Od(s,!1)}
Jd((()=>{c(i(),o())})),Fh((()=>clearTimeout(a)))
var u=mp(),d=Gd(u),f=e=>{var t=Gh()
let n
t.__click=[Uh,s]
var r=Ud(t),o=Ud(r)
Zd((()=>{n=Jp(t,"",n,{transform:Yf(l)}),wp(o,i())})),lh(3,t,(()=>qh),(()=>({delay:250,duration:300,x:0,y:-100,opacity:.5}))),bp(e,t)}
Lp(d,(e=>{Yf(s)&&e(f)})),bp(e,u),gd(),r()}fp(["click"])
let zh=!1
function Vh(e){e&&(zh||(zh=!0,kp(Wh,{target:document.body})),Ah.set(e))}function Qh(e,t){return Array.from(e,t)}function Jh(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function Kh(e,t){return Qh(Jh(e,t))}function Xh(e){return e.trim()}function Yh(e){const t=n(e)
if(_c(t))return Xh(t)}function Zh(e,t){return Yh(t).includes(e)}function ev(e,...t){return(...n)=>e(...t,...n)}let tv=0,nv=0,rv=0
function iv(){return tv||(tv=t("pCL")),tv}function ov(){return nv||(nv=t("pCC")),nv}function sv(){return rv||(rv=t("pCR")),rv}function av(){const e=Kh("a",iv()).filter(function(e){return ev(Zh,e)}("message"))
e.length&&async function(){const e=new Audio(vc("defaultMessageSound"))
try{await e.play()}catch(e){Vh("Message Sound Not Allowed")}}()}function lv(e,t,n,r){var i
Dc(e,t,n,{once:!0,...(i=r,gc(i)?{capture:i}:i)})}let cv=0,uv=0,dv=0,fv=0,pv=0,hv=0
function vv(e){uv=e.clientX,dv=e.clientY}function gv(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(cv,null).transform)
fv=e[0]-uv,pv=e[1]-dv}function _v(e){e.clientX===uv&&e.clientY===dv||(cv.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+fv).toString()}, ${(e.clientY+pv).toString()})`,vv(e))}function mv(e){return function(e){const t=performance.now()
t-hv>16&&(_v(e),hv=t)}(e),e.preventDefault(),!1}function bv(e){return _v(e),function(e,t,n,r){e instanceof EventTarget&&e.removeEventListener(t,n,r)}(document.body,"dragover",mv),e.preventDefault(),!1}function yv(e,t){!function(e,t){cv=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),vv(t),gv(),hv=0,t.dataTransfer.setData("text/plain",""),Dc(document.body,"dragover",mv),lv(document.body,"drop",bv)}function wv(e,t){e.draggable=!0,Dc(e,"dragstart",ev(yv,t))}function kv(e){return String(e).replaceAll(" ","_")}const Sv={}
function xv(e,t,n){if(!e)return
const r=function(e,t){let n=kv(e)
return t&&(n+=`__${kv(t)}`),n}(e,t),i=function(e,t){let n=e
return t&&(n+=`__${kv(t)}`),n}(r,n)
Sv[i]||(Sv[i]=!0,ra(r,function(e){return e?{eventLabel:e}:null}(n)))}let Ev=0
function Cv(e){const t=l(/\sguildId: (?<id>\d{1,6}),/,n(e))
t&&(Ev=Number(t))}function Pv(){return Ev||Kh("script",document.body).forEach(Cv),Ev}function Tv(e){return Object.entries(e)}function $v(e,t,[n,r]){Sc(r)&&null!==r?e(t[n],r):t[n]=r}function Lv(e,t){Tv(t).forEach(ev($v,Lv,e))}function Iv(e,t){const n=document.createElement(e)
return t&&Lv(n,t),n}function Ov(e){return Iv("div",e)}function Rv(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function Mv(e,t){return Qh(Rv(e,t))}function Fv(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function Av(e,t){t instanceof Element&&(t.innerHTML=String(e))}const jv={id:"content",style:{display:"none"}},Nv={width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}
function Dv(e){let n=t("content")
n?Av("",n):(n=Ov(jv),Fv(document.body,n)),$(n).dialog(Nv),Mv("ui-dialog-titlebar-close").forEach((e=>e.blur())),e(n)}async function Bv(e){(await e).default()}function qv(){Bv(import("./mountBuffLog.svelte-EJXV1heC.js"))}function Hv(){Bv(import("./mountCombatLog.svelte-CdF7Vr0v.js"))}function Uv(){Bv(import("./mountCreatureLog.svelte-DB_4Joo0.js"))}function Gv(){Bv(import("./mountFsboxlog.svelte-Dt4dh2gL.js"))}function Wv(){Bv(Promise.resolve().then((function(){return vE})))}function zv(){Bv(import("./mountGuildTracker.svelte-D6NnleSb.js"))}async function Vv(e){(await import("./injectAuctionSearch-FUTfHAaD.js")).default(e)}async function Qv(e){const{injectFindBuffs:t}=await import("./findBuffs-BkxZ9_6L.js")
t(e)}async function Jv(e){const{injectFindOther:t}=await import("./findBuffs-BkxZ9_6L.js")
t(e)}async function Kv(e){(await import("./injectOnlinePlayers-KI68jvC1.js")).default(e)}function Xv(){Bv(Promise.resolve().then((function(){return RC})))}function Yv(){Bv(import("./mountQuickLinksMgr.svelte-BX0IIWRU.js"))}async function Zv(e){(await import("./quickWear-DEf-pWST.js")).default(e)}function eg(){Bv(import("./mountRecipeMgr.svelte-B90fjCQ2.js"))}function tg(){Bv(import("./mountReliclist.svelte-Cq0oFBlp.js"))}function ng(e){return new Promise((t=>{setTimeout(t,e)}))}function rg(e){Dc(window,"beforeunload",(()=>e.abort()))}const ig=900
let og=0
const sg=5
let ag=0
async function lg(){ag<sg-$.active&&performance.now()-og>=ig?(ag=sg-$.active,og=performance.now()):await ng(100)}async function cg(e,t=10){await async function(){for(;ag<1;)await lg()
ag-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=rg,$.ajax(t).fail(((e,t,n)=>{e.textStatus=t,e.errorThrown=n}))}(e)}catch(n){if(t&&n.status>500)return cg(e,t-1)
!function(e,t){if(![0,500,503].includes(t.status))throw new Nc([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}function ug(e){return Lv(e,{url:ja,data:{no_mobile:1}}),cg(e)}async function dg(e){return xc(await ug({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function fg(e){return dg({cmd:"export",...e})}function pg(){return fg({inc_tagged:"1",subcmd:"guild_store"})}function hg(e){return Iv("a",e)}function vg(e){e instanceof Element&&e.click()}function gg(e,t){const n=URL.createObjectURL(e),r=hg({download:t,href:n,style:{display:"none"}})
Fv(document.body,r),vg(r),document.body.removeChild(r),setTimeout((()=>{URL.revokeObjectURL(n)}),0)}async function _g(e,t){return xc(await cg({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function mg(e){return _g(e,{method:"POST"})}function bg(e,t){const n=[]
for(let r=0;r<t.length;r+=e)n.push(t.slice(r,r+e))
return n}let yg=null
function wg(){const e=t("holdtext")
if(e&&!yg){const t=l(/fallensword.com\/\?ref=(?<id>\d+)/,n(e))
t&&(yg=Number(t))}return yg}const kg=(e,t)=>t.some((t=>e instanceof t))
let Sg,xg
const Eg=new WeakMap,Cg=new WeakMap,Pg=new WeakMap
let Tg={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Eg.get(e)
if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Og(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}
function $g(e){Tg=e(Tg)}function Lg(e){return(xg||(xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Rg(this),t),Og(this.request)}:function(...t){return Og(e.apply(Rg(this),t))}}function Ig(e){return"function"==typeof e?Lg(e):(e instanceof IDBTransaction&&function(e){if(Eg.has(e))return
const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()}
e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}))
Eg.set(e,t)}(e),kg(e,Sg||(Sg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Tg):e)}function Og(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(Og(e.result)),r()},o=()=>{n(e.error),r()}
e.addEventListener("success",i),e.addEventListener("error",o)}))
return Pg.set(t,e),t}(e)
if(Cg.has(e))return Cg.get(e)
const t=Ig(e)
return t!==e&&(Cg.set(e,t),Pg.set(t,e)),t}const Rg=e=>Pg.get(e)
function Mg(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Og(s)
return r&&s.addEventListener("upgradeneeded",(e=>{r(Og(s.result),e.oldVersion,e.newVersion,Og(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const Fg=["get","getKey","getAll","getAllKeys","count"],Ag=["put","add","delete","clear"],jg=new Map
function Ng(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return
if(jg.get(t))return jg.get(t)
const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ag.includes(n)
if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Fg.includes(n))return
const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly")
let s=o.store
return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]}
return jg.set(t,o),o}$g((e=>({...e,get:(t,n,r)=>Ng(t,n)||e.get(t,n,r),has:(t,n)=>!!Ng(t,n)||e.has(t,n)})))
const Dg=["continue","continuePrimaryKey","advance"],Bg={},qg=new WeakMap,Hg=new WeakMap,Ug={get(e,t){if(!Dg.includes(t))return e[t]
let n=Bg[t]
return n||(n=Bg[t]=function(...e){qg.set(this,Hg.get(this)[t](...e))}),n}}
async function*Gg(...e){let t=this
if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return
const n=new Proxy(t,Ug)
for(Hg.set(n,t),Pg.set(n,Rg(t));t;)yield n,t=await(qg.get(n)||t.continue()),qg.delete(n)}function Wg(e,t){return t===Symbol.asyncIterator&&kg(e,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===t&&kg(e,[IDBIndex,IDBObjectStore])}$g((e=>({...e,get:(t,n,r)=>Wg(t,n)?Gg:e.get(t,n,r),has:(t,n)=>Wg(t,n)||e.has(t,n)})))
let zg=Promise.resolve(),Vg=!1
function Qg(){return Vg||(zg=Mg("keyval-store",1,{upgrade(e){e.createObjectStore("keyval")}}),Vg=!0),zg}async function Jg(e){try{return(await Qg()).get("keyval",e)}catch(e){na(e)}}async function Kg(e,t){try{return(await Qg()).put("keyval",t,e)}catch(e){na(e)}}async function Xg(e){try{return(await Qg()).delete("keyval",e)}catch(e){na(e)}}const Yg=({folder_id:e})=>-2!==(e??-2),Zg=({folder_id:e})=>-2===e,e_=({player_id:e})=>-1!==(e??-1),t_=({player_id:e})=>e,n_=({player_id:e})=>-1===e,r_=([e,t,n])=>bg(20,e).map((e=>[e,t,n])),i_=e=>({inv_id:t})=>t===e.inv_id,o_=(e,t)=>e.attributes.find((({id:e})=>e===t))?.value??0,s_=(e,t)=>({...t,armor:o_(e,2),attack:o_(e,0),damage:o_(e,4),defense:o_(e,1),hp:o_(e,3),set_name:e.set_name??""}),a_=(e,t)=>t.forge||t.stats?.set_name,l_=e=>e?.s?e.r.items:[],c_=e=>[[e.filter(Yg),wg,0],[e.filter(Zg),wg,1],[e.filter(e_),t_,7],[e.filter(n_),wg,4]].flatMap(r_)
function u_(e){return function(){const t=this.data(),n=e.find(i_(t))
n?.attributes&&(t.stats=s_(n,t.stats),this.invalidate())}}const d_=async()=>await Jg(`fsh_${Hc.subcmd}_cache`)??[],f_=e=>Kg(`fsh_${Hc.subcmd}_cache`,e),p_=e=>t=>e.every((e=>e.inv_id!==t.inv_id))
async function h_(e,t,n){const r=await(i={item_id:e.map((({item_id:e})=>e)),inv_id:e.map((({inv_id:e})=>e)),p:e.map(t),t:e.map((()=>n))},mg({cmd:"fetchitem",compare:0,...i}))
var i
return r?.s&&(r.r.items=((e,t)=>t.map(((t,n)=>({...t,inv_id:e[n].inv_id}))))(e,r.r.items),await async function(e){const t=(await d_()).filter(p_(e))
await f_(t.concat(e))}(r.r.items)),r}const v_=(e,t)=>{return t.filter((n=Qh(e.data()),e=>n.some((t=>e.inv_id===t.inv_id))))
var n}
async function g_(e){const t=e.rows(a_),n=await async function(e){const t=await d_(),n=v_(e,t)
return await f_(n),n}(t)
t.every(u_(n))}async function __(e){const t=new DataTable(e)
await g_(t),t.draw()}const m_=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],b_=e=>{return[...m_(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??"",t?.set_attack??"",t?.set_defense??"",t?.set_armor??"",t?.set_hp??"",t?.set_damage??""]),e.cached].join(",")
var t}
function y_(e){return()=>Dv(e)}var w_=[{section:"Character",menu:[{label:"Buff Log",fn:qv},{label:"Combat Log",fn:Hv},{label:"Creature Log",fn:Uv},{label:"Recipe Manager",fn:eg},{label:"Quick Links",fn:Yv},{label:"Inventory Manager",href:`${Ya}invmanagernew`}]},{section:"Actions",menu:[{label:"Find Buffs",fn:y_(Qv)},{label:"Find Other",fn:y_(Jv)},{label:"Online Players",fn:y_(Kv)},{label:"AH Quick Search",fn:y_(Vv)}]},...Pv()?[{section:"Guild",menu:[{label:"Guild Inventory",href:`${Ya}guildinvmgr`},{label:"New Guild Log",fn:Wv},{label:"Merc Hunter",fn:function(){Bv(import("./mountMercs.svelte-C55mS1Sm.js"))}},{label:"Pot Report",fn:function(){Bv(Promise.resolve().then((function(){return eC})))}},{label:"Guild Tracker",fn:zv}]}]:[],{section:"Extra",menu:[{label:"Quick Extract",fn:Xv},{label:"Quick Wear",fn:y_(Zv)},{label:"FS Box Log",fn:Gv},{label:"SE Tracker",fn:function(){Bv(import("./mountSuperElite.svelte-CIj6jJMl.js"))}}]},...vc("betaOptIn")&&Pv()?[{section:"Beta Features",menu:[{label:"Relic List",fn:tg,beta:!0},{label:"GS Export",fn:async function(){if(!Pv())return
const e=await pg(),t=await Jg("fsh_guildinvmgr_cache")??[],n=e.items.map((e=>t=>{const n=e.find((({inv_id:e})=>e===t.inv_id))
return n?.attributes?{...t,stats:{...t.stats,armor:o_(n,2),attack:o_(n,0),damage:o_(n,4),defense:o_(n,1),hp:o_(n,3),set_name:n.set_name??"",...n.set_name&&{set_armor:o_(n.set_bonuses,2)},...n.set_name&&{set_attack:o_(n.set_bonuses,0)},...n.set_name&&{set_damage:o_(n.set_bonuses,4)},...n.set_name&&{set_defense:o_(n.set_bonuses,1)},...n.set_name&&{set_hp:o_(n.set_bonuses,3)}},cached:!0}:{...t,cached:!1}})(t))
var r
gg((r=`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name,set_attack,set_defense,set_armor,set_hp,set_damage,cached\n${(e=>e.map(b_).join("\n"))(n)}\n`,new Blob([r],{type:"text/csv"})),"gs_export.csv")},beta:!0},{label:"Who's Got What",fn:function(){Bv(Promise.resolve().then((function(){return oP})))},beta:!0}]}]:[],{section:"FSH developer quick links",menu:[{playerId:1963510,playerName:"PointyHair"}]}],k_=(e,t,n)=>t(Yf(n).label,Yf(n).fn),S_=gp('<button type="button" class="svelte-8sy7i5"> </button>'),x_=(e,t,n)=>t(Yf(n).label),E_=gp('<a class="svelte-8sy7i5"> </a>'),C_=(e,t,n)=>t(Yf(n).playerName),P_=gp('<button type="button" class="helperDevBtn svelte-8sy7i5">PM</button> <a class="svelte-8sy7i5"> </a>',1),T_=gp('<sup class="fshRed">beta</sup>'),$_=gp("<li><!> <!></li>"),L_=gp('<h2 class="svelte-8sy7i5"> </h2> <ul></ul>',1)
fp(["click"])
var I_=gp('<div class="modal svelte-gt76l6"><!></div>'),O_=gp('<div><button type="button">Helper Menu</button> <!></div>')
function R_(e,t){vd(t,!0)
let n=Ld(!1)
const r=vc("keepHelperMenuOnScreen"),i=vc("draggableHelperMenu")
function o(){Od(n,!Yf(n))}var s=O_()
Vp(s,0,"helper-menu svelte-gt76l6",null,{},{"helper-menu-fixed":r})
var a=Ud(s)
Vp(a,0,"toggle svelte-gt76l6",null,{},{"helper-menu-move":i}),a.__click=o
var l=Wd(a,2),c=e=>{var t=I_()
!function(e,t){function n(e){xv("helperMenu",e)}function r(e,r){kc(r)&&(n(e),t.doToggle(),r())}function i(e){n("sendMsg"),t.doToggle(),window.openQuickMsgDialog(e)}vd(t,!0)
var o=mp()
Rp(Gd(o),17,(()=>w_),Op,((e,t)=>{var o=L_(),s=Gd(o),a=Ud(s)
Rp(Wd(s,2),21,(()=>Yf(t).menu),Op,((e,t,o,s)=>{var a=$_(),l=Ud(a),c=e=>{var n=S_()
n.__click=[k_,r,t]
var i=Ud(n)
Zd((()=>wp(i,Yf(t).label))),bp(e,n)},u=(e,r)=>{var o=e=>{var r=E_()
r.__click=[x_,n,t]
var i=Ud(r)
Zd((()=>{Zp(r,"href",Yf(t).href),wp(i,Yf(t).label)})),bp(e,r)},s=(e,n)=>{var r=e=>{var n=P_(),r=Gd(n)
r.__click=[C_,i,t]
var o=Wd(r,2)
Zp(o,"href",`${Va??""}menuItem.playerId`)
var s=Ud(o)
Zd((()=>wp(s,Yf(t).playerName))),bp(e,n)}
Lp(e,(e=>{Yf(t).playerName&&e(r)}),n)}
Lp(e,(e=>{Yf(t).href?e(o):e(s,!1)}),r)}
Lp(l,(e=>{Yf(t).fn?e(c):e(u,!1)}))
var d=Wd(l,2),f=e=>{bp(e,T_())}
Lp(d,(e=>{Yf(t).beta&&e(f)})),bp(e,a)})),Zd((()=>wp(a,Yf(t).section))),bp(e,o)})),bp(e,o),gd()}(Ud(t),{doToggle:o}),lh(3,t,(()=>Bh),(()=>({duration:100}))),bp(e,t)}
Lp(l,(e=>{Yf(n)&&e(c)})),qp(s,(e=>{return t=e,void(i&&wv(t))
var t})),bp(e,s),gd()}function M_(){const e=Ec(".mainbody")
e&&function(e,t){kp(R_,{target:t.parentElement,props:{props:e}})}({},e)}function F_(e){return _g(e,{method:"GET"})}function A_(e){return F_({cmd:"trade",...e})}function j_(e,t){return A_({subcmd:"sendgold",xc:window.ajaxXC,target_username:e,gold_amount:t})}function N_(e,t,...n){return e(...n)}function D_(e){return(new DOMParser).parseFromString(e,"text/html")}function B_(e){return ug({data:e})}async function q_(e){const t=await B_(e)
if(t)return D_(t)}function H_(e){const n=t("info-msg",e)
if(n){const e=n.innerHTML
return e?e.replace(/<br.*/,""):""}}async function U_(e,t){const n=await q_(e)
if(!n)return{s:!1}
const r=H_(n)
return r===t?{s:!0}:{s:!1,e:{message:r}}}fp(["click"])
let G_=0
const W_=()=>G_
function z_(){G_=vc("sendGoldonWorld")}async function V_(){if(!W_())return
xv("NewMap","doSendGold")
const e=await function(e,t){return N_(j_,0,e,t)}($("#HelperSendTo").html(),$("#HelperSendAmt").html().replace(/[^\d]/g,""))
e.s&&(yc("currentGoldSentTotal",parseInt(vc("currentGoldSentTotal"),10)+parseInt(vc("goldAmount"),10)),GameData.fetch(Al))}function Q_(e){window.location=e}function J_(e){vc("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function K_(e){xv("keyHandler",e)}function X_(e){return e?.toLowerCase?.()}function Y_(e,t){return X_(e)<X_(t)?-1:X_(e)>X_(t)?1:0}function Z_(e){return F_({cmd:"profile",...e})}async function em(){const e=await Z_({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort(((e,t)=>Y_(e.name,t.name)))}:e}function tm(){return N_(em)}const nm=[e=>e?.s,(e,t)=>e.r?.length>t]
async function rm(e){const t=await tm()
if(((e,t)=>nm.every((n=>n(t,e))))(e,t)){K_("changeCombatSet")
const n=t.r[e].id
J_("2"),Q_(`${za+Ba}managecombatset&submit=Use&combatSetId=${n}`)}}function im(e,n){t("worldPage")||(K_(e),Q_(n))}function om(){Hc.enableMaxGroupSizeToJoin?Q_(ll):Q_(al)}function sm(){K_("logPage"),J_("2"),Q_(Ga)}function am(e){const t=Ec(`#pCC input[value="${e}"]`)
t&&(K_("movePage"),vg(t))}const lm=[["!",rm,0],["@",rm,1],['"',rm,1],["#",rm,2],["£",rm,2],["$",rm,3],["%",rm,4],["^",rm,5],["&",rm,6],["*",rm,7],["(",rm,8],["0",function(){im("toWorld",cl)}],["<",am,"<"],[">",am,">"],["G",function(){K_("createGroup"),J_("4"),Q_(`${il}create`)}],["L",sm],["b",function(){K_("backpack"),J_("2"),Q_(Qa)}],["g",function(){K_("gotoGuild"),J_("4"),Q_(`${tl}manage`)}],["j",function(){K_("joinAllGroup"),J_("4"),om()}],["l",sm],["p",function(){K_("profile"),J_("2"),Q_(za)}],["r",function(){im("doRepair",`${fl+Ba}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in Hc&&!Hc.dialogIsClosed()||(K_("insertQuickWear"),Dv(Zv))}],["y",V_]]
const cm=[e=>["HTML","BODY"].every((t=>e.target.tagName!==t)),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function um(e){var t;(t=e,cm.some((e=>e(t))))||function(e){const t=lm.find((([t])=>e===t))
t&&t[1](t[2])}(e.key)}function dm(){Dc(document,"keyup",um)}function fm(e,t){return Yh(t)===e}function pm(e){return ev(fm,e)}function hm(e,t,n){Dc(e,"click",t,n)}function vm(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function gm(e,t){return Qh(vm(e,t))}function _m(e){hm(e,(()=>{xv("chrome","Game Help link")})),Av(`<a href="${Da}settings">Game Help</a>`,e)}function mm(){gm("#pCR h3").filter(pm("Game Help")).forEach(_m)}function bm(e){Hc[e]=vc(e)}function ym(e,t){if(t instanceof Element)return t.closest(e)}function wm(e){e?.classList&&e.classList.add("fshHide")}function km(e){const n=ym("a",e.target)
n?.getAttribute("href")===nl&&(xv("useNewGuildLog","Alter Href"),e.preventDefault(),Wv(),wm(t("notification-guild-log")))}function Sm(){return Hc.huntingMode&&window.realmKeyHandler}function xm(e){e.forEach((e=>ru(3,e)))}function Em(){return B_({cmd:"guild",subcmd:"manage"})}function Cm(e){return ym("tr",e)}function Pm(e,t){return a(e,t)?.groups??{}}function Tm(e){const{d:t,h:n,m:r,s:i}=Pm(Ia,e),o=Number(t),s=Number(n)+24*o,a=Number(r)+60*s,l=Number(i)+60*a
return{day:t,days:o,hour:n,hours:s,min:r,mins:a,sec:i,secs:l,timestamp:_a()-l}}function $m(e,t){if(t){const n=new Set
return e.filter((e=>n.has(e[t])?0:n.add(e[t])))}return Qh(new Set(e))}const Lm=e=>Number(Yh(Cm(e)?.cells[4])?.replaceAll(",","")),Im=e=>Number(l(Oa,e.href)),Om=e=>Yh(Cm(e)?.cells[3]),Rm=e=>Number(l(Ma,e))
function Mm(e){return{guild_xp:Lm(e),id:Im(e),name:Yh(e),rank:Om(e)}}function Fm(e){const{stam:t,max:n}=Pm(Ra,e)
return{current_stamina:Number(t),last_activity:Tm(e).timestamp,level:Number(l(/Level:.+?(?<l>\d+)/,e)),max_stamina:Number(n),vl:Rm(e)}}function Am(e){return{guild_id:Pv(),image_version:0,xp:-1,...Mm(e),...Fm(e.dataset.tipped)}}function jm(e,t,n){return{id:n,members:e.filter((e=>e.rank===t.rank)),name:t.rank,permissions:0,tax:-1}}async function Nm(){const e=D_(await Em()).getElementById("pCC")
if(!e)return{e:{code:0,message:"Failure"},s:!1}
const t=gm(lc,e).map(Am)
return{r:$m(t,"rank").map(ev(jm,t)),s:!0}}function Dm(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function Bm(){return kc(window.jQuery)}function qm(e){return Object.keys(e)}function Hm(e){return Math.floor(Math.max(0,_a()-e)/86400)}function Um(e){return Number.isNaN(e)}const Gm=0,Wm=1,zm=2,Vm=3,Qm=4,Jm=5,Km=6,Xm="fsh_guildActivity"
function Ym(e){return fg({guild_id:e,subcmd:"guild_members"})}function Zm(e){return Promise.all(e)}function eb(e){let t=e.toString()
return e<10&&(t=`0${t}`),t}function tb(e){return`${e[0]}-${e[1]}-${e[2]} ${e[3]}:${e[4]}:${e[5]}`}function nb(e){return"[object Date]"===Object.prototype.toString.call(e)&&!Um(e.getTime())}function rb(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(eb)}(e))}function ib(e){if(nb(e))return tb(rb(e))}async function ob(){return await Jg(Xm)??{lastUpdate:0,members:{}}}const sb=e=>ib(new Date(1e3*e)),ab=e=>[e[0],e[1],e[2],e[3],sb(e[4]),e[5],e[6]]
function lb(e){const{lastUpdate:t,members:n}=e
var r
return`Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n${Tv(n).flatMap((r=sb(t),([e,t])=>t.map(ab).map((t=>[r,e,...t].join(","))))).join("\n")}`}const cb=e=>`${e[0]}${e[1]}${e[2]}${e[3]}${e[4]}${e[5]}`,ub=[e=>e.getFullYear().toString(),e=>e.getMonth()+1,e=>e.getDate(),e=>e.getHours(),e=>e.getMinutes(),e=>e.getSeconds()],db=e=>t=>t(e)
async function fb(e,t){const n=await ob()
if(!n.lastUpdate||!n.members)return
const r=e(n)
gg(new Blob([r],{type:t}),`${cb(ub.map(db(new Date)).map(eb))}_GuildTracker.${t.split("/")[1]}`)}async function pb(e){const t=await ob(),n={lastUpdate:t.lastUpdate,members:Dm(Tv(t.members).filter((([t])=>t!==e)))}
Kg(Xm,n)}async function hb(e){const t=await ob(),n={lastUpdate:t.lastUpdate,members:Dm(Tv(t.members).map((([t,n])=>[t,n.filter((t=>t[4]>e))])))}
Kg(Xm,n)}async function vb(){const[e,t]=await Zm([ob(),Ym(Pv())]),n=t.map((({username:e})=>e))
return qm(e.members).filter((e=>t=>!e.find((e=>e===t)))(n)).sort(Y_)}const gb=e=>[e.name,[Hm(e.last_activity),e.current_stamina,e.level,e.max_stamina,_a(),e.vl,e.guild_xp]],_b=e=>e.members.map(gb),mb=e=>e.r.flatMap(_b),bb=[e=>!e,(e,t)=>e[1]!==t[1],(e,t)=>e[2]!==t[2],(e,t)=>e[3]>t[3],(e,t)=>e[5]!==t[5],(e,t)=>e[6]!==t[6]],yb=e=>!e.some(wa),wb=e=>!e.some(Um),kb=([,e])=>e.length,Sb=([e,t])=>[e,t.filter(yb).filter(wb)],xb=e=>Tv(e.members||{}).map(Sb).filter(kb),Eb=(e,t)=>e[4]>t[4]?e:t,Cb=([e,t])=>[e,t.reduce(Eb)],Pb=([e,t])=>[e,[t]],Tb=e=>([t])=>!e[t]||_a()-e[t][4]>=86100,$b=(e,t,n)=>{return((e,t,n)=>({lastUpdate:_a(),members:Dm(qm({...e,...t,...n}).map((r=>[r,[...e[r]??[],...t[r]??[],...n[r]??[]]])))}))(Dm(e.map((e=>([t,n])=>[t,n.filter((n=>n[4]!==e[t][4]))])(t))),Dm(Tv(t).filter((r=n,([e,t])=>bb.some((n=>n(r[e]?.[0],t))))).map(Pb)),n)
var r}
function Lb(e,t){const n=xb(e),r=Dm(n.map(Cb)),i=mb(t).filter(Tb(r))
i.length?function(e,t,n){e&&t&&n&&Kg(Xm,$b(t,n,Dm(e.map(Pb))))}(i,n,r):function(e){e&&Kg(Xm,{lastUpdate:_a(),members:Dm(e)})}(n)}const Ib=e=>_a()>Gc(e.lastUpdate,0)+300
function Ob(e){Ib(e)&&async function(e){const t=await Nm()
t.s&&Lb(e,t)}(e)}function Rb(){return!Bm()}function Mb(e){return Iv("li",e)}function Fb(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function Ab(e,t){if(t instanceof Node&&t.parentNode instanceof Node)return function(e,t){return t.nextSibling instanceof Node?Fb(e,t.nextSibling):Fv(t.parentNode,e)}(e,t)}const jb=["Buff Log","Combat Logs","Creature Logs","Quick Links","Recipe Manager","New Guild Log"]
function Nb(e,t){xv("accordion",e),jb.includes(e)?t():Dv(t)}function Db(e,t,n,r){const i=function(e,t,n){const r=Mb({className:`nav-level-${e}`}),i=hg({className:"nav-link fshPoint",textContent:t})
return Fv(r,i),Ab(r,n.parentNode),i}(e,t,r)
kc(n)?hm(i,ev(Nb,t,n)):(i.href=n,hm(i,(()=>xv("accordion",t))))}const Bb=[[e=>e.recipeManagerLink,"1","Recipe Manager",eg,"nav-character-log"],[e=>e.inventoryManagerLink,"1","Inventory Manager",`${Ya}invmanagernew`,"nav-character-log"],[e=>e.medalGuideLink,"1","Medal Guide",`${za}${Ba}medalguide`,"nav-character-log"],[e=>e.buffLogLink&&vc("keepBuffLog"),"1","Buff Log",qv,"nav-character-log"],[e=>e.combatLogLink&&vc("keepLogs"),"1","Combat Logs",Hv,"nav-character-notepad"],[e=>e.creatureLogLink&&vc("showMonsterLog"),"1","Creature Logs",Uv,"nav-character-notepad"],[e=>e.quickLinksLink,"1","Quick Links",Yv,"nav-character-notepad"],[e=>e.auctionSearchLink,"2","AH Quick Search",Vv,"nav-actions-trade-auctionhouse"],[e=>e.onlinePlayersLink,"2","Online Players",Kv,"nav-actions-interaction-findplayer"],[e=>e.findOtherLink,"2","Find Other",Jv,"nav-actions-interaction-findplayer"],[e=>e.findBuffsLink,"2","Find Buffs",Qv,"nav-actions-interaction-findplayer"],[e=>e.guildInventoryLink&&Pv(),"2","Guild Inventory",`${Ya}guildinvmgr`,"nav-guild-storehouse-inventory"],[e=>e.newGuildLogLink&&Pv()&&!vc("useNewGuildLog"),"2","New Guild Log",Wv,"nav-guild-ledger-advisor"],[e=>e.topRatedLink,"2","Top 250 Players",`${Da}toprated${Ba}xp`,"nav-toprated-players-level"]]
function qb(e){Bb.forEach((([n,r,i,o,s])=>{n(e)&&function(e,n,r,i){const o=t(i)
o instanceof Node&&Db(e,n,r,o)}(r,i,o,s)}))}const Hb=e=>22*gm("li",e).length||null
function Ub(e,t,n){qb(n),function(e,t){t.heights=gm("#nav > li").map(Hb)
const n=Number(t.state)
n&&n>-1&&n<e.children.length&&(e.children[t.state].children[1].style.height=`${t.heights[t.state]}px`)}(e,t)}var Gb=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function Wb(e){return function(e){return-1!==e&&0===Ec(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?(xv("accordion","collapse"),-1):e}const zb=(e,t,n)=>$(e).data(`${n}${t}`)
function Vb(e,t,n){return new Promise((r=>{const i=zb(e,t,n)
i?r(i):function(e,t,n,r){$(e).on(`${X_(t)}create`,(()=>{r(zb(e,t,n))}))}(e,t,n,r)}))}const Qb=[[e=>!Sc(e),()=>qc("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>qc("$('#nav').data('hcsNav').heights does not exist")]]
async function Jb(){const e=t("nav"),n=await Vb(e,"Nav","hcs")
return function(e){const t=Qb.find((([t])=>t(e)))
return!t||(t[1](),!1)}(n)?{theNav:e,myNav:n}:{}}function Kb(){!function(){const e=vc("lastActiveQuestPage")
vc("storeLastQuestPage")&&e.length>0&&(t("nav-character-questbook").href=e)}(),function(){const e=vc("lastScavPage")
vc("storeLastScavPage")&&e.length>0&&(t("nav-actions-artisanship-scavenging").href=e)}()}async function Xb(){const{theNav:e,myNav:t}=await Jb()
e&&t&&(Kb(),function(e,t){const n=Gb.map((e=>[e,vc(e)]))
n.some((([,e])=>e))&&Ub(e,t,Dm(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,Wb(n))}}(t))}function Yb(e){return B_({cmd:"bounty",page:e})}function Zb(e){return e()}function ey(e,t){yc(e,Bc(t))}let ty=0,ny=0
const ry=()=>ty,iy=()=>ny
function oy(){return Ov({className:"minibox"})}function sy(e){return Iv("span",e)}function ay(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function ly(e,t){ay(e,"beforeend",t)}function cy([e,t,n,r,i]){const o=e(),s=n()
if(s)return ey(t,s),Av("",o),function(e,t,n,r){const i=Ov({innerHTML:`<a class="fshBountyHeader" href="${ml}">${n} Bounties</a> `}),o=sy({className:"xxsLink",textContent:"Reset"})
return Fv(i,o),Fv(e,i),ly(e,function(e,t,n){const r=e.bounty
return 0===r.length?`<div class="xsOrange">[No ${t.toLowerCase()} bounties]</div>`:r.map(n).join("")}(t,n,r)),o}(o,s,r,i)}function uy(e,t){return`<a href="${e.link}" class="xsKhaki tip-static" data-tipped="${t(e)}">${e.target}</a><br>`}function dy(e,t){if("string"==typeof t){const e=a(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function fy(e){const t=vc(e)
if(t)return xc(t,dy)}function py(e){return e.split(",").map(Xh)}function hy(e){const t=vc(e)
return t?py(t):[]}function vy(e){return Ec("img",e[2]).title}function gy(e){const t="A"===(r=e[0]).children[0].tagName?r.children[0]:r.children[0].children[0]
var r
return{target:n(t),link:t.href,lvl:n(t.nextSibling).replace(/[[|\]]/g,""),reward:n(e[2]),rewardType:vy(e),xpLoss:n(e[3]),posted:n(e[4])}}let _y=0,my={},by={},yy=!1,wy=!1,ky=[]
const Sy=()=>my,xy=()=>by,Ey=()=>yy,Cy=()=>ky
function Py(e){return{...gy(e),progress:n(e[5])}}function Ty(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=Py(e.rows[t].cells)
my.bounty.push(n)}}(e)}function $y(e,t){return function(e){if(e)return my&&_a()-my.lastUpdate>_y}(e)||function(e){if(e)return by&&_a()-by.lastUpdate>_y}(t)}let Ly=0
const Iy=()=>Ly
function Oy(e){return`Level:  ${e.lvl}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Progress:  ${e.progress}`}function Ry(e){return uy(e,Oy)}function My(){Ly=cy([ry,"bountyList",Sy,"Active",Ry])}let Fy=0
const Ay=()=>Fy
function jy(e){return`Target Level:  ${e.lvl}<br>Offerer: ${e.offerer}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Posted: ${e.posted}<br>Tickets Req.:  ${e.tickets}`}function Ny(e){return e.accept?`<span class="xsGreen" onclick="${e.accept}">[a]</span>&nbsp;`:""}function Dy(e){return[Ny(e),uy(e,jy)].join("")}function By(){Fy=cy([iy,"wantedList",xy,"Wanted",Dy])}function qy(e){const t=e[6]
return"[n/a]"!==Yh(t)?t.children[0].children[0].getAttribute("onclick"):""}const Hy=[()=>Cy().includes("*"),e=>Cy().includes(e),(e,t)=>Hc.wantedGuildMembers&&"[n/a]"===Yh(t.cells[6])]
function Uy(e,t){var n;(function(e,t){return"[active]"!==Yh(t.cells[6])&&Hy.some((n=>n(e,t)))})(e,t)&&xy().bounty.push({...gy(n=t.cells),offerer:Yh(n[1].children[0].children[0]),tickets:Yh(n[5]),accept:qy(n)})}let Gy=0,Wy=0
function zy(e){const n=Ec('#pCC input[name="page"]',e)
if(!n)return
Gy=Number(n.value),Wy=Number(l(/of&nbsp;(?<of>\d*)/,n.parentNode.innerHTML))
const r=t("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
r&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],r=Yh(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===r)break
Uy(r,n)}}(r)}function Vy(e){Hc.enableActiveBountyList&&!Ey()&&(!function(e){const n=t("bounty-info",e)
if(!n)return
const r=n.parentNode.parentNode.previousElementSibling.children[0].children[0]
my={},my.bounty=[],my.isRefreshed=!0,my.lastUpdate=_a(),r&&Ty(r),yy=!0}(e),My())}async function Qy(e){const t=D_(e)
if(Vy(t),Hc.enableWantedList)if(zy(t),Gy<Wy){Qy(await Yb(Gy+1))}else By()}const Jy=[()=>!Sy(),()=>!xy(),()=>wy]
async function Ky(){if(function(e,t){my=fy("bountyList"),by=fy("wantedList"),_y=vc("bountyListRefreshTime"),wy=vc("bwNeedsRefresh"),wy||$y(e,t)&&(wy=!0)}(Hc.enableActiveBountyList,Hc.enableWantedList),Jy.some(Zb)){by={},by.bounty=[],by.isRefreshed=!0,by.lastUpdate=_a(),yy=!1,ky=hy("wantedNames"),yc("bwNeedsRefresh",!1)
Qy(await Yb(1))}else!function(e,t){t&&(xy().isRefreshed=!1,By()),e&&(Sy().isRefreshed=!1,My())}(Hc.enableActiveBountyList,Hc.enableWantedList)}function Xy(e,t){xv("activeWantedBounties",e),ey(t,null),Ky()}function Yy(e){e.target===Iy()&&Xy("getBountyListReset","bountyList"),e.target===Ay()&&Xy("getWantedListReset","wantedList")}function Zy(e,t){return fg({subcmd:"profile",player_username:e,...t&&{_:fa()}})}async function ew(e){const t=await Zy(o(),e),n=t?.username===o(),r=n?{...t,lastUpdate:ha()}:t
return n&&Kg("fsh_selfProfile",r),r}const tw=e=>ha()-Hc.allyEnemyOnlineRefreshTime<e?.lastUpdate
async function nw(e){if(e)return ew(e)
return function(e){return tw(e)?e:ew()}(await Jg("fsh_selfProfile"))}function rw(e,t){return t?.classList?.contains(e)}function iw(e,t){return rw(t[0],e)}function ow(e,t,n){const{target:r}=n,i=t.find(ev(e,r))
if(i)return i[1](r)}function sw(e){return ev(ow,iw,e)}function aw(e){return iu(e,"player_id")}function lw(e,t,n){return Math.floor(Math.max(e-t,0)/2+n)}function cw(e,t,n,r,i){let o=r
500===r&&(o=1e3)
const s=lw(window.screen.availHeight,o,window.screenY),a=lw(document.documentElement.clientWidth,n,window.screenX)
window.open(e,t,`width=${n}, height=${o}, left=${a}, top=${s}${i}`)}function uw(e,t){let n=""
t&&(n=`&blist=${t}`),cw(`${pl}&t=${e}${n}`,"fsQuickBuff",618,1e3,",scrollbars")}function dw(e){let t=e,n=Math.floor(t/60)
t%=60
let r=Math.floor(n/60)
n%=60
const i=Math.floor(r/24)
return r%=24,[i,r,n,t]}function fw(e,t){return 0===e?"":String(e)+t}function pw(e){const t=dw(Math.abs(_a()-e))
return`${fw(t[0]," days, ")+fw(t[1]," hours, ")+fw(t[2]," mins, ")+t[3]} secs`}const hw="enemy-buff-check-on",vw="enemy-buff-check-off",gw="enemy-send-message",_w="enemy-quickbuff",mw="enemy-quick-buff",bw=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function yw(e,t){return t[0](_a()-e)}function ww(e,t){return`<a class="player-name tip-static ${function(e,t){const n=bw.find(ev(yw,e))
return n?function(e,t){return e?t[1]:t[2]}(t,n):"fshWhite"}(e.last_login,t)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${pw(e.last_login)}</td></tr></tbody></table>" href="${Va}${e.id}">${e.username}</a>`}function kw(e){return _a()-e.last_login<1800}function Sw(e,t){return`<li class="player"><div class="player-row">${Hc.hideBuffSelected?"":`<span class="${hw}"></span>`}${ww(t,e)}</div><div class="guild-minibox-actions">${Hc.hideGuildInfoMessage?"":`<span class="${gw} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}${Hc.hideGuildInfoBuff?"":`<span class="${_w} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}${function(e){return Hc.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${Ka}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return Hc.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${Ja}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function xw(e,t){return e.filter(kw).map(ev(Sw,t)).join("")}const Ew=[(e,t)=>e.length+t.length,(e,t)=>{if(!Hc.enableAllyOnlineList)return t.length},e=>{if(!Hc.enableEnemyOnlineList)return e.length}]
function Cw(e){xv("allyEnemy",e)}function Pw(e,t,n){return 0===n(e,t)}function Tw(e){const n=Gc(e._allies,[]),r=Gc(e._enemies,[]);(function(e,t){return Ew.every(ev(Pw,e,t))})(n,r)||function(e,n){let r=""
Hc.enableAllyOnlineList&&(r+=xw(e,!0)),Hc.enableEnemyOnlineList&&(r+=xw(n,!1))
const i=t("fshContactList")
Av("",i),ly(i,r)}(n,r)}function $w(e){Cw("toggleBuffSelected"),e.classList.toggle(hw),e.classList.toggle(vw)}const Lw=[[hw,$w],[vw,$w],[gw,function(e){Cw("msgPlayer"),window.openQuickMsgDialog(n(e.parentNode.previousElementSibling.lastElementChild))}],[_w,function(e){Cw("buffPlayer"),uw(aw(e.parentNode.previousElementSibling.lastElementChild.href))}],[mw,function(){Cw("selectedBuff"),uw(Mv(hw,t("fshContactList")).map((e=>aw(e.nextElementSibling.href))).join(","))}]]
function Iw(e){const{target:t}=e
"fshResetEnemy"!==t.id?sw(Lw)(e):async function(){Cw("resetList"),Tw(await nw(!0))}()}function Ow(e){const t=Ov({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>'
Hc.hideBuffSelected||(n+=`<ul class="${mw}">Quick Buff Selected</ul>`),n+="</div></div>",ly(t,n),Fv(iv(),t),hm(t,Iw),Tw(e)}function Rw(e){if(e?.length)return n(e[0].nextElementSibling)}function Mw(e){return e?Number(e.replace(/,/g,"")):0}function Fw(e){return Mw(Rw(Rv(e)))}function Aw(e,t){const n=e?.split(" ").map((e=>e.slice(0,-1)))
var r
if(n)return`<dd>${r=new Date(ha()+1e3*(60*(60*t+Number(n[0]))+Number(n[1]))),`${eb(r.getHours())}:${eb(r.getMinutes())} ${r.toLocaleString("en",{weekday:"short"})} ${eb(r.getDate())}/${Pa[r.getMonth()]}/${r.getFullYear()}`}</dd>`}function jw(e,t,n){e.target===Yf(t)&&n.close()}var Nw=gp("<div><!></div>")
function Dw(e,t){vd(t,!0)
let n,r,i,o=Rh(t,"visible",3,!0),s=Ld(void 0)
Jd((()=>{o()?document.body.classList.contains("noscroll")||(n=!0,r=window.scrollY,i=document.body.style.top,document.body.classList.add("noscroll"),document.body.style.top=`-${r}px`):n&&(document.body.classList.remove("noscroll"),document.body.style.top=i||"",window.scrollTo(0,r))}))
var a=Nw()
let l
a.__click=[jw,s,t],Dp(Ud(a),(()=>t.children??mu)),yh(a,(e=>Od(s,e)),(()=>Yf(s))),Zd((e=>l=Vp(a,0,"svelte-5b5wnh",null,l,e)),[()=>({visible:o()})]),bp(e,a),gd()}let Bw
fp(["click"])
var qw=gp('<div role="dialog" aria-modal="true"><!></div>')
function Hw(e,t){vd(t,!0)
let n,r=Rh(t,"modal",15),i=Rh(t,"visible",3,!0)
Jd((()=>{i()?(Hc.dialogIsClosed&&(n=Hc.dialogIsClosed),Hc.dialogIsClosed=()=>!i()):n&&(Hc.dialogIsClosed=n)})),Dw(e,{get close(){return t.close},get visible(){return i()},children:(e,n)=>{!function(e,t){vd(t,!0)
let n=Rh(t,"modal",15),r=Rh(t,"visible",3,!0),i=Sd(r),o=Ld(void 0),s=Ld(void 0)
const a=e=>e.tabIndex>=0&&e.offsetWidth>0&&e.offsetHeight>0&&!e.disabled
Jd((()=>{r()?(Od(o,document?.activeElement,!0),n()&&(Od(s,Bw,!0),Bw=n())):(Yf(o)?.focus(),n()&&(Bw=Yf(s)))}))
var l=qw()
let c
dp("keydown",Ad,(function(e){if(r())if("Escape"!==e.key||Bw!==n()){if("Tab"===e.key){const t=gm("*",n()).filter(a)
let r=t.indexOf(document.activeElement);-1===r&&e.shiftKey&&(r=0),r+=t.length+(e.shiftKey?-1:1),r%=t.length,t[r].focus(),e.preventDefault()}}else t.close()})),Dp(Ud(l),(()=>t.children??mu)),yh(l,(e=>n(e)),(()=>n())),Zd((e=>c=Vp(l,0,"ui-dialog svelte-61qae0",null,c,e)),[()=>({modalVisible:Yf(i)})]),bp(e,l),gd()}(e,{get close(){return t.close},get visible(){return i()},get modal(){return r()},set modal(e){r(e)},children:(e,n)=>{var r=mp()
Dp(Gd(r),(()=>t.children??mu)),bp(e,r)},$$slots:{default:!0}})},$$slots:{default:!0}}),gd()}function Uw(e,t,n){t(!1),n.resolve(!0)}var Gw=gp('<div class="svelte-1gd1a38"> </div> <div class="svelte-1gd1a38"><button type="button" class="svelte-1gd1a38">Yes</button> <button type="button" class="svelte-1gd1a38">No</button></div>',1)
function Ww(e,t){vd(t,!0)
let n=Rh(t,"msg",3,"Are you sure?"),r=Rh(t,"visible",15,!0)
function i(){r(!1),t.resolve(!1)}Hw(e,{close:i,get visible(){return r()},children:(e,o)=>{var s=Gw(),a=Gd(s),l=Ud(a),c=Ud(Wd(a,2))
c.__click=[Uw,r,t],Wd(c,2).__click=i,Zd((()=>wp(l,n()))),bp(e,s)},$$slots:{default:!0}}),gd()}fp(["click"])
const zw=md({visible:!0})
let Vw=null
function Qw(e){zw.resolve=e,Vw?zw.visible=!0:Vw=kp(Ww,{props:zw,target:document.body})}function Jw(e){return zw.msg=e,new Promise(Qw)}async function Kw(e){if("daily-quest-reroll-button"!==e.target.id)return
e.stopPropagation()
await Jw("Are you sure you want to re-roll the Daily Quest?")&&async function(){const e=t("minibox-daily-quest")
if(!e)return
xv("dailyQuest","reroll")
const n=await q_({cmd:"dailyquests",subcmd:"reroll"})
if(!n)return
const r=t("minibox-daily-quest",n)
r&&e.replaceWith(r)}()}function Xw(e){return Iv("button",{...e,type:"button"})}function Yw(e,t){ly(e,t)}function Zw(){xv("fsbox","open log"),Gv()}function ek(e,t){const n=sy({className:`fsh-fsbox ${e}`,textContent:"[ "})
return Fv(n,t),Yw(n," ]"),n}function tk(e){const t=Ec(lc,e)
t&&(function(e,t){const r=hg({href:`${Wa}${n(t)}`,textContent:"Ignore"})
hm(r,(()=>xv("fsbox","ignore link"))),Fv(e,ek("fs-box-ignore",r))}(e,t),async function(e){const t=await Jg("fsh_fsboxcontent")??"",n=Xh(Ec(".message",e).innerHTML)
if(t.includes(n))return
Kg("fsh_fsboxcontent",`<br>${n}${t}`.slice(0,9999))}(e))}function nk(e){e.classList.add("fshRelative"),function(e){const t=Xw({textContent:"Log"})
hm(t,Zw),Fv(e,ek("fs-box-log",t))}(e),tk(e)}function rk(e,t){const r=t.nextElementSibling.children[0]
8===r.children.length&&(!function(e,t){Fv(e,Ov({className:"tooltip-bottom",dataset:{tooltip:"Server"},textContent:`Server: ${n(t.children[7])}`}))}(e,r),function(e,t){Av(`Online: ${t.children[3].innerHTML}`,e.children[0])}(e,r),t.parentNode.classList.add("fshInvisible"))}function ik(e,t){t instanceof Node&&(t.textContent=String(e))}let ok=null
function sk(){return ok||(ok=t("quickMessageDialog")),ok}let ak=0
function lk(e){(function(){if(!ak){const e=Rv("validateTips",sk())
1===e.length&&([ak]=e)}return ak})()&&ik(Gc(e,""),ak)}let ck=null
function uk(){return ck||(ck=t("quickMsgDialog_msg"),ck.maxLength=512),ck}let dk=null,fk=0,pk=0
function hk(e){"Enter"!==e.key||e.shiftKey||(xv("messaging","sendOnEnter"),e.preventDefault(),function(){if(!pk){const e=$(sk()).dialog("option","buttons")
pk=e["Send Message"]}return pk}()())}function vk(){wa(dk)&&(dk=vc("enterForSendMessage")),dk&&!fk&&(Dc(uk(),"keypress",hk),fk=!0)}let gk=null
let _k=0,mk=0,bk=0
function yk(e,t,n){const r=mk.insertRow(e)
let i=r.insertCell(-1)
ly(i,t),i=r.insertCell(-1),ly(i,n)}function wk(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function kk(e,t){yk(e,wk("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const Sk=[["del-button",function(e){xv("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
mk.deleteRow(t),_k.splice(t-2,1),ey("quickMsg",_k)}],["add-button",function(e){xv("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){kk(e.parentNode.parentNode.rowIndex,n),t.value="",_k.push(n),ey("quickMsg",_k)}}],["add-template",function(e){xv("messaging","insertTemplate"),uk().value+=`${n(e).replace(/\{playername\}/g,gk)}`}]]
function xk(e){kk(-1,e)}function Ek(){vc("enableMessageTemplates")&&!bk&&(hm((mk||(mk=sk().lastElementChild),mk),sw(Sk)),(_k||(_k=fy("quickMsg")),_k).forEach(xk),yk(-1,wk("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),bk=!0)}function Ck(e,n,r){const i=sk()
rw("ui-dialog-content",i)&&(!function(e){gk=e,ik(e,t("quickMsgDialog_targetUsername"))}(e),function(e){const t=uk()
t.value=Gc(e,""),t.disabled=!1}(n),lk(r),Ek(),vk(),$(i).dialog("open"))}function Pk(e){return F_({cmd:"composing",...e})}function Tk(){return Pk({subcmd:"view"})}function $k(){return N_(Tk)}function Lk(e,n,r){const i=Mb({className:"notification"}),o=hg({href:r,innerHTML:`<span class="notification-icon"></span><p class="notification-content">${n}</p>`})
hm(o,(()=>{xv("notification",e)})),Fv(i,o),Fv(t("notifications"),i)}function Ik(){Lk("composing","Composing to do",hl)}function Ok(e){return e.time_remaining}function Rk(){Ik(),yc(ql,!0)}const Mk=52
function Fk(e){const t=e.h.p.find((({k:e})=>e===Mk))?.v
e.r.potions.length!==t?Rk():function(e){const t=Math.min.apply(null,e.map(Ok))
t>0?(yc(ql,!1),yc(Hl,ha()+1e3*t)):Rk()}(e.r.potions)}function Ak(){vc(ql)?Ik():async function(){const e=vc(Hl)
if(e&&ha()<e)return
const t=await $k()
t?.s&&Fk(t)}()}function jk(e){return F_({cmd:"guild",...e})}function Nk(e){return jk({subcmd:"groups",...e})}function Dk(e){return Nk({subcmd2:"joinall",group:e})}function Bk(e){return N_(Dk,0,e)}function qk(){return Nk({subcmd2:"view"})}function Hk(){return N_(qk)}function Uk(e,t){Yf(t)||(e.preventDefault(),xv("notification","Join All"),Od(t,1))}var Gk=gp('<p class="notification-content" style="line-height: 32px;">Joined.</p>'),Wk=gp('<span class="notification-content fshSpinner fix-classic-theme svelte-44dw92"></span>'),zk=gp('<p class="notification-content"><button type="button" class="svelte-44dw92"> </button></p>'),Vk=gp('<a><span id="notification-icon-guild-group" class="notification-icon"></span> <!></a>')
function Qk(e,t){vd(t,!0)
let n=Ld(0),r=Ld(md(al)),i=Ld("")
const s=e=>!Hc.enableMaxGroupSizeToJoin||e.members.length<Hc.maxGroupSizeToJoin,a=e=>e.name===o(),l=e=>!e.members.find(a),c=e=>e.id
async function u(){const e=await Hk()
e?.s&&await async function(e){const t=e.r.filter(s).filter(l).map(c)
t.length&&await Bk(t)}(e)}Hc.enableMaxGroupSizeToJoin&&(Od(r,ll,!0),Od(i,` less than size ${Hc.maxGroupSizeToJoin}`))
var d=Vk(),f=Wd(Ud(d),2),p=e=>{var t=mp()
$p(Gd(t),u,(e=>{bp(e,Wk())}),(e=>{bp(e,Gk())})),bp(e,t)},h=e=>{var t=zk(),r=Ud(t)
r.__click=[Uk,n]
var o=Ud(r)
Zd((()=>wp(o,`Join all attack groups${Yf(i)??""}.`))),bp(e,t)}
Lp(f,(e=>{Yf(n)?e(p):e(h,!1)})),Zd((()=>Zp(d,"href",Yf(r)))),bp(e,d),gd()}function Jk(e){return F_({cmd:"temple",...e})}function Kk(e){return Jk({subcmd:"pray",type:e})}function Xk(){return Jk({subcmd:"view"})}function Yk(e){$(e).qtip("hide")}fp(["click"])
let Zk=Element
const eS='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',tS=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${Da}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
function nS(e){yc("needToPray",e),yc("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}async function rS(e){const t=e.target.getAttribute("praytype")
t&&(xv("notification","prayToGods"),Yk(e.target),await function(e){return N_(Kk,0,e)}(t),Zk.outerHTML=eS,nS(!1))}function iS(){ly(t("notifications"),tS),Zk=t("helperPrayToGods"),lv(Zk,"click",rS)}async function oS(){if(!Hc.enableTempleAlert)return
const e="temple"===Hc.cmd?function(e){if(!e)return{s:!1}
const t=Ec("#pCC",e)
return t?{s:!0,r:{pray_index:"You are currently praying at the temple."===Yh(t)?0:-1}}:{s:!1}}(document):await N_(Xk)
if(!e.s)return
const t=-1===e.r.pray_index
t&&iS(),nS(t)}function sS(){var e
!(e=vc("lastTempleCheck"))||ha()>e?oS():vc("needToPray")&&iS()}function aS(){return e={subcmd:"goldupgrades"},F_({cmd:"points",...e})
var e}function lS(e,t,n){if(e?.rows)return Qh(e.rows).filter(((e,r)=>e.children.length===t&&r>n))}function cS(e,t){const n=Number(Yh(e.cells[2]).split(" / ")[0]),r=Yh(e.cells[3])
return{id:t,...!["-","n/a"].includes(r)&&{reset_time:Date.parse(`${r} GMT`)/1e3},current:Um(n)?0:n}}function uS(){return-1!==window.location.search.indexOf("cmd=points&type=1")}function dS(){uS()||Lk("stamina","Upgrade stamina with gold",`${el}&type=1`)}async function fS(){if(uS()&&function(){const e=vm('#pCC input[name="quantity"]')
e?.length<2||(e[0].value="100",e[1].value="10")}(),!Hc.enableUpgradeAlert)return
const e=uS()?function(e){if(!e)return{s:!1}
const t=Ec("#pCC > table",e)
return t?{s:!0,r:lS(t,5,0).map(cS)}:{s:!1}}(document):await N_(aS)
ka(e?.r?.[1]?.current)||function(e){10!==e.current?(dS(),yc("needToDoUpgrade",!0)):(yc("needToDoUpgrade",!1),yc("lastUpgradeCheck",1e3*e.reset_time))}(e.r[1])}function pS(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?Fb(t,e.firstChild):Fv(e,t)}(e,t)}function hS(e,t){t.stopPropagation(),xv("chrome","statbar",e)}function vS(e,n){const r=t(`statbar-${n}`)
if(!r)return
const i=hg({href:e}),o=r.parentNode
Fv(i,r),pS(o,i),hm(i,ev(hS,n),!0)}function gS(e,t){Mv("player-name",e).forEach(t)}const _S=/Last Activity:<\/td><td>(?<mins>\d+) mins/
function mS(e,t){const n=e.dataset.tipped,r=l(_S,n)
r<2?e.classList.add(t.l1):r<5?e.classList.add(t.l2):e.classList.add(t.l3)}const bS=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function yS(e,t){bS.forEach((n=>{Hc[n[0]]&&Qh(vm(n[t],e)).forEach(wm)}))}function wS(e){e?.classList&&e.classList.add("fshInvisible")}function kS(e,n){Hc.hideBuffSelected&&(Qh(Rv(`${n}-buff-check-on`,e)).forEach(wS),wS(t(`${n}-quick-buff`)))}function SS(e){mS(e,{l1:"fshGreen",l2:"fshWhite",l3:"fshGrey"})}function xS(e,t,n){gm(`#pCR h${e}`).filter(pm(t)).forEach((e=>{const r=hg({href:`${tl}${n}`,textContent:t})
hm(r,(()=>{xv("widgets",`guild ${n}`)})),e.replaceChild(r,e.firstChild)}))}function ES(e){mS(e,{l1:"fshDodgerBlue",l2:"fshLightSkyBlue",l3:"fshPowderBlue"})}function CS(e){const n=t(e)
n&&(n.classList.add("pCR"),Fv(iv(),n))}function PS(e){const n=t(e)
n&&pS(sv(),n)}function TS(){return F_({cmd:"superelite"})}function $S(e){return Tv(e?.se??{}).flatMap((([t,n])=>Uc(n)?n.map((([n,r])=>[n,t,r,e?.loc[r]])):[[n,t.replaceAll(" ","_"),0,""]]))}const LS=e=>e.join("|"),IS=(e,t)=>e.r.map((e=>[t-e.time,e.creature.name.replace(" (Super Elite)","").replaceAll(" ","_"),e.realm.realm.id,e.realm.realm.name])),OS=(e,t)=>$m(e.map(LS).concat(t.map(LS))).map((e=>e.split("|"))).map((([e,t,n,r])=>[Number(e),t,Number(n),r])).sort((([e],[t])=>t-e)),RS=e=>Dm($m(e.map((([,e])=>e))).map((t=>[t,e.filter((([,e])=>e===t)).map((([e,,t])=>[e,t])).slice(0,10)]))),MS=e=>Dm($m(e.map((([,,e])=>e))).map((t=>[t,e.find((([,,e])=>e===t))[3]]))),FS=e=>({se:RS(e),loc:MS(e)})
const AS=Sh()
let jS=!1,NS={},DS=0,BS=!1
const qS=e=>Math.max(0,600-(pa()-(e?.lastUpdate??0)),600-(pa()-DS))
async function HS(){DS=pa()
const e=await N_(TS)
e?.s&&(NS=function(e,t){const n=Number(t.t.split(" ")[1]),r=IS(t,n),i=$S(e),o=OS(r,i)
return{lastUpdate:n,...FS(o)}}(NS,e),Kg("fsh_seLog",NS),AS.set(NS))}function US(e,t){BS=t,e(BS),BS&&!jS&&async function(){for(jS=!0,NS=await Jg("fsh_seLog"),AS.set(NS);BS;)jS=!0,await ng(1e3*qS(NS)),BS&&await HS(),jS=!1}()}const GS=function(){const{subscribe:e,set:t}=Sh(0)
return{subscribe:e,set:ev(US,t)}}()
const WS=[function(){vc("moveGuildList")&&PS("minibox-guild")},function(){vc("moveOnlineAlliesList")&&PS("minibox-allies")},function(){vc("moveXmasBox")&&CS("minibox-xmas")},function(){vc("moveDailyQuest")&&CS("minibox-daily-quest")},function(){vc("moveFSBox")&&CS("minibox-fsbox")},async function(){if(!Hc.enableAllyOnlineList&&!Hc.enableEnemyOnlineList||Rb())return
!function(e){e&&ru(3,Ow,[e])}(await nw(!1))},function(){!Hc.enableWantedList&&!Hc.enableActiveBountyList||Rb()||(Hc.enableActiveBountyList&&(ty=oy(),Fv(iv(),ty)),Hc.enableWantedList&&(ny=oy(),Fv(iv(),ny)),ry()&&hm(ry(),Yy),iy()&&hm(iy(),Yy),Ky())},function(){if(!Hc.enableGuildInfoWidgets)return
const e=t("minibox-guild-members-list")
e&&(yS(e,1),kS(e,"guild"),gS(e,SS),xS(4,"Chat","chat"),xS(3,"Guild","manage"))},function(){if(!Hc.enableOnlineAlliesWidgets)return
const e=t("minibox-allies-list")
e&&(yS(e,2),kS(e,"ally"),gS(e,ES))},function(){Hc.enableTempleAlert&&"temple"!==Hc.cmd&&!Rb()&&sS()},function(){Hc.enableUpgradeAlert&&Bm()&&!uS()&&function(){if(vc("needToDoUpgrade"))return void dS()
const e=vc("lastUpgradeCheck");(!e||ha()>e)&&fS()}()},function(){Hc.enableComposingAlert&&"composing"!==Hc.cmd&&Bm()&&Ak()},function(){iv()&&!Rb()&&Xb()},function(){Rb()||(window.openQuickMsgDialog=Ck)},function(){vc("statBarLinks")&&(vS(za,"character"),vS(`${el+Ba}reserve`,"stamina"),vS(fl,"equipment"),vS(Qa,"inventory"),vS(el,"fsp"),vS(`${Da}bank`,"gold"))},function(){if(!vc("staminaCalculator"))return
const e=Rv("stat-stamina-nextGain")
if(0===e.length)return
const n=t("statbar-stamina-tooltip-stamina"),r=(e=>Rw(Rv("stat-name",e)).split(" / "))(n)
2===r.length&&ly(n,function(e,t){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${Aw(Rw(e),Math.floor((Mw(t[1])-Mw(t[0]))/Fw("stat-stamina-gainPerHour")))}`}(e,r))},function(){if(!vc("levelUpCalculator"))return
const e=Rv("stat-xp-nextGain")
0!==e.length&&ly(t("statbar-level-tooltip-general"),`<dt class="stat-xp-nextLevel">Next Level At</dt>${Aw(Rw(e),Math.ceil(Fw("stat-xp-remaining")/Fw("stat-xp-gainPerHour")))}`)},function(){if(!vc("fsboxlog"))return
const e=t("minibox-fsbox")
e&&nk(e)},function(){vc("resizeQuickBuff")&&(window.openWindow=function(e,t,n,r,i){xv("chrome","interceptQuickBuff"),cw(e,t,n,r,i)})},function(){if(!vc("joinAllLink"))return
const e=t("notification-guild-group")
e&&function(e){Av("",e),kp(Qk,{target:e})}(e)},function(){if(!vc("addServerNode"))return
const e=t("topbanner-stats"),n=gm("#pCR h3").find(pm("Game Stats"));(function(e,t){return!(e&&rw("topbanner-stats-hidden",e))&&t})(e,n)&&rk(e,n)},function(){if(!vc("addScoutTowerLink"))return
const e=t("minibox-spoilsofwar")
if(!e)return
const n=e.children[1]
if(!n)return
const r=n.children[0]
ly(r,"&nbsp;"),Fv(r,function(){const e=hg({dataset:{tooltip:"View Scout Report"},href:rl,innerHTML:`<img id="fshScoutTower" src="${xa}structures/27.png">`})
return hm(e,(()=>xv("chrome","scout tower link"))),e}())},async function(){if(Bm()&&vc(Gl)){Ob(await ob())}},function(){Bm()&&Hc.enableSeTracker&&GS.set(Hc.enableSeTracker)},function(){vc("dailyQuestReRoll")&&sv()&&hm(sv(),Kw,!0)}]
const zS=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function VS(){Sm()||(zS.forEach(bm),Hc.allyEnemyOnlineRefreshTime=1e3*vc("allyEnemyOnlineRefreshTime"),Hc.useNewGuildLog&&(Dc(document.body,"click",km),Dc(document.body,"auxclick",km)),xm(WS))}function QS(e){const t=xc(e)
t?.["new-ui"]&&(vc("gameHelpLink")&&ru(3,mm),Hc.huntingMode=vc("huntingMode"),ru(3,dm),VS(),vc("hideHelperMenu")||ru(3,M_))}function JS(){const e=function(){const e=t("html")
if(e?.dataset)return e.dataset.hcs}()
e&&QS(e)}function KS(){Bm()&&t("worldPage")&&window.GameData&&Bv(import("./newMap-DqHI-Hb-.js"))}const XS={"-":{"-":()=>{Bv(import("./arena-Bh8pIs3w.js").then((function(e){return e.b})))}},dojoin:{"-":()=>{Bv(import("./arenaDoJoin-DvVL438B.js"))}},join:{"-":()=>{Bv(import("./arenaJoin-B0or3AFv.js"))}},completed:{"-":()=>{Bv(import("./completedArenas-C91dzYLm.js"))}},pickmove:{"-":()=>{Bv(import("./storeMoves-BLynQAIo.js"))}},setup:{"-":()=>{Bv(import("./setupMoves-Hvqr0ju-.js"))}}}
var YS={"-":{"-":()=>{Bv(import("./injectAuctionHouse-CIAv0awa.js"))}},quickcreate:{"-":()=>{Bv(import("./quickCreate-BhDdMsnB.js"))}}}
var ZS={"-":{"-":()=>{Bv(import("./composing-9r0ze18W.js"))}},breakdown:{"-":()=>{Bv(import("./breakdown-BPINrZwE.js"))}},create:{"-":()=>{Bv(import("./composingCreate-CkrcFVQN.js"))}}}
function ex(){Bv(import("./bioWidgets-DCRAs_Ss.js"))}function tx(){Bv(import("./injectGuild-B7hVFu-L.js"))}const nx=()=>{Bv(import("./guildAdvisor-B2ayA3Zu.js"))}
const rx=()=>{Bv(import("./groups-DhqmT4i4.js"))}
const ix=()=>{Bv(import("./addRemoveTags-DHM77fy3.js"))}
const ox=()=>{Bv(import("./guildChat-D6JlIkjC.js"))}
var sx={inventory:{report:()=>{Bv(import("./guildReport-By5Czsnv.js"))},addtags:ix,removetags:ix,storeitems:()=>{Bv(import("./storeitems-Iy7kVUV_.js"))}},chat:{"-":ox},dochat:{"-":ox},log:{"-":()=>{Bv(import("./guildLog-CyPS58w9.js"))}},groups:{viewstats:()=>{Bv(import("./injectGroupStats-BnChzSfa.js"))},joinallgroupsundersize:rx,joinall:rx,"-":rx},manage:{"-":tx},advisor:{"-":nx,weekly:nx},history:{"-":ex},view:{"-":tx},scouttower:{"-":()=>{Bv(import("./injectScouttower-B0KoS7c4.js"))}},mailbox:{"-":()=>{Bv(import("./guildMailbox-Balk1zeT.js"))}},ranks:{"-":()=>{Bv(import("./rank-BTXd8GFW.js"))}},conflicts:{rpupgrades:()=>{Bv(import("./injectRPUpgrades-DPszMfTH.js"))}},bank:{"-":()=>{Bv(import("./injectGuildBank-C1Bvbp4g.js"))}},hall:{"-":()=>{Bv(import("./hall-BiZsJTv5.js"))},post:ex},"-":{"-":tx},titanrewards:{"-":()=>{Bv(import("./titanrewards-CsTQZjHG.js"))}}}
function ax(){Bv(import("./viewRecipe-d9akts5d.js"))}var lx={"-":{"-":function(){Bv(import("./inventing-TdCNNQaV.js"))}},doinvent:{"-":ax},viewrecipe:{"-":ax}}
function cx(){Bv(import("./ufsgAllowBack-5XMUx7TJ.js"))}var ux={"-":{"-":cx},view:{"-":()=>{Bv(import("./itemsView-CdQmS-Ft.js"))}}}
function dx(){Bv(import("./profile-BKTjUjcF.js").then((function(e){return e.p})))}function fx(){Bv(import("./news-UuVHzyko.js"))}function px(){Bv(import("./viewArchive-Ch1lVlC0.js"))}var hx={fsbox:{"-":()=>{Bv(import("./newsFsbox-72X9m__q.js"))}},"-":{"-":fx},shoutbox:{"-":()=>{Bv(import("./newsShoutbox-Cd93XPYF.js"))}},viewupdatearchive:{"-":px},viewarchive:{"-":px}}
var vx={news:{"-":fx},viewupdatearchive:{"-":px},viewarchive:{"-":px},"-":{"-":()=>{Bv(import("./unknownPage-BkqLG_YO.js"))}}},gx=gp("<svelte-virtual-list-row><!></svelte-virtual-list-row>",2),_x=gp("<svelte-virtual-list-viewport><svelte-virtual-list-contents></svelte-virtual-list-contents></svelte-virtual-list-viewport>",2)
function mx(e,t){vd(t,!0)
let n,r,i=Rh(t,"height",3,"100%"),o=Rh(t,"itemHeight",3,void 0),s=Rh(t,"start",15,0),a=Rh(t,"end",15,0),l=[],c=Ld(void 0),u=Ld(void 0),d=Ld(0),f=Sd((()=>t.items.slice(s(),a()).map(((e,t)=>({index:t+s(),data:e}))))),p=Ld(void 0),h=Ld(0),v=Ld(0),g=0
async function _(e,t){const{scrollTop:n}=Yf(c)
t={left:0,top:n+(e-s())*(o()||r),behavior:"smooth",...t},Yf(c).scrollTo(t)}Mh((()=>{n=Yf(u).getElementsByTagName("svelte-virtual-list-row"),Od(p,!0)})),Jd((()=>{Yf(p)&&async function(e,t,i){if(g)return
g=!0,e.length<s()&&await _(e.length-1,{behavior:"auto"})
const{scrollTop:o}=Yf(c)
await Xf()
let u=Yf(h)-o,d=s()
for(;u<t&&d<e.length;){let e=n[d-s()]
e||(a(d+1),await Xf(),e=n[d-s()]),e&&(u+=l[d]=i||e.offsetHeight),d+=1}a(d)
const f=e.length-a()
r=(Yf(h)+u)/a(),Od(v,f*r),l.length=e.length,g=!1}(t.items,Yf(d),o())}))
var m=_x()
Vp(m,0,"svelte-13thbeo")
var b=Ud(m)
Vp(b,0,"svelte-13thbeo"),Rp(b,21,(()=>Yf(f)),(e=>e.index),((e,n)=>{var r=gx()
Vp(r,0,"svelte-13thbeo")
var i=Ud(r),o=e=>{var r=mp()
Dp(Gd(r),(()=>t.children),(()=>({item:Yf(n).data}))),bp(e,r)},s=e=>{bp(e,_p("Missing template"))}
Lp(i,(e=>{t.children?e(o):e(s,!1)})),bp(e,r)})),yh(b,(e=>Od(u,e)),(()=>Yf(u))),yh(m,(e=>Od(c,e)),(()=>Yf(c))),Zd((()=>{Jp(m,`height: ${i()??""};`),Jp(b,`padding-top: ${Yf(h)??""}px; padding-bottom: ${Yf(v)??""}px;`)})),dp("scroll",m,(async function(){const{scrollTop:e}=Yf(c)
for(let e=0;e<n.length;e+=1)l[s()+e]=o()||n[e].offsetHeight
let i=0,u=0
for(;i<t.items.length;){const t=l[i]||r
if(u+t>e){s(i),Od(h,u,!0)
break}u+=t,i+=1}for(;i<t.items.length&&(u+=l[i]||r,i+=1,!(u>e+Yf(d))););a(i)
const f=t.items.length-a()
for(r=u/a();i<t.items.length;)l[i++]=r
Od(v,f*r)})),function(e,t,n){var r=mh.observe(e,(()=>n(e[t])))
Xd((()=>(Zf((()=>n(e[t]))),r)))}(m,"offsetHeight",(e=>Od(d,e))),bp(e,m),gd()}const bx={}
let yx=-1
function wx(e,t){ru(3,t.func,[e])}function kx(e,t){if(bx[e])return bx[e].forEach(ev(wx,t)),!0}function Sx(e,t){bx[e]||(bx[e]=[]),yx+=1
const n=yx.toString()
return bx[e].push({token:n,func:t}),n}function xx(e,t){return bx[e]?bx[e][0].token:Sx(e,t)}async function Ex(e=-1,t=1,n=[]){const r=await function(e,t,n){return jk({subcmd:"log",log_id:e,latest:t,limit:n})}(e,t,1e3)
if(!r?.s)return void kx("guildLog-progress","Server Error.")
kx("guildLog-progress")
const i=n.concat(r.r.logs)
return 1e3!==r.r.logs.length?i:Ex(r.r.logs[0].id,0,i)}var Cx=gp('<button class="modal-close svelte-jhpi06" type="button">×</button>')
fp(["click"])
var Px=gp('<div class="modal-title svelte-mgjzgm"><!> <!></div> <div class="modal-content svelte-mgjzgm"><!></div>',1)
function Tx(e,t){vd(t,!0)
let n=Rh(t,"visible",3,!0),r=Ld(void 0),i=Ld(void 0)
Mh((()=>{wv(Yf(i),Yf(r))})),Hw(e,{get close(){return t.close},get visible(){return n()},get modal(){return Yf(r)},set modal(e){Od(r,e,!0)},children:(e,n)=>{var r=Px(),o=Gd(r),s=Ud(o)
Dp(s,(()=>t.title??mu)),function(e,t){var n=Cx()
n.__click=function(...e){t.close?.apply(this,e)},bp(e,n)}(Wd(s,2),{get close(){return t.close}}),yh(o,(e=>Od(i,e)),(()=>Yf(i))),Dp(Ud(Wd(o,2)),(()=>t.children??mu)),bp(e,r)},$$slots:{default:!0}}),gd()}var $x=gp('<button type="button" class="svelte-mmp9jk"><!></button>')
function Lx(e,t){let n=Rh(t,"disabled",3,0)
var r=$x()
r.__click=function(...e){t.onclick?.apply(this,e)},Dp(Ud(r),(()=>t.children??mu)),Zd((()=>r.disabled=n())),bp(e,r)}fp(["click"])
var Ix=gp('<span class="svelte-1amp3b0">[<!>]</span>')
function Ox(e,t){var n=Ix()
Lx(Wd(Ud(n)),{get onclick(){return t.onclick},children:(e,n)=>{var r=mp()
Dp(Gd(r),(()=>t.children??mu)),bp(e,r)},$$slots:{default:!0}}),bp(e,n)}function Rx(e,t,n){t(),n.cbChange()}var Mx=gp('<div class="filter-header svelte-1tfrwgn"><div class="filters svelte-1tfrwgn"><div class="front svelte-1tfrwgn"><span>Filters:</span></div> <div><label>Potions: <input type="checkbox"></label></div> <div><label>Store/Recalls: <input type="checkbox"></label></div> <div><label>Relics: <input type="checkbox"></label></div> <div><label>Mercenaries: <input type="checkbox"></label></div> <div><label>Group Combats: <input type="checkbox"></label></div> <div><!></div> <div><label>Donations: <input type="checkbox"></label></div> <div><label>Rankings: <input type="checkbox"></label></div> <div><label>GvGs: <input type="checkbox"></label></div> <div><label>Tag/UnTags: <input type="checkbox"></label></div> <div><label>Titans: <input type="checkbox"></label></div> <div><label>Other: <input type="checkbox"></label></div></div> <div class="button-row svelte-1tfrwgn"><div></div> <div class="buttons svelte-1tfrwgn"><div><!></div> <div><!></div> <div><!></div></div> <div class="search-box svelte-1tfrwgn"><label>Search: <span class="search-wrapper svelte-1tfrwgn"><input type="text" class="svelte-1tfrwgn"> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></span></label></div></div></div>')
function Fx(e){return ib(new Date(1e3*e))}function Ax(e){return F_({cmd:"combat",subcmd:"view",combat_id:e})}fp(["change"])
const jx="fsh_pvpCombat"
let Nx=null,Dx=0
const Bx=e=>([t,n])=>"lastCheck"===t||n?.logTime>e
async function qx(){const e=await Jg(jx)
return Dx=e?(e?.lastCheck??0)<ba()?function(e){const t={...Dm(Tv(e).filter(Bx(ya()))),lastCheck:_a()}
return Kg(jx,t),t}(e):e:{lastCheck:_a()},Dx}async function Hx(e,t){const n=await(r=t,N_(Ax,0,r))
var r
if(n?.s)return Dx[t]={...n,logTime:e},Kg(jx,Dx),n}async function Ux(e,t){Nx||(Nx=qx())
const n=await Nx
return n[t]?.logTime?n[t]:Hx(e,t)}function Gx(){return e={subcmd2:"view"},jk({subcmd:"recruit",...e})
var e}var Wx=gp('<i class="fas fa-envelope" aria-hidden="true"></i>'),zx=gp('<a class="svelte-6j0lyo"> </a>'),Vx=gp('[ <a class="svelte-6j0lyo"><img class="svelte-6j0lyo"> </a> ]',1),Qx=gp("<!> <!>",1),Jx=gp('<span class="action-buttons svelte-6j0lyo">[ <!> | <!> ]</span>'),Kx=gp('<div class="rel svelte-6j0lyo"> </div>'),Xx=gp('<div class="rel svelte-6j0lyo"><span class="fshSpinner recruit-spinner svelte-6j0lyo"></span></div>'),Yx=gp('<!> <span class="action-buttons svelte-6j0lyo">[ <!> | <!> | <!> | <!> ]</span>',1),Zx=gp('<span class="action-buttons svelte-6j0lyo">[ <!> ]</span>'),eE=gp('<div><a class="svelte-6j0lyo"> </a>\'s group looted the item \'<span class="fshGreen"> </span>\'</div>'),tE=gp("<!> <!> <!>",1),nE=gp("<div><div><!></div> <div><!></div> <div><!> <!></div></div>")
function rE(e,t){vd(t,!0)
let n=Rh(t,"groupCombatItems",3,null),r=Rh(t,"hideNonPlayerGuildLogMessages",3,null),i=Rh(t,"logEntry",3,null),o=Ld(md(Promise.resolve())),s=Ld("waiting")
function a(e){xv("Guild Log",e)}const l=e=>e
function c(e){const t=e.msg.attachments?.filter((e=>0===e.type))
return t?.length&&!t.filter((({data:{id:e}})=>e===wg())).length}async function u(e,t){a(t),Od(o,Gx(),!0)
const n=await Yf(o)
if(n?.s&&Uc(n?.r)){const r=n.r.find((({player:{id:t}})=>t===e.id))
r?.id?Q_(`${tl}recruit&subcmd2=${t}&id=${r.id}`):Od(s,"gone")}else Od(s,"error")}var d=nE()
let f
var p=Ud(d)
let h
var v=Ud(p),g=e=>{bp(e,Wx())}
Lp(v,(e=>{i().time&&e(g)}))
var _=Wd(p,2)
let m
var b=Ud(_),y=e=>{var t=_p()
Zd((e=>wp(t,e)),[()=>Fx(i().time)]),bp(e,t)}
Lp(b,(e=>{i().time&&e(y)}))
var w=Wd(_,2)
let k
var S=Ud(w)
Rp(S,17,(()=>i().msg.text.split(/<link=a(\d)><\/link>/).filter(l)),Op,((e,t)=>{var n=mp(),r=Gd(n),o=e=>{var n=Qx(),r=Gd(n),o=e=>{var n=zx(),r=Ud(n)
Zd((()=>{Zp(n,"href",`${Va??""}${i().msg.attachments[Yf(t)].data.id??""}`),wp(r,i().msg.attachments[Yf(t)].data.name)})),bp(e,n)}
Lp(r,(e=>{0===i().msg.attachments[Yf(t)].type&&e(o)}))
var s=Wd(r,2),a=e=>{var n=Vx(),r=Wd(Gd(n)),o=Ud(r),s=Wd(o,1,!0)
Zd((()=>{Zp(r,"href",`${sl??""}${i().msg.attachments[Yf(t)].data.id??""}`),Zp(o,"src",`${xa??""}guilds/${i().msg.attachments[Yf(t)].data.id??""}_mini.png`),Zp(o,"alt",i().msg.attachments[Yf(t)].data.name),wp(s,i().msg.attachments[Yf(t)].data.name)})),bp(e,n)}
Lp(s,(e=>{1===i().msg.attachments[Yf(t)].type&&e(a)})),bp(e,n)},s=e=>{var n=_p()
Zd((()=>wp(n,Yf(t)))),bp(e,n)}
Lp(r,(e=>{1!==Yf(t).length||Um(Number(Yf(t)))?e(s,!1):e(o)})),bp(e,n)}))
var x=Wd(S,2),E=e=>{var t=tE(),r=Gd(t)
Rp(r,17,(()=>i().msg.attachments.filter((({type:e})=>0===e))),Op,((e,t)=>{let n=()=>Yf(t).data
var r=Yx(),l=Gd(r),c=e=>{var t=mp()
$p(Gd(t),(()=>Yf(o)),(e=>{bp(e,Xx())}),(e=>{var t=mp(),r=Gd(t),i=e=>{var t=Jx(),r=Wd(Ud(t))
Lx(r,{onclick:()=>u(n(),"acceptjoin"),children:(e,t)=>{bp(e,_p("Accept"))},$$slots:{default:!0}}),Lx(Wd(r,2),{onclick:()=>u(n(),"denyjoin"),children:(e,t)=>{bp(e,_p("Deny"))},$$slots:{default:!0}}),bp(e,t)},o=e=>{var t=Kx(),n=Ud(t)
Zd((()=>wp(n,Yf(s)))),bp(e,t)}
Lp(r,(e=>{"waiting"===Yf(s)?e(i):e(o,!1)})),bp(e,t)})),bp(e,t)}
Lp(l,(e=>{21===i().type&&e(c)}))
var d=Wd(l,2),f=Wd(Ud(d))
Lx(f,{onclick:()=>function(e){a("reply"),window.openQuickMsgDialog(e.name)}(n()),children:(e,t)=>{bp(e,_p("Reply"))},$$slots:{default:!0}})
var p=Wd(f,2)
Lx(p,{onclick:()=>function(e){a("buff"),uw(e.id)}(n()),children:(e,t)=>{bp(e,_p("Buff"))},$$slots:{default:!0}})
var h=Wd(p,2)
Lx(h,{onclick:()=>function(e){a("send"),Q_(`${Ja}${e.name}`)}(n()),children:(e,t)=>{bp(e,_p("Send"))},$$slots:{default:!0}}),Lx(Wd(h,2),{onclick:()=>function(e){a("trade"),Q_(`${Ka}${e.name}`)}(n()),children:(e,t)=>{bp(e,_p("Trade"))},$$slots:{default:!0}}),bp(e,r)}))
var l=Wd(r,2)
Rp(l,17,(()=>i().msg.attachments.filter((({type:e})=>11===e))),Op,((e,t)=>{var n=Zx()
Lx(Wd(Ud(n)),{onclick:()=>function(e){a("combat"),Q_(`${Da}combat&subcmd=view&combat_id=${e}`)}(Yf(t).data),children:(e,t)=>{bp(e,_p("View Combat"))},$$slots:{default:!0}}),bp(e,n)}))
var c=Wd(l,2),d=e=>{var t=mp()
$p(Gd(t),(()=>Ux(i().time,i().msg.attachments[0].data)),null,((e,t)=>{var n=mp(),r=Gd(n),i=e=>{var n=eE(),r=Ud(n),i=Ud(r),o=Ud(Wd(r,2))
Zd((()=>{Zp(r,"href",`${Va??""}${Yf(t).r.combat.attacker.group.players[0].id??""}`),wp(i,Yf(t).r.combat.attacker.group.players[0].name),wp(o,Yf(t)?.r?.combat?.items?.[0]?.n)})),bp(e,n)}
Lp(r,(e=>{Yf(t)?.r?.combat?.items?.[0]?.n&&e(i)})),bp(e,n)})),bp(e,t)}
Lp(c,(e=>{17===i().type&&n()&&i().msg.text.includes("victorious")&&e(d)})),bp(e,t)}
Lp(x,(e=>{i().msg?.attachments?.length&&e(E)})),Zd(((e,t,n,r)=>{f=Vp(d,0,"row-container svelte-6j0lyo",null,f,e),h=Vp(p,0,"svelte-6j0lyo",null,h,t),m=Vp(_,0,"svelte-6j0lyo",null,m,n),k=Vp(w,0,"svelte-6j0lyo",null,k,r)}),[()=>({"not-self":r()&&c(i()),separator:i().index}),()=>({old:i().old,new:i().new}),()=>({old:i().old,new:i().new}),()=>({old:i().old,new:i().new})]),bp(e,d),gd()}const iE=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to","has added tags to","has removed some tags from"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited [,0-9]+ gold into the guild bank/,/deposited [,0-9]+ Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled","has been stripped of their rank by",/has revoked .+'s invite to the guild/,"has been rejected from joining the guild"],[/resulted in .* with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with","has initiated a conflict with your guild","is participating in the conflict against"],["Titan Reward item","from your guild's contribution to the defeat of the titan","7 day cooldown has been activated on your guild for this titan"]]
function oE(e,t){return _c(t)?e.includes(t):t.test(e)}function sE(e,t){return t.some(ev(oE,e))}function aE(e){const t=iE.findIndex(ev(sE,e))
return-1===t?0:t}var lE=gp('<span class="white svelte-1u02a2w">(Guild Log messages not involving self are dimmed!)</span>'),cE=gp('<div class="vs svelte-1u02a2w"><!></div>'),uE=gp(" <br>",1),dE=gp('<div class="content svelte-1u02a2w"><!> <div class="row-container svelte-1u02a2w"><div class="innerColumnHeader svelte-1u02a2w">&nbsp;</div> <div class="innerColumnHeader svelte-1u02a2w">Date</div> <div class="innerColumnHeader svelte-1u02a2w">Message <!></div></div> <!></div>')
function fE(e,t){vd(t,!0)
let n=Rh(t,"visible",15,!0),r=Ld(md(Array(11).fill(!0))),i=Ld(null),o=Ld(null),s=Ld(md([])),a=Ld(md(Promise.resolve())),l=Ld(md([])),c=Ld("")
const u=Sd((()=>Yf(s).filter((({fshType:e})=>Yf(r)[e])).filter((({searchable:e})=>""===Yf(c)||e.includes(Yf(c).toLowerCase()))).map(g))),d=Sd((()=>Yf(u).length?Yf(u):[{index:0,msg:{text:""}}]))
let f=0,p=null,h=null,v=null
const g=(e,t)=>({...e,index:t}),_=({msg:e})=>e.text.replace(/<link=a(\d)><\/link>/g,((t,n)=>e.attachments[n].data.name)),m=e=>({...e,fshType:aE(e.msg.text),new:p&&e.time>h,old:p&&(v-e.time)/60>20&&e.time<=h,searchable:_(e).toLowerCase()}),b=(e,t)=>t.time-e.time
function y(e){xv("Guild Log",e)}function w(){y("cbChange")}function k(){y("selectAll")}function S(){y("selectNone")}function x(){y("oldGuildLog"),Q_(nl)}function E(){y("clearSearch"),Od(c,"")}function C(e){Od(l,Yf(l).concat(e),!0)}function P(e){e?C(e):(f+=1,C(`chunk ${f}`))}async function T(){Od(l,["Loading..."],!0),Od(s,[],!0),v=(new Date).setUTCSeconds(0,0)/1e3,h=vc("lastModalGuildLogCheck")??v,yc("lastModalGuildLogCheck",v),p=vc("enableLogColoring"),Od(i,vc("groupCombatItems"),!0),Od(o,vc("hideNonPlayerGuildLogMessages"),!0),f=0,xx("guildLog-progress",P)
const e=await N_(Ex)
e&&Od(s,e.toSorted(b).map(m),!0)}function $(){Od(a,T(),!0)}Jd((()=>{n()&&$()}))
{const t=e=>{bp(e,_p("Guild Log"))}
Tx(e,{close:function(){y("close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=dE(),s=Ud(n)
!function(e,t){vd(t,!0)
let n=Rh(t,"checks",31,(()=>md(Array(11).fill(!0)))),r=Rh(t,"searchValue",15,"")
function i(){Kg("fsh_LogChecks",ud(n()))}function o(e){n(n().map((()=>e))),i()}!async function(){n(await Jg("fsh_LogChecks")??Array(11).fill(!0))}()
var s=Mx(),a=Ud(s),l=Wd(Ud(a),2),c=Ud(l),u=Wd(Ud(c))
u.__change=[Rx,i,t],u.value=null==(u.__value="1")?"":"1"
var d=Wd(l,2),f=Ud(d),p=Wd(Ud(f))
p.__change=[Rx,i,t],p.value=null==(p.__value="2")?"":"2"
var h=Wd(d,2),v=Ud(h),g=Wd(Ud(v))
g.__change=[Rx,i,t],g.value=null==(g.__value="4")?"":"4"
var _=Wd(h,2),m=Ud(_),b=Wd(Ud(m))
b.__change=[Rx,i,t],b.value=null==(b.__value="5")?"":"5"
var y=Wd(_,2),w=Ud(y),k=Wd(Ud(w))
k.__change=[Rx,i,t],k.value=null==(k.__value="6")?"":"6"
var S=Wd(y,2)
Lx(Ud(S),{get onclick(){return t.oldGuildLog},children:(e,t)=>{bp(e,_p("Old Guild Log"))},$$slots:{default:!0}})
var x=Wd(S,2),E=Ud(x),C=Wd(Ud(E))
C.__change=[Rx,i,t],C.value=null==(C.__value="7")?"":"7"
var P=Wd(x,2),T=Ud(P),$=Wd(Ud(T))
$.__change=[Rx,i,t],$.value=null==($.__value="8")?"":"8"
var L=Wd(P,2),I=Ud(L),O=Wd(Ud(I))
O.__change=[Rx,i,t],O.value=null==(O.__value="9")?"":"9"
var R=Wd(L,2),M=Ud(R),F=Wd(Ud(M))
F.__change=[Rx,i,t],F.value=null==(F.__value="3")?"":"3"
var A=Wd(R,2),j=Ud(A),N=Wd(Ud(j))
N.__change=[Rx,i,t],N.value=null==(N.__value="10")?"":"10"
var D=Ud(Wd(A,2)),B=Wd(Ud(D))
B.__change=[Rx,i,t],B.value=null==(B.__value="0")?"":"0"
var q=Wd(a,2),H=Wd(Ud(q),2),U=Ud(H)
Ox(Ud(U),{onclick:function(){o(!0),t.selectAll()},children:(e,t)=>{bp(e,_p("Select All"))}})
var G=Wd(U,2)
Ox(Ud(G),{onclick:function(){o(!1),t.selectNone()},children:(e,t)=>{bp(e,_p("Select None"))}}),Ox(Ud(Wd(G,2)),{get onclick(){return t.refresh},children:(e,t)=>{bp(e,_p("Refresh"))}})
var W=Ud(Wd(H,2)),z=Wd(Ud(W)),V=Ud(z),Q=Wd(V,2)
const J=Sd((()=>!r()))
Ip(Q,(()=>({"--button-deco":"none"}))),Lx(Q.lastChild,{get disabled(){return Yf(J)},get onclick(){return t.clearSearch},children:(e,t)=>{bp(e,_p("×"))},$$slots:{default:!0}}),dh(u,(()=>n()[1]),(e=>n(n()[1]=e,!0))),dh(p,(()=>n()[2]),(e=>n(n()[2]=e,!0))),dh(g,(()=>n()[4]),(e=>n(n()[4]=e,!0))),dh(b,(()=>n()[5]),(e=>n(n()[5]=e,!0))),dh(k,(()=>n()[6]),(e=>n(n()[6]=e,!0))),dh(C,(()=>n()[7]),(e=>n(n()[7]=e,!0))),dh($,(()=>n()[8]),(e=>n(n()[8]=e,!0))),dh(O,(()=>n()[9]),(e=>n(n()[9]=e,!0))),dh(F,(()=>n()[3]),(e=>n(n()[3]=e,!0))),dh(N,(()=>n()[10]),(e=>n(n()[10]=e,!0))),dh(B,(()=>n()[0]),(e=>n(n()[0]=e,!0))),uh(V,r),bp(e,s),gd()}(s,{cbChange:w,clearSearch:E,oldGuildLog:x,refresh:$,selectAll:k,selectNone:S,get checks(){return Yf(r)},set checks(e){Od(r,e,!0)},get searchValue(){return Yf(c)},set searchValue(e){Od(c,e,!0)}})
var u=Wd(s,2),f=Wd(Ud(u),4),p=Wd(Ud(f)),h=e=>{bp(e,lE())}
Lp(p,(e=>{Yf(o)&&e(h)})),$p(Wd(u,2),(()=>Yf(a)),(e=>{var t=mp()
Rp(Gd(t),17,(()=>Yf(l)),Op,((e,t)=>{var n=uE(),r=Gd(n)
Zd((()=>wp(r,`${Yf(t)??""} `))),bp(e,n)})),bp(e,t)}),(e=>{var t=cE()
{const e=(e,t)=>{rE(e,{get groupCombatItems(){return Yf(i)},get hideNonPlayerGuildLogMessages(){return Yf(o)},get logEntry(){return t?.().item}})}
mx(Ud(t),{get items(){return Yf(d)},children:e,$$slots:{default:!0}})}bp(e,t)}),((e,t)=>{var n=_p()
Zd((()=>wp(n,Yf(t)))),bp(e,n)})),bp(e,n)},$$slots:{title:!0,default:!0}})}gd()}const pE=md({visible:!0})
let hE=0
var vE=Object.freeze({__proto__:null,default:function(){hE?pE.visible=!0:hE=kp(fE,{props:pE,target:document.body})}})
function gE(){return jk({subcmd:"fetchinv"})}function _E(){return N_(gE)}function mE(e){return jk({subcmd:"inventory",...e})}function bE(){return mE({subcmd2:"report"})}function yE(){return N_(bE)}function wE(e,t,[n,r]){Sc(r)&&null!==r?e[n]=t(r.constructor(),r):e[n]=r}function kE(e,t){return Sc(t)&&Tv(t).forEach(ev(wE,e,kE)),e}function SE(e){return e?.constructor&&kE(e.constructor(),e)}const xE=e=>Math.max(Math.min(e,100),0),EE=e=>`000000${e.toString(16)}`.slice(-6)
var CE=(e,t,n,r)=>{t("backpack"),n(),r()},PE=(e,t,n,r)=>{t("guildstore"),n(),r()},TE=(e,t,n)=>{t("inventory"),n()},$E=(e,t)=>{Yf(t)||Od(t,!0)},LE=(e,t,n)=>{t("mapping"),n()},IE=(e,t)=>{Yf(t)||Od(t,!0)},OE=(e,t,n)=>{t("thresholds"),n()},RE=(e,t)=>{Yf(t)||Od(t,!0)},ME=gp('<div class="svelte-d6ps8u"> </div> <div class="svelte-d6ps8u"> </div>',1),FE=gp('<div class="inventory svelte-d6ps8u"><div class="inventory-grid-container svelte-d6ps8u"></div></div>'),AE=(e,t,n)=>{t("mapped"),n()},jE=gp("<option> </option>"),NE=gp("<option> </option>"),DE=(e,t,n)=>{t("ignore"),n()},BE=e=>e.target.blur(),qE=gp('<div class="svelte-d6ps8u"> </div> <div class="svelte-d6ps8u"><select class="svelte-d6ps8u"><!></select></div> <div class="svelte-d6ps8u"><input title="Ignore" type="checkbox" class="svelte-d6ps8u"></div>',1),HE=(e,t,n)=>{t("ignore-all"),n()},UE=(e,t,n)=>{t("reset"),n()},GE=gp('<div class="mapping svelte-d6ps8u"><div class="mapping-grid-container svelte-d6ps8u"><!> <div class="svelte-d6ps8u"></div> <div class="svelte-d6ps8u"><button class="custombutton svelte-d6ps8u" type="button">Ignore All</button> <button class="custombutton svelte-d6ps8u" type="button">Reset</button></div></div></div>'),WE=(e,t,n)=>{t("minpoint"),n()},zE=(e,t,n)=>{t("maxpoint"),n()},VE=gp('<div class="thresholds svelte-d6ps8u">Min: <input max="999" min="0" type="number" class="svelte-d6ps8u"> Max: <input max="999" min="0" type="number" class="svelte-d6ps8u"></div>'),QE=gp('<div class="filters svelte-d6ps8u"><label class="svelte-d6ps8u"><input type="checkbox"> Member Backpacks</label> <label class="svelte-d6ps8u"><input type="checkbox"> Guild Store</label></div> <div class="pot-report svelte-d6ps8u"><input class="tab-ctrl svelte-d6ps8u" id="pr-inv" type="checkbox"> <label for="pr-inv" class="svelte-d6ps8u">Composed Potion Inventory</label> <input class="tab-ctrl svelte-d6ps8u" id="pr-map" type="checkbox"> <label for="pr-map" class="svelte-d6ps8u">Mapping</label> <input class="tab-ctrl svelte-d6ps8u" id="pr-levels" type="checkbox"> <label for="pr-levels" class="svelte-d6ps8u">Thresholds</label> <div class="panels svelte-d6ps8u"><!> <!> <!></div></div>',1),JE=gp('<p style="color: red"> </p>'),KE=gp('<div class="main svelte-d6ps8u"><!></div>')
function XE(e,t){vd(t,!0)
const n="fsh_potReport",r={inventory:!1,mapping:!1,thresholds:!1,potMap:[],minpoint:20,maxpoint:30,backpack:!0,guildstore:!0}
let i=Rh(t,"visible",15,!0),o=Ld(null),s=Ld(!1),a=Ld(!1),l=Ld(!1),c=Ld(md([])),u=[],d=Ld(md([]))
const f=({t:e})=>15===e,p=e=>function(e,t,n){const r=xE((e-t)/(n-t)*100)
let i=255,o=255
return r<50?o=Math.round(5.1*r):i=Math.round(510-5.1*r),`#${EE(65536*i+256*o+0)}`}(e,Yf(o).minpoint,Yf(o).maxpoint),h=({ignore:e})=>!e,v=e=>({name:t})=>t===e,g=(e,t)=>Y_(e.n,t.n),_=({r:e})=>e,m=e=>xv("pot-report",e),b=({player:e,n:t})=>({loc:e?1:2,n:t}),y=()=>Kg(n,ud(Yf(o))),w=e=>({mapped:t})=>({name:t,count:e.filter((({mapped:e})=>e===t)).length}),k=e=>u.filter((e=>({n:t})=>e.some(v(t)))(e)).filter((({loc:e})=>Yf(o).backpack||1!==e)).filter((({loc:e})=>Yf(o).guildstore||2!==e)).map((e=>({loc:t,n:n})=>({loc:t,mapped:e.find(v(n)).mapped,n:n}))(e))
function S(){y(),Od(c,function(){const e=Yf(o).potMap.filter(h),t=k(e)
return $m(e,"mapped").map(w(t)).sort(((e,t)=>Y_(e.name,t.name)))}(),!0),Od(d,Yf(o).potMap.map((e=>({...e,waiting:!0}))),!0)}function x(){Yf(o).potMap=Yf(d).map((({ignore:e,mapped:t,name:n})=>({ignore:e,mapped:t,name:n}))),S()}function E(){Yf(o).potMap=Yf(o).potMap.map((e=>({...e,ignore:!0}))),S()}function C(){Yf(o).potMap=Yf(o).potMap.map((e=>({...e,mapped:e.name,ignore:!1}))),S()}async function P(){!async function(){Od(o,await Jg(n)||SE(r),!0),Od(s,Yf(o).inventory,!0),Od(a,Yf(o).mapping,!0),Od(l,Yf(o).thresholds,!0),Yf(o).backpack=Yf(o).backpack??r.backpack,Yf(o).guildstore=Yf(o).guildstore??r.guildstore}()
const e=await Zm([_E(),yE()])
if(!Uc(e[0]?.r)||!Uc(e[1]?.r))throw new Error("Server Error")
u=(e=>e.flatMap(_).filter(f).map(b).sort(g))(e),Yf(o).potMap=$m(u,"n").map((({n:e})=>({name:e,mapped:Yf(o)?.potMap?.find(v(e))?.mapped||e,ignore:Yf(o)?.potMap?.find(v(e))?.ignore??!1}))),S()}{const t=e=>{bp(e,_p("Pot Report"))}
Tx(e,{close:function(){m("close"),i(!1)},get visible(){return i()},title:t,children:(e,t)=>{var n=KE()
$p(Ud(n),P,(e=>{bp(e,_p("Loading..."))}),(e=>{var t=QE(),n=Gd(t),r=Ud(n),i=Ud(r)
i.__change=[CE,m,y,S]
var u=Ud(Wd(r,2))
u.__change=[PE,m,y,S]
var f=Ud(Wd(n,2))
f.__change=[TE,m,y],f.__click=[$E,s]
var h=Wd(f,4)
h.__change=[LE,m,y],h.__click=[IE,a]
var v=Wd(h,4)
v.__change=[OE,m,y],v.__click=[RE,l]
var g=Ud(Wd(v,4)),_=e=>{var t=FE()
Rp(Ud(t),21,(()=>Yf(c)),Op,((e,t)=>{let n=()=>Yf(t).count
var r=ME(),i=Gd(r),o=Ud(i),s=Wd(i,2)
let a
var l=Ud(s)
Zd((e=>{wp(o,Yf(t).name),a=Jp(s,"",a,{"background-color":e}),wp(l,n())}),[()=>p(n())]),bp(e,r)})),bp(e,t)}
Lp(g,(e=>{Yf(s)&&e(_)}))
var b=Wd(g,2),w=e=>{var t=GE(),n=Ud(t),r=Ud(n)
Rp(r,17,(()=>Yf(d)),Op,((e,t,n)=>{let r=()=>Yf(t).name,i=()=>Yf(t).mapped
var o=qE(),s=Gd(o),a=Ud(s),l=Wd(s,2),c=Ud(l)
c.__change=[AE,m,x],c.__mousedown=()=>{Yf(d)[n].waiting=!1}
var u=Ud(c),f=e=>{var t=jE(),n={},r=Ud(t)
Zd((()=>{n!==(n=i())&&(t.value=null==(t.__value=i())?"":i()),wp(r,i())})),bp(e,t)},p=e=>{var t=mp()
Rp(Gd(t),17,(()=>Yf(d)),Op,((e,t)=>{let n=()=>Yf(t).name
var r=NE(),o={},s=Ud(r)
Zd((()=>{var e
e=r,i()===n()?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected"),o!==(o=n())&&(r.value=null==(r.__value=n())?"":n()),wp(s,n())})),bp(e,r)})),bp(e,t)}
Lp(u,(e=>{Yf(t).waiting?e(f):e(p,!1)}))
var h=Ud(Wd(l,2))
h.__change=[DE,m,x],h.__click=[BE],Zd((()=>{wp(a,r()),Zp(c,"name",r())})),vh(c,(()=>Yf(d)[n].mapped),(e=>Yf(d)[n].mapped=e)),dh(h,(()=>Yf(d)[n].ignore),(e=>Yf(d)[n].ignore=e)),bp(e,o)}))
var i=Ud(Wd(r,4))
i.__click=[HE,m,E],Wd(i,2).__click=[UE,m,C],bp(e,t)}
Lp(b,(e=>{Yf(a)&&e(w)}))
var k=Wd(b,2),P=e=>{var t=VE(),n=Wd(Ud(t))
n.__input=[WE,m,S]
var r=Wd(n,2)
r.__input=[zE,m,S],uh(n,(()=>Yf(o).minpoint),(e=>Yf(o).minpoint=e)),uh(r,(()=>Yf(o).maxpoint),(e=>Yf(o).maxpoint=e)),bp(e,t)}
Lp(k,(e=>{Yf(l)&&e(P)})),dh(i,(()=>Yf(o).backpack),(e=>Yf(o).backpack=e)),dh(u,(()=>Yf(o).guildstore),(e=>Yf(o).guildstore=e)),dh(f,(()=>Yf(o).inventory),(e=>Yf(o).inventory=e)),dh(h,(()=>Yf(o).mapping),(e=>Yf(o).mapping=e)),dh(v,(()=>Yf(o).thresholds),(e=>Yf(o).thresholds=e)),bp(e,t)}),((e,t)=>{var n=JE(),r=Ud(n)
Zd((()=>wp(r,Yf(t).message))),bp(e,n)})),bp(e,n)},$$slots:{title:!0,default:!0}})}gd()}fp(["change","click","mousedown","input"])
const YE=md({visible:!0})
let ZE=0
var eC=Object.freeze({__proto__:null,default:function(){ZE?YE.visible=!0:ZE=kp(XE,{props:YE,target:document.body})}})
function tC(e){return Z_({subcmd:"useitem",inventory_id:e})}function nC(e){return N_(tC,0,e)}function rC(){return Z_({subcmd:"loadinventory"})}function iC(){return N_(rC)}function oC(){return A_({subcmd:"secure"})}const sC=["Perfect","Excellent","Very Good","Good","Average","Poor","Uncrafted"],aC=e=>({bound:e.bn??!1,craft:e.cr?sC[e.cf]:"",...null!==(e.cd??null)&&{durability:e.cd},equipped:e.equipped??!1}),lC=e=>({...e.folder_id&&{folder_id:e.folder_id},forge:e.hf??0,guild_tag:e.tg??-1,inv_id:e.a,item_id:e.b,item_name:e.n,...e.md&&{max_durability:e.md},...e.player?.id&&{player_id:e.player.id},rarity:e.r,stats:{min_level:e.l,set_name:""},type:e.t})
function cC(e){return e?{...aC(e),...lC(e)}:{}}const uC=({id:e,items:t})=>t.map((t=>({...t,folder_id:e})))
function dC(e){return Uc(e?.inventories)?e.inventories.flatMap(uC):[]}const fC=({items:e})=>e.map((({a:e})=>[e,!0]))
async function pC(){const[e,t]=await Zm([iC(),N_(oC)])
if(!e?.s||!t?.s)return
const n=dC(e.r).map(cC),r=Dm(t.r.sent.flatMap(fC))
return{items:n.map((e=>({...e,...r?.[e.inv_id]&&{is_in_st:!0}}))),player_id:wg()}}function hC(e,t,n,r){yc(t,n()),r.dispatchToggle()}var vC=gp('<label><input type="checkbox" class="svelte-f8757j"> Select items in ST</label>')
function gC(e,t){vd(t,!0)
let n=Rh(t,"inSt",15,null)
const r="selectST"
n(vc(r))
var i=vC(),o=Ud(i)
o.__change=[hC,r,n,t],dh(o,n),bp(e,i),gd()}function _C(e){return`${e.amount} x ${ic[e.type]}`}fp(["change"])
const mC=[[e=>e.components?.length,e=>`You successfully extracted 1 '${e.components?.[0].n}' component(s) from 1 resource(s).`],[e=>e.frags,e=>`You gained ${e.frags.map(_C).join(", ")} Fragments by opening the Fragment Stash.`],[e=>e.mailbox_items?.length,e=>`You received 1 x '${e.mailbox_items?.[0].n}' from the container.`],[()=>1,()=>"<You failed to extract any components from resource(s)."]]
function bC(e){return mC.find((([t])=>t(e)))[1](e)}const yC=(e,t,n)=>`fetchitem.php?item_id=${t}&inv_id=${n}&t=1&p=${e}`,wC=e=>`background-image: url(${xa}items/${e}.gif)`
function kC(e,t,n,r){xv("quickExtract","toggleSelectMain"),yc(t,Yf(n)),r()}function SC(e,t,n){xv("quickExtract","togglePrompts"),yc(t,Yf(n))}var xC=gp('<span class="fshRed"> </span>'),EC=gp('<li class="svelte-g50cgg"><!></li>'),CC=gp('<span class="fshSpinner fshSpinner12"></span>'),PC=gp('<tr><td><!></td><td class="imgCol svelte-g50cgg"><span class="imgSpan tip-dynamic svelte-g50cgg"></span></td><td> </td></tr>'),TC=gp('<tr><td colspan="3"><p style="color: red"> </p></td></tr>'),$C=gp('<div class="svelte-g50cgg">Select which type of plants you wish to extract all of. Only select\n    extractable resources. <br> <!>&nbsp; <label><input type="checkbox" class="svelte-g50cgg"> Main Folder Only</label>&nbsp; <label><input type="checkbox" class="svelte-g50cgg"> Disable Prompts</label>&nbsp; <!> <br> <table class="svelte-g50cgg"><thead><tr><th class="actionCol svelte-g50cgg">Actions</th><th colspan="2">Items</th></tr></thead><tbody><tr><td colspan="3"><ol></ol></td></tr><!></tbody></table></div>')
function LC(e,t){vd(t,!0)
let n=Rh(t,"visible",15,!0)
const r="selectMain",i="disableQuickExtractPrompts"
let o=Ld(null),s=null,a=Ld(null),l=Ld(md(vc(r))),c=Ld(md(vc(i))),u=null,d=Ld(null),f=Ld(md([]))
const p=e=>"Zombie Coffin"===e.item_name||12===e.type||16===e.type,h=(e,t)=>Y_(e.item_name,t.item_name),v=e=>Yf(a)||!e.is_in_st,g=e=>!Yf(l)||-1===e.folder_id
function _(){Od(d,Uc(u)&&function(e,t){return $m(t,"item_name").map((n=>({...n,count:t.filter((e=>e.item_name===n.item_name)).length,delPending:!1,extractIds:t.filter((e=>e.item_name===n.item_name)).map((e=>e.inv_id)),style:wC(n.item_id),tip:yC(e,n.item_id,n.inv_id)})))}(s,u.filter(v).filter(g)),!0)}function m(){xv("quickExtract","toggleSelectST"),_()}async function b(){const e=await pC()
s=e?.player_id,u=e?.items?.filter(p).sort(h),_()}function y(){xv("quickExtract","refresh"),Od(f,[],!0),Od(o,b(),!0)}let w
async function k(e){const t=await nC(e);(function(e){return e?.s||w===e?.e?.message||(w=e?.e?.message,Od(f,[...Yf(f),e?.e?.message],!0)),e?.s})(t)&&(Od(f,[...Yf(f),bC(t.r)],!0),u=u.filter((t=>t.inv_id!==e)))}Jd((()=>{n()&&(Od(f,[],!0),Od(o,b(),!0))}))
{const t=e=>{bp(e,_p("Quick Extract"))}
Tx(e,{close:function(){xv("quickExtract","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=$C(),s=Wd(Ud(n),3)
gC(s,{dispatchToggle:m,get inSt(){return Yf(a)},set inSt(e){Od(a,e,!0)}})
var u=Wd(s,2),p=Ud(u)
p.__change=[kC,r,l,_]
var h=Wd(u,2),v=Ud(h)
v.__change=[SC,i,c]
var g=Wd(h,2)
Ox(g,{onclick:y,children:(e,t)=>{bp(e,_p("Refresh"))}})
var b=Wd(g,4),w=Wd(Ud(b)),S=Ud(w),x=Ud(S)
Rp(Ud(x),21,(()=>Yf(f)),Op,((e,t)=>{var n=EC(),r=Ud(n),i=e=>{var n=xC(),r=Ud(n)
Zd((e=>wp(r,e)),[()=>Yf(t).slice(1)]),bp(e,n)},o=e=>{var n=_p()
Zd((()=>wp(n,Yf(t)))),bp(e,n)}
Lp(r,(e=>{Yf(t).startsWith("<")?e(i):e(o,!1)})),bp(e,n)})),$p(Wd(S),(()=>Yf(o)),null,(e=>{var t=mp()
Rp(Gd(t),17,(()=>Yf(d)),Op,((e,t,n)=>{let r=()=>Yf(t).count,i=()=>Yf(t).delPending
var o=PC(),s=Ud(o)
let a
var l=Ud(s),u=e=>{var t=mp(),o=Gd(t),s=e=>{bp(e,CC())},a=e=>{Lx(e,{onclick:()=>async function(e){xv("quickExtract","extract",Yf(c)),(Yf(c)||await Jw("Are you sure you want to extract all similar items?"))&&(Yf(d)[e].delPending=!0,await Zm(Yf(d)[e].extractIds.map(k)),Yf(d)[e]?.count&&(Yf(d)[e].count=0))}(n),children:(e,t)=>{var n=_p()
Zd((()=>wp(n,`Extract ${r()??""}`))),bp(e,n)},$$slots:{default:!0}})}
Lp(o,(e=>{i()?e(s):e(a,!1)})),bp(e,t)},f=e=>{bp(e,_p("Done"))}
Lp(l,(e=>{r()?e(u):e(f,!1)}))
var p=Wd(s),h=Ud(p),v=Ud(Wd(p))
Zd((e=>{a=Vp(s,0,"svelte-g50cgg",null,a,e),Zp(h,"data-tipped",Yf(t).tip),Jp(h,Yf(t).style),wp(v,Yf(t).item_name)}),[()=>({delPending:i()})]),bp(e,o)})),bp(e,t)}),((e,t)=>{var n=TC(),r=Ud(n),i=Ud(r),o=Ud(i)
Zd((()=>wp(o,Yf(t).message))),bp(e,n)})),dh(p,(()=>Yf(l)),(e=>Od(l,e))),dh(v,(()=>Yf(c)),(e=>Od(c,e))),bp(e,n)},$$slots:{title:!0,default:!0}})}gd()}fp(["change"])
const IC=md({visible:!0})
let OC=0
var RC=Object.freeze({__proto__:null,default:function(){OC?IC.visible=!0:OC=kp(LC,{props:IC,target:document.body})}})
function MC(e,t){return`<a href="${Va}${e}">${t}</a>`}var FC=gp("<input>"),AC=gp("<option> </option>"),jC=gp("<select><option> </option><!></select>"),NC=gp("<th><!></th>"),DC=gp("<th></th>"),BC=gp('<tr class="svelte-dsaf7t"><!><!></tr>'),qC=(e,t,n)=>t(e,Yf(n)),HC=gp('<th tabindex="0"> <!></th>'),UC=gp("<th></th>"),GC=gp("<tr><!><!></tr>"),WC=(e,t,n)=>t(e,Yf(n)),zC=(e,t,n,r)=>t(e,Yf(n),Yf(r).key),VC=gp("<td><!></td>"),QC=(e,t,n)=>t(e,Yf(n)),JC=gp('<td><span class="isClickable svelte-dsaf7t" tabindex="0" role="button"><!></span></td>'),KC=gp("<tr><td><!></td></tr>"),XC=gp("<tr><!><!></tr> <!>",1),YC=gp("<table><thead><!><!></thead><tbody></tbody></table>")
function ZC(e,t){vd(t,!0)
let n=Rh(t,"sortOrders",19,(()=>[1,-1])),r=Rh(t,"sortBy",15,""),i=Rh(t,"sortOrder",31,(()=>md(n()?.[0]||1))),o=Rh(t,"filterSelections",31,(()=>md({}))),s=Rh(t,"expanded",31,(()=>md([]))),a=Rh(t,"selected",31,(()=>md([]))),l=Rh(t,"expandRowKey",3,null),c=Rh(t,"rowKey",19,l),u=Rh(t,"expandSingle",3,!1),d=Rh(t,"selectSingle",3,!1),f=Rh(t,"selectOnClick",3,!1),p=Rh(t,"iconAsc",3,"▲"),h=Rh(t,"iconDesc",3,"▼"),v=Rh(t,"iconSortable",3,""),g=Rh(t,"iconExpand",3,"▼"),_=Rh(t,"iconExpanded",3,"▲"),m=Rh(t,"showExpandIcon",3,!1),b=Rh(t,"classNameTable",3,""),y=Rh(t,"classNameThead",3,""),w=Rh(t,"classNameTbody",3,""),k=Rh(t,"classNameSelect",3,""),S=Rh(t,"classNameInput",3,""),x=Rh(t,"classNameRow",3,null),E=Rh(t,"classNameCell",3,""),C=Rh(t,"classNameRowSelected",3,null),P=Rh(t,"classNameRowExpanded",3,null),T=Rh(t,"classNameExpandedContent",3,""),$=Rh(t,"classNameCellExpand",3,""),L=Rh(t,"clickCol",3,(()=>{})),I=Rh(t,"clickRow",3,(()=>{})),O=Rh(t,"clickExpand",3,(()=>{})),R=Rh(t,"clickCell",3,(()=>{})),M=Ld((()=>""))
if(!Array.isArray(s()))throw"'expanded' needs to be an array"
if(!Array.isArray(a()))throw"'selection' needs to be an array"
null!==l()&&console.warn("'expandRowKey' is deprecated in favour of 'rowKey'"),C()&&!c()&&console.error("'rowKey' is needed to use 'classNameRowSelected'")
let F=t.columns.some((e=>!e.hideFilterHeader&&(void 0!==e.filterOptions||void 0!==e.searchValue))),A=Ld(md({}))
const j=Sd((()=>Object.fromEntries(t.columns.map((e=>[e.key,e])))))
let N=Sd((()=>(m()?1:0)+t.columns.length))
const D=Sd((()=>t.rows.filter((e=>Object.keys(o()).every((t=>{let n=null
if(void 0===Yf(j)[t])return!0
if(Yf(j)[t]?.searchValue){if(""===o()[t])return!0
1===Yf(j)[t].searchValue.length?n=(Yf(j)[t].searchValue(e)+"").toLocaleLowerCase().indexOf((o()[t]+"").toLocaleLowerCase())>=0:2===Yf(j)[t].searchValue.length&&(n=!!Yf(j)[t].searchValue(e,o()[t]+""))}else n=!1
return n||void 0===o()[t]||o()[t]===("function"==typeof Yf(j)[t].filterValue?Yf(j)[t].filterValue(e):Yf(j)[t].value(e))})))).map((e=>Object.assign({},e,{$sortOn:Yf(M)(e),$expanded:null!==c()&&s().indexOf(e[c()])>=0,$selected:null!==c()&&a().indexOf(e[c()])>=0}))).sort(((e,t)=>r()?e.$sortOn>t.$sortOn?i():e.$sortOn<t.$sortOn?-i():0:0)))),B=e=>[].concat(e).filter((e=>null!==e&&"string"==typeof e&&""!==e)).join(" ")
Jd((()=>{let e=Yf(j)[r()]
void 0!==e&&!0===e.sortable&&"function"==typeof e.value&&Od(M,(t=>e.value(t)))})),Jd((()=>{F&&t.columns&&t.rows&&(Od(A,{},!0),t.columns.forEach((e=>{"function"==typeof e.filterOptions?Yf(A)[e.key]=e.filterOptions(t.rows):Array.isArray(e.filterOptions)&&(Yf(A)[e.key]=e.filterOptions.map((e=>({name:e,value:e}))))})))}))
const q=(e,t)=>{t.sortable&&(i(t.key===r()?n()[(n().findIndex((e=>e===i()))+1)%n().length]:n()[0]),r(i()?t.key:void 0)),L()({event:e,col:t,key:t.key})},H=(e,t)=>{f()&&(d()?a().includes(t[c()])?a([]):a([t[c()]]):a().includes(t[c()])?a(a().filter((e=>e!=t[c()]))):a([...a(),t[c()]].sort())),I()({event:e,row:t})},U=(e,t)=>{t.$expanded=!t.$expanded
const n=t[c()]
u()&&t.$expanded?s([n]):u()?s([]):t.$expanded?s([...s(),n]):s(s().filter((e=>e!=n))),O()({event:e,row:t})},G=(e,t,n)=>{R()({event:e,row:t,key:n})}
var W=YC(),z=Ud(W),V=Ud(z),Q=e=>{var n=BC(),r=Ud(n)
Rp(r,17,(()=>t.columns),Op,((e,t)=>{var n=NC(),r=Ud(n),i=e=>{var n=FC()
Zd((e=>{Vp(n,0,e,"svelte-dsaf7t"),Zp(n,"placeholder",Yf(t).filterPlaceholder)}),[()=>Up(B(S()))]),uh(n,(()=>o()[Yf(t).key]),(e=>o(o()[Yf(t).key]=e,!0))),bp(e,n)},s=(e,n)=>{var r=e=>{var n=jC(),r=Ud(n)
r.value=null==(r.__value=void 0)?"":void 0
var i=Ud(r)
Rp(Wd(r),17,(()=>Yf(A)[Yf(t).key]),Op,((e,t)=>{var n=AC(),r={},i=Ud(n)
Zd((()=>{r!==(r=Yf(t).value)&&(n.value=null==(n.__value=Yf(t).value)?"":Yf(t).value),wp(i,Yf(t).name)})),bp(e,n)})),Zd((e=>{Vp(n,0,e,"svelte-dsaf7t"),wp(i,Yf(t).filterPlaceholder||"")}),[()=>Up(B(k()))]),vh(n,(()=>o()[Yf(t).key]),(e=>o(o()[Yf(t).key]=e,!0))),bp(e,n)}
Lp(e,(e=>{Yf(t).hideFilterHeader||void 0===Yf(A)[Yf(t).key]||e(r)}),n)}
Lp(r,(e=>{Yf(t).hideFilterHeader||void 0===Yf(t).searchValue?e(s,!1):e(i)})),Zd((e=>Vp(n,0,e,"svelte-dsaf7t")),[()=>Up(B([Yf(t).headerFilterClass]))]),bp(e,n)}))
var i=Wd(r),s=e=>{bp(e,DC())}
Lp(i,(e=>{m()&&e(s)})),bp(e,n)}
Lp(V,(e=>{F&&e(Q)}))
var J=Wd(V),K=e=>{var n=mp()
Dp(Gd(n),(()=>t.svelteTableHeader),(()=>({sortOrder:i(),sortBy:r()}))),bp(e,n)},X=e=>{var n=GC(),o=Ud(n)
Rp(o,17,(()=>t.columns),Op,((e,t)=>{var n=HC()
n.__click=[qC,q,t]
var o=Ud(n),s=Wd(o),a=e=>{var t=mp()
Np(Gd(t),(()=>1===i()?p():h())),bp(e,t)},l=(e,n)=>{var r=e=>{var t=mp()
Np(Gd(t),v),bp(e,t)}
Lp(e,(e=>{Yf(t).sortable&&e(r)}),n)}
Lp(s,(e=>{r()===Yf(t).key?e(a):e(l,!1)})),Zd((e=>{Vp(n,0,e,"svelte-dsaf7t"),wp(o,`${Yf(t).title??""} `)}),[()=>Up(B([Yf(t).sortable?"isSortable":"",Yf(t).headerClass]))]),dp("keypress",n,(e=>"Enter"===e.key&&q(e,Yf(t)))),bp(e,n)}))
var s=Wd(o),a=e=>{bp(e,UC())}
Lp(s,(e=>{m()&&e(a)})),bp(e,n)}
Lp(J,(e=>{t.svelteTableHeader?e(K):e(X,!1)}))
var Y=Wd(z)
Rp(Y,21,(()=>Yf(D)),Op,((e,n,r)=>{var i=mp(),o=Gd(i),s=e=>{var i=mp()
Dp(Gd(i),(()=>t.svelteTableRow),(()=>({row:Yf(n),n:r}))),bp(e,i)},a=e=>{var i=XC(),o=Gd(i)
o.__click=[WC,H,n]
var s=Ud(o)
Rp(s,17,(()=>t.columns),Op,((e,t,i)=>{var o=VC()
o.__click=[zC,G,n,t]
var s=Ud(o),a=e=>{var r=mp()
const i=Sd((()=>Yf(t).renderComponent.component||Yf(t).renderComponent))
Bp(Gd(r),(()=>Yf(i)),((e,r)=>{r(e,function(...e){return new Proxy({props:e},Ih)}((()=>Yf(t).renderComponent.props||{}),{get row(){return Yf(n)},get col(){return Yf(t)}}))})),bp(e,r)},l=(e,o)=>{var s=e=>{var o=mp()
Np(Gd(o),(()=>Yf(t).renderValue?Yf(t).renderValue(Yf(n),r,i):Yf(t).value(Yf(n),r,i))),bp(e,o)},a=e=>{var o=_p()
Zd((e=>wp(o,e)),[()=>Yf(t).renderValue?Yf(t).renderValue(Yf(n),r,i):Yf(t).value(Yf(n),r,i)]),bp(e,o)}
Lp(e,(e=>{Yf(t).parseHTML?e(s):e(a,!1)}),o)}
Lp(s,(e=>{Yf(t).renderComponent?e(a):e(l,!1)})),Zd((e=>Vp(o,0,e,"svelte-dsaf7t")),[()=>Up(B(["string"==typeof Yf(t).class?Yf(t).class:null,"function"==typeof Yf(t).class?Yf(t).class(Yf(n),r,i):null,E()]))]),dp("keypress",o,(e=>"Enter"===e.key&&G(e,Yf(n),Yf(t).key))),bp(e,o)}))
var a=Wd(s),l=e=>{var t=JC(),r=Ud(t)
r.__click=[QC,U,n],Np(Ud(r),(()=>Yf(n).$expanded?g():_())),Zd((e=>Vp(t,0,e,"svelte-dsaf7t")),[()=>Up(B($()))]),dp("keypress",r,(e=>"Enter"===e.key&&U(e,Yf(n)))),bp(e,t)}
Lp(a,(e=>{m()&&e(l)}))
var c=Wd(o,2),u=e=>{var i=KC(),o=Ud(i)
Dp(Ud(o),(()=>t.svelteTableExpanded??mu),(()=>({row:Yf(n),n:r}))),Zd((e=>{Vp(i,0,e,"svelte-dsaf7t"),Zp(o,"colspan",Yf(N))}),[()=>Up(B(T()))]),bp(e,i)}
Lp(c,(e=>{Yf(n).$expanded&&e(u)})),Zd((e=>{Vp(o,0,e,"svelte-dsaf7t"),Zp(o,"tabindex",f()?"0":null)}),[()=>Up(B(["string"==typeof x()?x():null,"function"==typeof x()?x()(Yf(n),r):null,Yf(n).$expanded&&P(),Yf(n).$selected&&C()]))]),dp("keypress",o,(e=>"Enter"===e.key&&H(e,Yf(n)))),bp(e,i)}
Lp(o,(e=>{t.svelteTableRow?e(s):e(a,!1)})),bp(e,i)})),Zd(((e,t,n)=>{Vp(W,0,e,"svelte-dsaf7t"),Vp(z,0,t,"svelte-dsaf7t"),Vp(Y,0,n,"svelte-dsaf7t")}),[()=>Up(B(b())),()=>Up(B(y())),()=>Up(B(w()))]),bp(e,W),gd()}function eP(e){return new Intl.NumberFormat("en-us").format(e)}fp(["click"])
var tP=gp('<div class="content svelte-u19tu"><!></div>')
function nP(e,t){vd(t,!0)
let n=Rh(t,"visible",15,!0)
const r=[{key:"slot",title:"Slot",value:e=>e.slot,sortable:!0},{key:"name",title:"Name",value:e=>e.name,sortable:!0,renderValue:e=>MC(e.id,e.name),parseHTML:!0},{key:"level",title:"Level",value:e=>e.level,sortable:!0},{key:"rank",title:"Rank",value:e=>e.rank,sortable:!0},{key:"guild_xp",title:"GXP",value:e=>e.guild_xp,sortable:!0,renderValue:e=>eP(e.guild_xp)},{key:"activity",title:"Activity",value:e=>e.activity,sortable:!0},{key:"pack",title:"Pack",value:e=>e.pack,sortable:!0},{key:"max_stamina",title:"Stam",value:e=>e.max_stamina,sortable:!0,renderValue:e=>eP(e.max_stamina)}]
let i=Ld(md([]))
const o=({equipped:e})=>!e,s=({player:{id:e}})=>e,a=e=>e.members,l=e=>e.r.flatMap(a),c=e=>(t,n)=>({...t,slot:n+1,activity:Hm(t.last_activity),pack:e[t.id]??0})
async function u(){const[e,t]=await Zm([yE(),Nm()])
if(e?.s&&t?.s){const n=function([e,t]){const n=e.r.filter(o).map(s),r=Dm($m(n).map((e=>[e,n.filter((t=>t===e)).length])))
return l(t).map(c(r))}([e,t])
Od(i,n,!0)}}const d=Sd((()=>{if(n())return u()}))
{const t=e=>{bp(e,_p("Who's Got What"))}
Tx(e,{close:function(){xv("Whos Got What","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=tP()
$p(Ud(n),(()=>Yf(d)),(e=>{bp(e,_p("Loading..."))}),(e=>{ZC(e,{classNameTable:"whos-got-what",columns:r,get rows(){return Yf(i)}})}),((e,t)=>{var n=_p()
Zd((()=>wp(n,Yf(t)))),bp(e,n)})),bp(e,n)},$$slots:{title:!0,default:!0}})}gd()}const rP=md({visible:!0})
let iP=0
var oP=Object.freeze({__proto__:null,default:function(){iP?rP.visible=!0:iP=kp(nP,{props:rP,target:document.body})}})
const sP=()=>{Bv(import("./inventory-mR7MKfZT.js"))},aP=()=>{Bv(import("./bazaar-PBzo0FNy.js"))}
function lP(){Bv(import("./injectQuestBookFull-8BxlkVdG.js"))}const cP=()=>{Bv(import("./scavenging-CuLPR4su.js"))}
const uP=()=>{Bv(import("./toprated-DtJcDWik.js"))}
const dP=()=>{Bv(import("./trade-Cy3aBksE.js"))}
var fP={creatures:{"-":{"-":cx}},items:ux,masterrealms:{"-":{"-":cx}},quests:{"-":{"-":cx},view:{"-":()=>{Bv(import("./showAllQuestSteps-mkHyLhkt.js"))}}},realms:{"-":{"-":cx}},relics:{"-":{"-":cx}},shops:{"-":{"-":cx}},"-":vx,arena:XS,auctionhouse:YS,bank:{"-":{"-":()=>{Bv(import("./injectBank-BVjsTH1j.js"))}}},blacksmith:{repairall:{"-":function(){ou("fromworld")&&KS()}}},buffmarket:{"-":{"-":()=>{Bv(import("./injectBuffmarket-DHeL7iWT.js"))}}},combat:{attackplayer:{"-":dx}},composing:ZS,findplayer:{"-":{"-":()=>{Bv(import("./findplayer-Dmwjihmd.js"))}}},guild:sx,hellforge:{"-":{"-":()=>{Bv(import("./hellforge-BA5U5KOW.js"))}}},inventing:lx,log:{"-":{"-":()=>{Bv(import("./playerLog-gy_pfQWq.js"))}}},marketplace:{createreq:{"-":()=>{Bv(import("./marketplace-GBrQTByL.js"))}}},news:hx,notepad:{showlogs:{"-":Hv},invmanagernew:{"-":sP},guildinvmgr:{"-":sP},recipemanager:{"-":eg},auctionsearch:{"-":Vv},onlineplayers:{"-":Kv},quicklinkmanager:{"-":Yv},monsterlog:{"-":Uv},quickextract:{"-":Xv},quickwear:{"-":Zv},fsboxcontent:{"-":Gv},bufflogcontent:{"-":qv},newguildlog:{"-":Wv},findbuffs:{"-":Qv},findother:{"-":Jv},savesettings:{"-":()=>{Bv(import("./load-DKKIxFpS.js"))}},reliclist:{"-":tg},"-":{"-":function(){}}},points:{"-":{"-":()=>{Bv(import("./points-Bd8sfffS.js"))}}},potionbazaar:{"-":{"-":aP},buyitem:{"-":aP}},privatemessage:{"-":{"-":()=>{Bv(import("./privateMsg-BUF-ppCh.js"))}}},profile:{"-":{"-":dx},managecombatset:{"-":dx},report:{"-":dx},equipitem:{"-":dx},useitem:{"-":dx},changebio:{"-":ex},dropitems:{"-":function(){Bv(import("./injectProfileDropItems-vaDToNNw.js"))}}},pvpladder:{"-":{"-":()=>{Bv(import("./ladder-BlaY9hvd.js"))}}},questbook:{"-":{"-":lP},atoz:{"-":lP},viewquest:{"-":()=>{Bv(import("./injectQuestTracker-DwkiekpA.js"))}}},quickbuff:{"-":{"-":()=>{Bv(import("./quickBuff-DOw-E1Vb.js"))}}},scavenging:{"-":{"-":cP},process:{"-":cP}},settings:{"-":{"-":()=>{Bv(import("./injectSettings-CJK05HLl.js"))}}},skills:{"-":{"-":()=>{}}},tempinv:{"-":{"-":()=>{Bv(import("./mailbox-DSz8M9nx.js"))}}},temple:{"-":{"-":oS}},titan:{"-":{"-":()=>{Bv(import("./injectTitan-tNSk2HGd.js"))}}},toprated:{xp:{"-":uP},monthlyxp:{"-":uP},gold:{"-":uP},killstreak:{"-":uP},bounties:{"-":uP},risingstars:{"-":uP},arena:{"-":uP},superelites:{"-":uP},smasher:{"-":uP},globalquest:{"-":()=>{Bv(import("./globalQuest-Dos-E_P2.js"))}}},trade:{"-":{"-":dP},sendgold:{"-":dP},createsecure:{"-":dP},docreatesecure:{"-":dP}},world:{"-":{"-":KS}}}
function pP(e){return Iv("ul",e)}const hP=()=>Ov({className:"fshQuickLinks",style:{left:`${vc("quickLinksLeftPx")}px`,top:`${vc("quickLinksTopPx")}px`}}),vP=e=>"newWindow"in e&&e.url&&e.name
function gP(e,t){const n=Fv(t,pP())
e.filter(vP).forEach((e=>{Fv(Fv(n,Mb()),function(e){const t=hg({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return hm(t,(()=>xv("chrome","quick link",e.name))),t}(e))}))}function _P(){if(!Ec(".mainbody"))return
const e=fy("quickLinks")||[]
e.length&&function(e){const t=hP()
t.classList.toggle("fshFixed",vc("keepHelperMenuOnScreen")),vc("draggableQuickLinks")&&(t.classList.add("fshMove"),wv(t)),gP(e,t),Fv(document.body,t)}(e)}let mP=0,bP=0,yP=0,wP="",kP=0,SP=0
function xP(e){return ou(e)||"-"}function EP(e){const t=Ec(e)
return t?.value||"-"}function CP(){if(Sc(fP[mP])&&Sc(fP[mP][bP])&&kc(fP[mP][bP][yP]))return fP[mP][bP][yP]}function PP(){""!==document.location.search?(mP=xP("cmd"),bP=xP("subcmd"),yP=xP("subcmd2"),["points","privatemessage"].includes(mP)&&(wP=`/${xP("type")}`)):(mP=EP('input[name="cmd"]'),bP=EP('input[name="subcmd"]'),yP=EP('input[name="subcmd2"]')),Hc.cmd=mP,Hc.subcmd=bP,Hc.subcmd2=yP,SP=`${mP}/${bP}/${yP}${wP}`,kP=CP()}function TP(){kc(kP)&&(wc(SP),kP())}async function $P(e){PP(),await e,JS(),ru(3,TP),vc("playNewMessageSound")&&ru(3,av),Sm()||ru(3,_P)}const LP=[()=>!("showPicker"in HTMLSelectElement.prototype),()=>!navigator.cookieEnabled,()=>window!==window.parent,function(){if(!d){const e=l(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
u=c.includes(e),d=!0}return u}]
function IP(e,t){if(LP.some((e=>e())))return
const n=Cc("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
Ac(),function(e,t){Hc.gmInfo=xc(decodeURIComponent(t)),Hc.gmInfo?Hc.fshVer=e:Hc.fshVer=`${e}_native`,Hc.calfVer="150"}(e,t),s(),ia(),$P(n)}export{N_ as $,Rb as A,Kh as B,Fb as C,lv as D,Pm as E,$a as F,pP as G,Tv as H,rw as I,bg as J,Uc as K,mg as L,B_ as M,D_ as N,uc as O,dc as P,vm as Q,vd as R,Ld as S,md as T,fy as U,Yf as V,Od as W,gp as X,Wd as Y,Ud as Z,Rp as _,F_ as a,Sl as a$,Lp as a0,vh as a1,uh as a2,bp as a3,gd as a4,ey as a5,fp as a6,Zd as a7,wp as a8,Xw as a9,Wl as aA,eP as aB,Mw as aC,Sa as aD,Da as aE,sy as aF,fS as aG,Yh as aH,uw as aI,aw as aJ,py as aK,X_ as aL,iw as aM,lS as aN,Ja as aO,Ka as aP,iu as aQ,vl as aR,Wa as aS,Ux as aT,ac as aU,pw as aV,Jh as aW,Ab as aX,o as aY,Nl as aZ,kl as a_,n as aa,ik as ab,ou as ac,kp as ad,Jw as ae,Hv as af,Uv as ag,Vh as ah,Cm as ai,yc as aj,Um as ak,Vb as al,Hc as am,Bc as an,vc as ao,Mv as ap,rl as aq,Yw as ar,$p as as,mp as at,Gd as au,gc as av,dh as aw,ga as ax,ha as ay,fw as az,U_ as b,Pl as b$,Tl as b0,xl as b1,Yk as b2,wg as b3,cl as b4,Ba as b5,yl as b6,vg as b7,xa as b8,Ol as b9,eb as bA,Pa as bB,Ll as bC,Ml as bD,Rh as bE,Lx as bF,Ca as bG,Op as bH,cw as bI,pl as bJ,xh as bK,Sh as bL,Zy as bM,Fa as bN,Hk as bO,Gc as bP,cc as bQ,Ym as bR,Y_ as bS,ma as bT,ya as bU,Va as bV,Fh as bW,Lh as bX,Th as bY,Rl as bZ,Ep as b_,cg as ba,xc as bb,ru as bc,Rw as bd,Rv as be,Yl as bf,Xl as bg,ec as bh,Zl as bi,tc as bj,Qh as bk,Xh as bl,kc as bm,ka as bn,wl as bo,Sd as bp,_p as bq,Zp as br,dl as bs,sl as bt,$m as bu,Xf as bv,Vp as bw,Jg as bx,Kg as by,jk as bz,Dc as c,yu as c$,jl as c0,Dl as c1,Bl as c2,z_ as c3,W_ as c4,V_ as c5,El as c6,Cl as c7,Fl as c8,pa as c9,Hl as cA,Ta as cB,Pk as cC,Bm as cD,Iv as cE,MC as cF,tl as cG,Fw as cH,Kl as cI,Ul as cJ,ja as cK,ow as cL,ay as cM,va as cN,a as cO,na as cP,Mg as cQ,Xg as cR,Nk as cS,e as cT,Cc as cU,Ju as cV,Ql as cW,Bv as cX,pd as cY,Kd as cZ,Jd as c_,Il as ca,nw as cb,wm as cc,hy as cd,H_ as ce,_a as cf,Z_ as cg,Up as ch,oc as ci,tm as cj,Sc as ck,fc as cl,Vl as cm,Pv as cn,Q_ as co,Xa as cp,sc as cq,pS as cr,qc as cs,hl as ct,ug as cu,$k as cv,kx as cw,ql as cx,pm as cy,Sx as cz,iC as d,_c as d$,Zf as d0,bu as d1,np as d2,kd as d3,pC as d4,gC as d5,qp as d6,Ip as d7,fm as d8,ud as d9,h_ as dA,nC as dB,A_ as dC,rc as dD,qm as dE,Jp as dF,Na as dG,La as dH,Zb as dI,Ra as dJ,Ma as dK,Gl as dL,zv as dM,ol as dN,Mb as dO,Aa as dP,Bk as dQ,sw as dR,Oa as dS,tx as dT,yh as dU,lh as dV,Hh as dW,gl as dX,_l as dY,Tx as dZ,Yp as d_,Ox as da,Ua as db,wa as dc,nc as dd,Tm as de,Jl as df,wc as dg,fx as dh,lP as di,ax as dj,nb as dk,tb as dl,fg as dm,yE as dn,_E as dp,cC as dq,pg as dr,SE as ds,Ea as dt,mE as du,__ as dv,a_ as dw,c_ as dx,u_ as dy,l_ as dz,ev as e,Em as e0,za as e1,dp as e2,Bp as e3,Za as e4,mx as e5,xx as e6,bl as e7,dw as e8,xm as e9,Eh as eA,Dv as eB,Zv as eC,Qa as eD,IP as eE,ob as ea,Qm as eb,ib as ec,zm as ed,Jm as ee,Wm as ef,Vm as eg,Km as eh,Gm as ei,Xm as ej,vb as ek,fb as el,hb as em,pb as en,lb as eo,Fx as ep,$h as eq,GS as er,AS as es,$S as et,xd as eu,om as ev,Ha as ew,el as ex,$d as ey,Xv as ez,dC as f,t as g,Av as h,Fv as i,Dm as j,q_ as k,ym as l,zl as m,gm as n,hm as o,ov as p,Ec as q,l as r,xv as s,lc as t,Ov as u,hg as v,ul as w,Zm as x,dg as y,ly as z}
//# sourceMappingURL=calfSystem-BGOTz8de.js.map
