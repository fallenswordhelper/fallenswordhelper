function e(e){return new Promise((t=>{const n=document.createElement("script")
n.async=!0,n.onload=t,n.src=e,document.body.appendChild(n)}))}function t(e,t){return t?t.getElementById(e):document.getElementById(e)}function n(e){if(e instanceof Node)return e.textContent}let r=null
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
n[r]=e[r]}return n}var p="undefined"!=typeof window?window:void 0,g="undefined"!=typeof globalThis?globalThis:p,_=Array.prototype,v=_.forEach,m=_.indexOf,b=null==g?void 0:g.navigator,y=null==g?void 0:g.document,w=null==g?void 0:g.location,k=null==g?void 0:g.fetch,S=null!=g&&g.XMLHttpRequest&&"withCredentials"in new g.XMLHttpRequest?g.XMLHttpRequest:void 0,x=null==g?void 0:g.AbortController,E=null==b?void 0:b.userAgent,C=null!=p?p:{},T={DEBUG:!1,LIB_VERSION:"1.259.0"},P="$copy_autocapture",L=["$snapshot","$pageview","$pageleave","$set","survey dismissed","survey sent","survey shown","$identify","$groupidentify","$create_alias","$$client_ingestion_warning","$web_experiment_applied","$feature_enrollment_update","$feature_flag_called"],I=function(e){return e.GZipJS="gzip-js",e.Base64="base64",e}({}),M=["fatal","error","warning","log","info","debug"]
function R(e,t){return-1!==e.indexOf(t)}var O=function(e){return e.trim()},A=function(e){return e.replace(/^\$/,"")},F=Array.isArray,j=Object.prototype,N=j.hasOwnProperty,D=j.toString,B=F||function(e){return"[object Array]"===D.call(e)},q=e=>"function"==typeof e,H=e=>e===Object(e)&&!B(e),U=e=>{if(H(e)){for(var t in e)if(N.call(e,t))return!1
return!0}return!1},G=e=>void 0===e,W=e=>"[object String]"==D.call(e),z=e=>W(e)&&0===e.trim().length,V=e=>null===e,Q=e=>G(e)||V(e),K=e=>"[object Number]"==D.call(e),J=e=>"[object Boolean]"===D.call(e),Y=e=>e instanceof FormData,X=e=>R(L,e),Z=e=>{var t={_log:function(t){if(p&&(T.DEBUG||C.POSTHOG_DEBUG)&&!G(p.console)&&p.console){for(var n=("__rrweb_original__"in p.console[t]?p.console[t].__rrweb_original__:p.console[t]),r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s]
n(e,...i)}},info:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("log",...n)},warn:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("warn",...n)},error:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("error",...n)},critical:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
console.error(e,...n)},uninitializedWarning:e=>{t.error("You must initialize PostHog before calling "+e)},createLogger:t=>Z(e+" "+t)}
return t},ee=Z("[PostHog.js]"),te=ee.createLogger,ne={}
function re(e,t,n){if(B(e))if(v&&e.forEach===v)e.forEach(t,n)
else if("length"in e&&e.length===+e.length)for(var r=0,i=e.length;r<i;r++)if(r in e&&t.call(n,e[r],r)===ne)return}function ie(e,t,n){if(!Q(e)){if(B(e))return re(e,t,n)
if(Y(e)){for(var r of e.entries())if(t.call(n,r[1],r[0])===ne)return}else for(var i in e)if(N.call(e,i)&&t.call(n,e[i],i)===ne)return}}var se=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return re(n,(function(t){for(var n in t)void 0!==t[n]&&(e[n]=t[n])})),e},oe=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return re(n,(function(t){re(t,(function(t){e.push(t)}))})),e}
function ae(e){for(var t=Object.keys(e),n=t.length,r=new Array(n);n--;)r[n]=[t[n],e[t[n]]]
return r}var le=function(e){try{return e()}catch(e){return}},ce=function(e){return function(){try{for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return e.apply(this,n)}catch(e){ee.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."),ee.critical(e)}}},ue=function(e){var t={}
return ie(e,(function(e,n){(W(e)&&e.length>0||K(e))&&(t[n]=e)})),t}
var de=["herokuapp.com","vercel.app","netlify.app"]
function fe(e){var t=null==e?void 0:e.hostname
if(!W(t))return!1
var n=t.split(".").slice(-2).join(".")
for(var r of de)if(n===r)return!1
return!0}function he(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}function pe(e,t,n,r){var{capture:i=!1,passive:s=!0}=null!=r?r:{}
null==e||e.addEventListener(t,n,{capture:i,passive:s})}var ge="$people_distinct_id",_e="__alias",ve="__timers",me="$autocapture_disabled_server_side",be="$heatmaps_enabled_server_side",ye="$exception_capture_enabled_server_side",we="$error_tracking_suppression_rules",ke="$error_tracking_capture_extension_exceptions",Se="$web_vitals_enabled_server_side",xe="$dead_clicks_enabled_server_side",Ee="$web_vitals_allowed_metrics",Ce="$session_recording_enabled_server_side",Te="$console_log_recording_enabled_server_side",Pe="$session_recording_network_payload_capture",$e="$session_recording_masking",Le="$session_recording_canvas_recording",Ie="$replay_sample_rate",Me="$replay_minimum_duration",Re="$replay_script_config",Oe="$sesid",Ae="$session_is_sampled",Fe="$session_recording_url_trigger_activated_session",je="$session_recording_event_trigger_activated_session",Ne="$enabled_feature_flags",De="$early_access_features",Be="$feature_flag_details",qe="$stored_person_properties",He="$stored_group_properties",Ue="$surveys",Ge="$surveys_activated",We="$flag_call_reported",ze="$user_state",Ve="$client_session_props",Qe="$capture_rate_limit",Ke="$initial_campaign_params",Je="$initial_referrer_info",Ye="$initial_person_info",Xe="$epp",Ze="__POSTHOG_TOOLBAR__",et="$posthog_cookieless",tt=[ge,_e,"__cmpns",ve,Ce,be,Oe,Ne,we,ze,De,Be,He,qe,Ue,We,Ve,Qe,Ke,Je,Xe,Ye]
function nt(e){return e instanceof Element&&(e.id===Ze||!(null==e.closest||!e.closest(".toolbar-global-fade-container")))}function rt(e){return!!e&&1===e.nodeType}function it(e,t){return!!e&&!!e.tagName&&e.tagName.toLowerCase()===t.toLowerCase()}function st(e){return!!e&&3===e.nodeType}function ot(e){return!!e&&11===e.nodeType}function at(e){return e?O(e).split(/\s+/):[]}function lt(e){var t=null==p?void 0:p.location.href
return!!(t&&e&&e.some((e=>t.match(e))))}function ct(e){var t=""
switch(typeof e.className){case"string":t=e.className
break
case"object":t=(e.className&&"baseVal"in e.className?e.className.baseVal:null)||e.getAttribute("class")||""
break
default:t=""}return at(t)}function ut(e){return Q(e)?null:O(e).split(/(\s+)/).filter((e=>St(e))).join("").replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)}function dt(e){var t=""
return gt(e)&&!_t(e)&&e.childNodes&&e.childNodes.length&&ie(e.childNodes,(function(e){var n
st(e)&&e.textContent&&(t+=null!==(n=ut(e.textContent))&&void 0!==n?n:"")})),O(t)}function ft(e){return G(e.target)?e.srcElement||null:null!=(t=e.target)&&t.shadowRoot?e.composedPath()[0]||null:e.target||null
var t}var ht=["a","button","form","input","select","textarea","label"]
function pt(e){var t=e.parentNode
return!(!t||!rt(t))&&t}function gt(e){for(var t=e;t.parentNode&&!it(t,"body");t=t.parentNode){var n=ct(t)
if(R(n,"ph-sensitive")||R(n,"ph-no-capture"))return!1}if(R(ct(e),"ph-include"))return!0
var r=e.type||""
if(W(r))switch(r.toLowerCase()){case"hidden":case"password":return!1}var i=e.name||e.id||""
return!W(i)||!/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g,""))}function _t(e){return!!(it(e,"input")&&!["button","checkbox","submit","reset"].includes(e.type)||it(e,"select")||it(e,"textarea")||"true"===e.getAttribute("contenteditable"))}var vt="(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",mt=new RegExp("^(?:"+vt+")$"),bt=new RegExp(vt),yt="\\d{3}-?\\d{2}-?\\d{4}",wt=new RegExp("^("+yt+")$"),kt=new RegExp("("+yt+")")
function St(e,t){if(void 0===t&&(t=!0),Q(e))return!1
if(W(e)){if(e=O(e),(t?mt:bt).test((e||"").replace(/[- ]/g,"")))return!1
if((t?wt:kt).test(e))return!1}return!0}function xt(e){var t=dt(e)
return St(t=(t+" "+Et(e)).trim())?t:""}function Et(e){var t=""
return e&&e.childNodes&&e.childNodes.length&&ie(e.childNodes,(function(e){var n
if(e&&"span"===(null==(n=e.tagName)?void 0:n.toLowerCase()))try{var r=dt(e)
t=(t+" "+r).trim(),e.childNodes&&e.childNodes.length&&(t=(t+" "+Et(e)).trim())}catch(e){ee.error("[AutoCapture]",e)}})),t}function Ct(e){return function(e){var t=e.map((e=>{var t,n,r=""
if(e.tag_name&&(r+=e.tag_name),e.attr_class)for(var i of(e.attr_class.sort(),e.attr_class))r+="."+i.replace(/"/g,"")
var s=f({},e.text?{text:e.text}:{},{"nth-child":null!==(t=e.nth_child)&&void 0!==t?t:0,"nth-of-type":null!==(n=e.nth_of_type)&&void 0!==n?n:0},e.href?{href:e.href}:{},e.attr_id?{attr_id:e.attr_id}:{},e.attributes),o={}
return ae(s).sort(((e,t)=>{var[n]=e,[r]=t
return n.localeCompare(r)})).forEach((e=>{var[t,n]=e
return o[Tt(t.toString())]=Tt(n.toString())})),(r+=":")+ae(o).map((e=>{var[t,n]=e
return t+'="'+n+'"'})).join("")}))
return t.join(";")}(function(e){return e.map((e=>{var t,n,r={text:null==(t=e.$el_text)?void 0:t.slice(0,400),tag_name:e.tag_name,href:null==(n=e.attr__href)?void 0:n.slice(0,2048),attr_class:Pt(e),attr_id:e.attr__id,nth_child:e.nth_child,nth_of_type:e.nth_of_type,attributes:{}}
return ae(e).filter((e=>{var[t]=e
return 0===t.indexOf("attr__")})).forEach((e=>{var[t,n]=e
return r.attributes[t]=n})),r}))}(e))}function Tt(e){return e.replace(/"|\\"/g,'\\"')}function Pt(e){var t=e.attr__class
return t?B(t)?t:at(t):void 0}class $t{constructor(){this.clicks=[]}isRageClick(e,t,n){var r=this.clicks[this.clicks.length-1]
if(r&&Math.abs(e-r.x)+Math.abs(t-r.y)<30&&n-r.timestamp<1e3){if(this.clicks.push({x:e,y:t,timestamp:n}),3===this.clicks.length)return!0}else this.clicks=[{x:e,y:t,timestamp:n}]
return!1}}var Lt=["localhost","127.0.0.1"],It=e=>{var t=null==y?void 0:y.createElement("a")
return G(t)?null:(t.href=e,t)},Mt=function(e,t){for(var n,r=((e.split("#")[0]||"").split(/\?(.*)/)[1]||"").replace(/^\?+/g,"").split("&"),i=0;i<r.length;i++){var s=r[i].split("=")
if(s[0]===t){n=s
break}}if(!B(n)||n.length<2)return""
var o=n[1]
try{o=decodeURIComponent(o)}catch(e){ee.error("Skipping decoding for malformed query param: "+o)}return o.replace(/\+/g," ")},Rt=function(e,t,n){if(!e||!t||!t.length)return e
for(var r=e.split("#"),i=r[0]||"",s=r[1],o=i.split("?"),a=o[1],l=o[0],c=(a||"").split("&"),u=[],d=0;d<c.length;d++){var f=c[d].split("=")
B(f)&&(t.includes(f[0])?u.push(f[0]+"="+n):u.push(c[d]))}var h=l
return null!=a&&(h+="?"+u.join("&")),null!=s&&(h+="#"+s),h},Ot=function(e,t){var n=e.match(new RegExp(t+"=([^&]*)"))
return n?n[1]:null},At=te("[AutoCapture]")
function Ft(e,t){return t.length>e?t.slice(0,e)+"...":t}function jt(e){if(e.previousElementSibling)return e.previousElementSibling
var t=e
do{t=t.previousSibling}while(t&&!rt(t))
return t}function Nt(e,t){for(var n,r,{e:i,maskAllElementAttributes:s,maskAllText:o,elementAttributeIgnoreList:a,elementsChainAsString:l}=t,c=[e],u=e;u.parentNode&&!it(u,"body");)ot(u.parentNode)?(c.push(u.parentNode.host),u=u.parentNode.host):(c.push(u.parentNode),u=u.parentNode)
var d,f=[],h={},g=!1,_=!1
if(ie(c,(e=>{var t=gt(e)
"a"===e.tagName.toLowerCase()&&(g=e.getAttribute("href"),g=t&&g&&St(g)&&g),R(ct(e),"ph-no-capture")&&(_=!0),f.push(function(e,t,n,r){var i=e.tagName.toLowerCase(),s={tag_name:i}
ht.indexOf(i)>-1&&!n&&("a"===i.toLowerCase()||"button"===i.toLowerCase()?s.$el_text=Ft(1024,xt(e)):s.$el_text=Ft(1024,dt(e)))
var o=ct(e)
o.length>0&&(s.classes=o.filter((function(e){return""!==e}))),ie(e.attributes,(function(n){var i
if((!_t(e)||-1!==["name","id","class","aria-label"].indexOf(n.name))&&(null==r||!r.includes(n.name))&&!t&&St(n.value)&&(i=n.name,!W(i)||"_ngcontent"!==i.substring(0,10)&&"_nghost"!==i.substring(0,7))){var o=n.value
"class"===n.name&&(o=at(o).join(" ")),s["attr__"+n.name]=Ft(1024,o)}}))
for(var a=1,l=1,c=e;c=jt(c);)a++,c.tagName===e.tagName&&l++
return s.nth_child=a,s.nth_of_type=l,s}(e,s,o,a))
var n=function(e){if(!gt(e))return{}
var t={}
return ie(e.attributes,(function(e){if(e.name&&0===e.name.indexOf("data-ph-capture-attribute")){var n=e.name.replace("data-ph-capture-attribute-",""),r=e.value
n&&r&&St(r)&&(t[n]=r)}})),t}(e)
se(h,n)})),_)return{props:{},explicitNoCapture:_}
if(o||("a"===e.tagName.toLowerCase()||"button"===e.tagName.toLowerCase()?f[0].$el_text=xt(e):f[0].$el_text=dt(e)),g){var v,m
f[0].attr__href=g
var b=null==(v=It(g))?void 0:v.host,y=null==p||null==(m=p.location)?void 0:m.host
b&&y&&b!==y&&(d=g)}return{props:se({$event_type:i.type,$ce_version:1},l?{}:{$elements:f},{$elements_chain:Ct(f)},null!=(n=f[0])&&n.$el_text?{$el_text:null==(r=f[0])?void 0:r.$el_text}:{},d&&"click"===i.type?{$external_click_url:d}:{},h)}}class Dt{constructor(e){this._initialized=!1,this._isDisabledServerSide=null,this.rageclicks=new $t,this._elementsChainAsString=!1,this.instance=e,this._elementSelectors=null}get _config(){var e,t,n=H(this.instance.config.autocapture)?this.instance.config.autocapture:{}
return n.url_allowlist=null==(e=n.url_allowlist)?void 0:e.map((e=>new RegExp(e))),n.url_ignorelist=null==(t=n.url_ignorelist)?void 0:t.map((e=>new RegExp(e))),n}_addDomEventHandlers(){if(this.isBrowserSupported()){if(p&&y){var e=e=>{e=e||(null==p?void 0:p.event)
try{this._captureEvent(e)}catch(e){At.error("Failed to capture event",e)}}
if(pe(y,"submit",e,{capture:!0}),pe(y,"change",e,{capture:!0}),pe(y,"click",e,{capture:!0}),this._config.capture_copied_text){var t=e=>{e=e||(null==p?void 0:p.event),this._captureEvent(e,P)}
pe(y,"copy",t,{capture:!0}),pe(y,"cut",t,{capture:!0})}}}else At.info("Disabling Automatic Event Collection because this browser is not supported")}startIfEnabled(){this.isEnabled&&!this._initialized&&(this._addDomEventHandlers(),this._initialized=!0)}onRemoteConfig(e){e.elementsChainAsString&&(this._elementsChainAsString=e.elementsChainAsString),this.instance.persistence&&this.instance.persistence.register({[me]:!!e.autocapture_opt_out}),this._isDisabledServerSide=!!e.autocapture_opt_out,this.startIfEnabled()}setElementSelectors(e){this._elementSelectors=e}getElementSelectors(e){var t,n=[]
return null==(t=this._elementSelectors)||t.forEach((t=>{var r=null==y?void 0:y.querySelectorAll(t)
null==r||r.forEach((r=>{e===r&&n.push(t)}))})),n}get isEnabled(){var e,t,n=null==(e=this.instance.persistence)?void 0:e.props[me],r=this._isDisabledServerSide
if(V(r)&&!J(n)&&!this.instance._shouldDisableFlags())return!1
var i=null!==(t=this._isDisabledServerSide)&&void 0!==t?t:!!n
return!!this.instance.config.autocapture&&!i}_captureEvent(e,t){if(void 0===t&&(t="$autocapture"),this.isEnabled){var n,r=ft(e)
st(r)&&(r=r.parentNode||null),"$autocapture"===t&&"click"===e.type&&e instanceof MouseEvent&&this.instance.config.rageclick&&null!=(n=this.rageclicks)&&n.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._captureEvent(e,"$rageclick")
var i=t===P
if(r&&function(e,t,n,r,i){var s,o,a
if(void 0===n&&(n=void 0),!p||!e||it(e,"html")||!rt(e))return!1
if(null!=(s=n)&&s.url_allowlist&&!lt(n.url_allowlist))return!1
if(null!=(o=n)&&o.url_ignorelist&&lt(n.url_ignorelist))return!1
if(null!=(a=n)&&a.dom_event_allowlist){var l=n.dom_event_allowlist
if(l&&!l.some((e=>t.type===e)))return!1}for(var c=!1,u=[e],d=!0,f=e;f.parentNode&&!it(f,"body");)if(ot(f.parentNode))u.push(f.parentNode.host),f=f.parentNode.host
else{if(!(d=pt(f)))break
if(r||ht.indexOf(d.tagName.toLowerCase())>-1)c=!0
else{var h=p.getComputedStyle(d)
h&&"pointer"===h.getPropertyValue("cursor")&&(c=!0)}u.push(d),f=d}if(!function(e,t){var n=null==t?void 0:t.element_allowlist
if(G(n))return!0
var r,i=function(e){if(n.some((t=>e.tagName.toLowerCase()===t)))return{v:!0}}
for(var s of e)if(r=i(s))return r.v
return!1}(u,n))return!1
if(!function(e,t){var n=null==t?void 0:t.css_selector_allowlist
if(G(n))return!0
var r,i=function(e){if(n.some((t=>e.matches(t))))return{v:!0}}
for(var s of e)if(r=i(s))return r.v
return!1}(u,n))return!1
var g=p.getComputedStyle(e)
if(g&&"pointer"===g.getPropertyValue("cursor")&&"click"===t.type)return!0
var _=e.tagName.toLowerCase()
switch(_){case"html":return!1
case"form":return(i||["submit"]).indexOf(t.type)>=0
case"input":case"select":case"textarea":return(i||["change","click"]).indexOf(t.type)>=0
default:return c?(i||["click"]).indexOf(t.type)>=0:(i||["click"]).indexOf(t.type)>=0&&(ht.indexOf(_)>-1||"true"===e.getAttribute("contenteditable"))}}(r,e,this._config,i,i?["copy","cut"]:void 0)){var{props:s,explicitNoCapture:o}=Nt(r,{e:e,maskAllElementAttributes:this.instance.config.mask_all_element_attributes,maskAllText:this.instance.config.mask_all_text,elementAttributeIgnoreList:this._config.element_attribute_ignorelist,elementsChainAsString:this._elementsChainAsString})
if(o)return!1
var a=this.getElementSelectors(r)
if(a&&a.length>0&&(s.$element_selectors=a),t===P){var l,c=ut(null==p||null==(l=p.getSelection())?void 0:l.toString()),u=e.type||"clipboard"
if(!c)return!1
s.$selected_content=c,s.$copy_type=u}return this.instance.capture(t,s),!0}}}isBrowserSupported(){return q(null==y?void 0:y.querySelectorAll)}}Math.trunc||(Math.trunc=function(e){return e<0?Math.ceil(e):Math.floor(e)}),Number.isInteger||(Number.isInteger=function(e){return K(e)&&isFinite(e)&&Math.floor(e)===e})
var Bt="0123456789abcdef"
class qt{constructor(e){if(this.bytes=e,16!==e.length)throw new TypeError("not 128-bit length")}static fromFieldsV7(e,t,n,r){if(!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(n)||!Number.isInteger(r)||e<0||t<0||n<0||r<0||e>0xffffffffffff||t>4095||n>1073741823||r>4294967295)throw new RangeError("invalid field value")
var i=new Uint8Array(16)
return i[0]=e/Math.pow(2,40),i[1]=e/Math.pow(2,32),i[2]=e/Math.pow(2,24),i[3]=e/Math.pow(2,16),i[4]=e/Math.pow(2,8),i[5]=e,i[6]=112|t>>>8,i[7]=t,i[8]=128|n>>>24,i[9]=n>>>16,i[10]=n>>>8,i[11]=n,i[12]=r>>>24,i[13]=r>>>16,i[14]=r>>>8,i[15]=r,new qt(i)}toString(){for(var e="",t=0;t<this.bytes.length;t++)e=e+Bt.charAt(this.bytes[t]>>>4)+Bt.charAt(15&this.bytes[t]),3!==t&&5!==t&&7!==t&&9!==t||(e+="-")
if(36!==e.length)throw new Error("Invalid UUIDv7 was generated")
return e}clone(){return new qt(this.bytes.slice(0))}equals(e){return 0===this.compareTo(e)}compareTo(e){for(var t=0;t<16;t++){var n=this.bytes[t]-e.bytes[t]
if(0!==n)return Math.sign(n)}return 0}}class Ht{constructor(){this._timestamp=0,this._counter=0,this._random=new Wt}generate(){var e=this.generateOrAbort()
if(G(e)){this._timestamp=0
var t=this.generateOrAbort()
if(G(t))throw new Error("Could not generate UUID after timestamp reset")
return t}return e}generateOrAbort(){var e=Date.now()
if(e>this._timestamp)this._timestamp=e,this._resetCounter()
else{if(!(e+1e4>this._timestamp))return
this._counter++,this._counter>4398046511103&&(this._timestamp++,this._resetCounter())}return qt.fromFieldsV7(this._timestamp,Math.trunc(this._counter/Math.pow(2,30)),this._counter&Math.pow(2,30)-1,this._random.nextUint32())}_resetCounter(){this._counter=1024*this._random.nextUint32()+(1023&this._random.nextUint32())}}var Ut,Gt=e=>{if("undefined"!=typeof UUIDV7_DENY_WEAK_RNG&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available")
for(var t=0;t<e.length;t++)e[t]=65536*Math.trunc(65536*Math.random())+Math.trunc(65536*Math.random())
return e}
p&&!G(p.crypto)&&crypto.getRandomValues&&(Gt=e=>crypto.getRandomValues(e))
class Wt{constructor(){this._buffer=new Uint32Array(8),this._cursor=1/0}nextUint32(){return this._cursor>=this._buffer.length&&(Gt(this._buffer),this._cursor=0),this._buffer[this._cursor++]}}var zt=()=>Vt().toString(),Vt=()=>(Ut||(Ut=new Ht)).generate(),Qt="",Kt=/[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i
var Jt={_is_supported:()=>!!y,_error:function(e){ee.error("cookieStore error: "+e)},_get:function(e){if(y){try{for(var t=e+"=",n=y.cookie.split(";").filter((e=>e.length)),r=0;r<n.length;r++){for(var i=n[r];" "==i.charAt(0);)i=i.substring(1,i.length)
if(0===i.indexOf(t))return decodeURIComponent(i.substring(t.length,i.length))}}catch(e){}return null}},_parse:function(e){var t
try{t=JSON.parse(Jt._get(e))||{}}catch(e){}return t},_set:function(e,t,n,r,i){if(y)try{var s="",o="",a=function(e,t){if(t){var n=function(e,t){if(void 0===t&&(t=y),Qt)return Qt
if(!t)return""
if(["localhost","127.0.0.1"].includes(e))return""
for(var n=e.split("."),r=Math.min(n.length,8),i="dmn_chk_"+zt();!Qt&&r--;){var s=n.slice(r).join("."),o=i+"=1;domain=."+s+";path=/"
t.cookie=o+";max-age=3",t.cookie.includes(i)&&(t.cookie=o+";max-age=0",Qt=s)}return Qt}(e)
if(!n){var r=(e=>{var t=e.match(Kt)
return t?t[0]:""})(e)
r!==n&&ee.info("Warning: cookie subdomain discovery mismatch",r,n),n=r}return n?"; domain=."+n:""}return""}(y.location.hostname,r)
if(n){var l=new Date
l.setTime(l.getTime()+24*n*60*60*1e3),s="; expires="+l.toUTCString()}i&&(o="; secure")
var c=e+"="+encodeURIComponent(JSON.stringify(t))+s+"; SameSite=Lax; path=/"+a+o
return c.length>3686.4&&ee.warn("cookieStore warning: large cookie, len="+c.length),y.cookie=c,c}catch(e){return}},_remove:function(e,t){try{Jt._set(e,"",-1,t)}catch(e){return}}},Yt=null,Xt={_is_supported:function(){if(!V(Yt))return Yt
var e=!0
if(G(p))e=!1
else try{var t="__mplssupport__"
Xt._set(t,"xyz"),'"xyz"'!==Xt._get(t)&&(e=!1),Xt._remove(t)}catch(t){e=!1}return e||ee.error("localStorage unsupported; falling back to cookie store"),Yt=e,e},_error:function(e){ee.error("localStorage error: "+e)},_get:function(e){try{return null==p?void 0:p.localStorage.getItem(e)}catch(e){Xt._error(e)}return null},_parse:function(e){try{return JSON.parse(Xt._get(e))||{}}catch(e){}return null},_set:function(e,t){try{null==p||p.localStorage.setItem(e,JSON.stringify(t))}catch(e){Xt._error(e)}},_remove:function(e){try{null==p||p.localStorage.removeItem(e)}catch(e){Xt._error(e)}}},Zt=["distinct_id",Oe,Ae,Xe,Ye],en=f({},Xt,{_parse:function(e){try{var t={}
try{t=Jt._parse(e)||{}}catch(e){}var n=se(t,JSON.parse(Xt._get(e)||"{}"))
return Xt._set(e,n),n}catch(e){}return null},_set:function(e,t,n,r,i,s){try{Xt._set(e,t,void 0,void 0,s)
var o={}
Zt.forEach((e=>{t[e]&&(o[e]=t[e])})),Object.keys(o).length&&Jt._set(e,o,n,r,i,s)}catch(e){Xt._error(e)}},_remove:function(e,t){try{null==p||p.localStorage.removeItem(e),Jt._remove(e,t)}catch(e){Xt._error(e)}}}),tn={},nn={_is_supported:function(){return!0},_error:function(e){ee.error("memoryStorage error: "+e)},_get:function(e){return tn[e]||null},_parse:function(e){return tn[e]||null},_set:function(e,t){tn[e]=t},_remove:function(e){delete tn[e]}},rn=null,sn={_is_supported:function(){if(!V(rn))return rn
if(rn=!0,G(p))rn=!1
else try{var e="__support__"
sn._set(e,"xyz"),'"xyz"'!==sn._get(e)&&(rn=!1),sn._remove(e)}catch(e){rn=!1}return rn},_error:function(e){ee.error("sessionStorage error: ",e)},_get:function(e){try{return null==p?void 0:p.sessionStorage.getItem(e)}catch(e){sn._error(e)}return null},_parse:function(e){try{return JSON.parse(sn._get(e))||null}catch(e){}return null},_set:function(e,t){try{null==p||p.sessionStorage.setItem(e,JSON.stringify(t))}catch(e){sn._error(e)}},_remove:function(e){try{null==p||p.sessionStorage.removeItem(e)}catch(e){sn._error(e)}}},on=function(e){return e[e.PENDING=-1]="PENDING",e[e.DENIED=0]="DENIED",e[e.GRANTED=1]="GRANTED",e}({})
class an{constructor(e){this._instance=e}get _config(){return this._instance.config}get consent(){return this._getDnt()?on.DENIED:this._storedConsent}isOptedOut(){return this.consent===on.DENIED||this.consent===on.PENDING&&this._config.opt_out_capturing_by_default}isOptedIn(){return!this.isOptedOut()}optInOut(e){this._storage._set(this._storageKey,e?1:0,this._config.cookie_expiration,this._config.cross_subdomain_cookie,this._config.secure_cookie)}reset(){this._storage._remove(this._storageKey,this._config.cross_subdomain_cookie)}get _storageKey(){var{token:e,opt_out_capturing_cookie_prefix:t}=this._instance.config
return(t||"__ph_opt_in_out_")+e}get _storedConsent(){var e=this._storage._get(this._storageKey)
return"1"===e?on.GRANTED:"0"===e?on.DENIED:on.PENDING}get _storage(){if(!this._persistentStore){var e=this._config.opt_out_capturing_persistence_type
this._persistentStore="localStorage"===e?Xt:Jt
var t="localStorage"===e?Jt:Xt
t._get(this._storageKey)&&(this._persistentStore._get(this._storageKey)||this.optInOut("1"===t._get(this._storageKey)),t._remove(this._storageKey,this._config.cross_subdomain_cookie))}return this._persistentStore}_getDnt(){return!!this._config.respect_dnt&&!!he([null==b?void 0:b.doNotTrack,null==b?void 0:b.msDoNotTrack,C.doNotTrack],(e=>R([!0,1,"1","yes"],e)))}}var ln=te("[Dead Clicks]"),cn=()=>!0,un=e=>{var t,n=!(null==(t=e.instance.persistence)||!t.get_property(xe)),r=e.instance.config.capture_dead_clicks
return J(r)?r:n}
class dn{get lazyLoadedDeadClicksAutocapture(){return this._lazyLoadedDeadClicksAutocapture}constructor(e,t,n){this.instance=e,this.isEnabled=t,this.onCapture=n,this.startIfEnabled()}onRemoteConfig(e){this.instance.persistence&&this.instance.persistence.register({[xe]:null==e?void 0:e.captureDeadClicks}),this.startIfEnabled()}startIfEnabled(){this.isEnabled(this)&&this._loadScript((()=>{this._start()}))}_loadScript(e){var t,n
null!=(t=C.__PosthogExtensions__)&&t.initDeadClicksAutocapture&&e(),null==(n=C.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this.instance,"dead-clicks-autocapture",(t=>{t?ln.error("failed to load script",t):e()}))}_start(){var e
if(y){if(!this._lazyLoadedDeadClicksAutocapture&&null!=(e=C.__PosthogExtensions__)&&e.initDeadClicksAutocapture){var t=H(this.instance.config.capture_dead_clicks)?this.instance.config.capture_dead_clicks:{}
t.__onCapture=this.onCapture,this._lazyLoadedDeadClicksAutocapture=C.__PosthogExtensions__.initDeadClicksAutocapture(this.instance,t),this._lazyLoadedDeadClicksAutocapture.start(y),ln.info("starting...")}}else ln.error("`document` not found. Cannot start.")}stop(){this._lazyLoadedDeadClicksAutocapture&&(this._lazyLoadedDeadClicksAutocapture.stop(),this._lazyLoadedDeadClicksAutocapture=void 0,ln.info("stopping..."))}}function fn(e,t,n,r,i){return t>n&&(ee.warn("min cannot be greater than max."),t=n),K(e)?e>n?(r&&ee.warn(r+" cannot be  greater than max: "+n+". Using max value instead."),n):e<t?(r&&ee.warn(r+" cannot be less than min: "+t+". Using min value instead."),t):e:(r&&ee.warn(r+" must be a number. using max or fallback. max: "+n+", fallback: "+i),fn(i||n,t,n,r))}class hn{constructor(e){this._buckets={},this._refillBuckets=()=>{Object.keys(this._buckets).forEach((e=>{var t=this._getBucket(e)+this._refillRate
t>=this._bucketSize?delete this._buckets[e]:this._setBucket(e,t)}))},this._getBucket=e=>this._buckets[String(e)],this._setBucket=(e,t)=>{this._buckets[String(e)]=t},this.consumeRateLimit=e=>{var t,n=null!==(t=this._getBucket(e))&&void 0!==t?t:this._bucketSize
if(0===(n=Math.max(n-1,0)))return!0
this._setBucket(e,n)
var r,i=0===n
return i&&(null==(r=this._onBucketRateLimited)||r.call(this,e)),i},this._options=e,this._onBucketRateLimited=this._options._onBucketRateLimited,this._bucketSize=fn(this._options.bucketSize,0,100,"rate limiter bucket size"),this._refillRate=fn(this._options.refillRate,0,this._bucketSize,"rate limiter refill rate"),this._refillInterval=fn(this._options.refillInterval,0,864e5,"rate limiter refill interval"),setInterval((()=>{this._refillBuckets()}),this._refillInterval)}}var pn=te("[ExceptionAutocapture]")
class gn{constructor(e){var t,n,r
this._startCapturing=()=>{var e
if(p&&this.isEnabled&&null!=(e=C.__PosthogExtensions__)&&e.errorWrappingFunctions){var t=C.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,n=C.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,r=C.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError
try{!this._unwrapOnError&&this._config.capture_unhandled_errors&&(this._unwrapOnError=t(this.captureException.bind(this))),!this._unwrapUnhandledRejection&&this._config.capture_unhandled_rejections&&(this._unwrapUnhandledRejection=n(this.captureException.bind(this))),!this._unwrapConsoleError&&this._config.capture_console_errors&&(this._unwrapConsoleError=r(this.captureException.bind(this)))}catch(e){pn.error("failed to start",e),this._stopCapturing()}}},this._instance=e,this._remoteEnabled=!(null==(t=this._instance.persistence)||!t.props[ye]),this._config=this._requiredConfig(),this._rateLimiter=new hn({refillRate:null!==(n=this._instance.config.error_tracking.__exceptionRateLimiterRefillRate)&&void 0!==n?n:1,bucketSize:null!==(r=this._instance.config.error_tracking.__exceptionRateLimiterBucketSize)&&void 0!==r?r:10,refillInterval:1e4}),this.startIfEnabled()}_requiredConfig(){var e=this._instance.config.capture_exceptions,t={capture_unhandled_errors:!1,capture_unhandled_rejections:!1,capture_console_errors:!1}
return H(e)?t=f({},t,e):(G(e)?this._remoteEnabled:e)&&(t=f({},t,{capture_unhandled_errors:!0,capture_unhandled_rejections:!0})),t}get isEnabled(){return this._config.capture_console_errors||this._config.capture_unhandled_errors||this._config.capture_unhandled_rejections}startIfEnabled(){this.isEnabled&&(pn.info("enabled"),this._loadScript(this._startCapturing))}_loadScript(e){var t,n
null!=(t=C.__PosthogExtensions__)&&t.errorWrappingFunctions&&e(),null==(n=C.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"exception-autocapture",(t=>{if(t)return pn.error("failed to load script",t)
e()}))}_stopCapturing(){var e,t,n
null==(e=this._unwrapOnError)||e.call(this),this._unwrapOnError=void 0,null==(t=this._unwrapUnhandledRejection)||t.call(this),this._unwrapUnhandledRejection=void 0,null==(n=this._unwrapConsoleError)||n.call(this),this._unwrapConsoleError=void 0}onRemoteConfig(e){var t=e.autocaptureExceptions
this._remoteEnabled=!!t||!1,this._config=this._requiredConfig(),this._instance.persistence&&this._instance.persistence.register({[ye]:this._remoteEnabled}),this.startIfEnabled()}captureException(e){var t,n=this._instance.requestRouter.endpointFor("ui")
e.$exception_personURL=n+"/project/"+this._instance.config.token+"/person/"+this._instance.get_distinct_id()
var r=null!==(t=e.$exception_list[0].type)&&void 0!==t?t:"Exception"
this._rateLimiter.consumeRateLimit(r)?pn.info("Skipping exception capture because of client rate limiting.",{exception:e.$exception_list[0].type}):this._instance.exceptions.sendExceptionEvent(e)}}function _n(e){return!G(Event)&&vn(e,Event)}function vn(e,t){try{return e instanceof t}catch(e){return!1}}function mn(e){switch(Object.prototype.toString.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":case"[object DOMError]":return!0
default:return vn(e,Error)}}function bn(e,t){return Object.prototype.toString.call(e)==="[object "+t+"]"}function yn(e){return bn(e,"DOMError")}var wn=/\(error: (.*)\)/,kn="?"
function Sn(e,t,n,r){var i={platform:"web:javascript",filename:e,function:"<anonymous>"===t?kn:t,in_app:!0}
return G(n)||(i.lineno=n),G(r)||(i.colno=r),i}var xn=/^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,En=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,Cn=/\((\S*)(?::(\d+))(?::(\d+))\)/,Tn=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,Pn=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,$n=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=t.sort(((e,t)=>e[0]-t[0])).map((e=>e[1]))
return function(e,t){void 0===t&&(t=0)
for(var n=[],i=e.split("\n"),s=t;s<i.length;s++){var o=i[s]
if(!(o.length>1024)){var a=wn.test(o)?o.replace(wn,"$1"):o
if(!a.match(/\S*Error: /)){for(var l of r){var c=l(a)
if(c){n.push(c)
break}}if(n.length>=50)break}}}return function(e){if(!e.length)return[]
var t=Array.from(e)
return t.reverse(),t.slice(0,50).map((e=>f({},e,{filename:e.filename||Ln(t).filename,function:e.function||kn})))}(n)}}([30,e=>{var t=xn.exec(e)
if(t){var[,n,r,i]=t
return Sn(n,kn,+r,+i)}var s=En.exec(e)
if(s){if(s[2]&&0===s[2].indexOf("eval")){var o=Cn.exec(s[2])
o&&(s[2]=o[1],s[3]=o[2],s[4]=o[3])}var[a,l]=On(s[1]||kn,s[2])
return Sn(l,a,s[3]?+s[3]:void 0,s[4]?+s[4]:void 0)}}],[50,e=>{var t=Tn.exec(e)
if(t){if(t[3]&&t[3].indexOf(" > eval")>-1){var n=Pn.exec(t[3])
n&&(t[1]=t[1]||"eval",t[3]=n[1],t[4]=n[2],t[5]="")}var r=t[3],i=t[1]||kn
return[i,r]=On(i,r),Sn(r,i,t[4]?+t[4]:void 0,t[5]?+t[5]:void 0)}}])
function Ln(e){return e[e.length-1]||{}}var In,Mn,Rn,On=(e,t)=>{var n=-1!==e.indexOf("safari-extension"),r=-1!==e.indexOf("safari-web-extension")
return n||r?[-1!==e.indexOf("@")?e.split("@")[0]:kn,n?"safari-extension:"+t:"safari-web-extension:"+t]:[e,t]},An=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
function Fn(e,t){void 0===t&&(t=0)
var n=e.stacktrace||e.stack||"",r=function(e){return e&&jn.test(e.message)?1:0}(e)
try{var i=$n,s=function(e,t){var n=function(e){var t=globalThis._posthogChunkIds
if(!t)return{}
var n=Object.keys(t)
return Rn&&n.length===Mn||(Mn=n.length,Rn=n.reduce(((n,r)=>{In||(In={})
var i=In[r]
if(i)n[i[0]]=i[1]
else for(var s=e(r),o=s.length-1;o>=0;o--){var a=s[o],l=null==a?void 0:a.filename,c=t[r]
if(l&&c){n[l]=c,In[r]=[l,c]
break}}return n}),{})),Rn}(t)
return e.forEach((e=>{e.filename&&(e.chunk_id=n[e.filename])})),e}(i(n,r),i)
return s.slice(0,s.length-t)}catch(e){}return[]}var jn=/Minified React error #\d+;/i
function Nn(e,t){var n=function(e,t){var n,r,i=Fn(e),s=null===(n=null==t?void 0:t.handled)||void 0===n||n,o=null!==(r=null==t?void 0:t.synthetic)&&void 0!==r&&r
return{type:null!=t&&t.overrideExceptionType?t.overrideExceptionType:e.name,value:function(e){var t=e.message
return t.error&&"string"==typeof t.error.message?String(t.error.message):String(t)}(e),stacktrace:{frames:i,type:"raw"},mechanism:{handled:s,synthetic:o}}}(e,t)
return e.cause&&mn(e.cause)&&e.cause!==e?[n,...Nn(e.cause,{handled:null==t?void 0:t.handled,synthetic:null==t?void 0:t.synthetic})]:[n]}function Dn(e,t){return{$exception_list:Nn(e,t),$exception_level:"error"}}function Bn(e,t){var n,r,i,s=null===(n=null==t?void 0:t.handled)||void 0===n||n,o=null===(r=null==t?void 0:t.synthetic)||void 0===r||r,a={type:null!=t&&t.overrideExceptionType?t.overrideExceptionType:null!==(i=null==t?void 0:t.defaultExceptionType)&&void 0!==i?i:"Error",value:e||(null==t?void 0:t.defaultExceptionMessage),mechanism:{handled:s,synthetic:o}}
if(null!=t&&t.syntheticException){var l=Fn(t.syntheticException,1)
l.length&&(a.stacktrace={frames:l,type:"raw"})}return{$exception_list:[a],$exception_level:"error"}}function qn(e){return W(e)&&!z(e)&&M.indexOf(e)>=0}function Hn(e,t){var{error:n,event:r}=e,i={$exception_list:[]},s=n||r
if(yn(s)||function(e){return bn(e,"DOMException")}(s)){var o=s
if(function(e){return"stack"in e}(s))i=Dn(s,t)
else{var a=o.name||(yn(o)?"DOMError":"DOMException"),l=o.message?a+": "+o.message:a
i=Bn(l,f({},t,{overrideExceptionType:yn(o)?"DOMError":"DOMException",defaultExceptionMessage:l}))}return"code"in o&&(i.$exception_DOMException_code=""+o.code),i}if(function(e){return bn(e,"ErrorEvent")}(s)&&s.error)return Dn(s.error,t)
if(mn(s))return Dn(s,t)
if(function(e){return bn(e,"Object")}(s)||_n(s))return function(e,t){var n,r,i=null===(n=null==t?void 0:t.handled)||void 0===n||n,s=null===(r=null==t?void 0:t.synthetic)||void 0===r||r,o=null!=t&&t.overrideExceptionType?t.overrideExceptionType:_n(e)?e.constructor.name:"Error",a="Non-Error 'exception' captured with keys: "+function(e,t){void 0===t&&(t=40)
var n=Object.keys(e)
if(n.sort(),!n.length)return"[object has no keys]"
for(var r=n.length;r>0;r--){var i=n.slice(0,r).join(", ")
if(!(i.length>t))return r===n.length||i.length<=t?i:i.slice(0,t)+"..."}return""}(e),l={type:o,value:a,mechanism:{handled:i,synthetic:s}}
if(null!=t&&t.syntheticException){var c=Fn(null==t?void 0:t.syntheticException,1)
c.length&&(l.stacktrace={frames:c,type:"raw"})}return{$exception_list:[l],$exception_level:qn(e.level)?e.level:"error"}}(s,t)
if(G(n)&&W(r)){var c="Error",u=r,d=r.match(An)
return d&&(c=d[1],u=d[2]),Bn(u,f({},t,{overrideExceptionType:c,defaultExceptionMessage:u}))}return Bn(s,t)}function Un(e,t,n){try{if(!(t in e))return()=>{}
var r=e[t],i=n(r)
return q(i)&&(i.prototype=i.prototype||{},Object.defineProperties(i,{__posthog_wrapped__:{enumerable:!1,value:!0}})),e[t]=i,()=>{e[t]=r}}catch(e){return()=>{}}}class Gn{constructor(e){var t
this._instance=e,this._lastPathname=(null==p||null==(t=p.location)?void 0:t.pathname)||""}get isEnabled(){return"history_change"===this._instance.config.capture_pageview}startIfEnabled(){this.isEnabled&&(ee.info("History API monitoring enabled, starting..."),this.monitorHistoryChanges())}stop(){this._popstateListener&&this._popstateListener(),this._popstateListener=void 0,ee.info("History API monitoring stopped")}monitorHistoryChanges(){var e,t
if(p&&p.history){var n=this
null!=(e=p.history.pushState)&&e.__posthog_wrapped__||Un(p.history,"pushState",(e=>function(t,r,i){e.call(this,t,r,i),n._capturePageview("pushState")})),null!=(t=p.history.replaceState)&&t.__posthog_wrapped__||Un(p.history,"replaceState",(e=>function(t,r,i){e.call(this,t,r,i),n._capturePageview("replaceState")})),this._setupPopstateListener()}}_capturePageview(e){try{var t,n=null==p||null==(t=p.location)?void 0:t.pathname
if(!n)return
n!==this._lastPathname&&this.isEnabled&&this._instance.capture("$pageview",{navigation_type:e}),this._lastPathname=n}catch(t){ee.error("Error capturing "+e+" pageview",t)}}_setupPopstateListener(){if(!this._popstateListener){var e=()=>{this._capturePageview("popstate")}
pe(p,"popstate",e),this._popstateListener=()=>{p&&p.removeEventListener("popstate",e)}}}}function Wn(e){var t,n
return(null==(t=JSON.stringify(e,(n=[],function(e,t){if(H(t)){for(;n.length>0&&n[n.length-1]!==this;)n.pop()
return n.includes(t)?"[Circular]":(n.push(t),t)}return t})))?void 0:t.length)||0}function zn(e,t){if(void 0===t&&(t=6606028.8),e.size>=t&&e.data.length>1){var n=Math.floor(e.data.length/2),r=e.data.slice(0,n),i=e.data.slice(n)
return[zn({size:Wn(r),data:r,sessionId:e.sessionId,windowId:e.windowId}),zn({size:Wn(i),data:i,sessionId:e.sessionId,windowId:e.windowId})].flatMap((e=>e))}return[e]}var Vn=(e=>(e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin",e))(Vn||{}),Qn=(e=>(e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration",e[e.Selection=14]="Selection",e[e.AdoptedStyleSheet=15]="AdoptedStyleSheet",e[e.CustomElement=16]="CustomElement",e))(Qn||{}),Kn="[SessionRecording]",Jn="redacted",Yn={initiatorTypes:["audio","beacon","body","css","early-hint","embed","fetch","frame","iframe","icon","image","img","input","link","navigation","object","ping","script","track","video","xmlhttprequest"],maskRequestFn:e=>e,recordHeaders:!1,recordBody:!1,recordInitialRequests:!1,recordPerformance:!1,performanceEntryTypeToObserve:["first-input","navigation","paint","resource"],payloadSizeLimitBytes:1e6,payloadHostDenyList:[".lr-ingest.io",".ingest.sentry.io",".clarity.ms","analytics.google.com","bam.nr-data.net"]},Xn=["authorization","x-forwarded-for","authorization","cookie","set-cookie","x-api-key","x-real-ip","remote-addr","forwarded","proxy-authorization","x-csrf-token","x-csrftoken","x-xsrf-token"],Zn=["password","secret","passwd","api_key","apikey","auth","credentials","mysql_pwd","privatekey","private_key","token"],er=["/s/","/e/","/i/"]
function tr(e,t,n,r){if(Q(e))return e
var i=(null==t?void 0:t["content-length"])||function(e){return new Blob([e]).size}(e)
return W(i)&&(i=parseInt(i)),i>n?Kn+" "+r+" body too large to record ("+i+" bytes)":e}function nr(e,t){if(Q(e))return e
var n=e
return St(n,!1)||(n=Kn+" "+t+" body "+Jn),ie(Zn,(e=>{var r,i
null!=(r=n)&&r.length&&-1!==(null==(i=n)?void 0:i.indexOf(e))&&(n=Kn+" "+t+" body "+Jn+" as might contain: "+e)})),n}var rr=(e,t)=>{var n,r,i,s={payloadSizeLimitBytes:Yn.payloadSizeLimitBytes,performanceEntryTypeToObserve:[...Yn.performanceEntryTypeToObserve],payloadHostDenyList:[...t.payloadHostDenyList||[],...Yn.payloadHostDenyList]},o=!1!==e.session_recording.recordHeaders&&t.recordHeaders,a=!1!==e.session_recording.recordBody&&t.recordBody,l=!1!==e.capture_performance&&t.recordPerformance,c=(n=s,i=Math.min(1e6,null!==(r=n.payloadSizeLimitBytes)&&void 0!==r?r:1e6),e=>(null!=e&&e.requestBody&&(e.requestBody=tr(e.requestBody,e.requestHeaders,i,"Request")),null!=e&&e.responseBody&&(e.responseBody=tr(e.responseBody,e.responseHeaders,i,"Response")),e)),u=t=>{return c(((e,t)=>{var n,r=It(e.name),i=0===t.indexOf("http")?null==(n=It(t))?void 0:n.pathname:t
"/"===i&&(i="")
var s=null==r?void 0:r.pathname.replace(i||"","")
if(!(r&&s&&er.some((e=>0===s.indexOf(e)))))return e})((r=(n=t).requestHeaders,Q(r)||ie(Object.keys(null!=r?r:{}),(e=>{Xn.includes(e.toLowerCase())&&(r[e]=Jn)})),n),e.api_host))
var n,r},d=q(e.session_recording.maskNetworkRequestFn)
return d&&q(e.session_recording.maskCapturedNetworkRequestFn)&&ee.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."),d&&(e.session_recording.maskCapturedNetworkRequestFn=t=>{var n=e.session_recording.maskNetworkRequestFn({url:t.name})
return f({},t,{name:null==n?void 0:n.url})}),s.maskRequestFn=q(e.session_recording.maskCapturedNetworkRequestFn)?t=>{var n,r=u(t)
return r&&null!==(n=null==e.session_recording.maskCapturedNetworkRequestFn?void 0:e.session_recording.maskCapturedNetworkRequestFn(r))&&void 0!==n?n:void 0}:e=>function(e){if(!G(e))return e.requestBody=nr(e.requestBody,"Request"),e.responseBody=nr(e.responseBody,"Response"),e}(u(e)),f({},Yn,s,{recordHeaders:o,recordBody:a,recordPerformance:l,recordInitialRequests:l})}
class ir{constructor(e,t){var n,r
void 0===t&&(t={}),this._loggedTracker={},this._onNodeRateLimited=e=>{if(!this._loggedTracker[e]){var t,n
this._loggedTracker[e]=!0
var r=this._getNode(e)
null==(t=(n=this._options).onBlockedNode)||t.call(n,e,r)}},this._getNodeOrRelevantParent=e=>{var t=this._getNode(e)
if("svg"!==(null==t?void 0:t.nodeName)&&t instanceof Element){var n=t.closest("svg")
if(n)return[this._rrweb.mirror.getId(n),n]}return[e,t]},this._getNode=e=>this._rrweb.mirror.getNode(e),this._numberOfChanges=e=>{var t,n,r,i,s,o,a,l
return(null!==(t=null==(n=e.removes)?void 0:n.length)&&void 0!==t?t:0)+(null!==(r=null==(i=e.attributes)?void 0:i.length)&&void 0!==r?r:0)+(null!==(s=null==(o=e.texts)?void 0:o.length)&&void 0!==s?s:0)+(null!==(a=null==(l=e.adds)?void 0:l.length)&&void 0!==a?a:0)},this.throttleMutations=e=>{if(3!==e.type||0!==e.data.source)return e
var t=e.data,n=this._numberOfChanges(t)
t.attributes&&(t.attributes=t.attributes.filter((e=>{var[t]=this._getNodeOrRelevantParent(e.id)
return!this._rateLimiter.consumeRateLimit(t)&&e})))
var r=this._numberOfChanges(t)
return 0!==r||n===r?e:void 0},this._rrweb=e,this._options=t,this._rateLimiter=new hn({bucketSize:null!==(n=this._options.bucketSize)&&void 0!==n?n:100,refillRate:null!==(r=this._options.refillRate)&&void 0!==r?r:10,refillInterval:1e3,_onBucketRateLimited:this._onNodeRateLimited})}}var sr=Uint8Array,or=Uint16Array,ar=Uint32Array,lr=new sr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),cr=new sr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ur=new sr([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),dr=function(e,t){for(var n=new or(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1]
var i=new ar(n[30])
for(r=1;r<30;++r)for(var s=n[r];s<n[r+1];++s)i[s]=s-n[r]<<5|r
return[n,i]},fr=dr(lr,2),hr=fr[0],pr=fr[1]
hr[28]=258,pr[258]=28
for(var gr=dr(cr,0)[1],_r=new or(32768),vr=0;vr<32768;++vr){var mr=(43690&vr)>>>1|(21845&vr)<<1
mr=(61680&(mr=(52428&mr)>>>2|(13107&mr)<<2))>>>4|(3855&mr)<<4,_r[vr]=((65280&mr)>>>8|(255&mr)<<8)>>>1}var br=function(e,t,n){for(var r=e.length,i=0,s=new or(t);i<r;++i)++s[e[i]-1]
var o,a=new or(t)
for(i=0;i<t;++i)a[i]=a[i-1]+s[i-1]<<1
for(o=new or(r),i=0;i<r;++i)o[i]=_r[a[e[i]-1]++]>>>15-e[i]
return o},yr=new sr(288)
for(vr=0;vr<144;++vr)yr[vr]=8
for(vr=144;vr<256;++vr)yr[vr]=9
for(vr=256;vr<280;++vr)yr[vr]=7
for(vr=280;vr<288;++vr)yr[vr]=8
var wr=new sr(32)
for(vr=0;vr<32;++vr)wr[vr]=5
var kr=br(yr,9),Sr=br(wr,5),xr=function(e){return(e/8>>0)+(7&e&&1)},Er=function(e,t,n){(null==n||n>e.length)&&(n=e.length)
var r=new(e instanceof or?or:e instanceof ar?ar:sr)(n-t)
return r.set(e.subarray(t,n)),r},Cr=function(e,t,n){n<<=7&t
var r=t/8>>0
e[r]|=n,e[r+1]|=n>>>8},Tr=function(e,t,n){n<<=7&t
var r=t/8>>0
e[r]|=n,e[r+1]|=n>>>8,e[r+2]|=n>>>16},Pr=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]})
var i=n.length,s=n.slice()
if(!i)return[new sr(0),0]
if(1==i){var o=new sr(n[0].s+1)
return o[n[0].s]=1,[o,1]}n.sort((function(e,t){return e.f-t.f})),n.push({s:-1,f:25001})
var a=n[0],l=n[1],c=0,u=1,d=2
for(n[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=i-1;)a=n[n[c].f<n[d].f?c++:d++],l=n[c!=u&&n[c].f<n[d].f?c++:d++],n[u++]={s:-1,f:a.f+l.f,l:a,r:l}
var f=s[0].s
for(r=1;r<i;++r)s[r].s>f&&(f=s[r].s)
var h=new or(f+1),p=$r(n[u-1],h,0)
if(p>t){r=0
var g=0,_=p-t,v=1<<_
for(s.sort((function(e,t){return h[t.s]-h[e.s]||e.f-t.f}));r<i;++r){var m=s[r].s
if(!(h[m]>t))break
g+=v-(1<<p-h[m]),h[m]=t}for(g>>>=_;g>0;){var b=s[r].s
h[b]<t?g-=1<<t-h[b]++-1:++r}for(;r>=0&&g;--r){var y=s[r].s
h[y]==t&&(--h[y],++g)}p=t}return[new sr(h),p]},$r=function(e,t,n){return-1==e.s?Math.max($r(e.l,t,n+1),$r(e.r,t,n+1)):t[e.s]=n},Lr=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new or(++t),r=0,i=e[0],s=1,o=function(e){n[r++]=e},a=1;a<=t;++a)if(e[a]==i&&a!=t)++s
else{if(!i&&s>2){for(;s>138;s-=138)o(32754)
s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(i),--s;s>6;s-=6)o(8304)
s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(i)
s=1,i=e[a]}return[n.subarray(0,r),t]},Ir=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r]
return n},Mr=function(e,t,n){var r=n.length,i=xr(t+2)
e[i]=255&r,e[i+1]=r>>>8,e[i+2]=255^e[i],e[i+3]=255^e[i+1]
for(var s=0;s<r;++s)e[i+s+4]=n[s]
return 8*(i+4+r)},Rr=function(e,t,n,r,i,s,o,a,l,c,u){Cr(t,u++,n),++i[256]
for(var d=Pr(i,15),f=d[0],h=d[1],p=Pr(s,15),g=p[0],_=p[1],v=Lr(f),m=v[0],b=v[1],y=Lr(g),w=y[0],k=y[1],S=new or(19),x=0;x<m.length;++x)S[31&m[x]]++
for(x=0;x<w.length;++x)S[31&w[x]]++
for(var E=Pr(S,7),C=E[0],T=E[1],P=19;P>4&&!C[ur[P-1]];--P);var $,L,I,M,R=c+5<<3,O=Ir(i,yr)+Ir(s,wr)+o,A=Ir(i,f)+Ir(s,g)+o+14+3*P+Ir(S,C)+(2*S[16]+3*S[17]+7*S[18])
if(R<=O&&R<=A)return Mr(t,u,e.subarray(l,l+c))
if(Cr(t,u,1+(A<O)),u+=2,A<O){$=br(f,h),L=f,I=br(g,_),M=g
var F=br(C,T)
for(Cr(t,u,b-257),Cr(t,u+5,k-1),Cr(t,u+10,P-4),u+=14,x=0;x<P;++x)Cr(t,u+3*x,C[ur[x]])
u+=3*P
for(var j=[m,w],N=0;N<2;++N){var D=j[N]
for(x=0;x<D.length;++x){var B=31&D[x]
Cr(t,u,F[B]),u+=C[B],B>15&&(Cr(t,u,D[x]>>>5&127),u+=D[x]>>>12)}}}else $=kr,L=yr,I=Sr,M=wr
for(x=0;x<a;++x)if(r[x]>255){B=r[x]>>>18&31,Tr(t,u,$[B+257]),u+=L[B+257],B>7&&(Cr(t,u,r[x]>>>23&31),u+=lr[B])
var q=31&r[x]
Tr(t,u,I[q]),u+=M[q],q>3&&(Tr(t,u,r[x]>>>5&8191),u+=cr[q])}else Tr(t,u,$[r[x]]),u+=L[r[x]]
return Tr(t,u,$[256]),u+L[256]},Or=new ar([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Ar=function(){for(var e=new ar(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(1&n&&3988292384)^n>>>1
e[t]=n}return e}(),Fr=function(){var e=4294967295
return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=Ar[255&n^t[r]]^n>>>8
e=n},d:function(){return 4294967295^e}}},jr=function(e,t,n,r,i){return function(e,t,n,r,i,s){var o=e.length,a=new sr(r+o+5*(1+Math.floor(o/7e3))+i),l=a.subarray(r,a.length-i),c=0
if(!t||o<8)for(var u=0;u<=o;u+=65535){var d=u+65535
d<o?c=Mr(l,c,e.subarray(u,d)):(l[u]=true,c=Mr(l,c,e.subarray(u,o)))}else{for(var f=Or[t-1],h=f>>>13,p=8191&f,g=(1<<n)-1,_=new or(32768),v=new or(g+1),m=Math.ceil(n/3),b=2*m,y=function(t){return(e[t]^e[t+1]<<m^e[t+2]<<b)&g},w=new ar(25e3),k=new or(288),S=new or(32),x=0,E=0,C=(u=0,0),T=0,P=0;u<o;++u){var $=y(u),L=32767&u,I=v[$]
if(_[L]=I,v[$]=L,T<=u){var M=o-u
if((x>7e3||C>24576)&&M>423){c=Rr(e,l,0,w,k,S,E,C,P,u-P,c),C=x=E=0,P=u
for(var R=0;R<286;++R)k[R]=0
for(R=0;R<30;++R)S[R]=0}var O=2,A=0,F=p,j=L-I&32767
if(M>2&&$==y(u-j))for(var N=Math.min(h,M)-1,D=Math.min(32767,u),B=Math.min(258,M);j<=D&&--F&&L!=I;){if(e[u+O]==e[u+O-j]){for(var q=0;q<B&&e[u+q]==e[u+q-j];++q);if(q>O){if(O=q,A=j,q>N)break
var H=Math.min(j,q-2),U=0
for(R=0;R<H;++R){var G=u-j+R+32768&32767,W=G-_[G]+32768&32767
W>U&&(U=W,I=G)}}}j+=(L=I)-(I=_[L])+32768&32767}if(A){w[C++]=268435456|pr[O]<<18|gr[A]
var z=31&pr[O],V=31&gr[A]
E+=lr[z]+cr[V],++k[257+z],++S[V],T=u+O,++x}else w[C++]=e[u],++k[e[u]]}}c=Rr(e,l,true,w,k,S,E,C,P,u-P,c)}return Er(a,0,r+xr(c)+i)}(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,n,r)},Nr=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},Dr=function(e,t){var n=t.filename
if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:9==t.level?2:0,e[9]=3,0!=t.mtime&&Nr(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8
for(var r=0;r<=n.length;++r)e[r+10]=n.charCodeAt(r)}},Br=function(e){return 10+(e.filename&&e.filename.length+1||0)}
function qr(e,t){void 0===t&&(t={})
var n=Fr(),r=e.length
n.p(e)
var i=jr(e,t,Br(t),8),s=i.length
return Dr(i,t),Nr(i,s-8,n.d()),Nr(i,s-4,r),i}function Hr(e,t){var n=e.length
if("undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e)
for(var r=new sr(e.length+(e.length>>>1)),i=0,s=function(e){r[i++]=e},o=0;o<n;++o){if(i+5>r.length){var a=new sr(i+8+(n-o<<1))
a.set(r),r=a}var l=e.charCodeAt(o)
l<128||t?s(l):l<2048?(s(192|l>>>6),s(128|63&l)):l>55295&&l<57344?(s(240|(l=65536+(1047552&l)|1023&e.charCodeAt(++o))>>>18),s(128|l>>>12&63),s(128|l>>>6&63),s(128|63&l)):(s(224|l>>>12),s(128|l>>>6&63),s(128|63&l))}return Er(r,0,i)}var Ur="disabled",Gr="sampled",Wr="active",zr="buffering",Vr="paused",Qr="trigger",Kr=Qr+"_activated",Jr=Qr+"_pending",Yr=Qr+"_"+Ur
function Xr(e,t){return t.some((t=>"regex"===t.matching&&new RegExp(t.url).test(e)))}class Zr{constructor(e){this._matchers=e}triggerStatus(e){var t=this._matchers.map((t=>t.triggerStatus(e)))
return t.includes(Kr)?Kr:t.includes(Jr)?Jr:Yr}stop(){this._matchers.forEach((e=>e.stop()))}}class ei{constructor(e){this._matchers=e}triggerStatus(e){var t=new Set
for(var n of this._matchers)t.add(n.triggerStatus(e))
switch(t.delete(Yr),t.size){case 0:return Yr
case 1:return Array.from(t)[0]
default:return Jr}}stop(){this._matchers.forEach((e=>e.stop()))}}class ti{triggerStatus(){return Jr}stop(){}}class ni{constructor(e){this._urlTriggers=[],this._urlBlocklist=[],this.urlBlocked=!1,this._instance=e}onRemoteConfig(e){var t,n
this._urlTriggers=(null==(t=e.sessionRecording)?void 0:t.urlTriggers)||[],this._urlBlocklist=(null==(n=e.sessionRecording)?void 0:n.urlBlocklist)||[]}_urlTriggerStatus(e){var t
return 0===this._urlTriggers.length?Yr:(null==(t=this._instance)?void 0:t.get_property(Fe))===e?Kr:Jr}triggerStatus(e){var t=this._urlTriggerStatus(e),n=t===Kr?Kr:t===Jr?Jr:Yr
return this._instance.register_for_session({$sdk_debug_replay_url_trigger_status:n}),n}checkUrlTriggerConditions(e,t,n){if(void 0!==p&&p.location.href){var r=p.location.href,i=this.urlBlocked,s=Xr(r,this._urlBlocklist)
i&&s||(s&&!i?e():!s&&i&&t(),Xr(r,this._urlTriggers)&&n("url"))}}stop(){}}class ri{constructor(e){this.linkedFlag=null,this.linkedFlagSeen=!1,this._flaglistenerCleanup=()=>{},this._instance=e}triggerStatus(){var e=Jr
return Q(this.linkedFlag)&&(e=Yr),this.linkedFlagSeen&&(e=Kr),this._instance.register_for_session({$sdk_debug_replay_linked_flag_trigger_status:e}),e}onRemoteConfig(e,t){var n
if(this.linkedFlag=(null==(n=e.sessionRecording)?void 0:n.linkedFlag)||null,!Q(this.linkedFlag)&&!this.linkedFlagSeen){var r=W(this.linkedFlag)?this.linkedFlag:this.linkedFlag.flag,i=W(this.linkedFlag)?null:this.linkedFlag.variant
this._flaglistenerCleanup=this._instance.onFeatureFlags(((e,n)=>{var s=!1
if(H(n)&&r in n){var o=n[r]
s=J(o)?!0===o:i?o===i:!!o}this.linkedFlagSeen=s,s&&t(r,i)}))}}stop(){this._flaglistenerCleanup()}}class ii{constructor(e){this._eventTriggers=[],this._instance=e}onRemoteConfig(e){var t
this._eventTriggers=(null==(t=e.sessionRecording)?void 0:t.eventTriggers)||[]}_eventTriggerStatus(e){var t
return 0===this._eventTriggers.length?Yr:(null==(t=this._instance)?void 0:t.get_property(je))===e?Kr:Jr}triggerStatus(e){var t=this._eventTriggerStatus(e),n=t===Kr?Kr:t===Jr?Jr:Yr
return this._instance.register_for_session({$sdk_debug_replay_event_trigger_status:n}),n}stop(){}}function si(e){return e.isRecordingEnabled?zr:Ur}function oi(e){if(!e.receivedFlags)return zr
if(!e.isRecordingEnabled)return Ur
if(e.urlTriggerMatching.urlBlocked)return Vr
var t=!0===e.isSampled,n=new Zr([e.eventTriggerMatching,e.urlTriggerMatching,e.linkedFlagMatching]).triggerStatus(e.sessionId)
return t?Gr:n===Kr?Wr:n===Jr?zr:!1===e.isSampled?Ur:Wr}function ai(e){if(!e.receivedFlags)return zr
if(!e.isRecordingEnabled)return Ur
if(e.urlTriggerMatching.urlBlocked)return Vr
var t=new ei([e.eventTriggerMatching,e.urlTriggerMatching,e.linkedFlagMatching]).triggerStatus(e.sessionId),n=t!==Yr,r=J(e.isSampled)
return n&&t===Jr?zr:n&&t===Yr||r&&!e.isSampled?Ur:!0===e.isSampled?Gr:Wr}var li="[SessionRecording]",ci=te(li)
function ui(){var e
return null==C||null==(e=C.__PosthogExtensions__)||null==(e=e.rrweb)?void 0:e.record}var di=[Qn.MouseMove,Qn.MouseInteraction,Qn.Scroll,Qn.ViewportResize,Qn.Input,Qn.TouchMove,Qn.MediaInteraction,Qn.Drag],fi=e=>({rrwebMethod:e,enqueuedAt:Date.now(),attempt:1})
function hi(e){return function(e,t){for(var n="",r=0;r<e.length;){var i=e[r++]
n+=String.fromCharCode(i)}return n}(qr(Hr(JSON.stringify(e))))}function pi(e){return e.type===Vn.Custom&&"sessionIdle"===e.data.tag}class gi{get sessionId(){return this._sessionId}get _sessionIdleThresholdMilliseconds(){return this._instance.config.session_recording.session_idle_threshold_ms||3e5}get started(){return this._captureStarted}get _sessionManager(){if(!this._instance.sessionManager)throw new Error(li+" must be started with a valid sessionManager.")
return this._instance.sessionManager}get _fullSnapshotIntervalMillis(){var e,t
return this._triggerMatching.triggerStatus(this.sessionId)===Jr?6e4:null!==(e=null==(t=this._instance.config.session_recording)?void 0:t.full_snapshot_interval_millis)&&void 0!==e?e:3e5}get _isSampled(){var e=this._instance.get_property(Ae)
return J(e)?e:null}get _sessionDuration(){var e,t,n=null==(e=this._buffer)?void 0:e.data[(null==(t=this._buffer)?void 0:t.data.length)-1],{sessionStartTimestamp:r}=this._sessionManager.checkAndGetSessionAndWindowId(!0)
return n?n.timestamp-r:null}get _isRecordingEnabled(){var e=!!this._instance.get_property(Ce),t=!this._instance.config.disable_session_recording
return p&&e&&t}get _isConsoleLogCaptureEnabled(){var e=!!this._instance.get_property(Te),t=this._instance.config.enable_recording_console_log
return null!=t?t:e}get _canvasRecording(){var e,t,n,r,i,s,o=this._instance.config.session_recording.captureCanvas,a=this._instance.get_property(Le),l=null!==(e=null!==(t=null==o?void 0:o.recordCanvas)&&void 0!==t?t:null==a?void 0:a.enabled)&&void 0!==e&&e,c=null!==(n=null!==(r=null==o?void 0:o.canvasFps)&&void 0!==r?r:null==a?void 0:a.fps)&&void 0!==n?n:4,u=null!==(i=null!==(s=null==o?void 0:o.canvasQuality)&&void 0!==s?s:null==a?void 0:a.quality)&&void 0!==i?i:.4
if("string"==typeof u){var d=parseFloat(u)
u=isNaN(d)?.4:d}return{enabled:l,fps:fn(c,0,12,"canvas recording fps",4),quality:fn(u,0,1,"canvas recording quality",.4)}}get _networkPayloadCapture(){var e,t,n=this._instance.get_property(Pe),r={recordHeaders:null==(e=this._instance.config.session_recording)?void 0:e.recordHeaders,recordBody:null==(t=this._instance.config.session_recording)?void 0:t.recordBody},i=(null==r?void 0:r.recordHeaders)||(null==n?void 0:n.recordHeaders),s=(null==r?void 0:r.recordBody)||(null==n?void 0:n.recordBody),o=H(this._instance.config.capture_performance)?this._instance.config.capture_performance.network_timing:this._instance.config.capture_performance,a=!!(J(o)?o:null==n?void 0:n.capturePerformance)
return i||s||a?{recordHeaders:i,recordBody:s,recordPerformance:a}:void 0}get _masking(){var e,t,n,r,i,s,o=this._instance.get_property($e),a={maskAllInputs:null==(e=this._instance.config.session_recording)?void 0:e.maskAllInputs,maskTextSelector:null==(t=this._instance.config.session_recording)?void 0:t.maskTextSelector,blockSelector:null==(n=this._instance.config.session_recording)?void 0:n.blockSelector},l=null!==(r=null==a?void 0:a.maskAllInputs)&&void 0!==r?r:null==o?void 0:o.maskAllInputs,c=null!==(i=null==a?void 0:a.maskTextSelector)&&void 0!==i?i:null==o?void 0:o.maskTextSelector,u=null!==(s=null==a?void 0:a.blockSelector)&&void 0!==s?s:null==o?void 0:o.blockSelector
return G(l)&&G(c)&&G(u)?void 0:{maskAllInputs:null==l||l,maskTextSelector:c,blockSelector:u}}get _sampleRate(){var e=this._instance.get_property(Ie)
return K(e)?e:null}get _minimumDuration(){var e=this._instance.get_property(Me)
return K(e)?e:null}get status(){return this._receivedFlags?this._statusMatcher({receivedFlags:this._receivedFlags,isRecordingEnabled:this._isRecordingEnabled,isSampled:this._isSampled,urlTriggerMatching:this._urlTriggerMatching,eventTriggerMatching:this._eventTriggerMatching,linkedFlagMatching:this._linkedFlagMatching,sessionId:this.sessionId}):zr}constructor(e){if(this._statusMatcher=si,this._receivedFlags=!1,this._queuedRRWebEvents=[],this._isIdle="unknown",this._lastActivityTimestamp=Date.now(),this._triggerMatching=new ti,this._removePageViewCaptureHook=void 0,this._onSessionIdListener=void 0,this._persistFlagsOnSessionListener=void 0,this._samplingSessionListener=void 0,this._removeEventTriggerCaptureHook=void 0,this._forceAllowLocalhostNetworkCapture=!1,this._onBeforeUnload=()=>{this._flushBuffer()},this._onOffline=()=>{this._tryAddCustomEvent("browser offline",{})},this._onOnline=()=>{this._tryAddCustomEvent("browser online",{})},this._onVisibilityChange=()=>{if(null!=y&&y.visibilityState){var e="window "+y.visibilityState
this._tryAddCustomEvent(e,{})}},this._instance=e,this._captureStarted=!1,this._endpoint="/s/",this._stopRrweb=void 0,this._receivedFlags=!1,!this._instance.sessionManager)throw ci.error("started without valid sessionManager"),new Error(li+" started without valid sessionManager. This is a bug.")
if(this._instance.config.__preview_experimental_cookieless_mode)throw new Error(li+" cannot be used with __preview_experimental_cookieless_mode.")
this._linkedFlagMatching=new ri(this._instance),this._urlTriggerMatching=new ni(this._instance),this._eventTriggerMatching=new ii(this._instance)
var{sessionId:t,windowId:n}=this._sessionManager.checkAndGetSessionAndWindowId()
this._sessionId=t,this._windowId=n,this._buffer=this._clearBuffer(),this._sessionIdleThresholdMilliseconds>=this._sessionManager.sessionTimeoutMs&&ci.warn("session_idle_threshold_ms ("+this._sessionIdleThresholdMilliseconds+") is greater than the session timeout ("+this._sessionManager.sessionTimeoutMs+"). Session will never be detected as idle")}startIfEnabledOrStop(e){this._isRecordingEnabled?(this._startCapture(e),pe(p,"beforeunload",this._onBeforeUnload),pe(p,"offline",this._onOffline),pe(p,"online",this._onOnline),pe(p,"visibilitychange",this._onVisibilityChange),this._setupSampling(),this._addEventTriggerListener(),Q(this._removePageViewCaptureHook)&&(this._removePageViewCaptureHook=this._instance.on("eventCaptured",(e=>{try{if("$pageview"===e.event){var t=null!=e&&e.properties.$current_url?this._maskUrl(null==e?void 0:e.properties.$current_url):""
if(!t)return
this._tryAddCustomEvent("$pageview",{href:t})}}catch(e){ci.error("Could not add $pageview to rrweb session",e)}}))),this._onSessionIdListener||(this._onSessionIdListener=this._sessionManager.onSessionId(((e,t,n)=>{var r,i
n&&(this._tryAddCustomEvent("$session_id_change",{sessionId:e,windowId:t,changeReason:n}),null==(r=this._instance)||null==(r=r.persistence)||r.unregister(je),null==(i=this._instance)||null==(i=i.persistence)||i.unregister(Fe))})))):this.stopRecording()}stopRecording(){var e,t,n,r
this._captureStarted&&this._stopRrweb&&(this._stopRrweb(),this._stopRrweb=void 0,this._captureStarted=!1,null==p||p.removeEventListener("beforeunload",this._onBeforeUnload),null==p||p.removeEventListener("offline",this._onOffline),null==p||p.removeEventListener("online",this._onOnline),null==p||p.removeEventListener("visibilitychange",this._onVisibilityChange),this._clearBuffer(),clearInterval(this._fullSnapshotTimer),null==(e=this._removePageViewCaptureHook)||e.call(this),this._removePageViewCaptureHook=void 0,null==(t=this._removeEventTriggerCaptureHook)||t.call(this),this._removeEventTriggerCaptureHook=void 0,null==(n=this._onSessionIdListener)||n.call(this),this._onSessionIdListener=void 0,null==(r=this._samplingSessionListener)||r.call(this),this._samplingSessionListener=void 0,this._eventTriggerMatching.stop(),this._urlTriggerMatching.stop(),this._linkedFlagMatching.stop(),ci.info("stopped"))}_resetSampling(){var e
null==(e=this._instance.persistence)||e.unregister(Ae)}_makeSamplingDecision(e){var t,n=this._sessionId!==e,r=this._sampleRate
if(K(r)){var i=this._isSampled,s=n||!J(i),o=s?function(e,t){return function(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0
return Math.abs(t)}(e)%100<fn(100*t,0,100)}(e,r):i
s&&(o?this._reportStarted(Gr):ci.warn("Sample rate ("+r+") has determined that this sessionId ("+e+") will not be sent to the server."),this._tryAddCustomEvent("samplingDecisionMade",{sampleRate:r,isSampled:o})),null==(t=this._instance.persistence)||t.register({[Ae]:o})}else this._resetSampling()}onRemoteConfig(e){var t,n,r,i
this._tryAddCustomEvent("$remote_config_received",e),this._persistRemoteConfig(e),null!=(t=e.sessionRecording)&&t.endpoint&&(this._endpoint=null==(i=e.sessionRecording)?void 0:i.endpoint),this._setupSampling(),"any"===(null==(n=e.sessionRecording)?void 0:n.triggerMatchType)?(this._statusMatcher=oi,this._triggerMatching=new Zr([this._eventTriggerMatching,this._urlTriggerMatching])):(this._statusMatcher=ai,this._triggerMatching=new ei([this._eventTriggerMatching,this._urlTriggerMatching])),this._instance.register_for_session({$sdk_debug_replay_remote_trigger_matching_config:null==(r=e.sessionRecording)?void 0:r.triggerMatchType}),this._urlTriggerMatching.onRemoteConfig(e),this._eventTriggerMatching.onRemoteConfig(e),this._linkedFlagMatching.onRemoteConfig(e,((e,t)=>{this._reportStarted("linked_flag_matched",{flag:e,variant:t})})),this._receivedFlags=!0,this.startIfEnabledOrStop()}_setupSampling(){K(this._sampleRate)&&Q(this._samplingSessionListener)&&(this._samplingSessionListener=this._sessionManager.onSessionId((e=>{this._makeSamplingDecision(e)})))}_persistRemoteConfig(e){if(this._instance.persistence){var t,n=this._instance.persistence,r=()=>{var t,r,i,s,o,a,l,c,u,d=null==(t=e.sessionRecording)?void 0:t.sampleRate,h=Q(d)?null:parseFloat(d)
Q(h)&&this._resetSampling()
var p=null==(r=e.sessionRecording)?void 0:r.minimumDurationMilliseconds
n.register({[Ce]:!!e.sessionRecording,[Te]:null==(i=e.sessionRecording)?void 0:i.consoleLogRecordingEnabled,[Pe]:f({capturePerformance:e.capturePerformance},null==(s=e.sessionRecording)?void 0:s.networkPayloadCapture),[$e]:null==(o=e.sessionRecording)?void 0:o.masking,[Le]:{enabled:null==(a=e.sessionRecording)?void 0:a.recordCanvas,fps:null==(l=e.sessionRecording)?void 0:l.canvasFps,quality:null==(c=e.sessionRecording)?void 0:c.canvasQuality},[Ie]:h,[Me]:G(p)?null:p,[Re]:null==(u=e.sessionRecording)?void 0:u.scriptConfig})}
r(),null==(t=this._persistFlagsOnSessionListener)||t.call(this),this._persistFlagsOnSessionListener=this._sessionManager.onSessionId(r)}}log(e,t){var n
void 0===t&&(t="log"),null==(n=this._instance.sessionRecording)||n.onRRwebEmit({type:6,data:{plugin:"rrweb/console@1",payload:{level:t,trace:[],payload:[JSON.stringify(e)]}},timestamp:Date.now()})}_startCapture(e){var t
G(Object.assign)||G(Array.from)||(this._captureStarted||this._instance.config.disable_session_recording||this._instance.consent.isOptedOut())||(this._captureStarted=!0,this._sessionManager.checkAndGetSessionAndWindowId(),ui()?this._onScriptLoaded():null==(t=C.__PosthogExtensions__)||null==t.loadExternalDependency||t.loadExternalDependency(this._instance,this._scriptName,(e=>{if(e)return ci.error("could not load recorder",e)
this._onScriptLoaded()})),ci.info("starting"),this.status===Wr&&this._reportStarted(e||"recording_initialized"))}get _scriptName(){var e
return(null==(e=this._instance)||null==(e=e.persistence)||null==(e=e.get_property(Re))?void 0:e.script)||"recorder"}_isInteractiveEvent(e){var t
return 3===e.type&&-1!==di.indexOf(null==(t=e.data)?void 0:t.source)}_updateWindowAndSessionIds(e){var t=this._isInteractiveEvent(e)
t||this._isIdle||e.timestamp-this._lastActivityTimestamp>this._sessionIdleThresholdMilliseconds&&(this._isIdle=!0,clearInterval(this._fullSnapshotTimer),this._tryAddCustomEvent("sessionIdle",{eventTimestamp:e.timestamp,lastActivityTimestamp:this._lastActivityTimestamp,threshold:this._sessionIdleThresholdMilliseconds,bufferLength:this._buffer.data.length,bufferSize:this._buffer.size}),this._flushBuffer())
var n=!1
if(t&&(this._lastActivityTimestamp=e.timestamp,this._isIdle)){var r="unknown"===this._isIdle
this._isIdle=!1,r||(this._tryAddCustomEvent("sessionNoLongerIdle",{reason:"user activity",type:e.type}),n=!0)}if(!this._isIdle){var{windowId:i,sessionId:s}=this._sessionManager.checkAndGetSessionAndWindowId(!t,e.timestamp),o=this._sessionId!==s,a=this._windowId!==i
this._windowId=i,this._sessionId=s,o||a?(this.stopRecording(),this.startIfEnabledOrStop("session_id_changed")):n&&this._scheduleFullSnapshot()}}_tryRRWebMethod(e){try{return e.rrwebMethod(),!0}catch(t){return this._queuedRRWebEvents.length<10?this._queuedRRWebEvents.push({enqueuedAt:e.enqueuedAt||Date.now(),attempt:e.attempt++,rrwebMethod:e.rrwebMethod}):ci.warn("could not emit queued rrweb event.",t,e),!1}}_tryAddCustomEvent(e,t){return this._tryRRWebMethod(fi((()=>ui().addCustomEvent(e,t))))}_tryTakeFullSnapshot(){return this._tryRRWebMethod(fi((()=>ui().takeFullSnapshot())))}_onScriptLoaded(){var e,t,n,r,i={blockClass:"ph-no-capture",blockSelector:void 0,ignoreClass:"ph-ignore-input",maskTextClass:"ph-mask",maskTextSelector:void 0,maskTextFn:void 0,maskAllInputs:!0,maskInputOptions:{password:!0},maskInputFn:void 0,slimDOMOptions:{},collectFonts:!1,inlineStylesheet:!0,recordCrossOriginIframes:!1},s=this._instance.config.session_recording
for(var[o,a]of Object.entries(s||{}))o in i&&("maskInputOptions"===o?i.maskInputOptions=f({password:!0},a):i[o]=a)
this._canvasRecording&&this._canvasRecording.enabled&&(i.recordCanvas=!0,i.sampling={canvas:this._canvasRecording.fps},i.dataURLOptions={type:"image/webp",quality:this._canvasRecording.quality}),this._masking&&(i.maskAllInputs=null===(t=this._masking.maskAllInputs)||void 0===t||t,i.maskTextSelector=null!==(n=this._masking.maskTextSelector)&&void 0!==n?n:void 0,i.blockSelector=null!==(r=this._masking.blockSelector)&&void 0!==r?r:void 0)
var l=ui()
if(l){this._mutationThrottler=null!==(e=this._mutationThrottler)&&void 0!==e?e:new ir(l,{refillRate:this._instance.config.session_recording.__mutationThrottlerRefillRate,bucketSize:this._instance.config.session_recording.__mutationThrottlerBucketSize,onBlockedNode:(e,t)=>{var n="Too many mutations on node '"+e+"'. Rate limiting. This could be due to SVG animations or something similar"
ci.info(n,{node:t}),this.log(li+" "+n,"warn")}})
var c=this._gatherRRWebPlugins()
this._stopRrweb=l(f({emit:e=>{this.onRRwebEmit(e)},plugins:c},i)),this._lastActivityTimestamp=Date.now(),this._isIdle=J(this._isIdle)?this._isIdle:"unknown",this._tryAddCustomEvent("$session_options",{sessionRecordingOptions:i,activePlugins:c.map((e=>null==e?void 0:e.name))}),this._tryAddCustomEvent("$posthog_config",{config:this._instance.config})}else ci.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")}_scheduleFullSnapshot(){if(this._fullSnapshotTimer&&clearInterval(this._fullSnapshotTimer),!0!==this._isIdle){var e=this._fullSnapshotIntervalMillis
e&&(this._fullSnapshotTimer=setInterval((()=>{this._tryTakeFullSnapshot()}),e))}}_gatherRRWebPlugins(){var e,t,n=[],r=null==(e=C.__PosthogExtensions__)||null==(e=e.rrwebPlugins)?void 0:e.getRecordConsolePlugin
r&&this._isConsoleLogCaptureEnabled&&n.push(r())
var i=null==(t=C.__PosthogExtensions__)||null==(t=t.rrwebPlugins)?void 0:t.getRecordNetworkPlugin
return this._networkPayloadCapture&&q(i)&&(!Lt.includes(location.hostname)||this._forceAllowLocalhostNetworkCapture?n.push(i(rr(this._instance.config,this._networkPayloadCapture))):ci.info("NetworkCapture not started because we are on localhost.")),n}onRRwebEmit(e){var t
if(this._processQueuedEvents(),e&&H(e)){if(e.type===Vn.Meta){var n=this._maskUrl(e.data.href)
if(this._lastHref=n,!n)return
e.data.href=n}else this._pageViewFallBack()
if(this._urlTriggerMatching.checkUrlTriggerConditions((()=>this._pauseRecording()),(()=>this._resumeRecording()),(e=>this._activateTrigger(e))),!this._urlTriggerMatching.urlBlocked||(r=e).type===Vn.Custom&&"recording paused"===r.data.tag){var r
e.type===Vn.FullSnapshot&&this._scheduleFullSnapshot(),e.type===Vn.FullSnapshot&&this._receivedFlags&&this._triggerMatching.triggerStatus(this.sessionId)===Jr&&this._clearBuffer()
var i=this._mutationThrottler?this._mutationThrottler.throttleMutations(e):e
if(i){var s=function(e){var t=e
if(t&&H(t)&&6===t.type&&H(t.data)&&"rrweb/console@1"===t.data.plugin){t.data.payload.payload.length>10&&(t.data.payload.payload=t.data.payload.payload.slice(0,10),t.data.payload.payload.push("...[truncated]"))
for(var n=[],r=0;r<t.data.payload.payload.length;r++)t.data.payload.payload[r]&&t.data.payload.payload[r].length>2e3?n.push(t.data.payload.payload[r].slice(0,2e3)+"...[truncated]"):n.push(t.data.payload.payload[r])
return t.data.payload.payload=n,e}return e}(i)
if(this._updateWindowAndSessionIds(s),!0!==this._isIdle||pi(s)){if(pi(s)){var o=s.data.payload
if(o){var a=o.lastActivityTimestamp,l=o.threshold
s.timestamp=a+l}}var c=null===(t=this._instance.config.session_recording.compress_events)||void 0===t||t?function(e){if(Wn(e)<1024)return e
try{if(e.type===Vn.FullSnapshot)return f({},e,{data:hi(e.data),cv:"2024-10"})
if(e.type===Vn.IncrementalSnapshot&&e.data.source===Qn.Mutation)return f({},e,{cv:"2024-10",data:f({},e.data,{texts:hi(e.data.texts),attributes:hi(e.data.attributes),removes:hi(e.data.removes),adds:hi(e.data.adds)})})
if(e.type===Vn.IncrementalSnapshot&&e.data.source===Qn.StyleSheetRule)return f({},e,{cv:"2024-10",data:f({},e.data,{adds:e.data.adds?hi(e.data.adds):void 0,removes:e.data.removes?hi(e.data.removes):void 0})})}catch(e){ci.error("could not compress event - will use uncompressed event",e)}return e}(s):s,u={$snapshot_bytes:Wn(c),$snapshot_data:c,$session_id:this._sessionId,$window_id:this._windowId}
this.status!==Ur?this._captureSnapshotBuffered(u):this._clearBuffer()}}}}}_pageViewFallBack(){if(!this._instance.config.capture_pageview&&p){var e=this._maskUrl(p.location.href)
this._lastHref!==e&&(this._tryAddCustomEvent("$url_changed",{href:e}),this._lastHref=e)}}_processQueuedEvents(){if(this._queuedRRWebEvents.length){var e=[...this._queuedRRWebEvents]
this._queuedRRWebEvents=[],e.forEach((e=>{Date.now()-e.enqueuedAt<=2e3&&this._tryRRWebMethod(e)}))}}_maskUrl(e){var t=this._instance.config.session_recording
if(t.maskNetworkRequestFn){var n,r={url:e}
return null==(n=r=t.maskNetworkRequestFn(r))?void 0:n.url}return e}_clearBuffer(){return this._buffer={size:0,data:[],sessionId:this._sessionId,windowId:this._windowId},this._buffer}_flushBuffer(){this._flushBufferTimer&&(clearTimeout(this._flushBufferTimer),this._flushBufferTimer=void 0)
var e=this._minimumDuration,t=this._sessionDuration,n=K(t)&&t>=0,r=K(e)&&n&&t<e
return this.status===zr||this.status===Vr||this.status===Ur||r?(this._flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3),this._buffer):(this._buffer.data.length>0&&zn(this._buffer).forEach((e=>{this._captureSnapshot({$snapshot_bytes:e.size,$snapshot_data:e.data,$session_id:e.sessionId,$window_id:e.windowId,$lib:"web",$lib_version:T.LIB_VERSION})})),this._clearBuffer())}_captureSnapshotBuffered(e){var t,n=2+((null==(t=this._buffer)?void 0:t.data.length)||0)
!this._isIdle&&(this._buffer.size+e.$snapshot_bytes+n>943718.4||this._buffer.sessionId!==this._sessionId)&&(this._buffer=this._flushBuffer()),this._buffer.size+=e.$snapshot_bytes,this._buffer.data.push(e.$snapshot_data),this._flushBufferTimer||this._isIdle||(this._flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3))}_captureSnapshot(e){this._instance.capture("$snapshot",e,{_url:this._instance.requestRouter.endpointFor("api",this._endpoint),_noTruncate:!0,_batchKey:"recordings",skip_client_rate_limiting:!0})}_activateTrigger(e){var t
this._triggerMatching.triggerStatus(this.sessionId)===Jr&&(null==(t=this._instance)||null==(t=t.persistence)||t.register({["url"===e?Fe:je]:this._sessionId}),this._flushBuffer(),this._reportStarted(e+"_trigger_matched"))}_pauseRecording(){this._urlTriggerMatching.urlBlocked||(this._urlTriggerMatching.urlBlocked=!0,clearInterval(this._fullSnapshotTimer),ci.info("recording paused due to URL blocker"),this._tryAddCustomEvent("recording paused",{reason:"url blocker"}))}_resumeRecording(){this._urlTriggerMatching.urlBlocked&&(this._urlTriggerMatching.urlBlocked=!1,this._tryTakeFullSnapshot(),this._scheduleFullSnapshot(),this._tryAddCustomEvent("recording resumed",{reason:"left blocked url"}),ci.info("recording resumed"))}_addEventTriggerListener(){0!==this._eventTriggerMatching._eventTriggers.length&&Q(this._removeEventTriggerCaptureHook)&&(this._removeEventTriggerCaptureHook=this._instance.on("eventCaptured",(e=>{try{this._eventTriggerMatching._eventTriggers.includes(e.event)&&this._activateTrigger("event")}catch(e){ci.error("Could not activate event trigger",e)}})))}overrideLinkedFlag(){this._linkedFlagMatching.linkedFlagSeen=!0,this._tryTakeFullSnapshot(),this._reportStarted("linked_flag_overridden")}overrideSampling(){var e
null==(e=this._instance.persistence)||e.register({[Ae]:!0}),this._tryTakeFullSnapshot(),this._reportStarted("sampling_overridden")}overrideTrigger(e){this._activateTrigger(e)}_reportStarted(e,t){this._instance.register_for_session({$session_recording_start_reason:e}),ci.info(e.replace("_"," "),t),R(["recording_initialized","session_id_changed"],e)||this._tryAddCustomEvent(e,t)}get sdkDebugProperties(){var{sessionStartTimestamp:e}=this._sessionManager.checkAndGetSessionAndWindowId(!0)
return{$recording_status:this.status,$sdk_debug_replay_internal_buffer_length:this._buffer.data.length,$sdk_debug_replay_internal_buffer_size:this._buffer.size,$sdk_debug_current_session_duration:this._sessionDuration,$sdk_debug_session_start:e}}}var _i=te("[SegmentIntegration]")
var vi="posthog-js"
function mi(e,t){var{organization:n,projectId:r,prefix:i,severityAllowList:s=["error"]}=void 0===t?{}:t
return t=>{var o,a,l,c,u
if("*"!==s&&!s.includes(t.level)||!e.__loaded)return t
t.tags||(t.tags={})
var d=e.requestRouter.endpointFor("ui","/project/"+e.config.token+"/person/"+e.get_distinct_id())
t.tags["PostHog Person URL"]=d,e.sessionRecordingStarted()&&(t.tags["PostHog Recording URL"]=e.get_session_replay_url({withTimestamp:!0}))
var h=(null==(o=t.exception)?void 0:o.values)||[],p=h.map((e=>f({},e,{stacktrace:e.stacktrace?f({},e.stacktrace,{type:"raw",frames:(e.stacktrace.frames||[]).map((e=>f({},e,{platform:"web:javascript"})))}):void 0}))),g={$exception_message:(null==(a=h[0])?void 0:a.value)||t.message,$exception_type:null==(l=h[0])?void 0:l.type,$exception_personURL:d,$exception_level:t.level,$exception_list:p,$sentry_event_id:t.event_id,$sentry_exception:t.exception,$sentry_exception_message:(null==(c=h[0])?void 0:c.value)||t.message,$sentry_exception_type:null==(u=h[0])?void 0:u.type,$sentry_tags:t.tags}
return n&&r&&(g.$sentry_url=(i||"https://sentry.io/organizations/")+n+"/issues/?project="+r+"&query="+t.event_id),e.exceptions.sendExceptionEvent(g),t}}class bi{constructor(e,t,n,r,i){this.name=vi,this.setupOnce=function(s){s(mi(e,{organization:t,projectId:n,prefix:r,severityAllowList:i}))}}}var yi=null!=p&&p.location?Ot(p.location.hash,"__posthog")||Ot(location.hash,"state"):null,wi="_postHogToolbarParams",ki=te("[Toolbar]"),Si=function(e){return e[e.UNINITIALIZED=0]="UNINITIALIZED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED",e}(Si||{})
class xi{constructor(e){this.instance=e}_setToolbarState(e){C.ph_toolbar_state=e}_getToolbarState(){var e
return null!==(e=C.ph_toolbar_state)&&void 0!==e?e:Si.UNINITIALIZED}maybeLoadToolbar(e,t,n){if(void 0===e&&(e=void 0),void 0===t&&(t=void 0),void 0===n&&(n=void 0),!p||!y)return!1
e=null!=e?e:p.location,n=null!=n?n:p.history
try{if(!t){try{p.localStorage.setItem("test","test"),p.localStorage.removeItem("test")}catch(e){return!1}t=null==p?void 0:p.localStorage}var r,i=yi||Ot(e.hash,"__posthog")||Ot(e.hash,"state"),s=i?le((()=>JSON.parse(atob(decodeURIComponent(i)))))||le((()=>JSON.parse(decodeURIComponent(i)))):null
return s&&"ph_authorize"===s.action?((r=s).source="url",r&&Object.keys(r).length>0&&(s.desiredHash?e.hash=s.desiredHash:n?n.replaceState(n.state,"",e.pathname+e.search):e.hash="")):((r=JSON.parse(t.getItem(wi)||"{}")).source="localstorage",delete r.userIntent),!(!r.token||this.instance.config.token!==r.token||(this.loadToolbar(r),0))}catch(e){return!1}}_callLoadToolbar(e){var t=C.ph_load_toolbar||C.ph_load_editor
!Q(t)&&q(t)?t(e,this.instance):ki.warn("No toolbar load function found")}loadToolbar(e){var t=!(null==y||!y.getElementById(Ze))
if(!p||t)return!1
var n="custom"===this.instance.requestRouter.region&&this.instance.config.advanced_disable_toolbar_metrics,r=f({token:this.instance.config.token},e,{apiURL:this.instance.requestRouter.endpointFor("ui")},n?{instrument:!1}:{})
if(p.localStorage.setItem(wi,JSON.stringify(f({},r,{source:void 0}))),this._getToolbarState()===Si.LOADED)this._callLoadToolbar(r)
else if(this._getToolbarState()===Si.UNINITIALIZED){var i
this._setToolbarState(Si.LOADING),null==(i=C.__PosthogExtensions__)||null==i.loadExternalDependency||i.loadExternalDependency(this.instance,"toolbar",(e=>{if(e)return ki.error("[Toolbar] Failed to load",e),void this._setToolbarState(Si.UNINITIALIZED)
this._setToolbarState(Si.LOADED),this._callLoadToolbar(r)})),pe(p,"turbolinks:load",(()=>{this._setToolbarState(Si.UNINITIALIZED),this.loadToolbar(r)}))}return!0}_loadEditor(e){return this.loadToolbar(e)}maybeLoadEditor(e,t,n){return void 0===e&&(e=void 0),void 0===t&&(t=void 0),void 0===n&&(n=void 0),this.maybeLoadToolbar(e,t,n)}}var Ei=te("[TracingHeaders]")
class Ci{constructor(e){this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0,this._startCapturing=()=>{var e,t
G(this._restoreXHRPatch)&&(null==(e=C.__PosthogExtensions__)||null==(e=e.tracingHeadersPatchFns)||e._patchXHR(this._instance.config.__add_tracing_headers||[],this._instance.get_distinct_id(),this._instance.sessionManager)),G(this._restoreFetchPatch)&&(null==(t=C.__PosthogExtensions__)||null==(t=t.tracingHeadersPatchFns)||t._patchFetch(this._instance.config.__add_tracing_headers||[],this._instance.get_distinct_id(),this._instance.sessionManager))},this._instance=e}_loadScript(e){var t,n
null!=(t=C.__PosthogExtensions__)&&t.tracingHeadersPatchFns&&e(),null==(n=C.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"tracing-headers",(t=>{if(t)return Ei.error("failed to load script",t)
e()}))}startIfEnabledOrStop(){var e,t
this._instance.config.__add_tracing_headers?this._loadScript(this._startCapturing):(null==(e=this._restoreXHRPatch)||e.call(this),null==(t=this._restoreFetchPatch)||t.call(this),this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0)}}var Ti=te("[Web Vitals]"),Pi=9e5
class $i{constructor(e){var t
this._enabledServerSide=!1,this._initialized=!1,this._buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0},this._flushToCapture=()=>{clearTimeout(this._delayedFlushTimer),0!==this._buffer.metrics.length&&(this._instance.capture("$web_vitals",this._buffer.metrics.reduce(((e,t)=>f({},e,{["$web_vitals_"+t.name+"_event"]:f({},t),["$web_vitals_"+t.name+"_value"]:t.value})),{})),this._buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0})},this._addToBuffer=e=>{var t,n=null==(t=this._instance.sessionManager)?void 0:t.checkAndGetSessionAndWindowId(!0)
if(G(n))Ti.error("Could not read session ID. Dropping metrics!")
else{this._buffer=this._buffer||{url:void 0,metrics:[],firstMetricTimestamp:void 0}
var r=this._currentURL()
G(r)||(Q(null==e?void 0:e.name)||Q(null==e?void 0:e.value)?Ti.error("Invalid metric received",e):this._maxAllowedValue&&e.value>=this._maxAllowedValue?Ti.error("Ignoring metric with value >= "+this._maxAllowedValue,e):(this._buffer.url!==r&&(this._flushToCapture(),this._delayedFlushTimer=setTimeout(this._flushToCapture,this.flushToCaptureTimeoutMs)),G(this._buffer.url)&&(this._buffer.url=r),this._buffer.firstMetricTimestamp=G(this._buffer.firstMetricTimestamp)?Date.now():this._buffer.firstMetricTimestamp,e.attribution&&e.attribution.interactionTargetElement&&(e.attribution.interactionTargetElement=void 0),this._buffer.metrics.push(f({},e,{$current_url:r,$session_id:n.sessionId,$window_id:n.windowId,timestamp:Date.now()})),this._buffer.metrics.length===this.allowedMetrics.length&&this._flushToCapture()))}},this._startCapturing=()=>{var e,t,n,r,i=C.__PosthogExtensions__
G(i)||G(i.postHogWebVitalsCallbacks)||({onLCP:e,onCLS:t,onFCP:n,onINP:r}=i.postHogWebVitalsCallbacks),e&&t&&n&&r?(this.allowedMetrics.indexOf("LCP")>-1&&e(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("CLS")>-1&&t(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("FCP")>-1&&n(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("INP")>-1&&r(this._addToBuffer.bind(this)),this._initialized=!0):Ti.error("web vitals callbacks not loaded - not starting")},this._instance=e,this._enabledServerSide=!(null==(t=this._instance.persistence)||!t.props[Se]),this.startIfEnabled()}get allowedMetrics(){var e,t,n=H(this._instance.config.capture_performance)?null==(e=this._instance.config.capture_performance)?void 0:e.web_vitals_allowed_metrics:void 0
return G(n)?(null==(t=this._instance.persistence)?void 0:t.props[Ee])||["CLS","FCP","INP","LCP"]:n}get flushToCaptureTimeoutMs(){return(H(this._instance.config.capture_performance)?this._instance.config.capture_performance.web_vitals_delayed_flush_ms:void 0)||5e3}get _maxAllowedValue(){var e=H(this._instance.config.capture_performance)&&K(this._instance.config.capture_performance.__web_vitals_max_value)?this._instance.config.capture_performance.__web_vitals_max_value:Pi
return 0<e&&e<=6e4?Pi:e}get isEnabled(){var e=null==w?void 0:w.protocol
if("http:"!==e&&"https:"!==e)return Ti.info("Web Vitals are disabled on non-http/https protocols"),!1
var t=H(this._instance.config.capture_performance)?this._instance.config.capture_performance.web_vitals:J(this._instance.config.capture_performance)?this._instance.config.capture_performance:void 0
return J(t)?t:this._enabledServerSide}startIfEnabled(){this.isEnabled&&!this._initialized&&(Ti.info("enabled, starting..."),this._loadScript(this._startCapturing))}onRemoteConfig(e){var t=H(e.capturePerformance)&&!!e.capturePerformance.web_vitals,n=H(e.capturePerformance)?e.capturePerformance.web_vitals_allowed_metrics:void 0
this._instance.persistence&&(this._instance.persistence.register({[Se]:t}),this._instance.persistence.register({[Ee]:n})),this._enabledServerSide=t,this.startIfEnabled()}_loadScript(e){var t,n
null!=(t=C.__PosthogExtensions__)&&t.postHogWebVitalsCallbacks&&e(),null==(n=C.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"web-vitals",(t=>{t?Ti.error("failed to load script",t):e()}))}_currentURL(){var e=p?p.location.href:void 0
return e||Ti.error("Could not determine current URL"),e}}var Li=te("[Heatmaps]")
function Ii(e){return H(e)&&"clientX"in e&&"clientY"in e&&K(e.clientX)&&K(e.clientY)}class Mi{constructor(e){var t
this.rageclicks=new $t,this._enabledServerSide=!1,this._initialized=!1,this._flushInterval=null,this.instance=e,this._enabledServerSide=!(null==(t=this.instance.persistence)||!t.props[be])}get flushIntervalMilliseconds(){var e=5e3
return H(this.instance.config.capture_heatmaps)&&this.instance.config.capture_heatmaps.flush_interval_milliseconds&&(e=this.instance.config.capture_heatmaps.flush_interval_milliseconds),e}get isEnabled(){return G(this.instance.config.capture_heatmaps)?G(this.instance.config.enable_heatmaps)?this._enabledServerSide:this.instance.config.enable_heatmaps:!1!==this.instance.config.capture_heatmaps}startIfEnabled(){if(this.isEnabled){if(this._initialized)return
Li.info("starting..."),this._setupListeners(),this._flushInterval=setInterval(this._flush.bind(this),this.flushIntervalMilliseconds)}else{var e,t
clearInterval(null!==(e=this._flushInterval)&&void 0!==e?e:void 0),null==(t=this._deadClicksCapture)||t.stop(),this.getAndClearBuffer()}}onRemoteConfig(e){var t=!!e.heatmaps
this.instance.persistence&&this.instance.persistence.register({[be]:t}),this._enabledServerSide=t,this.startIfEnabled()}getAndClearBuffer(){var e=this._buffer
return this._buffer=void 0,e}_onDeadClick(e){this._onClick(e.originalEvent,"deadclick")}_setupListeners(){p&&y&&(pe(p,"beforeunload",this._flush.bind(this)),pe(y,"click",(e=>this._onClick(e||(null==p?void 0:p.event))),{capture:!0}),pe(y,"mousemove",(e=>this._onMouseMove(e||(null==p?void 0:p.event))),{capture:!0}),this._deadClicksCapture=new dn(this.instance,cn,this._onDeadClick.bind(this)),this._deadClicksCapture.startIfEnabled(),this._initialized=!0)}_getProperties(e,t){var n=this.instance.scrollManager.scrollY(),r=this.instance.scrollManager.scrollX(),i=this.instance.scrollManager.scrollElement(),s=function(e,t,n){for(var r=e;r&&rt(r)&&!it(r,"body");){if(r===n)return!1
if(R(t,null==p?void 0:p.getComputedStyle(r).position))return!0
r=pt(r)}return!1}(ft(e),["fixed","sticky"],i)
return{x:e.clientX+(s?0:r),y:e.clientY+(s?0:n),target_fixed:s,type:t}}_onClick(e,t){var n
if(void 0===t&&(t="click"),!nt(e.target)&&Ii(e)){var r=this._getProperties(e,t)
null!=(n=this.rageclicks)&&n.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._capture(f({},r,{type:"rageclick"})),this._capture(r)}}_onMouseMove(e){!nt(e.target)&&Ii(e)&&(clearTimeout(this._mouseMoveTimeout),this._mouseMoveTimeout=setTimeout((()=>{this._capture(this._getProperties(e,"mousemove"))}),500))}_capture(e){if(p){var t=p.location.href
this._buffer=this._buffer||{},this._buffer[t]||(this._buffer[t]=[]),this._buffer[t].push(e)}}_flush(){this._buffer&&!U(this._buffer)&&this.instance.capture("$$heatmap",{$heatmap_data:this.getAndClearBuffer()})}}class Ri{constructor(e){this._instance=e}doPageView(e,t){var n,r=this._previousPageViewProperties(e,t)
return this._currentPageview={pathname:null!==(n=null==p?void 0:p.location.pathname)&&void 0!==n?n:"",pageViewId:t,timestamp:e},this._instance.scrollManager.resetContext(),r}doPageLeave(e){var t
return this._previousPageViewProperties(e,null==(t=this._currentPageview)?void 0:t.pageViewId)}doEvent(){var e
return{$pageview_id:null==(e=this._currentPageview)?void 0:e.pageViewId}}_previousPageViewProperties(e,t){var n=this._currentPageview
if(!n)return{$pageview_id:t}
var r={$pageview_id:t,$prev_pageview_id:n.pageViewId},i=this._instance.scrollManager.getContext()
if(i&&!this._instance.config.disable_scroll_properties){var{maxScrollHeight:s,lastScrollY:o,maxScrollY:a,maxContentHeight:l,lastContentY:c,maxContentY:u}=i
if(!(G(s)||G(o)||G(a)||G(l)||G(c)||G(u))){s=Math.ceil(s),o=Math.ceil(o),a=Math.ceil(a),l=Math.ceil(l),c=Math.ceil(c),u=Math.ceil(u)
var d=s<=1?1:fn(o/s,0,1),f=s<=1?1:fn(a/s,0,1),h=l<=1?1:fn(c/l,0,1),p=l<=1?1:fn(u/l,0,1)
r=se(r,{$prev_pageview_last_scroll:o,$prev_pageview_last_scroll_percentage:d,$prev_pageview_max_scroll:a,$prev_pageview_max_scroll_percentage:f,$prev_pageview_last_content:c,$prev_pageview_last_content_percentage:h,$prev_pageview_max_content:u,$prev_pageview_max_content_percentage:p})}}return n.pathname&&(r.$prev_pageview_pathname=n.pathname),n.timestamp&&(r.$prev_pageview_duration=(e.getTime()-n.timestamp.getTime())/1e3),r}}var Oi=!!S||!!k,Ai="text/plain",Fi=(e,t)=>{var[n,r]=e.split("?"),i=f({},t)
null==r||r.split("&").forEach((e=>{var[t]=e.split("=")
delete i[t]}))
var s=function(e,t){var n,r
void 0===t&&(t="&")
var i=[]
return ie(e,(function(e,t){G(e)||G(t)||"undefined"===t||(n=encodeURIComponent((e=>e instanceof File)(e)?e.name:e.toString()),r=encodeURIComponent(t),i[i.length]=r+"="+n)})),i.join(t)}(i)
return n+"?"+(s?(r?r+"&":"")+s:r)},ji=(e,t)=>JSON.stringify(e,((e,t)=>"bigint"==typeof t?t.toString():t),t),Ni=e=>{var{data:t,compression:n}=e
if(t){if(n===I.GZipJS){var r=qr(Hr(ji(t)),{mtime:0}),i=new Blob([r],{type:Ai})
return{contentType:Ai,body:i,estimatedSize:i.size}}if(n===I.Base64){var s=function(e){var t,n,r,i,s,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a=0,l=0,c="",u=[]
if(!e)return e
e=function(e){var t,n,r,i,s=""
for(t=n=0,r=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,i=0;i<r;i++){var o=e.charCodeAt(i),a=null
o<128?n++:a=o>127&&o<2048?String.fromCharCode(o>>6|192,63&o|128):String.fromCharCode(o>>12|224,o>>6&63|128,63&o|128),V(a)||(n>t&&(s+=e.substring(t,n)),s+=a,t=n=i+1)}return n>t&&(s+=e.substring(t,e.length)),s}(e)
do{t=(s=e.charCodeAt(a++)<<16|e.charCodeAt(a++)<<8|e.charCodeAt(a++))>>18&63,n=s>>12&63,r=s>>6&63,i=63&s,u[l++]=o.charAt(t)+o.charAt(n)+o.charAt(r)+o.charAt(i)}while(a<e.length)
switch(c=u.join(""),e.length%3){case 1:c=c.slice(0,-2)+"=="
break
case 2:c=c.slice(0,-1)+"="}return c}(ji(t)),o=(e=>"data="+encodeURIComponent("string"==typeof e?e:ji(e)))(s)
return{contentType:"application/x-www-form-urlencoded",body:o,estimatedSize:new Blob([o]).size}}var a=ji(t)
return{contentType:"application/json",body:a,estimatedSize:new Blob([a]).size}}},Di=[]
k&&Di.push({transport:"fetch",method:e=>{var t,n,{contentType:r,body:i,estimatedSize:s}=null!==(t=Ni(e))&&void 0!==t?t:{},o=new Headers
ie(e.headers,(function(e,t){o.append(t,e)})),r&&o.append("Content-Type",r)
var a=e.url,l=null
if(x){var c=new x
l={signal:c.signal,timeout:setTimeout((()=>c.abort()),e.timeout)}}k(a,f({method:(null==e?void 0:e.method)||"GET",headers:o,keepalive:"POST"===e.method&&(s||0)<52428.8,body:i,signal:null==(n=l)?void 0:n.signal},e.fetchOptions)).then((t=>t.text().then((n=>{var r={statusCode:t.status,text:n}
if(200===t.status)try{r.json=JSON.parse(n)}catch(e){ee.error(e)}null==e.callback||e.callback(r)})))).catch((t=>{ee.error(t),null==e.callback||e.callback({statusCode:0,text:t})})).finally((()=>l?clearTimeout(l.timeout):null))}}),S&&Di.push({transport:"XHR",method:e=>{var t,n=new S
n.open(e.method||"GET",e.url,!0)
var{contentType:r,body:i}=null!==(t=Ni(e))&&void 0!==t?t:{}
ie(e.headers,(function(e,t){n.setRequestHeader(t,e)})),r&&n.setRequestHeader("Content-Type",r),e.timeout&&(n.timeout=e.timeout),n.withCredentials=!0,n.onreadystatechange=()=>{if(4===n.readyState){var t={statusCode:n.status,text:n.responseText}
if(200===n.status)try{t.json=JSON.parse(n.responseText)}catch(e){}null==e.callback||e.callback(t)}},n.send(i)}}),null!=b&&b.sendBeacon&&Di.push({transport:"sendBeacon",method:e=>{var t=Fi(e.url,{beacon:"1"})
try{var n,{contentType:r,body:i}=null!==(n=Ni(e))&&void 0!==n?n:{},s="string"==typeof i?new Blob([i],{type:r}):i
b.sendBeacon(t,s)}catch(e){}}})
var Bi=function(e,t){if(!function(e){try{new RegExp(e)}catch(e){return!1}return!0}(t))return!1
try{return new RegExp(t).test(e)}catch(e){return!1}}
function qi(e,t,n){return ji({distinct_id:e,userPropertiesToSet:t,userPropertiesToSetOnce:n})}var Hi={exact:(e,t)=>t.some((t=>e.some((e=>t===e)))),is_not:(e,t)=>t.every((t=>e.every((e=>t!==e)))),regex:(e,t)=>t.some((t=>e.some((e=>Bi(t,e))))),not_regex:(e,t)=>t.every((t=>e.every((e=>!Bi(t,e))))),icontains:(e,t)=>t.map(Ui).some((t=>e.map(Ui).some((e=>t.includes(e))))),not_icontains:(e,t)=>t.map(Ui).every((t=>e.map(Ui).every((e=>!t.includes(e)))))},Ui=e=>e.toLowerCase(),Gi=te("[Error tracking]")
class Wi{constructor(e){var t,n
this._suppressionRules=[],this._instance=e,this._suppressionRules=null!==(t=null==(n=this._instance.persistence)?void 0:n.get_property(we))&&void 0!==t?t:[]}onRemoteConfig(e){var t,n,r,i=null!==(t=null==(n=e.errorTracking)?void 0:n.suppressionRules)&&void 0!==t?t:[],s=null==(r=e.errorTracking)?void 0:r.captureExtensionExceptions
this._suppressionRules=i,this._instance.persistence&&this._instance.persistence.register({[we]:this._suppressionRules,[ke]:s})}get _captureExtensionExceptions(){var e,t=!!this._instance.get_property(ke),n=this._instance.config.error_tracking.captureExtensionExceptions
return null!==(e=null!=n?n:t)&&void 0!==e&&e}sendExceptionEvent(e){if(this._matchesSuppressionRule(e))Gi.info("Skipping exception capture because a suppression rule matched")
else{if(this._captureExtensionExceptions||!this._isExtensionException(e))return this._instance.capture("$exception",e,{_noTruncate:!0,_batchKey:"exceptionEvent"})
Gi.info("Skipping exception capture because it was thrown by an extension")}}_matchesSuppressionRule(e){var t=e.$exception_list
if(!t||!B(t)||0===t.length)return!1
var n=t.reduce(((e,t)=>{var{type:n,value:r}=t
return W(n)&&n.length>0&&e.$exception_types.push(n),W(r)&&r.length>0&&e.$exception_values.push(r),e}),{$exception_types:[],$exception_values:[]})
return this._suppressionRules.some((e=>{var t=e.values.map((e=>{var t,r=Hi[e.operator],i=B(e.value)?e.value:[e.value],s=null!==(t=n[e.key])&&void 0!==t?t:[]
return i.length>0&&r(i,s)}))
return"OR"===e.type?t.some(Boolean):t.every(Boolean)}))}_isExtensionException(e){var t=e.$exception_list
return!(!t||!B(t))&&t.flatMap((e=>{var t,n
return null!==(t=null==(n=e.stacktrace)?void 0:n.frames)&&void 0!==t?t:[]})).some((e=>e.filename&&e.filename.startsWith("chrome-extension://")))}}var zi="Mobile",Vi="iOS",Qi="Android",Ki="Tablet",Ji=Qi+" "+Ki,Yi="iPad",Xi="Apple",Zi=Xi+" Watch",es="Safari",ts="BlackBerry",ns="Samsung",rs=ns+"Browser",is=ns+" Internet",ss="Chrome",os=ss+" OS",as=ss+" "+Vi,ls="Internet Explorer",cs=ls+" "+zi,us="Opera",ds=us+" Mini",fs="Edge",hs="Microsoft "+fs,ps="Firefox",gs=ps+" "+Vi,_s="Nintendo",vs="PlayStation",ms="Xbox",bs=Qi+" "+zi,ys=zi+" "+es,ws="Windows",ks=ws+" Phone",Ss="Nokia",xs="Ouya",Es="Generic",Cs=Es+" "+zi.toLowerCase(),Ts=Es+" "+Ki.toLowerCase(),Ps="Konqueror",$s="(\\d+(\\.\\d+)?)",Ls=new RegExp("Version/"+$s),Is=new RegExp(ms,"i"),Ms=new RegExp(vs+" \\w+","i"),Rs=new RegExp(_s+" \\w+","i"),Os=new RegExp(ts+"|PlayBook|BB10","i"),As={"NT3.51":"NT 3.11","NT4.0":"NT 4.0","5.0":"2000",5.1:"XP",5.2:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1",6.4:"10","10.0":"10"},Fs=function(e,t){return t=t||"",R(e," OPR/")&&R(e,"Mini")?ds:R(e," OPR/")?us:Os.test(e)?ts:R(e,"IE"+zi)||R(e,"WPDesktop")?cs:R(e,rs)?is:R(e,fs)||R(e,"Edg/")?hs:R(e,"FBIOS")?"Facebook "+zi:R(e,"UCWEB")||R(e,"UCBrowser")?"UC Browser":R(e,"CriOS")?as:R(e,"CrMo")||R(e,ss)?ss:R(e,Qi)&&R(e,es)?bs:R(e,"FxiOS")?gs:R(e.toLowerCase(),Ps.toLowerCase())?Ps:((e,t)=>t&&R(t,Xi)||function(e){return R(e,es)&&!R(e,ss)&&!R(e,Qi)}(e))(e,t)?R(e,zi)?ys:es:R(e,ps)?ps:R(e,"MSIE")||R(e,"Trident/")?ls:R(e,"Gecko")?ps:""},js={[cs]:[new RegExp("rv:"+$s)],[hs]:[new RegExp(fs+"?\\/"+$s)],[ss]:[new RegExp("("+ss+"|CrMo)\\/"+$s)],[as]:[new RegExp("CriOS\\/"+$s)],"UC Browser":[new RegExp("(UCBrowser|UCWEB)\\/"+$s)],[es]:[Ls],[ys]:[Ls],[us]:[new RegExp("(Opera|OPR)\\/"+$s)],[ps]:[new RegExp(ps+"\\/"+$s)],[gs]:[new RegExp("FxiOS\\/"+$s)],[Ps]:[new RegExp("Konqueror[:/]?"+$s,"i")],[ts]:[new RegExp(ts+" "+$s),Ls],[bs]:[new RegExp("android\\s"+$s,"i")],[is]:[new RegExp(rs+"\\/"+$s)],[ls]:[new RegExp("(rv:|MSIE )"+$s)],Mozilla:[new RegExp("rv:"+$s)]},Ns=function(e,t){var n=Fs(e,t),r=js[n]
if(G(r))return null
for(var i=0;i<r.length;i++){var s=r[i],o=e.match(s)
if(o)return parseFloat(o[o.length-2])}return null},Ds=[[new RegExp(ms+"; "+ms+" (.*?)[);]","i"),e=>[ms,e&&e[1]||""]],[new RegExp(_s,"i"),[_s,""]],[new RegExp(vs,"i"),[vs,""]],[Os,[ts,""]],[new RegExp(ws,"i"),(e,t)=>{if(/Phone/.test(t)||/WPDesktop/.test(t))return[ks,""]
if(new RegExp(zi).test(t)&&!/IEMobile\b/.test(t))return[ws+" "+zi,""]
var n=/Windows NT ([0-9.]+)/i.exec(t)
if(n&&n[1]){var r=n[1],i=As[r]||""
return/arm/i.test(t)&&(i="RT"),[ws,i]}return[ws,""]}],[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,e=>{if(e&&e[3]){var t=[e[3],e[4],e[5]||"0"]
return[Vi,t.join(".")]}return[Vi,""]}],[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,e=>{var t=""
return e&&e.length>=3&&(t=G(e[2])?e[3]:e[2]),["watchOS",t]}],[new RegExp("("+Qi+" (\\d+)\\.(\\d+)\\.?(\\d+)?|"+Qi+")","i"),e=>{if(e&&e[2]){var t=[e[2],e[3],e[4]||"0"]
return[Qi,t.join(".")]}return[Qi,""]}],[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,e=>{var t=["Mac OS X",""]
if(e&&e[1]){var n=[e[1],e[2],e[3]||"0"]
t[1]=n.join(".")}return t}],[/Mac/i,["Mac OS X",""]],[/CrOS/,[os,""]],[/Linux|debian/i,["Linux",""]]],Bs=function(e){return Rs.test(e)?_s:Ms.test(e)?vs:Is.test(e)?ms:new RegExp(xs,"i").test(e)?xs:new RegExp("("+ks+"|WPDesktop)","i").test(e)?ks:/iPad/.test(e)?Yi:/iPod/.test(e)?"iPod Touch":/iPhone/.test(e)?"iPhone":/(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)?Zi:Os.test(e)?ts:/(kobo)\s(ereader|touch)/i.test(e)?"Kobo":new RegExp(Ss,"i").test(e)?Ss:/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e)||/(kf[a-z]+)( bui|\)).+silk\//i.test(e)?"Kindle Fire":/(Android|ZTE)/i.test(e)?!new RegExp(zi).test(e)||/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e)?/pixel[\daxl ]{1,6}/i.test(e)&&!/pixel c/i.test(e)||/(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e)||/lmy47v/i.test(e)&&!/QTAQZ3/i.test(e)?Qi:Ji:Qi:new RegExp("(pda|"+zi+")","i").test(e)?Cs:new RegExp(Ki,"i").test(e)&&!new RegExp(Ki+" pc","i").test(e)?Ts:""},qs="https?://(.*)",Hs=["gclid","gclsrc","dclid","gbraid","wbraid","fbclid","msclkid","twclid","li_fat_id","igshid","ttclid","rdt_cid","epik","qclid","sccid","irclid","_kx"],Us=oe(["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gad_source","mc_cid"],Hs),Gs="<masked>",Ws=["li_fat_id"]
function zs(e,t,n){if(!y)return{}
var r,i=t?oe([],Hs,n||[]):[],s=Vs(Rt(y.URL,i,Gs),e),o=(r={},ie(Ws,(function(e){var t=Jt._get(e)
r[e]=t||null})),r)
return se(o,s)}function Vs(e,t){var n=Us.concat(t||[]),r={}
return ie(n,(function(t){var n=Mt(e,t)
r[t]=n||null})),r}function Qs(e){var t=function(e){return e?0===e.search(qs+"google.([^/?]*)")?"google":0===e.search(qs+"bing.com")?"bing":0===e.search(qs+"yahoo.com")?"yahoo":0===e.search(qs+"duckduckgo.com")?"duckduckgo":null:null}(e),n="yahoo"!=t?"q":"p",r={}
if(!V(t)){r.$search_engine=t
var i=y?Mt(y.referrer,n):""
i.length&&(r.ph_keyword=i)}return r}function Ks(){return navigator.language||navigator.userLanguage}function Js(){return(null==y?void 0:y.referrer)||"$direct"}function Ys(e,t){var n=e?oe([],Hs,t||[]):[],r=null==w?void 0:w.href.substring(0,1e3)
return{r:Js().substring(0,1e3),u:r?Rt(r,n,Gs):void 0}}function Xs(e){var t,{r:n,u:r}=e,i={$referrer:n,$referring_domain:null==n?void 0:"$direct"==n?"$direct":null==(t=It(n))?void 0:t.host}
if(r){i.$current_url=r
var s=It(r)
i.$host=null==s?void 0:s.host,i.$pathname=null==s?void 0:s.pathname
var o=Vs(r)
se(i,o)}if(n){var a=Qs(n)
se(i,a)}return i}function Zs(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){return}}function eo(){try{return(new Date).getTimezoneOffset()}catch(e){return}}function to(e,t){if(!E)return{}
var n,r,i,s=e?oe([],Hs,t||[]):[],[o,a]=function(e){for(var t=0;t<Ds.length;t++){var[n,r]=Ds[t],i=n.exec(e),s=i&&(q(r)?r(i,e):r)
if(s)return s}return["",""]}(E)
return se(ue({$os:o,$os_version:a,$browser:Fs(E,navigator.vendor),$device:Bs(E),$device_type:(r=E,i=Bs(r),i===Yi||i===Ji||"Kobo"===i||"Kindle Fire"===i||i===Ts?Ki:i===_s||i===ms||i===vs||i===xs?"Console":i===Zi?"Wearable":i?zi:"Desktop"),$timezone:Zs(),$timezone_offset:eo()}),{$current_url:Rt(null==w?void 0:w.href,s,Gs),$host:null==w?void 0:w.host,$pathname:null==w?void 0:w.pathname,$raw_user_agent:E.length>1e3?E.substring(0,997)+"...":E,$browser_version:Ns(E,navigator.vendor),$browser_language:Ks(),$browser_language_prefix:(n=Ks(),"string"==typeof n?n.split("-")[0]:void 0),$screen_height:null==p?void 0:p.screen.height,$screen_width:null==p?void 0:p.screen.width,$viewport_height:null==p?void 0:p.innerHeight,$viewport_width:null==p?void 0:p.innerWidth,$lib:"web",$lib_version:T.LIB_VERSION,$insert_id:Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10),$time:Date.now()/1e3})}var no=te("[FeatureFlags]"),ro="$active_feature_flags",io="$override_feature_flags",so="$feature_flag_payloads",oo="$override_feature_flag_payloads",ao="$feature_flag_request_id",lo=e=>{var t={}
for(var[n,r]of ae(e||{}))r&&(t[n]=r)
return t},co=function(e){return e.FeatureFlags="feature_flags",e.Recordings="recordings",e}({})
class uo{constructor(e){this._override_warning=!1,this._hasLoadedFlags=!1,this._requestInFlight=!1,this._reloadingDisabled=!1,this._additionalReloadRequested=!1,this._flagsCalled=!1,this._flagsLoadedFromRemote=!1,this._instance=e,this.featureFlagEventHandlers=[]}flags(){if(this._instance.config.__preview_remote_config)this._flagsCalled=!0
else{var e=!this._reloadDebouncer&&(this._instance.config.advanced_disable_feature_flags||this._instance.config.advanced_disable_feature_flags_on_first_load)
this._callFlagsEndpoint({disableFlags:e})}}get hasLoadedFlags(){return this._hasLoadedFlags}getFlags(){return Object.keys(this.getFlagVariants())}getFlagsWithDetails(){var e=this._instance.get_property(Be),t=this._instance.get_property(io),n=this._instance.get_property(oo)
if(!n&&!t)return e||{}
var r=se({},e||{}),i=[...new Set([...Object.keys(n||{}),...Object.keys(t||{})])]
for(var s of i){var o,a,l=r[s],c=null==t?void 0:t[s],u=G(c)?null!==(o=null==l?void 0:l.enabled)&&void 0!==o&&o:!!c,d=G(c)?l.variant:"string"==typeof c?c:void 0,h=null==n?void 0:n[s],p=f({},l,{enabled:u,variant:u?null!=d?d:null==l?void 0:l.variant:void 0})
u!==(null==l?void 0:l.enabled)&&(p.original_enabled=null==l?void 0:l.enabled),d!==(null==l?void 0:l.variant)&&(p.original_variant=null==l?void 0:l.variant),h&&(p.metadata=f({},null==l?void 0:l.metadata,{payload:h,original_payload:null==l||null==(a=l.metadata)?void 0:a.payload})),r[s]=p}return this._override_warning||(no.warn(" Overriding feature flag details!",{flagDetails:e,overriddenPayloads:n,finalDetails:r}),this._override_warning=!0),r}getFlagVariants(){var e=this._instance.get_property(Ne),t=this._instance.get_property(io)
if(!t)return e||{}
for(var n=se({},e),r=Object.keys(t),i=0;i<r.length;i++)n[r[i]]=t[r[i]]
return this._override_warning||(no.warn(" Overriding feature flags!",{enabledFlags:e,overriddenFlags:t,finalFlags:n}),this._override_warning=!0),n}getFlagPayloads(){var e=this._instance.get_property(so),t=this._instance.get_property(oo)
if(!t)return e||{}
for(var n=se({},e||{}),r=Object.keys(t),i=0;i<r.length;i++)n[r[i]]=t[r[i]]
return this._override_warning||(no.warn(" Overriding feature flag payloads!",{flagPayloads:e,overriddenPayloads:t,finalPayloads:n}),this._override_warning=!0),n}reloadFeatureFlags(){this._reloadingDisabled||this._instance.config.advanced_disable_feature_flags||this._reloadDebouncer||(this._reloadDebouncer=setTimeout((()=>{this._callFlagsEndpoint()}),5))}_clearDebouncer(){clearTimeout(this._reloadDebouncer),this._reloadDebouncer=void 0}ensureFlagsLoaded(){this._hasLoadedFlags||this._requestInFlight||this._reloadDebouncer||this.reloadFeatureFlags()}setAnonymousDistinctId(e){this.$anon_distinct_id=e}setReloadingPaused(e){this._reloadingDisabled=e}_callFlagsEndpoint(e){var t
if(this._clearDebouncer(),!this._instance._shouldDisableFlags())if(this._requestInFlight)this._additionalReloadRequested=!0
else{var n={token:this._instance.config.token,distinct_id:this._instance.get_distinct_id(),groups:this._instance.getGroups(),$anon_distinct_id:this.$anon_distinct_id,person_properties:f({},(null==(t=this._instance.persistence)?void 0:t.get_initial_props())||{},this._instance.get_property(qe)||{}),group_properties:this._instance.get_property(He)};(null!=e&&e.disableFlags||this._instance.config.advanced_disable_feature_flags)&&(n.disable_flags=!0)
var r=this._instance.config.__preview_remote_config,i=r?"/flags/?v=2":"/flags/?v=2&config=true",s=this._instance.config.advanced_only_evaluate_survey_feature_flags?"&only_evaluate_survey_feature_flags=true":"",o=this._instance.requestRouter.endpointFor("api",i+s)
r&&(n.timezone=Zs()),this._requestInFlight=!0,this._instance._send_request({method:"POST",url:o,data:n,compression:this._instance.config.disable_compression?void 0:I.Base64,timeout:this._instance.config.feature_flag_request_timeout_ms,callback:e=>{var t,r,i=!0
if(200===e.statusCode&&(this._additionalReloadRequested||(this.$anon_distinct_id=void 0),i=!1),this._requestInFlight=!1,this._flagsCalled||(this._flagsCalled=!0,this._instance._onRemoteConfig(null!==(r=e.json)&&void 0!==r?r:{})),!n.disable_flags||this._additionalReloadRequested)if(this._flagsLoadedFromRemote=!i,e.json&&null!=(t=e.json.quotaLimited)&&t.includes(co.FeatureFlags))no.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.")
else{var s
n.disable_flags||this.receivedFeatureFlags(null!==(s=e.json)&&void 0!==s?s:{},i),this._additionalReloadRequested&&(this._additionalReloadRequested=!1,this._callFlagsEndpoint())}}})}}getFeatureFlag(e,t){if(void 0===t&&(t={}),this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0){var n=this.getFlagVariants()[e],r=""+n,i=this._instance.get_property(ao)||void 0,s=this._instance.get_property(We)||{}
if((t.send_event||!("send_event"in t))&&(!(e in s)||!s[e].includes(r))){var o,a,l,c,u,d,f,h,p
B(s[e])?s[e].push(r):s[e]=[r],null==(o=this._instance.persistence)||o.register({[We]:s})
var g=this.getFeatureFlagDetails(e),_={$feature_flag:e,$feature_flag_response:n,$feature_flag_payload:this.getFeatureFlagPayload(e)||null,$feature_flag_request_id:i,$feature_flag_bootstrapped_response:(null==(a=this._instance.config.bootstrap)||null==(a=a.featureFlags)?void 0:a[e])||null,$feature_flag_bootstrapped_payload:(null==(l=this._instance.config.bootstrap)||null==(l=l.featureFlagPayloads)?void 0:l[e])||null,$used_bootstrap_value:!this._flagsLoadedFromRemote}
G(null==g||null==(c=g.metadata)?void 0:c.version)||(_.$feature_flag_version=g.metadata.version)
var v,m=null!==(u=null==g||null==(d=g.reason)?void 0:d.description)&&void 0!==u?u:null==g||null==(f=g.reason)?void 0:f.code
m&&(_.$feature_flag_reason=m),null!=g&&null!=(h=g.metadata)&&h.id&&(_.$feature_flag_id=g.metadata.id),G(null==g?void 0:g.original_variant)&&G(null==g?void 0:g.original_enabled)||(_.$feature_flag_original_response=G(g.original_variant)?g.original_enabled:g.original_variant),null!=g&&null!=(p=g.metadata)&&p.original_payload&&(_.$feature_flag_original_payload=null==g||null==(v=g.metadata)?void 0:v.original_payload),this._instance.capture("$feature_flag_called",_)}return n}no.warn('getFeatureFlag for key "'+e+"\" failed. Feature flags didn't load in time.")}getFeatureFlagDetails(e){return this.getFlagsWithDetails()[e]}getFeatureFlagPayload(e){return this.getFlagPayloads()[e]}getRemoteConfigPayload(e,t){var n=this._instance.config.token
this._instance._send_request({method:"POST",url:this._instance.requestRouter.endpointFor("api","/flags/?v=2&config=true"),data:{distinct_id:this._instance.get_distinct_id(),token:n},compression:this._instance.config.disable_compression?void 0:I.Base64,timeout:this._instance.config.feature_flag_request_timeout_ms,callback:n=>{var r,i=null==(r=n.json)?void 0:r.featureFlagPayloads
t((null==i?void 0:i[e])||void 0)}})}isFeatureEnabled(e,t){if(void 0===t&&(t={}),this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0)return!!this.getFeatureFlag(e,t)
no.warn('isFeatureEnabled for key "'+e+"\" failed. Feature flags didn't load in time.")}addFeatureFlagsHandler(e){this.featureFlagEventHandlers.push(e)}removeFeatureFlagsHandler(e){this.featureFlagEventHandlers=this.featureFlagEventHandlers.filter((t=>t!==e))}receivedFeatureFlags(e,t){if(this._instance.persistence){this._hasLoadedFlags=!0
var n=this.getFlagVariants(),r=this.getFlagPayloads(),i=this.getFlagsWithDetails()
!function(e,t,n,r,i){void 0===n&&(n={}),void 0===r&&(r={}),void 0===i&&(i={})
var s=(e=>{var t=e.flags
return t?(e.featureFlags=Object.fromEntries(Object.keys(t).map((e=>{var n
return[e,null!==(n=t[e].variant)&&void 0!==n?n:t[e].enabled]}))),e.featureFlagPayloads=Object.fromEntries(Object.keys(t).filter((e=>t[e].enabled)).filter((e=>{var n
return null==(n=t[e].metadata)?void 0:n.payload})).map((e=>{var n
return[e,null==(n=t[e].metadata)?void 0:n.payload]})))):no.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"),e})(e),o=s.flags,a=s.featureFlags,l=s.featureFlagPayloads
if(a){var c=e.requestId
if(B(a)){no.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.")
var u={}
if(a)for(var d=0;d<a.length;d++)u[a[d]]=!0
t&&t.register({[ro]:a,[Ne]:u})}else{var h=a,p=l,g=o
e.errorsWhileComputingFlags&&(h=f({},n,h),p=f({},r,p),g=f({},i,g)),t&&t.register(f({[ro]:Object.keys(lo(h)),[Ne]:h||{},[so]:p||{},[Be]:g||{}},c?{[ao]:c}:{}))}}}(e,this._instance.persistence,n,r,i),this._fireFeatureFlagsCallbacks(t)}}override(e,t){void 0===t&&(t=!1),no.warn("override is deprecated. Please use overrideFeatureFlags instead."),this.overrideFeatureFlags({flags:e,suppressWarning:t})}overrideFeatureFlags(e){if(!this._instance.__loaded||!this._instance.persistence)return no.uninitializedWarning("posthog.featureFlags.overrideFeatureFlags")
if(!1===e)return this._instance.persistence.unregister(io),this._instance.persistence.unregister(oo),void this._fireFeatureFlagsCallbacks()
if(e&&"object"==typeof e&&("flags"in e||"payloads"in e)){var t,n=e
if(this._override_warning=Boolean(null!==(t=n.suppressWarning)&&void 0!==t&&t),"flags"in n)if(!1===n.flags)this._instance.persistence.unregister(io)
else if(n.flags)if(B(n.flags)){for(var r={},i=0;i<n.flags.length;i++)r[n.flags[i]]=!0
this._instance.persistence.register({[io]:r})}else this._instance.persistence.register({[io]:n.flags})
return"payloads"in n&&(!1===n.payloads?this._instance.persistence.unregister(oo):n.payloads&&this._instance.persistence.register({[oo]:n.payloads})),void this._fireFeatureFlagsCallbacks()}this._fireFeatureFlagsCallbacks()}onFeatureFlags(e){if(this.addFeatureFlagsHandler(e),this._hasLoadedFlags){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
e(t,n)}return()=>this.removeFeatureFlagsHandler(e)}updateEarlyAccessFeatureEnrollment(e,t,n){var r,i=(this._instance.get_property(De)||[]).find((t=>t.flagKey===e)),s={["$feature_enrollment/"+e]:t},o={$feature_flag:e,$feature_enrollment:t,$set:s}
i&&(o.$early_access_feature_name=i.name),n&&(o.$feature_enrollment_stage=n),this._instance.capture("$feature_enrollment_update",o),this.setPersonPropertiesForFlags(s,!1)
var a=f({},this.getFlagVariants(),{[e]:t})
null==(r=this._instance.persistence)||r.register({[ro]:Object.keys(lo(a)),[Ne]:a}),this._fireFeatureFlagsCallbacks()}getEarlyAccessFeatures(e,t,n){void 0===t&&(t=!1)
var r=this._instance.get_property(De),i=n?"&"+n.map((e=>"stage="+e)).join("&"):""
if(r&&!t)return e(r)
this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/early_access_features/?token="+this._instance.config.token+i),method:"GET",callback:t=>{var n,r
if(t.json){var i=t.json.earlyAccessFeatures
return null==(n=this._instance.persistence)||n.unregister(De),null==(r=this._instance.persistence)||r.register({[De]:i}),e(i)}}})}_prepareFeatureFlagsForCallbacks(){var e=this.getFlags(),t=this.getFlagVariants()
return{flags:e.filter((e=>t[e])),flagVariants:Object.keys(t).filter((e=>t[e])).reduce(((e,n)=>(e[n]=t[n],e)),{})}}_fireFeatureFlagsCallbacks(e){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
this.featureFlagEventHandlers.forEach((r=>r(t,n,{errorsLoading:e})))}setPersonPropertiesForFlags(e,t){void 0===t&&(t=!0)
var n=this._instance.get_property(qe)||{}
this._instance.register({[qe]:f({},n,e)}),t&&this._instance.reloadFeatureFlags()}resetPersonPropertiesForFlags(){this._instance.unregister(qe)}setGroupPropertiesForFlags(e,t){void 0===t&&(t=!0)
var n=this._instance.get_property(He)||{}
0!==Object.keys(n).length&&Object.keys(n).forEach((t=>{n[t]=f({},n[t],e[t]),delete e[t]})),this._instance.register({[He]:f({},n,e)}),t&&this._instance.reloadFeatureFlags()}resetGroupPropertiesForFlags(e){if(e){var t=this._instance.get_property(He)||{}
this._instance.register({[He]:f({},t,{[e]:{}})})}else this._instance.unregister(He)}reset(){this._hasLoadedFlags=!1,this._requestInFlight=!1,this._reloadingDisabled=!1,this._additionalReloadRequested=!1,this._flagsCalled=!1,this._flagsLoadedFromRemote=!1,this.$anon_distinct_id=void 0,this._clearDebouncer(),this._override_warning=!1}}var fo=["cookie","localstorage","localstorage+cookie","sessionstorage","memory"]
class ho{constructor(e,t){this._config=e,this.props={},this._campaign_params_saved=!1,this._name=(e=>{var t=""
return e.token&&(t=e.token.replace(/\+/g,"PL").replace(/\//g,"SL").replace(/=/g,"EQ")),e.persistence_name?"ph_"+e.persistence_name:"ph_"+t+"_posthog"})(e),this._storage=this._buildStorage(e),this.load(),e.debug&&ee.info("Persistence loaded",e.persistence,f({},this.props)),this.update_config(e,e,t),this.save()}isDisabled(){return!!this._disabled}_buildStorage(e){-1===fo.indexOf(e.persistence.toLowerCase())&&(ee.critical("Unknown persistence type "+e.persistence+"; falling back to localStorage+cookie"),e.persistence="localStorage+cookie")
var t=e.persistence.toLowerCase()
return"localstorage"===t&&Xt._is_supported()?Xt:"localstorage+cookie"===t&&en._is_supported()?en:"sessionstorage"===t&&sn._is_supported()?sn:"memory"===t?nn:"cookie"===t?Jt:en._is_supported()?en:Jt}properties(){var e={}
return ie(this.props,(function(t,n){if(n===Ne&&H(t))for(var r=Object.keys(t),i=0;i<r.length;i++)e["$feature/"+r[i]]=t[r[i]]
else o=n,a=!1,(V(s=tt)?a:m&&s.indexOf===m?-1!=s.indexOf(o):(ie(s,(function(e){if(a||(a=e===o))return ne})),a))||(e[n]=t)
var s,o,a})),e}load(){if(!this._disabled){var e=this._storage._parse(this._name)
e&&(this.props=se({},e))}}save(){this._disabled||this._storage._set(this._name,this.props,this._expire_days,this._cross_subdomain,this._secure,this._config.debug)}remove(){this._storage._remove(this._name,!1),this._storage._remove(this._name,!0)}clear(){this.remove(),this.props={}}register_once(e,t,n){if(H(e)){G(t)&&(t="None"),this._expire_days=G(n)?this._default_expiry:n
var r=!1
if(ie(e,((e,n)=>{this.props.hasOwnProperty(n)&&this.props[n]!==t||(this.props[n]=e,r=!0)})),r)return this.save(),!0}return!1}register(e,t){if(H(e)){this._expire_days=G(t)?this._default_expiry:t
var n=!1
if(ie(e,((t,r)=>{e.hasOwnProperty(r)&&this.props[r]!==t&&(this.props[r]=t,n=!0)})),n)return this.save(),!0}return!1}unregister(e){e in this.props&&(delete this.props[e],this.save())}update_campaign_params(){if(!this._campaign_params_saved){var e=zs(this._config.custom_campaign_params,this._config.mask_personal_data_properties,this._config.custom_personal_data_properties)
U(ue(e))||this.register(e),this._campaign_params_saved=!0}}update_search_keyword(){var e
this.register((e=null==y?void 0:y.referrer)?Qs(e):{})}update_referrer_info(){var e
this.register_once({$referrer:Js(),$referring_domain:null!=y&&y.referrer&&(null==(e=It(y.referrer))?void 0:e.host)||"$direct"},void 0)}set_initial_person_info(){this.props[Ke]||this.props[Je]||this.register_once({[Ye]:Ys(this._config.mask_personal_data_properties,this._config.custom_personal_data_properties)},void 0)}get_initial_props(){var e={}
ie([Je,Ke],(t=>{var n=this.props[t]
n&&ie(n,(function(t,n){e["$initial_"+A(n)]=t}))}))
var t,n,r=this.props[Ye]
if(r){var i=(t=Xs(r),n={},ie(t,(function(e,t){n["$initial_"+A(t)]=e})),n)
se(e,i)}return e}safe_merge(e){return ie(this.props,(function(t,n){n in e||(e[n]=t)})),e}update_config(e,t,n){if(this._default_expiry=this._expire_days=e.cookie_expiration,this.set_disabled(e.disable_persistence||!!n),this.set_cross_subdomain(e.cross_subdomain_cookie),this.set_secure(e.secure_cookie),e.persistence!==t.persistence){var r=this._buildStorage(e),i=this.props
this.clear(),this._storage=r,this.props=i,this.save()}}set_disabled(e){this._disabled=e,this._disabled?this.remove():this.save()}set_cross_subdomain(e){e!==this._cross_subdomain&&(this._cross_subdomain=e,this.remove(),this.save())}set_secure(e){e!==this._secure&&(this._secure=e,this.remove(),this.save())}set_event_timer(e,t){var n=this.props[ve]||{}
n[e]=t,this.props[ve]=n,this.save()}remove_event_timer(e){var t=(this.props[ve]||{})[e]
return G(t)||(delete this.props[ve][e],this.save()),t}get_property(e){return this.props[e]}set_property(e,t){this.props[e]=t,this.save()}}class po{constructor(){this._events={},this._events={}}on(e,t){return this._events[e]||(this._events[e]=[]),this._events[e].push(t),()=>{this._events[e]=this._events[e].filter((e=>e!==t))}}emit(e,t){for(var n of this._events[e]||[])n(t)
for(var r of this._events["*"]||[])r(e,t)}}class go{constructor(e){this._debugEventEmitter=new po,this._checkStep=(e,t)=>this._checkStepEvent(e,t)&&this._checkStepUrl(e,t)&&this._checkStepElement(e,t),this._checkStepEvent=(e,t)=>null==t||!t.event||(null==e?void 0:e.event)===(null==t?void 0:t.event),this._instance=e,this._actionEvents=new Set,this._actionRegistry=new Set}init(){var e,t
G(null==(e=this._instance)?void 0:e._addCaptureHook)||(null==(t=this._instance)||t._addCaptureHook(((e,t)=>{this.on(e,t)})))}register(e){var t,n
if(!G(null==(t=this._instance)?void 0:t._addCaptureHook)&&(e.forEach((e=>{var t,n
null==(t=this._actionRegistry)||t.add(e),null==(n=e.steps)||n.forEach((e=>{var t
null==(t=this._actionEvents)||t.add((null==e?void 0:e.event)||"")}))})),null!=(n=this._instance)&&n.autocapture)){var r,i=new Set
e.forEach((e=>{var t
null==(t=e.steps)||t.forEach((e=>{null!=e&&e.selector&&i.add(null==e?void 0:e.selector)}))})),null==(r=this._instance)||r.autocapture.setElementSelectors(i)}}on(e,t){var n
null!=t&&0!=e.length&&(this._actionEvents.has(e)||this._actionEvents.has(null==t?void 0:t.event))&&this._actionRegistry&&(null==(n=this._actionRegistry)?void 0:n.size)>0&&this._actionRegistry.forEach((e=>{this._checkAction(t,e)&&this._debugEventEmitter.emit("actionCaptured",e.name)}))}_addActionHook(e){this.onAction("actionCaptured",(t=>e(t)))}_checkAction(e,t){if(null==(null==t?void 0:t.steps))return!1
for(var n of t.steps)if(this._checkStep(e,n))return!0
return!1}onAction(e,t){return this._debugEventEmitter.on(e,t)}_checkStepUrl(e,t){if(null!=t&&t.url){var n,r=null==e||null==(n=e.properties)?void 0:n.$current_url
if(!r||"string"!=typeof r)return!1
if(!go._matchString(r,null==t?void 0:t.url,(null==t?void 0:t.url_matching)||"contains"))return!1}return!0}static _matchString(e,t,n){switch(n){case"regex":return!!p&&Bi(e,t)
case"exact":return t===e
case"contains":var r=go._escapeStringRegexp(t).replace(/_/g,".").replace(/%/g,".*")
return Bi(e,r)
default:return!1}}static _escapeStringRegexp(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}_checkStepElement(e,t){if((null!=t&&t.href||null!=t&&t.tag_name||null!=t&&t.text)&&!this._getElementsList(e).some((e=>!(null!=t&&t.href&&!go._matchString(e.href||"",null==t?void 0:t.href,(null==t?void 0:t.href_matching)||"exact")||null!=t&&t.tag_name&&e.tag_name!==(null==t?void 0:t.tag_name)||null!=t&&t.text&&!go._matchString(e.text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")&&!go._matchString(e.$el_text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")))))return!1
if(null!=t&&t.selector){var n,r=null==e||null==(n=e.properties)?void 0:n.$element_selectors
if(!r)return!1
if(!r.includes(null==t?void 0:t.selector))return!1}return!0}_getElementsList(e){return null==(null==e?void 0:e.properties.$elements)?[]:null==e?void 0:e.properties.$elements}}!function(e){e.Button="button",e.Tab="tab",e.Selector="selector"}({}),function(e){e.TopLeft="top_left",e.TopRight="top_right",e.TopCenter="top_center",e.MiddleLeft="middle_left",e.MiddleRight="middle_right",e.MiddleCenter="middle_center",e.Left="left",e.Center="center",e.Right="right",e.NextToTrigger="next_to_trigger"}({})
var _o=function(e){return e.Popover="popover",e.API="api",e.Widget="widget",e.ExternalSurvey="external_survey",e}({})
!function(e){e.Open="open",e.MultipleChoice="multiple_choice",e.SingleChoice="single_choice",e.Rating="rating",e.Link="link"}({}),function(e){e.NextQuestion="next_question",e.End="end",e.ResponseBased="response_based",e.SpecificQuestion="specific_question"}({}),function(e){e.Once="once",e.Recurring="recurring",e.Always="always"}({})
var vo=function(e){return e.SHOWN="survey shown",e.DISMISSED="survey dismissed",e.SENT="survey sent",e}({}),mo=function(e){return e.SURVEY_ID="$survey_id",e.SURVEY_NAME="$survey_name",e.SURVEY_RESPONSE="$survey_response",e.SURVEY_ITERATION="$survey_iteration",e.SURVEY_ITERATION_START_DATE="$survey_iteration_start_date",e.SURVEY_PARTIALLY_COMPLETED="$survey_partially_completed",e.SURVEY_SUBMISSION_ID="$survey_submission_id",e.SURVEY_QUESTIONS="$survey_questions",e.SURVEY_COMPLETED="$survey_completed",e}({}),bo=te("[Surveys]"),yo="seenSurvey_",wo=(e,t)=>{var n="$survey_"+t+"/"+e.id
return e.current_iteration&&e.current_iteration>0&&(n="$survey_"+t+"/"+e.id+"/"+e.current_iteration),n},ko=[_o.Popover,_o.Widget,_o.API]
class So{constructor(e){this._instance=e,this._eventToSurveys=new Map,this._actionToSurveys=new Map}register(e){var t
G(null==(t=this._instance)?void 0:t._addCaptureHook)||(this._setupEventBasedSurveys(e),this._setupActionBasedSurveys(e))}_setupActionBasedSurveys(e){var t=e.filter((e=>{var t,n
return(null==(t=e.conditions)?void 0:t.actions)&&(null==(n=e.conditions)||null==(n=n.actions)||null==(n=n.values)?void 0:n.length)>0}))
0!==t.length&&(null==this._actionMatcher&&(this._actionMatcher=new go(this._instance),this._actionMatcher.init(),this._actionMatcher._addActionHook((e=>{this.onAction(e)}))),t.forEach((e=>{var t,n,r,i,s
e.conditions&&null!=(t=e.conditions)&&t.actions&&null!=(n=e.conditions)&&null!=(n=n.actions)&&n.values&&(null==(r=e.conditions)||null==(r=r.actions)||null==(r=r.values)?void 0:r.length)>0&&(null==(i=this._actionMatcher)||i.register(e.conditions.actions.values),null==(s=e.conditions)||null==(s=s.actions)||null==(s=s.values)||s.forEach((t=>{if(t&&t.name){var n=this._actionToSurveys.get(t.name)
n&&n.push(e.id),this._actionToSurveys.set(t.name,n||[e.id])}})))})))}_setupEventBasedSurveys(e){var t
0!==e.filter((e=>{var t,n
return(null==(t=e.conditions)?void 0:t.events)&&(null==(n=e.conditions)||null==(n=n.events)||null==(n=n.values)?void 0:n.length)>0})).length&&(null==(t=this._instance)||t._addCaptureHook(((e,t)=>{this.onEvent(e,t)})),e.forEach((e=>{var t
null==(t=e.conditions)||null==(t=t.events)||null==(t=t.values)||t.forEach((t=>{if(t&&t.name){var n=this._eventToSurveys.get(t.name)
n&&n.push(e.id),this._eventToSurveys.set(t.name,n||[e.id])}}))})))}onEvent(e,t){var n,r=(null==(n=this._instance)||null==(n=n.persistence)?void 0:n.props[Ge])||[]
if("survey shown"===e&&t&&r.length>0){var i
bo.info("survey event matched, removing survey from activated surveys",{event:e,eventPayload:t,existingActivatedSurveys:r})
var s=null==t||null==(i=t.properties)?void 0:i.$survey_id
if(s){var o=r.indexOf(s)
o>=0&&(r.splice(o,1),this._updateActivatedSurveys(r))}}else this._eventToSurveys.has(e)&&(bo.info("survey event matched, updating activated surveys",{event:e,surveys:this._eventToSurveys.get(e)}),this._updateActivatedSurveys(r.concat(this._eventToSurveys.get(e)||[])))}onAction(e){var t,n=(null==(t=this._instance)||null==(t=t.persistence)?void 0:t.props[Ge])||[]
this._actionToSurveys.has(e)&&this._updateActivatedSurveys(n.concat(this._actionToSurveys.get(e)||[]))}_updateActivatedSurveys(e){var t
null==(t=this._instance)||null==(t=t.persistence)||t.register({[Ge]:[...new Set(e)]})}getSurveys(){var e
return(null==(e=this._instance)||null==(e=e.persistence)?void 0:e.props[Ge])||[]}getEventToSurveys(){return this._eventToSurveys}_getActionMatcher(){return this._actionMatcher}}class xo{constructor(e){this._isSurveysEnabled=void 0,this._surveyManager=null,this._isFetchingSurveys=!1,this._isInitializingSurveys=!1,this._surveyCallbacks=[],this._instance=e,this._surveyEventReceiver=null}onRemoteConfig(e){var t=e.surveys
if(Q(t))return bo.warn("Flags not loaded yet. Not loading surveys.")
var n=B(t)
this._isSurveysEnabled=n?t.length>0:t,bo.info("flags response received, isSurveysEnabled: "+this._isSurveysEnabled),this.loadIfEnabled()}reset(){localStorage.removeItem("lastSeenSurveyDate")
for(var e=[],t=0;t<localStorage.length;t++){var n=localStorage.key(t);(null!=n&&n.startsWith(yo)||null!=n&&n.startsWith("inProgressSurvey_"))&&e.push(n)}e.forEach((e=>localStorage.removeItem(e)))}loadIfEnabled(){if(!this._surveyManager)if(this._isInitializingSurveys)bo.info("Already initializing surveys, skipping...")
else if(this._instance.config.disable_surveys)bo.info("Disabled. Not loading surveys.")
else{var e=null==C?void 0:C.__PosthogExtensions__
if(e){if(!G(this._isSurveysEnabled)||this._instance.config.advanced_enable_surveys){var t=this._isSurveysEnabled||this._instance.config.advanced_enable_surveys
this._isInitializingSurveys=!0
try{var n=e.generateSurveys
if(n)return void this._completeSurveyInitialization(n,t)
var r=e.loadExternalDependency
if(!r)return void this._handleSurveyLoadError("PostHog loadExternalDependency extension not found.")
r(this._instance,"surveys",(n=>{n||!e.generateSurveys?this._handleSurveyLoadError("Could not load surveys script",n):this._completeSurveyInitialization(e.generateSurveys,t)}))}catch(e){throw this._handleSurveyLoadError("Error initializing surveys",e),e}finally{this._isInitializingSurveys=!1}}}else bo.error("PostHog Extensions not found.")}}_completeSurveyInitialization(e,t){this._surveyManager=e(this._instance,t),this._surveyEventReceiver=new So(this._instance),bo.info("Surveys loaded successfully"),this._notifySurveyCallbacks({isLoaded:!0})}_handleSurveyLoadError(e,t){bo.error(e,t),this._notifySurveyCallbacks({isLoaded:!1,error:e})}onSurveysLoaded(e){return this._surveyCallbacks.push(e),this._surveyManager&&this._notifySurveyCallbacks({isLoaded:!0}),()=>{this._surveyCallbacks=this._surveyCallbacks.filter((t=>t!==e))}}getSurveys(e,t){if(void 0===t&&(t=!1),this._instance.config.disable_surveys)return bo.info("Disabled. Not loading surveys."),e([])
var n=this._instance.get_property(Ue)
if(n&&!t)return e(n,{isLoaded:!0})
if(this._isFetchingSurveys)return e([],{isLoaded:!1,error:"Surveys are already being loaded"})
try{this._isFetchingSurveys=!0,this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/surveys/?token="+this._instance.config.token),method:"GET",timeout:this._instance.config.surveys_request_timeout_ms,callback:t=>{var n
this._isFetchingSurveys=!1
var r=t.statusCode
if(200!==r||!t.json){var i="Surveys API could not be loaded, status: "+r
return bo.error(i),e([],{isLoaded:!1,error:i})}var s,o=t.json.surveys||[],a=o.filter((e=>function(e){return!(!e.start_date||e.end_date)}(e)&&(function(e){var t
return!(null==(t=e.conditions)||null==(t=t.events)||null==(t=t.values)||!t.length)}(e)||function(e){var t
return!(null==(t=e.conditions)||null==(t=t.actions)||null==(t=t.values)||!t.length)}(e))))
return a.length>0&&(null==(s=this._surveyEventReceiver)||s.register(a)),null==(n=this._instance.persistence)||n.register({[Ue]:o}),e(o,{isLoaded:!0})}})}catch(e){throw this._isFetchingSurveys=!1,e}}_notifySurveyCallbacks(e){for(var t of this._surveyCallbacks)try{if(!e.isLoaded)return t([],e)
this.getSurveys(t)}catch(e){bo.error("Error in survey callback",e)}}getActiveMatchingSurveys(e,t){if(void 0===t&&(t=!1),!Q(this._surveyManager))return this._surveyManager.getActiveMatchingSurveys(e,t)
bo.warn("init was not called")}_getSurveyById(e){var t=null
return this.getSurveys((n=>{var r
t=null!==(r=n.find((t=>t.id===e)))&&void 0!==r?r:null})),t}_checkSurveyEligibility(e){if(Q(this._surveyManager))return{eligible:!1,reason:"SDK is not enabled or survey functionality is not yet loaded"}
var t="string"==typeof e?this._getSurveyById(e):e
return t?this._surveyManager.checkSurveyEligibility(t):{eligible:!1,reason:"Survey not found"}}canRenderSurvey(e){if(Q(this._surveyManager))return bo.warn("init was not called"),{visible:!1,disabledReason:"SDK is not enabled or survey functionality is not yet loaded"}
var t=this._checkSurveyEligibility(e)
return{visible:t.eligible,disabledReason:t.reason}}canRenderSurveyAsync(e,t){return Q(this._surveyManager)?(bo.warn("init was not called"),Promise.resolve({visible:!1,disabledReason:"SDK is not enabled or survey functionality is not yet loaded"})):new Promise((n=>{this.getSurveys((t=>{var r,i=null!==(r=t.find((t=>t.id===e)))&&void 0!==r?r:null
if(i){var s=this._checkSurveyEligibility(i)
n({visible:s.eligible,disabledReason:s.reason})}else n({visible:!1,disabledReason:"Survey not found"})}),t)}))}renderSurvey(e,t){if(Q(this._surveyManager))bo.warn("init was not called")
else{var n=this._getSurveyById(e)
if(n)if(ko.includes(n.type)){var r=null==y?void 0:y.querySelector(t)
r?this._surveyManager.renderSurvey(n,r):bo.warn("Survey element not found")}else bo.warn("Surveys of type "+n.type+" cannot be rendered in the app")
else bo.warn("Survey not found")}}}var Eo=te("[RateLimiter]")
class Co{constructor(e){var t,n
this.serverLimits={},this.lastEventRateLimited=!1,this.checkForLimiting=e=>{var t=e.text
if(t&&t.length)try{(JSON.parse(t).quota_limited||[]).forEach((e=>{Eo.info((e||"events")+" is quota limited."),this.serverLimits[e]=(new Date).getTime()+6e4}))}catch(e){return void Eo.warn('could not rate limit - continuing. Error: "'+(null==e?void 0:e.message)+'"',{text:t})}},this.instance=e,this.captureEventsPerSecond=(null==(t=e.config.rate_limiting)?void 0:t.events_per_second)||10,this.captureEventsBurstLimit=Math.max((null==(n=e.config.rate_limiting)?void 0:n.events_burst_limit)||10*this.captureEventsPerSecond,this.captureEventsPerSecond),this.lastEventRateLimited=this.clientRateLimitContext(!0).isRateLimited}clientRateLimitContext(e){var t,n,r
void 0===e&&(e=!1)
var i=(new Date).getTime(),s=null!==(t=null==(n=this.instance.persistence)?void 0:n.get_property(Qe))&&void 0!==t?t:{tokens:this.captureEventsBurstLimit,last:i}
s.tokens+=(i-s.last)/1e3*this.captureEventsPerSecond,s.last=i,s.tokens>this.captureEventsBurstLimit&&(s.tokens=this.captureEventsBurstLimit)
var o=s.tokens<1
return o||e||(s.tokens=Math.max(0,s.tokens-1)),!o||this.lastEventRateLimited||e||this.instance.capture("$$client_ingestion_warning",{$$client_ingestion_warning_message:"posthog-js client rate limited. Config is set to "+this.captureEventsPerSecond+" events per second and "+this.captureEventsBurstLimit+" events burst limit."},{skip_client_rate_limiting:!0}),this.lastEventRateLimited=o,null==(r=this.instance.persistence)||r.set_property(Qe,s),{isRateLimited:o,remainingTokens:s.tokens}}isServerRateLimited(e){var t=this.serverLimits[e||"events"]||!1
return!1!==t&&(new Date).getTime()<t}}var To=te("[RemoteConfig]")
class Po{constructor(e){this._instance=e}get remoteConfig(){var e
return null==(e=C._POSTHOG_REMOTE_CONFIG)||null==(e=e[this._instance.config.token])?void 0:e.config}_loadRemoteConfigJs(e){var t,n
null!=(t=C.__PosthogExtensions__)&&t.loadExternalDependency?null==(n=C.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"remote-config",(()=>e(this.remoteConfig))):(To.error("PostHog Extensions not found. Cannot load remote config."),e())}_loadRemoteConfigJSON(e){this._instance._send_request({method:"GET",url:this._instance.requestRouter.endpointFor("assets","/array/"+this._instance.config.token+"/config"),callback:t=>{e(t.json)}})}load(){try{if(this.remoteConfig)return To.info("Using preloaded remote config",this.remoteConfig),void this._onRemoteConfig(this.remoteConfig)
if(this._instance._shouldDisableFlags())return void To.warn("Remote config is disabled. Falling back to local config.")
this._loadRemoteConfigJs((e=>{if(!e)return To.info("No config found after loading remote JS config. Falling back to JSON."),void this._loadRemoteConfigJSON((e=>{this._onRemoteConfig(e)}))
this._onRemoteConfig(e)}))}catch(e){To.error("Error loading remote config",e)}}_onRemoteConfig(e){e?this._instance.config.__preview_remote_config?(this._instance._onRemoteConfig(e),!1!==e.hasFeatureFlags&&this._instance.featureFlags.ensureFlagsLoaded()):To.info("__preview_remote_config is disabled. Logging config instead",e):To.error("Failed to fetch remote config from PostHog.")}}var $o=3e3
class Lo{constructor(e,t){this._isPaused=!0,this._queue=[],this._flushTimeoutMs=fn((null==t?void 0:t.flush_interval_ms)||$o,250,5e3,"flush interval",$o),this._sendRequest=e}enqueue(e){this._queue.push(e),this._flushTimeout||this._setFlushTimeout()}unload(){this._clearFlushTimeout()
var e=this._queue.length>0?this._formatQueue():{},t=Object.values(e);[...t.filter((e=>0===e.url.indexOf("/e"))),...t.filter((e=>0!==e.url.indexOf("/e")))].map((e=>{this._sendRequest(f({},e,{transport:"sendBeacon"}))}))}enable(){this._isPaused=!1,this._setFlushTimeout()}_setFlushTimeout(){var e=this
this._isPaused||(this._flushTimeout=setTimeout((()=>{if(this._clearFlushTimeout(),this._queue.length>0){var t=this._formatQueue(),n=function(){var n=t[r],i=(new Date).getTime()
n.data&&B(n.data)&&ie(n.data,(e=>{e.offset=Math.abs(e.timestamp-i),delete e.timestamp})),e._sendRequest(n)}
for(var r in t)n()}}),this._flushTimeoutMs))}_clearFlushTimeout(){clearTimeout(this._flushTimeout),this._flushTimeout=void 0}_formatQueue(){var e={}
return ie(this._queue,(t=>{var n,r=t,i=(r?r.batchKey:null)||r.url
G(e[i])&&(e[i]=f({},r,{data:[]})),null==(n=e[i].data)||n.push(r.data)})),this._queue=[],e}}var Io=["retriesPerformedSoFar"]
class Mo{constructor(e){this._isPolling=!1,this._pollIntervalMs=3e3,this._queue=[],this._instance=e,this._queue=[],this._areWeOnline=!0,!G(p)&&"onLine"in p.navigator&&(this._areWeOnline=p.navigator.onLine,pe(p,"online",(()=>{this._areWeOnline=!0,this._flush()})),pe(p,"offline",(()=>{this._areWeOnline=!1})))}get length(){return this._queue.length}retriableRequest(e){var{retriesPerformedSoFar:t}=e,n=h(e,Io)
K(t)&&t>0&&(n.url=Fi(n.url,{retry_count:t})),this._instance._send_request(f({},n,{callback:e=>{200!==e.statusCode&&(e.statusCode<400||e.statusCode>=500)&&(null!=t?t:0)<10?this._enqueue(f({retriesPerformedSoFar:t},n)):null==n.callback||n.callback(e)}}))}_enqueue(e){var t=e.retriesPerformedSoFar||0
e.retriesPerformedSoFar=t+1
var n=function(e){var t=3e3*Math.pow(2,e),n=t/2,r=Math.min(18e5,t),i=(Math.random()-.5)*(r-n)
return Math.ceil(r+i)}(t),r=Date.now()+n
this._queue.push({retryAt:r,requestOptions:e})
var i="Enqueued failed request for retry in "+n
navigator.onLine||(i+=" (Browser is offline)"),ee.warn(i),this._isPolling||(this._isPolling=!0,this._poll())}_poll(){this._poller&&clearTimeout(this._poller),this._poller=setTimeout((()=>{this._areWeOnline&&this._queue.length>0&&this._flush(),this._poll()}),this._pollIntervalMs)}_flush(){var e=Date.now(),t=[],n=this._queue.filter((n=>n.retryAt<e||(t.push(n),!1)))
if(this._queue=t,n.length>0)for(var{requestOptions:r}of n)this.retriableRequest(r)}unload(){for(var{requestOptions:e}of(this._poller&&(clearTimeout(this._poller),this._poller=void 0),this._queue))try{this._instance._send_request(f({},e,{transport:"sendBeacon"}))}catch(e){ee.error(e)}this._queue=[]}}class Ro{constructor(e){this._updateScrollData=()=>{var e,t,n,r
this._context||(this._context={})
var i=this.scrollElement(),s=this.scrollY(),o=i?Math.max(0,i.scrollHeight-i.clientHeight):0,a=s+((null==i?void 0:i.clientHeight)||0),l=(null==i?void 0:i.scrollHeight)||0
this._context.lastScrollY=Math.ceil(s),this._context.maxScrollY=Math.max(s,null!==(e=this._context.maxScrollY)&&void 0!==e?e:0),this._context.maxScrollHeight=Math.max(o,null!==(t=this._context.maxScrollHeight)&&void 0!==t?t:0),this._context.lastContentY=a,this._context.maxContentY=Math.max(a,null!==(n=this._context.maxContentY)&&void 0!==n?n:0),this._context.maxContentHeight=Math.max(l,null!==(r=this._context.maxContentHeight)&&void 0!==r?r:0)},this._instance=e}getContext(){return this._context}resetContext(){var e=this._context
return setTimeout(this._updateScrollData,0),e}startMeasuringScrollPosition(){pe(p,"scroll",this._updateScrollData,{capture:!0}),pe(p,"scrollend",this._updateScrollData,{capture:!0}),pe(p,"resize",this._updateScrollData)}scrollElement(){if(!this._instance.config.scroll_root_selector)return null==p?void 0:p.document.documentElement
var e=B(this._instance.config.scroll_root_selector)?this._instance.config.scroll_root_selector:[this._instance.config.scroll_root_selector]
for(var t of e){var n=null==p?void 0:p.document.querySelector(t)
if(n)return n}}scrollY(){if(this._instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollTop||0}return p&&(p.scrollY||p.pageYOffset||p.document.documentElement.scrollTop)||0}scrollX(){if(this._instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollLeft||0}return p&&(p.scrollX||p.pageXOffset||p.document.documentElement.scrollLeft)||0}}var Oo=e=>Ys(null==e?void 0:e.config.mask_personal_data_properties,null==e?void 0:e.config.custom_personal_data_properties)
class Ao{constructor(e,t,n,r){this._onSessionIdCallback=e=>{var t=this._getStored()
if(!t||t.sessionId!==e){var n={sessionId:e,props:this._sessionSourceParamGenerator(this._instance)}
this._persistence.register({[Ve]:n})}},this._instance=e,this._sessionIdManager=t,this._persistence=n,this._sessionSourceParamGenerator=r||Oo,this._sessionIdManager.onSessionId(this._onSessionIdCallback)}_getStored(){return this._persistence.props[Ve]}getSetOnceProps(){var e,t=null==(e=this._getStored())?void 0:e.props
return t?"r"in t?Xs(t):{$referring_domain:t.referringDomain,$pathname:t.initialPathName,utm_source:t.utm_source,utm_campaign:t.utm_campaign,utm_medium:t.utm_medium,utm_content:t.utm_content,utm_term:t.utm_term}:{}}getSessionProps(){var e={}
return ie(ue(this.getSetOnceProps()),((t,n)=>{"$current_url"===n&&(n="url"),e["$session_entry_"+A(n)]=t})),e}}var Fo=te("[SessionId]")
class jo{constructor(e,t,n){var r
if(this._sessionIdChangedHandlers=[],this._sessionHasBeenIdleTooLong=(e,t)=>Math.abs(e-t)>this.sessionTimeoutMs,!e.persistence)throw new Error("SessionIdManager requires a PostHogPersistence instance")
if(e.config.__preview_experimental_cookieless_mode)throw new Error("SessionIdManager cannot be used with __preview_experimental_cookieless_mode")
this._config=e.config,this._persistence=e.persistence,this._windowId=void 0,this._sessionId=void 0,this._sessionStartTimestamp=null,this._sessionActivityTimestamp=null,this._sessionIdGenerator=t||zt,this._windowIdGenerator=n||zt
var i=this._config.persistence_name||this._config.token,s=this._config.session_idle_timeout_seconds||1800
if(this._sessionTimeoutMs=1e3*fn(s,60,36e3,"session_idle_timeout_seconds",1800),e.register({$configured_session_timeout_ms:this._sessionTimeoutMs}),this._resetIdleTimer(),this._window_id_storage_key="ph_"+i+"_window_id",this._primary_window_exists_storage_key="ph_"+i+"_primary_window_exists",this._canUseSessionStorage()){var o=sn._parse(this._window_id_storage_key),a=sn._parse(this._primary_window_exists_storage_key)
o&&!a?this._windowId=o:sn._remove(this._window_id_storage_key),sn._set(this._primary_window_exists_storage_key,!0)}if(null!=(r=this._config.bootstrap)&&r.sessionID)try{var l=(e=>{var t=this._config.bootstrap.sessionID.replace(/-/g,"")
if(32!==t.length)throw new Error("Not a valid UUID")
if("7"!==t[12])throw new Error("Not a UUIDv7")
return parseInt(t.substring(0,12),16)})()
this._setSessionId(this._config.bootstrap.sessionID,(new Date).getTime(),l)}catch(e){Fo.error("Invalid sessionID in bootstrap",e)}this._listenToReloadWindow()}get sessionTimeoutMs(){return this._sessionTimeoutMs}onSessionId(e){return G(this._sessionIdChangedHandlers)&&(this._sessionIdChangedHandlers=[]),this._sessionIdChangedHandlers.push(e),this._sessionId&&e(this._sessionId,this._windowId),()=>{this._sessionIdChangedHandlers=this._sessionIdChangedHandlers.filter((t=>t!==e))}}_canUseSessionStorage(){return"memory"!==this._config.persistence&&!this._persistence._disabled&&sn._is_supported()}_setWindowId(e){e!==this._windowId&&(this._windowId=e,this._canUseSessionStorage()&&sn._set(this._window_id_storage_key,e))}_getWindowId(){return this._windowId?this._windowId:this._canUseSessionStorage()?sn._parse(this._window_id_storage_key):null}_setSessionId(e,t,n){e===this._sessionId&&t===this._sessionActivityTimestamp&&n===this._sessionStartTimestamp||(this._sessionStartTimestamp=n,this._sessionActivityTimestamp=t,this._sessionId=e,this._persistence.register({[Oe]:[t,e,n]}))}_getSessionId(){if(this._sessionId&&this._sessionActivityTimestamp&&this._sessionStartTimestamp)return[this._sessionActivityTimestamp,this._sessionId,this._sessionStartTimestamp]
var e=this._persistence.props[Oe]
return B(e)&&2===e.length&&e.push(e[0]),e||[0,null,0]}resetSessionId(){this._setSessionId(null,null,null)}_listenToReloadWindow(){pe(p,"beforeunload",(()=>{this._canUseSessionStorage()&&sn._remove(this._primary_window_exists_storage_key)}),{capture:!1})}checkAndGetSessionAndWindowId(e,t){if(void 0===e&&(e=!1),void 0===t&&(t=null),this._config.__preview_experimental_cookieless_mode)throw new Error("checkAndGetSessionAndWindowId should not be called in __preview_experimental_cookieless_mode")
var n=t||(new Date).getTime(),[r,i,s]=this._getSessionId(),o=this._getWindowId(),a=K(s)&&s>0&&Math.abs(n-s)>864e5,l=!1,c=!i,u=!e&&this._sessionHasBeenIdleTooLong(n,r)
c||u||a?(i=this._sessionIdGenerator(),o=this._windowIdGenerator(),Fo.info("new session ID generated",{sessionId:i,windowId:o,changeReason:{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}}),s=n,l=!0):o||(o=this._windowIdGenerator(),l=!0)
var d=0===r||!e||a?n:r,f=0===s?(new Date).getTime():s
return this._setWindowId(o),this._setSessionId(i,d,f),e||this._resetIdleTimer(),l&&this._sessionIdChangedHandlers.forEach((e=>e(i,o,l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0))),{sessionId:i,windowId:o,sessionStartTimestamp:f,changeReason:l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0,lastActivityTimestamp:r}}_resetIdleTimer(){clearTimeout(this._enforceIdleTimeout),this._enforceIdleTimeout=setTimeout((()=>{var[e]=this._getSessionId()
this._sessionHasBeenIdleTooLong((new Date).getTime(),e)&&this.resetSessionId()}),1.1*this.sessionTimeoutMs)}}var No=["$set_once","$set"],Do=te("[SiteApps]")
class Bo{constructor(e){this._instance=e,this._bufferedInvocations=[],this.apps={}}get isEnabled(){return!!this._instance.config.opt_in_site_apps}_eventCollector(e,t){if(t){var n=this.globalsForEvent(t)
this._bufferedInvocations.push(n),this._bufferedInvocations.length>1e3&&(this._bufferedInvocations=this._bufferedInvocations.slice(10))}}get siteAppLoaders(){var e
return null==(e=C._POSTHOG_REMOTE_CONFIG)||null==(e=e[this._instance.config.token])?void 0:e.siteApps}init(){if(this.isEnabled){var e=this._instance._addCaptureHook(this._eventCollector.bind(this))
this._stopBuffering=()=>{e(),this._bufferedInvocations=[],this._stopBuffering=void 0}}}globalsForEvent(e){var t,n,r,i,s,o,a
if(!e)throw new Error("Event payload is required")
var l={},c=this._instance.get_property("$groups")||[],u=this._instance.get_property("$stored_group_properties")||{}
for(var[d,p]of Object.entries(u))l[d]={id:c[d],type:d,properties:p}
var{$set_once:g,$set:_}=e
return{event:f({},h(e,No),{properties:f({},e.properties,_?{$set:f({},null!==(t=null==(n=e.properties)?void 0:n.$set)&&void 0!==t?t:{},_)}:{},g?{$set_once:f({},null!==(r=null==(i=e.properties)?void 0:i.$set_once)&&void 0!==r?r:{},g)}:{}),elements_chain:null!==(s=null==(o=e.properties)?void 0:o.$elements_chain)&&void 0!==s?s:"",distinct_id:null==(a=e.properties)?void 0:a.distinct_id}),person:{properties:this._instance.get_property("$stored_person_properties")},groups:l}}setupSiteApp(e){var t=this.apps[e.id],n=()=>{var n
!t.errored&&this._bufferedInvocations.length&&(Do.info("Processing "+this._bufferedInvocations.length+" events for site app with id "+e.id),this._bufferedInvocations.forEach((e=>null==t.processEvent?void 0:t.processEvent(e))),t.processedBuffer=!0),Object.values(this.apps).every((e=>e.processedBuffer||e.errored))&&(null==(n=this._stopBuffering)||n.call(this))},r=!1,i=i=>{t.errored=!i,t.loaded=!0,Do.info("Site app with id "+e.id+" "+(i?"loaded":"errored")),r&&n()}
try{var{processEvent:s}=e.init({posthog:this._instance,callback:e=>{i(e)}})
s&&(t.processEvent=s),r=!0}catch(t){Do.error("Error while initializing PostHog app with config id "+e.id,t),i(!1)}if(r&&t.loaded)try{n()}catch(n){Do.error("Error while processing buffered events PostHog app with config id "+e.id,n),t.errored=!0}}_setupSiteApps(){var e=this.siteAppLoaders||[]
for(var t of e)this.apps[t.id]={id:t.id,loaded:!1,errored:!1,processedBuffer:!1}
for(var n of e)this.setupSiteApp(n)}_onCapturedEvent(e){if(0!==Object.keys(this.apps).length){var t=this.globalsForEvent(e)
for(var n of Object.values(this.apps))try{null==n.processEvent||n.processEvent(t)}catch(t){Do.error("Error while processing event "+e.event+" for site app "+n.id,t)}}}onRemoteConfig(e){var t,n,r,i=this
if(null!=(t=this.siteAppLoaders)&&t.length)return this.isEnabled?(this._setupSiteApps(),void this._instance.on("eventCaptured",(e=>this._onCapturedEvent(e)))):void Do.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
if(null==(n=this._stopBuffering)||n.call(this),null!=(r=e.siteApps)&&r.length)if(this.isEnabled){var s=function(e){var t
C["__$$ph_site_app_"+e]=i._instance,null==(t=C.__PosthogExtensions__)||null==t.loadSiteApp||t.loadSiteApp(i._instance,a,(t=>{if(t)return Do.error("Error while initializing PostHog app with config id "+e,t)}))}
for(var{id:o,url:a}of e.siteApps)s(o)}else Do.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')}}var qo=["amazonbot","amazonproductbot","app.hypefactors.com","applebot","archive.org_bot","awariobot","backlinksextendedbot","baiduspider","bingbot","bingpreview","chrome-lighthouse","dataforseobot","deepscan","duckduckbot","facebookexternal","facebookcatalog","http://yandex.com/bots","hubspot","ia_archiver","leikibot","linkedinbot","meta-externalagent","mj12bot","msnbot","nessus","petalbot","pinterest","prerender","rogerbot","screaming frog","sebot-wa","sitebulb","slackbot","slurp","trendictionbot","turnitin","twitterbot","vercel-screenshot","vercelbot","yahoo! slurp","yandexbot","zoombot","bot.htm","bot.php","(bot;","bot/","crawler","ahrefsbot","ahrefssiteaudit","semrushbot","siteauditbot","splitsignalbot","gptbot","oai-searchbot","chatgpt-user","perplexitybot","better uptime bot","sentryuptimebot","uptimerobot","headlesschrome","cypress","google-hoteladsverifier","adsbot-google","apis-google","duplexweb-google","feedfetcher-google","google favicon","google web preview","google-read-aloud","googlebot","googleother","google-cloudvertexbot","googleweblight","mediapartners-google","storebot-google","google-inspectiontool","bytespider"],Ho=function(e,t){if(!e)return!1
var n=e.toLowerCase()
return qo.concat(t||[]).some((e=>{var t=e.toLowerCase()
return-1!==n.indexOf(t)}))},Uo=function(e,t){if(!e)return!1
var n=e.userAgent
if(n&&Ho(n,t))return!0
try{var r=null==e?void 0:e.userAgentData
if(null!=r&&r.brands&&r.brands.some((e=>Ho(null==e?void 0:e.brand,t))))return!0}catch(e){}return!!e.webdriver},Go=function(e){return e.US="us",e.EU="eu",e.CUSTOM="custom",e}({}),Wo="i.posthog.com"
class zo{constructor(e){this._regionCache={},this.instance=e}get apiHost(){var e=this.instance.config.api_host.trim().replace(/\/$/,"")
return"https://app.posthog.com"===e?"https://us.i.posthog.com":e}get uiHost(){var e,t=null==(e=this.instance.config.ui_host)?void 0:e.replace(/\/$/,"")
return t||(t=this.apiHost.replace("."+Wo,".posthog.com")),"https://app.posthog.com"===t?"https://us.posthog.com":t}get region(){return this._regionCache[this.apiHost]||(/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=Go.US:/https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=Go.EU:this._regionCache[this.apiHost]=Go.CUSTOM),this._regionCache[this.apiHost]}endpointFor(e,t){if(void 0===t&&(t=""),t&&(t="/"===t[0]?t:"/"+t),"ui"===e)return this.uiHost+t
if(this.region===Go.CUSTOM)return this.apiHost+t
var n=Wo+t
switch(e){case"assets":return"https://"+this.region+"-assets."+n
case"api":return"https://"+this.region+"."+n}}}var Vo={icontains:(e,t)=>!!p&&t.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:(e,t)=>!!p&&-1===t.href.toLowerCase().indexOf(e.toLowerCase()),regex:(e,t)=>!!p&&Bi(t.href,e),not_regex:(e,t)=>!!p&&!Bi(t.href,e),exact:(e,t)=>t.href===e,is_not:(e,t)=>t.href!==e}
class Qo{constructor(e){var t=this
this.getWebExperimentsAndEvaluateDisplayLogic=function(e){void 0===e&&(e=!1),t.getWebExperiments((e=>{Qo._logInfo("retrieved web experiments from the server"),t._flagToExperiments=new Map,e.forEach((e=>{if(e.feature_flag_key){var n
t._flagToExperiments&&(Qo._logInfo("setting flag key ",e.feature_flag_key," to web experiment ",e),null==(n=t._flagToExperiments)||n.set(e.feature_flag_key,e))
var r=t._instance.getFeatureFlag(e.feature_flag_key)
W(r)&&e.variants[r]&&t._applyTransforms(e.name,r,e.variants[r].transforms)}else if(e.variants)for(var i in e.variants){var s=e.variants[i]
Qo._matchesTestVariant(s)&&t._applyTransforms(e.name,i,s.transforms)}}))}),e)},this._instance=e,this._instance.onFeatureFlags((e=>{this.onFeatureFlags(e)}))}onFeatureFlags(e){if(this._is_bot())Qo._logInfo("Refusing to render web experiment since the viewer is a likely bot")
else if(!this._instance.config.disable_web_experiments){if(Q(this._flagToExperiments))return this._flagToExperiments=new Map,this.loadIfEnabled(),void this.previewWebExperiment()
Qo._logInfo("applying feature flags",e),e.forEach((e=>{var t
if(this._flagToExperiments&&null!=(t=this._flagToExperiments)&&t.has(e)){var n,r=this._instance.getFeatureFlag(e),i=null==(n=this._flagToExperiments)?void 0:n.get(e)
r&&null!=i&&i.variants[r]&&this._applyTransforms(i.name,r,i.variants[r].transforms)}}))}}previewWebExperiment(){var e=Qo.getWindowLocation()
if(null!=e&&e.search){var t=Mt(null==e?void 0:e.search,"__experiment_id"),n=Mt(null==e?void 0:e.search,"__experiment_variant")
t&&n&&(Qo._logInfo("previewing web experiments "+t+" && "+n),this.getWebExperiments((e=>{this._showPreviewWebExperiment(parseInt(t),n,e)}),!1,!0))}}loadIfEnabled(){this._instance.config.disable_web_experiments||this.getWebExperimentsAndEvaluateDisplayLogic()}getWebExperiments(e,t,n){if(this._instance.config.disable_web_experiments&&!n)return e([])
var r=this._instance.get_property("$web_experiments")
if(r&&!t)return e(r)
this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/web_experiments/?token="+this._instance.config.token),method:"GET",callback:t=>{if(200!==t.statusCode||!t.json)return e([])
var n=t.json.experiments||[]
return e(n)}})}_showPreviewWebExperiment(e,t,n){var r=n.filter((t=>t.id===e))
r&&r.length>0&&(Qo._logInfo("Previewing web experiment ["+r[0].name+"] with variant ["+t+"]"),this._applyTransforms(r[0].name,t,r[0].variants[t].transforms))}static _matchesTestVariant(e){return!Q(e.conditions)&&Qo._matchUrlConditions(e)&&Qo._matchUTMConditions(e)}static _matchUrlConditions(e){var t
if(Q(e.conditions)||Q(null==(t=e.conditions)?void 0:t.url))return!0
var n,r,i,s=Qo.getWindowLocation()
return!!s&&(null==(n=e.conditions)||!n.url||Vo[null!==(r=null==(i=e.conditions)?void 0:i.urlMatchType)&&void 0!==r?r:"icontains"](e.conditions.url,s))}static getWindowLocation(){return null==p?void 0:p.location}static _matchUTMConditions(e){var t
if(Q(e.conditions)||Q(null==(t=e.conditions)?void 0:t.utm))return!0
var n=zs()
if(n.utm_source){var r,i,s,o,a,l,c,u,d=null==(r=e.conditions)||null==(r=r.utm)||!r.utm_campaign||(null==(i=e.conditions)||null==(i=i.utm)?void 0:i.utm_campaign)==n.utm_campaign,f=null==(s=e.conditions)||null==(s=s.utm)||!s.utm_source||(null==(o=e.conditions)||null==(o=o.utm)?void 0:o.utm_source)==n.utm_source,h=null==(a=e.conditions)||null==(a=a.utm)||!a.utm_medium||(null==(l=e.conditions)||null==(l=l.utm)?void 0:l.utm_medium)==n.utm_medium,p=null==(c=e.conditions)||null==(c=c.utm)||!c.utm_term||(null==(u=e.conditions)||null==(u=u.utm)?void 0:u.utm_term)==n.utm_term
return d&&h&&p&&f}return!1}static _logInfo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
ee.info("[WebExperiments] "+e,n)}_applyTransforms(e,t,n){this._is_bot()?Qo._logInfo("Refusing to render web experiment since the viewer is a likely bot"):"control"!==t?n.forEach((n=>{if(n.selector){var r
Qo._logInfo("applying transform of variant "+t+" for experiment "+e+" ",n)
var i=null==(r=document)?void 0:r.querySelectorAll(n.selector)
null==i||i.forEach((e=>{var t=e
n.html&&(t.innerHTML=n.html),n.css&&t.setAttribute("style",n.css)}))}})):Qo._logInfo("Control variants leave the page unmodified.")}_is_bot(){return b&&this._instance?Uo(b,this._instance.config.custom_blocked_useragents):void 0}}var Ko=te("[PostHog ExternalIntegrations]"),Jo={intercom:"intercom-integration",crispChat:"crisp-chat-integration"}
class Yo{constructor(e){this._instance=e}_loadScript(e,t){var n
null==(n=C.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,e,(e=>{if(e)return Ko.error("failed to load script",e)
t()}))}startIfEnabledOrStop(){var e=this,t=function(t){var n,i,s
!r||null!=(n=C.__PosthogExtensions__)&&null!=(n=n.integrations)&&n[t]||e._loadScript(Jo[t],(()=>{var n
null==(n=C.__PosthogExtensions__)||null==(n=n.integrations)||null==(n=n[t])||n.start(e._instance)})),!r&&null!=(i=C.__PosthogExtensions__)&&null!=(i=i.integrations)&&i[t]&&(null==(s=C.__PosthogExtensions__)||null==(s=s.integrations)||null==(s=s[t])||s.stop())}
for(var[n,r]of Object.entries(null!==(i=this._instance.config.integrations)&&void 0!==i?i:{})){var i
t(n)}}}var Xo={},Zo=()=>{},ea="posthog",ta=!Oi&&-1===(null==E?void 0:E.indexOf("MSIE"))&&-1===(null==E?void 0:E.indexOf("Mozilla")),na=e=>{var t
return{api_host:"https://us.i.posthog.com",ui_host:null,token:"",autocapture:!0,rageclick:!0,cross_subdomain_cookie:fe(null==y?void 0:y.location),persistence:"localStorage+cookie",persistence_name:"",loaded:Zo,save_campaign_params:!0,custom_campaign_params:[],custom_blocked_useragents:[],save_referrer:!0,capture_pageview:"2025-05-24"!==e||"history_change",capture_pageleave:"if_capture_pageview",defaults:null!=e?e:"unset",debug:w&&W(null==w?void 0:w.search)&&-1!==w.search.indexOf("__posthog_debug=true")||!1,cookie_expiration:365,upgrade:!1,disable_session_recording:!1,disable_persistence:!1,disable_web_experiments:!0,disable_surveys:!1,disable_surveys_automatic_display:!1,disable_external_dependency_loading:!1,enable_recording_console_log:void 0,secure_cookie:"https:"===(null==p||null==(t=p.location)?void 0:t.protocol),ip:!1,opt_out_capturing_by_default:!1,opt_out_persistence_by_default:!1,opt_out_useragent_filter:!1,opt_out_capturing_persistence_type:"localStorage",opt_out_capturing_cookie_prefix:null,opt_in_site_apps:!1,property_denylist:[],respect_dnt:!1,sanitize_properties:null,request_headers:{},request_batching:!0,properties_string_max_length:65535,session_recording:{},mask_all_element_attributes:!1,mask_all_text:!1,mask_personal_data_properties:!1,custom_personal_data_properties:[],advanced_disable_flags:!1,advanced_disable_decide:!1,advanced_disable_feature_flags:!1,advanced_disable_feature_flags_on_first_load:!1,advanced_only_evaluate_survey_feature_flags:!1,advanced_enable_surveys:!1,advanced_disable_toolbar_metrics:!1,feature_flag_request_timeout_ms:3e3,surveys_request_timeout_ms:1e4,on_request_error:e=>{var t="Bad HTTP status: "+e.statusCode+" "+e.text
ee.error(t)},get_device_id:e=>e,capture_performance:void 0,name:"posthog",bootstrap:{},disable_compression:!1,session_idle_timeout_seconds:1800,person_profiles:"identified_only",before_send:void 0,request_queue_config:{flush_interval_ms:$o},error_tracking:{},_onCapture:Zo}},ra=e=>{var t={}
G(e.process_person)||(t.person_profiles=e.process_person),G(e.xhr_headers)||(t.request_headers=e.xhr_headers),G(e.cookie_name)||(t.persistence_name=e.cookie_name),G(e.disable_cookie)||(t.disable_persistence=e.disable_cookie),G(e.store_google)||(t.save_campaign_params=e.store_google),G(e.verbose)||(t.debug=e.verbose)
var n=se({},t,e)
return B(e.property_blacklist)&&(G(e.property_denylist)?n.property_denylist=e.property_blacklist:B(e.property_denylist)?n.property_denylist=[...e.property_blacklist,...e.property_denylist]:ee.error("Invalid value for property_denylist config: "+e.property_denylist)),n}
class ia{constructor(){this.__forceAllowLocalhost=!1}get _forceAllowLocalhost(){return this.__forceAllowLocalhost}set _forceAllowLocalhost(e){ee.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),this.__forceAllowLocalhost=e}}class sa{get decideEndpointWasHit(){var e,t
return null!==(e=null==(t=this.featureFlags)?void 0:t.hasLoadedFlags)&&void 0!==e&&e}get flagsEndpointWasHit(){var e,t
return null!==(e=null==(t=this.featureFlags)?void 0:t.hasLoadedFlags)&&void 0!==e&&e}constructor(){this.webPerformance=new ia,this._personProcessingSetOncePropertiesSent=!1,this.version=T.LIB_VERSION,this._internalEventEmitter=new po,this._calculate_event_properties=this.calculateEventProperties.bind(this),this.config=na(),this.SentryIntegration=bi,this.sentryIntegration=e=>function(e,t){var n=mi(e,t)
return{name:vi,processEvent:e=>n(e)}}(this,e),this.__request_queue=[],this.__loaded=!1,this.analyticsDefaultEndpoint="/e/",this._initialPageviewCaptured=!1,this._visibilityStateListener=null,this._initialPersonProfilesConfig=null,this._cachedPersonProperties=null,this.featureFlags=new uo(this),this.toolbar=new xi(this),this.scrollManager=new Ro(this),this.pageViewManager=new Ri(this),this.surveys=new xo(this),this.experiments=new Qo(this),this.exceptions=new Wi(this),this.rateLimiter=new Co(this),this.requestRouter=new zo(this),this.consent=new an(this),this.externalIntegrations=new Yo(this),this.people={set:(e,t,n)=>{var r=W(e)?{[e]:t}:e
this.setPersonProperties(r),null==n||n({})},set_once:(e,t,n)=>{var r=W(e)?{[e]:t}:e
this.setPersonProperties(void 0,r),null==n||n({})}},this.on("eventCaptured",(e=>ee.info('send "'+(null==e?void 0:e.event)+'"',e)))}init(e,t,n){if(n&&n!==ea){var r,i=null!==(r=Xo[n])&&void 0!==r?r:new sa
return i._init(e,t,n),Xo[n]=i,Xo[ea][n]=i,i}return this._init(e,t,n)}_init(e,t,n){var r,i
if(void 0===t&&(t={}),G(e)||z(e))return ee.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),this
if(this.__loaded)return ee.warn("You have already initialized PostHog! Re-initializing is a no-op"),this
this.__loaded=!0,this.config={},this._originalUserConfig=t,this._triggered_notifs=[],t.person_profiles&&(this._initialPersonProfilesConfig=t.person_profiles),this.set_config(se({},na(t.defaults),ra(t),{name:n,token:e})),this.config.on_xhr_error&&ee.error("on_xhr_error is deprecated. Use on_request_error instead"),this.compression=t.disable_compression?void 0:I.GZipJS
var s=this._is_persistence_disabled()
this.persistence=new ho(this.config,s),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new ho(f({},this.config,{persistence:"sessionStorage"}),s)
var o=f({},this.persistence.props),a=f({},this.sessionPersistence.props)
if(this.register({$initialization_time:(new Date).toISOString()}),this._requestQueue=new Lo((e=>this._send_retriable_request(e)),this.config.request_queue_config),this._retryQueue=new Mo(this),this.__request_queue=[],this.config.__preview_experimental_cookieless_mode||(this.sessionManager=new jo(this),this.sessionPropsManager=new Ao(this,this.sessionManager,this.persistence)),new Ci(this).startIfEnabledOrStop(),this.siteApps=new Bo(this),null==(r=this.siteApps)||r.init(),this.config.__preview_experimental_cookieless_mode||(this.sessionRecording=new gi(this),this.sessionRecording.startIfEnabledOrStop()),this.config.disable_scroll_properties||this.scrollManager.startMeasuringScrollPosition(),this.autocapture=new Dt(this),this.autocapture.startIfEnabled(),this.surveys.loadIfEnabled(),this.heatmaps=new Mi(this),this.heatmaps.startIfEnabled(),this.webVitalsAutocapture=new $i(this),this.exceptionObserver=new gn(this),this.exceptionObserver.startIfEnabled(),this.deadClicksAutocapture=new dn(this,un),this.deadClicksAutocapture.startIfEnabled(),this.historyAutocapture=new Gn(this),this.historyAutocapture.startIfEnabled(),T.DEBUG=T.DEBUG||this.config.debug,T.DEBUG&&ee.info("Starting in debug mode",{this:this,config:t,thisC:f({},this.config),p:o,s:a}),void 0!==(null==(i=t.bootstrap)?void 0:i.distinctID)){var l,c,u=this.config.get_device_id(zt()),d=null!=(l=t.bootstrap)&&l.isIdentifiedID?u:t.bootstrap.distinctID
this.persistence.set_property(ze,null!=(c=t.bootstrap)&&c.isIdentifiedID?"identified":"anonymous"),this.register({distinct_id:t.bootstrap.distinctID,$device_id:d})}if(this._hasBootstrappedFeatureFlags()){var h,g,_=Object.keys((null==(h=t.bootstrap)?void 0:h.featureFlags)||{}).filter((e=>{var n
return!(null==(n=t.bootstrap)||null==(n=n.featureFlags)||!n[e])})).reduce(((e,n)=>{var r
return e[n]=(null==(r=t.bootstrap)||null==(r=r.featureFlags)?void 0:r[n])||!1,e}),{}),v=Object.keys((null==(g=t.bootstrap)?void 0:g.featureFlagPayloads)||{}).filter((e=>_[e])).reduce(((e,n)=>{var r,i
return null!=(r=t.bootstrap)&&null!=(r=r.featureFlagPayloads)&&r[n]&&(e[n]=null==(i=t.bootstrap)||null==(i=i.featureFlagPayloads)?void 0:i[n]),e}),{})
this.featureFlags.receivedFeatureFlags({featureFlags:_,featureFlagPayloads:v})}if(this.config.__preview_experimental_cookieless_mode)this.register_once({distinct_id:et,$device_id:null},"")
else if(!this.get_distinct_id()){var m=this.config.get_device_id(zt())
this.register_once({distinct_id:m,$device_id:m},""),this.persistence.set_property(ze,"anonymous")}return pe(p,"onpagehide"in self?"pagehide":"unload",this._handle_unload.bind(this),{passive:!1}),this.toolbar.maybeLoadToolbar(),t.segment?function(e,t){var n=e.config.segment
if(!n)return t()
!function(e,t){var n=e.config.segment
if(!n)return t()
var r=n=>{var r=()=>n.anonymousId()||zt()
e.config.get_device_id=r,n.id()&&(e.register({distinct_id:n.id(),$device_id:r()}),e.persistence.set_property(ze,"identified")),t()},i=n.user()
"then"in i&&q(i.then)?i.then((e=>r(e))):r(i)}(e,(()=>{n.register((e=>{Promise&&Promise.resolve||_i.warn("This browser does not have Promise support, and can not use the segment integration")
var t=(t,n)=>{if(!n)return t
t.event.userId||t.event.anonymousId===e.get_distinct_id()||(_i.info("No userId set, resetting PostHog"),e.reset()),t.event.userId&&t.event.userId!==e.get_distinct_id()&&(_i.info("UserId set, identifying with PostHog"),e.identify(t.event.userId))
var r=e.calculateEventProperties(n,t.event.properties)
return t.event.properties=Object.assign({},r,t.event.properties),t}
return{name:"PostHog JS",type:"enrichment",version:"1.0.0",isLoaded:()=>!0,load:()=>Promise.resolve(),track:e=>t(e,e.event.event),page:e=>t(e,"$pageview"),identify:e=>t(e,"$identify"),screen:e=>t(e,"$screen")}})(e)).then((()=>{t()}))}))}(this,(()=>this._loaded())):this._loaded(),q(this.config._onCapture)&&this.config._onCapture!==Zo&&(ee.warn("onCapture is deprecated. Please use `before_send` instead"),this.on("eventCaptured",(e=>this.config._onCapture(e.event,e)))),this.config.ip&&ee.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'),this}_onRemoteConfig(e){var t,n,r,i,s,o,a,l
if(!y||!y.body)return ee.info("document not ready yet, trying again in 500 milliseconds..."),void setTimeout((()=>{this._onRemoteConfig(e)}),500)
this.compression=void 0,e.supportedCompression&&!this.config.disable_compression&&(this.compression=R(e.supportedCompression,I.GZipJS)?I.GZipJS:R(e.supportedCompression,I.Base64)?I.Base64:void 0),null!=(t=e.analytics)&&t.endpoint&&(this.analyticsDefaultEndpoint=e.analytics.endpoint),this.set_config({person_profiles:this._initialPersonProfilesConfig?this._initialPersonProfilesConfig:"identified_only"}),null==(n=this.siteApps)||n.onRemoteConfig(e),null==(r=this.sessionRecording)||r.onRemoteConfig(e),null==(i=this.autocapture)||i.onRemoteConfig(e),null==(s=this.heatmaps)||s.onRemoteConfig(e),this.surveys.onRemoteConfig(e),null==(o=this.webVitalsAutocapture)||o.onRemoteConfig(e),null==(a=this.exceptionObserver)||a.onRemoteConfig(e),this.exceptions.onRemoteConfig(e),null==(l=this.deadClicksAutocapture)||l.onRemoteConfig(e)}_loaded(){try{this.config.loaded(this)}catch(e){ee.critical("`loaded` function failed",e)}this._start_queue_if_opted_in(),this.config.capture_pageview&&setTimeout((()=>{this.consent.isOptedIn()&&this._captureInitialPageview()}),1),new Po(this).load(),this.featureFlags.flags()}_start_queue_if_opted_in(){var e
this.has_opted_out_capturing()||this.config.request_batching&&(null==(e=this._requestQueue)||e.enable())}_dom_loaded(){this.has_opted_out_capturing()||re(this.__request_queue,(e=>this._send_retriable_request(e))),this.__request_queue=[],this._start_queue_if_opted_in()}_handle_unload(){var e,t
this.config.request_batching?(this._shouldCapturePageleave()&&this.capture("$pageleave"),null==(e=this._requestQueue)||e.unload(),null==(t=this._retryQueue)||t.unload()):this._shouldCapturePageleave()&&this.capture("$pageleave",null,{transport:"sendBeacon"})}_send_request(e){this.__loaded&&(ta?this.__request_queue.push(e):this.rateLimiter.isServerRateLimited(e.batchKey)||(e.transport=e.transport||this.config.api_transport,e.url=Fi(e.url,{ip:this.config.ip?1:0}),e.headers=f({},this.config.request_headers),e.compression="best-available"===e.compression?this.compression:e.compression,e.fetchOptions=e.fetchOptions||this.config.fetch_options,(e=>{var t,n,r,i=f({},e)
i.timeout=i.timeout||6e4,i.url=Fi(i.url,{_:(new Date).getTime().toString(),ver:T.LIB_VERSION,compression:i.compression})
var s=null!==(t=i.transport)&&void 0!==t?t:"fetch",o=null!==(n=null==(r=he(Di,(e=>e.transport===s)))?void 0:r.method)&&void 0!==n?n:Di[0].method
if(!o)throw new Error("No available transport method")
o(i)})(f({},e,{callback:t=>{var n,r
this.rateLimiter.checkForLimiting(t),t.statusCode>=400&&(null==(n=(r=this.config).on_request_error)||n.call(r,t)),null==e.callback||e.callback(t)}}))))}_send_retriable_request(e){this._retryQueue?this._retryQueue.retriableRequest(e):this._send_request(e)}_execute_array(e){var t,n=[],r=[],i=[]
re(e,(e=>{e&&(t=e[0],B(t)?i.push(e):q(e)?e.call(this):B(e)&&"alias"===t?n.push(e):B(e)&&-1!==t.indexOf("capture")&&q(this[t])?i.push(e):r.push(e))}))
var s=function(e,t){re(e,(function(e){if(B(e[0])){var n=t
ie(e,(function(e){n=n[e[0]].apply(n,e.slice(1))}))}else this[e[0]].apply(this,e.slice(1))}),t)}
s(n,this),s(r,this),s(i,this)}_hasBootstrappedFeatureFlags(){var e,t
return(null==(e=this.config.bootstrap)?void 0:e.featureFlags)&&Object.keys(null==(t=this.config.bootstrap)?void 0:t.featureFlags).length>0||!1}push(e){this._execute_array([e])}capture(e,t,n){var r
if(this.__loaded&&this.persistence&&this.sessionPersistence&&this._requestQueue){if(!this.consent.isOptedOut())if(!G(e)&&W(e)){if(this.config.opt_out_useragent_filter||!this._is_bot()){var i=null!=n&&n.skip_client_rate_limiting?void 0:this.rateLimiter.clientRateLimitContext()
if(null==i||!i.isRateLimited){null!=t&&t.$current_url&&!W(null==t?void 0:t.$current_url)&&(ee.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."),null==t||delete t.$current_url),this.sessionPersistence.update_search_keyword(),this.config.save_campaign_params&&this.sessionPersistence.update_campaign_params(),this.config.save_referrer&&this.sessionPersistence.update_referrer_info(),(this.config.save_campaign_params||this.config.save_referrer)&&this.persistence.set_initial_person_info()
var s=new Date,o=(null==n?void 0:n.timestamp)||s,a=zt(),l={uuid:a,event:e,properties:this.calculateEventProperties(e,t||{},o,a)}
i&&(l.properties.$lib_rate_limit_remaining_tokens=i.remainingTokens),(null==n?void 0:n.$set)&&(l.$set=null==n?void 0:n.$set)
var c,u,d=this._calculate_set_once_properties(null==n?void 0:n.$set_once)
if(d&&(l.$set_once=d),(l=function(e,t){return n=e,r=e=>W(e)&&!V(t)?e.slice(0,t):e,i=new Set,function e(t,n){return t!==Object(t)?r?r(t):t:i.has(t)?void 0:(i.add(t),B(t)?(s=[],re(t,(t=>{s.push(e(t))}))):(s={},ie(t,((t,n)=>{i.has(t)||(s[n]=e(t,n))}))),s)
var s}(n)
var n,r,i}(l,null!=n&&n._noTruncate?null:this.config.properties_string_max_length)).timestamp=o,G(null==n?void 0:n.timestamp)||(l.properties.$event_time_override_provided=!0,l.properties.$event_time_override_system_time=s),e===vo.DISMISSED||e===vo.SENT){var h=null==t?void 0:t[mo.SURVEY_ID],p=null==t?void 0:t[mo.SURVEY_ITERATION]
localStorage.setItem((u=""+yo+(c={id:h,current_iteration:p}).id,c.current_iteration&&c.current_iteration>0&&(u=""+yo+c.id+"_"+c.current_iteration),u),"true"),l.$set=f({},l.$set,{[wo({id:h,current_iteration:p},e===vo.SENT?"responded":"dismissed")]:!0})}var g=f({},l.properties.$set,l.$set)
if(U(g)||this.setPersonPropertiesForFlags(g),!Q(this.config.before_send)){var _=this._runBeforeSend(l)
if(!_)return
l=_}this._internalEventEmitter.emit("eventCaptured",l)
var v={method:"POST",url:null!==(r=null==n?void 0:n._url)&&void 0!==r?r:this.requestRouter.endpointFor("api",this.analyticsDefaultEndpoint),data:l,compression:"best-available",batchKey:null==n?void 0:n._batchKey}
return!this.config.request_batching||n&&(null==n||!n._batchKey)||null!=n&&n.send_instantly?this._send_retriable_request(v):this._requestQueue.enqueue(v),l}ee.critical("This capture call is ignored due to client rate limiting.")}}else ee.error("No event name provided to posthog.capture")}else ee.uninitializedWarning("posthog.capture")}_addCaptureHook(e){return this.on("eventCaptured",(t=>e(t.event,t)))}calculateEventProperties(e,t,n,r,i){if(n=n||new Date,!this.persistence||!this.sessionPersistence)return t
var s=i?void 0:this.persistence.remove_event_timer(e),o=f({},t)
if(o.token=this.config.token,o.$config_defaults=this.config.defaults,this.config.__preview_experimental_cookieless_mode&&(o.$cookieless_mode=!0),"$snapshot"===e){var a=f({},this.persistence.properties(),this.sessionPersistence.properties())
return o.distinct_id=a.distinct_id,(!W(o.distinct_id)&&!K(o.distinct_id)||z(o.distinct_id))&&ee.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),o}var l,c=to(this.config.mask_personal_data_properties,this.config.custom_personal_data_properties)
if(this.sessionManager){var{sessionId:u,windowId:d}=this.sessionManager.checkAndGetSessionAndWindowId(i,n.getTime())
o.$session_id=u,o.$window_id=d}this.sessionPropsManager&&se(o,this.sessionPropsManager.getSessionProps())
try{var h
this.sessionRecording&&se(o,this.sessionRecording.sdkDebugProperties),o.$sdk_debug_retry_queue_size=null==(h=this._retryQueue)?void 0:h.length}catch(e){o.$sdk_debug_error_capturing_properties=String(e)}if(this.requestRouter.region===Go.CUSTOM&&(o.$lib_custom_api_host=this.config.api_host),l="$pageview"!==e||i?"$pageleave"!==e||i?this.pageViewManager.doEvent():this.pageViewManager.doPageLeave(n):this.pageViewManager.doPageView(n,r),o=se(o,l),"$pageview"===e&&y&&(o.title=y.title),!G(s)){var p=n.getTime()-s
o.$duration=parseFloat((p/1e3).toFixed(3))}E&&this.config.opt_out_useragent_filter&&(o.$browser_type=this._is_bot()?"bot":"browser"),(o=se({},c,this.persistence.properties(),this.sessionPersistence.properties(),o)).$is_identified=this._isIdentified(),B(this.config.property_denylist)?ie(this.config.property_denylist,(function(e){delete o[e]})):ee.error("Invalid value for property_denylist config: "+this.config.property_denylist+" or property_blacklist config: "+this.config.property_blacklist)
var g=this.config.sanitize_properties
g&&(ee.error("sanitize_properties is deprecated. Use before_send instead"),o=g(o,e))
var _=this._hasPersonProcessing()
return o.$process_person_profile=_,_&&!i&&this._requirePersonProcessing("_calculate_event_properties"),o}_calculate_set_once_properties(e){var t
if(!this.persistence||!this._hasPersonProcessing())return e
if(this._personProcessingSetOncePropertiesSent)return e
var n=this.persistence.get_initial_props(),r=null==(t=this.sessionPropsManager)?void 0:t.getSetOnceProps(),i=se({},n,r||{},e||{}),s=this.config.sanitize_properties
return s&&(ee.error("sanitize_properties is deprecated. Use before_send instead"),i=s(i,"$set_once")),this._personProcessingSetOncePropertiesSent=!0,U(i)?void 0:i}register(e,t){var n
null==(n=this.persistence)||n.register(e,t)}register_once(e,t,n){var r
null==(r=this.persistence)||r.register_once(e,t,n)}register_for_session(e){var t
null==(t=this.sessionPersistence)||t.register(e)}unregister(e){var t
null==(t=this.persistence)||t.unregister(e)}unregister_for_session(e){var t
null==(t=this.sessionPersistence)||t.unregister(e)}_register_single(e,t){this.register({[e]:t})}getFeatureFlag(e,t){return this.featureFlags.getFeatureFlag(e,t)}getFeatureFlagPayload(e){var t=this.featureFlags.getFeatureFlagPayload(e)
try{return JSON.parse(t)}catch(e){return t}}isFeatureEnabled(e,t){return this.featureFlags.isFeatureEnabled(e,t)}reloadFeatureFlags(){this.featureFlags.reloadFeatureFlags()}updateEarlyAccessFeatureEnrollment(e,t,n){this.featureFlags.updateEarlyAccessFeatureEnrollment(e,t,n)}getEarlyAccessFeatures(e,t,n){return void 0===t&&(t=!1),this.featureFlags.getEarlyAccessFeatures(e,t,n)}on(e,t){return this._internalEventEmitter.on(e,t)}onFeatureFlags(e){return this.featureFlags.onFeatureFlags(e)}onSurveysLoaded(e){return this.surveys.onSurveysLoaded(e)}onSessionId(e){var t,n
return null!==(t=null==(n=this.sessionManager)?void 0:n.onSessionId(e))&&void 0!==t?t:()=>{}}getSurveys(e,t){void 0===t&&(t=!1),this.surveys.getSurveys(e,t)}getActiveMatchingSurveys(e,t){void 0===t&&(t=!1),this.surveys.getActiveMatchingSurveys(e,t)}renderSurvey(e,t){this.surveys.renderSurvey(e,t)}canRenderSurvey(e){return this.surveys.canRenderSurvey(e)}canRenderSurveyAsync(e,t){return void 0===t&&(t=!1),this.surveys.canRenderSurveyAsync(e,t)}identify(e,t,n){if(!this.__loaded||!this.persistence)return ee.uninitializedWarning("posthog.identify")
if(K(e)&&(e=e.toString(),ee.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")),e)if(["distinct_id","distinctid"].includes(e.toLowerCase()))ee.critical('The string "'+e+'" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.')
else if(e!==et){if(this._requirePersonProcessing("posthog.identify")){var r=this.get_distinct_id()
if(this.register({$user_id:e}),!this.get_property("$device_id")){var i=r
this.register_once({$had_persisted_distinct_id:!0,$device_id:i},"")}e!==r&&e!==this.get_property(_e)&&(this.unregister(_e),this.register({distinct_id:e}))
var s="anonymous"===(this.persistence.get_property(ze)||"anonymous")
e!==r&&s?(this.persistence.set_property(ze,"identified"),this.setPersonPropertiesForFlags(f({},n||{},t||{}),!1),this.capture("$identify",{distinct_id:e,$anon_distinct_id:r},{$set:t||{},$set_once:n||{}}),this._cachedPersonProperties=qi(e,t,n),this.featureFlags.setAnonymousDistinctId(r)):(t||n)&&this.setPersonProperties(t,n),e!==r&&(this.reloadFeatureFlags(),this.unregister(We))}}else ee.critical('The string "'+et+'" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.')
else ee.error("Unique user id has not been set in posthog.identify")}setPersonProperties(e,t){if((e||t)&&this._requirePersonProcessing("posthog.setPersonProperties")){var n=qi(this.get_distinct_id(),e,t)
this._cachedPersonProperties!==n?(this.setPersonPropertiesForFlags(f({},t||{},e||{})),this.capture("$set",{$set:e||{},$set_once:t||{}}),this._cachedPersonProperties=n):ee.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")}}group(e,t,n){if(e&&t){if(this._requirePersonProcessing("posthog.group")){var r=this.getGroups()
r[e]!==t&&this.resetGroupPropertiesForFlags(e),this.register({$groups:f({},r,{[e]:t})}),n&&(this.capture("$groupidentify",{$group_type:e,$group_key:t,$group_set:n}),this.setGroupPropertiesForFlags({[e]:n})),r[e]===t||n||this.reloadFeatureFlags()}}else ee.error("posthog.group requires a group type and group key")}resetGroups(){this.register({$groups:{}}),this.resetGroupPropertiesForFlags(),this.reloadFeatureFlags()}setPersonPropertiesForFlags(e,t){void 0===t&&(t=!0),this.featureFlags.setPersonPropertiesForFlags(e,t)}resetPersonPropertiesForFlags(){this.featureFlags.resetPersonPropertiesForFlags()}setGroupPropertiesForFlags(e,t){void 0===t&&(t=!0),this._requirePersonProcessing("posthog.setGroupPropertiesForFlags")&&this.featureFlags.setGroupPropertiesForFlags(e,t)}resetGroupPropertiesForFlags(e){this.featureFlags.resetGroupPropertiesForFlags(e)}reset(e){var t,n,r,i
if(ee.info("reset"),!this.__loaded)return ee.uninitializedWarning("posthog.reset")
var s=this.get_property("$device_id")
if(this.consent.reset(),null==(t=this.persistence)||t.clear(),null==(n=this.sessionPersistence)||n.clear(),this.surveys.reset(),this.featureFlags.reset(),null==(r=this.persistence)||r.set_property(ze,"anonymous"),null==(i=this.sessionManager)||i.resetSessionId(),this._cachedPersonProperties=null,this.config.__preview_experimental_cookieless_mode)this.register_once({distinct_id:et,$device_id:null},"")
else{var o=this.config.get_device_id(zt())
this.register_once({distinct_id:o,$device_id:e?o:s},"")}this.register({$last_posthog_reset:(new Date).toISOString()},1)}get_distinct_id(){return this.get_property("distinct_id")}getGroups(){return this.get_property("$groups")||{}}get_session_id(){var e,t
return null!==(e=null==(t=this.sessionManager)?void 0:t.checkAndGetSessionAndWindowId(!0).sessionId)&&void 0!==e?e:""}get_session_replay_url(e){if(!this.sessionManager)return""
var{sessionId:t,sessionStartTimestamp:n}=this.sessionManager.checkAndGetSessionAndWindowId(!0),r=this.requestRouter.endpointFor("ui","/project/"+this.config.token+"/replay/"+t)
if(null!=e&&e.withTimestamp&&n){var i,s=null!==(i=e.timestampLookBack)&&void 0!==i?i:10
if(!n)return r
r+="?t="+Math.max(Math.floor(((new Date).getTime()-n)/1e3)-s,0)}return r}alias(e,t){return e===this.get_property(ge)?(ee.critical("Attempting to create alias for existing People user - aborting."),-2):this._requirePersonProcessing("posthog.alias")?(G(t)&&(t=this.get_distinct_id()),e!==t?(this._register_single(_e,e),this.capture("$create_alias",{alias:e,distinct_id:t})):(ee.warn("alias matches current distinct_id - skipping api call."),this.identify(e),-1)):void 0}set_config(e){var t=f({},this.config)
if(H(e)){var n,r,i,s,o
se(this.config,ra(e))
var a=this._is_persistence_disabled()
null==(n=this.persistence)||n.update_config(this.config,t,a),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new ho(f({},this.config,{persistence:"sessionStorage"}),a),Xt._is_supported()&&"true"===Xt._get("ph_debug")&&(this.config.debug=!0),this.config.debug&&(T.DEBUG=!0,ee.info("set_config",{config:e,oldConfig:t,newConfig:f({},this.config)})),null==(r=this.sessionRecording)||r.startIfEnabledOrStop(),null==(i=this.autocapture)||i.startIfEnabled(),null==(s=this.heatmaps)||s.startIfEnabled(),this.surveys.loadIfEnabled(),this._sync_opt_out_with_persistence(),null==(o=this.externalIntegrations)||o.startIfEnabledOrStop()}}startSessionRecording(e){var t,n,r,i,s,o=!0===e,a={sampling:o||!(null==e||!e.sampling),linked_flag:o||!(null==e||!e.linked_flag),url_trigger:o||!(null==e||!e.url_trigger),event_trigger:o||!(null==e||!e.event_trigger)}
Object.values(a).some(Boolean)&&(null==(t=this.sessionManager)||t.checkAndGetSessionAndWindowId(),a.sampling&&(null==(n=this.sessionRecording)||n.overrideSampling()),a.linked_flag&&(null==(r=this.sessionRecording)||r.overrideLinkedFlag()),a.url_trigger&&(null==(i=this.sessionRecording)||i.overrideTrigger("url")),a.event_trigger&&(null==(s=this.sessionRecording)||s.overrideTrigger("event")))
this.set_config({disable_session_recording:!1})}stopSessionRecording(){this.set_config({disable_session_recording:!0})}sessionRecordingStarted(){var e
return!(null==(e=this.sessionRecording)||!e.started)}captureException(e,t){var n=new Error("PostHog syntheticException")
return this.exceptions.sendExceptionEvent(f({},Hn((e=>e instanceof Error)(e)?{error:e,event:e.message}:{event:e},{syntheticException:n}),t))}loadToolbar(e){return this.toolbar.loadToolbar(e)}get_property(e){var t
return null==(t=this.persistence)?void 0:t.props[e]}getSessionProperty(e){var t
return null==(t=this.sessionPersistence)?void 0:t.props[e]}toString(){var e,t=null!==(e=this.config.name)&&void 0!==e?e:ea
return t!==ea&&(t=ea+"."+t),t}_isIdentified(){var e,t
return"identified"===(null==(e=this.persistence)?void 0:e.get_property(ze))||"identified"===(null==(t=this.sessionPersistence)?void 0:t.get_property(ze))}_hasPersonProcessing(){var e,t
return!("never"===this.config.person_profiles||"identified_only"===this.config.person_profiles&&!this._isIdentified()&&U(this.getGroups())&&(null==(e=this.persistence)||null==(e=e.props)||!e[_e])&&(null==(t=this.persistence)||null==(t=t.props)||!t[Xe]))}_shouldCapturePageleave(){return!0===this.config.capture_pageleave||"if_capture_pageview"===this.config.capture_pageleave&&(!0===this.config.capture_pageview||"history_change"===this.config.capture_pageview)}createPersonProfile(){this._hasPersonProcessing()||this._requirePersonProcessing("posthog.createPersonProfile")&&this.setPersonProperties({},{})}_requirePersonProcessing(e){return"never"===this.config.person_profiles?(ee.error(e+' was called, but process_person is set to "never". This call will be ignored.'),!1):(this._register_single(Xe,!0),!0)}_is_persistence_disabled(){var e=this.consent.isOptedOut(),t=this.config.opt_out_persistence_by_default
return this.config.disable_persistence||e&&!!t}_sync_opt_out_with_persistence(){var e,t,n,r,i=this._is_persistence_disabled()
return(null==(e=this.persistence)?void 0:e._disabled)!==i&&(null==(n=this.persistence)||n.set_disabled(i)),(null==(t=this.sessionPersistence)?void 0:t._disabled)!==i&&(null==(r=this.sessionPersistence)||r.set_disabled(i)),i}opt_in_capturing(e){var t
this.consent.optInOut(!0),this._sync_opt_out_with_persistence(),(G(null==e?void 0:e.captureEventName)||null!=e&&e.captureEventName)&&this.capture(null!==(t=null==e?void 0:e.captureEventName)&&void 0!==t?t:"$opt_in",null==e?void 0:e.captureProperties,{send_instantly:!0}),this.config.capture_pageview&&this._captureInitialPageview()}opt_out_capturing(){this.consent.optInOut(!1),this._sync_opt_out_with_persistence()}has_opted_in_capturing(){return this.consent.isOptedIn()}has_opted_out_capturing(){return this.consent.isOptedOut()}clear_opt_in_out_capturing(){this.consent.reset(),this._sync_opt_out_with_persistence()}_is_bot(){return b?Uo(b,this.config.custom_blocked_useragents):void 0}_captureInitialPageview(){y&&("visible"===y.visibilityState?this._initialPageviewCaptured||(this._initialPageviewCaptured=!0,this.capture("$pageview",{title:y.title},{send_instantly:!0}),this._visibilityStateListener&&(y.removeEventListener("visibilitychange",this._visibilityStateListener),this._visibilityStateListener=null)):this._visibilityStateListener||(this._visibilityStateListener=this._captureInitialPageview.bind(this),pe(y,"visibilitychange",this._visibilityStateListener)))}debug(e){!1===e?(null==p||p.console.log("You've disabled debug mode."),localStorage&&localStorage.removeItem("ph_debug"),this.set_config({debug:!1})):(null==p||p.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),localStorage&&localStorage.setItem("ph_debug","true"),this.set_config({debug:!0}))}_shouldDisableFlags(){var e,t,n,r,i,s,o=this._originalUserConfig||{}
return"advanced_disable_flags"in o?!!o.advanced_disable_flags:!1!==this.config.advanced_disable_flags?!!this.config.advanced_disable_flags:!0===this.config.advanced_disable_decide?(ee.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."),!0):(n="advanced_disable_decide",!1,r=ee,i=(t="advanced_disable_flags")in(e=o)&&!G(e[t]),s=n in e&&!G(e[n]),i?e[t]:!!s&&(r&&r.warn("Config field '"+n+"' is deprecated. Please use '"+t+"' instead. The old field will be removed in a future major version."),e[n]))}_runBeforeSend(e){if(Q(this.config.before_send))return e
var t=B(this.config.before_send)?this.config.before_send:[this.config.before_send],n=e
for(var r of t){if(n=r(n),Q(n)){var i="Event '"+e.event+"' was rejected in beforeSend function"
return X(e.event)?ee.warn(i+". This can cause unexpected behavior."):ee.info(i),null}n.properties&&!U(n.properties)||ee.warn("Event '"+e.event+"' has no properties after beforeSend function, this is likely an error.")}return n}getPageViewId(){var e
return null==(e=this.pageViewManager._currentPageview)?void 0:e.pageViewId}captureTraceFeedback(e,t){this.capture("$ai_feedback",{$ai_trace_id:String(e),$ai_feedback_text:t})}captureTraceMetric(e,t,n){this.capture("$ai_metric",{$ai_trace_id:String(e),$ai_metric_name:t,$ai_metric_value:String(n)})}}!function(e,t){for(var n=0;n<t.length;n++)e.prototype[t[n]]=ce(e.prototype[t[n]])}(sa,["identify"])
var oa,aa=(oa=Xo[ea]=new sa,function(){function e(){e.done||(e.done=!0,ta=!1,ie(Xo,(function(e){e._dom_loaded()})))}null!=y&&y.addEventListener?"complete"===y.readyState?e():pe(y,"DOMContentLoaded",e,{capture:!1}):p&&ee.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")}(),oa)
function la(...e){console.log(...e)}function ca(e,t){aa.capture(e,t)}function ua(){"string"==typeof window.self&&(s(),window.self=window),function(){try{aa.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N",{advanced_disable_decide:!0,advanced_disable_feature_flags:!0,advanced_disable_feature_flags_on_first_load:!0,advanced_disable_toolbar_metrics:!0,api_host:"https://us.i.posthog.com",autocapture:!1,capture_pageview:!1,disable_compression:!1,disable_persistence:!0,disable_session_recording:!0,disable_surveys:!0,person_profiles:"identified_only"})}catch(e){la(e)}}()}let da=0,fa=0,ha=0,pa=0,ga=0,_a=0,va=0
const ma=()=>Date.now(),ba=()=>Math.floor(ma()/1e3)
function ya(){return da||(da=ma()),da}function wa(){return fa||(fa=ya()-3e5),fa}function ka(){return ha||(ha=ya()-1728e5),ha}function Sa(){return pa||(pa=Math.floor(ya()/1e3)),pa}function xa(){return ga||(ga=Sa()-120),ga}function Ea(){return _a||(_a=Sa()-86400),_a}function Ca(){return va||(va=Sa()-604800),va}function Ta(e){return null===e}function Pa(e){return void 0===e}document.location.protocol,document.location.host
const $a=window.HCS?.defines?.cdn,La=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],Ia=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],Ma=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ra=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,Oa=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,Aa=/guild_id=(?<guildId>\d+)/,Fa=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,ja=/player_id=(?<playerId>\d+)/,Na=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,Da=/VL:.+?(?<vl>\d+)/,Ba=.2,qa="joinallgroupsundersize",Ha="index.php",Ua="?cmd=",Ga=`${Ha}${Ua}`,Wa="&subcmd=",za="&target_username=",Va=`${Ga}auctionhouse`,Qa=`${Va}&search=`,Ka=`${Ga}log`,Ja=`${Ga}ignore${Wa}add&ignore_username=`,Ya=`${Ga}profile`,Xa=`${Ya}&player_id=`,Za=`${Ya}${Wa}dropitems`,el=`${Ga}trade&target_player=`,tl=`${Ga}trade${Wa}createsecure${za}`,nl=`${Ga}arena${Wa}`,rl=`${Ha}${`${Ua}notepad&blank=1${Wa}`}`,il=`${rl}auctionsearch`,sl=`${Ga}points`,ol=`${Ga}guild${Wa}`,al=`${ol}log`,ll=`${ol}scouttower`,cl=`${ol}groups&subcmd2=`,ul=`${ol}inventory&subcmd2=report&user=`,dl=`${ol}view&guild_id=`,fl=`${cl}joinall`,hl=`${cl}${qa}`,pl=`${Ga}world`,gl=`${Ga}findplayer`,_l=`${gl}&search_show_first=1&search_username=`,vl=`${Ga}blacksmith`,ml=`${Ga}quickbuff`,bl=`${Ga}composing`,yl=`${Ga}attackplayer${za}`,wl=`${Ga}${Wa}viewupdatearchive`,kl=`${Ga}${Wa}viewarchive`,Sl=`${Ga}bounty`,xl=`${Ga}inventing${Wa}viewrecipe&recipe_id=`,El=`https://guide.fallensword.com/${Ga}`,Cl="after-update.actionlist",Tl="buffs.player",Pl="update.player",$l="level.stats-player",Ll="gold.stats-player",Il="prompt.worldDialogShop",Ml="keydown.controls",Rl="update.realm",Ol="-success.action-response",Al=`-1${Ol}`,Fl=`1${Ol}`,jl=`2${Ol}`,Nl=`9${Ol}`,Dl=`5${Ol}`,Bl=`25${Ol}`,ql=1,Hl=2,Ul=16,Gl=128,Wl=256,zl="needToCompose",Vl="lastComposeCheck",Ql="characterVirtualLevel",Kl="enableGuildActivityTracker",Jl="lastLadderReset",Yl="form",Xl="table",Zl="td",ec="fsh_buffLog",tc="stat-level",nc="stat-defense",rc="stat-attack",ic="stat-damage",sc="stat-armor",oc="stat-hp",ac="stat-vl",lc="GM_",cc=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],uc=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],dc=`${$a}ui/world/action_spinner.gif`,fc=".fa-envelope",hc='a[href*="&player_id="]',pc=.002,gc=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],_c='input[name="blockedSkillList[]"]'
var vc={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addServerNode:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252",compactRanks:!1,lastModalGuildLogCheck:0,dailyQuestReRoll:!1}
const mc=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function bc(e,t){const n=window.localStorage.getItem(lc+e)
return Ta(n)||Pa(n)?t:function(e){const t=mc.find((t=>e.startsWith(t[0])))
return t?t[1](e):e}(n)}function yc(e){return bc(e,vc[e])}function wc(e){return"boolean"==typeof e}function kc(e){return"string"==typeof e}function Sc(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(lc+e,t+n)}const xc=[[kc,(e,t)=>{Sc(e,"S]",t)}],[e=>"number"==typeof e,(e,t)=>{t.toString().indexOf(".")<0&&Sc(e,"N]",t)}],[wc,(e,t)=>{Sc(e,"B]",t)}]]
function Ec(e,t){const n=xc.find((e=>e[0](t)))
n&&n[1](e,t)}function Cc(e){const t=`screenview__${e}`,n=yc(t)
Number.isFinite(n)&&n>Ea()||(ca(t),Ec(t,Sa()))}function Tc(e){return"function"==typeof e}function Pc(e){return"object"==typeof e}function $c(e,t){try{return JSON.parse(e,t)}catch(e){}}function Lc(e,t){return t?t.querySelector(e):document.querySelector(e)}function Ic(e){const t=Lc("link",document.body)
return new Promise((n=>{const r=document.createElement("link")
r.type="text/css",r.rel="stylesheet",r.onload=()=>{n()},r.href=e,t?t.before(r):document.body.append(r)}))}var Mc="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function Rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Oc,Ac={exports:{}}
var Fc=(Oc||(Oc=1,Ac.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==Mc?Mc:"undefined"!=typeof self?self:{}
function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){var t=e.default
if("function"==typeof t){var n=function(){return t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var r={},i={},s={},o={},a="<unknown>"
function l(e){return e.split("\n").reduce((function(e,t){var n=d(t)||h(t)||_(t)||y(t)||m(t)
return n&&e.push(n),e}),[])}var c=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,u=/\((\S*)(?::(\d+))(?::(\d+))\)/
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
return t?{file:t[3],methodName:t[1]||a,arguments:[],lineNumber:+t[4],column:t[5]?+t[5]:null}:null}var b=/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i
function y(e){var t=b.exec(e)
return t?{file:t[2],methodName:t[1]||a,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var w=n(Object.freeze({__proto__:null,parse:l}));(function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i)
return r(t,e),t},s=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):i(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())}))},o=e&&e.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
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
try{var r=a.parse(e).map((function(e){return{file:e.file,method:e.methodName,number:e.lineNumber,column:e.column}}))
return t&&r.splice(0,p(r)),r}catch(e){return n.debug(e),[]}}function h(e){var t=!1,n=!1
return e.file&&(t=e.file.toLowerCase().indexOf("@honeybadger-io")>-1),e.method&&(n=e.method.toLowerCase().indexOf("@honeybadger-io")>-1),t||n}function p(e){for(var n=0,r=0;r<e.length;r++){var i=e[r]
if(!h(i)){if(!i.file||"<anonymous>"===i.file){var s=e[r+1]
if(s&&h(s)){n++
continue}}break}n++}return n||t.DEFAULT_BACKTRACE_SHIFT}function g(e,t){if(e.cause){for(var n=[],r=e;n.length<3&&(r=r.cause);)n.push({class:r.name,message:r.message,backtrace:"string"==typeof r.stack?f(r.stack,!1,t):null})
return n}return[]}function _(e,t){return s(this,void 0,void 0,(function(){var n,r,i,s
return o(this,(function(o){switch(o.label){case 0:if(n=[],!t||!e||!e.length)return[2,n]
r=0,o.label=1
case 1:return e.length?(i=e.splice(0)[r],[4,t(i.file)]):[3,3]
case 2:return s=o.sent(),n[r]=q(s,i.number,i.column,2),r++,[3,1]
case 3:return[2,n]}}))}))}function v(e,t){for(var n=[],r=!0,i=0,s=t.length;i<s;i++){var o=(0,t[i])(e)
!1===o&&(r=!1),n.push(o)}return{results:n,result:r}}function m(e,t,n){e&&e.afterNotify&&e.afterNotify(n,e)
for(var r=0,i=t.length;r<i;r++)t[r](n,e)
return!0}function b(e){if("object"!=typeof e||null===e)return{}
var t={}
for(var n in e)t[n]=e[n]
return t}function y(e,t){void 0===t&&(t=8)
var n=[]
function r(e){if(!e||"object"!=typeof e)return!1
for(var t=0;t<n.length;t++)if(n[t]===e)return!0
return n.push(e),!1}function i(e){var t=typeof e
return/function/.test(t)?"toJSON"===e.name:!/symbol/.test(t)&&null!==e&&("object"!=typeof e||void 0!==e.hasOwnProperty)}function s(e,n){if(void 0===n&&(n=0),n>=t)return"[DEPTH]"
if(!i(e))return Object.prototype.toString.call(e)
if(r(e))return"[RECURSION]"
if(Array.isArray(e))return e.map((function(e){return o(e,n+1)}))
if("object"==typeof e){var s={}
for(var a in e){var l=e[a]
Object.prototype.hasOwnProperty.call(e,a)&&null!=a&&null!=l&&(s[a]=o(l,n+1))}return s}return e}function o(e,t){void 0===t&&(t=0)
try{return s(e,t)}catch(e){return"[ERROR] ".concat(e)}}return o(e)}function k(e){var t=function(t){return function(){for(var n,r=[],i=0;i<arguments.length;i++)r[i]=arguments[i]
if("debug"===t){if(!e.config.debug)return
t="log"}r.unshift("[Honeybadger]"),(n=e.config.logger)[t].apply(n,r)}}
return{log:t("log"),info:t("info"),debug:t("debug"),warn:t("warn"),error:t("error")}}function S(e){var t
if(e)if(x(e)){var n=e
t=l(e,{name:n.name,message:n.message,stack:n.stack,cause:n.cause})}else t="object"==typeof e?b(e):{message:String(e)}
else t={}
return t}function x(e){return e instanceof Error||"[object Error]"===Object.prototype.toString.call(e)}function E(e,t,n){if(e&&t&&n&&t in e)try{for(var r=e[t];r&&r.__hb_original;)r=r.__hb_original
e[t]=n(r),e[t].__hb_original=r}catch(e){}}t.merge=l,t.mergeNotice=c,t.objectIsEmpty=u,t.objectIsExtensible=d,t.makeBacktrace=f,t.DEFAULT_BACKTRACE_SHIFT=3,t.calculateBacktraceShift=p,t.getCauses=g,t.getSourceForBacktrace=_,t.runBeforeNotifyHandlers=v,t.runAfterNotifyHandlers=m,t.shallowClone=b,t.sanitize=y,t.logger=k,t.makeNotice=S,t.isErrorObject=x,t.instrument=E
var C=!1,T=[]
function P(e,t){e&&e.console&&t&&(T.push(t),C||(C=!0,["debug","info","warn","error","log"].forEach((function(t){E(e.console,t,(function(n){return function(){var r=Array.prototype.slice.call(arguments)
T.forEach((function(e){try{e(t,r)}catch(e){}})),"function"==typeof n&&Function.prototype.apply.call(n,e.console,arguments)}}))}))))}function $(e,t){var n=e.trim().replace(/\/$/,"")
return t=t.trim().replace(/(^\/|\/$)/g,""),"".concat(n,"/").concat(t)}function L(){try{throw new Error("")}catch(e){if(e.stack)return e.stack}for(var e=10,t=[],n=arguments.callee;n&&t.length<e;){/function(?:\s+([\w$]+))+\s*\(/.test(n.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>")
try{n=n.caller}catch(e){break}}return t.join("\n")}function I(e,t){if(R("Object",e)){R("Array",t)||(t=[])
var n=[]
return r(e)}function r(e){var i,s
if(R("Object",e)||R("Array",e)){if(-1!==n.indexOf(e))return"[CIRCULAR DATA STRUCTURE]"
n.push(e)}if(R("Object",e)){for(i in s={},e)M(i,t)?s[i]="[FILTERED]":s[i]=r(e[i])
return s}return R("Array",e)?e.map((function(e){return r(e)})):R("Function",e)?"[FUNC]":e}}function M(e,t){for(var n=0;n<t.length;n++)if(-1!==e.toLowerCase().indexOf(t[n].toLowerCase()))return!0
return!1}function R(e,t){var n=Object.prototype.toString.call(t).slice(8,-1)
return null!=t&&n===e}function O(e,t){if(!t)return e
if("string"!=typeof e)return e
var n=e.split(/\?/,2)[1]
if(!n)return e
var r=e
return n.split(/[&]\s?/).forEach((function(e){var n=e.split("=",2),i=n[0],s=n[1]
M(i,t)&&(r=r.replace("".concat(i,"=").concat(s),"".concat(i,"=[FILTERED]")))})),r}function A(e,t){void 0===t&&(t="")
var n={}
return Object.keys(e).forEach((function(r){var i=t+r.replace(/\W/g,"_").toUpperCase()
n[i]=e[r]})),n}function F(e){return JSON.parse(JSON.stringify(e))}t.instrumentConsole=P,t.endpoint=$,t.generateStackTrace=L,t.filter=I,t.filterUrl=O,t.formatCGIData=A,t.clone=F
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
if(void 0===G[i]&&(G[i]=0),G[i]%r==0){var s="Deprecation warning: ".concat(t," has been deprecated; please use ").concat(n," instead.")
e.warn(s),G[i]++}else G[i]++}t.logDeprecatedMethod=W})(o),Object.defineProperty(s,"__esModule",{value:!0})
var k=o
function S(e){return void 0===e&&(e=(0,k.globalThisOrWindow)()),{shouldReloadOnConfigure:!1,load:function(t){function n(){return t.config.eventsEnabled}n()&&(0,k.instrumentConsole)(e,(function(e,r){if(n()&&0!==r.length){var i={severity:e}
"string"==typeof r[0]?(i.message=r[0],i.args=r.slice(1)):i.args=r,t.event("log",i)}}))}}}s.default=S
var x={},E={}
Object.defineProperty(E,"__esModule",{value:!0}),E.GlobalStore=void 0
var C=o,T=function(){function e(e,t){this.contents=e,this.breadcrumbsLimit=t}return e.create=function(t,n){return new e(t,n)},e.prototype.available=function(){return!0},e.prototype.getContents=function(e){var t=e?this.contents[e]:this.contents
return JSON.parse(JSON.stringify(t))},e.prototype.setContext=function(e){this.contents.context=(0,C.merge)(this.contents.context,e||{})},e.prototype.addBreadcrumb=function(e){this.contents.breadcrumbs.length==this.breadcrumbsLimit&&this.contents.breadcrumbs.shift(),this.contents.breadcrumbs.push(e)},e.prototype.clear=function(){this.contents.context={},this.contents.breadcrumbs=[]},e.prototype.run=function(e){return e()},e}()
E.GlobalStore=T
var P={}
class ${static parse(e){return e.trim().split("\n").map((e=>JSON.parse(e)))}static stringify(e){return e.map((e=>JSON.stringify(e))).join("\n")}}var L=Object.freeze({__proto__:null,NdJson:$}),I=n(L),M={}
Object.defineProperty(M,"__esModule",{value:!0}),M.CONFIG=void 0,M.CONFIG={apiKey:null,endpoint:"https://api.honeybadger.io",environment:null,hostname:null,projectRoot:null,component:null,action:null,revision:null,reportData:null,breadcrumbsEnabled:!0,eventsEnabled:!1,maxBreadcrumbs:40,maxObjectDepth:8,logger:console,developmentEnvironments:["dev","development","test"],debug:!1,tags:null,enableUncaught:!0,enableUnhandledRejection:!0,afterUncaught:function(){return!0},filters:["creditcard","password"],__plugins:[]}
var R=e&&e.__assign||function(){return R=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},R.apply(this,arguments)},O=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):i(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())}))},A=e&&e.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
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
var F=I,j=o,N=M,D=function(){function e(e,t){this.config=e,this.transport=t,this.queue=[],this.isProcessing=!1,this.config=R(R({},N.CONFIG),e),this.logger=this.originalLogger()}return e.prototype.configure=function(e){for(var t in e)this.config[t]=e[t]},e.prototype.log=function(e){this.queue.push(e),this.isProcessing||this.processQueue()},e.prototype.flushAsync=function(){return this.logger.debug("[Honeybadger] Flushing events"),this.send()},e.prototype.processQueue=function(){var e=this
0===this.queue.length||this.isProcessing||(this.isProcessing=!0,this.send().then((function(){setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)})).catch((function(t){e.logger.error("[Honeybadger] Error making HTTP request:",t),setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)})))},e.prototype.send=function(){return O(this,void 0,void 0,(function(){var e,t
return A(this,(function(n){return 0===this.queue.length?[2]:(e=this.queue.slice(),this.queue=[],t=F.NdJson.stringify(e),[2,this.makeHttpRequest(t)])}))}))},e.prototype.makeHttpRequest=function(e){return O(this,void 0,void 0,(function(){var t=this
return A(this,(function(n){return[2,this.transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json"},method:"POST",endpoint:(0,j.endpoint)(this.config.endpoint,"/v1/events"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},e).then((function(){t.config.debug&&t.logger.debug("[Honeybadger] Events sent successfully")})).catch((function(e){t.logger.error("[Honeybadger] Error sending events: ".concat(e.message))}))]}))}))},e.prototype.originalLogger=function(){var e,t,n,r,i
return{log:null!==(e=console.log.__hb_original)&&void 0!==e?e:console.log,info:null!==(t=console.info.__hb_original)&&void 0!==t?t:console.info,debug:null!==(n=console.debug.__hb_original)&&void 0!==n?n:console.debug,warn:null!==(r=console.warn.__hb_original)&&void 0!==r?r:console.warn,error:null!==(i=console.error.__hb_original)&&void 0!==i?i:console.error}},e}()
P.ThrottledEventsLogger=D
var B=e&&e.__assign||function(){return B=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},B.apply(this,arguments)},q=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):i(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())}))},H=e&&e.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
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
return this.__eventsLogger.configure(this.config),this.loadPlugins(),this},e.prototype.loadPlugins=function(){var e=this;(this.__pluginsLoaded?this.config.__plugins.filter((function(e){return e.shouldReloadOnConfigure})):this.config.__plugins).forEach((function(t){return t.load(e)})),this.__pluginsLoaded=!0},e.prototype.__initStore=function(){this.__store=new G.GlobalStore({context:{},breadcrumbs:[]},this.config.maxBreadcrumbs)},e.prototype.beforeNotify=function(e){return this.__beforeNotifyHandlers.push(e),this},e.prototype.afterNotify=function(e){return this.__afterNotifyHandlers.push(e),this},e.prototype.setContext=function(e){return"object"==typeof e&&null!=e&&this.__store.setContext(e),this},e.prototype.resetContext=function(e){return this.logger.warn("Deprecation warning: `Honeybadger.resetContext()` has been deprecated; please use `Honeybadger.clear()` instead."),this.__store.clear(),"object"==typeof e&&null!==e&&this.__store.setContext(e),this},e.prototype.clear=function(){return this.__store.clear(),this},e.prototype.notify=function(e,t,n){var r=this
void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var i=this.makeNotice(e,t,n),s=i&&i.backtrace?i.backtrace.map((function(e){return(0,U.shallowClone)(e)})):null,o=this.__runPreconditions(i)
return o instanceof Error?((0,U.runAfterNotifyHandlers)(i,this.__afterNotifyHandlers,o),!1):o instanceof Promise?(o.then((function(e){return e instanceof Error?((0,U.runAfterNotifyHandlers)(i,r.__afterNotifyHandlers,e),!1):r.__send(i,s)})),!0):(this.__send(i,s).catch((function(e){})),!0)},e.prototype.notifyAsync=function(e,t,n){var r=this
return void 0===t&&(t=void 0),void 0===n&&(n=void 0),new Promise((function(i,s){var o,a
o=e.afterNotify?e:t&&t.afterNotify?t:n&&n.afterNotify?n:t&&"object"==typeof t?t:n||(t={}),a=o.afterNotify,o.afterNotify=function(e){if(null==a||a.call(r,e),e)return s(e)
i()},r.notify(e,t,n)}))},e.prototype.makeNotice=function(e,t,n){void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var r=(0,U.makeNotice)(e)
if(t&&"object"!=typeof t&&(t={name:String(t)}),t&&(r=(0,U.mergeNotice)(r,t)),"object"==typeof n&&null!==n&&(r=(0,U.mergeNotice)(r,n)),(0,U.objectIsEmpty)(r))return null
var i=this.__store.getContents("context"),s=this.__constructTags(r.tags),o=this.__constructTags(i.tags),a=this.__constructTags(this.config.tags),l=s.concat(o).concat(a),c=l.filter((function(e,t){return l.indexOf(e)===t}))
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
n&&n.split(/\s+/).forEach((function(e){t+=".".concat(e)})),["alt","name","title","type"].forEach((function(n){var r=e.getAttribute(n)
r&&(t+="[".concat(n,'="').concat(r,'"]'))}))
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
return e.split(/[;,]\s?/).forEach((function(e){var n=e.split("=",2),r=n[0],i=n[1]
t[r]=i})),t}function ae(e){if("object"==typeof e){var t=[]
for(var n in e)t.push(n+"="+e[n])
return t.join(";")}}function le(e){try{var t=e.parentNode.childNodes,n=[]
return Array.prototype.forEach.call(t,(function(t){t.tagName&&t.tagName===e.tagName&&n.push(t)})),n}catch(e){return[]}}function ce(e,t){return e.length>t&&(e=e.substr(0,t)+"..."),e}Y.stringNameOfElement=Z,Y.stringSelectorOfElement=ee,Y.stringTextOfElement=te,Y.nativeFetch=ne,Y.parseURL=ie,Y.localURLPathname=se,Y.decodeCookie=oe,Y.encodeCookie=ae,Y.preferCatch=function(){var e=!0
if("undefined"==typeof window)return e
if(window.atob||(e=!1),window.ErrorEvent)try{0===new window.ErrorEvent("").colno&&(e=!1)}catch(e){}return e}()
var ue={}
Object.defineProperty(ue,"__esModule",{value:!0}),ue.onError=ue.ignoreNextOnError=void 0
var de,fe=i,he=fe.Util.instrument,pe=fe.Util.makeNotice,ge=fe.Util.globalThisOrWindow,_e=0
function ve(){_e+=1,clearTimeout(de),de=setTimeout((function(){_e=0}))}function me(e){return void 0===e&&(e=ge()),{load:function(t){he(e,"onerror",(function(n){var r=function(e,n,r,i,s){if(t.logger.debug("window.onerror callback invoked",arguments),_e>0)return t.logger.debug("Ignoring window.onerror (error likely reported earlier)",arguments),void(_e-=1)
if(0===r&&/Script error\.?/.test(e))t.config.enableUncaught&&t.logger.warn("Ignoring cross-domain script error: enable CORS to track these types of errors",arguments)
else{var o=pe(s)
o.name||(o.name="window.onerror"),o.message||(o.message=e),o.stack||(o.stack=[o.message,"\n    at ? (",n||"unknown",":",r||0,":",i||0,")"].join("")),t.addBreadcrumb("window.onerror"!==o.name&&o.name?"window.onerror: ".concat(o.name):"window.onerror",{category:"error",metadata:{name:o.name,message:o.message,stack:o.stack}}),t.config.enableUncaught&&t.notify(o)}}
return function(t,i,s,o,a){return r(t,i,s,o,a),"function"==typeof n&&n.apply(e,arguments)}}))}}}ue.ignoreNextOnError=ve,ue.onError=me
var be={}
Object.defineProperty(be,"__esModule",{value:!0})
var ye=i,we=ye.Util.instrument,ke=ye.Util.globalThisOrWindow
function Se(e){return void 0===e&&(e=ke()),{load:function(t){t.config.enableUnhandledRejection&&we(e,"onunhandledrejection",(function(e){function n(e){var n
if(t.logger.debug("window.onunhandledrejection callback invoked",arguments),t.config.enableUnhandledRejection){var r=e.reason
if(r instanceof Error){var i="unknown",s=0,o="".concat(r.message,"\n    at ? (").concat(i,":").concat(s,")"),a=r.stack||o,l={name:r.name,message:"UnhandledPromiseRejectionWarning: ".concat(r),stack:a}
return t.addBreadcrumb("window.onunhandledrejection: ".concat(l.name),{category:"error",metadata:l}),void t.notify(l)}var c="string"==typeof r?r:null!==(n=JSON.stringify(r))&&void 0!==n?n:"Unspecified reason"
t.notify({name:"window.onunhandledrejection",message:"UnhandledPromiseRejectionWarning: ".concat(c)})}}return function(t){n(t),"function"==typeof e&&e.apply(this,arguments)}}))}}}be.default=Se
var xe={}
Object.defineProperty(xe,"__esModule",{value:!0})
var Ee=i,Ce=Y,Te=Ee.Util.sanitize,Pe=Ee.Util.instrument,$e=Ee.Util.instrumentConsole,Le=Ee.Util.globalThisOrWindow
function Ie(e){return void 0===e&&(e=Le()),{load:function(t){function n(e){return!0===t.config.breadcrumbsEnabled||(e?!0===t.config.breadcrumbsEnabled[e]:!1!==t.config.breadcrumbsEnabled)}!function(){function r(e){return Array.isArray(e)?e.map((function(e){try{return String(e)}catch(e){return"[unknown]"}})).join(" "):""}n("console")&&$e(e,(function(e,n){var i=r(n),s={category:"log",metadata:{level:e,arguments:Te(n,3)}}
t.addBreadcrumb(i,s)}))}(),n("dom")&&"function"==typeof e.addEventListener&&e.addEventListener("click",(function(e){var n,r,i
try{n=(0,Ce.stringNameOfElement)(e.target),r=(0,Ce.stringSelectorOfElement)(e.target),i=(0,Ce.stringTextOfElement)(e.target)}catch(e){n="UI Click",r="[unknown]",i="[unknown]"}0!==n.length&&t.addBreadcrumb(n,{category:"ui.click",metadata:{selector:r,text:i,event:e}})}),!!e.location),n("network")&&"undefined"!=typeof XMLHttpRequest&&(Pe(XMLHttpRequest.prototype,"open",(function(e){return function(){var t=this,n=arguments[1],r="string"==typeof n?n:String(n),i="string"==typeof arguments[0]?arguments[0].toUpperCase():arguments[0],s="".concat(i," ").concat((0,Ce.localURLPathname)(r))
this.__hb_xhr={type:"xhr",method:i,url:r,message:s},"function"==typeof e&&e.apply(t,arguments)}})),Pe(XMLHttpRequest.prototype,"send",(function(e){return function(){var n=this
function r(){if(4===n.readyState){var e=void 0
n.__hb_xhr&&(n.__hb_xhr.status_code=n.status,e=n.__hb_xhr.message,delete n.__hb_xhr.message),t.addBreadcrumb(e||"XMLHttpRequest",{category:"request",metadata:n.__hb_xhr})}}"onreadystatechange"in n&&"function"==typeof n.onreadystatechange?Pe(n,"onreadystatechange",(function(e){return function(){r(),"function"==typeof e&&e.apply(this,arguments)}})):n.onreadystatechange=r,"function"==typeof e&&e.apply(n,arguments)}}))),n("network")&&(0,Ce.nativeFetch)()&&Pe(e,"fetch",(function(n){return function(){var r,i=arguments[0],s="GET"
"string"==typeof i?r=i:"Request"in e&&i instanceof Request?(r=i.url,i.method&&(s=i.method)):r=String(i),arguments[1]&&arguments[1].method&&(s=arguments[1].method),"string"==typeof s&&(s=s.toUpperCase())
var o="".concat(s," ").concat("undefined"==typeof document?r:(0,Ce.localURLPathname)(r)),a={type:"fetch",method:s,url:r}
return n.apply(this,arguments).then((function(e){return a.status_code=e.status,t.addBreadcrumb(o,{category:"request",metadata:a}),e})).catch((function(e){throw t.addBreadcrumb("fetch error",{category:"error",metadata:a}),e}))}})),function(){if(n("navigation")&&null!=e.location){var r=e.location.href
"function"==typeof addEventListener&&addEventListener("popstate",(function(t){i(r,e.location.href)})),void 0!==e.history&&(Pe(e.history,"pushState",s),Pe(e.history,"replaceState",s))}function i(e,n){r=n,t.addBreadcrumb("Page changed",{category:"navigation",metadata:{from:e,to:n}})}function s(e){return function(){var t=arguments.length>2?arguments[2]:void 0
return t&&i(r,String(t)),e.apply(this,arguments)}}}()}}}xe.default=Ie
var Me={}
Object.defineProperty(Me,"__esModule",{value:!0})
var Re=i,Oe=Re.Util.instrument,Ae=Re.Util.globalThisOrWindow
function Fe(e){return void 0===e&&(e=Ae()),{load:function(t){!function(){function n(e){return function(n){return function(r,i){if("function"==typeof r){var s=Array.prototype.slice.call(arguments,2)
return r=t.__wrap(r,e),n((function(){r.apply(void 0,s)}),i)}return n(r,i)}}}Oe(e,"setTimeout",n({component:"setTimeout"})),Oe(e,"setInterval",n({component:"setInterval"}))}()}}}Me.default=Fe
var je={}
Object.defineProperty(je,"__esModule",{value:!0})
var Ne=i,De=Ne.Util.instrument,Be=Ne.Util.globalThisOrWindow
function qe(e){return void 0===e&&(e=Be()),{load:function(t){["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"].forEach((function(n){var r=e[n]&&e[n].prototype
r&&Object.prototype.hasOwnProperty.call(r,"addEventListener")&&(De(r,"addEventListener",(function(e){var r={component:"".concat(n,".prototype.addEventListener")}
return function(n,i,s,o){try{i&&null!=i.handleEvent&&(i.handleEvent=t.__wrap(i.handleEvent,r))}catch(e){t.logger.error(e)}return e.call(this,n,t.__wrap(i,r),s,o)}})),De(r,"removeEventListener",(function(e){return function(n,r,i,s){return e.call(this,n,r,i,s),e.call(this,n,t.__wrap(r),i,s)}})))}))}}}je.default=qe
var He={},Ue=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):i(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())}))},Ge=e&&e.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
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
function Qe(e){return Object.entries(e)}var Ke=function(){function e(e){void 0===e&&(e={}),this.headers={},this.headers=e}return e.prototype.defaultHeaders=function(){return this.headers},e.prototype.send=function(e,t){return Ue(this,void 0,void 0,(function(){var n,r,i,s,o
return Ge(this,(function(a){switch(a.label){case 0:return n=e.headers?Qe(e.headers):[],r=this.defaultHeaders(),n.forEach((function(e){var t=e[0],n=e[1]
null!=t&&null!=n&&(r[String(t)]=String(n))})),i={method:e.method,headers:r},"POST"===e.method&&t&&(i.body="string"==typeof t?t:JSON.stringify(ze(t,e.maxObjectDepth))),[4,Ve().fetch(e.endpoint,i)]
case 1:return[4,(s=a.sent()).text()]
case 2:return o=a.sent(),[2,Promise.resolve({statusCode:s.status,body:o})]}}))}))},e}()
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
return e},s.apply(this,arguments)},o=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):i(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())}))},a=e&&e.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
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
var c=i,u=Y,d=ue,f=l(be),h=l(xe),p=l(Me),g=l(je),_=He,v=Je,m=c.Util.merge,b=c.Util.filter,y=c.Util.objectIsExtensible,w=c.Util.globalThisOrWindow,k=function(){var e=w(),t=""
return null!=e.location&&(t=e.location.protocol+"//"+e.location.host),t},S=function(e){var t=e.split(".").slice(0,2).join(".")
return"https://js.honeybadger.io/v".concat(t,"/honeybadger-feedback-form.js")}
t.getUserFeedbackScriptUrl=S
var x=function(e){function n(t){void 0===t&&(t={})
var n=e.call(this,s({userFeedbackEndpoint:"https://api.honeybadger.io/v2/feedback",async:!0,maxErrors:null,projectRoot:k()},t),new _.BrowserTransport({"User-Agent":C()}))||this
return n.__errorsSent=0,n.__lastWrapErr=void 0,n.__lastNoticeId=void 0,n.__beforeNotifyHandlers=[function(e){return n.__exceedsMaxErrors()?(n.logger.debug("Dropping notice: max errors exceeded",e),!1):(e&&!e.url&&"undefined"!=typeof document&&(e.url=document.URL),n.__incrementErrorsCount(),!0)}],n.__afterNotifyHandlers=[function(e,t){t&&(n.__lastNoticeId=t.id)}],n}return r(n,e),n.prototype.configure=function(t){return void 0===t&&(t={}),e.prototype.configure.call(this,t)},n.prototype.resetMaxErrors=function(){return this.__errorsSent=0},n.prototype.factory=function(e){var t=new n(e)
return t.setNotifier(this.getNotifier()),t},n.prototype.checkIn=function(e){throw new Error("Honeybadger.checkIn() is not supported on the browser")},n.prototype.showUserFeedbackForm=function(e){return void 0===e&&(e={}),o(this,void 0,void 0,(function(){return a(this,(function(t){return new v.BrowserFeedbackForm(this.config,this.logger,this.getUserFeedbackSubmitUrl()).show(this.__lastNoticeId,e),[2]}))}))},n.prototype.getUserFeedbackSubmitUrl=function(){return(0,t.getUserFeedbackScriptUrl)(this.getVersion())},n.prototype.__buildPayload=function(t){var n,r={HTTP_USER_AGENT:void 0,HTTP_REFERER:void 0,HTTP_COOKIE:void 0}
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
throw r.__lastWrapErr=e,(0,d.ignoreNextOnError)(),r.addBreadcrumb(t.component?"".concat(t.component,": ").concat(e.name):e.name,{category:"error",metadata:{message:e.message,name:e.name,stack:e.stack}}),r.config.enableUncaught&&r.notify(e),e}}}return n.___hb.___hb=n.___hb,n.___hb}catch(e){return n}},n.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},n.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},n}(c.Client),E={name:"@honeybadger-io/js",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",version:"6.11.2"},C=function(){return"undefined"!=typeof navigator?"Honeybadger JS Browser Client ".concat(E.version,"; ").concat(navigator.userAgent):"Honeybadger JS Browser Client ".concat(E.version,"; n/a; n/a")},T=new x({__plugins:[(0,d.onError)(),(0,f.default)(),(0,p.default)(),(0,g.default)(),(0,h.default)(),c.Plugins.events()]})
T.setNotifier(E)
var P=i
Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return P.Types}}),t.default=T}(r)
var et=t(r)
return et}()),Ac.exports),jc=Rc(Fc)
const Nc=["attackplayer.min.js","Auction-House-Monitor.user.js","Cocaine.user.js","Compra-%2526-Venda-de-Recursos-%25E2%259C%2585.user.js","cross-origin frame","Daily-Quest-Auto-Hunter-All-Creatures-%252B-SE-Searcher-Movement.user.js","Discord-Message-Checks-for-Updates.user.js","dynamically imported module","Fallen-Sword-Auto-Invent.user.js","Fallen-Sword-Auto-Skill-Caster.user.js","Fallen-Sword-Champion-and-Super-Elite-Alert.user.js","Fallen-Sword-Message-Alert.user.js","Fallen-Sword-Super-Elite-%2526-Crate-Notifier.user.js","Fallen-Sword-Super-Elite-Notifier.user.js","Fallen-Sword-Win%252FLoss-Checker-with-Buffs-and-Buff-Levels.user.js","Fallen-Sword-Win%252FLoss-Checker.user.js","Fallensword-GvG-Target-Checker-with-Button-and-Buff-Check.user.js","Fetch-Auction-and-Send-to-Discord.user.js","FS-Fixer.user.js","fs.min.js","FSH1.user.js","Gold-alert.user.js","GVG-and-Relics-Notifications.user.js","GvG-Initiate-Enhanced.user.js","GvG-List-v2.user.js","GvG-Name-Only.user.js","GVG%252FRelics-Discord.user.js","GVG%252FRelics-Notifications.user.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","League-of-Legends.user.js","MetaMask","New-Userscript.user.js","openuserjs.org","Permission denied to access object","play method is not allowed","Quick-Kill.user.js","se-searcher-v2-draft.user.js","Superelite-searcher.user.js","Titan-3.0.user.js","Titan-Quick-Kill.user.js","UFSG-dodatki.user.js","UnhandledPromiseRejectionWarning: 404","world.min.js","(reading '$$')"],Dc=e=>kc(e)&&Nc.some((t=>e.includes(t)))
function Bc(e){if(Dc(e.message)||Dc(e.stack))return!1}function qc(){!function(){jc.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.152"})
const e=s()
e&&jc.setContext({user_id:e}),jc.afterNotify((e=>{if(e)return la(`Honeybadger notification failed: ${e}`)})),jc.beforeNotify(Bc)}()}function Hc(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class Uc extends Error{constructor([e,t,n,r],...i){super(function(e,t,n,r){const i=`${t.status} ${t.statusText} - `
if(t.statusText===r.toString())return i+Hc(e)
const s=`${i+n} ${r} - ${Hc(e)}`
return"parsererror"===n?`${s} - ${t.responseText}`:s}(e,t,n,r),...i),Error.captureStackTrace&&Error.captureStackTrace(this,Uc),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=r}}function Gc(e,t,n,r){e instanceof EventTarget&&e.addEventListener(t,n,r)}function Wc(e,t,n){return JSON.stringify(e,t,n)}function zc(e){yc("betaOptIn")&&la("sendException",e),jc.notify(e,"sendException")}var Vc={}
function Qc(e){return Array.isArray(e)}function Kc(e,t){return e||t}const Jc=[null]
function Yc(e,t){return Jc[e]&&Jc[e].priority<Jc[t].priority}function Xc(e,t){const n=Jc[e]
Jc[e]=Jc[t],Jc[t]=n}function Zc(e,t){return e?2*t:2*t+1}function eu(){if(1===Jc.length)return
const e=Jc[1].data,t=Jc.pop()
return Jc.length>1&&(Jc[1]=t,function(e){let t=e
for(;2*t<Jc.length;){const e=Zc(!Yc(2*t+1,2*t),t)
if(Yc(t,e))break
Xc(t,e),t=e}}(1)),e}function tu(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!Yc(t,e))break
Xc(t,e),t=e}}(Jc.push({data:e,priority:t})-1)}let nu=!0
const ru="fshMessage"
let iu=0
function su(){Jc.length-1==0?nu=!0:(nu=!1,window.postMessage(ru,window.location.origin))}function ou(){const e=eu()
Tc(e)?e():function(e){Pa(e)||zc(`pop() was not a function (${typeof e})`)}(e)}function au(e){const t=e.data
e.origin===window.location.origin&&t===ru&&function(){try{ou()}catch(e){jc.notify(e,"taskFailure")}finally{su()}}()}function lu(e,t,n,r){if(Tc(t)){iu||(Gc(window,"message",au),iu=!0)
const i=Kc(r,window),s=Kc(n,[])
tu(t.bind(i,...s),e),nu&&su()}}function cu(e,t){return new URLSearchParams(e).get(t)}function uu(e){try{return cu(decodeURIComponent(window.location.search),e)}catch(e){return la(e),""}}var du=!1,fu=Array.isArray,hu=Array.prototype.indexOf,pu=Array.from,gu=Object.defineProperty,_u=Object.getOwnPropertyDescriptor,vu=Object.getOwnPropertyDescriptors,mu=Object.prototype,bu=Array.prototype,yu=Object.getPrototypeOf,wu=Object.isExtensible
function ku(e){return"function"==typeof e}const Su=()=>{}
function xu(e){return e()}function Eu(e){for(var t=0;t<e.length;t++)e[t]()}function Cu(e,t){if(Array.isArray(e))return e
if(void 0===t||!(Symbol.iterator in e))return Array.from(e)
const n=[]
for(const r of e)if(n.push(r),n.length===t)break
return n}const Tu=2,Pu=4,$u=8,Lu=16,Iu=32,Mu=64,Ru=128,Ou=256,Au=512,Fu=1024,ju=2048,Nu=4096,Du=8192,Bu=16384,qu=32768,Hu=65536,Uu=1<<17,Gu=1<<18,Wu=1<<19,zu=1<<20,Vu=1<<21,Qu=1<<22,Ku=1<<23,Ju=Symbol("$state"),Yu=Symbol("legacy props"),Xu=Symbol(""),Zu=new class extends Error{name="StaleReactionError"
message="The reaction that called `getAbortSignal()` was re-run or destroyed"}
function ed(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const td=1,nd=2,rd=4,id=8,sd=16,od=1,ad=2,ld=4,cd=8,ud=16,dd=4,fd=Symbol(),hd="http://www.w3.org/1999/xhtml"
let pd=!1
function gd(e){return e===this.v}function _d(e,t){return e!=e?t==t:e!==t||null!==e&&"object"==typeof e||"function"==typeof e}function vd(e){return!_d(e,this.v)}let md=!1,bd=!1
function yd(){md=!0}const wd=[]
function kd(e,t=!1){return Sd(e,new Map,"",wd)}function Sd(e,t,n,r,i=null){if("object"==typeof e&&null!==e){var s=t.get(e)
if(void 0!==s)return s
if(e instanceof Map)return new Map(e)
if(e instanceof Set)return new Set(e)
if(fu(e)){var o=Array(e.length)
t.set(e,o),null!==i&&t.set(i,o)
for(var a=0;a<e.length;a+=1){var l=e[a]
a in e&&(o[a]=Sd(l,t,n,r))}return o}if(yu(e)===mu){for(var c in o={},t.set(e,o),null!==i&&t.set(i,o),e)o[c]=Sd(e[c],t,n,r)
return o}if(e instanceof Date)return structuredClone(e)
if("function"==typeof e.toJSON)return Sd(e.toJSON(),t,n,r,e)}if(e instanceof EventTarget)return e
try{return structuredClone(e)}catch(t){return e}}let xd=null
function Ed(e){xd=e}function Cd(e,t=!1,n){xd={p:xd,c:null,e:null,s:e,x:null,l:md&&!t?{s:null,u:null,$:[]}:null}}function Td(e){var t=xd,n=t.e
if(null!==n)for(var r of(t.e=null,n))Df(r)
return void 0!==e&&(t.x=e),xd=t.p,e??{}}function Pd(){return!md||null!==xd&&null===xd.l}const $d=new WeakMap
function Ld(e,t){for(;null!==t;){if(0!=(t.f&Ru))try{return void t.b.error(e)}catch(t){e=t}t=t.parent}throw e instanceof Error&&Id(e),e}function Id(e){const t=$d.get(e)
t&&(gu(e,"message",{value:t.message}),gu(e,"stack",{value:t.stack}))}let Md=[],Rd=[]
function Od(){var e=Md
Md=[],Eu(e)}function Ad(e){0===Md.length&&queueMicrotask(Od),Md.push(e)}function Fd(){Md.length>0&&Od(),Rd.length>0&&function(){var e=Rd
Rd=[],Eu(e)}()}function jd(){for(var e=ch.b;null!==e&&!e.has_pending_snippet();)e=e.parent
return null===e&&function(){throw new Error("https://svelte.dev/e/await_outside_boundary")}(),e}function Nd(e){var t=Tu|ju,n=null!==oh&&0!=(oh.f&Tu)?oh:null
null===ch||null!==n&&0!=(n.f&Ou)?t|=Ou:ch.f|=Wu
return{ctx:xd,deps:null,effects:null,equals:gd,f:t,fn:e,reactions:null,rv:0,v:fd,wv:0,parent:n??ch,ac:null}}function Dd(e,t){let n=ch
null===n&&function(){throw new Error("https://svelte.dev/e/async_derived_orphan")}()
var r=n.b,i=void 0,s=ff(fd),o=null,a=!oh
return function(e){Ff(Qu|Wu,e,!0)}((()=>{try{var t=e()}catch(e){t=Promise.reject(e)}var n=()=>t
i=o?.then(n,n)??Promise.resolve(t),o=i
var l=Qd,c=r.pending
a&&(r.update_pending_count(1),c||l.increment())
const u=(e,t=void 0)=>{o=null,c||l.activate(),t?t!==Zu&&(s.f|=Ku,_f(s,t)):(0!=(s.f&Ku)&&(s.f^=Ku),_f(s,e)),a&&(r.update_pending_count(-1),c||l.decrement()),zd()}
if(i.then(u,(e=>u(null,e||"unknown"))),l)return()=>{queueMicrotask((()=>l.neuter()))}})),new Promise((e=>{!function t(n){function r(){n===i?e(s):t(i)}n.then(r,r)}(i)}))}function Bd(e){const t=Nd(e)
return fh(t),t}function qd(e){const t=Nd(e)
return t.equals=vd,t}function Hd(e){var t=e.effects
if(null!==t){e.effects=null
for(var n=0;n<t.length;n+=1)Qf(t[n])}}function Ud(e){var t,n=ch
uh(function(e){for(var t=e.parent;null!==t;){if(0==(t.f&Tu))return t
t=t.parent}return null}(e))
try{Hd(e),t=xh(e)}finally{uh(n)}return t}function Gd(e){var t=Ud(e);(e.equals(t)||(e.v=t,e.wv=wh()),ih)||(null!==Jd?Jd.set(e,e.v):Rh(e,!yh&&0==(e.f&Ou)||null===e.deps?Fu:Nu))}function Wd(e,t,n){const r=Pd()?Nd:qd
if(0!==t.length){var i,s,o,a=Qd,l=ch,c=(i=ch,s=oh,o=xd,function(){uh(i),lh(s),Ed(o)}),u=jd()
Promise.all(t.map((e=>Dd(e)))).then((t=>{a?.activate(),c()
try{n([...e.map(r),...t])}catch(e){0==(l.f&Bu)&&Ld(e,l)}a?.deactivate(),zd()})).catch((e=>{u.error(e)}))}else n(e.map(r))}function zd(){uh(null),lh(null),Ed(null)}const Vd=new Set
let Qd=null,Kd=null,Jd=null,Yd=new Set,Xd=[]
function Zd(){const e=Xd.shift()
Xd.length>0&&queueMicrotask(Zd),e()}let ef=[],tf=null,nf=!1,rf=!1
class sf{current=new Map
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
process(e){ef=[],Kd=null
var t=null
if(Vd.size>1){t=new Map,Jd=new Map
for(const[e,n]of this.current)t.set(e,{v:e.v,wv:e.wv}),e.v=n
for(const e of Vd)if(e!==this)for(const[n,r]of e.#e)t.has(n)||(t.set(n,{v:n.v,wv:n.wv}),n.v=r)}for(const t of e)this.#f(t)
if(0===this.#s.length&&0===this.#n){this.#h()
var n=this.#a,r=this.#l
this.#a=[],this.#l=[],this.#c=[],Kd=Qd,Qd=null,cf(n),cf(r),null===Qd?Qd=this:Vd.delete(this),this.#r?.resolve()}else this.#p(this.#a),this.#p(this.#l),this.#p(this.#c)
if(t){for(const[e,{v:n,wv:r}]of t)e.wv<=r&&(e.v=n)
Jd=null}for(const e of this.#s)Th(e)
for(const e of this.#o)Th(e)
this.#s=[],this.#o=[]}#f(e){e.f^=Fu
for(var t=e.first;null!==t;){var n=t.f,r=0!=(n&(Iu|Mu))
if(!(r&&0!=(n&Fu)||0!=(n&Du)||this.skipped_effects.has(t))&&null!==t.fn){if(r)t.f^=Fu
else if(0==(n&Fu))if(0!=(n&Pu))this.#l.push(t)
else if(0!=(n&Qu)){(t.b?.pending?this.#o:this.#s).push(t)}else kh(t)&&(0!=(t.f&Lu)&&this.#c.push(t),Th(t))
var i=t.first
if(null!==i){t=i
continue}}var s=t.parent
for(t=t.next;null===t&&null!==s;)t=s.next,s=s.parent}}#p(e){for(const t of e){(0!=(t.f&ju)?this.#u:this.#d).push(t),Rh(t,Fu)}e.length=0}capture(e,t){this.#e.has(e)||this.#e.set(e,t),this.current.set(e,e.v)}activate(){Qd=this}deactivate(){Qd=null,Kd=null
for(const e of Yd)if(Yd.delete(e),e(),null!==Qd)break}neuter(){this.#i=!0}flush(){ef.length>0?af():this.#h(),Qd===this&&(0===this.#n&&Vd.delete(this),this.deactivate())}#h(){if(!this.#i)for(const e of this.#t)e()
this.#t.clear()}increment(){this.#n+=1}decrement(){if(this.#n-=1,0===this.#n){for(const e of this.#u)Rh(e,ju),uf(e)
for(const e of this.#d)Rh(e,Nu),uf(e)
this.#a=[],this.#l=[],this.flush()}else this.deactivate()}add_callback(e){this.#t.add(e)}settled(){return(this.#r??={promise:new Promise(((n,r)=>{e=n,t=r})),resolve:e,reject:t}).promise
var e,t}static ensure(){if(null===Qd){const e=Qd=new sf
Vd.add(Qd),rf||sf.enqueue((()=>{Qd===e&&e.flush()}))}return Qd}static enqueue(e){0===Xd.length&&queueMicrotask(Zd),Xd.unshift(e)}}function of(e){var t=rf
rf=!0
try{for(;;){if(Fd(),0===ef.length&&(Qd?.flush(),0===ef.length))return void(tf=null)
af()}}finally{rf=t}}function af(){var e=nh
nf=!0
try{var t=0
for(rh(!0);ef.length>0;){var n=sf.ensure()
if(t++>1e3)lf()
n.process(ef),df.clear()}}finally{nf=!1,rh(e),tf=null}}function lf(){try{!function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}()}catch(e){Ld(e,tf)}}function cf(e){var t=e.length
if(0!==t){for(var n=0;n<t;){var r=e[n++]
if(0==(r.f&(Bu|Du))&&kh(r)){var i=Qd?Qd.current.size:0
if(Th(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown&&null===r.ac?Jf(r):r.fn=null),null!==Qd&&Qd.current.size>i&&0!=(r.f&zu))break}}for(;n<t;)uf(e[n++])}}function uf(e){for(var t=tf=e;null!==t.parent;){var n=(t=t.parent).f
if(nf&&t===ch&&0!=(n&Lu))return
if(0!=(n&(Mu|Iu))){if(0==(n&Fu))return
t.f^=Fu}}ef.push(t)}const df=new Map
function ff(e,t){return{f:0,v:e,reactions:null,equals:gd,rv:0,wv:0}}function hf(e,t){const n=ff(e)
return fh(n),n}function pf(e,t=!1,n=!0){const r=ff(e)
return t||(r.equals=vd),md&&n&&null!==xd&&null!==xd.l&&(xd.l.s??=[]).push(r),r}function gf(e,t,n=!1){return null===oh||ah&&0==(oh.f&Uu)||!Pd()||0==(oh.f&(Tu|Lu|Qu|Uu))||dh?.includes(e)||function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),_f(e,n?bf(t):t)}function _f(e,t){if(!e.equals(t)){var n=e.v
ih?df.set(e,t):df.set(e,n),e.v=t,sf.ensure().capture(e,n),0!=(e.f&Tu)&&(0!=(e.f&ju)&&Ud(e),Rh(e,0==(e.f&Ou)?Fu:Nu)),e.wv=wh(),mf(e,ju),Pd()&&null!==ch&&0!=(ch.f&Fu)&&0==(ch.f&(Iu|Mu))&&(null===gh?function(e){gh=e}([e]):gh.push(e))}return t}function vf(e){gf(e,e.v+1)}function mf(e,t){var n=e.reactions
if(null!==n)for(var r=Pd(),i=n.length,s=0;s<i;s++){var o=n[s],a=o.f
if(r||o!==ch){var l=0==(a&ju)
l&&Rh(o,t),0!=(a&Tu)?mf(o,Nu):l&&uf(o)}}}function bf(e){if("object"!=typeof e||null===e||Ju in e)return e
const t=yu(e)
if(t!==mu&&t!==bu)return e
var n=new Map,r=fu(e),i=hf(0),s=mh,o=e=>{if(mh===s)return e()
var t=oh,n=mh
lh(null),bh(s)
var r=e()
return lh(t),bh(n),r}
return r&&n.set("length",hf(e.length)),new Proxy(e,{defineProperty(e,t,r){"value"in r&&!1!==r.configurable&&!1!==r.enumerable&&!1!==r.writable||function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}()
var i=n.get(t)
return void 0===i?i=o((()=>{var e=hf(r.value)
return n.set(t,e),e})):gf(i,r.value,!0),!0},deleteProperty(e,t){var r=n.get(t)
if(void 0===r){if(t in e){const e=o((()=>hf(fd)))
n.set(t,e),vf(i)}}else gf(r,fd),vf(i)
return!0},get(t,r,i){if(r===Ju)return e
var s=n.get(r),a=r in t
if(void 0!==s||a&&!_u(t,r)?.writable||(s=o((()=>hf(bf(a?t[r]:fd)))),n.set(r,s)),void 0!==s){var l=$h(s)
return l===fd?void 0:l}return Reflect.get(t,r,i)},getOwnPropertyDescriptor(e,t){var r=Reflect.getOwnPropertyDescriptor(e,t)
if(r&&"value"in r){var i=n.get(t)
i&&(r.value=$h(i))}else if(void 0===r){var s=n.get(t),o=s?.v
if(void 0!==s&&o!==fd)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return r},has(e,t){if(t===Ju)return!0
var r=n.get(t),i=void 0!==r&&r.v!==fd||Reflect.has(e,t)
if((void 0!==r||null!==ch&&(!i||_u(e,t)?.writable))&&(void 0===r&&(r=o((()=>hf(i?bf(e[t]):fd))),n.set(t,r)),$h(r)===fd))return!1
return i},set(e,t,s,a){var l=n.get(t),c=t in e
if(r&&"length"===t)for(var u=s;u<l.v;u+=1){var d=n.get(u+"")
void 0!==d?gf(d,fd):u in e&&(d=o((()=>hf(fd))),n.set(u+"",d))}void 0===l?c&&!_u(e,t)?.writable||(gf(l=o((()=>hf(void 0))),bf(s)),n.set(t,l)):(c=l.v!==fd,gf(l,o((()=>bf(s)))))
var f=Reflect.getOwnPropertyDescriptor(e,t)
if(f?.set&&f.set.call(a,s),!c){if(r&&"string"==typeof t){var h=n.get("length"),p=Number(t)
Number.isInteger(p)&&p>=h.v&&gf(h,p+1)}vf(i)}return!0},ownKeys(e){$h(i)
var t=Reflect.ownKeys(e).filter((e=>{var t=n.get(e)
return void 0===t||t.v!==fd}))
for(var[r,s]of n)s.v===fd||r in e||t.push(r)
return t},setPrototypeOf(){!function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}()}})}function yf(e){try{if(null!==e&&"object"==typeof e&&Ju in e)return e[Ju]}catch{}return e}function wf(e,t){return Object.is(yf(e),yf(t))}var kf,Sf,xf,Ef
function Cf(e=""){return document.createTextNode(e)}function Tf(e){return xf.call(e)}function Pf(e){return Ef.call(e)}function $f(e,t){return Tf(e)}function Lf(e,t){var n=Tf(e)
return n instanceof Comment&&""===n.data?Pf(n):n}function If(e,t=1,n=!1){let r=e
for(;t--;)r=Pf(r)
return r}let Mf=!1
function Rf(e){var t=oh,n=ch
lh(null),uh(null)
try{return e()}finally{lh(t),uh(n)}}function Of(e,t,n,r=n){e.addEventListener(t,(()=>Rf(n)))
const i=e.__on_r
e.__on_r=i?()=>{i(),r(!0)}:()=>r(!0),Mf||(Mf=!0,document.addEventListener("reset",(e=>{Promise.resolve().then((()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()}))}),{capture:!0}))}function Af(e){null===ch&&null===oh&&function(e){throw new Error("https://svelte.dev/e/effect_orphan")}(),null!==oh&&0!=(oh.f&Ou)&&null===ch&&function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}(),ih&&function(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}()}function Ff(e,t,n,r=!0){var i=ch
null!==i&&0!=(i.f&Du)&&(e|=Du)
var s={ctx:xd,deps:null,nodes_start:null,nodes_end:null,f:e|ju,first:null,fn:t,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,transitions:null,wv:0,ac:null}
if(n)try{Th(s),s.f|=qu}catch(e){throw Qf(s),e}else null!==t&&uf(s)
if(!(n&&null===s.deps&&null===s.first&&null===s.nodes_start&&null===s.teardown&&0==(s.f&Wu))&&r&&(null!==i&&function(e,t){var n=t.last
null===n?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}(s,i),null!==oh&&0!=(oh.f&Tu)&&0==(e&Mu))){var o=oh;(o.effects??=[]).push(s)}return s}function jf(e){const t=Ff($u,null,!1)
return Rh(t,Fu),t.teardown=e,t}function Nf(e){Af()
var t=ch.f
if(!(!oh&&0!=(t&Iu)&&0==(t&qu)))return Df(e)
var n=xd;(n.e??=[]).push(e)}function Df(e){return Ff(Pu|zu,e,!1)}function Bf(e){return Af(),Ff($u|zu,e,!0)}function qf(e){return Ff(Pu,e,!1)}function Hf(e,t=0){return Ff($u|t,e,!0)}function Uf(e,t=[],n=[]){Wd(t,n,(t=>{Ff($u,(()=>e(...t.map($h))),!0)}))}function Gf(e,t=0){return Ff(Lu|t,e,!0)}function Wf(e,t=!0){return Ff(Iu,e,!0,t)}function zf(e){var t=e.teardown
if(null!==t){const e=ih,n=oh
sh(!0),lh(null)
try{t.call(null)}finally{sh(e),lh(n)}}}function Vf(e,t=!1){var n=e.first
for(e.first=e.last=null;null!==n;){const e=n.ac
null!==e&&Rf((()=>{e.abort(Zu)}))
var r=n.next
0!=(n.f&Mu)?n.parent=null:Qf(n,t),n=r}}function Qf(e,t=!0){var n=!1
!t&&0==(e.f&Gu)||null===e.nodes_start||null===e.nodes_end||(Kf(e.nodes_start,e.nodes_end),n=!0),Vf(e,t&&!n),Ch(e,0),Rh(e,Bu)
var r=e.transitions
if(null!==r)for(const e of r)e.stop()
zf(e)
var i=e.parent
null!==i&&null!==i.first&&Jf(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Kf(e,t){for(;null!==e;){var n=e===t?null:Pf(e)
e.remove(),e=n}}function Jf(e){var t=e.parent,n=e.prev,r=e.next
null!==n&&(n.next=r),null!==r&&(r.prev=n),null!==t&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Yf(e,t){var n=[]
Zf(e,n,!0),Xf(n,(()=>{Qf(e),t&&t()}))}function Xf(e,t){var n=e.length
if(n>0){var r=()=>--n||t()
for(var i of e)i.out(r)}else t()}function Zf(e,t,n){if(0==(e.f&Du)){if(e.f^=Du,null!==e.transitions)for(const r of e.transitions)(r.is_global||n)&&t.push(r)
for(var r=e.first;null!==r;){var i=r.next
Zf(r,t,!!(0!=(r.f&Hu)||0!=(r.f&Iu))&&n),r=i}}}function eh(e){th(e,!0)}function th(e,t){if(0!=(e.f&Du)){e.f^=Du,0==(e.f&Fu)&&(Rh(e,ju),uf(e))
for(var n=e.first;null!==n;){var r=n.next
th(n,!!(0!=(n.f&Hu)||0!=(n.f&Iu))&&t),n=r}if(null!==e.transitions)for(const n of e.transitions)(n.is_global||t)&&n.in()}}let nh=!1
function rh(e){nh=e}let ih=!1
function sh(e){ih=e}let oh=null,ah=!1
function lh(e){oh=e}let ch=null
function uh(e){ch=e}let dh=null
function fh(e){null!==oh&&(null===dh?dh=[e]:dh.push(e))}let hh=null,ph=0,gh=null
let _h=1,vh=0,mh=vh
function bh(e){mh=e}let yh=!1
function wh(){return++_h}function kh(e){var t=e.f
if(0!=(t&ju))return!0
if(0!=(t&Nu)){var n=e.deps,r=0!=(t&Ou)
if(null!==n){var i,s,o=0!=(t&Au),a=r&&null!==ch&&!yh,l=n.length
if((o||a)&&(null===ch||0==(ch.f&Bu))){var c=e,u=c.parent
for(i=0;i<l;i++)s=n[i],!o&&s?.reactions?.includes(c)||(s.reactions??=[]).push(c)
o&&(c.f^=Au),a&&null!==u&&0==(u.f&Ou)&&(c.f^=Ou)}for(i=0;i<l;i++)if(kh(s=n[i])&&Gd(s),s.wv>e.wv)return!0}r&&(null===ch||yh)||Rh(e,Fu)}return!1}function Sh(e,t,n=!0){var r=e.reactions
if(null!==r&&!dh?.includes(e))for(var i=0;i<r.length;i++){var s=r[i]
0!=(s.f&Tu)?Sh(s,t,!1):t===s&&(n?Rh(s,ju):0!=(s.f&Fu)&&Rh(s,Nu),uf(s))}}function xh(e){var t=hh,n=ph,r=gh,i=oh,s=yh,o=dh,a=xd,l=ah,c=mh,u=e.f
hh=null,ph=0,gh=null,yh=0!=(u&Ou)&&(ah||!nh||null===oh),oh=0==(u&(Iu|Mu))?e:null,dh=null,Ed(e.ctx),ah=!1,mh=++vh,null!==e.ac&&(Rf((()=>{e.ac.abort(Zu)})),e.ac=null)
try{e.f|=Vu
var d=(0,e.fn)(),f=e.deps
if(null!==hh){var h
if(Ch(e,ph),null!==f&&ph>0)for(f.length=ph+hh.length,h=0;h<hh.length;h++)f[ph+h]=hh[h]
else e.deps=f=hh
if(!yh||0!=(u&Tu)&&null!==e.reactions)for(h=ph;h<f.length;h++)(f[h].reactions??=[]).push(e)}else null!==f&&ph<f.length&&(Ch(e,ph),f.length=ph)
if(Pd()&&null!==gh&&!ah&&null!==f&&0==(e.f&(Tu|Nu|ju)))for(h=0;h<gh.length;h++)Sh(gh[h],e)
return null!==i&&i!==e&&(vh++,null!==gh&&(null===r?r=gh:r.push(...gh))),0!=(e.f&Ku)&&(e.f^=Ku),d}catch(e){return function(e){var t=ch
if(null===t)return oh.f|=Ku,e
if(0==(t.f&qu)){if(0==(t.f&Ru))throw!t.parent&&e instanceof Error&&Id(e),e
t.b.error(e)}else Ld(e,t)}(e)}finally{e.f^=Vu,hh=t,ph=n,gh=r,oh=i,yh=s,dh=o,Ed(a),ah=l,mh=c}}function Eh(e,t){let n=t.reactions
if(null!==n){var r=hu.call(n,e)
if(-1!==r){var i=n.length-1
0===i?n=t.reactions=null:(n[r]=n[i],n.pop())}}null!==n||0==(t.f&Tu)||null!==hh&&hh.includes(t)||(Rh(t,Nu),0==(t.f&(Ou|Au))&&(t.f^=Au),Hd(t),Ch(t,0))}function Ch(e,t){var n=e.deps
if(null!==n)for(var r=t;r<n.length;r++)Eh(e,n[r])}function Th(e){var t=e.f
if(0==(t&Bu)){Rh(e,Fu)
var n=ch,r=nh
ch=e,nh=!0
try{0!=(t&Lu)?function(e){for(var t=e.first;null!==t;){var n=t.next
0==(t.f&Iu)&&Qf(t),t=n}}(e):Vf(e),zf(e)
var i=xh(e)
e.teardown="function"==typeof i?i:null,e.wv=_h,du&&bd&&0!=(e.f&ju)&&e.deps}finally{nh=r,ch=n}}}async function Ph(){await Promise.resolve(),of()}function $h(e){var t=0!=(e.f&Tu)
if(null===oh||ah){if(t&&null===e.deps&&null===e.effects){var n=e,r=n.parent
null!==r&&0==(r.f&Ou)&&(n.f^=Ou)}}else if(!(null!==ch&&0!=(ch.f&Bu))&&!dh?.includes(e)){var i=oh.deps
if(0!=(oh.f&Vu))e.rv<vh&&(e.rv=vh,null===hh&&null!==i&&i[ph]===e?ph++:null===hh?hh=[e]:yh&&hh.includes(e)||hh.push(e))
else{(oh.deps??=[]).push(e)
var s=e.reactions
null===s?e.reactions=[oh]:s.includes(oh)||s.push(oh)}}if(ih){if(df.has(e))return df.get(e)
if(t){var o=(n=e).v
return(0==(n.f&Fu)&&null!==n.reactions||Lh(n))&&(o=Ud(n)),df.set(n,o),o}}else if(t){if(n=e,Jd?.has(n))return Jd.get(n)
kh(n)&&Gd(n)}if(0!=(e.f&Ku))throw e.v
return e.v}function Lh(e){if(e.v===fd)return!0
if(null===e.deps)return!1
for(const t of e.deps){if(df.has(t))return!0
if(0!=(t.f&Tu)&&Lh(t))return!0}return!1}function Ih(e){var t=ah
try{return ah=!0,e()}finally{ah=t}}const Mh=-7169
function Rh(e,t){e.f=e.f&Mh|t}function Oh(e){if("object"==typeof e&&e&&!(e instanceof EventTarget))if(Ju in e)Ah(e)
else if(!Array.isArray(e))for(let t in e){const n=e[t]
"object"==typeof n&&n&&Ju in n&&Ah(n)}}function Ah(e,t=new Set){if(!("object"!=typeof e||null===e||e instanceof EventTarget||t.has(e))){t.add(e),e instanceof Date&&e.getTime()
for(let n in e)try{Ah(e[n],t)}catch(e){}const n=yu(e)
if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const t=vu(n)
for(let n in t){const r=t[n].get
if(r)try{r.call(e)}catch(e){}}}}}const Fh=["touchstart","touchmove"]
function jh(e){return Fh.includes(e)}const Nh=new Set,Dh=new Set
function Bh(e,t,n,r,i){var s={capture:r,passive:i},o=function(e,t,n,r={}){function i(e){if(r.capture||Uh.call(t,e),!e.cancelBubble)return Rf((()=>n?.call(this,e)))}return e.startsWith("pointer")||e.startsWith("touch")||"wheel"===e?Ad((()=>{t.addEventListener(e,i,r)})):t.addEventListener(e,i,r),i}(e,t,n,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&jf((()=>{t.removeEventListener(e,o,s)}))}function qh(e){for(var t=0;t<e.length;t++)Nh.add(e[t])
for(var n of Dh)n(e)}let Hh=null
function Uh(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],s=i[0]||e.target
Hh=e
var o=0,a=Hh===e&&e.__root
if(a){var l=i.indexOf(a)
if(-1!==l&&(t===document||t===window))return void(e.__root=t)
var c=i.indexOf(t)
if(-1===c)return
l<=c&&(o=l)}if((s=i[o]||e.target)!==t){gu(e,"currentTarget",{configurable:!0,get:()=>s||n})
var u=oh,d=ch
lh(null),uh(null)
try{for(var f,h=[];null!==s;){var p=s.assignedSlot||s.parentNode||s.host||null
try{var g=s["__"+r]
if(null!=g&&(!s.disabled||e.target===s))if(fu(g)){var[_,...v]=g
_.apply(s,[e,...v])}else g.call(s,e)}catch(e){f?h.push(e):f=e}if(e.cancelBubble||p===t||null===p)break
s=p}if(f){for(let e of h)queueMicrotask((()=>{throw e}))
throw f}}finally{e.__root=t,delete e.currentTarget,lh(u),uh(d)}}}function Gh(e){var t=document.createElement("template")
return t.innerHTML=e.replaceAll("<!>","\x3c!----\x3e"),t.content}function Wh(e,t){var n=ch
null===n.nodes_start&&(n.nodes_start=e,n.nodes_end=t)}function zh(e,t){var n,r=0!=(1&t),i=0!=(2&t),s=!e.startsWith("<!>")
return()=>{void 0===n&&(n=Gh(s?e:"<!>"+e),r||(n=Tf(n)))
var t=i||Sf?document.importNode(n,!0):n.cloneNode(!0)
r?Wh(Tf(t),t.lastChild):Wh(t,t)
return t}}function Vh(e=""){var t=Cf(e+"")
return Wh(t,t),t}function Qh(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Cf()
return e.append(t,n),Wh(t,n),e}function Kh(e,t){null!==e&&e.before(t)}let Jh=!0
function Yh(e,t){var n=null==t?"":"object"==typeof t?t+"":t
n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}function Xh(e,t){return function(e,{target:t,anchor:n,props:r={},events:i,context:s,intro:o=!0}){!function(){if(void 0===kf){kf=window,Sf=/Firefox/.test(navigator.userAgent)
var e=Element.prototype,t=Node.prototype,n=Text.prototype
xf=_u(t,"firstChild").get,Ef=_u(t,"nextSibling").get,wu(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),wu(n)&&(n.__t=void 0)}}()
var a=new Set,l=e=>{for(var n=0;n<e.length;n++){var r=e[n]
if(!a.has(r)){a.add(r)
var i=jh(r)
t.addEventListener(r,Uh,{passive:i})
var s=Zh.get(r)
void 0===s?(document.addEventListener(r,Uh,{passive:i}),Zh.set(r,1)):Zh.set(r,s+1)}}}
l(pu(Nh)),Dh.add(l)
var c=void 0,u=function(e){sf.ensure()
const t=Ff(Mu,e,!0)
return(e={})=>new Promise((n=>{e.outro?Yf(t,(()=>{Qf(t),n(void 0)})):(Qf(t),n(void 0))}))}((()=>{var u=n??t.appendChild(Cf())
return Wf((()=>{s&&(Cd({}),xd.c=s)
i&&(r.$$events=i),Jh=o,c=e(u,r)||{},Jh=!0,s&&Td()})),()=>{for(var e of a){t.removeEventListener(e,Uh)
var r=Zh.get(e)
0==--r?(document.removeEventListener(e,Uh),Zh.delete(e)):Zh.set(e,r)}Dh.delete(l),u!==n&&u.parentNode?.removeChild(u)}}))
return ep.set(c,u),c}(e,t)}const Zh=new Map
let ep=new WeakMap
function tp(e,t){const n=ep.get(e)
return n?(ep.delete(e),n(t)):Promise.resolve()}const np=0,rp=1,ip=2
function sp(e,t,n,r,i){var s,o,a,l=e,c=Pd(),u=xd,d=fd,f=c?ff(void 0):pf(void 0,!1,!1),h=c?ff(void 0):pf(void 0,!1,!1),p=!1
function g(e,t){p=!0,t&&(uh(_),lh(_),Ed(u))
try{e===np&&n&&(s?eh(s):s=Wf((()=>n(l)))),e===rp&&r&&(o?eh(o):o=Wf((()=>r(l,f)))),e===ip&&i&&(a?eh(a):a=Wf((()=>i(l,h)))),e!==np&&s&&Yf(s,(()=>s=null)),e!==rp&&o&&Yf(o,(()=>o=null)),e!==ip&&a&&Yf(a,(()=>a=null))}finally{t&&(Ed(null),lh(null),uh(null),of())}}var _=Gf((()=>{if(d!==(d=t())){if(n=d,"function"==typeof n?.then){var e=d
p=!1,e.then((t=>{e===d&&(_f(f,t),g(rp,!0))}),(t=>{if(e===d&&(_f(h,t),g(ip,!0),!i))throw h.v})),Ad((()=>{p||g(np,!0)}))}else _f(f,d),g(rp,!1)
var n
return()=>d=fd}}))}function op(e,t,n=!1){var r=e,i=null,s=null,o=fd,a=!1
const l=(e,t=!0)=>{a=!0,d(t,e)}
var c=null
function u(){null!==c&&(c.lastChild.remove(),r.before(c),c=null)
var e=o?i:s,t=o?s:i
e&&eh(e),t&&Yf(t,(()=>{o?s=null:i=null}))}const d=(e,t)=>{if(o!==(o=e)){var n=r
false,o?i??=t&&Wf((()=>t(n))):s??=t&&Wf((()=>t(n))),u()}}
Gf((()=>{a=!1,t(l),a||d(null,null)}),n?Hu:0)}function ap(e,t){Hf((()=>{var n=t()
for(var r in n){var i=n[r]
i?e.style.setProperty(r,i):e.style.removeProperty(r)}}))}function lp(e,t){return t}function cp(e,t,n,r,i,s=null){var o=e,a={flags:t,items:new Map,first:null}
0!=(t&rd)&&(o=e.appendChild(Cf()))
var l,c,u=null,d=!1,f=new Map,h=qd((()=>{var e=n()
return fu(e)?e:null==e?[]:pu(e)}))
function p(){!function(e,t,n,r,i,s,o,a,l){var c,u,d,f,h,p,g=0!=(o&id),_=0!=(o&(td|nd)),v=t.length,m=n.items,b=n.first,y=b,w=null,k=[],S=[]
if(g)for(p=0;p<v;p+=1)f=a(d=t[p],p),void 0!==(h=m.get(f))&&(h.a?.measure(),(u??=new Set).add(h))
for(p=0;p<v;p+=1)if(f=a(d=t[p],p),void 0!==(h=m.get(f))){if(_&&up(h,d,p,o),0!=(h.e.f&Du)&&(eh(h.e),g&&(h.a?.unfix(),(u??=new Set).delete(h))),h!==y){if(void 0!==c&&c.has(h)){if(k.length<S.length){var x,E=S[0]
w=E.prev
var C=k[0],T=k[k.length-1]
for(x=0;x<k.length;x+=1)fp(k[x],E,i)
for(x=0;x<S.length;x+=1)c.delete(S[x])
hp(n,C.prev,T.next),hp(n,w,C),hp(n,T,E),y=E,w=T,p-=1,k=[],S=[]}else c.delete(h),fp(h,y,i),hp(n,h.prev,h.next),hp(n,h,null===w?n.first:w.next),hp(n,w,h),w=h
continue}for(k=[],S=[];null!==y&&y.k!==f;)0==(y.e.f&Du)&&(c??=new Set).add(y),S.push(y),y=y.next
if(null===y)continue
h=y}k.push(h),w=h,y=h.next}else{var P=r.get(f)
if(void 0!==P){r.delete(f),m.set(f,P)
var $=w?w.next:y
hp(n,w,P),hp(n,P,$),fp(P,$,i),w=P}else{w=dp(y?y.e.nodes_start:i,n,w,null===w?n.first:w.next,d,f,p,s,o,l)}m.set(f,w),k=[],S=[],y=w.next}if(null!==y||void 0!==c){for(var L=void 0===c?[]:pu(c);null!==y;)0==(y.e.f&Du)&&L.push(y),y=y.next
var I=L.length
if(I>0){var M=0!=(o&rd)&&0===v?i:null
if(g){for(p=0;p<I;p+=1)L[p].a?.measure()
for(p=0;p<I;p+=1)L[p].a?.fix()}!function(e,t,n){for(var r=e.items,i=[],s=t.length,o=0;o<s;o++)Zf(t[o].e,i,!0)
var a=s>0&&0===i.length&&null!==n
if(a){var l=n.parentNode
l.textContent="",l.append(n),r.clear(),hp(e,t[0].prev,t[s-1].next)}Xf(i,(()=>{for(var n=0;n<s;n++){var i=t[n]
a||(r.delete(i.k),hp(e,i.prev,i.next)),Qf(i.e,!a)}}))}(n,L,M)}}g&&Ad((()=>{if(void 0!==u)for(h of u)h.a?.apply()}))
for(var R of(e.first=n.first&&n.first.e,e.last=w&&w.e,r.values()))Qf(R.e)
r.clear()}(c,l,a,f,o,i,t,r,n),null!==s&&(0===l.length?u?eh(u):u=Wf((()=>s(o))):null!==u&&Yf(u,(()=>{u=null})))}Gf((()=>{c??=ch
var e=(l=$h(h)).length
d&&0===e||(d=0===e,p(),$h(h))}))}function up(e,t,n,r){0!=(r&td)&&_f(e.v,t),0!=(r&nd)?_f(e.i,n):e.i=n}function dp(e,t,n,r,i,s,o,a,l,c,u){var d=0!=(l&td)?0==(l&sd)?pf(i,!1,!1):ff(i):i,f=0==(l&nd)?o:ff(o),h={i:f,v:d,k:s,a:null,e:null,prev:n,next:r}
try{if(null===e)document.createDocumentFragment().append(e=Cf())
return h.e=Wf((()=>a(e,d,f,c)),pd),h.e.prev=n&&n.e,h.e.next=r&&r.e,null===n?u||(t.first=h):(n.next=h,n.e.next=h.e),null!==r&&(r.prev=h,r.e.prev=h.e),h}finally{}}function fp(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,s=e.e.nodes_start;null!==s&&s!==r;){var o=Pf(s)
i.before(s),s=o}}function hp(e,t,n){null===t?e.first=n:(t.next=n,t.e.next=n&&n.e),null!==n&&(n.prev=t,n.e.prev=t&&t.e)}function pp(e,t,n=!1,r=!1,i=!1){var s=e,o=""
Uf((()=>{var e=ch
if(o!==(o=t()??"")&&(null!==e.nodes_start&&(Kf(e.nodes_start,e.nodes_end),e.nodes_start=e.nodes_end=null),""!==o)){var i=o+""
n?i=`<svg>${i}</svg>`:r&&(i=`<math>${i}</math>`)
var a=Gh(i)
if((n||r)&&(a=Tf(a)),Wh(Tf(a),a.lastChild),n||r)for(;Tf(a);)s.before(Tf(a))
else s.before(a)}}))}function gp(e,t,...n){var r,i=e,s=Su
Gf((()=>{s!==(s=t())&&(r&&(Qf(r),r=null),r=Wf((()=>s(i,...n))))}),Hu)}function _p(e,t,n){var r,i,s=e,o=null,a=null
function l(){i&&(Yf(i),i=null),o&&(o.lastChild.remove(),s.before(o),o=null),i=a,a=null}Gf((()=>{if(r!==(r=t())){if(r){var e=s
false,a=Wf((()=>n(e,r)))}l()}}),Hu)}function vp(e,t,n){qf((()=>{var r=Ih((()=>t(e,n?.())||{}))
if(r?.destroy)return()=>r.destroy()}))}function mp(e){var t,n,r=""
if("string"==typeof e||"number"==typeof e)r+=e
else if("object"==typeof e)if(Array.isArray(e)){var i=e.length
for(t=0;t<i;t++)e[t]&&(n=mp(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n)
return r}function bp(e){return"object"==typeof e?function(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=mp(e))&&(r&&(r+=" "),r+=t)
return r}(e):e??""}const yp=[..." \t\n\r\f \v\ufeff"]
function wp(e,t=!1){var n=t?" !important;":";",r=""
for(var i in e){var s=e[i]
null!=s&&""!==s&&(r+=" "+i+": "+s+n)}return r}function kp(e){return"-"!==e[0]||"-"!==e[1]?e.toLowerCase():e}function Sp(e,t,n,r,i,s){var o=e.__className
if(o!==n||void 0===o){var a=function(e,t,n){var r=null==e?"":""+e
if(t&&(r=r?r+" "+t:t),n)for(var i in n)if(n[i])r=r?r+" "+i:i
else if(r.length)for(var s=i.length,o=0;(o=r.indexOf(i,o))>=0;){var a=o+s
0!==o&&!yp.includes(r[o-1])||a!==r.length&&!yp.includes(r[a])?o=a:r=(0===o?"":r.substring(0,o))+r.substring(a+1)}return""===r?null:r}(n,r,s)
null==a?e.removeAttribute("class"):e.className=a,e.__className=n}else if(s&&i!==s)for(var l in s){var c=!!s[l]
null!=i&&c===!!i[l]||e.classList.toggle(l,c)}return s}function xp(e,t={},n,r){for(var i in n){var s=n[i]
t[i]!==s&&(null==n[i]?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function Ep(e,t,n,r){if(e.__style!==t){var i=function(e,t){if(t){var n,r,i=""
if(Array.isArray(t)?(n=t[0],r=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim()
var s=!1,o=0,a=!1,l=[]
n&&l.push(...Object.keys(n).map(kp)),r&&l.push(...Object.keys(r).map(kp))
var c=0,u=-1
const t=e.length
for(var d=0;d<t;d++){var f=e[d]
if(a?"/"===f&&"*"===e[d-1]&&(a=!1):s?s===f&&(s=!1):"/"===f&&"*"===e[d+1]?a=!0:'"'===f||"'"===f?s=f:"("===f?o++:")"===f&&o--,!a&&!1===s&&0===o)if(":"===f&&-1===u)u=d
else if(";"===f||d===t-1){if(-1!==u){var h=kp(e.substring(c,u).trim())
l.includes(h)||(";"!==f&&d++,i+=" "+e.substring(c,d).trim()+";")}c=d+1,u=-1}}}return n&&(i+=wp(n)),r&&(i+=wp(r,!0)),""===(i=i.trim())?null:i}return null==e?null:String(e)}(t,r)
null==i?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else r&&(Array.isArray(r)?(xp(e,n?.[0],r[0]),xp(e,n?.[1],r[1],"important")):xp(e,n,r))
return r}function Cp(e,t,n=!1){if(e.multiple){if(null==t)return
if(!fu(t))return void console.warn("https://svelte.dev/e/select_multiple_invalid_value")
for(var r of e.options)r.selected=t.includes(Pp(r))}else{for(r of e.options){if(wf(Pp(r),t))return void(r.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}}function Tp(e,t,n=t){var r=!0
Of(e,"change",(t=>{var r,i=t?"[selected]":":checked"
if(e.multiple)r=[].map.call(e.querySelectorAll(i),Pp)
else{var s=e.querySelector(i)??e.querySelector("option:not([disabled])")
r=s&&Pp(s)}n(r)})),qf((()=>{var i=t()
if(Cp(e,i,r),r&&void 0===i){var s=e.querySelector(":checked")
null!==s&&(i=Pp(s),n(i))}e.__value=i,r=!1})),function(e){var t=new MutationObserver((()=>{Cp(e,e.__value)}))
t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),jf((()=>{t.disconnect()}))}(e)}function Pp(e){return"__value"in e?e.__value:e.value}const $p=Symbol("is custom element"),Lp=Symbol("is html")
function Ip(e,t){var n=Rp(e)
n.value!==(n.value=t??void 0)&&(e.value!==t||0===t&&"PROGRESS"===e.nodeName)&&(e.value=t??"")}function Mp(e,t,n,r){var i=Rp(e)
i[t]!==(i[t]=n)&&("loading"===t&&(e[Xu]=n),null==n?e.removeAttribute(t):"string"!=typeof n&&function(e){var t,n=Op.get(e.nodeName)
if(n)return n
Op.set(e.nodeName,n=[])
var r=e,i=Element.prototype
for(;i!==r;){for(var s in t=vu(r))t[s].set&&n.push(s)
r=yu(r)}return n}(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Rp(e){return e.__attributes??={[$p]:e.nodeName.includes("-"),[Lp]:e.namespaceURI===hd}}var Op=new Map
const Ap={tick:e=>requestAnimationFrame(e),now:()=>performance.now(),tasks:new Set}
function Fp(){const e=Ap.now()
Ap.tasks.forEach((t=>{t.c(e)||(Ap.tasks.delete(t),t.f())})),0!==Ap.tasks.size&&Ap.tick(Fp)}function jp(e,t){Rf((()=>{e.dispatchEvent(new CustomEvent(t))}))}function Np(e){if("float"===e)return"cssFloat"
if("offset"===e)return"cssOffset"
if(e.startsWith("--"))return e
const t=e.split("-")
return 1===t.length?t[0]:t[0]+t.slice(1).map((e=>e[0].toUpperCase()+e.slice(1))).join("")}function Dp(e){const t={},n=e.split(";")
for(const e of n){const[n,r]=e.split(":")
if(!n||void 0===r)break
t[Np(n.trim())]=r.trim()}return t}const Bp=e=>e
function qp(e,t,n,r){var i,s,o,a=0!=(e&dd),l=t.inert,c=t.style.overflow
function u(){return Rf((()=>i??=n()(t,r?.()??{},{direction:"both"})))}var d={is_global:a,in(){t.inert=l,jp(t,"introstart"),s=Hp(t,u(),o,1,(()=>{jp(t,"introend"),s?.abort(),s=i=void 0,t.style.overflow=c}))},out(e){t.inert=!0,jp(t,"outrostart"),o=Hp(t,u(),s,0,(()=>{jp(t,"outroend"),e?.()}))},stop:()=>{s?.abort(),o?.abort()}},f=ch
if((f.transitions??=[]).push(d),Jh){var h=a
if(!h){for(var p=f.parent;p&&0!=(p.f&Hu);)for(;(p=p.parent)&&0==(p.f&Lu););h=!p||0!=(p.f&qu)}h&&qf((()=>{Ih((()=>d.in()))}))}}function Hp(e,t,n,r,i){var s=1===r
if(ku(t)){var o,a=!1
return Ad((()=>{if(!a){var l=t({direction:s?"in":"out"})
o=Hp(e,l,n,r,i)}})),{abort:()=>{a=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(n?.deactivate(),!t?.duration)return i(),{abort:Su,deactivate:Su,reset:Su,t:()=>r}
const{delay:l=0,css:c,tick:u,easing:d=Bp}=t
var f=[]
if(s&&void 0===n&&(u&&u(0,1),c)){var h=Dp(c(0,1))
f.push(h,h)}var p=()=>1-r,g=e.animate(f,{duration:l,fill:"forwards"})
return g.onfinish=()=>{g.cancel()
var s=n?.t()??1-r
n?.abort()
var o=r-s,a=t.duration*Math.abs(o),l=[]
if(a>0){var f=!1
if(c)for(var h=Math.ceil(a/(1e3/60)),_=0;_<=h;_+=1){var v=s+o*d(_/h),m=Dp(c(v,1-v))
l.push(m),f||="hidden"===m.overflow}f&&(e.style.overflow="hidden"),p=()=>{var e=g.currentTime
return s+o*d(e/a)},u&&function(e){let t
0===Ap.tasks.size&&Ap.tick(Fp),new Promise((n=>{Ap.tasks.add(t={c:e,f:n})}))}((()=>{if("running"!==g.playState)return!1
var e=p()
return u(e,1-e),!0}))}(g=e.animate(l,{duration:a,fill:"forwards"})).onfinish=()=>{p=()=>r,u?.(r,1-r),i()}},{abort:()=>{g&&(g.cancel(),g.effect=null,g.onfinish=Su)},deactivate:()=>{i=Su},reset:()=>{0===r&&u?.(1,0)},t:()=>p()}}function Up(e,t,n=t){var r=Pd(),i=new WeakSet
Of(e,"input",(s=>{var o=s?e.defaultValue:e.value
if(o=Vp(e)?Qp(o):o,n(o),null!==Qd&&i.add(Qd),r&&o!==(o=t())){var a=e.selectionStart,l=e.selectionEnd
e.value=o??"",null!==l&&(e.selectionStart=a,e.selectionEnd=Math.min(l,e.value.length))}})),null==Ih(t)&&e.value&&(n(Vp(e)?Qp(e.value):e.value),null!==Qd&&i.add(Qd)),Hf((()=>{var n=t()
if(e===document.activeElement){var r=Kd??Qd
if(i.has(r))return}Vp(e)&&n===Qp(e.value)||("date"!==e.type||n||e.value)&&n!==e.value&&(e.value=n??"")}))}const Gp=new Set
function Wp(e,t,n,r,i=r){var s="checkbox"===n.getAttribute("type"),o=e
if(null!==t)for(var a of t)o=o[a]??=[]
o.push(n),Of(n,"change",(()=>{var e=n.__value
s&&(e=function(e,t,n){for(var r=new Set,i=0;i<e.length;i+=1)e[i].checked&&r.add(e[i].__value)
n||r.delete(t)
return Array.from(r)}(o,e,n.checked)),i(e)}),(()=>i(s?[]:null))),Hf((()=>{var e=r()
s?(e=e||[],n.checked=e.includes(n.__value)):n.checked=wf(n.__value,e)})),jf((()=>{var e=o.indexOf(n);-1!==e&&o.splice(e,1)})),Gp.has(o)||(Gp.add(o),Ad((()=>{o.sort(((e,t)=>4===e.compareDocumentPosition(t)?-1:1)),Gp.delete(o)}))),Ad((()=>{}))}function zp(e,t,n=t){Of(e,"change",(t=>{var r=t?e.defaultChecked:e.checked
n(r)})),null==Ih(t)&&n(e.checked),Hf((()=>{var n=t()
e.checked=Boolean(n)}))}function Vp(e){var t=e.type
return"number"===t||"range"===t}function Qp(e){return""===e?null:+e}class Kp{#g=new WeakMap
#_
#v
static entries=new WeakMap
constructor(e){this.#v=e}observe(e,t){var n=this.#g.get(e)||new Set
return n.add(t),this.#g.set(e,n),this.#m().observe(e,this.#v),()=>{var n=this.#g.get(e)
n.delete(t),0===n.size&&(this.#g.delete(e),this.#_.unobserve(e))}}#m(){return this.#_??(this.#_=new ResizeObserver((e=>{for(var t of e)for(var n of(Kp.entries.set(t.target,t),this.#g.get(t.target)||[]))n(t)})))}}var Jp=new Kp({box:"border-box"})
function Yp(e,t){return e===t||e?.[Ju]===t}function Xp(e={},t,n,r){return qf((()=>{var r,i
return Hf((()=>{r=i,i=[],Ih((()=>{e!==n(...i)&&(t(e,...i),r&&Yp(n(...r),e)&&t(null,...r))}))})),()=>{Ad((()=>{i&&Yp(n(...i),e)&&t(null,...i)}))}})),e}function Zp(e,t,n){if(null==e)return t(void 0),n&&n(void 0),Su
const r=Ih((()=>e.subscribe(t,n)))
return r.unsubscribe?()=>r.unsubscribe():r}const eg=[]
function tg(e,t=Su){let n=null
const r=new Set
function i(t){if(_d(e,t)&&(e=t,n)){const t=!eg.length
for(const t of r)t[1](),eg.push(t,e)
if(t){for(let e=0;e<eg.length;e+=2)eg[e][0](eg[e+1])
eg.length=0}}}function s(t){i(t(e))}return{set:i,update:s,subscribe:function(o,a=Su){const l=[o,a]
return r.add(l),1===r.size&&(n=t(i,s)||Su),o(e),()=>{r.delete(l),0===r.size&&n&&(n(),n=null)}}}}function ng(e,t,n){const r=!Array.isArray(e),i=r?[e]:e
if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const s=t.length<2
return o=(e,n)=>{let o=!1
const a=[]
let l=0,c=Su
const u=()=>{if(l)return
c()
const i=t(r?a[0]:a,e,n)
s?e(i):c="function"==typeof i?i:Su},d=i.map(((e,t)=>Zp(e,(e=>{a[t]=e,l&=~(1<<t),o&&u()}),(()=>{l|=1<<t}))))
return o=!0,u(),function(){Eu(d),c(),o=!1}},{subscribe:tg(n,o).subscribe}
var o}function rg(e){let t
return Zp(e,(e=>t=e))(),t}let ig=!1,sg=Symbol()
function og(e,t,n){const r=n[t]??={store:null,source:pf(void 0),unsubscribe:Su}
if(r.store!==e&&!(sg in n))if(r.unsubscribe(),r.store=e??null,null==e)r.source.v=void 0,r.unsubscribe=Su
else{var i=!0
r.unsubscribe=Zp(e,(e=>{i?r.source.v=e:gf(r.source,e)})),i=!1}return e&&sg in n?rg(e):$h(r.source)}function ag(e,t){return e.set(t),t}function lg(){const e={}
return[e,function(){jf((()=>{for(var t in e){e[t].unsubscribe()}gu(e,sg,{enumerable:!1,value:!0})}))}]}const cg={get(e,t){let n=e.props.length
for(;n--;){let r=e.props[n]
if(ku(r)&&(r=r()),"object"==typeof r&&null!==r&&t in r)return r[t]}},set(e,t,n){let r=e.props.length
for(;r--;){let i=e.props[r]
ku(i)&&(i=i())
const s=_u(i,t)
if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length
for(;n--;){let r=e.props[n]
if(ku(r)&&(r=r()),"object"==typeof r&&null!==r&&t in r){const e=_u(r,t)
return e&&!e.configurable&&(e.configurable=!0),e}}},has(e,t){if(t===Ju||t===Yu)return!1
for(let n of e.props)if(ku(n)&&(n=n()),null!=n&&t in n)return!0
return!1},ownKeys(e){const t=[]
for(let n of e.props)if(ku(n)&&(n=n()),n){for(const e in n)t.includes(e)||t.push(e)
for(const e of Object.getOwnPropertySymbols(n))t.includes(e)||t.push(e)}return t}}
function ug(e,t,n,r){var i,s,o=!md||0!=(n&ad),a=0!=(n&cd),l=0!=(n&ud),c=r,u=!0,d=()=>(u&&(u=!1,c=l?Ih(r):r),c)
if(a){var f=Ju in e||Yu in e
i=_u(e,t)?.set??(f&&t in e?n=>e[t]=n:void 0)}var h,p=!1
if(a?[s,p]=function(e){var t=ig
try{return ig=!1,[e(),ig]}finally{ig=t}}((()=>e[t])):s=e[t],void 0===s&&void 0!==r&&(s=d(),i&&(o&&function(e){throw new Error("https://svelte.dev/e/props_invalid_value")}(),i(s))),h=o?()=>{var n=e[t]
return void 0===n?d():(u=!0,n)}:()=>{var n=e[t]
return void 0!==n&&(c=void 0),void 0===n?c:n},o&&0==(n&ld))return h
if(i){var g=e.$$legacy
return function(e,t){return arguments.length>0?(o&&t&&!g&&!p||i(t?h():e),e):h()}}var _=!1,v=(0!=(n&od)?Nd:qd)((()=>(_=!1,h())))
a&&$h(v)
var m=ch
return function(e,t){if(arguments.length>0){const n=t?$h(v):o&&a?bf(e):e
return gf(v,n),_=!0,void 0!==c&&(c=n),e}return ih&&_||0!=(m.f&Bu)?v.v:$h(v)}}function dg(e){null===xd&&ed(),md&&null!==xd.l?function(e){var t=e.l
return t.u??={a:[],b:[],m:[]}}(xd).m.push(e):Nf((()=>{const t=Ih(e)
if("function"==typeof t)return t}))}function fg(e){null===xd&&ed(),dg((()=>()=>Ih(e)))}const hg=tg("")
"undefined"!=typeof window&&((window.__svelte??={}).v??=new Set).add("5")
const pg=e=>e
function gg(e){const t=e-1
return t*t*t+1}function _g(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function vg(e,{delay:t=0,duration:n=400,easing:r=pg}={}){const i=+getComputedStyle(e).opacity
return{delay:t,duration:n,easing:r,css:e=>"opacity: "+e*i}}function mg(e,{delay:t=0,duration:n=400,easing:r=gg,x:i=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-o),[d,f]=_g(i),[h,p]=_g(s)
return{delay:t,duration:n,easing:r,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*d}${f}, ${(1-e)*h}${p});\n\t\t\topacity: ${l-u*t}`}}function bg(e,{delay:t=0,duration:n=400,easing:r=gg,axis:i="y"}={}){const s=getComputedStyle(e),o=+s.opacity,a="y"===i?"height":"width",l=parseFloat(s[a]),c="y"===i?["top","bottom"]:["left","right"],u=c.map((e=>`${e[0].toUpperCase()}${e.slice(1)}`)),d=parseFloat(s[`padding${u[0]}`]),f=parseFloat(s[`padding${u[1]}`]),h=parseFloat(s[`margin${u[0]}`]),p=parseFloat(s[`margin${u[1]}`]),g=parseFloat(s[`border${u[0]}Width`]),_=parseFloat(s[`border${u[1]}Width`])
return{delay:t,duration:n,easing:r,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*o};${a}: ${e*l}px;padding-${c[0]}: ${e*d}px;padding-${c[1]}: ${e*f}px;margin-${c[0]}: ${e*h}px;margin-${c[1]}: ${e*p}px;border-${c[0]}-width: ${e*g}px;border-${c[1]}-width: ${e*_}px;min-${a}: 0`}}var yg=(e,t)=>{gf(t,!1)},wg=zh('<div role="alert" class="svelte-1c416no"><p class="svelte-1c416no"> </p></div>')
function kg(e,t){Cd(t,!0)
const[n,r]=lg(),i=()=>og(hg,"$alert",n)
let s=ug(t,"ms",3,3e3),o=hf(!1),a=0,l=hf("")
const c=(e,t)=>{clearTimeout(a),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
gf(l,`translate(${t}px, ${e.offsetTop}px)`),gf(o,!0)}(),t>0&&(a=setTimeout((()=>{gf(o,!1),ag(hg,"")}),t))):gf(o,!1)}
Nf((()=>{c(i(),s())})),fg((()=>clearTimeout(a)))
var u=Qh(),d=Lf(u),f=e=>{var t=wg()
let n
t.__click=[yg,o]
var r=$f(t),s=$f(r)
Uf((e=>{n=Ep(t,"",n,e),Yh(s,i())}),[()=>({transform:$h(l)})]),qp(3,t,(()=>mg),(()=>({delay:250,duration:300,x:0,y:-100,opacity:.5}))),Kh(e,t)}
op(d,(e=>{$h(o)&&e(f)})),Kh(e,u),Td(),r()}qh(["click"])
let Sg=!1
function xg(e){e&&(Sg||(Sg=!0,Xh(kg,{target:document.body})),hg.set(e))}function Eg(e,t){return Array.from(e,t)}function Cg(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function Tg(e,t){return Eg(Cg(e,t))}function Pg(e){return e.trim()}function $g(e){const t=n(e)
if(kc(t))return Pg(t)}function Lg(e,t){return $g(t).includes(e)}function Ig(e,...t){return(...n)=>e(...t,...n)}let Mg=0,Rg=0,Og=0
function Ag(){return Mg||(Mg=t("pCL")),Mg}function Fg(){return Rg||(Rg=t("pCC")),Rg}function jg(){return Og||(Og=t("pCR")),Og}function Ng(){const e=Tg("a",Ag()).filter(function(e){return Ig(Lg,e)}("message"))
e.length&&async function(){const e=new Audio(yc("defaultMessageSound"))
try{await e.play()}catch(e){xg("Message Sound Not Allowed")}}()}function Dg(e,t,n,r){var i
Gc(e,t,n,{once:!0,...(i=r,wc(i)?{capture:i}:i)})}let Bg=0,qg=0,Hg=0,Ug=0,Gg=0,Wg=0
function zg(e){qg=e.clientX,Hg=e.clientY}function Vg(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(Bg,null).transform)
Ug=e[0]-qg,Gg=e[1]-Hg}function Qg(e){e.clientX===qg&&e.clientY===Hg||(Bg.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+Ug).toString()}, ${(e.clientY+Gg).toString()})`,zg(e))}function Kg(e){return function(e){const t=performance.now()
t-Wg>16&&(Qg(e),Wg=t)}(e),e.preventDefault(),!1}function Jg(e){return Qg(e),function(e,t,n,r){e instanceof EventTarget&&e.removeEventListener(t,n,r)}(document.body,"dragover",Kg),e.preventDefault(),!1}function Yg(e,t){!function(e,t){Bg=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),zg(t),Vg(),Wg=0,t.dataTransfer.setData("text/plain",""),Gc(document.body,"dragover",Kg),Dg(document.body,"drop",Jg)}function Xg(e,t){e.draggable=!0,Gc(e,"dragstart",Ig(Yg,t))}function Zg(e){return String(e).replaceAll(" ","_")}const e_={}
function t_(e,t,n){if(!e)return
const r=function(e,t){let n=Zg(e)
return t&&(n+=`__${Zg(t)}`),n}(e,t),i=function(e,t){let n=e
return t&&(n+=`__${Zg(t)}`),n}(r,n)
e_[i]||(e_[i]=!0,ca(r,function(e){return e?{eventLabel:e}:null}(n)))}let n_=0
function r_(e){const t=l(/\sguildId: (?<id>\d{1,6}),/,n(e))
t&&(n_=Number(t))}function i_(){return n_||Tg("script",document.body).forEach(r_),n_}function s_(e){return Object.entries(e)}function o_(e,t,[n,r]){Pc(r)&&null!==r?e(t[n],r):t[n]=r}function a_(e,t){s_(t).forEach(Ig(o_,a_,e))}function l_(e,t){const n=document.createElement(e)
return t&&a_(n,t),n}function c_(e){return l_("div",e)}function u_(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function d_(e,t){return Eg(u_(e,t))}function f_(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function h_(e,t){t instanceof Element&&(t.innerHTML=String(e))}const p_={id:"content",style:{display:"none"}},g_={width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}
function __(e){let n=t("content")
n?h_("",n):(n=c_(p_),f_(document.body,n)),$(n).dialog(g_),d_("ui-dialog-titlebar-close").forEach((e=>e.blur())),e(n)}async function v_(e){(await e).default()}function m_(){v_(import("./mountBuffLog.svelte-B5XDOjyt.js"))}function b_(){v_(import("./mountCombatLog.svelte-hnP5LAnU.js"))}function y_(){v_(import("./mountCreatureLog.svelte-slJxD6rp.js"))}function w_(){v_(import("./mountFsboxlog.svelte-C2cevrR3.js"))}function k_(){v_(Promise.resolve().then((function(){return BE})))}function S_(){v_(import("./mountGuildTracker.svelte-D1wpIFJI.js"))}async function x_(e){(await import("./injectAuctionSearch-Io0loPRR.js")).default(e)}async function E_(e){const{injectFindBuffs:t}=await import("./findBuffs-DEgilXyj.js")
t(e)}async function C_(e){const{injectFindOther:t}=await import("./findBuffs-DEgilXyj.js")
t(e)}async function T_(e){(await import("./injectOnlinePlayers-ghBDRaCn.js")).default(e)}function P_(){v_(Promise.resolve().then((function(){return iT})))}function $_(){v_(import("./mountQuickLinksMgr.svelte-ht8r2BW_.js"))}async function L_(e){(await import("./quickWear-BvXqu-Ys.js")).default(e)}function I_(){v_(import("./mountRecipeMgr.svelte-B8DPKEN9.js"))}function M_(){v_(import("./mountReliclist.svelte-DDN8-lfg.js"))}function R_(e){return new Promise((t=>{setTimeout(t,e)}))}function O_(e){Gc(window,"beforeunload",(()=>e.abort()))}const A_=900
let F_=0
const j_=5
let N_=0
async function D_(){N_<j_-$.active&&performance.now()-F_>=A_?(N_=j_-$.active,F_=performance.now()):await R_(100)}async function B_(e,t=10){await async function(){for(;N_<1;)await D_()
N_-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=O_,$.ajax(t).fail(((e,t,n)=>{e.textStatus=t,e.errorThrown=n}))}(e)}catch(n){if(t&&n.status>500)return B_(e,t-1)
!function(e,t){if(![0,500,503].includes(t.status))throw new Uc([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}function q_(e){return a_(e,{url:Ha,data:{no_mobile:1}}),B_(e)}async function H_(e){return $c(await q_({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function U_(e){return H_({cmd:"export",...e})}function G_(){return U_({inc_tagged:"1",subcmd:"guild_store"})}function W_(e){return l_("a",e)}function z_(e){e instanceof Element&&e.click()}function V_(e,t){const n=URL.createObjectURL(e),r=W_({download:t,href:n,style:{display:"none"}})
f_(document.body,r),z_(r),document.body.removeChild(r),setTimeout((()=>{URL.revokeObjectURL(n)}),0)}async function Q_(e,t){return $c(await B_({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function K_(e){return Q_(e,{method:"POST"})}function J_(e,t){const n=[]
for(let r=0;r<t.length;r+=e)n.push(t.slice(r,r+e))
return n}let Y_=null
function X_(){const e=t("holdtext")
if(e&&!Y_){const t=l(/fallensword.com\/\?ref=(?<id>\d+)/,n(e))
t&&(Y_=Number(t))}return Y_}const Z_=(e,t)=>t.some((t=>e instanceof t))
let ev,tv
const nv=new WeakMap,rv=new WeakMap,iv=new WeakMap
let sv={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return nv.get(e)
if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cv(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}
function ov(e){sv=e(sv)}function av(e){return(tv||(tv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(uv(this),t),cv(this.request)}:function(...t){return cv(e.apply(uv(this),t))}}function lv(e){return"function"==typeof e?av(e):(e instanceof IDBTransaction&&function(e){if(nv.has(e))return
const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()}
e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}))
nv.set(e,t)}(e),Z_(e,ev||(ev=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,sv):e)}function cv(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(cv(e.result)),r()},s=()=>{n(e.error),r()}
e.addEventListener("success",i),e.addEventListener("error",s)}))
return iv.set(t,e),t}(e)
if(rv.has(e))return rv.get(e)
const t=lv(e)
return t!==e&&(rv.set(e,t),iv.set(t,e)),t}const uv=e=>iv.get(e)
function dv(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=cv(o)
return r&&o.addEventListener("upgradeneeded",(e=>{r(cv(o.result),e.oldVersion,e.newVersion,cv(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const fv=["get","getKey","getAll","getAllKeys","count"],hv=["put","add","delete","clear"],pv=new Map
function gv(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return
if(pv.get(t))return pv.get(t)
const n=t.replace(/FromIndex$/,""),r=t!==n,i=hv.includes(n)
if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!fv.includes(n))return
const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly")
let o=s.store
return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]}
return pv.set(t,s),s}ov((e=>({...e,get:(t,n,r)=>gv(t,n)||e.get(t,n,r),has:(t,n)=>!!gv(t,n)||e.has(t,n)})))
const _v=["continue","continuePrimaryKey","advance"],vv={},mv=new WeakMap,bv=new WeakMap,yv={get(e,t){if(!_v.includes(t))return e[t]
let n=vv[t]
return n||(n=vv[t]=function(...e){mv.set(this,bv.get(this)[t](...e))}),n}}
async function*wv(...e){let t=this
if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return
const n=new Proxy(t,yv)
for(bv.set(n,t),iv.set(n,uv(t));t;)yield n,t=await(mv.get(n)||t.continue()),mv.delete(n)}function kv(e,t){return t===Symbol.asyncIterator&&Z_(e,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===t&&Z_(e,[IDBIndex,IDBObjectStore])}ov((e=>({...e,get:(t,n,r)=>kv(t,n)?wv:e.get(t,n,r),has:(t,n)=>kv(t,n)||e.has(t,n)})))
let Sv=Promise.resolve(),xv=!1
function Ev(){return xv||(Sv=dv("keyval-store",1,{upgrade(e){e.createObjectStore("keyval")}}),xv=!0),Sv}async function Cv(e){try{return(await Ev()).get("keyval",e)}catch(e){la(e)}}async function Tv(e,t){try{return(await Ev()).put("keyval",t,e)}catch(e){la(e)}}async function Pv(e){try{return(await Ev()).delete("keyval",e)}catch(e){la(e)}}const $v=({folder_id:e})=>-2!==(e??-2),Lv=({folder_id:e})=>-2===e,Iv=({player_id:e})=>-1!==(e??-1),Mv=({player_id:e})=>e,Rv=({player_id:e})=>-1===e,Ov=([e,t,n])=>J_(20,e).map((e=>[e,t,n])),Av=e=>({inv_id:t})=>t===e.inv_id,Fv=(e,t)=>e.attributes.find((({id:e})=>e===t))?.value??0,jv=(e,t)=>({...t,armor:Fv(e,2),attack:Fv(e,0),damage:Fv(e,4),defense:Fv(e,1),hp:Fv(e,3),set_name:e.set_name??""}),Nv=(e,t)=>t.forge||t.stats?.set_name,Dv=e=>e?.s?e.r.items:[],Bv=e=>[[e.filter($v),X_,0],[e.filter(Lv),X_,1],[e.filter(Iv),Mv,7],[e.filter(Rv),X_,4]].flatMap(Ov)
function qv(e){return function(){const t=this.data(),n=e.find(Av(t))
n?.attributes&&(t.stats=jv(n,t.stats),this.invalidate())}}const Hv=async()=>await Cv(`fsh_${Vc.subcmd}_cache`)??[],Uv=e=>Tv(`fsh_${Vc.subcmd}_cache`,e),Gv=e=>t=>e.every((e=>e.inv_id!==t.inv_id))
async function Wv(e,t,n){const r=await(i={item_id:e.map((({item_id:e})=>e)),inv_id:e.map((({inv_id:e})=>e)),p:e.map(t),t:e.map((()=>n))},K_({cmd:"fetchitem",compare:0,...i}))
var i
return r?.s&&(r.r.items=((e,t)=>t.map(((t,n)=>({...t,inv_id:e[n].inv_id}))))(e,r.r.items),await async function(e){const t=(await Hv()).filter(Gv(e))
await Uv(t.concat(e))}(r.r.items)),r}const zv=(e,t)=>{return t.filter((n=Eg(e.data()),e=>n.some((t=>e.inv_id===t.inv_id))))
var n}
async function Vv(e){const t=e.rows(Nv),n=await async function(e){const t=await Hv(),n=zv(e,t)
return await Uv(n),n}(t)
t.every(qv(n))}async function Qv(e){const t=new DataTable(e)
await Vv(t),t.draw()}const Kv=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],Jv=e=>{return[...Kv(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??"",t?.set_attack??"",t?.set_defense??"",t?.set_armor??"",t?.set_hp??"",t?.set_damage??""]),e.cached].join(",")
var t}
function Yv(e){return()=>__(e)}var Xv=[{section:"Character",menu:[{label:"Buff Log",fn:m_},{label:"Combat Log",fn:b_},{label:"Creature Log",fn:y_},{label:"Recipe Manager",fn:I_},{label:"Quick Links",fn:$_},{label:"Inventory Manager",href:`${rl}invmanagernew`}]},{section:"Actions",menu:[{label:"Find Buffs",fn:Yv(E_)},{label:"Find Other",fn:Yv(C_)},{label:"Online Players",fn:Yv(T_)},{label:"AH Quick Search",fn:Yv(x_)}]},...i_()?[{section:"Guild",menu:[{label:"Guild Inventory",href:`${rl}guildinvmgr`},{label:"New Guild Log",fn:k_},{label:"Merc Hunter",fn:function(){v_(import("./mountMercs.svelte-UYmF0OjY.js"))}},{label:"Pot Report",fn:function(){v_(Promise.resolve().then((function(){return EC})))}},{label:"Guild Tracker",fn:S_}]}]:[],{section:"Extra",menu:[{label:"Quick Extract",fn:P_},{label:"Quick Wear",fn:Yv(L_)},{label:"FS Box Log",fn:w_},{label:"SE Tracker",fn:function(){v_(import("./mountSuperElite.svelte-BKUfmRux.js"))}}]},...yc("betaOptIn")&&i_()?[{section:"Beta Features",menu:[{label:"Relic List",fn:M_,beta:!0},{label:"GS Export",fn:async function(){if(!i_())return
const e=await G_(),t=await Cv("fsh_guildinvmgr_cache")??[],n=e.items.map((e=>t=>{const n=e.find((({inv_id:e})=>e===t.inv_id))
return n?.attributes?{...t,stats:{...t.stats,armor:Fv(n,2),attack:Fv(n,0),damage:Fv(n,4),defense:Fv(n,1),hp:Fv(n,3),set_name:n.set_name??"",...n.set_name&&{set_armor:Fv(n.set_bonuses,2)},...n.set_name&&{set_attack:Fv(n.set_bonuses,0)},...n.set_name&&{set_damage:Fv(n.set_bonuses,4)},...n.set_name&&{set_defense:Fv(n.set_bonuses,1)},...n.set_name&&{set_hp:Fv(n.set_bonuses,3)}},cached:!0}:{...t,cached:!1}})(t))
var r
V_((r=`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name,set_attack,set_defense,set_armor,set_hp,set_damage,cached\n${(e=>e.map(Jv).join("\n"))(n)}\n`,new Blob([r],{type:"text/csv"})),"gs_export.csv")},beta:!0},{label:"Who's Got What",fn:function(){v_(Promise.resolve().then((function(){return LT})))},beta:!0}]}]:[],{section:"FSH developer quick links",menu:[{playerId:1963510,playerName:"PointyHair"}]}],Zv=(e,t,n)=>t($h(n).label,$h(n).fn),em=zh('<button type="button" class="svelte-8sy7i5"> </button>'),tm=(e,t,n)=>t($h(n).label),nm=zh('<a class="svelte-8sy7i5"> </a>'),rm=(e,t,n)=>t($h(n).playerName),im=zh('<button type="button" class="helperDevBtn svelte-8sy7i5">PM</button> <a class="svelte-8sy7i5"> </a>',1),sm=zh('<sup class="fshRed">beta</sup>'),om=zh("<li><!> <!></li>"),am=zh('<h2 class="svelte-8sy7i5"> </h2> <ul></ul>',1)
qh(["click"])
var lm=zh('<div class="modal svelte-gt76l6"><!></div>'),cm=zh('<div><button type="button">Helper Menu</button> <!></div>')
function um(e,t){Cd(t,!0)
let n=hf(!1)
const r=yc("keepHelperMenuOnScreen"),i=yc("draggableHelperMenu")
function s(){gf(n,!$h(n))}var o=cm()
let a
var l=$f(o)
let c
l.__click=s
var u=If(l,2),d=e=>{var t=lm()
!function(e,t){function n(e){t_("helperMenu",e)}function r(e,r){Tc(r)&&(n(e),t.doToggle(),r())}function i(e){n("sendMsg"),t.doToggle(),window.openQuickMsgDialog(e)}Cd(t,!0)
var s=Qh()
cp(Lf(s),17,(()=>Xv),lp,((e,t)=>{var s=am(),o=Lf(s),a=$f(o)
cp(If(o,2),21,(()=>$h(t).menu),lp,((e,t,s,o)=>{var a=om(),l=$f(a),c=e=>{var n=em()
n.__click=[Zv,r,t]
var i=$f(n)
Uf((()=>Yh(i,$h(t).label))),Kh(e,n)},u=e=>{var r=Qh(),s=Lf(r),o=e=>{var r=nm()
r.__click=[tm,n,t]
var i=$f(r)
Uf((()=>{Mp(r,"href",$h(t).href),Yh(i,$h(t).label)})),Kh(e,r)},a=e=>{var n=Qh(),r=Lf(n),s=e=>{var n=im(),r=Lf(n)
r.__click=[rm,i,t]
var s=If(r,2),o=$f(s)
Uf((()=>{Mp(s,"href",`${Xa??""}menuItem.playerId`),Yh(o,$h(t).playerName)})),Kh(e,n)}
op(r,(e=>{$h(t).playerName&&e(s)}),!0),Kh(e,n)}
op(s,(e=>{$h(t).href?e(o):e(a,!1)}),!0),Kh(e,r)}
op(l,(e=>{$h(t).fn?e(c):e(u,!1)}))
var d=If(l,2),f=e=>{Kh(e,sm())}
op(d,(e=>{$h(t).beta&&e(f)})),Kh(e,a)})),Uf((()=>Yh(a,$h(t).section))),Kh(e,s)})),Kh(e,s),Td()}($f(t),{doToggle:s}),qp(3,t,(()=>vg),(()=>({duration:100}))),Kh(e,t)}
op(u,(e=>{$h(n)&&e(d)})),vp(o,(e=>{return t=e,void(i&&Xg(t))
var t})),Uf(((e,t)=>{a=Sp(o,0,"helper-menu svelte-gt76l6",null,a,e),c=Sp(l,0,"toggle svelte-gt76l6",null,c,t)}),[()=>({"helper-menu-fixed":r}),()=>({"helper-menu-move":i})]),Kh(e,o),Td()}function dm(){const e=Lc(".mainbody")
e&&function(e,t){Xh(um,{target:t.parentElement,props:{props:e}})}({},e)}function fm(e){return Q_(e,{method:"GET"})}function hm(e){return fm({cmd:"trade",...e})}function pm(e,t){return hm({subcmd:"sendgold",xc:window.ajaxXC,target_username:e,gold_amount:t})}function gm(e,t,...n){return e(...n)}function _m(e){return(new DOMParser).parseFromString(e,"text/html")}function vm(e){return q_({data:e})}async function mm(e){const t=await vm(e)
if(t)return _m(t)}function bm(e){const n=t("info-msg",e)
if(n){const e=n.innerHTML
return e?e.replace(/<br.*/,""):""}}async function ym(e,t){const n=await mm(e)
if(!n)return{s:!1}
const r=bm(n)
return r===t?{s:!0}:{s:!1,e:{message:r}}}qh(["click"])
let wm=0
const km=()=>wm
function Sm(){wm=yc("sendGoldonWorld")}async function xm(){if(!km())return
t_("NewMap","doSendGold")
const e=await function(e,t){return gm(pm,0,e,t)}($("#HelperSendTo").html(),$("#HelperSendAmt").html().replace(/[^\d]/g,""))
e.s&&(Ec("currentGoldSentTotal",parseInt(yc("currentGoldSentTotal"),10)+parseInt(yc("goldAmount"),10)),GameData.fetch(ql))}function Em(e){window.location=e}function Cm(e){yc("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function Tm(e){t_("keyHandler",e)}function Pm(e){return e?.toLowerCase?.()}function $m(e,t){return Pm(e)<Pm(t)?-1:Pm(e)>Pm(t)?1:0}function Lm(e){return fm({cmd:"profile",...e})}async function Im(){const e=await Lm({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort(((e,t)=>$m(e.name,t.name)))}:e}function Mm(){return gm(Im)}const Rm=[e=>e?.s,(e,t)=>e.r?.length>t]
async function Om(e){const t=await Mm()
if(((e,t)=>Rm.every((n=>n(t,e))))(e,t)){Tm("changeCombatSet")
const n=t.r[e].id
Cm("2"),Em(`${Ya+Wa}managecombatset&submit=Use&combatSetId=${n}`)}}function Am(e,n){t("worldPage")||(Tm(e),Em(n))}function Fm(){Vc.enableMaxGroupSizeToJoin?Em(hl):Em(fl)}function jm(){Tm("logPage"),Cm("2"),Em(Ka)}function Nm(e){const t=Lc(`#pCC input[value="${e}"]`)
t&&(Tm("movePage"),z_(t))}const Dm=[["!",Om,0],["@",Om,1],['"',Om,1],["#",Om,2],["£",Om,2],["$",Om,3],["%",Om,4],["^",Om,5],["&",Om,6],["*",Om,7],["(",Om,8],["0",function(){Am("toWorld",pl)}],["<",Nm,"<"],[">",Nm,">"],["G",function(){Tm("createGroup"),Cm("4"),Em(`${cl}create`)}],["L",jm],["b",function(){Tm("backpack"),Cm("2"),Em(Za)}],["g",function(){Tm("gotoGuild"),Cm("4"),Em(`${ol}manage`)}],["j",function(){Tm("joinAllGroup"),Cm("4"),Fm()}],["l",jm],["p",function(){Tm("profile"),Cm("2"),Em(Ya)}],["r",function(){Am("doRepair",`${vl+Wa}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in Vc&&!Vc.dialogIsClosed()||(Tm("insertQuickWear"),__(L_))}],["y",xm]]
const Bm=[e=>["HTML","BODY"].every((t=>e.target.tagName!==t)),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function qm(e){var t;(t=e,Bm.some((e=>e(t))))||function(e){const t=Dm.find((([t])=>e===t))
t&&t[1](t[2])}(e.key)}function Hm(){Gc(document,"keyup",qm)}function Um(e,t){return $g(t)===e}function Gm(e){return Ig(Um,e)}function Wm(e,t,n){Gc(e,"click",t,n)}function zm(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function Vm(e,t){return Eg(zm(e,t))}function Qm(e){Wm(e,(()=>{t_("chrome","Game Help link")})),h_(`<a href="${Ga}settings">Game Help</a>`,e)}function Km(){Vm("#pCR h3").filter(Gm("Game Help")).forEach(Qm)}function Jm(e){Vc[e]=yc(e)}function Ym(e,t){if(t instanceof Element)return t.closest(e)}function Xm(e){e?.classList&&e.classList.add("fshHide")}function Zm(e){const n=Ym("a",e.target)
n?.getAttribute("href")===al&&(t_("useNewGuildLog","Alter Href"),e.preventDefault(),k_(),Xm(t("notification-guild-log")))}function eb(){return Vc.huntingMode&&window.realmKeyHandler}function tb(e){e.forEach((e=>lu(3,e)))}function nb(){return vm({cmd:"guild",subcmd:"manage"})}function rb(e){return Ym("tr",e)}function ib(e,t){return a(e,t)?.groups??{}}function sb(e){const{d:t,h:n,m:r,s:i}=ib(Fa,e),s=Number(t),o=Number(n)+24*s,a=Number(r)+60*o,l=Number(i)+60*a
return{day:t,days:s,hour:n,hours:o,min:r,mins:a,sec:i,secs:l,timestamp:Sa()-l}}function ob(e,t){if(t){const n=new Set
return e.filter((e=>n.has(e[t])?0:n.add(e[t])))}return Eg(new Set(e))}const ab=e=>Number($g(rb(e)?.cells[4])?.replaceAll(",","")),lb=e=>Number(l(ja,e.href)),cb=e=>$g(rb(e)?.cells[3]),ub=e=>Number(l(Da,e))
function db(e){return{guild_xp:ab(e),id:lb(e),name:$g(e),rank:cb(e)}}function fb(e){const{stam:t,max:n}=ib(Na,e)
return{current_stamina:Number(t),last_activity:sb(e).timestamp,level:Number(l(/Level:.+?(?<l>\d+)/,e)),max_stamina:Number(n),vl:ub(e)}}function hb(e){return{guild_id:i_(),image_version:0,xp:-1,...db(e),...fb(e.dataset.tipped)}}function pb(e,t,n){return{id:n,members:e.filter((e=>e.rank===t.rank)),name:t.rank,permissions:0,tax:-1}}async function gb(){const e=_m(await nb()).getElementById("pCC")
if(!e)return{e:{code:0,message:"Failure"},s:!1}
const t=Vm(hc,e).map(hb)
return{r:ob(t,"rank").map(Ig(pb,t)),s:!0}}function _b(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function vb(){return Tc(window.jQuery)}function mb(e){return Object.keys(e)}function bb(e){return Math.floor(Math.max(0,Sa()-e)/86400)}function yb(e){return Number.isNaN(e)}const wb=0,kb=1,Sb=2,xb=3,Eb=4,Cb=5,Tb=6,Pb="fsh_guildActivity"
function $b(e){return U_({guild_id:e,subcmd:"guild_members"})}function Lb(e){return Promise.all(e)}function Ib(e){let t=e.toString()
return e<10&&(t=`0${t}`),t}function Mb(e){return`${e[0]}-${e[1]}-${e[2]} ${e[3]}:${e[4]}:${e[5]}`}function Rb(e){return"[object Date]"===Object.prototype.toString.call(e)&&!yb(e.getTime())}function Ob(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(Ib)}(e))}function Ab(e){if(Rb(e))return Mb(Ob(e))}async function Fb(){return await Cv(Pb)??{lastUpdate:0,members:{}}}const jb=e=>Ab(new Date(1e3*e)),Nb=e=>[e[0],e[1],e[2],e[3],jb(e[4]),e[5],e[6]]
function Db(e){const{lastUpdate:t,members:n}=e
var r
return`Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n${s_(n).flatMap((r=jb(t),([e,t])=>t.map(Nb).map((t=>[r,e,...t].join(","))))).join("\n")}`}const Bb=e=>`${e[0]}${e[1]}${e[2]}${e[3]}${e[4]}${e[5]}`,qb=[e=>e.getFullYear().toString(),e=>e.getMonth()+1,e=>e.getDate(),e=>e.getHours(),e=>e.getMinutes(),e=>e.getSeconds()],Hb=e=>t=>t(e)
async function Ub(e,t){const n=await Fb()
if(!n.lastUpdate||!n.members)return
const r=e(n)
V_(new Blob([r],{type:t}),`${Bb(qb.map(Hb(new Date)).map(Ib))}_GuildTracker.${t.split("/")[1]}`)}async function Gb(e){const t=await Fb(),n={lastUpdate:t.lastUpdate,members:_b(s_(t.members).filter((([t])=>t!==e)))}
Tv(Pb,n)}async function Wb(e){const t=await Fb(),n={lastUpdate:t.lastUpdate,members:_b(s_(t.members).map((([t,n])=>[t,n.filter((t=>t[4]>e))])))}
Tv(Pb,n)}async function zb(){const[e,t]=await Lb([Fb(),$b(i_())]),n=t.map((({username:e})=>e))
return mb(e.members).filter((e=>t=>!e.find((e=>e===t)))(n)).sort($m)}const Vb=e=>[e.name,[bb(e.last_activity),e.current_stamina,e.level,e.max_stamina,Sa(),e.vl,e.guild_xp]],Qb=e=>e.members.map(Vb),Kb=e=>e.r.flatMap(Qb),Jb=[e=>!e,(e,t)=>e[1]!==t[1],(e,t)=>e[2]!==t[2],(e,t)=>e[3]>t[3],(e,t)=>e[5]!==t[5],(e,t)=>e[6]!==t[6]],Yb=e=>!e.some(Ta),Xb=e=>!e.some(yb),Zb=([,e])=>e.length,ey=([e,t])=>[e,t.filter(Yb).filter(Xb)],ty=e=>s_(e.members||{}).map(ey).filter(Zb),ny=(e,t)=>e[4]>t[4]?e:t,ry=([e,t])=>[e,t.reduce(ny)],iy=([e,t])=>[e,[t]],sy=e=>([t])=>!e[t]||Sa()-e[t][4]>=86100,oy=(e,t,n)=>{return((e,t,n)=>({lastUpdate:Sa(),members:_b(mb({...e,...t,...n}).map((r=>[r,[...e[r]??[],...t[r]??[],...n[r]??[]]])))}))(_b(e.map((e=>([t,n])=>[t,n.filter((n=>n[4]!==e[t][4]))])(t))),_b(s_(t).filter((r=n,([e,t])=>Jb.some((n=>n(r[e]?.[0],t))))).map(iy)),n)
var r}
function ay(e,t){const n=ty(e),r=_b(n.map(ry)),i=Kb(t).filter(sy(r))
i.length?function(e,t,n){e&&t&&n&&Tv(Pb,oy(t,n,_b(e.map(iy))))}(i,n,r):function(e){e&&Tv(Pb,{lastUpdate:Sa(),members:_b(e)})}(n)}const ly=e=>Sa()>Kc(e.lastUpdate,0)+300
function cy(e){ly(e)&&async function(e){const t=await gb()
t.s&&ay(e,t)}(e)}function uy(){return!vb()}function dy(e){return l_("li",e)}function fy(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function hy(e,t){if(t instanceof Node&&t.parentNode instanceof Node)return function(e,t){return t.nextSibling instanceof Node?fy(e,t.nextSibling):f_(t.parentNode,e)}(e,t)}const py=["Buff Log","Combat Logs","Creature Logs","Quick Links","Recipe Manager","New Guild Log"]
function gy(e,t){t_("accordion",e),py.includes(e)?t():__(t)}function _y(e,t,n,r){const i=function(e,t,n){const r=dy({className:`nav-level-${e}`}),i=W_({className:"nav-link fshPoint",textContent:t})
return f_(r,i),hy(r,n.parentNode),i}(e,t,r)
Tc(n)?Wm(i,Ig(gy,t,n)):(i.href=n,Wm(i,(()=>t_("accordion",t))))}const vy=[[e=>e.recipeManagerLink,"1","Recipe Manager",I_,"nav-character-log"],[e=>e.inventoryManagerLink,"1","Inventory Manager",`${rl}invmanagernew`,"nav-character-log"],[e=>e.medalGuideLink,"1","Medal Guide",`${Ya}${Wa}medalguide`,"nav-character-log"],[e=>e.buffLogLink&&yc("keepBuffLog"),"1","Buff Log",m_,"nav-character-log"],[e=>e.combatLogLink&&yc("keepLogs"),"1","Combat Logs",b_,"nav-character-notepad"],[e=>e.creatureLogLink&&yc("showMonsterLog"),"1","Creature Logs",y_,"nav-character-notepad"],[e=>e.quickLinksLink,"1","Quick Links",$_,"nav-character-notepad"],[e=>e.auctionSearchLink,"2","AH Quick Search",x_,"nav-actions-trade-auctionhouse"],[e=>e.onlinePlayersLink,"2","Online Players",T_,"nav-actions-interaction-findplayer"],[e=>e.findOtherLink,"2","Find Other",C_,"nav-actions-interaction-findplayer"],[e=>e.findBuffsLink,"2","Find Buffs",E_,"nav-actions-interaction-findplayer"],[e=>e.guildInventoryLink&&i_(),"2","Guild Inventory",`${rl}guildinvmgr`,"nav-guild-storehouse-inventory"],[e=>e.newGuildLogLink&&i_()&&!yc("useNewGuildLog"),"2","New Guild Log",k_,"nav-guild-ledger-advisor"],[e=>e.topRatedLink,"2","Top 250 Players",`${Ga}toprated${Wa}xp`,"nav-toprated-players-level"]]
function my(e){vy.forEach((([n,r,i,s,o])=>{n(e)&&function(e,n,r,i){const s=t(i)
s instanceof Node&&_y(e,n,r,s)}(r,i,s,o)}))}const by=e=>22*Vm("li",e).length||null
function yy(e,t,n){my(n),function(e,t){t.heights=Vm("#nav > li").map(by)
const n=Number(t.state)
n&&n>-1&&n<e.children.length&&(e.children[t.state].children[1].style.height=`${t.heights[t.state]}px`)}(e,t)}var wy=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function ky(e){return function(e){return-1!==e&&0===Lc(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?(t_("accordion","collapse"),-1):e}const Sy=(e,t,n)=>$(e).data(`${n}${t}`)
function xy(e,t,n){return new Promise((r=>{const i=Sy(e,t,n)
i?r(i):function(e,t,n,r){$(e).on(`${Pm(t)}create`,(()=>{r(Sy(e,t,n))}))}(e,t,n,r)}))}const Ey=[[e=>!Pc(e),()=>zc("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>zc("$('#nav').data('hcsNav').heights does not exist")]]
async function Cy(){const e=t("nav"),n=await xy(e,"Nav","hcs")
return function(e){const t=Ey.find((([t])=>t(e)))
return!t||(t[1](),!1)}(n)?{theNav:e,myNav:n}:{}}function Ty(){!function(){const e=yc("lastActiveQuestPage")
yc("storeLastQuestPage")&&e.length>0&&(t("nav-character-questbook").href=e)}(),function(){const e=yc("lastScavPage")
yc("storeLastScavPage")&&e.length>0&&(t("nav-actions-artisanship-scavenging").href=e)}()}async function Py(){const{theNav:e,myNav:t}=await Cy()
e&&t&&(Ty(),function(e,t){const n=wy.map((e=>[e,yc(e)]))
n.some((([,e])=>e))&&yy(e,t,_b(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,ky(n))}}(t))}function $y(e){return vm({cmd:"bounty",page:e})}function Ly(e){return e()}function Iy(e,t){Ec(e,Wc(t))}let My=0,Ry=0
const Oy=()=>My,Ay=()=>Ry
function Fy(){return c_({className:"minibox"})}function jy(e){return l_("span",e)}function Ny(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function Dy(e,t){Ny(e,"beforeend",t)}function By([e,t,n,r,i]){const s=e(),o=n()
if(o)return Iy(t,o),h_("",s),function(e,t,n,r){const i=c_({innerHTML:`<a class="fshBountyHeader" href="${Sl}">${n} Bounties</a> `}),s=jy({className:"xxsLink",textContent:"Reset"})
return f_(i,s),f_(e,i),Dy(e,function(e,t,n){const r=e.bounty
return 0===r.length?`<div class="xsOrange">[No ${t.toLowerCase()} bounties]</div>`:r.map(n).join("")}(t,n,r)),s}(s,o,r,i)}function qy(e,t){return`<a href="${e.link}" class="xsKhaki tip-static" data-tipped="${t(e)}">${e.target}</a><br>`}function Hy(e,t){if("string"==typeof t){const e=a(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function Uy(e){const t=yc(e)
if(t)return $c(t,Hy)}function Gy(e){return e.split(",").map(Pg)}function Wy(e){const t=yc(e)
return t?Gy(t):[]}function zy(e){return Lc("img",e[2]).title}function Vy(e){const t="A"===(r=e[0]).children[0].tagName?r.children[0]:r.children[0].children[0]
var r
return{target:n(t),link:t.href,lvl:n(t.nextSibling).replace(/[[|\]]/g,""),reward:n(e[2]),rewardType:zy(e),xpLoss:n(e[3]),posted:n(e[4])}}let Qy=0,Ky={},Jy={},Yy=!1,Xy=!1,Zy=[]
const ew=()=>Ky,tw=()=>Jy,nw=()=>Yy,rw=()=>Zy
function iw(e){return{...Vy(e),progress:n(e[5])}}function sw(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=iw(e.rows[t].cells)
Ky.bounty.push(n)}}(e)}function ow(e,t){return function(e){if(e)return Ky&&Sa()-Ky.lastUpdate>Qy}(e)||function(e){if(e)return Jy&&Sa()-Jy.lastUpdate>Qy}(t)}let aw=0
const lw=()=>aw
function cw(e){return`Level:  ${e.lvl}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Progress:  ${e.progress}`}function uw(e){return qy(e,cw)}function dw(){aw=By([Oy,"bountyList",ew,"Active",uw])}let fw=0
const hw=()=>fw
function pw(e){return`Target Level:  ${e.lvl}<br>Offerer: ${e.offerer}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Posted: ${e.posted}<br>Tickets Req.:  ${e.tickets}`}function gw(e){return e.accept?`<span class="xsGreen" onclick="${e.accept}">[a]</span>&nbsp;`:""}function _w(e){return[gw(e),qy(e,pw)].join("")}function vw(){fw=By([Ay,"wantedList",tw,"Wanted",_w])}function mw(e){const t=e[6]
return"[n/a]"!==$g(t)?t.children[0].children[0].getAttribute("onclick"):""}const bw=[()=>rw().includes("*"),e=>rw().includes(e),(e,t)=>Vc.wantedGuildMembers&&"[n/a]"===$g(t.cells[6])]
function yw(e,t){var n;(function(e,t){return"[active]"!==$g(t.cells[6])&&bw.some((n=>n(e,t)))})(e,t)&&tw().bounty.push({...Vy(n=t.cells),offerer:$g(n[1].children[0].children[0]),tickets:$g(n[5]),accept:mw(n)})}let ww=0,kw=0
function Sw(e){const n=Lc('#pCC input[name="page"]',e)
if(!n)return
ww=Number(n.value),kw=Number(l(/of&nbsp;(?<of>\d*)/,n.parentNode.innerHTML))
const r=t("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
r&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],r=$g(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===r)break
yw(r,n)}}(r)}function xw(e){Vc.enableActiveBountyList&&!nw()&&(!function(e){const n=t("bounty-info",e)
if(!n)return
const r=n.parentNode.parentNode.previousElementSibling.children[0].children[0]
Ky={},Ky.bounty=[],Ky.isRefreshed=!0,Ky.lastUpdate=Sa(),r&&sw(r),Yy=!0}(e),dw())}async function Ew(e){const t=_m(e)
if(xw(t),Vc.enableWantedList)if(Sw(t),ww<kw){Ew(await $y(ww+1))}else vw()}const Cw=[()=>!ew(),()=>!tw(),()=>Xy]
async function Tw(){if(function(e,t){Ky=Uy("bountyList"),Jy=Uy("wantedList"),Qy=yc("bountyListRefreshTime"),Xy=yc("bwNeedsRefresh"),Xy||ow(e,t)&&(Xy=!0)}(Vc.enableActiveBountyList,Vc.enableWantedList),Cw.some(Ly)){Jy={},Jy.bounty=[],Jy.isRefreshed=!0,Jy.lastUpdate=Sa(),Yy=!1,Zy=Wy("wantedNames"),Ec("bwNeedsRefresh",!1)
Ew(await $y(1))}else!function(e,t){t&&(tw().isRefreshed=!1,vw()),e&&(ew().isRefreshed=!1,dw())}(Vc.enableActiveBountyList,Vc.enableWantedList)}function Pw(e,t){t_("activeWantedBounties",e),Iy(t,null),Tw()}function $w(e){e.target===lw()&&Pw("getBountyListReset","bountyList"),e.target===hw()&&Pw("getWantedListReset","wantedList")}function Lw(e,t){return U_({subcmd:"profile",player_username:e,...t&&{_:ma()}})}async function Iw(e){const t=await Lw(s(),e),n=t?.username===s(),r=n?{...t,lastUpdate:ya()}:t
return n&&Tv("fsh_selfProfile",r),r}const Mw=e=>ya()-Vc.allyEnemyOnlineRefreshTime<e?.lastUpdate
async function Rw(e){if(e)return Iw(e)
return function(e){return Mw(e)?e:Iw()}(await Cv("fsh_selfProfile"))}function Ow(e,t){return t?.classList?.contains(e)}function Aw(e,t){return Ow(t[0],e)}function Fw(e,t,n){const{target:r}=n,i=t.find(Ig(e,r))
if(i)return i[1](r)}function jw(e){return Ig(Fw,Aw,e)}function Nw(e){return cu(e,"player_id")}function Dw(e,t,n){return Math.floor(Math.max(e-t,0)/2+n)}function Bw(e,t,n,r,i){let s=r
500===r&&(s=1e3)
const o=Dw(window.screen.availHeight,s,window.screenY),a=Dw(document.documentElement.clientWidth,n,window.screenX)
window.open(e,t,`width=${n}, height=${s}, left=${a}, top=${o}${i}`)}function qw(e,t){let n=""
t&&(n=`&blist=${t}`),Bw(`${ml}&t=${e}${n}`,"fsQuickBuff",618,1e3,",scrollbars")}function Hw(e){let t=e,n=Math.floor(t/60)
t%=60
let r=Math.floor(n/60)
n%=60
const i=Math.floor(r/24)
return r%=24,[i,r,n,t]}function Uw(e,t){return 0===e?"":String(e)+t}function Gw(e){const t=Hw(Math.abs(Sa()-e))
return`${Uw(t[0]," days, ")+Uw(t[1]," hours, ")+Uw(t[2]," mins, ")+t[3]} secs`}const Ww="enemy-buff-check-on",zw="enemy-buff-check-off",Vw="enemy-send-message",Qw="enemy-quickbuff",Kw="enemy-quick-buff",Jw=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function Yw(e,t){return t[0](Sa()-e)}function Xw(e,t){return`<a class="player-name tip-static ${function(e,t){const n=Jw.find(Ig(Yw,e))
return n?function(e,t){return e?t[1]:t[2]}(t,n):"fshWhite"}(e.last_login,t)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${Gw(e.last_login)}</td></tr></tbody></table>" href="${Xa}${e.id}">${e.username}</a>`}function Zw(e){return Sa()-e.last_login<1800}function ek(e,t){return`<li class="player"><div class="player-row">${Vc.hideBuffSelected?"":`<span class="${Ww}"></span>`}${Xw(t,e)}</div><div class="guild-minibox-actions">${Vc.hideGuildInfoMessage?"":`<span class="${Vw} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}${Vc.hideGuildInfoBuff?"":`<span class="${Qw} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}${function(e){return Vc.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${tl}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return Vc.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${el}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function tk(e,t){return e.filter(Zw).map(Ig(ek,t)).join("")}const nk=[(e,t)=>e.length+t.length,(e,t)=>{if(!Vc.enableAllyOnlineList)return t.length},e=>{if(!Vc.enableEnemyOnlineList)return e.length}]
function rk(e){t_("allyEnemy",e)}function ik(e,t,n){return 0===n(e,t)}function sk(e){const n=Kc(e._allies,[]),r=Kc(e._enemies,[]);(function(e,t){return nk.every(Ig(ik,e,t))})(n,r)||function(e,n){let r=""
Vc.enableAllyOnlineList&&(r+=tk(e,!0)),Vc.enableEnemyOnlineList&&(r+=tk(n,!1))
const i=t("fshContactList")
h_("",i),Dy(i,r)}(n,r)}function ok(e){rk("toggleBuffSelected"),e.classList.toggle(Ww),e.classList.toggle(zw)}const ak=[[Ww,ok],[zw,ok],[Vw,function(e){rk("msgPlayer"),window.openQuickMsgDialog(n(e.parentNode.previousElementSibling.lastElementChild))}],[Qw,function(e){rk("buffPlayer"),qw(Nw(e.parentNode.previousElementSibling.lastElementChild.href))}],[Kw,function(){rk("selectedBuff"),qw(d_(Ww,t("fshContactList")).map((e=>Nw(e.nextElementSibling.href))).join(","))}]]
function lk(e){const{target:t}=e
"fshResetEnemy"!==t.id?jw(ak)(e):async function(){rk("resetList"),sk(await Rw(!0))}()}function ck(e){const t=c_({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>'
Vc.hideBuffSelected||(n+=`<ul class="${Kw}">Quick Buff Selected</ul>`),n+="</div></div>",Dy(t,n),f_(Ag(),t),Wm(t,lk),sk(e)}function uk(e){if(e?.length)return n(e[0].nextElementSibling)}function dk(e){return e?Number(e.replace(/,/g,"")):0}function fk(e){return dk(uk(u_(e)))}function hk(e,t){const n=e?.split(" ").map((e=>e.slice(0,-1)))
var r
if(n)return`<dd>${r=new Date(ya()+1e3*(60*(60*t+Number(n[0]))+Number(n[1]))),`${Ib(r.getHours())}:${Ib(r.getMinutes())} ${r.toLocaleString("en",{weekday:"short"})} ${Ib(r.getDate())}/${Ma[r.getMonth()]}/${r.getFullYear()}`}</dd>`}function pk(e,t,n){e.target===$h(t)&&n.close()}var gk=zh("<div><!></div>")
function _k(e,t){Cd(t,!0)
let n,r,i,s=ug(t,"visible",3,!0),o=hf(void 0)
Nf((()=>{s()?document.body.classList.contains("noscroll")||(n=!0,r=window.scrollY,i=document.body.style.top,document.body.classList.add("noscroll"),document.body.style.top=`-${r}px`):n&&(document.body.classList.remove("noscroll"),document.body.style.top=i||"",window.scrollTo(0,r))}))
var a=gk()
let l
a.__click=[pk,o,t],gp($f(a),(()=>t.children??Su)),Xp(a,(e=>gf(o,e)),(()=>$h(o))),Uf((e=>l=Sp(a,0,"svelte-5b5wnh",null,l,e)),[()=>({visible:s()})]),Kh(e,a),Td()}let vk
qh(["click"])
var mk=zh('<div role="dialog" aria-modal="true"><!></div>')
function bk(e,t){Cd(t,!0)
let n,r=ug(t,"modal",15),i=ug(t,"visible",3,!0)
Nf((()=>{i()?(Vc.dialogIsClosed&&(n=Vc.dialogIsClosed),Vc.dialogIsClosed=()=>!i()):n&&(Vc.dialogIsClosed=n)})),_k(e,{get close(){return t.close},get visible(){return i()},children:(e,n)=>{!function(e,t){Cd(t,!0)
let n=ug(t,"modal",15),r=ug(t,"visible",3,!0),i=Bd(r),s=hf(void 0),o=hf(void 0)
const a=e=>e.tabIndex>=0&&e.offsetWidth>0&&e.offsetHeight>0&&!e.disabled
Nf((()=>{r()?(gf(s,document?.activeElement,!0),n()&&(gf(o,vk,!0),vk=n())):($h(s)?.focus(),n()&&(vk=$h(o)))}))
var l=mk()
let c
Bh("keydown",kf,(function(e){if(r())if("Escape"!==e.key||vk!==n()){if("Tab"===e.key){const t=Vm("*",n()).filter(a)
let r=t.indexOf(document.activeElement);-1===r&&e.shiftKey&&(r=0),r+=t.length+(e.shiftKey?-1:1),r%=t.length,t[r].focus(),e.preventDefault()}}else t.close()})),gp($f(l),(()=>t.children??Su)),Xp(l,(e=>n(e)),(()=>n())),Uf((e=>c=Sp(l,0,"ui-dialog svelte-61qae0",null,c,e)),[()=>({modalVisible:$h(i)})]),Kh(e,l),Td()}(e,{get close(){return t.close},get visible(){return i()},get modal(){return r()},set modal(e){r(e)},children:(e,n)=>{var r=Qh()
gp(Lf(r),(()=>t.children??Su)),Kh(e,r)},$$slots:{default:!0}})},$$slots:{default:!0}}),Td()}function yk(e,t,n){t(!1),n.resolve(!0)}var wk=zh('<div class="svelte-1gd1a38"> </div> <div class="svelte-1gd1a38"><button type="button" class="svelte-1gd1a38">Yes</button> <button type="button" class="svelte-1gd1a38">No</button></div>',1)
function kk(e,t){Cd(t,!0)
let n=ug(t,"msg",3,"Are you sure?"),r=ug(t,"visible",15,!0)
function i(){r(!1),t.resolve(!1)}bk(e,{close:i,get visible(){return r()},children:(e,s)=>{var o=wk(),a=Lf(o),l=$f(a),c=$f(If(a,2))
c.__click=[yk,r,t],If(c,2).__click=i,Uf((()=>Yh(l,n()))),Kh(e,o)},$$slots:{default:!0}}),Td()}qh(["click"])
const Sk=bf({visible:!0})
let xk=null
function Ek(e){Sk.resolve=e,xk?Sk.visible=!0:xk=Xh(kk,{props:Sk,target:document.body})}function Ck(e){return Sk.msg=e,new Promise(Ek)}async function Tk(e){if("daily-quest-reroll-button"!==e.target.id)return
e.stopPropagation()
await Ck("Are you sure you want to re-roll the Daily Quest?")&&async function(){const e=t("minibox-daily-quest")
if(!e)return
t_("dailyQuest","reroll")
const n=await mm({cmd:"dailyquests",subcmd:"reroll"})
if(!n)return
const r=t("minibox-daily-quest",n)
r&&e.replaceWith(r)}()}function Pk(e){return l_("button",{...e,type:"button"})}function $k(e,t){Dy(e,t)}function Lk(){t_("fsbox","open log"),w_()}function Ik(e,t){const n=jy({className:`fsh-fsbox ${e}`,textContent:"[ "})
return f_(n,t),$k(n," ]"),n}function Mk(e){const t=Lc(hc,e)
t&&(function(e,t){const r=W_({href:`${Ja}${n(t)}`,textContent:"Ignore"})
Wm(r,(()=>t_("fsbox","ignore link"))),f_(e,Ik("fs-box-ignore",r))}(e,t),async function(e){const t=await Cv("fsh_fsboxcontent")??"",n=Pg(Lc(".message",e).innerHTML)
if(t.includes(n))return
Tv("fsh_fsboxcontent",`<br>${n}${t}`.slice(0,9999))}(e))}function Rk(e){e.classList.add("fshRelative"),function(e){const t=Pk({textContent:"Log"})
Wm(t,Lk),f_(e,Ik("fs-box-log",t))}(e),Mk(e)}function Ok(e,t){const r=t.nextElementSibling.children[0]
8===r.children.length&&(!function(e,t){f_(e,c_({className:"tooltip-bottom",dataset:{tooltip:"Server"},textContent:`Server: ${n(t.children[7])}`}))}(e,r),function(e,t){h_(`Online: ${t.children[3].innerHTML}`,e.children[0])}(e,r),t.parentNode.classList.add("fshInvisible"))}function Ak(e,t){t instanceof Node&&(t.textContent=String(e))}let Fk=null
function jk(){return Fk||(Fk=t("quickMessageDialog")),Fk}let Nk=0
function Dk(e){(function(){if(!Nk){const e=u_("validateTips",jk())
1===e.length&&([Nk]=e)}return Nk})()&&Ak(Kc(e,""),Nk)}let Bk=null
function qk(){return Bk||(Bk=t("quickMsgDialog_msg"),Bk.maxLength=512),Bk}let Hk=null,Uk=0,Gk=0
function Wk(e){"Enter"!==e.key||e.shiftKey||(t_("messaging","sendOnEnter"),e.preventDefault(),function(){if(!Gk){const e=$(jk()).dialog("option","buttons")
Gk=e["Send Message"]}return Gk}()())}function zk(){Ta(Hk)&&(Hk=yc("enterForSendMessage")),Hk&&!Uk&&(Gc(qk(),"keypress",Wk),Uk=!0)}let Vk=null
let Qk=0,Kk=0,Jk=0
function Yk(e,t,n){const r=Kk.insertRow(e)
let i=r.insertCell(-1)
Dy(i,t),i=r.insertCell(-1),Dy(i,n)}function Xk(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function Zk(e,t){Yk(e,Xk("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const eS=[["del-button",function(e){t_("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
Kk.deleteRow(t),Qk.splice(t-2,1),Iy("quickMsg",Qk)}],["add-button",function(e){t_("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){Zk(e.parentNode.parentNode.rowIndex,n),t.value="",Qk.push(n),Iy("quickMsg",Qk)}}],["add-template",function(e){t_("messaging","insertTemplate"),qk().value+=`${n(e).replace(/\{playername\}/g,Vk)}`}]]
function tS(e){Zk(-1,e)}function nS(){yc("enableMessageTemplates")&&!Jk&&(Wm((Kk||(Kk=jk().lastElementChild),Kk),jw(eS)),(Qk||(Qk=Uy("quickMsg")),Qk).forEach(tS),Yk(-1,Xk("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),Jk=!0)}function rS(e,n,r){const i=jk()
Ow("ui-dialog-content",i)&&(!function(e){Vk=e,Ak(e,t("quickMsgDialog_targetUsername"))}(e),function(e){const t=qk()
t.value=Kc(e,""),t.disabled=!1}(n),Dk(r),nS(),zk(),$(i).dialog("open"))}function iS(e){return fm({cmd:"composing",...e})}function sS(){return iS({subcmd:"view"})}function oS(){return gm(sS)}function aS(e,n,r){const i=dy({className:"notification"}),s=W_({href:r,innerHTML:`<span class="notification-icon"></span><p class="notification-content">${n}</p>`})
Wm(s,(()=>{t_("notification",e)})),f_(i,s),f_(t("notifications"),i)}function lS(){aS("composing","Composing to do",bl)}function cS(e){return e.time_remaining}function uS(){lS(),Ec(zl,!0)}const dS=52
function fS(e){const t=e.h.p.find((({k:e})=>e===dS))?.v
e.r.potions.length!==t?uS():function(e){const t=Math.min.apply(null,e.map(cS))
t>0?(Ec(zl,!1),Ec(Vl,ya()+1e3*t)):uS()}(e.r.potions)}function hS(){yc(zl)?lS():async function(){const e=yc(Vl)
if(e&&ya()<e)return
const t=await oS()
t?.s&&fS(t)}()}function pS(e){return fm({cmd:"guild",...e})}function gS(e){return pS({subcmd:"groups",...e})}function _S(e){return gS({subcmd2:"joinall",group:e})}function vS(e){return gm(_S,0,e)}function mS(){return gS({subcmd2:"view"})}function bS(){return gm(mS)}function yS(e,t){$h(t)||(e.preventDefault(),t_("notification","Join All"),gf(t,1))}var wS=zh('<p class="notification-content" style="line-height: 32px;">Joined.</p>'),kS=zh('<span class="notification-content fshSpinner fix-classic-theme svelte-44dw92"></span>'),SS=zh('<p class="notification-content"><button type="button" class="svelte-44dw92"> </button></p>'),xS=zh('<a><span id="notification-icon-guild-group" class="notification-icon"></span> <!></a>')
function ES(e,t){Cd(t,!0)
let n=hf(0),r=hf(bf(fl)),i=hf("")
const o=e=>!Vc.enableMaxGroupSizeToJoin||e.members.length<Vc.maxGroupSizeToJoin,a=e=>e.name===s(),l=e=>!e.members.find(a),c=e=>e.id
async function u(){const e=await bS()
e?.s&&await async function(e){const t=e.r.filter(o).filter(l).map(c)
t.length&&await vS(t)}(e)}Vc.enableMaxGroupSizeToJoin&&(gf(r,hl,!0),gf(i,` less than size ${Vc.maxGroupSizeToJoin}`))
var d=xS(),f=If($f(d),2),h=e=>{var t=Qh()
sp(Lf(t),u,(e=>{Kh(e,kS())}),(e=>{Kh(e,wS())})),Kh(e,t)},p=e=>{var t=SS(),r=$f(t)
r.__click=[yS,n]
var s=$f(r)
Uf((()=>Yh(s,`Join all attack groups${$h(i)??""}.`))),Kh(e,t)}
op(f,(e=>{$h(n)?e(h):e(p,!1)})),Uf((()=>Mp(d,"href",$h(r)))),Kh(e,d),Td()}function CS(e){return fm({cmd:"temple",...e})}function TS(e){return CS({subcmd:"pray",type:e})}function PS(){return CS({subcmd:"view"})}function $S(e){$(e).qtip("hide")}qh(["click"])
let LS=Element
const IS='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',MS=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${Ga}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
function RS(e){Ec("needToPray",e),Ec("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}async function OS(e){const t=e.target.getAttribute("praytype")
t&&(t_("notification","prayToGods"),$S(e.target),await function(e){return gm(TS,0,e)}(t),LS.outerHTML=IS,RS(!1))}function AS(){Dy(t("notifications"),MS),LS=t("helperPrayToGods"),Dg(LS,"click",OS)}async function FS(){if(!Vc.enableTempleAlert)return
const e="temple"===Vc.cmd?function(e){if(!e)return{s:!1}
const t=Lc("#pCC",e)
return t?{s:!0,r:{pray_index:"You are currently praying at the temple."===$g(t)?0:-1}}:{s:!1}}(document):await gm(PS)
if(!e.s)return
const t=-1===e.r.pray_index
t&&AS(),RS(t)}function jS(){var e
!(e=yc("lastTempleCheck"))||ya()>e?FS():yc("needToPray")&&AS()}function NS(){return e={subcmd:"goldupgrades"},fm({cmd:"points",...e})
var e}function DS(e,t,n){if(e?.rows)return Eg(e.rows).filter(((e,r)=>e.children.length===t&&r>n))}function BS(e,t){const n=Number($g(e.cells[2]).split(" / ")[0]),r=$g(e.cells[3])
return{id:t,...!["-","n/a"].includes(r)&&{reset_time:Date.parse(`${r} GMT`)/1e3},current:yb(n)?0:n}}function qS(){return-1!==window.location.search.indexOf("cmd=points&type=1")}function HS(){qS()||aS("stamina","Upgrade stamina with gold",`${sl}&type=1`)}async function US(){if(qS()&&function(){const e=zm('#pCC input[name="quantity"]')
e?.length<2||(e[0].value="100",e[1].value="10")}(),!Vc.enableUpgradeAlert)return
const e=qS()?function(e){if(!e)return{s:!1}
const t=Lc("#pCC > table",e)
return t?{s:!0,r:DS(t,5,0).map(BS)}:{s:!1}}(document):await gm(NS)
Pa(e?.r?.[1]?.current)||function(e){10!==e.current?(HS(),Ec("needToDoUpgrade",!0)):(Ec("needToDoUpgrade",!1),Ec("lastUpgradeCheck",1e3*e.reset_time))}(e.r[1])}function GS(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?fy(t,e.firstChild):f_(e,t)}(e,t)}function WS(e,t){t.stopPropagation(),t_("chrome","statbar",e)}function zS(e,n){const r=t(`statbar-${n}`)
if(!r)return
const i=W_({href:e}),s=r.parentNode
f_(i,r),GS(s,i),Wm(i,Ig(WS,n),!0)}function VS(e,t){d_("player-name",e).forEach(t)}const QS=/Last Activity:<\/td><td>(?<mins>\d+) mins/
function KS(e,t){const n=e.dataset.tipped,r=l(QS,n)
r<2?e.classList.add(t.l1):r<5?e.classList.add(t.l2):e.classList.add(t.l3)}const JS=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function YS(e,t){JS.forEach((n=>{Vc[n[0]]&&Eg(zm(n[t],e)).forEach(Xm)}))}function XS(e){e?.classList&&e.classList.add("fshInvisible")}function ZS(e,n){Vc.hideBuffSelected&&(Eg(u_(`${n}-buff-check-on`,e)).forEach(XS),XS(t(`${n}-quick-buff`)))}function ex(e){KS(e,{l1:"fshGreen",l2:"fshWhite",l3:"fshGrey"})}function tx(e,t,n){Vm(`#pCR h${e}`).filter(Gm(t)).forEach((e=>{const r=W_({href:`${ol}${n}`,textContent:t})
Wm(r,(()=>{t_("widgets",`guild ${n}`)})),e.replaceChild(r,e.firstChild)}))}function nx(e){KS(e,{l1:"fshDodgerBlue",l2:"fshLightSkyBlue",l3:"fshPowderBlue"})}function rx(e){const n=t(e)
n&&(n.classList.add("pCR"),f_(Ag(),n))}function ix(e){const n=t(e)
n&&GS(jg(),n)}function sx(){return fm({cmd:"superelite"})}const ox=tg()
let ax=!1,lx={},cx=0,ux=!1
const dx=e=>Math.max(0,600-(ba()-(e?.lastUpdate??0)),600-(ba()-cx))
async function fx(){cx=ba()
const e=await gm(sx)
e?.s&&(lx=void 0,Tv("fsh_seLog",lx),ox.set(lx))}function hx(e,t){ux=t,e(ux),ux&&!ax&&async function(){for(ax=!0,lx=await Cv("fsh_seLog"),ox.set(lx);ux;)ax=!0,await R_(1e3*dx(lx)),ux&&await fx(),ax=!1}()}const px=function(){const{subscribe:e,set:t}=tg(0)
return{subscribe:e,set:Ig(hx,t)}}()
const gx=[function(){yc("moveGuildList")&&ix("minibox-guild")},function(){yc("moveOnlineAlliesList")&&ix("minibox-allies")},function(){yc("moveXmasBox")&&rx("minibox-xmas")},function(){yc("moveDailyQuest")&&rx("minibox-daily-quest")},function(){yc("moveFSBox")&&rx("minibox-fsbox")},async function(){if(!Vc.enableAllyOnlineList&&!Vc.enableEnemyOnlineList||uy())return
!function(e){e&&lu(3,ck,[e])}(await Rw(!1))},function(){!Vc.enableWantedList&&!Vc.enableActiveBountyList||uy()||(Vc.enableActiveBountyList&&(My=Fy(),f_(Ag(),My)),Vc.enableWantedList&&(Ry=Fy(),f_(Ag(),Ry)),Oy()&&Wm(Oy(),$w),Ay()&&Wm(Ay(),$w),Tw())},function(){if(!Vc.enableGuildInfoWidgets)return
const e=t("minibox-guild-members-list")
e&&(YS(e,1),ZS(e,"guild"),VS(e,ex),tx(4,"Chat","chat"),tx(3,"Guild","manage"))},function(){if(!Vc.enableOnlineAlliesWidgets)return
const e=t("minibox-allies-list")
e&&(YS(e,2),ZS(e,"ally"),VS(e,nx))},function(){Vc.enableTempleAlert&&"temple"!==Vc.cmd&&!uy()&&jS()},function(){Vc.enableUpgradeAlert&&vb()&&!qS()&&function(){if(yc("needToDoUpgrade"))return void HS()
const e=yc("lastUpgradeCheck");(!e||ya()>e)&&US()}()},function(){Vc.enableComposingAlert&&"composing"!==Vc.cmd&&vb()&&hS()},function(){Ag()&&!uy()&&Py()},function(){uy()||(window.openQuickMsgDialog=rS)},function(){yc("statBarLinks")&&(zS(Ya,"character"),zS(`${sl+Wa}reserve`,"stamina"),zS(vl,"equipment"),zS(Za,"inventory"),zS(sl,"fsp"),zS(`${Ga}bank`,"gold"))},function(){if(!yc("staminaCalculator"))return
const e=u_("stat-stamina-nextGain")
if(0===e.length)return
const n=t("statbar-stamina-tooltip-stamina"),r=(e=>uk(u_("stat-name",e)).split(" / "))(n)
2===r.length&&Dy(n,function(e,t){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${hk(uk(e),Math.floor((dk(t[1])-dk(t[0]))/fk("stat-stamina-gainPerHour")))}`}(e,r))},function(){if(!yc("levelUpCalculator"))return
const e=u_("stat-xp-nextGain")
0!==e.length&&Dy(t("statbar-level-tooltip-general"),`<dt class="stat-xp-nextLevel">Next Level At</dt>${hk(uk(e),Math.ceil(fk("stat-xp-remaining")/fk("stat-xp-gainPerHour")))}`)},function(){if(!yc("fsboxlog"))return
const e=t("minibox-fsbox")
e&&Rk(e)},function(){yc("resizeQuickBuff")&&(window.openWindow=function(e,t,n,r,i){t_("chrome","interceptQuickBuff"),Bw(e,t,n,r,i)})},function(){if(!yc("joinAllLink"))return
const e=t("notification-guild-group")
e&&function(e){h_("",e),Xh(ES,{target:e})}(e)},function(){if(!yc("addServerNode"))return
const e=t("topbanner-stats"),n=Vm("#pCR h3").find(Gm("Game Stats"));(function(e,t){return!(e&&Ow("topbanner-stats-hidden",e))&&t})(e,n)&&Ok(e,n)},function(){if(!yc("addScoutTowerLink"))return
const e=t("minibox-spoilsofwar")
if(!e)return
const n=e.children[1]
if(!n)return
const r=n.children[0]
Dy(r,"&nbsp;"),f_(r,function(){const e=W_({dataset:{tooltip:"View Scout Report"},href:ll,innerHTML:`<img id="fshScoutTower" src="${$a}structures/27.png">`})
return Wm(e,(()=>t_("chrome","scout tower link"))),e}())},async function(){if(vb()&&yc(Kl)){cy(await Fb())}},function(){vb()&&Vc.enableSeTracker&&px.set(Vc.enableSeTracker)},function(){yc("dailyQuestReRoll")&&jg()&&Wm(jg(),Tk,!0)}]
const _x=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function vx(){eb()||(_x.forEach(Jm),Vc.allyEnemyOnlineRefreshTime=1e3*yc("allyEnemyOnlineRefreshTime"),Vc.useNewGuildLog&&(Gc(document.body,"click",Zm),Gc(document.body,"auxclick",Zm)),tb(gx))}function mx(e){const t=$c(e)
t?.["new-ui"]&&(yc("gameHelpLink")&&lu(3,Km),Vc.huntingMode=yc("huntingMode"),lu(3,Hm),vx(),yc("hideHelperMenu")||lu(3,dm))}function bx(){const e=function(){const e=t("html")
if(e?.dataset)return e.dataset.hcs}()
e&&mx(e)}function yx(){vb()&&t("worldPage")&&window.GameData&&v_(import("./newMap-DRDmX0Je.js"))}const wx={"-":{"-":()=>{v_(import("./arena-DoK7O40r.js").then((function(e){return e.b})))}},dojoin:{"-":()=>{v_(import("./arenaDoJoin-CvP_skVY.js"))}},join:{"-":()=>{v_(import("./arenaJoin-CS1NGW89.js"))}},completed:{"-":()=>{v_(import("./completedArenas-BTCE_Ub9.js"))}},pickmove:{"-":()=>{v_(import("./storeMoves-ClJH0mFY.js"))}},setup:{"-":()=>{v_(import("./setupMoves-DhKuNaT8.js"))}}}
var kx={"-":{"-":()=>{v_(import("./injectAuctionHouse-6_sMIDAU.js"))}},quickcreate:{"-":()=>{v_(import("./quickCreate-Dr5u2--Y.js"))}}}
var Sx={"-":{"-":()=>{v_(import("./composing-C99ML4ax.js"))}},breakdown:{"-":()=>{v_(import("./breakdown-rm-lncBI.js"))}},create:{"-":()=>{v_(import("./composingCreate-DVyNfe0j.js"))}}}
function xx(){v_(import("./bioWidgets-Cvi-sVnt.js"))}function Ex(){v_(import("./injectGuild-DIRUL3bG.js"))}const Cx=()=>{v_(import("./guildAdvisor-C2DE5LxO.js"))}
const Tx=()=>{v_(import("./groups-BpzyOtJp.js"))}
const Px=()=>{v_(import("./addRemoveTags-BzA8VqQm.js"))}
const $x=()=>{v_(import("./guildChat-DWF9y2Cs.js"))}
var Lx={inventory:{report:()=>{v_(import("./guildReport-CNBsvs2l.js"))},addtags:Px,removetags:Px,storeitems:()=>{v_(import("./storeitems-C3LX13HR.js"))}},chat:{"-":$x},dochat:{"-":$x},log:{"-":()=>{v_(import("./guildLog-D6QI3Z6I.js"))}},groups:{viewstats:()=>{v_(import("./injectGroupStats-CHDE8la5.js"))},joinallgroupsundersize:Tx,joinall:Tx,"-":Tx},manage:{"-":Ex},advisor:{"-":Cx,weekly:Cx},history:{"-":xx},view:{"-":Ex},scouttower:{"-":()=>{v_(import("./injectScouttower-pucpfdde.js"))}},mailbox:{"-":()=>{v_(import("./guildMailbox-TiiTJP5l.js"))}},ranks:{"-":()=>{v_(import("./rank-CjvBlkgK.js"))}},conflicts:{rpupgrades:()=>{v_(import("./injectRPUpgrades-ysWN7XP0.js"))}},bank:{"-":()=>{v_(import("./injectGuildBank-DZdqLZPv.js"))}},hall:{"-":()=>{v_(import("./hall-BTw14M9E.js"))},post:xx},"-":{"-":Ex},titanrewards:{"-":()=>{v_(import("./titanrewards-A6FvRIv9.js"))}}}
function Ix(){v_(import("./viewRecipe-DX-8VOt9.js"))}var Mx={"-":{"-":function(){v_(import("./inventing-Zi1J0QL7.js"))}},doinvent:{"-":Ix},viewrecipe:{"-":Ix}}
function Rx(){v_(import("./ufsgAllowBack-CYUJZWzG.js"))}var Ox={"-":{"-":Rx},view:{"-":()=>{v_(import("./itemsView-dJzHSakP.js"))}}}
function Ax(){v_(import("./profile-DeHCBAxd.js").then((function(e){return e.p})))}function Fx(){v_(import("./news-D304Q1UK.js"))}function jx(){v_(import("./viewArchive-fxfkZJzt.js"))}var Nx={fsbox:{"-":()=>{v_(import("./newsFsbox-DwxC7W2q.js"))}},"-":{"-":Fx},shoutbox:{"-":()=>{v_(import("./newsShoutbox-BWZ9GtYH.js"))}},viewupdatearchive:{"-":jx},viewarchive:{"-":jx}}
var Dx={news:{"-":Fx},viewupdatearchive:{"-":jx},viewarchive:{"-":jx},"-":{"-":()=>{v_(import("./unknownPage-h7A__Xo6.js"))}}},Bx=zh("<svelte-virtual-list-row><!></svelte-virtual-list-row>",2),qx=zh("<svelte-virtual-list-viewport><svelte-virtual-list-contents></svelte-virtual-list-contents></svelte-virtual-list-viewport>",2)
function Hx(e,t){Cd(t,!0)
let n,r,i=ug(t,"height",3,"100%"),s=ug(t,"itemHeight",3,void 0),o=ug(t,"start",15,0),a=ug(t,"end",15,0),l=[],c=hf(void 0),u=hf(void 0),d=hf(0),f=Bd((()=>t.items.slice(o(),a()).map(((e,t)=>({index:t+o(),data:e}))))),h=hf(void 0),p=hf(0),g=hf(0),_=0
async function v(e,t){const{scrollTop:n}=$h(c)
t={left:0,top:n+(e-o())*(s()||r),behavior:"smooth",...t},$h(c).scrollTo(t)}dg((()=>{n=$h(u).getElementsByTagName("svelte-virtual-list-row"),gf(h,!0)})),Nf((()=>{$h(h)&&async function(e,t,i){if(_)return
_=!0,e.length<o()&&await v(e.length-1,{behavior:"auto"})
const{scrollTop:s}=$h(c)
await Ph()
let u=$h(p)-s,d=o()
for(;u<t&&d<e.length;){let e=n[d-o()]
e||(a(d+1),await Ph(),e=n[d-o()]),e&&(u+=l[d]=i||e.offsetHeight),d+=1}a(d)
const f=e.length-a()
r=($h(p)+u)/a(),gf(g,f*r),l.length=e.length,_=!1}(t.items,$h(d),s())}))
var m=qx()
Sp(m,0,"svelte-13thbeo")
var b=$f(m)
Sp(b,0,"svelte-13thbeo"),cp(b,21,(()=>$h(f)),(e=>e.index),((e,n)=>{var r=Bx()
Sp(r,0,"svelte-13thbeo")
var i=$f(r),s=e=>{var r=Qh()
gp(Lf(r),(()=>t.children),(()=>({item:$h(n).data}))),Kh(e,r)},o=e=>{Kh(e,Vh("Missing template"))}
op(i,(e=>{t.children?e(s):e(o,!1)})),Kh(e,r)})),Xp(b,(e=>gf(u,e)),(()=>$h(u))),Xp(m,(e=>gf(c,e)),(()=>$h(c))),Uf((()=>{Ep(m,`height: ${i()??""};`),Ep(b,`padding-top: ${$h(p)??""}px; padding-bottom: ${$h(g)??""}px;`)})),Bh("scroll",m,(async function(){const{scrollTop:e}=$h(c)
for(let e=0;e<n.length;e+=1)l[o()+e]=s()||n[e].offsetHeight
let i=0,u=0
for(;i<t.items.length;){const t=l[i]||r
if(u+t>e){o(i),gf(p,u,!0)
break}u+=t,i+=1}for(;i<t.items.length&&(u+=l[i]||r,i+=1,!(u>e+$h(d))););a(i)
const f=t.items.length-a()
for(r=u/a();i<t.items.length;)l[i++]=r
gf(g,f*r)})),function(e,t,n){var r=Jp.observe(e,(()=>n(e[t])))
qf((()=>(Ih((()=>n(e[t]))),r)))}(m,"offsetHeight",(e=>gf(d,e))),Kh(e,m),Td()}const Ux={}
let Gx=-1
function Wx(e,t){lu(3,t.func,[e])}function zx(e,t){if(Ux[e])return Ux[e].forEach(Ig(Wx,t)),!0}function Vx(e,t){Ux[e]||(Ux[e]=[]),Gx+=1
const n=Gx.toString()
return Ux[e].push({token:n,func:t}),n}function Qx(e,t){return Ux[e]?Ux[e][0].token:Vx(e,t)}async function Kx(e=-1,t=1,n=[]){const r=await function(e,t,n){return pS({subcmd:"log",log_id:e,latest:t,limit:n})}(e,t,1e3)
if(!r?.s)return void zx("guildLog-progress","Server Error.")
zx("guildLog-progress")
const i=n.concat(r.r.logs)
return 1e3!==r.r.logs.length?i:Kx(r.r.logs[0].id,0,i)}var Jx=zh('<button class="modal-close svelte-jhpi06" type="button">×</button>')
qh(["click"])
var Yx=zh('<div class="modal-title svelte-mgjzgm"><!> <!></div> <div class="modal-content svelte-mgjzgm"><!></div>',1)
function Xx(e,t){Cd(t,!0)
let n=ug(t,"visible",3,!0),r=hf(void 0),i=hf(void 0)
dg((()=>{Xg($h(i),$h(r))})),bk(e,{get close(){return t.close},get visible(){return n()},get modal(){return $h(r)},set modal(e){gf(r,e,!0)},children:(e,n)=>{var r=Yx(),s=Lf(r),o=$f(s)
gp(o,(()=>t.title??Su)),function(e,t){var n=Jx()
n.__click=function(...e){t.close?.apply(this,e)},Kh(e,n)}(If(o,2),{get close(){return t.close}}),Xp(s,(e=>gf(i,e)),(()=>$h(i))),gp($f(If(s,2)),(()=>t.children??Su)),Kh(e,r)},$$slots:{default:!0}}),Td()}var Zx=zh('<button type="button" class="svelte-mmp9jk"><!></button>')
function eE(e,t){let n=ug(t,"disabled",3,0)
var r=Zx()
r.__click=function(...e){t.onclick?.apply(this,e)},gp($f(r),(()=>t.children??Su)),Uf((()=>r.disabled=n())),Kh(e,r)}qh(["click"])
var tE=zh('<span class="svelte-1amp3b0">[<!>]</span>')
function nE(e,t){var n=tE()
eE(If($f(n)),{get onclick(){return t.onclick},children:(e,n)=>{var r=Qh()
gp(Lf(r),(()=>t.children??Su)),Kh(e,r)},$$slots:{default:!0}}),Kh(e,n)}function rE(e,t,n){t(),n.cbChange()}var iE=zh('<div class="filter-header svelte-1tfrwgn"><div class="filters svelte-1tfrwgn"><div class="front svelte-1tfrwgn"><span>Filters:</span></div> <div><label>Potions: <input type="checkbox"/></label></div> <div><label>Store/Recalls: <input type="checkbox"/></label></div> <div><label>Relics: <input type="checkbox"/></label></div> <div><label>Mercenaries: <input type="checkbox"/></label></div> <div><label>Group Combats: <input type="checkbox"/></label></div> <div><!></div> <div><label>Donations: <input type="checkbox"/></label></div> <div><label>Rankings: <input type="checkbox"/></label></div> <div><label>GvGs: <input type="checkbox"/></label></div> <div><label>Tag/UnTags: <input type="checkbox"/></label></div> <div><label>Titans: <input type="checkbox"/></label></div> <div><label>Other: <input type="checkbox"/></label></div></div> <div class="button-row svelte-1tfrwgn"><div></div> <div class="buttons svelte-1tfrwgn"><div><!></div> <div><!></div> <div><!></div></div> <div class="search-box svelte-1tfrwgn"><label>Search: <span class="search-wrapper svelte-1tfrwgn"><input type="text" class="svelte-1tfrwgn"/> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></span></label></div></div></div>')
function sE(e){return Ab(new Date(1e3*e))}function oE(e){return fm({cmd:"combat",subcmd:"view",combat_id:e})}qh(["change"])
const aE="fsh_pvpCombat"
let lE=null,cE={}
const uE={},dE=e=>([t,n])=>"lastCheck"===t||n?.logTime>e
async function fE(){const e=await Cv(aE)
return cE=e?(e?.lastCheck??0)<Ea()?function(e){const t={..._b(s_(e).filter(dE(Ca()))),lastCheck:Sa()}
return Tv(aE,t),t}(e):e:{lastCheck:Sa()},cE}async function hE(e,t){uE[t]=gm(oE,0,t)
const n=await uE[t]
if(n?.s)return cE[t]={...n,logTime:e},Tv(aE,cE),n
delete uE[t]}async function pE(e,t){lE||(lE=fE())
const n=await lE
return n[t]?n[t]:uE[t]?uE[t]:hE(e,t)}function gE(){return e={subcmd2:"view"},pS({subcmd:"recruit",...e})
var e}var _E=zh('<i class="fas fa-envelope" aria-hidden="true"></i>'),vE=zh('<a class="svelte-6j0lyo"> </a>'),mE=zh('[ <a class="svelte-6j0lyo"><img class="svelte-6j0lyo"/> </a> ]',1),bE=zh("<!> <!>",1),yE=zh('<span class="action-buttons svelte-6j0lyo">[ <!> | <!> ]</span>'),wE=zh('<div class="rel svelte-6j0lyo"> </div>'),kE=zh('<div class="rel svelte-6j0lyo"><span class="fshSpinner recruit-spinner svelte-6j0lyo"></span></div>'),SE=zh('<!> <span class="action-buttons svelte-6j0lyo">[ <!> | <!> | <!> | <!> ]</span>',1),xE=zh('<span class="action-buttons svelte-6j0lyo">[ <!> ]</span>'),EE=zh('<div><a class="svelte-6j0lyo"> </a>\'s group looted the item \'<span class="fshGreen"> </span>\'</div>'),CE=zh("<!> <!> <!>",1),TE=zh("<div><div><!></div> <div><!></div> <div><!> <!></div></div>")
function PE(e,t){Cd(t,!0)
let n=ug(t,"groupCombatItems",3,null),r=ug(t,"hideNonPlayerGuildLogMessages",3,null),i=ug(t,"logEntry",3,null),s=hf(bf(Promise.resolve())),o=hf("waiting")
function a(e){t_("Guild Log",e)}const l=e=>e
function c(e){const t=e.msg.attachments?.filter((e=>0===e.type))
return t?.length&&!t.filter((({data:{id:e}})=>e===X_())).length}async function u(e,t){a(t),gf(s,gE(),!0)
const n=await $h(s)
if(n?.s&&Qc(n?.r)){const r=n.r.find((({player:{id:t}})=>t===e.id))
r?.id?Em(`${ol}recruit&subcmd2=${t}&id=${r.id}`):gf(o,"gone")}else gf(o,"error")}var d=TE()
let f
var h=$f(d)
let p
var g=$f(h),_=e=>{Kh(e,_E())}
op(g,(e=>{i().time&&e(_)}))
var v=If(h,2)
let m
var b=$f(v),y=e=>{var t=Vh()
Uf((e=>Yh(t,e)),[()=>sE(i().time)]),Kh(e,t)}
op(b,(e=>{i().time&&e(y)}))
var w=If(v,2)
let k
var S=$f(w)
cp(S,17,(()=>i().msg.text.split(/<link=a(\d)><\/link>/).filter(l)),lp,((e,t)=>{var n=Qh(),r=Lf(n),s=e=>{var n=bE(),r=Lf(n),s=e=>{var n=vE(),r=$f(n)
Uf((()=>{Mp(n,"href",`${Xa??""}${i().msg.attachments[$h(t)].data.id??""}`),Yh(r,i().msg.attachments[$h(t)].data.name)})),Kh(e,n)}
op(r,(e=>{0===i().msg.attachments[$h(t)].type&&e(s)}))
var o=If(r,2),a=e=>{var n=mE(),r=If(Lf(n)),s=$f(r),o=If(s,1,!0)
Uf((()=>{Mp(r,"href",`${dl??""}${i().msg.attachments[$h(t)].data.id??""}`),Mp(s,"src",`${$a??""}guilds/${i().msg.attachments[$h(t)].data.id??""}_mini.png`),Mp(s,"alt",i().msg.attachments[$h(t)].data.name),Yh(o,i().msg.attachments[$h(t)].data.name)})),Kh(e,n)}
op(o,(e=>{1===i().msg.attachments[$h(t)].type&&e(a)})),Kh(e,n)},o=e=>{var n=Vh()
Uf((()=>Yh(n,$h(t)))),Kh(e,n)}
op(r,(e=>{1!==$h(t).length||yb(Number($h(t)))?e(o,!1):e(s)})),Kh(e,n)}))
var x=If(S,2),E=e=>{var t=CE(),r=Lf(t)
cp(r,17,(()=>i().msg.attachments.filter((({type:e})=>0===e))),lp,((e,t)=>{let n=()=>$h(t).data
var r=SE(),l=Lf(r),c=e=>{var t=Qh()
sp(Lf(t),(()=>$h(s)),(e=>{Kh(e,kE())}),(e=>{var t=Qh(),r=Lf(t),i=e=>{var t=yE(),r=If($f(t))
eE(r,{onclick:()=>u(n(),"acceptjoin"),children:(e,t)=>{Kh(e,Vh("Accept"))},$$slots:{default:!0}}),eE(If(r,2),{onclick:()=>u(n(),"denyjoin"),children:(e,t)=>{Kh(e,Vh("Deny"))},$$slots:{default:!0}}),Kh(e,t)},s=e=>{var t=wE(),n=$f(t)
Uf((()=>Yh(n,$h(o)))),Kh(e,t)}
op(r,(e=>{"waiting"===$h(o)?e(i):e(s,!1)})),Kh(e,t)})),Kh(e,t)}
op(l,(e=>{21===i().type&&e(c)}))
var d=If(l,2),f=If($f(d))
eE(f,{onclick:()=>function(e){a("reply"),window.openQuickMsgDialog(e.name)}(n()),children:(e,t)=>{Kh(e,Vh("Reply"))},$$slots:{default:!0}})
var h=If(f,2)
eE(h,{onclick:()=>function(e){a("buff"),qw(e.id)}(n()),children:(e,t)=>{Kh(e,Vh("Buff"))},$$slots:{default:!0}})
var p=If(h,2)
eE(p,{onclick:()=>function(e){a("send"),Em(`${el}${e.name}`)}(n()),children:(e,t)=>{Kh(e,Vh("Send"))},$$slots:{default:!0}}),eE(If(p,2),{onclick:()=>function(e){a("trade"),Em(`${tl}${e.name}`)}(n()),children:(e,t)=>{Kh(e,Vh("Trade"))},$$slots:{default:!0}}),Kh(e,r)}))
var l=If(r,2)
cp(l,17,(()=>i().msg.attachments.filter((({type:e})=>11===e))),lp,((e,t)=>{var n=xE()
eE(If($f(n)),{onclick:()=>function(e){a("combat"),Em(`${Ga}combat&subcmd=view&combat_id=${e}`)}($h(t).data),children:(e,t)=>{Kh(e,Vh("View Combat"))},$$slots:{default:!0}}),Kh(e,n)}))
var c=If(l,2),d=e=>{var t=Qh()
sp(Lf(t),(()=>pE(i().time,i().msg.attachments[0].data)),null,((e,t)=>{var n=Qh(),r=Lf(n),i=e=>{var n=EE(),r=$f(n),i=$f(r),s=$f(If(r,2))
Uf((()=>{Mp(r,"href",`${Xa??""}${$h(t).r.combat.attacker.group.players[0].id??""}`),Yh(i,$h(t).r.combat.attacker.group.players[0].name),Yh(s,$h(t)?.r?.combat?.items?.[0]?.n)})),Kh(e,n)}
op(r,(e=>{$h(t)?.r?.combat?.items?.[0]?.n&&e(i)})),Kh(e,n)})),Kh(e,t)}
op(c,(e=>{17===i().type&&n()&&i().msg.text.includes("victorious")&&e(d)})),Kh(e,t)}
op(x,(e=>{i().msg?.attachments?.length&&e(E)})),Uf(((e,t,n,r)=>{f=Sp(d,0,"row-container svelte-6j0lyo",null,f,e),p=Sp(h,0,"svelte-6j0lyo",null,p,t),m=Sp(v,0,"svelte-6j0lyo",null,m,n),k=Sp(w,0,"svelte-6j0lyo",null,k,r)}),[()=>({"not-self":r()&&c(i()),separator:i().index}),()=>({old:i().old,new:i().new}),()=>({old:i().old,new:i().new}),()=>({old:i().old,new:i().new})]),Kh(e,d),Td()}const $E=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to","has added tags to","has removed some tags from"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited [,0-9]+ gold into the guild bank/,/deposited [,0-9]+ Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled","has been stripped of their rank by",/has revoked .+'s invite to the guild/,"has been rejected from joining the guild"],[/resulted in .* with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with","has initiated a conflict with your guild","is participating in the conflict against"],["Titan Reward item","from your guild's contribution to the defeat of the titan","7 day cooldown has been activated on your guild for this titan"]]
function LE(e,t){return kc(t)?e.includes(t):t.test(e)}function IE(e,t){return t.some(Ig(LE,e))}function ME(e){const t=$E.findIndex(Ig(IE,e))
return-1===t?0:t}var RE=zh('<span class="white svelte-1u02a2w">(Guild Log messages not involving self are dimmed!)</span>'),OE=zh('<div class="vs svelte-1u02a2w"><!></div>'),AE=zh(" <br/>",1),FE=zh('<div class="content svelte-1u02a2w"><!> <div class="row-container svelte-1u02a2w"><div class="innerColumnHeader svelte-1u02a2w">&nbsp;</div> <div class="innerColumnHeader svelte-1u02a2w">Date</div> <div class="innerColumnHeader svelte-1u02a2w">Message <!></div></div> <!></div>')
function jE(e,t){Cd(t,!0)
let n=ug(t,"visible",15,!0),r=hf(bf(Array(11).fill(!0))),i=hf(null),s=hf(null),o=hf(bf([])),a=hf(bf(Promise.resolve())),l=hf(bf([])),c=hf("")
const u=Bd((()=>$h(o).filter((({fshType:e})=>$h(r)[e])).filter((({searchable:e})=>""===$h(c)||e.includes($h(c).toLowerCase()))).map(_))),d=Bd((()=>$h(u).length?$h(u):[{index:0,msg:{text:""}}]))
let f=0,h=null,p=null,g=null
const _=(e,t)=>({...e,index:t}),v=({msg:e})=>e.text.replace(/<link=a(\d)><\/link>/g,((t,n)=>e.attachments[n].data.name)),m=e=>({...e,fshType:ME(e.msg.text),new:h&&e.time>p,old:h&&(g-e.time)/60>20&&e.time<=p,searchable:v(e).toLowerCase()}),b=(e,t)=>t.time-e.time
function y(e){t_("Guild Log",e)}function w(){y("cbChange")}function k(){y("selectAll")}function S(){y("selectNone")}function x(){y("oldGuildLog"),Em(al)}function E(){y("clearSearch"),gf(c,"")}function C(e){gf(l,$h(l).concat(e),!0)}function T(e){e?C(e):(f+=1,C(`chunk ${f}`))}async function P(){gf(l,["Loading..."],!0),gf(o,[],!0),g=(new Date).setUTCSeconds(0,0)/1e3,p=yc("lastModalGuildLogCheck")??g,Ec("lastModalGuildLogCheck",g),h=yc("enableLogColoring"),gf(i,yc("groupCombatItems"),!0),gf(s,yc("hideNonPlayerGuildLogMessages"),!0),f=0,Qx("guildLog-progress",T)
const e=await gm(Kx)
e&&gf(o,e.toSorted(b).map(m),!0)}function $(){gf(a,P(),!0)}Nf((()=>{n()&&$()}))
{const t=e=>{Kh(e,Vh("Guild Log"))}
Xx(e,{close:function(){y("close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=FE(),o=$f(n)
!function(e,t){Cd(t,!0)
let n=ug(t,"checks",31,(()=>bf(Array(11).fill(!0)))),r=ug(t,"searchValue",15,"")
function i(){Tv("fsh_LogChecks",kd(n()))}function s(e){n(n().map((()=>e))),i()}!async function(){n(await Cv("fsh_LogChecks")??Array(11).fill(!0))}()
var o=iE(),a=$f(o),l=If($f(a),2),c=$f(l),u=If($f(c))
u.__change=[rE,i,t],u.value=u.__value="1"
var d=If(l,2),f=$f(d),h=If($f(f))
h.__change=[rE,i,t],h.value=h.__value="2"
var p=If(d,2),g=$f(p),_=If($f(g))
_.__change=[rE,i,t],_.value=_.__value="4"
var v=If(p,2),m=$f(v),b=If($f(m))
b.__change=[rE,i,t],b.value=b.__value="5"
var y=If(v,2),w=$f(y),k=If($f(w))
k.__change=[rE,i,t],k.value=k.__value="6"
var S=If(y,2)
eE($f(S),{get onclick(){return t.oldGuildLog},children:(e,t)=>{Kh(e,Vh("Old Guild Log"))},$$slots:{default:!0}})
var x=If(S,2),E=$f(x),C=If($f(E))
C.__change=[rE,i,t],C.value=C.__value="7"
var T=If(x,2),P=$f(T),$=If($f(P))
$.__change=[rE,i,t],$.value=$.__value="8"
var L=If(T,2),I=$f(L),M=If($f(I))
M.__change=[rE,i,t],M.value=M.__value="9"
var R=If(L,2),O=$f(R),A=If($f(O))
A.__change=[rE,i,t],A.value=A.__value="3"
var F=If(R,2),j=$f(F),N=If($f(j))
N.__change=[rE,i,t],N.value=N.__value="10"
var D=$f(If(F,2)),B=If($f(D))
B.__change=[rE,i,t],B.value=B.__value="0"
var q=If(a,2),H=If($f(q),2),U=$f(H)
nE($f(U),{onclick:function(){s(!0),t.selectAll()},children:(e,t)=>{Kh(e,Vh("Select All"))}})
var G=If(U,2)
nE($f(G),{onclick:function(){s(!1),t.selectNone()},children:(e,t)=>{Kh(e,Vh("Select None"))}}),nE($f(If(G,2)),{get onclick(){return t.refresh},children:(e,t)=>{Kh(e,Vh("Refresh"))}})
var W=$f(If(H,2)),z=If($f(W)),V=$f(z),Q=If(V,2)
{let e=Bd((()=>!r()))
ap(Q,(()=>({"--button-deco":"none"}))),eE(Q.lastChild,{get disabled(){return $h(e)},get onclick(){return t.clearSearch},children:(e,t)=>{Kh(e,Vh("×"))},$$slots:{default:!0}})}zp(u,(()=>n()[1]),(e=>n(n()[1]=e,!0))),zp(h,(()=>n()[2]),(e=>n(n()[2]=e,!0))),zp(_,(()=>n()[4]),(e=>n(n()[4]=e,!0))),zp(b,(()=>n()[5]),(e=>n(n()[5]=e,!0))),zp(k,(()=>n()[6]),(e=>n(n()[6]=e,!0))),zp(C,(()=>n()[7]),(e=>n(n()[7]=e,!0))),zp($,(()=>n()[8]),(e=>n(n()[8]=e,!0))),zp(M,(()=>n()[9]),(e=>n(n()[9]=e,!0))),zp(A,(()=>n()[3]),(e=>n(n()[3]=e,!0))),zp(N,(()=>n()[10]),(e=>n(n()[10]=e,!0))),zp(B,(()=>n()[0]),(e=>n(n()[0]=e,!0))),Up(V,r),Kh(e,o),Td()}(o,{cbChange:w,clearSearch:E,oldGuildLog:x,refresh:$,selectAll:k,selectNone:S,get checks(){return $h(r)},set checks(e){gf(r,e,!0)},get searchValue(){return $h(c)},set searchValue(e){gf(c,e,!0)}})
var u=If(o,2),f=If($f(u),4),h=If($f(f)),p=e=>{Kh(e,RE())}
op(h,(e=>{$h(s)&&e(p)})),sp(If(u,2),(()=>$h(a)),(e=>{var t=Qh()
cp(Lf(t),17,(()=>$h(l)),lp,((e,t)=>{var n=AE(),r=Lf(n)
Uf((()=>Yh(r,`${$h(t)??""} `))),Kh(e,n)})),Kh(e,t)}),(e=>{var t=OE()
{const e=(e,t)=>{PE(e,{get groupCombatItems(){return $h(i)},get hideNonPlayerGuildLogMessages(){return $h(s)},get logEntry(){return t?.().item}})}
Hx($f(t),{get items(){return $h(d)},children:e,$$slots:{default:!0}})}Kh(e,t)}),((e,t)=>{var n=Vh()
Uf((()=>Yh(n,$h(t)))),Kh(e,n)})),Kh(e,n)},$$slots:{title:!0,default:!0}})}Td()}const NE=bf({visible:!0})
let DE=0
var BE=Object.freeze({__proto__:null,default:function(){DE?NE.visible=!0:DE=Xh(jE,{props:NE,target:document.body})}})
function qE(){return pS({subcmd:"fetchinv"})}function HE(){return gm(qE)}function UE(e){return pS({subcmd:"inventory",...e})}function GE(){return UE({subcmd2:"report"})}function WE(){return gm(GE)}function zE(e,t,[n,r]){Pc(r)&&null!==r?e[n]=t(r.constructor(),r):e[n]=r}function VE(e,t){return Pc(t)&&s_(t).forEach(Ig(zE,e,VE)),e}function QE(e){return e?.constructor&&VE(e.constructor(),e)}const KE=e=>Math.max(Math.min(e,100),0),JE=e=>`000000${e.toString(16)}`.slice(-6)
var YE=(e,t,n,r)=>{t("backpack"),n(),r()},XE=(e,t,n,r)=>{t("guildstore"),n(),r()},ZE=(e,t,n)=>{t("inventory"),n()},eC=(e,t)=>{$h(t)||gf(t,!0)},tC=(e,t,n)=>{t("mapping"),n()},nC=(e,t)=>{$h(t)||gf(t,!0)},rC=(e,t,n)=>{t("thresholds"),n()},iC=(e,t)=>{$h(t)||gf(t,!0)},sC=zh('<div class="svelte-d6ps8u"> </div> <div class="svelte-d6ps8u"> </div>',1),oC=zh('<div class="inventory svelte-d6ps8u"><div class="inventory-grid-container svelte-d6ps8u"></div></div>'),aC=(e,t,n)=>{t("mapped"),n()},lC=zh("<option> </option>"),cC=zh("<option> </option>"),uC=(e,t,n)=>{t("ignore"),n()},dC=e=>e.target.blur(),fC=zh('<div class="svelte-d6ps8u"> </div> <div class="svelte-d6ps8u"><select class="svelte-d6ps8u"><!></select></div> <div class="svelte-d6ps8u"><input title="Ignore" type="checkbox" class="svelte-d6ps8u"/></div>',1),hC=(e,t,n)=>{t("ignore-all"),n()},pC=(e,t,n)=>{t("reset"),n()},gC=zh('<div class="mapping svelte-d6ps8u"><div class="mapping-grid-container svelte-d6ps8u"><!> <div class="svelte-d6ps8u"></div> <div class="svelte-d6ps8u"><button class="custombutton svelte-d6ps8u" type="button">Ignore All</button> <button class="custombutton svelte-d6ps8u" type="button">Reset</button></div></div></div>'),_C=(e,t,n)=>{t("minpoint"),n()},vC=(e,t,n)=>{t("maxpoint"),n()},mC=zh('<div class="thresholds svelte-d6ps8u">Min: <input max="999" min="0" type="number" class="svelte-d6ps8u"/> Max: <input max="999" min="0" type="number" class="svelte-d6ps8u"/></div>'),bC=zh('<div class="filters svelte-d6ps8u"><label class="svelte-d6ps8u"><input type="checkbox"/> Member Backpacks</label> <label class="svelte-d6ps8u"><input type="checkbox"/> Guild Store</label></div> <div class="pot-report svelte-d6ps8u"><input class="tab-ctrl svelte-d6ps8u" id="pr-inv" type="checkbox"/> <label for="pr-inv" class="svelte-d6ps8u">Composed Potion Inventory</label> <input class="tab-ctrl svelte-d6ps8u" id="pr-map" type="checkbox"/> <label for="pr-map" class="svelte-d6ps8u">Mapping</label> <input class="tab-ctrl svelte-d6ps8u" id="pr-levels" type="checkbox"/> <label for="pr-levels" class="svelte-d6ps8u">Thresholds</label> <div class="panels svelte-d6ps8u"><!> <!> <!></div></div>',1),yC=zh('<p style="color: red"> </p>'),wC=zh('<div class="main svelte-d6ps8u"><!></div>')
function kC(e,t){Cd(t,!0)
const n="fsh_potReport",r={inventory:!1,mapping:!1,thresholds:!1,potMap:[],minpoint:20,maxpoint:30,backpack:!0,guildstore:!0}
let i=ug(t,"visible",15,!0),s=hf(null),o=hf(!1),a=hf(!1),l=hf(!1),c=hf(bf([])),u=[],d=hf(bf([]))
const f=({t:e})=>15===e,h=e=>function(e,t,n){const r=KE((e-t)/(n-t)*100)
let i=255,s=255
return r<50?s=Math.round(5.1*r):i=Math.round(510-5.1*r),`#${JE(65536*i+256*s+0)}`}(e,$h(s).minpoint,$h(s).maxpoint),p=({ignore:e})=>!e,g=e=>({name:t})=>t===e,_=(e,t)=>$m(e.n,t.n),v=({r:e})=>e,m=e=>t_("pot-report",e),b=({player:e,n:t})=>({loc:e?1:2,n:t}),y=()=>Tv(n,kd($h(s))),w=e=>({mapped:t})=>({name:t,count:e.filter((({mapped:e})=>e===t)).length}),k=e=>u.filter((e=>({n:t})=>e.some(g(t)))(e)).filter((({loc:e})=>$h(s).backpack||1!==e)).filter((({loc:e})=>$h(s).guildstore||2!==e)).map((e=>({loc:t,n:n})=>({loc:t,mapped:e.find(g(n)).mapped,n:n}))(e))
function S(){y(),gf(c,function(){const e=$h(s).potMap.filter(p),t=k(e)
return ob(e,"mapped").map(w(t)).sort(((e,t)=>$m(e.name,t.name)))}(),!0),gf(d,$h(s).potMap.map((e=>({...e,waiting:!0}))),!0)}function x(){$h(s).potMap=$h(d).map((({ignore:e,mapped:t,name:n})=>({ignore:e,mapped:t,name:n}))),S()}function E(){$h(s).potMap=$h(s).potMap.map((e=>({...e,ignore:!0}))),S()}function C(){$h(s).potMap=$h(s).potMap.map((e=>({...e,mapped:e.name,ignore:!1}))),S()}async function T(){!async function(){gf(s,await Cv(n)||QE(r),!0),gf(o,$h(s).inventory,!0),gf(a,$h(s).mapping,!0),gf(l,$h(s).thresholds,!0),$h(s).backpack=$h(s).backpack??r.backpack,$h(s).guildstore=$h(s).guildstore??r.guildstore}()
const e=await Lb([HE(),WE()])
if(!Qc(e[0]?.r)||!Qc(e[1]?.r))throw new Error("Server Error")
u=(e=>e.flatMap(v).filter(f).map(b).sort(_))(e),$h(s).potMap=ob(u,"n").map((({n:e})=>({name:e,mapped:$h(s)?.potMap?.find(g(e))?.mapped||e,ignore:$h(s)?.potMap?.find(g(e))?.ignore??!1}))),S()}{const t=e=>{Kh(e,Vh("Pot Report"))}
Xx(e,{close:function(){m("close"),i(!1)},get visible(){return i()},title:t,children:(e,t)=>{var n=wC()
sp($f(n),T,(e=>{Kh(e,Vh("Loading..."))}),(e=>{var t=bC(),n=Lf(t),r=$f(n),i=$f(r)
i.__change=[YE,m,y,S]
var u=$f(If(r,2))
u.__change=[XE,m,y,S]
var f=$f(If(n,2))
f.__change=[ZE,m,y],f.__click=[eC,o]
var p=If(f,4)
p.__change=[tC,m,y],p.__click=[nC,a]
var g=If(p,4)
g.__change=[rC,m,y],g.__click=[iC,l]
var _=$f(If(g,4)),v=e=>{var t=oC()
cp($f(t),21,(()=>$h(c)),lp,((e,t)=>{let n=()=>$h(t).count
var r=sC(),i=Lf(r),s=$f(i),o=If(i,2)
let a
var l=$f(o)
Uf((e=>{Yh(s,$h(t).name),a=Ep(o,"",a,e),Yh(l,n())}),[()=>({"background-color":h(n())})]),Kh(e,r)})),Kh(e,t)}
op(_,(e=>{$h(o)&&e(v)}))
var b=If(_,2),w=e=>{var t=gC(),n=$f(t),r=$f(n)
cp(r,17,(()=>$h(d)),lp,((e,t,n)=>{let r=()=>$h(t).name,i=()=>$h(t).mapped
var s=fC(),o=Lf(s),a=$f(o),l=If(o,2),c=$f(l)
c.__change=[aC,m,x],c.__mousedown=()=>{$h(d)[n].waiting=!1}
var u=$f(c),f=e=>{var t=lC(),n=$f(t),r={}
Uf((()=>{Yh(n,i()),r!==(r=i())&&(t.value=(t.__value=i())??"")})),Kh(e,t)},h=e=>{var t=Qh()
cp(Lf(t),17,(()=>$h(d)),lp,((e,t)=>{let n=()=>$h(t).name
var r=cC(),s=$f(r),o={}
Uf((()=>{var e
e=r,i()===n()?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected"),Yh(s,n()),o!==(o=n())&&(r.value=(r.__value=n())??"")})),Kh(e,r)})),Kh(e,t)}
op(u,(e=>{$h(t).waiting?e(f):e(h,!1)}))
var p=$f(If(l,2))
p.__change=[uC,m,x],p.__click=[dC],Uf((()=>{Yh(a,r()),Mp(c,"name",r())})),Tp(c,(()=>$h(d)[n].mapped),(e=>$h(d)[n].mapped=e)),zp(p,(()=>$h(d)[n].ignore),(e=>$h(d)[n].ignore=e)),Kh(e,s)}))
var i=$f(If(r,4))
i.__click=[hC,m,E],If(i,2).__click=[pC,m,C],Kh(e,t)}
op(b,(e=>{$h(a)&&e(w)}))
var k=If(b,2),T=e=>{var t=mC(),n=If($f(t))
n.__input=[_C,m,S]
var r=If(n,2)
r.__input=[vC,m,S],Up(n,(()=>$h(s).minpoint),(e=>$h(s).minpoint=e)),Up(r,(()=>$h(s).maxpoint),(e=>$h(s).maxpoint=e)),Kh(e,t)}
op(k,(e=>{$h(l)&&e(T)})),zp(i,(()=>$h(s).backpack),(e=>$h(s).backpack=e)),zp(u,(()=>$h(s).guildstore),(e=>$h(s).guildstore=e)),zp(f,(()=>$h(s).inventory),(e=>$h(s).inventory=e)),zp(p,(()=>$h(s).mapping),(e=>$h(s).mapping=e)),zp(g,(()=>$h(s).thresholds),(e=>$h(s).thresholds=e)),Kh(e,t)}),((e,t)=>{var n=yC(),r=$f(n)
Uf((()=>Yh(r,$h(t).message))),Kh(e,n)})),Kh(e,n)},$$slots:{title:!0,default:!0}})}Td()}qh(["change","click","mousedown","input"])
const SC=bf({visible:!0})
let xC=0
var EC=Object.freeze({__proto__:null,default:function(){xC?SC.visible=!0:xC=Xh(kC,{props:SC,target:document.body})}})
function CC(e){return Lm({subcmd:"useitem",inventory_id:e})}function TC(e){return gm(CC,0,e)}function PC(){return Lm({subcmd:"loadinventory"})}function $C(){return gm(PC)}function LC(){return hm({subcmd:"secure"})}const IC=["Perfect","Excellent","Very Good","Good","Average","Poor","Uncrafted"],MC=e=>({bound:e.bn??!1,craft:e.cr?IC[e.cf]:"",...null!==(e.cd??null)&&{durability:e.cd},equipped:e.equipped??!1}),RC=e=>({...e.folder_id&&{folder_id:e.folder_id},forge:e.hf??0,guild_tag:e.tg??-1,inv_id:e.a,item_id:e.b,item_name:e.n,...e.md&&{max_durability:e.md},...e.player?.id&&{player_id:e.player.id},rarity:e.r,stats:{min_level:e.l,set_name:""},type:e.t})
function OC(e){return e?{...MC(e),...RC(e)}:{}}const AC=({id:e,items:t})=>t.map((t=>({...t,folder_id:e})))
function FC(e){return Qc(e?.inventories)?e.inventories.flatMap(AC):[]}const jC=({items:e})=>e.map((({a:e})=>[e,!0]))
async function NC(){const[e,t]=await Lb([$C(),gm(LC)])
if(!e?.s||!t?.s)return
const n=FC(e.r).map(OC),r=_b(t.r.sent.flatMap(jC))
return{items:n.map((e=>({...e,...r?.[e.inv_id]&&{is_in_st:!0}}))),player_id:X_()}}function DC(e,t,n,r){Ec(t,n()),r.dispatchToggle()}var BC=zh('<label><input type="checkbox" class="svelte-f8757j"/> Select items in ST</label>')
function qC(e,t){Cd(t,!0)
let n=ug(t,"inSt",15,null)
const r="selectST"
n(yc(r))
var i=BC(),s=$f(i)
s.__change=[DC,r,n,t],zp(s,n),Kh(e,i),Td()}function HC(e){return`${e.amount} x ${cc[e.type]}`}qh(["change"])
const UC=[[e=>e.components?.length,e=>`You successfully extracted 1 '${e.components?.[0].n}' component(s) from 1 resource(s).`],[e=>e.frags,e=>`You gained ${e.frags.map(HC).join(", ")} Fragments by opening the Fragment Stash.`],[e=>e.mailbox_items?.length,e=>`You received 1 x '${e.mailbox_items?.[0].n}' from the container.`],[()=>1,()=>"<You failed to extract any components from resource(s)."]]
function GC(e){return UC.find((([t])=>t(e)))[1](e)}const WC=(e,t,n)=>`fetchitem.php?item_id=${t}&inv_id=${n}&t=1&p=${e}`,zC=e=>`background-image: url(${$a}items/${e}.gif)`
function VC(e,t,n,r){t_("quickExtract","toggleSelectMain"),Ec(t,$h(n)),r()}function QC(e,t,n){t_("quickExtract","togglePrompts"),Ec(t,$h(n))}var KC=zh('<span class="fshRed"> </span>'),JC=zh('<li class="svelte-g50cgg"><!></li>'),YC=zh('<span class="fshSpinner fshSpinner12"></span>'),XC=zh('<tr><td><!></td><td class="imgCol svelte-g50cgg"><span class="imgSpan tip-dynamic svelte-g50cgg"></span></td><td> </td></tr>'),ZC=zh('<tr><td colspan="3"><p style="color: red"> </p></td></tr>'),eT=zh('<div class="svelte-g50cgg">Select which type of plants you wish to extract all of. Only select\n    extractable resources. <br/> <!>&nbsp; <label><input type="checkbox" class="svelte-g50cgg"/> Main Folder Only</label>&nbsp; <label><input type="checkbox" class="svelte-g50cgg"/> Disable Prompts</label>&nbsp; <!> <br/> <table class="svelte-g50cgg"><thead><tr><th class="actionCol svelte-g50cgg">Actions</th><th colspan="2">Items</th></tr></thead><tbody><tr><td colspan="3"><ol></ol></td></tr><!></tbody></table></div>')
function tT(e,t){Cd(t,!0)
let n=ug(t,"visible",15,!0)
const r="selectMain",i="disableQuickExtractPrompts"
let s=hf(null),o=null,a=hf(null),l=hf(bf(yc(r))),c=hf(bf(yc(i))),u=null,d=hf(null),f=hf(bf([]))
const h=e=>"Zombie Coffin"===e.item_name||12===e.type||16===e.type,p=(e,t)=>$m(e.item_name,t.item_name),g=e=>$h(a)||!e.is_in_st,_=e=>!$h(l)||-1===e.folder_id
function v(){gf(d,Qc(u)&&function(e,t){return ob(t,"item_name").map((n=>({...n,count:t.filter((e=>e.item_name===n.item_name)).length,delPending:!1,extractIds:t.filter((e=>e.item_name===n.item_name)).map((e=>e.inv_id)),style:zC(n.item_id),tip:WC(e,n.item_id,n.inv_id)})))}(o,u.filter(g).filter(_)),!0)}function m(){t_("quickExtract","toggleSelectST"),v()}async function b(){const e=await NC()
o=e?.player_id,u=e?.items?.filter(h).sort(p),v()}function y(){t_("quickExtract","refresh"),gf(f,[],!0),gf(s,b(),!0)}let w
async function k(e){const t=await TC(e);(function(e){return e?.s||w===e?.e?.message||(w=e?.e?.message,gf(f,[...$h(f),e?.e?.message],!0)),e?.s})(t)&&(gf(f,[...$h(f),GC(t.r)],!0),u=u.filter((t=>t.inv_id!==e)))}Nf((()=>{n()&&(gf(f,[],!0),gf(s,b(),!0))}))
{const t=e=>{Kh(e,Vh("Quick Extract"))}
Xx(e,{close:function(){t_("quickExtract","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=eT(),o=If($f(n),3)
qC(o,{dispatchToggle:m,get inSt(){return $h(a)},set inSt(e){gf(a,e,!0)}})
var u=If(o,2),h=$f(u)
h.__change=[VC,r,l,v]
var p=If(u,2),g=$f(p)
g.__change=[QC,i,c]
var _=If(p,2)
nE(_,{onclick:y,children:(e,t)=>{Kh(e,Vh("Refresh"))}})
var b=If(_,4),w=If($f(b)),S=$f(w),x=$f(S)
cp($f(x),21,(()=>$h(f)),lp,((e,t)=>{var n=JC(),r=$f(n),i=e=>{var n=KC(),r=$f(n)
Uf((e=>Yh(r,e)),[()=>$h(t).slice(1)]),Kh(e,n)},s=e=>{var n=Vh()
Uf((()=>Yh(n,$h(t)))),Kh(e,n)}
op(r,(e=>{$h(t).startsWith("<")?e(i):e(s,!1)})),Kh(e,n)})),sp(If(S),(()=>$h(s)),null,(e=>{var t=Qh()
cp(Lf(t),17,(()=>$h(d)),lp,((e,t,n)=>{let r=()=>$h(t).count,i=()=>$h(t).delPending
var s=XC(),o=$f(s)
let a
var l=$f(o),u=e=>{var t=Qh(),s=Lf(t),o=e=>{Kh(e,YC())},a=e=>{eE(e,{onclick:()=>async function(e){t_("quickExtract","extract",$h(c)),($h(c)||await Ck("Are you sure you want to extract all similar items?"))&&($h(d)[e].delPending=!0,await Lb($h(d)[e].extractIds.map(k)),$h(d)[e]?.count&&($h(d)[e].count=0))}(n),children:(e,t)=>{var n=Vh()
Uf((()=>Yh(n,`Extract ${r()??""}`))),Kh(e,n)},$$slots:{default:!0}})}
op(s,(e=>{i()?e(o):e(a,!1)})),Kh(e,t)},f=e=>{Kh(e,Vh("Done"))}
op(l,(e=>{r()?e(u):e(f,!1)}))
var h=If(o),p=$f(h),g=$f(If(h))
Uf((e=>{a=Sp(o,0,"svelte-g50cgg",null,a,e),Mp(p,"data-tipped",$h(t).tip),Ep(p,$h(t).style),Yh(g,$h(t).item_name)}),[()=>({delPending:i()})]),Kh(e,s)})),Kh(e,t)}),((e,t)=>{var n=ZC(),r=$f(n),i=$f(r),s=$f(i)
Uf((()=>Yh(s,$h(t).message))),Kh(e,n)})),zp(h,(()=>$h(l)),(e=>gf(l,e))),zp(g,(()=>$h(c)),(e=>gf(c,e))),Kh(e,n)},$$slots:{title:!0,default:!0}})}Td()}qh(["change"])
const nT=bf({visible:!0})
let rT=0
var iT=Object.freeze({__proto__:null,default:function(){rT?nT.visible=!0:rT=Xh(tT,{props:nT,target:document.body})}})
function sT(e,t){return`<a href="${Xa}${e}">${t}</a>`}var oT=zh("<input/>"),aT=zh("<option> </option>"),lT=zh("<select><option> </option><!></select>"),cT=zh("<th><!></th>"),uT=zh("<th></th>"),dT=zh('<tr class="svelte-dsaf7t"><!><!></tr>'),fT=(e,t,n)=>t(e,$h(n)),hT=zh('<th tabindex="0"> <!></th>'),pT=zh("<th></th>"),gT=zh("<tr><!><!></tr>"),_T=(e,t,n)=>t(e,$h(n)),vT=(e,t,n,r)=>t(e,$h(n),$h(r).key),mT=zh("<td><!></td>"),bT=(e,t,n)=>t(e,$h(n)),yT=zh('<td><span class="isClickable svelte-dsaf7t" tabindex="0" role="button"><!></span></td>'),wT=zh("<tr><td><!></td></tr>"),kT=zh("<tr><!><!></tr> <!>",1),ST=zh("<table><thead><!><!></thead><tbody></tbody></table>")
function xT(e,t){Cd(t,!0)
let n=ug(t,"sortOrders",19,(()=>[1,-1])),r=ug(t,"sortBy",15,""),i=ug(t,"sortOrder",31,(()=>bf(n()?.[0]||1))),s=ug(t,"filterSelections",31,(()=>bf({}))),o=ug(t,"expanded",31,(()=>bf([]))),a=ug(t,"selected",31,(()=>bf([]))),l=ug(t,"expandRowKey",3,null),c=ug(t,"rowKey",19,l),u=ug(t,"expandSingle",3,!1),d=ug(t,"selectSingle",3,!1),f=ug(t,"selectOnClick",3,!1),h=ug(t,"iconAsc",3,"▲"),p=ug(t,"iconDesc",3,"▼"),g=ug(t,"iconSortable",3,""),_=ug(t,"iconExpand",3,"▼"),v=ug(t,"iconExpanded",3,"▲"),m=ug(t,"showExpandIcon",3,!1),b=ug(t,"classNameTable",3,""),y=ug(t,"classNameThead",3,""),w=ug(t,"classNameTbody",3,""),k=ug(t,"classNameSelect",3,""),S=ug(t,"classNameInput",3,""),x=ug(t,"classNameRow",3,null),E=ug(t,"classNameCell",3,""),C=ug(t,"classNameRowSelected",3,null),T=ug(t,"classNameRowExpanded",3,null),P=ug(t,"classNameExpandedContent",3,""),$=ug(t,"classNameCellExpand",3,""),L=ug(t,"clickCol",3,(()=>{})),I=ug(t,"clickRow",3,(()=>{})),M=ug(t,"clickExpand",3,(()=>{})),R=ug(t,"clickCell",3,(()=>{})),O=hf((()=>""))
if(!Array.isArray(o()))throw"'expanded' needs to be an array"
if(!Array.isArray(a()))throw"'selection' needs to be an array"
null!==l()&&console.warn("'expandRowKey' is deprecated in favour of 'rowKey'"),C()&&!c()&&console.error("'rowKey' is needed to use 'classNameRowSelected'")
let A=t.columns.some((e=>!e.hideFilterHeader&&(void 0!==e.filterOptions||void 0!==e.searchValue))),F=hf(bf({}))
const j=Bd((()=>Object.fromEntries(t.columns.map((e=>[e.key,e])))))
let N=Bd((()=>(m()?1:0)+t.columns.length))
const D=Bd((()=>t.rows.filter((e=>Object.keys(s()).every((t=>{let n=null
if(void 0===$h(j)[t])return!0
if($h(j)[t]?.searchValue){if(""===s()[t])return!0
1===$h(j)[t].searchValue.length?n=($h(j)[t].searchValue(e)+"").toLocaleLowerCase().indexOf((s()[t]+"").toLocaleLowerCase())>=0:2===$h(j)[t].searchValue.length&&(n=!!$h(j)[t].searchValue(e,s()[t]+""))}else n=!1
return n||void 0===s()[t]||s()[t]===("function"==typeof $h(j)[t].filterValue?$h(j)[t].filterValue(e):$h(j)[t].value(e))})))).map((e=>Object.assign({},e,{$sortOn:$h(O)(e),$expanded:null!==c()&&o().indexOf(e[c()])>=0,$selected:null!==c()&&a().indexOf(e[c()])>=0}))).sort(((e,t)=>r()?e.$sortOn>t.$sortOn?i():e.$sortOn<t.$sortOn?-i():0:0)))),B=e=>[].concat(e).filter((e=>null!==e&&"string"==typeof e&&""!==e)).join(" ")
Nf((()=>{let e=$h(j)[r()]
void 0!==e&&!0===e.sortable&&"function"==typeof e.value&&gf(O,(t=>e.value(t)))})),Nf((()=>{A&&t.columns&&t.rows&&(gf(F,{},!0),t.columns.forEach((e=>{"function"==typeof e.filterOptions?$h(F)[e.key]=e.filterOptions(t.rows):Array.isArray(e.filterOptions)&&($h(F)[e.key]=e.filterOptions.map((e=>({name:e,value:e}))))})))}))
const q=(e,t)=>{t.sortable&&(i(t.key===r()?n()[(n().findIndex((e=>e===i()))+1)%n().length]:n()[0]),r(i()?t.key:void 0)),L()({event:e,col:t,key:t.key})},H=(e,t)=>{f()&&(d()?a().includes(t[c()])?a([]):a([t[c()]]):a().includes(t[c()])?a(a().filter((e=>e!=t[c()]))):a([...a(),t[c()]].sort())),I()({event:e,row:t})},U=(e,t)=>{t.$expanded=!t.$expanded
const n=t[c()]
u()&&t.$expanded?o([n]):u()?o([]):t.$expanded?o([...o(),n]):o(o().filter((e=>e!=n))),M()({event:e,row:t})},G=(e,t,n)=>{R()({event:e,row:t,key:n})}
var W=ST(),z=$f(W),V=$f(z),Q=e=>{var n=dT(),r=$f(n)
cp(r,17,(()=>t.columns),lp,((e,t)=>{var n=cT(),r=$f(n),i=e=>{var n=oT()
Uf((e=>{Sp(n,0,e,"svelte-dsaf7t"),Mp(n,"placeholder",$h(t).filterPlaceholder)}),[()=>bp(B(S()))]),Up(n,(()=>s()[$h(t).key]),(e=>s(s()[$h(t).key]=e,!0))),Kh(e,n)},o=e=>{var n=Qh(),r=Lf(n),i=e=>{var n=lT(),r=$f(n),i=$f(r)
r.value=(r.__value=void 0)??"",cp(If(r),17,(()=>$h(F)[$h(t).key]),lp,((e,t)=>{var n=aT(),r=$f(n),i={}
Uf((()=>{Yh(r,$h(t).name),i!==(i=$h(t).value)&&(n.value=(n.__value=$h(t).value)??"")})),Kh(e,n)})),Uf((e=>{Sp(n,0,e,"svelte-dsaf7t"),Yh(i,$h(t).filterPlaceholder||"")}),[()=>bp(B(k()))]),Tp(n,(()=>s()[$h(t).key]),(e=>s(s()[$h(t).key]=e,!0))),Kh(e,n)}
op(r,(e=>{$h(t).hideFilterHeader||void 0===$h(F)[$h(t).key]||e(i)}),!0),Kh(e,n)}
op(r,(e=>{$h(t).hideFilterHeader||void 0===$h(t).searchValue?e(o,!1):e(i)})),Uf((e=>Sp(n,0,e,"svelte-dsaf7t")),[()=>bp(B([$h(t).headerFilterClass]))]),Kh(e,n)}))
var i=If(r),o=e=>{Kh(e,uT())}
op(i,(e=>{m()&&e(o)})),Kh(e,n)}
op(V,(e=>{A&&e(Q)}))
var K=If(V),J=e=>{var n=Qh()
gp(Lf(n),(()=>t.svelteTableHeader),(()=>({sortOrder:i(),sortBy:r()}))),Kh(e,n)},Y=e=>{var n=gT(),s=$f(n)
cp(s,17,(()=>t.columns),lp,((e,t)=>{var n=hT()
n.__click=[fT,q,t]
var s=$f(n),o=If(s),a=e=>{var t=Qh()
pp(Lf(t),(()=>1===i()?h():p())),Kh(e,t)},l=e=>{var n=Qh(),r=Lf(n),i=e=>{var t=Qh()
pp(Lf(t),g),Kh(e,t)}
op(r,(e=>{$h(t).sortable&&e(i)}),!0),Kh(e,n)}
op(o,(e=>{r()===$h(t).key?e(a):e(l,!1)})),Uf((e=>{Sp(n,0,e,"svelte-dsaf7t"),Yh(s,`${$h(t).title??""} `)}),[()=>bp(B([$h(t).sortable?"isSortable":"",$h(t).headerClass]))]),Bh("keypress",n,(e=>"Enter"===e.key&&q(e,$h(t)))),Kh(e,n)}))
var o=If(s),a=e=>{Kh(e,pT())}
op(o,(e=>{m()&&e(a)})),Kh(e,n)}
op(K,(e=>{t.svelteTableHeader?e(J):e(Y,!1)}))
var X=If(z)
cp(X,21,(()=>$h(D)),lp,((e,n,r)=>{var i=Qh(),s=Lf(i),o=e=>{var i=Qh()
gp(Lf(i),(()=>t.svelteTableRow),(()=>({row:$h(n),n:r}))),Kh(e,i)},a=e=>{var i=kT(),s=Lf(i)
s.__click=[_T,H,n]
var o=$f(s)
cp(o,17,(()=>t.columns),lp,((e,t,i)=>{var s=mT()
s.__click=[vT,G,n,t]
var o=$f(s),a=e=>{const r=Bd((()=>$h(t).renderComponent.component||$h(t).renderComponent))
var i=Qh()
_p(Lf(i),(()=>$h(r)),((e,r)=>{r(e,function(...e){return new Proxy({props:e},cg)}((()=>$h(t).renderComponent.props||{}),{get row(){return $h(n)},get col(){return $h(t)}}))})),Kh(e,i)},l=e=>{var s=Qh(),o=Lf(s),a=e=>{var s=Qh()
pp(Lf(s),(()=>$h(t).renderValue?$h(t).renderValue($h(n),r,i):$h(t).value($h(n),r,i))),Kh(e,s)},l=e=>{var s=Vh()
Uf((e=>Yh(s,e)),[()=>$h(t).renderValue?$h(t).renderValue($h(n),r,i):$h(t).value($h(n),r,i)]),Kh(e,s)}
op(o,(e=>{$h(t).parseHTML?e(a):e(l,!1)}),!0),Kh(e,s)}
op(o,(e=>{$h(t).renderComponent?e(a):e(l,!1)})),Uf((e=>Sp(s,0,e,"svelte-dsaf7t")),[()=>bp(B(["string"==typeof $h(t).class?$h(t).class:null,"function"==typeof $h(t).class?$h(t).class($h(n),r,i):null,E()]))]),Bh("keypress",s,(e=>"Enter"===e.key&&G(e,$h(n),$h(t).key))),Kh(e,s)}))
var a=If(o),l=e=>{var t=yT(),r=$f(t)
r.__click=[bT,U,n],pp($f(r),(()=>$h(n).$expanded?_():v())),Uf((e=>Sp(t,0,e,"svelte-dsaf7t")),[()=>bp(B($()))]),Bh("keypress",r,(e=>"Enter"===e.key&&U(e,$h(n)))),Kh(e,t)}
op(a,(e=>{m()&&e(l)}))
var c=If(s,2),u=e=>{var i=wT(),s=$f(i)
gp($f(s),(()=>t.svelteTableExpanded??Su),(()=>({row:$h(n),n:r}))),Uf((e=>{Sp(i,0,e,"svelte-dsaf7t"),Mp(s,"colspan",$h(N))}),[()=>bp(B(P()))]),Kh(e,i)}
op(c,(e=>{$h(n).$expanded&&e(u)})),Uf((e=>{Sp(s,0,e,"svelte-dsaf7t"),Mp(s,"tabindex",f()?"0":null)}),[()=>bp(B(["string"==typeof x()?x():null,"function"==typeof x()?x()($h(n),r):null,$h(n).$expanded&&T(),$h(n).$selected&&C()]))]),Bh("keypress",s,(e=>"Enter"===e.key&&H(e,$h(n)))),Kh(e,i)}
op(s,(e=>{t.svelteTableRow?e(o):e(a,!1)})),Kh(e,i)})),Uf(((e,t,n)=>{Sp(W,0,e,"svelte-dsaf7t"),Sp(z,0,t,"svelte-dsaf7t"),Sp(X,0,n,"svelte-dsaf7t")}),[()=>bp(B(b())),()=>bp(B(y())),()=>bp(B(w()))]),Kh(e,W),Td()}function ET(e){return new Intl.NumberFormat("en-us").format(e)}qh(["click"])
var CT=zh('<div class="content svelte-u19tu"><!></div>')
function TT(e,t){Cd(t,!0)
let n=ug(t,"visible",15,!0)
const r=[{key:"slot",title:"Slot",value:e=>e.slot,sortable:!0},{key:"name",title:"Name",value:e=>e.name,sortable:!0,renderValue:e=>sT(e.id,e.name),parseHTML:!0},{key:"level",title:"Level",value:e=>e.level,sortable:!0},{key:"rank",title:"Rank",value:e=>e.rank,sortable:!0},{key:"guild_xp",title:"GXP",value:e=>e.guild_xp,sortable:!0,renderValue:e=>ET(e.guild_xp)},{key:"activity",title:"Activity",value:e=>e.activity,sortable:!0},{key:"pack",title:"Pack",value:e=>e.pack,sortable:!0},{key:"max_stamina",title:"Stam",value:e=>e.max_stamina,sortable:!0,renderValue:e=>ET(e.max_stamina)}]
let i=hf(bf([]))
const s=({equipped:e})=>!e,o=({player:{id:e}})=>e,a=e=>e.members,l=e=>e.r.flatMap(a),c=e=>(t,n)=>({...t,slot:n+1,activity:bb(t.last_activity),pack:e[t.id]??0})
async function u(){const[e,t]=await Lb([WE(),gb()])
if(e?.s&&t?.s){const n=function([e,t]){const n=e.r.filter(s).map(o),r=_b(ob(n).map((e=>[e,n.filter((t=>t===e)).length])))
return l(t).map(c(r))}([e,t])
gf(i,n,!0)}}const d=Bd((()=>{if(n())return u()}))
{const t=e=>{Kh(e,Vh("Who's Got What"))}
Xx(e,{close:function(){t_("Whos Got What","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=CT()
sp($f(n),(()=>$h(d)),(e=>{Kh(e,Vh("Loading..."))}),(e=>{xT(e,{classNameTable:"whos-got-what",get columns(){return r},get rows(){return $h(i)}})}),((e,t)=>{var n=Vh()
Uf((()=>Yh(n,$h(t)))),Kh(e,n)})),Kh(e,n)},$$slots:{title:!0,default:!0}})}Td()}const PT=bf({visible:!0})
let $T=0
var LT=Object.freeze({__proto__:null,default:function(){$T?PT.visible=!0:$T=Xh(TT,{props:PT,target:document.body})}})
const IT=()=>{v_(import("./inventory-BJBLm-v6.js"))},MT=()=>{v_(import("./bazaar-cPEaQcSj.js"))}
function RT(){v_(import("./injectQuestBookFull-CL3T6wOa.js"))}const OT=()=>{v_(import("./scavenging-Dm4lqYda.js"))}
const AT=()=>{v_(import("./toprated-DAvMxNyJ.js"))}
const FT=()=>{v_(import("./trade-CHkbYJ1v.js"))}
var jT={creatures:{"-":{"-":Rx}},items:Ox,masterrealms:{"-":{"-":Rx}},quests:{"-":{"-":Rx},view:{"-":()=>{v_(import("./showAllQuestSteps-DUF1x0Wu.js"))}}},realms:{"-":{"-":Rx}},relics:{"-":{"-":Rx}},shops:{"-":{"-":Rx}},"-":Dx,arena:wx,auctionhouse:kx,bank:{"-":{"-":()=>{v_(import("./injectBank-BLAKD_cb.js"))}}},blacksmith:{repairall:{"-":function(){uu("fromworld")&&yx()}}},buffmarket:{"-":{"-":()=>{v_(import("./injectBuffmarket-Bmp7f0aE.js"))}},add:{"-":()=>{v_(import("./injectBigBuffPacakges-BGSng1m_.js"))}},manage:{"-":()=>{v_(import("./injectManage-BAfkr7ew.js"))}}},combat:{attackplayer:{"-":Ax}},composing:Sx,findplayer:{"-":{"-":()=>{v_(import("./findplayer-D6As6me0.js"))}}},guild:Lx,hellforge:{"-":{"-":()=>{v_(import("./hellforge-DT0os4Bx.js"))}}},inventing:Mx,log:{"-":{"-":()=>{v_(import("./playerLog-BOwMJMPp.js"))}}},marketplace:{createreq:{"-":()=>{v_(import("./marketplace-CwZGlm8A.js"))}}},news:Nx,notepad:{showlogs:{"-":b_},invmanagernew:{"-":IT},guildinvmgr:{"-":IT},recipemanager:{"-":I_},auctionsearch:{"-":x_},onlineplayers:{"-":T_},quicklinkmanager:{"-":$_},monsterlog:{"-":y_},quickextract:{"-":P_},quickwear:{"-":L_},fsboxcontent:{"-":w_},bufflogcontent:{"-":m_},newguildlog:{"-":k_},findbuffs:{"-":E_},findother:{"-":C_},savesettings:{"-":()=>{v_(import("./load-BBOIi_cq.js"))}},reliclist:{"-":M_},"-":{"-":function(){}}},points:{"-":{"-":()=>{v_(import("./points-Cutdy4AX.js"))}}},potionbazaar:{"-":{"-":MT},buyitem:{"-":MT}},privatemessage:{"-":{"-":()=>{v_(import("./privateMsg-BgDGPjAe.js"))}}},profile:{"-":{"-":Ax},managecombatset:{"-":Ax},report:{"-":Ax},equipitem:{"-":Ax},useitem:{"-":Ax},changebio:{"-":xx},dropitems:{"-":function(){v_(import("./injectProfileDropItems-ChlL6RIc.js"))}}},pvpladder:{"-":{"-":()=>{v_(import("./ladder-BSDPD67W.js"))}}},questbook:{"-":{"-":RT},atoz:{"-":RT},viewquest:{"-":()=>{v_(import("./injectQuestTracker-_1-3LDmc.js"))}}},quickbuff:{"-":{"-":()=>{v_(import("./quickBuff-C6TMCCp1.js"))}}},scavenging:{"-":{"-":OT},process:{"-":OT}},settings:{"-":{"-":()=>{v_(import("./injectSettings-CItJ0hqi.js"))}}},skills:{"-":{"-":()=>{}}},tempinv:{"-":{"-":()=>{v_(import("./mailbox-BuzXfpsv.js"))}}},temple:{"-":{"-":FS}},titan:{"-":{"-":()=>{v_(import("./injectTitan-BL-kC_X_.js"))}}},toprated:{xp:{"-":AT},monthlyxp:{"-":AT},gold:{"-":AT},killstreak:{"-":AT},bounties:{"-":AT},risingstars:{"-":AT},arena:{"-":AT},superelites:{"-":AT},smasher:{"-":AT},globalquest:{"-":()=>{v_(import("./globalQuest-Cq6zzOB5.js"))}}},trade:{"-":{"-":FT},sendgold:{"-":FT},createsecure:{"-":FT},docreatesecure:{"-":FT}},world:{"-":{"-":yx}}}
function NT(e){return l_("ul",e)}const DT=()=>c_({className:"fshQuickLinks",style:{left:`${yc("quickLinksLeftPx")}px`,top:`${yc("quickLinksTopPx")}px`}}),BT=e=>"newWindow"in e&&e.url&&e.name
function qT(e,t){const n=f_(t,NT())
e.filter(BT).forEach((e=>{f_(f_(n,dy()),function(e){const t=W_({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return Wm(t,(()=>t_("chrome","quick link",e.name))),t}(e))}))}function HT(){if(!Lc(".mainbody"))return
const e=Uy("quickLinks")||[]
e.length&&function(e){const t=DT()
t.classList.toggle("fshFixed",yc("keepHelperMenuOnScreen")),yc("draggableQuickLinks")&&(t.classList.add("fshMove"),Xg(t)),qT(e,t),f_(document.body,t)}(e)}let UT=0,GT=0,WT=0,zT="",VT=0,QT=0
function KT(e){return uu(e)||"-"}function JT(e){const t=Lc(e)
return t?.value||"-"}function YT(){if(Pc(jT[UT])&&Pc(jT[UT][GT])&&Tc(jT[UT][GT][WT]))return jT[UT][GT][WT]}function XT(){""!==document.location.search?(UT=KT("cmd"),GT=KT("subcmd"),WT=KT("subcmd2"),["points","privatemessage"].includes(UT)&&(zT=`/${KT("type")}`)):(UT=JT('input[name="cmd"]'),GT=JT('input[name="subcmd"]'),WT=JT('input[name="subcmd2"]')),Vc.cmd=UT,Vc.subcmd=GT,Vc.subcmd2=WT,QT=`${UT}/${GT}/${WT}${zT}`,VT=YT()}function ZT(){Tc(VT)&&(Cc(QT),VT())}async function eP(e){XT(),await e,bx(),lu(3,ZT),yc("playNewMessageSound")&&lu(3,Ng),eb()||lu(3,HT)}const tP=[()=>!("showPicker"in HTMLSelectElement.prototype),()=>!navigator.cookieEnabled,()=>window!==window.parent,function(){if(!d){const e=l(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
u=c.includes(e),d=!0}return u}]
function nP(e,t){if(tP.some((e=>e())))return
const n=Ic("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
qc(),function(e,t){Vc.gmInfo=$c(decodeURIComponent(t)),Vc.gmInfo?Vc.fshVer=e:Vc.fshVer=`${e}_native`,Vc.calfVer="152"}(e,t),o(),ua(),eP(n)}export{gm as $,ug as A,bk as B,zh as C,If as D,Lf as E,$f as F,cp as G,op as H,Up as I,gf as J,$h as K,pf as L,kk as M,Kh as N,Td as O,Bh as P,Uf as Q,Yh as R,Em as S,Mp as T,Ih as U,Wp as V,fm as W,Ym as X,Yl as Y,hc as Z,W_ as _,ym as a,pE as a$,gl as a0,Lb as a1,H_ as a2,Dy as a3,uy as a4,Tg as a5,fy as a6,Dg as a7,ib as a8,Oa as a9,Wc as aA,yc as aB,d_ as aC,ll as aD,$k as aE,sp as aF,Qh as aG,wc as aH,zp as aI,ka as aJ,ya as aK,Uw as aL,Jl as aM,ET as aN,US as aO,$g as aP,qw as aQ,Nw as aR,Gy as aS,Pm as aT,Aw as aU,DS as aV,el as aW,tl as aX,cu as aY,yl as aZ,Ja as a_,NT as aa,s_ as ab,Ow as ac,J_ as ad,Qc as ae,K_ as af,vm as ag,_m as ah,gc as ai,_c as aj,zm as ak,hf as al,bf as am,Uy as an,Tp as ao,Iy as ap,qh as aq,Pk as ar,uu as as,Ck as at,b_ as au,y_ as av,Ec as aw,yb as ax,xy as ay,Vc as az,Gc as b,Ca as b$,fc as b0,Gw as b1,jy as b2,Cg as b3,hy as b4,s as b5,Ul as b6,Tl as b7,Pl as b8,Rl as b9,_l as bA,dl as bB,ob as bC,Ph as bD,Sp as bE,Cv as bF,Tv as bG,pS as bH,Ib as bI,Ma as bJ,Al as bK,Dl as bL,lp as bM,eE as bN,Ia as bO,Bw as bP,ml as bQ,ng as bR,tg as bS,Lw as bT,Ba as bU,bS as bV,Kc as bW,pc as bX,$b as bY,$m as bZ,xa as b_,$l as ba,$S as bb,X_ as bc,pl as bd,Wa as be,El as bf,z_ as bg,$a as bh,jl as bi,B_ as bj,$c as bk,lu as bl,uk as bm,u_ as bn,rc as bo,nc as bp,sc as bq,ic as br,oc as bs,Eg as bt,Pg as bu,Tc as bv,Pa as bw,Cl as bx,Bd as by,Vh as bz,Ig as c,Ny as c$,Xa as c0,fg as c1,lg as c2,og as c3,Nl as c4,tp as c5,Ml as c6,Hl as c7,Gl as c8,Wl as c9,bl as cA,q_ as cB,oS as cC,zx as cD,zl as cE,Gm as cF,Vx as cG,Vl as cH,Ra as cI,iS as cJ,vb as cK,sT as cL,ol as cM,Zl as cN,yd as cO,xd as cP,Bf as cQ,Nf as cR,Eu as cS,xu as cT,Oh as cU,Nd as cV,fk as cW,tc as cX,Ql as cY,Ha as cZ,Fw as c_,Sm as ca,km as cb,xm as cc,Ll as cd,Il as ce,Bl as cf,ba as cg,Fl as ch,Rw as ci,Xm as cj,Wy as ck,bm as cl,Sa as cm,Lm as cn,bp as co,uc as cp,Mm as cq,Pc as cr,vc as cs,dk as ct,Xl as cu,i_ as cv,dc as cw,nl as cx,GS as cy,zc as cz,$C as d,Xp as d$,wa as d0,a as d1,la as d2,dv as d3,Pv as d4,gS as d5,e as d6,Ic as d7,v_ as d8,NC as d9,UE as dA,Qv as dB,Nv as dC,Bv as dD,qv as dE,Dv as dF,Wv as dG,TC as dH,hm as dI,lc as dJ,mb as dK,Ep as dL,Ua as dM,Aa as dN,Ly as dO,Na as dP,Da as dQ,Kl as dR,S_ as dS,ul as dT,Ga as dU,dy as dV,qa as dW,vS as dX,jw as dY,ja as dZ,Ex as d_,qC as da,vp as db,ap as dc,Cu as dd,Um as de,kd as df,nE as dg,Qa as dh,Ta as di,ac as dj,sb as dk,ec as dl,Cc as dm,Fx as dn,RT as dp,Ix as dq,Rb as dr,Mb as ds,U_ as dt,WE as du,HE as dv,OC as dw,G_ as dx,QE as dy,La as dz,h_ as e,qp as e0,bg as e1,wl as e2,kl as e3,Xx as e4,Ip as e5,kc as e6,nb as e7,Ya as e8,_p as e9,Va as eA,sl as eB,mh as eC,ff as eD,vf as eE,P_ as eF,rg as eG,__ as eH,L_ as eI,Za as eJ,nP as eK,il as ea,Hx as eb,Qx as ec,xl as ed,Hw as ee,tb as ef,Fb as eg,Eb as eh,Ab as ei,Sb as ej,Cb as ek,kb as el,xb as em,Tb as en,wb as eo,Pb as ep,zb as eq,Ub as er,Wb as es,Gb as et,Db as eu,sE as ev,ag as ew,px as ex,ox as ey,Fm as ez,FC as f,t as g,_b as h,f_ as i,mm as j,Vm as k,rb as l,Ak as m,n,Wm as o,Fg as p,Lc as q,l as r,t_ as s,xg as t,Xh as u,l_ as v,c_ as w,_u as x,jf as y,Cd as z}
//# sourceMappingURL=calfSystem-BlPuMQGT.js.map
