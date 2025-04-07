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
for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var g,_="undefined"!=typeof window?window:void 0,m="undefined"!=typeof globalThis?globalThis:_,b=Array.prototype,y=b.forEach,w=b.indexOf,k=null==m?void 0:m.navigator,S=null==m?void 0:m.document,x=null==m?void 0:m.location,E=null==m?void 0:m.fetch,C=null!=m&&m.XMLHttpRequest&&"withCredentials"in new m.XMLHttpRequest?m.XMLHttpRequest:void 0,P=null==m?void 0:m.AbortController,T=null==k?void 0:k.userAgent,L=null!=_?_:{},I="$copy_autocapture",O=["$snapshot","$pageview","$pageleave","$set","survey dismissed","survey sent","survey shown","$identify","$groupidentify","$create_alias","$$client_ingestion_warning","$web_experiment_applied","$feature_enrollment_update","$feature_flag_called"]
!function(e){e.GZipJS="gzip-js",e.Base64="base64"}(g||(g={}))
var R=["fatal","error","warning","log","info","debug"]
function M(e,t){return-1!==e.indexOf(t)}var F=function(e){return e.trim()},A=function(e){return e.replace(/^\$/,"")},j=Array.isArray,N=Object.prototype,D=N.hasOwnProperty,B=N.toString,q=j||function(e){return"[object Array]"===B.call(e)},H=e=>"function"==typeof e,U=e=>e===Object(e)&&!q(e),G=e=>{if(U(e)){for(var t in e)if(D.call(e,t))return!1
return!0}return!1},W=e=>void 0===e,z=e=>"[object String]"==B.call(e),V=e=>z(e)&&0===e.trim().length,Q=e=>null===e,J=e=>W(e)||Q(e),K=e=>"[object Number]"==B.call(e),X=e=>"[object Boolean]"===B.call(e),Y=e=>e instanceof FormData,Z=e=>M(O,e),ee={DEBUG:!1,LIB_VERSION:"1.234.9"},te=e=>{var t={_log:function(t){if(_&&(ee.DEBUG||L.POSTHOG_DEBUG)&&!W(_.console)&&_.console){for(var n=("__rrweb_original__"in _.console[t]?_.console[t].__rrweb_original__:_.console[t]),r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o]
n(e,...i)}},info:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("log",...n)},warn:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("warn",...n)},error:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("error",...n)},critical:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
console.error(e,...n)},uninitializedWarning:e=>{t.error("You must initialize PostHog before calling ".concat(e))},createLogger:t=>te("".concat(e," ").concat(t))}
return t},ne=te("[PostHog.js]"),re=ne.createLogger,ie={}
function oe(e,t,n){if(q(e))if(y&&e.forEach===y)e.forEach(t,n)
else if("length"in e&&e.length===+e.length)for(var r=0,i=e.length;r<i;r++)if(r in e&&t.call(n,e[r],r)===ie)return}function se(e,t,n){if(!J(e)){if(q(e))return oe(e,t,n)
if(Y(e)){for(var r of e.entries())if(t.call(n,r[1],r[0])===ie)return}else for(var i in e)if(D.call(e,i)&&t.call(n,e[i],i)===ie)return}}var ae=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return oe(n,(function(t){for(var n in t)void 0!==t[n]&&(e[n]=t[n])})),e},le=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return oe(n,(function(t){oe(t,(function(t){e.push(t)}))})),e}
function ce(e){for(var t=Object.keys(e),n=t.length,r=new Array(n);n--;)r[n]=[t[n],e[t[n]]]
return r}var ue=function(e){try{return e()}catch(e){return}},de=function(e){return function(){try{for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return e.apply(this,n)}catch(e){ne.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."),ne.critical(e)}}},fe=function(e){var t={}
return se(e,(function(e,n){z(e)&&e.length>0&&(t[n]=e)})),t}
var pe=["herokuapp.com","vercel.app","netlify.app"]
function he(e){var t=null==e?void 0:e.hostname
if(!z(t))return!1
var n=t.split(".").slice(-2).join(".")
for(var r of pe)if(n===r)return!1
return!0}function ve(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}function ge(e,t,n,r){var{capture:i=!1,passive:o=!0}=null!=r?r:{}
null==e||e.addEventListener(t,n,{capture:i,passive:o})}var _e="$people_distinct_id",me="__alias",be="__timers",ye="$autocapture_disabled_server_side",we="$heatmaps_enabled_server_side",ke="$exception_capture_enabled_server_side",Se="$web_vitals_enabled_server_side",xe="$dead_clicks_enabled_server_side",Ee="$web_vitals_allowed_metrics",Ce="$session_recording_enabled_server_side",Pe="$console_log_recording_enabled_server_side",Te="$session_recording_network_payload_capture",$e="$session_recording_masking",Le="$session_recording_canvas_recording",Ie="$replay_sample_rate",Oe="$replay_minimum_duration",Re="$replay_script_config",Me="$sesid",Fe="$session_is_sampled",Ae="$session_recording_url_trigger_activated_session",je="$session_recording_event_trigger_activated_session",Ne="$enabled_feature_flags",De="$early_access_features",Be="$feature_flag_details",qe="$stored_person_properties",He="$stored_group_properties",Ue="$surveys",Ge="$surveys_activated",We="$flag_call_reported",ze="$user_state",Ve="$client_session_props",Qe="$capture_rate_limit",Je="$initial_campaign_params",Ke="$initial_referrer_info",Xe="$initial_person_info",Ye="$epp",Ze="__POSTHOG_TOOLBAR__",et="$posthog_cookieless",tt=[_e,me,"__cmpns",be,Ce,we,Me,Ne,ze,De,Be,He,qe,Ue,We,Ve,Qe,Je,Ke,Ye]
function nt(e){var t
return e instanceof Element&&(e.id===Ze||!(null===(t=e.closest)||void 0===t||!t.call(e,".toolbar-global-fade-container")))}function rt(e){return!!e&&1===e.nodeType}function it(e,t){return!!e&&!!e.tagName&&e.tagName.toLowerCase()===t.toLowerCase()}function ot(e){return!!e&&3===e.nodeType}function st(e){return!!e&&11===e.nodeType}function at(e){return e?F(e).split(/\s+/):[]}function lt(e){var t=null==_?void 0:_.location.href
return!!(t&&e&&e.some((e=>t.match(e))))}function ct(e){var t=""
switch(typeof e.className){case"string":t=e.className
break
case"object":t=(e.className&&"baseVal"in e.className?e.className.baseVal:null)||e.getAttribute("class")||""
break
default:t=""}return at(t)}function ut(e){return J(e)?null:F(e).split(/(\s+)/).filter((e=>St(e))).join("").replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)}function dt(e){var t=""
return vt(e)&&!gt(e)&&e.childNodes&&e.childNodes.length&&se(e.childNodes,(function(e){var n
ot(e)&&e.textContent&&(t+=null!==(n=ut(e.textContent))&&void 0!==n?n:"")})),F(t)}function ft(e){return W(e.target)?e.srcElement||null:null!==(t=e.target)&&void 0!==t&&t.shadowRoot?e.composedPath()[0]||null:e.target||null
var t}var pt=["a","button","form","input","select","textarea","label"]
function ht(e){var t=e.parentNode
return!(!t||!rt(t))&&t}function vt(e){for(var t=e;t.parentNode&&!it(t,"body");t=t.parentNode){var n=ct(t)
if(M(n,"ph-sensitive")||M(n,"ph-no-capture"))return!1}if(M(ct(e),"ph-include"))return!0
var r=e.type||""
if(z(r))switch(r.toLowerCase()){case"hidden":case"password":return!1}var i=e.name||e.id||""
return!z(i)||!/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g,""))}function gt(e){return!!(it(e,"input")&&!["button","checkbox","submit","reset"].includes(e.type)||it(e,"select")||it(e,"textarea")||"true"===e.getAttribute("contenteditable"))}var _t="(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",mt=new RegExp("^(?:".concat(_t,")$")),bt=new RegExp(_t),yt="\\d{3}-?\\d{2}-?\\d{4}",wt=new RegExp("^(".concat(yt,")$")),kt=new RegExp("(".concat(yt,")"))
function St(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(J(e))return!1
if(z(e)){if(e=F(e),(t?mt:bt).test((e||"").replace(/[- ]/g,"")))return!1
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
return t?q(t)?t:at(t):void 0}class $t{constructor(){this.clicks=[]}isRageClick(e,t,n){var r=this.clicks[this.clicks.length-1]
if(r&&Math.abs(e-r.x)+Math.abs(t-r.y)<30&&n-r.timestamp<1e3){if(this.clicks.push({x:e,y:t,timestamp:n}),3===this.clicks.length)return!0}else this.clicks=[{x:e,y:t,timestamp:n}]
return!1}}var Lt=["localhost","127.0.0.1"],It=e=>{var t=null==S?void 0:S.createElement("a")
return W(t)?null:(t.href=e,t)},Ot=function(e,t){for(var n,r=((e.split("#")[0]||"").split(/\?(.*)/)[1]||"").replace(/^\?+/g,"").split("&"),i=0;i<r.length;i++){var o=r[i].split("=")
if(o[0]===t){n=o
break}}if(!q(n)||n.length<2)return""
var s=n[1]
try{s=decodeURIComponent(s)}catch(e){ne.error("Skipping decoding for malformed query param: "+s)}return s.replace(/\+/g," ")},Rt=function(e,t,n){if(!e||!t||!t.length)return e
for(var r=e.split("#"),i=r[0]||"",o=r[1],s=i.split("?"),a=s[1],l=s[0],c=(a||"").split("&"),u=[],d=0;d<c.length;d++){var f=c[d].split("=")
q(f)&&(t.includes(f[0])?u.push(f[0]+"="+n):u.push(c[d]))}var p=l
return null!=a&&(p+="?"+u.join("&")),null!=o&&(p+="#"+o),p},Mt=function(e,t){var n=e.match(new RegExp(t+"=([^&]*)"))
return n?n[1]:null},Ft=re("[AutoCapture]")
function At(e,t){return t.length>e?t.slice(0,e)+"...":t}function jt(e){if(e.previousElementSibling)return e.previousElementSibling
var t=e
do{t=t.previousSibling}while(t&&!rt(t))
return t}function Nt(e,t){for(var n,r,{e:i,maskAllElementAttributes:o,maskAllText:s,elementAttributeIgnoreList:a,elementsChainAsString:l}=t,c=[e],u=e;u.parentNode&&!it(u,"body");)st(u.parentNode)?(c.push(u.parentNode.host),u=u.parentNode.host):(c.push(u.parentNode),u=u.parentNode)
var d,f=[],p={},h=!1,v=!1
if(se(c,(e=>{var t=vt(e)
"a"===e.tagName.toLowerCase()&&(h=e.getAttribute("href"),h=t&&h&&St(h)&&h),M(ct(e),"ph-no-capture")&&(v=!0),f.push(function(e,t,n,r){var i=e.tagName.toLowerCase(),o={tag_name:i}
pt.indexOf(i)>-1&&!n&&("a"===i.toLowerCase()||"button"===i.toLowerCase()?o.$el_text=At(1024,xt(e)):o.$el_text=At(1024,dt(e)))
var s=ct(e)
s.length>0&&(o.classes=s.filter((function(e){return""!==e}))),se(e.attributes,(function(n){var i
if((!gt(e)||-1!==["name","id","class","aria-label"].indexOf(n.name))&&(null==r||!r.includes(n.name))&&!t&&St(n.value)&&(i=n.name,!z(i)||"_ngcontent"!==i.substring(0,10)&&"_nghost"!==i.substring(0,7))){var s=n.value
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
b&&y&&b!==y&&(d=h)}return{props:ae({$event_type:i.type,$ce_version:1},l?{}:{$elements:f},{$elements_chain:Ct(f)},null!==(n=f[0])&&void 0!==n&&n.$el_text?{$el_text:null===(r=f[0])||void 0===r?void 0:r.$el_text}:{},d&&"click"===i.type?{$external_click_url:d}:{},p)}}class Dt{constructor(e){h(this,"_initialized",!1),h(this,"_isDisabledServerSide",null),h(this,"rageclicks",new $t),h(this,"_elementsChainAsString",!1),this.instance=e,this._elementSelectors=null}get config(){var e,t,n=U(this.instance.config.autocapture)?this.instance.config.autocapture:{}
return n.url_allowlist=null===(e=n.url_allowlist)||void 0===e?void 0:e.map((e=>new RegExp(e))),n.url_ignorelist=null===(t=n.url_ignorelist)||void 0===t?void 0:t.map((e=>new RegExp(e))),n}_addDomEventHandlers(){if(this.isBrowserSupported()){if(_&&S){var e=e=>{e=e||(null==_?void 0:_.event)
try{this._captureEvent(e)}catch(e){Ft.error("Failed to capture event",e)}}
if(ge(S,"submit",e,{capture:!0}),ge(S,"change",e,{capture:!0}),ge(S,"click",e,{capture:!0}),this.config.capture_copied_text){var t=e=>{e=e||(null==_?void 0:_.event),this._captureEvent(e,I)}
ge(S,"copy",t,{capture:!0}),ge(S,"cut",t,{capture:!0})}}}else Ft.info("Disabling Automatic Event Collection because this browser is not supported")}startIfEnabled(){this.isEnabled&&!this._initialized&&(this._addDomEventHandlers(),this._initialized=!0)}onRemoteConfig(e){e.elementsChainAsString&&(this._elementsChainAsString=e.elementsChainAsString),this.instance.persistence&&this.instance.persistence.register({[ye]:!!e.autocapture_opt_out}),this._isDisabledServerSide=!!e.autocapture_opt_out,this.startIfEnabled()}setElementSelectors(e){this._elementSelectors=e}getElementSelectors(e){var t,n=[]
return null===(t=this._elementSelectors)||void 0===t||t.forEach((t=>{var r=null==S?void 0:S.querySelectorAll(t)
null==r||r.forEach((r=>{e===r&&n.push(t)}))})),n}get isEnabled(){var e,t,n=null===(e=this.instance.persistence)||void 0===e?void 0:e.props[ye],r=this._isDisabledServerSide
if(Q(r)&&!X(n)&&!this.instance.config.advanced_disable_decide)return!1
var i=null!==(t=this._isDisabledServerSide)&&void 0!==t?t:!!n
return!!this.instance.config.autocapture&&!i}_captureEvent(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$autocapture"
if(this.isEnabled){var n,r=ft(e)
ot(r)&&(r=r.parentNode||null),"$autocapture"===t&&"click"===e.type&&e instanceof MouseEvent&&this.instance.config.rageclick&&null!==(n=this.rageclicks)&&void 0!==n&&n.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._captureEvent(e,"$rageclick")
var i=t===I
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
if(W(n))return!0
var r=function(e){if(n.some((t=>e.tagName.toLowerCase()===t)))return{v:!0}}
for(var i of e){var o=r(i)
if("object"==typeof o)return o.v}return!1}(a,n))return!1
if(!function(e,t){var n=null==t?void 0:t.css_selector_allowlist
if(W(n))return!0
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
if(a&&a.length>0&&(o.$element_selectors=a),t===I){var l,c=ut(null==_||null===(l=_.getSelection())||void 0===l?void 0:l.toString()),u=e.type||"clipboard"
if(!c)return!1
o.$selected_content=c,o.$copy_type=u}return this.instance.capture(t,o),!0}}}isBrowserSupported(){return H(null==S?void 0:S.querySelectorAll)}}Math.trunc||(Math.trunc=function(e){return e<0?Math.ceil(e):Math.floor(e)}),Number.isInteger||(Number.isInteger=function(e){return K(e)&&isFinite(e)&&Math.floor(e)===e})
var Bt="0123456789abcdef"
class qt{constructor(e){if(this.bytes=e,16!==e.length)throw new TypeError("not 128-bit length")}static fromFieldsV7(e,t,n,r){if(!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(n)||!Number.isInteger(r)||e<0||t<0||n<0||r<0||e>0xffffffffffff||t>4095||n>1073741823||r>4294967295)throw new RangeError("invalid field value")
var i=new Uint8Array(16)
return i[0]=e/Math.pow(2,40),i[1]=e/Math.pow(2,32),i[2]=e/Math.pow(2,24),i[3]=e/Math.pow(2,16),i[4]=e/Math.pow(2,8),i[5]=e,i[6]=112|t>>>8,i[7]=t,i[8]=128|n>>>24,i[9]=n>>>16,i[10]=n>>>8,i[11]=n,i[12]=r>>>24,i[13]=r>>>16,i[14]=r>>>8,i[15]=r,new qt(i)}toString(){for(var e="",t=0;t<this.bytes.length;t++)e=e+Bt.charAt(this.bytes[t]>>>4)+Bt.charAt(15&this.bytes[t]),3!==t&&5!==t&&7!==t&&9!==t||(e+="-")
if(36!==e.length)throw new Error("Invalid UUIDv7 was generated")
return e}clone(){return new qt(this.bytes.slice(0))}equals(e){return 0===this.compareTo(e)}compareTo(e){for(var t=0;t<16;t++){var n=this.bytes[t]-e.bytes[t]
if(0!==n)return Math.sign(n)}return 0}}class Ht{constructor(){h(this,"timestamp",0),h(this,"counter",0),h(this,"random",new Wt)}generate(){var e=this.generateOrAbort()
if(W(e)){this.timestamp=0
var t=this.generateOrAbort()
if(W(t))throw new Error("Could not generate UUID after timestamp reset")
return t}return e}generateOrAbort(){var e=Date.now()
if(e>this.timestamp)this.timestamp=e,this.resetCounter()
else{if(!(e+1e4>this.timestamp))return
this.counter++,this.counter>4398046511103&&(this.timestamp++,this.resetCounter())}return qt.fromFieldsV7(this.timestamp,Math.trunc(this.counter/Math.pow(2,30)),this.counter&Math.pow(2,30)-1,this.random.nextUint32())}resetCounter(){this.counter=1024*this.random.nextUint32()+(1023&this.random.nextUint32())}}var Ut,Gt=e=>{if("undefined"!=typeof UUIDV7_DENY_WEAK_RNG&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available")
for(var t=0;t<e.length;t++)e[t]=65536*Math.trunc(65536*Math.random())+Math.trunc(65536*Math.random())
return e}
_&&!W(_.crypto)&&crypto.getRandomValues&&(Gt=e=>crypto.getRandomValues(e))
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
return c.length>3686.4&&ne.warn("cookieStore warning: large cookie, len="+c.length),S.cookie=c,c}catch(e){return}},remove:function(e,t){try{Xt.set(e,"",-1,t)}catch(e){return}}},Yt=null,Zt={is_supported:function(){if(!Q(Yt))return Yt
var e=!0
if(W(_))e=!1
else try{var t="__mplssupport__"
Zt.set(t,"xyz"),'"xyz"'!==Zt.get(t)&&(e=!1),Zt.remove(t)}catch(t){e=!1}return e||ne.error("localStorage unsupported; falling back to cookie store"),Yt=e,e},error:function(e){ne.error("localStorage error: "+e)},get:function(e){try{return null==_?void 0:_.localStorage.getItem(e)}catch(e){Zt.error(e)}return null},parse:function(e){try{return JSON.parse(Zt.get(e))||{}}catch(e){}return null},set:function(e,t){try{null==_||_.localStorage.setItem(e,JSON.stringify(t))}catch(e){Zt.error(e)}},remove:function(e){try{null==_||_.localStorage.removeItem(e)}catch(e){Zt.error(e)}}},en=["distinct_id",Me,Fe,Ye,Xe],tn=p(p({},Zt),{},{parse:function(e){try{var t={}
try{t=Xt.parse(e)||{}}catch(e){}var n=ae(t,JSON.parse(Zt.get(e)||"{}"))
return Zt.set(e,n),n}catch(e){}return null},set:function(e,t,n,r,i,o){try{Zt.set(e,t,void 0,void 0,o)
var s={}
en.forEach((e=>{t[e]&&(s[e]=t[e])})),Object.keys(s).length&&Xt.set(e,s,n,r,i,o)}catch(e){Zt.error(e)}},remove:function(e,t){try{null==_||_.localStorage.removeItem(e),Xt.remove(e,t)}catch(e){Zt.error(e)}}}),nn={},rn={is_supported:function(){return!0},error:function(e){ne.error("memoryStorage error: "+e)},get:function(e){return nn[e]||null},parse:function(e){return nn[e]||null},set:function(e,t){nn[e]=t},remove:function(e){delete nn[e]}},on=null,sn={is_supported:function(){if(!Q(on))return on
if(on=!0,W(_))on=!1
else try{var e="__support__"
sn.set(e,"xyz"),'"xyz"'!==sn.get(e)&&(on=!1),sn.remove(e)}catch(e){on=!1}return on},error:function(e){ne.error("sessionStorage error: ",e)},get:function(e){try{return null==_?void 0:_.sessionStorage.getItem(e)}catch(e){sn.error(e)}return null},parse:function(e){try{return JSON.parse(sn.get(e))||null}catch(e){}return null},set:function(e,t){try{null==_||_.sessionStorage.setItem(e,JSON.stringify(t))}catch(e){sn.error(e)}},remove:function(e){try{null==_||_.sessionStorage.removeItem(e)}catch(e){sn.error(e)}}}
!function(e){e[e.PENDING=-1]="PENDING",e[e.DENIED=0]="DENIED",e[e.GRANTED=1]="GRANTED"}(Kt||(Kt={}))
class an{constructor(e){this.instance=e}get config(){return this.instance.config}get consent(){return this.getDnt()?Kt.DENIED:this.storedConsent}isOptedOut(){return this.consent===Kt.DENIED||this.consent===Kt.PENDING&&this.config.opt_out_capturing_by_default}isOptedIn(){return!this.isOptedOut()}optInOut(e){this.storage.set(this.storageKey,e?1:0,this.config.cookie_expiration,this.config.cross_subdomain_cookie,this.config.secure_cookie)}reset(){this.storage.remove(this.storageKey,this.config.cross_subdomain_cookie)}get storageKey(){var{token:e,opt_out_capturing_cookie_prefix:t}=this.instance.config
return(t||"__ph_opt_in_out_")+e}get storedConsent(){var e=this.storage.get(this.storageKey)
return"1"===e?Kt.GRANTED:"0"===e?Kt.DENIED:Kt.PENDING}get storage(){if(!this._storage){var e=this.config.opt_out_capturing_persistence_type
this._storage="localStorage"===e?Zt:Xt
var t="localStorage"===e?Xt:Zt
t.get(this.storageKey)&&(this._storage.get(this.storageKey)||this.optInOut("1"===t.get(this.storageKey)),t.remove(this.storageKey,this.config.cross_subdomain_cookie))}return this._storage}getDnt(){return!!this.config.respect_dnt&&!!ve([null==k?void 0:k.doNotTrack,null==k?void 0:k.msDoNotTrack,L.doNotTrack],(e=>M([!0,1,"1","yes"],e)))}}var ln=re("[Dead Clicks]"),cn=()=>!0,un=e=>{var t,n=!(null===(t=e.instance.persistence)||void 0===t||!t.get_property(xe)),r=e.instance.config.capture_dead_clicks
return X(r)?r:n}
class dn{get lazyLoadedDeadClicksAutocapture(){return this._lazyLoadedDeadClicksAutocapture}constructor(e,t,n){this.instance=e,this.isEnabled=t,this.onCapture=n,this.startIfEnabled()}onRemoteConfig(e){this.instance.persistence&&this.instance.persistence.register({[xe]:null==e?void 0:e.captureDeadClicks}),this.startIfEnabled()}startIfEnabled(){this.isEnabled(this)&&this.loadScript((()=>{this.start()}))}loadScript(e){var t,n,r
null!==(t=L.__PosthogExtensions__)&&void 0!==t&&t.initDeadClicksAutocapture&&e(),null===(n=L.__PosthogExtensions__)||void 0===n||null===(r=n.loadExternalDependency)||void 0===r||r.call(n,this.instance,"dead-clicks-autocapture",(t=>{t?ln.error("failed to load script",t):e()}))}start(){var e
if(S){if(!this._lazyLoadedDeadClicksAutocapture&&null!==(e=L.__PosthogExtensions__)&&void 0!==e&&e.initDeadClicksAutocapture){var t=U(this.instance.config.capture_dead_clicks)?this.instance.config.capture_dead_clicks:{}
t.__onCapture=this.onCapture,this._lazyLoadedDeadClicksAutocapture=L.__PosthogExtensions__.initDeadClicksAutocapture(this.instance,t),this._lazyLoadedDeadClicksAutocapture.start(S),ln.info("starting...")}}else ln.error("`document` not found. Cannot start.")}stop(){this._lazyLoadedDeadClicksAutocapture&&(this._lazyLoadedDeadClicksAutocapture.stop(),this._lazyLoadedDeadClicksAutocapture=void 0,ln.info("stopping..."))}}var fn=re("[ExceptionAutocapture]")
class pn{constructor(e){var t
h(this,"startCapturing",(()=>{var e
if(_&&this.isEnabled&&null!==(e=L.__PosthogExtensions__)&&void 0!==e&&e.errorWrappingFunctions){var t=L.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,n=L.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,r=L.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError
try{!this.unwrapOnError&&this.config.capture_unhandled_errors&&(this.unwrapOnError=t(this.captureException.bind(this))),!this.unwrapUnhandledRejection&&this.config.capture_unhandled_rejections&&(this.unwrapUnhandledRejection=n(this.captureException.bind(this))),!this.unwrapConsoleError&&this.config.capture_console_errors&&(this.unwrapConsoleError=r(this.captureException.bind(this)))}catch(e){fn.error("failed to start",e),this.stopCapturing()}}})),this.instance=e,this.remoteEnabled=!(null===(t=this.instance.persistence)||void 0===t||!t.props[ke]),this.config=this.requiredConfig(),this.startIfEnabled()}requiredConfig(){var e=this.instance.config.capture_exceptions,t={capture_unhandled_errors:!1,capture_unhandled_rejections:!1,capture_console_errors:!1}
return U(e)?t=p(p({},t),e):(W(e)?this.remoteEnabled:e)&&(t=p(p({},t),{},{capture_unhandled_errors:!0,capture_unhandled_rejections:!0})),t}get isEnabled(){return this.config.capture_console_errors||this.config.capture_unhandled_errors||this.config.capture_unhandled_rejections}startIfEnabled(){this.isEnabled&&(fn.info("enabled"),this.loadScript(this.startCapturing))}loadScript(e){var t,n,r
null!==(t=L.__PosthogExtensions__)&&void 0!==t&&t.errorWrappingFunctions&&e(),null===(n=L.__PosthogExtensions__)||void 0===n||null===(r=n.loadExternalDependency)||void 0===r||r.call(n,this.instance,"exception-autocapture",(t=>{if(t)return fn.error("failed to load script",t)
e()}))}stopCapturing(){var e,t,n
null===(e=this.unwrapOnError)||void 0===e||e.call(this),this.unwrapOnError=void 0,null===(t=this.unwrapUnhandledRejection)||void 0===t||t.call(this),this.unwrapUnhandledRejection=void 0,null===(n=this.unwrapConsoleError)||void 0===n||n.call(this),this.unwrapConsoleError=void 0}onRemoteConfig(e){var t=e.autocaptureExceptions
this.remoteEnabled=!!t||!1,this.config=this.requiredConfig(),this.instance.persistence&&this.instance.persistence.register({[ke]:this.remoteEnabled}),this.startIfEnabled()}captureException(e){var t=this.instance.requestRouter.endpointFor("ui")
e.$exception_personURL="".concat(t,"/project/").concat(this.instance.config.token,"/person/").concat(this.instance.get_distinct_id()),this.instance.exceptions.sendExceptionEvent(e)}}function hn(e){return!W(Event)&&vn(e,Event)}function vn(e,t){try{return e instanceof t}catch(e){return!1}}function gn(e,t){return Object.prototype.toString.call(e)==="[object ".concat(t,"]")}function _n(e){return gn(e,"DOMError")}var mn=/\(error: (.*)\)/,bn="?"
function yn(e,t,n,r){var i={platform:"web:javascript",filename:e,function:"<anonymous>"===t?bn:t,in_app:!0}
return W(n)||(i.lineno=n),W(r)||(i.colno=r),i}var wn=/^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,kn=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,Sn=/\((\S*)(?::(\d+))(?::(\d+))\)/,xn=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,En=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,Cn=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
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
l.length&&(a.stacktrace={frames:l,type:"raw"})}return{$exception_list:[a],$exception_level:"error"}}function jn(e){return z(e)&&!V(e)&&R.indexOf(e)>=0}function Nn(e,t){var{error:n,event:r}=e,i={$exception_list:[]},o=n||r
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
if(W(n)&&z(r)){var u="Error",d=r,f=r.match(On)
return f&&(u=f[1],d=f[2]),An(d,p(p({},t),{},{overrideExceptionType:u,defaultExceptionMessage:d}))}return An(o,t)}function Dn(e){var t,n
return(null===(t=JSON.stringify(e,(n=[],function(e,t){if(U(t)){for(;n.length>0&&n[n.length-1]!==this;)n.pop()
return n.includes(t)?"[Circular]":(n.push(t),t)}return t})))||void 0===t?void 0:t.length)||0}function Bn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6606028.8
if(e.size>=t&&e.data.length>1){var n=Math.floor(e.data.length/2),r=e.data.slice(0,n),i=e.data.slice(n)
return[Bn({size:Dn(r),data:r,sessionId:e.sessionId,windowId:e.windowId}),Bn({size:Dn(i),data:i,sessionId:e.sessionId,windowId:e.windowId})].flatMap((e=>e))}return[e]}var qn=(e=>(e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin",e))(qn||{}),Hn=(e=>(e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration",e[e.Selection=14]="Selection",e[e.AdoptedStyleSheet=15]="AdoptedStyleSheet",e[e.CustomElement=16]="CustomElement",e))(Hn||{}),Un="[SessionRecording]",Gn="redacted",Wn={initiatorTypes:["audio","beacon","body","css","early-hint","embed","fetch","frame","iframe","icon","image","img","input","link","navigation","object","ping","script","track","video","xmlhttprequest"],maskRequestFn:e=>e,recordHeaders:!1,recordBody:!1,recordInitialRequests:!1,recordPerformance:!1,performanceEntryTypeToObserve:["first-input","navigation","paint","resource"],payloadSizeLimitBytes:1e6,payloadHostDenyList:[".lr-ingest.io",".ingest.sentry.io",".clarity.ms","analytics.google.com"]},zn=["authorization","x-forwarded-for","authorization","cookie","set-cookie","x-api-key","x-real-ip","remote-addr","forwarded","proxy-authorization","x-csrf-token","x-csrftoken","x-xsrf-token"],Vn=["password","secret","passwd","api_key","apikey","auth","credentials","mysql_pwd","privatekey","private_key","token"],Qn=["/s/","/e/","/i/"]
function Jn(e,t,n,r){if(J(e))return e
var i=(null==t?void 0:t["content-length"])||function(e){return new Blob([e]).size}(e)
return z(i)&&(i=parseInt(i)),i>n?Un+" ".concat(r," body too large to record (").concat(i," bytes)"):e}function Kn(e,t){if(J(e))return e
var n=e
return St(n,!1)||(n=Un+" "+t+" body "+Gn),se(Vn,(e=>{var r,i
null!==(r=n)&&void 0!==r&&r.length&&-1!==(null===(i=n)||void 0===i?void 0:i.indexOf(e))&&(n=Un+" "+t+" body "+Gn+" as might contain: "+e)})),n}var Xn=(e,t)=>{var n,r,i,o={payloadSizeLimitBytes:Wn.payloadSizeLimitBytes,performanceEntryTypeToObserve:[...Wn.performanceEntryTypeToObserve],payloadHostDenyList:[...t.payloadHostDenyList||[],...Wn.payloadHostDenyList]},s=!1!==e.session_recording.recordHeaders&&t.recordHeaders,a=!1!==e.session_recording.recordBody&&t.recordBody,l=!1!==e.capture_performance&&t.recordPerformance,c=(n=o,i=Math.min(1e6,null!==(r=n.payloadSizeLimitBytes)&&void 0!==r?r:1e6),e=>(null!=e&&e.requestBody&&(e.requestBody=Jn(e.requestBody,e.requestHeaders,i,"Request")),null!=e&&e.responseBody&&(e.responseBody=Jn(e.responseBody,e.responseHeaders,i,"Response")),e)),u=t=>{return c(((e,t)=>{var n,r=It(e.name),i=0===t.indexOf("http")?null===(n=It(t))||void 0===n?void 0:n.pathname:t
"/"===i&&(i="")
var o=null==r?void 0:r.pathname.replace(i||"","")
if(!(r&&o&&Qn.some((e=>0===o.indexOf(e)))))return e})((r=(n=t).requestHeaders,J(r)||se(Object.keys(null!=r?r:{}),(e=>{zn.includes(e.toLowerCase())&&(r[e]=Gn)})),n),e.api_host))
var n,r},d=H(e.session_recording.maskNetworkRequestFn)
return d&&H(e.session_recording.maskCapturedNetworkRequestFn)&&ne.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."),d&&(e.session_recording.maskCapturedNetworkRequestFn=t=>{var n=e.session_recording.maskNetworkRequestFn({url:t.name})
return p(p({},t),{},{name:null==n?void 0:n.url})}),o.maskRequestFn=H(e.session_recording.maskCapturedNetworkRequestFn)?t=>{var n,r,i,o=u(t)
return o&&null!==(n=null===(r=(i=e.session_recording).maskCapturedNetworkRequestFn)||void 0===r?void 0:r.call(i,o))&&void 0!==n?n:void 0}:e=>function(e){if(!W(e))return e.requestBody=Kn(e.requestBody,"Request"),e.responseBody=Kn(e.responseBody,"Response"),e}(u(e)),p(p(p({},Wn),o),{},{recordHeaders:s,recordBody:a,recordPerformance:l,recordInitialRequests:l})}
function Yn(e,t,n,r,i){return t>n&&(ne.warn("min cannot be greater than max."),t=n),K(e)?e>n?(r&&ne.warn(r+" cannot be  greater than max: "+n+". Using max value instead."),n):e<t?(r&&ne.warn(r+" cannot be less than min: "+t+". Using min value instead."),t):e:(r&&ne.warn(r+" must be a number. using max or fallback. max: "+n+", fallback: "+i),Yn(i||n,t,n,r))}class Zn{constructor(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
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
return X(e)?e:null}get sessionDuration(){var e,t,n=null===(e=this.buffer)||void 0===e?void 0:e.data[(null===(t=this.buffer)||void 0===t?void 0:t.data.length)-1],{sessionStartTimestamp:r}=this.sessionManager.checkAndGetSessionAndWindowId(!0)
return n?n.timestamp-r:null}get isRecordingEnabled(){var e=!!this.instance.get_property(Ce),t=!this.instance.config.disable_session_recording
return _&&e&&t}get isConsoleLogCaptureEnabled(){var e=!!this.instance.get_property(Pe),t=this.instance.config.enable_recording_console_log
return null!=t?t:e}get canvasRecording(){var e,t,n,r,i,o,s=this.instance.config.session_recording.captureCanvas,a=this.instance.get_property(Le),l=null!==(e=null!==(t=null==s?void 0:s.recordCanvas)&&void 0!==t?t:null==a?void 0:a.enabled)&&void 0!==e&&e,c=null!==(n=null!==(r=null==s?void 0:s.canvasFps)&&void 0!==r?r:null==a?void 0:a.fps)&&void 0!==n?n:4,u=null!==(i=null!==(o=null==s?void 0:s.canvasQuality)&&void 0!==o?o:null==a?void 0:a.quality)&&void 0!==i?i:.4
if("string"==typeof u){var d=parseFloat(u)
u=isNaN(d)?.4:d}return{enabled:l,fps:Yn(c,0,12,"canvas recording fps",4),quality:Yn(u,0,1,"canvas recording quality",.4)}}get networkPayloadCapture(){var e,t,n=this.instance.get_property(Te),r={recordHeaders:null===(e=this.instance.config.session_recording)||void 0===e?void 0:e.recordHeaders,recordBody:null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.recordBody},i=(null==r?void 0:r.recordHeaders)||(null==n?void 0:n.recordHeaders),o=(null==r?void 0:r.recordBody)||(null==n?void 0:n.recordBody),s=U(this.instance.config.capture_performance)?this.instance.config.capture_performance.network_timing:this.instance.config.capture_performance,a=!!(X(s)?s:null==n?void 0:n.capturePerformance)
return i||o||a?{recordHeaders:i,recordBody:o,recordPerformance:a}:void 0}get masking(){var e,t,n,r,i,o,s=this.instance.get_property($e),a={maskAllInputs:null===(e=this.instance.config.session_recording)||void 0===e?void 0:e.maskAllInputs,maskTextSelector:null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.maskTextSelector,blockSelector:null===(n=this.instance.config.session_recording)||void 0===n?void 0:n.blockSelector},l=null!==(r=null==a?void 0:a.maskAllInputs)&&void 0!==r?r:null==s?void 0:s.maskAllInputs,c=null!==(i=null==a?void 0:a.maskTextSelector)&&void 0!==i?i:null==s?void 0:s.maskTextSelector,u=null!==(o=null==a?void 0:a.blockSelector)&&void 0!==o?o:null==s?void 0:s.blockSelector
return W(l)&&W(c)&&W(u)?void 0:{maskAllInputs:null==l||l,maskTextSelector:c,blockSelector:u}}get sampleRate(){var e=this.instance.get_property(Ie)
return K(e)?e:null}get minimumDuration(){var e=this.instance.get_property(Oe)
return K(e)?e:null}get status(){return this.receivedDecide?this.isRecordingEnabled?!1===this.isSampled?"disabled":this._urlBlocked?"paused":J(this._linkedFlag)||this._linkedFlagSeen?"trigger_pending"===this.triggerStatus?"buffering":X(this.isSampled)?this.isSampled?"sampled":"disabled":"active":"buffering":"disabled":"buffering"}get urlTriggerStatus(){var e
return 0===this._urlTriggers.length?"trigger_disabled":(null===(e=this.instance)||void 0===e?void 0:e.get_property(Ae))===this.sessionId?"trigger_activated":"trigger_pending"}get eventTriggerStatus(){var e
return 0===this._eventTriggers.length?"trigger_disabled":(null===(e=this.instance)||void 0===e?void 0:e.get_property(je))===this.sessionId?"trigger_activated":"trigger_pending"}get triggerStatus(){var e="trigger_activated"===this.eventTriggerStatus||"trigger_activated"===this.urlTriggerStatus,t="trigger_pending"===this.eventTriggerStatus||"trigger_pending"===this.urlTriggerStatus
return e?"trigger_activated":t?"trigger_pending":"trigger_disabled"}constructor(e){if(h(this,"queuedRRWebEvents",[]),h(this,"isIdle","unknown"),h(this,"_linkedFlagSeen",!1),h(this,"_lastActivityTimestamp",Date.now()),h(this,"_linkedFlag",null),h(this,"_removePageViewCaptureHook",void 0),h(this,"_onSessionIdListener",void 0),h(this,"_persistDecideOnSessionListener",void 0),h(this,"_samplingSessionListener",void 0),h(this,"_urlTriggers",[]),h(this,"_urlBlocklist",[]),h(this,"_urlBlocked",!1),h(this,"_eventTriggers",[]),h(this,"_removeEventTriggerCaptureHook",void 0),h(this,"_forceAllowLocalhostNetworkCapture",!1),h(this,"_onBeforeUnload",(()=>{this._flushBuffer()})),h(this,"_onOffline",(()=>{this._tryAddCustomEvent("browser offline",{})})),h(this,"_onOnline",(()=>{this._tryAddCustomEvent("browser online",{})})),h(this,"_onVisibilityChange",(()=>{if(null!=S&&S.visibilityState){var e="window "+S.visibilityState
this._tryAddCustomEvent(e,{})}})),this.instance=e,this._captureStarted=!1,this._endpoint="/s/",this.stopRrweb=void 0,this.receivedDecide=!1,!this.instance.sessionManager)throw Dr.error("started without valid sessionManager"),new Error(Nr+" started without valid sessionManager. This is a bug.")
if(this.instance.config.__preview_experimental_cookieless_mode)throw new Error(Nr+" cannot be used with __preview_experimental_cookieless_mode.")
var{sessionId:t,windowId:n}=this.sessionManager.checkAndGetSessionAndWindowId()
this.sessionId=t,this.windowId=n,this.buffer=this.clearBuffer(),this.sessionIdleThresholdMilliseconds>=this.sessionManager.sessionTimeoutMs&&Dr.warn("session_idle_threshold_ms (".concat(this.sessionIdleThresholdMilliseconds,") is greater than the session timeout (").concat(this.sessionManager.sessionTimeoutMs,"). Session will never be detected as idle"))}startIfEnabledOrStop(e){this.isRecordingEnabled?(this._startCapture(e),ge(_,"beforeunload",this._onBeforeUnload),ge(_,"offline",this._onOffline),ge(_,"online",this._onOnline),ge(_,"visibilitychange",this._onVisibilityChange),this._setupSampling(),this._addEventTriggerListener(),J(this._removePageViewCaptureHook)&&(this._removePageViewCaptureHook=this.instance.on("eventCaptured",(e=>{try{if("$pageview"===e.event){var t=null!=e&&e.properties.$current_url?this._maskUrl(null==e?void 0:e.properties.$current_url):""
if(!t)return
this._tryAddCustomEvent("$pageview",{href:t})}}catch(e){Dr.error("Could not add $pageview to rrweb session",e)}}))),this._onSessionIdListener||(this._onSessionIdListener=this.sessionManager.onSessionId(((e,t,n)=>{var r,i,o,s
n&&(this._tryAddCustomEvent("$session_id_change",{sessionId:e,windowId:t,changeReason:n}),null===(r=this.instance)||void 0===r||null===(i=r.persistence)||void 0===i||i.unregister(je),null===(o=this.instance)||void 0===o||null===(s=o.persistence)||void 0===s||s.unregister(Ae))})))):this.stopRecording()}stopRecording(){var e,t,n,r
this._captureStarted&&this.stopRrweb&&(this.stopRrweb(),this.stopRrweb=void 0,this._captureStarted=!1,null==_||_.removeEventListener("beforeunload",this._onBeforeUnload),null==_||_.removeEventListener("offline",this._onOffline),null==_||_.removeEventListener("online",this._onOnline),null==_||_.removeEventListener("visibilitychange",this._onVisibilityChange),this.clearBuffer(),clearInterval(this._fullSnapshotTimer),null===(e=this._removePageViewCaptureHook)||void 0===e||e.call(this),this._removePageViewCaptureHook=void 0,null===(t=this._removeEventTriggerCaptureHook)||void 0===t||t.call(this),this._removeEventTriggerCaptureHook=void 0,null===(n=this._onSessionIdListener)||void 0===n||n.call(this),this._onSessionIdListener=void 0,null===(r=this._samplingSessionListener)||void 0===r||r.call(this),this._samplingSessionListener=void 0,Dr.info("stopped"))}_resetSampling(){var e
null===(e=this.instance.persistence)||void 0===e||e.unregister(Fe)}makeSamplingDecision(e){var t,n=this.sessionId!==e,r=this.sampleRate
if(K(r)){var i=this.isSampled,o=n||!X(i),s=o?function(e,t){return function(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0
return Math.abs(t)}(e)%100<Yn(100*t,0,100)}(e,r):i
o&&(s?this._reportStarted("sampled"):Dr.warn("Sample rate (".concat(r,") has determined that this sessionId (").concat(e,") will not be sent to the server.")),this._tryAddCustomEvent("samplingDecisionMade",{sampleRate:r,isSampled:s})),null===(t=this.instance.persistence)||void 0===t||t.register({[Fe]:s})}else this._resetSampling()}onRemoteConfig(e){var t,n,r,i,o,s
if(this._tryAddCustomEvent("$remote_config_received",e),this._persistRemoteConfig(e),this._linkedFlag=(null===(t=e.sessionRecording)||void 0===t?void 0:t.linkedFlag)||null,null!==(n=e.sessionRecording)&&void 0!==n&&n.endpoint&&(this._endpoint=null===(s=e.sessionRecording)||void 0===s?void 0:s.endpoint),this._setupSampling(),!J(this._linkedFlag)&&!this._linkedFlagSeen){var a=z(this._linkedFlag)?this._linkedFlag:this._linkedFlag.flag,l=z(this._linkedFlag)?null:this._linkedFlag.variant
this.instance.onFeatureFlags(((e,t)=>{var n=U(t)&&a in t,r=l?t[a]===l:n
r&&this._reportStarted("linked_flag_matched",{linkedFlag:a,linkedVariant:l}),this._linkedFlagSeen=r}))}null!==(r=e.sessionRecording)&&void 0!==r&&r.urlTriggers&&(this._urlTriggers=e.sessionRecording.urlTriggers),null!==(i=e.sessionRecording)&&void 0!==i&&i.urlBlocklist&&(this._urlBlocklist=e.sessionRecording.urlBlocklist),null!==(o=e.sessionRecording)&&void 0!==o&&o.eventTriggers&&(this._eventTriggers=e.sessionRecording.eventTriggers),this.receivedDecide=!0,this.startIfEnabledOrStop()}_setupSampling(){K(this.sampleRate)&&J(this._samplingSessionListener)&&(this._samplingSessionListener=this.sessionManager.onSessionId((e=>{this.makeSamplingDecision(e)})))}_persistRemoteConfig(e){if(this.instance.persistence){var t,n=this.instance.persistence,r=()=>{var t,r,i,o,s,a,l,c,u,d=null===(t=e.sessionRecording)||void 0===t?void 0:t.sampleRate,f=J(d)?null:parseFloat(d)
J(f)&&this._resetSampling()
var h=null===(r=e.sessionRecording)||void 0===r?void 0:r.minimumDurationMilliseconds
n.register({[Ce]:!!e.sessionRecording,[Pe]:null===(i=e.sessionRecording)||void 0===i?void 0:i.consoleLogRecordingEnabled,[Te]:p({capturePerformance:e.capturePerformance},null===(o=e.sessionRecording)||void 0===o?void 0:o.networkPayloadCapture),[$e]:null===(s=e.sessionRecording)||void 0===s?void 0:s.masking,[Le]:{enabled:null===(a=e.sessionRecording)||void 0===a?void 0:a.recordCanvas,fps:null===(l=e.sessionRecording)||void 0===l?void 0:l.canvasFps,quality:null===(c=e.sessionRecording)||void 0===c?void 0:c.canvasQuality},[Ie]:f,[Oe]:W(h)?null:h,[Re]:null===(u=e.sessionRecording)||void 0===u?void 0:u.scriptConfig})}
r(),null===(t=this._persistDecideOnSessionListener)||void 0===t||t.call(this),this._persistDecideOnSessionListener=this.sessionManager.onSessionId(r)}}log(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log"
null===(t=this.instance.sessionRecording)||void 0===t||t.onRRwebEmit({type:6,data:{plugin:"rrweb/console@1",payload:{level:n,trace:[],payload:[JSON.stringify(e)]}},timestamp:Date.now()})}_startCapture(e){var t,n
W(Object.assign)||W(Array.from)||(this._captureStarted||this.instance.config.disable_session_recording||this.instance.consent.isOptedOut())||(this._captureStarted=!0,this.sessionManager.checkAndGetSessionAndWindowId(),Br()?this._onScriptLoaded():null===(t=L.__PosthogExtensions__)||void 0===t||null===(n=t.loadExternalDependency)||void 0===n||n.call(t,this.instance,this.scriptName,(e=>{if(e)return Dr.error("could not load recorder",e)
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
this.stopRrweb=l(p({emit:e=>{this.onRRwebEmit(e)},plugins:c},i)),this._lastActivityTimestamp=Date.now(),this.isIdle=X(this.isIdle)?this.isIdle:"unknown",this._tryAddCustomEvent("$session_options",{sessionRecordingOptions:i,activePlugins:c.map((e=>null==e?void 0:e.name))}),this._tryAddCustomEvent("$posthog_config",{config:this.instance.config})}else Dr.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")}_scheduleFullSnapshot(){if(this._fullSnapshotTimer&&clearInterval(this._fullSnapshotTimer),!0!==this.isIdle){var e=this.fullSnapshotIntervalMillis
e&&(this._fullSnapshotTimer=setInterval((()=>{this._tryTakeFullSnapshot()}),e))}}_gatherRRWebPlugins(){var e,t,n,r,i=[],o=null===(e=L.__PosthogExtensions__)||void 0===e||null===(t=e.rrwebPlugins)||void 0===t?void 0:t.getRecordConsolePlugin
o&&this.isConsoleLogCaptureEnabled&&i.push(o())
var s=null===(n=L.__PosthogExtensions__)||void 0===n||null===(r=n.rrwebPlugins)||void 0===r?void 0:r.getRecordNetworkPlugin
return this.networkPayloadCapture&&H(s)&&(!Lt.includes(location.hostname)||this._forceAllowLocalhostNetworkCapture?i.push(s(Xn(this.instance.config,this.networkPayloadCapture))):Dr.info("NetworkCapture not started because we are on localhost.")),i}onRRwebEmit(e){var t
if(this._processQueuedEvents(),e&&U(e)){if(e.type===qn.Meta){var n=this._maskUrl(e.data.href)
if(this._lastHref=n,!n)return
e.data.href=n}else this._pageViewFallBack()
if(this._checkUrlTriggerConditions(),!this._urlBlocked||function(e){return e.type===qn.Custom&&"recording paused"===e.data.tag}(e)){e.type===qn.FullSnapshot&&this._scheduleFullSnapshot(),e.type===qn.FullSnapshot&&"trigger_pending"===this.triggerStatus&&this.clearBuffer()
var r=this.mutationRateLimiter?this.mutationRateLimiter.throttleMutations(e):e
if(r){var i=function(e){var t=e
if(t&&U(t)&&6===t.type&&U(t.data)&&"rrweb/console@1"===t.data.plugin){t.data.payload.payload.length>10&&(t.data.payload.payload=t.data.payload.payload.slice(0,10),t.data.payload.payload.push("...[truncated]"))
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
var e=this.minimumDuration,t=this.sessionDuration,n=K(t)&&t>=0,r=K(e)&&n&&t<e
return"buffering"===this.status||"paused"===this.status||"disabled"===this.status||r?(this.flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3),this.buffer):(this.buffer.data.length>0&&Bn(this.buffer).forEach((e=>{this._captureSnapshot({$snapshot_bytes:e.size,$snapshot_data:e.data,$session_id:e.sessionId,$window_id:e.windowId,$lib:"web",$lib_version:ee.LIB_VERSION})})),this.clearBuffer())}_captureSnapshotBuffered(e){var t,n=2+((null===(t=this.buffer)||void 0===t?void 0:t.data.length)||0)
!this.isIdle&&(this.buffer.size+e.$snapshot_bytes+n>943718.4||this.buffer.sessionId!==this.sessionId)&&(this.buffer=this._flushBuffer()),this.buffer.size+=e.$snapshot_bytes,this.buffer.data.push(e.$snapshot_data),this.flushBufferTimer||this.isIdle||(this.flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3))}_captureSnapshot(e){this.instance.capture("$snapshot",e,{_url:this.instance.requestRouter.endpointFor("api",this._endpoint),_noTruncate:!0,_batchKey:"recordings",skip_client_rate_limiting:!0})}_checkUrlTriggerConditions(){if(void 0!==_&&_.location.href){var e=_.location.href,t=this._urlBlocked,n=Wr(e,this._urlBlocklist)
n&&!t?this._pauseRecording():!n&&t&&this._resumeRecording(),Wr(e,this._urlTriggers)&&this._activateTrigger("url")}}_activateTrigger(e){var t,n
"trigger_pending"===this.triggerStatus&&(null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n||n.register({["url"===e?Ae:je]:this.sessionId}),this._flushBuffer(),this._reportStarted(e+"_trigger_matched"))}_pauseRecording(){this._urlBlocked||(this._urlBlocked=!0,clearInterval(this._fullSnapshotTimer),Dr.info("recording paused due to URL blocker"),this._tryAddCustomEvent("recording paused",{reason:"url blocker"}))}_resumeRecording(){this._urlBlocked&&(this._urlBlocked=!1,this._tryTakeFullSnapshot(),this._scheduleFullSnapshot(),this._tryAddCustomEvent("recording resumed",{reason:"left blocked url"}),Dr.info("recording resumed"))}_addEventTriggerListener(){0!==this._eventTriggers.length&&J(this._removeEventTriggerCaptureHook)&&(this._removeEventTriggerCaptureHook=this.instance.on("eventCaptured",(e=>{try{this._eventTriggers.includes(e.event)&&this._activateTrigger("event")}catch(e){Dr.error("Could not activate event trigger",e)}})))}overrideLinkedFlag(){this._linkedFlagSeen=!0,this._tryTakeFullSnapshot(),this._reportStarted("linked_flag_overridden")}overrideSampling(){var e
null===(e=this.instance.persistence)||void 0===e||e.register({[Fe]:!0}),this._tryTakeFullSnapshot(),this._reportStarted("sampling_overridden")}overrideTrigger(e){this._activateTrigger(e)}_reportStarted(e,t){this.instance.register_for_session({$session_recording_start_reason:e}),Dr.info(e.replace("_"," "),t),M(["recording_initialized","session_id_changed"],e)||this._tryAddCustomEvent(e,t)}}var Vr=re("[SegmentIntegration]")
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
!J(t)&&H(t)?t(e,this.instance):ei.warn("No toolbar load function found")}loadToolbar(e){var t=!(null==S||!S.getElementById(Ze))
if(!_||t)return!1
var n="custom"===this.instance.requestRouter.region&&this.instance.config.advanced_disable_toolbar_metrics,r=p(p({token:this.instance.config.token},e),{},{apiURL:this.instance.requestRouter.endpointFor("ui")},n?{instrument:!1}:{})
if(_.localStorage.setItem(Zr,JSON.stringify(p(p({},r),{},{source:void 0}))),this.getToolbarState()===Xr.LOADED)this._callLoadToolbar(r)
else if(this.getToolbarState()===Xr.UNINITIALIZED){var i,o
this.setToolbarState(Xr.LOADING),null===(i=L.__PosthogExtensions__)||void 0===i||null===(o=i.loadExternalDependency)||void 0===o||o.call(i,this.instance,"toolbar",(e=>{if(e)return ei.error("[Toolbar] Failed to load",e),void this.setToolbarState(Xr.UNINITIALIZED)
this.setToolbarState(Xr.LOADED),this._callLoadToolbar(r)})),ge(_,"turbolinks:load",(()=>{this.setToolbarState(Xr.UNINITIALIZED),this.loadToolbar(r)}))}return!0}_loadEditor(e){return this.loadToolbar(e)}maybeLoadEditor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
return this.maybeLoadToolbar(e,t,n)}}var ni=re("[TracingHeaders]")
class ri{constructor(e){h(this,"_restoreXHRPatch",void 0),h(this,"_restoreFetchPatch",void 0),h(this,"_startCapturing",(()=>{var e,t,n,r
W(this._restoreXHRPatch)&&(null===(e=L.__PosthogExtensions__)||void 0===e||null===(t=e.tracingHeadersPatchFns)||void 0===t||t._patchXHR(this.instance.sessionManager)),W(this._restoreFetchPatch)&&(null===(n=L.__PosthogExtensions__)||void 0===n||null===(r=n.tracingHeadersPatchFns)||void 0===r||r._patchFetch(this.instance.sessionManager))})),this.instance=e}_loadScript(e){var t,n,r
null!==(t=L.__PosthogExtensions__)&&void 0!==t&&t.tracingHeadersPatchFns&&e(),null===(n=L.__PosthogExtensions__)||void 0===n||null===(r=n.loadExternalDependency)||void 0===r||r.call(n,this.instance,"tracing-headers",(t=>{if(t)return ni.error("failed to load script",t)
e()}))}startIfEnabledOrStop(){var e,t
this.instance.config.__add_tracing_headers?this._loadScript(this._startCapturing):(null===(e=this._restoreXHRPatch)||void 0===e||e.call(this),null===(t=this._restoreFetchPatch)||void 0===t||t.call(this),this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0)}}var ii=re("[Web Vitals]"),oi=9e5
class si{constructor(e){var t
h(this,"_enabledServerSide",!1),h(this,"_initialized",!1),h(this,"buffer",{url:void 0,metrics:[],firstMetricTimestamp:void 0}),h(this,"_flushToCapture",(()=>{clearTimeout(this._delayedFlushTimer),0!==this.buffer.metrics.length&&(this.instance.capture("$web_vitals",this.buffer.metrics.reduce(((e,t)=>p(p({},e),{},{["$web_vitals_".concat(t.name,"_event")]:p({},t),["$web_vitals_".concat(t.name,"_value")]:t.value})),{})),this.buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0})})),h(this,"_addToBuffer",(e=>{var t,n=null===(t=this.instance.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0)
if(W(n))ii.error("Could not read session ID. Dropping metrics!")
else{this.buffer=this.buffer||{url:void 0,metrics:[],firstMetricTimestamp:void 0}
var r=this._currentURL()
W(r)||(J(null==e?void 0:e.name)||J(null==e?void 0:e.value)?ii.error("Invalid metric received",e):this._maxAllowedValue&&e.value>=this._maxAllowedValue?ii.error("Ignoring metric with value >= "+this._maxAllowedValue,e):(this.buffer.url!==r&&(this._flushToCapture(),this._delayedFlushTimer=setTimeout(this._flushToCapture,this.flushToCaptureTimeoutMs)),W(this.buffer.url)&&(this.buffer.url=r),this.buffer.firstMetricTimestamp=W(this.buffer.firstMetricTimestamp)?Date.now():this.buffer.firstMetricTimestamp,e.attribution&&e.attribution.interactionTargetElement&&(e.attribution.interactionTargetElement=void 0),this.buffer.metrics.push(p(p({},e),{},{$current_url:r,$session_id:n.sessionId,$window_id:n.windowId,timestamp:Date.now()})),this.buffer.metrics.length===this.allowedMetrics.length&&this._flushToCapture()))}})),h(this,"_startCapturing",(()=>{var e,t,n,r,i=L.__PosthogExtensions__
W(i)||W(i.postHogWebVitalsCallbacks)||({onLCP:e,onCLS:t,onFCP:n,onINP:r}=i.postHogWebVitalsCallbacks),e&&t&&n&&r?(this.allowedMetrics.indexOf("LCP")>-1&&e(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("CLS")>-1&&t(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("FCP")>-1&&n(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("INP")>-1&&r(this._addToBuffer.bind(this)),this._initialized=!0):ii.error("web vitals callbacks not loaded - not starting")})),this.instance=e,this._enabledServerSide=!(null===(t=this.instance.persistence)||void 0===t||!t.props[Se]),this.startIfEnabled()}get allowedMetrics(){var e,t,n=U(this.instance.config.capture_performance)?null===(e=this.instance.config.capture_performance)||void 0===e?void 0:e.web_vitals_allowed_metrics:void 0
return W(n)?(null===(t=this.instance.persistence)||void 0===t?void 0:t.props[Ee])||["CLS","FCP","INP","LCP"]:n}get flushToCaptureTimeoutMs(){return(U(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals_delayed_flush_ms:void 0)||5e3}get _maxAllowedValue(){var e=U(this.instance.config.capture_performance)&&K(this.instance.config.capture_performance.__web_vitals_max_value)?this.instance.config.capture_performance.__web_vitals_max_value:oi
return 0<e&&e<=6e4?oi:e}get isEnabled(){var e=U(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals:void 0
return X(e)?e:this._enabledServerSide}startIfEnabled(){this.isEnabled&&!this._initialized&&(ii.info("enabled, starting..."),this.loadScript(this._startCapturing))}onRemoteConfig(e){var t=U(e.capturePerformance)&&!!e.capturePerformance.web_vitals,n=U(e.capturePerformance)?e.capturePerformance.web_vitals_allowed_metrics:void 0
this.instance.persistence&&(this.instance.persistence.register({[Se]:t}),this.instance.persistence.register({[Ee]:n})),this._enabledServerSide=t,this.startIfEnabled()}loadScript(e){var t,n,r
null!==(t=L.__PosthogExtensions__)&&void 0!==t&&t.postHogWebVitalsCallbacks&&e(),null===(n=L.__PosthogExtensions__)||void 0===n||null===(r=n.loadExternalDependency)||void 0===r||r.call(n,this.instance,"web-vitals",(t=>{t?ii.error("failed to load script",t):e()}))}_currentURL(){var e=_?_.location.href:void 0
return e||ii.error("Could not determine current URL"),e}}var ai=re("[Heatmaps]")
function li(e){return U(e)&&"clientX"in e&&"clientY"in e&&K(e.clientX)&&K(e.clientY)}class ci{constructor(e){var t
h(this,"rageclicks",new $t),h(this,"_enabledServerSide",!1),h(this,"_initialized",!1),h(this,"_flushInterval",null),this.instance=e,this._enabledServerSide=!(null===(t=this.instance.persistence)||void 0===t||!t.props[we])}get flushIntervalMilliseconds(){var e=5e3
return U(this.instance.config.capture_heatmaps)&&this.instance.config.capture_heatmaps.flush_interval_milliseconds&&(e=this.instance.config.capture_heatmaps.flush_interval_milliseconds),e}get isEnabled(){return W(this.instance.config.capture_heatmaps)?W(this.instance.config.enable_heatmaps)?this._enabledServerSide:this.instance.config.enable_heatmaps:!1!==this.instance.config.capture_heatmaps}startIfEnabled(){if(this.isEnabled){if(this._initialized)return
ai.info("starting..."),this._setupListeners(),this._flushInterval=setInterval(this.flush.bind(this),this.flushIntervalMilliseconds)}else{var e,t
clearInterval(null!==(e=this._flushInterval)&&void 0!==e?e:void 0),null===(t=this.deadClicksCapture)||void 0===t||t.stop(),this.getAndClearBuffer()}}onRemoteConfig(e){var t=!!e.heatmaps
this.instance.persistence&&this.instance.persistence.register({[we]:t}),this._enabledServerSide=t,this.startIfEnabled()}getAndClearBuffer(){var e=this.buffer
return this.buffer=void 0,e}_onDeadClick(e){this._onClick(e.originalEvent,"deadclick")}_setupListeners(){_&&S&&(ge(_,"beforeunload",this.flush.bind(this)),ge(S,"click",(e=>this._onClick(e||(null==_?void 0:_.event))),{capture:!0}),ge(S,"mousemove",(e=>this._onMouseMove(e||(null==_?void 0:_.event))),{capture:!0}),this.deadClicksCapture=new dn(this.instance,cn,this._onDeadClick.bind(this)),this.deadClicksCapture.startIfEnabled(),this._initialized=!0)}_getProperties(e,t){var n=this.instance.scrollManager.scrollY(),r=this.instance.scrollManager.scrollX(),i=this.instance.scrollManager.scrollElement(),o=function(e,t,n){for(var r=e;r&&rt(r)&&!it(r,"body");){if(r===n)return!1
if(M(t,null==_?void 0:_.getComputedStyle(r).position))return!0
r=ht(r)}return!1}(ft(e),["fixed","sticky"],i)
return{x:e.clientX+(o?0:r),y:e.clientY+(o?0:n),target_fixed:o,type:t}}_onClick(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"click"
if(!nt(e.target)&&li(e)){var r=this._getProperties(e,n)
null!==(t=this.rageclicks)&&void 0!==t&&t.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._capture(p(p({},r),{},{type:"rageclick"})),this._capture(r)}}_onMouseMove(e){!nt(e.target)&&li(e)&&(clearTimeout(this._mouseMoveTimeout),this._mouseMoveTimeout=setTimeout((()=>{this._capture(this._getProperties(e,"mousemove"))}),500))}_capture(e){if(_){var t=_.location.href
this.buffer=this.buffer||{},this.buffer[t]||(this.buffer[t]=[]),this.buffer[t].push(e)}}flush(){this.buffer&&!G(this.buffer)&&this.instance.capture("$$heatmap",{$heatmap_data:this.getAndClearBuffer()})}}class ui{constructor(e){this._instance=e}doPageView(e,t){var n,r=this._previousPageViewProperties(e,t)
return this._currentPageview={pathname:null!==(n=null==_?void 0:_.location.pathname)&&void 0!==n?n:"",pageViewId:t,timestamp:e},this._instance.scrollManager.resetContext(),r}doPageLeave(e){var t
return this._previousPageViewProperties(e,null===(t=this._currentPageview)||void 0===t?void 0:t.pageViewId)}doEvent(){var e
return{$pageview_id:null===(e=this._currentPageview)||void 0===e?void 0:e.pageViewId}}_previousPageViewProperties(e,t){var n=this._currentPageview
if(!n)return{$pageview_id:t}
var r={$pageview_id:t,$prev_pageview_id:n.pageViewId},i=this._instance.scrollManager.getContext()
if(i&&!this._instance.config.disable_scroll_properties){var{maxScrollHeight:o,lastScrollY:s,maxScrollY:a,maxContentHeight:l,lastContentY:c,maxContentY:u}=i
if(!(W(o)||W(s)||W(a)||W(l)||W(c)||W(u))){o=Math.ceil(o),s=Math.ceil(s),a=Math.ceil(a),l=Math.ceil(l),c=Math.ceil(c),u=Math.ceil(u)
var d=o<=1?1:Yn(s/o,0,1),f=o<=1?1:Yn(a/o,0,1),p=l<=1?1:Yn(c/l,0,1),h=l<=1?1:Yn(u/l,0,1)
r=ae(r,{$prev_pageview_last_scroll:s,$prev_pageview_last_scroll_percentage:d,$prev_pageview_max_scroll:a,$prev_pageview_max_scroll_percentage:f,$prev_pageview_last_content:c,$prev_pageview_last_content_percentage:p,$prev_pageview_max_content:u,$prev_pageview_max_content_percentage:h})}}return n.pathname&&(r.$prev_pageview_pathname=n.pathname),n.timestamp&&(r.$prev_pageview_duration=(e.getTime()-n.timestamp.getTime())/1e3),r}}class di{constructor(e){this.instance=e}sendExceptionEvent(e){this.instance.capture("$exception",e,{_noTruncate:!0,_batchKey:"exceptionEvent"})}}var fi,pi="Mobile",hi="iOS",vi="Android",gi="Tablet",_i=vi+" "+gi,mi="iPad",bi="Apple",yi=bi+" Watch",wi="Safari",ki="BlackBerry",Si="Samsung",xi=Si+"Browser",Ei=Si+" Internet",Ci="Chrome",Pi=Ci+" OS",Ti=Ci+" "+hi,$i="Internet Explorer",Li=$i+" "+pi,Ii="Opera",Oi=Ii+" Mini",Ri="Edge",Mi="Microsoft "+Ri,Fi="Firefox",Ai=Fi+" "+hi,ji="Nintendo",Ni="PlayStation",Di="Xbox",Bi=vi+" "+pi,qi=pi+" "+wi,Hi="Windows",Ui=Hi+" Phone",Gi="Nokia",Wi="Ouya",zi="Generic",Vi=zi+" "+pi.toLowerCase(),Qi=zi+" "+gi.toLowerCase(),Ji="Konqueror",Ki="(\\d+(\\.\\d+)?)",Xi=new RegExp("Version/"+Ki),Yi=new RegExp(Di,"i"),Zi=new RegExp(Ni+" \\w+","i"),eo=new RegExp(ji+" \\w+","i"),to=new RegExp(ki+"|PlayBook|BB10","i"),no={"NT3.51":"NT 3.11","NT4.0":"NT 4.0","5.0":"2000",5.1:"XP",5.2:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1",6.4:"10","10.0":"10"},ro=function(e,t){return t=t||"",M(e," OPR/")&&M(e,"Mini")?Oi:M(e," OPR/")?Ii:to.test(e)?ki:M(e,"IE"+pi)||M(e,"WPDesktop")?Li:M(e,xi)?Ei:M(e,Ri)||M(e,"Edg/")?Mi:M(e,"FBIOS")?"Facebook "+pi:M(e,"UCWEB")||M(e,"UCBrowser")?"UC Browser":M(e,"CriOS")?Ti:M(e,"CrMo")||M(e,Ci)?Ci:M(e,vi)&&M(e,wi)?Bi:M(e,"FxiOS")?Ai:M(e.toLowerCase(),Ji.toLowerCase())?Ji:((e,t)=>t&&M(t,bi)||function(e){return M(e,wi)&&!M(e,Ci)&&!M(e,vi)}(e))(e,t)?M(e,pi)?qi:wi:M(e,Fi)?Fi:M(e,"MSIE")||M(e,"Trident/")?$i:M(e,"Gecko")?Fi:""},io={[Li]:[new RegExp("rv:"+Ki)],[Mi]:[new RegExp(Ri+"?\\/"+Ki)],[Ci]:[new RegExp("("+Ci+"|CrMo)\\/"+Ki)],[Ti]:[new RegExp("CriOS\\/"+Ki)],"UC Browser":[new RegExp("(UCBrowser|UCWEB)\\/"+Ki)],[wi]:[Xi],[qi]:[Xi],[Ii]:[new RegExp("(Opera|OPR)\\/"+Ki)],[Fi]:[new RegExp(Fi+"\\/"+Ki)],[Ai]:[new RegExp("FxiOS\\/"+Ki)],[Ji]:[new RegExp("Konqueror[:/]?"+Ki,"i")],[ki]:[new RegExp(ki+" "+Ki),Xi],[Bi]:[new RegExp("android\\s"+Ki,"i")],[Ei]:[new RegExp(xi+"\\/"+Ki)],[$i]:[new RegExp("(rv:|MSIE )"+Ki)],Mozilla:[new RegExp("rv:"+Ki)]},oo=[[new RegExp(Di+"; "+Di+" (.*?)[);]","i"),e=>[Di,e&&e[1]||""]],[new RegExp(ji,"i"),[ji,""]],[new RegExp(Ni,"i"),[Ni,""]],[to,[ki,""]],[new RegExp(Hi,"i"),(e,t)=>{if(/Phone/.test(t)||/WPDesktop/.test(t))return[Ui,""]
if(new RegExp(pi).test(t)&&!/IEMobile\b/.test(t))return[Hi+" "+pi,""]
var n=/Windows NT ([0-9.]+)/i.exec(t)
if(n&&n[1]){var r=n[1],i=no[r]||""
return/arm/i.test(t)&&(i="RT"),[Hi,i]}return[Hi,""]}],[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,e=>{if(e&&e[3]){var t=[e[3],e[4],e[5]||"0"]
return[hi,t.join(".")]}return[hi,""]}],[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,e=>{var t=""
return e&&e.length>=3&&(t=W(e[2])?e[3]:e[2]),["watchOS",t]}],[new RegExp("("+vi+" (\\d+)\\.(\\d+)\\.?(\\d+)?|"+vi+")","i"),e=>{if(e&&e[2]){var t=[e[2],e[3],e[4]||"0"]
return[vi,t.join(".")]}return[vi,""]}],[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,e=>{var t=["Mac OS X",""]
if(e&&e[1]){var n=[e[1],e[2],e[3]||"0"]
t[1]=n.join(".")}return t}],[/Mac/i,["Mac OS X",""]],[/CrOS/,[Pi,""]],[/Linux|debian/i,["Linux",""]]],so=function(e){return eo.test(e)?ji:Zi.test(e)?Ni:Yi.test(e)?Di:new RegExp(Wi,"i").test(e)?Wi:new RegExp("("+Ui+"|WPDesktop)","i").test(e)?Ui:/iPad/.test(e)?mi:/iPod/.test(e)?"iPod Touch":/iPhone/.test(e)?"iPhone":/(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)?yi:to.test(e)?ki:/(kobo)\s(ereader|touch)/i.test(e)?"Kobo":new RegExp(Gi,"i").test(e)?Gi:/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e)||/(kf[a-z]+)( bui|\)).+silk\//i.test(e)?"Kindle Fire":/(Android|ZTE)/i.test(e)?!new RegExp(pi).test(e)||/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e)?/pixel[\daxl ]{1,6}/i.test(e)&&!/pixel c/i.test(e)||/(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e)||/lmy47v/i.test(e)&&!/QTAQZ3/i.test(e)?vi:_i:vi:new RegExp("(pda|"+pi+")","i").test(e)?Vi:new RegExp(gi,"i").test(e)&&!new RegExp(gi+" pc","i").test(e)?Qi:""},ao="https?://(.*)",lo=["gclid","gclsrc","dclid","gbraid","wbraid","fbclid","msclkid","twclid","li_fat_id","igshid","ttclid","rdt_cid","irclid","_kx"],co=le(["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gad_source","mc_cid"],lo),uo="<masked>",fo={campaignParams:function(){var{customTrackedParams:e,maskPersonalDataProperties:t,customPersonalDataProperties:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!S)return{}
var r=t?le([],lo,n||[]):[]
return this._campaignParamsFromUrl(Rt(S.URL,r,uo),e)},_campaignParamsFromUrl:function(e,t){var n=co.concat(t||[]),r={}
return se(n,(function(t){var n=Ot(e,t)
r[t]=n||null})),r},_searchEngine:function(e){return e?0===e.search(ao+"google.([^/?]*)")?"google":0===e.search(ao+"bing.com")?"bing":0===e.search(ao+"yahoo.com")?"yahoo":0===e.search(ao+"duckduckgo.com")?"duckduckgo":null:null},_searchInfoFromReferrer:function(e){var t=fo._searchEngine(e),n="yahoo"!=t?"q":"p",r={}
if(!Q(t)){r.$search_engine=t
var i=S?Ot(S.referrer,n):""
i.length&&(r.ph_keyword=i)}return r},searchInfo:function(){var e=null==S?void 0:S.referrer
return e?this._searchInfoFromReferrer(e):{}},browser:ro,browserVersion:function(e,t){var n=ro(e,t),r=io[n]
if(W(r))return null
for(var i=0;i<r.length;i++){var o=r[i],s=e.match(o)
if(s)return parseFloat(s[s.length-2])}return null},browserLanguage:function(){return navigator.language||navigator.userLanguage},browserLanguagePrefix:function(){var e=this.browserLanguage()
return"string"==typeof e?e.split("-")[0]:void 0},os:function(e){for(var t=0;t<oo.length;t++){var[n,r]=oo[t],i=n.exec(e),o=i&&(H(r)?r(i,e):r)
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
return se(t,(function(e,t){n["$initial_".concat(A(t))]=e})),n},timezone:function(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){return}},timezoneOffset:function(){try{return(new Date).getTimezoneOffset()}catch(e){return}},properties:function(){var{maskPersonalDataProperties:e,customPersonalDataProperties:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!T)return{}
var n=e?le([],lo,t||[]):[],[r,i]=fo.os(T)
return ae(fe({$os:r,$os_version:i,$browser:fo.browser(T,navigator.vendor),$device:fo.device(T),$device_type:fo.deviceType(T),$timezone:fo.timezone(),$timezone_offset:fo.timezoneOffset()}),{$current_url:Rt(null==x?void 0:x.href,n,uo),$host:null==x?void 0:x.host,$pathname:null==x?void 0:x.pathname,$raw_user_agent:T.length>1e3?T.substring(0,997)+"...":T,$browser_version:fo.browserVersion(T,navigator.vendor),$browser_language:fo.browserLanguage(),$browser_language_prefix:fo.browserLanguagePrefix(),$screen_height:null==_?void 0:_.screen.height,$screen_width:null==_?void 0:_.screen.width,$viewport_height:null==_?void 0:_.innerHeight,$viewport_width:null==_?void 0:_.innerWidth,$lib:"web",$lib_version:ee.LIB_VERSION,$insert_id:Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10),$time:Date.now()/1e3})},people_properties:function(){if(!T)return{}
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
for(var o of i){var s,a,l=r[o],c=null==t?void 0:t[o],u=W(c)?null!==(s=null==l?void 0:l.enabled)&&void 0!==s&&s:!!c,d=W(c)?l.variant:"string"==typeof c?c:void 0,f=null==n?void 0:n[o],h=p(p({},l),{},{enabled:u,variant:u?null!=d?d:null==l?void 0:l.variant:void 0})
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
q(o[e])?o[e].push(r):o[e]=[r],null===(s=this.instance.persistence)||void 0===s||s.register({[We]:o})
var _=this.getFeatureFlagDetails(e),m={$feature_flag:e,$feature_flag_response:n,$feature_flag_payload:this.getFeatureFlagPayload(e)||null,$feature_flag_request_id:i,$feature_flag_bootstrapped_response:(null===(a=this.instance.config.bootstrap)||void 0===a||null===(l=a.featureFlags)||void 0===l?void 0:l[e])||null,$feature_flag_bootstrapped_payload:(null===(c=this.instance.config.bootstrap)||void 0===c||null===(u=c.featureFlagPayloads)||void 0===u?void 0:u[e])||null,$used_bootstrap_value:!this._flagsLoadedFromRemote}
W(null==_||null===(d=_.metadata)||void 0===d?void 0:d.version)||(m.$feature_flag_version=_.metadata.version)
var b,y=null!==(f=null==_||null===(p=_.reason)||void 0===p?void 0:p.description)&&void 0!==f?f:null==_||null===(h=_.reason)||void 0===h?void 0:h.code
y&&(m.$feature_flag_reason=y),null!=_&&null!==(v=_.metadata)&&void 0!==v&&v.id&&(m.$feature_flag_id=_.metadata.id),W(null==_?void 0:_.original_variant)&&W(null==_?void 0:_.original_enabled)||(m.$feature_flag_original_response=W(_.original_variant)?_.original_enabled:_.original_variant),null!=_&&null!==(g=_.metadata)&&void 0!==g&&g.original_payload&&(m.$feature_flag_original_payload=null==_||null===(b=_.metadata)||void 0===b?void 0:b.original_payload),this.instance.capture("$feature_flag_called",m)}return n}po.warn('getFeatureFlag for key "'+e+"\" failed. Feature flags didn't load in time.")}getFeatureFlagDetails(e){return this.getFlagsWithDetails()[e]}getFeatureFlagPayload(e){return this.getFlagPayloads()[e]}getRemoteConfigPayload(e,t){var n=this.instance.config.token
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
if(q(a)){po.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.")
var u={}
if(a)for(var d=0;d<a.length;d++)u[a[d]]=!0
t&&t.register({[ho]:a,[Ne]:u})}else{var f=a,h=l,v=s
e.errorsWhileComputingFlags&&(f=p(p({},n),f),h=p(p({},r),h),v=p(p({},i),v)),t&&t.register(p({[ho]:Object.keys(bo(f)),[Ne]:f||{},[go]:h||{},[Be]:v||{}},c?{[mo]:c}:{}))}}}(e,this.instance.persistence,n,r,i),this._fireFeatureFlagsCallbacks(t)}}override(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
po.warn("override is deprecated. Please use overrideFeatureFlags instead."),this.overrideFeatureFlags({flags:e,suppressWarning:t})}overrideFeatureFlags(e){if(!this.instance.__loaded||!this.instance.persistence)return po.uninitializedWarning("posthog.featureFlags.overrideFeatureFlags")
if(!1===e)return this.instance.persistence.unregister(vo),this.instance.persistence.unregister(_o),void this._fireFeatureFlagsCallbacks()
if(e&&"object"==typeof e&&("flags"in e||"payloads"in e)){var t,n=e
if(this._override_warning=Boolean(null!==(t=n.suppressWarning)&&void 0!==t&&t),"flags"in n)if(!1===n.flags)this.instance.persistence.unregister(vo)
else if(n.flags)if(q(n.flags)){for(var r={},i=0;i<n.flags.length;i++)r[n.flags[i]]=!0
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
return se(this.props,(function(t,n){if(n===Ne&&U(t))for(var r=Object.keys(t),i=0;i<r.length;i++)e["$feature/".concat(r[i])]=t[r[i]]
else s=n,a=!1,(Q(o=tt)?a:w&&o.indexOf===w?-1!=o.indexOf(s):(se(o,(function(e){if(a||(a=e===s))return ie})),a))||(e[n]=t)
var o,s,a})),e}load(){if(!this.disabled){var e=this.storage.parse(this.name)
e&&(this.props=ae({},e))}}save(){this.disabled||this.storage.set(this.name,this.props,this.expire_days,this.cross_subdomain,this.secure,this.config.debug)}remove(){this.storage.remove(this.name,!1),this.storage.remove(this.name,!0)}clear(){this.remove(),this.props={}}register_once(e,t,n){if(U(e)){W(t)&&(t="None"),this.expire_days=W(n)?this.default_expiry:n
var r=!1
if(se(e,((e,n)=>{this.props.hasOwnProperty(n)&&this.props[n]!==t||(this.props[n]=e,r=!0)})),r)return this.save(),!0}return!1}register(e,t){if(U(e)){this.expire_days=W(t)?this.default_expiry:t
var n=!1
if(se(e,((t,r)=>{e.hasOwnProperty(r)&&this.props[r]!==t&&(this.props[r]=t,n=!0)})),n)return this.save(),!0}return!1}unregister(e){e in this.props&&(delete this.props[e],this.save())}update_campaign_params(){if(!this.campaign_params_saved){var e=fo.campaignParams({customTrackedParams:this.config.custom_campaign_params,maskPersonalDataProperties:this.config.mask_personal_data_properties,customPersonalDataProperties:this.config.custom_personal_data_properties})
G(fe(e))||this.register(e),this.campaign_params_saved=!0}}update_search_keyword(){this.register(fo.searchInfo())}update_referrer_info(){this.register_once(fo.referrerInfo(),void 0)}set_initial_person_info(){this.props[Je]||this.props[Ke]||this.register_once({[Xe]:fo.personInfo({maskPersonalDataProperties:this.config.mask_personal_data_properties,customPersonalDataProperties:this.config.custom_personal_data_properties})},void 0)}get_referrer_info(){return fe({$referrer:this.props.$referrer,$referring_domain:this.props.$referring_domain})}get_initial_props(){var e={}
se([Ke,Je],(t=>{var n=this.props[t]
n&&se(n,(function(t,n){e["$initial_"+A(n)]=t}))}))
var t=this.props[Xe]
if(t){var n=fo.initialPersonPropsFromInfo(t)
ae(e,n)}return e}safe_merge(e){return se(this.props,(function(t,n){n in e||(e[n]=t)})),e}update_config(e,t){if(this.default_expiry=this.expire_days=e.cookie_expiration,this.set_disabled(e.disable_persistence),this.set_cross_subdomain(e.cross_subdomain_cookie),this.set_secure(e.secure_cookie),e.persistence!==t.persistence){var n=this.buildStorage(e),r=this.props
this.clear(),this.storage=n,this.props=r,this.save()}}set_disabled(e){this.disabled=e,this.disabled?this.remove():this.save()}set_cross_subdomain(e){e!==this.cross_subdomain&&(this.cross_subdomain=e,this.remove(),this.save())}get_cross_subdomain(){return!!this.cross_subdomain}set_secure(e){e!==this.secure&&(this.secure=e,this.remove(),this.save())}set_event_timer(e,t){var n=this.props[be]||{}
n[e]=t,this.props[be]=n,this.save()}remove_event_timer(e){var t=(this.props[be]||{})[e]
return W(t)||(delete this.props[be][e],this.save()),t}get_property(e){return this.props[e]}set_property(e,t){this.props[e]=t,this.save()}}var So,xo,Eo,Co,Po,To,$o,Lo,Io,Oo,Ro,Mo,Fo={},Ao=[],jo=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,No=Array.isArray
function Do(e,t){for(var n in t)e[n]=t[n]
return e}function Bo(e){var t=e.parentNode
t&&t.removeChild(e)}function qo(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==i?++Eo:i,__i:-1,__u:0}
return null==i&&null!=xo.vnode&&xo.vnode(o),o}function Ho(e){return e.children}function Uo(e,t){this.props=e,this.context=t}function Go(e,t){if(null==t)return e.__?Go(e.__,e.__i+1):null
for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e
return"function"==typeof e.type?Go(e):null}function Wo(e){var t,n
if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e
break}return Wo(e)}}function zo(e){(!e.__d&&(e.__d=!0)&&Co.push(e)&&!Vo.__r++||Po!==xo.debounceRendering)&&((Po=xo.debounceRendering)||To)(Vo)}function Vo(){var e,t,n,r,i,o,s,a,l
for(Co.sort($o);e=Co.shift();)e.__d&&(t=Co.length,r=void 0,o=(i=(n=e).__v).__e,a=[],l=[],(s=n.__P)&&((r=Do({},i)).__v=i.__v+1,xo.vnode&&xo.vnode(r),ts(s,r,i,n.__n,void 0!==s.ownerSVGElement,32&i.__u?[o]:null,a,null==o?Go(i):o,!!(32&i.__u),l),r.__.__k[r.__i]=r,ns(a,r,l),r.__e!=o&&Wo(r)),Co.length>t&&Co.sort($o))
Vo.__r=0}function Qo(e,t,n,r,i,o,s,a,l,c,u){var d,f,p,h,v,g=r&&r.__k||Ao,_=t.length
for(n.__d=l,function(e,t,n){var r,i,o,s,a,l=t.length,c=n.length,u=c,d=0
for(e.__k=[],r=0;r<l;r++)null!=(i=e.__k[r]=null==(i=t[r])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?qo(null,i,null,null,i):No(i)?qo(Ho,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?qo(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=e,i.__b=e.__b+1,a=Ko(i,n,s=r+d,u),i.__i=a,o=null,-1!==a&&(u--,(o=n[a])&&(o.__u|=131072)),null==o||null===o.__v?(-1==a&&d--,"function"!=typeof i.type&&(i.__u|=65536)):a!==s&&(a===s+1?d++:a>s?u>l-s?d+=a-s:d--:d=a<s&&a==s-1?a-s:0,a!==r+d&&(i.__u|=65536))):(o=n[r])&&null==o.key&&o.__e&&(o.__e==e.__d&&(e.__d=Go(o)),is(o,o,!1),n[r]=null,u--)
if(u)for(r=0;r<c;r++)null!=(o=n[r])&&0==(131072&o.__u)&&(o.__e==e.__d&&(e.__d=Go(o)),is(o,o))}(n,t,g),l=n.__d,d=0;d<_;d++)null!=(p=n.__k[d])&&"boolean"!=typeof p&&"function"!=typeof p&&(f=-1===p.__i?Fo:g[p.__i]||Fo,p.__i=d,ts(e,p,f,i,o,s,a,l,c,u),h=p.__e,p.ref&&f.ref!=p.ref&&(f.ref&&rs(f.ref,null,p),u.push(p.ref,p.__c||h,p)),null==v&&null!=h&&(v=h),65536&p.__u||f.__k===p.__k?l=Jo(p,l,e):"function"==typeof p.type&&void 0!==p.__d?l=p.__d:h&&(l=h.nextSibling),p.__d=void 0,p.__u&=-196609)
n.__d=l,n.__e=v}function Jo(e,t,n){var r,i
if("function"==typeof e.type){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=Jo(r[i],t,n))
return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function Ko(e,t,n,r){var i=e.key,o=e.type,s=n-1,a=n+1,l=t[n]
if(null===l||l&&i==l.key&&o===l.type)return n
if(r>(null!=l&&0==(131072&l.__u)?1:0))for(;s>=0||a<t.length;){if(s>=0){if((l=t[s])&&0==(131072&l.__u)&&i==l.key&&o===l.type)return s
s--}if(a<t.length){if((l=t[a])&&0==(131072&l.__u)&&i==l.key&&o===l.type)return a
a++}}return-1}function Xo(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||jo.test(t)?n:n+"px"}function Yo(e,t,n,r,i){var o
e:if("style"===t)if("string"==typeof n)e.style.cssText=n
else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Xo(e.style,t,"")
if(n)for(t in n)r&&n[t]===r[t]||Xo(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n.u=r.u:(n.u=Date.now(),e.addEventListener(t,o?es:Zo,o)):e.removeEventListener(t,o?es:Zo,o)
else{if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s")
else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&"role"!==t&&t in e)try{e[t]=null==n?"":n
break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function Zo(e){var t=this.l[e.type+!1]
if(e.t){if(e.t<=t.u)return}else e.t=Date.now()
return t(xo.event?xo.event(e):e)}function es(e){return this.l[e.type+!0](xo.event?xo.event(e):e)}function ts(e,t,n,r,i,o,s,a,l,c){var u,d,f,p,h,v,g,_,m,b,y,w,k,S,x,E=t.type
if(void 0!==t.constructor)return null
128&n.__u&&(l=!!(32&n.__u),o=[a=t.__e=n.__e]),(u=xo.__b)&&u(t)
e:if("function"==typeof E)try{if(_=t.props,m=(u=E.contextType)&&r[u.__c],b=u?m?m.props.value:u.__:r,n.__c?g=(d=t.__c=n.__c).__=d.__E:("prototype"in E&&E.prototype.render?t.__c=d=new E(_,b):(t.__c=d=new Uo(_,b),d.constructor=E,d.render=os),m&&m.sub(d),d.props=_,d.state||(d.state={}),d.context=b,d.__n=r,f=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=E.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=Do({},d.__s)),Do(d.__s,E.getDerivedStateFromProps(_,d.__s))),p=d.props,h=d.state,d.__v=t,f)null==E.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount)
else{if(null==E.getDerivedStateFromProps&&_!==p&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(_,b),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(_,d.__s,b)||t.__v===n.__v)){for(t.__v!==n.__v&&(d.props=_,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),y=0;y<d._sb.length;y++)d.__h.push(d._sb[y])
d._sb=[],d.__h.length&&s.push(d)
break e}null!=d.componentWillUpdate&&d.componentWillUpdate(_,d.__s,b),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(p,h,v)}))}if(d.context=b,d.props=_,d.__P=e,d.__e=!1,w=xo.__r,k=0,"prototype"in E&&E.prototype.render){for(d.state=d.__s,d.__d=!1,w&&w(t),u=d.render(d.props,d.state,d.context),S=0;S<d._sb.length;S++)d.__h.push(d._sb[S])
d._sb=[]}else do{d.__d=!1,w&&w(t),u=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++k<25)
d.state=d.__s,null!=d.getChildContext&&(r=Do(Do({},r),d.getChildContext())),f||null==d.getSnapshotBeforeUpdate||(v=d.getSnapshotBeforeUpdate(p,h)),Qo(e,No(x=null!=u&&u.type===Ho&&null==u.key?u.props.children:u)?x:[x],t,n,r,i,o,s,a,l,c),d.base=t.__e,t.__u&=-161,d.__h.length&&s.push(d),g&&(d.__E=d.__=null)}catch(e){t.__v=null,l||null!=o?(t.__e=a,t.__u|=l?160:32,o[o.indexOf(a)]=null):(t.__e=n.__e,t.__k=n.__k),xo.__e(e,t,n)}else null==o&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=function(e,t,n,r,i,o,s,a,l){var c,u,d,f,p,h,v,g=n.props,_=t.props,m=t.type
if("svg"===m&&(i=!0),null!=o)for(c=0;c<o.length;c++)if((p=o[c])&&"setAttribute"in p==!!m&&(m?p.localName===m:3===p.nodeType)){e=p,o[c]=null
break}if(null==e){if(null===m)return document.createTextNode(_)
e=i?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,_.is&&_),o=null,a=!1}if(null===m)g===_||a&&e.data===_||(e.data=_)
else{if(o=o&&So.call(e.childNodes),g=n.props||Fo,!a&&null!=o)for(g={},c=0;c<e.attributes.length;c++)g[(p=e.attributes[c]).name]=p.value
for(c in g)p=g[c],"children"==c||("dangerouslySetInnerHTML"==c?d=p:"key"===c||c in _||Yo(e,c,null,p,i))
for(c in _)p=_[c],"children"==c?f=p:"dangerouslySetInnerHTML"==c?u=p:"value"==c?h=p:"checked"==c?v=p:"key"===c||a&&"function"!=typeof p||g[c]===p||Yo(e,c,p,g[c],i)
if(u)a||d&&(u.__html===d.__html||u.__html===e.innerHTML)||(e.innerHTML=u.__html),t.__k=[]
else if(d&&(e.innerHTML=""),Qo(e,No(f)?f:[f],t,n,r,i&&"foreignObject"!==m,o,s,o?o[0]:n.__k&&Go(n,0),a,l),null!=o)for(c=o.length;c--;)null!=o[c]&&Bo(o[c])
a||(c="value",void 0!==h&&(h!==e[c]||"progress"===m&&!h||"option"===m&&h!==g[c])&&Yo(e,c,h,g[c],!1),c="checked",void 0!==v&&v!==e[c]&&Yo(e,c,v,g[c],!1))}return e}(n.__e,t,n,r,i,o,s,l,c);(u=xo.diffed)&&u(t)}function ns(e,t,n){t.__d=void 0
for(var r=0;r<n.length;r++)rs(n[r],n[++r],n[++r])
xo.__c&&xo.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){xo.__e(e,t.__v)}}))}function rs(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){xo.__e(e,n)}}function is(e,t,n){var r,i
if(xo.unmount&&xo.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||rs(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){xo.__e(e,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&is(r[i],t,n||"function"!=typeof e.type)
n||null==e.__e||Bo(e.__e),e.__=e.__e=e.__d=void 0}function os(e,t,n){return this.constructor(e,n)}So=Ao.slice,xo={__e:function(e,t,n,r){for(var i,o,s;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(e)),s=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(e,r||{}),s=i.__d),s)return i.__E=i}catch(t){e=t}throw e}},Eo=0,Uo.prototype.setState=function(e,t){var n
n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=Do({},this.state),"function"==typeof e&&(e=e(Do({},n),this.props)),e&&Do(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),zo(this))},Uo.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),zo(this))},Uo.prototype.render=Ho,Co=[],To="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,$o=function(e,t){return e.__v.__b-t.__v.__b},Vo.__r=0,Lo=0,function(e){e.Popover="popover",e.API="api",e.Widget="widget"}(Io||(Io={})),function(e){e.Open="open",e.MultipleChoice="multiple_choice",e.SingleChoice="single_choice",e.Rating="rating",e.Link="link"}(Oo||(Oo={})),function(e){e.NextQuestion="next_question",e.End="end",e.ResponseBased="response_based",e.SpecificQuestion="specific_question"}(Ro||(Ro={})),function(e){e.Once="once",e.Recurring="recurring",e.Always="always"}(Mo||(Mo={})),function(e,t){var n={__c:t="__cC"+Lo++,__:{isPreviewMode:!1,previewPageIndex:0,onPopupSurveyDismissed:()=>{},isPopup:!0,onPreviewSubmit:()=>{}},Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r
return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some((function(e){e.__e=!0,zo(e)}))},this.sub=function(e){n.push(e)
var t=e.componentWillUnmount
e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}}
n.Provider.__=n.Consumer.contextType=n}()
var ss=function(e,t){if(!function(e){try{new RegExp(e)}catch(e){return!1}return!0}(t))return!1
try{return new RegExp(t).test(e)}catch(e){return!1}}
class as{constructor(){h(this,"events",{}),this.events={}}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),()=>{this.events[e]=this.events[e].filter((e=>e!==t))}}emit(e,t){for(var n of this.events[e]||[])n(t)
for(var r of this.events["*"]||[])r(e,t)}}class ls{constructor(e){h(this,"_debugEventEmitter",new as),h(this,"checkStep",((e,t)=>this.checkStepEvent(e,t)&&this.checkStepUrl(e,t)&&this.checkStepElement(e,t))),h(this,"checkStepEvent",((e,t)=>null==t||!t.event||(null==e?void 0:e.event)===(null==t?void 0:t.event))),this.instance=e,this.actionEvents=new Set,this.actionRegistry=new Set}init(){var e,t
W(null===(e=this.instance)||void 0===e?void 0:e._addCaptureHook)||(null===(t=this.instance)||void 0===t||t._addCaptureHook(((e,t)=>{this.on(e,t)})))}register(e){var t,n
if(!W(null===(t=this.instance)||void 0===t?void 0:t._addCaptureHook)&&(e.forEach((e=>{var t,n
null===(t=this.actionRegistry)||void 0===t||t.add(e),null===(n=e.steps)||void 0===n||n.forEach((e=>{var t
null===(t=this.actionEvents)||void 0===t||t.add((null==e?void 0:e.event)||"")}))})),null!==(n=this.instance)&&void 0!==n&&n.autocapture)){var r,i=new Set
e.forEach((e=>{var t
null===(t=e.steps)||void 0===t||t.forEach((e=>{null!=e&&e.selector&&i.add(null==e?void 0:e.selector)}))})),null===(r=this.instance)||void 0===r||r.autocapture.setElementSelectors(i)}}on(e,t){var n
null!=t&&0!=e.length&&(this.actionEvents.has(e)||this.actionEvents.has(null==t?void 0:t.event))&&this.actionRegistry&&(null===(n=this.actionRegistry)||void 0===n?void 0:n.size)>0&&this.actionRegistry.forEach((e=>{this.checkAction(t,e)&&this._debugEventEmitter.emit("actionCaptured",e.name)}))}_addActionHook(e){this.onAction("actionCaptured",(t=>e(t)))}checkAction(e,t){if(null==(null==t?void 0:t.steps))return!1
for(var n of t.steps)if(this.checkStep(e,n))return!0
return!1}onAction(e,t){return this._debugEventEmitter.on(e,t)}checkStepUrl(e,t){if(null!=t&&t.url){var n,r=null==e||null===(n=e.properties)||void 0===n?void 0:n.$current_url
if(!r||"string"!=typeof r)return!1
if(!ls.matchString(r,null==t?void 0:t.url,(null==t?void 0:t.url_matching)||"contains"))return!1}return!0}static matchString(e,t,n){switch(n){case"regex":return!!_&&ss(e,t)
case"exact":return t===e
case"contains":var r=ls.escapeStringRegexp(t).replace(/_/g,".").replace(/%/g,".*")
return ss(e,r)
default:return!1}}static escapeStringRegexp(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}checkStepElement(e,t){if((null!=t&&t.href||null!=t&&t.tag_name||null!=t&&t.text)&&!this.getElementsList(e).some((e=>!(null!=t&&t.href&&!ls.matchString(e.href||"",null==t?void 0:t.href,(null==t?void 0:t.href_matching)||"exact")||null!=t&&t.tag_name&&e.tag_name!==(null==t?void 0:t.tag_name)||null!=t&&t.text&&!ls.matchString(e.text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")&&!ls.matchString(e.$el_text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")))))return!1
if(null!=t&&t.selector){var n,r=null==e||null===(n=e.properties)||void 0===n?void 0:n.$element_selectors
if(!r)return!1
if(!r.includes(null==t?void 0:t.selector))return!1}return!0}getElementsList(e){return null==(null==e?void 0:e.properties.$elements)?[]:null==e?void 0:e.properties.$elements}}class cs{constructor(e){this.instance=e,this.eventToSurveys=new Map,this.actionToSurveys=new Map}register(e){var t
W(null===(t=this.instance)||void 0===t?void 0:t._addCaptureHook)||(this.setupEventBasedSurveys(e),this.setupActionBasedSurveys(e))}setupActionBasedSurveys(e){var t=e.filter((e=>{var t,n,r,i
return(null===(t=e.conditions)||void 0===t?void 0:t.actions)&&(null===(n=e.conditions)||void 0===n||null===(r=n.actions)||void 0===r||null===(i=r.values)||void 0===i?void 0:i.length)>0}))
0!==t.length&&(null==this.actionMatcher&&(this.actionMatcher=new ls(this.instance),this.actionMatcher.init(),this.actionMatcher._addActionHook((e=>{this.onAction(e)}))),t.forEach((e=>{var t,n,r,i,o,s,a,l,c,u
e.conditions&&null!==(t=e.conditions)&&void 0!==t&&t.actions&&null!==(n=e.conditions)&&void 0!==n&&null!==(r=n.actions)&&void 0!==r&&r.values&&(null===(i=e.conditions)||void 0===i||null===(o=i.actions)||void 0===o||null===(s=o.values)||void 0===s?void 0:s.length)>0&&(null===(a=this.actionMatcher)||void 0===a||a.register(e.conditions.actions.values),null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c||null===(u=c.values)||void 0===u||u.forEach((t=>{if(t&&t.name){var n=this.actionToSurveys.get(t.name)
n&&n.push(e.id),this.actionToSurveys.set(t.name,n||[e.id])}})))})))}setupEventBasedSurveys(e){var t
0!==e.filter((e=>{var t,n,r,i
return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(r=n.events)||void 0===r||null===(i=r.values)||void 0===i?void 0:i.length)>0})).length&&(null===(t=this.instance)||void 0===t||t._addCaptureHook(((e,t)=>{this.onEvent(e,t)})),e.forEach((e=>{var t,n,r
null===(t=e.conditions)||void 0===t||null===(n=t.events)||void 0===n||null===(r=n.values)||void 0===r||r.forEach((t=>{if(t&&t.name){var n=this.eventToSurveys.get(t.name)
n&&n.push(e.id),this.eventToSurveys.set(t.name,n||[e.id])}}))})))}onEvent(e,t){var n,r,i=(null===(n=this.instance)||void 0===n||null===(r=n.persistence)||void 0===r?void 0:r.props[Ge])||[]
if(cs.SURVEY_SHOWN_EVENT_NAME==e&&t&&i.length>0){var o,s=null==t||null===(o=t.properties)||void 0===o?void 0:o.$survey_id
if(s){var a=i.indexOf(s)
a>=0&&(i.splice(a,1),this._updateActivatedSurveys(i))}}else this.eventToSurveys.has(e)&&this._updateActivatedSurveys(i.concat(this.eventToSurveys.get(e)||[]))}onAction(e){var t,n,r=(null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n?void 0:n.props[Ge])||[]
this.actionToSurveys.has(e)&&this._updateActivatedSurveys(r.concat(this.actionToSurveys.get(e)||[]))}_updateActivatedSurveys(e){var t,n
null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n||n.register({[Ge]:[...new Set(e)]})}getSurveys(){var e,t
return(null===(e=this.instance)||void 0===e||null===(t=e.persistence)||void 0===t?void 0:t.props[Ge])||[]}getEventToSurveys(){return this.eventToSurveys}_getActionMatcher(){return this.actionMatcher}}h(cs,"SURVEY_SHOWN_EVENT_NAME","survey shown")
var us=re("[Surveys]"),ds={icontains:(e,t)=>e.some((e=>t.toLowerCase().includes(e.toLowerCase()))),not_icontains:(e,t)=>e.every((e=>!t.toLowerCase().includes(e.toLowerCase()))),regex:(e,t)=>e.some((e=>ss(t,e))),not_regex:(e,t)=>e.every((e=>!ss(t,e))),exact:(e,t)=>e.some((e=>t===e)),is_not:(e,t)=>e.every((e=>t!==e))}
function fs(e){return null!=e?e:"icontains"}class ps{constructor(e){h(this,"_isFetchingSurveys",!1),h(this,"_isInitializingSurveys",!1),h(this,"_surveyCallbacks",[]),this.instance=e,this._surveyEventReceiver=null}onRemoteConfig(e){var t=e.surveys
if(J(t))return us.warn("Decide not loaded yet. Not loading surveys.")
var n=q(t)
this._hasSurveys=n?t.length>0:t,us.info("decide response received, hasSurveys: ".concat(this._hasSurveys)),this._hasSurveys&&this.loadIfEnabled()}reset(){localStorage.removeItem("lastSeenSurveyDate")
var e=(()=>{for(var e=[],t=0;t<localStorage.length;t++){var n=localStorage.key(t)
null!=n&&n.startsWith("seenSurvey_")&&e.push(n)}return e})()
e.forEach((e=>localStorage.removeItem(e)))}loadIfEnabled(){if(!this._surveyManager)if(this._isInitializingSurveys)us.info("Already initializing surveys, skipping...")
else if(this.instance.config.disable_surveys)us.info("Disabled. Not loading surveys.")
else{var e=null==L?void 0:L.__PosthogExtensions__
if(e)if(this._hasSurveys){this._isInitializingSurveys=!0
try{var t=e.generateSurveys
if(t)this._surveyManager=t(this.instance),this._isInitializingSurveys=!1,this._surveyEventReceiver=new cs(this.instance),us.info("Surveys loaded successfully"),this._notifySurveyCallbacks({isLoaded:!0})
else{var n=e.loadExternalDependency
if(n)n(this.instance,"surveys",(t=>{if(t||!e.generateSurveys)return us.error("Could not load surveys script",t),void(this._isInitializingSurveys=!1)
this._surveyManager=e.generateSurveys(this.instance),this._isInitializingSurveys=!1,this._surveyEventReceiver=new cs(this.instance),us.info("Surveys loaded successfully"),this._notifySurveyCallbacks({isLoaded:!0})}))
else{var r="PostHog loadExternalDependency extension not found. Cannot load remote config."
us.error(r),this._isInitializingSurveys=!1,this._notifySurveyCallbacks({isLoaded:!1,error:r})}}}catch(e){throw us.error("Error initializing surveys",e),this._isInitializingSurveys=!1,this._notifySurveyCallbacks({isLoaded:!1,error:"Error initializing surveys"}),e}}else us.info("No surveys to load.")
else us.error("PostHog Extensions not found.")}}onSurveysLoaded(e){return this._surveyCallbacks.push(e),this._surveyManager&&this._notifySurveyCallbacks({isLoaded:!0}),()=>{this._surveyCallbacks=this._surveyCallbacks.filter((t=>t!==e))}}getSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(this.instance.config.disable_surveys)return us.info("Disabled. Not loading surveys."),e([])
var n=this.instance.get_property(Ue)
if(n&&!t)return e(n,{isLoaded:!0})
if(this._isFetchingSurveys)return e([],{isLoaded:!1,error:"Surveys are already being loaded"})
try{this._isFetchingSurveys=!0,this.instance._send_request({url:this.instance.requestRouter.endpointFor("api","/api/surveys/?token=".concat(this.instance.config.token)),method:"GET",timeout:this.instance.config.surveys_request_timeout_ms,callback:t=>{var n
this._isFetchingSurveys=!1
var r=t.statusCode
if(200!==r||!t.json){var i="Surveys API could not be loaded, status: ".concat(r)
return us.error(i),e([],{isLoaded:!1,error:i})}var o,s=t.json.surveys||[],a=s.filter((e=>{var t,n,r,i,o,s,a,l,c,u,d,f
return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(r=n.events)||void 0===r?void 0:r.values)&&(null===(i=e.conditions)||void 0===i||null===(o=i.events)||void 0===o||null===(s=o.values)||void 0===s?void 0:s.length)>0||(null===(a=e.conditions)||void 0===a?void 0:a.actions)&&(null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c?void 0:c.values)&&(null===(u=e.conditions)||void 0===u||null===(d=u.actions)||void 0===d||null===(f=d.values)||void 0===f?void 0:f.length)>0}))
return a.length>0&&(null===(o=this._surveyEventReceiver)||void 0===o||o.register(a)),null===(n=this.instance.persistence)||void 0===n||n.register({[Ue]:s}),e(s,{isLoaded:!0})}})}catch(e){throw this._isFetchingSurveys=!1,e}}_notifySurveyCallbacks(e){for(var t of this._surveyCallbacks)try{e.isLoaded?this.getSurveys(t):t([],e)}catch(e){us.error("Error in survey callback",e)}}isSurveyFeatureFlagEnabled(e){return!e||this.instance.featureFlags.isFeatureEnabled(e)}getActiveMatchingSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.getSurveys((t=>{var n,r=t.filter((e=>!(!e.start_date||e.end_date))).filter((e=>{var t
if(!e.conditions)return!0
var n=function(e){var t,n,r
if(null===(t=e.conditions)||void 0===t||!t.url)return!0
var i=null==_||null===(n=_.location)||void 0===n?void 0:n.href
if(!i)return!1
var o=[e.conditions.url]
return ds[fs(null===(r=e.conditions)||void 0===r?void 0:r.urlMatchType)](o,i)}(e),r=null===(t=e.conditions)||void 0===t||!t.selector||(null==S?void 0:S.querySelector(e.conditions.selector)),i=function(e){var t,n,r
if(null===(t=e.conditions)||void 0===t||!t.deviceTypes||0===(null===(n=e.conditions)||void 0===n?void 0:n.deviceTypes.length))return!0
if(!T)return!1
var i=fo.deviceType(T)
return ds[fs(null===(r=e.conditions)||void 0===r?void 0:r.deviceTypesMatchType)](e.conditions.deviceTypes,i)}(e)
return n&&r&&i})),i=null===(n=this._surveyEventReceiver)||void 0===n?void 0:n.getSurveys(),o=r.filter((e=>{var t,n,r,o,s,a,l,c,u
if(!(e.linked_flag_key||e.targeting_flag_key||e.internal_targeting_flag_key||null!==(t=e.feature_flag_keys)&&void 0!==t&&t.length))return!0
var d=this.isSurveyFeatureFlagEnabled(e.linked_flag_key),f=this.isSurveyFeatureFlagEnabled(e.targeting_flag_key),p=(null!==(n=null===(r=e.conditions)||void 0===r||null===(o=r.events)||void 0===o||null===(s=o.values)||void 0===s?void 0:s.length)&&void 0!==n?n:0)>0,h=(null!==(a=null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c||null===(u=c.values)||void 0===u?void 0:u.length)&&void 0!==a?a:0)>0,v=!p&&!h||(null==i?void 0:i.includes(e.id)),g=this._canActivateRepeatedly(e)||this.isSurveyFeatureFlagEnabled(e.internal_targeting_flag_key),_=this.checkFlags(e)
return d&&f&&g&&v&&_}))
return e(o)}),t)}checkFlags(e){var t
return null===(t=e.feature_flag_keys)||void 0===t||!t.length||e.feature_flag_keys.every((e=>{var{key:t,value:n}=e
return!t||!n||this.instance.featureFlags.isFeatureEnabled(n)}))}_canActivateRepeatedly(e){var t
return J(null===(t=L.__PosthogExtensions__)||void 0===t?void 0:t.canActivateRepeatedly)?(us.warn("init was not called"),!1):L.__PosthogExtensions__.canActivateRepeatedly(e)}canRenderSurvey(e){if(J(this._surveyManager))return us.warn("init was not called"),{visible:!1,disabledReason:"SDK is not enabled or survey functionality is not yet loaded"}
var t=null
return this.getSurveys((n=>{var r=n.filter((t=>t.id===e))[0]
t=r?p({},this._surveyManager.canRenderSurvey(r)):{visible:!1,disabledReason:"Survey not found"}})),t}renderSurvey(e,t){J(this._surveyManager)?us.warn("init was not called"):this.getSurveys((n=>{var r=n.filter((t=>t.id===e))[0]
this._surveyManager.renderSurvey(r,null==S?void 0:S.querySelector(t))}))}}var hs=re("[RateLimiter]")
class vs{constructor(e){var t,n
h(this,"serverLimits",{}),h(this,"lastEventRateLimited",!1),h(this,"checkForLimiting",(e=>{var t=e.text
if(t&&t.length)try{(JSON.parse(t).quota_limited||[]).forEach((e=>{hs.info("".concat(e||"events"," is quota limited.")),this.serverLimits[e]=(new Date).getTime()+6e4}))}catch(e){return void hs.warn('could not rate limit - continuing. Error: "'.concat(null==e?void 0:e.message,'"'),{text:t})}})),this.instance=e,this.captureEventsPerSecond=(null===(t=e.config.rate_limiting)||void 0===t?void 0:t.events_per_second)||10,this.captureEventsBurstLimit=Math.max((null===(n=e.config.rate_limiting)||void 0===n?void 0:n.events_burst_limit)||10*this.captureEventsPerSecond,this.captureEventsPerSecond),this.lastEventRateLimited=this.clientRateLimitContext(!0).isRateLimited}clientRateLimitContext(){var e,t,n,r=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=(new Date).getTime(),o=null!==(e=null===(t=this.instance.persistence)||void 0===t?void 0:t.get_property(Qe))&&void 0!==e?e:{tokens:this.captureEventsBurstLimit,last:i}
o.tokens+=(i-o.last)/1e3*this.captureEventsPerSecond,o.last=i,o.tokens>this.captureEventsBurstLimit&&(o.tokens=this.captureEventsBurstLimit)
var s=o.tokens<1
return s||r||(o.tokens=Math.max(0,o.tokens-1)),!s||this.lastEventRateLimited||r||this.instance.capture("$$client_ingestion_warning",{$$client_ingestion_warning_message:"posthog-js client rate limited. Config is set to ".concat(this.captureEventsPerSecond," events per second and ").concat(this.captureEventsBurstLimit," events burst limit.")},{skip_client_rate_limiting:!0}),this.lastEventRateLimited=s,null===(n=this.instance.persistence)||void 0===n||n.set_property(Qe,o),{isRateLimited:s,remainingTokens:o.tokens}}isServerRateLimited(e){var t=this.serverLimits[e||"events"]||!1
return!1!==t&&(new Date).getTime()<t}}var gs=re("[RemoteConfig]")
class _s{constructor(e){this.instance=e}get remoteConfig(){var e,t
return null===(e=L._POSTHOG_REMOTE_CONFIG)||void 0===e||null===(t=e[this.instance.config.token])||void 0===t?void 0:t.config}_loadRemoteConfigJs(e){var t,n,r
null!==(t=L.__PosthogExtensions__)&&void 0!==t&&t.loadExternalDependency?null===(n=L.__PosthogExtensions__)||void 0===n||null===(r=n.loadExternalDependency)||void 0===r||r.call(n,this.instance,"remote-config",(()=>e(this.remoteConfig))):(gs.error("PostHog Extensions not found. Cannot load remote config."),e())}_loadRemoteConfigJSON(e){this.instance._send_request({method:"GET",url:this.instance.requestRouter.endpointFor("assets","/array/".concat(this.instance.config.token,"/config")),callback:t=>{e(t.json)}})}load(){try{if(this.remoteConfig)return gs.info("Using preloaded remote config",this.remoteConfig),void this.onRemoteConfig(this.remoteConfig)
if(this.instance.config.advanced_disable_decide)return void gs.warn("Remote config is disabled. Falling back to local config.")
this._loadRemoteConfigJs((e=>{if(!e)return gs.info("No config found after loading remote JS config. Falling back to JSON."),void this._loadRemoteConfigJSON((e=>{this.onRemoteConfig(e)}))
this.onRemoteConfig(e)}))}catch(e){gs.error("Error loading remote config",e)}}onRemoteConfig(e){e?this.instance.config.__preview_remote_config?(this.instance._onRemoteConfig(e),!1!==e.hasFeatureFlags&&this.instance.featureFlags.ensureFlagsLoaded()):gs.info("__preview_remote_config is disabled. Logging config instead",e):gs.error("Failed to fetch remote config from PostHog.")}}var ms=!!C||!!E,bs="text/plain",ys=(e,t)=>{var[n,r]=e.split("?"),i=p({},t)
null==r||r.split("&").forEach((e=>{var[t]=e.split("=")
delete i[t]}))
var o=function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",i=[]
return se(e,(function(e,r){W(e)||W(r)||"undefined"===r||(t=encodeURIComponent((e=>e instanceof File)(e)?e.name:e.toString()),n=encodeURIComponent(r),i[i.length]=n+"="+t)})),i.join(r)}(i)
return o=o?(r?r+"&":"")+o:r,"".concat(n,"?").concat(o)},ws=(e,t)=>JSON.stringify(e,((e,t)=>"bigint"==typeof t?t.toString():t),t),ks=e=>{var{data:t,compression:n}=e
if(t){if(n===g.GZipJS){var r=Ar(jr(ws(t)),{mtime:0}),i=new Blob([r],{type:bs})
return{contentType:bs,body:i,estimatedSize:i.size}}if(n===g.Base64){var o=function(e){var t,n,r,i,o,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a=0,l=0,c="",u=[]
if(!e)return e
e=function(e){var t,n,r,i,o=""
for(t=n=0,r=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,i=0;i<r;i++){var s=e.charCodeAt(i),a=null
s<128?n++:a=s>127&&s<2048?String.fromCharCode(s>>6|192,63&s|128):String.fromCharCode(s>>12|224,s>>6&63|128,63&s|128),Q(a)||(n>t&&(o+=e.substring(t,n)),o+=a,t=n=i+1)}return n>t&&(o+=e.substring(t,e.length)),o}(e)
do{t=(o=e.charCodeAt(a++)<<16|e.charCodeAt(a++)<<8|e.charCodeAt(a++))>>18&63,n=o>>12&63,r=o>>6&63,i=63&o,u[l++]=s.charAt(t)+s.charAt(n)+s.charAt(r)+s.charAt(i)}while(a<e.length)
switch(c=u.join(""),e.length%3){case 1:c=c.slice(0,-2)+"=="
break
case 2:c=c.slice(0,-1)+"="}return c}(ws(t)),s=(e=>"data="+encodeURIComponent("string"==typeof e?e:ws(e)))(o)
return{contentType:"application/x-www-form-urlencoded",body:s,estimatedSize:new Blob([s]).size}}var a=ws(t)
return{contentType:"application/json",body:a,estimatedSize:new Blob([a]).size}}},Ss=[]
E&&Ss.push({transport:"fetch",method:e=>{var t,n,{contentType:r,body:i,estimatedSize:o}=null!==(t=ks(e))&&void 0!==t?t:{},s=new Headers
se(e.headers,(function(e,t){s.append(t,e)})),r&&s.append("Content-Type",r)
var a=e.url,l=null
if(P){var c=new P
l={signal:c.signal,timeout:setTimeout((()=>c.abort()),e.timeout)}}E(a,p({method:(null==e?void 0:e.method)||"GET",headers:s,keepalive:"POST"===e.method&&(o||0)<52428.8,body:i,signal:null===(n=l)||void 0===n?void 0:n.signal},e.fetchOptions)).then((t=>t.text().then((n=>{var r,i={statusCode:t.status,text:n}
if(200===t.status)try{i.json=JSON.parse(n)}catch(e){ne.error(e)}null===(r=e.callback)||void 0===r||r.call(e,i)})))).catch((t=>{var n
ne.error(t),null===(n=e.callback)||void 0===n||n.call(e,{statusCode:0,text:t})})).finally((()=>l?clearTimeout(l.timeout):null))}}),C&&Ss.push({transport:"XHR",method:e=>{var t,n=new C
n.open(e.method||"GET",e.url,!0)
var{contentType:r,body:i}=null!==(t=ks(e))&&void 0!==t?t:{}
se(e.headers,(function(e,t){n.setRequestHeader(t,e)})),r&&n.setRequestHeader("Content-Type",r),e.timeout&&(n.timeout=e.timeout),n.withCredentials=!0,n.onreadystatechange=()=>{if(4===n.readyState){var t,r={statusCode:n.status,text:n.responseText}
if(200===n.status)try{r.json=JSON.parse(n.responseText)}catch(e){}null===(t=e.callback)||void 0===t||t.call(e,r)}},n.send(i)}}),null!=k&&k.sendBeacon&&Ss.push({transport:"sendBeacon",method:e=>{var t=ys(e.url,{beacon:"1"})
try{var n,{contentType:r,body:i}=null!==(n=ks(e))&&void 0!==n?n:{},o="string"==typeof i?new Blob([i],{type:r}):i
k.sendBeacon(t,o)}catch(e){}}})
var xs=3e3
class Es{constructor(e,t){h(this,"isPaused",!0),h(this,"queue",[]),this.flushTimeoutMs=Yn((null==t?void 0:t.flush_interval_ms)||xs,250,5e3,"flush interval",xs),this.sendRequest=e}enqueue(e){this.queue.push(e),this.flushTimeout||this.setFlushTimeout()}unload(){this.clearFlushTimeout()
var e=this.queue.length>0?this.formatQueue():{},t=Object.values(e),n=[...t.filter((e=>0===e.url.indexOf("/e"))),...t.filter((e=>0!==e.url.indexOf("/e")))]
n.map((e=>{this.sendRequest(p(p({},e),{},{transport:"sendBeacon"}))}))}enable(){this.isPaused=!1,this.setFlushTimeout()}setFlushTimeout(){var e=this
this.isPaused||(this.flushTimeout=setTimeout((()=>{if(this.clearFlushTimeout(),this.queue.length>0){var t=this.formatQueue(),n=function(n){var r=t[n],i=(new Date).getTime()
r.data&&q(r.data)&&se(r.data,(e=>{e.offset=Math.abs(e.timestamp-i),delete e.timestamp})),e.sendRequest(r)}
for(var r in t)n(r)}}),this.flushTimeoutMs))}clearFlushTimeout(){clearTimeout(this.flushTimeout),this.flushTimeout=void 0}formatQueue(){var e={}
return se(this.queue,(t=>{var n,r=t,i=(r?r.batchKey:null)||r.url
W(e[i])&&(e[i]=p(p({},r),{},{data:[]})),null===(n=e[i].data)||void 0===n||n.push(r.data)})),this.queue=[],e}}var Cs=["retriesPerformedSoFar"]
class Ps{constructor(e){h(this,"isPolling",!1),h(this,"pollIntervalMs",3e3),h(this,"queue",[]),this.instance=e,this.queue=[],this.areWeOnline=!0,!W(_)&&"onLine"in _.navigator&&(this.areWeOnline=_.navigator.onLine,ge(_,"online",(()=>{this.areWeOnline=!0,this.flush()})),ge(_,"offline",(()=>{this.areWeOnline=!1})))}retriableRequest(e){var{retriesPerformedSoFar:t}=e,n=v(e,Cs)
K(t)&&t>0&&(n.url=ys(n.url,{retry_count:t})),this.instance._send_request(p(p({},n),{},{callback:e=>{var r
200!==e.statusCode&&(e.statusCode<400||e.statusCode>=500)&&(null!=t?t:0)<10?this.enqueue(p({retriesPerformedSoFar:t},n)):null===(r=n.callback)||void 0===r||r.call(n,e)}}))}enqueue(e){var t=e.retriesPerformedSoFar||0
e.retriesPerformedSoFar=t+1
var n=function(e){var t=3e3*Math.pow(2,e),n=t/2,r=Math.min(18e5,t),i=(Math.random()-.5)*(r-n)
return Math.ceil(r+i)}(t),r=Date.now()+n
this.queue.push({retryAt:r,requestOptions:e})
var i="Enqueued failed request for retry in ".concat(n)
navigator.onLine||(i+=" (Browser is offline)"),ne.warn(i),this.isPolling||(this.isPolling=!0,this.poll())}poll(){this.poller&&clearTimeout(this.poller),this.poller=setTimeout((()=>{this.areWeOnline&&this.queue.length>0&&this.flush(),this.poll()}),this.pollIntervalMs)}flush(){var e=Date.now(),t=[],n=this.queue.filter((n=>n.retryAt<e||(t.push(n),!1)))
if(this.queue=t,n.length>0)for(var{requestOptions:r}of n)this.retriableRequest(r)}unload(){for(var{requestOptions:e}of(this.poller&&(clearTimeout(this.poller),this.poller=void 0),this.queue))try{this.instance._send_request(p(p({},e),{},{transport:"sendBeacon"}))}catch(e){ne.error(e)}this.queue=[]}}class Ts{constructor(e){h(this,"_updateScrollData",(()=>{var e,t,n,r
this.context||(this.context={})
var i=this.scrollElement(),o=this.scrollY(),s=i?Math.max(0,i.scrollHeight-i.clientHeight):0,a=o+((null==i?void 0:i.clientHeight)||0),l=(null==i?void 0:i.scrollHeight)||0
this.context.lastScrollY=Math.ceil(o),this.context.maxScrollY=Math.max(o,null!==(e=this.context.maxScrollY)&&void 0!==e?e:0),this.context.maxScrollHeight=Math.max(s,null!==(t=this.context.maxScrollHeight)&&void 0!==t?t:0),this.context.lastContentY=a,this.context.maxContentY=Math.max(a,null!==(n=this.context.maxContentY)&&void 0!==n?n:0),this.context.maxContentHeight=Math.max(l,null!==(r=this.context.maxContentHeight)&&void 0!==r?r:0)})),this.instance=e}getContext(){return this.context}resetContext(){var e=this.context
return setTimeout(this._updateScrollData,0),e}startMeasuringScrollPosition(){ge(_,"scroll",this._updateScrollData,{capture:!0}),ge(_,"scrollend",this._updateScrollData,{capture:!0}),ge(_,"resize",this._updateScrollData)}scrollElement(){if(!this.instance.config.scroll_root_selector)return null==_?void 0:_.document.documentElement
var e=q(this.instance.config.scroll_root_selector)?this.instance.config.scroll_root_selector:[this.instance.config.scroll_root_selector]
for(var t of e){var n=null==_?void 0:_.document.querySelector(t)
if(n)return n}}scrollY(){if(this.instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollTop||0}return _&&(_.scrollY||_.pageYOffset||_.document.documentElement.scrollTop)||0}scrollX(){if(this.instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollLeft||0}return _&&(_.scrollX||_.pageXOffset||_.document.documentElement.scrollLeft)||0}}var $s=e=>fo.personInfo({maskPersonalDataProperties:null==e?void 0:e.config.mask_personal_data_properties,customPersonalDataProperties:null==e?void 0:e.config.custom_personal_data_properties})
class Ls{constructor(e,t,n,r){h(this,"_onSessionIdCallback",(e=>{var t=this._getStored()
if(!t||t.sessionId!==e){var n={sessionId:e,props:this._sessionSourceParamGenerator(this.instance)}
this._persistence.register({[Ve]:n})}})),this.instance=e,this._sessionIdManager=t,this._persistence=n,this._sessionSourceParamGenerator=r||$s,this._sessionIdManager.onSessionId(this._onSessionIdCallback)}_getStored(){return this._persistence.props[Ve]}getSetOnceProps(){var e,t=null===(e=this._getStored())||void 0===e?void 0:e.props
return t?"r"in t?fo.personPropsFromInfo(t):{$referring_domain:t.referringDomain,$pathname:t.initialPathName,utm_source:t.utm_source,utm_campaign:t.utm_campaign,utm_medium:t.utm_medium,utm_content:t.utm_content,utm_term:t.utm_term}:{}}getSessionProps(){var e={}
return se(fe(this.getSetOnceProps()),((t,n)=>{"$current_url"===n&&(n="url"),e["$session_entry_".concat(A(n))]=t})),e}}var Is=re("[SessionId]")
class Os{constructor(e,t,n){var r
if(h(this,"_sessionIdChangedHandlers",[]),!e.persistence)throw new Error("SessionIdManager requires a PostHogPersistence instance")
if(e.config.__preview_experimental_cookieless_mode)throw new Error("SessionIdManager cannot be used with __preview_experimental_cookieless_mode")
this.config=e.config,this.persistence=e.persistence,this._windowId=void 0,this._sessionId=void 0,this._sessionStartTimestamp=null,this._sessionActivityTimestamp=null,this._sessionIdGenerator=t||zt,this._windowIdGenerator=n||zt
var i=this.config.persistence_name||this.config.token,o=this.config.session_idle_timeout_seconds||1800
if(this._sessionTimeoutMs=1e3*Yn(o,60,36e3,"session_idle_timeout_seconds",1800),e.register({$configured_session_timeout_ms:this._sessionTimeoutMs}),this.resetIdleTimer(),this._window_id_storage_key="ph_"+i+"_window_id",this._primary_window_exists_storage_key="ph_"+i+"_primary_window_exists",this._canUseSessionStorage()){var s=sn.parse(this._window_id_storage_key),a=sn.parse(this._primary_window_exists_storage_key)
s&&!a?this._windowId=s:sn.remove(this._window_id_storage_key),sn.set(this._primary_window_exists_storage_key,!0)}if(null!==(r=this.config.bootstrap)&&void 0!==r&&r.sessionID)try{var l=(e=>{var t=this.config.bootstrap.sessionID.replace(/-/g,"")
if(32!==t.length)throw new Error("Not a valid UUID")
if("7"!==t[12])throw new Error("Not a UUIDv7")
return parseInt(t.substring(0,12),16)})()
this._setSessionId(this.config.bootstrap.sessionID,(new Date).getTime(),l)}catch(e){Is.error("Invalid sessionID in bootstrap",e)}this._listenToReloadWindow()}get sessionTimeoutMs(){return this._sessionTimeoutMs}onSessionId(e){return W(this._sessionIdChangedHandlers)&&(this._sessionIdChangedHandlers=[]),this._sessionIdChangedHandlers.push(e),this._sessionId&&e(this._sessionId,this._windowId),()=>{this._sessionIdChangedHandlers=this._sessionIdChangedHandlers.filter((t=>t!==e))}}_canUseSessionStorage(){return"memory"!==this.config.persistence&&!this.persistence.disabled&&sn.is_supported()}_setWindowId(e){e!==this._windowId&&(this._windowId=e,this._canUseSessionStorage()&&sn.set(this._window_id_storage_key,e))}_getWindowId(){return this._windowId?this._windowId:this._canUseSessionStorage()?sn.parse(this._window_id_storage_key):null}_setSessionId(e,t,n){e===this._sessionId&&t===this._sessionActivityTimestamp&&n===this._sessionStartTimestamp||(this._sessionStartTimestamp=n,this._sessionActivityTimestamp=t,this._sessionId=e,this.persistence.register({[Me]:[t,e,n]}))}_getSessionId(){if(this._sessionId&&this._sessionActivityTimestamp&&this._sessionStartTimestamp)return[this._sessionActivityTimestamp,this._sessionId,this._sessionStartTimestamp]
var e=this.persistence.props[Me]
return q(e)&&2===e.length&&e.push(e[0]),e||[0,null,0]}resetSessionId(){this._setSessionId(null,null,null)}_listenToReloadWindow(){ge(_,"beforeunload",(()=>{this._canUseSessionStorage()&&sn.remove(this._primary_window_exists_storage_key)}),{capture:!1})}checkAndGetSessionAndWindowId(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(this.config.__preview_experimental_cookieless_mode)throw new Error("checkAndGetSessionAndWindowId should not be called in __preview_experimental_cookieless_mode")
var n=t||(new Date).getTime(),[r,i,o]=this._getSessionId(),s=this._getWindowId(),a=K(o)&&o>0&&Math.abs(n-o)>864e5,l=!1,c=!i,u=!e&&Math.abs(n-r)>this.sessionTimeoutMs
c||u||a?(i=this._sessionIdGenerator(),s=this._windowIdGenerator(),Is.info("new session ID generated",{sessionId:i,windowId:s,changeReason:{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}}),o=n,l=!0):s||(s=this._windowIdGenerator(),l=!0)
var d=0===r||!e||a?n:r,f=0===o?(new Date).getTime():o
return this._setWindowId(s),this._setSessionId(i,d,f),e||this.resetIdleTimer(),l&&this._sessionIdChangedHandlers.forEach((e=>e(i,s,l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0))),{sessionId:i,windowId:s,sessionStartTimestamp:f,changeReason:l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0,lastActivityTimestamp:r}}resetIdleTimer(){clearTimeout(this._enforceIdleTimeout),this._enforceIdleTimeout=setTimeout((()=>{this.resetSessionId()}),1.1*this.sessionTimeoutMs)}}var Rs=["$set_once","$set"],Ms=re("[SiteApps]")
class Fs{constructor(e){this.instance=e,this.bufferedInvocations=[],this.apps={}}get isEnabled(){return!!this.instance.config.opt_in_site_apps}eventCollector(e,t){if(t){var n=this.globalsForEvent(t)
this.bufferedInvocations.push(n),this.bufferedInvocations.length>1e3&&(this.bufferedInvocations=this.bufferedInvocations.slice(10))}}get siteAppLoaders(){var e,t
return null===(e=L._POSTHOG_REMOTE_CONFIG)||void 0===e||null===(t=e[this.instance.config.token])||void 0===t?void 0:t.siteApps}init(){if(this.isEnabled){var e=this.instance._addCaptureHook(this.eventCollector.bind(this))
this.stopBuffering=()=>{e(),this.bufferedInvocations=[],this.stopBuffering=void 0}}}globalsForEvent(e){var t,n,r,i,o,s,a
if(!e)throw new Error("Event payload is required")
var l={},c=this.instance.get_property("$groups")||[],u=this.instance.get_property("$stored_group_properties")||{}
for(var[d,f]of Object.entries(u))l[d]={id:c[d],type:d,properties:f}
var{$set_once:h,$set:g}=e
return{event:p(p({},v(e,Rs)),{},{properties:p(p(p({},e.properties),g?{$set:p(p({},null!==(t=null===(n=e.properties)||void 0===n?void 0:n.$set)&&void 0!==t?t:{}),g)}:{}),h?{$set_once:p(p({},null!==(r=null===(i=e.properties)||void 0===i?void 0:i.$set_once)&&void 0!==r?r:{}),h)}:{}),elements_chain:null!==(o=null===(s=e.properties)||void 0===s?void 0:s.$elements_chain)&&void 0!==o?o:"",distinct_id:null===(a=e.properties)||void 0===a?void 0:a.distinct_id}),person:{properties:this.instance.get_property("$stored_person_properties")},groups:l}}setupSiteApp(e){var t=this.apps[e.id],n=()=>{var n
!t.errored&&this.bufferedInvocations.length&&(Ms.info("Processing ".concat(this.bufferedInvocations.length," events for site app with id ").concat(e.id)),this.bufferedInvocations.forEach((e=>{var n
return null===(n=t.processEvent)||void 0===n?void 0:n.call(t,e)})),t.processedBuffer=!0),Object.values(this.apps).every((e=>e.processedBuffer||e.errored))&&(null===(n=this.stopBuffering)||void 0===n||n.call(this))},r=!1,i=i=>{t.errored=!i,t.loaded=!0,Ms.info("Site app with id ".concat(e.id," ").concat(i?"loaded":"errored")),r&&n()}
try{var{processEvent:o}=e.init({posthog:this.instance,callback:e=>{i(e)}})
o&&(t.processEvent=o),r=!0}catch(t){Ms.error("Error while initializing PostHog app with config id ".concat(e.id),t),i(!1)}if(r&&t.loaded)try{n()}catch(n){Ms.error("Error while processing buffered events PostHog app with config id ".concat(e.id),n),t.errored=!0}}setupSiteApps(){var e=this.siteAppLoaders||[]
for(var t of e)this.apps[t.id]={id:t.id,loaded:!1,errored:!1,processedBuffer:!1}
for(var n of e)this.setupSiteApp(n)}onCapturedEvent(e){if(0!==Object.keys(this.apps).length){var t=this.globalsForEvent(e)
for(var n of Object.values(this.apps))try{var r
null===(r=n.processEvent)||void 0===r||r.call(n,t)}catch(t){Ms.error("Error while processing event ".concat(e.event," for site app ").concat(n.id),t)}}}onRemoteConfig(e){var t,n,r,i=this
if(null!==(t=this.siteAppLoaders)&&void 0!==t&&t.length)return this.isEnabled?(this.setupSiteApps(),void this.instance.on("eventCaptured",(e=>this.onCapturedEvent(e)))):void Ms.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
if(null===(n=this.stopBuffering)||void 0===n||n.call(this),null!==(r=e.siteApps)&&void 0!==r&&r.length)if(this.isEnabled){var o=function(e,t){var n,r
L["__$$ph_site_app_".concat(e)]=i.instance,null===(n=L.__PosthogExtensions__)||void 0===n||null===(r=n.loadSiteApp)||void 0===r||r.call(n,i.instance,t,(t=>{if(t)return Ms.error("Error while initializing PostHog app with config id ".concat(e),t)}))}
for(var{id:s,url:a}of e.siteApps)o(s,a)}else Ms.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')}}var As,js=["amazonbot","amazonproductbot","app.hypefactors.com","applebot","archive.org_bot","awariobot","backlinksextendedbot","baiduspider","bingbot","bingpreview","chrome-lighthouse","dataforseobot","deepscan","duckduckbot","facebookexternal","facebookcatalog","http://yandex.com/bots","hubspot","ia_archiver","linkedinbot","meta-externalagent","mj12bot","msnbot","nessus","petalbot","pinterest","prerender","rogerbot","screaming frog","sebot-wa","sitebulb","slackbot","slurp","trendictionbot","turnitin","twitterbot","vercelbot","yahoo! slurp","yandexbot","zoombot","bot.htm","bot.php","(bot;","bot/","crawler","ahrefsbot","ahrefssiteaudit","semrushbot","siteauditbot","splitsignalbot","gptbot","oai-searchbot","chatgpt-user","perplexitybot","better uptime bot","sentryuptimebot","uptimerobot","headlesschrome","cypress","google-hoteladsverifier","adsbot-google","apis-google","duplexweb-google","feedfetcher-google","google favicon","google web preview","google-read-aloud","googlebot","googleweblight","mediapartners-google","storebot-google","bytespider"],Ns=function(e,t){if(!e)return!1
var n=e.toLowerCase()
return js.concat(t||[]).some((e=>{var t=e.toLowerCase()
return-1!==n.indexOf(t)}))},Ds=function(e,t){if(!e)return!1
var n=e.userAgent
if(n&&Ns(n,t))return!0
try{var r=null==e?void 0:e.userAgentData
if(null!=r&&r.brands&&r.brands.some((e=>Ns(null==e?void 0:e.brand,t))))return!0}catch(e){}return!!e.webdriver}
function Bs(e,t,n){return ws({distinct_id:e,userPropertiesToSet:t,userPropertiesToSetOnce:n})}!function(e){e.US="us",e.EU="eu",e.CUSTOM="custom"}(As||(As={}))
var qs="i.posthog.com"
class Hs{constructor(e){h(this,"_regionCache",{}),this.instance=e}get apiHost(){var e=this.instance.config.api_host.trim().replace(/\/$/,"")
return"https://app.posthog.com"===e?"https://us.i.posthog.com":e}get uiHost(){var e,t=null===(e=this.instance.config.ui_host)||void 0===e?void 0:e.replace(/\/$/,"")
return t||(t=this.apiHost.replace(".".concat(qs),".posthog.com")),"https://app.posthog.com"===t?"https://us.posthog.com":t}get region(){return this._regionCache[this.apiHost]||(/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=As.US:/https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=As.EU:this._regionCache[this.apiHost]=As.CUSTOM),this._regionCache[this.apiHost]}endpointFor(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
if(t&&(t="/"===t[0]?t:"/".concat(t)),"ui"===e)return this.uiHost+t
if(this.region===As.CUSTOM)return this.apiHost+t
var n=qs+t
switch(e){case"assets":return"https://".concat(this.region,"-assets.").concat(n)
case"api":return"https://".concat(this.region,".").concat(n)}}}var Us={icontains:(e,t)=>!!_&&t.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:(e,t)=>!!_&&-1===t.href.toLowerCase().indexOf(e.toLowerCase()),regex:(e,t)=>!!_&&ss(t.href,e),not_regex:(e,t)=>!!_&&!ss(t.href,e),exact:(e,t)=>t.href===e,is_not:(e,t)=>t.href!==e}
class Gs{constructor(e){var t=this
h(this,"getWebExperimentsAndEvaluateDisplayLogic",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
t.getWebExperiments((e=>{Gs.logInfo("retrieved web experiments from the server"),t._flagToExperiments=new Map,e.forEach((e=>{if(e.feature_flag_key){var n
t._flagToExperiments&&(Gs.logInfo("setting flag key ",e.feature_flag_key," to web experiment ",e),null===(n=t._flagToExperiments)||void 0===n||n.set(e.feature_flag_key,e))
var r=t.instance.getFeatureFlag(e.feature_flag_key)
z(r)&&e.variants[r]&&t.applyTransforms(e.name,r,e.variants[r].transforms)}else if(e.variants)for(var i in e.variants){var o=e.variants[i]
Gs.matchesTestVariant(o)&&t.applyTransforms(e.name,i,o.transforms)}}))}),e)})),this.instance=e,this.instance.onFeatureFlags((e=>{this.onFeatureFlags(e)}))}onFeatureFlags(e){if(this._is_bot())Gs.logInfo("Refusing to render web experiment since the viewer is a likely bot")
else if(!this.instance.config.disable_web_experiments){if(J(this._flagToExperiments))return this._flagToExperiments=new Map,this.loadIfEnabled(),void this.previewWebExperiment()
Gs.logInfo("applying feature flags",e),e.forEach((e=>{var t
if(this._flagToExperiments&&null!==(t=this._flagToExperiments)&&void 0!==t&&t.has(e)){var n,r=this.instance.getFeatureFlag(e),i=null===(n=this._flagToExperiments)||void 0===n?void 0:n.get(e)
r&&null!=i&&i.variants[r]&&this.applyTransforms(i.name,r,i.variants[r].transforms)}}))}}previewWebExperiment(){var e=Gs.getWindowLocation()
if(null!=e&&e.search){var t=Ot(null==e?void 0:e.search,"__experiment_id"),n=Ot(null==e?void 0:e.search,"__experiment_variant")
t&&n&&(Gs.logInfo("previewing web experiments ".concat(t," && ").concat(n)),this.getWebExperiments((e=>{this.showPreviewWebExperiment(parseInt(t),n,e)}),!1,!0))}}loadIfEnabled(){this.instance.config.disable_web_experiments||this.getWebExperimentsAndEvaluateDisplayLogic()}getWebExperiments(e,t,n){if(this.instance.config.disable_web_experiments&&!n)return e([])
var r=this.instance.get_property("$web_experiments")
if(r&&!t)return e(r)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api","/api/web_experiments/?token=".concat(this.instance.config.token)),method:"GET",callback:t=>{if(200!==t.statusCode||!t.json)return e([])
var n=t.json.experiments||[]
return e(n)}})}showPreviewWebExperiment(e,t,n){var r=n.filter((t=>t.id===e))
r&&r.length>0&&(Gs.logInfo("Previewing web experiment [".concat(r[0].name,"] with variant [").concat(t,"]")),this.applyTransforms(r[0].name,t,r[0].variants[t].transforms))}static matchesTestVariant(e){return!J(e.conditions)&&Gs.matchUrlConditions(e)&&Gs.matchUTMConditions(e)}static matchUrlConditions(e){var t
if(J(e.conditions)||J(null===(t=e.conditions)||void 0===t?void 0:t.url))return!0
var n,r,i,o=Gs.getWindowLocation()
return!!o&&(null===(n=e.conditions)||void 0===n||!n.url||Us[null!==(r=null===(i=e.conditions)||void 0===i?void 0:i.urlMatchType)&&void 0!==r?r:"icontains"](e.conditions.url,o))}static getWindowLocation(){return null==_?void 0:_.location}static matchUTMConditions(e){var t
if(J(e.conditions)||J(null===(t=e.conditions)||void 0===t?void 0:t.utm))return!0
var n=fo.campaignParams()
if(n.utm_source){var r,i,o,s,a,l,c,u,d,f,p,h,v,g,_,m,b=null===(r=e.conditions)||void 0===r||null===(i=r.utm)||void 0===i||!i.utm_campaign||(null===(o=e.conditions)||void 0===o||null===(s=o.utm)||void 0===s?void 0:s.utm_campaign)==n.utm_campaign,y=null===(a=e.conditions)||void 0===a||null===(l=a.utm)||void 0===l||!l.utm_source||(null===(c=e.conditions)||void 0===c||null===(u=c.utm)||void 0===u?void 0:u.utm_source)==n.utm_source,w=null===(d=e.conditions)||void 0===d||null===(f=d.utm)||void 0===f||!f.utm_medium||(null===(p=e.conditions)||void 0===p||null===(h=p.utm)||void 0===h?void 0:h.utm_medium)==n.utm_medium,k=null===(v=e.conditions)||void 0===v||null===(g=v.utm)||void 0===g||!g.utm_term||(null===(_=e.conditions)||void 0===_||null===(m=_.utm)||void 0===m?void 0:m.utm_term)==n.utm_term
return b&&w&&k&&y}return!1}static logInfo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
ne.info("[WebExperiments] ".concat(e),n)}applyTransforms(e,t,n){this._is_bot()?Gs.logInfo("Refusing to render web experiment since the viewer is a likely bot"):"control"!==t?n.forEach((n=>{if(n.selector){var r
Gs.logInfo("applying transform of variant ".concat(t," for experiment ").concat(e," "),n)
var i=null===(r=document)||void 0===r?void 0:r.querySelectorAll(n.selector)
null==i||i.forEach((e=>{var t=e
n.html&&(t.innerHTML=n.html),n.css&&t.setAttribute("style",n.css)}))}})):Gs.logInfo("Control variants leave the page unmodified.")}_is_bot(){return k&&this.instance?Ds(k,this.instance.config.custom_blocked_useragents):void 0}}var Ws={},zs=()=>{},Vs="posthog",Qs=!ms&&-1===(null==T?void 0:T.indexOf("MSIE"))&&-1===(null==T?void 0:T.indexOf("Mozilla")),Js=()=>{var e
return{api_host:"https://us.i.posthog.com",ui_host:null,token:"",autocapture:!0,rageclick:!0,cross_subdomain_cookie:he(null==S?void 0:S.location),persistence:"localStorage+cookie",persistence_name:"",loaded:zs,save_campaign_params:!0,custom_campaign_params:[],custom_blocked_useragents:[],save_referrer:!0,capture_pageview:!0,capture_pageleave:"if_capture_pageview",debug:x&&z(null==x?void 0:x.search)&&-1!==x.search.indexOf("__posthog_debug=true")||!1,cookie_expiration:365,upgrade:!1,disable_session_recording:!1,disable_persistence:!1,disable_web_experiments:!0,disable_surveys:!1,disable_external_dependency_loading:!1,enable_recording_console_log:void 0,secure_cookie:"https:"===(null==_||null===(e=_.location)||void 0===e?void 0:e.protocol),ip:!0,opt_out_capturing_by_default:!1,opt_out_persistence_by_default:!1,opt_out_useragent_filter:!1,opt_out_capturing_persistence_type:"localStorage",opt_out_capturing_cookie_prefix:null,opt_in_site_apps:!1,property_denylist:[],respect_dnt:!1,sanitize_properties:null,request_headers:{},request_batching:!0,properties_string_max_length:65535,session_recording:{},mask_all_element_attributes:!1,mask_all_text:!1,mask_personal_data_properties:!1,custom_personal_data_properties:[],advanced_disable_decide:!1,advanced_disable_feature_flags:!1,advanced_disable_feature_flags_on_first_load:!1,advanced_disable_toolbar_metrics:!1,feature_flag_request_timeout_ms:3e3,surveys_request_timeout_ms:1e4,on_request_error:e=>{var t="Bad HTTP status: "+e.statusCode+" "+e.text
ne.error(t)},get_device_id:e=>e,capture_performance:void 0,name:"posthog",bootstrap:{},disable_compression:!1,session_idle_timeout_seconds:1800,person_profiles:"identified_only",before_send:void 0,request_queue_config:{flush_interval_ms:xs},_onCapture:zs}},Ks=e=>{var t={}
W(e.process_person)||(t.person_profiles=e.process_person),W(e.xhr_headers)||(t.request_headers=e.xhr_headers),W(e.cookie_name)||(t.persistence_name=e.cookie_name),W(e.disable_cookie)||(t.disable_persistence=e.disable_cookie),W(e.store_google)||(t.save_campaign_params=e.store_google),W(e.verbose)||(t.debug=e.verbose)
var n=ae({},t,e)
return q(e.property_blacklist)&&(W(e.property_denylist)?n.property_denylist=e.property_blacklist:q(e.property_denylist)?n.property_denylist=[...e.property_blacklist,...e.property_denylist]:ne.error("Invalid value for property_denylist config: "+e.property_denylist)),n}
class Xs{constructor(){h(this,"__forceAllowLocalhost",!1)}get _forceAllowLocalhost(){return this.__forceAllowLocalhost}set _forceAllowLocalhost(e){ne.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),this.__forceAllowLocalhost=e}}class Ys{get decideEndpointWasHit(){var e,t
return null!==(e=null===(t=this.featureFlags)||void 0===t?void 0:t.hasLoadedFlags)&&void 0!==e&&e}constructor(){h(this,"webPerformance",new Xs),h(this,"_personProcessingSetOncePropertiesSent",!1),h(this,"version",ee.LIB_VERSION),h(this,"_internalEventEmitter",new as),this.config=Js(),this.SentryIntegration=Kr,this.sentryIntegration=e=>function(e,t){var n=Jr(e,t)
return{name:Qr,processEvent:e=>n(e)}}(this,e),this.__request_queue=[],this.__loaded=!1,this.analyticsDefaultEndpoint="/e/",this._initialPageviewCaptured=!1,this._initialPersonProfilesConfig=null,this._cachedPersonProperties=null,this.featureFlags=new yo(this),this.toolbar=new ti(this),this.scrollManager=new Ts(this),this.pageViewManager=new ui(this),this.surveys=new ps(this),this.experiments=new Gs(this),this.exceptions=new di(this),this.rateLimiter=new vs(this),this.requestRouter=new Hs(this),this.consent=new an(this),this.people={set:(e,t,n)=>{var r=z(e)?{[e]:t}:e
this.setPersonProperties(r),null==n||n({})},set_once:(e,t,n)=>{var r=z(e)?{[e]:t}:e
this.setPersonProperties(void 0,r),null==n||n({})}},this.on("eventCaptured",(e=>ne.info('send "'.concat(null==e?void 0:e.event,'"'),e)))}init(e,t,n){if(n&&n!==Vs){var r,i=null!==(r=Ws[n])&&void 0!==r?r:new Ys
return i._init(e,t,n),Ws[n]=i,Ws[Vs][n]=i,i}return this._init(e,t,n)}_init(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0
if(W(e)||V(e))return ne.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),this
if(this.__loaded)return ne.warn("You have already initialized PostHog! Re-initializing is a no-op"),this
this.__loaded=!0,this.config={},this._triggered_notifs=[],r.person_profiles&&(this._initialPersonProfilesConfig=r.person_profiles),this.set_config(ae({},Js(),Ks(r),{name:i,token:e})),this.config.on_xhr_error&&ne.error("on_xhr_error is deprecated. Use on_request_error instead"),this.compression=r.disable_compression?void 0:g.GZipJS,this.persistence=new ko(this.config),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new ko(p(p({},this.config),{},{persistence:"sessionStorage"}))
var o=p({},this.persistence.props),s=p({},this.sessionPersistence.props)
if(this._requestQueue=new Es((e=>this._send_retriable_request(e)),this.config.request_queue_config),this._retryQueue=new Ps(this),this.__request_queue=[],this.config.__preview_experimental_cookieless_mode||(this.sessionManager=new Os(this),this.sessionPropsManager=new Ls(this,this.sessionManager,this.persistence)),new ri(this).startIfEnabledOrStop(),this.siteApps=new Fs(this),null===(t=this.siteApps)||void 0===t||t.init(),this.config.__preview_experimental_cookieless_mode||(this.sessionRecording=new zr(this),this.sessionRecording.startIfEnabledOrStop()),this.config.disable_scroll_properties||this.scrollManager.startMeasuringScrollPosition(),this.autocapture=new Dt(this),this.autocapture.startIfEnabled(),this.surveys.loadIfEnabled(),this.heatmaps=new ci(this),this.heatmaps.startIfEnabled(),this.webVitalsAutocapture=new si(this),this.exceptionObserver=new pn(this),this.exceptionObserver.startIfEnabled(),this.deadClicksAutocapture=new dn(this,un),this.deadClicksAutocapture.startIfEnabled(),ee.DEBUG=ee.DEBUG||this.config.debug,ee.DEBUG&&ne.info("Starting in debug mode",{this:this,config:r,thisC:p({},this.config),p:o,s:s}),this._sync_opt_out_with_persistence(),void 0!==(null===(n=r.bootstrap)||void 0===n?void 0:n.distinctID)){var a,l,c=this.config.get_device_id(zt()),u=null!==(a=r.bootstrap)&&void 0!==a&&a.isIdentifiedID?c:r.bootstrap.distinctID
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
"then"in i&&H(i.then)?i.then((e=>r(e))):r(i)}(e,(()=>{n.register((e=>{Promise&&Promise.resolve||Vr.warn("This browser does not have Promise support, and can not use the segment integration")
var t=(t,n)=>{var r
if(!n)return t
t.event.userId||t.event.anonymousId===e.get_distinct_id()||(Vr.info("No userId set, resetting PostHog"),e.reset()),t.event.userId&&t.event.userId!==e.get_distinct_id()&&(Vr.info("UserId set, identifying with PostHog"),e.identify(t.event.userId))
var i=e._calculate_event_properties(n,null!==(r=t.event.properties)&&void 0!==r?r:{},new Date)
return t.event.properties=Object.assign({},i,t.event.properties),t}
return{name:"PostHog JS",type:"enrichment",version:"1.0.0",isLoaded:()=>!0,load:()=>Promise.resolve(),track:e=>t(e,e.event.event),page:e=>t(e,"$pageview"),identify:e=>t(e,"$identify"),screen:e=>t(e,"$screen")}})(e)).then((()=>{t()}))}))}(this,(()=>this._loaded())):this._loaded(),H(this.config._onCapture)&&this.config._onCapture!==zs&&(ne.warn("onCapture is deprecated. Please use `before_send` instead"),this.on("eventCaptured",(e=>this.config._onCapture(e.event,e)))),this}_onRemoteConfig(e){var t,n,r,i,o,s,a,l
if(!S||!S.body)return ne.info("document not ready yet, trying again in 500 milliseconds..."),void setTimeout((()=>{this._onRemoteConfig(e)}),500)
this.compression=void 0,e.supportedCompression&&!this.config.disable_compression&&(this.compression=M(e.supportedCompression,g.GZipJS)?g.GZipJS:M(e.supportedCompression,g.Base64)?g.Base64:void 0),null!==(t=e.analytics)&&void 0!==t&&t.endpoint&&(this.analyticsDefaultEndpoint=e.analytics.endpoint),this.set_config({person_profiles:this._initialPersonProfilesConfig?this._initialPersonProfilesConfig:"identified_only"}),null===(n=this.siteApps)||void 0===n||n.onRemoteConfig(e),null===(r=this.sessionRecording)||void 0===r||r.onRemoteConfig(e),null===(i=this.autocapture)||void 0===i||i.onRemoteConfig(e),null===(o=this.heatmaps)||void 0===o||o.onRemoteConfig(e),this.surveys.onRemoteConfig(e),null===(s=this.webVitalsAutocapture)||void 0===s||s.onRemoteConfig(e),null===(a=this.exceptionObserver)||void 0===a||a.onRemoteConfig(e),null===(l=this.deadClicksAutocapture)||void 0===l||l.onRemoteConfig(e)}_loaded(){try{this.config.loaded(this)}catch(e){ne.critical("`loaded` function failed",e)}this._start_queue_if_opted_in(),this.config.capture_pageview&&setTimeout((()=>{this.consent.isOptedIn()&&this._captureInitialPageview()}),1),new _s(this).load(),this.featureFlags.decide()}_start_queue_if_opted_in(){var e
this.has_opted_out_capturing()||this.config.request_batching&&(null===(e=this._requestQueue)||void 0===e||e.enable())}_dom_loaded(){this.has_opted_out_capturing()||oe(this.__request_queue,(e=>this._send_retriable_request(e))),this.__request_queue=[],this._start_queue_if_opted_in()}_handle_unload(){var e,t
this.config.request_batching?(this._shouldCapturePageleave()&&this.capture("$pageleave"),null===(e=this._requestQueue)||void 0===e||e.unload(),null===(t=this._retryQueue)||void 0===t||t.unload()):this._shouldCapturePageleave()&&this.capture("$pageleave",null,{transport:"sendBeacon"})}_send_request(e){this.__loaded&&(Qs?this.__request_queue.push(e):this.rateLimiter.isServerRateLimited(e.batchKey)||(e.transport=e.transport||this.config.api_transport,e.url=ys(e.url,{ip:this.config.ip?1:0}),e.headers=p({},this.config.request_headers),e.compression="best-available"===e.compression?this.compression:e.compression,e.fetchOptions=e.fetchOptions||this.config.fetch_options,(e=>{var t,n,r,i=p({},e)
i.timeout=i.timeout||6e4,i.url=ys(i.url,{_:(new Date).getTime().toString(),ver:ee.LIB_VERSION,compression:i.compression})
var o=null!==(t=i.transport)&&void 0!==t?t:"fetch",s=null!==(n=null===(r=ve(Ss,(e=>e.transport===o)))||void 0===r?void 0:r.method)&&void 0!==n?n:Ss[0].method
if(!s)throw new Error("No available transport method")
s(i)})(p(p({},e),{},{callback:t=>{var n,r,i
this.rateLimiter.checkForLimiting(t),t.statusCode>=400&&(null===(r=(i=this.config).on_request_error)||void 0===r||r.call(i,t)),null===(n=e.callback)||void 0===n||n.call(e,t)}}))))}_send_retriable_request(e){this._retryQueue?this._retryQueue.retriableRequest(e):this._send_request(e)}_execute_array(e){var t,n=[],r=[],i=[]
oe(e,(e=>{e&&(t=e[0],q(t)?i.push(e):H(e)?e.call(this):q(e)&&"alias"===t?n.push(e):q(e)&&-1!==t.indexOf("capture")&&H(this[t])?i.push(e):r.push(e))}))
var o=function(e,t){oe(e,(function(e){if(q(e[0])){var n=t
se(e,(function(e){n=n[e[0]].apply(n,e.slice(1))}))}else this[e[0]].apply(this,e.slice(1))}),t)}
o(n,this),o(r,this),o(i,this)}_hasBootstrappedFeatureFlags(){var e,t
return(null===(e=this.config.bootstrap)||void 0===e?void 0:e.featureFlags)&&Object.keys(null===(t=this.config.bootstrap)||void 0===t?void 0:t.featureFlags).length>0||!1}push(e){this._execute_array([e])}capture(e,t,n){var r
if(this.__loaded&&this.persistence&&this.sessionPersistence&&this._requestQueue){if(!this.consent.isOptedOut())if(!W(e)&&z(e)){if(this.config.opt_out_useragent_filter||!this._is_bot()){var i=null!=n&&n.skip_client_rate_limiting?void 0:this.rateLimiter.clientRateLimitContext()
if(null==i||!i.isRateLimited){null!=t&&t.$current_url&&!z(null==t?void 0:t.$current_url)&&(ne.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."),null==t||delete t.$current_url),this.sessionPersistence.update_search_keyword(),this.config.save_campaign_params&&this.sessionPersistence.update_campaign_params(),this.config.save_referrer&&this.sessionPersistence.update_referrer_info(),(this.config.save_campaign_params||this.config.save_referrer)&&this.persistence.set_initial_person_info()
var o=new Date,s=(null==n?void 0:n.timestamp)||o,a=zt(),l={uuid:a,event:e,properties:this._calculate_event_properties(e,t||{},s,a)}
i&&(l.properties.$lib_rate_limit_remaining_tokens=i.remainingTokens),(null==n?void 0:n.$set)&&(l.$set=null==n?void 0:n.$set)
var c=this._calculate_set_once_properties(null==n?void 0:n.$set_once)
c&&(l.$set_once=c),(l=function(e,t){return n=e,r=e=>z(e)&&!Q(t)?e.slice(0,t):e,i=new Set,function e(t,n){return t!==Object(t)?r?r(t):t:i.has(t)?void 0:(i.add(t),q(t)?(o=[],oe(t,(t=>{o.push(e(t))}))):(o={},se(t,((t,n)=>{i.has(t)||(o[n]=e(t,n))}))),o)
var o}(n)
var n,r,i}(l,null!=n&&n._noTruncate?null:this.config.properties_string_max_length)).timestamp=s,W(null==n?void 0:n.timestamp)||(l.properties.$event_time_override_provided=!0,l.properties.$event_time_override_system_time=o)
var u=p(p({},l.properties.$set),l.$set)
if(G(u)||this.setPersonPropertiesForFlags(u),!J(this.config.before_send)){var d=this._runBeforeSend(l)
if(!d)return
l=d}this._internalEventEmitter.emit("eventCaptured",l)
var f={method:"POST",url:null!==(r=null==n?void 0:n._url)&&void 0!==r?r:this.requestRouter.endpointFor("api",this.analyticsDefaultEndpoint),data:l,compression:"best-available",batchKey:null==n?void 0:n._batchKey}
return!this.config.request_batching||n&&(null==n||!n._batchKey)||null!=n&&n.send_instantly?this._send_retriable_request(f):this._requestQueue.enqueue(f),l}ne.critical("This capture call is ignored due to client rate limiting.")}}else ne.error("No event name provided to posthog.capture")}else ne.uninitializedWarning("posthog.capture")}_addCaptureHook(e){return this.on("eventCaptured",(t=>e(t.event,t)))}_calculate_event_properties(e,t,n,r){if(n=n||new Date,!this.persistence||!this.sessionPersistence)return t
var i=this.persistence.remove_event_timer(e),o=p({},t)
if(o.token=this.config.token,this.config.__preview_experimental_cookieless_mode&&(o.$cookieless_mode=!0),"$snapshot"===e){var s=p(p({},this.persistence.properties()),this.sessionPersistence.properties())
return o.distinct_id=s.distinct_id,(!z(o.distinct_id)&&!K(o.distinct_id)||V(o.distinct_id))&&ne.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),o}var a,l=fo.properties({maskPersonalDataProperties:this.config.mask_personal_data_properties,customPersonalDataProperties:this.config.custom_personal_data_properties})
if(this.sessionManager){var{sessionId:c,windowId:u}=this.sessionManager.checkAndGetSessionAndWindowId()
o.$session_id=c,o.$window_id=u}this.sessionPropsManager&&ae(o,this.sessionPropsManager.getSessionProps())
try{var d,f
this.sessionRecording&&(o.$recording_status=this.sessionRecording.status,o.$sdk_debug_replay_internal_buffer_length=this.sessionRecording.buffer.data.length,o.$sdk_debug_replay_internal_buffer_size=this.sessionRecording.buffer.size),o.$sdk_debug_retry_queue_size=null===(d=this._retryQueue)||void 0===d||null===(f=d.queue)||void 0===f?void 0:f.length}catch(e){o.$sdk_debug_error_capturing_properties=String(e)}if(this.requestRouter.region===As.CUSTOM&&(o.$lib_custom_api_host=this.config.api_host),a="$pageview"===e?this.pageViewManager.doPageView(n,r):"$pageleave"===e?this.pageViewManager.doPageLeave(n):this.pageViewManager.doEvent(),o=ae(o,a),"$pageview"===e&&S&&(o.title=S.title),!W(i)){var h=n.getTime()-i
o.$duration=parseFloat((h/1e3).toFixed(3))}T&&this.config.opt_out_useragent_filter&&(o.$browser_type=this._is_bot()?"bot":"browser"),(o=ae({},l,this.persistence.properties(),this.sessionPersistence.properties(),o)).$is_identified=this._isIdentified(),q(this.config.property_denylist)?se(this.config.property_denylist,(function(e){delete o[e]})):ne.error("Invalid value for property_denylist config: "+this.config.property_denylist+" or property_blacklist config: "+this.config.property_blacklist)
var v=this.config.sanitize_properties
v&&(ne.error("sanitize_properties is deprecated. Use before_send instead"),o=v(o,e))
var g=this._hasPersonProcessing()
return o.$process_person_profile=g,g&&this._requirePersonProcessing("_calculate_event_properties"),o}_calculate_set_once_properties(e){var t
if(!this.persistence||!this._hasPersonProcessing())return e
if(this._personProcessingSetOncePropertiesSent)return e
var n=this.persistence.get_initial_props(),r=null===(t=this.sessionPropsManager)||void 0===t?void 0:t.getSetOnceProps(),i=ae({},n,r||{},e||{}),o=this.config.sanitize_properties
return o&&(ne.error("sanitize_properties is deprecated. Use before_send instead"),i=o(i,"$set_once")),this._personProcessingSetOncePropertiesSent=!0,G(i)?void 0:i}register(e,t){var n
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
if(K(e)&&(e=e.toString(),ne.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")),e){if(["distinct_id","distinctid"].includes(e.toLowerCase()))ne.critical('The string "'.concat(e,'" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'))
else if(this._requirePersonProcessing("posthog.identify")){var r=this.get_distinct_id()
if(this.register({$user_id:e}),!this.get_property("$device_id")){var i=r
this.register_once({$had_persisted_distinct_id:!0,$device_id:i},"")}e!==r&&e!==this.get_property(me)&&(this.unregister(me),this.register({distinct_id:e}))
var o="anonymous"===(this.persistence.get_property(ze)||"anonymous")
e!==r&&o?(this.persistence.set_property(ze,"identified"),this.setPersonPropertiesForFlags(p(p({},n||{}),t||{}),!1),this.capture("$identify",{distinct_id:e,$anon_distinct_id:r},{$set:t||{},$set_once:n||{}}),this._cachedPersonProperties=Bs(e,t,n),this.featureFlags.setAnonymousDistinctId(r)):(t||n)&&this.setPersonProperties(t,n),e!==r&&(this.reloadFeatureFlags(),this.unregister(We))}}else ne.error("Unique user id has not been set in posthog.identify")}setPersonProperties(e,t){if((e||t)&&this._requirePersonProcessing("posthog.setPersonProperties")){var n=Bs(this.get_distinct_id(),e,t)
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
r+="?t=".concat(s)}return r}alias(e,t){return e===this.get_property(_e)?(ne.critical("Attempting to create alias for existing People user - aborting."),-2):this._requirePersonProcessing("posthog.alias")?(W(t)&&(t=this.get_distinct_id()),e!==t?(this._register_single(me,e),this.capture("$create_alias",{alias:e,distinct_id:t})):(ne.warn("alias matches current distinct_id - skipping api call."),this.identify(e),-1)):void 0}set_config(e){var t,n,r,i,o=p({},this.config)
U(e)&&(ae(this.config,Ks(e)),null===(t=this.persistence)||void 0===t||t.update_config(this.config,o),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new ko(p(p({},this.config),{},{persistence:"sessionStorage"})),Zt.is_supported()&&"true"===Zt.get("ph_debug")&&(this.config.debug=!0),this.config.debug&&(ee.DEBUG=!0,ne.info("set_config",JSON.stringify({config:e,oldConfig:o,newConfig:p({},this.config)},null,2))),null===(n=this.sessionRecording)||void 0===n||n.startIfEnabledOrStop(),null===(r=this.autocapture)||void 0===r||r.startIfEnabled(),null===(i=this.heatmaps)||void 0===i||i.startIfEnabled(),this.surveys.loadIfEnabled(),this._sync_opt_out_with_persistence())}startSessionRecording(e){var t,n,r,i,o,s=!0===e,a={sampling:s||!(null==e||!e.sampling),linked_flag:s||!(null==e||!e.linked_flag),url_trigger:s||!(null==e||!e.url_trigger),event_trigger:s||!(null==e||!e.event_trigger)}
Object.values(a).some(Boolean)&&(null===(t=this.sessionManager)||void 0===t||t.checkAndGetSessionAndWindowId(),a.sampling&&(null===(n=this.sessionRecording)||void 0===n||n.overrideSampling()),a.linked_flag&&(null===(r=this.sessionRecording)||void 0===r||r.overrideLinkedFlag()),a.url_trigger&&(null===(i=this.sessionRecording)||void 0===i||i.overrideTrigger("url")),a.event_trigger&&(null===(o=this.sessionRecording)||void 0===o||o.overrideTrigger("event")))
this.set_config({disable_session_recording:!1})}stopSessionRecording(){this.set_config({disable_session_recording:!0})}sessionRecordingStarted(){var e
return!(null===(e=this.sessionRecording)||void 0===e||!e.started)}captureException(e,t){var n=new Error("PostHog syntheticException")
this.exceptions.sendExceptionEvent(p(p({},Nn((e=>e instanceof Error)(e)?{error:e,event:e.message}:{event:e},{syntheticException:n})),t))}loadToolbar(e){return this.toolbar.loadToolbar(e)}get_property(e){var t
return null===(t=this.persistence)||void 0===t?void 0:t.props[e]}getSessionProperty(e){var t
return null===(t=this.sessionPersistence)||void 0===t?void 0:t.props[e]}toString(){var e,t=null!==(e=this.config.name)&&void 0!==e?e:Vs
return t!==Vs&&(t=Vs+"."+t),t}_isIdentified(){var e,t
return"identified"===(null===(e=this.persistence)||void 0===e?void 0:e.get_property(ze))||"identified"===(null===(t=this.sessionPersistence)||void 0===t?void 0:t.get_property(ze))}_hasPersonProcessing(){var e,t,n,r
return!("never"===this.config.person_profiles||"identified_only"===this.config.person_profiles&&!this._isIdentified()&&G(this.getGroups())&&(null===(e=this.persistence)||void 0===e||null===(t=e.props)||void 0===t||!t[me])&&(null===(n=this.persistence)||void 0===n||null===(r=n.props)||void 0===r||!r[Ye]))}_shouldCapturePageleave(){return!0===this.config.capture_pageleave||"if_capture_pageview"===this.config.capture_pageleave&&this.config.capture_pageview}createPersonProfile(){this._hasPersonProcessing()||this._requirePersonProcessing("posthog.createPersonProfile")&&this.setPersonProperties({},{})}_requirePersonProcessing(e){return"never"===this.config.person_profiles?(ne.error(e+' was called, but process_person is set to "never". This call will be ignored.'),!1):(this._register_single(Ye,!0),!0)}_sync_opt_out_with_persistence(){var e,t,n,r,i=this.consent.isOptedOut(),o=this.config.opt_out_persistence_by_default,s=this.config.disable_persistence||i&&!!o;(null===(e=this.persistence)||void 0===e?void 0:e.disabled)!==s&&(null===(n=this.persistence)||void 0===n||n.set_disabled(s)),(null===(t=this.sessionPersistence)||void 0===t?void 0:t.disabled)!==s&&(null===(r=this.sessionPersistence)||void 0===r||r.set_disabled(s))}opt_in_capturing(e){var t
this.consent.optInOut(!0),this._sync_opt_out_with_persistence(),(W(null==e?void 0:e.captureEventName)||null!=e&&e.captureEventName)&&this.capture(null!==(t=null==e?void 0:e.captureEventName)&&void 0!==t?t:"$opt_in",null==e?void 0:e.captureProperties,{send_instantly:!0}),this.config.capture_pageview&&this._captureInitialPageview()}opt_out_capturing(){this.consent.optInOut(!1),this._sync_opt_out_with_persistence()}has_opted_in_capturing(){return this.consent.isOptedIn()}has_opted_out_capturing(){return this.consent.isOptedOut()}clear_opt_in_out_capturing(){this.consent.reset(),this._sync_opt_out_with_persistence()}_is_bot(){return k?Ds(k,this.config.custom_blocked_useragents):void 0}_captureInitialPageview(){S&&!this._initialPageviewCaptured&&(this._initialPageviewCaptured=!0,this.capture("$pageview",{title:S.title},{send_instantly:!0}))}debug(e){!1===e?(null==_||_.console.log("You've disabled debug mode."),localStorage&&localStorage.removeItem("ph_debug"),this.set_config({debug:!1})):(null==_||_.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),localStorage&&localStorage.setItem("ph_debug","true"),this.set_config({debug:!0}))}_runBeforeSend(e){if(J(this.config.before_send))return e
var t=q(this.config.before_send)?this.config.before_send:[this.config.before_send],n=e
for(var r of t){if(n=r(n),J(n)){var i="Event '".concat(e.event,"' was rejected in beforeSend function")
return Z(e.event)?ne.warn("".concat(i,". This can cause unexpected behavior.")):ne.info(i),null}n.properties&&!G(n.properties)||ne.warn("Event '".concat(e.event,"' has no properties after beforeSend function, this is likely an error."))}return n}getPageViewId(){var e
return null===(e=this.pageViewManager._currentPageview)||void 0===e?void 0:e.pageViewId}captureTraceFeedback(e,t){this.capture("$ai_feedback",{$ai_trace_id:String(e),$ai_feedback_text:t})}captureTraceMetric(e,t,n){this.capture("$ai_metric",{$ai_trace_id:String(e),$ai_metric_name:t,$ai_metric_value:String(n)})}}!function(e,t){for(var n=0;n<t.length;n++)e.prototype[t[n]]=de(e.prototype[t[n]])}(Ys,["identify"])
var Zs,ea=(Zs=Ws[Vs]=new Ys,function(){function e(){e.done||(e.done=!0,Qs=!1,se(Ws,(function(e){e._dom_loaded()})))}null!=S&&S.addEventListener?"complete"===S.readyState?e():ge(S,"DOMContentLoaded",e,{capture:!1}):_&&ne.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")}(),Zs)
function ta(...e){console.log(...e)}function na(e,t){ea.capture(e,t)}function ra(){"string"==typeof window.self&&(o(),window.self=window),function(){try{ea.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N",{advanced_disable_decide:!0,advanced_disable_feature_flags:!0,advanced_disable_feature_flags_on_first_load:!0,advanced_disable_toolbar_metrics:!0,api_host:"https://us.i.posthog.com",autocapture:!1,capture_pageview:!1,disable_compression:!1,disable_persistence:!0,disable_session_recording:!0,disable_surveys:!0,person_profiles:"identified_only"})}catch(e){ta(e)}}()}let ia=0,oa=0,sa=0,aa=0,la=0,ca=0,ua=0
const da=()=>Date.now(),fa=()=>Math.floor(da()/1e3)
function pa(){return ia||(ia=da()),ia}function ha(){return oa||(oa=pa()-3e5),oa}function va(){return sa||(sa=pa()-1728e5),sa}function ga(){return aa||(aa=Math.floor(pa()/1e3)),aa}function _a(){return la||(la=ga()-120),la}function ma(){return ca||(ca=ga()-86400),ca}function ba(){return ua||(ua=ga()-604800),ua}function ya(e){return null===e}function wa(e){return void 0===e}const ka=`${document.location.protocol}//${document.location.host}/`,Sa=window.HCS?.defines?.cdn,xa=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],Ea=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],Ca=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Pa=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,Ta=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,$a=/guild_id=(?<guildId>\d+)/,La=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,Ia=/player_id=(?<playerId>\d+)/,Oa=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,Ra=/VL:.+?(?<vl>\d+)/,Ma=.2,Fa="joinallgroupsundersize",Aa="index.php",ja="?cmd=",Na=`${Aa}${ja}`,Da="&subcmd=",Ba="&target_username=",qa=`${Na}auctionhouse`,Ha=`${qa}&search=`,Ua=`${Na}log`,Ga=`${Na}ignore${Da}add&ignore_username=`,Wa=`${Na}profile`,za=`${Wa}&player_id=`,Va=`${Wa}${Da}dropitems`,Qa=`${Na}trade&target_player=`,Ja=`${Na}trade${Da}createsecure${Ba}`,Ka=`${Na}arena${Da}`,Xa=`${Aa}${`${ja}notepad&blank=1${Da}`}`,Ya=`${Xa}auctionsearch`,Za=`${Na}points`,el=`${Na}guild${Da}`,tl=`${el}log`,nl=`${el}scouttower`,rl=`${el}groups&subcmd2=`,il=`${el}inventory&subcmd2=report&user=`,ol=`${el}view&guild_id=`,sl=`${rl}joinall`,al=`${rl}${Fa}`,ll=`${Na}world`,cl=`${Na}findplayer`,ul=`${cl}&search_show_first=1&search_username=`,dl=`${Na}blacksmith`,fl=`${Na}quickbuff`,pl=`${Na}composing`,hl=`${Na}attackplayer${Ba}`,vl=`${Na}${Da}viewupdatearchive`,gl=`${Na}${Da}viewarchive`,_l=`${Na}bounty`,ml=`${Na}inventing${Da}viewrecipe&recipe_id=`,bl=`https://guide.fallensword.com/${Na}`,yl="after-update.actionlist",wl="buffs.player",kl="update.player",Sl="level.stats-player",xl="gold.stats-player",El="prompt.worldDialogShop",Cl="keydown.controls",Pl="update.realm",Tl="-success.action-response",$l=`-1${Tl}`,Ll=`1${Tl}`,Il=`2${Tl}`,Ol=`9${Tl}`,Rl=`5${Tl}`,Ml=`25${Tl}`,Fl=1,Al=2,jl=16,Nl=128,Dl=256,Bl="needToCompose",ql="lastComposeCheck",Hl="characterVirtualLevel",Ul="enableGuildActivityTracker",Gl="lastLadderReset",Wl="form",zl="table",Vl="td",Ql="fsh_buffLog",Jl="stat-level",Kl="stat-defense",Xl="stat-attack",Yl="stat-damage",Zl="stat-armor",ec="stat-hp",tc="stat-vl",nc="GM_",rc=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],ic=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],oc=`${Sa}ui/world/action_spinner.gif`,sc=".fa-envelope",ac='a[href*="&player_id="]',lc=.002,cc=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],uc='input[name="blockedSkillList[]"]'
var dc={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addServerNode:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252",compactRanks:!1,lastModalGuildLogCheck:0,dailyQuestReRoll:!1}
const fc=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function pc(e,t){const n=window.localStorage.getItem(nc+e)
return ya(n)||wa(n)?t:function(e){const t=fc.find((t=>e.startsWith(t[0])))
return t?t[1](e):e}(n)}function hc(e){return pc(e,dc[e])}function vc(e){return"boolean"==typeof e}function gc(e){return"string"==typeof e}function _c(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(nc+e,t+n)}const mc=[[gc,(e,t)=>{_c(e,"S]",t)}],[e=>"number"==typeof e,(e,t)=>{t.toString().indexOf(".")<0&&_c(e,"N]",t)}],[vc,(e,t)=>{_c(e,"B]",t)}]]
function bc(e,t){const n=mc.find((e=>e[0](t)))
n&&n[1](e,t)}function yc(e){const t=`screenview__${e}`,n=hc(t)
Number.isFinite(n)&&n>ma()||(na(t),bc(t,ga()))}function wc(e){return"function"==typeof e}function kc(e){return"object"==typeof e}function Sc(e,t){try{return JSON.parse(e,t)}catch(e){}}function xc(e,t){return t?t.querySelector(e):document.querySelector(e)}function Ec(e){const t=xc("link",document.body)
return new Promise((n=>{const r=document.createElement("link")
r.type="text/css",r.rel="stylesheet",r.onload=()=>{n()},r.href=e,t?t.before(r):document.body.append(r)}))}var Cc="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function Pc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tc,$c={exports:{}}
var Lc=(Tc||(Tc=1,$c.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==Cc?Cc:"undefined"!=typeof self?self:{}
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
return et}()),$c.exports),Ic=Pc(Lc)
const Oc=["attackplayer.min.js","Auction-House-Monitor.user.js","Compra-%2526-Venda-de-Recursos-%25E2%259C%2585.user.js","cross-origin frame","Discord-Message-Checks-for-Updates.user.js","dynamically imported module","Fallen-Sword-Auto-Invent.user.js","Fallen-Sword-Auto-Skill-Caster.user.js","Fallen-Sword-Champion-and-Super-Elite-Alert.user.js","Fallen-Sword-Message-Alert.user.js","Fallen-Sword-Super-Elite-%2526-Crate-Notifier.user.js","Fallen-Sword-Super-Elite-Notifier.user.js","Fallen-Sword-Win%252FLoss-Checker-with-Buffs-and-Buff-Levels.user.js","Fallen-Sword-Win%252FLoss-Checker.user.js","Fallensword-GvG-Target-Checker-with-Button-and-Buff-Check.user.js","Fetch-Auction-and-Send-to-Discord.user.js","FS-Fixer.user.js","fs.min.js","FSH1.user.js","Gold-alert.user.js","GVG-and-Relics-Notifications.user.js","GvG-Initiate-Enhanced.user.js","GvG-List-v2.user.js","GVG%252FRelics-Discord.user.js","GVG%252FRelics-Notifications.user.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","New-Userscript.user.js","openuserjs.org","Permission denied to access object","play method is not allowed","Quick-Kill.user.js","se-searcher-v2-draft.user.js","Superelite-searcher.user.js","Titan-3.0.user.js","Titan-Quick-Kill.user.js","UFSG-dodatki.user.js","UnhandledPromiseRejectionWarning: 404","world.min.js","(reading '$$')"],Rc=e=>Oc.some((t=>e.includes(t)))
function Mc(e){if(Rc(e.message)||Rc(e.stack))return!1}function Fc(){!function(){Ic.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.149"})
const e=o()
e&&Ic.setContext({user_id:e}),Ic.afterNotify((e=>{if(e)return ta(`Honeybadger notification failed: ${e}`)})),Ic.beforeNotify(Mc)}()}function Ac(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class jc extends Error{constructor([e,t,n,r],...i){super(function(e,t,n,r){const i=`${t.status} ${t.statusText} - `
if(t.statusText===r.toString())return i+Ac(e)
const o=`${i+n} ${r} - ${Ac(e)}`
return"parsererror"===n?`${o} - ${t.responseText}`:o}(e,t,n,r),...i),Error.captureStackTrace&&Error.captureStackTrace(this,jc),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=r}}function Nc(e,t,n,r){e instanceof EventTarget&&e.addEventListener(t,n,r)}function Dc(e,t,n){return JSON.stringify(e,t,n)}function Bc(e){hc("betaOptIn")&&ta("sendException",e),Ic.notify(e,"sendException")}var qc={}
function Hc(e){return Array.isArray(e)}function Uc(e,t){return e||t}const Gc=[null]
function Wc(e,t){return Gc[e]&&Gc[e].priority<Gc[t].priority}function zc(e,t){const n=Gc[e]
Gc[e]=Gc[t],Gc[t]=n}function Vc(e,t){return e?2*t:2*t+1}function Qc(){if(1===Gc.length)return
const e=Gc[1].data,t=Gc.pop()
return Gc.length>1&&(Gc[1]=t,function(e){let t=e
for(;2*t<Gc.length;){const e=Vc(!Wc(2*t+1,2*t),t)
if(Wc(t,e))break
zc(t,e),t=e}}(1)),e}function Jc(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!Wc(t,e))break
zc(t,e),t=e}}(Gc.push({data:e,priority:t})-1)}let Kc=!0
const Xc="fshMessage"
let Yc=0
function Zc(){Gc.length-1==0?Kc=!0:(Kc=!1,window.postMessage(Xc,window.location.origin))}function eu(){const e=Qc()
wc(e)?e():function(e){wa(e)||Bc(`pop() was not a function (${typeof e})`)}(e)}function tu(e){const t=e.data
e.origin===window.location.origin&&t===Xc&&function(){try{eu()}catch(e){Ic.notify(e,"taskFailure")}finally{Zc()}}()}function nu(e,t,n,r){if(wc(t)){Yc||(Nc(window,"message",tu),Yc=!0)
const i=Uc(r,window),o=Uc(n,[])
Jc(t.bind(i,...o),e),Kc&&Zc()}}function ru(e,t){return new URLSearchParams(e).get(t)}function iu(e){try{return ru(decodeURIComponent(window.location.search),e)}catch(e){return ta(e),""}}var ou=!1,su=Array.isArray,au=Array.prototype.indexOf,lu=Array.from,cu=Object.defineProperty,uu=Object.getOwnPropertyDescriptor,du=Object.getOwnPropertyDescriptors,fu=Object.prototype,pu=Array.prototype,hu=Object.getPrototypeOf,vu=Object.isExtensible
function gu(e){return"function"==typeof e}const _u=()=>{}
function mu(e){return e()}function bu(e){for(var t=0;t<e.length;t++)e[t]()}const yu=2,wu=4,ku=8,Su=16,xu=32,Eu=64,Cu=128,Pu=256,Tu=512,$u=1024,Lu=2048,Iu=4096,Ou=8192,Ru=16384,Mu=32768,Fu=65536,Au=1<<17,ju=1<<19,Nu=1<<20,Du=1<<21,Bu=Symbol("$state"),qu=Symbol("legacy props"),Hu=Symbol("")
function Uu(e){return e===this.v}function Gu(e,t){return e!=e?t==t:e!==t||null!==e&&"object"==typeof e||"function"==typeof e}function Wu(e){return!Gu(e,this.v)}let zu=!1,Vu=!1
function Qu(){zu=!0}const Ju=1,Ku=2,Xu=4,Yu=8,Zu=16,ed=1,td=2,nd=4,rd=8,id=16,od=4,sd=Symbol(),ad="http://www.w3.org/1999/xhtml",ld=[]
function cd(e,t=!1){return ud(e,new Map,"",ld)}function ud(e,t,n,r,i=null){if("object"==typeof e&&null!==e){var o=t.get(e)
if(void 0!==o)return o
if(e instanceof Map)return new Map(e)
if(e instanceof Set)return new Set(e)
if(su(e)){var s=Array(e.length)
t.set(e,s),null!==i&&t.set(i,s)
for(var a=0;a<e.length;a+=1){var l=e[a]
a in e&&(s[a]=ud(l,t,n,r))}return s}if(hu(e)===fu){for(var c in s={},t.set(e,s),null!==i&&t.set(i,s),e)s[c]=ud(e[c],t,n,r)
return s}if(e instanceof Date)return structuredClone(e)
if("function"==typeof e.toJSON)return ud(e.toJSON(),t,n,r,e)}if(e instanceof EventTarget)return e
try{return structuredClone(e)}catch(t){return e}}function dd(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let fd=null
function pd(e){fd=e}function hd(e,t=!1,n){var r=fd={p:fd,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null}
zu&&!t&&(fd.l={s:null,u:null,r1:[],r2:kd(!1)}),Vd((()=>{r.d=!0}))}function vd(e){const t=fd
if(null!==t){const e=t.e
if(null!==e){var n=Cf,r=Sf
t.e=null
try{for(var i=0;i<e.length;i++){var o=e[i]
Pf(o.effect),Ef(o.reaction),Kd(o.fn)}}finally{Pf(n),Ef(r)}}fd=t.p,t.m=!0}return{}}function gd(){return!zu||null!==fd&&null===fd.l}function _d(e,t){if("object"!=typeof e||null===e||Bu in e)return e
const n=hu(e)
if(n!==fu&&n!==pu)return e
var r=new Map,i=su(e),o=Sd(0),s=Sf,a=e=>{var t,n=Sf
return Ef(s),t=e(),Ef(n),t}
return i&&r.set("length",Sd(e.length)),new Proxy(e,{defineProperty(e,t,n){"value"in n&&!1!==n.configurable&&!1!==n.enumerable&&!1!==n.writable||function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}()
var i=r.get(t)
return void 0===i?(i=a((()=>Sd(n.value))),r.set(t,i)):Ed(i,a((()=>_d(n.value)))),!0},deleteProperty(e,t){var n=r.get(t)
if(void 0===n)t in e&&r.set(t,a((()=>Sd(sd))))
else{if(i&&"string"==typeof t){var s=r.get("length"),l=Number(t)
Number.isInteger(l)&&l<s.v&&Ed(s,l)}Ed(n,sd),md(o)}return!0},get(t,n,i){if(n===Bu)return e
var o=r.get(n),s=n in t
if(void 0!==o||s&&!uu(t,n)?.writable||(o=a((()=>Sd(_d(s?t[n]:sd)))),r.set(n,o)),void 0!==o){var l=Xf(o)
return l===sd?void 0:l}return Reflect.get(t,n,i)},getOwnPropertyDescriptor(e,t){var n=Reflect.getOwnPropertyDescriptor(e,t)
if(n&&"value"in n){var i=r.get(t)
i&&(n.value=Xf(i))}else if(void 0===n){var o=r.get(t),s=o?.v
if(void 0!==o&&s!==sd)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return n},has(e,t){if(t===Bu)return!0
var n=r.get(t),i=void 0!==n&&n.v!==sd||Reflect.has(e,t)
if((void 0!==n||null!==Cf&&(!i||uu(e,t)?.writable))&&(void 0===n&&(n=a((()=>Sd(i?_d(e[t]):sd))),r.set(t,n)),Xf(n)===sd))return!1
return i},set(e,t,n,s){var l=r.get(t),c=t in e
if(i&&"length"===t)for(var u=n;u<l.v;u+=1){var d=r.get(u+"")
void 0!==d?Ed(d,sd):u in e&&(d=a((()=>Sd(sd))),r.set(u+"",d))}void 0===l?c&&!uu(e,t)?.writable||(Ed(l=a((()=>Sd(void 0))),a((()=>_d(n)))),r.set(t,l)):(c=l.v!==sd,Ed(l,a((()=>_d(n)))))
var f=Reflect.getOwnPropertyDescriptor(e,t)
if(f?.set&&f.set.call(s,n),!c){if(i&&"string"==typeof t){var p=r.get("length"),h=Number(t)
Number.isInteger(h)&&h>=p.v&&Ed(p,h+1)}md(o)}return!0},ownKeys(e){Xf(o)
var t=Reflect.ownKeys(e).filter((e=>{var t=r.get(e)
return void 0===t||t.v!==sd}))
for(var[n,i]of r)i.v===sd||n in e||t.push(n)
return t},setPrototypeOf(){!function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}()}})}function md(e,t=1){Ed(e,e.v+t)}function bd(e){try{if(null!==e&&"object"==typeof e&&Bu in e)return e[Bu]}catch{}return e}function yd(e,t){return Object.is(bd(e),bd(t))}const wd=new Map
function kd(e,t){return{f:0,v:e,reactions:null,equals:Uu,rv:0,wv:0}}function Sd(e,t){const n=kd(e)
return $f(n),n}function xd(e,t=!1){const n=kd(e)
return t||(n.equals=Wu),zu&&null!==fd&&null!==fd.l&&(fd.l.s??=[]).push(n),n}function Ed(e,t,n=!1){return null===Sf||xf||!gd()||0==(Sf.f&(yu|Su))||Tf?.includes(e)||function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),Cd(e,n?_d(t):t)}function Cd(e,t){if(!e.equals(t)){var n=e.v
yf?wd.set(e,t):wd.set(e,n),e.v=t,e.wv=Af(),Pd(e,Lu),gd()&&null!==Cf&&0!=(Cf.f&$u)&&0==(Cf.f&(xu|Eu))&&(null===Of?function(e){Of=e}([e]):Of.push(e))}return t}function Pd(e,t){var n=e.reactions
if(null!==n)for(var r=gd(),i=n.length,o=0;o<i;o++){var s=n[o],a=s.f
0==(a&Lu)&&((r||s!==Cf)&&(ep(s,t),0!=(a&($u|Pu))&&(0!=(a&yu)?Pd(s,Iu):Vf(s))))}}let Td=!1
var $d,Ld,Id,Od
function Rd(e=""){return document.createTextNode(e)}function Md(e){return Id.call(e)}function Fd(e){return Od.call(e)}function Ad(e,t){return Md(e)}function jd(e,t){var n=Md(e)
return n instanceof Comment&&""===n.data?Fd(n):n}function Nd(e,t=1,n=!1){let r=e
for(;t--;)r=Fd(r)
return r}function Dd(e){var t=yu|Lu,n=null!==Sf&&0!=(Sf.f&yu)?Sf:null
null===Cf||null!==n&&0!=(n.f&Pu)?t|=Pu:Cf.f|=Nu
return{ctx:fd,deps:null,effects:null,equals:Uu,f:t,fn:e,reactions:null,rv:0,v:null,wv:0,parent:n??Cf}}function Bd(e){const t=Dd(e)
return $f(t),t}function qd(e){const t=Dd(e)
return t.equals=Wu,t}function Hd(e){var t=e.effects
if(null!==t){e.effects=null
for(var n=0;n<t.length;n+=1)rf(t[n])}}function Ud(e){var t,n=Cf
Pf(function(e){for(var t=e.parent;null!==t;){if(0==(t.f&yu))return t
t=t.parent}return null}(e))
try{Hd(e),t=Bf(e)}finally{Pf(n)}return t}function Gd(e){var t=Ud(e)
ep(e,!Ff&&0==(e.f&Pu)||null===e.deps?$u:Iu),e.equals(t)||(e.v=t,e.wv=Af())}function Wd(e){null===Cf&&null===Sf&&function(e){throw new Error("https://svelte.dev/e/effect_orphan")}(),null!==Sf&&0!=(Sf.f&Pu)&&null===Cf&&function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}(),yf&&function(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}()}function zd(e,t,n,r=!0){var i=Cf,o={ctx:fd,deps:null,nodes_start:null,nodes_end:null,f:e|Lu,first:null,fn:t,last:null,next:null,parent:i,prev:null,teardown:null,transitions:null,wv:0}
if(n)try{Uf(o),o.f|=Mu}catch(e){throw rf(o),e}else null!==t&&Vf(o)
if(!(n&&null===o.deps&&null===o.first&&null===o.nodes_start&&null===o.teardown&&0==(o.f&(Nu|Cu)))&&r&&(null!==i&&function(e,t){var n=t.last
null===n?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}(o,i),null!==Sf&&0!=(Sf.f&yu))){var s=Sf;(s.effects??=[]).push(o)}return o}function Vd(e){const t=zd(ku,null,!1)
return ep(t,$u),t.teardown=e,t}function Qd(e){if(Wd(),!(null!==Cf&&0!=(Cf.f&xu)&&null!==fd&&!fd.m))return Kd(e)
var t=fd;(t.e??=[]).push({fn:e,effect:Cf,reaction:Sf})}function Jd(e){return Wd(),Xd(e)}function Kd(e){return zd(wu,e,!1)}function Xd(e){return zd(ku,e,!0)}function Yd(e,t=[],n=Dd){const r=t.map(n)
return Zd((()=>e(...r.map(Xf))))}function Zd(e,t=0){return zd(ku|Su|t,e,!0)}function ef(e,t=!0){return zd(ku|xu,e,!0,t)}function tf(e){var t=e.teardown
if(null!==t){const e=yf,n=Sf
wf(!0),Ef(null)
try{t.call(null)}finally{wf(e),Ef(n)}}}function nf(e,t=!1){var n=e.first
for(e.first=e.last=null;null!==n;){var r=n.next
0!=(n.f&Eu)?n.parent=null:rf(n,t),n=r}}function rf(e,t=!0){var n=!1
if((t||0!=(e.f&ju))&&null!==e.nodes_start){for(var r=e.nodes_start,i=e.nodes_end;null!==r;){var o=r===i?null:Fd(r)
r.remove(),r=o}n=!0}nf(e,t&&!n),Hf(e,0),ep(e,Ru)
var s=e.transitions
if(null!==s)for(const e of s)e.stop()
tf(e)
var a=e.parent
null!==a&&null!==a.first&&of(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function of(e){var t=e.parent,n=e.prev,r=e.next
null!==n&&(n.next=r),null!==r&&(r.prev=n),null!==t&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function sf(e,t){var n=[]
lf(e,n,!0),af(n,(()=>{rf(e),t&&t()}))}function af(e,t){var n=e.length
if(n>0){var r=()=>--n||t()
for(var i of e)i.out(r)}else t()}function lf(e,t,n){if(0==(e.f&Ou)){if(e.f^=Ou,null!==e.transitions)for(const r of e.transitions)(r.is_global||n)&&t.push(r)
for(var r=e.first;null!==r;){var i=r.next
lf(r,t,!!(0!=(r.f&Fu)||0!=(r.f&xu))&&n),r=i}}}function cf(e){uf(e,!0)}function uf(e,t){if(0!=(e.f&Ou)){e.f^=Ou,0==(e.f&$u)&&(e.f^=$u),jf(e)&&(ep(e,Lu),Vf(e))
for(var n=e.first;null!==n;){var r=n.next
uf(n,!!(0!=(n.f&Fu)||0!=(n.f&xu))&&t),n=r}if(null!==e.transitions)for(const n of e.transitions)(n.is_global||t)&&n.in()}}let df=[],ff=[]
function pf(){var e=df
df=[],bu(e)}function hf(e){0===df.length&&queueMicrotask(pf),df.push(e)}function vf(){var e
df.length>0&&pf(),ff.length>0&&(e=ff,ff=[],bu(e))}let gf=!1,_f=!1,mf=null,bf=!1,yf=!1
function wf(e){yf=e}let kf=[],Sf=null,xf=!1
function Ef(e){Sf=e}let Cf=null
function Pf(e){Cf=e}let Tf=null
function $f(e){null!==Sf&&Sf.f&Du&&(null===Tf?Tf=[e]:Tf.push(e))}let Lf=null,If=0,Of=null
let Rf=1,Mf=0,Ff=!1
function Af(){return++Rf}function jf(e){var t=e.f
if(0!=(t&Lu))return!0
if(0!=(t&Iu)){var n=e.deps,r=0!=(t&Pu)
if(null!==n){var i,o,s=0!=(t&Tu),a=r&&null!==Cf&&!Ff,l=n.length
if(s||a){var c=e,u=c.parent
for(i=0;i<l;i++)o=n[i],!s&&o?.reactions?.includes(c)||(o.reactions??=[]).push(c)
s&&(c.f^=Tu),a&&null!==u&&0==(u.f&Pu)&&(c.f^=Pu)}for(i=0;i<l;i++)if(jf(o=n[i])&&Gd(o),o.wv>e.wv)return!0}r&&(null===Cf||Ff)||ep(e,$u)}return!1}function Nf(e,t,n,r){if(gf){if(null===n&&(gf=!1),function(e){return 0==(e.f&Ru)&&(null===e.parent||0==(e.parent.f&Cu))}(t))throw e}else null!==n&&(gf=!0),function(e,t){for(var n=t;null!==n;){if(0!=(n.f&Cu))try{return void n.fn(e)}catch{n.f^=Cu}n=n.parent}throw gf=!1,e}(e,t)}function Df(e,t,n=!0){var r=e.reactions
if(null!==r)for(var i=0;i<r.length;i++){var o=r[i]
Tf?.includes(e)||(0!=(o.f&yu)?Df(o,t,!1):t===o&&(n?ep(o,Lu):0!=(o.f&$u)&&ep(o,Iu),Vf(o)))}}function Bf(e){var t=Lf,n=If,r=Of,i=Sf,o=Ff,s=Tf,a=fd,l=xf,c=e.f
Lf=null,If=0,Of=null,Ff=0!=(c&Pu)&&(xf||!bf||null===Sf),Sf=0==(c&(xu|Eu))?e:null,Tf=null,pd(e.ctx),xf=!1,Mf++,e.f|=Du
try{var u=(0,e.fn)(),d=e.deps
if(null!==Lf){var f
if(Hf(e,If),null!==d&&If>0)for(d.length=If+Lf.length,f=0;f<Lf.length;f++)d[If+f]=Lf[f]
else e.deps=d=Lf
if(!Ff)for(f=If;f<d.length;f++)(d[f].reactions??=[]).push(e)}else null!==d&&If<d.length&&(Hf(e,If),d.length=If)
if(gd()&&null!==Of&&!xf&&null!==d&&0==(e.f&(yu|Iu|Lu)))for(f=0;f<Of.length;f++)Df(Of[f],e)
return null!==i&&(Mf++,null!==Of&&(null===r?r=Of:r.push(...Of))),u}finally{Lf=t,If=n,Of=r,Sf=i,Ff=o,Tf=s,pd(a),xf=l,e.f^=Du}}function qf(e,t){let n=t.reactions
if(null!==n){var r=au.call(n,e)
if(-1!==r){var i=n.length-1
0===i?n=t.reactions=null:(n[r]=n[i],n.pop())}}null!==n||0==(t.f&yu)||null!==Lf&&Lf.includes(t)||(ep(t,Iu),0==(t.f&(Pu|Tu))&&(t.f^=Tu),Hd(t),Hf(t,0))}function Hf(e,t){var n=e.deps
if(null!==n)for(var r=t;r<n.length;r++)qf(e,n[r])}function Uf(e){var t=e.f
if(0==(t&Ru)){ep(e,$u)
var n=Cf,r=fd,i=bf
Cf=e,bf=!0
try{0!=(t&Su)?function(e){for(var t=e.first;null!==t;){var n=t.next
0==(t.f&xu)&&rf(t),t=n}}(e):nf(e),tf(e)
var o=Bf(e)
e.teardown="function"==typeof o?o:null,e.wv=Rf
e.deps
ou&&Vu&&e.f}catch(t){Nf(t,e,n,r||e.ctx)}finally{bf=i,Cf=n}}}function Gf(){try{!function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}()}catch(e){if(null===mf)throw e
Nf(e,mf,null)}}function Wf(){var e=bf
try{var t=0
for(bf=!0;kf.length>0;){t++>1e3&&Gf()
var n=kf,r=n.length
kf=[]
for(var i=0;i<r;i++){zf(Qf(n[i]))}wd.clear()}}finally{_f=!1,bf=e,mf=null}}function zf(e){var t=e.length
if(0!==t)for(var n=0;n<t;n++){var r=e[n]
if(0==(r.f&(Ru|Ou)))try{jf(r)&&(Uf(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown?of(r):r.fn=null))}catch(e){Nf(e,r,null,r.ctx)}}}function Vf(e){_f||(_f=!0,queueMicrotask(Wf))
for(var t=mf=e;null!==t.parent;){var n=(t=t.parent).f
if(0!=(n&(Eu|xu))){if(0==(n&$u))return
t.f^=$u}}kf.push(t)}function Qf(e){for(var t=[],n=e;null!==n;){var r=n.f,i=0!=(r&(xu|Eu))
if(!(i&&0!=(r&$u))&&0==(r&Ou)){if(0!=(r&wu))t.push(n)
else if(i)n.f^=$u
else{var o=Sf
try{Sf=n,jf(n)&&Uf(n)}catch(e){Nf(e,n,null,n.ctx)}finally{Sf=o}}var s=n.first
if(null!==s){n=s
continue}}var a=n.parent
for(n=n.next;null===n&&null!==a;)n=a.next,a=a.parent}return t}function Jf(e){for(vf();kf.length>0;)_f=!0,Wf(),vf()}async function Kf(){await Promise.resolve(),Jf()}function Xf(e){var t=0!=(e.f&yu)
if(null===Sf||xf){if(t&&null===e.deps&&null===e.effects){var n=e,r=n.parent
null!==r&&0==(r.f&Pu)&&(n.f^=Pu)}}else if(!Tf?.includes(e)){var i=Sf.deps
e.rv<Mf&&(e.rv=Mf,null===Lf&&null!==i&&i[If]===e?If++:null===Lf?Lf=[e]:Ff&&Lf.includes(e)||Lf.push(e))}return t&&jf(n=e)&&Gd(n),yf&&wd.has(e)?wd.get(e):e.v}function Yf(e){var t=xf
try{return xf=!0,e()}finally{xf=t}}const Zf=-7169
function ep(e,t){e.f=e.f&Zf|t}function tp(e){if("object"==typeof e&&e&&!(e instanceof EventTarget))if(Bu in e)np(e)
else if(!Array.isArray(e))for(let t in e){const n=e[t]
"object"==typeof n&&n&&Bu in n&&np(n)}}function np(e,t=new Set){if(!("object"!=typeof e||null===e||e instanceof EventTarget||t.has(e))){t.add(e),e instanceof Date&&e.getTime()
for(let n in e)try{np(e[n],t)}catch(e){}const n=hu(e)
if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const t=du(n)
for(let n in t){const r=t[n].get
if(r)try{r.call(e)}catch(e){}}}}}const rp=["touchstart","touchmove"]
function ip(e){return rp.includes(e)}let op=!1
function sp(e){var t=Sf,n=Cf
Ef(null),Pf(null)
try{return e()}finally{Ef(t),Pf(n)}}function ap(e,t,n,r=n){e.addEventListener(t,(()=>sp(n)))
const i=e.__on_r
e.__on_r=i?()=>{i(),r(!0)}:()=>r(!0),op||(op=!0,document.addEventListener("reset",(e=>{Promise.resolve().then((()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()}))}),{capture:!0}))}const lp=new Set,cp=new Set
function up(e,t,n,r,i){var o={capture:r,passive:i},s=function(e,t,n,r={}){function i(e){if(r.capture||fp.call(t,e),!e.cancelBubble)return sp((()=>n?.call(this,e)))}return e.startsWith("pointer")||e.startsWith("touch")||"wheel"===e?hf((()=>{t.addEventListener(e,i,r)})):t.addEventListener(e,i,r),i}(e,t,n,o)
t!==document.body&&t!==window&&t!==document||Vd((()=>{t.removeEventListener(e,s,o)}))}function dp(e){for(var t=0;t<e.length;t++)lp.add(e[t])
for(var n of cp)n(e)}function fp(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],o=i[0]||e.target,s=0,a=e.__root
if(a){var l=i.indexOf(a)
if(-1!==l&&(t===document||t===window))return void(e.__root=t)
var c=i.indexOf(t)
if(-1===c)return
l<=c&&(s=l)}if((o=i[s]||e.target)!==t){cu(e,"currentTarget",{configurable:!0,get:()=>o||n})
var u=Sf,d=Cf
Ef(null),Pf(null)
try{for(var f,p=[];null!==o;){var h=o.assignedSlot||o.parentNode||o.host||null
try{var v=o["__"+r]
if(null!=v&&(!o.disabled||e.target===o))if(su(v)){var[g,..._]=v
g.apply(o,[e,..._])}else v.call(o,e)}catch(e){f?p.push(e):f=e}if(e.cancelBubble||h===t||null===h)break
o=h}if(f){for(let e of p)queueMicrotask((()=>{throw e}))
throw f}}finally{e.__root=t,delete e.currentTarget,Ef(u),Pf(d)}}}function pp(e){var t=document.createElement("template")
return t.innerHTML=e,t.content}function hp(e,t){var n=Cf
null===n.nodes_start&&(n.nodes_start=e,n.nodes_end=t)}function vp(e,t){var n,r=0!=(1&t),i=0!=(2&t),o=!e.startsWith("<!>")
return()=>{void 0===n&&(n=pp(o?e:"<!>"+e),r||(n=Md(n)))
var t=i||Ld?document.importNode(n,!0):n.cloneNode(!0)
r?hp(Md(t),t.lastChild):hp(t,t)
return t}}function gp(e=""){var t=Rd(e+"")
return hp(t,t),t}function _p(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Rd()
return e.append(t,n),hp(t,n),e}function mp(e,t){null!==e&&e.before(t)}let bp=!0
function yp(e,t){var n=null==t?"":"object"==typeof t?t+"":t
n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}function wp(e,t){return function(e,{target:t,anchor:n,props:r={},events:i,context:o,intro:s=!0}){!function(){if(void 0===$d){$d=window,Ld=/Firefox/.test(navigator.userAgent)
var e=Element.prototype,t=Node.prototype,n=Text.prototype
Id=uu(t,"firstChild").get,Od=uu(t,"nextSibling").get,vu(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),vu(n)&&(n.__t=void 0)}}()
var a=new Set,l=e=>{for(var n=0;n<e.length;n++){var r=e[n]
if(!a.has(r)){a.add(r)
var i=ip(r)
t.addEventListener(r,fp,{passive:i})
var o=kp.get(r)
void 0===o?(document.addEventListener(r,fp,{passive:i}),kp.set(r,1)):kp.set(r,o+1)}}}
l(lu(lp)),cp.add(l)
var c=void 0,u=function(e){const t=zd(Eu,e,!0)
return(e={})=>new Promise((n=>{e.outro?sf(t,(()=>{rf(t),n(void 0)})):(rf(t),n(void 0))}))}((()=>{var u=n??t.appendChild(Rd())
return ef((()=>{o&&(hd({}),fd.c=o)
i&&(r.$$events=i),bp=s,c=e(u,r)||{},bp=!0,o&&vd()})),()=>{for(var e of a){t.removeEventListener(e,fp)
var r=kp.get(e)
0==--r?(document.removeEventListener(e,fp),kp.delete(e)):kp.set(e,r)}cp.delete(l),u!==n&&u.parentNode?.removeChild(u)}}))
return Sp.set(c,u),c}(e,t)}const kp=new Map
let Sp=new WeakMap
function xp(e,t){const n=Sp.get(e)
return n?(Sp.delete(e),n(t)):Promise.resolve()}const Ep=0,Cp=1,Pp=2
function Tp(e,t,n,r,i){var o,s,a,l=e,c=gd(),u=fd,d=sd,f=(c?kd:xd)(void 0),p=(c?kd:xd)(void 0),h=!1
function v(e,t){h=!0,t&&(Pf(g),Ef(g),pd(u))
try{e===Ep&&n&&(o?cf(o):o=ef((()=>n(l)))),e===Cp&&r&&(s?cf(s):s=ef((()=>r(l,f)))),e===Pp&&i&&(a?cf(a):a=ef((()=>i(l,p)))),e!==Ep&&o&&sf(o,(()=>o=null)),e!==Cp&&s&&sf(s,(()=>s=null)),e!==Pp&&a&&sf(a,(()=>a=null))}finally{t&&(pd(null),Ef(null),Pf(null),Jf())}}var g=Zd((()=>{if(d!==(d=t())){if(n=d,"function"==typeof n?.then){var e=d
h=!1,e.then((t=>{e===d&&(Cd(f,t),v(Cp,!0))}),(t=>{if(e===d&&(Cd(p,t),v(Pp,!0),!i))throw p.v})),hf((()=>{h||v(Ep,!0)}))}else Cd(f,d),v(Cp,!1)
var n
return()=>d=sd}}))}function $p(e,t,[n,r]=[0,0]){var i=e,o=null,s=null,a=sd,l=!1
const c=(e,t=!0)=>{l=!0,u(t,e)},u=(e,t)=>{a!==(a=e)&&(a?(o?cf(o):t&&(o=ef((()=>t(i)))),s&&sf(s,(()=>{s=null}))):(s?cf(s):t&&(s=ef((()=>t(i,[n+1,r])))),o&&sf(o,(()=>{o=null}))))}
Zd((()=>{l=!1,t(c),l||u(null,null)}),n>0?Fu:0)}function Lp(e,t){Xd((()=>{var n=t()
for(var r in n){var i=n[r]
i?e.style.setProperty(r,i):e.style.removeProperty(r)}})),Vd((()=>{e.remove()}))}function Ip(e,t){return t}function Op(e,t,n,r,i,o=null){var s=e,a={flags:t,items:new Map,first:null}
0!=(t&Xu)&&(s=e.appendChild(Rd()))
var l=null,c=!1,u=qd((()=>{var e=n()
return su(e)?e:null==e?[]:lu(e)}))
Zd((()=>{var e=Xf(u),d=e.length
c&&0===d||(c=0===d,function(e,t,n,r,i,o,s){var a,l,c,u,d,f,p=0!=(i&Yu),h=0!=(i&(Ju|Ku)),v=e.length,g=t.items,_=t.first,m=_,b=null,y=[],w=[]
if(p)for(f=0;f<v;f+=1)u=o(c=e[f],f),void 0!==(d=g.get(u))&&(d.a?.measure(),(l??=new Set).add(d))
for(f=0;f<v;f+=1)if(u=o(c=e[f],f),void 0!==(d=g.get(u))){if(h&&Rp(d,c,f,i),0!=(d.e.f&Ou)&&(cf(d.e),p&&(d.a?.unfix(),(l??=new Set).delete(d))),d!==m){if(void 0!==a&&a.has(d)){if(y.length<w.length){var k,S=w[0]
b=S.prev
var x=y[0],E=y[y.length-1]
for(k=0;k<y.length;k+=1)Fp(y[k],S,n)
for(k=0;k<w.length;k+=1)a.delete(w[k])
Ap(t,x.prev,E.next),Ap(t,b,x),Ap(t,E,S),m=S,b=E,f-=1,y=[],w=[]}else a.delete(d),Fp(d,m,n),Ap(t,d.prev,d.next),Ap(t,d,null===b?t.first:b.next),Ap(t,b,d),b=d
continue}for(y=[],w=[];null!==m&&m.k!==u;)0==(m.e.f&Ou)&&(a??=new Set).add(m),w.push(m),m=m.next
if(null===m)continue
d=m}y.push(d),b=d,m=d.next}else{b=Mp(m?m.e.nodes_start:n,t,b,null===b?t.first:b.next,c,u,f,r,i,s),g.set(u,b),y=[],w=[],m=b.next}if(null!==m||void 0!==a){for(var C=void 0===a?[]:lu(a);null!==m;)0==(m.e.f&Ou)&&C.push(m),m=m.next
var P=C.length
if(P>0){var T=0!=(i&Xu)&&0===v?n:null
if(p){for(f=0;f<P;f+=1)C[f].a?.measure()
for(f=0;f<P;f+=1)C[f].a?.fix()}!function(e,t,n,r){for(var i=[],o=t.length,s=0;s<o;s++)lf(t[s].e,i,!0)
var a=o>0&&0===i.length&&null!==n
if(a){var l=n.parentNode
l.textContent="",l.append(n),r.clear(),Ap(e,t[0].prev,t[o-1].next)}af(i,(()=>{for(var n=0;n<o;n++){var i=t[n]
a||(r.delete(i.k),Ap(e,i.prev,i.next)),rf(i.e,!a)}}))}(t,C,T,g)}}p&&hf((()=>{if(void 0!==l)for(d of l)d.a?.apply()}))
Cf.first=t.first&&t.first.e,Cf.last=b&&b.e}(e,a,s,i,t,r,n),null!==o&&(0===d?l?cf(l):l=ef((()=>o(s))):null!==l&&sf(l,(()=>{l=null}))),Xf(u))}))}function Rp(e,t,n,r){0!=(r&Ju)&&Cd(e.v,t),0!=(r&Ku)?Cd(e.i,n):e.i=n}function Mp(e,t,n,r,i,o,s,a,l,c){var u=0!=(l&Ju)?0==(l&Zu)?xd(i):kd(i):i,d=0==(l&Ku)?s:kd(s),f={i:d,v:u,k:o,a:null,e:null,prev:n,next:r}
try{return f.e=ef((()=>a(e,u,d,c)),Td),f.e.prev=n&&n.e,f.e.next=r&&r.e,null===n?t.first=f:(n.next=f,n.e.next=f.e),null!==r&&(r.prev=f,r.e.prev=f.e),f}finally{}}function Fp(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,o=e.e.nodes_start;o!==r;){var s=Fd(o)
i.before(o),o=s}}function Ap(e,t,n){null===t?e.first=n:(t.next=n,t.e.next=n&&n.e),null!==n&&(n.prev=t,n.e.prev=t&&t.e)}function jp(e,t,n,r,i){var o,s=e,a=""
Zd((()=>{a!==(a=t()??"")&&(void 0!==o&&(rf(o),o=void 0),""!==a&&(o=ef((()=>{var e=pp(a+"")
hp(Md(e),e.lastChild),s.before(e)}))))}))}function Np(e,t,...n){var r,i=e,o=_u
Zd((()=>{o!==(o=t())&&(r&&(rf(r),r=null),r=ef((()=>o(i,...n))))}),Fu)}function Dp(e,t,n){var r,i,o=e
Zd((()=>{r!==(r=t())&&(i&&(sf(i),i=null),r&&(i=ef((()=>n(o,r)))))}),Fu)}function Bp(e,t,n){Kd((()=>{var r=Yf((()=>t(e,n?.())||{}))
if(r?.destroy)return()=>r.destroy()}))}function qp(e){var t,n,r=""
if("string"==typeof e||"number"==typeof e)r+=e
else if("object"==typeof e)if(Array.isArray(e)){var i=e.length
for(t=0;t<i;t++)e[t]&&(n=qp(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n)
return r}function Hp(e){return"object"==typeof e?function(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=qp(e))&&(r&&(r+=" "),r+=t)
return r}(e):e??""}const Up=[..." \t\n\r\f \v\ufeff"]
function Gp(e,t=!1){var n=t?" !important;":";",r=""
for(var i in e){var o=e[i]
null!=o&&""!==o&&(r+=" "+i+": "+o+n)}return r}function Wp(e){return"-"!==e[0]||"-"!==e[1]?e.toLowerCase():e}function zp(e,t,n,r,i,o){var s=e.__className
if(s!==n||void 0===s){var a=function(e,t,n){var r=null==e?"":""+e
if(t&&(r=r?r+" "+t:t),n)for(var i in n)if(n[i])r=r?r+" "+i:i
else if(r.length)for(var o=i.length,s=0;(s=r.indexOf(i,s))>=0;){var a=s+o
0!==s&&!Up.includes(r[s-1])||a!==r.length&&!Up.includes(r[a])?s=a:r=(0===s?"":r.substring(0,s))+r.substring(a+1)}return""===r?null:r}(n,r,o)
null==a?e.removeAttribute("class"):e.className=a,e.__className=n}else if(o&&i!==o)for(var l in o){var c=!!o[l]
null!=i&&c===!!i[l]||e.classList.toggle(l,c)}return o}function Vp(e,t={},n,r){for(var i in n){var o=n[i]
t[i]!==o&&(null==n[i]?e.style.removeProperty(i):e.style.setProperty(i,o,r))}}function Qp(e,t,n,r){if(e.__style!==t){var i=function(e,t){if(t){var n,r,i=""
if(Array.isArray(t)?(n=t[0],r=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim()
var o=!1,s=0,a=!1,l=[]
n&&l.push(...Object.keys(n).map(Wp)),r&&l.push(...Object.keys(r).map(Wp))
var c=0,u=-1
const t=e.length
for(var d=0;d<t;d++){var f=e[d]
if(a?"/"===f&&"*"===e[d-1]&&(a=!1):o?o===f&&(o=!1):"/"===f&&"*"===e[d+1]?a=!0:'"'===f||"'"===f?o=f:"("===f?s++:")"===f&&s--,!a&&!1===o&&0===s)if(":"===f&&-1===u)u=d
else if(";"===f||d===t-1){if(-1!==u){var p=Wp(e.substring(c,u).trim())
l.includes(p)||(";"!==f&&d++,i+=" "+e.substring(c,d).trim()+";")}c=d+1,u=-1}}}return n&&(i+=Gp(n)),r&&(i+=Gp(r,!0)),""===(i=i.trim())?null:i}return null==e?null:String(e)}(t,r)
null==i?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else r&&(Array.isArray(r)?(Vp(e,n?.[0],r[0]),Vp(e,n?.[1],r[1],"important")):Vp(e,n,r))
return r}const Jp=Symbol("is custom element"),Kp=Symbol("is html")
function Xp(e,t){var n=Zp(e)
n.value!==(n.value=t??void 0)&&(e.value!==t||0===t&&"PROGRESS"===e.nodeName)&&(e.value=t??"")}function Yp(e,t,n,r){var i=Zp(e)
i[t]!==(i[t]=n)&&("loading"===t&&(e[Hu]=n),null==n?e.removeAttribute(t):"string"!=typeof n&&function(e){var t,n=eh.get(e.nodeName)
if(n)return n
eh.set(e.nodeName,n=[])
var r=e,i=Element.prototype
for(;i!==r;){for(var o in t=du(r))t[o].set&&n.push(o)
r=hu(r)}return n}(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Zp(e){return e.__attributes??={[Jp]:e.nodeName.includes("-"),[Kp]:e.namespaceURI===ad}}var eh=new Map
const th={tick:e=>requestAnimationFrame(e),now:()=>performance.now(),tasks:new Set}
function nh(){const e=th.now()
th.tasks.forEach((t=>{t.c(e)||(th.tasks.delete(t),t.f())})),0!==th.tasks.size&&th.tick(nh)}function rh(e,t){sp((()=>{e.dispatchEvent(new CustomEvent(t))}))}function ih(e){if("float"===e)return"cssFloat"
if("offset"===e)return"cssOffset"
if(e.startsWith("--"))return e
const t=e.split("-")
return 1===t.length?t[0]:t[0]+t.slice(1).map((e=>e[0].toUpperCase()+e.slice(1))).join("")}function oh(e){const t={},n=e.split(";")
for(const e of n){const[n,r]=e.split(":")
if(!n||void 0===r)break
t[ih(n.trim())]=r.trim()}return t}const sh=e=>e
function ah(e,t,n,r){var i,o,s,a=0!=(e&od),l=t.inert,c=t.style.overflow
function u(){var e=Sf,o=Cf
Ef(null),Pf(null)
try{return i??=n()(t,r?.()??{},{direction:"both"})}finally{Ef(e),Pf(o)}}var d={is_global:a,in(){t.inert=l,rh(t,"introstart"),o=lh(t,u(),s,1,(()=>{rh(t,"introend"),o?.abort(),o=i=void 0,t.style.overflow=c}))},out(e){t.inert=!0,rh(t,"outrostart"),s=lh(t,u(),o,0,(()=>{rh(t,"outroend"),e?.()}))},stop:()=>{o?.abort(),s?.abort()}},f=Cf
if((f.transitions??=[]).push(d),bp){var p=a
if(!p){for(var h=f.parent;h&&0!=(h.f&Fu);)for(;(h=h.parent)&&0==(h.f&Su););p=!h||0!=(h.f&Mu)}p&&Kd((()=>{Yf((()=>d.in()))}))}}function lh(e,t,n,r,i){var o=1===r
if(gu(t)){var s,a=!1
return hf((()=>{if(!a){var l=t({direction:o?"in":"out"})
s=lh(e,l,n,r,i)}})),{abort:()=>{a=!0,s?.abort()},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(n?.deactivate(),!t?.duration)return i(),{abort:_u,deactivate:_u,reset:_u,t:()=>r}
const{delay:l=0,css:c,tick:u,easing:d=sh}=t
var f=[]
if(o&&void 0===n&&(u&&u(0,1),c)){var p=oh(c(0,1))
f.push(p,p)}var h=()=>1-r,v=e.animate(f,{duration:l})
return v.onfinish=()=>{var o=n?.t()??1-r
n?.abort()
var s=r-o,a=t.duration*Math.abs(s),l=[]
if(a>0){var f=!1
if(c)for(var p=Math.ceil(a/(1e3/60)),g=0;g<=p;g+=1){var _=o+s*d(g/p),m=oh(c(_,1-_))
l.push(m),f||="hidden"===m.overflow}f&&(e.style.overflow="hidden"),h=()=>{var e=v.currentTime
return o+s*d(e/a)},u&&function(e){let t
0===th.tasks.size&&th.tick(nh),new Promise((n=>{th.tasks.add(t={c:e,f:n})}))}((()=>{if("running"!==v.playState)return!1
var e=h()
return u(e,1-e),!0}))}(v=e.animate(l,{duration:a,fill:"forwards"})).onfinish=()=>{h=()=>r,u?.(r,1-r),i()}},{abort:()=>{v&&(v.cancel(),v.effect=null,v.onfinish=_u)},deactivate:()=>{i=_u},reset:()=>{0===r&&u?.(1,0)},t:()=>h()}}function ch(e,t,n=t){var r=gd()
ap(e,"input",(i=>{var o=i?e.defaultValue:e.value
if(o=dh(e)?fh(o):o,n(o),r&&o!==(o=t())){var s=e.selectionStart,a=e.selectionEnd
e.value=o??"",null!==a&&(e.selectionStart=s,e.selectionEnd=Math.min(a,e.value.length))}})),null==Yf(t)&&e.value&&n(dh(e)?fh(e.value):e.value),Xd((()=>{var n=t()
dh(e)&&n===fh(e.value)||("date"!==e.type||n||e.value)&&n!==e.value&&(e.value=n??"")}))}function uh(e,t,n=t){ap(e,"change",(t=>{var r=t?e.defaultChecked:e.checked
n(r)})),null==Yf(t)&&n(e.checked),Xd((()=>{var n=t()
e.checked=Boolean(n)}))}function dh(e){var t=e.type
return"number"===t||"range"===t}function fh(e){return""===e?null:+e}function ph(e,t,n){if(e.multiple)return function(e,t){for(var n of e.options)n.selected=~t.indexOf(vh(n))}(e,t)
for(var r of e.options){if(yd(vh(r),t))return void(r.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}function hh(e,t,n=t){var r=!0
ap(e,"change",(t=>{var r,i=t?"[selected]":":checked"
if(e.multiple)r=[].map.call(e.querySelectorAll(i),vh)
else{var o=e.querySelector(i)??e.querySelector("option:not([disabled])")
r=o&&vh(o)}n(r)})),Kd((()=>{var i=t()
if(ph(e,i,r),r&&void 0===i){var o=e.querySelector(":checked")
null!==o&&(i=vh(o),n(i))}e.__value=i,r=!1})),function(e,t){Kd((()=>{var t=new MutationObserver((()=>{var t=e.__value
ph(e,t)}))
return t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{t.disconnect()}}))}(e)}function vh(e){return"__value"in e?e.__value:e.value}class gh{#e=new WeakMap
#t
#n
static entries=new WeakMap
constructor(e){this.#n=e}observe(e,t){var n=this.#e.get(e)||new Set
return n.add(t),this.#e.set(e,n),this.#r().observe(e,this.#n),()=>{var n=this.#e.get(e)
n.delete(t),0===n.size&&(this.#e.delete(e),this.#t.unobserve(e))}}#r(){return this.#t??(this.#t=new ResizeObserver((e=>{for(var t of e)for(var n of(gh.entries.set(t.target,t),this.#e.get(t.target)||[]))n(t)})))}}var _h=new gh({box:"border-box"})
function mh(e,t){return e===t||e?.[Bu]===t}function bh(e={},t,n,r){return Kd((()=>{var r,i
return Xd((()=>{r=i,i=[],Yf((()=>{e!==n(...i)&&(t(e,...i),r&&mh(n(...r),e)&&t(null,...r))}))})),()=>{hf((()=>{i&&mh(n(...i),e)&&t(null,...i)}))}})),e}function yh(e,t,n){if(null==e)return t(void 0),n&&n(void 0),_u
const r=Yf((()=>e.subscribe(t,n)))
return r.unsubscribe?()=>r.unsubscribe():r}const wh=[]
function kh(e,t=_u){let n=null
const r=new Set
function i(t){if(Gu(e,t)&&(e=t,n)){const t=!wh.length
for(const t of r)t[1](),wh.push(t,e)
if(t){for(let e=0;e<wh.length;e+=2)wh[e][0](wh[e+1])
wh.length=0}}}function o(t){i(t(e))}return{set:i,update:o,subscribe:function(s,a=_u){const l=[s,a]
return r.add(l),1===r.size&&(n=t(i,o)||_u),s(e),()=>{r.delete(l),0===r.size&&n&&(n(),n=null)}}}}function Sh(e,t,n){const r=!Array.isArray(e),i=r?[e]:e
if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const o=t.length<2
return s=(e,n)=>{let s=!1
const a=[]
let l=0,c=_u
const u=()=>{if(l)return
c()
const i=t(r?a[0]:a,e,n)
o?e(i):c="function"==typeof i?i:_u},d=i.map(((e,t)=>yh(e,(e=>{a[t]=e,l&=~(1<<t),s&&u()}),(()=>{l|=1<<t}))))
return s=!0,u(),function(){bu(d),c(),s=!1}},{subscribe:kh(n,s).subscribe}
var s}function xh(e){let t
return yh(e,(e=>t=e))(),t}let Eh=!1,Ch=Symbol()
function Ph(e,t,n){const r=n[t]??={store:null,source:xd(void 0),unsubscribe:_u}
if(r.store!==e&&!(Ch in n))if(r.unsubscribe(),r.store=e??null,null==e)r.source.v=void 0,r.unsubscribe=_u
else{var i=!0
r.unsubscribe=yh(e,(e=>{i?r.source.v=e:Ed(r.source,e)})),i=!1}return e&&Ch in n?xh(e):Xf(r.source)}function Th(e,t){return e.set(t),t}function $h(){const e={}
return[e,function(){Vd((()=>{for(var t in e){e[t].unsubscribe()}cu(e,Ch,{enumerable:!1,value:!0})}))}]}const Lh={get(e,t){let n=e.props.length
for(;n--;){let r=e.props[n]
if(gu(r)&&(r=r()),"object"==typeof r&&null!==r&&t in r)return r[t]}},set(e,t,n){let r=e.props.length
for(;r--;){let i=e.props[r]
gu(i)&&(i=i())
const o=uu(i,t)
if(o&&o.set)return o.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length
for(;n--;){let r=e.props[n]
if(gu(r)&&(r=r()),"object"==typeof r&&null!==r&&t in r){const e=uu(r,t)
return e&&!e.configurable&&(e.configurable=!0),e}}},has(e,t){if(t===Bu||t===qu)return!1
for(let n of e.props)if(gu(n)&&(n=n()),null!=n&&t in n)return!0
return!1},ownKeys(e){const t=[]
for(let n of e.props){gu(n)&&(n=n())
for(const e in n)t.includes(e)||t.push(e)}return t}}
function Ih(e){return e.ctx?.d??!1}function Oh(e,t,n,r){var i,o=0!=(n&ed),s=!zu||0!=(n&td),a=0!=(n&rd),l=0!=(n&id),c=!1
a?[i,c]=function(e){var t=Eh
try{return Eh=!1,[e(),Eh]}finally{Eh=t}}((()=>e[t])):i=e[t]
var u,d=Bu in e||qu in e,f=a&&(uu(e,t)?.set??(d&&t in e&&(n=>e[t]=n)))||void 0,p=r,h=!0,v=!1,g=()=>(v=!0,h&&(h=!1,p=l?Yf(r):r),p)
if(void 0===i&&void 0!==r&&(f&&s&&function(e){throw new Error("https://svelte.dev/e/props_invalid_value")}(),i=g(),f&&f(i)),s)u=()=>{var n=e[t]
return void 0===n?g():(h=!0,v=!1,n)}
else{var _=(o?Dd:qd)((()=>e[t]))
_.f|=Au,u=()=>{var e=Xf(_)
return void 0!==e&&(p=void 0),void 0===e?p:e}}if(0==(n&nd))return u
if(f){var m=e.$$legacy
return function(e,t){return arguments.length>0?(s&&t&&!m&&!c||f(t?u():e),e):u()}}var b=!1,y=xd(i),w=Dd((()=>{var e=u(),t=Xf(y)
return b?(b=!1,t):y.v=e}))
return a&&Xf(w),o||(w.equals=Wu),function(e,t){if(arguments.length>0){const n=t?Xf(w):s&&a?_d(e):e
if(!w.equals(n)){if(b=!0,Ed(y,n),v&&void 0!==p&&(p=n),Ih(w))return e
Yf((()=>Xf(w)))}return e}return Ih(w)?w.v:Xf(w)}}function Rh(e){null===fd&&dd(),zu&&null!==fd.l?function(e){var t=e.l
return t.u??={a:[],b:[],m:[]}}(fd).m.push(e):Qd((()=>{const t=Yf(e)
if("function"==typeof t)return t}))}function Mh(e){null===fd&&dd(),Rh((()=>()=>Yf(e)))}const Fh=kh("")
"undefined"!=typeof window&&((window.__svelte??={}).v??=new Set).add("5")
const Ah=e=>e
function jh(e){const t=e-1
return t*t*t+1}function Nh(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function Dh(e,{delay:t=0,duration:n=400,easing:r=Ah}={}){const i=+getComputedStyle(e).opacity
return{delay:t,duration:n,easing:r,css:e=>"opacity: "+e*i}}function Bh(e,{delay:t=0,duration:n=400,easing:r=jh,x:i=0,y:o=0,opacity:s=0}={}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-s),[d,f]=Nh(i),[p,h]=Nh(o)
return{delay:t,duration:n,easing:r,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*d}${f}, ${(1-e)*p}${h});\n\t\t\topacity: ${l-u*t}`}}function qh(e,{delay:t=0,duration:n=400,easing:r=jh,axis:i="y"}={}){const o=getComputedStyle(e),s=+o.opacity,a="y"===i?"height":"width",l=parseFloat(o[a]),c="y"===i?["top","bottom"]:["left","right"],u=c.map((e=>`${e[0].toUpperCase()}${e.slice(1)}`)),d=parseFloat(o[`padding${u[0]}`]),f=parseFloat(o[`padding${u[1]}`]),p=parseFloat(o[`margin${u[0]}`]),h=parseFloat(o[`margin${u[1]}`]),v=parseFloat(o[`border${u[0]}Width`]),g=parseFloat(o[`border${u[1]}Width`])
return{delay:t,duration:n,easing:r,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*s};${a}: ${e*l}px;padding-${c[0]}: ${e*d}px;padding-${c[1]}: ${e*f}px;margin-${c[0]}: ${e*p}px;margin-${c[1]}: ${e*h}px;border-${c[0]}-width: ${e*v}px;border-${c[1]}-width: ${e*g}px;min-${a}: 0`}}var Hh=(e,t)=>{Ed(t,!1)},Uh=vp('<div role="alert" class="svelte-1c416no"><p class="svelte-1c416no"> </p></div>')
function Gh(e,t){hd(t,!0)
const[n,r]=$h(),i=()=>Ph(Fh,"$alert",n)
let o=Oh(t,"ms",3,3e3),s=Sd(!1),a=0,l=Sd("")
const c=(e,t)=>{clearTimeout(a),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
Ed(l,`translate(${t}px, ${e.offsetTop}px)`),Ed(s,!0)}(),t>0&&(a=setTimeout((()=>{Ed(s,!1),Th(Fh,"")}),t))):Ed(s,!1)}
Qd((()=>{c(i(),o())})),Mh((()=>clearTimeout(a)))
var u=_p(),d=jd(u),f=e=>{var t=Uh()
let n
t.__click=[Hh,s]
var r=Ad(t),o=Ad(r)
Yd((()=>{n=Qp(t,"",n,{transform:Xf(l)}),yp(o,i())})),ah(3,t,(()=>Bh),(()=>({delay:250,duration:300,x:0,y:-100,opacity:.5}))),mp(e,t)}
$p(d,(e=>{Xf(s)&&e(f)})),mp(e,u),vd(),r()}dp(["click"])
let Wh=!1
function zh(e){e&&(Wh||(Wh=!0,wp(Gh,{target:document.body})),Fh.set(e))}function Vh(e,t){return Array.from(e,t)}function Qh(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function Jh(e,t){return Vh(Qh(e,t))}function Kh(e){return e.trim()}function Xh(e){const t=n(e)
if(gc(t))return Kh(t)}function Yh(e,t){return Xh(t).includes(e)}function Zh(e,...t){return(...n)=>e(...t,...n)}let ev=0,tv=0,nv=0
function rv(){return ev||(ev=t("pCL")),ev}function iv(){return tv||(tv=t("pCC")),tv}function ov(){return nv||(nv=t("pCR")),nv}function sv(){const e=Jh("a",rv()).filter(function(e){return Zh(Yh,e)}("message"))
e.length&&async function(){const e=new Audio(hc("defaultMessageSound"))
try{await e.play()}catch(e){zh("Message Sound Not Allowed")}}()}function av(e,t,n,r){var i
Nc(e,t,n,{once:!0,...(i=r,vc(i)?{capture:i}:i)})}let lv=0,cv=0,uv=0,dv=0,fv=0,pv=0
function hv(e){cv=e.clientX,uv=e.clientY}function vv(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(lv,null).transform)
dv=e[0]-cv,fv=e[1]-uv}function gv(e){e.clientX===cv&&e.clientY===uv||(lv.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+dv).toString()}, ${(e.clientY+fv).toString()})`,hv(e))}function _v(e){return function(e){const t=performance.now()
t-pv>16&&(gv(e),pv=t)}(e),e.preventDefault(),!1}function mv(e){return gv(e),function(e,t,n,r){e instanceof EventTarget&&e.removeEventListener(t,n,r)}(document.body,"dragover",_v),e.preventDefault(),!1}function bv(e,t){!function(e,t){lv=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),hv(t),vv(),pv=0,t.dataTransfer.setData("text/plain",""),Nc(document.body,"dragover",_v),av(document.body,"drop",mv)}function yv(e,t){e.draggable=!0,Nc(e,"dragstart",Zh(bv,t))}function wv(e){return String(e).replaceAll(" ","_")}const kv={}
function Sv(e,t,n){if(!e)return
const r=function(e,t){let n=wv(e)
return t&&(n+=`__${wv(t)}`),n}(e,t),i=function(e,t){let n=e
return t&&(n+=`__${wv(t)}`),n}(r,n)
kv[i]||(kv[i]=!0,na(r,function(e){return e?{eventLabel:e}:null}(n)))}let xv=0
function Ev(e){const t=l(/\sguildId: (?<id>\d{1,6}),/,n(e))
t&&(xv=Number(t))}function Cv(){return xv||Jh("script",document.body).forEach(Ev),xv}function Pv(e){return Object.entries(e)}function Tv(e,t,[n,r]){kc(r)&&null!==r?e(t[n],r):t[n]=r}function $v(e,t){Pv(t).forEach(Zh(Tv,$v,e))}function Lv(e,t){const n=document.createElement(e)
return t&&$v(n,t),n}function Iv(e){return Lv("div",e)}function Ov(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function Rv(e,t){return Vh(Ov(e,t))}function Mv(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function Fv(e,t){t instanceof Element&&(t.innerHTML=String(e))}const Av={id:"content",style:{display:"none"}},jv={width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}
function Nv(e){let n=t("content")
n?Fv("",n):(n=Iv(Av),Mv(document.body,n)),$(n).dialog(jv),Rv("ui-dialog-titlebar-close").forEach((e=>e.blur())),e(n)}async function Dv(e){(await e).default()}function Bv(){Dv(import("./mountBuffLog.svelte-d_QrNLfx.js"))}function qv(){Dv(import("./mountCombatLog.svelte-DkNQY3EP.js"))}function Hv(){Dv(import("./mountCreatureLog.svelte-C2Obb_nf.js"))}function Uv(){Dv(import("./mountFsboxlog.svelte-BF6_Oeus.js"))}function Gv(){Dv(Promise.resolve().then((function(){return hE})))}function Wv(){Dv(import("./mountGuildTracker.svelte-DTOlZ_jQ.js"))}async function zv(e){(await import("./injectAuctionSearch-DqNKn-B_.js")).default(e)}async function Vv(e){const{injectFindBuffs:t}=await import("./findBuffs-auVPJ0Ps.js")
t(e)}async function Qv(e){const{injectFindOther:t}=await import("./findBuffs-auVPJ0Ps.js")
t(e)}async function Jv(e){(await import("./injectOnlinePlayers-Ba832BbF.js")).default(e)}function Kv(){Dv(Promise.resolve().then((function(){return OC})))}function Xv(){Dv(import("./mountQuickLinksMgr.svelte-AL6AQ05M.js"))}async function Yv(e){(await import("./quickWear-DfTZB5yC.js")).default(e)}function Zv(){Dv(import("./mountRecipeMgr.svelte-O-UM3x_c.js"))}function eg(){Dv(import("./mountReliclist.svelte-Ndx0G77v.js"))}function tg(e){return new Promise((t=>{setTimeout(t,e)}))}function ng(e){Nc(window,"beforeunload",(()=>e.abort()))}const rg=900
let ig=0
const og=5
let sg=0
async function ag(){sg<og-$.active&&performance.now()-ig>=rg?(sg=og-$.active,ig=performance.now()):await tg(100)}async function lg(e,t=10){await async function(){for(;sg<1;)await ag()
sg-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=ng,$.ajax(t).fail(((e,t,n)=>{e.textStatus=t,e.errorThrown=n}))}(e)}catch(n){if(t&&n.status>500)return lg(e,t-1)
!function(e,t){if(![0,500,503].includes(t.status))throw new jc([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}function cg(e){return $v(e,{url:Aa,data:{no_mobile:1}}),lg(e)}async function ug(e){return Sc(await cg({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function dg(e){return ug({cmd:"export",...e})}function fg(){return dg({inc_tagged:"1",subcmd:"guild_store"})}function pg(e){return Lv("a",e)}function hg(e){e instanceof Element&&e.click()}function vg(e,t){const n=URL.createObjectURL(e),r=pg({download:t,href:n,style:{display:"none"}})
Mv(document.body,r),hg(r),document.body.removeChild(r),setTimeout((()=>{URL.revokeObjectURL(n)}),0)}async function gg(e,t){return Sc(await lg({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function _g(e){return gg(e,{method:"POST"})}function mg(e,t){const n=[]
for(let r=0;r<t.length;r+=e)n.push(t.slice(r,r+e))
return n}let bg=null
function yg(){const e=t("holdtext")
if(e&&!bg){const t=l(/fallensword.com\/\?ref=(?<id>\d+)/,n(e))
t&&(bg=Number(t))}return bg}const wg=(e,t)=>t.some((t=>e instanceof t))
let kg,Sg
const xg=new WeakMap,Eg=new WeakMap,Cg=new WeakMap
let Pg={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return xg.get(e)
if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ig(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}
function Tg(e){Pg=e(Pg)}function $g(e){return(Sg||(Sg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Og(this),t),Ig(this.request)}:function(...t){return Ig(e.apply(Og(this),t))}}function Lg(e){return"function"==typeof e?$g(e):(e instanceof IDBTransaction&&function(e){if(xg.has(e))return
const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()}
e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}))
xg.set(e,t)}(e),wg(e,kg||(kg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Pg):e)}function Ig(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(Ig(e.result)),r()},o=()=>{n(e.error),r()}
e.addEventListener("success",i),e.addEventListener("error",o)}))
return Cg.set(t,e),t}(e)
if(Eg.has(e))return Eg.get(e)
const t=Lg(e)
return t!==e&&(Eg.set(e,t),Cg.set(t,e)),t}const Og=e=>Cg.get(e)
function Rg(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Ig(s)
return r&&s.addEventListener("upgradeneeded",(e=>{r(Ig(s.result),e.oldVersion,e.newVersion,Ig(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const Mg=["get","getKey","getAll","getAllKeys","count"],Fg=["put","add","delete","clear"],Ag=new Map
function jg(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return
if(Ag.get(t))return Ag.get(t)
const n=t.replace(/FromIndex$/,""),r=t!==n,i=Fg.includes(n)
if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Mg.includes(n))return
const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly")
let s=o.store
return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]}
return Ag.set(t,o),o}Tg((e=>({...e,get:(t,n,r)=>jg(t,n)||e.get(t,n,r),has:(t,n)=>!!jg(t,n)||e.has(t,n)})))
const Ng=["continue","continuePrimaryKey","advance"],Dg={},Bg=new WeakMap,qg=new WeakMap,Hg={get(e,t){if(!Ng.includes(t))return e[t]
let n=Dg[t]
return n||(n=Dg[t]=function(...e){Bg.set(this,qg.get(this)[t](...e))}),n}}
async function*Ug(...e){let t=this
if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return
const n=new Proxy(t,Hg)
for(qg.set(n,t),Cg.set(n,Og(t));t;)yield n,t=await(Bg.get(n)||t.continue()),Bg.delete(n)}function Gg(e,t){return t===Symbol.asyncIterator&&wg(e,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===t&&wg(e,[IDBIndex,IDBObjectStore])}Tg((e=>({...e,get:(t,n,r)=>Gg(t,n)?Ug:e.get(t,n,r),has:(t,n)=>Gg(t,n)||e.has(t,n)})))
let Wg=Promise.resolve(),zg=!1
function Vg(){return zg||(Wg=Rg("keyval-store",1,{upgrade(e){e.createObjectStore("keyval")}}),zg=!0),Wg}async function Qg(e){try{return(await Vg()).get("keyval",e)}catch(e){ta(e)}}async function Jg(e,t){try{return(await Vg()).put("keyval",t,e)}catch(e){ta(e)}}async function Kg(e){try{return(await Vg()).delete("keyval",e)}catch(e){ta(e)}}const Xg=({folder_id:e})=>-2!==(e??-2),Yg=({folder_id:e})=>-2===e,Zg=({player_id:e})=>-1!==(e??-1),e_=({player_id:e})=>e,t_=({player_id:e})=>-1===e,n_=([e,t,n])=>mg(20,e).map((e=>[e,t,n])),r_=e=>({inv_id:t})=>t===e.inv_id,i_=(e,t)=>e.attributes.find((({id:e})=>e===t))?.value??0,o_=(e,t)=>({...t,armor:i_(e,2),attack:i_(e,0),damage:i_(e,4),defense:i_(e,1),hp:i_(e,3),set_name:e.set_name??""}),s_=(e,t)=>t.forge||t.stats?.set_name,a_=e=>e?.s?e.r.items:[],l_=e=>[[e.filter(Xg),yg,0],[e.filter(Yg),yg,1],[e.filter(Zg),e_,7],[e.filter(t_),yg,4]].flatMap(n_)
function c_(e){return function(){const t=this.data(),n=e.find(r_(t))
n?.attributes&&(t.stats=o_(n,t.stats),this.invalidate())}}const u_=async()=>await Qg(`fsh_${qc.subcmd}_cache`)??[],d_=e=>Jg(`fsh_${qc.subcmd}_cache`,e),f_=e=>t=>e.every((e=>e.inv_id!==t.inv_id))
async function p_(e,t,n){const r=await(i={item_id:e.map((({item_id:e})=>e)),inv_id:e.map((({inv_id:e})=>e)),p:e.map(t),t:e.map((()=>n))},_g({cmd:"fetchitem",compare:0,...i}))
var i
return r?.s&&(r.r.items=((e,t)=>t.map(((t,n)=>({...t,inv_id:e[n].inv_id}))))(e,r.r.items),await async function(e){const t=(await u_()).filter(f_(e))
await d_(t.concat(e))}(r.r.items)),r}const h_=(e,t)=>{return t.filter((n=Vh(e.data()),e=>n.some((t=>e.inv_id===t.inv_id))))
var n}
async function v_(e){const t=e.rows(s_),n=await async function(e){const t=await u_(),n=h_(e,t)
return await d_(n),n}(t)
t.every(c_(n))}async function g_(e){const t=new DataTable(e)
await v_(t),t.draw()}const __=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],m_=e=>{return[...__(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??"",t?.set_attack??"",t?.set_defense??"",t?.set_armor??"",t?.set_hp??"",t?.set_damage??""]),e.cached].join(",")
var t}
function b_(e){return()=>Nv(e)}var y_=[{section:"Character",menu:[{label:"Buff Log",fn:Bv},{label:"Combat Log",fn:qv},{label:"Creature Log",fn:Hv},{label:"Recipe Manager",fn:Zv},{label:"Quick Links",fn:Xv},{label:"Inventory Manager",href:`${Xa}invmanagernew`}]},{section:"Actions",menu:[{label:"Find Buffs",fn:b_(Vv)},{label:"Find Other",fn:b_(Qv)},{label:"Online Players",fn:b_(Jv)},{label:"AH Quick Search",fn:b_(zv)}]},...Cv()?[{section:"Guild",menu:[{label:"Guild Inventory",href:`${Xa}guildinvmgr`},{label:"New Guild Log",fn:Gv},{label:"Merc Hunter",fn:function(){Dv(import("./mountMercs.svelte-C2NXWfSW.js"))}},{label:"Pot Report",fn:function(){Dv(Promise.resolve().then((function(){return ZE})))}},{label:"Guild Tracker",fn:Wv}]}]:[],{section:"Extra",menu:[{label:"Quick Extract",fn:Kv},{label:"Quick Wear",fn:b_(Yv)},{label:"FS Box Log",fn:Uv},{label:"SE Tracker",fn:function(){Dv(import("./mountSuperElite.svelte-BB5O8UAW.js"))}}]},...hc("betaOptIn")&&Cv()?[{section:"Beta Features",menu:[{label:"Relic List",fn:eg,beta:!0},{label:"GS Export",fn:async function(){if(!Cv())return
const e=await fg(),t=await Qg("fsh_guildinvmgr_cache")??[],n=e.items.map((e=>t=>{const n=e.find((({inv_id:e})=>e===t.inv_id))
return n?.attributes?{...t,stats:{...t.stats,armor:i_(n,2),attack:i_(n,0),damage:i_(n,4),defense:i_(n,1),hp:i_(n,3),set_name:n.set_name??"",...n.set_name&&{set_armor:i_(n.set_bonuses,2)},...n.set_name&&{set_attack:i_(n.set_bonuses,0)},...n.set_name&&{set_damage:i_(n.set_bonuses,4)},...n.set_name&&{set_defense:i_(n.set_bonuses,1)},...n.set_name&&{set_hp:i_(n.set_bonuses,3)}},cached:!0}:{...t,cached:!1}})(t))
var r
vg((r=`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name,set_attack,set_defense,set_armor,set_hp,set_damage,cached\n${(e=>e.map(m_).join("\n"))(n)}\n`,new Blob([r],{type:"text/csv"})),"gs_export.csv")},beta:!0},{label:"Who's Got What",fn:function(){Dv(Promise.resolve().then((function(){return iP})))},beta:!0}]}]:[],{section:"FSH developer quick links",menu:[{playerId:1963510,playerName:"PointyHair"},{playerId:1674838,playerName:"Lusterless"}]}],w_=(e,t,n)=>t(Xf(n).label,Xf(n).fn),k_=vp('<button type="button" class="svelte-8sy7i5"> </button>'),S_=(e,t,n)=>t(Xf(n).label),x_=vp('<a class="svelte-8sy7i5"> </a>'),E_=(e,t,n)=>t(Xf(n).playerName),C_=vp('<button type="button" class="helperDevBtn svelte-8sy7i5">PM</button> <a class="svelte-8sy7i5"> </a>',1),P_=vp('<sup class="fshRed">beta</sup>'),T_=vp("<li><!> <!></li>"),$_=vp('<h2 class="svelte-8sy7i5"> </h2> <ul></ul>',1)
dp(["click"])
var L_=vp('<div class="modal svelte-gt76l6"><!></div>'),I_=vp('<div><button type="button">Helper Menu</button> <!></div>')
function O_(e,t){hd(t,!0)
let n=Sd(!1)
const r=hc("keepHelperMenuOnScreen"),i=hc("draggableHelperMenu")
function o(){Ed(n,!Xf(n))}var s=I_()
zp(s,0,"helper-menu svelte-gt76l6",null,{},{"helper-menu-fixed":r})
var a=Ad(s)
zp(a,0,"toggle svelte-gt76l6",null,{},{"helper-menu-move":i}),a.__click=o
var l=Nd(a,2),c=e=>{var t=L_()
!function(e,t){function n(e){Sv("helperMenu",e)}function r(e,r){wc(r)&&(n(e),t.doToggle(),r())}function i(e){n("sendMsg"),t.doToggle(),window.openQuickMsgDialog(e)}hd(t,!0)
var o=_p()
Op(jd(o),17,(()=>y_),Ip,((e,t)=>{var o=$_(),s=jd(o),a=Ad(s)
Op(Nd(s,2),21,(()=>Xf(t).menu),Ip,((e,t,o,s)=>{var a=T_(),l=Ad(a),c=e=>{var n=k_()
n.__click=[w_,r,t]
var i=Ad(n)
Yd((()=>yp(i,Xf(t).label))),mp(e,n)},u=(e,r)=>{var o=e=>{var r=x_()
r.__click=[S_,n,t]
var i=Ad(r)
Yd((()=>{Yp(r,"href",Xf(t).href),yp(i,Xf(t).label)})),mp(e,r)},s=(e,n)=>{var r=e=>{var n=C_(),r=jd(n)
r.__click=[E_,i,t]
var o=Nd(r,2)
Yp(o,"href",`${za??""}menuItem.playerId`)
var s=Ad(o)
Yd((()=>yp(s,Xf(t).playerName))),mp(e,n)}
$p(e,(e=>{Xf(t).playerName&&e(r)}),n)}
$p(e,(e=>{Xf(t).href?e(o):e(s,!1)}),r)}
$p(l,(e=>{Xf(t).fn?e(c):e(u,!1)}))
var d=Nd(l,2),f=e=>{mp(e,P_())}
$p(d,(e=>{Xf(t).beta&&e(f)})),mp(e,a)})),Yd((()=>yp(a,Xf(t).section))),mp(e,o)})),mp(e,o),vd()}(Ad(t),{doToggle:o}),ah(3,t,(()=>Dh),(()=>({duration:100}))),mp(e,t)}
$p(l,(e=>{Xf(n)&&e(c)})),Bp(s,(e=>{return t=e,void(i&&yv(t))
var t})),mp(e,s),vd()}function R_(){const e=xc(".mainbody")
e&&function(e,t){wp(O_,{target:t.parentElement,props:{props:e}})}({},e)}function M_(e){return gg(e,{method:"GET"})}function F_(e){return M_({cmd:"trade",...e})}function A_(e,t){return F_({subcmd:"sendgold",xc:window.ajaxXC,target_username:e,gold_amount:t})}function j_(e,t,...n){return e(...n)}function N_(e){return(new DOMParser).parseFromString(e,"text/html")}function D_(e){return cg({data:e})}async function B_(e){const t=await D_(e)
if(t)return N_(t)}function q_(e){const n=t("info-msg",e)
if(n){const e=n.innerHTML
return e?e.replace(/<br.*/,""):""}}async function H_(e,t){const n=await B_(e)
if(!n)return{s:!1}
const r=q_(n)
return r===t?{s:!0}:{s:!1,e:{message:r}}}dp(["click"])
let U_=0
const G_=()=>U_
function W_(){U_=hc("sendGoldonWorld")}async function z_(){if(!G_())return
Sv("NewMap","doSendGold")
const e=await function(e,t){return j_(A_,0,e,t)}($("#HelperSendTo").html(),$("#HelperSendAmt").html().replace(/[^\d]/g,""))
e.s&&(bc("currentGoldSentTotal",parseInt(hc("currentGoldSentTotal"),10)+parseInt(hc("goldAmount"),10)),GameData.fetch(Fl))}function V_(e){window.location=e}function Q_(e){hc("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function J_(e){Sv("keyHandler",e)}function K_(e){return e?.toLowerCase?.()}function X_(e,t){return K_(e)<K_(t)?-1:K_(e)>K_(t)?1:0}function Y_(e){return M_({cmd:"profile",...e})}async function Z_(){const e=await Y_({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort(((e,t)=>X_(e.name,t.name)))}:e}function em(){return j_(Z_)}const tm=[e=>e?.s,(e,t)=>e.r?.length>t]
async function nm(e){const t=await em()
if(((e,t)=>tm.every((n=>n(t,e))))(e,t)){J_("changeCombatSet")
const n=t.r[e].id
Q_("2"),V_(`${Wa+Da}managecombatset&submit=Use&combatSetId=${n}`)}}function rm(e,n){t("worldPage")||(J_(e),V_(n))}function im(){qc.enableMaxGroupSizeToJoin?V_(al):V_(sl)}function om(){J_("logPage"),Q_("2"),V_(Ua)}function sm(e){const t=xc(`#pCC input[value="${e}"]`)
t&&(J_("movePage"),hg(t))}const am=[["!",nm,0],["@",nm,1],['"',nm,1],["#",nm,2],["£",nm,2],["$",nm,3],["%",nm,4],["^",nm,5],["&",nm,6],["*",nm,7],["(",nm,8],["0",function(){rm("toWorld",ll)}],["<",sm,"<"],[">",sm,">"],["G",function(){J_("createGroup"),Q_("4"),V_(`${rl}create`)}],["L",om],["b",function(){J_("backpack"),Q_("2"),V_(Va)}],["g",function(){J_("gotoGuild"),Q_("4"),V_(`${el}manage`)}],["j",function(){J_("joinAllGroup"),Q_("4"),im()}],["l",om],["p",function(){J_("profile"),Q_("2"),V_(Wa)}],["r",function(){rm("doRepair",`${dl+Da}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in qc&&!qc.dialogIsClosed()||(J_("insertQuickWear"),Nv(Yv))}],["y",z_]]
const lm=[e=>["HTML","BODY"].every((t=>e.target.tagName!==t)),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function cm(e){var t;(t=e,lm.some((e=>e(t))))||function(e){const t=am.find((([t])=>e===t))
t&&t[1](t[2])}(e.key)}function um(){Nc(document,"keyup",cm)}function dm(e,t){return Xh(t)===e}function fm(e){return Zh(dm,e)}function pm(e,t,n){Nc(e,"click",t,n)}function hm(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function vm(e,t){return Vh(hm(e,t))}function gm(e){pm(e,(()=>{Sv("chrome","Game Help link")})),Fv(`<a href="${Na}settings">Game Help</a>`,e)}function _m(){vm("#pCR h3").filter(fm("Game Help")).forEach(gm)}function mm(e){qc[e]=hc(e)}function bm(e,t){if(t instanceof Element)return t.closest(e)}function ym(e){e?.classList&&e.classList.add("fshHide")}function wm(e){const n=bm("a",e.target)
n?.getAttribute("href")===tl&&(Sv("useNewGuildLog","Alter Href"),e.preventDefault(),Gv(),ym(t("notification-guild-log")))}function km(){return qc.huntingMode&&window.realmKeyHandler}function Sm(e){e.forEach((e=>nu(3,e)))}function xm(){return D_({cmd:"guild",subcmd:"manage"})}function Em(e){return bm("tr",e)}function Cm(e,t){return a(e,t)?.groups??{}}function Pm(e){const{d:t,h:n,m:r,s:i}=Cm(La,e),o=Number(t),s=Number(n)+24*o,a=Number(r)+60*s,l=Number(i)+60*a
return{day:t,days:o,hour:n,hours:s,min:r,mins:a,sec:i,secs:l,timestamp:ga()-l}}function Tm(e,t){if(t){const n=new Set
return e.filter((e=>n.has(e[t])?0:n.add(e[t])))}return Vh(new Set(e))}const $m=e=>Number(Xh(Em(e)?.cells[4])?.replaceAll(",","")),Lm=e=>Number(l(Ia,e.href)),Im=e=>Xh(Em(e)?.cells[3]),Om=e=>Number(l(Ra,e))
function Rm(e){return{guild_xp:$m(e),id:Lm(e),name:Xh(e),rank:Im(e)}}function Mm(e){const{stam:t,max:n}=Cm(Oa,e)
return{current_stamina:Number(t),last_activity:Pm(e).timestamp,level:Number(l(/Level:.+?(?<l>\d+)/,e)),max_stamina:Number(n),vl:Om(e)}}function Fm(e){return{guild_id:Cv(),image_version:0,xp:-1,...Rm(e),...Mm(e.dataset.tipped)}}function Am(e,t,n){return{id:n,members:e.filter((e=>e.rank===t.rank)),name:t.rank,permissions:0,tax:-1}}async function jm(){const e=N_(await xm()).getElementById("pCC")
if(!e)return{e:{code:0,message:"Failure"},s:!1}
const t=vm(ac,e).map(Fm)
return{r:Tm(t,"rank").map(Zh(Am,t)),s:!0}}function Nm(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function Dm(){return wc(window.jQuery)}function Bm(e){return Object.keys(e)}function qm(e){return Math.floor(Math.max(0,ga()-e)/86400)}function Hm(e){return Number.isNaN(e)}const Um=0,Gm=1,Wm=2,zm=3,Vm=4,Qm=5,Jm=6,Km="fsh_guildActivity"
function Xm(e){return dg({guild_id:e,subcmd:"guild_members"})}function Ym(e){return Promise.all(e)}function Zm(e){let t=e.toString()
return e<10&&(t=`0${t}`),t}function eb(e){return`${e[0]}-${e[1]}-${e[2]} ${e[3]}:${e[4]}:${e[5]}`}function tb(e){return"[object Date]"===Object.prototype.toString.call(e)&&!Hm(e.getTime())}function nb(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(Zm)}(e))}function rb(e){if(tb(e))return eb(nb(e))}async function ib(){return await Qg(Km)??{lastUpdate:0,members:{}}}const ob=e=>rb(new Date(1e3*e)),sb=e=>[e[0],e[1],e[2],e[3],ob(e[4]),e[5],e[6]]
function ab(e){const{lastUpdate:t,members:n}=e
var r
return`Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n${Pv(n).flatMap((r=ob(t),([e,t])=>t.map(sb).map((t=>[r,e,...t].join(","))))).join("\n")}`}const lb=e=>`${e[0]}${e[1]}${e[2]}${e[3]}${e[4]}${e[5]}`,cb=[e=>e.getFullYear().toString(),e=>e.getMonth()+1,e=>e.getDate(),e=>e.getHours(),e=>e.getMinutes(),e=>e.getSeconds()],ub=e=>t=>t(e)
async function db(e,t){const n=await ib()
if(!n.lastUpdate||!n.members)return
const r=e(n)
vg(new Blob([r],{type:t}),`${lb(cb.map(ub(new Date)).map(Zm))}_GuildTracker.${t.split("/")[1]}`)}async function fb(e){const t=await ib(),n={lastUpdate:t.lastUpdate,members:Nm(Pv(t.members).filter((([t])=>t!==e)))}
Jg(Km,n)}async function pb(e){const t=await ib(),n={lastUpdate:t.lastUpdate,members:Nm(Pv(t.members).map((([t,n])=>[t,n.filter((t=>t[4]>e))])))}
Jg(Km,n)}async function hb(){const[e,t]=await Ym([ib(),Xm(Cv())]),n=t.map((({username:e})=>e))
return Bm(e.members).filter((e=>t=>!e.find((e=>e===t)))(n)).sort(X_)}const vb=e=>[e.name,[qm(e.last_activity),e.current_stamina,e.level,e.max_stamina,ga(),e.vl,e.guild_xp]],gb=e=>e.members.map(vb),_b=e=>e.r.flatMap(gb),mb=[e=>!e,(e,t)=>e[1]!==t[1],(e,t)=>e[2]!==t[2],(e,t)=>e[3]>t[3],(e,t)=>e[5]!==t[5],(e,t)=>e[6]!==t[6]],bb=e=>!e.some(ya),yb=e=>!e.some(Hm),wb=([,e])=>e.length,kb=([e,t])=>[e,t.filter(bb).filter(yb)],Sb=e=>Pv(e.members||{}).map(kb).filter(wb),xb=(e,t)=>e[4]>t[4]?e:t,Eb=([e,t])=>[e,t.reduce(xb)],Cb=([e,t])=>[e,[t]],Pb=e=>([t])=>!e[t]||ga()-e[t][4]>=86100,Tb=(e,t,n)=>{return((e,t,n)=>({lastUpdate:ga(),members:Nm(Bm({...e,...t,...n}).map((r=>[r,[...e[r]??[],...t[r]??[],...n[r]??[]]])))}))(Nm(e.map((e=>([t,n])=>[t,n.filter((n=>n[4]!==e[t][4]))])(t))),Nm(Pv(t).filter((r=n,([e,t])=>mb.some((n=>n(r[e]?.[0],t))))).map(Cb)),n)
var r}
function $b(e,t){const n=Sb(e),r=Nm(n.map(Eb)),i=_b(t).filter(Pb(r))
i.length?function(e,t,n){e&&t&&n&&Jg(Km,Tb(t,n,Nm(e.map(Cb))))}(i,n,r):function(e){e&&Jg(Km,{lastUpdate:ga(),members:Nm(e)})}(n)}const Lb=e=>ga()>Uc(e.lastUpdate,0)+300
function Ib(e){Lb(e)&&async function(e){const t=await jm()
t.s&&$b(e,t)}(e)}function Ob(){return!Dm()}function Rb(e){return Lv("li",e)}function Mb(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function Fb(e,t){if(t instanceof Node&&t.parentNode instanceof Node)return function(e,t){return t.nextSibling instanceof Node?Mb(e,t.nextSibling):Mv(t.parentNode,e)}(e,t)}const Ab=["Buff Log","Combat Logs","Creature Logs","Quick Links","Recipe Manager","New Guild Log"]
function jb(e,t){Sv("accordion",e),Ab.includes(e)?t():Nv(t)}function Nb(e,t,n,r){const i=function(e,t,n){const r=Rb({className:`nav-level-${e}`}),i=pg({className:"nav-link fshPoint",textContent:t})
return Mv(r,i),Fb(r,n.parentNode),i}(e,t,r)
wc(n)?pm(i,Zh(jb,t,n)):(i.href=n,pm(i,(()=>Sv("accordion",t))))}const Db=[[e=>e.recipeManagerLink,"1","Recipe Manager",Zv,"nav-character-log"],[e=>e.inventoryManagerLink,"1","Inventory Manager",`${Xa}invmanagernew`,"nav-character-log"],[e=>e.medalGuideLink,"1","Medal Guide",`${Wa}${Da}medalguide`,"nav-character-log"],[e=>e.buffLogLink&&hc("keepBuffLog"),"1","Buff Log",Bv,"nav-character-log"],[e=>e.combatLogLink&&hc("keepLogs"),"1","Combat Logs",qv,"nav-character-notepad"],[e=>e.creatureLogLink&&hc("showMonsterLog"),"1","Creature Logs",Hv,"nav-character-notepad"],[e=>e.quickLinksLink,"1","Quick Links",Xv,"nav-character-notepad"],[e=>e.auctionSearchLink,"2","AH Quick Search",zv,"nav-actions-trade-auctionhouse"],[e=>e.onlinePlayersLink,"2","Online Players",Jv,"nav-actions-interaction-findplayer"],[e=>e.findOtherLink,"2","Find Other",Qv,"nav-actions-interaction-findplayer"],[e=>e.findBuffsLink,"2","Find Buffs",Vv,"nav-actions-interaction-findplayer"],[e=>e.guildInventoryLink&&Cv(),"2","Guild Inventory",`${Xa}guildinvmgr`,"nav-guild-storehouse-inventory"],[e=>e.newGuildLogLink&&Cv()&&!hc("useNewGuildLog"),"2","New Guild Log",Gv,"nav-guild-ledger-advisor"],[e=>e.topRatedLink,"2","Top 250 Players",`${Na}toprated${Da}xp`,"nav-toprated-players-level"]]
function Bb(e){Db.forEach((([n,r,i,o,s])=>{n(e)&&function(e,n,r,i){const o=t(i)
o instanceof Node&&Nb(e,n,r,o)}(r,i,o,s)}))}const qb=e=>22*vm("li",e).length||null
function Hb(e,t,n){Bb(n),function(e,t){t.heights=vm("#nav > li").map(qb)
const n=Number(t.state)
n&&n>-1&&n<e.children.length&&(e.children[t.state].children[1].style.height=`${t.heights[t.state]}px`)}(e,t)}var Ub=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function Gb(e){return function(e){return-1!==e&&0===xc(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?(Sv("accordion","collapse"),-1):e}const Wb=(e,t,n)=>$(e).data(`${n}${t}`)
function zb(e,t,n){return new Promise((r=>{const i=Wb(e,t,n)
i?r(i):function(e,t,n,r){$(e).on(`${K_(t)}create`,(()=>{r(Wb(e,t,n))}))}(e,t,n,r)}))}const Vb=[[e=>!kc(e),()=>Bc("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>Bc("$('#nav').data('hcsNav').heights does not exist")]]
async function Qb(){const e=t("nav"),n=await zb(e,"Nav","hcs")
return function(e){const t=Vb.find((([t])=>t(e)))
return!t||(t[1](),!1)}(n)?{theNav:e,myNav:n}:{}}function Jb(){!function(){const e=hc("lastActiveQuestPage")
hc("storeLastQuestPage")&&e.length>0&&(t("nav-character-questbook").href=e)}(),function(){const e=hc("lastScavPage")
hc("storeLastScavPage")&&e.length>0&&(t("nav-actions-artisanship-scavenging").href=e)}()}async function Kb(){const{theNav:e,myNav:t}=await Qb()
e&&t&&(Jb(),function(e,t){const n=Ub.map((e=>[e,hc(e)]))
n.some((([,e])=>e))&&Hb(e,t,Nm(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,Gb(n))}}(t))}function Xb(e){return D_({cmd:"bounty",page:e})}function Yb(e){return e()}function Zb(e,t){bc(e,Dc(t))}let ey=0,ty=0
const ny=()=>ey,ry=()=>ty
function iy(){return Iv({className:"minibox"})}function oy(e){return Lv("span",e)}function sy(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function ay(e,t){sy(e,"beforeend",t)}function ly([e,t,n,r,i]){const o=e(),s=n()
if(s)return Zb(t,s),Fv("",o),function(e,t,n,r){const i=Iv({innerHTML:`<a class="fshBountyHeader" href="${_l}">${n} Bounties</a> `}),o=oy({className:"xxsLink",textContent:"Reset"})
return Mv(i,o),Mv(e,i),ay(e,function(e,t,n){const r=e.bounty
return 0===r.length?`<div class="xsOrange">[No ${t.toLowerCase()} bounties]</div>`:r.map(n).join("")}(t,n,r)),o}(o,s,r,i)}function cy(e,t){return`<a href="${e.link}" class="xsKhaki tip-static" data-tipped="${t(e)}">${e.target}</a><br>`}function uy(e,t){if("string"==typeof t){const e=a(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function dy(e){const t=hc(e)
if(t)return Sc(t,uy)}function fy(e){return e.split(",").map(Kh)}function py(e){const t=hc(e)
return t?fy(t):[]}function hy(e){return xc("img",e[2]).title}function vy(e){const t="A"===(r=e[0]).children[0].tagName?r.children[0]:r.children[0].children[0]
var r
return{target:n(t),link:t.href,lvl:n(t.nextSibling).replace(/[[|\]]/g,""),reward:n(e[2]),rewardType:hy(e),xpLoss:n(e[3]),posted:n(e[4])}}let gy=0,_y={},my={},by=!1,yy=!1,wy=[]
const ky=()=>_y,Sy=()=>my,xy=()=>by,Ey=()=>wy
function Cy(e){return{...vy(e),progress:n(e[5])}}function Py(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=Cy(e.rows[t].cells)
_y.bounty.push(n)}}(e)}function Ty(e,t){return function(e){if(e)return _y&&ga()-_y.lastUpdate>gy}(e)||function(e){if(e)return my&&ga()-my.lastUpdate>gy}(t)}let $y=0
const Ly=()=>$y
function Iy(e){return`Level:  ${e.lvl}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Progress:  ${e.progress}`}function Oy(e){return cy(e,Iy)}function Ry(){$y=ly([ny,"bountyList",ky,"Active",Oy])}let My=0
const Fy=()=>My
function Ay(e){return`Target Level:  ${e.lvl}<br>Offerer: ${e.offerer}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Posted: ${e.posted}<br>Tickets Req.:  ${e.tickets}`}function jy(e){return e.accept?`<span class="xsGreen" onclick="${e.accept}">[a]</span>&nbsp;`:""}function Ny(e){return[jy(e),cy(e,Ay)].join("")}function Dy(){My=ly([ry,"wantedList",Sy,"Wanted",Ny])}function By(e){const t=e[6]
return"[n/a]"!==Xh(t)?t.children[0].children[0].getAttribute("onclick"):""}const qy=[()=>Ey().includes("*"),e=>Ey().includes(e),(e,t)=>qc.wantedGuildMembers&&"[n/a]"===Xh(t.cells[6])]
function Hy(e,t){var n;(function(e,t){return"[active]"!==Xh(t.cells[6])&&qy.some((n=>n(e,t)))})(e,t)&&Sy().bounty.push({...vy(n=t.cells),offerer:Xh(n[1].children[0].children[0]),tickets:Xh(n[5]),accept:By(n)})}let Uy=0,Gy=0
function Wy(e){const n=xc('#pCC input[name="page"]',e)
if(!n)return
Uy=Number(n.value),Gy=Number(l(/of&nbsp;(?<of>\d*)/,n.parentNode.innerHTML))
const r=t("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
r&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],r=Xh(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===r)break
Hy(r,n)}}(r)}function zy(e){qc.enableActiveBountyList&&!xy()&&(!function(e){const n=t("bounty-info",e)
if(!n)return
const r=n.parentNode.parentNode.previousElementSibling.children[0].children[0]
_y={},_y.bounty=[],_y.isRefreshed=!0,_y.lastUpdate=ga(),r&&Py(r),by=!0}(e),Ry())}async function Vy(e){const t=N_(e)
if(zy(t),qc.enableWantedList)if(Wy(t),Uy<Gy){Vy(await Xb(Uy+1))}else Dy()}const Qy=[()=>!ky(),()=>!Sy(),()=>yy]
async function Jy(){if(function(e,t){_y=dy("bountyList"),my=dy("wantedList"),gy=hc("bountyListRefreshTime"),yy=hc("bwNeedsRefresh"),yy||Ty(e,t)&&(yy=!0)}(qc.enableActiveBountyList,qc.enableWantedList),Qy.some(Yb)){my={},my.bounty=[],my.isRefreshed=!0,my.lastUpdate=ga(),by=!1,wy=py("wantedNames"),bc("bwNeedsRefresh",!1)
Vy(await Xb(1))}else!function(e,t){t&&(Sy().isRefreshed=!1,Dy()),e&&(ky().isRefreshed=!1,Ry())}(qc.enableActiveBountyList,qc.enableWantedList)}function Ky(e,t){Sv("activeWantedBounties",e),Zb(t,null),Jy()}function Xy(e){e.target===Ly()&&Ky("getBountyListReset","bountyList"),e.target===Fy()&&Ky("getWantedListReset","wantedList")}function Yy(e,t){return dg({subcmd:"profile",player_username:e,...t&&{_:da()}})}async function Zy(e){const t=await Yy(o(),e),n=t?.username===o(),r=n?{...t,lastUpdate:pa()}:t
return n&&Jg("fsh_selfProfile",r),r}const ew=e=>pa()-qc.allyEnemyOnlineRefreshTime<e?.lastUpdate
async function tw(e){if(e)return Zy(e)
return function(e){return ew(e)?e:Zy()}(await Qg("fsh_selfProfile"))}function nw(e,t){return t?.classList?.contains(e)}function rw(e,t){return nw(t[0],e)}function iw(e,t,n){const{target:r}=n,i=t.find(Zh(e,r))
if(i)return i[1](r)}function ow(e){return Zh(iw,rw,e)}function sw(e){return ru(e,"player_id")}function aw(e,t,n){return Math.floor(Math.max(e-t,0)/2+n)}function lw(e,t,n,r,i){let o=r
500===r&&(o=1e3)
const s=aw(window.screen.availHeight,o,window.screenY),a=aw(document.documentElement.clientWidth,n,window.screenX)
window.open(e,t,`width=${n}, height=${o}, left=${a}, top=${s}${i}`)}function cw(e,t){let n=""
t&&(n=`&blist=${t}`),lw(`${fl}&t=${e}${n}`,"fsQuickBuff",618,1e3,",scrollbars")}function uw(e){let t=e,n=Math.floor(t/60)
t%=60
let r=Math.floor(n/60)
n%=60
const i=Math.floor(r/24)
return r%=24,[i,r,n,t]}function dw(e,t){return 0===e?"":String(e)+t}function fw(e){const t=uw(Math.abs(ga()-e))
return`${dw(t[0]," days, ")+dw(t[1]," hours, ")+dw(t[2]," mins, ")+t[3]} secs`}const pw="enemy-buff-check-on",hw="enemy-buff-check-off",vw="enemy-send-message",gw="enemy-quickbuff",_w="enemy-quick-buff",mw=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function bw(e,t){return t[0](ga()-e)}function yw(e,t){return`<a class="player-name tip-static ${function(e,t){const n=mw.find(Zh(bw,e))
return n?function(e,t){return e?t[1]:t[2]}(t,n):"fshWhite"}(e.last_login,t)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${fw(e.last_login)}</td></tr></tbody></table>" href="${za}${e.id}">${e.username}</a>`}function ww(e){return ga()-e.last_login<1800}function kw(e,t){return`<li class="player"><div class="player-row">${qc.hideBuffSelected?"":`<span class="${pw}"></span>`}${yw(t,e)}</div><div class="guild-minibox-actions">${qc.hideGuildInfoMessage?"":`<span class="${vw} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}${qc.hideGuildInfoBuff?"":`<span class="${gw} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}${function(e){return qc.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${Ja}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return qc.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${Qa}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function Sw(e,t){return e.filter(ww).map(Zh(kw,t)).join("")}const xw=[(e,t)=>e.length+t.length,(e,t)=>{if(!qc.enableAllyOnlineList)return t.length},e=>{if(!qc.enableEnemyOnlineList)return e.length}]
function Ew(e){Sv("allyEnemy",e)}function Cw(e,t,n){return 0===n(e,t)}function Pw(e){const n=Uc(e._allies,[]),r=Uc(e._enemies,[]);(function(e,t){return xw.every(Zh(Cw,e,t))})(n,r)||function(e,n){let r=""
qc.enableAllyOnlineList&&(r+=Sw(e,!0)),qc.enableEnemyOnlineList&&(r+=Sw(n,!1))
const i=t("fshContactList")
Fv("",i),ay(i,r)}(n,r)}function Tw(e){Ew("toggleBuffSelected"),e.classList.toggle(pw),e.classList.toggle(hw)}const $w=[[pw,Tw],[hw,Tw],[vw,function(e){Ew("msgPlayer"),window.openQuickMsgDialog(n(e.parentNode.previousElementSibling.lastElementChild))}],[gw,function(e){Ew("buffPlayer"),cw(sw(e.parentNode.previousElementSibling.lastElementChild.href))}],[_w,function(){Ew("selectedBuff"),cw(Rv(pw,t("fshContactList")).map((e=>sw(e.nextElementSibling.href))).join(","))}]]
function Lw(e){const{target:t}=e
"fshResetEnemy"!==t.id?ow($w)(e):async function(){Ew("resetList"),Pw(await tw(!0))}()}function Iw(e){const t=Iv({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>'
qc.hideBuffSelected||(n+=`<ul class="${_w}">Quick Buff Selected</ul>`),n+="</div></div>",ay(t,n),Mv(rv(),t),pm(t,Lw),Pw(e)}function Ow(e){if(e?.length)return n(e[0].nextElementSibling)}function Rw(e){return e?Number(e.replace(/,/g,"")):0}function Mw(e){return Rw(Ow(Ov(e)))}function Fw(e,t){const n=e?.split(" ").map((e=>e.slice(0,-1)))
var r
if(n)return`<dd>${r=new Date(pa()+1e3*(60*(60*t+Number(n[0]))+Number(n[1]))),`${Zm(r.getHours())}:${Zm(r.getMinutes())} ${r.toLocaleString("en",{weekday:"short"})} ${Zm(r.getDate())}/${Ca[r.getMonth()]}/${r.getFullYear()}`}</dd>`}function Aw(e,t,n){e.target===Xf(t)&&n.close()}var jw=vp("<div><!></div>")
function Nw(e,t){hd(t,!0)
let n,r,i,o=Oh(t,"visible",3,!0),s=Sd(void 0)
Qd((()=>{o()?document.body.classList.contains("noscroll")||(n=!0,r=window.scrollY,i=document.body.style.top,document.body.classList.add("noscroll"),document.body.style.top=`-${r}px`):n&&(document.body.classList.remove("noscroll"),document.body.style.top=i||"",window.scrollTo(0,r))}))
var a=jw()
let l
a.__click=[Aw,s,t],Np(Ad(a),(()=>t.children??_u)),bh(a,(e=>Ed(s,e)),(()=>Xf(s))),Yd((e=>l=zp(a,0,"svelte-5b5wnh",null,l,e)),[()=>({visible:o()})]),mp(e,a),vd()}let Dw
dp(["click"])
var Bw=vp('<div role="dialog" aria-modal="true"><!></div>')
function qw(e,t){hd(t,!0)
let n,r=Oh(t,"modal",15),i=Oh(t,"visible",3,!0)
Qd((()=>{i()?(qc.dialogIsClosed&&(n=qc.dialogIsClosed),qc.dialogIsClosed=()=>!i()):n&&(qc.dialogIsClosed=n)})),Nw(e,{get close(){return t.close},get visible(){return i()},children:(e,n)=>{!function(e,t){hd(t,!0)
let n=Oh(t,"modal",15),r=Oh(t,"visible",3,!0),i=Bd(r),o=Sd(void 0),s=Sd(void 0)
const a=e=>e.tabIndex>=0&&e.offsetWidth>0&&e.offsetHeight>0&&!e.disabled
Qd((()=>{r()?(Ed(o,document?.activeElement,!0),n()&&(Ed(s,Dw,!0),Dw=n())):(Xf(o)?.focus(),n()&&(Dw=Xf(s)))}))
var l=Bw()
let c
up("keydown",$d,(function(e){if(r())if("Escape"!==e.key||Dw!==n()){if("Tab"===e.key){const t=vm("*",n()).filter(a)
let r=t.indexOf(document.activeElement);-1===r&&e.shiftKey&&(r=0),r+=t.length+(e.shiftKey?-1:1),r%=t.length,t[r].focus(),e.preventDefault()}}else t.close()})),Np(Ad(l),(()=>t.children??_u)),bh(l,(e=>n(e)),(()=>n())),Yd((e=>c=zp(l,0,"ui-dialog svelte-61qae0",null,c,e)),[()=>({modalVisible:Xf(i)})]),mp(e,l),vd()}(e,{get close(){return t.close},get visible(){return i()},get modal(){return r()},set modal(e){r(e)},children:(e,n)=>{var r=_p()
Np(jd(r),(()=>t.children??_u)),mp(e,r)},$$slots:{default:!0}})},$$slots:{default:!0}}),vd()}function Hw(e,t,n){t(!1),n.resolve(!0)}var Uw=vp('<div class="svelte-1gd1a38"> </div> <div class="svelte-1gd1a38"><button type="button" class="svelte-1gd1a38">Yes</button> <button type="button" class="svelte-1gd1a38">No</button></div>',1)
function Gw(e,t){hd(t,!0)
let n=Oh(t,"msg",3,"Are you sure?"),r=Oh(t,"visible",15,!0)
function i(){r(!1),t.resolve(!1)}qw(e,{close:i,get visible(){return r()},children:(e,o)=>{var s=Uw(),a=jd(s),l=Ad(a),c=Ad(Nd(a,2))
c.__click=[Hw,r,t],Nd(c,2).__click=i,Yd((()=>yp(l,n()))),mp(e,s)},$$slots:{default:!0}}),vd()}dp(["click"])
const Ww=_d({visible:!0})
let zw=null
function Vw(e){Ww.resolve=e,zw?Ww.visible=!0:zw=wp(Gw,{props:Ww,target:document.body})}function Qw(e){return Ww.msg=e,new Promise(Vw)}async function Jw(e){if("daily-quest-reroll-button"!==e.target.id)return
e.stopPropagation()
await Qw("Are you sure you want to re-roll the Daily Quest?")&&async function(){const e=t("minibox-daily-quest")
if(!e)return
Sv("dailyQuest","reroll")
const n=await B_({cmd:"dailyquests",subcmd:"reroll"})
if(!n)return
const r=t("minibox-daily-quest",n)
r&&e.replaceWith(r)}()}function Kw(e){return Lv("button",{...e,type:"button"})}function Xw(e,t){ay(e,t)}function Yw(){Sv("fsbox","open log"),Uv()}function Zw(e,t){const n=oy({className:`fsh-fsbox ${e}`,textContent:"[ "})
return Mv(n,t),Xw(n," ]"),n}function ek(e){const t=xc(ac,e)
t&&(function(e,t){const r=pg({href:`${Ga}${n(t)}`,textContent:"Ignore"})
pm(r,(()=>Sv("fsbox","ignore link"))),Mv(e,Zw("fs-box-ignore",r))}(e,t),async function(e){const t=await Qg("fsh_fsboxcontent")??"",n=Kh(xc(".message",e).innerHTML)
if(t.includes(n))return
Jg("fsh_fsboxcontent",`<br>${n}${t}`.slice(0,9999))}(e))}function tk(e){e.classList.add("fshRelative"),function(e){const t=Kw({textContent:"Log"})
pm(t,Yw),Mv(e,Zw("fs-box-log",t))}(e),ek(e)}function nk(e,t){const r=t.nextElementSibling.children[0]
8===r.children.length&&(!function(e,t){Mv(e,Iv({className:"tooltip-bottom",dataset:{tooltip:"Server"},textContent:`Server: ${n(t.children[7])}`}))}(e,r),function(e,t){Fv(`Online: ${t.children[3].innerHTML}`,e.children[0])}(e,r),t.parentNode.classList.add("fshInvisible"))}function rk(e,t){t instanceof Node&&(t.textContent=String(e))}let ik=null
function ok(){return ik||(ik=t("quickMessageDialog")),ik}let sk=0
function ak(e){(function(){if(!sk){const e=Ov("validateTips",ok())
1===e.length&&([sk]=e)}return sk})()&&rk(Uc(e,""),sk)}let lk=null
function ck(){return lk||(lk=t("quickMsgDialog_msg"),lk.maxLength=512),lk}let uk=null,dk=0,fk=0
function pk(e){"Enter"!==e.key||e.shiftKey||(Sv("messaging","sendOnEnter"),e.preventDefault(),function(){if(!fk){const e=$(ok()).dialog("option","buttons")
fk=e["Send Message"]}return fk}()())}function hk(){ya(uk)&&(uk=hc("enterForSendMessage")),uk&&!dk&&(Nc(ck(),"keypress",pk),dk=!0)}let vk=null
let gk=0,_k=0,mk=0
function bk(e,t,n){const r=_k.insertRow(e)
let i=r.insertCell(-1)
ay(i,t),i=r.insertCell(-1),ay(i,n)}function yk(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function wk(e,t){bk(e,yk("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const kk=[["del-button",function(e){Sv("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
_k.deleteRow(t),gk.splice(t-2,1),Zb("quickMsg",gk)}],["add-button",function(e){Sv("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){wk(e.parentNode.parentNode.rowIndex,n),t.value="",gk.push(n),Zb("quickMsg",gk)}}],["add-template",function(e){Sv("messaging","insertTemplate"),ck().value+=`${n(e).replace(/\{playername\}/g,vk)}`}]]
function Sk(e){wk(-1,e)}function xk(){hc("enableMessageTemplates")&&!mk&&(pm((_k||(_k=ok().lastElementChild),_k),ow(kk)),(gk||(gk=dy("quickMsg")),gk).forEach(Sk),bk(-1,yk("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),mk=!0)}function Ek(e,n,r){const i=ok()
nw("ui-dialog-content",i)&&(!function(e){vk=e,rk(e,t("quickMsgDialog_targetUsername"))}(e),function(e){const t=ck()
t.value=Uc(e,""),t.disabled=!1}(n),ak(r),xk(),hk(),$(i).dialog("open"))}function Ck(e){return M_({cmd:"composing",...e})}function Pk(){return Ck({subcmd:"view"})}function Tk(){return j_(Pk)}function $k(e,n,r){const i=Rb({className:"notification"}),o=pg({href:r,innerHTML:`<span class="notification-icon"></span><p class="notification-content">${n}</p>`})
pm(o,(()=>{Sv("notification",e)})),Mv(i,o),Mv(t("notifications"),i)}function Lk(){$k("composing","Composing to do",pl)}function Ik(e){return e.time_remaining}function Ok(){Lk(),bc(Bl,!0)}const Rk=52
function Mk(e){const t=e.h.p.find((({k:e})=>e===Rk))?.v
e.r.potions.length!==t?Ok():function(e){const t=Math.min.apply(null,e.map(Ik))
t>0?(bc(Bl,!1),bc(ql,pa()+1e3*t)):Ok()}(e.r.potions)}function Fk(){hc(Bl)?Lk():async function(){const e=hc(ql)
if(e&&pa()<e)return
const t=await Tk()
t?.s&&Mk(t)}()}function Ak(e){return M_({cmd:"guild",...e})}function jk(e){return Ak({subcmd:"groups",...e})}function Nk(e){return jk({subcmd2:"joinall",group:e})}function Dk(e){return j_(Nk,0,e)}function Bk(){return jk({subcmd2:"view"})}function qk(){return j_(Bk)}function Hk(e,t){Xf(t)||(e.preventDefault(),Sv("notification","Join All"),Ed(t,1))}var Uk=vp('<p class="notification-content" style="line-height: 32px;">Joined.</p>'),Gk=vp('<span class="notification-content fshSpinner fix-classic-theme svelte-44dw92"></span>'),Wk=vp('<p class="notification-content"><button type="button" class="svelte-44dw92"> </button></p>'),zk=vp('<a><span id="notification-icon-guild-group" class="notification-icon"></span> <!></a>')
function Vk(e,t){hd(t,!0)
let n=Sd(0),r=Sd(_d(sl)),i=Sd("")
const s=e=>!qc.enableMaxGroupSizeToJoin||e.members.length<qc.maxGroupSizeToJoin,a=e=>e.name===o(),l=e=>!e.members.find(a),c=e=>e.id
async function u(){const e=await qk()
e?.s&&await async function(e){const t=e.r.filter(s).filter(l).map(c)
t.length&&await Dk(t)}(e)}qc.enableMaxGroupSizeToJoin&&(Ed(r,al,!0),Ed(i,` less than size ${qc.maxGroupSizeToJoin}`))
var d=zk(),f=Nd(Ad(d),2),p=e=>{var t=_p()
Tp(jd(t),u,(e=>{mp(e,Gk())}),(e=>{mp(e,Uk())})),mp(e,t)},h=e=>{var t=Wk(),r=Ad(t)
r.__click=[Hk,n]
var o=Ad(r)
Yd((()=>yp(o,`Join all attack groups${Xf(i)??""}.`))),mp(e,t)}
$p(f,(e=>{Xf(n)?e(p):e(h,!1)})),Yd((()=>Yp(d,"href",Xf(r)))),mp(e,d),vd()}function Qk(e){return M_({cmd:"temple",...e})}function Jk(e){return Qk({subcmd:"pray",type:e})}function Kk(){return Qk({subcmd:"view"})}function Xk(e){$(e).qtip("hide")}dp(["click"])
let Yk=Element
const Zk='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',eS=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${Na}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
function tS(e){bc("needToPray",e),bc("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}async function nS(e){const t=e.target.getAttribute("praytype")
t&&(Sv("notification","prayToGods"),Xk(e.target),await function(e){return j_(Jk,0,e)}(t),Yk.outerHTML=Zk,tS(!1))}function rS(){ay(t("notifications"),eS),Yk=t("helperPrayToGods"),av(Yk,"click",nS)}async function iS(){if(!qc.enableTempleAlert)return
const e="temple"===qc.cmd?function(e){if(!e)return{s:!1}
const t=xc("#pCC",e)
return t?{s:!0,r:{pray_index:"You are currently praying at the temple."===Xh(t)?0:-1}}:{s:!1}}(document):await j_(Kk)
if(!e.s)return
const t=-1===e.r.pray_index
t&&rS(),tS(t)}function oS(){var e
!(e=hc("lastTempleCheck"))||pa()>e?iS():hc("needToPray")&&rS()}function sS(){return e={subcmd:"goldupgrades"},M_({cmd:"points",...e})
var e}function aS(e,t,n){if(e?.rows)return Vh(e.rows).filter(((e,r)=>e.children.length===t&&r>n))}function lS(e,t){const n=Number(Xh(e.cells[2]).split(" / ")[0]),r=Xh(e.cells[3])
return{id:t,...!["-","n/a"].includes(r)&&{reset_time:Date.parse(`${r} GMT`)/1e3},current:Hm(n)?0:n}}function cS(){return-1!==window.location.search.indexOf("cmd=points&type=1")}function uS(){cS()||$k("stamina","Upgrade stamina with gold",`${Za}&type=1`)}async function dS(){if(cS()&&function(){const e=hm('#pCC input[name="quantity"]')
e?.length<2||(e[0].value="100",e[1].value="10")}(),!qc.enableUpgradeAlert)return
const e=cS()?function(e){if(!e)return{s:!1}
const t=xc("#pCC > table",e)
return t?{s:!0,r:aS(t,5,0).map(lS)}:{s:!1}}(document):await j_(sS)
wa(e?.r?.[1]?.current)||function(e){10!==e.current?(uS(),bc("needToDoUpgrade",!0)):(bc("needToDoUpgrade",!1),bc("lastUpgradeCheck",1e3*e.reset_time))}(e.r[1])}function fS(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?Mb(t,e.firstChild):Mv(e,t)}(e,t)}function pS(e,t){t.stopPropagation(),Sv("chrome","statbar",e)}function hS(e,n){const r=t(`statbar-${n}`)
if(!r)return
const i=pg({href:e}),o=r.parentNode
Mv(i,r),fS(o,i),pm(i,Zh(pS,n),!0)}function vS(e,t){Rv("player-name",e).forEach(t)}const gS=/Last Activity:<\/td><td>(?<mins>\d+) mins/
function _S(e,t){const n=e.dataset.tipped,r=l(gS,n)
r<2?e.classList.add(t.l1):r<5?e.classList.add(t.l2):e.classList.add(t.l3)}const mS=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function bS(e,t){mS.forEach((n=>{qc[n[0]]&&Vh(hm(n[t],e)).forEach(ym)}))}function yS(e){e?.classList&&e.classList.add("fshInvisible")}function wS(e,n){qc.hideBuffSelected&&(Vh(Ov(`${n}-buff-check-on`,e)).forEach(yS),yS(t(`${n}-quick-buff`)))}function kS(e){_S(e,{l1:"fshGreen",l2:"fshWhite",l3:"fshGrey"})}function SS(e,t,n){vm(`#pCR h${e}`).filter(fm(t)).forEach((e=>{const r=pg({href:`${el}${n}`,textContent:t})
pm(r,(()=>{Sv("widgets",`guild ${n}`)})),e.replaceChild(r,e.firstChild)}))}function xS(e){_S(e,{l1:"fshDodgerBlue",l2:"fshLightSkyBlue",l3:"fshPowderBlue"})}function ES(e){const n=t(e)
n&&(n.classList.add("pCR"),Mv(rv(),n))}function CS(e){const n=t(e)
n&&fS(ov(),n)}function PS(){return M_({cmd:"superelite"})}function TS(e){return Pv(e?.se??{}).flatMap((([t,n])=>Hc(n)?n.map((([n,r])=>[n,t,r,e?.loc[r]])):[[n,t.replaceAll(" ","_"),0,""]]))}const $S=e=>e.join("|"),LS=(e,t)=>e.r.map((e=>[t-e.time,e.creature.name.replace(" (Super Elite)","").replaceAll(" ","_"),e.realm.realm.id,e.realm.realm.name])),IS=(e,t)=>Tm(e.map($S).concat(t.map($S))).map((e=>e.split("|"))).map((([e,t,n,r])=>[Number(e),t,Number(n),r])).sort((([e],[t])=>t-e)),OS=e=>Nm(Tm(e.map((([,e])=>e))).map((t=>[t,e.filter((([,e])=>e===t)).map((([e,,t])=>[e,t])).slice(0,10)]))),RS=e=>Nm(Tm(e.map((([,,e])=>e))).map((t=>[t,e.find((([,,e])=>e===t))[3]]))),MS=e=>({se:OS(e),loc:RS(e)})
const FS=kh()
let AS=!1,jS={},NS=0,DS=!1
const BS=e=>Math.max(0,600-(fa()-(e?.lastUpdate??0)),600-(fa()-NS))
async function qS(){NS=fa()
const e=await j_(PS)
e?.s&&(jS=function(e,t){const n=Number(t.t.split(" ")[1]),r=LS(t,n),i=TS(e),o=IS(r,i)
return{lastUpdate:n,...MS(o)}}(jS,e),Jg("fsh_seLog",jS),FS.set(jS))}function HS(e,t){DS=t,e(DS),DS&&!AS&&async function(){for(AS=!0,jS=await Qg("fsh_seLog"),FS.set(jS);DS;)AS=!0,await tg(1e3*BS(jS)),DS&&await qS(),AS=!1}()}const US=function(){const{subscribe:e,set:t}=kh(0)
return{subscribe:e,set:Zh(HS,t)}}()
const GS=[function(){hc("moveGuildList")&&CS("minibox-guild")},function(){hc("moveOnlineAlliesList")&&CS("minibox-allies")},function(){hc("moveXmasBox")&&ES("minibox-xmas")},function(){hc("moveDailyQuest")&&ES("minibox-daily-quest")},function(){hc("moveFSBox")&&ES("minibox-fsbox")},async function(){if(!qc.enableAllyOnlineList&&!qc.enableEnemyOnlineList||Ob())return
!function(e){e&&nu(3,Iw,[e])}(await tw(!1))},function(){!qc.enableWantedList&&!qc.enableActiveBountyList||Ob()||(qc.enableActiveBountyList&&(ey=iy(),Mv(rv(),ey)),qc.enableWantedList&&(ty=iy(),Mv(rv(),ty)),ny()&&pm(ny(),Xy),ry()&&pm(ry(),Xy),Jy())},function(){if(!qc.enableGuildInfoWidgets)return
const e=t("minibox-guild-members-list")
e&&(bS(e,1),wS(e,"guild"),vS(e,kS),SS(4,"Chat","chat"),SS(3,"Guild","manage"))},function(){if(!qc.enableOnlineAlliesWidgets)return
const e=t("minibox-allies-list")
e&&(bS(e,2),wS(e,"ally"),vS(e,xS))},function(){qc.enableTempleAlert&&"temple"!==qc.cmd&&!Ob()&&oS()},function(){qc.enableUpgradeAlert&&Dm()&&!cS()&&function(){if(hc("needToDoUpgrade"))return void uS()
const e=hc("lastUpgradeCheck");(!e||pa()>e)&&dS()}()},function(){qc.enableComposingAlert&&"composing"!==qc.cmd&&Dm()&&Fk()},function(){rv()&&!Ob()&&Kb()},function(){Ob()||(window.openQuickMsgDialog=Ek)},function(){hc("statBarLinks")&&(hS(Wa,"character"),hS(`${Za+Da}reserve`,"stamina"),hS(dl,"equipment"),hS(Va,"inventory"),hS(Za,"fsp"),hS(`${Na}bank`,"gold"))},function(){if(!hc("staminaCalculator"))return
const e=Ov("stat-stamina-nextGain")
if(0===e.length)return
const n=t("statbar-stamina-tooltip-stamina"),r=(e=>Ow(Ov("stat-name",e)).split(" / "))(n)
2===r.length&&ay(n,function(e,t){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${Fw(Ow(e),Math.floor((Rw(t[1])-Rw(t[0]))/Mw("stat-stamina-gainPerHour")))}`}(e,r))},function(){if(!hc("levelUpCalculator"))return
const e=Ov("stat-xp-nextGain")
0!==e.length&&ay(t("statbar-level-tooltip-general"),`<dt class="stat-xp-nextLevel">Next Level At</dt>${Fw(Ow(e),Math.ceil(Mw("stat-xp-remaining")/Mw("stat-xp-gainPerHour")))}`)},function(){if(!hc("fsboxlog"))return
const e=t("minibox-fsbox")
e&&tk(e)},function(){hc("resizeQuickBuff")&&(window.openWindow=function(e,t,n,r,i){Sv("chrome","interceptQuickBuff"),lw(e,t,n,r,i)})},function(){if(!hc("joinAllLink"))return
const e=t("notification-guild-group")
e&&function(e){Fv("",e),wp(Vk,{target:e})}(e)},function(){if(!hc("addServerNode"))return
const e=t("topbanner-stats"),n=vm("#pCR h3").find(fm("Game Stats"));(function(e,t){return!(e&&nw("topbanner-stats-hidden",e))&&t})(e,n)&&nk(e,n)},function(){if(!hc("addScoutTowerLink"))return
const e=t("minibox-spoilsofwar")
if(!e)return
const n=e.children[1]
if(!n)return
const r=n.children[0]
ay(r,"&nbsp;"),Mv(r,function(){const e=pg({dataset:{tooltip:"View Scout Report"},href:nl,innerHTML:`<img id="fshScoutTower" src="${Sa}structures/27.png">`})
return pm(e,(()=>Sv("chrome","scout tower link"))),e}())},async function(){if(Dm()&&hc(Ul)){Ib(await ib())}},function(){Dm()&&qc.enableSeTracker&&US.set(qc.enableSeTracker)},function(){hc("dailyQuestReRoll")&&ov()&&pm(ov(),Jw,!0)}]
const WS=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function zS(){km()||(WS.forEach(mm),qc.allyEnemyOnlineRefreshTime=1e3*hc("allyEnemyOnlineRefreshTime"),qc.useNewGuildLog&&(Nc(document.body,"click",wm),Nc(document.body,"auxclick",wm)),Sm(GS))}function VS(e){const t=Sc(e)
t?.["new-ui"]&&(hc("gameHelpLink")&&nu(3,_m),qc.huntingMode=hc("huntingMode"),nu(3,um),zS(),hc("hideHelperMenu")||nu(3,R_))}function QS(){const e=function(){const e=t("html")
if(e?.dataset)return e.dataset.hcs}()
e&&VS(e)}function JS(){Dm()&&t("worldPage")&&window.GameData&&Dv(import("./newMap-DxW4i6PG.js"))}const KS={"-":{"-":()=>{Dv(import("./arena-DGXfl4Eb.js").then((function(e){return e.b})))}},dojoin:{"-":()=>{Dv(import("./arenaDoJoin-ChnQWF-C.js"))}},join:{"-":()=>{Dv(import("./arenaJoin-CVKIETo-.js"))}},completed:{"-":()=>{Dv(import("./completedArenas-DNBgEpmz.js"))}},pickmove:{"-":()=>{Dv(import("./storeMoves-CJWgTbC5.js"))}},setup:{"-":()=>{Dv(import("./setupMoves-FnHB3BnT.js"))}}}
var XS={"-":{"-":()=>{Dv(import("./injectAuctionHouse-CBo5eJNK.js"))}},quickcreate:{"-":()=>{Dv(import("./quickCreate-CxIR439j.js"))}}}
var YS={"-":{"-":()=>{Dv(import("./composing-DNmoLraC.js"))}},breakdown:{"-":()=>{Dv(import("./breakdown-BTKixM4N.js"))}},create:{"-":()=>{Dv(import("./composingCreate-ClTBt9Dy.js"))}}}
function ZS(){Dv(import("./bioWidgets-CLjLPQ6F.js"))}function ex(){Dv(import("./injectGuild-DIqFlGvF.js"))}const tx=()=>{Dv(import("./guildAdvisor-DvveqfV3.js"))}
const nx=()=>{Dv(import("./groups-Dcor5ZDq.js"))}
const rx=()=>{Dv(import("./addRemoveTags-DvpDVj8l.js"))}
const ix=()=>{Dv(import("./guildChat-DM8z2GY9.js"))}
var ox={inventory:{report:()=>{Dv(import("./guildReport-DFIgX9u3.js"))},addtags:rx,removetags:rx,storeitems:()=>{Dv(import("./storeitems-B3_WmYpW.js"))}},chat:{"-":ix},dochat:{"-":ix},log:{"-":()=>{Dv(import("./guildLog-DoiyJBVQ.js"))}},groups:{viewstats:()=>{Dv(import("./injectGroupStats-CESnSO5L.js"))},joinallgroupsundersize:nx,joinall:nx,"-":nx},manage:{"-":ex},advisor:{"-":tx,weekly:tx},history:{"-":ZS},view:{"-":ex},scouttower:{"-":()=>{Dv(import("./injectScouttower-PpNxVCDl.js"))}},mailbox:{"-":()=>{Dv(import("./guildMailbox-ByyhCU81.js"))}},ranks:{"-":()=>{Dv(import("./rank-DVbVJDxn.js"))}},conflicts:{rpupgrades:()=>{Dv(import("./injectRPUpgrades-BI6poSUd.js"))}},bank:{"-":()=>{Dv(import("./injectGuildBank-CXXIelJF.js"))}},hall:{"-":()=>{Dv(import("./hall-BYPpsKQF.js"))},post:ZS},"-":{"-":ex},titanrewards:{"-":()=>{Dv(import("./titanrewards-Ke3D5iZW.js"))}}}
function sx(){Dv(import("./viewRecipe-DCrw52J7.js"))}var ax={"-":{"-":function(){Dv(import("./inventing-CGiPAV1i.js"))}},doinvent:{"-":sx},viewrecipe:{"-":sx}}
function lx(){Dv(import("./ufsgAllowBack-ab7MSCky.js"))}var cx={"-":{"-":lx},view:{"-":()=>{Dv(import("./itemsView-BOKlply4.js"))}}}
function ux(){Dv(import("./profile-C0BRtbZB.js").then((function(e){return e.p})))}function dx(){Dv(import("./news-DIx9f6wY.js"))}function fx(){Dv(import("./viewArchive-DPrqWSW7.js"))}var px={fsbox:{"-":()=>{Dv(import("./newsFsbox-BSBsH4qo.js"))}},"-":{"-":dx},shoutbox:{"-":()=>{Dv(import("./newsShoutbox-DuIM7vHX.js"))}},viewupdatearchive:{"-":fx},viewarchive:{"-":fx}}
var hx={news:{"-":dx},viewupdatearchive:{"-":fx},viewarchive:{"-":fx},"-":{"-":()=>{Dv(import("./unknownPage-D50G6Ap9.js"))}}},vx=vp("<svelte-virtual-list-row><!></svelte-virtual-list-row>",2),gx=vp("<svelte-virtual-list-viewport><svelte-virtual-list-contents></svelte-virtual-list-contents></svelte-virtual-list-viewport>",2)
function _x(e,t){hd(t,!0)
let n,r,i=Oh(t,"height",3,"100%"),o=Oh(t,"itemHeight",3,void 0),s=Oh(t,"start",15,0),a=Oh(t,"end",15,0),l=[],c=Sd(void 0),u=Sd(void 0),d=Sd(0),f=Bd((()=>t.items.slice(s(),a()).map(((e,t)=>({index:t+s(),data:e}))))),p=Sd(void 0),h=Sd(0),v=Sd(0),g=0
async function _(e,t){const{scrollTop:n}=Xf(c)
t={left:0,top:n+(e-s())*(o()||r),behavior:"smooth",...t},Xf(c).scrollTo(t)}Rh((()=>{n=Xf(u).getElementsByTagName("svelte-virtual-list-row"),Ed(p,!0)})),Qd((()=>{Xf(p)&&async function(e,t,i){if(g)return
g=!0,e.length<s()&&await _(e.length-1,{behavior:"auto"})
const{scrollTop:o}=Xf(c)
await Kf()
let u=Xf(h)-o,d=s()
for(;u<t&&d<e.length;){let e=n[d-s()]
e||(a(d+1),await Kf(),e=n[d-s()]),e&&(u+=l[d]=i||e.offsetHeight),d+=1}a(d)
const f=e.length-a()
r=(Xf(h)+u)/a(),Ed(v,f*r),l.length=e.length,g=!1}(t.items,Xf(d),o())}))
var m=gx()
zp(m,0,"svelte-13thbeo")
var b=Ad(m)
zp(b,0,"svelte-13thbeo"),Op(b,21,(()=>Xf(f)),(e=>e.index),((e,n)=>{var r=vx()
zp(r,0,"svelte-13thbeo")
var i=Ad(r),o=e=>{var r=_p()
Np(jd(r),(()=>t.children),(()=>({item:Xf(n).data}))),mp(e,r)},s=e=>{mp(e,gp("Missing template"))}
$p(i,(e=>{t.children?e(o):e(s,!1)})),mp(e,r)})),bh(b,(e=>Ed(u,e)),(()=>Xf(u))),bh(m,(e=>Ed(c,e)),(()=>Xf(c))),Yd((()=>{Qp(m,`height: ${i()??""};`),Qp(b,`padding-top: ${Xf(h)??""}px; padding-bottom: ${Xf(v)??""}px;`)})),up("scroll",m,(async function(){const{scrollTop:e}=Xf(c)
for(let e=0;e<n.length;e+=1)l[s()+e]=o()||n[e].offsetHeight
let i=0,u=0
for(;i<t.items.length;){const t=l[i]||r
if(u+t>e){s(i),Ed(h,u,!0)
break}u+=t,i+=1}for(;i<t.items.length&&(u+=l[i]||r,i+=1,!(u>e+Xf(d))););a(i)
const f=t.items.length-a()
for(r=u/a();i<t.items.length;)l[i++]=r
Ed(v,f*r)})),function(e,t,n){var r=_h.observe(e,(()=>n(e[t])))
Kd((()=>(Yf((()=>n(e[t]))),r)))}(m,"offsetHeight",(e=>Ed(d,e))),mp(e,m),vd()}const mx={}
let bx=-1
function yx(e,t){nu(3,t.func,[e])}function wx(e,t){if(mx[e])return mx[e].forEach(Zh(yx,t)),!0}function kx(e,t){mx[e]||(mx[e]=[]),bx+=1
const n=bx.toString()
return mx[e].push({token:n,func:t}),n}function Sx(e,t){return mx[e]?mx[e][0].token:kx(e,t)}async function xx(e=-1,t=1,n=[]){const r=await function(e,t,n){return Ak({subcmd:"log",log_id:e,latest:t,limit:n})}(e,t,1e3)
if(!r?.s)return void wx("guildLog-progress","Server Error.")
wx("guildLog-progress")
const i=n.concat(r.r.logs)
return 1e3!==r.r.logs.length?i:xx(r.r.logs[0].id,0,i)}var Ex=vp('<button class="modal-close svelte-jhpi06" type="button">×</button>')
dp(["click"])
var Cx=vp('<div class="modal-title svelte-mgjzgm"><!> <!></div> <div class="modal-content svelte-mgjzgm"><!></div>',1)
function Px(e,t){hd(t,!0)
let n=Oh(t,"visible",3,!0),r=Sd(void 0),i=Sd(void 0)
Rh((()=>{yv(Xf(i),Xf(r))})),qw(e,{get close(){return t.close},get visible(){return n()},get modal(){return Xf(r)},set modal(e){Ed(r,e,!0)},children:(e,n)=>{var r=Cx(),o=jd(r),s=Ad(o)
Np(s,(()=>t.title??_u)),function(e,t){var n=Ex()
n.__click=function(...e){t.close?.apply(this,e)},mp(e,n)}(Nd(s,2),{get close(){return t.close}}),bh(o,(e=>Ed(i,e)),(()=>Xf(i))),Np(Ad(Nd(o,2)),(()=>t.children??_u)),mp(e,r)},$$slots:{default:!0}}),vd()}var Tx=vp('<button type="button" class="svelte-mmp9jk"><!></button>')
function $x(e,t){let n=Oh(t,"disabled",3,0)
var r=Tx()
r.__click=function(...e){t.onclick?.apply(this,e)},Np(Ad(r),(()=>t.children??_u)),Yd((()=>r.disabled=n())),mp(e,r)}dp(["click"])
var Lx=vp('<span class="svelte-1amp3b0">[<!>]</span>')
function Ix(e,t){var n=Lx()
$x(Nd(Ad(n)),{get onclick(){return t.onclick},children:(e,n)=>{var r=_p()
Np(jd(r),(()=>t.children??_u)),mp(e,r)},$$slots:{default:!0}}),mp(e,n)}function Ox(e,t,n){t(),n.cbChange()}var Rx=vp('<div class="filter-header svelte-1tfrwgn"><div class="filters svelte-1tfrwgn"><div class="front svelte-1tfrwgn"><span>Filters:</span></div> <div><label>Potions: <input type="checkbox"></label></div> <div><label>Store/Recalls: <input type="checkbox"></label></div> <div><label>Relics: <input type="checkbox"></label></div> <div><label>Mercenaries: <input type="checkbox"></label></div> <div><label>Group Combats: <input type="checkbox"></label></div> <div><!></div> <div><label>Donations: <input type="checkbox"></label></div> <div><label>Rankings: <input type="checkbox"></label></div> <div><label>GvGs: <input type="checkbox"></label></div> <div><label>Tag/UnTags: <input type="checkbox"></label></div> <div><label>Titans: <input type="checkbox"></label></div> <div><label>Other: <input type="checkbox"></label></div></div> <div class="button-row svelte-1tfrwgn"><div></div> <div class="buttons svelte-1tfrwgn"><div><!></div> <div><!></div> <div><!></div></div> <div class="search-box svelte-1tfrwgn"><label>Search: <span class="search-wrapper svelte-1tfrwgn"><input type="text" class="svelte-1tfrwgn"> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></span></label></div></div></div>')
function Mx(e){return rb(new Date(1e3*e))}function Fx(e){return M_({cmd:"combat",subcmd:"view",combat_id:e})}dp(["change"])
const Ax="fsh_pvpCombat"
let jx=null,Nx=0
const Dx=e=>([t,n])=>"lastCheck"===t||n?.logTime>e
async function Bx(){const e=await Qg(Ax)
return Nx=e?(e?.lastCheck??0)<ma()?function(e){const t={...Nm(Pv(e).filter(Dx(ba()))),lastCheck:ga()}
return Jg(Ax,t),t}(e):e:{lastCheck:ga()},Nx}async function qx(e,t){const n=await(r=t,j_(Fx,0,r))
var r
if(n?.s)return Nx[t]={...n,logTime:e},Jg(Ax,Nx),n}async function Hx(e,t){jx||(jx=Bx())
const n=await jx
return n[t]?.logTime?n[t]:qx(e,t)}function Ux(){return e={subcmd2:"view"},Ak({subcmd:"recruit",...e})
var e}var Gx=vp('<i class="fas fa-envelope" aria-hidden="true"></i>'),Wx=vp('<a class="svelte-6j0lyo"> </a>'),zx=vp('[ <a class="svelte-6j0lyo"><img class="svelte-6j0lyo"> </a> ]',1),Vx=vp("<!> <!>",1),Qx=vp('<span class="action-buttons svelte-6j0lyo">[ <!> | <!> ]</span>'),Jx=vp('<div class="rel svelte-6j0lyo"> </div>'),Kx=vp('<div class="rel svelte-6j0lyo"><span class="fshSpinner recruit-spinner svelte-6j0lyo"></span></div>'),Xx=vp('<!> <span class="action-buttons svelte-6j0lyo">[ <!> | <!> | <!> | <!> ]</span>',1),Yx=vp('<span class="action-buttons svelte-6j0lyo">[ <!> ]</span>'),Zx=vp('<div><a class="svelte-6j0lyo"> </a>\'s group looted the item \'<span class="fshGreen"> </span>\'</div>'),eE=vp("<!> <!> <!>",1),tE=vp("<div><div><!></div> <div><!></div> <div><!> <!></div></div>")
function nE(e,t){hd(t,!0)
let n=Oh(t,"groupCombatItems",3,null),r=Oh(t,"hideNonPlayerGuildLogMessages",3,null),i=Oh(t,"logEntry",3,null),o=Sd(_d(Promise.resolve())),s=Sd("waiting")
function a(e){Sv("Guild Log",e)}const l=e=>e
function c(e){const t=e.msg.attachments?.filter((e=>0===e.type))
return t?.length&&!t.filter((({data:{id:e}})=>e===yg())).length}async function u(e,t){a(t),Ed(o,Ux(),!0)
const n=await Xf(o)
if(n?.s&&Hc(n?.r)){const r=n.r.find((({player:{id:t}})=>t===e.id))
r?.id?V_(`${el}recruit&subcmd2=${t}&id=${r.id}`):Ed(s,"gone")}else Ed(s,"error")}var d=tE()
let f
var p=Ad(d)
let h
var v=Ad(p),g=e=>{mp(e,Gx())}
$p(v,(e=>{i().time&&e(g)}))
var _=Nd(p,2)
let m
var b=Ad(_),y=e=>{var t=gp()
Yd((e=>yp(t,e)),[()=>Mx(i().time)]),mp(e,t)}
$p(b,(e=>{i().time&&e(y)}))
var w=Nd(_,2)
let k
var S=Ad(w)
Op(S,17,(()=>i().msg.text.split(/<link=a(\d)><\/link>/).filter(l)),Ip,((e,t)=>{var n=_p(),r=jd(n),o=e=>{var n=Vx(),r=jd(n),o=e=>{var n=Wx(),r=Ad(n)
Yd((()=>{Yp(n,"href",`${za??""}${i().msg.attachments[Xf(t)].data.id??""}`),yp(r,i().msg.attachments[Xf(t)].data.name)})),mp(e,n)}
$p(r,(e=>{0===i().msg.attachments[Xf(t)].type&&e(o)}))
var s=Nd(r,2),a=e=>{var n=zx(),r=Nd(jd(n)),o=Ad(r),s=Nd(o,1,!0)
Yd((()=>{Yp(r,"href",`${ol??""}${i().msg.attachments[Xf(t)].data.id??""}`),Yp(o,"src",`${Sa??""}guilds/${i().msg.attachments[Xf(t)].data.id??""}_mini.png`),Yp(o,"alt",i().msg.attachments[Xf(t)].data.name),yp(s,i().msg.attachments[Xf(t)].data.name)})),mp(e,n)}
$p(s,(e=>{1===i().msg.attachments[Xf(t)].type&&e(a)})),mp(e,n)},s=e=>{var n=gp()
Yd((()=>yp(n,Xf(t)))),mp(e,n)}
$p(r,(e=>{1!==Xf(t).length||Hm(Number(Xf(t)))?e(s,!1):e(o)})),mp(e,n)}))
var x=Nd(S,2),E=e=>{var t=eE(),r=jd(t)
Op(r,17,(()=>i().msg.attachments.filter((({type:e})=>0===e))),Ip,((e,t)=>{let n=()=>Xf(t).data
var r=Xx(),l=jd(r),c=e=>{var t=_p()
Tp(jd(t),(()=>Xf(o)),(e=>{mp(e,Kx())}),(e=>{var t=_p(),r=jd(t),i=e=>{var t=Qx(),r=Nd(Ad(t))
$x(r,{onclick:()=>u(n(),"acceptjoin"),children:(e,t)=>{mp(e,gp("Accept"))},$$slots:{default:!0}}),$x(Nd(r,2),{onclick:()=>u(n(),"denyjoin"),children:(e,t)=>{mp(e,gp("Deny"))},$$slots:{default:!0}}),mp(e,t)},o=e=>{var t=Jx(),n=Ad(t)
Yd((()=>yp(n,Xf(s)))),mp(e,t)}
$p(r,(e=>{"waiting"===Xf(s)?e(i):e(o,!1)})),mp(e,t)})),mp(e,t)}
$p(l,(e=>{21===i().type&&e(c)}))
var d=Nd(l,2),f=Nd(Ad(d))
$x(f,{onclick:()=>function(e){a("reply"),window.openQuickMsgDialog(e.name)}(n()),children:(e,t)=>{mp(e,gp("Reply"))},$$slots:{default:!0}})
var p=Nd(f,2)
$x(p,{onclick:()=>function(e){a("buff"),cw(e.id)}(n()),children:(e,t)=>{mp(e,gp("Buff"))},$$slots:{default:!0}})
var h=Nd(p,2)
$x(h,{onclick:()=>function(e){a("send"),V_(`${Qa}${e.name}`)}(n()),children:(e,t)=>{mp(e,gp("Send"))},$$slots:{default:!0}}),$x(Nd(h,2),{onclick:()=>function(e){a("trade"),V_(`${Ja}${e.name}`)}(n()),children:(e,t)=>{mp(e,gp("Trade"))},$$slots:{default:!0}}),mp(e,r)}))
var l=Nd(r,2)
Op(l,17,(()=>i().msg.attachments.filter((({type:e})=>11===e))),Ip,((e,t)=>{var n=Yx()
$x(Nd(Ad(n)),{onclick:()=>function(e){a("combat"),V_(`${Na}combat&subcmd=view&combat_id=${e}`)}(Xf(t).data),children:(e,t)=>{mp(e,gp("View Combat"))},$$slots:{default:!0}}),mp(e,n)}))
var c=Nd(l,2),d=e=>{var t=_p()
Tp(jd(t),(()=>Hx(i().time,i().msg.attachments[0].data)),null,((e,t)=>{var n=_p(),r=jd(n),i=e=>{var n=Zx(),r=Ad(n),i=Ad(r),o=Ad(Nd(r,2))
Yd((()=>{Yp(r,"href",`${za??""}${Xf(t).r.combat.attacker.group.players[0].id??""}`),yp(i,Xf(t).r.combat.attacker.group.players[0].name),yp(o,Xf(t)?.r?.combat?.items?.[0]?.n)})),mp(e,n)}
$p(r,(e=>{Xf(t)?.r?.combat?.items?.[0]?.n&&e(i)})),mp(e,n)})),mp(e,t)}
$p(c,(e=>{17===i().type&&n()&&i().msg.text.includes("victorious")&&e(d)})),mp(e,t)}
$p(x,(e=>{i().msg?.attachments?.length&&e(E)})),Yd(((e,t,n,r)=>{f=zp(d,0,"row-container svelte-6j0lyo",null,f,e),h=zp(p,0,"svelte-6j0lyo",null,h,t),m=zp(_,0,"svelte-6j0lyo",null,m,n),k=zp(w,0,"svelte-6j0lyo",null,k,r)}),[()=>({"not-self":r()&&c(i()),separator:i().index}),()=>({old:i().old,new:i().new}),()=>({old:i().old,new:i().new}),()=>({old:i().old,new:i().new})]),mp(e,d),vd()}const rE=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to","has added tags to","has removed some tags from"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited [,0-9]+ gold into the guild bank/,/deposited [,0-9]+ Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled","has been stripped of their rank by",/has revoked .+'s invite to the guild/,"has been rejected from joining the guild"],[/resulted in .* with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with","has initiated a conflict with your guild","is participating in the conflict against"],["Titan Reward item","from your guild's contribution to the defeat of the titan","7 day cooldown has been activated on your guild for this titan"]]
function iE(e,t){return gc(t)?e.includes(t):t.test(e)}function oE(e,t){return t.some(Zh(iE,e))}function sE(e){const t=rE.findIndex(Zh(oE,e))
return-1===t?0:t}var aE=vp('<span class="white svelte-1u02a2w">(Guild Log messages not involving self are dimmed!)</span>'),lE=vp('<div class="vs svelte-1u02a2w"><!></div>'),cE=vp(" <br>",1),uE=vp('<div class="content svelte-1u02a2w"><!> <div class="row-container svelte-1u02a2w"><div class="innerColumnHeader svelte-1u02a2w">&nbsp;</div> <div class="innerColumnHeader svelte-1u02a2w">Date</div> <div class="innerColumnHeader svelte-1u02a2w">Message <!></div></div> <!></div>')
function dE(e,t){hd(t,!0)
let n=Oh(t,"visible",15,!0),r=Sd(_d(Array(11).fill(!0))),i=Sd(null),o=Sd(null),s=Sd(_d([])),a=Sd(_d(Promise.resolve())),l=Sd(_d([])),c=Sd("")
const u=Bd((()=>Xf(s).filter((({fshType:e})=>Xf(r)[e])).filter((({searchable:e})=>""===Xf(c)||e.includes(Xf(c).toLowerCase()))).map(g))),d=Bd((()=>Xf(u).length?Xf(u):[{index:0,msg:{text:""}}]))
let f=0,p=null,h=null,v=null
const g=(e,t)=>({...e,index:t}),_=({msg:e})=>e.text.replace(/<link=a(\d)><\/link>/g,((t,n)=>e.attachments[n].data.name)),m=e=>({...e,fshType:sE(e.msg.text),new:p&&e.time>h,old:p&&(v-e.time)/60>20&&e.time<=h,searchable:_(e).toLowerCase()}),b=(e,t)=>t.time-e.time
function y(e){Sv("Guild Log",e)}function w(){y("cbChange")}function k(){y("selectAll")}function S(){y("selectNone")}function x(){y("oldGuildLog"),V_(tl)}function E(){y("clearSearch"),Ed(c,"")}function C(e){Ed(l,Xf(l).concat(e),!0)}function P(e){e?C(e):(f+=1,C(`chunk ${f}`))}async function T(){Ed(l,["Loading..."],!0),Ed(s,[],!0),v=(new Date).setUTCSeconds(0,0)/1e3,h=hc("lastModalGuildLogCheck")??v,bc("lastModalGuildLogCheck",v),p=hc("enableLogColoring"),Ed(i,hc("groupCombatItems"),!0),Ed(o,hc("hideNonPlayerGuildLogMessages"),!0),f=0,Sx("guildLog-progress",P)
const e=await j_(xx)
e&&Ed(s,e.toSorted(b).map(m),!0)}function $(){Ed(a,T(),!0)}Qd((()=>{n()&&$()}))
{const t=e=>{mp(e,gp("Guild Log"))}
Px(e,{close:function(){y("close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=uE(),s=Ad(n)
!function(e,t){hd(t,!0)
let n=Oh(t,"checks",31,(()=>_d(Array(11).fill(!0)))),r=Oh(t,"searchValue",15,"")
function i(){Jg("fsh_LogChecks",cd(n()))}function o(e){n(n().map((()=>e))),i()}!async function(){n(await Qg("fsh_LogChecks")??Array(11).fill(!0))}()
var s=Rx(),a=Ad(s),l=Nd(Ad(a),2),c=Ad(l),u=Nd(Ad(c))
u.__change=[Ox,i,t],u.value=null==(u.__value="1")?"":"1"
var d=Nd(l,2),f=Ad(d),p=Nd(Ad(f))
p.__change=[Ox,i,t],p.value=null==(p.__value="2")?"":"2"
var h=Nd(d,2),v=Ad(h),g=Nd(Ad(v))
g.__change=[Ox,i,t],g.value=null==(g.__value="4")?"":"4"
var _=Nd(h,2),m=Ad(_),b=Nd(Ad(m))
b.__change=[Ox,i,t],b.value=null==(b.__value="5")?"":"5"
var y=Nd(_,2),w=Ad(y),k=Nd(Ad(w))
k.__change=[Ox,i,t],k.value=null==(k.__value="6")?"":"6"
var S=Nd(y,2)
$x(Ad(S),{get onclick(){return t.oldGuildLog},children:(e,t)=>{mp(e,gp("Old Guild Log"))},$$slots:{default:!0}})
var x=Nd(S,2),E=Ad(x),C=Nd(Ad(E))
C.__change=[Ox,i,t],C.value=null==(C.__value="7")?"":"7"
var P=Nd(x,2),T=Ad(P),$=Nd(Ad(T))
$.__change=[Ox,i,t],$.value=null==($.__value="8")?"":"8"
var L=Nd(P,2),I=Ad(L),O=Nd(Ad(I))
O.__change=[Ox,i,t],O.value=null==(O.__value="9")?"":"9"
var R=Nd(L,2),M=Ad(R),F=Nd(Ad(M))
F.__change=[Ox,i,t],F.value=null==(F.__value="3")?"":"3"
var A=Nd(R,2),j=Ad(A),N=Nd(Ad(j))
N.__change=[Ox,i,t],N.value=null==(N.__value="10")?"":"10"
var D=Ad(Nd(A,2)),B=Nd(Ad(D))
B.__change=[Ox,i,t],B.value=null==(B.__value="0")?"":"0"
var q=Nd(a,2),H=Nd(Ad(q),2),U=Ad(H)
Ix(Ad(U),{onclick:function(){o(!0),t.selectAll()},children:(e,t)=>{mp(e,gp("Select All"))}})
var G=Nd(U,2)
Ix(Ad(G),{onclick:function(){o(!1),t.selectNone()},children:(e,t)=>{mp(e,gp("Select None"))}}),Ix(Ad(Nd(G,2)),{get onclick(){return t.refresh},children:(e,t)=>{mp(e,gp("Refresh"))}})
var W=Ad(Nd(H,2)),z=Nd(Ad(W)),V=Ad(z),Q=Nd(V,2)
const J=Bd((()=>!r()))
Lp(Q,(()=>({"--button-deco":"none"}))),$x(Q.lastChild,{get disabled(){return Xf(J)},get onclick(){return t.clearSearch},children:(e,t)=>{mp(e,gp("×"))},$$slots:{default:!0}}),uh(u,(()=>n()[1]),(e=>n(n()[1]=e,!0))),uh(p,(()=>n()[2]),(e=>n(n()[2]=e,!0))),uh(g,(()=>n()[4]),(e=>n(n()[4]=e,!0))),uh(b,(()=>n()[5]),(e=>n(n()[5]=e,!0))),uh(k,(()=>n()[6]),(e=>n(n()[6]=e,!0))),uh(C,(()=>n()[7]),(e=>n(n()[7]=e,!0))),uh($,(()=>n()[8]),(e=>n(n()[8]=e,!0))),uh(O,(()=>n()[9]),(e=>n(n()[9]=e,!0))),uh(F,(()=>n()[3]),(e=>n(n()[3]=e,!0))),uh(N,(()=>n()[10]),(e=>n(n()[10]=e,!0))),uh(B,(()=>n()[0]),(e=>n(n()[0]=e,!0))),ch(V,r),mp(e,s),vd()}(s,{cbChange:w,clearSearch:E,oldGuildLog:x,refresh:$,selectAll:k,selectNone:S,get checks(){return Xf(r)},set checks(e){Ed(r,e,!0)},get searchValue(){return Xf(c)},set searchValue(e){Ed(c,e,!0)}})
var u=Nd(s,2),f=Nd(Ad(u),4),p=Nd(Ad(f)),h=e=>{mp(e,aE())}
$p(p,(e=>{Xf(o)&&e(h)})),Tp(Nd(u,2),(()=>Xf(a)),(e=>{var t=_p()
Op(jd(t),17,(()=>Xf(l)),Ip,((e,t)=>{var n=cE(),r=jd(n)
Yd((()=>yp(r,`${Xf(t)??""} `))),mp(e,n)})),mp(e,t)}),(e=>{var t=lE()
{const e=(e,t)=>{nE(e,{get groupCombatItems(){return Xf(i)},get hideNonPlayerGuildLogMessages(){return Xf(o)},get logEntry(){return t?.().item}})}
_x(Ad(t),{get items(){return Xf(d)},children:e,$$slots:{default:!0}})}mp(e,t)}),((e,t)=>{var n=gp()
Yd((()=>yp(n,Xf(t)))),mp(e,n)})),mp(e,n)},$$slots:{title:!0,default:!0}})}vd()}const fE=_d({visible:!0})
let pE=0
var hE=Object.freeze({__proto__:null,default:function(){pE?fE.visible=!0:pE=wp(dE,{props:fE,target:document.body})}})
function vE(){return Ak({subcmd:"fetchinv"})}function gE(){return j_(vE)}function _E(e){return Ak({subcmd:"inventory",...e})}function mE(){return _E({subcmd2:"report"})}function bE(){return j_(mE)}function yE(e,t,[n,r]){kc(r)&&null!==r?e[n]=t(r.constructor(),r):e[n]=r}function wE(e,t){return kc(t)&&Pv(t).forEach(Zh(yE,e,wE)),e}function kE(e){return e?.constructor&&wE(e.constructor(),e)}const SE=e=>Math.max(Math.min(e,100),0),xE=e=>`000000${e.toString(16)}`.slice(-6)
var EE=(e,t,n,r)=>{t("backpack"),n(),r()},CE=(e,t,n,r)=>{t("guildstore"),n(),r()},PE=(e,t,n)=>{t("inventory"),n()},TE=(e,t)=>{Xf(t)||Ed(t,!0)},$E=(e,t,n)=>{t("mapping"),n()},LE=(e,t)=>{Xf(t)||Ed(t,!0)},IE=(e,t,n)=>{t("thresholds"),n()},OE=(e,t)=>{Xf(t)||Ed(t,!0)},RE=vp('<div class="svelte-d6ps8u"> </div> <div class="svelte-d6ps8u"> </div>',1),ME=vp('<div class="inventory svelte-d6ps8u"><div class="inventory-grid-container svelte-d6ps8u"></div></div>'),FE=(e,t,n)=>{t("mapped"),n()},AE=vp("<option> </option>"),jE=vp("<option> </option>"),NE=(e,t,n)=>{t("ignore"),n()},DE=e=>e.target.blur(),BE=vp('<div class="svelte-d6ps8u"> </div> <div class="svelte-d6ps8u"><select class="svelte-d6ps8u"><!></select></div> <div class="svelte-d6ps8u"><input title="Ignore" type="checkbox" class="svelte-d6ps8u"></div>',1),qE=(e,t,n)=>{t("ignore-all"),n()},HE=(e,t,n)=>{t("reset"),n()},UE=vp('<div class="mapping svelte-d6ps8u"><div class="mapping-grid-container svelte-d6ps8u"><!> <div class="svelte-d6ps8u"></div> <div class="svelte-d6ps8u"><button class="custombutton svelte-d6ps8u" type="button">Ignore All</button> <button class="custombutton svelte-d6ps8u" type="button">Reset</button></div></div></div>'),GE=(e,t,n)=>{t("minpoint"),n()},WE=(e,t,n)=>{t("maxpoint"),n()},zE=vp('<div class="thresholds svelte-d6ps8u">Min: <input max="999" min="0" type="number" class="svelte-d6ps8u"> Max: <input max="999" min="0" type="number" class="svelte-d6ps8u"></div>'),VE=vp('<div class="filters svelte-d6ps8u"><label class="svelte-d6ps8u"><input type="checkbox"> Member Backpacks</label> <label class="svelte-d6ps8u"><input type="checkbox"> Guild Store</label></div> <div class="pot-report svelte-d6ps8u"><input class="tab-ctrl svelte-d6ps8u" id="pr-inv" type="checkbox"> <label for="pr-inv" class="svelte-d6ps8u">Composed Potion Inventory</label> <input class="tab-ctrl svelte-d6ps8u" id="pr-map" type="checkbox"> <label for="pr-map" class="svelte-d6ps8u">Mapping</label> <input class="tab-ctrl svelte-d6ps8u" id="pr-levels" type="checkbox"> <label for="pr-levels" class="svelte-d6ps8u">Thresholds</label> <div class="panels svelte-d6ps8u"><!> <!> <!></div></div>',1),QE=vp('<p style="color: red"> </p>'),JE=vp('<div class="main svelte-d6ps8u"><!></div>')
function KE(e,t){hd(t,!0)
const n="fsh_potReport",r={inventory:!1,mapping:!1,thresholds:!1,potMap:[],minpoint:20,maxpoint:30,backpack:!0,guildstore:!0}
let i=Oh(t,"visible",15,!0),o=Sd(null),s=Sd(!1),a=Sd(!1),l=Sd(!1),c=Sd(_d([])),u=[],d=Sd(_d([]))
const f=({t:e})=>15===e,p=e=>function(e,t,n){const r=SE((e-t)/(n-t)*100)
let i=255,o=255
return r<50?o=Math.round(5.1*r):i=Math.round(510-5.1*r),`#${xE(65536*i+256*o+0)}`}(e,Xf(o).minpoint,Xf(o).maxpoint),h=({ignore:e})=>!e,v=e=>({name:t})=>t===e,g=(e,t)=>X_(e.n,t.n),_=({r:e})=>e,m=e=>Sv("pot-report",e),b=({player:e,n:t})=>({loc:e?1:2,n:t}),y=()=>Jg(n,cd(Xf(o))),w=e=>({mapped:t})=>({name:t,count:e.filter((({mapped:e})=>e===t)).length}),k=e=>u.filter((e=>({n:t})=>e.some(v(t)))(e)).filter((({loc:e})=>Xf(o).backpack||1!==e)).filter((({loc:e})=>Xf(o).guildstore||2!==e)).map((e=>({loc:t,n:n})=>({loc:t,mapped:e.find(v(n)).mapped,n:n}))(e))
function S(){y(),Ed(c,function(){const e=Xf(o).potMap.filter(h),t=k(e)
return Tm(e,"mapped").map(w(t)).sort(((e,t)=>X_(e.name,t.name)))}(),!0),Ed(d,Xf(o).potMap.map((e=>({...e,waiting:!0}))),!0)}function x(){Xf(o).potMap=Xf(d).map((({ignore:e,mapped:t,name:n})=>({ignore:e,mapped:t,name:n}))),S()}function E(){Xf(o).potMap=Xf(o).potMap.map((e=>({...e,ignore:!0}))),S()}function C(){Xf(o).potMap=Xf(o).potMap.map((e=>({...e,mapped:e.name,ignore:!1}))),S()}async function P(){!async function(){Ed(o,await Qg(n)||kE(r),!0),Ed(s,Xf(o).inventory,!0),Ed(a,Xf(o).mapping,!0),Ed(l,Xf(o).thresholds,!0),Xf(o).backpack=Xf(o).backpack??r.backpack,Xf(o).guildstore=Xf(o).guildstore??r.guildstore}()
const e=await Ym([gE(),bE()])
if(!Hc(e[0]?.r)||!Hc(e[1]?.r))throw new Error("Server Error")
u=(e=>e.flatMap(_).filter(f).map(b).sort(g))(e),Xf(o).potMap=Tm(u,"n").map((({n:e})=>({name:e,mapped:Xf(o)?.potMap?.find(v(e))?.mapped||e,ignore:Xf(o)?.potMap?.find(v(e))?.ignore??!1}))),S()}{const t=e=>{mp(e,gp("Pot Report"))}
Px(e,{close:function(){m("close"),i(!1)},get visible(){return i()},title:t,children:(e,t)=>{var n=JE()
Tp(Ad(n),P,(e=>{mp(e,gp("Loading..."))}),(e=>{var t=VE(),n=jd(t),r=Ad(n),i=Ad(r)
i.__change=[EE,m,y,S]
var u=Ad(Nd(r,2))
u.__change=[CE,m,y,S]
var f=Ad(Nd(n,2))
f.__change=[PE,m,y],f.__click=[TE,s]
var h=Nd(f,4)
h.__change=[$E,m,y],h.__click=[LE,a]
var v=Nd(h,4)
v.__change=[IE,m,y],v.__click=[OE,l]
var g=Ad(Nd(v,4)),_=e=>{var t=ME()
Op(Ad(t),21,(()=>Xf(c)),Ip,((e,t)=>{let n=()=>Xf(t).count
var r=RE(),i=jd(r),o=Ad(i),s=Nd(i,2)
let a
var l=Ad(s)
Yd((e=>{yp(o,Xf(t).name),a=Qp(s,"",a,{"background-color":e}),yp(l,n())}),[()=>p(n())]),mp(e,r)})),mp(e,t)}
$p(g,(e=>{Xf(s)&&e(_)}))
var b=Nd(g,2),w=e=>{var t=UE(),n=Ad(t),r=Ad(n)
Op(r,17,(()=>Xf(d)),Ip,((e,t,n)=>{let r=()=>Xf(t).name,i=()=>Xf(t).mapped
var o=BE(),s=jd(o),a=Ad(s),l=Nd(s,2),c=Ad(l)
c.__change=[FE,m,x],c.__mousedown=()=>{Xf(d)[n].waiting=!1}
var u=Ad(c),f=e=>{var t=AE(),n={},r=Ad(t)
Yd((()=>{n!==(n=i())&&(t.value=null==(t.__value=i())?"":i()),yp(r,i())})),mp(e,t)},p=e=>{var t=_p()
Op(jd(t),17,(()=>Xf(d)),Ip,((e,t)=>{let n=()=>Xf(t).name
var r=jE(),o={},s=Ad(r)
Yd((()=>{var e
e=r,i()===n()?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected"),o!==(o=n())&&(r.value=null==(r.__value=n())?"":n()),yp(s,n())})),mp(e,r)})),mp(e,t)}
$p(u,(e=>{Xf(t).waiting?e(f):e(p,!1)}))
var h=Ad(Nd(l,2))
h.__change=[NE,m,x],h.__click=[DE],Yd((()=>{yp(a,r()),Yp(c,"name",r())})),hh(c,(()=>Xf(d)[n].mapped),(e=>Xf(d)[n].mapped=e)),uh(h,(()=>Xf(d)[n].ignore),(e=>Xf(d)[n].ignore=e)),mp(e,o)}))
var i=Ad(Nd(r,4))
i.__click=[qE,m,E],Nd(i,2).__click=[HE,m,C],mp(e,t)}
$p(b,(e=>{Xf(a)&&e(w)}))
var k=Nd(b,2),P=e=>{var t=zE(),n=Nd(Ad(t))
n.__input=[GE,m,S]
var r=Nd(n,2)
r.__input=[WE,m,S],ch(n,(()=>Xf(o).minpoint),(e=>Xf(o).minpoint=e)),ch(r,(()=>Xf(o).maxpoint),(e=>Xf(o).maxpoint=e)),mp(e,t)}
$p(k,(e=>{Xf(l)&&e(P)})),uh(i,(()=>Xf(o).backpack),(e=>Xf(o).backpack=e)),uh(u,(()=>Xf(o).guildstore),(e=>Xf(o).guildstore=e)),uh(f,(()=>Xf(o).inventory),(e=>Xf(o).inventory=e)),uh(h,(()=>Xf(o).mapping),(e=>Xf(o).mapping=e)),uh(v,(()=>Xf(o).thresholds),(e=>Xf(o).thresholds=e)),mp(e,t)}),((e,t)=>{var n=QE(),r=Ad(n)
Yd((()=>yp(r,Xf(t).message))),mp(e,n)})),mp(e,n)},$$slots:{title:!0,default:!0}})}vd()}dp(["change","click","mousedown","input"])
const XE=_d({visible:!0})
let YE=0
var ZE=Object.freeze({__proto__:null,default:function(){YE?XE.visible=!0:YE=wp(KE,{props:XE,target:document.body})}})
function eC(e){return Y_({subcmd:"useitem",inventory_id:e})}function tC(e){return j_(eC,0,e)}function nC(){return Y_({subcmd:"loadinventory"})}function rC(){return j_(nC)}function iC(){return F_({subcmd:"secure"})}const oC=["Perfect","Excellent","Very Good","Good","Average","Poor","Uncrafted"],sC=e=>({bound:e.bn??!1,craft:e.cr?oC[e.cf]:"",...null!==(e.cd??null)&&{durability:e.cd},equipped:e.equipped??!1}),aC=e=>({...e.folder_id&&{folder_id:e.folder_id},forge:e.hf??0,guild_tag:e.tg??-1,inv_id:e.a,item_id:e.b,item_name:e.n,...e.md&&{max_durability:e.md},...e.player?.id&&{player_id:e.player.id},rarity:e.r,stats:{min_level:e.l,set_name:""},type:e.t})
function lC(e){return e?{...sC(e),...aC(e)}:{}}const cC=({id:e,items:t})=>t.map((t=>({...t,folder_id:e})))
function uC(e){return Hc(e?.inventories)?e.inventories.flatMap(cC):[]}const dC=({items:e})=>e.map((({a:e})=>[e,!0]))
async function fC(){const[e,t]=await Ym([rC(),j_(iC)])
if(!e?.s||!t?.s)return
const n=uC(e.r).map(lC),r=Nm(t.r.sent.flatMap(dC))
return{items:n.map((e=>({...e,...r?.[e.inv_id]&&{is_in_st:!0}}))),player_id:yg()}}function pC(e,t,n,r){bc(t,n()),r.dispatchToggle()}var hC=vp('<label><input type="checkbox" class="svelte-f8757j"> Select items in ST</label>')
function vC(e,t){hd(t,!0)
let n=Oh(t,"inSt",15,null)
const r="selectST"
n(hc(r))
var i=hC(),o=Ad(i)
o.__change=[pC,r,n,t],uh(o,n),mp(e,i),vd()}function gC(e){return`${e.amount} x ${rc[e.type]}`}dp(["change"])
const _C=[[e=>e.components?.length,e=>`You successfully extracted 1 '${e.components?.[0].n}' component(s) from 1 resource(s).`],[e=>e.frags,e=>`You gained ${e.frags.map(gC).join(", ")} Fragments by opening the Fragment Stash.`],[e=>e.mailbox_items?.length,e=>`You received 1 x '${e.mailbox_items?.[0].n}' from the container.`],[()=>1,()=>"<You failed to extract any components from resource(s)."]]
function mC(e){return _C.find((([t])=>t(e)))[1](e)}const bC=(e,t,n)=>`fetchitem.php?item_id=${t}&inv_id=${n}&t=1&p=${e}`,yC=e=>`background-image: url(${Sa}items/${e}.gif)`
function wC(e,t,n,r){Sv("quickExtract","toggleSelectMain"),bc(t,Xf(n)),r()}function kC(e,t,n){Sv("quickExtract","togglePrompts"),bc(t,Xf(n))}var SC=vp('<span class="fshRed"> </span>'),xC=vp('<li class="svelte-g50cgg"><!></li>'),EC=vp('<span class="fshSpinner fshSpinner12"></span>'),CC=vp('<tr><td><!></td><td class="imgCol svelte-g50cgg"><span class="imgSpan tip-dynamic svelte-g50cgg"></span></td><td> </td></tr>'),PC=vp('<tr><td colspan="3"><p style="color: red"> </p></td></tr>'),TC=vp('<div class="svelte-g50cgg">Select which type of plants you wish to extract all of. Only select\n    extractable resources. <br> <!>&nbsp; <label><input type="checkbox" class="svelte-g50cgg"> Main Folder Only</label>&nbsp; <label><input type="checkbox" class="svelte-g50cgg"> Disable Prompts</label>&nbsp; <!> <br> <table class="svelte-g50cgg"><thead><tr><th class="actionCol svelte-g50cgg">Actions</th><th colspan="2">Items</th></tr></thead><tbody><tr><td colspan="3"><ol></ol></td></tr><!></tbody></table></div>')
function $C(e,t){hd(t,!0)
let n=Oh(t,"visible",15,!0)
const r="selectMain",i="disableQuickExtractPrompts"
let o=Sd(null),s=null,a=Sd(null),l=Sd(_d(hc(r))),c=Sd(_d(hc(i))),u=null,d=Sd(null),f=Sd(_d([]))
const p=e=>"Zombie Coffin"===e.item_name||12===e.type||16===e.type,h=(e,t)=>X_(e.item_name,t.item_name),v=e=>Xf(a)||!e.is_in_st,g=e=>!Xf(l)||-1===e.folder_id
function _(){Ed(d,Hc(u)&&function(e,t){return Tm(t,"item_name").map((n=>({...n,count:t.filter((e=>e.item_name===n.item_name)).length,delPending:!1,extractIds:t.filter((e=>e.item_name===n.item_name)).map((e=>e.inv_id)),style:yC(n.item_id),tip:bC(e,n.item_id,n.inv_id)})))}(s,u.filter(v).filter(g)),!0)}function m(){Sv("quickExtract","toggleSelectST"),_()}async function b(){const e=await fC()
s=e?.player_id,u=e?.items?.filter(p).sort(h),_()}function y(){Sv("quickExtract","refresh"),Ed(f,[],!0),Ed(o,b(),!0)}let w
async function k(e){const t=await tC(e);(function(e){return e?.s||w===e?.e?.message||(w=e?.e?.message,Ed(f,[...Xf(f),e?.e?.message],!0)),e?.s})(t)&&(Ed(f,[...Xf(f),mC(t.r)],!0),u=u.filter((t=>t.inv_id!==e)))}Qd((()=>{n()&&(Ed(f,[],!0),Ed(o,b(),!0))}))
{const t=e=>{mp(e,gp("Quick Extract"))}
Px(e,{close:function(){Sv("quickExtract","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=TC(),s=Nd(Ad(n),3)
vC(s,{dispatchToggle:m,get inSt(){return Xf(a)},set inSt(e){Ed(a,e,!0)}})
var u=Nd(s,2),p=Ad(u)
p.__change=[wC,r,l,_]
var h=Nd(u,2),v=Ad(h)
v.__change=[kC,i,c]
var g=Nd(h,2)
Ix(g,{onclick:y,children:(e,t)=>{mp(e,gp("Refresh"))}})
var b=Nd(g,4),w=Nd(Ad(b)),S=Ad(w),x=Ad(S)
Op(Ad(x),21,(()=>Xf(f)),Ip,((e,t)=>{var n=xC(),r=Ad(n),i=e=>{var n=SC(),r=Ad(n)
Yd((e=>yp(r,e)),[()=>Xf(t).slice(1)]),mp(e,n)},o=e=>{var n=gp()
Yd((()=>yp(n,Xf(t)))),mp(e,n)}
$p(r,(e=>{Xf(t).startsWith("<")?e(i):e(o,!1)})),mp(e,n)})),Tp(Nd(S),(()=>Xf(o)),null,(e=>{var t=_p()
Op(jd(t),17,(()=>Xf(d)),Ip,((e,t,n)=>{let r=()=>Xf(t).count,i=()=>Xf(t).delPending
var o=CC(),s=Ad(o)
let a
var l=Ad(s),u=e=>{var t=_p(),o=jd(t),s=e=>{mp(e,EC())},a=e=>{$x(e,{onclick:()=>async function(e){Sv("quickExtract","extract",Xf(c)),(Xf(c)||await Qw("Are you sure you want to extract all similar items?"))&&(Xf(d)[e].delPending=!0,await Ym(Xf(d)[e].extractIds.map(k)),Xf(d)[e]?.count&&(Xf(d)[e].count=0))}(n),children:(e,t)=>{var n=gp()
Yd((()=>yp(n,`Extract ${r()??""}`))),mp(e,n)},$$slots:{default:!0}})}
$p(o,(e=>{i()?e(s):e(a,!1)})),mp(e,t)},f=e=>{mp(e,gp("Done"))}
$p(l,(e=>{r()?e(u):e(f,!1)}))
var p=Nd(s),h=Ad(p),v=Ad(Nd(p))
Yd((e=>{a=zp(s,0,"svelte-g50cgg",null,a,e),Yp(h,"data-tipped",Xf(t).tip),Qp(h,Xf(t).style),yp(v,Xf(t).item_name)}),[()=>({delPending:i()})]),mp(e,o)})),mp(e,t)}),((e,t)=>{var n=PC(),r=Ad(n),i=Ad(r),o=Ad(i)
Yd((()=>yp(o,Xf(t).message))),mp(e,n)})),uh(p,(()=>Xf(l)),(e=>Ed(l,e))),uh(v,(()=>Xf(c)),(e=>Ed(c,e))),mp(e,n)},$$slots:{title:!0,default:!0}})}vd()}dp(["change"])
const LC=_d({visible:!0})
let IC=0
var OC=Object.freeze({__proto__:null,default:function(){IC?LC.visible=!0:IC=wp($C,{props:LC,target:document.body})}})
function RC(e,t){return`<a href="${za}${e}">${t}</a>`}var MC=vp("<input>"),FC=vp("<option> </option>"),AC=vp("<select><option> </option><!></select>"),jC=vp("<th><!></th>"),NC=vp("<th></th>"),DC=vp('<tr class="svelte-dsaf7t"><!><!></tr>'),BC=(e,t,n)=>t(e,Xf(n)),qC=vp('<th tabindex="0"> <!></th>'),HC=vp("<th></th>"),UC=vp("<tr><!><!></tr>"),GC=(e,t,n)=>t(e,Xf(n)),WC=(e,t,n,r)=>t(e,Xf(n),Xf(r).key),zC=vp("<td><!></td>"),VC=(e,t,n)=>t(e,Xf(n)),QC=vp('<td><span class="isClickable svelte-dsaf7t" tabindex="0" role="button"><!></span></td>'),JC=vp("<tr><td><!></td></tr>"),KC=vp("<tr><!><!></tr> <!>",1),XC=vp("<table><thead><!><!></thead><tbody></tbody></table>")
function YC(e,t){hd(t,!0)
let n=Oh(t,"sortOrders",19,(()=>[1,-1])),r=Oh(t,"sortBy",15,""),i=Oh(t,"sortOrder",31,(()=>_d(n()?.[0]||1))),o=Oh(t,"filterSelections",31,(()=>_d({}))),s=Oh(t,"expanded",31,(()=>_d([]))),a=Oh(t,"selected",31,(()=>_d([]))),l=Oh(t,"expandRowKey",3,null),c=Oh(t,"rowKey",19,l),u=Oh(t,"expandSingle",3,!1),d=Oh(t,"selectSingle",3,!1),f=Oh(t,"selectOnClick",3,!1),p=Oh(t,"iconAsc",3,"▲"),h=Oh(t,"iconDesc",3,"▼"),v=Oh(t,"iconSortable",3,""),g=Oh(t,"iconExpand",3,"▼"),_=Oh(t,"iconExpanded",3,"▲"),m=Oh(t,"showExpandIcon",3,!1),b=Oh(t,"classNameTable",3,""),y=Oh(t,"classNameThead",3,""),w=Oh(t,"classNameTbody",3,""),k=Oh(t,"classNameSelect",3,""),S=Oh(t,"classNameInput",3,""),x=Oh(t,"classNameRow",3,null),E=Oh(t,"classNameCell",3,""),C=Oh(t,"classNameRowSelected",3,null),P=Oh(t,"classNameRowExpanded",3,null),T=Oh(t,"classNameExpandedContent",3,""),$=Oh(t,"classNameCellExpand",3,""),L=Oh(t,"clickCol",3,(()=>{})),I=Oh(t,"clickRow",3,(()=>{})),O=Oh(t,"clickExpand",3,(()=>{})),R=Oh(t,"clickCell",3,(()=>{})),M=Sd((()=>""))
if(!Array.isArray(s()))throw"'expanded' needs to be an array"
if(!Array.isArray(a()))throw"'selection' needs to be an array"
null!==l()&&console.warn("'expandRowKey' is deprecated in favour of 'rowKey'"),C()&&!c()&&console.error("'rowKey' is needed to use 'classNameRowSelected'")
let F=t.columns.some((e=>!e.hideFilterHeader&&(void 0!==e.filterOptions||void 0!==e.searchValue))),A=Sd(_d({}))
const j=Bd((()=>Object.fromEntries(t.columns.map((e=>[e.key,e])))))
let N=Bd((()=>(m()?1:0)+t.columns.length))
const D=Bd((()=>t.rows.filter((e=>Object.keys(o()).every((t=>{let n=null
if(void 0===Xf(j)[t])return!0
if(Xf(j)[t]?.searchValue){if(""===o()[t])return!0
1===Xf(j)[t].searchValue.length?n=(Xf(j)[t].searchValue(e)+"").toLocaleLowerCase().indexOf((o()[t]+"").toLocaleLowerCase())>=0:2===Xf(j)[t].searchValue.length&&(n=!!Xf(j)[t].searchValue(e,o()[t]+""))}else n=!1
return n||void 0===o()[t]||o()[t]===("function"==typeof Xf(j)[t].filterValue?Xf(j)[t].filterValue(e):Xf(j)[t].value(e))})))).map((e=>Object.assign({},e,{$sortOn:Xf(M)(e),$expanded:null!==c()&&s().indexOf(e[c()])>=0,$selected:null!==c()&&a().indexOf(e[c()])>=0}))).sort(((e,t)=>r()?e.$sortOn>t.$sortOn?i():e.$sortOn<t.$sortOn?-i():0:0)))),B=e=>[].concat(e).filter((e=>null!==e&&"string"==typeof e&&""!==e)).join(" ")
Qd((()=>{let e=Xf(j)[r()]
void 0!==e&&!0===e.sortable&&"function"==typeof e.value&&Ed(M,(t=>e.value(t)))})),Qd((()=>{F&&t.columns&&t.rows&&(Ed(A,{},!0),t.columns.forEach((e=>{"function"==typeof e.filterOptions?Xf(A)[e.key]=e.filterOptions(t.rows):Array.isArray(e.filterOptions)&&(Xf(A)[e.key]=e.filterOptions.map((e=>({name:e,value:e}))))})))}))
const q=(e,t)=>{t.sortable&&(i(t.key===r()?n()[(n().findIndex((e=>e===i()))+1)%n().length]:n()[0]),r(i()?t.key:void 0)),L()({event:e,col:t,key:t.key})},H=(e,t)=>{f()&&(d()?a().includes(t[c()])?a([]):a([t[c()]]):a().includes(t[c()])?a(a().filter((e=>e!=t[c()]))):a([...a(),t[c()]].sort())),I()({event:e,row:t})},U=(e,t)=>{t.$expanded=!t.$expanded
const n=t[c()]
u()&&t.$expanded?s([n]):u()?s([]):t.$expanded?s([...s(),n]):s(s().filter((e=>e!=n))),O()({event:e,row:t})},G=(e,t,n)=>{R()({event:e,row:t,key:n})}
var W=XC(),z=Ad(W),V=Ad(z),Q=e=>{var n=DC(),r=Ad(n)
Op(r,17,(()=>t.columns),Ip,((e,t)=>{var n=jC(),r=Ad(n),i=e=>{var n=MC()
Yd((e=>{zp(n,0,e,"svelte-dsaf7t"),Yp(n,"placeholder",Xf(t).filterPlaceholder)}),[()=>Hp(B(S()))]),ch(n,(()=>o()[Xf(t).key]),(e=>o(o()[Xf(t).key]=e,!0))),mp(e,n)},s=(e,n)=>{var r=e=>{var n=AC(),r=Ad(n)
r.value=null==(r.__value=void 0)?"":void 0
var i=Ad(r)
Op(Nd(r),17,(()=>Xf(A)[Xf(t).key]),Ip,((e,t)=>{var n=FC(),r={},i=Ad(n)
Yd((()=>{r!==(r=Xf(t).value)&&(n.value=null==(n.__value=Xf(t).value)?"":Xf(t).value),yp(i,Xf(t).name)})),mp(e,n)})),Yd((e=>{zp(n,0,e,"svelte-dsaf7t"),yp(i,Xf(t).filterPlaceholder||"")}),[()=>Hp(B(k()))]),hh(n,(()=>o()[Xf(t).key]),(e=>o(o()[Xf(t).key]=e,!0))),mp(e,n)}
$p(e,(e=>{Xf(t).hideFilterHeader||void 0===Xf(A)[Xf(t).key]||e(r)}),n)}
$p(r,(e=>{Xf(t).hideFilterHeader||void 0===Xf(t).searchValue?e(s,!1):e(i)})),Yd((e=>zp(n,0,e,"svelte-dsaf7t")),[()=>Hp(B([Xf(t).headerFilterClass]))]),mp(e,n)}))
var i=Nd(r),s=e=>{mp(e,NC())}
$p(i,(e=>{m()&&e(s)})),mp(e,n)}
$p(V,(e=>{F&&e(Q)}))
var J=Nd(V),K=e=>{var n=_p()
Np(jd(n),(()=>t.svelteTableHeader),(()=>({sortOrder:i(),sortBy:r()}))),mp(e,n)},X=e=>{var n=UC(),o=Ad(n)
Op(o,17,(()=>t.columns),Ip,((e,t)=>{var n=qC()
n.__click=[BC,q,t]
var o=Ad(n),s=Nd(o),a=e=>{var t=_p()
jp(jd(t),(()=>1===i()?p():h())),mp(e,t)},l=(e,n)=>{var r=e=>{var t=_p()
jp(jd(t),v),mp(e,t)}
$p(e,(e=>{Xf(t).sortable&&e(r)}),n)}
$p(s,(e=>{r()===Xf(t).key?e(a):e(l,!1)})),Yd((e=>{zp(n,0,e,"svelte-dsaf7t"),yp(o,`${Xf(t).title??""} `)}),[()=>Hp(B([Xf(t).sortable?"isSortable":"",Xf(t).headerClass]))]),up("keypress",n,(e=>"Enter"===e.key&&q(e,Xf(t)))),mp(e,n)}))
var s=Nd(o),a=e=>{mp(e,HC())}
$p(s,(e=>{m()&&e(a)})),mp(e,n)}
$p(J,(e=>{t.svelteTableHeader?e(K):e(X,!1)}))
var Y=Nd(z)
Op(Y,21,(()=>Xf(D)),Ip,((e,n,r)=>{var i=_p(),o=jd(i),s=e=>{var i=_p()
Np(jd(i),(()=>t.svelteTableRow),(()=>({row:Xf(n),n:r}))),mp(e,i)},a=e=>{var i=KC(),o=jd(i)
o.__click=[GC,H,n]
var s=Ad(o)
Op(s,17,(()=>t.columns),Ip,((e,t,i)=>{var o=zC()
o.__click=[WC,G,n,t]
var s=Ad(o),a=e=>{var r=_p()
const i=Bd((()=>Xf(t).renderComponent.component||Xf(t).renderComponent))
Dp(jd(r),(()=>Xf(i)),((e,r)=>{r(e,function(...e){return new Proxy({props:e},Lh)}((()=>Xf(t).renderComponent.props||{}),{get row(){return Xf(n)},get col(){return Xf(t)}}))})),mp(e,r)},l=(e,o)=>{var s=e=>{var o=_p()
jp(jd(o),(()=>Xf(t).renderValue?Xf(t).renderValue(Xf(n),r,i):Xf(t).value(Xf(n),r,i))),mp(e,o)},a=e=>{var o=gp()
Yd((e=>yp(o,e)),[()=>Xf(t).renderValue?Xf(t).renderValue(Xf(n),r,i):Xf(t).value(Xf(n),r,i)]),mp(e,o)}
$p(e,(e=>{Xf(t).parseHTML?e(s):e(a,!1)}),o)}
$p(s,(e=>{Xf(t).renderComponent?e(a):e(l,!1)})),Yd((e=>zp(o,0,e,"svelte-dsaf7t")),[()=>Hp(B(["string"==typeof Xf(t).class?Xf(t).class:null,"function"==typeof Xf(t).class?Xf(t).class(Xf(n),r,i):null,E()]))]),up("keypress",o,(e=>"Enter"===e.key&&G(e,Xf(n),Xf(t).key))),mp(e,o)}))
var a=Nd(s),l=e=>{var t=QC(),r=Ad(t)
r.__click=[VC,U,n],jp(Ad(r),(()=>Xf(n).$expanded?g():_())),Yd((e=>zp(t,0,e,"svelte-dsaf7t")),[()=>Hp(B($()))]),up("keypress",r,(e=>"Enter"===e.key&&U(e,Xf(n)))),mp(e,t)}
$p(a,(e=>{m()&&e(l)}))
var c=Nd(o,2),u=e=>{var i=JC(),o=Ad(i)
Np(Ad(o),(()=>t.svelteTableExpanded??_u),(()=>({row:Xf(n),n:r}))),Yd((e=>{zp(i,0,e,"svelte-dsaf7t"),Yp(o,"colspan",Xf(N))}),[()=>Hp(B(T()))]),mp(e,i)}
$p(c,(e=>{Xf(n).$expanded&&e(u)})),Yd((e=>{zp(o,0,e,"svelte-dsaf7t"),Yp(o,"tabindex",f()?"0":null)}),[()=>Hp(B(["string"==typeof x()?x():null,"function"==typeof x()?x()(Xf(n),r):null,Xf(n).$expanded&&P(),Xf(n).$selected&&C()]))]),up("keypress",o,(e=>"Enter"===e.key&&H(e,Xf(n)))),mp(e,i)}
$p(o,(e=>{t.svelteTableRow?e(s):e(a,!1)})),mp(e,i)})),Yd(((e,t,n)=>{zp(W,0,e,"svelte-dsaf7t"),zp(z,0,t,"svelte-dsaf7t"),zp(Y,0,n,"svelte-dsaf7t")}),[()=>Hp(B(b())),()=>Hp(B(y())),()=>Hp(B(w()))]),mp(e,W),vd()}function ZC(e){return new Intl.NumberFormat("en-us").format(e)}dp(["click"])
var eP=vp('<div class="content svelte-u19tu"><!></div>')
function tP(e,t){hd(t,!0)
let n=Oh(t,"visible",15,!0)
const r=[{key:"slot",title:"Slot",value:e=>e.slot,sortable:!0},{key:"name",title:"Name",value:e=>e.name,sortable:!0,renderValue:e=>RC(e.id,e.name),parseHTML:!0},{key:"level",title:"Level",value:e=>e.level,sortable:!0},{key:"rank",title:"Rank",value:e=>e.rank,sortable:!0},{key:"guild_xp",title:"GXP",value:e=>e.guild_xp,sortable:!0,renderValue:e=>ZC(e.guild_xp)},{key:"activity",title:"Activity",value:e=>e.activity,sortable:!0},{key:"pack",title:"Pack",value:e=>e.pack,sortable:!0},{key:"max_stamina",title:"Stam",value:e=>e.max_stamina,sortable:!0,renderValue:e=>ZC(e.max_stamina)}]
let i=Sd(_d([]))
const o=({equipped:e})=>!e,s=({player:{id:e}})=>e,a=e=>e.members,l=e=>e.r.flatMap(a),c=e=>(t,n)=>({...t,slot:n+1,activity:qm(t.last_activity),pack:e[t.id]??0})
async function u(){const[e,t]=await Ym([bE(),jm()])
if(e?.s&&t?.s){const n=function([e,t]){const n=e.r.filter(o).map(s),r=Nm(Tm(n).map((e=>[e,n.filter((t=>t===e)).length])))
return l(t).map(c(r))}([e,t])
Ed(i,n,!0)}}const d=Bd((()=>{if(n())return u()}))
{const t=e=>{mp(e,gp("Who's Got What"))}
Px(e,{close:function(){Sv("Whos Got What","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=eP()
Tp(Ad(n),(()=>Xf(d)),(e=>{mp(e,gp("Loading..."))}),(e=>{YC(e,{classNameTable:"whos-got-what",columns:r,get rows(){return Xf(i)}})}),((e,t)=>{var n=gp()
Yd((()=>yp(n,Xf(t)))),mp(e,n)})),mp(e,n)},$$slots:{title:!0,default:!0}})}vd()}const nP=_d({visible:!0})
let rP=0
var iP=Object.freeze({__proto__:null,default:function(){rP?nP.visible=!0:rP=wp(tP,{props:nP,target:document.body})}})
const oP=()=>{Dv(import("./inventory-BN-8jNWG.js"))},sP=()=>{Dv(import("./bazaar-hKs6Ju2l.js"))}
function aP(){Dv(import("./injectQuestBookFull-BJjHaerw.js"))}const lP=()=>{Dv(import("./scavenging-BDEHN2hV.js"))}
const cP=()=>{Dv(import("./toprated-DlZVgI4G.js"))}
const uP=()=>{Dv(import("./trade-BNMiR4B2.js"))}
var dP={creatures:{"-":{"-":lx}},items:cx,masterrealms:{"-":{"-":lx}},quests:{"-":{"-":lx},view:{"-":()=>{Dv(import("./showAllQuestSteps-xQnbcp2I.js"))}}},realms:{"-":{"-":lx}},relics:{"-":{"-":lx}},shops:{"-":{"-":lx}},"-":hx,arena:KS,auctionhouse:XS,bank:{"-":{"-":()=>{Dv(import("./injectBank-Eq6bDp1c.js"))}}},blacksmith:{repairall:{"-":function(){iu("fromworld")&&JS()}}},buffmarket:{"-":{"-":()=>{Dv(import("./injectBuffmarket-Dp4pAWIb.js"))}}},combat:{attackplayer:{"-":ux}},composing:YS,findplayer:{"-":{"-":()=>{Dv(import("./findplayer-B1Rshdgc.js"))}}},guild:ox,hellforge:{"-":{"-":()=>{Dv(import("./hellforge-BtviJLOI.js"))}}},inventing:ax,log:{"-":{"-":()=>{Dv(import("./playerLog-A-j5gDEg.js"))}}},marketplace:{createreq:{"-":()=>{Dv(import("./marketplace-BsVpJENF.js"))}}},news:px,notepad:{showlogs:{"-":qv},invmanagernew:{"-":oP},guildinvmgr:{"-":oP},recipemanager:{"-":Zv},auctionsearch:{"-":zv},onlineplayers:{"-":Jv},quicklinkmanager:{"-":Xv},monsterlog:{"-":Hv},quickextract:{"-":Kv},quickwear:{"-":Yv},fsboxcontent:{"-":Uv},bufflogcontent:{"-":Bv},newguildlog:{"-":Gv},findbuffs:{"-":Vv},findother:{"-":Qv},savesettings:{"-":()=>{Dv(import("./load-CDs1MswG.js"))}},reliclist:{"-":eg},"-":{"-":function(){}}},points:{"-":{"-":()=>{Dv(import("./points-LN73-Ikk.js"))}}},potionbazaar:{"-":{"-":sP},buyitem:{"-":sP}},privatemessage:{"-":{"-":()=>{Dv(import("./privateMsg-QHw9bGd8.js"))}}},profile:{"-":{"-":ux},managecombatset:{"-":ux},report:{"-":ux},equipitem:{"-":ux},useitem:{"-":ux},changebio:{"-":ZS},dropitems:{"-":function(){Dv(import("./injectProfileDropItems-CkmOLnk6.js"))}}},pvpladder:{"-":{"-":()=>{Dv(import("./ladder-BRmoKkqT.js"))}}},questbook:{"-":{"-":aP},atoz:{"-":aP},viewquest:{"-":()=>{Dv(import("./injectQuestTracker-D0oNearH.js"))}}},quickbuff:{"-":{"-":()=>{Dv(import("./quickBuff-DNLuDoYV.js"))}}},scavenging:{"-":{"-":lP},process:{"-":lP}},settings:{"-":{"-":()=>{Dv(import("./injectSettings-Bg-45e7-.js"))}}},skills:{"-":{"-":()=>{}}},tempinv:{"-":{"-":()=>{Dv(import("./mailbox-Dd7TmMmO.js"))}}},temple:{"-":{"-":iS}},titan:{"-":{"-":()=>{Dv(import("./injectTitan-BYf6zaFZ.js"))}}},toprated:{xp:{"-":cP},monthlyxp:{"-":cP},gold:{"-":cP},killstreak:{"-":cP},bounties:{"-":cP},risingstars:{"-":cP},arena:{"-":cP},superelites:{"-":cP},smasher:{"-":cP},globalquest:{"-":()=>{Dv(import("./globalQuest-DfQe9-IG.js"))}}},trade:{"-":{"-":uP},sendgold:{"-":uP},createsecure:{"-":uP},docreatesecure:{"-":uP}},world:{"-":{"-":JS}}}
function fP(e){return Lv("ul",e)}const pP=()=>Iv({className:"fshQuickLinks",style:{left:`${hc("quickLinksLeftPx")}px`,top:`${hc("quickLinksTopPx")}px`}}),hP=e=>"newWindow"in e&&e.url&&e.name
function vP(e,t){const n=Mv(t,fP())
e.filter(hP).forEach((e=>{Mv(Mv(n,Rb()),function(e){const t=pg({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return pm(t,(()=>Sv("chrome","quick link",e.name))),t}(e))}))}function gP(){if(!xc(".mainbody"))return
const e=dy("quickLinks")||[]
e.length&&function(e){const t=pP()
t.classList.toggle("fshFixed",hc("keepHelperMenuOnScreen")),hc("draggableQuickLinks")&&(t.classList.add("fshMove"),yv(t)),vP(e,t),Mv(document.body,t)}(e)}let _P=0,mP=0,bP=0,yP="",wP=0,kP=0
function SP(e){return iu(e)||"-"}function xP(e){const t=xc(e)
return t?.value||"-"}function EP(){if(kc(dP[_P])&&kc(dP[_P][mP])&&wc(dP[_P][mP][bP]))return dP[_P][mP][bP]}function CP(){""!==document.location.search?(_P=SP("cmd"),mP=SP("subcmd"),bP=SP("subcmd2"),["points","privatemessage"].includes(_P)&&(yP=`/${SP("type")}`)):(_P=xP('input[name="cmd"]'),mP=xP('input[name="subcmd"]'),bP=xP('input[name="subcmd2"]')),qc.cmd=_P,qc.subcmd=mP,qc.subcmd2=bP,kP=`${_P}/${mP}/${bP}${yP}`,wP=EP()}function PP(){wc(wP)&&(yc(kP),wP())}async function TP(e){CP(),await e,QS(),nu(3,PP),hc("playNewMessageSound")&&nu(3,sv),km()||nu(3,gP)}const $P=[()=>!("showPicker"in HTMLSelectElement.prototype),()=>!navigator.cookieEnabled,()=>window!==window.parent,function(){if(!d){const e=l(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
u=c.includes(e),d=!0}return u}]
function LP(e,t){if($P.some((e=>e())))return
const n=Ec("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
Fc(),function(e,t){qc.gmInfo=Sc(decodeURIComponent(t)),qc.gmInfo?qc.fshVer=e:qc.fshVer=`${e}_native`,qc.calfVer="149"}(e,t),s(),ra(),TP(n)}export{j_ as $,Ob as A,Jh as B,Mb as C,av as D,Cm as E,Ta as F,fP as G,Pv as H,nw as I,mg as J,Hc as K,_g as L,D_ as M,N_ as N,cc as O,uc as P,hm as Q,hd as R,Sd as S,_d as T,dy as U,Xf as V,Ed as W,vp as X,Nd as Y,Ad as Z,Op as _,M_ as a,kl as a$,$p as a0,hh as a1,ch as a2,mp as a3,vd as a4,Zb as a5,dp as a6,Yd as a7,yp as a8,Kw as a9,Gl as aA,ZC as aB,Rw as aC,ka as aD,Na as aE,oy as aF,dS as aG,Xh as aH,cw as aI,sw as aJ,fy as aK,K_ as aL,rw as aM,aS as aN,Qa as aO,Ja as aP,ru as aQ,hl as aR,Ga as aS,Hx as aT,sc as aU,fw as aV,Qh as aW,Fb as aX,o as aY,jl as aZ,wl as a_,n as aa,rk as ab,iu as ac,wp as ad,Qw as ae,qv as af,Hv as ag,zh as ah,Em as ai,bc as aj,Hm as ak,zb as al,qc as am,Dc as an,hc as ao,Rv as ap,nl as aq,Xw as ar,Tp as as,_p as at,jd as au,vc as av,uh as aw,va as ax,pa as ay,dw as az,H_ as b,Cl as b$,Pl as b0,Sl as b1,Xk as b2,yg as b3,ll as b4,Da as b5,bl as b6,hg as b7,Sa as b8,Il as b9,Zm as bA,Ca as bB,$l as bC,Rl as bD,Oh as bE,$x as bF,Ea as bG,Ip as bH,lw as bI,fl as bJ,Sh as bK,kh as bL,Yy as bM,Ma as bN,qk as bO,Uc as bP,lc as bQ,Xm as bR,X_ as bS,_a as bT,ba as bU,za as bV,Mh as bW,$h as bX,Ph as bY,Ol as bZ,xp as b_,lg as ba,Sc as bb,nu as bc,Ow as bd,Ov as be,Xl as bf,Kl as bg,Zl as bh,Yl as bi,ec as bj,Vh as bk,Kh as bl,wc as bm,wa as bn,yl as bo,Bd as bp,gp as bq,Yp as br,ul as bs,ol as bt,Tm as bu,Kf as bv,zp as bw,Qg as bx,Jg as by,Ak as bz,Nc as c,bu as c$,Al as c0,Nl as c1,Dl as c2,W_ as c3,G_ as c4,z_ as c5,xl as c6,El as c7,Ml as c8,fa as c9,ql as cA,Pa as cB,Ck as cC,Dm as cD,Lv as cE,RC as cF,el as cG,Mw as cH,Jl as cI,Hl as cJ,Aa as cK,iw as cL,sy as cM,ha as cN,a as cO,ta as cP,Rg as cQ,Kg as cR,jk as cS,e as cT,Ec as cU,Qu as cV,Vl as cW,Dv as cX,fd as cY,Jd as cZ,Qd as c_,Ll as ca,tw as cb,ym as cc,py as cd,q_ as ce,ga as cf,Y_ as cg,Hp as ch,ic as ci,em as cj,kc as ck,dc as cl,zl as cm,Cv as cn,V_ as co,Ka as cp,oc as cq,fS as cr,Bc as cs,pl as ct,cg as cu,Tk as cv,wx as cw,Bl as cx,fm as cy,kx as cz,rC as d,gc as d$,Yf as d0,mu as d1,tp as d2,Dd as d3,fC as d4,vC as d5,Bp as d6,Lp as d7,dm as d8,cd as d9,p_ as dA,tC as dB,F_ as dC,nc as dD,Bm as dE,Qp as dF,ja as dG,$a as dH,Yb as dI,Oa as dJ,Ra as dK,Ul as dL,Wv as dM,il as dN,Rb as dO,Fa as dP,Dk as dQ,ow as dR,Ia as dS,ex as dT,bh as dU,ah as dV,qh as dW,vl as dX,gl as dY,Px as dZ,Xp as d_,Ix as da,Ha as db,ya as dc,tc as dd,Pm as de,Ql as df,yc as dg,dx as dh,aP as di,sx as dj,tb as dk,eb as dl,dg as dm,bE as dn,gE as dp,lC as dq,fg as dr,kE as ds,xa as dt,_E as du,g_ as dv,s_ as dw,l_ as dx,c_ as dy,a_ as dz,Zh as e,xm as e0,Wa as e1,up as e2,Dp as e3,Ya as e4,_x as e5,Sx as e6,ml as e7,uw as e8,Sm as e9,xh as eA,Nv as eB,Yv as eC,Va as eD,LP as eE,ib as ea,Vm as eb,rb as ec,Wm as ed,Qm as ee,Gm as ef,zm as eg,Jm as eh,Um as ei,Km as ej,hb as ek,db as el,pb as em,fb as en,ab as eo,Mx as ep,Th as eq,US as er,FS as es,TS as et,qd as eu,im as ev,qa as ew,Za as ex,kd as ey,Kv as ez,uC as f,t as g,Fv as h,Mv as i,Nm as j,B_ as k,bm as l,Wl as m,vm as n,pm as o,iv as p,xc as q,l as r,Sv as s,ac as t,Iv as u,pg as v,cl as w,Ym as x,ug as y,ay as z}
//# sourceMappingURL=calfSystem-BGW9cdWN.js.map
