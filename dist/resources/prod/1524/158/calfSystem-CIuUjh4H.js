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
function f(e,t,n,r,i,s,o){try{var a=e[s](o),l=a.value}catch(e){return void n(e)}a.done?t(l):Promise.resolve(l).then(r,i)}function h(e){return function(){var t=this,n=arguments
return new Promise(function(r,i){var s=e.apply(t,n)
function o(e){f(s,r,i,o,a,"next",e)}function a(e){f(s,r,i,o,a,"throw",e)}o(void 0)})}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(null,arguments)}function g(e,t){if(null==e)return{}
var n={}
for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue
n[r]=e[r]}return n}var v="undefined"!=typeof window?window:void 0,_="undefined"!=typeof globalThis?globalThis:v,m=Array.prototype,y=m.forEach,b=m.indexOf,w=null==_?void 0:_.navigator,k=null==_?void 0:_.document,S=null==_?void 0:_.location,x=null==_?void 0:_.fetch,E=null!=_&&_.XMLHttpRequest&&"withCredentials"in new _.XMLHttpRequest?_.XMLHttpRequest:void 0,C=null==_?void 0:_.AbortController,T=null==w?void 0:w.userAgent,P=null!=v?v:{},L={DEBUG:!1,LIB_VERSION:"1.268.6"},I=["$snapshot","$pageview","$pageleave","$set","survey dismissed","survey sent","survey shown","$identify","$groupidentify","$create_alias","$$client_ingestion_warning","$web_experiment_applied","$feature_enrollment_update","$feature_flag_called"]
function R(e,t){return-1!==e.indexOf(t)}var O=function(e){return e.trim()},M=function(e){return e.replace(/^\$/,"")},A=Array.isArray,F=Object.prototype,j=F.hasOwnProperty,N=F.toString,D=A||function(e){return"[object Array]"===N.call(e)},B=e=>"function"==typeof e,q=e=>e===Object(e)&&!D(e),H=e=>{if(q(e)){for(var t in e)if(j.call(e,t))return!1
return!0}return!1},U=e=>void 0===e,G=e=>"[object String]"==N.call(e),W=e=>G(e)&&0===e.trim().length,z=e=>null===e,V=e=>U(e)||z(e),Q=e=>"[object Number]"==N.call(e),J=e=>"[object Boolean]"===N.call(e),K=e=>R(I,e)
function Y(e){return null===e||"object"!=typeof e}function X(e,t){return Object.prototype.toString.call(e)==="[object "+t+"]"}function Z(e){return!U(Event)&&function(e,t){try{return e instanceof t}catch(e){return!1}}(e,Event)}var ee=[!0,"true",1,"1","yes"],te=e=>R(ee,e),ne=[!1,"false",0,"0","no"]
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
return n||r?[-1!==e.indexOf("@")?e.split("@")[0]:ue,n?"safari-extension:"+t:"safari-web-extension:"+t]:[e,t]},he=/^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,pe=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,ge=/\((\S*)(?::(\d+))(?::(\d+))\)/,ve=e=>{var t=he.exec(e)
if(t){var[,n,r,i]=t
return de(n,ue,+r,+i)}var s=pe.exec(e)
if(s){if(s[2]&&0===s[2].indexOf("eval")){var o=ge.exec(s[2])
o&&(s[2]=o[1],s[3]=o[2],s[4]=o[3])}var[a,l]=fe(s[1]||ue,s[2])
return de(l,a,s[3]?+s[3]:void 0,s[4]?+s[4]:void 0)}},_e=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,me=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,ye=e=>{var t=_e.exec(e)
if(t){if(t[3]&&t[3].indexOf(" > eval")>-1){var n=me.exec(t[3])
n&&(t[1]=t[1]||"eval",t[3]=n[1],t[4]=n[2],t[5]="")}var r=t[3],i=t[1]||ue
return[i,r]=fe(i,r),de(r,i,t[4]?+t[4]:void 0,t[5]?+t[5]:void 0)}},be=/\(error: (.*)\)/
function we(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return function(e,n){void 0===n&&(n=0)
for(var r=[],i=e.split("\n"),s=n;s<i.length;s++){var o=i[s]
if(!(o.length>1024)){var a=be.test(o)?o.replace(be,"$1"):o
if(!a.match(/\S*Error: /)){for(var l of t){var c=l(a)
if(c){r.push(c)
break}}if(r.length>=50)break}}}return function(e){if(!e.length)return[]
var t=Array.from(e)
return t.reverse(),t.slice(0,50).map(e=>{return p({},e,{filename:e.filename||(n=t,n[n.length-1]||{}).filename,function:e.function||ue})
var n})}(r)}}class ke{constructor(e,t,n){void 0===e&&(e=[]),void 0===t&&(t=[]),void 0===n&&(n=[]),this.coercers=e,this.modifiers=n,this.stackParser=we(...t)}buildFromUnknown(e,t){void 0===t&&(t={})
var n=t&&t.mechanism||{handled:!0,type:"generic"},r=this.buildCoercingContext(n,t,0).apply(e),i=this.buildParsingContext(),s=this.parseStacktrace(r,i)
return{$exception_list:this.convertToExceptionList(s,n),$exception_level:"error"}}modifyFrames(e){var t=this
return h(function*(){for(var n of e)n.stacktrace&&n.stacktrace.frames&&D(n.stacktrace.frames)&&(n.stacktrace.frames=yield t.applyModifiers(n.stacktrace.frames))
return e})()}coerceFallback(e){var t
return{type:"Error",value:"Unknown error",stack:null==(t=e.syntheticException)?void 0:t.stack,synthetic:!0}}parseStacktrace(e,t){var n,r
return null!=e.cause&&(n=this.parseStacktrace(e.cause,t)),""!=e.stack&&null!=e.stack&&(r=this.applyChunkIds(this.stackParser(e.stack,e.synthetic?1:0),t.chunkIdMap)),p({},e,{cause:n,stack:r})}applyChunkIds(e,t){return e.map(e=>(e.filename&&t&&(e.chunk_id=t[e.filename]),e))}applyCoercers(e,t){for(var n of this.coercers)if(n.match(e))return n.coerce(e,t)
return this.coerceFallback(t)}applyModifiers(e){var t=this
return h(function*(){var n=e
for(var r of t.modifiers)n=yield r(n)
return n})()}convertToExceptionList(e,t){var n,r,i,s={type:e.type,value:e.value,mechanism:{type:null!==(n=t.type)&&void 0!==n?n:"generic",handled:null===(r=t.handled)||void 0===r||r,synthetic:null!==(i=e.synthetic)&&void 0!==i&&i}}
e.stack&&(s.stacktrace={type:"raw",frames:e.stack})
var o=[s]
return null!=e.cause&&o.push(...this.convertToExceptionList(e.cause,p({},t,{handled:!0}))),o}buildParsingContext(){return{chunkIdMap:ce(this.stackParser)}}buildCoercingContext(e,t,n){void 0===n&&(n=0)
var r=(n,r)=>{if(r<=4){var i=this.buildCoercingContext(e,t,r)
return this.applyCoercers(n,i)}}
return p({},t,{syntheticException:0==n?t.syntheticException:void 0,mechanism:e,apply:e=>r(e,n),next:e=>r(e,n+1)})}}class Se{match(e){return this.isDOMException(e)||this.isDOMError(e)}coerce(e,t){var n=G(e.stack)
return{type:this.getType(e),value:this.getValue(e),stack:n?e.stack:void 0,cause:e.cause?t.next(e.cause):void 0,synthetic:!1}}getType(e){return this.isDOMError(e)?"DOMError":"DOMException"}getValue(e){var t=e.name||(this.isDOMError(e)?"DOMError":"DOMException")
return e.message?t+": "+e.message:t}isDOMException(e){return X(e,"DOMException")}isDOMError(e){return X(e,"DOMError")}}class xe{match(e){return(e=>e instanceof Error)(e)}coerce(e,t){return{type:this.getType(e),value:this.getMessage(e,t),stack:this.getStack(e),cause:e.cause?t.next(e.cause):void 0,synthetic:!1}}getType(e){return e.name||e.constructor.name}getMessage(e,t){var n=e.message
return n.error&&"string"==typeof n.error.message?String(n.error.message):String(n)}getStack(e){return e.stacktrace||e.stack||void 0}}class Ee{constructor(){}match(e){return X(e,"ErrorEvent")&&null!=e.error}coerce(e,t){var n
return t.apply(e.error)||{type:"ErrorEvent",value:e.message,stack:null==(n=t.syntheticException)?void 0:n.stack,synthetic:!0}}}var Ce=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
class Te{match(e){return"string"==typeof e}coerce(e,t){var n,[r,i]=this.getInfos(e)
return{type:null!=r?r:"Error",value:null!=i?i:e,stack:null==(n=t.syntheticException)?void 0:n.stack,synthetic:!0}}getInfos(e){var t="Error",n=e,r=e.match(Ce)
return r&&(t=r[1],n=r[2]),[t,n]}}var Pe=["fatal","error","warning","log","info","debug"]
function Le(e,t){void 0===t&&(t=40)
var n=Object.keys(e)
if(n.sort(),!n.length)return"[object has no keys]"
for(var r=n.length;r>0;r--){var i=n.slice(0,r).join(", ")
if(!(i.length>t))return r===n.length||i.length<=t?i:i.slice(0,t)+"..."}return""}class $e{match(e){return"object"==typeof e&&null!==e}coerce(e,t){var n,r=this.getErrorPropertyFromObject(e)
return r?t.apply(r):{type:this.getType(e),value:this.getValue(e),stack:null==(n=t.syntheticException)?void 0:n.stack,level:this.isSeverityLevel(e.level)?e.level:"error",synthetic:!0}}getType(e){return Z(e)?e.constructor.name:"Error"}getValue(e){if("name"in e&&"string"==typeof e.name){var t="'"+e.name+"' captured as exception"
return"message"in e&&"string"==typeof e.message&&(t+=" with message: '"+e.message+"'"),t}if("message"in e&&"string"==typeof e.message)return e.message
var n=this.getObjectClassName(e)
return(n&&"Object"!==n?"'"+n+"'":"Object")+" captured as exception with keys: "+Le(e)}isSeverityLevel(e){return G(e)&&!W(e)&&Pe.indexOf(e)>=0}getErrorPropertyFromObject(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=e[t]
if(le(n))return n}}getObjectClassName(e){try{var t=Object.getPrototypeOf(e)
return t?t.constructor.name:void 0}catch(e){return}}}class Ie{match(e){return Z(e)}coerce(e,t){var n,r=e.constructor.name
return{type:r,value:r+" captured as exception with keys: "+Le(e),stack:null==(n=t.syntheticException)?void 0:n.stack,synthetic:!0}}}class Re{match(e){return Y(e)}coerce(e,t){var n
return{type:"Error",value:"Primitive value captured as exception: "+String(e),stack:null==(n=t.syntheticException)?void 0:n.stack,synthetic:!0}}}class Oe{match(e){return X(e,"PromiseRejectionEvent")}coerce(e,t){var n,r=this.getUnhandledRejectionReason(e)
return Y(r)?{type:"UnhandledRejection",value:"Non-Error promise rejection captured with value: "+String(r),stack:null==(n=t.syntheticException)?void 0:n.stack,synthetic:!0}:t.apply(r)}getUnhandledRejectionReason(e){if(Y(e))return e
try{if("reason"in e)return e.reason
if("detail"in e&&"reason"in e.detail)return e.detail.reason}catch(e){}return e}}var Me=e=>{var t={_log:function(t){if(v&&(L.DEBUG||P.POSTHOG_DEBUG)&&!U(v.console)&&v.console){for(var n=("__rrweb_original__"in v.console[t]?v.console[t].__rrweb_original__:v.console[t]),r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s]
n(e,...i)}},info:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("log",...n)},warn:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("warn",...n)},error:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
t._log("error",...n)},critical:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
console.error(e,...n)},uninitializedWarning:e=>{t.error("You must initialize PostHog before calling "+e)},createLogger:t=>Me(e+" "+t)}
return t},Ae=Me("[PostHog.js]"),Fe=Ae.createLogger,je={}
function Ne(e,t,n){if(D(e))if(y&&e.forEach===y)e.forEach(t,n)
else if("length"in e&&e.length===+e.length)for(var r=0,i=e.length;r<i;r++)if(r in e&&t.call(n,e[r],r)===je)return}function De(e,t,n){if(!V(e)){if(D(e))return Ne(e,t,n)
if((e=>e instanceof FormData)(e)){for(var r of e.entries())if(t.call(n,r[1],r[0])===je)return}else for(var i in e)if(j.call(e,i)&&t.call(n,e[i],i)===je)return}}var Be=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return Ne(n,function(t){for(var n in t)void 0!==t[n]&&(e[n]=t[n])}),e},qe=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return Ne(n,function(t){Ne(t,function(t){e.push(t)})}),e}
function He(e){for(var t=Object.keys(e),n=t.length,r=new Array(n);n--;)r[n]=[t[n],e[t[n]]]
return r}var Ue=function(e){try{return e()}catch(e){return}},Ge=function(e){return function(){try{for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return e.apply(this,n)}catch(e){Ae.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."),Ae.critical(e)}}},We=function(e){var t={}
return De(e,function(e,n){(G(e)&&e.length>0||Q(e))&&(t[n]=e)}),t}
var ze=["herokuapp.com","vercel.app","netlify.app"]
function Ve(e){var t=null==e?void 0:e.hostname
if(!G(t))return!1
var n=t.split(".").slice(-2).join(".")
for(var r of ze)if(n===r)return!1
return!0}function Qe(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}function Je(e,t,n,r){var{capture:i=!1,passive:s=!0}=null!=r?r:{}
null==e||e.addEventListener(t,n,{capture:i,passive:s})}var Ke="$people_distinct_id",Ye="__alias",Xe="__timers",Ze="$autocapture_disabled_server_side",et="$heatmaps_enabled_server_side",tt="$exception_capture_enabled_server_side",nt="$error_tracking_suppression_rules",rt="$error_tracking_capture_extension_exceptions",it="$web_vitals_enabled_server_side",st="$dead_clicks_enabled_server_side",ot="$web_vitals_allowed_metrics",at="$session_recording_remote_config",lt="$session_recording_enabled_server_side",ct="$console_log_recording_enabled_server_side",ut="$session_recording_network_payload_capture",dt="$session_recording_masking",ft="$session_recording_canvas_recording",ht="$replay_sample_rate",pt="$replay_minimum_duration",gt="$replay_script_config",vt="$sesid",_t="$session_is_sampled",mt="$session_recording_url_trigger_activated_session",yt="$session_recording_event_trigger_activated_session",bt="$enabled_feature_flags",wt="$early_access_features",kt="$feature_flag_details",St="$stored_person_properties",xt="$stored_group_properties",Et="$surveys",Ct="$surveys_activated",Tt="$flag_call_reported",Pt="$user_state",Lt="$client_session_props",$t="$capture_rate_limit",It="$initial_campaign_params",Rt="$initial_referrer_info",Ot="$initial_person_info",Mt="$epp",At="__POSTHOG_TOOLBAR__",Ft="$posthog_cookieless",jt=[Ke,Ye,"__cmpns",Xe,lt,et,vt,bt,nt,Pt,wt,kt,xt,St,Et,Tt,Lt,$t,It,Rt,Mt,Ot]
function Nt(e){return e instanceof Element&&(e.id===At||!(null==e.closest||!e.closest(".toolbar-global-fade-container")))}function Dt(e){return!!e&&1===e.nodeType}function Bt(e,t){return!!e&&!!e.tagName&&e.tagName.toLowerCase()===t.toLowerCase()}function qt(e){return!!e&&3===e.nodeType}function Ht(e){return!!e&&11===e.nodeType}function Ut(e){return e?O(e).split(/\s+/):[]}function Gt(e){var t=null==v?void 0:v.location.href
return!!(t&&e&&e.some(e=>t.match(e)))}function Wt(e){var t=""
switch(typeof e.className){case"string":t=e.className
break
case"object":t=(e.className&&"baseVal"in e.className?e.className.baseVal:null)||e.getAttribute("class")||""
break
default:t=""}return Ut(t)}function zt(e){return V(e)?null:O(e).split(/(\s+)/).filter(e=>un(e)).join("").replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)}function Vt(e){var t=""
return tn(e)&&!nn(e)&&e.childNodes&&e.childNodes.length&&De(e.childNodes,function(e){var n
qt(e)&&e.textContent&&(t+=null!==(n=zt(e.textContent))&&void 0!==n?n:"")}),O(t)}function Qt(e){return U(e.target)?e.srcElement||null:null!=(t=e.target)&&t.shadowRoot?e.composedPath()[0]||null:e.target||null
var t}var Jt=["a","button","form","input","select","textarea","label"]
function Kt(e,t){if(U(t))return!0
var n,r=function(e){if(t.some(t=>e.matches(t)))return{v:!0}}
for(var i of e)if(n=r(i))return n.v
return!1}function Yt(e){var t=e.parentNode
return!(!t||!Dt(t))&&t}var Xt=[".ph-no-rageclick",".ph-no-capture"],Zt=e=>!e||Bt(e,"html")||!Dt(e),en=(e,t)=>{if(!v||Zt(e))return{parentIsUsefulElement:!1,targetElementList:[]}
for(var n=!1,r=[e],i=e;i.parentNode&&!Bt(i,"body");)if(Ht(i.parentNode))r.push(i.parentNode.host),i=i.parentNode.host
else{var s=Yt(i)
if(!s)break
if(t||Jt.indexOf(s.tagName.toLowerCase())>-1)n=!0
else{var o=v.getComputedStyle(s)
o&&"pointer"===o.getPropertyValue("cursor")&&(n=!0)}r.push(s),i=s}return{parentIsUsefulElement:n,targetElementList:r}}
function tn(e){for(var t=e;t.parentNode&&!Bt(t,"body");t=t.parentNode){var n=Wt(t)
if(R(n,"ph-sensitive")||R(n,"ph-no-capture"))return!1}if(R(Wt(e),"ph-include"))return!0
var r=e.type||""
if(G(r))switch(r.toLowerCase()){case"hidden":case"password":return!1}var i=e.name||e.id||""
return!G(i)||!/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g,""))}function nn(e){return!!(Bt(e,"input")&&!["button","checkbox","submit","reset"].includes(e.type)||Bt(e,"select")||Bt(e,"textarea")||"true"===e.getAttribute("contenteditable"))}var rn="(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",sn=new RegExp("^(?:"+rn+")$"),on=new RegExp(rn),an="\\d{3}-?\\d{2}-?\\d{4}",ln=new RegExp("^("+an+")$"),cn=new RegExp("("+an+")")
function un(e,t){if(void 0===t&&(t=!0),V(e))return!1
if(G(e)){if(e=O(e),(t?sn:on).test((e||"").replace(/[- ]/g,"")))return!1
if((t?ln:cn).test(e))return!1}return!0}function dn(e){var t=Vt(e)
return un(t=(t+" "+fn(e)).trim())?t:""}function fn(e){var t=""
return e&&e.childNodes&&e.childNodes.length&&De(e.childNodes,function(e){var n
if(e&&"span"===(null==(n=e.tagName)?void 0:n.toLowerCase()))try{var r=Vt(e)
t=(t+" "+r).trim(),e.childNodes&&e.childNodes.length&&(t=(t+" "+fn(e)).trim())}catch(e){Ae.error("[AutoCapture]",e)}}),t}function hn(e){return function(e){var t=e.map(e=>{var t,n,r=""
if(e.tag_name&&(r+=e.tag_name),e.attr_class)for(var i of(e.attr_class.sort(),e.attr_class))r+="."+i.replace(/"/g,"")
var s=p({},e.text?{text:e.text}:{},{"nth-child":null!==(t=e.nth_child)&&void 0!==t?t:0,"nth-of-type":null!==(n=e.nth_of_type)&&void 0!==n?n:0},e.href?{href:e.href}:{},e.attr_id?{attr_id:e.attr_id}:{},e.attributes),o={}
return He(s).sort((e,t)=>{var[n]=e,[r]=t
return n.localeCompare(r)}).forEach(e=>{var[t,n]=e
return o[pn(t.toString())]=pn(n.toString())}),(r+=":")+He(o).map(e=>{var[t,n]=e
return t+'="'+n+'"'}).join("")})
return t.join(";")}(function(e){return e.map(e=>{var t,n,r={text:null==(t=e.$el_text)?void 0:t.slice(0,400),tag_name:e.tag_name,href:null==(n=e.attr__href)?void 0:n.slice(0,2048),attr_class:gn(e),attr_id:e.attr__id,nth_child:e.nth_child,nth_of_type:e.nth_of_type,attributes:{}}
return He(e).filter(e=>{var[t]=e
return 0===t.indexOf("attr__")}).forEach(e=>{var[t,n]=e
return r.attributes[t]=n}),r})}(e))}function pn(e){return e.replace(/"|\\"/g,'\\"')}function gn(e){var t=e.attr__class
return t?D(t)?t:Ut(t):void 0}class vn{constructor(){this.clicks=[]}isRageClick(e,t,n){var r=this.clicks[this.clicks.length-1]
if(r&&Math.abs(e-r.x)+Math.abs(t-r.y)<30&&n-r.timestamp<1e3){if(this.clicks.push({x:e,y:t,timestamp:n}),3===this.clicks.length)return!0}else this.clicks=[{x:e,y:t,timestamp:n}]
return!1}}var _n="$copy_autocapture",mn=function(e){return e.GZipJS="gzip-js",e.Base64="base64",e}({}),yn=["localhost","127.0.0.1"],bn=e=>{var t=null==k?void 0:k.createElement("a")
return U(t)?null:(t.href=e,t)},wn=function(e,t){for(var n,r=((e.split("#")[0]||"").split(/\?(.*)/)[1]||"").replace(/^\?+/g,"").split("&"),i=0;i<r.length;i++){var s=r[i].split("=")
if(s[0]===t){n=s
break}}if(!D(n)||n.length<2)return""
var o=n[1]
try{o=decodeURIComponent(o)}catch(e){Ae.error("Skipping decoding for malformed query param: "+o)}return o.replace(/\+/g," ")},kn=function(e,t,n){if(!e||!t||!t.length)return e
for(var r=e.split("#"),i=r[0]||"",s=r[1],o=i.split("?"),a=o[1],l=o[0],c=(a||"").split("&"),u=[],d=0;d<c.length;d++){var f=c[d].split("=")
D(f)&&(t.includes(f[0])?u.push(f[0]+"="+n):u.push(c[d]))}var h=l
return null!=a&&(h+="?"+u.join("&")),null!=s&&(h+="#"+s),h},Sn=function(e,t){var n=e.match(new RegExp(t+"=([^&]*)"))
return n?n[1]:null},xn=Fe("[AutoCapture]")
function En(e,t){return t.length>e?t.slice(0,e)+"...":t}function Cn(e){if(e.previousElementSibling)return e.previousElementSibling
var t=e
do{t=t.previousSibling}while(t&&!Dt(t))
return t}function Tn(e,t){for(var n,r,{e:i,maskAllElementAttributes:s,maskAllText:o,elementAttributeIgnoreList:a,elementsChainAsString:l}=t,c=[e],u=e;u.parentNode&&!Bt(u,"body");)Ht(u.parentNode)?(c.push(u.parentNode.host),u=u.parentNode.host):(c.push(u.parentNode),u=u.parentNode)
var d,f=[],h={},p=!1,g=!1
if(De(c,e=>{var t=tn(e)
"a"===e.tagName.toLowerCase()&&(p=e.getAttribute("href"),p=t&&p&&un(p)&&p),R(Wt(e),"ph-no-capture")&&(g=!0),f.push(function(e,t,n,r){var i=e.tagName.toLowerCase(),s={tag_name:i}
Jt.indexOf(i)>-1&&!n&&("a"===i.toLowerCase()||"button"===i.toLowerCase()?s.$el_text=En(1024,dn(e)):s.$el_text=En(1024,Vt(e)))
var o=Wt(e)
o.length>0&&(s.classes=o.filter(function(e){return""!==e})),De(e.attributes,function(n){var i
if((!nn(e)||-1!==["name","id","class","aria-label"].indexOf(n.name))&&(null==r||!r.includes(n.name))&&!t&&un(n.value)&&(i=n.name,!G(i)||"_ngcontent"!==i.substring(0,10)&&"_nghost"!==i.substring(0,7))){var o=n.value
"class"===n.name&&(o=Ut(o).join(" ")),s["attr__"+n.name]=En(1024,o)}})
for(var a=1,l=1,c=e;c=Cn(c);)a++,c.tagName===e.tagName&&l++
return s.nth_child=a,s.nth_of_type=l,s}(e,s,o,a))
var n=function(e){if(!tn(e))return{}
var t={}
return De(e.attributes,function(e){if(e.name&&0===e.name.indexOf("data-ph-capture-attribute")){var n=e.name.replace("data-ph-capture-attribute-",""),r=e.value
n&&r&&un(r)&&(t[n]=r)}}),t}(e)
Be(h,n)}),g)return{props:{},explicitNoCapture:g}
if(o||("a"===e.tagName.toLowerCase()||"button"===e.tagName.toLowerCase()?f[0].$el_text=dn(e):f[0].$el_text=Vt(e)),p){var _,m
f[0].attr__href=p
var y=null==(_=bn(p))?void 0:_.host,b=null==v||null==(m=v.location)?void 0:m.host
y&&b&&y!==b&&(d=p)}return{props:Be({$event_type:i.type,$ce_version:1},l?{}:{$elements:f},{$elements_chain:hn(f)},null!=(n=f[0])&&n.$el_text?{$el_text:null==(r=f[0])?void 0:r.$el_text}:{},d&&"click"===i.type?{$external_click_url:d}:{},h)}}class Pn{constructor(e){this._initialized=!1,this._isDisabledServerSide=null,this.rageclicks=new vn,this._elementsChainAsString=!1,this.instance=e,this._elementSelectors=null}get _config(){var e,t,n=q(this.instance.config.autocapture)?this.instance.config.autocapture:{}
return n.url_allowlist=null==(e=n.url_allowlist)?void 0:e.map(e=>new RegExp(e)),n.url_ignorelist=null==(t=n.url_ignorelist)?void 0:t.map(e=>new RegExp(e)),n}_addDomEventHandlers(){if(this.isBrowserSupported()){if(v&&k){var e=e=>{e=e||(null==v?void 0:v.event)
try{this._captureEvent(e)}catch(e){xn.error("Failed to capture event",e)}}
if(Je(k,"submit",e,{capture:!0}),Je(k,"change",e,{capture:!0}),Je(k,"click",e,{capture:!0}),this._config.capture_copied_text){var t=e=>{e=e||(null==v?void 0:v.event),this._captureEvent(e,_n)}
Je(k,"copy",t,{capture:!0}),Je(k,"cut",t,{capture:!0})}}}else xn.info("Disabling Automatic Event Collection because this browser is not supported")}startIfEnabled(){this.isEnabled&&!this._initialized&&(this._addDomEventHandlers(),this._initialized=!0)}onRemoteConfig(e){e.elementsChainAsString&&(this._elementsChainAsString=e.elementsChainAsString),this.instance.persistence&&this.instance.persistence.register({[Ze]:!!e.autocapture_opt_out}),this._isDisabledServerSide=!!e.autocapture_opt_out,this.startIfEnabled()}setElementSelectors(e){this._elementSelectors=e}getElementSelectors(e){var t,n=[]
return null==(t=this._elementSelectors)||t.forEach(t=>{var r=null==k?void 0:k.querySelectorAll(t)
null==r||r.forEach(r=>{e===r&&n.push(t)})}),n}get isEnabled(){var e,t,n=null==(e=this.instance.persistence)?void 0:e.props[Ze],r=this._isDisabledServerSide
if(z(r)&&!J(n)&&!this.instance._shouldDisableFlags())return!1
var i=null!==(t=this._isDisabledServerSide)&&void 0!==t?t:!!n
return!!this.instance.config.autocapture&&!i}_captureEvent(e,t){if(void 0===t&&(t="$autocapture"),this.isEnabled){var n,r=Qt(e)
qt(r)&&(r=r.parentNode||null),"$autocapture"===t&&"click"===e.type&&e instanceof MouseEvent&&this.instance.config.rageclick&&null!=(n=this.rageclicks)&&n.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&function(e,t){if(!v||Zt(e))return!1
var n,r
if(!1===(n=J(t)?!!t&&Xt:null!==(r=null==t?void 0:t.css_selector_ignorelist)&&void 0!==r?r:Xt))return!1
var{targetElementList:i}=en(e,!1)
return!Kt(i,n)}(r,this.instance.config.rageclick)&&this._captureEvent(e,"$rageclick")
var i=t===_n
if(r&&function(e,t,n,r,i){var s,o,a,l
if(void 0===n&&(n=void 0),!v||Zt(e))return!1
if(null!=(s=n)&&s.url_allowlist&&!Gt(n.url_allowlist))return!1
if(null!=(o=n)&&o.url_ignorelist&&Gt(n.url_ignorelist))return!1
if(null!=(a=n)&&a.dom_event_allowlist){var c=n.dom_event_allowlist
if(c&&!c.some(e=>t.type===e))return!1}var{parentIsUsefulElement:u,targetElementList:d}=en(e,r)
if(!function(e,t){var n=null==t?void 0:t.element_allowlist
if(U(n))return!0
var r,i=function(e){if(n.some(t=>e.tagName.toLowerCase()===t))return{v:!0}}
for(var s of e)if(r=i(s))return r.v
return!1}(d,n))return!1
if(!Kt(d,null==(l=n)?void 0:l.css_selector_allowlist))return!1
var f=v.getComputedStyle(e)
if(f&&"pointer"===f.getPropertyValue("cursor")&&"click"===t.type)return!0
var h=e.tagName.toLowerCase()
switch(h){case"html":return!1
case"form":return(i||["submit"]).indexOf(t.type)>=0
case"input":case"select":case"textarea":return(i||["change","click"]).indexOf(t.type)>=0
default:return u?(i||["click"]).indexOf(t.type)>=0:(i||["click"]).indexOf(t.type)>=0&&(Jt.indexOf(h)>-1||"true"===e.getAttribute("contenteditable"))}}(r,e,this._config,i,i?["copy","cut"]:void 0)){var{props:s,explicitNoCapture:o}=Tn(r,{e:e,maskAllElementAttributes:this.instance.config.mask_all_element_attributes,maskAllText:this.instance.config.mask_all_text,elementAttributeIgnoreList:this._config.element_attribute_ignorelist,elementsChainAsString:this._elementsChainAsString})
if(o)return!1
var a=this.getElementSelectors(r)
if(a&&a.length>0&&(s.$element_selectors=a),t===_n){var l,c=zt(null==v||null==(l=v.getSelection())?void 0:l.toString()),u=e.type||"clipboard"
if(!c)return!1
s.$selected_content=c,s.$copy_type=u}return this.instance.capture(t,s),!0}}}isBrowserSupported(){return B(null==k?void 0:k.querySelectorAll)}}Math.trunc||(Math.trunc=function(e){return e<0?Math.ceil(e):Math.floor(e)}),Number.isInteger||(Number.isInteger=function(e){return Q(e)&&isFinite(e)&&Math.floor(e)===e})
var Ln="0123456789abcdef"
class $n{constructor(e){if(this.bytes=e,16!==e.length)throw new TypeError("not 128-bit length")}static fromFieldsV7(e,t,n,r){if(!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(n)||!Number.isInteger(r)||e<0||t<0||n<0||r<0||e>0xffffffffffff||t>4095||n>1073741823||r>4294967295)throw new RangeError("invalid field value")
var i=new Uint8Array(16)
return i[0]=e/Math.pow(2,40),i[1]=e/Math.pow(2,32),i[2]=e/Math.pow(2,24),i[3]=e/Math.pow(2,16),i[4]=e/Math.pow(2,8),i[5]=e,i[6]=112|t>>>8,i[7]=t,i[8]=128|n>>>24,i[9]=n>>>16,i[10]=n>>>8,i[11]=n,i[12]=r>>>24,i[13]=r>>>16,i[14]=r>>>8,i[15]=r,new $n(i)}toString(){for(var e="",t=0;t<this.bytes.length;t++)e=e+Ln.charAt(this.bytes[t]>>>4)+Ln.charAt(15&this.bytes[t]),3!==t&&5!==t&&7!==t&&9!==t||(e+="-")
if(36!==e.length)throw new Error("Invalid UUIDv7 was generated")
return e}clone(){return new $n(this.bytes.slice(0))}equals(e){return 0===this.compareTo(e)}compareTo(e){for(var t=0;t<16;t++){var n=this.bytes[t]-e.bytes[t]
if(0!==n)return Math.sign(n)}return 0}}class In{constructor(){this._timestamp=0,this._counter=0,this._random=new Mn}generate(){var e=this.generateOrAbort()
if(U(e)){this._timestamp=0
var t=this.generateOrAbort()
if(U(t))throw new Error("Could not generate UUID after timestamp reset")
return t}return e}generateOrAbort(){var e=Date.now()
if(e>this._timestamp)this._timestamp=e,this._resetCounter()
else{if(!(e+1e4>this._timestamp))return
this._counter++,this._counter>4398046511103&&(this._timestamp++,this._resetCounter())}return $n.fromFieldsV7(this._timestamp,Math.trunc(this._counter/Math.pow(2,30)),this._counter&Math.pow(2,30)-1,this._random.nextUint32())}_resetCounter(){this._counter=1024*this._random.nextUint32()+(1023&this._random.nextUint32())}}var Rn,On=e=>{if("undefined"!=typeof UUIDV7_DENY_WEAK_RNG&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available")
for(var t=0;t<e.length;t++)e[t]=65536*Math.trunc(65536*Math.random())+Math.trunc(65536*Math.random())
return e}
v&&!U(v.crypto)&&crypto.getRandomValues&&(On=e=>crypto.getRandomValues(e))
class Mn{constructor(){this._buffer=new Uint32Array(8),this._cursor=1/0}nextUint32(){return this._cursor>=this._buffer.length&&(On(this._buffer),this._cursor=0),this._buffer[this._cursor++]}}var An=()=>Fn().toString(),Fn=()=>(Rn||(Rn=new In)).generate(),jn="",Nn=/[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i
var Dn={_is_supported:()=>!!k,_error:function(e){Ae.error("cookieStore error: "+e)},_get:function(e){if(k){try{for(var t=e+"=",n=k.cookie.split(";").filter(e=>e.length),r=0;r<n.length;r++){for(var i=n[r];" "==i.charAt(0);)i=i.substring(1,i.length)
if(0===i.indexOf(t))return decodeURIComponent(i.substring(t.length,i.length))}}catch(e){}return null}},_parse:function(e){var t
try{t=JSON.parse(Dn._get(e))||{}}catch(e){}return t},_set:function(e,t,n,r,i){if(k)try{var s="",o="",a=function(e,t){if(t){var n=function(e,t){if(void 0===t&&(t=k),jn)return jn
if(!t)return""
if(["localhost","127.0.0.1"].includes(e))return""
for(var n=e.split("."),r=Math.min(n.length,8),i="dmn_chk_"+An();!jn&&r--;){var s=n.slice(r).join("."),o=i+"=1;domain=."+s+";path=/"
t.cookie=o+";max-age=3",t.cookie.includes(i)&&(t.cookie=o+";max-age=0",jn=s)}return jn}(e)
if(!n){var r=(e=>{var t=e.match(Nn)
return t?t[0]:""})(e)
r!==n&&Ae.info("Warning: cookie subdomain discovery mismatch",r,n),n=r}return n?"; domain=."+n:""}return""}(k.location.hostname,r)
if(n){var l=new Date
l.setTime(l.getTime()+24*n*60*60*1e3),s="; expires="+l.toUTCString()}i&&(o="; secure")
var c=e+"="+encodeURIComponent(JSON.stringify(t))+s+"; SameSite=Lax; path=/"+a+o
return c.length>3686.4&&Ae.warn("cookieStore warning: large cookie, len="+c.length),k.cookie=c,c}catch(e){return}},_remove:function(e,t){if(null!=k&&k.cookie)try{Dn._set(e,"",-1,t)}catch(e){return}}},Bn=null,qn={_is_supported:function(){if(!z(Bn))return Bn
var e=!0
if(U(v))e=!1
else try{var t="__mplssupport__"
qn._set(t,"xyz"),'"xyz"'!==qn._get(t)&&(e=!1),qn._remove(t)}catch(t){e=!1}return e||Ae.error("localStorage unsupported; falling back to cookie store"),Bn=e,e},_error:function(e){Ae.error("localStorage error: "+e)},_get:function(e){try{return null==v?void 0:v.localStorage.getItem(e)}catch(e){qn._error(e)}return null},_parse:function(e){try{return JSON.parse(qn._get(e))||{}}catch(e){}return null},_set:function(e,t){try{null==v||v.localStorage.setItem(e,JSON.stringify(t))}catch(e){qn._error(e)}},_remove:function(e){try{null==v||v.localStorage.removeItem(e)}catch(e){qn._error(e)}}},Hn=["distinct_id",vt,_t,Mt,Ot],Un=p({},qn,{_parse:function(e){try{var t={}
try{t=Dn._parse(e)||{}}catch(e){}var n=Be(t,JSON.parse(qn._get(e)||"{}"))
return qn._set(e,n),n}catch(e){}return null},_set:function(e,t,n,r,i,s){try{qn._set(e,t,void 0,void 0,s)
var o={}
Hn.forEach(e=>{t[e]&&(o[e]=t[e])}),Object.keys(o).length&&Dn._set(e,o,n,r,i,s)}catch(e){qn._error(e)}},_remove:function(e,t){try{null==v||v.localStorage.removeItem(e),Dn._remove(e,t)}catch(e){qn._error(e)}}}),Gn={},Wn={_is_supported:function(){return!0},_error:function(e){Ae.error("memoryStorage error: "+e)},_get:function(e){return Gn[e]||null},_parse:function(e){return Gn[e]||null},_set:function(e,t){Gn[e]=t},_remove:function(e){delete Gn[e]}},zn=null,Vn={_is_supported:function(){if(!z(zn))return zn
if(zn=!0,U(v))zn=!1
else try{var e="__support__"
Vn._set(e,"xyz"),'"xyz"'!==Vn._get(e)&&(zn=!1),Vn._remove(e)}catch(e){zn=!1}return zn},_error:function(e){Ae.error("sessionStorage error: ",e)},_get:function(e){try{return null==v?void 0:v.sessionStorage.getItem(e)}catch(e){Vn._error(e)}return null},_parse:function(e){try{return JSON.parse(Vn._get(e))||null}catch(e){}return null},_set:function(e,t){try{null==v||v.sessionStorage.setItem(e,JSON.stringify(t))}catch(e){Vn._error(e)}},_remove:function(e){try{null==v||v.sessionStorage.removeItem(e)}catch(e){Vn._error(e)}}},Qn=function(e){return e[e.PENDING=-1]="PENDING",e[e.DENIED=0]="DENIED",e[e.GRANTED=1]="GRANTED",e}({})
class Jn{constructor(e){this._instance=e}get _config(){return this._instance.config}get consent(){return this._getDnt()?Qn.DENIED:this._storedConsent}isOptedOut(){return"always"===this._config.cookieless_mode||this.consent===Qn.DENIED||this.consent===Qn.PENDING&&(this._config.opt_out_capturing_by_default||"on_reject"===this._config.cookieless_mode)}isOptedIn(){return!this.isOptedOut()}isExplicitlyOptedOut(){return this.consent===Qn.DENIED}optInOut(e){this._storage._set(this._storageKey,e?1:0,this._config.cookie_expiration,this._config.cross_subdomain_cookie,this._config.secure_cookie)}reset(){this._storage._remove(this._storageKey,this._config.cross_subdomain_cookie)}get _storageKey(){var{token:e,opt_out_capturing_cookie_prefix:t,consent_persistence_name:n}=this._instance.config
return n||(t?t+e:"__ph_opt_in_out_"+e)}get _storedConsent(){var e=this._storage._get(this._storageKey)
return te(e)?Qn.GRANTED:R(ne,e)?Qn.DENIED:Qn.PENDING}get _storage(){if(!this._persistentStore){var e=this._config.opt_out_capturing_persistence_type
this._persistentStore="localStorage"===e?qn:Dn
var t="localStorage"===e?Dn:qn
t._get(this._storageKey)&&(this._persistentStore._get(this._storageKey)||this.optInOut(te(t._get(this._storageKey))),t._remove(this._storageKey,this._config.cross_subdomain_cookie))}return this._persistentStore}_getDnt(){return!!this._config.respect_dnt&&!!Qe([null==w?void 0:w.doNotTrack,null==w?void 0:w.msDoNotTrack,P.doNotTrack],e=>te(e))}}var Kn=Fe("[Dead Clicks]"),Yn=()=>!0,Xn=e=>{var t,n=!(null==(t=e.instance.persistence)||!t.get_property(st)),r=e.instance.config.capture_dead_clicks
return J(r)?r:n}
class Zn{get lazyLoadedDeadClicksAutocapture(){return this._lazyLoadedDeadClicksAutocapture}constructor(e,t,n){this.instance=e,this.isEnabled=t,this.onCapture=n,this.startIfEnabled()}onRemoteConfig(e){this.instance.persistence&&this.instance.persistence.register({[st]:null==e?void 0:e.captureDeadClicks}),this.startIfEnabled()}startIfEnabled(){this.isEnabled(this)&&this._loadScript(()=>{this._start()})}_loadScript(e){var t,n
null!=(t=P.__PosthogExtensions__)&&t.initDeadClicksAutocapture&&e(),null==(n=P.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this.instance,"dead-clicks-autocapture",t=>{t?Kn.error("failed to load script",t):e()})}_start(){var e
if(k){if(!this._lazyLoadedDeadClicksAutocapture&&null!=(e=P.__PosthogExtensions__)&&e.initDeadClicksAutocapture){var t=q(this.instance.config.capture_dead_clicks)?this.instance.config.capture_dead_clicks:{}
t.__onCapture=this.onCapture,this._lazyLoadedDeadClicksAutocapture=P.__PosthogExtensions__.initDeadClicksAutocapture(this.instance,t),this._lazyLoadedDeadClicksAutocapture.start(k),Kn.info("starting...")}}else Kn.error("`document` not found. Cannot start.")}stop(){this._lazyLoadedDeadClicksAutocapture&&(this._lazyLoadedDeadClicksAutocapture.stop(),this._lazyLoadedDeadClicksAutocapture=void 0,Kn.info("stopping..."))}}var er=Fe("[ExceptionAutocapture]")
class tr{constructor(e){var t,n,r
this._startCapturing=()=>{var e
if(v&&this.isEnabled&&null!=(e=P.__PosthogExtensions__)&&e.errorWrappingFunctions){var t=P.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,n=P.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,r=P.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError
try{!this._unwrapOnError&&this._config.capture_unhandled_errors&&(this._unwrapOnError=t(this.captureException.bind(this))),!this._unwrapUnhandledRejection&&this._config.capture_unhandled_rejections&&(this._unwrapUnhandledRejection=n(this.captureException.bind(this))),!this._unwrapConsoleError&&this._config.capture_console_errors&&(this._unwrapConsoleError=r(this.captureException.bind(this)))}catch(e){er.error("failed to start",e),this._stopCapturing()}}},this._instance=e,this._remoteEnabled=!(null==(t=this._instance.persistence)||!t.props[tt]),this._config=this._requiredConfig(),this._rateLimiter=new ie({refillRate:null!==(n=this._instance.config.error_tracking.__exceptionRateLimiterRefillRate)&&void 0!==n?n:1,bucketSize:null!==(r=this._instance.config.error_tracking.__exceptionRateLimiterBucketSize)&&void 0!==r?r:10,refillInterval:1e4,_logger:er}),this.startIfEnabled()}_requiredConfig(){var e=this._instance.config.capture_exceptions,t={capture_unhandled_errors:!1,capture_unhandled_rejections:!1,capture_console_errors:!1}
return q(e)?t=p({},t,e):(U(e)?this._remoteEnabled:e)&&(t=p({},t,{capture_unhandled_errors:!0,capture_unhandled_rejections:!0})),t}get isEnabled(){return this._config.capture_console_errors||this._config.capture_unhandled_errors||this._config.capture_unhandled_rejections}startIfEnabled(){this.isEnabled&&(er.info("enabled"),this._loadScript(this._startCapturing))}_loadScript(e){var t,n
null!=(t=P.__PosthogExtensions__)&&t.errorWrappingFunctions&&e(),null==(n=P.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"exception-autocapture",t=>{if(t)return er.error("failed to load script",t)
e()})}_stopCapturing(){var e,t,n
null==(e=this._unwrapOnError)||e.call(this),this._unwrapOnError=void 0,null==(t=this._unwrapUnhandledRejection)||t.call(this),this._unwrapUnhandledRejection=void 0,null==(n=this._unwrapConsoleError)||n.call(this),this._unwrapConsoleError=void 0}onRemoteConfig(e){var t=e.autocaptureExceptions
this._remoteEnabled=!!t||!1,this._config=this._requiredConfig(),this._instance.persistence&&this._instance.persistence.register({[tt]:this._remoteEnabled}),this.startIfEnabled()}captureException(e){var t,n,r=null!==(t=null==e||null==(n=e.$exception_list)||null==(n=n[0])?void 0:n.type)&&void 0!==t?t:"Exception"
this._rateLimiter.consumeRateLimit(r)?er.info("Skipping exception capture because of client rate limiting.",{exception:r}):this._instance.exceptions.sendExceptionEvent(e)}}function nr(e,t,n){try{if(!(t in e))return()=>{}
var r=e[t],i=n(r)
return B(i)&&(i.prototype=i.prototype||{},Object.defineProperties(i,{__posthog_wrapped__:{enumerable:!1,value:!0}})),e[t]=i,()=>{e[t]=r}}catch(e){return()=>{}}}class rr{constructor(e){var t
this._instance=e,this._lastPathname=(null==v||null==(t=v.location)?void 0:t.pathname)||""}get isEnabled(){return"history_change"===this._instance.config.capture_pageview}startIfEnabled(){this.isEnabled&&(Ae.info("History API monitoring enabled, starting..."),this.monitorHistoryChanges())}stop(){this._popstateListener&&this._popstateListener(),this._popstateListener=void 0,Ae.info("History API monitoring stopped")}monitorHistoryChanges(){var e,t
if(v&&v.history){var n=this
null!=(e=v.history.pushState)&&e.__posthog_wrapped__||nr(v.history,"pushState",e=>function(t,r,i){e.call(this,t,r,i),n._capturePageview("pushState")}),null!=(t=v.history.replaceState)&&t.__posthog_wrapped__||nr(v.history,"replaceState",e=>function(t,r,i){e.call(this,t,r,i),n._capturePageview("replaceState")}),this._setupPopstateListener()}}_capturePageview(e){try{var t,n=null==v||null==(t=v.location)?void 0:t.pathname
if(!n)return
n!==this._lastPathname&&this.isEnabled&&this._instance.capture("$pageview",{navigation_type:e}),this._lastPathname=n}catch(t){Ae.error("Error capturing "+e+" pageview",t)}}_setupPopstateListener(){if(!this._popstateListener){var e=()=>{this._capturePageview("popstate")}
Je(v,"popstate",e),this._popstateListener=()=>{v&&v.removeEventListener("popstate",e)}}}}function ir(e){var t,n
return(null==(t=JSON.stringify(e,(n=[],function(e,t){if(q(t)){for(;n.length>0&&n[n.length-1]!==this;)n.pop()
return n.includes(t)?"[Circular]":(n.push(t),t)}return t})))?void 0:t.length)||0}function sr(e,t){if(void 0===t&&(t=6606028.8),e.size>=t&&e.data.length>1){var n=Math.floor(e.data.length/2),r=e.data.slice(0,n),i=e.data.slice(n)
return[sr({size:ir(r),data:r,sessionId:e.sessionId,windowId:e.windowId}),sr({size:ir(i),data:i,sessionId:e.sessionId,windowId:e.windowId})].flatMap(e=>e)}return[e]}var or=(e=>(e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin",e))(or||{}),ar=(e=>(e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration",e[e.Selection=14]="Selection",e[e.AdoptedStyleSheet=15]="AdoptedStyleSheet",e[e.CustomElement=16]="CustomElement",e))(ar||{}),lr="[SessionRecording]",cr="redacted",ur={initiatorTypes:["audio","beacon","body","css","early-hint","embed","fetch","frame","iframe","icon","image","img","input","link","navigation","object","ping","script","track","video","xmlhttprequest"],maskRequestFn:e=>e,recordHeaders:!1,recordBody:!1,recordInitialRequests:!1,recordPerformance:!1,performanceEntryTypeToObserve:["first-input","navigation","paint","resource"],payloadSizeLimitBytes:1e6,payloadHostDenyList:[".lr-ingest.io",".ingest.sentry.io",".clarity.ms","analytics.google.com","bam.nr-data.net"]},dr=["authorization","x-forwarded-for","authorization","cookie","set-cookie","x-api-key","x-real-ip","remote-addr","forwarded","proxy-authorization","x-csrf-token","x-csrftoken","x-xsrf-token"],fr=["password","secret","passwd","api_key","apikey","auth","credentials","mysql_pwd","privatekey","private_key","token"],hr=["/s/","/e/","/i/"]
function pr(e,t,n,r){if(V(e))return e
var i=(null==t?void 0:t["content-length"])||function(e){return new Blob([e]).size}(e)
return G(i)&&(i=parseInt(i)),i>n?lr+" "+r+" body too large to record ("+i+" bytes)":e}function gr(e,t){if(V(e))return e
var n=e
return un(n,!1)||(n=lr+" "+t+" body "+cr),De(fr,e=>{var r,i
null!=(r=n)&&r.length&&-1!==(null==(i=n)?void 0:i.indexOf(e))&&(n=lr+" "+t+" body "+cr+" as might contain: "+e)}),n}var vr=(e,t)=>{var n,r,i,s={payloadSizeLimitBytes:ur.payloadSizeLimitBytes,performanceEntryTypeToObserve:[...ur.performanceEntryTypeToObserve],payloadHostDenyList:[...t.payloadHostDenyList||[],...ur.payloadHostDenyList]},o=!1!==e.session_recording.recordHeaders&&t.recordHeaders,a=!1!==e.session_recording.recordBody&&t.recordBody,l=!1!==e.capture_performance&&t.recordPerformance,c=(n=s,i=Math.min(1e6,null!==(r=n.payloadSizeLimitBytes)&&void 0!==r?r:1e6),e=>(null!=e&&e.requestBody&&(e.requestBody=pr(e.requestBody,e.requestHeaders,i,"Request")),null!=e&&e.responseBody&&(e.responseBody=pr(e.responseBody,e.responseHeaders,i,"Response")),e)),u=t=>{return c(((e,t)=>{var n,r=bn(e.name),i=0===t.indexOf("http")?null==(n=bn(t))?void 0:n.pathname:t
"/"===i&&(i="")
var s=null==r?void 0:r.pathname.replace(i||"","")
if(!(r&&s&&hr.some(e=>0===s.indexOf(e))))return e})((r=(n=t).requestHeaders,V(r)||De(Object.keys(null!=r?r:{}),e=>{dr.includes(e.toLowerCase())&&(r[e]=cr)}),n),e.api_host))
var n,r},d=B(e.session_recording.maskNetworkRequestFn)
return d&&B(e.session_recording.maskCapturedNetworkRequestFn)&&Ae.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."),d&&(e.session_recording.maskCapturedNetworkRequestFn=t=>{var n=e.session_recording.maskNetworkRequestFn({url:t.name})
return p({},t,{name:null==n?void 0:n.url})}),s.maskRequestFn=B(e.session_recording.maskCapturedNetworkRequestFn)?t=>{var n,r=u(t)
return r&&null!==(n=null==e.session_recording.maskCapturedNetworkRequestFn?void 0:e.session_recording.maskCapturedNetworkRequestFn(r))&&void 0!==n?n:void 0}:e=>function(e){if(!U(e))return e.requestBody=gr(e.requestBody,"Request"),e.responseBody=gr(e.responseBody,"Response"),e}(u(e)),p({},ur,s,{recordHeaders:o,recordBody:a,recordPerformance:l,recordInitialRequests:l})}
class _r{constructor(e,t){var n,r
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
return 0!==r||n===r?e:void 0},this._rrweb=e,this._options=t,this._rateLimiter=new ie({bucketSize:null!==(n=this._options.bucketSize)&&void 0!==n?n:100,refillRate:null!==(r=this._options.refillRate)&&void 0!==r?r:10,refillInterval:1e3,_onBucketRateLimited:this._onNodeRateLimited,_logger:Ae})}}var mr=Uint8Array,yr=Uint16Array,br=Uint32Array,wr=new mr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),kr=new mr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Sr=new mr([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),xr=function(e,t){for(var n=new yr(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1]
var i=new br(n[30])
for(r=1;r<30;++r)for(var s=n[r];s<n[r+1];++s)i[s]=s-n[r]<<5|r
return[n,i]},Er=xr(wr,2),Cr=Er[0],Tr=Er[1]
Cr[28]=258,Tr[258]=28
for(var Pr=xr(kr,0)[1],Lr=new yr(32768),$r=0;$r<32768;++$r){var Ir=(43690&$r)>>>1|(21845&$r)<<1
Ir=(61680&(Ir=(52428&Ir)>>>2|(13107&Ir)<<2))>>>4|(3855&Ir)<<4,Lr[$r]=((65280&Ir)>>>8|(255&Ir)<<8)>>>1}var Rr=function(e,t,n){for(var r=e.length,i=0,s=new yr(t);i<r;++i)++s[e[i]-1]
var o,a=new yr(t)
for(i=0;i<t;++i)a[i]=a[i-1]+s[i-1]<<1
for(o=new yr(r),i=0;i<r;++i)o[i]=Lr[a[e[i]-1]++]>>>15-e[i]
return o},Or=new mr(288)
for($r=0;$r<144;++$r)Or[$r]=8
for($r=144;$r<256;++$r)Or[$r]=9
for($r=256;$r<280;++$r)Or[$r]=7
for($r=280;$r<288;++$r)Or[$r]=8
var Mr=new mr(32)
for($r=0;$r<32;++$r)Mr[$r]=5
var Ar=Rr(Or,9),Fr=Rr(Mr,5),jr=function(e){return(e/8|0)+(7&e&&1)},Nr=function(e,t,n){(null==n||n>e.length)&&(n=e.length)
var r=new(e instanceof yr?yr:e instanceof br?br:mr)(n-t)
return r.set(e.subarray(t,n)),r},Dr=function(e,t,n){n<<=7&t
var r=t/8|0
e[r]|=n,e[r+1]|=n>>>8},Br=function(e,t,n){n<<=7&t
var r=t/8|0
e[r]|=n,e[r+1]|=n>>>8,e[r+2]|=n>>>16},qr=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]})
var i=n.length,s=n.slice()
if(!i)return[new mr(0),0]
if(1==i){var o=new mr(n[0].s+1)
return o[n[0].s]=1,[o,1]}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001})
var a=n[0],l=n[1],c=0,u=1,d=2
for(n[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=i-1;)a=n[n[c].f<n[d].f?c++:d++],l=n[c!=u&&n[c].f<n[d].f?c++:d++],n[u++]={s:-1,f:a.f+l.f,l:a,r:l}
var f=s[0].s
for(r=1;r<i;++r)s[r].s>f&&(f=s[r].s)
var h=new yr(f+1),p=Hr(n[u-1],h,0)
if(p>t){r=0
var g=0,v=p-t,_=1<<v
for(s.sort(function(e,t){return h[t.s]-h[e.s]||e.f-t.f});r<i;++r){var m=s[r].s
if(!(h[m]>t))break
g+=_-(1<<p-h[m]),h[m]=t}for(g>>>=v;g>0;){var y=s[r].s
h[y]<t?g-=1<<t-h[y]++-1:++r}for(;r>=0&&g;--r){var b=s[r].s
h[b]==t&&(--h[b],++g)}p=t}return[new mr(h),p]},Hr=function(e,t,n){return-1==e.s?Math.max(Hr(e.l,t,n+1),Hr(e.r,t,n+1)):t[e.s]=n},Ur=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new yr(++t),r=0,i=e[0],s=1,o=function(e){n[r++]=e},a=1;a<=t;++a)if(e[a]==i&&a!=t)++s
else{if(!i&&s>2){for(;s>138;s-=138)o(32754)
s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(i),--s;s>6;s-=6)o(8304)
s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(i)
s=1,i=e[a]}return[n.subarray(0,r),t]},Gr=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r]
return n},Wr=function(e,t,n){var r=n.length,i=jr(t+2)
e[i]=255&r,e[i+1]=r>>>8,e[i+2]=255^e[i],e[i+3]=255^e[i+1]
for(var s=0;s<r;++s)e[i+s+4]=n[s]
return 8*(i+4+r)},zr=function(e,t,n,r,i,s,o,a,l,c,u){Dr(t,u++,n),++i[256]
for(var d=qr(i,15),f=d[0],h=d[1],p=qr(s,15),g=p[0],v=p[1],_=Ur(f),m=_[0],y=_[1],b=Ur(g),w=b[0],k=b[1],S=new yr(19),x=0;x<m.length;++x)S[31&m[x]]++
for(x=0;x<w.length;++x)S[31&w[x]]++
for(var E=qr(S,7),C=E[0],T=E[1],P=19;P>4&&!C[Sr[P-1]];--P);var L,$,I,R,O=c+5<<3,M=Gr(i,Or)+Gr(s,Mr)+o,A=Gr(i,f)+Gr(s,g)+o+14+3*P+Gr(S,C)+(2*S[16]+3*S[17]+7*S[18])
if(O<=M&&O<=A)return Wr(t,u,e.subarray(l,l+c))
if(Dr(t,u,1+(A<M)),u+=2,A<M){L=Rr(f,h),$=f,I=Rr(g,v),R=g
var F=Rr(C,T)
for(Dr(t,u,y-257),Dr(t,u+5,k-1),Dr(t,u+10,P-4),u+=14,x=0;x<P;++x)Dr(t,u+3*x,C[Sr[x]])
u+=3*P
for(var j=[m,w],N=0;N<2;++N){var D=j[N]
for(x=0;x<D.length;++x){var B=31&D[x]
Dr(t,u,F[B]),u+=C[B],B>15&&(Dr(t,u,D[x]>>>5&127),u+=D[x]>>>12)}}}else L=Ar,$=Or,I=Fr,R=Mr
for(x=0;x<a;++x)if(r[x]>255){B=r[x]>>>18&31,Br(t,u,L[B+257]),u+=$[B+257],B>7&&(Dr(t,u,r[x]>>>23&31),u+=wr[B])
var q=31&r[x]
Br(t,u,I[q]),u+=R[q],q>3&&(Br(t,u,r[x]>>>5&8191),u+=kr[q])}else Br(t,u,L[r[x]]),u+=$[r[x]]
return Br(t,u,L[256]),u+$[256]},Vr=new br([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Qr=function(){for(var e=new br(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(1&n&&3988292384)^n>>>1
e[t]=n}return e}(),Jr=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8}
function Kr(e,t){void 0===t&&(t={})
var n=function(){var e=4294967295
return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=Qr[255&n^t[r]]^n>>>8
e=n},d:function(){return 4294967295^e}}}(),r=e.length
n.p(e)
var i=function(e,t,n,r){return function(e,t,n,r,i){var s=e.length,o=new mr(r+s+5*(1+Math.floor(s/7e3))+i),a=o.subarray(r,o.length-i),l=0
if(!t||s<8)for(var c=0;c<=s;c+=65535){var u=c+65535
u<s?l=Wr(a,l,e.subarray(c,u)):(a[c]=!0,l=Wr(a,l,e.subarray(c,s)))}else{for(var d=Vr[t-1],f=d>>>13,h=8191&d,p=(1<<n)-1,g=new yr(32768),v=new yr(p+1),_=Math.ceil(n/3),m=2*_,y=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<m)&p},b=new br(25e3),w=new yr(288),k=new yr(32),S=0,x=0,E=(c=0,0),C=0,T=0;c<s;++c){var P=y(c),L=32767&c,$=v[P]
if(g[L]=$,v[P]=L,C<=c){var I=s-c
if((S>7e3||E>24576)&&I>423){l=zr(e,a,0,b,w,k,x,E,T,c-T,l),E=S=x=0,T=c
for(var R=0;R<286;++R)w[R]=0
for(R=0;R<30;++R)k[R]=0}var O=2,M=0,A=h,F=L-$&32767
if(I>2&&P==y(c-F))for(var j=Math.min(f,I)-1,N=Math.min(32767,c),D=Math.min(258,I);F<=N&&--A&&L!=$;){if(e[c+O]==e[c+O-F]){for(var B=0;B<D&&e[c+B]==e[c+B-F];++B);if(B>O){if(O=B,M=F,B>j)break
var q=Math.min(F,B-2),H=0
for(R=0;R<q;++R){var U=c-F+R+32768&32767,G=U-g[U]+32768&32767
G>H&&(H=G,$=U)}}}F+=(L=$)-($=g[L])+32768&32767}if(M){b[E++]=268435456|Tr[O]<<18|Pr[M]
var W=31&Tr[O],z=31&Pr[M]
x+=wr[W]+kr[z],++w[257+W],++k[z],C=c+O,++S}else b[E++]=e[c],++w[e[c]]}}l=zr(e,a,!0,b,w,k,x,E,T,c-T,l)}return Nr(o,0,r+jr(l)+i)}(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,n,r)}(e,t,function(e){return 10+(e.filename&&e.filename.length+1||0)}(t),8),s=i.length
return function(e,t){var n=t.filename
if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:9==t.level?2:0,e[9]=3,0!=t.mtime&&Jr(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8
for(var r=0;r<=n.length;++r)e[r+10]=n.charCodeAt(r)}}(i,t),Jr(i,s-8,n.d()),Jr(i,s-4,r),i}function Yr(e,t){var n=e.length
if("undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e)
for(var r=new mr(e.length+(e.length>>>1)),i=0,s=function(e){r[i++]=e},o=0;o<n;++o){if(i+5>r.length){var a=new mr(i+8+(n-o<<1))
a.set(r),r=a}var l=e.charCodeAt(o)
l<128||t?s(l):l<2048?(s(192|l>>>6),s(128|63&l)):l>55295&&l<57344?(s(240|(l=65536+(1047552&l)|1023&e.charCodeAt(++o))>>>18),s(128|l>>>12&63),s(128|l>>>6&63),s(128|63&l)):(s(224|l>>>12),s(128|l>>>6&63),s(128|63&l))}return Nr(r,0,i)}var Xr="disabled",Zr="sampled",ei="active",ti="buffering",ni="paused",ri="trigger",ii=ri+"_activated",si=ri+"_pending",oi=ri+"_"+Xr
function ai(e,t){return t.some(t=>"regex"===t.matching&&new RegExp(t.url).test(e))}class li{constructor(e){this._matchers=e}triggerStatus(e){var t=this._matchers.map(t=>t.triggerStatus(e))
return t.includes(ii)?ii:t.includes(si)?si:oi}stop(){this._matchers.forEach(e=>e.stop())}}class ci{constructor(e){this._matchers=e}triggerStatus(e){var t=new Set
for(var n of this._matchers)t.add(n.triggerStatus(e))
switch(t.delete(oi),t.size){case 0:return oi
case 1:return Array.from(t)[0]
default:return si}}stop(){this._matchers.forEach(e=>e.stop())}}class ui{triggerStatus(){return si}stop(){}}var di=e=>"sessionRecording"in e
class fi{constructor(e){this._urlTriggers=[],this._urlBlocklist=[],this.urlBlocked=!1,this._instance=e}onConfig(e){var t,n
this._urlTriggers=(di(e)?null==(t=e.sessionRecording)?void 0:t.urlTriggers:null==e?void 0:e.urlTriggers)||[],this._urlBlocklist=(di(e)?null==(n=e.sessionRecording)?void 0:n.urlBlocklist:null==e?void 0:e.urlBlocklist)||[]}onRemoteConfig(e){this.onConfig(e)}_urlTriggerStatus(e){var t
return 0===this._urlTriggers.length?oi:(null==(t=this._instance)?void 0:t.get_property(mt))===e?ii:si}triggerStatus(e){var t=this._urlTriggerStatus(e),n=t===ii?ii:t===si?si:oi
return this._instance.register_for_session({$sdk_debug_replay_url_trigger_status:n}),n}checkUrlTriggerConditions(e,t,n){if(void 0!==v&&v.location.href){var r=v.location.href,i=this.urlBlocked,s=ai(r,this._urlBlocklist)
i&&s||(s&&!i?e():!s&&i&&t(),ai(r,this._urlTriggers)&&n("url"))}}stop(){}}class hi{constructor(e){this.linkedFlag=null,this.linkedFlagSeen=!1,this._flaglistenerCleanup=()=>{},this._instance=e}triggerStatus(){var e=si
return V(this.linkedFlag)&&(e=oi),this.linkedFlagSeen&&(e=ii),this._instance.register_for_session({$sdk_debug_replay_linked_flag_trigger_status:e}),e}onConfig(e,t){var n
if(this.linkedFlag=(di(e)?null==(n=e.sessionRecording)?void 0:n.linkedFlag:null==e?void 0:e.linkedFlag)||null,!V(this.linkedFlag)&&!this.linkedFlagSeen){var r=G(this.linkedFlag)?this.linkedFlag:this.linkedFlag.flag,i=G(this.linkedFlag)?null:this.linkedFlag.variant
this._flaglistenerCleanup=this._instance.onFeatureFlags((e,n)=>{var s=!1
if(q(n)&&r in n){var o=n[r]
s=J(o)?!0===o:i?o===i:!!o}this.linkedFlagSeen=s,s&&t(r,i)})}}onRemoteConfig(e,t){this.onConfig(e,t)}stop(){this._flaglistenerCleanup()}}class pi{constructor(e){this._eventTriggers=[],this._instance=e}onConfig(e){var t
this._eventTriggers=(di(e)?null==(t=e.sessionRecording)?void 0:t.eventTriggers:null==e?void 0:e.eventTriggers)||[]}onRemoteConfig(e){this.onConfig(e)}_eventTriggerStatus(e){var t
return 0===this._eventTriggers.length?oi:(null==(t=this._instance)?void 0:t.get_property(yt))===e?ii:si}triggerStatus(e){var t=this._eventTriggerStatus(e),n=t===ii?ii:t===si?si:oi
return this._instance.register_for_session({$sdk_debug_replay_event_trigger_status:n}),n}stop(){}}function gi(e){return e.isRecordingEnabled?ti:Xr}function vi(e){if(!e.receivedFlags)return ti
if(!e.isRecordingEnabled)return Xr
if(e.urlTriggerMatching.urlBlocked)return ni
var t=!0===e.isSampled,n=new li([e.eventTriggerMatching,e.urlTriggerMatching,e.linkedFlagMatching]).triggerStatus(e.sessionId)
return t?Zr:n===ii?ei:n===si?ti:!1===e.isSampled?Xr:ei}function _i(e){if(!e.receivedFlags)return ti
if(!e.isRecordingEnabled)return Xr
if(e.urlTriggerMatching.urlBlocked)return ni
var t=new ci([e.eventTriggerMatching,e.urlTriggerMatching,e.linkedFlagMatching]).triggerStatus(e.sessionId),n=t!==oi,r=J(e.isSampled)
return n&&t===si?ti:n&&t===oi||r&&!e.isSampled?Xr:!0===e.isSampled?Zr:ei}var mi="[SessionRecording]",yi=Fe(mi)
function bi(){var e
return null==P||null==(e=P.__PosthogExtensions__)||null==(e=e.rrweb)?void 0:e.record}var wi=[ar.MouseMove,ar.MouseInteraction,ar.Scroll,ar.ViewportResize,ar.Input,ar.TouchMove,ar.MediaInteraction,ar.Drag],ki=e=>({rrwebMethod:e,enqueuedAt:Date.now(),attempt:1})
function Si(e){return function(e){for(var t="",n=0;n<e.length;){var r=e[n++]
t+=String.fromCharCode(r)}return t}(Kr(Yr(JSON.stringify(e))))}function xi(e){return e.type===or.Custom&&"sessionIdle"===e.data.tag}class Ei{get sessionId(){return this._sessionId}get _sessionIdleThresholdMilliseconds(){return this._instance.config.session_recording.session_idle_threshold_ms||3e5}get started(){return this._captureStarted}get _sessionManager(){if(!this._instance.sessionManager)throw new Error(mi+" must be started with a valid sessionManager.")
return this._instance.sessionManager}get _fullSnapshotIntervalMillis(){var e,t
return this._triggerMatching.triggerStatus(this.sessionId)===si?6e4:null!==(e=null==(t=this._instance.config.session_recording)?void 0:t.full_snapshot_interval_millis)&&void 0!==e?e:3e5}get _isSampled(){var e=this._instance.get_property(_t)
return J(e)?e:null}get _sessionDuration(){var e,t,n=null==(e=this._buffer)?void 0:e.data[(null==(t=this._buffer)?void 0:t.data.length)-1],{sessionStartTimestamp:r}=this._sessionManager.checkAndGetSessionAndWindowId(!0)
return n?n.timestamp-r:null}get _isRecordingEnabled(){var e=!!this._instance.get_property(lt),t=!this._instance.config.disable_session_recording
return v&&e&&t}get _isConsoleLogCaptureEnabled(){var e=!!this._instance.get_property(ct),t=this._instance.config.enable_recording_console_log
return null!=t?t:e}get _canvasRecording(){var e,t,n,r,i,s,o=this._instance.config.session_recording.captureCanvas,a=this._instance.get_property(ft),l=null!==(e=null!==(t=null==o?void 0:o.recordCanvas)&&void 0!==t?t:null==a?void 0:a.enabled)&&void 0!==e&&e,c=null!==(n=null!==(r=null==o?void 0:o.canvasFps)&&void 0!==r?r:null==a?void 0:a.fps)&&void 0!==n?n:4,u=null!==(i=null!==(s=null==o?void 0:o.canvasQuality)&&void 0!==s?s:null==a?void 0:a.quality)&&void 0!==i?i:.4
if("string"==typeof u){var d=parseFloat(u)
u=isNaN(d)?.4:d}return{enabled:l,fps:re(c,0,12,yi.createLogger("canvas recording fps"),4),quality:re(u,0,1,yi.createLogger("canvas recording quality"),.4)}}get _networkPayloadCapture(){var e,t,n=this._instance.get_property(ut),r={recordHeaders:null==(e=this._instance.config.session_recording)?void 0:e.recordHeaders,recordBody:null==(t=this._instance.config.session_recording)?void 0:t.recordBody},i=(null==r?void 0:r.recordHeaders)||(null==n?void 0:n.recordHeaders),s=(null==r?void 0:r.recordBody)||(null==n?void 0:n.recordBody),o=q(this._instance.config.capture_performance)?this._instance.config.capture_performance.network_timing:this._instance.config.capture_performance,a=!!(J(o)?o:null==n?void 0:n.capturePerformance)
return i||s||a?{recordHeaders:i,recordBody:s,recordPerformance:a}:void 0}get _masking(){var e,t,n,r,i,s,o=this._instance.get_property(dt),a={maskAllInputs:null==(e=this._instance.config.session_recording)?void 0:e.maskAllInputs,maskTextSelector:null==(t=this._instance.config.session_recording)?void 0:t.maskTextSelector,blockSelector:null==(n=this._instance.config.session_recording)?void 0:n.blockSelector},l=null!==(r=null==a?void 0:a.maskAllInputs)&&void 0!==r?r:null==o?void 0:o.maskAllInputs,c=null!==(i=null==a?void 0:a.maskTextSelector)&&void 0!==i?i:null==o?void 0:o.maskTextSelector,u=null!==(s=null==a?void 0:a.blockSelector)&&void 0!==s?s:null==o?void 0:o.blockSelector
return U(l)&&U(c)&&U(u)?void 0:{maskAllInputs:null==l||l,maskTextSelector:c,blockSelector:u}}get _sampleRate(){var e=this._instance.get_property(ht)
return Q(e)?e:null}get _minimumDuration(){var e=this._instance.get_property(pt)
return Q(e)?e:null}get status(){return this._receivedFlags?this._statusMatcher({receivedFlags:this._receivedFlags,isRecordingEnabled:this._isRecordingEnabled,isSampled:this._isSampled,urlTriggerMatching:this._urlTriggerMatching,eventTriggerMatching:this._eventTriggerMatching,linkedFlagMatching:this._linkedFlagMatching,sessionId:this.sessionId}):ti}constructor(e){if(this._statusMatcher=gi,this._receivedFlags=!1,this._queuedRRWebEvents=[],this._isIdle="unknown",this._lastActivityTimestamp=Date.now(),this._triggerMatching=new ui,this._removePageViewCaptureHook=void 0,this._onSessionIdListener=void 0,this._persistFlagsOnSessionListener=void 0,this._samplingSessionListener=void 0,this._removeEventTriggerCaptureHook=void 0,this._forceAllowLocalhostNetworkCapture=!1,this._onBeforeUnload=()=>{this._flushBuffer()},this._onOffline=()=>{this.tryAddCustomEvent("browser offline",{})},this._onOnline=()=>{this.tryAddCustomEvent("browser online",{})},this._onVisibilityChange=()=>{if(null!=k&&k.visibilityState){var e="window "+k.visibilityState
this.tryAddCustomEvent(e,{})}},this._instance=e,this._captureStarted=!1,this._endpoint="/s/",this._stopRrweb=void 0,this._receivedFlags=!1,!this._instance.sessionManager)throw yi.error("started without valid sessionManager"),new Error(mi+" started without valid sessionManager. This is a bug.")
if("always"===this._instance.config.cookieless_mode)throw new Error(mi+' cannot be used with cookieless_mode="always"')
this._linkedFlagMatching=new hi(this._instance),this._urlTriggerMatching=new fi(this._instance),this._eventTriggerMatching=new pi(this._instance)
var{sessionId:t,windowId:n}=this._sessionManager.checkAndGetSessionAndWindowId()
this._sessionId=t,this._windowId=n,this._buffer=this._clearBuffer(),this._sessionIdleThresholdMilliseconds>=this._sessionManager.sessionTimeoutMs&&yi.warn("session_idle_threshold_ms ("+this._sessionIdleThresholdMilliseconds+") is greater than the session timeout ("+this._sessionManager.sessionTimeoutMs+"). Session will never be detected as idle")}startIfEnabledOrStop(e){this._isRecordingEnabled?(this._startCapture(e),Je(v,"beforeunload",this._onBeforeUnload),Je(v,"offline",this._onOffline),Je(v,"online",this._onOnline),Je(v,"visibilitychange",this._onVisibilityChange),this._setupSampling(),this._addEventTriggerListener(),V(this._removePageViewCaptureHook)&&(this._removePageViewCaptureHook=this._instance.on("eventCaptured",e=>{try{if("$pageview"===e.event){var t=null!=e&&e.properties.$current_url?this._maskUrl(null==e?void 0:e.properties.$current_url):""
if(!t)return
this.tryAddCustomEvent("$pageview",{href:t})}}catch(e){yi.error("Could not add $pageview to rrweb session",e)}})),this._onSessionIdListener||(this._onSessionIdListener=this._sessionManager.onSessionId((e,t,n)=>{var r,i
n&&(this.tryAddCustomEvent("$session_id_change",{sessionId:e,windowId:t,changeReason:n}),null==(r=this._instance)||null==(r=r.persistence)||r.unregister(yt),null==(i=this._instance)||null==(i=i.persistence)||i.unregister(mt))}))):this.stopRecording()}stopRecording(){var e,t,n,r
this._captureStarted&&this._stopRrweb&&(this._stopRrweb(),this._stopRrweb=void 0,this._captureStarted=!1,null==v||v.removeEventListener("beforeunload",this._onBeforeUnload),null==v||v.removeEventListener("offline",this._onOffline),null==v||v.removeEventListener("online",this._onOnline),null==v||v.removeEventListener("visibilitychange",this._onVisibilityChange),this._clearBuffer(),clearInterval(this._fullSnapshotTimer),null==(e=this._removePageViewCaptureHook)||e.call(this),this._removePageViewCaptureHook=void 0,null==(t=this._removeEventTriggerCaptureHook)||t.call(this),this._removeEventTriggerCaptureHook=void 0,null==(n=this._onSessionIdListener)||n.call(this),this._onSessionIdListener=void 0,null==(r=this._samplingSessionListener)||r.call(this),this._samplingSessionListener=void 0,this._eventTriggerMatching.stop(),this._urlTriggerMatching.stop(),this._linkedFlagMatching.stop(),yi.info("stopped"))}_resetSampling(){var e
null==(e=this._instance.persistence)||e.unregister(_t)}_makeSamplingDecision(e){var t,n=this._sessionId!==e,r=this._sampleRate
if(Q(r)){var i=this._isSampled,s=n||!J(i),o=s?function(e,t){return function(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0
return Math.abs(t)}(e)%100<re(100*t,0,100,Ae)}(e,r):i
s&&(o?this._reportStarted(Zr):yi.warn("Sample rate ("+r+") has determined that this sessionId ("+e+") will not be sent to the server."),this.tryAddCustomEvent("samplingDecisionMade",{sampleRate:r,isSampled:o})),null==(t=this._instance.persistence)||t.register({[_t]:o})}else this._resetSampling()}onRemoteConfig(e){var t,n,r,i
this.tryAddCustomEvent("$remote_config_received",e),this._persistRemoteConfig(e),null!=(t=e.sessionRecording)&&t.endpoint&&(this._endpoint=null==(i=e.sessionRecording)?void 0:i.endpoint),this._setupSampling(),"any"===(null==(n=e.sessionRecording)?void 0:n.triggerMatchType)?(this._statusMatcher=vi,this._triggerMatching=new li([this._eventTriggerMatching,this._urlTriggerMatching])):(this._statusMatcher=_i,this._triggerMatching=new ci([this._eventTriggerMatching,this._urlTriggerMatching])),this._instance.register_for_session({$sdk_debug_replay_remote_trigger_matching_config:null==(r=e.sessionRecording)?void 0:r.triggerMatchType}),this._urlTriggerMatching.onConfig(e),this._eventTriggerMatching.onConfig(e),this._linkedFlagMatching.onConfig(e,(e,t)=>{this._reportStarted("linked_flag_matched",{flag:e,variant:t})}),this._receivedFlags=!0,this.startIfEnabledOrStop()}_setupSampling(){Q(this._sampleRate)&&V(this._samplingSessionListener)&&(this._samplingSessionListener=this._sessionManager.onSessionId(e=>{this._makeSamplingDecision(e)}))}_persistRemoteConfig(e){if(this._instance.persistence){var t,n=this._instance.persistence,r=()=>{var t,r,i,s,o,a,l,c,u,d=null==(t=e.sessionRecording)?void 0:t.sampleRate,f=V(d)?null:parseFloat(d)
V(f)&&this._resetSampling()
var h=null==(r=e.sessionRecording)?void 0:r.minimumDurationMilliseconds
n.register({[lt]:!!e.sessionRecording,[ct]:null==(i=e.sessionRecording)?void 0:i.consoleLogRecordingEnabled,[ut]:p({capturePerformance:e.capturePerformance},null==(s=e.sessionRecording)?void 0:s.networkPayloadCapture),[dt]:null==(o=e.sessionRecording)?void 0:o.masking,[ft]:{enabled:null==(a=e.sessionRecording)?void 0:a.recordCanvas,fps:null==(l=e.sessionRecording)?void 0:l.canvasFps,quality:null==(c=e.sessionRecording)?void 0:c.canvasQuality},[ht]:f,[pt]:U(h)?null:h,[gt]:null==(u=e.sessionRecording)?void 0:u.scriptConfig})}
r(),null==(t=this._persistFlagsOnSessionListener)||t.call(this),this._persistFlagsOnSessionListener=this._sessionManager.onSessionId(r)}}log(e,t){var n
void 0===t&&(t="log"),null==(n=this._instance.sessionRecording)||n.onRRwebEmit({type:6,data:{plugin:"rrweb/console@1",payload:{level:t,trace:[],payload:[JSON.stringify(e)]}},timestamp:Date.now()})}_startCapture(e){var t
U(Object.assign)||U(Array.from)||(this._captureStarted||this._instance.config.disable_session_recording||this._instance.consent.isOptedOut())||(this._captureStarted=!0,this._sessionManager.checkAndGetSessionAndWindowId(),bi()?this._onScriptLoaded():null==(t=P.__PosthogExtensions__)||null==t.loadExternalDependency||t.loadExternalDependency(this._instance,this._scriptName,e=>{if(e)return yi.error("could not load recorder",e)
this._onScriptLoaded()}),yi.info("starting"),this.status===ei&&this._reportStarted(e||"recording_initialized"))}get _scriptName(){var e
return(null==(e=this._instance)||null==(e=e.persistence)||null==(e=e.get_property(gt))?void 0:e.script)||"recorder"}_isInteractiveEvent(e){var t
return 3===e.type&&-1!==wi.indexOf(null==(t=e.data)?void 0:t.source)}_updateWindowAndSessionIds(e){var t=this._isInteractiveEvent(e)
t||this._isIdle||e.timestamp-this._lastActivityTimestamp>this._sessionIdleThresholdMilliseconds&&(this._isIdle=!0,clearInterval(this._fullSnapshotTimer),this.tryAddCustomEvent("sessionIdle",{eventTimestamp:e.timestamp,lastActivityTimestamp:this._lastActivityTimestamp,threshold:this._sessionIdleThresholdMilliseconds,bufferLength:this._buffer.data.length,bufferSize:this._buffer.size}),this._flushBuffer())
var n=!1
if(t&&(this._lastActivityTimestamp=e.timestamp,this._isIdle)){var r="unknown"===this._isIdle
this._isIdle=!1,r||(this.tryAddCustomEvent("sessionNoLongerIdle",{reason:"user activity",type:e.type}),n=!0)}if(!this._isIdle){var{windowId:i,sessionId:s}=this._sessionManager.checkAndGetSessionAndWindowId(!t,e.timestamp),o=this._sessionId!==s,a=this._windowId!==i
this._windowId=i,this._sessionId=s,o||a?(this.stopRecording(),this.startIfEnabledOrStop("session_id_changed")):n&&this._scheduleFullSnapshot()}}_tryRRWebMethod(e){try{return e.rrwebMethod(),!0}catch(t){return this._queuedRRWebEvents.length<10?this._queuedRRWebEvents.push({enqueuedAt:e.enqueuedAt||Date.now(),attempt:e.attempt++,rrwebMethod:e.rrwebMethod}):yi.warn("could not emit queued rrweb event.",t,e),!1}}tryAddCustomEvent(e,t){return this._tryRRWebMethod(ki(()=>bi().addCustomEvent(e,t)))}_tryTakeFullSnapshot(){return this._tryRRWebMethod(ki(()=>bi().takeFullSnapshot()))}_onScriptLoaded(){var e,t,n,r,i={blockClass:"ph-no-capture",blockSelector:void 0,ignoreClass:"ph-ignore-input",maskTextClass:"ph-mask",maskTextSelector:void 0,maskTextFn:void 0,maskAllInputs:!0,maskInputOptions:{password:!0},maskInputFn:void 0,slimDOMOptions:{},collectFonts:!1,inlineStylesheet:!0,recordCrossOriginIframes:!1},s=this._instance.config.session_recording
for(var[o,a]of Object.entries(s||{}))o in i&&("maskInputOptions"===o?i.maskInputOptions=p({password:!0},a):i[o]=a)
this._canvasRecording&&this._canvasRecording.enabled&&(i.recordCanvas=!0,i.sampling={canvas:this._canvasRecording.fps},i.dataURLOptions={type:"image/webp",quality:this._canvasRecording.quality}),this._masking&&(i.maskAllInputs=null===(t=this._masking.maskAllInputs)||void 0===t||t,i.maskTextSelector=null!==(n=this._masking.maskTextSelector)&&void 0!==n?n:void 0,i.blockSelector=null!==(r=this._masking.blockSelector)&&void 0!==r?r:void 0)
var l=bi()
if(l){this._mutationThrottler=null!==(e=this._mutationThrottler)&&void 0!==e?e:new _r(l,{refillRate:this._instance.config.session_recording.__mutationThrottlerRefillRate,bucketSize:this._instance.config.session_recording.__mutationThrottlerBucketSize,onBlockedNode:(e,t)=>{var n="Too many mutations on node '"+e+"'. Rate limiting. This could be due to SVG animations or something similar"
yi.info(n,{node:t}),this.log(mi+" "+n,"warn")}})
var c=this._gatherRRWebPlugins()
this._stopRrweb=l(p({emit:e=>{this.onRRwebEmit(e)},plugins:c},i)),this._lastActivityTimestamp=Date.now(),this._isIdle=J(this._isIdle)?this._isIdle:"unknown",this.tryAddCustomEvent("$session_options",{sessionRecordingOptions:i,activePlugins:c.map(e=>null==e?void 0:e.name)}),this.tryAddCustomEvent("$posthog_config",{config:this._instance.config})}else yi.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")}_scheduleFullSnapshot(){if(this._fullSnapshotTimer&&clearInterval(this._fullSnapshotTimer),!0!==this._isIdle){var e=this._fullSnapshotIntervalMillis
e&&(this._fullSnapshotTimer=setInterval(()=>{this._tryTakeFullSnapshot()},e))}}_gatherRRWebPlugins(){var e,t,n=[],r=null==(e=P.__PosthogExtensions__)||null==(e=e.rrwebPlugins)?void 0:e.getRecordConsolePlugin
r&&this._isConsoleLogCaptureEnabled&&n.push(r())
var i=null==(t=P.__PosthogExtensions__)||null==(t=t.rrwebPlugins)?void 0:t.getRecordNetworkPlugin
return this._networkPayloadCapture&&B(i)&&(!yn.includes(location.hostname)||this._forceAllowLocalhostNetworkCapture?n.push(i(vr(this._instance.config,this._networkPayloadCapture))):yi.info("NetworkCapture not started because we are on localhost.")),n}onRRwebEmit(e){var t
if(this._processQueuedEvents(),e&&q(e)){if(e.type===or.Meta){var n=this._maskUrl(e.data.href)
if(this._lastHref=n,!n)return
e.data.href=n}else this._pageViewFallBack()
if(this._urlTriggerMatching.checkUrlTriggerConditions(()=>this._pauseRecording(),()=>this._resumeRecording(),e=>this._activateTrigger(e)),!this._urlTriggerMatching.urlBlocked||(r=e).type===or.Custom&&"recording paused"===r.data.tag){var r
e.type===or.FullSnapshot&&this._scheduleFullSnapshot(),e.type===or.FullSnapshot&&this._receivedFlags&&this._triggerMatching.triggerStatus(this.sessionId)===si&&this._clearBuffer()
var i=this._mutationThrottler?this._mutationThrottler.throttleMutations(e):e
if(i){var s=function(e){var t=e
if(t&&q(t)&&6===t.type&&q(t.data)&&"rrweb/console@1"===t.data.plugin){t.data.payload.payload.length>10&&(t.data.payload.payload=t.data.payload.payload.slice(0,10),t.data.payload.payload.push("...[truncated]"))
for(var n=[],r=0;r<t.data.payload.payload.length;r++)t.data.payload.payload[r]&&t.data.payload.payload[r].length>2e3?n.push(t.data.payload.payload[r].slice(0,2e3)+"...[truncated]"):n.push(t.data.payload.payload[r])
return t.data.payload.payload=n,e}return e}(i)
if(this._updateWindowAndSessionIds(s),!0!==this._isIdle||xi(s)){if(xi(s)){var o=s.data.payload
if(o){var a=o.lastActivityTimestamp,l=o.threshold
s.timestamp=a+l}}var c=null===(t=this._instance.config.session_recording.compress_events)||void 0===t||t?function(e){if(ir(e)<1024)return e
try{if(e.type===or.FullSnapshot)return p({},e,{data:Si(e.data),cv:"2024-10"})
if(e.type===or.IncrementalSnapshot&&e.data.source===ar.Mutation)return p({},e,{cv:"2024-10",data:p({},e.data,{texts:Si(e.data.texts),attributes:Si(e.data.attributes),removes:Si(e.data.removes),adds:Si(e.data.adds)})})
if(e.type===or.IncrementalSnapshot&&e.data.source===ar.StyleSheetRule)return p({},e,{cv:"2024-10",data:p({},e.data,{adds:e.data.adds?Si(e.data.adds):void 0,removes:e.data.removes?Si(e.data.removes):void 0})})}catch(e){yi.error("could not compress event - will use uncompressed event",e)}return e}(s):s,u={$snapshot_bytes:ir(c),$snapshot_data:c,$session_id:this._sessionId,$window_id:this._windowId}
this.status!==Xr?this._captureSnapshotBuffered(u):this._clearBuffer()}}}}}_pageViewFallBack(){if(!this._instance.config.capture_pageview&&v){var e=this._maskUrl(v.location.href)
this._lastHref!==e&&(this.tryAddCustomEvent("$url_changed",{href:e}),this._lastHref=e)}}_processQueuedEvents(){if(this._queuedRRWebEvents.length){var e=[...this._queuedRRWebEvents]
this._queuedRRWebEvents=[],e.forEach(e=>{Date.now()-e.enqueuedAt<=2e3&&this._tryRRWebMethod(e)})}}_maskUrl(e){var t=this._instance.config.session_recording
if(t.maskNetworkRequestFn){var n,r={url:e}
return null==(n=r=t.maskNetworkRequestFn(r))?void 0:n.url}return e}_clearBuffer(){return this._buffer={size:0,data:[],sessionId:this._sessionId,windowId:this._windowId},this._buffer}_flushBuffer(){this._flushBufferTimer&&(clearTimeout(this._flushBufferTimer),this._flushBufferTimer=void 0)
var e=this._minimumDuration,t=this._sessionDuration,n=Q(t)&&t>=0,r=Q(e)&&n&&t<e
return this.status===ti||this.status===ni||this.status===Xr||r?(this._flushBufferTimer=setTimeout(()=>{this._flushBuffer()},2e3),this._buffer):(this._buffer.data.length>0&&sr(this._buffer).forEach(e=>{this._captureSnapshot({$snapshot_bytes:e.size,$snapshot_data:e.data,$session_id:e.sessionId,$window_id:e.windowId,$lib:"web",$lib_version:L.LIB_VERSION})}),this._clearBuffer())}_captureSnapshotBuffered(e){var t,n=2+((null==(t=this._buffer)?void 0:t.data.length)||0)
!this._isIdle&&(this._buffer.size+e.$snapshot_bytes+n>943718.4||this._buffer.sessionId!==this._sessionId)&&(this._buffer=this._flushBuffer()),this._buffer.size+=e.$snapshot_bytes,this._buffer.data.push(e.$snapshot_data),this._flushBufferTimer||this._isIdle||(this._flushBufferTimer=setTimeout(()=>{this._flushBuffer()},2e3))}_captureSnapshot(e){this._instance.capture("$snapshot",e,{_url:this._instance.requestRouter.endpointFor("api",this._endpoint),_noTruncate:!0,_batchKey:"recordings",skip_client_rate_limiting:!0})}_activateTrigger(e){var t
this._triggerMatching.triggerStatus(this.sessionId)===si&&(null==(t=this._instance)||null==(t=t.persistence)||t.register({["url"===e?mt:yt]:this._sessionId}),this._flushBuffer(),this._reportStarted(e+"_trigger_matched"))}_pauseRecording(){this._urlTriggerMatching.urlBlocked||(this._urlTriggerMatching.urlBlocked=!0,clearInterval(this._fullSnapshotTimer),yi.info("recording paused due to URL blocker"),this.tryAddCustomEvent("recording paused",{reason:"url blocker"}))}_resumeRecording(){this._urlTriggerMatching.urlBlocked&&(this._urlTriggerMatching.urlBlocked=!1,this._tryTakeFullSnapshot(),this._scheduleFullSnapshot(),this.tryAddCustomEvent("recording resumed",{reason:"left blocked url"}),yi.info("recording resumed"))}_addEventTriggerListener(){0!==this._eventTriggerMatching._eventTriggers.length&&V(this._removeEventTriggerCaptureHook)&&(this._removeEventTriggerCaptureHook=this._instance.on("eventCaptured",e=>{try{this._eventTriggerMatching._eventTriggers.includes(e.event)&&this._activateTrigger("event")}catch(e){yi.error("Could not activate event trigger",e)}}))}overrideLinkedFlag(){this._linkedFlagMatching.linkedFlagSeen=!0,this._tryTakeFullSnapshot(),this._reportStarted("linked_flag_overridden")}overrideSampling(){var e
null==(e=this._instance.persistence)||e.register({[_t]:!0}),this._tryTakeFullSnapshot(),this._reportStarted("sampling_overridden")}overrideTrigger(e){this._activateTrigger(e)}_reportStarted(e,t){this._instance.register_for_session({$session_recording_start_reason:e}),yi.info(e.replace("_"," "),t),R(["recording_initialized","session_id_changed"],e)||this.tryAddCustomEvent(e,t)}get sdkDebugProperties(){var{sessionStartTimestamp:e}=this._sessionManager.checkAndGetSessionAndWindowId(!0)
return{$recording_status:this.status,$sdk_debug_replay_internal_buffer_length:this._buffer.data.length,$sdk_debug_replay_internal_buffer_size:this._buffer.size,$sdk_debug_current_session_duration:this._sessionDuration,$sdk_debug_session_start:e}}}var Ci=Fe("[SegmentIntegration]")
var Ti="posthog-js"
function Pi(e,t){var{organization:n,projectId:r,prefix:i,severityAllowList:s=["error"],sendExceptionsToPostHog:o=!0}=void 0===t?{}:t
return t=>{var a,l,c,u,d
if("*"!==s&&!s.includes(t.level)||!e.__loaded)return t
t.tags||(t.tags={})
var f=e.requestRouter.endpointFor("ui","/project/"+e.config.token+"/person/"+e.get_distinct_id())
t.tags["PostHog Person URL"]=f,e.sessionRecordingStarted()&&(t.tags["PostHog Recording URL"]=e.get_session_replay_url({withTimestamp:!0}))
var h=(null==(a=t.exception)?void 0:a.values)||[],g=h.map(e=>p({},e,{stacktrace:e.stacktrace?p({},e.stacktrace,{type:"raw",frames:(e.stacktrace.frames||[]).map(e=>p({},e,{platform:"web:javascript"}))}):void 0})),v={$exception_message:(null==(l=h[0])?void 0:l.value)||t.message,$exception_type:null==(c=h[0])?void 0:c.type,$exception_personURL:f,$exception_level:t.level,$exception_list:g,$sentry_event_id:t.event_id,$sentry_exception:t.exception,$sentry_exception_message:(null==(u=h[0])?void 0:u.value)||t.message,$sentry_exception_type:null==(d=h[0])?void 0:d.type,$sentry_tags:t.tags}
return n&&r&&(v.$sentry_url=(i||"https://sentry.io/organizations/")+n+"/issues/?project="+r+"&query="+t.event_id),o&&e.exceptions.sendExceptionEvent(v),t}}class Li{constructor(e,t,n,r,i,s){this.name=Ti,this.setupOnce=function(o){o(Pi(e,{organization:t,projectId:n,prefix:r,severityAllowList:i,sendExceptionsToPostHog:null==s||s}))}}}var $i=null!=v&&v.location?Sn(v.location.hash,"__posthog")||Sn(location.hash,"state"):null,Ii="_postHogToolbarParams",Ri=Fe("[Toolbar]"),Oi=function(e){return e[e.UNINITIALIZED=0]="UNINITIALIZED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED",e}(Oi||{})
class Mi{constructor(e){this.instance=e}_setToolbarState(e){P.ph_toolbar_state=e}_getToolbarState(){var e
return null!==(e=P.ph_toolbar_state)&&void 0!==e?e:Oi.UNINITIALIZED}maybeLoadToolbar(e,t,n){if(void 0===e&&(e=void 0),void 0===t&&(t=void 0),void 0===n&&(n=void 0),!v||!k)return!1
e=null!=e?e:v.location,n=null!=n?n:v.history
try{if(!t){try{v.localStorage.setItem("test","test"),v.localStorage.removeItem("test")}catch(e){return!1}t=null==v?void 0:v.localStorage}var r,i=$i||Sn(e.hash,"__posthog")||Sn(e.hash,"state"),s=i?Ue(()=>JSON.parse(atob(decodeURIComponent(i))))||Ue(()=>JSON.parse(decodeURIComponent(i))):null
return s&&"ph_authorize"===s.action?((r=s).source="url",r&&Object.keys(r).length>0&&(s.desiredHash?e.hash=s.desiredHash:n?n.replaceState(n.state,"",e.pathname+e.search):e.hash="")):((r=JSON.parse(t.getItem(Ii)||"{}")).source="localstorage",delete r.userIntent),!(!r.token||this.instance.config.token!==r.token||(this.loadToolbar(r),0))}catch(e){return!1}}_callLoadToolbar(e){var t=P.ph_load_toolbar||P.ph_load_editor
!V(t)&&B(t)?t(e,this.instance):Ri.warn("No toolbar load function found")}loadToolbar(e){var t=!(null==k||!k.getElementById(At))
if(!v||t)return!1
var n="custom"===this.instance.requestRouter.region&&this.instance.config.advanced_disable_toolbar_metrics,r=p({token:this.instance.config.token},e,{apiURL:this.instance.requestRouter.endpointFor("ui")},n?{instrument:!1}:{})
if(v.localStorage.setItem(Ii,JSON.stringify(p({},r,{source:void 0}))),this._getToolbarState()===Oi.LOADED)this._callLoadToolbar(r)
else if(this._getToolbarState()===Oi.UNINITIALIZED){var i
this._setToolbarState(Oi.LOADING),null==(i=P.__PosthogExtensions__)||null==i.loadExternalDependency||i.loadExternalDependency(this.instance,"toolbar",e=>{if(e)return Ri.error("[Toolbar] Failed to load",e),void this._setToolbarState(Oi.UNINITIALIZED)
this._setToolbarState(Oi.LOADED),this._callLoadToolbar(r)}),Je(v,"turbolinks:load",()=>{this._setToolbarState(Oi.UNINITIALIZED),this.loadToolbar(r)})}return!0}_loadEditor(e){return this.loadToolbar(e)}maybeLoadEditor(e,t,n){return void 0===e&&(e=void 0),void 0===t&&(t=void 0),void 0===n&&(n=void 0),this.maybeLoadToolbar(e,t,n)}}var Ai=Fe("[TracingHeaders]")
class Fi{constructor(e){this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0,this._startCapturing=()=>{var e,t
U(this._restoreXHRPatch)&&(null==(e=P.__PosthogExtensions__)||null==(e=e.tracingHeadersPatchFns)||e._patchXHR(this._instance.config.__add_tracing_headers||[],this._instance.get_distinct_id(),this._instance.sessionManager)),U(this._restoreFetchPatch)&&(null==(t=P.__PosthogExtensions__)||null==(t=t.tracingHeadersPatchFns)||t._patchFetch(this._instance.config.__add_tracing_headers||[],this._instance.get_distinct_id(),this._instance.sessionManager))},this._instance=e}_loadScript(e){var t,n
null!=(t=P.__PosthogExtensions__)&&t.tracingHeadersPatchFns&&e(),null==(n=P.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"tracing-headers",t=>{if(t)return Ai.error("failed to load script",t)
e()})}startIfEnabledOrStop(){var e,t
this._instance.config.__add_tracing_headers?this._loadScript(this._startCapturing):(null==(e=this._restoreXHRPatch)||e.call(this),null==(t=this._restoreFetchPatch)||t.call(this),this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0)}}var ji=Fe("[Web Vitals]"),Ni=9e5
class Di{constructor(e){var t
this._enabledServerSide=!1,this._initialized=!1,this._buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0},this._flushToCapture=()=>{clearTimeout(this._delayedFlushTimer),0!==this._buffer.metrics.length&&(this._instance.capture("$web_vitals",this._buffer.metrics.reduce((e,t)=>p({},e,{["$web_vitals_"+t.name+"_event"]:p({},t),["$web_vitals_"+t.name+"_value"]:t.value}),{})),this._buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0})},this._addToBuffer=e=>{var t,n=null==(t=this._instance.sessionManager)?void 0:t.checkAndGetSessionAndWindowId(!0)
if(U(n))ji.error("Could not read session ID. Dropping metrics!")
else{this._buffer=this._buffer||{url:void 0,metrics:[],firstMetricTimestamp:void 0}
var r=this._currentURL()
U(r)||(V(null==e?void 0:e.name)||V(null==e?void 0:e.value)?ji.error("Invalid metric received",e):this._maxAllowedValue&&e.value>=this._maxAllowedValue?ji.error("Ignoring metric with value >= "+this._maxAllowedValue,e):(this._buffer.url!==r&&(this._flushToCapture(),this._delayedFlushTimer=setTimeout(this._flushToCapture,this.flushToCaptureTimeoutMs)),U(this._buffer.url)&&(this._buffer.url=r),this._buffer.firstMetricTimestamp=U(this._buffer.firstMetricTimestamp)?Date.now():this._buffer.firstMetricTimestamp,e.attribution&&e.attribution.interactionTargetElement&&(e.attribution.interactionTargetElement=void 0),this._buffer.metrics.push(p({},e,{$current_url:r,$session_id:n.sessionId,$window_id:n.windowId,timestamp:Date.now()})),this._buffer.metrics.length===this.allowedMetrics.length&&this._flushToCapture()))}},this._startCapturing=()=>{var e,t,n,r,i=P.__PosthogExtensions__
U(i)||U(i.postHogWebVitalsCallbacks)||({onLCP:e,onCLS:t,onFCP:n,onINP:r}=i.postHogWebVitalsCallbacks),e&&t&&n&&r?(this.allowedMetrics.indexOf("LCP")>-1&&e(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("CLS")>-1&&t(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("FCP")>-1&&n(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("INP")>-1&&r(this._addToBuffer.bind(this)),this._initialized=!0):ji.error("web vitals callbacks not loaded - not starting")},this._instance=e,this._enabledServerSide=!(null==(t=this._instance.persistence)||!t.props[it]),this.startIfEnabled()}get allowedMetrics(){var e,t,n=q(this._instance.config.capture_performance)?null==(e=this._instance.config.capture_performance)?void 0:e.web_vitals_allowed_metrics:void 0
return U(n)?(null==(t=this._instance.persistence)?void 0:t.props[ot])||["CLS","FCP","INP","LCP"]:n}get flushToCaptureTimeoutMs(){return(q(this._instance.config.capture_performance)?this._instance.config.capture_performance.web_vitals_delayed_flush_ms:void 0)||5e3}get _maxAllowedValue(){var e=q(this._instance.config.capture_performance)&&Q(this._instance.config.capture_performance.__web_vitals_max_value)?this._instance.config.capture_performance.__web_vitals_max_value:Ni
return 0<e&&e<=6e4?Ni:e}get isEnabled(){var e=null==S?void 0:S.protocol
if("http:"!==e&&"https:"!==e)return ji.info("Web Vitals are disabled on non-http/https protocols"),!1
var t=q(this._instance.config.capture_performance)?this._instance.config.capture_performance.web_vitals:J(this._instance.config.capture_performance)?this._instance.config.capture_performance:void 0
return J(t)?t:this._enabledServerSide}startIfEnabled(){this.isEnabled&&!this._initialized&&(ji.info("enabled, starting..."),this._loadScript(this._startCapturing))}onRemoteConfig(e){var t=q(e.capturePerformance)&&!!e.capturePerformance.web_vitals,n=q(e.capturePerformance)?e.capturePerformance.web_vitals_allowed_metrics:void 0
this._instance.persistence&&(this._instance.persistence.register({[it]:t}),this._instance.persistence.register({[ot]:n})),this._enabledServerSide=t,this.startIfEnabled()}_loadScript(e){var t,n
null!=(t=P.__PosthogExtensions__)&&t.postHogWebVitalsCallbacks&&e(),null==(n=P.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"web-vitals",t=>{t?ji.error("failed to load script",t):e()})}_currentURL(){var e=v?v.location.href:void 0
return e||ji.error("Could not determine current URL"),e}}var Bi=Fe("[Heatmaps]")
function qi(e){return q(e)&&"clientX"in e&&"clientY"in e&&Q(e.clientX)&&Q(e.clientY)}class Hi{constructor(e){var t
this.rageclicks=new vn,this._enabledServerSide=!1,this._initialized=!1,this._flushInterval=null,this.instance=e,this._enabledServerSide=!(null==(t=this.instance.persistence)||!t.props[et])}get flushIntervalMilliseconds(){var e=5e3
return q(this.instance.config.capture_heatmaps)&&this.instance.config.capture_heatmaps.flush_interval_milliseconds&&(e=this.instance.config.capture_heatmaps.flush_interval_milliseconds),e}get isEnabled(){return U(this.instance.config.capture_heatmaps)?U(this.instance.config.enable_heatmaps)?this._enabledServerSide:this.instance.config.enable_heatmaps:!1!==this.instance.config.capture_heatmaps}startIfEnabled(){if(this.isEnabled){if(this._initialized)return
Bi.info("starting..."),this._setupListeners(),this._flushInterval=setInterval(this._flush.bind(this),this.flushIntervalMilliseconds)}else{var e,t
clearInterval(null!==(e=this._flushInterval)&&void 0!==e?e:void 0),null==(t=this._deadClicksCapture)||t.stop(),this.getAndClearBuffer()}}onRemoteConfig(e){var t=!!e.heatmaps
this.instance.persistence&&this.instance.persistence.register({[et]:t}),this._enabledServerSide=t,this.startIfEnabled()}getAndClearBuffer(){var e=this._buffer
return this._buffer=void 0,e}_onDeadClick(e){this._onClick(e.originalEvent,"deadclick")}_setupListeners(){v&&k&&(Je(v,"beforeunload",this._flush.bind(this)),Je(k,"click",e=>this._onClick(e||(null==v?void 0:v.event)),{capture:!0}),Je(k,"mousemove",e=>this._onMouseMove(e||(null==v?void 0:v.event)),{capture:!0}),this._deadClicksCapture=new Zn(this.instance,Yn,this._onDeadClick.bind(this)),this._deadClicksCapture.startIfEnabled(),this._initialized=!0)}_getProperties(e,t){var n=this.instance.scrollManager.scrollY(),r=this.instance.scrollManager.scrollX(),i=this.instance.scrollManager.scrollElement(),s=function(e,t,n){for(var r=e;r&&Dt(r)&&!Bt(r,"body");){if(r===n)return!1
if(R(t,null==v?void 0:v.getComputedStyle(r).position))return!0
r=Yt(r)}return!1}(Qt(e),["fixed","sticky"],i)
return{x:e.clientX+(s?0:r),y:e.clientY+(s?0:n),target_fixed:s,type:t}}_onClick(e,t){var n
if(void 0===t&&(t="click"),!Nt(e.target)&&qi(e)){var r=this._getProperties(e,t)
null!=(n=this.rageclicks)&&n.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._capture(p({},r,{type:"rageclick"})),this._capture(r)}}_onMouseMove(e){!Nt(e.target)&&qi(e)&&(clearTimeout(this._mouseMoveTimeout),this._mouseMoveTimeout=setTimeout(()=>{this._capture(this._getProperties(e,"mousemove"))},500))}_capture(e){if(v){var t=v.location.href
this._buffer=this._buffer||{},this._buffer[t]||(this._buffer[t]=[]),this._buffer[t].push(e)}}_flush(){this._buffer&&!H(this._buffer)&&this.instance.capture("$$heatmap",{$heatmap_data:this.getAndClearBuffer()})}}class Ui{constructor(e){this._instance=e}doPageView(e,t){var n,r=this._previousPageViewProperties(e,t)
return this._currentPageview={pathname:null!==(n=null==v?void 0:v.location.pathname)&&void 0!==n?n:"",pageViewId:t,timestamp:e},this._instance.scrollManager.resetContext(),r}doPageLeave(e){var t
return this._previousPageViewProperties(e,null==(t=this._currentPageview)?void 0:t.pageViewId)}doEvent(){var e
return{$pageview_id:null==(e=this._currentPageview)?void 0:e.pageViewId}}_previousPageViewProperties(e,t){var n=this._currentPageview
if(!n)return{$pageview_id:t}
var r={$pageview_id:t,$prev_pageview_id:n.pageViewId},i=this._instance.scrollManager.getContext()
if(i&&!this._instance.config.disable_scroll_properties){var{maxScrollHeight:s,lastScrollY:o,maxScrollY:a,maxContentHeight:l,lastContentY:c,maxContentY:u}=i
if(!(U(s)||U(o)||U(a)||U(l)||U(c)||U(u))){s=Math.ceil(s),o=Math.ceil(o),a=Math.ceil(a),l=Math.ceil(l),c=Math.ceil(c),u=Math.ceil(u)
var d=s<=1?1:re(o/s,0,1,Ae),f=s<=1?1:re(a/s,0,1,Ae),h=l<=1?1:re(c/l,0,1,Ae),p=l<=1?1:re(u/l,0,1,Ae)
r=Be(r,{$prev_pageview_last_scroll:o,$prev_pageview_last_scroll_percentage:d,$prev_pageview_max_scroll:a,$prev_pageview_max_scroll_percentage:f,$prev_pageview_last_content:c,$prev_pageview_last_content_percentage:h,$prev_pageview_max_content:u,$prev_pageview_max_content_percentage:p})}}return n.pathname&&(r.$prev_pageview_pathname=n.pathname),n.timestamp&&(r.$prev_pageview_duration=(e.getTime()-n.timestamp.getTime())/1e3),r}}var Gi=!!E||!!x,Wi="text/plain",zi=(e,t)=>{var[n,r]=e.split("?"),i=p({},t)
null==r||r.split("&").forEach(e=>{var[t]=e.split("=")
delete i[t]})
var s=function(e,t){var n,r
void 0===t&&(t="&")
var i=[]
return De(e,function(e,t){U(e)||U(t)||"undefined"===t||(n=encodeURIComponent((e=>e instanceof File)(e)?e.name:e.toString()),r=encodeURIComponent(t),i[i.length]=r+"="+n)}),i.join(t)}(i)
return n+"?"+(s?(r?r+"&":"")+s:r)},Vi=(e,t)=>JSON.stringify(e,(e,t)=>"bigint"==typeof t?t.toString():t,t),Qi=e=>{var{data:t,compression:n}=e
if(t){if(n===mn.GZipJS){var r=Kr(Yr(Vi(t)),{mtime:0}),i=new Blob([r],{type:Wi})
return{contentType:Wi,body:i,estimatedSize:i.size}}if(n===mn.Base64){var s=function(e){var t,n,r,i,s,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a=0,l=0,c="",u=[]
if(!e)return e
e=function(e){var t,n,r,i,s=""
for(t=n=0,r=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,i=0;i<r;i++){var o=e.charCodeAt(i),a=null
o<128?n++:a=o>127&&o<2048?String.fromCharCode(o>>6|192,63&o|128):String.fromCharCode(o>>12|224,o>>6&63|128,63&o|128),z(a)||(n>t&&(s+=e.substring(t,n)),s+=a,t=n=i+1)}return n>t&&(s+=e.substring(t,e.length)),s}(e)
do{t=(s=e.charCodeAt(a++)<<16|e.charCodeAt(a++)<<8|e.charCodeAt(a++))>>18&63,n=s>>12&63,r=s>>6&63,i=63&s,u[l++]=o.charAt(t)+o.charAt(n)+o.charAt(r)+o.charAt(i)}while(a<e.length)
switch(c=u.join(""),e.length%3){case 1:c=c.slice(0,-2)+"=="
break
case 2:c=c.slice(0,-1)+"="}return c}(Vi(t)),o=(e=>"data="+encodeURIComponent("string"==typeof e?e:Vi(e)))(s)
return{contentType:"application/x-www-form-urlencoded",body:o,estimatedSize:new Blob([o]).size}}var a=Vi(t)
return{contentType:"application/json",body:a,estimatedSize:new Blob([a]).size}}},Ji=[]
x&&Ji.push({transport:"fetch",method:e=>{var t,n,{contentType:r,body:i,estimatedSize:s}=null!==(t=Qi(e))&&void 0!==t?t:{},o=new Headers
De(e.headers,function(e,t){o.append(t,e)}),r&&o.append("Content-Type",r)
var a=e.url,l=null
if(C){var c=new C
l={signal:c.signal,timeout:setTimeout(()=>c.abort(),e.timeout)}}x(a,p({method:(null==e?void 0:e.method)||"GET",headers:o,keepalive:"POST"===e.method&&(s||0)<52428.8,body:i,signal:null==(n=l)?void 0:n.signal},e.fetchOptions)).then(t=>t.text().then(n=>{var r={statusCode:t.status,text:n}
if(200===t.status)try{r.json=JSON.parse(n)}catch(e){Ae.error(e)}null==e.callback||e.callback(r)})).catch(t=>{Ae.error(t),null==e.callback||e.callback({statusCode:0,text:t})}).finally(()=>l?clearTimeout(l.timeout):null)}}),E&&Ji.push({transport:"XHR",method:e=>{var t,n=new E
n.open(e.method||"GET",e.url,!0)
var{contentType:r,body:i}=null!==(t=Qi(e))&&void 0!==t?t:{}
De(e.headers,function(e,t){n.setRequestHeader(t,e)}),r&&n.setRequestHeader("Content-Type",r),e.timeout&&(n.timeout=e.timeout),e.disableXHRCredentials||(n.withCredentials=!0),n.onreadystatechange=()=>{if(4===n.readyState){var t={statusCode:n.status,text:n.responseText}
if(200===n.status)try{t.json=JSON.parse(n.responseText)}catch(e){}null==e.callback||e.callback(t)}},n.send(i)}}),null!=w&&w.sendBeacon&&Ji.push({transport:"sendBeacon",method:e=>{var t=zi(e.url,{beacon:"1"})
try{var n,{contentType:r,body:i}=null!==(n=Qi(e))&&void 0!==n?n:{},s="string"==typeof i?new Blob([i],{type:r}):i
w.sendBeacon(t,s)}catch(e){}}})
var Ki=function(e,t){if(!function(e){try{new RegExp(e)}catch(e){return!1}return!0}(t))return!1
try{return new RegExp(t).test(e)}catch(e){return!1}}
function Yi(e,t,n){return Vi({distinct_id:e,userPropertiesToSet:t,userPropertiesToSetOnce:n})}var Xi={exact:(e,t)=>t.some(t=>e.some(e=>t===e)),is_not:(e,t)=>t.every(t=>e.every(e=>t!==e)),regex:(e,t)=>t.some(t=>e.some(e=>Ki(t,e))),not_regex:(e,t)=>t.every(t=>e.every(e=>!Ki(t,e))),icontains:(e,t)=>t.map(Zi).some(t=>e.map(Zi).some(e=>t.includes(e))),not_icontains:(e,t)=>t.map(Zi).every(t=>e.map(Zi).every(e=>!t.includes(e)))},Zi=e=>e.toLowerCase(),es=Fe("[Error tracking]")
class ts{constructor(e){var t,n
this._suppressionRules=[],this._errorPropertiesBuilder=new ke([new Se,new Oe,new Ee,new xe,new Ie,new $e,new Te,new Re],[ve,ye]),this._instance=e,this._suppressionRules=null!==(t=null==(n=this._instance.persistence)?void 0:n.get_property(nt))&&void 0!==t?t:[]}onRemoteConfig(e){var t,n,r,i=null!==(t=null==(n=e.errorTracking)?void 0:n.suppressionRules)&&void 0!==t?t:[],s=null==(r=e.errorTracking)?void 0:r.captureExtensionExceptions
this._suppressionRules=i,this._instance.persistence&&this._instance.persistence.register({[nt]:this._suppressionRules,[rt]:s})}get _captureExtensionExceptions(){var e,t=!!this._instance.get_property(rt),n=this._instance.config.error_tracking.captureExtensionExceptions
return null!==(e=null!=n?n:t)&&void 0!==e&&e}buildProperties(e,t){return this._errorPropertiesBuilder.buildFromUnknown(e,{syntheticException:null==t?void 0:t.syntheticException,mechanism:{handled:null==t?void 0:t.handled}})}sendExceptionEvent(e){if(this._matchesSuppressionRule(e))es.info("Skipping exception capture because a suppression rule matched")
else{if(this._captureExtensionExceptions||!this._isExtensionException(e))return this._instance.capture("$exception",e,{_noTruncate:!0,_batchKey:"exceptionEvent"})
es.info("Skipping exception capture because it was thrown by an extension")}}_matchesSuppressionRule(e){var t=e.$exception_list
if(!t||!D(t)||0===t.length)return!1
var n=t.reduce((e,t)=>{var{type:n,value:r}=t
return G(n)&&n.length>0&&e.$exception_types.push(n),G(r)&&r.length>0&&e.$exception_values.push(r),e},{$exception_types:[],$exception_values:[]})
return this._suppressionRules.some(e=>{var t=e.values.map(e=>{var t,r=Xi[e.operator],i=D(e.value)?e.value:[e.value],s=null!==(t=n[e.key])&&void 0!==t?t:[]
return i.length>0&&r(i,s)})
return"OR"===e.type?t.some(Boolean):t.every(Boolean)})}_isExtensionException(e){var t=e.$exception_list
return!(!t||!D(t))&&t.flatMap(e=>{var t,n
return null!==(t=null==(n=e.stacktrace)?void 0:n.frames)&&void 0!==t?t:[]}).some(e=>e.filename&&e.filename.startsWith("chrome-extension://"))}}var ns="Mobile",rs="iOS",is="Android",ss="Tablet",os=is+" "+ss,as="iPad",ls="Apple",cs=ls+" Watch",us="Safari",ds="BlackBerry",fs="Samsung",hs=fs+"Browser",ps=fs+" Internet",gs="Chrome",vs=gs+" OS",_s=gs+" "+rs,ms="Internet Explorer",ys=ms+" "+ns,bs="Opera",ws=bs+" Mini",ks="Edge",Ss="Microsoft "+ks,xs="Firefox",Es=xs+" "+rs,Cs="Nintendo",Ts="PlayStation",Ps="Xbox",Ls=is+" "+ns,$s=ns+" "+us,Is="Windows",Rs=Is+" Phone",Os="Nokia",Ms="Ouya",As="Generic",Fs=As+" "+ns.toLowerCase(),js=As+" "+ss.toLowerCase(),Ns="Konqueror",Ds="(\\d+(\\.\\d+)?)",Bs=new RegExp("Version/"+Ds),qs=new RegExp(Ps,"i"),Hs=new RegExp(Ts+" \\w+","i"),Us=new RegExp(Cs+" \\w+","i"),Gs=new RegExp(ds+"|PlayBook|BB10","i"),Ws={"NT3.51":"NT 3.11","NT4.0":"NT 4.0","5.0":"2000",5.1:"XP",5.2:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1",6.4:"10","10.0":"10"},zs=function(e,t){return t=t||"",R(e," OPR/")&&R(e,"Mini")?ws:R(e," OPR/")?bs:Gs.test(e)?ds:R(e,"IE"+ns)||R(e,"WPDesktop")?ys:R(e,hs)?ps:R(e,ks)||R(e,"Edg/")?Ss:R(e,"FBIOS")?"Facebook "+ns:R(e,"UCWEB")||R(e,"UCBrowser")?"UC Browser":R(e,"CriOS")?_s:R(e,"CrMo")||R(e,gs)?gs:R(e,is)&&R(e,us)?Ls:R(e,"FxiOS")?Es:R(e.toLowerCase(),Ns.toLowerCase())?Ns:((e,t)=>t&&R(t,ls)||function(e){return R(e,us)&&!R(e,gs)&&!R(e,is)}(e))(e,t)?R(e,ns)?$s:us:R(e,xs)?xs:R(e,"MSIE")||R(e,"Trident/")?ms:R(e,"Gecko")?xs:""},Vs={[ys]:[new RegExp("rv:"+Ds)],[Ss]:[new RegExp(ks+"?\\/"+Ds)],[gs]:[new RegExp("("+gs+"|CrMo)\\/"+Ds)],[_s]:[new RegExp("CriOS\\/"+Ds)],"UC Browser":[new RegExp("(UCBrowser|UCWEB)\\/"+Ds)],[us]:[Bs],[$s]:[Bs],[bs]:[new RegExp("(Opera|OPR)\\/"+Ds)],[xs]:[new RegExp(xs+"\\/"+Ds)],[Es]:[new RegExp("FxiOS\\/"+Ds)],[Ns]:[new RegExp("Konqueror[:/]?"+Ds,"i")],[ds]:[new RegExp(ds+" "+Ds),Bs],[Ls]:[new RegExp("android\\s"+Ds,"i")],[ps]:[new RegExp(hs+"\\/"+Ds)],[ms]:[new RegExp("(rv:|MSIE )"+Ds)],Mozilla:[new RegExp("rv:"+Ds)]},Qs=function(e,t){var n=zs(e,t),r=Vs[n]
if(U(r))return null
for(var i=0;i<r.length;i++){var s=r[i],o=e.match(s)
if(o)return parseFloat(o[o.length-2])}return null},Js=[[new RegExp(Ps+"; "+Ps+" (.*?)[);]","i"),e=>[Ps,e&&e[1]||""]],[new RegExp(Cs,"i"),[Cs,""]],[new RegExp(Ts,"i"),[Ts,""]],[Gs,[ds,""]],[new RegExp(Is,"i"),(e,t)=>{if(/Phone/.test(t)||/WPDesktop/.test(t))return[Rs,""]
if(new RegExp(ns).test(t)&&!/IEMobile\b/.test(t))return[Is+" "+ns,""]
var n=/Windows NT ([0-9.]+)/i.exec(t)
if(n&&n[1]){var r=n[1],i=Ws[r]||""
return/arm/i.test(t)&&(i="RT"),[Is,i]}return[Is,""]}],[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,e=>{if(e&&e[3]){var t=[e[3],e[4],e[5]||"0"]
return[rs,t.join(".")]}return[rs,""]}],[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,e=>{var t=""
return e&&e.length>=3&&(t=U(e[2])?e[3]:e[2]),["watchOS",t]}],[new RegExp("("+is+" (\\d+)\\.(\\d+)\\.?(\\d+)?|"+is+")","i"),e=>{if(e&&e[2]){var t=[e[2],e[3],e[4]||"0"]
return[is,t.join(".")]}return[is,""]}],[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,e=>{var t=["Mac OS X",""]
if(e&&e[1]){var n=[e[1],e[2],e[3]||"0"]
t[1]=n.join(".")}return t}],[/Mac/i,["Mac OS X",""]],[/CrOS/,[vs,""]],[/Linux|debian/i,["Linux",""]]],Ks=function(e){return Us.test(e)?Cs:Hs.test(e)?Ts:qs.test(e)?Ps:new RegExp(Ms,"i").test(e)?Ms:new RegExp("("+Rs+"|WPDesktop)","i").test(e)?Rs:/iPad/.test(e)?as:/iPod/.test(e)?"iPod Touch":/iPhone/.test(e)?"iPhone":/(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)?cs:Gs.test(e)?ds:/(kobo)\s(ereader|touch)/i.test(e)?"Kobo":new RegExp(Os,"i").test(e)?Os:/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e)||/(kf[a-z]+)( bui|\)).+silk\//i.test(e)?"Kindle Fire":/(Android|ZTE)/i.test(e)?!new RegExp(ns).test(e)||/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e)?/pixel[\daxl ]{1,6}/i.test(e)&&!/pixel c/i.test(e)||/(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e)||/lmy47v/i.test(e)&&!/QTAQZ3/i.test(e)?is:os:is:new RegExp("(pda|"+ns+")","i").test(e)?Fs:new RegExp(ss,"i").test(e)&&!new RegExp(ss+" pc","i").test(e)?js:""},Ys="https?://(.*)",Xs=["gclid","gclsrc","dclid","gbraid","wbraid","fbclid","msclkid","twclid","li_fat_id","igshid","ttclid","rdt_cid","epik","qclid","sccid","irclid","_kx"],Zs=qe(["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gad_source","mc_cid"],Xs),eo="<masked>",to=["li_fat_id"]
function no(e,t,n){if(!k)return{}
var r,i=t?qe([],Xs,n||[]):[],s=ro(kn(k.URL,i,eo),e),o=(r={},De(to,function(e){var t=Dn._get(e)
r[e]=t||null}),r)
return Be(o,s)}function ro(e,t){var n=Zs.concat(t||[]),r={}
return De(n,function(t){var n=wn(e,t)
r[t]=n||null}),r}function io(e){var t=function(e){return e?0===e.search(Ys+"google.([^/?]*)")?"google":0===e.search(Ys+"bing.com")?"bing":0===e.search(Ys+"yahoo.com")?"yahoo":0===e.search(Ys+"duckduckgo.com")?"duckduckgo":null:null}(e),n="yahoo"!=t?"q":"p",r={}
if(!z(t)){r.$search_engine=t
var i=k?wn(k.referrer,n):""
i.length&&(r.ph_keyword=i)}return r}function so(){return navigator.language||navigator.userLanguage}function oo(){return(null==k?void 0:k.referrer)||"$direct"}function ao(e,t){var n=e?qe([],Xs,t||[]):[],r=null==S?void 0:S.href.substring(0,1e3)
return{r:oo().substring(0,1e3),u:r?kn(r,n,eo):void 0}}function lo(e){var t,{r:n,u:r}=e,i={$referrer:n,$referring_domain:null==n?void 0:"$direct"==n?"$direct":null==(t=bn(n))?void 0:t.host}
if(r){i.$current_url=r
var s=bn(r)
i.$host=null==s?void 0:s.host,i.$pathname=null==s?void 0:s.pathname
var o=ro(r)
Be(i,o)}if(n){var a=io(n)
Be(i,a)}return i}function co(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){return}}function uo(){try{return(new Date).getTimezoneOffset()}catch(e){return}}function fo(e,t){if(!T)return{}
var n,r,i,s=e?qe([],Xs,t||[]):[],[o,a]=function(e){for(var t=0;t<Js.length;t++){var[n,r]=Js[t],i=n.exec(e),s=i&&(B(r)?r(i,e):r)
if(s)return s}return["",""]}(T)
return Be(We({$os:o,$os_version:a,$browser:zs(T,navigator.vendor),$device:Ks(T),$device_type:(r=T,i=Ks(r),i===as||i===os||"Kobo"===i||"Kindle Fire"===i||i===js?ss:i===Cs||i===Ps||i===Ts||i===Ms?"Console":i===cs?"Wearable":i?ns:"Desktop"),$timezone:co(),$timezone_offset:uo()}),{$current_url:kn(null==S?void 0:S.href,s,eo),$host:null==S?void 0:S.host,$pathname:null==S?void 0:S.pathname,$raw_user_agent:T.length>1e3?T.substring(0,997)+"...":T,$browser_version:Qs(T,navigator.vendor),$browser_language:so(),$browser_language_prefix:(n=so(),"string"==typeof n?n.split("-")[0]:void 0),$screen_height:null==v?void 0:v.screen.height,$screen_width:null==v?void 0:v.screen.width,$viewport_height:null==v?void 0:v.innerHeight,$viewport_width:null==v?void 0:v.innerWidth,$lib:"web",$lib_version:L.LIB_VERSION,$insert_id:Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10),$time:Date.now()/1e3})}var ho=Fe("[FeatureFlags]"),po="$active_feature_flags",go="$override_feature_flags",vo="$feature_flag_payloads",_o="$override_feature_flag_payloads",mo="$feature_flag_request_id",yo=e=>{var t={}
for(var[n,r]of He(e||{}))r&&(t[n]=r)
return t},bo=function(e){return e.FeatureFlags="feature_flags",e.Recordings="recordings",e}({})
class wo{constructor(e){this._override_warning=!1,this._hasLoadedFlags=!1,this._requestInFlight=!1,this._reloadingDisabled=!1,this._additionalReloadRequested=!1,this._flagsCalled=!1,this._flagsLoadedFromRemote=!1,this._instance=e,this.featureFlagEventHandlers=[]}flags(){if(this._instance.config.__preview_remote_config)this._flagsCalled=!0
else{var e=!this._reloadDebouncer&&(this._instance.config.advanced_disable_feature_flags||this._instance.config.advanced_disable_feature_flags_on_first_load)
this._callFlagsEndpoint({disableFlags:e})}}get hasLoadedFlags(){return this._hasLoadedFlags}getFlags(){return Object.keys(this.getFlagVariants())}getFlagsWithDetails(){var e=this._instance.get_property(kt),t=this._instance.get_property(go),n=this._instance.get_property(_o)
if(!n&&!t)return e||{}
var r=Be({},e||{}),i=[...new Set([...Object.keys(n||{}),...Object.keys(t||{})])]
for(var s of i){var o,a,l=r[s],c=null==t?void 0:t[s],u=U(c)?null!==(o=null==l?void 0:l.enabled)&&void 0!==o&&o:!!c,d=U(c)?l.variant:"string"==typeof c?c:void 0,f=null==n?void 0:n[s],h=p({},l,{enabled:u,variant:u?null!=d?d:null==l?void 0:l.variant:void 0})
u!==(null==l?void 0:l.enabled)&&(h.original_enabled=null==l?void 0:l.enabled),d!==(null==l?void 0:l.variant)&&(h.original_variant=null==l?void 0:l.variant),f&&(h.metadata=p({},null==l?void 0:l.metadata,{payload:f,original_payload:null==l||null==(a=l.metadata)?void 0:a.payload})),r[s]=h}return this._override_warning||(ho.warn(" Overriding feature flag details!",{flagDetails:e,overriddenPayloads:n,finalDetails:r}),this._override_warning=!0),r}getFlagVariants(){var e=this._instance.get_property(bt),t=this._instance.get_property(go)
if(!t)return e||{}
for(var n=Be({},e),r=Object.keys(t),i=0;i<r.length;i++)n[r[i]]=t[r[i]]
return this._override_warning||(ho.warn(" Overriding feature flags!",{enabledFlags:e,overriddenFlags:t,finalFlags:n}),this._override_warning=!0),n}getFlagPayloads(){var e=this._instance.get_property(vo),t=this._instance.get_property(_o)
if(!t)return e||{}
for(var n=Be({},e||{}),r=Object.keys(t),i=0;i<r.length;i++)n[r[i]]=t[r[i]]
return this._override_warning||(ho.warn(" Overriding feature flag payloads!",{flagPayloads:e,overriddenPayloads:t,finalPayloads:n}),this._override_warning=!0),n}reloadFeatureFlags(){this._reloadingDisabled||this._instance.config.advanced_disable_feature_flags||this._reloadDebouncer||(this._reloadDebouncer=setTimeout(()=>{this._callFlagsEndpoint()},5))}_clearDebouncer(){clearTimeout(this._reloadDebouncer),this._reloadDebouncer=void 0}ensureFlagsLoaded(){this._hasLoadedFlags||this._requestInFlight||this._reloadDebouncer||this.reloadFeatureFlags()}setAnonymousDistinctId(e){this.$anon_distinct_id=e}setReloadingPaused(e){this._reloadingDisabled=e}_callFlagsEndpoint(e){var t
if(this._clearDebouncer(),!this._instance._shouldDisableFlags())if(this._requestInFlight)this._additionalReloadRequested=!0
else{var n={token:this._instance.config.token,distinct_id:this._instance.get_distinct_id(),groups:this._instance.getGroups(),$anon_distinct_id:this.$anon_distinct_id,person_properties:p({},(null==(t=this._instance.persistence)?void 0:t.get_initial_props())||{},this._instance.get_property(St)||{}),group_properties:this._instance.get_property(xt)};(null!=e&&e.disableFlags||this._instance.config.advanced_disable_feature_flags)&&(n.disable_flags=!0)
var r=this._instance.config.__preview_remote_config,i=r?"/flags/?v=2":"/flags/?v=2&config=true",s=this._instance.config.advanced_only_evaluate_survey_feature_flags?"&only_evaluate_survey_feature_flags=true":"",o=this._instance.requestRouter.endpointFor("api",i+s)
r&&(n.timezone=co()),this._requestInFlight=!0,this._instance._send_request({method:"POST",url:o,data:n,compression:this._instance.config.disable_compression?void 0:mn.Base64,timeout:this._instance.config.feature_flag_request_timeout_ms,callback:e=>{var t,r,i=!0
if(200===e.statusCode&&(this._additionalReloadRequested||(this.$anon_distinct_id=void 0),i=!1),this._requestInFlight=!1,this._flagsCalled||(this._flagsCalled=!0,this._instance._onRemoteConfig(null!==(r=e.json)&&void 0!==r?r:{})),!n.disable_flags||this._additionalReloadRequested)if(this._flagsLoadedFromRemote=!i,e.json&&null!=(t=e.json.quotaLimited)&&t.includes(bo.FeatureFlags))ho.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.")
else{var s
n.disable_flags||this.receivedFeatureFlags(null!==(s=e.json)&&void 0!==s?s:{},i),this._additionalReloadRequested&&(this._additionalReloadRequested=!1,this._callFlagsEndpoint())}}})}}getFeatureFlag(e,t){if(void 0===t&&(t={}),this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0){var n=this.getFlagVariants()[e],r=""+n,i=this._instance.get_property(mo)||void 0,s=this._instance.get_property(Tt)||{}
if((t.send_event||!("send_event"in t))&&(!(e in s)||!s[e].includes(r))){var o,a,l,c,u,d,f,h,p
D(s[e])?s[e].push(r):s[e]=[r],null==(o=this._instance.persistence)||o.register({[Tt]:s})
var g=this.getFeatureFlagDetails(e),v={$feature_flag:e,$feature_flag_response:n,$feature_flag_payload:this.getFeatureFlagPayload(e)||null,$feature_flag_request_id:i,$feature_flag_bootstrapped_response:(null==(a=this._instance.config.bootstrap)||null==(a=a.featureFlags)?void 0:a[e])||null,$feature_flag_bootstrapped_payload:(null==(l=this._instance.config.bootstrap)||null==(l=l.featureFlagPayloads)?void 0:l[e])||null,$used_bootstrap_value:!this._flagsLoadedFromRemote}
U(null==g||null==(c=g.metadata)?void 0:c.version)||(v.$feature_flag_version=g.metadata.version)
var _,m=null!==(u=null==g||null==(d=g.reason)?void 0:d.description)&&void 0!==u?u:null==g||null==(f=g.reason)?void 0:f.code
m&&(v.$feature_flag_reason=m),null!=g&&null!=(h=g.metadata)&&h.id&&(v.$feature_flag_id=g.metadata.id),U(null==g?void 0:g.original_variant)&&U(null==g?void 0:g.original_enabled)||(v.$feature_flag_original_response=U(g.original_variant)?g.original_enabled:g.original_variant),null!=g&&null!=(p=g.metadata)&&p.original_payload&&(v.$feature_flag_original_payload=null==g||null==(_=g.metadata)?void 0:_.original_payload),this._instance.capture("$feature_flag_called",v)}return n}ho.warn('getFeatureFlag for key "'+e+"\" failed. Feature flags didn't load in time.")}getFeatureFlagDetails(e){return this.getFlagsWithDetails()[e]}getFeatureFlagPayload(e){return this.getFlagPayloads()[e]}getRemoteConfigPayload(e,t){var n=this._instance.config.token
this._instance._send_request({method:"POST",url:this._instance.requestRouter.endpointFor("api","/flags/?v=2&config=true"),data:{distinct_id:this._instance.get_distinct_id(),token:n},compression:this._instance.config.disable_compression?void 0:mn.Base64,timeout:this._instance.config.feature_flag_request_timeout_ms,callback:n=>{var r,i=null==(r=n.json)?void 0:r.featureFlagPayloads
t((null==i?void 0:i[e])||void 0)}})}isFeatureEnabled(e,t){if(void 0===t&&(t={}),this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0){var n=this.getFeatureFlag(e,t)
return U(n)?void 0:!!n}ho.warn('isFeatureEnabled for key "'+e+"\" failed. Feature flags didn't load in time.")}addFeatureFlagsHandler(e){this.featureFlagEventHandlers.push(e)}removeFeatureFlagsHandler(e){this.featureFlagEventHandlers=this.featureFlagEventHandlers.filter(t=>t!==e)}receivedFeatureFlags(e,t){if(this._instance.persistence){this._hasLoadedFlags=!0
var n=this.getFlagVariants(),r=this.getFlagPayloads(),i=this.getFlagsWithDetails()
!function(e,t,n,r,i){void 0===n&&(n={}),void 0===r&&(r={}),void 0===i&&(i={})
var s=(e=>{var t=e.flags
return t?(e.featureFlags=Object.fromEntries(Object.keys(t).map(e=>{var n
return[e,null!==(n=t[e].variant)&&void 0!==n?n:t[e].enabled]})),e.featureFlagPayloads=Object.fromEntries(Object.keys(t).filter(e=>t[e].enabled).filter(e=>{var n
return null==(n=t[e].metadata)?void 0:n.payload}).map(e=>{var n
return[e,null==(n=t[e].metadata)?void 0:n.payload]}))):ho.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"),e})(e),o=s.flags,a=s.featureFlags,l=s.featureFlagPayloads
if(a){var c=e.requestId
if(D(a)){ho.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.")
var u={}
if(a)for(var d=0;d<a.length;d++)u[a[d]]=!0
t&&t.register({[po]:a,[bt]:u})}else{var f=a,h=l,g=o
e.errorsWhileComputingFlags&&(f=p({},n,f),h=p({},r,h),g=p({},i,g)),t&&t.register(p({[po]:Object.keys(yo(f)),[bt]:f||{},[vo]:h||{},[kt]:g||{}},c?{[mo]:c}:{}))}}}(e,this._instance.persistence,n,r,i),this._fireFeatureFlagsCallbacks(t)}}override(e,t){void 0===t&&(t=!1),ho.warn("override is deprecated. Please use overrideFeatureFlags instead."),this.overrideFeatureFlags({flags:e,suppressWarning:t})}overrideFeatureFlags(e){if(!this._instance.__loaded||!this._instance.persistence)return ho.uninitializedWarning("posthog.featureFlags.overrideFeatureFlags")
if(!1===e)return this._instance.persistence.unregister(go),this._instance.persistence.unregister(_o),void this._fireFeatureFlagsCallbacks()
if(e&&"object"==typeof e&&("flags"in e||"payloads"in e)){var t,n=e
if(this._override_warning=Boolean(null!==(t=n.suppressWarning)&&void 0!==t&&t),"flags"in n)if(!1===n.flags)this._instance.persistence.unregister(go)
else if(n.flags)if(D(n.flags)){for(var r={},i=0;i<n.flags.length;i++)r[n.flags[i]]=!0
this._instance.persistence.register({[go]:r})}else this._instance.persistence.register({[go]:n.flags})
return"payloads"in n&&(!1===n.payloads?this._instance.persistence.unregister(_o):n.payloads&&this._instance.persistence.register({[_o]:n.payloads})),void this._fireFeatureFlagsCallbacks()}this._fireFeatureFlagsCallbacks()}onFeatureFlags(e){if(this.addFeatureFlagsHandler(e),this._hasLoadedFlags){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
e(t,n)}return()=>this.removeFeatureFlagsHandler(e)}updateEarlyAccessFeatureEnrollment(e,t,n){var r,i=(this._instance.get_property(wt)||[]).find(t=>t.flagKey===e),s={["$feature_enrollment/"+e]:t},o={$feature_flag:e,$feature_enrollment:t,$set:s}
i&&(o.$early_access_feature_name=i.name),n&&(o.$feature_enrollment_stage=n),this._instance.capture("$feature_enrollment_update",o),this.setPersonPropertiesForFlags(s,!1)
var a=p({},this.getFlagVariants(),{[e]:t})
null==(r=this._instance.persistence)||r.register({[po]:Object.keys(yo(a)),[bt]:a}),this._fireFeatureFlagsCallbacks()}getEarlyAccessFeatures(e,t,n){void 0===t&&(t=!1)
var r=this._instance.get_property(wt),i=n?"&"+n.map(e=>"stage="+e).join("&"):""
if(r&&!t)return e(r)
this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/early_access_features/?token="+this._instance.config.token+i),method:"GET",callback:t=>{var n,r
if(t.json){var i=t.json.earlyAccessFeatures
return null==(n=this._instance.persistence)||n.unregister(wt),null==(r=this._instance.persistence)||r.register({[wt]:i}),e(i)}}})}_prepareFeatureFlagsForCallbacks(){var e=this.getFlags(),t=this.getFlagVariants()
return{flags:e.filter(e=>t[e]),flagVariants:Object.keys(t).filter(e=>t[e]).reduce((e,n)=>(e[n]=t[n],e),{})}}_fireFeatureFlagsCallbacks(e){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
this.featureFlagEventHandlers.forEach(r=>r(t,n,{errorsLoading:e}))}setPersonPropertiesForFlags(e,t){void 0===t&&(t=!0)
var n=this._instance.get_property(St)||{}
this._instance.register({[St]:p({},n,e)}),t&&this._instance.reloadFeatureFlags()}resetPersonPropertiesForFlags(){this._instance.unregister(St)}setGroupPropertiesForFlags(e,t){void 0===t&&(t=!0)
var n=this._instance.get_property(xt)||{}
0!==Object.keys(n).length&&Object.keys(n).forEach(t=>{n[t]=p({},n[t],e[t]),delete e[t]}),this._instance.register({[xt]:p({},n,e)}),t&&this._instance.reloadFeatureFlags()}resetGroupPropertiesForFlags(e){if(e){var t=this._instance.get_property(xt)||{}
this._instance.register({[xt]:p({},t,{[e]:{}})})}else this._instance.unregister(xt)}reset(){this._hasLoadedFlags=!1,this._requestInFlight=!1,this._reloadingDisabled=!1,this._additionalReloadRequested=!1,this._flagsCalled=!1,this._flagsLoadedFromRemote=!1,this.$anon_distinct_id=void 0,this._clearDebouncer(),this._override_warning=!1}}var ko=["cookie","localstorage","localstorage+cookie","sessionstorage","memory"]
class So{constructor(e,t){this._config=e,this.props={},this._campaign_params_saved=!1,this._name=(e=>{var t=""
return e.token&&(t=e.token.replace(/\+/g,"PL").replace(/\//g,"SL").replace(/=/g,"EQ")),e.persistence_name?"ph_"+e.persistence_name:"ph_"+t+"_posthog"})(e),this._storage=this._buildStorage(e),this.load(),e.debug&&Ae.info("Persistence loaded",e.persistence,p({},this.props)),this.update_config(e,e,t),this.save()}isDisabled(){return!!this._disabled}_buildStorage(e){-1===ko.indexOf(e.persistence.toLowerCase())&&(Ae.critical("Unknown persistence type "+e.persistence+"; falling back to localStorage+cookie"),e.persistence="localStorage+cookie")
var t=e.persistence.toLowerCase()
return"localstorage"===t&&qn._is_supported()?qn:"localstorage+cookie"===t&&Un._is_supported()?Un:"sessionstorage"===t&&Vn._is_supported()?Vn:"memory"===t?Wn:"cookie"===t?Dn:Un._is_supported()?Un:Dn}properties(){var e={}
return De(this.props,function(t,n){if(n===bt&&q(t))for(var r=Object.keys(t),i=0;i<r.length;i++)e["$feature/"+r[i]]=t[r[i]]
else o=n,a=!1,(z(s=jt)?a:b&&s.indexOf===b?-1!=s.indexOf(o):(De(s,function(e){if(a||(a=e===o))return je}),a))||(e[n]=t)
var s,o,a}),e}load(){if(!this._disabled){var e=this._storage._parse(this._name)
e&&(this.props=Be({},e))}}save(){this._disabled||this._storage._set(this._name,this.props,this._expire_days,this._cross_subdomain,this._secure,this._config.debug)}remove(){this._storage._remove(this._name,!1),this._storage._remove(this._name,!0)}clear(){this.remove(),this.props={}}register_once(e,t,n){if(q(e)){U(t)&&(t="None"),this._expire_days=U(n)?this._default_expiry:n
var r=!1
if(De(e,(e,n)=>{this.props.hasOwnProperty(n)&&this.props[n]!==t||(this.props[n]=e,r=!0)}),r)return this.save(),!0}return!1}register(e,t){if(q(e)){this._expire_days=U(t)?this._default_expiry:t
var n=!1
if(De(e,(t,r)=>{e.hasOwnProperty(r)&&this.props[r]!==t&&(this.props[r]=t,n=!0)}),n)return this.save(),!0}return!1}unregister(e){e in this.props&&(delete this.props[e],this.save())}update_campaign_params(){if(!this._campaign_params_saved){var e=no(this._config.custom_campaign_params,this._config.mask_personal_data_properties,this._config.custom_personal_data_properties)
H(We(e))||this.register(e),this._campaign_params_saved=!0}}update_search_keyword(){var e
this.register((e=null==k?void 0:k.referrer)?io(e):{})}update_referrer_info(){var e
this.register_once({$referrer:oo(),$referring_domain:null!=k&&k.referrer&&(null==(e=bn(k.referrer))?void 0:e.host)||"$direct"},void 0)}set_initial_person_info(){this.props[It]||this.props[Rt]||this.register_once({[Ot]:ao(this._config.mask_personal_data_properties,this._config.custom_personal_data_properties)},void 0)}get_initial_props(){var e={}
De([Rt,It],t=>{var n=this.props[t]
n&&De(n,function(t,n){e["$initial_"+M(n)]=t})})
var t,n,r=this.props[Ot]
if(r){var i=(t=lo(r),n={},De(t,function(e,t){n["$initial_"+M(t)]=e}),n)
Be(e,i)}return e}safe_merge(e){return De(this.props,function(t,n){n in e||(e[n]=t)}),e}update_config(e,t,n){if(this._default_expiry=this._expire_days=e.cookie_expiration,this.set_disabled(e.disable_persistence||!!n),this.set_cross_subdomain(e.cross_subdomain_cookie),this.set_secure(e.secure_cookie),e.persistence!==t.persistence){var r=this._buildStorage(e),i=this.props
this.clear(),this._storage=r,this.props=i,this.save()}}set_disabled(e){this._disabled=e,this._disabled?this.remove():this.save()}set_cross_subdomain(e){e!==this._cross_subdomain&&(this._cross_subdomain=e,this.remove(),this.save())}set_secure(e){e!==this._secure&&(this._secure=e,this.remove(),this.save())}set_event_timer(e,t){var n=this.props[Xe]||{}
n[e]=t,this.props[Xe]=n,this.save()}remove_event_timer(e){var t=(this.props[Xe]||{})[e]
return U(t)||(delete this.props[Xe][e],this.save()),t}get_property(e){return this.props[e]}set_property(e,t){this.props[e]=t,this.save()}}!function(e){e.Button="button",e.Tab="tab",e.Selector="selector"}({}),function(e){e.TopLeft="top_left",e.TopRight="top_right",e.TopCenter="top_center",e.MiddleLeft="middle_left",e.MiddleRight="middle_right",e.MiddleCenter="middle_center",e.Left="left",e.Center="center",e.Right="right",e.NextToTrigger="next_to_trigger"}({})
var xo=function(e){return e.Popover="popover",e.API="api",e.Widget="widget",e.ExternalSurvey="external_survey",e}({})
!function(e){e.Open="open",e.MultipleChoice="multiple_choice",e.SingleChoice="single_choice",e.Rating="rating",e.Link="link"}({}),function(e){e.NextQuestion="next_question",e.End="end",e.ResponseBased="response_based",e.SpecificQuestion="specific_question"}({}),function(e){e.Once="once",e.Recurring="recurring",e.Always="always"}({})
var Eo=function(e){return e.SHOWN="survey shown",e.DISMISSED="survey dismissed",e.SENT="survey sent",e}({}),Co=function(e){return e.SURVEY_ID="$survey_id",e.SURVEY_NAME="$survey_name",e.SURVEY_RESPONSE="$survey_response",e.SURVEY_ITERATION="$survey_iteration",e.SURVEY_ITERATION_START_DATE="$survey_iteration_start_date",e.SURVEY_PARTIALLY_COMPLETED="$survey_partially_completed",e.SURVEY_SUBMISSION_ID="$survey_submission_id",e.SURVEY_QUESTIONS="$survey_questions",e.SURVEY_COMPLETED="$survey_completed",e}({}),To=function(e){return e.Popover="popover",e.Inline="inline",e}({})
class Po{constructor(){this._events={},this._events={}}on(e,t){return this._events[e]||(this._events[e]=[]),this._events[e].push(t),()=>{this._events[e]=this._events[e].filter(e=>e!==t)}}emit(e,t){for(var n of this._events[e]||[])n(t)
for(var r of this._events["*"]||[])r(e,t)}}class Lo{constructor(e){this._debugEventEmitter=new Po,this._checkStep=(e,t)=>this._checkStepEvent(e,t)&&this._checkStepUrl(e,t)&&this._checkStepElement(e,t),this._checkStepEvent=(e,t)=>null==t||!t.event||(null==e?void 0:e.event)===(null==t?void 0:t.event),this._instance=e,this._actionEvents=new Set,this._actionRegistry=new Set}init(){var e,t
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
if(!Lo._matchString(r,null==t?void 0:t.url,(null==t?void 0:t.url_matching)||"contains"))return!1}return!0}static _matchString(e,t,n){switch(n){case"regex":return!!v&&Ki(e,t)
case"exact":return t===e
case"contains":var r=Lo._escapeStringRegexp(t).replace(/_/g,".").replace(/%/g,".*")
return Ki(e,r)
default:return!1}}static _escapeStringRegexp(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}_checkStepElement(e,t){if((null!=t&&t.href||null!=t&&t.tag_name||null!=t&&t.text)&&!this._getElementsList(e).some(e=>!(null!=t&&t.href&&!Lo._matchString(e.href||"",null==t?void 0:t.href,(null==t?void 0:t.href_matching)||"exact")||null!=t&&t.tag_name&&e.tag_name!==(null==t?void 0:t.tag_name)||null!=t&&t.text&&!Lo._matchString(e.text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")&&!Lo._matchString(e.$el_text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact"))))return!1
if(null!=t&&t.selector){var n,r=null==e||null==(n=e.properties)?void 0:n.$element_selectors
if(!r)return!1
if(!r.includes(null==t?void 0:t.selector))return!1}return!0}_getElementsList(e){return null==(null==e?void 0:e.properties.$elements)?[]:null==e?void 0:e.properties.$elements}}var $o=Fe("[Surveys]"),Io="seenSurvey_",Ro=(e,t)=>{var n="$survey_"+t+"/"+e.id
return e.current_iteration&&e.current_iteration>0&&(n="$survey_"+t+"/"+e.id+"/"+e.current_iteration),n},Oo=e=>{var t=""+Io+e.id
return e.current_iteration&&e.current_iteration>0&&(t=""+Io+e.id+"_"+e.current_iteration),t},Mo=[xo.Popover,xo.Widget,xo.API],Ao={ignoreConditions:!1,ignoreDelay:!1,displayType:To.Popover}
class Fo{constructor(e){this._instance=e,this._eventToSurveys=new Map,this._actionToSurveys=new Map}register(e){var t
U(null==(t=this._instance)?void 0:t._addCaptureHook)||(this._setupEventBasedSurveys(e),this._setupActionBasedSurveys(e))}_setupActionBasedSurveys(e){var t=e.filter(e=>{var t,n
return(null==(t=e.conditions)?void 0:t.actions)&&(null==(n=e.conditions)||null==(n=n.actions)||null==(n=n.values)?void 0:n.length)>0})
0!==t.length&&(null==this._actionMatcher&&(this._actionMatcher=new Lo(this._instance),this._actionMatcher.init(),this._actionMatcher._addActionHook(e=>{this.onAction(e)})),t.forEach(e=>{var t,n,r,i,s
e.conditions&&null!=(t=e.conditions)&&t.actions&&null!=(n=e.conditions)&&null!=(n=n.actions)&&n.values&&(null==(r=e.conditions)||null==(r=r.actions)||null==(r=r.values)?void 0:r.length)>0&&(null==(i=this._actionMatcher)||i.register(e.conditions.actions.values),null==(s=e.conditions)||null==(s=s.actions)||null==(s=s.values)||s.forEach(t=>{if(t&&t.name){var n=this._actionToSurveys.get(t.name)
n&&n.push(e.id),this._actionToSurveys.set(t.name,n||[e.id])}}))}))}_setupEventBasedSurveys(e){var t
0!==e.filter(e=>{var t,n
return(null==(t=e.conditions)?void 0:t.events)&&(null==(n=e.conditions)||null==(n=n.events)||null==(n=n.values)?void 0:n.length)>0}).length&&(null==(t=this._instance)||t._addCaptureHook((e,t)=>{this.onEvent(e,t)}),e.forEach(e=>{var t
null==(t=e.conditions)||null==(t=t.events)||null==(t=t.values)||t.forEach(t=>{if(t&&t.name){var n=this._eventToSurveys.get(t.name)
n&&n.push(e.id),this._eventToSurveys.set(t.name,n||[e.id])}})}))}onEvent(e,t){var n,r,i=(null==(n=this._instance)||null==(n=n.persistence)?void 0:n.props[Ct])||[]
if(Eo.SHOWN===e&&t&&i.length>0){var s
$o.info("survey event matched, removing survey from activated surveys",{event:e,eventPayload:t,existingActivatedSurveys:i})
var o=null==t||null==(s=t.properties)?void 0:s.$survey_id
if(o){var a=i.indexOf(o)
a>=0&&(i.splice(a,1),this._updateActivatedSurveys(i))}}else if(this._eventToSurveys.has(e)){$o.info("survey event name matched",{event:e,eventPayload:t,surveys:this._eventToSurveys.get(e)})
var l=[]
null==(r=this._instance)||r.getSurveys(t=>{l=t.filter(t=>{var n
return null==(n=this._eventToSurveys.get(e))?void 0:n.includes(t.id)})})
var c=l.filter(n=>{var r,i=null==(r=n.conditions)||null==(r=r.events)||null==(r=r.values)?void 0:r.find(t=>t.name===e)
return!!i&&(!i.propertyFilters||Object.entries(i.propertyFilters).every(e=>{var n,[r,i]=e,s=null==t||null==(n=t.properties)?void 0:n[r]
if(U(s)||z(s))return!1
var o=[String(s)],a=Xi[i.operator]
return a?a(i.values,o):($o.warn("Unknown property comparison operator: "+i.operator),!1)}))})
this._updateActivatedSurveys(i.concat(c.map(e=>e.id)||[]))}}onAction(e){var t,n=(null==(t=this._instance)||null==(t=t.persistence)?void 0:t.props[Ct])||[]
this._actionToSurveys.has(e)&&this._updateActivatedSurveys(n.concat(this._actionToSurveys.get(e)||[]))}_updateActivatedSurveys(e){var t
$o.info("updating activated surveys",{activatedSurveys:e}),null==(t=this._instance)||null==(t=t.persistence)||t.register({[Ct]:[...new Set(e)]})}getSurveys(){var e
return(null==(e=this._instance)||null==(e=e.persistence)?void 0:e.props[Ct])||[]}getEventToSurveys(){return this._eventToSurveys}_getActionMatcher(){return this._actionMatcher}}class jo{constructor(e){this._isSurveysEnabled=void 0,this._surveyManager=null,this._isFetchingSurveys=!1,this._isInitializingSurveys=!1,this._surveyCallbacks=[],this._instance=e,this._surveyEventReceiver=null}onRemoteConfig(e){if(!this._instance.config.disable_surveys){var t=e.surveys
if(V(t))return $o.warn("Flags not loaded yet. Not loading surveys.")
var n=D(t)
this._isSurveysEnabled=n?t.length>0:t,$o.info("flags response received, isSurveysEnabled: "+this._isSurveysEnabled),this.loadIfEnabled()}}reset(){localStorage.removeItem("lastSeenSurveyDate")
for(var e=[],t=0;t<localStorage.length;t++){var n=localStorage.key(t);(null!=n&&n.startsWith(Io)||null!=n&&n.startsWith("inProgressSurvey_"))&&e.push(n)}e.forEach(e=>localStorage.removeItem(e))}loadIfEnabled(){if(!this._surveyManager)if(this._isInitializingSurveys)$o.info("Already initializing surveys, skipping...")
else if(this._instance.config.disable_surveys)$o.info("Disabled. Not loading surveys.")
else if(this._instance.config.cookieless_mode&&this._instance.consent.isOptedOut())$o.info("Not loading surveys in cookieless mode without consent.")
else{var e=null==P?void 0:P.__PosthogExtensions__
if(e){if(!U(this._isSurveysEnabled)||this._instance.config.advanced_enable_surveys){var t=this._isSurveysEnabled||this._instance.config.advanced_enable_surveys
this._isInitializingSurveys=!0
try{var n=e.generateSurveys
if(n)return void this._completeSurveyInitialization(n,t)
var r=e.loadExternalDependency
if(!r)return void this._handleSurveyLoadError("PostHog loadExternalDependency extension not found.")
r(this._instance,"surveys",n=>{n||!e.generateSurveys?this._handleSurveyLoadError("Could not load surveys script",n):this._completeSurveyInitialization(e.generateSurveys,t)})}catch(e){throw this._handleSurveyLoadError("Error initializing surveys",e),e}finally{this._isInitializingSurveys=!1}}}else $o.error("PostHog Extensions not found.")}}_completeSurveyInitialization(e,t){this._surveyManager=e(this._instance,t),this._surveyEventReceiver=new Fo(this._instance),$o.info("Surveys loaded successfully"),this._notifySurveyCallbacks({isLoaded:!0})}_handleSurveyLoadError(e,t){$o.error(e,t),this._notifySurveyCallbacks({isLoaded:!1,error:e})}onSurveysLoaded(e){return this._surveyCallbacks.push(e),this._surveyManager&&this._notifySurveyCallbacks({isLoaded:!0}),()=>{this._surveyCallbacks=this._surveyCallbacks.filter(t=>t!==e)}}getSurveys(e,t){if(void 0===t&&(t=!1),this._instance.config.disable_surveys)return $o.info("Disabled. Not loading surveys."),e([])
var n=this._instance.get_property(Et)
if(n&&!t)return e(n,{isLoaded:!0})
if(this._isFetchingSurveys)return e([],{isLoaded:!1,error:"Surveys are already being loaded"})
try{this._isFetchingSurveys=!0,this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/surveys/?token="+this._instance.config.token),method:"GET",timeout:this._instance.config.surveys_request_timeout_ms,callback:t=>{var n
this._isFetchingSurveys=!1
var r=t.statusCode
if(200!==r||!t.json){var i="Surveys API could not be loaded, status: "+r
return $o.error(i),e([],{isLoaded:!1,error:i})}var s,o=t.json.surveys||[],a=o.filter(e=>function(e){return!(!e.start_date||e.end_date)}(e)&&(function(e){var t
return!(null==(t=e.conditions)||null==(t=t.events)||null==(t=t.values)||!t.length)}(e)||function(e){var t
return!(null==(t=e.conditions)||null==(t=t.actions)||null==(t=t.values)||!t.length)}(e)))
return a.length>0&&(null==(s=this._surveyEventReceiver)||s.register(a)),null==(n=this._instance.persistence)||n.register({[Et]:o}),e(o,{isLoaded:!0})}})}catch(e){throw this._isFetchingSurveys=!1,e}}_notifySurveyCallbacks(e){for(var t of this._surveyCallbacks)try{if(!e.isLoaded)return t([],e)
this.getSurveys(t)}catch(e){$o.error("Error in survey callback",e)}}getActiveMatchingSurveys(e,t){if(void 0===t&&(t=!1),!V(this._surveyManager))return this._surveyManager.getActiveMatchingSurveys(e,t)
$o.warn("init was not called")}_getSurveyById(e){var t=null
return this.getSurveys(n=>{var r
t=null!==(r=n.find(t=>t.id===e))&&void 0!==r?r:null}),t}_checkSurveyEligibility(e){if(V(this._surveyManager))return{eligible:!1,reason:"SDK is not enabled or survey functionality is not yet loaded"}
var t="string"==typeof e?this._getSurveyById(e):e
return t?this._surveyManager.checkSurveyEligibility(t):{eligible:!1,reason:"Survey not found"}}canRenderSurvey(e){if(V(this._surveyManager))return $o.warn("init was not called"),{visible:!1,disabledReason:"SDK is not enabled or survey functionality is not yet loaded"}
var t=this._checkSurveyEligibility(e)
return{visible:t.eligible,disabledReason:t.reason}}canRenderSurveyAsync(e,t){return V(this._surveyManager)?($o.warn("init was not called"),Promise.resolve({visible:!1,disabledReason:"SDK is not enabled or survey functionality is not yet loaded"})):new Promise(n=>{this.getSurveys(t=>{var r,i=null!==(r=t.find(t=>t.id===e))&&void 0!==r?r:null
if(i){var s=this._checkSurveyEligibility(i)
n({visible:s.eligible,disabledReason:s.reason})}else n({visible:!1,disabledReason:"Survey not found"})},t)})}renderSurvey(e,t){var n
if(V(this._surveyManager))$o.warn("init was not called")
else{var r="string"==typeof e?this._getSurveyById(e):e
if(null!=r&&r.id)if(Mo.includes(r.type)){var i=null==k?void 0:k.querySelector(t)
if(i)return null!=(n=r.appearance)&&n.surveyPopupDelaySeconds?($o.info("Rendering survey "+r.id+" with delay of "+r.appearance.surveyPopupDelaySeconds+" seconds"),void setTimeout(()=>{var e,t
$o.info("Rendering survey "+r.id+" with delay of "+(null==(e=r.appearance)?void 0:e.surveyPopupDelaySeconds)+" seconds"),null==(t=this._surveyManager)||t.renderSurvey(r,i),$o.info("Survey "+r.id+" rendered")},1e3*r.appearance.surveyPopupDelaySeconds)):void this._surveyManager.renderSurvey(r,i)
$o.warn("Survey element not found")}else $o.warn("Surveys of type "+r.type+" cannot be rendered in the app")
else $o.warn("Survey not found")}}displaySurvey(e,t){var n
if(V(this._surveyManager))$o.warn("init was not called")
else{var r=this._getSurveyById(e)
if(r){var i=r
if(null!=(n=r.appearance)&&n.surveyPopupDelaySeconds&&t.ignoreDelay&&(i=p({},r,{appearance:p({},r.appearance,{surveyPopupDelaySeconds:0})})),!1===t.ignoreConditions){var s=this.canRenderSurvey(r)
if(!s.visible)return void $o.warn("Survey is not eligible to be displayed: ",s.disabledReason)}t.displayType!==To.Inline?this._surveyManager.handlePopoverSurvey(i):this.renderSurvey(i,t.selector)}else $o.warn("Survey not found")}}}var No=Fe("[RateLimiter]")
class Do{constructor(e){var t,n
this.serverLimits={},this.lastEventRateLimited=!1,this.checkForLimiting=e=>{var t=e.text
if(t&&t.length)try{(JSON.parse(t).quota_limited||[]).forEach(e=>{No.info((e||"events")+" is quota limited."),this.serverLimits[e]=(new Date).getTime()+6e4})}catch(e){return void No.warn('could not rate limit - continuing. Error: "'+(null==e?void 0:e.message)+'"',{text:t})}},this.instance=e,this.captureEventsPerSecond=(null==(t=e.config.rate_limiting)?void 0:t.events_per_second)||10,this.captureEventsBurstLimit=Math.max((null==(n=e.config.rate_limiting)?void 0:n.events_burst_limit)||10*this.captureEventsPerSecond,this.captureEventsPerSecond),this.lastEventRateLimited=this.clientRateLimitContext(!0).isRateLimited}clientRateLimitContext(e){var t,n,r
void 0===e&&(e=!1)
var i=(new Date).getTime(),s=null!==(t=null==(n=this.instance.persistence)?void 0:n.get_property($t))&&void 0!==t?t:{tokens:this.captureEventsBurstLimit,last:i}
s.tokens+=(i-s.last)/1e3*this.captureEventsPerSecond,s.last=i,s.tokens>this.captureEventsBurstLimit&&(s.tokens=this.captureEventsBurstLimit)
var o=s.tokens<1
return o||e||(s.tokens=Math.max(0,s.tokens-1)),!o||this.lastEventRateLimited||e||this.instance.capture("$$client_ingestion_warning",{$$client_ingestion_warning_message:"posthog-js client rate limited. Config is set to "+this.captureEventsPerSecond+" events per second and "+this.captureEventsBurstLimit+" events burst limit."},{skip_client_rate_limiting:!0}),this.lastEventRateLimited=o,null==(r=this.instance.persistence)||r.set_property($t,s),{isRateLimited:o,remainingTokens:s.tokens}}isServerRateLimited(e){var t=this.serverLimits[e||"events"]||!1
return!1!==t&&(new Date).getTime()<t}}var Bo=Fe("[RemoteConfig]")
class qo{constructor(e){this._instance=e}get remoteConfig(){var e
return null==(e=P._POSTHOG_REMOTE_CONFIG)||null==(e=e[this._instance.config.token])?void 0:e.config}_loadRemoteConfigJs(e){var t,n
null!=(t=P.__PosthogExtensions__)&&t.loadExternalDependency?null==(n=P.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,"remote-config",()=>e(this.remoteConfig)):(Bo.error("PostHog Extensions not found. Cannot load remote config."),e())}_loadRemoteConfigJSON(e){this._instance._send_request({method:"GET",url:this._instance.requestRouter.endpointFor("assets","/array/"+this._instance.config.token+"/config"),callback:t=>{e(t.json)}})}load(){try{if(this.remoteConfig)return Bo.info("Using preloaded remote config",this.remoteConfig),void this._onRemoteConfig(this.remoteConfig)
if(this._instance._shouldDisableFlags())return void Bo.warn("Remote config is disabled. Falling back to local config.")
this._loadRemoteConfigJs(e=>{if(!e)return Bo.info("No config found after loading remote JS config. Falling back to JSON."),void this._loadRemoteConfigJSON(e=>{this._onRemoteConfig(e)})
this._onRemoteConfig(e)})}catch(e){Bo.error("Error loading remote config",e)}}_onRemoteConfig(e){e?this._instance.config.__preview_remote_config?(this._instance._onRemoteConfig(e),!1!==e.hasFeatureFlags&&this._instance.featureFlags.ensureFlagsLoaded()):Bo.info("__preview_remote_config is disabled. Logging config instead",e):Bo.error("Failed to fetch remote config from PostHog.")}}var Ho=3e3
class Uo{constructor(e,t){this._isPaused=!0,this._queue=[],this._flushTimeoutMs=re((null==t?void 0:t.flush_interval_ms)||Ho,250,5e3,Ae.createLogger("flush interval"),Ho),this._sendRequest=e}enqueue(e){this._queue.push(e),this._flushTimeout||this._setFlushTimeout()}unload(){this._clearFlushTimeout()
var e=this._queue.length>0?this._formatQueue():{},t=Object.values(e);[...t.filter(e=>0===e.url.indexOf("/e")),...t.filter(e=>0!==e.url.indexOf("/e"))].map(e=>{this._sendRequest(p({},e,{transport:"sendBeacon"}))})}enable(){this._isPaused=!1,this._setFlushTimeout()}_setFlushTimeout(){var e=this
this._isPaused||(this._flushTimeout=setTimeout(()=>{if(this._clearFlushTimeout(),this._queue.length>0){var t=this._formatQueue(),n=function(){var n=t[r],i=(new Date).getTime()
n.data&&D(n.data)&&De(n.data,e=>{e.offset=Math.abs(e.timestamp-i),delete e.timestamp}),e._sendRequest(n)}
for(var r in t)n()}},this._flushTimeoutMs))}_clearFlushTimeout(){clearTimeout(this._flushTimeout),this._flushTimeout=void 0}_formatQueue(){var e={}
return De(this._queue,t=>{var n,r=t,i=(r?r.batchKey:null)||r.url
U(e[i])&&(e[i]=p({},r,{data:[]})),null==(n=e[i].data)||n.push(r.data)}),this._queue=[],e}}var Go=["retriesPerformedSoFar"]
class Wo{constructor(e){this._isPolling=!1,this._pollIntervalMs=3e3,this._queue=[],this._instance=e,this._queue=[],this._areWeOnline=!0,!U(v)&&"onLine"in v.navigator&&(this._areWeOnline=v.navigator.onLine,Je(v,"online",()=>{this._areWeOnline=!0,this._flush()}),Je(v,"offline",()=>{this._areWeOnline=!1}))}get length(){return this._queue.length}retriableRequest(e){var{retriesPerformedSoFar:t}=e,n=g(e,Go)
Q(t)&&t>0&&(n.url=zi(n.url,{retry_count:t})),this._instance._send_request(p({},n,{callback:e=>{200!==e.statusCode&&(e.statusCode<400||e.statusCode>=500)&&(null!=t?t:0)<10?this._enqueue(p({retriesPerformedSoFar:t},n)):null==n.callback||n.callback(e)}}))}_enqueue(e){var t=e.retriesPerformedSoFar||0
e.retriesPerformedSoFar=t+1
var n=function(e){var t=3e3*Math.pow(2,e),n=t/2,r=Math.min(18e5,t),i=(Math.random()-.5)*(r-n)
return Math.ceil(r+i)}(t),r=Date.now()+n
this._queue.push({retryAt:r,requestOptions:e})
var i="Enqueued failed request for retry in "+n
navigator.onLine||(i+=" (Browser is offline)"),Ae.warn(i),this._isPolling||(this._isPolling=!0,this._poll())}_poll(){this._poller&&clearTimeout(this._poller),this._poller=setTimeout(()=>{this._areWeOnline&&this._queue.length>0&&this._flush(),this._poll()},this._pollIntervalMs)}_flush(){var e=Date.now(),t=[],n=this._queue.filter(n=>n.retryAt<e||(t.push(n),!1))
if(this._queue=t,n.length>0)for(var{requestOptions:r}of n)this.retriableRequest(r)}unload(){for(var{requestOptions:e}of(this._poller&&(clearTimeout(this._poller),this._poller=void 0),this._queue))try{this._instance._send_request(p({},e,{transport:"sendBeacon"}))}catch(e){Ae.error(e)}this._queue=[]}}class zo{constructor(e){this._updateScrollData=()=>{var e,t,n,r
this._context||(this._context={})
var i=this.scrollElement(),s=this.scrollY(),o=i?Math.max(0,i.scrollHeight-i.clientHeight):0,a=s+((null==i?void 0:i.clientHeight)||0),l=(null==i?void 0:i.scrollHeight)||0
this._context.lastScrollY=Math.ceil(s),this._context.maxScrollY=Math.max(s,null!==(e=this._context.maxScrollY)&&void 0!==e?e:0),this._context.maxScrollHeight=Math.max(o,null!==(t=this._context.maxScrollHeight)&&void 0!==t?t:0),this._context.lastContentY=a,this._context.maxContentY=Math.max(a,null!==(n=this._context.maxContentY)&&void 0!==n?n:0),this._context.maxContentHeight=Math.max(l,null!==(r=this._context.maxContentHeight)&&void 0!==r?r:0)},this._instance=e}getContext(){return this._context}resetContext(){var e=this._context
return setTimeout(this._updateScrollData,0),e}startMeasuringScrollPosition(){Je(v,"scroll",this._updateScrollData,{capture:!0}),Je(v,"scrollend",this._updateScrollData,{capture:!0}),Je(v,"resize",this._updateScrollData)}scrollElement(){if(!this._instance.config.scroll_root_selector)return null==v?void 0:v.document.documentElement
var e=D(this._instance.config.scroll_root_selector)?this._instance.config.scroll_root_selector:[this._instance.config.scroll_root_selector]
for(var t of e){var n=null==v?void 0:v.document.querySelector(t)
if(n)return n}}scrollY(){if(this._instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollTop||0}return v&&(v.scrollY||v.pageYOffset||v.document.documentElement.scrollTop)||0}scrollX(){if(this._instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollLeft||0}return v&&(v.scrollX||v.pageXOffset||v.document.documentElement.scrollLeft)||0}}var Vo=e=>ao(null==e?void 0:e.config.mask_personal_data_properties,null==e?void 0:e.config.custom_personal_data_properties)
class Qo{constructor(e,t,n,r){this._onSessionIdCallback=e=>{var t=this._getStored()
if(!t||t.sessionId!==e){var n={sessionId:e,props:this._sessionSourceParamGenerator(this._instance)}
this._persistence.register({[Lt]:n})}},this._instance=e,this._sessionIdManager=t,this._persistence=n,this._sessionSourceParamGenerator=r||Vo,this._sessionIdManager.onSessionId(this._onSessionIdCallback)}_getStored(){return this._persistence.props[Lt]}getSetOnceProps(){var e,t=null==(e=this._getStored())?void 0:e.props
return t?"r"in t?lo(t):{$referring_domain:t.referringDomain,$pathname:t.initialPathName,utm_source:t.utm_source,utm_campaign:t.utm_campaign,utm_medium:t.utm_medium,utm_content:t.utm_content,utm_term:t.utm_term}:{}}getSessionProps(){var e={}
return De(We(this.getSetOnceProps()),(t,n)=>{"$current_url"===n&&(n="url"),e["$session_entry_"+M(n)]=t}),e}}var Jo=Fe("[SessionId]")
class Ko{on(e,t){return this._eventEmitter.on(e,t)}constructor(e,t,n){var r
if(this._sessionIdChangedHandlers=[],this._eventEmitter=new Po,this._sessionHasBeenIdleTooLong=(e,t)=>Math.abs(e-t)>this.sessionTimeoutMs,!e.persistence)throw new Error("SessionIdManager requires a PostHogPersistence instance")
if("always"===e.config.cookieless_mode)throw new Error('SessionIdManager cannot be used with cookieless_mode="always"')
this._config=e.config,this._persistence=e.persistence,this._windowId=void 0,this._sessionId=void 0,this._sessionStartTimestamp=null,this._sessionActivityTimestamp=null,this._sessionIdGenerator=t||An,this._windowIdGenerator=n||An
var i=this._config.persistence_name||this._config.token,s=this._config.session_idle_timeout_seconds||1800
if(this._sessionTimeoutMs=1e3*re(s,60,36e3,Jo.createLogger("session_idle_timeout_seconds"),1800),e.register({$configured_session_timeout_ms:this._sessionTimeoutMs}),this._resetIdleTimer(),this._window_id_storage_key="ph_"+i+"_window_id",this._primary_window_exists_storage_key="ph_"+i+"_primary_window_exists",this._canUseSessionStorage()){var o=Vn._parse(this._window_id_storage_key),a=Vn._parse(this._primary_window_exists_storage_key)
o&&!a?this._windowId=o:Vn._remove(this._window_id_storage_key),Vn._set(this._primary_window_exists_storage_key,!0)}if(null!=(r=this._config.bootstrap)&&r.sessionID)try{var l=(()=>{var e=this._config.bootstrap.sessionID.replace(/-/g,"")
if(32!==e.length)throw new Error("Not a valid UUID")
if("7"!==e[12])throw new Error("Not a UUIDv7")
return parseInt(e.substring(0,12),16)})()
this._setSessionId(this._config.bootstrap.sessionID,(new Date).getTime(),l)}catch(e){Jo.error("Invalid sessionID in bootstrap",e)}this._listenToReloadWindow()}get sessionTimeoutMs(){return this._sessionTimeoutMs}onSessionId(e){return U(this._sessionIdChangedHandlers)&&(this._sessionIdChangedHandlers=[]),this._sessionIdChangedHandlers.push(e),this._sessionId&&e(this._sessionId,this._windowId),()=>{this._sessionIdChangedHandlers=this._sessionIdChangedHandlers.filter(t=>t!==e)}}_canUseSessionStorage(){return"memory"!==this._config.persistence&&!this._persistence._disabled&&Vn._is_supported()}_setWindowId(e){e!==this._windowId&&(this._windowId=e,this._canUseSessionStorage()&&Vn._set(this._window_id_storage_key,e))}_getWindowId(){return this._windowId?this._windowId:this._canUseSessionStorage()?Vn._parse(this._window_id_storage_key):null}_setSessionId(e,t,n){e===this._sessionId&&t===this._sessionActivityTimestamp&&n===this._sessionStartTimestamp||(this._sessionStartTimestamp=n,this._sessionActivityTimestamp=t,this._sessionId=e,this._persistence.register({[vt]:[t,e,n]}))}_getSessionId(){if(this._sessionId&&this._sessionActivityTimestamp&&this._sessionStartTimestamp)return[this._sessionActivityTimestamp,this._sessionId,this._sessionStartTimestamp]
var e=this._persistence.props[vt]
return D(e)&&2===e.length&&e.push(e[0]),e||[0,null,0]}resetSessionId(){this._setSessionId(null,null,null)}_listenToReloadWindow(){Je(v,"beforeunload",()=>{this._canUseSessionStorage()&&Vn._remove(this._primary_window_exists_storage_key)},{capture:!1})}checkAndGetSessionAndWindowId(e,t){if(void 0===e&&(e=!1),void 0===t&&(t=null),"always"===this._config.cookieless_mode)throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"')
var n=t||(new Date).getTime(),[r,i,s]=this._getSessionId(),o=this._getWindowId(),a=Q(s)&&s>0&&Math.abs(n-s)>864e5,l=!1,c=!i,u=!e&&this._sessionHasBeenIdleTooLong(n,r)
c||u||a?(i=this._sessionIdGenerator(),o=this._windowIdGenerator(),Jo.info("new session ID generated",{sessionId:i,windowId:o,changeReason:{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}}),s=n,l=!0):o||(o=this._windowIdGenerator(),l=!0)
var d=0===r||!e||a?n:r,f=0===s?(new Date).getTime():s
return this._setWindowId(o),this._setSessionId(i,d,f),e||this._resetIdleTimer(),l&&this._sessionIdChangedHandlers.forEach(e=>e(i,o,l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0)),{sessionId:i,windowId:o,sessionStartTimestamp:f,changeReason:l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0,lastActivityTimestamp:r}}_resetIdleTimer(){clearTimeout(this._enforceIdleTimeout),this._enforceIdleTimeout=setTimeout(()=>{var[e]=this._getSessionId()
if(this._sessionHasBeenIdleTooLong((new Date).getTime(),e)){var t=this._sessionId
this.resetSessionId(),this._eventEmitter.emit("forcedIdleReset",{idleSessionId:t})}},1.1*this.sessionTimeoutMs)}}var Yo=["$set_once","$set"],Xo=Fe("[SiteApps]")
class Zo{constructor(e){this._instance=e,this._bufferedInvocations=[],this.apps={}}get isEnabled(){return!!this._instance.config.opt_in_site_apps}_eventCollector(e,t){if(t){var n=this.globalsForEvent(t)
this._bufferedInvocations.push(n),this._bufferedInvocations.length>1e3&&(this._bufferedInvocations=this._bufferedInvocations.slice(10))}}get siteAppLoaders(){var e
return null==(e=P._POSTHOG_REMOTE_CONFIG)||null==(e=e[this._instance.config.token])?void 0:e.siteApps}init(){if(this.isEnabled){var e=this._instance._addCaptureHook(this._eventCollector.bind(this))
this._stopBuffering=()=>{e(),this._bufferedInvocations=[],this._stopBuffering=void 0}}}globalsForEvent(e){var t,n,r,i,s,o,a
if(!e)throw new Error("Event payload is required")
var l={},c=this._instance.get_property("$groups")||[],u=this._instance.get_property("$stored_group_properties")||{}
for(var[d,f]of Object.entries(u))l[d]={id:c[d],type:d,properties:f}
var{$set_once:h,$set:v}=e
return{event:p({},g(e,Yo),{properties:p({},e.properties,v?{$set:p({},null!==(t=null==(n=e.properties)?void 0:n.$set)&&void 0!==t?t:{},v)}:{},h?{$set_once:p({},null!==(r=null==(i=e.properties)?void 0:i.$set_once)&&void 0!==r?r:{},h)}:{}),elements_chain:null!==(s=null==(o=e.properties)?void 0:o.$elements_chain)&&void 0!==s?s:"",distinct_id:null==(a=e.properties)?void 0:a.distinct_id}),person:{properties:this._instance.get_property("$stored_person_properties")},groups:l}}setupSiteApp(e){var t=this.apps[e.id],n=()=>{var n
!t.errored&&this._bufferedInvocations.length&&(Xo.info("Processing "+this._bufferedInvocations.length+" events for site app with id "+e.id),this._bufferedInvocations.forEach(e=>null==t.processEvent?void 0:t.processEvent(e)),t.processedBuffer=!0),Object.values(this.apps).every(e=>e.processedBuffer||e.errored)&&(null==(n=this._stopBuffering)||n.call(this))},r=!1,i=i=>{t.errored=!i,t.loaded=!0,Xo.info("Site app with id "+e.id+" "+(i?"loaded":"errored")),r&&n()}
try{var{processEvent:s}=e.init({posthog:this._instance,callback:e=>{i(e)}})
s&&(t.processEvent=s),r=!0}catch(t){Xo.error("Error while initializing PostHog app with config id "+e.id,t),i(!1)}if(r&&t.loaded)try{n()}catch(n){Xo.error("Error while processing buffered events PostHog app with config id "+e.id,n),t.errored=!0}}_setupSiteApps(){var e=this.siteAppLoaders||[]
for(var t of e)this.apps[t.id]={id:t.id,loaded:!1,errored:!1,processedBuffer:!1}
for(var n of e)this.setupSiteApp(n)}_onCapturedEvent(e){if(0!==Object.keys(this.apps).length){var t=this.globalsForEvent(e)
for(var n of Object.values(this.apps))try{null==n.processEvent||n.processEvent(t)}catch(t){Xo.error("Error while processing event "+e.event+" for site app "+n.id,t)}}}onRemoteConfig(e){var t,n,r,i=this
if(null!=(t=this.siteAppLoaders)&&t.length)return this.isEnabled?(this._setupSiteApps(),void this._instance.on("eventCaptured",e=>this._onCapturedEvent(e))):void Xo.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
if(null==(n=this._stopBuffering)||n.call(this),null!=(r=e.siteApps)&&r.length)if(this.isEnabled){var s=function(e){var t
P["__$$ph_site_app_"+e]=i._instance,null==(t=P.__PosthogExtensions__)||null==t.loadSiteApp||t.loadSiteApp(i._instance,a,t=>{if(t)return Xo.error("Error while initializing PostHog app with config id "+e,t)})}
for(var{id:o,url:a}of e.siteApps)s(o)}else Xo.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')}}var ea=["amazonbot","amazonproductbot","app.hypefactors.com","applebot","archive.org_bot","awariobot","backlinksextendedbot","baiduspider","bingbot","bingpreview","chrome-lighthouse","dataforseobot","deepscan","duckduckbot","facebookexternal","facebookcatalog","http://yandex.com/bots","hubspot","ia_archiver","leikibot","linkedinbot","meta-externalagent","mj12bot","msnbot","nessus","petalbot","pinterest","prerender","rogerbot","screaming frog","sebot-wa","sitebulb","slackbot","slurp","trendictionbot","turnitin","twitterbot","vercel-screenshot","vercelbot","yahoo! slurp","yandexbot","zoombot","bot.htm","bot.php","(bot;","bot/","crawler","ahrefsbot","ahrefssiteaudit","semrushbot","siteauditbot","splitsignalbot","gptbot","oai-searchbot","chatgpt-user","perplexitybot","better uptime bot","sentryuptimebot","uptimerobot","headlesschrome","cypress","google-hoteladsverifier","adsbot-google","apis-google","duplexweb-google","feedfetcher-google","google favicon","google web preview","google-read-aloud","googlebot","googleother","google-cloudvertexbot","googleweblight","mediapartners-google","storebot-google","google-inspectiontool","bytespider"],ta=function(e,t){if(!e)return!1
var n=e.toLowerCase()
return ea.concat(t||[]).some(e=>{var t=e.toLowerCase()
return-1!==n.indexOf(t)})},na=function(e,t){if(!e)return!1
var n=e.userAgent
if(n&&ta(n,t))return!0
try{var r=null==e?void 0:e.userAgentData
if(null!=r&&r.brands&&r.brands.some(e=>ta(null==e?void 0:e.brand,t)))return!0}catch(e){}return!!e.webdriver},ra=function(e){return e.US="us",e.EU="eu",e.CUSTOM="custom",e}({}),ia="i.posthog.com"
class sa{constructor(e){this._regionCache={},this.instance=e}get apiHost(){var e=this.instance.config.api_host.trim().replace(/\/$/,"")
return"https://app.posthog.com"===e?"https://us.i.posthog.com":e}get uiHost(){var e,t=null==(e=this.instance.config.ui_host)?void 0:e.replace(/\/$/,"")
return t||(t=this.apiHost.replace("."+ia,".posthog.com")),"https://app.posthog.com"===t?"https://us.posthog.com":t}get region(){return this._regionCache[this.apiHost]||(/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=ra.US:/https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=ra.EU:this._regionCache[this.apiHost]=ra.CUSTOM),this._regionCache[this.apiHost]}endpointFor(e,t){if(void 0===t&&(t=""),t&&(t="/"===t[0]?t:"/"+t),"ui"===e)return this.uiHost+t
if(this.region===ra.CUSTOM)return this.apiHost+t
var n=ia+t
switch(e){case"assets":return"https://"+this.region+"-assets."+n
case"api":return"https://"+this.region+"."+n}}}var oa={icontains:(e,t)=>!!v&&t.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:(e,t)=>!!v&&-1===t.href.toLowerCase().indexOf(e.toLowerCase()),regex:(e,t)=>!!v&&Ki(t.href,e),not_regex:(e,t)=>!!v&&!Ki(t.href,e),exact:(e,t)=>t.href===e,is_not:(e,t)=>t.href!==e}
class aa{constructor(e){var t=this
this.getWebExperimentsAndEvaluateDisplayLogic=function(e){void 0===e&&(e=!1),t.getWebExperiments(e=>{aa._logInfo("retrieved web experiments from the server"),t._flagToExperiments=new Map,e.forEach(e=>{if(e.feature_flag_key){var n
t._flagToExperiments&&(aa._logInfo("setting flag key ",e.feature_flag_key," to web experiment ",e),null==(n=t._flagToExperiments)||n.set(e.feature_flag_key,e))
var r=t._instance.getFeatureFlag(e.feature_flag_key)
G(r)&&e.variants[r]&&t._applyTransforms(e.name,r,e.variants[r].transforms)}else if(e.variants)for(var i in e.variants){var s=e.variants[i]
aa._matchesTestVariant(s)&&t._applyTransforms(e.name,i,s.transforms)}})},e)},this._instance=e,this._instance.onFeatureFlags(e=>{this.onFeatureFlags(e)})}onFeatureFlags(e){if(this._is_bot())aa._logInfo("Refusing to render web experiment since the viewer is a likely bot")
else if(!this._instance.config.disable_web_experiments){if(V(this._flagToExperiments))return this._flagToExperiments=new Map,this.loadIfEnabled(),void this.previewWebExperiment()
aa._logInfo("applying feature flags",e),e.forEach(e=>{var t
if(this._flagToExperiments&&null!=(t=this._flagToExperiments)&&t.has(e)){var n,r=this._instance.getFeatureFlag(e),i=null==(n=this._flagToExperiments)?void 0:n.get(e)
r&&null!=i&&i.variants[r]&&this._applyTransforms(i.name,r,i.variants[r].transforms)}})}}previewWebExperiment(){var e=aa.getWindowLocation()
if(null!=e&&e.search){var t=wn(null==e?void 0:e.search,"__experiment_id"),n=wn(null==e?void 0:e.search,"__experiment_variant")
t&&n&&(aa._logInfo("previewing web experiments "+t+" && "+n),this.getWebExperiments(e=>{this._showPreviewWebExperiment(parseInt(t),n,e)},!1,!0))}}loadIfEnabled(){this._instance.config.disable_web_experiments||this.getWebExperimentsAndEvaluateDisplayLogic()}getWebExperiments(e,t,n){if(this._instance.config.disable_web_experiments&&!n)return e([])
var r=this._instance.get_property("$web_experiments")
if(r&&!t)return e(r)
this._instance._send_request({url:this._instance.requestRouter.endpointFor("api","/api/web_experiments/?token="+this._instance.config.token),method:"GET",callback:t=>{if(200!==t.statusCode||!t.json)return e([])
var n=t.json.experiments||[]
return e(n)}})}_showPreviewWebExperiment(e,t,n){var r=n.filter(t=>t.id===e)
r&&r.length>0&&(aa._logInfo("Previewing web experiment ["+r[0].name+"] with variant ["+t+"]"),this._applyTransforms(r[0].name,t,r[0].variants[t].transforms))}static _matchesTestVariant(e){return!V(e.conditions)&&aa._matchUrlConditions(e)&&aa._matchUTMConditions(e)}static _matchUrlConditions(e){var t
if(V(e.conditions)||V(null==(t=e.conditions)?void 0:t.url))return!0
var n,r,i,s=aa.getWindowLocation()
return!!s&&(null==(n=e.conditions)||!n.url||oa[null!==(r=null==(i=e.conditions)?void 0:i.urlMatchType)&&void 0!==r?r:"icontains"](e.conditions.url,s))}static getWindowLocation(){return null==v?void 0:v.location}static _matchUTMConditions(e){var t
if(V(e.conditions)||V(null==(t=e.conditions)?void 0:t.utm))return!0
var n=no()
if(n.utm_source){var r,i,s,o,a,l,c,u,d=null==(r=e.conditions)||null==(r=r.utm)||!r.utm_campaign||(null==(i=e.conditions)||null==(i=i.utm)?void 0:i.utm_campaign)==n.utm_campaign,f=null==(s=e.conditions)||null==(s=s.utm)||!s.utm_source||(null==(o=e.conditions)||null==(o=o.utm)?void 0:o.utm_source)==n.utm_source,h=null==(a=e.conditions)||null==(a=a.utm)||!a.utm_medium||(null==(l=e.conditions)||null==(l=l.utm)?void 0:l.utm_medium)==n.utm_medium,p=null==(c=e.conditions)||null==(c=c.utm)||!c.utm_term||(null==(u=e.conditions)||null==(u=u.utm)?void 0:u.utm_term)==n.utm_term
return d&&h&&p&&f}return!1}static _logInfo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
Ae.info("[WebExperiments] "+e,n)}_applyTransforms(e,t,n){this._is_bot()?aa._logInfo("Refusing to render web experiment since the viewer is a likely bot"):"control"!==t?n.forEach(n=>{if(n.selector){var r
aa._logInfo("applying transform of variant "+t+" for experiment "+e+" ",n)
var i=null==(r=document)?void 0:r.querySelectorAll(n.selector)
null==i||i.forEach(e=>{var t=e
n.html&&(t.innerHTML=n.html),n.css&&t.setAttribute("style",n.css)})}}):aa._logInfo("Control variants leave the page unmodified.")}_is_bot(){return w&&this._instance?na(w,this._instance.config.custom_blocked_useragents):void 0}}var la=Fe("[PostHog ExternalIntegrations]"),ca={intercom:"intercom-integration",crispChat:"crisp-chat-integration"}
class ua{constructor(e){this._instance=e}_loadScript(e,t){var n
null==(n=P.__PosthogExtensions__)||null==n.loadExternalDependency||n.loadExternalDependency(this._instance,e,e=>{if(e)return la.error("failed to load script",e)
t()})}startIfEnabledOrStop(){var e=this,t=function(t){var n,i,s
!r||null!=(n=P.__PosthogExtensions__)&&null!=(n=n.integrations)&&n[t]||e._loadScript(ca[t],()=>{var n
null==(n=P.__PosthogExtensions__)||null==(n=n.integrations)||null==(n=n[t])||n.start(e._instance)}),!r&&null!=(i=P.__PosthogExtensions__)&&null!=(i=i.integrations)&&i[t]&&(null==(s=P.__PosthogExtensions__)||null==(s=s.integrations)||null==(s=s[t])||s.stop())}
for(var[n,r]of Object.entries(null!==(i=this._instance.config.integrations)&&void 0!==i?i:{})){var i
t(n)}}}var da="[SessionRecording]",fa=Fe(da)
class ha{get started(){var e
return!(null==(e=this._lazyLoadedSessionRecording)||!e.isStarted)}get status(){var e
return(null==(e=this._lazyLoadedSessionRecording)?void 0:e.status)||"lazy_loading"}constructor(e){if(this._forceAllowLocalhostNetworkCapture=!1,this._persistFlagsOnSessionListener=void 0,this._instance=e,!this._instance.sessionManager)throw fa.error("started without valid sessionManager"),new Error(da+" started without valid sessionManager. This is a bug.")
if("always"===this._instance.config.cookieless_mode)throw new Error(da+' cannot be used with cookieless_mode="always"')}get _isRecordingEnabled(){var e,t=!(null==(e=this._instance.get_property(at))||!e.enabled),n=!this._instance.config.disable_session_recording,r=this._instance.config.disable_session_recording||this._instance.consent.isOptedOut()
return v&&t&&n&&!r}startIfEnabledOrStop(e){var t
if(!this._isRecordingEnabled||null==(t=this._lazyLoadedSessionRecording)||!t.isStarted){var n=!U(Object.assign)&&!U(Array.from)
this._isRecordingEnabled&&n?(this._lazyLoadAndStart(e),fa.info("starting")):this.stopRecording()}}_lazyLoadAndStart(e){var t,n,r
this._isRecordingEnabled&&(null!=P&&null!=(t=P.__PosthogExtensions__)&&null!=(t=t.rrweb)&&t.record&&null!=(n=P.__PosthogExtensions__)&&n.initSessionRecording?this._onScriptLoaded(e):null==(r=P.__PosthogExtensions__)||null==r.loadExternalDependency||r.loadExternalDependency(this._instance,this._scriptName,t=>{if(t)return fa.error("could not load recorder",t)
this._onScriptLoaded(e)}))}stopRecording(){var e
null==(e=this._lazyLoadedSessionRecording)||e.stop()}_resetSampling(){var e
null==(e=this._instance.persistence)||e.unregister(_t)}_persistRemoteConfig(e){if(this._instance.persistence){var t,n,r=this._instance.persistence,i=()=>{var t=e.sessionRecording,n=null==t?void 0:t.sampleRate,i=V(n)?null:parseFloat(n)
V(i)&&this._resetSampling()
var s=null==t?void 0:t.minimumDurationMilliseconds
r.register({[at]:p({enabled:!!t},t,{networkPayloadCapture:p({capturePerformance:e.capturePerformance},null==t?void 0:t.networkPayloadCapture),canvasRecording:{enabled:null==t?void 0:t.recordCanvas,fps:null==t?void 0:t.canvasFps,quality:null==t?void 0:t.canvasQuality},sampleRate:i,minimumDurationMilliseconds:U(s)?null:s,endpoint:null==t?void 0:t.endpoint,triggerMatchType:null==t?void 0:t.triggerMatchType,masking:null==t?void 0:t.masking,urlTriggers:null==t?void 0:t.urlTriggers})})}
i(),null==(t=this._persistFlagsOnSessionListener)||t.call(this),this._persistFlagsOnSessionListener=null==(n=this._instance.sessionManager)?void 0:n.onSessionId(i)}}onRemoteConfig(e){"sessionRecording"in e?(this._persistRemoteConfig(e),this.startIfEnabledOrStop()):fa.info("skipping remote config with no sessionRecording",e)}log(e,t){var n
void 0===t&&(t="log"),null!=(n=this._lazyLoadedSessionRecording)&&n.log?this._lazyLoadedSessionRecording.log(e,t):fa.warn("log called before recorder was ready")}get _scriptName(){var e,t,n=null==(e=this._instance)||null==(e=e.persistence)?void 0:e.get_property(at)
return(null==n||null==(t=n.scriptConfig)?void 0:t.script)||"lazy-recorder"}_onScriptLoaded(e){var t,n
if(null==(t=P.__PosthogExtensions__)||!t.initSessionRecording)throw Error("Called on script loaded before session recording is available")
this._lazyLoadedSessionRecording||(this._lazyLoadedSessionRecording=null==(n=P.__PosthogExtensions__)?void 0:n.initSessionRecording(this._instance),this._lazyLoadedSessionRecording._forceAllowLocalhostNetworkCapture=this._forceAllowLocalhostNetworkCapture),this._lazyLoadedSessionRecording.start(e)}onRRwebEmit(e){var t
null==(t=this._lazyLoadedSessionRecording)||null==t.onRRwebEmit||t.onRRwebEmit(e)}overrideLinkedFlag(){var e
null==(e=this._lazyLoadedSessionRecording)||e.overrideLinkedFlag()}overrideSampling(){var e
null==(e=this._lazyLoadedSessionRecording)||e.overrideSampling()}overrideTrigger(e){var t
null==(t=this._lazyLoadedSessionRecording)||t.overrideTrigger(e)}get sdkDebugProperties(){var e
return(null==(e=this._lazyLoadedSessionRecording)?void 0:e.sdkDebugProperties)||{$recording_status:this.status}}tryAddCustomEvent(e,t){var n
return!(null==(n=this._lazyLoadedSessionRecording)||!n.tryAddCustomEvent(e,t))}}var pa={},ga=()=>{},va="posthog",_a=!Gi&&-1===(null==T?void 0:T.indexOf("MSIE"))&&-1===(null==T?void 0:T.indexOf("Mozilla")),ma=e=>{var t
return{api_host:"https://us.i.posthog.com",ui_host:null,token:"",autocapture:!0,rageclick:!0,cross_subdomain_cookie:Ve(null==k?void 0:k.location),persistence:"localStorage+cookie",persistence_name:"",loaded:ga,save_campaign_params:!0,custom_campaign_params:[],custom_blocked_useragents:[],save_referrer:!0,capture_pageview:"2025-05-24"!==e||"history_change",capture_pageleave:"if_capture_pageview",defaults:null!=e?e:"unset",debug:S&&G(null==S?void 0:S.search)&&-1!==S.search.indexOf("__posthog_debug=true")||!1,cookie_expiration:365,upgrade:!1,disable_session_recording:!1,disable_persistence:!1,disable_web_experiments:!0,disable_surveys:!1,disable_surveys_automatic_display:!1,disable_external_dependency_loading:!1,enable_recording_console_log:void 0,secure_cookie:"https:"===(null==v||null==(t=v.location)?void 0:t.protocol),ip:!1,opt_out_capturing_by_default:!1,opt_out_persistence_by_default:!1,opt_out_useragent_filter:!1,opt_out_capturing_persistence_type:"localStorage",consent_persistence_name:null,opt_out_capturing_cookie_prefix:null,opt_in_site_apps:!1,property_denylist:[],respect_dnt:!1,sanitize_properties:null,request_headers:{},request_batching:!0,properties_string_max_length:65535,session_recording:{},mask_all_element_attributes:!1,mask_all_text:!1,mask_personal_data_properties:!1,custom_personal_data_properties:[],advanced_disable_flags:!1,advanced_disable_decide:!1,advanced_disable_feature_flags:!1,advanced_disable_feature_flags_on_first_load:!1,advanced_only_evaluate_survey_feature_flags:!1,advanced_enable_surveys:!1,advanced_disable_toolbar_metrics:!1,feature_flag_request_timeout_ms:3e3,surveys_request_timeout_ms:1e4,on_request_error:e=>{var t="Bad HTTP status: "+e.statusCode+" "+e.text
Ae.error(t)},get_device_id:e=>e,capture_performance:void 0,name:"posthog",bootstrap:{},disable_compression:!1,session_idle_timeout_seconds:1800,person_profiles:"identified_only",before_send:void 0,request_queue_config:{flush_interval_ms:Ho},error_tracking:{},_onCapture:ga,__preview_eager_load_replay:!0}},ya=e=>{var t={}
U(e.process_person)||(t.person_profiles=e.process_person),U(e.xhr_headers)||(t.request_headers=e.xhr_headers),U(e.cookie_name)||(t.persistence_name=e.cookie_name),U(e.disable_cookie)||(t.disable_persistence=e.disable_cookie),U(e.store_google)||(t.save_campaign_params=e.store_google),U(e.verbose)||(t.debug=e.verbose)
var n=Be({},t,e)
return D(e.property_blacklist)&&(U(e.property_denylist)?n.property_denylist=e.property_blacklist:D(e.property_denylist)?n.property_denylist=[...e.property_blacklist,...e.property_denylist]:Ae.error("Invalid value for property_denylist config: "+e.property_denylist)),n}
class ba{constructor(){this.__forceAllowLocalhost=!1}get _forceAllowLocalhost(){return this.__forceAllowLocalhost}set _forceAllowLocalhost(e){Ae.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),this.__forceAllowLocalhost=e}}class wa{get decideEndpointWasHit(){var e,t
return null!==(e=null==(t=this.featureFlags)?void 0:t.hasLoadedFlags)&&void 0!==e&&e}get flagsEndpointWasHit(){var e,t
return null!==(e=null==(t=this.featureFlags)?void 0:t.hasLoadedFlags)&&void 0!==e&&e}constructor(){this.webPerformance=new ba,this._personProcessingSetOncePropertiesSent=!1,this.version=L.LIB_VERSION,this._internalEventEmitter=new Po,this._calculate_event_properties=this.calculateEventProperties.bind(this),this.config=ma(),this.SentryIntegration=Li,this.sentryIntegration=e=>function(e,t){var n=Pi(e,t)
return{name:Ti,processEvent:e=>n(e)}}(this,e),this.__request_queue=[],this.__loaded=!1,this.analyticsDefaultEndpoint="/e/",this._initialPageviewCaptured=!1,this._visibilityStateListener=null,this._initialPersonProfilesConfig=null,this._cachedPersonProperties=null,this.featureFlags=new wo(this),this.toolbar=new Mi(this),this.scrollManager=new zo(this),this.pageViewManager=new Ui(this),this.surveys=new jo(this),this.experiments=new aa(this),this.exceptions=new ts(this),this.rateLimiter=new Do(this),this.requestRouter=new sa(this),this.consent=new Jn(this),this.externalIntegrations=new ua(this),this.people={set:(e,t,n)=>{var r=G(e)?{[e]:t}:e
this.setPersonProperties(r),null==n||n({})},set_once:(e,t,n)=>{var r=G(e)?{[e]:t}:e
this.setPersonProperties(void 0,r),null==n||n({})}},this.on("eventCaptured",e=>Ae.info('send "'+(null==e?void 0:e.event)+'"',e))}init(e,t,n){if(n&&n!==va){var r,i=null!==(r=pa[n])&&void 0!==r?r:new wa
return i._init(e,t,n),pa[n]=i,pa[va][n]=i,i}return this._init(e,t,n)}_init(e,t,n){var r,i
if(void 0===t&&(t={}),U(e)||W(e))return Ae.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),this
if(this.__loaded)return Ae.warn("You have already initialized PostHog! Re-initializing is a no-op"),this
this.__loaded=!0,this.config={},this._originalUserConfig=t,this._triggered_notifs=[],t.person_profiles&&(this._initialPersonProfilesConfig=t.person_profiles),this.set_config(Be({},ma(t.defaults),ya(t),{name:n,token:e})),this.config.on_xhr_error&&Ae.error("on_xhr_error is deprecated. Use on_request_error instead"),this.compression=t.disable_compression?void 0:mn.GZipJS
var s=this._is_persistence_disabled()
this.persistence=new So(this.config,s),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new So(p({},this.config,{persistence:"sessionStorage"}),s)
var o=p({},this.persistence.props),a=p({},this.sessionPersistence.props)
this.register({$initialization_time:(new Date).toISOString()}),this._requestQueue=new Uo(e=>this._send_retriable_request(e),this.config.request_queue_config),this._retryQueue=new Wo(this),this.__request_queue=[]
var l="always"===this.config.cookieless_mode||"on_reject"===this.config.cookieless_mode&&this.consent.isExplicitlyOptedOut()
if(l||(this.sessionManager=new Ko(this),this.sessionPropsManager=new Qo(this,this.sessionManager,this.persistence)),new Fi(this).startIfEnabledOrStop(),this.siteApps=new Zo(this),null==(r=this.siteApps)||r.init(),l||(this.config.__preview_eager_load_replay?this.sessionRecording=new Ei(this):this.sessionRecording=new ha(this),this.sessionRecording.startIfEnabledOrStop()),this.config.disable_scroll_properties||this.scrollManager.startMeasuringScrollPosition(),this.autocapture=new Pn(this),this.autocapture.startIfEnabled(),this.surveys.loadIfEnabled(),this.heatmaps=new Hi(this),this.heatmaps.startIfEnabled(),this.webVitalsAutocapture=new Di(this),this.exceptionObserver=new tr(this),this.exceptionObserver.startIfEnabled(),this.deadClicksAutocapture=new Zn(this,Xn),this.deadClicksAutocapture.startIfEnabled(),this.historyAutocapture=new rr(this),this.historyAutocapture.startIfEnabled(),L.DEBUG=L.DEBUG||this.config.debug,L.DEBUG&&Ae.info("Starting in debug mode",{this:this,config:t,thisC:p({},this.config),p:o,s:a}),void 0!==(null==(i=t.bootstrap)?void 0:i.distinctID)){var c,u,d=this.config.get_device_id(An()),f=null!=(c=t.bootstrap)&&c.isIdentifiedID?d:t.bootstrap.distinctID
this.persistence.set_property(Pt,null!=(u=t.bootstrap)&&u.isIdentifiedID?"identified":"anonymous"),this.register({distinct_id:t.bootstrap.distinctID,$device_id:f})}if(this._hasBootstrappedFeatureFlags()){var h,g,_=Object.keys((null==(h=t.bootstrap)?void 0:h.featureFlags)||{}).filter(e=>{var n
return!(null==(n=t.bootstrap)||null==(n=n.featureFlags)||!n[e])}).reduce((e,n)=>{var r
return e[n]=(null==(r=t.bootstrap)||null==(r=r.featureFlags)?void 0:r[n])||!1,e},{}),m=Object.keys((null==(g=t.bootstrap)?void 0:g.featureFlagPayloads)||{}).filter(e=>_[e]).reduce((e,n)=>{var r,i
return null!=(r=t.bootstrap)&&null!=(r=r.featureFlagPayloads)&&r[n]&&(e[n]=null==(i=t.bootstrap)||null==(i=i.featureFlagPayloads)?void 0:i[n]),e},{})
this.featureFlags.receivedFeatureFlags({featureFlags:_,featureFlagPayloads:m})}if(l)this.register_once({distinct_id:Ft,$device_id:null},"")
else if(!this.get_distinct_id()){var y=this.config.get_device_id(An())
this.register_once({distinct_id:y,$device_id:y},""),this.persistence.set_property(Pt,"anonymous")}return Je(v,"onpagehide"in self?"pagehide":"unload",this._handle_unload.bind(this),{passive:!1}),this.toolbar.maybeLoadToolbar(),t.segment?function(e,t){var n=e.config.segment
if(!n)return t()
!function(e,t){var n=e.config.segment
if(!n)return t()
var r=n=>{var r=()=>n.anonymousId()||An()
e.config.get_device_id=r,n.id()&&(e.register({distinct_id:n.id(),$device_id:r()}),e.persistence.set_property(Pt,"identified")),t()},i=n.user()
"then"in i&&B(i.then)?i.then(e=>r(e)):r(i)}(e,()=>{n.register((e=>{Promise&&Promise.resolve||Ci.warn("This browser does not have Promise support, and can not use the segment integration")
var t=(t,n)=>{if(!n)return t
t.event.userId||t.event.anonymousId===e.get_distinct_id()||(Ci.info("No userId set, resetting PostHog"),e.reset()),t.event.userId&&t.event.userId!==e.get_distinct_id()&&(Ci.info("UserId set, identifying with PostHog"),e.identify(t.event.userId))
var r=e.calculateEventProperties(n,t.event.properties)
return t.event.properties=Object.assign({},r,t.event.properties),t}
return{name:"PostHog JS",type:"enrichment",version:"1.0.0",isLoaded:()=>!0,load:()=>Promise.resolve(),track:e=>t(e,e.event.event),page:e=>t(e,"$pageview"),identify:e=>t(e,"$identify"),screen:e=>t(e,"$screen")}})(e)).then(()=>{t()})})}(this,()=>this._loaded()):this._loaded(),B(this.config._onCapture)&&this.config._onCapture!==ga&&(Ae.warn("onCapture is deprecated. Please use `before_send` instead"),this.on("eventCaptured",e=>this.config._onCapture(e.event,e))),this.config.ip&&Ae.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'),this}_onRemoteConfig(e){var t,n,r,i,s,o,a,l
if(!k||!k.body)return Ae.info("document not ready yet, trying again in 500 milliseconds..."),void setTimeout(()=>{this._onRemoteConfig(e)},500)
this.compression=void 0,e.supportedCompression&&!this.config.disable_compression&&(this.compression=R(e.supportedCompression,mn.GZipJS)?mn.GZipJS:R(e.supportedCompression,mn.Base64)?mn.Base64:void 0),null!=(t=e.analytics)&&t.endpoint&&(this.analyticsDefaultEndpoint=e.analytics.endpoint),this.set_config({person_profiles:this._initialPersonProfilesConfig?this._initialPersonProfilesConfig:"identified_only"}),null==(n=this.siteApps)||n.onRemoteConfig(e),null==(r=this.sessionRecording)||r.onRemoteConfig(e),null==(i=this.autocapture)||i.onRemoteConfig(e),null==(s=this.heatmaps)||s.onRemoteConfig(e),this.surveys.onRemoteConfig(e),null==(o=this.webVitalsAutocapture)||o.onRemoteConfig(e),null==(a=this.exceptionObserver)||a.onRemoteConfig(e),this.exceptions.onRemoteConfig(e),null==(l=this.deadClicksAutocapture)||l.onRemoteConfig(e)}_loaded(){try{this.config.loaded(this)}catch(e){Ae.critical("`loaded` function failed",e)}this._start_queue_if_opted_in(),this.config.capture_pageview&&setTimeout(()=>{(this.consent.isOptedIn()||"always"===this.config.cookieless_mode)&&this._captureInitialPageview()},1),new qo(this).load(),this.featureFlags.flags()}_start_queue_if_opted_in(){var e
this.is_capturing()&&this.config.request_batching&&(null==(e=this._requestQueue)||e.enable())}_dom_loaded(){this.is_capturing()&&Ne(this.__request_queue,e=>this._send_retriable_request(e)),this.__request_queue=[],this._start_queue_if_opted_in()}_handle_unload(){var e,t
this.config.request_batching?(this._shouldCapturePageleave()&&this.capture("$pageleave"),null==(e=this._requestQueue)||e.unload(),null==(t=this._retryQueue)||t.unload()):this._shouldCapturePageleave()&&this.capture("$pageleave",null,{transport:"sendBeacon"})}_send_request(e){this.__loaded&&(_a?this.__request_queue.push(e):this.rateLimiter.isServerRateLimited(e.batchKey)||(e.transport=e.transport||this.config.api_transport,e.url=zi(e.url,{ip:this.config.ip?1:0}),e.headers=p({},this.config.request_headers),e.compression="best-available"===e.compression?this.compression:e.compression,e.disableXHRCredentials=this.config.__preview_disable_xhr_credentials,this.config.__preview_disable_beacon&&(e.disableTransport=["sendBeacon"]),e.fetchOptions=e.fetchOptions||this.config.fetch_options,(e=>{var t,n,r,i=p({},e)
i.timeout=i.timeout||6e4,i.url=zi(i.url,{_:(new Date).getTime().toString(),ver:L.LIB_VERSION,compression:i.compression})
var s=null!==(t=i.transport)&&void 0!==t?t:"fetch",o=Ji.filter(e=>!i.disableTransport||!e.transport||!i.disableTransport.includes(e.transport)),a=null!==(n=null==(r=Qe(o,e=>e.transport===s))?void 0:r.method)&&void 0!==n?n:o[0].method
if(!a)throw new Error("No available transport method")
a(i)})(p({},e,{callback:t=>{var n,r
this.rateLimiter.checkForLimiting(t),t.statusCode>=400&&(null==(n=(r=this.config).on_request_error)||n.call(r,t)),null==e.callback||e.callback(t)}}))))}_send_retriable_request(e){this._retryQueue?this._retryQueue.retriableRequest(e):this._send_request(e)}_execute_array(e){var t,n=[],r=[],i=[]
Ne(e,e=>{e&&(t=e[0],D(t)?i.push(e):B(e)?e.call(this):D(e)&&"alias"===t?n.push(e):D(e)&&-1!==t.indexOf("capture")&&B(this[t])?i.push(e):r.push(e))})
var s=function(e,t){Ne(e,function(e){if(D(e[0])){var n=t
De(e,function(e){n=n[e[0]].apply(n,e.slice(1))})}else this[e[0]].apply(this,e.slice(1))},t)}
s(n,this),s(r,this),s(i,this)}_hasBootstrappedFeatureFlags(){var e,t
return(null==(e=this.config.bootstrap)?void 0:e.featureFlags)&&Object.keys(null==(t=this.config.bootstrap)?void 0:t.featureFlags).length>0||!1}push(e){this._execute_array([e])}capture(e,t,n){var r
if(this.__loaded&&this.persistence&&this.sessionPersistence&&this._requestQueue){if(this.is_capturing())if(!U(e)&&G(e)){if(this.config.opt_out_useragent_filter||!this._is_bot()){var i=null!=n&&n.skip_client_rate_limiting?void 0:this.rateLimiter.clientRateLimitContext()
if(null==i||!i.isRateLimited){null!=t&&t.$current_url&&!G(null==t?void 0:t.$current_url)&&(Ae.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."),null==t||delete t.$current_url),this.sessionPersistence.update_search_keyword(),this.config.save_campaign_params&&this.sessionPersistence.update_campaign_params(),this.config.save_referrer&&this.sessionPersistence.update_referrer_info(),(this.config.save_campaign_params||this.config.save_referrer)&&this.persistence.set_initial_person_info()
var s=new Date,o=(null==n?void 0:n.timestamp)||s,a=An(),l={uuid:a,event:e,properties:this.calculateEventProperties(e,t||{},o,a)}
i&&(l.properties.$lib_rate_limit_remaining_tokens=i.remainingTokens),(null==n?void 0:n.$set)&&(l.$set=null==n?void 0:n.$set)
var c,u=this._calculate_set_once_properties(null==n?void 0:n.$set_once)
if(u&&(l.$set_once=u),(l=function(e,t){return n=e,r=e=>G(e)&&!z(t)?e.slice(0,t):e,i=new Set,function e(t,n){return t!==Object(t)?r?r(t):t:i.has(t)?void 0:(i.add(t),D(t)?(s=[],Ne(t,t=>{s.push(e(t))})):(s={},De(t,(t,n)=>{i.has(t)||(s[n]=e(t,n))})),s)
var s}(n)
var n,r,i}(l,null!=n&&n._noTruncate?null:this.config.properties_string_max_length)).timestamp=o,U(null==n?void 0:n.timestamp)||(l.properties.$event_time_override_provided=!0,l.properties.$event_time_override_system_time=s),e===Eo.DISMISSED||e===Eo.SENT){var d=null==t?void 0:t[Co.SURVEY_ID],f=null==t?void 0:t[Co.SURVEY_ITERATION]
c={id:d,current_iteration:f},localStorage.getItem(Oo(c))||localStorage.setItem(Oo(c),"true"),l.$set=p({},l.$set,{[Ro({id:d,current_iteration:f},e===Eo.SENT?"responded":"dismissed")]:!0})}var h=p({},l.properties.$set,l.$set)
if(H(h)||this.setPersonPropertiesForFlags(h),!V(this.config.before_send)){var g=this._runBeforeSend(l)
if(!g)return
l=g}this._internalEventEmitter.emit("eventCaptured",l)
var v={method:"POST",url:null!==(r=null==n?void 0:n._url)&&void 0!==r?r:this.requestRouter.endpointFor("api",this.analyticsDefaultEndpoint),data:l,compression:"best-available",batchKey:null==n?void 0:n._batchKey}
return!this.config.request_batching||n&&(null==n||!n._batchKey)||null!=n&&n.send_instantly?this._send_retriable_request(v):this._requestQueue.enqueue(v),l}Ae.critical("This capture call is ignored due to client rate limiting.")}}else Ae.error("No event name provided to posthog.capture")}else Ae.uninitializedWarning("posthog.capture")}_addCaptureHook(e){return this.on("eventCaptured",t=>e(t.event,t))}calculateEventProperties(e,t,n,r,i){if(n=n||new Date,!this.persistence||!this.sessionPersistence)return t
var s=i?void 0:this.persistence.remove_event_timer(e),o=p({},t)
if(o.token=this.config.token,o.$config_defaults=this.config.defaults,("always"==this.config.cookieless_mode||"on_reject"==this.config.cookieless_mode&&this.consent.isExplicitlyOptedOut())&&(o.$cookieless_mode=!0),"$snapshot"===e){var a=p({},this.persistence.properties(),this.sessionPersistence.properties())
return o.distinct_id=a.distinct_id,(!G(o.distinct_id)&&!Q(o.distinct_id)||W(o.distinct_id))&&Ae.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),o}var l,c=fo(this.config.mask_personal_data_properties,this.config.custom_personal_data_properties)
if(this.sessionManager){var{sessionId:u,windowId:d}=this.sessionManager.checkAndGetSessionAndWindowId(i,n.getTime())
o.$session_id=u,o.$window_id=d}this.sessionPropsManager&&Be(o,this.sessionPropsManager.getSessionProps())
try{var f
this.sessionRecording&&Be(o,this.sessionRecording.sdkDebugProperties),o.$sdk_debug_retry_queue_size=null==(f=this._retryQueue)?void 0:f.length}catch(e){o.$sdk_debug_error_capturing_properties=String(e)}if(this.requestRouter.region===ra.CUSTOM&&(o.$lib_custom_api_host=this.config.api_host),l="$pageview"!==e||i?"$pageleave"!==e||i?this.pageViewManager.doEvent():this.pageViewManager.doPageLeave(n):this.pageViewManager.doPageView(n,r),o=Be(o,l),"$pageview"===e&&k&&(o.title=k.title),!U(s)){var h=n.getTime()-s
o.$duration=parseFloat((h/1e3).toFixed(3))}T&&this.config.opt_out_useragent_filter&&(o.$browser_type=this._is_bot()?"bot":"browser"),(o=Be({},c,this.persistence.properties(),this.sessionPersistence.properties(),o)).$is_identified=this._isIdentified(),D(this.config.property_denylist)?De(this.config.property_denylist,function(e){delete o[e]}):Ae.error("Invalid value for property_denylist config: "+this.config.property_denylist+" or property_blacklist config: "+this.config.property_blacklist)
var g=this.config.sanitize_properties
g&&(Ae.error("sanitize_properties is deprecated. Use before_send instead"),o=g(o,e))
var v=this._hasPersonProcessing()
return o.$process_person_profile=v,v&&!i&&this._requirePersonProcessing("_calculate_event_properties"),o}_calculate_set_once_properties(e){var t
if(!this.persistence||!this._hasPersonProcessing())return e
if(this._personProcessingSetOncePropertiesSent)return e
var n=this.persistence.get_initial_props(),r=null==(t=this.sessionPropsManager)?void 0:t.getSetOnceProps(),i=Be({},n,r||{},e||{}),s=this.config.sanitize_properties
return s&&(Ae.error("sanitize_properties is deprecated. Use before_send instead"),i=s(i,"$set_once")),this._personProcessingSetOncePropertiesSent=!0,H(i)?void 0:i}register(e,t){var n
null==(n=this.persistence)||n.register(e,t)}register_once(e,t,n){var r
null==(r=this.persistence)||r.register_once(e,t,n)}register_for_session(e){var t
null==(t=this.sessionPersistence)||t.register(e)}unregister(e){var t
null==(t=this.persistence)||t.unregister(e)}unregister_for_session(e){var t
null==(t=this.sessionPersistence)||t.unregister(e)}_register_single(e,t){this.register({[e]:t})}getFeatureFlag(e,t){return this.featureFlags.getFeatureFlag(e,t)}getFeatureFlagPayload(e){var t=this.featureFlags.getFeatureFlagPayload(e)
try{return JSON.parse(t)}catch(e){return t}}isFeatureEnabled(e,t){return this.featureFlags.isFeatureEnabled(e,t)}reloadFeatureFlags(){this.featureFlags.reloadFeatureFlags()}updateEarlyAccessFeatureEnrollment(e,t,n){this.featureFlags.updateEarlyAccessFeatureEnrollment(e,t,n)}getEarlyAccessFeatures(e,t,n){return void 0===t&&(t=!1),this.featureFlags.getEarlyAccessFeatures(e,t,n)}on(e,t){return this._internalEventEmitter.on(e,t)}onFeatureFlags(e){return this.featureFlags.onFeatureFlags(e)}onSurveysLoaded(e){return this.surveys.onSurveysLoaded(e)}onSessionId(e){var t,n
return null!==(t=null==(n=this.sessionManager)?void 0:n.onSessionId(e))&&void 0!==t?t:()=>{}}getSurveys(e,t){void 0===t&&(t=!1),this.surveys.getSurveys(e,t)}getActiveMatchingSurveys(e,t){void 0===t&&(t=!1),this.surveys.getActiveMatchingSurveys(e,t)}renderSurvey(e,t){this.surveys.renderSurvey(e,t)}displaySurvey(e,t){void 0===t&&(t=Ao),this.surveys.displaySurvey(e,t)}canRenderSurvey(e){return this.surveys.canRenderSurvey(e)}canRenderSurveyAsync(e,t){return void 0===t&&(t=!1),this.surveys.canRenderSurveyAsync(e,t)}identify(e,t,n){if(!this.__loaded||!this.persistence)return Ae.uninitializedWarning("posthog.identify")
if(Q(e)&&(e=e.toString(),Ae.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")),e)if(["distinct_id","distinctid"].includes(e.toLowerCase()))Ae.critical('The string "'+e+'" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.')
else if(e!==Ft){if(this._requirePersonProcessing("posthog.identify")){var r=this.get_distinct_id()
if(this.register({$user_id:e}),!this.get_property("$device_id")){var i=r
this.register_once({$had_persisted_distinct_id:!0,$device_id:i},"")}e!==r&&e!==this.get_property(Ye)&&(this.unregister(Ye),this.register({distinct_id:e}))
var s="anonymous"===(this.persistence.get_property(Pt)||"anonymous")
e!==r&&s?(this.persistence.set_property(Pt,"identified"),this.setPersonPropertiesForFlags(p({},n||{},t||{}),!1),this.capture("$identify",{distinct_id:e,$anon_distinct_id:r},{$set:t||{},$set_once:n||{}}),this._cachedPersonProperties=Yi(e,t,n),this.featureFlags.setAnonymousDistinctId(r)):(t||n)&&this.setPersonProperties(t,n),e!==r&&(this.reloadFeatureFlags(),this.unregister(Tt))}}else Ae.critical('The string "'+Ft+'" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.')
else Ae.error("Unique user id has not been set in posthog.identify")}setPersonProperties(e,t){if((e||t)&&this._requirePersonProcessing("posthog.setPersonProperties")){var n=Yi(this.get_distinct_id(),e,t)
this._cachedPersonProperties!==n?(this.setPersonPropertiesForFlags(p({},t||{},e||{})),this.capture("$set",{$set:e||{},$set_once:t||{}}),this._cachedPersonProperties=n):Ae.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")}}group(e,t,n){if(e&&t){if(this._requirePersonProcessing("posthog.group")){var r=this.getGroups()
r[e]!==t&&this.resetGroupPropertiesForFlags(e),this.register({$groups:p({},r,{[e]:t})}),n&&(this.capture("$groupidentify",{$group_type:e,$group_key:t,$group_set:n}),this.setGroupPropertiesForFlags({[e]:n})),r[e]===t||n||this.reloadFeatureFlags()}}else Ae.error("posthog.group requires a group type and group key")}resetGroups(){this.register({$groups:{}}),this.resetGroupPropertiesForFlags(),this.reloadFeatureFlags()}setPersonPropertiesForFlags(e,t){void 0===t&&(t=!0),this.featureFlags.setPersonPropertiesForFlags(e,t)}resetPersonPropertiesForFlags(){this.featureFlags.resetPersonPropertiesForFlags()}setGroupPropertiesForFlags(e,t){void 0===t&&(t=!0),this._requirePersonProcessing("posthog.setGroupPropertiesForFlags")&&this.featureFlags.setGroupPropertiesForFlags(e,t)}resetGroupPropertiesForFlags(e){this.featureFlags.resetGroupPropertiesForFlags(e)}reset(e){var t,n,r,i
if(Ae.info("reset"),!this.__loaded)return Ae.uninitializedWarning("posthog.reset")
var s=this.get_property("$device_id")
if(this.consent.reset(),null==(t=this.persistence)||t.clear(),null==(n=this.sessionPersistence)||n.clear(),this.surveys.reset(),this.featureFlags.reset(),null==(r=this.persistence)||r.set_property(Pt,"anonymous"),null==(i=this.sessionManager)||i.resetSessionId(),this._cachedPersonProperties=null,"always"===this.config.cookieless_mode)this.register_once({distinct_id:Ft,$device_id:null},"")
else{var o=this.config.get_device_id(An())
this.register_once({distinct_id:o,$device_id:e?o:s},"")}this.register({$last_posthog_reset:(new Date).toISOString()},1)}get_distinct_id(){return this.get_property("distinct_id")}getGroups(){return this.get_property("$groups")||{}}get_session_id(){var e,t
return null!==(e=null==(t=this.sessionManager)?void 0:t.checkAndGetSessionAndWindowId(!0).sessionId)&&void 0!==e?e:""}get_session_replay_url(e){if(!this.sessionManager)return""
var{sessionId:t,sessionStartTimestamp:n}=this.sessionManager.checkAndGetSessionAndWindowId(!0),r=this.requestRouter.endpointFor("ui","/project/"+this.config.token+"/replay/"+t)
if(null!=e&&e.withTimestamp&&n){var i,s=null!==(i=e.timestampLookBack)&&void 0!==i?i:10
if(!n)return r
r+="?t="+Math.max(Math.floor(((new Date).getTime()-n)/1e3)-s,0)}return r}alias(e,t){return e===this.get_property(Ke)?(Ae.critical("Attempting to create alias for existing People user - aborting."),-2):this._requirePersonProcessing("posthog.alias")?(U(t)&&(t=this.get_distinct_id()),e!==t?(this._register_single(Ye,e),this.capture("$create_alias",{alias:e,distinct_id:t})):(Ae.warn("alias matches current distinct_id - skipping api call."),this.identify(e),-1)):void 0}set_config(e){var t=p({},this.config)
if(q(e)){var n,r,i,s,o
Be(this.config,ya(e))
var a=this._is_persistence_disabled()
null==(n=this.persistence)||n.update_config(this.config,t,a),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new So(p({},this.config,{persistence:"sessionStorage"}),a),qn._is_supported()&&"true"===qn._get("ph_debug")&&(this.config.debug=!0),this.config.debug&&(L.DEBUG=!0,Ae.info("set_config",{config:e,oldConfig:t,newConfig:p({},this.config)})),null==(r=this.sessionRecording)||r.startIfEnabledOrStop(),null==(i=this.autocapture)||i.startIfEnabled(),null==(s=this.heatmaps)||s.startIfEnabled(),this.surveys.loadIfEnabled(),this._sync_opt_out_with_persistence(),null==(o=this.externalIntegrations)||o.startIfEnabledOrStop()}}startSessionRecording(e){var t,n,r,i,s,o=!0===e,a={sampling:o||!(null==e||!e.sampling),linked_flag:o||!(null==e||!e.linked_flag),url_trigger:o||!(null==e||!e.url_trigger),event_trigger:o||!(null==e||!e.event_trigger)}
Object.values(a).some(Boolean)&&(null==(t=this.sessionManager)||t.checkAndGetSessionAndWindowId(),a.sampling&&(null==(n=this.sessionRecording)||n.overrideSampling()),a.linked_flag&&(null==(r=this.sessionRecording)||r.overrideLinkedFlag()),a.url_trigger&&(null==(i=this.sessionRecording)||i.overrideTrigger("url")),a.event_trigger&&(null==(s=this.sessionRecording)||s.overrideTrigger("event")))
this.set_config({disable_session_recording:!1})}stopSessionRecording(){this.set_config({disable_session_recording:!0})}sessionRecordingStarted(){var e
return!(null==(e=this.sessionRecording)||!e.started)}captureException(e,t){var n=new Error("PostHog syntheticException"),r=this.exceptions.buildProperties(e,{handled:!0,syntheticException:n})
return this.exceptions.sendExceptionEvent(p({},r,t))}loadToolbar(e){return this.toolbar.loadToolbar(e)}get_property(e){var t
return null==(t=this.persistence)?void 0:t.props[e]}getSessionProperty(e){var t
return null==(t=this.sessionPersistence)?void 0:t.props[e]}toString(){var e,t=null!==(e=this.config.name)&&void 0!==e?e:va
return t!==va&&(t=va+"."+t),t}_isIdentified(){var e,t
return"identified"===(null==(e=this.persistence)?void 0:e.get_property(Pt))||"identified"===(null==(t=this.sessionPersistence)?void 0:t.get_property(Pt))}_hasPersonProcessing(){var e,t
return!("never"===this.config.person_profiles||"identified_only"===this.config.person_profiles&&!this._isIdentified()&&H(this.getGroups())&&(null==(e=this.persistence)||null==(e=e.props)||!e[Ye])&&(null==(t=this.persistence)||null==(t=t.props)||!t[Mt]))}_shouldCapturePageleave(){return!0===this.config.capture_pageleave||"if_capture_pageview"===this.config.capture_pageleave&&(!0===this.config.capture_pageview||"history_change"===this.config.capture_pageview)}createPersonProfile(){this._hasPersonProcessing()||this._requirePersonProcessing("posthog.createPersonProfile")&&this.setPersonProperties({},{})}_requirePersonProcessing(e){return"never"===this.config.person_profiles?(Ae.error(e+' was called, but process_person is set to "never". This call will be ignored.'),!1):(this._register_single(Mt,!0),!0)}_is_persistence_disabled(){if("always"===this.config.cookieless_mode)return!0
var e=this.consent.isOptedOut(),t=this.config.opt_out_persistence_by_default||"on_reject"===this.config.cookieless_mode
return this.config.disable_persistence||e&&!!t}_sync_opt_out_with_persistence(){var e,t,n,r,i=this._is_persistence_disabled()
return(null==(e=this.persistence)?void 0:e._disabled)!==i&&(null==(n=this.persistence)||n.set_disabled(i)),(null==(t=this.sessionPersistence)?void 0:t._disabled)!==i&&(null==(r=this.sessionPersistence)||r.set_disabled(i)),i}opt_in_capturing(e){var t
"always"!==this.config.cookieless_mode?("on_reject"===this.config.cookieless_mode&&this.consent.isExplicitlyOptedOut()&&(this.reset(!0),this.sessionManager=new Ko(this),this.persistence&&(this.sessionPropsManager=new Qo(this,this.sessionManager,this.persistence)),this.sessionRecording=new Ei(this),this.sessionRecording.startIfEnabledOrStop()),this.consent.optInOut(!0),this._sync_opt_out_with_persistence(),"on_reject"==this.config.cookieless_mode&&this.surveys.loadIfEnabled(),(U(null==e?void 0:e.captureEventName)||null!=e&&e.captureEventName)&&this.capture(null!==(t=null==e?void 0:e.captureEventName)&&void 0!==t?t:"$opt_in",null==e?void 0:e.captureProperties,{send_instantly:!0}),this.config.capture_pageview&&this._captureInitialPageview()):Ae.warn('Consent opt in/out is not valid with cookieless_mode="always" and will be ignored')}opt_out_capturing(){var e
"always"!==this.config.cookieless_mode?("on_reject"===this.config.cookieless_mode&&this.consent.isOptedIn()&&this.reset(!0),this.consent.optInOut(!1),this._sync_opt_out_with_persistence(),"on_reject"===this.config.cookieless_mode&&(this.register({distinct_id:Ft,$device_id:null}),this.sessionManager=void 0,this.sessionPropsManager=void 0,null==(e=this.sessionRecording)||e.stopRecording(),this.sessionRecording=void 0,this._captureInitialPageview())):Ae.warn('Consent opt in/out is not valid with cookieless_mode="always" and will be ignored')}has_opted_in_capturing(){return this.consent.isOptedIn()}has_opted_out_capturing(){return this.consent.isOptedOut()}get_explicit_consent_status(){var e=this.consent.consent
return e===Qn.GRANTED?"granted":e===Qn.DENIED?"denied":"pending"}is_capturing(){return"always"===this.config.cookieless_mode||("on_reject"===this.config.cookieless_mode?this.consent.isExplicitlyOptedOut()||this.consent.isOptedIn():!this.has_opted_out_capturing())}clear_opt_in_out_capturing(){this.consent.reset(),this._sync_opt_out_with_persistence()}_is_bot(){return w?na(w,this.config.custom_blocked_useragents):void 0}_captureInitialPageview(){k&&("visible"===k.visibilityState?this._initialPageviewCaptured||(this._initialPageviewCaptured=!0,this.capture("$pageview",{title:k.title},{send_instantly:!0}),this._visibilityStateListener&&(k.removeEventListener("visibilitychange",this._visibilityStateListener),this._visibilityStateListener=null)):this._visibilityStateListener||(this._visibilityStateListener=this._captureInitialPageview.bind(this),Je(k,"visibilitychange",this._visibilityStateListener)))}debug(e){!1===e?(null==v||v.console.log("You've disabled debug mode."),localStorage&&localStorage.removeItem("ph_debug"),this.set_config({debug:!1})):(null==v||v.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),localStorage&&localStorage.setItem("ph_debug","true"),this.set_config({debug:!0}))}_shouldDisableFlags(){var e,t,n,r,i,s,o=this._originalUserConfig||{}
return"advanced_disable_flags"in o?!!o.advanced_disable_flags:!1!==this.config.advanced_disable_flags?!!this.config.advanced_disable_flags:!0===this.config.advanced_disable_decide?(Ae.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."),!0):(n="advanced_disable_decide",r=Ae,i=(t="advanced_disable_flags")in(e=o)&&!U(e[t]),s=n in e&&!U(e[n]),i?e[t]:!!s&&(r&&r.warn("Config field '"+n+"' is deprecated. Please use '"+t+"' instead. The old field will be removed in a future major version."),e[n]))}_runBeforeSend(e){if(V(this.config.before_send))return e
var t=D(this.config.before_send)?this.config.before_send:[this.config.before_send],n=e
for(var r of t){if(n=r(n),V(n)){var i="Event '"+e.event+"' was rejected in beforeSend function"
return K(e.event)?Ae.warn(i+". This can cause unexpected behavior."):Ae.info(i),null}n.properties&&!H(n.properties)||Ae.warn("Event '"+e.event+"' has no properties after beforeSend function, this is likely an error.")}return n}getPageViewId(){var e
return null==(e=this.pageViewManager._currentPageview)?void 0:e.pageViewId}captureTraceFeedback(e,t){this.capture("$ai_feedback",{$ai_trace_id:String(e),$ai_feedback_text:t})}captureTraceMetric(e,t,n){this.capture("$ai_metric",{$ai_trace_id:String(e),$ai_metric_name:t,$ai_metric_value:String(n)})}}!function(e,t){for(var n=0;n<t.length;n++)e.prototype[t[n]]=Ge(e.prototype[t[n]])}(wa,["identify"])
var ka,Sa=(ka=pa[va]=new wa,function(){function e(){e.done||(e.done=!0,_a=!1,De(pa,function(e){e._dom_loaded()}))}null!=k&&k.addEventListener?"complete"===k.readyState?e():Je(k,"DOMContentLoaded",e,{capture:!1}):v&&Ae.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")}(),ka)
function xa(...e){console.log(...e)}function Ea(e,t){Sa.capture(e,t)}function Ca(){"string"==typeof window.self&&(s(),window.self=window),function(){try{Sa.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N",{advanced_disable_decide:!0,advanced_disable_feature_flags:!0,advanced_disable_feature_flags_on_first_load:!0,advanced_disable_toolbar_metrics:!0,api_host:"https://us.i.posthog.com",autocapture:!1,capture_pageview:!1,disable_compression:!1,disable_persistence:!0,disable_session_recording:!0,disable_surveys:!0,person_profiles:"identified_only"})}catch(e){xa(e)}}()}let Ta=0,Pa=0,La=0,$a=0,Ia=0,Ra=0,Oa=0
const Ma=()=>Date.now(),Aa=()=>Math.floor(Ma()/1e3)
function Fa(){return Ta||(Ta=Ma()),Ta}function ja(){return Pa||(Pa=Fa()-3e5),Pa}function Na(){return La||(La=Fa()-1728e5),La}function Da(){return $a||($a=Math.floor(Fa()/1e3)),$a}function Ba(){return Ia||(Ia=Da()-120),Ia}function qa(){return Ra||(Ra=Da()-86400),Ra}function Ha(){return Oa||(Oa=Da()-604800),Oa}function Ua(e){return null===e}function Ga(e){return void 0===e}const Wa=`${document.location.protocol}//${document.location.host}/`,za=window.HCS?.defines?.cdn,Va=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],Qa=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],Ja=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ka=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,Ya=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,Xa=/guild_id=(?<guildId>\d+)/,Za=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,el=/player_id=(?<playerId>\d+)/,tl=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,nl=/VL:.+?(?<vl>\d+)/,rl=/creatures\/(\d+)[A-Za-z0-9]{32}\.png/,il=.2,sl="joinallgroupsundersize",ol="index.php",al="?cmd=",ll=`${ol}${al}`,cl="&subcmd=",ul="&target_username=",dl=`${ll}auctionhouse`,fl=`${dl}&search=`,hl=`${ll}log`,pl=`${ll}ignore${cl}add&ignore_username=`,gl=`${ll}profile`,vl=`${gl}&player_id=`,_l=`${gl}${cl}dropitems`,ml=`${ll}trade&target_player=`,yl=`${ll}trade${cl}createsecure${ul}`,bl=`${ll}arena${cl}`,wl=`${ol}${`${al}notepad&blank=1${cl}`}`,kl=`${wl}auctionsearch`,Sl=`${ll}points`,xl=`${ll}guild${cl}`,El=`${xl}log`,Cl=`${xl}scouttower`,Tl=`${xl}groups&subcmd2=`,Pl=`${xl}inventory&subcmd2=report&user=`,Ll=`${xl}view&guild_id=`,$l=`${Tl}joinall`,Il=`${Tl}${sl}`,Rl=`${ll}world`,Ol=`${ll}findplayer`,Ml=`${Ol}&search_show_first=1&search_username=`,Al=`${ll}blacksmith`,Fl=`${ll}quickbuff`,jl=`${ll}composing`,Nl=`${ll}attackplayer${ul}`,Dl=`${ll}${cl}viewupdatearchive`,Bl=`${ll}${cl}viewarchive`,ql=`${ll}bounty`,Hl=`${ll}inventing${cl}viewrecipe&recipe_id=`,Ul=`https://guide.fallensword.com/${ll}`,Gl="after-update.actionlist",Wl="buffs.player",zl="update.player",Vl="level.stats-player",Ql="gold.stats-player",Jl="prompt.worldDialogShop",Kl="keydown.controls",Yl="update.realm",Xl="-success.action-response",Zl=`-1${Xl}`,ec=`1${Xl}`,tc=`2${Xl}`,nc=`9${Xl}`,rc=`5${Xl}`,ic=`25${Xl}`,sc=2,oc=16,ac=128,lc=256,cc="needToCompose",uc="lastComposeCheck",dc="characterVirtualLevel",fc="enableGuildActivityTracker",hc="lastLadderReset",pc="form",gc="table",vc="td",_c="fsh_buffLog",mc="stat-level",yc="stat-defense",bc="stat-attack",wc="stat-damage",kc="stat-armor",Sc="stat-hp",xc="stat-vl",Ec="GM_",Cc=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],Tc=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],Pc=`${za}ui/world/action_spinner.gif`,Lc=".fa-envelope",$c='a[href*="&player_id="]',Ic=.002,Rc=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],Oc='input[name="blockedSkillList[]"]'
var Mc={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252",compactRanks:!1,lastModalGuildLogCheck:0,dailyQuestReRoll:!1}
const Ac=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function Fc(e,t){const n=window.localStorage.getItem(Ec+e)
return Ua(n)||Ga(n)?t:function(e){const t=Ac.find(t=>e.startsWith(t[0]))
return t?t[1](e):e}(n)}function jc(e){return Fc(e,Mc[e])}function Nc(e){return"boolean"==typeof e}function Dc(e){return"string"==typeof e}function Bc(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(Ec+e,t+n)}const qc=[[Dc,(e,t)=>{Bc(e,"S]",t)}],[e=>"number"==typeof e,(e,t)=>{t.toString().indexOf(".")<0&&Bc(e,"N]",t)}],[Nc,(e,t)=>{Bc(e,"B]",t)}]]
function Hc(e,t){const n=qc.find(e=>e[0](t))
n&&n[1](e,t)}function Uc(e){const t=`screenview__${e}`,n=jc(t)
Number.isFinite(n)&&n>qa()||(Ea(t),Hc(t,Da()))}function Gc(e){return"function"==typeof e}function Wc(e){return"object"==typeof e}function zc(e,t){try{return JSON.parse(e,t)}catch(e){}}function Vc(e,t){return t?t.querySelector(e):document.querySelector(e)}function Qc(e){const t=Vc("link",document.body)
return new Promise(n=>{const r=document.createElement("link")
r.type="text/css",r.rel="stylesheet",r.onload=()=>{n()},r.href=e,t?t.before(r):document.body.append(r)})}var Jc="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function Kc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yc,Xc={exports:{}}
var Zc=(Yc||(Yc=1,Xc.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==Jc?Jc:"undefined"!=typeof self?self:{}
function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){var t=e.default
if("function"==typeof t){var n=function(){return t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(t){var r=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}),n}var r={},i={},s={},o={},a="<unknown>"
function l(e){return e.split("\n").reduce(function(e,t){var n=d(t)||h(t)||v(t)||b(t)||m(t)
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
return n}return[]}function v(e,t){return s(this,void 0,void 0,function(){var n,r,i,s
return o(this,function(o){switch(o.label){case 0:if(n=[],!t||!e||!e.length)return[2,n]
r=0,o.label=1
case 1:return e.length?(i=e.splice(0)[r],[4,t(i.file)]):[3,3]
case 2:return s=o.sent(),n[r]=q(s,i.number,i.column,2),r++,[3,1]
case 3:return[2,n]}})})}function _(e,t){for(var n=[],r=!0,i=0,s=t.length;i<s;i++){var o=(0,t[i])(e)
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
e[t]=n(r),e[t].__hb_original=r}catch(e){}}t.merge=l,t.mergeNotice=c,t.objectIsEmpty=u,t.objectIsExtensible=d,t.makeBacktrace=f,t.DEFAULT_BACKTRACE_SHIFT=3,t.calculateBacktraceShift=p,t.getCauses=g,t.getSourceForBacktrace=v,t.runBeforeNotifyHandlers=_,t.runAfterNotifyHandlers=m,t.shallowClone=y,t.sanitize=b,t.logger=k,t.makeNotice=S,t.isErrorObject=x,t.instrument=E
var C=!1,T=[]
function P(e,t){e&&e.console&&t&&(T.push(t),C||(C=!0,["debug","info","warn","error","log"].forEach(function(t){E(e.console,t,function(n){return function(){var r=Array.prototype.slice.call(arguments)
T.forEach(function(e){try{e(t,r)}catch(e){}}),"function"==typeof n&&Function.prototype.apply.call(n,e.console,arguments)}})})))}function L(e,t){var n=e.trim().replace(/\/$/,"")
return t=t.trim().replace(/(^\/|\/$)/g,""),"".concat(n,"/").concat(t)}function $(){try{throw new Error("")}catch(e){if(e.stack)return e.stack}for(var e=10,t=[],n=arguments.callee;n&&t.length<e;){/function(?:\s+([\w$]+))+\s*\(/.test(n.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>")
try{n=n.caller}catch(e){break}}return t.join("\n")}function I(e,t){if(O("Object",e)){O("Array",t)||(t=[])
var n=[]
return r(e)}function r(e){var i,s
if(O("Object",e)||O("Array",e)){if(-1!==n.indexOf(e))return"[CIRCULAR DATA STRUCTURE]"
n.push(e)}if(O("Object",e)){for(i in s={},e)R(i,t)?s[i]="[FILTERED]":s[i]=r(e[i])
return s}return O("Array",e)?e.map(function(e){return r(e)}):O("Function",e)?"[FUNC]":e}}function R(e,t){for(var n=0;n<t.length;n++)if(-1!==e.toLowerCase().indexOf(t[n].toLowerCase()))return!0
return!1}function O(e,t){var n=Object.prototype.toString.call(t).slice(8,-1)
return null!=t&&n===e}function M(e,t){if(!t)return e
if("string"!=typeof e)return e
var n=e.split(/\?/,2)[1]
if(!n)return e
var r=e
return n.split(/[&]\s?/).forEach(function(e){var n=e.split("=",2),i=n[0],s=n[1]
R(i,t)&&(r=r.replace("".concat(i,"=").concat(s),"".concat(i,"=[FILTERED]")))}),r}function A(e,t){void 0===t&&(t="")
var n={}
return Object.keys(e).forEach(function(r){var i=t+r.replace(/\W/g,"_").toUpperCase()
n[i]=e[r]}),n}function F(e){return JSON.parse(JSON.stringify(e))}t.instrumentConsole=P,t.endpoint=L,t.generateStackTrace=$,t.filter=I,t.filterUrl=M,t.formatCGIData=A,t.clone=F
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
class L{static parse(e){return e.trim().split("\n").map(e=>JSON.parse(e))}static stringify(e){return e.map(e=>JSON.stringify(e)).join("\n")}}var $=Object.freeze({__proto__:null,NdJson:L}),I=n($),R={}
Object.defineProperty(R,"__esModule",{value:!0}),R.CONFIG=void 0,R.CONFIG={apiKey:null,endpoint:"https://api.honeybadger.io",appEndpoint:"https://app.honeybadger.io",environment:null,hostname:null,projectRoot:null,component:null,action:null,revision:null,reportData:null,breadcrumbsEnabled:!0,eventsEnabled:!1,maxBreadcrumbs:40,maxObjectDepth:8,logger:console,developmentEnvironments:["dev","development","test"],debug:!1,tags:null,enableUncaught:!0,enableUnhandledRejection:!0,afterUncaught:function(){return!0},filters:["creditcard","password"],__plugins:[]}
var O=e&&e.__assign||function(){return O=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},O.apply(this,arguments)},M=e&&e.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):i(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())})},A=e&&e.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1]
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
var F=I,j=o,N=R,D=function(){function e(e,t){this.config=e,this.transport=t,this.queue=[],this.isProcessing=!1,this.config=O(O({},N.CONFIG),e),this.logger=this.originalLogger()}return e.prototype.configure=function(e){for(var t in e)this.config[t]=e[t]},e.prototype.log=function(e){this.queue.push(e),this.isProcessing||this.processQueue()},e.prototype.flushAsync=function(){return this.logger.debug("[Honeybadger] Flushing events"),this.send()},e.prototype.processQueue=function(){var e=this
0===this.queue.length||this.isProcessing||(this.isProcessing=!0,this.send().then(function(){setTimeout(function(){e.isProcessing=!1,e.processQueue()},50)}).catch(function(t){e.logger.error("[Honeybadger] Error making HTTP request:",t),setTimeout(function(){e.isProcessing=!1,e.processQueue()},50)}))},e.prototype.send=function(){return M(this,void 0,void 0,function(){var e,t
return A(this,function(n){return 0===this.queue.length?[2]:(e=this.queue.slice(),this.queue=[],t=F.NdJson.stringify(e),[2,this.makeHttpRequest(t)])})})},e.prototype.makeHttpRequest=function(e){return M(this,void 0,void 0,function(){var t=this
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
var U=o,G=E,W=P,z=R,V=/,|\s+/,Q=/\S/,J=function(){function e(e,t){void 0===e&&(e={}),this.__pluginsLoaded=!1,this.__store=null,this.__beforeNotifyHandlers=[],this.__afterNotifyHandlers=[],this.__notifier={name:"@honeybadger-io/core",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",version:"6.12.2"},this.config=B(B({},z.CONFIG),e),this.__initStore(),this.__transport=t,this.__eventsLogger=new W.ThrottledEventsLogger(this.config,this.__transport),this.logger=(0,U.logger)(this)}return e.prototype.getVersion=function(){return this.__notifier.version},e.prototype.getNotifier=function(){return this.__notifier},e.prototype.setNotifier=function(e){this.__notifier=e},e.prototype.configure=function(e){for(var t in void 0===e&&(e={}),e)this.config[t]=e[t]
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
var r=JSON.parse(t.body).id;(0,U.runAfterNotifyHandlers)((0,U.merge)(e,{id:r}),n.__afterNotifyHandlers)
var i=(0,U.endpoint)(n.config.appEndpoint,"notice/".concat(r))
return n.logger.info("Error report sent ⚡ ".concat(i)),!0}).catch(function(t){return n.logger.error("Error report failed: an unknown error occurred.","message=".concat(t.message)),(0,U.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,t),!1})},e}()
x.Client=J
var K={}
Object.defineProperty(K,"__esModule",{value:!0}),function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n)
var i=Object.getOwnPropertyDescriptor(t,n)
i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e&&e.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},a=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i)
return r(t,e),t},l=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Plugins=t.Defaults=t.Util=t.Types=t.Client=void 0
var c=l(s),u=x
Object.defineProperty(t,"Client",{enumerable:!0,get:function(){return u.Client}}),i(E,t),t.Types=a(K),t.Util=a(o),t.Defaults=a(R),t.Plugins={events:c.default}}(i)
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
var Ee=i,Ce=Y,Te=Ee.Util.sanitize,Pe=Ee.Util.instrument,Le=Ee.Util.instrumentConsole,$e=Ee.Util.globalThisOrWindow
function Ie(e){return void 0===e&&(e=$e()),{load:function(t){function n(e){return!0===t.config.breadcrumbsEnabled||(e?!0===t.config.breadcrumbsEnabled[e]:!1!==t.config.breadcrumbsEnabled)}!function(){function r(e){return Array.isArray(e)?e.map(function(e){try{return String(e)}catch(e){return"[unknown]"}}).join(" "):""}n("console")&&Le(e,function(e,n){var i=r(n),s={category:"log",metadata:{level:e,arguments:Te(n,3)}}
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
var Re={}
Object.defineProperty(Re,"__esModule",{value:!0})
var Oe=i,Me=Oe.Util.instrument,Ae=Oe.Util.globalThisOrWindow
function Fe(e){return void 0===e&&(e=Ae()),{load:function(t){!function(){function n(e){return function(n){return function(r,i){if("function"==typeof r){var s=Array.prototype.slice.call(arguments,2)
return r=t.__wrap(r,e),n(function(){r.apply(void 0,s)},i)}return n(r,i)}}}Me(e,"setTimeout",n({component:"setTimeout"})),Me(e,"setInterval",n({component:"setInterval"}))}()}}}Re.default=Fe
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
var c=i,u=Y,d=ue,f=l(ye),h=l(xe),p=l(Re),g=l(je),v=He,_=Ke,m=c.Util.merge,y=c.Util.filter,b=c.Util.objectIsExtensible,w=c.Util.globalThisOrWindow,k=function(){var e=w(),t=""
return null!=e.location&&(t=e.location.protocol+"//"+e.location.host),t},S=function(e){var t=e.split(".").slice(0,2).join(".")
return"https://js.honeybadger.io/v".concat(t,"/honeybadger-feedback-form.js")}
t.getUserFeedbackScriptUrl=S
var x=function(e){function n(t){void 0===t&&(t={})
var n=e.call(this,s({userFeedbackEndpoint:"https://api.honeybadger.io/v2/feedback",async:!0,maxErrors:null,projectRoot:k()},t),new v.BrowserTransport({"User-Agent":C()}))||this
return n.__errorsSent=0,n.__lastWrapErr=void 0,n.__lastNoticeId=void 0,n.__beforeNotifyHandlers=[function(e){return n.__exceedsMaxErrors()?(n.logger.debug("Dropping notice: max errors exceeded",e),!1):(e&&!e.url&&"undefined"!=typeof document&&(e.url=document.URL),n.__incrementErrorsCount(),!0)}],n.__afterNotifyHandlers=[function(e,t){t&&(n.__lastNoticeId=t.id)}],n}return r(n,e),n.prototype.configure=function(t){return void 0===t&&(t={}),e.prototype.configure.call(this,t)},n.prototype.resetMaxErrors=function(){return this.__errorsSent=0},n.prototype.factory=function(e){var t=new n(e)
return t.setNotifier(this.getNotifier()),t},n.prototype.checkIn=function(e){throw new Error("Honeybadger.checkIn() is not supported on the browser")},n.prototype.showUserFeedbackForm=function(e){return void 0===e&&(e={}),o(this,void 0,void 0,function(){return a(this,function(t){return new _.BrowserFeedbackForm(this.config,this.logger,this.getUserFeedbackSubmitUrl()).show(this.__lastNoticeId,e),[2]})})},n.prototype.getUserFeedbackSubmitUrl=function(){return(0,t.getUserFeedbackScriptUrl)(this.getVersion())},n.prototype.__buildPayload=function(t){var n,r={HTTP_USER_AGENT:void 0,HTTP_REFERER:void 0,HTTP_COOKIE:void 0}
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
throw r.__lastWrapErr=e,(0,d.ignoreNextOnError)(),r.addBreadcrumb(t.component?"".concat(t.component,": ").concat(e.name):e.name,{category:"error",metadata:{message:e.message,name:e.name,stack:e.stack}}),r.config.enableUncaught&&r.notify(e),e}}}return n.___hb.___hb=n.___hb,n.___hb}catch(e){return n}},n.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},n.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},n}(c.Client),E={name:"@honeybadger-io/js",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",version:"6.12.2"},C=function(){return"undefined"!=typeof navigator?"Honeybadger JS Browser Client ".concat(E.version,"; ").concat(navigator.userAgent):"Honeybadger JS Browser Client ".concat(E.version,"; n/a; n/a")},T=new x({__plugins:[(0,d.onError)(),(0,f.default)(),(0,p.default)(),(0,g.default)(),(0,h.default)(),c.Plugins.events()]})
T.setNotifier(E)
var P=i
Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return P.Types}}),t.default=T}(r)
var et=t(r)
return et}()),Xc.exports),eu=Kc(Zc)
const tu=["attackplayer.min.js","Auction-House-Monitor.user.js","Cocaine.user.js","Compra-%2526-Venda-de-Recursos-%25E2%259C%2585.user.js","cross-origin frame","Daily-Quest-Auto-Hunter-All-Creatures-%252B-SE-Searcher-Movement.user.js","Discord-Message-Checks-for-Updates.user.js","dynamically imported module","Fallen-Sword-Auto-Invent.user.js","Fallen-Sword-Auto-Skill-Caster.user.js","Fallen-Sword-Champion-and-Super-Elite-Alert.user.js","Fallen-Sword-Message-Alert.user.js","Fallen-Sword-Super-Elite-%2526-Crate-Notifier.user.js","Fallen-Sword-Super-Elite-Notifier.user.js","Fallen-Sword-Win%252FLoss-Checker-with-Buffs-and-Buff-Levels.user.js","Fallen-Sword-Win%252FLoss-Checker.user.js","Fallensword-GvG-Target-Checker-with-Button-and-Buff-Check.user.js","Fetch-Auction-and-Send-to-Discord.user.js","FS-%E2%80%93-Auto-Explore-visible-per-step-movement","FS-%E2%80%93-Inline-Combat-Sets-Fast%2C-Correct-CSS-on-Tournament-Page.user.js","FS-Fixer.user.js","fs.min.js","FSH1.user.js","Gold-alert.user.js","GVG-and-Relics-Notifications.user.js","GvG-Initiate-Enhanced.user.js","GvG-List-v2.user.js","GvG-Name-Only.user.js","GVG%252FRelics-Discord.user.js","GVG%252FRelics-Notifications.user.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","League-of-Legends.user.js","MetaMask","New-Userscript.user.js","News.user.js","openuserjs.org","out of memory","Permission denied to access object","play method is not allowed","Quick-Kill.user.js","SE-Searcher-Replay-Fix.user.js","se-searcher-v2-draft.user.js","Superelite-searcher.user.js","Titan-3.0.user.js","Titan-Quick-Kill.user.js","UFSG-dodatki.user.js","UnhandledPromiseRejectionWarning: 404","world.min.js","(reading '$$')"],nu=e=>Dc(e)&&tu.some(t=>e.includes(t))
function ru(e){if(nu(e.message)||nu(e.stack))return!1}function iu(){!function(){eu.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.158"})
const e=s()
e&&eu.setContext({user_id:e}),eu.afterNotify(e=>{if(e)return xa(`Honeybadger notification failed: ${e}`)}),eu.beforeNotify(ru)}()}function su(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class ou extends Error{constructor([e,t,n,r],...i){super(function(e,t,n,r){const i=`${t.status} ${t.statusText} - `
if(t.statusText===r.toString())return i+su(e)
const s=`${i+n} ${r} - ${su(e)}`
return"parsererror"===n?`${s} - ${t.responseText}`:s}(e,t,n,r),...i),Error.captureStackTrace&&Error.captureStackTrace(this,ou),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=r}}function au(e,t,n,r){e instanceof EventTarget&&e.addEventListener(t,n,r)}function lu(e,t,n){return JSON.stringify(e,t,n)}function cu(e){jc("betaOptIn")&&xa("sendException",e),eu.notify(e,"sendException")}var uu={}
function du(e){return Array.isArray(e)}function fu(e,t){return e||t}const hu=[null]
function pu(e,t){return hu[e]&&hu[e].priority<hu[t].priority}function gu(e,t){const n=hu[e]
hu[e]=hu[t],hu[t]=n}function vu(e,t){return e?2*t:2*t+1}function _u(){if(1===hu.length)return
const e=hu[1].data,t=hu.pop()
return hu.length>1&&(hu[1]=t,function(e){let t=e
for(;2*t<hu.length;){const e=vu(!pu(2*t+1,2*t),t)
if(pu(t,e))break
gu(t,e),t=e}}(1)),e}function mu(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!pu(t,e))break
gu(t,e),t=e}}(hu.push({data:e,priority:t})-1)}let yu=!0
const bu="fshMessage"
let wu=0
function ku(){hu.length-1==0?yu=!0:(yu=!1,window.postMessage(bu,window.location.origin))}function Su(){const e=_u()
Gc(e)?e():function(e){Ga(e)||cu(`pop() was not a function (${typeof e})`)}(e)}function xu(e){const t=e.data
e.origin===window.location.origin&&t===bu&&function(){try{Su()}catch(e){eu.notify(e,"taskFailure")}finally{ku()}}()}function Eu(e,t,n,r){if(Gc(t)){wu||(au(window,"message",xu),wu=!0)
const i=fu(r,window),s=fu(n,[])
mu(t.bind(i,...s),e),yu&&ku()}}function Cu(e,t){return new URLSearchParams(e).get(t)}function Tu(e){try{return Cu(decodeURIComponent(window.location.search),e)}catch(e){return xa(e),""}}var Pu=!1,Lu=Array.isArray,$u=Array.prototype.indexOf,Iu=Array.from,Ru=Object.defineProperty,Ou=Object.getOwnPropertyDescriptor,Mu=Object.getOwnPropertyDescriptors,Au=Object.prototype,Fu=Array.prototype,ju=Object.getPrototypeOf,Nu=Object.isExtensible
function Du(e){return"function"==typeof e}const Bu=()=>{}
function qu(e){return e()}function Hu(e){for(var t=0;t<e.length;t++)e[t]()}function Uu(e,t){if(Array.isArray(e))return e
if(void 0===t||!(Symbol.iterator in e))return Array.from(e)
const n=[]
for(const r of e)if(n.push(r),n.length===t)break
return n}const Gu=16,Wu=32,zu=64,Vu=256,Qu=512,Ju=1024,Ku=2048,Yu=4096,Xu=8192,Zu=16384,ed=32768,td=65536,nd=1<<17,rd=1<<19,id=1<<21,sd=1<<22,od=1<<23,ad=Symbol("$state"),ld=Symbol("legacy props"),cd=Symbol(""),ud=new class extends Error{name="StaleReactionError"
message="The reaction that called `getAbortSignal()` was re-run or destroyed"}
function dd(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const fd=Symbol()
function hd(e){return e===this.v}function pd(e,t){return e!=e?t==t:e!==t||null!==e&&"object"==typeof e||"function"==typeof e}function gd(e){return!pd(e,this.v)}let vd=!1
const _d=[]
function md(e,t=!1,n=!1){return yd(e,new Map,"",_d,null,n)}function yd(e,t,n,r,i=null,s=!1){if("object"==typeof e&&null!==e){var o=t.get(e)
if(void 0!==o)return o
if(e instanceof Map)return new Map(e)
if(e instanceof Set)return new Set(e)
if(Lu(e)){var a=Array(e.length)
t.set(e,a),null!==i&&t.set(i,a)
for(var l=0;l<e.length;l+=1){var c=e[l]
l in e&&(a[l]=yd(c,t,n,r,null,s))}return a}if(ju(e)===Au){for(var u in a={},t.set(e,a),null!==i&&t.set(i,a),e)a[u]=yd(e[u],t,n,r,null,s)
return a}if(e instanceof Date)return structuredClone(e)
if("function"==typeof e.toJSON&&!s)return yd(e.toJSON(),t,n,r,e)}if(e instanceof EventTarget)return e
try{return structuredClone(e)}catch(t){return e}}let bd=null
function wd(e){bd=e}function kd(e,t=!1,n){bd={p:bd,c:null,e:null,s:e,x:null,l:vd&&!t?{s:null,u:null,$:[]}:null}}function Sd(e){var t=bd,n=t.e
if(null!==n)for(var r of(t.e=null,n))Af(r)
return void 0!==e&&(t.x=e),bd=t.p,e??{}}function xd(){return!vd||null!==bd&&null===bd.l}let Ed=[],Cd=[]
function Td(){var e=Ed
Ed=[],Hu(e)}function Pd(){return Ed.length>0||Cd.length>0}function Ld(e){if(0===Ed.length&&!Hd){var t=Ed
queueMicrotask(()=>{t===Ed&&Td()})}Ed.push(e)}function $d(){var e
Ed.length>0&&Td(),Cd.length>0&&(e=Cd,Cd=[],Hu(e))}const Id=new WeakMap
function Rd(e){var t=ih
if(null===t)return th.f|=od,e
if(0===(t.f&ed)){if(!(128&t.f))throw!t.parent&&e instanceof Error&&Md(e),e
t.b.error(e)}else Od(e,t)}function Od(e,t){for(;null!==t;){if(128&t.f)try{return void t.b.error(e)}catch(t){e=t}t=t.parent}throw e instanceof Error&&Md(e),e}function Md(e){const t=Id.get(e)
t&&(Ru(e,"message",{value:t.message}),Ru(e,"stack",{value:t.stack}))}const Ad=new Set
let Fd=null,jd=null,Nd=new Set,Dd=[],Bd=null,qd=!1,Hd=!1
class Ud{current=new Map
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
process(e){Dd=[],jd=null
for(const t of e)this.#f(t)
if(0===this.#s.length&&0===this.#n){this.#h()
var t=this.#a,n=this.#l
this.#a=[],this.#l=[],this.#c=[],jd=Fd,Fd=null,Qd(t),Qd(n),null===Fd?Fd=this:Ad.delete(this),this.#r?.resolve()}else this.#p(this.#a),this.#p(this.#l),this.#p(this.#c)
for(const e of this.#s)kh(e)
for(const e of this.#o)kh(e)
this.#s=[],this.#o=[]}#f(e){e.f^=Ju
for(var t=e.first;null!==t;){var n=t.f,r=!!(96&n)
if(!(r&&0!==(n&Ju)||0!==(n&Xu)||this.skipped_effects.has(t))&&null!==t.fn){if(r)t.f^=Ju
else if(4&n)this.#l.push(t)
else if(0===(n&Ju)){if(0!==(n&sd))(t.b?.is_pending()?this.#o:this.#s).push(t)
else _h(t)&&(0!==(t.f&Gu)&&this.#c.push(t),kh(t))}var i=t.first
if(null!==i){t=i
continue}}var s=t.parent
for(t=t.next;null===t&&null!==s;)t=s.next,s=s.parent}}#p(e){for(const t of e){(0!==(t.f&Ku)?this.#u:this.#d).push(t),Ph(t,Ju)}e.length=0}capture(e,t){this.#e.has(e)||this.#e.set(e,t),this.current.set(e,e.v)}activate(){Fd=this}deactivate(){Fd=null,jd=null
for(const e of Nd)if(Nd.delete(e),e(),null!==Fd)break}neuter(){this.#i=!0}flush(){Dd.length>0?Wd():this.#h(),Fd===this&&(0===this.#n&&Ad.delete(this),this.deactivate())}#h(){if(!this.#i)for(const e of this.#t)e()
this.#t.clear()}increment(){this.#n+=1}decrement(){if(this.#n-=1,0===this.#n){for(const e of this.#u)Ph(e,Ku),Jd(e)
for(const e of this.#d)Ph(e,Yu),Jd(e)
this.#a=[],this.#l=[],this.flush()}else this.deactivate()}add_callback(e){this.#t.add(e)}settled(){return(this.#r??={promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}).promise
var e,t}static ensure(){if(null===Fd){const e=Fd=new Ud
Ad.add(Fd),Hd||Ud.enqueue(()=>{Fd===e&&e.flush()})}return Fd}static enqueue(e){Ld(e)}}function Gd(e){var t=Hd
Hd=!0
try{for(;;){if($d(),0===Dd.length&&!Pd()&&(Fd?.flush(),0===Dd.length))return void(Bd=null)
Wd()}}finally{Hd=t}}function Wd(){var e=Yf
qd=!0
try{var t=0
for(Xf(!0);Dd.length>0;){var n=Ud.ensure()
if(t++>1e3)Pu,zd()
n.process(Dd),af.clear()}}finally{qd=!1,Xf(e),Bd=null}}function zd(){try{!function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}()}catch(e){Od(e,Bd)}}let Vd=null
function Qd(e){var t=e.length
if(0!==t){for(var n=0;n<t;){var r=e[n++]
if(!(24576&r.f)&&_h(r)&&(Vd=[],kh(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown&&null===r.ac?Wf(r):r.fn=null),Vd?.length>0)){af.clear()
for(const e of Vd)kh(e)
Vd=[]}}Vd=null}}function Jd(e){for(var t=Bd=e;null!==t.parent;){var n=(t=t.parent).f
if(qd&&t===ih&&0!==(n&Gu))return
if(96&n){if(0===(n&Ju))return
t.f^=Ju}}Dd.push(t)}function Kd(e){let t,n=0,r=lf(0)
return()=>{null===th||nh||(xh(r),jf(()=>(0===n&&(t=Ch(()=>e(()=>hf(r)))),n+=1,()=>{Ld(()=>{n-=1,0===n&&(t?.(),t=void 0,hf(r))})})))}}class Yd{parent
#n=!1
#g
#v=null
#_
#m
#y
#b=null
#w=null
#k=null
#S=null
#x=0
#E=0
#C=!1
#T=null
#P=()=>{this.#T&&ff(this.#T,this.#x)}
#L=Kd(()=>(this.#T=lf(this.#x),()=>{this.#T=null}))
constructor(e,t,n){this.#g=e,this.#_=t,this.#m=n,this.parent=ih.b,this.#n=!!this.#_.pending,this.#y=Df(()=>{ih.b=this
try{this.#b=Bf(()=>n(this.#g))}catch(e){this.error(e)}this.#E>0?this.#$():this.#n=!1},589952)}#I(){try{this.#b=Bf(()=>this.#m(this.#g))}catch(e){this.error(e)}this.#n=!1}#R(){const e=this.#_.pending
e&&(this.#w=Bf(()=>e(this.#g)),Ud.enqueue(()=>{this.#b=this.#O(()=>(Ud.ensure(),Bf(()=>this.#m(this.#g)))),this.#E>0?this.#$():(zf(this.#w,()=>{this.#w=null}),this.#n=!1)}))}is_pending(){return this.#n||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#_.pending}#O(e){var t=ih,n=th,r=bd
sh(this.#y),rh(this.#y),wd(this.#y.ctx)
try{return e()}catch(e){return Rd(e),null}finally{sh(t),rh(n),wd(r)}}#$(){const e=this.#_.pending
null!==this.#b&&(this.#S=document.createDocumentFragment(),function(e,t){var n=e.nodes_start,r=e.nodes_end
for(;null!==n;){var i=n===r?null:xf(n)
t.append(n),n=i}}(this.#b,this.#S)),null===this.#w&&(this.#w=Bf(()=>e(this.#g)))}#M(e){this.has_pending_snippet()?(this.#E+=e,0===this.#E&&(this.#n=!1,this.#w&&zf(this.#w,()=>{this.#w=null}),this.#S&&(this.#g.before(this.#S),this.#S=null))):this.parent&&this.parent.#M(e)}update_pending_count(e){this.#M(e),this.#x+=e,Nd.add(this.#P)}get_effect_pending(){return this.#L(),xh(this.#T)}error(e){var t=this.#_.onerror
let n=this.#_.failed
if(this.#C||!t&&!n)throw e
this.#b&&(Uf(this.#b),this.#b=null),this.#w&&(Uf(this.#w),this.#w=null),this.#k&&(Uf(this.#k),this.#k=null)
var r=!1,i=!1
const s=()=>{r?console.warn("https://svelte.dev/e/svelte_boundary_reset_noop"):(r=!0,i&&function(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}(),Ud.ensure(),this.#x=0,null!==this.#k&&zf(this.#k,()=>{this.#k=null}),this.#n=this.has_pending_snippet(),this.#b=this.#O(()=>(this.#C=!1,Bf(()=>this.#m(this.#g)))),this.#E>0?this.#$():this.#n=!1)}
var o=th
try{rh(null),i=!0,t?.(e,s),i=!1}catch(e){Od(e,this.#y&&this.#y.parent)}finally{rh(o)}n&&Ld(()=>{this.#k=this.#O(()=>{this.#C=!0
try{return Bf(()=>{n(this.#g,()=>e,()=>s)})}catch(e){return Od(e,this.#y.parent),null}finally{this.#C=!1}})})}}function Xd(e,t,n){const r=xd()?ef:nf
if(0!==t.length){var i=Fd,s=ih,o=function(){var e=ih,t=th,n=bd,r=Fd
return function(){sh(e),rh(t),wd(n),r?.activate()}}()
Promise.all(t.map(e=>function(e){let t=ih
null===t&&function(){throw new Error("https://svelte.dev/e/async_derived_orphan")}()
var n=t.b,r=void 0,i=lf(fd),s=null,o=!th
return function(e){Rf(4718592,e,!0)}(()=>{try{var t=e()
s&&Promise.resolve(t).catch(()=>{})}catch(e){t=Promise.reject(e)}var a=()=>t
r=s?.then(a,a)??Promise.resolve(t),s=r
var l=Fd,c=n.is_pending()
o&&(n.update_pending_count(1),c||l.increment())
const u=(e,t=void 0)=>{s=null,c||l.activate(),t?t!==ud&&(i.f|=od,ff(i,t)):(0!==(i.f&od)&&(i.f^=od),ff(i,e)),o&&(n.update_pending_count(-1),c||l.decrement()),Zd()}
if(r.then(u,e=>u(null,e||"unknown")),l)return()=>{queueMicrotask(()=>l.neuter())}}),new Promise(e=>{function t(n){function s(){n===r?e(i):t(r)}n.then(s,s)}t(r)})}(e))).then(t=>{i?.activate(),o()
try{n([...e.map(r),...t])}catch(e){0===(s.f&Zu)&&Od(e,s)}i?.deactivate(),Zd()}).catch(e=>{Od(e,s)})}else n(e.map(r))}function Zd(){sh(null),rh(null),wd(null)}function ef(e){var t=2050,n=null!==th&&2&th.f?th:null
null===ih||null!==n&&0!==(n.f&Vu)?t|=Vu:ih.f|=rd
return{ctx:bd,deps:null,effects:null,equals:hd,f:t,fn:e,reactions:null,rv:0,v:fd,wv:0,parent:n??ih,ac:null}}function tf(e){const t=ef(e)
return ah(t),t}function nf(e){const t=ef(e)
return t.equals=gd,t}function rf(e){var t=e.effects
if(null!==t){e.effects=null
for(var n=0;n<t.length;n+=1)Uf(t[n])}}function sf(e){var t,n=ih
sh(function(e){for(var t=e.parent;null!==t;){if(!(2&t.f))return t
t=t.parent}return null}(e))
try{rf(e),t=yh(e)}finally{sh(n)}return t}function of(e){var t=sf(e);(e.equals(t)||(e.v=t,e.wv=vh()),Zf)||Ph(e,!gh&&0===(e.f&Vu)||null===e.deps?Ju:Yu)}const af=new Map
function lf(e,t){return{f:0,v:e,reactions:null,equals:hd,rv:0,wv:0}}function cf(e,t){const n=lf(e)
return ah(n),n}function uf(e,t=!1,n=!0){const r=lf(e)
return t||(r.equals=gd),vd&&n&&null!==bd&&null!==bd.l&&(bd.l.s??=[]).push(r),r}function df(e,t,n=!1){return null!==th&&(!nh||0!==(th.f&nd))&&xd()&&4325394&th.f&&!oh?.includes(e)&&function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),ff(e,n?gf(t):t)}function ff(e,t){if(!e.equals(t)){var n=e.v
Zf?af.set(e,t):af.set(e,n),e.v=t,Ud.ensure().capture(e,n),2&e.f&&(0!==(e.f&Ku)&&sf(e),Ph(e,0===(e.f&Vu)?Ju:Yu)),e.wv=vh(),pf(e,Ku),!xd()||null===ih||0===(ih.f&Ju)||96&ih.f||(null===uh?function(e){uh=e}([e]):uh.push(e))}return t}function hf(e){df(e,e.v+1)}function pf(e,t){var n=e.reactions
if(null!==n)for(var r=xd(),i=n.length,s=0;s<i;s++){var o=n[s],a=o.f
if(r||o!==ih){var l=0===(a&Ku)
l&&Ph(o,t),2&a?pf(o,Yu):l&&(0!==(a&Gu)&&null!==Vd&&Vd.push(o),Jd(o))}}}function gf(e){if("object"!=typeof e||null===e||ad in e)return e
const t=ju(e)
if(t!==Au&&t!==Fu)return e
var n=new Map,r=Lu(e),i=cf(0),s=hh,o=e=>{if(hh===s)return e()
var t=th,n=hh
rh(null),ph(s)
var r=e()
return rh(t),ph(n),r}
return r&&n.set("length",cf(e.length)),new Proxy(e,{defineProperty(e,t,r){"value"in r&&!1!==r.configurable&&!1!==r.enumerable&&!1!==r.writable||function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}()
var i=n.get(t)
return void 0===i?i=o(()=>{var e=cf(r.value)
return n.set(t,e),e}):df(i,r.value,!0),!0},deleteProperty(e,t){var r=n.get(t)
if(void 0===r){if(t in e){const e=o(()=>cf(fd))
n.set(t,e),hf(i)}}else df(r,fd),hf(i)
return!0},get(t,r,i){if(r===ad)return e
var s=n.get(r),a=r in t
if(void 0!==s||a&&!Ou(t,r)?.writable||(s=o(()=>cf(gf(a?t[r]:fd))),n.set(r,s)),void 0!==s){var l=xh(s)
return l===fd?void 0:l}return Reflect.get(t,r,i)},getOwnPropertyDescriptor(e,t){var r=Reflect.getOwnPropertyDescriptor(e,t)
if(r&&"value"in r){var i=n.get(t)
i&&(r.value=xh(i))}else if(void 0===r){var s=n.get(t),o=s?.v
if(void 0!==s&&o!==fd)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return r},has(e,t){if(t===ad)return!0
var r=n.get(t),i=void 0!==r&&r.v!==fd||Reflect.has(e,t)
if((void 0!==r||null!==ih&&(!i||Ou(e,t)?.writable))&&(void 0===r&&(r=o(()=>cf(i?gf(e[t]):fd)),n.set(t,r)),xh(r)===fd))return!1
return i},set(e,t,s,a){var l=n.get(t),c=t in e
if(r&&"length"===t)for(var u=s;u<l.v;u+=1){var d=n.get(u+"")
void 0!==d?df(d,fd):u in e&&(d=o(()=>cf(fd)),n.set(u+"",d))}void 0===l?c&&!Ou(e,t)?.writable||(df(l=o(()=>cf(void 0)),gf(s)),n.set(t,l)):(c=l.v!==fd,df(l,o(()=>gf(s))))
var f=Reflect.getOwnPropertyDescriptor(e,t)
if(f?.set&&f.set.call(a,s),!c){if(r&&"string"==typeof t){var h=n.get("length"),p=Number(t)
Number.isInteger(p)&&p>=h.v&&df(h,p+1)}hf(i)}return!0},ownKeys(e){xh(i)
var t=Reflect.ownKeys(e).filter(e=>{var t=n.get(e)
return void 0===t||t.v!==fd})
for(var[r,s]of n)s.v===fd||r in e||t.push(r)
return t},setPrototypeOf(){!function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}()}})}function vf(e){try{if(null!==e&&"object"==typeof e&&ad in e)return e[ad]}catch{}return e}function _f(e,t){return Object.is(vf(e),vf(t))}var mf,yf,bf,wf
function kf(e=""){return document.createTextNode(e)}function Sf(e){return bf.call(e)}function xf(e){return wf.call(e)}function Ef(e,t){return Sf(e)}function Cf(e,t=!1){var n=Sf(e)
return n instanceof Comment&&""===n.data?xf(n):n}function Tf(e,t=1,n=!1){let r=e
for(;t--;)r=xf(r)
return r}let Pf=!1
function Lf(e){var t=th,n=ih
rh(null),sh(null)
try{return e()}finally{rh(t),sh(n)}}function $f(e,t,n,r=n){e.addEventListener(t,()=>Lf(n))
const i=e.__on_r
e.__on_r=i?()=>{i(),r(!0)}:()=>r(!0),Pf||(Pf=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function If(e){null===ih&&null===th&&function(){throw new Error("https://svelte.dev/e/effect_orphan")}(),null!==th&&0!==(th.f&Vu)&&null===ih&&function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}(),Zf&&function(){throw new Error("https://svelte.dev/e/effect_in_teardown")}()}function Rf(e,t,n,r=!0){var i=ih
null!==i&&0!==(i.f&Xu)&&(e|=Xu)
var s={ctx:bd,deps:null,nodes_start:null,nodes_end:null,f:e|Ku,first:null,fn:t,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,transitions:null,wv:0,ac:null}
if(n)try{kh(s),s.f|=ed}catch(o){throw Uf(s),o}else null!==t&&Jd(s)
if(r){var o=s
if(n&&null===o.deps&&null===o.teardown&&null===o.nodes_start&&o.first===o.last&&0===(o.f&rd)&&(o=o.first),null!==o&&(o.parent=i,null!==i&&function(e,t){var n=t.last
null===n?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}(o,i),null!==th&&2&th.f&&0===(e&zu))){var a=th;(a.effects??=[]).push(o)}}return s}function Of(e){const t=Rf(8,null,!1)
return Ph(t,Ju),t.teardown=e,t}function Mf(e){If()
var t=ih.f
if(!(!th&&0!==(t&Wu)&&0===(t&ed)))return Af(e)
var n=bd;(n.e??=[]).push(e)}function Af(e){return Rf(1048580,e,!1)}function Ff(e){return Rf(4,e,!1)}function jf(e,t=0){return Rf(8|t,e,!0)}function Nf(e,t=[],n=[]){Xd(t,n,t=>{Rf(8,()=>e(...t.map(xh)),!0)})}function Df(e,t=0){return Rf(Gu|t,e,!0)}function Bf(e,t=!0){return Rf(524320,e,!0,t)}function qf(e){var t=e.teardown
if(null!==t){const e=Zf,n=th
eh(!0),rh(null)
try{t.call(null)}finally{eh(e),rh(n)}}}function Hf(e,t=!1){var n=e.first
for(e.first=e.last=null;null!==n;){const e=n.ac
null!==e&&Lf(()=>{e.abort(ud)})
var r=n.next
0!==(n.f&zu)?n.parent=null:Uf(n,t),n=r}}function Uf(e,t=!0){var n=!1;(t||262144&e.f)&&null!==e.nodes_start&&null!==e.nodes_end&&(Gf(e.nodes_start,e.nodes_end),n=!0),Hf(e,t&&!n),wh(e,0),Ph(e,Zu)
var r=e.transitions
if(null!==r)for(const e of r)e.stop()
qf(e)
var i=e.parent
null!==i&&null!==i.first&&Wf(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Gf(e,t){for(;null!==e;){var n=e===t?null:xf(e)
e.remove(),e=n}}function Wf(e){var t=e.parent,n=e.prev,r=e.next
null!==n&&(n.next=r),null!==r&&(r.prev=n),null!==t&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function zf(e,t){var n=[]
Qf(e,n,!0),Vf(n,()=>{Uf(e),t&&t()})}function Vf(e,t){var n=e.length
if(n>0){var r=()=>--n||t()
for(var i of e)i.out(r)}else t()}function Qf(e,t,n){if(0===(e.f&Xu)){if(e.f^=Xu,null!==e.transitions)for(const r of e.transitions)(r.is_global||n)&&t.push(r)
for(var r=e.first;null!==r;){var i=r.next
Qf(r,t,!!(0!==(r.f&td)||0!==(r.f&Wu))&&n),r=i}}}function Jf(e){Kf(e,!0)}function Kf(e,t){if(0!==(e.f&Xu)){e.f^=Xu,0===(e.f&Ju)&&(Ph(e,Ku),Jd(e))
for(var n=e.first;null!==n;){var r=n.next
Kf(n,!!(0!==(n.f&td)||0!==(n.f&Wu))&&t),n=r}if(null!==e.transitions)for(const n of e.transitions)(n.is_global||t)&&n.in()}}let Yf=!1
function Xf(e){Yf=e}let Zf=!1
function eh(e){Zf=e}let th=null,nh=!1
function rh(e){th=e}let ih=null
function sh(e){ih=e}let oh=null
function ah(e){null!==th&&(null===oh?oh=[e]:oh.push(e))}let lh=null,ch=0,uh=null
let dh=1,fh=0,hh=fh
function ph(e){hh=e}let gh=!1
function vh(){return++dh}function _h(e){var t=e.f
if(0!==(t&Ku))return!0
if(0!==(t&Yu)){var n=e.deps,r=0!==(t&Vu)
if(null!==n){var i,s,o=0!==(t&Qu),a=r&&null!==ih&&!gh,l=n.length
if((o||a)&&(null===ih||0===(ih.f&Zu))){var c=e,u=c.parent
for(i=0;i<l;i++)s=n[i],!o&&s?.reactions?.includes(c)||(s.reactions??=[]).push(c)
o&&(c.f^=Qu),a&&null!==u&&0===(u.f&Vu)&&(c.f^=Vu)}for(i=0;i<l;i++)if(_h(s=n[i])&&of(s),s.wv>e.wv)return!0}r&&(null===ih||gh)||Ph(e,Ju)}return!1}function mh(e,t,n=!0){var r=e.reactions
if(null!==r&&!oh?.includes(e))for(var i=0;i<r.length;i++){var s=r[i]
2&s.f?mh(s,t,!1):t===s&&(n?Ph(s,Ku):0!==(s.f&Ju)&&Ph(s,Yu),Jd(s))}}function yh(e){var t=lh,n=ch,r=uh,i=th,s=gh,o=oh,a=bd,l=nh,c=hh,u=e.f
lh=null,ch=0,uh=null,gh=0!==(u&Vu)&&(nh||!Yf||null===th),th=96&u?null:e,oh=null,wd(e.ctx),nh=!1,hh=++fh,null!==e.ac&&(Lf(()=>{e.ac.abort(ud)}),e.ac=null)
try{e.f|=id
var d=(0,e.fn)(),f=e.deps
if(null!==lh){var h
if(wh(e,ch),null!==f&&ch>0)for(f.length=ch+lh.length,h=0;h<lh.length;h++)f[ch+h]=lh[h]
else e.deps=f=lh
if(!gh||2&u&&null!==e.reactions)for(h=ch;h<f.length;h++)(f[h].reactions??=[]).push(e)}else null!==f&&ch<f.length&&(wh(e,ch),f.length=ch)
if(xd()&&null!==uh&&!nh&&null!==f&&!(6146&e.f))for(h=0;h<uh.length;h++)mh(uh[h],e)
return null!==i&&i!==e&&(fh++,null!==uh&&(null===r?r=uh:r.push(...uh))),0!==(e.f&od)&&(e.f^=od),d}catch(e){return Rd(e)}finally{e.f^=id,lh=t,ch=n,uh=r,th=i,gh=s,oh=o,wd(a),nh=l,hh=c}}function bh(e,t){let n=t.reactions
if(null!==n){var r=$u.call(n,e)
if(-1!==r){var i=n.length-1
0===i?n=t.reactions=null:(n[r]=n[i],n.pop())}}null===n&&2&t.f&&(null===lh||!lh.includes(t))&&(Ph(t,Yu),768&t.f||(t.f^=Qu),rf(t),wh(t,0))}function wh(e,t){var n=e.deps
if(null!==n)for(var r=t;r<n.length;r++)bh(e,n[r])}function kh(e){var t=e.f
if(0===(t&Zu)){Ph(e,Ju)
var n=ih,r=Yf
ih=e,Yf=!0
try{0!==(t&Gu)?function(e){for(var t=e.first;null!==t;){var n=t.next
0===(t.f&Wu)&&Uf(t),t=n}}(e):Hf(e),qf(e)
var i=yh(e)
e.teardown="function"==typeof i?i:null,e.wv=dh}finally{Yf=r,ih=n}}}async function Sh(){await Promise.resolve(),Gd()}function xh(e){var t=!!(2&e.f)
if(null===th||nh){if(t&&null===e.deps&&null===e.effects){var n=e,r=n.parent
null!==r&&0===(r.f&Vu)&&(n.f^=Vu)}}else if(!(null!==ih&&0!==(ih.f&Zu))&&!oh?.includes(e)){var i=th.deps
if(0!==(th.f&id))e.rv<fh&&(e.rv=fh,null===lh&&null!==i&&i[ch]===e?ch++:null===lh?lh=[e]:gh&&lh.includes(e)||lh.push(e))
else{(th.deps??=[]).push(e)
var s=e.reactions
null===s?e.reactions=[th]:s.includes(th)||s.push(th)}}if(Zf){if(af.has(e))return af.get(e)
if(t){var o=(n=e).v
return(0===(n.f&Ju)&&null!==n.reactions||Eh(n))&&(o=sf(n)),af.set(n,o),o}}else t&&_h(n=e)&&of(n)
if(0!==(e.f&od))throw e.v
return e.v}function Eh(e){if(e.v===fd)return!0
if(null===e.deps)return!1
for(const t of e.deps){if(af.has(t))return!0
if(2&t.f&&Eh(t))return!0}return!1}function Ch(e){var t=nh
try{return nh=!0,e()}finally{nh=t}}const Th=-7169
function Ph(e,t){e.f=e.f&Th|t}function Lh(e,t=new Set){if(!("object"!=typeof e||null===e||e instanceof EventTarget||t.has(e))){t.add(e),e instanceof Date&&e.getTime()
for(let n in e)try{Lh(e[n],t)}catch(e){}const n=ju(e)
if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const t=Mu(n)
for(let n in t){const r=t[n].get
if(r)try{r.call(e)}catch(e){}}}}}const $h=["touchstart","touchmove"]
function Ih(e){return $h.includes(e)}const Rh=new Set,Oh=new Set
function Mh(e,t,n,r,i){var s={capture:r,passive:i},o=function(e,t,n,r={}){function i(e){if(r.capture||jh.call(t,e),!e.cancelBubble)return Lf(()=>n?.call(this,e))}return e.startsWith("pointer")||e.startsWith("touch")||"wheel"===e?Ld(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}(e,t,n,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Of(()=>{t.removeEventListener(e,o,s)})}function Ah(e){for(var t=0;t<e.length;t++)Rh.add(e[t])
for(var n of Oh)n(e)}let Fh=null
function jh(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],s=i[0]||e.target
Fh=e
var o=0,a=Fh===e&&e.__root
if(a){var l=i.indexOf(a)
if(-1!==l&&(t===document||t===window))return void(e.__root=t)
var c=i.indexOf(t)
if(-1===c)return
l<=c&&(o=l)}if((s=i[o]||e.target)!==t){Ru(e,"currentTarget",{configurable:!0,get:()=>s||n})
var u=th,d=ih
rh(null),sh(null)
try{for(var f,h=[];null!==s;){var p=s.assignedSlot||s.parentNode||s.host||null
try{var g=s["__"+r]
if(null!=g&&(!s.disabled||e.target===s))if(Lu(g)){var[v,..._]=g
v.apply(s,[e,..._])}else g.call(s,e)}catch(e){f?h.push(e):f=e}if(e.cancelBubble||p===t||null===p)break
s=p}if(f){for(let e of h)queueMicrotask(()=>{throw e})
throw f}}finally{e.__root=t,delete e.currentTarget,rh(u),sh(d)}}}function Nh(e){var t=document.createElement("template")
return t.innerHTML=e.replaceAll("<!>","\x3c!----\x3e"),t.content}function Dh(e,t){var n=ih
null===n.nodes_start&&(n.nodes_start=e,n.nodes_end=t)}function Bh(e,t){var n,r=!!(1&t),i=!!(2&t),s=!e.startsWith("<!>")
return()=>{void 0===n&&(n=Nh(s?e:"<!>"+e),r||(n=Sf(n)))
var t=i||yf?document.importNode(n,!0):n.cloneNode(!0)
r?Dh(Sf(t),t.lastChild):Dh(t,t)
return t}}function qh(e=""){var t=kf(e+"")
return Dh(t,t),t}function Hh(){var e=document.createDocumentFragment(),t=document.createComment(""),n=kf()
return e.append(t,n),Dh(t,n),e}function Uh(e,t){null!==e&&e.before(t)}let Gh=!0
function Wh(e,t){var n=null==t?"":"object"==typeof t?t+"":t
n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}function zh(e,t){return function(e,{target:t,anchor:n,props:r={},events:i,context:s,intro:o=!0}){!function(){if(void 0===mf){mf=window,yf=/Firefox/.test(navigator.userAgent)
var e=Element.prototype,t=Node.prototype,n=Text.prototype
bf=Ou(t,"firstChild").get,wf=Ou(t,"nextSibling").get,Nu(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Nu(n)&&(n.__t=void 0)}}()
var a=new Set,l=e=>{for(var n=0;n<e.length;n++){var r=e[n]
if(!a.has(r)){a.add(r)
var i=Ih(r)
t.addEventListener(r,jh,{passive:i})
var s=Vh.get(r)
void 0===s?(document.addEventListener(r,jh,{passive:i}),Vh.set(r,1)):Vh.set(r,s+1)}}}
l(Iu(Rh)),Oh.add(l)
var c=void 0,u=function(e){Ud.ensure()
const t=Rf(524352,e,!0)
return(e={})=>new Promise(n=>{e.outro?zf(t,()=>{Uf(t),n(void 0)}):(Uf(t),n(void 0))})}(()=>{var u=n??t.appendChild(kf())
return function(e,t,n){new Yd(e,t,n)}(u,{pending:()=>{}},t=>{s&&(kd({}),bd.c=s)
i&&(r.$$events=i),Gh=o,c=e(t,r)||{},Gh=!0,s&&Sd()}),()=>{for(var e of a){t.removeEventListener(e,jh)
var r=Vh.get(e)
0===--r?(document.removeEventListener(e,jh),Vh.delete(e)):Vh.set(e,r)}Oh.delete(l),u!==n&&u.parentNode?.removeChild(u)}})
return Qh.set(c,u),c}(e,t)}const Vh=new Map
let Qh=new WeakMap
function Jh(e,t){const n=Qh.get(e)
return n?(Qh.delete(e),n(t)):Promise.resolve()}function Kh(e,t,n,r,i){var s,o,a,l=e,c=xd(),u=bd,d=fd,f=c?lf(void 0):uf(void 0,!1,!1),h=c?lf(void 0):uf(void 0,!1,!1),p=!1
function g(e,t){p=!0,t&&(sh(v),rh(v),wd(u))
try{0===e&&n&&(s?Jf(s):s=Bf(()=>n(l))),1===e&&r&&(o?Jf(o):o=Bf(()=>r(l,f))),2===e&&i&&(a?Jf(a):a=Bf(()=>i(l,h))),0!==e&&s&&zf(s,()=>s=null),1!==e&&o&&zf(o,()=>o=null),2!==e&&a&&zf(a,()=>a=null)}finally{t&&(wd(null),rh(null),sh(null),Gd())}}var v=Df(()=>{if(d!==(d=t())){if(n=d,"function"==typeof n?.then){var e=d
p=!1,e.then(t=>{e===d&&(ff(f,t),g(1,!0))},t=>{if(e===d&&(ff(h,t),g(2,!0),!i))throw h.v}),Ld(()=>{p||g(0,!0)})}else ff(f,d),g(1,!1)
var n
return()=>d=fd}})}function Yh(e,t,n=!1){var r=e,i=null,s=null,o=fd,a=!1
const l=(e,t=!0)=>{a=!0,d(t,e)}
var c=null
function u(){null!==c&&(c.lastChild.remove(),r.before(c),c=null)
var e=o?i:s,t=o?s:i
e&&Jf(e),t&&zf(t,()=>{o?s=null:i=null})}const d=(e,t)=>{if(o!==(o=e)){var n=!1,a=r
n,o?i??=t&&Bf(()=>t(a)):s??=t&&Bf(()=>t(a)),u()}}
Df(()=>{a=!1,t(l),a||d(null,null)},n?td:0)}function Xh(e,t){jf(()=>{var n=t()
for(var r in n){var i=n[r]
i?e.style.setProperty(r,i):e.style.removeProperty(r)}})}function Zh(e,t){return t}function ep(e,t,n,r,i,s=null){var o=e,a={flags:t,items:new Map,first:null}
!(4&t)||(o=e.appendChild(kf()))
var l,c,u=null,d=!1,f=new Map,h=nf(()=>{var e=n()
return Lu(e)?e:null==e?[]:Iu(e)})
function p(){!function(e,t,n,r,i,s,o,a,l){var c,u,d,f,h,p,g=!!(8&o),v=!!(3&o),_=t.length,m=n.items,y=n.first,b=y,w=null,k=[],S=[]
if(g)for(p=0;p<_;p+=1)f=a(d=t[p],p),void 0!==(h=m.get(f))&&(h.a?.measure(),(u??=new Set).add(h))
for(p=0;p<_;p+=1)if(f=a(d=t[p],p),void 0!==(h=m.get(f))){if(v&&tp(h,d,p,o),0!==(h.e.f&Xu)&&(Jf(h.e),g&&(h.a?.unfix(),(u??=new Set).delete(h))),h!==b){if(void 0!==c&&c.has(h)){if(k.length<S.length){var x,E=S[0]
w=E.prev
var C=k[0],T=k[k.length-1]
for(x=0;x<k.length;x+=1)rp(k[x],E,i)
for(x=0;x<S.length;x+=1)c.delete(S[x])
ip(n,C.prev,T.next),ip(n,w,C),ip(n,T,E),b=E,w=T,p-=1,k=[],S=[]}else c.delete(h),rp(h,b,i),ip(n,h.prev,h.next),ip(n,h,null===w?n.first:w.next),ip(n,w,h),w=h
continue}for(k=[],S=[];null!==b&&b.k!==f;)0===(b.e.f&Xu)&&(c??=new Set).add(b),S.push(b),b=b.next
if(null===b)continue
h=b}k.push(h),w=h,b=h.next}else{var P=r.get(f)
if(void 0!==P){r.delete(f),m.set(f,P)
var L=w?w.next:b
ip(n,w,P),ip(n,P,L),rp(P,L,i),w=P}else{w=np(b?b.e.nodes_start:i,n,w,null===w?n.first:w.next,d,f,p,s,o,l)}m.set(f,w),k=[],S=[],b=w.next}if(null!==b||void 0!==c){for(var $=void 0===c?[]:Iu(c);null!==b;)0===(b.e.f&Xu)&&$.push(b),b=b.next
var I=$.length
if(I>0){var R=4&o&&0===_?i:null
if(g){for(p=0;p<I;p+=1)$[p].a?.measure()
for(p=0;p<I;p+=1)$[p].a?.fix()}!function(e,t,n){for(var r=e.items,i=[],s=t.length,o=0;o<s;o++)Qf(t[o].e,i,!0)
var a=s>0&&0===i.length&&null!==n
if(a){var l=n.parentNode
l.textContent="",l.append(n),r.clear(),ip(e,t[0].prev,t[s-1].next)}Vf(i,()=>{for(var n=0;n<s;n++){var i=t[n]
a||(r.delete(i.k),ip(e,i.prev,i.next)),Uf(i.e,!a)}})}(n,$,R)}}g&&Ld(()=>{if(void 0!==u)for(h of u)h.a?.apply()})
for(var O of(e.first=n.first&&n.first.e,e.last=w&&w.e,r.values()))Uf(O.e)
r.clear()}(c,l,a,f,o,i,t,r,n),null!==s&&(0===l.length?u?Jf(u):u=Bf(()=>s(o)):null!==u&&zf(u,()=>{u=null}))}Df(()=>{c??=ih
var e=(l=xh(h)).length
d&&0===e||(d=0===e,p(),xh(h))})}function tp(e,t,n,r){1&r&&ff(e.v,t),2&r?ff(e.i,n):e.i=n}function np(e,t,n,r,i,s,o,a,l,c,u){var d=!!(1&l)?!(16&l)?uf(i,!1,!1):lf(i):i,f=2&l?lf(o):o,h={i:f,v:d,k:s,a:null,e:null,prev:n,next:r}
try{if(null===e)document.createDocumentFragment().append(e=kf())
return h.e=Bf(()=>a(e,d,f,c),false),h.e.prev=n&&n.e,h.e.next=r&&r.e,null===n?u||(t.first=h):(n.next=h,n.e.next=h.e),null!==r&&(r.prev=h,r.e.prev=h.e),h}finally{}}function rp(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,s=e.e.nodes_start;null!==s&&s!==r;){var o=xf(s)
i.before(s),s=o}}function ip(e,t,n){null===t?e.first=n:(t.next=n,t.e.next=n&&n.e),null!==n&&(n.prev=t,n.e.prev=t&&t.e)}function sp(e,t,n=!1,r=!1,i=!1){var s=e,o=""
Nf(()=>{var e=ih
if(o!==(o=t()??"")&&(null!==e.nodes_start&&(Gf(e.nodes_start,e.nodes_end),e.nodes_start=e.nodes_end=null),""!==o)){var i=o+""
n?i=`<svg>${i}</svg>`:r&&(i=`<math>${i}</math>`)
var a=Nh(i)
if((n||r)&&(a=Sf(a)),Dh(Sf(a),a.lastChild),n||r)for(;Sf(a);)s.before(Sf(a))
else s.before(a)}})}function op(e,t,...n){var r,i=e,s=Bu
Df(()=>{s!==(s=t())&&(r&&(Uf(r),r=null),r=Bf(()=>s(i,...n)))},td)}function ap(e,t,n){var r,i,s=e,o=null,a=null
function l(){i&&(zf(i),i=null),o&&(o.lastChild.remove(),s.before(o),o=null),i=a,a=null}Df(()=>{if(r!==(r=t())){var e=!1
if(r){var i=s
e,a=Bf(()=>n(i,r))}l()}},td)}function lp(e,t,n){Ff(()=>{var r=Ch(()=>t(e,n?.())||{})
if(r?.destroy)return()=>r.destroy()})}function cp(e){var t,n,r=""
if("string"==typeof e||"number"==typeof e)r+=e
else if("object"==typeof e)if(Array.isArray(e)){var i=e.length
for(t=0;t<i;t++)e[t]&&(n=cp(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n)
return r}function up(e){return"object"==typeof e?function(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=cp(e))&&(r&&(r+=" "),r+=t)
return r}(e):e??""}const dp=[..." \t\n\r\f \v\ufeff"]
function fp(e,t=!1){var n=t?" !important;":";",r=""
for(var i in e){var s=e[i]
null!=s&&""!==s&&(r+=" "+i+": "+s+n)}return r}function hp(e){return"-"!==e[0]||"-"!==e[1]?e.toLowerCase():e}function pp(e,t,n,r,i,s){var o=e.__className
if(o!==n||void 0===o){var a=function(e,t,n){var r=null==e?"":""+e
if(t&&(r=r?r+" "+t:t),n)for(var i in n)if(n[i])r=r?r+" "+i:i
else if(r.length)for(var s=i.length,o=0;(o=r.indexOf(i,o))>=0;){var a=o+s
0!==o&&!dp.includes(r[o-1])||a!==r.length&&!dp.includes(r[a])?o=a:r=(0===o?"":r.substring(0,o))+r.substring(a+1)}return""===r?null:r}(n,r,s)
null==a?e.removeAttribute("class"):e.className=a,e.__className=n}else if(s&&i!==s)for(var l in s){var c=!!s[l]
null!=i&&c===!!i[l]||e.classList.toggle(l,c)}return s}function gp(e,t={},n,r){for(var i in n){var s=n[i]
t[i]!==s&&(null==n[i]?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function vp(e,t,n,r){if(e.__style!==t){var i=function(e,t){if(t){var n,r,i=""
if(Array.isArray(t)?(n=t[0],r=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim()
var s=!1,o=0,a=!1,l=[]
n&&l.push(...Object.keys(n).map(hp)),r&&l.push(...Object.keys(r).map(hp))
var c=0,u=-1
const t=e.length
for(var d=0;d<t;d++){var f=e[d]
if(a?"/"===f&&"*"===e[d-1]&&(a=!1):s?s===f&&(s=!1):"/"===f&&"*"===e[d+1]?a=!0:'"'===f||"'"===f?s=f:"("===f?o++:")"===f&&o--,!a&&!1===s&&0===o)if(":"===f&&-1===u)u=d
else if(";"===f||d===t-1){if(-1!==u){var h=hp(e.substring(c,u).trim())
l.includes(h)||(";"!==f&&d++,i+=" "+e.substring(c,d).trim()+";")}c=d+1,u=-1}}}return n&&(i+=fp(n)),r&&(i+=fp(r,!0)),""===(i=i.trim())?null:i}return null==e?null:String(e)}(t,r)
null==i?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else r&&(Array.isArray(r)?(gp(e,n?.[0],r[0]),gp(e,n?.[1],r[1],"important")):gp(e,n,r))
return r}function _p(e,t,n=!1){if(e.multiple){if(null==t)return
if(!Lu(t))return void console.warn("https://svelte.dev/e/select_multiple_invalid_value")
for(var r of e.options)r.selected=t.includes(yp(r))}else{for(r of e.options){if(_f(yp(r),t))return void(r.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}}function mp(e,t,n=t){var r=!0
$f(e,"change",t=>{var r,i=t?"[selected]":":checked"
if(e.multiple)r=[].map.call(e.querySelectorAll(i),yp)
else{var s=e.querySelector(i)??e.querySelector("option:not([disabled])")
r=s&&yp(s)}n(r)}),Ff(()=>{var i=t()
if(_p(e,i,r),r&&void 0===i){var s=e.querySelector(":checked")
null!==s&&(i=yp(s),n(i))}e.__value=i,r=!1}),function(e){var t=new MutationObserver(()=>{_p(e,e.__value)})
t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Of(()=>{t.disconnect()})}(e)}function yp(e){return"__value"in e?e.__value:e.value}const bp=Symbol("is custom element"),wp=Symbol("is html")
function kp(e,t){var n=xp(e)
n.value!==(n.value=t??void 0)&&(e.value!==t||0===t&&"PROGRESS"===e.nodeName)&&(e.value=t??"")}function Sp(e,t,n,r){var i=xp(e)
i[t]!==(i[t]=n)&&("loading"===t&&(e[cd]=n),null==n?e.removeAttribute(t):"string"!=typeof n&&function(e){var t,n=e.getAttribute("is")||e.nodeName,r=Ep.get(n)
if(r)return r
Ep.set(n,r=[])
var i=e,s=Element.prototype
for(;s!==i;){for(var o in t=Mu(i))t[o].set&&r.push(o)
i=ju(i)}return r}(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function xp(e){return e.__attributes??={[bp]:e.nodeName.includes("-"),[wp]:"http://www.w3.org/1999/xhtml"===e.namespaceURI}}var Ep=new Map
const Cp={tick:e=>requestAnimationFrame(e),now:()=>performance.now(),tasks:new Set}
function Tp(){const e=Cp.now()
Cp.tasks.forEach(t=>{t.c(e)||(Cp.tasks.delete(t),t.f())}),0!==Cp.tasks.size&&Cp.tick(Tp)}function Pp(e,t){Lf(()=>{e.dispatchEvent(new CustomEvent(t))})}function Lp(e){if("float"===e)return"cssFloat"
if("offset"===e)return"cssOffset"
if(e.startsWith("--"))return e
const t=e.split("-")
return 1===t.length?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function $p(e){const t={},n=e.split(";")
for(const e of n){const[n,r]=e.split(":")
if(!n||void 0===r)break
t[Lp(n.trim())]=r.trim()}return t}const Ip=e=>e
function Rp(e,t,n,r){var i,s,o,a=!!(4&e),l=t.inert,c=t.style.overflow
function u(){return Lf(()=>i??=n()(t,r?.()??{},{direction:"both"}))}var d={is_global:a,in(){t.inert=l,Pp(t,"introstart"),s=Op(t,u(),o,1,()=>{Pp(t,"introend"),s?.abort(),s=i=void 0,t.style.overflow=c})},out(e){t.inert=!0,Pp(t,"outrostart"),o=Op(t,u(),s,0,()=>{Pp(t,"outroend"),e?.()})},stop:()=>{s?.abort(),o?.abort()}},f=ih
if((f.transitions??=[]).push(d),Gh){var h=a
if(!h){for(var p=f.parent;p&&0!==(p.f&td);)for(;(p=p.parent)&&0===(p.f&Gu););h=!p||0!==(p.f&ed)}h&&Ff(()=>{Ch(()=>d.in())})}}function Op(e,t,n,r,i){var s=1===r
if(Du(t)){var o,a=!1
return Ld(()=>{if(!a){var l=t({direction:s?"in":"out"})
o=Op(e,l,n,r,i)}}),{abort:()=>{a=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(n?.deactivate(),!t?.duration)return i(),{abort:Bu,deactivate:Bu,reset:Bu,t:()=>r}
const{delay:l=0,css:c,tick:u,easing:d=Ip}=t
var f=[]
if(s&&void 0===n&&(u&&u(0,1),c)){var h=$p(c(0,1))
f.push(h,h)}var p=()=>1-r,g=e.animate(f,{duration:l,fill:"forwards"})
return g.onfinish=()=>{g.cancel()
var s=n?.t()??1-r
n?.abort()
var o=r-s,a=t.duration*Math.abs(o),l=[]
if(a>0){var f=!1
if(c)for(var h=Math.ceil(a/(1e3/60)),v=0;v<=h;v+=1){var _=s+o*d(v/h),m=$p(c(_,1-_))
l.push(m),f||="hidden"===m.overflow}f&&(e.style.overflow="hidden"),p=()=>{var e=g.currentTime
return s+o*d(e/a)},u&&function(e){let t
0===Cp.tasks.size&&Cp.tick(Tp),new Promise(n=>{Cp.tasks.add(t={c:e,f:n})})}(()=>{if("running"!==g.playState)return!1
var e=p()
return u(e,1-e),!0})}(g=e.animate(l,{duration:a,fill:"forwards"})).onfinish=()=>{p=()=>r,u?.(r,1-r),i()}},{abort:()=>{g&&(g.cancel(),g.effect=null,g.onfinish=Bu)},deactivate:()=>{i=Bu},reset:()=>{0===r&&u?.(1,0)},t:()=>p()}}function Mp(e,t,n=t){var r=new WeakSet
$f(e,"input",async i=>{var s=i?e.defaultValue:e.value
if(s=Np(e)?Dp(s):s,n(s),null!==Fd&&r.add(Fd),await Sh(),s!==(s=t())){var o=e.selectionStart,a=e.selectionEnd
e.value=s??"",null!==a&&(e.selectionStart=o,e.selectionEnd=Math.min(a,e.value.length))}}),null==Ch(t)&&e.value&&(n(Np(e)?Dp(e.value):e.value),null!==Fd&&r.add(Fd)),jf(()=>{var n=t()
if(e===document.activeElement){var i=jd??Fd
if(r.has(i))return}Np(e)&&n===Dp(e.value)||("date"!==e.type||n||e.value)&&n!==e.value&&(e.value=n??"")})}const Ap=new Set
function Fp(e,t,n,r,i=r){var s="checkbox"===n.getAttribute("type"),o=e
if(null!==t)for(var a of t)o=o[a]??=[]
o.push(n),$f(n,"change",()=>{var e=n.__value
s&&(e=function(e,t,n){for(var r=new Set,i=0;i<e.length;i+=1)e[i].checked&&r.add(e[i].__value)
n||r.delete(t)
return Array.from(r)}(o,e,n.checked)),i(e)},()=>i(s?[]:null)),jf(()=>{var e=r()
s?(e=e||[],n.checked=e.includes(n.__value)):n.checked=_f(n.__value,e)}),Of(()=>{var e=o.indexOf(n);-1!==e&&o.splice(e,1)}),Ap.has(o)||(Ap.add(o),Ld(()=>{o.sort((e,t)=>4===e.compareDocumentPosition(t)?-1:1),Ap.delete(o)})),Ld(()=>{})}function jp(e,t,n=t){$f(e,"change",t=>{var r=t?e.defaultChecked:e.checked
n(r)}),null==Ch(t)&&n(e.checked),jf(()=>{var n=t()
e.checked=Boolean(n)})}function Np(e){var t=e.type
return"number"===t||"range"===t}function Dp(e){return""===e?null:+e}class Bp{#A=new WeakMap
#F
#j
static entries=new WeakMap
constructor(e){this.#j=e}observe(e,t){var n=this.#A.get(e)||new Set
return n.add(t),this.#A.set(e,n),this.#N().observe(e,this.#j),()=>{var n=this.#A.get(e)
n.delete(t),0===n.size&&(this.#A.delete(e),this.#F.unobserve(e))}}#N(){return this.#F??(this.#F=new ResizeObserver(e=>{for(var t of e)for(var n of(Bp.entries.set(t.target,t),this.#A.get(t.target)||[]))n(t)}))}}var qp=new Bp({box:"border-box"})
function Hp(e,t){return e===t||e?.[ad]===t}function Up(e={},t,n,r){return Ff(()=>{var r,i
return jf(()=>{r=i,i=[],Ch(()=>{e!==n(...i)&&(t(e,...i),r&&Hp(n(...r),e)&&t(null,...r))})}),()=>{Ld(()=>{i&&Hp(n(...i),e)&&t(null,...i)})}}),e}function Gp(e=!1){const t=bd,n=t.l.u
if(!n)return
let r=()=>function(e){if("object"==typeof e&&e&&!(e instanceof EventTarget))if(ad in e)Lh(e)
else if(!Array.isArray(e))for(let t in e){const n=e[t]
"object"==typeof n&&n&&ad in n&&Lh(n)}}(t.s)
if(e){let e=0,n={}
const i=ef(()=>{let r=!1
const i=t.s
for(const e in i)i[e]!==n[e]&&(n[e]=i[e],r=!0)
return r&&e++,e})
r=()=>xh(i)}n.b.length&&function(e){If(),Rf(1048584,e,!0)}(()=>{Wp(t,r),Hu(n.b)}),Mf(()=>{const e=Ch(()=>n.m.map(qu))
return()=>{for(const t of e)"function"==typeof t&&t()}}),n.a.length&&Mf(()=>{Wp(t,r),Hu(n.a)})}function Wp(e,t){if(e.l.s)for(const t of e.l.s)xh(t)
t()}function zp(e,t,n){if(null==e)return t(void 0),n&&n(void 0),Bu
const r=Ch(()=>e.subscribe(t,n))
return r.unsubscribe?()=>r.unsubscribe():r}const Vp=[]
function Qp(e,t=Bu){let n=null
const r=new Set
function i(t){if(pd(e,t)&&(e=t,n)){const t=!Vp.length
for(const t of r)t[1](),Vp.push(t,e)
if(t){for(let e=0;e<Vp.length;e+=2)Vp[e][0](Vp[e+1])
Vp.length=0}}}function s(t){i(t(e))}return{set:i,update:s,subscribe:function(o,a=Bu){const l=[o,a]
return r.add(l),1===r.size&&(n=t(i,s)||Bu),o(e),()=>{r.delete(l),0===r.size&&n&&(n(),n=null)}}}}function Jp(e,t,n){const r=!Array.isArray(e),i=r?[e]:e
if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const s=t.length<2
return o=(e,n)=>{let o=!1
const a=[]
let l=0,c=Bu
const u=()=>{if(l)return
c()
const i=t(r?a[0]:a,e,n)
s?e(i):c="function"==typeof i?i:Bu},d=i.map((e,t)=>zp(e,e=>{a[t]=e,l&=~(1<<t),o&&u()},()=>{l|=1<<t}))
return o=!0,u(),function(){Hu(d),c(),o=!1}},{subscribe:Qp(n,o).subscribe}
var o}function Kp(e){let t
return zp(e,e=>t=e)(),t}let Yp=!1,Xp=Symbol()
function Zp(e,t,n){const r=n[t]??={store:null,source:uf(void 0),unsubscribe:Bu}
if(r.store!==e&&!(Xp in n))if(r.unsubscribe(),r.store=e??null,null==e)r.source.v=void 0,r.unsubscribe=Bu
else{var i=!0
r.unsubscribe=zp(e,e=>{i?r.source.v=e:df(r.source,e)}),i=!1}return e&&Xp in n?Kp(e):xh(r.source)}function eg(e,t){return e.set(t),t}function tg(){const e={}
return[e,function(){Of(()=>{for(var t in e){e[t].unsubscribe()}Ru(e,Xp,{enumerable:!1,value:!0})})}]}const ng={get(e,t){let n=e.props.length
for(;n--;){let r=e.props[n]
if(Du(r)&&(r=r()),"object"==typeof r&&null!==r&&t in r)return r[t]}},set(e,t,n){let r=e.props.length
for(;r--;){let i=e.props[r]
Du(i)&&(i=i())
const s=Ou(i,t)
if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length
for(;n--;){let r=e.props[n]
if(Du(r)&&(r=r()),"object"==typeof r&&null!==r&&t in r){const e=Ou(r,t)
return e&&!e.configurable&&(e.configurable=!0),e}}},has(e,t){if(t===ad||t===ld)return!1
for(let n of e.props)if(Du(n)&&(n=n()),null!=n&&t in n)return!0
return!1},ownKeys(e){const t=[]
for(let n of e.props)if(Du(n)&&(n=n()),n){for(const e in n)t.includes(e)||t.push(e)
for(const e of Object.getOwnPropertySymbols(n))t.includes(e)||t.push(e)}return t}}
function rg(e,t,n,r){var i,s,o=!vd||!!(2&n),a=!!(8&n),l=!!(16&n),c=r,u=!0,d=()=>(u&&(u=!1,c=l?Ch(r):r),c)
if(a){var f=ad in e||ld in e
i=Ou(e,t)?.set??(f&&t in e?n=>e[t]=n:void 0)}var h,p=!1
if(a?[s,p]=function(e){var t=Yp
try{return Yp=!1,[e(),Yp]}finally{Yp=t}}(()=>e[t]):s=e[t],void 0===s&&void 0!==r&&(s=d(),i&&(o&&function(){throw new Error("https://svelte.dev/e/props_invalid_value")}(),i(s))),h=o?()=>{var n=e[t]
return void 0===n?d():(u=!0,n)}:()=>{var n=e[t]
return void 0!==n&&(c=void 0),void 0===n?c:n},o&&!(4&n))return h
if(i){var g=e.$$legacy
return function(e,t){return arguments.length>0?(o&&t&&!g&&!p||i(t?h():e),e):h()}}var v=!1,_=(1&n?ef:nf)(()=>(v=!1,h()))
a&&xh(_)
var m=ih
return function(e,t){if(arguments.length>0){const n=t?xh(_):o&&a?gf(e):e
return df(_,n),v=!0,void 0!==c&&(c=n),e}return Zf&&v||0!==(m.f&Zu)?_.v:xh(_)}}function ig(e){null===bd&&dd(),vd&&null!==bd.l?function(e){var t=e.l
return t.u??={a:[],b:[],m:[]}}(bd).m.push(e):Mf(()=>{const t=Ch(e)
if("function"==typeof t)return t})}function sg(e){null===bd&&dd(),ig(()=>()=>Ch(e))}const og=Qp("")
"undefined"!=typeof window&&((window.__svelte??={}).v??=new Set).add("5")
const ag=e=>e
function lg(e){const t=e-1
return t*t*t+1}function cg(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function ug(e,{delay:t=0,duration:n=400,easing:r=ag}={}){const i=+getComputedStyle(e).opacity
return{delay:t,duration:n,easing:r,css:e=>"opacity: "+e*i}}function dg(e,{delay:t=0,duration:n=400,easing:r=lg,x:i=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-o),[d,f]=cg(i),[h,p]=cg(s)
return{delay:t,duration:n,easing:r,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*d}${f}, ${(1-e)*h}${p});\n\t\t\topacity: ${l-u*t}`}}function fg(e,{delay:t=0,duration:n=400,easing:r=lg,axis:i="y"}={}){const s=getComputedStyle(e),o=+s.opacity,a="y"===i?"height":"width",l=parseFloat(s[a]),c="y"===i?["top","bottom"]:["left","right"],u=c.map(e=>`${e[0].toUpperCase()}${e.slice(1)}`),d=parseFloat(s[`padding${u[0]}`]),f=parseFloat(s[`padding${u[1]}`]),h=parseFloat(s[`margin${u[0]}`]),p=parseFloat(s[`margin${u[1]}`]),g=parseFloat(s[`border${u[0]}Width`]),v=parseFloat(s[`border${u[1]}Width`])
return{delay:t,duration:n,easing:r,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*o};${a}: ${e*l}px;padding-${c[0]}: ${e*d}px;padding-${c[1]}: ${e*f}px;margin-${c[0]}: ${e*h}px;margin-${c[1]}: ${e*p}px;border-${c[0]}-width: ${e*g}px;border-${c[1]}-width: ${e*v}px;min-${a}: 0`}}var hg=(e,t)=>{df(t,!1)},pg=Bh('<div role="alert" class="svelte-8uspok"><p class="svelte-8uspok"> </p></div>')
function gg(e,t){kd(t,!0)
const n=()=>Zp(og,"$alert",r),[r,i]=tg()
let s=rg(t,"ms",3,3e3),o=cf(!1),a=0,l=cf("")
const c=(e,t)=>{clearTimeout(a),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
df(l,`translate(${t}px, ${e.offsetTop}px)`),df(o,!0)}(),t>0&&(a=setTimeout(()=>{df(o,!1),eg(og,"")},t))):df(o,!1)}
Mf(()=>{c(n(),s())}),sg(()=>clearTimeout(a))
var u=Hh(),d=Cf(u),f=e=>{var t=pg()
let r
t.__click=[hg,o]
var i=Ef(t),s=Ef(i)
Nf(e=>{r=vp(t,"",r,e),Wh(s,n())},[()=>({transform:xh(l)})]),Rp(3,t,()=>dg,()=>({delay:250,duration:300,x:0,y:-100,opacity:.5})),Uh(e,t)}
Yh(d,e=>{xh(o)&&e(f)}),Uh(e,u),Sd(),i()}Ah(["click"])
let vg=!1
function _g(e){e&&(vg||(vg=!0,zh(gg,{target:document.body})),og.set(e))}function mg(e,t){return Array.from(e,t)}function yg(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function bg(e,t){return mg(yg(e,t))}function wg(e){return e.trim()}function kg(e){const t=n(e)
if(Dc(t))return wg(t)}function Sg(e,t){return kg(t).includes(e)}function xg(e,...t){return(...n)=>e(...t,...n)}let Eg=0,Cg=0,Tg=0
function Pg(){return Eg||(Eg=t("pCL")),Eg}function Lg(){return Cg||(Cg=t("pCC")),Cg}function $g(){return Tg||(Tg=t("pCR")),Tg}function Ig(){const e=bg("a",Pg()).filter(function(e){return xg(Sg,e)}("message"))
e.length&&async function(){const e=new Audio(jc("defaultMessageSound"))
try{await e.play()}catch(e){_g("Message Sound Not Allowed")}}()}function Rg(e,t,n,r){var i
au(e,t,n,{once:!0,...(i=r,Nc(i)?{capture:i}:i)})}let Og=0,Mg=0,Ag=0,Fg=0,jg=0,Ng=0
function Dg(e){Mg=e.clientX,Ag=e.clientY}function Bg(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(Og,null).transform)
Fg=e[0]-Mg,jg=e[1]-Ag}function qg(e){e.clientX===Mg&&e.clientY===Ag||(Og.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+Fg).toString()}, ${(e.clientY+jg).toString()})`,Dg(e))}function Hg(e){return function(e){const t=performance.now()
t-Ng>16&&(qg(e),Ng=t)}(e),e.preventDefault(),!1}function Ug(e){return qg(e),function(e,t,n,r){e instanceof EventTarget&&e.removeEventListener(t,n,r)}(document.body,"dragover",Hg),e.preventDefault(),!1}function Gg(e,t){!function(e,t){Og=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),Dg(t),Bg(),Ng=0,t.dataTransfer.setData("text/plain",""),au(document.body,"dragover",Hg),Rg(document.body,"drop",Ug)}function Wg(e,t){e.draggable=!0,au(e,"dragstart",xg(Gg,t))}function zg(e){return String(e).replaceAll(" ","_")}const Vg={}
function Qg(e,t,n){if(!e)return
const r=function(e,t){let n=zg(e)
return t&&(n+=`__${zg(t)}`),n}(e,t),i=function(e,t){let n=e
return t&&(n+=`__${zg(t)}`),n}(r,n)
Vg[i]||(Vg[i]=!0,Ea(r,function(e){return e?{eventLabel:e}:null}(n)))}let Jg=0
function Kg(e){const t=l(/\sguildId: (?<id>\d{1,6}),/,n(e))
t&&(Jg=Number(t))}function Yg(){return Jg||bg("script",document.body).forEach(Kg),Jg}function Xg(e){return Object.entries(e)}function Zg(e,t,[n,r]){Wc(r)&&null!==r?e(t[n],r):t[n]=r}function ev(e,t){Xg(t).forEach(xg(Zg,ev,e))}function tv(e,t){const n=document.createElement(e)
return t&&ev(n,t),n}function nv(e){return tv("div",e)}function rv(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function iv(e,t){return mg(rv(e,t))}function sv(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function ov(e,t){t instanceof Element&&(t.innerHTML=String(e))}const av={id:"content",style:{display:"none"}},lv={width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}
function cv(e){let n=t("content")
n?ov("",n):(n=nv(av),sv(document.body,n)),$(n).dialog(lv),iv("ui-dialog-titlebar-close").forEach(e=>e.blur()),e(n)}async function uv(e){(await e).default()}function dv(){uv(import("./mountBuffLog.svelte-BkopWaWD.js"))}function fv(){uv(import("./mountCombatLog.svelte-CSvkDamx.js"))}function hv(){uv(import("./mountCreatureLog.svelte-B4lNuwv2.js"))}function pv(){uv(import("./mountFsboxlog.svelte-DKGdGwgt.js"))}function gv(){uv(Promise.resolve().then(function(){return wE}))}function vv(){uv(import("./mountGuildTracker.svelte-cVaVRR1_.js"))}async function _v(e){(await import("./injectAuctionSearch-B-usuymO.js")).default(e)}async function mv(e){const{injectFindBuffs:t}=await import("./findBuffs-CTpeA6pl.js")
t(e)}async function yv(e){const{injectFindOther:t}=await import("./findBuffs-CTpeA6pl.js")
t(e)}async function bv(e){(await import("./injectOnlinePlayers-CwsDnuD0.js")).default(e)}function wv(){uv(Promise.resolve().then(function(){return TC}))}function kv(){uv(import("./mountQuickLinksMgr.svelte-BMhMooA_.js"))}async function Sv(e){(await import("./quickWear-DH0YZaIg.js")).default(e)}function xv(){uv(import("./mountRecipeMgr.svelte-CnL3x7gW.js"))}function Ev(){uv(import("./mountReliclist.svelte-DE9RlU7f.js"))}function Cv(e){return()=>cv(e)}var Tv=[{section:"Character",menu:[{label:"Buff Log",fn:dv},{label:"Combat Log",fn:fv},{label:"Creature Log",fn:hv},{label:"Recipe Manager",fn:xv},{label:"Quick Links",fn:kv},{label:"Inventory Manager",href:`${wl}invmanagernew`}]},{section:"Actions",menu:[{label:"Find Buffs",fn:Cv(mv)},{label:"Find Other",fn:Cv(yv)},{label:"Online Players",fn:Cv(bv)},{label:"AH Quick Search",fn:Cv(_v)}]},...Yg()?[{section:"Guild",menu:[{label:"Guild Inventory",href:`${wl}guildinvmgr`},{label:"New Guild Log",fn:gv},{label:"Merc Hunter",fn:function(){uv(import("./mountMercs.svelte-DEacS8hp.js"))}},{label:"Pot Report",fn:function(){uv(Promise.resolve().then(function(){return sC}))}},{label:"Guild Tracker",fn:vv}]}]:[],{section:"Extra",menu:[{label:"Quick Extract",fn:wv},{label:"Quick Wear",fn:Cv(Sv)},{label:"FS Box Log",fn:pv},{label:"SE Tracker",fn:function(){uv(Promise.resolve().then(function(){return GC}))}}]},...jc("betaOptIn")&&Yg()?[{section:"Beta Features",menu:[{label:"Relic List",fn:Ev,beta:!0},{label:"GS Export",fn:function(){uv(Promise.resolve().then(function(){return Sx}))},beta:!0},{label:"Who's Got What",fn:function(){uv(Promise.resolve().then(function(){return vT}))},beta:!0}]}]:[],{section:"FSH developer quick links",menu:[{playerId:1963510,playerName:"PointyHair"},{playerId:1674838,playerName:"Lusterless"}]}],Pv=(e,t,n)=>t(xh(n).label,xh(n).fn),Lv=Bh('<button type="button" class="svelte-12kkdk3"> </button>'),$v=(e,t,n)=>t(xh(n).label),Iv=Bh('<a class="svelte-12kkdk3"> </a>'),Rv=(e,t,n)=>t(xh(n).playerName),Ov=Bh('<button type="button" class="helperDevBtn svelte-12kkdk3">PM</button> <a class="svelte-12kkdk3"> </a>',1),Mv=Bh('<sup class="fshRed">beta</sup>'),Av=Bh("<li><!> <!></li>"),Fv=Bh('<h2 class="svelte-12kkdk3"> </h2> <ul></ul>',1)
Ah(["click"])
var jv=Bh('<div class="modal svelte-m67z4r"><!></div>'),Nv=Bh('<div><button type="button">Helper Menu</button> <!></div>')
function Dv(e,t){kd(t,!0)
let n=cf(!1)
const r=jc("keepHelperMenuOnScreen"),i=jc("draggableHelperMenu")
function s(){df(n,!xh(n))}var o=Nv()
let a
var l=Ef(o)
let c
l.__click=s
var u=Tf(l,2),d=e=>{var t=jv()
!function(e,t){function n(e){Qg("helperMenu",e)}function r(e,r){Gc(r)&&(n(e),t.doToggle(),r())}function i(e){n("sendMsg"),t.doToggle(),window.openQuickMsgDialog(e)}kd(t,!0)
var s=Hh()
ep(Cf(s),17,()=>Tv,Zh,(e,t)=>{var s=Fv(),o=Cf(s),a=Ef(o)
ep(Tf(o,2),21,()=>xh(t).menu,Zh,(e,t,s,o)=>{var a=Av(),l=Ef(a),c=e=>{var n=Lv()
n.__click=[Pv,r,t]
var i=Ef(n)
Nf(()=>Wh(i,xh(t).label)),Uh(e,n)},u=e=>{var r=Hh(),s=Cf(r),o=e=>{var r=Iv()
r.__click=[$v,n,t]
var i=Ef(r)
Nf(()=>{Sp(r,"href",xh(t).href),Wh(i,xh(t).label)}),Uh(e,r)},a=e=>{var n=Hh(),r=Cf(n),s=e=>{var n=Ov(),r=Cf(n)
r.__click=[Rv,i,t]
var s=Tf(r,2),o=Ef(s)
Nf(()=>{Sp(s,"href",`${vl??""}${xh(t).playerId??""}`),Wh(o,xh(t).playerName)}),Uh(e,n)}
Yh(r,e=>{xh(t).playerName&&e(s)},!0),Uh(e,n)}
Yh(s,e=>{xh(t).href?e(o):e(a,!1)},!0),Uh(e,r)}
Yh(l,e=>{xh(t).fn?e(c):e(u,!1)})
var d=Tf(l,2),f=e=>{Uh(e,Mv())}
Yh(d,e=>{xh(t).beta&&e(f)}),Uh(e,a)}),Nf(()=>Wh(a,xh(t).section)),Uh(e,s)}),Uh(e,s),Sd()}(Ef(t),{doToggle:s}),Rp(3,t,()=>ug,()=>({duration:100})),Uh(e,t)}
Yh(u,e=>{xh(n)&&e(d)}),lp(o,e=>{return t=e,void(i&&Wg(t))
var t}),Nf((e,t)=>{a=pp(o,0,"helper-menu svelte-m67z4r",null,a,e),c=pp(l,0,"toggle svelte-m67z4r",null,c,t)},[()=>({"helper-menu-fixed":r}),()=>({"helper-menu-move":i})]),Uh(e,o),Sd()}function Bv(){const e=Vc(".mainbody")
e&&function(e,t){zh(Dv,{target:t.parentElement,props:{props:e}})}({},e)}function qv(e){return new Promise(t=>{setTimeout(t,e)})}function Hv(e){au(window,"beforeunload",()=>e.abort())}Ah(["click"])
let Uv=0
let Gv=0
async function Wv(){Gv<5-$.active&&performance.now()-Uv>=900?(Gv=5-$.active,Uv=performance.now()):await qv(100)}async function zv(e,t=10){await async function(){for(;Gv<1;)await Wv()
Gv-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=Hv,$.ajax(t).fail((e,t,n)=>{e.textStatus=t,e.errorThrown=n})}(e)}catch(n){if(t&&n.status>500)return zv(e,t-1)
!function(e,t){if(![0,500,503].includes(t.status))throw new ou([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}async function Vv(e,t){return zc(await zv({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function Qv(e){return Vv(e,{method:"GET"})}function Jv(e){return Qv({cmd:"trade",...e})}function Kv(e,t){return Jv({subcmd:"sendgold",xc:window.ajaxXC,target_username:e,gold_amount:t})}function Yv(e,t,...n){return e(...n)}function Xv(e){return(new DOMParser).parseFromString(e,"text/html")}function Zv(e){return ev(e,{url:ol,data:{no_mobile:1}}),zv(e)}function e_(e){return Zv({data:e})}async function t_(e){const t=await e_(e)
if(t)return Xv(t)}function n_(e){const n=t("info-msg",e)
if(n){const e=n.innerHTML
return e?e.replace(/<br.*/,""):""}}async function r_(e,t){const n=await t_(e)
if(!n)return{s:!1}
const r=n_(n)
return r===t?{s:!0}:{s:!1,e:{message:r}}}let i_=0
const s_=()=>i_
function o_(){i_=jc("sendGoldonWorld")}async function a_(){if(!s_())return
Qg("NewMap","doSendGold")
const e=await function(e,t){return Yv(Kv,0,e,t)}($("#HelperSendTo").html(),$("#HelperSendAmt").html().replace(/[^\d]/g,""))
e.s&&(Hc("currentGoldSentTotal",parseInt(jc("currentGoldSentTotal"),10)+parseInt(jc("goldAmount"),10)),GameData.fetch(1))}function l_(e){window.location=e}function c_(e){jc("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function u_(e){Qg("keyHandler",e)}function d_(e){return e?.toLowerCase?.()}function f_(e,t){return d_(e)<d_(t)?-1:d_(e)>d_(t)?1:0}function h_(e){return Qv({cmd:"profile",...e})}async function p_(){const e=await h_({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort((e,t)=>f_(e.name,t.name))}:e}function g_(){return Yv(p_)}const v_=[e=>e?.s,(e,t)=>e.r?.length>t]
async function __(e){const t=await g_()
if(((e,t)=>v_.every(n=>n(t,e)))(e,t)){u_("changeCombatSet")
const n=t.r[e].id
c_("2"),l_(`${gl+cl}managecombatset&submit=Use&combatSetId=${n}`)}}function m_(e,n){t("worldPage")||(u_(e),l_(n))}function y_(){uu.enableMaxGroupSizeToJoin?l_(Il):l_($l)}function b_(){u_("logPage"),c_("2"),l_(hl)}function w_(e){e instanceof Element&&e.click()}function k_(e){const t=Vc(`#pCC input[value="${e}"]`)
t&&(u_("movePage"),w_(t))}const S_=[["!",__,0],["@",__,1],['"',__,1],["#",__,2],["£",__,2],["$",__,3],["%",__,4],["^",__,5],["&",__,6],["*",__,7],["(",__,8],["0",function(){m_("toWorld",Rl)}],["<",k_,"<"],[">",k_,">"],["G",function(){u_("createGroup"),c_("4"),l_(`${Tl}create`)}],["L",b_],["b",function(){u_("backpack"),c_("2"),l_(_l)}],["g",function(){u_("gotoGuild"),c_("4"),l_(`${xl}manage`)}],["j",function(){u_("joinAllGroup"),c_("4"),y_()}],["l",b_],["p",function(){u_("profile"),c_("2"),l_(gl)}],["r",function(){m_("doRepair",`${Al+cl}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in uu&&!uu.dialogIsClosed()||(u_("insertQuickWear"),cv(Sv))}],["y",a_]]
const x_=[e=>["HTML","BODY"].every(t=>e.target.tagName!==t),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function E_(e){var t;(t=e,x_.some(e=>e(t)))||function(e){const t=S_.find(([t])=>e===t)
t&&t[1](t[2])}(e.key)}function C_(){au(document,"keyup",E_)}function T_(e,t){return kg(t)===e}function P_(e){return xg(T_,e)}function L_(e,t,n){au(e,"click",t,n)}function $_(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function I_(e,t){return mg($_(e,t))}function R_(e){L_(e,()=>{Qg("chrome","Game Help link")}),ov(`<a href="${ll}settings">Game Help</a>`,e)}function O_(){I_("#pCR h3").filter(P_("Game Help")).forEach(R_)}function M_(e){uu[e]=jc(e)}function A_(e,t){if(t instanceof Element)return t.closest(e)}function F_(e){e?.classList&&e.classList.add("fshHide")}function j_(e){const n=A_("a",e.target)
n?.getAttribute("href")===El&&(Qg("useNewGuildLog","Alter Href"),e.preventDefault(),gv(),F_(t("notification-guild-log")))}function N_(){return uu.huntingMode&&window.realmKeyHandler}function D_(e){e.forEach(e=>Eu(3,e))}function B_(){return e_({cmd:"guild",subcmd:"manage"})}function q_(e){return A_("tr",e)}function H_(e,t){return a(e,t)?.groups??{}}function U_(e){const{d:t,h:n,m:r,s:i}=H_(Za,e),s=Number(t),o=Number(n)+24*s,a=Number(r)+60*o,l=Number(i)+60*a
return{day:t,days:s,hour:n,hours:o,min:r,mins:a,sec:i,secs:l,timestamp:Da()-l}}function G_(e){if(e?.href)return Number(l(el,e.href))}function W_(e,t){if(t){const n=new Set
return e.filter(e=>n.has(e[t])?0:n.add(e[t]))}return mg(new Set(e))}const z_=e=>Number(kg(q_(e)?.cells[4])?.replaceAll(",","")),V_=e=>kg(q_(e)?.cells[3]),Q_=e=>Number(l(nl,e))
function J_(e){return{guild_xp:z_(e),id:G_(e),name:kg(e),rank:V_(e)}}function K_(e){const{stam:t,max:n}=H_(tl,e)
return{current_stamina:Number(t),last_activity:U_(e).timestamp,level:Number(l(/Level:.+?(?<l>\d+)/,e)),max_stamina:Number(n),vl:Q_(e)}}function Y_(e){return{guild_id:Yg(),image_version:0,xp:-1,...J_(e),...K_(e.dataset.tipped)}}function X_(e,t,n){return{id:n,members:e.filter(e=>e.rank===t.rank),name:t.rank,permissions:0,tax:-1}}async function Z_(){const e=Xv(await B_()).getElementById("pCC")
if(!e)return{e:{code:0,message:"Failure"},s:!1}
const t=I_($c,e).map(Y_)
return{r:W_(t,"rank").map(xg(X_,t)),s:!0}}function em(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function tm(){return Gc(window.jQuery)}function nm(e){return Object.keys(e)}function rm(e){return Math.floor(Math.max(0,Da()-e)/86400)}function im(e){return Number.isNaN(e)}const sm=(e,t)=>t.some(t=>e instanceof t)
let om,am
const lm=new WeakMap,cm=new WeakMap,um=new WeakMap
let dm={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return lm.get(e)
if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gm(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}
function fm(e){dm=e(dm)}function hm(e){return(am||(am=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(vm(this),t),gm(this.request)}:function(...t){return gm(e.apply(vm(this),t))}}function pm(e){return"function"==typeof e?hm(e):(e instanceof IDBTransaction&&function(e){if(lm.has(e))return
const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()}
e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)})
lm.set(e,t)}(e),sm(e,om||(om=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,dm):e)}function gm(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(gm(e.result)),r()},s=()=>{n(e.error),r()}
e.addEventListener("success",i),e.addEventListener("error",s)})
return um.set(t,e),t}(e)
if(cm.has(e))return cm.get(e)
const t=pm(e)
return t!==e&&(cm.set(e,t),um.set(t,e)),t}const vm=e=>um.get(e)
function _m(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=gm(o)
return r&&o.addEventListener("upgradeneeded",e=>{r(gm(o.result),e.oldVersion,e.newVersion,gm(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}const mm=["get","getKey","getAll","getAllKeys","count"],ym=["put","add","delete","clear"],bm=new Map
function wm(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return
if(bm.get(t))return bm.get(t)
const n=t.replace(/FromIndex$/,""),r=t!==n,i=ym.includes(n)
if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!mm.includes(n))return
const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly")
let o=s.store
return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]}
return bm.set(t,s),s}fm(e=>({...e,get:(t,n,r)=>wm(t,n)||e.get(t,n,r),has:(t,n)=>!!wm(t,n)||e.has(t,n)}))
const km=["continue","continuePrimaryKey","advance"],Sm={},xm=new WeakMap,Em=new WeakMap,Cm={get(e,t){if(!km.includes(t))return e[t]
let n=Sm[t]
return n||(n=Sm[t]=function(...e){xm.set(this,Em.get(this)[t](...e))}),n}}
async function*Tm(...e){let t=this
if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return
const n=new Proxy(t,Cm)
for(Em.set(n,t),um.set(n,vm(t));t;)yield n,t=await(xm.get(n)||t.continue()),xm.delete(n)}function Pm(e,t){return t===Symbol.asyncIterator&&sm(e,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===t&&sm(e,[IDBIndex,IDBObjectStore])}fm(e=>({...e,get:(t,n,r)=>Pm(t,n)?Tm:e.get(t,n,r),has:(t,n)=>Pm(t,n)||e.has(t,n)}))
let Lm=Promise.resolve(),$m=!1
function Im(){return $m||(Lm=_m("keyval-store",1,{upgrade(e){e.createObjectStore("keyval")}}),$m=!0),Lm}async function Rm(e){try{return(await Im()).get("keyval",e)}catch(e){xa(e)}}async function Om(e,t){try{return(await Im()).put("keyval",t,e)}catch(e){xa(e)}}async function Mm(e){try{return(await Im()).delete("keyval",e)}catch(e){xa(e)}}const Am=0,Fm=1,jm=2,Nm=3,Dm=4,Bm=5,qm=6,Hm="fsh_guildActivity"
async function Um(e){return zc(await Zv({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function Gm(e){return Um({cmd:"export",...e})}function Wm(e){return Gm({guild_id:e,subcmd:"guild_members"})}function zm(e){return Promise.all(e)}function Vm(e){return tv("a",e)}function Qm(e,t){const n=URL.createObjectURL(e),r=Vm({download:t,href:n,style:{display:"none"}})
sv(document.body,r),w_(r),document.body.removeChild(r),setTimeout(()=>{URL.revokeObjectURL(n)},0)}function Jm(e){let t=e.toString()
return e<10&&(t=`0${t}`),t}function Km(e){return`${e[0]}-${e[1]}-${e[2]} ${e[3]}:${e[4]}:${e[5]}`}function Ym(e){return"[object Date]"===Object.prototype.toString.call(e)&&!im(e.getTime())}function Xm(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(Jm)}(e))}function Zm(e){if(Ym(e))return Km(Xm(e))}async function ey(){return await Rm(Hm)??{lastUpdate:0,members:{}}}const ty=e=>Zm(new Date(1e3*e)),ny=e=>[e[0],e[1],e[2],e[3],ty(e[4]),e[5],e[6]]
function ry(e){const{lastUpdate:t,members:n}=e
var r
return`Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n${Xg(n).flatMap((r=ty(t),([e,t])=>t.map(ny).map(t=>[r,e,...t].join(",")))).join("\n")}`}const iy=[e=>e.getFullYear().toString(),e=>e.getMonth()+1,e=>e.getDate(),e=>e.getHours(),e=>e.getMinutes(),e=>e.getSeconds()]
async function sy(e,t){const n=await ey()
if(!n.lastUpdate||!n.members)return
const r=e(n),i=new Blob([r],{type:t}),s=`${o=iy.map((e=>t=>t(e))(new Date)).map(Jm),`${o[0]}${o[1]}${o[2]}${o[3]}${o[4]}${o[5]}`}_GuildTracker.${t.split("/")[1]}`
var o
Qm(i,s)}async function oy(e){const t=await ey(),n={lastUpdate:t.lastUpdate,members:em(Xg(t.members).filter(([t])=>t!==e))}
Om(Hm,n)}async function ay(e){const t=await ey(),n={lastUpdate:t.lastUpdate,members:em(Xg(t.members).map(([t,n])=>[t,n.filter(t=>t[4]>e)]))}
Om(Hm,n)}async function ly(){const[e,t]=await zm([ey(),Wm(Yg())]),n=t.map(({username:e})=>e)
return nm(e.members).filter((e=>t=>!e.find(e=>e===t))(n)).sort(f_)}const cy=e=>[e.name,[rm(e.last_activity),e.current_stamina,e.level,e.max_stamina,Da(),e.vl,e.guild_xp]],uy=e=>e.members.map(cy),dy=[e=>!e,(e,t)=>e[1]!==t[1],(e,t)=>e[2]!==t[2],(e,t)=>e[3]>t[3],(e,t)=>e[5]!==t[5],(e,t)=>e[6]!==t[6]],fy=e=>!e.some(Ua),hy=e=>!e.some(im),py=([,e])=>e.length,gy=([e,t])=>[e,t.filter(fy).filter(hy)],vy=(e,t)=>e[4]>t[4]?e:t,_y=([e,t])=>[e,t.reduce(vy)],my=([e,t])=>[e,[t]],yy=(e,t,n)=>{return((e,t,n)=>({lastUpdate:Da(),members:em(nm({...e,...t,...n}).map(r=>[r,[...e[r]??[],...t[r]??[],...n[r]??[]]]))}))(em(e.map((e=>([t,n])=>[t,n.filter(n=>n[4]!==e[t][4])])(t))),em(Xg(t).filter((r=n,([e,t])=>dy.some(n=>n(r[e]?.[0],t)))).map(my)),n)
var r}
function by(e,t){const n=Xg(e.members||{}).map(gy).filter(py)
const r=em(n.map(_y)),i=(e=>e.r.flatMap(uy))(t).filter((e=>([t])=>!e[t]||Da()-e[t][4]>=86100)(r))
i.length?function(e,t,n){e&&t&&n&&Om(Hm,yy(t,n,em(e.map(my))))}(i,n,r):function(e){e&&Om(Hm,{lastUpdate:Da(),members:em(e)})}(n)}function wy(e){(e=>Da()>fu(e.lastUpdate,0)+300)(e)&&async function(e){const t=await Z_()
t.s&&by(e,t)}(e)}function ky(){return!tm()}function Sy(e){return tv("li",e)}function xy(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function Ey(e,t){if(t instanceof Node&&t.parentNode instanceof Node)return function(e,t){return t.nextSibling instanceof Node?xy(e,t.nextSibling):sv(t.parentNode,e)}(e,t)}const Cy=["Buff Log","Combat Logs","Creature Logs","Quick Links","Recipe Manager","New Guild Log"]
function Ty(e,t){Qg("accordion",e),Cy.includes(e)?t():cv(t)}function Py(e,t,n,r){const i=function(e,t,n){const r=Sy({className:`nav-level-${e}`}),i=Vm({className:"nav-link fshPoint",textContent:t})
return sv(r,i),Ey(r,n.parentNode),i}(e,t,r)
Gc(n)?L_(i,xg(Ty,t,n)):(i.href=n,L_(i,()=>Qg("accordion",t)))}const Ly=[[e=>e.recipeManagerLink,"1","Recipe Manager",xv,"nav-character-log"],[e=>e.inventoryManagerLink,"1","Inventory Manager",`${wl}invmanagernew`,"nav-character-log"],[e=>e.medalGuideLink,"1","Medal Guide",`${gl}${cl}medalguide`,"nav-character-log"],[e=>e.buffLogLink&&jc("keepBuffLog"),"1","Buff Log",dv,"nav-character-log"],[e=>e.combatLogLink&&jc("keepLogs"),"1","Combat Logs",fv,"nav-character-notepad"],[e=>e.creatureLogLink&&jc("showMonsterLog"),"1","Creature Logs",hv,"nav-character-notepad"],[e=>e.quickLinksLink,"1","Quick Links",kv,"nav-character-notepad"],[e=>e.auctionSearchLink,"2","AH Quick Search",_v,"nav-actions-trade-auctionhouse"],[e=>e.onlinePlayersLink,"2","Online Players",bv,"nav-actions-interaction-findplayer"],[e=>e.findOtherLink,"2","Find Other",yv,"nav-actions-interaction-findplayer"],[e=>e.findBuffsLink,"2","Find Buffs",mv,"nav-actions-interaction-findplayer"],[e=>e.guildInventoryLink&&Yg(),"2","Guild Inventory",`${wl}guildinvmgr`,"nav-guild-storehouse-inventory"],[e=>e.newGuildLogLink&&Yg()&&!jc("useNewGuildLog"),"2","New Guild Log",gv,"nav-guild-ledger-advisor"],[e=>e.topRatedLink,"2","Top 250 Players",`${ll}toprated${cl}xp`,"nav-toprated-players-level"]]
function $y(e){Ly.forEach(([n,r,i,s,o])=>{n(e)&&function(e,n,r,i){const s=t(i)
s instanceof Node&&Py(e,n,r,s)}(r,i,s,o)})}const Iy=e=>22*I_("li",e).length||null
function Ry(e,t,n){$y(n),function(e,t){t.heights=I_("#nav > li").map(Iy)
const n=Number(t.state)
n&&n>-1&&n<e.children.length&&(e.children[t.state].children[1].style.height=`${t.heights[t.state]}px`)}(e,t)}var Oy=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function My(e){return function(e){return-1!==e&&0===Vc(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?(Qg("accordion","collapse"),-1):e}const Ay=(e,t,n)=>$(e).data(`${n}${t}`)
function Fy(e,t,n){return new Promise(r=>{const i=Ay(e,t,n)
i?r(i):function(e,t,n,r){$(e).on(`${d_(t)}create`,()=>{r(Ay(e,t,n))})}(e,t,n,r)})}const jy=[[e=>!Wc(e),()=>cu("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>cu("$('#nav').data('hcsNav').heights does not exist")]]
async function Ny(){const e=t("nav"),n=await Fy(e,"Nav","hcs")
return function(e){const t=jy.find(([t])=>t(e))
return!t||(t[1](),!1)}(n)?{theNav:e,myNav:n}:{}}function Dy(){!function(){const e=jc("lastActiveQuestPage")
jc("storeLastQuestPage")&&e.length>0&&(t("nav-character-questbook").href=e)}(),function(){const e=jc("lastScavPage")
jc("storeLastScavPage")&&e.length>0&&(t("nav-actions-artisanship-scavenging").href=e)}()}async function By(){const{theNav:e,myNav:t}=await Ny()
e&&t&&(Dy(),function(e,t){const n=Oy.map(e=>[e,jc(e)])
n.some(([,e])=>e)&&Ry(e,t,em(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,My(n))}}(t))}function qy(e){return e_({cmd:"bounty",page:e})}function Hy(e){return e()}function Uy(e,t){Hc(e,lu(t))}let Gy=0,Wy=0
const zy=()=>Gy,Vy=()=>Wy
function Qy(){return nv({className:"minibox"})}function Jy(e){return tv("span",e)}function Ky(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function Yy(e,t){Ky(e,"beforeend",t)}function Xy([e,t,n,r,i]){const s=e(),o=n()
if(o)return Uy(t,o),ov("",s),function(e,t,n,r){const i=nv({innerHTML:`<a class="fshBountyHeader" href="${ql}">${n} Bounties</a> `}),s=Jy({className:"xxsLink",textContent:"Reset"})
return sv(i,s),sv(e,i),Yy(e,function(e,t,n){const r=e.bounty
return 0===r.length?`<div class="xsOrange">[No ${t.toLowerCase()} bounties]</div>`:r.map(n).join("")}(t,n,r)),s}(s,o,r,i)}function Zy(e,t){return`<a href="${e.link}" class="xsKhaki tip-static" data-tipped="${t(e)}">${e.target}</a><br>`}function eb(e,t){if("string"==typeof t){const e=a(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function tb(e){const t=jc(e)
if(t)return zc(t,eb)}function nb(e){return e.split(",").map(wg)}function rb(e){const t=jc(e)
return t?nb(t):[]}function ib(e){return Vc("img",e[2]).title}function sb(e){const t="A"===(r=e[0]).children[0].tagName?r.children[0]:r.children[0].children[0]
var r
return{target:n(t),link:t.href,lvl:n(t.nextSibling).replace(/[[|\]]/g,""),reward:n(e[2]),rewardType:ib(e),xpLoss:n(e[3]),posted:n(e[4])}}let ob=0,ab={},lb={},cb=!1,ub=!1,db=[]
const fb=()=>ab,hb=()=>lb,pb=()=>db
function gb(e){return{...sb(e),progress:n(e[5])}}function vb(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=gb(e.rows[t].cells)
ab.bounty.push(n)}}(e)}function _b(e,t){return function(e){if(e)return ab&&Da()-ab.lastUpdate>ob}(e)||function(e){if(e)return lb&&Da()-lb.lastUpdate>ob}(t)}let mb=0
function yb(e){return`Level:  ${e.lvl}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Progress:  ${e.progress}`}function bb(e){return Zy(e,yb)}function wb(){mb=Xy([zy,"bountyList",fb,"Active",bb])}let kb=0
function Sb(e){return`Target Level:  ${e.lvl}<br>Offerer: ${e.offerer}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Posted: ${e.posted}<br>Tickets Req.:  ${e.tickets}`}function xb(e){return e.accept?`<span class="xsGreen" onclick="${e.accept}">[a]</span>&nbsp;`:""}function Eb(e){return[xb(e),Zy(e,Sb)].join("")}function Cb(){kb=Xy([Vy,"wantedList",hb,"Wanted",Eb])}function Tb(e){const t=e[6]
return"[n/a]"!==kg(t)?t.children[0].children[0].getAttribute("onclick"):""}const Pb=[()=>pb().includes("*"),e=>pb().includes(e),(e,t)=>uu.wantedGuildMembers&&"[n/a]"===kg(t.cells[6])]
function Lb(e,t){var n;(function(e,t){return"[active]"!==kg(t.cells[6])&&Pb.some(n=>n(e,t))})(e,t)&&hb().bounty.push({...sb(n=t.cells),offerer:kg(n[1].children[0].children[0]),tickets:kg(n[5]),accept:Tb(n)})}let $b=0,Ib=0
function Rb(e){const n=Vc('#pCC input[name="page"]',e)
if(!n)return
$b=Number(n.value),Ib=Number(l(/of&nbsp;(?<of>\d*)/,n.parentNode.innerHTML))
const r=t("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
r&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],r=kg(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===r)break
Lb(r,n)}}(r)}function Ob(e){uu.enableActiveBountyList&&!cb&&(!function(e){const n=t("bounty-info",e)
if(!n)return
const r=n.parentNode.parentNode.previousElementSibling.children[0].children[0]
ab={},ab.bounty=[],ab.isRefreshed=!0,ab.lastUpdate=Da(),r&&vb(r),cb=!0}(e),wb())}async function Mb(e){const t=Xv(e)
if(Ob(t),uu.enableWantedList)if(Rb(t),$b<Ib){Mb(await qy($b+1))}else Cb()}const Ab=[()=>!fb(),()=>!hb(),()=>ub]
async function Fb(){if(function(e,t){ab=tb("bountyList"),lb=tb("wantedList"),ob=jc("bountyListRefreshTime"),ub=jc("bwNeedsRefresh"),ub||_b(e,t)&&(ub=!0)}(uu.enableActiveBountyList,uu.enableWantedList),Ab.some(Hy)){lb={},lb.bounty=[],lb.isRefreshed=!0,lb.lastUpdate=Da(),cb=!1,db=rb("wantedNames"),Hc("bwNeedsRefresh",!1)
Mb(await qy(1))}else!function(e,t){t&&(hb().isRefreshed=!1,Cb()),e&&(fb().isRefreshed=!1,wb())}(uu.enableActiveBountyList,uu.enableWantedList)}function jb(e,t){Qg("activeWantedBounties",e),Uy(t,null),Fb()}function Nb(e){e.target===mb&&jb("getBountyListReset","bountyList"),e.target===kb&&jb("getWantedListReset","wantedList")}function Db(e,t){return Gm({subcmd:"profile",player_username:e,...t&&{_:Ma()}})}async function Bb(e){const t=await Db(s(),e),n=t?.username===s(),r=n?{...t,lastUpdate:Fa()}:t
return n&&Om("fsh_selfProfile",r),r}function qb(e){return(e=>Fa()-uu.allyEnemyOnlineRefreshTime<e?.lastUpdate)(e)?e:Bb()}async function Hb(e){if(e)return Bb(e)
return qb(await Rm("fsh_selfProfile"))}function Ub(e,t){return t?.classList?.contains(e)}function Gb(e,t){return Ub(t[0],e)}function Wb(e,t,n){const{target:r}=n,i=t.find(xg(e,r))
if(i)return i[1](r)}function zb(e){return xg(Wb,Gb,e)}function Vb(e){return Cu(e,"player_id")}function Qb(e,t,n){return Math.floor(Math.max(e-t,0)/2+n)}function Jb(e,t,n,r,i){let s=r
500===r&&(s=1e3)
const o=Qb(window.screen.availHeight,s,window.screenY),a=Qb(document.documentElement.clientWidth,n,window.screenX)
window.open(e,t,`width=${n}, height=${s}, left=${a}, top=${o}${i}`)}function Kb(e,t){let n=""
t&&(n=`&blist=${t}`),Jb(`${Fl}&t=${e}${n}`,"fsQuickBuff",618,1e3,",scrollbars")}function Yb(e){let t=e,n=Math.floor(t/60)
t%=60
let r=Math.floor(n/60)
n%=60
const i=Math.floor(r/24)
return r%=24,[i,r,n,t]}function Xb(e,t){return 0===e?"":String(e)+t}function Zb(e){const t=Yb(Math.abs(Da()-e))
return`${Xb(t[0]," days, ")+Xb(t[1]," hours, ")+Xb(t[2]," mins, ")+t[3]} secs`}const ew="enemy-buff-check-on",tw="enemy-buff-check-off",nw="enemy-send-message",rw="enemy-quickbuff",iw="enemy-quick-buff",sw=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function ow(e,t){return t[0](Da()-e)}function aw(e,t){return`<a class="player-name tip-static ${function(e,t){const n=sw.find(xg(ow,e))
return n?function(e,t){return e?t[1]:t[2]}(t,n):"fshWhite"}(e.last_login,t)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${Zb(e.last_login)}</td></tr></tbody></table>" href="${vl}${e.id}">${e.username}</a>`}function lw(e){return Da()-e.last_login<1800}function cw(e,t){return`<li class="player"><div class="player-row">${uu.hideBuffSelected?"":`<span class="${ew}"></span>`}${aw(t,e)}</div><div class="guild-minibox-actions">${uu.hideGuildInfoMessage?"":`<span class="${nw} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}${uu.hideGuildInfoBuff?"":`<span class="${rw} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}${function(e){return uu.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${yl}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return uu.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${ml}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function uw(e,t){return e.filter(lw).map(xg(cw,t)).join("")}const dw=[(e,t)=>e.length+t.length,(e,t)=>{if(!uu.enableAllyOnlineList)return t.length},e=>{if(!uu.enableEnemyOnlineList)return e.length}]
function fw(e){Qg("allyEnemy",e)}function hw(e,t,n){return 0===n(e,t)}function pw(e){const n=fu(e._allies,[]),r=fu(e._enemies,[]);(function(e,t){return dw.every(xg(hw,e,t))})(n,r)||function(e,n){let r=""
uu.enableAllyOnlineList&&(r+=uw(e,!0)),uu.enableEnemyOnlineList&&(r+=uw(n,!1))
const i=t("fshContactList")
ov("",i),Yy(i,r)}(n,r)}function gw(e){fw("toggleBuffSelected"),e.classList.toggle(ew),e.classList.toggle(tw)}const vw=[[ew,gw],[tw,gw],[nw,function(e){fw("msgPlayer"),window.openQuickMsgDialog(n(e.parentNode.previousElementSibling.lastElementChild))}],[rw,function(e){fw("buffPlayer"),Kb(Vb(e.parentNode.previousElementSibling.lastElementChild.href))}],[iw,function(){fw("selectedBuff"),Kb(iv(ew,t("fshContactList")).map(e=>Vb(e.nextElementSibling.href)).join(","))}]]
function _w(e){const{target:t}=e
"fshResetEnemy"!==t.id?zb(vw)(e):async function(){fw("resetList"),pw(await Hb(!0))}()}function mw(e){const t=nv({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>'
uu.hideBuffSelected||(n+=`<ul class="${iw}">Quick Buff Selected</ul>`),n+="</div></div>",Yy(t,n),sv(Pg(),t),L_(t,_w),pw(e)}function yw(e){if(e?.length)return n(e[0].nextElementSibling)}function bw(e){return e?Number(e.replace(/,/g,"")):0}function ww(e){return bw(yw(rv(e)))}function kw(e,t){const n=e?.split(" ").map(e=>e.slice(0,-1))
var r
if(n)return`<dd>${r=new Date(Fa()+1e3*(60*(60*t+Number(n[0]))+Number(n[1]))),`${Jm(r.getHours())}:${Jm(r.getMinutes())} ${r.toLocaleString("en",{weekday:"short"})} ${Jm(r.getDate())}/${Ja[r.getMonth()]}/${r.getFullYear()}`}</dd>`}function Sw(e,t,n){e.target===xh(t)&&n.close()}var xw=Bh("<div><!></div>")
function Ew(e,t){kd(t,!0)
let n,r,i,s=rg(t,"visible",3,!0),o=cf(void 0)
Mf(()=>{s()?document.body.classList.contains("noscroll")||(n=!0,r=window.scrollY,i=document.body.style.top,document.body.classList.add("noscroll"),document.body.style.top=`-${r}px`):n&&(document.body.classList.remove("noscroll"),document.body.style.top=i||"",window.scrollTo(0,r))})
var a=xw()
let l
a.__click=[Sw,o,t],op(Ef(a),()=>t.children??Bu),Up(a,e=>df(o,e),()=>xh(o)),Nf(e=>l=pp(a,0,"svelte-1joucfc",null,l,e),[()=>({visible:s()})]),Uh(e,a),Sd()}let Cw
Ah(["click"])
var Tw=Bh('<div role="dialog" aria-modal="true"><!></div>')
function Pw(e,t){kd(t,!0)
let n,r=rg(t,"modal",15),i=rg(t,"visible",3,!0)
Mf(()=>{i()?(uu.dialogIsClosed&&(n=uu.dialogIsClosed),uu.dialogIsClosed=()=>!i()):n&&(uu.dialogIsClosed=n)}),Ew(e,{get close(){return t.close},get visible(){return i()},children:(e,n)=>{!function(e,t){kd(t,!0)
let n=rg(t,"modal",15),r=rg(t,"visible",3,!0),i=tf(r),s=cf(void 0),o=cf(void 0)
const a=e=>e.tabIndex>=0&&e.offsetWidth>0&&e.offsetHeight>0&&!e.disabled
Mf(()=>{r()?(df(s,document?.activeElement,!0),n()&&(df(o,Cw,!0),Cw=n())):(xh(s)?.focus(),n()&&(Cw=xh(o)))})
var l=Tw()
let c
Mh("keydown",mf,function(e){if(r())if("Escape"!==e.key||Cw!==n()){if("Tab"===e.key){const t=I_("*",n()).filter(a)
let r=t.indexOf(document.activeElement);-1===r&&e.shiftKey&&(r=0),r+=t.length+(e.shiftKey?-1:1),r%=t.length,t[r].focus(),e.preventDefault()}}else t.close()}),op(Ef(l),()=>t.children??Bu),Up(l,e=>n(e),()=>n()),Nf(e=>c=pp(l,0,"ui-dialog svelte-h5colk",null,c,e),[()=>({modalVisible:xh(i)})]),Uh(e,l),Sd()}(e,{get close(){return t.close},get visible(){return i()},get modal(){return r()},set modal(e){r(e)},children:(e,n)=>{var r=Hh()
op(Cf(r),()=>t.children??Bu),Uh(e,r)},$$slots:{default:!0}})},$$slots:{default:!0}}),Sd()}function Lw(e,t,n){t(!1),n.resolve(!0)}var $w=Bh('<div class="svelte-2mrn1o"> </div> <div class="svelte-2mrn1o"><button type="button" class="svelte-2mrn1o">Yes</button> <button type="button" class="svelte-2mrn1o">No</button></div>',1)
function Iw(e,t){kd(t,!0)
let n=rg(t,"msg",3,"Are you sure?"),r=rg(t,"visible",15,!0)
function i(){r(!1),t.resolve(!1)}Pw(e,{close:i,get visible(){return r()},children:(e,s)=>{var o=$w(),a=Cf(o),l=Ef(a),c=Ef(Tf(a,2))
c.__click=[Lw,r,t],Tf(c,2).__click=i,Nf(()=>Wh(l,n())),Uh(e,o)},$$slots:{default:!0}}),Sd()}Ah(["click"])
const Rw=gf({visible:!0})
let Ow=null
function Mw(e){Rw.resolve=e,Ow?Rw.visible=!0:Ow=zh(Iw,{props:Rw,target:document.body})}function Aw(e){return Rw.msg=e,new Promise(Mw)}async function Fw(e){if("daily-quest-reroll-button"!==e.target.id)return
e.stopPropagation()
await Aw("Are you sure you want to re-roll the Daily Quest?")&&async function(){const e=t("minibox-daily-quest")
if(!e)return
Qg("dailyQuest","reroll")
const n=await t_({cmd:"dailyquests",subcmd:"reroll"})
if(!n)return
const r=t("minibox-daily-quest",n)
r&&e.replaceWith(r)}()}function jw(e){return tv("button",{...e,type:"button"})}function Nw(e,t){Yy(e,t)}function Dw(){Qg("fsbox","open log"),pv()}function Bw(e,t){const n=Jy({className:`fsh-fsbox ${e}`,textContent:"[ "})
return sv(n,t),Nw(n," ]"),n}function qw(e){const t=Vc($c,e)
t&&(function(e,t){const r=Vm({href:`${pl}${n(t)}`,textContent:"Ignore"})
L_(r,()=>Qg("fsbox","ignore link")),sv(e,Bw("fs-box-ignore",r))}(e,t),async function(e){const t=await Rm("fsh_fsboxcontent")??"",n=wg(Vc(".message",e).innerHTML)
if(t.includes(n))return
Om("fsh_fsboxcontent",`<br>${n}${t}`.slice(0,9999))}(e))}function Hw(e){e.classList.add("fshRelative"),function(e){const t=jw({textContent:"Log"})
L_(t,Dw),sv(e,Bw("fs-box-log",t))}(e),qw(e)}function Uw(e,t){t instanceof Node&&(t.textContent=String(e))}let Gw=null
function Ww(){return Gw||(Gw=t("quickMessageDialog")),Gw}let zw=0
function Vw(e){(function(){if(!zw){const e=rv("validateTips",Ww())
1===e.length&&([zw]=e)}return zw})()&&Uw(fu(e,""),zw)}let Qw=null
function Jw(){return Qw||(Qw=t("quickMsgDialog_msg"),Qw.maxLength=512),Qw}let Kw=null,Yw=0,Xw=0
function Zw(e){"Enter"!==e.key||e.shiftKey||(Qg("messaging","sendOnEnter"),e.preventDefault(),function(){if(!Xw){const e=$(Ww()).dialog("option","buttons")
Xw=e["Send Message"]}return Xw}()())}function ek(){Ua(Kw)&&(Kw=jc("enterForSendMessage")),Kw&&!Yw&&(au(Jw(),"keypress",Zw),Yw=!0)}let tk=null
let nk=0,rk=0,ik=0
function sk(e,t,n){const r=rk.insertRow(e)
let i=r.insertCell(-1)
Yy(i,t),i=r.insertCell(-1),Yy(i,n)}function ok(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function ak(e,t){sk(e,ok("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const lk=[["del-button",function(e){Qg("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
rk.deleteRow(t),nk.splice(t-2,1),Uy("quickMsg",nk)}],["add-button",function(e){Qg("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){ak(e.parentNode.parentNode.rowIndex,n),t.value="",nk.push(n),Uy("quickMsg",nk)}}],["add-template",function(e){Qg("messaging","insertTemplate"),Jw().value+=`${n(e).replace(/\{playername\}/g,tk)}`}]]
function ck(e){ak(-1,e)}function uk(){jc("enableMessageTemplates")&&!ik&&(L_((rk||(rk=Ww().lastElementChild),rk),zb(lk)),(nk||(nk=tb("quickMsg")),nk).forEach(ck),sk(-1,ok("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),ik=!0)}function dk(e,n,r){const i=Ww()
Ub("ui-dialog-content",i)&&(!function(e){tk=e,Uw(e,t("quickMsgDialog_targetUsername"))}(e),function(e){const t=Jw()
t.value=fu(e,""),t.disabled=!1}(n),Vw(r),uk(),ek(),$(i).dialog("open"))}function fk(e){return Qv({cmd:"composing",...e})}function hk(){return fk({subcmd:"view"})}function pk(){return Yv(hk)}function gk(e,n,r){const i=Sy({className:"notification"}),s=Vm({href:r,innerHTML:`<span class="notification-icon"></span><p class="notification-content">${n}</p>`})
L_(s,()=>{Qg("notification",e)}),sv(i,s),sv(t("notifications"),i)}function vk(){gk("composing","Composing to do",jl)}function _k(e){return e.time_remaining}function mk(){vk(),Hc(cc,!0)}function yk(e){const t=e.h.p.find(({k:e})=>52===e)?.v
e.r.potions.length!==t?mk():function(e){const t=Math.min.apply(null,e.map(_k))
t>0?(Hc(cc,!1),Hc(uc,Fa()+1e3*t)):mk()}(e.r.potions)}function bk(){jc(cc)?vk():async function(){const e=jc(uc)
if(e&&Fa()<e)return
const t=await pk()
t?.s&&yk(t)}()}function wk(e){return Qv({cmd:"guild",...e})}function kk(e){return wk({subcmd:"groups",...e})}function Sk(e){return kk({subcmd2:"joinall",group:e})}function xk(e){return Yv(Sk,0,e)}function Ek(){return kk({subcmd2:"view"})}function Ck(){return Yv(Ek)}function Tk(e,t){xh(t)||(e.preventDefault(),Qg("notification","Join All"),df(t,1))}var Pk=Bh('<p class="notification-content" style="line-height: 32px;">Joined.</p>'),Lk=Bh('<span class="notification-content fshSpinner fix-classic-theme svelte-v71ckx"></span>'),$k=Bh('<p class="notification-content"><button type="button" class="svelte-v71ckx"> </button></p>'),Ik=Bh('<a><span id="notification-icon-guild-group" class="notification-icon"></span> <!></a>')
function Rk(e,t){kd(t,!0)
let n=cf(0),r=cf(gf($l)),i=cf("")
const o=e=>!uu.enableMaxGroupSizeToJoin||e.members.length<uu.maxGroupSizeToJoin,a=e=>e.name===s(),l=e=>!e.members.find(a),c=e=>e.id
async function u(){const e=await Ck()
e?.s&&await async function(e){const t=e.r.filter(o).filter(l).map(c)
t.length&&await xk(t)}(e)}uu.enableMaxGroupSizeToJoin&&(df(r,Il,!0),df(i,` less than size ${uu.maxGroupSizeToJoin}`))
var d=Ik(),f=Tf(Ef(d),2),h=e=>{var t=Hh()
Kh(Cf(t),u,e=>{Uh(e,Lk())},e=>{Uh(e,Pk())}),Uh(e,t)},p=e=>{var t=$k(),r=Ef(t)
r.__click=[Tk,n]
var s=Ef(r)
Nf(()=>Wh(s,`Join all attack groups${xh(i)??""}.`)),Uh(e,t)}
Yh(f,e=>{xh(n)?e(h):e(p,!1)}),Nf(()=>Sp(d,"href",xh(r))),Uh(e,d),Sd()}function Ok(e){return Qv({cmd:"temple",...e})}function Mk(e){return Ok({subcmd:"pray",type:e})}function Ak(){return Ok({subcmd:"view"})}function Fk(e){$(e).qtip("hide")}Ah(["click"])
let jk=Element
const Nk=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${ll}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
function Dk(e){Hc("needToPray",e),Hc("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}async function Bk(e){const t=e.target.getAttribute("praytype")
t&&(Qg("notification","prayToGods"),Fk(e.target),await function(e){return Yv(Mk,0,e)}(t),jk.outerHTML='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',Dk(!1))}function qk(){Yy(t("notifications"),Nk),jk=t("helperPrayToGods"),Rg(jk,"click",Bk)}async function Hk(){if(!uu.enableTempleAlert)return
const e="temple"===uu.cmd?function(e){if(!e)return{s:!1}
const t=Vc("#pCC",e)
return t?{s:!0,r:{pray_index:"You are currently praying at the temple."===kg(t)?0:-1}}:{s:!1}}(document):await Yv(Ak)
if(!e.s)return
const t=-1===e.r.pray_index
t&&qk(),Dk(t)}function Uk(){var e
!(e=jc("lastTempleCheck"))||Fa()>e?Hk():jc("needToPray")&&qk()}function Gk(){return e={subcmd:"goldupgrades"},Qv({cmd:"points",...e})
var e}function Wk(e,t,n){if(e?.rows)return mg(e.rows).filter((e,r)=>e.children.length===t&&r>n)}function zk(e,t){const n=Number(kg(e.cells[2]).split(" / ")[0]),r=kg(e.cells[3])
return{id:t,...!["-","n/a"].includes(r)&&{reset_time:Date.parse(`${r} GMT`)/1e3},current:im(n)?0:n}}function Vk(){return-1!==window.location.search.indexOf("cmd=points&type=1")}function Qk(){Vk()||gk("stamina","Upgrade stamina with gold",`${Sl}&type=1`)}async function Jk(){if(Vk()&&function(){const e=$_('#pCC input[name="quantity"]')
e?.length<2||(e[0].value="100",e[1].value="10")}(),!uu.enableUpgradeAlert)return
const e=Vk()?function(e){if(!e)return{s:!1}
const t=Vc("#pCC > table",e)
return t?{s:!0,r:Wk(t,5,0).map(zk)}:{s:!1}}(document):await Yv(Gk)
Ga(e?.r?.[1]?.current)||function(e){10!==e.current?(Qk(),Hc("needToDoUpgrade",!0)):(Hc("needToDoUpgrade",!1),Hc("lastUpgradeCheck",1e3*e.reset_time))}(e.r[1])}function Kk(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?xy(t,e.firstChild):sv(e,t)}(e,t)}function Yk(e,t){t.stopPropagation(),Qg("chrome","statbar",e)}function Xk(e,n){const r=t(`statbar-${n}`)
if(!r)return
const i=Vm({href:e}),s=r.parentNode
sv(i,r),Kk(s,i),L_(i,xg(Yk,n),!0)}function Zk(e,t){iv("player-name",e).forEach(t)}const eS=/Last Activity:<\/td><td>(?<mins>\d+) mins/
function tS(e,t){const n=e.dataset.tipped,r=l(eS,n)
r<2?e.classList.add(t.l1):r<5?e.classList.add(t.l2):e.classList.add(t.l3)}const nS=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function rS(e,t){nS.forEach(n=>{uu[n[0]]&&mg($_(n[t],e)).forEach(F_)})}function iS(e){e?.classList&&e.classList.add("fshInvisible")}function sS(e,n){uu.hideBuffSelected&&(mg(rv(`${n}-buff-check-on`,e)).forEach(iS),iS(t(`${n}-quick-buff`)))}function oS(e){tS(e,{l1:"fshGreen",l2:"fshWhite",l3:"fshGrey"})}function aS(e,t,n){I_(`#pCR h${e}`).filter(P_(t)).forEach(e=>{const r=Vm({href:`${xl}${n}`,textContent:t})
L_(r,()=>{Qg("widgets",`guild ${n}`)}),e.replaceChild(r,e.firstChild)})}function lS(e){tS(e,{l1:"fshDodgerBlue",l2:"fshLightSkyBlue",l3:"fshPowderBlue"})}function cS(e){const n=t(e)
n&&(n.classList.add("pCR"),sv(Pg(),n))}function uS(e){const n=t(e)
n&&Kk($g(),n)}function dS([e,t,n,r,i]){return Date.UTC(Number(e),Ja.indexOf(t),Number(n),Number(r),Number(i),0)}function fS(e){if(e?.src)return e.src.split("/").at(-1).split(".")[0]}function hS(e){return Xg(e?.seData??{}).flatMap(([t,n])=>du(n)?n.map(([n,r,i,s,o,a,l=-1])=>[n,t,r,i,e?.realms[s],o,a,l]):[[n,t.replaceAll(" ","_"),0,"","","",""]])}const pS=e=>e.join("|"),gS=e=>e.split("|")
function vS(e){const{time:t,creature:n,playerId:r,playerName:i,location:s,drop:o,creatureId:a}=e,l=s.match(/^(.*?)\s(\(\d+, \d+\))$/)
return[t,n.replace(" (Super Elite)","").replaceAll(" ","_"),r,i,l?l[1]:"realm unknown",l?l[2]:"coordinates unknown",o,a]}function _S(e,t){const n=((e,t)=>W_(e.map(pS).concat(t.map(pS))).map(gS).map(([e,t,n,r,i,s,o,a])=>[Number(e),t,Number(n),r,i,s,o,Number(a)]).sort(([e],[t])=>t-e))(t.map(vS),hS(e)),r=W_(n.map(([,,,,e])=>e)).sort(f_),i=(e=>t=>em(W_(t.map(([,e])=>e)).map(n=>[n,t.filter(([,e])=>e===n).map(([t,,n,r,i,s,o,a])=>[t,n,r,e.findIndex(e=>e===i),s,o,a]).slice(0,10)])))(r)(n)
return{seData:i,realms:r}}const mS=Qp()
let yS=!1,bS={},wS=0,kS=!1
const SS=e=>Math.max(0,600-(Aa()-(e?.lastUpdate??0)),600-(Aa()-wS))
function xS(e){const t=e.replace("<br>"," ").split(/[: /]/)
return dS([t[2],t[1],t[0],t[3],t[4]])}function ES(e){const t=mg(e.childNodes).filter(e=>e.nodeType===Node.TEXT_NODE&&""!==kg(e))
return 0===t.length?"":t.map(e=>kg(e)).join(" ")}const CS=e=>({time:xS(e.cells[0].innerHTML)/1e3,creature:kg(e.cells[1]),creatureId:Number(l(rl,Vc("img",e.cells[1]).src)),playerId:G_(Vc("a",e.cells[2])),playerName:kg(Vc("a",e.cells[2])),location:ES(e.cells[2]),drop:fS(Vc("img",e.cells[3]))??"no drop"})
async function TS(){wS=Aa()
const e=await async function(){const e=await t_({cmd:"superelite"})
return e&&Vc('img[src*="eliteslayerlog"]',e)?Wk(Vc("#pCC table table",e),4,0).map(CS):[]}()
e?.length&&(bS=_S(bS,e),Om("fsh_seLog",{lastUpdate:wS,...bS}),mS.set(bS))}function PS(e,t){kS=t,e(kS),kS&&!yS&&async function(){for(yS=!0,bS=await Rm("fsh_seLog"),mS.set(bS);kS;)yS=!0,await qv(1e3*SS(bS)),kS&&await TS(),yS=!1}()}const LS=function(){const{subscribe:e,set:t}=Qp(0)
return{subscribe:e,set:xg(PS,t)}}()
const $S=[function(){jc("moveGuildList")&&uS("minibox-guild")},function(){jc("moveOnlineAlliesList")&&uS("minibox-allies")},function(){jc("moveXmasBox")&&cS("minibox-xmas")},function(){jc("moveDailyQuest")&&cS("minibox-daily-quest")},function(){jc("moveFSBox")&&cS("minibox-fsbox")},async function(){if(!uu.enableAllyOnlineList&&!uu.enableEnemyOnlineList||ky())return
!function(e){e&&Eu(3,mw,[e])}(await Hb(!1))},function(){!uu.enableWantedList&&!uu.enableActiveBountyList||ky()||(uu.enableActiveBountyList&&(Gy=Qy(),sv(Pg(),Gy)),uu.enableWantedList&&(Wy=Qy(),sv(Pg(),Wy)),zy()&&L_(zy(),Nb),Vy()&&L_(Vy(),Nb),Fb())},function(){if(!uu.enableGuildInfoWidgets)return
const e=t("minibox-guild-members-list")
e&&(rS(e,1),sS(e,"guild"),Zk(e,oS),aS(4,"Chat","chat"),aS(3,"Guild","manage"))},function(){if(!uu.enableOnlineAlliesWidgets)return
const e=t("minibox-allies-list")
e&&(rS(e,2),sS(e,"ally"),Zk(e,lS))},function(){uu.enableTempleAlert&&"temple"!==uu.cmd&&!ky()&&Uk()},function(){uu.enableUpgradeAlert&&tm()&&!Vk()&&function(){if(jc("needToDoUpgrade"))return void Qk()
const e=jc("lastUpgradeCheck");(!e||Fa()>e)&&Jk()}()},function(){uu.enableComposingAlert&&"composing"!==uu.cmd&&tm()&&bk()},function(){Pg()&&!ky()&&By()},function(){ky()||(window.openQuickMsgDialog=dk)},function(){jc("statBarLinks")&&(Xk(gl,"character"),Xk(`${Sl+cl}reserve`,"stamina"),Xk(Al,"equipment"),Xk(_l,"inventory"),Xk(Sl,"fsp"),Xk(`${ll}bank`,"gold"))},function(){if(!jc("staminaCalculator"))return
const e=rv("stat-stamina-nextGain")
if(0===e.length)return
const n=t("statbar-stamina-tooltip-stamina"),r=(e=>yw(rv("stat-name",e)).split(" / "))(n)
2===r.length&&Yy(n,function(e,t){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${kw(yw(e),Math.floor((bw(t[1])-bw(t[0]))/ww("stat-stamina-gainPerHour")))}`}(e,r))},function(){if(!jc("levelUpCalculator"))return
const e=rv("stat-xp-nextGain")
0!==e.length&&Yy(t("statbar-level-tooltip-general"),`<dt class="stat-xp-nextLevel">Next Level At</dt>${kw(yw(e),Math.ceil(ww("stat-xp-remaining")/ww("stat-xp-gainPerHour")))}`)},function(){if(!jc("fsboxlog"))return
const e=t("minibox-fsbox")
e&&Hw(e)},function(){jc("resizeQuickBuff")&&(window.openWindow=function(e,t,n,r,i){Qg("chrome","interceptQuickBuff"),Jb(e,t,n,r,i)})},function(){if(!jc("joinAllLink"))return
const e=t("notification-guild-group")
e&&function(e){ov("",e),zh(Rk,{target:e})}(e)},function(){if(!jc("addScoutTowerLink")||!Yg())return
const e=t("minibox-spoilsofwar")
if(!e)return
const n=e.children[1]
if(!n)return
const r=n.children[0]
Yy(r,"&nbsp;"),sv(r,function(){const e=Vm({dataset:{tooltip:"View Scout Report"},href:Cl,innerHTML:`<img id="fshScoutTower" src="${za}structures/27.png">`})
return L_(e,()=>Qg("chrome","scout tower link")),e}())},async function(){if(tm()&&jc(fc)){wy(await ey())}},function(){tm()&&uu.enableSeTracker&&LS.set(uu.enableSeTracker)},function(){jc("dailyQuestReRoll")&&$g()&&L_($g(),Fw,!0)}]
const IS=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function RS(){N_()||(IS.forEach(M_),uu.allyEnemyOnlineRefreshTime=1e3*jc("allyEnemyOnlineRefreshTime"),uu.useNewGuildLog&&(au(document.body,"click",j_),au(document.body,"auxclick",j_)),D_($S))}function OS(e){const t=zc(e)
t?.["new-ui"]&&(jc("gameHelpLink")&&Eu(3,O_),uu.huntingMode=jc("huntingMode"),Eu(3,C_),RS(),jc("hideHelperMenu")||Eu(3,Bv))}function MS(){const e=function(){const e=t("html")
if(e?.dataset)return e.dataset.hcs}()
e&&OS(e)}function AS(){tm()&&t("worldPage")&&window.GameData&&uv(import("./newMap-BWdBSXu-.js"))}const FS={"-":{"-":()=>{uv(import("./arena-BTeGeGZ4.js").then(function(e){return e.b}))}},dojoin:{"-":()=>{uv(import("./arenaDoJoin-3NFj8MqM.js"))}},join:{"-":()=>{uv(import("./arenaJoin-C0qc2yDr.js"))}},completed:{"-":()=>{uv(import("./completedArenas-Boy3iQM_.js"))}},pickmove:{"-":()=>{uv(import("./storeMoves-C6bWS0bX.js"))}},setup:{"-":()=>{uv(import("./setupMoves-BsUihNdS.js"))}}}
var jS={"-":{"-":()=>{uv(import("./injectAuctionHouse-D_2x1VFX.js"))}},quickcreate:{"-":()=>{uv(import("./quickCreate-CgjUU90x.js"))}}}
var NS={"-":{"-":()=>{uv(import("./composing-BAuArA_u.js"))}},breakdown:{"-":()=>{uv(import("./breakdown-DuoiPWrf.js"))}},create:{"-":()=>{uv(import("./composingCreate-C1AcncDs.js"))}}}
function DS(){uv(import("./bioWidgets-D5-1x1aZ.js"))}function BS(){uv(import("./injectGuild-Cpi6lEjJ.js"))}const qS=()=>{uv(import("./guildAdvisor-BS4MWfo9.js"))}
const HS=()=>{uv(import("./groups-zxvkjCwy.js"))}
const US=()=>{uv(import("./addRemoveTags-DuFwuBmI.js"))}
const GS=()=>{uv(import("./guildChat-FPYy3SJR.js"))}
var WS={inventory:{report:()=>{uv(import("./guildReport-b3aEj4yY.js"))},addtags:US,removetags:US,storeitems:()=>{uv(import("./storeitems-D6UzSSm7.js"))}},chat:{"-":GS},dochat:{"-":GS},log:{"-":()=>{uv(import("./guildLog-XMuFqJeV.js"))}},groups:{viewstats:()=>{uv(import("./injectGroupStats-DF_yBwMh.js"))},joinallgroupsundersize:HS,joinall:HS,"-":HS},manage:{"-":BS},advisor:{"-":qS,weekly:qS},history:{"-":DS},view:{"-":BS},scouttower:{"-":()=>{uv(import("./injectScouttower-Bmhba6nJ.js"))}},mailbox:{"-":()=>{uv(import("./guildMailbox-C72iLgm3.js"))}},ranks:{"-":()=>{uv(import("./rank-BYgTJsHi.js"))}},conflicts:{rpupgrades:()=>{uv(import("./injectRPUpgrades-Bsu-uC9f.js"))}},bank:{"-":()=>{uv(import("./injectGuildBank-Coywnw1-.js"))}},hall:{"-":()=>{uv(import("./hall-D6setjru.js"))},post:DS},"-":{"-":BS},titanrewards:{"-":()=>{uv(import("./titanrewards-SpfH9N92.js"))}}}
function zS(){uv(import("./viewRecipe-CtGZEN8S.js"))}var VS={"-":{"-":function(){uv(import("./inventing-j1FAnwfz.js"))}},doinvent:{"-":zS},viewrecipe:{"-":zS}}
function QS(){uv(import("./ufsgAllowBack-DIgZ_Nz4.js"))}var JS={"-":{"-":QS},view:{"-":()=>{uv(import("./itemsView-WjowoKXb.js"))}}}
function KS(){uv(import("./profile-CaBVP_jT.js").then(function(e){return e.p}))}function YS(){uv(import("./news-8RfMmivP.js"))}function XS(){uv(import("./viewArchive-LI0c6yOF.js"))}var ZS={fsbox:{"-":()=>{uv(import("./newsFsbox--gs7w74d.js"))}},"-":{"-":YS},shoutbox:{"-":()=>{uv(import("./newsShoutbox-BgwmJ6ww.js"))}},viewupdatearchive:{"-":XS},viewarchive:{"-":XS}}
var ex={news:{"-":YS},viewupdatearchive:{"-":XS},viewarchive:{"-":XS},"-":{"-":()=>{uv(import("./unknownPage-BxNDfJqQ.js"))}}},tx=Bh('<button class="modal-close svelte-1dt59d4" type="button">×</button>')
Ah(["click"])
var nx=Bh('<div class="modal-title svelte-1ftnqia"><!> <!></div> <div class="modal-content svelte-1ftnqia"><!></div>',1)
function rx(e,t){kd(t,!0)
let n=rg(t,"visible",3,!0),r=cf(void 0),i=cf(void 0)
ig(()=>{Wg(xh(i),xh(r))}),Pw(e,{get close(){return t.close},get visible(){return n()},get modal(){return xh(r)},set modal(e){df(r,e,!0)},children:(e,n)=>{var r=nx(),s=Cf(r),o=Ef(s)
op(o,()=>t.title??Bu),function(e,t){var n=tx()
n.__click=function(...e){t.close?.apply(this,e)},Uh(e,n)}(Tf(o,2),{get close(){return t.close}}),Up(s,e=>df(i,e),()=>xh(i)),op(Ef(Tf(s,2)),()=>t.children??Bu),Uh(e,r)},$$slots:{default:!0}}),Sd()}function ix(e,t,n){Qg("GS Export","Items Mold"),df(t,n(),!0)}vd=!0
var sx=Bh('<button type="button" class="mold-btn svelte-1hsd3o">Download Item Groups JSON</button>'),ox=Bh('<span class="error svelte-1hsd3o">Error loading mold data</span>'),ax=Bh("<span>Loading mold data...</span>"),lx=Bh('<div class="mold-link svelte-1hsd3o"><!></div>')
function cx(e,t){kd(t,!0)
let n=cf(gf(Promise.resolve(null)))
async function r(){const e=await Qv({cmd:"molds"})
if(e?.s&&e.r?.molds&&e.r?.cdns?.length)return function(e){const t=e.r.molds?.find(e=>"item_groups.json"===e.filename)
if(!t)throw new Error("Failed to load mold data")
const n=`${e.r.cdns[0]}${t.filename}`
return window.open(n,"_blank"),null}(e)
throw new Error("Failed to load mold data")}var i=lx()
Kh(Ef(i),()=>xh(n),e=>{Uh(e,ax())},e=>{var t=sx()
t.__click=[ix,n,r],Uh(e,t)},e=>{Uh(e,ox())}),Uh(e,i),Sd()}function ux(){return Gm({inc_tagged:"1",subcmd:"guild_store"})}function dx(e,t,n){Yg()&&(Qg("GS Export","Generate"),df(t,n(),!0))}function fx(e,t,n){if(!xh(t))return
Qg("GS Export","Download")
const r=`gs_export_${(new Date).toISOString().slice(0,19).replace(/[:.]/g,"-")}.csv`
Qm(n(xh(t)),r)}Ah(["click"])
var hx=Bh('<p class="error svelte-d95mlu">You must be in a guild to use this feature.</p>'),px=Bh('<div class="export-ready svelte-d95mlu"><p class="success svelte-d95mlu">Export ready! Click the button below to download your CSV file.</p> <button type="button" class="svelte-d95mlu">Download CSV</button></div>'),gx=Bh('<button type="button" class="svelte-d95mlu">Generate Export</button>'),vx=Bh('<p class="error svelte-d95mlu">Failed to generate export.</p>'),_x=Bh('<button type="button" disabled class="svelte-d95mlu">Generating Export...</button> <div class="progress svelte-d95mlu"><p class="svelte-d95mlu">Loading guild store inventory...</p> <div class="spinner svelte-d95mlu"></div></div>',1)
function mx(e,t){kd(t,!0)
let n=cf(gf(Promise.resolve(null))),r=cf(null)
const i=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],s=e=>{return[...i(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??""])].join(",")
var t},o=e=>new Blob([e],{type:"text/csv"})
async function a(){const e=await ux()
if(!e?.items?.length)throw new Error("Invalid export data")
const t=e.items
return df(r,`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name\n${(e=>e.map(s).join("\n"))(t)}\n`),null}var l=Hh(),c=Cf(l),u=e=>{Uh(e,hx())},d=e=>{var t=Hh()
Kh(Cf(t),()=>xh(n),e=>{Uh(e,_x())},e=>{var t=Hh(),i=Cf(t),s=e=>{var t=px()
Tf(Ef(t),2).__click=[fx,r,o],Uh(e,t)},l=e=>{var t=gx()
t.__click=[dx,n,a],Uh(e,t)}
Yh(i,e=>{xh(r)?e(s):e(l,!1)}),Uh(e,t)},e=>{Uh(e,vx())}),Uh(e,t)}
Yh(c,e=>{Yg()?e(d,!1):e(u)}),Uh(e,l),Sd()}Ah(["click"])
var yx=Bh('<div class="gs-export svelte-6n2izk"><p class="svelte-6n2izk">Export your Guild Store inventory data to a CSV file for analysis.</p> <!> <!></div>')
function bx(e,t){kd(t,!0)
let n=rg(t,"visible",15,!0)
{const t=e=>{Uh(e,qh("Guild Store Export"))}
rx(e,{close:function(){Qg("GS Export","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{!function(e){var t=yx(),n=Tf(Ef(t),2)
cx(n,{}),mx(Tf(n,2),{}),Uh(e,t)}(e)},$$slots:{title:!0,default:!0}})}Sd()}const wx=gf({visible:!0})
let kx=0
var Sx=Object.freeze({__proto__:null,default:function(){kx?wx.visible=!0:kx=zh(bx,{props:wx,target:document.body})}}),xx=Bh("<svelte-virtual-list-row><!></svelte-virtual-list-row>",2),Ex=Bh("<svelte-virtual-list-viewport><svelte-virtual-list-contents></svelte-virtual-list-contents></svelte-virtual-list-viewport>",2)
function Cx(e,t){kd(t,!0)
let n,r,i=rg(t,"height",3,"100%"),s=rg(t,"itemHeight",3,void 0),o=rg(t,"start",15,0),a=rg(t,"end",15,0),l=[],c=cf(void 0),u=cf(void 0),d=cf(0),f=tf(()=>t.items.slice(o(),a()).map((e,t)=>({index:t+o(),data:e}))),h=cf(void 0),p=cf(0),g=cf(0),v=0
async function _(e,t){const{scrollTop:n}=xh(c)
t={left:0,top:n+(e-o())*(s()||r),behavior:"smooth",...t},xh(c).scrollTo(t)}ig(()=>{n=xh(u).getElementsByTagName("svelte-virtual-list-row"),df(h,!0)}),Mf(()=>{xh(h)&&async function(e,t,i){if(v)return
v=!0,e.length<o()&&await _(e.length-1,{behavior:"auto"})
const{scrollTop:s}=xh(c)
await Sh()
let u=xh(p)-s,d=o()
for(;u<t&&d<e.length;){let e=n[d-o()]
e||(a(d+1),await Sh(),e=n[d-o()]),e&&(u+=l[d]=i||e.offsetHeight),d+=1}a(d)
const f=e.length-a()
r=(xh(p)+u)/a(),df(g,f*r),l.length=e.length,v=!1}(t.items,xh(d),s())})
var m=Ex()
pp(m,0,"svelte-wx5j6o")
var y=Ef(m)
pp(y,0,"svelte-wx5j6o"),ep(y,21,()=>xh(f),e=>e.index,(e,n)=>{var r=xx()
pp(r,0,"svelte-wx5j6o")
var i=Ef(r),s=e=>{var r=Hh()
op(Cf(r),()=>t.children,()=>({item:xh(n).data})),Uh(e,r)},o=e=>{Uh(e,qh("Missing template"))}
Yh(i,e=>{t.children?e(s):e(o,!1)}),Uh(e,r)}),Up(y,e=>df(u,e),()=>xh(u)),Up(m,e=>df(c,e),()=>xh(c)),Nf(()=>{vp(m,`height: ${i()??""};`),vp(y,`padding-top: ${xh(p)??""}px; padding-bottom: ${xh(g)??""}px;`)}),Mh("scroll",m,async function(){const{scrollTop:e}=xh(c)
for(let e=0;e<n.length;e+=1)l[o()+e]=s()||n[e].offsetHeight
let i=0,u=0
for(;i<t.items.length;){const t=l[i]||r
if(u+t>e){o(i),df(p,u,!0)
break}u+=t,i+=1}for(;i<t.items.length&&(u+=l[i]||r,i+=1,!(u>e+xh(d))););a(i)
const f=t.items.length-a()
for(r=u/a();i<t.items.length;)l[i++]=r
df(g,f*r)}),function(e,t,n){var r=qp.observe(e,()=>n(e[t]))
Ff(()=>(Ch(()=>n(e[t])),r))}(m,"offsetHeight",e=>df(d,e)),Uh(e,m),Sd()}const Tx={}
let Px=-1
function Lx(e,t){Eu(3,t.func,[e])}function $x(e,t){if(Tx[e])return Tx[e].forEach(xg(Lx,t)),!0}function Ix(e,t){Tx[e]||(Tx[e]=[]),Px+=1
const n=Px.toString()
return Tx[e].push({token:n,func:t}),n}function Rx(e,t){return Tx[e]?Tx[e][0].token:Ix(e,t)}async function Ox(e=-1,t=1,n=[]){const r=await function(e,t,n){return wk({subcmd:"log",log_id:e,latest:t,limit:n})}(e,t,1e3)
if(!r?.s)return void $x("guildLog-progress","Server Error.")
$x("guildLog-progress")
const i=n.concat(r.r.logs)
return 1e3!==r.r.logs.length?i:Ox(r.r.logs[0].id,0,i)}var Mx=Bh('<button type="button" class="svelte-1o6o1uz"><!></button>')
function Ax(e,t){let n=rg(t,"disabled",3,0)
var r=Mx()
r.__click=function(...e){t.onclick?.apply(this,e)},op(Ef(r),()=>t.children??Bu),Nf(()=>r.disabled=n()),Uh(e,r)}Ah(["click"])
var Fx=Bh('<span class="svelte-1sxqwyk">[<!>]</span>')
function jx(e,t){var n=Fx()
Ax(Tf(Ef(n)),{get onclick(){return t.onclick},children:(e,n)=>{var r=Hh()
op(Cf(r),()=>t.children??Bu),Uh(e,r)},$$slots:{default:!0}}),Uh(e,n)}function Nx(e,t,n){t(),n.cbChange()}var Dx=Bh('<div class="filter-header svelte-1onji9i"><div class="filters svelte-1onji9i"><div class="front svelte-1onji9i"><span>Filters:</span></div> <div><label>Potions: <input type="checkbox"/></label></div> <div><label>Store/Recalls: <input type="checkbox"/></label></div> <div><label>Relics: <input type="checkbox"/></label></div> <div><label>Mercenaries: <input type="checkbox"/></label></div> <div><label>Group Combats: <input type="checkbox"/></label></div> <div><!></div> <div><label>Donations: <input type="checkbox"/></label></div> <div><label>Rankings: <input type="checkbox"/></label></div> <div><label>GvGs: <input type="checkbox"/></label></div> <div><label>Tag/UnTags: <input type="checkbox"/></label></div> <div><label>Titans: <input type="checkbox"/></label></div> <div><label>Other: <input type="checkbox"/></label></div></div> <div class="button-row svelte-1onji9i"><div></div> <div class="buttons svelte-1onji9i"><div><!></div> <div><!></div> <div><!></div></div> <div class="search-box svelte-1onji9i"><label>Search: <span class="search-wrapper svelte-1onji9i"><input type="text" class="svelte-1onji9i"/> <svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></span></label></div></div></div>')
function Bx(e){return Zm(new Date(1e3*e))}Ah(["change"])
let qx=null
function Hx(){const e=t("holdtext")
if(e&&!qx){const t=l(/fallensword.com\/\?ref=(?<id>\d+)/,n(e))
t&&(qx=Number(t))}return qx}function Ux(e){return Qv({cmd:"combat",subcmd:"view",combat_id:e})}const Gx="fsh_pvpCombat"
let Wx=null,zx={}
const Vx={}
async function Qx(){const e=await Rm(Gx)
return zx=e?(e?.lastCheck??0)<qa()?function(e){var t
const n={...em(Xg(e).filter((t=Ha(),([e,n])=>"lastCheck"===e||n?.logTime>t))),lastCheck:Da()}
return Om(Gx,n),n}(e):e:{lastCheck:Da()},zx}async function Jx(e,t){Vx[t]=Yv(Ux,0,t)
const n=await Vx[t]
if(n?.s)return zx[t]={...n,logTime:e},Om(Gx,zx),n
delete Vx[t]}async function Kx(e,t){Wx||(Wx=Qx())
const n=await Wx
return n[t]?n[t]:Vx[t]?Vx[t]:Jx(e,t)}function Yx(){return e={subcmd2:"view"},wk({subcmd:"recruit",...e})
var e}var Xx=Bh('<i class="fas fa-envelope" aria-hidden="true"></i>'),Zx=Bh('<a class="svelte-87xocm"> </a>'),eE=Bh('[ <a class="svelte-87xocm"><img class="svelte-87xocm"/> </a> ]',1),tE=Bh("<!> <!>",1),nE=Bh('<span class="action-buttons svelte-87xocm">[ <!> | <!> ]</span>'),rE=Bh('<div class="rel svelte-87xocm"> </div>'),iE=Bh('<div class="rel svelte-87xocm"><span class="fshSpinner recruit-spinner svelte-87xocm"></span></div>'),sE=Bh('<!> <span class="action-buttons svelte-87xocm">[ <!> | <!> | <!> | <!> ]</span>',1),oE=Bh('<span class="action-buttons svelte-87xocm">[ <!> ]</span>'),aE=Bh('<div><a class="svelte-87xocm"> </a>\'s group looted the item \'<span class="fshGreen"> </span>\'</div>'),lE=Bh("<div><div><!></div> <div><!></div> <div><!> <!> <!> <!></div></div>")
function cE(e,t){kd(t,!0)
let n=rg(t,"groupCombatItems",3,null),r=rg(t,"hideNonPlayerGuildLogMessages",3,null),i=rg(t,"logEntry",3,null),s=cf(gf(Promise.resolve())),o=cf("waiting")
function a(e){Qg("Guild Log",e)}const l=e=>e
function c(e){const t=e.msg.attachments?.filter(e=>0===e.type)
return t?.length&&!t.filter(({data:{id:e}})=>e===Hx()).length}async function u(e,t){a(t),df(s,Yx(),!0)
const n=await xh(s)
if(n?.s&&du(n?.r)){const r=n.r.find(({player:{id:t}})=>t===e.id)
r?.id?l_(`${xl}recruit&subcmd2=${t}&id=${r.id}`):df(o,"gone")}else df(o,"error")}var d=lE()
let f
var h=Ef(d)
let p
var g=Ef(h),v=e=>{Uh(e,Xx())}
Yh(g,e=>{i().time&&e(v)})
var _=Tf(h,2)
let m
var y=Ef(_),b=e=>{var t=qh()
Nf(e=>Wh(t,e),[()=>Bx(i().time)]),Uh(e,t)}
Yh(y,e=>{i().time&&e(b)})
var w=Tf(_,2)
let k
var S=Ef(w)
ep(S,17,()=>i().msg.text.split(/<link=a(\d)><\/link>/).filter(l),Zh,(e,t)=>{var n=Hh(),r=Cf(n),s=e=>{var n=tE(),r=Cf(n),s=e=>{var n=Zx(),r=Ef(n)
Nf(()=>{Sp(n,"href",`${vl??""}${i().msg.attachments[xh(t)].data.id??""}`),Wh(r,i().msg.attachments[xh(t)].data.name)}),Uh(e,n)}
Yh(r,e=>{0===i().msg.attachments[xh(t)].type&&e(s)})
var o=Tf(r,2),a=e=>{var n=eE(),r=Tf(Cf(n)),s=Ef(r),o=Tf(s,1,!0)
Nf(()=>{Sp(r,"href",`${Ll??""}${i().msg.attachments[xh(t)].data.id??""}`),Sp(s,"src",`${za??""}guilds/${i().msg.attachments[xh(t)].data.id??""}_mini.png`),Sp(s,"alt",i().msg.attachments[xh(t)].data.name),Wh(o,i().msg.attachments[xh(t)].data.name)}),Uh(e,n)}
Yh(o,e=>{1===i().msg.attachments[xh(t)].type&&e(a)}),Uh(e,n)},o=e=>{var n=qh()
Nf(()=>Wh(n,xh(t))),Uh(e,n)}
Yh(r,e=>{1!==xh(t).length||im(Number(xh(t)))?e(o,!1):e(s)}),Uh(e,n)})
var x=Tf(S,2)
ep(x,17,()=>i().msg.attachments&&i().msg.attachments.filter(({type:e})=>0===e),Zh,(e,t)=>{let n=()=>xh(t).data
var r=sE(),l=Cf(r),c=e=>{var t=Hh()
Kh(Cf(t),()=>xh(s),e=>{Uh(e,iE())},e=>{var t=Hh(),r=Cf(t),i=e=>{var t=nE(),r=Tf(Ef(t))
Ax(r,{onclick:()=>u(n(),"acceptjoin"),children:(e,t)=>{Uh(e,qh("Accept"))},$$slots:{default:!0}}),Ax(Tf(r,2),{onclick:()=>u(n(),"denyjoin"),children:(e,t)=>{Uh(e,qh("Deny"))},$$slots:{default:!0}}),Uh(e,t)},s=e=>{var t=rE(),n=Ef(t)
Nf(()=>Wh(n,xh(o))),Uh(e,t)}
Yh(r,e=>{"waiting"===xh(o)?e(i):e(s,!1)}),Uh(e,t)}),Uh(e,t)}
Yh(l,e=>{21===i().type&&e(c)})
var d=Tf(l,2),f=Tf(Ef(d))
Ax(f,{onclick:()=>function(e){a("reply"),window.openQuickMsgDialog(e.name)}(n()),children:(e,t)=>{Uh(e,qh("Reply"))},$$slots:{default:!0}})
var h=Tf(f,2)
Ax(h,{onclick:()=>function(e){a("buff"),Kb(e.id)}(n()),children:(e,t)=>{Uh(e,qh("Buff"))},$$slots:{default:!0}})
var p=Tf(h,2)
Ax(p,{onclick:()=>function(e){a("send"),l_(`${ml}${e.name}`)}(n()),children:(e,t)=>{Uh(e,qh("Send"))},$$slots:{default:!0}}),Ax(Tf(p,2),{onclick:()=>function(e){a("trade"),l_(`${yl}${e.name}`)}(n()),children:(e,t)=>{Uh(e,qh("Trade"))},$$slots:{default:!0}}),Uh(e,r)})
var E=Tf(x,2)
ep(E,17,()=>i().msg.attachments&&i().msg.attachments.filter(({type:e})=>11===e),Zh,(e,t)=>{var n=oE()
Ax(Tf(Ef(n)),{onclick:()=>function(e){a("combat"),l_(`${ll}combat&subcmd=view&combat_id=${e}`)}(xh(t).data),children:(e,t)=>{Uh(e,qh("View Combat"))},$$slots:{default:!0}}),Uh(e,n)})
var C=Tf(E,2),T=e=>{var t=Hh()
Kh(Cf(t),()=>Kx(i().time,i().msg.attachments[0].data),null,(e,t)=>{var n=Hh(),r=Cf(n),i=e=>{var n=aE(),r=Ef(n),i=Ef(r),s=Ef(Tf(r,2))
Nf(()=>{Sp(r,"href",`${vl??""}${xh(t).r.combat.attacker.group.players[0].id??""}`),Wh(i,xh(t).r.combat.attacker.group.players[0].name),Wh(s,xh(t)?.r?.combat?.items?.[0]?.n)}),Uh(e,n)}
Yh(r,e=>{xh(t)?.r?.combat?.items?.[0]?.n&&e(i)}),Uh(e,n)}),Uh(e,t)}
Yh(C,e=>{17===i().type&&n()&&i().msg.text.includes("victorious")&&e(T)}),Nf((e,t,n,r)=>{f=pp(d,0,"row-container svelte-87xocm",null,f,e),p=pp(h,0,"svelte-87xocm",null,p,t),m=pp(_,0,"svelte-87xocm",null,m,n),k=pp(w,0,"svelte-87xocm",null,k,r)},[()=>({"not-self":r()&&c(i()),separator:i().index}),()=>({old:i().old,new:i().new}),()=>({old:i().old,new:i().new}),()=>({old:i().old,new:i().new})]),Uh(e,d),Sd()}const uE=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to","has added tags to","has removed some tags from"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited [,0-9]+ gold into the guild bank/,/deposited [,0-9]+ Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled","has been stripped of their rank by",/has revoked .+'s invite to the guild/,"has been rejected from joining the guild"],[/resulted in .* with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with","has initiated a conflict with your guild","is participating in the conflict against"],["Titan Reward item","from your guild's contribution to the defeat of the titan","7 day cooldown has been activated on your guild for this titan"]]
function dE(e,t){return Dc(t)?e.includes(t):t.test(e)}function fE(e,t){return t.some(xg(dE,e))}function hE(e){const t=uE.findIndex(xg(fE,e))
return-1===t?0:t}var pE=Bh('<span class="white svelte-ertdo2">(Guild Log messages not involving self are dimmed!)</span>'),gE=Bh('<div class="vs svelte-ertdo2"><!></div>'),vE=Bh(" <br/>",1),_E=Bh('<div class="content svelte-ertdo2"><!> <div class="row-container svelte-ertdo2"><div class="innerColumnHeader svelte-ertdo2">&nbsp;</div> <div class="innerColumnHeader svelte-ertdo2">Date</div> <div class="innerColumnHeader svelte-ertdo2">Message <!></div></div> <!></div>')
function mE(e,t){kd(t,!0)
let n=rg(t,"visible",15,!0),r=cf(gf(Array(11).fill(!0))),i=cf(null),s=cf(null),o=cf(gf([])),a=cf(gf(Promise.resolve())),l=cf(gf([])),c=cf("")
const u=tf(()=>xh(o).filter(({fshType:e})=>xh(r)[e]).filter(({searchable:e})=>""===xh(c)||e.includes(xh(c).toLowerCase())).map(v)),d=tf(()=>xh(u).length?xh(u):[{index:0,msg:{text:""}}])
let f=0,h=null,p=null,g=null
const v=(e,t)=>({...e,index:t}),_=({msg:e})=>e.text.replace(/<link=a(\d)><\/link>/g,(t,n)=>e.attachments[n].data.name),m=e=>({...e,fshType:hE(e.msg.text),new:h&&e.time>p,old:h&&(g-e.time)/60>20&&e.time<=p,searchable:_(e).toLowerCase()}),y=(e,t)=>t.time-e.time
function b(e){Qg("Guild Log",e)}function w(){b("cbChange")}function k(){b("selectAll")}function S(){b("selectNone")}function x(){b("oldGuildLog"),l_(El)}function E(){b("clearSearch"),df(c,"")}function C(e){df(l,xh(l).concat(e),!0)}function T(e){e?C(e):(f+=1,C(`chunk ${f}`))}async function P(){df(l,["Loading..."],!0),df(o,[],!0),g=(new Date).setUTCSeconds(0,0)/1e3,p=jc("lastModalGuildLogCheck")??g,Hc("lastModalGuildLogCheck",g),h=jc("enableLogColoring"),df(i,jc("groupCombatItems"),!0),df(s,jc("hideNonPlayerGuildLogMessages"),!0),f=0,Rx("guildLog-progress",T)
const e=await Yv(Ox)
e&&df(o,e.toSorted(y).map(m),!0)}function L(){df(a,P(),!0)}Mf(()=>{n()&&L()})
{const t=e=>{Uh(e,qh("Guild Log"))}
rx(e,{close:function(){b("close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=_E(),o=Ef(n)
!function(e,t){kd(t,!0)
let n=rg(t,"checks",31,()=>gf(Array(11).fill(!0))),r=rg(t,"searchValue",15,"")
function i(){Om("fsh_LogChecks",md(n()))}function s(e){n(n().map(()=>e)),i()}!async function(){n(await Rm("fsh_LogChecks")??Array(11).fill(!0))}()
var o=Dx(),a=Ef(o),l=Tf(Ef(a),2),c=Ef(l),u=Tf(Ef(c))
u.__change=[Nx,i,t],u.value=u.__value="1"
var d=Tf(l,2),f=Ef(d),h=Tf(Ef(f))
h.__change=[Nx,i,t],h.value=h.__value="2"
var p=Tf(d,2),g=Ef(p),v=Tf(Ef(g))
v.__change=[Nx,i,t],v.value=v.__value="4"
var _=Tf(p,2),m=Ef(_),y=Tf(Ef(m))
y.__change=[Nx,i,t],y.value=y.__value="5"
var b=Tf(_,2),w=Ef(b),k=Tf(Ef(w))
k.__change=[Nx,i,t],k.value=k.__value="6"
var S=Tf(b,2)
Ax(Ef(S),{get onclick(){return t.oldGuildLog},children:(e,t)=>{Uh(e,qh("Old Guild Log"))},$$slots:{default:!0}})
var x=Tf(S,2),E=Ef(x),C=Tf(Ef(E))
C.__change=[Nx,i,t],C.value=C.__value="7"
var T=Tf(x,2),P=Ef(T),L=Tf(Ef(P))
L.__change=[Nx,i,t],L.value=L.__value="8"
var $=Tf(T,2),I=Ef($),R=Tf(Ef(I))
R.__change=[Nx,i,t],R.value=R.__value="9"
var O=Tf($,2),M=Ef(O),A=Tf(Ef(M))
A.__change=[Nx,i,t],A.value=A.__value="3"
var F=Tf(O,2),j=Ef(F),N=Tf(Ef(j))
N.__change=[Nx,i,t],N.value=N.__value="10"
var D=Ef(Tf(F,2)),B=Tf(Ef(D))
B.__change=[Nx,i,t],B.value=B.__value="0"
var q=Tf(a,2),H=Tf(Ef(q),2),U=Ef(H)
jx(Ef(U),{onclick:function(){s(!0),t.selectAll()},children:(e,t)=>{Uh(e,qh("Select All"))}})
var G=Tf(U,2)
jx(Ef(G),{onclick:function(){s(!1),t.selectNone()},children:(e,t)=>{Uh(e,qh("Select None"))}}),jx(Ef(Tf(G,2)),{get onclick(){return t.refresh},children:(e,t)=>{Uh(e,qh("Refresh"))}})
var W=Ef(Tf(H,2)),z=Tf(Ef(W)),V=Ef(z),Q=Tf(V,2)
{let e=tf(()=>!r())
Xh(Q,()=>({"--button-deco":"none"})),Ax(Q.lastChild,{get disabled(){return xh(e)},get onclick(){return t.clearSearch},children:(e,t)=>{Uh(e,qh("×"))},$$slots:{default:!0}})}jp(u,()=>n()[1],e=>n(n()[1]=e,!0)),jp(h,()=>n()[2],e=>n(n()[2]=e,!0)),jp(v,()=>n()[4],e=>n(n()[4]=e,!0)),jp(y,()=>n()[5],e=>n(n()[5]=e,!0)),jp(k,()=>n()[6],e=>n(n()[6]=e,!0)),jp(C,()=>n()[7],e=>n(n()[7]=e,!0)),jp(L,()=>n()[8],e=>n(n()[8]=e,!0)),jp(R,()=>n()[9],e=>n(n()[9]=e,!0)),jp(A,()=>n()[3],e=>n(n()[3]=e,!0)),jp(N,()=>n()[10],e=>n(n()[10]=e,!0)),jp(B,()=>n()[0],e=>n(n()[0]=e,!0)),Mp(V,r),Uh(e,o),Sd()}(o,{cbChange:w,clearSearch:E,oldGuildLog:x,refresh:L,selectAll:k,selectNone:S,get checks(){return xh(r)},set checks(e){df(r,e,!0)},get searchValue(){return xh(c)},set searchValue(e){df(c,e,!0)}})
var u=Tf(o,2),f=Tf(Ef(u),4),h=Tf(Ef(f)),p=e=>{Uh(e,pE())}
Yh(h,e=>{xh(s)&&e(p)}),Kh(Tf(u,2),()=>xh(a),e=>{var t=Hh()
ep(Cf(t),17,()=>xh(l),Zh,(e,t)=>{var n=vE(),r=Cf(n)
Nf(()=>Wh(r,`${xh(t)??""} `)),Uh(e,n)}),Uh(e,t)},e=>{var t=gE()
{const e=(e,t)=>{cE(e,{get groupCombatItems(){return xh(i)},get hideNonPlayerGuildLogMessages(){return xh(s)},get logEntry(){return t?.().item}})}
Cx(Ef(t),{get items(){return xh(d)},children:e,$$slots:{default:!0}})}Uh(e,t)},(e,t)=>{var n=qh()
Nf(()=>Wh(n,xh(t))),Uh(e,n)}),Uh(e,n)},$$slots:{title:!0,default:!0}})}Sd()}const yE=gf({visible:!0})
let bE=0
var wE=Object.freeze({__proto__:null,default:function(){bE?yE.visible=!0:bE=zh(mE,{props:yE,target:document.body})}})
function kE(){return wk({subcmd:"fetchinv"})}function SE(){return Yv(kE)}function xE(e){return wk({subcmd:"inventory",...e})}function EE(){return xE({subcmd2:"report"})}function CE(){return Yv(EE)}function TE(e,t,[n,r]){Wc(r)&&null!==r?e[n]=t(r.constructor(),r):e[n]=r}function PE(e,t){return Wc(t)&&Xg(t).forEach(xg(TE,e,PE)),e}function LE(e){return e?.constructor&&PE(e.constructor(),e)}Ah(["click"]),gf({visible:!0})
function $E(e,t,n){const r=(e=>Math.max(Math.min(e,100),0))((e-t)/(n-t)*100)
let i=255,s=255
r<50?s=Math.round(5.1*r):i=Math.round(510-5.1*r)
const o=(e=>`000000${e.toString(16)}`.slice(-6))(65536*i+256*s+0)
return`#${o}`}var IE=(e,t,n,r)=>{t("backpack"),n(),r()},RE=(e,t,n,r)=>{t("guildstore"),n(),r()},OE=(e,t,n)=>{t("inventory"),n()},ME=(e,t)=>{xh(t)||df(t,!0)},AE=(e,t,n)=>{t("mapping"),n()},FE=(e,t)=>{xh(t)||df(t,!0)},jE=(e,t,n)=>{t("thresholds"),n()},NE=(e,t)=>{xh(t)||df(t,!0)},DE=Bh('<div class="svelte-1eys1iq"> </div> <div class="svelte-1eys1iq"> </div>',1),BE=Bh('<div class="inventory svelte-1eys1iq"><div class="inventory-grid-container svelte-1eys1iq"></div></div>'),qE=(e,t,n)=>{t("mapped"),n()},HE=Bh("<option> </option>"),UE=Bh("<option> </option>"),GE=(e,t,n)=>{t("ignore"),n()},WE=e=>e.target.blur(),zE=Bh('<div class="svelte-1eys1iq"> </div> <div class="svelte-1eys1iq"><select class="svelte-1eys1iq"><!></select></div> <div class="svelte-1eys1iq"><input title="Ignore" type="checkbox" class="svelte-1eys1iq"/></div>',1),VE=(e,t,n)=>{t("ignore-all"),n()},QE=(e,t,n)=>{t("reset"),n()},JE=Bh('<div class="mapping svelte-1eys1iq"><div class="mapping-grid-container svelte-1eys1iq"><!> <div class="svelte-1eys1iq"></div> <div class="svelte-1eys1iq"><button class="custombutton svelte-1eys1iq" type="button">Ignore All</button> <button class="custombutton svelte-1eys1iq" type="button">Reset</button></div></div></div>'),KE=(e,t,n)=>{t("minpoint"),n()},YE=(e,t,n)=>{t("maxpoint"),n()},XE=Bh('<div class="thresholds svelte-1eys1iq">Min: <input max="999" min="0" type="number" class="svelte-1eys1iq"/> Max: <input max="999" min="0" type="number" class="svelte-1eys1iq"/></div>'),ZE=Bh('<div class="filters svelte-1eys1iq"><label class="svelte-1eys1iq"><input type="checkbox"/> Member Backpacks</label> <label class="svelte-1eys1iq"><input type="checkbox"/> Guild Store</label></div> <div class="pot-report svelte-1eys1iq"><input class="tab-ctrl svelte-1eys1iq" id="pr-inv" type="checkbox"/> <label for="pr-inv" class="svelte-1eys1iq">Composed Potion Inventory</label> <input class="tab-ctrl svelte-1eys1iq" id="pr-map" type="checkbox"/> <label for="pr-map" class="svelte-1eys1iq">Mapping</label> <input class="tab-ctrl svelte-1eys1iq" id="pr-levels" type="checkbox"/> <label for="pr-levels" class="svelte-1eys1iq">Thresholds</label> <div class="panels svelte-1eys1iq"><!> <!> <!></div></div>',1),eC=Bh('<p style="color: red"> </p>'),tC=Bh('<div class="main svelte-1eys1iq"><!></div>')
function nC(e,t){kd(t,!0)
const n="fsh_potReport",r={inventory:!1,mapping:!1,thresholds:!1,potMap:[],minpoint:20,maxpoint:30,backpack:!0,guildstore:!0}
let i=rg(t,"visible",15,!0),s=cf(null),o=cf(!1),a=cf(!1),l=cf(!1),c=cf(gf([])),u=[],d=cf(gf([]))
const f=({b:e})=>13699===e,h=e=>$E(e,xh(s).minpoint,xh(s).maxpoint),p=({ignore:e})=>!e,g=e=>({name:t})=>t===e,v=(e,t)=>f_(e.n,t.n),_=({r:e})=>e,m=e=>Qg("pot-report",e),y=({player:e,n:t})=>({loc:e?1:2,n:t}),b=()=>Om(n,md(xh(s))),w=e=>u.filter((e=>({n:t})=>e.some(g(t)))(e)).filter(({loc:e})=>xh(s).backpack||1!==e).filter(({loc:e})=>xh(s).guildstore||2!==e).map((e=>({loc:t,n:n})=>({loc:t,mapped:e.find(g(n)).mapped,n:n}))(e))
function k(){b(),df(c,function(){const e=xh(s).potMap.filter(p),t=w(e)
return W_(e,"mapped").map((e=>({mapped:t})=>({name:t,count:e.filter(({mapped:e})=>e===t).length}))(t)).sort((e,t)=>f_(e.name,t.name))}(),!0),df(d,xh(s).potMap.map(e=>({...e,waiting:!0})),!0)}function S(){xh(s).potMap=xh(d).map(({ignore:e,mapped:t,name:n})=>({ignore:e,mapped:t,name:n})),k()}function x(){xh(s).potMap=xh(s).potMap.map(e=>({...e,ignore:!0})),k()}function E(){xh(s).potMap=xh(s).potMap.map(e=>({...e,mapped:e.name,ignore:!1})),k()}async function C(){!async function(){df(s,await Rm(n)||LE(r),!0),df(o,xh(s).inventory,!0),df(a,xh(s).mapping,!0),df(l,xh(s).thresholds,!0),xh(s).backpack=xh(s).backpack??r.backpack,xh(s).guildstore=xh(s).guildstore??r.guildstore}()
const e=await zm([SE(),CE()])
if(!du(e[0]?.r)||!du(e[1]?.r))throw new Error("Server Error")
u=(e=>e.flatMap(_).filter(f).map(y).sort(v))(e),xh(s).potMap=W_(u,"n").map(({n:e})=>({name:e,mapped:xh(s)?.potMap?.find(g(e))?.mapped||e,ignore:xh(s)?.potMap?.find(g(e))?.ignore??!1})),k()}{const t=e=>{Uh(e,qh("Pot Report"))}
rx(e,{close:function(){m("close"),i(!1)},get visible(){return i()},title:t,children:(e,t)=>{var n=tC()
Kh(Ef(n),C,e=>{Uh(e,qh("Loading..."))},e=>{var t=ZE(),n=Cf(t),r=Ef(n),i=Ef(r)
i.__change=[IE,m,b,k]
var u=Ef(Tf(r,2))
u.__change=[RE,m,b,k]
var f=Ef(Tf(n,2))
f.__change=[OE,m,b],f.__click=[ME,o]
var p=Tf(f,4)
p.__change=[AE,m,b],p.__click=[FE,a]
var g=Tf(p,4)
g.__change=[jE,m,b],g.__click=[NE,l]
var v=Ef(Tf(g,4)),_=e=>{var t=BE()
ep(Ef(t),21,()=>xh(c),Zh,(e,t)=>{let n=()=>xh(t).count
var r=DE(),i=Cf(r),s=Ef(i),o=Tf(i,2)
let a
var l=Ef(o)
Nf(e=>{Wh(s,xh(t).name),a=vp(o,"",a,e),Wh(l,n())},[()=>({"background-color":h(n())})]),Uh(e,r)}),Uh(e,t)}
Yh(v,e=>{xh(o)&&e(_)})
var y=Tf(v,2),w=e=>{var t=JE(),n=Ef(t),r=Ef(n)
ep(r,17,()=>xh(d),Zh,(e,t,n)=>{let r=()=>xh(t).name,i=()=>xh(t).mapped
var s=zE(),o=Cf(s),a=Ef(o),l=Tf(o,2),c=Ef(l)
c.__change=[qE,m,S],c.__mousedown=()=>{xh(d)[n].waiting=!1}
var u=Ef(c),f=e=>{var t=HE(),n=Ef(t),r={}
Nf(()=>{Wh(n,i()),r!==(r=i())&&(t.__value=i())}),Uh(e,t)},h=e=>{var t=Hh()
ep(Cf(t),17,()=>xh(d),Zh,(e,t)=>{let n=()=>xh(t).name
var r=UE(),s=Ef(r),o={}
Nf(()=>{var e
e=r,i()===n()?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected"),Wh(s,n()),o!==(o=n())&&(r.__value=n())}),Uh(e,r)}),Uh(e,t)}
Yh(u,e=>{xh(t).waiting?e(f):e(h,!1)})
var p=Ef(Tf(l,2))
p.__change=[GE,m,S],p.__click=[WE],Nf(()=>{Wh(a,r()),Sp(c,"name",r())}),mp(c,()=>xh(d)[n].mapped,e=>xh(d)[n].mapped=e),jp(p,()=>xh(d)[n].ignore,e=>xh(d)[n].ignore=e),Uh(e,s)})
var i=Ef(Tf(r,4))
i.__click=[VE,m,x],Tf(i,2).__click=[QE,m,E],Uh(e,t)}
Yh(y,e=>{xh(a)&&e(w)})
var C=Tf(y,2),T=e=>{var t=XE(),n=Tf(Ef(t))
n.__input=[KE,m,k]
var r=Tf(n,2)
r.__input=[YE,m,k],Mp(n,()=>xh(s).minpoint,e=>xh(s).minpoint=e),Mp(r,()=>xh(s).maxpoint,e=>xh(s).maxpoint=e),Uh(e,t)}
Yh(C,e=>{xh(l)&&e(T)}),jp(i,()=>xh(s).backpack,e=>xh(s).backpack=e),jp(u,()=>xh(s).guildstore,e=>xh(s).guildstore=e),jp(f,()=>xh(s).inventory,e=>xh(s).inventory=e),jp(p,()=>xh(s).mapping,e=>xh(s).mapping=e),jp(g,()=>xh(s).thresholds,e=>xh(s).thresholds=e),Uh(e,t)},(e,t)=>{var n=eC(),r=Ef(n)
Nf(()=>Wh(r,xh(t).message)),Uh(e,n)}),Uh(e,n)},$$slots:{title:!0,default:!0}})}Sd()}Ah(["change","click","mousedown","input"])
const rC=gf({visible:!0})
let iC=0
var sC=Object.freeze({__proto__:null,default:function(){iC?rC.visible=!0:iC=zh(nC,{props:rC,target:document.body})}})
function oC(e){return h_({subcmd:"useitem",inventory_id:e})}function aC(e){return Yv(oC,0,e)}function lC(){return Gm({subcmd:"inventory"})}function cC(e,t,n,r){Hc(t,n()),r.dispatchToggle()}var uC=Bh('<label><input type="checkbox" class="svelte-1f42rtn"/> Select items in ST</label>')
function dC(e,t){kd(t,!0)
let n=rg(t,"inSt",15,null)
const r="selectST"
n(jc(r))
var i=uC(),s=Ef(i)
s.__change=[cC,r,n,t],jp(s,n),Uh(e,i),Sd()}function fC(e){return`${e.amount} x ${Cc[e.type]}`}Ah(["change"])
const hC=[[e=>e.components?.length,e=>`You successfully extracted 1 '${e.components?.[0].n}' component(s) from 1 resource(s).`],[e=>e.frags,e=>`You gained ${e.frags.map(fC).join(", ")} Fragments by opening the Fragment Stash.`],[e=>e.mailbox_items?.length,e=>`You received 1 x '${e.mailbox_items?.[0].n}' from the container.`],[()=>1,()=>"<You failed to extract any components from resource(s)."]]
function pC(e){return hC.find(([t])=>t(e))[1](e)}const gC=(e,t,n)=>`fetchitem.php?item_id=${t}&inv_id=${n}&t=1&p=${e}`
function vC(e,t,n,r){Qg("quickExtract","toggleSelectMain"),Hc(t,xh(n)),r()}function _C(e,t,n){Qg("quickExtract","togglePrompts"),Hc(t,xh(n))}var mC=Bh('<span class="fshRed"> </span>'),yC=Bh('<li class="svelte-13gbaa4"><!></li>'),bC=Bh('<span class="fshSpinner fshSpinner12"></span>'),wC=Bh('<tr><td><!></td><td class="imgCol svelte-13gbaa4"><span class="imgSpan tip-dynamic svelte-13gbaa4"></span></td><td> </td></tr>'),kC=Bh('<tr><td colspan="3"><p style="color: red"> </p></td></tr>'),SC=Bh('<div class="svelte-13gbaa4">Select which type of plants you wish to extract all of. Only select\n    extractable resources. <br/> <!>&nbsp; <label><input type="checkbox" class="svelte-13gbaa4"/> Main Folder Only</label>&nbsp; <label><input type="checkbox" class="svelte-13gbaa4"/> Disable Prompts</label>&nbsp; <!> <br/> <table class="svelte-13gbaa4"><thead><tr><th class="actionCol svelte-13gbaa4">Actions</th><th colspan="2">Items</th></tr></thead><tbody><tr><td colspan="3"><ol></ol></td></tr><!></tbody></table></div>')
function xC(e,t){kd(t,!0)
let n=rg(t,"visible",15,!0)
const r="selectMain",i="disableQuickExtractPrompts"
let s=cf(null),o=null,a=cf(null),l=cf(gf(jc(r))),c=cf(gf(jc(i))),u=null,d=cf(null),f=cf(gf([]))
const h=e=>"Zombie Coffin"===e.item_name||12===e.type||16===e.type,p=(e,t)=>f_(e.item_name,t.item_name),g=e=>xh(a)||!e.is_in_st,v=e=>!xh(l)||-1===e.folder_id
function _(){df(d,du(u)&&function(e,t){return W_(t,"item_name").map(n=>{return{...n,count:t.filter(e=>e.item_name===n.item_name).length,delPending:!1,extractIds:t.filter(e=>e.item_name===n.item_name).map(e=>e.inv_id),style:(r=n.item_id,`background-image: url(${za}items/${r}.gif)`),tip:gC(e,n.item_id,n.inv_id)}
var r})}(o,u.filter(g).filter(v)),!0)}function m(){Qg("quickExtract","toggleSelectST"),_()}async function y(){const e=await lC()
o=e?.player_id,u=e?.items?.filter(h).sort(p),_()}function b(){Qg("quickExtract","refresh"),df(f,[],!0),df(s,y(),!0)}let w
async function k(e){const t=await aC(e);(function(e){return e?.s||w===e?.e?.message||(w=e?.e?.message,df(f,[...xh(f),e?.e?.message],!0)),e?.s})(t)&&(df(f,[...xh(f),pC(t.r)],!0),u=u.filter(t=>t.inv_id!==e))}Mf(()=>{n()&&(df(f,[],!0),df(s,y(),!0))})
{const t=e=>{Uh(e,qh("Quick Extract"))}
rx(e,{close:function(){Qg("quickExtract","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=SC(),o=Tf(Ef(n),3)
dC(o,{dispatchToggle:m,get inSt(){return xh(a)},set inSt(e){df(a,e,!0)}})
var u=Tf(o,2),h=Ef(u)
h.__change=[vC,r,l,_]
var p=Tf(u,2),g=Ef(p)
g.__change=[_C,i,c]
var v=Tf(p,2)
jx(v,{onclick:b,children:(e,t)=>{Uh(e,qh("Refresh"))}})
var y=Tf(v,4),w=Tf(Ef(y)),S=Ef(w),x=Ef(S)
ep(Ef(x),21,()=>xh(f),Zh,(e,t)=>{var n=yC(),r=Ef(n),i=e=>{var n=mC(),r=Ef(n)
Nf(e=>Wh(r,e),[()=>xh(t).slice(1)]),Uh(e,n)},s=e=>{var n=qh()
Nf(()=>Wh(n,xh(t))),Uh(e,n)}
Yh(r,e=>{xh(t).startsWith("<")?e(i):e(s,!1)}),Uh(e,n)}),Kh(Tf(S),()=>xh(s),null,e=>{var t=Hh()
ep(Cf(t),17,()=>xh(d),Zh,(e,t,n)=>{let r=()=>xh(t).count,i=()=>xh(t).delPending
var s=wC(),o=Ef(s)
let a
var l=Ef(o),u=e=>{var t=Hh(),s=Cf(t),o=e=>{Uh(e,bC())},a=e=>{Ax(e,{onclick:()=>async function(e){Qg("quickExtract","extract",xh(c)),(xh(c)||await Aw("Are you sure you want to extract all similar items?"))&&(xh(d)[e].delPending=!0,await zm(xh(d)[e].extractIds.map(k)),xh(d)[e]?.count&&(xh(d)[e].count=0))}(n),children:(e,t)=>{var n=qh()
Nf(()=>Wh(n,`Extract ${r()??""}`)),Uh(e,n)},$$slots:{default:!0}})}
Yh(s,e=>{i()?e(o):e(a,!1)}),Uh(e,t)},f=e=>{Uh(e,qh("Done"))}
Yh(l,e=>{r()?e(u):e(f,!1)})
var h=Tf(o),p=Ef(h),g=Ef(Tf(h))
Nf(e=>{a=pp(o,0,"svelte-13gbaa4",null,a,e),Sp(p,"data-tipped",xh(t).tip),vp(p,xh(t).style),Wh(g,xh(t).item_name)},[()=>({delPending:i()})]),Uh(e,s)}),Uh(e,t)},(e,t)=>{var n=kC(),r=Ef(n),i=Ef(r),s=Ef(i)
Nf(()=>Wh(s,xh(t).message)),Uh(e,n)}),jp(h,()=>xh(l),e=>df(l,e)),jp(g,()=>xh(c),e=>df(c,e)),Uh(e,n)},$$slots:{title:!0,default:!0}})}Sd()}Ah(["change"])
const EC=gf({visible:!0})
let CC=0
var TC=Object.freeze({__proto__:null,default:function(){CC?EC.visible=!0:CC=zh(xC,{props:EC,target:document.body})}})
const PC=(e,t)=>{Qg("SE Tracker","Expand Row"),df(t,!xh(t))}
var LC=Bh('<button type="button" class="svelte-142b9qt"><!></button>'),$C=Bh('<a target="_blank" class="svelte-142b9qt"> </a>'),IC=Bh('<div></div> <div></div> <div class="last-kill svelte-142b9qt"> </div> <div><a target="_blank" class="svelte-142b9qt"> </a></div>',1),RC=Bh('<div class="wide svelte-142b9qt"></div>'),OC=Bh('<div class="expando svelte-142b9qt"><!></div> <div><!></div> <div class="last-kill svelte-142b9qt"> </div> <div><a target="_blank" class="svelte-142b9qt"> </a></div> <!>',1)
function MC(e,t){kd(t,!0)
let n=cf(!1)
var r=OC(),i=Cf(r),s=Ef(i),o=e=>{var t=LC()
t.__click=[PC,n]
var r=Ef(t),i=e=>{Uh(e,qh("∨"))},s=e=>{Uh(e,qh(">"))}
Yh(r,e=>{xh(n)?e(i):e(s,!1)}),Nf(()=>Sp(t,"aria-expanded",xh(n))),Uh(e,t)}
Yh(s,e=>{t.entry[3].length&&e(o)})
var a=Tf(i,2),l=Ef(a),c=e=>{var n=$C(),r=Ef(n)
Nf(e=>{Sp(n,"href",`${Ul??""}creatures${cl}view&creature_id=${t.entry[4]??""}`),Wh(r,e)},[()=>t.entry[0].replaceAll("_"," ")]),Uh(e,n)},u=e=>{var n=qh()
Nf(e=>Wh(n,e),[()=>t.entry[0].replaceAll("_"," ")]),Uh(e,n)}
Yh(l,e=>{t.entry[4]>0?e(c):e(u,!1)})
var d=Tf(a,2),f=Ef(d),h=Tf(d,2),p=Ef(h),g=Ef(p),v=Tf(h,2),_=e=>{var n=RC()
ep(n,21,()=>t.entry[3],Zh,(e,t)=>{var n=tf(()=>Uu(xh(t),2))
let r=()=>xh(n)[1]
var i=IC(),s=Tf(Cf(i),4),o=Ef(s),a=Ef(Tf(s,2)),l=Ef(a)
Nf((e,t)=>{Wh(o,e),Sp(a,"href",`${Ul??""}realms&search_name=${t??""}`),Wh(l,r())},[()=>Bx(xh(n)[0]),()=>encodeURIComponent(r())]),Uh(e,i)}),Rp(3,n,()=>fg,()=>({duration:300})),Uh(e,n)}
Yh(v,e=>{xh(n)&&e(_)}),Nf((e,n)=>{Wh(f,e),Sp(p,"href",`${Ul??""}realms&search_name=${n??""}`),Wh(g,t.entry[2])},[()=>Bx(t.entry[1]),()=>encodeURIComponent(t.entry[2])]),Uh(e,r),Sd()}function AC(e){Qg("SE Tracker","Toggle Pref"),Hc("enableSeTracker",e.target.checked)}Ah(["click"])
var FC=Bh('<span class="network svelte-1n8ngaj"></span> <label>Enable SE Tracker [&thinsp; <div class="tooltip svelte-1n8ngaj">? <div class="tooltiptext svelte-1n8ngaj"><span class="tooltiptitle svelte-1n8ngaj">Enable SE Tracker</span><br/><br/> <div>If enabled, will track the last time each SE was killed.<br/> This is DIFFERENT from the usual FSH network activity.<br/> When this is enabled, if you have ANY game page open in a browser tab it\n        will scan the SE Log every 10 minutes.<br/> You do not need auto-refresh for this to work.</div></div></div> &thinsp;]: <input type="checkbox" class="svelte-1n8ngaj"/></label>',1)
Ah(["click"])
const jC=Jp([LS,mS],([e,t],n)=>{t&&e?function(e,t){const n=hS(e)
t(W_(n.map(([,e])=>e)).map(e=>[e,n.filter(([,t])=>t===e).map(([e,,,,t,,,n=-1])=>[e,t,n])]).map(([e,t])=>[e,t[0][0],t[0][1],t.slice(1),t[0][2]]))}(t,n):n()})
var NC=Bh('<div><div class="innerColumnHeader svelte-1sib168">&nbsp;</div></div> <div><div class="innerColumnHeader svelte-1sib168">Creature</div></div> <div><div class="innerColumnHeader svelte-1sib168">Last Kill</div></div> <div><div class="innerColumnHeader svelte-1sib168">Location</div></div> <!>',1),DC=Bh('<div class="container svelte-1sib168"><div class="top svelte-1sib168"><!></div> <div class="tracker-table svelte-1sib168"><!></div></div>')
function BC(e){const t=()=>Zp(jC,"$trackerTableStore",n),[n,r]=tg()
var i=DC(),s=Ef(i)
!function(e,t){kd(t,!1)
const[n,r]=tg()
Gp()
var i=FC(),s=Cf(i)
vp(s,"",{},{"background-image":'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAB3RJTUUH1QgGDTMWk1twEwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAC8SURBVHjahVPBEcQgCEQnHdmTqUlr0qe16I8cufOiCGZnGCcIy4LEICJwmGgWJ3o0IOCQEqVg9Y4U3CoCHQhvxuPUZEiA3XYkxyI1/6S6R6rke8AlJbkV7u95lleXq3yrdyUjLGxwnifmnHEXY3fJIQSIMcKOZCLgMltrr+1ZWgxp8wi1VrEqxfeFWloYq4wKtOHeBNqeawqmeOnNvfdYSvkbfaeUxP0w/G+k6WsT/xCBc25SuxDsnownEy4u5BHudpMFegAAAABJRU5ErkJggg==")'})
var o=Tf(s,2),a=Tf(Ef(o),3)
a.__click=[AC],jp(a,()=>Zp(LS,"$trackerPrefStore",n),e=>eg(LS,e)),Uh(e,i),Sd(),r()}(Ef(s),{})
var o=Ef(Tf(s,2)),a=e=>{var n=NC()
ep(Tf(Cf(n),8),1,t,e=>e[0],(e,t)=>{MC(e,{get entry(){return xh(t)}})}),Uh(e,n)}
Yh(o,e=>{t()&&e(a)}),Uh(e,i),r()}function qC(e,t){kd(t,!0)
let n=rg(t,"visible",15,!0)
{const t=e=>{Uh(e,qh("Super Elite Tracker"))}
rx(e,{close:function(){Qg("SE Tracker","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{BC(e)},$$slots:{title:!0,default:!0}})}Sd()}const HC=gf({visible:!0})
let UC=0
var GC=Object.freeze({__proto__:null,default:function(){UC?HC.visible=!0:UC=zh(qC,{props:HC,target:document.body})}})
function WC(e,t){return`<a href="${vl}${e}">${t}</a>`}var zC=Bh("<input/>"),VC=Bh("<option> </option>"),QC=Bh("<select><option> </option><!></select>"),JC=Bh("<th><!></th>"),KC=Bh("<th></th>"),YC=Bh('<tr class="svelte-18zqsmu"><!><!></tr>'),XC=(e,t,n)=>t(e,xh(n)),ZC=Bh('<th tabindex="0"> <!></th>'),eT=Bh("<th></th>"),tT=Bh("<tr><!><!></tr>"),nT=(e,t,n)=>t(e,xh(n)),rT=(e,t,n,r)=>t(e,xh(n),xh(r).key),iT=Bh("<td><!></td>"),sT=(e,t,n)=>t(e,xh(n)),oT=Bh('<td><span class="isClickable svelte-18zqsmu" tabindex="0" role="button"><!></span></td>'),aT=Bh("<tr><td><!></td></tr>"),lT=Bh("<tr><!><!></tr> <!>",1),cT=Bh("<table><thead><!><!></thead><tbody></tbody></table>")
function uT(e,t){kd(t,!0)
let n=rg(t,"sortOrders",19,()=>[1,-1]),r=rg(t,"sortBy",15,""),i=rg(t,"sortOrder",31,()=>gf(n()?.[0]||1)),s=rg(t,"filterSelections",31,()=>gf({})),o=rg(t,"expanded",31,()=>gf([])),a=rg(t,"selected",31,()=>gf([])),l=rg(t,"expandRowKey",3,null),c=rg(t,"rowKey",19,l),u=rg(t,"expandSingle",3,!1),d=rg(t,"selectSingle",3,!1),f=rg(t,"selectOnClick",3,!1),h=rg(t,"iconAsc",3,"▲"),p=rg(t,"iconDesc",3,"▼"),g=rg(t,"iconSortable",3,""),v=rg(t,"iconExpand",3,"▼"),_=rg(t,"iconExpanded",3,"▲"),m=rg(t,"showExpandIcon",3,!1),y=rg(t,"classNameTable",3,""),b=rg(t,"classNameThead",3,""),w=rg(t,"classNameTbody",3,""),k=rg(t,"classNameSelect",3,""),S=rg(t,"classNameInput",3,""),x=rg(t,"classNameRow",3,null),E=rg(t,"classNameCell",3,""),C=rg(t,"classNameRowSelected",3,null),T=rg(t,"classNameRowExpanded",3,null),P=rg(t,"classNameExpandedContent",3,""),L=rg(t,"classNameCellExpand",3,""),$=rg(t,"clickCol",3,()=>{}),I=rg(t,"clickRow",3,()=>{}),R=rg(t,"clickExpand",3,()=>{}),O=rg(t,"clickCell",3,()=>{}),M=cf(()=>"")
if(!Array.isArray(o()))throw"'expanded' needs to be an array"
if(!Array.isArray(a()))throw"'selection' needs to be an array"
null!==l()&&console.warn("'expandRowKey' is deprecated in favour of 'rowKey'"),C()&&!c()&&console.error("'rowKey' is needed to use 'classNameRowSelected'")
let A=t.columns.some(e=>!e.hideFilterHeader&&(void 0!==e.filterOptions||void 0!==e.searchValue)),F=cf(gf({}))
const j=tf(()=>Object.fromEntries(t.columns.map(e=>[e.key,e])))
let N=tf(()=>(m()?1:0)+t.columns.length)
const D=tf(()=>t.rows.filter(e=>Object.keys(s()).every(t=>{let n=null
if(void 0===xh(j)[t])return!0
if(xh(j)[t]?.searchValue){if(""===s()[t])return!0
1===xh(j)[t].searchValue.length?n=(xh(j)[t].searchValue(e)+"").toLocaleLowerCase().indexOf((s()[t]+"").toLocaleLowerCase())>=0:2===xh(j)[t].searchValue.length&&(n=!!xh(j)[t].searchValue(e,s()[t]+""))}else n=!1
return n||void 0===s()[t]||s()[t]===("function"==typeof xh(j)[t].filterValue?xh(j)[t].filterValue(e):xh(j)[t].value(e))})).map(e=>Object.assign({},e,{$sortOn:xh(M)(e),$expanded:null!==c()&&o().indexOf(e[c()])>=0,$selected:null!==c()&&a().indexOf(e[c()])>=0})).sort((e,t)=>r()?e.$sortOn>t.$sortOn?i():e.$sortOn<t.$sortOn?-i():0:0)),B=e=>[].concat(e).filter(e=>null!==e&&"string"==typeof e&&""!==e).join(" ")
Mf(()=>{let e=xh(j)[r()]
void 0!==e&&!0===e.sortable&&"function"==typeof e.value&&df(M,t=>e.value(t))}),Mf(()=>{A&&t.columns&&t.rows&&(df(F,{},!0),t.columns.forEach(e=>{"function"==typeof e.filterOptions?xh(F)[e.key]=e.filterOptions(t.rows):Array.isArray(e.filterOptions)&&(xh(F)[e.key]=e.filterOptions.map(e=>({name:e,value:e})))}))})
const q=(e,t)=>{t.sortable&&(i(t.key===r()?n()[(n().findIndex(e=>e===i())+1)%n().length]:n()[0]),r(i()?t.key:void 0)),$()({event:e,col:t,key:t.key})},H=(e,t)=>{f()&&(d()?a().includes(t[c()])?a([]):a([t[c()]]):a().includes(t[c()])?a(a().filter(e=>e!=t[c()])):a([...a(),t[c()]].sort())),I()({event:e,row:t})},U=(e,t)=>{t.$expanded=!t.$expanded
const n=t[c()]
u()&&t.$expanded?o([n]):u()?o([]):t.$expanded?o([...o(),n]):o(o().filter(e=>e!=n)),R()({event:e,row:t})},G=(e,t,n)=>{O()({event:e,row:t,key:n})}
var W=cT(),z=Ef(W),V=Ef(z),Q=e=>{var n=YC(),r=Ef(n)
ep(r,17,()=>t.columns,Zh,(e,t)=>{var n=JC(),r=Ef(n),i=e=>{var n=zC()
Nf(e=>{pp(n,0,e,"svelte-18zqsmu"),Sp(n,"placeholder",xh(t).filterPlaceholder)},[()=>up(B(S()))]),Mp(n,()=>s()[xh(t).key],e=>s(s()[xh(t).key]=e,!0)),Uh(e,n)},o=e=>{var n=Hh(),r=Cf(n),i=e=>{var n=QC(),r=Ef(n),i=Ef(r)
r.value=(r.__value=void 0)??"",ep(Tf(r),17,()=>xh(F)[xh(t).key],Zh,(e,t)=>{var n=VC(),r=Ef(n),i={}
Nf(()=>{Wh(r,xh(t).name),i!==(i=xh(t).value)&&(n.value=(n.__value=xh(t).value)??"")}),Uh(e,n)}),Nf(e=>{pp(n,0,e,"svelte-18zqsmu"),Wh(i,xh(t).filterPlaceholder||"")},[()=>up(B(k()))]),mp(n,()=>s()[xh(t).key],e=>s(s()[xh(t).key]=e,!0)),Uh(e,n)}
Yh(r,e=>{xh(t).hideFilterHeader||void 0===xh(F)[xh(t).key]||e(i)},!0),Uh(e,n)}
Yh(r,e=>{xh(t).hideFilterHeader||void 0===xh(t).searchValue?e(o,!1):e(i)}),Nf(e=>pp(n,0,e,"svelte-18zqsmu"),[()=>up(B([xh(t).headerFilterClass]))]),Uh(e,n)})
var i=Tf(r),o=e=>{Uh(e,KC())}
Yh(i,e=>{m()&&e(o)}),Uh(e,n)}
Yh(V,e=>{A&&e(Q)})
var J=Tf(V),K=e=>{var n=Hh()
op(Cf(n),()=>t.svelteTableHeader,()=>({sortOrder:i(),sortBy:r()})),Uh(e,n)},Y=e=>{var n=tT(),s=Ef(n)
ep(s,17,()=>t.columns,Zh,(e,t)=>{var n=ZC()
n.__click=[XC,q,t]
var s=Ef(n),o=Tf(s),a=e=>{var t=Hh()
sp(Cf(t),()=>1===i()?h():p()),Uh(e,t)},l=e=>{var n=Hh(),r=Cf(n),i=e=>{var t=Hh()
sp(Cf(t),g),Uh(e,t)}
Yh(r,e=>{xh(t).sortable&&e(i)},!0),Uh(e,n)}
Yh(o,e=>{r()===xh(t).key?e(a):e(l,!1)}),Nf(e=>{pp(n,0,e,"svelte-18zqsmu"),Wh(s,`${xh(t).title??""} `)},[()=>up(B([xh(t).sortable?"isSortable":"",xh(t).headerClass]))]),Mh("keypress",n,e=>"Enter"===e.key&&q(e,xh(t))),Uh(e,n)})
var o=Tf(s),a=e=>{Uh(e,eT())}
Yh(o,e=>{m()&&e(a)}),Uh(e,n)}
Yh(J,e=>{t.svelteTableHeader?e(K):e(Y,!1)})
var X=Tf(z)
ep(X,21,()=>xh(D),Zh,(e,n,r)=>{var i=Hh(),s=Cf(i),o=e=>{var i=Hh()
op(Cf(i),()=>t.svelteTableRow,()=>({row:xh(n),n:r})),Uh(e,i)},a=e=>{var i=lT(),s=Cf(i)
s.__click=[nT,H,n]
var o=Ef(s)
ep(o,17,()=>t.columns,Zh,(e,t,i)=>{var s=iT()
s.__click=[rT,G,n,t]
var o=Ef(s),a=e=>{const r=tf(()=>xh(t).renderComponent.component||xh(t).renderComponent)
var i=Hh()
ap(Cf(i),()=>xh(r),(e,r)=>{r(e,function(...e){return new Proxy({props:e},ng)}(()=>xh(t).renderComponent.props||{},{get row(){return xh(n)},get col(){return xh(t)}}))}),Uh(e,i)},l=e=>{var s=Hh(),o=Cf(s),a=e=>{var s=Hh()
sp(Cf(s),()=>xh(t).renderValue?xh(t).renderValue(xh(n),r,i):xh(t).value(xh(n),r,i)),Uh(e,s)},l=e=>{var s=qh()
Nf(e=>Wh(s,e),[()=>xh(t).renderValue?xh(t).renderValue(xh(n),r,i):xh(t).value(xh(n),r,i)]),Uh(e,s)}
Yh(o,e=>{xh(t).parseHTML?e(a):e(l,!1)},!0),Uh(e,s)}
Yh(o,e=>{xh(t).renderComponent?e(a):e(l,!1)}),Nf(e=>pp(s,0,e,"svelte-18zqsmu"),[()=>up(B(["string"==typeof xh(t).class?xh(t).class:null,"function"==typeof xh(t).class?xh(t).class(xh(n),r,i):null,E()]))]),Mh("keypress",s,e=>"Enter"===e.key&&G(e,xh(n),xh(t).key)),Uh(e,s)})
var a=Tf(o),l=e=>{var t=oT(),r=Ef(t)
r.__click=[sT,U,n],sp(Ef(r),()=>xh(n).$expanded?v():_()),Nf(e=>pp(t,0,e,"svelte-18zqsmu"),[()=>up(B(L()))]),Mh("keypress",r,e=>"Enter"===e.key&&U(e,xh(n))),Uh(e,t)}
Yh(a,e=>{m()&&e(l)})
var c=Tf(s,2),u=e=>{var i=aT(),s=Ef(i)
op(Ef(s),()=>t.svelteTableExpanded??Bu,()=>({row:xh(n),n:r})),Nf(e=>{pp(i,0,e,"svelte-18zqsmu"),Sp(s,"colspan",xh(N))},[()=>up(B(P()))]),Uh(e,i)}
Yh(c,e=>{xh(n).$expanded&&e(u)}),Nf(e=>{pp(s,0,e,"svelte-18zqsmu"),Sp(s,"tabindex",f()?"0":null)},[()=>up(B(["string"==typeof x()?x():null,"function"==typeof x()?x()(xh(n),r):null,xh(n).$expanded&&T(),xh(n).$selected&&C()]))]),Mh("keypress",s,e=>"Enter"===e.key&&H(e,xh(n))),Uh(e,i)}
Yh(s,e=>{t.svelteTableRow?e(o):e(a,!1)}),Uh(e,i)}),Nf((e,t,n)=>{pp(W,0,e,"svelte-18zqsmu"),pp(z,0,t,"svelte-18zqsmu"),pp(X,0,n,"svelte-18zqsmu")},[()=>up(B(y())),()=>up(B(b())),()=>up(B(w()))]),Uh(e,W),Sd()}function dT(e){return new Intl.NumberFormat("en-us").format(e)}Ah(["click"])
var fT=Bh('<div class="content svelte-1u8rhii"><!></div>')
function hT(e,t){kd(t,!0)
let n=rg(t,"visible",15,!0)
const r=[{key:"slot",title:"Slot",value:e=>e.slot,sortable:!0},{key:"name",title:"Name",value:e=>e.name,sortable:!0,renderValue:e=>WC(e.id,e.name),parseHTML:!0},{key:"level",title:"Level",value:e=>e.level,sortable:!0},{key:"rank",title:"Rank",value:e=>e.rank,sortable:!0},{key:"guild_xp",title:"GXP",value:e=>e.guild_xp,sortable:!0,renderValue:e=>dT(e.guild_xp)},{key:"activity",title:"Activity",value:e=>e.activity,sortable:!0},{key:"pack",title:"Pack",value:e=>e.pack,sortable:!0},{key:"max_stamina",title:"Stam",value:e=>e.max_stamina,sortable:!0,renderValue:e=>im(e.max_stamina)?"":dT(e.max_stamina)}]
let i=cf(gf([]))
const s=({equipped:e})=>!e,o=({player:{id:e}})=>e,a=e=>e.members
function l([e,t]){const n=e.r.filter(s).map(o),r=em(W_(n).map(e=>[e,n.filter(t=>t===e).length])),i=(e=>e.r.flatMap(a))(t)
return i.map((l=r,(e,t)=>({...e,slot:t+1,activity:rm(e.last_activity),pack:l[e.id]??0})))
var l}const c=tf(()=>{if(n())return async function(){const[e,t]=await zm([CE(),Z_()])
if(e?.s&&t?.s){const n=l([e,t])
df(i,n,!0)}}()})
{const t=e=>{Uh(e,qh("Who's Got What"))}
rx(e,{close:function(){Qg("Whos Got What","close"),n(!1)},get visible(){return n()},title:t,children:(e,t)=>{var n=fT()
Kh(Ef(n),()=>xh(c),e=>{Uh(e,qh("Loading..."))},e=>{uT(e,{classNameTable:"whos-got-what",get columns(){return r},get rows(){return xh(i)}})},(e,t)=>{var n=qh()
Nf(()=>Wh(n,xh(t))),Uh(e,n)}),Uh(e,n)},$$slots:{title:!0,default:!0}})}Sd()}const pT=gf({visible:!0})
let gT=0
var vT=Object.freeze({__proto__:null,default:function(){gT?pT.visible=!0:gT=zh(hT,{props:pT,target:document.body})}})
const _T=()=>{uv(import("./inventory-DMPM2bcs.js"))},mT=()=>{uv(import("./bazaar-Dn0gjiIb.js"))}
function yT(){uv(import("./injectQuestBookFull-CvSDP5qK.js"))}const bT=()=>{uv(import("./scavenging-rQMgtOoA.js"))}
const wT=()=>{uv(import("./toprated-DzFZLW6A.js"))}
const kT=()=>{uv(import("./trade-DasvHCUY.js"))}
var ST={crates:{"-":{"-":()=>{uv(import("./crates-BO_snSSm.js"))}}},creatures:{"-":{"-":QS}},items:JS,masterrealms:{"-":{"-":QS}},quests:{"-":{"-":QS},view:{"-":()=>{uv(import("./showAllQuestSteps-DheWuyc-.js"))}}},realms:{"-":{"-":QS}},relics:{"-":{"-":QS}},shops:{"-":{"-":QS}},"-":ex,arena:FS,auctionhouse:jS,bank:{"-":{"-":()=>{uv(import("./injectBank-ByrYcKn1.js"))}}},blacksmith:{repairall:{"-":function(){Tu("fromworld")&&AS()}}},buffmarket:{"-":{"-":()=>{uv(import("./injectBuffmarket-FRa7i38s.js"))}},add:{"-":()=>{uv(import("./injectBigBuffPacakges-H6Gn6U11.js"))}},manage:{"-":()=>{uv(import("./injectManage-H9GQgaBO.js"))}}},combat:{attackplayer:{"-":KS}},composing:NS,findplayer:{"-":{"-":()=>{uv(import("./findplayer-CufmWgyc.js"))}}},guild:WS,hellforge:{"-":{"-":()=>{uv(import("./hellforge-D-DH9VrI.js"))}}},inventing:VS,log:{"-":{"-":()=>{uv(import("./playerLog-B1lfDevB.js"))}}},marketplace:{createreq:{"-":()=>{uv(import("./marketplace-CSfNCHB7.js"))}}},news:ZS,notepad:{showlogs:{"-":fv},invmanagernew:{"-":_T},guildinvmgr:{"-":_T},recipemanager:{"-":xv},auctionsearch:{"-":_v},onlineplayers:{"-":bv},quicklinkmanager:{"-":kv},monsterlog:{"-":hv},quickextract:{"-":wv},quickwear:{"-":Sv},fsboxcontent:{"-":pv},bufflogcontent:{"-":dv},newguildlog:{"-":gv},findbuffs:{"-":mv},findother:{"-":yv},savesettings:{"-":()=>{uv(import("./load-C8j56rOx.js"))}},reliclist:{"-":Ev},"-":{"-":function(){}}},points:{"-":{"-":()=>{uv(import("./points-HTAcxjRM.js"))}}},potionbazaar:{"-":{"-":mT},buyitem:{"-":mT}},privatemessage:{"-":{"-":()=>{uv(import("./privateMsg-DrATUiqs.js"))}}},profile:{"-":{"-":KS},managecombatset:{"-":KS},report:{"-":KS},equipitem:{"-":KS},useitem:{"-":KS},changebio:{"-":DS},dropitems:{"-":function(){uv(import("./injectProfileDropItems-BXUuAQNO.js"))}}},pvpladder:{"-":{"-":()=>{uv(import("./ladder-axs-IvMI.js"))}}},questbook:{"-":{"-":yT},atoz:{"-":yT},viewquest:{"-":()=>{uv(import("./injectQuestTracker-D2LdTi-G.js"))}}},quickbuff:{"-":{"-":()=>{uv(import("./quickBuff-DnOvE6-C.js"))}}},scavenging:{"-":{"-":bT},process:{"-":bT}},settings:{"-":{"-":()=>{uv(import("./injectSettings-NhFnUV5u.js"))}}},skills:{"-":{"-":()=>{}}},superelite:{"-":{"-":()=>{uv(import("./superelite-DreQPRUF.js"))}}},tempinv:{"-":{"-":()=>{uv(import("./mailbox-04Rb7V7K.js"))}}},temple:{"-":{"-":Hk}},titan:{"-":{"-":()=>{uv(import("./injectTitan-BAs5HPlZ.js"))}}},toprated:{xp:{"-":wT},monthlyxp:{"-":wT},gold:{"-":wT},killstreak:{"-":wT},bounties:{"-":wT},risingstars:{"-":wT},arena:{"-":wT},superelites:{"-":wT},smasher:{"-":wT},globalquest:{"-":()=>{uv(import("./globalQuest-D1codDfN.js"))}}},trade:{"-":{"-":kT},sendgold:{"-":kT},createsecure:{"-":kT},docreatesecure:{"-":kT}},world:{"-":{"-":AS}}}
function xT(e){return tv("ul",e)}const ET=e=>"newWindow"in e&&e.url&&e.name
function CT(e,t){const n=sv(t,xT())
e.filter(ET).forEach(e=>{sv(sv(n,Sy()),function(e){const t=Vm({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return L_(t,()=>Qg("chrome","quick link",e.name)),t}(e))})}function TT(e){const t=nv({className:"fshQuickLinks",style:{left:`${jc("quickLinksLeftPx")}px`,top:`${jc("quickLinksTopPx")}px`}})
t.classList.toggle("fshFixed",jc("keepHelperMenuOnScreen")),jc("draggableQuickLinks")&&(t.classList.add("fshMove"),Wg(t)),CT(e,t),sv(document.body,t)}function PT(){if(!Vc(".mainbody"))return
const e=tb("quickLinks")||[]
e.length&&TT(e)}let LT=0,$T=0,IT=0,RT="",OT=0,MT=0
function AT(e){return Tu(e)||"-"}function FT(e){const t=Vc(e)
return t?.value||"-"}function jT(){if(Wc(ST[LT])&&Wc(ST[LT][$T])&&Gc(ST[LT][$T][IT]))return ST[LT][$T][IT]}function NT(){""!==document.location.search?(LT=AT("cmd"),$T=AT("subcmd"),IT=AT("subcmd2"),["points","privatemessage"].includes(LT)&&(RT=`/${AT("type")}`)):(LT=FT('input[name="cmd"]'),$T=FT('input[name="subcmd"]'),IT=FT('input[name="subcmd2"]')),uu.cmd=LT,uu.subcmd=$T,uu.subcmd2=IT,MT=`${LT}/${$T}/${IT}${RT}`,OT=jT()}function DT(){Gc(OT)&&(Uc(MT),OT())}async function BT(e){NT(),await e,MS(),Eu(3,DT),jc("playNewMessageSound")&&Eu(3,Ig),N_()||Eu(3,PT)}const qT=[()=>!("showPicker"in HTMLSelectElement.prototype),()=>!navigator.cookieEnabled,()=>window!==window.parent,function(){if(!d){const e=l(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
u=c.includes(e),d=!0}return u}]
function HT(e,t){if(qT.some(e=>e()))return
const n=Qc("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
iu(),function(e,t){uu.gmInfo=zc(decodeURIComponent(t)),uu.gmInfo?uu.fshVer=e:uu.fshVer=`${e}_native`,uu.calfVer="158"}(e,t),o(),Ca(),BT(n)}export{Yv as $,Pw as A,Bh as B,Tf as C,Cf as D,Ef as E,ep as F,Yh as G,Mp as H,df as I,xh as J,uf as K,Uh as L,Iw as M,Sd as N,Mh as O,Nf as P,Wh as Q,l_ as R,Sp as S,Ch as T,Fp as U,Qv as V,A_ as W,pc as X,$c as Y,Vm as Z,Ol as _,r_ as a,Cu as a$,zm as a0,Um as a1,Yy as a2,ky as a3,bg as a4,xy as a5,Rg as a6,H_ as a7,Ya as a8,xT as a9,iv as aA,Yg as aB,Cl as aC,Nw as aD,Kh as aE,Hh as aF,Nc as aG,jp as aH,Na as aI,Fa as aJ,Xb as aK,hc as aL,dT as aM,bw as aN,Wa as aO,ll as aP,Jy as aQ,Jk as aR,kg as aS,Kb as aT,Vb as aU,nb as aV,d_ as aW,Gb as aX,Wk as aY,ml as aZ,yl as a_,Xg as aa,Ub as ab,du as ac,Vv as ad,e_ as ae,Xv as af,Rc as ag,Oc as ah,$_ as ai,cf as aj,gf as ak,tb as al,mp as am,Uy as an,Ah as ao,jw as ap,Tu as aq,Aw as ar,fv as as,hv as at,Hc as au,im as av,Fy as aw,uu as ax,lu as ay,jc as az,au as b,Wm as b$,Nl as b0,pl as b1,Kx as b2,Lc as b3,Zb as b4,yg as b5,Ey as b6,s as b7,fS as b8,Ul as b9,Gl as bA,tf as bB,qh as bC,Ml as bD,Ll as bE,W_ as bF,Sh as bG,pp as bH,Rm as bI,Om as bJ,wk as bK,Jm as bL,Ja as bM,Zl as bN,rc as bO,Zh as bP,Ax as bQ,Qa as bR,Jb as bS,Fl as bT,Jp as bU,Qp as bV,Db as bW,il as bX,Ck as bY,fu as bZ,Ic as b_,cl as ba,oc as bb,Wl as bc,zl as bd,Yl as be,Vl as bf,Fk as bg,Hx as bh,Rl as bi,w_ as bj,za as bk,tc as bl,zv as bm,zc as bn,Eu as bo,yw as bp,rv as bq,bc as br,yc as bs,kc as bt,wc as bu,Sc as bv,mg as bw,wg as bx,Gc as by,Ga as bz,xg as c,_m as c$,f_ as c0,Ba as c1,Ha as c2,vl as c3,sg as c4,tg as c5,Zp as c6,nc as c7,Jh as c8,Kl as c9,Kk as cA,cu as cB,jl as cC,Zv as cD,pk as cE,$x as cF,cc as cG,P_ as cH,Ix as cI,uc as cJ,Ka as cK,fk as cL,tm as cM,WC as cN,xl as cO,vc as cP,ww as cQ,mc as cR,dc as cS,ol as cT,Wb as cU,rl as cV,dS as cW,Ky as cX,ja as cY,a as cZ,xa as c_,sc as ca,ac as cb,lc as cc,o_ as cd,s_ as ce,a_ as cf,Ql as cg,Jl as ch,ic as ci,Aa as cj,ec as ck,Hb as cl,F_ as cm,rb as cn,n_ as co,Da as cp,h_ as cq,up as cr,Tc as cs,g_ as ct,lC as cu,Wc as cv,Mc as cw,gc as cx,Pc as cy,bl as cz,ov as d,Hl as d$,Mm as d0,kk as d1,e as d2,Qc as d3,uv as d4,dC as d5,lp as d6,Xh as d7,Uu as d8,T_ as d9,tl as dA,nl as dB,fc as dC,vv as dD,Pl as dE,Sy as dF,sl as dG,xk as dH,zb as dI,el as dJ,BS as dK,jx as dL,Up as dM,Rp as dN,fg as dO,Dl as dP,Bl as dQ,rx as dR,kp as dS,Dc as dT,B_ as dU,gl as dV,ap as dW,kl as dX,Cx as dY,Rx as dZ,md as d_,fl as da,Ua as db,xc as dc,U_ as dd,_c as de,Uc as df,YS as dg,yT as dh,zS as di,Ym as dj,Km as dk,CE as dl,SE as dm,ux as dn,LE as dp,Va as dq,xE as dr,aC as ds,Jv as dt,Ec as du,nm as dv,vp as dw,al as dx,Xa as dy,Hy as dz,t_ as e,Yb as e0,D_ as e1,ey as e2,Dm as e3,Zm as e4,jm as e5,Bm as e6,Fm as e7,Nm as e8,qm as e9,Am as ea,Hm as eb,ly as ec,sy as ed,ay as ee,oy as ef,ry as eg,y_ as eh,dl as ei,Sl as ej,hh as ek,lf as el,hf as em,wv as en,Kp as eo,cv as ep,Sv as eq,_l as er,HT as es,em as f,t as g,I_ as h,sv as i,q_ as j,Uw as k,n as l,_g as m,zh as n,L_ as o,Lg as p,Vc as q,l as r,Qg as s,tv as t,nv as u,Ou as v,Of as w,kd as x,rg as y,Gp as z}
//# sourceMappingURL=calfSystem-CIuUjh4H.js.map
