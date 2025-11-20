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
n[r]=e[r]}return n}var v="undefined"!=typeof window?window:void 0,_="undefined"!=typeof globalThis?globalThis:v,m=Array.prototype,b=m.forEach,y=m.indexOf,w=null==_?void 0:_.navigator,k=null==_?void 0:_.document,x=null==_?void 0:_.location,S=null==_?void 0:_.fetch,E=null!=_&&_.XMLHttpRequest&&"withCredentials"in new _.XMLHttpRequest?_.XMLHttpRequest:void 0,C=null==_?void 0:_.AbortController,P=null==w?void 0:w.userAgent,L=null!=v?v:{},T={DEBUG:!1,LIB_VERSION:"1.297.0"},O=["amazonbot","amazonproductbot","app.hypefactors.com","applebot","archive.org_bot","awariobot","backlinksextendedbot","baiduspider","bingbot","bingpreview","chrome-lighthouse","dataforseobot","deepscan","duckduckbot","facebookexternal","facebookcatalog","http://yandex.com/bots","hubspot","ia_archiver","leikibot","linkedinbot","meta-externalagent","mj12bot","msnbot","nessus","petalbot","pinterest","prerender","rogerbot","screaming frog","sebot-wa","sitebulb","slackbot","slurp","trendictionbot","turnitin","twitterbot","vercel-screenshot","vercelbot","yahoo! slurp","yandexbot","zoombot","bot.htm","bot.php","(bot;","bot/","crawler","ahrefsbot","ahrefssiteaudit","semrushbot","siteauditbot","splitsignalbot","gptbot","oai-searchbot","chatgpt-user","perplexitybot","better uptime bot","sentryuptimebot","uptimerobot","headlesschrome","cypress","google-hoteladsverifier","adsbot-google","apis-google","duplexweb-google","feedfetcher-google","google favicon","google web preview","google-read-aloud","googlebot","googleother","google-cloudvertexbot","googleweblight","mediapartners-google","storebot-google","google-inspectiontool","bytespider"],I=function(e,t){if(void 0===t&&(t=[]),!e)return!1
var n=e.toLowerCase()
return O.concat(t).some(e=>{var t=e.toLowerCase()
return-1!==n.indexOf(t)})},A=["$snapshot","$pageview","$pageleave","$set","survey dismissed","survey sent","survey shown","$identify","$groupidentify","$create_alias","$$client_ingestion_warning","$web_experiment_applied","$feature_enrollment_update","$feature_flag_called"]
function R(e,t){return-1!==e.indexOf(t)}var M=function(e){return e.trim()},j=function(e){return e.replace(/^\$/,"")},F=Array.isArray,N=Object.prototype,D=N.hasOwnProperty,q=N.toString,B=F||function(e){return"[object Array]"===q.call(e)},H=e=>"function"==typeof e,U=e=>e===Object(e)&&!B(e),G=e=>{if(U(e)){for(var t in e)if(D.call(e,t))return!1
return!0}return!1},W=e=>void 0===e,z=e=>"[object String]"==q.call(e),V=e=>z(e)&&0===e.trim().length,Q=e=>null===e,K=e=>W(e)||Q(e),J=e=>"[object Number]"==q.call(e),Y=e=>"[object Boolean]"===q.call(e),X=e=>R(A,e)
function Z(e){return null===e||"object"!=typeof e}function ee(e,t){return Object.prototype.toString.call(e)==="[object "+t+"]"}function te(e){return!W(Event)&&function(e,t){try{return e instanceof t}catch(e){return!1}}(e,Event)}var ne=[!0,"true",1,"1","yes"],re=e=>R(ne,e),ie=[!1,"false",0,"0","no"]
function se(e,t,n,r,i){return t>n&&(r.warn("min cannot be greater than max."),t=n),J(e)?e>n?(r.warn(" cannot be  greater than max: "+n+". Using max value instead."),n):e<t?(r.warn(" cannot be less than min: "+t+". Using min value instead."),t):e:(r.warn(" must be a number. using max or fallback. max: "+n+", fallback: "+i),se(i||n,t,n,r))}class oe{constructor(e){this._buckets={},this._onBucketRateLimited=e._onBucketRateLimited,this._bucketSize=se(e.bucketSize,0,100,e._logger),this._refillRate=se(e.refillRate,0,this._bucketSize,e._logger),this._refillInterval=se(e.refillInterval,0,864e5,e._logger)}_applyRefill(e,t){var n=t-e.lastAccess,r=Math.floor(n/this._refillInterval)
if(r>0){var i=r*this._refillRate
e.tokens=Math.min(e.tokens+i,this._bucketSize),e.lastAccess=e.lastAccess+r*this._refillInterval}}consumeRateLimit(e){var t,n=Date.now(),r=String(e),i=this._buckets[r]
return i?this._applyRefill(i,n):(i={tokens:this._bucketSize,lastAccess:n},this._buckets[r]=i),0===i.tokens||(i.tokens--,0===i.tokens&&(null==(t=this._onBucketRateLimited)||t.call(this,e)),0===i.tokens)}stop(){this._buckets={}}}var ae,le,ce,ue=e=>e instanceof Error
function de(e){var t=globalThis._posthogChunkIds
if(t){var n=Object.keys(t)
return ce&&n.length===le||(le=n.length,ce=n.reduce((n,r)=>{ae||(ae={})
var i=ae[r]
if(i)n[i[0]]=i[1]
else for(var s=e(r),o=s.length-1;o>=0;o--){var a=s[o],l=null==a?void 0:a.filename,c=t[r]
if(l&&c){n[l]=c,ae[r]=[l,c]
break}}return n},{})),ce}}class fe{constructor(e,t,n){void 0===n&&(n=[]),this.coercers=e,this.stackParser=t,this.modifiers=n}buildFromUnknown(e,t){void 0===t&&(t={})
var n=t&&t.mechanism||{handled:!0,type:"generic"},r=this.buildCoercingContext(n,t,0).apply(e),i=this.buildParsingContext(),s=this.parseStacktrace(r,i)
return{$exception_list:this.convertToExceptionList(s,n),$exception_level:"error"}}modifyFrames(e){var t=this
return p(function*(){for(var n of e)n.stacktrace&&n.stacktrace.frames&&B(n.stacktrace.frames)&&(n.stacktrace.frames=yield t.applyModifiers(n.stacktrace.frames))
return e})()}coerceFallback(e){var t
return{type:"Error",value:"Unknown error",stack:null==(t=e.syntheticException)?void 0:t.stack,synthetic:!0}}parseStacktrace(e,t){var n,r
return null!=e.cause&&(n=this.parseStacktrace(e.cause,t)),""!=e.stack&&null!=e.stack&&(r=this.applyChunkIds(this.stackParser(e.stack,e.synthetic?1:0),t.chunkIdMap)),h({},e,{cause:n,stack:r})}applyChunkIds(e,t){return e.map(e=>(e.filename&&t&&(e.chunk_id=t[e.filename]),e))}applyCoercers(e,t){for(var n of this.coercers)if(n.match(e))return n.coerce(e,t)
return this.coerceFallback(t)}applyModifiers(e){var t=this
return p(function*(){var n=e
for(var r of t.modifiers)n=yield r(n)
return n})()}convertToExceptionList(e,t){var n,r,i,s={type:e.type,value:e.value,mechanism:{type:null!==(n=t.type)&&void 0!==n?n:"generic",handled:null===(r=t.handled)||void 0===r||r,synthetic:null!==(i=e.synthetic)&&void 0!==i&&i}}
e.stack&&(s.stacktrace={type:"raw",frames:e.stack})
var o=[s]
return null!=e.cause&&o.push(...this.convertToExceptionList(e.cause,h({},t,{handled:!0}))),o}buildParsingContext(){return{chunkIdMap:de(this.stackParser)}}buildCoercingContext(e,t,n){void 0===n&&(n=0)
var r=(n,r)=>{if(r<=4){var i=this.buildCoercingContext(e,t,r)
return this.applyCoercers(n,i)}}
return h({},t,{syntheticException:0==n?t.syntheticException:void 0,mechanism:e,apply:e=>r(e,n),next:e=>r(e,n+1)})}}var pe="?"
function he(e,t,n,r,i){var s={platform:e,filename:t,function:"<anonymous>"===n?pe:n,in_app:!0}
return W(r)||(s.lineno=r),W(i)||(s.colno=i),s}var ge=(e,t)=>{var n=-1!==e.indexOf("safari-extension"),r=-1!==e.indexOf("safari-web-extension")
return n||r?[-1!==e.indexOf("@")?e.split("@")[0]:pe,n?"safari-extension:"+t:"safari-web-extension:"+t]:[e,t]},ve=/^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,_e=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,me=/\((\S*)(?::(\d+))(?::(\d+))\)/,be=(e,t)=>{var n=ve.exec(e)
if(n){var[,r,i,s]=n
return he(t,r,pe,+i,+s)}var o=_e.exec(e)
if(o){if(o[2]&&0===o[2].indexOf("eval")){var a=me.exec(o[2])
a&&(o[2]=a[1],o[3]=a[2],o[4]=a[3])}var[l,c]=ge(o[1]||pe,o[2])
return he(t,c,l,o[3]?+o[3]:void 0,o[4]?+o[4]:void 0)}},ye=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,we=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,ke=(e,t)=>{var n=ye.exec(e)
if(n){if(n[3]&&n[3].indexOf(" > eval")>-1){var r=we.exec(n[3])
r&&(n[1]=n[1]||"eval",n[3]=r[1],n[4]=r[2],n[5]="")}var i=n[3],s=n[1]||pe
return[s,i]=ge(s,i),he(t,i,s,n[4]?+n[4]:void 0,n[5]?+n[5]:void 0)}},xe=/\(error: (.*)\)/
function Se(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return function(t,r){void 0===r&&(r=0)
for(var i=[],s=t.split("\n"),o=r;o<s.length;o++){var a=s[o]
if(!(a.length>1024)){var l=xe.test(a)?a.replace(xe,"$1"):a
if(!l.match(/\S*Error: /)){for(var c of n){var u=c(l,e)
if(u){i.push(u)
break}}if(i.length>=50)break}}}return function(e){if(!e.length)return[]
var t=Array.from(e)
return t.reverse(),t.slice(0,50).map(e=>{return h({},e,{filename:e.filename||(n=t,n[n.length-1]||{}).filename,function:e.function||pe})
var n})}(i)}}class Ee{match(e){return this.isDOMException(e)||this.isDOMError(e)}coerce(e,t){var n=z(e.stack)
return{type:this.getType(e),value:this.getValue(e),stack:n?e.stack:void 0,cause:e.cause?t.next(e.cause):void 0,synthetic:!1}}getType(e){return this.isDOMError(e)?"DOMError":"DOMException"}getValue(e){var t=e.name||(this.isDOMError(e)?"DOMError":"DOMException")
return e.message?t+": "+e.message:t}isDOMException(e){return ee(e,"DOMException")}isDOMError(e){return ee(e,"DOMError")}}class Ce{match(e){return(e=>e instanceof Error)(e)}coerce(e,t){return{type:this.getType(e),value:this.getMessage(e,t),stack:this.getStack(e),cause:e.cause?t.next(e.cause):void 0,synthetic:!1}}getType(e){return e.name||e.constructor.name}getMessage(e,t){var n=e.message
return n.error&&"string"==typeof n.error.message?String(n.error.message):String(n)}getStack(e){return e.stacktrace||e.stack||void 0}}class Pe{constructor(){}match(e){return ee(e,"ErrorEvent")&&null!=e.error}coerce(e,t){var n
return t.apply(e.error)||{type:"ErrorEvent",value:e.message,stack:null==(n=t.syntheticException)?void 0:n.stack,synthetic:!0}}}var Le=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
class $e{match(e){return"string"==typeof e}coerce(e,t){var n,[r,i]=this.getInfos(e)
return{type:null!=r?r:"Error",value:null!=i?i:e,stack:null==(n=t.syntheticException)?void 0:n.stack,synthetic:!0}}getInfos(e){var t="Error",n=e,r=e.match(Le)
return r&&(t=r[1],n=r[2]),[t,n]}}var Te=["fatal","error","warning","log","info","debug"]
function Oe(e,t){void 0===t&&(t=40)
var n=Object.keys(e)
if(n.sort(),!n.length)return"[object has no keys]"
for(var r=n.length;r>0;r--){var i=n.slice(0,r).join(", ")
if(!(i.length>t))return r===n.length||i.length<=t?i:i.slice(0,t)+"..."}return""}class Ie{match(e){return"object"==typeof e&&null!==e}coerce(e,t){var n,r=this.getErrorPropertyFromObject(e)
return r?t.apply(r):{type:this.getType(e),value:this.getValue(e),stack:null==(n=t.syntheticException)?void 0:n.stack,level:this.isSeverityLevel(e.level)?e.level:"error",synthetic:!0}}getType(e){return te(e)?e.constructor.name:"Error"}getValue(e){if("name"in e&&"string"==typeof e.name){var t="'"+e.name+"' captured as exception"
return"message"in e&&"string"==typeof e.message&&(t+=" with message: '"+e.message+"'"),t}if("message"in e&&"string"==typeof e.message)return e.message
var n=this.getObjectClassName(e)
return(n&&"Object"!==n?"'"+n+"'":"Object")+" captured as exception with keys: "+Oe(e)}isSeverityLevel(e){return z(e)&&!V(e)&&Te.indexOf(e)>=0}getErrorPropertyFromObject(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=e[t]
if(ue(n))return n}}getObjectClassName(e){try{var t=Object.getPrototypeOf(e)
return t?t.constructor.name:void 0}catch(e){return}}}class Ae{match(e){return te(e)}coerce(e,t){var n,r=e.constructor.name
return{type:r,value:r+" captured as exception with keys: "+Oe(e),stack:null==(n=t.syntheticException)?void 0:n.stack,synthetic:!0}}}class Re{match(e){return Z(e)}coerce(e,t){var n
return{type:"Error",value:"Primitive value captured as exception: "+String(e),stack:null==(n=t.syntheticException)?void 0:n.stack,synthetic:!0}}}class Me{match(e){return ee(e,"PromiseRejectionEvent")}coerce(e,t){var n,r=this.getUnhandledRejectionReason(e)
return Z(r)?{type:"UnhandledRejection",value:"Non-Error promise rejection captured with value: "+String(r),stack:null==(n=t.syntheticException)?void 0:n.stack,synthetic:!0}:t.apply(r)}getUnhandledRejectionReason(e){if(Z(e))return e
try{if("reason"in e)return e.reason
if("detail"in e&&"reason"in e.detail)return e.detail.reason}catch(e){}return e}}var je=function(e,t){var{debugEnabled:n}=void 0===t?{}:t,r={_log:function(t){if(v&&(T.DEBUG||L.POSTHOG_DEBUG||n)&&!W(v.console)&&v.console){for(var r=("__rrweb_original__"in v.console[t]?v.console[t].__rrweb_original__:v.console[t]),i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o]
r(e,...s)}},info:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
r._log("log",...t)},warn:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
r._log("warn",...t)},error:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
r._log("error",...t)},critical:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
console.error(e,...n)},uninitializedWarning:e=>{r.error("You must initialize PostHog before calling "+e)},createLogger:(t,n)=>je(e+" "+t,n)}
return r},Fe=je("[PostHog.js]"),Ne=Fe.createLogger,De={}
function qe(e,t,n){if(B(e))if(b&&e.forEach===b)e.forEach(t,n)
else if("length"in e&&e.length===+e.length)for(var r=0,i=e.length;r<i;r++)if(r in e&&t.call(n,e[r],r)===De)return}function Be(e,t,n){if(!K(e)){if(B(e))return qe(e,t,n)
if((e=>e instanceof FormData)(e)){for(var r of e.entries())if(t.call(n,r[1],r[0])===De)return}else for(var i in e)if(D.call(e,i)&&t.call(n,e[i],i)===De)return}}var He=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return qe(n,function(t){for(var n in t)void 0!==t[n]&&(e[n]=t[n])}),e},Ue=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return qe(n,function(t){qe(t,function(t){e.push(t)})}),e}
function Ge(e){for(var t=Object.keys(e),n=t.length,r=new Array(n);n--;)r[n]=[t[n],e[t[n]]]
return r}var We=function(e){try{return e()}catch(e){return}},ze=function(e){return function(){try{for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return e.apply(this,n)}catch(e){Fe.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."),Fe.critical(e)}}},Ve=function(e){var t={}
return Be(e,function(e,n){(z(e)&&e.length>0||J(e))&&(t[n]=e)}),t}
var Qe=["herokuapp.com","vercel.app","netlify.app"]
function Ke(e){var t=null==e?void 0:e.hostname
if(!z(t))return!1
var n=t.split(".").slice(-2).join(".")
for(var r of Qe)if(n===r)return!1
return!0}function Je(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}function Ye(e,t,n,r){var{capture:i=!1,passive:s=!0}=null!=r?r:{}
null==e||e.addEventListener(t,n,{capture:i,passive:s})}var Xe="$people_distinct_id",Ze="__alias",et="__timers",tt="$autocapture_disabled_server_side",nt="$heatmaps_enabled_server_side",rt="$exception_capture_enabled_server_side",it="$error_tracking_suppression_rules",st="$error_tracking_capture_extension_exceptions",ot="$web_vitals_enabled_server_side",at="$dead_clicks_enabled_server_side",lt="$web_vitals_allowed_metrics",ct="$session_recording_remote_config",ut="$sesid",dt="$session_is_sampled",ft="$enabled_feature_flags",pt="$early_access_features",ht="$feature_flag_details",gt="$stored_person_properties",vt="$stored_group_properties",_t="$surveys",mt="$surveys_activated",bt="$flag_call_reported",yt="$user_state",wt="$client_session_props",kt="$capture_rate_limit",xt="$initial_campaign_params",St="$initial_referrer_info",Et="$initial_person_info",Ct="$epp",Pt="__POSTHOG_TOOLBAR__",Lt="$posthog_cookieless",$t=[Xe,Ze,"__cmpns",et,"$session_recording_enabled_server_side",nt,ut,ft,it,yt,pt,ht,vt,gt,_t,bt,wt,kt,xt,St,Ct,Et]
function Tt(e){return e instanceof Element&&(e.id===Pt||!(null==e.closest||!e.closest(".toolbar-global-fade-container")))}function Ot(e){return!!e&&1===e.nodeType}function It(e,t){return!!e&&!!e.tagName&&e.tagName.toLowerCase()===t.toLowerCase()}function At(e){return!!e&&3===e.nodeType}function Rt(e){return!!e&&11===e.nodeType}function Mt(e){return e?M(e).split(/\s+/):[]}function jt(e){var t=null==v?void 0:v.location.href
return!!(t&&e&&e.some(e=>t.match(e)))}function Ft(e){var t=""
switch(typeof e.className){case"string":t=e.className
break
case"object":t=(e.className&&"baseVal"in e.className?e.className.baseVal:null)||e.getAttribute("class")||""
break
default:t=""}return Mt(t)}function Nt(e){return K(e)?null:M(e).split(/(\s+)/).filter(e=>nn(e)).join("").replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)}function Dt(e){var t=""
return Qt(e)&&!Kt(e)&&e.childNodes&&e.childNodes.length&&Be(e.childNodes,function(e){var n
At(e)&&e.textContent&&(t+=null!==(n=Nt(e.textContent))&&void 0!==n?n:"")}),M(t)}function qt(e){return W(e.target)?e.srcElement||null:null!=(t=e.target)&&t.shadowRoot?e.composedPath()[0]||null:e.target||null
var t}var Bt=["a","button","form","input","select","textarea","label"]
function Ht(e,t){if(W(t))return!0
var n,r=function(e){if(t.some(t=>e.matches(t)))return{v:!0}}
for(var i of e)if(n=r(i))return n.v
return!1}function Ut(e){var t=e.parentNode
return!(!t||!Ot(t))&&t}var Gt=["next","previous","prev",">","<"],Wt=[".ph-no-rageclick",".ph-no-capture"]
var zt=e=>!e||It(e,"html")||!Ot(e),Vt=(e,t)=>{if(!v||zt(e))return{parentIsUsefulElement:!1,targetElementList:[]}
for(var n=!1,r=[e],i=e;i.parentNode&&!It(i,"body");)if(Rt(i.parentNode))r.push(i.parentNode.host),i=i.parentNode.host
else{var s=Ut(i)
if(!s)break
if(t||Bt.indexOf(s.tagName.toLowerCase())>-1)n=!0
else{var o=v.getComputedStyle(s)
o&&"pointer"===o.getPropertyValue("cursor")&&(n=!0)}r.push(s),i=s}return{parentIsUsefulElement:n,targetElementList:r}}
function Qt(e){for(var t=e;t.parentNode&&!It(t,"body");t=t.parentNode){var n=Ft(t)
if(R(n,"ph-sensitive")||R(n,"ph-no-capture"))return!1}if(R(Ft(e),"ph-include"))return!0
var r=e.type||""
if(z(r))switch(r.toLowerCase()){case"hidden":case"password":return!1}var i=e.name||e.id||""
return!z(i)||!/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g,""))}function Kt(e){return!!(It(e,"input")&&!["button","checkbox","submit","reset"].includes(e.type)||It(e,"select")||It(e,"textarea")||"true"===e.getAttribute("contenteditable"))}var Jt="(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",Yt=new RegExp("^(?:"+Jt+")$"),Xt=new RegExp(Jt),Zt="\\d{3}-?\\d{2}-?\\d{4}",en=new RegExp("^("+Zt+")$"),tn=new RegExp("("+Zt+")")
function nn(e,t){if(void 0===t&&(t=!0),K(e))return!1
if(z(e)){if(e=M(e),(t?Yt:Xt).test((e||"").replace(/[- ]/g,"")))return!1
if((t?en:tn).test(e))return!1}return!0}function rn(e){var t=Dt(e)
return nn(t=(t+" "+sn(e)).trim())?t:""}function sn(e){var t=""
return e&&e.childNodes&&e.childNodes.length&&Be(e.childNodes,function(e){var n
if(e&&"span"===(null==(n=e.tagName)?void 0:n.toLowerCase()))try{var r=Dt(e)
t=(t+" "+r).trim(),e.childNodes&&e.childNodes.length&&(t=(t+" "+sn(e)).trim())}catch(e){Fe.error("[AutoCapture]",e)}}),t}function on(e){return function(e){var t=e.map(e=>{var t,n,r=""
if(e.tag_name&&(r+=e.tag_name),e.attr_class)for(var i of(e.attr_class.sort(),e.attr_class))r+="."+i.replace(/"/g,"")
var s=h({},e.text?{text:e.text}:{},{"nth-child":null!==(t=e.nth_child)&&void 0!==t?t:0,"nth-of-type":null!==(n=e.nth_of_type)&&void 0!==n?n:0},e.href?{href:e.href}:{},e.attr_id?{attr_id:e.attr_id}:{},e.attributes),o={}
return Ge(s).sort((e,t)=>{var[n]=e,[r]=t
return n.localeCompare(r)}).forEach(e=>{var[t,n]=e
return o[an(t.toString())]=an(n.toString())}),(r+=":")+Ge(o).map(e=>{var[t,n]=e
return t+'="'+n+'"'}).join("")})
return t.join(";")}(function(e){return e.map(e=>{var t,n,r={text:null==(t=e.$el_text)?void 0:t.slice(0,400),tag_name:e.tag_name,href:null==(n=e.attr__href)?void 0:n.slice(0,2048),attr_class:ln(e),attr_id:e.attr__id,nth_child:e.nth_child,nth_of_type:e.nth_of_type,attributes:{}}
return Ge(e).filter(e=>{var[t]=e
return 0===t.indexOf("attr__")}).forEach(e=>{var[t,n]=e
return r.attributes[t]=n}),r})}(e))}function an(e){return e.replace(/"|\\"/g,'\\"')}function ln(e){var t=e.attr__class
return t?B(t)?t:Mt(t):void 0}class cn{constructor(e){this.disabled=!1===e
var t=U(e)?e:{}
this.thresholdPx=t.threshold_px||30,this.timeoutMs=t.timeout_ms||1e3,this.clickCount=t.click_count||3,this.clicks=[]}isRageClick(e,t,n){if(this.disabled)return!1
var r=this.clicks[this.clicks.length-1]
if(r&&Math.abs(e-r.x)+Math.abs(t-r.y)<this.thresholdPx&&n-r.timestamp<this.timeoutMs){if(this.clicks.push({x:e,y:t,timestamp:n}),this.clicks.length===this.clickCount)return!0}else this.clicks=[{x:e,y:t,timestamp:n}]
return!1}}var un="$copy_autocapture",dn=function(e){return e.GZipJS="gzip-js",e.Base64="base64",e}({}),fn=e=>{var t=null==k?void 0:k.createElement("a")
return W(t)?null:(t.href=e,t)},pn=function(e,t){for(var n,r=((e.split("#")[0]||"").split(/\?(.*)/)[1]||"").replace(/^\?+/g,"").split("&"),i=0;i<r.length;i++){var s=r[i].split("=")
if(s[0]===t){n=s
break}}if(!B(n)||n.length<2)return""
var o=n[1]
try{o=decodeURIComponent(o)}catch(e){Fe.error("Skipping decoding for malformed query param: "+o)}return o.replace(/\+/g," ")},hn=function(e,t,n){if(!e||!t||!t.length)return e
for(var r=e.split("#"),i=r[0]||"",s=r[1],o=i.split("?"),a=o[1],l=o[0],c=(a||"").split("&"),u=[],d=0;d<c.length;d++){var f=c[d].split("=")
B(f)&&(t.includes(f[0])?u.push(f[0]+"="+n):u.push(c[d]))}var p=l
return null!=a&&(p+="?"+u.join("&")),null!=s&&(p+="#"+s),p},gn=function(e,t){var n=e.match(new RegExp(t+"=([^&]*)"))
return n?n[1]:null},vn=Ne("[AutoCapture]")
function _n(e,t){return t.length>e?t.slice(0,e)+"...":t}function mn(e){if(e.previousElementSibling)return e.previousElementSibling
var t=e
do{t=t.previousSibling}while(t&&!Ot(t))
return t}function bn(e,t){for(var n,r,{e:i,maskAllElementAttributes:s,maskAllText:o,elementAttributeIgnoreList:a,elementsChainAsString:l}=t,c=[e],u=e;u.parentNode&&!It(u,"body");)Rt(u.parentNode)?(c.push(u.parentNode.host),u=u.parentNode.host):(c.push(u.parentNode),u=u.parentNode)
var d,f=[],p={},h=!1,g=!1
if(Be(c,e=>{var t=Qt(e)
"a"===e.tagName.toLowerCase()&&(h=e.getAttribute("href"),h=t&&h&&nn(h)&&h),R(Ft(e),"ph-no-capture")&&(g=!0),f.push(function(e,t,n,r){var i=e.tagName.toLowerCase(),s={tag_name:i}
Bt.indexOf(i)>-1&&!n&&("a"===i.toLowerCase()||"button"===i.toLowerCase()?s.$el_text=_n(1024,rn(e)):s.$el_text=_n(1024,Dt(e)))
var o=Ft(e)
o.length>0&&(s.classes=o.filter(function(e){return""!==e})),Be(e.attributes,function(n){var i
if((!Kt(e)||-1!==["name","id","class","aria-label"].indexOf(n.name))&&(null==r||!r.includes(n.name))&&!t&&nn(n.value)&&(i=n.name,!z(i)||"_ngcontent"!==i.substring(0,10)&&"_nghost"!==i.substring(0,7))){var o=n.value
"class"===n.name&&(o=Mt(o).join(" ")),s["attr__"+n.name]=_n(1024,o)}})
for(var a=1,l=1,c=e;c=mn(c);)a++,c.tagName===e.tagName&&l++
return s.nth_child=a,s.nth_of_type=l,s}(e,s,o,a))
var n=function(e){if(!Qt(e))return{}
var t={}
return Be(e.attributes,function(e){if(e.name&&0===e.name.indexOf("data-ph-capture-attribute")){var n=e.name.replace("data-ph-capture-attribute-",""),r=e.value
n&&r&&nn(r)&&(t[n]=r)}}),t}(e)
He(p,n)}),g)return{props:{},explicitNoCapture:g}
if(o||("a"===e.tagName.toLowerCase()||"button"===e.tagName.toLowerCase()?f[0].$el_text=rn(e):f[0].$el_text=Dt(e)),h){var _,m
f[0].attr__href=h
var b=null==(_=fn(h))?void 0:_.host,y=null==v||null==(m=v.location)?void 0:m.host
b&&y&&b!==y&&(d=h)}return{props:He({$event_type:i.type,$ce_version:1},l?{}:{$elements:f},{$elements_chain:on(f)},null!=(n=f[0])&&n.$el_text?{$el_text:null==(r=f[0])?void 0:r.$el_text}:{},d&&"click"===i.type?{$external_click_url:d}:{},p)}}class yn{constructor(e){this._initialized=!1,this._isDisabledServerSide=null,this._elementsChainAsString=!1,this.instance=e,this.rageclicks=new cn(e.config.rageclick),this._elementSelectors=null}get _config(){var e,t,n=U(this.instance.config.autocapture)?this.instance.config.autocapture:{}
return n.url_allowlist=null==(e=n.url_allowlist)?void 0:e.map(e=>new RegExp(e)),n.url_ignorelist=null==(t=n.url_ignorelist)?void 0:t.map(e=>new RegExp(e)),n}_addDomEventHandlers(){if(this.isBrowserSupported()){if(v&&k){var e=e=>{e=e||(null==v?void 0:v.event)
try{this._captureEvent(e)}catch(e){vn.error("Failed to capture event",e)}}
if(Ye(k,"submit",e,{capture:!0}),Ye(k,"change",e,{capture:!0}),Ye(k,"click",e,{capture:!0}),this._config.capture_copied_text){var t=e=>{e=e||(null==v?void 0:v.event),this._captureEvent(e,un)}
Ye(k,"copy",t,{capture:!0}),Ye(k,"cut",t,{capture:!0})}}}else vn.info("Disabling Automatic Event Collection because this browser is not supported")}startIfEnabled(){this.isEnabled&&!this._initialized&&(this._addDomEventHandlers(),this._initialized=!0)}onRemoteConfig(e){e.elementsChainAsString&&(this._elementsChainAsString=e.elementsChainAsString),this.instance.persistence&&this.instance.persistence.register({[tt]:!!e.autocapture_opt_out}),this._isDisabledServerSide=!!e.autocapture_opt_out,this.startIfEnabled()}setElementSelectors(e){this._elementSelectors=e}getElementSelectors(e){var t,n=[]
return null==(t=this._elementSelectors)||t.forEach(t=>{var r=null==k?void 0:k.querySelectorAll(t)
null==r||r.forEach(r=>{e===r&&n.push(t)})}),n}get isEnabled(){var e,t,n=null==(e=this.instance.persistence)?void 0:e.props[tt],r=this._isDisabledServerSide
if(Q(r)&&!Y(n)&&!this.instance._shouldDisableFlags())return!1
var i=null!==(t=this._isDisabledServerSide)&&void 0!==t?t:!!n
return!!this.instance.config.autocapture&&!i}_captureEvent(e,t){if(void 0===t&&(t="$autocapture"),this.isEnabled){var n,r=qt(e)
At(r)&&(r=r.parentNode||null),"$autocapture"===t&&"click"===e.type&&e instanceof MouseEvent&&this.instance.config.rageclick&&null!=(n=this.rageclicks)&&n.isRageClick(e.clientX,e.clientY,e.timeStamp||(new Date).getTime())&&function(e,t){if(!v||zt(e))return!1
var n,r,i
if(Y(t)?(n=!!t&&Wt,r=void 0):(n=null!==(i=null==t?void 0:t.css_selector_ignorelist)&&void 0!==i?i:Wt,r=null==t?void 0:t.content_ignorelist),!1===n)return!1
var{targetElementList:s}=Vt(e,!1)
return!function(e,t){if(!1===e||W(e))return!1
var n
if(!0===e)n=Gt
else{if(!B(e))return!1
if(e.length>10)return Fe.error("[PostHog] content_ignorelist array cannot exceed 10 items. Use css_selector_ignorelist for more complex matching."),!1
n=e.map(e=>e.toLowerCase())}return t.some(e=>{var{safeText:t,ariaLabel:r}=e
return n.some(e=>t.includes(e)||r.includes(e))})}(r,s.map(e=>{var t
return{safeText:Dt(e).toLowerCase(),ariaLabel:(null==(t=e.getAttribute("aria-label"))?void 0:t.toLowerCase().trim())||""}}))&&!Ht(s,n)}(r,this.instance.config.rageclick)&&this._captureEvent(e,"$rageclick")
var i=t===un
if(r&&function(e,t,n,r,i){var s,o,a,l
if(void 0===n&&(n=void 0),!v||zt(e))return!1
if(null!=(s=n)&&s.url_allowlist&&!jt(n.url_allowlist))return!1
if(null!=(o=n)&&o.url_ignorelist&&jt(n.url_ignorelist))return!1
if(null!=(a=n)&&a.dom_event_allowlist){var c=n.dom_event_allowlist
if(c&&!c.some(e=>t.type===e))return!1}var{parentIsUsefulElement:u,targetElementList:d}=Vt(e,r)
if(!function(e,t){var n=null==t?void 0:t.element_allowlist
if(W(n))return!0
var r,i=function(e){if(n.some(t=>e.tagName.toLowerCase()===t))return{v:!0}}
for(var s of e)if(r=i(s))return r.v
return!1}(d,n))return!1
if(!Ht(d,null==(l=n)?void 0:l.css_selector_allowlist))return!1
var f=v.getComputedStyle(e)
if(f&&"pointer"===f.getPropertyValue("cursor")&&"click"===t.type)return!0
var p=e.tagName.toLowerCase()
switch(p){case"html":return!1
case"form":return(i||["submit"]).indexOf(t.type)>=0
case"input":case"select":case"textarea":return(i||["change","click"]).indexOf(t.type)>=0
default:return u?(i||["click"]).indexOf(t.type)>=0:(i||["click"]).indexOf(t.type)>=0&&(Bt.indexOf(p)>-1||"true"===e.getAttribute("contenteditable"))}}(r,e,this._config,i,i?["copy","cut"]:void 0)){var{props:s,explicitNoCapture:o}=bn(r,{e:e,maskAllElementAttributes:this.instance.config.mask_all_element_attributes,maskAllText:this.instance.config.mask_all_text,elementAttributeIgnoreList:this._config.element_attribute_ignorelist,elementsChainAsString:this._elementsChainAsString})
if(o)return!1
var a=this.getElementSelectors(r)
if(a&&a.length>0&&(s.$element_selectors=a),t===un){var l,c=Nt(null==v||null==(l=v.getSelection())?void 0:l.toString()),u=e.type||"clipboard"
if(!c)return!1
s.$selected_content=c,s.$copy_type=u}return this.instance.capture(t,s),!0}}}isBrowserSupported(){return H(null==k?void 0:k.querySelectorAll)}}Math.trunc||(Math.trunc=function(e){return e<0?Math.ceil(e):Math.floor(e)}),Number.isInteger||(Number.isInteger=function(e){return J(e)&&isFinite(e)&&Math.floor(e)===e})
var wn="0123456789abcdef"
class kn{constructor(e){if(this.bytes=e,16!==e.length)throw new TypeError("not 128-bit length")}static fromFieldsV7(e,t,n,r){if(!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(n)||!Number.isInteger(r)||e<0||t<0||n<0||r<0||e>0xffffffffffff||t>4095||n>1073741823||r>4294967295)throw new RangeError("invalid field value")
var i=new Uint8Array(16)
return i[0]=e/Math.pow(2,40),i[1]=e/Math.pow(2,32),i[2]=e/Math.pow(2,24),i[3]=e/Math.pow(2,16),i[4]=e/Math.pow(2,8),i[5]=e,i[6]=112|t>>>8,i[7]=t,i[8]=128|n>>>24,i[9]=n>>>16,i[10]=n>>>8,i[11]=n,i[12]=r>>>24,i[13]=r>>>16,i[14]=r>>>8,i[15]=r,new kn(i)}toString(){for(var e="",t=0;t<this.bytes.length;t++)e=e+wn.charAt(this.bytes[t]>>>4)+wn.charAt(15&this.bytes[t]),3!==t&&5!==t&&7!==t&&9!==t||(e+="-")
if(36!==e.length)throw new Error("Invalid UUIDv7 was generated")
return e}clone(){return new kn(this.bytes.slice(0))}equals(e){return 0===this.compareTo(e)}compareTo(e){for(var t=0;t<16;t++){var n=this.bytes[t]-e.bytes[t]
if(0!==n)return Math.sign(n)}return 0}}class xn{constructor(){this._timestamp=0,this._counter=0,this._random=new Cn}generate(){var e=this.generateOrAbort()
if(W(e)){this._timestamp=0
var t=this.generateOrAbort()
if(W(t))throw new Error("Could not generate UUID after timestamp reset")
return t}return e}generateOrAbort(){var e=Date.now()
if(e>this._timestamp)this._timestamp=e,this._resetCounter()
else{if(!(e+1e4>this._timestamp))return
this._counter++,this._counter>4398046511103&&(this._timestamp++,this._resetCounter())}return kn.fromFieldsV7(this._timestamp,Math.trunc(this._counter/Math.pow(2,30)),this._counter&Math.pow(2,30)-1,this._random.nextUint32())}_resetCounter(){this._counter=1024*this._random.nextUint32()+(1023&this._random.nextUint32())}}var Sn,En=e=>{if("undefined"!=typeof UUIDV7_DENY_WEAK_RNG&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available")
for(var t=0;t<e.length;t++)e[t]=65536*Math.trunc(65536*Math.random())+Math.trunc(65536*Math.random())
return e}
v&&!W(v.crypto)&&crypto.getRandomValues&&(En=e=>crypto.getRandomValues(e))
class Cn{constructor(){this._buffer=new Uint32Array(8),this._cursor=1/0}nextUint32(){return this._cursor>=this._buffer.length&&(En(this._buffer),this._cursor=0),this._buffer[this._cursor++]}}var Pn=()=>Ln().toString(),Ln=()=>(Sn||(Sn=new xn)).generate(),$n="",Tn=/[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i
var On={_is_supported:()=>!!k,_error:function(e){Fe.error("cookieStore error: "+e)},_get:function(e){if(k){try{for(var t=e+"=",n=k.cookie.split(";").filter(e=>e.length),r=0;r<n.length;r++){for(var i=n[r];" "==i.charAt(0);)i=i.substring(1,i.length)
if(0===i.indexOf(t))return decodeURIComponent(i.substring(t.length,i.length))}}catch(e){}return null}},_parse:function(e){var t
try{t=JSON.parse(On._get(e))||{}}catch(e){}return t},_set:function(e,t,n,r,i){if(k)try{var s="",o="",a=function(e,t){if(t){var n=function(e,t){if(void 0===t&&(t=k),$n)return $n
if(!t)return""
if(["localhost","127.0.0.1"].includes(e))return""
for(var n=e.split("."),r=Math.min(n.length,8),i="dmn_chk_"+Pn();!$n&&r--;){var s=n.slice(r).join("."),o=i+"=1;domain=."+s+";path=/"
t.cookie=o+";max-age=3",t.cookie.includes(i)&&(t.cookie=o+";max-age=0",$n=s)}return $n}(e)
if(!n){var r=(e=>{var t=e.match(Tn)
return t?t[0]:""})(e)
r!==n&&Fe.info("Warning: cookie subdomain discovery mismatch",r,n),n=r}return n?"; domain=."+n:""}return""}(k.location.hostname,r)
if(n){var l=new Date
l.setTime(l.getTime()+24*n*60*60*1e3),s="; expires="+l.toUTCString()}i&&(o="; secure")
var c=e+"="+encodeURIComponent(JSON.stringify(t))+s+"; SameSite=Lax; path=/"+a+o
return c.length>3686.4&&Fe.warn("cookieStore warning: large cookie, len="+c.length),k.cookie=c,c}catch(e){return}},_remove:function(e,t){if(null!=k&&k.cookie)try{On._set(e,"",-1,t)}catch(e){return}}},In=null,An={_is_supported:function(){if(!Q(In))return In
var e=!0
if(W(v))e=!1
else try{var t="__mplssupport__"
An._set(t,"xyz"),'"xyz"'!==An._get(t)&&(e=!1),An._remove(t)}catch(t){e=!1}return e||Fe.error("localStorage unsupported; falling back to cookie store"),In=e,e},_error:function(e){Fe.error("localStorage error: "+e)},_get:function(e){try{return null==v?void 0:v.localStorage.getItem(e)}catch(e){An._error(e)}return null},_parse:function(e){try{return JSON.parse(An._get(e))||{}}catch(e){}return null},_set:function(e,t){try{null==v||v.localStorage.setItem(e,JSON.stringify(t))}catch(e){An._error(e)}},_remove:function(e){try{null==v||v.localStorage.removeItem(e)}catch(e){An._error(e)}}},Rn=["distinct_id",ut,dt,Ct,Et],Mn=h({},An,{_parse:function(e){try{var t={}
try{t=On._parse(e)||{}}catch(e){}var n=He(t,JSON.parse(An._get(e)||"{}"))
return An._set(e,n),n}catch(e){}return null},_set:function(e,t,n,r,i,s){try{An._set(e,t,void 0,void 0,s)
var o={}
Rn.forEach(e=>{t[e]&&(o[e]=t[e])}),Object.keys(o).length&&On._set(e,o,n,r,i,s)}catch(e){An._error(e)}},_remove:function(e,t){try{null==v||v.localStorage.removeItem(e),On._remove(e,t)}catch(e){An._error(e)}}}),jn={},Fn={_is_supported:function(){return!0},_error:function(e){Fe.error("memoryStorage error: "+e)},_get:function(e){return jn[e]||null},_parse:function(e){return jn[e]||null},_set:function(e,t){jn[e]=t},_remove:function(e){delete jn[e]}},Nn=null,Dn={_is_supported:function(){if(!Q(Nn))return Nn
if(Nn=!0,W(v))Nn=!1
else try{var e="__support__"
Dn._set(e,"xyz"),'"xyz"'!==Dn._get(e)&&(Nn=!1),Dn._remove(e)}catch(e){Nn=!1}return Nn},_error:function(e){Fe.error("sessionStorage error: ",e)},_get:function(e){try{return null==v?void 0:v.sessionStorage.getItem(e)}catch(e){Dn._error(e)}return null},_parse:function(e){try{return JSON.parse(Dn._get(e))||null}catch(e){}return null},_set:function(e,t){try{null==v||v.sessionStorage.setItem(e,JSON.stringify(t))}catch(e){Dn._error(e)}},_remove:function(e){try{null==v||v.sessionStorage.removeItem(e)}catch(e){Dn._error(e)}}},qn=function(e){return e[e.PENDING=-1]="PENDING",e[e.DENIED=0]="DENIED",e[e.GRANTED=1]="GRANTED",e}({})
class Bn{constructor(e){this._instance=e}get _config(){return this._instance.config}get consent(){return this._getDnt()?qn.DENIED:this._storedConsent}isOptedOut(){return"always"===this._config.cookieless_mode||this.consent===qn.DENIED||this.consent===qn.PENDING&&(this._config.opt_out_capturing_by_default||"on_reject"===this._config.cookieless_mode)}isOptedIn(){return!this.isOptedOut()}isExplicitlyOptedOut(){return this.consent===qn.DENIED}optInOut(e){this._storage._set(this._storageKey,e?1:0,this._config.cookie_expiration,this._config.cross_subdomain_cookie,this._config.secure_cookie)}reset(){this._storage._remove(this._storageKey,this._config.cross_subdomain_cookie)}get _storageKey(){var{token:e,opt_out_capturing_cookie_prefix:t,consent_persistence_name:n}=this._instance.config
return n||(t?t+e:"__ph_opt_in_out_"+e)}get _storedConsent(){var e=this._storage._get(this._storageKey)
return re(e)?qn.GRANTED:R(ie,e)?qn.DENIED:qn.PENDING}get _storage(){if(!this._persistentStore){var e=this._config.opt_out_capturing_persistence_type
this._persistentStore="localStorage"===e?An:On
var t="localStorage"===e?On:An
t._get(this._storageKey)&&(this._persistentStore._get(this._storageKey)||this.optInOut(re(t._get(this._storageKey))),t._remove(this._storageKey,this._config.cross_subdomain_cookie))}return this._persistentStore}_getDnt(){return!!this._config.respect_dnt&&!!Je([null==w?void 0:w.doNotTrack,null==w?void 0:w.msDoNotTrack,L.doNotTrack],e=>re(e))}}var Hn=Ne("[Dead Clicks]"),Un=()=>!0,Gn=e=>{var t,n=!(null==(t=e.instance.persistence)||!t.get_property(at)),r=e.instance.config.capture_dead_clicks
return Y(r)?r:n}
class Wn{get lazyLoadedDeadClicksAutocapture(){return this._lazyLoadedDeadClicksAutocapture}constructor(e,t,n){this.instance=e,this.isEnabled=t,this.onCapture=n,this.startIfEnabled()}onRemoteConfig(e){this.instance.persistence&&this.instance.persistence.register({[at]:null==e?void 0:e.captureDeadClicks}),this.startIfEnabled()}startIfEnabled(){this.isEnabled(this)&&this._loadScript(()=>{this._start()})}_loadScript(e){var t,n
null!=(t=L.__PosthogExtensions__)&&t.initDeadClicksAutocapture&&e(),null==(n=L.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this.instance,"dead-clicks-autocapture",t=>{t?Hn.error("failed to load script",t):e()})}_start(){var e
if(k){if(!this._lazyLoadedDeadClicksAutocapture&&null!=(e=L.__PosthogExtensions__)&&e.initDeadClicksAutocapture){var t=U(this.instance.config.capture_dead_clicks)?this.instance.config.capture_dead_clicks:{}
t.__onCapture=this.onCapture,this._lazyLoadedDeadClicksAutocapture=L.__PosthogExtensions__.initDeadClicksAutocapture(this.instance,t),this._lazyLoadedDeadClicksAutocapture.start(k),Hn.info("starting...")}}else Hn.error("`document` not found. Cannot start.")}stop(){this._lazyLoadedDeadClicksAutocapture&&(this._lazyLoadedDeadClicksAutocapture.stop(),this._lazyLoadedDeadClicksAutocapture=void 0,Hn.info("stopping..."))}}var zn=Ne("[ExceptionAutocapture]")
class Vn{constructor(e){var t,n,r
this._startCapturing=()=>{var e
if(v&&this.isEnabled&&null!=(e=L.__PosthogExtensions__)&&e.errorWrappingFunctions){var t=L.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,n=L.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,r=L.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError
try{!this._unwrapOnError&&this._config.capture_unhandled_errors&&(this._unwrapOnError=t(this.captureException.bind(this))),!this._unwrapUnhandledRejection&&this._config.capture_unhandled_rejections&&(this._unwrapUnhandledRejection=n(this.captureException.bind(this))),!this._unwrapConsoleError&&this._config.capture_console_errors&&(this._unwrapConsoleError=r(this.captureException.bind(this)))}catch(e){zn.error("failed to start",e),this._stopCapturing()}}},this._instance=e,this._remoteEnabled=!(null==(t=this._instance.persistence)||!t.props[rt]),this._config=this._requiredConfig(),this._rateLimiter=new oe({refillRate:null!==(n=this._instance.config.error_tracking.__exceptionRateLimiterRefillRate)&&void 0!==n?n:1,bucketSize:null!==(r=this._instance.config.error_tracking.__exceptionRateLimiterBucketSize)&&void 0!==r?r:10,refillInterval:1e4,_logger:zn}),this.startIfEnabled()}_requiredConfig(){var e=this._instance.config.capture_exceptions,t={capture_unhandled_errors:!1,capture_unhandled_rejections:!1,capture_console_errors:!1}
return U(e)?t=h({},t,e):(W(e)?this._remoteEnabled:e)&&(t=h({},t,{capture_unhandled_errors:!0,capture_unhandled_rejections:!0})),t}get isEnabled(){return this._config.capture_console_errors||this._config.capture_unhandled_errors||this._config.capture_unhandled_rejections}startIfEnabled(){this.isEnabled&&(zn.info("enabled"),this._loadScript(this._startCapturing))}_loadScript(e){var t,n
null!=(t=L.__PosthogExtensions__)&&t.errorWrappingFunctions&&e(),null==(n=L.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"exception-autocapture",t=>{if(t)return zn.error("failed to load script",t)
e()})}_stopCapturing(){var e,t,n
null==(e=this._unwrapOnError)||e.call(this),this._unwrapOnError=void 0,null==(t=this._unwrapUnhandledRejection)||t.call(this),this._unwrapUnhandledRejection=void 0,null==(n=this._unwrapConsoleError)||n.call(this),this._unwrapConsoleError=void 0}onRemoteConfig(e){var t=e.autocaptureExceptions
this._remoteEnabled=!!t||!1,this._config=this._requiredConfig(),this._instance.persistence&&this._instance.persistence.register({[rt]:this._remoteEnabled}),this.startIfEnabled()}captureException(e){var t,n,r=null!==(t=null==e||null==(n=e.$exception_list)||null==(n=n[0])?void 0:n.type)&&void 0!==t?t:"Exception"
this._rateLimiter.consumeRateLimit(r)?zn.info("Skipping exception capture because of client rate limiting.",{exception:r}):this._instance.exceptions.sendExceptionEvent(e)}}function Qn(e,t,n){try{if(!(t in e))return()=>{}
var r=e[t],i=n(r)
return H(i)&&(i.prototype=i.prototype||{},Object.defineProperties(i,{__posthog_wrapped__:{enumerable:!1,value:!0}})),e[t]=i,()=>{e[t]=r}}catch(e){return()=>{}}}class Kn{constructor(e){var t
this._instance=e,this._lastPathname=(null==v||null==(t=v.location)?void 0:t.pathname)||""}get isEnabled(){return"history_change"===this._instance.config.capture_pageview}startIfEnabled(){this.isEnabled&&(Fe.info("History API monitoring enabled, starting..."),this.monitorHistoryChanges())}stop(){this._popstateListener&&this._popstateListener(),this._popstateListener=void 0,Fe.info("History API monitoring stopped")}monitorHistoryChanges(){var e,t
if(v&&v.history){var n=this
null!=(e=v.history.pushState)&&e.__posthog_wrapped__||Qn(v.history,"pushState",e=>function(t,r,i){e.call(this,t,r,i),n._capturePageview("pushState")}),null!=(t=v.history.replaceState)&&t.__posthog_wrapped__||Qn(v.history,"replaceState",e=>function(t,r,i){e.call(this,t,r,i),n._capturePageview("replaceState")}),this._setupPopstateListener()}}_capturePageview(e){try{var t,n=null==v||null==(t=v.location)?void 0:t.pathname
if(!n)return
n!==this._lastPathname&&this.isEnabled&&this._instance.capture("$pageview",{navigation_type:e}),this._lastPathname=n}catch(t){Fe.error("Error capturing "+e+" pageview",t)}}_setupPopstateListener(){if(!this._popstateListener){var e=()=>{this._capturePageview("popstate")}
Ye(v,"popstate",e),this._popstateListener=()=>{v&&v.removeEventListener("popstate",e)}}}}var Jn=Ne("[SegmentIntegration]")
var Yn="posthog-js"
function Xn(e,t){var{organization:n,projectId:r,prefix:i,severityAllowList:s=["error"],sendExceptionsToPostHog:o=!0}=void 0===t?{}:t
return t=>{var a,l,c,u,d
if("*"!==s&&!s.includes(t.level)||!e.__loaded)return t
t.tags||(t.tags={})
var f=e.requestRouter.endpointFor("ui","/project/"+e.config.token+"/person/"+e.get_distinct_id())
t.tags["PostHog Person URL"]=f,e.sessionRecordingStarted()&&(t.tags["PostHog Recording URL"]=e.get_session_replay_url({withTimestamp:!0}))
var p=(null==(a=t.exception)?void 0:a.values)||[],g=p.map(e=>h({},e,{stacktrace:e.stacktrace?h({},e.stacktrace,{type:"raw",frames:(e.stacktrace.frames||[]).map(e=>h({},e,{platform:"web:javascript"}))}):void 0})),v={$exception_message:(null==(l=p[0])?void 0:l.value)||t.message,$exception_type:null==(c=p[0])?void 0:c.type,$exception_level:t.level,$exception_list:g,$sentry_event_id:t.event_id,$sentry_exception:t.exception,$sentry_exception_message:(null==(u=p[0])?void 0:u.value)||t.message,$sentry_exception_type:null==(d=p[0])?void 0:d.type,$sentry_tags:t.tags}
return n&&r&&(v.$sentry_url=(i||"https://sentry.io/organizations/")+n+"/issues/?project="+r+"&query="+t.event_id),o&&e.exceptions.sendExceptionEvent(v),t}}class Zn{constructor(e,t,n,r,i,s){this.name=Yn,this.setupOnce=function(o){o(Xn(e,{organization:t,projectId:n,prefix:r,severityAllowList:i,sendExceptionsToPostHog:null==s||s}))}}}var er=null!=v&&v.location?gn(v.location.hash,"__posthog")||gn(location.hash,"state"):null,tr="_postHogToolbarParams",nr=Ne("[Toolbar]"),rr=function(e){return e[e.UNINITIALIZED=0]="UNINITIALIZED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED",e}(rr||{})
class ir{constructor(e){this.instance=e}_setToolbarState(e){L.ph_toolbar_state=e}_getToolbarState(){var e
return null!==(e=L.ph_toolbar_state)&&void 0!==e?e:rr.UNINITIALIZED}maybeLoadToolbar(e,t,n){if(void 0===e&&(e=void 0),void 0===t&&(t=void 0),void 0===n&&(n=void 0),!v||!k)return!1
e=null!=e?e:v.location,n=null!=n?n:v.history
try{if(!t){try{v.localStorage.setItem("test","test"),v.localStorage.removeItem("test")}catch(e){return!1}t=null==v?void 0:v.localStorage}var r,i=er||gn(e.hash,"__posthog")||gn(e.hash,"state"),s=i?We(()=>JSON.parse(atob(decodeURIComponent(i))))||We(()=>JSON.parse(decodeURIComponent(i))):null
return s&&"ph_authorize"===s.action?((r=s).source="url",r&&Object.keys(r).length>0&&(s.desiredHash?e.hash=s.desiredHash:n?n.replaceState(n.state,"",e.pathname+e.search):e.hash="")):((r=JSON.parse(t.getItem(tr)||"{}")).source="localstorage",delete r.userIntent),!(!r.token||this.instance.config.token!==r.token||(this.loadToolbar(r),0))}catch(e){return!1}}_callLoadToolbar(e){var t=L.ph_load_toolbar||L.ph_load_editor
!K(t)&&H(t)?t(e,this.instance):nr.warn("No toolbar load function found")}loadToolbar(e){var t=!(null==k||!k.getElementById(Pt))
if(!v||t)return!1
var n="custom"===this.instance.requestRouter.region&&this.instance.config.advanced_disable_toolbar_metrics,r=h({token:this.instance.config.token},e,{apiURL:this.instance.requestRouter.endpointFor("ui")},n?{instrument:!1}:{})
if(v.localStorage.setItem(tr,JSON.stringify(h({},r,{source:void 0}))),this._getToolbarState()===rr.LOADED)this._callLoadToolbar(r)
else if(this._getToolbarState()===rr.UNINITIALIZED){var i
this._setToolbarState(rr.LOADING),null==(i=L.__PosthogExtensions__)||null==i.loadExternalDependency||i.loadExternalDependency(this.instance,"toolbar",e=>{if(e)return nr.error("[Toolbar] Failed to load",e),void this._setToolbarState(rr.UNINITIALIZED)
this._setToolbarState(rr.LOADED),this._callLoadToolbar(r)}),Ye(v,"turbolinks:load",()=>{this._setToolbarState(rr.UNINITIALIZED),this.loadToolbar(r)})}return!0}_loadEditor(e){return this.loadToolbar(e)}maybeLoadEditor(e,t,n){return void 0===e&&(e=void 0),void 0===t&&(t=void 0),void 0===n&&(n=void 0),this.maybeLoadToolbar(e,t,n)}}var sr=Ne("[TracingHeaders]")
class or{constructor(e){this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0,this._startCapturing=()=>{var e,t
W(this._restoreXHRPatch)&&(null==(e=L.__PosthogExtensions__)||null==(e=e.tracingHeadersPatchFns)||e._patchXHR(this._instance.config.__add_tracing_headers||[],this._instance.get_distinct_id(),this._instance.sessionManager)),W(this._restoreFetchPatch)&&(null==(t=L.__PosthogExtensions__)||null==(t=t.tracingHeadersPatchFns)||t._patchFetch(this._instance.config.__add_tracing_headers||[],this._instance.get_distinct_id(),this._instance.sessionManager))},this._instance=e}_loadScript(e){var t,n
null!=(t=L.__PosthogExtensions__)&&t.tracingHeadersPatchFns&&e(),null==(n=L.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"tracing-headers",t=>{if(t)return sr.error("failed to load script",t)
e()})}startIfEnabledOrStop(){var e,t
this._instance.config.__add_tracing_headers?this._loadScript(this._startCapturing):(null==(e=this._restoreXHRPatch)||e.call(this),null==(t=this._restoreFetchPatch)||t.call(this),this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0)}}var ar="Mobile",lr="iOS",cr="Android",ur="Tablet",dr=cr+" "+ur,fr="iPad",pr="Apple",hr=pr+" Watch",gr="Safari",vr="BlackBerry",_r="Samsung",mr=_r+"Browser",br=_r+" Internet",yr="Chrome",wr=yr+" OS",kr=yr+" "+lr,xr="Internet Explorer",Sr=xr+" "+ar,Er="Opera",Cr=Er+" Mini",Pr="Edge",Lr="Microsoft "+Pr,$r="Firefox",Tr=$r+" "+lr,Or="Nintendo",Ir="PlayStation",Ar="Xbox",Rr=cr+" "+ar,Mr=ar+" "+gr,jr="Windows",Fr=jr+" Phone",Nr="Nokia",Dr="Ouya",qr="Generic",Br=qr+" "+ar.toLowerCase(),Hr=qr+" "+ur.toLowerCase(),Ur="Konqueror",Gr="(\\d+(\\.\\d+)?)",Wr=new RegExp("Version/"+Gr),zr=new RegExp(Ar,"i"),Vr=new RegExp(Ir+" \\w+","i"),Qr=new RegExp(Or+" \\w+","i"),Kr=new RegExp(vr+"|PlayBook|BB10","i"),Jr={"NT3.51":"NT 3.11","NT4.0":"NT 4.0","5.0":"2000",5.1:"XP",5.2:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1",6.4:"10","10.0":"10"},Yr=function(e,t){return t=t||"",R(e," OPR/")&&R(e,"Mini")?Cr:R(e," OPR/")?Er:Kr.test(e)?vr:R(e,"IE"+ar)||R(e,"WPDesktop")?Sr:R(e,mr)?br:R(e,Pr)||R(e,"Edg/")?Lr:R(e,"FBIOS")?"Facebook "+ar:R(e,"UCWEB")||R(e,"UCBrowser")?"UC Browser":R(e,"CriOS")?kr:R(e,"CrMo")||R(e,yr)?yr:R(e,cr)&&R(e,gr)?Rr:R(e,"FxiOS")?Tr:R(e.toLowerCase(),Ur.toLowerCase())?Ur:((e,t)=>t&&R(t,pr)||function(e){return R(e,gr)&&!R(e,yr)&&!R(e,cr)}(e))(e,t)?R(e,ar)?Mr:gr:R(e,$r)?$r:R(e,"MSIE")||R(e,"Trident/")?xr:R(e,"Gecko")?$r:""},Xr={[Sr]:[new RegExp("rv:"+Gr)],[Lr]:[new RegExp(Pr+"?\\/"+Gr)],[yr]:[new RegExp("("+yr+"|CrMo)\\/"+Gr)],[kr]:[new RegExp("CriOS\\/"+Gr)],"UC Browser":[new RegExp("(UCBrowser|UCWEB)\\/"+Gr)],[gr]:[Wr],[Mr]:[Wr],[Er]:[new RegExp("(Opera|OPR)\\/"+Gr)],[$r]:[new RegExp($r+"\\/"+Gr)],[Tr]:[new RegExp("FxiOS\\/"+Gr)],[Ur]:[new RegExp("Konqueror[:/]?"+Gr,"i")],[vr]:[new RegExp(vr+" "+Gr),Wr],[Rr]:[new RegExp("android\\s"+Gr,"i")],[br]:[new RegExp(mr+"\\/"+Gr)],[xr]:[new RegExp("(rv:|MSIE )"+Gr)],Mozilla:[new RegExp("rv:"+Gr)]},Zr=function(e,t){var n=Yr(e,t),r=Xr[n]
if(W(r))return null
for(var i=0;i<r.length;i++){var s=r[i],o=e.match(s)
if(o)return parseFloat(o[o.length-2])}return null},ei=[[new RegExp(Ar+"; "+Ar+" (.*?)[);]","i"),e=>[Ar,e&&e[1]||""]],[new RegExp(Or,"i"),[Or,""]],[new RegExp(Ir,"i"),[Ir,""]],[Kr,[vr,""]],[new RegExp(jr,"i"),(e,t)=>{if(/Phone/.test(t)||/WPDesktop/.test(t))return[Fr,""]
if(new RegExp(ar).test(t)&&!/IEMobile\b/.test(t))return[jr+" "+ar,""]
var n=/Windows NT ([0-9.]+)/i.exec(t)
if(n&&n[1]){var r=n[1],i=Jr[r]||""
return/arm/i.test(t)&&(i="RT"),[jr,i]}return[jr,""]}],[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,e=>{if(e&&e[3]){var t=[e[3],e[4],e[5]||"0"]
return[lr,t.join(".")]}return[lr,""]}],[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,e=>{var t=""
return e&&e.length>=3&&(t=W(e[2])?e[3]:e[2]),["watchOS",t]}],[new RegExp("("+cr+" (\\d+)\\.(\\d+)\\.?(\\d+)?|"+cr+")","i"),e=>{if(e&&e[2]){var t=[e[2],e[3],e[4]||"0"]
return[cr,t.join(".")]}return[cr,""]}],[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,e=>{var t=["Mac OS X",""]
if(e&&e[1]){var n=[e[1],e[2],e[3]||"0"]
t[1]=n.join(".")}return t}],[/Mac/i,["Mac OS X",""]],[/CrOS/,[wr,""]],[/Linux|debian/i,["Linux",""]]],ti=function(e){return Qr.test(e)?Or:Vr.test(e)?Ir:zr.test(e)?Ar:new RegExp(Dr,"i").test(e)?Dr:new RegExp("("+Fr+"|WPDesktop)","i").test(e)?Fr:/iPad/.test(e)?fr:/iPod/.test(e)?"iPod Touch":/iPhone/.test(e)?"iPhone":/(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)?hr:Kr.test(e)?vr:/(kobo)\s(ereader|touch)/i.test(e)?"Kobo":new RegExp(Nr,"i").test(e)?Nr:/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e)||/(kf[a-z]+)( bui|\)).+silk\//i.test(e)?"Kindle Fire":/(Android|ZTE)/i.test(e)?!new RegExp(ar).test(e)||/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e)?/pixel[\daxl ]{1,6}/i.test(e)&&!/pixel c/i.test(e)||/(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e)||/lmy47v/i.test(e)&&!/QTAQZ3/i.test(e)?cr:dr:cr:new RegExp("(pda|"+ar+")","i").test(e)?Br:new RegExp(ur,"i").test(e)&&!new RegExp(ur+" pc","i").test(e)?Hr:""},ni="https?://(.*)",ri=["gclid","gclsrc","dclid","gbraid","wbraid","fbclid","msclkid","twclid","li_fat_id","igshid","ttclid","rdt_cid","epik","qclid","sccid","irclid","_kx"],ii=Ue(["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gad_source","mc_cid"],ri),si="<masked>",oi=["li_fat_id"]
function ai(e,t,n){if(!k)return{}
var r,i=t?Ue([],ri,n||[]):[],s=li(hn(k.URL,i,si),e),o=(r={},Be(oi,function(e){var t=On._get(e)
r[e]=t||null}),r)
return He(o,s)}function li(e,t){var n=ii.concat(t||[]),r={}
return Be(n,function(t){var n=pn(e,t)
r[t]=n||null}),r}function ci(e){var t=function(e){return e?0===e.search(ni+"google.([^/?]*)")?"google":0===e.search(ni+"bing.com")?"bing":0===e.search(ni+"yahoo.com")?"yahoo":0===e.search(ni+"duckduckgo.com")?"duckduckgo":null:null}(e),n="yahoo"!=t?"q":"p",r={}
if(!Q(t)){r.$search_engine=t
var i=k?pn(k.referrer,n):""
i.length&&(r.ph_keyword=i)}return r}function ui(){return navigator.language||navigator.userLanguage}function di(){return(null==k?void 0:k.referrer)||"$direct"}function fi(e,t){var n=e?Ue([],ri,t||[]):[],r=null==x?void 0:x.href.substring(0,1e3)
return{r:di().substring(0,1e3),u:r?hn(r,n,si):void 0}}function pi(e){var t,{r:n,u:r}=e,i={$referrer:n,$referring_domain:null==n?void 0:"$direct"==n?"$direct":null==(t=fn(n))?void 0:t.host}
if(r){i.$current_url=r
var s=fn(r)
i.$host=null==s?void 0:s.host,i.$pathname=null==s?void 0:s.pathname
var o=li(r)
He(i,o)}if(n){var a=ci(n)
He(i,a)}return i}function hi(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){return}}function gi(){try{return(new Date).getTimezoneOffset()}catch(e){return}}function vi(e,t){if(!P)return{}
var n,r,i,s=e?Ue([],ri,t||[]):[],[o,a]=function(e){for(var t=0;t<ei.length;t++){var[n,r]=ei[t],i=n.exec(e),s=i&&(H(r)?r(i,e):r)
if(s)return s}return["",""]}(P)
return He(Ve({$os:o,$os_version:a,$browser:Yr(P,navigator.vendor),$device:ti(P),$device_type:(r=P,i=ti(r),i===fr||i===dr||"Kobo"===i||"Kindle Fire"===i||i===Hr?ur:i===Or||i===Ar||i===Ir||i===Dr?"Console":i===hr?"Wearable":i?ar:"Desktop"),$timezone:hi(),$timezone_offset:gi()}),{$current_url:hn(null==x?void 0:x.href,s,si),$host:null==x?void 0:x.host,$pathname:null==x?void 0:x.pathname,$raw_user_agent:P.length>1e3?P.substring(0,997)+"...":P,$browser_version:Zr(P,navigator.vendor),$browser_language:ui(),$browser_language_prefix:(n=ui(),"string"==typeof n?n.split("-")[0]:void 0),$screen_height:null==v?void 0:v.screen.height,$screen_width:null==v?void 0:v.screen.width,$viewport_height:null==v?void 0:v.innerHeight,$viewport_width:null==v?void 0:v.innerWidth,$lib:"web",$lib_version:T.LIB_VERSION,$insert_id:Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10),$time:Date.now()/1e3})}var _i=Ne("[Web Vitals]"),mi=9e5
class bi{constructor(e){var t
this._enabledServerSide=!1,this._initialized=!1,this._buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0},this._flushToCapture=()=>{clearTimeout(this._delayedFlushTimer),0!==this._buffer.metrics.length&&(this._instance.capture("$web_vitals",this._buffer.metrics.reduce((e,t)=>h({},e,{["$web_vitals_"+t.name+"_event"]:h({},t),["$web_vitals_"+t.name+"_value"]:t.value}),{})),this._buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0})},this._addToBuffer=e=>{var t,n=null==(t=this._instance.sessionManager)?void 0:t.checkAndGetSessionAndWindowId(!0)
if(W(n))_i.error("Could not read session ID. Dropping metrics!")
else{this._buffer=this._buffer||{url:void 0,metrics:[],firstMetricTimestamp:void 0}
var r=this._currentURL()
W(r)||(K(null==e?void 0:e.name)||K(null==e?void 0:e.value)?_i.error("Invalid metric received",e):this._maxAllowedValue&&e.value>=this._maxAllowedValue?_i.error("Ignoring metric with value >= "+this._maxAllowedValue,e):(this._buffer.url!==r&&(this._flushToCapture(),this._delayedFlushTimer=setTimeout(this._flushToCapture,this.flushToCaptureTimeoutMs)),W(this._buffer.url)&&(this._buffer.url=r),this._buffer.firstMetricTimestamp=W(this._buffer.firstMetricTimestamp)?Date.now():this._buffer.firstMetricTimestamp,e.attribution&&e.attribution.interactionTargetElement&&(e.attribution.interactionTargetElement=void 0),this._buffer.metrics.push(h({},e,{$current_url:r,$session_id:n.sessionId,$window_id:n.windowId,timestamp:Date.now()})),this._buffer.metrics.length===this.allowedMetrics.length&&this._flushToCapture()))}},this._startCapturing=()=>{var e,t,n,r,i=L.__PosthogExtensions__
W(i)||W(i.postHogWebVitalsCallbacks)||({onLCP:e,onCLS:t,onFCP:n,onINP:r}=i.postHogWebVitalsCallbacks),e&&t&&n&&r?(this.allowedMetrics.indexOf("LCP")>-1&&e(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("CLS")>-1&&t(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("FCP")>-1&&n(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("INP")>-1&&r(this._addToBuffer.bind(this)),this._initialized=!0):_i.error("web vitals callbacks not loaded - not starting")},this._instance=e,this._enabledServerSide=!(null==(t=this._instance.persistence)||!t.props[ot]),this.startIfEnabled()}get allowedMetrics(){var e,t,n=U(this._instance.config.capture_performance)?null==(e=this._instance.config.capture_performance)?void 0:e.web_vitals_allowed_metrics:void 0
return W(n)?(null==(t=this._instance.persistence)?void 0:t.props[lt])||["CLS","FCP","INP","LCP"]:n}get flushToCaptureTimeoutMs(){return(U(this._instance.config.capture_performance)?this._instance.config.capture_performance.web_vitals_delayed_flush_ms:void 0)||5e3}get _maxAllowedValue(){var e=U(this._instance.config.capture_performance)&&J(this._instance.config.capture_performance.__web_vitals_max_value)?this._instance.config.capture_performance.__web_vitals_max_value:mi
return 0<e&&e<=6e4?mi:e}get isEnabled(){var e=null==x?void 0:x.protocol
if("http:"!==e&&"https:"!==e)return _i.info("Web Vitals are disabled on non-http/https protocols"),!1
var t=U(this._instance.config.capture_performance)?this._instance.config.capture_performance.web_vitals:Y(this._instance.config.capture_performance)?this._instance.config.capture_performance:void 0
return Y(t)?t:this._enabledServerSide}startIfEnabled(){this.isEnabled&&!this._initialized&&(_i.info("enabled, starting..."),this._loadScript(this._startCapturing))}onRemoteConfig(e){var t=U(e.capturePerformance)&&!!e.capturePerformance.web_vitals,n=U(e.capturePerformance)?e.capturePerformance.web_vitals_allowed_metrics:void 0
this._instance.persistence&&(this._instance.persistence.register({[ot]:t}),this._instance.persistence.register({[lt]:n})),this._enabledServerSide=t,this.startIfEnabled()}_loadScript(e){var t,n
null!=(t=L.__PosthogExtensions__)&&t.postHogWebVitalsCallbacks&&e(),null==(n=L.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"web-vitals",t=>{t?_i.error("failed to load script",t):e()})}_currentURL(){var e=v?v.location.href:void 0
if(e){var t=this._instance.config.mask_personal_data_properties,n=this._instance.config.custom_personal_data_properties,r=t?Ue([],ri,n||[]):[]
return hn(e,r,si)}_i.error("Could not determine current URL")}}var yi=Ne("[Heatmaps]")
function wi(e){return U(e)&&"clientX"in e&&"clientY"in e&&J(e.clientX)&&J(e.clientY)}class ki{constructor(e){var t
this._enabledServerSide=!1,this._initialized=!1,this._flushInterval=null,this.instance=e,this._enabledServerSide=!(null==(t=this.instance.persistence)||!t.props[nt]),this.rageclicks=new cn(e.config.rageclick)}get flushIntervalMilliseconds(){var e=5e3
return U(this.instance.config.capture_heatmaps)&&this.instance.config.capture_heatmaps.flush_interval_milliseconds&&(e=this.instance.config.capture_heatmaps.flush_interval_milliseconds),e}get isEnabled(){return W(this.instance.config.capture_heatmaps)?W(this.instance.config.enable_heatmaps)?this._enabledServerSide:this.instance.config.enable_heatmaps:!1!==this.instance.config.capture_heatmaps}startIfEnabled(){if(this.isEnabled){if(this._initialized)return
yi.info("starting..."),this._setupListeners(),this._onVisibilityChange()}else{var e
clearInterval(null!==(e=this._flushInterval)&&void 0!==e?e:void 0),this._removeListeners(),this.getAndClearBuffer()}}onRemoteConfig(e){var t=!!e.heatmaps
this.instance.persistence&&this.instance.persistence.register({[nt]:t}),this._enabledServerSide=t,this.startIfEnabled()}getAndClearBuffer(){var e=this._buffer
return this._buffer=void 0,e}_onDeadClick(e){this._onClick(e.originalEvent,"deadclick")}_onVisibilityChange(){this._flushInterval&&clearInterval(this._flushInterval),this._flushInterval="visible"===(null==k?void 0:k.visibilityState)?setInterval(this._flush.bind(this),this.flushIntervalMilliseconds):null}_setupListeners(){v&&k&&(this._flushHandler=this._flush.bind(this),Ye(v,"beforeunload",this._flushHandler),this._onClickHandler=e=>this._onClick(e||(null==v?void 0:v.event)),Ye(k,"click",this._onClickHandler,{capture:!0}),this._onMouseMoveHandler=e=>this._onMouseMove(e||(null==v?void 0:v.event)),Ye(k,"mousemove",this._onMouseMoveHandler,{capture:!0}),this._deadClicksCapture=new Wn(this.instance,Un,this._onDeadClick.bind(this)),this._deadClicksCapture.startIfEnabled(),this._onVisibilityChange_handler=this._onVisibilityChange.bind(this),Ye(k,"visibilitychange",this._onVisibilityChange_handler),this._initialized=!0)}_removeListeners(){var e
v&&k&&(this._flushHandler&&v.removeEventListener("beforeunload",this._flushHandler),this._onClickHandler&&k.removeEventListener("click",this._onClickHandler,{capture:!0}),this._onMouseMoveHandler&&k.removeEventListener("mousemove",this._onMouseMoveHandler,{capture:!0}),this._onVisibilityChange_handler&&k.removeEventListener("visibilitychange",this._onVisibilityChange_handler),clearTimeout(this._mouseMoveTimeout),null==(e=this._deadClicksCapture)||e.stop(),this._initialized=!1)}_getProperties(e,t){var n=this.instance.scrollManager.scrollY(),r=this.instance.scrollManager.scrollX(),i=this.instance.scrollManager.scrollElement(),s=function(e,t,n){for(var r=e;r&&Ot(r)&&!It(r,"body");){if(r===n)return!1
if(R(t,null==v?void 0:v.getComputedStyle(r).position))return!0
r=Ut(r)}return!1}(qt(e),["fixed","sticky"],i)
return{x:e.clientX+(s?0:r),y:e.clientY+(s?0:n),target_fixed:s,type:t}}_onClick(e,t){var n
if(void 0===t&&(t="click"),!Tt(e.target)&&wi(e)){var r=this._getProperties(e,t)
null!=(n=this.rageclicks)&&n.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._capture(h({},r,{type:"rageclick"})),this._capture(r)}}_onMouseMove(e){!Tt(e.target)&&wi(e)&&(clearTimeout(this._mouseMoveTimeout),this._mouseMoveTimeout=setTimeout(()=>{this._capture(this._getProperties(e,"mousemove"))},500))}_capture(e){if(v){var t=v.location.href,n=this.instance.config.mask_personal_data_properties,r=this.instance.config.custom_personal_data_properties,i=n?Ue([],ri,r||[]):[],s=hn(t,i,si)
this._buffer=this._buffer||{},this._buffer[s]||(this._buffer[s]=[]),this._buffer[s].push(e)}}_flush(){this._buffer&&!G(this._buffer)&&this.instance.capture("$$heatmap",{$heatmap_data:this.getAndClearBuffer()})}}class xi{constructor(e){this._instance=e}doPageView(e,t){var n,r=this._previousPageViewProperties(e,t)
return this._currentPageview={pathname:null!==(n=null==v?void 0:v.location.pathname)&&void 0!==n?n:"",pageViewId:t,timestamp:e},this._instance.scrollManager.resetContext(),r}doPageLeave(e){var t
return this._previousPageViewProperties(e,null==(t=this._currentPageview)?void 0:t.pageViewId)}doEvent(){var e
return{$pageview_id:null==(e=this._currentPageview)?void 0:e.pageViewId}}_previousPageViewProperties(e,t){var n=this._currentPageview
if(!n)return{$pageview_id:t}
var r={$pageview_id:t,$prev_pageview_id:n.pageViewId},i=this._instance.scrollManager.getContext()
if(i&&!this._instance.config.disable_scroll_properties){var{maxScrollHeight:s,lastScrollY:o,maxScrollY:a,maxContentHeight:l,lastContentY:c,maxContentY:u}=i
if(!(W(s)||W(o)||W(a)||W(l)||W(c)||W(u))){s=Math.ceil(s),o=Math.ceil(o),a=Math.ceil(a),l=Math.ceil(l),c=Math.ceil(c),u=Math.ceil(u)
var d=s<=1?1:se(o/s,0,1,Fe),f=s<=1?1:se(a/s,0,1,Fe),p=l<=1?1:se(c/l,0,1,Fe),h=l<=1?1:se(u/l,0,1,Fe)
r=He(r,{$prev_pageview_last_scroll:o,$prev_pageview_last_scroll_percentage:d,$prev_pageview_max_scroll:a,$prev_pageview_max_scroll_percentage:f,$prev_pageview_last_content:c,$prev_pageview_last_content_percentage:p,$prev_pageview_max_content:u,$prev_pageview_max_content_percentage:h})}}return n.pathname&&(r.$prev_pageview_pathname=n.pathname),n.timestamp&&(r.$prev_pageview_duration=(e.getTime()-n.timestamp.getTime())/1e3),r}}var Si=Uint8Array,Ei=Uint16Array,Ci=Uint32Array,Pi=new Si([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Li=new Si([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),$i=new Si([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ti=function(e,t){for(var n=new Ei(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1]
var i=new Ci(n[30])
for(r=1;r<30;++r)for(var s=n[r];s<n[r+1];++s)i[s]=s-n[r]<<5|r
return[n,i]},Oi=Ti(Pi,2),Ii=Oi[0],Ai=Oi[1]
Ii[28]=258,Ai[258]=28
for(var Ri=Ti(Li,0)[1],Mi=new Ei(32768),ji=0;ji<32768;++ji){var Fi=(43690&ji)>>>1|(21845&ji)<<1
Fi=(61680&(Fi=(52428&Fi)>>>2|(13107&Fi)<<2))>>>4|(3855&Fi)<<4,Mi[ji]=((65280&Fi)>>>8|(255&Fi)<<8)>>>1}var Ni=function(e,t,n){for(var r=e.length,i=0,s=new Ei(t);i<r;++i)++s[e[i]-1]
var o,a=new Ei(t)
for(i=0;i<t;++i)a[i]=a[i-1]+s[i-1]<<1
for(o=new Ei(r),i=0;i<r;++i)o[i]=Mi[a[e[i]-1]++]>>>15-e[i]
return o},Di=new Si(288)
for(ji=0;ji<144;++ji)Di[ji]=8
for(ji=144;ji<256;++ji)Di[ji]=9
for(ji=256;ji<280;++ji)Di[ji]=7
for(ji=280;ji<288;++ji)Di[ji]=8
var qi=new Si(32)
for(ji=0;ji<32;++ji)qi[ji]=5
var Bi=Ni(Di,9),Hi=Ni(qi,5),Ui=function(e){return(e/8|0)+(7&e&&1)},Gi=function(e,t,n){(null==n||n>e.length)&&(n=e.length)
var r=new(e instanceof Ei?Ei:e instanceof Ci?Ci:Si)(n-t)
return r.set(e.subarray(t,n)),r},Wi=function(e,t,n){n<<=7&t
var r=t/8|0
e[r]|=n,e[r+1]|=n>>>8},zi=function(e,t,n){n<<=7&t
var r=t/8|0
e[r]|=n,e[r+1]|=n>>>8,e[r+2]|=n>>>16},Vi=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]})
var i=n.length,s=n.slice()
if(!i)return[new Si(0),0]
if(1==i){var o=new Si(n[0].s+1)
return o[n[0].s]=1,[o,1]}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001})
var a=n[0],l=n[1],c=0,u=1,d=2
for(n[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=i-1;)a=n[n[c].f<n[d].f?c++:d++],l=n[c!=u&&n[c].f<n[d].f?c++:d++],n[u++]={s:-1,f:a.f+l.f,l:a,r:l}
var f=s[0].s
for(r=1;r<i;++r)s[r].s>f&&(f=s[r].s)
var p=new Ei(f+1),h=Qi(n[u-1],p,0)
if(h>t){r=0
var g=0,v=h-t,_=1<<v
for(s.sort(function(e,t){return p[t.s]-p[e.s]||e.f-t.f});r<i;++r){var m=s[r].s
if(!(p[m]>t))break
g+=_-(1<<h-p[m]),p[m]=t}for(g>>>=v;g>0;){var b=s[r].s
p[b]<t?g-=1<<t-p[b]++-1:++r}for(;r>=0&&g;--r){var y=s[r].s
p[y]==t&&(--p[y],++g)}h=t}return[new Si(p),h]},Qi=function(e,t,n){return-1==e.s?Math.max(Qi(e.l,t,n+1),Qi(e.r,t,n+1)):t[e.s]=n},Ki=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new Ei(++t),r=0,i=e[0],s=1,o=function(e){n[r++]=e},a=1;a<=t;++a)if(e[a]==i&&a!=t)++s
else{if(!i&&s>2){for(;s>138;s-=138)o(32754)
s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(i),--s;s>6;s-=6)o(8304)
s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(i)
s=1,i=e[a]}return[n.subarray(0,r),t]},Ji=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r]
return n},Yi=function(e,t,n){var r=n.length,i=Ui(t+2)
e[i]=255&r,e[i+1]=r>>>8,e[i+2]=255^e[i],e[i+3]=255^e[i+1]
for(var s=0;s<r;++s)e[i+s+4]=n[s]
return 8*(i+4+r)},Xi=function(e,t,n,r,i,s,o,a,l,c,u){Wi(t,u++,n),++i[256]
for(var d=Vi(i,15),f=d[0],p=d[1],h=Vi(s,15),g=h[0],v=h[1],_=Ki(f),m=_[0],b=_[1],y=Ki(g),w=y[0],k=y[1],x=new Ei(19),S=0;S<m.length;++S)x[31&m[S]]++
for(S=0;S<w.length;++S)x[31&w[S]]++
for(var E=Vi(x,7),C=E[0],P=E[1],L=19;L>4&&!C[$i[L-1]];--L);var $,T,O,I,A=c+5<<3,R=Ji(i,Di)+Ji(s,qi)+o,M=Ji(i,f)+Ji(s,g)+o+14+3*L+Ji(x,C)+(2*x[16]+3*x[17]+7*x[18])
if(A<=R&&A<=M)return Yi(t,u,e.subarray(l,l+c))
if(Wi(t,u,1+(M<R)),u+=2,M<R){$=Ni(f,p),T=f,O=Ni(g,v),I=g
var j=Ni(C,P)
for(Wi(t,u,b-257),Wi(t,u+5,k-1),Wi(t,u+10,L-4),u+=14,S=0;S<L;++S)Wi(t,u+3*S,C[$i[S]])
u+=3*L
for(var F=[m,w],N=0;N<2;++N){var D=F[N]
for(S=0;S<D.length;++S){var q=31&D[S]
Wi(t,u,j[q]),u+=C[q],q>15&&(Wi(t,u,D[S]>>>5&127),u+=D[S]>>>12)}}}else $=Bi,T=Di,O=Hi,I=qi
for(S=0;S<a;++S)if(r[S]>255){q=r[S]>>>18&31,zi(t,u,$[q+257]),u+=T[q+257],q>7&&(Wi(t,u,r[S]>>>23&31),u+=Pi[q])
var B=31&r[S]
zi(t,u,O[B]),u+=I[B],B>3&&(zi(t,u,r[S]>>>5&8191),u+=Li[B])}else zi(t,u,$[r[S]]),u+=T[r[S]]
return zi(t,u,$[256]),u+T[256]},Zi=new Ci([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),es=function(){for(var e=new Ci(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(1&n&&3988292384)^n>>>1
e[t]=n}return e}(),ts=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8}
function ns(e,t){void 0===t&&(t={})
var n=function(){var e=4294967295
return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=es[255&n^t[r]]^n>>>8
e=n},d:function(){return 4294967295^e}}}(),r=e.length
n.p(e)
var i,s=function(e,t,n,r){return function(e,t,n,r,i){var s=e.length,o=new Si(r+s+5*(1+Math.floor(s/7e3))+i),a=o.subarray(r,o.length-i),l=0
if(!t||s<8)for(var c=0;c<=s;c+=65535){var u=c+65535
u<s?l=Yi(a,l,e.subarray(c,u)):(a[c]=!0,l=Yi(a,l,e.subarray(c,s)))}else{for(var d=Zi[t-1],f=d>>>13,p=8191&d,h=(1<<n)-1,g=new Ei(32768),v=new Ei(h+1),_=Math.ceil(n/3),m=2*_,b=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<m)&h},y=new Ci(25e3),w=new Ei(288),k=new Ei(32),x=0,S=0,E=(c=0,0),C=0,P=0;c<s;++c){var L=b(c),$=32767&c,T=v[L]
if(g[$]=T,v[L]=$,C<=c){var O=s-c
if((x>7e3||E>24576)&&O>423){l=Xi(e,a,0,y,w,k,S,E,P,c-P,l),E=x=S=0,P=c
for(var I=0;I<286;++I)w[I]=0
for(I=0;I<30;++I)k[I]=0}var A=2,R=0,M=p,j=$-T&32767
if(O>2&&L==b(c-j))for(var F=Math.min(f,O)-1,N=Math.min(32767,c),D=Math.min(258,O);j<=N&&--M&&$!=T;){if(e[c+A]==e[c+A-j]){for(var q=0;q<D&&e[c+q]==e[c+q-j];++q);if(q>A){if(A=q,R=j,q>F)break
var B=Math.min(j,q-2),H=0
for(I=0;I<B;++I){var U=c-j+I+32768&32767,G=U-g[U]+32768&32767
G>H&&(H=G,T=U)}}}j+=($=T)-(T=g[$])+32768&32767}if(R){y[E++]=268435456|Ai[A]<<18|Ri[R]
var W=31&Ai[A],z=31&Ri[R]
S+=Pi[W]+Li[z],++w[257+W],++k[z],C=c+A,++x}else y[E++]=e[c],++w[e[c]]}}l=Xi(e,a,!0,y,w,k,S,E,P,c-P,l)}return Gi(o,0,r+Ui(l)+i)}(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,n,r)}(e,t,10+((i=t).filename&&i.filename.length+1||0),8),o=s.length
return function(e,t){var n=t.filename
if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:9==t.level?2:0,e[9]=3,0!=t.mtime&&ts(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8
for(var r=0;r<=n.length;++r)e[r+10]=n.charCodeAt(r)}}(s,t),ts(s,o-8,n.d()),ts(s,o-4,r),s}var rs=!!E||!!S,is="text/plain",ss=function(e,t,n){var r
void 0===n&&(n=!0)
var[i,s]=e.split("?"),o=h({},t),a=null!==(r=null==s?void 0:s.split("&").map(e=>{var t,[r,i]=e.split("="),s=n&&null!==(t=o[r])&&void 0!==t?t:i
return delete o[r],r+"="+s}))&&void 0!==r?r:[],l=function(e,t){var n,r
void 0===t&&(t="&")
var i=[]
return Be(e,function(e,t){W(e)||W(t)||"undefined"===t||(n=encodeURIComponent((e=>e instanceof File)(e)?e.name:e.toString()),r=encodeURIComponent(t),i[i.length]=r+"="+n)}),i.join(t)}(o)
return l&&a.push(l),i+"?"+a.join("&")},os=(e,t)=>JSON.stringify(e,(e,t)=>"bigint"==typeof t?t.toString():t,t),as=e=>{var{data:t,compression:n}=e
if(t){if(n===dn.GZipJS){var r=ns(function(e){var t=e.length
if("undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e)
for(var n=new Si(e.length+(e.length>>>1)),r=0,i=function(e){n[r++]=e},s=0;s<t;++s){if(r+5>n.length){var o=new Si(r+8+(t-s<<1))
o.set(n),n=o}var a=e.charCodeAt(s)
a<128?i(a):a<2048?(i(192|a>>>6),i(128|63&a)):a>55295&&a<57344?(i(240|(a=65536+(1047552&a)|1023&e.charCodeAt(++s))>>>18),i(128|a>>>12&63),i(128|a>>>6&63),i(128|63&a)):(i(224|a>>>12),i(128|a>>>6&63),i(128|63&a))}return Gi(n,0,r)}(os(t)),{mtime:0}),i=new Blob([r],{type:is})
return{contentType:is,body:i,estimatedSize:i.size}}if(n===dn.Base64){var s=function(e){var t,n,r,i,s,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a=0,l=0,c="",u=[]
if(!e)return e
e=function(e){var t,n,r,i,s=""
for(t=n=0,r=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,i=0;i<r;i++){var o=e.charCodeAt(i),a=null
o<128?n++:a=o>127&&o<2048?String.fromCharCode(o>>6|192,63&o|128):String.fromCharCode(o>>12|224,o>>6&63|128,63&o|128),Q(a)||(n>t&&(s+=e.substring(t,n)),s+=a,t=n=i+1)}return n>t&&(s+=e.substring(t,e.length)),s}(e)
do{t=(s=e.charCodeAt(a++)<<16|e.charCodeAt(a++)<<8|e.charCodeAt(a++))>>18&63,n=s>>12&63,r=s>>6&63,i=63&s,u[l++]=o.charAt(t)+o.charAt(n)+o.charAt(r)+o.charAt(i)}while(a<e.length)
switch(c=u.join(""),e.length%3){case 1:c=c.slice(0,-2)+"=="
break
case 2:c=c.slice(0,-1)+"="}return c}(os(t)),o=(e=>"data="+encodeURIComponent("string"==typeof e?e:os(e)))(s)
return{contentType:"application/x-www-form-urlencoded",body:o,estimatedSize:new Blob([o]).size}}var a=os(t)
return{contentType:"application/json",body:a,estimatedSize:new Blob([a]).size}}},ls=[]
S&&ls.push({transport:"fetch",method:e=>{var t,n,{contentType:r,body:i,estimatedSize:s}=null!==(t=as(e))&&void 0!==t?t:{},o=new Headers
Be(e.headers,function(e,t){o.append(t,e)}),r&&o.append("Content-Type",r)
var a=e.url,l=null
if(C){var c=new C
l={signal:c.signal,timeout:setTimeout(()=>c.abort(),e.timeout)}}S(a,h({method:(null==e?void 0:e.method)||"GET",headers:o,keepalive:"POST"===e.method&&(s||0)<52428.8,body:i,signal:null==(n=l)?void 0:n.signal},e.fetchOptions)).then(t=>t.text().then(n=>{var r={statusCode:t.status,text:n}
if(200===t.status)try{r.json=JSON.parse(n)}catch(e){Fe.error(e)}null==e.callback||e.callback(r)})).catch(t=>{Fe.error(t),null==e.callback||e.callback({statusCode:0,text:t})}).finally(()=>l?clearTimeout(l.timeout):null)}}),E&&ls.push({transport:"XHR",method:e=>{var t,n=new E
n.open(e.method||"GET",e.url,!0)
var{contentType:r,body:i}=null!==(t=as(e))&&void 0!==t?t:{}
Be(e.headers,function(e,t){n.setRequestHeader(t,e)}),r&&n.setRequestHeader("Content-Type",r),e.timeout&&(n.timeout=e.timeout),e.disableXHRCredentials||(n.withCredentials=!0),n.onreadystatechange=()=>{if(4===n.readyState){var t={statusCode:n.status,text:n.responseText}
if(200===n.status)try{t.json=JSON.parse(n.responseText)}catch(e){}null==e.callback||e.callback(t)}},n.send(i)}}),null!=w&&w.sendBeacon&&ls.push({transport:"sendBeacon",method:e=>{var t=ss(e.url,{beacon:"1"})
try{var n,{contentType:r,body:i}=null!==(n=as(e))&&void 0!==n?n:{},s="string"==typeof i?new Blob([i],{type:r}):i
w.sendBeacon(t,s)}catch(e){}}})
var cs=function(e,t){if(!function(e){try{new RegExp(e)}catch(e){return!1}return!0}(t))return!1
try{return new RegExp(t).test(e)}catch(e){return!1}}
function us(e,t,n){return os({distinct_id:e,userPropertiesToSet:t,userPropertiesToSetOnce:n})}var ds={exact:(e,t)=>t.some(t=>e.some(e=>t===e)),is_not:(e,t)=>t.every(t=>e.every(e=>t!==e)),regex:(e,t)=>t.some(t=>e.some(e=>cs(t,e))),not_regex:(e,t)=>t.every(t=>e.every(e=>!cs(t,e))),icontains:(e,t)=>t.map(fs).some(t=>e.map(fs).some(e=>t.includes(e))),not_icontains:(e,t)=>t.map(fs).every(t=>e.map(fs).every(e=>!t.includes(e)))},fs=e=>e.toLowerCase(),ps=Ne("[Error tracking]")
class hs{constructor(e){var t,n
this._suppressionRules=[],this._errorPropertiesBuilder=new fe([new Ee,new Me,new Pe,new Ce,new Ae,new Ie,new $e,new Re],Se("web:javascript",be,ke)),this._instance=e,this._suppressionRules=null!==(t=null==(n=this._instance.persistence)?void 0:n.get_property(it))&&void 0!==t?t:[]}onRemoteConfig(e){var t,n,r,i=null!==(t=null==(n=e.errorTracking)?void 0:n.suppressionRules)&&void 0!==t?t:[],s=null==(r=e.errorTracking)?void 0:r.captureExtensionExceptions
this._suppressionRules=i,this._instance.persistence&&this._instance.persistence.register({[it]:this._suppressionRules,[st]:s})}get _captureExtensionExceptions(){var e,t=!!this._instance.get_property(st),n=this._instance.config.error_tracking.captureExtensionExceptions
return null!==(e=null!=n?n:t)&&void 0!==e&&e}buildProperties(e,t){return this._errorPropertiesBuilder.buildFromUnknown(e,{syntheticException:null==t?void 0:t.syntheticException,mechanism:{handled:null==t?void 0:t.handled}})}sendExceptionEvent(e){var t=e.$exception_list
if(this._isExceptionList(t)){if(this._matchesSuppressionRule(t))return void ps.info("Skipping exception capture because a suppression rule matched")
if(!this._captureExtensionExceptions&&this._isExtensionException(t))return void ps.info("Skipping exception capture because it was thrown by an extension")
if(!this._instance.config.error_tracking.__capturePostHogExceptions&&this._isPostHogException(t))return void ps.info("Skipping exception capture because it was thrown by the PostHog SDK")}return this._instance.capture("$exception",e,{_noTruncate:!0,_batchKey:"exceptionEvent"})}_matchesSuppressionRule(e){if(0===e.length)return!1
var t=e.reduce((e,t)=>{var{type:n,value:r}=t
return z(n)&&n.length>0&&e.$exception_types.push(n),z(r)&&r.length>0&&e.$exception_values.push(r),e},{$exception_types:[],$exception_values:[]})
return this._suppressionRules.some(e=>{var n=e.values.map(e=>{var n,r=ds[e.operator],i=B(e.value)?e.value:[e.value],s=null!==(n=t[e.key])&&void 0!==n?n:[]
return i.length>0&&r(i,s)})
return"OR"===e.type?n.some(Boolean):n.every(Boolean)})}_isExtensionException(e){return e.flatMap(e=>{var t,n
return null!==(t=null==(n=e.stacktrace)?void 0:n.frames)&&void 0!==t?t:[]}).some(e=>e.filename&&e.filename.startsWith("chrome-extension://"))}_isPostHogException(e){if(e.length>0){var t,n,r,i,s=null!==(t=null==(n=e[0].stacktrace)?void 0:n.frames)&&void 0!==t?t:[],o=s[s.length-1]
return null!==(r=null==o||null==(i=o.filename)?void 0:i.includes("posthog.com/static"))&&void 0!==r&&r}return!1}_isExceptionList(e){return!K(e)&&B(e)}}var gs=Ne("[FeatureFlags]"),vs=Ne("[FeatureFlags]",{debugEnabled:!0}),_s="$active_feature_flags",ms="$override_feature_flags",bs="$feature_flag_payloads",ys="$override_feature_flag_payloads",ws="$feature_flag_request_id",ks=e=>{var t={}
for(var[n,r]of Ge(e||{}))r&&(t[n]=r)
return t},xs=function(e){return e.FeatureFlags="feature_flags",e.Recordings="recordings",e}({})
class Ss{constructor(e){this._override_warning=!1,this._hasLoadedFlags=!1,this._requestInFlight=!1,this._reloadingDisabled=!1,this._additionalReloadRequested=!1,this._flagsCalled=!1,this._flagsLoadedFromRemote=!1,this._instance=e,this.featureFlagEventHandlers=[]}_getValidEvaluationEnvironments(){var e=this._instance.config.evaluation_environments
return null!=e&&e.length?e.filter(e=>{var t=e&&"string"==typeof e&&e.trim().length>0
return t||gs.error("Invalid evaluation environment found:",e,"Expected non-empty string"),t}):[]}_shouldIncludeEvaluationEnvironments(){return this._getValidEvaluationEnvironments().length>0}flags(){if(this._instance.config.__preview_remote_config)this._flagsCalled=!0
else{var e=!this._reloadDebouncer&&(this._instance.config.advanced_disable_feature_flags||this._instance.config.advanced_disable_feature_flags_on_first_load)
this._callFlagsEndpoint({disableFlags:e})}}get hasLoadedFlags(){return this._hasLoadedFlags}getFlags(){return Object.keys(this.getFlagVariants())}getFlagsWithDetails(){var e=this._instance.get_property(ht),t=this._instance.get_property(ms),n=this._instance.get_property(ys)
if(!n&&!t)return e||{}
var r=He({},e||{}),i=[...new Set([...Object.keys(n||{}),...Object.keys(t||{})])]
for(var s of i){var o,a,l=r[s],c=null==t?void 0:t[s],u=W(c)?null!==(o=null==l?void 0:l.enabled)&&void 0!==o&&o:!!c,d=W(c)?l.variant:"string"==typeof c?c:void 0,f=null==n?void 0:n[s],p=h({},l,{enabled:u,variant:u?null!=d?d:null==l?void 0:l.variant:void 0})
u!==(null==l?void 0:l.enabled)&&(p.original_enabled=null==l?void 0:l.enabled),d!==(null==l?void 0:l.variant)&&(p.original_variant=null==l?void 0:l.variant),f&&(p.metadata=h({},null==l?void 0:l.metadata,{payload:f,original_payload:null==l||null==(a=l.metadata)?void 0:a.payload})),r[s]=p}return this._override_warning||(gs.warn(" Overriding feature flag details!",{flagDetails:e,overriddenPayloads:n,finalDetails:r}),this._override_warning=!0),r}getFlagVariants(){var e=this._instance.get_property(ft),t=this._instance.get_property(ms)
if(!t)return e||{}
for(var n=He({},e),r=Object.keys(t),i=0;i<r.length;i++)n[r[i]]=t[r[i]]
return this._override_warning||(gs.warn(" Overriding feature flags!",{enabledFlags:e,overriddenFlags:t,finalFlags:n}),this._override_warning=!0),n}getFlagPayloads(){var e=this._instance.get_property(bs),t=this._instance.get_property(ys)
if(!t)return e||{}
for(var n=He({},e||{}),r=Object.keys(t),i=0;i<r.length;i++)n[r[i]]=t[r[i]]
return this._override_warning||(gs.warn(" Overriding feature flag payloads!",{flagPayloads:e,overriddenPayloads:t,finalPayloads:n}),this._override_warning=!0),n}reloadFeatureFlags(){this._reloadingDisabled||this._instance.config.advanced_disable_feature_flags||this._reloadDebouncer||(this._reloadDebouncer=setTimeout(()=>{this._callFlagsEndpoint()},5))}_clearDebouncer(){clearTimeout(this._reloadDebouncer),this._reloadDebouncer=void 0}ensureFlagsLoaded(){this._hasLoadedFlags||this._requestInFlight||this._reloadDebouncer||this.reloadFeatureFlags()}setAnonymousDistinctId(e){this.$anon_distinct_id=e}setReloadingPaused(e){this._reloadingDisabled=e}_callFlagsEndpoint(e){var t
if(this._clearDebouncer(),!this._instance._shouldDisableFlags())if(this._requestInFlight)this._additionalReloadRequested=!0
else{var n={token:this._instance.config.token,distinct_id:this._instance.get_distinct_id(),groups:this._instance.getGroups(),$anon_distinct_id:this.$anon_distinct_id,person_properties:h({},(null==(t=this._instance.persistence)?void 0:t.get_initial_props())||{},this._instance.get_property(gt)||{}),group_properties:this._instance.get_property(vt)};(null!=e&&e.disableFlags||this._instance.config.advanced_disable_feature_flags)&&(n.disable_flags=!0),this._shouldIncludeEvaluationEnvironments()&&(n.evaluation_environments=this._getValidEvaluationEnvironments())
var r=this._instance.config.__preview_remote_config,i=r?"/flags/?v=2":"/flags/?v=2&config=true",s=this._instance.config.advanced_only_evaluate_survey_feature_flags?"&only_evaluate_survey_feature_flags=true":"",o=this._instance.requestRouter.endpointFor("flags",i+s)
r&&(n.timezone=hi()),this._requestInFlight=!0,this._instance._send_request({method:"POST",url:o,data:n,compression:this._instance.config.disable_compression?void 0:dn.Base64,timeout:this._instance.config.feature_flag_request_timeout_ms,callback:e=>{var t,r,i=!0
if(200===e.statusCode&&(this._additionalReloadRequested||(this.$anon_distinct_id=void 0),i=!1),this._requestInFlight=!1,this._flagsCalled||(this._flagsCalled=!0,this._instance._onRemoteConfig(null!==(r=e.json)&&void 0!==r?r:{})),!n.disable_flags||this._additionalReloadRequested)if(this._flagsLoadedFromRemote=!i,e.json&&null!=(t=e.json.quotaLimited)&&t.includes(xs.FeatureFlags))gs.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.")
else{var s
n.disable_flags||this.receivedFeatureFlags(null!==(s=e.json)&&void 0!==s?s:{},i),this._additionalReloadRequested&&(this._additionalReloadRequested=!1,this._callFlagsEndpoint())}}})}}getFeatureFlag(e,t){if(void 0===t&&(t={}),this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0){var n=this.getFlagVariants()[e],r=""+n,i=this._instance.get_property(ws)||void 0,s=this._instance.get_property(bt)||{}
if((t.send_event||!("send_event"in t))&&(!(e in s)||!s[e].includes(r))){var o,a,l,c,u,d,f,p,h
B(s[e])?s[e].push(r):s[e]=[r],null==(o=this._instance.persistence)||o.register({[bt]:s})
var g=this.getFeatureFlagDetails(e),v={$feature_flag:e,$feature_flag_response:n,$feature_flag_payload:this.getFeatureFlagPayload(e)||null,$feature_flag_request_id:i,$feature_flag_bootstrapped_response:(null==(a=this._instance.config.bootstrap)||null==(a=a.featureFlags)?void 0:a[e])||null,$feature_flag_bootstrapped_payload:(null==(l=this._instance.config.bootstrap)||null==(l=l.featureFlagPayloads)?void 0:l[e])||null,$used_bootstrap_value:!this._flagsLoadedFromRemote}
W(null==g||null==(c=g.metadata)?void 0:c.version)||(v.$feature_flag_version=g.metadata.version)
var _,m=null!==(u=null==g||null==(d=g.reason)?void 0:d.description)&&void 0!==u?u:null==g||null==(f=g.reason)?void 0:f.code
m&&(v.$feature_flag_reason=m),null!=g&&null!=(p=g.metadata)&&p.id&&(v.$feature_flag_id=g.metadata.id),W(null==g?void 0:g.original_variant)&&W(null==g?void 0:g.original_enabled)||(v.$feature_flag_original_response=W(g.original_variant)?g.original_enabled:g.original_variant),null!=g&&null!=(h=g.metadata)&&h.original_payload&&(v.$feature_flag_original_payload=null==g||null==(_=g.metadata)?void 0:_.original_payload),this._instance.capture("$feature_flag_called",v)}return n}gs.warn('getFeatureFlag for key "'+e+"\" failed. Feature flags didn't load in time.")}getFeatureFlagDetails(e){return this.getFlagsWithDetails()[e]}getFeatureFlagPayload(e){return this.getFlagPayloads()[e]}getRemoteConfigPayload(e,t){var n=this._instance.config.token,r={distinct_id:this._instance.get_distinct_id(),token:n}
this._shouldIncludeEvaluationEnvironments()&&(r.evaluation_environments=this._getValidEvaluationEnvironments()),this._instance._send_request({method:"POST",url:this._instance.requestRouter.endpointFor("flags","/flags/?v=2&config=true"),data:r,compression:this._instance.config.disable_compression?void 0:dn.Base64,timeout:this._instance.config.feature_flag_request_timeout_ms,callback:n=>{var r,i=null==(r=n.json)?void 0:r.featureFlagPayloads
t((null==i?void 0:i[e])||void 0)}})}isFeatureEnabled(e,t){if(void 0===t&&(t={}),this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0){var n=this.getFeatureFlag(e,t)
return W(n)?void 0:!!n}gs.warn('isFeatureEnabled for key "'+e+"\" failed. Feature flags didn't load in time.")}addFeatureFlagsHandler(e){this.featureFlagEventHandlers.push(e)}removeFeatureFlagsHandler(e){this.featureFlagEventHandlers=this.featureFlagEventHandlers.filter(t=>t!==e)}receivedFeatureFlags(e,t){if(this._instance.persistence){this._hasLoadedFlags=!0
var n=this.getFlagVariants(),r=this.getFlagPayloads(),i=this.getFlagsWithDetails()
!function(e,t,n,r,i){void 0===n&&(n={}),void 0===r&&(r={}),void 0===i&&(i={})
var s=(e=>{var t=e.flags
return t?(e.featureFlags=Object.fromEntries(Object.keys(t).map(e=>{var n
return[e,null!==(n=t[e].variant)&&void 0!==n?n:t[e].enabled]})),e.featureFlagPayloads=Object.fromEntries(Object.keys(t).filter(e=>t[e].enabled).filter(e=>{var n
return null==(n=t[e].metadata)?void 0:n.payload}).map(e=>{var n
return[e,null==(n=t[e].metadata)?void 0:n.payload]}))):gs.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"),e})(e),o=s.flags,a=s.featureFlags,l=s.featureFlagPayloads
if(a){var c=e.requestId
if(B(a)){gs.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.")
var u={}
if(a)for(var d=0;d<a.length;d++)u[a[d]]=!0
t&&t.register({[_s]:a,[ft]:u})}else{var f=a,p=l,g=o
e.errorsWhileComputingFlags&&(f=h({},n,f),p=h({},r,p),g=h({},i,g)),t&&t.register(h({[_s]:Object.keys(ks(f)),[ft]:f||{},[bs]:p||{},[ht]:g||{}},c?{[ws]:c}:{}))}}}(e,this._instance.persistence,n,r,i),this._fireFeatureFlagsCallbacks(t)}}override(e,t){void 0===t&&(t=!1),gs.warn("override is deprecated. Please use overrideFeatureFlags instead."),this.overrideFeatureFlags({flags:e,suppressWarning:t})}overrideFeatureFlags(e){if(!this._instance.__loaded||!this._instance.persistence)return gs.uninitializedWarning("posthog.featureFlags.overrideFeatureFlags")
if(!1===e)return this._instance.persistence.unregister(ms),this._instance.persistence.unregister(ys),this._fireFeatureFlagsCallbacks(),vs.info("All overrides cleared")
if(e&&"object"==typeof e&&("flags"in e||"payloads"in e)){var t,n=e
if(this._override_warning=Boolean(null!==(t=n.suppressWarning)&&void 0!==t&&t),"flags"in n)if(!1===n.flags)this._instance.persistence.unregister(ms),vs.info("Flag overrides cleared")
else if(n.flags){if(B(n.flags)){for(var r={},i=0;i<n.flags.length;i++)r[n.flags[i]]=!0
this._instance.persistence.register({[ms]:r})}else this._instance.persistence.register({[ms]:n.flags})
vs.info("Flag overrides set",{flags:n.flags})}return"payloads"in n&&(!1===n.payloads?(this._instance.persistence.unregister(ys),vs.info("Payload overrides cleared")):n.payloads&&(this._instance.persistence.register({[ys]:n.payloads}),vs.info("Payload overrides set",{payloads:n.payloads}))),void this._fireFeatureFlagsCallbacks()}this._fireFeatureFlagsCallbacks()}onFeatureFlags(e){if(this.addFeatureFlagsHandler(e),this._hasLoadedFlags){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
e(t,n)}return()=>this.removeFeatureFlagsHandler(e)}updateEarlyAccessFeatureEnrollment(e,t,n){var r,i=(this._instance.get_property(pt)||[]).find(t=>t.flagKey===e),s={["$feature_enrollment/"+e]:t},o={$feature_flag:e,$feature_enrollment:t,$set:s}
i&&(o.$early_access_feature_name=i.name),n&&(o.$feature_enrollment_stage=n),this._instance.capture("$feature_enrollment_update",o),this.setPersonPropertiesForFlags(s,!1)
var a=h({},this.getFlagVariants(),{[e]:t})
null==(r=this._instance.persistence)||r.register({[_s]:Object.keys(ks(a)),[ft]:a}),this._fireFeatureFlagsCallbacks()}getEarlyAccessFeatures(e,t,n){void 0===t&&(t=!1)
var r=this._instance.get_property(pt),i=n?"&"+n.map(e=>"stage="+e).join("&"):""
if(r&&!t)return e(r)
this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/early_access_features/?token="+this._instance.config.token+i),method:"GET",callback:t=>{var n,r
if(t.json){var i=t.json.earlyAccessFeatures
return null==(n=this._instance.persistence)||n.unregister(pt),null==(r=this._instance.persistence)||r.register({[pt]:i}),e(i)}}})}_prepareFeatureFlagsForCallbacks(){var e=this.getFlags(),t=this.getFlagVariants()
return{flags:e.filter(e=>t[e]),flagVariants:Object.keys(t).filter(e=>t[e]).reduce((e,n)=>(e[n]=t[n],e),{})}}_fireFeatureFlagsCallbacks(e){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
this.featureFlagEventHandlers.forEach(r=>r(t,n,{errorsLoading:e}))}setPersonPropertiesForFlags(e,t){void 0===t&&(t=!0)
var n=this._instance.get_property(gt)||{}
this._instance.register({[gt]:h({},n,e)}),t&&this._instance.reloadFeatureFlags()}resetPersonPropertiesForFlags(){this._instance.unregister(gt)}setGroupPropertiesForFlags(e,t){void 0===t&&(t=!0)
var n=this._instance.get_property(vt)||{}
0!==Object.keys(n).length&&Object.keys(n).forEach(t=>{n[t]=h({},n[t],e[t]),delete e[t]}),this._instance.register({[vt]:h({},n,e)}),t&&this._instance.reloadFeatureFlags()}resetGroupPropertiesForFlags(e){if(e){var t=this._instance.get_property(vt)||{}
this._instance.register({[vt]:h({},t,{[e]:{}})})}else this._instance.unregister(vt)}reset(){this._hasLoadedFlags=!1,this._requestInFlight=!1,this._reloadingDisabled=!1,this._additionalReloadRequested=!1,this._flagsCalled=!1,this._flagsLoadedFromRemote=!1,this.$anon_distinct_id=void 0,this._clearDebouncer(),this._override_warning=!1}}var Es=["cookie","localstorage","localstorage+cookie","sessionstorage","memory"]
class Cs{constructor(e,t){this._config=e,this.props={},this._campaign_params_saved=!1,this._name=(e=>{var t=""
return e.token&&(t=e.token.replace(/\+/g,"PL").replace(/\//g,"SL").replace(/=/g,"EQ")),e.persistence_name?"ph_"+e.persistence_name:"ph_"+t+"_posthog"})(e),this._storage=this._buildStorage(e),this.load(),e.debug&&Fe.info("Persistence loaded",e.persistence,h({},this.props)),this.update_config(e,e,t),this.save()}isDisabled(){return!!this._disabled}_buildStorage(e){-1===Es.indexOf(e.persistence.toLowerCase())&&(Fe.critical("Unknown persistence type "+e.persistence+"; falling back to localStorage+cookie"),e.persistence="localStorage+cookie")
var t=e.persistence.toLowerCase()
return"localstorage"===t&&An._is_supported()?An:"localstorage+cookie"===t&&Mn._is_supported()?Mn:"sessionstorage"===t&&Dn._is_supported()?Dn:"memory"===t?Fn:"cookie"===t?On:Mn._is_supported()?Mn:On}properties(){var e={}
return Be(this.props,function(t,n){if(n===ft&&U(t))for(var r=Object.keys(t),i=0;i<r.length;i++)e["$feature/"+r[i]]=t[r[i]]
else o=n,a=!1,(Q(s=$t)?a:y&&s.indexOf===y?-1!=s.indexOf(o):(Be(s,function(e){if(a||(a=e===o))return De}),a))||(e[n]=t)
var s,o,a}),e}load(){if(!this._disabled){var e=this._storage._parse(this._name)
e&&(this.props=He({},e))}}save(){this._disabled||this._storage._set(this._name,this.props,this._expire_days,this._cross_subdomain,this._secure,this._config.debug)}remove(){this._storage._remove(this._name,!1),this._storage._remove(this._name,!0)}clear(){this.remove(),this.props={}}register_once(e,t,n){if(U(e)){W(t)&&(t="None"),this._expire_days=W(n)?this._default_expiry:n
var r=!1
if(Be(e,(e,n)=>{this.props.hasOwnProperty(n)&&this.props[n]!==t||(this.props[n]=e,r=!0)}),r)return this.save(),!0}return!1}register(e,t){if(U(e)){this._expire_days=W(t)?this._default_expiry:t
var n=!1
if(Be(e,(t,r)=>{e.hasOwnProperty(r)&&this.props[r]!==t&&(this.props[r]=t,n=!0)}),n)return this.save(),!0}return!1}unregister(e){e in this.props&&(delete this.props[e],this.save())}update_campaign_params(){if(!this._campaign_params_saved){var e=ai(this._config.custom_campaign_params,this._config.mask_personal_data_properties,this._config.custom_personal_data_properties)
G(Ve(e))||this.register(e),this._campaign_params_saved=!0}}update_search_keyword(){var e
this.register((e=null==k?void 0:k.referrer)?ci(e):{})}update_referrer_info(){var e
this.register_once({$referrer:di(),$referring_domain:null!=k&&k.referrer&&(null==(e=fn(k.referrer))?void 0:e.host)||"$direct"},void 0)}set_initial_person_info(){this.props[xt]||this.props[St]||this.register_once({[Et]:fi(this._config.mask_personal_data_properties,this._config.custom_personal_data_properties)},void 0)}get_initial_props(){var e={}
Be([St,xt],t=>{var n=this.props[t]
n&&Be(n,function(t,n){e["$initial_"+j(n)]=t})})
var t,n,r=this.props[Et]
if(r){var i=(t=pi(r),n={},Be(t,function(e,t){n["$initial_"+j(t)]=e}),n)
He(e,i)}return e}safe_merge(e){return Be(this.props,function(t,n){n in e||(e[n]=t)}),e}update_config(e,t,n){if(this._default_expiry=this._expire_days=e.cookie_expiration,this.set_disabled(e.disable_persistence||!!n),this.set_cross_subdomain(e.cross_subdomain_cookie),this.set_secure(e.secure_cookie),e.persistence!==t.persistence){var r=this._buildStorage(e),i=this.props
this.clear(),this._storage=r,this.props=i,this.save()}}set_disabled(e){this._disabled=e,this._disabled?this.remove():this.save()}set_cross_subdomain(e){e!==this._cross_subdomain&&(this._cross_subdomain=e,this.remove(),this.save())}set_secure(e){e!==this._secure&&(this._secure=e,this.remove(),this.save())}set_event_timer(e,t){var n=this.props[et]||{}
n[e]=t,this.props[et]=n,this.save()}remove_event_timer(e){var t=(this.props[et]||{})[e]
return W(t)||(delete this.props[et][e],this.save()),t}get_property(e){return this.props[e]}set_property(e,t){this.props[e]=t,this.save()}}!function(e){e.Button="button",e.Tab="tab",e.Selector="selector"}({}),function(e){e.TopLeft="top_left",e.TopRight="top_right",e.TopCenter="top_center",e.MiddleLeft="middle_left",e.MiddleRight="middle_right",e.MiddleCenter="middle_center",e.Left="left",e.Center="center",e.Right="right",e.NextToTrigger="next_to_trigger"}({}),function(e){e.Top="top",e.Left="left",e.Right="right",e.Bottom="bottom"}({})
var Ps=function(e){return e.Popover="popover",e.API="api",e.Widget="widget",e.ExternalSurvey="external_survey",e}({})
!function(e){e.Open="open",e.MultipleChoice="multiple_choice",e.SingleChoice="single_choice",e.Rating="rating",e.Link="link"}({}),function(e){e.NextQuestion="next_question",e.End="end",e.ResponseBased="response_based",e.SpecificQuestion="specific_question"}({}),function(e){e.Once="once",e.Recurring="recurring",e.Always="always"}({})
var Ls=function(e){return e.SHOWN="survey shown",e.DISMISSED="survey dismissed",e.SENT="survey sent",e}({}),$s=function(e){return e.SURVEY_ID="$survey_id",e.SURVEY_NAME="$survey_name",e.SURVEY_RESPONSE="$survey_response",e.SURVEY_ITERATION="$survey_iteration",e.SURVEY_ITERATION_START_DATE="$survey_iteration_start_date",e.SURVEY_PARTIALLY_COMPLETED="$survey_partially_completed",e.SURVEY_SUBMISSION_ID="$survey_submission_id",e.SURVEY_QUESTIONS="$survey_questions",e.SURVEY_COMPLETED="$survey_completed",e}({}),Ts=function(e){return e.Popover="popover",e.Inline="inline",e}({})
class Os{constructor(){this._events={},this._events={}}on(e,t){return this._events[e]||(this._events[e]=[]),this._events[e].push(t),()=>{this._events[e]=this._events[e].filter(e=>e!==t)}}emit(e,t){for(var n of this._events[e]||[])n(t)
for(var r of this._events["*"]||[])r(e,t)}}class Is{constructor(e){this._debugEventEmitter=new Os,this._checkStep=(e,t)=>this._checkStepEvent(e,t)&&this._checkStepUrl(e,t)&&this._checkStepElement(e,t),this._checkStepEvent=(e,t)=>null==t||!t.event||(null==e?void 0:e.event)===(null==t?void 0:t.event),this._instance=e,this._actionEvents=new Set,this._actionRegistry=new Set}init(){var e,t
W(null==(e=this._instance)?void 0:e._addCaptureHook)||(null==(t=this._instance)||t._addCaptureHook((e,t)=>{this.on(e,t)}))}register(e){var t,n
if(!W(null==(t=this._instance)?void 0:t._addCaptureHook)&&(e.forEach(e=>{var t,n
null==(t=this._actionRegistry)||t.add(e),null==(n=e.steps)||n.forEach(e=>{var t
null==(t=this._actionEvents)||t.add((null==e?void 0:e.event)||"")})}),null!=(n=this._instance)&&n.autocapture)){var r,i=new Set
e.forEach(e=>{var t
null==(t=e.steps)||t.forEach(e=>{null!=e&&e.selector&&i.add(null==e?void 0:e.selector)})}),null==(r=this._instance)||r.autocapture.setElementSelectors(i)}}on(e,t){var n
null!=t&&0!=e.length&&(this._actionEvents.has(e)||this._actionEvents.has(null==t?void 0:t.event))&&this._actionRegistry&&(null==(n=this._actionRegistry)?void 0:n.size)>0&&this._actionRegistry.forEach(e=>{this._checkAction(t,e)&&this._debugEventEmitter.emit("actionCaptured",e.name)})}_addActionHook(e){this.onAction("actionCaptured",t=>e(t))}_checkAction(e,t){if(null==(null==t?void 0:t.steps))return!1
for(var n of t.steps)if(this._checkStep(e,n))return!0
return!1}onAction(e,t){return this._debugEventEmitter.on(e,t)}_checkStepUrl(e,t){if(null!=t&&t.url){var n,r=null==e||null==(n=e.properties)?void 0:n.$current_url
if(!r||"string"!=typeof r)return!1
if(!Is._matchString(r,null==t?void 0:t.url,(null==t?void 0:t.url_matching)||"contains"))return!1}return!0}static _matchString(e,t,n){switch(n){case"regex":return!!v&&cs(e,t)
case"exact":return t===e
case"contains":var r=Is._escapeStringRegexp(t).replace(/_/g,".").replace(/%/g,".*")
return cs(e,r)
default:return!1}}static _escapeStringRegexp(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}_checkStepElement(e,t){if((null!=t&&t.href||null!=t&&t.tag_name||null!=t&&t.text)&&!this._getElementsList(e).some(e=>!(null!=t&&t.href&&!Is._matchString(e.href||"",null==t?void 0:t.href,(null==t?void 0:t.href_matching)||"exact")||null!=t&&t.tag_name&&e.tag_name!==(null==t?void 0:t.tag_name)||null!=t&&t.text&&!Is._matchString(e.text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")&&!Is._matchString(e.$el_text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact"))))return!1
if(null!=t&&t.selector){var n,r=null==e||null==(n=e.properties)?void 0:n.$element_selectors
if(!r)return!1
if(!r.includes(null==t?void 0:t.selector))return!1}return!0}_getElementsList(e){return null==(null==e?void 0:e.properties.$elements)?[]:null==e?void 0:e.properties.$elements}}var As=Ne("[Surveys]"),Rs="seenSurvey_",Ms=(e,t)=>{var n="$survey_"+t+"/"+e.id
return e.current_iteration&&e.current_iteration>0&&(n="$survey_"+t+"/"+e.id+"/"+e.current_iteration),n},js=e=>{var t=""+Rs+e.id
return e.current_iteration&&e.current_iteration>0&&(t=""+Rs+e.id+"_"+e.current_iteration),t},Fs=[Ps.Popover,Ps.Widget,Ps.API],Ns={ignoreConditions:!1,ignoreDelay:!1,displayType:Ts.Popover}
class Ds{constructor(e){this._instance=e,this._eventToSurveys=new Map,this._actionToSurveys=new Map}register(e){var t
W(null==(t=this._instance)?void 0:t._addCaptureHook)||(this._setupEventBasedSurveys(e),this._setupActionBasedSurveys(e))}_setupActionBasedSurveys(e){var t=e.filter(e=>{var t,n
return(null==(t=e.conditions)?void 0:t.actions)&&(null==(n=e.conditions)||null==(n=n.actions)||null==(n=n.values)?void 0:n.length)>0})
0!==t.length&&(null==this._actionMatcher&&(this._actionMatcher=new Is(this._instance),this._actionMatcher.init(),this._actionMatcher._addActionHook(e=>{this.onAction(e)})),t.forEach(e=>{var t,n,r,i,s
e.conditions&&null!=(t=e.conditions)&&t.actions&&null!=(n=e.conditions)&&null!=(n=n.actions)&&n.values&&(null==(r=e.conditions)||null==(r=r.actions)||null==(r=r.values)?void 0:r.length)>0&&(null==(i=this._actionMatcher)||i.register(e.conditions.actions.values),null==(s=e.conditions)||null==(s=s.actions)||null==(s=s.values)||s.forEach(t=>{if(t&&t.name){var n=this._actionToSurveys.get(t.name)
n&&n.push(e.id),this._actionToSurveys.set(t.name,n||[e.id])}}))}))}_setupEventBasedSurveys(e){var t
0!==e.filter(e=>{var t,n
return(null==(t=e.conditions)?void 0:t.events)&&(null==(n=e.conditions)||null==(n=n.events)||null==(n=n.values)?void 0:n.length)>0}).length&&(null==(t=this._instance)||t._addCaptureHook((e,t)=>{this.onEvent(e,t)}),e.forEach(e=>{var t
null==(t=e.conditions)||null==(t=t.events)||null==(t=t.values)||t.forEach(t=>{if(t&&t.name){var n=this._eventToSurveys.get(t.name)
n&&n.push(e.id),this._eventToSurveys.set(t.name,n||[e.id])}})}))}onEvent(e,t){var n,r,i=(null==(n=this._instance)||null==(n=n.persistence)?void 0:n.props[mt])||[]
if(Ls.SHOWN===e&&t&&i.length>0){var s
As.info("survey event matched, removing survey from activated surveys",{event:e,eventPayload:t,existingActivatedSurveys:i})
var o=null==t||null==(s=t.properties)?void 0:s.$survey_id
if(o){var a=i.indexOf(o)
a>=0&&(i.splice(a,1),this._updateActivatedSurveys(i))}}else if(this._eventToSurveys.has(e)){As.info("survey event name matched",{event:e,eventPayload:t,surveys:this._eventToSurveys.get(e)})
var l=[]
null==(r=this._instance)||r.getSurveys(t=>{l=t.filter(t=>{var n
return null==(n=this._eventToSurveys.get(e))?void 0:n.includes(t.id)})})
var c=l.filter(n=>{var r,i=null==(r=n.conditions)||null==(r=r.events)||null==(r=r.values)?void 0:r.find(t=>t.name===e)
return!!i&&(!i.propertyFilters||Object.entries(i.propertyFilters).every(e=>{var n,[r,i]=e,s=null==t||null==(n=t.properties)?void 0:n[r]
if(W(s)||Q(s))return!1
var o=[String(s)],a=ds[i.operator]
return a?a(i.values,o):(As.warn("Unknown property comparison operator: "+i.operator),!1)}))})
this._updateActivatedSurveys(i.concat(c.map(e=>e.id)||[]))}}onAction(e){var t,n=(null==(t=this._instance)||null==(t=t.persistence)?void 0:t.props[mt])||[]
this._actionToSurveys.has(e)&&this._updateActivatedSurveys(n.concat(this._actionToSurveys.get(e)||[]))}_updateActivatedSurveys(e){var t
As.info("updating activated surveys",{activatedSurveys:e}),null==(t=this._instance)||null==(t=t.persistence)||t.register({[mt]:[...new Set(e)]})}getSurveys(){var e
return(null==(e=this._instance)||null==(e=e.persistence)?void 0:e.props[mt])||[]}getEventToSurveys(){return this._eventToSurveys}_getActionMatcher(){return this._actionMatcher}}class qs{constructor(e){this._isSurveysEnabled=void 0,this._surveyManager=null,this._isFetchingSurveys=!1,this._isInitializingSurveys=!1,this._surveyCallbacks=[],this._instance=e,this._surveyEventReceiver=null}onRemoteConfig(e){if(!this._instance.config.disable_surveys){var t=e.surveys
if(K(t))return As.warn("Flags not loaded yet. Not loading surveys.")
var n=B(t)
this._isSurveysEnabled=n?t.length>0:t,As.info("flags response received, isSurveysEnabled: "+this._isSurveysEnabled),this.loadIfEnabled()}}reset(){localStorage.removeItem("lastSeenSurveyDate")
for(var e=[],t=0;t<localStorage.length;t++){var n=localStorage.key(t);(null!=n&&n.startsWith(Rs)||null!=n&&n.startsWith("inProgressSurvey_"))&&e.push(n)}e.forEach(e=>localStorage.removeItem(e))}loadIfEnabled(){if(!this._surveyManager)if(this._isInitializingSurveys)As.info("Already initializing surveys, skipping...")
else if(this._instance.config.disable_surveys)As.info("Disabled. Not loading surveys.")
else if(this._instance.config.cookieless_mode&&this._instance.consent.isOptedOut())As.info("Not loading surveys in cookieless mode without consent.")
else{var e=null==L?void 0:L.__PosthogExtensions__
if(e){if(!W(this._isSurveysEnabled)||this._instance.config.advanced_enable_surveys){var t=this._isSurveysEnabled||this._instance.config.advanced_enable_surveys
this._isInitializingSurveys=!0
try{var n=e.generateSurveys
if(n)return void this._completeSurveyInitialization(n,t)
var r=e.loadExternalDependency
if(!r)return void this._handleSurveyLoadError("PostHog loadExternalDependency extension not found.")
r(this._instance,"surveys",n=>{n||!e.generateSurveys?this._handleSurveyLoadError("Could not load surveys script",n):this._completeSurveyInitialization(e.generateSurveys,t)})}catch(e){throw this._handleSurveyLoadError("Error initializing surveys",e),e}finally{this._isInitializingSurveys=!1}}}else As.error("PostHog Extensions not found.")}}_completeSurveyInitialization(e,t){this._surveyManager=e(this._instance,t),this._surveyEventReceiver=new Ds(this._instance),As.info("Surveys loaded successfully"),this._notifySurveyCallbacks({isLoaded:!0})}_handleSurveyLoadError(e,t){As.error(e,t),this._notifySurveyCallbacks({isLoaded:!1,error:e})}onSurveysLoaded(e){return this._surveyCallbacks.push(e),this._surveyManager&&this._notifySurveyCallbacks({isLoaded:!0}),()=>{this._surveyCallbacks=this._surveyCallbacks.filter(t=>t!==e)}}getSurveys(e,t){if(void 0===t&&(t=!1),this._instance.config.disable_surveys)return As.info("Disabled. Not loading surveys."),e([])
var n=this._instance.get_property(_t)
if(n&&!t)return e(n,{isLoaded:!0})
if(this._isFetchingSurveys)return e([],{isLoaded:!1,error:"Surveys are already being loaded"})
try{this._isFetchingSurveys=!0,this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/surveys/?token="+this._instance.config.token),method:"GET",timeout:this._instance.config.surveys_request_timeout_ms,callback:t=>{var n
this._isFetchingSurveys=!1
var r=t.statusCode
if(200!==r||!t.json){var i="Surveys API could not be loaded, status: "+r
return As.error(i),e([],{isLoaded:!1,error:i})}var s,o=t.json.surveys||[],a=o.filter(e=>function(e){return!(!e.start_date||e.end_date)}(e)&&(function(e){var t
return!(null==(t=e.conditions)||null==(t=t.events)||null==(t=t.values)||!t.length)}(e)||function(e){var t
return!(null==(t=e.conditions)||null==(t=t.actions)||null==(t=t.values)||!t.length)}(e)))
return a.length>0&&(null==(s=this._surveyEventReceiver)||s.register(a)),null==(n=this._instance.persistence)||n.register({[_t]:o}),e(o,{isLoaded:!0})}})}catch(e){throw this._isFetchingSurveys=!1,e}}_notifySurveyCallbacks(e){for(var t of this._surveyCallbacks)try{if(!e.isLoaded)return t([],e)
this.getSurveys(t)}catch(e){As.error("Error in survey callback",e)}}getActiveMatchingSurveys(e,t){if(void 0===t&&(t=!1),!K(this._surveyManager))return this._surveyManager.getActiveMatchingSurveys(e,t)
As.warn("init was not called")}_getSurveyById(e){var t=null
return this.getSurveys(n=>{var r
t=null!==(r=n.find(t=>t.id===e))&&void 0!==r?r:null}),t}_checkSurveyEligibility(e){if(K(this._surveyManager))return{eligible:!1,reason:"SDK is not enabled or survey functionality is not yet loaded"}
var t="string"==typeof e?this._getSurveyById(e):e
return t?this._surveyManager.checkSurveyEligibility(t):{eligible:!1,reason:"Survey not found"}}canRenderSurvey(e){if(K(this._surveyManager))return As.warn("init was not called"),{visible:!1,disabledReason:"SDK is not enabled or survey functionality is not yet loaded"}
var t=this._checkSurveyEligibility(e)
return{visible:t.eligible,disabledReason:t.reason}}canRenderSurveyAsync(e,t){return K(this._surveyManager)?(As.warn("init was not called"),Promise.resolve({visible:!1,disabledReason:"SDK is not enabled or survey functionality is not yet loaded"})):new Promise(n=>{this.getSurveys(t=>{var r,i=null!==(r=t.find(t=>t.id===e))&&void 0!==r?r:null
if(i){var s=this._checkSurveyEligibility(i)
n({visible:s.eligible,disabledReason:s.reason})}else n({visible:!1,disabledReason:"Survey not found"})},t)})}renderSurvey(e,t){var n
if(K(this._surveyManager))As.warn("init was not called")
else{var r="string"==typeof e?this._getSurveyById(e):e
if(null!=r&&r.id)if(Fs.includes(r.type)){var i=null==k?void 0:k.querySelector(t)
if(i)return null!=(n=r.appearance)&&n.surveyPopupDelaySeconds?(As.info("Rendering survey "+r.id+" with delay of "+r.appearance.surveyPopupDelaySeconds+" seconds"),void setTimeout(()=>{var e,t
As.info("Rendering survey "+r.id+" with delay of "+(null==(e=r.appearance)?void 0:e.surveyPopupDelaySeconds)+" seconds"),null==(t=this._surveyManager)||t.renderSurvey(r,i),As.info("Survey "+r.id+" rendered")},1e3*r.appearance.surveyPopupDelaySeconds)):void this._surveyManager.renderSurvey(r,i)
As.warn("Survey element not found")}else As.warn("Surveys of type "+r.type+" cannot be rendered in the app")
else As.warn("Survey not found")}}displaySurvey(e,t){var n
if(K(this._surveyManager))As.warn("init was not called")
else{var r=this._getSurveyById(e)
if(r){var i=r
if(null!=(n=r.appearance)&&n.surveyPopupDelaySeconds&&t.ignoreDelay&&(i=h({},r,{appearance:h({},r.appearance,{surveyPopupDelaySeconds:0})})),!1===t.ignoreConditions){var s=this.canRenderSurvey(r)
if(!s.visible)return void As.warn("Survey is not eligible to be displayed: ",s.disabledReason)}t.displayType!==Ts.Inline?this._surveyManager.handlePopoverSurvey(i):this.renderSurvey(i,t.selector)}else As.warn("Survey not found")}}}var Bs=Ne("[RateLimiter]")
class Hs{constructor(e){var t,n
this.serverLimits={},this.lastEventRateLimited=!1,this.checkForLimiting=e=>{var t=e.text
if(t&&t.length)try{(JSON.parse(t).quota_limited||[]).forEach(e=>{Bs.info((e||"events")+" is quota limited."),this.serverLimits[e]=(new Date).getTime()+6e4})}catch(e){return void Bs.warn('could not rate limit - continuing. Error: "'+(null==e?void 0:e.message)+'"',{text:t})}},this.instance=e,this.captureEventsPerSecond=(null==(t=e.config.rate_limiting)?void 0:t.events_per_second)||10,this.captureEventsBurstLimit=Math.max((null==(n=e.config.rate_limiting)?void 0:n.events_burst_limit)||10*this.captureEventsPerSecond,this.captureEventsPerSecond),this.lastEventRateLimited=this.clientRateLimitContext(!0).isRateLimited}clientRateLimitContext(e){var t,n,r
void 0===e&&(e=!1)
var i=(new Date).getTime(),s=null!==(t=null==(n=this.instance.persistence)?void 0:n.get_property(kt))&&void 0!==t?t:{tokens:this.captureEventsBurstLimit,last:i}
s.tokens+=(i-s.last)/1e3*this.captureEventsPerSecond,s.last=i,s.tokens>this.captureEventsBurstLimit&&(s.tokens=this.captureEventsBurstLimit)
var o=s.tokens<1
return o||e||(s.tokens=Math.max(0,s.tokens-1)),!o||this.lastEventRateLimited||e||this.instance.capture("$$client_ingestion_warning",{$$client_ingestion_warning_message:"posthog-js client rate limited. Config is set to "+this.captureEventsPerSecond+" events per second and "+this.captureEventsBurstLimit+" events burst limit."},{skip_client_rate_limiting:!0}),this.lastEventRateLimited=o,null==(r=this.instance.persistence)||r.set_property(kt,s),{isRateLimited:o,remainingTokens:s.tokens}}isServerRateLimited(e){var t=this.serverLimits[e||"events"]||!1
return!1!==t&&(new Date).getTime()<t}}var Us=Ne("[RemoteConfig]")
class Gs{constructor(e){this._instance=e}get remoteConfig(){var e
return null==(e=L._POSTHOG_REMOTE_CONFIG)||null==(e=e[this._instance.config.token])?void 0:e.config}_loadRemoteConfigJs(e){var t,n
null!=(t=L.__PosthogExtensions__)&&t.loadExternalDependency?null==(n=L.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"remote-config",()=>e(this.remoteConfig)):(Us.error("PostHog Extensions not found. Cannot load remote config."),e())}_loadRemoteConfigJSON(e){this._instance._send_request({method:"GET",url:this._instance.requestRouter.endpointFor("assets","/array/"+this._instance.config.token+"/config"),callback:t=>{e(t.json)}})}load(){try{if(this.remoteConfig)return Us.info("Using preloaded remote config",this.remoteConfig),void this._onRemoteConfig(this.remoteConfig)
if(this._instance._shouldDisableFlags())return void Us.warn("Remote config is disabled. Falling back to local config.")
this._loadRemoteConfigJs(e=>{if(!e)return Us.info("No config found after loading remote JS config. Falling back to JSON."),void this._loadRemoteConfigJSON(e=>{this._onRemoteConfig(e)})
this._onRemoteConfig(e)})}catch(e){Us.error("Error loading remote config",e)}}_onRemoteConfig(e){e?this._instance.config.__preview_remote_config?(this._instance._onRemoteConfig(e),!1!==e.hasFeatureFlags&&this._instance.featureFlags.ensureFlagsLoaded()):Us.info("__preview_remote_config is disabled. Logging config instead",e):Us.error("Failed to fetch remote config from PostHog.")}}var Ws=3e3
class zs{constructor(e,t){this._isPaused=!0,this._queue=[],this._flushTimeoutMs=se((null==t?void 0:t.flush_interval_ms)||Ws,250,5e3,Fe.createLogger("flush interval"),Ws),this._sendRequest=e}enqueue(e){this._queue.push(e),this._flushTimeout||this._setFlushTimeout()}unload(){this._clearFlushTimeout()
var e=this._queue.length>0?this._formatQueue():{},t=Object.values(e);[...t.filter(e=>0===e.url.indexOf("/e")),...t.filter(e=>0!==e.url.indexOf("/e"))].map(e=>{this._sendRequest(h({},e,{transport:"sendBeacon"}))})}enable(){this._isPaused=!1,this._setFlushTimeout()}_setFlushTimeout(){var e=this
this._isPaused||(this._flushTimeout=setTimeout(()=>{if(this._clearFlushTimeout(),this._queue.length>0){var t=this._formatQueue(),n=function(){var n=t[r],i=(new Date).getTime()
n.data&&B(n.data)&&Be(n.data,e=>{e.offset=Math.abs(e.timestamp-i),delete e.timestamp}),e._sendRequest(n)}
for(var r in t)n()}},this._flushTimeoutMs))}_clearFlushTimeout(){clearTimeout(this._flushTimeout),this._flushTimeout=void 0}_formatQueue(){var e={}
return Be(this._queue,t=>{var n,r=t,i=(r?r.batchKey:null)||r.url
W(e[i])&&(e[i]=h({},r,{data:[]})),null==(n=e[i].data)||n.push(r.data)}),this._queue=[],e}}var Vs=["retriesPerformedSoFar"]
class Qs{constructor(e){this._isPolling=!1,this._pollIntervalMs=3e3,this._queue=[],this._instance=e,this._queue=[],this._areWeOnline=!0,!W(v)&&"onLine"in v.navigator&&(this._areWeOnline=v.navigator.onLine,this._onlineListener=()=>{this._areWeOnline=!0,this._flush()},this._offlineListener=()=>{this._areWeOnline=!1},Ye(v,"online",this._onlineListener),Ye(v,"offline",this._offlineListener))}get length(){return this._queue.length}retriableRequest(e){var{retriesPerformedSoFar:t}=e,n=g(e,Vs)
J(t)&&t>0&&(n.url=ss(n.url,{retry_count:t})),this._instance._send_request(h({},n,{callback:e=>{200!==e.statusCode&&(e.statusCode<400||e.statusCode>=500)&&(null!=t?t:0)<10?this._enqueue(h({retriesPerformedSoFar:t},n)):null==n.callback||n.callback(e)}}))}_enqueue(e){var t=e.retriesPerformedSoFar||0
e.retriesPerformedSoFar=t+1
var n=function(e){var t=3e3*Math.pow(2,e),n=t/2,r=Math.min(18e5,t),i=(Math.random()-.5)*(r-n)
return Math.ceil(r+i)}(t),r=Date.now()+n
this._queue.push({retryAt:r,requestOptions:e})
var i="Enqueued failed request for retry in "+n
navigator.onLine||(i+=" (Browser is offline)"),Fe.warn(i),this._isPolling||(this._isPolling=!0,this._poll())}_poll(){if(this._poller&&clearTimeout(this._poller),0===this._queue.length)return this._isPolling=!1,void(this._poller=void 0)
this._poller=setTimeout(()=>{this._areWeOnline&&this._queue.length>0&&this._flush(),this._poll()},this._pollIntervalMs)}_flush(){var e=Date.now(),t=[],n=this._queue.filter(n=>n.retryAt<e||(t.push(n),!1))
if(this._queue=t,n.length>0)for(var{requestOptions:r}of n)this.retriableRequest(r)}unload(){for(var{requestOptions:e}of(this._poller&&(clearTimeout(this._poller),this._poller=void 0),this._isPolling=!1,W(v)||(this._onlineListener&&(v.removeEventListener("online",this._onlineListener),this._onlineListener=void 0),this._offlineListener&&(v.removeEventListener("offline",this._offlineListener),this._offlineListener=void 0)),this._queue))try{this._instance._send_request(h({},e,{transport:"sendBeacon"}))}catch(e){Fe.error(e)}this._queue=[]}}class Ks{constructor(e){this._updateScrollData=()=>{var e,t,n,r
this._context||(this._context={})
var i=this.scrollElement(),s=this.scrollY(),o=i?Math.max(0,i.scrollHeight-i.clientHeight):0,a=s+((null==i?void 0:i.clientHeight)||0),l=(null==i?void 0:i.scrollHeight)||0
this._context.lastScrollY=Math.ceil(s),this._context.maxScrollY=Math.max(s,null!==(e=this._context.maxScrollY)&&void 0!==e?e:0),this._context.maxScrollHeight=Math.max(o,null!==(t=this._context.maxScrollHeight)&&void 0!==t?t:0),this._context.lastContentY=a,this._context.maxContentY=Math.max(a,null!==(n=this._context.maxContentY)&&void 0!==n?n:0),this._context.maxContentHeight=Math.max(l,null!==(r=this._context.maxContentHeight)&&void 0!==r?r:0)},this._instance=e}getContext(){return this._context}resetContext(){var e=this._context
return setTimeout(this._updateScrollData,0),e}startMeasuringScrollPosition(){Ye(v,"scroll",this._updateScrollData,{capture:!0}),Ye(v,"scrollend",this._updateScrollData,{capture:!0}),Ye(v,"resize",this._updateScrollData)}scrollElement(){if(!this._instance.config.scroll_root_selector)return null==v?void 0:v.document.documentElement
var e=B(this._instance.config.scroll_root_selector)?this._instance.config.scroll_root_selector:[this._instance.config.scroll_root_selector]
for(var t of e){var n=null==v?void 0:v.document.querySelector(t)
if(n)return n}}scrollY(){if(this._instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollTop||0}return v&&(v.scrollY||v.pageYOffset||v.document.documentElement.scrollTop)||0}scrollX(){if(this._instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollLeft||0}return v&&(v.scrollX||v.pageXOffset||v.document.documentElement.scrollLeft)||0}}var Js=e=>fi(null==e?void 0:e.config.mask_personal_data_properties,null==e?void 0:e.config.custom_personal_data_properties)
class Ys{constructor(e,t,n,r){this._onSessionIdCallback=e=>{var t=this._getStored()
if(!t||t.sessionId!==e){var n={sessionId:e,props:this._sessionSourceParamGenerator(this._instance)}
this._persistence.register({[wt]:n})}},this._instance=e,this._sessionIdManager=t,this._persistence=n,this._sessionSourceParamGenerator=r||Js,this._sessionIdManager.onSessionId(this._onSessionIdCallback)}_getStored(){return this._persistence.props[wt]}getSetOnceProps(){var e,t=null==(e=this._getStored())?void 0:e.props
return t?"r"in t?pi(t):{$referring_domain:t.referringDomain,$pathname:t.initialPathName,utm_source:t.utm_source,utm_campaign:t.utm_campaign,utm_medium:t.utm_medium,utm_content:t.utm_content,utm_term:t.utm_term}:{}}getSessionProps(){var e={}
return Be(Ve(this.getSetOnceProps()),(t,n)=>{"$current_url"===n&&(n="url"),e["$session_entry_"+j(n)]=t}),e}}var Xs=Ne("[SessionId]")
class Zs{on(e,t){return this._eventEmitter.on(e,t)}constructor(e,t,n){var r
if(this._sessionIdChangedHandlers=[],this._beforeUnloadListener=void 0,this._eventEmitter=new Os,this._sessionHasBeenIdleTooLong=(e,t)=>Math.abs(e-t)>this.sessionTimeoutMs,!e.persistence)throw new Error("SessionIdManager requires a PostHogPersistence instance")
if("always"===e.config.cookieless_mode)throw new Error('SessionIdManager cannot be used with cookieless_mode="always"')
this._config=e.config,this._persistence=e.persistence,this._windowId=void 0,this._sessionId=void 0,this._sessionStartTimestamp=null,this._sessionActivityTimestamp=null,this._sessionIdGenerator=t||Pn,this._windowIdGenerator=n||Pn
var i=this._config.persistence_name||this._config.token,s=this._config.session_idle_timeout_seconds||1800
if(this._sessionTimeoutMs=1e3*se(s,60,36e3,Xs.createLogger("session_idle_timeout_seconds"),1800),e.register({$configured_session_timeout_ms:this._sessionTimeoutMs}),this._resetIdleTimer(),this._window_id_storage_key="ph_"+i+"_window_id",this._primary_window_exists_storage_key="ph_"+i+"_primary_window_exists",this._canUseSessionStorage()){var o=Dn._parse(this._window_id_storage_key),a=Dn._parse(this._primary_window_exists_storage_key)
o&&!a?this._windowId=o:Dn._remove(this._window_id_storage_key),Dn._set(this._primary_window_exists_storage_key,!0)}if(null!=(r=this._config.bootstrap)&&r.sessionID)try{var l=(()=>{var e=this._config.bootstrap.sessionID.replace(/-/g,"")
if(32!==e.length)throw new Error("Not a valid UUID")
if("7"!==e[12])throw new Error("Not a UUIDv7")
return parseInt(e.substring(0,12),16)})()
this._setSessionId(this._config.bootstrap.sessionID,(new Date).getTime(),l)}catch(e){Xs.error("Invalid sessionID in bootstrap",e)}this._listenToReloadWindow()}get sessionTimeoutMs(){return this._sessionTimeoutMs}onSessionId(e){return W(this._sessionIdChangedHandlers)&&(this._sessionIdChangedHandlers=[]),this._sessionIdChangedHandlers.push(e),this._sessionId&&e(this._sessionId,this._windowId),()=>{this._sessionIdChangedHandlers=this._sessionIdChangedHandlers.filter(t=>t!==e)}}_canUseSessionStorage(){return"memory"!==this._config.persistence&&!this._persistence._disabled&&Dn._is_supported()}_setWindowId(e){e!==this._windowId&&(this._windowId=e,this._canUseSessionStorage()&&Dn._set(this._window_id_storage_key,e))}_getWindowId(){return this._windowId?this._windowId:this._canUseSessionStorage()?Dn._parse(this._window_id_storage_key):null}_setSessionId(e,t,n){e===this._sessionId&&t===this._sessionActivityTimestamp&&n===this._sessionStartTimestamp||(this._sessionStartTimestamp=n,this._sessionActivityTimestamp=t,this._sessionId=e,this._persistence.register({[ut]:[t,e,n]}))}_getSessionId(){if(this._sessionId&&this._sessionActivityTimestamp&&this._sessionStartTimestamp)return[this._sessionActivityTimestamp,this._sessionId,this._sessionStartTimestamp]
var e=this._persistence.props[ut]
return B(e)&&2===e.length&&e.push(e[0]),e||[0,null,0]}resetSessionId(){this._setSessionId(null,null,null)}destroy(){clearTimeout(this._enforceIdleTimeout),this._enforceIdleTimeout=void 0,this._beforeUnloadListener&&v&&(v.removeEventListener("beforeunload",this._beforeUnloadListener,{capture:!1}),this._beforeUnloadListener=void 0),this._sessionIdChangedHandlers=[]}_listenToReloadWindow(){this._beforeUnloadListener=()=>{this._canUseSessionStorage()&&Dn._remove(this._primary_window_exists_storage_key)},Ye(v,"beforeunload",this._beforeUnloadListener,{capture:!1})}checkAndGetSessionAndWindowId(e,t){if(void 0===e&&(e=!1),void 0===t&&(t=null),"always"===this._config.cookieless_mode)throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"')
var n=t||(new Date).getTime(),[r,i,s]=this._getSessionId(),o=this._getWindowId(),a=J(s)&&s>0&&Math.abs(n-s)>864e5,l=!1,c=!i,u=!c&&!e&&this._sessionHasBeenIdleTooLong(n,r)
c||u||a?(i=this._sessionIdGenerator(),o=this._windowIdGenerator(),Xs.info("new session ID generated",{sessionId:i,windowId:o,changeReason:{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}}),s=n,l=!0):o||(o=this._windowIdGenerator(),l=!0)
var d=0===r||!e||a?n:r,f=0===s?(new Date).getTime():s
return this._setWindowId(o),this._setSessionId(i,d,f),e||this._resetIdleTimer(),l&&this._sessionIdChangedHandlers.forEach(e=>e(i,o,l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0)),{sessionId:i,windowId:o,sessionStartTimestamp:f,changeReason:l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0,lastActivityTimestamp:r}}_resetIdleTimer(){clearTimeout(this._enforceIdleTimeout),this._enforceIdleTimeout=setTimeout(()=>{var[e]=this._getSessionId()
if(this._sessionHasBeenIdleTooLong((new Date).getTime(),e)){var t=this._sessionId
this.resetSessionId(),this._eventEmitter.emit("forcedIdleReset",{idleSessionId:t})}},1.1*this.sessionTimeoutMs)}}var eo=["$set_once","$set"],to=Ne("[SiteApps]")
class no{constructor(e){this._instance=e,this._bufferedInvocations=[],this.apps={}}get isEnabled(){return!!this._instance.config.opt_in_site_apps}_eventCollector(e,t){if(t){var n=this.globalsForEvent(t)
this._bufferedInvocations.push(n),this._bufferedInvocations.length>1e3&&(this._bufferedInvocations=this._bufferedInvocations.slice(10))}}get siteAppLoaders(){var e
return null==(e=L._POSTHOG_REMOTE_CONFIG)||null==(e=e[this._instance.config.token])?void 0:e.siteApps}init(){if(this.isEnabled){var e=this._instance._addCaptureHook(this._eventCollector.bind(this))
this._stopBuffering=()=>{e(),this._bufferedInvocations=[],this._stopBuffering=void 0}}}globalsForEvent(e){var t,n,r,i,s,o,a
if(!e)throw new Error("Event payload is required")
var l={},c=this._instance.get_property("$groups")||[],u=this._instance.get_property("$stored_group_properties")||{}
for(var[d,f]of Object.entries(u))l[d]={id:c[d],type:d,properties:f}
var{$set_once:p,$set:v}=e
return{event:h({},g(e,eo),{properties:h({},e.properties,v?{$set:h({},null!==(t=null==(n=e.properties)?void 0:n.$set)&&void 0!==t?t:{},v)}:{},p?{$set_once:h({},null!==(r=null==(i=e.properties)?void 0:i.$set_once)&&void 0!==r?r:{},p)}:{}),elements_chain:null!==(s=null==(o=e.properties)?void 0:o.$elements_chain)&&void 0!==s?s:"",distinct_id:null==(a=e.properties)?void 0:a.distinct_id}),person:{properties:this._instance.get_property("$stored_person_properties")},groups:l}}setupSiteApp(e){var t=this.apps[e.id],n=()=>{var n
!t.errored&&this._bufferedInvocations.length&&(to.info("Processing "+this._bufferedInvocations.length+" events for site app with id "+e.id),this._bufferedInvocations.forEach(e=>null==t.processEvent?void 0:t.processEvent(e)),t.processedBuffer=!0),Object.values(this.apps).every(e=>e.processedBuffer||e.errored)&&(null==(n=this._stopBuffering)||n.call(this))},r=!1,i=i=>{t.errored=!i,t.loaded=!0,to.info("Site app with id "+e.id+" "+(i?"loaded":"errored")),r&&n()}
try{var{processEvent:s}=e.init({posthog:this._instance,callback:e=>{i(e)}})
s&&(t.processEvent=s),r=!0}catch(t){to.error("Error while initializing PostHog app with config id "+e.id,t),i(!1)}if(r&&t.loaded)try{n()}catch(n){to.error("Error while processing buffered events PostHog app with config id "+e.id,n),t.errored=!0}}_setupSiteApps(){var e=this.siteAppLoaders||[]
for(var t of e)this.apps[t.id]={id:t.id,loaded:!1,errored:!1,processedBuffer:!1}
for(var n of e)this.setupSiteApp(n)}_onCapturedEvent(e){if(0!==Object.keys(this.apps).length){var t=this.globalsForEvent(e)
for(var n of Object.values(this.apps))try{null==n.processEvent||n.processEvent(t)}catch(t){to.error("Error while processing event "+e.event+" for site app "+n.id,t)}}}onRemoteConfig(e){var t,n,r,i=this
if(null!=(t=this.siteAppLoaders)&&t.length)return this.isEnabled?(this._setupSiteApps(),void this._instance.on("eventCaptured",e=>this._onCapturedEvent(e))):void to.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
if(null==(n=this._stopBuffering)||n.call(this),null!=(r=e.siteApps)&&r.length)if(this.isEnabled){var s=function(e){var t
L["__$$ph_site_app_"+e]=i._instance,null==(t=L.__PosthogExtensions__)||null==t.loadSiteApp||t.loadSiteApp(i._instance,a,t=>{if(t)return to.error("Error while initializing PostHog app with config id "+e,t)})}
for(var{id:o,url:a}of e.siteApps)s(o)}else to.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')}}var ro=function(e,t){if(!e)return!1
var n=e.userAgent
if(n&&I(n,t))return!0
try{var r=null==e?void 0:e.userAgentData
if(null!=r&&r.brands&&r.brands.some(e=>I(null==e?void 0:e.brand,t)))return!0}catch(e){}return!!e.webdriver},io=function(e){return e.US="us",e.EU="eu",e.CUSTOM="custom",e}({}),so="i.posthog.com"
class oo{constructor(e){this._regionCache={},this.instance=e}get apiHost(){var e=this.instance.config.api_host.trim().replace(/\/$/,"")
return"https://app.posthog.com"===e?"https://us.i.posthog.com":e}get flagsApiHost(){var e=this.instance.config.flags_api_host
return e?e.trim().replace(/\/$/,""):this.apiHost}get uiHost(){var e,t=null==(e=this.instance.config.ui_host)?void 0:e.replace(/\/$/,"")
return t||(t=this.apiHost.replace("."+so,".posthog.com")),"https://app.posthog.com"===t?"https://us.posthog.com":t}get region(){return this._regionCache[this.apiHost]||(/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=io.US:/https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=io.EU:this._regionCache[this.apiHost]=io.CUSTOM),this._regionCache[this.apiHost]}endpointFor(e,t){if(void 0===t&&(t=""),t&&(t="/"===t[0]?t:"/"+t),"ui"===e)return this.uiHost+t
if("flags"===e)return this.flagsApiHost+t
if(this.region===io.CUSTOM)return this.apiHost+t
var n=so+t
switch(e){case"assets":return"https://"+this.region+"-assets."+n
case"api":return"https://"+this.region+"."+n}}}var ao={icontains:(e,t)=>!!v&&t.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:(e,t)=>!!v&&-1===t.href.toLowerCase().indexOf(e.toLowerCase()),regex:(e,t)=>!!v&&cs(t.href,e),not_regex:(e,t)=>!!v&&!cs(t.href,e),exact:(e,t)=>t.href===e,is_not:(e,t)=>t.href!==e}
class lo{constructor(e){var t=this
this.getWebExperimentsAndEvaluateDisplayLogic=function(e){void 0===e&&(e=!1),t.getWebExperiments(e=>{lo._logInfo("retrieved web experiments from the server"),t._flagToExperiments=new Map,e.forEach(e=>{if(e.feature_flag_key){var n
t._flagToExperiments&&(lo._logInfo("setting flag key ",e.feature_flag_key," to web experiment ",e),null==(n=t._flagToExperiments)||n.set(e.feature_flag_key,e))
var r=t._instance.getFeatureFlag(e.feature_flag_key)
z(r)&&e.variants[r]&&t._applyTransforms(e.name,r,e.variants[r].transforms)}else if(e.variants)for(var i in e.variants){var s=e.variants[i]
lo._matchesTestVariant(s)&&t._applyTransforms(e.name,i,s.transforms)}})},e)},this._instance=e,this._instance.onFeatureFlags(e=>{this.onFeatureFlags(e)})}onFeatureFlags(e){if(this._is_bot())lo._logInfo("Refusing to render web experiment since the viewer is a likely bot")
else if(!this._instance.config.disable_web_experiments){if(K(this._flagToExperiments))return this._flagToExperiments=new Map,this.loadIfEnabled(),void this.previewWebExperiment()
lo._logInfo("applying feature flags",e),e.forEach(e=>{var t
if(this._flagToExperiments&&null!=(t=this._flagToExperiments)&&t.has(e)){var n,r=this._instance.getFeatureFlag(e),i=null==(n=this._flagToExperiments)?void 0:n.get(e)
r&&null!=i&&i.variants[r]&&this._applyTransforms(i.name,r,i.variants[r].transforms)}})}}previewWebExperiment(){var e=lo.getWindowLocation()
if(null!=e&&e.search){var t=pn(null==e?void 0:e.search,"__experiment_id"),n=pn(null==e?void 0:e.search,"__experiment_variant")
t&&n&&(lo._logInfo("previewing web experiments "+t+" && "+n),this.getWebExperiments(e=>{this._showPreviewWebExperiment(parseInt(t),n,e)},!1,!0))}}loadIfEnabled(){this._instance.config.disable_web_experiments||this.getWebExperimentsAndEvaluateDisplayLogic()}getWebExperiments(e,t,n){if(this._instance.config.disable_web_experiments&&!n)return e([])
var r=this._instance.get_property("$web_experiments")
if(r&&!t)return e(r)
this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/web_experiments/?token="+this._instance.config.token),method:"GET",callback:t=>{if(200!==t.statusCode||!t.json)return e([])
var n=t.json.experiments||[]
return e(n)}})}_showPreviewWebExperiment(e,t,n){var r=n.filter(t=>t.id===e)
r&&r.length>0&&(lo._logInfo("Previewing web experiment ["+r[0].name+"] with variant ["+t+"]"),this._applyTransforms(r[0].name,t,r[0].variants[t].transforms))}static _matchesTestVariant(e){return!K(e.conditions)&&lo._matchUrlConditions(e)&&lo._matchUTMConditions(e)}static _matchUrlConditions(e){var t
if(K(e.conditions)||K(null==(t=e.conditions)?void 0:t.url))return!0
var n,r,i,s=lo.getWindowLocation()
return!!s&&(null==(n=e.conditions)||!n.url||ao[null!==(r=null==(i=e.conditions)?void 0:i.urlMatchType)&&void 0!==r?r:"icontains"](e.conditions.url,s))}static getWindowLocation(){return null==v?void 0:v.location}static _matchUTMConditions(e){var t
if(K(e.conditions)||K(null==(t=e.conditions)?void 0:t.utm))return!0
var n=ai()
if(n.utm_source){var r,i,s,o,a,l,c,u,d=null==(r=e.conditions)||null==(r=r.utm)||!r.utm_campaign||(null==(i=e.conditions)||null==(i=i.utm)?void 0:i.utm_campaign)==n.utm_campaign,f=null==(s=e.conditions)||null==(s=s.utm)||!s.utm_source||(null==(o=e.conditions)||null==(o=o.utm)?void 0:o.utm_source)==n.utm_source,p=null==(a=e.conditions)||null==(a=a.utm)||!a.utm_medium||(null==(l=e.conditions)||null==(l=l.utm)?void 0:l.utm_medium)==n.utm_medium,h=null==(c=e.conditions)||null==(c=c.utm)||!c.utm_term||(null==(u=e.conditions)||null==(u=u.utm)?void 0:u.utm_term)==n.utm_term
return d&&p&&h&&f}return!1}static _logInfo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
Fe.info("[WebExperiments] "+e,n)}_applyTransforms(e,t,n){this._is_bot()?lo._logInfo("Refusing to render web experiment since the viewer is a likely bot"):"control"!==t?n.forEach(n=>{if(n.selector){var r
lo._logInfo("applying transform of variant "+t+" for experiment "+e+" ",n)
var i=null==(r=document)?void 0:r.querySelectorAll(n.selector)
null==i||i.forEach(e=>{var t=e
n.html&&(t.innerHTML=n.html),n.css&&t.setAttribute("style",n.css)})}}):lo._logInfo("Control variants leave the page unmodified.")}_is_bot(){return w&&this._instance?ro(w,this._instance.config.custom_blocked_useragents):void 0}}var co=Ne("[PostHog ExternalIntegrations]"),uo={intercom:"intercom-integration",crispChat:"crisp-chat-integration"}
class fo{constructor(e){this._instance=e}_loadScript(e,t){var n
null==(n=L.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,e,e=>{if(e)return co.error("failed to load script",e)
t()})}startIfEnabledOrStop(){var e=this,t=function(t){var n,i,s
!r||null!=(n=L.__PosthogExtensions__)&&null!=(n=n.integrations)&&n[t]||e._loadScript(uo[t],()=>{var n
null==(n=L.__PosthogExtensions__)||null==(n=n.integrations)||null==(n=n[t])||n.start(e._instance)}),!r&&null!=(i=L.__PosthogExtensions__)&&null!=(i=i.integrations)&&i[t]&&(null==(s=L.__PosthogExtensions__)||null==(s=s.integrations)||null==(s=s[t])||s.stop())}
for(var[n,r]of Object.entries(null!==(i=this._instance.config.integrations)&&void 0!==i?i:{})){var i
t(n)}}}var po="[SessionRecording]",ho=Ne(po)
class go{get started(){var e
return!(null==(e=this._lazyLoadedSessionRecording)||!e.isStarted)}get status(){return this._lazyLoadedSessionRecording?this._lazyLoadedSessionRecording.status:this._receivedFlags&&!this._isRecordingEnabled?"disabled":"lazy_loading"}constructor(e){if(this._forceAllowLocalhostNetworkCapture=!1,this._receivedFlags=!1,this._persistFlagsOnSessionListener=void 0,this._instance=e,!this._instance.sessionManager)throw ho.error("started without valid sessionManager"),new Error(po+" started without valid sessionManager. This is a bug.")
if("always"===this._instance.config.cookieless_mode)throw new Error(po+' cannot be used with cookieless_mode="always"')}get _isRecordingEnabled(){var e,t=!(null==(e=this._instance.get_property(ct))||!e.enabled),n=!this._instance.config.disable_session_recording,r=this._instance.config.disable_session_recording||this._instance.consent.isOptedOut()
return v&&t&&n&&!r}startIfEnabledOrStop(e){var t
if(!this._isRecordingEnabled||null==(t=this._lazyLoadedSessionRecording)||!t.isStarted){var n=!W(Object.assign)&&!W(Array.from)
this._isRecordingEnabled&&n?(this._lazyLoadAndStart(e),ho.info("starting")):this.stopRecording()}}_lazyLoadAndStart(e){var t,n,r
this._isRecordingEnabled&&(null!=L&&null!=(t=L.__PosthogExtensions__)&&null!=(t=t.rrweb)&&t.record&&null!=(n=L.__PosthogExtensions__)&&n.initSessionRecording?this._onScriptLoaded(e):null==(r=L.__PosthogExtensions__)||null==r.loadExternalDependency||r.loadExternalDependency(this._instance,this._scriptName,t=>{if(t)return ho.error("could not load recorder",t)
this._onScriptLoaded(e)}))}stopRecording(){var e,t
null==(e=this._persistFlagsOnSessionListener)||e.call(this),this._persistFlagsOnSessionListener=void 0,null==(t=this._lazyLoadedSessionRecording)||t.stop()}_resetSampling(){var e
null==(e=this._instance.persistence)||e.unregister(dt)}_persistRemoteConfig(e){if(this._instance.persistence){var t,n,r=this._instance.persistence,i=()=>{var t=!1===e.sessionRecording?void 0:e.sessionRecording,n=null==t?void 0:t.sampleRate,i=K(n)?null:parseFloat(n)
K(i)&&this._resetSampling()
var s=null==t?void 0:t.minimumDurationMilliseconds
r.register({[ct]:h({enabled:!!t},t,{networkPayloadCapture:h({capturePerformance:e.capturePerformance},null==t?void 0:t.networkPayloadCapture),canvasRecording:{enabled:null==t?void 0:t.recordCanvas,fps:null==t?void 0:t.canvasFps,quality:null==t?void 0:t.canvasQuality},sampleRate:i,minimumDurationMilliseconds:W(s)?null:s,endpoint:null==t?void 0:t.endpoint,triggerMatchType:null==t?void 0:t.triggerMatchType,masking:null==t?void 0:t.masking,urlTriggers:null==t?void 0:t.urlTriggers})})}
i(),null==(t=this._persistFlagsOnSessionListener)||t.call(this),this._persistFlagsOnSessionListener=null==(n=this._instance.sessionManager)?void 0:n.onSessionId(i)}}onRemoteConfig(e){"sessionRecording"in e?!1!==e.sessionRecording?(this._persistRemoteConfig(e),this._receivedFlags=!0,this.startIfEnabledOrStop()):this._receivedFlags=!0:ho.info("skipping remote config with no sessionRecording",e)}log(e,t){var n
void 0===t&&(t="log"),null!=(n=this._lazyLoadedSessionRecording)&&n.log?this._lazyLoadedSessionRecording.log(e,t):ho.warn("log called before recorder was ready")}get _scriptName(){var e,t,n=null==(e=this._instance)||null==(e=e.persistence)?void 0:e.get_property(ct)
return(null==n||null==(t=n.scriptConfig)?void 0:t.script)||"lazy-recorder"}_onScriptLoaded(e){var t,n
if(null==(t=L.__PosthogExtensions__)||!t.initSessionRecording)throw Error("Called on script loaded before session recording is available")
this._lazyLoadedSessionRecording||(this._lazyLoadedSessionRecording=null==(n=L.__PosthogExtensions__)?void 0:n.initSessionRecording(this._instance),this._lazyLoadedSessionRecording._forceAllowLocalhostNetworkCapture=this._forceAllowLocalhostNetworkCapture),this._lazyLoadedSessionRecording.start(e)}onRRwebEmit(e){var t
null==(t=this._lazyLoadedSessionRecording)||null==t.onRRwebEmit||t.onRRwebEmit(e)}overrideLinkedFlag(){var e,t
this._lazyLoadedSessionRecording||null==(t=this._instance.persistence)||t.register({$replay_override_linked_flag:!0}),null==(e=this._lazyLoadedSessionRecording)||e.overrideLinkedFlag()}overrideSampling(){var e,t
this._lazyLoadedSessionRecording||null==(t=this._instance.persistence)||t.register({$replay_override_sampling:!0}),null==(e=this._lazyLoadedSessionRecording)||e.overrideSampling()}overrideTrigger(e){var t,n
this._lazyLoadedSessionRecording||null==(n=this._instance.persistence)||n.register({["url"===e?"$replay_override_url_trigger":"$replay_override_event_trigger"]:!0}),null==(t=this._lazyLoadedSessionRecording)||t.overrideTrigger(e)}get sdkDebugProperties(){var e
return(null==(e=this._lazyLoadedSessionRecording)?void 0:e.sdkDebugProperties)||{$recording_status:this.status}}tryAddCustomEvent(e,t){var n
return!(null==(n=this._lazyLoadedSessionRecording)||!n.tryAddCustomEvent(e,t))}}var vo={},_o=()=>{},mo="posthog",bo=!rs&&-1===(null==P?void 0:P.indexOf("MSIE"))&&-1===(null==P?void 0:P.indexOf("Mozilla")),yo=e=>{var t
return h({api_host:"https://us.i.posthog.com",flags_api_host:null,ui_host:null,token:"",autocapture:!0,cross_subdomain_cookie:Ke(null==k?void 0:k.location),persistence:"localStorage+cookie",persistence_name:"",loaded:_o,save_campaign_params:!0,custom_campaign_params:[],custom_blocked_useragents:[],save_referrer:!0,capture_pageleave:"if_capture_pageview",defaults:null!=e?e:"unset",__preview_deferred_init_extensions:!1,debug:x&&z(null==x?void 0:x.search)&&-1!==x.search.indexOf("__posthog_debug=true")||!1,cookie_expiration:365,upgrade:!1,disable_session_recording:!1,disable_persistence:!1,disable_web_experiments:!0,disable_surveys:!1,disable_surveys_automatic_display:!1,disable_external_dependency_loading:!1,enable_recording_console_log:void 0,secure_cookie:"https:"===(null==v||null==(t=v.location)?void 0:t.protocol),ip:!1,opt_out_capturing_by_default:!1,opt_out_persistence_by_default:!1,opt_out_useragent_filter:!1,opt_out_capturing_persistence_type:"localStorage",consent_persistence_name:null,opt_out_capturing_cookie_prefix:null,opt_in_site_apps:!1,property_denylist:[],respect_dnt:!1,sanitize_properties:null,request_headers:{},request_batching:!0,properties_string_max_length:65535,mask_all_element_attributes:!1,mask_all_text:!1,mask_personal_data_properties:!1,custom_personal_data_properties:[],advanced_disable_flags:!1,advanced_disable_decide:!1,advanced_disable_feature_flags:!1,advanced_disable_feature_flags_on_first_load:!1,advanced_only_evaluate_survey_feature_flags:!1,advanced_enable_surveys:!1,advanced_disable_toolbar_metrics:!1,feature_flag_request_timeout_ms:3e3,surveys_request_timeout_ms:1e4,on_request_error:e=>{var t="Bad HTTP status: "+e.statusCode+" "+e.text
Fe.error(t)},get_device_id:e=>e,capture_performance:void 0,name:"posthog",bootstrap:{},disable_compression:!1,session_idle_timeout_seconds:1800,person_profiles:"identified_only",before_send:void 0,request_queue_config:{flush_interval_ms:Ws},error_tracking:{},_onCapture:_o,__preview_eager_load_replay:!1},(e=>({rageclick:!(e&&e>="2025-11-30")||{content_ignorelist:!0},capture_pageview:!(e&&e>="2025-05-24")||"history_change",session_recording:e&&e>="2025-11-30"?{strictMinimumDuration:!0}:{}}))(e))},wo=e=>{var t={}
W(e.process_person)||(t.person_profiles=e.process_person),W(e.xhr_headers)||(t.request_headers=e.xhr_headers),W(e.cookie_name)||(t.persistence_name=e.cookie_name),W(e.disable_cookie)||(t.disable_persistence=e.disable_cookie),W(e.store_google)||(t.save_campaign_params=e.store_google),W(e.verbose)||(t.debug=e.verbose)
var n=He({},t,e)
return B(e.property_blacklist)&&(W(e.property_denylist)?n.property_denylist=e.property_blacklist:B(e.property_denylist)?n.property_denylist=[...e.property_blacklist,...e.property_denylist]:Fe.error("Invalid value for property_denylist config: "+e.property_denylist)),n}
class ko{constructor(){this.__forceAllowLocalhost=!1}get _forceAllowLocalhost(){return this.__forceAllowLocalhost}set _forceAllowLocalhost(e){Fe.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),this.__forceAllowLocalhost=e}}class xo{get decideEndpointWasHit(){var e,t
return null!==(e=null==(t=this.featureFlags)?void 0:t.hasLoadedFlags)&&void 0!==e&&e}get flagsEndpointWasHit(){var e,t
return null!==(e=null==(t=this.featureFlags)?void 0:t.hasLoadedFlags)&&void 0!==e&&e}constructor(){this.webPerformance=new ko,this._personProcessingSetOncePropertiesSent=!1,this.version=T.LIB_VERSION,this._internalEventEmitter=new Os,this._calculate_event_properties=this.calculateEventProperties.bind(this),this.config=yo(),this.SentryIntegration=Zn,this.sentryIntegration=e=>function(e,t){var n=Xn(e,t)
return{name:Yn,processEvent:e=>n(e)}}(this,e),this.__request_queue=[],this.__loaded=!1,this.analyticsDefaultEndpoint="/e/",this._initialPageviewCaptured=!1,this._visibilityStateListener=null,this._initialPersonProfilesConfig=null,this._cachedPersonProperties=null,this.featureFlags=new Ss(this),this.toolbar=new ir(this),this.scrollManager=new Ks(this),this.pageViewManager=new xi(this),this.surveys=new qs(this),this.experiments=new lo(this),this.exceptions=new hs(this),this.rateLimiter=new Hs(this),this.requestRouter=new oo(this),this.consent=new Bn(this),this.externalIntegrations=new fo(this),this.people={set:(e,t,n)=>{var r=z(e)?{[e]:t}:e
this.setPersonProperties(r),null==n||n({})},set_once:(e,t,n)=>{var r=z(e)?{[e]:t}:e
this.setPersonProperties(void 0,r),null==n||n({})}},this.on("eventCaptured",e=>Fe.info('send "'+(null==e?void 0:e.event)+'"',e))}init(e,t,n){if(n&&n!==mo){var r,i=null!==(r=vo[n])&&void 0!==r?r:new xo
return i._init(e,t,n),vo[n]=i,vo[mo][n]=i,i}return this._init(e,t,n)}_init(e,t,n){var r
if(void 0===t&&(t={}),W(e)||V(e))return Fe.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),this
if(this.__loaded)return console.warn("[PostHog.js]","You have already initialized PostHog! Re-initializing is a no-op"),this
this.__loaded=!0,this.config={},t.debug=this._checkLocalStorageForDebug(t.debug),this._originalUserConfig=t,this._triggered_notifs=[],t.person_profiles&&(this._initialPersonProfilesConfig=t.person_profiles),this.set_config(He({},yo(t.defaults),wo(t),{name:n,token:e})),this.config.on_xhr_error&&Fe.error("on_xhr_error is deprecated. Use on_request_error instead"),this.compression=t.disable_compression?void 0:dn.GZipJS
var i=this._is_persistence_disabled()
this.persistence=new Cs(this.config,i),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new Cs(h({},this.config,{persistence:"sessionStorage"}),i)
var s=h({},this.persistence.props),o=h({},this.sessionPersistence.props)
this.register({$initialization_time:(new Date).toISOString()}),this._requestQueue=new zs(e=>this._send_retriable_request(e),this.config.request_queue_config),this._retryQueue=new Qs(this),this.__request_queue=[]
var a="always"===this.config.cookieless_mode||"on_reject"===this.config.cookieless_mode&&this.consent.isExplicitlyOptedOut()
if(a||(this.sessionManager=new Zs(this),this.sessionPropsManager=new Ys(this,this.sessionManager,this.persistence)),this.config.__preview_deferred_init_extensions?(Fe.info("Deferring extension initialization to improve startup performance"),setTimeout(()=>{this._initExtensions(a)},0)):(Fe.info("Initializing extensions synchronously"),this._initExtensions(a)),T.DEBUG=T.DEBUG||this.config.debug,T.DEBUG&&Fe.info("Starting in debug mode",{this:this,config:t,thisC:h({},this.config),p:s,s:o}),void 0!==(null==(r=t.bootstrap)?void 0:r.distinctID)){var l,c,u=this.config.get_device_id(Pn()),d=null!=(l=t.bootstrap)&&l.isIdentifiedID?u:t.bootstrap.distinctID
this.persistence.set_property(yt,null!=(c=t.bootstrap)&&c.isIdentifiedID?"identified":"anonymous"),this.register({distinct_id:t.bootstrap.distinctID,$device_id:d})}if(this._hasBootstrappedFeatureFlags()){var f,p,g=Object.keys((null==(f=t.bootstrap)?void 0:f.featureFlags)||{}).filter(e=>{var n
return!(null==(n=t.bootstrap)||null==(n=n.featureFlags)||!n[e])}).reduce((e,n)=>{var r
return e[n]=(null==(r=t.bootstrap)||null==(r=r.featureFlags)?void 0:r[n])||!1,e},{}),_=Object.keys((null==(p=t.bootstrap)?void 0:p.featureFlagPayloads)||{}).filter(e=>g[e]).reduce((e,n)=>{var r,i
return null!=(r=t.bootstrap)&&null!=(r=r.featureFlagPayloads)&&r[n]&&(e[n]=null==(i=t.bootstrap)||null==(i=i.featureFlagPayloads)?void 0:i[n]),e},{})
this.featureFlags.receivedFeatureFlags({featureFlags:g,featureFlagPayloads:_})}if(a)this.register_once({distinct_id:Lt,$device_id:null},"")
else if(!this.get_distinct_id()){var m=this.config.get_device_id(Pn())
this.register_once({distinct_id:m,$device_id:m},""),this.persistence.set_property(yt,"anonymous")}return Ye(v,"onpagehide"in self?"pagehide":"unload",this._handle_unload.bind(this),{passive:!1}),this.toolbar.maybeLoadToolbar(),t.segment?function(e,t){var n=e.config.segment
if(!n)return t()
!function(e,t){var n=e.config.segment
if(!n)return t()
var r=n=>{var r=()=>n.anonymousId()||Pn()
e.config.get_device_id=r,n.id()&&(e.register({distinct_id:n.id(),$device_id:r()}),e.persistence.set_property(yt,"identified")),t()},i=n.user()
"then"in i&&H(i.then)?i.then(e=>r(e)):r(i)}(e,()=>{n.register((e=>{Promise&&Promise.resolve||Jn.warn("This browser does not have Promise support, and can not use the segment integration")
var t=(t,n)=>{if(!n)return t
t.event.userId||t.event.anonymousId===e.get_distinct_id()||(Jn.info("No userId set, resetting PostHog"),e.reset()),t.event.userId&&t.event.userId!==e.get_distinct_id()&&(Jn.info("UserId set, identifying with PostHog"),e.identify(t.event.userId))
var r=e.calculateEventProperties(n,t.event.properties)
return t.event.properties=Object.assign({},r,t.event.properties),t}
return{name:"PostHog JS",type:"enrichment",version:"1.0.0",isLoaded:()=>!0,load:()=>Promise.resolve(),track:e=>t(e,e.event.event),page:e=>t(e,"$pageview"),identify:e=>t(e,"$identify"),screen:e=>t(e,"$screen")}})(e)).then(()=>{t()})})}(this,()=>this._loaded()):this._loaded(),H(this.config._onCapture)&&this.config._onCapture!==_o&&(Fe.warn("onCapture is deprecated. Please use `before_send` instead"),this.on("eventCaptured",e=>this.config._onCapture(e.event,e))),this.config.ip&&Fe.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'),this}_initExtensions(e){var t=performance.now()
this.historyAutocapture=new Kn(this),this.historyAutocapture.startIfEnabled()
var n=[]
n.push(()=>{new or(this).startIfEnabledOrStop()}),n.push(()=>{var e
this.siteApps=new no(this),null==(e=this.siteApps)||e.init()}),e||n.push(()=>{this.sessionRecording=new go(this),this.sessionRecording.startIfEnabledOrStop()}),this.config.disable_scroll_properties||n.push(()=>{this.scrollManager.startMeasuringScrollPosition()}),n.push(()=>{this.autocapture=new yn(this),this.autocapture.startIfEnabled()}),n.push(()=>{this.surveys.loadIfEnabled()}),n.push(()=>{this.heatmaps=new ki(this),this.heatmaps.startIfEnabled()}),n.push(()=>{this.webVitalsAutocapture=new bi(this)}),n.push(()=>{this.exceptionObserver=new Vn(this),this.exceptionObserver.startIfEnabled()}),n.push(()=>{this.deadClicksAutocapture=new Wn(this,Gn),this.deadClicksAutocapture.startIfEnabled()}),n.push(()=>{if(this._pendingRemoteConfig){var e=this._pendingRemoteConfig
this._pendingRemoteConfig=void 0,this._onRemoteConfig(e)}}),this._processInitTaskQueue(n,t)}_processInitTaskQueue(e,t){for(;e.length>0;){if(this.config.__preview_deferred_init_extensions&&performance.now()-t>=30&&e.length>0)return void setTimeout(()=>{this._processInitTaskQueue(e,t)},0)
var n=e.shift()
if(n)try{n()}catch(e){Fe.error("Error initializing extension:",e)}}var r=Math.round(performance.now()-t)
this.register_for_session({$sdk_debug_extensions_init_method:this.config.__preview_deferred_init_extensions?"deferred":"synchronous",$sdk_debug_extensions_init_time_ms:r}),this.config.__preview_deferred_init_extensions&&Fe.info("PostHog extensions initialized ("+r+"ms)")}_onRemoteConfig(e){var t,n,r,i,s,o,a,l
if(!k||!k.body)return Fe.info("document not ready yet, trying again in 500 milliseconds..."),void setTimeout(()=>{this._onRemoteConfig(e)},500)
this.config.__preview_deferred_init_extensions&&(this._pendingRemoteConfig=e),this.compression=void 0,e.supportedCompression&&!this.config.disable_compression&&(this.compression=R(e.supportedCompression,dn.GZipJS)?dn.GZipJS:R(e.supportedCompression,dn.Base64)?dn.Base64:void 0),null!=(t=e.analytics)&&t.endpoint&&(this.analyticsDefaultEndpoint=e.analytics.endpoint),this.set_config({person_profiles:this._initialPersonProfilesConfig?this._initialPersonProfilesConfig:"identified_only"}),null==(n=this.siteApps)||n.onRemoteConfig(e),null==(r=this.sessionRecording)||r.onRemoteConfig(e),null==(i=this.autocapture)||i.onRemoteConfig(e),null==(s=this.heatmaps)||s.onRemoteConfig(e),this.surveys.onRemoteConfig(e),null==(o=this.webVitalsAutocapture)||o.onRemoteConfig(e),null==(a=this.exceptionObserver)||a.onRemoteConfig(e),this.exceptions.onRemoteConfig(e),null==(l=this.deadClicksAutocapture)||l.onRemoteConfig(e)}_loaded(){try{this.config.loaded(this)}catch(e){Fe.critical("`loaded` function failed",e)}this._start_queue_if_opted_in(),this.config.capture_pageview&&setTimeout(()=>{(this.consent.isOptedIn()||"always"===this.config.cookieless_mode)&&this._captureInitialPageview()},1),new Gs(this).load(),this.featureFlags.flags()}_start_queue_if_opted_in(){var e
this.is_capturing()&&this.config.request_batching&&(null==(e=this._requestQueue)||e.enable())}_dom_loaded(){this.is_capturing()&&qe(this.__request_queue,e=>this._send_retriable_request(e)),this.__request_queue=[],this._start_queue_if_opted_in()}_handle_unload(){var e,t
this.config.request_batching?(this._shouldCapturePageleave()&&this.capture("$pageleave"),null==(e=this._requestQueue)||e.unload(),null==(t=this._retryQueue)||t.unload()):this._shouldCapturePageleave()&&this.capture("$pageleave",null,{transport:"sendBeacon"})}_send_request(e){this.__loaded&&(bo?this.__request_queue.push(e):this.rateLimiter.isServerRateLimited(e.batchKey)||(e.transport=e.transport||this.config.api_transport,e.url=ss(e.url,{ip:this.config.ip?1:0}),e.headers=h({},this.config.request_headers),e.compression="best-available"===e.compression?this.compression:e.compression,e.disableXHRCredentials=this.config.__preview_disable_xhr_credentials,this.config.__preview_disable_beacon&&(e.disableTransport=["sendBeacon"]),e.fetchOptions=e.fetchOptions||this.config.fetch_options,(e=>{var t,n,r,i=h({},e)
i.timeout=i.timeout||6e4,i.url=ss(i.url,{_:(new Date).getTime().toString(),ver:T.LIB_VERSION,compression:i.compression})
var s=null!==(t=i.transport)&&void 0!==t?t:"fetch",o=ls.filter(e=>!i.disableTransport||!e.transport||!i.disableTransport.includes(e.transport)),a=null!==(n=null==(r=Je(o,e=>e.transport===s))?void 0:r.method)&&void 0!==n?n:o[0].method
if(!a)throw new Error("No available transport method")
a(i)})(h({},e,{callback:t=>{var n,r
this.rateLimiter.checkForLimiting(t),t.statusCode>=400&&(null==(n=(r=this.config).on_request_error)||n.call(r,t)),null==e.callback||e.callback(t)}}))))}_send_retriable_request(e){this._retryQueue?this._retryQueue.retriableRequest(e):this._send_request(e)}_execute_array(e){var t,n=[],r=[],i=[]
qe(e,e=>{e&&(t=e[0],B(t)?i.push(e):H(e)?e.call(this):B(e)&&"alias"===t?n.push(e):B(e)&&-1!==t.indexOf("capture")&&H(this[t])?i.push(e):r.push(e))})
var s=function(e,t){qe(e,function(e){if(B(e[0])){var n=t
Be(e,function(e){n=n[e[0]].apply(n,e.slice(1))})}else this[e[0]].apply(this,e.slice(1))},t)}
s(n,this),s(r,this),s(i,this)}_hasBootstrappedFeatureFlags(){var e,t
return(null==(e=this.config.bootstrap)?void 0:e.featureFlags)&&Object.keys(null==(t=this.config.bootstrap)?void 0:t.featureFlags).length>0||!1}push(e){this._execute_array([e])}capture(e,t,n){var r
if(this.__loaded&&this.persistence&&this.sessionPersistence&&this._requestQueue){if(this.is_capturing())if(!W(e)&&z(e)){var i=!this.config.opt_out_useragent_filter&&this._is_bot()
if(!i||this.config.__preview_capture_bot_pageviews){var s=null!=n&&n.skip_client_rate_limiting?void 0:this.rateLimiter.clientRateLimitContext()
if(null==s||!s.isRateLimited){null!=t&&t.$current_url&&!z(null==t?void 0:t.$current_url)&&(Fe.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."),null==t||delete t.$current_url),this.sessionPersistence.update_search_keyword(),this.config.save_campaign_params&&this.sessionPersistence.update_campaign_params(),this.config.save_referrer&&this.sessionPersistence.update_referrer_info(),(this.config.save_campaign_params||this.config.save_referrer)&&this.persistence.set_initial_person_info()
var o=new Date,a=(null==n?void 0:n.timestamp)||o,l=Pn(),c={uuid:l,event:e,properties:this.calculateEventProperties(e,t||{},a,l)}
"$pageview"===e&&this.config.__preview_capture_bot_pageviews&&i&&(c.event="$bot_pageview",c.properties.$browser_type="bot"),s&&(c.properties.$lib_rate_limit_remaining_tokens=s.remainingTokens),(null==n?void 0:n.$set)&&(c.$set=null==n?void 0:n.$set)
var u,d=this._calculate_set_once_properties(null==n?void 0:n.$set_once)
if(d&&(c.$set_once=d),(c=function(e,t){return n=e,r=e=>z(e)&&!Q(t)?e.slice(0,t):e,i=new Set,function e(t,n){return t!==Object(t)?r?r(t):t:i.has(t)?void 0:(i.add(t),B(t)?(s=[],qe(t,t=>{s.push(e(t))})):(s={},Be(t,(t,n)=>{i.has(t)||(s[n]=e(t,n))})),s)
var s}(n)
var n,r,i}(c,null!=n&&n._noTruncate?null:this.config.properties_string_max_length)).timestamp=a,W(null==n?void 0:n.timestamp)||(c.properties.$event_time_override_provided=!0,c.properties.$event_time_override_system_time=o),e===Ls.DISMISSED||e===Ls.SENT){var f=null==t?void 0:t[$s.SURVEY_ID],p=null==t?void 0:t[$s.SURVEY_ITERATION]
u={id:f,current_iteration:p},localStorage.getItem(js(u))||localStorage.setItem(js(u),"true"),c.$set=h({},c.$set,{[Ms({id:f,current_iteration:p},e===Ls.SENT?"responded":"dismissed")]:!0})}var g=h({},c.properties.$set,c.$set)
if(G(g)||this.setPersonPropertiesForFlags(g),!K(this.config.before_send)){var v=this._runBeforeSend(c)
if(!v)return
c=v}this._internalEventEmitter.emit("eventCaptured",c)
var _={method:"POST",url:null!==(r=null==n?void 0:n._url)&&void 0!==r?r:this.requestRouter.endpointFor("api",this.analyticsDefaultEndpoint),data:c,compression:"best-available",batchKey:null==n?void 0:n._batchKey}
return!this.config.request_batching||n&&(null==n||!n._batchKey)||null!=n&&n.send_instantly?this._send_retriable_request(_):this._requestQueue.enqueue(_),c}Fe.critical("This capture call is ignored due to client rate limiting.")}}else Fe.error("No event name provided to posthog.capture")}else Fe.uninitializedWarning("posthog.capture")}_addCaptureHook(e){return this.on("eventCaptured",t=>e(t.event,t))}calculateEventProperties(e,t,n,r,i){if(n=n||new Date,!this.persistence||!this.sessionPersistence)return t
var s=i?void 0:this.persistence.remove_event_timer(e),o=h({},t)
if(o.token=this.config.token,o.$config_defaults=this.config.defaults,("always"==this.config.cookieless_mode||"on_reject"==this.config.cookieless_mode&&this.consent.isExplicitlyOptedOut())&&(o.$cookieless_mode=!0),"$snapshot"===e){var a=h({},this.persistence.properties(),this.sessionPersistence.properties())
return o.distinct_id=a.distinct_id,(!z(o.distinct_id)&&!J(o.distinct_id)||V(o.distinct_id))&&Fe.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),o}var l,c=vi(this.config.mask_personal_data_properties,this.config.custom_personal_data_properties)
if(this.sessionManager){var{sessionId:u,windowId:d}=this.sessionManager.checkAndGetSessionAndWindowId(i,n.getTime())
o.$session_id=u,o.$window_id=d}this.sessionPropsManager&&He(o,this.sessionPropsManager.getSessionProps())
try{var f
this.sessionRecording&&He(o,this.sessionRecording.sdkDebugProperties),o.$sdk_debug_retry_queue_size=null==(f=this._retryQueue)?void 0:f.length}catch(e){o.$sdk_debug_error_capturing_properties=String(e)}if(this.requestRouter.region===io.CUSTOM&&(o.$lib_custom_api_host=this.config.api_host),l="$pageview"!==e||i?"$pageleave"!==e||i?this.pageViewManager.doEvent():this.pageViewManager.doPageLeave(n):this.pageViewManager.doPageView(n,r),o=He(o,l),"$pageview"===e&&k&&(o.title=k.title),!W(s)){var p=n.getTime()-s
o.$duration=parseFloat((p/1e3).toFixed(3))}P&&this.config.opt_out_useragent_filter&&(o.$browser_type=this._is_bot()?"bot":"browser"),(o=He({},c,this.persistence.properties(),this.sessionPersistence.properties(),o)).$is_identified=this._isIdentified(),B(this.config.property_denylist)?Be(this.config.property_denylist,function(e){delete o[e]}):Fe.error("Invalid value for property_denylist config: "+this.config.property_denylist+" or property_blacklist config: "+this.config.property_blacklist)
var g=this.config.sanitize_properties
g&&(Fe.error("sanitize_properties is deprecated. Use before_send instead"),o=g(o,e))
var v=this._hasPersonProcessing()
return o.$process_person_profile=v,v&&!i&&this._requirePersonProcessing("_calculate_event_properties"),o}_calculate_set_once_properties(e){var t
if(!this.persistence||!this._hasPersonProcessing())return e
if(this._personProcessingSetOncePropertiesSent)return e
var n=this.persistence.get_initial_props(),r=null==(t=this.sessionPropsManager)?void 0:t.getSetOnceProps(),i=He({},n,r||{},e||{}),s=this.config.sanitize_properties
return s&&(Fe.error("sanitize_properties is deprecated. Use before_send instead"),i=s(i,"$set_once")),this._personProcessingSetOncePropertiesSent=!0,G(i)?void 0:i}register(e,t){var n
null==(n=this.persistence)||n.register(e,t)}register_once(e,t,n){var r
null==(r=this.persistence)||r.register_once(e,t,n)}register_for_session(e){var t
null==(t=this.sessionPersistence)||t.register(e)}unregister(e){var t
null==(t=this.persistence)||t.unregister(e)}unregister_for_session(e){var t
null==(t=this.sessionPersistence)||t.unregister(e)}_register_single(e,t){this.register({[e]:t})}getFeatureFlag(e,t){return this.featureFlags.getFeatureFlag(e,t)}getFeatureFlagPayload(e){var t=this.featureFlags.getFeatureFlagPayload(e)
try{return JSON.parse(t)}catch(e){return t}}isFeatureEnabled(e,t){return this.featureFlags.isFeatureEnabled(e,t)}reloadFeatureFlags(){this.featureFlags.reloadFeatureFlags()}updateEarlyAccessFeatureEnrollment(e,t,n){this.featureFlags.updateEarlyAccessFeatureEnrollment(e,t,n)}getEarlyAccessFeatures(e,t,n){return void 0===t&&(t=!1),this.featureFlags.getEarlyAccessFeatures(e,t,n)}on(e,t){return this._internalEventEmitter.on(e,t)}onFeatureFlags(e){return this.featureFlags.onFeatureFlags(e)}onSurveysLoaded(e){return this.surveys.onSurveysLoaded(e)}onSessionId(e){var t,n
return null!==(t=null==(n=this.sessionManager)?void 0:n.onSessionId(e))&&void 0!==t?t:()=>{}}getSurveys(e,t){void 0===t&&(t=!1),this.surveys.getSurveys(e,t)}getActiveMatchingSurveys(e,t){void 0===t&&(t=!1),this.surveys.getActiveMatchingSurveys(e,t)}renderSurvey(e,t){this.surveys.renderSurvey(e,t)}displaySurvey(e,t){void 0===t&&(t=Ns),this.surveys.displaySurvey(e,t)}canRenderSurvey(e){return this.surveys.canRenderSurvey(e)}canRenderSurveyAsync(e,t){return void 0===t&&(t=!1),this.surveys.canRenderSurveyAsync(e,t)}identify(e,t,n){if(!this.__loaded||!this.persistence)return Fe.uninitializedWarning("posthog.identify")
if(J(e)&&(e=e.toString(),Fe.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")),e)if(["distinct_id","distinctid"].includes(e.toLowerCase()))Fe.critical('The string "'+e+'" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.')
else if(e!==Lt){if(this._requirePersonProcessing("posthog.identify")){var r=this.get_distinct_id()
if(this.register({$user_id:e}),!this.get_property("$device_id")){var i=r
this.register_once({$had_persisted_distinct_id:!0,$device_id:i},"")}e!==r&&e!==this.get_property(Ze)&&(this.unregister(Ze),this.register({distinct_id:e}))
var s="anonymous"===(this.persistence.get_property(yt)||"anonymous")
e!==r&&s?(this.persistence.set_property(yt,"identified"),this.setPersonPropertiesForFlags(h({},n||{},t||{}),!1),this.capture("$identify",{distinct_id:e,$anon_distinct_id:r},{$set:t||{},$set_once:n||{}}),this._cachedPersonProperties=us(e,t,n),this.featureFlags.setAnonymousDistinctId(r)):(t||n)&&this.setPersonProperties(t,n),e!==r&&(this.reloadFeatureFlags(),this.unregister(bt))}}else Fe.critical('The string "'+Lt+'" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.')
else Fe.error("Unique user id has not been set in posthog.identify")}setPersonProperties(e,t){if((e||t)&&this._requirePersonProcessing("posthog.setPersonProperties")){var n=us(this.get_distinct_id(),e,t)
this._cachedPersonProperties!==n?(this.setPersonPropertiesForFlags(h({},t||{},e||{})),this.capture("$set",{$set:e||{},$set_once:t||{}}),this._cachedPersonProperties=n):Fe.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")}}group(e,t,n){if(e&&t){if(this._requirePersonProcessing("posthog.group")){var r=this.getGroups()
r[e]!==t&&this.resetGroupPropertiesForFlags(e),this.register({$groups:h({},r,{[e]:t})}),n&&(this.capture("$groupidentify",{$group_type:e,$group_key:t,$group_set:n}),this.setGroupPropertiesForFlags({[e]:n})),r[e]===t||n||this.reloadFeatureFlags()}}else Fe.error("posthog.group requires a group type and group key")}resetGroups(){this.register({$groups:{}}),this.resetGroupPropertiesForFlags(),this.reloadFeatureFlags()}setPersonPropertiesForFlags(e,t){void 0===t&&(t=!0),this.featureFlags.setPersonPropertiesForFlags(e,t)}resetPersonPropertiesForFlags(){this.featureFlags.resetPersonPropertiesForFlags()}setGroupPropertiesForFlags(e,t){void 0===t&&(t=!0),this._requirePersonProcessing("posthog.setGroupPropertiesForFlags")&&this.featureFlags.setGroupPropertiesForFlags(e,t)}resetGroupPropertiesForFlags(e){this.featureFlags.resetGroupPropertiesForFlags(e)}reset(e){var t,n,r,i
if(Fe.info("reset"),!this.__loaded)return Fe.uninitializedWarning("posthog.reset")
var s=this.get_property("$device_id")
if(this.consent.reset(),null==(t=this.persistence)||t.clear(),null==(n=this.sessionPersistence)||n.clear(),this.surveys.reset(),this.featureFlags.reset(),null==(r=this.persistence)||r.set_property(yt,"anonymous"),null==(i=this.sessionManager)||i.resetSessionId(),this._cachedPersonProperties=null,"always"===this.config.cookieless_mode)this.register_once({distinct_id:Lt,$device_id:null},"")
else{var o=this.config.get_device_id(Pn())
this.register_once({distinct_id:o,$device_id:e?o:s},"")}this.register({$last_posthog_reset:(new Date).toISOString()},1)}get_distinct_id(){return this.get_property("distinct_id")}getGroups(){return this.get_property("$groups")||{}}get_session_id(){var e,t
return null!==(e=null==(t=this.sessionManager)?void 0:t.checkAndGetSessionAndWindowId(!0).sessionId)&&void 0!==e?e:""}get_session_replay_url(e){if(!this.sessionManager)return""
var{sessionId:t,sessionStartTimestamp:n}=this.sessionManager.checkAndGetSessionAndWindowId(!0),r=this.requestRouter.endpointFor("ui","/project/"+this.config.token+"/replay/"+t)
if(null!=e&&e.withTimestamp&&n){var i,s=null!==(i=e.timestampLookBack)&&void 0!==i?i:10
if(!n)return r
r+="?t="+Math.max(Math.floor(((new Date).getTime()-n)/1e3)-s,0)}return r}alias(e,t){return e===this.get_property(Xe)?(Fe.critical("Attempting to create alias for existing People user - aborting."),-2):this._requirePersonProcessing("posthog.alias")?(W(t)&&(t=this.get_distinct_id()),e!==t?(this._register_single(Ze,e),this.capture("$create_alias",{alias:e,distinct_id:t})):(Fe.warn("alias matches current distinct_id - skipping api call."),this.identify(e),-1)):void 0}set_config(e){var t=h({},this.config)
if(U(e)){var n,r,i,s,o
He(this.config,wo(e))
var a=this._is_persistence_disabled()
null==(n=this.persistence)||n.update_config(this.config,t,a),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new Cs(h({},this.config,{persistence:"sessionStorage"}),a)
var l=this._checkLocalStorageForDebug(this.config.debug)
Y(l)&&(this.config.debug=l),Y(this.config.debug)&&(this.config.debug?(T.DEBUG=!0,An._is_supported()&&An._set("ph_debug","true"),Fe.info("set_config",{config:e,oldConfig:t,newConfig:h({},this.config)})):(T.DEBUG=!1,An._is_supported()&&An._remove("ph_debug"))),null==(r=this.sessionRecording)||r.startIfEnabledOrStop(),null==(i=this.autocapture)||i.startIfEnabled(),null==(s=this.heatmaps)||s.startIfEnabled(),this.surveys.loadIfEnabled(),this._sync_opt_out_with_persistence(),null==(o=this.externalIntegrations)||o.startIfEnabledOrStop()}}startSessionRecording(e){var t,n,r,i,s,o=!0===e,a={sampling:o||!(null==e||!e.sampling),linked_flag:o||!(null==e||!e.linked_flag),url_trigger:o||!(null==e||!e.url_trigger),event_trigger:o||!(null==e||!e.event_trigger)}
Object.values(a).some(Boolean)&&(null==(t=this.sessionManager)||t.checkAndGetSessionAndWindowId(),a.sampling&&(null==(n=this.sessionRecording)||n.overrideSampling()),a.linked_flag&&(null==(r=this.sessionRecording)||r.overrideLinkedFlag()),a.url_trigger&&(null==(i=this.sessionRecording)||i.overrideTrigger("url")),a.event_trigger&&(null==(s=this.sessionRecording)||s.overrideTrigger("event")))
this.set_config({disable_session_recording:!1})}stopSessionRecording(){this.set_config({disable_session_recording:!0})}sessionRecordingStarted(){var e
return!(null==(e=this.sessionRecording)||!e.started)}captureException(e,t){var n=new Error("PostHog syntheticException"),r=this.exceptions.buildProperties(e,{handled:!0,syntheticException:n})
return this.exceptions.sendExceptionEvent(h({},r,t))}loadToolbar(e){return this.toolbar.loadToolbar(e)}get_property(e){var t
return null==(t=this.persistence)?void 0:t.props[e]}getSessionProperty(e){var t
return null==(t=this.sessionPersistence)?void 0:t.props[e]}toString(){var e,t=null!==(e=this.config.name)&&void 0!==e?e:mo
return t!==mo&&(t=mo+"."+t),t}_isIdentified(){var e,t
return"identified"===(null==(e=this.persistence)?void 0:e.get_property(yt))||"identified"===(null==(t=this.sessionPersistence)?void 0:t.get_property(yt))}_hasPersonProcessing(){var e,t
return!("never"===this.config.person_profiles||"identified_only"===this.config.person_profiles&&!this._isIdentified()&&G(this.getGroups())&&(null==(e=this.persistence)||null==(e=e.props)||!e[Ze])&&(null==(t=this.persistence)||null==(t=t.props)||!t[Ct]))}_shouldCapturePageleave(){return!0===this.config.capture_pageleave||"if_capture_pageview"===this.config.capture_pageleave&&(!0===this.config.capture_pageview||"history_change"===this.config.capture_pageview)}createPersonProfile(){this._hasPersonProcessing()||this._requirePersonProcessing("posthog.createPersonProfile")&&this.setPersonProperties({},{})}_requirePersonProcessing(e){return"never"===this.config.person_profiles?(Fe.error(e+' was called, but process_person is set to "never". This call will be ignored.'),!1):(this._register_single(Ct,!0),!0)}_is_persistence_disabled(){if("always"===this.config.cookieless_mode)return!0
var e=this.consent.isOptedOut(),t=this.config.opt_out_persistence_by_default||"on_reject"===this.config.cookieless_mode
return this.config.disable_persistence||e&&!!t}_sync_opt_out_with_persistence(){var e,t,n,r,i=this._is_persistence_disabled()
return(null==(e=this.persistence)?void 0:e._disabled)!==i&&(null==(n=this.persistence)||n.set_disabled(i)),(null==(t=this.sessionPersistence)?void 0:t._disabled)!==i&&(null==(r=this.sessionPersistence)||r.set_disabled(i)),i}opt_in_capturing(e){var t,n
"always"!==this.config.cookieless_mode?("on_reject"===this.config.cookieless_mode&&this.consent.isExplicitlyOptedOut()&&(this.reset(!0),null==(t=this.sessionManager)||t.destroy(),this.sessionManager=new Zs(this),this.persistence&&(this.sessionPropsManager=new Ys(this,this.sessionManager,this.persistence)),this.sessionRecording=new go(this),this.sessionRecording.startIfEnabledOrStop()),this.consent.optInOut(!0),this._sync_opt_out_with_persistence(),this._start_queue_if_opted_in(),"on_reject"==this.config.cookieless_mode&&this.surveys.loadIfEnabled(),(W(null==e?void 0:e.captureEventName)||null!=e&&e.captureEventName)&&this.capture(null!==(n=null==e?void 0:e.captureEventName)&&void 0!==n?n:"$opt_in",null==e?void 0:e.captureProperties,{send_instantly:!0}),this.config.capture_pageview&&this._captureInitialPageview()):Fe.warn('Consent opt in/out is not valid with cookieless_mode="always" and will be ignored')}opt_out_capturing(){var e,t
"always"!==this.config.cookieless_mode?("on_reject"===this.config.cookieless_mode&&this.consent.isOptedIn()&&this.reset(!0),this.consent.optInOut(!1),this._sync_opt_out_with_persistence(),"on_reject"===this.config.cookieless_mode&&(this.register({distinct_id:Lt,$device_id:null}),null==(e=this.sessionManager)||e.destroy(),this.sessionManager=void 0,this.sessionPropsManager=void 0,null==(t=this.sessionRecording)||t.stopRecording(),this.sessionRecording=void 0,this._captureInitialPageview())):Fe.warn('Consent opt in/out is not valid with cookieless_mode="always" and will be ignored')}has_opted_in_capturing(){return this.consent.isOptedIn()}has_opted_out_capturing(){return this.consent.isOptedOut()}get_explicit_consent_status(){var e=this.consent.consent
return e===qn.GRANTED?"granted":e===qn.DENIED?"denied":"pending"}is_capturing(){return"always"===this.config.cookieless_mode||("on_reject"===this.config.cookieless_mode?this.consent.isExplicitlyOptedOut()||this.consent.isOptedIn():!this.has_opted_out_capturing())}clear_opt_in_out_capturing(){this.consent.reset(),this._sync_opt_out_with_persistence()}_is_bot(){return w?ro(w,this.config.custom_blocked_useragents):void 0}_captureInitialPageview(){k&&("visible"===k.visibilityState?this._initialPageviewCaptured||(this._initialPageviewCaptured=!0,this.capture("$pageview",{title:k.title},{send_instantly:!0}),this._visibilityStateListener&&(k.removeEventListener("visibilitychange",this._visibilityStateListener),this._visibilityStateListener=null)):this._visibilityStateListener||(this._visibilityStateListener=this._captureInitialPageview.bind(this),Ye(k,"visibilitychange",this._visibilityStateListener)))}debug(e){!1===e?(null==v||v.console.log("You've disabled debug mode."),this.set_config({debug:!1})):(null==v||v.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),this.set_config({debug:!0}))}_shouldDisableFlags(){var e,t,n,r,i,s,o=this._originalUserConfig||{}
return"advanced_disable_flags"in o?!!o.advanced_disable_flags:!1!==this.config.advanced_disable_flags?!!this.config.advanced_disable_flags:!0===this.config.advanced_disable_decide?(Fe.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."),!0):(n="advanced_disable_decide",r=Fe,i=(t="advanced_disable_flags")in(e=o)&&!W(e[t]),s=n in e&&!W(e[n]),i?e[t]:!!s&&(r&&r.warn("Config field '"+n+"' is deprecated. Please use '"+t+"' instead. The old field will be removed in a future major version."),e[n]))}_runBeforeSend(e){if(K(this.config.before_send))return e
var t=B(this.config.before_send)?this.config.before_send:[this.config.before_send],n=e
for(var r of t){if(n=r(n),K(n)){var i="Event '"+e.event+"' was rejected in beforeSend function"
return X(e.event)?Fe.warn(i+". This can cause unexpected behavior."):Fe.info(i),null}n.properties&&!G(n.properties)||Fe.warn("Event '"+e.event+"' has no properties after beforeSend function, this is likely an error.")}return n}getPageViewId(){var e
return null==(e=this.pageViewManager._currentPageview)?void 0:e.pageViewId}captureTraceFeedback(e,t){this.capture("$ai_feedback",{$ai_trace_id:String(e),$ai_feedback_text:t})}captureTraceMetric(e,t,n){this.capture("$ai_metric",{$ai_trace_id:String(e),$ai_metric_name:t,$ai_metric_value:String(n)})}_checkLocalStorageForDebug(e){var t=Y(e)&&!e,n=An._is_supported()&&"true"===An._get("ph_debug")
return!t&&(!!n||e)}}!function(e,t){for(var n=0;n<t.length;n++)e.prototype[t[n]]=ze(e.prototype[t[n]])}(xo,["identify"])
var So,Eo=(So=vo[mo]=new xo,function(){function e(){e.done||(e.done=!0,bo=!1,Be(vo,function(e){e._dom_loaded()}))}null!=k&&k.addEventListener?"complete"===k.readyState?e():Ye(k,"DOMContentLoaded",e,{capture:!1}):v&&Fe.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")}(),So)
function Co(...e){console.log(...e)}function Po(...e){}function Lo(e,t){Eo.capture(e,t)}function $o(){"string"==typeof window.self&&(s(),window.self=window),function(){try{Eo.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N",{advanced_disable_decide:!0,advanced_disable_feature_flags:!0,advanced_disable_feature_flags_on_first_load:!0,advanced_disable_toolbar_metrics:!0,api_host:"https://us.i.posthog.com",autocapture:!1,capture_pageview:!1,disable_compression:!1,disable_persistence:!0,disable_session_recording:!0,disable_surveys:!0,person_profiles:"identified_only"})}catch(e){Co(e)}}()}let To=0,Oo=0,Io=0,Ao=0,Ro=0,Mo=0,jo=0
const Fo=()=>Date.now(),No=()=>Math.floor(Fo()/1e3)
function Do(){return To||(To=Fo()),To}function qo(){return Oo||(Oo=Do()-3e5),Oo}function Bo(){return Io||(Io=Do()-1728e5),Io}function Ho(){return Ao||(Ao=Math.floor(Do()/1e3)),Ao}function Uo(){return Ro||(Ro=Ho()-120),Ro}function Go(){return Mo||(Mo=Ho()-86400),Mo}function Wo(){return jo||(jo=Ho()-604800),jo}function zo(e){return null===e}function Vo(e){return void 0===e}const Qo=`${document.location.protocol}//${document.location.host}/`,Ko=window.HCS?.defines?.cdn,Jo=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],Yo=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],Xo=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Zo=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,ea=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,ta=/guild_id=(?<guildId>\d+)/,na=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,ra=/player_id=(?<playerId>\d+)/,ia=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,sa=/VL:.+?(?<vl>\d+)/,oa=/creatures\/(\d+)[A-Za-z0-9]{32}\.png/,aa=.2,la="joinallgroupsundersize",ca="index.php",ua="?cmd=",da=`${ca}${ua}`,fa="&subcmd=",pa="&target_username=",ha=`${da}auctionhouse`,ga=`${ha}&search=`,va=`${da}log`,_a=`${da}ignore${fa}add&ignore_username=`,ma=`${da}profile`,ba=`${ma}&player_id=`,ya=`${ma}${fa}dropitems`,wa=`${da}trade&target_player=`,ka=`${da}trade${fa}createsecure${pa}`,xa=`${da}arena${fa}`,Sa=`${ca}${`${ua}notepad&blank=1${fa}`}`,Ea=`${Sa}auctionsearch`,Ca=`${da}points`,Pa=`${da}guild${fa}`,La=`${Pa}log`,$a=`${Pa}scouttower`,Ta=`${Pa}groups&subcmd2=`,Oa=`${Pa}inventory&subcmd2=report&user=`,Ia=`${Pa}view&guild_id=`,Aa=`${Ta}joinall`,Ra=`${Ta}${la}`,Ma=`${da}world`,ja=`${da}findplayer`,Fa=`${ja}&search_show_first=1&search_username=`,Na=`${da}blacksmith`,Da=`${da}quickbuff`,qa=`${da}composing`,Ba=`${da}attackplayer${pa}`,Ha=`${da}${fa}viewupdatearchive`,Ua=`${da}${fa}viewarchive`,Ga=`${da}bounty`,Wa=`${da}inventing${fa}viewrecipe&recipe_id=`,za=`https://guide.fallensword.com/${da}`,Va="after-update.actionlist",Qa="buffs.player",Ka="update.player",Ja="level.stats-player",Ya="gold.stats-player",Xa="prompt.worldDialogShop",Za="keydown.controls",el="update.realm",tl="-success.action-response",nl=`-1${tl}`,rl=`1${tl}`,il=`2${tl}`,sl=`9${tl}`,ol=`5${tl}`,al=`25${tl}`,ll=2,cl=16,ul=128,dl=256,fl="needToCompose",pl="lastComposeCheck",hl="characterVirtualLevel",gl="enableGuildActivityTracker",vl="lastLadderReset",_l="form",ml="table",bl="td",yl="fsh_buffLog",wl="stat-level",kl="stat-defense",xl="stat-attack",Sl="stat-damage",El="stat-armor",Cl="stat-hp",Pl="stat-vl",Ll="GM_",$l=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],Tl=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],Ol=`${Ko}ui/world/action_spinner.gif`,Il=".fa-envelope",Al='a[href*="&player_id="]',Rl=.002,Ml=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],jl='input[name="blockedSkillList[]"]',Fl=86400,Nl=1e3
var Dl={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252",compactRanks:!1,lastModalGuildLogCheck:0,dailyQuestReRoll:!1}
const ql=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function Bl(e,t){const n=window.localStorage.getItem(Ll+e)
return zo(n)||Vo(n)?t:function(e){const t=ql.find(t=>e.startsWith(t[0]))
return t?t[1](e):e}(n)}function Hl(e){return!e.startsWith("screenview__")&&Vo(Dl[e]),Bl(e,Dl[e])}function Ul(e){return"boolean"==typeof e}function Gl(e){return"string"==typeof e}function Wl(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(Ll+e,t+n)}const zl=[[Gl,(e,t)=>{Wl(e,"S]",t)}],[e=>"number"==typeof e,(e,t)=>{t.toString().indexOf(".")<0&&Wl(e,"N]",t)}],[Ul,(e,t)=>{Wl(e,"B]",t)}]]
function Vl(e,t){const n=zl.find(e=>e[0](t))
n&&n[1](e,t)}function Ql(e){const t=`screenview__${e}`,n=Hl(t)
Number.isFinite(n)&&n>Go()||(Lo(t),Vl(t,Ho()))}function Kl(e){return"function"==typeof e}function Jl(e){return"object"==typeof e}function Yl(e,t){try{return JSON.parse(e,t)}catch(e){}}function Xl(e,t){return t?t.querySelector(e):document.querySelector(e)}function Zl(e){const t=Xl("link",document.body)
return new Promise(n=>{const r=document.createElement("link")
r.type="text/css",r.rel="stylesheet",r.onload=()=>{n()},r.href=e,t?t.before(r):document.body.append(r)})}var ec="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function tc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nc,rc={exports:{}}
var ic=(nc||(nc=1,rc.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==ec?ec:"undefined"!=typeof self?self:{}
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
var C=!1,P=[]
function L(e,t){e&&e.console&&t&&(P.push(t),C||(C=!0,["debug","info","warn","error","log"].forEach(function(t){E(e.console,t,function(n){return function(){var r=Array.prototype.slice.call(arguments)
P.forEach(function(e){try{e(t,r)}catch(e){}}),"function"==typeof n&&Function.prototype.apply.call(n,e.console,arguments)}})})))}function $(e,t){var n=e.trim().replace(/\/$/,"")
return t=t.trim().replace(/(^\/|\/$)/g,""),"".concat(n,"/").concat(t)}function T(){try{throw new Error("")}catch(e){if(e.stack)return e.stack}for(var e=10,t=[],n=arguments.callee;n&&t.length<e;){/function(?:\s+([\w$]+))+\s*\(/.test(n.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>")
try{n=n.caller}catch(e){break}}return t.join("\n")}function O(e,t){if(A("Object",e)){A("Array",t)||(t=[])
var n=[]
return r(e)}function r(e){var i,s
if(A("Object",e)||A("Array",e)){if(-1!==n.indexOf(e))return"[CIRCULAR DATA STRUCTURE]"
n.push(e)}if(A("Object",e)){for(i in s={},e)I(i,t)?s[i]="[FILTERED]":s[i]=r(e[i])
return s}return A("Array",e)?e.map(function(e){return r(e)}):A("Function",e)?"[FUNC]":e}}function I(e,t){for(var n=0;n<t.length;n++)if(-1!==e.toLowerCase().indexOf(t[n].toLowerCase()))return!0
return!1}function A(e,t){var n=Object.prototype.toString.call(t).slice(8,-1)
return null!=t&&n===e}function R(e,t){if(!t)return e
if("string"!=typeof e)return e
var n=e.split(/\?/,2)[1]
if(!n)return e
var r=e
return n.split(/[&]\s?/).forEach(function(e){var n=e.split("=",2),i=n[0],s=n[1]
I(i,t)&&(r=r.replace("".concat(i,"=").concat(s),"".concat(i,"=[FILTERED]")))}),r}function M(e,t){void 0===t&&(t="")
var n={}
return Object.keys(e).forEach(function(r){var i=t+r.replace(/\W/g,"_").toUpperCase()
n[i]=e[r]}),n}function j(e){return JSON.parse(JSON.stringify(e))}t.instrumentConsole=L,t.endpoint=$,t.generateStackTrace=T,t.filter=O,t.filterUrl=R,t.formatCGIData=M,t.clone=j
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
var C=o,P=function(){function e(e,t){this.contents=e,this.breadcrumbsLimit=t}return e.create=function(t,n){return new e(t,n)},e.prototype.available=function(){return!0},e.prototype.getContents=function(e){var t=e?this.contents[e]:this.contents
return JSON.parse(JSON.stringify(t))},e.prototype.setContext=function(e){this.contents.context=(0,C.merge)(this.contents.context,e||{})},e.prototype.addBreadcrumb=function(e){this.contents.breadcrumbs.length==this.breadcrumbsLimit&&this.contents.breadcrumbs.shift(),this.contents.breadcrumbs.push(e)},e.prototype.clear=function(){this.contents.context={},this.contents.breadcrumbs=[]},e.prototype.run=function(e){return e()},e}()
E.GlobalStore=P
var L={}
class ${static parse(e){return e.trim().split("\n").map(e=>JSON.parse(e))}static stringify(e){return e.map(e=>JSON.stringify(e)).join("\n")}}var T=Object.freeze({__proto__:null,NdJson:$}),O=n(T),I={}
Object.defineProperty(I,"__esModule",{value:!0}),I.CONFIG=void 0,I.CONFIG={apiKey:null,endpoint:"https://api.honeybadger.io",appEndpoint:"https://app.honeybadger.io",environment:null,hostname:null,projectRoot:null,component:null,action:null,revision:null,reportData:null,breadcrumbsEnabled:!0,eventsEnabled:!1,maxBreadcrumbs:40,maxObjectDepth:8,logger:console,developmentEnvironments:["dev","development","test"],debug:!1,tags:null,enableUncaught:!0,enableUnhandledRejection:!0,afterUncaught:function(){return!0},filters:["creditcard","password"],__plugins:[]}
var A=e&&e.__assign||function(){return A=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},A.apply(this,arguments)},R=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):i(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())})},M=e&&e.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
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
0===this.queue.length||this.isProcessing||(this.isProcessing=!0,this.send().then(function(){setTimeout(function(){e.isProcessing=!1,e.processQueue()},50)}).catch(function(t){e.logger.error("[Honeybadger] Error making HTTP request:",t),setTimeout(function(){e.isProcessing=!1,e.processQueue()},50)}))},e.prototype.send=function(){return R(this,void 0,void 0,function(){var e,t
return M(this,function(n){return 0===this.queue.length?[2]:(e=this.queue.slice(),this.queue=[],t=j.NdJson.stringify(e),[2,this.makeHttpRequest(t)])})})},e.prototype.makeHttpRequest=function(e){return R(this,void 0,void 0,function(){var t=this
return M(this,function(n){return[2,this.transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json"},method:"POST",endpoint:(0,F.endpoint)(this.config.endpoint,"/v1/events"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},e).then(function(){t.config.debug&&t.logger.debug("[Honeybadger] Events sent successfully")}).catch(function(e){t.logger.error("[Honeybadger] Error sending events: ".concat(e.message))})]})})},e.prototype.originalLogger=function(){var e,t,n,r,i
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
var Ee=i,Ce=Y,Pe=Ee.Util.sanitize,Le=Ee.Util.instrument,$e=Ee.Util.instrumentConsole,Te=Ee.Util.globalThisOrWindow
function Oe(e){return void 0===e&&(e=Te()),{load:function(t){function n(e){return!0===t.config.breadcrumbsEnabled||(e?!0===t.config.breadcrumbsEnabled[e]:!1!==t.config.breadcrumbsEnabled)}!function(){function r(e){return Array.isArray(e)?e.map(function(e){try{return String(e)}catch(e){return"[unknown]"}}).join(" "):""}n("console")&&$e(e,function(e,n){var i=r(n),s={category:"log",metadata:{level:e,arguments:Pe(n,3)}}
t.addBreadcrumb(i,s)})}(),n("dom")&&"function"==typeof e.addEventListener&&e.addEventListener("click",function(e){var n,r,i
try{n=(0,Ce.stringNameOfElement)(e.target),r=(0,Ce.stringSelectorOfElement)(e.target),i=(0,Ce.stringTextOfElement)(e.target)}catch(e){n="UI Click",r="[unknown]",i="[unknown]"}0!==n.length&&t.addBreadcrumb(n,{category:"ui.click",metadata:{selector:r,text:i,event:e}})},!!e.location),n("network")&&"undefined"!=typeof XMLHttpRequest&&(Le(XMLHttpRequest.prototype,"open",function(e){return function(){var t=this,n=arguments[1],r="string"==typeof n?n:String(n),i="string"==typeof arguments[0]?arguments[0].toUpperCase():arguments[0],s="".concat(i," ").concat((0,Ce.localURLPathname)(r))
this.__hb_xhr={type:"xhr",method:i,url:r,message:s},"function"==typeof e&&e.apply(t,arguments)}}),Le(XMLHttpRequest.prototype,"send",function(e){return function(){var n=this
function r(){if(4===n.readyState){var e=void 0
n.__hb_xhr&&(n.__hb_xhr.status_code=n.status,e=n.__hb_xhr.message,delete n.__hb_xhr.message),t.addBreadcrumb(e||"XMLHttpRequest",{category:"request",metadata:n.__hb_xhr})}}"onreadystatechange"in n&&"function"==typeof n.onreadystatechange?Le(n,"onreadystatechange",function(e){return function(){r(),"function"==typeof e&&e.apply(this,arguments)}}):n.onreadystatechange=r,"function"==typeof e&&e.apply(n,arguments)}})),n("network")&&(0,Ce.nativeFetch)()&&Le(e,"fetch",function(n){return function(){var r,i=arguments[0],s="GET"
"string"==typeof i?r=i:"Request"in e&&i instanceof Request?(r=i.url,i.method&&(s=i.method)):r=String(i),arguments[1]&&arguments[1].method&&(s=arguments[1].method),"string"==typeof s&&(s=s.toUpperCase())
var o="".concat(s," ").concat("undefined"==typeof document?r:(0,Ce.localURLPathname)(r)),a={type:"fetch",method:s,url:r}
return n.apply(this,arguments).then(function(e){return a.status_code=e.status,t.addBreadcrumb(o,{category:"request",metadata:a}),e}).catch(function(e){throw t.addBreadcrumb("fetch error",{category:"error",metadata:a}),e})}}),function(){if(n("navigation")&&null!=e.location){var r=e.location.href
"function"==typeof addEventListener&&addEventListener("popstate",function(t){i(r,e.location.href)}),void 0!==e.history&&(Le(e.history,"pushState",s),Le(e.history,"replaceState",s))}function i(e,n){r=n,t.addBreadcrumb("Page changed",{category:"navigation",metadata:{from:e,to:n}})}function s(e){return function(){var t=arguments.length>2?arguments[2]:void 0
return t&&i(r,String(t)),e.apply(this,arguments)}}}()}}}Se.default=Oe
var Ie={}
Object.defineProperty(Ie,"__esModule",{value:!0})
var Ae=i,Re=Ae.Util.instrument,Me=Ae.Util.globalThisOrWindow
function je(e){return void 0===e&&(e=Me()),{load:function(t){!function(){function n(e){return function(n){return function(r,i){if("function"==typeof r){var s=Array.prototype.slice.call(arguments,2)
return r=t.__wrap(r,e),n(function(){r.apply(void 0,s)},i)}return n(r,i)}}}Re(e,"setTimeout",n({component:"setTimeout"})),Re(e,"setInterval",n({component:"setInterval"}))}()}}}Ie.default=je
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
throw r.__lastWrapErr=e,(0,d.ignoreNextOnError)(),r.addBreadcrumb(t.component?"".concat(t.component,": ").concat(e.name):e.name,{category:"error",metadata:{message:e.message,name:e.name,stack:e.stack}}),r.config.enableUncaught&&r.notify(e),e}}}return n.___hb.___hb=n.___hb,n.___hb}catch(e){return n}},n.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},n.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},n}(c.Client),E={name:"@honeybadger-io/js",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",version:"6.12.3"},C=function(){return"undefined"!=typeof navigator?"Honeybadger JS Browser Client ".concat(E.version,"; ").concat(navigator.userAgent):"Honeybadger JS Browser Client ".concat(E.version,"; n/a; n/a")},P=new S({__plugins:[(0,d.onError)(),(0,f.default)(),(0,h.default)(),(0,g.default)(),(0,p.default)(),c.Plugins.events()]})
P.setNotifier(E)
var L=i
Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return L.Types}}),t.default=P}(r)
var et=t(r)
return et}()),rc.exports),sc=tc(ic)
const oc=["attackplayer.min.js","Auction-House-Monitor.user.js","Cocaine.user.js","Compra-%2526-Venda-de-Recursos-%25E2%259C%2585.user.js","cross-origin frame","Daily-Quest-Auto-Hunter-All-Creatures-%252B-SE-Searcher-Movement.user.js","Discord-Message-Checks-for-Updates.user.js","dynamically imported module","Fallen-Sword-Auto-Invent.user.js","Fallen-Sword-Auto-Skill-Caster.user.js","Fallen-Sword-Champion-and-Super-Elite-Alert.user.js","Fallen-Sword-Message-Alert.user.js","Fallen-Sword-Super-Elite-%2526-Crate-Notifier.user.js","Fallen-Sword-Super-Elite-Notifier.user.js","Fallen-Sword-Win%252FLoss-Checker-with-Buffs-and-Buff-Levels.user.js","Fallen-Sword-Win%252FLoss-Checker.user.js","Fallensword-GvG-Target-Checker-with-Button-and-Buff-Check.user.js","Fetch-Auction-and-Send-to-Discord.user.js","FS-%E2%80%93-Auto-Explore-visible-per-step-movement","FS-%E2%80%93-Inline-Combat-Sets-Fast%2C-Correct-CSS-on-Tournament-Page.user.js","FS-Fixer.user.js","FS-Mapper.user.js","fs.min.js","FSH1.user.js","Gold-alert.user.js","GVG-and-Relics-Notifications.user.js","GvG-Initiate-Enhanced.user.js","GvG-List-v2.user.js","GvG-Name-Only.user.js","GVG%252FRelics-Discord.user.js","GVG%252FRelics-Notifications.user.js","GVG%252FRelics%252FTitan-Drop-Discord-Alerts-Titan-Image-Fix-%252B-Text-Mode-for-Others.user.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","League-of-Legends.user.js","MetaMask","New-Userscript.user.js","News.user.js","openuserjs.org","out of memory","Permission denied to access object","play method is not allowed","Quick-Kill.user.js","SE-Searcher-Replay-Fix.user.js","se-searcher-v2-draft.user.js","SE-Searcher-v2-with-Pause%252FResume.user.js","Superelite-searcher.user.js","SWS-Creature-Killer.user.js","Titan-3.0.user.js","Titan-Kill-Counter-Kill-Streak-Based.user.js","Titan-Quick-Kill.user.js","UFSG-dodatki.user.js","UnhandledPromiseRejectionWarning: 404","world.min.js","(reading '$$')"],ac=e=>Gl(e)&&oc.some(t=>e.includes(t))
function lc(e){if(ac(e.message)||ac(e.stack))return!1}function cc(){!function(){sc.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.160"})
const e=s()
e&&sc.setContext({user_id:e}),sc.afterNotify(e=>{if(e)return Co(`Honeybadger notification failed: ${e}`)}),sc.beforeNotify(lc)}()}function uc(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class dc extends Error{constructor([e,t,n,r],...i){super(function(e,t,n,r){const i=`${t.status} ${t.statusText} - `
if(t.statusText===r.toString())return i+uc(e)
const s=`${i+n} ${r} - ${uc(e)}`
return"parsererror"===n?`${s} - ${t.responseText}`:s}(e,t,n,r),...i),Error.captureStackTrace&&Error.captureStackTrace(this,dc),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=r}}function fc(e,t,n,r){e instanceof EventTarget&&e.addEventListener(t,n,r)}function pc(e,t,n){return JSON.stringify(e,t,n)}function hc(e){Hl("betaOptIn")&&Co("sendException",e),sc.notify(e,"sendException")}var gc={}
function vc(e){return Array.isArray(e)}function _c(e,t){return e||t}const mc=[null]
function bc(e,t){return mc[e]&&mc[e].priority<mc[t].priority}function yc(e,t){const n=mc[e]
mc[e]=mc[t],mc[t]=n}function wc(e,t){return e?2*t:2*t+1}function kc(){if(1===mc.length)return
const e=mc[1].data,t=mc.pop()
return mc.length>1&&(mc[1]=t,function(e){let t=e
for(;2*t<mc.length;){const e=wc(!bc(2*t+1,2*t),t)
if(bc(t,e))break
yc(t,e),t=e}}(1)),e}function xc(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!bc(t,e))break
yc(t,e),t=e}}(mc.push({data:e,priority:t})-1)}let Sc=!0
const Ec="fshMessage"
let Cc=0
function Pc(){mc.length-1==0?Sc=!0:(Sc=!1,window.postMessage(Ec,window.location.origin))}function Lc(){const e=kc()
Kl(e)?e():function(e){Vo(e)||hc(`pop() was not a function (${typeof e})`)}(e)}function $c(e){const t=e.data
e.origin===window.location.origin&&t===Ec&&function(){try{Lc()}catch(e){sc.notify(e,"taskFailure")}finally{Pc()}}()}function Tc(e,t,n,r){if(Kl(t)){Cc||(fc(window,"message",$c),Cc=!0)
const i=_c(r,window),s=_c(n,[])
xc(t.bind(i,...s),e),Sc&&Pc()}}function Oc(e,t){return new URLSearchParams(e).get(t)}function Ic(e){try{return Oc(decodeURIComponent(window.location.search),e)}catch(e){return""}}var Ac=!1,Rc=Array.isArray,Mc=Array.prototype.indexOf,jc=Array.from,Fc=Object.defineProperty,Nc=Object.getOwnPropertyDescriptor,Dc=Object.getOwnPropertyDescriptors,qc=Object.prototype,Bc=Array.prototype,Hc=Object.getPrototypeOf,Uc=Object.isExtensible
function Gc(e){return"function"==typeof e}const Wc=()=>{}
function zc(e){return e()}function Vc(e){for(var t=0;t<e.length;t++)e[t]()}function Qc(){var e,t
return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}function Kc(e,t){if(Array.isArray(e))return e
if(void 0===t||!(Symbol.iterator in e))return Array.from(e)
const n=[]
for(const r of e)if(n.push(r),n.length===t)break
return n}const Jc=16,Yc=32,Xc=64,Zc=128,eu=512,tu=1024,nu=2048,ru=4096,iu=8192,su=16384,ou=32768,au=65536,lu=1<<17,cu=1<<18,uu=1<<19,du=32768,fu=1<<21,pu=1<<23,hu=Symbol("$state"),gu=Symbol("legacy props"),vu=Symbol(""),_u=new class extends Error{name="StaleReactionError"
message="The reaction that called `getAbortSignal()` was re-run or destroyed"}
function mu(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const bu=Symbol()
function yu(e){return e===this.v}function wu(e,t){return e!=e?t==t:e!==t||null!==e&&"object"==typeof e||"function"==typeof e}function ku(e){return!wu(e,this.v)}let xu=!1
const Su=[]
function Eu(e,t=!1,n=!1){return Cu(e,new Map,"",Su,null,n)}function Cu(e,t,n,r,i=null,s=!1){if("object"==typeof e&&null!==e){var o=t.get(e)
if(void 0!==o)return o
if(e instanceof Map)return new Map(e)
if(e instanceof Set)return new Set(e)
if(Rc(e)){var a=Array(e.length)
t.set(e,a),null!==i&&t.set(i,a)
for(var l=0;l<e.length;l+=1){var c=e[l]
l in e&&(a[l]=Cu(c,t,n,r,null,s))}return a}if(Hc(e)===qc){for(var u in a={},t.set(e,a),null!==i&&t.set(i,a),e)a[u]=Cu(e[u],t,n,r,null,s)
return a}if(e instanceof Date)return structuredClone(e)
if("function"==typeof e.toJSON&&!s)return Cu(e.toJSON(),t,n,r,e)}if(e instanceof EventTarget)return e
try{return structuredClone(e)}catch(t){return e}}let Pu=null
function Lu(e){Pu=e}function $u(e,t=!1,n){Pu={p:Pu,i:!1,c:null,e:null,s:e,x:null,l:xu&&!t?{s:null,u:null,$:[]}:null}}function Tu(e){var t=Pu,n=t.e
if(null!==n)for(var r of(t.e=null,n))Hd(r)
return void 0!==e&&(t.x=e),t.i=!0,Pu=t.p,e??{}}function Ou(){return!xu||null!==Pu&&null===Pu.l}let Iu=[]
function Au(){var e=Iu
Iu=[],Vc(e)}function Ru(e){if(0===Iu.length&&!Wu){var t=Iu
queueMicrotask(()=>{t===Iu&&Au()})}Iu.push(e)}function Mu(){for(;Iu.length>0;)Au()}function ju(e){var t=pf
if(null===t)return uf.f|=pu,e
if(0===(t.f&ou)){if(0===(t.f&Zc))throw e
t.b.error(e)}else Fu(e,t)}function Fu(e,t){for(;null!==t;){if(0!==(t.f&Zc))try{return void t.b.error(e)}catch(t){e=t}t=t.parent}throw e}const Nu=new Set
let Du=null,qu=null,Bu=null,Hu=[],Uu=null,Gu=!1,Wu=!1
class zu{committed=!1
current=new Map
previous=new Map
#e=new Set
#t=new Set
#n=0
#r=0
#i=null
#s=[]
#o=[]
skipped_effects=new Set
is_fork=!1
is_deferred(){return this.is_fork||this.#r>0}process(e){Hu=[],qu=null,this.apply()
var t={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]}
for(const n of e)this.#a(n,t)
this.is_fork||this.#l(),this.is_deferred()?(this.#c(t.effects),this.#c(t.render_effects),this.#c(t.block_effects)):(qu=this,Du=null,Yu(t.render_effects),Yu(t.effects),qu=null,this.#i?.resolve()),Bu=null}#a(e,t){e.f^=tu
for(var n=e.first;null!==n;){var r=n.f,i=!!(96&r),s=i&&0!==(r&tu)||0!==(r&iu)||this.skipped_effects.has(n)
if(0!==(n.f&Zc)&&n.b?.is_pending()&&(t={parent:t,effect:n,effects:[],render_effects:[],block_effects:[]}),!s&&null!==n.fn){i?n.f^=tu:4&r?t.effects.push(n):Ef(n)&&(0!==(n.f&Jc)&&t.block_effects.push(n),Tf(n))
var o=n.first
if(null!==o){n=o
continue}}var a=n.parent
for(n=n.next;null===n&&null!==a;)a===t.effect&&(this.#c(t.effects),this.#c(t.render_effects),this.#c(t.block_effects),t=t.parent),n=a.next,a=a.parent}}#c(e){for(const t of e){(0!==(t.f&nu)?this.#s:this.#o).push(t),this.#u(t.deps),Ff(t,tu)}}#u(e){if(null!==e)for(const t of e)2&t.f&&0!==(t.f&du)&&(t.f^=du,this.#u(t.deps))}capture(e,t){this.previous.has(e)||this.previous.set(e,t),0===(e.f&pu)&&(this.current.set(e,e.v),Bu?.set(e,e.v))}activate(){Du=this,this.apply()}deactivate(){Du===this&&(Du=null,Bu=null)}flush(){if(this.activate(),Hu.length>0){if(Qu(),null!==Du&&Du!==this)return}else 0===this.#n&&this.process([])
this.deactivate()}discard(){for(const e of this.#t)e(this)
this.#t.clear()}#l(){if(0===this.#r){for(const e of this.#e)e()
this.#e.clear()}0===this.#n&&this.#d()}#d(){if(Nu.size>1){this.previous.clear()
var e=Bu,t=!0,n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]}
for(const e of Nu){if(e===this){t=!1
continue}const i=[]
for(const[n,r]of this.current){if(e.current.has(n)){if(!t||r===e.current.get(n))continue
e.current.set(n,r)}i.push(n)}if(0===i.length)continue
const s=[...e.current.keys()].filter(e=>!this.current.has(e))
if(s.length>0){var r=Hu
Hu=[]
const t=new Set,o=new Map
for(const e of i)Xu(e,s,t,o)
if(Hu.length>0){Du=e,e.apply()
for(const t of Hu)e.#a(t,n)
e.deactivate()}Hu=r}}Du=null,Bu=e}this.committed=!0,Nu.delete(this)}increment(e){this.#n+=1,e&&(this.#r+=1)}decrement(e){this.#n-=1,e&&(this.#r-=1),this.revive()}revive(){for(const e of this.#s)Ff(e,nu),ed(e)
for(const e of this.#o)Ff(e,ru),ed(e)
this.#s=[],this.#o=[],this.flush()}oncommit(e){this.#e.add(e)}ondiscard(e){this.#t.add(e)}settled(){return(this.#i??=Qc()).promise}static ensure(){if(null===Du){const e=Du=new zu
Nu.add(Du),Wu||zu.enqueue(()=>{Du===e&&e.flush()})}return Du}static enqueue(e){Ru(e)}apply(){}}function Vu(e){var t=Wu
Wu=!0
try{for(;;){if(Mu(),0===Hu.length&&(Du?.flush(),0===Hu.length))return void(Uu=null)
Qu()}}finally{Wu=t}}function Qu(){var e=of
Gu=!0
try{var t=0
for(af(!0);Hu.length>0;){var n=zu.ensure()
if(t++>1e3)Ac,Ku()
n.process(Hu),fd.clear()}}finally{Gu=!1,af(e),Uu=null}}function Ku(){try{!function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}()}catch(e){Fu(e,Uu)}}let Ju=null
function Yu(e){var t=e.length
if(0!==t){for(var n=0;n<t;){var r=e[n++]
if(!(24576&r.f)&&Ef(r)&&(Ju=new Set,Tf(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown&&null===r.ac?Xd(r):r.fn=null),Ju?.size>0)){fd.clear()
for(const e of Ju){if(24576&e.f)continue
const t=[e]
let n=e.parent
for(;null!==n;)Ju.has(n)&&(Ju.delete(n),t.push(n)),n=n.parent
for(let e=t.length-1;e>=0;e--){const n=t[e]
24576&n.f||Tf(n)}}Ju.clear()}}Ju=null}}function Xu(e,t,n,r){if(!n.has(e)&&(n.add(e),null!==e.reactions))for(const i of e.reactions){const e=i.f
2&e?Xu(i,t,n,r):4194320&e&&0===(e&nu)&&Zu(i,t,r)&&(Ff(i,nu),ed(i))}}function Zu(e,t,n){const r=n.get(e)
if(void 0!==r)return r
if(null!==e.deps)for(const r of e.deps){if(t.includes(r))return!0
if(2&r.f&&Zu(r,t,n))return n.set(r,!0),!0}return n.set(e,!1),!1}function ed(e){for(var t=Uu=e;null!==t.parent;){var n=(t=t.parent).f
if(Gu&&t===pf&&0!==(n&Jc)&&0===(n&cu))return
if(96&n){if(0===(n&tu))return
t.f^=tu}}Hu.push(t)}class td{parent
#n=!1
#f
#p=null
#h
#g
#v
#_=null
#m=null
#b=null
#y=null
#w=null
#k=0
#x=0
#S=!1
#E=null
#C=function(e){let t,n=0,r=hd(0)
return()=>{Dd()&&(If(r),Gd(()=>(0===n&&(t=Mf(()=>e(()=>bd(r)))),n+=1,()=>{Ru(()=>{n-=1,0===n&&(t?.(),t=void 0,bd(r))})})))}}(()=>(this.#E=hd(this.#k),()=>{this.#E=null}))
constructor(e,t,n){this.#f=e,this.#h=t,this.#g=n,this.parent=pf.b,this.#n=!!this.#h.pending,this.#v=zd(()=>{pf.b=this
var e=this.#P()
try{this.#_=Vd(()=>n(e))}catch(e){this.error(e)}return this.#x>0?this.#L():this.#n=!1,()=>{this.#w?.remove()}},589952)}#$(){try{this.#_=Vd(()=>this.#g(this.#f))}catch(e){this.error(e)}this.#n=!1}#T(){const e=this.#h.pending
e&&(this.#m=Vd(()=>e(this.#f)),zu.enqueue(()=>{var e=this.#P()
this.#_=this.#O(()=>(zu.ensure(),Vd(()=>this.#g(e)))),this.#x>0?this.#L():(Zd(this.#m,()=>{this.#m=null}),this.#n=!1)}))}#P(){var e=this.#f
return this.#n&&(this.#w=Ld(),this.#f.before(this.#w),e=this.#w),e}is_pending(){return this.#n||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#h.pending}#O(e){var t=pf,n=uf,r=Pu
hf(this.#v),ff(this.#v),Lu(this.#v.ctx)
try{return e()}catch(e){return ju(e),null}finally{hf(t),ff(n),Lu(r)}}#L(){const e=this.#h.pending
null!==this.#_&&(this.#y=document.createDocumentFragment(),this.#y.append(this.#w),sf(this.#_,this.#y)),null===this.#m&&(this.#m=Vd(()=>e(this.#f)))}#I(e){this.has_pending_snippet()?(this.#x+=e,0===this.#x&&(this.#n=!1,this.#m&&Zd(this.#m,()=>{this.#m=null}),this.#y&&(this.#f.before(this.#y),this.#y=null))):this.parent&&this.parent.#I(e)}update_pending_count(e){this.#I(e),this.#k+=e,this.#E&&md(this.#E,this.#k)}get_effect_pending(){return this.#C(),If(this.#E)}error(e){var t=this.#h.onerror
let n=this.#h.failed
if(this.#S||!t&&!n)throw e
this.#_&&(Jd(this.#_),this.#_=null),this.#m&&(Jd(this.#m),this.#m=null),this.#b&&(Jd(this.#b),this.#b=null)
var r=!1,i=!1
const s=()=>{r?console.warn("https://svelte.dev/e/svelte_boundary_reset_noop"):(r=!0,i&&function(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}(),zu.ensure(),this.#k=0,null!==this.#b&&Zd(this.#b,()=>{this.#b=null}),this.#n=this.has_pending_snippet(),this.#_=this.#O(()=>(this.#S=!1,Vd(()=>this.#g(this.#f)))),this.#x>0?this.#L():this.#n=!1)}
var o=uf
try{ff(null),i=!0,t?.(e,s),i=!1}catch(e){Fu(e,this.#v&&this.#v.parent)}finally{ff(o)}n&&Ru(()=>{this.#b=this.#O(()=>{zu.ensure(),this.#S=!0
try{return Vd(()=>{n(this.#f,()=>e,()=>s)})}catch(e){return Fu(e,this.#v.parent),null}finally{this.#S=!1}})})}}function nd(e,t,n,r){const i=Ou()?sd:ad
if(0!==n.length||0!==e.length){var s=Du,o=pf,a=rd()
e.length>0?Promise.all(e).then(()=>{a()
try{return l()}finally{s?.deactivate(),id()}}):l()}else r(t.map(i))
function l(){Promise.all(n.map(e=>function(e){let t=pf
null===t&&function(){throw new Error("https://svelte.dev/e/async_derived_orphan")}()
var n=t.b,r=void 0,i=hd(bu),s=!uf,o=new Map
return function(e){Nd(4718592,e,!0)}(()=>{var t=Qc()
r=t.promise
try{Promise.resolve(e()).then(t.resolve,t.reject).then(()=>{a===Du&&a.committed&&a.deactivate(),id()})}catch(e){t.reject(e),id()}var a=Du
if(s){var l=!n.is_pending()
n.update_pending_count(1),a.increment(l),o.get(a)?.reject(_u),o.delete(a),o.set(a,t)}const c=(e,t=void 0)=>{if(a.activate(),t)t!==_u&&(i.f|=pu,md(i,t))
else{0!==(i.f&pu)&&(i.f^=pu),md(i,e)
for(const[e,t]of o){if(o.delete(e),e===a)break
t.reject(_u)}}s&&(n.update_pending_count(-1),a.decrement(l))}
t.promise.then(c,e=>c(null,e||"unknown"))}),qd(()=>{for(const e of o.values())e.reject(_u)}),new Promise(e=>{function t(n){function s(){n===r?e(i):t(r)}n.then(s,s)}t(r)})}(e))).then(e=>{a()
try{r([...t.map(i),...e])}catch(e){0===(o.f&su)&&Fu(e,o)}s?.deactivate(),id()}).catch(e=>{Fu(e,o)})}}function rd(){var e=pf,t=uf,n=Pu,r=Du
return function(i=!0){hf(e),ff(t),Lu(n),i&&r?.activate()}}function id(){hf(null),ff(null),Lu(null)}function sd(e){var t=null!==uf&&2&uf.f?uf:null
null!==pf&&(pf.f|=uu)
return{ctx:Pu,deps:null,effects:null,equals:yu,f:2050,fn:e,reactions:null,rv:0,v:bu,wv:0,parent:t??pf,ac:null}}function od(e){const t=sd(e)
return vf(t),t}function ad(e){const t=sd(e)
return t.equals=ku,t}function ld(e){var t=e.effects
if(null!==t){e.effects=null
for(var n=0;n<t.length;n+=1)Jd(t[n])}}function cd(e){var t,n=pf
hf(function(e){for(var t=e.parent;null!==t;){if(!(2&t.f))return 0===(t.f&su)?t:null
t=t.parent}return null}(e))
try{e.f&=-32769,ld(e),t=Pf(e)}finally{hf(n)}return t}function ud(e){var t=cd(e);(e.equals(t)||(e.v=t,e.wv=Sf()),lf)||(null!==Bu?Dd()&&Bu.set(e,e.v):Ff(e,0===(e.f&eu)?ru:tu))}let dd=new Set
const fd=new Map
let pd=!1
function hd(e,t){return{f:0,v:e,reactions:null,equals:yu,rv:0,wv:0}}function gd(e,t){const n=hd(e)
return vf(n),n}function vd(e,t=!1,n=!0){const r=hd(e)
return t||(r.equals=ku),xu&&n&&null!==Pu&&null!==Pu.l&&(Pu.l.s??=[]).push(r),r}function _d(e,t,n=!1){return null!==uf&&(!df||0!==(uf.f&lu))&&Ou()&&4325394&uf.f&&!gf?.includes(e)&&function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),md(e,n?wd(t):t)}function md(e,t){if(!e.equals(t)){var n=e.v
lf?fd.set(e,t):fd.set(e,n),e.v=t
var r=zu.ensure()
r.capture(e,n),2&e.f&&(0!==(e.f&nu)&&cd(e),Ff(e,0!==(e.f&eu)?tu:ru)),e.wv=Sf(),yd(e,nu),!Ou()||null===pf||0===(pf.f&tu)||96&pf.f||(null===bf?function(e){bf=e}([e]):bf.push(e)),!r.is_fork&&dd.size>0&&!pd&&function(){pd=!1
var e=of
af(!0)
const t=Array.from(dd)
try{for(const e of t)0!==(e.f&tu)&&Ff(e,ru),Ef(e)&&Tf(e)}finally{af(e)}dd.clear()}()}return t}function bd(e){_d(e,e.v+1)}function yd(e,t){var n=e.reactions
if(null!==n)for(var r=Ou(),i=n.length,s=0;s<i;s++){var o=n[s],a=o.f
if(r||o!==pf){var l=0===(a&nu)
if(l&&Ff(o,t),2&a){var c=o
Bu?.delete(c),0===(a&du)&&(a&eu&&(o.f|=du),yd(c,ru))}else l&&(0!==(a&Jc)&&null!==Ju&&Ju.add(o),ed(o))}}}function wd(e){if("object"!=typeof e||null===e||hu in e)return e
const t=Hc(e)
if(t!==qc&&t!==Bc)return e
var n=new Map,r=Rc(e),i=gd(0),s=kf,o=e=>{if(kf===s)return e()
var t=uf,n=kf
ff(null),xf(s)
var r=e()
return ff(t),xf(n),r}
return r&&n.set("length",gd(e.length)),new Proxy(e,{defineProperty(e,t,r){"value"in r&&!1!==r.configurable&&!1!==r.enumerable&&!1!==r.writable||function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}()
var i=n.get(t)
return void 0===i?i=o(()=>{var e=gd(r.value)
return n.set(t,e),e}):_d(i,r.value,!0),!0},deleteProperty(e,t){var r=n.get(t)
if(void 0===r){if(t in e){const e=o(()=>gd(bu))
n.set(t,e),bd(i)}}else _d(r,bu),bd(i)
return!0},get(t,r,i){if(r===hu)return e
var s=n.get(r),a=r in t
if(void 0!==s||a&&!Nc(t,r)?.writable||(s=o(()=>gd(wd(a?t[r]:bu))),n.set(r,s)),void 0!==s){var l=If(s)
return l===bu?void 0:l}return Reflect.get(t,r,i)},getOwnPropertyDescriptor(e,t){var r=Reflect.getOwnPropertyDescriptor(e,t)
if(r&&"value"in r){var i=n.get(t)
i&&(r.value=If(i))}else if(void 0===r){var s=n.get(t),o=s?.v
if(void 0!==s&&o!==bu)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return r},has(e,t){if(t===hu)return!0
var r=n.get(t),i=void 0!==r&&r.v!==bu||Reflect.has(e,t)
if((void 0!==r||null!==pf&&(!i||Nc(e,t)?.writable))&&(void 0===r&&(r=o(()=>gd(i?wd(e[t]):bu)),n.set(t,r)),If(r)===bu))return!1
return i},set(e,t,s,a){var l=n.get(t),c=t in e
if(r&&"length"===t)for(var u=s;u<l.v;u+=1){var d=n.get(u+"")
void 0!==d?_d(d,bu):u in e&&(d=o(()=>gd(bu)),n.set(u+"",d))}void 0===l?c&&!Nc(e,t)?.writable||(_d(l=o(()=>gd(void 0)),wd(s)),n.set(t,l)):(c=l.v!==bu,_d(l,o(()=>wd(s))))
var f=Reflect.getOwnPropertyDescriptor(e,t)
if(f?.set&&f.set.call(a,s),!c){if(r&&"string"==typeof t){var p=n.get("length"),h=Number(t)
Number.isInteger(h)&&h>=p.v&&_d(p,h+1)}bd(i)}return!0},ownKeys(e){If(i)
var t=Reflect.ownKeys(e).filter(e=>{var t=n.get(e)
return void 0===t||t.v!==bu})
for(var[r,s]of n)s.v===bu||r in e||t.push(r)
return t},setPrototypeOf(){!function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}()}})}function kd(e){try{if(null!==e&&"object"==typeof e&&hu in e)return e[hu]}catch{}return e}function xd(e,t){return Object.is(kd(e),kd(t))}var Sd,Ed,Cd,Pd
function Ld(e=""){return document.createTextNode(e)}function $d(e){return Cd.call(e)}function Td(e){return Pd.call(e)}function Od(e,t){return $d(e)}function Id(e,t=!1){var n=$d(e)
return n instanceof Comment&&""===n.data?Td(n):n}function Ad(e,t=1,n=!1){let r=e
for(;t--;)r=Td(r)
return r}let Rd=!1
function Md(e){var t=uf,n=pf
ff(null),hf(null)
try{return e()}finally{ff(t),hf(n)}}function jd(e,t,n,r=n){e.addEventListener(t,()=>Md(n))
const i=e.__on_r
e.__on_r=i?()=>{i(),r(!0)}:()=>r(!0),Rd||(Rd=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Fd(e){null===pf&&(null===uf&&function(){throw new Error("https://svelte.dev/e/effect_orphan")}(),function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}()),lf&&function(){throw new Error("https://svelte.dev/e/effect_in_teardown")}()}function Nd(e,t,n){var r=pf
null!==r&&0!==(r.f&iu)&&(e|=iu)
var i={ctx:Pu,deps:null,nodes_start:null,nodes_end:null,f:e|nu|eu,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,transitions:null,wv:0,ac:null}
if(n)try{Tf(i),i.f|=ou}catch(s){throw Jd(i),s}else null!==t&&ed(i)
var s=i
if(n&&null===s.deps&&null===s.teardown&&null===s.nodes_start&&s.first===s.last&&0===(s.f&uu)&&(s=s.first,0!==(e&Jc)&&0!==(e&au)&&null!==s&&(s.f|=au)),null!==s&&(s.parent=r,null!==r&&function(e,t){var n=t.last
null===n?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}(s,r),null!==uf&&2&uf.f&&0===(e&Xc))){var o=uf;(o.effects??=[]).push(s)}return i}function Dd(){return null!==uf&&!df}function qd(e){const t=Nd(8,null,!1)
return Ff(t,tu),t.teardown=e,t}function Bd(e){Fd()
var t=pf.f
if(!(!uf&&0!==(t&Yc)&&0===(t&ou)))return Hd(e)
var n=Pu;(n.e??=[]).push(e)}function Hd(e){return Nd(1048580,e,!1)}function Ud(e){return Nd(4,e,!1)}function Gd(e,t=0){return Nd(8|t,e,!0)}function Wd(e,t=[],n=[],r=[]){nd(r,t,n,t=>{Nd(8,()=>e(...t.map(If)),!0)})}function zd(e,t=0){return Nd(Jc|t,e,!0)}function Vd(e){return Nd(524320,e,!0)}function Qd(e){var t=e.teardown
if(null!==t){const e=lf,n=uf
cf(!0),ff(null)
try{t.call(null)}finally{cf(e),ff(n)}}}function Kd(e,t=!1){var n=e.first
for(e.first=e.last=null;null!==n;){const e=n.ac
null!==e&&Md(()=>{e.abort(_u)})
var r=n.next
0!==(n.f&Xc)?n.parent=null:Jd(n,t),n=r}}function Jd(e,t=!0){var n=!1
!t&&0===(e.f&cu)||null===e.nodes_start||null===e.nodes_end||(Yd(e.nodes_start,e.nodes_end),n=!0),Kd(e,t&&!n),$f(e,0),Ff(e,su)
var r=e.transitions
if(null!==r)for(const e of r)e.stop()
Qd(e)
var i=e.parent
null!==i&&null!==i.first&&Xd(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Yd(e,t){for(;null!==e;){var n=e===t?null:Td(e)
e.remove(),e=n}}function Xd(e){var t=e.parent,n=e.prev,r=e.next
null!==n&&(n.next=r),null!==r&&(r.prev=n),null!==t&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Zd(e,t,n=!0){var r=[]
tf(e,r,!0),ef(r,()=>{n&&Jd(e),t&&t()})}function ef(e,t){var n=e.length
if(n>0){var r=()=>--n||t()
for(var i of e)i.out(r)}else t()}function tf(e,t,n){if(0===(e.f&iu)){if(e.f^=iu,null!==e.transitions)for(const r of e.transitions)(r.is_global||n)&&t.push(r)
for(var r=e.first;null!==r;){var i=r.next
tf(r,t,!!(0!==(r.f&au)||0!==(r.f&Yc)&&0!==(e.f&Jc))&&n),r=i}}}function nf(e){rf(e,!0)}function rf(e,t){if(0!==(e.f&iu)){e.f^=iu,0===(e.f&tu)&&(Ff(e,nu),ed(e))
for(var n=e.first;null!==n;){var r=n.next
rf(n,!!(0!==(n.f&au)||0!==(n.f&Yc))&&t),n=r}if(null!==e.transitions)for(const n of e.transitions)(n.is_global||t)&&n.in()}}function sf(e,t){for(var n=e.nodes_start,r=e.nodes_end;null!==n;){var i=n===r?null:Td(n)
t.append(n),n=i}}let of=!1
function af(e){of=e}let lf=!1
function cf(e){lf=e}let uf=null,df=!1
function ff(e){uf=e}let pf=null
function hf(e){pf=e}let gf=null
function vf(e){null!==uf&&(null===gf?gf=[e]:gf.push(e))}let _f=null,mf=0,bf=null
let yf=1,wf=0,kf=wf
function xf(e){kf=e}function Sf(){return++yf}function Ef(e){var t=e.f
if(0!==(t&nu))return!0
if(2&t&&(e.f&=-32769),0!==(t&ru)){var n=e.deps
if(null!==n)for(var r=n.length,i=0;i<r;i++){var s=n[i]
if(Ef(s)&&ud(s),s.wv>e.wv)return!0}0!==(t&eu)&&null===Bu&&Ff(e,tu)}return!1}function Cf(e,t,n=!0){var r=e.reactions
if(null!==r&&!gf?.includes(e))for(var i=0;i<r.length;i++){var s=r[i]
2&s.f?Cf(s,t,!1):t===s&&(n?Ff(s,nu):0!==(s.f&tu)&&Ff(s,ru),ed(s))}}function Pf(e){var t=_f,n=mf,r=bf,i=uf,s=gf,o=Pu,a=df,l=kf,c=e.f
_f=null,mf=0,bf=null,uf=96&c?null:e,gf=null,Lu(e.ctx),df=!1,kf=++wf,null!==e.ac&&(Md(()=>{e.ac.abort(_u)}),e.ac=null)
try{e.f|=fu
var u=(0,e.fn)(),d=e.deps
if(null!==_f){var f
if($f(e,mf),null!==d&&mf>0)for(d.length=mf+_f.length,f=0;f<_f.length;f++)d[mf+f]=_f[f]
else e.deps=d=_f
if(of&&Dd()&&0!==(e.f&eu))for(f=mf;f<d.length;f++)(d[f].reactions??=[]).push(e)}else null!==d&&mf<d.length&&($f(e,mf),d.length=mf)
if(Ou()&&null!==bf&&!df&&null!==d&&!(6146&e.f))for(f=0;f<bf.length;f++)Cf(bf[f],e)
return null!==i&&i!==e&&(wf++,null!==bf&&(null===r?r=bf:r.push(...bf))),0!==(e.f&pu)&&(e.f^=pu),u}catch(e){return ju(e)}finally{e.f^=fu,_f=t,mf=n,bf=r,uf=i,gf=s,Lu(o),df=a,kf=l}}function Lf(e,t){let n=t.reactions
if(null!==n){var r=Mc.call(n,e)
if(-1!==r){var i=n.length-1
0===i?n=t.reactions=null:(n[r]=n[i],n.pop())}}null===n&&2&t.f&&(null===_f||!_f.includes(t))&&(Ff(t,ru),0!==(t.f&eu)&&(t.f^=eu,t.f&=-32769),ld(t),$f(t,0))}function $f(e,t){var n=e.deps
if(null!==n)for(var r=t;r<n.length;r++)Lf(e,n[r])}function Tf(e){var t=e.f
if(0===(t&su)){Ff(e,tu)
var n=pf,r=of
pf=e,of=!0
try{0!==(t&Jc)?function(e){for(var t=e.first;null!==t;){var n=t.next
0===(t.f&Yc)&&Jd(t),t=n}}(e):Kd(e),Qd(e)
var i=Pf(e)
e.teardown="function"==typeof i?i:null,e.wv=yf}finally{of=r,pf=n}}}async function Of(){await Promise.resolve(),Vu()}function If(e){var t=!!(2&e.f)
if(null!==uf&&!df&&(!(null!==pf&&0!==(pf.f&su))&&!gf?.includes(e))){var n=uf.deps
if(0!==(uf.f&fu))e.rv<wf&&(e.rv=wf,null===_f&&null!==n&&n[mf]===e?mf++:null===_f?_f=[e]:_f.includes(e)||_f.push(e))
else{(uf.deps??=[]).push(e)
var r=e.reactions
null===r?e.reactions=[uf]:r.includes(uf)||r.push(uf)}}if(lf){if(fd.has(e))return fd.get(e)
if(t){var i=e,s=i.v
return(0===(i.f&tu)&&null!==i.reactions||Rf(i))&&(s=cd(i)),fd.set(i,s),s}}else if(t){if(i=e,Bu?.has(i))return Bu.get(i)
Ef(i)&&ud(i),of&&Dd()&&0===(i.f&eu)&&Af(i)}else if(Bu?.has(e))return Bu.get(e)
if(0!==(e.f&pu))throw e.v
return e.v}function Af(e){if(null!==e.deps){e.f^=eu
for(const t of e.deps)(t.reactions??=[]).push(e),2&t.f&&0===(t.f&eu)&&Af(t)}}function Rf(e){if(e.v===bu)return!0
if(null===e.deps)return!1
for(const t of e.deps){if(fd.has(t))return!0
if(2&t.f&&Rf(t))return!0}return!1}function Mf(e){var t=df
try{return df=!0,e()}finally{df=t}}const jf=-7169
function Ff(e,t){e.f=e.f&jf|t}function Nf(e){if("object"==typeof e&&e&&!(e instanceof EventTarget))if(hu in e)Df(e)
else if(!Array.isArray(e))for(let t in e){const n=e[t]
"object"==typeof n&&n&&hu in n&&Df(n)}}function Df(e,t=new Set){if(!("object"!=typeof e||null===e||e instanceof EventTarget||t.has(e))){t.add(e),e instanceof Date&&e.getTime()
for(let n in e)try{Df(e[n],t)}catch(e){}const n=Hc(e)
if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const t=Dc(n)
for(let n in t){const r=t[n].get
if(r)try{r.call(e)}catch(e){}}}}}const qf=["touchstart","touchmove"]
function Bf(e){return qf.includes(e)}const Hf=new Set,Uf=new Set
function Gf(e,t,n,r,i){var s={capture:r,passive:i},o=function(e,t,n,r={}){function i(e){if(r.capture||Vf.call(t,e),!e.cancelBubble)return Md(()=>n?.call(this,e))}return e.startsWith("pointer")||e.startsWith("touch")||"wheel"===e?Ru(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}(e,t,n,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&qd(()=>{t.removeEventListener(e,o,s)})}function Wf(e){for(var t=0;t<e.length;t++)Hf.add(e[t])
for(var n of Uf)n(e)}let zf=null
function Vf(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],s=i[0]||e.target
zf=e
var o=0,a=zf===e&&e.__root
if(a){var l=i.indexOf(a)
if(-1!==l&&(t===document||t===window))return void(e.__root=t)
var c=i.indexOf(t)
if(-1===c)return
l<=c&&(o=l)}if((s=i[o]||e.target)!==t){Fc(e,"currentTarget",{configurable:!0,get:()=>s||n})
var u=uf,d=pf
ff(null),hf(null)
try{for(var f,p=[];null!==s;){var h=s.assignedSlot||s.parentNode||s.host||null
try{var g=s["__"+r]
null==g||s.disabled&&e.target!==s||g.call(s,e)}catch(e){f?p.push(e):f=e}if(e.cancelBubble||h===t||null===h)break
s=h}if(f){for(let e of p)queueMicrotask(()=>{throw e})
throw f}}finally{e.__root=t,delete e.currentTarget,ff(u),hf(d)}}}function Qf(e){var t=document.createElement("template")
return t.innerHTML=e.replaceAll("<!>","\x3c!----\x3e"),t.content}function Kf(e,t){var n=pf
null===n.nodes_start&&(n.nodes_start=e,n.nodes_end=t)}function Jf(e,t){var n,r=!!(1&t),i=!!(2&t),s=!e.startsWith("<!>")
return()=>{void 0===n&&(n=Qf(s?e:"<!>"+e),r||(n=$d(n)))
var t=i||Ed?document.importNode(n,!0):n.cloneNode(!0)
r?Kf($d(t),t.lastChild):Kf(t,t)
return t}}function Yf(e=""){var t=Ld(e+"")
return Kf(t,t),t}function Xf(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Ld()
return e.append(t,n),Kf(t,n),e}function Zf(e,t){null!==e&&e.before(t)}let ep=!0
function tp(e,t){var n=null==t?"":"object"==typeof t?t+"":t
n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}function np(e,t){return function(e,{target:t,anchor:n,props:r={},events:i,context:s,intro:o=!0}){!function(){if(void 0===Sd){Sd=window,Ed=/Firefox/.test(navigator.userAgent)
var e=Element.prototype,t=Node.prototype,n=Text.prototype
Cd=Nc(t,"firstChild").get,Pd=Nc(t,"nextSibling").get,Uc(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Uc(n)&&(n.__t=void 0)}}()
var a=new Set,l=e=>{for(var n=0;n<e.length;n++){var r=e[n]
if(!a.has(r)){a.add(r)
var i=Bf(r)
t.addEventListener(r,Vf,{passive:i})
var s=rp.get(r)
void 0===s?(document.addEventListener(r,Vf,{passive:i}),rp.set(r,1)):rp.set(r,s+1)}}}
l(jc(Hf)),Uf.add(l)
var c=void 0,u=function(e){zu.ensure()
const t=Nd(524352,e,!0)
return(e={})=>new Promise(n=>{e.outro?Zd(t,()=>{Jd(t),n(void 0)}):(Jd(t),n(void 0))})}(()=>{var u=n??t.appendChild(Ld())
return function(e,t,n){new td(e,t,n)}(u,{pending:()=>{}},t=>{s&&($u({}),Pu.c=s)
i&&(r.$$events=i),ep=o,c=e(t,r)||{},ep=!0,s&&Tu()}),()=>{for(var e of a){t.removeEventListener(e,Vf)
var r=rp.get(e)
0===--r?(document.removeEventListener(e,Vf),rp.delete(e)):rp.set(e,r)}Uf.delete(l),u!==n&&u.parentNode?.removeChild(u)}})
return ip.set(c,u),c}(e,t)}const rp=new Map
let ip=new WeakMap
function sp(e,t){const n=ip.get(e)
return n?(ip.delete(e),n(t)):Promise.resolve()}class op{anchor
#A=new Map
#R=new Map
#M=new Map
#j=new Set
#F=!0
constructor(e,t=!0){this.anchor=e,this.#F=t}#d=()=>{var e=Du
if(this.#A.has(e)){var t=this.#A.get(e),n=this.#R.get(t)
if(n)nf(n),this.#j.delete(t)
else{var r=this.#M.get(t)
r&&(this.#R.set(t,r.effect),this.#M.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(const[t,n]of this.#A){if(this.#A.delete(t),t===e)break
const r=this.#M.get(n)
r&&(Jd(r.effect),this.#M.delete(n))}for(const[e,r]of this.#R){if(e===t||this.#j.has(e))continue
const i=()=>{if(Array.from(this.#A.values()).includes(e)){var t=document.createDocumentFragment()
sf(r,t),t.append(Ld()),this.#M.set(e,{effect:r,fragment:t})}else Jd(r)
this.#j.delete(e),this.#R.delete(e)}
this.#F||!n?(this.#j.add(e),Zd(r,i,!1)):i()}}}
#N=e=>{this.#A.delete(e)
const t=Array.from(this.#A.values())
for(const[e,n]of this.#M)t.includes(e)||(Jd(n.effect),this.#M.delete(e))}
ensure(e,t){var n=Du
!t||this.#R.has(e)||this.#M.has(e)||this.#R.set(e,Vd(()=>t(this.anchor)))
this.#A.set(n,e),this.#d()}}function ap(e,t,n,r,i){var s=Ou(),o=bu,a=s?hd(o):vd(o,!1,!1),l=s?hd(o):vd(o,!1,!1),c=new op(e)
zd(()=>{var e=t(),s=!1
if(function(e){return"function"==typeof e?.then}(e)){var o=rd(),u=!1
const t=e=>{if(!s){u=!0,o(!1),zu.ensure()
try{e()}finally{id(),Wu||Vu()}}}
e.then(e=>{t(()=>{md(a,e),c.ensure(1,r&&(e=>r(e,a)))})},e=>{t(()=>{if(md(l,e),c.ensure(1,i&&(e=>i(e,l))),!i)throw l.v})}),Ru(()=>{u||t(()=>{c.ensure(0,n)})})}else md(a,e),c.ensure(1,r&&(e=>r(e,a)))
return()=>{s=!0}})}function lp(e,t,n=!1){var r=new op(e)
function i(e,t){r.ensure(e,t)}zd(()=>{var e=!1
t((t,n=!0)=>{e=!0,i(n,t)}),e||i(!1,null)},n?au:0)}function cp(e,t){Gd(()=>{var n=t()
for(var r in n){var i=n[r]
i?e.style.setProperty(r,i):e.style.removeProperty(r)}})}function up(e,t){return t}function dp(e,t,n,r,i,s=null){var o=e,a=new Map,l=null,c=!!(1&t),u=!!(2&t)
!(4&t)||(o=e.appendChild(Ld()))
var d,f=null,p=ad(()=>{var e=n()
return Rc(e)?e:null==e?[]:jc(e)}),h=!0
function g(){!function(e,t,n,r,i){var s,o,a,l,c,u=!!(8&r),d=t.length,f=e.items,p=e.first,h=null,g=[],v=[]
if(u)for(c=0;c<d;c+=1)a=i(t[c],c),l=f.get(a),l.a?.measure(),(o??=new Set).add(l)
for(c=0;c<d;c+=1)if(a=i(t[c],c),l=f.get(a),e.first??=l,l.o){if(0!==(l.e.f&iu)&&(nf(l.e),u&&(l.a?.unfix(),(o??=new Set).delete(l))),l!==p){if(void 0!==s&&s.has(l)){if(g.length<v.length){var _,m=v[0]
h=m.prev
var b=g[0],y=g[g.length-1]
for(_=0;_<g.length;_+=1)pp(g[_],m,n)
for(_=0;_<v.length;_+=1)s.delete(v[_])
hp(e,b.prev,y.next),hp(e,h,b),hp(e,y,m),p=m,h=y,c-=1,g=[],v=[]}else s.delete(l),pp(l,p,n),hp(e,l.prev,l.next),hp(e,l,null===h?e.first:h.next),hp(e,h,l),h=l
continue}for(g=[],v=[];null!==p&&p.k!==a;)0===(p.e.f&iu)&&(s??=new Set).add(p),v.push(p),p=p.next
if(null===p)continue
l=p}g.push(l),h=l,p=l.next}else{l.o=!0
var w=h?h.next:p
hp(e,h,l),hp(e,l,w),pp(l,w,n),g=[],v=[],p=(h=l).next}if(null!==p||void 0!==s){for(var k=void 0===s?[]:jc(s);null!==p;)0===(p.e.f&iu)&&k.push(p),p=p.next
var x=k.length
if(x>0){var S=4&r&&0===d?n:null
if(u){for(c=0;c<x;c+=1)k[c].a?.measure()
for(c=0;c<x;c+=1)k[c].a?.fix()}!function(e,t,n){for(var r=[],i=t.length,s=0;s<i;s++)tf(t[s].e,r,!0)
ef(r,()=>{var s=0===r.length&&null!==n
if(s){var o=n,a=o.parentNode
a.textContent="",a.append(o),e.items.clear(),hp(e,t[0].prev,t[i-1].next)}for(var l=0;l<i;l++){var c=t[l]
s||(e.items.delete(c.k),hp(e,c.prev,c.next)),Jd(c.e,!s)}e.first===t[0]&&(e.first=t[0].prev)})}(e,k,S)}}u&&Ru(()=>{if(void 0!==o)for(l of o)l.a?.apply()})}(_,d,o,t,r),null!==f&&(0===d.length?(f.fragment?(o.before(f.fragment),f.fragment=null):nf(f.effect),v.first=f.effect):Zd(f.effect,()=>{f=null}))}var v=zd(()=>{for(var e=(d=If(p)).length,v=new Set,_=null,m=0;m<e;m+=1){var b=d[m],y=r(b,m),w=h?null:a.get(y)
w?(c&&md(w.v,b),u?md(w.i,m):w.i=m):(w=fp(h?o:null,_,b,y,m,i,t,n),h&&(w.o=!0,null===_?l=w:_.next=w,_=w),a.set(y,w)),v.add(y)}if(0===e&&s&&!f)if(h)f={fragment:null,effect:Vd(()=>s(o))}
else{var k=document.createDocumentFragment(),x=Ld()
k.append(x),f={fragment:k,effect:Vd(()=>s(x))}}h||g(),If(p)}),_={effect:v,items:a,first:l}
h=!1}function fp(e,t,n,r,i,s,o,a){var l=!!(1&o)?!(16&o)?vd(n,!1,!1):hd(n):n,c=2&o?hd(i):i,u={i:c,v:l,k:r,a:null,e:null,o:!1,prev:t,next:null}
try{if(null===e)document.createDocumentFragment().append(e=Ld())
return u.e=Vd(()=>s(e,l,c,a)),null!==t&&(t.next=u),u}finally{}}function pp(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,s=e.e.nodes_start;null!==s&&s!==r;){var o=Td(s)
i.before(s),s=o}}function hp(e,t,n){null===t?(e.first=n,e.effect.first=n&&n.e):(t.e.next&&(t.e.next.prev=null),t.next=n,t.e.next=n&&n.e),null===n?e.effect.last=t&&t.e:(n.e.prev&&(n.e.prev.next=null),n.prev=t,n.e.prev=t&&t.e)}function gp(e,t,n=!1,r=!1,i=!1){var s=e,o=""
Wd(()=>{var e=pf
if(o!==(o=t()??"")&&(null!==e.nodes_start&&(Yd(e.nodes_start,e.nodes_end),e.nodes_start=e.nodes_end=null),""!==o)){var i=o+""
n?i=`<svg>${i}</svg>`:r&&(i=`<math>${i}</math>`)
var a=Qf(i)
if((n||r)&&(a=$d(a)),Kf($d(a),a.lastChild),n||r)for(;$d(a);)s.before($d(a))
else s.before(a)}})}function vp(e,t,...n){var r=new op(e)
zd(()=>{const e=t()??null
r.ensure(e,e&&(t=>e(t,...n)))},au)}function _p(e,t,n){var r=new op(e)
zd(()=>{var e=t()??null
r.ensure(e,e&&(t=>n(t,e)))},au)}function mp(e,t,n){Ud(()=>{var r=Mf(()=>t(e,n?.())||{})
if(n&&r?.update){var i=!1,s={}
Gd(()=>{var e=n()
Nf(e),i&&wu(s,e)&&(s=e,r.update(e))}),i=!0}if(r?.destroy)return()=>r.destroy()})}function bp(e){var t,n,r=""
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
t[i]!==s&&(null==n[i]?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function Cp(e,t,n,r){if(e.__style!==t){var i=function(e,t){if(t){var n,r,i=""
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
return r}function Pp(e,t,n=!1){if(e.multiple){if(null==t)return
if(!Rc(t))return void console.warn("https://svelte.dev/e/select_multiple_invalid_value")
for(var r of e.options)r.selected=t.includes($p(r))}else{for(r of e.options){if(xd($p(r),t))return void(r.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}}function Lp(e,t,n=t){var r=new WeakSet,i=!0
jd(e,"change",t=>{var i,s=t?"[selected]":":checked"
if(e.multiple)i=[].map.call(e.querySelectorAll(s),$p)
else{var o=e.querySelector(s)??e.querySelector("option:not([disabled])")
i=o&&$p(o)}n(i),null!==Du&&r.add(Du)}),Ud(()=>{var s=t()
if(e===document.activeElement){var o=qu??Du
if(r.has(o))return}if(Pp(e,s,i),i&&void 0===s){var a=e.querySelector(":checked")
null!==a&&(s=$p(a),n(s))}e.__value=s,i=!1}),function(e){var t=new MutationObserver(()=>{Pp(e,e.__value)})
t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),qd(()=>{t.disconnect()})}(e)}function $p(e){return"__value"in e?e.__value:e.value}const Tp=Symbol("is custom element"),Op=Symbol("is html")
function Ip(e,t){var n=Rp(e)
n.value!==(n.value=t??void 0)&&(e.value!==t||0===t&&"PROGRESS"===e.nodeName)&&(e.value=t??"")}function Ap(e,t,n,r){var i=Rp(e)
i[t]!==(i[t]=n)&&("loading"===t&&(e[vu]=n),null==n?e.removeAttribute(t):"string"!=typeof n&&function(e){var t,n=e.getAttribute("is")||e.nodeName,r=Mp.get(n)
if(r)return r
Mp.set(n,r=[])
var i=e,s=Element.prototype
for(;s!==i;){for(var o in t=Dc(i))t[o].set&&r.push(o)
i=Hc(i)}return r}(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Rp(e){return e.__attributes??={[Tp]:e.nodeName.includes("-"),[Op]:"http://www.w3.org/1999/xhtml"===e.namespaceURI}}var Mp=new Map
const jp={tick:e=>requestAnimationFrame(e),now:()=>performance.now(),tasks:new Set}
function Fp(){const e=jp.now()
jp.tasks.forEach(t=>{t.c(e)||(jp.tasks.delete(t),t.f())}),0!==jp.tasks.size&&jp.tick(Fp)}function Np(e,t){Md(()=>{e.dispatchEvent(new CustomEvent(t))})}function Dp(e){if("float"===e)return"cssFloat"
if("offset"===e)return"cssOffset"
if(e.startsWith("--"))return e
const t=e.split("-")
return 1===t.length?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function qp(e){const t={},n=e.split(";")
for(const e of n){const[n,r]=e.split(":")
if(!n||void 0===r)break
t[Dp(n.trim())]=r.trim()}return t}const Bp=e=>e
function Hp(e,t,n,r){var i,s,o,a=!!(4&e),l=t.inert,c=t.style.overflow
function u(){return Md(()=>i??=n()(t,r?.()??{},{direction:"both"}))}var d={is_global:a,in(){t.inert=l,Np(t,"introstart"),s=Up(t,u(),o,1,()=>{Np(t,"introend"),s?.abort(),s=i=void 0,t.style.overflow=c})},out(e){t.inert=!0,Np(t,"outrostart"),o=Up(t,u(),s,0,()=>{Np(t,"outroend"),e?.()})},stop:()=>{s?.abort(),o?.abort()}},f=pf
if((f.transitions??=[]).push(d),ep){var p=a
if(!p){for(var h=f.parent;h&&0!==(h.f&au);)for(;(h=h.parent)&&0===(h.f&Jc););p=!h||0!==(h.f&ou)}p&&Ud(()=>{Mf(()=>d.in())})}}function Up(e,t,n,r,i){var s=1===r
if(Gc(t)){var o,a=!1
return Ru(()=>{if(!a){var l=t({direction:s?"in":"out"})
o=Up(e,l,n,r,i)}}),{abort:()=>{a=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(n?.deactivate(),!t?.duration)return i(),{abort:Wc,deactivate:Wc,reset:Wc,t:()=>r}
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
return u(e,1-e),!0})}(g=e.animate(l,{duration:a,fill:"forwards"})).onfinish=()=>{h=()=>r,u?.(r,1-r),i()}},{abort:()=>{g&&(g.cancel(),g.effect=null,g.onfinish=Wc)},deactivate:()=>{i=Wc},reset:()=>{0===r&&u?.(1,0)},t:()=>h()}}function Gp(e,t,n=t){var r=new WeakSet
jd(e,"input",async i=>{var s=i?e.defaultValue:e.value
if(s=Qp(e)?Kp(s):s,n(s),null!==Du&&r.add(Du),await Of(),s!==(s=t())){var o=e.selectionStart,a=e.selectionEnd,l=e.value.length
if(e.value=s??"",null!==a){var c=e.value.length
o===a&&a===l&&c>l?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=o,e.selectionEnd=Math.min(a,c))}}}),null==Mf(t)&&e.value&&(n(Qp(e)?Kp(e.value):e.value),null!==Du&&r.add(Du)),Gd(()=>{var n=t()
if(e===document.activeElement){var i=qu??Du
if(r.has(i))return}Qp(e)&&n===Kp(e.value)||("date"!==e.type||n||e.value)&&n!==e.value&&(e.value=n??"")})}const Wp=new Set
function zp(e,t,n,r,i=r){var s="checkbox"===n.getAttribute("type"),o=e
if(null!==t)for(var a of t)o=o[a]??=[]
o.push(n),jd(n,"change",()=>{var e=n.__value
s&&(e=function(e,t,n){for(var r=new Set,i=0;i<e.length;i+=1)e[i].checked&&r.add(e[i].__value)
n||r.delete(t)
return Array.from(r)}(o,e,n.checked)),i(e)},()=>i(s?[]:null)),Gd(()=>{var e=r()
s?(e=e||[],n.checked=e.includes(n.__value)):n.checked=xd(n.__value,e)}),qd(()=>{var e=o.indexOf(n);-1!==e&&o.splice(e,1)}),Wp.has(o)||(Wp.add(o),Ru(()=>{o.sort((e,t)=>4===e.compareDocumentPosition(t)?-1:1),Wp.delete(o)})),Ru(()=>{})}function Vp(e,t,n=t){jd(e,"change",t=>{var r=t?e.defaultChecked:e.checked
n(r)}),null==Mf(t)&&n(e.checked),Gd(()=>{var n=t()
e.checked=Boolean(n)})}function Qp(e){var t=e.type
return"number"===t||"range"===t}function Kp(e){return""===e?null:+e}class Jp{#D=new WeakMap
#q
#B
static entries=new WeakMap
constructor(e){this.#B=e}observe(e,t){var n=this.#D.get(e)||new Set
return n.add(t),this.#D.set(e,n),this.#H().observe(e,this.#B),()=>{var n=this.#D.get(e)
n.delete(t),0===n.size&&(this.#D.delete(e),this.#q.unobserve(e))}}#H(){return this.#q??(this.#q=new ResizeObserver(e=>{for(var t of e)for(var n of(Jp.entries.set(t.target,t),this.#D.get(t.target)||[]))n(t)}))}}var Yp=new Jp({box:"border-box"})
function Xp(e,t,n){var r=Yp.observe(e,()=>n(e[t]))
Ud(()=>(Mf(()=>n(e[t])),r))}function Zp(e,t){return e===t||e?.[hu]===t}function eh(e={},t,n,r){return Ud(()=>{var r,i
return Gd(()=>{r=i,i=[],Mf(()=>{e!==n(...i)&&(t(e,...i),r&&Zp(n(...r),e)&&t(null,...r))})}),()=>{Ru(()=>{i&&Zp(n(...i),e)&&t(null,...i)})}}),e}function th(e=!1){const t=Pu,n=t.l.u
if(!n)return
let r=()=>Nf(t.s)
if(e){let e=0,n={}
const i=sd(()=>{let r=!1
const i=t.s
for(const e in i)i[e]!==n[e]&&(n[e]=i[e],r=!0)
return r&&e++,e})
r=()=>If(i)}n.b.length&&function(e){Fd(),Nd(1048584,e,!0)}(()=>{nh(t,r),Vc(n.b)}),Bd(()=>{const e=Mf(()=>n.m.map(zc))
return()=>{for(const t of e)"function"==typeof t&&t()}}),n.a.length&&Bd(()=>{nh(t,r),Vc(n.a)})}function nh(e,t){if(e.l.s)for(const t of e.l.s)If(t)
t()}function rh(e,t,n){if(null==e)return t(void 0),n&&n(void 0),Wc
const r=Mf(()=>e.subscribe(t,n))
return r.unsubscribe?()=>r.unsubscribe():r}const ih=[]
function sh(e,t=Wc){let n=null
const r=new Set
function i(t){if(wu(e,t)&&(e=t,n)){const t=!ih.length
for(const t of r)t[1](),ih.push(t,e)
if(t){for(let e=0;e<ih.length;e+=2)ih[e][0](ih[e+1])
ih.length=0}}}function s(t){i(t(e))}return{set:i,update:s,subscribe:function(o,a=Wc){const l=[o,a]
return r.add(l),1===r.size&&(n=t(i,s)||Wc),o(e),()=>{r.delete(l),0===r.size&&n&&(n(),n=null)}}}}function oh(e,t,n){const r=!Array.isArray(e),i=r?[e]:e
if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const s=t.length<2
return function(e,t){return{subscribe:sh(e,t).subscribe}}(n,(e,n)=>{let o=!1
const a=[]
let l=0,c=Wc
const u=()=>{if(l)return
c()
const i=t(r?a[0]:a,e,n)
s?e(i):c="function"==typeof i?i:Wc},d=i.map((e,t)=>rh(e,e=>{a[t]=e,l&=~(1<<t),o&&u()},()=>{l|=1<<t}))
return o=!0,u(),function(){Vc(d),c(),o=!1}})}function ah(e){let t
return rh(e,e=>t=e)(),t}let lh=!1,ch=Symbol()
function uh(e,t,n){const r=n[t]??={store:null,source:vd(void 0),unsubscribe:Wc}
if(r.store!==e&&!(ch in n))if(r.unsubscribe(),r.store=e??null,null==e)r.source.v=void 0,r.unsubscribe=Wc
else{var i=!0
r.unsubscribe=rh(e,e=>{i?r.source.v=e:_d(r.source,e)}),i=!1}return e&&ch in n?ah(e):If(r.source)}function dh(e,t){return e.set(t),t}function fh(){const e={}
return[e,function(){qd(()=>{for(var t in e){e[t].unsubscribe()}Fc(e,ch,{enumerable:!1,value:!0})})}]}const ph={get(e,t){let n=e.props.length
for(;n--;){let r=e.props[n]
if(Gc(r)&&(r=r()),"object"==typeof r&&null!==r&&t in r)return r[t]}},set(e,t,n){let r=e.props.length
for(;r--;){let i=e.props[r]
Gc(i)&&(i=i())
const s=Nc(i,t)
if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length
for(;n--;){let r=e.props[n]
if(Gc(r)&&(r=r()),"object"==typeof r&&null!==r&&t in r){const e=Nc(r,t)
return e&&!e.configurable&&(e.configurable=!0),e}}},has(e,t){if(t===hu||t===gu)return!1
for(let n of e.props)if(Gc(n)&&(n=n()),null!=n&&t in n)return!0
return!1},ownKeys(e){const t=[]
for(let n of e.props)if(Gc(n)&&(n=n()),n){for(const e in n)t.includes(e)||t.push(e)
for(const e of Object.getOwnPropertySymbols(n))t.includes(e)||t.push(e)}return t}}
function hh(e,t,n,r){var i,s,o=!xu||!!(2&n),a=!!(8&n),l=!!(16&n),c=r,u=!0,d=()=>(u&&(u=!1,c=l?Mf(r):r),c)
if(a){var f=hu in e||gu in e
i=Nc(e,t)?.set??(f&&t in e?n=>e[t]=n:void 0)}var p,h=!1
if(a?[s,h]=function(e){var t=lh
try{return lh=!1,[e(),lh]}finally{lh=t}}(()=>e[t]):s=e[t],void 0===s&&void 0!==r&&(s=d(),i&&(o&&function(){throw new Error("https://svelte.dev/e/props_invalid_value")}(),i(s))),p=o?()=>{var n=e[t]
return void 0===n?d():(u=!0,n)}:()=>{var n=e[t]
return void 0!==n&&(c=void 0),void 0===n?c:n},o&&!(4&n))return p
if(i){var g=e.$$legacy
return function(e,t){return arguments.length>0?(o&&t&&!g&&!h||i(t?p():e),e):p()}}var v=!1,_=(1&n?sd:ad)(()=>(v=!1,p()))
a&&If(_)
var m=pf
return function(e,t){if(arguments.length>0){const n=t?If(_):o&&a?wd(e):e
return _d(_,n),v=!0,void 0!==c&&(c=n),e}return lf&&v||0!==(m.f&su)?_.v:If(_)}}function gh(e){null===Pu&&mu(),xu&&null!==Pu.l?function(e){var t=e.l
return t.u??={a:[],b:[],m:[]}}(Pu).m.push(e):Bd(()=>{const t=Mf(e)
if("function"==typeof t)return t})}function vh(e){null===Pu&&mu(),gh(()=>()=>Mf(e))}const _h=sh("")
"undefined"!=typeof window&&((window.__svelte??={}).v??=new Set).add("5")
const mh=e=>e
function bh(e){const t=e-1
return t*t*t+1}function yh(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function wh(e,{delay:t=0,duration:n=400,easing:r=mh}={}){const i=+getComputedStyle(e).opacity
return{delay:t,duration:n,easing:r,css:e=>"opacity: "+e*i}}function kh(e,{delay:t=0,duration:n=400,easing:r=bh,x:i=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-o),[d,f]=yh(i),[p,h]=yh(s)
return{delay:t,duration:n,easing:r,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*d}${f}, ${(1-e)*p}${h});\n\t\t\topacity: ${l-u*t}`}}function xh(e,{delay:t=0,duration:n=400,easing:r=bh,axis:i="y"}={}){const s=getComputedStyle(e),o=+s.opacity,a="y"===i?"height":"width",l=parseFloat(s[a]),c="y"===i?["top","bottom"]:["left","right"],u=c.map(e=>`${e[0].toUpperCase()}${e.slice(1)}`),d=parseFloat(s[`padding${u[0]}`]),f=parseFloat(s[`padding${u[1]}`]),p=parseFloat(s[`margin${u[0]}`]),h=parseFloat(s[`margin${u[1]}`]),g=parseFloat(s[`border${u[0]}Width`]),v=parseFloat(s[`border${u[1]}Width`])
return{delay:t,duration:n,easing:r,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*o};${a}: ${e*l}px;padding-${c[0]}: ${e*d}px;padding-${c[1]}: ${e*f}px;margin-${c[0]}: ${e*p}px;margin-${c[1]}: ${e*h}px;border-${c[0]}-width: ${e*g}px;border-${c[1]}-width: ${e*v}px;min-${a}: 0`}}var Sh=Jf('<div role="alert" class="svelte-8uspok"><p class="svelte-8uspok"> </p></div>')
function Eh(e,t){$u(t,!0)
const n=()=>uh(_h,"$alert",r),[r,i]=fh()
let s=hh(t,"ms",3,3e3),o=gd(!1),a=0,l=gd("")
const c=(e,t)=>{clearTimeout(a),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
_d(l,`translate(${t}px, ${e.offsetTop}px)`),_d(o,!0)}(),t>0&&(a=setTimeout(()=>{_d(o,!1),dh(_h,"")},t))):_d(o,!1)}
Bd(()=>{c(n(),s())}),vh(()=>clearTimeout(a))
var u=Xf(),d=Id(u),f=e=>{var t=Sh()
let r
t.__click=()=>{_d(o,!1)}
var i=Od(t),s=Od(i)
Wd(()=>{r=Cp(t,"",r,{transform:If(l)}),tp(s,n())}),Hp(3,t,()=>kh,()=>({delay:250,duration:300,x:0,y:-100,opacity:.5})),Zf(e,t)}
lp(d,e=>{If(o)&&e(f)}),Zf(e,u),Tu(),i()}Wf(["click"])
let Ch=!1
function Ph(e){e&&(Ch||(Ch=!0,np(Eh,{target:document.body})),_h.set(e))}function Lh(e,t){return Array.from(e,t)}function $h(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function Th(e,t){return Lh($h(e,t))}function Oh(e){return e.trim()}function Ih(e){const t=n(e)
if(Gl(t))return Oh(t)}function Ah(e,t){return Ih(t).includes(e)}function Rh(e,...t){return(...n)=>e(...t,...n)}let Mh=0,jh=0,Fh=0
function Nh(){return Mh||(Mh=t("pCL")),Mh}function Dh(){return jh||(jh=t("pCC")),jh}function qh(){return Fh||(Fh=t("pCR")),Fh}function Bh(){const e=Th("a",Nh()).filter(function(e){return Rh(Ah,e)}("message"))
e.length&&async function(){const e=new Audio(Hl("defaultMessageSound"))
try{await e.play()}catch(e){Ph("Message Sound Not Allowed")}}()}function Hh(e,t,n,r){var i
fc(e,t,n,{once:!0,...(i=r,Ul(i)?{capture:i}:i)})}let Uh=0,Gh=0,Wh=0,zh=0,Vh=0,Qh=0
function Kh(e){Gh=e.clientX,Wh=e.clientY}function Jh(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(Uh,null).transform)
zh=e[0]-Gh,Vh=e[1]-Wh}function Yh(e){e.clientX===Gh&&e.clientY===Wh||(Uh.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+zh).toString()}, ${(e.clientY+Vh).toString()})`,Kh(e))}function Xh(e){return function(e){const t=performance.now()
t-Qh>16&&(Yh(e),Qh=t)}(e),e.preventDefault(),!1}function Zh(e){return Yh(e),function(e,t,n,r){e instanceof EventTarget&&e.removeEventListener(t,n,r)}(document.body,"dragover",Xh),e.preventDefault(),!1}function eg(e,t){!function(e,t){Uh=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),Kh(t),Jh(),Qh=0,t.dataTransfer.setData("text/plain",""),fc(document.body,"dragover",Xh),Hh(document.body,"drop",Zh)}function tg(e,t){e.draggable=!0,fc(e,"dragstart",Rh(eg,t))}function ng(e){return String(e).replaceAll(" ","_")}const rg={}
function ig(e,t,n){if(!e)return
const r=function(e,t){let n=ng(e)
return t&&(n+=`__${ng(t)}`),n}(e,t),i=function(e,t){let n=e
return t&&(n+=`__${ng(t)}`),n}(r,n)
rg[i]||(rg[i]=!0,Lo(r,function(e){return e?{eventLabel:e}:null}(n)))}let sg=0
function og(e){const t=l(/\sguildId: (?<id>\d{1,6}),/,n(e))
t&&(sg=Number(t))}function ag(){return sg||Th("script",document.body).forEach(og),sg}function lg(e){return Object.entries(e)}function cg(e,t,[n,r]){Jl(r)&&null!==r?e(t[n],r):t[n]=r}function ug(e,t){lg(t).forEach(Rh(cg,ug,e))}function dg(e,t){const n=document.createElement(e)
return t&&ug(n,t),n}function fg(e){return dg("div",e)}function pg(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function hg(e,t){return Lh(pg(e,t))}function gg(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function vg(e,t){t instanceof Element&&(t.innerHTML=String(e))}const _g={id:"content",style:{display:"none"}},mg={width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}
function bg(e){let n=t("content")
n?vg("",n):(n=fg(_g),gg(document.body,n)),$(n).dialog(mg),hg("ui-dialog-titlebar-close").forEach(e=>e.blur()),e(n)}async function yg(e){(await e).default()}function wg(){yg(import("./mountBuffLog.svelte-BI_7hzq_.js"))}function kg(){yg(import("./mountCombatLog.svelte-CB5TI_nS.js"))}function xg(){yg(import("./mountCreatureLog.svelte-CY9NL9Yv.js"))}function Sg(){yg(import("./mountFsboxlog.svelte-D0afBWSf.js"))}function Eg(){yg(Promise.resolve().then(function(){return fS}))}function Cg(){yg(import("./mountGuildTracker.svelte--sWMQSUw.js"))}async function Pg(e){(await import("./injectAuctionSearch-BxSkibLW.js")).default(e)}async function Lg(e){const{injectFindBuffs:t}=await import("./findBuffs-Ck6in5XF.js")
t(e)}async function $g(e){const{injectFindOther:t}=await import("./findBuffs-Ck6in5XF.js")
t(e)}async function Tg(e){(await import("./injectOnlinePlayers-Ckip49TU.js")).default(e)}function Og(){yg(Promise.resolve().then(function(){return rE}))}function Ig(){yg(import("./mountQuickLinksMgr.svelte-s5-_HdvS.js"))}async function Ag(e){(await import("./quickWear-Dm7hdP0j.js")).default(e)}function Rg(){yg(import("./mountRecipeMgr.svelte-BCRE7Dqv.js"))}function Mg(){yg(import("./mountReliclist.svelte-C6vifxFi.js"))}function jg(e){return()=>bg(e)}var Fg=[{section:"Character",menu:[{label:"Buff Log",fn:wg},{label:"Combat Log",fn:kg},{label:"Creature Log",fn:xg},{label:"Recipe Manager",fn:Rg},{label:"Quick Links",fn:Ig},{label:"Inventory Manager",href:`${Sa}invmanagernew`}]},{section:"Actions",menu:[{label:"Find Buffs",fn:jg(Lg)},{label:"Find Other",fn:jg($g)},{label:"Online Players",fn:jg(Tg)},{label:"AH Quick Search",fn:jg(Pg)}]},...ag()?[{section:"Guild",menu:[{label:"Guild Inventory",href:`${Sa}guildinvmgr`},{label:"New Guild Log",fn:Eg},{label:"Merc Hunter",fn:function(){yg(import("./mountMercs.svelte-CTo_p_Od.js"))}},{label:"Pot Report",fn:function(){yg(Promise.resolve().then(function(){return MS}))}},{label:"Guild Tracker",fn:Cg}]}]:[],{section:"Extra",menu:[{label:"Quick Extract",fn:Og},{label:"Quick Wear",fn:jg(Ag)},{label:"FS Box Log",fn:Sg},{label:"SE Tracker",fn:function(){yg(Promise.resolve().then(function(){return mE}))}}]},...Hl("betaOptIn")&&ag()?[{section:"Beta Features",menu:[{label:"Relic List",fn:Mg,beta:!0},{label:"GS Export",fn:function(){yg(Promise.resolve().then(function(){return lx}))},beta:!0},{label:"Who's Got What",fn:function(){yg(Promise.resolve().then(function(){return qE}))},beta:!0}]}]:[],{section:"FSH developer quick links",menu:[{playerId:1963510,playerName:"PointyHair"},{playerId:1674838,playerName:"Lusterless"}]}],Ng=Jf('<button type="button" class="svelte-12kkdk3"> </button>'),Dg=Jf('<a class="svelte-12kkdk3"> </a>'),qg=Jf('<button type="button" class="helperDevBtn svelte-12kkdk3">PM</button> <a class="svelte-12kkdk3"> </a>',1),Bg=Jf('<sup class="fshRed">beta</sup>'),Hg=Jf("<li><!> <!></li>"),Ug=Jf('<h2 class="svelte-12kkdk3"> </h2> <ul></ul>',1)
function Gg(e,t){function n(e){ig("helperMenu",e)}$u(t,!0)
var r=Xf()
dp(Id(r),17,()=>Fg,up,(e,r)=>{var i=Ug(),s=Id(i),o=Od(s)
dp(Ad(s,2),21,()=>If(r).menu,up,(e,r,i,s)=>{var o=Hg(),a=Od(o),l=e=>{var i=Ng()
i.__click=()=>function(e,r){Kl(r)&&(n(e),t.doToggle(),r())}(If(r).label,If(r).fn)
var s=Od(i)
Wd(()=>tp(s,If(r).label)),Zf(e,i)},c=e=>{var i=Xf(),s=Id(i),o=e=>{var t=Dg()
t.__click=()=>n(If(r).label)
var i=Od(t)
Wd(()=>{Ap(t,"href",If(r).href),tp(i,If(r).label)}),Zf(e,t)},a=e=>{var i=Xf(),s=Id(i),o=e=>{var i=qg(),s=Id(i)
s.__click=()=>function(e){n("sendMsg"),t.doToggle(),window.openQuickMsgDialog(e)}(If(r).playerName)
var o=Ad(s,2),a=Od(o)
Wd(()=>{Ap(o,"href",`${ba??""}${If(r).playerId??""}`),tp(a,If(r).playerName)}),Zf(e,i)}
lp(s,e=>{If(r).playerName&&e(o)},!0),Zf(e,i)}
lp(s,e=>{If(r).href?e(o):e(a,!1)},!0),Zf(e,i)}
lp(a,e=>{If(r).fn?e(l):e(c,!1)})
var u=Ad(a,2),d=e=>{Zf(e,Bg())}
lp(u,e=>{If(r).beta&&e(d)}),Zf(e,o)}),Wd(()=>tp(o,If(r).section)),Zf(e,i)}),Zf(e,r),Tu()}Wf(["click"])
var Wg=Jf('<div class="modal svelte-m67z4r"><!></div>'),zg=Jf('<div><button type="button">Helper Menu</button> <!></div>')
function Vg(e,t){$u(t,!0)
let n=gd(!1)
const r=Hl("keepHelperMenuOnScreen"),i=Hl("draggableHelperMenu")
function s(){_d(n,!If(n))}var o=zg()
let a
var l=Od(o)
let c
l.__click=s
var u=Ad(l,2),d=e=>{var t=Wg()
Gg(Od(t),{doToggle:s}),Hp(3,t,()=>wh,()=>({duration:100})),Zf(e,t)}
lp(u,e=>{If(n)&&e(d)}),mp(o,e=>{return t=e,void(i&&tg(t))
var t}),Wd(()=>{a=Sp(o,0,"helper-menu svelte-m67z4r",null,a,{"helper-menu-fixed":r}),c=Sp(l,0,"toggle svelte-m67z4r",null,c,{"helper-menu-move":i})}),Zf(e,o),Tu()}function Qg(){const e=Xl(".mainbody")
e&&function(e,t){np(Vg,{target:t.parentElement,props:{props:e}})}({},e)}function Kg(e){return new Promise(t=>{setTimeout(t,e)})}function Jg(e){fc(window,"beforeunload",()=>e.abort())}Wf(["click"])
let Yg=0
let Xg=0
async function Zg(){Xg<5-$.active&&performance.now()-Yg>=900?(Xg=5-$.active,Yg=performance.now()):await Kg(100)}async function ev(e,t=10){await async function(){for(;Xg<1;)await Zg()
Xg-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=Jg,$.ajax(t).fail((e,t,n)=>{e.textStatus=t,e.errorThrown=n})}(e)}catch(n){if(t&&n.status>500)return ev(e,t-1)
!function(e,t){if(![0,500,503].includes(t.status))throw new dc([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}async function tv(e,t){return Yl(await ev({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function nv(e){return tv(e,{method:"GET"})}function rv(e){return nv({cmd:"trade",...e})}function iv(e,t){return rv({subcmd:"sendgold",xc:window.ajaxXC,target_username:e,gold_amount:t})}function sv(e,t,...n){return e(...n)}function ov(e){return(new DOMParser).parseFromString(e,"text/html")}function av(e){return ug(e,{url:ca,data:{no_mobile:1}}),ev(e)}function lv(e){return av({data:e})}async function cv(e){const t=await lv(e)
if(t)return ov(t)}function uv(e){const n=t("info-msg",e)
if(n){const e=n.innerHTML
return e?e.replace(/<br.*/,""):""}}async function dv(e,t){const n=await cv(e)
if(!n)return{s:!1}
const r=uv(n)
return r===t?{s:!0}:{s:!1,e:{message:r}}}let fv=0
const pv=()=>fv
function hv(){fv=Hl("sendGoldonWorld")}async function gv(){if(!pv())return
ig("NewMap","doSendGold")
const e=await function(e,t){return sv(iv,0,e,t)}($("#HelperSendTo").html(),$("#HelperSendAmt").html().replace(/[^\d]/g,""))
e.s&&(Vl("currentGoldSentTotal",parseInt(Hl("currentGoldSentTotal"),10)+parseInt(Hl("goldAmount"),10)),GameData.fetch(1))}function vv(e){window.location=e}function _v(e){Hl("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function mv(e){ig("keyHandler",e)}function bv(e){return e?.toLowerCase?.()}function yv(e,t){return bv(e)<bv(t)?-1:bv(e)>bv(t)?1:0}function wv(e){return nv({cmd:"profile",...e})}async function kv(){const e=await wv({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort((e,t)=>yv(e.name,t.name))}:e}function xv(){return sv(kv)}const Sv=[e=>e?.s,(e,t)=>e.r?.length>t]
async function Ev(e){const t=await xv()
if(((e,t)=>Sv.every(n=>n(t,e)))(e,t)){mv("changeCombatSet")
const n=t.r[e].id
_v("2"),vv(`${ma+fa}managecombatset&submit=Use&combatSetId=${n}`)}}function Cv(e,n){t("worldPage")||(mv(e),vv(n))}function Pv(){gc.enableMaxGroupSizeToJoin?vv(Ra):vv(Aa)}function Lv(){mv("logPage"),_v("2"),vv(va)}function $v(e){e instanceof Element&&e.click()}function Tv(e){const t=Xl(`#pCC input[value="${e}"]`)
t&&(mv("movePage"),$v(t))}const Ov=[["!",Ev,0],["@",Ev,1],['"',Ev,1],["#",Ev,2],["£",Ev,2],["$",Ev,3],["%",Ev,4],["^",Ev,5],["&",Ev,6],["*",Ev,7],["(",Ev,8],["0",function(){Cv("toWorld",Ma)}],["<",Tv,"<"],[">",Tv,">"],["G",function(){mv("createGroup"),_v("4"),vv(`${Ta}create`)}],["L",Lv],["b",function(){mv("backpack"),_v("2"),vv(ya)}],["g",function(){mv("gotoGuild"),_v("4"),vv(`${Pa}manage`)}],["j",function(){mv("joinAllGroup"),_v("4"),Pv()}],["l",Lv],["p",function(){mv("profile"),_v("2"),vv(ma)}],["r",function(){Cv("doRepair",`${Na+fa}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in gc&&!gc.dialogIsClosed()||(mv("insertQuickWear"),bg(Ag))}],["y",gv]]
const Iv=[e=>["HTML","BODY"].every(t=>e.target.tagName!==t),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function Av(e){var t;(t=e,Iv.some(e=>e(t)))||function(e){const t=Ov.find(([t])=>e===t)
t&&t[1](t[2])}(e.key)}function Rv(){fc(document,"keyup",Av)}function Mv(e,t){return Ih(t)===e}function jv(e){return Rh(Mv,e)}function Fv(e,t,n){fc(e,"click",t,n)}function Nv(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function Dv(e,t){return Lh(Nv(e,t))}function qv(e){Fv(e,()=>{ig("chrome","Game Help link")}),vg(`<a href="${da}settings">Game Help</a>`,e)}function Bv(){Dv("#pCR h3").filter(jv("Game Help")).forEach(qv)}function Hv(e){gc[e]=Hl(e)}function Uv(e,t){if(t instanceof Element)return t.closest(e)}function Gv(e){e?.classList&&e.classList.add("fshHide")}function Wv(e){const n=Uv("a",e.target)
n?.getAttribute("href")===La&&(ig("useNewGuildLog","Alter Href"),e.preventDefault(),Eg(),Gv(t("notification-guild-log")))}function zv(){return gc.huntingMode&&window.realmKeyHandler}function Vv(e){e.forEach(e=>Tc(3,e))}function Qv(){return lv({cmd:"guild",subcmd:"manage"})}function Kv(e){return Uv("tr",e)}function Jv(e,t){return a(e,t)?.groups??{}}function Yv(e){const{d:t,h:n,m:r,s:i}=Jv(na,e),s=Number(t),o=Number(n)+24*s,a=Number(r)+60*o,l=Number(i)+60*a
return{day:t,days:s,hour:n,hours:o,min:r,mins:a,sec:i,secs:l,timestamp:Ho()-l}}function Xv(e){if(e?.href)return Number(l(ra,e.href))}function Zv(e,t){if(t){const n=new Set
return e.filter(e=>n.has(e[t])?0:n.add(e[t]))}return Lh(new Set(e))}const e_=e=>Number(Ih(Kv(e)?.cells[4])?.replaceAll(",","")),t_=e=>Ih(Kv(e)?.cells[3]),n_=e=>Number(l(sa,e))
function r_(e){return{guild_xp:e_(e),id:Xv(e),name:Ih(e),rank:t_(e)}}function i_(e){const{stam:t,max:n}=Jv(ia,e)
return{current_stamina:Number(t),last_activity:Yv(e).timestamp,level:Number(l(/Level:.+?(?<l>\d+)/,e)),max_stamina:Number(n),vl:n_(e)}}function s_(e){return{guild_id:ag(),image_version:0,xp:-1,...r_(e),...i_(e.dataset.tipped)}}function o_(e,t,n){return{id:n,members:e.filter(e=>e.rank===t.rank),name:t.rank,permissions:0,tax:-1}}async function a_(){const e=ov(await Qv()).getElementById("pCC")
if(!e)return{e:{code:0,message:"Failure"},s:!1}
const t=Dv(Al,e).map(s_)
return{r:Zv(t,"rank").map(Rh(o_,t)),s:!0}}function l_(){return Kl(window.jQuery)}const c_=(e,t)=>t.some(t=>e instanceof t)
let u_,d_
const f_=new WeakMap,p_=new WeakMap,h_=new WeakMap
let g_={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return f_.get(e)
if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return b_(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}
function v_(e){g_=e(g_)}function __(e){return(d_||(d_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(y_(this),t),b_(this.request)}:function(...t){return b_(e.apply(y_(this),t))}}function m_(e){return"function"==typeof e?__(e):(e instanceof IDBTransaction&&function(e){if(f_.has(e))return
const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()}
e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)})
f_.set(e,t)}(e),c_(e,u_||(u_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,g_):e)}function b_(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(b_(e.result)),r()},s=()=>{n(e.error),r()}
e.addEventListener("success",i),e.addEventListener("error",s)})
return h_.set(t,e),t}(e)
if(p_.has(e))return p_.get(e)
const t=m_(e)
return t!==e&&(p_.set(e,t),h_.set(t,e)),t}const y_=e=>h_.get(e)
function w_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=b_(o)
return r&&o.addEventListener("upgradeneeded",e=>{r(b_(o.result),e.oldVersion,e.newVersion,b_(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}const k_=["get","getKey","getAll","getAllKeys","count"],x_=["put","add","delete","clear"],S_=new Map
function E_(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return
if(S_.get(t))return S_.get(t)
const n=t.replace(/FromIndex$/,""),r=t!==n,i=x_.includes(n)
if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!k_.includes(n))return
const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly")
let o=s.store
return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]}
return S_.set(t,s),s}v_(e=>({...e,get:(t,n,r)=>E_(t,n)||e.get(t,n,r),has:(t,n)=>!!E_(t,n)||e.has(t,n)}))
const C_=["continue","continuePrimaryKey","advance"],P_={},L_=new WeakMap,$_=new WeakMap,T_={get(e,t){if(!C_.includes(t))return e[t]
let n=P_[t]
return n||(n=P_[t]=function(...e){L_.set(this,$_.get(this)[t](...e))}),n}}
async function*O_(...e){let t=this
if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return
const n=new Proxy(t,T_)
for($_.set(n,t),h_.set(n,y_(t));t;)yield n,t=await(L_.get(n)||t.continue()),L_.delete(n)}function I_(e,t){return t===Symbol.asyncIterator&&c_(e,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===t&&c_(e,[IDBIndex,IDBObjectStore])}v_(e=>({...e,get:(t,n,r)=>I_(t,n)?O_:e.get(t,n,r),has:(t,n)=>I_(t,n)||e.has(t,n)}))
let A_=Promise.resolve(),R_=!1
function M_(){return R_||(A_=w_("keyval-store",1,{upgrade(e){e.createObjectStore("keyval")}}),R_=!0),A_}async function j_(e){try{return(await M_()).get("keyval",e)}catch(e){}}async function F_(e,t){try{return(await M_()).put("keyval",t,e)}catch(e){}}async function N_(e){try{return(await M_()).delete("keyval",e)}catch(e){}}const D_=0,q_=1,B_=2,H_=3,U_=4,G_=5,W_=6,z_="fsh_guildActivity"
async function V_(e){return Yl(await av({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function Q_(e){return V_({cmd:"export",...e})}function K_(e,t){return Q_({subcmd:"profile",player_username:e,...t&&{_:Fo()}})}function J_(e){return Math.floor(Math.max(0,Ho()-e)/86400)}async function Y_(e){const t=await K_(e,!0)
return t?.current_stamina?t:null}function X_(e,t){return e.members[t]||(e.members[t]=[]),e.members[t]}function Z_(e,t,n){const r=J_(e.last_activity)
if(function(e,t,n,r){if(0===e.length)return!0
const i=e.at(-1),s=r<=7
return i[1]!==n.current_stamina||i[2]!==t.level||s&&i[3]!==n.stamina||i[5]!==t.vl||i[6]!==(t.guild_xp||0)}(n,e,t,r)){const i=function(e,t,n){const r=[]
return r[0]=n,r[1]=t.current_stamina,r[2]=e.level,r[3]=t.stamina,r[4]=Ho(),r[5]=e.vl,r[6]=e.guild_xp||0,r}(e,t,r)
n.push(i)}else!function(e,t){if(e.length>0){const n=e.at(-1)
n[4]=Ho(),n[0]=t}}(n,r)}function em(e,t){return e.filter(e=>{const n=t.members[e.name]
if(!n||0===n.length)return!0
const r=n.at(-1)
return Ho()-r[4]>Fl})}function tm(e,t){const n=new Set(t.map(e=>e.name)),r=function(e,t){let n=null
if(e?.members)for(const[r,i]of Object.entries(e.members))if(t.has(r)&&i.length>0){const e=i.at(-1)[4];(!n||e<n)&&(n=e)}return n}(e,n)
return function(e){if(!e)return 864e5
const t=e+Fl
return Math.max(60,t-Ho())*Nl}(r)}function nm(e,t){if(em(t,e).length>0){const t=Ho()-e.lastUpdate
return Math.max(0,(30-t)*Nl)}return tm(e,t)}const rm={running:!1}
async function im(e,t){const n=em(t,e),r=n.slice(0,3)
await async function(e,t){for(const n of e)try{const e=await Y_(n.name)
if(!e)continue
Z_(n,e,X_(t,n.name))}catch(e){Po((n.name,e.message))}}(r,e),e.lastUpdate=Ho(),await F_(z_,e)
return{remaining:n.length-r.length}}async function sm(){if(rm.running)return
rm.running=!0
const e=await j_(z_)||{lastUpdate:Ho(),members:{}},t=await async function(){const e=await a_()
return e.s?e.r.flatMap(e=>e.members):null}()
if(t)for(;rm.running;){const n=nm(e,t)
await Kg(n),await im(e,t)}else rm.running=!1}function om(){l_()&&sm()}function am(){rm.running=!1}function lm(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function cm(){return!l_()}function um(e){return dg("a",e)}function dm(e){return dg("li",e)}function fm(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function pm(e,t){if(t instanceof Node&&t.parentNode instanceof Node)return function(e,t){return t.nextSibling instanceof Node?fm(e,t.nextSibling):gg(t.parentNode,e)}(e,t)}const hm=["Buff Log","Combat Logs","Creature Logs","Quick Links","Recipe Manager","New Guild Log"]
function gm(e,t){ig("accordion",e),hm.includes(e)?t():bg(t)}function vm(e,t,n,r){const i=function(e,t,n){const r=dm({className:`nav-level-${e}`}),i=um({className:"nav-link fshPoint",textContent:t})
return gg(r,i),pm(r,n.parentNode),i}(e,t,r)
Kl(n)?Fv(i,Rh(gm,t,n)):(i.href=n,Fv(i,()=>ig("accordion",t)))}const _m=[[e=>e.recipeManagerLink,"1","Recipe Manager",Rg,"nav-character-log"],[e=>e.inventoryManagerLink,"1","Inventory Manager",`${Sa}invmanagernew`,"nav-character-log"],[e=>e.medalGuideLink,"1","Medal Guide",`${ma}${fa}medalguide`,"nav-character-log"],[e=>e.buffLogLink&&Hl("keepBuffLog"),"1","Buff Log",wg,"nav-character-log"],[e=>e.combatLogLink&&Hl("keepLogs"),"1","Combat Logs",kg,"nav-character-notepad"],[e=>e.creatureLogLink&&Hl("showMonsterLog"),"1","Creature Logs",xg,"nav-character-notepad"],[e=>e.quickLinksLink,"1","Quick Links",Ig,"nav-character-notepad"],[e=>e.auctionSearchLink,"2","AH Quick Search",Pg,"nav-actions-trade-auctionhouse"],[e=>e.onlinePlayersLink,"2","Online Players",Tg,"nav-actions-interaction-findplayer"],[e=>e.findOtherLink,"2","Find Other",$g,"nav-actions-interaction-findplayer"],[e=>e.findBuffsLink,"2","Find Buffs",Lg,"nav-actions-interaction-findplayer"],[e=>e.guildInventoryLink&&ag(),"2","Guild Inventory",`${Sa}guildinvmgr`,"nav-guild-storehouse-inventory"],[e=>e.newGuildLogLink&&ag()&&!Hl("useNewGuildLog"),"2","New Guild Log",Eg,"nav-guild-ledger-advisor"],[e=>e.topRatedLink,"2","Top 250 Players",`${da}toprated${fa}xp`,"nav-toprated-players-level"]]
function mm(e){_m.forEach(([n,r,i,s,o])=>{n(e)&&function(e,n,r,i){const s=t(i)
s instanceof Node&&vm(e,n,r,s)}(r,i,s,o)})}const bm=e=>22*Dv("li",e).length||null
function ym(e,t,n){mm(n),function(e,t){t.heights=Dv("#nav > li").map(bm)
const n=Number(t.state),r=e?.children?.[n]?.children?.[1]?.style
r&&(r.height=`${t.heights[n]}px`)}(e,t)}var wm=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function km(e){return function(e){return-1!==e&&0===Xl(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?(ig("accordion","collapse"),-1):e}const xm=(e,t,n)=>$(e).data(`${n}${t}`)
function Sm(e,t,n){return new Promise(r=>{const i=xm(e,t,n)
i?r(i):function(e,t,n,r){$(e).on(`${bv(t)}create`,()=>{r(xm(e,t,n))})}(e,t,n,r)})}const Em=[[e=>!Jl(e),()=>hc("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>hc("$('#nav').data('hcsNav').heights does not exist")]]
async function Cm(){const e=t("nav"),n=await Sm(e,"Nav","hcs")
return function(e){const t=Em.find(([t])=>t(e))
return!t||(t[1](),!1)}(n)?{theNav:e,myNav:n}:{}}function Pm(){!function(){const e=Hl("lastActiveQuestPage")
Hl("storeLastQuestPage")&&e.length>0&&(t("nav-character-questbook").href=e)}(),function(){const e=Hl("lastScavPage")
Hl("storeLastScavPage")&&e.length>0&&(t("nav-actions-artisanship-scavenging").href=e)}()}async function Lm(){const{theNav:e,myNav:t}=await Cm()
e&&t&&(Pm(),function(e,t){const n=wm.map(e=>[e,Hl(e)])
n.some(([,e])=>e)&&ym(e,t,lm(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,km(n))}}(t))}function $m(e){return lv({cmd:"bounty",page:e})}function Tm(e){return e()}function Om(e,t){Vl(e,pc(t))}let Im=0,Am=0
const Rm=()=>Im,Mm=()=>Am
function jm(){return fg({className:"minibox"})}function Fm(e){return dg("span",e)}function Nm(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function Dm(e,t){Nm(e,"beforeend",t)}function qm([e,t,n,r,i]){const s=e(),o=n()
if(o)return Om(t,o),vg("",s),function(e,t,n,r){const i=fg({innerHTML:`<a class="fshBountyHeader" href="${Ga}">${n} Bounties</a> `}),s=Fm({className:"xxsLink",textContent:"Reset"})
return gg(i,s),gg(e,i),Dm(e,function(e,t,n){const r=e.bounty
return 0===r.length?`<div class="xsOrange">[No ${t.toLowerCase()} bounties]</div>`:r.map(n).join("")}(t,n,r)),s}(s,o,r,i)}function Bm(e,t){return`<a href="${e.link}" class="xsKhaki tip-static" data-tipped="${t(e)}">${e.target}</a><br>`}function Hm(e,t){if("string"==typeof t){const e=a(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function Um(e){const t=Hl(e)
if(t)return Yl(t,Hm)}function Gm(e){return e.split(",").map(Oh)}function Wm(e){const t=Hl(e)
return t?Gm(t):[]}function zm(e){return Xl("img",e[2]).title}function Vm(e){const t="A"===(r=e[0]).children[0].tagName?r.children[0]:r.children[0].children[0]
var r
return{target:n(t),link:t.href,lvl:n(t.nextSibling).replace(/[[|\]]/g,""),reward:n(e[2]),rewardType:zm(e),xpLoss:n(e[3]),posted:n(e[4])}}let Qm=0,Km={},Jm={},Ym=!1,Xm=!1,Zm=[]
const eb=()=>Km,tb=()=>Jm,nb=()=>Zm
function rb(e){return{...Vm(e),progress:n(e[5])}}function ib(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=rb(e.rows[t].cells)
Km.bounty.push(n)}}(e)}function sb(e,t){return function(e){if(e)return Km&&Ho()-Km.lastUpdate>Qm}(e)||function(e){if(e)return Jm&&Ho()-Jm.lastUpdate>Qm}(t)}let ob=0
function ab(e){return`Level:  ${e.lvl}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Progress:  ${e.progress}`}function lb(e){return Bm(e,ab)}function cb(){ob=qm([Rm,"bountyList",eb,"Active",lb])}let ub=0
function db(e){return`Target Level:  ${e.lvl}<br>Offerer: ${e.offerer}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Posted: ${e.posted}<br>Tickets Req.:  ${e.tickets}`}function fb(e){return e.accept?`<span class="xsGreen" onclick="${e.accept}">[a]</span>&nbsp;`:""}function pb(e){return[fb(e),Bm(e,db)].join("")}function hb(){ub=qm([Mm,"wantedList",tb,"Wanted",pb])}function gb(e){const t=e[6]
return"[n/a]"!==Ih(t)?t.children[0].children[0].getAttribute("onclick"):""}const vb=[()=>nb().includes("*"),e=>nb().includes(e),(e,t)=>gc.wantedGuildMembers&&"[n/a]"===Ih(t.cells[6])]
function _b(e,t){var n;(function(e,t){return"[active]"!==Ih(t.cells[6])&&vb.some(n=>n(e,t))})(e,t)&&tb().bounty.push({...Vm(n=t.cells),offerer:Ih(n[1].children[0].children[0]),tickets:Ih(n[5]),accept:gb(n)})}let mb=0,bb=0
function yb(e){const n=Xl('#pCC input[name="page"]',e)
if(!n)return
mb=Number(n.value),bb=Number(l(/of&nbsp;(?<of>\d*)/,n.parentNode.innerHTML))
const r=t("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
r&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],r=Ih(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===r)break
_b(r,n)}}(r)}function wb(e){gc.enableActiveBountyList&&!Ym&&(!function(e){const n=t("bounty-info",e)
if(!n)return
const r=n.parentNode.parentNode.previousElementSibling.children[0].children[0]
Km={},Km.bounty=[],Km.isRefreshed=!0,Km.lastUpdate=Ho(),r&&ib(r),Ym=!0}(e),cb())}async function kb(e){const t=ov(e)
if(wb(t),gc.enableWantedList)if(yb(t),mb<bb){kb(await $m(mb+1))}else hb()}const xb=[()=>!eb(),()=>!tb(),()=>Xm]
async function Sb(){if(function(e,t){Km=Um("bountyList"),Jm=Um("wantedList"),Qm=Hl("bountyListRefreshTime"),Xm=Hl("bwNeedsRefresh"),Xm||sb(e,t)&&(Xm=!0)}(gc.enableActiveBountyList,gc.enableWantedList),xb.some(Tm)){Jm={},Jm.bounty=[],Jm.isRefreshed=!0,Jm.lastUpdate=Ho(),Ym=!1,Zm=Wm("wantedNames"),Vl("bwNeedsRefresh",!1)
kb(await $m(1))}else!function(e,t){t&&(tb().isRefreshed=!1,hb()),e&&(eb().isRefreshed=!1,cb())}(gc.enableActiveBountyList,gc.enableWantedList)}function Eb(e,t){ig("activeWantedBounties",e),Om(t,null),Sb()}function Cb(e){e.target===ob&&Eb("getBountyListReset","bountyList"),e.target===ub&&Eb("getWantedListReset","wantedList")}async function Pb(e){const t=await K_(s(),e),n=t?.username===s(),r=n?{...t,lastUpdate:Do()}:t
return n&&F_("fsh_selfProfile",r),r}function Lb(e){return(e=>Do()-gc.allyEnemyOnlineRefreshTime<e?.lastUpdate)(e)?e:Pb()}async function $b(e){if(e)return Pb(e)
return Lb(await j_("fsh_selfProfile"))}function Tb(e,t){return t?.classList?.contains(e)}function Ob(e,t){return Tb(t[0],e)}function Ib(e,t,n){const{target:r}=n,i=t.find(Rh(e,r))
if(i)return i[1](r)}function Ab(e){return Rh(Ib,Ob,e)}function Rb(e){return Oc(e,"player_id")}function Mb(e,t,n){return Math.floor(Math.max(e-t,0)/2+n)}function jb(e,t,n,r,i){let s=r
500===r&&(s=1e3)
const o=Mb(window.screen.availHeight,s,window.screenY),a=Mb(document.documentElement.clientWidth,n,window.screenX)
window.open(e,t,`width=${n}, height=${s}, left=${a}, top=${o}${i}`)}function Fb(e,t){let n=""
t&&(n=`&blist=${t}`),jb(`${Da}&t=${e}${n}`,"fsQuickBuff",618,1e3,",scrollbars")}function Nb(e){let t=e,n=Math.floor(t/60)
t%=60
let r=Math.floor(n/60)
n%=60
const i=Math.floor(r/24)
return r%=24,[i,r,n,t]}function Db(e,t){return 0===e?"":String(e)+t}function qb(e){const t=Nb(Math.abs(Ho()-e))
return`${Db(t[0]," days, ")+Db(t[1]," hours, ")+Db(t[2]," mins, ")+t[3]} secs`}const Bb="enemy-buff-check-on",Hb="enemy-buff-check-off",Ub="enemy-send-message",Gb="enemy-quickbuff",Wb="enemy-quick-buff",zb=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function Vb(e,t){return t[0](Ho()-e)}function Qb(e,t){return`<a class="player-name tip-static ${function(e,t){const n=zb.find(Rh(Vb,e))
return n?function(e,t){return e?t[1]:t[2]}(t,n):"fshWhite"}(e.last_login,t)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${qb(e.last_login)}</td></tr></tbody></table>" href="${ba}${e.id}">${e.username}</a>`}function Kb(e){return Ho()-e.last_login<1800}function Jb(e,t){return`<li class="player"><div class="player-row">${gc.hideBuffSelected?"":`<span class="${Bb}"></span>`}${Qb(t,e)}</div><div class="guild-minibox-actions">${gc.hideGuildInfoMessage?"":`<span class="${Ub} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}${gc.hideGuildInfoBuff?"":`<span class="${Gb} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}${function(e){return gc.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${ka}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return gc.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${wa}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function Yb(e,t){return e.filter(Kb).map(Rh(Jb,t)).join("")}const Xb=[(e,t)=>e.length+t.length,(e,t)=>{if(!gc.enableAllyOnlineList)return t.length},e=>{if(!gc.enableEnemyOnlineList)return e.length}]
function Zb(e){ig("allyEnemy",e)}function ey(e,t,n){return 0===n(e,t)}function ty(e){const n=_c(e._allies,[]),r=_c(e._enemies,[]);(function(e,t){return Xb.every(Rh(ey,e,t))})(n,r)||function(e,n){let r=""
gc.enableAllyOnlineList&&(r+=Yb(e,!0)),gc.enableEnemyOnlineList&&(r+=Yb(n,!1))
const i=t("fshContactList")
vg("",i),Dm(i,r)}(n,r)}function ny(e){Zb("toggleBuffSelected"),e.classList.toggle(Bb),e.classList.toggle(Hb)}const ry=[[Bb,ny],[Hb,ny],[Ub,function(e){Zb("msgPlayer"),window.openQuickMsgDialog(n(e.parentNode.previousElementSibling.lastElementChild))}],[Gb,function(e){Zb("buffPlayer"),Fb(Rb(e.parentNode.previousElementSibling.lastElementChild.href))}],[Wb,function(){Zb("selectedBuff"),Fb(hg(Bb,t("fshContactList")).map(e=>Rb(e.nextElementSibling.href)).join(","))}]]
function iy(e){const{target:t}=e
"fshResetEnemy"!==t.id?Ab(ry)(e):async function(){Zb("resetList"),ty(await $b(!0))}()}function sy(e){const t=fg({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>'
gc.hideBuffSelected||(n+=`<ul class="${Wb}">Quick Buff Selected</ul>`),n+="</div></div>",Dm(t,n),gg(Nh(),t),Fv(t,iy),ty(e)}function oy(e){if(e?.length)return n(e[0].nextElementSibling)}function ay(e){return e?Number(e.replace(/,/g,"")):0}function ly(e){return ay(oy(pg(e)))}function cy(e){let t=e.toString()
return e<10&&(t=`0${t}`),t}function uy(e,t){const n=e?.split(" ").map(e=>e.slice(0,-1))
var r
if(n)return`<dd>${r=new Date(Do()+1e3*(60*(60*t+Number(n[0]))+Number(n[1]))),`${cy(r.getHours())}:${cy(r.getMinutes())} ${r.toLocaleString("en",{weekday:"short"})} ${cy(r.getDate())}/${Xo[r.getMonth()]}/${r.getFullYear()}`}</dd>`}var dy=Jf("<div><!></div>")
function fy(e,t){$u(t,!0)
let n,r,i,s=hh(t,"visible",3,!0),o=gd(void 0)
Bd(()=>{s()?document.body.classList.contains("noscroll")||(n=!0,r=window.scrollY,i=document.body.style.top,document.body.classList.add("noscroll"),document.body.style.top=`-${r}px`):n&&(document.body.classList.remove("noscroll"),document.body.style.top=i||"",window.scrollTo(0,r))})
var a=dy()
let l
a.__click=function(e){e.target===If(o)&&t.close()},vp(Od(a),()=>t.children??Wc),eh(a,e=>_d(o,e),()=>If(o)),Wd(()=>l=Sp(a,0,"svelte-1joucfc",null,l,{visible:s()})),Zf(e,a),Tu()}let py
Wf(["click"])
var hy=Jf('<div role="dialog" aria-modal="true"><!></div>')
function gy(e,t){$u(t,!0)
let n,r=hh(t,"modal",15),i=hh(t,"visible",3,!0)
Bd(()=>{i()?(gc.dialogIsClosed&&(n=gc.dialogIsClosed),gc.dialogIsClosed=()=>!i()):n&&(gc.dialogIsClosed=n)}),fy(e,{get close(){return t.close},get visible(){return i()},children:(e,n)=>{!function(e,t){$u(t,!0)
let n=hh(t,"modal",15),r=hh(t,"visible",3,!0),i=od(r),s=gd(void 0),o=gd(void 0)
const a=e=>e.tabIndex>=0&&e.offsetWidth>0&&e.offsetHeight>0&&!e.disabled
Bd(()=>{r()?(_d(s,document?.activeElement,!0),n()&&(_d(o,py,!0),py=n())):(If(s)?.focus(),n()&&(py=If(o)))})
var l=hy()
let c
Gf("keydown",Sd,function(e){if(r())if("Escape"!==e.key||py!==n()){if("Tab"===e.key){const t=Dv("*",n()).filter(a)
let r=t.indexOf(document.activeElement);-1===r&&e.shiftKey&&(r=0),r+=t.length+(e.shiftKey?-1:1),r%=t.length,t[r].focus(),e.preventDefault()}}else t.close()}),vp(Od(l),()=>t.children??Wc),eh(l,e=>n(e),()=>n()),Wd(()=>c=Sp(l,0,"ui-dialog svelte-h5colk",null,c,{modalVisible:If(i)})),Zf(e,l),Tu()}(e,{get close(){return t.close},get visible(){return i()},get modal(){return r()},set modal(e){r(e)},children:(e,n)=>{var r=Xf()
vp(Id(r),()=>t.children??Wc),Zf(e,r)},$$slots:{default:!0}})},$$slots:{default:!0}}),Tu()}var vy=Jf('<div class="svelte-2mrn1o"> </div> <div class="svelte-2mrn1o"><button type="button" class="svelte-2mrn1o">Yes</button> <button type="button" class="svelte-2mrn1o">No</button></div>',1)
function _y(e,t){$u(t,!0)
let n=hh(t,"msg",3,"Are you sure?"),r=hh(t,"visible",15,!0)
function i(){r(!1),t.resolve(!1)}function s(){r(!1),t.resolve(!0)}gy(e,{close:i,get visible(){return r()},children:(e,t)=>{var r=vy(),o=Id(r),a=Od(o),l=Od(Ad(o,2))
l.__click=s,Ad(l,2).__click=i,Wd(()=>tp(a,n())),Zf(e,r)},$$slots:{default:!0}}),Tu()}Wf(["click"])
const my=wd({visible:!0})
let by=null
function yy(e){my.resolve=e,by?my.visible=!0:by=np(_y,{props:my,target:document.body})}function wy(e){return my.msg=e,new Promise(yy)}async function ky(e){if("daily-quest-reroll-button"!==e.target.id)return
e.stopPropagation()
await wy("Are you sure you want to re-roll the Daily Quest?")&&async function(){const e=t("minibox-daily-quest")
if(!e)return
ig("dailyQuest","reroll")
const n=await cv({cmd:"dailyquests",subcmd:"reroll"})
if(!n)return
const r=t("minibox-daily-quest",n)
r&&e.replaceWith(r)}()}function xy(e){return dg("button",{...e,type:"button"})}function Sy(e,t){Dm(e,t)}function Ey(){ig("fsbox","open log"),Sg()}function Cy(e,t){const n=Fm({className:`fsh-fsbox ${e}`,textContent:"[ "})
return gg(n,t),Sy(n," ]"),n}function Py(e){const t=Xl(Al,e)
t&&(function(e,t){const r=um({href:`${_a}${n(t)}`,textContent:"Ignore"})
Fv(r,()=>ig("fsbox","ignore link")),gg(e,Cy("fs-box-ignore",r))}(e,t),async function(e){const t=await j_("fsh_fsboxcontent")??"",n=Oh(Xl(".message",e).innerHTML)
if(t.includes(n))return
F_("fsh_fsboxcontent",`<br>${n}${t}`.slice(0,9999))}(e))}function Ly(e){e.classList.add("fshRelative"),function(e){const t=xy({textContent:"Log"})
Fv(t,Ey),gg(e,Cy("fs-box-log",t))}(e),Py(e)}function $y(e,t){t instanceof Node&&(t.textContent=String(e))}let Ty=null
function Oy(){return Ty||(Ty=t("quickMessageDialog")),Ty}let Iy=0
function Ay(e){(function(){if(!Iy){const e=pg("validateTips",Oy())
1===e.length&&([Iy]=e)}return Iy})()&&$y(_c(e,""),Iy)}let Ry=null
function My(){return Ry||(Ry=t("quickMsgDialog_msg"),Ry.maxLength=512),Ry}let jy=null,Fy=0,Ny=0
function Dy(e){"Enter"!==e.key||e.shiftKey||(ig("messaging","sendOnEnter"),e.preventDefault(),function(){if(!Ny){const e=$(Oy()).dialog("option","buttons")
Ny=e["Send Message"]}return Ny}()())}function qy(){zo(jy)&&(jy=Hl("enterForSendMessage")),jy&&!Fy&&(fc(My(),"keypress",Dy),Fy=!0)}let By=null
let Hy=0,Uy=0,Gy=0
function Wy(e,t,n){const r=Uy.insertRow(e)
let i=r.insertCell(-1)
Dm(i,t),i=r.insertCell(-1),Dm(i,n)}function zy(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function Vy(e,t){Wy(e,zy("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const Qy=[["del-button",function(e){ig("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
Uy.deleteRow(t),Hy.splice(t-2,1),Om("quickMsg",Hy)}],["add-button",function(e){ig("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){Vy(e.parentNode.parentNode.rowIndex,n),t.value="",Hy.push(n),Om("quickMsg",Hy)}}],["add-template",function(e){ig("messaging","insertTemplate"),My().value+=`${n(e).replace(/\{playername\}/g,By)}`}]]
function Ky(e){Vy(-1,e)}function Jy(){Hl("enableMessageTemplates")&&!Gy&&(Fv((Uy||(Uy=Oy().lastElementChild),Uy),Ab(Qy)),(Hy||(Hy=Um("quickMsg")),Hy).forEach(Ky),Wy(-1,zy("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),Gy=!0)}function Yy(e,n,r){const i=Oy()
Tb("ui-dialog-content",i)&&(!function(e){By=e,$y(e,t("quickMsgDialog_targetUsername"))}(e),function(e){const t=My()
t.value=_c(e,""),t.disabled=!1}(n),Ay(r),Jy(),qy(),$(i).dialog("open"))}function Xy(e){return nv({cmd:"composing",...e})}function Zy(){return Xy({subcmd:"view"})}function ew(){return sv(Zy)}function tw(e,n,r){const i=dm({className:"notification"}),s=um({href:r,innerHTML:`<span class="notification-icon"></span><p class="notification-content">${n}</p>`})
Fv(s,()=>{ig("notification",e)}),gg(i,s),gg(t("notifications"),i)}function nw(){tw("composing","Composing to do",qa)}function rw(e){return e.time_remaining}function iw(){nw(),Vl(fl,!0)}function sw(e){const t=e.h.p.find(({k:e})=>52===e)?.v
e.r.potions.length!==t?iw():function(e){const t=Math.min.apply(null,e.map(rw))
t>0?(Vl(fl,!1),Vl(pl,Do()+1e3*t)):iw()}(e.r.potions)}function ow(){Hl(fl)?nw():async function(){const e=Hl(pl)
if(e&&Do()<e)return
const t=await ew()
t?.s&&sw(t)}()}function aw(e){return nv({cmd:"guild",...e})}function lw(e){return aw({subcmd:"groups",...e})}function cw(e){return lw({subcmd2:"joinall",group:e})}function uw(e){return Promise.all(e)}function dw(e){return sv(cw,0,e)}function fw(){return lw({subcmd2:"view"})}function pw(){return sv(fw)}var hw=Jf('<p class="notification-content" style="line-height: 32px;">Joined.</p>'),gw=Jf('<span class="notification-content fshSpinner fix-classic-theme svelte-v71ckx"></span>'),vw=Jf('<p class="notification-content"><button type="button" class="svelte-v71ckx"> </button></p>'),_w=Jf('<a><span id="notification-icon-guild-group" class="notification-icon"></span> <!></a>')
function mw(e,t){$u(t,!0)
let n=gd(0),r=gd(wd(Aa)),i=gd("")
const o=e=>!gc.enableMaxGroupSizeToJoin||e.members.length<gc.maxGroupSizeToJoin,a=e=>e.name===s(),l=e=>!e.members.find(a),c=e=>e.id
async function u(){const e=await pw()
e?.s&&await async function(e){const t=e.r.filter(o).filter(l).map(c)
t.length&&await dw(t)}(e)}function d(e){If(n)||(e.preventDefault(),ig("notification","Join All"),_d(n,1))}gc.enableMaxGroupSizeToJoin&&(_d(r,Ra,!0),_d(i,` less than size ${gc.maxGroupSizeToJoin}`))
var f=_w(),p=Ad(Od(f),2),h=e=>{var t=Xf()
ap(Id(t),u,e=>{Zf(e,gw())},e=>{Zf(e,hw())}),Zf(e,t)},g=e=>{var t=vw(),n=Od(t)
n.__click=d
var r=Od(n)
Wd(()=>tp(r,`Join all attack groups${If(i)??""}.`)),Zf(e,t)}
lp(p,e=>{If(n)?e(h):e(g,!1)}),Wd(()=>Ap(f,"href",If(r))),Zf(e,f),Tu()}function bw(e){return nv({cmd:"temple",...e})}function yw(e){return bw({subcmd:"pray",type:e})}function ww(){return bw({subcmd:"view"})}function kw(e){$(e).qtip("hide")}Wf(["click"])
let xw=Element
const Sw=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${da}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
function Ew(e){Vl("needToPray",e),Vl("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}async function Cw(e){const t=e.target.getAttribute("praytype")
t&&(ig("notification","prayToGods"),kw(e.target),await function(e){return sv(yw,0,e)}(t),xw.outerHTML='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',Ew(!1))}function Pw(){Dm(t("notifications"),Sw),xw=t("helperPrayToGods"),Hh(xw,"click",Cw)}async function Lw(){if(!gc.enableTempleAlert)return
const e="temple"===gc.cmd?function(e){if(!e)return{s:!1}
const t=Xl("#pCC",e)
return t?{s:!0,r:{pray_index:"You are currently praying at the temple."===Ih(t)?0:-1}}:{s:!1}}(document):await sv(ww)
if(!e.s)return
const t=-1===e.r.pray_index
t&&Pw(),Ew(t)}function $w(){var e
!(e=Hl("lastTempleCheck"))||Do()>e?Lw():Hl("needToPray")&&Pw()}function Tw(){return e={subcmd:"goldupgrades"},nv({cmd:"points",...e})
var e}function Ow(e,t,n){if(e?.rows)return Lh(e.rows).filter((e,r)=>e.children.length===t&&r>n)}function Iw(e){return Number.isNaN(e)}function Aw(e,t){const n=Number(Ih(e.cells[2]).split(" / ")[0]),r=Ih(e.cells[3])
return{id:t,...!["-","n/a"].includes(r)&&{reset_time:Date.parse(`${r} GMT`)/1e3},current:Iw(n)?0:n}}function Rw(){return-1!==window.location.search.indexOf("cmd=points&type=1")}function Mw(){Rw()||tw("stamina","Upgrade stamina with gold",`${Ca}&type=1`)}async function jw(){if(Rw()&&function(){const e=Nv('#pCC input[name="quantity"]')
e?.length<2||(e[0].value="100",e[1].value="10")}(),!gc.enableUpgradeAlert)return
const e=Rw()?function(e){if(!e)return{s:!1}
const t=Xl("#pCC > table",e)
return t?{s:!0,r:Ow(t,5,0).map(Aw)}:{s:!1}}(document):await sv(Tw)
Vo(e?.r?.[1]?.current)||function(e){10!==e.current?(Mw(),Vl("needToDoUpgrade",!0)):(Vl("needToDoUpgrade",!1),Vl("lastUpgradeCheck",1e3*e.reset_time))}(e.r[1])}function Fw(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?fm(t,e.firstChild):gg(e,t)}(e,t)}function Nw(e,t){t.stopPropagation(),ig("chrome","statbar",e)}function Dw(e,n){const r=t(`statbar-${n}`)
if(!r)return
const i=um({href:e}),s=r.parentNode
gg(i,r),Fw(s,i),Fv(i,Rh(Nw,n),!0)}function qw(e,t){hg("player-name",e).forEach(t)}const Bw=/Last Activity:<\/td><td>(?<mins>\d+) mins/
function Hw(e,t){const n=e.dataset.tipped,r=l(Bw,n)
r<2?e.classList.add(t.l1):r<5?e.classList.add(t.l2):e.classList.add(t.l3)}const Uw=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function Gw(e,t){Uw.forEach(n=>{gc[n[0]]&&Lh(Nv(n[t],e)).forEach(Gv)})}function Ww(e){e?.classList&&e.classList.add("fshInvisible")}function zw(e,n){gc.hideBuffSelected&&(Lh(pg(`${n}-buff-check-on`,e)).forEach(Ww),Ww(t(`${n}-quick-buff`)))}function Vw(e){Hw(e,{l1:"fshGreen",l2:"fshWhite",l3:"fshGrey"})}function Qw(e,t,n){Dv(`#pCR h${e}`).filter(jv(t)).forEach(e=>{const r=um({href:`${Pa}${n}`,textContent:t})
Fv(r,()=>{ig("widgets",`guild ${n}`)}),e.replaceChild(r,e.firstChild)})}function Kw(e){Hw(e,{l1:"fshDodgerBlue",l2:"fshLightSkyBlue",l3:"fshPowderBlue"})}function Jw(e){const n=t(e)
n&&(n.classList.add("pCR"),gg(Nh(),n))}function Yw(e){const n=t(e)
n&&Fw(qh(),n)}function Xw([e,t,n,r,i]){return Date.UTC(Number(e),Xo.indexOf(t),Number(n),Number(r),Number(i),0)}function Zw(e){if(e?.src)return e.src.split("/").at(-1).split(".")[0]}function ek(e){return lg(e?.seData??{}).flatMap(([t,n])=>vc(n)?n.map(([n,r,i,s,o,a,l=-1])=>[n,t,r,i,e?.realms[s],o,a,l]):[[n,t.replaceAll(" ","_"),0,"","","",""]])}const tk=e=>e.join("|"),nk=e=>e.split("|")
function rk(e){const{time:t,creature:n,playerId:r,playerName:i,location:s,drop:o,creatureId:a}=e,l=s.match(/^(.*?)\s(\(\d+, \d+\))$/)
return[t,n.replace(" (Super Elite)","").replaceAll(" ","_"),r,i,l?l[1]:"realm unknown",l?l[2]:"coordinates unknown",o,a]}function ik(e,t){const n=((e,t)=>Zv(e.map(tk).concat(t.map(tk))).map(nk).map(([e,t,n,r,i,s,o,a])=>[Number(e),t,Number(n),r,i,s,o,Number(a)]).sort(([e],[t])=>t-e))(t.map(rk),ek(e)),r=Zv(n.map(([,,,,e])=>e)).sort(yv),i=(e=>t=>lm(Zv(t.map(([,e])=>e)).map(n=>[n,t.filter(([,e])=>e===n).map(([t,,n,r,i,s,o,a])=>[t,n,r,e.findIndex(e=>e===i),s,o,a]).slice(0,10)])))(r)(n)
return{seData:i,realms:r}}const sk=sh()
let ok=!1,ak={},lk=0,ck=!1
const uk=e=>Math.max(0,600-(No()-(e?.lastUpdate??0)),600-(No()-lk))
function dk(e){const t=e.replace("<br>"," ").split(/[: /]/)
return Xw([t[2],t[1],t[0],t[3],t[4]])}function fk(e){const t=Lh(e.childNodes).filter(e=>e.nodeType===Node.TEXT_NODE&&""!==Ih(e))
return 0===t.length?"":t.map(e=>Ih(e)).join(" ")}const pk=e=>({time:dk(e.cells[0].innerHTML)/1e3,creature:Ih(e.cells[1]),creatureId:Number(l(oa,Xl("img",e.cells[1]).src)),playerId:Xv(Xl("a",e.cells[2])),playerName:Ih(Xl("a",e.cells[2])),location:fk(e.cells[2]),drop:Zw(Xl("img",e.cells[3]))??"no drop"})
async function hk(){lk=No()
const e=await async function(){const e=await cv({cmd:"superelite"})
return e&&Xl('img[src*="eliteslayerlog"]',e)?Ow(Xl("#pCC table table",e),4,0).map(pk):[]}()
e?.length&&(ak=ik(ak,e),F_("fsh_seLog",{lastUpdate:lk,...ak}),sk.set(ak))}function gk(e,t){ck=t,e(ck),ck&&!ok&&async function(){for(ok=!0,ak=await j_("fsh_seLog"),sk.set(ak);ck;)ok=!0,await Kg(1e3*uk(ak)),ck&&await hk(),ok=!1}()}const vk=function(){const{subscribe:e,set:t}=sh(0)
return{subscribe:e,set:Rh(gk,t)}}()
const _k=[function(){Hl("moveGuildList")&&Yw("minibox-guild")},function(){Hl("moveOnlineAlliesList")&&Yw("minibox-allies")},function(){Hl("moveXmasBox")&&Jw("minibox-xmas")},function(){Hl("moveDailyQuest")&&Jw("minibox-daily-quest")},function(){Hl("moveFSBox")&&Jw("minibox-fsbox")},async function(){if(!gc.enableAllyOnlineList&&!gc.enableEnemyOnlineList||cm())return
!function(e){e&&Tc(3,sy,[e])}(await $b(!1))},function(){!gc.enableWantedList&&!gc.enableActiveBountyList||cm()||(gc.enableActiveBountyList&&(Im=jm(),gg(Nh(),Im)),gc.enableWantedList&&(Am=jm(),gg(Nh(),Am)),Rm()&&Fv(Rm(),Cb),Mm()&&Fv(Mm(),Cb),Sb())},function(){if(!gc.enableGuildInfoWidgets)return
const e=t("minibox-guild-members-list")
e&&(Gw(e,1),zw(e,"guild"),qw(e,Vw),Qw(4,"Chat","chat"),Qw(3,"Guild","manage"))},function(){if(!gc.enableOnlineAlliesWidgets)return
const e=t("minibox-allies-list")
e&&(Gw(e,2),zw(e,"ally"),qw(e,Kw))},function(){gc.enableTempleAlert&&"temple"!==gc.cmd&&!cm()&&$w()},function(){gc.enableUpgradeAlert&&l_()&&!Rw()&&function(){if(Hl("needToDoUpgrade"))return void Mw()
const e=Hl("lastUpgradeCheck");(!e||Do()>e)&&jw()}()},function(){gc.enableComposingAlert&&"composing"!==gc.cmd&&l_()&&ow()},function(){Nh()&&!cm()&&Lm()},function(){cm()||(window.openQuickMsgDialog=Yy)},function(){Hl("statBarLinks")&&(Dw(ma,"character"),Dw(`${Ca+fa}reserve`,"stamina"),Dw(Na,"equipment"),Dw(ya,"inventory"),Dw(Ca,"fsp"),Dw(`${da}bank`,"gold"))},function(){if(!Hl("staminaCalculator"))return
const e=pg("stat-stamina-nextGain")
if(0===e.length)return
const n=t("statbar-stamina-tooltip-stamina"),r=(e=>oy(pg("stat-name",e)).split(" / "))(n)
2===r.length&&Dm(n,function(e,t){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${uy(oy(e),Math.floor((ay(t[1])-ay(t[0]))/ly("stat-stamina-gainPerHour")))}`}(e,r))},function(){if(!Hl("levelUpCalculator"))return
const e=pg("stat-xp-nextGain")
0!==e.length&&Dm(t("statbar-level-tooltip-general"),`<dt class="stat-xp-nextLevel">Next Level At</dt>${uy(oy(e),Math.ceil(ly("stat-xp-remaining")/ly("stat-xp-gainPerHour")))}`)},function(){if(!Hl("fsboxlog"))return
const e=t("minibox-fsbox")
e&&Ly(e)},function(){Hl("resizeQuickBuff")&&(window.openWindow=function(e,t,n,r,i){ig("chrome","interceptQuickBuff"),jb(e,t,n,r,i)})},function(){if(!Hl("joinAllLink"))return
const e=t("notification-guild-group")
e&&function(e){vg("",e),np(mw,{target:e})}(e)},function(){if(!Hl("addScoutTowerLink")||!ag())return
const e=t("minibox-spoilsofwar")
if(!e)return
const n=e.children[1]
if(!n)return
const r=n.children[0]
Dm(r,"&nbsp;"),gg(r,function(){const e=um({dataset:{tooltip:"View Scout Report"},href:$a,innerHTML:`<img id="fshScoutTower" src="${Ko}structures/27.png">`})
return Fv(e,()=>ig("chrome","scout tower link")),e}())},function(){l_()&&Hl(gl)&&om()},function(){l_()&&gc.enableSeTracker&&vk.set(gc.enableSeTracker)},function(){Hl("dailyQuestReRoll")&&qh()&&Fv(qh(),ky,!0)}]
const mk=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function bk(){zv()||(mk.forEach(Hv),gc.allyEnemyOnlineRefreshTime=1e3*Hl("allyEnemyOnlineRefreshTime"),gc.useNewGuildLog&&(fc(document.body,"click",Wv),fc(document.body,"auxclick",Wv)),Vv(_k))}function yk(e){const t=Yl(e)
t?.["new-ui"]&&(Hl("gameHelpLink")&&Tc(3,Bv),gc.huntingMode=Hl("huntingMode"),Tc(3,Rv),bk(),Hl("hideHelperMenu")||Tc(3,Qg))}function wk(){const e=function(){const e=t("html")
if(e?.dataset)return e.dataset.hcs}()
e&&yk(e)}function kk(){l_()&&t("worldPage")&&window.GameData&&yg(import("./newMap-BSQ9L2Un.js"))}const xk={"-":{"-":()=>{yg(import("./arena-hMUBZiSE.js").then(function(e){return e.b}))}},dojoin:{"-":()=>{yg(import("./arenaDoJoin-B3hiY6KQ.js"))}},join:{"-":()=>{yg(import("./arenaJoin-DL4xC1Us.js"))}},completed:{"-":()=>{yg(import("./completedArenas-BUrUC7C8.js"))}},pickmove:{"-":()=>{yg(import("./storeMoves-DOeAk3ow.js"))}},setup:{"-":()=>{yg(import("./setupMoves-CShZ8zmq.js"))}}}
var Sk={"-":{"-":()=>{yg(import("./injectAuctionHouse-BAxdmGWI.js"))}},quickcreate:{"-":()=>{yg(import("./quickCreate-DINse_Lp.js"))}}}
var Ek={"-":{"-":()=>{yg(import("./composing-B7bJzq0e.js"))}},breakdown:{"-":()=>{yg(import("./breakdown-XHo2_sGA.js"))}},create:{"-":()=>{yg(import("./composingCreate-CBeEu6jv.js"))}}}
function Ck(){yg(import("./bioWidgets-CzZKncWI.js"))}function Pk(){yg(import("./injectGuild-_B0eGgn3.js"))}const Lk=()=>{yg(import("./guildAdvisor-BMpbC6xZ.js"))}
const $k=()=>{yg(import("./groups-BJ2iEip1.js"))}
const Tk=()=>{yg(import("./addRemoveTags-Ck9BBwoB.js"))}
const Ok=()=>{yg(import("./guildChat-kGvY0qaF.js"))}
var Ik={inventory:{report:()=>{yg(import("./guildReport-BaJhLkIr.js"))},addtags:Tk,removetags:Tk,storeitems:()=>{yg(import("./storeitems-D_-s15Te.js"))}},chat:{"-":Ok},dochat:{"-":Ok},log:{"-":()=>{yg(import("./guildLog-DMKXjAT5.js"))}},groups:{viewstats:()=>{yg(import("./injectGroupStats-r7TqIi9K.js"))},joinallgroupsundersize:$k,joinall:$k,"-":$k},manage:{"-":Pk},advisor:{"-":Lk,weekly:Lk},history:{"-":Ck},view:{"-":Pk},scouttower:{"-":()=>{yg(import("./injectScouttower-DHIBn7yu.js"))}},mailbox:{"-":()=>{yg(import("./guildMailbox-DxAh5xBT.js"))}},ranks:{"-":()=>{yg(import("./rank-P3oYk-LT.js"))}},conflicts:{rpupgrades:()=>{yg(import("./injectRPUpgrades-C5v9q06_.js"))}},bank:{"-":()=>{yg(import("./injectGuildBank-D2kKX1wC.js"))}},hall:{"-":()=>{yg(import("./hall-DfbEPr6V.js"))},post:Ck},"-":{"-":Pk},titanrewards:{"-":()=>{yg(import("./titanrewards-CgtR32NR.js"))}}}
function Ak(){yg(import("./viewRecipe-DprazjF2.js"))}var Rk={"-":{"-":function(){yg(import("./inventing-Cnzog6Xj.js"))}},doinvent:{"-":Ak},viewrecipe:{"-":Ak}}
function Mk(){yg(import("./ufsgAllowBack-Bwj7lzD4.js"))}var jk={"-":{"-":Mk},view:{"-":()=>{yg(import("./itemsView-CuAaLC1e.js"))}}}
function Fk(){yg(import("./profile-CCKDC0rf.js").then(function(e){return e.p}))}function Nk(){yg(import("./news-CkCPV_XQ.js"))}function Dk(){yg(import("./viewArchive-CsLUOwb1.js"))}var qk={fsbox:{"-":()=>{yg(import("./newsFsbox-DVnKlZ2y.js"))}},"-":{"-":Nk},shoutbox:{"-":()=>{yg(import("./newsShoutbox-BbvrvHcI.js"))}},viewupdatearchive:{"-":Dk},viewarchive:{"-":Dk}}
var Bk={news:{"-":Nk},viewupdatearchive:{"-":Dk},viewarchive:{"-":Dk},"-":{"-":()=>{yg(import("./unknownPage-Clv18So7.js"))}}},Hk=Jf('<button class="modal-close svelte-1dt59d4" type="button">×</button>')
Wf(["click"])
var Uk=Jf('<div class="modal-title svelte-1ftnqia"><!> <!></div> <div class="modal-content svelte-1ftnqia"><!></div>',1)
function Gk(e,t){$u(t,!0)
let n=hh(t,"visible",3,!0),r=gd(void 0),i=gd(void 0)
gh(()=>{tg(If(i),If(r))}),gy(e,{get close(){return t.close},get visible(){return n()},get modal(){return If(r)},set modal(e){_d(r,e,!0)},children:(e,n)=>{var r=Uk(),s=Id(r),o=Od(s)
vp(o,()=>t.title??Wc),function(e,t){var n=Hk()
n.__click=function(...e){t.close?.apply(this,e)},Zf(e,n)}(Ad(o,2),{get close(){return t.close}}),eh(s,e=>_d(i,e),()=>If(i)),vp(Od(Ad(s,2)),()=>t.children??Wc),Zf(e,r)},$$slots:{default:!0}}),Tu()}xu=!0
var Wk=Jf('<button type="button" class="mold-btn svelte-1hsd3o">Download Item Groups JSON</button>'),zk=Jf('<span class="error svelte-1hsd3o">Error loading mold data</span>'),Vk=Jf("<span>Loading mold data...</span>"),Qk=Jf('<div class="mold-link svelte-1hsd3o"><!></div>')
function Kk(e,t){$u(t,!0)
let n=gd(wd(Promise.resolve(null)))
async function r(){const e=await nv({cmd:"molds"})
if(e?.s&&e.r?.molds&&e.r?.cdns?.length)return function(e){const t=e.r.molds?.find(e=>"item_groups.json"===e.filename)
if(!t)throw new Error("Failed to load mold data")
const n=`${e.r.cdns[0]}${t.filename}`
return window.open(n,"_blank"),null}(e)
throw new Error("Failed to load mold data")}function i(){ig("GS Export","Items Mold"),_d(n,r(),!0)}var s=Qk()
ap(Od(s),()=>If(n),e=>{Zf(e,Vk())},e=>{var t=Wk()
t.__click=i,Zf(e,t)},e=>{Zf(e,zk())}),Zf(e,s),Tu()}function Jk(e,t){const n=URL.createObjectURL(e),r=um({download:t,href:n,style:{display:"none"}})
gg(document.body,r),$v(r),document.body.removeChild(r),setTimeout(()=>{URL.revokeObjectURL(n)},0)}function Yk(){return Q_({inc_tagged:"1",subcmd:"guild_store"})}Wf(["click"])
var Xk=Jf('<p class="error svelte-d95mlu">You must be in a guild to use this feature.</p>'),Zk=Jf('<div class="export-ready svelte-d95mlu"><p class="success svelte-d95mlu">Export ready! Click the button below to download your CSV file.</p> <button type="button" class="svelte-d95mlu">Download CSV</button></div>'),ex=Jf('<button type="button" class="svelte-d95mlu">Generate Export</button>'),tx=Jf('<p class="error svelte-d95mlu">Failed to generate export.</p>'),nx=Jf('<button type="button" disabled class="svelte-d95mlu">Generating Export...</button> <div class="progress svelte-d95mlu"><p class="svelte-d95mlu">Loading guild store inventory...</p> <div class="spinner svelte-d95mlu"></div></div>',1)
function rx(e,t){$u(t,!0)
let n=gd(wd(Promise.resolve(null))),r=gd(null)
const i=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],s=e=>{return[...i(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??""])].join(",")
var t}
async function o(){const e=await Yk()
if(!e?.items?.length)throw new Error("Invalid export data")
const t=e.items
return _d(r,`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name\n${(e=>e.map(s).join("\n"))(t)}\n`),null}function a(){ag()&&(ig("GS Export","Generate"),_d(n,o(),!0))}function l(){if(!If(r))return
ig("GS Export","Download")
const e=`gs_export_${(new Date).toISOString().slice(0,19).replace(/[:.]/g,"-")}.csv`
var t
Jk((t=If(r),new Blob([t],{type:"text/csv"})),e)}var c=Xf(),u=Id(c),d=e=>{Zf(e,Xk())},f=e=>{var t=Xf()
ap(Id(t),()=>If(n),e=>{Zf(e,nx())},e=>{var t=Xf(),n=Id(t),i=e=>{var t=Zk()
Ad(Od(t),2).__click=l,Zf(e,t)},s=e=>{var t=ex()
t.__click=a,Zf(e,t)}
lp(n,e=>{If(r)?e(i):e(s,!1)}),Zf(e,t)},e=>{Zf(e,tx())}),Zf(e,t)}
lp(u,e=>{ag()?e(f,!1):e(d)}),Zf(e,c),Tu()}Wf(["click"])
var ix=Jf('<div class="gs-export svelte-6n2izk"><p class="svelte-6n2izk">Export your Guild Store inventory data to a CSV file for analysis.</p> <!> <!></div>')
function sx(e,t){$u(t,!0)
let n=hh(t,"visible",15,!0)
{const t=e=>{Zf(e,Yf("Guild Store Export"))}
Gk(e,{close:function(){ig("GS Export","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{!function(e){var t=ix(),n=Ad(Od(t),2)
Kk(n,{}),rx(Ad(n,2),{}),Zf(e,t)}(e)},$$slots:{title:!0,default:!0}})}Tu()}const ox=wd({visible:!0})
let ax=0
var lx=Object.freeze({__proto__:null,default:function(){ax?ox.visible=!0:ax=np(sx,{props:ox,target:document.body})}}),cx=Jf("<div></div>"),ux=Jf("<div> </div>"),dx=Jf("<virtual-scroll-item><!></virtual-scroll-item>",2),fx=Jf("<div></div>"),px=Jf("<virtual-scroll-viewport><virtual-scroll-content><!> <!> <!></virtual-scroll-content></virtual-scroll-viewport>",2)
function hx(e,t){$u(t,!0)
let n=hh(t,"items",19,()=>[]),r=hh(t,"overscan",3,5),i=hh(t,"scrollToIndex",15)
let s,o=gd(0),a=gd(0),l=gd(void 0),c=gd(0),u=gd(!1),d=[],f=[],p=50,h=gd(0),g=!1,v=!1,_=!1
const m=od(()=>n().slice(If(o),If(a)).map((e,t)=>({index:t+If(o),item:e}))),b=od(()=>w(If(o))),y=od(()=>If(a)>=n().length?0:If(h)-w(If(a)))
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
for(let t=e;t<n().length;t++){if((f[t]||t*p)>s)return Math.min(n().length,t+r())}return n().length}gh(()=>{_d(u,!0)}),Bd(()=>{n().length&&If(u)&&(d=Array(n().length).fill(0),_d(h,n().length*p),_d(o,0),_d(a,Math.min(n().length,4*r()),!0))}),Bd(()=>{if(If(c)>0&&If(u)){const e=If(l)?.scrollTop||0,t=x(e),n=S(t,e,If(c))
_d(o,t,!0),_d(a,n,!0)}}),Bd(()=>{void 0!==i()&&If(u)&&(!function(e,t="smooth"){if(!If(u)||e<0||e>=n().length)return
const r=w(e)
If(l).scrollTo({top:r,behavior:t})}(i()),i(void 0))})
var E=px()
Sp(E,0,"svelte-jpynml")
var C=Od(E)
Sp(C,0,"svelte-jpynml")
var P=Od(C),L=e=>{var t=cx()
Wd(()=>Cp(t,`height: ${If(b)??""}px;`)),Zf(e,t)}
lp(P,e=>{If(b)>0&&e(L)})
var $=Ad(P,2)
dp($,17,()=>If(m),({index:e,item:t})=>e,(e,n)=>{let r=()=>If(n).index
var i=dx()
Sp(i,0,"svelte-jpynml")
var s=Od(i),o=e=>{var i=Xf()
vp(Id(i),()=>t.children,()=>({item:If(n).item,index:r()})),Zf(e,i)},a=e=>{var t=ux(),n=Od(t)
Wd(()=>tp(n,`Item ${r()??""}`)),Zf(e,t)}
lp(s,e=>{t.children?e(o):e(a,!1)}),mp(i,(e,t)=>function(e,{index:t,updateItemHeight:n}){function r(){const r=e.offsetHeight
r>0&&n(t,r)}const i=new ResizeObserver(r)
return i.observe(e),r(),{destroy(){i.disconnect()}}}?.(e,t),()=>({index:r(),updateItemHeight:k})),Zf(e,i)})
var T=Ad($,2),O=e=>{var t=fx()
Wd(()=>Cp(t,`height: ${If(y)??""}px;`)),Zf(e,t)}
lp(T,e=>{If(y)>0&&e(O)}),eh(E,e=>_d(l,e),()=>If(l)),Gf("scroll",E,function(){If(u)&&!v&&(_=!0,clearTimeout(s),s=setTimeout(()=>{_=!1},150),v=!0,requestAnimationFrame(()=>{v=!1
const e=If(l).scrollTop,t=x(e),n=S(t,e,If(c))
If(o)===t&&If(a)===n||(_d(o,t,!0),_d(a,n,!0))}))}),Xp(E,"offsetHeight",e=>_d(c,e)),Zf(e,E),Tu()}const gx={}
let vx=-1
function _x(e,t){Tc(3,t.func,[e])}function mx(e,t){if(gx[e])return gx[e].forEach(Rh(_x,t)),!0}function bx(e,t){gx[e]||(gx[e]=[]),vx+=1
const n=vx.toString()
return gx[e].push({token:n,func:t}),n}function yx(e,t){return gx[e]?gx[e][0].token:bx(e,t)}async function wx(e=-1,t=1,n=[]){const r=await function(e,t,n){return aw({subcmd:"log",log_id:e,latest:t,limit:n})}(e,t,1e3)
if(!r?.s)return void mx("guildLog-progress","Server Error.")
mx("guildLog-progress")
const i=n.concat(r.r.logs)
return 1e3!==r.r.logs.length?i:wx(r.r.logs[0].id,0,i)}var kx=Jf('<button type="button" class="svelte-1o6o1uz"><!></button>')
function xx(e,t){let n=hh(t,"disabled",3,0)
var r=kx()
r.__click=function(...e){t.onclick?.apply(this,e)},vp(Od(r),()=>t.children??Wc),Wd(()=>r.disabled=n()),Zf(e,r)}Wf(["click"])
var Sx=Jf('<span class="svelte-1sxqwyk">[<!>]</span>')
function Ex(e,t){var n=Sx()
xx(Ad(Od(n)),{get onclick(){return t.onclick},children:(e,n)=>{var r=Xf()
vp(Id(r),()=>t.children??Wc),Zf(e,r)},$$slots:{default:!0}}),Zf(e,n)}var Cx=Jf('<div class="filter-header svelte-1onji9i"><div class="filters svelte-1onji9i"><div class="front svelte-1onji9i"><span>Filters:</span></div> <div><label>Potions: <input type="checkbox"/></label></div> <div><label>Store/Recalls: <input type="checkbox"/></label></div> <div><label>Relics: <input type="checkbox"/></label></div> <div><label>Mercenaries: <input type="checkbox"/></label></div> <div><label>Group Combats: <input type="checkbox"/></label></div> <div><!></div> <div><label>Donations: <input type="checkbox"/></label></div> <div><label>Rankings: <input type="checkbox"/></label></div> <div><label>GvGs: <input type="checkbox"/></label></div> <div><label>Tag/UnTags: <input type="checkbox"/></label></div> <div><label>Titans: <input type="checkbox"/></label></div> <div><label>Other: <input type="checkbox"/></label></div></div> <div class="button-row svelte-1onji9i"><div></div> <div class="buttons svelte-1onji9i"><div><!></div> <div><!></div> <div><!></div></div> <div class="search-box svelte-1onji9i"><label>Search: <span class="search-wrapper svelte-1onji9i"><input type="text" class="svelte-1onji9i"/> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></span></label></div></div></div>')
function Px(e){return`${e[0]}-${e[1]}-${e[2]} ${e[3]}:${e[4]}:${e[5]}`}function Lx(e){return"[object Date]"===Object.prototype.toString.call(e)&&!Iw(e.getTime())}function $x(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(cy)}(e))}function Tx(e){if(Lx(e))return Px($x(e))}function Ox(e){return Tx(new Date(1e3*e))}Wf(["change"])
let Ix=null
function Ax(){const e=t("holdtext")
if(e&&!Ix){const t=l(/fallensword.com\/\?ref=(?<id>\d+)/,n(e))
t&&(Ix=Number(t))}return Ix}function Rx(e){return nv({cmd:"combat",subcmd:"view",combat_id:e})}const Mx="fsh_pvpCombat"
let jx=null,Fx={}
const Nx={}
async function Dx(){const e=await j_(Mx)
return Fx=e?(e?.lastCheck??0)<Go()?function(e){var t
const n={...lm(lg(e).filter((t=Wo(),([e,n])=>"lastCheck"===e||n?.logTime>t))),lastCheck:Ho()}
return F_(Mx,n),n}(e):e:{lastCheck:Ho()},Fx}async function qx(e,t){Nx[t]=sv(Rx,0,t)
const n=await Nx[t]
if(n?.s)return Fx[t]={...n,logTime:e},F_(Mx,Fx),n
delete Nx[t]}async function Bx(e,t){jx||(jx=Dx())
const n=await jx
return n[t]?n[t]:Nx[t]?Nx[t]:qx(e,t)}function Hx(){return e={subcmd2:"view"},aw({subcmd:"recruit",...e})
var e}var Ux=Jf('<i class="fas fa-envelope" aria-hidden="true"></i>'),Gx=Jf('<a class="svelte-87xocm"> </a>'),Wx=Jf('[ <a class="svelte-87xocm"><img class="svelte-87xocm"/> </a> ]',1),zx=Jf("<!> <!>",1),Vx=Jf('<span class="action-buttons svelte-87xocm">[ <!> | <!> ]</span>'),Qx=Jf('<div class="rel svelte-87xocm"> </div>'),Kx=Jf('<div class="rel svelte-87xocm"><span class="fshSpinner recruit-spinner svelte-87xocm"></span></div>'),Jx=Jf('<!> <span class="action-buttons svelte-87xocm">[ <!> | <!> | <!> | <!> ]</span>',1),Yx=Jf('<span class="action-buttons svelte-87xocm">[ <!> ]</span>'),Xx=Jf('<div><a class="svelte-87xocm"> </a>\'s group looted the item \'<span class="fshGreen"> </span>\'</div>'),Zx=Jf("<div><div><!></div> <div><!></div> <div><!> <!> <!> <!></div></div>")
function eS(e,t){$u(t,!0)
let n=hh(t,"groupCombatItems",3,null),r=hh(t,"hideNonPlayerGuildLogMessages",3,null),i=hh(t,"logEntry",3,null),s=gd(wd(Promise.resolve())),o=gd("waiting")
function a(e){ig("Guild Log",e)}const l=e=>e
function c(e){const t=e.msg.attachments?.filter(e=>0===e.type)
return t?.length&&!t.filter(({data:{id:e}})=>e===Ax()).length}async function u(e,t){a(t),_d(s,Hx(),!0)
const n=await If(s)
if(n?.s&&vc(n?.r)){const r=n.r.find(({player:{id:t}})=>t===e.id)
r?.id?vv(`${Pa}recruit&subcmd2=${t}&id=${r.id}`):_d(o,"gone")}else _d(o,"error")}var d=Zx()
let f
var p=Od(d)
let h
var g=Od(p),v=e=>{Zf(e,Ux())}
lp(g,e=>{i().time&&e(v)})
var _=Ad(p,2)
let m
var b=Od(_),y=e=>{var t=Yf()
Wd(e=>tp(t,e),[()=>Ox(i().time)]),Zf(e,t)}
lp(b,e=>{i().time&&e(y)})
var w=Ad(_,2)
let k
var x=Od(w)
dp(x,17,()=>i().msg.text.split(/<link=a(\d)><\/link>/).filter(l),up,(e,t)=>{var n=Xf(),r=Id(n),s=e=>{var n=zx(),r=Id(n),s=e=>{var n=Gx(),r=Od(n)
Wd(()=>{Ap(n,"href",`${ba??""}${i().msg.attachments[If(t)].data.id??""}`),tp(r,i().msg.attachments[If(t)].data.name)}),Zf(e,n)}
lp(r,e=>{0===i().msg.attachments[If(t)].type&&e(s)})
var o=Ad(r,2),a=e=>{var n=Wx(),r=Ad(Id(n)),s=Od(r),o=Ad(s,1,!0)
Wd(()=>{Ap(r,"href",`${Ia??""}${i().msg.attachments[If(t)].data.id??""}`),Ap(s,"src",`${Ko??""}guilds/${i().msg.attachments[If(t)].data.id??""}_mini.png`),Ap(s,"alt",i().msg.attachments[If(t)].data.name),tp(o,i().msg.attachments[If(t)].data.name)}),Zf(e,n)}
lp(o,e=>{1===i().msg.attachments[If(t)].type&&e(a)}),Zf(e,n)},o=e=>{var n=Yf()
Wd(()=>tp(n,If(t))),Zf(e,n)}
lp(r,e=>{1!==If(t).length||Iw(Number(If(t)))?e(o,!1):e(s)}),Zf(e,n)})
var S=Ad(x,2)
dp(S,17,()=>i().msg.attachments&&i().msg.attachments.filter(({type:e})=>0===e),up,(e,t)=>{let n=()=>If(t).data
var r=Jx(),l=Id(r),c=e=>{var t=Xf()
ap(Id(t),()=>If(s),e=>{Zf(e,Kx())},e=>{var t=Xf(),r=Id(t),i=e=>{var t=Vx(),r=Ad(Od(t))
xx(r,{onclick:()=>u(n(),"acceptjoin"),children:(e,t)=>{Zf(e,Yf("Accept"))},$$slots:{default:!0}}),xx(Ad(r,2),{onclick:()=>u(n(),"denyjoin"),children:(e,t)=>{Zf(e,Yf("Deny"))},$$slots:{default:!0}}),Zf(e,t)},s=e=>{var t=Qx(),n=Od(t)
Wd(()=>tp(n,If(o))),Zf(e,t)}
lp(r,e=>{"waiting"===If(o)?e(i):e(s,!1)}),Zf(e,t)}),Zf(e,t)}
lp(l,e=>{21===i().type&&e(c)})
var d=Ad(l,2),f=Ad(Od(d))
xx(f,{onclick:()=>function(e){a("reply"),window.openQuickMsgDialog(e.name)}(n()),children:(e,t)=>{Zf(e,Yf("Reply"))},$$slots:{default:!0}})
var p=Ad(f,2)
xx(p,{onclick:()=>function(e){a("buff"),Fb(e.id)}(n()),children:(e,t)=>{Zf(e,Yf("Buff"))},$$slots:{default:!0}})
var h=Ad(p,2)
xx(h,{onclick:()=>function(e){a("send"),vv(`${wa}${e.name}`)}(n()),children:(e,t)=>{Zf(e,Yf("Send"))},$$slots:{default:!0}}),xx(Ad(h,2),{onclick:()=>function(e){a("trade"),vv(`${ka}${e.name}`)}(n()),children:(e,t)=>{Zf(e,Yf("Trade"))},$$slots:{default:!0}}),Zf(e,r)})
var E=Ad(S,2)
dp(E,17,()=>i().msg.attachments&&i().msg.attachments.filter(({type:e})=>11===e),up,(e,t)=>{var n=Yx()
xx(Ad(Od(n)),{onclick:()=>function(e){a("combat"),vv(`${da}combat&subcmd=view&combat_id=${e}`)}(If(t).data),children:(e,t)=>{Zf(e,Yf("View Combat"))},$$slots:{default:!0}}),Zf(e,n)})
var C=Ad(E,2),P=e=>{var t=Xf()
ap(Id(t),()=>Bx(i().time,i().msg.attachments[0].data),null,(e,t)=>{var n=Xf(),r=Id(n),i=e=>{var n=Xx(),r=Od(n),i=Od(r),s=Od(Ad(r,2))
Wd(()=>{Ap(r,"href",`${ba??""}${If(t).r.combat.attacker.group.players[0].id??""}`),tp(i,If(t).r.combat.attacker.group.players[0].name),tp(s,If(t)?.r?.combat?.items?.[0]?.n)}),Zf(e,n)}
lp(r,e=>{If(t)?.r?.combat?.items?.[0]?.n&&e(i)}),Zf(e,n)}),Zf(e,t)}
lp(C,e=>{17===i().type&&n()&&i().msg.text.includes("victorious")&&e(P)}),Wd(e=>{f=Sp(d,0,"row-container svelte-87xocm",null,f,e),h=Sp(p,0,"svelte-87xocm",null,h,{old:i().old,new:i().new}),m=Sp(_,0,"svelte-87xocm",null,m,{old:i().old,new:i().new}),k=Sp(w,0,"svelte-87xocm",null,k,{old:i().old,new:i().new})},[()=>({"not-self":r()&&c(i()),separator:i().index})]),Zf(e,d),Tu()}const tS=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to","has added tags to","has removed some tags from"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited [,0-9]+ gold into the guild bank/,/deposited [,0-9]+ Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled","has been stripped of their rank by",/has revoked .+'s invite to the guild/,"has been rejected from joining the guild"],[/resulted in .* with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with","has initiated a conflict with your guild","is participating in the conflict against"],["Titan Reward item","from your guild's contribution to the defeat of the titan","7 day cooldown has been activated on your guild for this titan"]]
function nS(e,t){return Gl(t)?e.includes(t):t.test(e)}function rS(e,t){return t.some(Rh(nS,e))}function iS(e){const t=tS.findIndex(Rh(rS,e))
return-1===t?0:t}var sS=Jf('<span class="white svelte-ertdo2">(Guild Log messages not involving self are dimmed!)</span>'),oS=Jf('<div class="vs svelte-ertdo2"><!></div>'),aS=Jf(" <br/>",1),lS=Jf('<div class="fsh-guild-log svelte-ertdo2"><!> <div class="row-container svelte-ertdo2"><div class="innerColumnHeader svelte-ertdo2">&nbsp;</div> <div class="innerColumnHeader svelte-ertdo2">Date</div> <div class="innerColumnHeader svelte-ertdo2">Message <!></div></div> <!></div>')
function cS(e,t){$u(t,!0)
let n=hh(t,"visible",15,!0),r=gd(wd(Array(11).fill(!0))),i=gd(null),s=gd(null),o=gd(wd([])),a=gd(wd(Promise.resolve())),l=gd(wd([])),c=gd("")
const u=od(()=>If(o).filter(({fshType:e})=>If(r)[e]).filter(({searchable:e})=>""===If(c)||e.includes(If(c).toLowerCase())).map(v)),d=od(()=>If(u).length?If(u):[{index:0,msg:{text:""}}])
let f=0,p=null,h=null,g=null
const v=(e,t)=>({...e,index:t}),_=({msg:e})=>e.text.replace(/<link=a(\d)><\/link>/g,(t,n)=>e.attachments[n].data.name),m=e=>({...e,fshType:iS(e.msg.text),new:p&&e.time>h,old:p&&(g-e.time)/60>20&&e.time<=h,searchable:_(e).toLowerCase()}),b=(e,t)=>t.time-e.time
function y(e){ig("Guild Log",e)}function w(){y("cbChange")}function k(){y("selectAll")}function x(){y("selectNone")}function S(){y("oldGuildLog"),vv(La)}function E(){y("clearSearch"),_d(c,"")}function C(e){_d(l,If(l).concat(e),!0)}function P(e){e?C(e):(f+=1,C(`chunk ${f}`))}async function L(){_d(l,["Loading..."],!0),_d(o,[],!0),g=(new Date).setUTCSeconds(0,0)/1e3,h=Hl("lastModalGuildLogCheck")??g,Vl("lastModalGuildLogCheck",g),p=Hl("enableLogColoring"),_d(i,Hl("groupCombatItems"),!0),_d(s,Hl("hideNonPlayerGuildLogMessages"),!0),f=0,yx("guildLog-progress",P)
const e=await sv(wx)
e&&_d(o,e.toSorted(b).map(m),!0)}function $(){_d(a,L(),!0)}Bd(()=>{n()&&$()})
{const t=e=>{Zf(e,Yf("Guild Log"))}
Gk(e,{close:function(){y("close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=lS(),o=Od(n)
!function(e,t){$u(t,!0)
let n=hh(t,"checks",31,()=>wd(Array(11).fill(!0))),r=hh(t,"searchValue",15,"")
function i(){F_("fsh_LogChecks",Eu(n()))}function s(){i(),t.cbChange()}function o(e){n(n().map(()=>e)),i()}!async function(){n(await j_("fsh_LogChecks")??Array(11).fill(!0))}()
var a=Cx(),l=Od(a),c=Ad(Od(l),2),u=Od(c),d=Ad(Od(u))
d.__change=s,d.value=d.__value="1"
var f=Ad(c,2),p=Od(f),h=Ad(Od(p))
h.__change=s,h.value=h.__value="2"
var g=Ad(f,2),v=Od(g),_=Ad(Od(v))
_.__change=s,_.value=_.__value="4"
var m=Ad(g,2),b=Od(m),y=Ad(Od(b))
y.__change=s,y.value=y.__value="5"
var w=Ad(m,2),k=Od(w),x=Ad(Od(k))
x.__change=s,x.value=x.__value="6"
var S=Ad(w,2)
xx(Od(S),{get onclick(){return t.oldGuildLog},children:(e,t)=>{Zf(e,Yf("Old Guild Log"))},$$slots:{default:!0}})
var E=Ad(S,2),C=Od(E),P=Ad(Od(C))
P.__change=s,P.value=P.__value="7"
var L=Ad(E,2),$=Od(L),T=Ad(Od($))
T.__change=s,T.value=T.__value="8"
var O=Ad(L,2),I=Od(O),A=Ad(Od(I))
A.__change=s,A.value=A.__value="9"
var R=Ad(O,2),M=Od(R),j=Ad(Od(M))
j.__change=s,j.value=j.__value="3"
var F=Ad(R,2),N=Od(F),D=Ad(Od(N))
D.__change=s,D.value=D.__value="10"
var q=Od(Ad(F,2)),B=Ad(Od(q))
B.__change=s,B.value=B.__value="0"
var H=Ad(l,2),U=Ad(Od(H),2),G=Od(U)
Ex(Od(G),{onclick:function(){o(!0),t.selectAll()},children:(e,t)=>{Zf(e,Yf("Select All"))}})
var W=Ad(G,2)
Ex(Od(W),{onclick:function(){o(!1),t.selectNone()},children:(e,t)=>{Zf(e,Yf("Select None"))}}),Ex(Od(Ad(W,2)),{get onclick(){return t.refresh},children:(e,t)=>{Zf(e,Yf("Refresh"))}})
var z=Od(Ad(U,2)),V=Ad(Od(z)),Q=Od(V),K=Ad(Q,2)
{let e=od(()=>!r())
cp(K,()=>({"--button-deco":"none"})),xx(K.lastChild,{get disabled(){return If(e)},get onclick(){return t.clearSearch},children:(e,t)=>{Zf(e,Yf("×"))},$$slots:{default:!0}})}Vp(d,()=>n()[1],e=>n(n()[1]=e,!0)),Vp(h,()=>n()[2],e=>n(n()[2]=e,!0)),Vp(_,()=>n()[4],e=>n(n()[4]=e,!0)),Vp(y,()=>n()[5],e=>n(n()[5]=e,!0)),Vp(x,()=>n()[6],e=>n(n()[6]=e,!0)),Vp(P,()=>n()[7],e=>n(n()[7]=e,!0)),Vp(T,()=>n()[8],e=>n(n()[8]=e,!0)),Vp(A,()=>n()[9],e=>n(n()[9]=e,!0)),Vp(j,()=>n()[3],e=>n(n()[3]=e,!0)),Vp(D,()=>n()[10],e=>n(n()[10]=e,!0)),Vp(B,()=>n()[0],e=>n(n()[0]=e,!0)),Gp(Q,r),Zf(e,a),Tu()}(o,{cbChange:w,clearSearch:E,oldGuildLog:S,refresh:$,selectAll:k,selectNone:x,get checks(){return If(r)},set checks(e){_d(r,e,!0)},get searchValue(){return If(c)},set searchValue(e){_d(c,e,!0)}})
var u=Ad(o,2),f=Ad(Od(u),4),p=Ad(Od(f)),h=e=>{Zf(e,sS())}
lp(p,e=>{If(s)&&e(h)}),ap(Ad(u,2),()=>If(a),e=>{var t=Xf()
dp(Id(t),17,()=>If(l),up,(e,t)=>{var n=aS(),r=Id(n)
Wd(()=>tp(r,`${If(t)??""} `)),Zf(e,n)}),Zf(e,t)},e=>{var t=oS()
{const e=(e,t)=>{eS(e,{get groupCombatItems(){return If(i)},get hideNonPlayerGuildLogMessages(){return If(s)},get logEntry(){return t?.().item}})}
hx(Od(t),{get items(){return If(d)},overscan:20,children:e,$$slots:{default:!0}})}Zf(e,t)},(e,t)=>{var n=Yf()
Wd(()=>tp(n,If(t))),Zf(e,n)}),Zf(e,n)},$$slots:{title:!0,default:!0}})}Tu()}const uS=wd({visible:!0})
let dS=0
var fS=Object.freeze({__proto__:null,default:function(){dS?uS.visible=!0:dS=np(cS,{props:uS,target:document.body})}})
function pS(){return aw({subcmd:"fetchinv"})}function hS(){return sv(pS)}function gS(e){return aw({subcmd:"inventory",...e})}function vS(){return gS({subcmd2:"report"})}function _S(){return sv(vS)}function mS(e,t,[n,r]){Jl(r)&&null!==r?e[n]=t(r.constructor(),r):e[n]=r}function bS(e,t){return Jl(t)&&lg(t).forEach(Rh(mS,e,bS)),e}function yS(e){return e?.constructor&&bS(e.constructor(),e)}Wf(["click"]),wd({visible:!0})
function wS(e,t,n){const r=(e=>Math.max(Math.min(e,100),0))((e-t)/(n-t)*100)
let i=255,s=255
r<50?s=Math.round(5.1*r):i=Math.round(510-5.1*r)
const o=(e=>`000000${e.toString(16)}`.slice(-6))(65536*i+256*s+0)
return`#${o}`}var kS=Jf('<div class="svelte-1eys1iq"> </div> <div class="svelte-1eys1iq"> </div>',1),xS=Jf('<div class="inventory svelte-1eys1iq"><div class="inventory-grid-container svelte-1eys1iq"></div></div>'),SS=Jf("<option> </option>"),ES=Jf("<option> </option>"),CS=Jf('<div class="svelte-1eys1iq"> </div> <div class="svelte-1eys1iq"><select class="svelte-1eys1iq"><!></select></div> <div class="svelte-1eys1iq"><input title="Ignore" type="checkbox" class="svelte-1eys1iq"/></div>',1),PS=Jf('<div class="mapping svelte-1eys1iq"><div class="mapping-grid-container svelte-1eys1iq"><!> <div class="svelte-1eys1iq"></div> <div class="svelte-1eys1iq"><button class="custombutton svelte-1eys1iq" type="button">Ignore All</button> <button class="custombutton svelte-1eys1iq" type="button">Reset</button></div></div></div>'),LS=Jf('<div class="thresholds svelte-1eys1iq">Min: <input max="999" min="0" type="number" class="svelte-1eys1iq"/> Max: <input max="999" min="0" type="number" class="svelte-1eys1iq"/></div>'),$S=Jf('<div class="filters svelte-1eys1iq"><label class="svelte-1eys1iq"><input type="checkbox"/> Member Backpacks</label> <label class="svelte-1eys1iq"><input type="checkbox"/> Guild Store</label></div> <div class="pot-report svelte-1eys1iq"><input class="tab-ctrl svelte-1eys1iq" id="pr-inv" type="checkbox"/> <label for="pr-inv" class="svelte-1eys1iq">Composed Potion Inventory</label> <input class="tab-ctrl svelte-1eys1iq" id="pr-map" type="checkbox"/> <label for="pr-map" class="svelte-1eys1iq">Mapping</label> <input class="tab-ctrl svelte-1eys1iq" id="pr-levels" type="checkbox"/> <label for="pr-levels" class="svelte-1eys1iq">Thresholds</label> <div class="panels svelte-1eys1iq"><!> <!> <!></div></div>',1),TS=Jf('<p style="color: red"> </p>'),OS=Jf('<div class="main svelte-1eys1iq"><!></div>')
function IS(e,t){$u(t,!0)
const n="fsh_potReport",r={inventory:!1,mapping:!1,thresholds:!1,potMap:[],minpoint:20,maxpoint:30,backpack:!0,guildstore:!0}
let i=hh(t,"visible",15,!0),s=gd(null),o=gd(!1),a=gd(!1),l=gd(!1),c=gd(wd([])),u=[],d=gd(wd([]))
const f=({b:e})=>13699===e,p=e=>wS(e,If(s).minpoint,If(s).maxpoint),h=({ignore:e})=>!e,g=e=>({name:t})=>t===e,v=(e,t)=>yv(e.n,t.n),_=({r:e})=>e,m=e=>ig("pot-report",e),b=({player:e,n:t})=>({loc:e?1:2,n:t}),y=()=>F_(n,Eu(If(s))),w=e=>u.filter((e=>({n:t})=>e.some(g(t)))(e)).filter(({loc:e})=>If(s).backpack||1!==e).filter(({loc:e})=>If(s).guildstore||2!==e).map((e=>({loc:t,n:n})=>({loc:t,mapped:e.find(g(n)).mapped,n:n}))(e))
function k(){y(),_d(c,function(){const e=If(s).potMap.filter(h),t=w(e)
return Zv(e,"mapped").map((e=>({mapped:t})=>({name:t,count:e.filter(({mapped:e})=>e===t).length}))(t)).sort((e,t)=>yv(e.name,t.name))}(),!0),_d(d,If(s).potMap.map(e=>({...e,waiting:!0})),!0)}function x(){If(s).potMap=If(d).map(({ignore:e,mapped:t,name:n})=>({ignore:e,mapped:t,name:n})),k()}async function S(){!async function(){_d(s,await j_(n)||yS(r),!0),_d(o,If(s).inventory,!0),_d(a,If(s).mapping,!0),_d(l,If(s).thresholds,!0),If(s).backpack=If(s).backpack??r.backpack,If(s).guildstore=If(s).guildstore??r.guildstore}()
const e=await uw([hS(),_S()])
if(!vc(e[0]?.r)||!vc(e[1]?.r))throw new Error("Server Error")
u=(e=>e.flatMap(_).filter(f).map(b).sort(v))(e),If(s).potMap=Zv(u,"n").map(({n:e})=>({name:e,mapped:If(s)?.potMap?.find(g(e))?.mapped||e,ignore:If(s)?.potMap?.find(g(e))?.ignore??!1})),k()}{const t=e=>{Zf(e,Yf("Pot Report"))}
Gk(e,{close:function(){m("close"),i(!1)},get visible(){return i()},title:t,children:(e,t)=>{var n=OS()
ap(Od(n),S,e=>{Zf(e,Yf("Loading..."))},e=>{var t=$S(),n=Id(t),r=Od(n),i=Od(r)
i.__change=()=>{m("backpack"),y(),k()}
var u=Od(Ad(r,2))
u.__change=()=>{m("guildstore"),y(),k()}
var f=Od(Ad(n,2))
f.__change=()=>{m("inventory"),y()},f.__click=()=>{If(o)||_d(o,!0)}
var h=Ad(f,4)
h.__change=()=>{m("mapping"),y()},h.__click=()=>{If(a)||_d(a,!0)}
var g=Ad(h,4)
g.__change=()=>{m("thresholds"),y()},g.__click=()=>{If(l)||_d(l,!0)}
var v=Od(Ad(g,4)),_=e=>{var t=xS()
dp(Od(t),21,()=>If(c),up,(e,t)=>{let n=()=>If(t).count
var r=kS(),i=Id(r),s=Od(i),o=Ad(i,2)
let a
var l=Od(o)
Wd(e=>{tp(s,If(t).name),a=Cp(o,"",a,e),tp(l,n())},[()=>({"background-color":p(n())})]),Zf(e,r)}),Zf(e,t)}
lp(v,e=>{If(o)&&e(_)})
var b=Ad(v,2),w=e=>{var t=PS(),n=Od(t),r=Od(n)
dp(r,17,()=>If(d),up,(e,t,n)=>{let r=()=>If(t).name,i=()=>If(t).mapped
var s=CS(),o=Id(s),a=Od(o),l=Ad(o,2),c=Od(l)
c.__change=()=>{m("mapped"),x()},c.__mousedown=()=>{If(d)[n].waiting=!1}
var u=Od(c),f=e=>{var t=SS(),n=Od(t),r={}
Wd(()=>{tp(n,i()),r!==(r=i())&&(t.__value=i())}),Zf(e,t)},p=e=>{var t=Xf()
dp(Id(t),17,()=>If(d),up,(e,t)=>{let n=()=>If(t).name
var r=ES(),s=Od(r),o={}
Wd(()=>{var e
e=r,i()===n()?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected"),tp(s,n()),o!==(o=n())&&(r.__value=n())}),Zf(e,r)}),Zf(e,t)}
lp(u,e=>{If(t).waiting?e(f):e(p,!1)})
var h=Od(Ad(l,2))
h.__change=()=>{m("ignore"),x()},h.__click=e=>e.target.blur(),Wd(()=>{tp(a,r()),Ap(c,"name",r())}),Lp(c,()=>If(d)[n].mapped,e=>If(d)[n].mapped=e),Vp(h,()=>If(d)[n].ignore,e=>If(d)[n].ignore=e),Zf(e,s)})
var i=Od(Ad(r,4))
i.__click=()=>{m("ignore-all"),If(s).potMap=If(s).potMap.map(e=>({...e,ignore:!0})),k()},Ad(i,2).__click=()=>{m("reset"),If(s).potMap=If(s).potMap.map(e=>({...e,mapped:e.name,ignore:!1})),k()},Zf(e,t)}
lp(b,e=>{If(a)&&e(w)})
var S=Ad(b,2),E=e=>{var t=LS(),n=Ad(Od(t))
n.__input=()=>{m("minpoint"),k()}
var r=Ad(n,2)
r.__input=()=>{m("maxpoint"),k()},Gp(n,()=>If(s).minpoint,e=>If(s).minpoint=e),Gp(r,()=>If(s).maxpoint,e=>If(s).maxpoint=e),Zf(e,t)}
lp(S,e=>{If(l)&&e(E)}),Vp(i,()=>If(s).backpack,e=>If(s).backpack=e),Vp(u,()=>If(s).guildstore,e=>If(s).guildstore=e),Vp(f,()=>If(s).inventory,e=>If(s).inventory=e),Vp(h,()=>If(s).mapping,e=>If(s).mapping=e),Vp(g,()=>If(s).thresholds,e=>If(s).thresholds=e),Zf(e,t)},(e,t)=>{var n=TS(),r=Od(n)
Wd(()=>tp(r,If(t).message)),Zf(e,n)}),Zf(e,n)},$$slots:{title:!0,default:!0}})}Tu()}Wf(["change","click","mousedown","input"])
const AS=wd({visible:!0})
let RS=0
var MS=Object.freeze({__proto__:null,default:function(){RS?AS.visible=!0:RS=np(IS,{props:AS,target:document.body})}})
const jS=(e,t)=>({r:{[t]:[{n:l(/'(?<id>.*)'/,e)}]},s:!0})
function FS(e){const t=e.split(" x ")
return{amount:t[0],type:$l.indexOf(t[1])}}const NS=[["You successfully used",()=>({s:!0})],["You successfully extracted",e=>jS(e,"components")],["You failed to extract",()=>({r:{},s:!0})],["You gained",function(e){const t=l(/You gained {1,2}}(?<fragList>.*) Fragment\(s\)/,e)
if(t){return{r:{frags:t.split(", ").map(FS)},s:!0}}ig("da/useItem","Bad Msg",e)}],["You received",e=>jS(e,"mailbox_items")]]
async function DS(e){const t=await cv({cmd:"profile",subcmd:"useitem",inventory_id:e})
return t?function(e){const t=uv(e)
if(!t)return ig("da/useItem","No Info"),{e:{message:"No Info"},s:!1}
{const e=NS.find(e=>t.startsWith(e[0]))
if(e)return e[1](t)}return{e:{message:t},s:!1}}(t):{s:!1}}function qS(e){return sv(DS,0,e)}function BS(){return Q_({subcmd:"inventory"})}var HS=Jf('<label><input type="checkbox" class="svelte-1f42rtn"/> Select items in ST</label>')
function US(e,t){$u(t,!0)
let n=hh(t,"inSt",15,null)
const r="selectST"
n(Hl(r))
var i=HS(),s=Od(i)
s.__change=function(){Vl(r,n()),t.dispatchToggle()},Vp(s,n),Zf(e,i),Tu()}function GS(e){return`${e.amount} x ${$l[e.type]}`}Wf(["change"])
const WS=[[e=>e.components?.length,e=>`You successfully extracted 1 '${e.components?.[0].n}' component(s) from 1 resource(s).`],[e=>e.frags,e=>`You gained ${e.frags.map(GS).join(", ")} Fragments by opening the Fragment Stash.`],[e=>e.mailbox_items?.length,e=>`You received 1 x '${e.mailbox_items?.[0].n}' from the container.`],[()=>1,()=>"<You failed to extract any components from resource(s)."]]
function zS(e){return WS.find(([t])=>t(e))[1](e)}const VS=(e,t,n)=>`fetchitem.php?item_id=${t}&inv_id=${n}&t=1&p=${e}`
var QS=Jf('<span class="fshRed"> </span>'),KS=Jf('<li class="svelte-13gbaa4"><!></li>'),JS=Jf('<span class="fshSpinner fshSpinner12"></span>'),YS=Jf('<tr><td><!></td><td class="imgCol svelte-13gbaa4"><span class="imgSpan tip-dynamic svelte-13gbaa4"></span></td><td> </td></tr>'),XS=Jf('<tr><td colspan="3"><p style="color: red"> </p></td></tr>'),ZS=Jf('<div class="svelte-13gbaa4">Select which type of plants you wish to extract all of. Only select\n    extractable resources. <br/> <!>&nbsp; <label><input type="checkbox" class="svelte-13gbaa4"/> Main Folder Only</label>&nbsp; <label><input type="checkbox" class="svelte-13gbaa4"/> Disable Prompts</label>&nbsp; <!> <br/> <table class="svelte-13gbaa4"><thead><tr><th class="actionCol svelte-13gbaa4">Actions</th><th colspan="2">Items</th></tr></thead><tbody><tr><td colspan="3"><ol></ol></td></tr><!></tbody></table></div>')
function eE(e,t){$u(t,!0)
let n=hh(t,"visible",15,!0)
const r="selectMain",i="disableQuickExtractPrompts"
let s=gd(null),o=null,a=gd(null),l=gd(wd(Hl(r))),c=gd(wd(Hl(i))),u=null,d=gd(null),f=gd(wd([]))
const p=e=>"Zombie Coffin"===e.item_name||12===e.type||16===e.type,h=(e,t)=>yv(e.item_name,t.item_name),g=e=>If(a)||!e.is_in_st,v=e=>!If(l)||-1===e.folder_id
function _(){_d(d,vc(u)&&function(e,t){return Zv(t,"item_name").map(n=>{return{...n,count:t.filter(e=>e.item_name===n.item_name).length,delPending:!1,extractIds:t.filter(e=>e.item_name===n.item_name).map(e=>e.inv_id),style:(r=n.item_id,`background-image: url(${Ko}items/${r}.gif)`),tip:VS(e,n.item_id,n.inv_id)}
var r})}(o,u.filter(g).filter(v)),!0)}function m(){ig("quickExtract","toggleSelectST"),_()}function b(){ig("quickExtract","toggleSelectMain"),Vl(r,If(l)),_()}function y(){ig("quickExtract","togglePrompts"),Vl(i,If(c))}async function w(){const e=await BS()
o=e?.player_id,u=e?.items?.filter(p).sort(h),_()}function k(){ig("quickExtract","refresh"),_d(f,[],!0),_d(s,w(),!0)}let x
async function S(e){const t=await qS(e);(function(e){return e?.s||x===e?.e?.message||(x=e?.e?.message,_d(f,[...If(f),e?.e?.message],!0)),e?.s})(t)&&(_d(f,[...If(f),zS(t.r)],!0),u=u.filter(t=>t.inv_id!==e))}Bd(()=>{n()&&(_d(f,[],!0),_d(s,w(),!0))})
{const t=e=>{Zf(e,Yf("Quick Extract"))}
Gk(e,{close:function(){ig("quickExtract","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=ZS(),r=Ad(Od(n),3)
US(r,{dispatchToggle:m,get inSt(){return If(a)},set inSt(e){_d(a,e,!0)}})
var i=Ad(r,2),o=Od(i)
o.__change=b
var u=Ad(i,2),p=Od(u)
p.__change=y
var h=Ad(u,2)
Ex(h,{onclick:k,children:(e,t)=>{Zf(e,Yf("Refresh"))}})
var g=Ad(h,4),v=Ad(Od(g)),_=Od(v),w=Od(_)
dp(Od(w),21,()=>If(f),up,(e,t)=>{var n=KS(),r=Od(n),i=e=>{var n=QS(),r=Od(n)
Wd(e=>tp(r,e),[()=>If(t).slice(1)]),Zf(e,n)},s=e=>{var n=Yf()
Wd(()=>tp(n,If(t))),Zf(e,n)}
lp(r,e=>{If(t).startsWith("<")?e(i):e(s,!1)}),Zf(e,n)}),ap(Ad(_),()=>If(s),null,e=>{var t=Xf()
dp(Id(t),17,()=>If(d),up,(e,t,n)=>{let r=()=>If(t).count,i=()=>If(t).delPending
var s=YS(),o=Od(s)
let a
var l=Od(o),u=e=>{var t=Xf(),s=Id(t),o=e=>{Zf(e,JS())},a=e=>{xx(e,{onclick:()=>async function(e){ig("quickExtract","extract",If(c)),(If(c)||await wy("Are you sure you want to extract all similar items?"))&&(If(d)[e].delPending=!0,await uw(If(d)[e].extractIds.map(S)),If(d)[e]?.count&&(If(d)[e].count=0))}(n),children:(e,t)=>{var n=Yf()
Wd(()=>tp(n,`Extract ${r()??""}`)),Zf(e,n)},$$slots:{default:!0}})}
lp(s,e=>{i()?e(o):e(a,!1)}),Zf(e,t)},f=e=>{Zf(e,Yf("Done"))}
lp(l,e=>{r()?e(u):e(f,!1)})
var p=Ad(o),h=Od(p),g=Od(Ad(p))
Wd(()=>{a=Sp(o,0,"svelte-13gbaa4",null,a,{delPending:i()}),Ap(h,"data-tipped",If(t).tip),Cp(h,If(t).style),tp(g,If(t).item_name)}),Zf(e,s)}),Zf(e,t)},(e,t)=>{var n=XS(),r=Od(n),i=Od(r),s=Od(i)
Wd(()=>tp(s,If(t).message)),Zf(e,n)}),Vp(o,()=>If(l),e=>_d(l,e)),Vp(p,()=>If(c),e=>_d(c,e)),Zf(e,n)},$$slots:{title:!0,default:!0}})}Tu()}Wf(["change"])
const tE=wd({visible:!0})
let nE=0
var rE=Object.freeze({__proto__:null,default:function(){nE?tE.visible=!0:nE=np(eE,{props:tE,target:document.body})}}),iE=Jf('<button type="button" class="svelte-142b9qt"><!></button>'),sE=Jf('<a target="_blank" class="svelte-142b9qt"> </a>'),oE=Jf('<div></div> <div></div> <div class="last-kill svelte-142b9qt"> </div> <div><a target="_blank" class="svelte-142b9qt"> </a></div>',1),aE=Jf('<div class="wide svelte-142b9qt"></div>'),lE=Jf('<div class="expando svelte-142b9qt"><!></div> <div><!></div> <div class="last-kill svelte-142b9qt"> </div> <div><a target="_blank" class="svelte-142b9qt"> </a></div> <!>',1)
function cE(e,t){$u(t,!0)
let n=gd(!1)
const r=()=>{ig("SE Tracker","Expand Row"),_d(n,!If(n))}
var i=lE(),s=Id(i),o=Od(s),a=e=>{var t=iE()
t.__click=r
var i=Od(t),s=e=>{Zf(e,Yf("∨"))},o=e=>{Zf(e,Yf(">"))}
lp(i,e=>{If(n)?e(s):e(o,!1)}),Wd(()=>Ap(t,"aria-expanded",If(n))),Zf(e,t)}
lp(o,e=>{t.entry[3].length&&e(a)})
var l=Ad(s,2),c=Od(l),u=e=>{var n=sE(),r=Od(n)
Wd(e=>{Ap(n,"href",`${za??""}creatures${fa}view&creature_id=${t.entry[4]??""}`),tp(r,e)},[()=>t.entry[0].replaceAll("_"," ")]),Zf(e,n)},d=e=>{var n=Yf()
Wd(e=>tp(n,e),[()=>t.entry[0].replaceAll("_"," ")]),Zf(e,n)}
lp(c,e=>{t.entry[4]>0?e(u):e(d,!1)})
var f=Ad(l,2),p=Od(f),h=Ad(f,2),g=Od(h),v=Od(g),_=Ad(h,2),m=e=>{var n=aE()
dp(n,21,()=>t.entry[3],up,(e,t)=>{var n=od(()=>Kc(If(t),2))
let r=()=>If(n)[1]
var i=oE(),s=Ad(Id(i),4),o=Od(s),a=Od(Ad(s,2)),l=Od(a)
Wd((e,t)=>{tp(o,e),Ap(a,"href",`${za??""}realms&search_name=${t??""}`),tp(l,r())},[()=>Ox(If(n)[0]),()=>encodeURIComponent(r())]),Zf(e,i)}),Hp(3,n,()=>xh,()=>({duration:300})),Zf(e,n)}
lp(_,e=>{If(n)&&e(m)}),Wd((e,n)=>{tp(p,e),Ap(g,"href",`${za??""}realms&search_name=${n??""}`),tp(v,t.entry[2])},[()=>Ox(t.entry[1]),()=>encodeURIComponent(t.entry[2])]),Zf(e,i),Tu()}Wf(["click"])
var uE=Jf('<span class="network svelte-1n8ngaj"></span> <label>Enable SE Tracker [&thinsp; <div class="tooltip svelte-1n8ngaj">? <div class="tooltiptext svelte-1n8ngaj"><span class="tooltiptitle svelte-1n8ngaj">Enable SE Tracker</span><br/><br/> <div>If enabled, will track the last time each SE was killed.<br/> This is DIFFERENT from the usual FSH network activity.<br/> When this is enabled, if you have ANY game page open in a browser tab it\n        will scan the SE Log every 10 minutes.<br/> You do not need auto-refresh for this to work.</div></div></div> &thinsp;]: <input type="checkbox" class="svelte-1n8ngaj"/></label>',1)
Wf(["click"])
const dE=oh([vk,sk],([e,t],n)=>{t&&e?function(e,t){const n=ek(e)
t(Zv(n.map(([,e])=>e)).map(e=>[e,n.filter(([,t])=>t===e).map(([e,,,,t,,,n=-1])=>[e,t,n])]).map(([e,t])=>[e,t[0][0],t[0][1],t.slice(1),t[0][2]]))}(t,n):n()})
var fE=Jf('<div><div class="innerColumnHeader svelte-1sib168">&nbsp;</div></div> <div><div class="innerColumnHeader svelte-1sib168">Creature</div></div> <div><div class="innerColumnHeader svelte-1sib168">Last Kill</div></div> <div><div class="innerColumnHeader svelte-1sib168">Location</div></div> <!>',1),pE=Jf('<div class="container svelte-1sib168"><div class="top svelte-1sib168"><!></div> <div class="tracker-table svelte-1sib168"><!></div></div>')
function hE(e){const t=()=>uh(dE,"$trackerTableStore",n),[n,r]=fh()
var i=pE(),s=Od(i)
!function(e,t){$u(t,!1)
const[n,r]=fh()
th()
var i=uE(),s=Id(i)
Cp(s,"",{},{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQnHdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQEqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltrr+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdYSvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMFegAAAABJRU5ErkJggg==")'})
var o=Ad(s,2),a=Ad(Od(o),3)
a.__click=function(e){ig("SE Tracker","Toggle Pref"),Vl("enableSeTracker",e.target.checked)},Vp(a,()=>uh(vk,"$trackerPrefStore",n),e=>dh(vk,e)),Zf(e,i),Tu(),r()}(Od(s),{})
var o=Od(Ad(s,2)),a=e=>{var n=fE()
dp(Ad(Id(n),8),1,t,e=>e[0],(e,t)=>{cE(e,{get entry(){return If(t)}})}),Zf(e,n)}
lp(o,e=>{t()&&e(a)}),Zf(e,i),r()}function gE(e,t){$u(t,!0)
let n=hh(t,"visible",15,!0)
{const t=e=>{Zf(e,Yf("Super Elite Tracker"))}
Gk(e,{close:function(){ig("SE Tracker","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{hE(e)},$$slots:{title:!0,default:!0}})}Tu()}const vE=wd({visible:!0})
let _E=0
var mE=Object.freeze({__proto__:null,default:function(){_E?vE.visible=!0:_E=np(gE,{props:vE,target:document.body})}})
function bE(e,t){return`<a href="${ba}${e}">${t}</a>`}var yE=Jf("<input/>"),wE=Jf("<option> </option>"),kE=Jf("<select><option> </option><!></select>"),xE=Jf("<th><!></th>"),SE=Jf("<th></th>"),EE=Jf('<tr class="svelte-18zqsmu"><!><!></tr>'),CE=Jf('<th tabindex="0"> <!></th>'),PE=Jf("<th></th>"),LE=Jf("<tr><!><!></tr>"),$E=Jf("<td><!></td>"),TE=Jf('<td><span class="isClickable svelte-18zqsmu" tabindex="0" role="button"><!></span></td>'),OE=Jf("<tr><td><!></td></tr>"),IE=Jf("<tr><!><!></tr> <!>",1),AE=Jf("<table><thead><!><!></thead><tbody></tbody></table>")
function RE(e,t){$u(t,!0)
let n=hh(t,"sortOrders",19,()=>[1,-1]),r=hh(t,"sortBy",15,""),i=hh(t,"sortOrder",31,()=>wd(n()?.[0]||1)),s=hh(t,"filterSelections",31,()=>wd({})),o=hh(t,"expanded",31,()=>wd([])),a=hh(t,"selected",31,()=>wd([])),l=hh(t,"expandRowKey",3,null),c=hh(t,"rowKey",19,l),u=hh(t,"expandSingle",3,!1),d=hh(t,"selectSingle",3,!1),f=hh(t,"selectOnClick",3,!1),p=hh(t,"iconAsc",3,"▲"),h=hh(t,"iconDesc",3,"▼"),g=hh(t,"iconSortable",3,""),v=hh(t,"iconExpand",3,"▼"),_=hh(t,"iconExpanded",3,"▲"),m=hh(t,"showExpandIcon",3,!1),b=hh(t,"classNameTable",3,""),y=hh(t,"classNameThead",3,""),w=hh(t,"classNameTbody",3,""),k=hh(t,"classNameSelect",3,""),x=hh(t,"classNameInput",3,""),S=hh(t,"classNameRow",3,null),E=hh(t,"classNameCell",3,""),C=hh(t,"classNameRowSelected",3,null),P=hh(t,"classNameRowExpanded",3,null),L=hh(t,"classNameExpandedContent",3,""),$=hh(t,"classNameCellExpand",3,""),T=hh(t,"clickCol",3,()=>{}),O=hh(t,"clickRow",3,()=>{}),I=hh(t,"clickExpand",3,()=>{}),A=hh(t,"clickCell",3,()=>{}),R=gd(()=>"")
if(!Array.isArray(o()))throw"'expanded' needs to be an array"
if(!Array.isArray(a()))throw"'selection' needs to be an array"
null!==l()&&console.warn("'expandRowKey' is deprecated in favour of 'rowKey'"),C()&&!c()&&console.error("'rowKey' is needed to use 'classNameRowSelected'")
let M=t.columns.some(e=>!e.hideFilterHeader&&(void 0!==e.filterOptions||void 0!==e.searchValue)),j=gd(wd({}))
const F=od(()=>Object.fromEntries(t.columns.map(e=>[e.key,e])))
let N=od(()=>(m()?1:0)+t.columns.length)
const D=od(()=>t.rows.filter(e=>Object.keys(s()).every(t=>{let n=null
if(void 0===If(F)[t])return!0
if(If(F)[t]?.searchValue){if(""===s()[t])return!0
1===If(F)[t].searchValue.length?n=(If(F)[t].searchValue(e)+"").toLocaleLowerCase().indexOf((s()[t]+"").toLocaleLowerCase())>=0:2===If(F)[t].searchValue.length&&(n=!!If(F)[t].searchValue(e,s()[t]+""))}else n=!1
return n||void 0===s()[t]||s()[t]===("function"==typeof If(F)[t].filterValue?If(F)[t].filterValue(e):If(F)[t].value(e))})).map(e=>Object.assign({},e,{$sortOn:If(R)(e),$expanded:null!==c()&&o().indexOf(e[c()])>=0,$selected:null!==c()&&a().indexOf(e[c()])>=0})).sort((e,t)=>r()?e.$sortOn>t.$sortOn?i():e.$sortOn<t.$sortOn?-i():0:0)),q=e=>[].concat(e).filter(e=>null!==e&&"string"==typeof e&&""!==e).join(" ")
Bd(()=>{let e=If(F)[r()]
void 0!==e&&!0===e.sortable&&"function"==typeof e.value&&_d(R,t=>e.value(t))}),Bd(()=>{M&&t.columns&&t.rows&&(_d(j,{},!0),t.columns.forEach(e=>{"function"==typeof e.filterOptions?If(j)[e.key]=e.filterOptions(t.rows):Array.isArray(e.filterOptions)&&(If(j)[e.key]=e.filterOptions.map(e=>({name:e,value:e})))}))})
const B=(e,t)=>{t.sortable&&(i(t.key===r()?n()[(n().findIndex(e=>e===i())+1)%n().length]:n()[0]),r(i()?t.key:void 0)),T()({event:e,col:t,key:t.key})},H=(e,t)=>{f()&&(d()?a().includes(t[c()])?a([]):a([t[c()]]):a().includes(t[c()])?a(a().filter(e=>e!=t[c()])):a([...a(),t[c()]].sort())),O()({event:e,row:t})},U=(e,t)=>{t.$expanded=!t.$expanded
const n=t[c()]
u()&&t.$expanded?o([n]):u()?o([]):t.$expanded?o([...o(),n]):o(o().filter(e=>e!=n)),I()({event:e,row:t})},G=(e,t,n)=>{A()({event:e,row:t,key:n})}
var W=AE(),z=Od(W),V=Od(z),Q=e=>{var n=EE(),r=Od(n)
dp(r,17,()=>t.columns,up,(e,t)=>{var n=xE(),r=Od(n),i=e=>{var n=yE()
Wd(e=>{Sp(n,0,e,"svelte-18zqsmu"),Ap(n,"placeholder",If(t).filterPlaceholder)},[()=>yp(q(x()))]),Gp(n,()=>s()[If(t).key],e=>s(s()[If(t).key]=e,!0)),Zf(e,n)},o=e=>{var n=Xf(),r=Id(n),i=e=>{var n=kE(),r=Od(n),i=Od(r)
r.value=(r.__value=void 0)??"",dp(Ad(r),17,()=>If(j)[If(t).key],up,(e,t)=>{var n=wE(),r=Od(n),i={}
Wd(()=>{tp(r,If(t).name),i!==(i=If(t).value)&&(n.value=(n.__value=If(t).value)??"")}),Zf(e,n)}),Wd(e=>{Sp(n,0,e,"svelte-18zqsmu"),tp(i,If(t).filterPlaceholder||"")},[()=>yp(q(k()))]),Lp(n,()=>s()[If(t).key],e=>s(s()[If(t).key]=e,!0)),Zf(e,n)}
lp(r,e=>{If(t).hideFilterHeader||void 0===If(j)[If(t).key]||e(i)},!0),Zf(e,n)}
lp(r,e=>{If(t).hideFilterHeader||void 0===If(t).searchValue?e(o,!1):e(i)}),Wd(e=>Sp(n,0,e,"svelte-18zqsmu"),[()=>yp(q([If(t).headerFilterClass]))]),Zf(e,n)})
var i=Ad(r),o=e=>{Zf(e,SE())}
lp(i,e=>{m()&&e(o)}),Zf(e,n)}
lp(V,e=>{M&&e(Q)})
var K=Ad(V),J=e=>{var n=Xf()
vp(Id(n),()=>t.svelteTableHeader,()=>({sortOrder:i(),sortBy:r()})),Zf(e,n)},Y=e=>{var n=LE(),s=Od(n)
dp(s,17,()=>t.columns,up,(e,t)=>{var n=CE()
n.__click=e=>B(e,If(t))
var s=Od(n),o=Ad(s),a=e=>{var t=Xf()
gp(Id(t),()=>1===i()?p():h()),Zf(e,t)},l=e=>{var n=Xf(),r=Id(n),i=e=>{var t=Xf()
gp(Id(t),g),Zf(e,t)}
lp(r,e=>{If(t).sortable&&e(i)},!0),Zf(e,n)}
lp(o,e=>{r()===If(t).key?e(a):e(l,!1)}),Wd(e=>{Sp(n,0,e,"svelte-18zqsmu"),tp(s,`${If(t).title??""} `)},[()=>yp(q([If(t).sortable?"isSortable":"",If(t).headerClass]))]),Gf("keypress",n,e=>"Enter"===e.key&&B(e,If(t))),Zf(e,n)})
var o=Ad(s),a=e=>{Zf(e,PE())}
lp(o,e=>{m()&&e(a)}),Zf(e,n)}
lp(K,e=>{t.svelteTableHeader?e(J):e(Y,!1)})
var X=Ad(z)
dp(X,21,()=>If(D),up,(e,n,r)=>{var i=Xf(),s=Id(i),o=e=>{var i=Xf()
vp(Id(i),()=>t.svelteTableRow,()=>({row:If(n),n:r})),Zf(e,i)},a=e=>{var i=IE(),s=Id(i)
s.__click=e=>H(e,If(n))
var o=Od(s)
dp(o,17,()=>t.columns,up,(e,t,i)=>{var s=$E()
s.__click=e=>G(e,If(n),If(t).key)
var o=Od(s),a=e=>{const r=od(()=>If(t).renderComponent.component||If(t).renderComponent)
var i=Xf()
_p(Id(i),()=>If(r),(e,r)=>{r(e,function(...e){return new Proxy({props:e},ph)}(()=>If(t).renderComponent.props||{},{get row(){return If(n)},get col(){return If(t)}}))}),Zf(e,i)},l=e=>{var s=Xf(),o=Id(s),a=e=>{var s=Xf()
gp(Id(s),()=>If(t).renderValue?If(t).renderValue(If(n),r,i):If(t).value(If(n),r,i)),Zf(e,s)},l=e=>{var s=Yf()
Wd(e=>tp(s,e),[()=>If(t).renderValue?If(t).renderValue(If(n),r,i):If(t).value(If(n),r,i)]),Zf(e,s)}
lp(o,e=>{If(t).parseHTML?e(a):e(l,!1)},!0),Zf(e,s)}
lp(o,e=>{If(t).renderComponent?e(a):e(l,!1)}),Wd(e=>Sp(s,0,e,"svelte-18zqsmu"),[()=>yp(q(["string"==typeof If(t).class?If(t).class:null,"function"==typeof If(t).class?If(t).class(If(n),r,i):null,E()]))]),Gf("keypress",s,e=>"Enter"===e.key&&G(e,If(n),If(t).key)),Zf(e,s)})
var a=Ad(o),l=e=>{var t=TE(),r=Od(t)
r.__click=e=>U(e,If(n)),gp(Od(r),()=>If(n).$expanded?v():_()),Wd(e=>Sp(t,0,e,"svelte-18zqsmu"),[()=>yp(q($()))]),Gf("keypress",r,e=>"Enter"===e.key&&U(e,If(n))),Zf(e,t)}
lp(a,e=>{m()&&e(l)})
var c=Ad(s,2),u=e=>{var i=OE(),s=Od(i)
vp(Od(s),()=>t.svelteTableExpanded??Wc,()=>({row:If(n),n:r})),Wd(e=>{Sp(i,0,e,"svelte-18zqsmu"),Ap(s,"colspan",If(N))},[()=>yp(q(L()))]),Zf(e,i)}
lp(c,e=>{If(n).$expanded&&e(u)}),Wd(e=>{Sp(s,0,e,"svelte-18zqsmu"),Ap(s,"tabindex",f()?"0":null)},[()=>yp(q(["string"==typeof S()?S():null,"function"==typeof S()?S()(If(n),r):null,If(n).$expanded&&P(),If(n).$selected&&C()]))]),Gf("keypress",s,e=>"Enter"===e.key&&H(e,If(n))),Zf(e,i)}
lp(s,e=>{t.svelteTableRow?e(o):e(a,!1)}),Zf(e,i)}),Wd((e,t,n)=>{Sp(W,0,e,"svelte-18zqsmu"),Sp(z,0,t,"svelte-18zqsmu"),Sp(X,0,n,"svelte-18zqsmu")},[()=>yp(q(b())),()=>yp(q(y())),()=>yp(q(w()))]),Zf(e,W),Tu()}function ME(e){return new Intl.NumberFormat("en-us").format(e)}Wf(["click"])
var jE=Jf('<div class="content svelte-1u8rhii"><!></div>')
function FE(e,t){$u(t,!0)
let n=hh(t,"visible",15,!0)
const r=[{key:"slot",title:"Slot",value:e=>e.slot,sortable:!0},{key:"name",title:"Name",value:e=>e.name,sortable:!0,renderValue:e=>bE(e.id,e.name),parseHTML:!0},{key:"level",title:"Level",value:e=>e.level,sortable:!0},{key:"rank",title:"Rank",value:e=>e.rank,sortable:!0},{key:"guild_xp",title:"GXP",value:e=>e.guild_xp,sortable:!0,renderValue:e=>ME(e.guild_xp)},{key:"activity",title:"Activity",value:e=>e.activity,sortable:!0},{key:"pack",title:"Pack",value:e=>e.pack,sortable:!0},{key:"max_stamina",title:"Stam",value:e=>e.max_stamina,sortable:!0,renderValue:e=>Iw(e.max_stamina)?"":ME(e.max_stamina)}]
let i=gd(wd([]))
const s=({equipped:e})=>!e,o=({player:{id:e}})=>e,a=e=>e.members
function l([e,t]){const n=e.r.filter(s).map(o),r=lm(Zv(n).map(e=>[e,n.filter(t=>t===e).length])),i=(e=>e.r.flatMap(a))(t)
return i.map((l=r,(e,t)=>({...e,slot:t+1,activity:J_(e.last_activity),pack:l[e.id]??0})))
var l}const c=od(()=>{if(n())return async function(){const[e,t]=await uw([_S(),a_()])
if(e?.s&&t?.s){const n=l([e,t])
_d(i,n,!0)}}()})
{const t=e=>{Zf(e,Yf("Who's Got What"))}
Gk(e,{close:function(){ig("Whos Got What","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=jE()
ap(Od(n),()=>If(c),e=>{Zf(e,Yf("Loading..."))},e=>{RE(e,{classNameTable:"whos-got-what",get columns(){return r},get rows(){return If(i)}})},(e,t)=>{var n=Yf()
Wd(()=>tp(n,If(t))),Zf(e,n)}),Zf(e,n)},$$slots:{title:!0,default:!0}})}Tu()}const NE=wd({visible:!0})
let DE=0
var qE=Object.freeze({__proto__:null,default:function(){DE?NE.visible=!0:DE=np(FE,{props:NE,target:document.body})}})
const BE=()=>{yg(import("./inventory-CZj4eVQr.js"))},HE=()=>{yg(import("./bazaar-U7Ytylbs.js"))}
function UE(){yg(import("./injectQuestBookFull-DW53TBsf.js"))}const GE=()=>{yg(import("./scavenging-BK89SXoE.js"))}
const WE=()=>{yg(import("./toprated-CmBRbjbu.js"))}
const zE=()=>{yg(import("./trade-C6-84znW.js"))}
var VE={crates:{"-":{"-":()=>{yg(import("./crates-DnutUmMI.js"))}}},creatures:{"-":{"-":Mk}},items:jk,masterrealms:{"-":{"-":Mk}},quests:{"-":{"-":Mk},view:{"-":()=>{yg(import("./showAllQuestSteps-DMQrqEgS.js"))}}},realms:{"-":{"-":Mk}},relics:{"-":{"-":Mk}},shops:{"-":{"-":Mk}},"-":Bk,arena:xk,auctionhouse:Sk,bank:{"-":{"-":()=>{yg(import("./injectBank-DqxD27Uh.js"))}}},blacksmith:{repairall:{"-":function(){Ic("fromworld")&&kk()}}},buffmarket:{"-":{"-":()=>{yg(import("./injectBuffmarket-BhPynsCP.js"))}},add:{"-":()=>{yg(import("./injectBigBuffPacakges-D-MKC_sp.js"))}},manage:{"-":()=>{yg(import("./injectManage-B32zSynP.js"))}}},combat:{attackplayer:{"-":Fk}},composing:Ek,findplayer:{"-":{"-":()=>{yg(import("./findplayer-hTr7knsZ.js"))}}},guild:Ik,hellforge:{"-":{"-":()=>{yg(import("./hellforge-s2hYgV5I.js"))}}},inventing:Rk,log:{"-":{"-":()=>{yg(import("./playerLog-374i4bjH.js"))}}},marketplace:{createreq:{"-":()=>{yg(import("./marketplace-CZp9e356.js"))}}},news:qk,notepad:{showlogs:{"-":kg},invmanagernew:{"-":BE},guildinvmgr:{"-":BE},recipemanager:{"-":Rg},auctionsearch:{"-":Pg},onlineplayers:{"-":Tg},quicklinkmanager:{"-":Ig},monsterlog:{"-":xg},quickextract:{"-":Og},quickwear:{"-":Ag},fsboxcontent:{"-":Sg},bufflogcontent:{"-":wg},newguildlog:{"-":Eg},findbuffs:{"-":Lg},findother:{"-":$g},savesettings:{"-":()=>{yg(import("./load-QYAv-_AN.js"))}},reliclist:{"-":Mg},"-":{"-":function(){}}},points:{"-":{"-":()=>{yg(import("./points-Ds2GwlZP.js"))}}},potionbazaar:{"-":{"-":HE},buyitem:{"-":HE}},privatemessage:{"-":{"-":()=>{yg(import("./privateMsg-Dr5cOKT_.js"))}}},profile:{"-":{"-":Fk},managecombatset:{"-":Fk},report:{"-":Fk},equipitem:{"-":Fk},useitem:{"-":Fk},changebio:{"-":Ck},dropitems:{"-":function(){yg(import("./injectProfileDropItems-D43oCIkS.js"))}}},pvpladder:{"-":{"-":()=>{yg(import("./ladder-cZqUFlMv.js"))}}},questbook:{"-":{"-":UE},atoz:{"-":UE},viewquest:{"-":()=>{yg(import("./injectQuestTracker-tZDNDt32.js"))}}},quickbuff:{"-":{"-":()=>{yg(import("./quickBuff-absqJwMr.js"))}}},scavenging:{"-":{"-":GE},process:{"-":GE}},settings:{"-":{"-":()=>{yg(import("./injectSettings-YZGR4v06.js"))}}},skills:{"-":{"-":()=>{}}},superelite:{"-":{"-":()=>{yg(import("./superelite-CRBCGgja.js"))}}},tempinv:{"-":{"-":()=>{yg(import("./mailbox-PFi2KxDJ.js"))}}},temple:{"-":{"-":Lw}},titan:{"-":{"-":()=>{yg(import("./injectTitan-Dn-NTyV0.js"))}}},toprated:{xp:{"-":WE},monthlyxp:{"-":WE},gold:{"-":WE},killstreak:{"-":WE},bounties:{"-":WE},risingstars:{"-":WE},arena:{"-":WE},superelites:{"-":WE},smasher:{"-":WE},globalquest:{"-":()=>{yg(import("./globalQuest-zJflgyWM.js"))}}},trade:{"-":{"-":zE},sendgold:{"-":zE},createsecure:{"-":zE},docreatesecure:{"-":zE}},world:{"-":{"-":kk}}}
function QE(e){return dg("ul",e)}const KE=e=>"newWindow"in e&&e.url&&e.name
function JE(e,t){const n=gg(t,QE())
e.filter(KE).forEach(e=>{gg(gg(n,dm()),function(e){const t=um({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return Fv(t,()=>ig("chrome","quick link",e.name)),t}(e))})}function YE(e){const t=fg({className:"fshQuickLinks",style:{left:`${Hl("quickLinksLeftPx")}px`,top:`${Hl("quickLinksTopPx")}px`}})
t.classList.toggle("fshFixed",Hl("keepHelperMenuOnScreen")),Hl("draggableQuickLinks")&&(t.classList.add("fshMove"),tg(t)),JE(e,t),gg(document.body,t)}function XE(){if(!Xl(".mainbody"))return
const e=Um("quickLinks")||[]
e.length&&YE(e)}let ZE=0,eC=0,tC=0,nC="",rC=0,iC=0
function sC(e){return Ic(e)||"-"}function oC(e){const t=Xl(e)
return t?.value||"-"}function aC(){if(Jl(VE[ZE])&&Jl(VE[ZE][eC])&&Kl(VE[ZE][eC][tC]))return VE[ZE][eC][tC]}function lC(){""!==document.location.search?(ZE=sC("cmd"),eC=sC("subcmd"),tC=sC("subcmd2"),["points","privatemessage"].includes(ZE)&&(nC=`/${sC("type")}`)):(ZE=oC('input[name="cmd"]'),eC=oC('input[name="subcmd"]'),tC=oC('input[name="subcmd2"]')),gc.cmd=ZE,gc.subcmd=eC,gc.subcmd2=tC,iC=`${ZE}/${eC}/${tC}${nC}`,rC=aC()}function cC(){Kl(rC)&&(Ql(iC),rC())}async function uC(e){lC(),await e,wk(),Tc(3,cC),Hl("playNewMessageSound")&&Tc(3,Bh),zv()||Tc(3,XE)}const dC=[()=>!RegExp.escape,()=>!navigator.cookieEnabled,()=>window!==window.parent,function(){if(!d){const e=l(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
u=c.includes(e),d=!0}return u}]
function fC(e,t){if(dC.some(e=>e()))return
const n=Zl("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
cc(),function(e,t){gc.gmInfo=Yl(decodeURIComponent(t)),gc.gmInfo?gc.fshVer=e:gc.fshVer=`${e}_native`,gc.calfVer="160"}(e,t),o(),$o(),uC(n)}export{sv as $,th as A,gy as B,Jf as C,Ad as D,Id as E,Od as F,dp as G,lp as H,Gp as I,_d as J,If as K,vd as L,_y as M,Zf as N,Tu as O,Wd as P,Ap as Q,Mf as R,tp as S,zp as T,Gf as U,vv as V,nv as W,Uv as X,_l as Y,Al as Z,um as _,dv as a,ka as a$,ja as a0,uw as a1,V_ as a2,Dm as a3,cm as a4,Th as a5,fm as a6,Hh as a7,Jv as a8,ea as a9,Hl as aA,hg as aB,ag as aC,$a as aD,Sy as aE,ap as aF,Xf as aG,Ul as aH,Vp as aI,Bo as aJ,Do as aK,Db as aL,vl as aM,ME as aN,ay as aO,Qo as aP,da as aQ,Fm as aR,jw as aS,Ih as aT,Fb as aU,Rb as aV,Gm as aW,bv as aX,Ob as aY,Ow as aZ,wa as a_,QE as aa,lg as ab,Tb as ac,vc as ad,tv as ae,lv as af,ov as ag,Ml as ah,jl as ai,Nv as aj,gd as ak,wd as al,Um as am,Lp as an,Om as ao,Wf as ap,xy as aq,Ic as ar,wy as as,kg as at,xg as au,Vl as av,Iw as aw,Sm as ax,gc as ay,pc as az,fc as b,_c as b$,Oc as b0,Ba as b1,_a as b2,Bx as b3,Il as b4,qb as b5,$h as b6,pm as b7,s as b8,Po as b9,Kl as bA,Vo as bB,Va as bC,od as bD,Fa as bE,Ia as bF,Yf as bG,Sp as bH,Zv as bI,Of as bJ,j_ as bK,F_ as bL,aw as bM,cy as bN,Xo as bO,nl as bP,ol as bQ,xx as bR,Yo as bS,up as bT,jb as bU,Da as bV,oh as bW,sh as bX,K_ as bY,aa as bZ,pw as b_,Zw as ba,za as bb,fa as bc,cl as bd,Qa as be,Ka as bf,el as bg,Ja as bh,kw as bi,Ax as bj,Ma as bk,$v as bl,Ko as bm,il as bn,ev as bo,Yl as bp,Tc as bq,oy as br,pg as bs,xl as bt,kl as bu,El as bv,Sl as bw,Cl as bx,Lh as by,Oh as bz,Rh as c,w_ as c$,Rl as c0,ba as c1,yv as c2,Uo as c3,Wo as c4,vh as c5,fh as c6,uh as c7,sl as c8,sp as c9,xa as cA,Fw as cB,hc as cC,qa as cD,av as cE,ew as cF,mx as cG,fl as cH,jv as cI,bx as cJ,pl as cK,Zo as cL,Xy as cM,bE as cN,Pa as cO,bl as cP,ly as cQ,wl as cR,hl as cS,ca as cT,Ib as cU,oa as cV,Xw as cW,Nm as cX,qo as cY,Q_ as cZ,a as c_,Za as ca,ll as cb,ul as cc,dl as cd,hv as ce,pv as cf,gv as cg,Ya as ch,Xa as ci,al as cj,No as ck,rl as cl,$b as cm,Gv as cn,Wm as co,uv as cp,Ho as cq,wv as cr,yp as cs,Tl as ct,xv as cu,BS as cv,Jl as cw,Dl as cx,ml as cy,Ol as cz,vg as d,_p as d$,N_ as d0,lw as d1,e as d2,Zl as d3,yg as d4,US as d5,mp as d6,cp as d7,Kc as d8,Mv as d9,Tm as dA,ia as dB,sa as dC,z_ as dD,H_ as dE,q_ as dF,gl as dG,om as dH,Cg as dI,am as dJ,Oa as dK,dm as dL,la as dM,dw as dN,Ab as dO,ra as dP,Pk as dQ,eh as dR,Hp as dS,xh as dT,Ha as dU,Ua as dV,Gk as dW,Ip as dX,Gl as dY,Qv as dZ,ma as d_,Ex as da,Eu as db,ga as dc,zo as dd,Pl as de,Yv as df,yl as dg,Ql as dh,Nk as di,UE as dj,Ak as dk,Lx as dl,Px as dm,_S as dn,hS as dp,Yk as dq,yS as dr,Jo as ds,gS as dt,qS as du,rv as dv,Ll as dw,Cp as dx,ua as dy,ta as dz,cv as e,gh as e0,Bd as e1,vp as e2,Xp as e3,Ea as e4,yx as e5,Wa as e6,Nb as e7,Vv as e8,Jk as e9,U_ as ea,Tx as eb,D_ as ec,B_ as ed,G_ as ee,W_ as ef,hx as eg,Pv as eh,ha as ei,Ca as ej,kf as ek,hd as el,bd as em,Og as en,ah as eo,bg as ep,Ag as eq,ya as er,fC as es,lm as f,t as g,Dv as h,gg as i,l_ as j,Kv as k,$y as l,n as m,Ph as n,Fv as o,Dh as p,Xl as q,l as r,ig as s,np as t,dg as u,fg as v,Nc as w,qd as x,$u as y,hh as z}
//# sourceMappingURL=calfSystem-HVCiy-VV.js.map
