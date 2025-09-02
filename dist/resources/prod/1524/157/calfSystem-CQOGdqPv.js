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
n[r]=e[r]}return n}var p="undefined"!=typeof window?window:void 0,g="undefined"!=typeof globalThis?globalThis:p,v=Array.prototype,_=v.forEach,m=v.indexOf,b=null==g?void 0:g.navigator,y=null==g?void 0:g.document,w=null==g?void 0:g.location,k=null==g?void 0:g.fetch,S=null!=g&&g.XMLHttpRequest&&"withCredentials"in new g.XMLHttpRequest?g.XMLHttpRequest:void 0,x=null==g?void 0:g.AbortController,E=null==b?void 0:b.userAgent,C=null!=p?p:{},T={DEBUG:!1,LIB_VERSION:"1.261.0"},P=["$snapshot","$pageview","$pageleave","$set","survey dismissed","survey sent","survey shown","$identify","$groupidentify","$create_alias","$$client_ingestion_warning","$web_experiment_applied","$feature_enrollment_update","$feature_flag_called"]
function L(e,t){return-1!==e.indexOf(t)}var I=function(e){return e.trim()},M=function(e){return e.replace(/^\$/,"")},O=Array.isArray,R=Object.prototype,A=R.hasOwnProperty,F=R.toString,j=O||function(e){return"[object Array]"===F.call(e)},N=e=>"function"==typeof e,D=e=>e===Object(e)&&!j(e),B=e=>{if(D(e)){for(var t in e)if(A.call(e,t))return!1
return!0}return!1},q=e=>void 0===e,H=e=>"[object String]"==F.call(e),U=e=>H(e)&&0===e.trim().length,G=e=>null===e,W=e=>q(e)||G(e),z=e=>"[object Number]"==F.call(e),V=e=>"[object Boolean]"===F.call(e),Q=e=>L(P,e),J=[!0,"true",1,"1","yes"],K=e=>L(J,e),Y=[!1,"false",0,"0","no"]
function X(e,t,n,r,i){return t>n&&(r.warn("min cannot be greater than max."),t=n),z(e)?e>n?(r.warn(" cannot be  greater than max: "+n+". Using max value instead."),n):e<t?(r.warn(" cannot be less than min: "+t+". Using min value instead."),t):e:(r.warn(" must be a number. using max or fallback. max: "+n+", fallback: "+i),X(i||n,t,n,r))}class Z{stop(){this._removeInterval&&(clearInterval(this._removeInterval),this._removeInterval=void 0)}constructor(e){this._options=e,this._buckets={},this._refillBuckets=()=>{Object.keys(this._buckets).forEach(e=>{var t=this._getBucket(e)+this._refillRate
t>=this._bucketSize?delete this._buckets[e]:this._setBucket(e,t)})},this._getBucket=e=>this._buckets[String(e)],this._setBucket=(e,t)=>{this._buckets[String(e)]=t},this.consumeRateLimit=e=>{var t,n=null!=(t=this._getBucket(e))?t:this._bucketSize
if(0===(n=Math.max(n-1,0)))return!0
this._setBucket(e,n)
var r,i=0===n
return i&&(null==(r=this._onBucketRateLimited)||r.call(this,e)),i},this._onBucketRateLimited=this._options._onBucketRateLimited,this._bucketSize=X(this._options.bucketSize,0,100,this._options._logger),this._refillRate=X(this._options.refillRate,0,this._bucketSize,this._options._logger),this._refillInterval=X(this._options.refillInterval,0,864e5,this._options._logger),this._removeInterval=setInterval(()=>{this._refillBuckets()},this._refillInterval)}}var ee=e=>{var t={_log:function(t){if(p&&(T.DEBUG||C.POSTHOG_DEBUG)&&!q(p.console)&&p.console){for(var n=("__rrweb_original__"in p.console[t]?p.console[t].__rrweb_original__:p.console[t]),r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s]
n(e,...i)}},info:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("log",...n)},warn:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("warn",...n)},error:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("error",...n)},critical:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
console.error(e,...n)},uninitializedWarning:e=>{t.error("You must initialize PostHog before calling "+e)},createLogger:t=>ee(e+" "+t)}
return t},te=ee("[PostHog.js]"),ne=te.createLogger,re={}
function ie(e,t,n){if(j(e))if(_&&e.forEach===_)e.forEach(t,n)
else if("length"in e&&e.length===+e.length)for(var r=0,i=e.length;r<i;r++)if(r in e&&t.call(n,e[r],r)===re)return}function se(e,t,n){if(!W(e)){if(j(e))return ie(e,t,n)
if((e=>e instanceof FormData)(e)){for(var r of e.entries())if(t.call(n,r[1],r[0])===re)return}else for(var i in e)if(A.call(e,i)&&t.call(n,e[i],i)===re)return}}var oe=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return ie(n,function(t){for(var n in t)void 0!==t[n]&&(e[n]=t[n])}),e},ae=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return ie(n,function(t){ie(t,function(t){e.push(t)})}),e}
function le(e){for(var t=Object.keys(e),n=t.length,r=new Array(n);n--;)r[n]=[t[n],e[t[n]]]
return r}var ce=function(e){try{return e()}catch(e){return}},ue=function(e){return function(){try{for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return e.apply(this,n)}catch(e){te.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."),te.critical(e)}}},de=function(e){var t={}
return se(e,function(e,n){(H(e)&&e.length>0||z(e))&&(t[n]=e)}),t}
var fe=["herokuapp.com","vercel.app","netlify.app"]
function he(e){var t=null==e?void 0:e.hostname
if(!H(t))return!1
var n=t.split(".").slice(-2).join(".")
for(var r of fe)if(n===r)return!1
return!0}function pe(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}function ge(e,t,n,r){var{capture:i=!1,passive:s=!0}=null!=r?r:{}
null==e||e.addEventListener(t,n,{capture:i,passive:s})}var ve="$people_distinct_id",_e="__alias",me="__timers",be="$autocapture_disabled_server_side",ye="$heatmaps_enabled_server_side",we="$exception_capture_enabled_server_side",ke="$error_tracking_suppression_rules",Se="$error_tracking_capture_extension_exceptions",xe="$web_vitals_enabled_server_side",Ee="$dead_clicks_enabled_server_side",Ce="$web_vitals_allowed_metrics",Te="$session_recording_enabled_server_side",Pe="$console_log_recording_enabled_server_side",$e="$session_recording_network_payload_capture",Le="$session_recording_masking",Ie="$session_recording_canvas_recording",Me="$replay_sample_rate",Oe="$replay_minimum_duration",Re="$replay_script_config",Ae="$sesid",Fe="$session_is_sampled",je="$session_recording_url_trigger_activated_session",Ne="$session_recording_event_trigger_activated_session",De="$enabled_feature_flags",Be="$early_access_features",qe="$feature_flag_details",He="$stored_person_properties",Ue="$stored_group_properties",Ge="$surveys",We="$surveys_activated",ze="$flag_call_reported",Ve="$user_state",Qe="$client_session_props",Je="$capture_rate_limit",Ke="$initial_campaign_params",Ye="$initial_referrer_info",Xe="$initial_person_info",Ze="$epp",et="__POSTHOG_TOOLBAR__",tt="$posthog_cookieless",nt=[ve,_e,"__cmpns",me,Te,ye,Ae,De,ke,Ve,Be,qe,Ue,He,Ge,ze,Qe,Je,Ke,Ye,Ze,Xe]
function rt(e){return e instanceof Element&&(e.id===et||!(null==e.closest||!e.closest(".toolbar-global-fade-container")))}function it(e){return!!e&&1===e.nodeType}function st(e,t){return!!e&&!!e.tagName&&e.tagName.toLowerCase()===t.toLowerCase()}function ot(e){return!!e&&3===e.nodeType}function at(e){return!!e&&11===e.nodeType}function lt(e){return e?I(e).split(/\s+/):[]}function ct(e){var t=null==p?void 0:p.location.href
return!!(t&&e&&e.some(e=>t.match(e)))}function ut(e){var t=""
switch(typeof e.className){case"string":t=e.className
break
case"object":t=(e.className&&"baseVal"in e.className?e.className.baseVal:null)||e.getAttribute("class")||""
break
default:t=""}return lt(t)}function dt(e){return W(e)?null:I(e).split(/(\s+)/).filter(e=>xt(e)).join("").replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)}function ft(e){var t=""
return vt(e)&&!_t(e)&&e.childNodes&&e.childNodes.length&&se(e.childNodes,function(e){var n
ot(e)&&e.textContent&&(t+=null!==(n=dt(e.textContent))&&void 0!==n?n:"")}),I(t)}function ht(e){return q(e.target)?e.srcElement||null:null!=(t=e.target)&&t.shadowRoot?e.composedPath()[0]||null:e.target||null
var t}var pt=["a","button","form","input","select","textarea","label"]
function gt(e){var t=e.parentNode
return!(!t||!it(t))&&t}function vt(e){for(var t=e;t.parentNode&&!st(t,"body");t=t.parentNode){var n=ut(t)
if(L(n,"ph-sensitive")||L(n,"ph-no-capture"))return!1}if(L(ut(e),"ph-include"))return!0
var r=e.type||""
if(H(r))switch(r.toLowerCase()){case"hidden":case"password":return!1}var i=e.name||e.id||""
return!H(i)||!/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g,""))}function _t(e){return!!(st(e,"input")&&!["button","checkbox","submit","reset"].includes(e.type)||st(e,"select")||st(e,"textarea")||"true"===e.getAttribute("contenteditable"))}var mt="(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",bt=new RegExp("^(?:"+mt+")$"),yt=new RegExp(mt),wt="\\d{3}-?\\d{2}-?\\d{4}",kt=new RegExp("^("+wt+")$"),St=new RegExp("("+wt+")")
function xt(e,t){if(void 0===t&&(t=!0),W(e))return!1
if(H(e)){if(e=I(e),(t?bt:yt).test((e||"").replace(/[- ]/g,"")))return!1
if((t?kt:St).test(e))return!1}return!0}function Et(e){var t=ft(e)
return xt(t=(t+" "+Ct(e)).trim())?t:""}function Ct(e){var t=""
return e&&e.childNodes&&e.childNodes.length&&se(e.childNodes,function(e){var n
if(e&&"span"===(null==(n=e.tagName)?void 0:n.toLowerCase()))try{var r=ft(e)
t=(t+" "+r).trim(),e.childNodes&&e.childNodes.length&&(t=(t+" "+Ct(e)).trim())}catch(e){te.error("[AutoCapture]",e)}}),t}function Tt(e){return function(e){var t=e.map(e=>{var t,n,r=""
if(e.tag_name&&(r+=e.tag_name),e.attr_class)for(var i of(e.attr_class.sort(),e.attr_class))r+="."+i.replace(/"/g,"")
var s=f({},e.text?{text:e.text}:{},{"nth-child":null!==(t=e.nth_child)&&void 0!==t?t:0,"nth-of-type":null!==(n=e.nth_of_type)&&void 0!==n?n:0},e.href?{href:e.href}:{},e.attr_id?{attr_id:e.attr_id}:{},e.attributes),o={}
return le(s).sort((e,t)=>{var[n]=e,[r]=t
return n.localeCompare(r)}).forEach(e=>{var[t,n]=e
return o[Pt(t.toString())]=Pt(n.toString())}),(r+=":")+le(o).map(e=>{var[t,n]=e
return t+'="'+n+'"'}).join("")})
return t.join(";")}(function(e){return e.map(e=>{var t,n,r={text:null==(t=e.$el_text)?void 0:t.slice(0,400),tag_name:e.tag_name,href:null==(n=e.attr__href)?void 0:n.slice(0,2048),attr_class:$t(e),attr_id:e.attr__id,nth_child:e.nth_child,nth_of_type:e.nth_of_type,attributes:{}}
return le(e).filter(e=>{var[t]=e
return 0===t.indexOf("attr__")}).forEach(e=>{var[t,n]=e
return r.attributes[t]=n}),r})}(e))}function Pt(e){return e.replace(/"|\\"/g,'\\"')}function $t(e){var t=e.attr__class
return t?j(t)?t:lt(t):void 0}class Lt{constructor(){this.clicks=[]}isRageClick(e,t,n){var r=this.clicks[this.clicks.length-1]
if(r&&Math.abs(e-r.x)+Math.abs(t-r.y)<30&&n-r.timestamp<1e3){if(this.clicks.push({x:e,y:t,timestamp:n}),3===this.clicks.length)return!0}else this.clicks=[{x:e,y:t,timestamp:n}]
return!1}}var It="$copy_autocapture",Mt=function(e){return e.GZipJS="gzip-js",e.Base64="base64",e}({}),Ot=["fatal","error","warning","log","info","debug"],Rt=["localhost","127.0.0.1"],At=e=>{var t=null==y?void 0:y.createElement("a")
return q(t)?null:(t.href=e,t)},Ft=function(e,t){for(var n,r=((e.split("#")[0]||"").split(/\?(.*)/)[1]||"").replace(/^\?+/g,"").split("&"),i=0;i<r.length;i++){var s=r[i].split("=")
if(s[0]===t){n=s
break}}if(!j(n)||n.length<2)return""
var o=n[1]
try{o=decodeURIComponent(o)}catch(e){te.error("Skipping decoding for malformed query param: "+o)}return o.replace(/\+/g," ")},jt=function(e,t,n){if(!e||!t||!t.length)return e
for(var r=e.split("#"),i=r[0]||"",s=r[1],o=i.split("?"),a=o[1],l=o[0],c=(a||"").split("&"),u=[],d=0;d<c.length;d++){var f=c[d].split("=")
j(f)&&(t.includes(f[0])?u.push(f[0]+"="+n):u.push(c[d]))}var h=l
return null!=a&&(h+="?"+u.join("&")),null!=s&&(h+="#"+s),h},Nt=function(e,t){var n=e.match(new RegExp(t+"=([^&]*)"))
return n?n[1]:null},Dt=ne("[AutoCapture]")
function Bt(e,t){return t.length>e?t.slice(0,e)+"...":t}function qt(e){if(e.previousElementSibling)return e.previousElementSibling
var t=e
do{t=t.previousSibling}while(t&&!it(t))
return t}function Ht(e,t){for(var n,r,{e:i,maskAllElementAttributes:s,maskAllText:o,elementAttributeIgnoreList:a,elementsChainAsString:l}=t,c=[e],u=e;u.parentNode&&!st(u,"body");)at(u.parentNode)?(c.push(u.parentNode.host),u=u.parentNode.host):(c.push(u.parentNode),u=u.parentNode)
var d,f=[],h={},g=!1,v=!1
if(se(c,e=>{var t=vt(e)
"a"===e.tagName.toLowerCase()&&(g=e.getAttribute("href"),g=t&&g&&xt(g)&&g),L(ut(e),"ph-no-capture")&&(v=!0),f.push(function(e,t,n,r){var i=e.tagName.toLowerCase(),s={tag_name:i}
pt.indexOf(i)>-1&&!n&&("a"===i.toLowerCase()||"button"===i.toLowerCase()?s.$el_text=Bt(1024,Et(e)):s.$el_text=Bt(1024,ft(e)))
var o=ut(e)
o.length>0&&(s.classes=o.filter(function(e){return""!==e})),se(e.attributes,function(n){var i
if((!_t(e)||-1!==["name","id","class","aria-label"].indexOf(n.name))&&(null==r||!r.includes(n.name))&&!t&&xt(n.value)&&(i=n.name,!H(i)||"_ngcontent"!==i.substring(0,10)&&"_nghost"!==i.substring(0,7))){var o=n.value
"class"===n.name&&(o=lt(o).join(" ")),s["attr__"+n.name]=Bt(1024,o)}})
for(var a=1,l=1,c=e;c=qt(c);)a++,c.tagName===e.tagName&&l++
return s.nth_child=a,s.nth_of_type=l,s}(e,s,o,a))
var n=function(e){if(!vt(e))return{}
var t={}
return se(e.attributes,function(e){if(e.name&&0===e.name.indexOf("data-ph-capture-attribute")){var n=e.name.replace("data-ph-capture-attribute-",""),r=e.value
n&&r&&xt(r)&&(t[n]=r)}}),t}(e)
oe(h,n)}),v)return{props:{},explicitNoCapture:v}
if(o||("a"===e.tagName.toLowerCase()||"button"===e.tagName.toLowerCase()?f[0].$el_text=Et(e):f[0].$el_text=ft(e)),g){var _,m
f[0].attr__href=g
var b=null==(_=At(g))?void 0:_.host,y=null==p||null==(m=p.location)?void 0:m.host
b&&y&&b!==y&&(d=g)}return{props:oe({$event_type:i.type,$ce_version:1},l?{}:{$elements:f},{$elements_chain:Tt(f)},null!=(n=f[0])&&n.$el_text?{$el_text:null==(r=f[0])?void 0:r.$el_text}:{},d&&"click"===i.type?{$external_click_url:d}:{},h)}}class Ut{constructor(e){this._initialized=!1,this._isDisabledServerSide=null,this.rageclicks=new Lt,this._elementsChainAsString=!1,this.instance=e,this._elementSelectors=null}get _config(){var e,t,n=D(this.instance.config.autocapture)?this.instance.config.autocapture:{}
return n.url_allowlist=null==(e=n.url_allowlist)?void 0:e.map(e=>new RegExp(e)),n.url_ignorelist=null==(t=n.url_ignorelist)?void 0:t.map(e=>new RegExp(e)),n}_addDomEventHandlers(){if(this.isBrowserSupported()){if(p&&y){var e=e=>{e=e||(null==p?void 0:p.event)
try{this._captureEvent(e)}catch(e){Dt.error("Failed to capture event",e)}}
if(ge(y,"submit",e,{capture:!0}),ge(y,"change",e,{capture:!0}),ge(y,"click",e,{capture:!0}),this._config.capture_copied_text){var t=e=>{e=e||(null==p?void 0:p.event),this._captureEvent(e,It)}
ge(y,"copy",t,{capture:!0}),ge(y,"cut",t,{capture:!0})}}}else Dt.info("Disabling Automatic Event Collection because this browser is not supported")}startIfEnabled(){this.isEnabled&&!this._initialized&&(this._addDomEventHandlers(),this._initialized=!0)}onRemoteConfig(e){e.elementsChainAsString&&(this._elementsChainAsString=e.elementsChainAsString),this.instance.persistence&&this.instance.persistence.register({[be]:!!e.autocapture_opt_out}),this._isDisabledServerSide=!!e.autocapture_opt_out,this.startIfEnabled()}setElementSelectors(e){this._elementSelectors=e}getElementSelectors(e){var t,n=[]
return null==(t=this._elementSelectors)||t.forEach(t=>{var r=null==y?void 0:y.querySelectorAll(t)
null==r||r.forEach(r=>{e===r&&n.push(t)})}),n}get isEnabled(){var e,t,n=null==(e=this.instance.persistence)?void 0:e.props[be],r=this._isDisabledServerSide
if(G(r)&&!V(n)&&!this.instance._shouldDisableFlags())return!1
var i=null!==(t=this._isDisabledServerSide)&&void 0!==t?t:!!n
return!!this.instance.config.autocapture&&!i}_captureEvent(e,t){if(void 0===t&&(t="$autocapture"),this.isEnabled){var n,r=ht(e)
ot(r)&&(r=r.parentNode||null),"$autocapture"===t&&"click"===e.type&&e instanceof MouseEvent&&this.instance.config.rageclick&&null!=(n=this.rageclicks)&&n.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._captureEvent(e,"$rageclick")
var i=t===It
if(r&&function(e,t,n,r,i){var s,o,a
if(void 0===n&&(n=void 0),!p||!e||st(e,"html")||!it(e))return!1
if(null!=(s=n)&&s.url_allowlist&&!ct(n.url_allowlist))return!1
if(null!=(o=n)&&o.url_ignorelist&&ct(n.url_ignorelist))return!1
if(null!=(a=n)&&a.dom_event_allowlist){var l=n.dom_event_allowlist
if(l&&!l.some(e=>t.type===e))return!1}for(var c=!1,u=[e],d=!0,f=e;f.parentNode&&!st(f,"body");)if(at(f.parentNode))u.push(f.parentNode.host),f=f.parentNode.host
else{if(!(d=gt(f)))break
if(r||pt.indexOf(d.tagName.toLowerCase())>-1)c=!0
else{var h=p.getComputedStyle(d)
h&&"pointer"===h.getPropertyValue("cursor")&&(c=!0)}u.push(d),f=d}if(!function(e,t){var n=null==t?void 0:t.element_allowlist
if(q(n))return!0
var r,i=function(e){if(n.some(t=>e.tagName.toLowerCase()===t))return{v:!0}}
for(var s of e)if(r=i(s))return r.v
return!1}(u,n))return!1
if(!function(e,t){var n=null==t?void 0:t.css_selector_allowlist
if(q(n))return!0
var r,i=function(e){if(n.some(t=>e.matches(t)))return{v:!0}}
for(var s of e)if(r=i(s))return r.v
return!1}(u,n))return!1
var g=p.getComputedStyle(e)
if(g&&"pointer"===g.getPropertyValue("cursor")&&"click"===t.type)return!0
var v=e.tagName.toLowerCase()
switch(v){case"html":return!1
case"form":return(i||["submit"]).indexOf(t.type)>=0
case"input":case"select":case"textarea":return(i||["change","click"]).indexOf(t.type)>=0
default:return c?(i||["click"]).indexOf(t.type)>=0:(i||["click"]).indexOf(t.type)>=0&&(pt.indexOf(v)>-1||"true"===e.getAttribute("contenteditable"))}}(r,e,this._config,i,i?["copy","cut"]:void 0)){var{props:s,explicitNoCapture:o}=Ht(r,{e:e,maskAllElementAttributes:this.instance.config.mask_all_element_attributes,maskAllText:this.instance.config.mask_all_text,elementAttributeIgnoreList:this._config.element_attribute_ignorelist,elementsChainAsString:this._elementsChainAsString})
if(o)return!1
var a=this.getElementSelectors(r)
if(a&&a.length>0&&(s.$element_selectors=a),t===It){var l,c=dt(null==p||null==(l=p.getSelection())?void 0:l.toString()),u=e.type||"clipboard"
if(!c)return!1
s.$selected_content=c,s.$copy_type=u}return this.instance.capture(t,s),!0}}}isBrowserSupported(){return N(null==y?void 0:y.querySelectorAll)}}Math.trunc||(Math.trunc=function(e){return e<0?Math.ceil(e):Math.floor(e)}),Number.isInteger||(Number.isInteger=function(e){return z(e)&&isFinite(e)&&Math.floor(e)===e})
var Gt="0123456789abcdef"
class Wt{constructor(e){if(this.bytes=e,16!==e.length)throw new TypeError("not 128-bit length")}static fromFieldsV7(e,t,n,r){if(!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(n)||!Number.isInteger(r)||e<0||t<0||n<0||r<0||e>0xffffffffffff||t>4095||n>1073741823||r>4294967295)throw new RangeError("invalid field value")
var i=new Uint8Array(16)
return i[0]=e/Math.pow(2,40),i[1]=e/Math.pow(2,32),i[2]=e/Math.pow(2,24),i[3]=e/Math.pow(2,16),i[4]=e/Math.pow(2,8),i[5]=e,i[6]=112|t>>>8,i[7]=t,i[8]=128|n>>>24,i[9]=n>>>16,i[10]=n>>>8,i[11]=n,i[12]=r>>>24,i[13]=r>>>16,i[14]=r>>>8,i[15]=r,new Wt(i)}toString(){for(var e="",t=0;t<this.bytes.length;t++)e=e+Gt.charAt(this.bytes[t]>>>4)+Gt.charAt(15&this.bytes[t]),3!==t&&5!==t&&7!==t&&9!==t||(e+="-")
if(36!==e.length)throw new Error("Invalid UUIDv7 was generated")
return e}clone(){return new Wt(this.bytes.slice(0))}equals(e){return 0===this.compareTo(e)}compareTo(e){for(var t=0;t<16;t++){var n=this.bytes[t]-e.bytes[t]
if(0!==n)return Math.sign(n)}return 0}}class zt{constructor(){this._timestamp=0,this._counter=0,this._random=new Jt}generate(){var e=this.generateOrAbort()
if(q(e)){this._timestamp=0
var t=this.generateOrAbort()
if(q(t))throw new Error("Could not generate UUID after timestamp reset")
return t}return e}generateOrAbort(){var e=Date.now()
if(e>this._timestamp)this._timestamp=e,this._resetCounter()
else{if(!(e+1e4>this._timestamp))return
this._counter++,this._counter>4398046511103&&(this._timestamp++,this._resetCounter())}return Wt.fromFieldsV7(this._timestamp,Math.trunc(this._counter/Math.pow(2,30)),this._counter&Math.pow(2,30)-1,this._random.nextUint32())}_resetCounter(){this._counter=1024*this._random.nextUint32()+(1023&this._random.nextUint32())}}var Vt,Qt=e=>{if("undefined"!=typeof UUIDV7_DENY_WEAK_RNG&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available")
for(var t=0;t<e.length;t++)e[t]=65536*Math.trunc(65536*Math.random())+Math.trunc(65536*Math.random())
return e}
p&&!q(p.crypto)&&crypto.getRandomValues&&(Qt=e=>crypto.getRandomValues(e))
class Jt{constructor(){this._buffer=new Uint32Array(8),this._cursor=1/0}nextUint32(){return this._cursor>=this._buffer.length&&(Qt(this._buffer),this._cursor=0),this._buffer[this._cursor++]}}var Kt=()=>Yt().toString(),Yt=()=>(Vt||(Vt=new zt)).generate(),Xt="",Zt=/[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i
var en={_is_supported:()=>!!y,_error:function(e){te.error("cookieStore error: "+e)},_get:function(e){if(y){try{for(var t=e+"=",n=y.cookie.split(";").filter(e=>e.length),r=0;r<n.length;r++){for(var i=n[r];" "==i.charAt(0);)i=i.substring(1,i.length)
if(0===i.indexOf(t))return decodeURIComponent(i.substring(t.length,i.length))}}catch(e){}return null}},_parse:function(e){var t
try{t=JSON.parse(en._get(e))||{}}catch(e){}return t},_set:function(e,t,n,r,i){if(y)try{var s="",o="",a=function(e,t){if(t){var n=function(e,t){if(void 0===t&&(t=y),Xt)return Xt
if(!t)return""
if(["localhost","127.0.0.1"].includes(e))return""
for(var n=e.split("."),r=Math.min(n.length,8),i="dmn_chk_"+Kt();!Xt&&r--;){var s=n.slice(r).join("."),o=i+"=1;domain=."+s+";path=/"
t.cookie=o+";max-age=3",t.cookie.includes(i)&&(t.cookie=o+";max-age=0",Xt=s)}return Xt}(e)
if(!n){var r=(e=>{var t=e.match(Zt)
return t?t[0]:""})(e)
r!==n&&te.info("Warning: cookie subdomain discovery mismatch",r,n),n=r}return n?"; domain=."+n:""}return""}(y.location.hostname,r)
if(n){var l=new Date
l.setTime(l.getTime()+24*n*60*60*1e3),s="; expires="+l.toUTCString()}i&&(o="; secure")
var c=e+"="+encodeURIComponent(JSON.stringify(t))+s+"; SameSite=Lax; path=/"+a+o
return c.length>3686.4&&te.warn("cookieStore warning: large cookie, len="+c.length),y.cookie=c,c}catch(e){return}},_remove:function(e,t){if(null!=y&&y.cookie)try{en._set(e,"",-1,t)}catch(e){return}}},tn=null,nn={_is_supported:function(){if(!G(tn))return tn
var e=!0
if(q(p))e=!1
else try{var t="__mplssupport__"
nn._set(t,"xyz"),'"xyz"'!==nn._get(t)&&(e=!1),nn._remove(t)}catch(t){e=!1}return e||te.error("localStorage unsupported; falling back to cookie store"),tn=e,e},_error:function(e){te.error("localStorage error: "+e)},_get:function(e){try{return null==p?void 0:p.localStorage.getItem(e)}catch(e){nn._error(e)}return null},_parse:function(e){try{return JSON.parse(nn._get(e))||{}}catch(e){}return null},_set:function(e,t){try{null==p||p.localStorage.setItem(e,JSON.stringify(t))}catch(e){nn._error(e)}},_remove:function(e){try{null==p||p.localStorage.removeItem(e)}catch(e){nn._error(e)}}},rn=["distinct_id",Ae,Fe,Ze,Xe],sn=f({},nn,{_parse:function(e){try{var t={}
try{t=en._parse(e)||{}}catch(e){}var n=oe(t,JSON.parse(nn._get(e)||"{}"))
return nn._set(e,n),n}catch(e){}return null},_set:function(e,t,n,r,i,s){try{nn._set(e,t,void 0,void 0,s)
var o={}
rn.forEach(e=>{t[e]&&(o[e]=t[e])}),Object.keys(o).length&&en._set(e,o,n,r,i,s)}catch(e){nn._error(e)}},_remove:function(e,t){try{null==p||p.localStorage.removeItem(e),en._remove(e,t)}catch(e){nn._error(e)}}}),on={},an={_is_supported:function(){return!0},_error:function(e){te.error("memoryStorage error: "+e)},_get:function(e){return on[e]||null},_parse:function(e){return on[e]||null},_set:function(e,t){on[e]=t},_remove:function(e){delete on[e]}},ln=null,cn={_is_supported:function(){if(!G(ln))return ln
if(ln=!0,q(p))ln=!1
else try{var e="__support__"
cn._set(e,"xyz"),'"xyz"'!==cn._get(e)&&(ln=!1),cn._remove(e)}catch(e){ln=!1}return ln},_error:function(e){te.error("sessionStorage error: ",e)},_get:function(e){try{return null==p?void 0:p.sessionStorage.getItem(e)}catch(e){cn._error(e)}return null},_parse:function(e){try{return JSON.parse(cn._get(e))||null}catch(e){}return null},_set:function(e,t){try{null==p||p.sessionStorage.setItem(e,JSON.stringify(t))}catch(e){cn._error(e)}},_remove:function(e){try{null==p||p.sessionStorage.removeItem(e)}catch(e){cn._error(e)}}},un=function(e){return e[e.PENDING=-1]="PENDING",e[e.DENIED=0]="DENIED",e[e.GRANTED=1]="GRANTED",e}({})
class dn{constructor(e){this._instance=e}get _config(){return this._instance.config}get consent(){return this._getDnt()?un.DENIED:this._storedConsent}isOptedOut(){return"always"===this._config.cookieless_mode||this.consent===un.DENIED||this.consent===un.PENDING&&(this._config.opt_out_capturing_by_default||"on_reject"===this._config.cookieless_mode)}isOptedIn(){return!this.isOptedOut()}isExplicitlyOptedOut(){return this.consent===un.DENIED}optInOut(e){this._storage._set(this._storageKey,e?1:0,this._config.cookie_expiration,this._config.cross_subdomain_cookie,this._config.secure_cookie)}reset(){this._storage._remove(this._storageKey,this._config.cross_subdomain_cookie)}get _storageKey(){var{token:e,opt_out_capturing_cookie_prefix:t,consent_persistence_name:n}=this._instance.config
return n||(t?t+e:"__ph_opt_in_out_"+e)}get _storedConsent(){var e=this._storage._get(this._storageKey)
return K(e)?un.GRANTED:L(Y,e)?un.DENIED:un.PENDING}get _storage(){if(!this._persistentStore){var e=this._config.opt_out_capturing_persistence_type
this._persistentStore="localStorage"===e?nn:en
var t="localStorage"===e?en:nn
t._get(this._storageKey)&&(this._persistentStore._get(this._storageKey)||this.optInOut(K(t._get(this._storageKey))),t._remove(this._storageKey,this._config.cross_subdomain_cookie))}return this._persistentStore}_getDnt(){return!!this._config.respect_dnt&&!!pe([null==b?void 0:b.doNotTrack,null==b?void 0:b.msDoNotTrack,C.doNotTrack],e=>K(e))}}var fn=ne("[Dead Clicks]"),hn=()=>!0,pn=e=>{var t,n=!(null==(t=e.instance.persistence)||!t.get_property(Ee)),r=e.instance.config.capture_dead_clicks
return V(r)?r:n}
class gn{get lazyLoadedDeadClicksAutocapture(){return this._lazyLoadedDeadClicksAutocapture}constructor(e,t,n){this.instance=e,this.isEnabled=t,this.onCapture=n,this.startIfEnabled()}onRemoteConfig(e){this.instance.persistence&&this.instance.persistence.register({[Ee]:null==e?void 0:e.captureDeadClicks}),this.startIfEnabled()}startIfEnabled(){this.isEnabled(this)&&this._loadScript(()=>{this._start()})}_loadScript(e){var t,n
null!=(t=C.__PosthogExtensions__)&&t.initDeadClicksAutocapture&&e(),null==(n=C.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this.instance,"dead-clicks-autocapture",t=>{t?fn.error("failed to load script",t):e()})}_start(){var e
if(y){if(!this._lazyLoadedDeadClicksAutocapture&&null!=(e=C.__PosthogExtensions__)&&e.initDeadClicksAutocapture){var t=D(this.instance.config.capture_dead_clicks)?this.instance.config.capture_dead_clicks:{}
t.__onCapture=this.onCapture,this._lazyLoadedDeadClicksAutocapture=C.__PosthogExtensions__.initDeadClicksAutocapture(this.instance,t),this._lazyLoadedDeadClicksAutocapture.start(y),fn.info("starting...")}}else fn.error("`document` not found. Cannot start.")}stop(){this._lazyLoadedDeadClicksAutocapture&&(this._lazyLoadedDeadClicksAutocapture.stop(),this._lazyLoadedDeadClicksAutocapture=void 0,fn.info("stopping..."))}}var vn=ne("[ExceptionAutocapture]")
class _n{constructor(e){var t,n,r
this._startCapturing=()=>{var e
if(p&&this.isEnabled&&null!=(e=C.__PosthogExtensions__)&&e.errorWrappingFunctions){var t=C.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,n=C.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,r=C.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError
try{!this._unwrapOnError&&this._config.capture_unhandled_errors&&(this._unwrapOnError=t(this.captureException.bind(this))),!this._unwrapUnhandledRejection&&this._config.capture_unhandled_rejections&&(this._unwrapUnhandledRejection=n(this.captureException.bind(this))),!this._unwrapConsoleError&&this._config.capture_console_errors&&(this._unwrapConsoleError=r(this.captureException.bind(this)))}catch(e){vn.error("failed to start",e),this._stopCapturing()}}},this._instance=e,this._remoteEnabled=!(null==(t=this._instance.persistence)||!t.props[we]),this._config=this._requiredConfig(),this._rateLimiter=new Z({refillRate:null!==(n=this._instance.config.error_tracking.__exceptionRateLimiterRefillRate)&&void 0!==n?n:1,bucketSize:null!==(r=this._instance.config.error_tracking.__exceptionRateLimiterBucketSize)&&void 0!==r?r:10,refillInterval:1e4,_logger:vn}),this.startIfEnabled()}_requiredConfig(){var e=this._instance.config.capture_exceptions,t={capture_unhandled_errors:!1,capture_unhandled_rejections:!1,capture_console_errors:!1}
return D(e)?t=f({},t,e):(q(e)?this._remoteEnabled:e)&&(t=f({},t,{capture_unhandled_errors:!0,capture_unhandled_rejections:!0})),t}get isEnabled(){return this._config.capture_console_errors||this._config.capture_unhandled_errors||this._config.capture_unhandled_rejections}startIfEnabled(){this.isEnabled&&(vn.info("enabled"),this._loadScript(this._startCapturing))}_loadScript(e){var t,n
null!=(t=C.__PosthogExtensions__)&&t.errorWrappingFunctions&&e(),null==(n=C.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"exception-autocapture",t=>{if(t)return vn.error("failed to load script",t)
e()})}_stopCapturing(){var e,t,n
null==(e=this._unwrapOnError)||e.call(this),this._unwrapOnError=void 0,null==(t=this._unwrapUnhandledRejection)||t.call(this),this._unwrapUnhandledRejection=void 0,null==(n=this._unwrapConsoleError)||n.call(this),this._unwrapConsoleError=void 0}onRemoteConfig(e){var t=e.autocaptureExceptions
this._remoteEnabled=!!t||!1,this._config=this._requiredConfig(),this._instance.persistence&&this._instance.persistence.register({[we]:this._remoteEnabled}),this.startIfEnabled()}captureException(e){var t,n=this._instance.requestRouter.endpointFor("ui")
e.$exception_personURL=n+"/project/"+this._instance.config.token+"/person/"+this._instance.get_distinct_id()
var r=null!==(t=e.$exception_list[0].type)&&void 0!==t?t:"Exception"
this._rateLimiter.consumeRateLimit(r)?vn.info("Skipping exception capture because of client rate limiting.",{exception:e.$exception_list[0].type}):this._instance.exceptions.sendExceptionEvent(e)}}function mn(e){return!q(Event)&&bn(e,Event)}function bn(e,t){try{return e instanceof t}catch(e){return!1}}function yn(e){switch(Object.prototype.toString.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":case"[object DOMError]":return!0
default:return bn(e,Error)}}function wn(e,t){return Object.prototype.toString.call(e)==="[object "+t+"]"}function kn(e){return wn(e,"DOMError")}var Sn=/\(error: (.*)\)/,xn="?"
function En(e,t,n,r){var i={platform:"web:javascript",filename:e,function:"<anonymous>"===t?xn:t,in_app:!0}
return q(n)||(i.lineno=n),q(r)||(i.colno=r),i}var Cn=/^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,Tn=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,Pn=/\((\S*)(?::(\d+))(?::(\d+))\)/,$n=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,Ln=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,In=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=t.sort((e,t)=>e[0]-t[0]).map(e=>e[1])
return function(e,t){void 0===t&&(t=0)
for(var n=[],i=e.split("\n"),s=t;s<i.length;s++){var o=i[s]
if(!(o.length>1024)){var a=Sn.test(o)?o.replace(Sn,"$1"):o
if(!a.match(/\S*Error: /)){for(var l of r){var c=l(a)
if(c){n.push(c)
break}}if(n.length>=50)break}}}return function(e){if(!e.length)return[]
var t=Array.from(e)
return t.reverse(),t.slice(0,50).map(e=>f({},e,{filename:e.filename||Mn(t).filename,function:e.function||xn}))}(n)}}([30,e=>{var t=Cn.exec(e)
if(t){var[,n,r,i]=t
return En(n,xn,+r,+i)}var s=Tn.exec(e)
if(s){if(s[2]&&0===s[2].indexOf("eval")){var o=Pn.exec(s[2])
o&&(s[2]=o[1],s[3]=o[2],s[4]=o[3])}var[a,l]=Fn(s[1]||xn,s[2])
return En(l,a,s[3]?+s[3]:void 0,s[4]?+s[4]:void 0)}}],[50,e=>{var t=$n.exec(e)
if(t){if(t[3]&&t[3].indexOf(" > eval")>-1){var n=Ln.exec(t[3])
n&&(t[1]=t[1]||"eval",t[3]=n[1],t[4]=n[2],t[5]="")}var r=t[3],i=t[1]||xn
return[i,r]=Fn(i,r),En(r,i,t[4]?+t[4]:void 0,t[5]?+t[5]:void 0)}}])
function Mn(e){return e[e.length-1]||{}}var On,Rn,An,Fn=(e,t)=>{var n=-1!==e.indexOf("safari-extension"),r=-1!==e.indexOf("safari-web-extension")
return n||r?[-1!==e.indexOf("@")?e.split("@")[0]:xn,n?"safari-extension:"+t:"safari-web-extension:"+t]:[e,t]},jn=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
function Nn(e,t){void 0===t&&(t=0)
var n=e.stacktrace||e.stack||"",r=function(e){return e&&Dn.test(e.message)?1:0}(e)
try{var i=In,s=function(e,t){var n=function(e){var t=globalThis._posthogChunkIds
if(!t)return{}
var n=Object.keys(t)
return An&&n.length===Rn||(Rn=n.length,An=n.reduce((n,r)=>{On||(On={})
var i=On[r]
if(i)n[i[0]]=i[1]
else for(var s=e(r),o=s.length-1;o>=0;o--){var a=s[o],l=null==a?void 0:a.filename,c=t[r]
if(l&&c){n[l]=c,On[r]=[l,c]
break}}return n},{})),An}(t)
return e.forEach(e=>{e.filename&&(e.chunk_id=n[e.filename])}),e}(i(n,r),i)
return s.slice(0,s.length-t)}catch(e){}return[]}var Dn=/Minified React error #\d+;/i
function Bn(e,t){var n=function(e,t){var n,r,i=Nn(e),s=null===(n=null==t?void 0:t.handled)||void 0===n||n,o=null!==(r=null==t?void 0:t.synthetic)&&void 0!==r&&r
return{type:null!=t&&t.overrideExceptionType?t.overrideExceptionType:e.name,value:function(e){var t=e.message
return t.error&&"string"==typeof t.error.message?String(t.error.message):String(t)}(e),stacktrace:{frames:i,type:"raw"},mechanism:{handled:s,synthetic:o}}}(e,t)
return e.cause&&yn(e.cause)&&e.cause!==e?[n,...Bn(e.cause,{handled:null==t?void 0:t.handled,synthetic:null==t?void 0:t.synthetic})]:[n]}function qn(e,t){return{$exception_list:Bn(e,t),$exception_level:"error"}}function Hn(e,t){var n,r,i,s=null===(n=null==t?void 0:t.handled)||void 0===n||n,o=null===(r=null==t?void 0:t.synthetic)||void 0===r||r,a={type:null!=t&&t.overrideExceptionType?t.overrideExceptionType:null!==(i=null==t?void 0:t.defaultExceptionType)&&void 0!==i?i:"Error",value:e||(null==t?void 0:t.defaultExceptionMessage),mechanism:{handled:s,synthetic:o}}
if(null!=t&&t.syntheticException){var l=Nn(t.syntheticException,1)
l.length&&(a.stacktrace={frames:l,type:"raw"})}return{$exception_list:[a],$exception_level:"error"}}function Un(e){return H(e)&&!U(e)&&Ot.indexOf(e)>=0}function Gn(e,t){var{error:n,event:r}=e,i={$exception_list:[]},s=n||r
if(kn(s)||function(e){return wn(e,"DOMException")}(s)){var o=s
if(function(e){return"stack"in e}(s))i=qn(s,t)
else{var a=o.name||(kn(o)?"DOMError":"DOMException"),l=o.message?a+": "+o.message:a
i=Hn(l,f({},t,{overrideExceptionType:kn(o)?"DOMError":"DOMException",defaultExceptionMessage:l}))}return"code"in o&&(i.$exception_DOMException_code=""+o.code),i}if(function(e){return wn(e,"ErrorEvent")}(s)&&s.error)return qn(s.error,t)
if(yn(s))return qn(s,t)
if(function(e){return wn(e,"Object")}(s)||mn(s))return function(e,t){var n,r,i=null===(n=null==t?void 0:t.handled)||void 0===n||n,s=null===(r=null==t?void 0:t.synthetic)||void 0===r||r,o=null!=t&&t.overrideExceptionType?t.overrideExceptionType:mn(e)?e.constructor.name:"Error",a="Non-Error 'exception' captured with keys: "+function(e,t){void 0===t&&(t=40)
var n=Object.keys(e)
if(n.sort(),!n.length)return"[object has no keys]"
for(var r=n.length;r>0;r--){var i=n.slice(0,r).join(", ")
if(!(i.length>t))return r===n.length||i.length<=t?i:i.slice(0,t)+"..."}return""}(e),l={type:o,value:a,mechanism:{handled:i,synthetic:s}}
if(null!=t&&t.syntheticException){var c=Nn(null==t?void 0:t.syntheticException,1)
c.length&&(l.stacktrace={frames:c,type:"raw"})}return{$exception_list:[l],$exception_level:Un(e.level)?e.level:"error"}}(s,t)
if(q(n)&&H(r)){var c="Error",u=r,d=r.match(jn)
return d&&(c=d[1],u=d[2]),Hn(u,f({},t,{overrideExceptionType:c,defaultExceptionMessage:u}))}return Hn(s,t)}function Wn(e,t,n){try{if(!(t in e))return()=>{}
var r=e[t],i=n(r)
return N(i)&&(i.prototype=i.prototype||{},Object.defineProperties(i,{__posthog_wrapped__:{enumerable:!1,value:!0}})),e[t]=i,()=>{e[t]=r}}catch(e){return()=>{}}}class zn{constructor(e){var t
this._instance=e,this._lastPathname=(null==p||null==(t=p.location)?void 0:t.pathname)||""}get isEnabled(){return"history_change"===this._instance.config.capture_pageview}startIfEnabled(){this.isEnabled&&(te.info("History API monitoring enabled, starting..."),this.monitorHistoryChanges())}stop(){this._popstateListener&&this._popstateListener(),this._popstateListener=void 0,te.info("History API monitoring stopped")}monitorHistoryChanges(){var e,t
if(p&&p.history){var n=this
null!=(e=p.history.pushState)&&e.__posthog_wrapped__||Wn(p.history,"pushState",e=>function(t,r,i){e.call(this,t,r,i),n._capturePageview("pushState")}),null!=(t=p.history.replaceState)&&t.__posthog_wrapped__||Wn(p.history,"replaceState",e=>function(t,r,i){e.call(this,t,r,i),n._capturePageview("replaceState")}),this._setupPopstateListener()}}_capturePageview(e){try{var t,n=null==p||null==(t=p.location)?void 0:t.pathname
if(!n)return
n!==this._lastPathname&&this.isEnabled&&this._instance.capture("$pageview",{navigation_type:e}),this._lastPathname=n}catch(t){te.error("Error capturing "+e+" pageview",t)}}_setupPopstateListener(){if(!this._popstateListener){var e=()=>{this._capturePageview("popstate")}
ge(p,"popstate",e),this._popstateListener=()=>{p&&p.removeEventListener("popstate",e)}}}}function Vn(e){var t,n
return(null==(t=JSON.stringify(e,(n=[],function(e,t){if(D(t)){for(;n.length>0&&n[n.length-1]!==this;)n.pop()
return n.includes(t)?"[Circular]":(n.push(t),t)}return t})))?void 0:t.length)||0}function Qn(e,t){if(void 0===t&&(t=6606028.8),e.size>=t&&e.data.length>1){var n=Math.floor(e.data.length/2),r=e.data.slice(0,n),i=e.data.slice(n)
return[Qn({size:Vn(r),data:r,sessionId:e.sessionId,windowId:e.windowId}),Qn({size:Vn(i),data:i,sessionId:e.sessionId,windowId:e.windowId})].flatMap(e=>e)}return[e]}var Jn=(e=>(e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin",e))(Jn||{}),Kn=(e=>(e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration",e[e.Selection=14]="Selection",e[e.AdoptedStyleSheet=15]="AdoptedStyleSheet",e[e.CustomElement=16]="CustomElement",e))(Kn||{}),Yn="[SessionRecording]",Xn="redacted",Zn={initiatorTypes:["audio","beacon","body","css","early-hint","embed","fetch","frame","iframe","icon","image","img","input","link","navigation","object","ping","script","track","video","xmlhttprequest"],maskRequestFn:e=>e,recordHeaders:!1,recordBody:!1,recordInitialRequests:!1,recordPerformance:!1,performanceEntryTypeToObserve:["first-input","navigation","paint","resource"],payloadSizeLimitBytes:1e6,payloadHostDenyList:[".lr-ingest.io",".ingest.sentry.io",".clarity.ms","analytics.google.com","bam.nr-data.net"]},er=["authorization","x-forwarded-for","authorization","cookie","set-cookie","x-api-key","x-real-ip","remote-addr","forwarded","proxy-authorization","x-csrf-token","x-csrftoken","x-xsrf-token"],tr=["password","secret","passwd","api_key","apikey","auth","credentials","mysql_pwd","privatekey","private_key","token"],nr=["/s/","/e/","/i/"]
function rr(e,t,n,r){if(W(e))return e
var i=(null==t?void 0:t["content-length"])||function(e){return new Blob([e]).size}(e)
return H(i)&&(i=parseInt(i)),i>n?Yn+" "+r+" body too large to record ("+i+" bytes)":e}function ir(e,t){if(W(e))return e
var n=e
return xt(n,!1)||(n=Yn+" "+t+" body "+Xn),se(tr,e=>{var r,i
null!=(r=n)&&r.length&&-1!==(null==(i=n)?void 0:i.indexOf(e))&&(n=Yn+" "+t+" body "+Xn+" as might contain: "+e)}),n}var sr=(e,t)=>{var n,r,i,s={payloadSizeLimitBytes:Zn.payloadSizeLimitBytes,performanceEntryTypeToObserve:[...Zn.performanceEntryTypeToObserve],payloadHostDenyList:[...t.payloadHostDenyList||[],...Zn.payloadHostDenyList]},o=!1!==e.session_recording.recordHeaders&&t.recordHeaders,a=!1!==e.session_recording.recordBody&&t.recordBody,l=!1!==e.capture_performance&&t.recordPerformance,c=(n=s,i=Math.min(1e6,null!==(r=n.payloadSizeLimitBytes)&&void 0!==r?r:1e6),e=>(null!=e&&e.requestBody&&(e.requestBody=rr(e.requestBody,e.requestHeaders,i,"Request")),null!=e&&e.responseBody&&(e.responseBody=rr(e.responseBody,e.responseHeaders,i,"Response")),e)),u=t=>{return c(((e,t)=>{var n,r=At(e.name),i=0===t.indexOf("http")?null==(n=At(t))?void 0:n.pathname:t
"/"===i&&(i="")
var s=null==r?void 0:r.pathname.replace(i||"","")
if(!(r&&s&&nr.some(e=>0===s.indexOf(e))))return e})((r=(n=t).requestHeaders,W(r)||se(Object.keys(null!=r?r:{}),e=>{er.includes(e.toLowerCase())&&(r[e]=Xn)}),n),e.api_host))
var n,r},d=N(e.session_recording.maskNetworkRequestFn)
return d&&N(e.session_recording.maskCapturedNetworkRequestFn)&&te.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."),d&&(e.session_recording.maskCapturedNetworkRequestFn=t=>{var n=e.session_recording.maskNetworkRequestFn({url:t.name})
return f({},t,{name:null==n?void 0:n.url})}),s.maskRequestFn=N(e.session_recording.maskCapturedNetworkRequestFn)?t=>{var n,r=u(t)
return r&&null!==(n=null==e.session_recording.maskCapturedNetworkRequestFn?void 0:e.session_recording.maskCapturedNetworkRequestFn(r))&&void 0!==n?n:void 0}:e=>function(e){if(!q(e))return e.requestBody=ir(e.requestBody,"Request"),e.responseBody=ir(e.responseBody,"Response"),e}(u(e)),f({},Zn,s,{recordHeaders:o,recordBody:a,recordPerformance:l,recordInitialRequests:l})}
class or{constructor(e,t){var n,r
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
return 0!==r||n===r?e:void 0},this._rrweb=e,this._options=t,this._rateLimiter=new Z({bucketSize:null!==(n=this._options.bucketSize)&&void 0!==n?n:100,refillRate:null!==(r=this._options.refillRate)&&void 0!==r?r:10,refillInterval:1e3,_onBucketRateLimited:this._onNodeRateLimited,_logger:te})}}var ar=Uint8Array,lr=Uint16Array,cr=Uint32Array,ur=new ar([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),dr=new ar([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),fr=new ar([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),hr=function(e,t){for(var n=new lr(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1]
var i=new cr(n[30])
for(r=1;r<30;++r)for(var s=n[r];s<n[r+1];++s)i[s]=s-n[r]<<5|r
return[n,i]},pr=hr(ur,2),gr=pr[0],vr=pr[1]
gr[28]=258,vr[258]=28
for(var _r=hr(dr,0)[1],mr=new lr(32768),br=0;br<32768;++br){var yr=(43690&br)>>>1|(21845&br)<<1
yr=(61680&(yr=(52428&yr)>>>2|(13107&yr)<<2))>>>4|(3855&yr)<<4,mr[br]=((65280&yr)>>>8|(255&yr)<<8)>>>1}var wr=function(e,t,n){for(var r=e.length,i=0,s=new lr(t);i<r;++i)++s[e[i]-1]
var o,a=new lr(t)
for(i=0;i<t;++i)a[i]=a[i-1]+s[i-1]<<1
for(o=new lr(r),i=0;i<r;++i)o[i]=mr[a[e[i]-1]++]>>>15-e[i]
return o},kr=new ar(288)
for(br=0;br<144;++br)kr[br]=8
for(br=144;br<256;++br)kr[br]=9
for(br=256;br<280;++br)kr[br]=7
for(br=280;br<288;++br)kr[br]=8
var Sr=new ar(32)
for(br=0;br<32;++br)Sr[br]=5
var xr=wr(kr,9),Er=wr(Sr,5),Cr=function(e){return(e/8|0)+(7&e&&1)},Tr=function(e,t,n){(null==n||n>e.length)&&(n=e.length)
var r=new(e instanceof lr?lr:e instanceof cr?cr:ar)(n-t)
return r.set(e.subarray(t,n)),r},Pr=function(e,t,n){n<<=7&t
var r=t/8|0
e[r]|=n,e[r+1]|=n>>>8},$r=function(e,t,n){n<<=7&t
var r=t/8|0
e[r]|=n,e[r+1]|=n>>>8,e[r+2]|=n>>>16},Lr=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]})
var i=n.length,s=n.slice()
if(!i)return[new ar(0),0]
if(1==i){var o=new ar(n[0].s+1)
return o[n[0].s]=1,[o,1]}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001})
var a=n[0],l=n[1],c=0,u=1,d=2
for(n[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=i-1;)a=n[n[c].f<n[d].f?c++:d++],l=n[c!=u&&n[c].f<n[d].f?c++:d++],n[u++]={s:-1,f:a.f+l.f,l:a,r:l}
var f=s[0].s
for(r=1;r<i;++r)s[r].s>f&&(f=s[r].s)
var h=new lr(f+1),p=Ir(n[u-1],h,0)
if(p>t){r=0
var g=0,v=p-t,_=1<<v
for(s.sort(function(e,t){return h[t.s]-h[e.s]||e.f-t.f});r<i;++r){var m=s[r].s
if(!(h[m]>t))break
g+=_-(1<<p-h[m]),h[m]=t}for(g>>>=v;g>0;){var b=s[r].s
h[b]<t?g-=1<<t-h[b]++-1:++r}for(;r>=0&&g;--r){var y=s[r].s
h[y]==t&&(--h[y],++g)}p=t}return[new ar(h),p]},Ir=function(e,t,n){return-1==e.s?Math.max(Ir(e.l,t,n+1),Ir(e.r,t,n+1)):t[e.s]=n},Mr=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new lr(++t),r=0,i=e[0],s=1,o=function(e){n[r++]=e},a=1;a<=t;++a)if(e[a]==i&&a!=t)++s
else{if(!i&&s>2){for(;s>138;s-=138)o(32754)
s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(i),--s;s>6;s-=6)o(8304)
s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(i)
s=1,i=e[a]}return[n.subarray(0,r),t]},Or=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r]
return n},Rr=function(e,t,n){var r=n.length,i=Cr(t+2)
e[i]=255&r,e[i+1]=r>>>8,e[i+2]=255^e[i],e[i+3]=255^e[i+1]
for(var s=0;s<r;++s)e[i+s+4]=n[s]
return 8*(i+4+r)},Ar=function(e,t,n,r,i,s,o,a,l,c,u){Pr(t,u++,n),++i[256]
for(var d=Lr(i,15),f=d[0],h=d[1],p=Lr(s,15),g=p[0],v=p[1],_=Mr(f),m=_[0],b=_[1],y=Mr(g),w=y[0],k=y[1],S=new lr(19),x=0;x<m.length;++x)S[31&m[x]]++
for(x=0;x<w.length;++x)S[31&w[x]]++
for(var E=Lr(S,7),C=E[0],T=E[1],P=19;P>4&&!C[fr[P-1]];--P);var $,L,I,M,O=c+5<<3,R=Or(i,kr)+Or(s,Sr)+o,A=Or(i,f)+Or(s,g)+o+14+3*P+Or(S,C)+(2*S[16]+3*S[17]+7*S[18])
if(O<=R&&O<=A)return Rr(t,u,e.subarray(l,l+c))
if(Pr(t,u,1+(A<R)),u+=2,A<R){$=wr(f,h),L=f,I=wr(g,v),M=g
var F=wr(C,T)
for(Pr(t,u,b-257),Pr(t,u+5,k-1),Pr(t,u+10,P-4),u+=14,x=0;x<P;++x)Pr(t,u+3*x,C[fr[x]])
u+=3*P
for(var j=[m,w],N=0;N<2;++N){var D=j[N]
for(x=0;x<D.length;++x){var B=31&D[x]
Pr(t,u,F[B]),u+=C[B],B>15&&(Pr(t,u,D[x]>>>5&127),u+=D[x]>>>12)}}}else $=xr,L=kr,I=Er,M=Sr
for(x=0;x<a;++x)if(r[x]>255){B=r[x]>>>18&31,$r(t,u,$[B+257]),u+=L[B+257],B>7&&(Pr(t,u,r[x]>>>23&31),u+=ur[B])
var q=31&r[x]
$r(t,u,I[q]),u+=M[q],q>3&&($r(t,u,r[x]>>>5&8191),u+=dr[q])}else $r(t,u,$[r[x]]),u+=L[r[x]]
return $r(t,u,$[256]),u+L[256]},Fr=new cr([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),jr=function(){for(var e=new cr(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(1&n&&3988292384)^n>>>1
e[t]=n}return e}(),Nr=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8}
function Dr(e,t){void 0===t&&(t={})
var n=function(){var e=4294967295
return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=jr[255&n^t[r]]^n>>>8
e=n},d:function(){return 4294967295^e}}}(),r=e.length
n.p(e)
var i=function(e,t,n,r){return function(e,t,n,r,i){var s=e.length,o=new ar(r+s+5*(1+Math.floor(s/7e3))+i),a=o.subarray(r,o.length-i),l=0
if(!t||s<8)for(var c=0;c<=s;c+=65535){var u=c+65535
u<s?l=Rr(a,l,e.subarray(c,u)):(a[c]=!0,l=Rr(a,l,e.subarray(c,s)))}else{for(var d=Fr[t-1],f=d>>>13,h=8191&d,p=(1<<n)-1,g=new lr(32768),v=new lr(p+1),_=Math.ceil(n/3),m=2*_,b=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<m)&p},y=new cr(25e3),w=new lr(288),k=new lr(32),S=0,x=0,E=(c=0,0),C=0,T=0;c<s;++c){var P=b(c),$=32767&c,L=v[P]
if(g[$]=L,v[P]=$,C<=c){var I=s-c
if((S>7e3||E>24576)&&I>423){l=Ar(e,a,0,y,w,k,x,E,T,c-T,l),E=S=x=0,T=c
for(var M=0;M<286;++M)w[M]=0
for(M=0;M<30;++M)k[M]=0}var O=2,R=0,A=h,F=$-L&32767
if(I>2&&P==b(c-F))for(var j=Math.min(f,I)-1,N=Math.min(32767,c),D=Math.min(258,I);F<=N&&--A&&$!=L;){if(e[c+O]==e[c+O-F]){for(var B=0;B<D&&e[c+B]==e[c+B-F];++B);if(B>O){if(O=B,R=F,B>j)break
var q=Math.min(F,B-2),H=0
for(M=0;M<q;++M){var U=c-F+M+32768&32767,G=U-g[U]+32768&32767
G>H&&(H=G,L=U)}}}F+=($=L)-(L=g[$])+32768&32767}if(R){y[E++]=268435456|vr[O]<<18|_r[R]
var W=31&vr[O],z=31&_r[R]
x+=ur[W]+dr[z],++w[257+W],++k[z],C=c+O,++S}else y[E++]=e[c],++w[e[c]]}}l=Ar(e,a,!0,y,w,k,x,E,T,c-T,l)}return Tr(o,0,r+Cr(l)+i)}(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,n,r)}(e,t,function(e){return 10+(e.filename&&e.filename.length+1||0)}(t),8),s=i.length
return function(e,t){var n=t.filename
if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:9==t.level?2:0,e[9]=3,0!=t.mtime&&Nr(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8
for(var r=0;r<=n.length;++r)e[r+10]=n.charCodeAt(r)}}(i,t),Nr(i,s-8,n.d()),Nr(i,s-4,r),i}function Br(e,t){var n=e.length
if("undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e)
for(var r=new ar(e.length+(e.length>>>1)),i=0,s=function(e){r[i++]=e},o=0;o<n;++o){if(i+5>r.length){var a=new ar(i+8+(n-o<<1))
a.set(r),r=a}var l=e.charCodeAt(o)
l<128||t?s(l):l<2048?(s(192|l>>>6),s(128|63&l)):l>55295&&l<57344?(s(240|(l=65536+(1047552&l)|1023&e.charCodeAt(++o))>>>18),s(128|l>>>12&63),s(128|l>>>6&63),s(128|63&l)):(s(224|l>>>12),s(128|l>>>6&63),s(128|63&l))}return Tr(r,0,i)}var qr="disabled",Hr="sampled",Ur="active",Gr="buffering",Wr="paused",zr="trigger",Vr=zr+"_activated",Qr=zr+"_pending",Jr=zr+"_"+qr
function Kr(e,t){return t.some(t=>"regex"===t.matching&&new RegExp(t.url).test(e))}class Yr{constructor(e){this._matchers=e}triggerStatus(e){var t=this._matchers.map(t=>t.triggerStatus(e))
return t.includes(Vr)?Vr:t.includes(Qr)?Qr:Jr}stop(){this._matchers.forEach(e=>e.stop())}}class Xr{constructor(e){this._matchers=e}triggerStatus(e){var t=new Set
for(var n of this._matchers)t.add(n.triggerStatus(e))
switch(t.delete(Jr),t.size){case 0:return Jr
case 1:return Array.from(t)[0]
default:return Qr}}stop(){this._matchers.forEach(e=>e.stop())}}class Zr{triggerStatus(){return Qr}stop(){}}class ei{constructor(e){this._urlTriggers=[],this._urlBlocklist=[],this.urlBlocked=!1,this._instance=e}onRemoteConfig(e){var t,n
this._urlTriggers=(null==(t=e.sessionRecording)?void 0:t.urlTriggers)||[],this._urlBlocklist=(null==(n=e.sessionRecording)?void 0:n.urlBlocklist)||[]}_urlTriggerStatus(e){var t
return 0===this._urlTriggers.length?Jr:(null==(t=this._instance)?void 0:t.get_property(je))===e?Vr:Qr}triggerStatus(e){var t=this._urlTriggerStatus(e),n=t===Vr?Vr:t===Qr?Qr:Jr
return this._instance.register_for_session({$sdk_debug_replay_url_trigger_status:n}),n}checkUrlTriggerConditions(e,t,n){if(void 0!==p&&p.location.href){var r=p.location.href,i=this.urlBlocked,s=Kr(r,this._urlBlocklist)
i&&s||(s&&!i?e():!s&&i&&t(),Kr(r,this._urlTriggers)&&n("url"))}}stop(){}}class ti{constructor(e){this.linkedFlag=null,this.linkedFlagSeen=!1,this._flaglistenerCleanup=()=>{},this._instance=e}triggerStatus(){var e=Qr
return W(this.linkedFlag)&&(e=Jr),this.linkedFlagSeen&&(e=Vr),this._instance.register_for_session({$sdk_debug_replay_linked_flag_trigger_status:e}),e}onRemoteConfig(e,t){var n
if(this.linkedFlag=(null==(n=e.sessionRecording)?void 0:n.linkedFlag)||null,!W(this.linkedFlag)&&!this.linkedFlagSeen){var r=H(this.linkedFlag)?this.linkedFlag:this.linkedFlag.flag,i=H(this.linkedFlag)?null:this.linkedFlag.variant
this._flaglistenerCleanup=this._instance.onFeatureFlags((e,n)=>{var s=!1
if(D(n)&&r in n){var o=n[r]
s=V(o)?!0===o:i?o===i:!!o}this.linkedFlagSeen=s,s&&t(r,i)})}}stop(){this._flaglistenerCleanup()}}class ni{constructor(e){this._eventTriggers=[],this._instance=e}onRemoteConfig(e){var t
this._eventTriggers=(null==(t=e.sessionRecording)?void 0:t.eventTriggers)||[]}_eventTriggerStatus(e){var t
return 0===this._eventTriggers.length?Jr:(null==(t=this._instance)?void 0:t.get_property(Ne))===e?Vr:Qr}triggerStatus(e){var t=this._eventTriggerStatus(e),n=t===Vr?Vr:t===Qr?Qr:Jr
return this._instance.register_for_session({$sdk_debug_replay_event_trigger_status:n}),n}stop(){}}function ri(e){return e.isRecordingEnabled?Gr:qr}function ii(e){if(!e.receivedFlags)return Gr
if(!e.isRecordingEnabled)return qr
if(e.urlTriggerMatching.urlBlocked)return Wr
var t=!0===e.isSampled,n=new Yr([e.eventTriggerMatching,e.urlTriggerMatching,e.linkedFlagMatching]).triggerStatus(e.sessionId)
return t?Hr:n===Vr?Ur:n===Qr?Gr:!1===e.isSampled?qr:Ur}function si(e){if(!e.receivedFlags)return Gr
if(!e.isRecordingEnabled)return qr
if(e.urlTriggerMatching.urlBlocked)return Wr
var t=new Xr([e.eventTriggerMatching,e.urlTriggerMatching,e.linkedFlagMatching]).triggerStatus(e.sessionId),n=t!==Jr,r=V(e.isSampled)
return n&&t===Qr?Gr:n&&t===Jr||r&&!e.isSampled?qr:!0===e.isSampled?Hr:Ur}var oi="[SessionRecording]",ai=ne(oi)
function li(){var e
return null==C||null==(e=C.__PosthogExtensions__)||null==(e=e.rrweb)?void 0:e.record}var ci=[Kn.MouseMove,Kn.MouseInteraction,Kn.Scroll,Kn.ViewportResize,Kn.Input,Kn.TouchMove,Kn.MediaInteraction,Kn.Drag],ui=e=>({rrwebMethod:e,enqueuedAt:Date.now(),attempt:1})
function di(e){return function(e){for(var t="",n=0;n<e.length;){var r=e[n++]
t+=String.fromCharCode(r)}return t}(Dr(Br(JSON.stringify(e))))}function fi(e){return e.type===Jn.Custom&&"sessionIdle"===e.data.tag}class hi{get sessionId(){return this._sessionId}get _sessionIdleThresholdMilliseconds(){return this._instance.config.session_recording.session_idle_threshold_ms||3e5}get started(){return this._captureStarted}get _sessionManager(){if(!this._instance.sessionManager)throw new Error(oi+" must be started with a valid sessionManager.")
return this._instance.sessionManager}get _fullSnapshotIntervalMillis(){var e,t
return this._triggerMatching.triggerStatus(this.sessionId)===Qr?6e4:null!==(e=null==(t=this._instance.config.session_recording)?void 0:t.full_snapshot_interval_millis)&&void 0!==e?e:3e5}get _isSampled(){var e=this._instance.get_property(Fe)
return V(e)?e:null}get _sessionDuration(){var e,t,n=null==(e=this._buffer)?void 0:e.data[(null==(t=this._buffer)?void 0:t.data.length)-1],{sessionStartTimestamp:r}=this._sessionManager.checkAndGetSessionAndWindowId(!0)
return n?n.timestamp-r:null}get _isRecordingEnabled(){var e=!!this._instance.get_property(Te),t=!this._instance.config.disable_session_recording
return p&&e&&t}get _isConsoleLogCaptureEnabled(){var e=!!this._instance.get_property(Pe),t=this._instance.config.enable_recording_console_log
return null!=t?t:e}get _canvasRecording(){var e,t,n,r,i,s,o=this._instance.config.session_recording.captureCanvas,a=this._instance.get_property(Ie),l=null!==(e=null!==(t=null==o?void 0:o.recordCanvas)&&void 0!==t?t:null==a?void 0:a.enabled)&&void 0!==e&&e,c=null!==(n=null!==(r=null==o?void 0:o.canvasFps)&&void 0!==r?r:null==a?void 0:a.fps)&&void 0!==n?n:4,u=null!==(i=null!==(s=null==o?void 0:o.canvasQuality)&&void 0!==s?s:null==a?void 0:a.quality)&&void 0!==i?i:.4
if("string"==typeof u){var d=parseFloat(u)
u=isNaN(d)?.4:d}return{enabled:l,fps:X(c,0,12,ai.createLogger("canvas recording fps"),4),quality:X(u,0,1,ai.createLogger("canvas recording quality"),.4)}}get _networkPayloadCapture(){var e,t,n=this._instance.get_property($e),r={recordHeaders:null==(e=this._instance.config.session_recording)?void 0:e.recordHeaders,recordBody:null==(t=this._instance.config.session_recording)?void 0:t.recordBody},i=(null==r?void 0:r.recordHeaders)||(null==n?void 0:n.recordHeaders),s=(null==r?void 0:r.recordBody)||(null==n?void 0:n.recordBody),o=D(this._instance.config.capture_performance)?this._instance.config.capture_performance.network_timing:this._instance.config.capture_performance,a=!!(V(o)?o:null==n?void 0:n.capturePerformance)
return i||s||a?{recordHeaders:i,recordBody:s,recordPerformance:a}:void 0}get _masking(){var e,t,n,r,i,s,o=this._instance.get_property(Le),a={maskAllInputs:null==(e=this._instance.config.session_recording)?void 0:e.maskAllInputs,maskTextSelector:null==(t=this._instance.config.session_recording)?void 0:t.maskTextSelector,blockSelector:null==(n=this._instance.config.session_recording)?void 0:n.blockSelector},l=null!==(r=null==a?void 0:a.maskAllInputs)&&void 0!==r?r:null==o?void 0:o.maskAllInputs,c=null!==(i=null==a?void 0:a.maskTextSelector)&&void 0!==i?i:null==o?void 0:o.maskTextSelector,u=null!==(s=null==a?void 0:a.blockSelector)&&void 0!==s?s:null==o?void 0:o.blockSelector
return q(l)&&q(c)&&q(u)?void 0:{maskAllInputs:null==l||l,maskTextSelector:c,blockSelector:u}}get _sampleRate(){var e=this._instance.get_property(Me)
return z(e)?e:null}get _minimumDuration(){var e=this._instance.get_property(Oe)
return z(e)?e:null}get status(){return this._receivedFlags?this._statusMatcher({receivedFlags:this._receivedFlags,isRecordingEnabled:this._isRecordingEnabled,isSampled:this._isSampled,urlTriggerMatching:this._urlTriggerMatching,eventTriggerMatching:this._eventTriggerMatching,linkedFlagMatching:this._linkedFlagMatching,sessionId:this.sessionId}):Gr}constructor(e){if(this._statusMatcher=ri,this._receivedFlags=!1,this._queuedRRWebEvents=[],this._isIdle="unknown",this._lastActivityTimestamp=Date.now(),this._triggerMatching=new Zr,this._removePageViewCaptureHook=void 0,this._onSessionIdListener=void 0,this._persistFlagsOnSessionListener=void 0,this._samplingSessionListener=void 0,this._removeEventTriggerCaptureHook=void 0,this._forceAllowLocalhostNetworkCapture=!1,this._onBeforeUnload=()=>{this._flushBuffer()},this._onOffline=()=>{this._tryAddCustomEvent("browser offline",{})},this._onOnline=()=>{this._tryAddCustomEvent("browser online",{})},this._onVisibilityChange=()=>{if(null!=y&&y.visibilityState){var e="window "+y.visibilityState
this._tryAddCustomEvent(e,{})}},this._instance=e,this._captureStarted=!1,this._endpoint="/s/",this._stopRrweb=void 0,this._receivedFlags=!1,!this._instance.sessionManager)throw ai.error("started without valid sessionManager"),new Error(oi+" started without valid sessionManager. This is a bug.")
if("always"===this._instance.config.cookieless_mode)throw new Error(oi+' cannot be used with cookieless_mode="always"')
this._linkedFlagMatching=new ti(this._instance),this._urlTriggerMatching=new ei(this._instance),this._eventTriggerMatching=new ni(this._instance)
var{sessionId:t,windowId:n}=this._sessionManager.checkAndGetSessionAndWindowId()
this._sessionId=t,this._windowId=n,this._buffer=this._clearBuffer(),this._sessionIdleThresholdMilliseconds>=this._sessionManager.sessionTimeoutMs&&ai.warn("session_idle_threshold_ms ("+this._sessionIdleThresholdMilliseconds+") is greater than the session timeout ("+this._sessionManager.sessionTimeoutMs+"). Session will never be detected as idle")}startIfEnabledOrStop(e){this._isRecordingEnabled?(this._startCapture(e),ge(p,"beforeunload",this._onBeforeUnload),ge(p,"offline",this._onOffline),ge(p,"online",this._onOnline),ge(p,"visibilitychange",this._onVisibilityChange),this._setupSampling(),this._addEventTriggerListener(),W(this._removePageViewCaptureHook)&&(this._removePageViewCaptureHook=this._instance.on("eventCaptured",e=>{try{if("$pageview"===e.event){var t=null!=e&&e.properties.$current_url?this._maskUrl(null==e?void 0:e.properties.$current_url):""
if(!t)return
this._tryAddCustomEvent("$pageview",{href:t})}}catch(e){ai.error("Could not add $pageview to rrweb session",e)}})),this._onSessionIdListener||(this._onSessionIdListener=this._sessionManager.onSessionId((e,t,n)=>{var r,i
n&&(this._tryAddCustomEvent("$session_id_change",{sessionId:e,windowId:t,changeReason:n}),null==(r=this._instance)||null==(r=r.persistence)||r.unregister(Ne),null==(i=this._instance)||null==(i=i.persistence)||i.unregister(je))}))):this.stopRecording()}stopRecording(){var e,t,n,r
this._captureStarted&&this._stopRrweb&&(this._stopRrweb(),this._stopRrweb=void 0,this._captureStarted=!1,null==p||p.removeEventListener("beforeunload",this._onBeforeUnload),null==p||p.removeEventListener("offline",this._onOffline),null==p||p.removeEventListener("online",this._onOnline),null==p||p.removeEventListener("visibilitychange",this._onVisibilityChange),this._clearBuffer(),clearInterval(this._fullSnapshotTimer),null==(e=this._removePageViewCaptureHook)||e.call(this),this._removePageViewCaptureHook=void 0,null==(t=this._removeEventTriggerCaptureHook)||t.call(this),this._removeEventTriggerCaptureHook=void 0,null==(n=this._onSessionIdListener)||n.call(this),this._onSessionIdListener=void 0,null==(r=this._samplingSessionListener)||r.call(this),this._samplingSessionListener=void 0,this._eventTriggerMatching.stop(),this._urlTriggerMatching.stop(),this._linkedFlagMatching.stop(),ai.info("stopped"))}_resetSampling(){var e
null==(e=this._instance.persistence)||e.unregister(Fe)}_makeSamplingDecision(e){var t,n=this._sessionId!==e,r=this._sampleRate
if(z(r)){var i=this._isSampled,s=n||!V(i),o=s?function(e,t){return function(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0
return Math.abs(t)}(e)%100<X(100*t,0,100,te)}(e,r):i
s&&(o?this._reportStarted(Hr):ai.warn("Sample rate ("+r+") has determined that this sessionId ("+e+") will not be sent to the server."),this._tryAddCustomEvent("samplingDecisionMade",{sampleRate:r,isSampled:o})),null==(t=this._instance.persistence)||t.register({[Fe]:o})}else this._resetSampling()}onRemoteConfig(e){var t,n,r,i
this._tryAddCustomEvent("$remote_config_received",e),this._persistRemoteConfig(e),null!=(t=e.sessionRecording)&&t.endpoint&&(this._endpoint=null==(i=e.sessionRecording)?void 0:i.endpoint),this._setupSampling(),"any"===(null==(n=e.sessionRecording)?void 0:n.triggerMatchType)?(this._statusMatcher=ii,this._triggerMatching=new Yr([this._eventTriggerMatching,this._urlTriggerMatching])):(this._statusMatcher=si,this._triggerMatching=new Xr([this._eventTriggerMatching,this._urlTriggerMatching])),this._instance.register_for_session({$sdk_debug_replay_remote_trigger_matching_config:null==(r=e.sessionRecording)?void 0:r.triggerMatchType}),this._urlTriggerMatching.onRemoteConfig(e),this._eventTriggerMatching.onRemoteConfig(e),this._linkedFlagMatching.onRemoteConfig(e,(e,t)=>{this._reportStarted("linked_flag_matched",{flag:e,variant:t})}),this._receivedFlags=!0,this.startIfEnabledOrStop()}_setupSampling(){z(this._sampleRate)&&W(this._samplingSessionListener)&&(this._samplingSessionListener=this._sessionManager.onSessionId(e=>{this._makeSamplingDecision(e)}))}_persistRemoteConfig(e){if(this._instance.persistence){var t,n=this._instance.persistence,r=()=>{var t,r,i,s,o,a,l,c,u,d=null==(t=e.sessionRecording)?void 0:t.sampleRate,h=W(d)?null:parseFloat(d)
W(h)&&this._resetSampling()
var p=null==(r=e.sessionRecording)?void 0:r.minimumDurationMilliseconds
n.register({[Te]:!!e.sessionRecording,[Pe]:null==(i=e.sessionRecording)?void 0:i.consoleLogRecordingEnabled,[$e]:f({capturePerformance:e.capturePerformance},null==(s=e.sessionRecording)?void 0:s.networkPayloadCapture),[Le]:null==(o=e.sessionRecording)?void 0:o.masking,[Ie]:{enabled:null==(a=e.sessionRecording)?void 0:a.recordCanvas,fps:null==(l=e.sessionRecording)?void 0:l.canvasFps,quality:null==(c=e.sessionRecording)?void 0:c.canvasQuality},[Me]:h,[Oe]:q(p)?null:p,[Re]:null==(u=e.sessionRecording)?void 0:u.scriptConfig})}
r(),null==(t=this._persistFlagsOnSessionListener)||t.call(this),this._persistFlagsOnSessionListener=this._sessionManager.onSessionId(r)}}log(e,t){var n
void 0===t&&(t="log"),null==(n=this._instance.sessionRecording)||n.onRRwebEmit({type:6,data:{plugin:"rrweb/console@1",payload:{level:t,trace:[],payload:[JSON.stringify(e)]}},timestamp:Date.now()})}_startCapture(e){var t
q(Object.assign)||q(Array.from)||(this._captureStarted||this._instance.config.disable_session_recording||this._instance.consent.isOptedOut())||(this._captureStarted=!0,this._sessionManager.checkAndGetSessionAndWindowId(),li()?this._onScriptLoaded():null==(t=C.__PosthogExtensions__)||null==t.loadExternalDependency||t.loadExternalDependency(this._instance,this._scriptName,e=>{if(e)return ai.error("could not load recorder",e)
this._onScriptLoaded()}),ai.info("starting"),this.status===Ur&&this._reportStarted(e||"recording_initialized"))}get _scriptName(){var e
return(null==(e=this._instance)||null==(e=e.persistence)||null==(e=e.get_property(Re))?void 0:e.script)||"recorder"}_isInteractiveEvent(e){var t
return 3===e.type&&-1!==ci.indexOf(null==(t=e.data)?void 0:t.source)}_updateWindowAndSessionIds(e){var t=this._isInteractiveEvent(e)
t||this._isIdle||e.timestamp-this._lastActivityTimestamp>this._sessionIdleThresholdMilliseconds&&(this._isIdle=!0,clearInterval(this._fullSnapshotTimer),this._tryAddCustomEvent("sessionIdle",{eventTimestamp:e.timestamp,lastActivityTimestamp:this._lastActivityTimestamp,threshold:this._sessionIdleThresholdMilliseconds,bufferLength:this._buffer.data.length,bufferSize:this._buffer.size}),this._flushBuffer())
var n=!1
if(t&&(this._lastActivityTimestamp=e.timestamp,this._isIdle)){var r="unknown"===this._isIdle
this._isIdle=!1,r||(this._tryAddCustomEvent("sessionNoLongerIdle",{reason:"user activity",type:e.type}),n=!0)}if(!this._isIdle){var{windowId:i,sessionId:s}=this._sessionManager.checkAndGetSessionAndWindowId(!t,e.timestamp),o=this._sessionId!==s,a=this._windowId!==i
this._windowId=i,this._sessionId=s,o||a?(this.stopRecording(),this.startIfEnabledOrStop("session_id_changed")):n&&this._scheduleFullSnapshot()}}_tryRRWebMethod(e){try{return e.rrwebMethod(),!0}catch(t){return this._queuedRRWebEvents.length<10?this._queuedRRWebEvents.push({enqueuedAt:e.enqueuedAt||Date.now(),attempt:e.attempt++,rrwebMethod:e.rrwebMethod}):ai.warn("could not emit queued rrweb event.",t,e),!1}}_tryAddCustomEvent(e,t){return this._tryRRWebMethod(ui(()=>li().addCustomEvent(e,t)))}_tryTakeFullSnapshot(){return this._tryRRWebMethod(ui(()=>li().takeFullSnapshot()))}_onScriptLoaded(){var e,t,n,r,i={blockClass:"ph-no-capture",blockSelector:void 0,ignoreClass:"ph-ignore-input",maskTextClass:"ph-mask",maskTextSelector:void 0,maskTextFn:void 0,maskAllInputs:!0,maskInputOptions:{password:!0},maskInputFn:void 0,slimDOMOptions:{},collectFonts:!1,inlineStylesheet:!0,recordCrossOriginIframes:!1},s=this._instance.config.session_recording
for(var[o,a]of Object.entries(s||{}))o in i&&("maskInputOptions"===o?i.maskInputOptions=f({password:!0},a):i[o]=a)
this._canvasRecording&&this._canvasRecording.enabled&&(i.recordCanvas=!0,i.sampling={canvas:this._canvasRecording.fps},i.dataURLOptions={type:"image/webp",quality:this._canvasRecording.quality}),this._masking&&(i.maskAllInputs=null===(t=this._masking.maskAllInputs)||void 0===t||t,i.maskTextSelector=null!==(n=this._masking.maskTextSelector)&&void 0!==n?n:void 0,i.blockSelector=null!==(r=this._masking.blockSelector)&&void 0!==r?r:void 0)
var l=li()
if(l){this._mutationThrottler=null!==(e=this._mutationThrottler)&&void 0!==e?e:new or(l,{refillRate:this._instance.config.session_recording.__mutationThrottlerRefillRate,bucketSize:this._instance.config.session_recording.__mutationThrottlerBucketSize,onBlockedNode:(e,t)=>{var n="Too many mutations on node '"+e+"'. Rate limiting. This could be due to SVG animations or something similar"
ai.info(n,{node:t}),this.log(oi+" "+n,"warn")}})
var c=this._gatherRRWebPlugins()
this._stopRrweb=l(f({emit:e=>{this.onRRwebEmit(e)},plugins:c},i)),this._lastActivityTimestamp=Date.now(),this._isIdle=V(this._isIdle)?this._isIdle:"unknown",this._tryAddCustomEvent("$session_options",{sessionRecordingOptions:i,activePlugins:c.map(e=>null==e?void 0:e.name)}),this._tryAddCustomEvent("$posthog_config",{config:this._instance.config})}else ai.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")}_scheduleFullSnapshot(){if(this._fullSnapshotTimer&&clearInterval(this._fullSnapshotTimer),!0!==this._isIdle){var e=this._fullSnapshotIntervalMillis
e&&(this._fullSnapshotTimer=setInterval(()=>{this._tryTakeFullSnapshot()},e))}}_gatherRRWebPlugins(){var e,t,n=[],r=null==(e=C.__PosthogExtensions__)||null==(e=e.rrwebPlugins)?void 0:e.getRecordConsolePlugin
r&&this._isConsoleLogCaptureEnabled&&n.push(r())
var i=null==(t=C.__PosthogExtensions__)||null==(t=t.rrwebPlugins)?void 0:t.getRecordNetworkPlugin
return this._networkPayloadCapture&&N(i)&&(!Rt.includes(location.hostname)||this._forceAllowLocalhostNetworkCapture?n.push(i(sr(this._instance.config,this._networkPayloadCapture))):ai.info("NetworkCapture not started because we are on localhost.")),n}onRRwebEmit(e){var t
if(this._processQueuedEvents(),e&&D(e)){if(e.type===Jn.Meta){var n=this._maskUrl(e.data.href)
if(this._lastHref=n,!n)return
e.data.href=n}else this._pageViewFallBack()
if(this._urlTriggerMatching.checkUrlTriggerConditions(()=>this._pauseRecording(),()=>this._resumeRecording(),e=>this._activateTrigger(e)),!this._urlTriggerMatching.urlBlocked||(r=e).type===Jn.Custom&&"recording paused"===r.data.tag){var r
e.type===Jn.FullSnapshot&&this._scheduleFullSnapshot(),e.type===Jn.FullSnapshot&&this._receivedFlags&&this._triggerMatching.triggerStatus(this.sessionId)===Qr&&this._clearBuffer()
var i=this._mutationThrottler?this._mutationThrottler.throttleMutations(e):e
if(i){var s=function(e){var t=e
if(t&&D(t)&&6===t.type&&D(t.data)&&"rrweb/console@1"===t.data.plugin){t.data.payload.payload.length>10&&(t.data.payload.payload=t.data.payload.payload.slice(0,10),t.data.payload.payload.push("...[truncated]"))
for(var n=[],r=0;r<t.data.payload.payload.length;r++)t.data.payload.payload[r]&&t.data.payload.payload[r].length>2e3?n.push(t.data.payload.payload[r].slice(0,2e3)+"...[truncated]"):n.push(t.data.payload.payload[r])
return t.data.payload.payload=n,e}return e}(i)
if(this._updateWindowAndSessionIds(s),!0!==this._isIdle||fi(s)){if(fi(s)){var o=s.data.payload
if(o){var a=o.lastActivityTimestamp,l=o.threshold
s.timestamp=a+l}}var c=null===(t=this._instance.config.session_recording.compress_events)||void 0===t||t?function(e){if(Vn(e)<1024)return e
try{if(e.type===Jn.FullSnapshot)return f({},e,{data:di(e.data),cv:"2024-10"})
if(e.type===Jn.IncrementalSnapshot&&e.data.source===Kn.Mutation)return f({},e,{cv:"2024-10",data:f({},e.data,{texts:di(e.data.texts),attributes:di(e.data.attributes),removes:di(e.data.removes),adds:di(e.data.adds)})})
if(e.type===Jn.IncrementalSnapshot&&e.data.source===Kn.StyleSheetRule)return f({},e,{cv:"2024-10",data:f({},e.data,{adds:e.data.adds?di(e.data.adds):void 0,removes:e.data.removes?di(e.data.removes):void 0})})}catch(e){ai.error("could not compress event - will use uncompressed event",e)}return e}(s):s,u={$snapshot_bytes:Vn(c),$snapshot_data:c,$session_id:this._sessionId,$window_id:this._windowId}
this.status!==qr?this._captureSnapshotBuffered(u):this._clearBuffer()}}}}}_pageViewFallBack(){if(!this._instance.config.capture_pageview&&p){var e=this._maskUrl(p.location.href)
this._lastHref!==e&&(this._tryAddCustomEvent("$url_changed",{href:e}),this._lastHref=e)}}_processQueuedEvents(){if(this._queuedRRWebEvents.length){var e=[...this._queuedRRWebEvents]
this._queuedRRWebEvents=[],e.forEach(e=>{Date.now()-e.enqueuedAt<=2e3&&this._tryRRWebMethod(e)})}}_maskUrl(e){var t=this._instance.config.session_recording
if(t.maskNetworkRequestFn){var n,r={url:e}
return null==(n=r=t.maskNetworkRequestFn(r))?void 0:n.url}return e}_clearBuffer(){return this._buffer={size:0,data:[],sessionId:this._sessionId,windowId:this._windowId},this._buffer}_flushBuffer(){this._flushBufferTimer&&(clearTimeout(this._flushBufferTimer),this._flushBufferTimer=void 0)
var e=this._minimumDuration,t=this._sessionDuration,n=z(t)&&t>=0,r=z(e)&&n&&t<e
return this.status===Gr||this.status===Wr||this.status===qr||r?(this._flushBufferTimer=setTimeout(()=>{this._flushBuffer()},2e3),this._buffer):(this._buffer.data.length>0&&Qn(this._buffer).forEach(e=>{this._captureSnapshot({$snapshot_bytes:e.size,$snapshot_data:e.data,$session_id:e.sessionId,$window_id:e.windowId,$lib:"web",$lib_version:T.LIB_VERSION})}),this._clearBuffer())}_captureSnapshotBuffered(e){var t,n=2+((null==(t=this._buffer)?void 0:t.data.length)||0)
!this._isIdle&&(this._buffer.size+e.$snapshot_bytes+n>943718.4||this._buffer.sessionId!==this._sessionId)&&(this._buffer=this._flushBuffer()),this._buffer.size+=e.$snapshot_bytes,this._buffer.data.push(e.$snapshot_data),this._flushBufferTimer||this._isIdle||(this._flushBufferTimer=setTimeout(()=>{this._flushBuffer()},2e3))}_captureSnapshot(e){this._instance.capture("$snapshot",e,{_url:this._instance.requestRouter.endpointFor("api",this._endpoint),_noTruncate:!0,_batchKey:"recordings",skip_client_rate_limiting:!0})}_activateTrigger(e){var t
this._triggerMatching.triggerStatus(this.sessionId)===Qr&&(null==(t=this._instance)||null==(t=t.persistence)||t.register({["url"===e?je:Ne]:this._sessionId}),this._flushBuffer(),this._reportStarted(e+"_trigger_matched"))}_pauseRecording(){this._urlTriggerMatching.urlBlocked||(this._urlTriggerMatching.urlBlocked=!0,clearInterval(this._fullSnapshotTimer),ai.info("recording paused due to URL blocker"),this._tryAddCustomEvent("recording paused",{reason:"url blocker"}))}_resumeRecording(){this._urlTriggerMatching.urlBlocked&&(this._urlTriggerMatching.urlBlocked=!1,this._tryTakeFullSnapshot(),this._scheduleFullSnapshot(),this._tryAddCustomEvent("recording resumed",{reason:"left blocked url"}),ai.info("recording resumed"))}_addEventTriggerListener(){0!==this._eventTriggerMatching._eventTriggers.length&&W(this._removeEventTriggerCaptureHook)&&(this._removeEventTriggerCaptureHook=this._instance.on("eventCaptured",e=>{try{this._eventTriggerMatching._eventTriggers.includes(e.event)&&this._activateTrigger("event")}catch(e){ai.error("Could not activate event trigger",e)}}))}overrideLinkedFlag(){this._linkedFlagMatching.linkedFlagSeen=!0,this._tryTakeFullSnapshot(),this._reportStarted("linked_flag_overridden")}overrideSampling(){var e
null==(e=this._instance.persistence)||e.register({[Fe]:!0}),this._tryTakeFullSnapshot(),this._reportStarted("sampling_overridden")}overrideTrigger(e){this._activateTrigger(e)}_reportStarted(e,t){this._instance.register_for_session({$session_recording_start_reason:e}),ai.info(e.replace("_"," "),t),L(["recording_initialized","session_id_changed"],e)||this._tryAddCustomEvent(e,t)}get sdkDebugProperties(){var{sessionStartTimestamp:e}=this._sessionManager.checkAndGetSessionAndWindowId(!0)
return{$recording_status:this.status,$sdk_debug_replay_internal_buffer_length:this._buffer.data.length,$sdk_debug_replay_internal_buffer_size:this._buffer.size,$sdk_debug_current_session_duration:this._sessionDuration,$sdk_debug_session_start:e}}}var pi=ne("[SegmentIntegration]")
var gi="posthog-js"
function vi(e,t){var{organization:n,projectId:r,prefix:i,severityAllowList:s=["error"]}=void 0===t?{}:t
return t=>{var o,a,l,c,u
if("*"!==s&&!s.includes(t.level)||!e.__loaded)return t
t.tags||(t.tags={})
var d=e.requestRouter.endpointFor("ui","/project/"+e.config.token+"/person/"+e.get_distinct_id())
t.tags["PostHog Person URL"]=d,e.sessionRecordingStarted()&&(t.tags["PostHog Recording URL"]=e.get_session_replay_url({withTimestamp:!0}))
var h=(null==(o=t.exception)?void 0:o.values)||[],p=h.map(e=>f({},e,{stacktrace:e.stacktrace?f({},e.stacktrace,{type:"raw",frames:(e.stacktrace.frames||[]).map(e=>f({},e,{platform:"web:javascript"}))}):void 0})),g={$exception_message:(null==(a=h[0])?void 0:a.value)||t.message,$exception_type:null==(l=h[0])?void 0:l.type,$exception_personURL:d,$exception_level:t.level,$exception_list:p,$sentry_event_id:t.event_id,$sentry_exception:t.exception,$sentry_exception_message:(null==(c=h[0])?void 0:c.value)||t.message,$sentry_exception_type:null==(u=h[0])?void 0:u.type,$sentry_tags:t.tags}
return n&&r&&(g.$sentry_url=(i||"https://sentry.io/organizations/")+n+"/issues/?project="+r+"&query="+t.event_id),e.exceptions.sendExceptionEvent(g),t}}class _i{constructor(e,t,n,r,i){this.name=gi,this.setupOnce=function(s){s(vi(e,{organization:t,projectId:n,prefix:r,severityAllowList:i}))}}}var mi=null!=p&&p.location?Nt(p.location.hash,"__posthog")||Nt(location.hash,"state"):null,bi="_postHogToolbarParams",yi=ne("[Toolbar]"),wi=function(e){return e[e.UNINITIALIZED=0]="UNINITIALIZED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED",e}(wi||{})
class ki{constructor(e){this.instance=e}_setToolbarState(e){C.ph_toolbar_state=e}_getToolbarState(){var e
return null!==(e=C.ph_toolbar_state)&&void 0!==e?e:wi.UNINITIALIZED}maybeLoadToolbar(e,t,n){if(void 0===e&&(e=void 0),void 0===t&&(t=void 0),void 0===n&&(n=void 0),!p||!y)return!1
e=null!=e?e:p.location,n=null!=n?n:p.history
try{if(!t){try{p.localStorage.setItem("test","test"),p.localStorage.removeItem("test")}catch(e){return!1}t=null==p?void 0:p.localStorage}var r,i=mi||Nt(e.hash,"__posthog")||Nt(e.hash,"state"),s=i?ce(()=>JSON.parse(atob(decodeURIComponent(i))))||ce(()=>JSON.parse(decodeURIComponent(i))):null
return s&&"ph_authorize"===s.action?((r=s).source="url",r&&Object.keys(r).length>0&&(s.desiredHash?e.hash=s.desiredHash:n?n.replaceState(n.state,"",e.pathname+e.search):e.hash="")):((r=JSON.parse(t.getItem(bi)||"{}")).source="localstorage",delete r.userIntent),!(!r.token||this.instance.config.token!==r.token||(this.loadToolbar(r),0))}catch(e){return!1}}_callLoadToolbar(e){var t=C.ph_load_toolbar||C.ph_load_editor
!W(t)&&N(t)?t(e,this.instance):yi.warn("No toolbar load function found")}loadToolbar(e){var t=!(null==y||!y.getElementById(et))
if(!p||t)return!1
var n="custom"===this.instance.requestRouter.region&&this.instance.config.advanced_disable_toolbar_metrics,r=f({token:this.instance.config.token},e,{apiURL:this.instance.requestRouter.endpointFor("ui")},n?{instrument:!1}:{})
if(p.localStorage.setItem(bi,JSON.stringify(f({},r,{source:void 0}))),this._getToolbarState()===wi.LOADED)this._callLoadToolbar(r)
else if(this._getToolbarState()===wi.UNINITIALIZED){var i
this._setToolbarState(wi.LOADING),null==(i=C.__PosthogExtensions__)||null==i.loadExternalDependency||i.loadExternalDependency(this.instance,"toolbar",e=>{if(e)return yi.error("[Toolbar] Failed to load",e),void this._setToolbarState(wi.UNINITIALIZED)
this._setToolbarState(wi.LOADED),this._callLoadToolbar(r)}),ge(p,"turbolinks:load",()=>{this._setToolbarState(wi.UNINITIALIZED),this.loadToolbar(r)})}return!0}_loadEditor(e){return this.loadToolbar(e)}maybeLoadEditor(e,t,n){return void 0===e&&(e=void 0),void 0===t&&(t=void 0),void 0===n&&(n=void 0),this.maybeLoadToolbar(e,t,n)}}var Si=ne("[TracingHeaders]")
class xi{constructor(e){this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0,this._startCapturing=()=>{var e,t
q(this._restoreXHRPatch)&&(null==(e=C.__PosthogExtensions__)||null==(e=e.tracingHeadersPatchFns)||e._patchXHR(this._instance.config.__add_tracing_headers||[],this._instance.get_distinct_id(),this._instance.sessionManager)),q(this._restoreFetchPatch)&&(null==(t=C.__PosthogExtensions__)||null==(t=t.tracingHeadersPatchFns)||t._patchFetch(this._instance.config.__add_tracing_headers||[],this._instance.get_distinct_id(),this._instance.sessionManager))},this._instance=e}_loadScript(e){var t,n
null!=(t=C.__PosthogExtensions__)&&t.tracingHeadersPatchFns&&e(),null==(n=C.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"tracing-headers",t=>{if(t)return Si.error("failed to load script",t)
e()})}startIfEnabledOrStop(){var e,t
this._instance.config.__add_tracing_headers?this._loadScript(this._startCapturing):(null==(e=this._restoreXHRPatch)||e.call(this),null==(t=this._restoreFetchPatch)||t.call(this),this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0)}}var Ei=ne("[Web Vitals]"),Ci=9e5
class Ti{constructor(e){var t
this._enabledServerSide=!1,this._initialized=!1,this._buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0},this._flushToCapture=()=>{clearTimeout(this._delayedFlushTimer),0!==this._buffer.metrics.length&&(this._instance.capture("$web_vitals",this._buffer.metrics.reduce((e,t)=>f({},e,{["$web_vitals_"+t.name+"_event"]:f({},t),["$web_vitals_"+t.name+"_value"]:t.value}),{})),this._buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0})},this._addToBuffer=e=>{var t,n=null==(t=this._instance.sessionManager)?void 0:t.checkAndGetSessionAndWindowId(!0)
if(q(n))Ei.error("Could not read session ID. Dropping metrics!")
else{this._buffer=this._buffer||{url:void 0,metrics:[],firstMetricTimestamp:void 0}
var r=this._currentURL()
q(r)||(W(null==e?void 0:e.name)||W(null==e?void 0:e.value)?Ei.error("Invalid metric received",e):this._maxAllowedValue&&e.value>=this._maxAllowedValue?Ei.error("Ignoring metric with value >= "+this._maxAllowedValue,e):(this._buffer.url!==r&&(this._flushToCapture(),this._delayedFlushTimer=setTimeout(this._flushToCapture,this.flushToCaptureTimeoutMs)),q(this._buffer.url)&&(this._buffer.url=r),this._buffer.firstMetricTimestamp=q(this._buffer.firstMetricTimestamp)?Date.now():this._buffer.firstMetricTimestamp,e.attribution&&e.attribution.interactionTargetElement&&(e.attribution.interactionTargetElement=void 0),this._buffer.metrics.push(f({},e,{$current_url:r,$session_id:n.sessionId,$window_id:n.windowId,timestamp:Date.now()})),this._buffer.metrics.length===this.allowedMetrics.length&&this._flushToCapture()))}},this._startCapturing=()=>{var e,t,n,r,i=C.__PosthogExtensions__
q(i)||q(i.postHogWebVitalsCallbacks)||({onLCP:e,onCLS:t,onFCP:n,onINP:r}=i.postHogWebVitalsCallbacks),e&&t&&n&&r?(this.allowedMetrics.indexOf("LCP")>-1&&e(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("CLS")>-1&&t(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("FCP")>-1&&n(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("INP")>-1&&r(this._addToBuffer.bind(this)),this._initialized=!0):Ei.error("web vitals callbacks not loaded - not starting")},this._instance=e,this._enabledServerSide=!(null==(t=this._instance.persistence)||!t.props[xe]),this.startIfEnabled()}get allowedMetrics(){var e,t,n=D(this._instance.config.capture_performance)?null==(e=this._instance.config.capture_performance)?void 0:e.web_vitals_allowed_metrics:void 0
return q(n)?(null==(t=this._instance.persistence)?void 0:t.props[Ce])||["CLS","FCP","INP","LCP"]:n}get flushToCaptureTimeoutMs(){return(D(this._instance.config.capture_performance)?this._instance.config.capture_performance.web_vitals_delayed_flush_ms:void 0)||5e3}get _maxAllowedValue(){var e=D(this._instance.config.capture_performance)&&z(this._instance.config.capture_performance.__web_vitals_max_value)?this._instance.config.capture_performance.__web_vitals_max_value:Ci
return 0<e&&e<=6e4?Ci:e}get isEnabled(){var e=null==w?void 0:w.protocol
if("http:"!==e&&"https:"!==e)return Ei.info("Web Vitals are disabled on non-http/https protocols"),!1
var t=D(this._instance.config.capture_performance)?this._instance.config.capture_performance.web_vitals:V(this._instance.config.capture_performance)?this._instance.config.capture_performance:void 0
return V(t)?t:this._enabledServerSide}startIfEnabled(){this.isEnabled&&!this._initialized&&(Ei.info("enabled, starting..."),this._loadScript(this._startCapturing))}onRemoteConfig(e){var t=D(e.capturePerformance)&&!!e.capturePerformance.web_vitals,n=D(e.capturePerformance)?e.capturePerformance.web_vitals_allowed_metrics:void 0
this._instance.persistence&&(this._instance.persistence.register({[xe]:t}),this._instance.persistence.register({[Ce]:n})),this._enabledServerSide=t,this.startIfEnabled()}_loadScript(e){var t,n
null!=(t=C.__PosthogExtensions__)&&t.postHogWebVitalsCallbacks&&e(),null==(n=C.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"web-vitals",t=>{t?Ei.error("failed to load script",t):e()})}_currentURL(){var e=p?p.location.href:void 0
return e||Ei.error("Could not determine current URL"),e}}var Pi=ne("[Heatmaps]")
function $i(e){return D(e)&&"clientX"in e&&"clientY"in e&&z(e.clientX)&&z(e.clientY)}class Li{constructor(e){var t
this.rageclicks=new Lt,this._enabledServerSide=!1,this._initialized=!1,this._flushInterval=null,this.instance=e,this._enabledServerSide=!(null==(t=this.instance.persistence)||!t.props[ye])}get flushIntervalMilliseconds(){var e=5e3
return D(this.instance.config.capture_heatmaps)&&this.instance.config.capture_heatmaps.flush_interval_milliseconds&&(e=this.instance.config.capture_heatmaps.flush_interval_milliseconds),e}get isEnabled(){return q(this.instance.config.capture_heatmaps)?q(this.instance.config.enable_heatmaps)?this._enabledServerSide:this.instance.config.enable_heatmaps:!1!==this.instance.config.capture_heatmaps}startIfEnabled(){if(this.isEnabled){if(this._initialized)return
Pi.info("starting..."),this._setupListeners(),this._flushInterval=setInterval(this._flush.bind(this),this.flushIntervalMilliseconds)}else{var e,t
clearInterval(null!==(e=this._flushInterval)&&void 0!==e?e:void 0),null==(t=this._deadClicksCapture)||t.stop(),this.getAndClearBuffer()}}onRemoteConfig(e){var t=!!e.heatmaps
this.instance.persistence&&this.instance.persistence.register({[ye]:t}),this._enabledServerSide=t,this.startIfEnabled()}getAndClearBuffer(){var e=this._buffer
return this._buffer=void 0,e}_onDeadClick(e){this._onClick(e.originalEvent,"deadclick")}_setupListeners(){p&&y&&(ge(p,"beforeunload",this._flush.bind(this)),ge(y,"click",e=>this._onClick(e||(null==p?void 0:p.event)),{capture:!0}),ge(y,"mousemove",e=>this._onMouseMove(e||(null==p?void 0:p.event)),{capture:!0}),this._deadClicksCapture=new gn(this.instance,hn,this._onDeadClick.bind(this)),this._deadClicksCapture.startIfEnabled(),this._initialized=!0)}_getProperties(e,t){var n=this.instance.scrollManager.scrollY(),r=this.instance.scrollManager.scrollX(),i=this.instance.scrollManager.scrollElement(),s=function(e,t,n){for(var r=e;r&&it(r)&&!st(r,"body");){if(r===n)return!1
if(L(t,null==p?void 0:p.getComputedStyle(r).position))return!0
r=gt(r)}return!1}(ht(e),["fixed","sticky"],i)
return{x:e.clientX+(s?0:r),y:e.clientY+(s?0:n),target_fixed:s,type:t}}_onClick(e,t){var n
if(void 0===t&&(t="click"),!rt(e.target)&&$i(e)){var r=this._getProperties(e,t)
null!=(n=this.rageclicks)&&n.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._capture(f({},r,{type:"rageclick"})),this._capture(r)}}_onMouseMove(e){!rt(e.target)&&$i(e)&&(clearTimeout(this._mouseMoveTimeout),this._mouseMoveTimeout=setTimeout(()=>{this._capture(this._getProperties(e,"mousemove"))},500))}_capture(e){if(p){var t=p.location.href
this._buffer=this._buffer||{},this._buffer[t]||(this._buffer[t]=[]),this._buffer[t].push(e)}}_flush(){this._buffer&&!B(this._buffer)&&this.instance.capture("$$heatmap",{$heatmap_data:this.getAndClearBuffer()})}}class Ii{constructor(e){this._instance=e}doPageView(e,t){var n,r=this._previousPageViewProperties(e,t)
return this._currentPageview={pathname:null!==(n=null==p?void 0:p.location.pathname)&&void 0!==n?n:"",pageViewId:t,timestamp:e},this._instance.scrollManager.resetContext(),r}doPageLeave(e){var t
return this._previousPageViewProperties(e,null==(t=this._currentPageview)?void 0:t.pageViewId)}doEvent(){var e
return{$pageview_id:null==(e=this._currentPageview)?void 0:e.pageViewId}}_previousPageViewProperties(e,t){var n=this._currentPageview
if(!n)return{$pageview_id:t}
var r={$pageview_id:t,$prev_pageview_id:n.pageViewId},i=this._instance.scrollManager.getContext()
if(i&&!this._instance.config.disable_scroll_properties){var{maxScrollHeight:s,lastScrollY:o,maxScrollY:a,maxContentHeight:l,lastContentY:c,maxContentY:u}=i
if(!(q(s)||q(o)||q(a)||q(l)||q(c)||q(u))){s=Math.ceil(s),o=Math.ceil(o),a=Math.ceil(a),l=Math.ceil(l),c=Math.ceil(c),u=Math.ceil(u)
var d=s<=1?1:X(o/s,0,1,te),f=s<=1?1:X(a/s,0,1,te),h=l<=1?1:X(c/l,0,1,te),p=l<=1?1:X(u/l,0,1,te)
r=oe(r,{$prev_pageview_last_scroll:o,$prev_pageview_last_scroll_percentage:d,$prev_pageview_max_scroll:a,$prev_pageview_max_scroll_percentage:f,$prev_pageview_last_content:c,$prev_pageview_last_content_percentage:h,$prev_pageview_max_content:u,$prev_pageview_max_content_percentage:p})}}return n.pathname&&(r.$prev_pageview_pathname=n.pathname),n.timestamp&&(r.$prev_pageview_duration=(e.getTime()-n.timestamp.getTime())/1e3),r}}var Mi=!!S||!!k,Oi="text/plain",Ri=(e,t)=>{var[n,r]=e.split("?"),i=f({},t)
null==r||r.split("&").forEach(e=>{var[t]=e.split("=")
delete i[t]})
var s=function(e,t){var n,r
void 0===t&&(t="&")
var i=[]
return se(e,function(e,t){q(e)||q(t)||"undefined"===t||(n=encodeURIComponent((e=>e instanceof File)(e)?e.name:e.toString()),r=encodeURIComponent(t),i[i.length]=r+"="+n)}),i.join(t)}(i)
return n+"?"+(s?(r?r+"&":"")+s:r)},Ai=(e,t)=>JSON.stringify(e,(e,t)=>"bigint"==typeof t?t.toString():t,t),Fi=e=>{var{data:t,compression:n}=e
if(t){if(n===Mt.GZipJS){var r=Dr(Br(Ai(t)),{mtime:0}),i=new Blob([r],{type:Oi})
return{contentType:Oi,body:i,estimatedSize:i.size}}if(n===Mt.Base64){var s=function(e){var t,n,r,i,s,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a=0,l=0,c="",u=[]
if(!e)return e
e=function(e){var t,n,r,i,s=""
for(t=n=0,r=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,i=0;i<r;i++){var o=e.charCodeAt(i),a=null
o<128?n++:a=o>127&&o<2048?String.fromCharCode(o>>6|192,63&o|128):String.fromCharCode(o>>12|224,o>>6&63|128,63&o|128),G(a)||(n>t&&(s+=e.substring(t,n)),s+=a,t=n=i+1)}return n>t&&(s+=e.substring(t,e.length)),s}(e)
do{t=(s=e.charCodeAt(a++)<<16|e.charCodeAt(a++)<<8|e.charCodeAt(a++))>>18&63,n=s>>12&63,r=s>>6&63,i=63&s,u[l++]=o.charAt(t)+o.charAt(n)+o.charAt(r)+o.charAt(i)}while(a<e.length)
switch(c=u.join(""),e.length%3){case 1:c=c.slice(0,-2)+"=="
break
case 2:c=c.slice(0,-1)+"="}return c}(Ai(t)),o=(e=>"data="+encodeURIComponent("string"==typeof e?e:Ai(e)))(s)
return{contentType:"application/x-www-form-urlencoded",body:o,estimatedSize:new Blob([o]).size}}var a=Ai(t)
return{contentType:"application/json",body:a,estimatedSize:new Blob([a]).size}}},ji=[]
k&&ji.push({transport:"fetch",method:e=>{var t,n,{contentType:r,body:i,estimatedSize:s}=null!==(t=Fi(e))&&void 0!==t?t:{},o=new Headers
se(e.headers,function(e,t){o.append(t,e)}),r&&o.append("Content-Type",r)
var a=e.url,l=null
if(x){var c=new x
l={signal:c.signal,timeout:setTimeout(()=>c.abort(),e.timeout)}}k(a,f({method:(null==e?void 0:e.method)||"GET",headers:o,keepalive:"POST"===e.method&&(s||0)<52428.8,body:i,signal:null==(n=l)?void 0:n.signal},e.fetchOptions)).then(t=>t.text().then(n=>{var r={statusCode:t.status,text:n}
if(200===t.status)try{r.json=JSON.parse(n)}catch(e){te.error(e)}null==e.callback||e.callback(r)})).catch(t=>{te.error(t),null==e.callback||e.callback({statusCode:0,text:t})}).finally(()=>l?clearTimeout(l.timeout):null)}}),S&&ji.push({transport:"XHR",method:e=>{var t,n=new S
n.open(e.method||"GET",e.url,!0)
var{contentType:r,body:i}=null!==(t=Fi(e))&&void 0!==t?t:{}
se(e.headers,function(e,t){n.setRequestHeader(t,e)}),r&&n.setRequestHeader("Content-Type",r),e.timeout&&(n.timeout=e.timeout),n.withCredentials=!0,n.onreadystatechange=()=>{if(4===n.readyState){var t={statusCode:n.status,text:n.responseText}
if(200===n.status)try{t.json=JSON.parse(n.responseText)}catch(e){}null==e.callback||e.callback(t)}},n.send(i)}}),null!=b&&b.sendBeacon&&ji.push({transport:"sendBeacon",method:e=>{var t=Ri(e.url,{beacon:"1"})
try{var n,{contentType:r,body:i}=null!==(n=Fi(e))&&void 0!==n?n:{},s="string"==typeof i?new Blob([i],{type:r}):i
b.sendBeacon(t,s)}catch(e){}}})
var Ni=function(e,t){if(!function(e){try{new RegExp(e)}catch(e){return!1}return!0}(t))return!1
try{return new RegExp(t).test(e)}catch(e){return!1}}
function Di(e,t,n){return Ai({distinct_id:e,userPropertiesToSet:t,userPropertiesToSetOnce:n})}var Bi={exact:(e,t)=>t.some(t=>e.some(e=>t===e)),is_not:(e,t)=>t.every(t=>e.every(e=>t!==e)),regex:(e,t)=>t.some(t=>e.some(e=>Ni(t,e))),not_regex:(e,t)=>t.every(t=>e.every(e=>!Ni(t,e))),icontains:(e,t)=>t.map(qi).some(t=>e.map(qi).some(e=>t.includes(e))),not_icontains:(e,t)=>t.map(qi).every(t=>e.map(qi).every(e=>!t.includes(e)))},qi=e=>e.toLowerCase(),Hi=ne("[Error tracking]")
class Ui{constructor(e){var t,n
this._suppressionRules=[],this._instance=e,this._suppressionRules=null!==(t=null==(n=this._instance.persistence)?void 0:n.get_property(ke))&&void 0!==t?t:[]}onRemoteConfig(e){var t,n,r,i=null!==(t=null==(n=e.errorTracking)?void 0:n.suppressionRules)&&void 0!==t?t:[],s=null==(r=e.errorTracking)?void 0:r.captureExtensionExceptions
this._suppressionRules=i,this._instance.persistence&&this._instance.persistence.register({[ke]:this._suppressionRules,[Se]:s})}get _captureExtensionExceptions(){var e,t=!!this._instance.get_property(Se),n=this._instance.config.error_tracking.captureExtensionExceptions
return null!==(e=null!=n?n:t)&&void 0!==e&&e}sendExceptionEvent(e){if(this._matchesSuppressionRule(e))Hi.info("Skipping exception capture because a suppression rule matched")
else{if(this._captureExtensionExceptions||!this._isExtensionException(e))return this._instance.capture("$exception",e,{_noTruncate:!0,_batchKey:"exceptionEvent"})
Hi.info("Skipping exception capture because it was thrown by an extension")}}_matchesSuppressionRule(e){var t=e.$exception_list
if(!t||!j(t)||0===t.length)return!1
var n=t.reduce((e,t)=>{var{type:n,value:r}=t
return H(n)&&n.length>0&&e.$exception_types.push(n),H(r)&&r.length>0&&e.$exception_values.push(r),e},{$exception_types:[],$exception_values:[]})
return this._suppressionRules.some(e=>{var t=e.values.map(e=>{var t,r=Bi[e.operator],i=j(e.value)?e.value:[e.value],s=null!==(t=n[e.key])&&void 0!==t?t:[]
return i.length>0&&r(i,s)})
return"OR"===e.type?t.some(Boolean):t.every(Boolean)})}_isExtensionException(e){var t=e.$exception_list
return!(!t||!j(t))&&t.flatMap(e=>{var t,n
return null!==(t=null==(n=e.stacktrace)?void 0:n.frames)&&void 0!==t?t:[]}).some(e=>e.filename&&e.filename.startsWith("chrome-extension://"))}}var Gi="Mobile",Wi="iOS",zi="Android",Vi="Tablet",Qi=zi+" "+Vi,Ji="iPad",Ki="Apple",Yi=Ki+" Watch",Xi="Safari",Zi="BlackBerry",es="Samsung",ts=es+"Browser",ns=es+" Internet",rs="Chrome",is=rs+" OS",ss=rs+" "+Wi,os="Internet Explorer",as=os+" "+Gi,ls="Opera",cs=ls+" Mini",us="Edge",ds="Microsoft "+us,fs="Firefox",hs=fs+" "+Wi,ps="Nintendo",gs="PlayStation",vs="Xbox",_s=zi+" "+Gi,ms=Gi+" "+Xi,bs="Windows",ys=bs+" Phone",ws="Nokia",ks="Ouya",Ss="Generic",xs=Ss+" "+Gi.toLowerCase(),Es=Ss+" "+Vi.toLowerCase(),Cs="Konqueror",Ts="(\\d+(\\.\\d+)?)",Ps=new RegExp("Version/"+Ts),$s=new RegExp(vs,"i"),Ls=new RegExp(gs+" \\w+","i"),Is=new RegExp(ps+" \\w+","i"),Ms=new RegExp(Zi+"|PlayBook|BB10","i"),Os={"NT3.51":"NT 3.11","NT4.0":"NT 4.0","5.0":"2000",5.1:"XP",5.2:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1",6.4:"10","10.0":"10"},Rs=function(e,t){return t=t||"",L(e," OPR/")&&L(e,"Mini")?cs:L(e," OPR/")?ls:Ms.test(e)?Zi:L(e,"IE"+Gi)||L(e,"WPDesktop")?as:L(e,ts)?ns:L(e,us)||L(e,"Edg/")?ds:L(e,"FBIOS")?"Facebook "+Gi:L(e,"UCWEB")||L(e,"UCBrowser")?"UC Browser":L(e,"CriOS")?ss:L(e,"CrMo")||L(e,rs)?rs:L(e,zi)&&L(e,Xi)?_s:L(e,"FxiOS")?hs:L(e.toLowerCase(),Cs.toLowerCase())?Cs:((e,t)=>t&&L(t,Ki)||function(e){return L(e,Xi)&&!L(e,rs)&&!L(e,zi)}(e))(e,t)?L(e,Gi)?ms:Xi:L(e,fs)?fs:L(e,"MSIE")||L(e,"Trident/")?os:L(e,"Gecko")?fs:""},As={[as]:[new RegExp("rv:"+Ts)],[ds]:[new RegExp(us+"?\\/"+Ts)],[rs]:[new RegExp("("+rs+"|CrMo)\\/"+Ts)],[ss]:[new RegExp("CriOS\\/"+Ts)],"UC Browser":[new RegExp("(UCBrowser|UCWEB)\\/"+Ts)],[Xi]:[Ps],[ms]:[Ps],[ls]:[new RegExp("(Opera|OPR)\\/"+Ts)],[fs]:[new RegExp(fs+"\\/"+Ts)],[hs]:[new RegExp("FxiOS\\/"+Ts)],[Cs]:[new RegExp("Konqueror[:/]?"+Ts,"i")],[Zi]:[new RegExp(Zi+" "+Ts),Ps],[_s]:[new RegExp("android\\s"+Ts,"i")],[ns]:[new RegExp(ts+"\\/"+Ts)],[os]:[new RegExp("(rv:|MSIE )"+Ts)],Mozilla:[new RegExp("rv:"+Ts)]},Fs=function(e,t){var n=Rs(e,t),r=As[n]
if(q(r))return null
for(var i=0;i<r.length;i++){var s=r[i],o=e.match(s)
if(o)return parseFloat(o[o.length-2])}return null},js=[[new RegExp(vs+"; "+vs+" (.*?)[);]","i"),e=>[vs,e&&e[1]||""]],[new RegExp(ps,"i"),[ps,""]],[new RegExp(gs,"i"),[gs,""]],[Ms,[Zi,""]],[new RegExp(bs,"i"),(e,t)=>{if(/Phone/.test(t)||/WPDesktop/.test(t))return[ys,""]
if(new RegExp(Gi).test(t)&&!/IEMobile\b/.test(t))return[bs+" "+Gi,""]
var n=/Windows NT ([0-9.]+)/i.exec(t)
if(n&&n[1]){var r=n[1],i=Os[r]||""
return/arm/i.test(t)&&(i="RT"),[bs,i]}return[bs,""]}],[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,e=>{if(e&&e[3]){var t=[e[3],e[4],e[5]||"0"]
return[Wi,t.join(".")]}return[Wi,""]}],[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,e=>{var t=""
return e&&e.length>=3&&(t=q(e[2])?e[3]:e[2]),["watchOS",t]}],[new RegExp("("+zi+" (\\d+)\\.(\\d+)\\.?(\\d+)?|"+zi+")","i"),e=>{if(e&&e[2]){var t=[e[2],e[3],e[4]||"0"]
return[zi,t.join(".")]}return[zi,""]}],[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,e=>{var t=["Mac OS X",""]
if(e&&e[1]){var n=[e[1],e[2],e[3]||"0"]
t[1]=n.join(".")}return t}],[/Mac/i,["Mac OS X",""]],[/CrOS/,[is,""]],[/Linux|debian/i,["Linux",""]]],Ns=function(e){return Is.test(e)?ps:Ls.test(e)?gs:$s.test(e)?vs:new RegExp(ks,"i").test(e)?ks:new RegExp("("+ys+"|WPDesktop)","i").test(e)?ys:/iPad/.test(e)?Ji:/iPod/.test(e)?"iPod Touch":/iPhone/.test(e)?"iPhone":/(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)?Yi:Ms.test(e)?Zi:/(kobo)\s(ereader|touch)/i.test(e)?"Kobo":new RegExp(ws,"i").test(e)?ws:/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e)||/(kf[a-z]+)( bui|\)).+silk\//i.test(e)?"Kindle Fire":/(Android|ZTE)/i.test(e)?!new RegExp(Gi).test(e)||/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e)?/pixel[\daxl ]{1,6}/i.test(e)&&!/pixel c/i.test(e)||/(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e)||/lmy47v/i.test(e)&&!/QTAQZ3/i.test(e)?zi:Qi:zi:new RegExp("(pda|"+Gi+")","i").test(e)?xs:new RegExp(Vi,"i").test(e)&&!new RegExp(Vi+" pc","i").test(e)?Es:""},Ds="https?://(.*)",Bs=["gclid","gclsrc","dclid","gbraid","wbraid","fbclid","msclkid","twclid","li_fat_id","igshid","ttclid","rdt_cid","epik","qclid","sccid","irclid","_kx"],qs=ae(["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gad_source","mc_cid"],Bs),Hs="<masked>",Us=["li_fat_id"]
function Gs(e,t,n){if(!y)return{}
var r,i=t?ae([],Bs,n||[]):[],s=Ws(jt(y.URL,i,Hs),e),o=(r={},se(Us,function(e){var t=en._get(e)
r[e]=t||null}),r)
return oe(o,s)}function Ws(e,t){var n=qs.concat(t||[]),r={}
return se(n,function(t){var n=Ft(e,t)
r[t]=n||null}),r}function zs(e){var t=function(e){return e?0===e.search(Ds+"google.([^/?]*)")?"google":0===e.search(Ds+"bing.com")?"bing":0===e.search(Ds+"yahoo.com")?"yahoo":0===e.search(Ds+"duckduckgo.com")?"duckduckgo":null:null}(e),n="yahoo"!=t?"q":"p",r={}
if(!G(t)){r.$search_engine=t
var i=y?Ft(y.referrer,n):""
i.length&&(r.ph_keyword=i)}return r}function Vs(){return navigator.language||navigator.userLanguage}function Qs(){return(null==y?void 0:y.referrer)||"$direct"}function Js(e,t){var n=e?ae([],Bs,t||[]):[],r=null==w?void 0:w.href.substring(0,1e3)
return{r:Qs().substring(0,1e3),u:r?jt(r,n,Hs):void 0}}function Ks(e){var t,{r:n,u:r}=e,i={$referrer:n,$referring_domain:null==n?void 0:"$direct"==n?"$direct":null==(t=At(n))?void 0:t.host}
if(r){i.$current_url=r
var s=At(r)
i.$host=null==s?void 0:s.host,i.$pathname=null==s?void 0:s.pathname
var o=Ws(r)
oe(i,o)}if(n){var a=zs(n)
oe(i,a)}return i}function Ys(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){return}}function Xs(){try{return(new Date).getTimezoneOffset()}catch(e){return}}function Zs(e,t){if(!E)return{}
var n,r,i,s=e?ae([],Bs,t||[]):[],[o,a]=function(e){for(var t=0;t<js.length;t++){var[n,r]=js[t],i=n.exec(e),s=i&&(N(r)?r(i,e):r)
if(s)return s}return["",""]}(E)
return oe(de({$os:o,$os_version:a,$browser:Rs(E,navigator.vendor),$device:Ns(E),$device_type:(r=E,i=Ns(r),i===Ji||i===Qi||"Kobo"===i||"Kindle Fire"===i||i===Es?Vi:i===ps||i===vs||i===gs||i===ks?"Console":i===Yi?"Wearable":i?Gi:"Desktop"),$timezone:Ys(),$timezone_offset:Xs()}),{$current_url:jt(null==w?void 0:w.href,s,Hs),$host:null==w?void 0:w.host,$pathname:null==w?void 0:w.pathname,$raw_user_agent:E.length>1e3?E.substring(0,997)+"...":E,$browser_version:Fs(E,navigator.vendor),$browser_language:Vs(),$browser_language_prefix:(n=Vs(),"string"==typeof n?n.split("-")[0]:void 0),$screen_height:null==p?void 0:p.screen.height,$screen_width:null==p?void 0:p.screen.width,$viewport_height:null==p?void 0:p.innerHeight,$viewport_width:null==p?void 0:p.innerWidth,$lib:"web",$lib_version:T.LIB_VERSION,$insert_id:Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10),$time:Date.now()/1e3})}var eo=ne("[FeatureFlags]"),to="$active_feature_flags",no="$override_feature_flags",ro="$feature_flag_payloads",io="$override_feature_flag_payloads",so="$feature_flag_request_id",oo=e=>{var t={}
for(var[n,r]of le(e||{}))r&&(t[n]=r)
return t},ao=function(e){return e.FeatureFlags="feature_flags",e.Recordings="recordings",e}({})
class lo{constructor(e){this._override_warning=!1,this._hasLoadedFlags=!1,this._requestInFlight=!1,this._reloadingDisabled=!1,this._additionalReloadRequested=!1,this._flagsCalled=!1,this._flagsLoadedFromRemote=!1,this._instance=e,this.featureFlagEventHandlers=[]}flags(){if(this._instance.config.__preview_remote_config)this._flagsCalled=!0
else{var e=!this._reloadDebouncer&&(this._instance.config.advanced_disable_feature_flags||this._instance.config.advanced_disable_feature_flags_on_first_load)
this._callFlagsEndpoint({disableFlags:e})}}get hasLoadedFlags(){return this._hasLoadedFlags}getFlags(){return Object.keys(this.getFlagVariants())}getFlagsWithDetails(){var e=this._instance.get_property(qe),t=this._instance.get_property(no),n=this._instance.get_property(io)
if(!n&&!t)return e||{}
var r=oe({},e||{}),i=[...new Set([...Object.keys(n||{}),...Object.keys(t||{})])]
for(var s of i){var o,a,l=r[s],c=null==t?void 0:t[s],u=q(c)?null!==(o=null==l?void 0:l.enabled)&&void 0!==o&&o:!!c,d=q(c)?l.variant:"string"==typeof c?c:void 0,h=null==n?void 0:n[s],p=f({},l,{enabled:u,variant:u?null!=d?d:null==l?void 0:l.variant:void 0})
u!==(null==l?void 0:l.enabled)&&(p.original_enabled=null==l?void 0:l.enabled),d!==(null==l?void 0:l.variant)&&(p.original_variant=null==l?void 0:l.variant),h&&(p.metadata=f({},null==l?void 0:l.metadata,{payload:h,original_payload:null==l||null==(a=l.metadata)?void 0:a.payload})),r[s]=p}return this._override_warning||(eo.warn(" Overriding feature flag details!",{flagDetails:e,overriddenPayloads:n,finalDetails:r}),this._override_warning=!0),r}getFlagVariants(){var e=this._instance.get_property(De),t=this._instance.get_property(no)
if(!t)return e||{}
for(var n=oe({},e),r=Object.keys(t),i=0;i<r.length;i++)n[r[i]]=t[r[i]]
return this._override_warning||(eo.warn(" Overriding feature flags!",{enabledFlags:e,overriddenFlags:t,finalFlags:n}),this._override_warning=!0),n}getFlagPayloads(){var e=this._instance.get_property(ro),t=this._instance.get_property(io)
if(!t)return e||{}
for(var n=oe({},e||{}),r=Object.keys(t),i=0;i<r.length;i++)n[r[i]]=t[r[i]]
return this._override_warning||(eo.warn(" Overriding feature flag payloads!",{flagPayloads:e,overriddenPayloads:t,finalPayloads:n}),this._override_warning=!0),n}reloadFeatureFlags(){this._reloadingDisabled||this._instance.config.advanced_disable_feature_flags||this._reloadDebouncer||(this._reloadDebouncer=setTimeout(()=>{this._callFlagsEndpoint()},5))}_clearDebouncer(){clearTimeout(this._reloadDebouncer),this._reloadDebouncer=void 0}ensureFlagsLoaded(){this._hasLoadedFlags||this._requestInFlight||this._reloadDebouncer||this.reloadFeatureFlags()}setAnonymousDistinctId(e){this.$anon_distinct_id=e}setReloadingPaused(e){this._reloadingDisabled=e}_callFlagsEndpoint(e){var t
if(this._clearDebouncer(),!this._instance._shouldDisableFlags())if(this._requestInFlight)this._additionalReloadRequested=!0
else{var n={token:this._instance.config.token,distinct_id:this._instance.get_distinct_id(),groups:this._instance.getGroups(),$anon_distinct_id:this.$anon_distinct_id,person_properties:f({},(null==(t=this._instance.persistence)?void 0:t.get_initial_props())||{},this._instance.get_property(He)||{}),group_properties:this._instance.get_property(Ue)};(null!=e&&e.disableFlags||this._instance.config.advanced_disable_feature_flags)&&(n.disable_flags=!0)
var r=this._instance.config.__preview_remote_config,i=r?"/flags/?v=2":"/flags/?v=2&config=true",s=this._instance.config.advanced_only_evaluate_survey_feature_flags?"&only_evaluate_survey_feature_flags=true":"",o=this._instance.requestRouter.endpointFor("api",i+s)
r&&(n.timezone=Ys()),this._requestInFlight=!0,this._instance._send_request({method:"POST",url:o,data:n,compression:this._instance.config.disable_compression?void 0:Mt.Base64,timeout:this._instance.config.feature_flag_request_timeout_ms,callback:e=>{var t,r,i=!0
if(200===e.statusCode&&(this._additionalReloadRequested||(this.$anon_distinct_id=void 0),i=!1),this._requestInFlight=!1,this._flagsCalled||(this._flagsCalled=!0,this._instance._onRemoteConfig(null!==(r=e.json)&&void 0!==r?r:{})),!n.disable_flags||this._additionalReloadRequested)if(this._flagsLoadedFromRemote=!i,e.json&&null!=(t=e.json.quotaLimited)&&t.includes(ao.FeatureFlags))eo.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.")
else{var s
n.disable_flags||this.receivedFeatureFlags(null!==(s=e.json)&&void 0!==s?s:{},i),this._additionalReloadRequested&&(this._additionalReloadRequested=!1,this._callFlagsEndpoint())}}})}}getFeatureFlag(e,t){if(void 0===t&&(t={}),this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0){var n=this.getFlagVariants()[e],r=""+n,i=this._instance.get_property(so)||void 0,s=this._instance.get_property(ze)||{}
if((t.send_event||!("send_event"in t))&&(!(e in s)||!s[e].includes(r))){var o,a,l,c,u,d,f,h,p
j(s[e])?s[e].push(r):s[e]=[r],null==(o=this._instance.persistence)||o.register({[ze]:s})
var g=this.getFeatureFlagDetails(e),v={$feature_flag:e,$feature_flag_response:n,$feature_flag_payload:this.getFeatureFlagPayload(e)||null,$feature_flag_request_id:i,$feature_flag_bootstrapped_response:(null==(a=this._instance.config.bootstrap)||null==(a=a.featureFlags)?void 0:a[e])||null,$feature_flag_bootstrapped_payload:(null==(l=this._instance.config.bootstrap)||null==(l=l.featureFlagPayloads)?void 0:l[e])||null,$used_bootstrap_value:!this._flagsLoadedFromRemote}
q(null==g||null==(c=g.metadata)?void 0:c.version)||(v.$feature_flag_version=g.metadata.version)
var _,m=null!==(u=null==g||null==(d=g.reason)?void 0:d.description)&&void 0!==u?u:null==g||null==(f=g.reason)?void 0:f.code
m&&(v.$feature_flag_reason=m),null!=g&&null!=(h=g.metadata)&&h.id&&(v.$feature_flag_id=g.metadata.id),q(null==g?void 0:g.original_variant)&&q(null==g?void 0:g.original_enabled)||(v.$feature_flag_original_response=q(g.original_variant)?g.original_enabled:g.original_variant),null!=g&&null!=(p=g.metadata)&&p.original_payload&&(v.$feature_flag_original_payload=null==g||null==(_=g.metadata)?void 0:_.original_payload),this._instance.capture("$feature_flag_called",v)}return n}eo.warn('getFeatureFlag for key "'+e+"\" failed. Feature flags didn't load in time.")}getFeatureFlagDetails(e){return this.getFlagsWithDetails()[e]}getFeatureFlagPayload(e){return this.getFlagPayloads()[e]}getRemoteConfigPayload(e,t){var n=this._instance.config.token
this._instance._send_request({method:"POST",url:this._instance.requestRouter.endpointFor("api","/flags/?v=2&config=true"),data:{distinct_id:this._instance.get_distinct_id(),token:n},compression:this._instance.config.disable_compression?void 0:Mt.Base64,timeout:this._instance.config.feature_flag_request_timeout_ms,callback:n=>{var r,i=null==(r=n.json)?void 0:r.featureFlagPayloads
t((null==i?void 0:i[e])||void 0)}})}isFeatureEnabled(e,t){if(void 0===t&&(t={}),this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0)return!!this.getFeatureFlag(e,t)
eo.warn('isFeatureEnabled for key "'+e+"\" failed. Feature flags didn't load in time.")}addFeatureFlagsHandler(e){this.featureFlagEventHandlers.push(e)}removeFeatureFlagsHandler(e){this.featureFlagEventHandlers=this.featureFlagEventHandlers.filter(t=>t!==e)}receivedFeatureFlags(e,t){if(this._instance.persistence){this._hasLoadedFlags=!0
var n=this.getFlagVariants(),r=this.getFlagPayloads(),i=this.getFlagsWithDetails()
!function(e,t,n,r,i){void 0===n&&(n={}),void 0===r&&(r={}),void 0===i&&(i={})
var s=(e=>{var t=e.flags
return t?(e.featureFlags=Object.fromEntries(Object.keys(t).map(e=>{var n
return[e,null!==(n=t[e].variant)&&void 0!==n?n:t[e].enabled]})),e.featureFlagPayloads=Object.fromEntries(Object.keys(t).filter(e=>t[e].enabled).filter(e=>{var n
return null==(n=t[e].metadata)?void 0:n.payload}).map(e=>{var n
return[e,null==(n=t[e].metadata)?void 0:n.payload]}))):eo.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"),e})(e),o=s.flags,a=s.featureFlags,l=s.featureFlagPayloads
if(a){var c=e.requestId
if(j(a)){eo.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.")
var u={}
if(a)for(var d=0;d<a.length;d++)u[a[d]]=!0
t&&t.register({[to]:a,[De]:u})}else{var h=a,p=l,g=o
e.errorsWhileComputingFlags&&(h=f({},n,h),p=f({},r,p),g=f({},i,g)),t&&t.register(f({[to]:Object.keys(oo(h)),[De]:h||{},[ro]:p||{},[qe]:g||{}},c?{[so]:c}:{}))}}}(e,this._instance.persistence,n,r,i),this._fireFeatureFlagsCallbacks(t)}}override(e,t){void 0===t&&(t=!1),eo.warn("override is deprecated. Please use overrideFeatureFlags instead."),this.overrideFeatureFlags({flags:e,suppressWarning:t})}overrideFeatureFlags(e){if(!this._instance.__loaded||!this._instance.persistence)return eo.uninitializedWarning("posthog.featureFlags.overrideFeatureFlags")
if(!1===e)return this._instance.persistence.unregister(no),this._instance.persistence.unregister(io),void this._fireFeatureFlagsCallbacks()
if(e&&"object"==typeof e&&("flags"in e||"payloads"in e)){var t,n=e
if(this._override_warning=Boolean(null!==(t=n.suppressWarning)&&void 0!==t&&t),"flags"in n)if(!1===n.flags)this._instance.persistence.unregister(no)
else if(n.flags)if(j(n.flags)){for(var r={},i=0;i<n.flags.length;i++)r[n.flags[i]]=!0
this._instance.persistence.register({[no]:r})}else this._instance.persistence.register({[no]:n.flags})
return"payloads"in n&&(!1===n.payloads?this._instance.persistence.unregister(io):n.payloads&&this._instance.persistence.register({[io]:n.payloads})),void this._fireFeatureFlagsCallbacks()}this._fireFeatureFlagsCallbacks()}onFeatureFlags(e){if(this.addFeatureFlagsHandler(e),this._hasLoadedFlags){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
e(t,n)}return()=>this.removeFeatureFlagsHandler(e)}updateEarlyAccessFeatureEnrollment(e,t,n){var r,i=(this._instance.get_property(Be)||[]).find(t=>t.flagKey===e),s={["$feature_enrollment/"+e]:t},o={$feature_flag:e,$feature_enrollment:t,$set:s}
i&&(o.$early_access_feature_name=i.name),n&&(o.$feature_enrollment_stage=n),this._instance.capture("$feature_enrollment_update",o),this.setPersonPropertiesForFlags(s,!1)
var a=f({},this.getFlagVariants(),{[e]:t})
null==(r=this._instance.persistence)||r.register({[to]:Object.keys(oo(a)),[De]:a}),this._fireFeatureFlagsCallbacks()}getEarlyAccessFeatures(e,t,n){void 0===t&&(t=!1)
var r=this._instance.get_property(Be),i=n?"&"+n.map(e=>"stage="+e).join("&"):""
if(r&&!t)return e(r)
this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/early_access_features/?token="+this._instance.config.token+i),method:"GET",callback:t=>{var n,r
if(t.json){var i=t.json.earlyAccessFeatures
return null==(n=this._instance.persistence)||n.unregister(Be),null==(r=this._instance.persistence)||r.register({[Be]:i}),e(i)}}})}_prepareFeatureFlagsForCallbacks(){var e=this.getFlags(),t=this.getFlagVariants()
return{flags:e.filter(e=>t[e]),flagVariants:Object.keys(t).filter(e=>t[e]).reduce((e,n)=>(e[n]=t[n],e),{})}}_fireFeatureFlagsCallbacks(e){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
this.featureFlagEventHandlers.forEach(r=>r(t,n,{errorsLoading:e}))}setPersonPropertiesForFlags(e,t){void 0===t&&(t=!0)
var n=this._instance.get_property(He)||{}
this._instance.register({[He]:f({},n,e)}),t&&this._instance.reloadFeatureFlags()}resetPersonPropertiesForFlags(){this._instance.unregister(He)}setGroupPropertiesForFlags(e,t){void 0===t&&(t=!0)
var n=this._instance.get_property(Ue)||{}
0!==Object.keys(n).length&&Object.keys(n).forEach(t=>{n[t]=f({},n[t],e[t]),delete e[t]}),this._instance.register({[Ue]:f({},n,e)}),t&&this._instance.reloadFeatureFlags()}resetGroupPropertiesForFlags(e){if(e){var t=this._instance.get_property(Ue)||{}
this._instance.register({[Ue]:f({},t,{[e]:{}})})}else this._instance.unregister(Ue)}reset(){this._hasLoadedFlags=!1,this._requestInFlight=!1,this._reloadingDisabled=!1,this._additionalReloadRequested=!1,this._flagsCalled=!1,this._flagsLoadedFromRemote=!1,this.$anon_distinct_id=void 0,this._clearDebouncer(),this._override_warning=!1}}var co=["cookie","localstorage","localstorage+cookie","sessionstorage","memory"]
class uo{constructor(e,t){this._config=e,this.props={},this._campaign_params_saved=!1,this._name=(e=>{var t=""
return e.token&&(t=e.token.replace(/\+/g,"PL").replace(/\//g,"SL").replace(/=/g,"EQ")),e.persistence_name?"ph_"+e.persistence_name:"ph_"+t+"_posthog"})(e),this._storage=this._buildStorage(e),this.load(),e.debug&&te.info("Persistence loaded",e.persistence,f({},this.props)),this.update_config(e,e,t),this.save()}isDisabled(){return!!this._disabled}_buildStorage(e){-1===co.indexOf(e.persistence.toLowerCase())&&(te.critical("Unknown persistence type "+e.persistence+"; falling back to localStorage+cookie"),e.persistence="localStorage+cookie")
var t=e.persistence.toLowerCase()
return"localstorage"===t&&nn._is_supported()?nn:"localstorage+cookie"===t&&sn._is_supported()?sn:"sessionstorage"===t&&cn._is_supported()?cn:"memory"===t?an:"cookie"===t?en:sn._is_supported()?sn:en}properties(){var e={}
return se(this.props,function(t,n){if(n===De&&D(t))for(var r=Object.keys(t),i=0;i<r.length;i++)e["$feature/"+r[i]]=t[r[i]]
else o=n,a=!1,(G(s=nt)?a:m&&s.indexOf===m?-1!=s.indexOf(o):(se(s,function(e){if(a||(a=e===o))return re}),a))||(e[n]=t)
var s,o,a}),e}load(){if(!this._disabled){var e=this._storage._parse(this._name)
e&&(this.props=oe({},e))}}save(){this._disabled||this._storage._set(this._name,this.props,this._expire_days,this._cross_subdomain,this._secure,this._config.debug)}remove(){this._storage._remove(this._name,!1),this._storage._remove(this._name,!0)}clear(){this.remove(),this.props={}}register_once(e,t,n){if(D(e)){q(t)&&(t="None"),this._expire_days=q(n)?this._default_expiry:n
var r=!1
if(se(e,(e,n)=>{this.props.hasOwnProperty(n)&&this.props[n]!==t||(this.props[n]=e,r=!0)}),r)return this.save(),!0}return!1}register(e,t){if(D(e)){this._expire_days=q(t)?this._default_expiry:t
var n=!1
if(se(e,(t,r)=>{e.hasOwnProperty(r)&&this.props[r]!==t&&(this.props[r]=t,n=!0)}),n)return this.save(),!0}return!1}unregister(e){e in this.props&&(delete this.props[e],this.save())}update_campaign_params(){if(!this._campaign_params_saved){var e=Gs(this._config.custom_campaign_params,this._config.mask_personal_data_properties,this._config.custom_personal_data_properties)
B(de(e))||this.register(e),this._campaign_params_saved=!0}}update_search_keyword(){var e
this.register((e=null==y?void 0:y.referrer)?zs(e):{})}update_referrer_info(){var e
this.register_once({$referrer:Qs(),$referring_domain:null!=y&&y.referrer&&(null==(e=At(y.referrer))?void 0:e.host)||"$direct"},void 0)}set_initial_person_info(){this.props[Ke]||this.props[Ye]||this.register_once({[Xe]:Js(this._config.mask_personal_data_properties,this._config.custom_personal_data_properties)},void 0)}get_initial_props(){var e={}
se([Ye,Ke],t=>{var n=this.props[t]
n&&se(n,function(t,n){e["$initial_"+M(n)]=t})})
var t,n,r=this.props[Xe]
if(r){var i=(t=Ks(r),n={},se(t,function(e,t){n["$initial_"+M(t)]=e}),n)
oe(e,i)}return e}safe_merge(e){return se(this.props,function(t,n){n in e||(e[n]=t)}),e}update_config(e,t,n){if(this._default_expiry=this._expire_days=e.cookie_expiration,this.set_disabled(e.disable_persistence||!!n),this.set_cross_subdomain(e.cross_subdomain_cookie),this.set_secure(e.secure_cookie),e.persistence!==t.persistence){var r=this._buildStorage(e),i=this.props
this.clear(),this._storage=r,this.props=i,this.save()}}set_disabled(e){this._disabled=e,this._disabled?this.remove():this.save()}set_cross_subdomain(e){e!==this._cross_subdomain&&(this._cross_subdomain=e,this.remove(),this.save())}set_secure(e){e!==this._secure&&(this._secure=e,this.remove(),this.save())}set_event_timer(e,t){var n=this.props[me]||{}
n[e]=t,this.props[me]=n,this.save()}remove_event_timer(e){var t=(this.props[me]||{})[e]
return q(t)||(delete this.props[me][e],this.save()),t}get_property(e){return this.props[e]}set_property(e,t){this.props[e]=t,this.save()}}class fo{constructor(){this._events={},this._events={}}on(e,t){return this._events[e]||(this._events[e]=[]),this._events[e].push(t),()=>{this._events[e]=this._events[e].filter(e=>e!==t)}}emit(e,t){for(var n of this._events[e]||[])n(t)
for(var r of this._events["*"]||[])r(e,t)}}class ho{constructor(e){this._debugEventEmitter=new fo,this._checkStep=(e,t)=>this._checkStepEvent(e,t)&&this._checkStepUrl(e,t)&&this._checkStepElement(e,t),this._checkStepEvent=(e,t)=>null==t||!t.event||(null==e?void 0:e.event)===(null==t?void 0:t.event),this._instance=e,this._actionEvents=new Set,this._actionRegistry=new Set}init(){var e,t
q(null==(e=this._instance)?void 0:e._addCaptureHook)||(null==(t=this._instance)||t._addCaptureHook((e,t)=>{this.on(e,t)}))}register(e){var t,n
if(!q(null==(t=this._instance)?void 0:t._addCaptureHook)&&(e.forEach(e=>{var t,n
null==(t=this._actionRegistry)||t.add(e),null==(n=e.steps)||n.forEach(e=>{var t
null==(t=this._actionEvents)||t.add((null==e?void 0:e.event)||"")})}),null!=(n=this._instance)&&n.autocapture)){var r,i=new Set
e.forEach(e=>{var t
null==(t=e.steps)||t.forEach(e=>{null!=e&&e.selector&&i.add(null==e?void 0:e.selector)})}),null==(r=this._instance)||r.autocapture.setElementSelectors(i)}}on(e,t){var n
null!=t&&0!=e.length&&(this._actionEvents.has(e)||this._actionEvents.has(null==t?void 0:t.event))&&this._actionRegistry&&(null==(n=this._actionRegistry)?void 0:n.size)>0&&this._actionRegistry.forEach(e=>{this._checkAction(t,e)&&this._debugEventEmitter.emit("actionCaptured",e.name)})}_addActionHook(e){this.onAction("actionCaptured",t=>e(t))}_checkAction(e,t){if(null==(null==t?void 0:t.steps))return!1
for(var n of t.steps)if(this._checkStep(e,n))return!0
return!1}onAction(e,t){return this._debugEventEmitter.on(e,t)}_checkStepUrl(e,t){if(null!=t&&t.url){var n,r=null==e||null==(n=e.properties)?void 0:n.$current_url
if(!r||"string"!=typeof r)return!1
if(!ho._matchString(r,null==t?void 0:t.url,(null==t?void 0:t.url_matching)||"contains"))return!1}return!0}static _matchString(e,t,n){switch(n){case"regex":return!!p&&Ni(e,t)
case"exact":return t===e
case"contains":var r=ho._escapeStringRegexp(t).replace(/_/g,".").replace(/%/g,".*")
return Ni(e,r)
default:return!1}}static _escapeStringRegexp(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}_checkStepElement(e,t){if((null!=t&&t.href||null!=t&&t.tag_name||null!=t&&t.text)&&!this._getElementsList(e).some(e=>!(null!=t&&t.href&&!ho._matchString(e.href||"",null==t?void 0:t.href,(null==t?void 0:t.href_matching)||"exact")||null!=t&&t.tag_name&&e.tag_name!==(null==t?void 0:t.tag_name)||null!=t&&t.text&&!ho._matchString(e.text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")&&!ho._matchString(e.$el_text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact"))))return!1
if(null!=t&&t.selector){var n,r=null==e||null==(n=e.properties)?void 0:n.$element_selectors
if(!r)return!1
if(!r.includes(null==t?void 0:t.selector))return!1}return!0}_getElementsList(e){return null==(null==e?void 0:e.properties.$elements)?[]:null==e?void 0:e.properties.$elements}}!function(e){e.Button="button",e.Tab="tab",e.Selector="selector"}({}),function(e){e.TopLeft="top_left",e.TopRight="top_right",e.TopCenter="top_center",e.MiddleLeft="middle_left",e.MiddleRight="middle_right",e.MiddleCenter="middle_center",e.Left="left",e.Center="center",e.Right="right",e.NextToTrigger="next_to_trigger"}({})
var po=function(e){return e.Popover="popover",e.API="api",e.Widget="widget",e.ExternalSurvey="external_survey",e}({})
!function(e){e.Open="open",e.MultipleChoice="multiple_choice",e.SingleChoice="single_choice",e.Rating="rating",e.Link="link"}({}),function(e){e.NextQuestion="next_question",e.End="end",e.ResponseBased="response_based",e.SpecificQuestion="specific_question"}({}),function(e){e.Once="once",e.Recurring="recurring",e.Always="always"}({})
var go=function(e){return e.SHOWN="survey shown",e.DISMISSED="survey dismissed",e.SENT="survey sent",e}({}),vo=function(e){return e.SURVEY_ID="$survey_id",e.SURVEY_NAME="$survey_name",e.SURVEY_RESPONSE="$survey_response",e.SURVEY_ITERATION="$survey_iteration",e.SURVEY_ITERATION_START_DATE="$survey_iteration_start_date",e.SURVEY_PARTIALLY_COMPLETED="$survey_partially_completed",e.SURVEY_SUBMISSION_ID="$survey_submission_id",e.SURVEY_QUESTIONS="$survey_questions",e.SURVEY_COMPLETED="$survey_completed",e}({}),_o=ne("[Surveys]"),mo="seenSurvey_",bo=(e,t)=>{var n="$survey_"+t+"/"+e.id
return e.current_iteration&&e.current_iteration>0&&(n="$survey_"+t+"/"+e.id+"/"+e.current_iteration),n},yo=e=>{var t=""+mo+e.id
return e.current_iteration&&e.current_iteration>0&&(t=""+mo+e.id+"_"+e.current_iteration),t},wo=[po.Popover,po.Widget,po.API]
class ko{constructor(e){this._instance=e,this._eventToSurveys=new Map,this._actionToSurveys=new Map}register(e){var t
q(null==(t=this._instance)?void 0:t._addCaptureHook)||(this._setupEventBasedSurveys(e),this._setupActionBasedSurveys(e))}_setupActionBasedSurveys(e){var t=e.filter(e=>{var t,n
return(null==(t=e.conditions)?void 0:t.actions)&&(null==(n=e.conditions)||null==(n=n.actions)||null==(n=n.values)?void 0:n.length)>0})
0!==t.length&&(null==this._actionMatcher&&(this._actionMatcher=new ho(this._instance),this._actionMatcher.init(),this._actionMatcher._addActionHook(e=>{this.onAction(e)})),t.forEach(e=>{var t,n,r,i,s
e.conditions&&null!=(t=e.conditions)&&t.actions&&null!=(n=e.conditions)&&null!=(n=n.actions)&&n.values&&(null==(r=e.conditions)||null==(r=r.actions)||null==(r=r.values)?void 0:r.length)>0&&(null==(i=this._actionMatcher)||i.register(e.conditions.actions.values),null==(s=e.conditions)||null==(s=s.actions)||null==(s=s.values)||s.forEach(t=>{if(t&&t.name){var n=this._actionToSurveys.get(t.name)
n&&n.push(e.id),this._actionToSurveys.set(t.name,n||[e.id])}}))}))}_setupEventBasedSurveys(e){var t
0!==e.filter(e=>{var t,n
return(null==(t=e.conditions)?void 0:t.events)&&(null==(n=e.conditions)||null==(n=n.events)||null==(n=n.values)?void 0:n.length)>0}).length&&(null==(t=this._instance)||t._addCaptureHook((e,t)=>{this.onEvent(e,t)}),e.forEach(e=>{var t
null==(t=e.conditions)||null==(t=t.events)||null==(t=t.values)||t.forEach(t=>{if(t&&t.name){var n=this._eventToSurveys.get(t.name)
n&&n.push(e.id),this._eventToSurveys.set(t.name,n||[e.id])}})}))}onEvent(e,t){var n,r=(null==(n=this._instance)||null==(n=n.persistence)?void 0:n.props[We])||[]
if("survey shown"===e&&t&&r.length>0){var i
_o.info("survey event matched, removing survey from activated surveys",{event:e,eventPayload:t,existingActivatedSurveys:r})
var s=null==t||null==(i=t.properties)?void 0:i.$survey_id
if(s){var o=r.indexOf(s)
o>=0&&(r.splice(o,1),this._updateActivatedSurveys(r))}}else this._eventToSurveys.has(e)&&(_o.info("survey event matched, updating activated surveys",{event:e,surveys:this._eventToSurveys.get(e)}),this._updateActivatedSurveys(r.concat(this._eventToSurveys.get(e)||[])))}onAction(e){var t,n=(null==(t=this._instance)||null==(t=t.persistence)?void 0:t.props[We])||[]
this._actionToSurveys.has(e)&&this._updateActivatedSurveys(n.concat(this._actionToSurveys.get(e)||[]))}_updateActivatedSurveys(e){var t
null==(t=this._instance)||null==(t=t.persistence)||t.register({[We]:[...new Set(e)]})}getSurveys(){var e
return(null==(e=this._instance)||null==(e=e.persistence)?void 0:e.props[We])||[]}getEventToSurveys(){return this._eventToSurveys}_getActionMatcher(){return this._actionMatcher}}class So{constructor(e){this._isSurveysEnabled=void 0,this._surveyManager=null,this._isFetchingSurveys=!1,this._isInitializingSurveys=!1,this._surveyCallbacks=[],this._instance=e,this._surveyEventReceiver=null}onRemoteConfig(e){var t=e.surveys
if(W(t))return _o.warn("Flags not loaded yet. Not loading surveys.")
var n=j(t)
this._isSurveysEnabled=n?t.length>0:t,_o.info("flags response received, isSurveysEnabled: "+this._isSurveysEnabled),this.loadIfEnabled()}reset(){localStorage.removeItem("lastSeenSurveyDate")
for(var e=[],t=0;t<localStorage.length;t++){var n=localStorage.key(t);(null!=n&&n.startsWith(mo)||null!=n&&n.startsWith("inProgressSurvey_"))&&e.push(n)}e.forEach(e=>localStorage.removeItem(e))}loadIfEnabled(){if(!this._surveyManager)if(this._isInitializingSurveys)_o.info("Already initializing surveys, skipping...")
else if(this._instance.config.disable_surveys)_o.info("Disabled. Not loading surveys.")
else if(this._instance.config.cookieless_mode)_o.info("Not loading surveys in cookieless mode.")
else{var e=null==C?void 0:C.__PosthogExtensions__
if(e){if(!q(this._isSurveysEnabled)||this._instance.config.advanced_enable_surveys){var t=this._isSurveysEnabled||this._instance.config.advanced_enable_surveys
this._isInitializingSurveys=!0
try{var n=e.generateSurveys
if(n)return void this._completeSurveyInitialization(n,t)
var r=e.loadExternalDependency
if(!r)return void this._handleSurveyLoadError("PostHog loadExternalDependency extension not found.")
r(this._instance,"surveys",n=>{n||!e.generateSurveys?this._handleSurveyLoadError("Could not load surveys script",n):this._completeSurveyInitialization(e.generateSurveys,t)})}catch(e){throw this._handleSurveyLoadError("Error initializing surveys",e),e}finally{this._isInitializingSurveys=!1}}}else _o.error("PostHog Extensions not found.")}}_completeSurveyInitialization(e,t){this._surveyManager=e(this._instance,t),this._surveyEventReceiver=new ko(this._instance),_o.info("Surveys loaded successfully"),this._notifySurveyCallbacks({isLoaded:!0})}_handleSurveyLoadError(e,t){_o.error(e,t),this._notifySurveyCallbacks({isLoaded:!1,error:e})}onSurveysLoaded(e){return this._surveyCallbacks.push(e),this._surveyManager&&this._notifySurveyCallbacks({isLoaded:!0}),()=>{this._surveyCallbacks=this._surveyCallbacks.filter(t=>t!==e)}}getSurveys(e,t){if(void 0===t&&(t=!1),this._instance.config.disable_surveys)return _o.info("Disabled. Not loading surveys."),e([])
var n=this._instance.get_property(Ge)
if(n&&!t)return e(n,{isLoaded:!0})
if(this._isFetchingSurveys)return e([],{isLoaded:!1,error:"Surveys are already being loaded"})
try{this._isFetchingSurveys=!0,this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/surveys/?token="+this._instance.config.token),method:"GET",timeout:this._instance.config.surveys_request_timeout_ms,callback:t=>{var n
this._isFetchingSurveys=!1
var r=t.statusCode
if(200!==r||!t.json){var i="Surveys API could not be loaded, status: "+r
return _o.error(i),e([],{isLoaded:!1,error:i})}var s,o=t.json.surveys||[],a=o.filter(e=>function(e){return!(!e.start_date||e.end_date)}(e)&&(function(e){var t
return!(null==(t=e.conditions)||null==(t=t.events)||null==(t=t.values)||!t.length)}(e)||function(e){var t
return!(null==(t=e.conditions)||null==(t=t.actions)||null==(t=t.values)||!t.length)}(e)))
return a.length>0&&(null==(s=this._surveyEventReceiver)||s.register(a)),null==(n=this._instance.persistence)||n.register({[Ge]:o}),e(o,{isLoaded:!0})}})}catch(e){throw this._isFetchingSurveys=!1,e}}_notifySurveyCallbacks(e){for(var t of this._surveyCallbacks)try{if(!e.isLoaded)return t([],e)
this.getSurveys(t)}catch(e){_o.error("Error in survey callback",e)}}getActiveMatchingSurveys(e,t){if(void 0===t&&(t=!1),!W(this._surveyManager))return this._surveyManager.getActiveMatchingSurveys(e,t)
_o.warn("init was not called")}_getSurveyById(e){var t=null
return this.getSurveys(n=>{var r
t=null!==(r=n.find(t=>t.id===e))&&void 0!==r?r:null}),t}_checkSurveyEligibility(e){if(W(this._surveyManager))return{eligible:!1,reason:"SDK is not enabled or survey functionality is not yet loaded"}
var t="string"==typeof e?this._getSurveyById(e):e
return t?this._surveyManager.checkSurveyEligibility(t):{eligible:!1,reason:"Survey not found"}}canRenderSurvey(e){if(W(this._surveyManager))return _o.warn("init was not called"),{visible:!1,disabledReason:"SDK is not enabled or survey functionality is not yet loaded"}
var t=this._checkSurveyEligibility(e)
return{visible:t.eligible,disabledReason:t.reason}}canRenderSurveyAsync(e,t){return W(this._surveyManager)?(_o.warn("init was not called"),Promise.resolve({visible:!1,disabledReason:"SDK is not enabled or survey functionality is not yet loaded"})):new Promise(n=>{this.getSurveys(t=>{var r,i=null!==(r=t.find(t=>t.id===e))&&void 0!==r?r:null
if(i){var s=this._checkSurveyEligibility(i)
n({visible:s.eligible,disabledReason:s.reason})}else n({visible:!1,disabledReason:"Survey not found"})},t)})}renderSurvey(e,t){if(W(this._surveyManager))_o.warn("init was not called")
else{var n=this._getSurveyById(e)
if(n)if(wo.includes(n.type)){var r=null==y?void 0:y.querySelector(t)
r?this._surveyManager.renderSurvey(n,r):_o.warn("Survey element not found")}else _o.warn("Surveys of type "+n.type+" cannot be rendered in the app")
else _o.warn("Survey not found")}}}var xo=ne("[RateLimiter]")
class Eo{constructor(e){var t,n
this.serverLimits={},this.lastEventRateLimited=!1,this.checkForLimiting=e=>{var t=e.text
if(t&&t.length)try{(JSON.parse(t).quota_limited||[]).forEach(e=>{xo.info((e||"events")+" is quota limited."),this.serverLimits[e]=(new Date).getTime()+6e4})}catch(e){return void xo.warn('could not rate limit - continuing. Error: "'+(null==e?void 0:e.message)+'"',{text:t})}},this.instance=e,this.captureEventsPerSecond=(null==(t=e.config.rate_limiting)?void 0:t.events_per_second)||10,this.captureEventsBurstLimit=Math.max((null==(n=e.config.rate_limiting)?void 0:n.events_burst_limit)||10*this.captureEventsPerSecond,this.captureEventsPerSecond),this.lastEventRateLimited=this.clientRateLimitContext(!0).isRateLimited}clientRateLimitContext(e){var t,n,r
void 0===e&&(e=!1)
var i=(new Date).getTime(),s=null!==(t=null==(n=this.instance.persistence)?void 0:n.get_property(Je))&&void 0!==t?t:{tokens:this.captureEventsBurstLimit,last:i}
s.tokens+=(i-s.last)/1e3*this.captureEventsPerSecond,s.last=i,s.tokens>this.captureEventsBurstLimit&&(s.tokens=this.captureEventsBurstLimit)
var o=s.tokens<1
return o||e||(s.tokens=Math.max(0,s.tokens-1)),!o||this.lastEventRateLimited||e||this.instance.capture("$$client_ingestion_warning",{$$client_ingestion_warning_message:"posthog-js client rate limited. Config is set to "+this.captureEventsPerSecond+" events per second and "+this.captureEventsBurstLimit+" events burst limit."},{skip_client_rate_limiting:!0}),this.lastEventRateLimited=o,null==(r=this.instance.persistence)||r.set_property(Je,s),{isRateLimited:o,remainingTokens:s.tokens}}isServerRateLimited(e){var t=this.serverLimits[e||"events"]||!1
return!1!==t&&(new Date).getTime()<t}}var Co=ne("[RemoteConfig]")
class To{constructor(e){this._instance=e}get remoteConfig(){var e
return null==(e=C._POSTHOG_REMOTE_CONFIG)||null==(e=e[this._instance.config.token])?void 0:e.config}_loadRemoteConfigJs(e){var t,n
null!=(t=C.__PosthogExtensions__)&&t.loadExternalDependency?null==(n=C.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"remote-config",()=>e(this.remoteConfig)):(Co.error("PostHog Extensions not found. Cannot load remote config."),e())}_loadRemoteConfigJSON(e){this._instance._send_request({method:"GET",url:this._instance.requestRouter.endpointFor("assets","/array/"+this._instance.config.token+"/config"),callback:t=>{e(t.json)}})}load(){try{if(this.remoteConfig)return Co.info("Using preloaded remote config",this.remoteConfig),void this._onRemoteConfig(this.remoteConfig)
if(this._instance._shouldDisableFlags())return void Co.warn("Remote config is disabled. Falling back to local config.")
this._loadRemoteConfigJs(e=>{if(!e)return Co.info("No config found after loading remote JS config. Falling back to JSON."),void this._loadRemoteConfigJSON(e=>{this._onRemoteConfig(e)})
this._onRemoteConfig(e)})}catch(e){Co.error("Error loading remote config",e)}}_onRemoteConfig(e){e?this._instance.config.__preview_remote_config?(this._instance._onRemoteConfig(e),!1!==e.hasFeatureFlags&&this._instance.featureFlags.ensureFlagsLoaded()):Co.info("__preview_remote_config is disabled. Logging config instead",e):Co.error("Failed to fetch remote config from PostHog.")}}var Po=3e3
class $o{constructor(e,t){this._isPaused=!0,this._queue=[],this._flushTimeoutMs=X((null==t?void 0:t.flush_interval_ms)||Po,250,5e3,te.createLogger("flush interval"),Po),this._sendRequest=e}enqueue(e){this._queue.push(e),this._flushTimeout||this._setFlushTimeout()}unload(){this._clearFlushTimeout()
var e=this._queue.length>0?this._formatQueue():{},t=Object.values(e);[...t.filter(e=>0===e.url.indexOf("/e")),...t.filter(e=>0!==e.url.indexOf("/e"))].map(e=>{this._sendRequest(f({},e,{transport:"sendBeacon"}))})}enable(){this._isPaused=!1,this._setFlushTimeout()}_setFlushTimeout(){var e=this
this._isPaused||(this._flushTimeout=setTimeout(()=>{if(this._clearFlushTimeout(),this._queue.length>0){var t=this._formatQueue(),n=function(){var n=t[r],i=(new Date).getTime()
n.data&&j(n.data)&&se(n.data,e=>{e.offset=Math.abs(e.timestamp-i),delete e.timestamp}),e._sendRequest(n)}
for(var r in t)n()}},this._flushTimeoutMs))}_clearFlushTimeout(){clearTimeout(this._flushTimeout),this._flushTimeout=void 0}_formatQueue(){var e={}
return se(this._queue,t=>{var n,r=t,i=(r?r.batchKey:null)||r.url
q(e[i])&&(e[i]=f({},r,{data:[]})),null==(n=e[i].data)||n.push(r.data)}),this._queue=[],e}}var Lo=["retriesPerformedSoFar"]
class Io{constructor(e){this._isPolling=!1,this._pollIntervalMs=3e3,this._queue=[],this._instance=e,this._queue=[],this._areWeOnline=!0,!q(p)&&"onLine"in p.navigator&&(this._areWeOnline=p.navigator.onLine,ge(p,"online",()=>{this._areWeOnline=!0,this._flush()}),ge(p,"offline",()=>{this._areWeOnline=!1}))}get length(){return this._queue.length}retriableRequest(e){var{retriesPerformedSoFar:t}=e,n=h(e,Lo)
z(t)&&t>0&&(n.url=Ri(n.url,{retry_count:t})),this._instance._send_request(f({},n,{callback:e=>{200!==e.statusCode&&(e.statusCode<400||e.statusCode>=500)&&(null!=t?t:0)<10?this._enqueue(f({retriesPerformedSoFar:t},n)):null==n.callback||n.callback(e)}}))}_enqueue(e){var t=e.retriesPerformedSoFar||0
e.retriesPerformedSoFar=t+1
var n=function(e){var t=3e3*Math.pow(2,e),n=t/2,r=Math.min(18e5,t),i=(Math.random()-.5)*(r-n)
return Math.ceil(r+i)}(t),r=Date.now()+n
this._queue.push({retryAt:r,requestOptions:e})
var i="Enqueued failed request for retry in "+n
navigator.onLine||(i+=" (Browser is offline)"),te.warn(i),this._isPolling||(this._isPolling=!0,this._poll())}_poll(){this._poller&&clearTimeout(this._poller),this._poller=setTimeout(()=>{this._areWeOnline&&this._queue.length>0&&this._flush(),this._poll()},this._pollIntervalMs)}_flush(){var e=Date.now(),t=[],n=this._queue.filter(n=>n.retryAt<e||(t.push(n),!1))
if(this._queue=t,n.length>0)for(var{requestOptions:r}of n)this.retriableRequest(r)}unload(){for(var{requestOptions:e}of(this._poller&&(clearTimeout(this._poller),this._poller=void 0),this._queue))try{this._instance._send_request(f({},e,{transport:"sendBeacon"}))}catch(e){te.error(e)}this._queue=[]}}class Mo{constructor(e){this._updateScrollData=()=>{var e,t,n,r
this._context||(this._context={})
var i=this.scrollElement(),s=this.scrollY(),o=i?Math.max(0,i.scrollHeight-i.clientHeight):0,a=s+((null==i?void 0:i.clientHeight)||0),l=(null==i?void 0:i.scrollHeight)||0
this._context.lastScrollY=Math.ceil(s),this._context.maxScrollY=Math.max(s,null!==(e=this._context.maxScrollY)&&void 0!==e?e:0),this._context.maxScrollHeight=Math.max(o,null!==(t=this._context.maxScrollHeight)&&void 0!==t?t:0),this._context.lastContentY=a,this._context.maxContentY=Math.max(a,null!==(n=this._context.maxContentY)&&void 0!==n?n:0),this._context.maxContentHeight=Math.max(l,null!==(r=this._context.maxContentHeight)&&void 0!==r?r:0)},this._instance=e}getContext(){return this._context}resetContext(){var e=this._context
return setTimeout(this._updateScrollData,0),e}startMeasuringScrollPosition(){ge(p,"scroll",this._updateScrollData,{capture:!0}),ge(p,"scrollend",this._updateScrollData,{capture:!0}),ge(p,"resize",this._updateScrollData)}scrollElement(){if(!this._instance.config.scroll_root_selector)return null==p?void 0:p.document.documentElement
var e=j(this._instance.config.scroll_root_selector)?this._instance.config.scroll_root_selector:[this._instance.config.scroll_root_selector]
for(var t of e){var n=null==p?void 0:p.document.querySelector(t)
if(n)return n}}scrollY(){if(this._instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollTop||0}return p&&(p.scrollY||p.pageYOffset||p.document.documentElement.scrollTop)||0}scrollX(){if(this._instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollLeft||0}return p&&(p.scrollX||p.pageXOffset||p.document.documentElement.scrollLeft)||0}}var Oo=e=>Js(null==e?void 0:e.config.mask_personal_data_properties,null==e?void 0:e.config.custom_personal_data_properties)
class Ro{constructor(e,t,n,r){this._onSessionIdCallback=e=>{var t=this._getStored()
if(!t||t.sessionId!==e){var n={sessionId:e,props:this._sessionSourceParamGenerator(this._instance)}
this._persistence.register({[Qe]:n})}},this._instance=e,this._sessionIdManager=t,this._persistence=n,this._sessionSourceParamGenerator=r||Oo,this._sessionIdManager.onSessionId(this._onSessionIdCallback)}_getStored(){return this._persistence.props[Qe]}getSetOnceProps(){var e,t=null==(e=this._getStored())?void 0:e.props
return t?"r"in t?Ks(t):{$referring_domain:t.referringDomain,$pathname:t.initialPathName,utm_source:t.utm_source,utm_campaign:t.utm_campaign,utm_medium:t.utm_medium,utm_content:t.utm_content,utm_term:t.utm_term}:{}}getSessionProps(){var e={}
return se(de(this.getSetOnceProps()),(t,n)=>{"$current_url"===n&&(n="url"),e["$session_entry_"+M(n)]=t}),e}}var Ao=ne("[SessionId]")
class Fo{constructor(e,t,n){var r
if(this._sessionIdChangedHandlers=[],this._sessionHasBeenIdleTooLong=(e,t)=>Math.abs(e-t)>this.sessionTimeoutMs,!e.persistence)throw new Error("SessionIdManager requires a PostHogPersistence instance")
if("always"===e.config.cookieless_mode)throw new Error('SessionIdManager cannot be used with cookieless_mode="always"')
this._config=e.config,this._persistence=e.persistence,this._windowId=void 0,this._sessionId=void 0,this._sessionStartTimestamp=null,this._sessionActivityTimestamp=null,this._sessionIdGenerator=t||Kt,this._windowIdGenerator=n||Kt
var i=this._config.persistence_name||this._config.token,s=this._config.session_idle_timeout_seconds||1800
if(this._sessionTimeoutMs=1e3*X(s,60,36e3,Ao.createLogger("session_idle_timeout_seconds"),1800),e.register({$configured_session_timeout_ms:this._sessionTimeoutMs}),this._resetIdleTimer(),this._window_id_storage_key="ph_"+i+"_window_id",this._primary_window_exists_storage_key="ph_"+i+"_primary_window_exists",this._canUseSessionStorage()){var o=cn._parse(this._window_id_storage_key),a=cn._parse(this._primary_window_exists_storage_key)
o&&!a?this._windowId=o:cn._remove(this._window_id_storage_key),cn._set(this._primary_window_exists_storage_key,!0)}if(null!=(r=this._config.bootstrap)&&r.sessionID)try{var l=(()=>{var e=this._config.bootstrap.sessionID.replace(/-/g,"")
if(32!==e.length)throw new Error("Not a valid UUID")
if("7"!==e[12])throw new Error("Not a UUIDv7")
return parseInt(e.substring(0,12),16)})()
this._setSessionId(this._config.bootstrap.sessionID,(new Date).getTime(),l)}catch(e){Ao.error("Invalid sessionID in bootstrap",e)}this._listenToReloadWindow()}get sessionTimeoutMs(){return this._sessionTimeoutMs}onSessionId(e){return q(this._sessionIdChangedHandlers)&&(this._sessionIdChangedHandlers=[]),this._sessionIdChangedHandlers.push(e),this._sessionId&&e(this._sessionId,this._windowId),()=>{this._sessionIdChangedHandlers=this._sessionIdChangedHandlers.filter(t=>t!==e)}}_canUseSessionStorage(){return"memory"!==this._config.persistence&&!this._persistence._disabled&&cn._is_supported()}_setWindowId(e){e!==this._windowId&&(this._windowId=e,this._canUseSessionStorage()&&cn._set(this._window_id_storage_key,e))}_getWindowId(){return this._windowId?this._windowId:this._canUseSessionStorage()?cn._parse(this._window_id_storage_key):null}_setSessionId(e,t,n){e===this._sessionId&&t===this._sessionActivityTimestamp&&n===this._sessionStartTimestamp||(this._sessionStartTimestamp=n,this._sessionActivityTimestamp=t,this._sessionId=e,this._persistence.register({[Ae]:[t,e,n]}))}_getSessionId(){if(this._sessionId&&this._sessionActivityTimestamp&&this._sessionStartTimestamp)return[this._sessionActivityTimestamp,this._sessionId,this._sessionStartTimestamp]
var e=this._persistence.props[Ae]
return j(e)&&2===e.length&&e.push(e[0]),e||[0,null,0]}resetSessionId(){this._setSessionId(null,null,null)}_listenToReloadWindow(){ge(p,"beforeunload",()=>{this._canUseSessionStorage()&&cn._remove(this._primary_window_exists_storage_key)},{capture:!1})}checkAndGetSessionAndWindowId(e,t){if(void 0===e&&(e=!1),void 0===t&&(t=null),"always"===this._config.cookieless_mode)throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"')
var n=t||(new Date).getTime(),[r,i,s]=this._getSessionId(),o=this._getWindowId(),a=z(s)&&s>0&&Math.abs(n-s)>864e5,l=!1,c=!i,u=!e&&this._sessionHasBeenIdleTooLong(n,r)
c||u||a?(i=this._sessionIdGenerator(),o=this._windowIdGenerator(),Ao.info("new session ID generated",{sessionId:i,windowId:o,changeReason:{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}}),s=n,l=!0):o||(o=this._windowIdGenerator(),l=!0)
var d=0===r||!e||a?n:r,f=0===s?(new Date).getTime():s
return this._setWindowId(o),this._setSessionId(i,d,f),e||this._resetIdleTimer(),l&&this._sessionIdChangedHandlers.forEach(e=>e(i,o,l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0)),{sessionId:i,windowId:o,sessionStartTimestamp:f,changeReason:l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0,lastActivityTimestamp:r}}_resetIdleTimer(){clearTimeout(this._enforceIdleTimeout),this._enforceIdleTimeout=setTimeout(()=>{var[e]=this._getSessionId()
this._sessionHasBeenIdleTooLong((new Date).getTime(),e)&&this.resetSessionId()},1.1*this.sessionTimeoutMs)}}var jo=["$set_once","$set"],No=ne("[SiteApps]")
class Do{constructor(e){this._instance=e,this._bufferedInvocations=[],this.apps={}}get isEnabled(){return!!this._instance.config.opt_in_site_apps}_eventCollector(e,t){if(t){var n=this.globalsForEvent(t)
this._bufferedInvocations.push(n),this._bufferedInvocations.length>1e3&&(this._bufferedInvocations=this._bufferedInvocations.slice(10))}}get siteAppLoaders(){var e
return null==(e=C._POSTHOG_REMOTE_CONFIG)||null==(e=e[this._instance.config.token])?void 0:e.siteApps}init(){if(this.isEnabled){var e=this._instance._addCaptureHook(this._eventCollector.bind(this))
this._stopBuffering=()=>{e(),this._bufferedInvocations=[],this._stopBuffering=void 0}}}globalsForEvent(e){var t,n,r,i,s,o,a
if(!e)throw new Error("Event payload is required")
var l={},c=this._instance.get_property("$groups")||[],u=this._instance.get_property("$stored_group_properties")||{}
for(var[d,p]of Object.entries(u))l[d]={id:c[d],type:d,properties:p}
var{$set_once:g,$set:v}=e
return{event:f({},h(e,jo),{properties:f({},e.properties,v?{$set:f({},null!==(t=null==(n=e.properties)?void 0:n.$set)&&void 0!==t?t:{},v)}:{},g?{$set_once:f({},null!==(r=null==(i=e.properties)?void 0:i.$set_once)&&void 0!==r?r:{},g)}:{}),elements_chain:null!==(s=null==(o=e.properties)?void 0:o.$elements_chain)&&void 0!==s?s:"",distinct_id:null==(a=e.properties)?void 0:a.distinct_id}),person:{properties:this._instance.get_property("$stored_person_properties")},groups:l}}setupSiteApp(e){var t=this.apps[e.id],n=()=>{var n
!t.errored&&this._bufferedInvocations.length&&(No.info("Processing "+this._bufferedInvocations.length+" events for site app with id "+e.id),this._bufferedInvocations.forEach(e=>null==t.processEvent?void 0:t.processEvent(e)),t.processedBuffer=!0),Object.values(this.apps).every(e=>e.processedBuffer||e.errored)&&(null==(n=this._stopBuffering)||n.call(this))},r=!1,i=i=>{t.errored=!i,t.loaded=!0,No.info("Site app with id "+e.id+" "+(i?"loaded":"errored")),r&&n()}
try{var{processEvent:s}=e.init({posthog:this._instance,callback:e=>{i(e)}})
s&&(t.processEvent=s),r=!0}catch(t){No.error("Error while initializing PostHog app with config id "+e.id,t),i(!1)}if(r&&t.loaded)try{n()}catch(n){No.error("Error while processing buffered events PostHog app with config id "+e.id,n),t.errored=!0}}_setupSiteApps(){var e=this.siteAppLoaders||[]
for(var t of e)this.apps[t.id]={id:t.id,loaded:!1,errored:!1,processedBuffer:!1}
for(var n of e)this.setupSiteApp(n)}_onCapturedEvent(e){if(0!==Object.keys(this.apps).length){var t=this.globalsForEvent(e)
for(var n of Object.values(this.apps))try{null==n.processEvent||n.processEvent(t)}catch(t){No.error("Error while processing event "+e.event+" for site app "+n.id,t)}}}onRemoteConfig(e){var t,n,r,i=this
if(null!=(t=this.siteAppLoaders)&&t.length)return this.isEnabled?(this._setupSiteApps(),void this._instance.on("eventCaptured",e=>this._onCapturedEvent(e))):void No.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
if(null==(n=this._stopBuffering)||n.call(this),null!=(r=e.siteApps)&&r.length)if(this.isEnabled){var s=function(e){var t
C["__$$ph_site_app_"+e]=i._instance,null==(t=C.__PosthogExtensions__)||null==t.loadSiteApp||t.loadSiteApp(i._instance,a,t=>{if(t)return No.error("Error while initializing PostHog app with config id "+e,t)})}
for(var{id:o,url:a}of e.siteApps)s(o)}else No.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')}}var Bo=["amazonbot","amazonproductbot","app.hypefactors.com","applebot","archive.org_bot","awariobot","backlinksextendedbot","baiduspider","bingbot","bingpreview","chrome-lighthouse","dataforseobot","deepscan","duckduckbot","facebookexternal","facebookcatalog","http://yandex.com/bots","hubspot","ia_archiver","leikibot","linkedinbot","meta-externalagent","mj12bot","msnbot","nessus","petalbot","pinterest","prerender","rogerbot","screaming frog","sebot-wa","sitebulb","slackbot","slurp","trendictionbot","turnitin","twitterbot","vercel-screenshot","vercelbot","yahoo! slurp","yandexbot","zoombot","bot.htm","bot.php","(bot;","bot/","crawler","ahrefsbot","ahrefssiteaudit","semrushbot","siteauditbot","splitsignalbot","gptbot","oai-searchbot","chatgpt-user","perplexitybot","better uptime bot","sentryuptimebot","uptimerobot","headlesschrome","cypress","google-hoteladsverifier","adsbot-google","apis-google","duplexweb-google","feedfetcher-google","google favicon","google web preview","google-read-aloud","googlebot","googleother","google-cloudvertexbot","googleweblight","mediapartners-google","storebot-google","google-inspectiontool","bytespider"],qo=function(e,t){if(!e)return!1
var n=e.toLowerCase()
return Bo.concat(t||[]).some(e=>{var t=e.toLowerCase()
return-1!==n.indexOf(t)})},Ho=function(e,t){if(!e)return!1
var n=e.userAgent
if(n&&qo(n,t))return!0
try{var r=null==e?void 0:e.userAgentData
if(null!=r&&r.brands&&r.brands.some(e=>qo(null==e?void 0:e.brand,t)))return!0}catch(e){}return!!e.webdriver},Uo=function(e){return e.US="us",e.EU="eu",e.CUSTOM="custom",e}({}),Go="i.posthog.com"
class Wo{constructor(e){this._regionCache={},this.instance=e}get apiHost(){var e=this.instance.config.api_host.trim().replace(/\/$/,"")
return"https://app.posthog.com"===e?"https://us.i.posthog.com":e}get uiHost(){var e,t=null==(e=this.instance.config.ui_host)?void 0:e.replace(/\/$/,"")
return t||(t=this.apiHost.replace("."+Go,".posthog.com")),"https://app.posthog.com"===t?"https://us.posthog.com":t}get region(){return this._regionCache[this.apiHost]||(/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=Uo.US:/https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=Uo.EU:this._regionCache[this.apiHost]=Uo.CUSTOM),this._regionCache[this.apiHost]}endpointFor(e,t){if(void 0===t&&(t=""),t&&(t="/"===t[0]?t:"/"+t),"ui"===e)return this.uiHost+t
if(this.region===Uo.CUSTOM)return this.apiHost+t
var n=Go+t
switch(e){case"assets":return"https://"+this.region+"-assets."+n
case"api":return"https://"+this.region+"."+n}}}var zo={icontains:(e,t)=>!!p&&t.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:(e,t)=>!!p&&-1===t.href.toLowerCase().indexOf(e.toLowerCase()),regex:(e,t)=>!!p&&Ni(t.href,e),not_regex:(e,t)=>!!p&&!Ni(t.href,e),exact:(e,t)=>t.href===e,is_not:(e,t)=>t.href!==e}
class Vo{constructor(e){var t=this
this.getWebExperimentsAndEvaluateDisplayLogic=function(e){void 0===e&&(e=!1),t.getWebExperiments(e=>{Vo._logInfo("retrieved web experiments from the server"),t._flagToExperiments=new Map,e.forEach(e=>{if(e.feature_flag_key){var n
t._flagToExperiments&&(Vo._logInfo("setting flag key ",e.feature_flag_key," to web experiment ",e),null==(n=t._flagToExperiments)||n.set(e.feature_flag_key,e))
var r=t._instance.getFeatureFlag(e.feature_flag_key)
H(r)&&e.variants[r]&&t._applyTransforms(e.name,r,e.variants[r].transforms)}else if(e.variants)for(var i in e.variants){var s=e.variants[i]
Vo._matchesTestVariant(s)&&t._applyTransforms(e.name,i,s.transforms)}})},e)},this._instance=e,this._instance.onFeatureFlags(e=>{this.onFeatureFlags(e)})}onFeatureFlags(e){if(this._is_bot())Vo._logInfo("Refusing to render web experiment since the viewer is a likely bot")
else if(!this._instance.config.disable_web_experiments){if(W(this._flagToExperiments))return this._flagToExperiments=new Map,this.loadIfEnabled(),void this.previewWebExperiment()
Vo._logInfo("applying feature flags",e),e.forEach(e=>{var t
if(this._flagToExperiments&&null!=(t=this._flagToExperiments)&&t.has(e)){var n,r=this._instance.getFeatureFlag(e),i=null==(n=this._flagToExperiments)?void 0:n.get(e)
r&&null!=i&&i.variants[r]&&this._applyTransforms(i.name,r,i.variants[r].transforms)}})}}previewWebExperiment(){var e=Vo.getWindowLocation()
if(null!=e&&e.search){var t=Ft(null==e?void 0:e.search,"__experiment_id"),n=Ft(null==e?void 0:e.search,"__experiment_variant")
t&&n&&(Vo._logInfo("previewing web experiments "+t+" && "+n),this.getWebExperiments(e=>{this._showPreviewWebExperiment(parseInt(t),n,e)},!1,!0))}}loadIfEnabled(){this._instance.config.disable_web_experiments||this.getWebExperimentsAndEvaluateDisplayLogic()}getWebExperiments(e,t,n){if(this._instance.config.disable_web_experiments&&!n)return e([])
var r=this._instance.get_property("$web_experiments")
if(r&&!t)return e(r)
this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/web_experiments/?token="+this._instance.config.token),method:"GET",callback:t=>{if(200!==t.statusCode||!t.json)return e([])
var n=t.json.experiments||[]
return e(n)}})}_showPreviewWebExperiment(e,t,n){var r=n.filter(t=>t.id===e)
r&&r.length>0&&(Vo._logInfo("Previewing web experiment ["+r[0].name+"] with variant ["+t+"]"),this._applyTransforms(r[0].name,t,r[0].variants[t].transforms))}static _matchesTestVariant(e){return!W(e.conditions)&&Vo._matchUrlConditions(e)&&Vo._matchUTMConditions(e)}static _matchUrlConditions(e){var t
if(W(e.conditions)||W(null==(t=e.conditions)?void 0:t.url))return!0
var n,r,i,s=Vo.getWindowLocation()
return!!s&&(null==(n=e.conditions)||!n.url||zo[null!==(r=null==(i=e.conditions)?void 0:i.urlMatchType)&&void 0!==r?r:"icontains"](e.conditions.url,s))}static getWindowLocation(){return null==p?void 0:p.location}static _matchUTMConditions(e){var t
if(W(e.conditions)||W(null==(t=e.conditions)?void 0:t.utm))return!0
var n=Gs()
if(n.utm_source){var r,i,s,o,a,l,c,u,d=null==(r=e.conditions)||null==(r=r.utm)||!r.utm_campaign||(null==(i=e.conditions)||null==(i=i.utm)?void 0:i.utm_campaign)==n.utm_campaign,f=null==(s=e.conditions)||null==(s=s.utm)||!s.utm_source||(null==(o=e.conditions)||null==(o=o.utm)?void 0:o.utm_source)==n.utm_source,h=null==(a=e.conditions)||null==(a=a.utm)||!a.utm_medium||(null==(l=e.conditions)||null==(l=l.utm)?void 0:l.utm_medium)==n.utm_medium,p=null==(c=e.conditions)||null==(c=c.utm)||!c.utm_term||(null==(u=e.conditions)||null==(u=u.utm)?void 0:u.utm_term)==n.utm_term
return d&&h&&p&&f}return!1}static _logInfo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
te.info("[WebExperiments] "+e,n)}_applyTransforms(e,t,n){this._is_bot()?Vo._logInfo("Refusing to render web experiment since the viewer is a likely bot"):"control"!==t?n.forEach(n=>{if(n.selector){var r
Vo._logInfo("applying transform of variant "+t+" for experiment "+e+" ",n)
var i=null==(r=document)?void 0:r.querySelectorAll(n.selector)
null==i||i.forEach(e=>{var t=e
n.html&&(t.innerHTML=n.html),n.css&&t.setAttribute("style",n.css)})}}):Vo._logInfo("Control variants leave the page unmodified.")}_is_bot(){return b&&this._instance?Ho(b,this._instance.config.custom_blocked_useragents):void 0}}var Qo=ne("[PostHog ExternalIntegrations]"),Jo={intercom:"intercom-integration",crispChat:"crisp-chat-integration"}
class Ko{constructor(e){this._instance=e}_loadScript(e,t){var n
null==(n=C.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,e,e=>{if(e)return Qo.error("failed to load script",e)
t()})}startIfEnabledOrStop(){var e=this,t=function(t){var n,i,s
!r||null!=(n=C.__PosthogExtensions__)&&null!=(n=n.integrations)&&n[t]||e._loadScript(Jo[t],()=>{var n
null==(n=C.__PosthogExtensions__)||null==(n=n.integrations)||null==(n=n[t])||n.start(e._instance)}),!r&&null!=(i=C.__PosthogExtensions__)&&null!=(i=i.integrations)&&i[t]&&(null==(s=C.__PosthogExtensions__)||null==(s=s.integrations)||null==(s=s[t])||s.stop())}
for(var[n,r]of Object.entries(null!==(i=this._instance.config.integrations)&&void 0!==i?i:{})){var i
t(n)}}}var Yo={},Xo=()=>{},Zo="posthog",ea=!Mi&&-1===(null==E?void 0:E.indexOf("MSIE"))&&-1===(null==E?void 0:E.indexOf("Mozilla")),ta=e=>{var t
return{api_host:"https://us.i.posthog.com",ui_host:null,token:"",autocapture:!0,rageclick:!0,cross_subdomain_cookie:he(null==y?void 0:y.location),persistence:"localStorage+cookie",persistence_name:"",loaded:Xo,save_campaign_params:!0,custom_campaign_params:[],custom_blocked_useragents:[],save_referrer:!0,capture_pageview:"2025-05-24"!==e||"history_change",capture_pageleave:"if_capture_pageview",defaults:null!=e?e:"unset",debug:w&&H(null==w?void 0:w.search)&&-1!==w.search.indexOf("__posthog_debug=true")||!1,cookie_expiration:365,upgrade:!1,disable_session_recording:!1,disable_persistence:!1,disable_web_experiments:!0,disable_surveys:!1,disable_surveys_automatic_display:!1,disable_external_dependency_loading:!1,enable_recording_console_log:void 0,secure_cookie:"https:"===(null==p||null==(t=p.location)?void 0:t.protocol),ip:!1,opt_out_capturing_by_default:!1,opt_out_persistence_by_default:!1,opt_out_useragent_filter:!1,opt_out_capturing_persistence_type:"localStorage",consent_persistence_name:null,opt_out_capturing_cookie_prefix:null,opt_in_site_apps:!1,property_denylist:[],respect_dnt:!1,sanitize_properties:null,request_headers:{},request_batching:!0,properties_string_max_length:65535,session_recording:{},mask_all_element_attributes:!1,mask_all_text:!1,mask_personal_data_properties:!1,custom_personal_data_properties:[],advanced_disable_flags:!1,advanced_disable_decide:!1,advanced_disable_feature_flags:!1,advanced_disable_feature_flags_on_first_load:!1,advanced_only_evaluate_survey_feature_flags:!1,advanced_enable_surveys:!1,advanced_disable_toolbar_metrics:!1,feature_flag_request_timeout_ms:3e3,surveys_request_timeout_ms:1e4,on_request_error:e=>{var t="Bad HTTP status: "+e.statusCode+" "+e.text
te.error(t)},get_device_id:e=>e,capture_performance:void 0,name:"posthog",bootstrap:{},disable_compression:!1,session_idle_timeout_seconds:1800,person_profiles:"identified_only",before_send:void 0,request_queue_config:{flush_interval_ms:Po},error_tracking:{},_onCapture:Xo}},na=e=>{var t={}
q(e.process_person)||(t.person_profiles=e.process_person),q(e.xhr_headers)||(t.request_headers=e.xhr_headers),q(e.cookie_name)||(t.persistence_name=e.cookie_name),q(e.disable_cookie)||(t.disable_persistence=e.disable_cookie),q(e.store_google)||(t.save_campaign_params=e.store_google),q(e.verbose)||(t.debug=e.verbose)
var n=oe({},t,e)
return j(e.property_blacklist)&&(q(e.property_denylist)?n.property_denylist=e.property_blacklist:j(e.property_denylist)?n.property_denylist=[...e.property_blacklist,...e.property_denylist]:te.error("Invalid value for property_denylist config: "+e.property_denylist)),n}
class ra{constructor(){this.__forceAllowLocalhost=!1}get _forceAllowLocalhost(){return this.__forceAllowLocalhost}set _forceAllowLocalhost(e){te.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),this.__forceAllowLocalhost=e}}class ia{get decideEndpointWasHit(){var e,t
return null!==(e=null==(t=this.featureFlags)?void 0:t.hasLoadedFlags)&&void 0!==e&&e}get flagsEndpointWasHit(){var e,t
return null!==(e=null==(t=this.featureFlags)?void 0:t.hasLoadedFlags)&&void 0!==e&&e}constructor(){this.webPerformance=new ra,this._personProcessingSetOncePropertiesSent=!1,this.version=T.LIB_VERSION,this._internalEventEmitter=new fo,this._calculate_event_properties=this.calculateEventProperties.bind(this),this.config=ta(),this.SentryIntegration=_i,this.sentryIntegration=e=>function(e,t){var n=vi(e,t)
return{name:gi,processEvent:e=>n(e)}}(this,e),this.__request_queue=[],this.__loaded=!1,this.analyticsDefaultEndpoint="/e/",this._initialPageviewCaptured=!1,this._visibilityStateListener=null,this._initialPersonProfilesConfig=null,this._cachedPersonProperties=null,this.featureFlags=new lo(this),this.toolbar=new ki(this),this.scrollManager=new Mo(this),this.pageViewManager=new Ii(this),this.surveys=new So(this),this.experiments=new Vo(this),this.exceptions=new Ui(this),this.rateLimiter=new Eo(this),this.requestRouter=new Wo(this),this.consent=new dn(this),this.externalIntegrations=new Ko(this),this.people={set:(e,t,n)=>{var r=H(e)?{[e]:t}:e
this.setPersonProperties(r),null==n||n({})},set_once:(e,t,n)=>{var r=H(e)?{[e]:t}:e
this.setPersonProperties(void 0,r),null==n||n({})}},this.on("eventCaptured",e=>te.info('send "'+(null==e?void 0:e.event)+'"',e))}init(e,t,n){if(n&&n!==Zo){var r,i=null!==(r=Yo[n])&&void 0!==r?r:new ia
return i._init(e,t,n),Yo[n]=i,Yo[Zo][n]=i,i}return this._init(e,t,n)}_init(e,t,n){var r,i
if(void 0===t&&(t={}),q(e)||U(e))return te.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),this
if(this.__loaded)return te.warn("You have already initialized PostHog! Re-initializing is a no-op"),this
this.__loaded=!0,this.config={},this._originalUserConfig=t,this._triggered_notifs=[],t.person_profiles&&(this._initialPersonProfilesConfig=t.person_profiles),this.set_config(oe({},ta(t.defaults),na(t),{name:n,token:e})),this.config.on_xhr_error&&te.error("on_xhr_error is deprecated. Use on_request_error instead"),this.compression=t.disable_compression?void 0:Mt.GZipJS
var s=this._is_persistence_disabled()
this.persistence=new uo(this.config,s),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new uo(f({},this.config,{persistence:"sessionStorage"}),s)
var o=f({},this.persistence.props),a=f({},this.sessionPersistence.props)
this.register({$initialization_time:(new Date).toISOString()}),this._requestQueue=new $o(e=>this._send_retriable_request(e),this.config.request_queue_config),this._retryQueue=new Io(this),this.__request_queue=[]
var l="always"===this.config.cookieless_mode||"on_reject"===this.config.cookieless_mode&&this.consent.isExplicitlyOptedOut()
if(l||(this.sessionManager=new Fo(this),this.sessionPropsManager=new Ro(this,this.sessionManager,this.persistence)),new xi(this).startIfEnabledOrStop(),this.siteApps=new Do(this),null==(r=this.siteApps)||r.init(),l||(this.sessionRecording=new hi(this),this.sessionRecording.startIfEnabledOrStop()),this.config.disable_scroll_properties||this.scrollManager.startMeasuringScrollPosition(),this.autocapture=new Ut(this),this.autocapture.startIfEnabled(),this.surveys.loadIfEnabled(),this.heatmaps=new Li(this),this.heatmaps.startIfEnabled(),this.webVitalsAutocapture=new Ti(this),this.exceptionObserver=new _n(this),this.exceptionObserver.startIfEnabled(),this.deadClicksAutocapture=new gn(this,pn),this.deadClicksAutocapture.startIfEnabled(),this.historyAutocapture=new zn(this),this.historyAutocapture.startIfEnabled(),T.DEBUG=T.DEBUG||this.config.debug,T.DEBUG&&te.info("Starting in debug mode",{this:this,config:t,thisC:f({},this.config),p:o,s:a}),void 0!==(null==(i=t.bootstrap)?void 0:i.distinctID)){var c,u,d=this.config.get_device_id(Kt()),h=null!=(c=t.bootstrap)&&c.isIdentifiedID?d:t.bootstrap.distinctID
this.persistence.set_property(Ve,null!=(u=t.bootstrap)&&u.isIdentifiedID?"identified":"anonymous"),this.register({distinct_id:t.bootstrap.distinctID,$device_id:h})}if(this._hasBootstrappedFeatureFlags()){var g,v,_=Object.keys((null==(g=t.bootstrap)?void 0:g.featureFlags)||{}).filter(e=>{var n
return!(null==(n=t.bootstrap)||null==(n=n.featureFlags)||!n[e])}).reduce((e,n)=>{var r
return e[n]=(null==(r=t.bootstrap)||null==(r=r.featureFlags)?void 0:r[n])||!1,e},{}),m=Object.keys((null==(v=t.bootstrap)?void 0:v.featureFlagPayloads)||{}).filter(e=>_[e]).reduce((e,n)=>{var r,i
return null!=(r=t.bootstrap)&&null!=(r=r.featureFlagPayloads)&&r[n]&&(e[n]=null==(i=t.bootstrap)||null==(i=i.featureFlagPayloads)?void 0:i[n]),e},{})
this.featureFlags.receivedFeatureFlags({featureFlags:_,featureFlagPayloads:m})}if(l)this.register_once({distinct_id:tt,$device_id:null},"")
else if(!this.get_distinct_id()){var b=this.config.get_device_id(Kt())
this.register_once({distinct_id:b,$device_id:b},""),this.persistence.set_property(Ve,"anonymous")}return ge(p,"onpagehide"in self?"pagehide":"unload",this._handle_unload.bind(this),{passive:!1}),this.toolbar.maybeLoadToolbar(),t.segment?function(e,t){var n=e.config.segment
if(!n)return t()
!function(e,t){var n=e.config.segment
if(!n)return t()
var r=n=>{var r=()=>n.anonymousId()||Kt()
e.config.get_device_id=r,n.id()&&(e.register({distinct_id:n.id(),$device_id:r()}),e.persistence.set_property(Ve,"identified")),t()},i=n.user()
"then"in i&&N(i.then)?i.then(e=>r(e)):r(i)}(e,()=>{n.register((e=>{Promise&&Promise.resolve||pi.warn("This browser does not have Promise support, and can not use the segment integration")
var t=(t,n)=>{if(!n)return t
t.event.userId||t.event.anonymousId===e.get_distinct_id()||(pi.info("No userId set, resetting PostHog"),e.reset()),t.event.userId&&t.event.userId!==e.get_distinct_id()&&(pi.info("UserId set, identifying with PostHog"),e.identify(t.event.userId))
var r=e.calculateEventProperties(n,t.event.properties)
return t.event.properties=Object.assign({},r,t.event.properties),t}
return{name:"PostHog JS",type:"enrichment",version:"1.0.0",isLoaded:()=>!0,load:()=>Promise.resolve(),track:e=>t(e,e.event.event),page:e=>t(e,"$pageview"),identify:e=>t(e,"$identify"),screen:e=>t(e,"$screen")}})(e)).then(()=>{t()})})}(this,()=>this._loaded()):this._loaded(),N(this.config._onCapture)&&this.config._onCapture!==Xo&&(te.warn("onCapture is deprecated. Please use `before_send` instead"),this.on("eventCaptured",e=>this.config._onCapture(e.event,e))),this.config.ip&&te.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'),this}_onRemoteConfig(e){var t,n,r,i,s,o,a,l
if(!y||!y.body)return te.info("document not ready yet, trying again in 500 milliseconds..."),void setTimeout(()=>{this._onRemoteConfig(e)},500)
this.compression=void 0,e.supportedCompression&&!this.config.disable_compression&&(this.compression=L(e.supportedCompression,Mt.GZipJS)?Mt.GZipJS:L(e.supportedCompression,Mt.Base64)?Mt.Base64:void 0),null!=(t=e.analytics)&&t.endpoint&&(this.analyticsDefaultEndpoint=e.analytics.endpoint),this.set_config({person_profiles:this._initialPersonProfilesConfig?this._initialPersonProfilesConfig:"identified_only"}),null==(n=this.siteApps)||n.onRemoteConfig(e),null==(r=this.sessionRecording)||r.onRemoteConfig(e),null==(i=this.autocapture)||i.onRemoteConfig(e),null==(s=this.heatmaps)||s.onRemoteConfig(e),this.surveys.onRemoteConfig(e),null==(o=this.webVitalsAutocapture)||o.onRemoteConfig(e),null==(a=this.exceptionObserver)||a.onRemoteConfig(e),this.exceptions.onRemoteConfig(e),null==(l=this.deadClicksAutocapture)||l.onRemoteConfig(e)}_loaded(){try{this.config.loaded(this)}catch(e){te.critical("`loaded` function failed",e)}this._start_queue_if_opted_in(),this.config.capture_pageview&&setTimeout(()=>{this.consent.isOptedIn()&&this._captureInitialPageview()},1),new To(this).load(),this.featureFlags.flags()}_start_queue_if_opted_in(){var e
this.is_capturing()&&this.config.request_batching&&(null==(e=this._requestQueue)||e.enable())}_dom_loaded(){this.is_capturing()&&ie(this.__request_queue,e=>this._send_retriable_request(e)),this.__request_queue=[],this._start_queue_if_opted_in()}_handle_unload(){var e,t
this.config.request_batching?(this._shouldCapturePageleave()&&this.capture("$pageleave"),null==(e=this._requestQueue)||e.unload(),null==(t=this._retryQueue)||t.unload()):this._shouldCapturePageleave()&&this.capture("$pageleave",null,{transport:"sendBeacon"})}_send_request(e){this.__loaded&&(ea?this.__request_queue.push(e):this.rateLimiter.isServerRateLimited(e.batchKey)||(e.transport=e.transport||this.config.api_transport,e.url=Ri(e.url,{ip:this.config.ip?1:0}),e.headers=f({},this.config.request_headers),e.compression="best-available"===e.compression?this.compression:e.compression,e.fetchOptions=e.fetchOptions||this.config.fetch_options,(e=>{var t,n,r,i=f({},e)
i.timeout=i.timeout||6e4,i.url=Ri(i.url,{_:(new Date).getTime().toString(),ver:T.LIB_VERSION,compression:i.compression})
var s=null!==(t=i.transport)&&void 0!==t?t:"fetch",o=null!==(n=null==(r=pe(ji,e=>e.transport===s))?void 0:r.method)&&void 0!==n?n:ji[0].method
if(!o)throw new Error("No available transport method")
o(i)})(f({},e,{callback:t=>{var n,r
this.rateLimiter.checkForLimiting(t),t.statusCode>=400&&(null==(n=(r=this.config).on_request_error)||n.call(r,t)),null==e.callback||e.callback(t)}}))))}_send_retriable_request(e){this._retryQueue?this._retryQueue.retriableRequest(e):this._send_request(e)}_execute_array(e){var t,n=[],r=[],i=[]
ie(e,e=>{e&&(t=e[0],j(t)?i.push(e):N(e)?e.call(this):j(e)&&"alias"===t?n.push(e):j(e)&&-1!==t.indexOf("capture")&&N(this[t])?i.push(e):r.push(e))})
var s=function(e,t){ie(e,function(e){if(j(e[0])){var n=t
se(e,function(e){n=n[e[0]].apply(n,e.slice(1))})}else this[e[0]].apply(this,e.slice(1))},t)}
s(n,this),s(r,this),s(i,this)}_hasBootstrappedFeatureFlags(){var e,t
return(null==(e=this.config.bootstrap)?void 0:e.featureFlags)&&Object.keys(null==(t=this.config.bootstrap)?void 0:t.featureFlags).length>0||!1}push(e){this._execute_array([e])}capture(e,t,n){var r
if(this.__loaded&&this.persistence&&this.sessionPersistence&&this._requestQueue){if(this.is_capturing())if(!q(e)&&H(e)){if(this.config.opt_out_useragent_filter||!this._is_bot()){var i=null!=n&&n.skip_client_rate_limiting?void 0:this.rateLimiter.clientRateLimitContext()
if(null==i||!i.isRateLimited){null!=t&&t.$current_url&&!H(null==t?void 0:t.$current_url)&&(te.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."),null==t||delete t.$current_url),this.sessionPersistence.update_search_keyword(),this.config.save_campaign_params&&this.sessionPersistence.update_campaign_params(),this.config.save_referrer&&this.sessionPersistence.update_referrer_info(),(this.config.save_campaign_params||this.config.save_referrer)&&this.persistence.set_initial_person_info()
var s=new Date,o=(null==n?void 0:n.timestamp)||s,a=Kt(),l={uuid:a,event:e,properties:this.calculateEventProperties(e,t||{},o,a)}
i&&(l.properties.$lib_rate_limit_remaining_tokens=i.remainingTokens),(null==n?void 0:n.$set)&&(l.$set=null==n?void 0:n.$set)
var c,u=this._calculate_set_once_properties(null==n?void 0:n.$set_once)
if(u&&(l.$set_once=u),(l=function(e,t){return n=e,r=e=>H(e)&&!G(t)?e.slice(0,t):e,i=new Set,function e(t,n){return t!==Object(t)?r?r(t):t:i.has(t)?void 0:(i.add(t),j(t)?(s=[],ie(t,t=>{s.push(e(t))})):(s={},se(t,(t,n)=>{i.has(t)||(s[n]=e(t,n))})),s)
var s}(n)
var n,r,i}(l,null!=n&&n._noTruncate?null:this.config.properties_string_max_length)).timestamp=o,q(null==n?void 0:n.timestamp)||(l.properties.$event_time_override_provided=!0,l.properties.$event_time_override_system_time=s),e===go.DISMISSED||e===go.SENT){var d=null==t?void 0:t[vo.SURVEY_ID],h=null==t?void 0:t[vo.SURVEY_ITERATION]
c={id:d,current_iteration:h},localStorage.getItem(yo(c))||localStorage.setItem(yo(c),"true"),l.$set=f({},l.$set,{[bo({id:d,current_iteration:h},e===go.SENT?"responded":"dismissed")]:!0})}var p=f({},l.properties.$set,l.$set)
if(B(p)||this.setPersonPropertiesForFlags(p),!W(this.config.before_send)){var g=this._runBeforeSend(l)
if(!g)return
l=g}this._internalEventEmitter.emit("eventCaptured",l)
var v={method:"POST",url:null!==(r=null==n?void 0:n._url)&&void 0!==r?r:this.requestRouter.endpointFor("api",this.analyticsDefaultEndpoint),data:l,compression:"best-available",batchKey:null==n?void 0:n._batchKey}
return!this.config.request_batching||n&&(null==n||!n._batchKey)||null!=n&&n.send_instantly?this._send_retriable_request(v):this._requestQueue.enqueue(v),l}te.critical("This capture call is ignored due to client rate limiting.")}}else te.error("No event name provided to posthog.capture")}else te.uninitializedWarning("posthog.capture")}_addCaptureHook(e){return this.on("eventCaptured",t=>e(t.event,t))}calculateEventProperties(e,t,n,r,i){if(n=n||new Date,!this.persistence||!this.sessionPersistence)return t
var s=i?void 0:this.persistence.remove_event_timer(e),o=f({},t)
if(o.token=this.config.token,o.$config_defaults=this.config.defaults,("always"==this.config.cookieless_mode||"on_reject"==this.config.cookieless_mode&&this.consent.isExplicitlyOptedOut())&&(o.$cookieless_mode=!0),"$snapshot"===e){var a=f({},this.persistence.properties(),this.sessionPersistence.properties())
return o.distinct_id=a.distinct_id,(!H(o.distinct_id)&&!z(o.distinct_id)||U(o.distinct_id))&&te.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),o}var l,c=Zs(this.config.mask_personal_data_properties,this.config.custom_personal_data_properties)
if(this.sessionManager){var{sessionId:u,windowId:d}=this.sessionManager.checkAndGetSessionAndWindowId(i,n.getTime())
o.$session_id=u,o.$window_id=d}this.sessionPropsManager&&oe(o,this.sessionPropsManager.getSessionProps())
try{var h
this.sessionRecording&&oe(o,this.sessionRecording.sdkDebugProperties),o.$sdk_debug_retry_queue_size=null==(h=this._retryQueue)?void 0:h.length}catch(e){o.$sdk_debug_error_capturing_properties=String(e)}if(this.requestRouter.region===Uo.CUSTOM&&(o.$lib_custom_api_host=this.config.api_host),l="$pageview"!==e||i?"$pageleave"!==e||i?this.pageViewManager.doEvent():this.pageViewManager.doPageLeave(n):this.pageViewManager.doPageView(n,r),o=oe(o,l),"$pageview"===e&&y&&(o.title=y.title),!q(s)){var p=n.getTime()-s
o.$duration=parseFloat((p/1e3).toFixed(3))}E&&this.config.opt_out_useragent_filter&&(o.$browser_type=this._is_bot()?"bot":"browser"),(o=oe({},c,this.persistence.properties(),this.sessionPersistence.properties(),o)).$is_identified=this._isIdentified(),j(this.config.property_denylist)?se(this.config.property_denylist,function(e){delete o[e]}):te.error("Invalid value for property_denylist config: "+this.config.property_denylist+" or property_blacklist config: "+this.config.property_blacklist)
var g=this.config.sanitize_properties
g&&(te.error("sanitize_properties is deprecated. Use before_send instead"),o=g(o,e))
var v=this._hasPersonProcessing()
return o.$process_person_profile=v,v&&!i&&this._requirePersonProcessing("_calculate_event_properties"),o}_calculate_set_once_properties(e){var t
if(!this.persistence||!this._hasPersonProcessing())return e
if(this._personProcessingSetOncePropertiesSent)return e
var n=this.persistence.get_initial_props(),r=null==(t=this.sessionPropsManager)?void 0:t.getSetOnceProps(),i=oe({},n,r||{},e||{}),s=this.config.sanitize_properties
return s&&(te.error("sanitize_properties is deprecated. Use before_send instead"),i=s(i,"$set_once")),this._personProcessingSetOncePropertiesSent=!0,B(i)?void 0:i}register(e,t){var n
null==(n=this.persistence)||n.register(e,t)}register_once(e,t,n){var r
null==(r=this.persistence)||r.register_once(e,t,n)}register_for_session(e){var t
null==(t=this.sessionPersistence)||t.register(e)}unregister(e){var t
null==(t=this.persistence)||t.unregister(e)}unregister_for_session(e){var t
null==(t=this.sessionPersistence)||t.unregister(e)}_register_single(e,t){this.register({[e]:t})}getFeatureFlag(e,t){return this.featureFlags.getFeatureFlag(e,t)}getFeatureFlagPayload(e){var t=this.featureFlags.getFeatureFlagPayload(e)
try{return JSON.parse(t)}catch(e){return t}}isFeatureEnabled(e,t){return this.featureFlags.isFeatureEnabled(e,t)}reloadFeatureFlags(){this.featureFlags.reloadFeatureFlags()}updateEarlyAccessFeatureEnrollment(e,t,n){this.featureFlags.updateEarlyAccessFeatureEnrollment(e,t,n)}getEarlyAccessFeatures(e,t,n){return void 0===t&&(t=!1),this.featureFlags.getEarlyAccessFeatures(e,t,n)}on(e,t){return this._internalEventEmitter.on(e,t)}onFeatureFlags(e){return this.featureFlags.onFeatureFlags(e)}onSurveysLoaded(e){return this.surveys.onSurveysLoaded(e)}onSessionId(e){var t,n
return null!==(t=null==(n=this.sessionManager)?void 0:n.onSessionId(e))&&void 0!==t?t:()=>{}}getSurveys(e,t){void 0===t&&(t=!1),this.surveys.getSurveys(e,t)}getActiveMatchingSurveys(e,t){void 0===t&&(t=!1),this.surveys.getActiveMatchingSurveys(e,t)}renderSurvey(e,t){this.surveys.renderSurvey(e,t)}canRenderSurvey(e){return this.surveys.canRenderSurvey(e)}canRenderSurveyAsync(e,t){return void 0===t&&(t=!1),this.surveys.canRenderSurveyAsync(e,t)}identify(e,t,n){if(!this.__loaded||!this.persistence)return te.uninitializedWarning("posthog.identify")
if(z(e)&&(e=e.toString(),te.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")),e)if(["distinct_id","distinctid"].includes(e.toLowerCase()))te.critical('The string "'+e+'" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.')
else if(e!==tt){if(this._requirePersonProcessing("posthog.identify")){var r=this.get_distinct_id()
if(this.register({$user_id:e}),!this.get_property("$device_id")){var i=r
this.register_once({$had_persisted_distinct_id:!0,$device_id:i},"")}e!==r&&e!==this.get_property(_e)&&(this.unregister(_e),this.register({distinct_id:e}))
var s="anonymous"===(this.persistence.get_property(Ve)||"anonymous")
e!==r&&s?(this.persistence.set_property(Ve,"identified"),this.setPersonPropertiesForFlags(f({},n||{},t||{}),!1),this.capture("$identify",{distinct_id:e,$anon_distinct_id:r},{$set:t||{},$set_once:n||{}}),this._cachedPersonProperties=Di(e,t,n),this.featureFlags.setAnonymousDistinctId(r)):(t||n)&&this.setPersonProperties(t,n),e!==r&&(this.reloadFeatureFlags(),this.unregister(ze))}}else te.critical('The string "'+tt+'" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.')
else te.error("Unique user id has not been set in posthog.identify")}setPersonProperties(e,t){if((e||t)&&this._requirePersonProcessing("posthog.setPersonProperties")){var n=Di(this.get_distinct_id(),e,t)
this._cachedPersonProperties!==n?(this.setPersonPropertiesForFlags(f({},t||{},e||{})),this.capture("$set",{$set:e||{},$set_once:t||{}}),this._cachedPersonProperties=n):te.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")}}group(e,t,n){if(e&&t){if(this._requirePersonProcessing("posthog.group")){var r=this.getGroups()
r[e]!==t&&this.resetGroupPropertiesForFlags(e),this.register({$groups:f({},r,{[e]:t})}),n&&(this.capture("$groupidentify",{$group_type:e,$group_key:t,$group_set:n}),this.setGroupPropertiesForFlags({[e]:n})),r[e]===t||n||this.reloadFeatureFlags()}}else te.error("posthog.group requires a group type and group key")}resetGroups(){this.register({$groups:{}}),this.resetGroupPropertiesForFlags(),this.reloadFeatureFlags()}setPersonPropertiesForFlags(e,t){void 0===t&&(t=!0),this.featureFlags.setPersonPropertiesForFlags(e,t)}resetPersonPropertiesForFlags(){this.featureFlags.resetPersonPropertiesForFlags()}setGroupPropertiesForFlags(e,t){void 0===t&&(t=!0),this._requirePersonProcessing("posthog.setGroupPropertiesForFlags")&&this.featureFlags.setGroupPropertiesForFlags(e,t)}resetGroupPropertiesForFlags(e){this.featureFlags.resetGroupPropertiesForFlags(e)}reset(e){var t,n,r,i
if(te.info("reset"),!this.__loaded)return te.uninitializedWarning("posthog.reset")
var s=this.get_property("$device_id")
if(this.consent.reset(),null==(t=this.persistence)||t.clear(),null==(n=this.sessionPersistence)||n.clear(),this.surveys.reset(),this.featureFlags.reset(),null==(r=this.persistence)||r.set_property(Ve,"anonymous"),null==(i=this.sessionManager)||i.resetSessionId(),this._cachedPersonProperties=null,"always"===this.config.cookieless_mode)this.register_once({distinct_id:tt,$device_id:null},"")
else{var o=this.config.get_device_id(Kt())
this.register_once({distinct_id:o,$device_id:e?o:s},"")}this.register({$last_posthog_reset:(new Date).toISOString()},1)}get_distinct_id(){return this.get_property("distinct_id")}getGroups(){return this.get_property("$groups")||{}}get_session_id(){var e,t
return null!==(e=null==(t=this.sessionManager)?void 0:t.checkAndGetSessionAndWindowId(!0).sessionId)&&void 0!==e?e:""}get_session_replay_url(e){if(!this.sessionManager)return""
var{sessionId:t,sessionStartTimestamp:n}=this.sessionManager.checkAndGetSessionAndWindowId(!0),r=this.requestRouter.endpointFor("ui","/project/"+this.config.token+"/replay/"+t)
if(null!=e&&e.withTimestamp&&n){var i,s=null!==(i=e.timestampLookBack)&&void 0!==i?i:10
if(!n)return r
r+="?t="+Math.max(Math.floor(((new Date).getTime()-n)/1e3)-s,0)}return r}alias(e,t){return e===this.get_property(ve)?(te.critical("Attempting to create alias for existing People user - aborting."),-2):this._requirePersonProcessing("posthog.alias")?(q(t)&&(t=this.get_distinct_id()),e!==t?(this._register_single(_e,e),this.capture("$create_alias",{alias:e,distinct_id:t})):(te.warn("alias matches current distinct_id - skipping api call."),this.identify(e),-1)):void 0}set_config(e){var t=f({},this.config)
if(D(e)){var n,r,i,s,o
oe(this.config,na(e))
var a=this._is_persistence_disabled()
null==(n=this.persistence)||n.update_config(this.config,t,a),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new uo(f({},this.config,{persistence:"sessionStorage"}),a),nn._is_supported()&&"true"===nn._get("ph_debug")&&(this.config.debug=!0),this.config.debug&&(T.DEBUG=!0,te.info("set_config",{config:e,oldConfig:t,newConfig:f({},this.config)})),null==(r=this.sessionRecording)||r.startIfEnabledOrStop(),null==(i=this.autocapture)||i.startIfEnabled(),null==(s=this.heatmaps)||s.startIfEnabled(),this.surveys.loadIfEnabled(),this._sync_opt_out_with_persistence(),null==(o=this.externalIntegrations)||o.startIfEnabledOrStop()}}startSessionRecording(e){var t,n,r,i,s,o=!0===e,a={sampling:o||!(null==e||!e.sampling),linked_flag:o||!(null==e||!e.linked_flag),url_trigger:o||!(null==e||!e.url_trigger),event_trigger:o||!(null==e||!e.event_trigger)}
Object.values(a).some(Boolean)&&(null==(t=this.sessionManager)||t.checkAndGetSessionAndWindowId(),a.sampling&&(null==(n=this.sessionRecording)||n.overrideSampling()),a.linked_flag&&(null==(r=this.sessionRecording)||r.overrideLinkedFlag()),a.url_trigger&&(null==(i=this.sessionRecording)||i.overrideTrigger("url")),a.event_trigger&&(null==(s=this.sessionRecording)||s.overrideTrigger("event")))
this.set_config({disable_session_recording:!1})}stopSessionRecording(){this.set_config({disable_session_recording:!0})}sessionRecordingStarted(){var e
return!(null==(e=this.sessionRecording)||!e.started)}captureException(e,t){var n=new Error("PostHog syntheticException")
return this.exceptions.sendExceptionEvent(f({},Gn((e=>e instanceof Error)(e)?{error:e,event:e.message}:{event:e},{syntheticException:n}),t))}loadToolbar(e){return this.toolbar.loadToolbar(e)}get_property(e){var t
return null==(t=this.persistence)?void 0:t.props[e]}getSessionProperty(e){var t
return null==(t=this.sessionPersistence)?void 0:t.props[e]}toString(){var e,t=null!==(e=this.config.name)&&void 0!==e?e:Zo
return t!==Zo&&(t=Zo+"."+t),t}_isIdentified(){var e,t
return"identified"===(null==(e=this.persistence)?void 0:e.get_property(Ve))||"identified"===(null==(t=this.sessionPersistence)?void 0:t.get_property(Ve))}_hasPersonProcessing(){var e,t
return!("never"===this.config.person_profiles||"identified_only"===this.config.person_profiles&&!this._isIdentified()&&B(this.getGroups())&&(null==(e=this.persistence)||null==(e=e.props)||!e[_e])&&(null==(t=this.persistence)||null==(t=t.props)||!t[Ze]))}_shouldCapturePageleave(){return!0===this.config.capture_pageleave||"if_capture_pageview"===this.config.capture_pageleave&&(!0===this.config.capture_pageview||"history_change"===this.config.capture_pageview)}createPersonProfile(){this._hasPersonProcessing()||this._requirePersonProcessing("posthog.createPersonProfile")&&this.setPersonProperties({},{})}_requirePersonProcessing(e){return"never"===this.config.person_profiles?(te.error(e+' was called, but process_person is set to "never". This call will be ignored.'),!1):(this._register_single(Ze,!0),!0)}_is_persistence_disabled(){if("always"===this.config.cookieless_mode)return!0
var e=this.consent.isOptedOut(),t=this.config.opt_out_persistence_by_default||"on_reject"===this.config.cookieless_mode
return this.config.disable_persistence||e&&!!t}_sync_opt_out_with_persistence(){var e,t,n,r,i=this._is_persistence_disabled()
return(null==(e=this.persistence)?void 0:e._disabled)!==i&&(null==(n=this.persistence)||n.set_disabled(i)),(null==(t=this.sessionPersistence)?void 0:t._disabled)!==i&&(null==(r=this.sessionPersistence)||r.set_disabled(i)),i}opt_in_capturing(e){var t
"always"!==this.config.cookieless_mode?("on_reject"===this.config.cookieless_mode&&this.consent.isExplicitlyOptedOut()&&(this.reset(!0),this.sessionManager=new Fo(this),this.persistence&&(this.sessionPropsManager=new Ro(this,this.sessionManager,this.persistence)),this.sessionRecording=new hi(this),this.sessionRecording.startIfEnabledOrStop()),this.consent.optInOut(!0),this._sync_opt_out_with_persistence(),(q(null==e?void 0:e.captureEventName)||null!=e&&e.captureEventName)&&this.capture(null!==(t=null==e?void 0:e.captureEventName)&&void 0!==t?t:"$opt_in",null==e?void 0:e.captureProperties,{send_instantly:!0}),this.config.capture_pageview&&this._captureInitialPageview()):te.warn('Consent opt in/out is not valid with cookieless_mode="always" and will be ignored')}opt_out_capturing(){var e
"always"!==this.config.cookieless_mode?("on_reject"===this.config.cookieless_mode&&this.consent.isOptedIn()&&this.reset(!0),this.consent.optInOut(!1),this._sync_opt_out_with_persistence(),"on_reject"===this.config.cookieless_mode&&(this.register({distinct_id:tt,$device_id:null}),this.sessionManager=void 0,this.sessionPropsManager=void 0,null==(e=this.sessionRecording)||e.stopRecording(),this.sessionRecording=void 0,this._captureInitialPageview())):te.warn('Consent opt in/out is not valid with cookieless_mode="always" and will be ignored')}has_opted_in_capturing(){return this.consent.isOptedIn()}has_opted_out_capturing(){return this.consent.isOptedOut()}get_explicit_consent_status(){var e=this.consent.consent
return e===un.GRANTED?"granted":e===un.DENIED?"denied":"pending"}is_capturing(){return"always"===this.config.cookieless_mode||("on_reject"===this.config.cookieless_mode?this.consent.isExplicitlyOptedOut()||this.consent.isOptedIn():!this.has_opted_out_capturing())}clear_opt_in_out_capturing(){this.consent.reset(),this._sync_opt_out_with_persistence()}_is_bot(){return b?Ho(b,this.config.custom_blocked_useragents):void 0}_captureInitialPageview(){y&&("visible"===y.visibilityState?this._initialPageviewCaptured||(this._initialPageviewCaptured=!0,this.capture("$pageview",{title:y.title},{send_instantly:!0}),this._visibilityStateListener&&(y.removeEventListener("visibilitychange",this._visibilityStateListener),this._visibilityStateListener=null)):this._visibilityStateListener||(this._visibilityStateListener=this._captureInitialPageview.bind(this),ge(y,"visibilitychange",this._visibilityStateListener)))}debug(e){!1===e?(null==p||p.console.log("You've disabled debug mode."),localStorage&&localStorage.removeItem("ph_debug"),this.set_config({debug:!1})):(null==p||p.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),localStorage&&localStorage.setItem("ph_debug","true"),this.set_config({debug:!0}))}_shouldDisableFlags(){var e,t,n,r,i,s,o=this._originalUserConfig||{}
return"advanced_disable_flags"in o?!!o.advanced_disable_flags:!1!==this.config.advanced_disable_flags?!!this.config.advanced_disable_flags:!0===this.config.advanced_disable_decide?(te.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."),!0):(n="advanced_disable_decide",r=te,i=(t="advanced_disable_flags")in(e=o)&&!q(e[t]),s=n in e&&!q(e[n]),i?e[t]:!!s&&(r&&r.warn("Config field '"+n+"' is deprecated. Please use '"+t+"' instead. The old field will be removed in a future major version."),e[n]))}_runBeforeSend(e){if(W(this.config.before_send))return e
var t=j(this.config.before_send)?this.config.before_send:[this.config.before_send],n=e
for(var r of t){if(n=r(n),W(n)){var i="Event '"+e.event+"' was rejected in beforeSend function"
return Q(e.event)?te.warn(i+". This can cause unexpected behavior."):te.info(i),null}n.properties&&!B(n.properties)||te.warn("Event '"+e.event+"' has no properties after beforeSend function, this is likely an error.")}return n}getPageViewId(){var e
return null==(e=this.pageViewManager._currentPageview)?void 0:e.pageViewId}captureTraceFeedback(e,t){this.capture("$ai_feedback",{$ai_trace_id:String(e),$ai_feedback_text:t})}captureTraceMetric(e,t,n){this.capture("$ai_metric",{$ai_trace_id:String(e),$ai_metric_name:t,$ai_metric_value:String(n)})}}!function(e,t){for(var n=0;n<t.length;n++)e.prototype[t[n]]=ue(e.prototype[t[n]])}(ia,["identify"])
var sa,oa=(sa=Yo[Zo]=new ia,function(){function e(){e.done||(e.done=!0,ea=!1,se(Yo,function(e){e._dom_loaded()}))}null!=y&&y.addEventListener?"complete"===y.readyState?e():ge(y,"DOMContentLoaded",e,{capture:!1}):p&&te.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")}(),sa)
function aa(...e){console.log(...e)}function la(e,t){oa.capture(e,t)}function ca(){"string"==typeof window.self&&(s(),window.self=window),function(){try{oa.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N",{advanced_disable_decide:!0,advanced_disable_feature_flags:!0,advanced_disable_feature_flags_on_first_load:!0,advanced_disable_toolbar_metrics:!0,api_host:"https://us.i.posthog.com",autocapture:!1,capture_pageview:!1,disable_compression:!1,disable_persistence:!0,disable_session_recording:!0,disable_surveys:!0,person_profiles:"identified_only"})}catch(e){aa(e)}}()}let ua=0,da=0,fa=0,ha=0,pa=0,ga=0,va=0
const _a=()=>Date.now(),ma=()=>Math.floor(_a()/1e3)
function ba(){return ua||(ua=_a()),ua}function ya(){return da||(da=ba()-3e5),da}function wa(){return fa||(fa=ba()-1728e5),fa}function ka(){return ha||(ha=Math.floor(ba()/1e3)),ha}function Sa(){return pa||(pa=ka()-120),pa}function xa(){return ga||(ga=ka()-86400),ga}function Ea(){return va||(va=ka()-604800),va}function Ca(e){return null===e}function Ta(e){return void 0===e}const Pa=`${document.location.protocol}//${document.location.host}/`,$a=window.HCS?.defines?.cdn,La=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],Ia=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],Ma=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Oa=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,Ra=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,Aa=/guild_id=(?<guildId>\d+)/,Fa=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,ja=/player_id=(?<playerId>\d+)/,Na=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,Da=/VL:.+?(?<vl>\d+)/,Ba=/creatures\/(\d+)[A-Za-z0-9]{32}\.png/,qa=.2,Ha="joinallgroupsundersize",Ua="index.php",Ga="?cmd=",Wa=`${Ua}${Ga}`,za="&subcmd=",Va="&target_username=",Qa=`${Wa}auctionhouse`,Ja=`${Qa}&search=`,Ka=`${Wa}log`,Ya=`${Wa}ignore${za}add&ignore_username=`,Xa=`${Wa}profile`,Za=`${Xa}&player_id=`,el=`${Xa}${za}dropitems`,tl=`${Wa}trade&target_player=`,nl=`${Wa}trade${za}createsecure${Va}`,rl=`${Wa}arena${za}`,il=`${Ua}${`${Ga}notepad&blank=1${za}`}`,sl=`${il}auctionsearch`,ol=`${Wa}points`,al=`${Wa}guild${za}`,ll=`${al}log`,cl=`${al}scouttower`,ul=`${al}groups&subcmd2=`,dl=`${al}inventory&subcmd2=report&user=`,fl=`${al}view&guild_id=`,hl=`${ul}joinall`,pl=`${ul}${Ha}`,gl=`${Wa}world`,vl=`${Wa}findplayer`,_l=`${vl}&search_show_first=1&search_username=`,ml=`${Wa}blacksmith`,bl=`${Wa}quickbuff`,yl=`${Wa}composing`,wl=`${Wa}attackplayer${Va}`,kl=`${Wa}${za}viewupdatearchive`,Sl=`${Wa}${za}viewarchive`,xl=`${Wa}bounty`,El=`${Wa}inventing${za}viewrecipe&recipe_id=`,Cl=`https://guide.fallensword.com/${Wa}`,Tl="after-update.actionlist",Pl="buffs.player",$l="update.player",Ll="level.stats-player",Il="gold.stats-player",Ml="prompt.worldDialogShop",Ol="keydown.controls",Rl="update.realm",Al="-success.action-response",Fl=`-1${Al}`,jl=`1${Al}`,Nl=`2${Al}`,Dl=`9${Al}`,Bl=`5${Al}`,ql=`25${Al}`,Hl=2,Ul=16,Gl=128,Wl=256,zl="needToCompose",Vl="lastComposeCheck",Ql="characterVirtualLevel",Jl="enableGuildActivityTracker",Kl="lastLadderReset",Yl="form",Xl="table",Zl="td",ec="fsh_buffLog",tc="stat-level",nc="stat-defense",rc="stat-attack",ic="stat-damage",sc="stat-armor",oc="stat-hp",ac="stat-vl",lc="GM_",cc=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],uc=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],dc=`${$a}ui/world/action_spinner.gif`,fc=".fa-envelope",hc='a[href*="&player_id="]',pc=.002,gc=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],vc='input[name="blockedSkillList[]"]'
var _c={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252",compactRanks:!1,lastModalGuildLogCheck:0,dailyQuestReRoll:!1}
const mc=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function bc(e,t){const n=window.localStorage.getItem(lc+e)
return Ca(n)||Ta(n)?t:function(e){const t=mc.find(t=>e.startsWith(t[0]))
return t?t[1](e):e}(n)}function yc(e){return bc(e,_c[e])}function wc(e){return"boolean"==typeof e}function kc(e){return"string"==typeof e}function Sc(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(lc+e,t+n)}const xc=[[kc,(e,t)=>{Sc(e,"S]",t)}],[e=>"number"==typeof e,(e,t)=>{t.toString().indexOf(".")<0&&Sc(e,"N]",t)}],[wc,(e,t)=>{Sc(e,"B]",t)}]]
function Ec(e,t){const n=xc.find(e=>e[0](t))
n&&n[1](e,t)}function Cc(e){const t=`screenview__${e}`,n=yc(t)
Number.isFinite(n)&&n>xa()||(la(t),Ec(t,ka()))}function Tc(e){return"function"==typeof e}function Pc(e){return"object"==typeof e}function $c(e,t){try{return JSON.parse(e,t)}catch(e){}}function Lc(e,t){return t?t.querySelector(e):document.querySelector(e)}function Ic(e){const t=Lc("link",document.body)
return new Promise(n=>{const r=document.createElement("link")
r.type="text/css",r.rel="stylesheet",r.onload=()=>{n()},r.href=e,t?t.before(r):document.body.append(r)})}var Mc="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function Oc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rc,Ac={exports:{}}
var Fc=(Rc||(Rc=1,Ac.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==Mc?Mc:"undefined"!=typeof self?self:{}
function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){var t=e.default
if("function"==typeof t){var n=function(){return t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(t){var r=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}),n}var r={},i={},s={},o={},a="<unknown>"
function l(e){return e.split("\n").reduce(function(e,t){var n=d(t)||h(t)||v(t)||y(t)||m(t)
return n&&e.push(n),e},[])}var c=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,u=/\((\S*)(?::(\d+))(?::(\d+))\)/
function d(e){var t=c.exec(e)
if(!t)return null
var n=t[2]&&0===t[2].indexOf("native"),r=t[2]&&0===t[2].indexOf("eval"),i=u.exec(t[2])
return r&&null!=i&&(t[2]=i[1],t[3]=i[2],t[4]=i[3]),{file:n?null:t[2],methodName:t[1]||a,arguments:n?[t[2]]:[],lineNumber:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}var f=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
function h(e){var t=f.exec(e)
return t?{file:t[2],methodName:t[1]||a,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var p=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,g=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i
function v(e){var t=p.exec(e)
if(!t)return null
var n=t[3]&&t[3].indexOf(" > eval")>-1,r=g.exec(t[3])
return n&&null!=r&&(t[3]=r[1],t[4]=r[2],t[5]=null),{file:t[3],methodName:t[1]||a,arguments:t[2]?t[2].split(","):[],lineNumber:t[4]?+t[4]:null,column:t[5]?+t[5]:null}}var _=/^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i
function m(e){var t=_.exec(e)
return t?{file:t[3],methodName:t[1]||a,arguments:[],lineNumber:+t[4],column:t[5]?+t[5]:null}:null}var b=/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i
function y(e){var t=b.exec(e)
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
return n}return[]}function v(e,t){return s(this,void 0,void 0,function(){var n,r,i,s
return o(this,function(o){switch(o.label){case 0:if(n=[],!t||!e||!e.length)return[2,n]
r=0,o.label=1
case 1:return e.length?(i=e.splice(0)[r],[4,t(i.file)]):[3,3]
case 2:return s=o.sent(),n[r]=q(s,i.number,i.column,2),r++,[3,1]
case 3:return[2,n]}})})}function _(e,t){for(var n=[],r=!0,i=0,s=t.length;i<s;i++){var o=(0,t[i])(e)
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
if(Array.isArray(e))return e.map(function(e){return o(e,n+1)})
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
e[t]=n(r),e[t].__hb_original=r}catch(e){}}t.merge=l,t.mergeNotice=c,t.objectIsEmpty=u,t.objectIsExtensible=d,t.makeBacktrace=f,t.DEFAULT_BACKTRACE_SHIFT=3,t.calculateBacktraceShift=p,t.getCauses=g,t.getSourceForBacktrace=v,t.runBeforeNotifyHandlers=_,t.runAfterNotifyHandlers=m,t.shallowClone=b,t.sanitize=y,t.logger=k,t.makeNotice=S,t.isErrorObject=x,t.instrument=E
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
M(i,t)&&(r=r.replace("".concat(i,"=").concat(s),"".concat(i,"=[FILTERED]")))}),r}function A(e,t){void 0===t&&(t="")
var n={}
return Object.keys(e).forEach(function(r){var i=t+r.replace(/\W/g,"_").toUpperCase()
n[i]=e[r]}),n}function F(e){return JSON.parse(JSON.stringify(e))}t.instrumentConsole=P,t.endpoint=$,t.generateStackTrace=L,t.filter=I,t.filterUrl=R,t.formatCGIData=A,t.clone=F
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
return e},O.apply(this,arguments)},R=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):i(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())})},A=e&&e.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
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
var F=I,j=o,N=M,D=function(){function e(e,t){this.config=e,this.transport=t,this.queue=[],this.isProcessing=!1,this.config=O(O({},N.CONFIG),e),this.logger=this.originalLogger()}return e.prototype.configure=function(e){for(var t in e)this.config[t]=e[t]},e.prototype.log=function(e){this.queue.push(e),this.isProcessing||this.processQueue()},e.prototype.flushAsync=function(){return this.logger.debug("[Honeybadger] Flushing events"),this.send()},e.prototype.processQueue=function(){var e=this
0===this.queue.length||this.isProcessing||(this.isProcessing=!0,this.send().then(function(){setTimeout(function(){e.isProcessing=!1,e.processQueue()},50)}).catch(function(t){e.logger.error("[Honeybadger] Error making HTTP request:",t),setTimeout(function(){e.isProcessing=!1,e.processQueue()},50)}))},e.prototype.send=function(){return R(this,void 0,void 0,function(){var e,t
return A(this,function(n){return 0===this.queue.length?[2]:(e=this.queue.slice(),this.queue=[],t=F.NdJson.stringify(e),[2,this.makeHttpRequest(t)])})})},e.prototype.makeHttpRequest=function(e){return R(this,void 0,void 0,function(){var t=this
return A(this,function(n){return[2,this.transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json"},method:"POST",endpoint:(0,j.endpoint)(this.config.endpoint,"/v1/events"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},e).then(function(){t.config.debug&&t.logger.debug("[Honeybadger] Events sent successfully")}).catch(function(e){t.logger.error("[Honeybadger] Error sending events: ".concat(e.message))})]})})},e.prototype.originalLogger=function(){var e,t,n,r,i
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
var U=o,G=E,W=P,z=M,V=/,|\s+/,Q=/\S/,J=function(){function e(e,t){void 0===e&&(e={}),this.__pluginsLoaded=!1,this.__store=null,this.__beforeNotifyHandlers=[],this.__afterNotifyHandlers=[],this.__notifier={name:"@honeybadger-io/core",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",version:"6.11.2"},this.config=B(B({},z.CONFIG),e),this.__initStore(),this.__transport=t,this.__eventsLogger=new W.ThrottledEventsLogger(this.config,this.__transport),this.logger=(0,U.logger)(this)}return e.prototype.getVersion=function(){return this.__notifier.version},e.prototype.getNotifier=function(){return this.__notifier},e.prototype.setNotifier=function(e){this.__notifier=e},e.prototype.configure=function(e){for(var t in void 0===e&&(e={}),e)this.config[t]=e[t]
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
x.Client=J
var K={}
Object.defineProperty(K,"__esModule",{value:!0}),function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e&&e.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},a=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i)
return r(t,e),t},l=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Plugins=t.Util=t.Types=t.Client=void 0
var c=l(s),u=x
Object.defineProperty(t,"Client",{enumerable:!0,get:function(){return u.Client}}),i(E,t),t.Types=a(K),t.Util=a(o),t.Plugins={events:c.default}}(i)
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
var de,fe=i,he=fe.Util.instrument,pe=fe.Util.makeNotice,ge=fe.Util.globalThisOrWindow,ve=0
function _e(){ve+=1,clearTimeout(de),de=setTimeout(function(){ve=0})}function me(e){return void 0===e&&(e=ge()),{load:function(t){he(e,"onerror",function(n){var r=function(e,n,r,i,s){if(t.logger.debug("window.onerror callback invoked",arguments),ve>0)return t.logger.debug("Ignoring window.onerror (error likely reported earlier)",arguments),void(ve-=1)
if(0===r&&/Script error\.?/.test(e))t.config.enableUncaught&&t.logger.warn("Ignoring cross-domain script error: enable CORS to track these types of errors",arguments)
else{var o=pe(s)
o.name||(o.name="window.onerror"),o.message||(o.message=e),o.stack||(o.stack=[o.message,"\n    at ? (",n||"unknown",":",r||0,":",i||0,")"].join("")),t.addBreadcrumb("window.onerror"!==o.name&&o.name?"window.onerror: ".concat(o.name):"window.onerror",{category:"error",metadata:{name:o.name,message:o.message,stack:o.stack}}),t.config.enableUncaught&&t.notify(o)}}
return function(t,i,s,o,a){return r(t,i,s,o,a),"function"==typeof n&&n.apply(e,arguments)}})}}}ue.ignoreNextOnError=_e,ue.onError=me
var be={}
Object.defineProperty(be,"__esModule",{value:!0})
var ye=i,we=ye.Util.instrument,ke=ye.Util.globalThisOrWindow
function Se(e){return void 0===e&&(e=ke()),{load:function(t){t.config.enableUnhandledRejection&&we(e,"onunhandledrejection",function(e){function n(e){var n
if(t.logger.debug("window.onunhandledrejection callback invoked",arguments),t.config.enableUnhandledRejection){var r=e.reason
if(r instanceof Error){var i="unknown",s=0,o="".concat(r.message,"\n    at ? (").concat(i,":").concat(s,")"),a=r.stack||o,l={name:r.name,message:"UnhandledPromiseRejectionWarning: ".concat(r),stack:a}
return t.addBreadcrumb("window.onunhandledrejection: ".concat(l.name),{category:"error",metadata:l}),void t.notify(l)}var c="string"==typeof r?r:null!==(n=JSON.stringify(r))&&void 0!==n?n:"Unspecified reason"
t.notify({name:"window.onunhandledrejection",message:"UnhandledPromiseRejectionWarning: ".concat(c)})}}return function(t){n(t),"function"==typeof e&&e.apply(this,arguments)}})}}}be.default=Se
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
var Oe=i,Re=Oe.Util.instrument,Ae=Oe.Util.globalThisOrWindow
function Fe(e){return void 0===e&&(e=Ae()),{load:function(t){!function(){function n(e){return function(n){return function(r,i){if("function"==typeof r){var s=Array.prototype.slice.call(arguments,2)
return r=t.__wrap(r,e),n(function(){r.apply(void 0,s)},i)}return n(r,i)}}}Re(e,"setTimeout",n({component:"setTimeout"})),Re(e,"setInterval",n({component:"setInterval"}))}()}}}Me.default=Fe
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
function Qe(e){return Object.entries(e)}var Je=function(){function e(e){void 0===e&&(e={}),this.headers={},this.headers=e}return e.prototype.defaultHeaders=function(){return this.headers},e.prototype.send=function(e,t){return Ue(this,void 0,void 0,function(){var n,r,i,s,o
return Ge(this,function(a){switch(a.label){case 0:return n=e.headers?Qe(e.headers):[],r=this.defaultHeaders(),n.forEach(function(e){var t=e[0],n=e[1]
null!=t&&null!=n&&(r[String(t)]=String(n))}),i={method:e.method,headers:r},"POST"===e.method&&t&&(i.body="string"==typeof t?t:JSON.stringify(ze(t,e.maxObjectDepth))),[4,Ve().fetch(e.endpoint,i)]
case 1:return[4,(s=a.sent()).text()]
case 2:return o=a.sent(),[2,Promise.resolve({statusCode:s.status,body:o})]}})})},e}()
He.BrowserTransport=Je
var Ke={},Ye=e&&e.__assign||function(){return Ye=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},Ye.apply(this,arguments)}
Object.defineProperty(Ke,"__esModule",{value:!0}),Ke.BrowserFeedbackForm=void 0
var Xe=i.Util.globalThisOrWindow,Ze=function(){function t(e,t,n){this.config=e,this.logger=t,this.scriptUrl=n}return t.prototype.appendUserFeedbackTag=function(t,n){void 0===n&&(n={})
var r=t.document.createElement("script")
r.setAttribute("src",this.scriptUrl),r.setAttribute("async","true"),n.onLoad&&(r.onload=n.onLoad),(e.document.head||e.document.body).appendChild(r)},t.prototype.isUserFeedbackUrlAlreadyVisible=function(){for(var e=Xe(),t=this.scriptUrl,n=0;n<e.document.scripts.length;n++)if(e.document.scripts[n].src===t)return!0
return!1},t.prototype.show=function(e,t){if(void 0===t&&(t={}),"function"==typeof this.appendUserFeedbackTag)if(this.config&&this.config.apiKey)if(e){var n=Xe()
void 0!==n.document?this.isUserFeedbackUrlAlreadyVisible()?this.logger.debug("User feedback form is already visible"):(n.honeybadgerUserFeedbackOptions=Ye(Ye({},t),{apiKey:this.config.apiKey,endpoint:this.config.userFeedbackEndpoint,noticeId:e}),this.appendUserFeedbackTag(n,t)):this.logger.debug("global.document is undefined. Cannot attach script")}else this.logger.debug("Can't show user feedback form without a notice already reported")
else this.logger.debug("Client not initialized")
else this.logger.debug("Feedback form is not available in this environment")},t}()
Ke.BrowserFeedbackForm=Ze,function(t){var n,r=e&&e.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
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
var c=i,u=Y,d=ue,f=l(be),h=l(xe),p=l(Me),g=l(je),v=He,_=Ke,m=c.Util.merge,b=c.Util.filter,y=c.Util.objectIsExtensible,w=c.Util.globalThisOrWindow,k=function(){var e=w(),t=""
return null!=e.location&&(t=e.location.protocol+"//"+e.location.host),t},S=function(e){var t=e.split(".").slice(0,2).join(".")
return"https://js.honeybadger.io/v".concat(t,"/honeybadger-feedback-form.js")}
t.getUserFeedbackScriptUrl=S
var x=function(e){function n(t){void 0===t&&(t={})
var n=e.call(this,s({userFeedbackEndpoint:"https://api.honeybadger.io/v2/feedback",async:!0,maxErrors:null,projectRoot:k()},t),new v.BrowserTransport({"User-Agent":C()}))||this
return n.__errorsSent=0,n.__lastWrapErr=void 0,n.__lastNoticeId=void 0,n.__beforeNotifyHandlers=[function(e){return n.__exceedsMaxErrors()?(n.logger.debug("Dropping notice: max errors exceeded",e),!1):(e&&!e.url&&"undefined"!=typeof document&&(e.url=document.URL),n.__incrementErrorsCount(),!0)}],n.__afterNotifyHandlers=[function(e,t){t&&(n.__lastNoticeId=t.id)}],n}return r(n,e),n.prototype.configure=function(t){return void 0===t&&(t={}),e.prototype.configure.call(this,t)},n.prototype.resetMaxErrors=function(){return this.__errorsSent=0},n.prototype.factory=function(e){var t=new n(e)
return t.setNotifier(this.getNotifier()),t},n.prototype.checkIn=function(e){throw new Error("Honeybadger.checkIn() is not supported on the browser")},n.prototype.showUserFeedbackForm=function(e){return void 0===e&&(e={}),o(this,void 0,void 0,function(){return a(this,function(t){return new _.BrowserFeedbackForm(this.config,this.logger,this.getUserFeedbackSubmitUrl()).show(this.__lastNoticeId,e),[2]})})},n.prototype.getUserFeedbackSubmitUrl=function(){return(0,t.getUserFeedbackScriptUrl)(this.getVersion())},n.prototype.__buildPayload=function(t){var n,r={HTTP_USER_AGENT:void 0,HTTP_REFERER:void 0,HTTP_COOKIE:void 0}
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
return et}()),Ac.exports),jc=Oc(Fc)
const Nc=["attackplayer.min.js","Auction-House-Monitor.user.js","Cocaine.user.js","Compra-%2526-Venda-de-Recursos-%25E2%259C%2585.user.js","cross-origin frame","Daily-Quest-Auto-Hunter-All-Creatures-%252B-SE-Searcher-Movement.user.js","Discord-Message-Checks-for-Updates.user.js","dynamically imported module","Fallen-Sword-Auto-Invent.user.js","Fallen-Sword-Auto-Skill-Caster.user.js","Fallen-Sword-Champion-and-Super-Elite-Alert.user.js","Fallen-Sword-Message-Alert.user.js","Fallen-Sword-Super-Elite-%2526-Crate-Notifier.user.js","Fallen-Sword-Super-Elite-Notifier.user.js","Fallen-Sword-Win%252FLoss-Checker-with-Buffs-and-Buff-Levels.user.js","Fallen-Sword-Win%252FLoss-Checker.user.js","Fallensword-GvG-Target-Checker-with-Button-and-Buff-Check.user.js","Fetch-Auction-and-Send-to-Discord.user.js","FS-%E2%80%93-Auto-Explore-visible-per-step-movement","FS-%E2%80%93-Inline-Combat-Sets-Fast%2C-Correct-CSS-on-Tournament-Page.user.js","FS-Fixer.user.js","fs.min.js","FSH1.user.js","Gold-alert.user.js","GVG-and-Relics-Notifications.user.js","GvG-Initiate-Enhanced.user.js","GvG-List-v2.user.js","GvG-Name-Only.user.js","GVG%252FRelics-Discord.user.js","GVG%252FRelics-Notifications.user.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","League-of-Legends.user.js","MetaMask","New-Userscript.user.js","News.user.js","openuserjs.org","out of memory","Permission denied to access object","play method is not allowed","Quick-Kill.user.js","SE-Searcher-Replay-Fix.user.js","se-searcher-v2-draft.user.js","Superelite-searcher.user.js","Titan-3.0.user.js","Titan-Quick-Kill.user.js","UFSG-dodatki.user.js","UnhandledPromiseRejectionWarning: 404","world.min.js","(reading '$$')"],Dc=e=>kc(e)&&Nc.some(t=>e.includes(t))
function Bc(e){if(Dc(e.message)||Dc(e.stack))return!1}function qc(){!function(){jc.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.157"})
const e=s()
e&&jc.setContext({user_id:e}),jc.afterNotify(e=>{if(e)return aa(`Honeybadger notification failed: ${e}`)}),jc.beforeNotify(Bc)}()}function Hc(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class Uc extends Error{constructor([e,t,n,r],...i){super(function(e,t,n,r){const i=`${t.status} ${t.statusText} - `
if(t.statusText===r.toString())return i+Hc(e)
const s=`${i+n} ${r} - ${Hc(e)}`
return"parsererror"===n?`${s} - ${t.responseText}`:s}(e,t,n,r),...i),Error.captureStackTrace&&Error.captureStackTrace(this,Uc),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=r}}function Gc(e,t,n,r){e instanceof EventTarget&&e.addEventListener(t,n,r)}function Wc(e,t,n){return JSON.stringify(e,t,n)}function zc(e){yc("betaOptIn")&&aa("sendException",e),jc.notify(e,"sendException")}var Vc={}
function Qc(e){return Array.isArray(e)}function Jc(e,t){return e||t}const Kc=[null]
function Yc(e,t){return Kc[e]&&Kc[e].priority<Kc[t].priority}function Xc(e,t){const n=Kc[e]
Kc[e]=Kc[t],Kc[t]=n}function Zc(e,t){return e?2*t:2*t+1}function eu(){if(1===Kc.length)return
const e=Kc[1].data,t=Kc.pop()
return Kc.length>1&&(Kc[1]=t,function(e){let t=e
for(;2*t<Kc.length;){const e=Zc(!Yc(2*t+1,2*t),t)
if(Yc(t,e))break
Xc(t,e),t=e}}(1)),e}function tu(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!Yc(t,e))break
Xc(t,e),t=e}}(Kc.push({data:e,priority:t})-1)}let nu=!0
const ru="fshMessage"
let iu=0
function su(){Kc.length-1==0?nu=!0:(nu=!1,window.postMessage(ru,window.location.origin))}function ou(){const e=eu()
Tc(e)?e():function(e){Ta(e)||zc(`pop() was not a function (${typeof e})`)}(e)}function au(e){const t=e.data
e.origin===window.location.origin&&t===ru&&function(){try{ou()}catch(e){jc.notify(e,"taskFailure")}finally{su()}}()}function lu(e,t,n,r){if(Tc(t)){iu||(Gc(window,"message",au),iu=!0)
const i=Jc(r,window),s=Jc(n,[])
tu(t.bind(i,...s),e),nu&&su()}}function cu(e,t){return new URLSearchParams(e).get(t)}function uu(e){try{return cu(decodeURIComponent(window.location.search),e)}catch(e){return aa(e),""}}var du=!1,fu=Array.isArray,hu=Array.prototype.indexOf,pu=Array.from,gu=Object.defineProperty,vu=Object.getOwnPropertyDescriptor,_u=Object.getOwnPropertyDescriptors,mu=Object.prototype,bu=Array.prototype,yu=Object.getPrototypeOf,wu=Object.isExtensible
function ku(e){return"function"==typeof e}const Su=()=>{}
function xu(e){return e()}function Eu(e){for(var t=0;t<e.length;t++)e[t]()}function Cu(e,t){if(Array.isArray(e))return e
if(void 0===t||!(Symbol.iterator in e))return Array.from(e)
const n=[]
for(const r of e)if(n.push(r),n.length===t)break
return n}const Tu=16,Pu=32,$u=64,Lu=256,Iu=512,Mu=1024,Ou=2048,Ru=4096,Au=8192,Fu=16384,ju=32768,Nu=65536,Du=1<<17,Bu=1<<19,qu=1<<21,Hu=1<<22,Uu=1<<23,Gu=Symbol("$state"),Wu=Symbol("legacy props"),zu=Symbol(""),Vu=new class extends Error{name="StaleReactionError"
message="The reaction that called `getAbortSignal()` was re-run or destroyed"}
function Qu(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Ju=Symbol()
function Ku(e){return e===this.v}function Yu(e,t){return e!=e?t==t:e!==t||null!==e&&"object"==typeof e||"function"==typeof e}function Xu(e){return!Yu(e,this.v)}let Zu=!1
const ed=[]
function td(e,t=!1,n=!1){return nd(e,new Map,"",ed,null,n)}function nd(e,t,n,r,i=null,s=!1){if("object"==typeof e&&null!==e){var o=t.get(e)
if(void 0!==o)return o
if(e instanceof Map)return new Map(e)
if(e instanceof Set)return new Set(e)
if(fu(e)){var a=Array(e.length)
t.set(e,a),null!==i&&t.set(i,a)
for(var l=0;l<e.length;l+=1){var c=e[l]
l in e&&(a[l]=nd(c,t,n,r,null,s))}return a}if(yu(e)===mu){for(var u in a={},t.set(e,a),null!==i&&t.set(i,a),e)a[u]=nd(e[u],t,n,r,null,s)
return a}if(e instanceof Date)return structuredClone(e)
if("function"==typeof e.toJSON&&!s)return nd(e.toJSON(),t,n,r,e)}if(e instanceof EventTarget)return e
try{return structuredClone(e)}catch(t){return e}}let rd=null
function id(e){rd=e}function sd(e,t=!1,n){rd={p:rd,c:null,e:null,s:e,x:null,l:Zu&&!t?{s:null,u:null,$:[]}:null}}function od(e){var t=rd,n=t.e
if(null!==n)for(var r of(t.e=null,n))mf(r)
return void 0!==e&&(t.x=e),rd=t.p,e??{}}function ad(){return!Zu||null!==rd&&null===rd.l}const ld=new WeakMap
function cd(e,t){for(;null!==t;){if(128&t.f)try{return void t.b.error(e)}catch(t){e=t}t=t.parent}throw e instanceof Error&&ud(e),e}function ud(e){const t=ld.get(e)
t&&(gu(e,"message",{value:t.message}),gu(e,"stack",{value:t.stack}))}let dd=[],fd=[]
function hd(){var e=dd
dd=[],Eu(e)}function pd(e){0===dd.length&&queueMicrotask(hd),dd.push(e)}function gd(){dd.length>0&&hd(),fd.length>0&&function(){var e=fd
fd=[],Eu(e)}()}function vd(){for(var e=qf.b;null!==e&&!e.has_pending_snippet();)e=e.parent
return null===e&&function(){throw new Error("https://svelte.dev/e/await_outside_boundary")}(),e}function _d(e){var t=2050,n=null!==Nf&&2&Nf.f?Nf:null
null===qf||null!==n&&0!==(n.f&Lu)?t|=Lu:qf.f|=Bu
return{ctx:rd,deps:null,effects:null,equals:Ku,f:t,fn:e,reactions:null,rv:0,v:Ju,wv:0,parent:n??qf,ac:null}}function md(e,t){let n=qf
null===n&&function(){throw new Error("https://svelte.dev/e/async_derived_orphan")}()
var r=n.b,i=void 0,s=Gd(Ju),o=null,a=!Nf
return function(e){gf(4718592,e,!0)}(()=>{try{var t=e()
o&&Promise.resolve(t).catch(()=>{})}catch(e){t=Promise.reject(e)}var n=()=>t
i=o?.then(n,n)??Promise.resolve(t),o=i
var l=Td,c=r.pending
a&&(r.update_pending_count(1),c||l.increment())
const u=(e,t=void 0)=>{o=null,c||l.activate(),t?t!==Vu&&(s.f|=Uu,Qd(s,t)):(0!==(s.f&Uu)&&(s.f^=Uu),Qd(s,e)),a&&(r.update_pending_count(-1),c||l.decrement()),Ed()}
if(i.then(u,e=>u(null,e||"unknown")),l)return()=>{queueMicrotask(()=>l.neuter())}}),new Promise(e=>{!function t(n){function r(){n===i?e(s):t(i)}n.then(r,r)}(i)})}function bd(e){const t=_d(e)
return Gf(t),t}function yd(e){const t=_d(e)
return t.equals=Xu,t}function wd(e){var t=e.effects
if(null!==t){e.effects=null
for(var n=0;n<t.length;n+=1)Cf(t[n])}}function kd(e){var t,n=qf
Hf(function(e){for(var t=e.parent;null!==t;){if(!(2&t.f))return t
t=t.parent}return null}(e))
try{wd(e),t=nh(e)}finally{Hf(n)}return t}function Sd(e){var t=kd(e);(e.equals(t)||(e.v=t,e.wv=Zf()),Ff)||dh(e,!Xf&&0===(e.f&Lu)||null===e.deps?Mu:Ru)}function xd(e,t,n){const r=ad()?_d:yd
if(0!==t.length){var i=Td,s=qf,o=function(){var e=qf,t=Nf,n=rd,r=Td
return function(){Hf(e),Bf(t),id(n),r?.activate()}}(),a=vd()
Promise.all(t.map(e=>md(e))).then(t=>{i?.activate(),o()
try{n([...e.map(r),...t])}catch(e){0===(s.f&Fu)&&cd(e,s)}i?.deactivate(),Ed()}).catch(e=>{a.error(e)})}else n(e.map(r))}function Ed(){Hf(null),Bf(null),id(null)}const Cd=new Set
let Td=null,Pd=null,$d=new Set,Ld=[]
function Id(){const e=Ld.shift()
Ld.length>0&&queueMicrotask(Id),e()}let Md=[],Od=null,Rd=!1,Ad=!1
class Fd{current=new Map
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
process(e){Md=[],Pd=null
for(const t of e)this.#f(t)
if(0===this.#s.length&&0===this.#n){this.#h()
var t=this.#a,n=this.#l
this.#a=[],this.#l=[],this.#c=[],Pd=Td,Td=null,qd(t),qd(n),null===Td?Td=this:Cd.delete(this),this.#r?.resolve()}else this.#p(this.#a),this.#p(this.#l),this.#p(this.#c)
for(const e of this.#s)sh(e)
for(const e of this.#o)sh(e)
this.#s=[],this.#o=[]}#f(e){e.f^=Mu
for(var t=e.first;null!==t;){var n=t.f,r=!!(96&n)
if(!(r&&0!==(n&Mu)||0!==(n&Au)||this.skipped_effects.has(t))&&null!==t.fn){if(r)t.f^=Mu
else if(4&n)this.#l.push(t)
else if(0===(n&Mu)){if(0!==(n&Hu))(t.b?.pending?this.#o:this.#s).push(t)
else eh(t)&&(0!==(t.f&Tu)&&this.#c.push(t),sh(t))}var i=t.first
if(null!==i){t=i
continue}}var s=t.parent
for(t=t.next;null===t&&null!==s;)t=s.next,s=s.parent}}#p(e){for(const t of e){(0!==(t.f&Ou)?this.#u:this.#d).push(t),dh(t,Mu)}e.length=0}capture(e,t){this.#e.has(e)||this.#e.set(e,t),this.current.set(e,e.v)}activate(){Td=this}deactivate(){Td=null,Pd=null
for(const e of $d)if($d.delete(e),e(),null!==Td)break}neuter(){this.#i=!0}flush(){Md.length>0?Nd():this.#h(),Td===this&&(0===this.#n&&Cd.delete(this),this.deactivate())}#h(){if(!this.#i)for(const e of this.#t)e()
this.#t.clear()}increment(){this.#n+=1}decrement(){if(this.#n-=1,0===this.#n){for(const e of this.#u)dh(e,Ou),Hd(e)
for(const e of this.#d)dh(e,Ru),Hd(e)
this.#a=[],this.#l=[],this.flush()}else this.deactivate()}add_callback(e){this.#t.add(e)}settled(){return(this.#r??={promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}).promise
var e,t}static ensure(){if(null===Td){const e=Td=new Fd
Cd.add(Td),Ad||Fd.enqueue(()=>{Td===e&&e.flush()})}return Td}static enqueue(e){0===Ld.length&&queueMicrotask(Id),Ld.unshift(e)}}function jd(e){var t=Ad
Ad=!0
try{for(;;){if(gd(),0===Md.length&&(Td?.flush(),0===Md.length))return void(Od=null)
Nd()}}finally{Ad=t}}function Nd(){var e=Rf
Rd=!0
try{var t=0
for(Af(!0);Md.length>0;){var n=Fd.ensure()
if(t++>1e3)du,Dd()
n.process(Md),Ud.clear()}}finally{Rd=!1,Af(e),Od=null}}function Dd(){try{!function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}()}catch(e){cd(e,Od)}}let Bd=null
function qd(e){var t=e.length
if(0!==t){for(var n=0;n<t;){var r=e[n++]
if(!(24576&r.f)&&eh(r)&&(Bd=[],sh(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown&&null===r.ac?Pf(r):r.fn=null),Bd?.length>0)){Ud.clear()
for(const e of Bd)sh(e)
Bd=[]}}Bd=null}}function Hd(e){for(var t=Od=e;null!==t.parent;){var n=(t=t.parent).f
if(Rd&&t===qf&&0!==(n&Tu))return
if(96&n){if(0===(n&Mu))return
t.f^=Mu}}Md.push(t)}const Ud=new Map
function Gd(e,t){return{f:0,v:e,reactions:null,equals:Ku,rv:0,wv:0}}function Wd(e,t){const n=Gd(e)
return Gf(n),n}function zd(e,t=!1,n=!0){const r=Gd(e)
return t||(r.equals=Xu),Zu&&n&&null!==rd&&null!==rd.l&&(rd.l.s??=[]).push(r),r}function Vd(e,t,n=!1){return null!==Nf&&(!Df||0!==(Nf.f&Du))&&ad()&&4325394&Nf.f&&!Uf?.includes(e)&&function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),Qd(e,n?Yd(t):t)}function Qd(e,t){if(!e.equals(t)){var n=e.v
Ff?Ud.set(e,t):Ud.set(e,n),e.v=t,Fd.ensure().capture(e,n),2&e.f&&(0!==(e.f&Ou)&&kd(e),dh(e,0===(e.f&Lu)?Mu:Ru)),e.wv=Zf(),Kd(e,Ou),!ad()||null===qf||0===(qf.f&Mu)||96&qf.f||(null===Vf?function(e){Vf=e}([e]):Vf.push(e))}return t}function Jd(e){Vd(e,e.v+1)}function Kd(e,t){var n=e.reactions
if(null!==n)for(var r=ad(),i=n.length,s=0;s<i;s++){var o=n[s],a=o.f
if(r||o!==qf){var l=0===(a&Ou)
l&&dh(o,t),2&a?Kd(o,Ru):l&&(0!==(a&Tu)&&null!==Bd&&Bd.push(o),Hd(o))}}}function Yd(e){if("object"!=typeof e||null===e||Gu in e)return e
const t=yu(e)
if(t!==mu&&t!==bu)return e
var n=new Map,r=fu(e),i=Wd(0),s=Kf,o=e=>{if(Kf===s)return e()
var t=Nf,n=Kf
Bf(null),Yf(s)
var r=e()
return Bf(t),Yf(n),r}
return r&&n.set("length",Wd(e.length)),new Proxy(e,{defineProperty(e,t,r){"value"in r&&!1!==r.configurable&&!1!==r.enumerable&&!1!==r.writable||function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}()
var i=n.get(t)
return void 0===i?i=o(()=>{var e=Wd(r.value)
return n.set(t,e),e}):Vd(i,r.value,!0),!0},deleteProperty(e,t){var r=n.get(t)
if(void 0===r){if(t in e){const e=o(()=>Wd(Ju))
n.set(t,e),Jd(i)}}else Vd(r,Ju),Jd(i)
return!0},get(t,r,i){if(r===Gu)return e
var s=n.get(r),a=r in t
if(void 0!==s||a&&!vu(t,r)?.writable||(s=o(()=>Wd(Yd(a?t[r]:Ju))),n.set(r,s)),void 0!==s){var l=ah(s)
return l===Ju?void 0:l}return Reflect.get(t,r,i)},getOwnPropertyDescriptor(e,t){var r=Reflect.getOwnPropertyDescriptor(e,t)
if(r&&"value"in r){var i=n.get(t)
i&&(r.value=ah(i))}else if(void 0===r){var s=n.get(t),o=s?.v
if(void 0!==s&&o!==Ju)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return r},has(e,t){if(t===Gu)return!0
var r=n.get(t),i=void 0!==r&&r.v!==Ju||Reflect.has(e,t)
if((void 0!==r||null!==qf&&(!i||vu(e,t)?.writable))&&(void 0===r&&(r=o(()=>Wd(i?Yd(e[t]):Ju)),n.set(t,r)),ah(r)===Ju))return!1
return i},set(e,t,s,a){var l=n.get(t),c=t in e
if(r&&"length"===t)for(var u=s;u<l.v;u+=1){var d=n.get(u+"")
void 0!==d?Vd(d,Ju):u in e&&(d=o(()=>Wd(Ju)),n.set(u+"",d))}void 0===l?c&&!vu(e,t)?.writable||(Vd(l=o(()=>Wd(void 0)),Yd(s)),n.set(t,l)):(c=l.v!==Ju,Vd(l,o(()=>Yd(s))))
var f=Reflect.getOwnPropertyDescriptor(e,t)
if(f?.set&&f.set.call(a,s),!c){if(r&&"string"==typeof t){var h=n.get("length"),p=Number(t)
Number.isInteger(p)&&p>=h.v&&Vd(h,p+1)}Jd(i)}return!0},ownKeys(e){ah(i)
var t=Reflect.ownKeys(e).filter(e=>{var t=n.get(e)
return void 0===t||t.v!==Ju})
for(var[r,s]of n)s.v===Ju||r in e||t.push(r)
return t},setPrototypeOf(){!function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}()}})}function Xd(e){try{if(null!==e&&"object"==typeof e&&Gu in e)return e[Gu]}catch{}return e}function Zd(e,t){return Object.is(Xd(e),Xd(t))}var ef,tf,nf,rf
function sf(e=""){return document.createTextNode(e)}function of(e){return nf.call(e)}function af(e){return rf.call(e)}function lf(e,t){return of(e)}function cf(e,t){var n=of(e)
return n instanceof Comment&&""===n.data?af(n):n}function uf(e,t=1,n=!1){let r=e
for(;t--;)r=af(r)
return r}let df=!1
function ff(e){var t=Nf,n=qf
Bf(null),Hf(null)
try{return e()}finally{Bf(t),Hf(n)}}function hf(e,t,n,r=n){e.addEventListener(t,()=>ff(n))
const i=e.__on_r
e.__on_r=i?()=>{i(),r(!0)}:()=>r(!0),df||(df=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function pf(e){null===qf&&null===Nf&&function(){throw new Error("https://svelte.dev/e/effect_orphan")}(),null!==Nf&&0!==(Nf.f&Lu)&&null===qf&&function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}(),Ff&&function(){throw new Error("https://svelte.dev/e/effect_in_teardown")}()}function gf(e,t,n,r=!0){var i=qf
null!==i&&0!==(i.f&Au)&&(e|=Au)
var s={ctx:rd,deps:null,nodes_start:null,nodes_end:null,f:e|Ou,first:null,fn:t,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,transitions:null,wv:0,ac:null}
if(n)try{sh(s),s.f|=ju}catch(o){throw Cf(s),o}else null!==t&&Hd(s)
if(r){var o=s
if(n&&null===o.deps&&null===o.teardown&&null===o.nodes_start&&o.first===o.last&&0===(o.f&Bu)&&(o=o.first),null!==o&&(o.parent=i,null!==i&&function(e,t){var n=t.last
null===n?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}(o,i),null!==Nf&&2&Nf.f&&0===(e&$u))){var a=Nf;(a.effects??=[]).push(o)}}return s}function vf(e){const t=gf(8,null,!1)
return dh(t,Mu),t.teardown=e,t}function _f(e){pf()
var t=qf.f
if(!(!Nf&&0!==(t&Pu)&&0===(t&ju)))return mf(e)
var n=rd;(n.e??=[]).push(e)}function mf(e){return gf(1048580,e,!1)}function bf(e){return gf(4,e,!1)}function yf(e,t=0){return gf(8|t,e,!0)}function wf(e,t=[],n=[]){xd(t,n,t=>{gf(8,()=>e(...t.map(ah)),!0)})}function kf(e,t=0){return gf(Tu|t,e,!0)}function Sf(e,t=!0){return gf(524320,e,!0,t)}function xf(e){var t=e.teardown
if(null!==t){const e=Ff,n=Nf
jf(!0),Bf(null)
try{t.call(null)}finally{jf(e),Bf(n)}}}function Ef(e,t=!1){var n=e.first
for(e.first=e.last=null;null!==n;){const e=n.ac
null!==e&&ff(()=>{e.abort(Vu)})
var r=n.next
0!==(n.f&$u)?n.parent=null:Cf(n,t),n=r}}function Cf(e,t=!0){var n=!1;(t||262144&e.f)&&null!==e.nodes_start&&null!==e.nodes_end&&(Tf(e.nodes_start,e.nodes_end),n=!0),Ef(e,t&&!n),ih(e,0),dh(e,Fu)
var r=e.transitions
if(null!==r)for(const e of r)e.stop()
xf(e)
var i=e.parent
null!==i&&null!==i.first&&Pf(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Tf(e,t){for(;null!==e;){var n=e===t?null:af(e)
e.remove(),e=n}}function Pf(e){var t=e.parent,n=e.prev,r=e.next
null!==n&&(n.next=r),null!==r&&(r.prev=n),null!==t&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function $f(e,t){var n=[]
If(e,n,!0),Lf(n,()=>{Cf(e),t&&t()})}function Lf(e,t){var n=e.length
if(n>0){var r=()=>--n||t()
for(var i of e)i.out(r)}else t()}function If(e,t,n){if(0===(e.f&Au)){if(e.f^=Au,null!==e.transitions)for(const r of e.transitions)(r.is_global||n)&&t.push(r)
for(var r=e.first;null!==r;){var i=r.next
If(r,t,!!(0!==(r.f&Nu)||0!==(r.f&Pu))&&n),r=i}}}function Mf(e){Of(e,!0)}function Of(e,t){if(0!==(e.f&Au)){e.f^=Au,0===(e.f&Mu)&&(dh(e,Ou),Hd(e))
for(var n=e.first;null!==n;){var r=n.next
Of(n,!!(0!==(n.f&Nu)||0!==(n.f&Pu))&&t),n=r}if(null!==e.transitions)for(const n of e.transitions)(n.is_global||t)&&n.in()}}let Rf=!1
function Af(e){Rf=e}let Ff=!1
function jf(e){Ff=e}let Nf=null,Df=!1
function Bf(e){Nf=e}let qf=null
function Hf(e){qf=e}let Uf=null
function Gf(e){null!==Nf&&(null===Uf?Uf=[e]:Uf.push(e))}let Wf=null,zf=0,Vf=null
let Qf=1,Jf=0,Kf=Jf
function Yf(e){Kf=e}let Xf=!1
function Zf(){return++Qf}function eh(e){var t=e.f
if(0!==(t&Ou))return!0
if(0!==(t&Ru)){var n=e.deps,r=0!==(t&Lu)
if(null!==n){var i,s,o=0!==(t&Iu),a=r&&null!==qf&&!Xf,l=n.length
if((o||a)&&(null===qf||0===(qf.f&Fu))){var c=e,u=c.parent
for(i=0;i<l;i++)s=n[i],!o&&s?.reactions?.includes(c)||(s.reactions??=[]).push(c)
o&&(c.f^=Iu),a&&null!==u&&0===(u.f&Lu)&&(c.f^=Lu)}for(i=0;i<l;i++)if(eh(s=n[i])&&Sd(s),s.wv>e.wv)return!0}r&&(null===qf||Xf)||dh(e,Mu)}return!1}function th(e,t,n=!0){var r=e.reactions
if(null!==r&&!Uf?.includes(e))for(var i=0;i<r.length;i++){var s=r[i]
2&s.f?th(s,t,!1):t===s&&(n?dh(s,Ou):0!==(s.f&Mu)&&dh(s,Ru),Hd(s))}}function nh(e){var t=Wf,n=zf,r=Vf,i=Nf,s=Xf,o=Uf,a=rd,l=Df,c=Kf,u=e.f
Wf=null,zf=0,Vf=null,Xf=0!==(u&Lu)&&(Df||!Rf||null===Nf),Nf=96&u?null:e,Uf=null,id(e.ctx),Df=!1,Kf=++Jf,null!==e.ac&&(ff(()=>{e.ac.abort(Vu)}),e.ac=null)
try{e.f|=qu
var d=(0,e.fn)(),f=e.deps
if(null!==Wf){var h
if(ih(e,zf),null!==f&&zf>0)for(f.length=zf+Wf.length,h=0;h<Wf.length;h++)f[zf+h]=Wf[h]
else e.deps=f=Wf
if(!Xf||2&u&&null!==e.reactions)for(h=zf;h<f.length;h++)(f[h].reactions??=[]).push(e)}else null!==f&&zf<f.length&&(ih(e,zf),f.length=zf)
if(ad()&&null!==Vf&&!Df&&null!==f&&!(6146&e.f))for(h=0;h<Vf.length;h++)th(Vf[h],e)
return null!==i&&i!==e&&(Jf++,null!==Vf&&(null===r?r=Vf:r.push(...Vf))),0!==(e.f&Uu)&&(e.f^=Uu),d}catch(e){return function(e){var t=qf
if(null===t)return Nf.f|=Uu,e
if(0===(t.f&ju)){if(!(128&t.f))throw!t.parent&&e instanceof Error&&ud(e),e
t.b.error(e)}else cd(e,t)}(e)}finally{e.f^=qu,Wf=t,zf=n,Vf=r,Nf=i,Xf=s,Uf=o,id(a),Df=l,Kf=c}}function rh(e,t){let n=t.reactions
if(null!==n){var r=hu.call(n,e)
if(-1!==r){var i=n.length-1
0===i?n=t.reactions=null:(n[r]=n[i],n.pop())}}null===n&&2&t.f&&(null===Wf||!Wf.includes(t))&&(dh(t,Ru),768&t.f||(t.f^=Iu),wd(t),ih(t,0))}function ih(e,t){var n=e.deps
if(null!==n)for(var r=t;r<n.length;r++)rh(e,n[r])}function sh(e){var t=e.f
if(0===(t&Fu)){dh(e,Mu)
var n=qf,r=Rf
qf=e,Rf=!0
try{0!==(t&Tu)?function(e){for(var t=e.first;null!==t;){var n=t.next
0===(t.f&Pu)&&Cf(t),t=n}}(e):Ef(e),xf(e)
var i=nh(e)
e.teardown="function"==typeof i?i:null,e.wv=Qf}finally{Rf=r,qf=n}}}async function oh(){await Promise.resolve(),jd()}function ah(e){var t=!!(2&e.f)
if(null===Nf||Df){if(t&&null===e.deps&&null===e.effects){var n=e,r=n.parent
null!==r&&0===(r.f&Lu)&&(n.f^=Lu)}}else if(!(null!==qf&&0!==(qf.f&Fu))&&!Uf?.includes(e)){var i=Nf.deps
if(0!==(Nf.f&qu))e.rv<Jf&&(e.rv=Jf,null===Wf&&null!==i&&i[zf]===e?zf++:null===Wf?Wf=[e]:Xf&&Wf.includes(e)||Wf.push(e))
else{(Nf.deps??=[]).push(e)
var s=e.reactions
null===s?e.reactions=[Nf]:s.includes(Nf)||s.push(Nf)}}if(Ff){if(Ud.has(e))return Ud.get(e)
if(t){var o=(n=e).v
return(0===(n.f&Mu)&&null!==n.reactions||lh(n))&&(o=kd(n)),Ud.set(n,o),o}}else t&&eh(n=e)&&Sd(n)
if(0!==(e.f&Uu))throw e.v
return e.v}function lh(e){if(e.v===Ju)return!0
if(null===e.deps)return!1
for(const t of e.deps){if(Ud.has(t))return!0
if(2&t.f&&lh(t))return!0}return!1}function ch(e){var t=Df
try{return Df=!0,e()}finally{Df=t}}const uh=-7169
function dh(e,t){e.f=e.f&uh|t}function fh(e,t=new Set){if(!("object"!=typeof e||null===e||e instanceof EventTarget||t.has(e))){t.add(e),e instanceof Date&&e.getTime()
for(let n in e)try{fh(e[n],t)}catch(e){}const n=yu(e)
if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const t=_u(n)
for(let n in t){const r=t[n].get
if(r)try{r.call(e)}catch(e){}}}}}const hh=["touchstart","touchmove"]
function ph(e){return hh.includes(e)}const gh=new Set,vh=new Set
function _h(e,t,n,r,i){var s={capture:r,passive:i},o=function(e,t,n,r={}){function i(e){if(r.capture||yh.call(t,e),!e.cancelBubble)return ff(()=>n?.call(this,e))}return e.startsWith("pointer")||e.startsWith("touch")||"wheel"===e?pd(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}(e,t,n,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&vf(()=>{t.removeEventListener(e,o,s)})}function mh(e){for(var t=0;t<e.length;t++)gh.add(e[t])
for(var n of vh)n(e)}let bh=null
function yh(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],s=i[0]||e.target
bh=e
var o=0,a=bh===e&&e.__root
if(a){var l=i.indexOf(a)
if(-1!==l&&(t===document||t===window))return void(e.__root=t)
var c=i.indexOf(t)
if(-1===c)return
l<=c&&(o=l)}if((s=i[o]||e.target)!==t){gu(e,"currentTarget",{configurable:!0,get:()=>s||n})
var u=Nf,d=qf
Bf(null),Hf(null)
try{for(var f,h=[];null!==s;){var p=s.assignedSlot||s.parentNode||s.host||null
try{var g=s["__"+r]
if(null!=g&&(!s.disabled||e.target===s))if(fu(g)){var[v,..._]=g
v.apply(s,[e,..._])}else g.call(s,e)}catch(e){f?h.push(e):f=e}if(e.cancelBubble||p===t||null===p)break
s=p}if(f){for(let e of h)queueMicrotask(()=>{throw e})
throw f}}finally{e.__root=t,delete e.currentTarget,Bf(u),Hf(d)}}}function wh(e){var t=document.createElement("template")
return t.innerHTML=e.replaceAll("<!>","\x3c!----\x3e"),t.content}function kh(e,t){var n=qf
null===n.nodes_start&&(n.nodes_start=e,n.nodes_end=t)}function Sh(e,t){var n,r=!!(1&t),i=!!(2&t),s=!e.startsWith("<!>")
return()=>{void 0===n&&(n=wh(s?e:"<!>"+e),r||(n=of(n)))
var t=i||tf?document.importNode(n,!0):n.cloneNode(!0)
r?kh(of(t),t.lastChild):kh(t,t)
return t}}function xh(e=""){var t=sf(e+"")
return kh(t,t),t}function Eh(){var e=document.createDocumentFragment(),t=document.createComment(""),n=sf()
return e.append(t,n),kh(t,n),e}function Ch(e,t){null!==e&&e.before(t)}let Th=!0
function Ph(e,t){var n=null==t?"":"object"==typeof t?t+"":t
n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}function $h(e,t){return function(e,{target:t,anchor:n,props:r={},events:i,context:s,intro:o=!0}){!function(){if(void 0===ef){ef=window,tf=/Firefox/.test(navigator.userAgent)
var e=Element.prototype,t=Node.prototype,n=Text.prototype
nf=vu(t,"firstChild").get,rf=vu(t,"nextSibling").get,wu(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),wu(n)&&(n.__t=void 0)}}()
var a=new Set,l=e=>{for(var n=0;n<e.length;n++){var r=e[n]
if(!a.has(r)){a.add(r)
var i=ph(r)
t.addEventListener(r,yh,{passive:i})
var s=Lh.get(r)
void 0===s?(document.addEventListener(r,yh,{passive:i}),Lh.set(r,1)):Lh.set(r,s+1)}}}
l(pu(gh)),vh.add(l)
var c=void 0,u=function(e){Fd.ensure()
const t=gf(524352,e,!0)
return(e={})=>new Promise(n=>{e.outro?$f(t,()=>{Cf(t),n(void 0)}):(Cf(t),n(void 0))})}(()=>{var u=n??t.appendChild(sf())
return Sf(()=>{s&&(sd({}),rd.c=s)
i&&(r.$$events=i),Th=o,c=e(u,r)||{},Th=!0,s&&od()}),()=>{for(var e of a){t.removeEventListener(e,yh)
var r=Lh.get(e)
0===--r?(document.removeEventListener(e,yh),Lh.delete(e)):Lh.set(e,r)}vh.delete(l),u!==n&&u.parentNode?.removeChild(u)}})
return Ih.set(c,u),c}(e,t)}const Lh=new Map
let Ih=new WeakMap
function Mh(e,t){const n=Ih.get(e)
return n?(Ih.delete(e),n(t)):Promise.resolve()}function Oh(e,t,n,r,i){var s,o,a,l=e,c=ad(),u=rd,d=Ju,f=c?Gd(void 0):zd(void 0,!1,!1),h=c?Gd(void 0):zd(void 0,!1,!1),p=!1
function g(e,t){p=!0,t&&(Hf(v),Bf(v),id(u))
try{0===e&&n&&(s?Mf(s):s=Sf(()=>n(l))),1===e&&r&&(o?Mf(o):o=Sf(()=>r(l,f))),2===e&&i&&(a?Mf(a):a=Sf(()=>i(l,h))),0!==e&&s&&$f(s,()=>s=null),1!==e&&o&&$f(o,()=>o=null),2!==e&&a&&$f(a,()=>a=null)}finally{t&&(id(null),Bf(null),Hf(null),jd())}}var v=kf(()=>{if(d!==(d=t())){if(n=d,"function"==typeof n?.then){var e=d
p=!1,e.then(t=>{e===d&&(Qd(f,t),g(1,!0))},t=>{if(e===d&&(Qd(h,t),g(2,!0),!i))throw h.v}),pd(()=>{p||g(0,!0)})}else Qd(f,d),g(1,!1)
var n
return()=>d=Ju}})}function Rh(e,t,n=!1){var r=e,i=null,s=null,o=Ju,a=!1
const l=(e,t=!0)=>{a=!0,d(t,e)}
var c=null
function u(){null!==c&&(c.lastChild.remove(),r.before(c),c=null)
var e=o?i:s,t=o?s:i
e&&Mf(e),t&&$f(t,()=>{o?s=null:i=null})}const d=(e,t)=>{if(o!==(o=e)){var n=!1,a=r
n,o?i??=t&&Sf(()=>t(a)):s??=t&&Sf(()=>t(a)),u()}}
kf(()=>{a=!1,t(l),a||d(null,null)},n?Nu:0)}function Ah(e,t){yf(()=>{var n=t()
for(var r in n){var i=n[r]
i?e.style.setProperty(r,i):e.style.removeProperty(r)}})}function Fh(e,t){return t}function jh(e,t,n,r,i,s=null){var o=e,a={flags:t,items:new Map,first:null}
!(4&t)||(o=e.appendChild(sf()))
var l,c,u=null,d=!1,f=new Map,h=yd(()=>{var e=n()
return fu(e)?e:null==e?[]:pu(e)})
function p(){!function(e,t,n,r,i,s,o,a,l){var c,u,d,f,h,p,g=!!(8&o),v=!!(3&o),_=t.length,m=n.items,b=n.first,y=b,w=null,k=[],S=[]
if(g)for(p=0;p<_;p+=1)f=a(d=t[p],p),void 0!==(h=m.get(f))&&(h.a?.measure(),(u??=new Set).add(h))
for(p=0;p<_;p+=1)if(f=a(d=t[p],p),void 0!==(h=m.get(f))){if(v&&Nh(h,d,p,o),0!==(h.e.f&Au)&&(Mf(h.e),g&&(h.a?.unfix(),(u??=new Set).delete(h))),h!==y){if(void 0!==c&&c.has(h)){if(k.length<S.length){var x,E=S[0]
w=E.prev
var C=k[0],T=k[k.length-1]
for(x=0;x<k.length;x+=1)Bh(k[x],E,i)
for(x=0;x<S.length;x+=1)c.delete(S[x])
qh(n,C.prev,T.next),qh(n,w,C),qh(n,T,E),y=E,w=T,p-=1,k=[],S=[]}else c.delete(h),Bh(h,y,i),qh(n,h.prev,h.next),qh(n,h,null===w?n.first:w.next),qh(n,w,h),w=h
continue}for(k=[],S=[];null!==y&&y.k!==f;)0===(y.e.f&Au)&&(c??=new Set).add(y),S.push(y),y=y.next
if(null===y)continue
h=y}k.push(h),w=h,y=h.next}else{var P=r.get(f)
if(void 0!==P){r.delete(f),m.set(f,P)
var $=w?w.next:y
qh(n,w,P),qh(n,P,$),Bh(P,$,i),w=P}else{w=Dh(y?y.e.nodes_start:i,n,w,null===w?n.first:w.next,d,f,p,s,o,l)}m.set(f,w),k=[],S=[],y=w.next}if(null!==y||void 0!==c){for(var L=void 0===c?[]:pu(c);null!==y;)0===(y.e.f&Au)&&L.push(y),y=y.next
var I=L.length
if(I>0){var M=4&o&&0===_?i:null
if(g){for(p=0;p<I;p+=1)L[p].a?.measure()
for(p=0;p<I;p+=1)L[p].a?.fix()}!function(e,t,n){for(var r=e.items,i=[],s=t.length,o=0;o<s;o++)If(t[o].e,i,!0)
var a=s>0&&0===i.length&&null!==n
if(a){var l=n.parentNode
l.textContent="",l.append(n),r.clear(),qh(e,t[0].prev,t[s-1].next)}Lf(i,()=>{for(var n=0;n<s;n++){var i=t[n]
a||(r.delete(i.k),qh(e,i.prev,i.next)),Cf(i.e,!a)}})}(n,L,M)}}g&&pd(()=>{if(void 0!==u)for(h of u)h.a?.apply()})
for(var O of(e.first=n.first&&n.first.e,e.last=w&&w.e,r.values()))Cf(O.e)
r.clear()}(c,l,a,f,o,i,t,r,n),null!==s&&(0===l.length?u?Mf(u):u=Sf(()=>s(o)):null!==u&&$f(u,()=>{u=null}))}kf(()=>{c??=qf
var e=(l=ah(h)).length
d&&0===e||(d=0===e,p(),ah(h))})}function Nh(e,t,n,r){1&r&&Qd(e.v,t),2&r?Qd(e.i,n):e.i=n}function Dh(e,t,n,r,i,s,o,a,l,c,u){var d=!!(1&l)?!(16&l)?zd(i,!1,!1):Gd(i):i,f=2&l?Gd(o):o,h={i:f,v:d,k:s,a:null,e:null,prev:n,next:r}
try{if(null===e)document.createDocumentFragment().append(e=sf())
return h.e=Sf(()=>a(e,d,f,c),false),h.e.prev=n&&n.e,h.e.next=r&&r.e,null===n?u||(t.first=h):(n.next=h,n.e.next=h.e),null!==r&&(r.prev=h,r.e.prev=h.e),h}finally{}}function Bh(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,s=e.e.nodes_start;null!==s&&s!==r;){var o=af(s)
i.before(s),s=o}}function qh(e,t,n){null===t?e.first=n:(t.next=n,t.e.next=n&&n.e),null!==n&&(n.prev=t,n.e.prev=t&&t.e)}function Hh(e,t,n=!1,r=!1,i=!1){var s=e,o=""
wf(()=>{var e=qf
if(o!==(o=t()??"")&&(null!==e.nodes_start&&(Tf(e.nodes_start,e.nodes_end),e.nodes_start=e.nodes_end=null),""!==o)){var i=o+""
n?i=`<svg>${i}</svg>`:r&&(i=`<math>${i}</math>`)
var a=wh(i)
if((n||r)&&(a=of(a)),kh(of(a),a.lastChild),n||r)for(;of(a);)s.before(of(a))
else s.before(a)}})}function Uh(e,t,...n){var r,i=e,s=Su
kf(()=>{s!==(s=t())&&(r&&(Cf(r),r=null),r=Sf(()=>s(i,...n)))},Nu)}function Gh(e,t,n){var r,i,s=e,o=null,a=null
function l(){i&&($f(i),i=null),o&&(o.lastChild.remove(),s.before(o),o=null),i=a,a=null}kf(()=>{if(r!==(r=t())){var e=!1
if(r){var i=s
e,a=Sf(()=>n(i,r))}l()}},Nu)}function Wh(e,t,n){bf(()=>{var r=ch(()=>t(e,n?.())||{})
if(r?.destroy)return()=>r.destroy()})}function zh(e){var t,n,r=""
if("string"==typeof e||"number"==typeof e)r+=e
else if("object"==typeof e)if(Array.isArray(e)){var i=e.length
for(t=0;t<i;t++)e[t]&&(n=zh(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n)
return r}function Vh(e){return"object"==typeof e?function(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=zh(e))&&(r&&(r+=" "),r+=t)
return r}(e):e??""}const Qh=[..." \t\n\r\f \v\ufeff"]
function Jh(e,t=!1){var n=t?" !important;":";",r=""
for(var i in e){var s=e[i]
null!=s&&""!==s&&(r+=" "+i+": "+s+n)}return r}function Kh(e){return"-"!==e[0]||"-"!==e[1]?e.toLowerCase():e}function Yh(e,t,n,r,i,s){var o=e.__className
if(o!==n||void 0===o){var a=function(e,t,n){var r=null==e?"":""+e
if(t&&(r=r?r+" "+t:t),n)for(var i in n)if(n[i])r=r?r+" "+i:i
else if(r.length)for(var s=i.length,o=0;(o=r.indexOf(i,o))>=0;){var a=o+s
0!==o&&!Qh.includes(r[o-1])||a!==r.length&&!Qh.includes(r[a])?o=a:r=(0===o?"":r.substring(0,o))+r.substring(a+1)}return""===r?null:r}(n,r,s)
null==a?e.removeAttribute("class"):e.className=a,e.__className=n}else if(s&&i!==s)for(var l in s){var c=!!s[l]
null!=i&&c===!!i[l]||e.classList.toggle(l,c)}return s}function Xh(e,t={},n,r){for(var i in n){var s=n[i]
t[i]!==s&&(null==n[i]?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function Zh(e,t,n,r){if(e.__style!==t){var i=function(e,t){if(t){var n,r,i=""
if(Array.isArray(t)?(n=t[0],r=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim()
var s=!1,o=0,a=!1,l=[]
n&&l.push(...Object.keys(n).map(Kh)),r&&l.push(...Object.keys(r).map(Kh))
var c=0,u=-1
const t=e.length
for(var d=0;d<t;d++){var f=e[d]
if(a?"/"===f&&"*"===e[d-1]&&(a=!1):s?s===f&&(s=!1):"/"===f&&"*"===e[d+1]?a=!0:'"'===f||"'"===f?s=f:"("===f?o++:")"===f&&o--,!a&&!1===s&&0===o)if(":"===f&&-1===u)u=d
else if(";"===f||d===t-1){if(-1!==u){var h=Kh(e.substring(c,u).trim())
l.includes(h)||(";"!==f&&d++,i+=" "+e.substring(c,d).trim()+";")}c=d+1,u=-1}}}return n&&(i+=Jh(n)),r&&(i+=Jh(r,!0)),""===(i=i.trim())?null:i}return null==e?null:String(e)}(t,r)
null==i?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else r&&(Array.isArray(r)?(Xh(e,n?.[0],r[0]),Xh(e,n?.[1],r[1],"important")):Xh(e,n,r))
return r}function ep(e,t,n=!1){if(e.multiple){if(null==t)return
if(!fu(t))return void console.warn("https://svelte.dev/e/select_multiple_invalid_value")
for(var r of e.options)r.selected=t.includes(np(r))}else{for(r of e.options){if(Zd(np(r),t))return void(r.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}}function tp(e,t,n=t){var r=!0
hf(e,"change",t=>{var r,i=t?"[selected]":":checked"
if(e.multiple)r=[].map.call(e.querySelectorAll(i),np)
else{var s=e.querySelector(i)??e.querySelector("option:not([disabled])")
r=s&&np(s)}n(r)}),bf(()=>{var i=t()
if(ep(e,i,r),r&&void 0===i){var s=e.querySelector(":checked")
null!==s&&(i=np(s),n(i))}e.__value=i,r=!1}),function(e){var t=new MutationObserver(()=>{ep(e,e.__value)})
t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),vf(()=>{t.disconnect()})}(e)}function np(e){return"__value"in e?e.__value:e.value}const rp=Symbol("is custom element"),ip=Symbol("is html")
function sp(e,t){var n=ap(e)
n.value!==(n.value=t??void 0)&&(e.value!==t||0===t&&"PROGRESS"===e.nodeName)&&(e.value=t??"")}function op(e,t,n,r){var i=ap(e)
i[t]!==(i[t]=n)&&("loading"===t&&(e[zu]=n),null==n?e.removeAttribute(t):"string"!=typeof n&&function(e){var t,n=e.getAttribute("is")||e.nodeName,r=lp.get(n)
if(r)return r
lp.set(n,r=[])
var i=e,s=Element.prototype
for(;s!==i;){for(var o in t=_u(i))t[o].set&&r.push(o)
i=yu(i)}return r}(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function ap(e){return e.__attributes??={[rp]:e.nodeName.includes("-"),[ip]:"http://www.w3.org/1999/xhtml"===e.namespaceURI}}var lp=new Map
const cp={tick:e=>requestAnimationFrame(e),now:()=>performance.now(),tasks:new Set}
function up(){const e=cp.now()
cp.tasks.forEach(t=>{t.c(e)||(cp.tasks.delete(t),t.f())}),0!==cp.tasks.size&&cp.tick(up)}function dp(e,t){ff(()=>{e.dispatchEvent(new CustomEvent(t))})}function fp(e){if("float"===e)return"cssFloat"
if("offset"===e)return"cssOffset"
if(e.startsWith("--"))return e
const t=e.split("-")
return 1===t.length?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function hp(e){const t={},n=e.split(";")
for(const e of n){const[n,r]=e.split(":")
if(!n||void 0===r)break
t[fp(n.trim())]=r.trim()}return t}const pp=e=>e
function gp(e,t,n,r){var i,s,o,a=!!(4&e),l=t.inert,c=t.style.overflow
function u(){return ff(()=>i??=n()(t,r?.()??{},{direction:"both"}))}var d={is_global:a,in(){t.inert=l,dp(t,"introstart"),s=vp(t,u(),o,1,()=>{dp(t,"introend"),s?.abort(),s=i=void 0,t.style.overflow=c})},out(e){t.inert=!0,dp(t,"outrostart"),o=vp(t,u(),s,0,()=>{dp(t,"outroend"),e?.()})},stop:()=>{s?.abort(),o?.abort()}},f=qf
if((f.transitions??=[]).push(d),Th){var h=a
if(!h){for(var p=f.parent;p&&0!==(p.f&Nu);)for(;(p=p.parent)&&0===(p.f&Tu););h=!p||0!==(p.f&ju)}h&&bf(()=>{ch(()=>d.in())})}}function vp(e,t,n,r,i){var s=1===r
if(ku(t)){var o,a=!1
return pd(()=>{if(!a){var l=t({direction:s?"in":"out"})
o=vp(e,l,n,r,i)}}),{abort:()=>{a=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(n?.deactivate(),!t?.duration)return i(),{abort:Su,deactivate:Su,reset:Su,t:()=>r}
const{delay:l=0,css:c,tick:u,easing:d=pp}=t
var f=[]
if(s&&void 0===n&&(u&&u(0,1),c)){var h=hp(c(0,1))
f.push(h,h)}var p=()=>1-r,g=e.animate(f,{duration:l,fill:"forwards"})
return g.onfinish=()=>{g.cancel()
var s=n?.t()??1-r
n?.abort()
var o=r-s,a=t.duration*Math.abs(o),l=[]
if(a>0){var f=!1
if(c)for(var h=Math.ceil(a/(1e3/60)),v=0;v<=h;v+=1){var _=s+o*d(v/h),m=hp(c(_,1-_))
l.push(m),f||="hidden"===m.overflow}f&&(e.style.overflow="hidden"),p=()=>{var e=g.currentTime
return s+o*d(e/a)},u&&function(e){let t
0===cp.tasks.size&&cp.tick(up),new Promise(n=>{cp.tasks.add(t={c:e,f:n})})}(()=>{if("running"!==g.playState)return!1
var e=p()
return u(e,1-e),!0})}(g=e.animate(l,{duration:a,fill:"forwards"})).onfinish=()=>{p=()=>r,u?.(r,1-r),i()}},{abort:()=>{g&&(g.cancel(),g.effect=null,g.onfinish=Su)},deactivate:()=>{i=Su},reset:()=>{0===r&&u?.(1,0)},t:()=>p()}}function _p(e,t,n=t){var r=new WeakSet
hf(e,"input",async i=>{var s=i?e.defaultValue:e.value
if(s=wp(e)?kp(s):s,n(s),null!==Td&&r.add(Td),await oh(),s!==(s=t())){var o=e.selectionStart,a=e.selectionEnd
e.value=s??"",null!==a&&(e.selectionStart=o,e.selectionEnd=Math.min(a,e.value.length))}}),null==ch(t)&&e.value&&(n(wp(e)?kp(e.value):e.value),null!==Td&&r.add(Td)),yf(()=>{var n=t()
if(e===document.activeElement){var i=Pd??Td
if(r.has(i))return}wp(e)&&n===kp(e.value)||("date"!==e.type||n||e.value)&&n!==e.value&&(e.value=n??"")})}const mp=new Set
function bp(e,t,n,r,i=r){var s="checkbox"===n.getAttribute("type"),o=e
if(null!==t)for(var a of t)o=o[a]??=[]
o.push(n),hf(n,"change",()=>{var e=n.__value
s&&(e=function(e,t,n){for(var r=new Set,i=0;i<e.length;i+=1)e[i].checked&&r.add(e[i].__value)
n||r.delete(t)
return Array.from(r)}(o,e,n.checked)),i(e)},()=>i(s?[]:null)),yf(()=>{var e=r()
s?(e=e||[],n.checked=e.includes(n.__value)):n.checked=Zd(n.__value,e)}),vf(()=>{var e=o.indexOf(n);-1!==e&&o.splice(e,1)}),mp.has(o)||(mp.add(o),pd(()=>{o.sort((e,t)=>4===e.compareDocumentPosition(t)?-1:1),mp.delete(o)})),pd(()=>{})}function yp(e,t,n=t){hf(e,"change",t=>{var r=t?e.defaultChecked:e.checked
n(r)}),null==ch(t)&&n(e.checked),yf(()=>{var n=t()
e.checked=Boolean(n)})}function wp(e){var t=e.type
return"number"===t||"range"===t}function kp(e){return""===e?null:+e}class Sp{#g=new WeakMap
#v
#_
static entries=new WeakMap
constructor(e){this.#_=e}observe(e,t){var n=this.#g.get(e)||new Set
return n.add(t),this.#g.set(e,n),this.#m().observe(e,this.#_),()=>{var n=this.#g.get(e)
n.delete(t),0===n.size&&(this.#g.delete(e),this.#v.unobserve(e))}}#m(){return this.#v??(this.#v=new ResizeObserver(e=>{for(var t of e)for(var n of(Sp.entries.set(t.target,t),this.#g.get(t.target)||[]))n(t)}))}}var xp=new Sp({box:"border-box"})
function Ep(e,t){return e===t||e?.[Gu]===t}function Cp(e={},t,n,r){return bf(()=>{var r,i
return yf(()=>{r=i,i=[],ch(()=>{e!==n(...i)&&(t(e,...i),r&&Ep(n(...r),e)&&t(null,...r))})}),()=>{pd(()=>{i&&Ep(n(...i),e)&&t(null,...i)})}}),e}function Tp(e=!1){const t=rd,n=t.l.u
if(!n)return
let r=()=>function(e){if("object"==typeof e&&e&&!(e instanceof EventTarget))if(Gu in e)fh(e)
else if(!Array.isArray(e))for(let t in e){const n=e[t]
"object"==typeof n&&n&&Gu in n&&fh(n)}}(t.s)
if(e){let e=0,n={}
const i=_d(()=>{let r=!1
const i=t.s
for(const e in i)i[e]!==n[e]&&(n[e]=i[e],r=!0)
return r&&e++,e})
r=()=>ah(i)}n.b.length&&function(e){pf(),gf(1048584,e,!0)}(()=>{Pp(t,r),Eu(n.b)}),_f(()=>{const e=ch(()=>n.m.map(xu))
return()=>{for(const t of e)"function"==typeof t&&t()}}),n.a.length&&_f(()=>{Pp(t,r),Eu(n.a)})}function Pp(e,t){if(e.l.s)for(const t of e.l.s)ah(t)
t()}function $p(e,t,n){if(null==e)return t(void 0),n&&n(void 0),Su
const r=ch(()=>e.subscribe(t,n))
return r.unsubscribe?()=>r.unsubscribe():r}const Lp=[]
function Ip(e,t=Su){let n=null
const r=new Set
function i(t){if(Yu(e,t)&&(e=t,n)){const t=!Lp.length
for(const t of r)t[1](),Lp.push(t,e)
if(t){for(let e=0;e<Lp.length;e+=2)Lp[e][0](Lp[e+1])
Lp.length=0}}}function s(t){i(t(e))}return{set:i,update:s,subscribe:function(o,a=Su){const l=[o,a]
return r.add(l),1===r.size&&(n=t(i,s)||Su),o(e),()=>{r.delete(l),0===r.size&&n&&(n(),n=null)}}}}function Mp(e,t,n){const r=!Array.isArray(e),i=r?[e]:e
if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const s=t.length<2
return o=(e,n)=>{let o=!1
const a=[]
let l=0,c=Su
const u=()=>{if(l)return
c()
const i=t(r?a[0]:a,e,n)
s?e(i):c="function"==typeof i?i:Su},d=i.map((e,t)=>$p(e,e=>{a[t]=e,l&=~(1<<t),o&&u()},()=>{l|=1<<t}))
return o=!0,u(),function(){Eu(d),c(),o=!1}},{subscribe:Ip(n,o).subscribe}
var o}function Op(e){let t
return $p(e,e=>t=e)(),t}let Rp=!1,Ap=Symbol()
function Fp(e,t,n){const r=n[t]??={store:null,source:zd(void 0),unsubscribe:Su}
if(r.store!==e&&!(Ap in n))if(r.unsubscribe(),r.store=e??null,null==e)r.source.v=void 0,r.unsubscribe=Su
else{var i=!0
r.unsubscribe=$p(e,e=>{i?r.source.v=e:Vd(r.source,e)}),i=!1}return e&&Ap in n?Op(e):ah(r.source)}function jp(e,t){return e.set(t),t}function Np(){const e={}
return[e,function(){vf(()=>{for(var t in e){e[t].unsubscribe()}gu(e,Ap,{enumerable:!1,value:!0})})}]}const Dp={get(e,t){let n=e.props.length
for(;n--;){let r=e.props[n]
if(ku(r)&&(r=r()),"object"==typeof r&&null!==r&&t in r)return r[t]}},set(e,t,n){let r=e.props.length
for(;r--;){let i=e.props[r]
ku(i)&&(i=i())
const s=vu(i,t)
if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length
for(;n--;){let r=e.props[n]
if(ku(r)&&(r=r()),"object"==typeof r&&null!==r&&t in r){const e=vu(r,t)
return e&&!e.configurable&&(e.configurable=!0),e}}},has(e,t){if(t===Gu||t===Wu)return!1
for(let n of e.props)if(ku(n)&&(n=n()),null!=n&&t in n)return!0
return!1},ownKeys(e){const t=[]
for(let n of e.props)if(ku(n)&&(n=n()),n){for(const e in n)t.includes(e)||t.push(e)
for(const e of Object.getOwnPropertySymbols(n))t.includes(e)||t.push(e)}return t}}
function Bp(e,t,n,r){var i,s,o=!Zu||!!(2&n),a=!!(8&n),l=!!(16&n),c=r,u=!0,d=()=>(u&&(u=!1,c=l?ch(r):r),c)
if(a){var f=Gu in e||Wu in e
i=vu(e,t)?.set??(f&&t in e?n=>e[t]=n:void 0)}var h,p=!1
if(a?[s,p]=function(e){var t=Rp
try{return Rp=!1,[e(),Rp]}finally{Rp=t}}(()=>e[t]):s=e[t],void 0===s&&void 0!==r&&(s=d(),i&&(o&&function(){throw new Error("https://svelte.dev/e/props_invalid_value")}(),i(s))),h=o?()=>{var n=e[t]
return void 0===n?d():(u=!0,n)}:()=>{var n=e[t]
return void 0!==n&&(c=void 0),void 0===n?c:n},o&&!(4&n))return h
if(i){var g=e.$$legacy
return function(e,t){return arguments.length>0?(o&&t&&!g&&!p||i(t?h():e),e):h()}}var v=!1,_=(1&n?_d:yd)(()=>(v=!1,h()))
a&&ah(_)
var m=qf
return function(e,t){if(arguments.length>0){const n=t?ah(_):o&&a?Yd(e):e
return Vd(_,n),v=!0,void 0!==c&&(c=n),e}return Ff&&v||0!==(m.f&Fu)?_.v:ah(_)}}function qp(e){null===rd&&Qu(),Zu&&null!==rd.l?function(e){var t=e.l
return t.u??={a:[],b:[],m:[]}}(rd).m.push(e):_f(()=>{const t=ch(e)
if("function"==typeof t)return t})}function Hp(e){null===rd&&Qu(),qp(()=>()=>ch(e))}const Up=Ip("")
"undefined"!=typeof window&&((window.__svelte??={}).v??=new Set).add("5")
const Gp=e=>e
function Wp(e){const t=e-1
return t*t*t+1}function zp(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function Vp(e,{delay:t=0,duration:n=400,easing:r=Gp}={}){const i=+getComputedStyle(e).opacity
return{delay:t,duration:n,easing:r,css:e=>"opacity: "+e*i}}function Qp(e,{delay:t=0,duration:n=400,easing:r=Wp,x:i=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-o),[d,f]=zp(i),[h,p]=zp(s)
return{delay:t,duration:n,easing:r,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*d}${f}, ${(1-e)*h}${p});\n\t\t\topacity: ${l-u*t}`}}function Jp(e,{delay:t=0,duration:n=400,easing:r=Wp,axis:i="y"}={}){const s=getComputedStyle(e),o=+s.opacity,a="y"===i?"height":"width",l=parseFloat(s[a]),c="y"===i?["top","bottom"]:["left","right"],u=c.map(e=>`${e[0].toUpperCase()}${e.slice(1)}`),d=parseFloat(s[`padding${u[0]}`]),f=parseFloat(s[`padding${u[1]}`]),h=parseFloat(s[`margin${u[0]}`]),p=parseFloat(s[`margin${u[1]}`]),g=parseFloat(s[`border${u[0]}Width`]),v=parseFloat(s[`border${u[1]}Width`])
return{delay:t,duration:n,easing:r,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*o};${a}: ${e*l}px;padding-${c[0]}: ${e*d}px;padding-${c[1]}: ${e*f}px;margin-${c[0]}: ${e*h}px;margin-${c[1]}: ${e*p}px;border-${c[0]}-width: ${e*g}px;border-${c[1]}-width: ${e*v}px;min-${a}: 0`}}var Kp=(e,t)=>{Vd(t,!1)},Yp=Sh('<div role="alert" class="svelte-1c416no"><p class="svelte-1c416no"> </p></div>')
function Xp(e,t){sd(t,!0)
const[n,r]=Np(),i=()=>Fp(Up,"$alert",n)
let s=Bp(t,"ms",3,3e3),o=Wd(!1),a=0,l=Wd("")
const c=(e,t)=>{clearTimeout(a),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
Vd(l,`translate(${t}px, ${e.offsetTop}px)`),Vd(o,!0)}(),t>0&&(a=setTimeout(()=>{Vd(o,!1),jp(Up,"")},t))):Vd(o,!1)}
_f(()=>{c(i(),s())}),Hp(()=>clearTimeout(a))
var u=Eh(),d=cf(u),f=e=>{var t=Yp()
let n
t.__click=[Kp,o]
var r=lf(t),s=lf(r)
wf(e=>{n=Zh(t,"",n,e),Ph(s,i())},[()=>({transform:ah(l)})]),gp(3,t,()=>Qp,()=>({delay:250,duration:300,x:0,y:-100,opacity:.5})),Ch(e,t)}
Rh(d,e=>{ah(o)&&e(f)}),Ch(e,u),od(),r()}mh(["click"])
let Zp=!1
function eg(e){e&&(Zp||(Zp=!0,$h(Xp,{target:document.body})),Up.set(e))}function tg(e,t){return Array.from(e,t)}function ng(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function rg(e,t){return tg(ng(e,t))}function ig(e){return e.trim()}function sg(e){const t=n(e)
if(kc(t))return ig(t)}function og(e,t){return sg(t).includes(e)}function ag(e,...t){return(...n)=>e(...t,...n)}let lg=0,cg=0,ug=0
function dg(){return lg||(lg=t("pCL")),lg}function fg(){return cg||(cg=t("pCC")),cg}function hg(){return ug||(ug=t("pCR")),ug}function pg(){const e=rg("a",dg()).filter(function(e){return ag(og,e)}("message"))
e.length&&async function(){const e=new Audio(yc("defaultMessageSound"))
try{await e.play()}catch(e){eg("Message Sound Not Allowed")}}()}function gg(e,t,n,r){var i
Gc(e,t,n,{once:!0,...(i=r,wc(i)?{capture:i}:i)})}let vg=0,_g=0,mg=0,bg=0,yg=0,wg=0
function kg(e){_g=e.clientX,mg=e.clientY}function Sg(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(vg,null).transform)
bg=e[0]-_g,yg=e[1]-mg}function xg(e){e.clientX===_g&&e.clientY===mg||(vg.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+bg).toString()}, ${(e.clientY+yg).toString()})`,kg(e))}function Eg(e){return function(e){const t=performance.now()
t-wg>16&&(xg(e),wg=t)}(e),e.preventDefault(),!1}function Cg(e){return xg(e),function(e,t,n,r){e instanceof EventTarget&&e.removeEventListener(t,n,r)}(document.body,"dragover",Eg),e.preventDefault(),!1}function Tg(e,t){!function(e,t){vg=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),kg(t),Sg(),wg=0,t.dataTransfer.setData("text/plain",""),Gc(document.body,"dragover",Eg),gg(document.body,"drop",Cg)}function Pg(e,t){e.draggable=!0,Gc(e,"dragstart",ag(Tg,t))}function $g(e){return String(e).replaceAll(" ","_")}const Lg={}
function Ig(e,t,n){if(!e)return
const r=function(e,t){let n=$g(e)
return t&&(n+=`__${$g(t)}`),n}(e,t),i=function(e,t){let n=e
return t&&(n+=`__${$g(t)}`),n}(r,n)
Lg[i]||(Lg[i]=!0,la(r,function(e){return e?{eventLabel:e}:null}(n)))}let Mg=0
function Og(e){const t=l(/\sguildId: (?<id>\d{1,6}),/,n(e))
t&&(Mg=Number(t))}function Rg(){return Mg||rg("script",document.body).forEach(Og),Mg}function Ag(e){return Object.entries(e)}function Fg(e,t,[n,r]){Pc(r)&&null!==r?e(t[n],r):t[n]=r}function jg(e,t){Ag(t).forEach(ag(Fg,jg,e))}function Ng(e,t){const n=document.createElement(e)
return t&&jg(n,t),n}function Dg(e){return Ng("div",e)}function Bg(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function qg(e,t){return tg(Bg(e,t))}function Hg(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function Ug(e,t){t instanceof Element&&(t.innerHTML=String(e))}const Gg={id:"content",style:{display:"none"}},Wg={width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}
function zg(e){let n=t("content")
n?Ug("",n):(n=Dg(Gg),Hg(document.body,n)),$(n).dialog(Wg),qg("ui-dialog-titlebar-close").forEach(e=>e.blur()),e(n)}async function Vg(e){(await e).default()}function Qg(){Vg(import("./mountBuffLog.svelte-B75YN72T.js"))}function Jg(){Vg(import("./mountCombatLog.svelte-HzZq4tck.js"))}function Kg(){Vg(import("./mountCreatureLog.svelte-DFszXfVd.js"))}function Yg(){Vg(import("./mountFsboxlog.svelte-DqKZNhv9.js"))}function Xg(){Vg(Promise.resolve().then(function(){return oE}))}function Zg(){Vg(import("./mountGuildTracker.svelte-DCr5jYTW.js"))}async function ev(e){(await import("./injectAuctionSearch-flLo3xjj.js")).default(e)}async function tv(e){const{injectFindBuffs:t}=await import("./findBuffs-vVRKyBEU.js")
t(e)}async function nv(e){const{injectFindOther:t}=await import("./findBuffs-vVRKyBEU.js")
t(e)}async function rv(e){(await import("./injectOnlinePlayers-BKBsc9GB.js")).default(e)}function iv(){Vg(Promise.resolve().then(function(){return fC}))}function sv(){Vg(import("./mountQuickLinksMgr.svelte-BAiMSlmm.js"))}async function ov(e){(await import("./quickWear-Cmft-0u6.js")).default(e)}function av(){Vg(import("./mountRecipeMgr.svelte-BpuATxev.js"))}function lv(){Vg(import("./mountReliclist.svelte-Dj1PGZhZ.js"))}function cv(e){return new Promise(t=>{setTimeout(t,e)})}function uv(e){Gc(window,"beforeunload",()=>e.abort())}let dv=0
let fv=0
async function hv(){fv<5-$.active&&performance.now()-dv>=900?(fv=5-$.active,dv=performance.now()):await cv(100)}async function pv(e,t=10){await async function(){for(;fv<1;)await hv()
fv-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=uv,$.ajax(t).fail((e,t,n)=>{e.textStatus=t,e.errorThrown=n})}(e)}catch(n){if(t&&n.status>500)return pv(e,t-1)
!function(e,t){if(![0,500,503].includes(t.status))throw new Uc([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}function gv(e){return jg(e,{url:Ua,data:{no_mobile:1}}),pv(e)}async function vv(e){return $c(await gv({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function _v(e){return vv({cmd:"export",...e})}function mv(){return _v({inc_tagged:"1",subcmd:"guild_store"})}function bv(e){return Ng("a",e)}function yv(e){e instanceof Element&&e.click()}function wv(e,t){const n=URL.createObjectURL(e),r=bv({download:t,href:n,style:{display:"none"}})
Hg(document.body,r),yv(r),document.body.removeChild(r),setTimeout(()=>{URL.revokeObjectURL(n)},0)}async function kv(e,t){return $c(await pv({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function Sv(e){return kv(e,{method:"POST"})}function xv(e,t){const n=[]
for(let r=0;r<t.length;r+=e)n.push(t.slice(r,r+e))
return n}let Ev=null
function Cv(){const e=t("holdtext")
if(e&&!Ev){const t=l(/fallensword.com\/\?ref=(?<id>\d+)/,n(e))
t&&(Ev=Number(t))}return Ev}const Tv=(e,t)=>t.some(t=>e instanceof t)
let Pv,$v
const Lv=new WeakMap,Iv=new WeakMap,Mv=new WeakMap
let Ov={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Lv.get(e)
if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jv(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}
function Rv(e){Ov=e(Ov)}function Av(e){return($v||($v=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Nv(this),t),jv(this.request)}:function(...t){return jv(e.apply(Nv(this),t))}}function Fv(e){return"function"==typeof e?Av(e):(e instanceof IDBTransaction&&function(e){if(Lv.has(e))return
const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()}
e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)})
Lv.set(e,t)}(e),Tv(e,Pv||(Pv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Ov):e)}function jv(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(jv(e.result)),r()},s=()=>{n(e.error),r()}
e.addEventListener("success",i),e.addEventListener("error",s)})
return Mv.set(t,e),t}(e)
if(Iv.has(e))return Iv.get(e)
const t=Fv(e)
return t!==e&&(Iv.set(e,t),Mv.set(t,e)),t}const Nv=e=>Mv.get(e)
function Dv(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=jv(o)
return r&&o.addEventListener("upgradeneeded",e=>{r(jv(o.result),e.oldVersion,e.newVersion,jv(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}const Bv=["get","getKey","getAll","getAllKeys","count"],qv=["put","add","delete","clear"],Hv=new Map
function Uv(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return
if(Hv.get(t))return Hv.get(t)
const n=t.replace(/FromIndex$/,""),r=t!==n,i=qv.includes(n)
if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Bv.includes(n))return
const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly")
let o=s.store
return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]}
return Hv.set(t,s),s}Rv(e=>({...e,get:(t,n,r)=>Uv(t,n)||e.get(t,n,r),has:(t,n)=>!!Uv(t,n)||e.has(t,n)}))
const Gv=["continue","continuePrimaryKey","advance"],Wv={},zv=new WeakMap,Vv=new WeakMap,Qv={get(e,t){if(!Gv.includes(t))return e[t]
let n=Wv[t]
return n||(n=Wv[t]=function(...e){zv.set(this,Vv.get(this)[t](...e))}),n}}
async function*Jv(...e){let t=this
if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return
const n=new Proxy(t,Qv)
for(Vv.set(n,t),Mv.set(n,Nv(t));t;)yield n,t=await(zv.get(n)||t.continue()),zv.delete(n)}function Kv(e,t){return t===Symbol.asyncIterator&&Tv(e,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===t&&Tv(e,[IDBIndex,IDBObjectStore])}Rv(e=>({...e,get:(t,n,r)=>Kv(t,n)?Jv:e.get(t,n,r),has:(t,n)=>Kv(t,n)||e.has(t,n)}))
let Yv=Promise.resolve(),Xv=!1
function Zv(){return Xv||(Yv=Dv("keyval-store",1,{upgrade(e){e.createObjectStore("keyval")}}),Xv=!0),Yv}async function e_(e){try{return(await Zv()).get("keyval",e)}catch(e){aa(e)}}async function t_(e,t){try{return(await Zv()).put("keyval",t,e)}catch(e){aa(e)}}async function n_(e){try{return(await Zv()).delete("keyval",e)}catch(e){aa(e)}}const r_=({folder_id:e})=>-2!==(e??-2),i_=({folder_id:e})=>-2===e,s_=({player_id:e})=>-1!==(e??-1),o_=({player_id:e})=>e,a_=({player_id:e})=>-1===e,l_=([e,t,n])=>xv(20,e).map(e=>[e,t,n]),c_=(e,t)=>e.attributes.find(({id:e})=>e===t)?.value??0,u_=(e,t)=>t.forge||t.stats?.set_name,d_=e=>e?.s?e.r.items:[],f_=e=>[[e.filter(r_),Cv,0],[e.filter(i_),Cv,1],[e.filter(s_),o_,7],[e.filter(a_),Cv,4]].flatMap(l_)
function h_(e){return function(){const t=this.data(),n=e.find((e=>({inv_id:t})=>t===e.inv_id)(t))
n?.attributes&&(t.stats=((e,t)=>({...t,armor:c_(e,2),attack:c_(e,0),damage:c_(e,4),defense:c_(e,1),hp:c_(e,3),set_name:e.set_name??""}))(n,t.stats),this.invalidate())}}const p_=async()=>await e_(`fsh_${Vc.subcmd}_cache`)??[],g_=e=>t_(`fsh_${Vc.subcmd}_cache`,e)
async function v_(e,t,n){const r=await(i={item_id:e.map(({item_id:e})=>e),inv_id:e.map(({inv_id:e})=>e),p:e.map(t),t:e.map(()=>n)},Sv({cmd:"fetchitem",compare:0,...i}))
var i
return r?.s&&(r.r.items=((e,t)=>t.map((t,n)=>({...t,inv_id:e[n].inv_id})))(e,r.r.items),await async function(e){const t=(await p_()).filter((n=e,e=>n.every(t=>t.inv_id!==e.inv_id)))
var n
await g_(t.concat(e))}(r.r.items)),r}async function __(e){const t=((e,t)=>{return t.filter((n=tg(e.data()),e=>n.some(t=>e.inv_id===t.inv_id)))
var n})(e,await p_())
return await g_(t),t}async function m_(e){const t=new DataTable(e)
await async function(e){const t=e.rows(u_),n=await __(t)
t.every(h_(n))}(t),t.draw()}const b_=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],y_=e=>{return[...b_(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??"",t?.set_attack??"",t?.set_defense??"",t?.set_armor??"",t?.set_hp??"",t?.set_damage??""]),e.cached].join(",")
var t}
function w_(e){return()=>zg(e)}var k_=[{section:"Character",menu:[{label:"Buff Log",fn:Qg},{label:"Combat Log",fn:Jg},{label:"Creature Log",fn:Kg},{label:"Recipe Manager",fn:av},{label:"Quick Links",fn:sv},{label:"Inventory Manager",href:`${il}invmanagernew`}]},{section:"Actions",menu:[{label:"Find Buffs",fn:w_(tv)},{label:"Find Other",fn:w_(nv)},{label:"Online Players",fn:w_(rv)},{label:"AH Quick Search",fn:w_(ev)}]},...Rg()?[{section:"Guild",menu:[{label:"Guild Inventory",href:`${il}guildinvmgr`},{label:"New Guild Log",fn:Xg},{label:"Merc Hunter",fn:function(){Vg(import("./mountMercs.svelte-Rj-wzrWo.js"))}},{label:"Pot Report",fn:function(){Vg(Promise.resolve().then(function(){return GE}))}},{label:"Guild Tracker",fn:Zg}]}]:[],{section:"Extra",menu:[{label:"Quick Extract",fn:iv},{label:"Quick Wear",fn:w_(ov)},{label:"FS Box Log",fn:Yg},{label:"SE Tracker",fn:function(){Vg(Promise.resolve().then(function(){return $C}))}}]},...yc("betaOptIn")&&Rg()?[{section:"Beta Features",menu:[{label:"Relic List",fn:lv,beta:!0},{label:"GS Export",fn:async function(){if(!Rg())return
const e=await mv(),t=await e_("fsh_guildinvmgr_cache")??[],n=e.items.map((e=>t=>{const n=e.find(({inv_id:e})=>e===t.inv_id)
return n?.attributes?{...t,stats:{...t.stats,armor:c_(n,2),attack:c_(n,0),damage:c_(n,4),defense:c_(n,1),hp:c_(n,3),set_name:n.set_name??"",...n.set_name&&{set_armor:c_(n.set_bonuses,2)},...n.set_name&&{set_attack:c_(n.set_bonuses,0)},...n.set_name&&{set_damage:c_(n.set_bonuses,4)},...n.set_name&&{set_defense:c_(n.set_bonuses,1)},...n.set_name&&{set_hp:c_(n.set_bonuses,3)}},cached:!0}:{...t,cached:!1}})(t))
var r
wv((r=`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name,set_attack,set_defense,set_armor,set_hp,set_damage,cached\n${(e=>e.map(y_).join("\n"))(n)}\n`,new Blob([r],{type:"text/csv"})),"gs_export.csv")},beta:!0},{label:"Who's Got What",fn:function(){Vg(Promise.resolve().then(function(){return tT}))},beta:!0}]}]:[],{section:"FSH developer quick links",menu:[{playerId:1963510,playerName:"PointyHair"},{playerId:1674838,playerName:"Lusterless"}]}],S_=(e,t,n)=>t(ah(n).label,ah(n).fn),x_=Sh('<button type="button" class="svelte-8sy7i5"> </button>'),E_=(e,t,n)=>t(ah(n).label),C_=Sh('<a class="svelte-8sy7i5"> </a>'),T_=(e,t,n)=>t(ah(n).playerName),P_=Sh('<button type="button" class="helperDevBtn svelte-8sy7i5">PM</button> <a class="svelte-8sy7i5"> </a>',1),$_=Sh('<sup class="fshRed">beta</sup>'),L_=Sh("<li><!> <!></li>"),I_=Sh('<h2 class="svelte-8sy7i5"> </h2> <ul></ul>',1)
mh(["click"])
var M_=Sh('<div class="modal svelte-gt76l6"><!></div>'),O_=Sh('<div><button type="button">Helper Menu</button> <!></div>')
function R_(e,t){sd(t,!0)
let n=Wd(!1)
const r=yc("keepHelperMenuOnScreen"),i=yc("draggableHelperMenu")
function s(){Vd(n,!ah(n))}var o=O_()
let a
var l=lf(o)
let c
l.__click=s
var u=uf(l,2),d=e=>{var t=M_()
!function(e,t){function n(e){Ig("helperMenu",e)}function r(e,r){Tc(r)&&(n(e),t.doToggle(),r())}function i(e){n("sendMsg"),t.doToggle(),window.openQuickMsgDialog(e)}sd(t,!0)
var s=Eh()
jh(cf(s),17,()=>k_,Fh,(e,t)=>{var s=I_(),o=cf(s),a=lf(o)
jh(uf(o,2),21,()=>ah(t).menu,Fh,(e,t,s,o)=>{var a=L_(),l=lf(a),c=e=>{var n=x_()
n.__click=[S_,r,t]
var i=lf(n)
wf(()=>Ph(i,ah(t).label)),Ch(e,n)},u=e=>{var r=Eh(),s=cf(r),o=e=>{var r=C_()
r.__click=[E_,n,t]
var i=lf(r)
wf(()=>{op(r,"href",ah(t).href),Ph(i,ah(t).label)}),Ch(e,r)},a=e=>{var n=Eh(),r=cf(n),s=e=>{var n=P_(),r=cf(n)
r.__click=[T_,i,t]
var s=uf(r,2),o=lf(s)
wf(()=>{op(s,"href",`${Za??""}${ah(t).playerId??""}`),Ph(o,ah(t).playerName)}),Ch(e,n)}
Rh(r,e=>{ah(t).playerName&&e(s)},!0),Ch(e,n)}
Rh(s,e=>{ah(t).href?e(o):e(a,!1)},!0),Ch(e,r)}
Rh(l,e=>{ah(t).fn?e(c):e(u,!1)})
var d=uf(l,2),f=e=>{Ch(e,$_())}
Rh(d,e=>{ah(t).beta&&e(f)}),Ch(e,a)}),wf(()=>Ph(a,ah(t).section)),Ch(e,s)}),Ch(e,s),od()}(lf(t),{doToggle:s}),gp(3,t,()=>Vp,()=>({duration:100})),Ch(e,t)}
Rh(u,e=>{ah(n)&&e(d)}),Wh(o,e=>{return t=e,void(i&&Pg(t))
var t}),wf((e,t)=>{a=Yh(o,0,"helper-menu svelte-gt76l6",null,a,e),c=Yh(l,0,"toggle svelte-gt76l6",null,c,t)},[()=>({"helper-menu-fixed":r}),()=>({"helper-menu-move":i})]),Ch(e,o),od()}function A_(){const e=Lc(".mainbody")
e&&function(e,t){$h(R_,{target:t.parentElement,props:{props:e}})}({},e)}function F_(e){return kv(e,{method:"GET"})}function j_(e){return F_({cmd:"trade",...e})}function N_(e,t){return j_({subcmd:"sendgold",xc:window.ajaxXC,target_username:e,gold_amount:t})}function D_(e,t,...n){return e(...n)}function B_(e){return(new DOMParser).parseFromString(e,"text/html")}function q_(e){return gv({data:e})}async function H_(e){const t=await q_(e)
if(t)return B_(t)}function U_(e){const n=t("info-msg",e)
if(n){const e=n.innerHTML
return e?e.replace(/<br.*/,""):""}}async function G_(e,t){const n=await H_(e)
if(!n)return{s:!1}
const r=U_(n)
return r===t?{s:!0}:{s:!1,e:{message:r}}}mh(["click"])
let W_=0
const z_=()=>W_
function V_(){W_=yc("sendGoldonWorld")}async function Q_(){if(!z_())return
Ig("NewMap","doSendGold")
const e=await function(e,t){return D_(N_,0,e,t)}($("#HelperSendTo").html(),$("#HelperSendAmt").html().replace(/[^\d]/g,""))
e.s&&(Ec("currentGoldSentTotal",parseInt(yc("currentGoldSentTotal"),10)+parseInt(yc("goldAmount"),10)),GameData.fetch(1))}function J_(e){window.location=e}function K_(e){yc("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function Y_(e){Ig("keyHandler",e)}function X_(e){return e?.toLowerCase?.()}function Z_(e,t){return X_(e)<X_(t)?-1:X_(e)>X_(t)?1:0}function em(e){return F_({cmd:"profile",...e})}async function tm(){const e=await em({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort((e,t)=>Z_(e.name,t.name))}:e}function nm(){return D_(tm)}const rm=[e=>e?.s,(e,t)=>e.r?.length>t]
async function im(e){const t=await nm()
if(((e,t)=>rm.every(n=>n(t,e)))(e,t)){Y_("changeCombatSet")
const n=t.r[e].id
K_("2"),J_(`${Xa+za}managecombatset&submit=Use&combatSetId=${n}`)}}function sm(e,n){t("worldPage")||(Y_(e),J_(n))}function om(){Vc.enableMaxGroupSizeToJoin?J_(pl):J_(hl)}function am(){Y_("logPage"),K_("2"),J_(Ka)}function lm(e){const t=Lc(`#pCC input[value="${e}"]`)
t&&(Y_("movePage"),yv(t))}const cm=[["!",im,0],["@",im,1],['"',im,1],["#",im,2],["£",im,2],["$",im,3],["%",im,4],["^",im,5],["&",im,6],["*",im,7],["(",im,8],["0",function(){sm("toWorld",gl)}],["<",lm,"<"],[">",lm,">"],["G",function(){Y_("createGroup"),K_("4"),J_(`${ul}create`)}],["L",am],["b",function(){Y_("backpack"),K_("2"),J_(el)}],["g",function(){Y_("gotoGuild"),K_("4"),J_(`${al}manage`)}],["j",function(){Y_("joinAllGroup"),K_("4"),om()}],["l",am],["p",function(){Y_("profile"),K_("2"),J_(Xa)}],["r",function(){sm("doRepair",`${ml+za}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in Vc&&!Vc.dialogIsClosed()||(Y_("insertQuickWear"),zg(ov))}],["y",Q_]]
const um=[e=>["HTML","BODY"].every(t=>e.target.tagName!==t),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function dm(e){var t;(t=e,um.some(e=>e(t)))||function(e){const t=cm.find(([t])=>e===t)
t&&t[1](t[2])}(e.key)}function fm(){Gc(document,"keyup",dm)}function hm(e,t){return sg(t)===e}function pm(e){return ag(hm,e)}function gm(e,t,n){Gc(e,"click",t,n)}function vm(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function _m(e,t){return tg(vm(e,t))}function mm(e){gm(e,()=>{Ig("chrome","Game Help link")}),Ug(`<a href="${Wa}settings">Game Help</a>`,e)}function bm(){_m("#pCR h3").filter(pm("Game Help")).forEach(mm)}function ym(e){Vc[e]=yc(e)}function wm(e,t){if(t instanceof Element)return t.closest(e)}function km(e){e?.classList&&e.classList.add("fshHide")}function Sm(e){const n=wm("a",e.target)
n?.getAttribute("href")===ll&&(Ig("useNewGuildLog","Alter Href"),e.preventDefault(),Xg(),km(t("notification-guild-log")))}function xm(){return Vc.huntingMode&&window.realmKeyHandler}function Em(e){e.forEach(e=>lu(3,e))}function Cm(){return q_({cmd:"guild",subcmd:"manage"})}function Tm(e){return wm("tr",e)}function Pm(e,t){return a(e,t)?.groups??{}}function $m(e){const{d:t,h:n,m:r,s:i}=Pm(Fa,e),s=Number(t),o=Number(n)+24*s,a=Number(r)+60*o,l=Number(i)+60*a
return{day:t,days:s,hour:n,hours:o,min:r,mins:a,sec:i,secs:l,timestamp:ka()-l}}function Lm(e){if(e?.href)return Number(l(ja,e.href))}function Im(e,t){if(t){const n=new Set
return e.filter(e=>n.has(e[t])?0:n.add(e[t]))}return tg(new Set(e))}const Mm=e=>Number(sg(Tm(e)?.cells[4])?.replaceAll(",","")),Om=e=>sg(Tm(e)?.cells[3]),Rm=e=>Number(l(Da,e))
function Am(e){return{guild_xp:Mm(e),id:Lm(e),name:sg(e),rank:Om(e)}}function Fm(e){const{stam:t,max:n}=Pm(Na,e)
return{current_stamina:Number(t),last_activity:$m(e).timestamp,level:Number(l(/Level:.+?(?<l>\d+)/,e)),max_stamina:Number(n),vl:Rm(e)}}function jm(e){return{guild_id:Rg(),image_version:0,xp:-1,...Am(e),...Fm(e.dataset.tipped)}}function Nm(e,t,n){return{id:n,members:e.filter(e=>e.rank===t.rank),name:t.rank,permissions:0,tax:-1}}async function Dm(){const e=B_(await Cm()).getElementById("pCC")
if(!e)return{e:{code:0,message:"Failure"},s:!1}
const t=_m(hc,e).map(jm)
return{r:Im(t,"rank").map(ag(Nm,t)),s:!0}}function Bm(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function qm(){return Tc(window.jQuery)}function Hm(e){return Object.keys(e)}function Um(e){return Math.floor(Math.max(0,ka()-e)/86400)}function Gm(e){return Number.isNaN(e)}const Wm=0,zm=1,Vm=2,Qm=3,Jm=4,Km=5,Ym=6,Xm="fsh_guildActivity"
function Zm(e){return _v({guild_id:e,subcmd:"guild_members"})}function eb(e){return Promise.all(e)}function tb(e){let t=e.toString()
return e<10&&(t=`0${t}`),t}function nb(e){return`${e[0]}-${e[1]}-${e[2]} ${e[3]}:${e[4]}:${e[5]}`}function rb(e){return"[object Date]"===Object.prototype.toString.call(e)&&!Gm(e.getTime())}function ib(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(tb)}(e))}function sb(e){if(rb(e))return nb(ib(e))}async function ob(){return await e_(Xm)??{lastUpdate:0,members:{}}}const ab=e=>sb(new Date(1e3*e)),lb=e=>[e[0],e[1],e[2],e[3],ab(e[4]),e[5],e[6]]
function cb(e){const{lastUpdate:t,members:n}=e
var r
return`Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n${Ag(n).flatMap((r=ab(t),([e,t])=>t.map(lb).map(t=>[r,e,...t].join(",")))).join("\n")}`}const ub=[e=>e.getFullYear().toString(),e=>e.getMonth()+1,e=>e.getDate(),e=>e.getHours(),e=>e.getMinutes(),e=>e.getSeconds()]
async function db(e,t){const n=await ob()
if(!n.lastUpdate||!n.members)return
const r=e(n),i=new Blob([r],{type:t}),s=`${o=ub.map((e=>t=>t(e))(new Date)).map(tb),`${o[0]}${o[1]}${o[2]}${o[3]}${o[4]}${o[5]}`}_GuildTracker.${t.split("/")[1]}`
var o
wv(i,s)}async function fb(e){const t=await ob(),n={lastUpdate:t.lastUpdate,members:Bm(Ag(t.members).filter(([t])=>t!==e))}
t_(Xm,n)}async function hb(e){const t=await ob(),n={lastUpdate:t.lastUpdate,members:Bm(Ag(t.members).map(([t,n])=>[t,n.filter(t=>t[4]>e)]))}
t_(Xm,n)}async function pb(){const[e,t]=await eb([ob(),Zm(Rg())]),n=t.map(({username:e})=>e)
return Hm(e.members).filter((e=>t=>!e.find(e=>e===t))(n)).sort(Z_)}const gb=e=>[e.name,[Um(e.last_activity),e.current_stamina,e.level,e.max_stamina,ka(),e.vl,e.guild_xp]],vb=e=>e.members.map(gb),_b=[e=>!e,(e,t)=>e[1]!==t[1],(e,t)=>e[2]!==t[2],(e,t)=>e[3]>t[3],(e,t)=>e[5]!==t[5],(e,t)=>e[6]!==t[6]],mb=e=>!e.some(Ca),bb=e=>!e.some(Gm),yb=([,e])=>e.length,wb=([e,t])=>[e,t.filter(mb).filter(bb)],kb=(e,t)=>e[4]>t[4]?e:t,Sb=([e,t])=>[e,t.reduce(kb)],xb=([e,t])=>[e,[t]],Eb=(e,t,n)=>{return((e,t,n)=>({lastUpdate:ka(),members:Bm(Hm({...e,...t,...n}).map(r=>[r,[...e[r]??[],...t[r]??[],...n[r]??[]]]))}))(Bm(e.map((e=>([t,n])=>[t,n.filter(n=>n[4]!==e[t][4])])(t))),Bm(Ag(t).filter((r=n,([e,t])=>_b.some(n=>n(r[e]?.[0],t)))).map(xb)),n)
var r}
function Cb(e,t){const n=Ag(e.members||{}).map(wb).filter(yb)
const r=Bm(n.map(Sb)),i=(e=>e.r.flatMap(vb))(t).filter((e=>([t])=>!e[t]||ka()-e[t][4]>=86100)(r))
i.length?function(e,t,n){e&&t&&n&&t_(Xm,Eb(t,n,Bm(e.map(xb))))}(i,n,r):function(e){e&&t_(Xm,{lastUpdate:ka(),members:Bm(e)})}(n)}function Tb(e){(e=>ka()>Jc(e.lastUpdate,0)+300)(e)&&async function(e){const t=await Dm()
t.s&&Cb(e,t)}(e)}function Pb(){return!qm()}function $b(e){return Ng("li",e)}function Lb(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function Ib(e,t){if(t instanceof Node&&t.parentNode instanceof Node)return function(e,t){return t.nextSibling instanceof Node?Lb(e,t.nextSibling):Hg(t.parentNode,e)}(e,t)}const Mb=["Buff Log","Combat Logs","Creature Logs","Quick Links","Recipe Manager","New Guild Log"]
function Ob(e,t){Ig("accordion",e),Mb.includes(e)?t():zg(t)}function Rb(e,t,n,r){const i=function(e,t,n){const r=$b({className:`nav-level-${e}`}),i=bv({className:"nav-link fshPoint",textContent:t})
return Hg(r,i),Ib(r,n.parentNode),i}(e,t,r)
Tc(n)?gm(i,ag(Ob,t,n)):(i.href=n,gm(i,()=>Ig("accordion",t)))}const Ab=[[e=>e.recipeManagerLink,"1","Recipe Manager",av,"nav-character-log"],[e=>e.inventoryManagerLink,"1","Inventory Manager",`${il}invmanagernew`,"nav-character-log"],[e=>e.medalGuideLink,"1","Medal Guide",`${Xa}${za}medalguide`,"nav-character-log"],[e=>e.buffLogLink&&yc("keepBuffLog"),"1","Buff Log",Qg,"nav-character-log"],[e=>e.combatLogLink&&yc("keepLogs"),"1","Combat Logs",Jg,"nav-character-notepad"],[e=>e.creatureLogLink&&yc("showMonsterLog"),"1","Creature Logs",Kg,"nav-character-notepad"],[e=>e.quickLinksLink,"1","Quick Links",sv,"nav-character-notepad"],[e=>e.auctionSearchLink,"2","AH Quick Search",ev,"nav-actions-trade-auctionhouse"],[e=>e.onlinePlayersLink,"2","Online Players",rv,"nav-actions-interaction-findplayer"],[e=>e.findOtherLink,"2","Find Other",nv,"nav-actions-interaction-findplayer"],[e=>e.findBuffsLink,"2","Find Buffs",tv,"nav-actions-interaction-findplayer"],[e=>e.guildInventoryLink&&Rg(),"2","Guild Inventory",`${il}guildinvmgr`,"nav-guild-storehouse-inventory"],[e=>e.newGuildLogLink&&Rg()&&!yc("useNewGuildLog"),"2","New Guild Log",Xg,"nav-guild-ledger-advisor"],[e=>e.topRatedLink,"2","Top 250 Players",`${Wa}toprated${za}xp`,"nav-toprated-players-level"]]
function Fb(e){Ab.forEach(([n,r,i,s,o])=>{n(e)&&function(e,n,r,i){const s=t(i)
s instanceof Node&&Rb(e,n,r,s)}(r,i,s,o)})}const jb=e=>22*_m("li",e).length||null
function Nb(e,t,n){Fb(n),function(e,t){t.heights=_m("#nav > li").map(jb)
const n=Number(t.state)
n&&n>-1&&n<e.children.length&&(e.children[t.state].children[1].style.height=`${t.heights[t.state]}px`)}(e,t)}var Db=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function Bb(e){return function(e){return-1!==e&&0===Lc(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?(Ig("accordion","collapse"),-1):e}const qb=(e,t,n)=>$(e).data(`${n}${t}`)
function Hb(e,t,n){return new Promise(r=>{const i=qb(e,t,n)
i?r(i):function(e,t,n,r){$(e).on(`${X_(t)}create`,()=>{r(qb(e,t,n))})}(e,t,n,r)})}const Ub=[[e=>!Pc(e),()=>zc("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>zc("$('#nav').data('hcsNav').heights does not exist")]]
async function Gb(){const e=t("nav"),n=await Hb(e,"Nav","hcs")
return function(e){const t=Ub.find(([t])=>t(e))
return!t||(t[1](),!1)}(n)?{theNav:e,myNav:n}:{}}function Wb(){!function(){const e=yc("lastActiveQuestPage")
yc("storeLastQuestPage")&&e.length>0&&(t("nav-character-questbook").href=e)}(),function(){const e=yc("lastScavPage")
yc("storeLastScavPage")&&e.length>0&&(t("nav-actions-artisanship-scavenging").href=e)}()}async function zb(){const{theNav:e,myNav:t}=await Gb()
e&&t&&(Wb(),function(e,t){const n=Db.map(e=>[e,yc(e)])
n.some(([,e])=>e)&&Nb(e,t,Bm(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,Bb(n))}}(t))}function Vb(e){return q_({cmd:"bounty",page:e})}function Qb(e){return e()}function Jb(e,t){Ec(e,Wc(t))}let Kb=0,Yb=0
const Xb=()=>Kb,Zb=()=>Yb
function ey(){return Dg({className:"minibox"})}function ty(e){return Ng("span",e)}function ny(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function ry(e,t){ny(e,"beforeend",t)}function iy([e,t,n,r,i]){const s=e(),o=n()
if(o)return Jb(t,o),Ug("",s),function(e,t,n,r){const i=Dg({innerHTML:`<a class="fshBountyHeader" href="${xl}">${n} Bounties</a> `}),s=ty({className:"xxsLink",textContent:"Reset"})
return Hg(i,s),Hg(e,i),ry(e,function(e,t,n){const r=e.bounty
return 0===r.length?`<div class="xsOrange">[No ${t.toLowerCase()} bounties]</div>`:r.map(n).join("")}(t,n,r)),s}(s,o,r,i)}function sy(e,t){return`<a href="${e.link}" class="xsKhaki tip-static" data-tipped="${t(e)}">${e.target}</a><br>`}function oy(e,t){if("string"==typeof t){const e=a(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function ay(e){const t=yc(e)
if(t)return $c(t,oy)}function ly(e){return e.split(",").map(ig)}function cy(e){const t=yc(e)
return t?ly(t):[]}function uy(e){return Lc("img",e[2]).title}function dy(e){const t="A"===(r=e[0]).children[0].tagName?r.children[0]:r.children[0].children[0]
var r
return{target:n(t),link:t.href,lvl:n(t.nextSibling).replace(/[[|\]]/g,""),reward:n(e[2]),rewardType:uy(e),xpLoss:n(e[3]),posted:n(e[4])}}let fy=0,hy={},py={},gy=!1,vy=!1,_y=[]
const my=()=>hy,by=()=>py,yy=()=>_y
function wy(e){return{...dy(e),progress:n(e[5])}}function ky(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=wy(e.rows[t].cells)
hy.bounty.push(n)}}(e)}function Sy(e,t){return function(e){if(e)return hy&&ka()-hy.lastUpdate>fy}(e)||function(e){if(e)return py&&ka()-py.lastUpdate>fy}(t)}let xy=0
function Ey(e){return`Level:  ${e.lvl}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Progress:  ${e.progress}`}function Cy(e){return sy(e,Ey)}function Ty(){xy=iy([Xb,"bountyList",my,"Active",Cy])}let Py=0
function $y(e){return`Target Level:  ${e.lvl}<br>Offerer: ${e.offerer}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Posted: ${e.posted}<br>Tickets Req.:  ${e.tickets}`}function Ly(e){return e.accept?`<span class="xsGreen" onclick="${e.accept}">[a]</span>&nbsp;`:""}function Iy(e){return[Ly(e),sy(e,$y)].join("")}function My(){Py=iy([Zb,"wantedList",by,"Wanted",Iy])}function Oy(e){const t=e[6]
return"[n/a]"!==sg(t)?t.children[0].children[0].getAttribute("onclick"):""}const Ry=[()=>yy().includes("*"),e=>yy().includes(e),(e,t)=>Vc.wantedGuildMembers&&"[n/a]"===sg(t.cells[6])]
function Ay(e,t){var n;(function(e,t){return"[active]"!==sg(t.cells[6])&&Ry.some(n=>n(e,t))})(e,t)&&by().bounty.push({...dy(n=t.cells),offerer:sg(n[1].children[0].children[0]),tickets:sg(n[5]),accept:Oy(n)})}let Fy=0,jy=0
function Ny(e){const n=Lc('#pCC input[name="page"]',e)
if(!n)return
Fy=Number(n.value),jy=Number(l(/of&nbsp;(?<of>\d*)/,n.parentNode.innerHTML))
const r=t("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
r&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],r=sg(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===r)break
Ay(r,n)}}(r)}function Dy(e){Vc.enableActiveBountyList&&!gy&&(!function(e){const n=t("bounty-info",e)
if(!n)return
const r=n.parentNode.parentNode.previousElementSibling.children[0].children[0]
hy={},hy.bounty=[],hy.isRefreshed=!0,hy.lastUpdate=ka(),r&&ky(r),gy=!0}(e),Ty())}async function By(e){const t=B_(e)
if(Dy(t),Vc.enableWantedList)if(Ny(t),Fy<jy){By(await Vb(Fy+1))}else My()}const qy=[()=>!my(),()=>!by(),()=>vy]
async function Hy(){if(function(e,t){hy=ay("bountyList"),py=ay("wantedList"),fy=yc("bountyListRefreshTime"),vy=yc("bwNeedsRefresh"),vy||Sy(e,t)&&(vy=!0)}(Vc.enableActiveBountyList,Vc.enableWantedList),qy.some(Qb)){py={},py.bounty=[],py.isRefreshed=!0,py.lastUpdate=ka(),gy=!1,_y=cy("wantedNames"),Ec("bwNeedsRefresh",!1)
By(await Vb(1))}else!function(e,t){t&&(by().isRefreshed=!1,My()),e&&(my().isRefreshed=!1,Ty())}(Vc.enableActiveBountyList,Vc.enableWantedList)}function Uy(e,t){Ig("activeWantedBounties",e),Jb(t,null),Hy()}function Gy(e){e.target===xy&&Uy("getBountyListReset","bountyList"),e.target===Py&&Uy("getWantedListReset","wantedList")}function Wy(e,t){return _v({subcmd:"profile",player_username:e,...t&&{_:_a()}})}async function zy(e){const t=await Wy(s(),e),n=t?.username===s(),r=n?{...t,lastUpdate:ba()}:t
return n&&t_("fsh_selfProfile",r),r}function Vy(e){return(e=>ba()-Vc.allyEnemyOnlineRefreshTime<e?.lastUpdate)(e)?e:zy()}async function Qy(e){if(e)return zy(e)
return Vy(await e_("fsh_selfProfile"))}function Jy(e,t){return t?.classList?.contains(e)}function Ky(e,t){return Jy(t[0],e)}function Yy(e,t,n){const{target:r}=n,i=t.find(ag(e,r))
if(i)return i[1](r)}function Xy(e){return ag(Yy,Ky,e)}function Zy(e){return cu(e,"player_id")}function ew(e,t,n){return Math.floor(Math.max(e-t,0)/2+n)}function tw(e,t,n,r,i){let s=r
500===r&&(s=1e3)
const o=ew(window.screen.availHeight,s,window.screenY),a=ew(document.documentElement.clientWidth,n,window.screenX)
window.open(e,t,`width=${n}, height=${s}, left=${a}, top=${o}${i}`)}function nw(e,t){let n=""
t&&(n=`&blist=${t}`),tw(`${bl}&t=${e}${n}`,"fsQuickBuff",618,1e3,",scrollbars")}function rw(e){let t=e,n=Math.floor(t/60)
t%=60
let r=Math.floor(n/60)
n%=60
const i=Math.floor(r/24)
return r%=24,[i,r,n,t]}function iw(e,t){return 0===e?"":String(e)+t}function sw(e){const t=rw(Math.abs(ka()-e))
return`${iw(t[0]," days, ")+iw(t[1]," hours, ")+iw(t[2]," mins, ")+t[3]} secs`}const ow="enemy-buff-check-on",aw="enemy-buff-check-off",lw="enemy-send-message",cw="enemy-quickbuff",uw="enemy-quick-buff",dw=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function fw(e,t){return t[0](ka()-e)}function hw(e,t){return`<a class="player-name tip-static ${function(e,t){const n=dw.find(ag(fw,e))
return n?function(e,t){return e?t[1]:t[2]}(t,n):"fshWhite"}(e.last_login,t)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${sw(e.last_login)}</td></tr></tbody></table>" href="${Za}${e.id}">${e.username}</a>`}function pw(e){return ka()-e.last_login<1800}function gw(e,t){return`<li class="player"><div class="player-row">${Vc.hideBuffSelected?"":`<span class="${ow}"></span>`}${hw(t,e)}</div><div class="guild-minibox-actions">${Vc.hideGuildInfoMessage?"":`<span class="${lw} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}${Vc.hideGuildInfoBuff?"":`<span class="${cw} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}${function(e){return Vc.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${nl}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return Vc.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${tl}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function vw(e,t){return e.filter(pw).map(ag(gw,t)).join("")}const _w=[(e,t)=>e.length+t.length,(e,t)=>{if(!Vc.enableAllyOnlineList)return t.length},e=>{if(!Vc.enableEnemyOnlineList)return e.length}]
function mw(e){Ig("allyEnemy",e)}function bw(e,t,n){return 0===n(e,t)}function yw(e){const n=Jc(e._allies,[]),r=Jc(e._enemies,[]);(function(e,t){return _w.every(ag(bw,e,t))})(n,r)||function(e,n){let r=""
Vc.enableAllyOnlineList&&(r+=vw(e,!0)),Vc.enableEnemyOnlineList&&(r+=vw(n,!1))
const i=t("fshContactList")
Ug("",i),ry(i,r)}(n,r)}function ww(e){mw("toggleBuffSelected"),e.classList.toggle(ow),e.classList.toggle(aw)}const kw=[[ow,ww],[aw,ww],[lw,function(e){mw("msgPlayer"),window.openQuickMsgDialog(n(e.parentNode.previousElementSibling.lastElementChild))}],[cw,function(e){mw("buffPlayer"),nw(Zy(e.parentNode.previousElementSibling.lastElementChild.href))}],[uw,function(){mw("selectedBuff"),nw(qg(ow,t("fshContactList")).map(e=>Zy(e.nextElementSibling.href)).join(","))}]]
function Sw(e){const{target:t}=e
"fshResetEnemy"!==t.id?Xy(kw)(e):async function(){mw("resetList"),yw(await Qy(!0))}()}function xw(e){const t=Dg({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>'
Vc.hideBuffSelected||(n+=`<ul class="${uw}">Quick Buff Selected</ul>`),n+="</div></div>",ry(t,n),Hg(dg(),t),gm(t,Sw),yw(e)}function Ew(e){if(e?.length)return n(e[0].nextElementSibling)}function Cw(e){return e?Number(e.replace(/,/g,"")):0}function Tw(e){return Cw(Ew(Bg(e)))}function Pw(e,t){const n=e?.split(" ").map(e=>e.slice(0,-1))
var r
if(n)return`<dd>${r=new Date(ba()+1e3*(60*(60*t+Number(n[0]))+Number(n[1]))),`${tb(r.getHours())}:${tb(r.getMinutes())} ${r.toLocaleString("en",{weekday:"short"})} ${tb(r.getDate())}/${Ma[r.getMonth()]}/${r.getFullYear()}`}</dd>`}function $w(e,t,n){e.target===ah(t)&&n.close()}var Lw=Sh("<div><!></div>")
function Iw(e,t){sd(t,!0)
let n,r,i,s=Bp(t,"visible",3,!0),o=Wd(void 0)
_f(()=>{s()?document.body.classList.contains("noscroll")||(n=!0,r=window.scrollY,i=document.body.style.top,document.body.classList.add("noscroll"),document.body.style.top=`-${r}px`):n&&(document.body.classList.remove("noscroll"),document.body.style.top=i||"",window.scrollTo(0,r))})
var a=Lw()
let l
a.__click=[$w,o,t],Uh(lf(a),()=>t.children??Su),Cp(a,e=>Vd(o,e),()=>ah(o)),wf(e=>l=Yh(a,0,"svelte-5b5wnh",null,l,e),[()=>({visible:s()})]),Ch(e,a),od()}let Mw
mh(["click"])
var Ow=Sh('<div role="dialog" aria-modal="true"><!></div>')
function Rw(e,t){sd(t,!0)
let n,r=Bp(t,"modal",15),i=Bp(t,"visible",3,!0)
_f(()=>{i()?(Vc.dialogIsClosed&&(n=Vc.dialogIsClosed),Vc.dialogIsClosed=()=>!i()):n&&(Vc.dialogIsClosed=n)}),Iw(e,{get close(){return t.close},get visible(){return i()},children:(e,n)=>{!function(e,t){sd(t,!0)
let n=Bp(t,"modal",15),r=Bp(t,"visible",3,!0),i=bd(r),s=Wd(void 0),o=Wd(void 0)
const a=e=>e.tabIndex>=0&&e.offsetWidth>0&&e.offsetHeight>0&&!e.disabled
_f(()=>{r()?(Vd(s,document?.activeElement,!0),n()&&(Vd(o,Mw,!0),Mw=n())):(ah(s)?.focus(),n()&&(Mw=ah(o)))})
var l=Ow()
let c
_h("keydown",ef,function(e){if(r())if("Escape"!==e.key||Mw!==n()){if("Tab"===e.key){const t=_m("*",n()).filter(a)
let r=t.indexOf(document.activeElement);-1===r&&e.shiftKey&&(r=0),r+=t.length+(e.shiftKey?-1:1),r%=t.length,t[r].focus(),e.preventDefault()}}else t.close()}),Uh(lf(l),()=>t.children??Su),Cp(l,e=>n(e),()=>n()),wf(e=>c=Yh(l,0,"ui-dialog svelte-61qae0",null,c,e),[()=>({modalVisible:ah(i)})]),Ch(e,l),od()}(e,{get close(){return t.close},get visible(){return i()},get modal(){return r()},set modal(e){r(e)},children:(e,n)=>{var r=Eh()
Uh(cf(r),()=>t.children??Su),Ch(e,r)},$$slots:{default:!0}})},$$slots:{default:!0}}),od()}function Aw(e,t,n){t(!1),n.resolve(!0)}var Fw=Sh('<div class="svelte-1gd1a38"> </div> <div class="svelte-1gd1a38"><button type="button" class="svelte-1gd1a38">Yes</button> <button type="button" class="svelte-1gd1a38">No</button></div>',1)
function jw(e,t){sd(t,!0)
let n=Bp(t,"msg",3,"Are you sure?"),r=Bp(t,"visible",15,!0)
function i(){r(!1),t.resolve(!1)}Rw(e,{close:i,get visible(){return r()},children:(e,s)=>{var o=Fw(),a=cf(o),l=lf(a),c=lf(uf(a,2))
c.__click=[Aw,r,t],uf(c,2).__click=i,wf(()=>Ph(l,n())),Ch(e,o)},$$slots:{default:!0}}),od()}mh(["click"])
const Nw=Yd({visible:!0})
let Dw=null
function Bw(e){Nw.resolve=e,Dw?Nw.visible=!0:Dw=$h(jw,{props:Nw,target:document.body})}function qw(e){return Nw.msg=e,new Promise(Bw)}async function Hw(e){if("daily-quest-reroll-button"!==e.target.id)return
e.stopPropagation()
await qw("Are you sure you want to re-roll the Daily Quest?")&&async function(){const e=t("minibox-daily-quest")
if(!e)return
Ig("dailyQuest","reroll")
const n=await H_({cmd:"dailyquests",subcmd:"reroll"})
if(!n)return
const r=t("minibox-daily-quest",n)
r&&e.replaceWith(r)}()}function Uw(e){return Ng("button",{...e,type:"button"})}function Gw(e,t){ry(e,t)}function Ww(){Ig("fsbox","open log"),Yg()}function zw(e,t){const n=ty({className:`fsh-fsbox ${e}`,textContent:"[ "})
return Hg(n,t),Gw(n," ]"),n}function Vw(e){const t=Lc(hc,e)
t&&(function(e,t){const r=bv({href:`${Ya}${n(t)}`,textContent:"Ignore"})
gm(r,()=>Ig("fsbox","ignore link")),Hg(e,zw("fs-box-ignore",r))}(e,t),async function(e){const t=await e_("fsh_fsboxcontent")??"",n=ig(Lc(".message",e).innerHTML)
if(t.includes(n))return
t_("fsh_fsboxcontent",`<br>${n}${t}`.slice(0,9999))}(e))}function Qw(e){e.classList.add("fshRelative"),function(e){const t=Uw({textContent:"Log"})
gm(t,Ww),Hg(e,zw("fs-box-log",t))}(e),Vw(e)}function Jw(e,t){t instanceof Node&&(t.textContent=String(e))}let Kw=null
function Yw(){return Kw||(Kw=t("quickMessageDialog")),Kw}let Xw=0
function Zw(e){(function(){if(!Xw){const e=Bg("validateTips",Yw())
1===e.length&&([Xw]=e)}return Xw})()&&Jw(Jc(e,""),Xw)}let ek=null
function tk(){return ek||(ek=t("quickMsgDialog_msg"),ek.maxLength=512),ek}let nk=null,rk=0,ik=0
function sk(e){"Enter"!==e.key||e.shiftKey||(Ig("messaging","sendOnEnter"),e.preventDefault(),function(){if(!ik){const e=$(Yw()).dialog("option","buttons")
ik=e["Send Message"]}return ik}()())}function ok(){Ca(nk)&&(nk=yc("enterForSendMessage")),nk&&!rk&&(Gc(tk(),"keypress",sk),rk=!0)}let ak=null
let lk=0,ck=0,uk=0
function dk(e,t,n){const r=ck.insertRow(e)
let i=r.insertCell(-1)
ry(i,t),i=r.insertCell(-1),ry(i,n)}function fk(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function hk(e,t){dk(e,fk("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const pk=[["del-button",function(e){Ig("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
ck.deleteRow(t),lk.splice(t-2,1),Jb("quickMsg",lk)}],["add-button",function(e){Ig("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){hk(e.parentNode.parentNode.rowIndex,n),t.value="",lk.push(n),Jb("quickMsg",lk)}}],["add-template",function(e){Ig("messaging","insertTemplate"),tk().value+=`${n(e).replace(/\{playername\}/g,ak)}`}]]
function gk(e){hk(-1,e)}function vk(){yc("enableMessageTemplates")&&!uk&&(gm((ck||(ck=Yw().lastElementChild),ck),Xy(pk)),(lk||(lk=ay("quickMsg")),lk).forEach(gk),dk(-1,fk("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),uk=!0)}function _k(e,n,r){const i=Yw()
Jy("ui-dialog-content",i)&&(!function(e){ak=e,Jw(e,t("quickMsgDialog_targetUsername"))}(e),function(e){const t=tk()
t.value=Jc(e,""),t.disabled=!1}(n),Zw(r),vk(),ok(),$(i).dialog("open"))}function mk(e){return F_({cmd:"composing",...e})}function bk(){return mk({subcmd:"view"})}function yk(){return D_(bk)}function wk(e,n,r){const i=$b({className:"notification"}),s=bv({href:r,innerHTML:`<span class="notification-icon"></span><p class="notification-content">${n}</p>`})
gm(s,()=>{Ig("notification",e)}),Hg(i,s),Hg(t("notifications"),i)}function kk(){wk("composing","Composing to do",yl)}function Sk(e){return e.time_remaining}function xk(){kk(),Ec(zl,!0)}function Ek(e){const t=e.h.p.find(({k:e})=>52===e)?.v
e.r.potions.length!==t?xk():function(e){const t=Math.min.apply(null,e.map(Sk))
t>0?(Ec(zl,!1),Ec(Vl,ba()+1e3*t)):xk()}(e.r.potions)}function Ck(){yc(zl)?kk():async function(){const e=yc(Vl)
if(e&&ba()<e)return
const t=await yk()
t?.s&&Ek(t)}()}function Tk(e){return F_({cmd:"guild",...e})}function Pk(e){return Tk({subcmd:"groups",...e})}function $k(e){return Pk({subcmd2:"joinall",group:e})}function Lk(e){return D_($k,0,e)}function Ik(){return Pk({subcmd2:"view"})}function Mk(){return D_(Ik)}function Ok(e,t){ah(t)||(e.preventDefault(),Ig("notification","Join All"),Vd(t,1))}var Rk=Sh('<p class="notification-content" style="line-height: 32px;">Joined.</p>'),Ak=Sh('<span class="notification-content fshSpinner fix-classic-theme svelte-44dw92"></span>'),Fk=Sh('<p class="notification-content"><button type="button" class="svelte-44dw92"> </button></p>'),jk=Sh('<a><span id="notification-icon-guild-group" class="notification-icon"></span> <!></a>')
function Nk(e,t){sd(t,!0)
let n=Wd(0),r=Wd(Yd(hl)),i=Wd("")
const o=e=>!Vc.enableMaxGroupSizeToJoin||e.members.length<Vc.maxGroupSizeToJoin,a=e=>e.name===s(),l=e=>!e.members.find(a),c=e=>e.id
async function u(){const e=await Mk()
e?.s&&await async function(e){const t=e.r.filter(o).filter(l).map(c)
t.length&&await Lk(t)}(e)}Vc.enableMaxGroupSizeToJoin&&(Vd(r,pl,!0),Vd(i,` less than size ${Vc.maxGroupSizeToJoin}`))
var d=jk(),f=uf(lf(d),2),h=e=>{var t=Eh()
Oh(cf(t),u,e=>{Ch(e,Ak())},e=>{Ch(e,Rk())}),Ch(e,t)},p=e=>{var t=Fk(),r=lf(t)
r.__click=[Ok,n]
var s=lf(r)
wf(()=>Ph(s,`Join all attack groups${ah(i)??""}.`)),Ch(e,t)}
Rh(f,e=>{ah(n)?e(h):e(p,!1)}),wf(()=>op(d,"href",ah(r))),Ch(e,d),od()}function Dk(e){return F_({cmd:"temple",...e})}function Bk(e){return Dk({subcmd:"pray",type:e})}function qk(){return Dk({subcmd:"view"})}function Hk(e){$(e).qtip("hide")}mh(["click"])
let Uk=Element
const Gk=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${Wa}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
function Wk(e){Ec("needToPray",e),Ec("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}async function zk(e){const t=e.target.getAttribute("praytype")
t&&(Ig("notification","prayToGods"),Hk(e.target),await function(e){return D_(Bk,0,e)}(t),Uk.outerHTML='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',Wk(!1))}function Vk(){ry(t("notifications"),Gk),Uk=t("helperPrayToGods"),gg(Uk,"click",zk)}async function Qk(){if(!Vc.enableTempleAlert)return
const e="temple"===Vc.cmd?function(e){if(!e)return{s:!1}
const t=Lc("#pCC",e)
return t?{s:!0,r:{pray_index:"You are currently praying at the temple."===sg(t)?0:-1}}:{s:!1}}(document):await D_(qk)
if(!e.s)return
const t=-1===e.r.pray_index
t&&Vk(),Wk(t)}function Jk(){var e
!(e=yc("lastTempleCheck"))||ba()>e?Qk():yc("needToPray")&&Vk()}function Kk(){return e={subcmd:"goldupgrades"},F_({cmd:"points",...e})
var e}function Yk(e,t,n){if(e?.rows)return tg(e.rows).filter((e,r)=>e.children.length===t&&r>n)}function Xk(e,t){const n=Number(sg(e.cells[2]).split(" / ")[0]),r=sg(e.cells[3])
return{id:t,...!["-","n/a"].includes(r)&&{reset_time:Date.parse(`${r} GMT`)/1e3},current:Gm(n)?0:n}}function Zk(){return-1!==window.location.search.indexOf("cmd=points&type=1")}function eS(){Zk()||wk("stamina","Upgrade stamina with gold",`${ol}&type=1`)}async function tS(){if(Zk()&&function(){const e=vm('#pCC input[name="quantity"]')
e?.length<2||(e[0].value="100",e[1].value="10")}(),!Vc.enableUpgradeAlert)return
const e=Zk()?function(e){if(!e)return{s:!1}
const t=Lc("#pCC > table",e)
return t?{s:!0,r:Yk(t,5,0).map(Xk)}:{s:!1}}(document):await D_(Kk)
Ta(e?.r?.[1]?.current)||function(e){10!==e.current?(eS(),Ec("needToDoUpgrade",!0)):(Ec("needToDoUpgrade",!1),Ec("lastUpgradeCheck",1e3*e.reset_time))}(e.r[1])}function nS(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?Lb(t,e.firstChild):Hg(e,t)}(e,t)}function rS(e,t){t.stopPropagation(),Ig("chrome","statbar",e)}function iS(e,n){const r=t(`statbar-${n}`)
if(!r)return
const i=bv({href:e}),s=r.parentNode
Hg(i,r),nS(s,i),gm(i,ag(rS,n),!0)}function sS(e,t){qg("player-name",e).forEach(t)}const oS=/Last Activity:<\/td><td>(?<mins>\d+) mins/
function aS(e,t){const n=e.dataset.tipped,r=l(oS,n)
r<2?e.classList.add(t.l1):r<5?e.classList.add(t.l2):e.classList.add(t.l3)}const lS=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function cS(e,t){lS.forEach(n=>{Vc[n[0]]&&tg(vm(n[t],e)).forEach(km)})}function uS(e){e?.classList&&e.classList.add("fshInvisible")}function dS(e,n){Vc.hideBuffSelected&&(tg(Bg(`${n}-buff-check-on`,e)).forEach(uS),uS(t(`${n}-quick-buff`)))}function fS(e){aS(e,{l1:"fshGreen",l2:"fshWhite",l3:"fshGrey"})}function hS(e,t,n){_m(`#pCR h${e}`).filter(pm(t)).forEach(e=>{const r=bv({href:`${al}${n}`,textContent:t})
gm(r,()=>{Ig("widgets",`guild ${n}`)}),e.replaceChild(r,e.firstChild)})}function pS(e){aS(e,{l1:"fshDodgerBlue",l2:"fshLightSkyBlue",l3:"fshPowderBlue"})}function gS(e){const n=t(e)
n&&(n.classList.add("pCR"),Hg(dg(),n))}function vS(e){const n=t(e)
n&&nS(hg(),n)}function _S([e,t,n,r,i]){return Date.UTC(Number(e),Ma.indexOf(t),Number(n),Number(r),Number(i),0)}function mS(e){if(e?.src)return e.src.split("/").at(-1).split(".")[0]}function bS(e){return Ag(e?.seData??{}).flatMap(([t,n])=>Qc(n)?n.map(([n,r,i,s,o,a,l=-1])=>[n,t,r,i,e?.realms[s],o,a,l]):[[n,t.replaceAll(" ","_"),0,"","","",""]])}const yS=e=>e.join("|"),wS=e=>e.split("|")
function kS(e){const{time:t,creature:n,playerId:r,playerName:i,location:s,drop:o,creatureId:a}=e,l=s.match(/^(.*?)\s(\(\d+, \d+\))$/)
return[t,n.replace(" (Super Elite)","").replaceAll(" ","_"),r,i,l?l[1]:"realm unknown",l?l[2]:"coordinates unknown",o,a]}function SS(e,t){const n=((e,t)=>Im(e.map(yS).concat(t.map(yS))).map(wS).map(([e,t,n,r,i,s,o,a])=>[Number(e),t,Number(n),r,i,s,o,Number(a)]).sort(([e],[t])=>t-e))(t.map(kS),bS(e)),r=Im(n.map(([,,,,e])=>e)).sort(Z_),i=(e=>t=>Bm(Im(t.map(([,e])=>e)).map(n=>[n,t.filter(([,e])=>e===n).map(([t,,n,r,i,s,o,a])=>[t,n,r,e.findIndex(e=>e===i),s,o,a]).slice(0,10)])))(r)(n)
return{seData:i,realms:r}}const xS=Ip()
let ES=!1,CS={},TS=0,PS=!1
const $S=e=>Math.max(0,600-(ma()-(e?.lastUpdate??0)),600-(ma()-TS))
function LS(e){const t=e.replace("<br>"," ").split(/[: /]/)
return _S([t[2],t[1],t[0],t[3],t[4]])}function IS(e){const t=tg(e.childNodes).filter(e=>e.nodeType===Node.TEXT_NODE&&""!==sg(e))
return 0===t.length?"":t.map(e=>sg(e)).join(" ")}const MS=e=>({time:LS(e.cells[0].innerHTML)/1e3,creature:sg(e.cells[1]),creatureId:Number(l(Ba,Lc("img",e.cells[1]).src)),playerId:Lm(Lc("a",e.cells[2])),playerName:sg(Lc("a",e.cells[2])),location:IS(e.cells[2]),drop:mS(Lc("img",e.cells[3]))??"no drop"})
async function OS(){TS=ma()
const e=await async function(){const e=await H_({cmd:"superelite"})
return e&&Lc('img[src*="eliteslayerlog"]',e)?Yk(Lc("#pCC table table",e),4,0).map(MS):[]}()
e?.length&&(CS=SS(CS,e),t_("fsh_seLog",{lastUpdate:TS,...CS}),xS.set(CS))}function RS(e,t){PS=t,e(PS),PS&&!ES&&async function(){for(ES=!0,CS=await e_("fsh_seLog"),xS.set(CS);PS;)ES=!0,await cv(1e3*$S(CS)),PS&&await OS(),ES=!1}()}const AS=function(){const{subscribe:e,set:t}=Ip(0)
return{subscribe:e,set:ag(RS,t)}}()
const FS=[function(){yc("moveGuildList")&&vS("minibox-guild")},function(){yc("moveOnlineAlliesList")&&vS("minibox-allies")},function(){yc("moveXmasBox")&&gS("minibox-xmas")},function(){yc("moveDailyQuest")&&gS("minibox-daily-quest")},function(){yc("moveFSBox")&&gS("minibox-fsbox")},async function(){if(!Vc.enableAllyOnlineList&&!Vc.enableEnemyOnlineList||Pb())return
!function(e){e&&lu(3,xw,[e])}(await Qy(!1))},function(){!Vc.enableWantedList&&!Vc.enableActiveBountyList||Pb()||(Vc.enableActiveBountyList&&(Kb=ey(),Hg(dg(),Kb)),Vc.enableWantedList&&(Yb=ey(),Hg(dg(),Yb)),Xb()&&gm(Xb(),Gy),Zb()&&gm(Zb(),Gy),Hy())},function(){if(!Vc.enableGuildInfoWidgets)return
const e=t("minibox-guild-members-list")
e&&(cS(e,1),dS(e,"guild"),sS(e,fS),hS(4,"Chat","chat"),hS(3,"Guild","manage"))},function(){if(!Vc.enableOnlineAlliesWidgets)return
const e=t("minibox-allies-list")
e&&(cS(e,2),dS(e,"ally"),sS(e,pS))},function(){Vc.enableTempleAlert&&"temple"!==Vc.cmd&&!Pb()&&Jk()},function(){Vc.enableUpgradeAlert&&qm()&&!Zk()&&function(){if(yc("needToDoUpgrade"))return void eS()
const e=yc("lastUpgradeCheck");(!e||ba()>e)&&tS()}()},function(){Vc.enableComposingAlert&&"composing"!==Vc.cmd&&qm()&&Ck()},function(){dg()&&!Pb()&&zb()},function(){Pb()||(window.openQuickMsgDialog=_k)},function(){yc("statBarLinks")&&(iS(Xa,"character"),iS(`${ol+za}reserve`,"stamina"),iS(ml,"equipment"),iS(el,"inventory"),iS(ol,"fsp"),iS(`${Wa}bank`,"gold"))},function(){if(!yc("staminaCalculator"))return
const e=Bg("stat-stamina-nextGain")
if(0===e.length)return
const n=t("statbar-stamina-tooltip-stamina"),r=(e=>Ew(Bg("stat-name",e)).split(" / "))(n)
2===r.length&&ry(n,function(e,t){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${Pw(Ew(e),Math.floor((Cw(t[1])-Cw(t[0]))/Tw("stat-stamina-gainPerHour")))}`}(e,r))},function(){if(!yc("levelUpCalculator"))return
const e=Bg("stat-xp-nextGain")
0!==e.length&&ry(t("statbar-level-tooltip-general"),`<dt class="stat-xp-nextLevel">Next Level At</dt>${Pw(Ew(e),Math.ceil(Tw("stat-xp-remaining")/Tw("stat-xp-gainPerHour")))}`)},function(){if(!yc("fsboxlog"))return
const e=t("minibox-fsbox")
e&&Qw(e)},function(){yc("resizeQuickBuff")&&(window.openWindow=function(e,t,n,r,i){Ig("chrome","interceptQuickBuff"),tw(e,t,n,r,i)})},function(){if(!yc("joinAllLink"))return
const e=t("notification-guild-group")
e&&function(e){Ug("",e),$h(Nk,{target:e})}(e)},function(){if(!yc("addScoutTowerLink")||!Rg())return
const e=t("minibox-spoilsofwar")
if(!e)return
const n=e.children[1]
if(!n)return
const r=n.children[0]
ry(r,"&nbsp;"),Hg(r,function(){const e=bv({dataset:{tooltip:"View Scout Report"},href:cl,innerHTML:`<img id="fshScoutTower" src="${$a}structures/27.png">`})
return gm(e,()=>Ig("chrome","scout tower link")),e}())},async function(){if(qm()&&yc(Jl)){Tb(await ob())}},function(){qm()&&Vc.enableSeTracker&&AS.set(Vc.enableSeTracker)},function(){yc("dailyQuestReRoll")&&hg()&&gm(hg(),Hw,!0)}]
const jS=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function NS(){xm()||(jS.forEach(ym),Vc.allyEnemyOnlineRefreshTime=1e3*yc("allyEnemyOnlineRefreshTime"),Vc.useNewGuildLog&&(Gc(document.body,"click",Sm),Gc(document.body,"auxclick",Sm)),Em(FS))}function DS(e){const t=$c(e)
t?.["new-ui"]&&(yc("gameHelpLink")&&lu(3,bm),Vc.huntingMode=yc("huntingMode"),lu(3,fm),NS(),yc("hideHelperMenu")||lu(3,A_))}function BS(){const e=function(){const e=t("html")
if(e?.dataset)return e.dataset.hcs}()
e&&DS(e)}function qS(){qm()&&t("worldPage")&&window.GameData&&Vg(import("./newMap-Beu94zkm.js"))}const HS={"-":{"-":()=>{Vg(import("./arena-CZyb52Ik.js").then(function(e){return e.b}))}},dojoin:{"-":()=>{Vg(import("./arenaDoJoin-BklDsaGs.js"))}},join:{"-":()=>{Vg(import("./arenaJoin-zAZjjmDK.js"))}},completed:{"-":()=>{Vg(import("./completedArenas-BooEha5x.js"))}},pickmove:{"-":()=>{Vg(import("./storeMoves-jzu8omGf.js"))}},setup:{"-":()=>{Vg(import("./setupMoves-ehZPRrur.js"))}}}
var US={"-":{"-":()=>{Vg(import("./injectAuctionHouse-BRn0MrvZ.js"))}},quickcreate:{"-":()=>{Vg(import("./quickCreate-BNieeSpl.js"))}}}
var GS={"-":{"-":()=>{Vg(import("./composing-DMt8YtUk.js"))}},breakdown:{"-":()=>{Vg(import("./breakdown-DJGtjQ8V.js"))}},create:{"-":()=>{Vg(import("./composingCreate-Chin3xPC.js"))}}}
function WS(){Vg(import("./bioWidgets-CmZjadii.js"))}function zS(){Vg(import("./injectGuild--b-QywFF.js"))}const VS=()=>{Vg(import("./guildAdvisor-CB3Dj3Y0.js"))}
const QS=()=>{Vg(import("./groups-BCR0AwZe.js"))}
const JS=()=>{Vg(import("./addRemoveTags-BrxABkyY.js"))}
const KS=()=>{Vg(import("./guildChat-Kxgm7ve4.js"))}
var YS={inventory:{report:()=>{Vg(import("./guildReport-4TFOM0JF.js"))},addtags:JS,removetags:JS,storeitems:()=>{Vg(import("./storeitems-Dp7hA6HO.js"))}},chat:{"-":KS},dochat:{"-":KS},log:{"-":()=>{Vg(import("./guildLog-BCIeGQOc.js"))}},groups:{viewstats:()=>{Vg(import("./injectGroupStats-D-jMQX_E.js"))},joinallgroupsundersize:QS,joinall:QS,"-":QS},manage:{"-":zS},advisor:{"-":VS,weekly:VS},history:{"-":WS},view:{"-":zS},scouttower:{"-":()=>{Vg(import("./injectScouttower-CsqQRsxa.js"))}},mailbox:{"-":()=>{Vg(import("./guildMailbox-n-5iPimL.js"))}},ranks:{"-":()=>{Vg(import("./rank-BrgqDXQV.js"))}},conflicts:{rpupgrades:()=>{Vg(import("./injectRPUpgrades-78aLWZeB.js"))}},bank:{"-":()=>{Vg(import("./injectGuildBank-BrIMhScx.js"))}},hall:{"-":()=>{Vg(import("./hall-C-dMUBmQ.js"))},post:WS},"-":{"-":zS},titanrewards:{"-":()=>{Vg(import("./titanrewards-BHb-suVR.js"))}}}
function XS(){Vg(import("./viewRecipe-DO0RfTGF.js"))}var ZS={"-":{"-":function(){Vg(import("./inventing-oNi0gBux.js"))}},doinvent:{"-":XS},viewrecipe:{"-":XS}}
function ex(){Vg(import("./ufsgAllowBack-B5QUGG-m.js"))}var tx={"-":{"-":ex},view:{"-":()=>{Vg(import("./itemsView-Ddt8Bfl5.js"))}}}
function nx(){Vg(import("./profile-CeFs7PZL.js").then(function(e){return e.p}))}function rx(){Vg(import("./news-CX8KDuTU.js"))}function ix(){Vg(import("./viewArchive-Bk5GshhD.js"))}var sx={fsbox:{"-":()=>{Vg(import("./newsFsbox-B2K4s_lI.js"))}},"-":{"-":rx},shoutbox:{"-":()=>{Vg(import("./newsShoutbox-CHkzfhnb.js"))}},viewupdatearchive:{"-":ix},viewarchive:{"-":ix}}
var ox={news:{"-":rx},viewupdatearchive:{"-":ix},viewarchive:{"-":ix},"-":{"-":()=>{Vg(import("./unknownPage-DvAFNFV5.js"))}}},ax=Sh("<svelte-virtual-list-row><!></svelte-virtual-list-row>",2),lx=Sh("<svelte-virtual-list-viewport><svelte-virtual-list-contents></svelte-virtual-list-contents></svelte-virtual-list-viewport>",2)
function cx(e,t){sd(t,!0)
let n,r,i=Bp(t,"height",3,"100%"),s=Bp(t,"itemHeight",3,void 0),o=Bp(t,"start",15,0),a=Bp(t,"end",15,0),l=[],c=Wd(void 0),u=Wd(void 0),d=Wd(0),f=bd(()=>t.items.slice(o(),a()).map((e,t)=>({index:t+o(),data:e}))),h=Wd(void 0),p=Wd(0),g=Wd(0),v=0
async function _(e,t){const{scrollTop:n}=ah(c)
t={left:0,top:n+(e-o())*(s()||r),behavior:"smooth",...t},ah(c).scrollTo(t)}qp(()=>{n=ah(u).getElementsByTagName("svelte-virtual-list-row"),Vd(h,!0)}),_f(()=>{ah(h)&&async function(e,t,i){if(v)return
v=!0,e.length<o()&&await _(e.length-1,{behavior:"auto"})
const{scrollTop:s}=ah(c)
await oh()
let u=ah(p)-s,d=o()
for(;u<t&&d<e.length;){let e=n[d-o()]
e||(a(d+1),await oh(),e=n[d-o()]),e&&(u+=l[d]=i||e.offsetHeight),d+=1}a(d)
const f=e.length-a()
r=(ah(p)+u)/a(),Vd(g,f*r),l.length=e.length,v=!1}(t.items,ah(d),s())})
var m=lx()
Yh(m,0,"svelte-13thbeo")
var b=lf(m)
Yh(b,0,"svelte-13thbeo"),jh(b,21,()=>ah(f),e=>e.index,(e,n)=>{var r=ax()
Yh(r,0,"svelte-13thbeo")
var i=lf(r),s=e=>{var r=Eh()
Uh(cf(r),()=>t.children,()=>({item:ah(n).data})),Ch(e,r)},o=e=>{Ch(e,xh("Missing template"))}
Rh(i,e=>{t.children?e(s):e(o,!1)}),Ch(e,r)}),Cp(b,e=>Vd(u,e),()=>ah(u)),Cp(m,e=>Vd(c,e),()=>ah(c)),wf(()=>{Zh(m,`height: ${i()??""};`),Zh(b,`padding-top: ${ah(p)??""}px; padding-bottom: ${ah(g)??""}px;`)}),_h("scroll",m,async function(){const{scrollTop:e}=ah(c)
for(let e=0;e<n.length;e+=1)l[o()+e]=s()||n[e].offsetHeight
let i=0,u=0
for(;i<t.items.length;){const t=l[i]||r
if(u+t>e){o(i),Vd(p,u,!0)
break}u+=t,i+=1}for(;i<t.items.length&&(u+=l[i]||r,i+=1,!(u>e+ah(d))););a(i)
const f=t.items.length-a()
for(r=u/a();i<t.items.length;)l[i++]=r
Vd(g,f*r)}),function(e,t,n){var r=xp.observe(e,()=>n(e[t]))
bf(()=>(ch(()=>n(e[t])),r))}(m,"offsetHeight",e=>Vd(d,e)),Ch(e,m),od()}const ux={}
let dx=-1
function fx(e,t){lu(3,t.func,[e])}function hx(e,t){if(ux[e])return ux[e].forEach(ag(fx,t)),!0}function px(e,t){ux[e]||(ux[e]=[]),dx+=1
const n=dx.toString()
return ux[e].push({token:n,func:t}),n}function gx(e,t){return ux[e]?ux[e][0].token:px(e,t)}async function vx(e=-1,t=1,n=[]){const r=await function(e,t,n){return Tk({subcmd:"log",log_id:e,latest:t,limit:n})}(e,t,1e3)
if(!r?.s)return void hx("guildLog-progress","Server Error.")
hx("guildLog-progress")
const i=n.concat(r.r.logs)
return 1e3!==r.r.logs.length?i:vx(r.r.logs[0].id,0,i)}var _x=Sh('<button class="modal-close svelte-jhpi06" type="button">×</button>')
mh(["click"])
var mx=Sh('<div class="modal-title svelte-mgjzgm"><!> <!></div> <div class="modal-content svelte-mgjzgm"><!></div>',1)
function bx(e,t){sd(t,!0)
let n=Bp(t,"visible",3,!0),r=Wd(void 0),i=Wd(void 0)
qp(()=>{Pg(ah(i),ah(r))}),Rw(e,{get close(){return t.close},get visible(){return n()},get modal(){return ah(r)},set modal(e){Vd(r,e,!0)},children:(e,n)=>{var r=mx(),s=cf(r),o=lf(s)
Uh(o,()=>t.title??Su),function(e,t){var n=_x()
n.__click=function(...e){t.close?.apply(this,e)},Ch(e,n)}(uf(o,2),{get close(){return t.close}}),Cp(s,e=>Vd(i,e),()=>ah(i)),Uh(lf(uf(s,2)),()=>t.children??Su),Ch(e,r)},$$slots:{default:!0}}),od()}var yx=Sh('<button type="button" class="svelte-mmp9jk"><!></button>')
function wx(e,t){let n=Bp(t,"disabled",3,0)
var r=yx()
r.__click=function(...e){t.onclick?.apply(this,e)},Uh(lf(r),()=>t.children??Su),wf(()=>r.disabled=n()),Ch(e,r)}mh(["click"])
var kx=Sh('<span class="svelte-1amp3b0">[<!>]</span>')
function Sx(e,t){var n=kx()
wx(uf(lf(n)),{get onclick(){return t.onclick},children:(e,n)=>{var r=Eh()
Uh(cf(r),()=>t.children??Su),Ch(e,r)},$$slots:{default:!0}}),Ch(e,n)}function xx(e,t,n){t(),n.cbChange()}var Ex=Sh('<div class="filter-header svelte-1tfrwgn"><div class="filters svelte-1tfrwgn"><div class="front svelte-1tfrwgn"><span>Filters:</span></div> <div><label>Potions: <input type="checkbox"/></label></div> <div><label>Store/Recalls: <input type="checkbox"/></label></div> <div><label>Relics: <input type="checkbox"/></label></div> <div><label>Mercenaries: <input type="checkbox"/></label></div> <div><label>Group Combats: <input type="checkbox"/></label></div> <div><!></div> <div><label>Donations: <input type="checkbox"/></label></div> <div><label>Rankings: <input type="checkbox"/></label></div> <div><label>GvGs: <input type="checkbox"/></label></div> <div><label>Tag/UnTags: <input type="checkbox"/></label></div> <div><label>Titans: <input type="checkbox"/></label></div> <div><label>Other: <input type="checkbox"/></label></div></div> <div class="button-row svelte-1tfrwgn"><div></div> <div class="buttons svelte-1tfrwgn"><div><!></div> <div><!></div> <div><!></div></div> <div class="search-box svelte-1tfrwgn"><label>Search: <span class="search-wrapper svelte-1tfrwgn"><input type="text" class="svelte-1tfrwgn"/> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></span></label></div></div></div>')
function Cx(e){return sb(new Date(1e3*e))}function Tx(e){return F_({cmd:"combat",subcmd:"view",combat_id:e})}mh(["change"])
const Px="fsh_pvpCombat"
let $x=null,Lx={}
const Ix={}
async function Mx(){const e=await e_(Px)
return Lx=e?(e?.lastCheck??0)<xa()?function(e){var t
const n={...Bm(Ag(e).filter((t=Ea(),([e,n])=>"lastCheck"===e||n?.logTime>t))),lastCheck:ka()}
return t_(Px,n),n}(e):e:{lastCheck:ka()},Lx}async function Ox(e,t){Ix[t]=D_(Tx,0,t)
const n=await Ix[t]
if(n?.s)return Lx[t]={...n,logTime:e},t_(Px,Lx),n
delete Ix[t]}async function Rx(e,t){$x||($x=Mx())
const n=await $x
return n[t]?n[t]:Ix[t]?Ix[t]:Ox(e,t)}function Ax(){return e={subcmd2:"view"},Tk({subcmd:"recruit",...e})
var e}var Fx=Sh('<i class="fas fa-envelope" aria-hidden="true"></i>'),jx=Sh('<a class="svelte-6j0lyo"> </a>'),Nx=Sh('[ <a class="svelte-6j0lyo"><img class="svelte-6j0lyo"/> </a> ]',1),Dx=Sh("<!> <!>",1),Bx=Sh('<span class="action-buttons svelte-6j0lyo">[ <!> | <!> ]</span>'),qx=Sh('<div class="rel svelte-6j0lyo"> </div>'),Hx=Sh('<div class="rel svelte-6j0lyo"><span class="fshSpinner recruit-spinner svelte-6j0lyo"></span></div>'),Ux=Sh('<!> <span class="action-buttons svelte-6j0lyo">[ <!> | <!> | <!> | <!> ]</span>',1),Gx=Sh('<span class="action-buttons svelte-6j0lyo">[ <!> ]</span>'),Wx=Sh('<div><a class="svelte-6j0lyo"> </a>\'s group looted the item \'<span class="fshGreen"> </span>\'</div>'),zx=Sh("<!> <!> <!>",1),Vx=Sh("<div><div><!></div> <div><!></div> <div><!> <!></div></div>")
function Qx(e,t){sd(t,!0)
let n=Bp(t,"groupCombatItems",3,null),r=Bp(t,"hideNonPlayerGuildLogMessages",3,null),i=Bp(t,"logEntry",3,null),s=Wd(Yd(Promise.resolve())),o=Wd("waiting")
function a(e){Ig("Guild Log",e)}const l=e=>e
function c(e){const t=e.msg.attachments?.filter(e=>0===e.type)
return t?.length&&!t.filter(({data:{id:e}})=>e===Cv()).length}async function u(e,t){a(t),Vd(s,Ax(),!0)
const n=await ah(s)
if(n?.s&&Qc(n?.r)){const r=n.r.find(({player:{id:t}})=>t===e.id)
r?.id?J_(`${al}recruit&subcmd2=${t}&id=${r.id}`):Vd(o,"gone")}else Vd(o,"error")}var d=Vx()
let f
var h=lf(d)
let p
var g=lf(h),v=e=>{Ch(e,Fx())}
Rh(g,e=>{i().time&&e(v)})
var _=uf(h,2)
let m
var b=lf(_),y=e=>{var t=xh()
wf(e=>Ph(t,e),[()=>Cx(i().time)]),Ch(e,t)}
Rh(b,e=>{i().time&&e(y)})
var w=uf(_,2)
let k
var S=lf(w)
jh(S,17,()=>i().msg.text.split(/<link=a(\d)><\/link>/).filter(l),Fh,(e,t)=>{var n=Eh(),r=cf(n),s=e=>{var n=Dx(),r=cf(n),s=e=>{var n=jx(),r=lf(n)
wf(()=>{op(n,"href",`${Za??""}${i().msg.attachments[ah(t)].data.id??""}`),Ph(r,i().msg.attachments[ah(t)].data.name)}),Ch(e,n)}
Rh(r,e=>{0===i().msg.attachments[ah(t)].type&&e(s)})
var o=uf(r,2),a=e=>{var n=Nx(),r=uf(cf(n)),s=lf(r),o=uf(s,1,!0)
wf(()=>{op(r,"href",`${fl??""}${i().msg.attachments[ah(t)].data.id??""}`),op(s,"src",`${$a??""}guilds/${i().msg.attachments[ah(t)].data.id??""}_mini.png`),op(s,"alt",i().msg.attachments[ah(t)].data.name),Ph(o,i().msg.attachments[ah(t)].data.name)}),Ch(e,n)}
Rh(o,e=>{1===i().msg.attachments[ah(t)].type&&e(a)}),Ch(e,n)},o=e=>{var n=xh()
wf(()=>Ph(n,ah(t))),Ch(e,n)}
Rh(r,e=>{1!==ah(t).length||Gm(Number(ah(t)))?e(o,!1):e(s)}),Ch(e,n)})
var x=uf(S,2),E=e=>{var t=zx(),r=cf(t)
jh(r,17,()=>i().msg.attachments.filter(({type:e})=>0===e),Fh,(e,t)=>{let n=()=>ah(t).data
var r=Ux(),l=cf(r),c=e=>{var t=Eh()
Oh(cf(t),()=>ah(s),e=>{Ch(e,Hx())},e=>{var t=Eh(),r=cf(t),i=e=>{var t=Bx(),r=uf(lf(t))
wx(r,{onclick:()=>u(n(),"acceptjoin"),children:(e,t)=>{Ch(e,xh("Accept"))},$$slots:{default:!0}}),wx(uf(r,2),{onclick:()=>u(n(),"denyjoin"),children:(e,t)=>{Ch(e,xh("Deny"))},$$slots:{default:!0}}),Ch(e,t)},s=e=>{var t=qx(),n=lf(t)
wf(()=>Ph(n,ah(o))),Ch(e,t)}
Rh(r,e=>{"waiting"===ah(o)?e(i):e(s,!1)}),Ch(e,t)}),Ch(e,t)}
Rh(l,e=>{21===i().type&&e(c)})
var d=uf(l,2),f=uf(lf(d))
wx(f,{onclick:()=>function(e){a("reply"),window.openQuickMsgDialog(e.name)}(n()),children:(e,t)=>{Ch(e,xh("Reply"))},$$slots:{default:!0}})
var h=uf(f,2)
wx(h,{onclick:()=>function(e){a("buff"),nw(e.id)}(n()),children:(e,t)=>{Ch(e,xh("Buff"))},$$slots:{default:!0}})
var p=uf(h,2)
wx(p,{onclick:()=>function(e){a("send"),J_(`${tl}${e.name}`)}(n()),children:(e,t)=>{Ch(e,xh("Send"))},$$slots:{default:!0}}),wx(uf(p,2),{onclick:()=>function(e){a("trade"),J_(`${nl}${e.name}`)}(n()),children:(e,t)=>{Ch(e,xh("Trade"))},$$slots:{default:!0}}),Ch(e,r)})
var l=uf(r,2)
jh(l,17,()=>i().msg.attachments.filter(({type:e})=>11===e),Fh,(e,t)=>{var n=Gx()
wx(uf(lf(n)),{onclick:()=>function(e){a("combat"),J_(`${Wa}combat&subcmd=view&combat_id=${e}`)}(ah(t).data),children:(e,t)=>{Ch(e,xh("View Combat"))},$$slots:{default:!0}}),Ch(e,n)})
var c=uf(l,2),d=e=>{var t=Eh()
Oh(cf(t),()=>Rx(i().time,i().msg.attachments[0].data),null,(e,t)=>{var n=Eh(),r=cf(n),i=e=>{var n=Wx(),r=lf(n),i=lf(r),s=lf(uf(r,2))
wf(()=>{op(r,"href",`${Za??""}${ah(t).r.combat.attacker.group.players[0].id??""}`),Ph(i,ah(t).r.combat.attacker.group.players[0].name),Ph(s,ah(t)?.r?.combat?.items?.[0]?.n)}),Ch(e,n)}
Rh(r,e=>{ah(t)?.r?.combat?.items?.[0]?.n&&e(i)}),Ch(e,n)}),Ch(e,t)}
Rh(c,e=>{17===i().type&&n()&&i().msg.text.includes("victorious")&&e(d)}),Ch(e,t)}
Rh(x,e=>{i().msg?.attachments?.length&&e(E)}),wf((e,t,n,r)=>{f=Yh(d,0,"row-container svelte-6j0lyo",null,f,e),p=Yh(h,0,"svelte-6j0lyo",null,p,t),m=Yh(_,0,"svelte-6j0lyo",null,m,n),k=Yh(w,0,"svelte-6j0lyo",null,k,r)},[()=>({"not-self":r()&&c(i()),separator:i().index}),()=>({old:i().old,new:i().new}),()=>({old:i().old,new:i().new}),()=>({old:i().old,new:i().new})]),Ch(e,d),od()}const Jx=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to","has added tags to","has removed some tags from"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited [,0-9]+ gold into the guild bank/,/deposited [,0-9]+ Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled","has been stripped of their rank by",/has revoked .+'s invite to the guild/,"has been rejected from joining the guild"],[/resulted in .* with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with","has initiated a conflict with your guild","is participating in the conflict against"],["Titan Reward item","from your guild's contribution to the defeat of the titan","7 day cooldown has been activated on your guild for this titan"]]
function Kx(e,t){return kc(t)?e.includes(t):t.test(e)}function Yx(e,t){return t.some(ag(Kx,e))}function Xx(e){const t=Jx.findIndex(ag(Yx,e))
return-1===t?0:t}var Zx=Sh('<span class="white svelte-1u02a2w">(Guild Log messages not involving self are dimmed!)</span>'),eE=Sh('<div class="vs svelte-1u02a2w"><!></div>'),tE=Sh(" <br/>",1),nE=Sh('<div class="content svelte-1u02a2w"><!> <div class="row-container svelte-1u02a2w"><div class="innerColumnHeader svelte-1u02a2w">&nbsp;</div> <div class="innerColumnHeader svelte-1u02a2w">Date</div> <div class="innerColumnHeader svelte-1u02a2w">Message <!></div></div> <!></div>')
function rE(e,t){sd(t,!0)
let n=Bp(t,"visible",15,!0),r=Wd(Yd(Array(11).fill(!0))),i=Wd(null),s=Wd(null),o=Wd(Yd([])),a=Wd(Yd(Promise.resolve())),l=Wd(Yd([])),c=Wd("")
const u=bd(()=>ah(o).filter(({fshType:e})=>ah(r)[e]).filter(({searchable:e})=>""===ah(c)||e.includes(ah(c).toLowerCase())).map(v)),d=bd(()=>ah(u).length?ah(u):[{index:0,msg:{text:""}}])
let f=0,h=null,p=null,g=null
const v=(e,t)=>({...e,index:t}),_=({msg:e})=>e.text.replace(/<link=a(\d)><\/link>/g,(t,n)=>e.attachments[n].data.name),m=e=>({...e,fshType:Xx(e.msg.text),new:h&&e.time>p,old:h&&(g-e.time)/60>20&&e.time<=p,searchable:_(e).toLowerCase()}),b=(e,t)=>t.time-e.time
function y(e){Ig("Guild Log",e)}function w(){y("cbChange")}function k(){y("selectAll")}function S(){y("selectNone")}function x(){y("oldGuildLog"),J_(ll)}function E(){y("clearSearch"),Vd(c,"")}function C(e){Vd(l,ah(l).concat(e),!0)}function T(e){e?C(e):(f+=1,C(`chunk ${f}`))}async function P(){Vd(l,["Loading..."],!0),Vd(o,[],!0),g=(new Date).setUTCSeconds(0,0)/1e3,p=yc("lastModalGuildLogCheck")??g,Ec("lastModalGuildLogCheck",g),h=yc("enableLogColoring"),Vd(i,yc("groupCombatItems"),!0),Vd(s,yc("hideNonPlayerGuildLogMessages"),!0),f=0,gx("guildLog-progress",T)
const e=await D_(vx)
e&&Vd(o,e.toSorted(b).map(m),!0)}function $(){Vd(a,P(),!0)}_f(()=>{n()&&$()})
{const t=e=>{Ch(e,xh("Guild Log"))}
bx(e,{close:function(){y("close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=nE(),o=lf(n)
!function(e,t){sd(t,!0)
let n=Bp(t,"checks",31,()=>Yd(Array(11).fill(!0))),r=Bp(t,"searchValue",15,"")
function i(){t_("fsh_LogChecks",td(n()))}function s(e){n(n().map(()=>e)),i()}!async function(){n(await e_("fsh_LogChecks")??Array(11).fill(!0))}()
var o=Ex(),a=lf(o),l=uf(lf(a),2),c=lf(l),u=uf(lf(c))
u.__change=[xx,i,t],u.value=u.__value="1"
var d=uf(l,2),f=lf(d),h=uf(lf(f))
h.__change=[xx,i,t],h.value=h.__value="2"
var p=uf(d,2),g=lf(p),v=uf(lf(g))
v.__change=[xx,i,t],v.value=v.__value="4"
var _=uf(p,2),m=lf(_),b=uf(lf(m))
b.__change=[xx,i,t],b.value=b.__value="5"
var y=uf(_,2),w=lf(y),k=uf(lf(w))
k.__change=[xx,i,t],k.value=k.__value="6"
var S=uf(y,2)
wx(lf(S),{get onclick(){return t.oldGuildLog},children:(e,t)=>{Ch(e,xh("Old Guild Log"))},$$slots:{default:!0}})
var x=uf(S,2),E=lf(x),C=uf(lf(E))
C.__change=[xx,i,t],C.value=C.__value="7"
var T=uf(x,2),P=lf(T),$=uf(lf(P))
$.__change=[xx,i,t],$.value=$.__value="8"
var L=uf(T,2),I=lf(L),M=uf(lf(I))
M.__change=[xx,i,t],M.value=M.__value="9"
var O=uf(L,2),R=lf(O),A=uf(lf(R))
A.__change=[xx,i,t],A.value=A.__value="3"
var F=uf(O,2),j=lf(F),N=uf(lf(j))
N.__change=[xx,i,t],N.value=N.__value="10"
var D=lf(uf(F,2)),B=uf(lf(D))
B.__change=[xx,i,t],B.value=B.__value="0"
var q=uf(a,2),H=uf(lf(q),2),U=lf(H)
Sx(lf(U),{onclick:function(){s(!0),t.selectAll()},children:(e,t)=>{Ch(e,xh("Select All"))}})
var G=uf(U,2)
Sx(lf(G),{onclick:function(){s(!1),t.selectNone()},children:(e,t)=>{Ch(e,xh("Select None"))}}),Sx(lf(uf(G,2)),{get onclick(){return t.refresh},children:(e,t)=>{Ch(e,xh("Refresh"))}})
var W=lf(uf(H,2)),z=uf(lf(W)),V=lf(z),Q=uf(V,2)
{let e=bd(()=>!r())
Ah(Q,()=>({"--button-deco":"none"})),wx(Q.lastChild,{get disabled(){return ah(e)},get onclick(){return t.clearSearch},children:(e,t)=>{Ch(e,xh("×"))},$$slots:{default:!0}})}yp(u,()=>n()[1],e=>n(n()[1]=e,!0)),yp(h,()=>n()[2],e=>n(n()[2]=e,!0)),yp(v,()=>n()[4],e=>n(n()[4]=e,!0)),yp(b,()=>n()[5],e=>n(n()[5]=e,!0)),yp(k,()=>n()[6],e=>n(n()[6]=e,!0)),yp(C,()=>n()[7],e=>n(n()[7]=e,!0)),yp($,()=>n()[8],e=>n(n()[8]=e,!0)),yp(M,()=>n()[9],e=>n(n()[9]=e,!0)),yp(A,()=>n()[3],e=>n(n()[3]=e,!0)),yp(N,()=>n()[10],e=>n(n()[10]=e,!0)),yp(B,()=>n()[0],e=>n(n()[0]=e,!0)),_p(V,r),Ch(e,o),od()}(o,{cbChange:w,clearSearch:E,oldGuildLog:x,refresh:$,selectAll:k,selectNone:S,get checks(){return ah(r)},set checks(e){Vd(r,e,!0)},get searchValue(){return ah(c)},set searchValue(e){Vd(c,e,!0)}})
var u=uf(o,2),f=uf(lf(u),4),h=uf(lf(f)),p=e=>{Ch(e,Zx())}
Rh(h,e=>{ah(s)&&e(p)}),Oh(uf(u,2),()=>ah(a),e=>{var t=Eh()
jh(cf(t),17,()=>ah(l),Fh,(e,t)=>{var n=tE(),r=cf(n)
wf(()=>Ph(r,`${ah(t)??""} `)),Ch(e,n)}),Ch(e,t)},e=>{var t=eE()
{const e=(e,t)=>{Qx(e,{get groupCombatItems(){return ah(i)},get hideNonPlayerGuildLogMessages(){return ah(s)},get logEntry(){return t?.().item}})}
cx(lf(t),{get items(){return ah(d)},children:e,$$slots:{default:!0}})}Ch(e,t)},(e,t)=>{var n=xh()
wf(()=>Ph(n,ah(t))),Ch(e,n)}),Ch(e,n)},$$slots:{title:!0,default:!0}})}od()}const iE=Yd({visible:!0})
let sE=0
var oE=Object.freeze({__proto__:null,default:function(){sE?iE.visible=!0:sE=$h(rE,{props:iE,target:document.body})}})
function aE(){return Tk({subcmd:"fetchinv"})}function lE(){return D_(aE)}function cE(e){return Tk({subcmd:"inventory",...e})}function uE(){return cE({subcmd2:"report"})}function dE(){return D_(uE)}function fE(e,t,[n,r]){Pc(r)&&null!==r?e[n]=t(r.constructor(),r):e[n]=r}function hE(e,t){return Pc(t)&&Ag(t).forEach(ag(fE,e,hE)),e}function pE(e){return e?.constructor&&hE(e.constructor(),e)}function gE(e,t,n){const r=(e=>Math.max(Math.min(e,100),0))((e-t)/(n-t)*100)
let i=255,s=255
r<50?s=Math.round(5.1*r):i=Math.round(510-5.1*r)
const o=(e=>`000000${e.toString(16)}`.slice(-6))(65536*i+256*s+0)
return`#${o}`}var vE=(e,t,n,r)=>{t("backpack"),n(),r()},_E=(e,t,n,r)=>{t("guildstore"),n(),r()},mE=(e,t,n)=>{t("inventory"),n()},bE=(e,t)=>{ah(t)||Vd(t,!0)},yE=(e,t,n)=>{t("mapping"),n()},wE=(e,t)=>{ah(t)||Vd(t,!0)},kE=(e,t,n)=>{t("thresholds"),n()},SE=(e,t)=>{ah(t)||Vd(t,!0)},xE=Sh('<div class="svelte-d6ps8u"> </div> <div class="svelte-d6ps8u"> </div>',1),EE=Sh('<div class="inventory svelte-d6ps8u"><div class="inventory-grid-container svelte-d6ps8u"></div></div>'),CE=(e,t,n)=>{t("mapped"),n()},TE=Sh("<option> </option>"),PE=Sh("<option> </option>"),$E=(e,t,n)=>{t("ignore"),n()},LE=e=>e.target.blur(),IE=Sh('<div class="svelte-d6ps8u"> </div> <div class="svelte-d6ps8u"><select class="svelte-d6ps8u"><!></select></div> <div class="svelte-d6ps8u"><input title="Ignore" type="checkbox" class="svelte-d6ps8u"/></div>',1),ME=(e,t,n)=>{t("ignore-all"),n()},OE=(e,t,n)=>{t("reset"),n()},RE=Sh('<div class="mapping svelte-d6ps8u"><div class="mapping-grid-container svelte-d6ps8u"><!> <div class="svelte-d6ps8u"></div> <div class="svelte-d6ps8u"><button class="custombutton svelte-d6ps8u" type="button">Ignore All</button> <button class="custombutton svelte-d6ps8u" type="button">Reset</button></div></div></div>'),AE=(e,t,n)=>{t("minpoint"),n()},FE=(e,t,n)=>{t("maxpoint"),n()},jE=Sh('<div class="thresholds svelte-d6ps8u">Min: <input max="999" min="0" type="number" class="svelte-d6ps8u"/> Max: <input max="999" min="0" type="number" class="svelte-d6ps8u"/></div>'),NE=Sh('<div class="filters svelte-d6ps8u"><label class="svelte-d6ps8u"><input type="checkbox"/> Member Backpacks</label> <label class="svelte-d6ps8u"><input type="checkbox"/> Guild Store</label></div> <div class="pot-report svelte-d6ps8u"><input class="tab-ctrl svelte-d6ps8u" id="pr-inv" type="checkbox"/> <label for="pr-inv" class="svelte-d6ps8u">Composed Potion Inventory</label> <input class="tab-ctrl svelte-d6ps8u" id="pr-map" type="checkbox"/> <label for="pr-map" class="svelte-d6ps8u">Mapping</label> <input class="tab-ctrl svelte-d6ps8u" id="pr-levels" type="checkbox"/> <label for="pr-levels" class="svelte-d6ps8u">Thresholds</label> <div class="panels svelte-d6ps8u"><!> <!> <!></div></div>',1),DE=Sh('<p style="color: red"> </p>'),BE=Sh('<div class="main svelte-d6ps8u"><!></div>')
function qE(e,t){sd(t,!0)
const n="fsh_potReport",r={inventory:!1,mapping:!1,thresholds:!1,potMap:[],minpoint:20,maxpoint:30,backpack:!0,guildstore:!0}
let i=Bp(t,"visible",15,!0),s=Wd(null),o=Wd(!1),a=Wd(!1),l=Wd(!1),c=Wd(Yd([])),u=[],d=Wd(Yd([]))
const f=({b:e})=>13699===e,h=e=>gE(e,ah(s).minpoint,ah(s).maxpoint),p=({ignore:e})=>!e,g=e=>({name:t})=>t===e,v=(e,t)=>Z_(e.n,t.n),_=({r:e})=>e,m=e=>Ig("pot-report",e),b=({player:e,n:t})=>({loc:e?1:2,n:t}),y=()=>t_(n,td(ah(s))),w=e=>u.filter((e=>({n:t})=>e.some(g(t)))(e)).filter(({loc:e})=>ah(s).backpack||1!==e).filter(({loc:e})=>ah(s).guildstore||2!==e).map((e=>({loc:t,n:n})=>({loc:t,mapped:e.find(g(n)).mapped,n:n}))(e))
function k(){y(),Vd(c,function(){const e=ah(s).potMap.filter(p),t=w(e)
return Im(e,"mapped").map((e=>({mapped:t})=>({name:t,count:e.filter(({mapped:e})=>e===t).length}))(t)).sort((e,t)=>Z_(e.name,t.name))}(),!0),Vd(d,ah(s).potMap.map(e=>({...e,waiting:!0})),!0)}function S(){ah(s).potMap=ah(d).map(({ignore:e,mapped:t,name:n})=>({ignore:e,mapped:t,name:n})),k()}function x(){ah(s).potMap=ah(s).potMap.map(e=>({...e,ignore:!0})),k()}function E(){ah(s).potMap=ah(s).potMap.map(e=>({...e,mapped:e.name,ignore:!1})),k()}async function C(){!async function(){Vd(s,await e_(n)||pE(r),!0),Vd(o,ah(s).inventory,!0),Vd(a,ah(s).mapping,!0),Vd(l,ah(s).thresholds,!0),ah(s).backpack=ah(s).backpack??r.backpack,ah(s).guildstore=ah(s).guildstore??r.guildstore}()
const e=await eb([lE(),dE()])
if(!Qc(e[0]?.r)||!Qc(e[1]?.r))throw new Error("Server Error")
u=(e=>e.flatMap(_).filter(f).map(b).sort(v))(e),ah(s).potMap=Im(u,"n").map(({n:e})=>({name:e,mapped:ah(s)?.potMap?.find(g(e))?.mapped||e,ignore:ah(s)?.potMap?.find(g(e))?.ignore??!1})),k()}{const t=e=>{Ch(e,xh("Pot Report"))}
bx(e,{close:function(){m("close"),i(!1)},get visible(){return i()},title:t,children:(e,t)=>{var n=BE()
Oh(lf(n),C,e=>{Ch(e,xh("Loading..."))},e=>{var t=NE(),n=cf(t),r=lf(n),i=lf(r)
i.__change=[vE,m,y,k]
var u=lf(uf(r,2))
u.__change=[_E,m,y,k]
var f=lf(uf(n,2))
f.__change=[mE,m,y],f.__click=[bE,o]
var p=uf(f,4)
p.__change=[yE,m,y],p.__click=[wE,a]
var g=uf(p,4)
g.__change=[kE,m,y],g.__click=[SE,l]
var v=lf(uf(g,4)),_=e=>{var t=EE()
jh(lf(t),21,()=>ah(c),Fh,(e,t)=>{let n=()=>ah(t).count
var r=xE(),i=cf(r),s=lf(i),o=uf(i,2)
let a
var l=lf(o)
wf(e=>{Ph(s,ah(t).name),a=Zh(o,"",a,e),Ph(l,n())},[()=>({"background-color":h(n())})]),Ch(e,r)}),Ch(e,t)}
Rh(v,e=>{ah(o)&&e(_)})
var b=uf(v,2),w=e=>{var t=RE(),n=lf(t),r=lf(n)
jh(r,17,()=>ah(d),Fh,(e,t,n)=>{let r=()=>ah(t).name,i=()=>ah(t).mapped
var s=IE(),o=cf(s),a=lf(o),l=uf(o,2),c=lf(l)
c.__change=[CE,m,S],c.__mousedown=()=>{ah(d)[n].waiting=!1}
var u=lf(c),f=e=>{var t=TE(),n=lf(t),r={}
wf(()=>{Ph(n,i()),r!==(r=i())&&(t.value=(t.__value=i())??"")}),Ch(e,t)},h=e=>{var t=Eh()
jh(cf(t),17,()=>ah(d),Fh,(e,t)=>{let n=()=>ah(t).name
var r=PE(),s=lf(r),o={}
wf(()=>{var e
e=r,i()===n()?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected"),Ph(s,n()),o!==(o=n())&&(r.value=(r.__value=n())??"")}),Ch(e,r)}),Ch(e,t)}
Rh(u,e=>{ah(t).waiting?e(f):e(h,!1)})
var p=lf(uf(l,2))
p.__change=[$E,m,S],p.__click=[LE],wf(()=>{Ph(a,r()),op(c,"name",r())}),tp(c,()=>ah(d)[n].mapped,e=>ah(d)[n].mapped=e),yp(p,()=>ah(d)[n].ignore,e=>ah(d)[n].ignore=e),Ch(e,s)})
var i=lf(uf(r,4))
i.__click=[ME,m,x],uf(i,2).__click=[OE,m,E],Ch(e,t)}
Rh(b,e=>{ah(a)&&e(w)})
var C=uf(b,2),T=e=>{var t=jE(),n=uf(lf(t))
n.__input=[AE,m,k]
var r=uf(n,2)
r.__input=[FE,m,k],_p(n,()=>ah(s).minpoint,e=>ah(s).minpoint=e),_p(r,()=>ah(s).maxpoint,e=>ah(s).maxpoint=e),Ch(e,t)}
Rh(C,e=>{ah(l)&&e(T)}),yp(i,()=>ah(s).backpack,e=>ah(s).backpack=e),yp(u,()=>ah(s).guildstore,e=>ah(s).guildstore=e),yp(f,()=>ah(s).inventory,e=>ah(s).inventory=e),yp(p,()=>ah(s).mapping,e=>ah(s).mapping=e),yp(g,()=>ah(s).thresholds,e=>ah(s).thresholds=e),Ch(e,t)},(e,t)=>{var n=DE(),r=lf(n)
wf(()=>Ph(r,ah(t).message)),Ch(e,n)}),Ch(e,n)},$$slots:{title:!0,default:!0}})}od()}mh(["change","click","mousedown","input"])
const HE=Yd({visible:!0})
let UE=0
var GE=Object.freeze({__proto__:null,default:function(){UE?HE.visible=!0:UE=$h(qE,{props:HE,target:document.body})}})
function WE(e){return em({subcmd:"useitem",inventory_id:e})}function zE(e){return D_(WE,0,e)}function VE(){return _v({subcmd:"inventory"})}function QE(e,t,n,r){Ec(t,n()),r.dispatchToggle()}var JE=Sh('<label><input type="checkbox" class="svelte-f8757j"/> Select items in ST</label>')
function KE(e,t){sd(t,!0)
let n=Bp(t,"inSt",15,null)
const r="selectST"
n(yc(r))
var i=JE(),s=lf(i)
s.__change=[QE,r,n,t],yp(s,n),Ch(e,i),od()}function YE(e){return`${e.amount} x ${cc[e.type]}`}mh(["change"])
const XE=[[e=>e.components?.length,e=>`You successfully extracted 1 '${e.components?.[0].n}' component(s) from 1 resource(s).`],[e=>e.frags,e=>`You gained ${e.frags.map(YE).join(", ")} Fragments by opening the Fragment Stash.`],[e=>e.mailbox_items?.length,e=>`You received 1 x '${e.mailbox_items?.[0].n}' from the container.`],[()=>1,()=>"<You failed to extract any components from resource(s)."]]
function ZE(e){return XE.find(([t])=>t(e))[1](e)}const eC=(e,t,n)=>`fetchitem.php?item_id=${t}&inv_id=${n}&t=1&p=${e}`
function tC(e,t,n,r){Ig("quickExtract","toggleSelectMain"),Ec(t,ah(n)),r()}function nC(e,t,n){Ig("quickExtract","togglePrompts"),Ec(t,ah(n))}var rC=Sh('<span class="fshRed"> </span>'),iC=Sh('<li class="svelte-g50cgg"><!></li>'),sC=Sh('<span class="fshSpinner fshSpinner12"></span>'),oC=Sh('<tr><td><!></td><td class="imgCol svelte-g50cgg"><span class="imgSpan tip-dynamic svelte-g50cgg"></span></td><td> </td></tr>'),aC=Sh('<tr><td colspan="3"><p style="color: red"> </p></td></tr>'),lC=Sh('<div class="svelte-g50cgg">Select which type of plants you wish to extract all of. Only select\n    extractable resources. <br/> <!>&nbsp; <label><input type="checkbox" class="svelte-g50cgg"/> Main Folder Only</label>&nbsp; <label><input type="checkbox" class="svelte-g50cgg"/> Disable Prompts</label>&nbsp; <!> <br/> <table class="svelte-g50cgg"><thead><tr><th class="actionCol svelte-g50cgg">Actions</th><th colspan="2">Items</th></tr></thead><tbody><tr><td colspan="3"><ol></ol></td></tr><!></tbody></table></div>')
function cC(e,t){sd(t,!0)
let n=Bp(t,"visible",15,!0)
const r="selectMain",i="disableQuickExtractPrompts"
let s=Wd(null),o=null,a=Wd(null),l=Wd(Yd(yc(r))),c=Wd(Yd(yc(i))),u=null,d=Wd(null),f=Wd(Yd([]))
const h=e=>"Zombie Coffin"===e.item_name||12===e.type||16===e.type,p=(e,t)=>Z_(e.item_name,t.item_name),g=e=>ah(a)||!e.is_in_st,v=e=>!ah(l)||-1===e.folder_id
function _(){Vd(d,Qc(u)&&function(e,t){return Im(t,"item_name").map(n=>{return{...n,count:t.filter(e=>e.item_name===n.item_name).length,delPending:!1,extractIds:t.filter(e=>e.item_name===n.item_name).map(e=>e.inv_id),style:(r=n.item_id,`background-image: url(${$a}items/${r}.gif)`),tip:eC(e,n.item_id,n.inv_id)}
var r})}(o,u.filter(g).filter(v)),!0)}function m(){Ig("quickExtract","toggleSelectST"),_()}async function b(){const e=await VE()
o=e?.player_id,u=e?.items?.filter(h).sort(p),_()}function y(){Ig("quickExtract","refresh"),Vd(f,[],!0),Vd(s,b(),!0)}let w
async function k(e){const t=await zE(e);(function(e){return e?.s||w===e?.e?.message||(w=e?.e?.message,Vd(f,[...ah(f),e?.e?.message],!0)),e?.s})(t)&&(Vd(f,[...ah(f),ZE(t.r)],!0),u=u.filter(t=>t.inv_id!==e))}_f(()=>{n()&&(Vd(f,[],!0),Vd(s,b(),!0))})
{const t=e=>{Ch(e,xh("Quick Extract"))}
bx(e,{close:function(){Ig("quickExtract","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=lC(),o=uf(lf(n),3)
KE(o,{dispatchToggle:m,get inSt(){return ah(a)},set inSt(e){Vd(a,e,!0)}})
var u=uf(o,2),h=lf(u)
h.__change=[tC,r,l,_]
var p=uf(u,2),g=lf(p)
g.__change=[nC,i,c]
var v=uf(p,2)
Sx(v,{onclick:y,children:(e,t)=>{Ch(e,xh("Refresh"))}})
var b=uf(v,4),w=uf(lf(b)),S=lf(w),x=lf(S)
jh(lf(x),21,()=>ah(f),Fh,(e,t)=>{var n=iC(),r=lf(n),i=e=>{var n=rC(),r=lf(n)
wf(e=>Ph(r,e),[()=>ah(t).slice(1)]),Ch(e,n)},s=e=>{var n=xh()
wf(()=>Ph(n,ah(t))),Ch(e,n)}
Rh(r,e=>{ah(t).startsWith("<")?e(i):e(s,!1)}),Ch(e,n)}),Oh(uf(S),()=>ah(s),null,e=>{var t=Eh()
jh(cf(t),17,()=>ah(d),Fh,(e,t,n)=>{let r=()=>ah(t).count,i=()=>ah(t).delPending
var s=oC(),o=lf(s)
let a
var l=lf(o),u=e=>{var t=Eh(),s=cf(t),o=e=>{Ch(e,sC())},a=e=>{wx(e,{onclick:()=>async function(e){Ig("quickExtract","extract",ah(c)),(ah(c)||await qw("Are you sure you want to extract all similar items?"))&&(ah(d)[e].delPending=!0,await eb(ah(d)[e].extractIds.map(k)),ah(d)[e]?.count&&(ah(d)[e].count=0))}(n),children:(e,t)=>{var n=xh()
wf(()=>Ph(n,`Extract ${r()??""}`)),Ch(e,n)},$$slots:{default:!0}})}
Rh(s,e=>{i()?e(o):e(a,!1)}),Ch(e,t)},f=e=>{Ch(e,xh("Done"))}
Rh(l,e=>{r()?e(u):e(f,!1)})
var h=uf(o),p=lf(h),g=lf(uf(h))
wf(e=>{a=Yh(o,0,"svelte-g50cgg",null,a,e),op(p,"data-tipped",ah(t).tip),Zh(p,ah(t).style),Ph(g,ah(t).item_name)},[()=>({delPending:i()})]),Ch(e,s)}),Ch(e,t)},(e,t)=>{var n=aC(),r=lf(n),i=lf(r),s=lf(i)
wf(()=>Ph(s,ah(t).message)),Ch(e,n)}),yp(h,()=>ah(l),e=>Vd(l,e)),yp(g,()=>ah(c),e=>Vd(c,e)),Ch(e,n)},$$slots:{title:!0,default:!0}})}od()}mh(["change"])
const uC=Yd({visible:!0})
let dC=0
var fC=Object.freeze({__proto__:null,default:function(){dC?uC.visible=!0:dC=$h(cC,{props:uC,target:document.body})}})
Zu=!0
const hC=(e,t)=>{Ig("SE Tracker","Expand Row"),Vd(t,!ah(t))}
var pC=Sh('<button type="button" class="svelte-1nqw174"><!></button>'),gC=Sh('<a target="_blank" class="svelte-1nqw174"> </a>'),vC=Sh('<div></div> <div></div> <div class="last-kill svelte-1nqw174"> </div> <div><a target="_blank" class="svelte-1nqw174"> </a></div>',1),_C=Sh('<div class="wide svelte-1nqw174"></div>'),mC=Sh('<div class="expando svelte-1nqw174"><!></div> <div><!></div> <div class="last-kill svelte-1nqw174"> </div> <div><a target="_blank" class="svelte-1nqw174"> </a></div> <!>',1)
function bC(e,t){sd(t,!0)
let n=Wd(!1)
var r=mC(),i=cf(r),s=lf(i),o=e=>{var t=pC()
t.__click=[hC,n]
var r=lf(t),i=e=>{Ch(e,xh("∨"))},s=e=>{Ch(e,xh(">"))}
Rh(r,e=>{ah(n)?e(i):e(s,!1)}),wf(()=>op(t,"aria-expanded",ah(n))),Ch(e,t)}
Rh(s,e=>{t.entry[3].length&&e(o)})
var a=uf(i,2),l=lf(a),c=e=>{var n=gC(),r=lf(n)
wf(e=>{op(n,"href",`${Cl??""}creatures${za}view&creature_id=${t.entry[4]??""}`),Ph(r,e)},[()=>t.entry[0].replaceAll("_"," ")]),Ch(e,n)},u=e=>{var n=xh()
wf(e=>Ph(n,e),[()=>t.entry[0].replaceAll("_"," ")]),Ch(e,n)}
Rh(l,e=>{t.entry[4]>0?e(c):e(u,!1)})
var d=uf(a,2),f=lf(d),h=uf(d,2),p=lf(h),g=lf(p),v=uf(h,2),_=e=>{var n=_C()
jh(n,21,()=>t.entry[3],Fh,(e,t)=>{var n=bd(()=>Cu(ah(t),2))
let r=()=>ah(n)[1]
var i=vC(),s=uf(cf(i),4),o=lf(s),a=lf(uf(s,2)),l=lf(a)
wf((e,t)=>{Ph(o,e),op(a,"href",`${Cl??""}realms&search_name=${t??""}`),Ph(l,r())},[()=>Cx(ah(n)[0]),()=>encodeURIComponent(r())]),Ch(e,i)}),gp(3,n,()=>Jp,()=>({duration:300})),Ch(e,n)}
Rh(v,e=>{ah(n)&&e(_)}),wf((e,n)=>{Ph(f,e),op(p,"href",`${Cl??""}realms&search_name=${n??""}`),Ph(g,t.entry[2])},[()=>Cx(t.entry[1]),()=>encodeURIComponent(t.entry[2])]),Ch(e,r),od()}function yC(e){Ig("SE Tracker","Toggle Pref"),Ec("enableSeTracker",e.target.checked)}mh(["click"])
var wC=Sh('<span class="network svelte-1hf4bli"></span> <label>Enable SE Tracker [&thinsp; <div class="tooltip svelte-1hf4bli">? <div class="tooltiptext svelte-1hf4bli"><span class="tooltiptitle svelte-1hf4bli">Enable SE Tracker</span><br/><br/> <div>If enabled, will track the last time each SE was killed.<br/> This is DIFFERENT from the usual FSH network activity.<br/> When this is enabled, if you have ANY game page open in a browser tab it\n        will scan the SE Log every 10 minutes.<br/> You do not need auto-refresh for this to work.</div></div></div> &thinsp;]: <input type="checkbox" class="svelte-1hf4bli"/></label>',1)
mh(["click"])
const kC=Mp([AS,xS],([e,t],n)=>{t&&e?function(e,t){const n=bS(e)
t(Im(n.map(([,e])=>e)).map(e=>[e,n.filter(([,t])=>t===e).map(([e,,,,t,,,n=-1])=>[e,t,n])]).map(([e,t])=>[e,t[0][0],t[0][1],t.slice(1),t[0][2]]))}(t,n):n()})
var SC=Sh('<div><div class="innerColumnHeader svelte-1dqxqm9">&nbsp;</div></div> <div><div class="innerColumnHeader svelte-1dqxqm9">Creature</div></div> <div><div class="innerColumnHeader svelte-1dqxqm9">Last Kill</div></div> <div><div class="innerColumnHeader svelte-1dqxqm9">Location</div></div> <!>',1),xC=Sh('<div class="container svelte-1dqxqm9"><div class="top svelte-1dqxqm9"><!></div> <div class="tracker-table svelte-1dqxqm9"><!></div></div>')
function EC(e){const[t,n]=Np(),r=()=>Fp(kC,"$trackerTableStore",t)
var i=xC(),s=lf(i)
!function(e,t){sd(t,!1)
const[n,r]=Np()
Tp()
var i=wC(),s=cf(i)
Zh(s,"",{},{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQnHdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQEqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltrr+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdYSvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMFegAAAABJRU5ErkJggg==")'})
var o=uf(s,2),a=uf(lf(o),3)
a.__click=[yC],yp(a,()=>Fp(AS,"$trackerPrefStore",n),e=>jp(AS,e)),Ch(e,i),od(),r()}(lf(s),{})
var o=lf(uf(s,2)),a=e=>{var t=SC()
jh(uf(cf(t),8),1,r,e=>e[0],(e,t)=>{bC(e,{get entry(){return ah(t)}})}),Ch(e,t)}
Rh(o,e=>{r()&&e(a)}),Ch(e,i),n()}function CC(e,t){sd(t,!0)
let n=Bp(t,"visible",15,!0)
{const t=e=>{Ch(e,xh("Super Elite Tracker"))}
bx(e,{close:function(){Ig("SE Tracker","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{EC(e)},$$slots:{title:!0,default:!0}})}od()}const TC=Yd({visible:!0})
let PC=0
var $C=Object.freeze({__proto__:null,default:function(){PC?TC.visible=!0:PC=$h(CC,{props:TC,target:document.body})}})
function LC(e,t){return`<a href="${Za}${e}">${t}</a>`}var IC=Sh("<input/>"),MC=Sh("<option> </option>"),OC=Sh("<select><option> </option><!></select>"),RC=Sh("<th><!></th>"),AC=Sh("<th></th>"),FC=Sh('<tr class="svelte-dsaf7t"><!><!></tr>'),jC=(e,t,n)=>t(e,ah(n)),NC=Sh('<th tabindex="0"> <!></th>'),DC=Sh("<th></th>"),BC=Sh("<tr><!><!></tr>"),qC=(e,t,n)=>t(e,ah(n)),HC=(e,t,n,r)=>t(e,ah(n),ah(r).key),UC=Sh("<td><!></td>"),GC=(e,t,n)=>t(e,ah(n)),WC=Sh('<td><span class="isClickable svelte-dsaf7t" tabindex="0" role="button"><!></span></td>'),zC=Sh("<tr><td><!></td></tr>"),VC=Sh("<tr><!><!></tr> <!>",1),QC=Sh("<table><thead><!><!></thead><tbody></tbody></table>")
function JC(e,t){sd(t,!0)
let n=Bp(t,"sortOrders",19,()=>[1,-1]),r=Bp(t,"sortBy",15,""),i=Bp(t,"sortOrder",31,()=>Yd(n()?.[0]||1)),s=Bp(t,"filterSelections",31,()=>Yd({})),o=Bp(t,"expanded",31,()=>Yd([])),a=Bp(t,"selected",31,()=>Yd([])),l=Bp(t,"expandRowKey",3,null),c=Bp(t,"rowKey",19,l),u=Bp(t,"expandSingle",3,!1),d=Bp(t,"selectSingle",3,!1),f=Bp(t,"selectOnClick",3,!1),h=Bp(t,"iconAsc",3,"▲"),p=Bp(t,"iconDesc",3,"▼"),g=Bp(t,"iconSortable",3,""),v=Bp(t,"iconExpand",3,"▼"),_=Bp(t,"iconExpanded",3,"▲"),m=Bp(t,"showExpandIcon",3,!1),b=Bp(t,"classNameTable",3,""),y=Bp(t,"classNameThead",3,""),w=Bp(t,"classNameTbody",3,""),k=Bp(t,"classNameSelect",3,""),S=Bp(t,"classNameInput",3,""),x=Bp(t,"classNameRow",3,null),E=Bp(t,"classNameCell",3,""),C=Bp(t,"classNameRowSelected",3,null),T=Bp(t,"classNameRowExpanded",3,null),P=Bp(t,"classNameExpandedContent",3,""),$=Bp(t,"classNameCellExpand",3,""),L=Bp(t,"clickCol",3,()=>{}),I=Bp(t,"clickRow",3,()=>{}),M=Bp(t,"clickExpand",3,()=>{}),O=Bp(t,"clickCell",3,()=>{}),R=Wd(()=>"")
if(!Array.isArray(o()))throw"'expanded' needs to be an array"
if(!Array.isArray(a()))throw"'selection' needs to be an array"
null!==l()&&console.warn("'expandRowKey' is deprecated in favour of 'rowKey'"),C()&&!c()&&console.error("'rowKey' is needed to use 'classNameRowSelected'")
let A=t.columns.some(e=>!e.hideFilterHeader&&(void 0!==e.filterOptions||void 0!==e.searchValue)),F=Wd(Yd({}))
const j=bd(()=>Object.fromEntries(t.columns.map(e=>[e.key,e])))
let N=bd(()=>(m()?1:0)+t.columns.length)
const D=bd(()=>t.rows.filter(e=>Object.keys(s()).every(t=>{let n=null
if(void 0===ah(j)[t])return!0
if(ah(j)[t]?.searchValue){if(""===s()[t])return!0
1===ah(j)[t].searchValue.length?n=(ah(j)[t].searchValue(e)+"").toLocaleLowerCase().indexOf((s()[t]+"").toLocaleLowerCase())>=0:2===ah(j)[t].searchValue.length&&(n=!!ah(j)[t].searchValue(e,s()[t]+""))}else n=!1
return n||void 0===s()[t]||s()[t]===("function"==typeof ah(j)[t].filterValue?ah(j)[t].filterValue(e):ah(j)[t].value(e))})).map(e=>Object.assign({},e,{$sortOn:ah(R)(e),$expanded:null!==c()&&o().indexOf(e[c()])>=0,$selected:null!==c()&&a().indexOf(e[c()])>=0})).sort((e,t)=>r()?e.$sortOn>t.$sortOn?i():e.$sortOn<t.$sortOn?-i():0:0)),B=e=>[].concat(e).filter(e=>null!==e&&"string"==typeof e&&""!==e).join(" ")
_f(()=>{let e=ah(j)[r()]
void 0!==e&&!0===e.sortable&&"function"==typeof e.value&&Vd(R,t=>e.value(t))}),_f(()=>{A&&t.columns&&t.rows&&(Vd(F,{},!0),t.columns.forEach(e=>{"function"==typeof e.filterOptions?ah(F)[e.key]=e.filterOptions(t.rows):Array.isArray(e.filterOptions)&&(ah(F)[e.key]=e.filterOptions.map(e=>({name:e,value:e})))}))})
const q=(e,t)=>{t.sortable&&(i(t.key===r()?n()[(n().findIndex(e=>e===i())+1)%n().length]:n()[0]),r(i()?t.key:void 0)),L()({event:e,col:t,key:t.key})},H=(e,t)=>{f()&&(d()?a().includes(t[c()])?a([]):a([t[c()]]):a().includes(t[c()])?a(a().filter(e=>e!=t[c()])):a([...a(),t[c()]].sort())),I()({event:e,row:t})},U=(e,t)=>{t.$expanded=!t.$expanded
const n=t[c()]
u()&&t.$expanded?o([n]):u()?o([]):t.$expanded?o([...o(),n]):o(o().filter(e=>e!=n)),M()({event:e,row:t})},G=(e,t,n)=>{O()({event:e,row:t,key:n})}
var W=QC(),z=lf(W),V=lf(z),Q=e=>{var n=FC(),r=lf(n)
jh(r,17,()=>t.columns,Fh,(e,t)=>{var n=RC(),r=lf(n),i=e=>{var n=IC()
wf(e=>{Yh(n,0,e,"svelte-dsaf7t"),op(n,"placeholder",ah(t).filterPlaceholder)},[()=>Vh(B(S()))]),_p(n,()=>s()[ah(t).key],e=>s(s()[ah(t).key]=e,!0)),Ch(e,n)},o=e=>{var n=Eh(),r=cf(n),i=e=>{var n=OC(),r=lf(n),i=lf(r)
r.value=(r.__value=void 0)??"",jh(uf(r),17,()=>ah(F)[ah(t).key],Fh,(e,t)=>{var n=MC(),r=lf(n),i={}
wf(()=>{Ph(r,ah(t).name),i!==(i=ah(t).value)&&(n.value=(n.__value=ah(t).value)??"")}),Ch(e,n)}),wf(e=>{Yh(n,0,e,"svelte-dsaf7t"),Ph(i,ah(t).filterPlaceholder||"")},[()=>Vh(B(k()))]),tp(n,()=>s()[ah(t).key],e=>s(s()[ah(t).key]=e,!0)),Ch(e,n)}
Rh(r,e=>{ah(t).hideFilterHeader||void 0===ah(F)[ah(t).key]||e(i)},!0),Ch(e,n)}
Rh(r,e=>{ah(t).hideFilterHeader||void 0===ah(t).searchValue?e(o,!1):e(i)}),wf(e=>Yh(n,0,e,"svelte-dsaf7t"),[()=>Vh(B([ah(t).headerFilterClass]))]),Ch(e,n)})
var i=uf(r),o=e=>{Ch(e,AC())}
Rh(i,e=>{m()&&e(o)}),Ch(e,n)}
Rh(V,e=>{A&&e(Q)})
var J=uf(V),K=e=>{var n=Eh()
Uh(cf(n),()=>t.svelteTableHeader,()=>({sortOrder:i(),sortBy:r()})),Ch(e,n)},Y=e=>{var n=BC(),s=lf(n)
jh(s,17,()=>t.columns,Fh,(e,t)=>{var n=NC()
n.__click=[jC,q,t]
var s=lf(n),o=uf(s),a=e=>{var t=Eh()
Hh(cf(t),()=>1===i()?h():p()),Ch(e,t)},l=e=>{var n=Eh(),r=cf(n),i=e=>{var t=Eh()
Hh(cf(t),g),Ch(e,t)}
Rh(r,e=>{ah(t).sortable&&e(i)},!0),Ch(e,n)}
Rh(o,e=>{r()===ah(t).key?e(a):e(l,!1)}),wf(e=>{Yh(n,0,e,"svelte-dsaf7t"),Ph(s,`${ah(t).title??""} `)},[()=>Vh(B([ah(t).sortable?"isSortable":"",ah(t).headerClass]))]),_h("keypress",n,e=>"Enter"===e.key&&q(e,ah(t))),Ch(e,n)})
var o=uf(s),a=e=>{Ch(e,DC())}
Rh(o,e=>{m()&&e(a)}),Ch(e,n)}
Rh(J,e=>{t.svelteTableHeader?e(K):e(Y,!1)})
var X=uf(z)
jh(X,21,()=>ah(D),Fh,(e,n,r)=>{var i=Eh(),s=cf(i),o=e=>{var i=Eh()
Uh(cf(i),()=>t.svelteTableRow,()=>({row:ah(n),n:r})),Ch(e,i)},a=e=>{var i=VC(),s=cf(i)
s.__click=[qC,H,n]
var o=lf(s)
jh(o,17,()=>t.columns,Fh,(e,t,i)=>{var s=UC()
s.__click=[HC,G,n,t]
var o=lf(s),a=e=>{const r=bd(()=>ah(t).renderComponent.component||ah(t).renderComponent)
var i=Eh()
Gh(cf(i),()=>ah(r),(e,r)=>{r(e,function(...e){return new Proxy({props:e},Dp)}(()=>ah(t).renderComponent.props||{},{get row(){return ah(n)},get col(){return ah(t)}}))}),Ch(e,i)},l=e=>{var s=Eh(),o=cf(s),a=e=>{var s=Eh()
Hh(cf(s),()=>ah(t).renderValue?ah(t).renderValue(ah(n),r,i):ah(t).value(ah(n),r,i)),Ch(e,s)},l=e=>{var s=xh()
wf(e=>Ph(s,e),[()=>ah(t).renderValue?ah(t).renderValue(ah(n),r,i):ah(t).value(ah(n),r,i)]),Ch(e,s)}
Rh(o,e=>{ah(t).parseHTML?e(a):e(l,!1)},!0),Ch(e,s)}
Rh(o,e=>{ah(t).renderComponent?e(a):e(l,!1)}),wf(e=>Yh(s,0,e,"svelte-dsaf7t"),[()=>Vh(B(["string"==typeof ah(t).class?ah(t).class:null,"function"==typeof ah(t).class?ah(t).class(ah(n),r,i):null,E()]))]),_h("keypress",s,e=>"Enter"===e.key&&G(e,ah(n),ah(t).key)),Ch(e,s)})
var a=uf(o),l=e=>{var t=WC(),r=lf(t)
r.__click=[GC,U,n],Hh(lf(r),()=>ah(n).$expanded?v():_()),wf(e=>Yh(t,0,e,"svelte-dsaf7t"),[()=>Vh(B($()))]),_h("keypress",r,e=>"Enter"===e.key&&U(e,ah(n))),Ch(e,t)}
Rh(a,e=>{m()&&e(l)})
var c=uf(s,2),u=e=>{var i=zC(),s=lf(i)
Uh(lf(s),()=>t.svelteTableExpanded??Su,()=>({row:ah(n),n:r})),wf(e=>{Yh(i,0,e,"svelte-dsaf7t"),op(s,"colspan",ah(N))},[()=>Vh(B(P()))]),Ch(e,i)}
Rh(c,e=>{ah(n).$expanded&&e(u)}),wf(e=>{Yh(s,0,e,"svelte-dsaf7t"),op(s,"tabindex",f()?"0":null)},[()=>Vh(B(["string"==typeof x()?x():null,"function"==typeof x()?x()(ah(n),r):null,ah(n).$expanded&&T(),ah(n).$selected&&C()]))]),_h("keypress",s,e=>"Enter"===e.key&&H(e,ah(n))),Ch(e,i)}
Rh(s,e=>{t.svelteTableRow?e(o):e(a,!1)}),Ch(e,i)}),wf((e,t,n)=>{Yh(W,0,e,"svelte-dsaf7t"),Yh(z,0,t,"svelte-dsaf7t"),Yh(X,0,n,"svelte-dsaf7t")},[()=>Vh(B(b())),()=>Vh(B(y())),()=>Vh(B(w()))]),Ch(e,W),od()}function KC(e){return new Intl.NumberFormat("en-us").format(e)}mh(["click"])
var YC=Sh('<div class="content svelte-u19tu"><!></div>')
function XC(e,t){sd(t,!0)
let n=Bp(t,"visible",15,!0)
const r=[{key:"slot",title:"Slot",value:e=>e.slot,sortable:!0},{key:"name",title:"Name",value:e=>e.name,sortable:!0,renderValue:e=>LC(e.id,e.name),parseHTML:!0},{key:"level",title:"Level",value:e=>e.level,sortable:!0},{key:"rank",title:"Rank",value:e=>e.rank,sortable:!0},{key:"guild_xp",title:"GXP",value:e=>e.guild_xp,sortable:!0,renderValue:e=>KC(e.guild_xp)},{key:"activity",title:"Activity",value:e=>e.activity,sortable:!0},{key:"pack",title:"Pack",value:e=>e.pack,sortable:!0},{key:"max_stamina",title:"Stam",value:e=>e.max_stamina,sortable:!0,renderValue:e=>Gm(e.max_stamina)?"":KC(e.max_stamina)}]
let i=Wd(Yd([]))
const s=({equipped:e})=>!e,o=({player:{id:e}})=>e,a=e=>e.members
function l([e,t]){const n=e.r.filter(s).map(o),r=Bm(Im(n).map(e=>[e,n.filter(t=>t===e).length])),i=(e=>e.r.flatMap(a))(t)
return i.map((l=r,(e,t)=>({...e,slot:t+1,activity:Um(e.last_activity),pack:l[e.id]??0})))
var l}const c=bd(()=>{if(n())return async function(){const[e,t]=await eb([dE(),Dm()])
if(e?.s&&t?.s){const n=l([e,t])
Vd(i,n,!0)}}()})
{const t=e=>{Ch(e,xh("Who's Got What"))}
bx(e,{close:function(){Ig("Whos Got What","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=YC()
Oh(lf(n),()=>ah(c),e=>{Ch(e,xh("Loading..."))},e=>{JC(e,{classNameTable:"whos-got-what",get columns(){return r},get rows(){return ah(i)}})},(e,t)=>{var n=xh()
wf(()=>Ph(n,ah(t))),Ch(e,n)}),Ch(e,n)},$$slots:{title:!0,default:!0}})}od()}const ZC=Yd({visible:!0})
let eT=0
var tT=Object.freeze({__proto__:null,default:function(){eT?ZC.visible=!0:eT=$h(XC,{props:ZC,target:document.body})}})
const nT=()=>{Vg(import("./inventory-Csfc4sPX.js"))},rT=()=>{Vg(import("./bazaar-BPDGMyVd.js"))}
function iT(){Vg(import("./injectQuestBookFull-BT4V3Lqk.js"))}const sT=()=>{Vg(import("./scavenging-BgGU9Qzj.js"))}
const oT=()=>{Vg(import("./toprated-0mSb0jXV.js"))}
const aT=()=>{Vg(import("./trade-B0XqUtFb.js"))}
var lT={crates:{"-":{"-":()=>{Vg(import("./crates-DVYYIVHV.js"))}}},creatures:{"-":{"-":ex}},items:tx,masterrealms:{"-":{"-":ex}},quests:{"-":{"-":ex},view:{"-":()=>{Vg(import("./showAllQuestSteps-D8Fg7aJM.js"))}}},realms:{"-":{"-":ex}},relics:{"-":{"-":ex}},shops:{"-":{"-":ex}},"-":ox,arena:HS,auctionhouse:US,bank:{"-":{"-":()=>{Vg(import("./injectBank-nitIDlwt.js"))}}},blacksmith:{repairall:{"-":function(){uu("fromworld")&&qS()}}},buffmarket:{"-":{"-":()=>{Vg(import("./injectBuffmarket-CyF1Ocpq.js"))}},add:{"-":()=>{Vg(import("./injectBigBuffPacakges-vGOvrLDa.js"))}},manage:{"-":()=>{Vg(import("./injectManage-DNyN2brO.js"))}}},combat:{attackplayer:{"-":nx}},composing:GS,findplayer:{"-":{"-":()=>{Vg(import("./findplayer-CvtJX7LJ.js"))}}},guild:YS,hellforge:{"-":{"-":()=>{Vg(import("./hellforge-CQ28-q_X.js"))}}},inventing:ZS,log:{"-":{"-":()=>{Vg(import("./playerLog-DC2nuwoa.js"))}}},marketplace:{createreq:{"-":()=>{Vg(import("./marketplace-B5MUCyjE.js"))}}},news:sx,notepad:{showlogs:{"-":Jg},invmanagernew:{"-":nT},guildinvmgr:{"-":nT},recipemanager:{"-":av},auctionsearch:{"-":ev},onlineplayers:{"-":rv},quicklinkmanager:{"-":sv},monsterlog:{"-":Kg},quickextract:{"-":iv},quickwear:{"-":ov},fsboxcontent:{"-":Yg},bufflogcontent:{"-":Qg},newguildlog:{"-":Xg},findbuffs:{"-":tv},findother:{"-":nv},savesettings:{"-":()=>{Vg(import("./load-BLkn7J-K.js"))}},reliclist:{"-":lv},"-":{"-":function(){}}},points:{"-":{"-":()=>{Vg(import("./points-C7KfK9tw.js"))}}},potionbazaar:{"-":{"-":rT},buyitem:{"-":rT}},privatemessage:{"-":{"-":()=>{Vg(import("./privateMsg-BU7R0ils.js"))}}},profile:{"-":{"-":nx},managecombatset:{"-":nx},report:{"-":nx},equipitem:{"-":nx},useitem:{"-":nx},changebio:{"-":WS},dropitems:{"-":function(){Vg(import("./injectProfileDropItems-CN2FwTD1.js"))}}},pvpladder:{"-":{"-":()=>{Vg(import("./ladder-D2jzo9Ta.js"))}}},questbook:{"-":{"-":iT},atoz:{"-":iT},viewquest:{"-":()=>{Vg(import("./injectQuestTracker-hyhCuB5t.js"))}}},quickbuff:{"-":{"-":()=>{Vg(import("./quickBuff-Crgk2QuM.js"))}}},scavenging:{"-":{"-":sT},process:{"-":sT}},settings:{"-":{"-":()=>{Vg(import("./injectSettings-Bn1B4sW_.js"))}}},skills:{"-":{"-":()=>{}}},superelite:{"-":{"-":()=>{Vg(import("./superelite-Cd5-3dhn.js"))}}},tempinv:{"-":{"-":()=>{Vg(import("./mailbox-CJqFFfEN.js"))}}},temple:{"-":{"-":Qk}},titan:{"-":{"-":()=>{Vg(import("./injectTitan-CTZHfDFT.js"))}}},toprated:{xp:{"-":oT},monthlyxp:{"-":oT},gold:{"-":oT},killstreak:{"-":oT},bounties:{"-":oT},risingstars:{"-":oT},arena:{"-":oT},superelites:{"-":oT},smasher:{"-":oT},globalquest:{"-":()=>{Vg(import("./globalQuest-CaCe6xdG.js"))}}},trade:{"-":{"-":aT},sendgold:{"-":aT},createsecure:{"-":aT},docreatesecure:{"-":aT}},world:{"-":{"-":qS}}}
function cT(e){return Ng("ul",e)}const uT=e=>"newWindow"in e&&e.url&&e.name
function dT(e,t){const n=Hg(t,cT())
e.filter(uT).forEach(e=>{Hg(Hg(n,$b()),function(e){const t=bv({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return gm(t,()=>Ig("chrome","quick link",e.name)),t}(e))})}function fT(e){const t=Dg({className:"fshQuickLinks",style:{left:`${yc("quickLinksLeftPx")}px`,top:`${yc("quickLinksTopPx")}px`}})
t.classList.toggle("fshFixed",yc("keepHelperMenuOnScreen")),yc("draggableQuickLinks")&&(t.classList.add("fshMove"),Pg(t)),dT(e,t),Hg(document.body,t)}function hT(){if(!Lc(".mainbody"))return
const e=ay("quickLinks")||[]
e.length&&fT(e)}let pT=0,gT=0,vT=0,_T="",mT=0,bT=0
function yT(e){return uu(e)||"-"}function wT(e){const t=Lc(e)
return t?.value||"-"}function kT(){if(Pc(lT[pT])&&Pc(lT[pT][gT])&&Tc(lT[pT][gT][vT]))return lT[pT][gT][vT]}function ST(){""!==document.location.search?(pT=yT("cmd"),gT=yT("subcmd"),vT=yT("subcmd2"),["points","privatemessage"].includes(pT)&&(_T=`/${yT("type")}`)):(pT=wT('input[name="cmd"]'),gT=wT('input[name="subcmd"]'),vT=wT('input[name="subcmd2"]')),Vc.cmd=pT,Vc.subcmd=gT,Vc.subcmd2=vT,bT=`${pT}/${gT}/${vT}${_T}`,mT=kT()}function xT(){Tc(mT)&&(Cc(bT),mT())}async function ET(e){ST(),await e,BS(),lu(3,xT),yc("playNewMessageSound")&&lu(3,pg),xm()||lu(3,hT)}const CT=[()=>!("showPicker"in HTMLSelectElement.prototype),()=>!navigator.cookieEnabled,()=>window!==window.parent,function(){if(!d){const e=l(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
u=c.includes(e),d=!0}return u}]
function TT(e,t){if(CT.some(e=>e()))return
const n=Ic("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
qc(),function(e,t){Vc.gmInfo=$c(decodeURIComponent(t)),Vc.gmInfo?Vc.fshVer=e:Vc.fshVer=`${e}_native`,Vc.calfVer="157"}(e,t),o(),ca(),ET(n)}export{D_ as $,Rw as A,Sh as B,uf as C,cf as D,lf as E,jh as F,Rh as G,_p as H,Vd as I,ah as J,zd as K,Ch as L,jw as M,od as N,_h as O,wf as P,Ph as Q,J_ as R,op as S,ch as T,bp as U,F_ as V,wm as W,Yl as X,hc as Y,bv as Z,vl as _,G_ as a,nl as a$,eb as a0,vv as a1,ry as a2,Pb as a3,rg as a4,Lb as a5,gg as a6,Pm as a7,Ra as a8,cT as a9,yc as aA,qg as aB,Rg as aC,cl as aD,Gw as aE,Oh as aF,Eh as aG,wc as aH,yp as aI,wa as aJ,ba as aK,iw as aL,Kl as aM,KC as aN,Cw as aO,Pa as aP,Wa as aQ,ty as aR,tS as aS,sg as aT,nw as aU,Zy as aV,ly as aW,X_ as aX,Ky as aY,Yk as aZ,tl as a_,Ag as aa,Jy as ab,xv as ac,Qc as ad,Sv as ae,q_ as af,B_ as ag,gc as ah,vc as ai,vm as aj,Wd as ak,Yd as al,ay as am,tp as an,Jb as ao,mh as ap,Uw as aq,uu as ar,qw as as,Jg as at,Kg as au,Ec as av,Gm as aw,Hb as ax,Vc as ay,Wc as az,Gc as b,pc as b$,cu as b0,wl as b1,Ya as b2,Rx as b3,fc as b4,sw as b5,ng as b6,Ib as b7,s as b8,mS as b9,Ta as bA,Tl as bB,bd as bC,xh as bD,_l as bE,fl as bF,Im as bG,oh as bH,Yh as bI,e_ as bJ,t_ as bK,Tk as bL,tb as bM,Ma as bN,Fl as bO,Bl as bP,Fh as bQ,wx as bR,Ia as bS,tw as bT,bl as bU,Mp as bV,Ip as bW,Wy as bX,qa as bY,Mk as bZ,Jc as b_,Cl as ba,za as bb,Ul as bc,Pl as bd,$l as be,Rl as bf,Ll as bg,Hk as bh,Cv as bi,gl as bj,yv as bk,$a as bl,Nl as bm,pv as bn,$c as bo,lu as bp,Ew as bq,Bg as br,rc as bs,nc as bt,sc as bu,ic as bv,oc as bw,tg as bx,ig as by,Tc as bz,ag as c,aa as c$,Zm as c0,Z_ as c1,Sa as c2,Ea as c3,Za as c4,Hp as c5,Np as c6,Fp as c7,Dl as c8,Mh as c9,rl as cA,nS as cB,zc as cC,yl as cD,gv as cE,yk as cF,hx as cG,zl as cH,pm as cI,px as cJ,Vl as cK,Oa as cL,mk as cM,qm as cN,LC as cO,al as cP,Zl as cQ,Tw as cR,tc as cS,Ql as cT,Ua as cU,Yy as cV,Ba as cW,_S as cX,ny as cY,ya as cZ,a as c_,Ol as ca,Hl as cb,Gl as cc,Wl as cd,V_ as ce,z_ as cf,Q_ as cg,Il as ch,Ml as ci,ql as cj,ma as ck,jl as cl,Qy as cm,km as cn,cy as co,U_ as cp,ka as cq,em as cr,Vh as cs,uc as ct,nm as cu,VE as cv,Pc as cw,_c as cx,Xl as cy,dc as cz,Ug as d,Cm as d$,Dv as d0,n_ as d1,Pk as d2,e as d3,Ic as d4,Vg as d5,KE as d6,Wh as d7,Ah as d8,Cu as d9,j_ as dA,lc as dB,Hm as dC,Zh as dD,Ga as dE,Aa as dF,Qb as dG,Na as dH,Da as dI,Jl as dJ,Zg as dK,dl as dL,$b as dM,Ha as dN,Lk as dO,Xy as dP,ja as dQ,zS as dR,Sx as dS,Cp as dT,gp as dU,Jp as dV,kl as dW,Sl as dX,bx as dY,sp as dZ,kc as d_,hm as da,Ja as db,Ca as dc,ac as dd,$m as de,ec as df,Cc as dg,rx as dh,iT as di,XS as dj,rb as dk,nb as dl,dE as dm,lE as dn,mv as dp,pE as dq,La as dr,cE as ds,m_ as dt,u_ as du,f_ as dv,h_ as dw,d_ as dx,v_ as dy,zE as dz,H_ as e,Xa as e0,Gh as e1,sl as e2,cx as e3,gx as e4,td as e5,El as e6,rw as e7,Em as e8,ob as e9,Jm as ea,sb as eb,Vm as ec,Km as ed,zm as ee,Qm as ef,Ym as eg,Wm as eh,Xm as ei,pb as ej,db as ek,hb as el,fb as em,cb as en,om as eo,Qa as ep,ol as eq,Kf as er,Gd as es,Jd as et,iv as eu,Op as ev,zg as ew,ov as ex,el as ey,TT as ez,Bm as f,t as g,_m as h,Hg as i,Tm as j,Jw as k,n as l,eg as m,$h as n,gm as o,fg as p,Lc as q,l as r,Ig as s,Ng as t,Dg as u,vu as v,vf as w,sd as x,Bp as y,Tp as z}
//# sourceMappingURL=calfSystem-CQOGdqPv.js.map
