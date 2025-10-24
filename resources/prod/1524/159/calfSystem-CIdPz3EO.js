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
function f(e,t,n,r,i,s,o){try{var a=e[s](o),l=a.value}catch(e){return void n(e)}a.done?t(l):Promise.resolve(l).then(r,i)}function p(e){return function(){var t=this,n=arguments
return new Promise(function(r,i){var s=e.apply(t,n)
function o(e){f(s,r,i,o,a,"next",e)}function a(e){f(s,r,i,o,a,"throw",e)}o(void 0)})}}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(null,arguments)}function g(e,t){if(null==e)return{}
var n={}
for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue
n[r]=e[r]}return n}var v="undefined"!=typeof window?window:void 0,_="undefined"!=typeof globalThis?globalThis:v,m=Array.prototype,b=m.forEach,y=m.indexOf,w=null==_?void 0:_.navigator,k=null==_?void 0:_.document,x=null==_?void 0:_.location,S=null==_?void 0:_.fetch,E=null!=_&&_.XMLHttpRequest&&"withCredentials"in new _.XMLHttpRequest?_.XMLHttpRequest:void 0,P=null==_?void 0:_.AbortController,C=null==w?void 0:w.userAgent,L=null!=v?v:{},T={DEBUG:!1,LIB_VERSION:"1.280.1"},O=["$snapshot","$pageview","$pageleave","$set","survey dismissed","survey sent","survey shown","$identify","$groupidentify","$create_alias","$$client_ingestion_warning","$web_experiment_applied","$feature_enrollment_update","$feature_flag_called"]
function I(e,t){return-1!==e.indexOf(t)}var A=function(e){return e.trim()},M=function(e){return e.replace(/^\$/,"")},R=Array.isArray,j=Object.prototype,F=j.hasOwnProperty,N=j.toString,D=R||function(e){return"[object Array]"===N.call(e)},q=e=>"function"==typeof e,B=e=>e===Object(e)&&!D(e),H=e=>{if(B(e)){for(var t in e)if(F.call(e,t))return!1
return!0}return!1},U=e=>void 0===e,G=e=>"[object String]"==N.call(e),W=e=>G(e)&&0===e.trim().length,z=e=>null===e,V=e=>U(e)||z(e),Q=e=>"[object Number]"==N.call(e),K=e=>"[object Boolean]"===N.call(e),J=e=>I(O,e)
function Y(e){return null===e||"object"!=typeof e}function X(e,t){return Object.prototype.toString.call(e)==="[object "+t+"]"}function Z(e){return!U(Event)&&function(e,t){try{return e instanceof t}catch(e){return!1}}(e,Event)}var ee=[!0,"true",1,"1","yes"],te=e=>I(ee,e),ne=[!1,"false",0,"0","no"]
function re(e,t,n,r,i){return t>n&&(r.warn("min cannot be greater than max."),t=n),Q(e)?e>n?(r.warn(" cannot be  greater than max: "+n+". Using max value instead."),n):e<t?(r.warn(" cannot be less than min: "+t+". Using min value instead."),t):e:(r.warn(" must be a number. using max or fallback. max: "+n+", fallback: "+i),re(i||n,t,n,r))}class ie{constructor(e){this._options=e,this._buckets={},this._refillBuckets=()=>{Object.keys(this._buckets).forEach(e=>{var t=this._getBucket(e)+this._refillRate
t>=this._bucketSize?delete this._buckets[e]:this._setBucket(e,t)})},this._getBucket=e=>this._buckets[String(e)],this._setBucket=(e,t)=>{this._buckets[String(e)]=t},this.consumeRateLimit=e=>{var t,n,r=null!==(t=this._getBucket(e))&&void 0!==t?t:this._bucketSize
if(0===(r=Math.max(r-1,0)))return!0
this._setBucket(e,r)
var i=0===r
return i&&(null==(n=this._onBucketRateLimited)||n.call(this,e)),i},this._onBucketRateLimited=this._options._onBucketRateLimited,this._bucketSize=re(this._options.bucketSize,0,100,this._options._logger),this._refillRate=re(this._options.refillRate,0,this._bucketSize,this._options._logger),this._refillInterval=re(this._options.refillInterval,0,864e5,this._options._logger),this._removeInterval=setInterval(()=>{this._refillBuckets()},this._refillInterval)}stop(){this._removeInterval&&(clearInterval(this._removeInterval),this._removeInterval=void 0)}}var se,oe,ae,le=e=>e instanceof Error
function ce(e){var t=globalThis._posthogChunkIds
if(t){var n=Object.keys(t)
return ae&&n.length===oe||(oe=n.length,ae=n.reduce((n,r)=>{se||(se={})
var i=se[r]
if(i)n[i[0]]=i[1]
else for(var s=e(r),o=s.length-1;o>=0;o--){var a=s[o],l=null==a?void 0:a.filename,c=t[r]
if(l&&c){n[l]=c,se[r]=[l,c]
break}}return n},{})),ae}}var ue="?"
function de(e,t,n,r){var i={platform:"web:javascript",filename:e,function:"<anonymous>"===t?ue:t,in_app:!0}
return U(n)||(i.lineno=n),U(r)||(i.colno=r),i}var fe=(e,t)=>{var n=-1!==e.indexOf("safari-extension"),r=-1!==e.indexOf("safari-web-extension")
return n||r?[-1!==e.indexOf("@")?e.split("@")[0]:ue,n?"safari-extension:"+t:"safari-web-extension:"+t]:[e,t]},pe=/^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,he=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,ge=/\((\S*)(?::(\d+))(?::(\d+))\)/,ve=e=>{var t=pe.exec(e)
if(t){var[,n,r,i]=t
return de(n,ue,+r,+i)}var s=he.exec(e)
if(s){if(s[2]&&0===s[2].indexOf("eval")){var o=ge.exec(s[2])
o&&(s[2]=o[1],s[3]=o[2],s[4]=o[3])}var[a,l]=fe(s[1]||ue,s[2])
return de(l,a,s[3]?+s[3]:void 0,s[4]?+s[4]:void 0)}},_e=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,me=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,be=e=>{var t=_e.exec(e)
if(t){if(t[3]&&t[3].indexOf(" > eval")>-1){var n=me.exec(t[3])
n&&(t[1]=t[1]||"eval",t[3]=n[1],t[4]=n[2],t[5]="")}var r=t[3],i=t[1]||ue
return[i,r]=fe(i,r),de(r,i,t[4]?+t[4]:void 0,t[5]?+t[5]:void 0)}},ye=/\(error: (.*)\)/
function we(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return function(e,n){void 0===n&&(n=0)
for(var r=[],i=e.split("\n"),s=n;s<i.length;s++){var o=i[s]
if(!(o.length>1024)){var a=ye.test(o)?o.replace(ye,"$1"):o
if(!a.match(/\S*Error: /)){for(var l of t){var c=l(a)
if(c){r.push(c)
break}}if(r.length>=50)break}}}return function(e){if(!e.length)return[]
var t=Array.from(e)
return t.reverse(),t.slice(0,50).map(e=>{return h({},e,{filename:e.filename||(n=t,n[n.length-1]||{}).filename,function:e.function||ue})
var n})}(r)}}class ke{constructor(e,t,n){void 0===e&&(e=[]),void 0===t&&(t=[]),void 0===n&&(n=[]),this.coercers=e,this.modifiers=n,this.stackParser=we(...t)}buildFromUnknown(e,t){void 0===t&&(t={})
var n=t&&t.mechanism||{handled:!0,type:"generic"},r=this.buildCoercingContext(n,t,0).apply(e),i=this.buildParsingContext(),s=this.parseStacktrace(r,i)
return{$exception_list:this.convertToExceptionList(s,n),$exception_level:"error"}}modifyFrames(e){var t=this
return p(function*(){for(var n of e)n.stacktrace&&n.stacktrace.frames&&D(n.stacktrace.frames)&&(n.stacktrace.frames=yield t.applyModifiers(n.stacktrace.frames))
return e})()}coerceFallback(e){var t
return{type:"Error",value:"Unknown error",stack:null==(t=e.syntheticException)?void 0:t.stack,synthetic:!0}}parseStacktrace(e,t){var n,r
return null!=e.cause&&(n=this.parseStacktrace(e.cause,t)),""!=e.stack&&null!=e.stack&&(r=this.applyChunkIds(this.stackParser(e.stack,e.synthetic?1:0),t.chunkIdMap)),h({},e,{cause:n,stack:r})}applyChunkIds(e,t){return e.map(e=>(e.filename&&t&&(e.chunk_id=t[e.filename]),e))}applyCoercers(e,t){for(var n of this.coercers)if(n.match(e))return n.coerce(e,t)
return this.coerceFallback(t)}applyModifiers(e){var t=this
return p(function*(){var n=e
for(var r of t.modifiers)n=yield r(n)
return n})()}convertToExceptionList(e,t){var n,r,i,s={type:e.type,value:e.value,mechanism:{type:null!==(n=t.type)&&void 0!==n?n:"generic",handled:null===(r=t.handled)||void 0===r||r,synthetic:null!==(i=e.synthetic)&&void 0!==i&&i}}
e.stack&&(s.stacktrace={type:"raw",frames:e.stack})
var o=[s]
return null!=e.cause&&o.push(...this.convertToExceptionList(e.cause,h({},t,{handled:!0}))),o}buildParsingContext(){return{chunkIdMap:ce(this.stackParser)}}buildCoercingContext(e,t,n){void 0===n&&(n=0)
var r=(n,r)=>{if(r<=4){var i=this.buildCoercingContext(e,t,r)
return this.applyCoercers(n,i)}}
return h({},t,{syntheticException:0==n?t.syntheticException:void 0,mechanism:e,apply:e=>r(e,n),next:e=>r(e,n+1)})}}class xe{match(e){return this.isDOMException(e)||this.isDOMError(e)}coerce(e,t){var n=G(e.stack)
return{type:this.getType(e),value:this.getValue(e),stack:n?e.stack:void 0,cause:e.cause?t.next(e.cause):void 0,synthetic:!1}}getType(e){return this.isDOMError(e)?"DOMError":"DOMException"}getValue(e){var t=e.name||(this.isDOMError(e)?"DOMError":"DOMException")
return e.message?t+": "+e.message:t}isDOMException(e){return X(e,"DOMException")}isDOMError(e){return X(e,"DOMError")}}class Se{match(e){return(e=>e instanceof Error)(e)}coerce(e,t){return{type:this.getType(e),value:this.getMessage(e,t),stack:this.getStack(e),cause:e.cause?t.next(e.cause):void 0,synthetic:!1}}getType(e){return e.name||e.constructor.name}getMessage(e,t){var n=e.message
return n.error&&"string"==typeof n.error.message?String(n.error.message):String(n)}getStack(e){return e.stacktrace||e.stack||void 0}}class Ee{constructor(){}match(e){return X(e,"ErrorEvent")&&null!=e.error}coerce(e,t){var n
return t.apply(e.error)||{type:"ErrorEvent",value:e.message,stack:null==(n=t.syntheticException)?void 0:n.stack,synthetic:!0}}}var Pe=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
class Ce{match(e){return"string"==typeof e}coerce(e,t){var n,[r,i]=this.getInfos(e)
return{type:null!=r?r:"Error",value:null!=i?i:e,stack:null==(n=t.syntheticException)?void 0:n.stack,synthetic:!0}}getInfos(e){var t="Error",n=e,r=e.match(Pe)
return r&&(t=r[1],n=r[2]),[t,n]}}var Le=["fatal","error","warning","log","info","debug"]
function $e(e,t){void 0===t&&(t=40)
var n=Object.keys(e)
if(n.sort(),!n.length)return"[object has no keys]"
for(var r=n.length;r>0;r--){var i=n.slice(0,r).join(", ")
if(!(i.length>t))return r===n.length||i.length<=t?i:i.slice(0,t)+"..."}return""}class Te{match(e){return"object"==typeof e&&null!==e}coerce(e,t){var n,r=this.getErrorPropertyFromObject(e)
return r?t.apply(r):{type:this.getType(e),value:this.getValue(e),stack:null==(n=t.syntheticException)?void 0:n.stack,level:this.isSeverityLevel(e.level)?e.level:"error",synthetic:!0}}getType(e){return Z(e)?e.constructor.name:"Error"}getValue(e){if("name"in e&&"string"==typeof e.name){var t="'"+e.name+"' captured as exception"
return"message"in e&&"string"==typeof e.message&&(t+=" with message: '"+e.message+"'"),t}if("message"in e&&"string"==typeof e.message)return e.message
var n=this.getObjectClassName(e)
return(n&&"Object"!==n?"'"+n+"'":"Object")+" captured as exception with keys: "+$e(e)}isSeverityLevel(e){return G(e)&&!W(e)&&Le.indexOf(e)>=0}getErrorPropertyFromObject(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=e[t]
if(le(n))return n}}getObjectClassName(e){try{var t=Object.getPrototypeOf(e)
return t?t.constructor.name:void 0}catch(e){return}}}class Oe{match(e){return Z(e)}coerce(e,t){var n,r=e.constructor.name
return{type:r,value:r+" captured as exception with keys: "+$e(e),stack:null==(n=t.syntheticException)?void 0:n.stack,synthetic:!0}}}class Ie{match(e){return Y(e)}coerce(e,t){var n
return{type:"Error",value:"Primitive value captured as exception: "+String(e),stack:null==(n=t.syntheticException)?void 0:n.stack,synthetic:!0}}}class Ae{match(e){return X(e,"PromiseRejectionEvent")}coerce(e,t){var n,r=this.getUnhandledRejectionReason(e)
return Y(r)?{type:"UnhandledRejection",value:"Non-Error promise rejection captured with value: "+String(r),stack:null==(n=t.syntheticException)?void 0:n.stack,synthetic:!0}:t.apply(r)}getUnhandledRejectionReason(e){if(Y(e))return e
try{if("reason"in e)return e.reason
if("detail"in e&&"reason"in e.detail)return e.detail.reason}catch(e){}return e}}var Me=e=>{var t={_log:function(t){if(v&&(T.DEBUG||L.POSTHOG_DEBUG)&&!U(v.console)&&v.console){for(var n=("__rrweb_original__"in v.console[t]?v.console[t].__rrweb_original__:v.console[t]),r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s]
n(e,...i)}},info:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("log",...n)},warn:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("warn",...n)},error:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("error",...n)},critical:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
console.error(e,...n)},uninitializedWarning:e=>{t.error("You must initialize PostHog before calling "+e)},createLogger:t=>Me(e+" "+t)}
return t},Re=Me("[PostHog.js]"),je=Re.createLogger,Fe={}
function Ne(e,t,n){if(D(e))if(b&&e.forEach===b)e.forEach(t,n)
else if("length"in e&&e.length===+e.length)for(var r=0,i=e.length;r<i;r++)if(r in e&&t.call(n,e[r],r)===Fe)return}function De(e,t,n){if(!V(e)){if(D(e))return Ne(e,t,n)
if((e=>e instanceof FormData)(e)){for(var r of e.entries())if(t.call(n,r[1],r[0])===Fe)return}else for(var i in e)if(F.call(e,i)&&t.call(n,e[i],i)===Fe)return}}var qe=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return Ne(n,function(t){for(var n in t)void 0!==t[n]&&(e[n]=t[n])}),e},Be=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return Ne(n,function(t){Ne(t,function(t){e.push(t)})}),e}
function He(e){for(var t=Object.keys(e),n=t.length,r=new Array(n);n--;)r[n]=[t[n],e[t[n]]]
return r}var Ue=function(e){try{return e()}catch(e){return}},Ge=function(e){return function(){try{for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return e.apply(this,n)}catch(e){Re.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."),Re.critical(e)}}},We=function(e){var t={}
return De(e,function(e,n){(G(e)&&e.length>0||Q(e))&&(t[n]=e)}),t}
var ze=["herokuapp.com","vercel.app","netlify.app"]
function Ve(e){var t=null==e?void 0:e.hostname
if(!G(t))return!1
var n=t.split(".").slice(-2).join(".")
for(var r of ze)if(n===r)return!1
return!0}function Qe(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}function Ke(e,t,n,r){var{capture:i=!1,passive:s=!0}=null!=r?r:{}
null==e||e.addEventListener(t,n,{capture:i,passive:s})}var Je="$people_distinct_id",Ye="__alias",Xe="__timers",Ze="$autocapture_disabled_server_side",et="$heatmaps_enabled_server_side",tt="$exception_capture_enabled_server_side",nt="$error_tracking_suppression_rules",rt="$error_tracking_capture_extension_exceptions",it="$web_vitals_enabled_server_side",st="$dead_clicks_enabled_server_side",ot="$web_vitals_allowed_metrics",at="$session_recording_remote_config",lt="$sesid",ct="$session_is_sampled",ut="$enabled_feature_flags",dt="$early_access_features",ft="$feature_flag_details",pt="$stored_person_properties",ht="$stored_group_properties",gt="$surveys",vt="$surveys_activated",_t="$flag_call_reported",mt="$user_state",bt="$client_session_props",yt="$capture_rate_limit",wt="$initial_campaign_params",kt="$initial_referrer_info",xt="$initial_person_info",St="$epp",Et="__POSTHOG_TOOLBAR__",Pt="$posthog_cookieless",Ct=[Je,Ye,"__cmpns",Xe,"$session_recording_enabled_server_side",et,lt,ut,nt,mt,dt,ft,ht,pt,gt,_t,bt,yt,wt,kt,St,xt]
function Lt(e){return e instanceof Element&&(e.id===Et||!(null==e.closest||!e.closest(".toolbar-global-fade-container")))}function $t(e){return!!e&&1===e.nodeType}function Tt(e,t){return!!e&&!!e.tagName&&e.tagName.toLowerCase()===t.toLowerCase()}function Ot(e){return!!e&&3===e.nodeType}function It(e){return!!e&&11===e.nodeType}function At(e){return e?A(e).split(/\s+/):[]}function Mt(e){var t=null==v?void 0:v.location.href
return!!(t&&e&&e.some(e=>t.match(e)))}function Rt(e){var t=""
switch(typeof e.className){case"string":t=e.className
break
case"object":t=(e.className&&"baseVal"in e.className?e.className.baseVal:null)||e.getAttribute("class")||""
break
default:t=""}return At(t)}function jt(e){return V(e)?null:A(e).split(/(\s+)/).filter(e=>Zt(e)).join("").replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)}function Ft(e){var t=""
return Wt(e)&&!zt(e)&&e.childNodes&&e.childNodes.length&&De(e.childNodes,function(e){var n
Ot(e)&&e.textContent&&(t+=null!==(n=jt(e.textContent))&&void 0!==n?n:"")}),A(t)}function Nt(e){return U(e.target)?e.srcElement||null:null!=(t=e.target)&&t.shadowRoot?e.composedPath()[0]||null:e.target||null
var t}var Dt=["a","button","form","input","select","textarea","label"]
function qt(e,t){if(U(t))return!0
var n,r=function(e){if(t.some(t=>e.matches(t)))return{v:!0}}
for(var i of e)if(n=r(i))return n.v
return!1}function Bt(e){var t=e.parentNode
return!(!t||!$t(t))&&t}var Ht=[".ph-no-rageclick",".ph-no-capture"],Ut=e=>!e||Tt(e,"html")||!$t(e),Gt=(e,t)=>{if(!v||Ut(e))return{parentIsUsefulElement:!1,targetElementList:[]}
for(var n=!1,r=[e],i=e;i.parentNode&&!Tt(i,"body");)if(It(i.parentNode))r.push(i.parentNode.host),i=i.parentNode.host
else{var s=Bt(i)
if(!s)break
if(t||Dt.indexOf(s.tagName.toLowerCase())>-1)n=!0
else{var o=v.getComputedStyle(s)
o&&"pointer"===o.getPropertyValue("cursor")&&(n=!0)}r.push(s),i=s}return{parentIsUsefulElement:n,targetElementList:r}}
function Wt(e){for(var t=e;t.parentNode&&!Tt(t,"body");t=t.parentNode){var n=Rt(t)
if(I(n,"ph-sensitive")||I(n,"ph-no-capture"))return!1}if(I(Rt(e),"ph-include"))return!0
var r=e.type||""
if(G(r))switch(r.toLowerCase()){case"hidden":case"password":return!1}var i=e.name||e.id||""
return!G(i)||!/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g,""))}function zt(e){return!!(Tt(e,"input")&&!["button","checkbox","submit","reset"].includes(e.type)||Tt(e,"select")||Tt(e,"textarea")||"true"===e.getAttribute("contenteditable"))}var Vt="(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",Qt=new RegExp("^(?:"+Vt+")$"),Kt=new RegExp(Vt),Jt="\\d{3}-?\\d{2}-?\\d{4}",Yt=new RegExp("^("+Jt+")$"),Xt=new RegExp("("+Jt+")")
function Zt(e,t){if(void 0===t&&(t=!0),V(e))return!1
if(G(e)){if(e=A(e),(t?Qt:Kt).test((e||"").replace(/[- ]/g,"")))return!1
if((t?Yt:Xt).test(e))return!1}return!0}function en(e){var t=Ft(e)
return Zt(t=(t+" "+tn(e)).trim())?t:""}function tn(e){var t=""
return e&&e.childNodes&&e.childNodes.length&&De(e.childNodes,function(e){var n
if(e&&"span"===(null==(n=e.tagName)?void 0:n.toLowerCase()))try{var r=Ft(e)
t=(t+" "+r).trim(),e.childNodes&&e.childNodes.length&&(t=(t+" "+tn(e)).trim())}catch(e){Re.error("[AutoCapture]",e)}}),t}function nn(e){return function(e){var t=e.map(e=>{var t,n,r=""
if(e.tag_name&&(r+=e.tag_name),e.attr_class)for(var i of(e.attr_class.sort(),e.attr_class))r+="."+i.replace(/"/g,"")
var s=h({},e.text?{text:e.text}:{},{"nth-child":null!==(t=e.nth_child)&&void 0!==t?t:0,"nth-of-type":null!==(n=e.nth_of_type)&&void 0!==n?n:0},e.href?{href:e.href}:{},e.attr_id?{attr_id:e.attr_id}:{},e.attributes),o={}
return He(s).sort((e,t)=>{var[n]=e,[r]=t
return n.localeCompare(r)}).forEach(e=>{var[t,n]=e
return o[rn(t.toString())]=rn(n.toString())}),(r+=":")+He(o).map(e=>{var[t,n]=e
return t+'="'+n+'"'}).join("")})
return t.join(";")}(function(e){return e.map(e=>{var t,n,r={text:null==(t=e.$el_text)?void 0:t.slice(0,400),tag_name:e.tag_name,href:null==(n=e.attr__href)?void 0:n.slice(0,2048),attr_class:sn(e),attr_id:e.attr__id,nth_child:e.nth_child,nth_of_type:e.nth_of_type,attributes:{}}
return He(e).filter(e=>{var[t]=e
return 0===t.indexOf("attr__")}).forEach(e=>{var[t,n]=e
return r.attributes[t]=n}),r})}(e))}function rn(e){return e.replace(/"|\\"/g,'\\"')}function sn(e){var t=e.attr__class
return t?D(t)?t:At(t):void 0}class on{constructor(){this.clicks=[]}isRageClick(e,t,n){var r=this.clicks[this.clicks.length-1]
if(r&&Math.abs(e-r.x)+Math.abs(t-r.y)<30&&n-r.timestamp<1e3){if(this.clicks.push({x:e,y:t,timestamp:n}),3===this.clicks.length)return!0}else this.clicks=[{x:e,y:t,timestamp:n}]
return!1}}var an="$copy_autocapture",ln=function(e){return e.GZipJS="gzip-js",e.Base64="base64",e}({}),cn=e=>{var t=null==k?void 0:k.createElement("a")
return U(t)?null:(t.href=e,t)},un=function(e,t){for(var n,r=((e.split("#")[0]||"").split(/\?(.*)/)[1]||"").replace(/^\?+/g,"").split("&"),i=0;i<r.length;i++){var s=r[i].split("=")
if(s[0]===t){n=s
break}}if(!D(n)||n.length<2)return""
var o=n[1]
try{o=decodeURIComponent(o)}catch(e){Re.error("Skipping decoding for malformed query param: "+o)}return o.replace(/\+/g," ")},dn=function(e,t,n){if(!e||!t||!t.length)return e
for(var r=e.split("#"),i=r[0]||"",s=r[1],o=i.split("?"),a=o[1],l=o[0],c=(a||"").split("&"),u=[],d=0;d<c.length;d++){var f=c[d].split("=")
D(f)&&(t.includes(f[0])?u.push(f[0]+"="+n):u.push(c[d]))}var p=l
return null!=a&&(p+="?"+u.join("&")),null!=s&&(p+="#"+s),p},fn=function(e,t){var n=e.match(new RegExp(t+"=([^&]*)"))
return n?n[1]:null},pn=je("[AutoCapture]")
function hn(e,t){return t.length>e?t.slice(0,e)+"...":t}function gn(e){if(e.previousElementSibling)return e.previousElementSibling
var t=e
do{t=t.previousSibling}while(t&&!$t(t))
return t}function vn(e,t){for(var n,r,{e:i,maskAllElementAttributes:s,maskAllText:o,elementAttributeIgnoreList:a,elementsChainAsString:l}=t,c=[e],u=e;u.parentNode&&!Tt(u,"body");)It(u.parentNode)?(c.push(u.parentNode.host),u=u.parentNode.host):(c.push(u.parentNode),u=u.parentNode)
var d,f=[],p={},h=!1,g=!1
if(De(c,e=>{var t=Wt(e)
"a"===e.tagName.toLowerCase()&&(h=e.getAttribute("href"),h=t&&h&&Zt(h)&&h),I(Rt(e),"ph-no-capture")&&(g=!0),f.push(function(e,t,n,r){var i=e.tagName.toLowerCase(),s={tag_name:i}
Dt.indexOf(i)>-1&&!n&&("a"===i.toLowerCase()||"button"===i.toLowerCase()?s.$el_text=hn(1024,en(e)):s.$el_text=hn(1024,Ft(e)))
var o=Rt(e)
o.length>0&&(s.classes=o.filter(function(e){return""!==e})),De(e.attributes,function(n){var i
if((!zt(e)||-1!==["name","id","class","aria-label"].indexOf(n.name))&&(null==r||!r.includes(n.name))&&!t&&Zt(n.value)&&(i=n.name,!G(i)||"_ngcontent"!==i.substring(0,10)&&"_nghost"!==i.substring(0,7))){var o=n.value
"class"===n.name&&(o=At(o).join(" ")),s["attr__"+n.name]=hn(1024,o)}})
for(var a=1,l=1,c=e;c=gn(c);)a++,c.tagName===e.tagName&&l++
return s.nth_child=a,s.nth_of_type=l,s}(e,s,o,a))
var n=function(e){if(!Wt(e))return{}
var t={}
return De(e.attributes,function(e){if(e.name&&0===e.name.indexOf("data-ph-capture-attribute")){var n=e.name.replace("data-ph-capture-attribute-",""),r=e.value
n&&r&&Zt(r)&&(t[n]=r)}}),t}(e)
qe(p,n)}),g)return{props:{},explicitNoCapture:g}
if(o||("a"===e.tagName.toLowerCase()||"button"===e.tagName.toLowerCase()?f[0].$el_text=en(e):f[0].$el_text=Ft(e)),h){var _,m
f[0].attr__href=h
var b=null==(_=cn(h))?void 0:_.host,y=null==v||null==(m=v.location)?void 0:m.host
b&&y&&b!==y&&(d=h)}return{props:qe({$event_type:i.type,$ce_version:1},l?{}:{$elements:f},{$elements_chain:nn(f)},null!=(n=f[0])&&n.$el_text?{$el_text:null==(r=f[0])?void 0:r.$el_text}:{},d&&"click"===i.type?{$external_click_url:d}:{},p)}}class _n{constructor(e){this._initialized=!1,this._isDisabledServerSide=null,this.rageclicks=new on,this._elementsChainAsString=!1,this.instance=e,this._elementSelectors=null}get _config(){var e,t,n=B(this.instance.config.autocapture)?this.instance.config.autocapture:{}
return n.url_allowlist=null==(e=n.url_allowlist)?void 0:e.map(e=>new RegExp(e)),n.url_ignorelist=null==(t=n.url_ignorelist)?void 0:t.map(e=>new RegExp(e)),n}_addDomEventHandlers(){if(this.isBrowserSupported()){if(v&&k){var e=e=>{e=e||(null==v?void 0:v.event)
try{this._captureEvent(e)}catch(e){pn.error("Failed to capture event",e)}}
if(Ke(k,"submit",e,{capture:!0}),Ke(k,"change",e,{capture:!0}),Ke(k,"click",e,{capture:!0}),this._config.capture_copied_text){var t=e=>{e=e||(null==v?void 0:v.event),this._captureEvent(e,an)}
Ke(k,"copy",t,{capture:!0}),Ke(k,"cut",t,{capture:!0})}}}else pn.info("Disabling Automatic Event Collection because this browser is not supported")}startIfEnabled(){this.isEnabled&&!this._initialized&&(this._addDomEventHandlers(),this._initialized=!0)}onRemoteConfig(e){e.elementsChainAsString&&(this._elementsChainAsString=e.elementsChainAsString),this.instance.persistence&&this.instance.persistence.register({[Ze]:!!e.autocapture_opt_out}),this._isDisabledServerSide=!!e.autocapture_opt_out,this.startIfEnabled()}setElementSelectors(e){this._elementSelectors=e}getElementSelectors(e){var t,n=[]
return null==(t=this._elementSelectors)||t.forEach(t=>{var r=null==k?void 0:k.querySelectorAll(t)
null==r||r.forEach(r=>{e===r&&n.push(t)})}),n}get isEnabled(){var e,t,n=null==(e=this.instance.persistence)?void 0:e.props[Ze],r=this._isDisabledServerSide
if(z(r)&&!K(n)&&!this.instance._shouldDisableFlags())return!1
var i=null!==(t=this._isDisabledServerSide)&&void 0!==t?t:!!n
return!!this.instance.config.autocapture&&!i}_captureEvent(e,t){if(void 0===t&&(t="$autocapture"),this.isEnabled){var n,r=Nt(e)
Ot(r)&&(r=r.parentNode||null),"$autocapture"===t&&"click"===e.type&&e instanceof MouseEvent&&this.instance.config.rageclick&&null!=(n=this.rageclicks)&&n.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&function(e,t){if(!v||Ut(e))return!1
var n,r
if(!1===(n=K(t)?!!t&&Ht:null!==(r=null==t?void 0:t.css_selector_ignorelist)&&void 0!==r?r:Ht))return!1
var{targetElementList:i}=Gt(e,!1)
return!qt(i,n)}(r,this.instance.config.rageclick)&&this._captureEvent(e,"$rageclick")
var i=t===an
if(r&&function(e,t,n,r,i){var s,o,a,l
if(void 0===n&&(n=void 0),!v||Ut(e))return!1
if(null!=(s=n)&&s.url_allowlist&&!Mt(n.url_allowlist))return!1
if(null!=(o=n)&&o.url_ignorelist&&Mt(n.url_ignorelist))return!1
if(null!=(a=n)&&a.dom_event_allowlist){var c=n.dom_event_allowlist
if(c&&!c.some(e=>t.type===e))return!1}var{parentIsUsefulElement:u,targetElementList:d}=Gt(e,r)
if(!function(e,t){var n=null==t?void 0:t.element_allowlist
if(U(n))return!0
var r,i=function(e){if(n.some(t=>e.tagName.toLowerCase()===t))return{v:!0}}
for(var s of e)if(r=i(s))return r.v
return!1}(d,n))return!1
if(!qt(d,null==(l=n)?void 0:l.css_selector_allowlist))return!1
var f=v.getComputedStyle(e)
if(f&&"pointer"===f.getPropertyValue("cursor")&&"click"===t.type)return!0
var p=e.tagName.toLowerCase()
switch(p){case"html":return!1
case"form":return(i||["submit"]).indexOf(t.type)>=0
case"input":case"select":case"textarea":return(i||["change","click"]).indexOf(t.type)>=0
default:return u?(i||["click"]).indexOf(t.type)>=0:(i||["click"]).indexOf(t.type)>=0&&(Dt.indexOf(p)>-1||"true"===e.getAttribute("contenteditable"))}}(r,e,this._config,i,i?["copy","cut"]:void 0)){var{props:s,explicitNoCapture:o}=vn(r,{e:e,maskAllElementAttributes:this.instance.config.mask_all_element_attributes,maskAllText:this.instance.config.mask_all_text,elementAttributeIgnoreList:this._config.element_attribute_ignorelist,elementsChainAsString:this._elementsChainAsString})
if(o)return!1
var a=this.getElementSelectors(r)
if(a&&a.length>0&&(s.$element_selectors=a),t===an){var l,c=jt(null==v||null==(l=v.getSelection())?void 0:l.toString()),u=e.type||"clipboard"
if(!c)return!1
s.$selected_content=c,s.$copy_type=u}return this.instance.capture(t,s),!0}}}isBrowserSupported(){return q(null==k?void 0:k.querySelectorAll)}}Math.trunc||(Math.trunc=function(e){return e<0?Math.ceil(e):Math.floor(e)}),Number.isInteger||(Number.isInteger=function(e){return Q(e)&&isFinite(e)&&Math.floor(e)===e})
var mn="0123456789abcdef"
class bn{constructor(e){if(this.bytes=e,16!==e.length)throw new TypeError("not 128-bit length")}static fromFieldsV7(e,t,n,r){if(!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(n)||!Number.isInteger(r)||e<0||t<0||n<0||r<0||e>0xffffffffffff||t>4095||n>1073741823||r>4294967295)throw new RangeError("invalid field value")
var i=new Uint8Array(16)
return i[0]=e/Math.pow(2,40),i[1]=e/Math.pow(2,32),i[2]=e/Math.pow(2,24),i[3]=e/Math.pow(2,16),i[4]=e/Math.pow(2,8),i[5]=e,i[6]=112|t>>>8,i[7]=t,i[8]=128|n>>>24,i[9]=n>>>16,i[10]=n>>>8,i[11]=n,i[12]=r>>>24,i[13]=r>>>16,i[14]=r>>>8,i[15]=r,new bn(i)}toString(){for(var e="",t=0;t<this.bytes.length;t++)e=e+mn.charAt(this.bytes[t]>>>4)+mn.charAt(15&this.bytes[t]),3!==t&&5!==t&&7!==t&&9!==t||(e+="-")
if(36!==e.length)throw new Error("Invalid UUIDv7 was generated")
return e}clone(){return new bn(this.bytes.slice(0))}equals(e){return 0===this.compareTo(e)}compareTo(e){for(var t=0;t<16;t++){var n=this.bytes[t]-e.bytes[t]
if(0!==n)return Math.sign(n)}return 0}}class yn{constructor(){this._timestamp=0,this._counter=0,this._random=new xn}generate(){var e=this.generateOrAbort()
if(U(e)){this._timestamp=0
var t=this.generateOrAbort()
if(U(t))throw new Error("Could not generate UUID after timestamp reset")
return t}return e}generateOrAbort(){var e=Date.now()
if(e>this._timestamp)this._timestamp=e,this._resetCounter()
else{if(!(e+1e4>this._timestamp))return
this._counter++,this._counter>4398046511103&&(this._timestamp++,this._resetCounter())}return bn.fromFieldsV7(this._timestamp,Math.trunc(this._counter/Math.pow(2,30)),this._counter&Math.pow(2,30)-1,this._random.nextUint32())}_resetCounter(){this._counter=1024*this._random.nextUint32()+(1023&this._random.nextUint32())}}var wn,kn=e=>{if("undefined"!=typeof UUIDV7_DENY_WEAK_RNG&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available")
for(var t=0;t<e.length;t++)e[t]=65536*Math.trunc(65536*Math.random())+Math.trunc(65536*Math.random())
return e}
v&&!U(v.crypto)&&crypto.getRandomValues&&(kn=e=>crypto.getRandomValues(e))
class xn{constructor(){this._buffer=new Uint32Array(8),this._cursor=1/0}nextUint32(){return this._cursor>=this._buffer.length&&(kn(this._buffer),this._cursor=0),this._buffer[this._cursor++]}}var Sn=()=>En().toString(),En=()=>(wn||(wn=new yn)).generate(),Pn="",Cn=/[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i
var Ln={_is_supported:()=>!!k,_error:function(e){Re.error("cookieStore error: "+e)},_get:function(e){if(k){try{for(var t=e+"=",n=k.cookie.split(";").filter(e=>e.length),r=0;r<n.length;r++){for(var i=n[r];" "==i.charAt(0);)i=i.substring(1,i.length)
if(0===i.indexOf(t))return decodeURIComponent(i.substring(t.length,i.length))}}catch(e){}return null}},_parse:function(e){var t
try{t=JSON.parse(Ln._get(e))||{}}catch(e){}return t},_set:function(e,t,n,r,i){if(k)try{var s="",o="",a=function(e,t){if(t){var n=function(e,t){if(void 0===t&&(t=k),Pn)return Pn
if(!t)return""
if(["localhost","127.0.0.1"].includes(e))return""
for(var n=e.split("."),r=Math.min(n.length,8),i="dmn_chk_"+Sn();!Pn&&r--;){var s=n.slice(r).join("."),o=i+"=1;domain=."+s+";path=/"
t.cookie=o+";max-age=3",t.cookie.includes(i)&&(t.cookie=o+";max-age=0",Pn=s)}return Pn}(e)
if(!n){var r=(e=>{var t=e.match(Cn)
return t?t[0]:""})(e)
r!==n&&Re.info("Warning: cookie subdomain discovery mismatch",r,n),n=r}return n?"; domain=."+n:""}return""}(k.location.hostname,r)
if(n){var l=new Date
l.setTime(l.getTime()+24*n*60*60*1e3),s="; expires="+l.toUTCString()}i&&(o="; secure")
var c=e+"="+encodeURIComponent(JSON.stringify(t))+s+"; SameSite=Lax; path=/"+a+o
return c.length>3686.4&&Re.warn("cookieStore warning: large cookie, len="+c.length),k.cookie=c,c}catch(e){return}},_remove:function(e,t){if(null!=k&&k.cookie)try{Ln._set(e,"",-1,t)}catch(e){return}}},$n=null,Tn={_is_supported:function(){if(!z($n))return $n
var e=!0
if(U(v))e=!1
else try{var t="__mplssupport__"
Tn._set(t,"xyz"),'"xyz"'!==Tn._get(t)&&(e=!1),Tn._remove(t)}catch(t){e=!1}return e||Re.error("localStorage unsupported; falling back to cookie store"),$n=e,e},_error:function(e){Re.error("localStorage error: "+e)},_get:function(e){try{return null==v?void 0:v.localStorage.getItem(e)}catch(e){Tn._error(e)}return null},_parse:function(e){try{return JSON.parse(Tn._get(e))||{}}catch(e){}return null},_set:function(e,t){try{null==v||v.localStorage.setItem(e,JSON.stringify(t))}catch(e){Tn._error(e)}},_remove:function(e){try{null==v||v.localStorage.removeItem(e)}catch(e){Tn._error(e)}}},On=["distinct_id",lt,ct,St,xt],In=h({},Tn,{_parse:function(e){try{var t={}
try{t=Ln._parse(e)||{}}catch(e){}var n=qe(t,JSON.parse(Tn._get(e)||"{}"))
return Tn._set(e,n),n}catch(e){}return null},_set:function(e,t,n,r,i,s){try{Tn._set(e,t,void 0,void 0,s)
var o={}
On.forEach(e=>{t[e]&&(o[e]=t[e])}),Object.keys(o).length&&Ln._set(e,o,n,r,i,s)}catch(e){Tn._error(e)}},_remove:function(e,t){try{null==v||v.localStorage.removeItem(e),Ln._remove(e,t)}catch(e){Tn._error(e)}}}),An={},Mn={_is_supported:function(){return!0},_error:function(e){Re.error("memoryStorage error: "+e)},_get:function(e){return An[e]||null},_parse:function(e){return An[e]||null},_set:function(e,t){An[e]=t},_remove:function(e){delete An[e]}},Rn=null,jn={_is_supported:function(){if(!z(Rn))return Rn
if(Rn=!0,U(v))Rn=!1
else try{var e="__support__"
jn._set(e,"xyz"),'"xyz"'!==jn._get(e)&&(Rn=!1),jn._remove(e)}catch(e){Rn=!1}return Rn},_error:function(e){Re.error("sessionStorage error: ",e)},_get:function(e){try{return null==v?void 0:v.sessionStorage.getItem(e)}catch(e){jn._error(e)}return null},_parse:function(e){try{return JSON.parse(jn._get(e))||null}catch(e){}return null},_set:function(e,t){try{null==v||v.sessionStorage.setItem(e,JSON.stringify(t))}catch(e){jn._error(e)}},_remove:function(e){try{null==v||v.sessionStorage.removeItem(e)}catch(e){jn._error(e)}}},Fn=function(e){return e[e.PENDING=-1]="PENDING",e[e.DENIED=0]="DENIED",e[e.GRANTED=1]="GRANTED",e}({})
class Nn{constructor(e){this._instance=e}get _config(){return this._instance.config}get consent(){return this._getDnt()?Fn.DENIED:this._storedConsent}isOptedOut(){return"always"===this._config.cookieless_mode||this.consent===Fn.DENIED||this.consent===Fn.PENDING&&(this._config.opt_out_capturing_by_default||"on_reject"===this._config.cookieless_mode)}isOptedIn(){return!this.isOptedOut()}isExplicitlyOptedOut(){return this.consent===Fn.DENIED}optInOut(e){this._storage._set(this._storageKey,e?1:0,this._config.cookie_expiration,this._config.cross_subdomain_cookie,this._config.secure_cookie)}reset(){this._storage._remove(this._storageKey,this._config.cross_subdomain_cookie)}get _storageKey(){var{token:e,opt_out_capturing_cookie_prefix:t,consent_persistence_name:n}=this._instance.config
return n||(t?t+e:"__ph_opt_in_out_"+e)}get _storedConsent(){var e=this._storage._get(this._storageKey)
return te(e)?Fn.GRANTED:I(ne,e)?Fn.DENIED:Fn.PENDING}get _storage(){if(!this._persistentStore){var e=this._config.opt_out_capturing_persistence_type
this._persistentStore="localStorage"===e?Tn:Ln
var t="localStorage"===e?Ln:Tn
t._get(this._storageKey)&&(this._persistentStore._get(this._storageKey)||this.optInOut(te(t._get(this._storageKey))),t._remove(this._storageKey,this._config.cross_subdomain_cookie))}return this._persistentStore}_getDnt(){return!!this._config.respect_dnt&&!!Qe([null==w?void 0:w.doNotTrack,null==w?void 0:w.msDoNotTrack,L.doNotTrack],e=>te(e))}}var Dn=je("[Dead Clicks]"),qn=()=>!0,Bn=e=>{var t,n=!(null==(t=e.instance.persistence)||!t.get_property(st)),r=e.instance.config.capture_dead_clicks
return K(r)?r:n}
class Hn{get lazyLoadedDeadClicksAutocapture(){return this._lazyLoadedDeadClicksAutocapture}constructor(e,t,n){this.instance=e,this.isEnabled=t,this.onCapture=n,this.startIfEnabled()}onRemoteConfig(e){this.instance.persistence&&this.instance.persistence.register({[st]:null==e?void 0:e.captureDeadClicks}),this.startIfEnabled()}startIfEnabled(){this.isEnabled(this)&&this._loadScript(()=>{this._start()})}_loadScript(e){var t,n
null!=(t=L.__PosthogExtensions__)&&t.initDeadClicksAutocapture&&e(),null==(n=L.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this.instance,"dead-clicks-autocapture",t=>{t?Dn.error("failed to load script",t):e()})}_start(){var e
if(k){if(!this._lazyLoadedDeadClicksAutocapture&&null!=(e=L.__PosthogExtensions__)&&e.initDeadClicksAutocapture){var t=B(this.instance.config.capture_dead_clicks)?this.instance.config.capture_dead_clicks:{}
t.__onCapture=this.onCapture,this._lazyLoadedDeadClicksAutocapture=L.__PosthogExtensions__.initDeadClicksAutocapture(this.instance,t),this._lazyLoadedDeadClicksAutocapture.start(k),Dn.info("starting...")}}else Dn.error("`document` not found. Cannot start.")}stop(){this._lazyLoadedDeadClicksAutocapture&&(this._lazyLoadedDeadClicksAutocapture.stop(),this._lazyLoadedDeadClicksAutocapture=void 0,Dn.info("stopping..."))}}var Un=je("[ExceptionAutocapture]")
class Gn{constructor(e){var t,n,r
this._startCapturing=()=>{var e
if(v&&this.isEnabled&&null!=(e=L.__PosthogExtensions__)&&e.errorWrappingFunctions){var t=L.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,n=L.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,r=L.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError
try{!this._unwrapOnError&&this._config.capture_unhandled_errors&&(this._unwrapOnError=t(this.captureException.bind(this))),!this._unwrapUnhandledRejection&&this._config.capture_unhandled_rejections&&(this._unwrapUnhandledRejection=n(this.captureException.bind(this))),!this._unwrapConsoleError&&this._config.capture_console_errors&&(this._unwrapConsoleError=r(this.captureException.bind(this)))}catch(e){Un.error("failed to start",e),this._stopCapturing()}}},this._instance=e,this._remoteEnabled=!(null==(t=this._instance.persistence)||!t.props[tt]),this._config=this._requiredConfig(),this._rateLimiter=new ie({refillRate:null!==(n=this._instance.config.error_tracking.__exceptionRateLimiterRefillRate)&&void 0!==n?n:1,bucketSize:null!==(r=this._instance.config.error_tracking.__exceptionRateLimiterBucketSize)&&void 0!==r?r:10,refillInterval:1e4,_logger:Un}),this.startIfEnabled()}_requiredConfig(){var e=this._instance.config.capture_exceptions,t={capture_unhandled_errors:!1,capture_unhandled_rejections:!1,capture_console_errors:!1}
return B(e)?t=h({},t,e):(U(e)?this._remoteEnabled:e)&&(t=h({},t,{capture_unhandled_errors:!0,capture_unhandled_rejections:!0})),t}get isEnabled(){return this._config.capture_console_errors||this._config.capture_unhandled_errors||this._config.capture_unhandled_rejections}startIfEnabled(){this.isEnabled&&(Un.info("enabled"),this._loadScript(this._startCapturing))}_loadScript(e){var t,n
null!=(t=L.__PosthogExtensions__)&&t.errorWrappingFunctions&&e(),null==(n=L.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"exception-autocapture",t=>{if(t)return Un.error("failed to load script",t)
e()})}_stopCapturing(){var e,t,n
null==(e=this._unwrapOnError)||e.call(this),this._unwrapOnError=void 0,null==(t=this._unwrapUnhandledRejection)||t.call(this),this._unwrapUnhandledRejection=void 0,null==(n=this._unwrapConsoleError)||n.call(this),this._unwrapConsoleError=void 0}onRemoteConfig(e){var t=e.autocaptureExceptions
this._remoteEnabled=!!t||!1,this._config=this._requiredConfig(),this._instance.persistence&&this._instance.persistence.register({[tt]:this._remoteEnabled}),this.startIfEnabled()}captureException(e){var t,n,r=null!==(t=null==e||null==(n=e.$exception_list)||null==(n=n[0])?void 0:n.type)&&void 0!==t?t:"Exception"
this._rateLimiter.consumeRateLimit(r)?Un.info("Skipping exception capture because of client rate limiting.",{exception:r}):this._instance.exceptions.sendExceptionEvent(e)}}function Wn(e,t,n){try{if(!(t in e))return()=>{}
var r=e[t],i=n(r)
return q(i)&&(i.prototype=i.prototype||{},Object.defineProperties(i,{__posthog_wrapped__:{enumerable:!1,value:!0}})),e[t]=i,()=>{e[t]=r}}catch(e){return()=>{}}}class zn{constructor(e){var t
this._instance=e,this._lastPathname=(null==v||null==(t=v.location)?void 0:t.pathname)||""}get isEnabled(){return"history_change"===this._instance.config.capture_pageview}startIfEnabled(){this.isEnabled&&(Re.info("History API monitoring enabled, starting..."),this.monitorHistoryChanges())}stop(){this._popstateListener&&this._popstateListener(),this._popstateListener=void 0,Re.info("History API monitoring stopped")}monitorHistoryChanges(){var e,t
if(v&&v.history){var n=this
null!=(e=v.history.pushState)&&e.__posthog_wrapped__||Wn(v.history,"pushState",e=>function(t,r,i){e.call(this,t,r,i),n._capturePageview("pushState")}),null!=(t=v.history.replaceState)&&t.__posthog_wrapped__||Wn(v.history,"replaceState",e=>function(t,r,i){e.call(this,t,r,i),n._capturePageview("replaceState")}),this._setupPopstateListener()}}_capturePageview(e){try{var t,n=null==v||null==(t=v.location)?void 0:t.pathname
if(!n)return
n!==this._lastPathname&&this.isEnabled&&this._instance.capture("$pageview",{navigation_type:e}),this._lastPathname=n}catch(t){Re.error("Error capturing "+e+" pageview",t)}}_setupPopstateListener(){if(!this._popstateListener){var e=()=>{this._capturePageview("popstate")}
Ke(v,"popstate",e),this._popstateListener=()=>{v&&v.removeEventListener("popstate",e)}}}}var Vn=je("[SegmentIntegration]")
var Qn="posthog-js"
function Kn(e,t){var{organization:n,projectId:r,prefix:i,severityAllowList:s=["error"],sendExceptionsToPostHog:o=!0}=void 0===t?{}:t
return t=>{var a,l,c,u,d
if("*"!==s&&!s.includes(t.level)||!e.__loaded)return t
t.tags||(t.tags={})
var f=e.requestRouter.endpointFor("ui","/project/"+e.config.token+"/person/"+e.get_distinct_id())
t.tags["PostHog Person URL"]=f,e.sessionRecordingStarted()&&(t.tags["PostHog Recording URL"]=e.get_session_replay_url({withTimestamp:!0}))
var p=(null==(a=t.exception)?void 0:a.values)||[],g=p.map(e=>h({},e,{stacktrace:e.stacktrace?h({},e.stacktrace,{type:"raw",frames:(e.stacktrace.frames||[]).map(e=>h({},e,{platform:"web:javascript"}))}):void 0})),v={$exception_message:(null==(l=p[0])?void 0:l.value)||t.message,$exception_type:null==(c=p[0])?void 0:c.type,$exception_level:t.level,$exception_list:g,$sentry_event_id:t.event_id,$sentry_exception:t.exception,$sentry_exception_message:(null==(u=p[0])?void 0:u.value)||t.message,$sentry_exception_type:null==(d=p[0])?void 0:d.type,$sentry_tags:t.tags}
return n&&r&&(v.$sentry_url=(i||"https://sentry.io/organizations/")+n+"/issues/?project="+r+"&query="+t.event_id),o&&e.exceptions.sendExceptionEvent(v),t}}class Jn{constructor(e,t,n,r,i,s){this.name=Qn,this.setupOnce=function(o){o(Kn(e,{organization:t,projectId:n,prefix:r,severityAllowList:i,sendExceptionsToPostHog:null==s||s}))}}}var Yn=null!=v&&v.location?fn(v.location.hash,"__posthog")||fn(location.hash,"state"):null,Xn="_postHogToolbarParams",Zn=je("[Toolbar]"),er=function(e){return e[e.UNINITIALIZED=0]="UNINITIALIZED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED",e}(er||{})
class tr{constructor(e){this.instance=e}_setToolbarState(e){L.ph_toolbar_state=e}_getToolbarState(){var e
return null!==(e=L.ph_toolbar_state)&&void 0!==e?e:er.UNINITIALIZED}maybeLoadToolbar(e,t,n){if(void 0===e&&(e=void 0),void 0===t&&(t=void 0),void 0===n&&(n=void 0),!v||!k)return!1
e=null!=e?e:v.location,n=null!=n?n:v.history
try{if(!t){try{v.localStorage.setItem("test","test"),v.localStorage.removeItem("test")}catch(e){return!1}t=null==v?void 0:v.localStorage}var r,i=Yn||fn(e.hash,"__posthog")||fn(e.hash,"state"),s=i?Ue(()=>JSON.parse(atob(decodeURIComponent(i))))||Ue(()=>JSON.parse(decodeURIComponent(i))):null
return s&&"ph_authorize"===s.action?((r=s).source="url",r&&Object.keys(r).length>0&&(s.desiredHash?e.hash=s.desiredHash:n?n.replaceState(n.state,"",e.pathname+e.search):e.hash="")):((r=JSON.parse(t.getItem(Xn)||"{}")).source="localstorage",delete r.userIntent),!(!r.token||this.instance.config.token!==r.token||(this.loadToolbar(r),0))}catch(e){return!1}}_callLoadToolbar(e){var t=L.ph_load_toolbar||L.ph_load_editor
!V(t)&&q(t)?t(e,this.instance):Zn.warn("No toolbar load function found")}loadToolbar(e){var t=!(null==k||!k.getElementById(Et))
if(!v||t)return!1
var n="custom"===this.instance.requestRouter.region&&this.instance.config.advanced_disable_toolbar_metrics,r=h({token:this.instance.config.token},e,{apiURL:this.instance.requestRouter.endpointFor("ui")},n?{instrument:!1}:{})
if(v.localStorage.setItem(Xn,JSON.stringify(h({},r,{source:void 0}))),this._getToolbarState()===er.LOADED)this._callLoadToolbar(r)
else if(this._getToolbarState()===er.UNINITIALIZED){var i
this._setToolbarState(er.LOADING),null==(i=L.__PosthogExtensions__)||null==i.loadExternalDependency||i.loadExternalDependency(this.instance,"toolbar",e=>{if(e)return Zn.error("[Toolbar] Failed to load",e),void this._setToolbarState(er.UNINITIALIZED)
this._setToolbarState(er.LOADED),this._callLoadToolbar(r)}),Ke(v,"turbolinks:load",()=>{this._setToolbarState(er.UNINITIALIZED),this.loadToolbar(r)})}return!0}_loadEditor(e){return this.loadToolbar(e)}maybeLoadEditor(e,t,n){return void 0===e&&(e=void 0),void 0===t&&(t=void 0),void 0===n&&(n=void 0),this.maybeLoadToolbar(e,t,n)}}var nr=je("[TracingHeaders]")
class rr{constructor(e){this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0,this._startCapturing=()=>{var e,t
U(this._restoreXHRPatch)&&(null==(e=L.__PosthogExtensions__)||null==(e=e.tracingHeadersPatchFns)||e._patchXHR(this._instance.config.__add_tracing_headers||[],this._instance.get_distinct_id(),this._instance.sessionManager)),U(this._restoreFetchPatch)&&(null==(t=L.__PosthogExtensions__)||null==(t=t.tracingHeadersPatchFns)||t._patchFetch(this._instance.config.__add_tracing_headers||[],this._instance.get_distinct_id(),this._instance.sessionManager))},this._instance=e}_loadScript(e){var t,n
null!=(t=L.__PosthogExtensions__)&&t.tracingHeadersPatchFns&&e(),null==(n=L.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"tracing-headers",t=>{if(t)return nr.error("failed to load script",t)
e()})}startIfEnabledOrStop(){var e,t
this._instance.config.__add_tracing_headers?this._loadScript(this._startCapturing):(null==(e=this._restoreXHRPatch)||e.call(this),null==(t=this._restoreFetchPatch)||t.call(this),this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0)}}var ir="Mobile",sr="iOS",or="Android",ar="Tablet",lr=or+" "+ar,cr="iPad",ur="Apple",dr=ur+" Watch",fr="Safari",pr="BlackBerry",hr="Samsung",gr=hr+"Browser",vr=hr+" Internet",_r="Chrome",mr=_r+" OS",br=_r+" "+sr,yr="Internet Explorer",wr=yr+" "+ir,kr="Opera",xr=kr+" Mini",Sr="Edge",Er="Microsoft "+Sr,Pr="Firefox",Cr=Pr+" "+sr,Lr="Nintendo",$r="PlayStation",Tr="Xbox",Or=or+" "+ir,Ir=ir+" "+fr,Ar="Windows",Mr=Ar+" Phone",Rr="Nokia",jr="Ouya",Fr="Generic",Nr=Fr+" "+ir.toLowerCase(),Dr=Fr+" "+ar.toLowerCase(),qr="Konqueror",Br="(\\d+(\\.\\d+)?)",Hr=new RegExp("Version/"+Br),Ur=new RegExp(Tr,"i"),Gr=new RegExp($r+" \\w+","i"),Wr=new RegExp(Lr+" \\w+","i"),zr=new RegExp(pr+"|PlayBook|BB10","i"),Vr={"NT3.51":"NT 3.11","NT4.0":"NT 4.0","5.0":"2000",5.1:"XP",5.2:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1",6.4:"10","10.0":"10"},Qr=function(e,t){return t=t||"",I(e," OPR/")&&I(e,"Mini")?xr:I(e," OPR/")?kr:zr.test(e)?pr:I(e,"IE"+ir)||I(e,"WPDesktop")?wr:I(e,gr)?vr:I(e,Sr)||I(e,"Edg/")?Er:I(e,"FBIOS")?"Facebook "+ir:I(e,"UCWEB")||I(e,"UCBrowser")?"UC Browser":I(e,"CriOS")?br:I(e,"CrMo")||I(e,_r)?_r:I(e,or)&&I(e,fr)?Or:I(e,"FxiOS")?Cr:I(e.toLowerCase(),qr.toLowerCase())?qr:((e,t)=>t&&I(t,ur)||function(e){return I(e,fr)&&!I(e,_r)&&!I(e,or)}(e))(e,t)?I(e,ir)?Ir:fr:I(e,Pr)?Pr:I(e,"MSIE")||I(e,"Trident/")?yr:I(e,"Gecko")?Pr:""},Kr={[wr]:[new RegExp("rv:"+Br)],[Er]:[new RegExp(Sr+"?\\/"+Br)],[_r]:[new RegExp("("+_r+"|CrMo)\\/"+Br)],[br]:[new RegExp("CriOS\\/"+Br)],"UC Browser":[new RegExp("(UCBrowser|UCWEB)\\/"+Br)],[fr]:[Hr],[Ir]:[Hr],[kr]:[new RegExp("(Opera|OPR)\\/"+Br)],[Pr]:[new RegExp(Pr+"\\/"+Br)],[Cr]:[new RegExp("FxiOS\\/"+Br)],[qr]:[new RegExp("Konqueror[:/]?"+Br,"i")],[pr]:[new RegExp(pr+" "+Br),Hr],[Or]:[new RegExp("android\\s"+Br,"i")],[vr]:[new RegExp(gr+"\\/"+Br)],[yr]:[new RegExp("(rv:|MSIE )"+Br)],Mozilla:[new RegExp("rv:"+Br)]},Jr=function(e,t){var n=Qr(e,t),r=Kr[n]
if(U(r))return null
for(var i=0;i<r.length;i++){var s=r[i],o=e.match(s)
if(o)return parseFloat(o[o.length-2])}return null},Yr=[[new RegExp(Tr+"; "+Tr+" (.*?)[);]","i"),e=>[Tr,e&&e[1]||""]],[new RegExp(Lr,"i"),[Lr,""]],[new RegExp($r,"i"),[$r,""]],[zr,[pr,""]],[new RegExp(Ar,"i"),(e,t)=>{if(/Phone/.test(t)||/WPDesktop/.test(t))return[Mr,""]
if(new RegExp(ir).test(t)&&!/IEMobile\b/.test(t))return[Ar+" "+ir,""]
var n=/Windows NT ([0-9.]+)/i.exec(t)
if(n&&n[1]){var r=n[1],i=Vr[r]||""
return/arm/i.test(t)&&(i="RT"),[Ar,i]}return[Ar,""]}],[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,e=>{if(e&&e[3]){var t=[e[3],e[4],e[5]||"0"]
return[sr,t.join(".")]}return[sr,""]}],[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,e=>{var t=""
return e&&e.length>=3&&(t=U(e[2])?e[3]:e[2]),["watchOS",t]}],[new RegExp("("+or+" (\\d+)\\.(\\d+)\\.?(\\d+)?|"+or+")","i"),e=>{if(e&&e[2]){var t=[e[2],e[3],e[4]||"0"]
return[or,t.join(".")]}return[or,""]}],[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,e=>{var t=["Mac OS X",""]
if(e&&e[1]){var n=[e[1],e[2],e[3]||"0"]
t[1]=n.join(".")}return t}],[/Mac/i,["Mac OS X",""]],[/CrOS/,[mr,""]],[/Linux|debian/i,["Linux",""]]],Xr=function(e){return Wr.test(e)?Lr:Gr.test(e)?$r:Ur.test(e)?Tr:new RegExp(jr,"i").test(e)?jr:new RegExp("("+Mr+"|WPDesktop)","i").test(e)?Mr:/iPad/.test(e)?cr:/iPod/.test(e)?"iPod Touch":/iPhone/.test(e)?"iPhone":/(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)?dr:zr.test(e)?pr:/(kobo)\s(ereader|touch)/i.test(e)?"Kobo":new RegExp(Rr,"i").test(e)?Rr:/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e)||/(kf[a-z]+)( bui|\)).+silk\//i.test(e)?"Kindle Fire":/(Android|ZTE)/i.test(e)?!new RegExp(ir).test(e)||/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e)?/pixel[\daxl ]{1,6}/i.test(e)&&!/pixel c/i.test(e)||/(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e)||/lmy47v/i.test(e)&&!/QTAQZ3/i.test(e)?or:lr:or:new RegExp("(pda|"+ir+")","i").test(e)?Nr:new RegExp(ar,"i").test(e)&&!new RegExp(ar+" pc","i").test(e)?Dr:""},Zr="https?://(.*)",ei=["gclid","gclsrc","dclid","gbraid","wbraid","fbclid","msclkid","twclid","li_fat_id","igshid","ttclid","rdt_cid","epik","qclid","sccid","irclid","_kx"],ti=Be(["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gad_source","mc_cid"],ei),ni="<masked>",ri=["li_fat_id"]
function ii(e,t,n){if(!k)return{}
var r,i=t?Be([],ei,n||[]):[],s=si(dn(k.URL,i,ni),e),o=(r={},De(ri,function(e){var t=Ln._get(e)
r[e]=t||null}),r)
return qe(o,s)}function si(e,t){var n=ti.concat(t||[]),r={}
return De(n,function(t){var n=un(e,t)
r[t]=n||null}),r}function oi(e){var t=function(e){return e?0===e.search(Zr+"google.([^/?]*)")?"google":0===e.search(Zr+"bing.com")?"bing":0===e.search(Zr+"yahoo.com")?"yahoo":0===e.search(Zr+"duckduckgo.com")?"duckduckgo":null:null}(e),n="yahoo"!=t?"q":"p",r={}
if(!z(t)){r.$search_engine=t
var i=k?un(k.referrer,n):""
i.length&&(r.ph_keyword=i)}return r}function ai(){return navigator.language||navigator.userLanguage}function li(){return(null==k?void 0:k.referrer)||"$direct"}function ci(e,t){var n=e?Be([],ei,t||[]):[],r=null==x?void 0:x.href.substring(0,1e3)
return{r:li().substring(0,1e3),u:r?dn(r,n,ni):void 0}}function ui(e){var t,{r:n,u:r}=e,i={$referrer:n,$referring_domain:null==n?void 0:"$direct"==n?"$direct":null==(t=cn(n))?void 0:t.host}
if(r){i.$current_url=r
var s=cn(r)
i.$host=null==s?void 0:s.host,i.$pathname=null==s?void 0:s.pathname
var o=si(r)
qe(i,o)}if(n){var a=oi(n)
qe(i,a)}return i}function di(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){return}}function fi(){try{return(new Date).getTimezoneOffset()}catch(e){return}}function pi(e,t){if(!C)return{}
var n,r,i,s=e?Be([],ei,t||[]):[],[o,a]=function(e){for(var t=0;t<Yr.length;t++){var[n,r]=Yr[t],i=n.exec(e),s=i&&(q(r)?r(i,e):r)
if(s)return s}return["",""]}(C)
return qe(We({$os:o,$os_version:a,$browser:Qr(C,navigator.vendor),$device:Xr(C),$device_type:(r=C,i=Xr(r),i===cr||i===lr||"Kobo"===i||"Kindle Fire"===i||i===Dr?ar:i===Lr||i===Tr||i===$r||i===jr?"Console":i===dr?"Wearable":i?ir:"Desktop"),$timezone:di(),$timezone_offset:fi()}),{$current_url:dn(null==x?void 0:x.href,s,ni),$host:null==x?void 0:x.host,$pathname:null==x?void 0:x.pathname,$raw_user_agent:C.length>1e3?C.substring(0,997)+"...":C,$browser_version:Jr(C,navigator.vendor),$browser_language:ai(),$browser_language_prefix:(n=ai(),"string"==typeof n?n.split("-")[0]:void 0),$screen_height:null==v?void 0:v.screen.height,$screen_width:null==v?void 0:v.screen.width,$viewport_height:null==v?void 0:v.innerHeight,$viewport_width:null==v?void 0:v.innerWidth,$lib:"web",$lib_version:T.LIB_VERSION,$insert_id:Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10),$time:Date.now()/1e3})}var hi=je("[Web Vitals]"),gi=9e5
class vi{constructor(e){var t
this._enabledServerSide=!1,this._initialized=!1,this._buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0},this._flushToCapture=()=>{clearTimeout(this._delayedFlushTimer),0!==this._buffer.metrics.length&&(this._instance.capture("$web_vitals",this._buffer.metrics.reduce((e,t)=>h({},e,{["$web_vitals_"+t.name+"_event"]:h({},t),["$web_vitals_"+t.name+"_value"]:t.value}),{})),this._buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0})},this._addToBuffer=e=>{var t,n=null==(t=this._instance.sessionManager)?void 0:t.checkAndGetSessionAndWindowId(!0)
if(U(n))hi.error("Could not read session ID. Dropping metrics!")
else{this._buffer=this._buffer||{url:void 0,metrics:[],firstMetricTimestamp:void 0}
var r=this._currentURL()
U(r)||(V(null==e?void 0:e.name)||V(null==e?void 0:e.value)?hi.error("Invalid metric received",e):this._maxAllowedValue&&e.value>=this._maxAllowedValue?hi.error("Ignoring metric with value >= "+this._maxAllowedValue,e):(this._buffer.url!==r&&(this._flushToCapture(),this._delayedFlushTimer=setTimeout(this._flushToCapture,this.flushToCaptureTimeoutMs)),U(this._buffer.url)&&(this._buffer.url=r),this._buffer.firstMetricTimestamp=U(this._buffer.firstMetricTimestamp)?Date.now():this._buffer.firstMetricTimestamp,e.attribution&&e.attribution.interactionTargetElement&&(e.attribution.interactionTargetElement=void 0),this._buffer.metrics.push(h({},e,{$current_url:r,$session_id:n.sessionId,$window_id:n.windowId,timestamp:Date.now()})),this._buffer.metrics.length===this.allowedMetrics.length&&this._flushToCapture()))}},this._startCapturing=()=>{var e,t,n,r,i=L.__PosthogExtensions__
U(i)||U(i.postHogWebVitalsCallbacks)||({onLCP:e,onCLS:t,onFCP:n,onINP:r}=i.postHogWebVitalsCallbacks),e&&t&&n&&r?(this.allowedMetrics.indexOf("LCP")>-1&&e(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("CLS")>-1&&t(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("FCP")>-1&&n(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("INP")>-1&&r(this._addToBuffer.bind(this)),this._initialized=!0):hi.error("web vitals callbacks not loaded - not starting")},this._instance=e,this._enabledServerSide=!(null==(t=this._instance.persistence)||!t.props[it]),this.startIfEnabled()}get allowedMetrics(){var e,t,n=B(this._instance.config.capture_performance)?null==(e=this._instance.config.capture_performance)?void 0:e.web_vitals_allowed_metrics:void 0
return U(n)?(null==(t=this._instance.persistence)?void 0:t.props[ot])||["CLS","FCP","INP","LCP"]:n}get flushToCaptureTimeoutMs(){return(B(this._instance.config.capture_performance)?this._instance.config.capture_performance.web_vitals_delayed_flush_ms:void 0)||5e3}get _maxAllowedValue(){var e=B(this._instance.config.capture_performance)&&Q(this._instance.config.capture_performance.__web_vitals_max_value)?this._instance.config.capture_performance.__web_vitals_max_value:gi
return 0<e&&e<=6e4?gi:e}get isEnabled(){var e=null==x?void 0:x.protocol
if("http:"!==e&&"https:"!==e)return hi.info("Web Vitals are disabled on non-http/https protocols"),!1
var t=B(this._instance.config.capture_performance)?this._instance.config.capture_performance.web_vitals:K(this._instance.config.capture_performance)?this._instance.config.capture_performance:void 0
return K(t)?t:this._enabledServerSide}startIfEnabled(){this.isEnabled&&!this._initialized&&(hi.info("enabled, starting..."),this._loadScript(this._startCapturing))}onRemoteConfig(e){var t=B(e.capturePerformance)&&!!e.capturePerformance.web_vitals,n=B(e.capturePerformance)?e.capturePerformance.web_vitals_allowed_metrics:void 0
this._instance.persistence&&(this._instance.persistence.register({[it]:t}),this._instance.persistence.register({[ot]:n})),this._enabledServerSide=t,this.startIfEnabled()}_loadScript(e){var t,n
null!=(t=L.__PosthogExtensions__)&&t.postHogWebVitalsCallbacks&&e(),null==(n=L.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"web-vitals",t=>{t?hi.error("failed to load script",t):e()})}_currentURL(){var e=v?v.location.href:void 0
if(e){var t=this._instance.config.mask_personal_data_properties,n=this._instance.config.custom_personal_data_properties,r=t?Be([],ei,n||[]):[]
return dn(e,r,ni)}hi.error("Could not determine current URL")}}var _i=je("[Heatmaps]")
function mi(e){return B(e)&&"clientX"in e&&"clientY"in e&&Q(e.clientX)&&Q(e.clientY)}class bi{constructor(e){var t
this.rageclicks=new on,this._enabledServerSide=!1,this._initialized=!1,this._flushInterval=null,this.instance=e,this._enabledServerSide=!(null==(t=this.instance.persistence)||!t.props[et])}get flushIntervalMilliseconds(){var e=5e3
return B(this.instance.config.capture_heatmaps)&&this.instance.config.capture_heatmaps.flush_interval_milliseconds&&(e=this.instance.config.capture_heatmaps.flush_interval_milliseconds),e}get isEnabled(){return U(this.instance.config.capture_heatmaps)?U(this.instance.config.enable_heatmaps)?this._enabledServerSide:this.instance.config.enable_heatmaps:!1!==this.instance.config.capture_heatmaps}startIfEnabled(){if(this.isEnabled){if(this._initialized)return
_i.info("starting..."),this._setupListeners(),this._onVisibilityChange()}else{var e
clearInterval(null!==(e=this._flushInterval)&&void 0!==e?e:void 0),this._removeListeners(),this.getAndClearBuffer()}}onRemoteConfig(e){var t=!!e.heatmaps
this.instance.persistence&&this.instance.persistence.register({[et]:t}),this._enabledServerSide=t,this.startIfEnabled()}getAndClearBuffer(){var e=this._buffer
return this._buffer=void 0,e}_onDeadClick(e){this._onClick(e.originalEvent,"deadclick")}_onVisibilityChange(){this._flushInterval&&clearInterval(this._flushInterval),this._flushInterval="visible"===(null==k?void 0:k.visibilityState)?setInterval(this._flush.bind(this),this.flushIntervalMilliseconds):null}_setupListeners(){v&&k&&(this._flushHandler=this._flush.bind(this),Ke(v,"beforeunload",this._flushHandler),this._onClickHandler=e=>this._onClick(e||(null==v?void 0:v.event)),Ke(k,"click",this._onClickHandler,{capture:!0}),this._onMouseMoveHandler=e=>this._onMouseMove(e||(null==v?void 0:v.event)),Ke(k,"mousemove",this._onMouseMoveHandler,{capture:!0}),this._deadClicksCapture=new Hn(this.instance,qn,this._onDeadClick.bind(this)),this._deadClicksCapture.startIfEnabled(),this._onVisibilityChange_handler=this._onVisibilityChange.bind(this),Ke(k,"visibilitychange",this._onVisibilityChange_handler),this._initialized=!0)}_removeListeners(){var e
v&&k&&(this._flushHandler&&v.removeEventListener("beforeunload",this._flushHandler),this._onClickHandler&&k.removeEventListener("click",this._onClickHandler,{capture:!0}),this._onMouseMoveHandler&&k.removeEventListener("mousemove",this._onMouseMoveHandler,{capture:!0}),this._onVisibilityChange_handler&&k.removeEventListener("visibilitychange",this._onVisibilityChange_handler),clearTimeout(this._mouseMoveTimeout),null==(e=this._deadClicksCapture)||e.stop(),this._initialized=!1)}_getProperties(e,t){var n=this.instance.scrollManager.scrollY(),r=this.instance.scrollManager.scrollX(),i=this.instance.scrollManager.scrollElement(),s=function(e,t,n){for(var r=e;r&&$t(r)&&!Tt(r,"body");){if(r===n)return!1
if(I(t,null==v?void 0:v.getComputedStyle(r).position))return!0
r=Bt(r)}return!1}(Nt(e),["fixed","sticky"],i)
return{x:e.clientX+(s?0:r),y:e.clientY+(s?0:n),target_fixed:s,type:t}}_onClick(e,t){var n
if(void 0===t&&(t="click"),!Lt(e.target)&&mi(e)){var r=this._getProperties(e,t)
null!=(n=this.rageclicks)&&n.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._capture(h({},r,{type:"rageclick"})),this._capture(r)}}_onMouseMove(e){!Lt(e.target)&&mi(e)&&(clearTimeout(this._mouseMoveTimeout),this._mouseMoveTimeout=setTimeout(()=>{this._capture(this._getProperties(e,"mousemove"))},500))}_capture(e){if(v){var t=v.location.href,n=this.instance.config.mask_personal_data_properties,r=this.instance.config.custom_personal_data_properties,i=n?Be([],ei,r||[]):[],s=dn(t,i,ni)
this._buffer=this._buffer||{},this._buffer[s]||(this._buffer[s]=[]),this._buffer[s].push(e)}}_flush(){this._buffer&&!H(this._buffer)&&this.instance.capture("$$heatmap",{$heatmap_data:this.getAndClearBuffer()})}}class yi{constructor(e){this._instance=e}doPageView(e,t){var n,r=this._previousPageViewProperties(e,t)
return this._currentPageview={pathname:null!==(n=null==v?void 0:v.location.pathname)&&void 0!==n?n:"",pageViewId:t,timestamp:e},this._instance.scrollManager.resetContext(),r}doPageLeave(e){var t
return this._previousPageViewProperties(e,null==(t=this._currentPageview)?void 0:t.pageViewId)}doEvent(){var e
return{$pageview_id:null==(e=this._currentPageview)?void 0:e.pageViewId}}_previousPageViewProperties(e,t){var n=this._currentPageview
if(!n)return{$pageview_id:t}
var r={$pageview_id:t,$prev_pageview_id:n.pageViewId},i=this._instance.scrollManager.getContext()
if(i&&!this._instance.config.disable_scroll_properties){var{maxScrollHeight:s,lastScrollY:o,maxScrollY:a,maxContentHeight:l,lastContentY:c,maxContentY:u}=i
if(!(U(s)||U(o)||U(a)||U(l)||U(c)||U(u))){s=Math.ceil(s),o=Math.ceil(o),a=Math.ceil(a),l=Math.ceil(l),c=Math.ceil(c),u=Math.ceil(u)
var d=s<=1?1:re(o/s,0,1,Re),f=s<=1?1:re(a/s,0,1,Re),p=l<=1?1:re(c/l,0,1,Re),h=l<=1?1:re(u/l,0,1,Re)
r=qe(r,{$prev_pageview_last_scroll:o,$prev_pageview_last_scroll_percentage:d,$prev_pageview_max_scroll:a,$prev_pageview_max_scroll_percentage:f,$prev_pageview_last_content:c,$prev_pageview_last_content_percentage:p,$prev_pageview_max_content:u,$prev_pageview_max_content_percentage:h})}}return n.pathname&&(r.$prev_pageview_pathname=n.pathname),n.timestamp&&(r.$prev_pageview_duration=(e.getTime()-n.timestamp.getTime())/1e3),r}}var wi=Uint8Array,ki=Uint16Array,xi=Uint32Array,Si=new wi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ei=new wi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Pi=new wi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ci=function(e,t){for(var n=new ki(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1]
var i=new xi(n[30])
for(r=1;r<30;++r)for(var s=n[r];s<n[r+1];++s)i[s]=s-n[r]<<5|r
return[n,i]},Li=Ci(Si,2),$i=Li[0],Ti=Li[1]
$i[28]=258,Ti[258]=28
for(var Oi=Ci(Ei,0)[1],Ii=new ki(32768),Ai=0;Ai<32768;++Ai){var Mi=(43690&Ai)>>>1|(21845&Ai)<<1
Mi=(61680&(Mi=(52428&Mi)>>>2|(13107&Mi)<<2))>>>4|(3855&Mi)<<4,Ii[Ai]=((65280&Mi)>>>8|(255&Mi)<<8)>>>1}var Ri=function(e,t,n){for(var r=e.length,i=0,s=new ki(t);i<r;++i)++s[e[i]-1]
var o,a=new ki(t)
for(i=0;i<t;++i)a[i]=a[i-1]+s[i-1]<<1
for(o=new ki(r),i=0;i<r;++i)o[i]=Ii[a[e[i]-1]++]>>>15-e[i]
return o},ji=new wi(288)
for(Ai=0;Ai<144;++Ai)ji[Ai]=8
for(Ai=144;Ai<256;++Ai)ji[Ai]=9
for(Ai=256;Ai<280;++Ai)ji[Ai]=7
for(Ai=280;Ai<288;++Ai)ji[Ai]=8
var Fi=new wi(32)
for(Ai=0;Ai<32;++Ai)Fi[Ai]=5
var Ni=Ri(ji,9),Di=Ri(Fi,5),qi=function(e){return(e/8|0)+(7&e&&1)},Bi=function(e,t,n){(null==n||n>e.length)&&(n=e.length)
var r=new(e instanceof ki?ki:e instanceof xi?xi:wi)(n-t)
return r.set(e.subarray(t,n)),r},Hi=function(e,t,n){n<<=7&t
var r=t/8|0
e[r]|=n,e[r+1]|=n>>>8},Ui=function(e,t,n){n<<=7&t
var r=t/8|0
e[r]|=n,e[r+1]|=n>>>8,e[r+2]|=n>>>16},Gi=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]})
var i=n.length,s=n.slice()
if(!i)return[new wi(0),0]
if(1==i){var o=new wi(n[0].s+1)
return o[n[0].s]=1,[o,1]}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001})
var a=n[0],l=n[1],c=0,u=1,d=2
for(n[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=i-1;)a=n[n[c].f<n[d].f?c++:d++],l=n[c!=u&&n[c].f<n[d].f?c++:d++],n[u++]={s:-1,f:a.f+l.f,l:a,r:l}
var f=s[0].s
for(r=1;r<i;++r)s[r].s>f&&(f=s[r].s)
var p=new ki(f+1),h=Wi(n[u-1],p,0)
if(h>t){r=0
var g=0,v=h-t,_=1<<v
for(s.sort(function(e,t){return p[t.s]-p[e.s]||e.f-t.f});r<i;++r){var m=s[r].s
if(!(p[m]>t))break
g+=_-(1<<h-p[m]),p[m]=t}for(g>>>=v;g>0;){var b=s[r].s
p[b]<t?g-=1<<t-p[b]++-1:++r}for(;r>=0&&g;--r){var y=s[r].s
p[y]==t&&(--p[y],++g)}h=t}return[new wi(p),h]},Wi=function(e,t,n){return-1==e.s?Math.max(Wi(e.l,t,n+1),Wi(e.r,t,n+1)):t[e.s]=n},zi=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new ki(++t),r=0,i=e[0],s=1,o=function(e){n[r++]=e},a=1;a<=t;++a)if(e[a]==i&&a!=t)++s
else{if(!i&&s>2){for(;s>138;s-=138)o(32754)
s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(i),--s;s>6;s-=6)o(8304)
s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(i)
s=1,i=e[a]}return[n.subarray(0,r),t]},Vi=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r]
return n},Qi=function(e,t,n){var r=n.length,i=qi(t+2)
e[i]=255&r,e[i+1]=r>>>8,e[i+2]=255^e[i],e[i+3]=255^e[i+1]
for(var s=0;s<r;++s)e[i+s+4]=n[s]
return 8*(i+4+r)},Ki=function(e,t,n,r,i,s,o,a,l,c,u){Hi(t,u++,n),++i[256]
for(var d=Gi(i,15),f=d[0],p=d[1],h=Gi(s,15),g=h[0],v=h[1],_=zi(f),m=_[0],b=_[1],y=zi(g),w=y[0],k=y[1],x=new ki(19),S=0;S<m.length;++S)x[31&m[S]]++
for(S=0;S<w.length;++S)x[31&w[S]]++
for(var E=Gi(x,7),P=E[0],C=E[1],L=19;L>4&&!P[Pi[L-1]];--L);var $,T,O,I,A=c+5<<3,M=Vi(i,ji)+Vi(s,Fi)+o,R=Vi(i,f)+Vi(s,g)+o+14+3*L+Vi(x,P)+(2*x[16]+3*x[17]+7*x[18])
if(A<=M&&A<=R)return Qi(t,u,e.subarray(l,l+c))
if(Hi(t,u,1+(R<M)),u+=2,R<M){$=Ri(f,p),T=f,O=Ri(g,v),I=g
var j=Ri(P,C)
for(Hi(t,u,b-257),Hi(t,u+5,k-1),Hi(t,u+10,L-4),u+=14,S=0;S<L;++S)Hi(t,u+3*S,P[Pi[S]])
u+=3*L
for(var F=[m,w],N=0;N<2;++N){var D=F[N]
for(S=0;S<D.length;++S){var q=31&D[S]
Hi(t,u,j[q]),u+=P[q],q>15&&(Hi(t,u,D[S]>>>5&127),u+=D[S]>>>12)}}}else $=Ni,T=ji,O=Di,I=Fi
for(S=0;S<a;++S)if(r[S]>255){q=r[S]>>>18&31,Ui(t,u,$[q+257]),u+=T[q+257],q>7&&(Hi(t,u,r[S]>>>23&31),u+=Si[q])
var B=31&r[S]
Ui(t,u,O[B]),u+=I[B],B>3&&(Ui(t,u,r[S]>>>5&8191),u+=Ei[B])}else Ui(t,u,$[r[S]]),u+=T[r[S]]
return Ui(t,u,$[256]),u+T[256]},Ji=new xi([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Yi=function(){for(var e=new xi(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(1&n&&3988292384)^n>>>1
e[t]=n}return e}(),Xi=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8}
function Zi(e,t){void 0===t&&(t={})
var n=function(){var e=4294967295
return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=Yi[255&n^t[r]]^n>>>8
e=n},d:function(){return 4294967295^e}}}(),r=e.length
n.p(e)
var i,s=function(e,t,n,r){return function(e,t,n,r,i){var s=e.length,o=new wi(r+s+5*(1+Math.floor(s/7e3))+i),a=o.subarray(r,o.length-i),l=0
if(!t||s<8)for(var c=0;c<=s;c+=65535){var u=c+65535
u<s?l=Qi(a,l,e.subarray(c,u)):(a[c]=!0,l=Qi(a,l,e.subarray(c,s)))}else{for(var d=Ji[t-1],f=d>>>13,p=8191&d,h=(1<<n)-1,g=new ki(32768),v=new ki(h+1),_=Math.ceil(n/3),m=2*_,b=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<m)&h},y=new xi(25e3),w=new ki(288),k=new ki(32),x=0,S=0,E=(c=0,0),P=0,C=0;c<s;++c){var L=b(c),$=32767&c,T=v[L]
if(g[$]=T,v[L]=$,P<=c){var O=s-c
if((x>7e3||E>24576)&&O>423){l=Ki(e,a,0,y,w,k,S,E,C,c-C,l),E=x=S=0,C=c
for(var I=0;I<286;++I)w[I]=0
for(I=0;I<30;++I)k[I]=0}var A=2,M=0,R=p,j=$-T&32767
if(O>2&&L==b(c-j))for(var F=Math.min(f,O)-1,N=Math.min(32767,c),D=Math.min(258,O);j<=N&&--R&&$!=T;){if(e[c+A]==e[c+A-j]){for(var q=0;q<D&&e[c+q]==e[c+q-j];++q);if(q>A){if(A=q,M=j,q>F)break
var B=Math.min(j,q-2),H=0
for(I=0;I<B;++I){var U=c-j+I+32768&32767,G=U-g[U]+32768&32767
G>H&&(H=G,T=U)}}}j+=($=T)-(T=g[$])+32768&32767}if(M){y[E++]=268435456|Ti[A]<<18|Oi[M]
var W=31&Ti[A],z=31&Oi[M]
S+=Si[W]+Ei[z],++w[257+W],++k[z],P=c+A,++x}else y[E++]=e[c],++w[e[c]]}}l=Ki(e,a,!0,y,w,k,S,E,C,c-C,l)}return Bi(o,0,r+qi(l)+i)}(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,n,r)}(e,t,10+((i=t).filename&&i.filename.length+1||0),8),o=s.length
return function(e,t){var n=t.filename
if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:9==t.level?2:0,e[9]=3,0!=t.mtime&&Xi(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8
for(var r=0;r<=n.length;++r)e[r+10]=n.charCodeAt(r)}}(s,t),Xi(s,o-8,n.d()),Xi(s,o-4,r),s}var es=!!E||!!S,ts="text/plain",ns=function(e,t,n){var r
void 0===n&&(n=!0)
var[i,s]=e.split("?"),o=h({},t),a=null!==(r=null==s?void 0:s.split("&").map(e=>{var t,[r,i]=e.split("="),s=n&&null!==(t=o[r])&&void 0!==t?t:i
return delete o[r],r+"="+s}))&&void 0!==r?r:[],l=function(e,t){var n,r
void 0===t&&(t="&")
var i=[]
return De(e,function(e,t){U(e)||U(t)||"undefined"===t||(n=encodeURIComponent((e=>e instanceof File)(e)?e.name:e.toString()),r=encodeURIComponent(t),i[i.length]=r+"="+n)}),i.join(t)}(o)
return l&&a.push(l),i+"?"+a.join("&")},rs=(e,t)=>JSON.stringify(e,(e,t)=>"bigint"==typeof t?t.toString():t,t),is=e=>{var{data:t,compression:n}=e
if(t){if(n===ln.GZipJS){var r=Zi(function(e){var t=e.length
if("undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e)
for(var n=new wi(e.length+(e.length>>>1)),r=0,i=function(e){n[r++]=e},s=0;s<t;++s){if(r+5>n.length){var o=new wi(r+8+(t-s<<1))
o.set(n),n=o}var a=e.charCodeAt(s)
a<128?i(a):a<2048?(i(192|a>>>6),i(128|63&a)):a>55295&&a<57344?(i(240|(a=65536+(1047552&a)|1023&e.charCodeAt(++s))>>>18),i(128|a>>>12&63),i(128|a>>>6&63),i(128|63&a)):(i(224|a>>>12),i(128|a>>>6&63),i(128|63&a))}return Bi(n,0,r)}(rs(t)),{mtime:0}),i=new Blob([r],{type:ts})
return{contentType:ts,body:i,estimatedSize:i.size}}if(n===ln.Base64){var s=function(e){var t,n,r,i,s,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a=0,l=0,c="",u=[]
if(!e)return e
e=function(e){var t,n,r,i,s=""
for(t=n=0,r=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,i=0;i<r;i++){var o=e.charCodeAt(i),a=null
o<128?n++:a=o>127&&o<2048?String.fromCharCode(o>>6|192,63&o|128):String.fromCharCode(o>>12|224,o>>6&63|128,63&o|128),z(a)||(n>t&&(s+=e.substring(t,n)),s+=a,t=n=i+1)}return n>t&&(s+=e.substring(t,e.length)),s}(e)
do{t=(s=e.charCodeAt(a++)<<16|e.charCodeAt(a++)<<8|e.charCodeAt(a++))>>18&63,n=s>>12&63,r=s>>6&63,i=63&s,u[l++]=o.charAt(t)+o.charAt(n)+o.charAt(r)+o.charAt(i)}while(a<e.length)
switch(c=u.join(""),e.length%3){case 1:c=c.slice(0,-2)+"=="
break
case 2:c=c.slice(0,-1)+"="}return c}(rs(t)),o=(e=>"data="+encodeURIComponent("string"==typeof e?e:rs(e)))(s)
return{contentType:"application/x-www-form-urlencoded",body:o,estimatedSize:new Blob([o]).size}}var a=rs(t)
return{contentType:"application/json",body:a,estimatedSize:new Blob([a]).size}}},ss=[]
S&&ss.push({transport:"fetch",method:e=>{var t,n,{contentType:r,body:i,estimatedSize:s}=null!==(t=is(e))&&void 0!==t?t:{},o=new Headers
De(e.headers,function(e,t){o.append(t,e)}),r&&o.append("Content-Type",r)
var a=e.url,l=null
if(P){var c=new P
l={signal:c.signal,timeout:setTimeout(()=>c.abort(),e.timeout)}}S(a,h({method:(null==e?void 0:e.method)||"GET",headers:o,keepalive:"POST"===e.method&&(s||0)<52428.8,body:i,signal:null==(n=l)?void 0:n.signal},e.fetchOptions)).then(t=>t.text().then(n=>{var r={statusCode:t.status,text:n}
if(200===t.status)try{r.json=JSON.parse(n)}catch(e){Re.error(e)}null==e.callback||e.callback(r)})).catch(t=>{Re.error(t),null==e.callback||e.callback({statusCode:0,text:t})}).finally(()=>l?clearTimeout(l.timeout):null)}}),E&&ss.push({transport:"XHR",method:e=>{var t,n=new E
n.open(e.method||"GET",e.url,!0)
var{contentType:r,body:i}=null!==(t=is(e))&&void 0!==t?t:{}
De(e.headers,function(e,t){n.setRequestHeader(t,e)}),r&&n.setRequestHeader("Content-Type",r),e.timeout&&(n.timeout=e.timeout),e.disableXHRCredentials||(n.withCredentials=!0),n.onreadystatechange=()=>{if(4===n.readyState){var t={statusCode:n.status,text:n.responseText}
if(200===n.status)try{t.json=JSON.parse(n.responseText)}catch(e){}null==e.callback||e.callback(t)}},n.send(i)}}),null!=w&&w.sendBeacon&&ss.push({transport:"sendBeacon",method:e=>{var t=ns(e.url,{beacon:"1"})
try{var n,{contentType:r,body:i}=null!==(n=is(e))&&void 0!==n?n:{},s="string"==typeof i?new Blob([i],{type:r}):i
w.sendBeacon(t,s)}catch(e){}}})
var os=function(e,t){if(!function(e){try{new RegExp(e)}catch(e){return!1}return!0}(t))return!1
try{return new RegExp(t).test(e)}catch(e){return!1}}
function as(e,t,n){return rs({distinct_id:e,userPropertiesToSet:t,userPropertiesToSetOnce:n})}var ls={exact:(e,t)=>t.some(t=>e.some(e=>t===e)),is_not:(e,t)=>t.every(t=>e.every(e=>t!==e)),regex:(e,t)=>t.some(t=>e.some(e=>os(t,e))),not_regex:(e,t)=>t.every(t=>e.every(e=>!os(t,e))),icontains:(e,t)=>t.map(cs).some(t=>e.map(cs).some(e=>t.includes(e))),not_icontains:(e,t)=>t.map(cs).every(t=>e.map(cs).every(e=>!t.includes(e)))},cs=e=>e.toLowerCase(),us=je("[Error tracking]")
class ds{constructor(e){var t,n
this._suppressionRules=[],this._errorPropertiesBuilder=new ke([new xe,new Ae,new Ee,new Se,new Oe,new Te,new Ce,new Ie],[ve,be]),this._instance=e,this._suppressionRules=null!==(t=null==(n=this._instance.persistence)?void 0:n.get_property(nt))&&void 0!==t?t:[]}onRemoteConfig(e){var t,n,r,i=null!==(t=null==(n=e.errorTracking)?void 0:n.suppressionRules)&&void 0!==t?t:[],s=null==(r=e.errorTracking)?void 0:r.captureExtensionExceptions
this._suppressionRules=i,this._instance.persistence&&this._instance.persistence.register({[nt]:this._suppressionRules,[rt]:s})}get _captureExtensionExceptions(){var e,t=!!this._instance.get_property(rt),n=this._instance.config.error_tracking.captureExtensionExceptions
return null!==(e=null!=n?n:t)&&void 0!==e&&e}buildProperties(e,t){return this._errorPropertiesBuilder.buildFromUnknown(e,{syntheticException:null==t?void 0:t.syntheticException,mechanism:{handled:null==t?void 0:t.handled}})}sendExceptionEvent(e){var t=e.$exception_list
if(this._isExceptionList(t)){if(this._matchesSuppressionRule(t))return void us.info("Skipping exception capture because a suppression rule matched")
if(!this._captureExtensionExceptions&&this._isExtensionException(t))return void us.info("Skipping exception capture because it was thrown by an extension")
if(!this._instance.config.error_tracking.__capturePostHogExceptions&&this._isPostHogException(t))return void us.info("Skipping exception capture because it was thrown by the PostHog SDK")}return this._instance.capture("$exception",e,{_noTruncate:!0,_batchKey:"exceptionEvent"})}_matchesSuppressionRule(e){if(0===e.length)return!1
var t=e.reduce((e,t)=>{var{type:n,value:r}=t
return G(n)&&n.length>0&&e.$exception_types.push(n),G(r)&&r.length>0&&e.$exception_values.push(r),e},{$exception_types:[],$exception_values:[]})
return this._suppressionRules.some(e=>{var n=e.values.map(e=>{var n,r=ls[e.operator],i=D(e.value)?e.value:[e.value],s=null!==(n=t[e.key])&&void 0!==n?n:[]
return i.length>0&&r(i,s)})
return"OR"===e.type?n.some(Boolean):n.every(Boolean)})}_isExtensionException(e){return e.flatMap(e=>{var t,n
return null!==(t=null==(n=e.stacktrace)?void 0:n.frames)&&void 0!==t?t:[]}).some(e=>e.filename&&e.filename.startsWith("chrome-extension://"))}_isPostHogException(e){if(e.length>0){var t,n,r,i,s=null!==(t=null==(n=e[0].stacktrace)?void 0:n.frames)&&void 0!==t?t:[],o=s[s.length-1]
return null!==(r=null==o||null==(i=o.filename)?void 0:i.includes("posthog.com/static"))&&void 0!==r&&r}return!1}_isExceptionList(e){return!V(e)&&D(e)}}var fs=je("[FeatureFlags]"),ps="$active_feature_flags",hs="$override_feature_flags",gs="$feature_flag_payloads",vs="$override_feature_flag_payloads",_s="$feature_flag_request_id",ms=e=>{var t={}
for(var[n,r]of He(e||{}))r&&(t[n]=r)
return t},bs=function(e){return e.FeatureFlags="feature_flags",e.Recordings="recordings",e}({})
class ys{constructor(e){this._override_warning=!1,this._hasLoadedFlags=!1,this._requestInFlight=!1,this._reloadingDisabled=!1,this._additionalReloadRequested=!1,this._flagsCalled=!1,this._flagsLoadedFromRemote=!1,this._instance=e,this.featureFlagEventHandlers=[]}_getValidEvaluationEnvironments(){var e=this._instance.config.evaluation_environments
return null!=e&&e.length?e.filter(e=>{var t=e&&"string"==typeof e&&e.trim().length>0
return t||fs.error("Invalid evaluation environment found:",e,"Expected non-empty string"),t}):[]}_shouldIncludeEvaluationEnvironments(){return this._getValidEvaluationEnvironments().length>0}flags(){if(this._instance.config.__preview_remote_config)this._flagsCalled=!0
else{var e=!this._reloadDebouncer&&(this._instance.config.advanced_disable_feature_flags||this._instance.config.advanced_disable_feature_flags_on_first_load)
this._callFlagsEndpoint({disableFlags:e})}}get hasLoadedFlags(){return this._hasLoadedFlags}getFlags(){return Object.keys(this.getFlagVariants())}getFlagsWithDetails(){var e=this._instance.get_property(ft),t=this._instance.get_property(hs),n=this._instance.get_property(vs)
if(!n&&!t)return e||{}
var r=qe({},e||{}),i=[...new Set([...Object.keys(n||{}),...Object.keys(t||{})])]
for(var s of i){var o,a,l=r[s],c=null==t?void 0:t[s],u=U(c)?null!==(o=null==l?void 0:l.enabled)&&void 0!==o&&o:!!c,d=U(c)?l.variant:"string"==typeof c?c:void 0,f=null==n?void 0:n[s],p=h({},l,{enabled:u,variant:u?null!=d?d:null==l?void 0:l.variant:void 0})
u!==(null==l?void 0:l.enabled)&&(p.original_enabled=null==l?void 0:l.enabled),d!==(null==l?void 0:l.variant)&&(p.original_variant=null==l?void 0:l.variant),f&&(p.metadata=h({},null==l?void 0:l.metadata,{payload:f,original_payload:null==l||null==(a=l.metadata)?void 0:a.payload})),r[s]=p}return this._override_warning||(fs.warn(" Overriding feature flag details!",{flagDetails:e,overriddenPayloads:n,finalDetails:r}),this._override_warning=!0),r}getFlagVariants(){var e=this._instance.get_property(ut),t=this._instance.get_property(hs)
if(!t)return e||{}
for(var n=qe({},e),r=Object.keys(t),i=0;i<r.length;i++)n[r[i]]=t[r[i]]
return this._override_warning||(fs.warn(" Overriding feature flags!",{enabledFlags:e,overriddenFlags:t,finalFlags:n}),this._override_warning=!0),n}getFlagPayloads(){var e=this._instance.get_property(gs),t=this._instance.get_property(vs)
if(!t)return e||{}
for(var n=qe({},e||{}),r=Object.keys(t),i=0;i<r.length;i++)n[r[i]]=t[r[i]]
return this._override_warning||(fs.warn(" Overriding feature flag payloads!",{flagPayloads:e,overriddenPayloads:t,finalPayloads:n}),this._override_warning=!0),n}reloadFeatureFlags(){this._reloadingDisabled||this._instance.config.advanced_disable_feature_flags||this._reloadDebouncer||(this._reloadDebouncer=setTimeout(()=>{this._callFlagsEndpoint()},5))}_clearDebouncer(){clearTimeout(this._reloadDebouncer),this._reloadDebouncer=void 0}ensureFlagsLoaded(){this._hasLoadedFlags||this._requestInFlight||this._reloadDebouncer||this.reloadFeatureFlags()}setAnonymousDistinctId(e){this.$anon_distinct_id=e}setReloadingPaused(e){this._reloadingDisabled=e}_callFlagsEndpoint(e){var t
if(this._clearDebouncer(),!this._instance._shouldDisableFlags())if(this._requestInFlight)this._additionalReloadRequested=!0
else{var n={token:this._instance.config.token,distinct_id:this._instance.get_distinct_id(),groups:this._instance.getGroups(),$anon_distinct_id:this.$anon_distinct_id,person_properties:h({},(null==(t=this._instance.persistence)?void 0:t.get_initial_props())||{},this._instance.get_property(pt)||{}),group_properties:this._instance.get_property(ht)};(null!=e&&e.disableFlags||this._instance.config.advanced_disable_feature_flags)&&(n.disable_flags=!0),this._shouldIncludeEvaluationEnvironments()&&(n.evaluation_environments=this._getValidEvaluationEnvironments())
var r=this._instance.config.__preview_remote_config,i=r?"/flags/?v=2":"/flags/?v=2&config=true",s=this._instance.config.advanced_only_evaluate_survey_feature_flags?"&only_evaluate_survey_feature_flags=true":"",o=this._instance.requestRouter.endpointFor("api",i+s)
r&&(n.timezone=di()),this._requestInFlight=!0,this._instance._send_request({method:"POST",url:o,data:n,compression:this._instance.config.disable_compression?void 0:ln.Base64,timeout:this._instance.config.feature_flag_request_timeout_ms,callback:e=>{var t,r,i=!0
if(200===e.statusCode&&(this._additionalReloadRequested||(this.$anon_distinct_id=void 0),i=!1),this._requestInFlight=!1,this._flagsCalled||(this._flagsCalled=!0,this._instance._onRemoteConfig(null!==(r=e.json)&&void 0!==r?r:{})),!n.disable_flags||this._additionalReloadRequested)if(this._flagsLoadedFromRemote=!i,e.json&&null!=(t=e.json.quotaLimited)&&t.includes(bs.FeatureFlags))fs.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.")
else{var s
n.disable_flags||this.receivedFeatureFlags(null!==(s=e.json)&&void 0!==s?s:{},i),this._additionalReloadRequested&&(this._additionalReloadRequested=!1,this._callFlagsEndpoint())}}})}}getFeatureFlag(e,t){if(void 0===t&&(t={}),this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0){var n=this.getFlagVariants()[e],r=""+n,i=this._instance.get_property(_s)||void 0,s=this._instance.get_property(_t)||{}
if((t.send_event||!("send_event"in t))&&(!(e in s)||!s[e].includes(r))){var o,a,l,c,u,d,f,p,h
D(s[e])?s[e].push(r):s[e]=[r],null==(o=this._instance.persistence)||o.register({[_t]:s})
var g=this.getFeatureFlagDetails(e),v={$feature_flag:e,$feature_flag_response:n,$feature_flag_payload:this.getFeatureFlagPayload(e)||null,$feature_flag_request_id:i,$feature_flag_bootstrapped_response:(null==(a=this._instance.config.bootstrap)||null==(a=a.featureFlags)?void 0:a[e])||null,$feature_flag_bootstrapped_payload:(null==(l=this._instance.config.bootstrap)||null==(l=l.featureFlagPayloads)?void 0:l[e])||null,$used_bootstrap_value:!this._flagsLoadedFromRemote}
U(null==g||null==(c=g.metadata)?void 0:c.version)||(v.$feature_flag_version=g.metadata.version)
var _,m=null!==(u=null==g||null==(d=g.reason)?void 0:d.description)&&void 0!==u?u:null==g||null==(f=g.reason)?void 0:f.code
m&&(v.$feature_flag_reason=m),null!=g&&null!=(p=g.metadata)&&p.id&&(v.$feature_flag_id=g.metadata.id),U(null==g?void 0:g.original_variant)&&U(null==g?void 0:g.original_enabled)||(v.$feature_flag_original_response=U(g.original_variant)?g.original_enabled:g.original_variant),null!=g&&null!=(h=g.metadata)&&h.original_payload&&(v.$feature_flag_original_payload=null==g||null==(_=g.metadata)?void 0:_.original_payload),this._instance.capture("$feature_flag_called",v)}return n}fs.warn('getFeatureFlag for key "'+e+"\" failed. Feature flags didn't load in time.")}getFeatureFlagDetails(e){return this.getFlagsWithDetails()[e]}getFeatureFlagPayload(e){return this.getFlagPayloads()[e]}getRemoteConfigPayload(e,t){var n=this._instance.config.token,r={distinct_id:this._instance.get_distinct_id(),token:n}
this._shouldIncludeEvaluationEnvironments()&&(r.evaluation_environments=this._getValidEvaluationEnvironments()),this._instance._send_request({method:"POST",url:this._instance.requestRouter.endpointFor("api","/flags/?v=2&config=true"),data:r,compression:this._instance.config.disable_compression?void 0:ln.Base64,timeout:this._instance.config.feature_flag_request_timeout_ms,callback:n=>{var r,i=null==(r=n.json)?void 0:r.featureFlagPayloads
t((null==i?void 0:i[e])||void 0)}})}isFeatureEnabled(e,t){if(void 0===t&&(t={}),this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0){var n=this.getFeatureFlag(e,t)
return U(n)?void 0:!!n}fs.warn('isFeatureEnabled for key "'+e+"\" failed. Feature flags didn't load in time.")}addFeatureFlagsHandler(e){this.featureFlagEventHandlers.push(e)}removeFeatureFlagsHandler(e){this.featureFlagEventHandlers=this.featureFlagEventHandlers.filter(t=>t!==e)}receivedFeatureFlags(e,t){if(this._instance.persistence){this._hasLoadedFlags=!0
var n=this.getFlagVariants(),r=this.getFlagPayloads(),i=this.getFlagsWithDetails()
!function(e,t,n,r,i){void 0===n&&(n={}),void 0===r&&(r={}),void 0===i&&(i={})
var s=(e=>{var t=e.flags
return t?(e.featureFlags=Object.fromEntries(Object.keys(t).map(e=>{var n
return[e,null!==(n=t[e].variant)&&void 0!==n?n:t[e].enabled]})),e.featureFlagPayloads=Object.fromEntries(Object.keys(t).filter(e=>t[e].enabled).filter(e=>{var n
return null==(n=t[e].metadata)?void 0:n.payload}).map(e=>{var n
return[e,null==(n=t[e].metadata)?void 0:n.payload]}))):fs.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"),e})(e),o=s.flags,a=s.featureFlags,l=s.featureFlagPayloads
if(a){var c=e.requestId
if(D(a)){fs.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.")
var u={}
if(a)for(var d=0;d<a.length;d++)u[a[d]]=!0
t&&t.register({[ps]:a,[ut]:u})}else{var f=a,p=l,g=o
e.errorsWhileComputingFlags&&(f=h({},n,f),p=h({},r,p),g=h({},i,g)),t&&t.register(h({[ps]:Object.keys(ms(f)),[ut]:f||{},[gs]:p||{},[ft]:g||{}},c?{[_s]:c}:{}))}}}(e,this._instance.persistence,n,r,i),this._fireFeatureFlagsCallbacks(t)}}override(e,t){void 0===t&&(t=!1),fs.warn("override is deprecated. Please use overrideFeatureFlags instead."),this.overrideFeatureFlags({flags:e,suppressWarning:t})}overrideFeatureFlags(e){if(!this._instance.__loaded||!this._instance.persistence)return fs.uninitializedWarning("posthog.featureFlags.overrideFeatureFlags")
if(!1===e)return this._instance.persistence.unregister(hs),this._instance.persistence.unregister(vs),void this._fireFeatureFlagsCallbacks()
if(e&&"object"==typeof e&&("flags"in e||"payloads"in e)){var t,n=e
if(this._override_warning=Boolean(null!==(t=n.suppressWarning)&&void 0!==t&&t),"flags"in n)if(!1===n.flags)this._instance.persistence.unregister(hs)
else if(n.flags)if(D(n.flags)){for(var r={},i=0;i<n.flags.length;i++)r[n.flags[i]]=!0
this._instance.persistence.register({[hs]:r})}else this._instance.persistence.register({[hs]:n.flags})
return"payloads"in n&&(!1===n.payloads?this._instance.persistence.unregister(vs):n.payloads&&this._instance.persistence.register({[vs]:n.payloads})),void this._fireFeatureFlagsCallbacks()}this._fireFeatureFlagsCallbacks()}onFeatureFlags(e){if(this.addFeatureFlagsHandler(e),this._hasLoadedFlags){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
e(t,n)}return()=>this.removeFeatureFlagsHandler(e)}updateEarlyAccessFeatureEnrollment(e,t,n){var r,i=(this._instance.get_property(dt)||[]).find(t=>t.flagKey===e),s={["$feature_enrollment/"+e]:t},o={$feature_flag:e,$feature_enrollment:t,$set:s}
i&&(o.$early_access_feature_name=i.name),n&&(o.$feature_enrollment_stage=n),this._instance.capture("$feature_enrollment_update",o),this.setPersonPropertiesForFlags(s,!1)
var a=h({},this.getFlagVariants(),{[e]:t})
null==(r=this._instance.persistence)||r.register({[ps]:Object.keys(ms(a)),[ut]:a}),this._fireFeatureFlagsCallbacks()}getEarlyAccessFeatures(e,t,n){void 0===t&&(t=!1)
var r=this._instance.get_property(dt),i=n?"&"+n.map(e=>"stage="+e).join("&"):""
if(r&&!t)return e(r)
this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/early_access_features/?token="+this._instance.config.token+i),method:"GET",callback:t=>{var n,r
if(t.json){var i=t.json.earlyAccessFeatures
return null==(n=this._instance.persistence)||n.unregister(dt),null==(r=this._instance.persistence)||r.register({[dt]:i}),e(i)}}})}_prepareFeatureFlagsForCallbacks(){var e=this.getFlags(),t=this.getFlagVariants()
return{flags:e.filter(e=>t[e]),flagVariants:Object.keys(t).filter(e=>t[e]).reduce((e,n)=>(e[n]=t[n],e),{})}}_fireFeatureFlagsCallbacks(e){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
this.featureFlagEventHandlers.forEach(r=>r(t,n,{errorsLoading:e}))}setPersonPropertiesForFlags(e,t){void 0===t&&(t=!0)
var n=this._instance.get_property(pt)||{}
this._instance.register({[pt]:h({},n,e)}),t&&this._instance.reloadFeatureFlags()}resetPersonPropertiesForFlags(){this._instance.unregister(pt)}setGroupPropertiesForFlags(e,t){void 0===t&&(t=!0)
var n=this._instance.get_property(ht)||{}
0!==Object.keys(n).length&&Object.keys(n).forEach(t=>{n[t]=h({},n[t],e[t]),delete e[t]}),this._instance.register({[ht]:h({},n,e)}),t&&this._instance.reloadFeatureFlags()}resetGroupPropertiesForFlags(e){if(e){var t=this._instance.get_property(ht)||{}
this._instance.register({[ht]:h({},t,{[e]:{}})})}else this._instance.unregister(ht)}reset(){this._hasLoadedFlags=!1,this._requestInFlight=!1,this._reloadingDisabled=!1,this._additionalReloadRequested=!1,this._flagsCalled=!1,this._flagsLoadedFromRemote=!1,this.$anon_distinct_id=void 0,this._clearDebouncer(),this._override_warning=!1}}var ws=["cookie","localstorage","localstorage+cookie","sessionstorage","memory"]
class ks{constructor(e,t){this._config=e,this.props={},this._campaign_params_saved=!1,this._name=(e=>{var t=""
return e.token&&(t=e.token.replace(/\+/g,"PL").replace(/\//g,"SL").replace(/=/g,"EQ")),e.persistence_name?"ph_"+e.persistence_name:"ph_"+t+"_posthog"})(e),this._storage=this._buildStorage(e),this.load(),e.debug&&Re.info("Persistence loaded",e.persistence,h({},this.props)),this.update_config(e,e,t),this.save()}isDisabled(){return!!this._disabled}_buildStorage(e){-1===ws.indexOf(e.persistence.toLowerCase())&&(Re.critical("Unknown persistence type "+e.persistence+"; falling back to localStorage+cookie"),e.persistence="localStorage+cookie")
var t=e.persistence.toLowerCase()
return"localstorage"===t&&Tn._is_supported()?Tn:"localstorage+cookie"===t&&In._is_supported()?In:"sessionstorage"===t&&jn._is_supported()?jn:"memory"===t?Mn:"cookie"===t?Ln:In._is_supported()?In:Ln}properties(){var e={}
return De(this.props,function(t,n){if(n===ut&&B(t))for(var r=Object.keys(t),i=0;i<r.length;i++)e["$feature/"+r[i]]=t[r[i]]
else o=n,a=!1,(z(s=Ct)?a:y&&s.indexOf===y?-1!=s.indexOf(o):(De(s,function(e){if(a||(a=e===o))return Fe}),a))||(e[n]=t)
var s,o,a}),e}load(){if(!this._disabled){var e=this._storage._parse(this._name)
e&&(this.props=qe({},e))}}save(){this._disabled||this._storage._set(this._name,this.props,this._expire_days,this._cross_subdomain,this._secure,this._config.debug)}remove(){this._storage._remove(this._name,!1),this._storage._remove(this._name,!0)}clear(){this.remove(),this.props={}}register_once(e,t,n){if(B(e)){U(t)&&(t="None"),this._expire_days=U(n)?this._default_expiry:n
var r=!1
if(De(e,(e,n)=>{this.props.hasOwnProperty(n)&&this.props[n]!==t||(this.props[n]=e,r=!0)}),r)return this.save(),!0}return!1}register(e,t){if(B(e)){this._expire_days=U(t)?this._default_expiry:t
var n=!1
if(De(e,(t,r)=>{e.hasOwnProperty(r)&&this.props[r]!==t&&(this.props[r]=t,n=!0)}),n)return this.save(),!0}return!1}unregister(e){e in this.props&&(delete this.props[e],this.save())}update_campaign_params(){if(!this._campaign_params_saved){var e=ii(this._config.custom_campaign_params,this._config.mask_personal_data_properties,this._config.custom_personal_data_properties)
H(We(e))||this.register(e),this._campaign_params_saved=!0}}update_search_keyword(){var e
this.register((e=null==k?void 0:k.referrer)?oi(e):{})}update_referrer_info(){var e
this.register_once({$referrer:li(),$referring_domain:null!=k&&k.referrer&&(null==(e=cn(k.referrer))?void 0:e.host)||"$direct"},void 0)}set_initial_person_info(){this.props[wt]||this.props[kt]||this.register_once({[xt]:ci(this._config.mask_personal_data_properties,this._config.custom_personal_data_properties)},void 0)}get_initial_props(){var e={}
De([kt,wt],t=>{var n=this.props[t]
n&&De(n,function(t,n){e["$initial_"+M(n)]=t})})
var t,n,r=this.props[xt]
if(r){var i=(t=ui(r),n={},De(t,function(e,t){n["$initial_"+M(t)]=e}),n)
qe(e,i)}return e}safe_merge(e){return De(this.props,function(t,n){n in e||(e[n]=t)}),e}update_config(e,t,n){if(this._default_expiry=this._expire_days=e.cookie_expiration,this.set_disabled(e.disable_persistence||!!n),this.set_cross_subdomain(e.cross_subdomain_cookie),this.set_secure(e.secure_cookie),e.persistence!==t.persistence){var r=this._buildStorage(e),i=this.props
this.clear(),this._storage=r,this.props=i,this.save()}}set_disabled(e){this._disabled=e,this._disabled?this.remove():this.save()}set_cross_subdomain(e){e!==this._cross_subdomain&&(this._cross_subdomain=e,this.remove(),this.save())}set_secure(e){e!==this._secure&&(this._secure=e,this.remove(),this.save())}set_event_timer(e,t){var n=this.props[Xe]||{}
n[e]=t,this.props[Xe]=n,this.save()}remove_event_timer(e){var t=(this.props[Xe]||{})[e]
return U(t)||(delete this.props[Xe][e],this.save()),t}get_property(e){return this.props[e]}set_property(e,t){this.props[e]=t,this.save()}}!function(e){e.Button="button",e.Tab="tab",e.Selector="selector"}({}),function(e){e.TopLeft="top_left",e.TopRight="top_right",e.TopCenter="top_center",e.MiddleLeft="middle_left",e.MiddleRight="middle_right",e.MiddleCenter="middle_center",e.Left="left",e.Center="center",e.Right="right",e.NextToTrigger="next_to_trigger"}({})
var xs=function(e){return e.Popover="popover",e.API="api",e.Widget="widget",e.ExternalSurvey="external_survey",e}({})
!function(e){e.Open="open",e.MultipleChoice="multiple_choice",e.SingleChoice="single_choice",e.Rating="rating",e.Link="link"}({}),function(e){e.NextQuestion="next_question",e.End="end",e.ResponseBased="response_based",e.SpecificQuestion="specific_question"}({}),function(e){e.Once="once",e.Recurring="recurring",e.Always="always"}({})
var Ss=function(e){return e.SHOWN="survey shown",e.DISMISSED="survey dismissed",e.SENT="survey sent",e}({}),Es=function(e){return e.SURVEY_ID="$survey_id",e.SURVEY_NAME="$survey_name",e.SURVEY_RESPONSE="$survey_response",e.SURVEY_ITERATION="$survey_iteration",e.SURVEY_ITERATION_START_DATE="$survey_iteration_start_date",e.SURVEY_PARTIALLY_COMPLETED="$survey_partially_completed",e.SURVEY_SUBMISSION_ID="$survey_submission_id",e.SURVEY_QUESTIONS="$survey_questions",e.SURVEY_COMPLETED="$survey_completed",e}({}),Ps=function(e){return e.Popover="popover",e.Inline="inline",e}({})
class Cs{constructor(){this._events={},this._events={}}on(e,t){return this._events[e]||(this._events[e]=[]),this._events[e].push(t),()=>{this._events[e]=this._events[e].filter(e=>e!==t)}}emit(e,t){for(var n of this._events[e]||[])n(t)
for(var r of this._events["*"]||[])r(e,t)}}class Ls{constructor(e){this._debugEventEmitter=new Cs,this._checkStep=(e,t)=>this._checkStepEvent(e,t)&&this._checkStepUrl(e,t)&&this._checkStepElement(e,t),this._checkStepEvent=(e,t)=>null==t||!t.event||(null==e?void 0:e.event)===(null==t?void 0:t.event),this._instance=e,this._actionEvents=new Set,this._actionRegistry=new Set}init(){var e,t
U(null==(e=this._instance)?void 0:e._addCaptureHook)||(null==(t=this._instance)||t._addCaptureHook((e,t)=>{this.on(e,t)}))}register(e){var t,n
if(!U(null==(t=this._instance)?void 0:t._addCaptureHook)&&(e.forEach(e=>{var t,n
null==(t=this._actionRegistry)||t.add(e),null==(n=e.steps)||n.forEach(e=>{var t
null==(t=this._actionEvents)||t.add((null==e?void 0:e.event)||"")})}),null!=(n=this._instance)&&n.autocapture)){var r,i=new Set
e.forEach(e=>{var t
null==(t=e.steps)||t.forEach(e=>{null!=e&&e.selector&&i.add(null==e?void 0:e.selector)})}),null==(r=this._instance)||r.autocapture.setElementSelectors(i)}}on(e,t){var n
null!=t&&0!=e.length&&(this._actionEvents.has(e)||this._actionEvents.has(null==t?void 0:t.event))&&this._actionRegistry&&(null==(n=this._actionRegistry)?void 0:n.size)>0&&this._actionRegistry.forEach(e=>{this._checkAction(t,e)&&this._debugEventEmitter.emit("actionCaptured",e.name)})}_addActionHook(e){this.onAction("actionCaptured",t=>e(t))}_checkAction(e,t){if(null==(null==t?void 0:t.steps))return!1
for(var n of t.steps)if(this._checkStep(e,n))return!0
return!1}onAction(e,t){return this._debugEventEmitter.on(e,t)}_checkStepUrl(e,t){if(null!=t&&t.url){var n,r=null==e||null==(n=e.properties)?void 0:n.$current_url
if(!r||"string"!=typeof r)return!1
if(!Ls._matchString(r,null==t?void 0:t.url,(null==t?void 0:t.url_matching)||"contains"))return!1}return!0}static _matchString(e,t,n){switch(n){case"regex":return!!v&&os(e,t)
case"exact":return t===e
case"contains":var r=Ls._escapeStringRegexp(t).replace(/_/g,".").replace(/%/g,".*")
return os(e,r)
default:return!1}}static _escapeStringRegexp(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}_checkStepElement(e,t){if((null!=t&&t.href||null!=t&&t.tag_name||null!=t&&t.text)&&!this._getElementsList(e).some(e=>!(null!=t&&t.href&&!Ls._matchString(e.href||"",null==t?void 0:t.href,(null==t?void 0:t.href_matching)||"exact")||null!=t&&t.tag_name&&e.tag_name!==(null==t?void 0:t.tag_name)||null!=t&&t.text&&!Ls._matchString(e.text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")&&!Ls._matchString(e.$el_text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact"))))return!1
if(null!=t&&t.selector){var n,r=null==e||null==(n=e.properties)?void 0:n.$element_selectors
if(!r)return!1
if(!r.includes(null==t?void 0:t.selector))return!1}return!0}_getElementsList(e){return null==(null==e?void 0:e.properties.$elements)?[]:null==e?void 0:e.properties.$elements}}var $s=je("[Surveys]"),Ts="seenSurvey_",Os=(e,t)=>{var n="$survey_"+t+"/"+e.id
return e.current_iteration&&e.current_iteration>0&&(n="$survey_"+t+"/"+e.id+"/"+e.current_iteration),n},Is=e=>{var t=""+Ts+e.id
return e.current_iteration&&e.current_iteration>0&&(t=""+Ts+e.id+"_"+e.current_iteration),t},As=[xs.Popover,xs.Widget,xs.API],Ms={ignoreConditions:!1,ignoreDelay:!1,displayType:Ps.Popover}
class Rs{constructor(e){this._instance=e,this._eventToSurveys=new Map,this._actionToSurveys=new Map}register(e){var t
U(null==(t=this._instance)?void 0:t._addCaptureHook)||(this._setupEventBasedSurveys(e),this._setupActionBasedSurveys(e))}_setupActionBasedSurveys(e){var t=e.filter(e=>{var t,n
return(null==(t=e.conditions)?void 0:t.actions)&&(null==(n=e.conditions)||null==(n=n.actions)||null==(n=n.values)?void 0:n.length)>0})
0!==t.length&&(null==this._actionMatcher&&(this._actionMatcher=new Ls(this._instance),this._actionMatcher.init(),this._actionMatcher._addActionHook(e=>{this.onAction(e)})),t.forEach(e=>{var t,n,r,i,s
e.conditions&&null!=(t=e.conditions)&&t.actions&&null!=(n=e.conditions)&&null!=(n=n.actions)&&n.values&&(null==(r=e.conditions)||null==(r=r.actions)||null==(r=r.values)?void 0:r.length)>0&&(null==(i=this._actionMatcher)||i.register(e.conditions.actions.values),null==(s=e.conditions)||null==(s=s.actions)||null==(s=s.values)||s.forEach(t=>{if(t&&t.name){var n=this._actionToSurveys.get(t.name)
n&&n.push(e.id),this._actionToSurveys.set(t.name,n||[e.id])}}))}))}_setupEventBasedSurveys(e){var t
0!==e.filter(e=>{var t,n
return(null==(t=e.conditions)?void 0:t.events)&&(null==(n=e.conditions)||null==(n=n.events)||null==(n=n.values)?void 0:n.length)>0}).length&&(null==(t=this._instance)||t._addCaptureHook((e,t)=>{this.onEvent(e,t)}),e.forEach(e=>{var t
null==(t=e.conditions)||null==(t=t.events)||null==(t=t.values)||t.forEach(t=>{if(t&&t.name){var n=this._eventToSurveys.get(t.name)
n&&n.push(e.id),this._eventToSurveys.set(t.name,n||[e.id])}})}))}onEvent(e,t){var n,r,i=(null==(n=this._instance)||null==(n=n.persistence)?void 0:n.props[vt])||[]
if(Ss.SHOWN===e&&t&&i.length>0){var s
$s.info("survey event matched, removing survey from activated surveys",{event:e,eventPayload:t,existingActivatedSurveys:i})
var o=null==t||null==(s=t.properties)?void 0:s.$survey_id
if(o){var a=i.indexOf(o)
a>=0&&(i.splice(a,1),this._updateActivatedSurveys(i))}}else if(this._eventToSurveys.has(e)){$s.info("survey event name matched",{event:e,eventPayload:t,surveys:this._eventToSurveys.get(e)})
var l=[]
null==(r=this._instance)||r.getSurveys(t=>{l=t.filter(t=>{var n
return null==(n=this._eventToSurveys.get(e))?void 0:n.includes(t.id)})})
var c=l.filter(n=>{var r,i=null==(r=n.conditions)||null==(r=r.events)||null==(r=r.values)?void 0:r.find(t=>t.name===e)
return!!i&&(!i.propertyFilters||Object.entries(i.propertyFilters).every(e=>{var n,[r,i]=e,s=null==t||null==(n=t.properties)?void 0:n[r]
if(U(s)||z(s))return!1
var o=[String(s)],a=ls[i.operator]
return a?a(i.values,o):($s.warn("Unknown property comparison operator: "+i.operator),!1)}))})
this._updateActivatedSurveys(i.concat(c.map(e=>e.id)||[]))}}onAction(e){var t,n=(null==(t=this._instance)||null==(t=t.persistence)?void 0:t.props[vt])||[]
this._actionToSurveys.has(e)&&this._updateActivatedSurveys(n.concat(this._actionToSurveys.get(e)||[]))}_updateActivatedSurveys(e){var t
$s.info("updating activated surveys",{activatedSurveys:e}),null==(t=this._instance)||null==(t=t.persistence)||t.register({[vt]:[...new Set(e)]})}getSurveys(){var e
return(null==(e=this._instance)||null==(e=e.persistence)?void 0:e.props[vt])||[]}getEventToSurveys(){return this._eventToSurveys}_getActionMatcher(){return this._actionMatcher}}class js{constructor(e){this._isSurveysEnabled=void 0,this._surveyManager=null,this._isFetchingSurveys=!1,this._isInitializingSurveys=!1,this._surveyCallbacks=[],this._instance=e,this._surveyEventReceiver=null}onRemoteConfig(e){if(!this._instance.config.disable_surveys){var t=e.surveys
if(V(t))return $s.warn("Flags not loaded yet. Not loading surveys.")
var n=D(t)
this._isSurveysEnabled=n?t.length>0:t,$s.info("flags response received, isSurveysEnabled: "+this._isSurveysEnabled),this.loadIfEnabled()}}reset(){localStorage.removeItem("lastSeenSurveyDate")
for(var e=[],t=0;t<localStorage.length;t++){var n=localStorage.key(t);(null!=n&&n.startsWith(Ts)||null!=n&&n.startsWith("inProgressSurvey_"))&&e.push(n)}e.forEach(e=>localStorage.removeItem(e))}loadIfEnabled(){if(!this._surveyManager)if(this._isInitializingSurveys)$s.info("Already initializing surveys, skipping...")
else if(this._instance.config.disable_surveys)$s.info("Disabled. Not loading surveys.")
else if(this._instance.config.cookieless_mode&&this._instance.consent.isOptedOut())$s.info("Not loading surveys in cookieless mode without consent.")
else{var e=null==L?void 0:L.__PosthogExtensions__
if(e){if(!U(this._isSurveysEnabled)||this._instance.config.advanced_enable_surveys){var t=this._isSurveysEnabled||this._instance.config.advanced_enable_surveys
this._isInitializingSurveys=!0
try{var n=e.generateSurveys
if(n)return void this._completeSurveyInitialization(n,t)
var r=e.loadExternalDependency
if(!r)return void this._handleSurveyLoadError("PostHog loadExternalDependency extension not found.")
r(this._instance,"surveys",n=>{n||!e.generateSurveys?this._handleSurveyLoadError("Could not load surveys script",n):this._completeSurveyInitialization(e.generateSurveys,t)})}catch(e){throw this._handleSurveyLoadError("Error initializing surveys",e),e}finally{this._isInitializingSurveys=!1}}}else $s.error("PostHog Extensions not found.")}}_completeSurveyInitialization(e,t){this._surveyManager=e(this._instance,t),this._surveyEventReceiver=new Rs(this._instance),$s.info("Surveys loaded successfully"),this._notifySurveyCallbacks({isLoaded:!0})}_handleSurveyLoadError(e,t){$s.error(e,t),this._notifySurveyCallbacks({isLoaded:!1,error:e})}onSurveysLoaded(e){return this._surveyCallbacks.push(e),this._surveyManager&&this._notifySurveyCallbacks({isLoaded:!0}),()=>{this._surveyCallbacks=this._surveyCallbacks.filter(t=>t!==e)}}getSurveys(e,t){if(void 0===t&&(t=!1),this._instance.config.disable_surveys)return $s.info("Disabled. Not loading surveys."),e([])
var n=this._instance.get_property(gt)
if(n&&!t)return e(n,{isLoaded:!0})
if(this._isFetchingSurveys)return e([],{isLoaded:!1,error:"Surveys are already being loaded"})
try{this._isFetchingSurveys=!0,this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/surveys/?token="+this._instance.config.token),method:"GET",timeout:this._instance.config.surveys_request_timeout_ms,callback:t=>{var n
this._isFetchingSurveys=!1
var r=t.statusCode
if(200!==r||!t.json){var i="Surveys API could not be loaded, status: "+r
return $s.error(i),e([],{isLoaded:!1,error:i})}var s,o=t.json.surveys||[],a=o.filter(e=>function(e){return!(!e.start_date||e.end_date)}(e)&&(function(e){var t
return!(null==(t=e.conditions)||null==(t=t.events)||null==(t=t.values)||!t.length)}(e)||function(e){var t
return!(null==(t=e.conditions)||null==(t=t.actions)||null==(t=t.values)||!t.length)}(e)))
return a.length>0&&(null==(s=this._surveyEventReceiver)||s.register(a)),null==(n=this._instance.persistence)||n.register({[gt]:o}),e(o,{isLoaded:!0})}})}catch(e){throw this._isFetchingSurveys=!1,e}}_notifySurveyCallbacks(e){for(var t of this._surveyCallbacks)try{if(!e.isLoaded)return t([],e)
this.getSurveys(t)}catch(e){$s.error("Error in survey callback",e)}}getActiveMatchingSurveys(e,t){if(void 0===t&&(t=!1),!V(this._surveyManager))return this._surveyManager.getActiveMatchingSurveys(e,t)
$s.warn("init was not called")}_getSurveyById(e){var t=null
return this.getSurveys(n=>{var r
t=null!==(r=n.find(t=>t.id===e))&&void 0!==r?r:null}),t}_checkSurveyEligibility(e){if(V(this._surveyManager))return{eligible:!1,reason:"SDK is not enabled or survey functionality is not yet loaded"}
var t="string"==typeof e?this._getSurveyById(e):e
return t?this._surveyManager.checkSurveyEligibility(t):{eligible:!1,reason:"Survey not found"}}canRenderSurvey(e){if(V(this._surveyManager))return $s.warn("init was not called"),{visible:!1,disabledReason:"SDK is not enabled or survey functionality is not yet loaded"}
var t=this._checkSurveyEligibility(e)
return{visible:t.eligible,disabledReason:t.reason}}canRenderSurveyAsync(e,t){return V(this._surveyManager)?($s.warn("init was not called"),Promise.resolve({visible:!1,disabledReason:"SDK is not enabled or survey functionality is not yet loaded"})):new Promise(n=>{this.getSurveys(t=>{var r,i=null!==(r=t.find(t=>t.id===e))&&void 0!==r?r:null
if(i){var s=this._checkSurveyEligibility(i)
n({visible:s.eligible,disabledReason:s.reason})}else n({visible:!1,disabledReason:"Survey not found"})},t)})}renderSurvey(e,t){var n
if(V(this._surveyManager))$s.warn("init was not called")
else{var r="string"==typeof e?this._getSurveyById(e):e
if(null!=r&&r.id)if(As.includes(r.type)){var i=null==k?void 0:k.querySelector(t)
if(i)return null!=(n=r.appearance)&&n.surveyPopupDelaySeconds?($s.info("Rendering survey "+r.id+" with delay of "+r.appearance.surveyPopupDelaySeconds+" seconds"),void setTimeout(()=>{var e,t
$s.info("Rendering survey "+r.id+" with delay of "+(null==(e=r.appearance)?void 0:e.surveyPopupDelaySeconds)+" seconds"),null==(t=this._surveyManager)||t.renderSurvey(r,i),$s.info("Survey "+r.id+" rendered")},1e3*r.appearance.surveyPopupDelaySeconds)):void this._surveyManager.renderSurvey(r,i)
$s.warn("Survey element not found")}else $s.warn("Surveys of type "+r.type+" cannot be rendered in the app")
else $s.warn("Survey not found")}}displaySurvey(e,t){var n
if(V(this._surveyManager))$s.warn("init was not called")
else{var r=this._getSurveyById(e)
if(r){var i=r
if(null!=(n=r.appearance)&&n.surveyPopupDelaySeconds&&t.ignoreDelay&&(i=h({},r,{appearance:h({},r.appearance,{surveyPopupDelaySeconds:0})})),!1===t.ignoreConditions){var s=this.canRenderSurvey(r)
if(!s.visible)return void $s.warn("Survey is not eligible to be displayed: ",s.disabledReason)}t.displayType!==Ps.Inline?this._surveyManager.handlePopoverSurvey(i):this.renderSurvey(i,t.selector)}else $s.warn("Survey not found")}}}var Fs=je("[RateLimiter]")
class Ns{constructor(e){var t,n
this.serverLimits={},this.lastEventRateLimited=!1,this.checkForLimiting=e=>{var t=e.text
if(t&&t.length)try{(JSON.parse(t).quota_limited||[]).forEach(e=>{Fs.info((e||"events")+" is quota limited."),this.serverLimits[e]=(new Date).getTime()+6e4})}catch(e){return void Fs.warn('could not rate limit - continuing. Error: "'+(null==e?void 0:e.message)+'"',{text:t})}},this.instance=e,this.captureEventsPerSecond=(null==(t=e.config.rate_limiting)?void 0:t.events_per_second)||10,this.captureEventsBurstLimit=Math.max((null==(n=e.config.rate_limiting)?void 0:n.events_burst_limit)||10*this.captureEventsPerSecond,this.captureEventsPerSecond),this.lastEventRateLimited=this.clientRateLimitContext(!0).isRateLimited}clientRateLimitContext(e){var t,n,r
void 0===e&&(e=!1)
var i=(new Date).getTime(),s=null!==(t=null==(n=this.instance.persistence)?void 0:n.get_property(yt))&&void 0!==t?t:{tokens:this.captureEventsBurstLimit,last:i}
s.tokens+=(i-s.last)/1e3*this.captureEventsPerSecond,s.last=i,s.tokens>this.captureEventsBurstLimit&&(s.tokens=this.captureEventsBurstLimit)
var o=s.tokens<1
return o||e||(s.tokens=Math.max(0,s.tokens-1)),!o||this.lastEventRateLimited||e||this.instance.capture("$$client_ingestion_warning",{$$client_ingestion_warning_message:"posthog-js client rate limited. Config is set to "+this.captureEventsPerSecond+" events per second and "+this.captureEventsBurstLimit+" events burst limit."},{skip_client_rate_limiting:!0}),this.lastEventRateLimited=o,null==(r=this.instance.persistence)||r.set_property(yt,s),{isRateLimited:o,remainingTokens:s.tokens}}isServerRateLimited(e){var t=this.serverLimits[e||"events"]||!1
return!1!==t&&(new Date).getTime()<t}}var Ds=je("[RemoteConfig]")
class qs{constructor(e){this._instance=e}get remoteConfig(){var e
return null==(e=L._POSTHOG_REMOTE_CONFIG)||null==(e=e[this._instance.config.token])?void 0:e.config}_loadRemoteConfigJs(e){var t,n
null!=(t=L.__PosthogExtensions__)&&t.loadExternalDependency?null==(n=L.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"remote-config",()=>e(this.remoteConfig)):(Ds.error("PostHog Extensions not found. Cannot load remote config."),e())}_loadRemoteConfigJSON(e){this._instance._send_request({method:"GET",url:this._instance.requestRouter.endpointFor("assets","/array/"+this._instance.config.token+"/config"),callback:t=>{e(t.json)}})}load(){try{if(this.remoteConfig)return Ds.info("Using preloaded remote config",this.remoteConfig),void this._onRemoteConfig(this.remoteConfig)
if(this._instance._shouldDisableFlags())return void Ds.warn("Remote config is disabled. Falling back to local config.")
this._loadRemoteConfigJs(e=>{if(!e)return Ds.info("No config found after loading remote JS config. Falling back to JSON."),void this._loadRemoteConfigJSON(e=>{this._onRemoteConfig(e)})
this._onRemoteConfig(e)})}catch(e){Ds.error("Error loading remote config",e)}}_onRemoteConfig(e){e?this._instance.config.__preview_remote_config?(this._instance._onRemoteConfig(e),!1!==e.hasFeatureFlags&&this._instance.featureFlags.ensureFlagsLoaded()):Ds.info("__preview_remote_config is disabled. Logging config instead",e):Ds.error("Failed to fetch remote config from PostHog.")}}var Bs=3e3
class Hs{constructor(e,t){this._isPaused=!0,this._queue=[],this._flushTimeoutMs=re((null==t?void 0:t.flush_interval_ms)||Bs,250,5e3,Re.createLogger("flush interval"),Bs),this._sendRequest=e}enqueue(e){this._queue.push(e),this._flushTimeout||this._setFlushTimeout()}unload(){this._clearFlushTimeout()
var e=this._queue.length>0?this._formatQueue():{},t=Object.values(e);[...t.filter(e=>0===e.url.indexOf("/e")),...t.filter(e=>0!==e.url.indexOf("/e"))].map(e=>{this._sendRequest(h({},e,{transport:"sendBeacon"}))})}enable(){this._isPaused=!1,this._setFlushTimeout()}_setFlushTimeout(){var e=this
this._isPaused||(this._flushTimeout=setTimeout(()=>{if(this._clearFlushTimeout(),this._queue.length>0){var t=this._formatQueue(),n=function(){var n=t[r],i=(new Date).getTime()
n.data&&D(n.data)&&De(n.data,e=>{e.offset=Math.abs(e.timestamp-i),delete e.timestamp}),e._sendRequest(n)}
for(var r in t)n()}},this._flushTimeoutMs))}_clearFlushTimeout(){clearTimeout(this._flushTimeout),this._flushTimeout=void 0}_formatQueue(){var e={}
return De(this._queue,t=>{var n,r=t,i=(r?r.batchKey:null)||r.url
U(e[i])&&(e[i]=h({},r,{data:[]})),null==(n=e[i].data)||n.push(r.data)}),this._queue=[],e}}var Us=["retriesPerformedSoFar"]
class Gs{constructor(e){this._isPolling=!1,this._pollIntervalMs=3e3,this._queue=[],this._instance=e,this._queue=[],this._areWeOnline=!0,!U(v)&&"onLine"in v.navigator&&(this._areWeOnline=v.navigator.onLine,this._onlineListener=()=>{this._areWeOnline=!0,this._flush()},this._offlineListener=()=>{this._areWeOnline=!1},Ke(v,"online",this._onlineListener),Ke(v,"offline",this._offlineListener))}get length(){return this._queue.length}retriableRequest(e){var{retriesPerformedSoFar:t}=e,n=g(e,Us)
Q(t)&&t>0&&(n.url=ns(n.url,{retry_count:t})),this._instance._send_request(h({},n,{callback:e=>{200!==e.statusCode&&(e.statusCode<400||e.statusCode>=500)&&(null!=t?t:0)<10?this._enqueue(h({retriesPerformedSoFar:t},n)):null==n.callback||n.callback(e)}}))}_enqueue(e){var t=e.retriesPerformedSoFar||0
e.retriesPerformedSoFar=t+1
var n=function(e){var t=3e3*Math.pow(2,e),n=t/2,r=Math.min(18e5,t),i=(Math.random()-.5)*(r-n)
return Math.ceil(r+i)}(t),r=Date.now()+n
this._queue.push({retryAt:r,requestOptions:e})
var i="Enqueued failed request for retry in "+n
navigator.onLine||(i+=" (Browser is offline)"),Re.warn(i),this._isPolling||(this._isPolling=!0,this._poll())}_poll(){if(this._poller&&clearTimeout(this._poller),0===this._queue.length)return this._isPolling=!1,void(this._poller=void 0)
this._poller=setTimeout(()=>{this._areWeOnline&&this._queue.length>0&&this._flush(),this._poll()},this._pollIntervalMs)}_flush(){var e=Date.now(),t=[],n=this._queue.filter(n=>n.retryAt<e||(t.push(n),!1))
if(this._queue=t,n.length>0)for(var{requestOptions:r}of n)this.retriableRequest(r)}unload(){for(var{requestOptions:e}of(this._poller&&(clearTimeout(this._poller),this._poller=void 0),this._isPolling=!1,U(v)||(this._onlineListener&&(v.removeEventListener("online",this._onlineListener),this._onlineListener=void 0),this._offlineListener&&(v.removeEventListener("offline",this._offlineListener),this._offlineListener=void 0)),this._queue))try{this._instance._send_request(h({},e,{transport:"sendBeacon"}))}catch(e){Re.error(e)}this._queue=[]}}class Ws{constructor(e){this._updateScrollData=()=>{var e,t,n,r
this._context||(this._context={})
var i=this.scrollElement(),s=this.scrollY(),o=i?Math.max(0,i.scrollHeight-i.clientHeight):0,a=s+((null==i?void 0:i.clientHeight)||0),l=(null==i?void 0:i.scrollHeight)||0
this._context.lastScrollY=Math.ceil(s),this._context.maxScrollY=Math.max(s,null!==(e=this._context.maxScrollY)&&void 0!==e?e:0),this._context.maxScrollHeight=Math.max(o,null!==(t=this._context.maxScrollHeight)&&void 0!==t?t:0),this._context.lastContentY=a,this._context.maxContentY=Math.max(a,null!==(n=this._context.maxContentY)&&void 0!==n?n:0),this._context.maxContentHeight=Math.max(l,null!==(r=this._context.maxContentHeight)&&void 0!==r?r:0)},this._instance=e}getContext(){return this._context}resetContext(){var e=this._context
return setTimeout(this._updateScrollData,0),e}startMeasuringScrollPosition(){Ke(v,"scroll",this._updateScrollData,{capture:!0}),Ke(v,"scrollend",this._updateScrollData,{capture:!0}),Ke(v,"resize",this._updateScrollData)}scrollElement(){if(!this._instance.config.scroll_root_selector)return null==v?void 0:v.document.documentElement
var e=D(this._instance.config.scroll_root_selector)?this._instance.config.scroll_root_selector:[this._instance.config.scroll_root_selector]
for(var t of e){var n=null==v?void 0:v.document.querySelector(t)
if(n)return n}}scrollY(){if(this._instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollTop||0}return v&&(v.scrollY||v.pageYOffset||v.document.documentElement.scrollTop)||0}scrollX(){if(this._instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollLeft||0}return v&&(v.scrollX||v.pageXOffset||v.document.documentElement.scrollLeft)||0}}var zs=e=>ci(null==e?void 0:e.config.mask_personal_data_properties,null==e?void 0:e.config.custom_personal_data_properties)
class Vs{constructor(e,t,n,r){this._onSessionIdCallback=e=>{var t=this._getStored()
if(!t||t.sessionId!==e){var n={sessionId:e,props:this._sessionSourceParamGenerator(this._instance)}
this._persistence.register({[bt]:n})}},this._instance=e,this._sessionIdManager=t,this._persistence=n,this._sessionSourceParamGenerator=r||zs,this._sessionIdManager.onSessionId(this._onSessionIdCallback)}_getStored(){return this._persistence.props[bt]}getSetOnceProps(){var e,t=null==(e=this._getStored())?void 0:e.props
return t?"r"in t?ui(t):{$referring_domain:t.referringDomain,$pathname:t.initialPathName,utm_source:t.utm_source,utm_campaign:t.utm_campaign,utm_medium:t.utm_medium,utm_content:t.utm_content,utm_term:t.utm_term}:{}}getSessionProps(){var e={}
return De(We(this.getSetOnceProps()),(t,n)=>{"$current_url"===n&&(n="url"),e["$session_entry_"+M(n)]=t}),e}}var Qs=je("[SessionId]")
class Ks{on(e,t){return this._eventEmitter.on(e,t)}constructor(e,t,n){var r
if(this._sessionIdChangedHandlers=[],this._beforeUnloadListener=void 0,this._eventEmitter=new Cs,this._sessionHasBeenIdleTooLong=(e,t)=>Math.abs(e-t)>this.sessionTimeoutMs,!e.persistence)throw new Error("SessionIdManager requires a PostHogPersistence instance")
if("always"===e.config.cookieless_mode)throw new Error('SessionIdManager cannot be used with cookieless_mode="always"')
this._config=e.config,this._persistence=e.persistence,this._windowId=void 0,this._sessionId=void 0,this._sessionStartTimestamp=null,this._sessionActivityTimestamp=null,this._sessionIdGenerator=t||Sn,this._windowIdGenerator=n||Sn
var i=this._config.persistence_name||this._config.token,s=this._config.session_idle_timeout_seconds||1800
if(this._sessionTimeoutMs=1e3*re(s,60,36e3,Qs.createLogger("session_idle_timeout_seconds"),1800),e.register({$configured_session_timeout_ms:this._sessionTimeoutMs}),this._resetIdleTimer(),this._window_id_storage_key="ph_"+i+"_window_id",this._primary_window_exists_storage_key="ph_"+i+"_primary_window_exists",this._canUseSessionStorage()){var o=jn._parse(this._window_id_storage_key),a=jn._parse(this._primary_window_exists_storage_key)
o&&!a?this._windowId=o:jn._remove(this._window_id_storage_key),jn._set(this._primary_window_exists_storage_key,!0)}if(null!=(r=this._config.bootstrap)&&r.sessionID)try{var l=(()=>{var e=this._config.bootstrap.sessionID.replace(/-/g,"")
if(32!==e.length)throw new Error("Not a valid UUID")
if("7"!==e[12])throw new Error("Not a UUIDv7")
return parseInt(e.substring(0,12),16)})()
this._setSessionId(this._config.bootstrap.sessionID,(new Date).getTime(),l)}catch(e){Qs.error("Invalid sessionID in bootstrap",e)}this._listenToReloadWindow()}get sessionTimeoutMs(){return this._sessionTimeoutMs}onSessionId(e){return U(this._sessionIdChangedHandlers)&&(this._sessionIdChangedHandlers=[]),this._sessionIdChangedHandlers.push(e),this._sessionId&&e(this._sessionId,this._windowId),()=>{this._sessionIdChangedHandlers=this._sessionIdChangedHandlers.filter(t=>t!==e)}}_canUseSessionStorage(){return"memory"!==this._config.persistence&&!this._persistence._disabled&&jn._is_supported()}_setWindowId(e){e!==this._windowId&&(this._windowId=e,this._canUseSessionStorage()&&jn._set(this._window_id_storage_key,e))}_getWindowId(){return this._windowId?this._windowId:this._canUseSessionStorage()?jn._parse(this._window_id_storage_key):null}_setSessionId(e,t,n){e===this._sessionId&&t===this._sessionActivityTimestamp&&n===this._sessionStartTimestamp||(this._sessionStartTimestamp=n,this._sessionActivityTimestamp=t,this._sessionId=e,this._persistence.register({[lt]:[t,e,n]}))}_getSessionId(){if(this._sessionId&&this._sessionActivityTimestamp&&this._sessionStartTimestamp)return[this._sessionActivityTimestamp,this._sessionId,this._sessionStartTimestamp]
var e=this._persistence.props[lt]
return D(e)&&2===e.length&&e.push(e[0]),e||[0,null,0]}resetSessionId(){this._setSessionId(null,null,null)}destroy(){clearTimeout(this._enforceIdleTimeout),this._enforceIdleTimeout=void 0,this._beforeUnloadListener&&v&&(v.removeEventListener("beforeunload",this._beforeUnloadListener,{capture:!1}),this._beforeUnloadListener=void 0),this._sessionIdChangedHandlers=[]}_listenToReloadWindow(){this._beforeUnloadListener=()=>{this._canUseSessionStorage()&&jn._remove(this._primary_window_exists_storage_key)},Ke(v,"beforeunload",this._beforeUnloadListener,{capture:!1})}checkAndGetSessionAndWindowId(e,t){if(void 0===e&&(e=!1),void 0===t&&(t=null),"always"===this._config.cookieless_mode)throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"')
var n=t||(new Date).getTime(),[r,i,s]=this._getSessionId(),o=this._getWindowId(),a=Q(s)&&s>0&&Math.abs(n-s)>864e5,l=!1,c=!i,u=!e&&this._sessionHasBeenIdleTooLong(n,r)
c||u||a?(i=this._sessionIdGenerator(),o=this._windowIdGenerator(),Qs.info("new session ID generated",{sessionId:i,windowId:o,changeReason:{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}}),s=n,l=!0):o||(o=this._windowIdGenerator(),l=!0)
var d=0===r||!e||a?n:r,f=0===s?(new Date).getTime():s
return this._setWindowId(o),this._setSessionId(i,d,f),e||this._resetIdleTimer(),l&&this._sessionIdChangedHandlers.forEach(e=>e(i,o,l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0)),{sessionId:i,windowId:o,sessionStartTimestamp:f,changeReason:l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0,lastActivityTimestamp:r}}_resetIdleTimer(){clearTimeout(this._enforceIdleTimeout),this._enforceIdleTimeout=setTimeout(()=>{var[e]=this._getSessionId()
if(this._sessionHasBeenIdleTooLong((new Date).getTime(),e)){var t=this._sessionId
this.resetSessionId(),this._eventEmitter.emit("forcedIdleReset",{idleSessionId:t})}},1.1*this.sessionTimeoutMs)}}var Js=["$set_once","$set"],Ys=je("[SiteApps]")
class Xs{constructor(e){this._instance=e,this._bufferedInvocations=[],this.apps={}}get isEnabled(){return!!this._instance.config.opt_in_site_apps}_eventCollector(e,t){if(t){var n=this.globalsForEvent(t)
this._bufferedInvocations.push(n),this._bufferedInvocations.length>1e3&&(this._bufferedInvocations=this._bufferedInvocations.slice(10))}}get siteAppLoaders(){var e
return null==(e=L._POSTHOG_REMOTE_CONFIG)||null==(e=e[this._instance.config.token])?void 0:e.siteApps}init(){if(this.isEnabled){var e=this._instance._addCaptureHook(this._eventCollector.bind(this))
this._stopBuffering=()=>{e(),this._bufferedInvocations=[],this._stopBuffering=void 0}}}globalsForEvent(e){var t,n,r,i,s,o,a
if(!e)throw new Error("Event payload is required")
var l={},c=this._instance.get_property("$groups")||[],u=this._instance.get_property("$stored_group_properties")||{}
for(var[d,f]of Object.entries(u))l[d]={id:c[d],type:d,properties:f}
var{$set_once:p,$set:v}=e
return{event:h({},g(e,Js),{properties:h({},e.properties,v?{$set:h({},null!==(t=null==(n=e.properties)?void 0:n.$set)&&void 0!==t?t:{},v)}:{},p?{$set_once:h({},null!==(r=null==(i=e.properties)?void 0:i.$set_once)&&void 0!==r?r:{},p)}:{}),elements_chain:null!==(s=null==(o=e.properties)?void 0:o.$elements_chain)&&void 0!==s?s:"",distinct_id:null==(a=e.properties)?void 0:a.distinct_id}),person:{properties:this._instance.get_property("$stored_person_properties")},groups:l}}setupSiteApp(e){var t=this.apps[e.id],n=()=>{var n
!t.errored&&this._bufferedInvocations.length&&(Ys.info("Processing "+this._bufferedInvocations.length+" events for site app with id "+e.id),this._bufferedInvocations.forEach(e=>null==t.processEvent?void 0:t.processEvent(e)),t.processedBuffer=!0),Object.values(this.apps).every(e=>e.processedBuffer||e.errored)&&(null==(n=this._stopBuffering)||n.call(this))},r=!1,i=i=>{t.errored=!i,t.loaded=!0,Ys.info("Site app with id "+e.id+" "+(i?"loaded":"errored")),r&&n()}
try{var{processEvent:s}=e.init({posthog:this._instance,callback:e=>{i(e)}})
s&&(t.processEvent=s),r=!0}catch(t){Ys.error("Error while initializing PostHog app with config id "+e.id,t),i(!1)}if(r&&t.loaded)try{n()}catch(n){Ys.error("Error while processing buffered events PostHog app with config id "+e.id,n),t.errored=!0}}_setupSiteApps(){var e=this.siteAppLoaders||[]
for(var t of e)this.apps[t.id]={id:t.id,loaded:!1,errored:!1,processedBuffer:!1}
for(var n of e)this.setupSiteApp(n)}_onCapturedEvent(e){if(0!==Object.keys(this.apps).length){var t=this.globalsForEvent(e)
for(var n of Object.values(this.apps))try{null==n.processEvent||n.processEvent(t)}catch(t){Ys.error("Error while processing event "+e.event+" for site app "+n.id,t)}}}onRemoteConfig(e){var t,n,r,i=this
if(null!=(t=this.siteAppLoaders)&&t.length)return this.isEnabled?(this._setupSiteApps(),void this._instance.on("eventCaptured",e=>this._onCapturedEvent(e))):void Ys.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
if(null==(n=this._stopBuffering)||n.call(this),null!=(r=e.siteApps)&&r.length)if(this.isEnabled){var s=function(e){var t
L["__$$ph_site_app_"+e]=i._instance,null==(t=L.__PosthogExtensions__)||null==t.loadSiteApp||t.loadSiteApp(i._instance,a,t=>{if(t)return Ys.error("Error while initializing PostHog app with config id "+e,t)})}
for(var{id:o,url:a}of e.siteApps)s(o)}else Ys.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')}}var Zs=["amazonbot","amazonproductbot","app.hypefactors.com","applebot","archive.org_bot","awariobot","backlinksextendedbot","baiduspider","bingbot","bingpreview","chrome-lighthouse","dataforseobot","deepscan","duckduckbot","facebookexternal","facebookcatalog","http://yandex.com/bots","hubspot","ia_archiver","leikibot","linkedinbot","meta-externalagent","mj12bot","msnbot","nessus","petalbot","pinterest","prerender","rogerbot","screaming frog","sebot-wa","sitebulb","slackbot","slurp","trendictionbot","turnitin","twitterbot","vercel-screenshot","vercelbot","yahoo! slurp","yandexbot","zoombot","bot.htm","bot.php","(bot;","bot/","crawler","ahrefsbot","ahrefssiteaudit","semrushbot","siteauditbot","splitsignalbot","gptbot","oai-searchbot","chatgpt-user","perplexitybot","better uptime bot","sentryuptimebot","uptimerobot","headlesschrome","cypress","google-hoteladsverifier","adsbot-google","apis-google","duplexweb-google","feedfetcher-google","google favicon","google web preview","google-read-aloud","googlebot","googleother","google-cloudvertexbot","googleweblight","mediapartners-google","storebot-google","google-inspectiontool","bytespider"],eo=function(e,t){if(!e)return!1
var n=e.toLowerCase()
return Zs.concat(t||[]).some(e=>{var t=e.toLowerCase()
return-1!==n.indexOf(t)})},to=function(e,t){if(!e)return!1
var n=e.userAgent
if(n&&eo(n,t))return!0
try{var r=null==e?void 0:e.userAgentData
if(null!=r&&r.brands&&r.brands.some(e=>eo(null==e?void 0:e.brand,t)))return!0}catch(e){}return!!e.webdriver},no=function(e){return e.US="us",e.EU="eu",e.CUSTOM="custom",e}({}),ro="i.posthog.com"
class io{constructor(e){this._regionCache={},this.instance=e}get apiHost(){var e=this.instance.config.api_host.trim().replace(/\/$/,"")
return"https://app.posthog.com"===e?"https://us.i.posthog.com":e}get uiHost(){var e,t=null==(e=this.instance.config.ui_host)?void 0:e.replace(/\/$/,"")
return t||(t=this.apiHost.replace("."+ro,".posthog.com")),"https://app.posthog.com"===t?"https://us.posthog.com":t}get region(){return this._regionCache[this.apiHost]||(/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=no.US:/https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=no.EU:this._regionCache[this.apiHost]=no.CUSTOM),this._regionCache[this.apiHost]}endpointFor(e,t){if(void 0===t&&(t=""),t&&(t="/"===t[0]?t:"/"+t),"ui"===e)return this.uiHost+t
if(this.region===no.CUSTOM)return this.apiHost+t
var n=ro+t
switch(e){case"assets":return"https://"+this.region+"-assets."+n
case"api":return"https://"+this.region+"."+n}}}var so={icontains:(e,t)=>!!v&&t.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:(e,t)=>!!v&&-1===t.href.toLowerCase().indexOf(e.toLowerCase()),regex:(e,t)=>!!v&&os(t.href,e),not_regex:(e,t)=>!!v&&!os(t.href,e),exact:(e,t)=>t.href===e,is_not:(e,t)=>t.href!==e}
class oo{constructor(e){var t=this
this.getWebExperimentsAndEvaluateDisplayLogic=function(e){void 0===e&&(e=!1),t.getWebExperiments(e=>{oo._logInfo("retrieved web experiments from the server"),t._flagToExperiments=new Map,e.forEach(e=>{if(e.feature_flag_key){var n
t._flagToExperiments&&(oo._logInfo("setting flag key ",e.feature_flag_key," to web experiment ",e),null==(n=t._flagToExperiments)||n.set(e.feature_flag_key,e))
var r=t._instance.getFeatureFlag(e.feature_flag_key)
G(r)&&e.variants[r]&&t._applyTransforms(e.name,r,e.variants[r].transforms)}else if(e.variants)for(var i in e.variants){var s=e.variants[i]
oo._matchesTestVariant(s)&&t._applyTransforms(e.name,i,s.transforms)}})},e)},this._instance=e,this._instance.onFeatureFlags(e=>{this.onFeatureFlags(e)})}onFeatureFlags(e){if(this._is_bot())oo._logInfo("Refusing to render web experiment since the viewer is a likely bot")
else if(!this._instance.config.disable_web_experiments){if(V(this._flagToExperiments))return this._flagToExperiments=new Map,this.loadIfEnabled(),void this.previewWebExperiment()
oo._logInfo("applying feature flags",e),e.forEach(e=>{var t
if(this._flagToExperiments&&null!=(t=this._flagToExperiments)&&t.has(e)){var n,r=this._instance.getFeatureFlag(e),i=null==(n=this._flagToExperiments)?void 0:n.get(e)
r&&null!=i&&i.variants[r]&&this._applyTransforms(i.name,r,i.variants[r].transforms)}})}}previewWebExperiment(){var e=oo.getWindowLocation()
if(null!=e&&e.search){var t=un(null==e?void 0:e.search,"__experiment_id"),n=un(null==e?void 0:e.search,"__experiment_variant")
t&&n&&(oo._logInfo("previewing web experiments "+t+" && "+n),this.getWebExperiments(e=>{this._showPreviewWebExperiment(parseInt(t),n,e)},!1,!0))}}loadIfEnabled(){this._instance.config.disable_web_experiments||this.getWebExperimentsAndEvaluateDisplayLogic()}getWebExperiments(e,t,n){if(this._instance.config.disable_web_experiments&&!n)return e([])
var r=this._instance.get_property("$web_experiments")
if(r&&!t)return e(r)
this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/web_experiments/?token="+this._instance.config.token),method:"GET",callback:t=>{if(200!==t.statusCode||!t.json)return e([])
var n=t.json.experiments||[]
return e(n)}})}_showPreviewWebExperiment(e,t,n){var r=n.filter(t=>t.id===e)
r&&r.length>0&&(oo._logInfo("Previewing web experiment ["+r[0].name+"] with variant ["+t+"]"),this._applyTransforms(r[0].name,t,r[0].variants[t].transforms))}static _matchesTestVariant(e){return!V(e.conditions)&&oo._matchUrlConditions(e)&&oo._matchUTMConditions(e)}static _matchUrlConditions(e){var t
if(V(e.conditions)||V(null==(t=e.conditions)?void 0:t.url))return!0
var n,r,i,s=oo.getWindowLocation()
return!!s&&(null==(n=e.conditions)||!n.url||so[null!==(r=null==(i=e.conditions)?void 0:i.urlMatchType)&&void 0!==r?r:"icontains"](e.conditions.url,s))}static getWindowLocation(){return null==v?void 0:v.location}static _matchUTMConditions(e){var t
if(V(e.conditions)||V(null==(t=e.conditions)?void 0:t.utm))return!0
var n=ii()
if(n.utm_source){var r,i,s,o,a,l,c,u,d=null==(r=e.conditions)||null==(r=r.utm)||!r.utm_campaign||(null==(i=e.conditions)||null==(i=i.utm)?void 0:i.utm_campaign)==n.utm_campaign,f=null==(s=e.conditions)||null==(s=s.utm)||!s.utm_source||(null==(o=e.conditions)||null==(o=o.utm)?void 0:o.utm_source)==n.utm_source,p=null==(a=e.conditions)||null==(a=a.utm)||!a.utm_medium||(null==(l=e.conditions)||null==(l=l.utm)?void 0:l.utm_medium)==n.utm_medium,h=null==(c=e.conditions)||null==(c=c.utm)||!c.utm_term||(null==(u=e.conditions)||null==(u=u.utm)?void 0:u.utm_term)==n.utm_term
return d&&p&&h&&f}return!1}static _logInfo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
Re.info("[WebExperiments] "+e,n)}_applyTransforms(e,t,n){this._is_bot()?oo._logInfo("Refusing to render web experiment since the viewer is a likely bot"):"control"!==t?n.forEach(n=>{if(n.selector){var r
oo._logInfo("applying transform of variant "+t+" for experiment "+e+" ",n)
var i=null==(r=document)?void 0:r.querySelectorAll(n.selector)
null==i||i.forEach(e=>{var t=e
n.html&&(t.innerHTML=n.html),n.css&&t.setAttribute("style",n.css)})}}):oo._logInfo("Control variants leave the page unmodified.")}_is_bot(){return w&&this._instance?to(w,this._instance.config.custom_blocked_useragents):void 0}}var ao=je("[PostHog ExternalIntegrations]"),lo={intercom:"intercom-integration",crispChat:"crisp-chat-integration"}
class co{constructor(e){this._instance=e}_loadScript(e,t){var n
null==(n=L.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,e,e=>{if(e)return ao.error("failed to load script",e)
t()})}startIfEnabledOrStop(){var e=this,t=function(t){var n,i,s
!r||null!=(n=L.__PosthogExtensions__)&&null!=(n=n.integrations)&&n[t]||e._loadScript(lo[t],()=>{var n
null==(n=L.__PosthogExtensions__)||null==(n=n.integrations)||null==(n=n[t])||n.start(e._instance)}),!r&&null!=(i=L.__PosthogExtensions__)&&null!=(i=i.integrations)&&i[t]&&(null==(s=L.__PosthogExtensions__)||null==(s=s.integrations)||null==(s=s[t])||s.stop())}
for(var[n,r]of Object.entries(null!==(i=this._instance.config.integrations)&&void 0!==i?i:{})){var i
t(n)}}}var uo="[SessionRecording]",fo=je(uo)
class po{get started(){var e
return!(null==(e=this._lazyLoadedSessionRecording)||!e.isStarted)}get status(){return this._lazyLoadedSessionRecording?this._lazyLoadedSessionRecording.status:this._receivedFlags&&!this._isRecordingEnabled?"disabled":"lazy_loading"}constructor(e){if(this._forceAllowLocalhostNetworkCapture=!1,this._receivedFlags=!1,this._persistFlagsOnSessionListener=void 0,this._instance=e,!this._instance.sessionManager)throw fo.error("started without valid sessionManager"),new Error(uo+" started without valid sessionManager. This is a bug.")
if("always"===this._instance.config.cookieless_mode)throw new Error(uo+' cannot be used with cookieless_mode="always"')}get _isRecordingEnabled(){var e,t=!(null==(e=this._instance.get_property(at))||!e.enabled),n=!this._instance.config.disable_session_recording,r=this._instance.config.disable_session_recording||this._instance.consent.isOptedOut()
return v&&t&&n&&!r}startIfEnabledOrStop(e){var t
if(!this._isRecordingEnabled||null==(t=this._lazyLoadedSessionRecording)||!t.isStarted){var n=!U(Object.assign)&&!U(Array.from)
this._isRecordingEnabled&&n?(this._lazyLoadAndStart(e),fo.info("starting")):this.stopRecording()}}_lazyLoadAndStart(e){var t,n,r
this._isRecordingEnabled&&(null!=L&&null!=(t=L.__PosthogExtensions__)&&null!=(t=t.rrweb)&&t.record&&null!=(n=L.__PosthogExtensions__)&&n.initSessionRecording?this._onScriptLoaded(e):null==(r=L.__PosthogExtensions__)||null==r.loadExternalDependency||r.loadExternalDependency(this._instance,this._scriptName,t=>{if(t)return fo.error("could not load recorder",t)
this._onScriptLoaded(e)}))}stopRecording(){var e,t
null==(e=this._persistFlagsOnSessionListener)||e.call(this),this._persistFlagsOnSessionListener=void 0,null==(t=this._lazyLoadedSessionRecording)||t.stop()}_resetSampling(){var e
null==(e=this._instance.persistence)||e.unregister(ct)}_persistRemoteConfig(e){if(this._instance.persistence){var t,n,r=this._instance.persistence,i=()=>{var t=!1===e.sessionRecording?void 0:e.sessionRecording,n=null==t?void 0:t.sampleRate,i=V(n)?null:parseFloat(n)
V(i)&&this._resetSampling()
var s=null==t?void 0:t.minimumDurationMilliseconds
r.register({[at]:h({enabled:!!t},t,{networkPayloadCapture:h({capturePerformance:e.capturePerformance},null==t?void 0:t.networkPayloadCapture),canvasRecording:{enabled:null==t?void 0:t.recordCanvas,fps:null==t?void 0:t.canvasFps,quality:null==t?void 0:t.canvasQuality},sampleRate:i,minimumDurationMilliseconds:U(s)?null:s,endpoint:null==t?void 0:t.endpoint,triggerMatchType:null==t?void 0:t.triggerMatchType,masking:null==t?void 0:t.masking,urlTriggers:null==t?void 0:t.urlTriggers})})}
i(),null==(t=this._persistFlagsOnSessionListener)||t.call(this),this._persistFlagsOnSessionListener=null==(n=this._instance.sessionManager)?void 0:n.onSessionId(i)}}onRemoteConfig(e){"sessionRecording"in e?!1!==e.sessionRecording?(this._persistRemoteConfig(e),this._receivedFlags=!0,this.startIfEnabledOrStop()):this._receivedFlags=!0:fo.info("skipping remote config with no sessionRecording",e)}log(e,t){var n
void 0===t&&(t="log"),null!=(n=this._lazyLoadedSessionRecording)&&n.log?this._lazyLoadedSessionRecording.log(e,t):fo.warn("log called before recorder was ready")}get _scriptName(){var e,t,n=null==(e=this._instance)||null==(e=e.persistence)?void 0:e.get_property(at)
return(null==n||null==(t=n.scriptConfig)?void 0:t.script)||"lazy-recorder"}_onScriptLoaded(e){var t,n
if(null==(t=L.__PosthogExtensions__)||!t.initSessionRecording)throw Error("Called on script loaded before session recording is available")
this._lazyLoadedSessionRecording||(this._lazyLoadedSessionRecording=null==(n=L.__PosthogExtensions__)?void 0:n.initSessionRecording(this._instance),this._lazyLoadedSessionRecording._forceAllowLocalhostNetworkCapture=this._forceAllowLocalhostNetworkCapture),this._lazyLoadedSessionRecording.start(e)}onRRwebEmit(e){var t
null==(t=this._lazyLoadedSessionRecording)||null==t.onRRwebEmit||t.onRRwebEmit(e)}overrideLinkedFlag(){var e
null==(e=this._lazyLoadedSessionRecording)||e.overrideLinkedFlag()}overrideSampling(){var e
null==(e=this._lazyLoadedSessionRecording)||e.overrideSampling()}overrideTrigger(e){var t
null==(t=this._lazyLoadedSessionRecording)||t.overrideTrigger(e)}get sdkDebugProperties(){var e
return(null==(e=this._lazyLoadedSessionRecording)?void 0:e.sdkDebugProperties)||{$recording_status:this.status}}tryAddCustomEvent(e,t){var n
return!(null==(n=this._lazyLoadedSessionRecording)||!n.tryAddCustomEvent(e,t))}}var ho={},go=()=>{},vo="posthog",_o=!es&&-1===(null==C?void 0:C.indexOf("MSIE"))&&-1===(null==C?void 0:C.indexOf("Mozilla")),mo=e=>{var t
return{api_host:"https://us.i.posthog.com",ui_host:null,token:"",autocapture:!0,rageclick:!0,cross_subdomain_cookie:Ve(null==k?void 0:k.location),persistence:"localStorage+cookie",persistence_name:"",loaded:go,save_campaign_params:!0,custom_campaign_params:[],custom_blocked_useragents:[],save_referrer:!0,capture_pageview:"2025-05-24"!==e||"history_change",capture_pageleave:"if_capture_pageview",defaults:null!=e?e:"unset",debug:x&&G(null==x?void 0:x.search)&&-1!==x.search.indexOf("__posthog_debug=true")||!1,cookie_expiration:365,upgrade:!1,disable_session_recording:!1,disable_persistence:!1,disable_web_experiments:!0,disable_surveys:!1,disable_surveys_automatic_display:!1,disable_external_dependency_loading:!1,enable_recording_console_log:void 0,secure_cookie:"https:"===(null==v||null==(t=v.location)?void 0:t.protocol),ip:!1,opt_out_capturing_by_default:!1,opt_out_persistence_by_default:!1,opt_out_useragent_filter:!1,opt_out_capturing_persistence_type:"localStorage",consent_persistence_name:null,opt_out_capturing_cookie_prefix:null,opt_in_site_apps:!1,property_denylist:[],respect_dnt:!1,sanitize_properties:null,request_headers:{},request_batching:!0,properties_string_max_length:65535,session_recording:{},mask_all_element_attributes:!1,mask_all_text:!1,mask_personal_data_properties:!1,custom_personal_data_properties:[],advanced_disable_flags:!1,advanced_disable_decide:!1,advanced_disable_feature_flags:!1,advanced_disable_feature_flags_on_first_load:!1,advanced_only_evaluate_survey_feature_flags:!1,advanced_enable_surveys:!1,advanced_disable_toolbar_metrics:!1,feature_flag_request_timeout_ms:3e3,surveys_request_timeout_ms:1e4,on_request_error:e=>{var t="Bad HTTP status: "+e.statusCode+" "+e.text
Re.error(t)},get_device_id:e=>e,capture_performance:void 0,name:"posthog",bootstrap:{},disable_compression:!1,session_idle_timeout_seconds:1800,person_profiles:"identified_only",before_send:void 0,request_queue_config:{flush_interval_ms:Bs},error_tracking:{},_onCapture:go,__preview_eager_load_replay:!1}},bo=e=>{var t={}
U(e.process_person)||(t.person_profiles=e.process_person),U(e.xhr_headers)||(t.request_headers=e.xhr_headers),U(e.cookie_name)||(t.persistence_name=e.cookie_name),U(e.disable_cookie)||(t.disable_persistence=e.disable_cookie),U(e.store_google)||(t.save_campaign_params=e.store_google),U(e.verbose)||(t.debug=e.verbose)
var n=qe({},t,e)
return D(e.property_blacklist)&&(U(e.property_denylist)?n.property_denylist=e.property_blacklist:D(e.property_denylist)?n.property_denylist=[...e.property_blacklist,...e.property_denylist]:Re.error("Invalid value for property_denylist config: "+e.property_denylist)),n}
class yo{constructor(){this.__forceAllowLocalhost=!1}get _forceAllowLocalhost(){return this.__forceAllowLocalhost}set _forceAllowLocalhost(e){Re.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),this.__forceAllowLocalhost=e}}class wo{get decideEndpointWasHit(){var e,t
return null!==(e=null==(t=this.featureFlags)?void 0:t.hasLoadedFlags)&&void 0!==e&&e}get flagsEndpointWasHit(){var e,t
return null!==(e=null==(t=this.featureFlags)?void 0:t.hasLoadedFlags)&&void 0!==e&&e}constructor(){this.webPerformance=new yo,this._personProcessingSetOncePropertiesSent=!1,this.version=T.LIB_VERSION,this._internalEventEmitter=new Cs,this._calculate_event_properties=this.calculateEventProperties.bind(this),this.config=mo(),this.SentryIntegration=Jn,this.sentryIntegration=e=>function(e,t){var n=Kn(e,t)
return{name:Qn,processEvent:e=>n(e)}}(this,e),this.__request_queue=[],this.__loaded=!1,this.analyticsDefaultEndpoint="/e/",this._initialPageviewCaptured=!1,this._visibilityStateListener=null,this._initialPersonProfilesConfig=null,this._cachedPersonProperties=null,this.featureFlags=new ys(this),this.toolbar=new tr(this),this.scrollManager=new Ws(this),this.pageViewManager=new yi(this),this.surveys=new js(this),this.experiments=new oo(this),this.exceptions=new ds(this),this.rateLimiter=new Ns(this),this.requestRouter=new io(this),this.consent=new Nn(this),this.externalIntegrations=new co(this),this.people={set:(e,t,n)=>{var r=G(e)?{[e]:t}:e
this.setPersonProperties(r),null==n||n({})},set_once:(e,t,n)=>{var r=G(e)?{[e]:t}:e
this.setPersonProperties(void 0,r),null==n||n({})}},this.on("eventCaptured",e=>Re.info('send "'+(null==e?void 0:e.event)+'"',e))}init(e,t,n){if(n&&n!==vo){var r,i=null!==(r=ho[n])&&void 0!==r?r:new wo
return i._init(e,t,n),ho[n]=i,ho[vo][n]=i,i}return this._init(e,t,n)}_init(e,t,n){var r,i
if(void 0===t&&(t={}),U(e)||W(e))return Re.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),this
if(this.__loaded)return console.warn("[PostHog.js]","You have already initialized PostHog! Re-initializing is a no-op"),this
this.__loaded=!0,this.config={},t.debug=this._checkLocalStorageForDebug(t.debug),this._originalUserConfig=t,this._triggered_notifs=[],t.person_profiles&&(this._initialPersonProfilesConfig=t.person_profiles),this.set_config(qe({},mo(t.defaults),bo(t),{name:n,token:e})),this.config.on_xhr_error&&Re.error("on_xhr_error is deprecated. Use on_request_error instead"),this.compression=t.disable_compression?void 0:ln.GZipJS
var s=this._is_persistence_disabled()
this.persistence=new ks(this.config,s),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new ks(h({},this.config,{persistence:"sessionStorage"}),s)
var o=h({},this.persistence.props),a=h({},this.sessionPersistence.props)
this.register({$initialization_time:(new Date).toISOString()}),this._requestQueue=new Hs(e=>this._send_retriable_request(e),this.config.request_queue_config),this._retryQueue=new Gs(this),this.__request_queue=[]
var l="always"===this.config.cookieless_mode||"on_reject"===this.config.cookieless_mode&&this.consent.isExplicitlyOptedOut()
if(l||(this.sessionManager=new Ks(this),this.sessionPropsManager=new Vs(this,this.sessionManager,this.persistence)),new rr(this).startIfEnabledOrStop(),this.siteApps=new Xs(this),null==(r=this.siteApps)||r.init(),l||(this.sessionRecording=new po(this),this.sessionRecording.startIfEnabledOrStop()),this.config.disable_scroll_properties||this.scrollManager.startMeasuringScrollPosition(),this.autocapture=new _n(this),this.autocapture.startIfEnabled(),this.surveys.loadIfEnabled(),this.heatmaps=new bi(this),this.heatmaps.startIfEnabled(),this.webVitalsAutocapture=new vi(this),this.exceptionObserver=new Gn(this),this.exceptionObserver.startIfEnabled(),this.deadClicksAutocapture=new Hn(this,Bn),this.deadClicksAutocapture.startIfEnabled(),this.historyAutocapture=new zn(this),this.historyAutocapture.startIfEnabled(),T.DEBUG=T.DEBUG||this.config.debug,T.DEBUG&&Re.info("Starting in debug mode",{this:this,config:t,thisC:h({},this.config),p:o,s:a}),void 0!==(null==(i=t.bootstrap)?void 0:i.distinctID)){var c,u,d=this.config.get_device_id(Sn()),f=null!=(c=t.bootstrap)&&c.isIdentifiedID?d:t.bootstrap.distinctID
this.persistence.set_property(mt,null!=(u=t.bootstrap)&&u.isIdentifiedID?"identified":"anonymous"),this.register({distinct_id:t.bootstrap.distinctID,$device_id:f})}if(this._hasBootstrappedFeatureFlags()){var p,g,_=Object.keys((null==(p=t.bootstrap)?void 0:p.featureFlags)||{}).filter(e=>{var n
return!(null==(n=t.bootstrap)||null==(n=n.featureFlags)||!n[e])}).reduce((e,n)=>{var r
return e[n]=(null==(r=t.bootstrap)||null==(r=r.featureFlags)?void 0:r[n])||!1,e},{}),m=Object.keys((null==(g=t.bootstrap)?void 0:g.featureFlagPayloads)||{}).filter(e=>_[e]).reduce((e,n)=>{var r,i
return null!=(r=t.bootstrap)&&null!=(r=r.featureFlagPayloads)&&r[n]&&(e[n]=null==(i=t.bootstrap)||null==(i=i.featureFlagPayloads)?void 0:i[n]),e},{})
this.featureFlags.receivedFeatureFlags({featureFlags:_,featureFlagPayloads:m})}if(l)this.register_once({distinct_id:Pt,$device_id:null},"")
else if(!this.get_distinct_id()){var b=this.config.get_device_id(Sn())
this.register_once({distinct_id:b,$device_id:b},""),this.persistence.set_property(mt,"anonymous")}return Ke(v,"onpagehide"in self?"pagehide":"unload",this._handle_unload.bind(this),{passive:!1}),this.toolbar.maybeLoadToolbar(),t.segment?function(e,t){var n=e.config.segment
if(!n)return t()
!function(e,t){var n=e.config.segment
if(!n)return t()
var r=n=>{var r=()=>n.anonymousId()||Sn()
e.config.get_device_id=r,n.id()&&(e.register({distinct_id:n.id(),$device_id:r()}),e.persistence.set_property(mt,"identified")),t()},i=n.user()
"then"in i&&q(i.then)?i.then(e=>r(e)):r(i)}(e,()=>{n.register((e=>{Promise&&Promise.resolve||Vn.warn("This browser does not have Promise support, and can not use the segment integration")
var t=(t,n)=>{if(!n)return t
t.event.userId||t.event.anonymousId===e.get_distinct_id()||(Vn.info("No userId set, resetting PostHog"),e.reset()),t.event.userId&&t.event.userId!==e.get_distinct_id()&&(Vn.info("UserId set, identifying with PostHog"),e.identify(t.event.userId))
var r=e.calculateEventProperties(n,t.event.properties)
return t.event.properties=Object.assign({},r,t.event.properties),t}
return{name:"PostHog JS",type:"enrichment",version:"1.0.0",isLoaded:()=>!0,load:()=>Promise.resolve(),track:e=>t(e,e.event.event),page:e=>t(e,"$pageview"),identify:e=>t(e,"$identify"),screen:e=>t(e,"$screen")}})(e)).then(()=>{t()})})}(this,()=>this._loaded()):this._loaded(),q(this.config._onCapture)&&this.config._onCapture!==go&&(Re.warn("onCapture is deprecated. Please use `before_send` instead"),this.on("eventCaptured",e=>this.config._onCapture(e.event,e))),this.config.ip&&Re.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'),this}_onRemoteConfig(e){var t,n,r,i,s,o,a,l
if(!k||!k.body)return Re.info("document not ready yet, trying again in 500 milliseconds..."),void setTimeout(()=>{this._onRemoteConfig(e)},500)
this.compression=void 0,e.supportedCompression&&!this.config.disable_compression&&(this.compression=I(e.supportedCompression,ln.GZipJS)?ln.GZipJS:I(e.supportedCompression,ln.Base64)?ln.Base64:void 0),null!=(t=e.analytics)&&t.endpoint&&(this.analyticsDefaultEndpoint=e.analytics.endpoint),this.set_config({person_profiles:this._initialPersonProfilesConfig?this._initialPersonProfilesConfig:"identified_only"}),null==(n=this.siteApps)||n.onRemoteConfig(e),null==(r=this.sessionRecording)||r.onRemoteConfig(e),null==(i=this.autocapture)||i.onRemoteConfig(e),null==(s=this.heatmaps)||s.onRemoteConfig(e),this.surveys.onRemoteConfig(e),null==(o=this.webVitalsAutocapture)||o.onRemoteConfig(e),null==(a=this.exceptionObserver)||a.onRemoteConfig(e),this.exceptions.onRemoteConfig(e),null==(l=this.deadClicksAutocapture)||l.onRemoteConfig(e)}_loaded(){try{this.config.loaded(this)}catch(e){Re.critical("`loaded` function failed",e)}this._start_queue_if_opted_in(),this.config.capture_pageview&&setTimeout(()=>{(this.consent.isOptedIn()||"always"===this.config.cookieless_mode)&&this._captureInitialPageview()},1),new qs(this).load(),this.featureFlags.flags()}_start_queue_if_opted_in(){var e
this.is_capturing()&&this.config.request_batching&&(null==(e=this._requestQueue)||e.enable())}_dom_loaded(){this.is_capturing()&&Ne(this.__request_queue,e=>this._send_retriable_request(e)),this.__request_queue=[],this._start_queue_if_opted_in()}_handle_unload(){var e,t
this.config.request_batching?(this._shouldCapturePageleave()&&this.capture("$pageleave"),null==(e=this._requestQueue)||e.unload(),null==(t=this._retryQueue)||t.unload()):this._shouldCapturePageleave()&&this.capture("$pageleave",null,{transport:"sendBeacon"})}_send_request(e){this.__loaded&&(_o?this.__request_queue.push(e):this.rateLimiter.isServerRateLimited(e.batchKey)||(e.transport=e.transport||this.config.api_transport,e.url=ns(e.url,{ip:this.config.ip?1:0}),e.headers=h({},this.config.request_headers),e.compression="best-available"===e.compression?this.compression:e.compression,e.disableXHRCredentials=this.config.__preview_disable_xhr_credentials,this.config.__preview_disable_beacon&&(e.disableTransport=["sendBeacon"]),e.fetchOptions=e.fetchOptions||this.config.fetch_options,(e=>{var t,n,r,i=h({},e)
i.timeout=i.timeout||6e4,i.url=ns(i.url,{_:(new Date).getTime().toString(),ver:T.LIB_VERSION,compression:i.compression})
var s=null!==(t=i.transport)&&void 0!==t?t:"fetch",o=ss.filter(e=>!i.disableTransport||!e.transport||!i.disableTransport.includes(e.transport)),a=null!==(n=null==(r=Qe(o,e=>e.transport===s))?void 0:r.method)&&void 0!==n?n:o[0].method
if(!a)throw new Error("No available transport method")
a(i)})(h({},e,{callback:t=>{var n,r
this.rateLimiter.checkForLimiting(t),t.statusCode>=400&&(null==(n=(r=this.config).on_request_error)||n.call(r,t)),null==e.callback||e.callback(t)}}))))}_send_retriable_request(e){this._retryQueue?this._retryQueue.retriableRequest(e):this._send_request(e)}_execute_array(e){var t,n=[],r=[],i=[]
Ne(e,e=>{e&&(t=e[0],D(t)?i.push(e):q(e)?e.call(this):D(e)&&"alias"===t?n.push(e):D(e)&&-1!==t.indexOf("capture")&&q(this[t])?i.push(e):r.push(e))})
var s=function(e,t){Ne(e,function(e){if(D(e[0])){var n=t
De(e,function(e){n=n[e[0]].apply(n,e.slice(1))})}else this[e[0]].apply(this,e.slice(1))},t)}
s(n,this),s(r,this),s(i,this)}_hasBootstrappedFeatureFlags(){var e,t
return(null==(e=this.config.bootstrap)?void 0:e.featureFlags)&&Object.keys(null==(t=this.config.bootstrap)?void 0:t.featureFlags).length>0||!1}push(e){this._execute_array([e])}capture(e,t,n){var r
if(this.__loaded&&this.persistence&&this.sessionPersistence&&this._requestQueue){if(this.is_capturing())if(!U(e)&&G(e)){if(this.config.opt_out_useragent_filter||!this._is_bot()){var i=null!=n&&n.skip_client_rate_limiting?void 0:this.rateLimiter.clientRateLimitContext()
if(null==i||!i.isRateLimited){null!=t&&t.$current_url&&!G(null==t?void 0:t.$current_url)&&(Re.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."),null==t||delete t.$current_url),this.sessionPersistence.update_search_keyword(),this.config.save_campaign_params&&this.sessionPersistence.update_campaign_params(),this.config.save_referrer&&this.sessionPersistence.update_referrer_info(),(this.config.save_campaign_params||this.config.save_referrer)&&this.persistence.set_initial_person_info()
var s=new Date,o=(null==n?void 0:n.timestamp)||s,a=Sn(),l={uuid:a,event:e,properties:this.calculateEventProperties(e,t||{},o,a)}
i&&(l.properties.$lib_rate_limit_remaining_tokens=i.remainingTokens),(null==n?void 0:n.$set)&&(l.$set=null==n?void 0:n.$set)
var c,u=this._calculate_set_once_properties(null==n?void 0:n.$set_once)
if(u&&(l.$set_once=u),(l=function(e,t){return n=e,r=e=>G(e)&&!z(t)?e.slice(0,t):e,i=new Set,function e(t,n){return t!==Object(t)?r?r(t):t:i.has(t)?void 0:(i.add(t),D(t)?(s=[],Ne(t,t=>{s.push(e(t))})):(s={},De(t,(t,n)=>{i.has(t)||(s[n]=e(t,n))})),s)
var s}(n)
var n,r,i}(l,null!=n&&n._noTruncate?null:this.config.properties_string_max_length)).timestamp=o,U(null==n?void 0:n.timestamp)||(l.properties.$event_time_override_provided=!0,l.properties.$event_time_override_system_time=s),e===Ss.DISMISSED||e===Ss.SENT){var d=null==t?void 0:t[Es.SURVEY_ID],f=null==t?void 0:t[Es.SURVEY_ITERATION]
c={id:d,current_iteration:f},localStorage.getItem(Is(c))||localStorage.setItem(Is(c),"true"),l.$set=h({},l.$set,{[Os({id:d,current_iteration:f},e===Ss.SENT?"responded":"dismissed")]:!0})}var p=h({},l.properties.$set,l.$set)
if(H(p)||this.setPersonPropertiesForFlags(p),!V(this.config.before_send)){var g=this._runBeforeSend(l)
if(!g)return
l=g}this._internalEventEmitter.emit("eventCaptured",l)
var v={method:"POST",url:null!==(r=null==n?void 0:n._url)&&void 0!==r?r:this.requestRouter.endpointFor("api",this.analyticsDefaultEndpoint),data:l,compression:"best-available",batchKey:null==n?void 0:n._batchKey}
return!this.config.request_batching||n&&(null==n||!n._batchKey)||null!=n&&n.send_instantly?this._send_retriable_request(v):this._requestQueue.enqueue(v),l}Re.critical("This capture call is ignored due to client rate limiting.")}}else Re.error("No event name provided to posthog.capture")}else Re.uninitializedWarning("posthog.capture")}_addCaptureHook(e){return this.on("eventCaptured",t=>e(t.event,t))}calculateEventProperties(e,t,n,r,i){if(n=n||new Date,!this.persistence||!this.sessionPersistence)return t
var s=i?void 0:this.persistence.remove_event_timer(e),o=h({},t)
if(o.token=this.config.token,o.$config_defaults=this.config.defaults,("always"==this.config.cookieless_mode||"on_reject"==this.config.cookieless_mode&&this.consent.isExplicitlyOptedOut())&&(o.$cookieless_mode=!0),"$snapshot"===e){var a=h({},this.persistence.properties(),this.sessionPersistence.properties())
return o.distinct_id=a.distinct_id,(!G(o.distinct_id)&&!Q(o.distinct_id)||W(o.distinct_id))&&Re.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),o}var l,c=pi(this.config.mask_personal_data_properties,this.config.custom_personal_data_properties)
if(this.sessionManager){var{sessionId:u,windowId:d}=this.sessionManager.checkAndGetSessionAndWindowId(i,n.getTime())
o.$session_id=u,o.$window_id=d}this.sessionPropsManager&&qe(o,this.sessionPropsManager.getSessionProps())
try{var f
this.sessionRecording&&qe(o,this.sessionRecording.sdkDebugProperties),o.$sdk_debug_retry_queue_size=null==(f=this._retryQueue)?void 0:f.length}catch(e){o.$sdk_debug_error_capturing_properties=String(e)}if(this.requestRouter.region===no.CUSTOM&&(o.$lib_custom_api_host=this.config.api_host),l="$pageview"!==e||i?"$pageleave"!==e||i?this.pageViewManager.doEvent():this.pageViewManager.doPageLeave(n):this.pageViewManager.doPageView(n,r),o=qe(o,l),"$pageview"===e&&k&&(o.title=k.title),!U(s)){var p=n.getTime()-s
o.$duration=parseFloat((p/1e3).toFixed(3))}C&&this.config.opt_out_useragent_filter&&(o.$browser_type=this._is_bot()?"bot":"browser"),(o=qe({},c,this.persistence.properties(),this.sessionPersistence.properties(),o)).$is_identified=this._isIdentified(),D(this.config.property_denylist)?De(this.config.property_denylist,function(e){delete o[e]}):Re.error("Invalid value for property_denylist config: "+this.config.property_denylist+" or property_blacklist config: "+this.config.property_blacklist)
var g=this.config.sanitize_properties
g&&(Re.error("sanitize_properties is deprecated. Use before_send instead"),o=g(o,e))
var v=this._hasPersonProcessing()
return o.$process_person_profile=v,v&&!i&&this._requirePersonProcessing("_calculate_event_properties"),o}_calculate_set_once_properties(e){var t
if(!this.persistence||!this._hasPersonProcessing())return e
if(this._personProcessingSetOncePropertiesSent)return e
var n=this.persistence.get_initial_props(),r=null==(t=this.sessionPropsManager)?void 0:t.getSetOnceProps(),i=qe({},n,r||{},e||{}),s=this.config.sanitize_properties
return s&&(Re.error("sanitize_properties is deprecated. Use before_send instead"),i=s(i,"$set_once")),this._personProcessingSetOncePropertiesSent=!0,H(i)?void 0:i}register(e,t){var n
null==(n=this.persistence)||n.register(e,t)}register_once(e,t,n){var r
null==(r=this.persistence)||r.register_once(e,t,n)}register_for_session(e){var t
null==(t=this.sessionPersistence)||t.register(e)}unregister(e){var t
null==(t=this.persistence)||t.unregister(e)}unregister_for_session(e){var t
null==(t=this.sessionPersistence)||t.unregister(e)}_register_single(e,t){this.register({[e]:t})}getFeatureFlag(e,t){return this.featureFlags.getFeatureFlag(e,t)}getFeatureFlagPayload(e){var t=this.featureFlags.getFeatureFlagPayload(e)
try{return JSON.parse(t)}catch(e){return t}}isFeatureEnabled(e,t){return this.featureFlags.isFeatureEnabled(e,t)}reloadFeatureFlags(){this.featureFlags.reloadFeatureFlags()}updateEarlyAccessFeatureEnrollment(e,t,n){this.featureFlags.updateEarlyAccessFeatureEnrollment(e,t,n)}getEarlyAccessFeatures(e,t,n){return void 0===t&&(t=!1),this.featureFlags.getEarlyAccessFeatures(e,t,n)}on(e,t){return this._internalEventEmitter.on(e,t)}onFeatureFlags(e){return this.featureFlags.onFeatureFlags(e)}onSurveysLoaded(e){return this.surveys.onSurveysLoaded(e)}onSessionId(e){var t,n
return null!==(t=null==(n=this.sessionManager)?void 0:n.onSessionId(e))&&void 0!==t?t:()=>{}}getSurveys(e,t){void 0===t&&(t=!1),this.surveys.getSurveys(e,t)}getActiveMatchingSurveys(e,t){void 0===t&&(t=!1),this.surveys.getActiveMatchingSurveys(e,t)}renderSurvey(e,t){this.surveys.renderSurvey(e,t)}displaySurvey(e,t){void 0===t&&(t=Ms),this.surveys.displaySurvey(e,t)}canRenderSurvey(e){return this.surveys.canRenderSurvey(e)}canRenderSurveyAsync(e,t){return void 0===t&&(t=!1),this.surveys.canRenderSurveyAsync(e,t)}identify(e,t,n){if(!this.__loaded||!this.persistence)return Re.uninitializedWarning("posthog.identify")
if(Q(e)&&(e=e.toString(),Re.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")),e)if(["distinct_id","distinctid"].includes(e.toLowerCase()))Re.critical('The string "'+e+'" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.')
else if(e!==Pt){if(this._requirePersonProcessing("posthog.identify")){var r=this.get_distinct_id()
if(this.register({$user_id:e}),!this.get_property("$device_id")){var i=r
this.register_once({$had_persisted_distinct_id:!0,$device_id:i},"")}e!==r&&e!==this.get_property(Ye)&&(this.unregister(Ye),this.register({distinct_id:e}))
var s="anonymous"===(this.persistence.get_property(mt)||"anonymous")
e!==r&&s?(this.persistence.set_property(mt,"identified"),this.setPersonPropertiesForFlags(h({},n||{},t||{}),!1),this.capture("$identify",{distinct_id:e,$anon_distinct_id:r},{$set:t||{},$set_once:n||{}}),this._cachedPersonProperties=as(e,t,n),this.featureFlags.setAnonymousDistinctId(r)):(t||n)&&this.setPersonProperties(t,n),e!==r&&(this.reloadFeatureFlags(),this.unregister(_t))}}else Re.critical('The string "'+Pt+'" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.')
else Re.error("Unique user id has not been set in posthog.identify")}setPersonProperties(e,t){if((e||t)&&this._requirePersonProcessing("posthog.setPersonProperties")){var n=as(this.get_distinct_id(),e,t)
this._cachedPersonProperties!==n?(this.setPersonPropertiesForFlags(h({},t||{},e||{})),this.capture("$set",{$set:e||{},$set_once:t||{}}),this._cachedPersonProperties=n):Re.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")}}group(e,t,n){if(e&&t){if(this._requirePersonProcessing("posthog.group")){var r=this.getGroups()
r[e]!==t&&this.resetGroupPropertiesForFlags(e),this.register({$groups:h({},r,{[e]:t})}),n&&(this.capture("$groupidentify",{$group_type:e,$group_key:t,$group_set:n}),this.setGroupPropertiesForFlags({[e]:n})),r[e]===t||n||this.reloadFeatureFlags()}}else Re.error("posthog.group requires a group type and group key")}resetGroups(){this.register({$groups:{}}),this.resetGroupPropertiesForFlags(),this.reloadFeatureFlags()}setPersonPropertiesForFlags(e,t){void 0===t&&(t=!0),this.featureFlags.setPersonPropertiesForFlags(e,t)}resetPersonPropertiesForFlags(){this.featureFlags.resetPersonPropertiesForFlags()}setGroupPropertiesForFlags(e,t){void 0===t&&(t=!0),this._requirePersonProcessing("posthog.setGroupPropertiesForFlags")&&this.featureFlags.setGroupPropertiesForFlags(e,t)}resetGroupPropertiesForFlags(e){this.featureFlags.resetGroupPropertiesForFlags(e)}reset(e){var t,n,r,i
if(Re.info("reset"),!this.__loaded)return Re.uninitializedWarning("posthog.reset")
var s=this.get_property("$device_id")
if(this.consent.reset(),null==(t=this.persistence)||t.clear(),null==(n=this.sessionPersistence)||n.clear(),this.surveys.reset(),this.featureFlags.reset(),null==(r=this.persistence)||r.set_property(mt,"anonymous"),null==(i=this.sessionManager)||i.resetSessionId(),this._cachedPersonProperties=null,"always"===this.config.cookieless_mode)this.register_once({distinct_id:Pt,$device_id:null},"")
else{var o=this.config.get_device_id(Sn())
this.register_once({distinct_id:o,$device_id:e?o:s},"")}this.register({$last_posthog_reset:(new Date).toISOString()},1)}get_distinct_id(){return this.get_property("distinct_id")}getGroups(){return this.get_property("$groups")||{}}get_session_id(){var e,t
return null!==(e=null==(t=this.sessionManager)?void 0:t.checkAndGetSessionAndWindowId(!0).sessionId)&&void 0!==e?e:""}get_session_replay_url(e){if(!this.sessionManager)return""
var{sessionId:t,sessionStartTimestamp:n}=this.sessionManager.checkAndGetSessionAndWindowId(!0),r=this.requestRouter.endpointFor("ui","/project/"+this.config.token+"/replay/"+t)
if(null!=e&&e.withTimestamp&&n){var i,s=null!==(i=e.timestampLookBack)&&void 0!==i?i:10
if(!n)return r
r+="?t="+Math.max(Math.floor(((new Date).getTime()-n)/1e3)-s,0)}return r}alias(e,t){return e===this.get_property(Je)?(Re.critical("Attempting to create alias for existing People user - aborting."),-2):this._requirePersonProcessing("posthog.alias")?(U(t)&&(t=this.get_distinct_id()),e!==t?(this._register_single(Ye,e),this.capture("$create_alias",{alias:e,distinct_id:t})):(Re.warn("alias matches current distinct_id - skipping api call."),this.identify(e),-1)):void 0}set_config(e){var t=h({},this.config)
if(B(e)){var n,r,i,s,o
qe(this.config,bo(e))
var a=this._is_persistence_disabled()
null==(n=this.persistence)||n.update_config(this.config,t,a),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new ks(h({},this.config,{persistence:"sessionStorage"}),a)
var l=this._checkLocalStorageForDebug(this.config.debug)
K(l)&&(this.config.debug=l),K(this.config.debug)&&(this.config.debug?(T.DEBUG=!0,Tn._is_supported()&&Tn._set("ph_debug","true"),Re.info("set_config",{config:e,oldConfig:t,newConfig:h({},this.config)})):(T.DEBUG=!1,Tn._is_supported()&&Tn._remove("ph_debug"))),null==(r=this.sessionRecording)||r.startIfEnabledOrStop(),null==(i=this.autocapture)||i.startIfEnabled(),null==(s=this.heatmaps)||s.startIfEnabled(),this.surveys.loadIfEnabled(),this._sync_opt_out_with_persistence(),null==(o=this.externalIntegrations)||o.startIfEnabledOrStop()}}startSessionRecording(e){var t,n,r,i,s,o=!0===e,a={sampling:o||!(null==e||!e.sampling),linked_flag:o||!(null==e||!e.linked_flag),url_trigger:o||!(null==e||!e.url_trigger),event_trigger:o||!(null==e||!e.event_trigger)}
Object.values(a).some(Boolean)&&(null==(t=this.sessionManager)||t.checkAndGetSessionAndWindowId(),a.sampling&&(null==(n=this.sessionRecording)||n.overrideSampling()),a.linked_flag&&(null==(r=this.sessionRecording)||r.overrideLinkedFlag()),a.url_trigger&&(null==(i=this.sessionRecording)||i.overrideTrigger("url")),a.event_trigger&&(null==(s=this.sessionRecording)||s.overrideTrigger("event")))
this.set_config({disable_session_recording:!1})}stopSessionRecording(){this.set_config({disable_session_recording:!0})}sessionRecordingStarted(){var e
return!(null==(e=this.sessionRecording)||!e.started)}captureException(e,t){var n=new Error("PostHog syntheticException"),r=this.exceptions.buildProperties(e,{handled:!0,syntheticException:n})
return this.exceptions.sendExceptionEvent(h({},r,t))}loadToolbar(e){return this.toolbar.loadToolbar(e)}get_property(e){var t
return null==(t=this.persistence)?void 0:t.props[e]}getSessionProperty(e){var t
return null==(t=this.sessionPersistence)?void 0:t.props[e]}toString(){var e,t=null!==(e=this.config.name)&&void 0!==e?e:vo
return t!==vo&&(t=vo+"."+t),t}_isIdentified(){var e,t
return"identified"===(null==(e=this.persistence)?void 0:e.get_property(mt))||"identified"===(null==(t=this.sessionPersistence)?void 0:t.get_property(mt))}_hasPersonProcessing(){var e,t
return!("never"===this.config.person_profiles||"identified_only"===this.config.person_profiles&&!this._isIdentified()&&H(this.getGroups())&&(null==(e=this.persistence)||null==(e=e.props)||!e[Ye])&&(null==(t=this.persistence)||null==(t=t.props)||!t[St]))}_shouldCapturePageleave(){return!0===this.config.capture_pageleave||"if_capture_pageview"===this.config.capture_pageleave&&(!0===this.config.capture_pageview||"history_change"===this.config.capture_pageview)}createPersonProfile(){this._hasPersonProcessing()||this._requirePersonProcessing("posthog.createPersonProfile")&&this.setPersonProperties({},{})}_requirePersonProcessing(e){return"never"===this.config.person_profiles?(Re.error(e+' was called, but process_person is set to "never". This call will be ignored.'),!1):(this._register_single(St,!0),!0)}_is_persistence_disabled(){if("always"===this.config.cookieless_mode)return!0
var e=this.consent.isOptedOut(),t=this.config.opt_out_persistence_by_default||"on_reject"===this.config.cookieless_mode
return this.config.disable_persistence||e&&!!t}_sync_opt_out_with_persistence(){var e,t,n,r,i=this._is_persistence_disabled()
return(null==(e=this.persistence)?void 0:e._disabled)!==i&&(null==(n=this.persistence)||n.set_disabled(i)),(null==(t=this.sessionPersistence)?void 0:t._disabled)!==i&&(null==(r=this.sessionPersistence)||r.set_disabled(i)),i}opt_in_capturing(e){var t,n
"always"!==this.config.cookieless_mode?("on_reject"===this.config.cookieless_mode&&this.consent.isExplicitlyOptedOut()&&(this.reset(!0),null==(t=this.sessionManager)||t.destroy(),this.sessionManager=new Ks(this),this.persistence&&(this.sessionPropsManager=new Vs(this,this.sessionManager,this.persistence)),this.sessionRecording=new po(this),this.sessionRecording.startIfEnabledOrStop()),this.consent.optInOut(!0),this._sync_opt_out_with_persistence(),this._start_queue_if_opted_in(),"on_reject"==this.config.cookieless_mode&&this.surveys.loadIfEnabled(),(U(null==e?void 0:e.captureEventName)||null!=e&&e.captureEventName)&&this.capture(null!==(n=null==e?void 0:e.captureEventName)&&void 0!==n?n:"$opt_in",null==e?void 0:e.captureProperties,{send_instantly:!0}),this.config.capture_pageview&&this._captureInitialPageview()):Re.warn('Consent opt in/out is not valid with cookieless_mode="always" and will be ignored')}opt_out_capturing(){var e,t
"always"!==this.config.cookieless_mode?("on_reject"===this.config.cookieless_mode&&this.consent.isOptedIn()&&this.reset(!0),this.consent.optInOut(!1),this._sync_opt_out_with_persistence(),"on_reject"===this.config.cookieless_mode&&(this.register({distinct_id:Pt,$device_id:null}),null==(e=this.sessionManager)||e.destroy(),this.sessionManager=void 0,this.sessionPropsManager=void 0,null==(t=this.sessionRecording)||t.stopRecording(),this.sessionRecording=void 0,this._captureInitialPageview())):Re.warn('Consent opt in/out is not valid with cookieless_mode="always" and will be ignored')}has_opted_in_capturing(){return this.consent.isOptedIn()}has_opted_out_capturing(){return this.consent.isOptedOut()}get_explicit_consent_status(){var e=this.consent.consent
return e===Fn.GRANTED?"granted":e===Fn.DENIED?"denied":"pending"}is_capturing(){return"always"===this.config.cookieless_mode||("on_reject"===this.config.cookieless_mode?this.consent.isExplicitlyOptedOut()||this.consent.isOptedIn():!this.has_opted_out_capturing())}clear_opt_in_out_capturing(){this.consent.reset(),this._sync_opt_out_with_persistence()}_is_bot(){return w?to(w,this.config.custom_blocked_useragents):void 0}_captureInitialPageview(){k&&("visible"===k.visibilityState?this._initialPageviewCaptured||(this._initialPageviewCaptured=!0,this.capture("$pageview",{title:k.title},{send_instantly:!0}),this._visibilityStateListener&&(k.removeEventListener("visibilitychange",this._visibilityStateListener),this._visibilityStateListener=null)):this._visibilityStateListener||(this._visibilityStateListener=this._captureInitialPageview.bind(this),Ke(k,"visibilitychange",this._visibilityStateListener)))}debug(e){!1===e?(null==v||v.console.log("You've disabled debug mode."),this.set_config({debug:!1})):(null==v||v.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),this.set_config({debug:!0}))}_shouldDisableFlags(){var e,t,n,r,i,s,o=this._originalUserConfig||{}
return"advanced_disable_flags"in o?!!o.advanced_disable_flags:!1!==this.config.advanced_disable_flags?!!this.config.advanced_disable_flags:!0===this.config.advanced_disable_decide?(Re.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."),!0):(n="advanced_disable_decide",r=Re,i=(t="advanced_disable_flags")in(e=o)&&!U(e[t]),s=n in e&&!U(e[n]),i?e[t]:!!s&&(r&&r.warn("Config field '"+n+"' is deprecated. Please use '"+t+"' instead. The old field will be removed in a future major version."),e[n]))}_runBeforeSend(e){if(V(this.config.before_send))return e
var t=D(this.config.before_send)?this.config.before_send:[this.config.before_send],n=e
for(var r of t){if(n=r(n),V(n)){var i="Event '"+e.event+"' was rejected in beforeSend function"
return J(e.event)?Re.warn(i+". This can cause unexpected behavior."):Re.info(i),null}n.properties&&!H(n.properties)||Re.warn("Event '"+e.event+"' has no properties after beforeSend function, this is likely an error.")}return n}getPageViewId(){var e
return null==(e=this.pageViewManager._currentPageview)?void 0:e.pageViewId}captureTraceFeedback(e,t){this.capture("$ai_feedback",{$ai_trace_id:String(e),$ai_feedback_text:t})}captureTraceMetric(e,t,n){this.capture("$ai_metric",{$ai_trace_id:String(e),$ai_metric_name:t,$ai_metric_value:String(n)})}_checkLocalStorageForDebug(e){var t=K(e)&&!e,n=Tn._is_supported()&&"true"===Tn._get("ph_debug")
return!t&&(!!n||e)}}!function(e,t){for(var n=0;n<t.length;n++)e.prototype[t[n]]=Ge(e.prototype[t[n]])}(wo,["identify"])
var ko,xo=(ko=ho[vo]=new wo,function(){function e(){e.done||(e.done=!0,_o=!1,De(ho,function(e){e._dom_loaded()}))}null!=k&&k.addEventListener?"complete"===k.readyState?e():Ke(k,"DOMContentLoaded",e,{capture:!1}):v&&Re.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")}(),ko)
function So(...e){console.log(...e)}function Eo(...e){}function Po(e,t){xo.capture(e,t)}function Co(){"string"==typeof window.self&&(s(),window.self=window),function(){try{xo.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N",{advanced_disable_decide:!0,advanced_disable_feature_flags:!0,advanced_disable_feature_flags_on_first_load:!0,advanced_disable_toolbar_metrics:!0,api_host:"https://us.i.posthog.com",autocapture:!1,capture_pageview:!1,disable_compression:!1,disable_persistence:!0,disable_session_recording:!0,disable_surveys:!0,person_profiles:"identified_only"})}catch(e){So(e)}}()}let Lo=0,$o=0,To=0,Oo=0,Io=0,Ao=0,Mo=0
const Ro=()=>Date.now(),jo=()=>Math.floor(Ro()/1e3)
function Fo(){return Lo||(Lo=Ro()),Lo}function No(){return $o||($o=Fo()-3e5),$o}function Do(){return To||(To=Fo()-1728e5),To}function qo(){return Oo||(Oo=Math.floor(Fo()/1e3)),Oo}function Bo(){return Io||(Io=qo()-120),Io}function Ho(){return Ao||(Ao=qo()-86400),Ao}function Uo(){return Mo||(Mo=qo()-604800),Mo}function Go(e){return null===e}function Wo(e){return void 0===e}const zo=`${document.location.protocol}//${document.location.host}/`,Vo=window.HCS?.defines?.cdn,Qo=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],Ko=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],Jo=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Yo=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,Xo=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,Zo=/guild_id=(?<guildId>\d+)/,ea=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,ta=/player_id=(?<playerId>\d+)/,na=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,ra=/VL:.+?(?<vl>\d+)/,ia=/creatures\/(\d+)[A-Za-z0-9]{32}\.png/,sa=.2,oa="joinallgroupsundersize",aa="index.php",la="?cmd=",ca=`${aa}${la}`,ua="&subcmd=",da="&target_username=",fa=`${ca}auctionhouse`,pa=`${fa}&search=`,ha=`${ca}log`,ga=`${ca}ignore${ua}add&ignore_username=`,va=`${ca}profile`,_a=`${va}&player_id=`,ma=`${va}${ua}dropitems`,ba=`${ca}trade&target_player=`,ya=`${ca}trade${ua}createsecure${da}`,wa=`${ca}arena${ua}`,ka=`${aa}${`${la}notepad&blank=1${ua}`}`,xa=`${ka}auctionsearch`,Sa=`${ca}points`,Ea=`${ca}guild${ua}`,Pa=`${Ea}log`,Ca=`${Ea}scouttower`,La=`${Ea}groups&subcmd2=`,$a=`${Ea}inventory&subcmd2=report&user=`,Ta=`${Ea}view&guild_id=`,Oa=`${La}joinall`,Ia=`${La}${oa}`,Aa=`${ca}world`,Ma=`${ca}findplayer`,Ra=`${Ma}&search_show_first=1&search_username=`,ja=`${ca}blacksmith`,Fa=`${ca}quickbuff`,Na=`${ca}composing`,Da=`${ca}attackplayer${da}`,qa=`${ca}${ua}viewupdatearchive`,Ba=`${ca}${ua}viewarchive`,Ha=`${ca}bounty`,Ua=`${ca}inventing${ua}viewrecipe&recipe_id=`,Ga=`https://guide.fallensword.com/${ca}`,Wa="after-update.actionlist",za="buffs.player",Va="update.player",Qa="level.stats-player",Ka="gold.stats-player",Ja="prompt.worldDialogShop",Ya="keydown.controls",Xa="update.realm",Za="-success.action-response",el=`-1${Za}`,tl=`1${Za}`,nl=`2${Za}`,rl=`9${Za}`,il=`5${Za}`,sl=`25${Za}`,ol=2,al=16,ll=128,cl=256,ul="needToCompose",dl="lastComposeCheck",fl="characterVirtualLevel",pl="enableGuildActivityTracker",hl="lastLadderReset",gl="form",vl="table",_l="td",ml="fsh_buffLog",bl="stat-level",yl="stat-defense",wl="stat-attack",kl="stat-damage",xl="stat-armor",Sl="stat-hp",El="stat-vl",Pl="GM_",Cl=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],Ll=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],$l=`${Vo}ui/world/action_spinner.gif`,Tl=".fa-envelope",Ol='a[href*="&player_id="]',Il=.002,Al=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],Ml='input[name="blockedSkillList[]"]',Rl=86400,jl=1e3
var Fl={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252",compactRanks:!1,lastModalGuildLogCheck:0,dailyQuestReRoll:!1}
const Nl=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function Dl(e,t){const n=window.localStorage.getItem(Pl+e)
return Go(n)||Wo(n)?t:function(e){const t=Nl.find(t=>e.startsWith(t[0]))
return t?t[1](e):e}(n)}function ql(e){return!e.startsWith("screenview__")&&Wo(Fl[e]),Dl(e,Fl[e])}function Bl(e){return"boolean"==typeof e}function Hl(e){return"string"==typeof e}function Ul(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(Pl+e,t+n)}const Gl=[[Hl,(e,t)=>{Ul(e,"S]",t)}],[e=>"number"==typeof e,(e,t)=>{t.toString().indexOf(".")<0&&Ul(e,"N]",t)}],[Bl,(e,t)=>{Ul(e,"B]",t)}]]
function Wl(e,t){const n=Gl.find(e=>e[0](t))
n&&n[1](e,t)}function zl(e){const t=`screenview__${e}`,n=ql(t)
Number.isFinite(n)&&n>Ho()||(Po(t),Wl(t,qo()))}function Vl(e){return"function"==typeof e}function Ql(e){return"object"==typeof e}function Kl(e,t){try{return JSON.parse(e,t)}catch(e){}}function Jl(e,t){return t?t.querySelector(e):document.querySelector(e)}function Yl(e){const t=Jl("link",document.body)
return new Promise(n=>{const r=document.createElement("link")
r.type="text/css",r.rel="stylesheet",r.onload=()=>{n()},r.href=e,t?t.before(r):document.body.append(r)})}var Xl="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function Zl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ec,tc={exports:{}}
var nc=(ec||(ec=1,tc.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==Xl?Xl:"undefined"!=typeof self?self:{}
function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){var t=e.default
if("function"==typeof t){var n=function(){return t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(t){var r=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}),n}var r={},i={},s={},o={},a="<unknown>"
function l(e){return e.split("\n").reduce(function(e,t){var n=d(t)||p(t)||v(t)||y(t)||m(t)
return n&&e.push(n),e},[])}var c=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,u=/\((\S*)(?::(\d+))(?::(\d+))\)/
function d(e){var t=c.exec(e)
if(!t)return null
var n=t[2]&&0===t[2].indexOf("native"),r=t[2]&&0===t[2].indexOf("eval"),i=u.exec(t[2])
return r&&null!=i&&(t[2]=i[1],t[3]=i[2],t[4]=i[3]),{file:n?null:t[2],methodName:t[1]||a,arguments:n?[t[2]]:[],lineNumber:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}var f=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
function p(e){var t=f.exec(e)
return t?{file:t[2],methodName:t[1]||a,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var h=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,g=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i
function v(e){var t=h.exec(e)
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
return t&&r.splice(0,h(r)),r}catch(e){return n.debug(e),[]}}function p(e){var t=!1,n=!1
return e.file&&(t=e.file.toLowerCase().indexOf("@honeybadger-io")>-1),e.method&&(n=e.method.toLowerCase().indexOf("@honeybadger-io")>-1),t||n}function h(e){for(var n=0,r=0;r<e.length;r++){var i=e[r]
if(!p(i)){if(!i.file||"<anonymous>"===i.file){var s=e[r+1]
if(s&&p(s)){n++
continue}}break}n++}return n||t.DEFAULT_BACKTRACE_SHIFT}function g(e,t){if(e.cause){for(var n=[],r=e;n.length<3&&(r=r.cause);)n.push({class:r.name,message:r.message,backtrace:"string"==typeof r.stack?f(r.stack,!1,t):null})
return n}return[]}function v(e,t){return s(this,void 0,void 0,function(){var n,r,i,s
return o(this,function(o){switch(o.label){case 0:if(n=[],!t||!e||!e.length)return[2,n]
r=0,o.label=1
case 1:return e.length?(i=e.splice(0)[r],[4,t(i.file)]):[3,3]
case 2:return s=o.sent(),n[r]=B(s,i.number,i.column,2),r++,[3,1]
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
return{log:t("log"),info:t("info"),debug:t("debug"),warn:t("warn"),error:t("error")}}function x(e){var t
if(e)if(S(e)){var n=e
t=l(e,{name:n.name,message:n.message,stack:n.stack,cause:n.cause})}else t="object"==typeof e?b(e):{message:String(e)}
else t={}
return t}function S(e){return e instanceof Error||"[object Error]"===Object.prototype.toString.call(e)}function E(e,t,n){if(e&&t&&n&&t in e)try{for(var r=e[t];r&&r.__hb_original;)r=r.__hb_original
e[t]=n(r),e[t].__hb_original=r}catch(e){}}t.merge=l,t.mergeNotice=c,t.objectIsEmpty=u,t.objectIsExtensible=d,t.makeBacktrace=f,t.DEFAULT_BACKTRACE_SHIFT=3,t.calculateBacktraceShift=h,t.getCauses=g,t.getSourceForBacktrace=v,t.runBeforeNotifyHandlers=_,t.runAfterNotifyHandlers=m,t.shallowClone=b,t.sanitize=y,t.logger=k,t.makeNotice=x,t.isErrorObject=S,t.instrument=E
var P=!1,C=[]
function L(e,t){e&&e.console&&t&&(C.push(t),P||(P=!0,["debug","info","warn","error","log"].forEach(function(t){E(e.console,t,function(n){return function(){var r=Array.prototype.slice.call(arguments)
C.forEach(function(e){try{e(t,r)}catch(e){}}),"function"==typeof n&&Function.prototype.apply.call(n,e.console,arguments)}})})))}function $(e,t){var n=e.trim().replace(/\/$/,"")
return t=t.trim().replace(/(^\/|\/$)/g,""),"".concat(n,"/").concat(t)}function T(){try{throw new Error("")}catch(e){if(e.stack)return e.stack}for(var e=10,t=[],n=arguments.callee;n&&t.length<e;){/function(?:\s+([\w$]+))+\s*\(/.test(n.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>")
try{n=n.caller}catch(e){break}}return t.join("\n")}function O(e,t){if(A("Object",e)){A("Array",t)||(t=[])
var n=[]
return r(e)}function r(e){var i,s
if(A("Object",e)||A("Array",e)){if(-1!==n.indexOf(e))return"[CIRCULAR DATA STRUCTURE]"
n.push(e)}if(A("Object",e)){for(i in s={},e)I(i,t)?s[i]="[FILTERED]":s[i]=r(e[i])
return s}return A("Array",e)?e.map(function(e){return r(e)}):A("Function",e)?"[FUNC]":e}}function I(e,t){for(var n=0;n<t.length;n++)if(-1!==e.toLowerCase().indexOf(t[n].toLowerCase()))return!0
return!1}function A(e,t){var n=Object.prototype.toString.call(t).slice(8,-1)
return null!=t&&n===e}function M(e,t){if(!t)return e
if("string"!=typeof e)return e
var n=e.split(/\?/,2)[1]
if(!n)return e
var r=e
return n.split(/[&]\s?/).forEach(function(e){var n=e.split("=",2),i=n[0],s=n[1]
I(i,t)&&(r=r.replace("".concat(i,"=").concat(s),"".concat(i,"=[FILTERED]")))}),r}function R(e,t){void 0===t&&(t="")
var n={}
return Object.keys(e).forEach(function(r){var i=t+r.replace(/\W/g,"_").toUpperCase()
n[i]=e[r]}),n}function j(e){return JSON.parse(JSON.stringify(e))}t.instrumentConsole=L,t.endpoint=$,t.generateStackTrace=T,t.filter=O,t.filterUrl=M,t.formatCGIData=R,t.clone=j
var F=1e4,N=1e4,D=2e5
function q(e){var t
return(t={})[e]="SOURCE_SIZE_TOO_LARGE",t}function B(e,t,n,r){if(!e)return null
if(n&&n>F)return q(t)
if(e.length>D)return q(t)
var i=e.split("\n")
i.unshift("")
var s=i[t]
if(s&&s.length>N)return q(t)
for(var o=t+r,a={},l=t-r;l<=o;l++){var c=i[l]
"string"==typeof c&&(a[l]=c)}return a}function H(e){return void 0!==e.async}function U(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window}t.isBrowserConfig=H,t.globalThisOrWindow=U
var G={}
function W(e,t,n,r){void 0===r&&(r=100)
var i="".concat(t,"-").concat(n)
if(void 0===G[i]&&(G[i]=0),G[i]%r===0){var s="Deprecation warning: ".concat(t," has been deprecated; please use ").concat(n," instead.")
e.warn(s),G[i]++}else G[i]++}t.logDeprecatedMethod=W})(o),Object.defineProperty(s,"__esModule",{value:!0})
var k=o
function x(e){return void 0===e&&(e=(0,k.globalThisOrWindow)()),{shouldReloadOnConfigure:!1,load:function(t){function n(){return t.config.eventsEnabled}n()&&(0,k.instrumentConsole)(e,function(e,r){if(n()&&0!==r.length){var i={severity:e}
"string"==typeof r[0]?(i.message=r[0],i.args=r.slice(1)):i.args=r,t.event("log",i)}})}}}s.default=x
var S={},E={}
Object.defineProperty(E,"__esModule",{value:!0}),E.GlobalStore=void 0
var P=o,C=function(){function e(e,t){this.contents=e,this.breadcrumbsLimit=t}return e.create=function(t,n){return new e(t,n)},e.prototype.available=function(){return!0},e.prototype.getContents=function(e){var t=e?this.contents[e]:this.contents
return JSON.parse(JSON.stringify(t))},e.prototype.setContext=function(e){this.contents.context=(0,P.merge)(this.contents.context,e||{})},e.prototype.addBreadcrumb=function(e){this.contents.breadcrumbs.length==this.breadcrumbsLimit&&this.contents.breadcrumbs.shift(),this.contents.breadcrumbs.push(e)},e.prototype.clear=function(){this.contents.context={},this.contents.breadcrumbs=[]},e.prototype.run=function(e){return e()},e}()
E.GlobalStore=C
var L={}
class ${static parse(e){return e.trim().split("\n").map(e=>JSON.parse(e))}static stringify(e){return e.map(e=>JSON.stringify(e)).join("\n")}}var T=Object.freeze({__proto__:null,NdJson:$}),O=n(T),I={}
Object.defineProperty(I,"__esModule",{value:!0}),I.CONFIG=void 0,I.CONFIG={apiKey:null,endpoint:"https://api.honeybadger.io",appEndpoint:"https://app.honeybadger.io",environment:null,hostname:null,projectRoot:null,component:null,action:null,revision:null,reportData:null,breadcrumbsEnabled:!0,eventsEnabled:!1,maxBreadcrumbs:40,maxObjectDepth:8,logger:console,developmentEnvironments:["dev","development","test"],debug:!1,tags:null,enableUncaught:!0,enableUnhandledRejection:!0,afterUncaught:function(){return!0},filters:["creditcard","password"],__plugins:[]}
var A=e&&e.__assign||function(){return A=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},A.apply(this,arguments)},M=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):i(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())})},R=e&&e.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
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
Object.defineProperty(L,"__esModule",{value:!0}),L.ThrottledEventsLogger=void 0
var j=O,F=o,N=I,D=function(){function e(e,t){this.config=e,this.transport=t,this.queue=[],this.isProcessing=!1,this.config=A(A({},N.CONFIG),e),this.logger=this.originalLogger()}return e.prototype.configure=function(e){for(var t in e)this.config[t]=e[t]},e.prototype.log=function(e){this.queue.push(e),this.isProcessing||this.processQueue()},e.prototype.flushAsync=function(){return this.logger.debug("[Honeybadger] Flushing events"),this.send()},e.prototype.processQueue=function(){var e=this
0===this.queue.length||this.isProcessing||(this.isProcessing=!0,this.send().then(function(){setTimeout(function(){e.isProcessing=!1,e.processQueue()},50)}).catch(function(t){e.logger.error("[Honeybadger] Error making HTTP request:",t),setTimeout(function(){e.isProcessing=!1,e.processQueue()},50)}))},e.prototype.send=function(){return M(this,void 0,void 0,function(){var e,t
return R(this,function(n){return 0===this.queue.length?[2]:(e=this.queue.slice(),this.queue=[],t=j.NdJson.stringify(e),[2,this.makeHttpRequest(t)])})})},e.prototype.makeHttpRequest=function(e){return M(this,void 0,void 0,function(){var t=this
return R(this,function(n){return[2,this.transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json"},method:"POST",endpoint:(0,F.endpoint)(this.config.endpoint,"/v1/events"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},e).then(function(){t.config.debug&&t.logger.debug("[Honeybadger] Events sent successfully")}).catch(function(e){t.logger.error("[Honeybadger] Error sending events: ".concat(e.message))})]})})},e.prototype.originalLogger=function(){var e,t,n,r,i
return{log:null!==(e=console.log.__hb_original)&&void 0!==e?e:console.log,info:null!==(t=console.info.__hb_original)&&void 0!==t?t:console.info,debug:null!==(n=console.debug.__hb_original)&&void 0!==n?n:console.debug,warn:null!==(r=console.warn.__hb_original)&&void 0!==r?r:console.warn,error:null!==(i=console.error.__hb_original)&&void 0!==i?i:console.error}},e}()
L.ThrottledEventsLogger=D
var q=e&&e.__assign||function(){return q=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},q.apply(this,arguments)},B=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):i(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())})},H=e&&e.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
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
Object.defineProperty(S,"__esModule",{value:!0}),S.Client=void 0
var U=o,G=E,W=L,z=I,V=/,|\s+/,Q=/\S/,K=function(){function e(e,t){void 0===e&&(e={}),this.__pluginsLoaded=!1,this.__store=null,this.__beforeNotifyHandlers=[],this.__afterNotifyHandlers=[],this.__notifier={name:"@honeybadger-io/core",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",version:"6.12.3"},this.config=q(q({},z.CONFIG),e),this.__initStore(),this.__transport=t,this.__eventsLogger=new W.ThrottledEventsLogger(this.config,this.__transport),this.logger=(0,U.logger)(this)}return e.prototype.getVersion=function(){return this.__notifier.version},e.prototype.getNotifier=function(){return this.__notifier},e.prototype.setNotifier=function(e){this.__notifier=e},e.prototype.configure=function(e){for(var t in void 0===e&&(e={}),e)this.config[t]=e[t]
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
"object"==typeof e&&(t=e,e=null!==(n=e.event_type)&&void 0!==n?n:void 0),this.__eventsLogger.log(q({event_type:e,ts:(new Date).toISOString()},t))},e.prototype.flushAsync=function(){return this.__eventsLogger.flushAsync()},e.prototype.__getBreadcrumbs=function(){return this.__store.getContents("breadcrumbs").slice()},e.prototype.__getContext=function(){return this.__store.getContents("context")},e.prototype.__developmentMode=function(){return!0!==this.config.reportData&&this.config.environment&&this.config.developmentEnvironments.includes(this.config.environment)},e.prototype.__buildPayload=function(e){var t=(0,U.filter)(e.headers,this.config.filters)||{},n=(0,U.filter)(q(q({},e.cgiData),(0,U.formatCGIData)(t,"HTTP_")),this.config.filters)
return{notifier:this.__notifier,breadcrumbs:{enabled:!!this.config.breadcrumbsEnabled,trail:e.__breadcrumbs||[]},error:{class:e.name,message:e.message,backtrace:e.backtrace,fingerprint:e.fingerprint,tags:e.tags,causes:(0,U.getCauses)(e,this.logger)},request:{url:(0,U.filterUrl)(e.url,this.config.filters),component:e.component,action:e.action,context:e.context,cgi_data:n,params:(0,U.filter)(e.params,this.config.filters)||{},session:(0,U.filter)(e.session,this.config.filters)||{}},server:{project_root:e.projectRoot,environment_name:e.environment,revision:e.revision,hostname:this.config.hostname,time:(new Date).toUTCString()},details:e.details||{}}},e.prototype.__constructTags=function(e){return e?e.toString().split(V).filter(function(e){return Q.test(e)}):[]},e.prototype.__runPreconditions=function(e){var t=this,n=null
e||(this.logger.debug("failed to build error report"),n=new Error("failed to build error report")),!1===this.config.reportData&&(this.logger.debug("skipping error report: honeybadger.js is disabled",e),n=new Error("honeybadger.js is disabled")),this.__developmentMode()&&(this.logger.log("honeybadger.js is in development mode; the following error report will be sent in production.",e),n=new Error("honeybadger.js is in development mode")),this.config.apiKey||(this.logger.warn("could not send error report: no API key has been configured",e),n=new Error("missing API key"))
var r=(0,U.runBeforeNotifyHandlers)(e,this.__beforeNotifyHandlers)
return n||r.result||(this.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers returned false")),r.results.length&&r.results.some(function(e){return e instanceof Promise})?Promise.allSettled(r.results).then(function(r){if(!n&&r.some(function(e){return"rejected"===e.status||!1===e.value})&&(t.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers (async) returned false")),n)return n}):n},e.prototype.__send=function(e,t){var n=this
return this.config.breadcrumbsEnabled?(this.addBreadcrumb("Honeybadger Notice",{category:"notice",metadata:{message:e.message,name:e.name,stack:e.stack}}),e.__breadcrumbs=this.__store.getContents("breadcrumbs")):e.__breadcrumbs=[],(0,U.getSourceForBacktrace)(t,this.__getSourceFileHandler).then(function(t){return B(n,void 0,void 0,function(){var n
return H(this,function(r){return t.forEach(function(t,n){e.backtrace[n].source=t}),n=this.__buildPayload(e),[2,this.__transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json",Accept:"text/json, application/json"},method:"POST",endpoint:(0,U.endpoint)(this.config.endpoint,"/v1/notices/js"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},n)]})})}).then(function(t){if(201!==t.statusCode)return(0,U.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,new Error("Bad HTTP response: ".concat(t.statusCode))),n.logger.warn("Error report failed: unknown response from server. code=".concat(t.statusCode)),!1
var r=JSON.parse(t.body).id;(0,U.runAfterNotifyHandlers)((0,U.merge)(e,{id:r}),n.__afterNotifyHandlers)
var i=(0,U.endpoint)(n.config.appEndpoint,"notice/".concat(r))
return n.logger.info("Error report sent ⚡ ".concat(i)),!0}).catch(function(t){return n.logger.error("Error report failed: an unknown error occurred.","message=".concat(t.message)),(0,U.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,t),!1})},e}()
S.Client=K
var J={}
Object.defineProperty(J,"__esModule",{value:!0}),function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e&&e.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},a=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i)
return r(t,e),t},l=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Plugins=t.Defaults=t.Util=t.Types=t.Client=void 0
var c=l(s),u=S
Object.defineProperty(t,"Client",{enumerable:!0,get:function(){return u.Client}}),i(E,t),t.Types=a(J),t.Util=a(o),t.Defaults=a(I),t.Plugins={events:c.default}}(i)
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
var de,fe=i,pe=fe.Util.instrument,he=fe.Util.makeNotice,ge=fe.Util.globalThisOrWindow,ve=0
function _e(){ve+=1,clearTimeout(de),de=setTimeout(function(){ve=0})}function me(e){return void 0===e&&(e=ge()),{load:function(t){pe(e,"onerror",function(n){var r=function(e,n,r,i,s){if(t.logger.debug("window.onerror callback invoked",arguments),ve>0)return t.logger.debug("Ignoring window.onerror (error likely reported earlier)",arguments),void(ve-=1)
if(0===r&&/Script error\.?/.test(e))t.config.enableUncaught&&t.logger.warn("Ignoring cross-domain script error: enable CORS to track these types of errors",arguments)
else{var o=he(s)
o.name||(o.name="window.onerror"),o.message||(o.message=e),o.stack||(o.stack=[o.message,"\n    at ? (",n||"unknown",":",r||0,":",i||0,")"].join("")),t.addBreadcrumb("window.onerror"!==o.name&&o.name?"window.onerror: ".concat(o.name):"window.onerror",{category:"error",metadata:{name:o.name,message:o.message,stack:o.stack}}),t.config.enableUncaught&&t.notify(o)}}
return function(t,i,s,o,a){return r(t,i,s,o,a),"function"==typeof n&&n.apply(e,arguments)}})}}}ue.ignoreNextOnError=_e,ue.onError=me
var be={}
Object.defineProperty(be,"__esModule",{value:!0})
var ye=i,we=ye.Util.instrument,ke=ye.Util.globalThisOrWindow
function xe(e){return void 0===e&&(e=ke()),{load:function(t){t.config.enableUnhandledRejection&&we(e,"onunhandledrejection",function(e){function n(e){var n
if(t.logger.debug("window.onunhandledrejection callback invoked",arguments),t.config.enableUnhandledRejection){var r=e.reason
if(r instanceof Error){var i="unknown",s=0,o="".concat(r.message,"\n    at ? (").concat(i,":").concat(s,")"),a=r.stack||o,l={name:r.name,message:"UnhandledPromiseRejectionWarning: ".concat(r),stack:a}
return t.addBreadcrumb("window.onunhandledrejection: ".concat(l.name),{category:"error",metadata:l}),void t.notify(l)}var c="string"==typeof r?r:null!==(n=JSON.stringify(r))&&void 0!==n?n:"Unspecified reason"
t.notify({name:"window.onunhandledrejection",message:"UnhandledPromiseRejectionWarning: ".concat(c)})}}return function(t){n(t),"function"==typeof e&&e.apply(this,arguments)}})}}}be.default=xe
var Se={}
Object.defineProperty(Se,"__esModule",{value:!0})
var Ee=i,Pe=Y,Ce=Ee.Util.sanitize,Le=Ee.Util.instrument,$e=Ee.Util.instrumentConsole,Te=Ee.Util.globalThisOrWindow
function Oe(e){return void 0===e&&(e=Te()),{load:function(t){function n(e){return!0===t.config.breadcrumbsEnabled||(e?!0===t.config.breadcrumbsEnabled[e]:!1!==t.config.breadcrumbsEnabled)}!function(){function r(e){return Array.isArray(e)?e.map(function(e){try{return String(e)}catch(e){return"[unknown]"}}).join(" "):""}n("console")&&$e(e,function(e,n){var i=r(n),s={category:"log",metadata:{level:e,arguments:Ce(n,3)}}
t.addBreadcrumb(i,s)})}(),n("dom")&&"function"==typeof e.addEventListener&&e.addEventListener("click",function(e){var n,r,i
try{n=(0,Pe.stringNameOfElement)(e.target),r=(0,Pe.stringSelectorOfElement)(e.target),i=(0,Pe.stringTextOfElement)(e.target)}catch(e){n="UI Click",r="[unknown]",i="[unknown]"}0!==n.length&&t.addBreadcrumb(n,{category:"ui.click",metadata:{selector:r,text:i,event:e}})},!!e.location),n("network")&&"undefined"!=typeof XMLHttpRequest&&(Le(XMLHttpRequest.prototype,"open",function(e){return function(){var t=this,n=arguments[1],r="string"==typeof n?n:String(n),i="string"==typeof arguments[0]?arguments[0].toUpperCase():arguments[0],s="".concat(i," ").concat((0,Pe.localURLPathname)(r))
this.__hb_xhr={type:"xhr",method:i,url:r,message:s},"function"==typeof e&&e.apply(t,arguments)}}),Le(XMLHttpRequest.prototype,"send",function(e){return function(){var n=this
function r(){if(4===n.readyState){var e=void 0
n.__hb_xhr&&(n.__hb_xhr.status_code=n.status,e=n.__hb_xhr.message,delete n.__hb_xhr.message),t.addBreadcrumb(e||"XMLHttpRequest",{category:"request",metadata:n.__hb_xhr})}}"onreadystatechange"in n&&"function"==typeof n.onreadystatechange?Le(n,"onreadystatechange",function(e){return function(){r(),"function"==typeof e&&e.apply(this,arguments)}}):n.onreadystatechange=r,"function"==typeof e&&e.apply(n,arguments)}})),n("network")&&(0,Pe.nativeFetch)()&&Le(e,"fetch",function(n){return function(){var r,i=arguments[0],s="GET"
"string"==typeof i?r=i:"Request"in e&&i instanceof Request?(r=i.url,i.method&&(s=i.method)):r=String(i),arguments[1]&&arguments[1].method&&(s=arguments[1].method),"string"==typeof s&&(s=s.toUpperCase())
var o="".concat(s," ").concat("undefined"==typeof document?r:(0,Pe.localURLPathname)(r)),a={type:"fetch",method:s,url:r}
return n.apply(this,arguments).then(function(e){return a.status_code=e.status,t.addBreadcrumb(o,{category:"request",metadata:a}),e}).catch(function(e){throw t.addBreadcrumb("fetch error",{category:"error",metadata:a}),e})}}),function(){if(n("navigation")&&null!=e.location){var r=e.location.href
"function"==typeof addEventListener&&addEventListener("popstate",function(t){i(r,e.location.href)}),void 0!==e.history&&(Le(e.history,"pushState",s),Le(e.history,"replaceState",s))}function i(e,n){r=n,t.addBreadcrumb("Page changed",{category:"navigation",metadata:{from:e,to:n}})}function s(e){return function(){var t=arguments.length>2?arguments[2]:void 0
return t&&i(r,String(t)),e.apply(this,arguments)}}}()}}}Se.default=Oe
var Ie={}
Object.defineProperty(Ie,"__esModule",{value:!0})
var Ae=i,Me=Ae.Util.instrument,Re=Ae.Util.globalThisOrWindow
function je(e){return void 0===e&&(e=Re()),{load:function(t){!function(){function n(e){return function(n){return function(r,i){if("function"==typeof r){var s=Array.prototype.slice.call(arguments,2)
return r=t.__wrap(r,e),n(function(){r.apply(void 0,s)},i)}return n(r,i)}}}Me(e,"setTimeout",n({component:"setTimeout"})),Me(e,"setInterval",n({component:"setInterval"}))}()}}}Ie.default=je
var Fe={}
Object.defineProperty(Fe,"__esModule",{value:!0})
var Ne=i,De=Ne.Util.instrument,qe=Ne.Util.globalThisOrWindow
function Be(e){return void 0===e&&(e=qe()),{load:function(t){["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"].forEach(function(n){var r=e[n]&&e[n].prototype
r&&Object.prototype.hasOwnProperty.call(r,"addEventListener")&&(De(r,"addEventListener",function(e){var r={component:"".concat(n,".prototype.addEventListener")}
return function(n,i,s,o){try{i&&null!=i.handleEvent&&(i.handleEvent=t.__wrap(i.handleEvent,r))}catch(e){t.logger.error(e)}return e.call(this,n,t.__wrap(i,r),s,o)}}),De(r,"removeEventListener",function(e){return function(n,r,i,s){return e.call(this,n,r,i,s),e.call(this,n,t.__wrap(r),i,s)}}))})}}}Fe.default=Be
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
var c=i,u=Y,d=ue,f=l(be),p=l(Se),h=l(Ie),g=l(Fe),v=He,_=Je,m=c.Util.merge,b=c.Util.filter,y=c.Util.objectIsExtensible,w=c.Util.globalThisOrWindow,k=function(){var e=w(),t=""
return null!=e.location&&(t=e.location.protocol+"//"+e.location.host),t},x=function(e){var t=e.split(".").slice(0,2).join(".")
return"https://js.honeybadger.io/v".concat(t,"/honeybadger-feedback-form.js")}
t.getUserFeedbackScriptUrl=x
var S=function(e){function n(t){void 0===t&&(t={})
var n=e.call(this,s({userFeedbackEndpoint:"https://api.honeybadger.io/v2/feedback",async:!0,maxErrors:null,projectRoot:k()},t),new v.BrowserTransport({"User-Agent":P()}))||this
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
throw r.__lastWrapErr=e,(0,d.ignoreNextOnError)(),r.addBreadcrumb(t.component?"".concat(t.component,": ").concat(e.name):e.name,{category:"error",metadata:{message:e.message,name:e.name,stack:e.stack}}),r.config.enableUncaught&&r.notify(e),e}}}return n.___hb.___hb=n.___hb,n.___hb}catch(e){return n}},n.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},n.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},n}(c.Client),E={name:"@honeybadger-io/js",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",version:"6.12.3"},P=function(){return"undefined"!=typeof navigator?"Honeybadger JS Browser Client ".concat(E.version,"; ").concat(navigator.userAgent):"Honeybadger JS Browser Client ".concat(E.version,"; n/a; n/a")},C=new S({__plugins:[(0,d.onError)(),(0,f.default)(),(0,h.default)(),(0,g.default)(),(0,p.default)(),c.Plugins.events()]})
C.setNotifier(E)
var L=i
Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return L.Types}}),t.default=C}(r)
var et=t(r)
return et}()),tc.exports),rc=Zl(nc)
const ic=["attackplayer.min.js","Auction-House-Monitor.user.js","Cocaine.user.js","Compra-%2526-Venda-de-Recursos-%25E2%259C%2585.user.js","cross-origin frame","Daily-Quest-Auto-Hunter-All-Creatures-%252B-SE-Searcher-Movement.user.js","Discord-Message-Checks-for-Updates.user.js","dynamically imported module","Fallen-Sword-Auto-Invent.user.js","Fallen-Sword-Auto-Skill-Caster.user.js","Fallen-Sword-Champion-and-Super-Elite-Alert.user.js","Fallen-Sword-Message-Alert.user.js","Fallen-Sword-Super-Elite-%2526-Crate-Notifier.user.js","Fallen-Sword-Super-Elite-Notifier.user.js","Fallen-Sword-Win%252FLoss-Checker-with-Buffs-and-Buff-Levels.user.js","Fallen-Sword-Win%252FLoss-Checker.user.js","Fallensword-GvG-Target-Checker-with-Button-and-Buff-Check.user.js","Fetch-Auction-and-Send-to-Discord.user.js","FS-%E2%80%93-Auto-Explore-visible-per-step-movement","FS-%E2%80%93-Inline-Combat-Sets-Fast%2C-Correct-CSS-on-Tournament-Page.user.js","FS-Fixer.user.js","FS-Mapper.user.js","fs.min.js","FSH1.user.js","Gold-alert.user.js","GVG-and-Relics-Notifications.user.js","GvG-Initiate-Enhanced.user.js","GvG-List-v2.user.js","GvG-Name-Only.user.js","GVG%252FRelics-Discord.user.js","GVG%252FRelics-Notifications.user.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","League-of-Legends.user.js","MetaMask","New-Userscript.user.js","News.user.js","openuserjs.org","out of memory","Permission denied to access object","play method is not allowed","Quick-Kill.user.js","SE-Searcher-Replay-Fix.user.js","se-searcher-v2-draft.user.js","SE-Searcher-v2-with-Pause%252FResume.user.js","Superelite-searcher.user.js","SWS-Creature-Killer.user.js","Titan-3.0.user.js","Titan-Quick-Kill.user.js","UFSG-dodatki.user.js","UnhandledPromiseRejectionWarning: 404","world.min.js","(reading '$$')"],sc=e=>Hl(e)&&ic.some(t=>e.includes(t))
function oc(e){if(sc(e.message)||sc(e.stack))return!1}function ac(){!function(){rc.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.159"})
const e=s()
e&&rc.setContext({user_id:e}),rc.afterNotify(e=>{if(e)return So(`Honeybadger notification failed: ${e}`)}),rc.beforeNotify(oc)}()}function lc(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class cc extends Error{constructor([e,t,n,r],...i){super(function(e,t,n,r){const i=`${t.status} ${t.statusText} - `
if(t.statusText===r.toString())return i+lc(e)
const s=`${i+n} ${r} - ${lc(e)}`
return"parsererror"===n?`${s} - ${t.responseText}`:s}(e,t,n,r),...i),Error.captureStackTrace&&Error.captureStackTrace(this,cc),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=r}}function uc(e,t,n,r){e instanceof EventTarget&&e.addEventListener(t,n,r)}function dc(e,t,n){return JSON.stringify(e,t,n)}function fc(e){ql("betaOptIn")&&So("sendException",e),rc.notify(e,"sendException")}var pc={}
function hc(e){return Array.isArray(e)}function gc(e,t){return e||t}const vc=[null]
function _c(e,t){return vc[e]&&vc[e].priority<vc[t].priority}function mc(e,t){const n=vc[e]
vc[e]=vc[t],vc[t]=n}function bc(e,t){return e?2*t:2*t+1}function yc(){if(1===vc.length)return
const e=vc[1].data,t=vc.pop()
return vc.length>1&&(vc[1]=t,function(e){let t=e
for(;2*t<vc.length;){const e=bc(!_c(2*t+1,2*t),t)
if(_c(t,e))break
mc(t,e),t=e}}(1)),e}function wc(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!_c(t,e))break
mc(t,e),t=e}}(vc.push({data:e,priority:t})-1)}let kc=!0
const xc="fshMessage"
let Sc=0
function Ec(){vc.length-1==0?kc=!0:(kc=!1,window.postMessage(xc,window.location.origin))}function Pc(){const e=yc()
Vl(e)?e():function(e){Wo(e)||fc(`pop() was not a function (${typeof e})`)}(e)}function Cc(e){const t=e.data
e.origin===window.location.origin&&t===xc&&function(){try{Pc()}catch(e){rc.notify(e,"taskFailure")}finally{Ec()}}()}function Lc(e,t,n,r){if(Vl(t)){Sc||(uc(window,"message",Cc),Sc=!0)
const i=gc(r,window),s=gc(n,[])
wc(t.bind(i,...s),e),kc&&Ec()}}function $c(e,t){return new URLSearchParams(e).get(t)}function Tc(e){try{return $c(decodeURIComponent(window.location.search),e)}catch(e){return""}}var Oc=!1,Ic=Array.isArray,Ac=Array.prototype.indexOf,Mc=Array.from,Rc=Object.defineProperty,jc=Object.getOwnPropertyDescriptor,Fc=Object.getOwnPropertyDescriptors,Nc=Object.prototype,Dc=Array.prototype,qc=Object.getPrototypeOf,Bc=Object.isExtensible
function Hc(e){return"function"==typeof e}const Uc=()=>{}
function Gc(e){return e()}function Wc(e){for(var t=0;t<e.length;t++)e[t]()}function zc(){var e,t
return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}function Vc(e,t){if(Array.isArray(e))return e
if(void 0===t||!(Symbol.iterator in e))return Array.from(e)
const n=[]
for(const r of e)if(n.push(r),n.length===t)break
return n}const Qc=16,Kc=32,Jc=64,Yc=128,Xc=1024,Zc=2048,eu=4096,tu=8192,nu=16384,ru=32768,iu=65536,su=1<<17,ou=1<<19,au=256,lu=512,cu=32768,uu=1<<21,du=1<<23,fu=Symbol("$state"),pu=Symbol("legacy props"),hu=Symbol(""),gu=new class extends Error{name="StaleReactionError"
message="The reaction that called `getAbortSignal()` was re-run or destroyed"}
function vu(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const _u=Symbol()
function mu(e){return e===this.v}function bu(e,t){return e!=e?t==t:e!==t||null!==e&&"object"==typeof e||"function"==typeof e}function yu(e){return!bu(e,this.v)}let wu=!1
const ku=[]
function xu(e,t=!1,n=!1){return Su(e,new Map,"",ku,null,n)}function Su(e,t,n,r,i=null,s=!1){if("object"==typeof e&&null!==e){var o=t.get(e)
if(void 0!==o)return o
if(e instanceof Map)return new Map(e)
if(e instanceof Set)return new Set(e)
if(Ic(e)){var a=Array(e.length)
t.set(e,a),null!==i&&t.set(i,a)
for(var l=0;l<e.length;l+=1){var c=e[l]
l in e&&(a[l]=Su(c,t,n,r,null,s))}return a}if(qc(e)===Nc){for(var u in a={},t.set(e,a),null!==i&&t.set(i,a),e)a[u]=Su(e[u],t,n,r,null,s)
return a}if(e instanceof Date)return structuredClone(e)
if("function"==typeof e.toJSON&&!s)return Su(e.toJSON(),t,n,r,e)}if(e instanceof EventTarget)return e
try{return structuredClone(e)}catch(t){return e}}let Eu=null
function Pu(e){Eu=e}function Cu(e,t=!1,n){Eu={p:Eu,c:null,e:null,s:e,x:null,l:wu&&!t?{s:null,u:null,$:[]}:null}}function Lu(e){var t=Eu,n=t.e
if(null!==n)for(var r of(t.e=null,n))Bd(r)
return void 0!==e&&(t.x=e),Eu=t.p,e??{}}function $u(){return!wu||null!==Eu&&null===Eu.l}let Tu=[]
function Ou(){var e=Tu
Tu=[],Wc(e)}function Iu(e){if(0===Tu.length&&!zu){var t=Tu
queueMicrotask(()=>{t===Tu&&Ou()})}Tu.push(e)}function Au(){for(;Tu.length>0;)Ou()}const Mu=new WeakMap
function Ru(e){var t=ff
if(null===t)return cf.f|=du,e
if(0===(t.f&ru)){if(0===(t.f&Yc))throw!t.parent&&e instanceof Error&&Fu(e),e
t.b.error(e)}else ju(e,t)}function ju(e,t){for(;null!==t;){if(0!==(t.f&Yc))try{return void t.b.error(e)}catch(t){e=t}t=t.parent}throw e instanceof Error&&Fu(e),e}function Fu(e){const t=Mu.get(e)
t&&(Rc(e,"message",{value:t.message}),Rc(e,"stack",{value:t.stack}))}const Nu=new Set
let Du=null,qu=null,Bu=null,Hu=new Set,Uu=[],Gu=null,Wu=!1,zu=!1
class Vu{committed=!1
current=new Map
#e=new Map
#t=new Set
#n=0
#r=0
#i=null
#s=[]
#o=[]
skipped_effects=new Set
process(e){Uu=[],qu=null,this.apply()
var t={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]}
for(const n of e)this.#a(n,t)
this.#l(),this.#r>0?(this.#c(t.effects),this.#c(t.render_effects),this.#c(t.block_effects)):(qu=this,Du=null,Xu(t.render_effects),Xu(t.effects),qu=null),Bu=null}#a(e,t){e.f^=Xc
for(var n=e.first;null!==n;){var r=n.f,i=!!(96&r),s=i&&0!==(r&Xc)||0!==(r&tu)||this.skipped_effects.has(n)
if(0!==(n.f&Yc)&&n.b?.is_pending()&&(t={parent:t,effect:n,effects:[],render_effects:[],block_effects:[]}),!s&&null!==n.fn){i?n.f^=Xc:4&r?t.effects.push(n):Ef(n)&&(0!==(n.f&Qc)&&t.block_effects.push(n),Tf(n))
var o=n.first
if(null!==o){n=o
continue}}var a=n.parent
for(n=n.next;null===n&&null!==a;)a===t.effect&&(this.#c(t.effects),this.#c(t.render_effects),this.#c(t.block_effects),t=t.parent),n=a.next,a=a.parent}}#c(e){for(const t of e){(0!==(t.f&Zc)?this.#s:this.#o).push(t),jf(t,Xc)}}capture(e,t){this.#e.has(e)||this.#e.set(e,t),this.current.set(e,e.v),Bu?.set(e,e.v)}activate(){Du=this}deactivate(){Du=null,Bu=null}flush(){if(Uu.length>0){if(this.activate(),Ku(),null!==Du&&Du!==this)return}else this.#l()
this.deactivate()
for(const e of Hu)if(Hu.delete(e),e(),null!==Du)break}#l(){if(0===this.#r){for(const e of this.#t)e()
this.#t.clear()}0===this.#n&&this.#u()}#u(){if(Nu.size>1){this.#e.clear()
var e=Bu,t=!0,n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]}
for(const e of Nu){if(e===this){t=!1
continue}const r=[]
for(const[n,i]of this.current){if(e.current.has(n)){if(!t||i===e.current.get(n))continue
e.current.set(n,i)}r.push(n)}if(0===r.length)continue
const i=[...e.current.keys()].filter(e=>!this.current.has(e))
if(i.length>0){const t=new Set,s=new Map
for(const e of r)Zu(e,i,t,s)
if(Uu.length>0){Du=e,e.apply()
for(const t of Uu)e.#a(t,n)
Uu=[],e.deactivate()}}}Du=null,Bu=e}this.committed=!0,Nu.delete(this),this.#i?.resolve()}increment(e){this.#n+=1,e&&(this.#r+=1)}decrement(e){this.#n-=1,e&&(this.#r-=1)
for(const e of this.#s)jf(e,Zc),td(e)
for(const e of this.#o)jf(e,eu),td(e)
this.#s=[],this.#o=[],this.flush()}add_callback(e){this.#t.add(e)}settled(){return(this.#i??=zc()).promise}static ensure(){if(null===Du){const e=Du=new Vu
Nu.add(Du),zu||Vu.enqueue(()=>{Du===e&&e.flush()})}return Du}static enqueue(e){Iu(e)}apply(){}}function Qu(e){var t=zu
zu=!0
try{for(;;){if(Au(),0===Uu.length&&(Du?.flush(),0===Uu.length))return void(Gu=null)
Ku()}}finally{zu=t}}function Ku(){var e=sf
Wu=!0
try{var t=0
for(of(!0);Uu.length>0;){var n=Vu.ensure()
if(t++>1e3)Oc,Ju()
n.process(Uu),pd.clear()}}finally{Wu=!1,of(e),Gu=null}}function Ju(){try{!function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}()}catch(e){ju(e,Gu)}}let Yu=null
function Xu(e){var t=e.length
if(0!==t){for(var n=0;n<t;){var r=e[n++]
if(!(24576&r.f)&&Ef(r)&&(Yu=new Set,Tf(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown&&null===r.ac?Yd(r):r.fn=null),Yu?.size>0)){pd.clear()
for(const e of Yu){if(24576&e.f)continue
const t=[e]
let n=e.parent
for(;null!==n;)Yu.has(n)&&(Yu.delete(n),t.push(n)),n=n.parent
for(let e=t.length-1;e>=0;e--){const n=t[e]
24576&n.f||Tf(n)}}Yu.clear()}}Yu=null}}function Zu(e,t,n,r){if(!n.has(e)&&(n.add(e),null!==e.reactions))for(const i of e.reactions){const e=i.f
2&e?Zu(i,t,n,r):4194320&e&&0===(e&Zc)&&ed(i,t,r)&&(jf(i,Zc),td(i))}}function ed(e,t,n){const r=n.get(e)
if(void 0!==r)return r
if(null!==e.deps)for(const r of e.deps){if(t.includes(r))return!0
if(2&r.f&&ed(r,t,n))return n.set(r,!0),!0}return n.set(e,!1),!1}function td(e){for(var t=Gu=e;null!==t.parent;){var n=(t=t.parent).f
if(Wu&&t===ff&&0!==(n&Qc))return
if(96&n){if(0===(n&Xc))return
t.f^=Xc}}Uu.push(t)}function nd(e){let t,n=0,r=hd(0)
return()=>{null===cf||uf||(If(r),Ud(()=>(0===n&&(t=Mf(()=>e(()=>bd(r)))),n+=1,()=>{Iu(()=>{n-=1,0===n&&(t?.(),t=void 0,bd(r))})})))}}class rd{parent
#n=!1
#d
#f=null
#p
#h
#g
#v=null
#_=null
#m=null
#b=null
#y=0
#w=0
#k=!1
#x=null
#S=()=>{this.#x&&md(this.#x,this.#y)}
#E=nd(()=>(this.#x=hd(this.#y),()=>{this.#x=null}))
constructor(e,t,n){this.#d=e,this.#p=t,this.#h=n,this.parent=ff.b,this.#n=!!this.#p.pending,this.#g=Wd(()=>{ff.b=this
try{this.#v=zd(()=>n(this.#d))}catch(e){this.error(e)}this.#w>0?this.#P():this.#n=!1},589952)}#C(){try{this.#v=zd(()=>this.#h(this.#d))}catch(e){this.error(e)}this.#n=!1}#L(){const e=this.#p.pending
e&&(this.#_=zd(()=>e(this.#d)),Vu.enqueue(()=>{this.#v=this.#$(()=>(Vu.ensure(),zd(()=>this.#h(this.#d)))),this.#w>0?this.#P():(Xd(this.#_,()=>{this.#_=null}),this.#n=!1)}))}is_pending(){return this.#n||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#p.pending}#$(e){var t=ff,n=cf,r=Eu
pf(this.#g),df(this.#g),Pu(this.#g.ctx)
try{return e()}catch(e){return Ru(e),null}finally{pf(t),df(n),Pu(r)}}#P(){const e=this.#p.pending
null!==this.#v&&(this.#b=document.createDocumentFragment(),rf(this.#v,this.#b)),null===this.#_&&(this.#_=zd(()=>e(this.#d)))}#T(e){this.has_pending_snippet()?(this.#w+=e,0===this.#w&&(this.#n=!1,this.#_&&Xd(this.#_,()=>{this.#_=null}),this.#b&&(this.#d.before(this.#b),this.#b=null))):this.parent&&this.parent.#T(e)}update_pending_count(e){this.#T(e),this.#y+=e,Hu.add(this.#S)}get_effect_pending(){return this.#E(),If(this.#x)}error(e){var t=this.#p.onerror
let n=this.#p.failed
if(this.#k||!t&&!n)throw e
this.#v&&(Kd(this.#v),this.#v=null),this.#_&&(Kd(this.#_),this.#_=null),this.#m&&(Kd(this.#m),this.#m=null)
var r=!1,i=!1
const s=()=>{r?console.warn("https://svelte.dev/e/svelte_boundary_reset_noop"):(r=!0,i&&function(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}(),Vu.ensure(),this.#y=0,null!==this.#m&&Xd(this.#m,()=>{this.#m=null}),this.#n=this.has_pending_snippet(),this.#v=this.#$(()=>(this.#k=!1,zd(()=>this.#h(this.#d)))),this.#w>0?this.#P():this.#n=!1)}
var o=cf
try{df(null),i=!0,t?.(e,s),i=!1}catch(e){ju(e,this.#g&&this.#g.parent)}finally{df(o)}n&&Iu(()=>{this.#m=this.#$(()=>{this.#k=!0
try{return zd(()=>{n(this.#d,()=>e,()=>s)})}catch(e){return ju(e,this.#g.parent),null}finally{this.#k=!1}})})}}function id(e,t,n){const r=$u()?ad:cd
if(0!==t.length){var i=Du,s=ff,o=sd()
Promise.all(t.map(e=>function(e){let t=ff
null===t&&function(){throw new Error("https://svelte.dev/e/async_derived_orphan")}()
var n=t.b,r=void 0,i=hd(_u),s=!cf,o=new Map
return function(e){Nd(4718592,e,!0)}(()=>{var t=zc()
r=t.promise
try{Promise.resolve(e()).then(t.resolve,t.reject).then(()=>{a===Du&&a.committed&&a.deactivate(),od()})}catch(e){t.reject(e),od()}var a=Du
if(s){var l=!n.is_pending()
n.update_pending_count(1),a.increment(l),o.get(a)?.reject(gu),o.delete(a),o.set(a,t)}const c=(e,t=void 0)=>{if(a.activate(),t)t!==gu&&(i.f|=du,md(i,t))
else{0!==(i.f&du)&&(i.f^=du),md(i,e)
for(const[e,t]of o){if(o.delete(e),e===a)break
t.reject(gu)}}s&&(n.update_pending_count(-1),a.decrement(l))}
t.promise.then(c,e=>c(null,e||"unknown"))}),Dd(()=>{for(const e of o.values())e.reject(gu)}),new Promise(e=>{function t(n){function s(){n===r?e(i):t(r)}n.then(s,s)}t(r)})}(e))).then(t=>{o()
try{n([...e.map(r),...t])}catch(e){0===(s.f&nu)&&ju(e,s)}i?.deactivate(),od()}).catch(e=>{ju(e,s)})}else n(e.map(r))}function sd(){var e=ff,t=cf,n=Eu,r=Du
return function(){pf(e),df(t),Pu(n),r?.activate()}}function od(){pf(null),df(null),Pu(null)}function ad(e){var t=2050,n=null!==cf&&2&cf.f?cf:null
null===ff||null!==n&&0!==(n.f&au)?t|=au:ff.f|=ou
return{ctx:Eu,deps:null,effects:null,equals:mu,f:t,fn:e,reactions:null,rv:0,v:_u,wv:0,parent:n??ff,ac:null}}function ld(e){const t=ad(e)
return gf(t),t}function cd(e){const t=ad(e)
return t.equals=yu,t}function ud(e){var t=e.effects
if(null!==t){e.effects=null
for(var n=0;n<t.length;n+=1)Kd(t[n])}}function dd(e){var t,n=ff
pf(function(e){for(var t=e.parent;null!==t;){if(!(2&t.f))return t
t=t.parent}return null}(e))
try{e.f&=-32769,ud(e),t=Cf(e)}finally{pf(n)}return t}function fd(e){var t=dd(e);(e.equals(t)||(e.v=t,e.wv=Sf()),af)||(null!==Bu?Bu.set(e,e.v):jf(e,!xf&&0===(e.f&au)||null===e.deps?Xc:eu))}const pd=new Map
function hd(e,t){return{f:0,v:e,reactions:null,equals:mu,rv:0,wv:0}}function gd(e,t){const n=hd(e)
return gf(n),n}function vd(e,t=!1,n=!0){const r=hd(e)
return t||(r.equals=yu),wu&&n&&null!==Eu&&null!==Eu.l&&(Eu.l.s??=[]).push(r),r}function _d(e,t,n=!1){return null!==cf&&(!uf||0!==(cf.f&su))&&$u()&&4325394&cf.f&&!hf?.includes(e)&&function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),md(e,n?wd(t):t)}function md(e,t){if(!e.equals(t)){var n=e.v
af?pd.set(e,t):pd.set(e,n),e.v=t,Vu.ensure().capture(e,n),2&e.f&&(0!==(e.f&Zc)&&dd(e),jf(e,0===(e.f&au)?Xc:eu)),e.wv=Sf(),yd(e,Zc),!$u()||null===ff||0===(ff.f&Xc)||96&ff.f||(null===mf?function(e){mf=e}([e]):mf.push(e))}return t}function bd(e){_d(e,e.v+1)}function yd(e,t){var n=e.reactions
if(null!==n)for(var r=$u(),i=n.length,s=0;s<i;s++){var o=n[s],a=o.f
if(r||o!==ff){var l=0===(a&Zc)
l&&jf(o,t),2&a?0===(a&cu)&&(o.f|=cu,yd(o,eu)):l&&(0!==(a&Qc)&&null!==Yu&&Yu.add(o),td(o))}}}function wd(e){if("object"!=typeof e||null===e||fu in e)return e
const t=qc(e)
if(t!==Nc&&t!==Dc)return e
var n=new Map,r=Ic(e),i=gd(0),s=wf,o=e=>{if(wf===s)return e()
var t=cf,n=wf
df(null),kf(s)
var r=e()
return df(t),kf(n),r}
return r&&n.set("length",gd(e.length)),new Proxy(e,{defineProperty(e,t,r){"value"in r&&!1!==r.configurable&&!1!==r.enumerable&&!1!==r.writable||function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}()
var i=n.get(t)
return void 0===i?i=o(()=>{var e=gd(r.value)
return n.set(t,e),e}):_d(i,r.value,!0),!0},deleteProperty(e,t){var r=n.get(t)
if(void 0===r){if(t in e){const e=o(()=>gd(_u))
n.set(t,e),bd(i)}}else _d(r,_u),bd(i)
return!0},get(t,r,i){if(r===fu)return e
var s=n.get(r),a=r in t
if(void 0!==s||a&&!jc(t,r)?.writable||(s=o(()=>gd(wd(a?t[r]:_u))),n.set(r,s)),void 0!==s){var l=If(s)
return l===_u?void 0:l}return Reflect.get(t,r,i)},getOwnPropertyDescriptor(e,t){var r=Reflect.getOwnPropertyDescriptor(e,t)
if(r&&"value"in r){var i=n.get(t)
i&&(r.value=If(i))}else if(void 0===r){var s=n.get(t),o=s?.v
if(void 0!==s&&o!==_u)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return r},has(e,t){if(t===fu)return!0
var r=n.get(t),i=void 0!==r&&r.v!==_u||Reflect.has(e,t)
if((void 0!==r||null!==ff&&(!i||jc(e,t)?.writable))&&(void 0===r&&(r=o(()=>gd(i?wd(e[t]):_u)),n.set(t,r)),If(r)===_u))return!1
return i},set(e,t,s,a){var l=n.get(t),c=t in e
if(r&&"length"===t)for(var u=s;u<l.v;u+=1){var d=n.get(u+"")
void 0!==d?_d(d,_u):u in e&&(d=o(()=>gd(_u)),n.set(u+"",d))}void 0===l?c&&!jc(e,t)?.writable||(_d(l=o(()=>gd(void 0)),wd(s)),n.set(t,l)):(c=l.v!==_u,_d(l,o(()=>wd(s))))
var f=Reflect.getOwnPropertyDescriptor(e,t)
if(f?.set&&f.set.call(a,s),!c){if(r&&"string"==typeof t){var p=n.get("length"),h=Number(t)
Number.isInteger(h)&&h>=p.v&&_d(p,h+1)}bd(i)}return!0},ownKeys(e){If(i)
var t=Reflect.ownKeys(e).filter(e=>{var t=n.get(e)
return void 0===t||t.v!==_u})
for(var[r,s]of n)s.v===_u||r in e||t.push(r)
return t},setPrototypeOf(){!function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}()}})}function kd(e){try{if(null!==e&&"object"==typeof e&&fu in e)return e[fu]}catch{}return e}function xd(e,t){return Object.is(kd(e),kd(t))}var Sd,Ed,Pd,Cd
function Ld(e=""){return document.createTextNode(e)}function $d(e){return Pd.call(e)}function Td(e){return Cd.call(e)}function Od(e,t){return $d(e)}function Id(e,t=!1){var n=$d(e)
return n instanceof Comment&&""===n.data?Td(n):n}function Ad(e,t=1,n=!1){let r=e
for(;t--;)r=Td(r)
return r}let Md=!1
function Rd(e){var t=cf,n=ff
df(null),pf(null)
try{return e()}finally{df(t),pf(n)}}function jd(e,t,n,r=n){e.addEventListener(t,()=>Rd(n))
const i=e.__on_r
e.__on_r=i?()=>{i(),r(!0)}:()=>r(!0),Md||(Md=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Fd(e){null===ff&&null===cf&&function(){throw new Error("https://svelte.dev/e/effect_orphan")}(),null!==cf&&0!==(cf.f&au)&&null===ff&&function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}(),af&&function(){throw new Error("https://svelte.dev/e/effect_in_teardown")}()}function Nd(e,t,n,r=!0){var i=ff
null!==i&&0!==(i.f&tu)&&(e|=tu)
var s={ctx:Eu,deps:null,nodes_start:null,nodes_end:null,f:e|Zc,first:null,fn:t,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,transitions:null,wv:0,ac:null}
if(n)try{Tf(s),s.f|=ru}catch(o){throw Kd(s),o}else null!==t&&td(s)
if(r){var o=s
if(n&&null===o.deps&&null===o.teardown&&null===o.nodes_start&&o.first===o.last&&0===(o.f&ou)&&(o=o.first),null!==o&&(o.parent=i,null!==i&&function(e,t){var n=t.last
null===n?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}(o,i),null!==cf&&2&cf.f&&0===(e&Jc))){var a=cf;(a.effects??=[]).push(o)}}return s}function Dd(e){const t=Nd(8,null,!1)
return jf(t,Xc),t.teardown=e,t}function qd(e){Fd()
var t=ff.f
if(!(!cf&&0!==(t&Kc)&&0===(t&ru)))return Bd(e)
var n=Eu;(n.e??=[]).push(e)}function Bd(e){return Nd(1048580,e,!1)}function Hd(e){return Nd(4,e,!1)}function Ud(e,t=0){return Nd(8|t,e,!0)}function Gd(e,t=[],n=[]){id(t,n,t=>{Nd(8,()=>e(...t.map(If)),!0)})}function Wd(e,t=0){return Nd(Qc|t,e,!0)}function zd(e,t=!0){return Nd(524320,e,!0,t)}function Vd(e){var t=e.teardown
if(null!==t){const e=af,n=cf
lf(!0),df(null)
try{t.call(null)}finally{lf(e),df(n)}}}function Qd(e,t=!1){var n=e.first
for(e.first=e.last=null;null!==n;){const e=n.ac
null!==e&&Rd(()=>{e.abort(gu)})
var r=n.next
0!==(n.f&Jc)?n.parent=null:Kd(n,t),n=r}}function Kd(e,t=!0){var n=!1;(t||262144&e.f)&&null!==e.nodes_start&&null!==e.nodes_end&&(Jd(e.nodes_start,e.nodes_end),n=!0),Qd(e,t&&!n),$f(e,0),jf(e,nu)
var r=e.transitions
if(null!==r)for(const e of r)e.stop()
Vd(e)
var i=e.parent
null!==i&&null!==i.first&&Yd(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Jd(e,t){for(;null!==e;){var n=e===t?null:Td(e)
e.remove(),e=n}}function Yd(e){var t=e.parent,n=e.prev,r=e.next
null!==n&&(n.next=r),null!==r&&(r.prev=n),null!==t&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Xd(e,t,n=!0){var r=[]
ef(e,r,!0),Zd(r,()=>{n&&Kd(e),t&&t()})}function Zd(e,t){var n=e.length
if(n>0){var r=()=>--n||t()
for(var i of e)i.out(r)}else t()}function ef(e,t,n){if(0===(e.f&tu)){if(e.f^=tu,null!==e.transitions)for(const r of e.transitions)(r.is_global||n)&&t.push(r)
for(var r=e.first;null!==r;){var i=r.next
ef(r,t,!!(0!==(r.f&iu)||0!==(r.f&Kc))&&n),r=i}}}function tf(e){nf(e,!0)}function nf(e,t){if(0!==(e.f&tu)){e.f^=tu,0===(e.f&Xc)&&(jf(e,Zc),td(e))
for(var n=e.first;null!==n;){var r=n.next
nf(n,!!(0!==(n.f&iu)||0!==(n.f&Kc))&&t),n=r}if(null!==e.transitions)for(const n of e.transitions)(n.is_global||t)&&n.in()}}function rf(e,t){for(var n=e.nodes_start,r=e.nodes_end;null!==n;){var i=n===r?null:Td(n)
t.append(n),n=i}}let sf=!1
function of(e){sf=e}let af=!1
function lf(e){af=e}let cf=null,uf=!1
function df(e){cf=e}let ff=null
function pf(e){ff=e}let hf=null
function gf(e){null!==cf&&(null===hf?hf=[e]:hf.push(e))}let vf=null,_f=0,mf=null
let bf=1,yf=0,wf=yf
function kf(e){wf=e}let xf=!1
function Sf(){return++bf}function Ef(e){var t=e.f
if(0!==(t&Zc))return!0
if(0!==(t&eu)){var n=e.deps,r=0!==(t&au)
if(2&t&&(e.f&=-32769),null!==n){var i,s,o=0!==(t&lu),a=r&&null!==ff&&!xf,l=n.length
if((o||a)&&(null===ff||0===(ff.f&nu))){var c=e,u=c.parent
for(i=0;i<l;i++)s=n[i],!o&&s?.reactions?.includes(c)||(s.reactions??=[]).push(c)
o&&(c.f^=lu),a&&null!==u&&0===(u.f&au)&&(c.f^=au)}for(i=0;i<l;i++)if(Ef(s=n[i])&&fd(s),s.wv>e.wv)return!0}r&&(null===ff||xf)||jf(e,Xc)}return!1}function Pf(e,t,n=!0){var r=e.reactions
if(null!==r&&!hf?.includes(e))for(var i=0;i<r.length;i++){var s=r[i]
2&s.f?Pf(s,t,!1):t===s&&(n?jf(s,Zc):0!==(s.f&Xc)&&jf(s,eu),td(s))}}function Cf(e){var t=vf,n=_f,r=mf,i=cf,s=xf,o=hf,a=Eu,l=uf,c=wf,u=e.f
vf=null,_f=0,mf=null,xf=0!==(u&au)&&(uf||!sf||null===cf),cf=96&u?null:e,hf=null,Pu(e.ctx),uf=!1,wf=++yf,null!==e.ac&&(Rd(()=>{e.ac.abort(gu)}),e.ac=null)
try{e.f|=uu
var d=(0,e.fn)(),f=e.deps
if(null!==vf){var p
if($f(e,_f),null!==f&&_f>0)for(f.length=_f+vf.length,p=0;p<vf.length;p++)f[_f+p]=vf[p]
else e.deps=f=vf
if(!xf||2&u&&null!==e.reactions)for(p=_f;p<f.length;p++)(f[p].reactions??=[]).push(e)}else null!==f&&_f<f.length&&($f(e,_f),f.length=_f)
if($u()&&null!==mf&&!uf&&null!==f&&!(6146&e.f))for(p=0;p<mf.length;p++)Pf(mf[p],e)
return null!==i&&i!==e&&(yf++,null!==mf&&(null===r?r=mf:r.push(...mf))),0!==(e.f&du)&&(e.f^=du),d}catch(e){return Ru(e)}finally{e.f^=uu,vf=t,_f=n,mf=r,cf=i,xf=s,hf=o,Pu(a),uf=l,wf=c}}function Lf(e,t){let n=t.reactions
if(null!==n){var r=Ac.call(n,e)
if(-1!==r){var i=n.length-1
0===i?n=t.reactions=null:(n[r]=n[i],n.pop())}}null===n&&2&t.f&&(null===vf||!vf.includes(t))&&(jf(t,eu),768&t.f||(t.f^=lu),ud(t),$f(t,0))}function $f(e,t){var n=e.deps
if(null!==n)for(var r=t;r<n.length;r++)Lf(e,n[r])}function Tf(e){var t=e.f
if(0===(t&nu)){jf(e,Xc)
var n=ff,r=sf
ff=e,sf=!0
try{0!==(t&Qc)?function(e){for(var t=e.first;null!==t;){var n=t.next
0===(t.f&Kc)&&Kd(t),t=n}}(e):Qd(e),Vd(e)
var i=Cf(e)
e.teardown="function"==typeof i?i:null,e.wv=bf}finally{sf=r,ff=n}}}async function Of(){await Promise.resolve(),Qu()}function If(e){var t=!!(2&e.f)
if(null===cf||uf){if(t&&null===e.deps&&null===e.effects){var n=e,r=n.parent
null!==r&&0===(r.f&au)&&(n.f^=au)}}else if(!(null!==ff&&0!==(ff.f&nu))&&!hf?.includes(e)){var i=cf.deps
if(0!==(cf.f&uu))e.rv<yf&&(e.rv=yf,null===vf&&null!==i&&i[_f]===e?_f++:null===vf?vf=[e]:xf&&vf.includes(e)||vf.push(e))
else{(cf.deps??=[]).push(e)
var s=e.reactions
null===s?e.reactions=[cf]:s.includes(cf)||s.push(cf)}}if(af){if(pd.has(e))return pd.get(e)
if(t){var o=(n=e).v
return(0===(n.f&Xc)&&null!==n.reactions||Af(n))&&(o=dd(n)),pd.set(n,o),o}}else if(t){if(n=e,Bu?.has(n))return Bu.get(n)
Ef(n)&&fd(n)}if(Bu?.has(e))return Bu.get(e)
if(0!==(e.f&du))throw e.v
return e.v}function Af(e){if(e.v===_u)return!0
if(null===e.deps)return!1
for(const t of e.deps){if(pd.has(t))return!0
if(2&t.f&&Af(t))return!0}return!1}function Mf(e){var t=uf
try{return uf=!0,e()}finally{uf=t}}const Rf=-7169
function jf(e,t){e.f=e.f&Rf|t}function Ff(e){if("object"==typeof e&&e&&!(e instanceof EventTarget))if(fu in e)Nf(e)
else if(!Array.isArray(e))for(let t in e){const n=e[t]
"object"==typeof n&&n&&fu in n&&Nf(n)}}function Nf(e,t=new Set){if(!("object"!=typeof e||null===e||e instanceof EventTarget||t.has(e))){t.add(e),e instanceof Date&&e.getTime()
for(let n in e)try{Nf(e[n],t)}catch(e){}const n=qc(e)
if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const t=Fc(n)
for(let n in t){const r=t[n].get
if(r)try{r.call(e)}catch(e){}}}}}const Df=["touchstart","touchmove"]
function qf(e){return Df.includes(e)}const Bf=new Set,Hf=new Set
function Uf(e,t,n,r,i){var s={capture:r,passive:i},o=function(e,t,n,r={}){function i(e){if(r.capture||zf.call(t,e),!e.cancelBubble)return Rd(()=>n?.call(this,e))}return e.startsWith("pointer")||e.startsWith("touch")||"wheel"===e?Iu(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}(e,t,n,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Dd(()=>{t.removeEventListener(e,o,s)})}function Gf(e){for(var t=0;t<e.length;t++)Bf.add(e[t])
for(var n of Hf)n(e)}let Wf=null
function zf(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],s=i[0]||e.target
Wf=e
var o=0,a=Wf===e&&e.__root
if(a){var l=i.indexOf(a)
if(-1!==l&&(t===document||t===window))return void(e.__root=t)
var c=i.indexOf(t)
if(-1===c)return
l<=c&&(o=l)}if((s=i[o]||e.target)!==t){Rc(e,"currentTarget",{configurable:!0,get:()=>s||n})
var u=cf,d=ff
df(null),pf(null)
try{for(var f,p=[];null!==s;){var h=s.assignedSlot||s.parentNode||s.host||null
try{var g=s["__"+r]
if(null!=g&&(!s.disabled||e.target===s))if(Ic(g)){var[v,..._]=g
v.apply(s,[e,..._])}else g.call(s,e)}catch(e){f?p.push(e):f=e}if(e.cancelBubble||h===t||null===h)break
s=h}if(f){for(let e of p)queueMicrotask(()=>{throw e})
throw f}}finally{e.__root=t,delete e.currentTarget,df(u),pf(d)}}}function Vf(e){var t=document.createElement("template")
return t.innerHTML=e.replaceAll("<!>","\x3c!----\x3e"),t.content}function Qf(e,t){var n=ff
null===n.nodes_start&&(n.nodes_start=e,n.nodes_end=t)}function Kf(e,t){var n,r=!!(1&t),i=!!(2&t),s=!e.startsWith("<!>")
return()=>{void 0===n&&(n=Vf(s?e:"<!>"+e),r||(n=$d(n)))
var t=i||Ed?document.importNode(n,!0):n.cloneNode(!0)
r?Qf($d(t),t.lastChild):Qf(t,t)
return t}}function Jf(e=""){var t=Ld(e+"")
return Qf(t,t),t}function Yf(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Ld()
return e.append(t,n),Qf(t,n),e}function Xf(e,t){null!==e&&e.before(t)}let Zf=!0
function ep(e,t){var n=null==t?"":"object"==typeof t?t+"":t
n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}function tp(e,t){return function(e,{target:t,anchor:n,props:r={},events:i,context:s,intro:o=!0}){!function(){if(void 0===Sd){Sd=window,Ed=/Firefox/.test(navigator.userAgent)
var e=Element.prototype,t=Node.prototype,n=Text.prototype
Pd=jc(t,"firstChild").get,Cd=jc(t,"nextSibling").get,Bc(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Bc(n)&&(n.__t=void 0)}}()
var a=new Set,l=e=>{for(var n=0;n<e.length;n++){var r=e[n]
if(!a.has(r)){a.add(r)
var i=qf(r)
t.addEventListener(r,zf,{passive:i})
var s=np.get(r)
void 0===s?(document.addEventListener(r,zf,{passive:i}),np.set(r,1)):np.set(r,s+1)}}}
l(Mc(Bf)),Hf.add(l)
var c=void 0,u=function(e){Vu.ensure()
const t=Nd(524352,e,!0)
return(e={})=>new Promise(n=>{e.outro?Xd(t,()=>{Kd(t),n(void 0)}):(Kd(t),n(void 0))})}(()=>{var u=n??t.appendChild(Ld())
return function(e,t,n){new rd(e,t,n)}(u,{pending:()=>{}},t=>{s&&(Cu({}),Eu.c=s)
i&&(r.$$events=i),Zf=o,c=e(t,r)||{},Zf=!0,s&&Lu()}),()=>{for(var e of a){t.removeEventListener(e,zf)
var r=np.get(e)
0===--r?(document.removeEventListener(e,zf),np.delete(e)):np.set(e,r)}Hf.delete(l),u!==n&&u.parentNode?.removeChild(u)}})
return rp.set(c,u),c}(e,t)}const np=new Map
let rp=new WeakMap
function ip(e,t){const n=rp.get(e)
return n?(rp.delete(e),n(t)):Promise.resolve()}class sp{anchor
#O=new Map
#I=new Map
#A=new Map
#M=!0
constructor(e,t=!0){this.anchor=e,this.#M=t}#u=()=>{var e=Du
if(this.#O.has(e)){var t=this.#O.get(e),n=this.#I.get(t)
if(n)tf(n)
else{var r=this.#A.get(t)
r&&(this.#I.set(t,r.effect),this.#A.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(const[t,n]of this.#O){if(this.#O.delete(t),t===e)break
const r=this.#A.get(n)
r&&(Kd(r.effect),this.#A.delete(n))}for(const[e,r]of this.#I){if(e===t)continue
const i=()=>{if(Array.from(this.#O.values()).includes(e)){var t=document.createDocumentFragment()
rf(r,t),t.append(Ld()),this.#A.set(e,{effect:r,fragment:t})}else Kd(r)
this.#I.delete(e)}
this.#M||!n?Xd(r,i,!1):i()}}}
ensure(e,t){var n=Du
!t||this.#I.has(e)||this.#A.has(e)||this.#I.set(e,zd(()=>t(this.anchor)))
this.#O.set(n,e),this.#u()}}function op(e,t,n,r,i){var s=$u(),o=_u,a=s?hd(o):vd(o,!1,!1),l=s?hd(o):vd(o,!1,!1),c=new sp(e)
Wd(()=>{var e=t(),s=!1
if(function(e){return"function"==typeof e?.then}(e)){var o=sd(),u=!1
const t=e=>{if(!s){u=!0,o()
try{e()}finally{od(),zu||Qu()}}}
e.then(e=>{t(()=>{md(a,e),c.ensure(1,r&&(e=>r(e,a)))})},e=>{t(()=>{if(md(l,e),c.ensure(1,i&&(e=>i(e,l))),!i)throw l.v})}),Iu(()=>{u||t(()=>{c.ensure(0,n)})})}else md(a,e),c.ensure(1,r&&(e=>r(e,a)))
return()=>{s=!0}})}function ap(e,t,n=!1){var r=new sp(e)
function i(e,t){r.ensure(e,t)}Wd(()=>{var e=!1
t((t,n=!0)=>{e=!0,i(n,t)}),e||i(!1,null)},n?iu:0)}function lp(e,t){Ud(()=>{var n=t()
for(var r in n){var i=n[r]
i?e.style.setProperty(r,i):e.style.removeProperty(r)}})}function cp(e,t){return t}function up(e,t,n,r,i,s=null){var o=e,a={flags:t,items:new Map,first:null}
!(4&t)||(o=e.appendChild(Ld()))
var l,c,u=null,d=!1,f=new Map,p=cd(()=>{var e=n()
return Ic(e)?e:null==e?[]:Mc(e)})
function h(){!function(e,t,n,r,i,s,o,a,l){var c,u,d,f,p,h,g=!!(8&o),v=!!(3&o),_=t.length,m=n.items,b=n.first,y=b,w=null,k=[],x=[]
if(g)for(h=0;h<_;h+=1)f=a(d=t[h],h),void 0!==(p=m.get(f))&&(p.a?.measure(),(u??=new Set).add(p))
for(h=0;h<_;h+=1)if(f=a(d=t[h],h),void 0!==(p=m.get(f))){if(v&&dp(p,d,h,o),0!==(p.e.f&tu)&&(tf(p.e),g&&(p.a?.unfix(),(u??=new Set).delete(p))),p!==y){if(void 0!==c&&c.has(p)){if(k.length<x.length){var S,E=x[0]
w=E.prev
var P=k[0],C=k[k.length-1]
for(S=0;S<k.length;S+=1)pp(k[S],E,i)
for(S=0;S<x.length;S+=1)c.delete(x[S])
hp(n,P.prev,C.next),hp(n,w,P),hp(n,C,E),y=E,w=C,h-=1,k=[],x=[]}else c.delete(p),pp(p,y,i),hp(n,p.prev,p.next),hp(n,p,null===w?n.first:w.next),hp(n,w,p),w=p
continue}for(k=[],x=[];null!==y&&y.k!==f;)0===(y.e.f&tu)&&(c??=new Set).add(y),x.push(y),y=y.next
if(null===y)continue
p=y}k.push(p),w=p,y=p.next}else{var L=r.get(f)
if(void 0!==L){r.delete(f),m.set(f,L)
var $=w?w.next:y
hp(n,w,L),hp(n,L,$),pp(L,$,i),w=L}else{w=fp(y?y.e.nodes_start:i,n,w,null===w?n.first:w.next,d,f,h,s,o,l)}m.set(f,w),k=[],x=[],y=w.next}if(null!==y||void 0!==c){for(var T=void 0===c?[]:Mc(c);null!==y;)0===(y.e.f&tu)&&T.push(y),y=y.next
var O=T.length
if(O>0){var I=4&o&&0===_?i:null
if(g){for(h=0;h<O;h+=1)T[h].a?.measure()
for(h=0;h<O;h+=1)T[h].a?.fix()}!function(e,t,n){for(var r=e.items,i=[],s=t.length,o=0;o<s;o++)ef(t[o].e,i,!0)
var a=s>0&&0===i.length&&null!==n
if(a){var l=n.parentNode
l.textContent="",l.append(n),r.clear(),hp(e,t[0].prev,t[s-1].next)}Zd(i,()=>{for(var n=0;n<s;n++){var i=t[n]
a||(r.delete(i.k),hp(e,i.prev,i.next)),Kd(i.e,!a)}})}(n,T,I)}}g&&Iu(()=>{if(void 0!==u)for(p of u)p.a?.apply()})
for(var A of(e.first=n.first&&n.first.e,e.last=w&&w.e,r.values()))Kd(A.e)
r.clear()}(c,l,a,f,o,i,t,r,n),null!==s&&(0===l.length?u?tf(u):u=zd(()=>s(o)):null!==u&&Xd(u,()=>{u=null}))}Wd(()=>{c??=ff
var e=(l=If(p)).length
d&&0===e||(d=0===e,h(),If(p))})}function dp(e,t,n,r){1&r&&md(e.v,t),2&r?md(e.i,n):e.i=n}function fp(e,t,n,r,i,s,o,a,l,c,u){var d=!!(1&l)?!(16&l)?vd(i,!1,!1):hd(i):i,f=2&l?hd(o):o,p={i:f,v:d,k:s,a:null,e:null,prev:n,next:r}
try{if(null===e)document.createDocumentFragment().append(e=Ld())
return p.e=zd(()=>a(e,d,f,c),false),p.e.prev=n&&n.e,p.e.next=r&&r.e,null===n?u||(t.first=p):(n.next=p,n.e.next=p.e),null!==r&&(r.prev=p,r.e.prev=p.e),p}finally{}}function pp(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,s=e.e.nodes_start;null!==s&&s!==r;){var o=Td(s)
i.before(s),s=o}}function hp(e,t,n){null===t?e.first=n:(t.next=n,t.e.next=n&&n.e),null!==n&&(n.prev=t,n.e.prev=t&&t.e)}function gp(e,t,n=!1,r=!1,i=!1){var s=e,o=""
Gd(()=>{var e=ff
if(o!==(o=t()??"")&&(null!==e.nodes_start&&(Jd(e.nodes_start,e.nodes_end),e.nodes_start=e.nodes_end=null),""!==o)){var i=o+""
n?i=`<svg>${i}</svg>`:r&&(i=`<math>${i}</math>`)
var a=Vf(i)
if((n||r)&&(a=$d(a)),Qf($d(a),a.lastChild),n||r)for(;$d(a);)s.before($d(a))
else s.before(a)}})}function vp(e,t,...n){var r=new sp(e)
Wd(()=>{const e=t()??null
r.ensure(e,e&&(t=>e(t,...n)))},iu)}function _p(e,t,n){var r=new sp(e)
Wd(()=>{var e=t()??null
r.ensure(e,e&&(t=>n(t,e)))},iu)}function mp(e,t,n){Hd(()=>{var r=Mf(()=>t(e,n?.())||{})
if(n&&r?.update){var i=!1,s={}
Ud(()=>{var e=n()
Ff(e),i&&bu(s,e)&&(s=e,r.update(e))}),i=!0}if(r?.destroy)return()=>r.destroy()})}function bp(e){var t,n,r=""
if("string"==typeof e||"number"==typeof e)r+=e
else if("object"==typeof e)if(Array.isArray(e)){var i=e.length
for(t=0;t<i;t++)e[t]&&(n=bp(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n)
return r}function yp(e){return"object"==typeof e?function(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=bp(e))&&(r&&(r+=" "),r+=t)
return r}(e):e??""}const wp=[..." \t\n\r\f \v\ufeff"]
function kp(e,t=!1){var n=t?" !important;":";",r=""
for(var i in e){var s=e[i]
null!=s&&""!==s&&(r+=" "+i+": "+s+n)}return r}function xp(e){return"-"!==e[0]||"-"!==e[1]?e.toLowerCase():e}function Sp(e,t,n,r,i,s){var o=e.__className
if(o!==n||void 0===o){var a=function(e,t,n){var r=null==e?"":""+e
if(t&&(r=r?r+" "+t:t),n)for(var i in n)if(n[i])r=r?r+" "+i:i
else if(r.length)for(var s=i.length,o=0;(o=r.indexOf(i,o))>=0;){var a=o+s
0!==o&&!wp.includes(r[o-1])||a!==r.length&&!wp.includes(r[a])?o=a:r=(0===o?"":r.substring(0,o))+r.substring(a+1)}return""===r?null:r}(n,r,s)
null==a?e.removeAttribute("class"):e.className=a,e.__className=n}else if(s&&i!==s)for(var l in s){var c=!!s[l]
null!=i&&c===!!i[l]||e.classList.toggle(l,c)}return s}function Ep(e,t={},n,r){for(var i in n){var s=n[i]
t[i]!==s&&(null==n[i]?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function Pp(e,t,n,r){if(e.__style!==t){var i=function(e,t){if(t){var n,r,i=""
if(Array.isArray(t)?(n=t[0],r=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim()
var s=!1,o=0,a=!1,l=[]
n&&l.push(...Object.keys(n).map(xp)),r&&l.push(...Object.keys(r).map(xp))
var c=0,u=-1
const t=e.length
for(var d=0;d<t;d++){var f=e[d]
if(a?"/"===f&&"*"===e[d-1]&&(a=!1):s?s===f&&(s=!1):"/"===f&&"*"===e[d+1]?a=!0:'"'===f||"'"===f?s=f:"("===f?o++:")"===f&&o--,!a&&!1===s&&0===o)if(":"===f&&-1===u)u=d
else if(";"===f||d===t-1){if(-1!==u){var p=xp(e.substring(c,u).trim())
l.includes(p)||(";"!==f&&d++,i+=" "+e.substring(c,d).trim()+";")}c=d+1,u=-1}}}return n&&(i+=kp(n)),r&&(i+=kp(r,!0)),""===(i=i.trim())?null:i}return null==e?null:String(e)}(t,r)
null==i?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else r&&(Array.isArray(r)?(Ep(e,n?.[0],r[0]),Ep(e,n?.[1],r[1],"important")):Ep(e,n,r))
return r}function Cp(e,t,n=!1){if(e.multiple){if(null==t)return
if(!Ic(t))return void console.warn("https://svelte.dev/e/select_multiple_invalid_value")
for(var r of e.options)r.selected=t.includes($p(r))}else{for(r of e.options){if(xd($p(r),t))return void(r.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}}function Lp(e,t,n=t){var r=new WeakSet,i=!0
jd(e,"change",t=>{var i,s=t?"[selected]":":checked"
if(e.multiple)i=[].map.call(e.querySelectorAll(s),$p)
else{var o=e.querySelector(s)??e.querySelector("option:not([disabled])")
i=o&&$p(o)}n(i),null!==Du&&r.add(Du)}),Hd(()=>{var s=t()
if(e===document.activeElement){var o=qu??Du
if(r.has(o))return}if(Cp(e,s,i),i&&void 0===s){var a=e.querySelector(":checked")
null!==a&&(s=$p(a),n(s))}e.__value=s,i=!1}),function(e){var t=new MutationObserver(()=>{Cp(e,e.__value)})
t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Dd(()=>{t.disconnect()})}(e)}function $p(e){return"__value"in e?e.__value:e.value}const Tp=Symbol("is custom element"),Op=Symbol("is html")
function Ip(e,t){var n=Mp(e)
n.value!==(n.value=t??void 0)&&(e.value!==t||0===t&&"PROGRESS"===e.nodeName)&&(e.value=t??"")}function Ap(e,t,n,r){var i=Mp(e)
i[t]!==(i[t]=n)&&("loading"===t&&(e[hu]=n),null==n?e.removeAttribute(t):"string"!=typeof n&&function(e){var t,n=e.getAttribute("is")||e.nodeName,r=Rp.get(n)
if(r)return r
Rp.set(n,r=[])
var i=e,s=Element.prototype
for(;s!==i;){for(var o in t=Fc(i))t[o].set&&r.push(o)
i=qc(i)}return r}(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Mp(e){return e.__attributes??={[Tp]:e.nodeName.includes("-"),[Op]:"http://www.w3.org/1999/xhtml"===e.namespaceURI}}var Rp=new Map
const jp={tick:e=>requestAnimationFrame(e),now:()=>performance.now(),tasks:new Set}
function Fp(){const e=jp.now()
jp.tasks.forEach(t=>{t.c(e)||(jp.tasks.delete(t),t.f())}),0!==jp.tasks.size&&jp.tick(Fp)}function Np(e,t){Rd(()=>{e.dispatchEvent(new CustomEvent(t))})}function Dp(e){if("float"===e)return"cssFloat"
if("offset"===e)return"cssOffset"
if(e.startsWith("--"))return e
const t=e.split("-")
return 1===t.length?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function qp(e){const t={},n=e.split(";")
for(const e of n){const[n,r]=e.split(":")
if(!n||void 0===r)break
t[Dp(n.trim())]=r.trim()}return t}const Bp=e=>e
function Hp(e,t,n,r){var i,s,o,a=!!(4&e),l=t.inert,c=t.style.overflow
function u(){return Rd(()=>i??=n()(t,r?.()??{},{direction:"both"}))}var d={is_global:a,in(){t.inert=l,Np(t,"introstart"),s=Up(t,u(),o,1,()=>{Np(t,"introend"),s?.abort(),s=i=void 0,t.style.overflow=c})},out(e){t.inert=!0,Np(t,"outrostart"),o=Up(t,u(),s,0,()=>{Np(t,"outroend"),e?.()})},stop:()=>{s?.abort(),o?.abort()}},f=ff
if((f.transitions??=[]).push(d),Zf){var p=a
if(!p){for(var h=f.parent;h&&0!==(h.f&iu);)for(;(h=h.parent)&&0===(h.f&Qc););p=!h||0!==(h.f&ru)}p&&Hd(()=>{Mf(()=>d.in())})}}function Up(e,t,n,r,i){var s=1===r
if(Hc(t)){var o,a=!1
return Iu(()=>{if(!a){var l=t({direction:s?"in":"out"})
o=Up(e,l,n,r,i)}}),{abort:()=>{a=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(n?.deactivate(),!t?.duration)return i(),{abort:Uc,deactivate:Uc,reset:Uc,t:()=>r}
const{delay:l=0,css:c,tick:u,easing:d=Bp}=t
var f=[]
if(s&&void 0===n&&(u&&u(0,1),c)){var p=qp(c(0,1))
f.push(p,p)}var h=()=>1-r,g=e.animate(f,{duration:l,fill:"forwards"})
return g.onfinish=()=>{g.cancel()
var s=n?.t()??1-r
n?.abort()
var o=r-s,a=t.duration*Math.abs(o),l=[]
if(a>0){var f=!1
if(c)for(var p=Math.ceil(a/(1e3/60)),v=0;v<=p;v+=1){var _=s+o*d(v/p),m=qp(c(_,1-_))
l.push(m),f||="hidden"===m.overflow}f&&(e.style.overflow="hidden"),h=()=>{var e=g.currentTime
return s+o*d(e/a)},u&&function(e){let t
0===jp.tasks.size&&jp.tick(Fp),new Promise(n=>{jp.tasks.add(t={c:e,f:n})})}(()=>{if("running"!==g.playState)return!1
var e=h()
return u(e,1-e),!0})}(g=e.animate(l,{duration:a,fill:"forwards"})).onfinish=()=>{h=()=>r,u?.(r,1-r),i()}},{abort:()=>{g&&(g.cancel(),g.effect=null,g.onfinish=Uc)},deactivate:()=>{i=Uc},reset:()=>{0===r&&u?.(1,0)},t:()=>h()}}function Gp(e,t,n=t){var r=new WeakSet
jd(e,"input",async i=>{var s=i?e.defaultValue:e.value
if(s=Qp(e)?Kp(s):s,n(s),null!==Du&&r.add(Du),await Of(),s!==(s=t())){var o=e.selectionStart,a=e.selectionEnd,l=e.value.length
if(e.value=s??"",null!==a){var c=e.value.length
o===a&&a===l&&c>l?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=o,e.selectionEnd=Math.min(a,c))}}}),null==Mf(t)&&e.value&&(n(Qp(e)?Kp(e.value):e.value),null!==Du&&r.add(Du)),Ud(()=>{var n=t()
if(e===document.activeElement){var i=qu??Du
if(r.has(i))return}Qp(e)&&n===Kp(e.value)||("date"!==e.type||n||e.value)&&n!==e.value&&(e.value=n??"")})}const Wp=new Set
function zp(e,t,n,r,i=r){var s="checkbox"===n.getAttribute("type"),o=e
if(null!==t)for(var a of t)o=o[a]??=[]
o.push(n),jd(n,"change",()=>{var e=n.__value
s&&(e=function(e,t,n){for(var r=new Set,i=0;i<e.length;i+=1)e[i].checked&&r.add(e[i].__value)
n||r.delete(t)
return Array.from(r)}(o,e,n.checked)),i(e)},()=>i(s?[]:null)),Ud(()=>{var e=r()
s?(e=e||[],n.checked=e.includes(n.__value)):n.checked=xd(n.__value,e)}),Dd(()=>{var e=o.indexOf(n);-1!==e&&o.splice(e,1)}),Wp.has(o)||(Wp.add(o),Iu(()=>{o.sort((e,t)=>4===e.compareDocumentPosition(t)?-1:1),Wp.delete(o)})),Iu(()=>{})}function Vp(e,t,n=t){jd(e,"change",t=>{var r=t?e.defaultChecked:e.checked
n(r)}),null==Mf(t)&&n(e.checked),Ud(()=>{var n=t()
e.checked=Boolean(n)})}function Qp(e){var t=e.type
return"number"===t||"range"===t}function Kp(e){return""===e?null:+e}class Jp{#R=new WeakMap
#j
#F
static entries=new WeakMap
constructor(e){this.#F=e}observe(e,t){var n=this.#R.get(e)||new Set
return n.add(t),this.#R.set(e,n),this.#N().observe(e,this.#F),()=>{var n=this.#R.get(e)
n.delete(t),0===n.size&&(this.#R.delete(e),this.#j.unobserve(e))}}#N(){return this.#j??(this.#j=new ResizeObserver(e=>{for(var t of e)for(var n of(Jp.entries.set(t.target,t),this.#R.get(t.target)||[]))n(t)}))}}var Yp=new Jp({box:"border-box"})
function Xp(e,t,n){var r=Yp.observe(e,()=>n(e[t]))
Hd(()=>(Mf(()=>n(e[t])),r))}function Zp(e,t){return e===t||e?.[fu]===t}function eh(e={},t,n,r){return Hd(()=>{var r,i
return Ud(()=>{r=i,i=[],Mf(()=>{e!==n(...i)&&(t(e,...i),r&&Zp(n(...r),e)&&t(null,...r))})}),()=>{Iu(()=>{i&&Zp(n(...i),e)&&t(null,...i)})}}),e}function th(e=!1){const t=Eu,n=t.l.u
if(!n)return
let r=()=>Ff(t.s)
if(e){let e=0,n={}
const i=ad(()=>{let r=!1
const i=t.s
for(const e in i)i[e]!==n[e]&&(n[e]=i[e],r=!0)
return r&&e++,e})
r=()=>If(i)}n.b.length&&function(e){Fd(),Nd(1048584,e,!0)}(()=>{nh(t,r),Wc(n.b)}),qd(()=>{const e=Mf(()=>n.m.map(Gc))
return()=>{for(const t of e)"function"==typeof t&&t()}}),n.a.length&&qd(()=>{nh(t,r),Wc(n.a)})}function nh(e,t){if(e.l.s)for(const t of e.l.s)If(t)
t()}function rh(e,t,n){if(null==e)return t(void 0),n&&n(void 0),Uc
const r=Mf(()=>e.subscribe(t,n))
return r.unsubscribe?()=>r.unsubscribe():r}const ih=[]
function sh(e,t=Uc){let n=null
const r=new Set
function i(t){if(bu(e,t)&&(e=t,n)){const t=!ih.length
for(const t of r)t[1](),ih.push(t,e)
if(t){for(let e=0;e<ih.length;e+=2)ih[e][0](ih[e+1])
ih.length=0}}}function s(t){i(t(e))}return{set:i,update:s,subscribe:function(o,a=Uc){const l=[o,a]
return r.add(l),1===r.size&&(n=t(i,s)||Uc),o(e),()=>{r.delete(l),0===r.size&&n&&(n(),n=null)}}}}function oh(e,t,n){const r=!Array.isArray(e),i=r?[e]:e
if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const s=t.length<2
return function(e,t){return{subscribe:sh(e,t).subscribe}}(n,(e,n)=>{let o=!1
const a=[]
let l=0,c=Uc
const u=()=>{if(l)return
c()
const i=t(r?a[0]:a,e,n)
s?e(i):c="function"==typeof i?i:Uc},d=i.map((e,t)=>rh(e,e=>{a[t]=e,l&=~(1<<t),o&&u()},()=>{l|=1<<t}))
return o=!0,u(),function(){Wc(d),c(),o=!1}})}function ah(e){let t
return rh(e,e=>t=e)(),t}let lh=!1,ch=Symbol()
function uh(e,t,n){const r=n[t]??={store:null,source:vd(void 0),unsubscribe:Uc}
if(r.store!==e&&!(ch in n))if(r.unsubscribe(),r.store=e??null,null==e)r.source.v=void 0,r.unsubscribe=Uc
else{var i=!0
r.unsubscribe=rh(e,e=>{i?r.source.v=e:_d(r.source,e)}),i=!1}return e&&ch in n?ah(e):If(r.source)}function dh(e,t){return e.set(t),t}function fh(){const e={}
return[e,function(){Dd(()=>{for(var t in e){e[t].unsubscribe()}Rc(e,ch,{enumerable:!1,value:!0})})}]}const ph={get(e,t){let n=e.props.length
for(;n--;){let r=e.props[n]
if(Hc(r)&&(r=r()),"object"==typeof r&&null!==r&&t in r)return r[t]}},set(e,t,n){let r=e.props.length
for(;r--;){let i=e.props[r]
Hc(i)&&(i=i())
const s=jc(i,t)
if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length
for(;n--;){let r=e.props[n]
if(Hc(r)&&(r=r()),"object"==typeof r&&null!==r&&t in r){const e=jc(r,t)
return e&&!e.configurable&&(e.configurable=!0),e}}},has(e,t){if(t===fu||t===pu)return!1
for(let n of e.props)if(Hc(n)&&(n=n()),null!=n&&t in n)return!0
return!1},ownKeys(e){const t=[]
for(let n of e.props)if(Hc(n)&&(n=n()),n){for(const e in n)t.includes(e)||t.push(e)
for(const e of Object.getOwnPropertySymbols(n))t.includes(e)||t.push(e)}return t}}
function hh(e,t,n,r){var i,s,o=!wu||!!(2&n),a=!!(8&n),l=!!(16&n),c=r,u=!0,d=()=>(u&&(u=!1,c=l?Mf(r):r),c)
if(a){var f=fu in e||pu in e
i=jc(e,t)?.set??(f&&t in e?n=>e[t]=n:void 0)}var p,h=!1
if(a?[s,h]=function(e){var t=lh
try{return lh=!1,[e(),lh]}finally{lh=t}}(()=>e[t]):s=e[t],void 0===s&&void 0!==r&&(s=d(),i&&(o&&function(){throw new Error("https://svelte.dev/e/props_invalid_value")}(),i(s))),p=o?()=>{var n=e[t]
return void 0===n?d():(u=!0,n)}:()=>{var n=e[t]
return void 0!==n&&(c=void 0),void 0===n?c:n},o&&!(4&n))return p
if(i){var g=e.$$legacy
return function(e,t){return arguments.length>0?(o&&t&&!g&&!h||i(t?p():e),e):p()}}var v=!1,_=(1&n?ad:cd)(()=>(v=!1,p()))
a&&If(_)
var m=ff
return function(e,t){if(arguments.length>0){const n=t?If(_):o&&a?wd(e):e
return _d(_,n),v=!0,void 0!==c&&(c=n),e}return af&&v||0!==(m.f&nu)?_.v:If(_)}}function gh(e){null===Eu&&vu(),wu&&null!==Eu.l?function(e){var t=e.l
return t.u??={a:[],b:[],m:[]}}(Eu).m.push(e):qd(()=>{const t=Mf(e)
if("function"==typeof t)return t})}function vh(e){null===Eu&&vu(),gh(()=>()=>Mf(e))}const _h=sh("")
"undefined"!=typeof window&&((window.__svelte??={}).v??=new Set).add("5")
const mh=e=>e
function bh(e){const t=e-1
return t*t*t+1}function yh(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function wh(e,{delay:t=0,duration:n=400,easing:r=mh}={}){const i=+getComputedStyle(e).opacity
return{delay:t,duration:n,easing:r,css:e=>"opacity: "+e*i}}function kh(e,{delay:t=0,duration:n=400,easing:r=bh,x:i=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-o),[d,f]=yh(i),[p,h]=yh(s)
return{delay:t,duration:n,easing:r,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*d}${f}, ${(1-e)*p}${h});\n\t\t\topacity: ${l-u*t}`}}function xh(e,{delay:t=0,duration:n=400,easing:r=bh,axis:i="y"}={}){const s=getComputedStyle(e),o=+s.opacity,a="y"===i?"height":"width",l=parseFloat(s[a]),c="y"===i?["top","bottom"]:["left","right"],u=c.map(e=>`${e[0].toUpperCase()}${e.slice(1)}`),d=parseFloat(s[`padding${u[0]}`]),f=parseFloat(s[`padding${u[1]}`]),p=parseFloat(s[`margin${u[0]}`]),h=parseFloat(s[`margin${u[1]}`]),g=parseFloat(s[`border${u[0]}Width`]),v=parseFloat(s[`border${u[1]}Width`])
return{delay:t,duration:n,easing:r,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*o};${a}: ${e*l}px;padding-${c[0]}: ${e*d}px;padding-${c[1]}: ${e*f}px;margin-${c[0]}: ${e*p}px;margin-${c[1]}: ${e*h}px;border-${c[0]}-width: ${e*g}px;border-${c[1]}-width: ${e*v}px;min-${a}: 0`}}var Sh=(e,t)=>{_d(t,!1)},Eh=Kf('<div role="alert" class="svelte-8uspok"><p class="svelte-8uspok"> </p></div>')
function Ph(e,t){Cu(t,!0)
const n=()=>uh(_h,"$alert",r),[r,i]=fh()
let s=hh(t,"ms",3,3e3),o=gd(!1),a=0,l=gd("")
const c=(e,t)=>{clearTimeout(a),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
_d(l,`translate(${t}px, ${e.offsetTop}px)`),_d(o,!0)}(),t>0&&(a=setTimeout(()=>{_d(o,!1),dh(_h,"")},t))):_d(o,!1)}
qd(()=>{c(n(),s())}),vh(()=>clearTimeout(a))
var u=Yf(),d=Id(u),f=e=>{var t=Eh()
let r
t.__click=[Sh,o]
var i=Od(t),s=Od(i)
Gd(e=>{r=Pp(t,"",r,e),ep(s,n())},[()=>({transform:If(l)})]),Hp(3,t,()=>kh,()=>({delay:250,duration:300,x:0,y:-100,opacity:.5})),Xf(e,t)}
ap(d,e=>{If(o)&&e(f)}),Xf(e,u),Lu(),i()}Gf(["click"])
let Ch=!1
function Lh(e){e&&(Ch||(Ch=!0,tp(Ph,{target:document.body})),_h.set(e))}function $h(e,t){return Array.from(e,t)}function Th(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function Oh(e,t){return $h(Th(e,t))}function Ih(e){return e.trim()}function Ah(e){const t=n(e)
if(Hl(t))return Ih(t)}function Mh(e,t){return Ah(t).includes(e)}function Rh(e,...t){return(...n)=>e(...t,...n)}let jh=0,Fh=0,Nh=0
function Dh(){return jh||(jh=t("pCL")),jh}function qh(){return Fh||(Fh=t("pCC")),Fh}function Bh(){return Nh||(Nh=t("pCR")),Nh}function Hh(){const e=Oh("a",Dh()).filter(function(e){return Rh(Mh,e)}("message"))
e.length&&async function(){const e=new Audio(ql("defaultMessageSound"))
try{await e.play()}catch(e){Lh("Message Sound Not Allowed")}}()}function Uh(e,t,n,r){var i
uc(e,t,n,{once:!0,...(i=r,Bl(i)?{capture:i}:i)})}let Gh=0,Wh=0,zh=0,Vh=0,Qh=0,Kh=0
function Jh(e){Wh=e.clientX,zh=e.clientY}function Yh(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(Gh,null).transform)
Vh=e[0]-Wh,Qh=e[1]-zh}function Xh(e){e.clientX===Wh&&e.clientY===zh||(Gh.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+Vh).toString()}, ${(e.clientY+Qh).toString()})`,Jh(e))}function Zh(e){return function(e){const t=performance.now()
t-Kh>16&&(Xh(e),Kh=t)}(e),e.preventDefault(),!1}function eg(e){return Xh(e),function(e,t,n,r){e instanceof EventTarget&&e.removeEventListener(t,n,r)}(document.body,"dragover",Zh),e.preventDefault(),!1}function tg(e,t){!function(e,t){Gh=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),Jh(t),Yh(),Kh=0,t.dataTransfer.setData("text/plain",""),uc(document.body,"dragover",Zh),Uh(document.body,"drop",eg)}function ng(e,t){e.draggable=!0,uc(e,"dragstart",Rh(tg,t))}function rg(e){return String(e).replaceAll(" ","_")}const ig={}
function sg(e,t,n){if(!e)return
const r=function(e,t){let n=rg(e)
return t&&(n+=`__${rg(t)}`),n}(e,t),i=function(e,t){let n=e
return t&&(n+=`__${rg(t)}`),n}(r,n)
ig[i]||(ig[i]=!0,Po(r,function(e){return e?{eventLabel:e}:null}(n)))}let og=0
function ag(e){const t=l(/\sguildId: (?<id>\d{1,6}),/,n(e))
t&&(og=Number(t))}function lg(){return og||Oh("script",document.body).forEach(ag),og}function cg(e){return Object.entries(e)}function ug(e,t,[n,r]){Ql(r)&&null!==r?e(t[n],r):t[n]=r}function dg(e,t){cg(t).forEach(Rh(ug,dg,e))}function fg(e,t){const n=document.createElement(e)
return t&&dg(n,t),n}function pg(e){return fg("div",e)}function hg(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function gg(e,t){return $h(hg(e,t))}function vg(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function _g(e,t){t instanceof Element&&(t.innerHTML=String(e))}const mg={id:"content",style:{display:"none"}},bg={width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}
function yg(e){let n=t("content")
n?_g("",n):(n=pg(mg),vg(document.body,n)),$(n).dialog(bg),gg("ui-dialog-titlebar-close").forEach(e=>e.blur()),e(n)}async function wg(e){(await e).default()}function kg(){wg(import("./mountBuffLog.svelte-CbmJ4U6d.js"))}function xg(){wg(import("./mountCombatLog.svelte-DglglgTq.js"))}function Sg(){wg(import("./mountCreatureLog.svelte-AkQRRNPz.js"))}function Eg(){wg(import("./mountFsboxlog.svelte-DAUTBD7K.js"))}function Pg(){wg(Promise.resolve().then(function(){return kS}))}function Cg(){wg(import("./mountGuildTracker.svelte-YHTIvMz1.js"))}async function Lg(e){(await import("./injectAuctionSearch-Dw0rsPiA.js")).default(e)}async function $g(e){const{injectFindBuffs:t}=await import("./findBuffs-T5WmWe80.js")
t(e)}async function Tg(e){const{injectFindOther:t}=await import("./findBuffs-T5WmWe80.js")
t(e)}async function Og(e){(await import("./injectOnlinePlayers-RmLTTWdm.js")).default(e)}function Ig(){wg(Promise.resolve().then(function(){return LE}))}function Ag(){wg(import("./mountQuickLinksMgr.svelte-2QoT1fFA.js"))}async function Mg(e){(await import("./quickWear-EAbn-n2-.js")).default(e)}function Rg(){wg(import("./mountRecipeMgr.svelte-b83FeA5q.js"))}function jg(){wg(import("./mountReliclist.svelte-mh-7LUwU.js"))}function Fg(e){return()=>yg(e)}var Ng=[{section:"Character",menu:[{label:"Buff Log",fn:kg},{label:"Combat Log",fn:xg},{label:"Creature Log",fn:Sg},{label:"Recipe Manager",fn:Rg},{label:"Quick Links",fn:Ag},{label:"Inventory Manager",href:`${ka}invmanagernew`}]},{section:"Actions",menu:[{label:"Find Buffs",fn:Fg($g)},{label:"Find Other",fn:Fg(Tg)},{label:"Online Players",fn:Fg(Og)},{label:"AH Quick Search",fn:Fg(Lg)}]},...lg()?[{section:"Guild",menu:[{label:"Guild Inventory",href:`${ka}guildinvmgr`},{label:"New Guild Log",fn:Pg},{label:"Merc Hunter",fn:function(){wg(import("./mountMercs.svelte-Dw-TthHV.js"))}},{label:"Pot Report",fn:function(){wg(Promise.resolve().then(function(){return oE}))}},{label:"Guild Tracker",fn:Cg}]}]:[],{section:"Extra",menu:[{label:"Quick Extract",fn:Ig},{label:"Quick Wear",fn:Fg(Mg)},{label:"FS Box Log",fn:Eg},{label:"SE Tracker",fn:function(){wg(Promise.resolve().then(function(){return WE}))}}]},...ql("betaOptIn")&&lg()?[{section:"Beta Features",menu:[{label:"Relic List",fn:jg,beta:!0},{label:"GS Export",fn:function(){wg(Promise.resolve().then(function(){return _x}))},beta:!0},{label:"Who's Got What",fn:function(){wg(Promise.resolve().then(function(){return _P}))},beta:!0}]}]:[],{section:"FSH developer quick links",menu:[{playerId:1963510,playerName:"PointyHair"},{playerId:1674838,playerName:"Lusterless"}]}],Dg=(e,t,n)=>t(If(n).label,If(n).fn),qg=Kf('<button type="button" class="svelte-12kkdk3"> </button>'),Bg=(e,t,n)=>t(If(n).label),Hg=Kf('<a class="svelte-12kkdk3"> </a>'),Ug=(e,t,n)=>t(If(n).playerName),Gg=Kf('<button type="button" class="helperDevBtn svelte-12kkdk3">PM</button> <a class="svelte-12kkdk3"> </a>',1),Wg=Kf('<sup class="fshRed">beta</sup>'),zg=Kf("<li><!> <!></li>"),Vg=Kf('<h2 class="svelte-12kkdk3"> </h2> <ul></ul>',1)
Gf(["click"])
var Qg=Kf('<div class="modal svelte-m67z4r"><!></div>'),Kg=Kf('<div><button type="button">Helper Menu</button> <!></div>')
function Jg(e,t){Cu(t,!0)
let n=gd(!1)
const r=ql("keepHelperMenuOnScreen"),i=ql("draggableHelperMenu")
function s(){_d(n,!If(n))}var o=Kg()
let a
var l=Od(o)
let c
l.__click=s
var u=Ad(l,2),d=e=>{var t=Qg()
!function(e,t){function n(e){sg("helperMenu",e)}function r(e,r){Vl(r)&&(n(e),t.doToggle(),r())}function i(e){n("sendMsg"),t.doToggle(),window.openQuickMsgDialog(e)}Cu(t,!0)
var s=Yf()
up(Id(s),17,()=>Ng,cp,(e,t)=>{var s=Vg(),o=Id(s),a=Od(o)
up(Ad(o,2),21,()=>If(t).menu,cp,(e,t,s,o)=>{var a=zg(),l=Od(a),c=e=>{var n=qg()
n.__click=[Dg,r,t]
var i=Od(n)
Gd(()=>ep(i,If(t).label)),Xf(e,n)},u=e=>{var r=Yf(),s=Id(r),o=e=>{var r=Hg()
r.__click=[Bg,n,t]
var i=Od(r)
Gd(()=>{Ap(r,"href",If(t).href),ep(i,If(t).label)}),Xf(e,r)},a=e=>{var n=Yf(),r=Id(n),s=e=>{var n=Gg(),r=Id(n)
r.__click=[Ug,i,t]
var s=Ad(r,2),o=Od(s)
Gd(()=>{Ap(s,"href",`${_a??""}${If(t).playerId??""}`),ep(o,If(t).playerName)}),Xf(e,n)}
ap(r,e=>{If(t).playerName&&e(s)},!0),Xf(e,n)}
ap(s,e=>{If(t).href?e(o):e(a,!1)},!0),Xf(e,r)}
ap(l,e=>{If(t).fn?e(c):e(u,!1)})
var d=Ad(l,2),f=e=>{Xf(e,Wg())}
ap(d,e=>{If(t).beta&&e(f)}),Xf(e,a)}),Gd(()=>ep(a,If(t).section)),Xf(e,s)}),Xf(e,s),Lu()}(Od(t),{doToggle:s}),Hp(3,t,()=>wh,()=>({duration:100})),Xf(e,t)}
ap(u,e=>{If(n)&&e(d)}),mp(o,e=>{return t=e,void(i&&ng(t))
var t}),Gd((e,t)=>{a=Sp(o,0,"helper-menu svelte-m67z4r",null,a,e),c=Sp(l,0,"toggle svelte-m67z4r",null,c,t)},[()=>({"helper-menu-fixed":r}),()=>({"helper-menu-move":i})]),Xf(e,o),Lu()}function Yg(){const e=Jl(".mainbody")
e&&function(e,t){tp(Jg,{target:t.parentElement,props:{props:e}})}({},e)}function Xg(e){return new Promise(t=>{setTimeout(t,e)})}function Zg(e){uc(window,"beforeunload",()=>e.abort())}Gf(["click"])
let ev=0
let tv=0
async function nv(){tv<5-$.active&&performance.now()-ev>=900?(tv=5-$.active,ev=performance.now()):await Xg(100)}async function rv(e,t=10){await async function(){for(;tv<1;)await nv()
tv-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=Zg,$.ajax(t).fail((e,t,n)=>{e.textStatus=t,e.errorThrown=n})}(e)}catch(n){if(t&&n.status>500)return rv(e,t-1)
!function(e,t){if(![0,500,503].includes(t.status))throw new cc([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}async function iv(e,t){return Kl(await rv({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function sv(e){return iv(e,{method:"GET"})}function ov(e){return sv({cmd:"trade",...e})}function av(e,t){return ov({subcmd:"sendgold",xc:window.ajaxXC,target_username:e,gold_amount:t})}function lv(e,t,...n){return e(...n)}function cv(e){return(new DOMParser).parseFromString(e,"text/html")}function uv(e){return dg(e,{url:aa,data:{no_mobile:1}}),rv(e)}function dv(e){return uv({data:e})}async function fv(e){const t=await dv(e)
if(t)return cv(t)}function pv(e){const n=t("info-msg",e)
if(n){const e=n.innerHTML
return e?e.replace(/<br.*/,""):""}}async function hv(e,t){const n=await fv(e)
if(!n)return{s:!1}
const r=pv(n)
return r===t?{s:!0}:{s:!1,e:{message:r}}}let gv=0
const vv=()=>gv
function _v(){gv=ql("sendGoldonWorld")}async function mv(){if(!vv())return
sg("NewMap","doSendGold")
const e=await function(e,t){return lv(av,0,e,t)}($("#HelperSendTo").html(),$("#HelperSendAmt").html().replace(/[^\d]/g,""))
e.s&&(Wl("currentGoldSentTotal",parseInt(ql("currentGoldSentTotal"),10)+parseInt(ql("goldAmount"),10)),GameData.fetch(1))}function bv(e){window.location=e}function yv(e){ql("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function wv(e){sg("keyHandler",e)}function kv(e){return e?.toLowerCase?.()}function xv(e,t){return kv(e)<kv(t)?-1:kv(e)>kv(t)?1:0}function Sv(e){return sv({cmd:"profile",...e})}async function Ev(){const e=await Sv({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort((e,t)=>xv(e.name,t.name))}:e}function Pv(){return lv(Ev)}const Cv=[e=>e?.s,(e,t)=>e.r?.length>t]
async function Lv(e){const t=await Pv()
if(((e,t)=>Cv.every(n=>n(t,e)))(e,t)){wv("changeCombatSet")
const n=t.r[e].id
yv("2"),bv(`${va+ua}managecombatset&submit=Use&combatSetId=${n}`)}}function $v(e,n){t("worldPage")||(wv(e),bv(n))}function Tv(){pc.enableMaxGroupSizeToJoin?bv(Ia):bv(Oa)}function Ov(){wv("logPage"),yv("2"),bv(ha)}function Iv(e){e instanceof Element&&e.click()}function Av(e){const t=Jl(`#pCC input[value="${e}"]`)
t&&(wv("movePage"),Iv(t))}const Mv=[["!",Lv,0],["@",Lv,1],['"',Lv,1],["#",Lv,2],["£",Lv,2],["$",Lv,3],["%",Lv,4],["^",Lv,5],["&",Lv,6],["*",Lv,7],["(",Lv,8],["0",function(){$v("toWorld",Aa)}],["<",Av,"<"],[">",Av,">"],["G",function(){wv("createGroup"),yv("4"),bv(`${La}create`)}],["L",Ov],["b",function(){wv("backpack"),yv("2"),bv(ma)}],["g",function(){wv("gotoGuild"),yv("4"),bv(`${Ea}manage`)}],["j",function(){wv("joinAllGroup"),yv("4"),Tv()}],["l",Ov],["p",function(){wv("profile"),yv("2"),bv(va)}],["r",function(){$v("doRepair",`${ja+ua}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in pc&&!pc.dialogIsClosed()||(wv("insertQuickWear"),yg(Mg))}],["y",mv]]
const Rv=[e=>["HTML","BODY"].every(t=>e.target.tagName!==t),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function jv(e){var t;(t=e,Rv.some(e=>e(t)))||function(e){const t=Mv.find(([t])=>e===t)
t&&t[1](t[2])}(e.key)}function Fv(){uc(document,"keyup",jv)}function Nv(e,t){return Ah(t)===e}function Dv(e){return Rh(Nv,e)}function qv(e,t,n){uc(e,"click",t,n)}function Bv(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function Hv(e,t){return $h(Bv(e,t))}function Uv(e){qv(e,()=>{sg("chrome","Game Help link")}),_g(`<a href="${ca}settings">Game Help</a>`,e)}function Gv(){Hv("#pCR h3").filter(Dv("Game Help")).forEach(Uv)}function Wv(e){pc[e]=ql(e)}function zv(e,t){if(t instanceof Element)return t.closest(e)}function Vv(e){e?.classList&&e.classList.add("fshHide")}function Qv(e){const n=zv("a",e.target)
n?.getAttribute("href")===Pa&&(sg("useNewGuildLog","Alter Href"),e.preventDefault(),Pg(),Vv(t("notification-guild-log")))}function Kv(){return pc.huntingMode&&window.realmKeyHandler}function Jv(e){e.forEach(e=>Lc(3,e))}function Yv(){return dv({cmd:"guild",subcmd:"manage"})}function Xv(e){return zv("tr",e)}function Zv(e,t){return a(e,t)?.groups??{}}function e_(e){const{d:t,h:n,m:r,s:i}=Zv(ea,e),s=Number(t),o=Number(n)+24*s,a=Number(r)+60*o,l=Number(i)+60*a
return{day:t,days:s,hour:n,hours:o,min:r,mins:a,sec:i,secs:l,timestamp:qo()-l}}function t_(e){if(e?.href)return Number(l(ta,e.href))}function n_(e,t){if(t){const n=new Set
return e.filter(e=>n.has(e[t])?0:n.add(e[t]))}return $h(new Set(e))}const r_=e=>Number(Ah(Xv(e)?.cells[4])?.replaceAll(",","")),i_=e=>Ah(Xv(e)?.cells[3]),s_=e=>Number(l(ra,e))
function o_(e){return{guild_xp:r_(e),id:t_(e),name:Ah(e),rank:i_(e)}}function a_(e){const{stam:t,max:n}=Zv(na,e)
return{current_stamina:Number(t),last_activity:e_(e).timestamp,level:Number(l(/Level:.+?(?<l>\d+)/,e)),max_stamina:Number(n),vl:s_(e)}}function l_(e){return{guild_id:lg(),image_version:0,xp:-1,...o_(e),...a_(e.dataset.tipped)}}function c_(e,t,n){return{id:n,members:e.filter(e=>e.rank===t.rank),name:t.rank,permissions:0,tax:-1}}async function u_(){const e=cv(await Yv()).getElementById("pCC")
if(!e)return{e:{code:0,message:"Failure"},s:!1}
const t=Hv(Ol,e).map(l_)
return{r:n_(t,"rank").map(Rh(c_,t)),s:!0}}function d_(){return Vl(window.jQuery)}const f_=(e,t)=>t.some(t=>e instanceof t)
let p_,h_
const g_=new WeakMap,v_=new WeakMap,__=new WeakMap
let m_={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return g_.get(e)
if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return k_(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}
function b_(e){m_=e(m_)}function y_(e){return(h_||(h_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(x_(this),t),k_(this.request)}:function(...t){return k_(e.apply(x_(this),t))}}function w_(e){return"function"==typeof e?y_(e):(e instanceof IDBTransaction&&function(e){if(g_.has(e))return
const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()}
e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)})
g_.set(e,t)}(e),f_(e,p_||(p_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,m_):e)}function k_(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(k_(e.result)),r()},s=()=>{n(e.error),r()}
e.addEventListener("success",i),e.addEventListener("error",s)})
return __.set(t,e),t}(e)
if(v_.has(e))return v_.get(e)
const t=w_(e)
return t!==e&&(v_.set(e,t),__.set(t,e)),t}const x_=e=>__.get(e)
function S_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=k_(o)
return r&&o.addEventListener("upgradeneeded",e=>{r(k_(o.result),e.oldVersion,e.newVersion,k_(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}const E_=["get","getKey","getAll","getAllKeys","count"],P_=["put","add","delete","clear"],C_=new Map
function L_(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return
if(C_.get(t))return C_.get(t)
const n=t.replace(/FromIndex$/,""),r=t!==n,i=P_.includes(n)
if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!E_.includes(n))return
const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly")
let o=s.store
return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]}
return C_.set(t,s),s}b_(e=>({...e,get:(t,n,r)=>L_(t,n)||e.get(t,n,r),has:(t,n)=>!!L_(t,n)||e.has(t,n)}))
const $_=["continue","continuePrimaryKey","advance"],T_={},O_=new WeakMap,I_=new WeakMap,A_={get(e,t){if(!$_.includes(t))return e[t]
let n=T_[t]
return n||(n=T_[t]=function(...e){O_.set(this,I_.get(this)[t](...e))}),n}}
async function*M_(...e){let t=this
if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return
const n=new Proxy(t,A_)
for(I_.set(n,t),__.set(n,x_(t));t;)yield n,t=await(O_.get(n)||t.continue()),O_.delete(n)}function R_(e,t){return t===Symbol.asyncIterator&&f_(e,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===t&&f_(e,[IDBIndex,IDBObjectStore])}b_(e=>({...e,get:(t,n,r)=>R_(t,n)?M_:e.get(t,n,r),has:(t,n)=>R_(t,n)||e.has(t,n)}))
let j_=Promise.resolve(),F_=!1
function N_(){return F_||(j_=S_("keyval-store",1,{upgrade(e){e.createObjectStore("keyval")}}),F_=!0),j_}async function D_(e){try{return(await N_()).get("keyval",e)}catch(e){}}async function q_(e,t){try{return(await N_()).put("keyval",t,e)}catch(e){}}async function B_(e){try{return(await N_()).delete("keyval",e)}catch(e){}}const H_=0,U_=1,G_=2,W_=3,z_=4,V_=5,Q_=6,K_="fsh_guildActivity"
async function J_(e){return Kl(await uv({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function Y_(e){return J_({cmd:"export",...e})}function X_(e,t){return Y_({subcmd:"profile",player_username:e,...t&&{_:Ro()}})}function Z_(e){return Math.floor(Math.max(0,qo()-e)/86400)}async function em(e){const t=await X_(e,!0)
return t?.current_stamina?t:null}function tm(e,t){return e.members[t]||(e.members[t]=[]),e.members[t]}function nm(e,t,n){const r=Z_(e.last_activity)
if(function(e,t,n,r){if(0===e.length)return!0
const i=e.at(-1),s=r<=7
return i[1]!==n.current_stamina||i[2]!==t.level||s&&i[3]!==n.stamina||i[5]!==t.vl||i[6]!==(t.guild_xp||0)}(n,e,t,r)){const i=function(e,t,n){const r=[]
return r[0]=n,r[1]=t.current_stamina,r[2]=e.level,r[3]=t.stamina,r[4]=qo(),r[5]=e.vl,r[6]=e.guild_xp||0,r}(e,t,r)
n.push(i)}else!function(e,t){if(e.length>0){const n=e.at(-1)
n[4]=qo(),n[0]=t}}(n,r)}function rm(e,t){return e.filter(e=>{const n=t.members[e.name]
if(!n||0===n.length)return!0
const r=n.at(-1)
return qo()-r[4]>Rl})}function im(e,t){const n=new Set(t.map(e=>e.name)),r=function(e,t){let n=null
if(e?.members)for(const[r,i]of Object.entries(e.members))if(t.has(r)&&i.length>0){const e=i.at(-1)[4];(!n||e<n)&&(n=e)}return n}(e,n)
return function(e){if(!e)return 864e5
const t=e+Rl
return Math.max(60,t-qo())*jl}(r)}function sm(e,t){if(rm(t,e).length>0){const t=qo()-e.lastUpdate
return Math.max(0,(30-t)*jl)}return im(e,t)}const om={running:!1}
async function am(e,t){const n=rm(t,e),r=n.slice(0,3)
await async function(e,t){for(const n of e)try{const e=await em(n.name)
if(!e)continue
nm(n,e,tm(t,n.name))}catch(e){Eo((n.name,e.message))}}(r,e),e.lastUpdate=qo(),await q_(K_,e)
return{remaining:n.length-r.length}}async function lm(){if(om.running)return
om.running=!0
const e=await D_(K_)||{lastUpdate:qo(),members:{}},t=await async function(){const e=await u_()
return e.s?e.r.flatMap(e=>e.members):null}()
if(t)for(;om.running;){const n=sm(e,t)
await Xg(n),await am(e,t)}else om.running=!1}function cm(){d_()&&lm()}function um(){om.running=!1}function dm(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function fm(){return!d_()}function pm(e){return fg("a",e)}function hm(e){return fg("li",e)}function gm(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function vm(e,t){if(t instanceof Node&&t.parentNode instanceof Node)return function(e,t){return t.nextSibling instanceof Node?gm(e,t.nextSibling):vg(t.parentNode,e)}(e,t)}const _m=["Buff Log","Combat Logs","Creature Logs","Quick Links","Recipe Manager","New Guild Log"]
function mm(e,t){sg("accordion",e),_m.includes(e)?t():yg(t)}function bm(e,t,n,r){const i=function(e,t,n){const r=hm({className:`nav-level-${e}`}),i=pm({className:"nav-link fshPoint",textContent:t})
return vg(r,i),vm(r,n.parentNode),i}(e,t,r)
Vl(n)?qv(i,Rh(mm,t,n)):(i.href=n,qv(i,()=>sg("accordion",t)))}const ym=[[e=>e.recipeManagerLink,"1","Recipe Manager",Rg,"nav-character-log"],[e=>e.inventoryManagerLink,"1","Inventory Manager",`${ka}invmanagernew`,"nav-character-log"],[e=>e.medalGuideLink,"1","Medal Guide",`${va}${ua}medalguide`,"nav-character-log"],[e=>e.buffLogLink&&ql("keepBuffLog"),"1","Buff Log",kg,"nav-character-log"],[e=>e.combatLogLink&&ql("keepLogs"),"1","Combat Logs",xg,"nav-character-notepad"],[e=>e.creatureLogLink&&ql("showMonsterLog"),"1","Creature Logs",Sg,"nav-character-notepad"],[e=>e.quickLinksLink,"1","Quick Links",Ag,"nav-character-notepad"],[e=>e.auctionSearchLink,"2","AH Quick Search",Lg,"nav-actions-trade-auctionhouse"],[e=>e.onlinePlayersLink,"2","Online Players",Og,"nav-actions-interaction-findplayer"],[e=>e.findOtherLink,"2","Find Other",Tg,"nav-actions-interaction-findplayer"],[e=>e.findBuffsLink,"2","Find Buffs",$g,"nav-actions-interaction-findplayer"],[e=>e.guildInventoryLink&&lg(),"2","Guild Inventory",`${ka}guildinvmgr`,"nav-guild-storehouse-inventory"],[e=>e.newGuildLogLink&&lg()&&!ql("useNewGuildLog"),"2","New Guild Log",Pg,"nav-guild-ledger-advisor"],[e=>e.topRatedLink,"2","Top 250 Players",`${ca}toprated${ua}xp`,"nav-toprated-players-level"]]
function wm(e){ym.forEach(([n,r,i,s,o])=>{n(e)&&function(e,n,r,i){const s=t(i)
s instanceof Node&&bm(e,n,r,s)}(r,i,s,o)})}const km=e=>22*Hv("li",e).length||null
function xm(e,t,n){wm(n),function(e,t){t.heights=Hv("#nav > li").map(km)
const n=Number(t.state)
n&&n>-1&&n<e.children.length&&(e.children[t.state].children[1].style.height=`${t.heights[t.state]}px`)}(e,t)}var Sm=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function Em(e){return function(e){return-1!==e&&0===Jl(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?(sg("accordion","collapse"),-1):e}const Pm=(e,t,n)=>$(e).data(`${n}${t}`)
function Cm(e,t,n){return new Promise(r=>{const i=Pm(e,t,n)
i?r(i):function(e,t,n,r){$(e).on(`${kv(t)}create`,()=>{r(Pm(e,t,n))})}(e,t,n,r)})}const Lm=[[e=>!Ql(e),()=>fc("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>fc("$('#nav').data('hcsNav').heights does not exist")]]
async function $m(){const e=t("nav"),n=await Cm(e,"Nav","hcs")
return function(e){const t=Lm.find(([t])=>t(e))
return!t||(t[1](),!1)}(n)?{theNav:e,myNav:n}:{}}function Tm(){!function(){const e=ql("lastActiveQuestPage")
ql("storeLastQuestPage")&&e.length>0&&(t("nav-character-questbook").href=e)}(),function(){const e=ql("lastScavPage")
ql("storeLastScavPage")&&e.length>0&&(t("nav-actions-artisanship-scavenging").href=e)}()}async function Om(){const{theNav:e,myNav:t}=await $m()
e&&t&&(Tm(),function(e,t){const n=Sm.map(e=>[e,ql(e)])
n.some(([,e])=>e)&&xm(e,t,dm(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,Em(n))}}(t))}function Im(e){return dv({cmd:"bounty",page:e})}function Am(e){return e()}function Mm(e,t){Wl(e,dc(t))}let Rm=0,jm=0
const Fm=()=>Rm,Nm=()=>jm
function Dm(){return pg({className:"minibox"})}function qm(e){return fg("span",e)}function Bm(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function Hm(e,t){Bm(e,"beforeend",t)}function Um([e,t,n,r,i]){const s=e(),o=n()
if(o)return Mm(t,o),_g("",s),function(e,t,n,r){const i=pg({innerHTML:`<a class="fshBountyHeader" href="${Ha}">${n} Bounties</a> `}),s=qm({className:"xxsLink",textContent:"Reset"})
return vg(i,s),vg(e,i),Hm(e,function(e,t,n){const r=e.bounty
return 0===r.length?`<div class="xsOrange">[No ${t.toLowerCase()} bounties]</div>`:r.map(n).join("")}(t,n,r)),s}(s,o,r,i)}function Gm(e,t){return`<a href="${e.link}" class="xsKhaki tip-static" data-tipped="${t(e)}">${e.target}</a><br>`}function Wm(e,t){if("string"==typeof t){const e=a(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function zm(e){const t=ql(e)
if(t)return Kl(t,Wm)}function Vm(e){return e.split(",").map(Ih)}function Qm(e){const t=ql(e)
return t?Vm(t):[]}function Km(e){return Jl("img",e[2]).title}function Jm(e){const t="A"===(r=e[0]).children[0].tagName?r.children[0]:r.children[0].children[0]
var r
return{target:n(t),link:t.href,lvl:n(t.nextSibling).replace(/[[|\]]/g,""),reward:n(e[2]),rewardType:Km(e),xpLoss:n(e[3]),posted:n(e[4])}}let Ym=0,Xm={},Zm={},eb=!1,tb=!1,nb=[]
const rb=()=>Xm,ib=()=>Zm,sb=()=>nb
function ob(e){return{...Jm(e),progress:n(e[5])}}function ab(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=ob(e.rows[t].cells)
Xm.bounty.push(n)}}(e)}function lb(e,t){return function(e){if(e)return Xm&&qo()-Xm.lastUpdate>Ym}(e)||function(e){if(e)return Zm&&qo()-Zm.lastUpdate>Ym}(t)}let cb=0
function ub(e){return`Level:  ${e.lvl}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Progress:  ${e.progress}`}function db(e){return Gm(e,ub)}function fb(){cb=Um([Fm,"bountyList",rb,"Active",db])}let pb=0
function hb(e){return`Target Level:  ${e.lvl}<br>Offerer: ${e.offerer}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Posted: ${e.posted}<br>Tickets Req.:  ${e.tickets}`}function gb(e){return e.accept?`<span class="xsGreen" onclick="${e.accept}">[a]</span>&nbsp;`:""}function vb(e){return[gb(e),Gm(e,hb)].join("")}function _b(){pb=Um([Nm,"wantedList",ib,"Wanted",vb])}function mb(e){const t=e[6]
return"[n/a]"!==Ah(t)?t.children[0].children[0].getAttribute("onclick"):""}const bb=[()=>sb().includes("*"),e=>sb().includes(e),(e,t)=>pc.wantedGuildMembers&&"[n/a]"===Ah(t.cells[6])]
function yb(e,t){var n;(function(e,t){return"[active]"!==Ah(t.cells[6])&&bb.some(n=>n(e,t))})(e,t)&&ib().bounty.push({...Jm(n=t.cells),offerer:Ah(n[1].children[0].children[0]),tickets:Ah(n[5]),accept:mb(n)})}let wb=0,kb=0
function xb(e){const n=Jl('#pCC input[name="page"]',e)
if(!n)return
wb=Number(n.value),kb=Number(l(/of&nbsp;(?<of>\d*)/,n.parentNode.innerHTML))
const r=t("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
r&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],r=Ah(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===r)break
yb(r,n)}}(r)}function Sb(e){pc.enableActiveBountyList&&!eb&&(!function(e){const n=t("bounty-info",e)
if(!n)return
const r=n.parentNode.parentNode.previousElementSibling.children[0].children[0]
Xm={},Xm.bounty=[],Xm.isRefreshed=!0,Xm.lastUpdate=qo(),r&&ab(r),eb=!0}(e),fb())}async function Eb(e){const t=cv(e)
if(Sb(t),pc.enableWantedList)if(xb(t),wb<kb){Eb(await Im(wb+1))}else _b()}const Pb=[()=>!rb(),()=>!ib(),()=>tb]
async function Cb(){if(function(e,t){Xm=zm("bountyList"),Zm=zm("wantedList"),Ym=ql("bountyListRefreshTime"),tb=ql("bwNeedsRefresh"),tb||lb(e,t)&&(tb=!0)}(pc.enableActiveBountyList,pc.enableWantedList),Pb.some(Am)){Zm={},Zm.bounty=[],Zm.isRefreshed=!0,Zm.lastUpdate=qo(),eb=!1,nb=Qm("wantedNames"),Wl("bwNeedsRefresh",!1)
Eb(await Im(1))}else!function(e,t){t&&(ib().isRefreshed=!1,_b()),e&&(rb().isRefreshed=!1,fb())}(pc.enableActiveBountyList,pc.enableWantedList)}function Lb(e,t){sg("activeWantedBounties",e),Mm(t,null),Cb()}function $b(e){e.target===cb&&Lb("getBountyListReset","bountyList"),e.target===pb&&Lb("getWantedListReset","wantedList")}async function Tb(e){const t=await X_(s(),e),n=t?.username===s(),r=n?{...t,lastUpdate:Fo()}:t
return n&&q_("fsh_selfProfile",r),r}function Ob(e){return(e=>Fo()-pc.allyEnemyOnlineRefreshTime<e?.lastUpdate)(e)?e:Tb()}async function Ib(e){if(e)return Tb(e)
return Ob(await D_("fsh_selfProfile"))}function Ab(e,t){return t?.classList?.contains(e)}function Mb(e,t){return Ab(t[0],e)}function Rb(e,t,n){const{target:r}=n,i=t.find(Rh(e,r))
if(i)return i[1](r)}function jb(e){return Rh(Rb,Mb,e)}function Fb(e){return $c(e,"player_id")}function Nb(e,t,n){return Math.floor(Math.max(e-t,0)/2+n)}function Db(e,t,n,r,i){let s=r
500===r&&(s=1e3)
const o=Nb(window.screen.availHeight,s,window.screenY),a=Nb(document.documentElement.clientWidth,n,window.screenX)
window.open(e,t,`width=${n}, height=${s}, left=${a}, top=${o}${i}`)}function qb(e,t){let n=""
t&&(n=`&blist=${t}`),Db(`${Fa}&t=${e}${n}`,"fsQuickBuff",618,1e3,",scrollbars")}function Bb(e){let t=e,n=Math.floor(t/60)
t%=60
let r=Math.floor(n/60)
n%=60
const i=Math.floor(r/24)
return r%=24,[i,r,n,t]}function Hb(e,t){return 0===e?"":String(e)+t}function Ub(e){const t=Bb(Math.abs(qo()-e))
return`${Hb(t[0]," days, ")+Hb(t[1]," hours, ")+Hb(t[2]," mins, ")+t[3]} secs`}const Gb="enemy-buff-check-on",Wb="enemy-buff-check-off",zb="enemy-send-message",Vb="enemy-quickbuff",Qb="enemy-quick-buff",Kb=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function Jb(e,t){return t[0](qo()-e)}function Yb(e,t){return`<a class="player-name tip-static ${function(e,t){const n=Kb.find(Rh(Jb,e))
return n?function(e,t){return e?t[1]:t[2]}(t,n):"fshWhite"}(e.last_login,t)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${Ub(e.last_login)}</td></tr></tbody></table>" href="${_a}${e.id}">${e.username}</a>`}function Xb(e){return qo()-e.last_login<1800}function Zb(e,t){return`<li class="player"><div class="player-row">${pc.hideBuffSelected?"":`<span class="${Gb}"></span>`}${Yb(t,e)}</div><div class="guild-minibox-actions">${pc.hideGuildInfoMessage?"":`<span class="${zb} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}${pc.hideGuildInfoBuff?"":`<span class="${Vb} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}${function(e){return pc.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${ya}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return pc.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${ba}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function ey(e,t){return e.filter(Xb).map(Rh(Zb,t)).join("")}const ty=[(e,t)=>e.length+t.length,(e,t)=>{if(!pc.enableAllyOnlineList)return t.length},e=>{if(!pc.enableEnemyOnlineList)return e.length}]
function ny(e){sg("allyEnemy",e)}function ry(e,t,n){return 0===n(e,t)}function iy(e){const n=gc(e._allies,[]),r=gc(e._enemies,[]);(function(e,t){return ty.every(Rh(ry,e,t))})(n,r)||function(e,n){let r=""
pc.enableAllyOnlineList&&(r+=ey(e,!0)),pc.enableEnemyOnlineList&&(r+=ey(n,!1))
const i=t("fshContactList")
_g("",i),Hm(i,r)}(n,r)}function sy(e){ny("toggleBuffSelected"),e.classList.toggle(Gb),e.classList.toggle(Wb)}const oy=[[Gb,sy],[Wb,sy],[zb,function(e){ny("msgPlayer"),window.openQuickMsgDialog(n(e.parentNode.previousElementSibling.lastElementChild))}],[Vb,function(e){ny("buffPlayer"),qb(Fb(e.parentNode.previousElementSibling.lastElementChild.href))}],[Qb,function(){ny("selectedBuff"),qb(gg(Gb,t("fshContactList")).map(e=>Fb(e.nextElementSibling.href)).join(","))}]]
function ay(e){const{target:t}=e
"fshResetEnemy"!==t.id?jb(oy)(e):async function(){ny("resetList"),iy(await Ib(!0))}()}function ly(e){const t=pg({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>'
pc.hideBuffSelected||(n+=`<ul class="${Qb}">Quick Buff Selected</ul>`),n+="</div></div>",Hm(t,n),vg(Dh(),t),qv(t,ay),iy(e)}function cy(e){if(e?.length)return n(e[0].nextElementSibling)}function uy(e){return e?Number(e.replace(/,/g,"")):0}function dy(e){return uy(cy(hg(e)))}function fy(e){let t=e.toString()
return e<10&&(t=`0${t}`),t}function py(e,t){const n=e?.split(" ").map(e=>e.slice(0,-1))
var r
if(n)return`<dd>${r=new Date(Fo()+1e3*(60*(60*t+Number(n[0]))+Number(n[1]))),`${fy(r.getHours())}:${fy(r.getMinutes())} ${r.toLocaleString("en",{weekday:"short"})} ${fy(r.getDate())}/${Jo[r.getMonth()]}/${r.getFullYear()}`}</dd>`}function hy(e,t,n){e.target===If(t)&&n.close()}var gy=Kf("<div><!></div>")
function vy(e,t){Cu(t,!0)
let n,r,i,s=hh(t,"visible",3,!0),o=gd(void 0)
qd(()=>{s()?document.body.classList.contains("noscroll")||(n=!0,r=window.scrollY,i=document.body.style.top,document.body.classList.add("noscroll"),document.body.style.top=`-${r}px`):n&&(document.body.classList.remove("noscroll"),document.body.style.top=i||"",window.scrollTo(0,r))})
var a=gy()
let l
a.__click=[hy,o,t],vp(Od(a),()=>t.children??Uc),eh(a,e=>_d(o,e),()=>If(o)),Gd(e=>l=Sp(a,0,"svelte-1joucfc",null,l,e),[()=>({visible:s()})]),Xf(e,a),Lu()}let _y
Gf(["click"])
var my=Kf('<div role="dialog" aria-modal="true"><!></div>')
function by(e,t){Cu(t,!0)
let n,r=hh(t,"modal",15),i=hh(t,"visible",3,!0)
qd(()=>{i()?(pc.dialogIsClosed&&(n=pc.dialogIsClosed),pc.dialogIsClosed=()=>!i()):n&&(pc.dialogIsClosed=n)}),vy(e,{get close(){return t.close},get visible(){return i()},children:(e,n)=>{!function(e,t){Cu(t,!0)
let n=hh(t,"modal",15),r=hh(t,"visible",3,!0),i=ld(r),s=gd(void 0),o=gd(void 0)
const a=e=>e.tabIndex>=0&&e.offsetWidth>0&&e.offsetHeight>0&&!e.disabled
qd(()=>{r()?(_d(s,document?.activeElement,!0),n()&&(_d(o,_y,!0),_y=n())):(If(s)?.focus(),n()&&(_y=If(o)))})
var l=my()
let c
Uf("keydown",Sd,function(e){if(r())if("Escape"!==e.key||_y!==n()){if("Tab"===e.key){const t=Hv("*",n()).filter(a)
let r=t.indexOf(document.activeElement);-1===r&&e.shiftKey&&(r=0),r+=t.length+(e.shiftKey?-1:1),r%=t.length,t[r].focus(),e.preventDefault()}}else t.close()}),vp(Od(l),()=>t.children??Uc),eh(l,e=>n(e),()=>n()),Gd(e=>c=Sp(l,0,"ui-dialog svelte-h5colk",null,c,e),[()=>({modalVisible:If(i)})]),Xf(e,l),Lu()}(e,{get close(){return t.close},get visible(){return i()},get modal(){return r()},set modal(e){r(e)},children:(e,n)=>{var r=Yf()
vp(Id(r),()=>t.children??Uc),Xf(e,r)},$$slots:{default:!0}})},$$slots:{default:!0}}),Lu()}function yy(e,t,n){t(!1),n.resolve(!0)}var wy=Kf('<div class="svelte-2mrn1o"> </div> <div class="svelte-2mrn1o"><button type="button" class="svelte-2mrn1o">Yes</button> <button type="button" class="svelte-2mrn1o">No</button></div>',1)
function ky(e,t){Cu(t,!0)
let n=hh(t,"msg",3,"Are you sure?"),r=hh(t,"visible",15,!0)
function i(){r(!1),t.resolve(!1)}by(e,{close:i,get visible(){return r()},children:(e,s)=>{var o=wy(),a=Id(o),l=Od(a),c=Od(Ad(a,2))
c.__click=[yy,r,t],Ad(c,2).__click=i,Gd(()=>ep(l,n())),Xf(e,o)},$$slots:{default:!0}}),Lu()}Gf(["click"])
const xy=wd({visible:!0})
let Sy=null
function Ey(e){xy.resolve=e,Sy?xy.visible=!0:Sy=tp(ky,{props:xy,target:document.body})}function Py(e){return xy.msg=e,new Promise(Ey)}async function Cy(e){if("daily-quest-reroll-button"!==e.target.id)return
e.stopPropagation()
await Py("Are you sure you want to re-roll the Daily Quest?")&&async function(){const e=t("minibox-daily-quest")
if(!e)return
sg("dailyQuest","reroll")
const n=await fv({cmd:"dailyquests",subcmd:"reroll"})
if(!n)return
const r=t("minibox-daily-quest",n)
r&&e.replaceWith(r)}()}function Ly(e){return fg("button",{...e,type:"button"})}function $y(e,t){Hm(e,t)}function Ty(){sg("fsbox","open log"),Eg()}function Oy(e,t){const n=qm({className:`fsh-fsbox ${e}`,textContent:"[ "})
return vg(n,t),$y(n," ]"),n}function Iy(e){const t=Jl(Ol,e)
t&&(function(e,t){const r=pm({href:`${ga}${n(t)}`,textContent:"Ignore"})
qv(r,()=>sg("fsbox","ignore link")),vg(e,Oy("fs-box-ignore",r))}(e,t),async function(e){const t=await D_("fsh_fsboxcontent")??"",n=Ih(Jl(".message",e).innerHTML)
if(t.includes(n))return
q_("fsh_fsboxcontent",`<br>${n}${t}`.slice(0,9999))}(e))}function Ay(e){e.classList.add("fshRelative"),function(e){const t=Ly({textContent:"Log"})
qv(t,Ty),vg(e,Oy("fs-box-log",t))}(e),Iy(e)}function My(e,t){t instanceof Node&&(t.textContent=String(e))}let Ry=null
function jy(){return Ry||(Ry=t("quickMessageDialog")),Ry}let Fy=0
function Ny(e){(function(){if(!Fy){const e=hg("validateTips",jy())
1===e.length&&([Fy]=e)}return Fy})()&&My(gc(e,""),Fy)}let Dy=null
function qy(){return Dy||(Dy=t("quickMsgDialog_msg"),Dy.maxLength=512),Dy}let By=null,Hy=0,Uy=0
function Gy(e){"Enter"!==e.key||e.shiftKey||(sg("messaging","sendOnEnter"),e.preventDefault(),function(){if(!Uy){const e=$(jy()).dialog("option","buttons")
Uy=e["Send Message"]}return Uy}()())}function Wy(){Go(By)&&(By=ql("enterForSendMessage")),By&&!Hy&&(uc(qy(),"keypress",Gy),Hy=!0)}let zy=null
let Vy=0,Qy=0,Ky=0
function Jy(e,t,n){const r=Qy.insertRow(e)
let i=r.insertCell(-1)
Hm(i,t),i=r.insertCell(-1),Hm(i,n)}function Yy(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function Xy(e,t){Jy(e,Yy("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const Zy=[["del-button",function(e){sg("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
Qy.deleteRow(t),Vy.splice(t-2,1),Mm("quickMsg",Vy)}],["add-button",function(e){sg("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){Xy(e.parentNode.parentNode.rowIndex,n),t.value="",Vy.push(n),Mm("quickMsg",Vy)}}],["add-template",function(e){sg("messaging","insertTemplate"),qy().value+=`${n(e).replace(/\{playername\}/g,zy)}`}]]
function ew(e){Xy(-1,e)}function tw(){ql("enableMessageTemplates")&&!Ky&&(qv((Qy||(Qy=jy().lastElementChild),Qy),jb(Zy)),(Vy||(Vy=zm("quickMsg")),Vy).forEach(ew),Jy(-1,Yy("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),Ky=!0)}function nw(e,n,r){const i=jy()
Ab("ui-dialog-content",i)&&(!function(e){zy=e,My(e,t("quickMsgDialog_targetUsername"))}(e),function(e){const t=qy()
t.value=gc(e,""),t.disabled=!1}(n),Ny(r),tw(),Wy(),$(i).dialog("open"))}function rw(e){return sv({cmd:"composing",...e})}function iw(){return rw({subcmd:"view"})}function sw(){return lv(iw)}function ow(e,n,r){const i=hm({className:"notification"}),s=pm({href:r,innerHTML:`<span class="notification-icon"></span><p class="notification-content">${n}</p>`})
qv(s,()=>{sg("notification",e)}),vg(i,s),vg(t("notifications"),i)}function aw(){ow("composing","Composing to do",Na)}function lw(e){return e.time_remaining}function cw(){aw(),Wl(ul,!0)}function uw(e){const t=e.h.p.find(({k:e})=>52===e)?.v
e.r.potions.length!==t?cw():function(e){const t=Math.min.apply(null,e.map(lw))
t>0?(Wl(ul,!1),Wl(dl,Fo()+1e3*t)):cw()}(e.r.potions)}function dw(){ql(ul)?aw():async function(){const e=ql(dl)
if(e&&Fo()<e)return
const t=await sw()
t?.s&&uw(t)}()}function fw(e){return sv({cmd:"guild",...e})}function pw(e){return fw({subcmd:"groups",...e})}function hw(e){return pw({subcmd2:"joinall",group:e})}function gw(e){return Promise.all(e)}function vw(e){return lv(hw,0,e)}function _w(){return pw({subcmd2:"view"})}function mw(){return lv(_w)}function bw(e,t){If(t)||(e.preventDefault(),sg("notification","Join All"),_d(t,1))}var yw=Kf('<p class="notification-content" style="line-height: 32px;">Joined.</p>'),ww=Kf('<span class="notification-content fshSpinner fix-classic-theme svelte-v71ckx"></span>'),kw=Kf('<p class="notification-content"><button type="button" class="svelte-v71ckx"> </button></p>'),xw=Kf('<a><span id="notification-icon-guild-group" class="notification-icon"></span> <!></a>')
function Sw(e,t){Cu(t,!0)
let n=gd(0),r=gd(wd(Oa)),i=gd("")
const o=e=>!pc.enableMaxGroupSizeToJoin||e.members.length<pc.maxGroupSizeToJoin,a=e=>e.name===s(),l=e=>!e.members.find(a),c=e=>e.id
async function u(){const e=await mw()
e?.s&&await async function(e){const t=e.r.filter(o).filter(l).map(c)
t.length&&await vw(t)}(e)}pc.enableMaxGroupSizeToJoin&&(_d(r,Ia,!0),_d(i,` less than size ${pc.maxGroupSizeToJoin}`))
var d=xw(),f=Ad(Od(d),2),p=e=>{var t=Yf()
op(Id(t),u,e=>{Xf(e,ww())},e=>{Xf(e,yw())}),Xf(e,t)},h=e=>{var t=kw(),r=Od(t)
r.__click=[bw,n]
var s=Od(r)
Gd(()=>ep(s,`Join all attack groups${If(i)??""}.`)),Xf(e,t)}
ap(f,e=>{If(n)?e(p):e(h,!1)}),Gd(()=>Ap(d,"href",If(r))),Xf(e,d),Lu()}function Ew(e){return sv({cmd:"temple",...e})}function Pw(e){return Ew({subcmd:"pray",type:e})}function Cw(){return Ew({subcmd:"view"})}function Lw(e){$(e).qtip("hide")}Gf(["click"])
let $w=Element
const Tw=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${ca}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
function Ow(e){Wl("needToPray",e),Wl("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}async function Iw(e){const t=e.target.getAttribute("praytype")
t&&(sg("notification","prayToGods"),Lw(e.target),await function(e){return lv(Pw,0,e)}(t),$w.outerHTML='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',Ow(!1))}function Aw(){Hm(t("notifications"),Tw),$w=t("helperPrayToGods"),Uh($w,"click",Iw)}async function Mw(){if(!pc.enableTempleAlert)return
const e="temple"===pc.cmd?function(e){if(!e)return{s:!1}
const t=Jl("#pCC",e)
return t?{s:!0,r:{pray_index:"You are currently praying at the temple."===Ah(t)?0:-1}}:{s:!1}}(document):await lv(Cw)
if(!e.s)return
const t=-1===e.r.pray_index
t&&Aw(),Ow(t)}function Rw(){var e
!(e=ql("lastTempleCheck"))||Fo()>e?Mw():ql("needToPray")&&Aw()}function jw(){return e={subcmd:"goldupgrades"},sv({cmd:"points",...e})
var e}function Fw(e,t,n){if(e?.rows)return $h(e.rows).filter((e,r)=>e.children.length===t&&r>n)}function Nw(e){return Number.isNaN(e)}function Dw(e,t){const n=Number(Ah(e.cells[2]).split(" / ")[0]),r=Ah(e.cells[3])
return{id:t,...!["-","n/a"].includes(r)&&{reset_time:Date.parse(`${r} GMT`)/1e3},current:Nw(n)?0:n}}function qw(){return-1!==window.location.search.indexOf("cmd=points&type=1")}function Bw(){qw()||ow("stamina","Upgrade stamina with gold",`${Sa}&type=1`)}async function Hw(){if(qw()&&function(){const e=Bv('#pCC input[name="quantity"]')
e?.length<2||(e[0].value="100",e[1].value="10")}(),!pc.enableUpgradeAlert)return
const e=qw()?function(e){if(!e)return{s:!1}
const t=Jl("#pCC > table",e)
return t?{s:!0,r:Fw(t,5,0).map(Dw)}:{s:!1}}(document):await lv(jw)
Wo(e?.r?.[1]?.current)||function(e){10!==e.current?(Bw(),Wl("needToDoUpgrade",!0)):(Wl("needToDoUpgrade",!1),Wl("lastUpgradeCheck",1e3*e.reset_time))}(e.r[1])}function Uw(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?gm(t,e.firstChild):vg(e,t)}(e,t)}function Gw(e,t){t.stopPropagation(),sg("chrome","statbar",e)}function Ww(e,n){const r=t(`statbar-${n}`)
if(!r)return
const i=pm({href:e}),s=r.parentNode
vg(i,r),Uw(s,i),qv(i,Rh(Gw,n),!0)}function zw(e,t){gg("player-name",e).forEach(t)}const Vw=/Last Activity:<\/td><td>(?<mins>\d+) mins/
function Qw(e,t){const n=e.dataset.tipped,r=l(Vw,n)
r<2?e.classList.add(t.l1):r<5?e.classList.add(t.l2):e.classList.add(t.l3)}const Kw=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function Jw(e,t){Kw.forEach(n=>{pc[n[0]]&&$h(Bv(n[t],e)).forEach(Vv)})}function Yw(e){e?.classList&&e.classList.add("fshInvisible")}function Xw(e,n){pc.hideBuffSelected&&($h(hg(`${n}-buff-check-on`,e)).forEach(Yw),Yw(t(`${n}-quick-buff`)))}function Zw(e){Qw(e,{l1:"fshGreen",l2:"fshWhite",l3:"fshGrey"})}function ek(e,t,n){Hv(`#pCR h${e}`).filter(Dv(t)).forEach(e=>{const r=pm({href:`${Ea}${n}`,textContent:t})
qv(r,()=>{sg("widgets",`guild ${n}`)}),e.replaceChild(r,e.firstChild)})}function tk(e){Qw(e,{l1:"fshDodgerBlue",l2:"fshLightSkyBlue",l3:"fshPowderBlue"})}function nk(e){const n=t(e)
n&&(n.classList.add("pCR"),vg(Dh(),n))}function rk(e){const n=t(e)
n&&Uw(Bh(),n)}function ik([e,t,n,r,i]){return Date.UTC(Number(e),Jo.indexOf(t),Number(n),Number(r),Number(i),0)}function sk(e){if(e?.src)return e.src.split("/").at(-1).split(".")[0]}function ok(e){return cg(e?.seData??{}).flatMap(([t,n])=>hc(n)?n.map(([n,r,i,s,o,a,l=-1])=>[n,t,r,i,e?.realms[s],o,a,l]):[[n,t.replaceAll(" ","_"),0,"","","",""]])}const ak=e=>e.join("|"),lk=e=>e.split("|")
function ck(e){const{time:t,creature:n,playerId:r,playerName:i,location:s,drop:o,creatureId:a}=e,l=s.match(/^(.*?)\s(\(\d+, \d+\))$/)
return[t,n.replace(" (Super Elite)","").replaceAll(" ","_"),r,i,l?l[1]:"realm unknown",l?l[2]:"coordinates unknown",o,a]}function uk(e,t){const n=((e,t)=>n_(e.map(ak).concat(t.map(ak))).map(lk).map(([e,t,n,r,i,s,o,a])=>[Number(e),t,Number(n),r,i,s,o,Number(a)]).sort(([e],[t])=>t-e))(t.map(ck),ok(e)),r=n_(n.map(([,,,,e])=>e)).sort(xv),i=(e=>t=>dm(n_(t.map(([,e])=>e)).map(n=>[n,t.filter(([,e])=>e===n).map(([t,,n,r,i,s,o,a])=>[t,n,r,e.findIndex(e=>e===i),s,o,a]).slice(0,10)])))(r)(n)
return{seData:i,realms:r}}const dk=sh()
let fk=!1,pk={},hk=0,gk=!1
const vk=e=>Math.max(0,600-(jo()-(e?.lastUpdate??0)),600-(jo()-hk))
function _k(e){const t=e.replace("<br>"," ").split(/[: /]/)
return ik([t[2],t[1],t[0],t[3],t[4]])}function mk(e){const t=$h(e.childNodes).filter(e=>e.nodeType===Node.TEXT_NODE&&""!==Ah(e))
return 0===t.length?"":t.map(e=>Ah(e)).join(" ")}const bk=e=>({time:_k(e.cells[0].innerHTML)/1e3,creature:Ah(e.cells[1]),creatureId:Number(l(ia,Jl("img",e.cells[1]).src)),playerId:t_(Jl("a",e.cells[2])),playerName:Ah(Jl("a",e.cells[2])),location:mk(e.cells[2]),drop:sk(Jl("img",e.cells[3]))??"no drop"})
async function yk(){hk=jo()
const e=await async function(){const e=await fv({cmd:"superelite"})
return e&&Jl('img[src*="eliteslayerlog"]',e)?Fw(Jl("#pCC table table",e),4,0).map(bk):[]}()
e?.length&&(pk=uk(pk,e),q_("fsh_seLog",{lastUpdate:hk,...pk}),dk.set(pk))}function wk(e,t){gk=t,e(gk),gk&&!fk&&async function(){for(fk=!0,pk=await D_("fsh_seLog"),dk.set(pk);gk;)fk=!0,await Xg(1e3*vk(pk)),gk&&await yk(),fk=!1}()}const kk=function(){const{subscribe:e,set:t}=sh(0)
return{subscribe:e,set:Rh(wk,t)}}()
const xk=[function(){ql("moveGuildList")&&rk("minibox-guild")},function(){ql("moveOnlineAlliesList")&&rk("minibox-allies")},function(){ql("moveXmasBox")&&nk("minibox-xmas")},function(){ql("moveDailyQuest")&&nk("minibox-daily-quest")},function(){ql("moveFSBox")&&nk("minibox-fsbox")},async function(){if(!pc.enableAllyOnlineList&&!pc.enableEnemyOnlineList||fm())return
!function(e){e&&Lc(3,ly,[e])}(await Ib(!1))},function(){!pc.enableWantedList&&!pc.enableActiveBountyList||fm()||(pc.enableActiveBountyList&&(Rm=Dm(),vg(Dh(),Rm)),pc.enableWantedList&&(jm=Dm(),vg(Dh(),jm)),Fm()&&qv(Fm(),$b),Nm()&&qv(Nm(),$b),Cb())},function(){if(!pc.enableGuildInfoWidgets)return
const e=t("minibox-guild-members-list")
e&&(Jw(e,1),Xw(e,"guild"),zw(e,Zw),ek(4,"Chat","chat"),ek(3,"Guild","manage"))},function(){if(!pc.enableOnlineAlliesWidgets)return
const e=t("minibox-allies-list")
e&&(Jw(e,2),Xw(e,"ally"),zw(e,tk))},function(){pc.enableTempleAlert&&"temple"!==pc.cmd&&!fm()&&Rw()},function(){pc.enableUpgradeAlert&&d_()&&!qw()&&function(){if(ql("needToDoUpgrade"))return void Bw()
const e=ql("lastUpgradeCheck");(!e||Fo()>e)&&Hw()}()},function(){pc.enableComposingAlert&&"composing"!==pc.cmd&&d_()&&dw()},function(){Dh()&&!fm()&&Om()},function(){fm()||(window.openQuickMsgDialog=nw)},function(){ql("statBarLinks")&&(Ww(va,"character"),Ww(`${Sa+ua}reserve`,"stamina"),Ww(ja,"equipment"),Ww(ma,"inventory"),Ww(Sa,"fsp"),Ww(`${ca}bank`,"gold"))},function(){if(!ql("staminaCalculator"))return
const e=hg("stat-stamina-nextGain")
if(0===e.length)return
const n=t("statbar-stamina-tooltip-stamina"),r=(e=>cy(hg("stat-name",e)).split(" / "))(n)
2===r.length&&Hm(n,function(e,t){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${py(cy(e),Math.floor((uy(t[1])-uy(t[0]))/dy("stat-stamina-gainPerHour")))}`}(e,r))},function(){if(!ql("levelUpCalculator"))return
const e=hg("stat-xp-nextGain")
0!==e.length&&Hm(t("statbar-level-tooltip-general"),`<dt class="stat-xp-nextLevel">Next Level At</dt>${py(cy(e),Math.ceil(dy("stat-xp-remaining")/dy("stat-xp-gainPerHour")))}`)},function(){if(!ql("fsboxlog"))return
const e=t("minibox-fsbox")
e&&Ay(e)},function(){ql("resizeQuickBuff")&&(window.openWindow=function(e,t,n,r,i){sg("chrome","interceptQuickBuff"),Db(e,t,n,r,i)})},function(){if(!ql("joinAllLink"))return
const e=t("notification-guild-group")
e&&function(e){_g("",e),tp(Sw,{target:e})}(e)},function(){if(!ql("addScoutTowerLink")||!lg())return
const e=t("minibox-spoilsofwar")
if(!e)return
const n=e.children[1]
if(!n)return
const r=n.children[0]
Hm(r,"&nbsp;"),vg(r,function(){const e=pm({dataset:{tooltip:"View Scout Report"},href:Ca,innerHTML:`<img id="fshScoutTower" src="${Vo}structures/27.png">`})
return qv(e,()=>sg("chrome","scout tower link")),e}())},function(){d_()&&ql(pl)&&cm()},function(){d_()&&pc.enableSeTracker&&kk.set(pc.enableSeTracker)},function(){ql("dailyQuestReRoll")&&Bh()&&qv(Bh(),Cy,!0)}]
const Sk=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function Ek(){Kv()||(Sk.forEach(Wv),pc.allyEnemyOnlineRefreshTime=1e3*ql("allyEnemyOnlineRefreshTime"),pc.useNewGuildLog&&(uc(document.body,"click",Qv),uc(document.body,"auxclick",Qv)),Jv(xk))}function Pk(e){const t=Kl(e)
t?.["new-ui"]&&(ql("gameHelpLink")&&Lc(3,Gv),pc.huntingMode=ql("huntingMode"),Lc(3,Fv),Ek(),ql("hideHelperMenu")||Lc(3,Yg))}function Ck(){const e=function(){const e=t("html")
if(e?.dataset)return e.dataset.hcs}()
e&&Pk(e)}function Lk(){d_()&&t("worldPage")&&window.GameData&&wg(import("./newMap-CKomjYLH.js"))}const $k={"-":{"-":()=>{wg(import("./arena-DWkOa_Nk.js").then(function(e){return e.b}))}},dojoin:{"-":()=>{wg(import("./arenaDoJoin-Cqan_XtN.js"))}},join:{"-":()=>{wg(import("./arenaJoin-BW54Hurc.js"))}},completed:{"-":()=>{wg(import("./completedArenas-DW-vIi-X.js"))}},pickmove:{"-":()=>{wg(import("./storeMoves-BrzimUGT.js"))}},setup:{"-":()=>{wg(import("./setupMoves-CYj7-VCy.js"))}}}
var Tk={"-":{"-":()=>{wg(import("./injectAuctionHouse-DI7YRyPc.js"))}},quickcreate:{"-":()=>{wg(import("./quickCreate-B-Ou5nMl.js"))}}}
var Ok={"-":{"-":()=>{wg(import("./composing-BIoABuvN.js"))}},breakdown:{"-":()=>{wg(import("./breakdown-Bxo4Chyv.js"))}},create:{"-":()=>{wg(import("./composingCreate-Bsflyzkr.js"))}}}
function Ik(){wg(import("./bioWidgets-BPepXo-i.js"))}function Ak(){wg(import("./injectGuild-BJzUaTV6.js"))}const Mk=()=>{wg(import("./guildAdvisor-Gi3YmIwN.js"))}
const Rk=()=>{wg(import("./groups-DZV29-fh.js"))}
const jk=()=>{wg(import("./addRemoveTags-CiQzn7JS.js"))}
const Fk=()=>{wg(import("./guildChat-fQOzN3ny.js"))}
var Nk={inventory:{report:()=>{wg(import("./guildReport-DN95izqb.js"))},addtags:jk,removetags:jk,storeitems:()=>{wg(import("./storeitems-DemWOuWk.js"))}},chat:{"-":Fk},dochat:{"-":Fk},log:{"-":()=>{wg(import("./guildLog-C2zDot3b.js"))}},groups:{viewstats:()=>{wg(import("./injectGroupStats-C4lntpBv.js"))},joinallgroupsundersize:Rk,joinall:Rk,"-":Rk},manage:{"-":Ak},advisor:{"-":Mk,weekly:Mk},history:{"-":Ik},view:{"-":Ak},scouttower:{"-":()=>{wg(import("./injectScouttower-DlasL-_q.js"))}},mailbox:{"-":()=>{wg(import("./guildMailbox-9RkQETgJ.js"))}},ranks:{"-":()=>{wg(import("./rank-sFZ7ARgc.js"))}},conflicts:{rpupgrades:()=>{wg(import("./injectRPUpgrades-CtxiouLp.js"))}},bank:{"-":()=>{wg(import("./injectGuildBank-BS9PsBuj.js"))}},hall:{"-":()=>{wg(import("./hall-Dd_lZuT2.js"))},post:Ik},"-":{"-":Ak},titanrewards:{"-":()=>{wg(import("./titanrewards-Cs2R6cZN.js"))}}}
function Dk(){wg(import("./viewRecipe-B6TVQFBu.js"))}var qk={"-":{"-":function(){wg(import("./inventing-DFUZfAf5.js"))}},doinvent:{"-":Dk},viewrecipe:{"-":Dk}}
function Bk(){wg(import("./ufsgAllowBack-du85sUBb.js"))}var Hk={"-":{"-":Bk},view:{"-":()=>{wg(import("./itemsView-zgSw02og.js"))}}}
function Uk(){wg(import("./profile-T9HeK0Rp.js").then(function(e){return e.p}))}function Gk(){wg(import("./news-cM6ui4yH.js"))}function Wk(){wg(import("./viewArchive-DJgV3Q9x.js"))}var zk={fsbox:{"-":()=>{wg(import("./newsFsbox-BM7JtLlT.js"))}},"-":{"-":Gk},shoutbox:{"-":()=>{wg(import("./newsShoutbox-7gxLmTxE.js"))}},viewupdatearchive:{"-":Wk},viewarchive:{"-":Wk}}
var Vk={news:{"-":Gk},viewupdatearchive:{"-":Wk},viewarchive:{"-":Wk},"-":{"-":()=>{wg(import("./unknownPage-81Me7t5g.js"))}}},Qk=Kf('<button class="modal-close svelte-1dt59d4" type="button">×</button>')
Gf(["click"])
var Kk=Kf('<div class="modal-title svelte-1ftnqia"><!> <!></div> <div class="modal-content svelte-1ftnqia"><!></div>',1)
function Jk(e,t){Cu(t,!0)
let n=hh(t,"visible",3,!0),r=gd(void 0),i=gd(void 0)
gh(()=>{ng(If(i),If(r))}),by(e,{get close(){return t.close},get visible(){return n()},get modal(){return If(r)},set modal(e){_d(r,e,!0)},children:(e,n)=>{var r=Kk(),s=Id(r),o=Od(s)
vp(o,()=>t.title??Uc),function(e,t){var n=Qk()
n.__click=function(...e){t.close?.apply(this,e)},Xf(e,n)}(Ad(o,2),{get close(){return t.close}}),eh(s,e=>_d(i,e),()=>If(i)),vp(Od(Ad(s,2)),()=>t.children??Uc),Xf(e,r)},$$slots:{default:!0}}),Lu()}function Yk(e,t,n){sg("GS Export","Items Mold"),_d(t,n(),!0)}wu=!0
var Xk=Kf('<button type="button" class="mold-btn svelte-1hsd3o">Download Item Groups JSON</button>'),Zk=Kf('<span class="error svelte-1hsd3o">Error loading mold data</span>'),ex=Kf("<span>Loading mold data...</span>"),tx=Kf('<div class="mold-link svelte-1hsd3o"><!></div>')
function nx(e,t){Cu(t,!0)
let n=gd(wd(Promise.resolve(null)))
async function r(){const e=await sv({cmd:"molds"})
if(e?.s&&e.r?.molds&&e.r?.cdns?.length)return function(e){const t=e.r.molds?.find(e=>"item_groups.json"===e.filename)
if(!t)throw new Error("Failed to load mold data")
const n=`${e.r.cdns[0]}${t.filename}`
return window.open(n,"_blank"),null}(e)
throw new Error("Failed to load mold data")}var i=tx()
op(Od(i),()=>If(n),e=>{Xf(e,ex())},e=>{var t=Xk()
t.__click=[Yk,n,r],Xf(e,t)},e=>{Xf(e,Zk())}),Xf(e,i),Lu()}function rx(e,t){const n=URL.createObjectURL(e),r=pm({download:t,href:n,style:{display:"none"}})
vg(document.body,r),Iv(r),document.body.removeChild(r),setTimeout(()=>{URL.revokeObjectURL(n)},0)}function ix(){return Y_({inc_tagged:"1",subcmd:"guild_store"})}function sx(e,t,n){lg()&&(sg("GS Export","Generate"),_d(t,n(),!0))}function ox(e,t,n){if(!If(t))return
sg("GS Export","Download")
const r=`gs_export_${(new Date).toISOString().slice(0,19).replace(/[:.]/g,"-")}.csv`
rx(n(If(t)),r)}Gf(["click"])
var ax=Kf('<p class="error svelte-d95mlu">You must be in a guild to use this feature.</p>'),lx=Kf('<div class="export-ready svelte-d95mlu"><p class="success svelte-d95mlu">Export ready! Click the button below to download your CSV file.</p> <button type="button" class="svelte-d95mlu">Download CSV</button></div>'),cx=Kf('<button type="button" class="svelte-d95mlu">Generate Export</button>'),ux=Kf('<p class="error svelte-d95mlu">Failed to generate export.</p>'),dx=Kf('<button type="button" disabled class="svelte-d95mlu">Generating Export...</button> <div class="progress svelte-d95mlu"><p class="svelte-d95mlu">Loading guild store inventory...</p> <div class="spinner svelte-d95mlu"></div></div>',1)
function fx(e,t){Cu(t,!0)
let n=gd(wd(Promise.resolve(null))),r=gd(null)
const i=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],s=e=>{return[...i(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??""])].join(",")
var t},o=e=>new Blob([e],{type:"text/csv"})
async function a(){const e=await ix()
if(!e?.items?.length)throw new Error("Invalid export data")
const t=e.items
return _d(r,`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name\n${(e=>e.map(s).join("\n"))(t)}\n`),null}var l=Yf(),c=Id(l),u=e=>{Xf(e,ax())},d=e=>{var t=Yf()
op(Id(t),()=>If(n),e=>{Xf(e,dx())},e=>{var t=Yf(),i=Id(t),s=e=>{var t=lx()
Ad(Od(t),2).__click=[ox,r,o],Xf(e,t)},l=e=>{var t=cx()
t.__click=[sx,n,a],Xf(e,t)}
ap(i,e=>{If(r)?e(s):e(l,!1)}),Xf(e,t)},e=>{Xf(e,ux())}),Xf(e,t)}
ap(c,e=>{lg()?e(d,!1):e(u)}),Xf(e,l),Lu()}Gf(["click"])
var px=Kf('<div class="gs-export svelte-6n2izk"><p class="svelte-6n2izk">Export your Guild Store inventory data to a CSV file for analysis.</p> <!> <!></div>')
function hx(e,t){Cu(t,!0)
let n=hh(t,"visible",15,!0)
{const t=e=>{Xf(e,Jf("Guild Store Export"))}
Jk(e,{close:function(){sg("GS Export","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{!function(e){var t=px(),n=Ad(Od(t),2)
nx(n,{}),fx(Ad(n,2),{}),Xf(e,t)}(e)},$$slots:{title:!0,default:!0}})}Lu()}const gx=wd({visible:!0})
let vx=0
var _x=Object.freeze({__proto__:null,default:function(){vx?gx.visible=!0:vx=tp(hx,{props:gx,target:document.body})}}),mx=Kf("<div></div>"),bx=Kf("<div> </div>"),yx=Kf("<virtual-scroll-item><!></virtual-scroll-item>",2),wx=Kf("<div></div>"),kx=Kf("<virtual-scroll-viewport><virtual-scroll-content><!> <!> <!></virtual-scroll-content></virtual-scroll-viewport>",2)
function xx(e,t){Cu(t,!0)
let n=hh(t,"items",19,()=>[]),r=hh(t,"overscan",3,5),i=hh(t,"scrollToIndex",15)
let s,o=gd(0),a=gd(0),l=gd(void 0),c=gd(0),u=gd(!1),d=[],f=[],p=50,h=gd(0),g=!1,v=!1,_=!1
const m=ld(()=>n().slice(If(o),If(a)).map((e,t)=>({index:t+If(o),item:e}))),b=ld(()=>w(If(o))),y=ld(()=>If(a)>=n().length?0:If(h)-w(If(a)))
function w(e){if(!d.length)return e*p
if(void 0!==f[e])return f[e]
let t=0
for(let n=0;n<e;n++)t+=d[n]||p
return t}function k(e,t){d[e]!==t&&(d[e]=t,g||_||(g=!0,requestAnimationFrame(()=>{g=!1,function(){let e=0,t=0
f=[],_d(h,0)
for(let r=0;r<n().length;r++){f[r]=If(h)
const n=d[r]
n>0?(e++,t+=n,_d(h,If(h)+n)):_d(h,If(h)+p)}e>0&&(p=t/e)
if(If(u)&&If(c)>0){const e=If(l)?.scrollTop||0,t=x(e),n=S(t,e,If(c))
_d(o,t,!0),_d(a,n,!0)}}()})))}function x(e){if(!If(u)||!n().length)return 0
if(f.length){let t=0,i=n().length-1
for(;t<i;){const n=Math.floor((t+i)/2)
f[n]+(d[n]||p)>e?i=n:t=n+1}return Math.max(0,t-r())}return 0}function S(e,t,i){if(!If(u)||!n().length)return 0
const s=t+i
for(let t=e;t<n().length;t++){if((f[t]||t*p)>s)return Math.min(n().length,t+r())}return n().length}gh(()=>{_d(u,!0)}),qd(()=>{n().length&&If(u)&&(d=Array(n().length).fill(0),_d(h,n().length*p),_d(o,0),_d(a,Math.min(n().length,4*r()),!0))}),qd(()=>{if(If(c)>0&&If(u)){const e=If(l)?.scrollTop||0,t=x(e),n=S(t,e,If(c))
_d(o,t,!0),_d(a,n,!0)}}),qd(()=>{void 0!==i()&&If(u)&&(!function(e,t="smooth"){if(!If(u)||e<0||e>=n().length)return
const r=w(e)
If(l).scrollTo({top:r,behavior:t})}(i()),i(void 0))})
var E=kx()
Sp(E,0,"svelte-jpynml")
var P=Od(E)
Sp(P,0,"svelte-jpynml")
var C=Od(P),L=e=>{var t=mx()
Gd(()=>Pp(t,`height: ${If(b)??""}px;`)),Xf(e,t)}
ap(C,e=>{If(b)>0&&e(L)})
var $=Ad(C,2)
up($,17,()=>If(m),({index:e,item:t})=>e,(e,n)=>{let r=()=>If(n).index
var i=yx()
Sp(i,0,"svelte-jpynml")
var s=Od(i),o=e=>{var i=Yf()
vp(Id(i),()=>t.children,()=>({item:If(n).item,index:r()})),Xf(e,i)},a=e=>{var t=bx(),n=Od(t)
Gd(()=>ep(n,`Item ${r()??""}`)),Xf(e,t)}
ap(s,e=>{t.children?e(o):e(a,!1)}),mp(i,(e,t)=>function(e,{index:t,updateItemHeight:n}){function r(){const r=e.offsetHeight
r>0&&n(t,r)}const i=new ResizeObserver(r)
return i.observe(e),r(),{destroy(){i.disconnect()}}}?.(e,t),()=>({index:r(),updateItemHeight:k})),Xf(e,i)})
var T=Ad($,2),O=e=>{var t=wx()
Gd(()=>Pp(t,`height: ${If(y)??""}px;`)),Xf(e,t)}
ap(T,e=>{If(y)>0&&e(O)}),eh(E,e=>_d(l,e),()=>If(l)),Uf("scroll",E,function(){If(u)&&!v&&(_=!0,clearTimeout(s),s=setTimeout(()=>{_=!1},150),v=!0,requestAnimationFrame(()=>{v=!1
const e=If(l).scrollTop,t=x(e),n=S(t,e,If(c))
If(o)===t&&If(a)===n||(_d(o,t,!0),_d(a,n,!0))}))}),Xp(E,"offsetHeight",e=>_d(c,e)),Xf(e,E),Lu()}const Sx={}
let Ex=-1
function Px(e,t){Lc(3,t.func,[e])}function Cx(e,t){if(Sx[e])return Sx[e].forEach(Rh(Px,t)),!0}function Lx(e,t){Sx[e]||(Sx[e]=[]),Ex+=1
const n=Ex.toString()
return Sx[e].push({token:n,func:t}),n}function $x(e,t){return Sx[e]?Sx[e][0].token:Lx(e,t)}async function Tx(e=-1,t=1,n=[]){const r=await function(e,t,n){return fw({subcmd:"log",log_id:e,latest:t,limit:n})}(e,t,1e3)
if(!r?.s)return void Cx("guildLog-progress","Server Error.")
Cx("guildLog-progress")
const i=n.concat(r.r.logs)
return 1e3!==r.r.logs.length?i:Tx(r.r.logs[0].id,0,i)}var Ox=Kf('<button type="button" class="svelte-1o6o1uz"><!></button>')
function Ix(e,t){let n=hh(t,"disabled",3,0)
var r=Ox()
r.__click=function(...e){t.onclick?.apply(this,e)},vp(Od(r),()=>t.children??Uc),Gd(()=>r.disabled=n()),Xf(e,r)}Gf(["click"])
var Ax=Kf('<span class="svelte-1sxqwyk">[<!>]</span>')
function Mx(e,t){var n=Ax()
Ix(Ad(Od(n)),{get onclick(){return t.onclick},children:(e,n)=>{var r=Yf()
vp(Id(r),()=>t.children??Uc),Xf(e,r)},$$slots:{default:!0}}),Xf(e,n)}function Rx(e,t,n){t(),n.cbChange()}var jx=Kf('<div class="filter-header svelte-1onji9i"><div class="filters svelte-1onji9i"><div class="front svelte-1onji9i"><span>Filters:</span></div> <div><label>Potions: <input type="checkbox"/></label></div> <div><label>Store/Recalls: <input type="checkbox"/></label></div> <div><label>Relics: <input type="checkbox"/></label></div> <div><label>Mercenaries: <input type="checkbox"/></label></div> <div><label>Group Combats: <input type="checkbox"/></label></div> <div><!></div> <div><label>Donations: <input type="checkbox"/></label></div> <div><label>Rankings: <input type="checkbox"/></label></div> <div><label>GvGs: <input type="checkbox"/></label></div> <div><label>Tag/UnTags: <input type="checkbox"/></label></div> <div><label>Titans: <input type="checkbox"/></label></div> <div><label>Other: <input type="checkbox"/></label></div></div> <div class="button-row svelte-1onji9i"><div></div> <div class="buttons svelte-1onji9i"><div><!></div> <div><!></div> <div><!></div></div> <div class="search-box svelte-1onji9i"><label>Search: <span class="search-wrapper svelte-1onji9i"><input type="text" class="svelte-1onji9i"/> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></span></label></div></div></div>')
function Fx(e){return`${e[0]}-${e[1]}-${e[2]} ${e[3]}:${e[4]}:${e[5]}`}function Nx(e){return"[object Date]"===Object.prototype.toString.call(e)&&!Nw(e.getTime())}function Dx(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(fy)}(e))}function qx(e){if(Nx(e))return Fx(Dx(e))}function Bx(e){return qx(new Date(1e3*e))}Gf(["change"])
let Hx=null
function Ux(){const e=t("holdtext")
if(e&&!Hx){const t=l(/fallensword.com\/\?ref=(?<id>\d+)/,n(e))
t&&(Hx=Number(t))}return Hx}function Gx(e){return sv({cmd:"combat",subcmd:"view",combat_id:e})}const Wx="fsh_pvpCombat"
let zx=null,Vx={}
const Qx={}
async function Kx(){const e=await D_(Wx)
return Vx=e?(e?.lastCheck??0)<Ho()?function(e){var t
const n={...dm(cg(e).filter((t=Uo(),([e,n])=>"lastCheck"===e||n?.logTime>t))),lastCheck:qo()}
return q_(Wx,n),n}(e):e:{lastCheck:qo()},Vx}async function Jx(e,t){Qx[t]=lv(Gx,0,t)
const n=await Qx[t]
if(n?.s)return Vx[t]={...n,logTime:e},q_(Wx,Vx),n
delete Qx[t]}async function Yx(e,t){zx||(zx=Kx())
const n=await zx
return n[t]?n[t]:Qx[t]?Qx[t]:Jx(e,t)}function Xx(){return e={subcmd2:"view"},fw({subcmd:"recruit",...e})
var e}var Zx=Kf('<i class="fas fa-envelope" aria-hidden="true"></i>'),eS=Kf('<a class="svelte-87xocm"> </a>'),tS=Kf('[ <a class="svelte-87xocm"><img class="svelte-87xocm"/> </a> ]',1),nS=Kf("<!> <!>",1),rS=Kf('<span class="action-buttons svelte-87xocm">[ <!> | <!> ]</span>'),iS=Kf('<div class="rel svelte-87xocm"> </div>'),sS=Kf('<div class="rel svelte-87xocm"><span class="fshSpinner recruit-spinner svelte-87xocm"></span></div>'),oS=Kf('<!> <span class="action-buttons svelte-87xocm">[ <!> | <!> | <!> | <!> ]</span>',1),aS=Kf('<span class="action-buttons svelte-87xocm">[ <!> ]</span>'),lS=Kf('<div><a class="svelte-87xocm"> </a>\'s group looted the item \'<span class="fshGreen"> </span>\'</div>'),cS=Kf("<div><div><!></div> <div><!></div> <div><!> <!> <!> <!></div></div>")
function uS(e,t){Cu(t,!0)
let n=hh(t,"groupCombatItems",3,null),r=hh(t,"hideNonPlayerGuildLogMessages",3,null),i=hh(t,"logEntry",3,null),s=gd(wd(Promise.resolve())),o=gd("waiting")
function a(e){sg("Guild Log",e)}const l=e=>e
function c(e){const t=e.msg.attachments?.filter(e=>0===e.type)
return t?.length&&!t.filter(({data:{id:e}})=>e===Ux()).length}async function u(e,t){a(t),_d(s,Xx(),!0)
const n=await If(s)
if(n?.s&&hc(n?.r)){const r=n.r.find(({player:{id:t}})=>t===e.id)
r?.id?bv(`${Ea}recruit&subcmd2=${t}&id=${r.id}`):_d(o,"gone")}else _d(o,"error")}var d=cS()
let f
var p=Od(d)
let h
var g=Od(p),v=e=>{Xf(e,Zx())}
ap(g,e=>{i().time&&e(v)})
var _=Ad(p,2)
let m
var b=Od(_),y=e=>{var t=Jf()
Gd(e=>ep(t,e),[()=>Bx(i().time)]),Xf(e,t)}
ap(b,e=>{i().time&&e(y)})
var w=Ad(_,2)
let k
var x=Od(w)
up(x,17,()=>i().msg.text.split(/<link=a(\d)><\/link>/).filter(l),cp,(e,t)=>{var n=Yf(),r=Id(n),s=e=>{var n=nS(),r=Id(n),s=e=>{var n=eS(),r=Od(n)
Gd(()=>{Ap(n,"href",`${_a??""}${i().msg.attachments[If(t)].data.id??""}`),ep(r,i().msg.attachments[If(t)].data.name)}),Xf(e,n)}
ap(r,e=>{0===i().msg.attachments[If(t)].type&&e(s)})
var o=Ad(r,2),a=e=>{var n=tS(),r=Ad(Id(n)),s=Od(r),o=Ad(s,1,!0)
Gd(()=>{Ap(r,"href",`${Ta??""}${i().msg.attachments[If(t)].data.id??""}`),Ap(s,"src",`${Vo??""}guilds/${i().msg.attachments[If(t)].data.id??""}_mini.png`),Ap(s,"alt",i().msg.attachments[If(t)].data.name),ep(o,i().msg.attachments[If(t)].data.name)}),Xf(e,n)}
ap(o,e=>{1===i().msg.attachments[If(t)].type&&e(a)}),Xf(e,n)},o=e=>{var n=Jf()
Gd(()=>ep(n,If(t))),Xf(e,n)}
ap(r,e=>{1!==If(t).length||Nw(Number(If(t)))?e(o,!1):e(s)}),Xf(e,n)})
var S=Ad(x,2)
up(S,17,()=>i().msg.attachments&&i().msg.attachments.filter(({type:e})=>0===e),cp,(e,t)=>{let n=()=>If(t).data
var r=oS(),l=Id(r),c=e=>{var t=Yf()
op(Id(t),()=>If(s),e=>{Xf(e,sS())},e=>{var t=Yf(),r=Id(t),i=e=>{var t=rS(),r=Ad(Od(t))
Ix(r,{onclick:()=>u(n(),"acceptjoin"),children:(e,t)=>{Xf(e,Jf("Accept"))},$$slots:{default:!0}}),Ix(Ad(r,2),{onclick:()=>u(n(),"denyjoin"),children:(e,t)=>{Xf(e,Jf("Deny"))},$$slots:{default:!0}}),Xf(e,t)},s=e=>{var t=iS(),n=Od(t)
Gd(()=>ep(n,If(o))),Xf(e,t)}
ap(r,e=>{"waiting"===If(o)?e(i):e(s,!1)}),Xf(e,t)}),Xf(e,t)}
ap(l,e=>{21===i().type&&e(c)})
var d=Ad(l,2),f=Ad(Od(d))
Ix(f,{onclick:()=>function(e){a("reply"),window.openQuickMsgDialog(e.name)}(n()),children:(e,t)=>{Xf(e,Jf("Reply"))},$$slots:{default:!0}})
var p=Ad(f,2)
Ix(p,{onclick:()=>function(e){a("buff"),qb(e.id)}(n()),children:(e,t)=>{Xf(e,Jf("Buff"))},$$slots:{default:!0}})
var h=Ad(p,2)
Ix(h,{onclick:()=>function(e){a("send"),bv(`${ba}${e.name}`)}(n()),children:(e,t)=>{Xf(e,Jf("Send"))},$$slots:{default:!0}}),Ix(Ad(h,2),{onclick:()=>function(e){a("trade"),bv(`${ya}${e.name}`)}(n()),children:(e,t)=>{Xf(e,Jf("Trade"))},$$slots:{default:!0}}),Xf(e,r)})
var E=Ad(S,2)
up(E,17,()=>i().msg.attachments&&i().msg.attachments.filter(({type:e})=>11===e),cp,(e,t)=>{var n=aS()
Ix(Ad(Od(n)),{onclick:()=>function(e){a("combat"),bv(`${ca}combat&subcmd=view&combat_id=${e}`)}(If(t).data),children:(e,t)=>{Xf(e,Jf("View Combat"))},$$slots:{default:!0}}),Xf(e,n)})
var P=Ad(E,2),C=e=>{var t=Yf()
op(Id(t),()=>Yx(i().time,i().msg.attachments[0].data),null,(e,t)=>{var n=Yf(),r=Id(n),i=e=>{var n=lS(),r=Od(n),i=Od(r),s=Od(Ad(r,2))
Gd(()=>{Ap(r,"href",`${_a??""}${If(t).r.combat.attacker.group.players[0].id??""}`),ep(i,If(t).r.combat.attacker.group.players[0].name),ep(s,If(t)?.r?.combat?.items?.[0]?.n)}),Xf(e,n)}
ap(r,e=>{If(t)?.r?.combat?.items?.[0]?.n&&e(i)}),Xf(e,n)}),Xf(e,t)}
ap(P,e=>{17===i().type&&n()&&i().msg.text.includes("victorious")&&e(C)}),Gd((e,t,n,r)=>{f=Sp(d,0,"row-container svelte-87xocm",null,f,e),h=Sp(p,0,"svelte-87xocm",null,h,t),m=Sp(_,0,"svelte-87xocm",null,m,n),k=Sp(w,0,"svelte-87xocm",null,k,r)},[()=>({"not-self":r()&&c(i()),separator:i().index}),()=>({old:i().old,new:i().new}),()=>({old:i().old,new:i().new}),()=>({old:i().old,new:i().new})]),Xf(e,d),Lu()}const dS=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to","has added tags to","has removed some tags from"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited [,0-9]+ gold into the guild bank/,/deposited [,0-9]+ Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled","has been stripped of their rank by",/has revoked .+'s invite to the guild/,"has been rejected from joining the guild"],[/resulted in .* with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with","has initiated a conflict with your guild","is participating in the conflict against"],["Titan Reward item","from your guild's contribution to the defeat of the titan","7 day cooldown has been activated on your guild for this titan"]]
function fS(e,t){return Hl(t)?e.includes(t):t.test(e)}function pS(e,t){return t.some(Rh(fS,e))}function hS(e){const t=dS.findIndex(Rh(pS,e))
return-1===t?0:t}var gS=Kf('<span class="white svelte-ertdo2">(Guild Log messages not involving self are dimmed!)</span>'),vS=Kf('<div class="vs svelte-ertdo2"><!></div>'),_S=Kf(" <br/>",1),mS=Kf('<div class="fsh-guild-log svelte-ertdo2"><!> <div class="row-container svelte-ertdo2"><div class="innerColumnHeader svelte-ertdo2">&nbsp;</div> <div class="innerColumnHeader svelte-ertdo2">Date</div> <div class="innerColumnHeader svelte-ertdo2">Message <!></div></div> <!></div>')
function bS(e,t){Cu(t,!0)
let n=hh(t,"visible",15,!0),r=gd(wd(Array(11).fill(!0))),i=gd(null),s=gd(null),o=gd(wd([])),a=gd(wd(Promise.resolve())),l=gd(wd([])),c=gd("")
const u=ld(()=>If(o).filter(({fshType:e})=>If(r)[e]).filter(({searchable:e})=>""===If(c)||e.includes(If(c).toLowerCase())).map(v)),d=ld(()=>If(u).length?If(u):[{index:0,msg:{text:""}}])
let f=0,p=null,h=null,g=null
const v=(e,t)=>({...e,index:t}),_=({msg:e})=>e.text.replace(/<link=a(\d)><\/link>/g,(t,n)=>e.attachments[n].data.name),m=e=>({...e,fshType:hS(e.msg.text),new:p&&e.time>h,old:p&&(g-e.time)/60>20&&e.time<=h,searchable:_(e).toLowerCase()}),b=(e,t)=>t.time-e.time
function y(e){sg("Guild Log",e)}function w(){y("cbChange")}function k(){y("selectAll")}function x(){y("selectNone")}function S(){y("oldGuildLog"),bv(Pa)}function E(){y("clearSearch"),_d(c,"")}function P(e){_d(l,If(l).concat(e),!0)}function C(e){e?P(e):(f+=1,P(`chunk ${f}`))}async function L(){_d(l,["Loading..."],!0),_d(o,[],!0),g=(new Date).setUTCSeconds(0,0)/1e3,h=ql("lastModalGuildLogCheck")??g,Wl("lastModalGuildLogCheck",g),p=ql("enableLogColoring"),_d(i,ql("groupCombatItems"),!0),_d(s,ql("hideNonPlayerGuildLogMessages"),!0),f=0,$x("guildLog-progress",C)
const e=await lv(Tx)
e&&_d(o,e.toSorted(b).map(m),!0)}function $(){_d(a,L(),!0)}qd(()=>{n()&&$()})
{const t=e=>{Xf(e,Jf("Guild Log"))}
Jk(e,{close:function(){y("close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=mS(),o=Od(n)
!function(e,t){Cu(t,!0)
let n=hh(t,"checks",31,()=>wd(Array(11).fill(!0))),r=hh(t,"searchValue",15,"")
function i(){q_("fsh_LogChecks",xu(n()))}function s(e){n(n().map(()=>e)),i()}!async function(){n(await D_("fsh_LogChecks")??Array(11).fill(!0))}()
var o=jx(),a=Od(o),l=Ad(Od(a),2),c=Od(l),u=Ad(Od(c))
u.__change=[Rx,i,t],u.value=u.__value="1"
var d=Ad(l,2),f=Od(d),p=Ad(Od(f))
p.__change=[Rx,i,t],p.value=p.__value="2"
var h=Ad(d,2),g=Od(h),v=Ad(Od(g))
v.__change=[Rx,i,t],v.value=v.__value="4"
var _=Ad(h,2),m=Od(_),b=Ad(Od(m))
b.__change=[Rx,i,t],b.value=b.__value="5"
var y=Ad(_,2),w=Od(y),k=Ad(Od(w))
k.__change=[Rx,i,t],k.value=k.__value="6"
var x=Ad(y,2)
Ix(Od(x),{get onclick(){return t.oldGuildLog},children:(e,t)=>{Xf(e,Jf("Old Guild Log"))},$$slots:{default:!0}})
var S=Ad(x,2),E=Od(S),P=Ad(Od(E))
P.__change=[Rx,i,t],P.value=P.__value="7"
var C=Ad(S,2),L=Od(C),$=Ad(Od(L))
$.__change=[Rx,i,t],$.value=$.__value="8"
var T=Ad(C,2),O=Od(T),I=Ad(Od(O))
I.__change=[Rx,i,t],I.value=I.__value="9"
var A=Ad(T,2),M=Od(A),R=Ad(Od(M))
R.__change=[Rx,i,t],R.value=R.__value="3"
var j=Ad(A,2),F=Od(j),N=Ad(Od(F))
N.__change=[Rx,i,t],N.value=N.__value="10"
var D=Od(Ad(j,2)),q=Ad(Od(D))
q.__change=[Rx,i,t],q.value=q.__value="0"
var B=Ad(a,2),H=Ad(Od(B),2),U=Od(H)
Mx(Od(U),{onclick:function(){s(!0),t.selectAll()},children:(e,t)=>{Xf(e,Jf("Select All"))}})
var G=Ad(U,2)
Mx(Od(G),{onclick:function(){s(!1),t.selectNone()},children:(e,t)=>{Xf(e,Jf("Select None"))}}),Mx(Od(Ad(G,2)),{get onclick(){return t.refresh},children:(e,t)=>{Xf(e,Jf("Refresh"))}})
var W=Od(Ad(H,2)),z=Ad(Od(W)),V=Od(z),Q=Ad(V,2)
{let e=ld(()=>!r())
lp(Q,()=>({"--button-deco":"none"})),Ix(Q.lastChild,{get disabled(){return If(e)},get onclick(){return t.clearSearch},children:(e,t)=>{Xf(e,Jf("×"))},$$slots:{default:!0}})}Vp(u,()=>n()[1],e=>n(n()[1]=e,!0)),Vp(p,()=>n()[2],e=>n(n()[2]=e,!0)),Vp(v,()=>n()[4],e=>n(n()[4]=e,!0)),Vp(b,()=>n()[5],e=>n(n()[5]=e,!0)),Vp(k,()=>n()[6],e=>n(n()[6]=e,!0)),Vp(P,()=>n()[7],e=>n(n()[7]=e,!0)),Vp($,()=>n()[8],e=>n(n()[8]=e,!0)),Vp(I,()=>n()[9],e=>n(n()[9]=e,!0)),Vp(R,()=>n()[3],e=>n(n()[3]=e,!0)),Vp(N,()=>n()[10],e=>n(n()[10]=e,!0)),Vp(q,()=>n()[0],e=>n(n()[0]=e,!0)),Gp(V,r),Xf(e,o),Lu()}(o,{cbChange:w,clearSearch:E,oldGuildLog:S,refresh:$,selectAll:k,selectNone:x,get checks(){return If(r)},set checks(e){_d(r,e,!0)},get searchValue(){return If(c)},set searchValue(e){_d(c,e,!0)}})
var u=Ad(o,2),f=Ad(Od(u),4),p=Ad(Od(f)),h=e=>{Xf(e,gS())}
ap(p,e=>{If(s)&&e(h)}),op(Ad(u,2),()=>If(a),e=>{var t=Yf()
up(Id(t),17,()=>If(l),cp,(e,t)=>{var n=_S(),r=Id(n)
Gd(()=>ep(r,`${If(t)??""} `)),Xf(e,n)}),Xf(e,t)},e=>{var t=vS()
{const e=(e,t)=>{uS(e,{get groupCombatItems(){return If(i)},get hideNonPlayerGuildLogMessages(){return If(s)},get logEntry(){return t?.().item}})}
xx(Od(t),{get items(){return If(d)},overscan:20,children:e,$$slots:{default:!0}})}Xf(e,t)},(e,t)=>{var n=Jf()
Gd(()=>ep(n,If(t))),Xf(e,n)}),Xf(e,n)},$$slots:{title:!0,default:!0}})}Lu()}const yS=wd({visible:!0})
let wS=0
var kS=Object.freeze({__proto__:null,default:function(){wS?yS.visible=!0:wS=tp(bS,{props:yS,target:document.body})}})
function xS(){return fw({subcmd:"fetchinv"})}function SS(){return lv(xS)}function ES(e){return fw({subcmd:"inventory",...e})}function PS(){return ES({subcmd2:"report"})}function CS(){return lv(PS)}function LS(e,t,[n,r]){Ql(r)&&null!==r?e[n]=t(r.constructor(),r):e[n]=r}function $S(e,t){return Ql(t)&&cg(t).forEach(Rh(LS,e,$S)),e}function TS(e){return e?.constructor&&$S(e.constructor(),e)}Gf(["click"]),wd({visible:!0})
function OS(e,t,n){const r=(e=>Math.max(Math.min(e,100),0))((e-t)/(n-t)*100)
let i=255,s=255
r<50?s=Math.round(5.1*r):i=Math.round(510-5.1*r)
const o=(e=>`000000${e.toString(16)}`.slice(-6))(65536*i+256*s+0)
return`#${o}`}var IS=(e,t,n,r)=>{t("backpack"),n(),r()},AS=(e,t,n,r)=>{t("guildstore"),n(),r()},MS=(e,t,n)=>{t("inventory"),n()},RS=(e,t)=>{If(t)||_d(t,!0)},jS=(e,t,n)=>{t("mapping"),n()},FS=(e,t)=>{If(t)||_d(t,!0)},NS=(e,t,n)=>{t("thresholds"),n()},DS=(e,t)=>{If(t)||_d(t,!0)},qS=Kf('<div class="svelte-1eys1iq"> </div> <div class="svelte-1eys1iq"> </div>',1),BS=Kf('<div class="inventory svelte-1eys1iq"><div class="inventory-grid-container svelte-1eys1iq"></div></div>'),HS=(e,t,n)=>{t("mapped"),n()},US=Kf("<option> </option>"),GS=Kf("<option> </option>"),WS=(e,t,n)=>{t("ignore"),n()},zS=e=>e.target.blur(),VS=Kf('<div class="svelte-1eys1iq"> </div> <div class="svelte-1eys1iq"><select class="svelte-1eys1iq"><!></select></div> <div class="svelte-1eys1iq"><input title="Ignore" type="checkbox" class="svelte-1eys1iq"/></div>',1),QS=(e,t,n)=>{t("ignore-all"),n()},KS=(e,t,n)=>{t("reset"),n()},JS=Kf('<div class="mapping svelte-1eys1iq"><div class="mapping-grid-container svelte-1eys1iq"><!> <div class="svelte-1eys1iq"></div> <div class="svelte-1eys1iq"><button class="custombutton svelte-1eys1iq" type="button">Ignore All</button> <button class="custombutton svelte-1eys1iq" type="button">Reset</button></div></div></div>'),YS=(e,t,n)=>{t("minpoint"),n()},XS=(e,t,n)=>{t("maxpoint"),n()},ZS=Kf('<div class="thresholds svelte-1eys1iq">Min: <input max="999" min="0" type="number" class="svelte-1eys1iq"/> Max: <input max="999" min="0" type="number" class="svelte-1eys1iq"/></div>'),eE=Kf('<div class="filters svelte-1eys1iq"><label class="svelte-1eys1iq"><input type="checkbox"/> Member Backpacks</label> <label class="svelte-1eys1iq"><input type="checkbox"/> Guild Store</label></div> <div class="pot-report svelte-1eys1iq"><input class="tab-ctrl svelte-1eys1iq" id="pr-inv" type="checkbox"/> <label for="pr-inv" class="svelte-1eys1iq">Composed Potion Inventory</label> <input class="tab-ctrl svelte-1eys1iq" id="pr-map" type="checkbox"/> <label for="pr-map" class="svelte-1eys1iq">Mapping</label> <input class="tab-ctrl svelte-1eys1iq" id="pr-levels" type="checkbox"/> <label for="pr-levels" class="svelte-1eys1iq">Thresholds</label> <div class="panels svelte-1eys1iq"><!> <!> <!></div></div>',1),tE=Kf('<p style="color: red"> </p>'),nE=Kf('<div class="main svelte-1eys1iq"><!></div>')
function rE(e,t){Cu(t,!0)
const n="fsh_potReport",r={inventory:!1,mapping:!1,thresholds:!1,potMap:[],minpoint:20,maxpoint:30,backpack:!0,guildstore:!0}
let i=hh(t,"visible",15,!0),s=gd(null),o=gd(!1),a=gd(!1),l=gd(!1),c=gd(wd([])),u=[],d=gd(wd([]))
const f=({b:e})=>13699===e,p=e=>OS(e,If(s).minpoint,If(s).maxpoint),h=({ignore:e})=>!e,g=e=>({name:t})=>t===e,v=(e,t)=>xv(e.n,t.n),_=({r:e})=>e,m=e=>sg("pot-report",e),b=({player:e,n:t})=>({loc:e?1:2,n:t}),y=()=>q_(n,xu(If(s))),w=e=>u.filter((e=>({n:t})=>e.some(g(t)))(e)).filter(({loc:e})=>If(s).backpack||1!==e).filter(({loc:e})=>If(s).guildstore||2!==e).map((e=>({loc:t,n:n})=>({loc:t,mapped:e.find(g(n)).mapped,n:n}))(e))
function k(){y(),_d(c,function(){const e=If(s).potMap.filter(h),t=w(e)
return n_(e,"mapped").map((e=>({mapped:t})=>({name:t,count:e.filter(({mapped:e})=>e===t).length}))(t)).sort((e,t)=>xv(e.name,t.name))}(),!0),_d(d,If(s).potMap.map(e=>({...e,waiting:!0})),!0)}function x(){If(s).potMap=If(d).map(({ignore:e,mapped:t,name:n})=>({ignore:e,mapped:t,name:n})),k()}function S(){If(s).potMap=If(s).potMap.map(e=>({...e,ignore:!0})),k()}function E(){If(s).potMap=If(s).potMap.map(e=>({...e,mapped:e.name,ignore:!1})),k()}async function P(){!async function(){_d(s,await D_(n)||TS(r),!0),_d(o,If(s).inventory,!0),_d(a,If(s).mapping,!0),_d(l,If(s).thresholds,!0),If(s).backpack=If(s).backpack??r.backpack,If(s).guildstore=If(s).guildstore??r.guildstore}()
const e=await gw([SS(),CS()])
if(!hc(e[0]?.r)||!hc(e[1]?.r))throw new Error("Server Error")
u=(e=>e.flatMap(_).filter(f).map(b).sort(v))(e),If(s).potMap=n_(u,"n").map(({n:e})=>({name:e,mapped:If(s)?.potMap?.find(g(e))?.mapped||e,ignore:If(s)?.potMap?.find(g(e))?.ignore??!1})),k()}{const t=e=>{Xf(e,Jf("Pot Report"))}
Jk(e,{close:function(){m("close"),i(!1)},get visible(){return i()},title:t,children:(e,t)=>{var n=nE()
op(Od(n),P,e=>{Xf(e,Jf("Loading..."))},e=>{var t=eE(),n=Id(t),r=Od(n),i=Od(r)
i.__change=[IS,m,y,k]
var u=Od(Ad(r,2))
u.__change=[AS,m,y,k]
var f=Od(Ad(n,2))
f.__change=[MS,m,y],f.__click=[RS,o]
var h=Ad(f,4)
h.__change=[jS,m,y],h.__click=[FS,a]
var g=Ad(h,4)
g.__change=[NS,m,y],g.__click=[DS,l]
var v=Od(Ad(g,4)),_=e=>{var t=BS()
up(Od(t),21,()=>If(c),cp,(e,t)=>{let n=()=>If(t).count
var r=qS(),i=Id(r),s=Od(i),o=Ad(i,2)
let a
var l=Od(o)
Gd(e=>{ep(s,If(t).name),a=Pp(o,"",a,e),ep(l,n())},[()=>({"background-color":p(n())})]),Xf(e,r)}),Xf(e,t)}
ap(v,e=>{If(o)&&e(_)})
var b=Ad(v,2),w=e=>{var t=JS(),n=Od(t),r=Od(n)
up(r,17,()=>If(d),cp,(e,t,n)=>{let r=()=>If(t).name,i=()=>If(t).mapped
var s=VS(),o=Id(s),a=Od(o),l=Ad(o,2),c=Od(l)
c.__change=[HS,m,x],c.__mousedown=()=>{If(d)[n].waiting=!1}
var u=Od(c),f=e=>{var t=US(),n=Od(t),r={}
Gd(()=>{ep(n,i()),r!==(r=i())&&(t.__value=i())}),Xf(e,t)},p=e=>{var t=Yf()
up(Id(t),17,()=>If(d),cp,(e,t)=>{let n=()=>If(t).name
var r=GS(),s=Od(r),o={}
Gd(()=>{var e
e=r,i()===n()?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected"),ep(s,n()),o!==(o=n())&&(r.__value=n())}),Xf(e,r)}),Xf(e,t)}
ap(u,e=>{If(t).waiting?e(f):e(p,!1)})
var h=Od(Ad(l,2))
h.__change=[WS,m,x],h.__click=[zS],Gd(()=>{ep(a,r()),Ap(c,"name",r())}),Lp(c,()=>If(d)[n].mapped,e=>If(d)[n].mapped=e),Vp(h,()=>If(d)[n].ignore,e=>If(d)[n].ignore=e),Xf(e,s)})
var i=Od(Ad(r,4))
i.__click=[QS,m,S],Ad(i,2).__click=[KS,m,E],Xf(e,t)}
ap(b,e=>{If(a)&&e(w)})
var P=Ad(b,2),C=e=>{var t=ZS(),n=Ad(Od(t))
n.__input=[YS,m,k]
var r=Ad(n,2)
r.__input=[XS,m,k],Gp(n,()=>If(s).minpoint,e=>If(s).minpoint=e),Gp(r,()=>If(s).maxpoint,e=>If(s).maxpoint=e),Xf(e,t)}
ap(P,e=>{If(l)&&e(C)}),Vp(i,()=>If(s).backpack,e=>If(s).backpack=e),Vp(u,()=>If(s).guildstore,e=>If(s).guildstore=e),Vp(f,()=>If(s).inventory,e=>If(s).inventory=e),Vp(h,()=>If(s).mapping,e=>If(s).mapping=e),Vp(g,()=>If(s).thresholds,e=>If(s).thresholds=e),Xf(e,t)},(e,t)=>{var n=tE(),r=Od(n)
Gd(()=>ep(r,If(t).message)),Xf(e,n)}),Xf(e,n)},$$slots:{title:!0,default:!0}})}Lu()}Gf(["change","click","mousedown","input"])
const iE=wd({visible:!0})
let sE=0
var oE=Object.freeze({__proto__:null,default:function(){sE?iE.visible=!0:sE=tp(rE,{props:iE,target:document.body})}})
function aE(e){return Sv({subcmd:"useitem",inventory_id:e})}function lE(e){return lv(aE,0,e)}function cE(){return Y_({subcmd:"inventory"})}function uE(e,t,n,r){Wl(t,n()),r.dispatchToggle()}var dE=Kf('<label><input type="checkbox" class="svelte-1f42rtn"/> Select items in ST</label>')
function fE(e,t){Cu(t,!0)
let n=hh(t,"inSt",15,null)
const r="selectST"
n(ql(r))
var i=dE(),s=Od(i)
s.__change=[uE,r,n,t],Vp(s,n),Xf(e,i),Lu()}function pE(e){return`${e.amount} x ${Cl[e.type]}`}Gf(["change"])
const hE=[[e=>e.components?.length,e=>`You successfully extracted 1 '${e.components?.[0].n}' component(s) from 1 resource(s).`],[e=>e.frags,e=>`You gained ${e.frags.map(pE).join(", ")} Fragments by opening the Fragment Stash.`],[e=>e.mailbox_items?.length,e=>`You received 1 x '${e.mailbox_items?.[0].n}' from the container.`],[()=>1,()=>"<You failed to extract any components from resource(s)."]]
function gE(e){return hE.find(([t])=>t(e))[1](e)}const vE=(e,t,n)=>`fetchitem.php?item_id=${t}&inv_id=${n}&t=1&p=${e}`
function _E(e,t,n,r){sg("quickExtract","toggleSelectMain"),Wl(t,If(n)),r()}function mE(e,t,n){sg("quickExtract","togglePrompts"),Wl(t,If(n))}var bE=Kf('<span class="fshRed"> </span>'),yE=Kf('<li class="svelte-13gbaa4"><!></li>'),wE=Kf('<span class="fshSpinner fshSpinner12"></span>'),kE=Kf('<tr><td><!></td><td class="imgCol svelte-13gbaa4"><span class="imgSpan tip-dynamic svelte-13gbaa4"></span></td><td> </td></tr>'),xE=Kf('<tr><td colspan="3"><p style="color: red"> </p></td></tr>'),SE=Kf('<div class="svelte-13gbaa4">Select which type of plants you wish to extract all of. Only select\n    extractable resources. <br/> <!>&nbsp; <label><input type="checkbox" class="svelte-13gbaa4"/> Main Folder Only</label>&nbsp; <label><input type="checkbox" class="svelte-13gbaa4"/> Disable Prompts</label>&nbsp; <!> <br/> <table class="svelte-13gbaa4"><thead><tr><th class="actionCol svelte-13gbaa4">Actions</th><th colspan="2">Items</th></tr></thead><tbody><tr><td colspan="3"><ol></ol></td></tr><!></tbody></table></div>')
function EE(e,t){Cu(t,!0)
let n=hh(t,"visible",15,!0)
const r="selectMain",i="disableQuickExtractPrompts"
let s=gd(null),o=null,a=gd(null),l=gd(wd(ql(r))),c=gd(wd(ql(i))),u=null,d=gd(null),f=gd(wd([]))
const p=e=>"Zombie Coffin"===e.item_name||12===e.type||16===e.type,h=(e,t)=>xv(e.item_name,t.item_name),g=e=>If(a)||!e.is_in_st,v=e=>!If(l)||-1===e.folder_id
function _(){_d(d,hc(u)&&function(e,t){return n_(t,"item_name").map(n=>{return{...n,count:t.filter(e=>e.item_name===n.item_name).length,delPending:!1,extractIds:t.filter(e=>e.item_name===n.item_name).map(e=>e.inv_id),style:(r=n.item_id,`background-image: url(${Vo}items/${r}.gif)`),tip:vE(e,n.item_id,n.inv_id)}
var r})}(o,u.filter(g).filter(v)),!0)}function m(){sg("quickExtract","toggleSelectST"),_()}async function b(){const e=await cE()
o=e?.player_id,u=e?.items?.filter(p).sort(h),_()}function y(){sg("quickExtract","refresh"),_d(f,[],!0),_d(s,b(),!0)}let w
async function k(e){const t=await lE(e);(function(e){return e?.s||w===e?.e?.message||(w=e?.e?.message,_d(f,[...If(f),e?.e?.message],!0)),e?.s})(t)&&(_d(f,[...If(f),gE(t.r)],!0),u=u.filter(t=>t.inv_id!==e))}qd(()=>{n()&&(_d(f,[],!0),_d(s,b(),!0))})
{const t=e=>{Xf(e,Jf("Quick Extract"))}
Jk(e,{close:function(){sg("quickExtract","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=SE(),o=Ad(Od(n),3)
fE(o,{dispatchToggle:m,get inSt(){return If(a)},set inSt(e){_d(a,e,!0)}})
var u=Ad(o,2),p=Od(u)
p.__change=[_E,r,l,_]
var h=Ad(u,2),g=Od(h)
g.__change=[mE,i,c]
var v=Ad(h,2)
Mx(v,{onclick:y,children:(e,t)=>{Xf(e,Jf("Refresh"))}})
var b=Ad(v,4),w=Ad(Od(b)),x=Od(w),S=Od(x)
up(Od(S),21,()=>If(f),cp,(e,t)=>{var n=yE(),r=Od(n),i=e=>{var n=bE(),r=Od(n)
Gd(e=>ep(r,e),[()=>If(t).slice(1)]),Xf(e,n)},s=e=>{var n=Jf()
Gd(()=>ep(n,If(t))),Xf(e,n)}
ap(r,e=>{If(t).startsWith("<")?e(i):e(s,!1)}),Xf(e,n)}),op(Ad(x),()=>If(s),null,e=>{var t=Yf()
up(Id(t),17,()=>If(d),cp,(e,t,n)=>{let r=()=>If(t).count,i=()=>If(t).delPending
var s=kE(),o=Od(s)
let a
var l=Od(o),u=e=>{var t=Yf(),s=Id(t),o=e=>{Xf(e,wE())},a=e=>{Ix(e,{onclick:()=>async function(e){sg("quickExtract","extract",If(c)),(If(c)||await Py("Are you sure you want to extract all similar items?"))&&(If(d)[e].delPending=!0,await gw(If(d)[e].extractIds.map(k)),If(d)[e]?.count&&(If(d)[e].count=0))}(n),children:(e,t)=>{var n=Jf()
Gd(()=>ep(n,`Extract ${r()??""}`)),Xf(e,n)},$$slots:{default:!0}})}
ap(s,e=>{i()?e(o):e(a,!1)}),Xf(e,t)},f=e=>{Xf(e,Jf("Done"))}
ap(l,e=>{r()?e(u):e(f,!1)})
var p=Ad(o),h=Od(p),g=Od(Ad(p))
Gd(e=>{a=Sp(o,0,"svelte-13gbaa4",null,a,e),Ap(h,"data-tipped",If(t).tip),Pp(h,If(t).style),ep(g,If(t).item_name)},[()=>({delPending:i()})]),Xf(e,s)}),Xf(e,t)},(e,t)=>{var n=xE(),r=Od(n),i=Od(r),s=Od(i)
Gd(()=>ep(s,If(t).message)),Xf(e,n)}),Vp(p,()=>If(l),e=>_d(l,e)),Vp(g,()=>If(c),e=>_d(c,e)),Xf(e,n)},$$slots:{title:!0,default:!0}})}Lu()}Gf(["change"])
const PE=wd({visible:!0})
let CE=0
var LE=Object.freeze({__proto__:null,default:function(){CE?PE.visible=!0:CE=tp(EE,{props:PE,target:document.body})}})
const $E=(e,t)=>{sg("SE Tracker","Expand Row"),_d(t,!If(t))}
var TE=Kf('<button type="button" class="svelte-142b9qt"><!></button>'),OE=Kf('<a target="_blank" class="svelte-142b9qt"> </a>'),IE=Kf('<div></div> <div></div> <div class="last-kill svelte-142b9qt"> </div> <div><a target="_blank" class="svelte-142b9qt"> </a></div>',1),AE=Kf('<div class="wide svelte-142b9qt"></div>'),ME=Kf('<div class="expando svelte-142b9qt"><!></div> <div><!></div> <div class="last-kill svelte-142b9qt"> </div> <div><a target="_blank" class="svelte-142b9qt"> </a></div> <!>',1)
function RE(e,t){Cu(t,!0)
let n=gd(!1)
var r=ME(),i=Id(r),s=Od(i),o=e=>{var t=TE()
t.__click=[$E,n]
var r=Od(t),i=e=>{Xf(e,Jf("∨"))},s=e=>{Xf(e,Jf(">"))}
ap(r,e=>{If(n)?e(i):e(s,!1)}),Gd(()=>Ap(t,"aria-expanded",If(n))),Xf(e,t)}
ap(s,e=>{t.entry[3].length&&e(o)})
var a=Ad(i,2),l=Od(a),c=e=>{var n=OE(),r=Od(n)
Gd(e=>{Ap(n,"href",`${Ga??""}creatures${ua}view&creature_id=${t.entry[4]??""}`),ep(r,e)},[()=>t.entry[0].replaceAll("_"," ")]),Xf(e,n)},u=e=>{var n=Jf()
Gd(e=>ep(n,e),[()=>t.entry[0].replaceAll("_"," ")]),Xf(e,n)}
ap(l,e=>{t.entry[4]>0?e(c):e(u,!1)})
var d=Ad(a,2),f=Od(d),p=Ad(d,2),h=Od(p),g=Od(h),v=Ad(p,2),_=e=>{var n=AE()
up(n,21,()=>t.entry[3],cp,(e,t)=>{var n=ld(()=>Vc(If(t),2))
let r=()=>If(n)[1]
var i=IE(),s=Ad(Id(i),4),o=Od(s),a=Od(Ad(s,2)),l=Od(a)
Gd((e,t)=>{ep(o,e),Ap(a,"href",`${Ga??""}realms&search_name=${t??""}`),ep(l,r())},[()=>Bx(If(n)[0]),()=>encodeURIComponent(r())]),Xf(e,i)}),Hp(3,n,()=>xh,()=>({duration:300})),Xf(e,n)}
ap(v,e=>{If(n)&&e(_)}),Gd((e,n)=>{ep(f,e),Ap(h,"href",`${Ga??""}realms&search_name=${n??""}`),ep(g,t.entry[2])},[()=>Bx(t.entry[1]),()=>encodeURIComponent(t.entry[2])]),Xf(e,r),Lu()}function jE(e){sg("SE Tracker","Toggle Pref"),Wl("enableSeTracker",e.target.checked)}Gf(["click"])
var FE=Kf('<span class="network svelte-1n8ngaj"></span> <label>Enable SE Tracker [&thinsp; <div class="tooltip svelte-1n8ngaj">? <div class="tooltiptext svelte-1n8ngaj"><span class="tooltiptitle svelte-1n8ngaj">Enable SE Tracker</span><br/><br/> <div>If enabled, will track the last time each SE was killed.<br/> This is DIFFERENT from the usual FSH network activity.<br/> When this is enabled, if you have ANY game page open in a browser tab it\n        will scan the SE Log every 10 minutes.<br/> You do not need auto-refresh for this to work.</div></div></div> &thinsp;]: <input type="checkbox" class="svelte-1n8ngaj"/></label>',1)
Gf(["click"])
const NE=oh([kk,dk],([e,t],n)=>{t&&e?function(e,t){const n=ok(e)
t(n_(n.map(([,e])=>e)).map(e=>[e,n.filter(([,t])=>t===e).map(([e,,,,t,,,n=-1])=>[e,t,n])]).map(([e,t])=>[e,t[0][0],t[0][1],t.slice(1),t[0][2]]))}(t,n):n()})
var DE=Kf('<div><div class="innerColumnHeader svelte-1sib168">&nbsp;</div></div> <div><div class="innerColumnHeader svelte-1sib168">Creature</div></div> <div><div class="innerColumnHeader svelte-1sib168">Last Kill</div></div> <div><div class="innerColumnHeader svelte-1sib168">Location</div></div> <!>',1),qE=Kf('<div class="container svelte-1sib168"><div class="top svelte-1sib168"><!></div> <div class="tracker-table svelte-1sib168"><!></div></div>')
function BE(e){const t=()=>uh(NE,"$trackerTableStore",n),[n,r]=fh()
var i=qE(),s=Od(i)
!function(e,t){Cu(t,!1)
const[n,r]=fh()
th()
var i=FE(),s=Id(i)
Pp(s,"",{},{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQnHdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQEqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltrr+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdYSvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMFegAAAABJRU5ErkJggg==")'})
var o=Ad(s,2),a=Ad(Od(o),3)
a.__click=[jE],Vp(a,()=>uh(kk,"$trackerPrefStore",n),e=>dh(kk,e)),Xf(e,i),Lu(),r()}(Od(s),{})
var o=Od(Ad(s,2)),a=e=>{var n=DE()
up(Ad(Id(n),8),1,t,e=>e[0],(e,t)=>{RE(e,{get entry(){return If(t)}})}),Xf(e,n)}
ap(o,e=>{t()&&e(a)}),Xf(e,i),r()}function HE(e,t){Cu(t,!0)
let n=hh(t,"visible",15,!0)
{const t=e=>{Xf(e,Jf("Super Elite Tracker"))}
Jk(e,{close:function(){sg("SE Tracker","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{BE(e)},$$slots:{title:!0,default:!0}})}Lu()}const UE=wd({visible:!0})
let GE=0
var WE=Object.freeze({__proto__:null,default:function(){GE?UE.visible=!0:GE=tp(HE,{props:UE,target:document.body})}})
function zE(e,t){return`<a href="${_a}${e}">${t}</a>`}var VE=Kf("<input/>"),QE=Kf("<option> </option>"),KE=Kf("<select><option> </option><!></select>"),JE=Kf("<th><!></th>"),YE=Kf("<th></th>"),XE=Kf('<tr class="svelte-18zqsmu"><!><!></tr>'),ZE=(e,t,n)=>t(e,If(n)),eP=Kf('<th tabindex="0"> <!></th>'),tP=Kf("<th></th>"),nP=Kf("<tr><!><!></tr>"),rP=(e,t,n)=>t(e,If(n)),iP=(e,t,n,r)=>t(e,If(n),If(r).key),sP=Kf("<td><!></td>"),oP=(e,t,n)=>t(e,If(n)),aP=Kf('<td><span class="isClickable svelte-18zqsmu" tabindex="0" role="button"><!></span></td>'),lP=Kf("<tr><td><!></td></tr>"),cP=Kf("<tr><!><!></tr> <!>",1),uP=Kf("<table><thead><!><!></thead><tbody></tbody></table>")
function dP(e,t){Cu(t,!0)
let n=hh(t,"sortOrders",19,()=>[1,-1]),r=hh(t,"sortBy",15,""),i=hh(t,"sortOrder",31,()=>wd(n()?.[0]||1)),s=hh(t,"filterSelections",31,()=>wd({})),o=hh(t,"expanded",31,()=>wd([])),a=hh(t,"selected",31,()=>wd([])),l=hh(t,"expandRowKey",3,null),c=hh(t,"rowKey",19,l),u=hh(t,"expandSingle",3,!1),d=hh(t,"selectSingle",3,!1),f=hh(t,"selectOnClick",3,!1),p=hh(t,"iconAsc",3,"▲"),h=hh(t,"iconDesc",3,"▼"),g=hh(t,"iconSortable",3,""),v=hh(t,"iconExpand",3,"▼"),_=hh(t,"iconExpanded",3,"▲"),m=hh(t,"showExpandIcon",3,!1),b=hh(t,"classNameTable",3,""),y=hh(t,"classNameThead",3,""),w=hh(t,"classNameTbody",3,""),k=hh(t,"classNameSelect",3,""),x=hh(t,"classNameInput",3,""),S=hh(t,"classNameRow",3,null),E=hh(t,"classNameCell",3,""),P=hh(t,"classNameRowSelected",3,null),C=hh(t,"classNameRowExpanded",3,null),L=hh(t,"classNameExpandedContent",3,""),$=hh(t,"classNameCellExpand",3,""),T=hh(t,"clickCol",3,()=>{}),O=hh(t,"clickRow",3,()=>{}),I=hh(t,"clickExpand",3,()=>{}),A=hh(t,"clickCell",3,()=>{}),M=gd(()=>"")
if(!Array.isArray(o()))throw"'expanded' needs to be an array"
if(!Array.isArray(a()))throw"'selection' needs to be an array"
null!==l()&&console.warn("'expandRowKey' is deprecated in favour of 'rowKey'"),P()&&!c()&&console.error("'rowKey' is needed to use 'classNameRowSelected'")
let R=t.columns.some(e=>!e.hideFilterHeader&&(void 0!==e.filterOptions||void 0!==e.searchValue)),j=gd(wd({}))
const F=ld(()=>Object.fromEntries(t.columns.map(e=>[e.key,e])))
let N=ld(()=>(m()?1:0)+t.columns.length)
const D=ld(()=>t.rows.filter(e=>Object.keys(s()).every(t=>{let n=null
if(void 0===If(F)[t])return!0
if(If(F)[t]?.searchValue){if(""===s()[t])return!0
1===If(F)[t].searchValue.length?n=(If(F)[t].searchValue(e)+"").toLocaleLowerCase().indexOf((s()[t]+"").toLocaleLowerCase())>=0:2===If(F)[t].searchValue.length&&(n=!!If(F)[t].searchValue(e,s()[t]+""))}else n=!1
return n||void 0===s()[t]||s()[t]===("function"==typeof If(F)[t].filterValue?If(F)[t].filterValue(e):If(F)[t].value(e))})).map(e=>Object.assign({},e,{$sortOn:If(M)(e),$expanded:null!==c()&&o().indexOf(e[c()])>=0,$selected:null!==c()&&a().indexOf(e[c()])>=0})).sort((e,t)=>r()?e.$sortOn>t.$sortOn?i():e.$sortOn<t.$sortOn?-i():0:0)),q=e=>[].concat(e).filter(e=>null!==e&&"string"==typeof e&&""!==e).join(" ")
qd(()=>{let e=If(F)[r()]
void 0!==e&&!0===e.sortable&&"function"==typeof e.value&&_d(M,t=>e.value(t))}),qd(()=>{R&&t.columns&&t.rows&&(_d(j,{},!0),t.columns.forEach(e=>{"function"==typeof e.filterOptions?If(j)[e.key]=e.filterOptions(t.rows):Array.isArray(e.filterOptions)&&(If(j)[e.key]=e.filterOptions.map(e=>({name:e,value:e})))}))})
const B=(e,t)=>{t.sortable&&(i(t.key===r()?n()[(n().findIndex(e=>e===i())+1)%n().length]:n()[0]),r(i()?t.key:void 0)),T()({event:e,col:t,key:t.key})},H=(e,t)=>{f()&&(d()?a().includes(t[c()])?a([]):a([t[c()]]):a().includes(t[c()])?a(a().filter(e=>e!=t[c()])):a([...a(),t[c()]].sort())),O()({event:e,row:t})},U=(e,t)=>{t.$expanded=!t.$expanded
const n=t[c()]
u()&&t.$expanded?o([n]):u()?o([]):t.$expanded?o([...o(),n]):o(o().filter(e=>e!=n)),I()({event:e,row:t})},G=(e,t,n)=>{A()({event:e,row:t,key:n})}
var W=uP(),z=Od(W),V=Od(z),Q=e=>{var n=XE(),r=Od(n)
up(r,17,()=>t.columns,cp,(e,t)=>{var n=JE(),r=Od(n),i=e=>{var n=VE()
Gd(e=>{Sp(n,0,e,"svelte-18zqsmu"),Ap(n,"placeholder",If(t).filterPlaceholder)},[()=>yp(q(x()))]),Gp(n,()=>s()[If(t).key],e=>s(s()[If(t).key]=e,!0)),Xf(e,n)},o=e=>{var n=Yf(),r=Id(n),i=e=>{var n=KE(),r=Od(n),i=Od(r)
r.value=(r.__value=void 0)??"",up(Ad(r),17,()=>If(j)[If(t).key],cp,(e,t)=>{var n=QE(),r=Od(n),i={}
Gd(()=>{ep(r,If(t).name),i!==(i=If(t).value)&&(n.value=(n.__value=If(t).value)??"")}),Xf(e,n)}),Gd(e=>{Sp(n,0,e,"svelte-18zqsmu"),ep(i,If(t).filterPlaceholder||"")},[()=>yp(q(k()))]),Lp(n,()=>s()[If(t).key],e=>s(s()[If(t).key]=e,!0)),Xf(e,n)}
ap(r,e=>{If(t).hideFilterHeader||void 0===If(j)[If(t).key]||e(i)},!0),Xf(e,n)}
ap(r,e=>{If(t).hideFilterHeader||void 0===If(t).searchValue?e(o,!1):e(i)}),Gd(e=>Sp(n,0,e,"svelte-18zqsmu"),[()=>yp(q([If(t).headerFilterClass]))]),Xf(e,n)})
var i=Ad(r),o=e=>{Xf(e,YE())}
ap(i,e=>{m()&&e(o)}),Xf(e,n)}
ap(V,e=>{R&&e(Q)})
var K=Ad(V),J=e=>{var n=Yf()
vp(Id(n),()=>t.svelteTableHeader,()=>({sortOrder:i(),sortBy:r()})),Xf(e,n)},Y=e=>{var n=nP(),s=Od(n)
up(s,17,()=>t.columns,cp,(e,t)=>{var n=eP()
n.__click=[ZE,B,t]
var s=Od(n),o=Ad(s),a=e=>{var t=Yf()
gp(Id(t),()=>1===i()?p():h()),Xf(e,t)},l=e=>{var n=Yf(),r=Id(n),i=e=>{var t=Yf()
gp(Id(t),g),Xf(e,t)}
ap(r,e=>{If(t).sortable&&e(i)},!0),Xf(e,n)}
ap(o,e=>{r()===If(t).key?e(a):e(l,!1)}),Gd(e=>{Sp(n,0,e,"svelte-18zqsmu"),ep(s,`${If(t).title??""} `)},[()=>yp(q([If(t).sortable?"isSortable":"",If(t).headerClass]))]),Uf("keypress",n,e=>"Enter"===e.key&&B(e,If(t))),Xf(e,n)})
var o=Ad(s),a=e=>{Xf(e,tP())}
ap(o,e=>{m()&&e(a)}),Xf(e,n)}
ap(K,e=>{t.svelteTableHeader?e(J):e(Y,!1)})
var X=Ad(z)
up(X,21,()=>If(D),cp,(e,n,r)=>{var i=Yf(),s=Id(i),o=e=>{var i=Yf()
vp(Id(i),()=>t.svelteTableRow,()=>({row:If(n),n:r})),Xf(e,i)},a=e=>{var i=cP(),s=Id(i)
s.__click=[rP,H,n]
var o=Od(s)
up(o,17,()=>t.columns,cp,(e,t,i)=>{var s=sP()
s.__click=[iP,G,n,t]
var o=Od(s),a=e=>{const r=ld(()=>If(t).renderComponent.component||If(t).renderComponent)
var i=Yf()
_p(Id(i),()=>If(r),(e,r)=>{r(e,function(...e){return new Proxy({props:e},ph)}(()=>If(t).renderComponent.props||{},{get row(){return If(n)},get col(){return If(t)}}))}),Xf(e,i)},l=e=>{var s=Yf(),o=Id(s),a=e=>{var s=Yf()
gp(Id(s),()=>If(t).renderValue?If(t).renderValue(If(n),r,i):If(t).value(If(n),r,i)),Xf(e,s)},l=e=>{var s=Jf()
Gd(e=>ep(s,e),[()=>If(t).renderValue?If(t).renderValue(If(n),r,i):If(t).value(If(n),r,i)]),Xf(e,s)}
ap(o,e=>{If(t).parseHTML?e(a):e(l,!1)},!0),Xf(e,s)}
ap(o,e=>{If(t).renderComponent?e(a):e(l,!1)}),Gd(e=>Sp(s,0,e,"svelte-18zqsmu"),[()=>yp(q(["string"==typeof If(t).class?If(t).class:null,"function"==typeof If(t).class?If(t).class(If(n),r,i):null,E()]))]),Uf("keypress",s,e=>"Enter"===e.key&&G(e,If(n),If(t).key)),Xf(e,s)})
var a=Ad(o),l=e=>{var t=aP(),r=Od(t)
r.__click=[oP,U,n],gp(Od(r),()=>If(n).$expanded?v():_()),Gd(e=>Sp(t,0,e,"svelte-18zqsmu"),[()=>yp(q($()))]),Uf("keypress",r,e=>"Enter"===e.key&&U(e,If(n))),Xf(e,t)}
ap(a,e=>{m()&&e(l)})
var c=Ad(s,2),u=e=>{var i=lP(),s=Od(i)
vp(Od(s),()=>t.svelteTableExpanded??Uc,()=>({row:If(n),n:r})),Gd(e=>{Sp(i,0,e,"svelte-18zqsmu"),Ap(s,"colspan",If(N))},[()=>yp(q(L()))]),Xf(e,i)}
ap(c,e=>{If(n).$expanded&&e(u)}),Gd(e=>{Sp(s,0,e,"svelte-18zqsmu"),Ap(s,"tabindex",f()?"0":null)},[()=>yp(q(["string"==typeof S()?S():null,"function"==typeof S()?S()(If(n),r):null,If(n).$expanded&&C(),If(n).$selected&&P()]))]),Uf("keypress",s,e=>"Enter"===e.key&&H(e,If(n))),Xf(e,i)}
ap(s,e=>{t.svelteTableRow?e(o):e(a,!1)}),Xf(e,i)}),Gd((e,t,n)=>{Sp(W,0,e,"svelte-18zqsmu"),Sp(z,0,t,"svelte-18zqsmu"),Sp(X,0,n,"svelte-18zqsmu")},[()=>yp(q(b())),()=>yp(q(y())),()=>yp(q(w()))]),Xf(e,W),Lu()}function fP(e){return new Intl.NumberFormat("en-us").format(e)}Gf(["click"])
var pP=Kf('<div class="content svelte-1u8rhii"><!></div>')
function hP(e,t){Cu(t,!0)
let n=hh(t,"visible",15,!0)
const r=[{key:"slot",title:"Slot",value:e=>e.slot,sortable:!0},{key:"name",title:"Name",value:e=>e.name,sortable:!0,renderValue:e=>zE(e.id,e.name),parseHTML:!0},{key:"level",title:"Level",value:e=>e.level,sortable:!0},{key:"rank",title:"Rank",value:e=>e.rank,sortable:!0},{key:"guild_xp",title:"GXP",value:e=>e.guild_xp,sortable:!0,renderValue:e=>fP(e.guild_xp)},{key:"activity",title:"Activity",value:e=>e.activity,sortable:!0},{key:"pack",title:"Pack",value:e=>e.pack,sortable:!0},{key:"max_stamina",title:"Stam",value:e=>e.max_stamina,sortable:!0,renderValue:e=>Nw(e.max_stamina)?"":fP(e.max_stamina)}]
let i=gd(wd([]))
const s=({equipped:e})=>!e,o=({player:{id:e}})=>e,a=e=>e.members
function l([e,t]){const n=e.r.filter(s).map(o),r=dm(n_(n).map(e=>[e,n.filter(t=>t===e).length])),i=(e=>e.r.flatMap(a))(t)
return i.map((l=r,(e,t)=>({...e,slot:t+1,activity:Z_(e.last_activity),pack:l[e.id]??0})))
var l}const c=ld(()=>{if(n())return async function(){const[e,t]=await gw([CS(),u_()])
if(e?.s&&t?.s){const n=l([e,t])
_d(i,n,!0)}}()})
{const t=e=>{Xf(e,Jf("Who's Got What"))}
Jk(e,{close:function(){sg("Whos Got What","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=pP()
op(Od(n),()=>If(c),e=>{Xf(e,Jf("Loading..."))},e=>{dP(e,{classNameTable:"whos-got-what",get columns(){return r},get rows(){return If(i)}})},(e,t)=>{var n=Jf()
Gd(()=>ep(n,If(t))),Xf(e,n)}),Xf(e,n)},$$slots:{title:!0,default:!0}})}Lu()}const gP=wd({visible:!0})
let vP=0
var _P=Object.freeze({__proto__:null,default:function(){vP?gP.visible=!0:vP=tp(hP,{props:gP,target:document.body})}})
const mP=()=>{wg(import("./inventory-DTG039CY.js"))},bP=()=>{wg(import("./bazaar-CNi01Tcn.js"))}
function yP(){wg(import("./injectQuestBookFull-DlsnMPYW.js"))}const wP=()=>{wg(import("./scavenging-BWVtkr7K.js"))}
const kP=()=>{wg(import("./toprated-BHLgfA7L.js"))}
const xP=()=>{wg(import("./trade-CJ_E_Rk9.js"))}
var SP={crates:{"-":{"-":()=>{wg(import("./crates-Cr2TZEf2.js"))}}},creatures:{"-":{"-":Bk}},items:Hk,masterrealms:{"-":{"-":Bk}},quests:{"-":{"-":Bk},view:{"-":()=>{wg(import("./showAllQuestSteps-eBbPs-p0.js"))}}},realms:{"-":{"-":Bk}},relics:{"-":{"-":Bk}},shops:{"-":{"-":Bk}},"-":Vk,arena:$k,auctionhouse:Tk,bank:{"-":{"-":()=>{wg(import("./injectBank-CqzQZ6p7.js"))}}},blacksmith:{repairall:{"-":function(){Tc("fromworld")&&Lk()}}},buffmarket:{"-":{"-":()=>{wg(import("./injectBuffmarket-BB92xTfR.js"))}},add:{"-":()=>{wg(import("./injectBigBuffPacakges-UlfQ_TPJ.js"))}},manage:{"-":()=>{wg(import("./injectManage-B-Vk3U5_.js"))}}},combat:{attackplayer:{"-":Uk}},composing:Ok,findplayer:{"-":{"-":()=>{wg(import("./findplayer-C86GI6AK.js"))}}},guild:Nk,hellforge:{"-":{"-":()=>{wg(import("./hellforge-CX9aXdfO.js"))}}},inventing:qk,log:{"-":{"-":()=>{wg(import("./playerLog-D-GoJsQ6.js"))}}},marketplace:{createreq:{"-":()=>{wg(import("./marketplace-lC2iuKUi.js"))}}},news:zk,notepad:{showlogs:{"-":xg},invmanagernew:{"-":mP},guildinvmgr:{"-":mP},recipemanager:{"-":Rg},auctionsearch:{"-":Lg},onlineplayers:{"-":Og},quicklinkmanager:{"-":Ag},monsterlog:{"-":Sg},quickextract:{"-":Ig},quickwear:{"-":Mg},fsboxcontent:{"-":Eg},bufflogcontent:{"-":kg},newguildlog:{"-":Pg},findbuffs:{"-":$g},findother:{"-":Tg},savesettings:{"-":()=>{wg(import("./load-Bc1si1BF.js"))}},reliclist:{"-":jg},"-":{"-":function(){}}},points:{"-":{"-":()=>{wg(import("./points-DqLIv0qd.js"))}}},potionbazaar:{"-":{"-":bP},buyitem:{"-":bP}},privatemessage:{"-":{"-":()=>{wg(import("./privateMsg-BW3SEF9J.js"))}}},profile:{"-":{"-":Uk},managecombatset:{"-":Uk},report:{"-":Uk},equipitem:{"-":Uk},useitem:{"-":Uk},changebio:{"-":Ik},dropitems:{"-":function(){wg(import("./injectProfileDropItems-CPR4y8nN.js"))}}},pvpladder:{"-":{"-":()=>{wg(import("./ladder-BMKDiClh.js"))}}},questbook:{"-":{"-":yP},atoz:{"-":yP},viewquest:{"-":()=>{wg(import("./injectQuestTracker-C4pARijT.js"))}}},quickbuff:{"-":{"-":()=>{wg(import("./quickBuff-CBc8DaSV.js"))}}},scavenging:{"-":{"-":wP},process:{"-":wP}},settings:{"-":{"-":()=>{wg(import("./injectSettings-BD0-SFwY.js"))}}},skills:{"-":{"-":()=>{}}},superelite:{"-":{"-":()=>{wg(import("./superelite-B_5bzg_l.js"))}}},tempinv:{"-":{"-":()=>{wg(import("./mailbox-DB21tb2Q.js"))}}},temple:{"-":{"-":Mw}},titan:{"-":{"-":()=>{wg(import("./injectTitan-D2_DQi9w.js"))}}},toprated:{xp:{"-":kP},monthlyxp:{"-":kP},gold:{"-":kP},killstreak:{"-":kP},bounties:{"-":kP},risingstars:{"-":kP},arena:{"-":kP},superelites:{"-":kP},smasher:{"-":kP},globalquest:{"-":()=>{wg(import("./globalQuest-CVzZhGFv.js"))}}},trade:{"-":{"-":xP},sendgold:{"-":xP},createsecure:{"-":xP},docreatesecure:{"-":xP}},world:{"-":{"-":Lk}}}
function EP(e){return fg("ul",e)}const PP=e=>"newWindow"in e&&e.url&&e.name
function CP(e,t){const n=vg(t,EP())
e.filter(PP).forEach(e=>{vg(vg(n,hm()),function(e){const t=pm({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return qv(t,()=>sg("chrome","quick link",e.name)),t}(e))})}function LP(e){const t=pg({className:"fshQuickLinks",style:{left:`${ql("quickLinksLeftPx")}px`,top:`${ql("quickLinksTopPx")}px`}})
t.classList.toggle("fshFixed",ql("keepHelperMenuOnScreen")),ql("draggableQuickLinks")&&(t.classList.add("fshMove"),ng(t)),CP(e,t),vg(document.body,t)}function $P(){if(!Jl(".mainbody"))return
const e=zm("quickLinks")||[]
e.length&&LP(e)}let TP=0,OP=0,IP=0,AP="",MP=0,RP=0
function jP(e){return Tc(e)||"-"}function FP(e){const t=Jl(e)
return t?.value||"-"}function NP(){if(Ql(SP[TP])&&Ql(SP[TP][OP])&&Vl(SP[TP][OP][IP]))return SP[TP][OP][IP]}function DP(){""!==document.location.search?(TP=jP("cmd"),OP=jP("subcmd"),IP=jP("subcmd2"),["points","privatemessage"].includes(TP)&&(AP=`/${jP("type")}`)):(TP=FP('input[name="cmd"]'),OP=FP('input[name="subcmd"]'),IP=FP('input[name="subcmd2"]')),pc.cmd=TP,pc.subcmd=OP,pc.subcmd2=IP,RP=`${TP}/${OP}/${IP}${AP}`,MP=NP()}function qP(){Vl(MP)&&(zl(RP),MP())}async function BP(e){DP(),await e,Ck(),Lc(3,qP),ql("playNewMessageSound")&&Lc(3,Hh),Kv()||Lc(3,$P)}const HP=[()=>!RegExp.escape,()=>!navigator.cookieEnabled,()=>window!==window.parent,function(){if(!d){const e=l(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
u=c.includes(e),d=!0}return u}]
function UP(e,t){if(HP.some(e=>e()))return
const n=Yl("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
ac(),function(e,t){pc.gmInfo=Kl(decodeURIComponent(t)),pc.gmInfo?pc.fshVer=e:pc.fshVer=`${e}_native`,pc.calfVer="159"}(e,t),o(),Co(),BP(n)}export{lv as $,th as A,by as B,Kf as C,Ad as D,Id as E,Od as F,up as G,ap as H,Gp as I,_d as J,If as K,vd as L,ky as M,Xf as N,Lu as O,Uf as P,Gd as Q,ep as R,bv as S,Ap as T,Mf as U,zp as V,sv as W,zv as X,gl as Y,Ol as Z,pm as _,hv as a,ya as a$,Ma as a0,gw as a1,J_ as a2,Hm as a3,fm as a4,Oh as a5,gm as a6,Uh as a7,Zv as a8,Xo as a9,ql as aA,gg as aB,lg as aC,Ca as aD,$y as aE,op as aF,Yf as aG,Bl as aH,Vp as aI,Do as aJ,Fo as aK,Hb as aL,hl as aM,fP as aN,uy as aO,zo as aP,ca as aQ,qm as aR,Hw as aS,Ah as aT,qb as aU,Fb as aV,Vm as aW,kv as aX,Mb as aY,Fw as aZ,ba as a_,EP as aa,cg as ab,Ab as ac,hc as ad,iv as ae,dv as af,cv as ag,Al as ah,Ml as ai,Bv as aj,gd as ak,wd as al,zm as am,Lp as an,Mm as ao,Gf as ap,Ly as aq,Tc as ar,Py as as,xg as at,Sg as au,Wl as av,Nw as aw,Cm as ax,pc as ay,dc as az,uc as b,gc as b$,$c as b0,Da as b1,ga as b2,Yx as b3,Tl as b4,Ub as b5,Th as b6,vm as b7,s as b8,Eo as b9,Vl as bA,Wo as bB,Wa as bC,ld as bD,Jf as bE,Ra as bF,Ta as bG,n_ as bH,Of as bI,Sp as bJ,D_ as bK,q_ as bL,fw as bM,fy as bN,Jo as bO,el as bP,il as bQ,cp as bR,Ix as bS,Ko as bT,Db as bU,Fa as bV,oh as bW,sh as bX,X_ as bY,sa as bZ,mw as b_,sk as ba,Ga as bb,ua as bc,al as bd,za as be,Va as bf,Xa as bg,Qa as bh,Lw as bi,Ux as bj,Aa as bk,Iv as bl,Vo as bm,nl as bn,rv as bo,Kl as bp,Lc as bq,cy as br,hg as bs,wl as bt,yl as bu,xl as bv,kl as bw,Sl as bx,$h as by,Ih as bz,Rh as c,S_ as c$,Il as c0,xv as c1,Bo as c2,Uo as c3,_a as c4,vh as c5,fh as c6,uh as c7,rl as c8,ip as c9,wa as cA,Uw as cB,fc as cC,Na as cD,uv as cE,sw as cF,Cx as cG,ul as cH,Dv as cI,Lx as cJ,dl as cK,Yo as cL,rw as cM,zE as cN,Ea as cO,_l as cP,dy as cQ,bl as cR,fl as cS,aa as cT,Rb as cU,ia as cV,ik as cW,Bm as cX,No as cY,Y_ as cZ,a as c_,Ya as ca,ol as cb,ll as cc,cl as cd,_v as ce,vv as cf,mv as cg,Ka as ch,Ja as ci,sl as cj,jo as ck,tl as cl,Ib as cm,Vv as cn,Qm as co,pv as cp,qo as cq,Sv as cr,yp as cs,Ll as ct,Pv as cu,cE as cv,Ql as cw,Fl as cx,vl as cy,$l as cz,_g as d,_p as d$,B_ as d0,pw as d1,e as d2,Yl as d3,wg as d4,fE as d5,mp as d6,lp as d7,Vc as d8,Nv as d9,Am as dA,na as dB,ra as dC,K_ as dD,W_ as dE,U_ as dF,pl as dG,cm as dH,Cg as dI,um as dJ,$a as dK,hm as dL,oa as dM,vw as dN,jb as dO,ta as dP,Ak as dQ,eh as dR,Hp as dS,xh as dT,qa as dU,Ba as dV,Jk as dW,Ip as dX,Hl as dY,Yv as dZ,va as d_,Mx as da,xu as db,pa as dc,Go as dd,El as de,e_ as df,ml as dg,zl as dh,Gk as di,yP as dj,Dk as dk,Nx as dl,Fx as dm,CS as dn,SS as dp,ix as dq,TS as dr,Qo as ds,ES as dt,lE as du,ov as dv,Pl as dw,Pp as dx,la as dy,Zo as dz,fv as e,gh as e0,qd as e1,Xp as e2,vp as e3,xa as e4,$x as e5,Ua as e6,Bb as e7,Jv as e8,rx as e9,z_ as ea,qx as eb,H_ as ec,G_ as ed,V_ as ee,Q_ as ef,xx as eg,Tv as eh,fa as ei,Sa as ej,wf as ek,hd as el,bd as em,Ig as en,ah as eo,yg as ep,Mg as eq,ma as er,UP as es,dm as f,t as g,Hv as h,vg as i,d_ as j,Xv as k,My as l,n as m,Lh as n,qv as o,qh as p,Jl as q,l as r,sg as s,tp as t,fg as u,pg as v,jc as w,Dd as x,Cu as y,hh as z}
//# sourceMappingURL=calfSystem-CIdPz3EO.js.map
