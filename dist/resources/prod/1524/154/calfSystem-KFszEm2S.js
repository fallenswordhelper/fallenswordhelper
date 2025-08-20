function e(e){return new Promise(t=>{const n=document.createElement("script")
n.async=!0,n.onload=t,n.src=e,document.body.appendChild(n)})}function t(e,t){return t?t.getElementById(e):document.getElementById(e)}function n(e){if(e instanceof Node)return e.textContent}let r=null
const i=()=>function(){const e=t("statbar-character")
return e&&n(e)}()||"string"==typeof window.self&&window.self
function s(){if(!r){const e=i()
e&&(r=e)}return r}function o(){!function(){e("https://www.googletagmanager.com/gtag/js?id=G-14Y99WX8XL"),window.dataLayer=window.dataLayer||[],window.gtag=window.gtag||function(){window.dataLayer.push(arguments)},gtag("js",new Date)
const t=s()
t&&gtag("config","G-14Y99WX8XL",{user_id:t})}()}function a(e,t){return e.exec(t)}function l(e,t){const n=a(e,t)
if(n)return n[1]}const c=["www.keeprefreshing.com"]
let u=!1,d=!1
function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(null,arguments)}function h(e,t){if(null==e)return{}
var n={}
for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue
n[r]=e[r]}return n}var p="undefined"!=typeof window?window:void 0,g="undefined"!=typeof globalThis?globalThis:p,_=Array.prototype,v=_.forEach,m=_.indexOf,y=null==g?void 0:g.navigator,b=null==g?void 0:g.document,w=null==g?void 0:g.location,k=null==g?void 0:g.fetch,S=null!=g&&g.XMLHttpRequest&&"withCredentials"in new g.XMLHttpRequest?g.XMLHttpRequest:void 0,x=null==g?void 0:g.AbortController,E=null==y?void 0:y.userAgent,C=null!=p?p:{},T={DEBUG:!1,LIB_VERSION:"1.260.1"},P="$copy_autocapture",L=["$snapshot","$pageview","$pageleave","$set","survey dismissed","survey sent","survey shown","$identify","$groupidentify","$create_alias","$$client_ingestion_warning","$web_experiment_applied","$feature_enrollment_update","$feature_flag_called"],I=function(e){return e.GZipJS="gzip-js",e.Base64="base64",e}({}),M=["fatal","error","warning","log","info","debug"]
function O(e,t){return-1!==e.indexOf(t)}var R=function(e){return e.trim()},F=function(e){return e.replace(/^\$/,"")},A=Array.isArray,j=Object.prototype,N=j.hasOwnProperty,D=j.toString,B=A||function(e){return"[object Array]"===D.call(e)},q=e=>"function"==typeof e,H=e=>e===Object(e)&&!B(e),U=e=>{if(H(e)){for(var t in e)if(N.call(e,t))return!1
return!0}return!1},G=e=>void 0===e,W=e=>"[object String]"==D.call(e),z=e=>W(e)&&0===e.trim().length,V=e=>null===e,Q=e=>G(e)||V(e),K=e=>"[object Number]"==D.call(e),J=e=>"[object Boolean]"===D.call(e),Y=e=>O(L,e),X=e=>{var t={_log:function(t){if(p&&(T.DEBUG||C.POSTHOG_DEBUG)&&!G(p.console)&&p.console){for(var n=("__rrweb_original__"in p.console[t]?p.console[t].__rrweb_original__:p.console[t]),r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s]
n(e,...i)}},info:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("log",...n)},warn:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("warn",...n)},error:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("error",...n)},critical:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
console.error(e,...n)},uninitializedWarning:e=>{t.error("You must initialize PostHog before calling "+e)},createLogger:t=>X(e+" "+t)}
return t},Z=X("[PostHog.js]"),ee=Z.createLogger,te={}
function ne(e,t,n){if(B(e))if(v&&e.forEach===v)e.forEach(t,n)
else if("length"in e&&e.length===+e.length)for(var r=0,i=e.length;r<i;r++)if(r in e&&t.call(n,e[r],r)===te)return}function re(e,t,n){if(!Q(e)){if(B(e))return ne(e,t,n)
if((e=>e instanceof FormData)(e)){for(var r of e.entries())if(t.call(n,r[1],r[0])===te)return}else for(var i in e)if(N.call(e,i)&&t.call(n,e[i],i)===te)return}}var ie=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return ne(n,function(t){for(var n in t)void 0!==t[n]&&(e[n]=t[n])}),e},se=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return ne(n,function(t){ne(t,function(t){e.push(t)})}),e}
function oe(e){for(var t=Object.keys(e),n=t.length,r=new Array(n);n--;)r[n]=[t[n],e[t[n]]]
return r}var ae=function(e){try{return e()}catch(e){return}},le=function(e){return function(){try{for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return e.apply(this,n)}catch(e){Z.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."),Z.critical(e)}}},ce=function(e){var t={}
return re(e,function(e,n){(W(e)&&e.length>0||K(e))&&(t[n]=e)}),t}
var ue=["herokuapp.com","vercel.app","netlify.app"]
function de(e){var t=null==e?void 0:e.hostname
if(!W(t))return!1
var n=t.split(".").slice(-2).join(".")
for(var r of ue)if(n===r)return!1
return!0}function fe(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}function he(e,t,n,r){var{capture:i=!1,passive:s=!0}=null!=r?r:{}
null==e||e.addEventListener(t,n,{capture:i,passive:s})}var pe="$people_distinct_id",ge="__alias",_e="__timers",ve="$autocapture_disabled_server_side",me="$heatmaps_enabled_server_side",ye="$exception_capture_enabled_server_side",be="$error_tracking_suppression_rules",we="$error_tracking_capture_extension_exceptions",ke="$web_vitals_enabled_server_side",Se="$dead_clicks_enabled_server_side",xe="$web_vitals_allowed_metrics",Ee="$session_recording_enabled_server_side",Ce="$console_log_recording_enabled_server_side",Te="$session_recording_network_payload_capture",Pe="$session_recording_masking",$e="$session_recording_canvas_recording",Le="$replay_sample_rate",Ie="$replay_minimum_duration",Me="$replay_script_config",Oe="$sesid",Re="$session_is_sampled",Fe="$session_recording_url_trigger_activated_session",Ae="$session_recording_event_trigger_activated_session",je="$enabled_feature_flags",Ne="$early_access_features",De="$feature_flag_details",Be="$stored_person_properties",qe="$stored_group_properties",He="$surveys",Ue="$surveys_activated",Ge="$flag_call_reported",We="$user_state",ze="$client_session_props",Ve="$capture_rate_limit",Qe="$initial_campaign_params",Ke="$initial_referrer_info",Je="$initial_person_info",Ye="$epp",Xe="__POSTHOG_TOOLBAR__",Ze="$posthog_cookieless",et=[pe,ge,"__cmpns",_e,Ee,me,Oe,je,be,We,Ne,De,qe,Be,He,Ge,ze,Ve,Qe,Ke,Ye,Je]
function tt(e){return e instanceof Element&&(e.id===Xe||!(null==e.closest||!e.closest(".toolbar-global-fade-container")))}function nt(e){return!!e&&1===e.nodeType}function rt(e,t){return!!e&&!!e.tagName&&e.tagName.toLowerCase()===t.toLowerCase()}function it(e){return!!e&&3===e.nodeType}function st(e){return!!e&&11===e.nodeType}function ot(e){return e?R(e).split(/\s+/):[]}function at(e){var t=null==p?void 0:p.location.href
return!!(t&&e&&e.some(e=>t.match(e)))}function lt(e){var t=""
switch(typeof e.className){case"string":t=e.className
break
case"object":t=(e.className&&"baseVal"in e.className?e.className.baseVal:null)||e.getAttribute("class")||""
break
default:t=""}return ot(t)}function ct(e){return Q(e)?null:R(e).split(/(\s+)/).filter(e=>kt(e)).join("").replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)}function ut(e){var t=""
return pt(e)&&!gt(e)&&e.childNodes&&e.childNodes.length&&re(e.childNodes,function(e){var n
it(e)&&e.textContent&&(t+=null!==(n=ct(e.textContent))&&void 0!==n?n:"")}),R(t)}function dt(e){return G(e.target)?e.srcElement||null:null!=(t=e.target)&&t.shadowRoot?e.composedPath()[0]||null:e.target||null
var t}var ft=["a","button","form","input","select","textarea","label"]
function ht(e){var t=e.parentNode
return!(!t||!nt(t))&&t}function pt(e){for(var t=e;t.parentNode&&!rt(t,"body");t=t.parentNode){var n=lt(t)
if(O(n,"ph-sensitive")||O(n,"ph-no-capture"))return!1}if(O(lt(e),"ph-include"))return!0
var r=e.type||""
if(W(r))switch(r.toLowerCase()){case"hidden":case"password":return!1}var i=e.name||e.id||""
return!W(i)||!/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g,""))}function gt(e){return!!(rt(e,"input")&&!["button","checkbox","submit","reset"].includes(e.type)||rt(e,"select")||rt(e,"textarea")||"true"===e.getAttribute("contenteditable"))}var _t="(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",vt=new RegExp("^(?:"+_t+")$"),mt=new RegExp(_t),yt="\\d{3}-?\\d{2}-?\\d{4}",bt=new RegExp("^("+yt+")$"),wt=new RegExp("("+yt+")")
function kt(e,t){if(void 0===t&&(t=!0),Q(e))return!1
if(W(e)){if(e=R(e),(t?vt:mt).test((e||"").replace(/[- ]/g,"")))return!1
if((t?bt:wt).test(e))return!1}return!0}function St(e){var t=ut(e)
return kt(t=(t+" "+xt(e)).trim())?t:""}function xt(e){var t=""
return e&&e.childNodes&&e.childNodes.length&&re(e.childNodes,function(e){var n
if(e&&"span"===(null==(n=e.tagName)?void 0:n.toLowerCase()))try{var r=ut(e)
t=(t+" "+r).trim(),e.childNodes&&e.childNodes.length&&(t=(t+" "+xt(e)).trim())}catch(e){Z.error("[AutoCapture]",e)}}),t}function Et(e){return function(e){var t=e.map(e=>{var t,n,r=""
if(e.tag_name&&(r+=e.tag_name),e.attr_class)for(var i of(e.attr_class.sort(),e.attr_class))r+="."+i.replace(/"/g,"")
var s=f({},e.text?{text:e.text}:{},{"nth-child":null!==(t=e.nth_child)&&void 0!==t?t:0,"nth-of-type":null!==(n=e.nth_of_type)&&void 0!==n?n:0},e.href?{href:e.href}:{},e.attr_id?{attr_id:e.attr_id}:{},e.attributes),o={}
return oe(s).sort((e,t)=>{var[n]=e,[r]=t
return n.localeCompare(r)}).forEach(e=>{var[t,n]=e
return o[Ct(t.toString())]=Ct(n.toString())}),(r+=":")+oe(o).map(e=>{var[t,n]=e
return t+'="'+n+'"'}).join("")})
return t.join(";")}(function(e){return e.map(e=>{var t,n,r={text:null==(t=e.$el_text)?void 0:t.slice(0,400),tag_name:e.tag_name,href:null==(n=e.attr__href)?void 0:n.slice(0,2048),attr_class:Tt(e),attr_id:e.attr__id,nth_child:e.nth_child,nth_of_type:e.nth_of_type,attributes:{}}
return oe(e).filter(e=>{var[t]=e
return 0===t.indexOf("attr__")}).forEach(e=>{var[t,n]=e
return r.attributes[t]=n}),r})}(e))}function Ct(e){return e.replace(/"|\\"/g,'\\"')}function Tt(e){var t=e.attr__class
return t?B(t)?t:ot(t):void 0}class Pt{constructor(){this.clicks=[]}isRageClick(e,t,n){var r=this.clicks[this.clicks.length-1]
if(r&&Math.abs(e-r.x)+Math.abs(t-r.y)<30&&n-r.timestamp<1e3){if(this.clicks.push({x:e,y:t,timestamp:n}),3===this.clicks.length)return!0}else this.clicks=[{x:e,y:t,timestamp:n}]
return!1}}var $t=["localhost","127.0.0.1"],Lt=e=>{var t=null==b?void 0:b.createElement("a")
return G(t)?null:(t.href=e,t)},It=function(e,t){for(var n,r=((e.split("#")[0]||"").split(/\?(.*)/)[1]||"").replace(/^\?+/g,"").split("&"),i=0;i<r.length;i++){var s=r[i].split("=")
if(s[0]===t){n=s
break}}if(!B(n)||n.length<2)return""
var o=n[1]
try{o=decodeURIComponent(o)}catch(e){Z.error("Skipping decoding for malformed query param: "+o)}return o.replace(/\+/g," ")},Mt=function(e,t,n){if(!e||!t||!t.length)return e
for(var r=e.split("#"),i=r[0]||"",s=r[1],o=i.split("?"),a=o[1],l=o[0],c=(a||"").split("&"),u=[],d=0;d<c.length;d++){var f=c[d].split("=")
B(f)&&(t.includes(f[0])?u.push(f[0]+"="+n):u.push(c[d]))}var h=l
return null!=a&&(h+="?"+u.join("&")),null!=s&&(h+="#"+s),h},Ot=function(e,t){var n=e.match(new RegExp(t+"=([^&]*)"))
return n?n[1]:null},Rt=ee("[AutoCapture]")
function Ft(e,t){return t.length>e?t.slice(0,e)+"...":t}function At(e){if(e.previousElementSibling)return e.previousElementSibling
var t=e
do{t=t.previousSibling}while(t&&!nt(t))
return t}function jt(e,t){for(var n,r,{e:i,maskAllElementAttributes:s,maskAllText:o,elementAttributeIgnoreList:a,elementsChainAsString:l}=t,c=[e],u=e;u.parentNode&&!rt(u,"body");)st(u.parentNode)?(c.push(u.parentNode.host),u=u.parentNode.host):(c.push(u.parentNode),u=u.parentNode)
var d,f=[],h={},g=!1,_=!1
if(re(c,e=>{var t=pt(e)
"a"===e.tagName.toLowerCase()&&(g=e.getAttribute("href"),g=t&&g&&kt(g)&&g),O(lt(e),"ph-no-capture")&&(_=!0),f.push(function(e,t,n,r){var i=e.tagName.toLowerCase(),s={tag_name:i}
ft.indexOf(i)>-1&&!n&&("a"===i.toLowerCase()||"button"===i.toLowerCase()?s.$el_text=Ft(1024,St(e)):s.$el_text=Ft(1024,ut(e)))
var o=lt(e)
o.length>0&&(s.classes=o.filter(function(e){return""!==e})),re(e.attributes,function(n){var i
if((!gt(e)||-1!==["name","id","class","aria-label"].indexOf(n.name))&&(null==r||!r.includes(n.name))&&!t&&kt(n.value)&&(i=n.name,!W(i)||"_ngcontent"!==i.substring(0,10)&&"_nghost"!==i.substring(0,7))){var o=n.value
"class"===n.name&&(o=ot(o).join(" ")),s["attr__"+n.name]=Ft(1024,o)}})
for(var a=1,l=1,c=e;c=At(c);)a++,c.tagName===e.tagName&&l++
return s.nth_child=a,s.nth_of_type=l,s}(e,s,o,a))
var n=function(e){if(!pt(e))return{}
var t={}
return re(e.attributes,function(e){if(e.name&&0===e.name.indexOf("data-ph-capture-attribute")){var n=e.name.replace("data-ph-capture-attribute-",""),r=e.value
n&&r&&kt(r)&&(t[n]=r)}}),t}(e)
ie(h,n)}),_)return{props:{},explicitNoCapture:_}
if(o||("a"===e.tagName.toLowerCase()||"button"===e.tagName.toLowerCase()?f[0].$el_text=St(e):f[0].$el_text=ut(e)),g){var v,m
f[0].attr__href=g
var y=null==(v=Lt(g))?void 0:v.host,b=null==p||null==(m=p.location)?void 0:m.host
y&&b&&y!==b&&(d=g)}return{props:ie({$event_type:i.type,$ce_version:1},l?{}:{$elements:f},{$elements_chain:Et(f)},null!=(n=f[0])&&n.$el_text?{$el_text:null==(r=f[0])?void 0:r.$el_text}:{},d&&"click"===i.type?{$external_click_url:d}:{},h)}}class Nt{constructor(e){this._initialized=!1,this._isDisabledServerSide=null,this.rageclicks=new Pt,this._elementsChainAsString=!1,this.instance=e,this._elementSelectors=null}get _config(){var e,t,n=H(this.instance.config.autocapture)?this.instance.config.autocapture:{}
return n.url_allowlist=null==(e=n.url_allowlist)?void 0:e.map(e=>new RegExp(e)),n.url_ignorelist=null==(t=n.url_ignorelist)?void 0:t.map(e=>new RegExp(e)),n}_addDomEventHandlers(){if(this.isBrowserSupported()){if(p&&b){var e=e=>{e=e||(null==p?void 0:p.event)
try{this._captureEvent(e)}catch(e){Rt.error("Failed to capture event",e)}}
if(he(b,"submit",e,{capture:!0}),he(b,"change",e,{capture:!0}),he(b,"click",e,{capture:!0}),this._config.capture_copied_text){var t=e=>{e=e||(null==p?void 0:p.event),this._captureEvent(e,P)}
he(b,"copy",t,{capture:!0}),he(b,"cut",t,{capture:!0})}}}else Rt.info("Disabling Automatic Event Collection because this browser is not supported")}startIfEnabled(){this.isEnabled&&!this._initialized&&(this._addDomEventHandlers(),this._initialized=!0)}onRemoteConfig(e){e.elementsChainAsString&&(this._elementsChainAsString=e.elementsChainAsString),this.instance.persistence&&this.instance.persistence.register({[ve]:!!e.autocapture_opt_out}),this._isDisabledServerSide=!!e.autocapture_opt_out,this.startIfEnabled()}setElementSelectors(e){this._elementSelectors=e}getElementSelectors(e){var t,n=[]
return null==(t=this._elementSelectors)||t.forEach(t=>{var r=null==b?void 0:b.querySelectorAll(t)
null==r||r.forEach(r=>{e===r&&n.push(t)})}),n}get isEnabled(){var e,t,n=null==(e=this.instance.persistence)?void 0:e.props[ve],r=this._isDisabledServerSide
if(V(r)&&!J(n)&&!this.instance._shouldDisableFlags())return!1
var i=null!==(t=this._isDisabledServerSide)&&void 0!==t?t:!!n
return!!this.instance.config.autocapture&&!i}_captureEvent(e,t){if(void 0===t&&(t="$autocapture"),this.isEnabled){var n,r=dt(e)
it(r)&&(r=r.parentNode||null),"$autocapture"===t&&"click"===e.type&&e instanceof MouseEvent&&this.instance.config.rageclick&&null!=(n=this.rageclicks)&&n.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._captureEvent(e,"$rageclick")
var i=t===P
if(r&&function(e,t,n,r,i){var s,o,a
if(void 0===n&&(n=void 0),!p||!e||rt(e,"html")||!nt(e))return!1
if(null!=(s=n)&&s.url_allowlist&&!at(n.url_allowlist))return!1
if(null!=(o=n)&&o.url_ignorelist&&at(n.url_ignorelist))return!1
if(null!=(a=n)&&a.dom_event_allowlist){var l=n.dom_event_allowlist
if(l&&!l.some(e=>t.type===e))return!1}for(var c=!1,u=[e],d=!0,f=e;f.parentNode&&!rt(f,"body");)if(st(f.parentNode))u.push(f.parentNode.host),f=f.parentNode.host
else{if(!(d=ht(f)))break
if(r||ft.indexOf(d.tagName.toLowerCase())>-1)c=!0
else{var h=p.getComputedStyle(d)
h&&"pointer"===h.getPropertyValue("cursor")&&(c=!0)}u.push(d),f=d}if(!function(e,t){var n=null==t?void 0:t.element_allowlist
if(G(n))return!0
var r,i=function(e){if(n.some(t=>e.tagName.toLowerCase()===t))return{v:!0}}
for(var s of e)if(r=i(s))return r.v
return!1}(u,n))return!1
if(!function(e,t){var n=null==t?void 0:t.css_selector_allowlist
if(G(n))return!0
var r,i=function(e){if(n.some(t=>e.matches(t)))return{v:!0}}
for(var s of e)if(r=i(s))return r.v
return!1}(u,n))return!1
var g=p.getComputedStyle(e)
if(g&&"pointer"===g.getPropertyValue("cursor")&&"click"===t.type)return!0
var _=e.tagName.toLowerCase()
switch(_){case"html":return!1
case"form":return(i||["submit"]).indexOf(t.type)>=0
case"input":case"select":case"textarea":return(i||["change","click"]).indexOf(t.type)>=0
default:return c?(i||["click"]).indexOf(t.type)>=0:(i||["click"]).indexOf(t.type)>=0&&(ft.indexOf(_)>-1||"true"===e.getAttribute("contenteditable"))}}(r,e,this._config,i,i?["copy","cut"]:void 0)){var{props:s,explicitNoCapture:o}=jt(r,{e:e,maskAllElementAttributes:this.instance.config.mask_all_element_attributes,maskAllText:this.instance.config.mask_all_text,elementAttributeIgnoreList:this._config.element_attribute_ignorelist,elementsChainAsString:this._elementsChainAsString})
if(o)return!1
var a=this.getElementSelectors(r)
if(a&&a.length>0&&(s.$element_selectors=a),t===P){var l,c=ct(null==p||null==(l=p.getSelection())?void 0:l.toString()),u=e.type||"clipboard"
if(!c)return!1
s.$selected_content=c,s.$copy_type=u}return this.instance.capture(t,s),!0}}}isBrowserSupported(){return q(null==b?void 0:b.querySelectorAll)}}Math.trunc||(Math.trunc=function(e){return e<0?Math.ceil(e):Math.floor(e)}),Number.isInteger||(Number.isInteger=function(e){return K(e)&&isFinite(e)&&Math.floor(e)===e})
var Dt="0123456789abcdef"
class Bt{constructor(e){if(this.bytes=e,16!==e.length)throw new TypeError("not 128-bit length")}static fromFieldsV7(e,t,n,r){if(!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(n)||!Number.isInteger(r)||e<0||t<0||n<0||r<0||e>0xffffffffffff||t>4095||n>1073741823||r>4294967295)throw new RangeError("invalid field value")
var i=new Uint8Array(16)
return i[0]=e/Math.pow(2,40),i[1]=e/Math.pow(2,32),i[2]=e/Math.pow(2,24),i[3]=e/Math.pow(2,16),i[4]=e/Math.pow(2,8),i[5]=e,i[6]=112|t>>>8,i[7]=t,i[8]=128|n>>>24,i[9]=n>>>16,i[10]=n>>>8,i[11]=n,i[12]=r>>>24,i[13]=r>>>16,i[14]=r>>>8,i[15]=r,new Bt(i)}toString(){for(var e="",t=0;t<this.bytes.length;t++)e=e+Dt.charAt(this.bytes[t]>>>4)+Dt.charAt(15&this.bytes[t]),3!==t&&5!==t&&7!==t&&9!==t||(e+="-")
if(36!==e.length)throw new Error("Invalid UUIDv7 was generated")
return e}clone(){return new Bt(this.bytes.slice(0))}equals(e){return 0===this.compareTo(e)}compareTo(e){for(var t=0;t<16;t++){var n=this.bytes[t]-e.bytes[t]
if(0!==n)return Math.sign(n)}return 0}}class qt{constructor(){this._timestamp=0,this._counter=0,this._random=new Gt}generate(){var e=this.generateOrAbort()
if(G(e)){this._timestamp=0
var t=this.generateOrAbort()
if(G(t))throw new Error("Could not generate UUID after timestamp reset")
return t}return e}generateOrAbort(){var e=Date.now()
if(e>this._timestamp)this._timestamp=e,this._resetCounter()
else{if(!(e+1e4>this._timestamp))return
this._counter++,this._counter>4398046511103&&(this._timestamp++,this._resetCounter())}return Bt.fromFieldsV7(this._timestamp,Math.trunc(this._counter/Math.pow(2,30)),this._counter&Math.pow(2,30)-1,this._random.nextUint32())}_resetCounter(){this._counter=1024*this._random.nextUint32()+(1023&this._random.nextUint32())}}var Ht,Ut=e=>{if("undefined"!=typeof UUIDV7_DENY_WEAK_RNG&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available")
for(var t=0;t<e.length;t++)e[t]=65536*Math.trunc(65536*Math.random())+Math.trunc(65536*Math.random())
return e}
p&&!G(p.crypto)&&crypto.getRandomValues&&(Ut=e=>crypto.getRandomValues(e))
class Gt{constructor(){this._buffer=new Uint32Array(8),this._cursor=1/0}nextUint32(){return this._cursor>=this._buffer.length&&(Ut(this._buffer),this._cursor=0),this._buffer[this._cursor++]}}var Wt=()=>zt().toString(),zt=()=>(Ht||(Ht=new qt)).generate(),Vt="",Qt=/[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i
var Kt={_is_supported:()=>!!b,_error:function(e){Z.error("cookieStore error: "+e)},_get:function(e){if(b){try{for(var t=e+"=",n=b.cookie.split(";").filter(e=>e.length),r=0;r<n.length;r++){for(var i=n[r];" "==i.charAt(0);)i=i.substring(1,i.length)
if(0===i.indexOf(t))return decodeURIComponent(i.substring(t.length,i.length))}}catch(e){}return null}},_parse:function(e){var t
try{t=JSON.parse(Kt._get(e))||{}}catch(e){}return t},_set:function(e,t,n,r,i){if(b)try{var s="",o="",a=function(e,t){if(t){var n=function(e,t){if(void 0===t&&(t=b),Vt)return Vt
if(!t)return""
if(["localhost","127.0.0.1"].includes(e))return""
for(var n=e.split("."),r=Math.min(n.length,8),i="dmn_chk_"+Wt();!Vt&&r--;){var s=n.slice(r).join("."),o=i+"=1;domain=."+s+";path=/"
t.cookie=o+";max-age=3",t.cookie.includes(i)&&(t.cookie=o+";max-age=0",Vt=s)}return Vt}(e)
if(!n){var r=(e=>{var t=e.match(Qt)
return t?t[0]:""})(e)
r!==n&&Z.info("Warning: cookie subdomain discovery mismatch",r,n),n=r}return n?"; domain=."+n:""}return""}(b.location.hostname,r)
if(n){var l=new Date
l.setTime(l.getTime()+24*n*60*60*1e3),s="; expires="+l.toUTCString()}i&&(o="; secure")
var c=e+"="+encodeURIComponent(JSON.stringify(t))+s+"; SameSite=Lax; path=/"+a+o
return c.length>3686.4&&Z.warn("cookieStore warning: large cookie, len="+c.length),b.cookie=c,c}catch(e){return}},_remove:function(e,t){if(null!=b&&b.cookie)try{Kt._set(e,"",-1,t)}catch(e){return}}},Jt=null,Yt={_is_supported:function(){if(!V(Jt))return Jt
var e=!0
if(G(p))e=!1
else try{var t="__mplssupport__"
Yt._set(t,"xyz"),'"xyz"'!==Yt._get(t)&&(e=!1),Yt._remove(t)}catch(t){e=!1}return e||Z.error("localStorage unsupported; falling back to cookie store"),Jt=e,e},_error:function(e){Z.error("localStorage error: "+e)},_get:function(e){try{return null==p?void 0:p.localStorage.getItem(e)}catch(e){Yt._error(e)}return null},_parse:function(e){try{return JSON.parse(Yt._get(e))||{}}catch(e){}return null},_set:function(e,t){try{null==p||p.localStorage.setItem(e,JSON.stringify(t))}catch(e){Yt._error(e)}},_remove:function(e){try{null==p||p.localStorage.removeItem(e)}catch(e){Yt._error(e)}}},Xt=["distinct_id",Oe,Re,Ye,Je],Zt=f({},Yt,{_parse:function(e){try{var t={}
try{t=Kt._parse(e)||{}}catch(e){}var n=ie(t,JSON.parse(Yt._get(e)||"{}"))
return Yt._set(e,n),n}catch(e){}return null},_set:function(e,t,n,r,i,s){try{Yt._set(e,t,void 0,void 0,s)
var o={}
Xt.forEach(e=>{t[e]&&(o[e]=t[e])}),Object.keys(o).length&&Kt._set(e,o,n,r,i,s)}catch(e){Yt._error(e)}},_remove:function(e,t){try{null==p||p.localStorage.removeItem(e),Kt._remove(e,t)}catch(e){Yt._error(e)}}}),en={},tn={_is_supported:function(){return!0},_error:function(e){Z.error("memoryStorage error: "+e)},_get:function(e){return en[e]||null},_parse:function(e){return en[e]||null},_set:function(e,t){en[e]=t},_remove:function(e){delete en[e]}},nn=null,rn={_is_supported:function(){if(!V(nn))return nn
if(nn=!0,G(p))nn=!1
else try{var e="__support__"
rn._set(e,"xyz"),'"xyz"'!==rn._get(e)&&(nn=!1),rn._remove(e)}catch(e){nn=!1}return nn},_error:function(e){Z.error("sessionStorage error: ",e)},_get:function(e){try{return null==p?void 0:p.sessionStorage.getItem(e)}catch(e){rn._error(e)}return null},_parse:function(e){try{return JSON.parse(rn._get(e))||null}catch(e){}return null},_set:function(e,t){try{null==p||p.sessionStorage.setItem(e,JSON.stringify(t))}catch(e){rn._error(e)}},_remove:function(e){try{null==p||p.sessionStorage.removeItem(e)}catch(e){rn._error(e)}}},sn=function(e){return e[e.PENDING=-1]="PENDING",e[e.DENIED=0]="DENIED",e[e.GRANTED=1]="GRANTED",e}({})
class on{constructor(e){this._instance=e}get _config(){return this._instance.config}get consent(){return this._getDnt()?sn.DENIED:this._storedConsent}isOptedOut(){return"always"===this._config.cookieless_mode||this.consent===sn.DENIED||this.consent===sn.PENDING&&(this._config.opt_out_capturing_by_default||"on_reject"===this._config.cookieless_mode)}isOptedIn(){return!this.isOptedOut()}isExplicitlyOptedOut(){return this.consent===sn.DENIED}optInOut(e){this._storage._set(this._storageKey,e?1:0,this._config.cookie_expiration,this._config.cross_subdomain_cookie,this._config.secure_cookie)}reset(){this._storage._remove(this._storageKey,this._config.cross_subdomain_cookie)}get _storageKey(){var{token:e,opt_out_capturing_cookie_prefix:t,consent_persistence_name:n}=this._instance.config
return n||(t?t+e:"__ph_opt_in_out_"+e)}get _storedConsent(){var e=this._storage._get(this._storageKey)
return"1"===e?sn.GRANTED:"0"===e?sn.DENIED:sn.PENDING}get _storage(){if(!this._persistentStore){var e=this._config.opt_out_capturing_persistence_type
this._persistentStore="localStorage"===e?Yt:Kt
var t="localStorage"===e?Kt:Yt
t._get(this._storageKey)&&(this._persistentStore._get(this._storageKey)||this.optInOut("1"===t._get(this._storageKey)),t._remove(this._storageKey,this._config.cross_subdomain_cookie))}return this._persistentStore}_getDnt(){return!!this._config.respect_dnt&&!!fe([null==y?void 0:y.doNotTrack,null==y?void 0:y.msDoNotTrack,C.doNotTrack],e=>O([!0,1,"1","yes"],e))}}var an=ee("[Dead Clicks]"),ln=()=>!0,cn=e=>{var t,n=!(null==(t=e.instance.persistence)||!t.get_property(Se)),r=e.instance.config.capture_dead_clicks
return J(r)?r:n}
class un{get lazyLoadedDeadClicksAutocapture(){return this._lazyLoadedDeadClicksAutocapture}constructor(e,t,n){this.instance=e,this.isEnabled=t,this.onCapture=n,this.startIfEnabled()}onRemoteConfig(e){this.instance.persistence&&this.instance.persistence.register({[Se]:null==e?void 0:e.captureDeadClicks}),this.startIfEnabled()}startIfEnabled(){this.isEnabled(this)&&this._loadScript(()=>{this._start()})}_loadScript(e){var t,n
null!=(t=C.__PosthogExtensions__)&&t.initDeadClicksAutocapture&&e(),null==(n=C.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this.instance,"dead-clicks-autocapture",t=>{t?an.error("failed to load script",t):e()})}_start(){var e
if(b){if(!this._lazyLoadedDeadClicksAutocapture&&null!=(e=C.__PosthogExtensions__)&&e.initDeadClicksAutocapture){var t=H(this.instance.config.capture_dead_clicks)?this.instance.config.capture_dead_clicks:{}
t.__onCapture=this.onCapture,this._lazyLoadedDeadClicksAutocapture=C.__PosthogExtensions__.initDeadClicksAutocapture(this.instance,t),this._lazyLoadedDeadClicksAutocapture.start(b),an.info("starting...")}}else an.error("`document` not found. Cannot start.")}stop(){this._lazyLoadedDeadClicksAutocapture&&(this._lazyLoadedDeadClicksAutocapture.stop(),this._lazyLoadedDeadClicksAutocapture=void 0,an.info("stopping..."))}}function dn(e,t,n,r,i){return t>n&&(Z.warn("min cannot be greater than max."),t=n),K(e)?e>n?(r&&Z.warn(r+" cannot be  greater than max: "+n+". Using max value instead."),n):e<t?(r&&Z.warn(r+" cannot be less than min: "+t+". Using min value instead."),t):e:(r&&Z.warn(r+" must be a number. using max or fallback. max: "+n+", fallback: "+i),dn(i||n,t,n,r))}class fn{constructor(e){this._buckets={},this._refillBuckets=()=>{Object.keys(this._buckets).forEach(e=>{var t=this._getBucket(e)+this._refillRate
t>=this._bucketSize?delete this._buckets[e]:this._setBucket(e,t)})},this._getBucket=e=>this._buckets[String(e)],this._setBucket=(e,t)=>{this._buckets[String(e)]=t},this.consumeRateLimit=e=>{var t,n=null!==(t=this._getBucket(e))&&void 0!==t?t:this._bucketSize
if(0===(n=Math.max(n-1,0)))return!0
this._setBucket(e,n)
var r,i=0===n
return i&&(null==(r=this._onBucketRateLimited)||r.call(this,e)),i},this._options=e,this._onBucketRateLimited=this._options._onBucketRateLimited,this._bucketSize=dn(this._options.bucketSize,0,100,"rate limiter bucket size"),this._refillRate=dn(this._options.refillRate,0,this._bucketSize,"rate limiter refill rate"),this._refillInterval=dn(this._options.refillInterval,0,864e5,"rate limiter refill interval"),setInterval(()=>{this._refillBuckets()},this._refillInterval)}}var hn=ee("[ExceptionAutocapture]")
class pn{constructor(e){var t,n,r
this._startCapturing=()=>{var e
if(p&&this.isEnabled&&null!=(e=C.__PosthogExtensions__)&&e.errorWrappingFunctions){var t=C.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,n=C.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,r=C.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError
try{!this._unwrapOnError&&this._config.capture_unhandled_errors&&(this._unwrapOnError=t(this.captureException.bind(this))),!this._unwrapUnhandledRejection&&this._config.capture_unhandled_rejections&&(this._unwrapUnhandledRejection=n(this.captureException.bind(this))),!this._unwrapConsoleError&&this._config.capture_console_errors&&(this._unwrapConsoleError=r(this.captureException.bind(this)))}catch(e){hn.error("failed to start",e),this._stopCapturing()}}},this._instance=e,this._remoteEnabled=!(null==(t=this._instance.persistence)||!t.props[ye]),this._config=this._requiredConfig(),this._rateLimiter=new fn({refillRate:null!==(n=this._instance.config.error_tracking.__exceptionRateLimiterRefillRate)&&void 0!==n?n:1,bucketSize:null!==(r=this._instance.config.error_tracking.__exceptionRateLimiterBucketSize)&&void 0!==r?r:10,refillInterval:1e4}),this.startIfEnabled()}_requiredConfig(){var e=this._instance.config.capture_exceptions,t={capture_unhandled_errors:!1,capture_unhandled_rejections:!1,capture_console_errors:!1}
return H(e)?t=f({},t,e):(G(e)?this._remoteEnabled:e)&&(t=f({},t,{capture_unhandled_errors:!0,capture_unhandled_rejections:!0})),t}get isEnabled(){return this._config.capture_console_errors||this._config.capture_unhandled_errors||this._config.capture_unhandled_rejections}startIfEnabled(){this.isEnabled&&(hn.info("enabled"),this._loadScript(this._startCapturing))}_loadScript(e){var t,n
null!=(t=C.__PosthogExtensions__)&&t.errorWrappingFunctions&&e(),null==(n=C.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"exception-autocapture",t=>{if(t)return hn.error("failed to load script",t)
e()})}_stopCapturing(){var e,t,n
null==(e=this._unwrapOnError)||e.call(this),this._unwrapOnError=void 0,null==(t=this._unwrapUnhandledRejection)||t.call(this),this._unwrapUnhandledRejection=void 0,null==(n=this._unwrapConsoleError)||n.call(this),this._unwrapConsoleError=void 0}onRemoteConfig(e){var t=e.autocaptureExceptions
this._remoteEnabled=!!t||!1,this._config=this._requiredConfig(),this._instance.persistence&&this._instance.persistence.register({[ye]:this._remoteEnabled}),this.startIfEnabled()}captureException(e){var t,n=this._instance.requestRouter.endpointFor("ui")
e.$exception_personURL=n+"/project/"+this._instance.config.token+"/person/"+this._instance.get_distinct_id()
var r=null!==(t=e.$exception_list[0].type)&&void 0!==t?t:"Exception"
this._rateLimiter.consumeRateLimit(r)?hn.info("Skipping exception capture because of client rate limiting.",{exception:e.$exception_list[0].type}):this._instance.exceptions.sendExceptionEvent(e)}}function gn(e){return!G(Event)&&_n(e,Event)}function _n(e,t){try{return e instanceof t}catch(e){return!1}}function vn(e){switch(Object.prototype.toString.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":case"[object DOMError]":return!0
default:return _n(e,Error)}}function mn(e,t){return Object.prototype.toString.call(e)==="[object "+t+"]"}function yn(e){return mn(e,"DOMError")}var bn=/\(error: (.*)\)/,wn="?"
function kn(e,t,n,r){var i={platform:"web:javascript",filename:e,function:"<anonymous>"===t?wn:t,in_app:!0}
return G(n)||(i.lineno=n),G(r)||(i.colno=r),i}var Sn=/^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,xn=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,En=/\((\S*)(?::(\d+))(?::(\d+))\)/,Cn=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,Tn=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,Pn=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=t.sort((e,t)=>e[0]-t[0]).map(e=>e[1])
return function(e,t){void 0===t&&(t=0)
for(var n=[],i=e.split("\n"),s=t;s<i.length;s++){var o=i[s]
if(!(o.length>1024)){var a=bn.test(o)?o.replace(bn,"$1"):o
if(!a.match(/\S*Error: /)){for(var l of r){var c=l(a)
if(c){n.push(c)
break}}if(n.length>=50)break}}}return function(e){if(!e.length)return[]
var t=Array.from(e)
return t.reverse(),t.slice(0,50).map(e=>f({},e,{filename:e.filename||$n(t).filename,function:e.function||wn}))}(n)}}([30,e=>{var t=Sn.exec(e)
if(t){var[,n,r,i]=t
return kn(n,wn,+r,+i)}var s=xn.exec(e)
if(s){if(s[2]&&0===s[2].indexOf("eval")){var o=En.exec(s[2])
o&&(s[2]=o[1],s[3]=o[2],s[4]=o[3])}var[a,l]=On(s[1]||wn,s[2])
return kn(l,a,s[3]?+s[3]:void 0,s[4]?+s[4]:void 0)}}],[50,e=>{var t=Cn.exec(e)
if(t){if(t[3]&&t[3].indexOf(" > eval")>-1){var n=Tn.exec(t[3])
n&&(t[1]=t[1]||"eval",t[3]=n[1],t[4]=n[2],t[5]="")}var r=t[3],i=t[1]||wn
return[i,r]=On(i,r),kn(r,i,t[4]?+t[4]:void 0,t[5]?+t[5]:void 0)}}])
function $n(e){return e[e.length-1]||{}}var Ln,In,Mn,On=(e,t)=>{var n=-1!==e.indexOf("safari-extension"),r=-1!==e.indexOf("safari-web-extension")
return n||r?[-1!==e.indexOf("@")?e.split("@")[0]:wn,n?"safari-extension:"+t:"safari-web-extension:"+t]:[e,t]},Rn=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
function Fn(e,t){void 0===t&&(t=0)
var n=e.stacktrace||e.stack||"",r=function(e){return e&&An.test(e.message)?1:0}(e)
try{var i=Pn,s=function(e,t){var n=function(e){var t=globalThis._posthogChunkIds
if(!t)return{}
var n=Object.keys(t)
return Mn&&n.length===In||(In=n.length,Mn=n.reduce((n,r)=>{Ln||(Ln={})
var i=Ln[r]
if(i)n[i[0]]=i[1]
else for(var s=e(r),o=s.length-1;o>=0;o--){var a=s[o],l=null==a?void 0:a.filename,c=t[r]
if(l&&c){n[l]=c,Ln[r]=[l,c]
break}}return n},{})),Mn}(t)
return e.forEach(e=>{e.filename&&(e.chunk_id=n[e.filename])}),e}(i(n,r),i)
return s.slice(0,s.length-t)}catch(e){}return[]}var An=/Minified React error #\d+;/i
function jn(e,t){var n=function(e,t){var n,r,i=Fn(e),s=null===(n=null==t?void 0:t.handled)||void 0===n||n,o=null!==(r=null==t?void 0:t.synthetic)&&void 0!==r&&r
return{type:null!=t&&t.overrideExceptionType?t.overrideExceptionType:e.name,value:function(e){var t=e.message
return t.error&&"string"==typeof t.error.message?String(t.error.message):String(t)}(e),stacktrace:{frames:i,type:"raw"},mechanism:{handled:s,synthetic:o}}}(e,t)
return e.cause&&vn(e.cause)&&e.cause!==e?[n,...jn(e.cause,{handled:null==t?void 0:t.handled,synthetic:null==t?void 0:t.synthetic})]:[n]}function Nn(e,t){return{$exception_list:jn(e,t),$exception_level:"error"}}function Dn(e,t){var n,r,i,s=null===(n=null==t?void 0:t.handled)||void 0===n||n,o=null===(r=null==t?void 0:t.synthetic)||void 0===r||r,a={type:null!=t&&t.overrideExceptionType?t.overrideExceptionType:null!==(i=null==t?void 0:t.defaultExceptionType)&&void 0!==i?i:"Error",value:e||(null==t?void 0:t.defaultExceptionMessage),mechanism:{handled:s,synthetic:o}}
if(null!=t&&t.syntheticException){var l=Fn(t.syntheticException,1)
l.length&&(a.stacktrace={frames:l,type:"raw"})}return{$exception_list:[a],$exception_level:"error"}}function Bn(e){return W(e)&&!z(e)&&M.indexOf(e)>=0}function qn(e,t){var{error:n,event:r}=e,i={$exception_list:[]},s=n||r
if(yn(s)||function(e){return mn(e,"DOMException")}(s)){var o=s
if(function(e){return"stack"in e}(s))i=Nn(s,t)
else{var a=o.name||(yn(o)?"DOMError":"DOMException"),l=o.message?a+": "+o.message:a
i=Dn(l,f({},t,{overrideExceptionType:yn(o)?"DOMError":"DOMException",defaultExceptionMessage:l}))}return"code"in o&&(i.$exception_DOMException_code=""+o.code),i}if(function(e){return mn(e,"ErrorEvent")}(s)&&s.error)return Nn(s.error,t)
if(vn(s))return Nn(s,t)
if(function(e){return mn(e,"Object")}(s)||gn(s))return function(e,t){var n,r,i=null===(n=null==t?void 0:t.handled)||void 0===n||n,s=null===(r=null==t?void 0:t.synthetic)||void 0===r||r,o=null!=t&&t.overrideExceptionType?t.overrideExceptionType:gn(e)?e.constructor.name:"Error",a="Non-Error 'exception' captured with keys: "+function(e,t){void 0===t&&(t=40)
var n=Object.keys(e)
if(n.sort(),!n.length)return"[object has no keys]"
for(var r=n.length;r>0;r--){var i=n.slice(0,r).join(", ")
if(!(i.length>t))return r===n.length||i.length<=t?i:i.slice(0,t)+"..."}return""}(e),l={type:o,value:a,mechanism:{handled:i,synthetic:s}}
if(null!=t&&t.syntheticException){var c=Fn(null==t?void 0:t.syntheticException,1)
c.length&&(l.stacktrace={frames:c,type:"raw"})}return{$exception_list:[l],$exception_level:Bn(e.level)?e.level:"error"}}(s,t)
if(G(n)&&W(r)){var c="Error",u=r,d=r.match(Rn)
return d&&(c=d[1],u=d[2]),Dn(u,f({},t,{overrideExceptionType:c,defaultExceptionMessage:u}))}return Dn(s,t)}function Hn(e,t,n){try{if(!(t in e))return()=>{}
var r=e[t],i=n(r)
return q(i)&&(i.prototype=i.prototype||{},Object.defineProperties(i,{__posthog_wrapped__:{enumerable:!1,value:!0}})),e[t]=i,()=>{e[t]=r}}catch(e){return()=>{}}}class Un{constructor(e){var t
this._instance=e,this._lastPathname=(null==p||null==(t=p.location)?void 0:t.pathname)||""}get isEnabled(){return"history_change"===this._instance.config.capture_pageview}startIfEnabled(){this.isEnabled&&(Z.info("History API monitoring enabled, starting..."),this.monitorHistoryChanges())}stop(){this._popstateListener&&this._popstateListener(),this._popstateListener=void 0,Z.info("History API monitoring stopped")}monitorHistoryChanges(){var e,t
if(p&&p.history){var n=this
null!=(e=p.history.pushState)&&e.__posthog_wrapped__||Hn(p.history,"pushState",e=>function(t,r,i){e.call(this,t,r,i),n._capturePageview("pushState")}),null!=(t=p.history.replaceState)&&t.__posthog_wrapped__||Hn(p.history,"replaceState",e=>function(t,r,i){e.call(this,t,r,i),n._capturePageview("replaceState")}),this._setupPopstateListener()}}_capturePageview(e){try{var t,n=null==p||null==(t=p.location)?void 0:t.pathname
if(!n)return
n!==this._lastPathname&&this.isEnabled&&this._instance.capture("$pageview",{navigation_type:e}),this._lastPathname=n}catch(t){Z.error("Error capturing "+e+" pageview",t)}}_setupPopstateListener(){if(!this._popstateListener){var e=()=>{this._capturePageview("popstate")}
he(p,"popstate",e),this._popstateListener=()=>{p&&p.removeEventListener("popstate",e)}}}}function Gn(e){var t,n
return(null==(t=JSON.stringify(e,(n=[],function(e,t){if(H(t)){for(;n.length>0&&n[n.length-1]!==this;)n.pop()
return n.includes(t)?"[Circular]":(n.push(t),t)}return t})))?void 0:t.length)||0}function Wn(e,t){if(void 0===t&&(t=6606028.8),e.size>=t&&e.data.length>1){var n=Math.floor(e.data.length/2),r=e.data.slice(0,n),i=e.data.slice(n)
return[Wn({size:Gn(r),data:r,sessionId:e.sessionId,windowId:e.windowId}),Wn({size:Gn(i),data:i,sessionId:e.sessionId,windowId:e.windowId})].flatMap(e=>e)}return[e]}var zn=(e=>(e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin",e))(zn||{}),Vn=(e=>(e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration",e[e.Selection=14]="Selection",e[e.AdoptedStyleSheet=15]="AdoptedStyleSheet",e[e.CustomElement=16]="CustomElement",e))(Vn||{}),Qn="[SessionRecording]",Kn="redacted",Jn={initiatorTypes:["audio","beacon","body","css","early-hint","embed","fetch","frame","iframe","icon","image","img","input","link","navigation","object","ping","script","track","video","xmlhttprequest"],maskRequestFn:e=>e,recordHeaders:!1,recordBody:!1,recordInitialRequests:!1,recordPerformance:!1,performanceEntryTypeToObserve:["first-input","navigation","paint","resource"],payloadSizeLimitBytes:1e6,payloadHostDenyList:[".lr-ingest.io",".ingest.sentry.io",".clarity.ms","analytics.google.com","bam.nr-data.net"]},Yn=["authorization","x-forwarded-for","authorization","cookie","set-cookie","x-api-key","x-real-ip","remote-addr","forwarded","proxy-authorization","x-csrf-token","x-csrftoken","x-xsrf-token"],Xn=["password","secret","passwd","api_key","apikey","auth","credentials","mysql_pwd","privatekey","private_key","token"],Zn=["/s/","/e/","/i/"]
function er(e,t,n,r){if(Q(e))return e
var i=(null==t?void 0:t["content-length"])||function(e){return new Blob([e]).size}(e)
return W(i)&&(i=parseInt(i)),i>n?Qn+" "+r+" body too large to record ("+i+" bytes)":e}function tr(e,t){if(Q(e))return e
var n=e
return kt(n,!1)||(n=Qn+" "+t+" body "+Kn),re(Xn,e=>{var r,i
null!=(r=n)&&r.length&&-1!==(null==(i=n)?void 0:i.indexOf(e))&&(n=Qn+" "+t+" body "+Kn+" as might contain: "+e)}),n}var nr=(e,t)=>{var n,r,i,s={payloadSizeLimitBytes:Jn.payloadSizeLimitBytes,performanceEntryTypeToObserve:[...Jn.performanceEntryTypeToObserve],payloadHostDenyList:[...t.payloadHostDenyList||[],...Jn.payloadHostDenyList]},o=!1!==e.session_recording.recordHeaders&&t.recordHeaders,a=!1!==e.session_recording.recordBody&&t.recordBody,l=!1!==e.capture_performance&&t.recordPerformance,c=(n=s,i=Math.min(1e6,null!==(r=n.payloadSizeLimitBytes)&&void 0!==r?r:1e6),e=>(null!=e&&e.requestBody&&(e.requestBody=er(e.requestBody,e.requestHeaders,i,"Request")),null!=e&&e.responseBody&&(e.responseBody=er(e.responseBody,e.responseHeaders,i,"Response")),e)),u=t=>{return c(((e,t)=>{var n,r=Lt(e.name),i=0===t.indexOf("http")?null==(n=Lt(t))?void 0:n.pathname:t
"/"===i&&(i="")
var s=null==r?void 0:r.pathname.replace(i||"","")
if(!(r&&s&&Zn.some(e=>0===s.indexOf(e))))return e})((r=(n=t).requestHeaders,Q(r)||re(Object.keys(null!=r?r:{}),e=>{Yn.includes(e.toLowerCase())&&(r[e]=Kn)}),n),e.api_host))
var n,r},d=q(e.session_recording.maskNetworkRequestFn)
return d&&q(e.session_recording.maskCapturedNetworkRequestFn)&&Z.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."),d&&(e.session_recording.maskCapturedNetworkRequestFn=t=>{var n=e.session_recording.maskNetworkRequestFn({url:t.name})
return f({},t,{name:null==n?void 0:n.url})}),s.maskRequestFn=q(e.session_recording.maskCapturedNetworkRequestFn)?t=>{var n,r=u(t)
return r&&null!==(n=null==e.session_recording.maskCapturedNetworkRequestFn?void 0:e.session_recording.maskCapturedNetworkRequestFn(r))&&void 0!==n?n:void 0}:e=>function(e){if(!G(e))return e.requestBody=tr(e.requestBody,"Request"),e.responseBody=tr(e.responseBody,"Response"),e}(u(e)),f({},Jn,s,{recordHeaders:o,recordBody:a,recordPerformance:l,recordInitialRequests:l})}
class rr{constructor(e,t){var n,r
void 0===t&&(t={}),this._loggedTracker={},this._onNodeRateLimited=e=>{if(!this._loggedTracker[e]){var t,n
this._loggedTracker[e]=!0
var r=this._getNode(e)
null==(t=(n=this._options).onBlockedNode)||t.call(n,e,r)}},this._getNodeOrRelevantParent=e=>{var t=this._getNode(e)
if("svg"!==(null==t?void 0:t.nodeName)&&t instanceof Element){var n=t.closest("svg")
if(n)return[this._rrweb.mirror.getId(n),n]}return[e,t]},this._getNode=e=>this._rrweb.mirror.getNode(e),this._numberOfChanges=e=>{var t,n,r,i,s,o,a,l
return(null!==(t=null==(n=e.removes)?void 0:n.length)&&void 0!==t?t:0)+(null!==(r=null==(i=e.attributes)?void 0:i.length)&&void 0!==r?r:0)+(null!==(s=null==(o=e.texts)?void 0:o.length)&&void 0!==s?s:0)+(null!==(a=null==(l=e.adds)?void 0:l.length)&&void 0!==a?a:0)},this.throttleMutations=e=>{if(3!==e.type||0!==e.data.source)return e
var t=e.data,n=this._numberOfChanges(t)
t.attributes&&(t.attributes=t.attributes.filter(e=>{var[t]=this._getNodeOrRelevantParent(e.id)
return!this._rateLimiter.consumeRateLimit(t)&&e}))
var r=this._numberOfChanges(t)
return 0!==r||n===r?e:void 0},this._rrweb=e,this._options=t,this._rateLimiter=new fn({bucketSize:null!==(n=this._options.bucketSize)&&void 0!==n?n:100,refillRate:null!==(r=this._options.refillRate)&&void 0!==r?r:10,refillInterval:1e3,_onBucketRateLimited:this._onNodeRateLimited})}}var ir=Uint8Array,sr=Uint16Array,or=Uint32Array,ar=new ir([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),lr=new ir([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),cr=new ir([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ur=function(e,t){for(var n=new sr(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1]
var i=new or(n[30])
for(r=1;r<30;++r)for(var s=n[r];s<n[r+1];++s)i[s]=s-n[r]<<5|r
return[n,i]},dr=ur(ar,2),fr=dr[0],hr=dr[1]
fr[28]=258,hr[258]=28
for(var pr=ur(lr,0)[1],gr=new sr(32768),_r=0;_r<32768;++_r){var vr=(43690&_r)>>>1|(21845&_r)<<1
vr=(61680&(vr=(52428&vr)>>>2|(13107&vr)<<2))>>>4|(3855&vr)<<4,gr[_r]=((65280&vr)>>>8|(255&vr)<<8)>>>1}var mr=function(e,t,n){for(var r=e.length,i=0,s=new sr(t);i<r;++i)++s[e[i]-1]
var o,a=new sr(t)
for(i=0;i<t;++i)a[i]=a[i-1]+s[i-1]<<1
for(o=new sr(r),i=0;i<r;++i)o[i]=gr[a[e[i]-1]++]>>>15-e[i]
return o},yr=new ir(288)
for(_r=0;_r<144;++_r)yr[_r]=8
for(_r=144;_r<256;++_r)yr[_r]=9
for(_r=256;_r<280;++_r)yr[_r]=7
for(_r=280;_r<288;++_r)yr[_r]=8
var br=new ir(32)
for(_r=0;_r<32;++_r)br[_r]=5
var wr=mr(yr,9),kr=mr(br,5),Sr=function(e){return(e/8|0)+(7&e&&1)},xr=function(e,t,n){(null==n||n>e.length)&&(n=e.length)
var r=new(e instanceof sr?sr:e instanceof or?or:ir)(n-t)
return r.set(e.subarray(t,n)),r},Er=function(e,t,n){n<<=7&t
var r=t/8|0
e[r]|=n,e[r+1]|=n>>>8},Cr=function(e,t,n){n<<=7&t
var r=t/8|0
e[r]|=n,e[r+1]|=n>>>8,e[r+2]|=n>>>16},Tr=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]})
var i=n.length,s=n.slice()
if(!i)return[new ir(0),0]
if(1==i){var o=new ir(n[0].s+1)
return o[n[0].s]=1,[o,1]}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001})
var a=n[0],l=n[1],c=0,u=1,d=2
for(n[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=i-1;)a=n[n[c].f<n[d].f?c++:d++],l=n[c!=u&&n[c].f<n[d].f?c++:d++],n[u++]={s:-1,f:a.f+l.f,l:a,r:l}
var f=s[0].s
for(r=1;r<i;++r)s[r].s>f&&(f=s[r].s)
var h=new sr(f+1),p=Pr(n[u-1],h,0)
if(p>t){r=0
var g=0,_=p-t,v=1<<_
for(s.sort(function(e,t){return h[t.s]-h[e.s]||e.f-t.f});r<i;++r){var m=s[r].s
if(!(h[m]>t))break
g+=v-(1<<p-h[m]),h[m]=t}for(g>>>=_;g>0;){var y=s[r].s
h[y]<t?g-=1<<t-h[y]++-1:++r}for(;r>=0&&g;--r){var b=s[r].s
h[b]==t&&(--h[b],++g)}p=t}return[new ir(h),p]},Pr=function(e,t,n){return-1==e.s?Math.max(Pr(e.l,t,n+1),Pr(e.r,t,n+1)):t[e.s]=n},$r=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new sr(++t),r=0,i=e[0],s=1,o=function(e){n[r++]=e},a=1;a<=t;++a)if(e[a]==i&&a!=t)++s
else{if(!i&&s>2){for(;s>138;s-=138)o(32754)
s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(i),--s;s>6;s-=6)o(8304)
s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(i)
s=1,i=e[a]}return[n.subarray(0,r),t]},Lr=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r]
return n},Ir=function(e,t,n){var r=n.length,i=Sr(t+2)
e[i]=255&r,e[i+1]=r>>>8,e[i+2]=255^e[i],e[i+3]=255^e[i+1]
for(var s=0;s<r;++s)e[i+s+4]=n[s]
return 8*(i+4+r)},Mr=function(e,t,n,r,i,s,o,a,l,c,u){Er(t,u++,n),++i[256]
for(var d=Tr(i,15),f=d[0],h=d[1],p=Tr(s,15),g=p[0],_=p[1],v=$r(f),m=v[0],y=v[1],b=$r(g),w=b[0],k=b[1],S=new sr(19),x=0;x<m.length;++x)S[31&m[x]]++
for(x=0;x<w.length;++x)S[31&w[x]]++
for(var E=Tr(S,7),C=E[0],T=E[1],P=19;P>4&&!C[cr[P-1]];--P);var $,L,I,M,O=c+5<<3,R=Lr(i,yr)+Lr(s,br)+o,F=Lr(i,f)+Lr(s,g)+o+14+3*P+Lr(S,C)+(2*S[16]+3*S[17]+7*S[18])
if(O<=R&&O<=F)return Ir(t,u,e.subarray(l,l+c))
if(Er(t,u,1+(F<R)),u+=2,F<R){$=mr(f,h),L=f,I=mr(g,_),M=g
var A=mr(C,T)
for(Er(t,u,y-257),Er(t,u+5,k-1),Er(t,u+10,P-4),u+=14,x=0;x<P;++x)Er(t,u+3*x,C[cr[x]])
u+=3*P
for(var j=[m,w],N=0;N<2;++N){var D=j[N]
for(x=0;x<D.length;++x){var B=31&D[x]
Er(t,u,A[B]),u+=C[B],B>15&&(Er(t,u,D[x]>>>5&127),u+=D[x]>>>12)}}}else $=wr,L=yr,I=kr,M=br
for(x=0;x<a;++x)if(r[x]>255){B=r[x]>>>18&31,Cr(t,u,$[B+257]),u+=L[B+257],B>7&&(Er(t,u,r[x]>>>23&31),u+=ar[B])
var q=31&r[x]
Cr(t,u,I[q]),u+=M[q],q>3&&(Cr(t,u,r[x]>>>5&8191),u+=lr[q])}else Cr(t,u,$[r[x]]),u+=L[r[x]]
return Cr(t,u,$[256]),u+L[256]},Or=new or([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Rr=function(){for(var e=new or(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(1&n&&3988292384)^n>>>1
e[t]=n}return e}(),Fr=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8}
function Ar(e,t){void 0===t&&(t={})
var n=function(){var e=4294967295
return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=Rr[255&n^t[r]]^n>>>8
e=n},d:function(){return 4294967295^e}}}(),r=e.length
n.p(e)
var i=function(e,t,n,r){return function(e,t,n,r,i){var s=e.length,o=new ir(r+s+5*(1+Math.floor(s/7e3))+i),a=o.subarray(r,o.length-i),l=0
if(!t||s<8)for(var c=0;c<=s;c+=65535){var u=c+65535
u<s?l=Ir(a,l,e.subarray(c,u)):(a[c]=!0,l=Ir(a,l,e.subarray(c,s)))}else{for(var d=Or[t-1],f=d>>>13,h=8191&d,p=(1<<n)-1,g=new sr(32768),_=new sr(p+1),v=Math.ceil(n/3),m=2*v,y=function(t){return(e[t]^e[t+1]<<v^e[t+2]<<m)&p},b=new or(25e3),w=new sr(288),k=new sr(32),S=0,x=0,E=(c=0,0),C=0,T=0;c<s;++c){var P=y(c),$=32767&c,L=_[P]
if(g[$]=L,_[P]=$,C<=c){var I=s-c
if((S>7e3||E>24576)&&I>423){l=Mr(e,a,0,b,w,k,x,E,T,c-T,l),E=S=x=0,T=c
for(var M=0;M<286;++M)w[M]=0
for(M=0;M<30;++M)k[M]=0}var O=2,R=0,F=h,A=$-L&32767
if(I>2&&P==y(c-A))for(var j=Math.min(f,I)-1,N=Math.min(32767,c),D=Math.min(258,I);A<=N&&--F&&$!=L;){if(e[c+O]==e[c+O-A]){for(var B=0;B<D&&e[c+B]==e[c+B-A];++B);if(B>O){if(O=B,R=A,B>j)break
var q=Math.min(A,B-2),H=0
for(M=0;M<q;++M){var U=c-A+M+32768&32767,G=U-g[U]+32768&32767
G>H&&(H=G,L=U)}}}A+=($=L)-(L=g[$])+32768&32767}if(R){b[E++]=268435456|hr[O]<<18|pr[R]
var W=31&hr[O],z=31&pr[R]
x+=ar[W]+lr[z],++w[257+W],++k[z],C=c+O,++S}else b[E++]=e[c],++w[e[c]]}}l=Mr(e,a,!0,b,w,k,x,E,T,c-T,l)}return xr(o,0,r+Sr(l)+i)}(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,n,r)}(e,t,function(e){return 10+(e.filename&&e.filename.length+1||0)}(t),8),s=i.length
return function(e,t){var n=t.filename
if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:9==t.level?2:0,e[9]=3,0!=t.mtime&&Fr(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8
for(var r=0;r<=n.length;++r)e[r+10]=n.charCodeAt(r)}}(i,t),Fr(i,s-8,n.d()),Fr(i,s-4,r),i}function jr(e,t){var n=e.length
if("undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e)
for(var r=new ir(e.length+(e.length>>>1)),i=0,s=function(e){r[i++]=e},o=0;o<n;++o){if(i+5>r.length){var a=new ir(i+8+(n-o<<1))
a.set(r),r=a}var l=e.charCodeAt(o)
l<128||t?s(l):l<2048?(s(192|l>>>6),s(128|63&l)):l>55295&&l<57344?(s(240|(l=65536+(1047552&l)|1023&e.charCodeAt(++o))>>>18),s(128|l>>>12&63),s(128|l>>>6&63),s(128|63&l)):(s(224|l>>>12),s(128|l>>>6&63),s(128|63&l))}return xr(r,0,i)}var Nr="disabled",Dr="sampled",Br="active",qr="buffering",Hr="paused",Ur="trigger",Gr=Ur+"_activated",Wr=Ur+"_pending",zr=Ur+"_"+Nr
function Vr(e,t){return t.some(t=>"regex"===t.matching&&new RegExp(t.url).test(e))}class Qr{constructor(e){this._matchers=e}triggerStatus(e){var t=this._matchers.map(t=>t.triggerStatus(e))
return t.includes(Gr)?Gr:t.includes(Wr)?Wr:zr}stop(){this._matchers.forEach(e=>e.stop())}}class Kr{constructor(e){this._matchers=e}triggerStatus(e){var t=new Set
for(var n of this._matchers)t.add(n.triggerStatus(e))
switch(t.delete(zr),t.size){case 0:return zr
case 1:return Array.from(t)[0]
default:return Wr}}stop(){this._matchers.forEach(e=>e.stop())}}class Jr{triggerStatus(){return Wr}stop(){}}class Yr{constructor(e){this._urlTriggers=[],this._urlBlocklist=[],this.urlBlocked=!1,this._instance=e}onRemoteConfig(e){var t,n
this._urlTriggers=(null==(t=e.sessionRecording)?void 0:t.urlTriggers)||[],this._urlBlocklist=(null==(n=e.sessionRecording)?void 0:n.urlBlocklist)||[]}_urlTriggerStatus(e){var t
return 0===this._urlTriggers.length?zr:(null==(t=this._instance)?void 0:t.get_property(Fe))===e?Gr:Wr}triggerStatus(e){var t=this._urlTriggerStatus(e),n=t===Gr?Gr:t===Wr?Wr:zr
return this._instance.register_for_session({$sdk_debug_replay_url_trigger_status:n}),n}checkUrlTriggerConditions(e,t,n){if(void 0!==p&&p.location.href){var r=p.location.href,i=this.urlBlocked,s=Vr(r,this._urlBlocklist)
i&&s||(s&&!i?e():!s&&i&&t(),Vr(r,this._urlTriggers)&&n("url"))}}stop(){}}class Xr{constructor(e){this.linkedFlag=null,this.linkedFlagSeen=!1,this._flaglistenerCleanup=()=>{},this._instance=e}triggerStatus(){var e=Wr
return Q(this.linkedFlag)&&(e=zr),this.linkedFlagSeen&&(e=Gr),this._instance.register_for_session({$sdk_debug_replay_linked_flag_trigger_status:e}),e}onRemoteConfig(e,t){var n
if(this.linkedFlag=(null==(n=e.sessionRecording)?void 0:n.linkedFlag)||null,!Q(this.linkedFlag)&&!this.linkedFlagSeen){var r=W(this.linkedFlag)?this.linkedFlag:this.linkedFlag.flag,i=W(this.linkedFlag)?null:this.linkedFlag.variant
this._flaglistenerCleanup=this._instance.onFeatureFlags((e,n)=>{var s=!1
if(H(n)&&r in n){var o=n[r]
s=J(o)?!0===o:i?o===i:!!o}this.linkedFlagSeen=s,s&&t(r,i)})}}stop(){this._flaglistenerCleanup()}}class Zr{constructor(e){this._eventTriggers=[],this._instance=e}onRemoteConfig(e){var t
this._eventTriggers=(null==(t=e.sessionRecording)?void 0:t.eventTriggers)||[]}_eventTriggerStatus(e){var t
return 0===this._eventTriggers.length?zr:(null==(t=this._instance)?void 0:t.get_property(Ae))===e?Gr:Wr}triggerStatus(e){var t=this._eventTriggerStatus(e),n=t===Gr?Gr:t===Wr?Wr:zr
return this._instance.register_for_session({$sdk_debug_replay_event_trigger_status:n}),n}stop(){}}function ei(e){return e.isRecordingEnabled?qr:Nr}function ti(e){if(!e.receivedFlags)return qr
if(!e.isRecordingEnabled)return Nr
if(e.urlTriggerMatching.urlBlocked)return Hr
var t=!0===e.isSampled,n=new Qr([e.eventTriggerMatching,e.urlTriggerMatching,e.linkedFlagMatching]).triggerStatus(e.sessionId)
return t?Dr:n===Gr?Br:n===Wr?qr:!1===e.isSampled?Nr:Br}function ni(e){if(!e.receivedFlags)return qr
if(!e.isRecordingEnabled)return Nr
if(e.urlTriggerMatching.urlBlocked)return Hr
var t=new Kr([e.eventTriggerMatching,e.urlTriggerMatching,e.linkedFlagMatching]).triggerStatus(e.sessionId),n=t!==zr,r=J(e.isSampled)
return n&&t===Wr?qr:n&&t===zr||r&&!e.isSampled?Nr:!0===e.isSampled?Dr:Br}var ri="[SessionRecording]",ii=ee(ri)
function si(){var e
return null==C||null==(e=C.__PosthogExtensions__)||null==(e=e.rrweb)?void 0:e.record}var oi=[Vn.MouseMove,Vn.MouseInteraction,Vn.Scroll,Vn.ViewportResize,Vn.Input,Vn.TouchMove,Vn.MediaInteraction,Vn.Drag],ai=e=>({rrwebMethod:e,enqueuedAt:Date.now(),attempt:1})
function li(e){return function(e){for(var t="",n=0;n<e.length;){var r=e[n++]
t+=String.fromCharCode(r)}return t}(Ar(jr(JSON.stringify(e))))}function ci(e){return e.type===zn.Custom&&"sessionIdle"===e.data.tag}class ui{get sessionId(){return this._sessionId}get _sessionIdleThresholdMilliseconds(){return this._instance.config.session_recording.session_idle_threshold_ms||3e5}get started(){return this._captureStarted}get _sessionManager(){if(!this._instance.sessionManager)throw new Error(ri+" must be started with a valid sessionManager.")
return this._instance.sessionManager}get _fullSnapshotIntervalMillis(){var e,t
return this._triggerMatching.triggerStatus(this.sessionId)===Wr?6e4:null!==(e=null==(t=this._instance.config.session_recording)?void 0:t.full_snapshot_interval_millis)&&void 0!==e?e:3e5}get _isSampled(){var e=this._instance.get_property(Re)
return J(e)?e:null}get _sessionDuration(){var e,t,n=null==(e=this._buffer)?void 0:e.data[(null==(t=this._buffer)?void 0:t.data.length)-1],{sessionStartTimestamp:r}=this._sessionManager.checkAndGetSessionAndWindowId(!0)
return n?n.timestamp-r:null}get _isRecordingEnabled(){var e=!!this._instance.get_property(Ee),t=!this._instance.config.disable_session_recording
return p&&e&&t}get _isConsoleLogCaptureEnabled(){var e=!!this._instance.get_property(Ce),t=this._instance.config.enable_recording_console_log
return null!=t?t:e}get _canvasRecording(){var e,t,n,r,i,s,o=this._instance.config.session_recording.captureCanvas,a=this._instance.get_property($e),l=null!==(e=null!==(t=null==o?void 0:o.recordCanvas)&&void 0!==t?t:null==a?void 0:a.enabled)&&void 0!==e&&e,c=null!==(n=null!==(r=null==o?void 0:o.canvasFps)&&void 0!==r?r:null==a?void 0:a.fps)&&void 0!==n?n:4,u=null!==(i=null!==(s=null==o?void 0:o.canvasQuality)&&void 0!==s?s:null==a?void 0:a.quality)&&void 0!==i?i:.4
if("string"==typeof u){var d=parseFloat(u)
u=isNaN(d)?.4:d}return{enabled:l,fps:dn(c,0,12,"canvas recording fps",4),quality:dn(u,0,1,"canvas recording quality",.4)}}get _networkPayloadCapture(){var e,t,n=this._instance.get_property(Te),r={recordHeaders:null==(e=this._instance.config.session_recording)?void 0:e.recordHeaders,recordBody:null==(t=this._instance.config.session_recording)?void 0:t.recordBody},i=(null==r?void 0:r.recordHeaders)||(null==n?void 0:n.recordHeaders),s=(null==r?void 0:r.recordBody)||(null==n?void 0:n.recordBody),o=H(this._instance.config.capture_performance)?this._instance.config.capture_performance.network_timing:this._instance.config.capture_performance,a=!!(J(o)?o:null==n?void 0:n.capturePerformance)
return i||s||a?{recordHeaders:i,recordBody:s,recordPerformance:a}:void 0}get _masking(){var e,t,n,r,i,s,o=this._instance.get_property(Pe),a={maskAllInputs:null==(e=this._instance.config.session_recording)?void 0:e.maskAllInputs,maskTextSelector:null==(t=this._instance.config.session_recording)?void 0:t.maskTextSelector,blockSelector:null==(n=this._instance.config.session_recording)?void 0:n.blockSelector},l=null!==(r=null==a?void 0:a.maskAllInputs)&&void 0!==r?r:null==o?void 0:o.maskAllInputs,c=null!==(i=null==a?void 0:a.maskTextSelector)&&void 0!==i?i:null==o?void 0:o.maskTextSelector,u=null!==(s=null==a?void 0:a.blockSelector)&&void 0!==s?s:null==o?void 0:o.blockSelector
return G(l)&&G(c)&&G(u)?void 0:{maskAllInputs:null==l||l,maskTextSelector:c,blockSelector:u}}get _sampleRate(){var e=this._instance.get_property(Le)
return K(e)?e:null}get _minimumDuration(){var e=this._instance.get_property(Ie)
return K(e)?e:null}get status(){return this._receivedFlags?this._statusMatcher({receivedFlags:this._receivedFlags,isRecordingEnabled:this._isRecordingEnabled,isSampled:this._isSampled,urlTriggerMatching:this._urlTriggerMatching,eventTriggerMatching:this._eventTriggerMatching,linkedFlagMatching:this._linkedFlagMatching,sessionId:this.sessionId}):qr}constructor(e){if(this._statusMatcher=ei,this._receivedFlags=!1,this._queuedRRWebEvents=[],this._isIdle="unknown",this._lastActivityTimestamp=Date.now(),this._triggerMatching=new Jr,this._removePageViewCaptureHook=void 0,this._onSessionIdListener=void 0,this._persistFlagsOnSessionListener=void 0,this._samplingSessionListener=void 0,this._removeEventTriggerCaptureHook=void 0,this._forceAllowLocalhostNetworkCapture=!1,this._onBeforeUnload=()=>{this._flushBuffer()},this._onOffline=()=>{this._tryAddCustomEvent("browser offline",{})},this._onOnline=()=>{this._tryAddCustomEvent("browser online",{})},this._onVisibilityChange=()=>{if(null!=b&&b.visibilityState){var e="window "+b.visibilityState
this._tryAddCustomEvent(e,{})}},this._instance=e,this._captureStarted=!1,this._endpoint="/s/",this._stopRrweb=void 0,this._receivedFlags=!1,!this._instance.sessionManager)throw ii.error("started without valid sessionManager"),new Error(ri+" started without valid sessionManager. This is a bug.")
if("always"===this._instance.config.cookieless_mode)throw new Error(ri+' cannot be used with cookieless_mode="always"')
this._linkedFlagMatching=new Xr(this._instance),this._urlTriggerMatching=new Yr(this._instance),this._eventTriggerMatching=new Zr(this._instance)
var{sessionId:t,windowId:n}=this._sessionManager.checkAndGetSessionAndWindowId()
this._sessionId=t,this._windowId=n,this._buffer=this._clearBuffer(),this._sessionIdleThresholdMilliseconds>=this._sessionManager.sessionTimeoutMs&&ii.warn("session_idle_threshold_ms ("+this._sessionIdleThresholdMilliseconds+") is greater than the session timeout ("+this._sessionManager.sessionTimeoutMs+"). Session will never be detected as idle")}startIfEnabledOrStop(e){this._isRecordingEnabled?(this._startCapture(e),he(p,"beforeunload",this._onBeforeUnload),he(p,"offline",this._onOffline),he(p,"online",this._onOnline),he(p,"visibilitychange",this._onVisibilityChange),this._setupSampling(),this._addEventTriggerListener(),Q(this._removePageViewCaptureHook)&&(this._removePageViewCaptureHook=this._instance.on("eventCaptured",e=>{try{if("$pageview"===e.event){var t=null!=e&&e.properties.$current_url?this._maskUrl(null==e?void 0:e.properties.$current_url):""
if(!t)return
this._tryAddCustomEvent("$pageview",{href:t})}}catch(e){ii.error("Could not add $pageview to rrweb session",e)}})),this._onSessionIdListener||(this._onSessionIdListener=this._sessionManager.onSessionId((e,t,n)=>{var r,i
n&&(this._tryAddCustomEvent("$session_id_change",{sessionId:e,windowId:t,changeReason:n}),null==(r=this._instance)||null==(r=r.persistence)||r.unregister(Ae),null==(i=this._instance)||null==(i=i.persistence)||i.unregister(Fe))}))):this.stopRecording()}stopRecording(){var e,t,n,r
this._captureStarted&&this._stopRrweb&&(this._stopRrweb(),this._stopRrweb=void 0,this._captureStarted=!1,null==p||p.removeEventListener("beforeunload",this._onBeforeUnload),null==p||p.removeEventListener("offline",this._onOffline),null==p||p.removeEventListener("online",this._onOnline),null==p||p.removeEventListener("visibilitychange",this._onVisibilityChange),this._clearBuffer(),clearInterval(this._fullSnapshotTimer),null==(e=this._removePageViewCaptureHook)||e.call(this),this._removePageViewCaptureHook=void 0,null==(t=this._removeEventTriggerCaptureHook)||t.call(this),this._removeEventTriggerCaptureHook=void 0,null==(n=this._onSessionIdListener)||n.call(this),this._onSessionIdListener=void 0,null==(r=this._samplingSessionListener)||r.call(this),this._samplingSessionListener=void 0,this._eventTriggerMatching.stop(),this._urlTriggerMatching.stop(),this._linkedFlagMatching.stop(),ii.info("stopped"))}_resetSampling(){var e
null==(e=this._instance.persistence)||e.unregister(Re)}_makeSamplingDecision(e){var t,n=this._sessionId!==e,r=this._sampleRate
if(K(r)){var i=this._isSampled,s=n||!J(i),o=s?function(e,t){return function(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0
return Math.abs(t)}(e)%100<dn(100*t,0,100)}(e,r):i
s&&(o?this._reportStarted(Dr):ii.warn("Sample rate ("+r+") has determined that this sessionId ("+e+") will not be sent to the server."),this._tryAddCustomEvent("samplingDecisionMade",{sampleRate:r,isSampled:o})),null==(t=this._instance.persistence)||t.register({[Re]:o})}else this._resetSampling()}onRemoteConfig(e){var t,n,r,i
this._tryAddCustomEvent("$remote_config_received",e),this._persistRemoteConfig(e),null!=(t=e.sessionRecording)&&t.endpoint&&(this._endpoint=null==(i=e.sessionRecording)?void 0:i.endpoint),this._setupSampling(),"any"===(null==(n=e.sessionRecording)?void 0:n.triggerMatchType)?(this._statusMatcher=ti,this._triggerMatching=new Qr([this._eventTriggerMatching,this._urlTriggerMatching])):(this._statusMatcher=ni,this._triggerMatching=new Kr([this._eventTriggerMatching,this._urlTriggerMatching])),this._instance.register_for_session({$sdk_debug_replay_remote_trigger_matching_config:null==(r=e.sessionRecording)?void 0:r.triggerMatchType}),this._urlTriggerMatching.onRemoteConfig(e),this._eventTriggerMatching.onRemoteConfig(e),this._linkedFlagMatching.onRemoteConfig(e,(e,t)=>{this._reportStarted("linked_flag_matched",{flag:e,variant:t})}),this._receivedFlags=!0,this.startIfEnabledOrStop()}_setupSampling(){K(this._sampleRate)&&Q(this._samplingSessionListener)&&(this._samplingSessionListener=this._sessionManager.onSessionId(e=>{this._makeSamplingDecision(e)}))}_persistRemoteConfig(e){if(this._instance.persistence){var t,n=this._instance.persistence,r=()=>{var t,r,i,s,o,a,l,c,u,d=null==(t=e.sessionRecording)?void 0:t.sampleRate,h=Q(d)?null:parseFloat(d)
Q(h)&&this._resetSampling()
var p=null==(r=e.sessionRecording)?void 0:r.minimumDurationMilliseconds
n.register({[Ee]:!!e.sessionRecording,[Ce]:null==(i=e.sessionRecording)?void 0:i.consoleLogRecordingEnabled,[Te]:f({capturePerformance:e.capturePerformance},null==(s=e.sessionRecording)?void 0:s.networkPayloadCapture),[Pe]:null==(o=e.sessionRecording)?void 0:o.masking,[$e]:{enabled:null==(a=e.sessionRecording)?void 0:a.recordCanvas,fps:null==(l=e.sessionRecording)?void 0:l.canvasFps,quality:null==(c=e.sessionRecording)?void 0:c.canvasQuality},[Le]:h,[Ie]:G(p)?null:p,[Me]:null==(u=e.sessionRecording)?void 0:u.scriptConfig})}
r(),null==(t=this._persistFlagsOnSessionListener)||t.call(this),this._persistFlagsOnSessionListener=this._sessionManager.onSessionId(r)}}log(e,t){var n
void 0===t&&(t="log"),null==(n=this._instance.sessionRecording)||n.onRRwebEmit({type:6,data:{plugin:"rrweb/console@1",payload:{level:t,trace:[],payload:[JSON.stringify(e)]}},timestamp:Date.now()})}_startCapture(e){var t
G(Object.assign)||G(Array.from)||(this._captureStarted||this._instance.config.disable_session_recording||this._instance.consent.isOptedOut())||(this._captureStarted=!0,this._sessionManager.checkAndGetSessionAndWindowId(),si()?this._onScriptLoaded():null==(t=C.__PosthogExtensions__)||null==t.loadExternalDependency||t.loadExternalDependency(this._instance,this._scriptName,e=>{if(e)return ii.error("could not load recorder",e)
this._onScriptLoaded()}),ii.info("starting"),this.status===Br&&this._reportStarted(e||"recording_initialized"))}get _scriptName(){var e
return(null==(e=this._instance)||null==(e=e.persistence)||null==(e=e.get_property(Me))?void 0:e.script)||"recorder"}_isInteractiveEvent(e){var t
return 3===e.type&&-1!==oi.indexOf(null==(t=e.data)?void 0:t.source)}_updateWindowAndSessionIds(e){var t=this._isInteractiveEvent(e)
t||this._isIdle||e.timestamp-this._lastActivityTimestamp>this._sessionIdleThresholdMilliseconds&&(this._isIdle=!0,clearInterval(this._fullSnapshotTimer),this._tryAddCustomEvent("sessionIdle",{eventTimestamp:e.timestamp,lastActivityTimestamp:this._lastActivityTimestamp,threshold:this._sessionIdleThresholdMilliseconds,bufferLength:this._buffer.data.length,bufferSize:this._buffer.size}),this._flushBuffer())
var n=!1
if(t&&(this._lastActivityTimestamp=e.timestamp,this._isIdle)){var r="unknown"===this._isIdle
this._isIdle=!1,r||(this._tryAddCustomEvent("sessionNoLongerIdle",{reason:"user activity",type:e.type}),n=!0)}if(!this._isIdle){var{windowId:i,sessionId:s}=this._sessionManager.checkAndGetSessionAndWindowId(!t,e.timestamp),o=this._sessionId!==s,a=this._windowId!==i
this._windowId=i,this._sessionId=s,o||a?(this.stopRecording(),this.startIfEnabledOrStop("session_id_changed")):n&&this._scheduleFullSnapshot()}}_tryRRWebMethod(e){try{return e.rrwebMethod(),!0}catch(t){return this._queuedRRWebEvents.length<10?this._queuedRRWebEvents.push({enqueuedAt:e.enqueuedAt||Date.now(),attempt:e.attempt++,rrwebMethod:e.rrwebMethod}):ii.warn("could not emit queued rrweb event.",t,e),!1}}_tryAddCustomEvent(e,t){return this._tryRRWebMethod(ai(()=>si().addCustomEvent(e,t)))}_tryTakeFullSnapshot(){return this._tryRRWebMethod(ai(()=>si().takeFullSnapshot()))}_onScriptLoaded(){var e,t,n,r,i={blockClass:"ph-no-capture",blockSelector:void 0,ignoreClass:"ph-ignore-input",maskTextClass:"ph-mask",maskTextSelector:void 0,maskTextFn:void 0,maskAllInputs:!0,maskInputOptions:{password:!0},maskInputFn:void 0,slimDOMOptions:{},collectFonts:!1,inlineStylesheet:!0,recordCrossOriginIframes:!1},s=this._instance.config.session_recording
for(var[o,a]of Object.entries(s||{}))o in i&&("maskInputOptions"===o?i.maskInputOptions=f({password:!0},a):i[o]=a)
this._canvasRecording&&this._canvasRecording.enabled&&(i.recordCanvas=!0,i.sampling={canvas:this._canvasRecording.fps},i.dataURLOptions={type:"image/webp",quality:this._canvasRecording.quality}),this._masking&&(i.maskAllInputs=null===(t=this._masking.maskAllInputs)||void 0===t||t,i.maskTextSelector=null!==(n=this._masking.maskTextSelector)&&void 0!==n?n:void 0,i.blockSelector=null!==(r=this._masking.blockSelector)&&void 0!==r?r:void 0)
var l=si()
if(l){this._mutationThrottler=null!==(e=this._mutationThrottler)&&void 0!==e?e:new rr(l,{refillRate:this._instance.config.session_recording.__mutationThrottlerRefillRate,bucketSize:this._instance.config.session_recording.__mutationThrottlerBucketSize,onBlockedNode:(e,t)=>{var n="Too many mutations on node '"+e+"'. Rate limiting. This could be due to SVG animations or something similar"
ii.info(n,{node:t}),this.log(ri+" "+n,"warn")}})
var c=this._gatherRRWebPlugins()
this._stopRrweb=l(f({emit:e=>{this.onRRwebEmit(e)},plugins:c},i)),this._lastActivityTimestamp=Date.now(),this._isIdle=J(this._isIdle)?this._isIdle:"unknown",this._tryAddCustomEvent("$session_options",{sessionRecordingOptions:i,activePlugins:c.map(e=>null==e?void 0:e.name)}),this._tryAddCustomEvent("$posthog_config",{config:this._instance.config})}else ii.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")}_scheduleFullSnapshot(){if(this._fullSnapshotTimer&&clearInterval(this._fullSnapshotTimer),!0!==this._isIdle){var e=this._fullSnapshotIntervalMillis
e&&(this._fullSnapshotTimer=setInterval(()=>{this._tryTakeFullSnapshot()},e))}}_gatherRRWebPlugins(){var e,t,n=[],r=null==(e=C.__PosthogExtensions__)||null==(e=e.rrwebPlugins)?void 0:e.getRecordConsolePlugin
r&&this._isConsoleLogCaptureEnabled&&n.push(r())
var i=null==(t=C.__PosthogExtensions__)||null==(t=t.rrwebPlugins)?void 0:t.getRecordNetworkPlugin
return this._networkPayloadCapture&&q(i)&&(!$t.includes(location.hostname)||this._forceAllowLocalhostNetworkCapture?n.push(i(nr(this._instance.config,this._networkPayloadCapture))):ii.info("NetworkCapture not started because we are on localhost.")),n}onRRwebEmit(e){var t
if(this._processQueuedEvents(),e&&H(e)){if(e.type===zn.Meta){var n=this._maskUrl(e.data.href)
if(this._lastHref=n,!n)return
e.data.href=n}else this._pageViewFallBack()
if(this._urlTriggerMatching.checkUrlTriggerConditions(()=>this._pauseRecording(),()=>this._resumeRecording(),e=>this._activateTrigger(e)),!this._urlTriggerMatching.urlBlocked||(r=e).type===zn.Custom&&"recording paused"===r.data.tag){var r
e.type===zn.FullSnapshot&&this._scheduleFullSnapshot(),e.type===zn.FullSnapshot&&this._receivedFlags&&this._triggerMatching.triggerStatus(this.sessionId)===Wr&&this._clearBuffer()
var i=this._mutationThrottler?this._mutationThrottler.throttleMutations(e):e
if(i){var s=function(e){var t=e
if(t&&H(t)&&6===t.type&&H(t.data)&&"rrweb/console@1"===t.data.plugin){t.data.payload.payload.length>10&&(t.data.payload.payload=t.data.payload.payload.slice(0,10),t.data.payload.payload.push("...[truncated]"))
for(var n=[],r=0;r<t.data.payload.payload.length;r++)t.data.payload.payload[r]&&t.data.payload.payload[r].length>2e3?n.push(t.data.payload.payload[r].slice(0,2e3)+"...[truncated]"):n.push(t.data.payload.payload[r])
return t.data.payload.payload=n,e}return e}(i)
if(this._updateWindowAndSessionIds(s),!0!==this._isIdle||ci(s)){if(ci(s)){var o=s.data.payload
if(o){var a=o.lastActivityTimestamp,l=o.threshold
s.timestamp=a+l}}var c=null===(t=this._instance.config.session_recording.compress_events)||void 0===t||t?function(e){if(Gn(e)<1024)return e
try{if(e.type===zn.FullSnapshot)return f({},e,{data:li(e.data),cv:"2024-10"})
if(e.type===zn.IncrementalSnapshot&&e.data.source===Vn.Mutation)return f({},e,{cv:"2024-10",data:f({},e.data,{texts:li(e.data.texts),attributes:li(e.data.attributes),removes:li(e.data.removes),adds:li(e.data.adds)})})
if(e.type===zn.IncrementalSnapshot&&e.data.source===Vn.StyleSheetRule)return f({},e,{cv:"2024-10",data:f({},e.data,{adds:e.data.adds?li(e.data.adds):void 0,removes:e.data.removes?li(e.data.removes):void 0})})}catch(e){ii.error("could not compress event - will use uncompressed event",e)}return e}(s):s,u={$snapshot_bytes:Gn(c),$snapshot_data:c,$session_id:this._sessionId,$window_id:this._windowId}
this.status!==Nr?this._captureSnapshotBuffered(u):this._clearBuffer()}}}}}_pageViewFallBack(){if(!this._instance.config.capture_pageview&&p){var e=this._maskUrl(p.location.href)
this._lastHref!==e&&(this._tryAddCustomEvent("$url_changed",{href:e}),this._lastHref=e)}}_processQueuedEvents(){if(this._queuedRRWebEvents.length){var e=[...this._queuedRRWebEvents]
this._queuedRRWebEvents=[],e.forEach(e=>{Date.now()-e.enqueuedAt<=2e3&&this._tryRRWebMethod(e)})}}_maskUrl(e){var t=this._instance.config.session_recording
if(t.maskNetworkRequestFn){var n,r={url:e}
return null==(n=r=t.maskNetworkRequestFn(r))?void 0:n.url}return e}_clearBuffer(){return this._buffer={size:0,data:[],sessionId:this._sessionId,windowId:this._windowId},this._buffer}_flushBuffer(){this._flushBufferTimer&&(clearTimeout(this._flushBufferTimer),this._flushBufferTimer=void 0)
var e=this._minimumDuration,t=this._sessionDuration,n=K(t)&&t>=0,r=K(e)&&n&&t<e
return this.status===qr||this.status===Hr||this.status===Nr||r?(this._flushBufferTimer=setTimeout(()=>{this._flushBuffer()},2e3),this._buffer):(this._buffer.data.length>0&&Wn(this._buffer).forEach(e=>{this._captureSnapshot({$snapshot_bytes:e.size,$snapshot_data:e.data,$session_id:e.sessionId,$window_id:e.windowId,$lib:"web",$lib_version:T.LIB_VERSION})}),this._clearBuffer())}_captureSnapshotBuffered(e){var t,n=2+((null==(t=this._buffer)?void 0:t.data.length)||0)
!this._isIdle&&(this._buffer.size+e.$snapshot_bytes+n>943718.4||this._buffer.sessionId!==this._sessionId)&&(this._buffer=this._flushBuffer()),this._buffer.size+=e.$snapshot_bytes,this._buffer.data.push(e.$snapshot_data),this._flushBufferTimer||this._isIdle||(this._flushBufferTimer=setTimeout(()=>{this._flushBuffer()},2e3))}_captureSnapshot(e){this._instance.capture("$snapshot",e,{_url:this._instance.requestRouter.endpointFor("api",this._endpoint),_noTruncate:!0,_batchKey:"recordings",skip_client_rate_limiting:!0})}_activateTrigger(e){var t
this._triggerMatching.triggerStatus(this.sessionId)===Wr&&(null==(t=this._instance)||null==(t=t.persistence)||t.register({["url"===e?Fe:Ae]:this._sessionId}),this._flushBuffer(),this._reportStarted(e+"_trigger_matched"))}_pauseRecording(){this._urlTriggerMatching.urlBlocked||(this._urlTriggerMatching.urlBlocked=!0,clearInterval(this._fullSnapshotTimer),ii.info("recording paused due to URL blocker"),this._tryAddCustomEvent("recording paused",{reason:"url blocker"}))}_resumeRecording(){this._urlTriggerMatching.urlBlocked&&(this._urlTriggerMatching.urlBlocked=!1,this._tryTakeFullSnapshot(),this._scheduleFullSnapshot(),this._tryAddCustomEvent("recording resumed",{reason:"left blocked url"}),ii.info("recording resumed"))}_addEventTriggerListener(){0!==this._eventTriggerMatching._eventTriggers.length&&Q(this._removeEventTriggerCaptureHook)&&(this._removeEventTriggerCaptureHook=this._instance.on("eventCaptured",e=>{try{this._eventTriggerMatching._eventTriggers.includes(e.event)&&this._activateTrigger("event")}catch(e){ii.error("Could not activate event trigger",e)}}))}overrideLinkedFlag(){this._linkedFlagMatching.linkedFlagSeen=!0,this._tryTakeFullSnapshot(),this._reportStarted("linked_flag_overridden")}overrideSampling(){var e
null==(e=this._instance.persistence)||e.register({[Re]:!0}),this._tryTakeFullSnapshot(),this._reportStarted("sampling_overridden")}overrideTrigger(e){this._activateTrigger(e)}_reportStarted(e,t){this._instance.register_for_session({$session_recording_start_reason:e}),ii.info(e.replace("_"," "),t),O(["recording_initialized","session_id_changed"],e)||this._tryAddCustomEvent(e,t)}get sdkDebugProperties(){var{sessionStartTimestamp:e}=this._sessionManager.checkAndGetSessionAndWindowId(!0)
return{$recording_status:this.status,$sdk_debug_replay_internal_buffer_length:this._buffer.data.length,$sdk_debug_replay_internal_buffer_size:this._buffer.size,$sdk_debug_current_session_duration:this._sessionDuration,$sdk_debug_session_start:e}}}var di=ee("[SegmentIntegration]")
var fi="posthog-js"
function hi(e,t){var{organization:n,projectId:r,prefix:i,severityAllowList:s=["error"]}=void 0===t?{}:t
return t=>{var o,a,l,c,u
if("*"!==s&&!s.includes(t.level)||!e.__loaded)return t
t.tags||(t.tags={})
var d=e.requestRouter.endpointFor("ui","/project/"+e.config.token+"/person/"+e.get_distinct_id())
t.tags["PostHog Person URL"]=d,e.sessionRecordingStarted()&&(t.tags["PostHog Recording URL"]=e.get_session_replay_url({withTimestamp:!0}))
var h=(null==(o=t.exception)?void 0:o.values)||[],p=h.map(e=>f({},e,{stacktrace:e.stacktrace?f({},e.stacktrace,{type:"raw",frames:(e.stacktrace.frames||[]).map(e=>f({},e,{platform:"web:javascript"}))}):void 0})),g={$exception_message:(null==(a=h[0])?void 0:a.value)||t.message,$exception_type:null==(l=h[0])?void 0:l.type,$exception_personURL:d,$exception_level:t.level,$exception_list:p,$sentry_event_id:t.event_id,$sentry_exception:t.exception,$sentry_exception_message:(null==(c=h[0])?void 0:c.value)||t.message,$sentry_exception_type:null==(u=h[0])?void 0:u.type,$sentry_tags:t.tags}
return n&&r&&(g.$sentry_url=(i||"https://sentry.io/organizations/")+n+"/issues/?project="+r+"&query="+t.event_id),e.exceptions.sendExceptionEvent(g),t}}class pi{constructor(e,t,n,r,i){this.name=fi,this.setupOnce=function(s){s(hi(e,{organization:t,projectId:n,prefix:r,severityAllowList:i}))}}}var gi=null!=p&&p.location?Ot(p.location.hash,"__posthog")||Ot(location.hash,"state"):null,_i="_postHogToolbarParams",vi=ee("[Toolbar]"),mi=function(e){return e[e.UNINITIALIZED=0]="UNINITIALIZED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED",e}(mi||{})
class yi{constructor(e){this.instance=e}_setToolbarState(e){C.ph_toolbar_state=e}_getToolbarState(){var e
return null!==(e=C.ph_toolbar_state)&&void 0!==e?e:mi.UNINITIALIZED}maybeLoadToolbar(e,t,n){if(void 0===e&&(e=void 0),void 0===t&&(t=void 0),void 0===n&&(n=void 0),!p||!b)return!1
e=null!=e?e:p.location,n=null!=n?n:p.history
try{if(!t){try{p.localStorage.setItem("test","test"),p.localStorage.removeItem("test")}catch(e){return!1}t=null==p?void 0:p.localStorage}var r,i=gi||Ot(e.hash,"__posthog")||Ot(e.hash,"state"),s=i?ae(()=>JSON.parse(atob(decodeURIComponent(i))))||ae(()=>JSON.parse(decodeURIComponent(i))):null
return s&&"ph_authorize"===s.action?((r=s).source="url",r&&Object.keys(r).length>0&&(s.desiredHash?e.hash=s.desiredHash:n?n.replaceState(n.state,"",e.pathname+e.search):e.hash="")):((r=JSON.parse(t.getItem(_i)||"{}")).source="localstorage",delete r.userIntent),!(!r.token||this.instance.config.token!==r.token||(this.loadToolbar(r),0))}catch(e){return!1}}_callLoadToolbar(e){var t=C.ph_load_toolbar||C.ph_load_editor
!Q(t)&&q(t)?t(e,this.instance):vi.warn("No toolbar load function found")}loadToolbar(e){var t=!(null==b||!b.getElementById(Xe))
if(!p||t)return!1
var n="custom"===this.instance.requestRouter.region&&this.instance.config.advanced_disable_toolbar_metrics,r=f({token:this.instance.config.token},e,{apiURL:this.instance.requestRouter.endpointFor("ui")},n?{instrument:!1}:{})
if(p.localStorage.setItem(_i,JSON.stringify(f({},r,{source:void 0}))),this._getToolbarState()===mi.LOADED)this._callLoadToolbar(r)
else if(this._getToolbarState()===mi.UNINITIALIZED){var i
this._setToolbarState(mi.LOADING),null==(i=C.__PosthogExtensions__)||null==i.loadExternalDependency||i.loadExternalDependency(this.instance,"toolbar",e=>{if(e)return vi.error("[Toolbar] Failed to load",e),void this._setToolbarState(mi.UNINITIALIZED)
this._setToolbarState(mi.LOADED),this._callLoadToolbar(r)}),he(p,"turbolinks:load",()=>{this._setToolbarState(mi.UNINITIALIZED),this.loadToolbar(r)})}return!0}_loadEditor(e){return this.loadToolbar(e)}maybeLoadEditor(e,t,n){return void 0===e&&(e=void 0),void 0===t&&(t=void 0),void 0===n&&(n=void 0),this.maybeLoadToolbar(e,t,n)}}var bi=ee("[TracingHeaders]")
class wi{constructor(e){this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0,this._startCapturing=()=>{var e,t
G(this._restoreXHRPatch)&&(null==(e=C.__PosthogExtensions__)||null==(e=e.tracingHeadersPatchFns)||e._patchXHR(this._instance.config.__add_tracing_headers||[],this._instance.get_distinct_id(),this._instance.sessionManager)),G(this._restoreFetchPatch)&&(null==(t=C.__PosthogExtensions__)||null==(t=t.tracingHeadersPatchFns)||t._patchFetch(this._instance.config.__add_tracing_headers||[],this._instance.get_distinct_id(),this._instance.sessionManager))},this._instance=e}_loadScript(e){var t,n
null!=(t=C.__PosthogExtensions__)&&t.tracingHeadersPatchFns&&e(),null==(n=C.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"tracing-headers",t=>{if(t)return bi.error("failed to load script",t)
e()})}startIfEnabledOrStop(){var e,t
this._instance.config.__add_tracing_headers?this._loadScript(this._startCapturing):(null==(e=this._restoreXHRPatch)||e.call(this),null==(t=this._restoreFetchPatch)||t.call(this),this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0)}}var ki=ee("[Web Vitals]"),Si=9e5
class xi{constructor(e){var t
this._enabledServerSide=!1,this._initialized=!1,this._buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0},this._flushToCapture=()=>{clearTimeout(this._delayedFlushTimer),0!==this._buffer.metrics.length&&(this._instance.capture("$web_vitals",this._buffer.metrics.reduce((e,t)=>f({},e,{["$web_vitals_"+t.name+"_event"]:f({},t),["$web_vitals_"+t.name+"_value"]:t.value}),{})),this._buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0})},this._addToBuffer=e=>{var t,n=null==(t=this._instance.sessionManager)?void 0:t.checkAndGetSessionAndWindowId(!0)
if(G(n))ki.error("Could not read session ID. Dropping metrics!")
else{this._buffer=this._buffer||{url:void 0,metrics:[],firstMetricTimestamp:void 0}
var r=this._currentURL()
G(r)||(Q(null==e?void 0:e.name)||Q(null==e?void 0:e.value)?ki.error("Invalid metric received",e):this._maxAllowedValue&&e.value>=this._maxAllowedValue?ki.error("Ignoring metric with value >= "+this._maxAllowedValue,e):(this._buffer.url!==r&&(this._flushToCapture(),this._delayedFlushTimer=setTimeout(this._flushToCapture,this.flushToCaptureTimeoutMs)),G(this._buffer.url)&&(this._buffer.url=r),this._buffer.firstMetricTimestamp=G(this._buffer.firstMetricTimestamp)?Date.now():this._buffer.firstMetricTimestamp,e.attribution&&e.attribution.interactionTargetElement&&(e.attribution.interactionTargetElement=void 0),this._buffer.metrics.push(f({},e,{$current_url:r,$session_id:n.sessionId,$window_id:n.windowId,timestamp:Date.now()})),this._buffer.metrics.length===this.allowedMetrics.length&&this._flushToCapture()))}},this._startCapturing=()=>{var e,t,n,r,i=C.__PosthogExtensions__
G(i)||G(i.postHogWebVitalsCallbacks)||({onLCP:e,onCLS:t,onFCP:n,onINP:r}=i.postHogWebVitalsCallbacks),e&&t&&n&&r?(this.allowedMetrics.indexOf("LCP")>-1&&e(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("CLS")>-1&&t(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("FCP")>-1&&n(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("INP")>-1&&r(this._addToBuffer.bind(this)),this._initialized=!0):ki.error("web vitals callbacks not loaded - not starting")},this._instance=e,this._enabledServerSide=!(null==(t=this._instance.persistence)||!t.props[ke]),this.startIfEnabled()}get allowedMetrics(){var e,t,n=H(this._instance.config.capture_performance)?null==(e=this._instance.config.capture_performance)?void 0:e.web_vitals_allowed_metrics:void 0
return G(n)?(null==(t=this._instance.persistence)?void 0:t.props[xe])||["CLS","FCP","INP","LCP"]:n}get flushToCaptureTimeoutMs(){return(H(this._instance.config.capture_performance)?this._instance.config.capture_performance.web_vitals_delayed_flush_ms:void 0)||5e3}get _maxAllowedValue(){var e=H(this._instance.config.capture_performance)&&K(this._instance.config.capture_performance.__web_vitals_max_value)?this._instance.config.capture_performance.__web_vitals_max_value:Si
return 0<e&&e<=6e4?Si:e}get isEnabled(){var e=null==w?void 0:w.protocol
if("http:"!==e&&"https:"!==e)return ki.info("Web Vitals are disabled on non-http/https protocols"),!1
var t=H(this._instance.config.capture_performance)?this._instance.config.capture_performance.web_vitals:J(this._instance.config.capture_performance)?this._instance.config.capture_performance:void 0
return J(t)?t:this._enabledServerSide}startIfEnabled(){this.isEnabled&&!this._initialized&&(ki.info("enabled, starting..."),this._loadScript(this._startCapturing))}onRemoteConfig(e){var t=H(e.capturePerformance)&&!!e.capturePerformance.web_vitals,n=H(e.capturePerformance)?e.capturePerformance.web_vitals_allowed_metrics:void 0
this._instance.persistence&&(this._instance.persistence.register({[ke]:t}),this._instance.persistence.register({[xe]:n})),this._enabledServerSide=t,this.startIfEnabled()}_loadScript(e){var t,n
null!=(t=C.__PosthogExtensions__)&&t.postHogWebVitalsCallbacks&&e(),null==(n=C.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"web-vitals",t=>{t?ki.error("failed to load script",t):e()})}_currentURL(){var e=p?p.location.href:void 0
return e||ki.error("Could not determine current URL"),e}}var Ei=ee("[Heatmaps]")
function Ci(e){return H(e)&&"clientX"in e&&"clientY"in e&&K(e.clientX)&&K(e.clientY)}class Ti{constructor(e){var t
this.rageclicks=new Pt,this._enabledServerSide=!1,this._initialized=!1,this._flushInterval=null,this.instance=e,this._enabledServerSide=!(null==(t=this.instance.persistence)||!t.props[me])}get flushIntervalMilliseconds(){var e=5e3
return H(this.instance.config.capture_heatmaps)&&this.instance.config.capture_heatmaps.flush_interval_milliseconds&&(e=this.instance.config.capture_heatmaps.flush_interval_milliseconds),e}get isEnabled(){return G(this.instance.config.capture_heatmaps)?G(this.instance.config.enable_heatmaps)?this._enabledServerSide:this.instance.config.enable_heatmaps:!1!==this.instance.config.capture_heatmaps}startIfEnabled(){if(this.isEnabled){if(this._initialized)return
Ei.info("starting..."),this._setupListeners(),this._flushInterval=setInterval(this._flush.bind(this),this.flushIntervalMilliseconds)}else{var e,t
clearInterval(null!==(e=this._flushInterval)&&void 0!==e?e:void 0),null==(t=this._deadClicksCapture)||t.stop(),this.getAndClearBuffer()}}onRemoteConfig(e){var t=!!e.heatmaps
this.instance.persistence&&this.instance.persistence.register({[me]:t}),this._enabledServerSide=t,this.startIfEnabled()}getAndClearBuffer(){var e=this._buffer
return this._buffer=void 0,e}_onDeadClick(e){this._onClick(e.originalEvent,"deadclick")}_setupListeners(){p&&b&&(he(p,"beforeunload",this._flush.bind(this)),he(b,"click",e=>this._onClick(e||(null==p?void 0:p.event)),{capture:!0}),he(b,"mousemove",e=>this._onMouseMove(e||(null==p?void 0:p.event)),{capture:!0}),this._deadClicksCapture=new un(this.instance,ln,this._onDeadClick.bind(this)),this._deadClicksCapture.startIfEnabled(),this._initialized=!0)}_getProperties(e,t){var n=this.instance.scrollManager.scrollY(),r=this.instance.scrollManager.scrollX(),i=this.instance.scrollManager.scrollElement(),s=function(e,t,n){for(var r=e;r&&nt(r)&&!rt(r,"body");){if(r===n)return!1
if(O(t,null==p?void 0:p.getComputedStyle(r).position))return!0
r=ht(r)}return!1}(dt(e),["fixed","sticky"],i)
return{x:e.clientX+(s?0:r),y:e.clientY+(s?0:n),target_fixed:s,type:t}}_onClick(e,t){var n
if(void 0===t&&(t="click"),!tt(e.target)&&Ci(e)){var r=this._getProperties(e,t)
null!=(n=this.rageclicks)&&n.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._capture(f({},r,{type:"rageclick"})),this._capture(r)}}_onMouseMove(e){!tt(e.target)&&Ci(e)&&(clearTimeout(this._mouseMoveTimeout),this._mouseMoveTimeout=setTimeout(()=>{this._capture(this._getProperties(e,"mousemove"))},500))}_capture(e){if(p){var t=p.location.href
this._buffer=this._buffer||{},this._buffer[t]||(this._buffer[t]=[]),this._buffer[t].push(e)}}_flush(){this._buffer&&!U(this._buffer)&&this.instance.capture("$$heatmap",{$heatmap_data:this.getAndClearBuffer()})}}class Pi{constructor(e){this._instance=e}doPageView(e,t){var n,r=this._previousPageViewProperties(e,t)
return this._currentPageview={pathname:null!==(n=null==p?void 0:p.location.pathname)&&void 0!==n?n:"",pageViewId:t,timestamp:e},this._instance.scrollManager.resetContext(),r}doPageLeave(e){var t
return this._previousPageViewProperties(e,null==(t=this._currentPageview)?void 0:t.pageViewId)}doEvent(){var e
return{$pageview_id:null==(e=this._currentPageview)?void 0:e.pageViewId}}_previousPageViewProperties(e,t){var n=this._currentPageview
if(!n)return{$pageview_id:t}
var r={$pageview_id:t,$prev_pageview_id:n.pageViewId},i=this._instance.scrollManager.getContext()
if(i&&!this._instance.config.disable_scroll_properties){var{maxScrollHeight:s,lastScrollY:o,maxScrollY:a,maxContentHeight:l,lastContentY:c,maxContentY:u}=i
if(!(G(s)||G(o)||G(a)||G(l)||G(c)||G(u))){s=Math.ceil(s),o=Math.ceil(o),a=Math.ceil(a),l=Math.ceil(l),c=Math.ceil(c),u=Math.ceil(u)
var d=s<=1?1:dn(o/s,0,1),f=s<=1?1:dn(a/s,0,1),h=l<=1?1:dn(c/l,0,1),p=l<=1?1:dn(u/l,0,1)
r=ie(r,{$prev_pageview_last_scroll:o,$prev_pageview_last_scroll_percentage:d,$prev_pageview_max_scroll:a,$prev_pageview_max_scroll_percentage:f,$prev_pageview_last_content:c,$prev_pageview_last_content_percentage:h,$prev_pageview_max_content:u,$prev_pageview_max_content_percentage:p})}}return n.pathname&&(r.$prev_pageview_pathname=n.pathname),n.timestamp&&(r.$prev_pageview_duration=(e.getTime()-n.timestamp.getTime())/1e3),r}}var $i=!!S||!!k,Li="text/plain",Ii=(e,t)=>{var[n,r]=e.split("?"),i=f({},t)
null==r||r.split("&").forEach(e=>{var[t]=e.split("=")
delete i[t]})
var s=function(e,t){var n,r
void 0===t&&(t="&")
var i=[]
return re(e,function(e,t){G(e)||G(t)||"undefined"===t||(n=encodeURIComponent((e=>e instanceof File)(e)?e.name:e.toString()),r=encodeURIComponent(t),i[i.length]=r+"="+n)}),i.join(t)}(i)
return n+"?"+(s?(r?r+"&":"")+s:r)},Mi=(e,t)=>JSON.stringify(e,(e,t)=>"bigint"==typeof t?t.toString():t,t),Oi=e=>{var{data:t,compression:n}=e
if(t){if(n===I.GZipJS){var r=Ar(jr(Mi(t)),{mtime:0}),i=new Blob([r],{type:Li})
return{contentType:Li,body:i,estimatedSize:i.size}}if(n===I.Base64){var s=function(e){var t,n,r,i,s,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a=0,l=0,c="",u=[]
if(!e)return e
e=function(e){var t,n,r,i,s=""
for(t=n=0,r=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,i=0;i<r;i++){var o=e.charCodeAt(i),a=null
o<128?n++:a=o>127&&o<2048?String.fromCharCode(o>>6|192,63&o|128):String.fromCharCode(o>>12|224,o>>6&63|128,63&o|128),V(a)||(n>t&&(s+=e.substring(t,n)),s+=a,t=n=i+1)}return n>t&&(s+=e.substring(t,e.length)),s}(e)
do{t=(s=e.charCodeAt(a++)<<16|e.charCodeAt(a++)<<8|e.charCodeAt(a++))>>18&63,n=s>>12&63,r=s>>6&63,i=63&s,u[l++]=o.charAt(t)+o.charAt(n)+o.charAt(r)+o.charAt(i)}while(a<e.length)
switch(c=u.join(""),e.length%3){case 1:c=c.slice(0,-2)+"=="
break
case 2:c=c.slice(0,-1)+"="}return c}(Mi(t)),o=(e=>"data="+encodeURIComponent("string"==typeof e?e:Mi(e)))(s)
return{contentType:"application/x-www-form-urlencoded",body:o,estimatedSize:new Blob([o]).size}}var a=Mi(t)
return{contentType:"application/json",body:a,estimatedSize:new Blob([a]).size}}},Ri=[]
k&&Ri.push({transport:"fetch",method:e=>{var t,n,{contentType:r,body:i,estimatedSize:s}=null!==(t=Oi(e))&&void 0!==t?t:{},o=new Headers
re(e.headers,function(e,t){o.append(t,e)}),r&&o.append("Content-Type",r)
var a=e.url,l=null
if(x){var c=new x
l={signal:c.signal,timeout:setTimeout(()=>c.abort(),e.timeout)}}k(a,f({method:(null==e?void 0:e.method)||"GET",headers:o,keepalive:"POST"===e.method&&(s||0)<52428.8,body:i,signal:null==(n=l)?void 0:n.signal},e.fetchOptions)).then(t=>t.text().then(n=>{var r={statusCode:t.status,text:n}
if(200===t.status)try{r.json=JSON.parse(n)}catch(e){Z.error(e)}null==e.callback||e.callback(r)})).catch(t=>{Z.error(t),null==e.callback||e.callback({statusCode:0,text:t})}).finally(()=>l?clearTimeout(l.timeout):null)}}),S&&Ri.push({transport:"XHR",method:e=>{var t,n=new S
n.open(e.method||"GET",e.url,!0)
var{contentType:r,body:i}=null!==(t=Oi(e))&&void 0!==t?t:{}
re(e.headers,function(e,t){n.setRequestHeader(t,e)}),r&&n.setRequestHeader("Content-Type",r),e.timeout&&(n.timeout=e.timeout),n.withCredentials=!0,n.onreadystatechange=()=>{if(4===n.readyState){var t={statusCode:n.status,text:n.responseText}
if(200===n.status)try{t.json=JSON.parse(n.responseText)}catch(e){}null==e.callback||e.callback(t)}},n.send(i)}}),null!=y&&y.sendBeacon&&Ri.push({transport:"sendBeacon",method:e=>{var t=Ii(e.url,{beacon:"1"})
try{var n,{contentType:r,body:i}=null!==(n=Oi(e))&&void 0!==n?n:{},s="string"==typeof i?new Blob([i],{type:r}):i
y.sendBeacon(t,s)}catch(e){}}})
var Fi=function(e,t){if(!function(e){try{new RegExp(e)}catch(e){return!1}return!0}(t))return!1
try{return new RegExp(t).test(e)}catch(e){return!1}}
function Ai(e,t,n){return Mi({distinct_id:e,userPropertiesToSet:t,userPropertiesToSetOnce:n})}var ji={exact:(e,t)=>t.some(t=>e.some(e=>t===e)),is_not:(e,t)=>t.every(t=>e.every(e=>t!==e)),regex:(e,t)=>t.some(t=>e.some(e=>Fi(t,e))),not_regex:(e,t)=>t.every(t=>e.every(e=>!Fi(t,e))),icontains:(e,t)=>t.map(Ni).some(t=>e.map(Ni).some(e=>t.includes(e))),not_icontains:(e,t)=>t.map(Ni).every(t=>e.map(Ni).every(e=>!t.includes(e)))},Ni=e=>e.toLowerCase(),Di=ee("[Error tracking]")
class Bi{constructor(e){var t,n
this._suppressionRules=[],this._instance=e,this._suppressionRules=null!==(t=null==(n=this._instance.persistence)?void 0:n.get_property(be))&&void 0!==t?t:[]}onRemoteConfig(e){var t,n,r,i=null!==(t=null==(n=e.errorTracking)?void 0:n.suppressionRules)&&void 0!==t?t:[],s=null==(r=e.errorTracking)?void 0:r.captureExtensionExceptions
this._suppressionRules=i,this._instance.persistence&&this._instance.persistence.register({[be]:this._suppressionRules,[we]:s})}get _captureExtensionExceptions(){var e,t=!!this._instance.get_property(we),n=this._instance.config.error_tracking.captureExtensionExceptions
return null!==(e=null!=n?n:t)&&void 0!==e&&e}sendExceptionEvent(e){if(this._matchesSuppressionRule(e))Di.info("Skipping exception capture because a suppression rule matched")
else{if(this._captureExtensionExceptions||!this._isExtensionException(e))return this._instance.capture("$exception",e,{_noTruncate:!0,_batchKey:"exceptionEvent"})
Di.info("Skipping exception capture because it was thrown by an extension")}}_matchesSuppressionRule(e){var t=e.$exception_list
if(!t||!B(t)||0===t.length)return!1
var n=t.reduce((e,t)=>{var{type:n,value:r}=t
return W(n)&&n.length>0&&e.$exception_types.push(n),W(r)&&r.length>0&&e.$exception_values.push(r),e},{$exception_types:[],$exception_values:[]})
return this._suppressionRules.some(e=>{var t=e.values.map(e=>{var t,r=ji[e.operator],i=B(e.value)?e.value:[e.value],s=null!==(t=n[e.key])&&void 0!==t?t:[]
return i.length>0&&r(i,s)})
return"OR"===e.type?t.some(Boolean):t.every(Boolean)})}_isExtensionException(e){var t=e.$exception_list
return!(!t||!B(t))&&t.flatMap(e=>{var t,n
return null!==(t=null==(n=e.stacktrace)?void 0:n.frames)&&void 0!==t?t:[]}).some(e=>e.filename&&e.filename.startsWith("chrome-extension://"))}}var qi="Mobile",Hi="iOS",Ui="Android",Gi="Tablet",Wi=Ui+" "+Gi,zi="iPad",Vi="Apple",Qi=Vi+" Watch",Ki="Safari",Ji="BlackBerry",Yi="Samsung",Xi=Yi+"Browser",Zi=Yi+" Internet",es="Chrome",ts=es+" OS",ns=es+" "+Hi,rs="Internet Explorer",is=rs+" "+qi,ss="Opera",os=ss+" Mini",as="Edge",ls="Microsoft "+as,cs="Firefox",us=cs+" "+Hi,ds="Nintendo",fs="PlayStation",hs="Xbox",ps=Ui+" "+qi,gs=qi+" "+Ki,_s="Windows",vs=_s+" Phone",ms="Nokia",ys="Ouya",bs="Generic",ws=bs+" "+qi.toLowerCase(),ks=bs+" "+Gi.toLowerCase(),Ss="Konqueror",xs="(\\d+(\\.\\d+)?)",Es=new RegExp("Version/"+xs),Cs=new RegExp(hs,"i"),Ts=new RegExp(fs+" \\w+","i"),Ps=new RegExp(ds+" \\w+","i"),$s=new RegExp(Ji+"|PlayBook|BB10","i"),Ls={"NT3.51":"NT 3.11","NT4.0":"NT 4.0","5.0":"2000",5.1:"XP",5.2:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1",6.4:"10","10.0":"10"},Is=function(e,t){return t=t||"",O(e," OPR/")&&O(e,"Mini")?os:O(e," OPR/")?ss:$s.test(e)?Ji:O(e,"IE"+qi)||O(e,"WPDesktop")?is:O(e,Xi)?Zi:O(e,as)||O(e,"Edg/")?ls:O(e,"FBIOS")?"Facebook "+qi:O(e,"UCWEB")||O(e,"UCBrowser")?"UC Browser":O(e,"CriOS")?ns:O(e,"CrMo")||O(e,es)?es:O(e,Ui)&&O(e,Ki)?ps:O(e,"FxiOS")?us:O(e.toLowerCase(),Ss.toLowerCase())?Ss:((e,t)=>t&&O(t,Vi)||function(e){return O(e,Ki)&&!O(e,es)&&!O(e,Ui)}(e))(e,t)?O(e,qi)?gs:Ki:O(e,cs)?cs:O(e,"MSIE")||O(e,"Trident/")?rs:O(e,"Gecko")?cs:""},Ms={[is]:[new RegExp("rv:"+xs)],[ls]:[new RegExp(as+"?\\/"+xs)],[es]:[new RegExp("("+es+"|CrMo)\\/"+xs)],[ns]:[new RegExp("CriOS\\/"+xs)],"UC Browser":[new RegExp("(UCBrowser|UCWEB)\\/"+xs)],[Ki]:[Es],[gs]:[Es],[ss]:[new RegExp("(Opera|OPR)\\/"+xs)],[cs]:[new RegExp(cs+"\\/"+xs)],[us]:[new RegExp("FxiOS\\/"+xs)],[Ss]:[new RegExp("Konqueror[:/]?"+xs,"i")],[Ji]:[new RegExp(Ji+" "+xs),Es],[ps]:[new RegExp("android\\s"+xs,"i")],[Zi]:[new RegExp(Xi+"\\/"+xs)],[rs]:[new RegExp("(rv:|MSIE )"+xs)],Mozilla:[new RegExp("rv:"+xs)]},Os=function(e,t){var n=Is(e,t),r=Ms[n]
if(G(r))return null
for(var i=0;i<r.length;i++){var s=r[i],o=e.match(s)
if(o)return parseFloat(o[o.length-2])}return null},Rs=[[new RegExp(hs+"; "+hs+" (.*?)[);]","i"),e=>[hs,e&&e[1]||""]],[new RegExp(ds,"i"),[ds,""]],[new RegExp(fs,"i"),[fs,""]],[$s,[Ji,""]],[new RegExp(_s,"i"),(e,t)=>{if(/Phone/.test(t)||/WPDesktop/.test(t))return[vs,""]
if(new RegExp(qi).test(t)&&!/IEMobile\b/.test(t))return[_s+" "+qi,""]
var n=/Windows NT ([0-9.]+)/i.exec(t)
if(n&&n[1]){var r=n[1],i=Ls[r]||""
return/arm/i.test(t)&&(i="RT"),[_s,i]}return[_s,""]}],[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,e=>{if(e&&e[3]){var t=[e[3],e[4],e[5]||"0"]
return[Hi,t.join(".")]}return[Hi,""]}],[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,e=>{var t=""
return e&&e.length>=3&&(t=G(e[2])?e[3]:e[2]),["watchOS",t]}],[new RegExp("("+Ui+" (\\d+)\\.(\\d+)\\.?(\\d+)?|"+Ui+")","i"),e=>{if(e&&e[2]){var t=[e[2],e[3],e[4]||"0"]
return[Ui,t.join(".")]}return[Ui,""]}],[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,e=>{var t=["Mac OS X",""]
if(e&&e[1]){var n=[e[1],e[2],e[3]||"0"]
t[1]=n.join(".")}return t}],[/Mac/i,["Mac OS X",""]],[/CrOS/,[ts,""]],[/Linux|debian/i,["Linux",""]]],Fs=function(e){return Ps.test(e)?ds:Ts.test(e)?fs:Cs.test(e)?hs:new RegExp(ys,"i").test(e)?ys:new RegExp("("+vs+"|WPDesktop)","i").test(e)?vs:/iPad/.test(e)?zi:/iPod/.test(e)?"iPod Touch":/iPhone/.test(e)?"iPhone":/(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)?Qi:$s.test(e)?Ji:/(kobo)\s(ereader|touch)/i.test(e)?"Kobo":new RegExp(ms,"i").test(e)?ms:/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e)||/(kf[a-z]+)( bui|\)).+silk\//i.test(e)?"Kindle Fire":/(Android|ZTE)/i.test(e)?!new RegExp(qi).test(e)||/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e)?/pixel[\daxl ]{1,6}/i.test(e)&&!/pixel c/i.test(e)||/(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e)||/lmy47v/i.test(e)&&!/QTAQZ3/i.test(e)?Ui:Wi:Ui:new RegExp("(pda|"+qi+")","i").test(e)?ws:new RegExp(Gi,"i").test(e)&&!new RegExp(Gi+" pc","i").test(e)?ks:""},As="https?://(.*)",js=["gclid","gclsrc","dclid","gbraid","wbraid","fbclid","msclkid","twclid","li_fat_id","igshid","ttclid","rdt_cid","epik","qclid","sccid","irclid","_kx"],Ns=se(["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gad_source","mc_cid"],js),Ds="<masked>",Bs=["li_fat_id"]
function qs(e,t,n){if(!b)return{}
var r,i=t?se([],js,n||[]):[],s=Hs(Mt(b.URL,i,Ds),e),o=(r={},re(Bs,function(e){var t=Kt._get(e)
r[e]=t||null}),r)
return ie(o,s)}function Hs(e,t){var n=Ns.concat(t||[]),r={}
return re(n,function(t){var n=It(e,t)
r[t]=n||null}),r}function Us(e){var t=function(e){return e?0===e.search(As+"google.([^/?]*)")?"google":0===e.search(As+"bing.com")?"bing":0===e.search(As+"yahoo.com")?"yahoo":0===e.search(As+"duckduckgo.com")?"duckduckgo":null:null}(e),n="yahoo"!=t?"q":"p",r={}
if(!V(t)){r.$search_engine=t
var i=b?It(b.referrer,n):""
i.length&&(r.ph_keyword=i)}return r}function Gs(){return navigator.language||navigator.userLanguage}function Ws(){return(null==b?void 0:b.referrer)||"$direct"}function zs(e,t){var n=e?se([],js,t||[]):[],r=null==w?void 0:w.href.substring(0,1e3)
return{r:Ws().substring(0,1e3),u:r?Mt(r,n,Ds):void 0}}function Vs(e){var t,{r:n,u:r}=e,i={$referrer:n,$referring_domain:null==n?void 0:"$direct"==n?"$direct":null==(t=Lt(n))?void 0:t.host}
if(r){i.$current_url=r
var s=Lt(r)
i.$host=null==s?void 0:s.host,i.$pathname=null==s?void 0:s.pathname
var o=Hs(r)
ie(i,o)}if(n){var a=Us(n)
ie(i,a)}return i}function Qs(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){return}}function Ks(){try{return(new Date).getTimezoneOffset()}catch(e){return}}function Js(e,t){if(!E)return{}
var n,r,i,s=e?se([],js,t||[]):[],[o,a]=function(e){for(var t=0;t<Rs.length;t++){var[n,r]=Rs[t],i=n.exec(e),s=i&&(q(r)?r(i,e):r)
if(s)return s}return["",""]}(E)
return ie(ce({$os:o,$os_version:a,$browser:Is(E,navigator.vendor),$device:Fs(E),$device_type:(r=E,i=Fs(r),i===zi||i===Wi||"Kobo"===i||"Kindle Fire"===i||i===ks?Gi:i===ds||i===hs||i===fs||i===ys?"Console":i===Qi?"Wearable":i?qi:"Desktop"),$timezone:Qs(),$timezone_offset:Ks()}),{$current_url:Mt(null==w?void 0:w.href,s,Ds),$host:null==w?void 0:w.host,$pathname:null==w?void 0:w.pathname,$raw_user_agent:E.length>1e3?E.substring(0,997)+"...":E,$browser_version:Os(E,navigator.vendor),$browser_language:Gs(),$browser_language_prefix:(n=Gs(),"string"==typeof n?n.split("-")[0]:void 0),$screen_height:null==p?void 0:p.screen.height,$screen_width:null==p?void 0:p.screen.width,$viewport_height:null==p?void 0:p.innerHeight,$viewport_width:null==p?void 0:p.innerWidth,$lib:"web",$lib_version:T.LIB_VERSION,$insert_id:Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10),$time:Date.now()/1e3})}var Ys=ee("[FeatureFlags]"),Xs="$active_feature_flags",Zs="$override_feature_flags",eo="$feature_flag_payloads",to="$override_feature_flag_payloads",no="$feature_flag_request_id",ro=e=>{var t={}
for(var[n,r]of oe(e||{}))r&&(t[n]=r)
return t},io=function(e){return e.FeatureFlags="feature_flags",e.Recordings="recordings",e}({})
class so{constructor(e){this._override_warning=!1,this._hasLoadedFlags=!1,this._requestInFlight=!1,this._reloadingDisabled=!1,this._additionalReloadRequested=!1,this._flagsCalled=!1,this._flagsLoadedFromRemote=!1,this._instance=e,this.featureFlagEventHandlers=[]}flags(){if(this._instance.config.__preview_remote_config)this._flagsCalled=!0
else{var e=!this._reloadDebouncer&&(this._instance.config.advanced_disable_feature_flags||this._instance.config.advanced_disable_feature_flags_on_first_load)
this._callFlagsEndpoint({disableFlags:e})}}get hasLoadedFlags(){return this._hasLoadedFlags}getFlags(){return Object.keys(this.getFlagVariants())}getFlagsWithDetails(){var e=this._instance.get_property(De),t=this._instance.get_property(Zs),n=this._instance.get_property(to)
if(!n&&!t)return e||{}
var r=ie({},e||{}),i=[...new Set([...Object.keys(n||{}),...Object.keys(t||{})])]
for(var s of i){var o,a,l=r[s],c=null==t?void 0:t[s],u=G(c)?null!==(o=null==l?void 0:l.enabled)&&void 0!==o&&o:!!c,d=G(c)?l.variant:"string"==typeof c?c:void 0,h=null==n?void 0:n[s],p=f({},l,{enabled:u,variant:u?null!=d?d:null==l?void 0:l.variant:void 0})
u!==(null==l?void 0:l.enabled)&&(p.original_enabled=null==l?void 0:l.enabled),d!==(null==l?void 0:l.variant)&&(p.original_variant=null==l?void 0:l.variant),h&&(p.metadata=f({},null==l?void 0:l.metadata,{payload:h,original_payload:null==l||null==(a=l.metadata)?void 0:a.payload})),r[s]=p}return this._override_warning||(Ys.warn(" Overriding feature flag details!",{flagDetails:e,overriddenPayloads:n,finalDetails:r}),this._override_warning=!0),r}getFlagVariants(){var e=this._instance.get_property(je),t=this._instance.get_property(Zs)
if(!t)return e||{}
for(var n=ie({},e),r=Object.keys(t),i=0;i<r.length;i++)n[r[i]]=t[r[i]]
return this._override_warning||(Ys.warn(" Overriding feature flags!",{enabledFlags:e,overriddenFlags:t,finalFlags:n}),this._override_warning=!0),n}getFlagPayloads(){var e=this._instance.get_property(eo),t=this._instance.get_property(to)
if(!t)return e||{}
for(var n=ie({},e||{}),r=Object.keys(t),i=0;i<r.length;i++)n[r[i]]=t[r[i]]
return this._override_warning||(Ys.warn(" Overriding feature flag payloads!",{flagPayloads:e,overriddenPayloads:t,finalPayloads:n}),this._override_warning=!0),n}reloadFeatureFlags(){this._reloadingDisabled||this._instance.config.advanced_disable_feature_flags||this._reloadDebouncer||(this._reloadDebouncer=setTimeout(()=>{this._callFlagsEndpoint()},5))}_clearDebouncer(){clearTimeout(this._reloadDebouncer),this._reloadDebouncer=void 0}ensureFlagsLoaded(){this._hasLoadedFlags||this._requestInFlight||this._reloadDebouncer||this.reloadFeatureFlags()}setAnonymousDistinctId(e){this.$anon_distinct_id=e}setReloadingPaused(e){this._reloadingDisabled=e}_callFlagsEndpoint(e){var t
if(this._clearDebouncer(),!this._instance._shouldDisableFlags())if(this._requestInFlight)this._additionalReloadRequested=!0
else{var n={token:this._instance.config.token,distinct_id:this._instance.get_distinct_id(),groups:this._instance.getGroups(),$anon_distinct_id:this.$anon_distinct_id,person_properties:f({},(null==(t=this._instance.persistence)?void 0:t.get_initial_props())||{},this._instance.get_property(Be)||{}),group_properties:this._instance.get_property(qe)};(null!=e&&e.disableFlags||this._instance.config.advanced_disable_feature_flags)&&(n.disable_flags=!0)
var r=this._instance.config.__preview_remote_config,i=r?"/flags/?v=2":"/flags/?v=2&config=true",s=this._instance.config.advanced_only_evaluate_survey_feature_flags?"&only_evaluate_survey_feature_flags=true":"",o=this._instance.requestRouter.endpointFor("api",i+s)
r&&(n.timezone=Qs()),this._requestInFlight=!0,this._instance._send_request({method:"POST",url:o,data:n,compression:this._instance.config.disable_compression?void 0:I.Base64,timeout:this._instance.config.feature_flag_request_timeout_ms,callback:e=>{var t,r,i=!0
if(200===e.statusCode&&(this._additionalReloadRequested||(this.$anon_distinct_id=void 0),i=!1),this._requestInFlight=!1,this._flagsCalled||(this._flagsCalled=!0,this._instance._onRemoteConfig(null!==(r=e.json)&&void 0!==r?r:{})),!n.disable_flags||this._additionalReloadRequested)if(this._flagsLoadedFromRemote=!i,e.json&&null!=(t=e.json.quotaLimited)&&t.includes(io.FeatureFlags))Ys.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.")
else{var s
n.disable_flags||this.receivedFeatureFlags(null!==(s=e.json)&&void 0!==s?s:{},i),this._additionalReloadRequested&&(this._additionalReloadRequested=!1,this._callFlagsEndpoint())}}})}}getFeatureFlag(e,t){if(void 0===t&&(t={}),this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0){var n=this.getFlagVariants()[e],r=""+n,i=this._instance.get_property(no)||void 0,s=this._instance.get_property(Ge)||{}
if((t.send_event||!("send_event"in t))&&(!(e in s)||!s[e].includes(r))){var o,a,l,c,u,d,f,h,p
B(s[e])?s[e].push(r):s[e]=[r],null==(o=this._instance.persistence)||o.register({[Ge]:s})
var g=this.getFeatureFlagDetails(e),_={$feature_flag:e,$feature_flag_response:n,$feature_flag_payload:this.getFeatureFlagPayload(e)||null,$feature_flag_request_id:i,$feature_flag_bootstrapped_response:(null==(a=this._instance.config.bootstrap)||null==(a=a.featureFlags)?void 0:a[e])||null,$feature_flag_bootstrapped_payload:(null==(l=this._instance.config.bootstrap)||null==(l=l.featureFlagPayloads)?void 0:l[e])||null,$used_bootstrap_value:!this._flagsLoadedFromRemote}
G(null==g||null==(c=g.metadata)?void 0:c.version)||(_.$feature_flag_version=g.metadata.version)
var v,m=null!==(u=null==g||null==(d=g.reason)?void 0:d.description)&&void 0!==u?u:null==g||null==(f=g.reason)?void 0:f.code
m&&(_.$feature_flag_reason=m),null!=g&&null!=(h=g.metadata)&&h.id&&(_.$feature_flag_id=g.metadata.id),G(null==g?void 0:g.original_variant)&&G(null==g?void 0:g.original_enabled)||(_.$feature_flag_original_response=G(g.original_variant)?g.original_enabled:g.original_variant),null!=g&&null!=(p=g.metadata)&&p.original_payload&&(_.$feature_flag_original_payload=null==g||null==(v=g.metadata)?void 0:v.original_payload),this._instance.capture("$feature_flag_called",_)}return n}Ys.warn('getFeatureFlag for key "'+e+"\" failed. Feature flags didn't load in time.")}getFeatureFlagDetails(e){return this.getFlagsWithDetails()[e]}getFeatureFlagPayload(e){return this.getFlagPayloads()[e]}getRemoteConfigPayload(e,t){var n=this._instance.config.token
this._instance._send_request({method:"POST",url:this._instance.requestRouter.endpointFor("api","/flags/?v=2&config=true"),data:{distinct_id:this._instance.get_distinct_id(),token:n},compression:this._instance.config.disable_compression?void 0:I.Base64,timeout:this._instance.config.feature_flag_request_timeout_ms,callback:n=>{var r,i=null==(r=n.json)?void 0:r.featureFlagPayloads
t((null==i?void 0:i[e])||void 0)}})}isFeatureEnabled(e,t){if(void 0===t&&(t={}),this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0)return!!this.getFeatureFlag(e,t)
Ys.warn('isFeatureEnabled for key "'+e+"\" failed. Feature flags didn't load in time.")}addFeatureFlagsHandler(e){this.featureFlagEventHandlers.push(e)}removeFeatureFlagsHandler(e){this.featureFlagEventHandlers=this.featureFlagEventHandlers.filter(t=>t!==e)}receivedFeatureFlags(e,t){if(this._instance.persistence){this._hasLoadedFlags=!0
var n=this.getFlagVariants(),r=this.getFlagPayloads(),i=this.getFlagsWithDetails()
!function(e,t,n,r,i){void 0===n&&(n={}),void 0===r&&(r={}),void 0===i&&(i={})
var s=(e=>{var t=e.flags
return t?(e.featureFlags=Object.fromEntries(Object.keys(t).map(e=>{var n
return[e,null!==(n=t[e].variant)&&void 0!==n?n:t[e].enabled]})),e.featureFlagPayloads=Object.fromEntries(Object.keys(t).filter(e=>t[e].enabled).filter(e=>{var n
return null==(n=t[e].metadata)?void 0:n.payload}).map(e=>{var n
return[e,null==(n=t[e].metadata)?void 0:n.payload]}))):Ys.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"),e})(e),o=s.flags,a=s.featureFlags,l=s.featureFlagPayloads
if(a){var c=e.requestId
if(B(a)){Ys.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.")
var u={}
if(a)for(var d=0;d<a.length;d++)u[a[d]]=!0
t&&t.register({[Xs]:a,[je]:u})}else{var h=a,p=l,g=o
e.errorsWhileComputingFlags&&(h=f({},n,h),p=f({},r,p),g=f({},i,g)),t&&t.register(f({[Xs]:Object.keys(ro(h)),[je]:h||{},[eo]:p||{},[De]:g||{}},c?{[no]:c}:{}))}}}(e,this._instance.persistence,n,r,i),this._fireFeatureFlagsCallbacks(t)}}override(e,t){void 0===t&&(t=!1),Ys.warn("override is deprecated. Please use overrideFeatureFlags instead."),this.overrideFeatureFlags({flags:e,suppressWarning:t})}overrideFeatureFlags(e){if(!this._instance.__loaded||!this._instance.persistence)return Ys.uninitializedWarning("posthog.featureFlags.overrideFeatureFlags")
if(!1===e)return this._instance.persistence.unregister(Zs),this._instance.persistence.unregister(to),void this._fireFeatureFlagsCallbacks()
if(e&&"object"==typeof e&&("flags"in e||"payloads"in e)){var t,n=e
if(this._override_warning=Boolean(null!==(t=n.suppressWarning)&&void 0!==t&&t),"flags"in n)if(!1===n.flags)this._instance.persistence.unregister(Zs)
else if(n.flags)if(B(n.flags)){for(var r={},i=0;i<n.flags.length;i++)r[n.flags[i]]=!0
this._instance.persistence.register({[Zs]:r})}else this._instance.persistence.register({[Zs]:n.flags})
return"payloads"in n&&(!1===n.payloads?this._instance.persistence.unregister(to):n.payloads&&this._instance.persistence.register({[to]:n.payloads})),void this._fireFeatureFlagsCallbacks()}this._fireFeatureFlagsCallbacks()}onFeatureFlags(e){if(this.addFeatureFlagsHandler(e),this._hasLoadedFlags){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
e(t,n)}return()=>this.removeFeatureFlagsHandler(e)}updateEarlyAccessFeatureEnrollment(e,t,n){var r,i=(this._instance.get_property(Ne)||[]).find(t=>t.flagKey===e),s={["$feature_enrollment/"+e]:t},o={$feature_flag:e,$feature_enrollment:t,$set:s}
i&&(o.$early_access_feature_name=i.name),n&&(o.$feature_enrollment_stage=n),this._instance.capture("$feature_enrollment_update",o),this.setPersonPropertiesForFlags(s,!1)
var a=f({},this.getFlagVariants(),{[e]:t})
null==(r=this._instance.persistence)||r.register({[Xs]:Object.keys(ro(a)),[je]:a}),this._fireFeatureFlagsCallbacks()}getEarlyAccessFeatures(e,t,n){void 0===t&&(t=!1)
var r=this._instance.get_property(Ne),i=n?"&"+n.map(e=>"stage="+e).join("&"):""
if(r&&!t)return e(r)
this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/early_access_features/?token="+this._instance.config.token+i),method:"GET",callback:t=>{var n,r
if(t.json){var i=t.json.earlyAccessFeatures
return null==(n=this._instance.persistence)||n.unregister(Ne),null==(r=this._instance.persistence)||r.register({[Ne]:i}),e(i)}}})}_prepareFeatureFlagsForCallbacks(){var e=this.getFlags(),t=this.getFlagVariants()
return{flags:e.filter(e=>t[e]),flagVariants:Object.keys(t).filter(e=>t[e]).reduce((e,n)=>(e[n]=t[n],e),{})}}_fireFeatureFlagsCallbacks(e){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
this.featureFlagEventHandlers.forEach(r=>r(t,n,{errorsLoading:e}))}setPersonPropertiesForFlags(e,t){void 0===t&&(t=!0)
var n=this._instance.get_property(Be)||{}
this._instance.register({[Be]:f({},n,e)}),t&&this._instance.reloadFeatureFlags()}resetPersonPropertiesForFlags(){this._instance.unregister(Be)}setGroupPropertiesForFlags(e,t){void 0===t&&(t=!0)
var n=this._instance.get_property(qe)||{}
0!==Object.keys(n).length&&Object.keys(n).forEach(t=>{n[t]=f({},n[t],e[t]),delete e[t]}),this._instance.register({[qe]:f({},n,e)}),t&&this._instance.reloadFeatureFlags()}resetGroupPropertiesForFlags(e){if(e){var t=this._instance.get_property(qe)||{}
this._instance.register({[qe]:f({},t,{[e]:{}})})}else this._instance.unregister(qe)}reset(){this._hasLoadedFlags=!1,this._requestInFlight=!1,this._reloadingDisabled=!1,this._additionalReloadRequested=!1,this._flagsCalled=!1,this._flagsLoadedFromRemote=!1,this.$anon_distinct_id=void 0,this._clearDebouncer(),this._override_warning=!1}}var oo=["cookie","localstorage","localstorage+cookie","sessionstorage","memory"]
class ao{constructor(e,t){this._config=e,this.props={},this._campaign_params_saved=!1,this._name=(e=>{var t=""
return e.token&&(t=e.token.replace(/\+/g,"PL").replace(/\//g,"SL").replace(/=/g,"EQ")),e.persistence_name?"ph_"+e.persistence_name:"ph_"+t+"_posthog"})(e),this._storage=this._buildStorage(e),this.load(),e.debug&&Z.info("Persistence loaded",e.persistence,f({},this.props)),this.update_config(e,e,t),this.save()}isDisabled(){return!!this._disabled}_buildStorage(e){-1===oo.indexOf(e.persistence.toLowerCase())&&(Z.critical("Unknown persistence type "+e.persistence+"; falling back to localStorage+cookie"),e.persistence="localStorage+cookie")
var t=e.persistence.toLowerCase()
return"localstorage"===t&&Yt._is_supported()?Yt:"localstorage+cookie"===t&&Zt._is_supported()?Zt:"sessionstorage"===t&&rn._is_supported()?rn:"memory"===t?tn:"cookie"===t?Kt:Zt._is_supported()?Zt:Kt}properties(){var e={}
return re(this.props,function(t,n){if(n===je&&H(t))for(var r=Object.keys(t),i=0;i<r.length;i++)e["$feature/"+r[i]]=t[r[i]]
else o=n,a=!1,(V(s=et)?a:m&&s.indexOf===m?-1!=s.indexOf(o):(re(s,function(e){if(a||(a=e===o))return te}),a))||(e[n]=t)
var s,o,a}),e}load(){if(!this._disabled){var e=this._storage._parse(this._name)
e&&(this.props=ie({},e))}}save(){this._disabled||this._storage._set(this._name,this.props,this._expire_days,this._cross_subdomain,this._secure,this._config.debug)}remove(){this._storage._remove(this._name,!1),this._storage._remove(this._name,!0)}clear(){this.remove(),this.props={}}register_once(e,t,n){if(H(e)){G(t)&&(t="None"),this._expire_days=G(n)?this._default_expiry:n
var r=!1
if(re(e,(e,n)=>{this.props.hasOwnProperty(n)&&this.props[n]!==t||(this.props[n]=e,r=!0)}),r)return this.save(),!0}return!1}register(e,t){if(H(e)){this._expire_days=G(t)?this._default_expiry:t
var n=!1
if(re(e,(t,r)=>{e.hasOwnProperty(r)&&this.props[r]!==t&&(this.props[r]=t,n=!0)}),n)return this.save(),!0}return!1}unregister(e){e in this.props&&(delete this.props[e],this.save())}update_campaign_params(){if(!this._campaign_params_saved){var e=qs(this._config.custom_campaign_params,this._config.mask_personal_data_properties,this._config.custom_personal_data_properties)
U(ce(e))||this.register(e),this._campaign_params_saved=!0}}update_search_keyword(){var e
this.register((e=null==b?void 0:b.referrer)?Us(e):{})}update_referrer_info(){var e
this.register_once({$referrer:Ws(),$referring_domain:null!=b&&b.referrer&&(null==(e=Lt(b.referrer))?void 0:e.host)||"$direct"},void 0)}set_initial_person_info(){this.props[Qe]||this.props[Ke]||this.register_once({[Je]:zs(this._config.mask_personal_data_properties,this._config.custom_personal_data_properties)},void 0)}get_initial_props(){var e={}
re([Ke,Qe],t=>{var n=this.props[t]
n&&re(n,function(t,n){e["$initial_"+F(n)]=t})})
var t,n,r=this.props[Je]
if(r){var i=(t=Vs(r),n={},re(t,function(e,t){n["$initial_"+F(t)]=e}),n)
ie(e,i)}return e}safe_merge(e){return re(this.props,function(t,n){n in e||(e[n]=t)}),e}update_config(e,t,n){if(this._default_expiry=this._expire_days=e.cookie_expiration,this.set_disabled(e.disable_persistence||!!n),this.set_cross_subdomain(e.cross_subdomain_cookie),this.set_secure(e.secure_cookie),e.persistence!==t.persistence){var r=this._buildStorage(e),i=this.props
this.clear(),this._storage=r,this.props=i,this.save()}}set_disabled(e){this._disabled=e,this._disabled?this.remove():this.save()}set_cross_subdomain(e){e!==this._cross_subdomain&&(this._cross_subdomain=e,this.remove(),this.save())}set_secure(e){e!==this._secure&&(this._secure=e,this.remove(),this.save())}set_event_timer(e,t){var n=this.props[_e]||{}
n[e]=t,this.props[_e]=n,this.save()}remove_event_timer(e){var t=(this.props[_e]||{})[e]
return G(t)||(delete this.props[_e][e],this.save()),t}get_property(e){return this.props[e]}set_property(e,t){this.props[e]=t,this.save()}}class lo{constructor(){this._events={},this._events={}}on(e,t){return this._events[e]||(this._events[e]=[]),this._events[e].push(t),()=>{this._events[e]=this._events[e].filter(e=>e!==t)}}emit(e,t){for(var n of this._events[e]||[])n(t)
for(var r of this._events["*"]||[])r(e,t)}}class co{constructor(e){this._debugEventEmitter=new lo,this._checkStep=(e,t)=>this._checkStepEvent(e,t)&&this._checkStepUrl(e,t)&&this._checkStepElement(e,t),this._checkStepEvent=(e,t)=>null==t||!t.event||(null==e?void 0:e.event)===(null==t?void 0:t.event),this._instance=e,this._actionEvents=new Set,this._actionRegistry=new Set}init(){var e,t
G(null==(e=this._instance)?void 0:e._addCaptureHook)||(null==(t=this._instance)||t._addCaptureHook((e,t)=>{this.on(e,t)}))}register(e){var t,n
if(!G(null==(t=this._instance)?void 0:t._addCaptureHook)&&(e.forEach(e=>{var t,n
null==(t=this._actionRegistry)||t.add(e),null==(n=e.steps)||n.forEach(e=>{var t
null==(t=this._actionEvents)||t.add((null==e?void 0:e.event)||"")})}),null!=(n=this._instance)&&n.autocapture)){var r,i=new Set
e.forEach(e=>{var t
null==(t=e.steps)||t.forEach(e=>{null!=e&&e.selector&&i.add(null==e?void 0:e.selector)})}),null==(r=this._instance)||r.autocapture.setElementSelectors(i)}}on(e,t){var n
null!=t&&0!=e.length&&(this._actionEvents.has(e)||this._actionEvents.has(null==t?void 0:t.event))&&this._actionRegistry&&(null==(n=this._actionRegistry)?void 0:n.size)>0&&this._actionRegistry.forEach(e=>{this._checkAction(t,e)&&this._debugEventEmitter.emit("actionCaptured",e.name)})}_addActionHook(e){this.onAction("actionCaptured",t=>e(t))}_checkAction(e,t){if(null==(null==t?void 0:t.steps))return!1
for(var n of t.steps)if(this._checkStep(e,n))return!0
return!1}onAction(e,t){return this._debugEventEmitter.on(e,t)}_checkStepUrl(e,t){if(null!=t&&t.url){var n,r=null==e||null==(n=e.properties)?void 0:n.$current_url
if(!r||"string"!=typeof r)return!1
if(!co._matchString(r,null==t?void 0:t.url,(null==t?void 0:t.url_matching)||"contains"))return!1}return!0}static _matchString(e,t,n){switch(n){case"regex":return!!p&&Fi(e,t)
case"exact":return t===e
case"contains":var r=co._escapeStringRegexp(t).replace(/_/g,".").replace(/%/g,".*")
return Fi(e,r)
default:return!1}}static _escapeStringRegexp(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}_checkStepElement(e,t){if((null!=t&&t.href||null!=t&&t.tag_name||null!=t&&t.text)&&!this._getElementsList(e).some(e=>!(null!=t&&t.href&&!co._matchString(e.href||"",null==t?void 0:t.href,(null==t?void 0:t.href_matching)||"exact")||null!=t&&t.tag_name&&e.tag_name!==(null==t?void 0:t.tag_name)||null!=t&&t.text&&!co._matchString(e.text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")&&!co._matchString(e.$el_text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact"))))return!1
if(null!=t&&t.selector){var n,r=null==e||null==(n=e.properties)?void 0:n.$element_selectors
if(!r)return!1
if(!r.includes(null==t?void 0:t.selector))return!1}return!0}_getElementsList(e){return null==(null==e?void 0:e.properties.$elements)?[]:null==e?void 0:e.properties.$elements}}!function(e){e.Button="button",e.Tab="tab",e.Selector="selector"}({}),function(e){e.TopLeft="top_left",e.TopRight="top_right",e.TopCenter="top_center",e.MiddleLeft="middle_left",e.MiddleRight="middle_right",e.MiddleCenter="middle_center",e.Left="left",e.Center="center",e.Right="right",e.NextToTrigger="next_to_trigger"}({})
var uo=function(e){return e.Popover="popover",e.API="api",e.Widget="widget",e.ExternalSurvey="external_survey",e}({})
!function(e){e.Open="open",e.MultipleChoice="multiple_choice",e.SingleChoice="single_choice",e.Rating="rating",e.Link="link"}({}),function(e){e.NextQuestion="next_question",e.End="end",e.ResponseBased="response_based",e.SpecificQuestion="specific_question"}({}),function(e){e.Once="once",e.Recurring="recurring",e.Always="always"}({})
var fo=function(e){return e.SHOWN="survey shown",e.DISMISSED="survey dismissed",e.SENT="survey sent",e}({}),ho=function(e){return e.SURVEY_ID="$survey_id",e.SURVEY_NAME="$survey_name",e.SURVEY_RESPONSE="$survey_response",e.SURVEY_ITERATION="$survey_iteration",e.SURVEY_ITERATION_START_DATE="$survey_iteration_start_date",e.SURVEY_PARTIALLY_COMPLETED="$survey_partially_completed",e.SURVEY_SUBMISSION_ID="$survey_submission_id",e.SURVEY_QUESTIONS="$survey_questions",e.SURVEY_COMPLETED="$survey_completed",e}({}),po=ee("[Surveys]"),go="seenSurvey_",_o=(e,t)=>{var n="$survey_"+t+"/"+e.id
return e.current_iteration&&e.current_iteration>0&&(n="$survey_"+t+"/"+e.id+"/"+e.current_iteration),n},vo=e=>{var t=""+go+e.id
return e.current_iteration&&e.current_iteration>0&&(t=""+go+e.id+"_"+e.current_iteration),t},mo=[uo.Popover,uo.Widget,uo.API]
class yo{constructor(e){this._instance=e,this._eventToSurveys=new Map,this._actionToSurveys=new Map}register(e){var t
G(null==(t=this._instance)?void 0:t._addCaptureHook)||(this._setupEventBasedSurveys(e),this._setupActionBasedSurveys(e))}_setupActionBasedSurveys(e){var t=e.filter(e=>{var t,n
return(null==(t=e.conditions)?void 0:t.actions)&&(null==(n=e.conditions)||null==(n=n.actions)||null==(n=n.values)?void 0:n.length)>0})
0!==t.length&&(null==this._actionMatcher&&(this._actionMatcher=new co(this._instance),this._actionMatcher.init(),this._actionMatcher._addActionHook(e=>{this.onAction(e)})),t.forEach(e=>{var t,n,r,i,s
e.conditions&&null!=(t=e.conditions)&&t.actions&&null!=(n=e.conditions)&&null!=(n=n.actions)&&n.values&&(null==(r=e.conditions)||null==(r=r.actions)||null==(r=r.values)?void 0:r.length)>0&&(null==(i=this._actionMatcher)||i.register(e.conditions.actions.values),null==(s=e.conditions)||null==(s=s.actions)||null==(s=s.values)||s.forEach(t=>{if(t&&t.name){var n=this._actionToSurveys.get(t.name)
n&&n.push(e.id),this._actionToSurveys.set(t.name,n||[e.id])}}))}))}_setupEventBasedSurveys(e){var t
0!==e.filter(e=>{var t,n
return(null==(t=e.conditions)?void 0:t.events)&&(null==(n=e.conditions)||null==(n=n.events)||null==(n=n.values)?void 0:n.length)>0}).length&&(null==(t=this._instance)||t._addCaptureHook((e,t)=>{this.onEvent(e,t)}),e.forEach(e=>{var t
null==(t=e.conditions)||null==(t=t.events)||null==(t=t.values)||t.forEach(t=>{if(t&&t.name){var n=this._eventToSurveys.get(t.name)
n&&n.push(e.id),this._eventToSurveys.set(t.name,n||[e.id])}})}))}onEvent(e,t){var n,r=(null==(n=this._instance)||null==(n=n.persistence)?void 0:n.props[Ue])||[]
if("survey shown"===e&&t&&r.length>0){var i
po.info("survey event matched, removing survey from activated surveys",{event:e,eventPayload:t,existingActivatedSurveys:r})
var s=null==t||null==(i=t.properties)?void 0:i.$survey_id
if(s){var o=r.indexOf(s)
o>=0&&(r.splice(o,1),this._updateActivatedSurveys(r))}}else this._eventToSurveys.has(e)&&(po.info("survey event matched, updating activated surveys",{event:e,surveys:this._eventToSurveys.get(e)}),this._updateActivatedSurveys(r.concat(this._eventToSurveys.get(e)||[])))}onAction(e){var t,n=(null==(t=this._instance)||null==(t=t.persistence)?void 0:t.props[Ue])||[]
this._actionToSurveys.has(e)&&this._updateActivatedSurveys(n.concat(this._actionToSurveys.get(e)||[]))}_updateActivatedSurveys(e){var t
null==(t=this._instance)||null==(t=t.persistence)||t.register({[Ue]:[...new Set(e)]})}getSurveys(){var e
return(null==(e=this._instance)||null==(e=e.persistence)?void 0:e.props[Ue])||[]}getEventToSurveys(){return this._eventToSurveys}_getActionMatcher(){return this._actionMatcher}}class bo{constructor(e){this._isSurveysEnabled=void 0,this._surveyManager=null,this._isFetchingSurveys=!1,this._isInitializingSurveys=!1,this._surveyCallbacks=[],this._instance=e,this._surveyEventReceiver=null}onRemoteConfig(e){var t=e.surveys
if(Q(t))return po.warn("Flags not loaded yet. Not loading surveys.")
var n=B(t)
this._isSurveysEnabled=n?t.length>0:t,po.info("flags response received, isSurveysEnabled: "+this._isSurveysEnabled),this.loadIfEnabled()}reset(){localStorage.removeItem("lastSeenSurveyDate")
for(var e=[],t=0;t<localStorage.length;t++){var n=localStorage.key(t);(null!=n&&n.startsWith(go)||null!=n&&n.startsWith("inProgressSurvey_"))&&e.push(n)}e.forEach(e=>localStorage.removeItem(e))}loadIfEnabled(){if(!this._surveyManager)if(this._isInitializingSurveys)po.info("Already initializing surveys, skipping...")
else if(this._instance.config.disable_surveys)po.info("Disabled. Not loading surveys.")
else if(this._instance.config.cookieless_mode)po.info("Not loading surveys in cookieless mode.")
else{var e=null==C?void 0:C.__PosthogExtensions__
if(e){if(!G(this._isSurveysEnabled)||this._instance.config.advanced_enable_surveys){var t=this._isSurveysEnabled||this._instance.config.advanced_enable_surveys
this._isInitializingSurveys=!0
try{var n=e.generateSurveys
if(n)return void this._completeSurveyInitialization(n,t)
var r=e.loadExternalDependency
if(!r)return void this._handleSurveyLoadError("PostHog loadExternalDependency extension not found.")
r(this._instance,"surveys",n=>{n||!e.generateSurveys?this._handleSurveyLoadError("Could not load surveys script",n):this._completeSurveyInitialization(e.generateSurveys,t)})}catch(e){throw this._handleSurveyLoadError("Error initializing surveys",e),e}finally{this._isInitializingSurveys=!1}}}else po.error("PostHog Extensions not found.")}}_completeSurveyInitialization(e,t){this._surveyManager=e(this._instance,t),this._surveyEventReceiver=new yo(this._instance),po.info("Surveys loaded successfully"),this._notifySurveyCallbacks({isLoaded:!0})}_handleSurveyLoadError(e,t){po.error(e,t),this._notifySurveyCallbacks({isLoaded:!1,error:e})}onSurveysLoaded(e){return this._surveyCallbacks.push(e),this._surveyManager&&this._notifySurveyCallbacks({isLoaded:!0}),()=>{this._surveyCallbacks=this._surveyCallbacks.filter(t=>t!==e)}}getSurveys(e,t){if(void 0===t&&(t=!1),this._instance.config.disable_surveys)return po.info("Disabled. Not loading surveys."),e([])
var n=this._instance.get_property(He)
if(n&&!t)return e(n,{isLoaded:!0})
if(this._isFetchingSurveys)return e([],{isLoaded:!1,error:"Surveys are already being loaded"})
try{this._isFetchingSurveys=!0,this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/surveys/?token="+this._instance.config.token),method:"GET",timeout:this._instance.config.surveys_request_timeout_ms,callback:t=>{var n
this._isFetchingSurveys=!1
var r=t.statusCode
if(200!==r||!t.json){var i="Surveys API could not be loaded, status: "+r
return po.error(i),e([],{isLoaded:!1,error:i})}var s,o=t.json.surveys||[],a=o.filter(e=>function(e){return!(!e.start_date||e.end_date)}(e)&&(function(e){var t
return!(null==(t=e.conditions)||null==(t=t.events)||null==(t=t.values)||!t.length)}(e)||function(e){var t
return!(null==(t=e.conditions)||null==(t=t.actions)||null==(t=t.values)||!t.length)}(e)))
return a.length>0&&(null==(s=this._surveyEventReceiver)||s.register(a)),null==(n=this._instance.persistence)||n.register({[He]:o}),e(o,{isLoaded:!0})}})}catch(e){throw this._isFetchingSurveys=!1,e}}_notifySurveyCallbacks(e){for(var t of this._surveyCallbacks)try{if(!e.isLoaded)return t([],e)
this.getSurveys(t)}catch(e){po.error("Error in survey callback",e)}}getActiveMatchingSurveys(e,t){if(void 0===t&&(t=!1),!Q(this._surveyManager))return this._surveyManager.getActiveMatchingSurveys(e,t)
po.warn("init was not called")}_getSurveyById(e){var t=null
return this.getSurveys(n=>{var r
t=null!==(r=n.find(t=>t.id===e))&&void 0!==r?r:null}),t}_checkSurveyEligibility(e){if(Q(this._surveyManager))return{eligible:!1,reason:"SDK is not enabled or survey functionality is not yet loaded"}
var t="string"==typeof e?this._getSurveyById(e):e
return t?this._surveyManager.checkSurveyEligibility(t):{eligible:!1,reason:"Survey not found"}}canRenderSurvey(e){if(Q(this._surveyManager))return po.warn("init was not called"),{visible:!1,disabledReason:"SDK is not enabled or survey functionality is not yet loaded"}
var t=this._checkSurveyEligibility(e)
return{visible:t.eligible,disabledReason:t.reason}}canRenderSurveyAsync(e,t){return Q(this._surveyManager)?(po.warn("init was not called"),Promise.resolve({visible:!1,disabledReason:"SDK is not enabled or survey functionality is not yet loaded"})):new Promise(n=>{this.getSurveys(t=>{var r,i=null!==(r=t.find(t=>t.id===e))&&void 0!==r?r:null
if(i){var s=this._checkSurveyEligibility(i)
n({visible:s.eligible,disabledReason:s.reason})}else n({visible:!1,disabledReason:"Survey not found"})},t)})}renderSurvey(e,t){if(Q(this._surveyManager))po.warn("init was not called")
else{var n=this._getSurveyById(e)
if(n)if(mo.includes(n.type)){var r=null==b?void 0:b.querySelector(t)
r?this._surveyManager.renderSurvey(n,r):po.warn("Survey element not found")}else po.warn("Surveys of type "+n.type+" cannot be rendered in the app")
else po.warn("Survey not found")}}}var wo=ee("[RateLimiter]")
class ko{constructor(e){var t,n
this.serverLimits={},this.lastEventRateLimited=!1,this.checkForLimiting=e=>{var t=e.text
if(t&&t.length)try{(JSON.parse(t).quota_limited||[]).forEach(e=>{wo.info((e||"events")+" is quota limited."),this.serverLimits[e]=(new Date).getTime()+6e4})}catch(e){return void wo.warn('could not rate limit - continuing. Error: "'+(null==e?void 0:e.message)+'"',{text:t})}},this.instance=e,this.captureEventsPerSecond=(null==(t=e.config.rate_limiting)?void 0:t.events_per_second)||10,this.captureEventsBurstLimit=Math.max((null==(n=e.config.rate_limiting)?void 0:n.events_burst_limit)||10*this.captureEventsPerSecond,this.captureEventsPerSecond),this.lastEventRateLimited=this.clientRateLimitContext(!0).isRateLimited}clientRateLimitContext(e){var t,n,r
void 0===e&&(e=!1)
var i=(new Date).getTime(),s=null!==(t=null==(n=this.instance.persistence)?void 0:n.get_property(Ve))&&void 0!==t?t:{tokens:this.captureEventsBurstLimit,last:i}
s.tokens+=(i-s.last)/1e3*this.captureEventsPerSecond,s.last=i,s.tokens>this.captureEventsBurstLimit&&(s.tokens=this.captureEventsBurstLimit)
var o=s.tokens<1
return o||e||(s.tokens=Math.max(0,s.tokens-1)),!o||this.lastEventRateLimited||e||this.instance.capture("$$client_ingestion_warning",{$$client_ingestion_warning_message:"posthog-js client rate limited. Config is set to "+this.captureEventsPerSecond+" events per second and "+this.captureEventsBurstLimit+" events burst limit."},{skip_client_rate_limiting:!0}),this.lastEventRateLimited=o,null==(r=this.instance.persistence)||r.set_property(Ve,s),{isRateLimited:o,remainingTokens:s.tokens}}isServerRateLimited(e){var t=this.serverLimits[e||"events"]||!1
return!1!==t&&(new Date).getTime()<t}}var So=ee("[RemoteConfig]")
class xo{constructor(e){this._instance=e}get remoteConfig(){var e
return null==(e=C._POSTHOG_REMOTE_CONFIG)||null==(e=e[this._instance.config.token])?void 0:e.config}_loadRemoteConfigJs(e){var t,n
null!=(t=C.__PosthogExtensions__)&&t.loadExternalDependency?null==(n=C.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"remote-config",()=>e(this.remoteConfig)):(So.error("PostHog Extensions not found. Cannot load remote config."),e())}_loadRemoteConfigJSON(e){this._instance._send_request({method:"GET",url:this._instance.requestRouter.endpointFor("assets","/array/"+this._instance.config.token+"/config"),callback:t=>{e(t.json)}})}load(){try{if(this.remoteConfig)return So.info("Using preloaded remote config",this.remoteConfig),void this._onRemoteConfig(this.remoteConfig)
if(this._instance._shouldDisableFlags())return void So.warn("Remote config is disabled. Falling back to local config.")
this._loadRemoteConfigJs(e=>{if(!e)return So.info("No config found after loading remote JS config. Falling back to JSON."),void this._loadRemoteConfigJSON(e=>{this._onRemoteConfig(e)})
this._onRemoteConfig(e)})}catch(e){So.error("Error loading remote config",e)}}_onRemoteConfig(e){e?this._instance.config.__preview_remote_config?(this._instance._onRemoteConfig(e),!1!==e.hasFeatureFlags&&this._instance.featureFlags.ensureFlagsLoaded()):So.info("__preview_remote_config is disabled. Logging config instead",e):So.error("Failed to fetch remote config from PostHog.")}}var Eo=3e3
class Co{constructor(e,t){this._isPaused=!0,this._queue=[],this._flushTimeoutMs=dn((null==t?void 0:t.flush_interval_ms)||Eo,250,5e3,"flush interval",Eo),this._sendRequest=e}enqueue(e){this._queue.push(e),this._flushTimeout||this._setFlushTimeout()}unload(){this._clearFlushTimeout()
var e=this._queue.length>0?this._formatQueue():{},t=Object.values(e);[...t.filter(e=>0===e.url.indexOf("/e")),...t.filter(e=>0!==e.url.indexOf("/e"))].map(e=>{this._sendRequest(f({},e,{transport:"sendBeacon"}))})}enable(){this._isPaused=!1,this._setFlushTimeout()}_setFlushTimeout(){var e=this
this._isPaused||(this._flushTimeout=setTimeout(()=>{if(this._clearFlushTimeout(),this._queue.length>0){var t=this._formatQueue(),n=function(){var n=t[r],i=(new Date).getTime()
n.data&&B(n.data)&&re(n.data,e=>{e.offset=Math.abs(e.timestamp-i),delete e.timestamp}),e._sendRequest(n)}
for(var r in t)n()}},this._flushTimeoutMs))}_clearFlushTimeout(){clearTimeout(this._flushTimeout),this._flushTimeout=void 0}_formatQueue(){var e={}
return re(this._queue,t=>{var n,r=t,i=(r?r.batchKey:null)||r.url
G(e[i])&&(e[i]=f({},r,{data:[]})),null==(n=e[i].data)||n.push(r.data)}),this._queue=[],e}}var To=["retriesPerformedSoFar"]
class Po{constructor(e){this._isPolling=!1,this._pollIntervalMs=3e3,this._queue=[],this._instance=e,this._queue=[],this._areWeOnline=!0,!G(p)&&"onLine"in p.navigator&&(this._areWeOnline=p.navigator.onLine,he(p,"online",()=>{this._areWeOnline=!0,this._flush()}),he(p,"offline",()=>{this._areWeOnline=!1}))}get length(){return this._queue.length}retriableRequest(e){var{retriesPerformedSoFar:t}=e,n=h(e,To)
K(t)&&t>0&&(n.url=Ii(n.url,{retry_count:t})),this._instance._send_request(f({},n,{callback:e=>{200!==e.statusCode&&(e.statusCode<400||e.statusCode>=500)&&(null!=t?t:0)<10?this._enqueue(f({retriesPerformedSoFar:t},n)):null==n.callback||n.callback(e)}}))}_enqueue(e){var t=e.retriesPerformedSoFar||0
e.retriesPerformedSoFar=t+1
var n=function(e){var t=3e3*Math.pow(2,e),n=t/2,r=Math.min(18e5,t),i=(Math.random()-.5)*(r-n)
return Math.ceil(r+i)}(t),r=Date.now()+n
this._queue.push({retryAt:r,requestOptions:e})
var i="Enqueued failed request for retry in "+n
navigator.onLine||(i+=" (Browser is offline)"),Z.warn(i),this._isPolling||(this._isPolling=!0,this._poll())}_poll(){this._poller&&clearTimeout(this._poller),this._poller=setTimeout(()=>{this._areWeOnline&&this._queue.length>0&&this._flush(),this._poll()},this._pollIntervalMs)}_flush(){var e=Date.now(),t=[],n=this._queue.filter(n=>n.retryAt<e||(t.push(n),!1))
if(this._queue=t,n.length>0)for(var{requestOptions:r}of n)this.retriableRequest(r)}unload(){for(var{requestOptions:e}of(this._poller&&(clearTimeout(this._poller),this._poller=void 0),this._queue))try{this._instance._send_request(f({},e,{transport:"sendBeacon"}))}catch(e){Z.error(e)}this._queue=[]}}class $o{constructor(e){this._updateScrollData=()=>{var e,t,n,r
this._context||(this._context={})
var i=this.scrollElement(),s=this.scrollY(),o=i?Math.max(0,i.scrollHeight-i.clientHeight):0,a=s+((null==i?void 0:i.clientHeight)||0),l=(null==i?void 0:i.scrollHeight)||0
this._context.lastScrollY=Math.ceil(s),this._context.maxScrollY=Math.max(s,null!==(e=this._context.maxScrollY)&&void 0!==e?e:0),this._context.maxScrollHeight=Math.max(o,null!==(t=this._context.maxScrollHeight)&&void 0!==t?t:0),this._context.lastContentY=a,this._context.maxContentY=Math.max(a,null!==(n=this._context.maxContentY)&&void 0!==n?n:0),this._context.maxContentHeight=Math.max(l,null!==(r=this._context.maxContentHeight)&&void 0!==r?r:0)},this._instance=e}getContext(){return this._context}resetContext(){var e=this._context
return setTimeout(this._updateScrollData,0),e}startMeasuringScrollPosition(){he(p,"scroll",this._updateScrollData,{capture:!0}),he(p,"scrollend",this._updateScrollData,{capture:!0}),he(p,"resize",this._updateScrollData)}scrollElement(){if(!this._instance.config.scroll_root_selector)return null==p?void 0:p.document.documentElement
var e=B(this._instance.config.scroll_root_selector)?this._instance.config.scroll_root_selector:[this._instance.config.scroll_root_selector]
for(var t of e){var n=null==p?void 0:p.document.querySelector(t)
if(n)return n}}scrollY(){if(this._instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollTop||0}return p&&(p.scrollY||p.pageYOffset||p.document.documentElement.scrollTop)||0}scrollX(){if(this._instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollLeft||0}return p&&(p.scrollX||p.pageXOffset||p.document.documentElement.scrollLeft)||0}}var Lo=e=>zs(null==e?void 0:e.config.mask_personal_data_properties,null==e?void 0:e.config.custom_personal_data_properties)
class Io{constructor(e,t,n,r){this._onSessionIdCallback=e=>{var t=this._getStored()
if(!t||t.sessionId!==e){var n={sessionId:e,props:this._sessionSourceParamGenerator(this._instance)}
this._persistence.register({[ze]:n})}},this._instance=e,this._sessionIdManager=t,this._persistence=n,this._sessionSourceParamGenerator=r||Lo,this._sessionIdManager.onSessionId(this._onSessionIdCallback)}_getStored(){return this._persistence.props[ze]}getSetOnceProps(){var e,t=null==(e=this._getStored())?void 0:e.props
return t?"r"in t?Vs(t):{$referring_domain:t.referringDomain,$pathname:t.initialPathName,utm_source:t.utm_source,utm_campaign:t.utm_campaign,utm_medium:t.utm_medium,utm_content:t.utm_content,utm_term:t.utm_term}:{}}getSessionProps(){var e={}
return re(ce(this.getSetOnceProps()),(t,n)=>{"$current_url"===n&&(n="url"),e["$session_entry_"+F(n)]=t}),e}}var Mo=ee("[SessionId]")
class Oo{constructor(e,t,n){var r
if(this._sessionIdChangedHandlers=[],this._sessionHasBeenIdleTooLong=(e,t)=>Math.abs(e-t)>this.sessionTimeoutMs,!e.persistence)throw new Error("SessionIdManager requires a PostHogPersistence instance")
if("always"===e.config.cookieless_mode)throw new Error('SessionIdManager cannot be used with cookieless_mode="always"')
this._config=e.config,this._persistence=e.persistence,this._windowId=void 0,this._sessionId=void 0,this._sessionStartTimestamp=null,this._sessionActivityTimestamp=null,this._sessionIdGenerator=t||Wt,this._windowIdGenerator=n||Wt
var i=this._config.persistence_name||this._config.token,s=this._config.session_idle_timeout_seconds||1800
if(this._sessionTimeoutMs=1e3*dn(s,60,36e3,"session_idle_timeout_seconds",1800),e.register({$configured_session_timeout_ms:this._sessionTimeoutMs}),this._resetIdleTimer(),this._window_id_storage_key="ph_"+i+"_window_id",this._primary_window_exists_storage_key="ph_"+i+"_primary_window_exists",this._canUseSessionStorage()){var o=rn._parse(this._window_id_storage_key),a=rn._parse(this._primary_window_exists_storage_key)
o&&!a?this._windowId=o:rn._remove(this._window_id_storage_key),rn._set(this._primary_window_exists_storage_key,!0)}if(null!=(r=this._config.bootstrap)&&r.sessionID)try{var l=(()=>{var e=this._config.bootstrap.sessionID.replace(/-/g,"")
if(32!==e.length)throw new Error("Not a valid UUID")
if("7"!==e[12])throw new Error("Not a UUIDv7")
return parseInt(e.substring(0,12),16)})()
this._setSessionId(this._config.bootstrap.sessionID,(new Date).getTime(),l)}catch(e){Mo.error("Invalid sessionID in bootstrap",e)}this._listenToReloadWindow()}get sessionTimeoutMs(){return this._sessionTimeoutMs}onSessionId(e){return G(this._sessionIdChangedHandlers)&&(this._sessionIdChangedHandlers=[]),this._sessionIdChangedHandlers.push(e),this._sessionId&&e(this._sessionId,this._windowId),()=>{this._sessionIdChangedHandlers=this._sessionIdChangedHandlers.filter(t=>t!==e)}}_canUseSessionStorage(){return"memory"!==this._config.persistence&&!this._persistence._disabled&&rn._is_supported()}_setWindowId(e){e!==this._windowId&&(this._windowId=e,this._canUseSessionStorage()&&rn._set(this._window_id_storage_key,e))}_getWindowId(){return this._windowId?this._windowId:this._canUseSessionStorage()?rn._parse(this._window_id_storage_key):null}_setSessionId(e,t,n){e===this._sessionId&&t===this._sessionActivityTimestamp&&n===this._sessionStartTimestamp||(this._sessionStartTimestamp=n,this._sessionActivityTimestamp=t,this._sessionId=e,this._persistence.register({[Oe]:[t,e,n]}))}_getSessionId(){if(this._sessionId&&this._sessionActivityTimestamp&&this._sessionStartTimestamp)return[this._sessionActivityTimestamp,this._sessionId,this._sessionStartTimestamp]
var e=this._persistence.props[Oe]
return B(e)&&2===e.length&&e.push(e[0]),e||[0,null,0]}resetSessionId(){this._setSessionId(null,null,null)}_listenToReloadWindow(){he(p,"beforeunload",()=>{this._canUseSessionStorage()&&rn._remove(this._primary_window_exists_storage_key)},{capture:!1})}checkAndGetSessionAndWindowId(e,t){if(void 0===e&&(e=!1),void 0===t&&(t=null),"always"===this._config.cookieless_mode)throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"')
var n=t||(new Date).getTime(),[r,i,s]=this._getSessionId(),o=this._getWindowId(),a=K(s)&&s>0&&Math.abs(n-s)>864e5,l=!1,c=!i,u=!e&&this._sessionHasBeenIdleTooLong(n,r)
c||u||a?(i=this._sessionIdGenerator(),o=this._windowIdGenerator(),Mo.info("new session ID generated",{sessionId:i,windowId:o,changeReason:{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}}),s=n,l=!0):o||(o=this._windowIdGenerator(),l=!0)
var d=0===r||!e||a?n:r,f=0===s?(new Date).getTime():s
return this._setWindowId(o),this._setSessionId(i,d,f),e||this._resetIdleTimer(),l&&this._sessionIdChangedHandlers.forEach(e=>e(i,o,l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0)),{sessionId:i,windowId:o,sessionStartTimestamp:f,changeReason:l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0,lastActivityTimestamp:r}}_resetIdleTimer(){clearTimeout(this._enforceIdleTimeout),this._enforceIdleTimeout=setTimeout(()=>{var[e]=this._getSessionId()
this._sessionHasBeenIdleTooLong((new Date).getTime(),e)&&this.resetSessionId()},1.1*this.sessionTimeoutMs)}}var Ro=["$set_once","$set"],Fo=ee("[SiteApps]")
class Ao{constructor(e){this._instance=e,this._bufferedInvocations=[],this.apps={}}get isEnabled(){return!!this._instance.config.opt_in_site_apps}_eventCollector(e,t){if(t){var n=this.globalsForEvent(t)
this._bufferedInvocations.push(n),this._bufferedInvocations.length>1e3&&(this._bufferedInvocations=this._bufferedInvocations.slice(10))}}get siteAppLoaders(){var e
return null==(e=C._POSTHOG_REMOTE_CONFIG)||null==(e=e[this._instance.config.token])?void 0:e.siteApps}init(){if(this.isEnabled){var e=this._instance._addCaptureHook(this._eventCollector.bind(this))
this._stopBuffering=()=>{e(),this._bufferedInvocations=[],this._stopBuffering=void 0}}}globalsForEvent(e){var t,n,r,i,s,o,a
if(!e)throw new Error("Event payload is required")
var l={},c=this._instance.get_property("$groups")||[],u=this._instance.get_property("$stored_group_properties")||{}
for(var[d,p]of Object.entries(u))l[d]={id:c[d],type:d,properties:p}
var{$set_once:g,$set:_}=e
return{event:f({},h(e,Ro),{properties:f({},e.properties,_?{$set:f({},null!==(t=null==(n=e.properties)?void 0:n.$set)&&void 0!==t?t:{},_)}:{},g?{$set_once:f({},null!==(r=null==(i=e.properties)?void 0:i.$set_once)&&void 0!==r?r:{},g)}:{}),elements_chain:null!==(s=null==(o=e.properties)?void 0:o.$elements_chain)&&void 0!==s?s:"",distinct_id:null==(a=e.properties)?void 0:a.distinct_id}),person:{properties:this._instance.get_property("$stored_person_properties")},groups:l}}setupSiteApp(e){var t=this.apps[e.id],n=()=>{var n
!t.errored&&this._bufferedInvocations.length&&(Fo.info("Processing "+this._bufferedInvocations.length+" events for site app with id "+e.id),this._bufferedInvocations.forEach(e=>null==t.processEvent?void 0:t.processEvent(e)),t.processedBuffer=!0),Object.values(this.apps).every(e=>e.processedBuffer||e.errored)&&(null==(n=this._stopBuffering)||n.call(this))},r=!1,i=i=>{t.errored=!i,t.loaded=!0,Fo.info("Site app with id "+e.id+" "+(i?"loaded":"errored")),r&&n()}
try{var{processEvent:s}=e.init({posthog:this._instance,callback:e=>{i(e)}})
s&&(t.processEvent=s),r=!0}catch(t){Fo.error("Error while initializing PostHog app with config id "+e.id,t),i(!1)}if(r&&t.loaded)try{n()}catch(n){Fo.error("Error while processing buffered events PostHog app with config id "+e.id,n),t.errored=!0}}_setupSiteApps(){var e=this.siteAppLoaders||[]
for(var t of e)this.apps[t.id]={id:t.id,loaded:!1,errored:!1,processedBuffer:!1}
for(var n of e)this.setupSiteApp(n)}_onCapturedEvent(e){if(0!==Object.keys(this.apps).length){var t=this.globalsForEvent(e)
for(var n of Object.values(this.apps))try{null==n.processEvent||n.processEvent(t)}catch(t){Fo.error("Error while processing event "+e.event+" for site app "+n.id,t)}}}onRemoteConfig(e){var t,n,r,i=this
if(null!=(t=this.siteAppLoaders)&&t.length)return this.isEnabled?(this._setupSiteApps(),void this._instance.on("eventCaptured",e=>this._onCapturedEvent(e))):void Fo.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
if(null==(n=this._stopBuffering)||n.call(this),null!=(r=e.siteApps)&&r.length)if(this.isEnabled){var s=function(e){var t
C["__$$ph_site_app_"+e]=i._instance,null==(t=C.__PosthogExtensions__)||null==t.loadSiteApp||t.loadSiteApp(i._instance,a,t=>{if(t)return Fo.error("Error while initializing PostHog app with config id "+e,t)})}
for(var{id:o,url:a}of e.siteApps)s(o)}else Fo.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')}}var jo=["amazonbot","amazonproductbot","app.hypefactors.com","applebot","archive.org_bot","awariobot","backlinksextendedbot","baiduspider","bingbot","bingpreview","chrome-lighthouse","dataforseobot","deepscan","duckduckbot","facebookexternal","facebookcatalog","http://yandex.com/bots","hubspot","ia_archiver","leikibot","linkedinbot","meta-externalagent","mj12bot","msnbot","nessus","petalbot","pinterest","prerender","rogerbot","screaming frog","sebot-wa","sitebulb","slackbot","slurp","trendictionbot","turnitin","twitterbot","vercel-screenshot","vercelbot","yahoo! slurp","yandexbot","zoombot","bot.htm","bot.php","(bot;","bot/","crawler","ahrefsbot","ahrefssiteaudit","semrushbot","siteauditbot","splitsignalbot","gptbot","oai-searchbot","chatgpt-user","perplexitybot","better uptime bot","sentryuptimebot","uptimerobot","headlesschrome","cypress","google-hoteladsverifier","adsbot-google","apis-google","duplexweb-google","feedfetcher-google","google favicon","google web preview","google-read-aloud","googlebot","googleother","google-cloudvertexbot","googleweblight","mediapartners-google","storebot-google","google-inspectiontool","bytespider"],No=function(e,t){if(!e)return!1
var n=e.toLowerCase()
return jo.concat(t||[]).some(e=>{var t=e.toLowerCase()
return-1!==n.indexOf(t)})},Do=function(e,t){if(!e)return!1
var n=e.userAgent
if(n&&No(n,t))return!0
try{var r=null==e?void 0:e.userAgentData
if(null!=r&&r.brands&&r.brands.some(e=>No(null==e?void 0:e.brand,t)))return!0}catch(e){}return!!e.webdriver},Bo=function(e){return e.US="us",e.EU="eu",e.CUSTOM="custom",e}({}),qo="i.posthog.com"
class Ho{constructor(e){this._regionCache={},this.instance=e}get apiHost(){var e=this.instance.config.api_host.trim().replace(/\/$/,"")
return"https://app.posthog.com"===e?"https://us.i.posthog.com":e}get uiHost(){var e,t=null==(e=this.instance.config.ui_host)?void 0:e.replace(/\/$/,"")
return t||(t=this.apiHost.replace("."+qo,".posthog.com")),"https://app.posthog.com"===t?"https://us.posthog.com":t}get region(){return this._regionCache[this.apiHost]||(/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=Bo.US:/https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=Bo.EU:this._regionCache[this.apiHost]=Bo.CUSTOM),this._regionCache[this.apiHost]}endpointFor(e,t){if(void 0===t&&(t=""),t&&(t="/"===t[0]?t:"/"+t),"ui"===e)return this.uiHost+t
if(this.region===Bo.CUSTOM)return this.apiHost+t
var n=qo+t
switch(e){case"assets":return"https://"+this.region+"-assets."+n
case"api":return"https://"+this.region+"."+n}}}var Uo={icontains:(e,t)=>!!p&&t.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:(e,t)=>!!p&&-1===t.href.toLowerCase().indexOf(e.toLowerCase()),regex:(e,t)=>!!p&&Fi(t.href,e),not_regex:(e,t)=>!!p&&!Fi(t.href,e),exact:(e,t)=>t.href===e,is_not:(e,t)=>t.href!==e}
class Go{constructor(e){var t=this
this.getWebExperimentsAndEvaluateDisplayLogic=function(e){void 0===e&&(e=!1),t.getWebExperiments(e=>{Go._logInfo("retrieved web experiments from the server"),t._flagToExperiments=new Map,e.forEach(e=>{if(e.feature_flag_key){var n
t._flagToExperiments&&(Go._logInfo("setting flag key ",e.feature_flag_key," to web experiment ",e),null==(n=t._flagToExperiments)||n.set(e.feature_flag_key,e))
var r=t._instance.getFeatureFlag(e.feature_flag_key)
W(r)&&e.variants[r]&&t._applyTransforms(e.name,r,e.variants[r].transforms)}else if(e.variants)for(var i in e.variants){var s=e.variants[i]
Go._matchesTestVariant(s)&&t._applyTransforms(e.name,i,s.transforms)}})},e)},this._instance=e,this._instance.onFeatureFlags(e=>{this.onFeatureFlags(e)})}onFeatureFlags(e){if(this._is_bot())Go._logInfo("Refusing to render web experiment since the viewer is a likely bot")
else if(!this._instance.config.disable_web_experiments){if(Q(this._flagToExperiments))return this._flagToExperiments=new Map,this.loadIfEnabled(),void this.previewWebExperiment()
Go._logInfo("applying feature flags",e),e.forEach(e=>{var t
if(this._flagToExperiments&&null!=(t=this._flagToExperiments)&&t.has(e)){var n,r=this._instance.getFeatureFlag(e),i=null==(n=this._flagToExperiments)?void 0:n.get(e)
r&&null!=i&&i.variants[r]&&this._applyTransforms(i.name,r,i.variants[r].transforms)}})}}previewWebExperiment(){var e=Go.getWindowLocation()
if(null!=e&&e.search){var t=It(null==e?void 0:e.search,"__experiment_id"),n=It(null==e?void 0:e.search,"__experiment_variant")
t&&n&&(Go._logInfo("previewing web experiments "+t+" && "+n),this.getWebExperiments(e=>{this._showPreviewWebExperiment(parseInt(t),n,e)},!1,!0))}}loadIfEnabled(){this._instance.config.disable_web_experiments||this.getWebExperimentsAndEvaluateDisplayLogic()}getWebExperiments(e,t,n){if(this._instance.config.disable_web_experiments&&!n)return e([])
var r=this._instance.get_property("$web_experiments")
if(r&&!t)return e(r)
this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/web_experiments/?token="+this._instance.config.token),method:"GET",callback:t=>{if(200!==t.statusCode||!t.json)return e([])
var n=t.json.experiments||[]
return e(n)}})}_showPreviewWebExperiment(e,t,n){var r=n.filter(t=>t.id===e)
r&&r.length>0&&(Go._logInfo("Previewing web experiment ["+r[0].name+"] with variant ["+t+"]"),this._applyTransforms(r[0].name,t,r[0].variants[t].transforms))}static _matchesTestVariant(e){return!Q(e.conditions)&&Go._matchUrlConditions(e)&&Go._matchUTMConditions(e)}static _matchUrlConditions(e){var t
if(Q(e.conditions)||Q(null==(t=e.conditions)?void 0:t.url))return!0
var n,r,i,s=Go.getWindowLocation()
return!!s&&(null==(n=e.conditions)||!n.url||Uo[null!==(r=null==(i=e.conditions)?void 0:i.urlMatchType)&&void 0!==r?r:"icontains"](e.conditions.url,s))}static getWindowLocation(){return null==p?void 0:p.location}static _matchUTMConditions(e){var t
if(Q(e.conditions)||Q(null==(t=e.conditions)?void 0:t.utm))return!0
var n=qs()
if(n.utm_source){var r,i,s,o,a,l,c,u,d=null==(r=e.conditions)||null==(r=r.utm)||!r.utm_campaign||(null==(i=e.conditions)||null==(i=i.utm)?void 0:i.utm_campaign)==n.utm_campaign,f=null==(s=e.conditions)||null==(s=s.utm)||!s.utm_source||(null==(o=e.conditions)||null==(o=o.utm)?void 0:o.utm_source)==n.utm_source,h=null==(a=e.conditions)||null==(a=a.utm)||!a.utm_medium||(null==(l=e.conditions)||null==(l=l.utm)?void 0:l.utm_medium)==n.utm_medium,p=null==(c=e.conditions)||null==(c=c.utm)||!c.utm_term||(null==(u=e.conditions)||null==(u=u.utm)?void 0:u.utm_term)==n.utm_term
return d&&h&&p&&f}return!1}static _logInfo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
Z.info("[WebExperiments] "+e,n)}_applyTransforms(e,t,n){this._is_bot()?Go._logInfo("Refusing to render web experiment since the viewer is a likely bot"):"control"!==t?n.forEach(n=>{if(n.selector){var r
Go._logInfo("applying transform of variant "+t+" for experiment "+e+" ",n)
var i=null==(r=document)?void 0:r.querySelectorAll(n.selector)
null==i||i.forEach(e=>{var t=e
n.html&&(t.innerHTML=n.html),n.css&&t.setAttribute("style",n.css)})}}):Go._logInfo("Control variants leave the page unmodified.")}_is_bot(){return y&&this._instance?Do(y,this._instance.config.custom_blocked_useragents):void 0}}var Wo=ee("[PostHog ExternalIntegrations]"),zo={intercom:"intercom-integration",crispChat:"crisp-chat-integration"}
class Vo{constructor(e){this._instance=e}_loadScript(e,t){var n
null==(n=C.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,e,e=>{if(e)return Wo.error("failed to load script",e)
t()})}startIfEnabledOrStop(){var e=this,t=function(t){var n,i,s
!r||null!=(n=C.__PosthogExtensions__)&&null!=(n=n.integrations)&&n[t]||e._loadScript(zo[t],()=>{var n
null==(n=C.__PosthogExtensions__)||null==(n=n.integrations)||null==(n=n[t])||n.start(e._instance)}),!r&&null!=(i=C.__PosthogExtensions__)&&null!=(i=i.integrations)&&i[t]&&(null==(s=C.__PosthogExtensions__)||null==(s=s.integrations)||null==(s=s[t])||s.stop())}
for(var[n,r]of Object.entries(null!==(i=this._instance.config.integrations)&&void 0!==i?i:{})){var i
t(n)}}}var Qo={},Ko=()=>{},Jo="posthog",Yo=!$i&&-1===(null==E?void 0:E.indexOf("MSIE"))&&-1===(null==E?void 0:E.indexOf("Mozilla")),Xo=e=>{var t
return{api_host:"https://us.i.posthog.com",ui_host:null,token:"",autocapture:!0,rageclick:!0,cross_subdomain_cookie:de(null==b?void 0:b.location),persistence:"localStorage+cookie",persistence_name:"",loaded:Ko,save_campaign_params:!0,custom_campaign_params:[],custom_blocked_useragents:[],save_referrer:!0,capture_pageview:"2025-05-24"!==e||"history_change",capture_pageleave:"if_capture_pageview",defaults:null!=e?e:"unset",debug:w&&W(null==w?void 0:w.search)&&-1!==w.search.indexOf("__posthog_debug=true")||!1,cookie_expiration:365,upgrade:!1,disable_session_recording:!1,disable_persistence:!1,disable_web_experiments:!0,disable_surveys:!1,disable_surveys_automatic_display:!1,disable_external_dependency_loading:!1,enable_recording_console_log:void 0,secure_cookie:"https:"===(null==p||null==(t=p.location)?void 0:t.protocol),ip:!1,opt_out_capturing_by_default:!1,opt_out_persistence_by_default:!1,opt_out_useragent_filter:!1,opt_out_capturing_persistence_type:"localStorage",consent_persistence_name:null,opt_out_capturing_cookie_prefix:null,opt_in_site_apps:!1,property_denylist:[],respect_dnt:!1,sanitize_properties:null,request_headers:{},request_batching:!0,properties_string_max_length:65535,session_recording:{},mask_all_element_attributes:!1,mask_all_text:!1,mask_personal_data_properties:!1,custom_personal_data_properties:[],advanced_disable_flags:!1,advanced_disable_decide:!1,advanced_disable_feature_flags:!1,advanced_disable_feature_flags_on_first_load:!1,advanced_only_evaluate_survey_feature_flags:!1,advanced_enable_surveys:!1,advanced_disable_toolbar_metrics:!1,feature_flag_request_timeout_ms:3e3,surveys_request_timeout_ms:1e4,on_request_error:e=>{var t="Bad HTTP status: "+e.statusCode+" "+e.text
Z.error(t)},get_device_id:e=>e,capture_performance:void 0,name:"posthog",bootstrap:{},disable_compression:!1,session_idle_timeout_seconds:1800,person_profiles:"identified_only",before_send:void 0,request_queue_config:{flush_interval_ms:Eo},error_tracking:{},_onCapture:Ko}},Zo=e=>{var t={}
G(e.process_person)||(t.person_profiles=e.process_person),G(e.xhr_headers)||(t.request_headers=e.xhr_headers),G(e.cookie_name)||(t.persistence_name=e.cookie_name),G(e.disable_cookie)||(t.disable_persistence=e.disable_cookie),G(e.store_google)||(t.save_campaign_params=e.store_google),G(e.verbose)||(t.debug=e.verbose)
var n=ie({},t,e)
return B(e.property_blacklist)&&(G(e.property_denylist)?n.property_denylist=e.property_blacklist:B(e.property_denylist)?n.property_denylist=[...e.property_blacklist,...e.property_denylist]:Z.error("Invalid value for property_denylist config: "+e.property_denylist)),n}
class ea{constructor(){this.__forceAllowLocalhost=!1}get _forceAllowLocalhost(){return this.__forceAllowLocalhost}set _forceAllowLocalhost(e){Z.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),this.__forceAllowLocalhost=e}}class ta{get decideEndpointWasHit(){var e,t
return null!==(e=null==(t=this.featureFlags)?void 0:t.hasLoadedFlags)&&void 0!==e&&e}get flagsEndpointWasHit(){var e,t
return null!==(e=null==(t=this.featureFlags)?void 0:t.hasLoadedFlags)&&void 0!==e&&e}constructor(){this.webPerformance=new ea,this._personProcessingSetOncePropertiesSent=!1,this.version=T.LIB_VERSION,this._internalEventEmitter=new lo,this._calculate_event_properties=this.calculateEventProperties.bind(this),this.config=Xo(),this.SentryIntegration=pi,this.sentryIntegration=e=>function(e,t){var n=hi(e,t)
return{name:fi,processEvent:e=>n(e)}}(this,e),this.__request_queue=[],this.__loaded=!1,this.analyticsDefaultEndpoint="/e/",this._initialPageviewCaptured=!1,this._visibilityStateListener=null,this._initialPersonProfilesConfig=null,this._cachedPersonProperties=null,this.featureFlags=new so(this),this.toolbar=new yi(this),this.scrollManager=new $o(this),this.pageViewManager=new Pi(this),this.surveys=new bo(this),this.experiments=new Go(this),this.exceptions=new Bi(this),this.rateLimiter=new ko(this),this.requestRouter=new Ho(this),this.consent=new on(this),this.externalIntegrations=new Vo(this),this.people={set:(e,t,n)=>{var r=W(e)?{[e]:t}:e
this.setPersonProperties(r),null==n||n({})},set_once:(e,t,n)=>{var r=W(e)?{[e]:t}:e
this.setPersonProperties(void 0,r),null==n||n({})}},this.on("eventCaptured",e=>Z.info('send "'+(null==e?void 0:e.event)+'"',e))}init(e,t,n){if(n&&n!==Jo){var r,i=null!==(r=Qo[n])&&void 0!==r?r:new ta
return i._init(e,t,n),Qo[n]=i,Qo[Jo][n]=i,i}return this._init(e,t,n)}_init(e,t,n){var r,i
if(void 0===t&&(t={}),G(e)||z(e))return Z.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),this
if(this.__loaded)return Z.warn("You have already initialized PostHog! Re-initializing is a no-op"),this
this.__loaded=!0,this.config={},this._originalUserConfig=t,this._triggered_notifs=[],t.person_profiles&&(this._initialPersonProfilesConfig=t.person_profiles),this.set_config(ie({},Xo(t.defaults),Zo(t),{name:n,token:e})),this.config.on_xhr_error&&Z.error("on_xhr_error is deprecated. Use on_request_error instead"),this.compression=t.disable_compression?void 0:I.GZipJS
var s=this._is_persistence_disabled()
this.persistence=new ao(this.config,s),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new ao(f({},this.config,{persistence:"sessionStorage"}),s)
var o=f({},this.persistence.props),a=f({},this.sessionPersistence.props)
this.register({$initialization_time:(new Date).toISOString()}),this._requestQueue=new Co(e=>this._send_retriable_request(e),this.config.request_queue_config),this._retryQueue=new Po(this),this.__request_queue=[]
var l="always"===this.config.cookieless_mode||"on_reject"===this.config.cookieless_mode&&this.consent.isExplicitlyOptedOut()
if(l||(this.sessionManager=new Oo(this),this.sessionPropsManager=new Io(this,this.sessionManager,this.persistence)),new wi(this).startIfEnabledOrStop(),this.siteApps=new Ao(this),null==(r=this.siteApps)||r.init(),l||(this.sessionRecording=new ui(this),this.sessionRecording.startIfEnabledOrStop()),this.config.disable_scroll_properties||this.scrollManager.startMeasuringScrollPosition(),this.autocapture=new Nt(this),this.autocapture.startIfEnabled(),this.surveys.loadIfEnabled(),this.heatmaps=new Ti(this),this.heatmaps.startIfEnabled(),this.webVitalsAutocapture=new xi(this),this.exceptionObserver=new pn(this),this.exceptionObserver.startIfEnabled(),this.deadClicksAutocapture=new un(this,cn),this.deadClicksAutocapture.startIfEnabled(),this.historyAutocapture=new Un(this),this.historyAutocapture.startIfEnabled(),T.DEBUG=T.DEBUG||this.config.debug,T.DEBUG&&Z.info("Starting in debug mode",{this:this,config:t,thisC:f({},this.config),p:o,s:a}),void 0!==(null==(i=t.bootstrap)?void 0:i.distinctID)){var c,u,d=this.config.get_device_id(Wt()),h=null!=(c=t.bootstrap)&&c.isIdentifiedID?d:t.bootstrap.distinctID
this.persistence.set_property(We,null!=(u=t.bootstrap)&&u.isIdentifiedID?"identified":"anonymous"),this.register({distinct_id:t.bootstrap.distinctID,$device_id:h})}if(this._hasBootstrappedFeatureFlags()){var g,_,v=Object.keys((null==(g=t.bootstrap)?void 0:g.featureFlags)||{}).filter(e=>{var n
return!(null==(n=t.bootstrap)||null==(n=n.featureFlags)||!n[e])}).reduce((e,n)=>{var r
return e[n]=(null==(r=t.bootstrap)||null==(r=r.featureFlags)?void 0:r[n])||!1,e},{}),m=Object.keys((null==(_=t.bootstrap)?void 0:_.featureFlagPayloads)||{}).filter(e=>v[e]).reduce((e,n)=>{var r,i
return null!=(r=t.bootstrap)&&null!=(r=r.featureFlagPayloads)&&r[n]&&(e[n]=null==(i=t.bootstrap)||null==(i=i.featureFlagPayloads)?void 0:i[n]),e},{})
this.featureFlags.receivedFeatureFlags({featureFlags:v,featureFlagPayloads:m})}if(l)this.register_once({distinct_id:Ze,$device_id:null},"")
else if(!this.get_distinct_id()){var y=this.config.get_device_id(Wt())
this.register_once({distinct_id:y,$device_id:y},""),this.persistence.set_property(We,"anonymous")}return he(p,"onpagehide"in self?"pagehide":"unload",this._handle_unload.bind(this),{passive:!1}),this.toolbar.maybeLoadToolbar(),t.segment?function(e,t){var n=e.config.segment
if(!n)return t()
!function(e,t){var n=e.config.segment
if(!n)return t()
var r=n=>{var r=()=>n.anonymousId()||Wt()
e.config.get_device_id=r,n.id()&&(e.register({distinct_id:n.id(),$device_id:r()}),e.persistence.set_property(We,"identified")),t()},i=n.user()
"then"in i&&q(i.then)?i.then(e=>r(e)):r(i)}(e,()=>{n.register((e=>{Promise&&Promise.resolve||di.warn("This browser does not have Promise support, and can not use the segment integration")
var t=(t,n)=>{if(!n)return t
t.event.userId||t.event.anonymousId===e.get_distinct_id()||(di.info("No userId set, resetting PostHog"),e.reset()),t.event.userId&&t.event.userId!==e.get_distinct_id()&&(di.info("UserId set, identifying with PostHog"),e.identify(t.event.userId))
var r=e.calculateEventProperties(n,t.event.properties)
return t.event.properties=Object.assign({},r,t.event.properties),t}
return{name:"PostHog JS",type:"enrichment",version:"1.0.0",isLoaded:()=>!0,load:()=>Promise.resolve(),track:e=>t(e,e.event.event),page:e=>t(e,"$pageview"),identify:e=>t(e,"$identify"),screen:e=>t(e,"$screen")}})(e)).then(()=>{t()})})}(this,()=>this._loaded()):this._loaded(),q(this.config._onCapture)&&this.config._onCapture!==Ko&&(Z.warn("onCapture is deprecated. Please use `before_send` instead"),this.on("eventCaptured",e=>this.config._onCapture(e.event,e))),this.config.ip&&Z.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'),this}_onRemoteConfig(e){var t,n,r,i,s,o,a,l
if(!b||!b.body)return Z.info("document not ready yet, trying again in 500 milliseconds..."),void setTimeout(()=>{this._onRemoteConfig(e)},500)
this.compression=void 0,e.supportedCompression&&!this.config.disable_compression&&(this.compression=O(e.supportedCompression,I.GZipJS)?I.GZipJS:O(e.supportedCompression,I.Base64)?I.Base64:void 0),null!=(t=e.analytics)&&t.endpoint&&(this.analyticsDefaultEndpoint=e.analytics.endpoint),this.set_config({person_profiles:this._initialPersonProfilesConfig?this._initialPersonProfilesConfig:"identified_only"}),null==(n=this.siteApps)||n.onRemoteConfig(e),null==(r=this.sessionRecording)||r.onRemoteConfig(e),null==(i=this.autocapture)||i.onRemoteConfig(e),null==(s=this.heatmaps)||s.onRemoteConfig(e),this.surveys.onRemoteConfig(e),null==(o=this.webVitalsAutocapture)||o.onRemoteConfig(e),null==(a=this.exceptionObserver)||a.onRemoteConfig(e),this.exceptions.onRemoteConfig(e),null==(l=this.deadClicksAutocapture)||l.onRemoteConfig(e)}_loaded(){try{this.config.loaded(this)}catch(e){Z.critical("`loaded` function failed",e)}this._start_queue_if_opted_in(),this.config.capture_pageview&&setTimeout(()=>{this.consent.isOptedIn()&&this._captureInitialPageview()},1),new xo(this).load(),this.featureFlags.flags()}_start_queue_if_opted_in(){var e
this.is_capturing()&&this.config.request_batching&&(null==(e=this._requestQueue)||e.enable())}_dom_loaded(){this.is_capturing()&&ne(this.__request_queue,e=>this._send_retriable_request(e)),this.__request_queue=[],this._start_queue_if_opted_in()}_handle_unload(){var e,t
this.config.request_batching?(this._shouldCapturePageleave()&&this.capture("$pageleave"),null==(e=this._requestQueue)||e.unload(),null==(t=this._retryQueue)||t.unload()):this._shouldCapturePageleave()&&this.capture("$pageleave",null,{transport:"sendBeacon"})}_send_request(e){this.__loaded&&(Yo?this.__request_queue.push(e):this.rateLimiter.isServerRateLimited(e.batchKey)||(e.transport=e.transport||this.config.api_transport,e.url=Ii(e.url,{ip:this.config.ip?1:0}),e.headers=f({},this.config.request_headers),e.compression="best-available"===e.compression?this.compression:e.compression,e.fetchOptions=e.fetchOptions||this.config.fetch_options,(e=>{var t,n,r,i=f({},e)
i.timeout=i.timeout||6e4,i.url=Ii(i.url,{_:(new Date).getTime().toString(),ver:T.LIB_VERSION,compression:i.compression})
var s=null!==(t=i.transport)&&void 0!==t?t:"fetch",o=null!==(n=null==(r=fe(Ri,e=>e.transport===s))?void 0:r.method)&&void 0!==n?n:Ri[0].method
if(!o)throw new Error("No available transport method")
o(i)})(f({},e,{callback:t=>{var n,r
this.rateLimiter.checkForLimiting(t),t.statusCode>=400&&(null==(n=(r=this.config).on_request_error)||n.call(r,t)),null==e.callback||e.callback(t)}}))))}_send_retriable_request(e){this._retryQueue?this._retryQueue.retriableRequest(e):this._send_request(e)}_execute_array(e){var t,n=[],r=[],i=[]
ne(e,e=>{e&&(t=e[0],B(t)?i.push(e):q(e)?e.call(this):B(e)&&"alias"===t?n.push(e):B(e)&&-1!==t.indexOf("capture")&&q(this[t])?i.push(e):r.push(e))})
var s=function(e,t){ne(e,function(e){if(B(e[0])){var n=t
re(e,function(e){n=n[e[0]].apply(n,e.slice(1))})}else this[e[0]].apply(this,e.slice(1))},t)}
s(n,this),s(r,this),s(i,this)}_hasBootstrappedFeatureFlags(){var e,t
return(null==(e=this.config.bootstrap)?void 0:e.featureFlags)&&Object.keys(null==(t=this.config.bootstrap)?void 0:t.featureFlags).length>0||!1}push(e){this._execute_array([e])}capture(e,t,n){var r
if(this.__loaded&&this.persistence&&this.sessionPersistence&&this._requestQueue){if(this.is_capturing())if(!G(e)&&W(e)){if(this.config.opt_out_useragent_filter||!this._is_bot()){var i=null!=n&&n.skip_client_rate_limiting?void 0:this.rateLimiter.clientRateLimitContext()
if(null==i||!i.isRateLimited){null!=t&&t.$current_url&&!W(null==t?void 0:t.$current_url)&&(Z.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."),null==t||delete t.$current_url),this.sessionPersistence.update_search_keyword(),this.config.save_campaign_params&&this.sessionPersistence.update_campaign_params(),this.config.save_referrer&&this.sessionPersistence.update_referrer_info(),(this.config.save_campaign_params||this.config.save_referrer)&&this.persistence.set_initial_person_info()
var s=new Date,o=(null==n?void 0:n.timestamp)||s,a=Wt(),l={uuid:a,event:e,properties:this.calculateEventProperties(e,t||{},o,a)}
i&&(l.properties.$lib_rate_limit_remaining_tokens=i.remainingTokens),(null==n?void 0:n.$set)&&(l.$set=null==n?void 0:n.$set)
var c,u=this._calculate_set_once_properties(null==n?void 0:n.$set_once)
if(u&&(l.$set_once=u),(l=function(e,t){return n=e,r=e=>W(e)&&!V(t)?e.slice(0,t):e,i=new Set,function e(t,n){return t!==Object(t)?r?r(t):t:i.has(t)?void 0:(i.add(t),B(t)?(s=[],ne(t,t=>{s.push(e(t))})):(s={},re(t,(t,n)=>{i.has(t)||(s[n]=e(t,n))})),s)
var s}(n)
var n,r,i}(l,null!=n&&n._noTruncate?null:this.config.properties_string_max_length)).timestamp=o,G(null==n?void 0:n.timestamp)||(l.properties.$event_time_override_provided=!0,l.properties.$event_time_override_system_time=s),e===fo.DISMISSED||e===fo.SENT){var d=null==t?void 0:t[ho.SURVEY_ID],h=null==t?void 0:t[ho.SURVEY_ITERATION]
c={id:d,current_iteration:h},localStorage.getItem(vo(c))||localStorage.setItem(vo(c),"true"),l.$set=f({},l.$set,{[_o({id:d,current_iteration:h},e===fo.SENT?"responded":"dismissed")]:!0})}var p=f({},l.properties.$set,l.$set)
if(U(p)||this.setPersonPropertiesForFlags(p),!Q(this.config.before_send)){var g=this._runBeforeSend(l)
if(!g)return
l=g}this._internalEventEmitter.emit("eventCaptured",l)
var _={method:"POST",url:null!==(r=null==n?void 0:n._url)&&void 0!==r?r:this.requestRouter.endpointFor("api",this.analyticsDefaultEndpoint),data:l,compression:"best-available",batchKey:null==n?void 0:n._batchKey}
return!this.config.request_batching||n&&(null==n||!n._batchKey)||null!=n&&n.send_instantly?this._send_retriable_request(_):this._requestQueue.enqueue(_),l}Z.critical("This capture call is ignored due to client rate limiting.")}}else Z.error("No event name provided to posthog.capture")}else Z.uninitializedWarning("posthog.capture")}_addCaptureHook(e){return this.on("eventCaptured",t=>e(t.event,t))}calculateEventProperties(e,t,n,r,i){if(n=n||new Date,!this.persistence||!this.sessionPersistence)return t
var s=i?void 0:this.persistence.remove_event_timer(e),o=f({},t)
if(o.token=this.config.token,o.$config_defaults=this.config.defaults,("always"==this.config.cookieless_mode||"on_reject"==this.config.cookieless_mode&&this.consent.isExplicitlyOptedOut())&&(o.$cookieless_mode=!0),"$snapshot"===e){var a=f({},this.persistence.properties(),this.sessionPersistence.properties())
return o.distinct_id=a.distinct_id,(!W(o.distinct_id)&&!K(o.distinct_id)||z(o.distinct_id))&&Z.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),o}var l,c=Js(this.config.mask_personal_data_properties,this.config.custom_personal_data_properties)
if(this.sessionManager){var{sessionId:u,windowId:d}=this.sessionManager.checkAndGetSessionAndWindowId(i,n.getTime())
o.$session_id=u,o.$window_id=d}this.sessionPropsManager&&ie(o,this.sessionPropsManager.getSessionProps())
try{var h
this.sessionRecording&&ie(o,this.sessionRecording.sdkDebugProperties),o.$sdk_debug_retry_queue_size=null==(h=this._retryQueue)?void 0:h.length}catch(e){o.$sdk_debug_error_capturing_properties=String(e)}if(this.requestRouter.region===Bo.CUSTOM&&(o.$lib_custom_api_host=this.config.api_host),l="$pageview"!==e||i?"$pageleave"!==e||i?this.pageViewManager.doEvent():this.pageViewManager.doPageLeave(n):this.pageViewManager.doPageView(n,r),o=ie(o,l),"$pageview"===e&&b&&(o.title=b.title),!G(s)){var p=n.getTime()-s
o.$duration=parseFloat((p/1e3).toFixed(3))}E&&this.config.opt_out_useragent_filter&&(o.$browser_type=this._is_bot()?"bot":"browser"),(o=ie({},c,this.persistence.properties(),this.sessionPersistence.properties(),o)).$is_identified=this._isIdentified(),B(this.config.property_denylist)?re(this.config.property_denylist,function(e){delete o[e]}):Z.error("Invalid value for property_denylist config: "+this.config.property_denylist+" or property_blacklist config: "+this.config.property_blacklist)
var g=this.config.sanitize_properties
g&&(Z.error("sanitize_properties is deprecated. Use before_send instead"),o=g(o,e))
var _=this._hasPersonProcessing()
return o.$process_person_profile=_,_&&!i&&this._requirePersonProcessing("_calculate_event_properties"),o}_calculate_set_once_properties(e){var t
if(!this.persistence||!this._hasPersonProcessing())return e
if(this._personProcessingSetOncePropertiesSent)return e
var n=this.persistence.get_initial_props(),r=null==(t=this.sessionPropsManager)?void 0:t.getSetOnceProps(),i=ie({},n,r||{},e||{}),s=this.config.sanitize_properties
return s&&(Z.error("sanitize_properties is deprecated. Use before_send instead"),i=s(i,"$set_once")),this._personProcessingSetOncePropertiesSent=!0,U(i)?void 0:i}register(e,t){var n
null==(n=this.persistence)||n.register(e,t)}register_once(e,t,n){var r
null==(r=this.persistence)||r.register_once(e,t,n)}register_for_session(e){var t
null==(t=this.sessionPersistence)||t.register(e)}unregister(e){var t
null==(t=this.persistence)||t.unregister(e)}unregister_for_session(e){var t
null==(t=this.sessionPersistence)||t.unregister(e)}_register_single(e,t){this.register({[e]:t})}getFeatureFlag(e,t){return this.featureFlags.getFeatureFlag(e,t)}getFeatureFlagPayload(e){var t=this.featureFlags.getFeatureFlagPayload(e)
try{return JSON.parse(t)}catch(e){return t}}isFeatureEnabled(e,t){return this.featureFlags.isFeatureEnabled(e,t)}reloadFeatureFlags(){this.featureFlags.reloadFeatureFlags()}updateEarlyAccessFeatureEnrollment(e,t,n){this.featureFlags.updateEarlyAccessFeatureEnrollment(e,t,n)}getEarlyAccessFeatures(e,t,n){return void 0===t&&(t=!1),this.featureFlags.getEarlyAccessFeatures(e,t,n)}on(e,t){return this._internalEventEmitter.on(e,t)}onFeatureFlags(e){return this.featureFlags.onFeatureFlags(e)}onSurveysLoaded(e){return this.surveys.onSurveysLoaded(e)}onSessionId(e){var t,n
return null!==(t=null==(n=this.sessionManager)?void 0:n.onSessionId(e))&&void 0!==t?t:()=>{}}getSurveys(e,t){void 0===t&&(t=!1),this.surveys.getSurveys(e,t)}getActiveMatchingSurveys(e,t){void 0===t&&(t=!1),this.surveys.getActiveMatchingSurveys(e,t)}renderSurvey(e,t){this.surveys.renderSurvey(e,t)}canRenderSurvey(e){return this.surveys.canRenderSurvey(e)}canRenderSurveyAsync(e,t){return void 0===t&&(t=!1),this.surveys.canRenderSurveyAsync(e,t)}identify(e,t,n){if(!this.__loaded||!this.persistence)return Z.uninitializedWarning("posthog.identify")
if(K(e)&&(e=e.toString(),Z.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")),e)if(["distinct_id","distinctid"].includes(e.toLowerCase()))Z.critical('The string "'+e+'" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.')
else if(e!==Ze){if(this._requirePersonProcessing("posthog.identify")){var r=this.get_distinct_id()
if(this.register({$user_id:e}),!this.get_property("$device_id")){var i=r
this.register_once({$had_persisted_distinct_id:!0,$device_id:i},"")}e!==r&&e!==this.get_property(ge)&&(this.unregister(ge),this.register({distinct_id:e}))
var s="anonymous"===(this.persistence.get_property(We)||"anonymous")
e!==r&&s?(this.persistence.set_property(We,"identified"),this.setPersonPropertiesForFlags(f({},n||{},t||{}),!1),this.capture("$identify",{distinct_id:e,$anon_distinct_id:r},{$set:t||{},$set_once:n||{}}),this._cachedPersonProperties=Ai(e,t,n),this.featureFlags.setAnonymousDistinctId(r)):(t||n)&&this.setPersonProperties(t,n),e!==r&&(this.reloadFeatureFlags(),this.unregister(Ge))}}else Z.critical('The string "'+Ze+'" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.')
else Z.error("Unique user id has not been set in posthog.identify")}setPersonProperties(e,t){if((e||t)&&this._requirePersonProcessing("posthog.setPersonProperties")){var n=Ai(this.get_distinct_id(),e,t)
this._cachedPersonProperties!==n?(this.setPersonPropertiesForFlags(f({},t||{},e||{})),this.capture("$set",{$set:e||{},$set_once:t||{}}),this._cachedPersonProperties=n):Z.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")}}group(e,t,n){if(e&&t){if(this._requirePersonProcessing("posthog.group")){var r=this.getGroups()
r[e]!==t&&this.resetGroupPropertiesForFlags(e),this.register({$groups:f({},r,{[e]:t})}),n&&(this.capture("$groupidentify",{$group_type:e,$group_key:t,$group_set:n}),this.setGroupPropertiesForFlags({[e]:n})),r[e]===t||n||this.reloadFeatureFlags()}}else Z.error("posthog.group requires a group type and group key")}resetGroups(){this.register({$groups:{}}),this.resetGroupPropertiesForFlags(),this.reloadFeatureFlags()}setPersonPropertiesForFlags(e,t){void 0===t&&(t=!0),this.featureFlags.setPersonPropertiesForFlags(e,t)}resetPersonPropertiesForFlags(){this.featureFlags.resetPersonPropertiesForFlags()}setGroupPropertiesForFlags(e,t){void 0===t&&(t=!0),this._requirePersonProcessing("posthog.setGroupPropertiesForFlags")&&this.featureFlags.setGroupPropertiesForFlags(e,t)}resetGroupPropertiesForFlags(e){this.featureFlags.resetGroupPropertiesForFlags(e)}reset(e){var t,n,r,i
if(Z.info("reset"),!this.__loaded)return Z.uninitializedWarning("posthog.reset")
var s=this.get_property("$device_id")
if(this.consent.reset(),null==(t=this.persistence)||t.clear(),null==(n=this.sessionPersistence)||n.clear(),this.surveys.reset(),this.featureFlags.reset(),null==(r=this.persistence)||r.set_property(We,"anonymous"),null==(i=this.sessionManager)||i.resetSessionId(),this._cachedPersonProperties=null,"always"===this.config.cookieless_mode)this.register_once({distinct_id:Ze,$device_id:null},"")
else{var o=this.config.get_device_id(Wt())
this.register_once({distinct_id:o,$device_id:e?o:s},"")}this.register({$last_posthog_reset:(new Date).toISOString()},1)}get_distinct_id(){return this.get_property("distinct_id")}getGroups(){return this.get_property("$groups")||{}}get_session_id(){var e,t
return null!==(e=null==(t=this.sessionManager)?void 0:t.checkAndGetSessionAndWindowId(!0).sessionId)&&void 0!==e?e:""}get_session_replay_url(e){if(!this.sessionManager)return""
var{sessionId:t,sessionStartTimestamp:n}=this.sessionManager.checkAndGetSessionAndWindowId(!0),r=this.requestRouter.endpointFor("ui","/project/"+this.config.token+"/replay/"+t)
if(null!=e&&e.withTimestamp&&n){var i,s=null!==(i=e.timestampLookBack)&&void 0!==i?i:10
if(!n)return r
r+="?t="+Math.max(Math.floor(((new Date).getTime()-n)/1e3)-s,0)}return r}alias(e,t){return e===this.get_property(pe)?(Z.critical("Attempting to create alias for existing People user - aborting."),-2):this._requirePersonProcessing("posthog.alias")?(G(t)&&(t=this.get_distinct_id()),e!==t?(this._register_single(ge,e),this.capture("$create_alias",{alias:e,distinct_id:t})):(Z.warn("alias matches current distinct_id - skipping api call."),this.identify(e),-1)):void 0}set_config(e){var t=f({},this.config)
if(H(e)){var n,r,i,s,o
ie(this.config,Zo(e))
var a=this._is_persistence_disabled()
null==(n=this.persistence)||n.update_config(this.config,t,a),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new ao(f({},this.config,{persistence:"sessionStorage"}),a),Yt._is_supported()&&"true"===Yt._get("ph_debug")&&(this.config.debug=!0),this.config.debug&&(T.DEBUG=!0,Z.info("set_config",{config:e,oldConfig:t,newConfig:f({},this.config)})),null==(r=this.sessionRecording)||r.startIfEnabledOrStop(),null==(i=this.autocapture)||i.startIfEnabled(),null==(s=this.heatmaps)||s.startIfEnabled(),this.surveys.loadIfEnabled(),this._sync_opt_out_with_persistence(),null==(o=this.externalIntegrations)||o.startIfEnabledOrStop()}}startSessionRecording(e){var t,n,r,i,s,o=!0===e,a={sampling:o||!(null==e||!e.sampling),linked_flag:o||!(null==e||!e.linked_flag),url_trigger:o||!(null==e||!e.url_trigger),event_trigger:o||!(null==e||!e.event_trigger)}
Object.values(a).some(Boolean)&&(null==(t=this.sessionManager)||t.checkAndGetSessionAndWindowId(),a.sampling&&(null==(n=this.sessionRecording)||n.overrideSampling()),a.linked_flag&&(null==(r=this.sessionRecording)||r.overrideLinkedFlag()),a.url_trigger&&(null==(i=this.sessionRecording)||i.overrideTrigger("url")),a.event_trigger&&(null==(s=this.sessionRecording)||s.overrideTrigger("event")))
this.set_config({disable_session_recording:!1})}stopSessionRecording(){this.set_config({disable_session_recording:!0})}sessionRecordingStarted(){var e
return!(null==(e=this.sessionRecording)||!e.started)}captureException(e,t){var n=new Error("PostHog syntheticException")
return this.exceptions.sendExceptionEvent(f({},qn((e=>e instanceof Error)(e)?{error:e,event:e.message}:{event:e},{syntheticException:n}),t))}loadToolbar(e){return this.toolbar.loadToolbar(e)}get_property(e){var t
return null==(t=this.persistence)?void 0:t.props[e]}getSessionProperty(e){var t
return null==(t=this.sessionPersistence)?void 0:t.props[e]}toString(){var e,t=null!==(e=this.config.name)&&void 0!==e?e:Jo
return t!==Jo&&(t=Jo+"."+t),t}_isIdentified(){var e,t
return"identified"===(null==(e=this.persistence)?void 0:e.get_property(We))||"identified"===(null==(t=this.sessionPersistence)?void 0:t.get_property(We))}_hasPersonProcessing(){var e,t
return!("never"===this.config.person_profiles||"identified_only"===this.config.person_profiles&&!this._isIdentified()&&U(this.getGroups())&&(null==(e=this.persistence)||null==(e=e.props)||!e[ge])&&(null==(t=this.persistence)||null==(t=t.props)||!t[Ye]))}_shouldCapturePageleave(){return!0===this.config.capture_pageleave||"if_capture_pageview"===this.config.capture_pageleave&&(!0===this.config.capture_pageview||"history_change"===this.config.capture_pageview)}createPersonProfile(){this._hasPersonProcessing()||this._requirePersonProcessing("posthog.createPersonProfile")&&this.setPersonProperties({},{})}_requirePersonProcessing(e){return"never"===this.config.person_profiles?(Z.error(e+' was called, but process_person is set to "never". This call will be ignored.'),!1):(this._register_single(Ye,!0),!0)}_is_persistence_disabled(){if("always"===this.config.cookieless_mode)return!0
var e=this.consent.isOptedOut(),t=this.config.opt_out_persistence_by_default||"on_reject"===this.config.cookieless_mode
return this.config.disable_persistence||e&&!!t}_sync_opt_out_with_persistence(){var e,t,n,r,i=this._is_persistence_disabled()
return(null==(e=this.persistence)?void 0:e._disabled)!==i&&(null==(n=this.persistence)||n.set_disabled(i)),(null==(t=this.sessionPersistence)?void 0:t._disabled)!==i&&(null==(r=this.sessionPersistence)||r.set_disabled(i)),i}opt_in_capturing(e){var t
"always"!==this.config.cookieless_mode?("on_reject"===this.config.cookieless_mode&&this.consent.isExplicitlyOptedOut()&&(this.reset(!0),this.sessionManager=new Oo(this),this.persistence&&(this.sessionPropsManager=new Io(this,this.sessionManager,this.persistence)),this.sessionRecording=new ui(this),this.sessionRecording.startIfEnabledOrStop()),this.consent.optInOut(!0),this._sync_opt_out_with_persistence(),(G(null==e?void 0:e.captureEventName)||null!=e&&e.captureEventName)&&this.capture(null!==(t=null==e?void 0:e.captureEventName)&&void 0!==t?t:"$opt_in",null==e?void 0:e.captureProperties,{send_instantly:!0}),this.config.capture_pageview&&this._captureInitialPageview()):Z.warn('Consent opt in/out is not valid with cookieless_mode="always" and will be ignored')}opt_out_capturing(){var e
"always"!==this.config.cookieless_mode?("on_reject"===this.config.cookieless_mode&&this.consent.isOptedIn()&&this.reset(!0),this.consent.optInOut(!1),this._sync_opt_out_with_persistence(),"on_reject"===this.config.cookieless_mode&&(this.register({distinct_id:Ze,$device_id:null}),this.sessionManager=void 0,this.sessionPropsManager=void 0,null==(e=this.sessionRecording)||e.stopRecording(),this.sessionRecording=void 0,this._captureInitialPageview())):Z.warn('Consent opt in/out is not valid with cookieless_mode="always" and will be ignored')}has_opted_in_capturing(){return this.consent.isOptedIn()}has_opted_out_capturing(){return this.consent.isOptedOut()}is_capturing(){return"always"===this.config.cookieless_mode||("on_reject"===this.config.cookieless_mode?this.consent.isExplicitlyOptedOut()||this.consent.isOptedIn():!this.has_opted_out_capturing())}clear_opt_in_out_capturing(){this.consent.reset(),this._sync_opt_out_with_persistence()}_is_bot(){return y?Do(y,this.config.custom_blocked_useragents):void 0}_captureInitialPageview(){b&&("visible"===b.visibilityState?this._initialPageviewCaptured||(this._initialPageviewCaptured=!0,this.capture("$pageview",{title:b.title},{send_instantly:!0}),this._visibilityStateListener&&(b.removeEventListener("visibilitychange",this._visibilityStateListener),this._visibilityStateListener=null)):this._visibilityStateListener||(this._visibilityStateListener=this._captureInitialPageview.bind(this),he(b,"visibilitychange",this._visibilityStateListener)))}debug(e){!1===e?(null==p||p.console.log("You've disabled debug mode."),localStorage&&localStorage.removeItem("ph_debug"),this.set_config({debug:!1})):(null==p||p.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),localStorage&&localStorage.setItem("ph_debug","true"),this.set_config({debug:!0}))}_shouldDisableFlags(){var e,t,n,r,i,s,o=this._originalUserConfig||{}
return"advanced_disable_flags"in o?!!o.advanced_disable_flags:!1!==this.config.advanced_disable_flags?!!this.config.advanced_disable_flags:!0===this.config.advanced_disable_decide?(Z.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."),!0):(n="advanced_disable_decide",r=Z,i=(t="advanced_disable_flags")in(e=o)&&!G(e[t]),s=n in e&&!G(e[n]),i?e[t]:!!s&&(r&&r.warn("Config field '"+n+"' is deprecated. Please use '"+t+"' instead. The old field will be removed in a future major version."),e[n]))}_runBeforeSend(e){if(Q(this.config.before_send))return e
var t=B(this.config.before_send)?this.config.before_send:[this.config.before_send],n=e
for(var r of t){if(n=r(n),Q(n)){var i="Event '"+e.event+"' was rejected in beforeSend function"
return Y(e.event)?Z.warn(i+". This can cause unexpected behavior."):Z.info(i),null}n.properties&&!U(n.properties)||Z.warn("Event '"+e.event+"' has no properties after beforeSend function, this is likely an error.")}return n}getPageViewId(){var e
return null==(e=this.pageViewManager._currentPageview)?void 0:e.pageViewId}captureTraceFeedback(e,t){this.capture("$ai_feedback",{$ai_trace_id:String(e),$ai_feedback_text:t})}captureTraceMetric(e,t,n){this.capture("$ai_metric",{$ai_trace_id:String(e),$ai_metric_name:t,$ai_metric_value:String(n)})}}!function(e,t){for(var n=0;n<t.length;n++)e.prototype[t[n]]=le(e.prototype[t[n]])}(ta,["identify"])
var na,ra=(na=Qo[Jo]=new ta,function(){function e(){e.done||(e.done=!0,Yo=!1,re(Qo,function(e){e._dom_loaded()}))}null!=b&&b.addEventListener?"complete"===b.readyState?e():he(b,"DOMContentLoaded",e,{capture:!1}):p&&Z.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")}(),na)
function ia(...e){console.log(...e)}function sa(e,t){ra.capture(e,t)}function oa(){"string"==typeof window.self&&(s(),window.self=window),function(){try{ra.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N",{advanced_disable_decide:!0,advanced_disable_feature_flags:!0,advanced_disable_feature_flags_on_first_load:!0,advanced_disable_toolbar_metrics:!0,api_host:"https://us.i.posthog.com",autocapture:!1,capture_pageview:!1,disable_compression:!1,disable_persistence:!0,disable_session_recording:!0,disable_surveys:!0,person_profiles:"identified_only"})}catch(e){ia(e)}}()}let aa=0,la=0,ca=0,ua=0,da=0,fa=0,ha=0
const pa=()=>Date.now(),ga=()=>Math.floor(pa()/1e3)
function _a(){return aa||(aa=pa()),aa}function va(){return la||(la=_a()-3e5),la}function ma(){return ca||(ca=_a()-1728e5),ca}function ya(){return ua||(ua=Math.floor(_a()/1e3)),ua}function ba(){return da||(da=ya()-120),da}function wa(){return fa||(fa=ya()-86400),fa}function ka(){return ha||(ha=ya()-604800),ha}function Sa(e){return null===e}function xa(e){return void 0===e}const Ea=`${document.location.protocol}//${document.location.host}/`,Ca=window.HCS?.defines?.cdn,Ta=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],Pa=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],$a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],La=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,Ia=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,Ma=/guild_id=(?<guildId>\d+)/,Oa=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,Ra=/player_id=(?<playerId>\d+)/,Fa=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,Aa=/VL:.+?(?<vl>\d+)/,ja=.2,Na="joinallgroupsundersize",Da="index.php",Ba="?cmd=",qa=`${Da}${Ba}`,Ha="&subcmd=",Ua="&target_username=",Ga=`${qa}auctionhouse`,Wa=`${Ga}&search=`,za=`${qa}log`,Va=`${qa}ignore${Ha}add&ignore_username=`,Qa=`${qa}profile`,Ka=`${Qa}&player_id=`,Ja=`${Qa}${Ha}dropitems`,Ya=`${qa}trade&target_player=`,Xa=`${qa}trade${Ha}createsecure${Ua}`,Za=`${qa}arena${Ha}`,el=`${Da}${`${Ba}notepad&blank=1${Ha}`}`,tl=`${el}auctionsearch`,nl=`${qa}points`,rl=`${qa}guild${Ha}`,il=`${rl}log`,sl=`${rl}scouttower`,ol=`${rl}groups&subcmd2=`,al=`${rl}inventory&subcmd2=report&user=`,ll=`${rl}view&guild_id=`,cl=`${ol}joinall`,ul=`${ol}${Na}`,dl=`${qa}world`,fl=`${qa}findplayer`,hl=`${fl}&search_show_first=1&search_username=`,pl=`${qa}blacksmith`,gl=`${qa}quickbuff`,_l=`${qa}composing`,vl=`${qa}attackplayer${Ua}`,ml=`${qa}${Ha}viewupdatearchive`,yl=`${qa}${Ha}viewarchive`,bl=`${qa}bounty`,wl=`${qa}inventing${Ha}viewrecipe&recipe_id=`,kl=`https://guide.fallensword.com/${qa}`,Sl="after-update.actionlist",xl="buffs.player",El="update.player",Cl="level.stats-player",Tl="gold.stats-player",Pl="prompt.worldDialogShop",$l="keydown.controls",Ll="update.realm",Il="-success.action-response",Ml=`-1${Il}`,Ol=`1${Il}`,Rl=`2${Il}`,Fl=`9${Il}`,Al=`5${Il}`,jl=`25${Il}`,Nl=2,Dl=16,Bl=128,ql=256,Hl="needToCompose",Ul="lastComposeCheck",Gl="characterVirtualLevel",Wl="enableGuildActivityTracker",zl="lastLadderReset",Vl="form",Ql="table",Kl="td",Jl="fsh_buffLog",Yl="stat-level",Xl="stat-defense",Zl="stat-attack",ec="stat-damage",tc="stat-armor",nc="stat-hp",rc="stat-vl",ic="GM_",sc=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],oc=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],ac=`${Ca}ui/world/action_spinner.gif`,lc=".fa-envelope",cc='a[href*="&player_id="]',uc=.002,dc=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],fc='input[name="blockedSkillList[]"]'
var hc={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252",compactRanks:!1,lastModalGuildLogCheck:0,dailyQuestReRoll:!1}
const pc=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function gc(e,t){const n=window.localStorage.getItem(ic+e)
return Sa(n)||xa(n)?t:function(e){const t=pc.find(t=>e.startsWith(t[0]))
return t?t[1](e):e}(n)}function _c(e){return gc(e,hc[e])}function vc(e){return"boolean"==typeof e}function mc(e){return"string"==typeof e}function yc(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(ic+e,t+n)}const bc=[[mc,(e,t)=>{yc(e,"S]",t)}],[e=>"number"==typeof e,(e,t)=>{t.toString().indexOf(".")<0&&yc(e,"N]",t)}],[vc,(e,t)=>{yc(e,"B]",t)}]]
function wc(e,t){const n=bc.find(e=>e[0](t))
n&&n[1](e,t)}function kc(e){const t=`screenview__${e}`,n=_c(t)
Number.isFinite(n)&&n>wa()||(sa(t),wc(t,ya()))}function Sc(e){return"function"==typeof e}function xc(e){return"object"==typeof e}function Ec(e,t){try{return JSON.parse(e,t)}catch(e){}}function Cc(e,t){return t?t.querySelector(e):document.querySelector(e)}function Tc(e){const t=Cc("link",document.body)
return new Promise(n=>{const r=document.createElement("link")
r.type="text/css",r.rel="stylesheet",r.onload=()=>{n()},r.href=e,t?t.before(r):document.body.append(r)})}var Pc="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function $c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lc,Ic={exports:{}}
var Mc=(Lc||(Lc=1,Ic.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==Pc?Pc:"undefined"!=typeof self?self:{}
function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){var t=e.default
if("function"==typeof t){var n=function(){return t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(t){var r=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}),n}var r={},i={},s={},o={},a="<unknown>"
function l(e){return e.split("\n").reduce(function(e,t){var n=d(t)||h(t)||_(t)||b(t)||m(t)
return n&&e.push(n),e},[])}var c=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,u=/\((\S*)(?::(\d+))(?::(\d+))\)/
function d(e){var t=c.exec(e)
if(!t)return null
var n=t[2]&&0===t[2].indexOf("native"),r=t[2]&&0===t[2].indexOf("eval"),i=u.exec(t[2])
return r&&null!=i&&(t[2]=i[1],t[3]=i[2],t[4]=i[3]),{file:n?null:t[2],methodName:t[1]||a,arguments:n?[t[2]]:[],lineNumber:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}var f=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
function h(e){var t=f.exec(e)
return t?{file:t[2],methodName:t[1]||a,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var p=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,g=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i
function _(e){var t=p.exec(e)
if(!t)return null
var n=t[3]&&t[3].indexOf(" > eval")>-1,r=g.exec(t[3])
return n&&null!=r&&(t[3]=r[1],t[4]=r[2],t[5]=null),{file:t[3],methodName:t[1]||a,arguments:t[2]?t[2].split(","):[],lineNumber:t[4]?+t[4]:null,column:t[5]?+t[5]:null}}var v=/^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i
function m(e){var t=v.exec(e)
return t?{file:t[3],methodName:t[1]||a,arguments:[],lineNumber:+t[4],column:t[5]?+t[5]:null}:null}var y=/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i
function b(e){var t=y.exec(e)
return t?{file:t[2],methodName:t[1]||a,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var w=n(Object.freeze({__proto__:null,parse:l}));(function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i)
return r(t,e),t},s=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):i(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())})},o=e&&e.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i
switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,r=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1]
break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s
break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s)
break}i[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}}
Object.defineProperty(t,"__esModule",{value:!0}),t.logDeprecatedMethod=t.globalThisOrWindow=t.isBrowserConfig=t.clone=t.formatCGIData=t.filterUrl=t.filter=t.generateStackTrace=t.endpoint=t.instrumentConsole=t.instrument=t.isErrorObject=t.makeNotice=t.logger=t.sanitize=t.shallowClone=t.runAfterNotifyHandlers=t.runBeforeNotifyHandlers=t.getSourceForBacktrace=t.getCauses=t.calculateBacktraceShift=t.DEFAULT_BACKTRACE_SHIFT=t.makeBacktrace=t.objectIsExtensible=t.objectIsEmpty=t.mergeNotice=t.merge=void 0
var a=i(w)
function l(e,t){var n={}
for(var r in e)n[r]=e[r]
for(var r in t)n[r]=t[r]
return n}function c(e,t){var n=l(e,t)
return e.context&&t.context&&(n.context=l(e.context,t.context)),n}function u(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1
return!0}function d(e){return"function"!=typeof Object.isExtensible||Object.isExtensible(e)}function f(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=console),!e)return[]
try{var r=a.parse(e).map(function(e){return{file:e.file,method:e.methodName,number:e.lineNumber,column:e.column}})
return t&&r.splice(0,p(r)),r}catch(e){return n.debug(e),[]}}function h(e){var t=!1,n=!1
return e.file&&(t=e.file.toLowerCase().indexOf("@honeybadger-io")>-1),e.method&&(n=e.method.toLowerCase().indexOf("@honeybadger-io")>-1),t||n}function p(e){for(var n=0,r=0;r<e.length;r++){var i=e[r]
if(!h(i)){if(!i.file||"<anonymous>"===i.file){var s=e[r+1]
if(s&&h(s)){n++
continue}}break}n++}return n||t.DEFAULT_BACKTRACE_SHIFT}function g(e,t){if(e.cause){for(var n=[],r=e;n.length<3&&(r=r.cause);)n.push({class:r.name,message:r.message,backtrace:"string"==typeof r.stack?f(r.stack,!1,t):null})
return n}return[]}function _(e,t){return s(this,void 0,void 0,function(){var n,r,i,s
return o(this,function(o){switch(o.label){case 0:if(n=[],!t||!e||!e.length)return[2,n]
r=0,o.label=1
case 1:return e.length?(i=e.splice(0)[r],[4,t(i.file)]):[3,3]
case 2:return s=o.sent(),n[r]=q(s,i.number,i.column,2),r++,[3,1]
case 3:return[2,n]}})})}function v(e,t){for(var n=[],r=!0,i=0,s=t.length;i<s;i++){var o=(0,t[i])(e)
!1===o&&(r=!1),n.push(o)}return{results:n,result:r}}function m(e,t,n){e&&e.afterNotify&&e.afterNotify(n,e)
for(var r=0,i=t.length;r<i;r++)t[r](n,e)
return!0}function y(e){if("object"!=typeof e||null===e)return{}
var t={}
for(var n in e)t[n]=e[n]
return t}function b(e,t){void 0===t&&(t=8)
var n=[]
function r(e){if(!e||"object"!=typeof e)return!1
for(var t=0;t<n.length;t++)if(n[t]===e)return!0
return n.push(e),!1}function i(e){var t=typeof e
return/function/.test(t)?"toJSON"===e.name:!/symbol/.test(t)&&null!==e&&("object"!=typeof e||void 0!==e.hasOwnProperty)}function s(e,n){if(void 0===n&&(n=0),n>=t)return"[DEPTH]"
if(!i(e))return Object.prototype.toString.call(e)
if(r(e))return"[RECURSION]"
if(Array.isArray(e))return e.map(function(e){return o(e,n+1)})
if("object"==typeof e){var s={}
for(var a in e){var l=e[a]
Object.prototype.hasOwnProperty.call(e,a)&&null!=a&&null!=l&&(s[a]=o(l,n+1))}return s}return e}function o(e,t){void 0===t&&(t=0)
try{return s(e,t)}catch(e){return"[ERROR] ".concat(e)}}return o(e)}function k(e){var t=function(t){return function(){for(var n,r=[],i=0;i<arguments.length;i++)r[i]=arguments[i]
if("debug"===t){if(!e.config.debug)return
t="log"}r.unshift("[Honeybadger]"),(n=e.config.logger)[t].apply(n,r)}}
return{log:t("log"),info:t("info"),debug:t("debug"),warn:t("warn"),error:t("error")}}function S(e){var t
if(e)if(x(e)){var n=e
t=l(e,{name:n.name,message:n.message,stack:n.stack,cause:n.cause})}else t="object"==typeof e?y(e):{message:String(e)}
else t={}
return t}function x(e){return e instanceof Error||"[object Error]"===Object.prototype.toString.call(e)}function E(e,t,n){if(e&&t&&n&&t in e)try{for(var r=e[t];r&&r.__hb_original;)r=r.__hb_original
e[t]=n(r),e[t].__hb_original=r}catch(e){}}t.merge=l,t.mergeNotice=c,t.objectIsEmpty=u,t.objectIsExtensible=d,t.makeBacktrace=f,t.DEFAULT_BACKTRACE_SHIFT=3,t.calculateBacktraceShift=p,t.getCauses=g,t.getSourceForBacktrace=_,t.runBeforeNotifyHandlers=v,t.runAfterNotifyHandlers=m,t.shallowClone=y,t.sanitize=b,t.logger=k,t.makeNotice=S,t.isErrorObject=x,t.instrument=E
var C=!1,T=[]
function P(e,t){e&&e.console&&t&&(T.push(t),C||(C=!0,["debug","info","warn","error","log"].forEach(function(t){E(e.console,t,function(n){return function(){var r=Array.prototype.slice.call(arguments)
T.forEach(function(e){try{e(t,r)}catch(e){}}),"function"==typeof n&&Function.prototype.apply.call(n,e.console,arguments)}})})))}function $(e,t){var n=e.trim().replace(/\/$/,"")
return t=t.trim().replace(/(^\/|\/$)/g,""),"".concat(n,"/").concat(t)}function L(){try{throw new Error("")}catch(e){if(e.stack)return e.stack}for(var e=10,t=[],n=arguments.callee;n&&t.length<e;){/function(?:\s+([\w$]+))+\s*\(/.test(n.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>")
try{n=n.caller}catch(e){break}}return t.join("\n")}function I(e,t){if(O("Object",e)){O("Array",t)||(t=[])
var n=[]
return r(e)}function r(e){var i,s
if(O("Object",e)||O("Array",e)){if(-1!==n.indexOf(e))return"[CIRCULAR DATA STRUCTURE]"
n.push(e)}if(O("Object",e)){for(i in s={},e)M(i,t)?s[i]="[FILTERED]":s[i]=r(e[i])
return s}return O("Array",e)?e.map(function(e){return r(e)}):O("Function",e)?"[FUNC]":e}}function M(e,t){for(var n=0;n<t.length;n++)if(-1!==e.toLowerCase().indexOf(t[n].toLowerCase()))return!0
return!1}function O(e,t){var n=Object.prototype.toString.call(t).slice(8,-1)
return null!=t&&n===e}function R(e,t){if(!t)return e
if("string"!=typeof e)return e
var n=e.split(/\?/,2)[1]
if(!n)return e
var r=e
return n.split(/[&]\s?/).forEach(function(e){var n=e.split("=",2),i=n[0],s=n[1]
M(i,t)&&(r=r.replace("".concat(i,"=").concat(s),"".concat(i,"=[FILTERED]")))}),r}function F(e,t){void 0===t&&(t="")
var n={}
return Object.keys(e).forEach(function(r){var i=t+r.replace(/\W/g,"_").toUpperCase()
n[i]=e[r]}),n}function A(e){return JSON.parse(JSON.stringify(e))}t.instrumentConsole=P,t.endpoint=$,t.generateStackTrace=L,t.filter=I,t.filterUrl=R,t.formatCGIData=F,t.clone=A
var j=1e4,N=1e4,D=2e5
function B(e){var t
return(t={})[e]="SOURCE_SIZE_TOO_LARGE",t}function q(e,t,n,r){if(!e)return null
if(n&&n>j)return B(t)
if(e.length>D)return B(t)
var i=e.split("\n")
i.unshift("")
var s=i[t]
if(s&&s.length>N)return B(t)
for(var o=t+r,a={},l=t-r;l<=o;l++){var c=i[l]
"string"==typeof c&&(a[l]=c)}return a}function H(e){return void 0!==e.async}function U(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window}t.isBrowserConfig=H,t.globalThisOrWindow=U
var G={}
function W(e,t,n,r){void 0===r&&(r=100)
var i="".concat(t,"-").concat(n)
if(void 0===G[i]&&(G[i]=0),G[i]%r===0){var s="Deprecation warning: ".concat(t," has been deprecated; please use ").concat(n," instead.")
e.warn(s),G[i]++}else G[i]++}t.logDeprecatedMethod=W})(o),Object.defineProperty(s,"__esModule",{value:!0})
var k=o
function S(e){return void 0===e&&(e=(0,k.globalThisOrWindow)()),{shouldReloadOnConfigure:!1,load:function(t){function n(){return t.config.eventsEnabled}n()&&(0,k.instrumentConsole)(e,function(e,r){if(n()&&0!==r.length){var i={severity:e}
"string"==typeof r[0]?(i.message=r[0],i.args=r.slice(1)):i.args=r,t.event("log",i)}})}}}s.default=S
var x={},E={}
Object.defineProperty(E,"__esModule",{value:!0}),E.GlobalStore=void 0
var C=o,T=function(){function e(e,t){this.contents=e,this.breadcrumbsLimit=t}return e.create=function(t,n){return new e(t,n)},e.prototype.available=function(){return!0},e.prototype.getContents=function(e){var t=e?this.contents[e]:this.contents
return JSON.parse(JSON.stringify(t))},e.prototype.setContext=function(e){this.contents.context=(0,C.merge)(this.contents.context,e||{})},e.prototype.addBreadcrumb=function(e){this.contents.breadcrumbs.length==this.breadcrumbsLimit&&this.contents.breadcrumbs.shift(),this.contents.breadcrumbs.push(e)},e.prototype.clear=function(){this.contents.context={},this.contents.breadcrumbs=[]},e.prototype.run=function(e){return e()},e}()
E.GlobalStore=T
var P={}
class ${static parse(e){return e.trim().split("\n").map(e=>JSON.parse(e))}static stringify(e){return e.map(e=>JSON.stringify(e)).join("\n")}}var L=Object.freeze({__proto__:null,NdJson:$}),I=n(L),M={}
Object.defineProperty(M,"__esModule",{value:!0}),M.CONFIG=void 0,M.CONFIG={apiKey:null,endpoint:"https://api.honeybadger.io",environment:null,hostname:null,projectRoot:null,component:null,action:null,revision:null,reportData:null,breadcrumbsEnabled:!0,eventsEnabled:!1,maxBreadcrumbs:40,maxObjectDepth:8,logger:console,developmentEnvironments:["dev","development","test"],debug:!1,tags:null,enableUncaught:!0,enableUnhandledRejection:!0,afterUncaught:function(){return!0},filters:["creditcard","password"],__plugins:[]}
var O=e&&e.__assign||function(){return O=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},O.apply(this,arguments)},R=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):i(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())})},F=e&&e.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i
switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,r=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1]
break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s
break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s)
break}i[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}}
Object.defineProperty(P,"__esModule",{value:!0}),P.ThrottledEventsLogger=void 0
var A=I,j=o,N=M,D=function(){function e(e,t){this.config=e,this.transport=t,this.queue=[],this.isProcessing=!1,this.config=O(O({},N.CONFIG),e),this.logger=this.originalLogger()}return e.prototype.configure=function(e){for(var t in e)this.config[t]=e[t]},e.prototype.log=function(e){this.queue.push(e),this.isProcessing||this.processQueue()},e.prototype.flushAsync=function(){return this.logger.debug("[Honeybadger] Flushing events"),this.send()},e.prototype.processQueue=function(){var e=this
0===this.queue.length||this.isProcessing||(this.isProcessing=!0,this.send().then(function(){setTimeout(function(){e.isProcessing=!1,e.processQueue()},50)}).catch(function(t){e.logger.error("[Honeybadger] Error making HTTP request:",t),setTimeout(function(){e.isProcessing=!1,e.processQueue()},50)}))},e.prototype.send=function(){return R(this,void 0,void 0,function(){var e,t
return F(this,function(n){return 0===this.queue.length?[2]:(e=this.queue.slice(),this.queue=[],t=A.NdJson.stringify(e),[2,this.makeHttpRequest(t)])})})},e.prototype.makeHttpRequest=function(e){return R(this,void 0,void 0,function(){var t=this
return F(this,function(n){return[2,this.transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json"},method:"POST",endpoint:(0,j.endpoint)(this.config.endpoint,"/v1/events"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},e).then(function(){t.config.debug&&t.logger.debug("[Honeybadger] Events sent successfully")}).catch(function(e){t.logger.error("[Honeybadger] Error sending events: ".concat(e.message))})]})})},e.prototype.originalLogger=function(){var e,t,n,r,i
return{log:null!==(e=console.log.__hb_original)&&void 0!==e?e:console.log,info:null!==(t=console.info.__hb_original)&&void 0!==t?t:console.info,debug:null!==(n=console.debug.__hb_original)&&void 0!==n?n:console.debug,warn:null!==(r=console.warn.__hb_original)&&void 0!==r?r:console.warn,error:null!==(i=console.error.__hb_original)&&void 0!==i?i:console.error}},e}()
P.ThrottledEventsLogger=D
var B=e&&e.__assign||function(){return B=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},B.apply(this,arguments)},q=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):i(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())})},H=e&&e.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i
switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,r=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1]
break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s
break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s)
break}i[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}}
Object.defineProperty(x,"__esModule",{value:!0}),x.Client=void 0
var U=o,G=E,W=P,z=M,V=/,|\s+/,Q=/\S/,K=function(){function e(e,t){void 0===e&&(e={}),this.__pluginsLoaded=!1,this.__store=null,this.__beforeNotifyHandlers=[],this.__afterNotifyHandlers=[],this.__notifier={name:"@honeybadger-io/core",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",version:"6.11.2"},this.config=B(B({},z.CONFIG),e),this.__initStore(),this.__transport=t,this.__eventsLogger=new W.ThrottledEventsLogger(this.config,this.__transport),this.logger=(0,U.logger)(this)}return e.prototype.getVersion=function(){return this.__notifier.version},e.prototype.getNotifier=function(){return this.__notifier},e.prototype.setNotifier=function(e){this.__notifier=e},e.prototype.configure=function(e){for(var t in void 0===e&&(e={}),e)this.config[t]=e[t]
return this.__eventsLogger.configure(this.config),this.loadPlugins(),this},e.prototype.loadPlugins=function(){var e=this;(this.__pluginsLoaded?this.config.__plugins.filter(function(e){return e.shouldReloadOnConfigure}):this.config.__plugins).forEach(function(t){return t.load(e)}),this.__pluginsLoaded=!0},e.prototype.__initStore=function(){this.__store=new G.GlobalStore({context:{},breadcrumbs:[]},this.config.maxBreadcrumbs)},e.prototype.beforeNotify=function(e){return this.__beforeNotifyHandlers.push(e),this},e.prototype.afterNotify=function(e){return this.__afterNotifyHandlers.push(e),this},e.prototype.setContext=function(e){return"object"==typeof e&&null!=e&&this.__store.setContext(e),this},e.prototype.resetContext=function(e){return this.logger.warn("Deprecation warning: `Honeybadger.resetContext()` has been deprecated; please use `Honeybadger.clear()` instead."),this.__store.clear(),"object"==typeof e&&null!==e&&this.__store.setContext(e),this},e.prototype.clear=function(){return this.__store.clear(),this},e.prototype.notify=function(e,t,n){var r=this
void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var i=this.makeNotice(e,t,n),s=i&&i.backtrace?i.backtrace.map(function(e){return(0,U.shallowClone)(e)}):null,o=this.__runPreconditions(i)
return o instanceof Error?((0,U.runAfterNotifyHandlers)(i,this.__afterNotifyHandlers,o),!1):o instanceof Promise?(o.then(function(e){return e instanceof Error?((0,U.runAfterNotifyHandlers)(i,r.__afterNotifyHandlers,e),!1):r.__send(i,s)}),!0):(this.__send(i,s).catch(function(e){}),!0)},e.prototype.notifyAsync=function(e,t,n){var r=this
return void 0===t&&(t=void 0),void 0===n&&(n=void 0),new Promise(function(i,s){var o,a
o=e.afterNotify?e:t&&t.afterNotify?t:n&&n.afterNotify?n:t&&"object"==typeof t?t:n||(t={}),a=o.afterNotify,o.afterNotify=function(e){if(null==a||a.call(r,e),e)return s(e)
i()},r.notify(e,t,n)})},e.prototype.makeNotice=function(e,t,n){void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var r=(0,U.makeNotice)(e)
if(t&&"object"!=typeof t&&(t={name:String(t)}),t&&(r=(0,U.mergeNotice)(r,t)),"object"==typeof n&&null!==n&&(r=(0,U.mergeNotice)(r,n)),(0,U.objectIsEmpty)(r))return null
var i=this.__store.getContents("context"),s=this.__constructTags(r.tags),o=this.__constructTags(i.tags),a=this.__constructTags(this.config.tags),l=s.concat(o).concat(a),c=l.filter(function(e,t){return l.indexOf(e)===t})
return r=(0,U.merge)(r,{name:r.name||"Error",context:(0,U.merge)(i,r.context),projectRoot:r.projectRoot||this.config.projectRoot,environment:r.environment||this.config.environment,component:r.component||this.config.component,action:r.action||this.config.action,revision:r.revision||this.config.revision,tags:c}),Array.isArray(r.backtrace)&&r.backtrace.length||("string"==typeof r.stack&&r.stack.trim()?r.backtrace=(0,U.makeBacktrace)(r.stack,!1,this.logger):(r.stack=(0,U.generateStackTrace)(),r.backtrace=(0,U.makeBacktrace)(r.stack,!0,this.logger))),r},e.prototype.addBreadcrumb=function(e,t){if(this.config.breadcrumbsEnabled){t=t||{}
var n=(0,U.shallowClone)(t.metadata),r=t.category||"custom",i=(new Date).toISOString()
return this.__store.addBreadcrumb({category:r,message:e,metadata:n,timestamp:i}),this}},e.prototype.logEvent=function(e){(0,U.logDeprecatedMethod)(this.logger,"Honeybadger.logEvent","Honeybadger.event"),this.event("log",e)},e.prototype.event=function(e,t){var n
"object"==typeof e&&(t=e,e=null!==(n=e.event_type)&&void 0!==n?n:void 0),this.__eventsLogger.log(B({event_type:e,ts:(new Date).toISOString()},t))},e.prototype.flushAsync=function(){return this.__eventsLogger.flushAsync()},e.prototype.__getBreadcrumbs=function(){return this.__store.getContents("breadcrumbs").slice()},e.prototype.__getContext=function(){return this.__store.getContents("context")},e.prototype.__developmentMode=function(){return!0!==this.config.reportData&&this.config.environment&&this.config.developmentEnvironments.includes(this.config.environment)},e.prototype.__buildPayload=function(e){var t=(0,U.filter)(e.headers,this.config.filters)||{},n=(0,U.filter)(B(B({},e.cgiData),(0,U.formatCGIData)(t,"HTTP_")),this.config.filters)
return{notifier:this.__notifier,breadcrumbs:{enabled:!!this.config.breadcrumbsEnabled,trail:e.__breadcrumbs||[]},error:{class:e.name,message:e.message,backtrace:e.backtrace,fingerprint:e.fingerprint,tags:e.tags,causes:(0,U.getCauses)(e,this.logger)},request:{url:(0,U.filterUrl)(e.url,this.config.filters),component:e.component,action:e.action,context:e.context,cgi_data:n,params:(0,U.filter)(e.params,this.config.filters)||{},session:(0,U.filter)(e.session,this.config.filters)||{}},server:{project_root:e.projectRoot,environment_name:e.environment,revision:e.revision,hostname:this.config.hostname,time:(new Date).toUTCString()},details:e.details||{}}},e.prototype.__constructTags=function(e){return e?e.toString().split(V).filter(function(e){return Q.test(e)}):[]},e.prototype.__runPreconditions=function(e){var t=this,n=null
e||(this.logger.debug("failed to build error report"),n=new Error("failed to build error report")),!1===this.config.reportData&&(this.logger.debug("skipping error report: honeybadger.js is disabled",e),n=new Error("honeybadger.js is disabled")),this.__developmentMode()&&(this.logger.log("honeybadger.js is in development mode; the following error report will be sent in production.",e),n=new Error("honeybadger.js is in development mode")),this.config.apiKey||(this.logger.warn("could not send error report: no API key has been configured",e),n=new Error("missing API key"))
var r=(0,U.runBeforeNotifyHandlers)(e,this.__beforeNotifyHandlers)
return n||r.result||(this.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers returned false")),r.results.length&&r.results.some(function(e){return e instanceof Promise})?Promise.allSettled(r.results).then(function(r){if(!n&&r.some(function(e){return"rejected"===e.status||!1===e.value})&&(t.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers (async) returned false")),n)return n}):n},e.prototype.__send=function(e,t){var n=this
return this.config.breadcrumbsEnabled?(this.addBreadcrumb("Honeybadger Notice",{category:"notice",metadata:{message:e.message,name:e.name,stack:e.stack}}),e.__breadcrumbs=this.__store.getContents("breadcrumbs")):e.__breadcrumbs=[],(0,U.getSourceForBacktrace)(t,this.__getSourceFileHandler).then(function(t){return q(n,void 0,void 0,function(){var n
return H(this,function(r){return t.forEach(function(t,n){e.backtrace[n].source=t}),n=this.__buildPayload(e),[2,this.__transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json",Accept:"text/json, application/json"},method:"POST",endpoint:(0,U.endpoint)(this.config.endpoint,"/v1/notices/js"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},n)]})})}).then(function(t){if(201!==t.statusCode)return(0,U.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,new Error("Bad HTTP response: ".concat(t.statusCode))),n.logger.warn("Error report failed: unknown response from server. code=".concat(t.statusCode)),!1
var r=JSON.parse(t.body).id
return(0,U.runAfterNotifyHandlers)((0,U.merge)(e,{id:r}),n.__afterNotifyHandlers),n.logger.info("Error report sent ⚡ https://app.honeybadger.io/notice/".concat(r)),!0}).catch(function(t){return n.logger.error("Error report failed: an unknown error occurred.","message=".concat(t.message)),(0,U.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,t),!1})},e}()
x.Client=K
var J={}
Object.defineProperty(J,"__esModule",{value:!0}),function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e&&e.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},a=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i)
return r(t,e),t},l=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Plugins=t.Util=t.Types=t.Client=void 0
var c=l(s),u=x
Object.defineProperty(t,"Client",{enumerable:!0,get:function(){return u.Client}}),i(E,t),t.Types=a(J),t.Util=a(o),t.Plugins={events:c.default}}(i)
var Y={}
Object.defineProperty(Y,"__esModule",{value:!0}),Y.preferCatch=Y.encodeCookie=Y.decodeCookie=Y.localURLPathname=Y.parseURL=Y.nativeFetch=Y.stringTextOfElement=Y.stringSelectorOfElement=Y.stringNameOfElement=void 0
var X=i.Util.globalThisOrWindow
function Z(e){if(!e||!e.tagName)return""
var t=e.tagName.toLowerCase()
if("html"===t)return""
e.id&&(t+="#".concat(e.id))
var n=e.getAttribute("class")
n&&n.split(/\s+/).forEach(function(e){t+=".".concat(e)}),["alt","name","title","type"].forEach(function(n){var r=e.getAttribute(n)
r&&(t+="[".concat(n,'="').concat(r,'"]'))})
var r=le(e)
return r.length>1&&(t+=":nth-child(".concat(Array.prototype.indexOf.call(r,e)+1,")")),t}function ee(e){var t=Z(e)
if(e.parentNode&&e.parentNode.tagName){var n=ee(e.parentNode)
if(n.length>0)return"".concat(n," > ").concat(t)}return t}function te(e){var t=e.textContent||e.innerText||""
return t||"submit"!==e.type&&"button"!==e.type||(t=e.value),ce(t.trim(),300)}function ne(){var e=X()
if(!e.fetch)return!1
if(re(e.fetch))return!0
if("undefined"==typeof document)return!1
try{var t=document.createElement("iframe")
t.style.display="none",document.head.appendChild(t)
var n=t.contentWindow.fetch&&re(t.contentWindow.fetch)
return document.head.removeChild(t),n}catch(e){console&&console.warn&&console.warn("failed to detect native fetch via iframe: "+e)}return!1}function re(e){return-1!==e.toString().indexOf("native")}function ie(e){var t=e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)||{}
return{protocol:t[2],host:t[4],pathname:t[5]}}function se(e){var t=ie(e),n=ie(document.URL)
return t.host&&t.protocol?t.protocol===n.protocol&&t.host===n.host?t.pathname:"".concat(t.protocol,"://").concat(t.host).concat(t.pathname):t.pathname}function oe(e){var t={}
return e.split(/[;,]\s?/).forEach(function(e){var n=e.split("=",2),r=n[0],i=n[1]
t[r]=i}),t}function ae(e){if("object"==typeof e){var t=[]
for(var n in e)t.push(n+"="+e[n])
return t.join(";")}}function le(e){try{var t=e.parentNode.childNodes,n=[]
return Array.prototype.forEach.call(t,function(t){t.tagName&&t.tagName===e.tagName&&n.push(t)}),n}catch(e){return[]}}function ce(e,t){return e.length>t&&(e=e.substr(0,t)+"..."),e}Y.stringNameOfElement=Z,Y.stringSelectorOfElement=ee,Y.stringTextOfElement=te,Y.nativeFetch=ne,Y.parseURL=ie,Y.localURLPathname=se,Y.decodeCookie=oe,Y.encodeCookie=ae,Y.preferCatch=function(){var e=!0
if("undefined"==typeof window)return e
if(window.atob||(e=!1),window.ErrorEvent)try{0===new window.ErrorEvent("").colno&&(e=!1)}catch(e){}return e}()
var ue={}
Object.defineProperty(ue,"__esModule",{value:!0}),ue.onError=ue.ignoreNextOnError=void 0
var de,fe=i,he=fe.Util.instrument,pe=fe.Util.makeNotice,ge=fe.Util.globalThisOrWindow,_e=0
function ve(){_e+=1,clearTimeout(de),de=setTimeout(function(){_e=0})}function me(e){return void 0===e&&(e=ge()),{load:function(t){he(e,"onerror",function(n){var r=function(e,n,r,i,s){if(t.logger.debug("window.onerror callback invoked",arguments),_e>0)return t.logger.debug("Ignoring window.onerror (error likely reported earlier)",arguments),void(_e-=1)
if(0===r&&/Script error\.?/.test(e))t.config.enableUncaught&&t.logger.warn("Ignoring cross-domain script error: enable CORS to track these types of errors",arguments)
else{var o=pe(s)
o.name||(o.name="window.onerror"),o.message||(o.message=e),o.stack||(o.stack=[o.message,"\n    at ? (",n||"unknown",":",r||0,":",i||0,")"].join("")),t.addBreadcrumb("window.onerror"!==o.name&&o.name?"window.onerror: ".concat(o.name):"window.onerror",{category:"error",metadata:{name:o.name,message:o.message,stack:o.stack}}),t.config.enableUncaught&&t.notify(o)}}
return function(t,i,s,o,a){return r(t,i,s,o,a),"function"==typeof n&&n.apply(e,arguments)}})}}}ue.ignoreNextOnError=ve,ue.onError=me
var ye={}
Object.defineProperty(ye,"__esModule",{value:!0})
var be=i,we=be.Util.instrument,ke=be.Util.globalThisOrWindow
function Se(e){return void 0===e&&(e=ke()),{load:function(t){t.config.enableUnhandledRejection&&we(e,"onunhandledrejection",function(e){function n(e){var n
if(t.logger.debug("window.onunhandledrejection callback invoked",arguments),t.config.enableUnhandledRejection){var r=e.reason
if(r instanceof Error){var i="unknown",s=0,o="".concat(r.message,"\n    at ? (").concat(i,":").concat(s,")"),a=r.stack||o,l={name:r.name,message:"UnhandledPromiseRejectionWarning: ".concat(r),stack:a}
return t.addBreadcrumb("window.onunhandledrejection: ".concat(l.name),{category:"error",metadata:l}),void t.notify(l)}var c="string"==typeof r?r:null!==(n=JSON.stringify(r))&&void 0!==n?n:"Unspecified reason"
t.notify({name:"window.onunhandledrejection",message:"UnhandledPromiseRejectionWarning: ".concat(c)})}}return function(t){n(t),"function"==typeof e&&e.apply(this,arguments)}})}}}ye.default=Se
var xe={}
Object.defineProperty(xe,"__esModule",{value:!0})
var Ee=i,Ce=Y,Te=Ee.Util.sanitize,Pe=Ee.Util.instrument,$e=Ee.Util.instrumentConsole,Le=Ee.Util.globalThisOrWindow
function Ie(e){return void 0===e&&(e=Le()),{load:function(t){function n(e){return!0===t.config.breadcrumbsEnabled||(e?!0===t.config.breadcrumbsEnabled[e]:!1!==t.config.breadcrumbsEnabled)}!function(){function r(e){return Array.isArray(e)?e.map(function(e){try{return String(e)}catch(e){return"[unknown]"}}).join(" "):""}n("console")&&$e(e,function(e,n){var i=r(n),s={category:"log",metadata:{level:e,arguments:Te(n,3)}}
t.addBreadcrumb(i,s)})}(),n("dom")&&"function"==typeof e.addEventListener&&e.addEventListener("click",function(e){var n,r,i
try{n=(0,Ce.stringNameOfElement)(e.target),r=(0,Ce.stringSelectorOfElement)(e.target),i=(0,Ce.stringTextOfElement)(e.target)}catch(e){n="UI Click",r="[unknown]",i="[unknown]"}0!==n.length&&t.addBreadcrumb(n,{category:"ui.click",metadata:{selector:r,text:i,event:e}})},!!e.location),n("network")&&"undefined"!=typeof XMLHttpRequest&&(Pe(XMLHttpRequest.prototype,"open",function(e){return function(){var t=this,n=arguments[1],r="string"==typeof n?n:String(n),i="string"==typeof arguments[0]?arguments[0].toUpperCase():arguments[0],s="".concat(i," ").concat((0,Ce.localURLPathname)(r))
this.__hb_xhr={type:"xhr",method:i,url:r,message:s},"function"==typeof e&&e.apply(t,arguments)}}),Pe(XMLHttpRequest.prototype,"send",function(e){return function(){var n=this
function r(){if(4===n.readyState){var e=void 0
n.__hb_xhr&&(n.__hb_xhr.status_code=n.status,e=n.__hb_xhr.message,delete n.__hb_xhr.message),t.addBreadcrumb(e||"XMLHttpRequest",{category:"request",metadata:n.__hb_xhr})}}"onreadystatechange"in n&&"function"==typeof n.onreadystatechange?Pe(n,"onreadystatechange",function(e){return function(){r(),"function"==typeof e&&e.apply(this,arguments)}}):n.onreadystatechange=r,"function"==typeof e&&e.apply(n,arguments)}})),n("network")&&(0,Ce.nativeFetch)()&&Pe(e,"fetch",function(n){return function(){var r,i=arguments[0],s="GET"
"string"==typeof i?r=i:"Request"in e&&i instanceof Request?(r=i.url,i.method&&(s=i.method)):r=String(i),arguments[1]&&arguments[1].method&&(s=arguments[1].method),"string"==typeof s&&(s=s.toUpperCase())
var o="".concat(s," ").concat("undefined"==typeof document?r:(0,Ce.localURLPathname)(r)),a={type:"fetch",method:s,url:r}
return n.apply(this,arguments).then(function(e){return a.status_code=e.status,t.addBreadcrumb(o,{category:"request",metadata:a}),e}).catch(function(e){throw t.addBreadcrumb("fetch error",{category:"error",metadata:a}),e})}}),function(){if(n("navigation")&&null!=e.location){var r=e.location.href
"function"==typeof addEventListener&&addEventListener("popstate",function(t){i(r,e.location.href)}),void 0!==e.history&&(Pe(e.history,"pushState",s),Pe(e.history,"replaceState",s))}function i(e,n){r=n,t.addBreadcrumb("Page changed",{category:"navigation",metadata:{from:e,to:n}})}function s(e){return function(){var t=arguments.length>2?arguments[2]:void 0
return t&&i(r,String(t)),e.apply(this,arguments)}}}()}}}xe.default=Ie
var Me={}
Object.defineProperty(Me,"__esModule",{value:!0})
var Oe=i,Re=Oe.Util.instrument,Fe=Oe.Util.globalThisOrWindow
function Ae(e){return void 0===e&&(e=Fe()),{load:function(t){!function(){function n(e){return function(n){return function(r,i){if("function"==typeof r){var s=Array.prototype.slice.call(arguments,2)
return r=t.__wrap(r,e),n(function(){r.apply(void 0,s)},i)}return n(r,i)}}}Re(e,"setTimeout",n({component:"setTimeout"})),Re(e,"setInterval",n({component:"setInterval"}))}()}}}Me.default=Ae
var je={}
Object.defineProperty(je,"__esModule",{value:!0})
var Ne=i,De=Ne.Util.instrument,Be=Ne.Util.globalThisOrWindow
function qe(e){return void 0===e&&(e=Be()),{load:function(t){["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"].forEach(function(n){var r=e[n]&&e[n].prototype
r&&Object.prototype.hasOwnProperty.call(r,"addEventListener")&&(De(r,"addEventListener",function(e){var r={component:"".concat(n,".prototype.addEventListener")}
return function(n,i,s,o){try{i&&null!=i.handleEvent&&(i.handleEvent=t.__wrap(i.handleEvent,r))}catch(e){t.logger.error(e)}return e.call(this,n,t.__wrap(i,r),s,o)}}),De(r,"removeEventListener",function(e){return function(n,r,i,s){return e.call(this,n,r,i,s),e.call(this,n,t.__wrap(r),i,s)}}))})}}}je.default=qe
var He={},Ue=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):i(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())})},Ge=e&&e.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i
switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,r=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1]
break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s
break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s)
break}i[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}}
Object.defineProperty(He,"__esModule",{value:!0}),He.BrowserTransport=void 0
var We=i,ze=We.Util.sanitize,Ve=We.Util.globalThisOrWindow
function Qe(e){return Object.entries(e)}var Ke=function(){function e(e){void 0===e&&(e={}),this.headers={},this.headers=e}return e.prototype.defaultHeaders=function(){return this.headers},e.prototype.send=function(e,t){return Ue(this,void 0,void 0,function(){var n,r,i,s,o
return Ge(this,function(a){switch(a.label){case 0:return n=e.headers?Qe(e.headers):[],r=this.defaultHeaders(),n.forEach(function(e){var t=e[0],n=e[1]
null!=t&&null!=n&&(r[String(t)]=String(n))}),i={method:e.method,headers:r},"POST"===e.method&&t&&(i.body="string"==typeof t?t:JSON.stringify(ze(t,e.maxObjectDepth))),[4,Ve().fetch(e.endpoint,i)]
case 1:return[4,(s=a.sent()).text()]
case 2:return o=a.sent(),[2,Promise.resolve({statusCode:s.status,body:o})]}})})},e}()
He.BrowserTransport=Ke
var Je={},Ye=e&&e.__assign||function(){return Ye=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},Ye.apply(this,arguments)}
Object.defineProperty(Je,"__esModule",{value:!0}),Je.BrowserFeedbackForm=void 0
var Xe=i.Util.globalThisOrWindow,Ze=function(){function t(e,t,n){this.config=e,this.logger=t,this.scriptUrl=n}return t.prototype.appendUserFeedbackTag=function(t,n){void 0===n&&(n={})
var r=t.document.createElement("script")
r.setAttribute("src",this.scriptUrl),r.setAttribute("async","true"),n.onLoad&&(r.onload=n.onLoad),(e.document.head||e.document.body).appendChild(r)},t.prototype.isUserFeedbackUrlAlreadyVisible=function(){for(var e=Xe(),t=this.scriptUrl,n=0;n<e.document.scripts.length;n++)if(e.document.scripts[n].src===t)return!0
return!1},t.prototype.show=function(e,t){if(void 0===t&&(t={}),"function"==typeof this.appendUserFeedbackTag)if(this.config&&this.config.apiKey)if(e){var n=Xe()
void 0!==n.document?this.isUserFeedbackUrlAlreadyVisible()?this.logger.debug("User feedback form is already visible"):(n.honeybadgerUserFeedbackOptions=Ye(Ye({},t),{apiKey:this.config.apiKey,endpoint:this.config.userFeedbackEndpoint,noticeId:e}),this.appendUserFeedbackTag(n,t)):this.logger.debug("global.document is undefined. Cannot attach script")}else this.logger.debug("Can't show user feedback form without a notice already reported")
else this.logger.debug("Client not initialized")
else this.logger.debug("Feedback form is not available in this environment")},t}()
Je.BrowserFeedbackForm=Ze,function(t){var n,r=e&&e.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=e&&e.__assign||function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},s.apply(this,arguments)},o=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):i(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())})},a=e&&e.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i
switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,r=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1]
break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s
break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s)
break}i[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}},l=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Types=t.getUserFeedbackScriptUrl=void 0
var c=i,u=Y,d=ue,f=l(ye),h=l(xe),p=l(Me),g=l(je),_=He,v=Je,m=c.Util.merge,y=c.Util.filter,b=c.Util.objectIsExtensible,w=c.Util.globalThisOrWindow,k=function(){var e=w(),t=""
return null!=e.location&&(t=e.location.protocol+"//"+e.location.host),t},S=function(e){var t=e.split(".").slice(0,2).join(".")
return"https://js.honeybadger.io/v".concat(t,"/honeybadger-feedback-form.js")}
t.getUserFeedbackScriptUrl=S
var x=function(e){function n(t){void 0===t&&(t={})
var n=e.call(this,s({userFeedbackEndpoint:"https://api.honeybadger.io/v2/feedback",async:!0,maxErrors:null,projectRoot:k()},t),new _.BrowserTransport({"User-Agent":C()}))||this
return n.__errorsSent=0,n.__lastWrapErr=void 0,n.__lastNoticeId=void 0,n.__beforeNotifyHandlers=[function(e){return n.__exceedsMaxErrors()?(n.logger.debug("Dropping notice: max errors exceeded",e),!1):(e&&!e.url&&"undefined"!=typeof document&&(e.url=document.URL),n.__incrementErrorsCount(),!0)}],n.__afterNotifyHandlers=[function(e,t){t&&(n.__lastNoticeId=t.id)}],n}return r(n,e),n.prototype.configure=function(t){return void 0===t&&(t={}),e.prototype.configure.call(this,t)},n.prototype.resetMaxErrors=function(){return this.__errorsSent=0},n.prototype.factory=function(e){var t=new n(e)
return t.setNotifier(this.getNotifier()),t},n.prototype.checkIn=function(e){throw new Error("Honeybadger.checkIn() is not supported on the browser")},n.prototype.showUserFeedbackForm=function(e){return void 0===e&&(e={}),o(this,void 0,void 0,function(){return a(this,function(t){return new v.BrowserFeedbackForm(this.config,this.logger,this.getUserFeedbackSubmitUrl()).show(this.__lastNoticeId,e),[2]})})},n.prototype.getUserFeedbackSubmitUrl=function(){return(0,t.getUserFeedbackScriptUrl)(this.getVersion())},n.prototype.__buildPayload=function(t){var n,r={HTTP_USER_AGENT:void 0,HTTP_REFERER:void 0,HTTP_COOKIE:void 0}
"undefined"!=typeof navigator&&navigator.userAgent&&(r.HTTP_USER_AGENT=navigator.userAgent),"undefined"!=typeof document&&document.referrer.match(/\S/)&&(r.HTTP_REFERER=document.referrer),(n="string"==typeof t.cookies?(0,u.decodeCookie)(t.cookies):t.cookies)&&(r.HTTP_COOKIE=(0,u.encodeCookie)(y(n,this.config.filters)))
var i=e.prototype.__buildPayload.call(this,t)
return i.request.cgi_data=m(r,i.request.cgi_data),i},n.prototype.__wrap=function(e,t){void 0===t&&(t={})
var n=e
t||(t={})
try{if("function"!=typeof n)return n
if(!b(n))return n
if(!n.___hb){var r=this
n.___hb=function(){if(!u.preferCatch)return n.apply(this,arguments)
try{return n.apply(this,arguments)}catch(e){if(r.__lastWrapErr===e)throw e
throw r.__lastWrapErr=e,(0,d.ignoreNextOnError)(),r.addBreadcrumb(t.component?"".concat(t.component,": ").concat(e.name):e.name,{category:"error",metadata:{message:e.message,name:e.name,stack:e.stack}}),r.config.enableUncaught&&r.notify(e),e}}}return n.___hb.___hb=n.___hb,n.___hb}catch(e){return n}},n.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},n.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},n}(c.Client),E={name:"@honeybadger-io/js",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",version:"6.11.2"},C=function(){return"undefined"!=typeof navigator?"Honeybadger JS Browser Client ".concat(E.version,"; ").concat(navigator.userAgent):"Honeybadger JS Browser Client ".concat(E.version,"; n/a; n/a")},T=new x({__plugins:[(0,d.onError)(),(0,f.default)(),(0,p.default)(),(0,g.default)(),(0,h.default)(),c.Plugins.events()]})
T.setNotifier(E)
var P=i
Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return P.Types}}),t.default=T}(r)
var et=t(r)
return et}()),Ic.exports),Oc=$c(Mc)
const Rc=["attackplayer.min.js","Auction-House-Monitor.user.js","Cocaine.user.js","Compra-%2526-Venda-de-Recursos-%25E2%259C%2585.user.js","cross-origin frame","Daily-Quest-Auto-Hunter-All-Creatures-%252B-SE-Searcher-Movement.user.js","Discord-Message-Checks-for-Updates.user.js","dynamically imported module","Fallen-Sword-Auto-Invent.user.js","Fallen-Sword-Auto-Skill-Caster.user.js","Fallen-Sword-Champion-and-Super-Elite-Alert.user.js","Fallen-Sword-Message-Alert.user.js","Fallen-Sword-Super-Elite-%2526-Crate-Notifier.user.js","Fallen-Sword-Super-Elite-Notifier.user.js","Fallen-Sword-Win%252FLoss-Checker-with-Buffs-and-Buff-Levels.user.js","Fallen-Sword-Win%252FLoss-Checker.user.js","Fallensword-GvG-Target-Checker-with-Button-and-Buff-Check.user.js","Fetch-Auction-and-Send-to-Discord.user.js","FS-Fixer.user.js","fs.min.js","FSH1.user.js","Gold-alert.user.js","GVG-and-Relics-Notifications.user.js","GvG-Initiate-Enhanced.user.js","GvG-List-v2.user.js","GvG-Name-Only.user.js","GVG%252FRelics-Discord.user.js","GVG%252FRelics-Notifications.user.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","League-of-Legends.user.js","MetaMask","New-Userscript.user.js","openuserjs.org","Permission denied to access object","play method is not allowed","Quick-Kill.user.js","SE-Searcher-Replay-Fix.user.js","se-searcher-v2-draft.user.js","Superelite-searcher.user.js","Titan-3.0.user.js","Titan-Quick-Kill.user.js","UFSG-dodatki.user.js","UnhandledPromiseRejectionWarning: 404","world.min.js","(reading '$$')"],Fc=e=>mc(e)&&Rc.some(t=>e.includes(t))
function Ac(e){if(Fc(e.message)||Fc(e.stack))return!1}function jc(){!function(){Oc.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.154"})
const e=s()
e&&Oc.setContext({user_id:e}),Oc.afterNotify(e=>{if(e)return ia(`Honeybadger notification failed: ${e}`)}),Oc.beforeNotify(Ac)}()}function Nc(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class Dc extends Error{constructor([e,t,n,r],...i){super(function(e,t,n,r){const i=`${t.status} ${t.statusText} - `
if(t.statusText===r.toString())return i+Nc(e)
const s=`${i+n} ${r} - ${Nc(e)}`
return"parsererror"===n?`${s} - ${t.responseText}`:s}(e,t,n,r),...i),Error.captureStackTrace&&Error.captureStackTrace(this,Dc),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=r}}function Bc(e,t,n,r){e instanceof EventTarget&&e.addEventListener(t,n,r)}function qc(e,t,n){return JSON.stringify(e,t,n)}function Hc(e){_c("betaOptIn")&&ia("sendException",e),Oc.notify(e,"sendException")}var Uc={}
function Gc(e){return Array.isArray(e)}function Wc(e,t){return e||t}const zc=[null]
function Vc(e,t){return zc[e]&&zc[e].priority<zc[t].priority}function Qc(e,t){const n=zc[e]
zc[e]=zc[t],zc[t]=n}function Kc(e,t){return e?2*t:2*t+1}function Jc(){if(1===zc.length)return
const e=zc[1].data,t=zc.pop()
return zc.length>1&&(zc[1]=t,function(e){let t=e
for(;2*t<zc.length;){const e=Kc(!Vc(2*t+1,2*t),t)
if(Vc(t,e))break
Qc(t,e),t=e}}(1)),e}function Yc(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!Vc(t,e))break
Qc(t,e),t=e}}(zc.push({data:e,priority:t})-1)}let Xc=!0
const Zc="fshMessage"
let eu=0
function tu(){zc.length-1==0?Xc=!0:(Xc=!1,window.postMessage(Zc,window.location.origin))}function nu(){const e=Jc()
Sc(e)?e():function(e){xa(e)||Hc(`pop() was not a function (${typeof e})`)}(e)}function ru(e){const t=e.data
e.origin===window.location.origin&&t===Zc&&function(){try{nu()}catch(e){Oc.notify(e,"taskFailure")}finally{tu()}}()}function iu(e,t,n,r){if(Sc(t)){eu||(Bc(window,"message",ru),eu=!0)
const i=Wc(r,window),s=Wc(n,[])
Yc(t.bind(i,...s),e),Xc&&tu()}}function su(e,t){return new URLSearchParams(e).get(t)}function ou(e){try{return su(decodeURIComponent(window.location.search),e)}catch(e){return ia(e),""}}var au=!1,lu=Array.isArray,cu=Array.prototype.indexOf,uu=Array.from,du=Object.defineProperty,fu=Object.getOwnPropertyDescriptor,hu=Object.getOwnPropertyDescriptors,pu=Object.prototype,gu=Array.prototype,_u=Object.getPrototypeOf,vu=Object.isExtensible
function mu(e){return"function"==typeof e}const yu=()=>{}
function bu(e){return e()}function wu(e){for(var t=0;t<e.length;t++)e[t]()}function ku(e,t){if(Array.isArray(e))return e
if(void 0===t||!(Symbol.iterator in e))return Array.from(e)
const n=[]
for(const r of e)if(n.push(r),n.length===t)break
return n}const Su=16,xu=32,Eu=64,Cu=256,Tu=512,Pu=1024,$u=2048,Lu=4096,Iu=8192,Mu=16384,Ou=32768,Ru=65536,Fu=1<<17,Au=1<<19,ju=1<<21,Nu=1<<22,Du=1<<23,Bu=Symbol("$state"),qu=Symbol("legacy props"),Hu=Symbol(""),Uu=new class extends Error{name="StaleReactionError"
message="The reaction that called `getAbortSignal()` was re-run or destroyed"}
function Gu(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Wu=Symbol()
function zu(e){return e===this.v}function Vu(e,t){return e!=e?t==t:e!==t||null!==e&&"object"==typeof e||"function"==typeof e}function Qu(e){return!Vu(e,this.v)}let Ku=!1
function Ju(){Ku=!0}const Yu=[]
function Xu(e,t=!1,n=!1){return Zu(e,new Map,"",Yu,null,n)}function Zu(e,t,n,r,i=null,s=!1){if("object"==typeof e&&null!==e){var o=t.get(e)
if(void 0!==o)return o
if(e instanceof Map)return new Map(e)
if(e instanceof Set)return new Set(e)
if(lu(e)){var a=Array(e.length)
t.set(e,a),null!==i&&t.set(i,a)
for(var l=0;l<e.length;l+=1){var c=e[l]
l in e&&(a[l]=Zu(c,t,n,r,null,s))}return a}if(_u(e)===pu){for(var u in a={},t.set(e,a),null!==i&&t.set(i,a),e)a[u]=Zu(e[u],t,n,r,null,s)
return a}if(e instanceof Date)return structuredClone(e)
if("function"==typeof e.toJSON&&!s)return Zu(e.toJSON(),t,n,r,e)}if(e instanceof EventTarget)return e
try{return structuredClone(e)}catch(t){return e}}let ed=null
function td(e){ed=e}function nd(e,t=!1,n){ed={p:ed,c:null,e:null,s:e,x:null,l:Ku&&!t?{s:null,u:null,$:[]}:null}}function rd(e){var t=ed,n=t.e
if(null!==n)for(var r of(t.e=null,n))_f(r)
return void 0!==e&&(t.x=e),ed=t.p,e??{}}function id(){return!Ku||null!==ed&&null===ed.l}const sd=new WeakMap
function od(e,t){for(;null!==t;){if(128&t.f)try{return void t.b.error(e)}catch(t){e=t}t=t.parent}throw e instanceof Error&&ad(e),e}function ad(e){const t=sd.get(e)
t&&(du(e,"message",{value:t.message}),du(e,"stack",{value:t.stack}))}let ld=[],cd=[]
function ud(){var e=ld
ld=[],wu(e)}function dd(e){0===ld.length&&queueMicrotask(ud),ld.push(e)}function fd(){ld.length>0&&ud(),cd.length>0&&function(){var e=cd
cd=[],wu(e)}()}function hd(){for(var e=Bf.b;null!==e&&!e.has_pending_snippet();)e=e.parent
return null===e&&function(){throw new Error("https://svelte.dev/e/await_outside_boundary")}(),e}function pd(e){var t=2050,n=null!==jf&&2&jf.f?jf:null
null===Bf||null!==n&&0!==(n.f&Cu)?t|=Cu:Bf.f|=Au
return{ctx:ed,deps:null,effects:null,equals:zu,f:t,fn:e,reactions:null,rv:0,v:Wu,wv:0,parent:n??Bf,ac:null}}function gd(e,t){let n=Bf
null===n&&function(){throw new Error("https://svelte.dev/e/async_derived_orphan")}()
var r=n.b,i=void 0,s=Hd(Wu),o=null,a=!jf
return function(e){hf(4718592,e,!0)}(()=>{try{var t=e()}catch(e){t=Promise.reject(e)}var n=()=>t
i=o?.then(n,n)??Promise.resolve(t),o=i
var l=xd,c=r.pending
a&&(r.update_pending_count(1),c||l.increment())
const u=(e,t=void 0)=>{o=null,c||l.activate(),t?t!==Uu&&(s.f|=Du,zd(s,t)):(0!==(s.f&Du)&&(s.f^=Du),zd(s,e)),a&&(r.update_pending_count(-1),c||l.decrement()),kd()}
if(i.then(u,e=>u(null,e||"unknown")),l)return()=>{queueMicrotask(()=>l.neuter())}}),new Promise(e=>{!function t(n){function r(){n===i?e(s):t(i)}n.then(r,r)}(i)})}function _d(e){const t=pd(e)
return Uf(t),t}function vd(e){const t=pd(e)
return t.equals=Qu,t}function md(e){var t=e.effects
if(null!==t){e.effects=null
for(var n=0;n<t.length;n+=1)Ef(t[n])}}function yd(e){var t,n=Bf
qf(function(e){for(var t=e.parent;null!==t;){if(!(2&t.f))return t
t=t.parent}return null}(e))
try{md(e),t=th(e)}finally{qf(n)}return t}function bd(e){var t=yd(e);(e.equals(t)||(e.v=t,e.wv=Xf()),Ff)||(null!==Cd?Cd.set(e,e.v):uh(e,!Yf&&0===(e.f&Cu)||null===e.deps?Pu:Lu))}function wd(e,t,n){const r=id()?pd:vd
if(0!==t.length){var i,s,o,a=xd,l=Bf,c=(i=Bf,s=jf,o=ed,function(){qf(i),Df(s),td(o)}),u=hd()
Promise.all(t.map(e=>gd(e))).then(t=>{a?.activate(),c()
try{n([...e.map(r),...t])}catch(e){0===(l.f&Mu)&&od(e,l)}a?.deactivate(),kd()}).catch(e=>{u.error(e)})}else n(e.map(r))}function kd(){qf(null),Df(null),td(null)}const Sd=new Set
let xd=null,Ed=null,Cd=null,Td=new Set,Pd=[]
function $d(){const e=Pd.shift()
Pd.length>0&&queueMicrotask($d),e()}let Ld=[],Id=null,Md=!1,Od=!1
class Rd{current=new Map
#e=new Map
#t=new Set
#n=0
#r=null
#i=!1
#s=[]
#o=[]
#a=[]
#l=[]
#c=[]
#u=[]
#d=[]
skipped_effects=new Set
process(e){Ld=[],Ed=null
var t=null
if(Sd.size>1){t=new Map,Cd=new Map
for(const[e,n]of this.current)t.set(e,{v:e.v,wv:e.wv}),e.v=n
for(const e of Sd)if(e!==this)for(const[n,r]of e.#e)t.has(n)||(t.set(n,{v:n.v,wv:n.wv}),n.v=r)}for(const t of e)this.#f(t)
if(0===this.#s.length&&0===this.#n){this.#h()
var n=this.#a,r=this.#l
this.#a=[],this.#l=[],this.#c=[],Ed=xd,xd=null,Dd(n),Dd(r),null===xd?xd=this:Sd.delete(this),this.#r?.resolve()}else this.#p(this.#a),this.#p(this.#l),this.#p(this.#c)
if(t){for(const[e,{v:n,wv:r}]of t)e.wv<=r&&(e.v=n)
Cd=null}for(const e of this.#s)ih(e)
for(const e of this.#o)ih(e)
this.#s=[],this.#o=[]}#f(e){e.f^=Pu
for(var t=e.first;null!==t;){var n=t.f,r=!!(96&n)
if(!(r&&0!==(n&Pu)||0!==(n&Iu)||this.skipped_effects.has(t))&&null!==t.fn){if(r)t.f^=Pu
else if(4&n)this.#l.push(t)
else if(0===(n&Pu)){if(0!==(n&Nu))(t.b?.pending?this.#o:this.#s).push(t)
else Zf(t)&&(0!==(t.f&Su)&&this.#c.push(t),ih(t))}var i=t.first
if(null!==i){t=i
continue}}var s=t.parent
for(t=t.next;null===t&&null!==s;)t=s.next,s=s.parent}}#p(e){for(const t of e){(0!==(t.f&$u)?this.#u:this.#d).push(t),uh(t,Pu)}e.length=0}capture(e,t){this.#e.has(e)||this.#e.set(e,t),this.current.set(e,e.v)}activate(){xd=this}deactivate(){xd=null,Ed=null
for(const e of Td)if(Td.delete(e),e(),null!==xd)break}neuter(){this.#i=!0}flush(){Ld.length>0?Ad():this.#h(),xd===this&&(0===this.#n&&Sd.delete(this),this.deactivate())}#h(){if(!this.#i)for(const e of this.#t)e()
this.#t.clear()}increment(){this.#n+=1}decrement(){if(this.#n-=1,0===this.#n){for(const e of this.#u)uh(e,$u),Bd(e)
for(const e of this.#d)uh(e,Lu),Bd(e)
this.#a=[],this.#l=[],this.flush()}else this.deactivate()}add_callback(e){this.#t.add(e)}settled(){return(this.#r??={promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}).promise
var e,t}static ensure(){if(null===xd){const e=xd=new Rd
Sd.add(xd),Od||Rd.enqueue(()=>{xd===e&&e.flush()})}return xd}static enqueue(e){0===Pd.length&&queueMicrotask($d),Pd.unshift(e)}}function Fd(e){var t=Od
Od=!0
try{for(;;){if(fd(),0===Ld.length&&(xd?.flush(),0===Ld.length))return void(Id=null)
Ad()}}finally{Od=t}}function Ad(){var e=Of
Md=!0
try{var t=0
for(Rf(!0);Ld.length>0;){var n=Rd.ensure()
if(t++>1e3)au,jd()
n.process(Ld),qd.clear()}}finally{Md=!1,Rf(e),Id=null}}function jd(){try{!function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}()}catch(e){od(e,Id)}}let Nd=null
function Dd(e){var t=e.length
if(0!==t){for(var n=0;n<t;){var r=e[n++]
if(!(24576&r.f)&&Zf(r)&&(Nd=[],ih(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown&&null===r.ac?Tf(r):r.fn=null),Nd.length>0)){qd.clear()
for(const e of Nd)ih(e)
Nd=[]}}Nd=null}}function Bd(e){for(var t=Id=e;null!==t.parent;){var n=(t=t.parent).f
if(Md&&t===Bf&&0!==(n&Su))return
if(96&n){if(0===(n&Pu))return
t.f^=Pu}}Ld.push(t)}const qd=new Map
function Hd(e,t){return{f:0,v:e,reactions:null,equals:zu,rv:0,wv:0}}function Ud(e,t){const n=Hd(e)
return Uf(n),n}function Gd(e,t=!1,n=!0){const r=Hd(e)
return t||(r.equals=Qu),Ku&&n&&null!==ed&&null!==ed.l&&(ed.l.s??=[]).push(r),r}function Wd(e,t,n=!1){return null!==jf&&(!Nf||0!==(jf.f&Fu))&&id()&&4325394&jf.f&&!Hf?.includes(e)&&function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),zd(e,n?Kd(t):t)}function zd(e,t){if(!e.equals(t)){var n=e.v
Ff?qd.set(e,t):qd.set(e,n),e.v=t,Rd.ensure().capture(e,n),2&e.f&&(0!==(e.f&$u)&&yd(e),uh(e,0===(e.f&Cu)?Pu:Lu)),e.wv=Xf(),Qd(e,$u),!id()||null===Bf||0===(Bf.f&Pu)||96&Bf.f||(null===zf?function(e){zf=e}([e]):zf.push(e))}return t}function Vd(e){Wd(e,e.v+1)}function Qd(e,t){var n=e.reactions
if(null!==n)for(var r=id(),i=n.length,s=0;s<i;s++){var o=n[s],a=o.f
if(r||o!==Bf){var l=0===(a&$u)
l&&uh(o,t),2&a?Qd(o,Lu):l&&(0!==(a&Su)&&null!==Nd&&Nd.push(o),Bd(o))}}}function Kd(e){if("object"!=typeof e||null===e||Bu in e)return e
const t=_u(e)
if(t!==pu&&t!==gu)return e
var n=new Map,r=lu(e),i=Ud(0),s=Kf,o=e=>{if(Kf===s)return e()
var t=jf,n=Kf
Df(null),Jf(s)
var r=e()
return Df(t),Jf(n),r}
return r&&n.set("length",Ud(e.length)),new Proxy(e,{defineProperty(e,t,r){"value"in r&&!1!==r.configurable&&!1!==r.enumerable&&!1!==r.writable||function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}()
var i=n.get(t)
return void 0===i?i=o(()=>{var e=Ud(r.value)
return n.set(t,e),e}):Wd(i,r.value,!0),!0},deleteProperty(e,t){var r=n.get(t)
if(void 0===r){if(t in e){const e=o(()=>Ud(Wu))
n.set(t,e),Vd(i)}}else Wd(r,Wu),Vd(i)
return!0},get(t,r,i){if(r===Bu)return e
var s=n.get(r),a=r in t
if(void 0!==s||a&&!fu(t,r)?.writable||(s=o(()=>Ud(Kd(a?t[r]:Wu))),n.set(r,s)),void 0!==s){var l=oh(s)
return l===Wu?void 0:l}return Reflect.get(t,r,i)},getOwnPropertyDescriptor(e,t){var r=Reflect.getOwnPropertyDescriptor(e,t)
if(r&&"value"in r){var i=n.get(t)
i&&(r.value=oh(i))}else if(void 0===r){var s=n.get(t),o=s?.v
if(void 0!==s&&o!==Wu)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return r},has(e,t){if(t===Bu)return!0
var r=n.get(t),i=void 0!==r&&r.v!==Wu||Reflect.has(e,t)
if((void 0!==r||null!==Bf&&(!i||fu(e,t)?.writable))&&(void 0===r&&(r=o(()=>Ud(i?Kd(e[t]):Wu)),n.set(t,r)),oh(r)===Wu))return!1
return i},set(e,t,s,a){var l=n.get(t),c=t in e
if(r&&"length"===t)for(var u=s;u<l.v;u+=1){var d=n.get(u+"")
void 0!==d?Wd(d,Wu):u in e&&(d=o(()=>Ud(Wu)),n.set(u+"",d))}void 0===l?c&&!fu(e,t)?.writable||(Wd(l=o(()=>Ud(void 0)),Kd(s)),n.set(t,l)):(c=l.v!==Wu,Wd(l,o(()=>Kd(s))))
var f=Reflect.getOwnPropertyDescriptor(e,t)
if(f?.set&&f.set.call(a,s),!c){if(r&&"string"==typeof t){var h=n.get("length"),p=Number(t)
Number.isInteger(p)&&p>=h.v&&Wd(h,p+1)}Vd(i)}return!0},ownKeys(e){oh(i)
var t=Reflect.ownKeys(e).filter(e=>{var t=n.get(e)
return void 0===t||t.v!==Wu})
for(var[r,s]of n)s.v===Wu||r in e||t.push(r)
return t},setPrototypeOf(){!function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}()}})}function Jd(e){try{if(null!==e&&"object"==typeof e&&Bu in e)return e[Bu]}catch{}return e}function Yd(e,t){return Object.is(Jd(e),Jd(t))}var Xd,Zd,ef,tf
function nf(e=""){return document.createTextNode(e)}function rf(e){return ef.call(e)}function sf(e){return tf.call(e)}function of(e,t){return rf(e)}function af(e,t){var n=rf(e)
return n instanceof Comment&&""===n.data?sf(n):n}function lf(e,t=1,n=!1){let r=e
for(;t--;)r=sf(r)
return r}let cf=!1
function uf(e){var t=jf,n=Bf
Df(null),qf(null)
try{return e()}finally{Df(t),qf(n)}}function df(e,t,n,r=n){e.addEventListener(t,()=>uf(n))
const i=e.__on_r
e.__on_r=i?()=>{i(),r(!0)}:()=>r(!0),cf||(cf=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function ff(e){null===Bf&&null===jf&&function(){throw new Error("https://svelte.dev/e/effect_orphan")}(),null!==jf&&0!==(jf.f&Cu)&&null===Bf&&function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}(),Ff&&function(){throw new Error("https://svelte.dev/e/effect_in_teardown")}()}function hf(e,t,n,r=!0){var i=Bf
null!==i&&0!==(i.f&Iu)&&(e|=Iu)
var s={ctx:ed,deps:null,nodes_start:null,nodes_end:null,f:e|$u,first:null,fn:t,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,transitions:null,wv:0,ac:null}
if(n)try{ih(s),s.f|=Ou}catch(e){throw Ef(s),e}else null!==t&&Bd(s)
if(!(n&&null===s.deps&&null===s.first&&null===s.nodes_start&&null===s.teardown&&0===(s.f&Au))&&r&&(null!==i&&function(e,t){var n=t.last
null===n?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}(s,i),null!==jf&&2&jf.f&&0===(e&Eu))){var o=jf;(o.effects??=[]).push(s)}return s}function pf(e){const t=hf(8,null,!1)
return uh(t,Pu),t.teardown=e,t}function gf(e){ff()
var t=Bf.f
if(!(!jf&&0!==(t&xu)&&0===(t&Ou)))return _f(e)
var n=ed;(n.e??=[]).push(e)}function _f(e){return hf(1048580,e,!1)}function vf(e){return ff(),hf(1048584,e,!0)}function mf(e){return hf(4,e,!1)}function yf(e,t=0){return hf(8|t,e,!0)}function bf(e,t=[],n=[]){wd(t,n,t=>{hf(8,()=>e(...t.map(oh)),!0)})}function wf(e,t=0){return hf(Su|t,e,!0)}function kf(e,t=!0){return hf(xu,e,!0,t)}function Sf(e){var t=e.teardown
if(null!==t){const e=Ff,n=jf
Af(!0),Df(null)
try{t.call(null)}finally{Af(e),Df(n)}}}function xf(e,t=!1){var n=e.first
for(e.first=e.last=null;null!==n;){const e=n.ac
null!==e&&uf(()=>{e.abort(Uu)})
var r=n.next
0!==(n.f&Eu)?n.parent=null:Ef(n,t),n=r}}function Ef(e,t=!0){var n=!1;(t||262144&e.f)&&null!==e.nodes_start&&null!==e.nodes_end&&(Cf(e.nodes_start,e.nodes_end),n=!0),xf(e,t&&!n),rh(e,0),uh(e,Mu)
var r=e.transitions
if(null!==r)for(const e of r)e.stop()
Sf(e)
var i=e.parent
null!==i&&null!==i.first&&Tf(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Cf(e,t){for(;null!==e;){var n=e===t?null:sf(e)
e.remove(),e=n}}function Tf(e){var t=e.parent,n=e.prev,r=e.next
null!==n&&(n.next=r),null!==r&&(r.prev=n),null!==t&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Pf(e,t){var n=[]
Lf(e,n,!0),$f(n,()=>{Ef(e),t&&t()})}function $f(e,t){var n=e.length
if(n>0){var r=()=>--n||t()
for(var i of e)i.out(r)}else t()}function Lf(e,t,n){if(0===(e.f&Iu)){if(e.f^=Iu,null!==e.transitions)for(const r of e.transitions)(r.is_global||n)&&t.push(r)
for(var r=e.first;null!==r;){var i=r.next
Lf(r,t,!!(0!==(r.f&Ru)||0!==(r.f&xu))&&n),r=i}}}function If(e){Mf(e,!0)}function Mf(e,t){if(0!==(e.f&Iu)){e.f^=Iu,0===(e.f&Pu)&&(uh(e,$u),Bd(e))
for(var n=e.first;null!==n;){var r=n.next
Mf(n,!!(0!==(n.f&Ru)||0!==(n.f&xu))&&t),n=r}if(null!==e.transitions)for(const n of e.transitions)(n.is_global||t)&&n.in()}}let Of=!1
function Rf(e){Of=e}let Ff=!1
function Af(e){Ff=e}let jf=null,Nf=!1
function Df(e){jf=e}let Bf=null
function qf(e){Bf=e}let Hf=null
function Uf(e){null!==jf&&(null===Hf?Hf=[e]:Hf.push(e))}let Gf=null,Wf=0,zf=null
let Vf=1,Qf=0,Kf=Qf
function Jf(e){Kf=e}let Yf=!1
function Xf(){return++Vf}function Zf(e){var t=e.f
if(0!==(t&$u))return!0
if(0!==(t&Lu)){var n=e.deps,r=0!==(t&Cu)
if(null!==n){var i,s,o=0!==(t&Tu),a=r&&null!==Bf&&!Yf,l=n.length
if((o||a)&&(null===Bf||0===(Bf.f&Mu))){var c=e,u=c.parent
for(i=0;i<l;i++)s=n[i],!o&&s?.reactions?.includes(c)||(s.reactions??=[]).push(c)
o&&(c.f^=Tu),a&&null!==u&&0===(u.f&Cu)&&(c.f^=Cu)}for(i=0;i<l;i++)if(Zf(s=n[i])&&bd(s),s.wv>e.wv)return!0}r&&(null===Bf||Yf)||uh(e,Pu)}return!1}function eh(e,t,n=!0){var r=e.reactions
if(null!==r&&!Hf?.includes(e))for(var i=0;i<r.length;i++){var s=r[i]
2&s.f?eh(s,t,!1):t===s&&(n?uh(s,$u):0!==(s.f&Pu)&&uh(s,Lu),Bd(s))}}function th(e){var t=Gf,n=Wf,r=zf,i=jf,s=Yf,o=Hf,a=ed,l=Nf,c=Kf,u=e.f
Gf=null,Wf=0,zf=null,Yf=0!==(u&Cu)&&(Nf||!Of||null===jf),jf=96&u?null:e,Hf=null,td(e.ctx),Nf=!1,Kf=++Qf,null!==e.ac&&(uf(()=>{e.ac.abort(Uu)}),e.ac=null)
try{e.f|=ju
var d=(0,e.fn)(),f=e.deps
if(null!==Gf){var h
if(rh(e,Wf),null!==f&&Wf>0)for(f.length=Wf+Gf.length,h=0;h<Gf.length;h++)f[Wf+h]=Gf[h]
else e.deps=f=Gf
if(!Yf||2&u&&null!==e.reactions)for(h=Wf;h<f.length;h++)(f[h].reactions??=[]).push(e)}else null!==f&&Wf<f.length&&(rh(e,Wf),f.length=Wf)
if(id()&&null!==zf&&!Nf&&null!==f&&!(6146&e.f))for(h=0;h<zf.length;h++)eh(zf[h],e)
return null!==i&&i!==e&&(Qf++,null!==zf&&(null===r?r=zf:r.push(...zf))),0!==(e.f&Du)&&(e.f^=Du),d}catch(e){return function(e){var t=Bf
if(null===t)return jf.f|=Du,e
if(0===(t.f&Ou)){if(!(128&t.f))throw!t.parent&&e instanceof Error&&ad(e),e
t.b.error(e)}else od(e,t)}(e)}finally{e.f^=ju,Gf=t,Wf=n,zf=r,jf=i,Yf=s,Hf=o,td(a),Nf=l,Kf=c}}function nh(e,t){let n=t.reactions
if(null!==n){var r=cu.call(n,e)
if(-1!==r){var i=n.length-1
0===i?n=t.reactions=null:(n[r]=n[i],n.pop())}}null===n&&2&t.f&&(null===Gf||!Gf.includes(t))&&(uh(t,Lu),768&t.f||(t.f^=Tu),md(t),rh(t,0))}function rh(e,t){var n=e.deps
if(null!==n)for(var r=t;r<n.length;r++)nh(e,n[r])}function ih(e){var t=e.f
if(0===(t&Mu)){uh(e,Pu)
var n=Bf,r=Of
Bf=e,Of=!0
try{0!==(t&Su)?function(e){for(var t=e.first;null!==t;){var n=t.next
0===(t.f&xu)&&Ef(t),t=n}}(e):xf(e),Sf(e)
var i=th(e)
e.teardown="function"==typeof i?i:null,e.wv=Vf}finally{Of=r,Bf=n}}}async function sh(){await Promise.resolve(),Fd()}function oh(e){var t=!!(2&e.f)
if(null===jf||Nf){if(t&&null===e.deps&&null===e.effects){var n=e,r=n.parent
null!==r&&0===(r.f&Cu)&&(n.f^=Cu)}}else if(!(null!==Bf&&0!==(Bf.f&Mu))&&!Hf?.includes(e)){var i=jf.deps
if(0!==(jf.f&ju))e.rv<Qf&&(e.rv=Qf,null===Gf&&null!==i&&i[Wf]===e?Wf++:null===Gf?Gf=[e]:Yf&&Gf.includes(e)||Gf.push(e))
else{(jf.deps??=[]).push(e)
var s=e.reactions
null===s?e.reactions=[jf]:s.includes(jf)||s.push(jf)}}if(Ff){if(qd.has(e))return qd.get(e)
if(t){var o=(n=e).v
return(0===(n.f&Pu)&&null!==n.reactions||ah(n))&&(o=yd(n)),qd.set(n,o),o}}else if(t){if(n=e,Cd?.has(n))return Cd.get(n)
Zf(n)&&bd(n)}if(0!==(e.f&Du))throw e.v
return e.v}function ah(e){if(e.v===Wu)return!0
if(null===e.deps)return!1
for(const t of e.deps){if(qd.has(t))return!0
if(2&t.f&&ah(t))return!0}return!1}function lh(e){var t=Nf
try{return Nf=!0,e()}finally{Nf=t}}const ch=-7169
function uh(e,t){e.f=e.f&ch|t}function dh(e){if("object"==typeof e&&e&&!(e instanceof EventTarget))if(Bu in e)fh(e)
else if(!Array.isArray(e))for(let t in e){const n=e[t]
"object"==typeof n&&n&&Bu in n&&fh(n)}}function fh(e,t=new Set){if(!("object"!=typeof e||null===e||e instanceof EventTarget||t.has(e))){t.add(e),e instanceof Date&&e.getTime()
for(let n in e)try{fh(e[n],t)}catch(e){}const n=_u(e)
if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const t=hu(n)
for(let n in t){const r=t[n].get
if(r)try{r.call(e)}catch(e){}}}}}const hh=["touchstart","touchmove"]
function ph(e){return hh.includes(e)}const gh=new Set,_h=new Set
function vh(e,t,n,r,i){var s={capture:r,passive:i},o=function(e,t,n,r={}){function i(e){if(r.capture||bh.call(t,e),!e.cancelBubble)return uf(()=>n?.call(this,e))}return e.startsWith("pointer")||e.startsWith("touch")||"wheel"===e?dd(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}(e,t,n,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&pf(()=>{t.removeEventListener(e,o,s)})}function mh(e){for(var t=0;t<e.length;t++)gh.add(e[t])
for(var n of _h)n(e)}let yh=null
function bh(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],s=i[0]||e.target
yh=e
var o=0,a=yh===e&&e.__root
if(a){var l=i.indexOf(a)
if(-1!==l&&(t===document||t===window))return void(e.__root=t)
var c=i.indexOf(t)
if(-1===c)return
l<=c&&(o=l)}if((s=i[o]||e.target)!==t){du(e,"currentTarget",{configurable:!0,get:()=>s||n})
var u=jf,d=Bf
Df(null),qf(null)
try{for(var f,h=[];null!==s;){var p=s.assignedSlot||s.parentNode||s.host||null
try{var g=s["__"+r]
if(null!=g&&(!s.disabled||e.target===s))if(lu(g)){var[_,...v]=g
_.apply(s,[e,...v])}else g.call(s,e)}catch(e){f?h.push(e):f=e}if(e.cancelBubble||p===t||null===p)break
s=p}if(f){for(let e of h)queueMicrotask(()=>{throw e})
throw f}}finally{e.__root=t,delete e.currentTarget,Df(u),qf(d)}}}function wh(e){var t=document.createElement("template")
return t.innerHTML=e.replaceAll("<!>","\x3c!----\x3e"),t.content}function kh(e,t){var n=Bf
null===n.nodes_start&&(n.nodes_start=e,n.nodes_end=t)}function Sh(e,t){var n,r=!!(1&t),i=!!(2&t),s=!e.startsWith("<!>")
return()=>{void 0===n&&(n=wh(s?e:"<!>"+e),r||(n=rf(n)))
var t=i||Zd?document.importNode(n,!0):n.cloneNode(!0)
r?kh(rf(t),t.lastChild):kh(t,t)
return t}}function xh(e=""){var t=nf(e+"")
return kh(t,t),t}function Eh(){var e=document.createDocumentFragment(),t=document.createComment(""),n=nf()
return e.append(t,n),kh(t,n),e}function Ch(e,t){null!==e&&e.before(t)}let Th=!0
function Ph(e,t){var n=null==t?"":"object"==typeof t?t+"":t
n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}function $h(e,t){return function(e,{target:t,anchor:n,props:r={},events:i,context:s,intro:o=!0}){!function(){if(void 0===Xd){Xd=window,Zd=/Firefox/.test(navigator.userAgent)
var e=Element.prototype,t=Node.prototype,n=Text.prototype
ef=fu(t,"firstChild").get,tf=fu(t,"nextSibling").get,vu(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),vu(n)&&(n.__t=void 0)}}()
var a=new Set,l=e=>{for(var n=0;n<e.length;n++){var r=e[n]
if(!a.has(r)){a.add(r)
var i=ph(r)
t.addEventListener(r,bh,{passive:i})
var s=Lh.get(r)
void 0===s?(document.addEventListener(r,bh,{passive:i}),Lh.set(r,1)):Lh.set(r,s+1)}}}
l(uu(gh)),_h.add(l)
var c=void 0,u=function(e){Rd.ensure()
const t=hf(Eu,e,!0)
return(e={})=>new Promise(n=>{e.outro?Pf(t,()=>{Ef(t),n(void 0)}):(Ef(t),n(void 0))})}(()=>{var u=n??t.appendChild(nf())
return kf(()=>{s&&(nd({}),ed.c=s)
i&&(r.$$events=i),Th=o,c=e(u,r)||{},Th=!0,s&&rd()}),()=>{for(var e of a){t.removeEventListener(e,bh)
var r=Lh.get(e)
0===--r?(document.removeEventListener(e,bh),Lh.delete(e)):Lh.set(e,r)}_h.delete(l),u!==n&&u.parentNode?.removeChild(u)}})
return Ih.set(c,u),c}(e,t)}const Lh=new Map
let Ih=new WeakMap
function Mh(e,t){const n=Ih.get(e)
return n?(Ih.delete(e),n(t)):Promise.resolve()}function Oh(e,t,n,r,i){var s,o,a,l=e,c=id(),u=ed,d=Wu,f=c?Hd(void 0):Gd(void 0,!1,!1),h=c?Hd(void 0):Gd(void 0,!1,!1),p=!1
function g(e,t){p=!0,t&&(qf(_),Df(_),td(u))
try{0===e&&n&&(s?If(s):s=kf(()=>n(l))),1===e&&r&&(o?If(o):o=kf(()=>r(l,f))),2===e&&i&&(a?If(a):a=kf(()=>i(l,h))),0!==e&&s&&Pf(s,()=>s=null),1!==e&&o&&Pf(o,()=>o=null),2!==e&&a&&Pf(a,()=>a=null)}finally{t&&(td(null),Df(null),qf(null),Fd())}}var _=wf(()=>{if(d!==(d=t())){if(n=d,"function"==typeof n?.then){var e=d
p=!1,e.then(t=>{e===d&&(zd(f,t),g(1,!0))},t=>{if(e===d&&(zd(h,t),g(2,!0),!i))throw h.v}),dd(()=>{p||g(0,!0)})}else zd(f,d),g(1,!1)
var n
return()=>d=Wu}})}function Rh(e,t,n=!1){var r=e,i=null,s=null,o=Wu,a=!1
const l=(e,t=!0)=>{a=!0,d(t,e)}
var c=null
function u(){null!==c&&(c.lastChild.remove(),r.before(c),c=null)
var e=o?i:s,t=o?s:i
e&&If(e),t&&Pf(t,()=>{o?s=null:i=null})}const d=(e,t)=>{if(o!==(o=e)){var n=!1,a=r
n,o?i??=t&&kf(()=>t(a)):s??=t&&kf(()=>t(a)),u()}}
wf(()=>{a=!1,t(l),a||d(null,null)},n?Ru:0)}function Fh(e,t){yf(()=>{var n=t()
for(var r in n){var i=n[r]
i?e.style.setProperty(r,i):e.style.removeProperty(r)}})}function Ah(e,t){return t}function jh(e,t,n,r,i,s=null){var o=e,a={flags:t,items:new Map,first:null}
!(4&t)||(o=e.appendChild(nf()))
var l,c,u=null,d=!1,f=new Map,h=vd(()=>{var e=n()
return lu(e)?e:null==e?[]:uu(e)})
function p(){!function(e,t,n,r,i,s,o,a,l){var c,u,d,f,h,p,g=!!(8&o),_=!!(3&o),v=t.length,m=n.items,y=n.first,b=y,w=null,k=[],S=[]
if(g)for(p=0;p<v;p+=1)f=a(d=t[p],p),void 0!==(h=m.get(f))&&(h.a?.measure(),(u??=new Set).add(h))
for(p=0;p<v;p+=1)if(f=a(d=t[p],p),void 0!==(h=m.get(f))){if(_&&Nh(h,d,p,o),0!==(h.e.f&Iu)&&(If(h.e),g&&(h.a?.unfix(),(u??=new Set).delete(h))),h!==b){if(void 0!==c&&c.has(h)){if(k.length<S.length){var x,E=S[0]
w=E.prev
var C=k[0],T=k[k.length-1]
for(x=0;x<k.length;x+=1)Bh(k[x],E,i)
for(x=0;x<S.length;x+=1)c.delete(S[x])
qh(n,C.prev,T.next),qh(n,w,C),qh(n,T,E),b=E,w=T,p-=1,k=[],S=[]}else c.delete(h),Bh(h,b,i),qh(n,h.prev,h.next),qh(n,h,null===w?n.first:w.next),qh(n,w,h),w=h
continue}for(k=[],S=[];null!==b&&b.k!==f;)0===(b.e.f&Iu)&&(c??=new Set).add(b),S.push(b),b=b.next
if(null===b)continue
h=b}k.push(h),w=h,b=h.next}else{var P=r.get(f)
if(void 0!==P){r.delete(f),m.set(f,P)
var $=w?w.next:b
qh(n,w,P),qh(n,P,$),Bh(P,$,i),w=P}else{w=Dh(b?b.e.nodes_start:i,n,w,null===w?n.first:w.next,d,f,p,s,o,l)}m.set(f,w),k=[],S=[],b=w.next}if(null!==b||void 0!==c){for(var L=void 0===c?[]:uu(c);null!==b;)0===(b.e.f&Iu)&&L.push(b),b=b.next
var I=L.length
if(I>0){var M=4&o&&0===v?i:null
if(g){for(p=0;p<I;p+=1)L[p].a?.measure()
for(p=0;p<I;p+=1)L[p].a?.fix()}!function(e,t,n){for(var r=e.items,i=[],s=t.length,o=0;o<s;o++)Lf(t[o].e,i,!0)
var a=s>0&&0===i.length&&null!==n
if(a){var l=n.parentNode
l.textContent="",l.append(n),r.clear(),qh(e,t[0].prev,t[s-1].next)}$f(i,()=>{for(var n=0;n<s;n++){var i=t[n]
a||(r.delete(i.k),qh(e,i.prev,i.next)),Ef(i.e,!a)}})}(n,L,M)}}g&&dd(()=>{if(void 0!==u)for(h of u)h.a?.apply()})
for(var O of(e.first=n.first&&n.first.e,e.last=w&&w.e,r.values()))Ef(O.e)
r.clear()}(c,l,a,f,o,i,t,r,n),null!==s&&(0===l.length?u?If(u):u=kf(()=>s(o)):null!==u&&Pf(u,()=>{u=null}))}wf(()=>{c??=Bf
var e=(l=oh(h)).length
d&&0===e||(d=0===e,p(),oh(h))})}function Nh(e,t,n,r){1&r&&zd(e.v,t),2&r?zd(e.i,n):e.i=n}function Dh(e,t,n,r,i,s,o,a,l,c,u){var d=!!(1&l)?!(16&l)?Gd(i,!1,!1):Hd(i):i,f=2&l?Hd(o):o,h={i:f,v:d,k:s,a:null,e:null,prev:n,next:r}
try{if(null===e)document.createDocumentFragment().append(e=nf())
return h.e=kf(()=>a(e,d,f,c),false),h.e.prev=n&&n.e,h.e.next=r&&r.e,null===n?u||(t.first=h):(n.next=h,n.e.next=h.e),null!==r&&(r.prev=h,r.e.prev=h.e),h}finally{}}function Bh(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,s=e.e.nodes_start;null!==s&&s!==r;){var o=sf(s)
i.before(s),s=o}}function qh(e,t,n){null===t?e.first=n:(t.next=n,t.e.next=n&&n.e),null!==n&&(n.prev=t,n.e.prev=t&&t.e)}function Hh(e,t,n=!1,r=!1,i=!1){var s=e,o=""
bf(()=>{var e=Bf
if(o!==(o=t()??"")&&(null!==e.nodes_start&&(Cf(e.nodes_start,e.nodes_end),e.nodes_start=e.nodes_end=null),""!==o)){var i=o+""
n?i=`<svg>${i}</svg>`:r&&(i=`<math>${i}</math>`)
var a=wh(i)
if((n||r)&&(a=rf(a)),kh(rf(a),a.lastChild),n||r)for(;rf(a);)s.before(rf(a))
else s.before(a)}})}function Uh(e,t,...n){var r,i=e,s=yu
wf(()=>{s!==(s=t())&&(r&&(Ef(r),r=null),r=kf(()=>s(i,...n)))},Ru)}function Gh(e,t,n){var r,i,s=e,o=null,a=null
function l(){i&&(Pf(i),i=null),o&&(o.lastChild.remove(),s.before(o),o=null),i=a,a=null}wf(()=>{if(r!==(r=t())){var e=!1
if(r){var i=s
e,a=kf(()=>n(i,r))}l()}},Ru)}function Wh(e,t,n){mf(()=>{var r=lh(()=>t(e,n?.())||{})
if(r?.destroy)return()=>r.destroy()})}function zh(e){var t,n,r=""
if("string"==typeof e||"number"==typeof e)r+=e
else if("object"==typeof e)if(Array.isArray(e)){var i=e.length
for(t=0;t<i;t++)e[t]&&(n=zh(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n)
return r}function Vh(e){return"object"==typeof e?function(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=zh(e))&&(r&&(r+=" "),r+=t)
return r}(e):e??""}const Qh=[..." \t\n\r\f \v\ufeff"]
function Kh(e,t=!1){var n=t?" !important;":";",r=""
for(var i in e){var s=e[i]
null!=s&&""!==s&&(r+=" "+i+": "+s+n)}return r}function Jh(e){return"-"!==e[0]||"-"!==e[1]?e.toLowerCase():e}function Yh(e,t,n,r,i,s){var o=e.__className
if(o!==n||void 0===o){var a=function(e,t,n){var r=null==e?"":""+e
if(t&&(r=r?r+" "+t:t),n)for(var i in n)if(n[i])r=r?r+" "+i:i
else if(r.length)for(var s=i.length,o=0;(o=r.indexOf(i,o))>=0;){var a=o+s
0!==o&&!Qh.includes(r[o-1])||a!==r.length&&!Qh.includes(r[a])?o=a:r=(0===o?"":r.substring(0,o))+r.substring(a+1)}return""===r?null:r}(n,r,s)
null==a?e.removeAttribute("class"):e.className=a,e.__className=n}else if(s&&i!==s)for(var l in s){var c=!!s[l]
null!=i&&c===!!i[l]||e.classList.toggle(l,c)}return s}function Xh(e,t={},n,r){for(var i in n){var s=n[i]
t[i]!==s&&(null==n[i]?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function Zh(e,t,n,r){if(e.__style!==t){var i=function(e,t){if(t){var n,r,i=""
if(Array.isArray(t)?(n=t[0],r=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim()
var s=!1,o=0,a=!1,l=[]
n&&l.push(...Object.keys(n).map(Jh)),r&&l.push(...Object.keys(r).map(Jh))
var c=0,u=-1
const t=e.length
for(var d=0;d<t;d++){var f=e[d]
if(a?"/"===f&&"*"===e[d-1]&&(a=!1):s?s===f&&(s=!1):"/"===f&&"*"===e[d+1]?a=!0:'"'===f||"'"===f?s=f:"("===f?o++:")"===f&&o--,!a&&!1===s&&0===o)if(":"===f&&-1===u)u=d
else if(";"===f||d===t-1){if(-1!==u){var h=Jh(e.substring(c,u).trim())
l.includes(h)||(";"!==f&&d++,i+=" "+e.substring(c,d).trim()+";")}c=d+1,u=-1}}}return n&&(i+=Kh(n)),r&&(i+=Kh(r,!0)),""===(i=i.trim())?null:i}return null==e?null:String(e)}(t,r)
null==i?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else r&&(Array.isArray(r)?(Xh(e,n?.[0],r[0]),Xh(e,n?.[1],r[1],"important")):Xh(e,n,r))
return r}function ep(e,t,n=!1){if(e.multiple){if(null==t)return
if(!lu(t))return void console.warn("https://svelte.dev/e/select_multiple_invalid_value")
for(var r of e.options)r.selected=t.includes(np(r))}else{for(r of e.options){if(Yd(np(r),t))return void(r.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}}function tp(e,t,n=t){var r=!0
df(e,"change",t=>{var r,i=t?"[selected]":":checked"
if(e.multiple)r=[].map.call(e.querySelectorAll(i),np)
else{var s=e.querySelector(i)??e.querySelector("option:not([disabled])")
r=s&&np(s)}n(r)}),mf(()=>{var i=t()
if(ep(e,i,r),r&&void 0===i){var s=e.querySelector(":checked")
null!==s&&(i=np(s),n(i))}e.__value=i,r=!1}),function(e){var t=new MutationObserver(()=>{ep(e,e.__value)})
t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),pf(()=>{t.disconnect()})}(e)}function np(e){return"__value"in e?e.__value:e.value}const rp=Symbol("is custom element"),ip=Symbol("is html")
function sp(e,t){var n=ap(e)
n.value!==(n.value=t??void 0)&&(e.value!==t||0===t&&"PROGRESS"===e.nodeName)&&(e.value=t??"")}function op(e,t,n,r){var i=ap(e)
i[t]!==(i[t]=n)&&("loading"===t&&(e[Hu]=n),null==n?e.removeAttribute(t):"string"!=typeof n&&function(e){var t,n=lp.get(e.nodeName)
if(n)return n
lp.set(e.nodeName,n=[])
var r=e,i=Element.prototype
for(;i!==r;){for(var s in t=hu(r))t[s].set&&n.push(s)
r=_u(r)}return n}(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function ap(e){return e.__attributes??={[rp]:e.nodeName.includes("-"),[ip]:"http://www.w3.org/1999/xhtml"===e.namespaceURI}}var lp=new Map
const cp={tick:e=>requestAnimationFrame(e),now:()=>performance.now(),tasks:new Set}
function up(){const e=cp.now()
cp.tasks.forEach(t=>{t.c(e)||(cp.tasks.delete(t),t.f())}),0!==cp.tasks.size&&cp.tick(up)}function dp(e,t){uf(()=>{e.dispatchEvent(new CustomEvent(t))})}function fp(e){if("float"===e)return"cssFloat"
if("offset"===e)return"cssOffset"
if(e.startsWith("--"))return e
const t=e.split("-")
return 1===t.length?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function hp(e){const t={},n=e.split(";")
for(const e of n){const[n,r]=e.split(":")
if(!n||void 0===r)break
t[fp(n.trim())]=r.trim()}return t}const pp=e=>e
function gp(e,t,n,r){var i,s,o,a=!!(4&e),l=t.inert,c=t.style.overflow
function u(){return uf(()=>i??=n()(t,r?.()??{},{direction:"both"}))}var d={is_global:a,in(){t.inert=l,dp(t,"introstart"),s=_p(t,u(),o,1,()=>{dp(t,"introend"),s?.abort(),s=i=void 0,t.style.overflow=c})},out(e){t.inert=!0,dp(t,"outrostart"),o=_p(t,u(),s,0,()=>{dp(t,"outroend"),e?.()})},stop:()=>{s?.abort(),o?.abort()}},f=Bf
if((f.transitions??=[]).push(d),Th){var h=a
if(!h){for(var p=f.parent;p&&0!==(p.f&Ru);)for(;(p=p.parent)&&0===(p.f&Su););h=!p||0!==(p.f&Ou)}h&&mf(()=>{lh(()=>d.in())})}}function _p(e,t,n,r,i){var s=1===r
if(mu(t)){var o,a=!1
return dd(()=>{if(!a){var l=t({direction:s?"in":"out"})
o=_p(e,l,n,r,i)}}),{abort:()=>{a=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(n?.deactivate(),!t?.duration)return i(),{abort:yu,deactivate:yu,reset:yu,t:()=>r}
const{delay:l=0,css:c,tick:u,easing:d=pp}=t
var f=[]
if(s&&void 0===n&&(u&&u(0,1),c)){var h=hp(c(0,1))
f.push(h,h)}var p=()=>1-r,g=e.animate(f,{duration:l,fill:"forwards"})
return g.onfinish=()=>{g.cancel()
var s=n?.t()??1-r
n?.abort()
var o=r-s,a=t.duration*Math.abs(o),l=[]
if(a>0){var f=!1
if(c)for(var h=Math.ceil(a/(1e3/60)),_=0;_<=h;_+=1){var v=s+o*d(_/h),m=hp(c(v,1-v))
l.push(m),f||="hidden"===m.overflow}f&&(e.style.overflow="hidden"),p=()=>{var e=g.currentTime
return s+o*d(e/a)},u&&function(e){let t
0===cp.tasks.size&&cp.tick(up),new Promise(n=>{cp.tasks.add(t={c:e,f:n})})}(()=>{if("running"!==g.playState)return!1
var e=p()
return u(e,1-e),!0})}(g=e.animate(l,{duration:a,fill:"forwards"})).onfinish=()=>{p=()=>r,u?.(r,1-r),i()}},{abort:()=>{g&&(g.cancel(),g.effect=null,g.onfinish=yu)},deactivate:()=>{i=yu},reset:()=>{0===r&&u?.(1,0)},t:()=>p()}}function vp(e,t,n=t){var r=id(),i=new WeakSet
df(e,"input",s=>{var o=s?e.defaultValue:e.value
if(o=wp(e)?kp(o):o,n(o),null!==xd&&i.add(xd),r&&o!==(o=t())){var a=e.selectionStart,l=e.selectionEnd
e.value=o??"",null!==l&&(e.selectionStart=a,e.selectionEnd=Math.min(l,e.value.length))}}),null==lh(t)&&e.value&&(n(wp(e)?kp(e.value):e.value),null!==xd&&i.add(xd)),yf(()=>{var n=t()
if(e===document.activeElement){var r=Ed??xd
if(i.has(r))return}wp(e)&&n===kp(e.value)||("date"!==e.type||n||e.value)&&n!==e.value&&(e.value=n??"")})}const mp=new Set
function yp(e,t,n,r,i=r){var s="checkbox"===n.getAttribute("type"),o=e
if(null!==t)for(var a of t)o=o[a]??=[]
o.push(n),df(n,"change",()=>{var e=n.__value
s&&(e=function(e,t,n){for(var r=new Set,i=0;i<e.length;i+=1)e[i].checked&&r.add(e[i].__value)
n||r.delete(t)
return Array.from(r)}(o,e,n.checked)),i(e)},()=>i(s?[]:null)),yf(()=>{var e=r()
s?(e=e||[],n.checked=e.includes(n.__value)):n.checked=Yd(n.__value,e)}),pf(()=>{var e=o.indexOf(n);-1!==e&&o.splice(e,1)}),mp.has(o)||(mp.add(o),dd(()=>{o.sort((e,t)=>4===e.compareDocumentPosition(t)?-1:1),mp.delete(o)})),dd(()=>{})}function bp(e,t,n=t){df(e,"change",t=>{var r=t?e.defaultChecked:e.checked
n(r)}),null==lh(t)&&n(e.checked),yf(()=>{var n=t()
e.checked=Boolean(n)})}function wp(e){var t=e.type
return"number"===t||"range"===t}function kp(e){return""===e?null:+e}class Sp{#g=new WeakMap
#_
#v
static entries=new WeakMap
constructor(e){this.#v=e}observe(e,t){var n=this.#g.get(e)||new Set
return n.add(t),this.#g.set(e,n),this.#m().observe(e,this.#v),()=>{var n=this.#g.get(e)
n.delete(t),0===n.size&&(this.#g.delete(e),this.#_.unobserve(e))}}#m(){return this.#_??(this.#_=new ResizeObserver(e=>{for(var t of e)for(var n of(Sp.entries.set(t.target,t),this.#g.get(t.target)||[]))n(t)}))}}var xp=new Sp({box:"border-box"})
function Ep(e,t){return e===t||e?.[Bu]===t}function Cp(e={},t,n,r){return mf(()=>{var r,i
return yf(()=>{r=i,i=[],lh(()=>{e!==n(...i)&&(t(e,...i),r&&Ep(n(...r),e)&&t(null,...r))})}),()=>{dd(()=>{i&&Ep(n(...i),e)&&t(null,...i)})}}),e}function Tp(e,t,n){if(null==e)return t(void 0),n&&n(void 0),yu
const r=lh(()=>e.subscribe(t,n))
return r.unsubscribe?()=>r.unsubscribe():r}const Pp=[]
function $p(e,t=yu){let n=null
const r=new Set
function i(t){if(Vu(e,t)&&(e=t,n)){const t=!Pp.length
for(const t of r)t[1](),Pp.push(t,e)
if(t){for(let e=0;e<Pp.length;e+=2)Pp[e][0](Pp[e+1])
Pp.length=0}}}function s(t){i(t(e))}return{set:i,update:s,subscribe:function(o,a=yu){const l=[o,a]
return r.add(l),1===r.size&&(n=t(i,s)||yu),o(e),()=>{r.delete(l),0===r.size&&n&&(n(),n=null)}}}}function Lp(e,t,n){const r=!Array.isArray(e),i=r?[e]:e
if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const s=t.length<2
return o=(e,n)=>{let o=!1
const a=[]
let l=0,c=yu
const u=()=>{if(l)return
c()
const i=t(r?a[0]:a,e,n)
s?e(i):c="function"==typeof i?i:yu},d=i.map((e,t)=>Tp(e,e=>{a[t]=e,l&=~(1<<t),o&&u()},()=>{l|=1<<t}))
return o=!0,u(),function(){wu(d),c(),o=!1}},{subscribe:$p(n,o).subscribe}
var o}function Ip(e){let t
return Tp(e,e=>t=e)(),t}let Mp=!1,Op=Symbol()
function Rp(e,t,n){const r=n[t]??={store:null,source:Gd(void 0),unsubscribe:yu}
if(r.store!==e&&!(Op in n))if(r.unsubscribe(),r.store=e??null,null==e)r.source.v=void 0,r.unsubscribe=yu
else{var i=!0
r.unsubscribe=Tp(e,e=>{i?r.source.v=e:Wd(r.source,e)}),i=!1}return e&&Op in n?Ip(e):oh(r.source)}function Fp(e,t){return e.set(t),t}function Ap(){const e={}
return[e,function(){pf(()=>{for(var t in e){e[t].unsubscribe()}du(e,Op,{enumerable:!1,value:!0})})}]}const jp={get(e,t){let n=e.props.length
for(;n--;){let r=e.props[n]
if(mu(r)&&(r=r()),"object"==typeof r&&null!==r&&t in r)return r[t]}},set(e,t,n){let r=e.props.length
for(;r--;){let i=e.props[r]
mu(i)&&(i=i())
const s=fu(i,t)
if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length
for(;n--;){let r=e.props[n]
if(mu(r)&&(r=r()),"object"==typeof r&&null!==r&&t in r){const e=fu(r,t)
return e&&!e.configurable&&(e.configurable=!0),e}}},has(e,t){if(t===Bu||t===qu)return!1
for(let n of e.props)if(mu(n)&&(n=n()),null!=n&&t in n)return!0
return!1},ownKeys(e){const t=[]
for(let n of e.props)if(mu(n)&&(n=n()),n){for(const e in n)t.includes(e)||t.push(e)
for(const e of Object.getOwnPropertySymbols(n))t.includes(e)||t.push(e)}return t}}
function Np(e,t,n,r){var i,s,o=!Ku||!!(2&n),a=!!(8&n),l=!!(16&n),c=r,u=!0,d=()=>(u&&(u=!1,c=l?lh(r):r),c)
if(a){var f=Bu in e||qu in e
i=fu(e,t)?.set??(f&&t in e?n=>e[t]=n:void 0)}var h,p=!1
if(a?[s,p]=function(e){var t=Mp
try{return Mp=!1,[e(),Mp]}finally{Mp=t}}(()=>e[t]):s=e[t],void 0===s&&void 0!==r&&(s=d(),i&&(o&&function(){throw new Error("https://svelte.dev/e/props_invalid_value")}(),i(s))),h=o?()=>{var n=e[t]
return void 0===n?d():(u=!0,n)}:()=>{var n=e[t]
return void 0!==n&&(c=void 0),void 0===n?c:n},o&&!(4&n))return h
if(i){var g=e.$$legacy
return function(e,t){return arguments.length>0?(o&&t&&!g&&!p||i(t?h():e),e):h()}}var _=!1,v=(1&n?pd:vd)(()=>(_=!1,h()))
a&&oh(v)
var m=Bf
return function(e,t){if(arguments.length>0){const n=t?oh(v):o&&a?Kd(e):e
return Wd(v,n),_=!0,void 0!==c&&(c=n),e}return Ff&&_||0!==(m.f&Mu)?v.v:oh(v)}}function Dp(e){null===ed&&Gu(),Ku&&null!==ed.l?function(e){var t=e.l
return t.u??={a:[],b:[],m:[]}}(ed).m.push(e):gf(()=>{const t=lh(e)
if("function"==typeof t)return t})}function Bp(e){null===ed&&Gu(),Dp(()=>()=>lh(e))}const qp=$p("")
"undefined"!=typeof window&&((window.__svelte??={}).v??=new Set).add("5")
const Hp=e=>e
function Up(e){const t=e-1
return t*t*t+1}function Gp(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function Wp(e,{delay:t=0,duration:n=400,easing:r=Hp}={}){const i=+getComputedStyle(e).opacity
return{delay:t,duration:n,easing:r,css:e=>"opacity: "+e*i}}function zp(e,{delay:t=0,duration:n=400,easing:r=Up,x:i=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-o),[d,f]=Gp(i),[h,p]=Gp(s)
return{delay:t,duration:n,easing:r,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*d}${f}, ${(1-e)*h}${p});\n\t\t\topacity: ${l-u*t}`}}function Vp(e,{delay:t=0,duration:n=400,easing:r=Up,axis:i="y"}={}){const s=getComputedStyle(e),o=+s.opacity,a="y"===i?"height":"width",l=parseFloat(s[a]),c="y"===i?["top","bottom"]:["left","right"],u=c.map(e=>`${e[0].toUpperCase()}${e.slice(1)}`),d=parseFloat(s[`padding${u[0]}`]),f=parseFloat(s[`padding${u[1]}`]),h=parseFloat(s[`margin${u[0]}`]),p=parseFloat(s[`margin${u[1]}`]),g=parseFloat(s[`border${u[0]}Width`]),_=parseFloat(s[`border${u[1]}Width`])
return{delay:t,duration:n,easing:r,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*o};${a}: ${e*l}px;padding-${c[0]}: ${e*d}px;padding-${c[1]}: ${e*f}px;margin-${c[0]}: ${e*h}px;margin-${c[1]}: ${e*p}px;border-${c[0]}-width: ${e*g}px;border-${c[1]}-width: ${e*_}px;min-${a}: 0`}}var Qp=(e,t)=>{Wd(t,!1)},Kp=Sh('<div role="alert" class="svelte-1c416no"><p class="svelte-1c416no"> </p></div>')
function Jp(e,t){nd(t,!0)
const[n,r]=Ap(),i=()=>Rp(qp,"$alert",n)
let s=Np(t,"ms",3,3e3),o=Ud(!1),a=0,l=Ud("")
const c=(e,t)=>{clearTimeout(a),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
Wd(l,`translate(${t}px, ${e.offsetTop}px)`),Wd(o,!0)}(),t>0&&(a=setTimeout(()=>{Wd(o,!1),Fp(qp,"")},t))):Wd(o,!1)}
gf(()=>{c(i(),s())}),Bp(()=>clearTimeout(a))
var u=Eh(),d=af(u),f=e=>{var t=Kp()
let n
t.__click=[Qp,o]
var r=of(t),s=of(r)
bf(e=>{n=Zh(t,"",n,e),Ph(s,i())},[()=>({transform:oh(l)})]),gp(3,t,()=>zp,()=>({delay:250,duration:300,x:0,y:-100,opacity:.5})),Ch(e,t)}
Rh(d,e=>{oh(o)&&e(f)}),Ch(e,u),rd(),r()}mh(["click"])
let Yp=!1
function Xp(e){e&&(Yp||(Yp=!0,$h(Jp,{target:document.body})),qp.set(e))}function Zp(e,t){return Array.from(e,t)}function eg(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function tg(e,t){return Zp(eg(e,t))}function ng(e){return e.trim()}function rg(e){const t=n(e)
if(mc(t))return ng(t)}function ig(e,t){return rg(t).includes(e)}function sg(e,...t){return(...n)=>e(...t,...n)}let og=0,ag=0,lg=0
function cg(){return og||(og=t("pCL")),og}function ug(){return ag||(ag=t("pCC")),ag}function dg(){return lg||(lg=t("pCR")),lg}function fg(){const e=tg("a",cg()).filter(function(e){return sg(ig,e)}("message"))
e.length&&async function(){const e=new Audio(_c("defaultMessageSound"))
try{await e.play()}catch(e){Xp("Message Sound Not Allowed")}}()}function hg(e,t,n,r){var i
Bc(e,t,n,{once:!0,...(i=r,vc(i)?{capture:i}:i)})}let pg=0,gg=0,_g=0,vg=0,mg=0,yg=0
function bg(e){gg=e.clientX,_g=e.clientY}function wg(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(pg,null).transform)
vg=e[0]-gg,mg=e[1]-_g}function kg(e){e.clientX===gg&&e.clientY===_g||(pg.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+vg).toString()}, ${(e.clientY+mg).toString()})`,bg(e))}function Sg(e){return function(e){const t=performance.now()
t-yg>16&&(kg(e),yg=t)}(e),e.preventDefault(),!1}function xg(e){return kg(e),function(e,t,n,r){e instanceof EventTarget&&e.removeEventListener(t,n,r)}(document.body,"dragover",Sg),e.preventDefault(),!1}function Eg(e,t){!function(e,t){pg=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),bg(t),wg(),yg=0,t.dataTransfer.setData("text/plain",""),Bc(document.body,"dragover",Sg),hg(document.body,"drop",xg)}function Cg(e,t){e.draggable=!0,Bc(e,"dragstart",sg(Eg,t))}function Tg(e){return String(e).replaceAll(" ","_")}const Pg={}
function $g(e,t,n){if(!e)return
const r=function(e,t){let n=Tg(e)
return t&&(n+=`__${Tg(t)}`),n}(e,t),i=function(e,t){let n=e
return t&&(n+=`__${Tg(t)}`),n}(r,n)
Pg[i]||(Pg[i]=!0,sa(r,function(e){return e?{eventLabel:e}:null}(n)))}let Lg=0
function Ig(e){const t=l(/\sguildId: (?<id>\d{1,6}),/,n(e))
t&&(Lg=Number(t))}function Mg(){return Lg||tg("script",document.body).forEach(Ig),Lg}function Og(e){return Object.entries(e)}function Rg(e,t,[n,r]){xc(r)&&null!==r?e(t[n],r):t[n]=r}function Fg(e,t){Og(t).forEach(sg(Rg,Fg,e))}function Ag(e,t){const n=document.createElement(e)
return t&&Fg(n,t),n}function jg(e){return Ag("div",e)}function Ng(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function Dg(e,t){return Zp(Ng(e,t))}function Bg(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function qg(e,t){t instanceof Element&&(t.innerHTML=String(e))}const Hg={id:"content",style:{display:"none"}},Ug={width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}
function Gg(e){let n=t("content")
n?qg("",n):(n=jg(Hg),Bg(document.body,n)),$(n).dialog(Ug),Dg("ui-dialog-titlebar-close").forEach(e=>e.blur()),e(n)}async function Wg(e){(await e).default()}function zg(){Wg(import("./mountBuffLog.svelte-zjXFHwxB.js"))}function Vg(){Wg(import("./mountCombatLog.svelte-Ano9HfLO.js"))}function Qg(){Wg(import("./mountCreatureLog.svelte-ORdd5ty4.js"))}function Kg(){Wg(import("./mountFsboxlog.svelte-BJ8aWT0L.js"))}function Jg(){Wg(Promise.resolve().then(function(){return qx}))}function Yg(){Wg(import("./mountGuildTracker.svelte-CAqHUZGG.js"))}async function Xg(e){(await import("./injectAuctionSearch-DpNDRy1K.js")).default(e)}async function Zg(e){const{injectFindBuffs:t}=await import("./findBuffs-DYB8A5YC.js")
t(e)}async function e_(e){const{injectFindOther:t}=await import("./findBuffs-DYB8A5YC.js")
t(e)}async function t_(e){(await import("./injectOnlinePlayers-HVq4aFt9.js")).default(e)}function n_(){Wg(Promise.resolve().then(function(){return VE}))}function r_(){Wg(import("./mountQuickLinksMgr.svelte-CZv-CuQ6.js"))}async function i_(e){(await import("./quickWear-Cy8o1YZl.js")).default(e)}function s_(){Wg(import("./mountRecipeMgr.svelte-CZjHEBqc.js"))}function o_(){Wg(import("./mountReliclist.svelte-BPXDBO6n.js"))}function a_(e){Bc(window,"beforeunload",()=>e.abort())}let l_=0
let c_=0
async function u_(){c_<5-$.active&&performance.now()-l_>=900?(c_=5-$.active,l_=performance.now()):await function(e){return new Promise(t=>{setTimeout(t,e)})}(100)}async function d_(e,t=10){await async function(){for(;c_<1;)await u_()
c_-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=a_,$.ajax(t).fail((e,t,n)=>{e.textStatus=t,e.errorThrown=n})}(e)}catch(n){if(t&&n.status>500)return d_(e,t-1)
!function(e,t){if(![0,500,503].includes(t.status))throw new Dc([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}function f_(e){return Fg(e,{url:Da,data:{no_mobile:1}}),d_(e)}async function h_(e){return Ec(await f_({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function p_(e){return h_({cmd:"export",...e})}function g_(){return p_({inc_tagged:"1",subcmd:"guild_store"})}function __(e){return Ag("a",e)}function v_(e){e instanceof Element&&e.click()}function m_(e,t){const n=URL.createObjectURL(e),r=__({download:t,href:n,style:{display:"none"}})
Bg(document.body,r),v_(r),document.body.removeChild(r),setTimeout(()=>{URL.revokeObjectURL(n)},0)}async function y_(e,t){return Ec(await d_({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function b_(e){return y_(e,{method:"POST"})}function w_(e,t){const n=[]
for(let r=0;r<t.length;r+=e)n.push(t.slice(r,r+e))
return n}let k_=null
function S_(){const e=t("holdtext")
if(e&&!k_){const t=l(/fallensword.com\/\?ref=(?<id>\d+)/,n(e))
t&&(k_=Number(t))}return k_}const x_=(e,t)=>t.some(t=>e instanceof t)
let E_,C_
const T_=new WeakMap,P_=new WeakMap,$_=new WeakMap
let L_={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return T_.get(e)
if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return R_(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}
function I_(e){L_=e(L_)}function M_(e){return(C_||(C_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(F_(this),t),R_(this.request)}:function(...t){return R_(e.apply(F_(this),t))}}function O_(e){return"function"==typeof e?M_(e):(e instanceof IDBTransaction&&function(e){if(T_.has(e))return
const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()}
e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)})
T_.set(e,t)}(e),x_(e,E_||(E_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,L_):e)}function R_(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(R_(e.result)),r()},s=()=>{n(e.error),r()}
e.addEventListener("success",i),e.addEventListener("error",s)})
return $_.set(t,e),t}(e)
if(P_.has(e))return P_.get(e)
const t=O_(e)
return t!==e&&(P_.set(e,t),$_.set(t,e)),t}const F_=e=>$_.get(e)
function A_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=R_(o)
return r&&o.addEventListener("upgradeneeded",e=>{r(R_(o.result),e.oldVersion,e.newVersion,R_(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}const j_=["get","getKey","getAll","getAllKeys","count"],N_=["put","add","delete","clear"],D_=new Map
function B_(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return
if(D_.get(t))return D_.get(t)
const n=t.replace(/FromIndex$/,""),r=t!==n,i=N_.includes(n)
if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!j_.includes(n))return
const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly")
let o=s.store
return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]}
return D_.set(t,s),s}I_(e=>({...e,get:(t,n,r)=>B_(t,n)||e.get(t,n,r),has:(t,n)=>!!B_(t,n)||e.has(t,n)}))
const q_=["continue","continuePrimaryKey","advance"],H_={},U_=new WeakMap,G_=new WeakMap,W_={get(e,t){if(!q_.includes(t))return e[t]
let n=H_[t]
return n||(n=H_[t]=function(...e){U_.set(this,G_.get(this)[t](...e))}),n}}
async function*z_(...e){let t=this
if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return
const n=new Proxy(t,W_)
for(G_.set(n,t),$_.set(n,F_(t));t;)yield n,t=await(U_.get(n)||t.continue()),U_.delete(n)}function V_(e,t){return t===Symbol.asyncIterator&&x_(e,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===t&&x_(e,[IDBIndex,IDBObjectStore])}I_(e=>({...e,get:(t,n,r)=>V_(t,n)?z_:e.get(t,n,r),has:(t,n)=>V_(t,n)||e.has(t,n)}))
let Q_=Promise.resolve(),K_=!1
function J_(){return K_||(Q_=A_("keyval-store",1,{upgrade(e){e.createObjectStore("keyval")}}),K_=!0),Q_}async function Y_(e){try{return(await J_()).get("keyval",e)}catch(e){ia(e)}}async function X_(e,t){try{return(await J_()).put("keyval",t,e)}catch(e){ia(e)}}async function Z_(e){try{return(await J_()).delete("keyval",e)}catch(e){ia(e)}}const ev=({folder_id:e})=>-2!==(e??-2),tv=({folder_id:e})=>-2===e,nv=({player_id:e})=>-1!==(e??-1),rv=({player_id:e})=>e,iv=({player_id:e})=>-1===e,sv=([e,t,n])=>w_(20,e).map(e=>[e,t,n]),ov=(e,t)=>e.attributes.find(({id:e})=>e===t)?.value??0,av=(e,t)=>t.forge||t.stats?.set_name,lv=e=>e?.s?e.r.items:[],cv=e=>[[e.filter(ev),S_,0],[e.filter(tv),S_,1],[e.filter(nv),rv,7],[e.filter(iv),S_,4]].flatMap(sv)
function uv(e){return function(){const t=this.data(),n=e.find((e=>({inv_id:t})=>t===e.inv_id)(t))
n?.attributes&&(t.stats=((e,t)=>({...t,armor:ov(e,2),attack:ov(e,0),damage:ov(e,4),defense:ov(e,1),hp:ov(e,3),set_name:e.set_name??""}))(n,t.stats),this.invalidate())}}const dv=async()=>await Y_(`fsh_${Uc.subcmd}_cache`)??[],fv=e=>X_(`fsh_${Uc.subcmd}_cache`,e)
async function hv(e,t,n){const r=await(i={item_id:e.map(({item_id:e})=>e),inv_id:e.map(({inv_id:e})=>e),p:e.map(t),t:e.map(()=>n)},b_({cmd:"fetchitem",compare:0,...i}))
var i
return r?.s&&(r.r.items=((e,t)=>t.map((t,n)=>({...t,inv_id:e[n].inv_id})))(e,r.r.items),await async function(e){const t=(await dv()).filter((n=e,e=>n.every(t=>t.inv_id!==e.inv_id)))
var n
await fv(t.concat(e))}(r.r.items)),r}async function pv(e){const t=((e,t)=>{return t.filter((n=Zp(e.data()),e=>n.some(t=>e.inv_id===t.inv_id)))
var n})(e,await dv())
return await fv(t),t}async function gv(e){const t=new DataTable(e)
await async function(e){const t=e.rows(av),n=await pv(t)
t.every(uv(n))}(t),t.draw()}const _v=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],vv=e=>{return[..._v(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??"",t?.set_attack??"",t?.set_defense??"",t?.set_armor??"",t?.set_hp??"",t?.set_damage??""]),e.cached].join(",")
var t}
function mv(e){return()=>Gg(e)}var yv=[{section:"Character",menu:[{label:"Buff Log",fn:zg},{label:"Combat Log",fn:Vg},{label:"Creature Log",fn:Qg},{label:"Recipe Manager",fn:s_},{label:"Quick Links",fn:r_},{label:"Inventory Manager",href:`${el}invmanagernew`}]},{section:"Actions",menu:[{label:"Find Buffs",fn:mv(Zg)},{label:"Find Other",fn:mv(e_)},{label:"Online Players",fn:mv(t_)},{label:"AH Quick Search",fn:mv(Xg)}]},...Mg()?[{section:"Guild",menu:[{label:"Guild Inventory",href:`${el}guildinvmgr`},{label:"New Guild Log",fn:Jg},{label:"Merc Hunter",fn:function(){Wg(import("./mountMercs.svelte-DWOsXth8.js"))}},{label:"Pot Report",fn:function(){Wg(Promise.resolve().then(function(){return EE}))}},{label:"Guild Tracker",fn:Yg}]}]:[],{section:"Extra",menu:[{label:"Quick Extract",fn:n_},{label:"Quick Wear",fn:mv(i_)},{label:"FS Box Log",fn:Kg},{label:"SE Tracker",fn:function(){Wg(import("./mountSuperElite.svelte-C4qUzv2w.js"))}}]},..._c("betaOptIn")&&Mg()?[{section:"Beta Features",menu:[{label:"Relic List",fn:o_,beta:!0},{label:"GS Export",fn:async function(){if(!Mg())return
const e=await g_(),t=await Y_("fsh_guildinvmgr_cache")??[],n=e.items.map((e=>t=>{const n=e.find(({inv_id:e})=>e===t.inv_id)
return n?.attributes?{...t,stats:{...t.stats,armor:ov(n,2),attack:ov(n,0),damage:ov(n,4),defense:ov(n,1),hp:ov(n,3),set_name:n.set_name??"",...n.set_name&&{set_armor:ov(n.set_bonuses,2)},...n.set_name&&{set_attack:ov(n.set_bonuses,0)},...n.set_name&&{set_damage:ov(n.set_bonuses,4)},...n.set_name&&{set_defense:ov(n.set_bonuses,1)},...n.set_name&&{set_hp:ov(n.set_bonuses,3)}},cached:!0}:{...t,cached:!1}})(t))
var r
m_((r=`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name,set_attack,set_defense,set_armor,set_hp,set_damage,cached\n${(e=>e.map(vv).join("\n"))(n)}\n`,new Blob([r],{type:"text/csv"})),"gs_export.csv")},beta:!0},{label:"Who's Got What",fn:function(){Wg(Promise.resolve().then(function(){return yC}))},beta:!0}]}]:[],{section:"FSH developer quick links",menu:[{playerId:1963510,playerName:"PointyHair"},{playerId:1674838,playerName:"Lusterless"}]}],bv=(e,t,n)=>t(oh(n).label,oh(n).fn),wv=Sh('<button type="button" class="svelte-8sy7i5"> </button>'),kv=(e,t,n)=>t(oh(n).label),Sv=Sh('<a class="svelte-8sy7i5"> </a>'),xv=(e,t,n)=>t(oh(n).playerName),Ev=Sh('<button type="button" class="helperDevBtn svelte-8sy7i5">PM</button> <a class="svelte-8sy7i5"> </a>',1),Cv=Sh('<sup class="fshRed">beta</sup>'),Tv=Sh("<li><!> <!></li>"),Pv=Sh('<h2 class="svelte-8sy7i5"> </h2> <ul></ul>',1)
mh(["click"])
var $v=Sh('<div class="modal svelte-gt76l6"><!></div>'),Lv=Sh('<div><button type="button">Helper Menu</button> <!></div>')
function Iv(e,t){nd(t,!0)
let n=Ud(!1)
const r=_c("keepHelperMenuOnScreen"),i=_c("draggableHelperMenu")
function s(){Wd(n,!oh(n))}var o=Lv()
let a
var l=of(o)
let c
l.__click=s
var u=lf(l,2),d=e=>{var t=$v()
!function(e,t){function n(e){$g("helperMenu",e)}function r(e,r){Sc(r)&&(n(e),t.doToggle(),r())}function i(e){n("sendMsg"),t.doToggle(),window.openQuickMsgDialog(e)}nd(t,!0)
var s=Eh()
jh(af(s),17,()=>yv,Ah,(e,t)=>{var s=Pv(),o=af(s),a=of(o)
jh(lf(o,2),21,()=>oh(t).menu,Ah,(e,t,s,o)=>{var a=Tv(),l=of(a),c=e=>{var n=wv()
n.__click=[bv,r,t]
var i=of(n)
bf(()=>Ph(i,oh(t).label)),Ch(e,n)},u=e=>{var r=Eh(),s=af(r),o=e=>{var r=Sv()
r.__click=[kv,n,t]
var i=of(r)
bf(()=>{op(r,"href",oh(t).href),Ph(i,oh(t).label)}),Ch(e,r)},a=e=>{var n=Eh(),r=af(n),s=e=>{var n=Ev(),r=af(n)
r.__click=[xv,i,t]
var s=lf(r,2),o=of(s)
bf(()=>{op(s,"href",`${Ka??""}${oh(t).playerId??""}`),Ph(o,oh(t).playerName)}),Ch(e,n)}
Rh(r,e=>{oh(t).playerName&&e(s)},!0),Ch(e,n)}
Rh(s,e=>{oh(t).href?e(o):e(a,!1)},!0),Ch(e,r)}
Rh(l,e=>{oh(t).fn?e(c):e(u,!1)})
var d=lf(l,2),f=e=>{Ch(e,Cv())}
Rh(d,e=>{oh(t).beta&&e(f)}),Ch(e,a)}),bf(()=>Ph(a,oh(t).section)),Ch(e,s)}),Ch(e,s),rd()}(of(t),{doToggle:s}),gp(3,t,()=>Wp,()=>({duration:100})),Ch(e,t)}
Rh(u,e=>{oh(n)&&e(d)}),Wh(o,e=>{return t=e,void(i&&Cg(t))
var t}),bf((e,t)=>{a=Yh(o,0,"helper-menu svelte-gt76l6",null,a,e),c=Yh(l,0,"toggle svelte-gt76l6",null,c,t)},[()=>({"helper-menu-fixed":r}),()=>({"helper-menu-move":i})]),Ch(e,o),rd()}function Mv(){const e=Cc(".mainbody")
e&&function(e,t){$h(Iv,{target:t.parentElement,props:{props:e}})}({},e)}function Ov(e){return y_(e,{method:"GET"})}function Rv(e){return Ov({cmd:"trade",...e})}function Fv(e,t){return Rv({subcmd:"sendgold",xc:window.ajaxXC,target_username:e,gold_amount:t})}function Av(e,t,...n){return e(...n)}function jv(e){return(new DOMParser).parseFromString(e,"text/html")}function Nv(e){return f_({data:e})}async function Dv(e){const t=await Nv(e)
if(t)return jv(t)}function Bv(e){const n=t("info-msg",e)
if(n){const e=n.innerHTML
return e?e.replace(/<br.*/,""):""}}async function qv(e,t){const n=await Dv(e)
if(!n)return{s:!1}
const r=Bv(n)
return r===t?{s:!0}:{s:!1,e:{message:r}}}mh(["click"])
let Hv=0
const Uv=()=>Hv
function Gv(){Hv=_c("sendGoldonWorld")}async function Wv(){if(!Uv())return
$g("NewMap","doSendGold")
const e=await function(e,t){return Av(Fv,0,e,t)}($("#HelperSendTo").html(),$("#HelperSendAmt").html().replace(/[^\d]/g,""))
e.s&&(wc("currentGoldSentTotal",parseInt(_c("currentGoldSentTotal"),10)+parseInt(_c("goldAmount"),10)),GameData.fetch(1))}function zv(e){window.location=e}function Vv(e){_c("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function Qv(e){$g("keyHandler",e)}function Kv(e){return e?.toLowerCase?.()}function Jv(e,t){return Kv(e)<Kv(t)?-1:Kv(e)>Kv(t)?1:0}function Yv(e){return Ov({cmd:"profile",...e})}async function Xv(){const e=await Yv({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort((e,t)=>Jv(e.name,t.name))}:e}function Zv(){return Av(Xv)}const em=[e=>e?.s,(e,t)=>e.r?.length>t]
async function tm(e){const t=await Zv()
if(((e,t)=>em.every(n=>n(t,e)))(e,t)){Qv("changeCombatSet")
const n=t.r[e].id
Vv("2"),zv(`${Qa+Ha}managecombatset&submit=Use&combatSetId=${n}`)}}function nm(e,n){t("worldPage")||(Qv(e),zv(n))}function rm(){Uc.enableMaxGroupSizeToJoin?zv(ul):zv(cl)}function im(){Qv("logPage"),Vv("2"),zv(za)}function sm(e){const t=Cc(`#pCC input[value="${e}"]`)
t&&(Qv("movePage"),v_(t))}const om=[["!",tm,0],["@",tm,1],['"',tm,1],["#",tm,2],["£",tm,2],["$",tm,3],["%",tm,4],["^",tm,5],["&",tm,6],["*",tm,7],["(",tm,8],["0",function(){nm("toWorld",dl)}],["<",sm,"<"],[">",sm,">"],["G",function(){Qv("createGroup"),Vv("4"),zv(`${ol}create`)}],["L",im],["b",function(){Qv("backpack"),Vv("2"),zv(Ja)}],["g",function(){Qv("gotoGuild"),Vv("4"),zv(`${rl}manage`)}],["j",function(){Qv("joinAllGroup"),Vv("4"),rm()}],["l",im],["p",function(){Qv("profile"),Vv("2"),zv(Qa)}],["r",function(){nm("doRepair",`${pl+Ha}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in Uc&&!Uc.dialogIsClosed()||(Qv("insertQuickWear"),Gg(i_))}],["y",Wv]]
const am=[e=>["HTML","BODY"].every(t=>e.target.tagName!==t),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function lm(e){var t;(t=e,am.some(e=>e(t)))||function(e){const t=om.find(([t])=>e===t)
t&&t[1](t[2])}(e.key)}function cm(){Bc(document,"keyup",lm)}function um(e,t){return rg(t)===e}function dm(e){return sg(um,e)}function fm(e,t,n){Bc(e,"click",t,n)}function hm(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function pm(e,t){return Zp(hm(e,t))}function gm(e){fm(e,()=>{$g("chrome","Game Help link")}),qg(`<a href="${qa}settings">Game Help</a>`,e)}function _m(){pm("#pCR h3").filter(dm("Game Help")).forEach(gm)}function vm(e){Uc[e]=_c(e)}function mm(e,t){if(t instanceof Element)return t.closest(e)}function ym(e){e?.classList&&e.classList.add("fshHide")}function bm(e){const n=mm("a",e.target)
n?.getAttribute("href")===il&&($g("useNewGuildLog","Alter Href"),e.preventDefault(),Jg(),ym(t("notification-guild-log")))}function wm(){return Uc.huntingMode&&window.realmKeyHandler}function km(e){e.forEach(e=>iu(3,e))}function Sm(){return Nv({cmd:"guild",subcmd:"manage"})}function xm(e){return mm("tr",e)}function Em(e,t){return a(e,t)?.groups??{}}function Cm(e){const{d:t,h:n,m:r,s:i}=Em(Oa,e),s=Number(t),o=Number(n)+24*s,a=Number(r)+60*o,l=Number(i)+60*a
return{day:t,days:s,hour:n,hours:o,min:r,mins:a,sec:i,secs:l,timestamp:ya()-l}}function Tm(e,t){if(t){const n=new Set
return e.filter(e=>n.has(e[t])?0:n.add(e[t]))}return Zp(new Set(e))}const Pm=e=>Number(rg(xm(e)?.cells[4])?.replaceAll(",","")),$m=e=>Number(l(Ra,e.href)),Lm=e=>rg(xm(e)?.cells[3]),Im=e=>Number(l(Aa,e))
function Mm(e){return{guild_xp:Pm(e),id:$m(e),name:rg(e),rank:Lm(e)}}function Om(e){const{stam:t,max:n}=Em(Fa,e)
return{current_stamina:Number(t),last_activity:Cm(e).timestamp,level:Number(l(/Level:.+?(?<l>\d+)/,e)),max_stamina:Number(n),vl:Im(e)}}function Rm(e){return{guild_id:Mg(),image_version:0,xp:-1,...Mm(e),...Om(e.dataset.tipped)}}function Fm(e,t,n){return{id:n,members:e.filter(e=>e.rank===t.rank),name:t.rank,permissions:0,tax:-1}}async function Am(){const e=jv(await Sm()).getElementById("pCC")
if(!e)return{e:{code:0,message:"Failure"},s:!1}
const t=pm(cc,e).map(Rm)
return{r:Tm(t,"rank").map(sg(Fm,t)),s:!0}}function jm(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function Nm(){return Sc(window.jQuery)}function Dm(e){return Object.keys(e)}function Bm(e){return Math.floor(Math.max(0,ya()-e)/86400)}function qm(e){return Number.isNaN(e)}const Hm=0,Um=1,Gm=2,Wm=3,zm=4,Vm=5,Qm=6,Km="fsh_guildActivity"
function Jm(e){return p_({guild_id:e,subcmd:"guild_members"})}function Ym(e){return Promise.all(e)}function Xm(e){let t=e.toString()
return e<10&&(t=`0${t}`),t}function Zm(e){return`${e[0]}-${e[1]}-${e[2]} ${e[3]}:${e[4]}:${e[5]}`}function ey(e){return"[object Date]"===Object.prototype.toString.call(e)&&!qm(e.getTime())}function ty(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(Xm)}(e))}function ny(e){if(ey(e))return Zm(ty(e))}async function ry(){return await Y_(Km)??{lastUpdate:0,members:{}}}const iy=e=>ny(new Date(1e3*e)),sy=e=>[e[0],e[1],e[2],e[3],iy(e[4]),e[5],e[6]]
function oy(e){const{lastUpdate:t,members:n}=e
var r
return`Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n${Og(n).flatMap((r=iy(t),([e,t])=>t.map(sy).map(t=>[r,e,...t].join(",")))).join("\n")}`}const ay=[e=>e.getFullYear().toString(),e=>e.getMonth()+1,e=>e.getDate(),e=>e.getHours(),e=>e.getMinutes(),e=>e.getSeconds()]
async function ly(e,t){const n=await ry()
if(!n.lastUpdate||!n.members)return
const r=e(n),i=new Blob([r],{type:t}),s=`${o=ay.map((e=>t=>t(e))(new Date)).map(Xm),`${o[0]}${o[1]}${o[2]}${o[3]}${o[4]}${o[5]}`}_GuildTracker.${t.split("/")[1]}`
var o
m_(i,s)}async function cy(e){const t=await ry(),n={lastUpdate:t.lastUpdate,members:jm(Og(t.members).filter(([t])=>t!==e))}
X_(Km,n)}async function uy(e){const t=await ry(),n={lastUpdate:t.lastUpdate,members:jm(Og(t.members).map(([t,n])=>[t,n.filter(t=>t[4]>e)]))}
X_(Km,n)}async function dy(){const[e,t]=await Ym([ry(),Jm(Mg())]),n=t.map(({username:e})=>e)
return Dm(e.members).filter((e=>t=>!e.find(e=>e===t))(n)).sort(Jv)}const fy=e=>[e.name,[Bm(e.last_activity),e.current_stamina,e.level,e.max_stamina,ya(),e.vl,e.guild_xp]],hy=e=>e.members.map(fy),py=[e=>!e,(e,t)=>e[1]!==t[1],(e,t)=>e[2]!==t[2],(e,t)=>e[3]>t[3],(e,t)=>e[5]!==t[5],(e,t)=>e[6]!==t[6]],gy=e=>!e.some(Sa),_y=e=>!e.some(qm),vy=([,e])=>e.length,my=([e,t])=>[e,t.filter(gy).filter(_y)],yy=(e,t)=>e[4]>t[4]?e:t,by=([e,t])=>[e,t.reduce(yy)],wy=([e,t])=>[e,[t]],ky=(e,t,n)=>{return((e,t,n)=>({lastUpdate:ya(),members:jm(Dm({...e,...t,...n}).map(r=>[r,[...e[r]??[],...t[r]??[],...n[r]??[]]]))}))(jm(e.map((e=>([t,n])=>[t,n.filter(n=>n[4]!==e[t][4])])(t))),jm(Og(t).filter((r=n,([e,t])=>py.some(n=>n(r[e]?.[0],t)))).map(wy)),n)
var r}
function Sy(e,t){const n=Og(e.members||{}).map(my).filter(vy)
const r=jm(n.map(by)),i=(e=>e.r.flatMap(hy))(t).filter((e=>([t])=>!e[t]||ya()-e[t][4]>=86100)(r))
i.length?function(e,t,n){e&&t&&n&&X_(Km,ky(t,n,jm(e.map(wy))))}(i,n,r):function(e){e&&X_(Km,{lastUpdate:ya(),members:jm(e)})}(n)}function xy(e){(e=>ya()>Wc(e.lastUpdate,0)+300)(e)&&async function(e){const t=await Am()
t.s&&Sy(e,t)}(e)}function Ey(){return!Nm()}function Cy(e){return Ag("li",e)}function Ty(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function Py(e,t){if(t instanceof Node&&t.parentNode instanceof Node)return function(e,t){return t.nextSibling instanceof Node?Ty(e,t.nextSibling):Bg(t.parentNode,e)}(e,t)}const $y=["Buff Log","Combat Logs","Creature Logs","Quick Links","Recipe Manager","New Guild Log"]
function Ly(e,t){$g("accordion",e),$y.includes(e)?t():Gg(t)}function Iy(e,t,n,r){const i=function(e,t,n){const r=Cy({className:`nav-level-${e}`}),i=__({className:"nav-link fshPoint",textContent:t})
return Bg(r,i),Py(r,n.parentNode),i}(e,t,r)
Sc(n)?fm(i,sg(Ly,t,n)):(i.href=n,fm(i,()=>$g("accordion",t)))}const My=[[e=>e.recipeManagerLink,"1","Recipe Manager",s_,"nav-character-log"],[e=>e.inventoryManagerLink,"1","Inventory Manager",`${el}invmanagernew`,"nav-character-log"],[e=>e.medalGuideLink,"1","Medal Guide",`${Qa}${Ha}medalguide`,"nav-character-log"],[e=>e.buffLogLink&&_c("keepBuffLog"),"1","Buff Log",zg,"nav-character-log"],[e=>e.combatLogLink&&_c("keepLogs"),"1","Combat Logs",Vg,"nav-character-notepad"],[e=>e.creatureLogLink&&_c("showMonsterLog"),"1","Creature Logs",Qg,"nav-character-notepad"],[e=>e.quickLinksLink,"1","Quick Links",r_,"nav-character-notepad"],[e=>e.auctionSearchLink,"2","AH Quick Search",Xg,"nav-actions-trade-auctionhouse"],[e=>e.onlinePlayersLink,"2","Online Players",t_,"nav-actions-interaction-findplayer"],[e=>e.findOtherLink,"2","Find Other",e_,"nav-actions-interaction-findplayer"],[e=>e.findBuffsLink,"2","Find Buffs",Zg,"nav-actions-interaction-findplayer"],[e=>e.guildInventoryLink&&Mg(),"2","Guild Inventory",`${el}guildinvmgr`,"nav-guild-storehouse-inventory"],[e=>e.newGuildLogLink&&Mg()&&!_c("useNewGuildLog"),"2","New Guild Log",Jg,"nav-guild-ledger-advisor"],[e=>e.topRatedLink,"2","Top 250 Players",`${qa}toprated${Ha}xp`,"nav-toprated-players-level"]]
function Oy(e){My.forEach(([n,r,i,s,o])=>{n(e)&&function(e,n,r,i){const s=t(i)
s instanceof Node&&Iy(e,n,r,s)}(r,i,s,o)})}const Ry=e=>22*pm("li",e).length||null
function Fy(e,t,n){Oy(n),function(e,t){t.heights=pm("#nav > li").map(Ry)
const n=Number(t.state)
n&&n>-1&&n<e.children.length&&(e.children[t.state].children[1].style.height=`${t.heights[t.state]}px`)}(e,t)}var Ay=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function jy(e){return function(e){return-1!==e&&0===Cc(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?($g("accordion","collapse"),-1):e}const Ny=(e,t,n)=>$(e).data(`${n}${t}`)
function Dy(e,t,n){return new Promise(r=>{const i=Ny(e,t,n)
i?r(i):function(e,t,n,r){$(e).on(`${Kv(t)}create`,()=>{r(Ny(e,t,n))})}(e,t,n,r)})}const By=[[e=>!xc(e),()=>Hc("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>Hc("$('#nav').data('hcsNav').heights does not exist")]]
async function qy(){const e=t("nav"),n=await Dy(e,"Nav","hcs")
return function(e){const t=By.find(([t])=>t(e))
return!t||(t[1](),!1)}(n)?{theNav:e,myNav:n}:{}}function Hy(){!function(){const e=_c("lastActiveQuestPage")
_c("storeLastQuestPage")&&e.length>0&&(t("nav-character-questbook").href=e)}(),function(){const e=_c("lastScavPage")
_c("storeLastScavPage")&&e.length>0&&(t("nav-actions-artisanship-scavenging").href=e)}()}async function Uy(){const{theNav:e,myNav:t}=await qy()
e&&t&&(Hy(),function(e,t){const n=Ay.map(e=>[e,_c(e)])
n.some(([,e])=>e)&&Fy(e,t,jm(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,jy(n))}}(t))}function Gy(e){return Nv({cmd:"bounty",page:e})}function Wy(e){return e()}function zy(e,t){wc(e,qc(t))}let Vy=0,Qy=0
const Ky=()=>Vy,Jy=()=>Qy
function Yy(){return jg({className:"minibox"})}function Xy(e){return Ag("span",e)}function Zy(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function eb(e,t){Zy(e,"beforeend",t)}function tb([e,t,n,r,i]){const s=e(),o=n()
if(o)return zy(t,o),qg("",s),function(e,t,n,r){const i=jg({innerHTML:`<a class="fshBountyHeader" href="${bl}">${n} Bounties</a> `}),s=Xy({className:"xxsLink",textContent:"Reset"})
return Bg(i,s),Bg(e,i),eb(e,function(e,t,n){const r=e.bounty
return 0===r.length?`<div class="xsOrange">[No ${t.toLowerCase()} bounties]</div>`:r.map(n).join("")}(t,n,r)),s}(s,o,r,i)}function nb(e,t){return`<a href="${e.link}" class="xsKhaki tip-static" data-tipped="${t(e)}">${e.target}</a><br>`}function rb(e,t){if("string"==typeof t){const e=a(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function ib(e){const t=_c(e)
if(t)return Ec(t,rb)}function sb(e){return e.split(",").map(ng)}function ob(e){const t=_c(e)
return t?sb(t):[]}function ab(e){return Cc("img",e[2]).title}function lb(e){const t="A"===(r=e[0]).children[0].tagName?r.children[0]:r.children[0].children[0]
var r
return{target:n(t),link:t.href,lvl:n(t.nextSibling).replace(/[[|\]]/g,""),reward:n(e[2]),rewardType:ab(e),xpLoss:n(e[3]),posted:n(e[4])}}let cb=0,ub={},db={},fb=!1,hb=!1,pb=[]
const gb=()=>ub,_b=()=>db,vb=()=>pb
function mb(e){return{...lb(e),progress:n(e[5])}}function yb(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=mb(e.rows[t].cells)
ub.bounty.push(n)}}(e)}function bb(e,t){return function(e){if(e)return ub&&ya()-ub.lastUpdate>cb}(e)||function(e){if(e)return db&&ya()-db.lastUpdate>cb}(t)}let wb=0
function kb(e){return`Level:  ${e.lvl}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Progress:  ${e.progress}`}function Sb(e){return nb(e,kb)}function xb(){wb=tb([Ky,"bountyList",gb,"Active",Sb])}let Eb=0
function Cb(e){return`Target Level:  ${e.lvl}<br>Offerer: ${e.offerer}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Posted: ${e.posted}<br>Tickets Req.:  ${e.tickets}`}function Tb(e){return e.accept?`<span class="xsGreen" onclick="${e.accept}">[a]</span>&nbsp;`:""}function Pb(e){return[Tb(e),nb(e,Cb)].join("")}function $b(){Eb=tb([Jy,"wantedList",_b,"Wanted",Pb])}function Lb(e){const t=e[6]
return"[n/a]"!==rg(t)?t.children[0].children[0].getAttribute("onclick"):""}const Ib=[()=>vb().includes("*"),e=>vb().includes(e),(e,t)=>Uc.wantedGuildMembers&&"[n/a]"===rg(t.cells[6])]
function Mb(e,t){var n;(function(e,t){return"[active]"!==rg(t.cells[6])&&Ib.some(n=>n(e,t))})(e,t)&&_b().bounty.push({...lb(n=t.cells),offerer:rg(n[1].children[0].children[0]),tickets:rg(n[5]),accept:Lb(n)})}let Ob=0,Rb=0
function Fb(e){const n=Cc('#pCC input[name="page"]',e)
if(!n)return
Ob=Number(n.value),Rb=Number(l(/of&nbsp;(?<of>\d*)/,n.parentNode.innerHTML))
const r=t("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
r&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],r=rg(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===r)break
Mb(r,n)}}(r)}function Ab(e){Uc.enableActiveBountyList&&!fb&&(!function(e){const n=t("bounty-info",e)
if(!n)return
const r=n.parentNode.parentNode.previousElementSibling.children[0].children[0]
ub={},ub.bounty=[],ub.isRefreshed=!0,ub.lastUpdate=ya(),r&&yb(r),fb=!0}(e),xb())}async function jb(e){const t=jv(e)
if(Ab(t),Uc.enableWantedList)if(Fb(t),Ob<Rb){jb(await Gy(Ob+1))}else $b()}const Nb=[()=>!gb(),()=>!_b(),()=>hb]
async function Db(){if(function(e,t){ub=ib("bountyList"),db=ib("wantedList"),cb=_c("bountyListRefreshTime"),hb=_c("bwNeedsRefresh"),hb||bb(e,t)&&(hb=!0)}(Uc.enableActiveBountyList,Uc.enableWantedList),Nb.some(Wy)){db={},db.bounty=[],db.isRefreshed=!0,db.lastUpdate=ya(),fb=!1,pb=ob("wantedNames"),wc("bwNeedsRefresh",!1)
jb(await Gy(1))}else!function(e,t){t&&(_b().isRefreshed=!1,$b()),e&&(gb().isRefreshed=!1,xb())}(Uc.enableActiveBountyList,Uc.enableWantedList)}function Bb(e,t){$g("activeWantedBounties",e),zy(t,null),Db()}function qb(e){e.target===wb&&Bb("getBountyListReset","bountyList"),e.target===Eb&&Bb("getWantedListReset","wantedList")}function Hb(e,t){return p_({subcmd:"profile",player_username:e,...t&&{_:pa()}})}async function Ub(e){const t=await Hb(s(),e),n=t?.username===s(),r=n?{...t,lastUpdate:_a()}:t
return n&&X_("fsh_selfProfile",r),r}function Gb(e){return(e=>_a()-Uc.allyEnemyOnlineRefreshTime<e?.lastUpdate)(e)?e:Ub()}async function Wb(e){if(e)return Ub(e)
return Gb(await Y_("fsh_selfProfile"))}function zb(e,t){return t?.classList?.contains(e)}function Vb(e,t){return zb(t[0],e)}function Qb(e,t,n){const{target:r}=n,i=t.find(sg(e,r))
if(i)return i[1](r)}function Kb(e){return sg(Qb,Vb,e)}function Jb(e){return su(e,"player_id")}function Yb(e,t,n){return Math.floor(Math.max(e-t,0)/2+n)}function Xb(e,t,n,r,i){let s=r
500===r&&(s=1e3)
const o=Yb(window.screen.availHeight,s,window.screenY),a=Yb(document.documentElement.clientWidth,n,window.screenX)
window.open(e,t,`width=${n}, height=${s}, left=${a}, top=${o}${i}`)}function Zb(e,t){let n=""
t&&(n=`&blist=${t}`),Xb(`${gl}&t=${e}${n}`,"fsQuickBuff",618,1e3,",scrollbars")}function ew(e){let t=e,n=Math.floor(t/60)
t%=60
let r=Math.floor(n/60)
n%=60
const i=Math.floor(r/24)
return r%=24,[i,r,n,t]}function tw(e,t){return 0===e?"":String(e)+t}function nw(e){const t=ew(Math.abs(ya()-e))
return`${tw(t[0]," days, ")+tw(t[1]," hours, ")+tw(t[2]," mins, ")+t[3]} secs`}const rw="enemy-buff-check-on",iw="enemy-buff-check-off",sw="enemy-send-message",ow="enemy-quickbuff",aw="enemy-quick-buff",lw=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function cw(e,t){return t[0](ya()-e)}function uw(e,t){return`<a class="player-name tip-static ${function(e,t){const n=lw.find(sg(cw,e))
return n?function(e,t){return e?t[1]:t[2]}(t,n):"fshWhite"}(e.last_login,t)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${nw(e.last_login)}</td></tr></tbody></table>" href="${Ka}${e.id}">${e.username}</a>`}function dw(e){return ya()-e.last_login<1800}function fw(e,t){return`<li class="player"><div class="player-row">${Uc.hideBuffSelected?"":`<span class="${rw}"></span>`}${uw(t,e)}</div><div class="guild-minibox-actions">${Uc.hideGuildInfoMessage?"":`<span class="${sw} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}${Uc.hideGuildInfoBuff?"":`<span class="${ow} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}${function(e){return Uc.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${Xa}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return Uc.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${Ya}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function hw(e,t){return e.filter(dw).map(sg(fw,t)).join("")}const pw=[(e,t)=>e.length+t.length,(e,t)=>{if(!Uc.enableAllyOnlineList)return t.length},e=>{if(!Uc.enableEnemyOnlineList)return e.length}]
function gw(e){$g("allyEnemy",e)}function _w(e,t,n){return 0===n(e,t)}function vw(e){const n=Wc(e._allies,[]),r=Wc(e._enemies,[]);(function(e,t){return pw.every(sg(_w,e,t))})(n,r)||function(e,n){let r=""
Uc.enableAllyOnlineList&&(r+=hw(e,!0)),Uc.enableEnemyOnlineList&&(r+=hw(n,!1))
const i=t("fshContactList")
qg("",i),eb(i,r)}(n,r)}function mw(e){gw("toggleBuffSelected"),e.classList.toggle(rw),e.classList.toggle(iw)}const yw=[[rw,mw],[iw,mw],[sw,function(e){gw("msgPlayer"),window.openQuickMsgDialog(n(e.parentNode.previousElementSibling.lastElementChild))}],[ow,function(e){gw("buffPlayer"),Zb(Jb(e.parentNode.previousElementSibling.lastElementChild.href))}],[aw,function(){gw("selectedBuff"),Zb(Dg(rw,t("fshContactList")).map(e=>Jb(e.nextElementSibling.href)).join(","))}]]
function bw(e){const{target:t}=e
"fshResetEnemy"!==t.id?Kb(yw)(e):async function(){gw("resetList"),vw(await Wb(!0))}()}function ww(e){const t=jg({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>'
Uc.hideBuffSelected||(n+=`<ul class="${aw}">Quick Buff Selected</ul>`),n+="</div></div>",eb(t,n),Bg(cg(),t),fm(t,bw),vw(e)}function kw(e){if(e?.length)return n(e[0].nextElementSibling)}function Sw(e){return e?Number(e.replace(/,/g,"")):0}function xw(e){return Sw(kw(Ng(e)))}function Ew(e,t){const n=e?.split(" ").map(e=>e.slice(0,-1))
var r
if(n)return`<dd>${r=new Date(_a()+1e3*(60*(60*t+Number(n[0]))+Number(n[1]))),`${Xm(r.getHours())}:${Xm(r.getMinutes())} ${r.toLocaleString("en",{weekday:"short"})} ${Xm(r.getDate())}/${$a[r.getMonth()]}/${r.getFullYear()}`}</dd>`}function Cw(e,t,n){e.target===oh(t)&&n.close()}var Tw=Sh("<div><!></div>")
function Pw(e,t){nd(t,!0)
let n,r,i,s=Np(t,"visible",3,!0),o=Ud(void 0)
gf(()=>{s()?document.body.classList.contains("noscroll")||(n=!0,r=window.scrollY,i=document.body.style.top,document.body.classList.add("noscroll"),document.body.style.top=`-${r}px`):n&&(document.body.classList.remove("noscroll"),document.body.style.top=i||"",window.scrollTo(0,r))})
var a=Tw()
let l
a.__click=[Cw,o,t],Uh(of(a),()=>t.children??yu),Cp(a,e=>Wd(o,e),()=>oh(o)),bf(e=>l=Yh(a,0,"svelte-5b5wnh",null,l,e),[()=>({visible:s()})]),Ch(e,a),rd()}let $w
mh(["click"])
var Lw=Sh('<div role="dialog" aria-modal="true"><!></div>')
function Iw(e,t){nd(t,!0)
let n,r=Np(t,"modal",15),i=Np(t,"visible",3,!0)
gf(()=>{i()?(Uc.dialogIsClosed&&(n=Uc.dialogIsClosed),Uc.dialogIsClosed=()=>!i()):n&&(Uc.dialogIsClosed=n)}),Pw(e,{get close(){return t.close},get visible(){return i()},children:(e,n)=>{!function(e,t){nd(t,!0)
let n=Np(t,"modal",15),r=Np(t,"visible",3,!0),i=_d(r),s=Ud(void 0),o=Ud(void 0)
const a=e=>e.tabIndex>=0&&e.offsetWidth>0&&e.offsetHeight>0&&!e.disabled
gf(()=>{r()?(Wd(s,document?.activeElement,!0),n()&&(Wd(o,$w,!0),$w=n())):(oh(s)?.focus(),n()&&($w=oh(o)))})
var l=Lw()
let c
vh("keydown",Xd,function(e){if(r())if("Escape"!==e.key||$w!==n()){if("Tab"===e.key){const t=pm("*",n()).filter(a)
let r=t.indexOf(document.activeElement);-1===r&&e.shiftKey&&(r=0),r+=t.length+(e.shiftKey?-1:1),r%=t.length,t[r].focus(),e.preventDefault()}}else t.close()}),Uh(of(l),()=>t.children??yu),Cp(l,e=>n(e),()=>n()),bf(e=>c=Yh(l,0,"ui-dialog svelte-61qae0",null,c,e),[()=>({modalVisible:oh(i)})]),Ch(e,l),rd()}(e,{get close(){return t.close},get visible(){return i()},get modal(){return r()},set modal(e){r(e)},children:(e,n)=>{var r=Eh()
Uh(af(r),()=>t.children??yu),Ch(e,r)},$$slots:{default:!0}})},$$slots:{default:!0}}),rd()}function Mw(e,t,n){t(!1),n.resolve(!0)}var Ow=Sh('<div class="svelte-1gd1a38"> </div> <div class="svelte-1gd1a38"><button type="button" class="svelte-1gd1a38">Yes</button> <button type="button" class="svelte-1gd1a38">No</button></div>',1)
function Rw(e,t){nd(t,!0)
let n=Np(t,"msg",3,"Are you sure?"),r=Np(t,"visible",15,!0)
function i(){r(!1),t.resolve(!1)}Iw(e,{close:i,get visible(){return r()},children:(e,s)=>{var o=Ow(),a=af(o),l=of(a),c=of(lf(a,2))
c.__click=[Mw,r,t],lf(c,2).__click=i,bf(()=>Ph(l,n())),Ch(e,o)},$$slots:{default:!0}}),rd()}mh(["click"])
const Fw=Kd({visible:!0})
let Aw=null
function jw(e){Fw.resolve=e,Aw?Fw.visible=!0:Aw=$h(Rw,{props:Fw,target:document.body})}function Nw(e){return Fw.msg=e,new Promise(jw)}async function Dw(e){if("daily-quest-reroll-button"!==e.target.id)return
e.stopPropagation()
await Nw("Are you sure you want to re-roll the Daily Quest?")&&async function(){const e=t("minibox-daily-quest")
if(!e)return
$g("dailyQuest","reroll")
const n=await Dv({cmd:"dailyquests",subcmd:"reroll"})
if(!n)return
const r=t("minibox-daily-quest",n)
r&&e.replaceWith(r)}()}function Bw(e){return Ag("button",{...e,type:"button"})}function qw(e,t){eb(e,t)}function Hw(){$g("fsbox","open log"),Kg()}function Uw(e,t){const n=Xy({className:`fsh-fsbox ${e}`,textContent:"[ "})
return Bg(n,t),qw(n," ]"),n}function Gw(e){const t=Cc(cc,e)
t&&(function(e,t){const r=__({href:`${Va}${n(t)}`,textContent:"Ignore"})
fm(r,()=>$g("fsbox","ignore link")),Bg(e,Uw("fs-box-ignore",r))}(e,t),async function(e){const t=await Y_("fsh_fsboxcontent")??"",n=ng(Cc(".message",e).innerHTML)
if(t.includes(n))return
X_("fsh_fsboxcontent",`<br>${n}${t}`.slice(0,9999))}(e))}function Ww(e){e.classList.add("fshRelative"),function(e){const t=Bw({textContent:"Log"})
fm(t,Hw),Bg(e,Uw("fs-box-log",t))}(e),Gw(e)}function zw(e,t){t instanceof Node&&(t.textContent=String(e))}let Vw=null
function Qw(){return Vw||(Vw=t("quickMessageDialog")),Vw}let Kw=0
function Jw(e){(function(){if(!Kw){const e=Ng("validateTips",Qw())
1===e.length&&([Kw]=e)}return Kw})()&&zw(Wc(e,""),Kw)}let Yw=null
function Xw(){return Yw||(Yw=t("quickMsgDialog_msg"),Yw.maxLength=512),Yw}let Zw=null,ek=0,tk=0
function nk(e){"Enter"!==e.key||e.shiftKey||($g("messaging","sendOnEnter"),e.preventDefault(),function(){if(!tk){const e=$(Qw()).dialog("option","buttons")
tk=e["Send Message"]}return tk}()())}function rk(){Sa(Zw)&&(Zw=_c("enterForSendMessage")),Zw&&!ek&&(Bc(Xw(),"keypress",nk),ek=!0)}let ik=null
let sk=0,ok=0,ak=0
function lk(e,t,n){const r=ok.insertRow(e)
let i=r.insertCell(-1)
eb(i,t),i=r.insertCell(-1),eb(i,n)}function ck(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function uk(e,t){lk(e,ck("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const dk=[["del-button",function(e){$g("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
ok.deleteRow(t),sk.splice(t-2,1),zy("quickMsg",sk)}],["add-button",function(e){$g("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){uk(e.parentNode.parentNode.rowIndex,n),t.value="",sk.push(n),zy("quickMsg",sk)}}],["add-template",function(e){$g("messaging","insertTemplate"),Xw().value+=`${n(e).replace(/\{playername\}/g,ik)}`}]]
function fk(e){uk(-1,e)}function hk(){_c("enableMessageTemplates")&&!ak&&(fm((ok||(ok=Qw().lastElementChild),ok),Kb(dk)),(sk||(sk=ib("quickMsg")),sk).forEach(fk),lk(-1,ck("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),ak=!0)}function pk(e,n,r){const i=Qw()
zb("ui-dialog-content",i)&&(!function(e){ik=e,zw(e,t("quickMsgDialog_targetUsername"))}(e),function(e){const t=Xw()
t.value=Wc(e,""),t.disabled=!1}(n),Jw(r),hk(),rk(),$(i).dialog("open"))}function gk(e){return Ov({cmd:"composing",...e})}function _k(){return gk({subcmd:"view"})}function vk(){return Av(_k)}function mk(e,n,r){const i=Cy({className:"notification"}),s=__({href:r,innerHTML:`<span class="notification-icon"></span><p class="notification-content">${n}</p>`})
fm(s,()=>{$g("notification",e)}),Bg(i,s),Bg(t("notifications"),i)}function yk(){mk("composing","Composing to do",_l)}function bk(e){return e.time_remaining}function wk(){yk(),wc(Hl,!0)}function kk(e){const t=e.h.p.find(({k:e})=>52===e)?.v
e.r.potions.length!==t?wk():function(e){const t=Math.min.apply(null,e.map(bk))
t>0?(wc(Hl,!1),wc(Ul,_a()+1e3*t)):wk()}(e.r.potions)}function Sk(){_c(Hl)?yk():async function(){const e=_c(Ul)
if(e&&_a()<e)return
const t=await vk()
t?.s&&kk(t)}()}function xk(e){return Ov({cmd:"guild",...e})}function Ek(e){return xk({subcmd:"groups",...e})}function Ck(e){return Ek({subcmd2:"joinall",group:e})}function Tk(e){return Av(Ck,0,e)}function Pk(){return Ek({subcmd2:"view"})}function $k(){return Av(Pk)}function Lk(e,t){oh(t)||(e.preventDefault(),$g("notification","Join All"),Wd(t,1))}var Ik=Sh('<p class="notification-content" style="line-height: 32px;">Joined.</p>'),Mk=Sh('<span class="notification-content fshSpinner fix-classic-theme svelte-44dw92"></span>'),Ok=Sh('<p class="notification-content"><button type="button" class="svelte-44dw92"> </button></p>'),Rk=Sh('<a><span id="notification-icon-guild-group" class="notification-icon"></span> <!></a>')
function Fk(e,t){nd(t,!0)
let n=Ud(0),r=Ud(Kd(cl)),i=Ud("")
const o=e=>!Uc.enableMaxGroupSizeToJoin||e.members.length<Uc.maxGroupSizeToJoin,a=e=>e.name===s(),l=e=>!e.members.find(a),c=e=>e.id
async function u(){const e=await $k()
e?.s&&await async function(e){const t=e.r.filter(o).filter(l).map(c)
t.length&&await Tk(t)}(e)}Uc.enableMaxGroupSizeToJoin&&(Wd(r,ul,!0),Wd(i,` less than size ${Uc.maxGroupSizeToJoin}`))
var d=Rk(),f=lf(of(d),2),h=e=>{var t=Eh()
Oh(af(t),u,e=>{Ch(e,Mk())},e=>{Ch(e,Ik())}),Ch(e,t)},p=e=>{var t=Ok(),r=of(t)
r.__click=[Lk,n]
var s=of(r)
bf(()=>Ph(s,`Join all attack groups${oh(i)??""}.`)),Ch(e,t)}
Rh(f,e=>{oh(n)?e(h):e(p,!1)}),bf(()=>op(d,"href",oh(r))),Ch(e,d),rd()}function Ak(e){return Ov({cmd:"temple",...e})}function jk(e){return Ak({subcmd:"pray",type:e})}function Nk(){return Ak({subcmd:"view"})}function Dk(e){$(e).qtip("hide")}mh(["click"])
let Bk=Element
const qk=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${qa}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
function Hk(e){wc("needToPray",e),wc("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}async function Uk(e){const t=e.target.getAttribute("praytype")
t&&($g("notification","prayToGods"),Dk(e.target),await function(e){return Av(jk,0,e)}(t),Bk.outerHTML='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',Hk(!1))}function Gk(){eb(t("notifications"),qk),Bk=t("helperPrayToGods"),hg(Bk,"click",Uk)}async function Wk(){if(!Uc.enableTempleAlert)return
const e="temple"===Uc.cmd?function(e){if(!e)return{s:!1}
const t=Cc("#pCC",e)
return t?{s:!0,r:{pray_index:"You are currently praying at the temple."===rg(t)?0:-1}}:{s:!1}}(document):await Av(Nk)
if(!e.s)return
const t=-1===e.r.pray_index
t&&Gk(),Hk(t)}function zk(){var e
!(e=_c("lastTempleCheck"))||_a()>e?Wk():_c("needToPray")&&Gk()}function Vk(){return e={subcmd:"goldupgrades"},Ov({cmd:"points",...e})
var e}function Qk(e,t,n){if(e?.rows)return Zp(e.rows).filter((e,r)=>e.children.length===t&&r>n)}function Kk(e,t){const n=Number(rg(e.cells[2]).split(" / ")[0]),r=rg(e.cells[3])
return{id:t,...!["-","n/a"].includes(r)&&{reset_time:Date.parse(`${r} GMT`)/1e3},current:qm(n)?0:n}}function Jk(){return-1!==window.location.search.indexOf("cmd=points&type=1")}function Yk(){Jk()||mk("stamina","Upgrade stamina with gold",`${nl}&type=1`)}async function Xk(){if(Jk()&&function(){const e=hm('#pCC input[name="quantity"]')
e?.length<2||(e[0].value="100",e[1].value="10")}(),!Uc.enableUpgradeAlert)return
const e=Jk()?function(e){if(!e)return{s:!1}
const t=Cc("#pCC > table",e)
return t?{s:!0,r:Qk(t,5,0).map(Kk)}:{s:!1}}(document):await Av(Vk)
xa(e?.r?.[1]?.current)||function(e){10!==e.current?(Yk(),wc("needToDoUpgrade",!0)):(wc("needToDoUpgrade",!1),wc("lastUpgradeCheck",1e3*e.reset_time))}(e.r[1])}function Zk(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?Ty(t,e.firstChild):Bg(e,t)}(e,t)}function eS(e,t){t.stopPropagation(),$g("chrome","statbar",e)}function tS(e,n){const r=t(`statbar-${n}`)
if(!r)return
const i=__({href:e}),s=r.parentNode
Bg(i,r),Zk(s,i),fm(i,sg(eS,n),!0)}function nS(e,t){Dg("player-name",e).forEach(t)}const rS=/Last Activity:<\/td><td>(?<mins>\d+) mins/
function iS(e,t){const n=e.dataset.tipped,r=l(rS,n)
r<2?e.classList.add(t.l1):r<5?e.classList.add(t.l2):e.classList.add(t.l3)}const sS=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function oS(e,t){sS.forEach(n=>{Uc[n[0]]&&Zp(hm(n[t],e)).forEach(ym)})}function aS(e){e?.classList&&e.classList.add("fshInvisible")}function lS(e,n){Uc.hideBuffSelected&&(Zp(Ng(`${n}-buff-check-on`,e)).forEach(aS),aS(t(`${n}-quick-buff`)))}function cS(e){iS(e,{l1:"fshGreen",l2:"fshWhite",l3:"fshGrey"})}function uS(e,t,n){pm(`#pCR h${e}`).filter(dm(t)).forEach(e=>{const r=__({href:`${rl}${n}`,textContent:t})
fm(r,()=>{$g("widgets",`guild ${n}`)}),e.replaceChild(r,e.firstChild)})}function dS(e){iS(e,{l1:"fshDodgerBlue",l2:"fshLightSkyBlue",l3:"fshPowderBlue"})}function fS(e){const n=t(e)
n&&(n.classList.add("pCR"),Bg(cg(),n))}function hS(e){const n=t(e)
n&&Zk(dg(),n)}let pS=!1
function gS(e,t){pS=t,e(pS)}const _S=function(){const{subscribe:e,set:t}=$p(0)
return{subscribe:e,set:sg(gS,t)}}()
const vS=[function(){_c("moveGuildList")&&hS("minibox-guild")},function(){_c("moveOnlineAlliesList")&&hS("minibox-allies")},function(){_c("moveXmasBox")&&fS("minibox-xmas")},function(){_c("moveDailyQuest")&&fS("minibox-daily-quest")},function(){_c("moveFSBox")&&fS("minibox-fsbox")},async function(){if(!Uc.enableAllyOnlineList&&!Uc.enableEnemyOnlineList||Ey())return
!function(e){e&&iu(3,ww,[e])}(await Wb(!1))},function(){!Uc.enableWantedList&&!Uc.enableActiveBountyList||Ey()||(Uc.enableActiveBountyList&&(Vy=Yy(),Bg(cg(),Vy)),Uc.enableWantedList&&(Qy=Yy(),Bg(cg(),Qy)),Ky()&&fm(Ky(),qb),Jy()&&fm(Jy(),qb),Db())},function(){if(!Uc.enableGuildInfoWidgets)return
const e=t("minibox-guild-members-list")
e&&(oS(e,1),lS(e,"guild"),nS(e,cS),uS(4,"Chat","chat"),uS(3,"Guild","manage"))},function(){if(!Uc.enableOnlineAlliesWidgets)return
const e=t("minibox-allies-list")
e&&(oS(e,2),lS(e,"ally"),nS(e,dS))},function(){Uc.enableTempleAlert&&"temple"!==Uc.cmd&&!Ey()&&zk()},function(){Uc.enableUpgradeAlert&&Nm()&&!Jk()&&function(){if(_c("needToDoUpgrade"))return void Yk()
const e=_c("lastUpgradeCheck");(!e||_a()>e)&&Xk()}()},function(){Uc.enableComposingAlert&&"composing"!==Uc.cmd&&Nm()&&Sk()},function(){cg()&&!Ey()&&Uy()},function(){Ey()||(window.openQuickMsgDialog=pk)},function(){_c("statBarLinks")&&(tS(Qa,"character"),tS(`${nl+Ha}reserve`,"stamina"),tS(pl,"equipment"),tS(Ja,"inventory"),tS(nl,"fsp"),tS(`${qa}bank`,"gold"))},function(){if(!_c("staminaCalculator"))return
const e=Ng("stat-stamina-nextGain")
if(0===e.length)return
const n=t("statbar-stamina-tooltip-stamina"),r=(e=>kw(Ng("stat-name",e)).split(" / "))(n)
2===r.length&&eb(n,function(e,t){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${Ew(kw(e),Math.floor((Sw(t[1])-Sw(t[0]))/xw("stat-stamina-gainPerHour")))}`}(e,r))},function(){if(!_c("levelUpCalculator"))return
const e=Ng("stat-xp-nextGain")
0!==e.length&&eb(t("statbar-level-tooltip-general"),`<dt class="stat-xp-nextLevel">Next Level At</dt>${Ew(kw(e),Math.ceil(xw("stat-xp-remaining")/xw("stat-xp-gainPerHour")))}`)},function(){if(!_c("fsboxlog"))return
const e=t("minibox-fsbox")
e&&Ww(e)},function(){_c("resizeQuickBuff")&&(window.openWindow=function(e,t,n,r,i){$g("chrome","interceptQuickBuff"),Xb(e,t,n,r,i)})},function(){if(!_c("joinAllLink"))return
const e=t("notification-guild-group")
e&&function(e){qg("",e),$h(Fk,{target:e})}(e)},function(){if(!_c("addScoutTowerLink"))return
const e=t("minibox-spoilsofwar")
if(!e)return
const n=e.children[1]
if(!n)return
const r=n.children[0]
eb(r,"&nbsp;"),Bg(r,function(){const e=__({dataset:{tooltip:"View Scout Report"},href:sl,innerHTML:`<img id="fshScoutTower" src="${Ca}structures/27.png">`})
return fm(e,()=>$g("chrome","scout tower link")),e}())},async function(){if(Nm()&&_c(Wl)){xy(await ry())}},function(){Nm()&&Uc.enableSeTracker&&_S.set(Uc.enableSeTracker)},function(){_c("dailyQuestReRoll")&&dg()&&fm(dg(),Dw,!0)}]
const mS=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function yS(){wm()||(mS.forEach(vm),Uc.allyEnemyOnlineRefreshTime=1e3*_c("allyEnemyOnlineRefreshTime"),Uc.useNewGuildLog&&(Bc(document.body,"click",bm),Bc(document.body,"auxclick",bm)),km(vS))}function bS(e){const t=Ec(e)
t?.["new-ui"]&&(_c("gameHelpLink")&&iu(3,_m),Uc.huntingMode=_c("huntingMode"),iu(3,cm),yS(),_c("hideHelperMenu")||iu(3,Mv))}function wS(){const e=function(){const e=t("html")
if(e?.dataset)return e.dataset.hcs}()
e&&bS(e)}function kS(){Nm()&&t("worldPage")&&window.GameData&&Wg(import("./newMap-BbPzRRVL.js"))}const SS={"-":{"-":()=>{Wg(import("./arena-DsbK8FTc.js").then(function(e){return e.b}))}},dojoin:{"-":()=>{Wg(import("./arenaDoJoin-BkoQUt1v.js"))}},join:{"-":()=>{Wg(import("./arenaJoin-DFqXPnrm.js"))}},completed:{"-":()=>{Wg(import("./completedArenas-DeUAtCYS.js"))}},pickmove:{"-":()=>{Wg(import("./storeMoves-QkDSLVKW.js"))}},setup:{"-":()=>{Wg(import("./setupMoves-DI5Pqr38.js"))}}}
var xS={"-":{"-":()=>{Wg(import("./injectAuctionHouse-D62-7Hma.js"))}},quickcreate:{"-":()=>{Wg(import("./quickCreate-5LgKQp02.js"))}}}
var ES={"-":{"-":()=>{Wg(import("./composing-BkDHutM6.js"))}},breakdown:{"-":()=>{Wg(import("./breakdown-BIaIk550.js"))}},create:{"-":()=>{Wg(import("./composingCreate-B3nr1KRg.js"))}}}
function CS(){Wg(import("./bioWidgets-C_V_s5OC.js"))}function TS(){Wg(import("./injectGuild-DlMiQpuR.js"))}const PS=()=>{Wg(import("./guildAdvisor-ps2EbU5h.js"))}
const $S=()=>{Wg(import("./groups-CGPfP-65.js"))}
const LS=()=>{Wg(import("./addRemoveTags-CMXiDpKb.js"))}
const IS=()=>{Wg(import("./guildChat-BKxLx1F6.js"))}
var MS={inventory:{report:()=>{Wg(import("./guildReport-C38SOddM.js"))},addtags:LS,removetags:LS,storeitems:()=>{Wg(import("./storeitems-CKfFP7o7.js"))}},chat:{"-":IS},dochat:{"-":IS},log:{"-":()=>{Wg(import("./guildLog-B-I4ro8x.js"))}},groups:{viewstats:()=>{Wg(import("./injectGroupStats-DhvklaFH.js"))},joinallgroupsundersize:$S,joinall:$S,"-":$S},manage:{"-":TS},advisor:{"-":PS,weekly:PS},history:{"-":CS},view:{"-":TS},scouttower:{"-":()=>{Wg(import("./injectScouttower-q4vRLHUs.js"))}},mailbox:{"-":()=>{Wg(import("./guildMailbox-CyJkhqHT.js"))}},ranks:{"-":()=>{Wg(import("./rank-CfYbTxqi.js"))}},conflicts:{rpupgrades:()=>{Wg(import("./injectRPUpgrades-DoeiLDQu.js"))}},bank:{"-":()=>{Wg(import("./injectGuildBank-CHzG3oqM.js"))}},hall:{"-":()=>{Wg(import("./hall-BsgOC00f.js"))},post:CS},"-":{"-":TS},titanrewards:{"-":()=>{Wg(import("./titanrewards-CJDPlKVB.js"))}}}
function OS(){Wg(import("./viewRecipe-z_BskO8-.js"))}var RS={"-":{"-":function(){Wg(import("./inventing-BiiFUwb4.js"))}},doinvent:{"-":OS},viewrecipe:{"-":OS}}
function FS(){Wg(import("./ufsgAllowBack-CZWpNcAi.js"))}var AS={"-":{"-":FS},view:{"-":()=>{Wg(import("./itemsView-TlkO0bZS.js"))}}}
function jS(){Wg(import("./profile-uV9K8-sy.js").then(function(e){return e.p}))}function NS(){Wg(import("./news-DRZrxJT7.js"))}function DS(){Wg(import("./viewArchive-DIedZWLk.js"))}var BS={fsbox:{"-":()=>{Wg(import("./newsFsbox-D2VFOLpF.js"))}},"-":{"-":NS},shoutbox:{"-":()=>{Wg(import("./newsShoutbox-CPHWKwcn.js"))}},viewupdatearchive:{"-":DS},viewarchive:{"-":DS}}
var qS={news:{"-":NS},viewupdatearchive:{"-":DS},viewarchive:{"-":DS},"-":{"-":()=>{Wg(import("./unknownPage-DgqqbsSR.js"))}}},HS=Sh("<svelte-virtual-list-row><!></svelte-virtual-list-row>",2),US=Sh("<svelte-virtual-list-viewport><svelte-virtual-list-contents></svelte-virtual-list-contents></svelte-virtual-list-viewport>",2)
function GS(e,t){nd(t,!0)
let n,r,i=Np(t,"height",3,"100%"),s=Np(t,"itemHeight",3,void 0),o=Np(t,"start",15,0),a=Np(t,"end",15,0),l=[],c=Ud(void 0),u=Ud(void 0),d=Ud(0),f=_d(()=>t.items.slice(o(),a()).map((e,t)=>({index:t+o(),data:e}))),h=Ud(void 0),p=Ud(0),g=Ud(0),_=0
async function v(e,t){const{scrollTop:n}=oh(c)
t={left:0,top:n+(e-o())*(s()||r),behavior:"smooth",...t},oh(c).scrollTo(t)}Dp(()=>{n=oh(u).getElementsByTagName("svelte-virtual-list-row"),Wd(h,!0)}),gf(()=>{oh(h)&&async function(e,t,i){if(_)return
_=!0,e.length<o()&&await v(e.length-1,{behavior:"auto"})
const{scrollTop:s}=oh(c)
await sh()
let u=oh(p)-s,d=o()
for(;u<t&&d<e.length;){let e=n[d-o()]
e||(a(d+1),await sh(),e=n[d-o()]),e&&(u+=l[d]=i||e.offsetHeight),d+=1}a(d)
const f=e.length-a()
r=(oh(p)+u)/a(),Wd(g,f*r),l.length=e.length,_=!1}(t.items,oh(d),s())})
var m=US()
Yh(m,0,"svelte-13thbeo")
var y=of(m)
Yh(y,0,"svelte-13thbeo"),jh(y,21,()=>oh(f),e=>e.index,(e,n)=>{var r=HS()
Yh(r,0,"svelte-13thbeo")
var i=of(r),s=e=>{var r=Eh()
Uh(af(r),()=>t.children,()=>({item:oh(n).data})),Ch(e,r)},o=e=>{Ch(e,xh("Missing template"))}
Rh(i,e=>{t.children?e(s):e(o,!1)}),Ch(e,r)}),Cp(y,e=>Wd(u,e),()=>oh(u)),Cp(m,e=>Wd(c,e),()=>oh(c)),bf(()=>{Zh(m,`height: ${i()??""};`),Zh(y,`padding-top: ${oh(p)??""}px; padding-bottom: ${oh(g)??""}px;`)}),vh("scroll",m,async function(){const{scrollTop:e}=oh(c)
for(let e=0;e<n.length;e+=1)l[o()+e]=s()||n[e].offsetHeight
let i=0,u=0
for(;i<t.items.length;){const t=l[i]||r
if(u+t>e){o(i),Wd(p,u,!0)
break}u+=t,i+=1}for(;i<t.items.length&&(u+=l[i]||r,i+=1,!(u>e+oh(d))););a(i)
const f=t.items.length-a()
for(r=u/a();i<t.items.length;)l[i++]=r
Wd(g,f*r)}),function(e,t,n){var r=xp.observe(e,()=>n(e[t]))
mf(()=>(lh(()=>n(e[t])),r))}(m,"offsetHeight",e=>Wd(d,e)),Ch(e,m),rd()}const WS={}
let zS=-1
function VS(e,t){iu(3,t.func,[e])}function QS(e,t){if(WS[e])return WS[e].forEach(sg(VS,t)),!0}function KS(e,t){WS[e]||(WS[e]=[]),zS+=1
const n=zS.toString()
return WS[e].push({token:n,func:t}),n}function JS(e,t){return WS[e]?WS[e][0].token:KS(e,t)}async function YS(e=-1,t=1,n=[]){const r=await function(e,t,n){return xk({subcmd:"log",log_id:e,latest:t,limit:n})}(e,t,1e3)
if(!r?.s)return void QS("guildLog-progress","Server Error.")
QS("guildLog-progress")
const i=n.concat(r.r.logs)
return 1e3!==r.r.logs.length?i:YS(r.r.logs[0].id,0,i)}var XS=Sh('<button class="modal-close svelte-jhpi06" type="button">×</button>')
mh(["click"])
var ZS=Sh('<div class="modal-title svelte-mgjzgm"><!> <!></div> <div class="modal-content svelte-mgjzgm"><!></div>',1)
function ex(e,t){nd(t,!0)
let n=Np(t,"visible",3,!0),r=Ud(void 0),i=Ud(void 0)
Dp(()=>{Cg(oh(i),oh(r))}),Iw(e,{get close(){return t.close},get visible(){return n()},get modal(){return oh(r)},set modal(e){Wd(r,e,!0)},children:(e,n)=>{var r=ZS(),s=af(r),o=of(s)
Uh(o,()=>t.title??yu),function(e,t){var n=XS()
n.__click=function(...e){t.close?.apply(this,e)},Ch(e,n)}(lf(o,2),{get close(){return t.close}}),Cp(s,e=>Wd(i,e),()=>oh(i)),Uh(of(lf(s,2)),()=>t.children??yu),Ch(e,r)},$$slots:{default:!0}}),rd()}var tx=Sh('<button type="button" class="svelte-mmp9jk"><!></button>')
function nx(e,t){let n=Np(t,"disabled",3,0)
var r=tx()
r.__click=function(...e){t.onclick?.apply(this,e)},Uh(of(r),()=>t.children??yu),bf(()=>r.disabled=n()),Ch(e,r)}mh(["click"])
var rx=Sh('<span class="svelte-1amp3b0">[<!>]</span>')
function ix(e,t){var n=rx()
nx(lf(of(n)),{get onclick(){return t.onclick},children:(e,n)=>{var r=Eh()
Uh(af(r),()=>t.children??yu),Ch(e,r)},$$slots:{default:!0}}),Ch(e,n)}function sx(e,t,n){t(),n.cbChange()}var ox=Sh('<div class="filter-header svelte-1tfrwgn"><div class="filters svelte-1tfrwgn"><div class="front svelte-1tfrwgn"><span>Filters:</span></div> <div><label>Potions: <input type="checkbox"/></label></div> <div><label>Store/Recalls: <input type="checkbox"/></label></div> <div><label>Relics: <input type="checkbox"/></label></div> <div><label>Mercenaries: <input type="checkbox"/></label></div> <div><label>Group Combats: <input type="checkbox"/></label></div> <div><!></div> <div><label>Donations: <input type="checkbox"/></label></div> <div><label>Rankings: <input type="checkbox"/></label></div> <div><label>GvGs: <input type="checkbox"/></label></div> <div><label>Tag/UnTags: <input type="checkbox"/></label></div> <div><label>Titans: <input type="checkbox"/></label></div> <div><label>Other: <input type="checkbox"/></label></div></div> <div class="button-row svelte-1tfrwgn"><div></div> <div class="buttons svelte-1tfrwgn"><div><!></div> <div><!></div> <div><!></div></div> <div class="search-box svelte-1tfrwgn"><label>Search: <span class="search-wrapper svelte-1tfrwgn"><input type="text" class="svelte-1tfrwgn"/> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></span></label></div></div></div>')
function ax(e){return ny(new Date(1e3*e))}function lx(e){return Ov({cmd:"combat",subcmd:"view",combat_id:e})}mh(["change"])
const cx="fsh_pvpCombat"
let ux=null,dx={}
const fx={}
async function hx(){const e=await Y_(cx)
return dx=e?(e?.lastCheck??0)<wa()?function(e){var t
const n={...jm(Og(e).filter((t=ka(),([e,n])=>"lastCheck"===e||n?.logTime>t))),lastCheck:ya()}
return X_(cx,n),n}(e):e:{lastCheck:ya()},dx}async function px(e,t){fx[t]=Av(lx,0,t)
const n=await fx[t]
if(n?.s)return dx[t]={...n,logTime:e},X_(cx,dx),n
delete fx[t]}async function gx(e,t){ux||(ux=hx())
const n=await ux
return n[t]?n[t]:fx[t]?fx[t]:px(e,t)}function _x(){return e={subcmd2:"view"},xk({subcmd:"recruit",...e})
var e}var vx=Sh('<i class="fas fa-envelope" aria-hidden="true"></i>'),mx=Sh('<a class="svelte-6j0lyo"> </a>'),yx=Sh('[ <a class="svelte-6j0lyo"><img class="svelte-6j0lyo"/> </a> ]',1),bx=Sh("<!> <!>",1),wx=Sh('<span class="action-buttons svelte-6j0lyo">[ <!> | <!> ]</span>'),kx=Sh('<div class="rel svelte-6j0lyo"> </div>'),Sx=Sh('<div class="rel svelte-6j0lyo"><span class="fshSpinner recruit-spinner svelte-6j0lyo"></span></div>'),xx=Sh('<!> <span class="action-buttons svelte-6j0lyo">[ <!> | <!> | <!> | <!> ]</span>',1),Ex=Sh('<span class="action-buttons svelte-6j0lyo">[ <!> ]</span>'),Cx=Sh('<div><a class="svelte-6j0lyo"> </a>\'s group looted the item \'<span class="fshGreen"> </span>\'</div>'),Tx=Sh("<!> <!> <!>",1),Px=Sh("<div><div><!></div> <div><!></div> <div><!> <!></div></div>")
function $x(e,t){nd(t,!0)
let n=Np(t,"groupCombatItems",3,null),r=Np(t,"hideNonPlayerGuildLogMessages",3,null),i=Np(t,"logEntry",3,null),s=Ud(Kd(Promise.resolve())),o=Ud("waiting")
function a(e){$g("Guild Log",e)}const l=e=>e
function c(e){const t=e.msg.attachments?.filter(e=>0===e.type)
return t?.length&&!t.filter(({data:{id:e}})=>e===S_()).length}async function u(e,t){a(t),Wd(s,_x(),!0)
const n=await oh(s)
if(n?.s&&Gc(n?.r)){const r=n.r.find(({player:{id:t}})=>t===e.id)
r?.id?zv(`${rl}recruit&subcmd2=${t}&id=${r.id}`):Wd(o,"gone")}else Wd(o,"error")}var d=Px()
let f
var h=of(d)
let p
var g=of(h),_=e=>{Ch(e,vx())}
Rh(g,e=>{i().time&&e(_)})
var v=lf(h,2)
let m
var y=of(v),b=e=>{var t=xh()
bf(e=>Ph(t,e),[()=>ax(i().time)]),Ch(e,t)}
Rh(y,e=>{i().time&&e(b)})
var w=lf(v,2)
let k
var S=of(w)
jh(S,17,()=>i().msg.text.split(/<link=a(\d)><\/link>/).filter(l),Ah,(e,t)=>{var n=Eh(),r=af(n),s=e=>{var n=bx(),r=af(n),s=e=>{var n=mx(),r=of(n)
bf(()=>{op(n,"href",`${Ka??""}${i().msg.attachments[oh(t)].data.id??""}`),Ph(r,i().msg.attachments[oh(t)].data.name)}),Ch(e,n)}
Rh(r,e=>{0===i().msg.attachments[oh(t)].type&&e(s)})
var o=lf(r,2),a=e=>{var n=yx(),r=lf(af(n)),s=of(r),o=lf(s,1,!0)
bf(()=>{op(r,"href",`${ll??""}${i().msg.attachments[oh(t)].data.id??""}`),op(s,"src",`${Ca??""}guilds/${i().msg.attachments[oh(t)].data.id??""}_mini.png`),op(s,"alt",i().msg.attachments[oh(t)].data.name),Ph(o,i().msg.attachments[oh(t)].data.name)}),Ch(e,n)}
Rh(o,e=>{1===i().msg.attachments[oh(t)].type&&e(a)}),Ch(e,n)},o=e=>{var n=xh()
bf(()=>Ph(n,oh(t))),Ch(e,n)}
Rh(r,e=>{1!==oh(t).length||qm(Number(oh(t)))?e(o,!1):e(s)}),Ch(e,n)})
var x=lf(S,2),E=e=>{var t=Tx(),r=af(t)
jh(r,17,()=>i().msg.attachments.filter(({type:e})=>0===e),Ah,(e,t)=>{let n=()=>oh(t).data
var r=xx(),l=af(r),c=e=>{var t=Eh()
Oh(af(t),()=>oh(s),e=>{Ch(e,Sx())},e=>{var t=Eh(),r=af(t),i=e=>{var t=wx(),r=lf(of(t))
nx(r,{onclick:()=>u(n(),"acceptjoin"),children:(e,t)=>{Ch(e,xh("Accept"))},$$slots:{default:!0}}),nx(lf(r,2),{onclick:()=>u(n(),"denyjoin"),children:(e,t)=>{Ch(e,xh("Deny"))},$$slots:{default:!0}}),Ch(e,t)},s=e=>{var t=kx(),n=of(t)
bf(()=>Ph(n,oh(o))),Ch(e,t)}
Rh(r,e=>{"waiting"===oh(o)?e(i):e(s,!1)}),Ch(e,t)}),Ch(e,t)}
Rh(l,e=>{21===i().type&&e(c)})
var d=lf(l,2),f=lf(of(d))
nx(f,{onclick:()=>function(e){a("reply"),window.openQuickMsgDialog(e.name)}(n()),children:(e,t)=>{Ch(e,xh("Reply"))},$$slots:{default:!0}})
var h=lf(f,2)
nx(h,{onclick:()=>function(e){a("buff"),Zb(e.id)}(n()),children:(e,t)=>{Ch(e,xh("Buff"))},$$slots:{default:!0}})
var p=lf(h,2)
nx(p,{onclick:()=>function(e){a("send"),zv(`${Ya}${e.name}`)}(n()),children:(e,t)=>{Ch(e,xh("Send"))},$$slots:{default:!0}}),nx(lf(p,2),{onclick:()=>function(e){a("trade"),zv(`${Xa}${e.name}`)}(n()),children:(e,t)=>{Ch(e,xh("Trade"))},$$slots:{default:!0}}),Ch(e,r)})
var l=lf(r,2)
jh(l,17,()=>i().msg.attachments.filter(({type:e})=>11===e),Ah,(e,t)=>{var n=Ex()
nx(lf(of(n)),{onclick:()=>function(e){a("combat"),zv(`${qa}combat&subcmd=view&combat_id=${e}`)}(oh(t).data),children:(e,t)=>{Ch(e,xh("View Combat"))},$$slots:{default:!0}}),Ch(e,n)})
var c=lf(l,2),d=e=>{var t=Eh()
Oh(af(t),()=>gx(i().time,i().msg.attachments[0].data),null,(e,t)=>{var n=Eh(),r=af(n),i=e=>{var n=Cx(),r=of(n),i=of(r),s=of(lf(r,2))
bf(()=>{op(r,"href",`${Ka??""}${oh(t).r.combat.attacker.group.players[0].id??""}`),Ph(i,oh(t).r.combat.attacker.group.players[0].name),Ph(s,oh(t)?.r?.combat?.items?.[0]?.n)}),Ch(e,n)}
Rh(r,e=>{oh(t)?.r?.combat?.items?.[0]?.n&&e(i)}),Ch(e,n)}),Ch(e,t)}
Rh(c,e=>{17===i().type&&n()&&i().msg.text.includes("victorious")&&e(d)}),Ch(e,t)}
Rh(x,e=>{i().msg?.attachments?.length&&e(E)}),bf((e,t,n,r)=>{f=Yh(d,0,"row-container svelte-6j0lyo",null,f,e),p=Yh(h,0,"svelte-6j0lyo",null,p,t),m=Yh(v,0,"svelte-6j0lyo",null,m,n),k=Yh(w,0,"svelte-6j0lyo",null,k,r)},[()=>({"not-self":r()&&c(i()),separator:i().index}),()=>({old:i().old,new:i().new}),()=>({old:i().old,new:i().new}),()=>({old:i().old,new:i().new})]),Ch(e,d),rd()}const Lx=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to","has added tags to","has removed some tags from"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited [,0-9]+ gold into the guild bank/,/deposited [,0-9]+ Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled","has been stripped of their rank by",/has revoked .+'s invite to the guild/,"has been rejected from joining the guild"],[/resulted in .* with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with","has initiated a conflict with your guild","is participating in the conflict against"],["Titan Reward item","from your guild's contribution to the defeat of the titan","7 day cooldown has been activated on your guild for this titan"]]
function Ix(e,t){return mc(t)?e.includes(t):t.test(e)}function Mx(e,t){return t.some(sg(Ix,e))}function Ox(e){const t=Lx.findIndex(sg(Mx,e))
return-1===t?0:t}var Rx=Sh('<span class="white svelte-1u02a2w">(Guild Log messages not involving self are dimmed!)</span>'),Fx=Sh('<div class="vs svelte-1u02a2w"><!></div>'),Ax=Sh(" <br/>",1),jx=Sh('<div class="content svelte-1u02a2w"><!> <div class="row-container svelte-1u02a2w"><div class="innerColumnHeader svelte-1u02a2w">&nbsp;</div> <div class="innerColumnHeader svelte-1u02a2w">Date</div> <div class="innerColumnHeader svelte-1u02a2w">Message <!></div></div> <!></div>')
function Nx(e,t){nd(t,!0)
let n=Np(t,"visible",15,!0),r=Ud(Kd(Array(11).fill(!0))),i=Ud(null),s=Ud(null),o=Ud(Kd([])),a=Ud(Kd(Promise.resolve())),l=Ud(Kd([])),c=Ud("")
const u=_d(()=>oh(o).filter(({fshType:e})=>oh(r)[e]).filter(({searchable:e})=>""===oh(c)||e.includes(oh(c).toLowerCase())).map(_)),d=_d(()=>oh(u).length?oh(u):[{index:0,msg:{text:""}}])
let f=0,h=null,p=null,g=null
const _=(e,t)=>({...e,index:t}),v=({msg:e})=>e.text.replace(/<link=a(\d)><\/link>/g,(t,n)=>e.attachments[n].data.name),m=e=>({...e,fshType:Ox(e.msg.text),new:h&&e.time>p,old:h&&(g-e.time)/60>20&&e.time<=p,searchable:v(e).toLowerCase()}),y=(e,t)=>t.time-e.time
function b(e){$g("Guild Log",e)}function w(){b("cbChange")}function k(){b("selectAll")}function S(){b("selectNone")}function x(){b("oldGuildLog"),zv(il)}function E(){b("clearSearch"),Wd(c,"")}function C(e){Wd(l,oh(l).concat(e),!0)}function T(e){e?C(e):(f+=1,C(`chunk ${f}`))}async function P(){Wd(l,["Loading..."],!0),Wd(o,[],!0),g=(new Date).setUTCSeconds(0,0)/1e3,p=_c("lastModalGuildLogCheck")??g,wc("lastModalGuildLogCheck",g),h=_c("enableLogColoring"),Wd(i,_c("groupCombatItems"),!0),Wd(s,_c("hideNonPlayerGuildLogMessages"),!0),f=0,JS("guildLog-progress",T)
const e=await Av(YS)
e&&Wd(o,e.toSorted(y).map(m),!0)}function $(){Wd(a,P(),!0)}gf(()=>{n()&&$()})
{const t=e=>{Ch(e,xh("Guild Log"))}
ex(e,{close:function(){b("close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=jx(),o=of(n)
!function(e,t){nd(t,!0)
let n=Np(t,"checks",31,()=>Kd(Array(11).fill(!0))),r=Np(t,"searchValue",15,"")
function i(){X_("fsh_LogChecks",Xu(n()))}function s(e){n(n().map(()=>e)),i()}!async function(){n(await Y_("fsh_LogChecks")??Array(11).fill(!0))}()
var o=ox(),a=of(o),l=lf(of(a),2),c=of(l),u=lf(of(c))
u.__change=[sx,i,t],u.value=u.__value="1"
var d=lf(l,2),f=of(d),h=lf(of(f))
h.__change=[sx,i,t],h.value=h.__value="2"
var p=lf(d,2),g=of(p),_=lf(of(g))
_.__change=[sx,i,t],_.value=_.__value="4"
var v=lf(p,2),m=of(v),y=lf(of(m))
y.__change=[sx,i,t],y.value=y.__value="5"
var b=lf(v,2),w=of(b),k=lf(of(w))
k.__change=[sx,i,t],k.value=k.__value="6"
var S=lf(b,2)
nx(of(S),{get onclick(){return t.oldGuildLog},children:(e,t)=>{Ch(e,xh("Old Guild Log"))},$$slots:{default:!0}})
var x=lf(S,2),E=of(x),C=lf(of(E))
C.__change=[sx,i,t],C.value=C.__value="7"
var T=lf(x,2),P=of(T),$=lf(of(P))
$.__change=[sx,i,t],$.value=$.__value="8"
var L=lf(T,2),I=of(L),M=lf(of(I))
M.__change=[sx,i,t],M.value=M.__value="9"
var O=lf(L,2),R=of(O),F=lf(of(R))
F.__change=[sx,i,t],F.value=F.__value="3"
var A=lf(O,2),j=of(A),N=lf(of(j))
N.__change=[sx,i,t],N.value=N.__value="10"
var D=of(lf(A,2)),B=lf(of(D))
B.__change=[sx,i,t],B.value=B.__value="0"
var q=lf(a,2),H=lf(of(q),2),U=of(H)
ix(of(U),{onclick:function(){s(!0),t.selectAll()},children:(e,t)=>{Ch(e,xh("Select All"))}})
var G=lf(U,2)
ix(of(G),{onclick:function(){s(!1),t.selectNone()},children:(e,t)=>{Ch(e,xh("Select None"))}}),ix(of(lf(G,2)),{get onclick(){return t.refresh},children:(e,t)=>{Ch(e,xh("Refresh"))}})
var W=of(lf(H,2)),z=lf(of(W)),V=of(z),Q=lf(V,2)
{let e=_d(()=>!r())
Fh(Q,()=>({"--button-deco":"none"})),nx(Q.lastChild,{get disabled(){return oh(e)},get onclick(){return t.clearSearch},children:(e,t)=>{Ch(e,xh("×"))},$$slots:{default:!0}})}bp(u,()=>n()[1],e=>n(n()[1]=e,!0)),bp(h,()=>n()[2],e=>n(n()[2]=e,!0)),bp(_,()=>n()[4],e=>n(n()[4]=e,!0)),bp(y,()=>n()[5],e=>n(n()[5]=e,!0)),bp(k,()=>n()[6],e=>n(n()[6]=e,!0)),bp(C,()=>n()[7],e=>n(n()[7]=e,!0)),bp($,()=>n()[8],e=>n(n()[8]=e,!0)),bp(M,()=>n()[9],e=>n(n()[9]=e,!0)),bp(F,()=>n()[3],e=>n(n()[3]=e,!0)),bp(N,()=>n()[10],e=>n(n()[10]=e,!0)),bp(B,()=>n()[0],e=>n(n()[0]=e,!0)),vp(V,r),Ch(e,o),rd()}(o,{cbChange:w,clearSearch:E,oldGuildLog:x,refresh:$,selectAll:k,selectNone:S,get checks(){return oh(r)},set checks(e){Wd(r,e,!0)},get searchValue(){return oh(c)},set searchValue(e){Wd(c,e,!0)}})
var u=lf(o,2),f=lf(of(u),4),h=lf(of(f)),p=e=>{Ch(e,Rx())}
Rh(h,e=>{oh(s)&&e(p)}),Oh(lf(u,2),()=>oh(a),e=>{var t=Eh()
jh(af(t),17,()=>oh(l),Ah,(e,t)=>{var n=Ax(),r=af(n)
bf(()=>Ph(r,`${oh(t)??""} `)),Ch(e,n)}),Ch(e,t)},e=>{var t=Fx()
{const e=(e,t)=>{$x(e,{get groupCombatItems(){return oh(i)},get hideNonPlayerGuildLogMessages(){return oh(s)},get logEntry(){return t?.().item}})}
GS(of(t),{get items(){return oh(d)},children:e,$$slots:{default:!0}})}Ch(e,t)},(e,t)=>{var n=xh()
bf(()=>Ph(n,oh(t))),Ch(e,n)}),Ch(e,n)},$$slots:{title:!0,default:!0}})}rd()}const Dx=Kd({visible:!0})
let Bx=0
var qx=Object.freeze({__proto__:null,default:function(){Bx?Dx.visible=!0:Bx=$h(Nx,{props:Dx,target:document.body})}})
function Hx(){return xk({subcmd:"fetchinv"})}function Ux(){return Av(Hx)}function Gx(e){return xk({subcmd:"inventory",...e})}function Wx(){return Gx({subcmd2:"report"})}function zx(){return Av(Wx)}function Vx(e,t,[n,r]){xc(r)&&null!==r?e[n]=t(r.constructor(),r):e[n]=r}function Qx(e,t){return xc(t)&&Og(t).forEach(sg(Vx,e,Qx)),e}function Kx(e){return e?.constructor&&Qx(e.constructor(),e)}function Jx(e,t,n){const r=(e=>Math.max(Math.min(e,100),0))((e-t)/(n-t)*100)
let i=255,s=255
r<50?s=Math.round(5.1*r):i=Math.round(510-5.1*r)
const o=(e=>`000000${e.toString(16)}`.slice(-6))(65536*i+256*s+0)
return`#${o}`}var Yx=(e,t,n,r)=>{t("backpack"),n(),r()},Xx=(e,t,n,r)=>{t("guildstore"),n(),r()},Zx=(e,t,n)=>{t("inventory"),n()},eE=(e,t)=>{oh(t)||Wd(t,!0)},tE=(e,t,n)=>{t("mapping"),n()},nE=(e,t)=>{oh(t)||Wd(t,!0)},rE=(e,t,n)=>{t("thresholds"),n()},iE=(e,t)=>{oh(t)||Wd(t,!0)},sE=Sh('<div class="svelte-d6ps8u"> </div> <div class="svelte-d6ps8u"> </div>',1),oE=Sh('<div class="inventory svelte-d6ps8u"><div class="inventory-grid-container svelte-d6ps8u"></div></div>'),aE=(e,t,n)=>{t("mapped"),n()},lE=Sh("<option> </option>"),cE=Sh("<option> </option>"),uE=(e,t,n)=>{t("ignore"),n()},dE=e=>e.target.blur(),fE=Sh('<div class="svelte-d6ps8u"> </div> <div class="svelte-d6ps8u"><select class="svelte-d6ps8u"><!></select></div> <div class="svelte-d6ps8u"><input title="Ignore" type="checkbox" class="svelte-d6ps8u"/></div>',1),hE=(e,t,n)=>{t("ignore-all"),n()},pE=(e,t,n)=>{t("reset"),n()},gE=Sh('<div class="mapping svelte-d6ps8u"><div class="mapping-grid-container svelte-d6ps8u"><!> <div class="svelte-d6ps8u"></div> <div class="svelte-d6ps8u"><button class="custombutton svelte-d6ps8u" type="button">Ignore All</button> <button class="custombutton svelte-d6ps8u" type="button">Reset</button></div></div></div>'),_E=(e,t,n)=>{t("minpoint"),n()},vE=(e,t,n)=>{t("maxpoint"),n()},mE=Sh('<div class="thresholds svelte-d6ps8u">Min: <input max="999" min="0" type="number" class="svelte-d6ps8u"/> Max: <input max="999" min="0" type="number" class="svelte-d6ps8u"/></div>'),yE=Sh('<div class="filters svelte-d6ps8u"><label class="svelte-d6ps8u"><input type="checkbox"/> Member Backpacks</label> <label class="svelte-d6ps8u"><input type="checkbox"/> Guild Store</label></div> <div class="pot-report svelte-d6ps8u"><input class="tab-ctrl svelte-d6ps8u" id="pr-inv" type="checkbox"/> <label for="pr-inv" class="svelte-d6ps8u">Composed Potion Inventory</label> <input class="tab-ctrl svelte-d6ps8u" id="pr-map" type="checkbox"/> <label for="pr-map" class="svelte-d6ps8u">Mapping</label> <input class="tab-ctrl svelte-d6ps8u" id="pr-levels" type="checkbox"/> <label for="pr-levels" class="svelte-d6ps8u">Thresholds</label> <div class="panels svelte-d6ps8u"><!> <!> <!></div></div>',1),bE=Sh('<p style="color: red"> </p>'),wE=Sh('<div class="main svelte-d6ps8u"><!></div>')
function kE(e,t){nd(t,!0)
const n="fsh_potReport",r={inventory:!1,mapping:!1,thresholds:!1,potMap:[],minpoint:20,maxpoint:30,backpack:!0,guildstore:!0}
let i=Np(t,"visible",15,!0),s=Ud(null),o=Ud(!1),a=Ud(!1),l=Ud(!1),c=Ud(Kd([])),u=[],d=Ud(Kd([]))
const f=({b:e})=>13699===e,h=e=>Jx(e,oh(s).minpoint,oh(s).maxpoint),p=({ignore:e})=>!e,g=e=>({name:t})=>t===e,_=(e,t)=>Jv(e.n,t.n),v=({r:e})=>e,m=e=>$g("pot-report",e),y=({player:e,n:t})=>({loc:e?1:2,n:t}),b=()=>X_(n,Xu(oh(s))),w=e=>u.filter((e=>({n:t})=>e.some(g(t)))(e)).filter(({loc:e})=>oh(s).backpack||1!==e).filter(({loc:e})=>oh(s).guildstore||2!==e).map((e=>({loc:t,n:n})=>({loc:t,mapped:e.find(g(n)).mapped,n:n}))(e))
function k(){b(),Wd(c,function(){const e=oh(s).potMap.filter(p),t=w(e)
return Tm(e,"mapped").map((e=>({mapped:t})=>({name:t,count:e.filter(({mapped:e})=>e===t).length}))(t)).sort((e,t)=>Jv(e.name,t.name))}(),!0),Wd(d,oh(s).potMap.map(e=>({...e,waiting:!0})),!0)}function S(){oh(s).potMap=oh(d).map(({ignore:e,mapped:t,name:n})=>({ignore:e,mapped:t,name:n})),k()}function x(){oh(s).potMap=oh(s).potMap.map(e=>({...e,ignore:!0})),k()}function E(){oh(s).potMap=oh(s).potMap.map(e=>({...e,mapped:e.name,ignore:!1})),k()}async function C(){!async function(){Wd(s,await Y_(n)||Kx(r),!0),Wd(o,oh(s).inventory,!0),Wd(a,oh(s).mapping,!0),Wd(l,oh(s).thresholds,!0),oh(s).backpack=oh(s).backpack??r.backpack,oh(s).guildstore=oh(s).guildstore??r.guildstore}()
const e=await Ym([Ux(),zx()])
if(!Gc(e[0]?.r)||!Gc(e[1]?.r))throw new Error("Server Error")
u=(e=>e.flatMap(v).filter(f).map(y).sort(_))(e),oh(s).potMap=Tm(u,"n").map(({n:e})=>({name:e,mapped:oh(s)?.potMap?.find(g(e))?.mapped||e,ignore:oh(s)?.potMap?.find(g(e))?.ignore??!1})),k()}{const t=e=>{Ch(e,xh("Pot Report"))}
ex(e,{close:function(){m("close"),i(!1)},get visible(){return i()},title:t,children:(e,t)=>{var n=wE()
Oh(of(n),C,e=>{Ch(e,xh("Loading..."))},e=>{var t=yE(),n=af(t),r=of(n),i=of(r)
i.__change=[Yx,m,b,k]
var u=of(lf(r,2))
u.__change=[Xx,m,b,k]
var f=of(lf(n,2))
f.__change=[Zx,m,b],f.__click=[eE,o]
var p=lf(f,4)
p.__change=[tE,m,b],p.__click=[nE,a]
var g=lf(p,4)
g.__change=[rE,m,b],g.__click=[iE,l]
var _=of(lf(g,4)),v=e=>{var t=oE()
jh(of(t),21,()=>oh(c),Ah,(e,t)=>{let n=()=>oh(t).count
var r=sE(),i=af(r),s=of(i),o=lf(i,2)
let a
var l=of(o)
bf(e=>{Ph(s,oh(t).name),a=Zh(o,"",a,e),Ph(l,n())},[()=>({"background-color":h(n())})]),Ch(e,r)}),Ch(e,t)}
Rh(_,e=>{oh(o)&&e(v)})
var y=lf(_,2),w=e=>{var t=gE(),n=of(t),r=of(n)
jh(r,17,()=>oh(d),Ah,(e,t,n)=>{let r=()=>oh(t).name,i=()=>oh(t).mapped
var s=fE(),o=af(s),a=of(o),l=lf(o,2),c=of(l)
c.__change=[aE,m,S],c.__mousedown=()=>{oh(d)[n].waiting=!1}
var u=of(c),f=e=>{var t=lE(),n=of(t),r={}
bf(()=>{Ph(n,i()),r!==(r=i())&&(t.value=(t.__value=i())??"")}),Ch(e,t)},h=e=>{var t=Eh()
jh(af(t),17,()=>oh(d),Ah,(e,t)=>{let n=()=>oh(t).name
var r=cE(),s=of(r),o={}
bf(()=>{var e
e=r,i()===n()?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected"),Ph(s,n()),o!==(o=n())&&(r.value=(r.__value=n())??"")}),Ch(e,r)}),Ch(e,t)}
Rh(u,e=>{oh(t).waiting?e(f):e(h,!1)})
var p=of(lf(l,2))
p.__change=[uE,m,S],p.__click=[dE],bf(()=>{Ph(a,r()),op(c,"name",r())}),tp(c,()=>oh(d)[n].mapped,e=>oh(d)[n].mapped=e),bp(p,()=>oh(d)[n].ignore,e=>oh(d)[n].ignore=e),Ch(e,s)})
var i=of(lf(r,4))
i.__click=[hE,m,x],lf(i,2).__click=[pE,m,E],Ch(e,t)}
Rh(y,e=>{oh(a)&&e(w)})
var C=lf(y,2),T=e=>{var t=mE(),n=lf(of(t))
n.__input=[_E,m,k]
var r=lf(n,2)
r.__input=[vE,m,k],vp(n,()=>oh(s).minpoint,e=>oh(s).minpoint=e),vp(r,()=>oh(s).maxpoint,e=>oh(s).maxpoint=e),Ch(e,t)}
Rh(C,e=>{oh(l)&&e(T)}),bp(i,()=>oh(s).backpack,e=>oh(s).backpack=e),bp(u,()=>oh(s).guildstore,e=>oh(s).guildstore=e),bp(f,()=>oh(s).inventory,e=>oh(s).inventory=e),bp(p,()=>oh(s).mapping,e=>oh(s).mapping=e),bp(g,()=>oh(s).thresholds,e=>oh(s).thresholds=e),Ch(e,t)},(e,t)=>{var n=bE(),r=of(n)
bf(()=>Ph(r,oh(t).message)),Ch(e,n)}),Ch(e,n)},$$slots:{title:!0,default:!0}})}rd()}mh(["change","click","mousedown","input"])
const SE=Kd({visible:!0})
let xE=0
var EE=Object.freeze({__proto__:null,default:function(){xE?SE.visible=!0:xE=$h(kE,{props:SE,target:document.body})}})
function CE(e){return Yv({subcmd:"useitem",inventory_id:e})}function TE(e){return Av(CE,0,e)}function PE(){return p_({subcmd:"inventory"})}function $E(e,t,n,r){wc(t,n()),r.dispatchToggle()}var LE=Sh('<label><input type="checkbox" class="svelte-f8757j"/> Select items in ST</label>')
function IE(e,t){nd(t,!0)
let n=Np(t,"inSt",15,null)
const r="selectST"
n(_c(r))
var i=LE(),s=of(i)
s.__change=[$E,r,n,t],bp(s,n),Ch(e,i),rd()}function ME(e){return`${e.amount} x ${sc[e.type]}`}mh(["change"])
const OE=[[e=>e.components?.length,e=>`You successfully extracted 1 '${e.components?.[0].n}' component(s) from 1 resource(s).`],[e=>e.frags,e=>`You gained ${e.frags.map(ME).join(", ")} Fragments by opening the Fragment Stash.`],[e=>e.mailbox_items?.length,e=>`You received 1 x '${e.mailbox_items?.[0].n}' from the container.`],[()=>1,()=>"<You failed to extract any components from resource(s)."]]
function RE(e){return OE.find(([t])=>t(e))[1](e)}const FE=(e,t,n)=>`fetchitem.php?item_id=${t}&inv_id=${n}&t=1&p=${e}`
function AE(e,t,n,r){$g("quickExtract","toggleSelectMain"),wc(t,oh(n)),r()}function jE(e,t,n){$g("quickExtract","togglePrompts"),wc(t,oh(n))}var NE=Sh('<span class="fshRed"> </span>'),DE=Sh('<li class="svelte-g50cgg"><!></li>'),BE=Sh('<span class="fshSpinner fshSpinner12"></span>'),qE=Sh('<tr><td><!></td><td class="imgCol svelte-g50cgg"><span class="imgSpan tip-dynamic svelte-g50cgg"></span></td><td> </td></tr>'),HE=Sh('<tr><td colspan="3"><p style="color: red"> </p></td></tr>'),UE=Sh('<div class="svelte-g50cgg">Select which type of plants you wish to extract all of. Only select\n    extractable resources. <br/> <!>&nbsp; <label><input type="checkbox" class="svelte-g50cgg"/> Main Folder Only</label>&nbsp; <label><input type="checkbox" class="svelte-g50cgg"/> Disable Prompts</label>&nbsp; <!> <br/> <table class="svelte-g50cgg"><thead><tr><th class="actionCol svelte-g50cgg">Actions</th><th colspan="2">Items</th></tr></thead><tbody><tr><td colspan="3"><ol></ol></td></tr><!></tbody></table></div>')
function GE(e,t){nd(t,!0)
let n=Np(t,"visible",15,!0)
const r="selectMain",i="disableQuickExtractPrompts"
let s=Ud(null),o=null,a=Ud(null),l=Ud(Kd(_c(r))),c=Ud(Kd(_c(i))),u=null,d=Ud(null),f=Ud(Kd([]))
const h=e=>"Zombie Coffin"===e.item_name||12===e.type||16===e.type,p=(e,t)=>Jv(e.item_name,t.item_name),g=e=>oh(a)||!e.is_in_st,_=e=>!oh(l)||-1===e.folder_id
function v(){Wd(d,Gc(u)&&function(e,t){return Tm(t,"item_name").map(n=>{return{...n,count:t.filter(e=>e.item_name===n.item_name).length,delPending:!1,extractIds:t.filter(e=>e.item_name===n.item_name).map(e=>e.inv_id),style:(r=n.item_id,`background-image: url(${Ca}items/${r}.gif)`),tip:FE(e,n.item_id,n.inv_id)}
var r})}(o,u.filter(g).filter(_)),!0)}function m(){$g("quickExtract","toggleSelectST"),v()}async function y(){const e=await PE()
o=e?.player_id,u=e?.items?.filter(h).sort(p),v()}function b(){$g("quickExtract","refresh"),Wd(f,[],!0),Wd(s,y(),!0)}let w
async function k(e){const t=await TE(e);(function(e){return e?.s||w===e?.e?.message||(w=e?.e?.message,Wd(f,[...oh(f),e?.e?.message],!0)),e?.s})(t)&&(Wd(f,[...oh(f),RE(t.r)],!0),u=u.filter(t=>t.inv_id!==e))}gf(()=>{n()&&(Wd(f,[],!0),Wd(s,y(),!0))})
{const t=e=>{Ch(e,xh("Quick Extract"))}
ex(e,{close:function(){$g("quickExtract","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=UE(),o=lf(of(n),3)
IE(o,{dispatchToggle:m,get inSt(){return oh(a)},set inSt(e){Wd(a,e,!0)}})
var u=lf(o,2),h=of(u)
h.__change=[AE,r,l,v]
var p=lf(u,2),g=of(p)
g.__change=[jE,i,c]
var _=lf(p,2)
ix(_,{onclick:b,children:(e,t)=>{Ch(e,xh("Refresh"))}})
var y=lf(_,4),w=lf(of(y)),S=of(w),x=of(S)
jh(of(x),21,()=>oh(f),Ah,(e,t)=>{var n=DE(),r=of(n),i=e=>{var n=NE(),r=of(n)
bf(e=>Ph(r,e),[()=>oh(t).slice(1)]),Ch(e,n)},s=e=>{var n=xh()
bf(()=>Ph(n,oh(t))),Ch(e,n)}
Rh(r,e=>{oh(t).startsWith("<")?e(i):e(s,!1)}),Ch(e,n)}),Oh(lf(S),()=>oh(s),null,e=>{var t=Eh()
jh(af(t),17,()=>oh(d),Ah,(e,t,n)=>{let r=()=>oh(t).count,i=()=>oh(t).delPending
var s=qE(),o=of(s)
let a
var l=of(o),u=e=>{var t=Eh(),s=af(t),o=e=>{Ch(e,BE())},a=e=>{nx(e,{onclick:()=>async function(e){$g("quickExtract","extract",oh(c)),(oh(c)||await Nw("Are you sure you want to extract all similar items?"))&&(oh(d)[e].delPending=!0,await Ym(oh(d)[e].extractIds.map(k)),oh(d)[e]?.count&&(oh(d)[e].count=0))}(n),children:(e,t)=>{var n=xh()
bf(()=>Ph(n,`Extract ${r()??""}`)),Ch(e,n)},$$slots:{default:!0}})}
Rh(s,e=>{i()?e(o):e(a,!1)}),Ch(e,t)},f=e=>{Ch(e,xh("Done"))}
Rh(l,e=>{r()?e(u):e(f,!1)})
var h=lf(o),p=of(h),g=of(lf(h))
bf(e=>{a=Yh(o,0,"svelte-g50cgg",null,a,e),op(p,"data-tipped",oh(t).tip),Zh(p,oh(t).style),Ph(g,oh(t).item_name)},[()=>({delPending:i()})]),Ch(e,s)}),Ch(e,t)},(e,t)=>{var n=HE(),r=of(n),i=of(r),s=of(i)
bf(()=>Ph(s,oh(t).message)),Ch(e,n)}),bp(h,()=>oh(l),e=>Wd(l,e)),bp(g,()=>oh(c),e=>Wd(c,e)),Ch(e,n)},$$slots:{title:!0,default:!0}})}rd()}mh(["change"])
const WE=Kd({visible:!0})
let zE=0
var VE=Object.freeze({__proto__:null,default:function(){zE?WE.visible=!0:zE=$h(GE,{props:WE,target:document.body})}})
function QE(e,t){return`<a href="${Ka}${e}">${t}</a>`}var KE=Sh("<input/>"),JE=Sh("<option> </option>"),YE=Sh("<select><option> </option><!></select>"),XE=Sh("<th><!></th>"),ZE=Sh("<th></th>"),eC=Sh('<tr class="svelte-dsaf7t"><!><!></tr>'),tC=(e,t,n)=>t(e,oh(n)),nC=Sh('<th tabindex="0"> <!></th>'),rC=Sh("<th></th>"),iC=Sh("<tr><!><!></tr>"),sC=(e,t,n)=>t(e,oh(n)),oC=(e,t,n,r)=>t(e,oh(n),oh(r).key),aC=Sh("<td><!></td>"),lC=(e,t,n)=>t(e,oh(n)),cC=Sh('<td><span class="isClickable svelte-dsaf7t" tabindex="0" role="button"><!></span></td>'),uC=Sh("<tr><td><!></td></tr>"),dC=Sh("<tr><!><!></tr> <!>",1),fC=Sh("<table><thead><!><!></thead><tbody></tbody></table>")
function hC(e,t){nd(t,!0)
let n=Np(t,"sortOrders",19,()=>[1,-1]),r=Np(t,"sortBy",15,""),i=Np(t,"sortOrder",31,()=>Kd(n()?.[0]||1)),s=Np(t,"filterSelections",31,()=>Kd({})),o=Np(t,"expanded",31,()=>Kd([])),a=Np(t,"selected",31,()=>Kd([])),l=Np(t,"expandRowKey",3,null),c=Np(t,"rowKey",19,l),u=Np(t,"expandSingle",3,!1),d=Np(t,"selectSingle",3,!1),f=Np(t,"selectOnClick",3,!1),h=Np(t,"iconAsc",3,"▲"),p=Np(t,"iconDesc",3,"▼"),g=Np(t,"iconSortable",3,""),_=Np(t,"iconExpand",3,"▼"),v=Np(t,"iconExpanded",3,"▲"),m=Np(t,"showExpandIcon",3,!1),y=Np(t,"classNameTable",3,""),b=Np(t,"classNameThead",3,""),w=Np(t,"classNameTbody",3,""),k=Np(t,"classNameSelect",3,""),S=Np(t,"classNameInput",3,""),x=Np(t,"classNameRow",3,null),E=Np(t,"classNameCell",3,""),C=Np(t,"classNameRowSelected",3,null),T=Np(t,"classNameRowExpanded",3,null),P=Np(t,"classNameExpandedContent",3,""),$=Np(t,"classNameCellExpand",3,""),L=Np(t,"clickCol",3,()=>{}),I=Np(t,"clickRow",3,()=>{}),M=Np(t,"clickExpand",3,()=>{}),O=Np(t,"clickCell",3,()=>{}),R=Ud(()=>"")
if(!Array.isArray(o()))throw"'expanded' needs to be an array"
if(!Array.isArray(a()))throw"'selection' needs to be an array"
null!==l()&&console.warn("'expandRowKey' is deprecated in favour of 'rowKey'"),C()&&!c()&&console.error("'rowKey' is needed to use 'classNameRowSelected'")
let F=t.columns.some(e=>!e.hideFilterHeader&&(void 0!==e.filterOptions||void 0!==e.searchValue)),A=Ud(Kd({}))
const j=_d(()=>Object.fromEntries(t.columns.map(e=>[e.key,e])))
let N=_d(()=>(m()?1:0)+t.columns.length)
const D=_d(()=>t.rows.filter(e=>Object.keys(s()).every(t=>{let n=null
if(void 0===oh(j)[t])return!0
if(oh(j)[t]?.searchValue){if(""===s()[t])return!0
1===oh(j)[t].searchValue.length?n=(oh(j)[t].searchValue(e)+"").toLocaleLowerCase().indexOf((s()[t]+"").toLocaleLowerCase())>=0:2===oh(j)[t].searchValue.length&&(n=!!oh(j)[t].searchValue(e,s()[t]+""))}else n=!1
return n||void 0===s()[t]||s()[t]===("function"==typeof oh(j)[t].filterValue?oh(j)[t].filterValue(e):oh(j)[t].value(e))})).map(e=>Object.assign({},e,{$sortOn:oh(R)(e),$expanded:null!==c()&&o().indexOf(e[c()])>=0,$selected:null!==c()&&a().indexOf(e[c()])>=0})).sort((e,t)=>r()?e.$sortOn>t.$sortOn?i():e.$sortOn<t.$sortOn?-i():0:0)),B=e=>[].concat(e).filter(e=>null!==e&&"string"==typeof e&&""!==e).join(" ")
gf(()=>{let e=oh(j)[r()]
void 0!==e&&!0===e.sortable&&"function"==typeof e.value&&Wd(R,t=>e.value(t))}),gf(()=>{F&&t.columns&&t.rows&&(Wd(A,{},!0),t.columns.forEach(e=>{"function"==typeof e.filterOptions?oh(A)[e.key]=e.filterOptions(t.rows):Array.isArray(e.filterOptions)&&(oh(A)[e.key]=e.filterOptions.map(e=>({name:e,value:e})))}))})
const q=(e,t)=>{t.sortable&&(i(t.key===r()?n()[(n().findIndex(e=>e===i())+1)%n().length]:n()[0]),r(i()?t.key:void 0)),L()({event:e,col:t,key:t.key})},H=(e,t)=>{f()&&(d()?a().includes(t[c()])?a([]):a([t[c()]]):a().includes(t[c()])?a(a().filter(e=>e!=t[c()])):a([...a(),t[c()]].sort())),I()({event:e,row:t})},U=(e,t)=>{t.$expanded=!t.$expanded
const n=t[c()]
u()&&t.$expanded?o([n]):u()?o([]):t.$expanded?o([...o(),n]):o(o().filter(e=>e!=n)),M()({event:e,row:t})},G=(e,t,n)=>{O()({event:e,row:t,key:n})}
var W=fC(),z=of(W),V=of(z),Q=e=>{var n=eC(),r=of(n)
jh(r,17,()=>t.columns,Ah,(e,t)=>{var n=XE(),r=of(n),i=e=>{var n=KE()
bf(e=>{Yh(n,0,e,"svelte-dsaf7t"),op(n,"placeholder",oh(t).filterPlaceholder)},[()=>Vh(B(S()))]),vp(n,()=>s()[oh(t).key],e=>s(s()[oh(t).key]=e,!0)),Ch(e,n)},o=e=>{var n=Eh(),r=af(n),i=e=>{var n=YE(),r=of(n),i=of(r)
r.value=(r.__value=void 0)??"",jh(lf(r),17,()=>oh(A)[oh(t).key],Ah,(e,t)=>{var n=JE(),r=of(n),i={}
bf(()=>{Ph(r,oh(t).name),i!==(i=oh(t).value)&&(n.value=(n.__value=oh(t).value)??"")}),Ch(e,n)}),bf(e=>{Yh(n,0,e,"svelte-dsaf7t"),Ph(i,oh(t).filterPlaceholder||"")},[()=>Vh(B(k()))]),tp(n,()=>s()[oh(t).key],e=>s(s()[oh(t).key]=e,!0)),Ch(e,n)}
Rh(r,e=>{oh(t).hideFilterHeader||void 0===oh(A)[oh(t).key]||e(i)},!0),Ch(e,n)}
Rh(r,e=>{oh(t).hideFilterHeader||void 0===oh(t).searchValue?e(o,!1):e(i)}),bf(e=>Yh(n,0,e,"svelte-dsaf7t"),[()=>Vh(B([oh(t).headerFilterClass]))]),Ch(e,n)})
var i=lf(r),o=e=>{Ch(e,ZE())}
Rh(i,e=>{m()&&e(o)}),Ch(e,n)}
Rh(V,e=>{F&&e(Q)})
var K=lf(V),J=e=>{var n=Eh()
Uh(af(n),()=>t.svelteTableHeader,()=>({sortOrder:i(),sortBy:r()})),Ch(e,n)},Y=e=>{var n=iC(),s=of(n)
jh(s,17,()=>t.columns,Ah,(e,t)=>{var n=nC()
n.__click=[tC,q,t]
var s=of(n),o=lf(s),a=e=>{var t=Eh()
Hh(af(t),()=>1===i()?h():p()),Ch(e,t)},l=e=>{var n=Eh(),r=af(n),i=e=>{var t=Eh()
Hh(af(t),g),Ch(e,t)}
Rh(r,e=>{oh(t).sortable&&e(i)},!0),Ch(e,n)}
Rh(o,e=>{r()===oh(t).key?e(a):e(l,!1)}),bf(e=>{Yh(n,0,e,"svelte-dsaf7t"),Ph(s,`${oh(t).title??""} `)},[()=>Vh(B([oh(t).sortable?"isSortable":"",oh(t).headerClass]))]),vh("keypress",n,e=>"Enter"===e.key&&q(e,oh(t))),Ch(e,n)})
var o=lf(s),a=e=>{Ch(e,rC())}
Rh(o,e=>{m()&&e(a)}),Ch(e,n)}
Rh(K,e=>{t.svelteTableHeader?e(J):e(Y,!1)})
var X=lf(z)
jh(X,21,()=>oh(D),Ah,(e,n,r)=>{var i=Eh(),s=af(i),o=e=>{var i=Eh()
Uh(af(i),()=>t.svelteTableRow,()=>({row:oh(n),n:r})),Ch(e,i)},a=e=>{var i=dC(),s=af(i)
s.__click=[sC,H,n]
var o=of(s)
jh(o,17,()=>t.columns,Ah,(e,t,i)=>{var s=aC()
s.__click=[oC,G,n,t]
var o=of(s),a=e=>{const r=_d(()=>oh(t).renderComponent.component||oh(t).renderComponent)
var i=Eh()
Gh(af(i),()=>oh(r),(e,r)=>{r(e,function(...e){return new Proxy({props:e},jp)}(()=>oh(t).renderComponent.props||{},{get row(){return oh(n)},get col(){return oh(t)}}))}),Ch(e,i)},l=e=>{var s=Eh(),o=af(s),a=e=>{var s=Eh()
Hh(af(s),()=>oh(t).renderValue?oh(t).renderValue(oh(n),r,i):oh(t).value(oh(n),r,i)),Ch(e,s)},l=e=>{var s=xh()
bf(e=>Ph(s,e),[()=>oh(t).renderValue?oh(t).renderValue(oh(n),r,i):oh(t).value(oh(n),r,i)]),Ch(e,s)}
Rh(o,e=>{oh(t).parseHTML?e(a):e(l,!1)},!0),Ch(e,s)}
Rh(o,e=>{oh(t).renderComponent?e(a):e(l,!1)}),bf(e=>Yh(s,0,e,"svelte-dsaf7t"),[()=>Vh(B(["string"==typeof oh(t).class?oh(t).class:null,"function"==typeof oh(t).class?oh(t).class(oh(n),r,i):null,E()]))]),vh("keypress",s,e=>"Enter"===e.key&&G(e,oh(n),oh(t).key)),Ch(e,s)})
var a=lf(o),l=e=>{var t=cC(),r=of(t)
r.__click=[lC,U,n],Hh(of(r),()=>oh(n).$expanded?_():v()),bf(e=>Yh(t,0,e,"svelte-dsaf7t"),[()=>Vh(B($()))]),vh("keypress",r,e=>"Enter"===e.key&&U(e,oh(n))),Ch(e,t)}
Rh(a,e=>{m()&&e(l)})
var c=lf(s,2),u=e=>{var i=uC(),s=of(i)
Uh(of(s),()=>t.svelteTableExpanded??yu,()=>({row:oh(n),n:r})),bf(e=>{Yh(i,0,e,"svelte-dsaf7t"),op(s,"colspan",oh(N))},[()=>Vh(B(P()))]),Ch(e,i)}
Rh(c,e=>{oh(n).$expanded&&e(u)}),bf(e=>{Yh(s,0,e,"svelte-dsaf7t"),op(s,"tabindex",f()?"0":null)},[()=>Vh(B(["string"==typeof x()?x():null,"function"==typeof x()?x()(oh(n),r):null,oh(n).$expanded&&T(),oh(n).$selected&&C()]))]),vh("keypress",s,e=>"Enter"===e.key&&H(e,oh(n))),Ch(e,i)}
Rh(s,e=>{t.svelteTableRow?e(o):e(a,!1)}),Ch(e,i)}),bf((e,t,n)=>{Yh(W,0,e,"svelte-dsaf7t"),Yh(z,0,t,"svelte-dsaf7t"),Yh(X,0,n,"svelte-dsaf7t")},[()=>Vh(B(y())),()=>Vh(B(b())),()=>Vh(B(w()))]),Ch(e,W),rd()}function pC(e){return new Intl.NumberFormat("en-us").format(e)}mh(["click"])
var gC=Sh('<div class="content svelte-u19tu"><!></div>')
function _C(e,t){nd(t,!0)
let n=Np(t,"visible",15,!0)
const r=[{key:"slot",title:"Slot",value:e=>e.slot,sortable:!0},{key:"name",title:"Name",value:e=>e.name,sortable:!0,renderValue:e=>QE(e.id,e.name),parseHTML:!0},{key:"level",title:"Level",value:e=>e.level,sortable:!0},{key:"rank",title:"Rank",value:e=>e.rank,sortable:!0},{key:"guild_xp",title:"GXP",value:e=>e.guild_xp,sortable:!0,renderValue:e=>pC(e.guild_xp)},{key:"activity",title:"Activity",value:e=>e.activity,sortable:!0},{key:"pack",title:"Pack",value:e=>e.pack,sortable:!0},{key:"max_stamina",title:"Stam",value:e=>e.max_stamina,sortable:!0,renderValue:e=>pC(e.max_stamina)}]
let i=Ud(Kd([]))
const s=({equipped:e})=>!e,o=({player:{id:e}})=>e,a=e=>e.members
function l([e,t]){const n=e.r.filter(s).map(o),r=jm(Tm(n).map(e=>[e,n.filter(t=>t===e).length])),i=(e=>e.r.flatMap(a))(t)
return i.map((l=r,(e,t)=>({...e,slot:t+1,activity:Bm(e.last_activity),pack:l[e.id]??0})))
var l}const c=_d(()=>{if(n())return async function(){const[e,t]=await Ym([zx(),Am()])
if(e?.s&&t?.s){const n=l([e,t])
Wd(i,n,!0)}}()})
{const t=e=>{Ch(e,xh("Who's Got What"))}
ex(e,{close:function(){$g("Whos Got What","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=gC()
Oh(of(n),()=>oh(c),e=>{Ch(e,xh("Loading..."))},e=>{hC(e,{classNameTable:"whos-got-what",get columns(){return r},get rows(){return oh(i)}})},(e,t)=>{var n=xh()
bf(()=>Ph(n,oh(t))),Ch(e,n)}),Ch(e,n)},$$slots:{title:!0,default:!0}})}rd()}const vC=Kd({visible:!0})
let mC=0
var yC=Object.freeze({__proto__:null,default:function(){mC?vC.visible=!0:mC=$h(_C,{props:vC,target:document.body})}})
const bC=()=>{Wg(import("./inventory-DfrYZdgC.js"))},wC=()=>{Wg(import("./bazaar-DbTPTWmi.js"))}
function kC(){Wg(import("./injectQuestBookFull-BWR0fWDz.js"))}const SC=()=>{Wg(import("./scavenging-BBpZRiok.js"))}
const xC=()=>{Wg(import("./toprated-8nz6X7jQ.js"))}
const EC=()=>{Wg(import("./trade-D767c5R9.js"))}
var CC={creatures:{"-":{"-":FS}},items:AS,masterrealms:{"-":{"-":FS}},quests:{"-":{"-":FS},view:{"-":()=>{Wg(import("./showAllQuestSteps-BEXFbUVW.js"))}}},realms:{"-":{"-":FS}},relics:{"-":{"-":FS}},shops:{"-":{"-":FS}},"-":qS,arena:SS,auctionhouse:xS,bank:{"-":{"-":()=>{Wg(import("./injectBank-31rot9YN.js"))}}},blacksmith:{repairall:{"-":function(){ou("fromworld")&&kS()}}},buffmarket:{"-":{"-":()=>{Wg(import("./injectBuffmarket-CQCNlsRg.js"))}},add:{"-":()=>{Wg(import("./injectBigBuffPacakges-BinDAPMG.js"))}},manage:{"-":()=>{Wg(import("./injectManage-Dw-Idnjt.js"))}}},combat:{attackplayer:{"-":jS}},composing:ES,findplayer:{"-":{"-":()=>{Wg(import("./findplayer-91mXKpO_.js"))}}},guild:MS,hellforge:{"-":{"-":()=>{Wg(import("./hellforge-CDJMv5MY.js"))}}},inventing:RS,log:{"-":{"-":()=>{Wg(import("./playerLog-InIWoMlz.js"))}}},marketplace:{createreq:{"-":()=>{Wg(import("./marketplace-cQDvk4WO.js"))}}},news:BS,notepad:{showlogs:{"-":Vg},invmanagernew:{"-":bC},guildinvmgr:{"-":bC},recipemanager:{"-":s_},auctionsearch:{"-":Xg},onlineplayers:{"-":t_},quicklinkmanager:{"-":r_},monsterlog:{"-":Qg},quickextract:{"-":n_},quickwear:{"-":i_},fsboxcontent:{"-":Kg},bufflogcontent:{"-":zg},newguildlog:{"-":Jg},findbuffs:{"-":Zg},findother:{"-":e_},savesettings:{"-":()=>{Wg(import("./load-C6t5gl4f.js"))}},reliclist:{"-":o_},"-":{"-":function(){}}},points:{"-":{"-":()=>{Wg(import("./points-OHhGWchw.js"))}}},potionbazaar:{"-":{"-":wC},buyitem:{"-":wC}},privatemessage:{"-":{"-":()=>{Wg(import("./privateMsg-BHKV7mQ6.js"))}}},profile:{"-":{"-":jS},managecombatset:{"-":jS},report:{"-":jS},equipitem:{"-":jS},useitem:{"-":jS},changebio:{"-":CS},dropitems:{"-":function(){Wg(import("./injectProfileDropItems-CtEM33k8.js"))}}},pvpladder:{"-":{"-":()=>{Wg(import("./ladder-Cc9tnrV2.js"))}}},questbook:{"-":{"-":kC},atoz:{"-":kC},viewquest:{"-":()=>{Wg(import("./injectQuestTracker-CnJT8mME.js"))}}},quickbuff:{"-":{"-":()=>{Wg(import("./quickBuff-BO6vzMYC.js"))}}},scavenging:{"-":{"-":SC},process:{"-":SC}},settings:{"-":{"-":()=>{Wg(import("./injectSettings-BDOhznlR.js"))}}},skills:{"-":{"-":()=>{}}},tempinv:{"-":{"-":()=>{Wg(import("./mailbox-CKdUnVOw.js"))}}},temple:{"-":{"-":Wk}},titan:{"-":{"-":()=>{Wg(import("./injectTitan-COMlYyMK.js"))}}},toprated:{xp:{"-":xC},monthlyxp:{"-":xC},gold:{"-":xC},killstreak:{"-":xC},bounties:{"-":xC},risingstars:{"-":xC},arena:{"-":xC},superelites:{"-":xC},smasher:{"-":xC},globalquest:{"-":()=>{Wg(import("./globalQuest-DPn3B1zZ.js"))}}},trade:{"-":{"-":EC},sendgold:{"-":EC},createsecure:{"-":EC},docreatesecure:{"-":EC}},world:{"-":{"-":kS}}}
function TC(e){return Ag("ul",e)}const PC=e=>"newWindow"in e&&e.url&&e.name
function $C(e,t){const n=Bg(t,TC())
e.filter(PC).forEach(e=>{Bg(Bg(n,Cy()),function(e){const t=__({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return fm(t,()=>$g("chrome","quick link",e.name)),t}(e))})}function LC(e){const t=jg({className:"fshQuickLinks",style:{left:`${_c("quickLinksLeftPx")}px`,top:`${_c("quickLinksTopPx")}px`}})
t.classList.toggle("fshFixed",_c("keepHelperMenuOnScreen")),_c("draggableQuickLinks")&&(t.classList.add("fshMove"),Cg(t)),$C(e,t),Bg(document.body,t)}function IC(){if(!Cc(".mainbody"))return
const e=ib("quickLinks")||[]
e.length&&LC(e)}let MC=0,OC=0,RC=0,FC="",AC=0,jC=0
function NC(e){return ou(e)||"-"}function DC(e){const t=Cc(e)
return t?.value||"-"}function BC(){if(xc(CC[MC])&&xc(CC[MC][OC])&&Sc(CC[MC][OC][RC]))return CC[MC][OC][RC]}function qC(){""!==document.location.search?(MC=NC("cmd"),OC=NC("subcmd"),RC=NC("subcmd2"),["points","privatemessage"].includes(MC)&&(FC=`/${NC("type")}`)):(MC=DC('input[name="cmd"]'),OC=DC('input[name="subcmd"]'),RC=DC('input[name="subcmd2"]')),Uc.cmd=MC,Uc.subcmd=OC,Uc.subcmd2=RC,jC=`${MC}/${OC}/${RC}${FC}`,AC=BC()}function HC(){Sc(AC)&&(kc(jC),AC())}async function UC(e){qC(),await e,wS(),iu(3,HC),_c("playNewMessageSound")&&iu(3,fg),wm()||iu(3,IC)}const GC=[()=>!("showPicker"in HTMLSelectElement.prototype),()=>!navigator.cookieEnabled,()=>window!==window.parent,function(){if(!d){const e=l(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
u=c.includes(e),d=!0}return u}]
function WC(e,t){if(GC.some(e=>e()))return
const n=Tc("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
jc(),function(e,t){Uc.gmInfo=Ec(decodeURIComponent(t)),Uc.gmInfo?Uc.fshVer=e:Uc.fshVer=`${e}_native`,Uc.calfVer="154"}(e,t),o(),oa(),UC(n)}export{Av as $,Sh as A,lf as B,af as C,of as D,jh as E,Rh as F,vp as G,Wd as H,oh as I,Gd as J,Ch as K,rd as L,Rw as M,vh as N,bf as O,Ph as P,zv as Q,op as R,lh as S,yp as T,Ov as U,mm as V,Vl as W,cc as X,__ as Y,fl as Z,Ym as _,qv as a,vl as a$,h_ as a0,eb as a1,Ey as a2,tg as a3,Ty as a4,hg as a5,Em as a6,Ia as a7,TC as a8,Og as a9,Dg as aA,sl as aB,qw as aC,Oh as aD,Eh as aE,vc as aF,bp as aG,ma as aH,_a as aI,tw as aJ,zl as aK,pC as aL,Sw as aM,Ea as aN,qa as aO,Xy as aP,Xk as aQ,rg as aR,Zb as aS,Jb as aT,sb as aU,Kv as aV,Vb as aW,Qk as aX,Ya as aY,Xa as aZ,su as a_,zb as aa,w_ as ab,Gc as ac,b_ as ad,Nv as ae,jv as af,dc as ag,fc as ah,hm as ai,Ud as aj,Kd as ak,ib as al,tp as am,zy as an,mh as ao,Bw as ap,ou as aq,Nw as ar,Vg as as,Qg as at,wc as au,qm as av,Dy as aw,Uc as ax,qc as ay,_c as az,Bc as b,ba as b$,Va as b0,gx as b1,lc as b2,nw as b3,eg as b4,Py as b5,s as b6,Dl as b7,xl as b8,El as b9,xh as bA,hl as bB,ll as bC,Tm as bD,sh as bE,Yh as bF,Y_ as bG,X_ as bH,xk as bI,Xm as bJ,$a as bK,Ml as bL,Al as bM,Ah as bN,nx as bO,Pa as bP,Xb as bQ,gl as bR,Lp as bS,$p as bT,Hb as bU,ja as bV,$k as bW,Wc as bX,uc as bY,Jm as bZ,Jv as b_,Ll as ba,Cl as bb,Dk as bc,S_ as bd,dl as be,Ha as bf,kl as bg,v_ as bh,Ca as bi,Rl as bj,d_ as bk,Ec as bl,iu as bm,kw as bn,Ng as bo,Zl as bp,Xl as bq,tc as br,ec as bs,nc as bt,Zp as bu,ng as bv,Sc as bw,xa as bx,Sl as by,_d as bz,sg as c,a as c$,ka as c0,Ka as c1,Bp as c2,Ap as c3,Rp as c4,Fl as c5,Mh as c6,$l as c7,Nl as c8,Bl as c9,vk as cA,QS as cB,Hl as cC,dm as cD,KS as cE,Ul as cF,La as cG,gk as cH,Nm as cI,QE as cJ,rl as cK,Kl as cL,Ju as cM,ed as cN,vf as cO,gf as cP,wu as cQ,bu as cR,dh as cS,pd as cT,xw as cU,Yl as cV,Gl as cW,Da as cX,Qb as cY,Zy as cZ,va as c_,ql as ca,Gv as cb,Uv as cc,Wv as cd,Tl as ce,Pl as cf,jl as cg,ga as ch,Ol as ci,Wb as cj,ym as ck,ob as cl,Bv as cm,ya as cn,Yv as co,Zv as cp,xc as cq,hc as cr,Ql as cs,Mg as ct,ac as cu,Za as cv,Zk as cw,Hc as cx,_l as cy,f_ as cz,qg as d,yl as d$,ia as d0,A_ as d1,Z_ as d2,Ek as d3,e as d4,Tc as d5,Wg as d6,IE as d7,Wh as d8,Fh as d9,cv as dA,uv as dB,lv as dC,hv as dD,TE as dE,Rv as dF,ic as dG,Dm as dH,Zh as dI,Ba as dJ,Ma as dK,Wy as dL,Fa as dM,Aa as dN,Wl as dO,Yg as dP,al as dQ,Cy as dR,Na as dS,Tk as dT,Kb as dU,Ra as dV,TS as dW,Cp as dX,gp as dY,Vp as dZ,ml as d_,PE as da,ku as db,um as dc,Xu as dd,ix as de,Wa as df,Sa as dg,rc as dh,Cm as di,Jl as dj,kc as dk,NS as dl,kC as dm,OS as dn,ey as dp,Zm as dq,zx as dr,Ux as ds,g_ as dt,Kx as du,Ta as dv,oc as dw,Gx as dx,gv as dy,av as dz,Dv as e,ex as e0,sp as e1,mc as e2,Sm as e3,Qa as e4,Gh as e5,tl as e6,GS as e7,JS as e8,wl as e9,n_ as eA,Ip as eB,Gg as eC,i_ as eD,Ja as eE,WC as eF,ew as ea,km as eb,ry as ec,zm as ed,ny as ee,Gm as ef,Vm as eg,Um as eh,Wm as ei,Qm as ej,Hm as ek,Km as el,dy as em,ly as en,uy as eo,cy as ep,oy as eq,ax as er,Fp as es,_S as et,rm as eu,Ga as ev,nl as ew,Kf as ex,Hd as ey,Vd as ez,jm as f,t as g,pm as h,Bg as i,xm as j,zw as k,n as l,Xp as m,$h as n,fm as o,ug as p,Cc as q,l as r,$g as s,Ag as t,jg as u,fu as v,pf as w,nd as x,Np as y,Iw as z}
//# sourceMappingURL=calfSystem-KFszEm2S.js.map
