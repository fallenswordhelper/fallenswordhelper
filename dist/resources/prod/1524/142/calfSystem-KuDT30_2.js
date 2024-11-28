function e(e){return new Promise((t=>{const n=document.createElement("script")
n.async=!0,n.onload=t,n.src=e,document.body.appendChild(n)}))}function t(e,t){return t?t.getElementById(e):document.getElementById(e)}function n(e){if(e instanceof Node)return e.textContent}let i=null
const r=()=>function(){const e=t("statbar-character")
return e&&n(e)}()||"string"==typeof window.self&&window.self
function s(){if(!i){const e=r()
e&&(i=e)}return i}function o(){!function(){e("https://www.googletagmanager.com/gtag/js?id=G-14Y99WX8XL"),window.dataLayer=window.dataLayer||[],window.gtag=window.gtag||function(){window.dataLayer.push(arguments)},gtag("js",new Date)
const t=s()
t&&gtag("config","G-14Y99WX8XL",{user_id:t})}()}function a(e,t){return e.exec(t)}function l(e,t){const n=a(e,t)
if(n)return n[1]}const c=["www.keeprefreshing.com"]
let u=!1,d=!1
var h="undefined"!=typeof window?window:void 0,f="undefined"!=typeof globalThis?globalThis:h,p=Array.prototype,g=p.forEach,_=p.indexOf,v=null==f?void 0:f.navigator,m=null==f?void 0:f.document,y=null==f?void 0:f.location,b=null==f?void 0:f.fetch,w=null!=f&&f.XMLHttpRequest&&"withCredentials"in new f.XMLHttpRequest?f.XMLHttpRequest:void 0,k=null==f?void 0:f.AbortController,S=null==v?void 0:v.userAgent,E=null!=h?h:{},x={DEBUG:!1,LIB_VERSION:"1.190.2"},P={},C=function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}
function T(e,t,n){if(V(e))if(g&&e.forEach===g)e.forEach(t,n)
else if("length"in e&&e.length===+e.length)for(var i=0,r=e.length;i<r;i++)if(i in e&&t.call(n,e[i],i)===P)return}function I(e,t,n){if(!te(e)){if(V(e))return T(e,t,n)
if(re(e)){for(var i of e.entries())if(t.call(n,i[1],i[0])===P)return}else for(var r in e)if(W.call(e,r)&&t.call(n,e[r],r)===P)return}}var L=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
return T(n,(function(t){for(var n in t)void 0!==t[n]&&(e[n]=t[n])})),e}
function R(e,t){return-1!==e.indexOf(t)}function O(e){for(var t=Object.keys(e),n=t.length,i=new Array(n);n--;)i[n]=[t[n],e[t[n]]]
return i}var F=function(e){try{return e()}catch(e){return}},A=function(e){return function(){try{for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i]
return e.apply(this,n)}catch(e){ae.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."),ae.critical(e)}}},M=function(e){var t={}
return I(e,(function(e,n){Y(e)&&e.length>0&&(t[n]=e)})),t},j=function(e){return e.replace(/^\$/,"")}
var N=function(){function e(t){return t&&(t.preventDefault=e.preventDefault,t.stopPropagation=e.stopPropagation),t}return e.preventDefault=function(){this.returnValue=!1},e.stopPropagation=function(){this.cancelBubble=!0},function(t,n,i,r,s){if(t)if(t.addEventListener&&!r)t.addEventListener(n,i,!!s)
else{var o="on"+n,a=t[o]
t[o]=function(t,n,i){return function(r){if(r=r||e(null==h?void 0:h.event)){var s,o=!0
Q(i)&&(s=i(r))
var a=n.call(t,r)
return!1!==s&&!1!==a||(o=!1),o}}}(t,i,a)}else ae.error("No valid element provided to register_event")}}()
function D(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}var B,H="$copy_autocapture",q=["$snapshot","$pageview","$pageleave","$set","survey dismissed","survey sent","survey shown","$identify","$groupidentify","$create_alias","$$client_ingestion_warning","$web_experiment_applied","$feature_enrollment_update","$feature_flag_called"]
!function(e){e.GZipJS="gzip-js",e.Base64="base64"}(B||(B={}))
var U=Array.isArray,G=Object.prototype,W=G.hasOwnProperty,z=G.toString,V=U||function(e){return"[object Array]"===z.call(e)},Q=e=>"function"==typeof e,J=e=>e===Object(e)&&!V(e),K=e=>{if(J(e)){for(var t in e)if(W.call(e,t))return!1
return!0}return!1},X=e=>void 0===e,Y=e=>"[object String]"==z.call(e),Z=e=>Y(e)&&0===e.trim().length,ee=e=>null===e,te=e=>X(e)||ee(e),ne=e=>"[object Number]"==z.call(e),ie=e=>"[object Boolean]"===z.call(e),re=e=>e instanceof FormData,se=e=>R(q,e),oe="[PostHog.js]",ae={_log:function(e){if(h&&(x.DEBUG||E.POSTHOG_DEBUG)&&!X(h.console)&&h.console){for(var t=("__rrweb_original__"in h.console[e]?h.console[e].__rrweb_original__:h.console[e]),n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r]
t(oe,...i)}},info:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
ae._log("log",...t)},warn:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
ae._log("warn",...t)},error:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
ae._log("error",...t)},critical:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
console.error(oe,...t)},uninitializedWarning:e=>{ae.error("You must initialize PostHog before calling ".concat(e))}},le=(e,t,n)=>{if(e.config.disable_external_dependency_loading)return ae.warn("".concat(t," was requested but loading of external scripts is disabled.")),n("Loading of external scripts is disabled")
var i=()=>{if(!m)return n("document not found")
var e=m.createElement("script")
e.type="text/javascript",e.crossOrigin="anonymous",e.src=t,e.onload=e=>n(void 0,e),e.onerror=e=>n(e)
var i,r=m.querySelectorAll("body > script")
r.length>0?null===(i=r[0].parentNode)||void 0===i||i.insertBefore(e,r[0]):m.body.appendChild(e)}
null!=m&&m.body?i():null==m||m.addEventListener("DOMContentLoaded",i)}
function ce(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ce(Object(n),!0).forEach((function(t){de(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function he(e,t){if(null==e)return{}
var n,i,r=function(e,t){if(null==e)return{}
var n,i,r={},s=Object.keys(e)
for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n])
return r}(e,t)
if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e)
for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}E.__PosthogExtensions__=E.__PosthogExtensions__||{},E.__PosthogExtensions__.loadExternalDependency=(e,t,n)=>{var i="/static/".concat(t,".js")+"?v=".concat(e.version)
if("toolbar"===t){var r=3e5,s=Math.floor(Date.now()/r)*r
i="".concat(i,"&t=").concat(s)}var o=e.requestRouter.endpointFor("assets",i)
le(e,o,n)},E.__PosthogExtensions__.loadSiteApp=(e,t,n)=>{var i=e.requestRouter.endpointFor("api",t)
le(e,i,n)}
var fe="$people_distinct_id",pe="__alias",ge="__timers",_e="$autocapture_disabled_server_side",ve="$heatmaps_enabled_server_side",me="$exception_capture_enabled_server_side",ye="$web_vitals_enabled_server_side",be="$dead_clicks_enabled_server_side",we="$web_vitals_allowed_metrics",ke="$session_recording_enabled_server_side",Se="$console_log_recording_enabled_server_side",Ee="$session_recording_network_payload_capture",xe="$session_recording_canvas_recording",Pe="$replay_sample_rate",Ce="$replay_minimum_duration",Te="$sesid",$e="$session_is_sampled",Ie="$session_recording_url_trigger_activated_session",Le="$session_recording_event_trigger_activated_session",Re="$enabled_feature_flags",Oe="$early_access_features",Fe="$stored_person_properties",Ae="$stored_group_properties",Me="$surveys",je="$surveys_activated",Ne="$flag_call_reported",De="$user_state",Be="$client_session_props",He="$capture_rate_limit",qe="$initial_campaign_params",Ue="$initial_referrer_info",Ge="$initial_person_info",We="$epp",ze="__POSTHOG_TOOLBAR__",Ve=[fe,pe,"__cmpns",ge,ke,ve,Te,Re,De,Oe,Ae,Fe,Me,Ne,Be,He,qe,Ue,We],Qe="$active_feature_flags",Je="$override_feature_flags",Ke="$feature_flag_payloads",Xe=e=>{var t={}
for(var[n,i]of O(e||{}))i&&(t[n]=i)
return t}
class Ye{constructor(e){this.instance=e,this._override_warning=!1,this.featureFlagEventHandlers=[],this.reloadFeatureFlagsQueued=!1,this.reloadFeatureFlagsInAction=!1}getFlags(){return Object.keys(this.getFlagVariants())}getFlagVariants(){var e=this.instance.get_property(Re),t=this.instance.get_property(Je)
if(!t)return e||{}
for(var n=L({},e),i=Object.keys(t),r=0;r<i.length;r++)n[i[r]]=t[i[r]]
return this._override_warning||(ae.warn(" Overriding feature flags!",{enabledFlags:e,overriddenFlags:t,finalFlags:n}),this._override_warning=!0),n}getFlagPayloads(){return this.instance.get_property(Ke)||{}}reloadFeatureFlags(){this.reloadFeatureFlagsQueued||(this.reloadFeatureFlagsQueued=!0,this._startReloadTimer())}setAnonymousDistinctId(e){this.$anon_distinct_id=e}setReloadingPaused(e){this.reloadFeatureFlagsInAction=e}resetRequestQueue(){this.reloadFeatureFlagsQueued=!1}_startReloadTimer(){this.reloadFeatureFlagsQueued&&!this.reloadFeatureFlagsInAction&&setTimeout((()=>{!this.reloadFeatureFlagsInAction&&this.reloadFeatureFlagsQueued&&(this.reloadFeatureFlagsQueued=!1,this._reloadFeatureFlagsRequest())}),5)}_reloadFeatureFlagsRequest(){if(!this.instance.config.advanced_disable_feature_flags){this.setReloadingPaused(!0)
var e=this.instance.config.token,t=this.instance.get_property(Fe),n=this.instance.get_property(Ae),i={token:e,distinct_id:this.instance.get_distinct_id(),groups:this.instance.getGroups(),$anon_distinct_id:this.$anon_distinct_id,person_properties:t,group_properties:n,disable_flags:this.instance.config.advanced_disable_feature_flags||void 0}
this.instance._send_request({method:"POST",url:this.instance.requestRouter.endpointFor("api","/decide/?v=3"),data:i,compression:this.instance.config.disable_compression?void 0:B.Base64,timeout:this.instance.config.feature_flag_request_timeout_ms,callback:e=>{var t
this.setReloadingPaused(!1)
var n=!0
200===e.statusCode&&(this.$anon_distinct_id=void 0,n=!1),this.receivedFeatureFlags(null!==(t=e.json)&&void 0!==t?t:{},n),this._startReloadTimer()}})}}getFeatureFlag(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(this.instance.decideEndpointWasHit||this.getFlags()&&this.getFlags().length>0){var n,i=this.getFlagVariants()[e],r="".concat(i),s=this.instance.get_property(Ne)||{}
return!t.send_event&&"send_event"in t||e in s&&s[e].includes(r)||(V(s[e])?s[e].push(r):s[e]=[r],null===(n=this.instance.persistence)||void 0===n||n.register({[Ne]:s}),this.instance.capture("$feature_flag_called",{$feature_flag:e,$feature_flag_response:i})),i}ae.warn('getFeatureFlag for key "'+e+"\" failed. Feature flags didn't load in time.")}getFeatureFlagPayload(e){return this.getFlagPayloads()[e]}isFeatureEnabled(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(this.instance.decideEndpointWasHit||this.getFlags()&&this.getFlags().length>0)return!!this.getFeatureFlag(e,t)
ae.warn('isFeatureEnabled for key "'+e+"\" failed. Feature flags didn't load in time.")}addFeatureFlagsHandler(e){this.featureFlagEventHandlers.push(e)}removeFeatureFlagsHandler(e){this.featureFlagEventHandlers=this.featureFlagEventHandlers.filter((t=>t!==e))}receivedFeatureFlags(e,t){if(this.instance.persistence){this.instance.decideEndpointWasHit=!0
var n=this.getFlagVariants(),i=this.getFlagPayloads()
!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=e.featureFlags,s=e.featureFlagPayloads
if(r)if(V(r)){var o={}
if(r)for(var a=0;a<r.length;a++)o[r[a]]=!0
t&&t.register({[Qe]:r,[Re]:o})}else{var l=r,c=s
e.errorsWhileComputingFlags&&(l=ue(ue({},n),l),c=ue(ue({},i),c)),t&&t.register({[Qe]:Object.keys(Xe(l)),[Re]:l||{},[Ke]:c||{}})}}(e,this.instance.persistence,n,i),this._fireFeatureFlagsCallbacks(t)}}override(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(!this.instance.__loaded||!this.instance.persistence)return ae.uninitializedWarning("posthog.feature_flags.override")
if(this._override_warning=t,!1===e)this.instance.persistence.unregister(Je)
else if(V(e)){for(var n={},i=0;i<e.length;i++)n[e[i]]=!0
this.instance.persistence.register({[Je]:n})}else this.instance.persistence.register({[Je]:e})}onFeatureFlags(e){if(this.addFeatureFlagsHandler(e),this.instance.decideEndpointWasHit){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
e(t,n)}return()=>this.removeFeatureFlagsHandler(e)}updateEarlyAccessFeatureEnrollment(e,t){var n,i={["$feature_enrollment/".concat(e)]:t}
this.instance.capture("$feature_enrollment_update",{$feature_flag:e,$feature_enrollment:t,$set:i}),this.setPersonPropertiesForFlags(i,!1)
var r=ue(ue({},this.getFlagVariants()),{},{[e]:t})
null===(n=this.instance.persistence)||void 0===n||n.register({[Qe]:Object.keys(Xe(r)),[Re]:r}),this._fireFeatureFlagsCallbacks()}getEarlyAccessFeatures(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.instance.get_property(Oe)
if(n&&!t)return e(n)
this.instance._send_request({transport:"XHR",url:this.instance.requestRouter.endpointFor("api","/api/early_access_features/?token=".concat(this.instance.config.token)),method:"GET",callback:t=>{var n
if(t.json){var i=t.json.earlyAccessFeatures
return null===(n=this.instance.persistence)||void 0===n||n.register({[Oe]:i}),e(i)}}})}_prepareFeatureFlagsForCallbacks(){var e=this.getFlags(),t=this.getFlagVariants()
return{flags:e.filter((e=>t[e])),flagVariants:Object.keys(t).filter((e=>t[e])).reduce(((e,n)=>(e[n]=t[n],e)),{})}}_fireFeatureFlagsCallbacks(e){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
this.featureFlagEventHandlers.forEach((i=>i(t,n,{errorsLoading:e})))}setPersonPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.instance.get_property(Fe)||{}
this.instance.register({[Fe]:ue(ue({},n),e)}),t&&this.instance.reloadFeatureFlags()}resetPersonPropertiesForFlags(){this.instance.unregister(Fe)}setGroupPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.instance.get_property(Ae)||{}
0!==Object.keys(n).length&&Object.keys(n).forEach((t=>{n[t]=ue(ue({},n[t]),e[t]),delete e[t]})),this.instance.register({[Ae]:ue(ue({},n),e)}),t&&this.instance.reloadFeatureFlags()}resetGroupPropertiesForFlags(e){if(e){var t=this.instance.get_property(Ae)||{}
this.instance.register({[Ae]:ue(ue({},t),{},{[e]:{}})})}else this.instance.unregister(Ae)}}Math.trunc||(Math.trunc=function(e){return e<0?Math.ceil(e):Math.floor(e)}),Number.isInteger||(Number.isInteger=function(e){return ne(e)&&isFinite(e)&&Math.floor(e)===e})
var Ze="0123456789abcdef"
class et{constructor(e){if(this.bytes=e,16!==e.length)throw new TypeError("not 128-bit length")}static fromFieldsV7(e,t,n,i){if(!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(n)||!Number.isInteger(i)||e<0||t<0||n<0||i<0||e>0xffffffffffff||t>4095||n>1073741823||i>4294967295)throw new RangeError("invalid field value")
var r=new Uint8Array(16)
return r[0]=e/Math.pow(2,40),r[1]=e/Math.pow(2,32),r[2]=e/Math.pow(2,24),r[3]=e/Math.pow(2,16),r[4]=e/Math.pow(2,8),r[5]=e,r[6]=112|t>>>8,r[7]=t,r[8]=128|n>>>24,r[9]=n>>>16,r[10]=n>>>8,r[11]=n,r[12]=i>>>24,r[13]=i>>>16,r[14]=i>>>8,r[15]=i,new et(r)}toString(){for(var e="",t=0;t<this.bytes.length;t++)e=e+Ze.charAt(this.bytes[t]>>>4)+Ze.charAt(15&this.bytes[t]),3!==t&&5!==t&&7!==t&&9!==t||(e+="-")
if(36!==e.length)throw new Error("Invalid UUIDv7 was generated")
return e}clone(){return new et(this.bytes.slice(0))}equals(e){return 0===this.compareTo(e)}compareTo(e){for(var t=0;t<16;t++){var n=this.bytes[t]-e.bytes[t]
if(0!==n)return Math.sign(n)}return 0}}class tt{constructor(){de(this,"timestamp",0),de(this,"counter",0),de(this,"random",new rt)}generate(){var e=this.generateOrAbort()
if(X(e)){this.timestamp=0
var t=this.generateOrAbort()
if(X(t))throw new Error("Could not generate UUID after timestamp reset")
return t}return e}generateOrAbort(){var e=Date.now()
if(e>this.timestamp)this.timestamp=e,this.resetCounter()
else{if(!(e+1e4>this.timestamp))return
this.counter++,this.counter>4398046511103&&(this.timestamp++,this.resetCounter())}return et.fromFieldsV7(this.timestamp,Math.trunc(this.counter/Math.pow(2,30)),this.counter&Math.pow(2,30)-1,this.random.nextUint32())}resetCounter(){this.counter=1024*this.random.nextUint32()+(1023&this.random.nextUint32())}}var nt,it=e=>{if("undefined"!=typeof UUIDV7_DENY_WEAK_RNG&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available")
for(var t=0;t<e.length;t++)e[t]=65536*Math.trunc(65536*Math.random())+Math.trunc(65536*Math.random())
return e}
h&&!X(h.crypto)&&crypto.getRandomValues&&(it=e=>crypto.getRandomValues(e))
class rt{constructor(){de(this,"buffer",new Uint32Array(8)),de(this,"cursor",1/0)}nextUint32(){return this.cursor>=this.buffer.length&&(it(this.buffer),this.cursor=0),this.buffer[this.cursor++]}}var st=()=>ot().toString(),ot=()=>(nt||(nt=new tt)).generate(),at="",lt=/[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i
var ct={is_supported:()=>!!m,error:function(e){ae.error("cookieStore error: "+e)},get:function(e){if(m){try{for(var t=e+"=",n=m.cookie.split(";").filter((e=>e.length)),i=0;i<n.length;i++){for(var r=n[i];" "==r.charAt(0);)r=r.substring(1,r.length)
if(0===r.indexOf(t))return decodeURIComponent(r.substring(t.length,r.length))}}catch(e){}return null}},parse:function(e){var t
try{t=JSON.parse(ct.get(e))||{}}catch(e){}return t},set:function(e,t,n,i,r){if(m)try{var s="",o="",a=function(e,t){if(t){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m
if(at)return at
if(!t)return""
if(["localhost","127.0.0.1"].includes(e))return""
for(var n=e.split("."),i=Math.min(n.length,8),r="dmn_chk_"+st(),s=new RegExp("(^|;)\\s*"+r+"=1");!at&&i--;){var o=n.slice(i).join("."),a=r+"=1;domain=."+o
t.cookie=a,s.test(t.cookie)&&(t.cookie=a+";expires=Thu, 01 Jan 1970 00:00:00 GMT",at=o)}return at}(e)
if(!n){var i=(e=>{var t=e.match(lt)
return t?t[0]:""})(e)
i!==n&&ae.info("Warning: cookie subdomain discovery mismatch",i,n),n=i}return n?"; domain=."+n:""}return""}(m.location.hostname,i)
if(n){var l=new Date
l.setTime(l.getTime()+24*n*60*60*1e3),s="; expires="+l.toUTCString()}r&&(o="; secure")
var c=e+"="+encodeURIComponent(JSON.stringify(t))+s+"; SameSite=Lax; path=/"+a+o
return c.length>3686.4&&ae.warn("cookieStore warning: large cookie, len="+c.length),m.cookie=c,c}catch(e){return}},remove:function(e,t){try{ct.set(e,"",-1,t)}catch(e){return}}},ut=null,dt={is_supported:function(){if(!ee(ut))return ut
var e=!0
if(X(h))e=!1
else try{var t="__mplssupport__"
dt.set(t,"xyz"),'"xyz"'!==dt.get(t)&&(e=!1),dt.remove(t)}catch(t){e=!1}return e||ae.error("localStorage unsupported; falling back to cookie store"),ut=e,e},error:function(e){ae.error("localStorage error: "+e)},get:function(e){try{return null==h?void 0:h.localStorage.getItem(e)}catch(e){dt.error(e)}return null},parse:function(e){try{return JSON.parse(dt.get(e))||{}}catch(e){}return null},set:function(e,t){try{null==h||h.localStorage.setItem(e,JSON.stringify(t))}catch(e){dt.error(e)}},remove:function(e){try{null==h||h.localStorage.removeItem(e)}catch(e){dt.error(e)}}},ht=["distinct_id",Te,$e,We,Ge],ft=ue(ue({},dt),{},{parse:function(e){try{var t={}
try{t=ct.parse(e)||{}}catch(e){}var n=L(t,JSON.parse(dt.get(e)||"{}"))
return dt.set(e,n),n}catch(e){}return null},set:function(e,t,n,i,r,s){try{dt.set(e,t,void 0,void 0,s)
var o={}
ht.forEach((e=>{t[e]&&(o[e]=t[e])})),Object.keys(o).length&&ct.set(e,o,n,i,r,s)}catch(e){dt.error(e)}},remove:function(e,t){try{null==h||h.localStorage.removeItem(e),ct.remove(e,t)}catch(e){dt.error(e)}}}),pt={},gt={is_supported:function(){return!0},error:function(e){ae.error("memoryStorage error: "+e)},get:function(e){return pt[e]||null},parse:function(e){return pt[e]||null},set:function(e,t){pt[e]=t},remove:function(e){delete pt[e]}},_t=null,vt={is_supported:function(){if(!ee(_t))return _t
if(_t=!0,X(h))_t=!1
else try{var e="__support__"
vt.set(e,"xyz"),'"xyz"'!==vt.get(e)&&(_t=!1),vt.remove(e)}catch(e){_t=!1}return _t},error:function(e){ae.error("sessionStorage error: ",e)},get:function(e){try{return null==h?void 0:h.sessionStorage.getItem(e)}catch(e){vt.error(e)}return null},parse:function(e){try{return JSON.parse(vt.get(e))||null}catch(e){}return null},set:function(e,t){try{null==h||h.sessionStorage.setItem(e,JSON.stringify(t))}catch(e){vt.error(e)}},remove:function(e){try{null==h||h.sessionStorage.removeItem(e)}catch(e){vt.error(e)}}},mt=["localhost","127.0.0.1"],yt=e=>{var t=null==m?void 0:m.createElement("a")
return X(t)?null:(t.href=e,t)},bt=function(e,t){return!!function(e){try{new RegExp(e)}catch(e){return!1}return!0}(t)&&new RegExp(t).test(e)},wt=function(e,t){for(var n,i=((e.split("#")[0]||"").split("?")[1]||"").split("&"),r=0;r<i.length;r++){var s=i[r].split("=")
if(s[0]===t){n=s
break}}if(!V(n)||n.length<2)return""
var o=n[1]
try{o=decodeURIComponent(o)}catch(e){ae.error("Skipping decoding for malformed query param: "+o)}return o.replace(/\+/g," ")},kt=function(e,t){var n=e.match(new RegExp(t+"=([^&]*)"))
return n?n[1]:null},St="Mobile",Et="iOS",xt="Android",Pt="Tablet",Ct=xt+" "+Pt,Tt="iPad",$t="Apple",It=$t+" Watch",Lt="Safari",Rt="BlackBerry",Ot="Samsung",Ft=Ot+"Browser",At=Ot+" Internet",Mt="Chrome",jt=Mt+" OS",Nt=Mt+" "+Et,Dt="Internet Explorer",Bt=Dt+" "+St,Ht="Opera",qt=Ht+" Mini",Ut="Edge",Gt="Microsoft "+Ut,Wt="Firefox",zt=Wt+" "+Et,Vt="Nintendo",Qt="PlayStation",Jt="Xbox",Kt=xt+" "+St,Xt=St+" "+Lt,Yt="Windows",Zt=Yt+" Phone",en="Nokia",tn="Ouya",nn="Generic",rn=nn+" "+St.toLowerCase(),sn=nn+" "+Pt.toLowerCase(),on="Konqueror",an="(\\d+(\\.\\d+)?)",ln=new RegExp("Version/"+an),cn=new RegExp(Jt,"i"),un=new RegExp(Qt+" \\w+","i"),dn=new RegExp(Vt+" \\w+","i"),hn=new RegExp(Rt+"|PlayBook|BB10","i"),fn={"NT3.51":"NT 3.11","NT4.0":"NT 4.0","5.0":"2000",5.1:"XP",5.2:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1",6.4:"10","10.0":"10"},pn=function(e,t){return t=t||"",R(e," OPR/")&&R(e,"Mini")?qt:R(e," OPR/")?Ht:hn.test(e)?Rt:R(e,"IE"+St)||R(e,"WPDesktop")?Bt:R(e,Ft)?At:R(e,Ut)||R(e,"Edg/")?Gt:R(e,"FBIOS")?"Facebook "+St:R(e,"UCWEB")||R(e,"UCBrowser")?"UC Browser":R(e,"CriOS")?Nt:R(e,"CrMo")?Mt:R(e,xt)&&R(e,Lt)?Kt:R(e,Mt)?Mt:R(e,"FxiOS")?zt:R(e.toLowerCase(),on.toLowerCase())?on:((e,t)=>t&&R(t,$t)||function(e){return R(e,Lt)&&!R(e,Mt)&&!R(e,xt)}(e))(e,t)?R(e,St)?Xt:Lt:R(e,Wt)?Wt:R(e,"MSIE")||R(e,"Trident/")?Dt:R(e,"Gecko")?Wt:""},gn={[Bt]:[new RegExp("rv:"+an)],[Gt]:[new RegExp(Ut+"?\\/"+an)],[Mt]:[new RegExp("("+Mt+"|CrMo)\\/"+an)],[Nt]:[new RegExp("CriOS\\/"+an)],"UC Browser":[new RegExp("(UCBrowser|UCWEB)\\/"+an)],[Lt]:[ln],[Xt]:[ln],[Ht]:[new RegExp("(Opera|OPR)\\/"+an)],[Wt]:[new RegExp(Wt+"\\/"+an)],[zt]:[new RegExp("FxiOS\\/"+an)],[on]:[new RegExp("Konqueror[:/]?"+an,"i")],[Rt]:[new RegExp(Rt+" "+an),ln],[Kt]:[new RegExp("android\\s"+an,"i")],[At]:[new RegExp(Ft+"\\/"+an)],[Dt]:[new RegExp("(rv:|MSIE )"+an)],Mozilla:[new RegExp("rv:"+an)]},_n=[[new RegExp(Jt+"; "+Jt+" (.*?)[);]","i"),e=>[Jt,e&&e[1]||""]],[new RegExp(Vt,"i"),[Vt,""]],[new RegExp(Qt,"i"),[Qt,""]],[hn,[Rt,""]],[new RegExp(Yt,"i"),(e,t)=>{if(/Phone/.test(t)||/WPDesktop/.test(t))return[Zt,""]
if(new RegExp(St).test(t)&&!/IEMobile\b/.test(t))return[Yt+" "+St,""]
var n=/Windows NT ([0-9.]+)/i.exec(t)
if(n&&n[1]){var i=n[1],r=fn[i]||""
return/arm/i.test(t)&&(r="RT"),[Yt,r]}return[Yt,""]}],[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,e=>{if(e&&e[3]){var t=[e[3],e[4],e[5]||"0"]
return[Et,t.join(".")]}return[Et,""]}],[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,e=>{var t=""
return e&&e.length>=3&&(t=X(e[2])?e[3]:e[2]),["watchOS",t]}],[new RegExp("("+xt+" (\\d+)\\.(\\d+)\\.?(\\d+)?|"+xt+")","i"),e=>{if(e&&e[2]){var t=[e[2],e[3],e[4]||"0"]
return[xt,t.join(".")]}return[xt,""]}],[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,e=>{var t=["Mac OS X",""]
if(e&&e[1]){var n=[e[1],e[2],e[3]||"0"]
t[1]=n.join(".")}return t}],[/Mac/i,["Mac OS X",""]],[/CrOS/,[jt,""]],[/Linux|debian/i,["Linux",""]]],vn=function(e){return dn.test(e)?Vt:un.test(e)?Qt:cn.test(e)?Jt:new RegExp(tn,"i").test(e)?tn:new RegExp("("+Zt+"|WPDesktop)","i").test(e)?Zt:/iPad/.test(e)?Tt:/iPod/.test(e)?"iPod Touch":/iPhone/.test(e)?"iPhone":/(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)?It:hn.test(e)?Rt:/(kobo)\s(ereader|touch)/i.test(e)?"Kobo":new RegExp(en,"i").test(e)?en:/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e)||/(kf[a-z]+)( bui|\)).+silk\//i.test(e)?"Kindle Fire":/(Android|ZTE)/i.test(e)?!new RegExp(St).test(e)||/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e)?/pixel[\daxl ]{1,6}/i.test(e)&&!/pixel c/i.test(e)||/(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e)||/lmy47v/i.test(e)&&!/QTAQZ3/i.test(e)?xt:Ct:xt:new RegExp("(pda|"+St+")","i").test(e)?rn:new RegExp(Pt,"i").test(e)&&!new RegExp(Pt+" pc","i").test(e)?sn:""},mn="https?://(.*)",yn=["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gclid","gad_source","gclsrc","dclid","gbraid","wbraid","fbclid","msclkid","twclid","li_fat_id","mc_cid","igshid","ttclid","rdt_cid"],bn={campaignParams:function(e){return m?this._campaignParamsFromUrl(m.URL,e):{}},_campaignParamsFromUrl:function(e,t){var n=yn.concat(t||[]),i={}
return I(n,(function(t){var n=wt(e,t)
i[t]=n||null})),i},_searchEngine:function(e){return e?0===e.search(mn+"google.([^/?]*)")?"google":0===e.search(mn+"bing.com")?"bing":0===e.search(mn+"yahoo.com")?"yahoo":0===e.search(mn+"duckduckgo.com")?"duckduckgo":null:null},_searchInfoFromReferrer:function(e){var t=bn._searchEngine(e),n="yahoo"!=t?"q":"p",i={}
if(!ee(t)){i.$search_engine=t
var r=m?wt(m.referrer,n):""
r.length&&(i.ph_keyword=r)}return i},searchInfo:function(){var e=null==m?void 0:m.referrer
return e?this._searchInfoFromReferrer(e):{}},browser:pn,browserVersion:function(e,t){var n=pn(e,t),i=gn[n]
if(X(i))return null
for(var r=0;r<i.length;r++){var s=i[r],o=e.match(s)
if(o)return parseFloat(o[o.length-2])}return null},browserLanguage:function(){return navigator.language||navigator.userLanguage},os:function(e){for(var t=0;t<_n.length;t++){var[n,i]=_n[t],r=n.exec(e),s=r&&(Q(i)?i(r,e):i)
if(s)return s}return["",""]},device:vn,deviceType:function(e){var t=vn(e)
return t===Tt||t===Ct||"Kobo"===t||"Kindle Fire"===t||t===sn?Pt:t===Vt||t===Jt||t===Qt||t===tn?"Console":t===It?"Wearable":t?St:"Desktop"},referrer:function(){return(null==m?void 0:m.referrer)||"$direct"},referringDomain:function(){var e
return null!=m&&m.referrer&&(null===(e=yt(m.referrer))||void 0===e?void 0:e.host)||"$direct"},referrerInfo:function(){return{$referrer:this.referrer(),$referring_domain:this.referringDomain()}},initialPersonInfo:function(){return{r:this.referrer().substring(0,1e3),u:null==y?void 0:y.href.substring(0,1e3)}},initialPersonPropsFromInfo:function(e){var t,{r:n,u:i}=e,r={$initial_referrer:n,$initial_referring_domain:null==n?void 0:"$direct"==n?"$direct":null===(t=yt(n))||void 0===t?void 0:t.host}
if(i){r.$initial_current_url=i
var s=yt(i)
r.$initial_host=null==s?void 0:s.host,r.$initial_pathname=null==s?void 0:s.pathname,I(this._campaignParamsFromUrl(i),(function(e,t){r["$initial_"+j(t)]=e}))}return n&&I(this._searchInfoFromReferrer(n),(function(e,t){r["$initial_"+j(t)]=e})),r},timezone:function(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){return}},properties:function(){if(!S)return{}
var[e,t]=bn.os(S)
return L(M({$os:e,$os_version:t,$browser:bn.browser(S,navigator.vendor),$device:bn.device(S),$device_type:bn.deviceType(S),$timezone:bn.timezone()}),{$current_url:null==y?void 0:y.href,$host:null==y?void 0:y.host,$pathname:null==y?void 0:y.pathname,$raw_user_agent:S.length>1e3?S.substring(0,997)+"...":S,$browser_version:bn.browserVersion(S,navigator.vendor),$browser_language:bn.browserLanguage(),$screen_height:null==h?void 0:h.screen.height,$screen_width:null==h?void 0:h.screen.width,$viewport_height:null==h?void 0:h.innerHeight,$viewport_width:null==h?void 0:h.innerWidth,$lib:"web",$lib_version:x.LIB_VERSION,$insert_id:Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10),$time:Date.now()/1e3})},people_properties:function(){if(!S)return{}
var[e,t]=bn.os(S)
return L(M({$os:e,$os_version:t,$browser:bn.browser(S,navigator.vendor)}),{$browser_version:bn.browserVersion(S,navigator.vendor)})}},wn=["cookie","localstorage","localstorage+cookie","sessionstorage","memory"]
class kn{constructor(e){this.config=e,this.props={},this.campaign_params_saved=!1,this.name=(e=>{var t=""
return e.token&&(t=e.token.replace(/\+/g,"PL").replace(/\//g,"SL").replace(/=/g,"EQ")),e.persistence_name?"ph_"+e.persistence_name:"ph_"+t+"_posthog"})(e),this.storage=this.buildStorage(e),this.load(),e.debug&&ae.info("Persistence loaded",e.persistence,ue({},this.props)),this.update_config(e,e),this.save()}buildStorage(e){-1===wn.indexOf(e.persistence.toLowerCase())&&(ae.critical("Unknown persistence type "+e.persistence+"; falling back to localStorage+cookie"),e.persistence="localStorage+cookie")
var t=e.persistence.toLowerCase()
return"localstorage"===t&&dt.is_supported()?dt:"localstorage+cookie"===t&&ft.is_supported()?ft:"sessionstorage"===t&&vt.is_supported()?vt:"memory"===t?gt:"cookie"===t?ct:ft.is_supported()?ft:ct}properties(){var e={}
return I(this.props,(function(t,n){if(n===Re&&J(t))for(var i=Object.keys(t),r=0;r<i.length;r++)e["$feature/".concat(i[r])]=t[i[r]]
else o=n,a=!1,(ee(s=Ve)?a:_&&s.indexOf===_?-1!=s.indexOf(o):(I(s,(function(e){if(a||(a=e===o))return P})),a))||(e[n]=t)
var s,o,a})),e}load(){if(!this.disabled){var e=this.storage.parse(this.name)
e&&(this.props=L({},e))}}save(){this.disabled||this.storage.set(this.name,this.props,this.expire_days,this.cross_subdomain,this.secure,this.config.debug)}remove(){this.storage.remove(this.name,!1),this.storage.remove(this.name,!0)}clear(){this.remove(),this.props={}}register_once(e,t,n){if(J(e)){X(t)&&(t="None"),this.expire_days=X(n)?this.default_expiry:n
var i=!1
if(I(e,((e,n)=>{this.props.hasOwnProperty(n)&&this.props[n]!==t||(this.props[n]=e,i=!0)})),i)return this.save(),!0}return!1}register(e,t){if(J(e)){this.expire_days=X(t)?this.default_expiry:t
var n=!1
if(I(e,((t,i)=>{e.hasOwnProperty(i)&&this.props[i]!==t&&(this.props[i]=t,n=!0)})),n)return this.save(),!0}return!1}unregister(e){e in this.props&&(delete this.props[e],this.save())}update_campaign_params(){if(!this.campaign_params_saved){var e=bn.campaignParams(this.config.custom_campaign_params)
K(M(e))||this.register(e),this.campaign_params_saved=!0}}update_search_keyword(){this.register(bn.searchInfo())}update_referrer_info(){this.register_once(bn.referrerInfo(),void 0)}set_initial_person_info(){this.props[qe]||this.props[Ue]||this.register_once({[Ge]:bn.initialPersonInfo()},void 0)}get_referrer_info(){return M({$referrer:this.props.$referrer,$referring_domain:this.props.$referring_domain})}get_initial_props(){var e={}
I([Ue,qe],(t=>{var n=this.props[t]
n&&I(n,(function(t,n){e["$initial_"+j(n)]=t}))}))
var t=this.props[Ge]
if(t){var n=bn.initialPersonPropsFromInfo(t)
L(e,n)}return e}safe_merge(e){return I(this.props,(function(t,n){n in e||(e[n]=t)})),e}update_config(e,t){if(this.default_expiry=this.expire_days=e.cookie_expiration,this.set_disabled(e.disable_persistence),this.set_cross_subdomain(e.cross_subdomain_cookie),this.set_secure(e.secure_cookie),e.persistence!==t.persistence){var n=this.buildStorage(e),i=this.props
this.clear(),this.storage=n,this.props=i,this.save()}}set_disabled(e){this.disabled=e,this.disabled?this.remove():this.save()}set_cross_subdomain(e){e!==this.cross_subdomain&&(this.cross_subdomain=e,this.remove(),this.save())}get_cross_subdomain(){return!!this.cross_subdomain}set_secure(e){e!==this.secure&&(this.secure=e,this.remove(),this.save())}set_event_timer(e,t){var n=this.props[ge]||{}
n[e]=t,this.props[ge]=n,this.save()}remove_event_timer(e){var t=(this.props[ge]||{})[e]
return X(t)||(delete this.props[ge][e],this.save()),t}get_property(e){return this.props[e]}set_property(e,t){this.props[e]=t,this.save()}}function Sn(e){var t,n
return(null===(t=JSON.stringify(e,(n=[],function(e,t){if(J(t)){for(;n.length>0&&n[n.length-1]!==this;)n.pop()
return n.includes(t)?"[Circular]":(n.push(t),t)}return t})))||void 0===t?void 0:t.length)||0}function En(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6606028.8
if(e.size>=t&&e.data.length>1){var n=Math.floor(e.data.length/2),i=e.data.slice(0,n),r=e.data.slice(n)
return[En({size:Sn(i),data:i,sessionId:e.sessionId,windowId:e.windowId}),En({size:Sn(r),data:r,sessionId:e.sessionId,windowId:e.windowId})].flatMap((e=>e))}return[e]}var xn=(e=>(e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin",e))(xn||{}),Pn=(e=>(e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration",e[e.Selection=14]="Selection",e[e.AdoptedStyleSheet=15]="AdoptedStyleSheet",e[e.CustomElement=16]="CustomElement",e))(Pn||{})
function Cn(e){var t
return e.id===ze||!(null===(t=e.closest)||void 0===t||!t.call(e,".toolbar-global-fade-container"))}function Tn(e){return!!e&&1===e.nodeType}function $n(e,t){return!!e&&!!e.tagName&&e.tagName.toLowerCase()===t.toLowerCase()}function In(e){return!!e&&3===e.nodeType}function Ln(e){return!!e&&11===e.nodeType}function Rn(e){return e?C(e).split(/\s+/):[]}function On(e){var t=null==h?void 0:h.location.href
return!!(t&&e&&e.some((e=>t.match(e))))}function Fn(e){var t=""
switch(typeof e.className){case"string":t=e.className
break
case"object":t=(e.className&&"baseVal"in e.className?e.className.baseVal:null)||e.getAttribute("class")||""
break
default:t=""}return Rn(t)}function An(e){return te(e)?null:C(e).split(/(\s+)/).filter((e=>Qn(e))).join("").replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)}function Mn(e){var t=""
return Bn(e)&&!Hn(e)&&e.childNodes&&e.childNodes.length&&I(e.childNodes,(function(e){var n
In(e)&&e.textContent&&(t+=null!==(n=An(e.textContent))&&void 0!==n?n:"")})),C(t)}function jn(e){return X(e.target)?e.srcElement||null:null!==(t=e.target)&&void 0!==t&&t.shadowRoot?e.composedPath()[0]||null:e.target||null
var t}var Nn=["a","button","form","input","select","textarea","label"]
function Dn(e){var t=e.parentNode
return!(!t||!Tn(t))&&t}function Bn(e){for(var t=e;t.parentNode&&!$n(t,"body");t=t.parentNode){var n=Fn(t)
if(R(n,"ph-sensitive")||R(n,"ph-no-capture"))return!1}if(R(Fn(e),"ph-include"))return!0
var i=e.type||""
if(Y(i))switch(i.toLowerCase()){case"hidden":case"password":return!1}var r=e.name||e.id||""
return!Y(r)||!/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(r.replace(/[^a-zA-Z0-9]/g,""))}function Hn(e){return!!($n(e,"input")&&!["button","checkbox","submit","reset"].includes(e.type)||$n(e,"select")||$n(e,"textarea")||"true"===e.getAttribute("contenteditable"))}var qn="(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",Un=new RegExp("^(?:".concat(qn,")$")),Gn=new RegExp(qn),Wn="\\d{3}-?\\d{2}-?\\d{4}",zn=new RegExp("^(".concat(Wn,")$")),Vn=new RegExp("(".concat(Wn,")"))
function Qn(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(te(e))return!1
if(Y(e)){if(e=C(e),(t?Un:Gn).test((e||"").replace(/[- ]/g,"")))return!1
if((t?zn:Vn).test(e))return!1}return!0}function Jn(e){var t=Mn(e)
return Qn(t="".concat(t," ").concat(Kn(e)).trim())?t:""}function Kn(e){var t=""
return e&&e.childNodes&&e.childNodes.length&&I(e.childNodes,(function(e){var n
if(e&&"span"===(null===(n=e.tagName)||void 0===n?void 0:n.toLowerCase()))try{var i=Mn(e)
t="".concat(t," ").concat(i).trim(),e.childNodes&&e.childNodes.length&&(t="".concat(t," ").concat(Kn(e)).trim())}catch(e){ae.error(e)}})),t}function Xn(e){return function(e){var t=e.map((e=>{var t,n,i=""
if(e.tag_name&&(i+=e.tag_name),e.attr_class)for(var r of(e.attr_class.sort(),e.attr_class))i+=".".concat(r.replace(/"/g,""))
var s=ue(ue(ue(ue({},e.text?{text:e.text}:{}),{},{"nth-child":null!==(t=e.nth_child)&&void 0!==t?t:0,"nth-of-type":null!==(n=e.nth_of_type)&&void 0!==n?n:0},e.href?{href:e.href}:{}),e.attr_id?{attr_id:e.attr_id}:{}),e.attributes),o={}
return O(s).sort(((e,t)=>{var[n]=e,[i]=t
return n.localeCompare(i)})).forEach((e=>{var[t,n]=e
return o[Yn(t.toString())]=Yn(n.toString())})),(i+=":")+O(s).map((e=>{var[t,n]=e
return"".concat(t,'="').concat(n,'"')})).join("")}))
return t.join(";")}(function(e){return e.map((e=>{var t,n,i={text:null===(t=e.$el_text)||void 0===t?void 0:t.slice(0,400),tag_name:e.tag_name,href:null===(n=e.attr__href)||void 0===n?void 0:n.slice(0,2048),attr_class:Zn(e),attr_id:e.attr__id,nth_child:e.nth_child,nth_of_type:e.nth_of_type,attributes:{}}
return O(e).filter((e=>{var[t]=e
return 0===t.indexOf("attr__")})).forEach((e=>{var[t,n]=e
return i.attributes[t]=n})),i}))}(e))}function Yn(e){return e.replace(/"|\\"/g,'\\"')}function Zn(e){var t=e.attr__class
return t?V(t)?t:Rn(t):void 0}var ei="[SessionRecording]",ti="redacted",ni={initiatorTypes:["audio","beacon","body","css","early-hint","embed","fetch","frame","iframe","icon","image","img","input","link","navigation","object","ping","script","track","video","xmlhttprequest"],maskRequestFn:e=>e,recordHeaders:!1,recordBody:!1,recordInitialRequests:!1,recordPerformance:!1,performanceEntryTypeToObserve:["first-input","navigation","paint","resource"],payloadSizeLimitBytes:1e6,payloadHostDenyList:[".lr-ingest.io",".ingest.sentry.io"]},ii=["authorization","x-forwarded-for","authorization","cookie","set-cookie","x-api-key","x-real-ip","remote-addr","forwarded","proxy-authorization","x-csrf-token","x-csrftoken","x-xsrf-token"],ri=["password","secret","passwd","api_key","apikey","auth","credentials","mysql_pwd","privatekey","private_key","token"],si=["/s/","/e/","/i/"]
function oi(e,t,n,i){if(te(e))return e
var r=(null==t?void 0:t["content-length"])||function(e){return new Blob([e]).size}(e)
return Y(r)&&(r=parseInt(r)),r>n?ei+" ".concat(i," body too large to record (").concat(r," bytes)"):e}function ai(e,t){if(te(e))return e
var n=e
return Qn(n,!1)||(n=ei+" "+t+" body "+ti),I(ri,(e=>{var i,r
null!==(i=n)&&void 0!==i&&i.length&&-1!==(null===(r=n)||void 0===r?void 0:r.indexOf(e))&&(n=ei+" "+t+" body "+ti+" as might contain: "+e)})),n}function li(e,t,n,i){return t>n&&(ae.warn("min cannot be greater than max."),t=n),ne(e)?e>n?(i&&ae.warn(i+" cannot be  greater than max: "+n+". Using max value instead."),n):e<t?(i&&ae.warn(i+" cannot be less than min: "+t+". Using min value instead."),t):e:(i&&ae.warn(i+" must be a number. Defaulting to max value:"+n),n)}class ci{constructor(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
de(this,"bucketSize",100),de(this,"refillRate",10),de(this,"mutationBuckets",{}),de(this,"loggedTracker",{}),de(this,"refillBuckets",(()=>{Object.keys(this.mutationBuckets).forEach((e=>{this.mutationBuckets[e]=this.mutationBuckets[e]+this.refillRate,this.mutationBuckets[e]>=this.bucketSize&&delete this.mutationBuckets[e]}))})),de(this,"getNodeOrRelevantParent",(e=>{var t=this.rrweb.mirror.getNode(e)
if("svg"!==(null==t?void 0:t.nodeName)&&t instanceof Element){var n=t.closest("svg")
if(n)return[this.rrweb.mirror.getId(n),n]}return[e,t]})),de(this,"numberOfChanges",(e=>{var t,n,i,r,s,o,a,l
return(null!==(t=null===(n=e.removes)||void 0===n?void 0:n.length)&&void 0!==t?t:0)+(null!==(i=null===(r=e.attributes)||void 0===r?void 0:r.length)&&void 0!==i?i:0)+(null!==(s=null===(o=e.texts)||void 0===o?void 0:o.length)&&void 0!==s?s:0)+(null!==(a=null===(l=e.adds)||void 0===l?void 0:l.length)&&void 0!==a?a:0)})),de(this,"throttleMutations",(e=>{if(3!==e.type||0!==e.data.source)return e
var t=e.data,n=this.numberOfChanges(t)
t.attributes&&(t.attributes=t.attributes.filter((e=>{var t,n,i,[r,s]=this.getNodeOrRelevantParent(e.id)
return 0!==this.mutationBuckets[r]&&(this.mutationBuckets[r]=null!==(t=this.mutationBuckets[r])&&void 0!==t?t:this.bucketSize,this.mutationBuckets[r]=Math.max(this.mutationBuckets[r]-1,0),0===this.mutationBuckets[r]&&(this.loggedTracker[r]||(this.loggedTracker[r]=!0,null===(n=(i=this.options).onBlockedNode)||void 0===n||n.call(i,r,s))),e)})))
var i=this.numberOfChanges(t)
return 0!==i||n===i?e:void 0})),this.rrweb=e,this.options=i,this.refillRate=li(null!==(t=this.options.refillRate)&&void 0!==t?t:this.refillRate,0,100,"mutation throttling refill rate"),this.bucketSize=li(null!==(n=this.options.bucketSize)&&void 0!==n?n:this.bucketSize,0,100,"mutation throttling bucket size"),setInterval((()=>{this.refillBuckets()}),1e3)}}var ui=Uint8Array,di=Uint16Array,hi=Uint32Array,fi=new ui([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),pi=new ui([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),gi=new ui([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),_i=function(e,t){for(var n=new di(31),i=0;i<31;++i)n[i]=t+=1<<e[i-1]
var r=new hi(n[30])
for(i=1;i<30;++i)for(var s=n[i];s<n[i+1];++s)r[s]=s-n[i]<<5|i
return[n,r]},vi=_i(fi,2),mi=vi[0],yi=vi[1]
mi[28]=258,yi[258]=28
for(var bi=_i(pi,0)[1],wi=new di(32768),ki=0;ki<32768;++ki){var Si=(43690&ki)>>>1|(21845&ki)<<1
Si=(61680&(Si=(52428&Si)>>>2|(13107&Si)<<2))>>>4|(3855&Si)<<4,wi[ki]=((65280&Si)>>>8|(255&Si)<<8)>>>1}var Ei=function(e,t,n){for(var i=e.length,r=0,s=new di(t);r<i;++r)++s[e[r]-1]
var o,a=new di(t)
for(r=0;r<t;++r)a[r]=a[r-1]+s[r-1]<<1
for(o=new di(i),r=0;r<i;++r)o[r]=wi[a[e[r]-1]++]>>>15-e[r]
return o},xi=new ui(288)
for(ki=0;ki<144;++ki)xi[ki]=8
for(ki=144;ki<256;++ki)xi[ki]=9
for(ki=256;ki<280;++ki)xi[ki]=7
for(ki=280;ki<288;++ki)xi[ki]=8
var Pi=new ui(32)
for(ki=0;ki<32;++ki)Pi[ki]=5
var Ci=Ei(xi,9),Ti=Ei(Pi,5),$i=function(e){return(e/8>>0)+(7&e&&1)},Ii=function(e,t,n){(null==n||n>e.length)&&(n=e.length)
var i=new(e instanceof di?di:e instanceof hi?hi:ui)(n-t)
return i.set(e.subarray(t,n)),i},Li=function(e,t,n){n<<=7&t
var i=t/8>>0
e[i]|=n,e[i+1]|=n>>>8},Ri=function(e,t,n){n<<=7&t
var i=t/8>>0
e[i]|=n,e[i+1]|=n>>>8,e[i+2]|=n>>>16},Oi=function(e,t){for(var n=[],i=0;i<e.length;++i)e[i]&&n.push({s:i,f:e[i]})
var r=n.length,s=n.slice()
if(!r)return[new ui(0),0]
if(1==r){var o=new ui(n[0].s+1)
return o[n[0].s]=1,[o,1]}n.sort((function(e,t){return e.f-t.f})),n.push({s:-1,f:25001})
var a=n[0],l=n[1],c=0,u=1,d=2
for(n[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=n[n[c].f<n[d].f?c++:d++],l=n[c!=u&&n[c].f<n[d].f?c++:d++],n[u++]={s:-1,f:a.f+l.f,l:a,r:l}
var h=s[0].s
for(i=1;i<r;++i)s[i].s>h&&(h=s[i].s)
var f=new di(h+1),p=Fi(n[u-1],f,0)
if(p>t){i=0
var g=0,_=p-t,v=1<<_
for(s.sort((function(e,t){return f[t.s]-f[e.s]||e.f-t.f}));i<r;++i){var m=s[i].s
if(!(f[m]>t))break
g+=v-(1<<p-f[m]),f[m]=t}for(g>>>=_;g>0;){var y=s[i].s
f[y]<t?g-=1<<t-f[y]++-1:++i}for(;i>=0&&g;--i){var b=s[i].s
f[b]==t&&(--f[b],++g)}p=t}return[new ui(f),p]},Fi=function(e,t,n){return-1==e.s?Math.max(Fi(e.l,t,n+1),Fi(e.r,t,n+1)):t[e.s]=n},Ai=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new di(++t),i=0,r=e[0],s=1,o=function(e){n[i++]=e},a=1;a<=t;++a)if(e[a]==r&&a!=t)++s
else{if(!r&&s>2){for(;s>138;s-=138)o(32754)
s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304)
s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r)
s=1,r=e[a]}return[n.subarray(0,i),t]},Mi=function(e,t){for(var n=0,i=0;i<t.length;++i)n+=e[i]*t[i]
return n},ji=function(e,t,n){var i=n.length,r=$i(t+2)
e[r]=255&i,e[r+1]=i>>>8,e[r+2]=255^e[r],e[r+3]=255^e[r+1]
for(var s=0;s<i;++s)e[r+s+4]=n[s]
return 8*(r+4+i)},Ni=function(e,t,n,i,r,s,o,a,l,c,u){Li(t,u++,n),++r[256]
for(var d=Oi(r,15),h=d[0],f=d[1],p=Oi(s,15),g=p[0],_=p[1],v=Ai(h),m=v[0],y=v[1],b=Ai(g),w=b[0],k=b[1],S=new di(19),E=0;E<m.length;++E)S[31&m[E]]++
for(E=0;E<w.length;++E)S[31&w[E]]++
for(var x=Oi(S,7),P=x[0],C=x[1],T=19;T>4&&!P[gi[T-1]];--T);var $,I,L,R,O=c+5<<3,F=Mi(r,xi)+Mi(s,Pi)+o,A=Mi(r,h)+Mi(s,g)+o+14+3*T+Mi(S,P)+(2*S[16]+3*S[17]+7*S[18])
if(O<=F&&O<=A)return ji(t,u,e.subarray(l,l+c))
if(Li(t,u,1+(A<F)),u+=2,A<F){$=Ei(h,f),I=h,L=Ei(g,_),R=g
var M=Ei(P,C)
for(Li(t,u,y-257),Li(t,u+5,k-1),Li(t,u+10,T-4),u+=14,E=0;E<T;++E)Li(t,u+3*E,P[gi[E]])
u+=3*T
for(var j=[m,w],N=0;N<2;++N){var D=j[N]
for(E=0;E<D.length;++E){var B=31&D[E]
Li(t,u,M[B]),u+=P[B],B>15&&(Li(t,u,D[E]>>>5&127),u+=D[E]>>>12)}}}else $=Ci,I=xi,L=Ti,R=Pi
for(E=0;E<a;++E)if(i[E]>255){B=i[E]>>>18&31,Ri(t,u,$[B+257]),u+=I[B+257],B>7&&(Li(t,u,i[E]>>>23&31),u+=fi[B])
var H=31&i[E]
Ri(t,u,L[H]),u+=R[H],H>3&&(Ri(t,u,i[E]>>>5&8191),u+=pi[H])}else Ri(t,u,$[i[E]]),u+=I[i[E]]
return Ri(t,u,$[256]),u+I[256]},Di=new hi([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Bi=function(){for(var e=new hi(256),t=0;t<256;++t){for(var n=t,i=9;--i;)n=(1&n&&3988292384)^n>>>1
e[t]=n}return e}(),Hi=function(){var e=4294967295
return{p:function(t){for(var n=e,i=0;i<t.length;++i)n=Bi[255&n^t[i]]^n>>>8
e=n},d:function(){return 4294967295^e}}},qi=function(e,t,n,i,r){return function(e,t,n,i,r,s){var o=e.length,a=new ui(i+o+5*(1+Math.floor(o/7e3))+r),l=a.subarray(i,a.length-r),c=0
if(!t||o<8)for(var u=0;u<=o;u+=65535){var d=u+65535
d<o?c=ji(l,c,e.subarray(u,d)):(l[u]=s,c=ji(l,c,e.subarray(u,o)))}else{for(var h=Di[t-1],f=h>>>13,p=8191&h,g=(1<<n)-1,_=new di(32768),v=new di(g+1),m=Math.ceil(n/3),y=2*m,b=function(t){return(e[t]^e[t+1]<<m^e[t+2]<<y)&g},w=new hi(25e3),k=new di(288),S=new di(32),E=0,x=0,P=(u=0,0),C=0,T=0;u<o;++u){var $=b(u),I=32767&u,L=v[$]
if(_[I]=L,v[$]=I,C<=u){var R=o-u
if((E>7e3||P>24576)&&R>423){c=Ni(e,l,0,w,k,S,x,P,T,u-T,c),P=E=x=0,T=u
for(var O=0;O<286;++O)k[O]=0
for(O=0;O<30;++O)S[O]=0}var F=2,A=0,M=p,j=I-L&32767
if(R>2&&$==b(u-j))for(var N=Math.min(f,R)-1,D=Math.min(32767,u),B=Math.min(258,R);j<=D&&--M&&I!=L;){if(e[u+F]==e[u+F-j]){for(var H=0;H<B&&e[u+H]==e[u+H-j];++H);if(H>F){if(F=H,A=j,H>N)break
var q=Math.min(j,H-2),U=0
for(O=0;O<q;++O){var G=u-j+O+32768&32767,W=G-_[G]+32768&32767
W>U&&(U=W,L=G)}}}j+=(I=L)-(L=_[I])+32768&32767}if(A){w[P++]=268435456|yi[F]<<18|bi[A]
var z=31&yi[F],V=31&bi[A]
x+=fi[z]+pi[V],++k[257+z],++S[V],C=u+F,++E}else w[P++]=e[u],++k[e[u]]}}c=Ni(e,l,s,w,k,S,x,P,T,u-T,c)}return Ii(a,0,i+$i(c)+r)}(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,n,i,!r)},Ui=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},Gi=function(e,t){var n=t.filename
if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:9==t.level?2:0,e[9]=3,0!=t.mtime&&Ui(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8
for(var i=0;i<=n.length;++i)e[i+10]=n.charCodeAt(i)}},Wi=function(e){return 10+(e.filename&&e.filename.length+1||0)}
function zi(e,t){void 0===t&&(t={})
var n=Hi(),i=e.length
n.p(e)
var r=qi(e,t,Wi(t),8),s=r.length
return Gi(r,t),Ui(r,s-8,n.d()),Ui(r,s-4,i),r}function Vi(e,t){var n=e.length
if("undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e)
for(var i=new ui(e.length+(e.length>>>1)),r=0,s=function(e){i[r++]=e},o=0;o<n;++o){if(r+5>i.length){var a=new ui(r+8+(n-o<<1))
a.set(i),i=a}var l=e.charCodeAt(o)
l<128||t?s(l):l<2048?(s(192|l>>>6),s(128|63&l)):l>55295&&l<57344?(s(240|(l=65536+(1047552&l)|1023&e.charCodeAt(++o))>>>18),s(128|l>>>12&63),s(128|l>>>6&63),s(128|63&l)):(s(224|l>>>12),s(128|l>>>6&63),s(128|63&l))}return Ii(i,0,r)}var Qi=[Pn.MouseMove,Pn.MouseInteraction,Pn.Scroll,Pn.ViewportResize,Pn.Input,Pn.TouchMove,Pn.MediaInteraction,Pn.Drag],Ji=e=>({rrwebMethod:e,enqueuedAt:Date.now(),attempt:1}),Ki="[SessionRecording]"
function Xi(e){return function(e,t){for(var n="",i=0;i<e.length;){var r=e[i++]
n+=String.fromCharCode(r)}return n}(zi(Vi(JSON.stringify(e))))}function Yi(e){return e.type===xn.Custom&&"sessionIdle"===e.data.tag}function Zi(e,t){return t.some((t=>"regex"===t.matching&&new RegExp(t.url).test(e)))}class er{get sessionIdleThresholdMilliseconds(){return this.instance.config.session_recording.session_idle_threshold_ms||3e5}get rrwebRecord(){var e,t
return null==E||null===(e=E.__PosthogExtensions__)||void 0===e||null===(t=e.rrweb)||void 0===t?void 0:t.record}get started(){return this._captureStarted}get sessionManager(){if(!this.instance.sessionManager)throw new Error(Ki+" must be started with a valid sessionManager.")
return this.instance.sessionManager}get fullSnapshotIntervalMillis(){var e,t
return"trigger_pending"===this.triggerStatus?6e4:null!==(e=null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.full_snapshot_interval_millis)&&void 0!==e?e:3e5}get isSampled(){var e=this.instance.get_property($e)
return ie(e)?e:null}get sessionDuration(){var e,t,n=null===(e=this.buffer)||void 0===e?void 0:e.data[(null===(t=this.buffer)||void 0===t?void 0:t.data.length)-1],{sessionStartTimestamp:i}=this.sessionManager.checkAndGetSessionAndWindowId(!0)
return n?n.timestamp-i:null}get isRecordingEnabled(){var e=!!this.instance.get_property(ke),t=!this.instance.config.disable_session_recording
return h&&e&&t}get isConsoleLogCaptureEnabled(){var e=!!this.instance.get_property(Se),t=this.instance.config.enable_recording_console_log
return null!=t?t:e}get canvasRecording(){var e,t,n,i,r,s,o=this.instance.config.session_recording.captureCanvas,a=this.instance.get_property(xe),l=null!==(e=null!==(t=null==o?void 0:o.recordCanvas)&&void 0!==t?t:null==a?void 0:a.enabled)&&void 0!==e&&e,c=null!==(n=null!==(i=null==o?void 0:o.canvasFps)&&void 0!==i?i:null==a?void 0:a.fps)&&void 0!==n?n:0,u=null!==(r=null!==(s=null==o?void 0:o.canvasQuality)&&void 0!==s?s:null==a?void 0:a.quality)&&void 0!==r?r:0
return{enabled:l,fps:li(c,0,12,"canvas recording fps"),quality:li(u,0,1,"canvas recording quality")}}get networkPayloadCapture(){var e,t,n=this.instance.get_property(Ee),i={recordHeaders:null===(e=this.instance.config.session_recording)||void 0===e?void 0:e.recordHeaders,recordBody:null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.recordBody},r=(null==i?void 0:i.recordHeaders)||(null==n?void 0:n.recordHeaders),s=(null==i?void 0:i.recordBody)||(null==n?void 0:n.recordBody),o=J(this.instance.config.capture_performance)?this.instance.config.capture_performance.network_timing:this.instance.config.capture_performance,a=!!(ie(o)?o:null==n?void 0:n.capturePerformance)
return r||s||a?{recordHeaders:r,recordBody:s,recordPerformance:a}:void 0}get sampleRate(){var e=this.instance.get_property(Pe)
return ne(e)?e:null}get minimumDuration(){var e=this.instance.get_property(Ce)
return ne(e)?e:null}get status(){return this.receivedDecide?this.isRecordingEnabled?te(this._linkedFlag)||this._linkedFlagSeen?"trigger_pending"===this.triggerStatus?"buffering":this._urlBlocked?"paused":ie(this.isSampled)?this.isSampled?"sampled":"disabled":"active":"buffering":"disabled":"buffering"}get urlTriggerStatus(){var e
return 0===this._urlTriggers.length?"trigger_disabled":(null===(e=this.instance)||void 0===e?void 0:e.get_property(Ie))===this.sessionId?"trigger_activated":"trigger_pending"}get eventTriggerStatus(){var e
return 0===this._eventTriggers.length?"trigger_disabled":(null===(e=this.instance)||void 0===e?void 0:e.get_property(Le))===this.sessionId?"trigger_activated":"trigger_pending"}get triggerStatus(){var e="trigger_activated"===this.eventTriggerStatus||"trigger_activated"===this.urlTriggerStatus,t="trigger_pending"===this.eventTriggerStatus||"trigger_pending"===this.urlTriggerStatus
return e?"trigger_activated":t?"trigger_pending":"trigger_disabled"}constructor(e){if(de(this,"queuedRRWebEvents",[]),de(this,"isIdle",!1),de(this,"_linkedFlagSeen",!1),de(this,"_lastActivityTimestamp",Date.now()),de(this,"_linkedFlag",null),de(this,"_removePageViewCaptureHook",void 0),de(this,"_onSessionIdListener",void 0),de(this,"_persistDecideOnSessionListener",void 0),de(this,"_samplingSessionListener",void 0),de(this,"_urlTriggers",[]),de(this,"_urlBlocklist",[]),de(this,"_urlBlocked",!1),de(this,"_eventTriggers",[]),de(this,"_removeEventTriggerCaptureHook",void 0),de(this,"_forceAllowLocalhostNetworkCapture",!1),de(this,"_onBeforeUnload",(()=>{this._flushBuffer()})),de(this,"_onOffline",(()=>{this._tryAddCustomEvent("browser offline",{})})),de(this,"_onOnline",(()=>{this._tryAddCustomEvent("browser online",{})})),de(this,"_onVisibilityChange",(()=>{if(null!=m&&m.visibilityState){var e="window "+m.visibilityState
this._tryAddCustomEvent(e,{})}})),this.instance=e,this._captureStarted=!1,this._endpoint="/s/",this.stopRrweb=void 0,this.receivedDecide=!1,!this.instance.sessionManager)throw ae.error(Ki+" started without valid sessionManager"),new Error(Ki+" started without valid sessionManager. This is a bug.")
var{sessionId:t,windowId:n}=this.sessionManager.checkAndGetSessionAndWindowId()
this.sessionId=t,this.windowId=n,this.buffer=this.clearBuffer(),this.sessionIdleThresholdMilliseconds>=this.sessionManager.sessionTimeoutMs&&ae.warn(Ki+" session_idle_threshold_ms (".concat(this.sessionIdleThresholdMilliseconds,") is greater than the session timeout (").concat(this.sessionManager.sessionTimeoutMs,"). Session will never be detected as idle"))}startIfEnabledOrStop(e){this.isRecordingEnabled?(this._startCapture(e),null==h||h.addEventListener("beforeunload",this._onBeforeUnload),null==h||h.addEventListener("offline",this._onOffline),null==h||h.addEventListener("online",this._onOnline),null==h||h.addEventListener("visibilitychange",this._onVisibilityChange),this._setupSampling(),this._addEventTriggerListener(),te(this._removePageViewCaptureHook)&&(this._removePageViewCaptureHook=this.instance._addCaptureHook((e=>{try{if("$pageview"===e){var t=h?this._maskUrl(h.location.href):""
if(!t)return
this._tryAddCustomEvent("$pageview",{href:t})}}catch(e){ae.error("Could not add $pageview to rrweb session",e)}}))),this._onSessionIdListener||(this._onSessionIdListener=this.sessionManager.onSessionId(((e,t,n)=>{var i,r,s,o
n&&(this._tryAddCustomEvent("$session_id_change",{sessionId:e,windowId:t,changeReason:n}),null===(i=this.instance)||void 0===i||null===(r=i.persistence)||void 0===r||r.unregister(Le),null===(s=this.instance)||void 0===s||null===(o=s.persistence)||void 0===o||o.unregister(Ie))})))):this.stopRecording()}stopRecording(){var e,t,n,i
this._captureStarted&&this.stopRrweb&&(this.stopRrweb(),this.stopRrweb=void 0,this._captureStarted=!1,null==h||h.removeEventListener("beforeunload",this._onBeforeUnload),null==h||h.removeEventListener("offline",this._onOffline),null==h||h.removeEventListener("online",this._onOnline),null==h||h.removeEventListener("visibilitychange",this._onVisibilityChange),this.clearBuffer(),clearInterval(this._fullSnapshotTimer),null===(e=this._removePageViewCaptureHook)||void 0===e||e.call(this),this._removePageViewCaptureHook=void 0,null===(t=this._removeEventTriggerCaptureHook)||void 0===t||t.call(this),this._removeEventTriggerCaptureHook=void 0,null===(n=this._onSessionIdListener)||void 0===n||n.call(this),this._onSessionIdListener=void 0,null===(i=this._samplingSessionListener)||void 0===i||i.call(this),this._samplingSessionListener=void 0,ae.info(Ki+" stopped"))}makeSamplingDecision(e){var t,n=this.sessionId!==e,i=this.sampleRate
if(ne(i)){var r,s=this.isSampled,o=n||!ie(s)
r=o?Math.random()<i:s,o&&(r?this._reportStarted("sampled"):ae.warn(Ki+" Sample rate (".concat(i,") has determined that this sessionId (").concat(e,") will not be sent to the server.")),this._tryAddCustomEvent("samplingDecisionMade",{sampleRate:i,isSampled:r})),null===(t=this.instance.persistence)||void 0===t||t.register({[$e]:r})}else{var a
null===(a=this.instance.persistence)||void 0===a||a.register({[$e]:null})}}afterDecideResponse(e){var t,n,i,r,s,o
if(this._persistDecideResponse(e),this._linkedFlag=(null===(t=e.sessionRecording)||void 0===t?void 0:t.linkedFlag)||null,null!==(n=e.sessionRecording)&&void 0!==n&&n.endpoint&&(this._endpoint=null===(o=e.sessionRecording)||void 0===o?void 0:o.endpoint),this._setupSampling(),!te(this._linkedFlag)&&!this._linkedFlagSeen){var a=Y(this._linkedFlag)?this._linkedFlag:this._linkedFlag.flag,l=Y(this._linkedFlag)?null:this._linkedFlag.variant
this.instance.onFeatureFlags(((e,t)=>{var n=J(t)&&a in t,i=l?t[a]===l:n
i&&this._reportStarted("linked_flag_matched",{linkedFlag:a,linkedVariant:l}),this._linkedFlagSeen=i}))}null!==(i=e.sessionRecording)&&void 0!==i&&i.urlTriggers&&(this._urlTriggers=e.sessionRecording.urlTriggers),null!==(r=e.sessionRecording)&&void 0!==r&&r.urlBlocklist&&(this._urlBlocklist=e.sessionRecording.urlBlocklist),null!==(s=e.sessionRecording)&&void 0!==s&&s.eventTriggers&&(this._eventTriggers=e.sessionRecording.eventTriggers),this.receivedDecide=!0,this.startIfEnabledOrStop()}_setupSampling(){ne(this.sampleRate)&&te(this._samplingSessionListener)&&(this._samplingSessionListener=this.sessionManager.onSessionId((e=>{this.makeSamplingDecision(e)})))}_persistDecideResponse(e){if(this.instance.persistence){var t,n=this.instance.persistence,i=()=>{var t,i,r,s,o,a,l,c=null===(t=e.sessionRecording)||void 0===t?void 0:t.sampleRate,u=te(c)?null:parseFloat(c),d=null===(i=e.sessionRecording)||void 0===i?void 0:i.minimumDurationMilliseconds
n.register({[ke]:!!e.sessionRecording,[Se]:null===(r=e.sessionRecording)||void 0===r?void 0:r.consoleLogRecordingEnabled,[Ee]:ue({capturePerformance:e.capturePerformance},null===(s=e.sessionRecording)||void 0===s?void 0:s.networkPayloadCapture),[xe]:{enabled:null===(o=e.sessionRecording)||void 0===o?void 0:o.recordCanvas,fps:null===(a=e.sessionRecording)||void 0===a?void 0:a.canvasFps,quality:null===(l=e.sessionRecording)||void 0===l?void 0:l.canvasQuality},[Pe]:u,[Ce]:X(d)?null:d})}
i(),null===(t=this._persistDecideOnSessionListener)||void 0===t||t.call(this),this._persistDecideOnSessionListener=this.sessionManager.onSessionId(i)}}log(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log"
null===(t=this.instance.sessionRecording)||void 0===t||t.onRRwebEmit({type:6,data:{plugin:"rrweb/console@1",payload:{level:n,trace:[],payload:[JSON.stringify(e)]}},timestamp:Date.now()})}_startCapture(e){var t,n
X(Object.assign)||X(Array.from)||(this._captureStarted||this.instance.config.disable_session_recording||this.instance.consent.isOptedOut())||(this._captureStarted=!0,this.sessionManager.checkAndGetSessionAndWindowId(),this.rrwebRecord?this._onScriptLoaded():null===(t=E.__PosthogExtensions__)||void 0===t||null===(n=t.loadExternalDependency)||void 0===n||n.call(t,this.instance,"recorder",(e=>{if(e)return ae.error(Ki+" could not load recorder",e)
this._onScriptLoaded()})),ae.info(Ki+" starting"),"active"===this.status&&this._reportStarted(e||"recording_initialized"))}isInteractiveEvent(e){var t
return 3===e.type&&-1!==Qi.indexOf(null===(t=e.data)||void 0===t?void 0:t.source)}_updateWindowAndSessionIds(e){var t=this.isInteractiveEvent(e)
t||this.isIdle||e.timestamp-this._lastActivityTimestamp>this.sessionIdleThresholdMilliseconds&&(this.isIdle=!0,clearInterval(this._fullSnapshotTimer),this._tryAddCustomEvent("sessionIdle",{eventTimestamp:e.timestamp,lastActivityTimestamp:this._lastActivityTimestamp,threshold:this.sessionIdleThresholdMilliseconds,bufferLength:this.buffer.data.length,bufferSize:this.buffer.size}),this._flushBuffer())
var n=!1
if(t&&(this._lastActivityTimestamp=e.timestamp,this.isIdle&&(this.isIdle=!1,this._tryAddCustomEvent("sessionNoLongerIdle",{reason:"user activity",type:e.type}),n=!0)),!this.isIdle){var{windowId:i,sessionId:r}=this.sessionManager.checkAndGetSessionAndWindowId(!t,e.timestamp),s=this.sessionId!==r,o=this.windowId!==i
this.windowId=i,this.sessionId=r,s||o?(this.stopRecording(),this.startIfEnabledOrStop("session_id_changed")):n&&this._scheduleFullSnapshot()}}_tryRRWebMethod(e){try{return e.rrwebMethod(),!0}catch(t){return this.queuedRRWebEvents.length<10?this.queuedRRWebEvents.push({enqueuedAt:e.enqueuedAt||Date.now(),attempt:e.attempt++,rrwebMethod:e.rrwebMethod}):ae.warn(Ki+" could not emit queued rrweb event.",t,e),!1}}_tryAddCustomEvent(e,t){return this._tryRRWebMethod(Ji((()=>this.rrwebRecord.addCustomEvent(e,t))))}_tryTakeFullSnapshot(){return this._tryRRWebMethod(Ji((()=>this.rrwebRecord.takeFullSnapshot())))}_onScriptLoaded(){var e,t={blockClass:"ph-no-capture",blockSelector:void 0,ignoreClass:"ph-ignore-input",maskTextClass:"ph-mask",maskTextSelector:void 0,maskTextFn:void 0,maskAllInputs:!0,maskInputOptions:{password:!0},maskInputFn:void 0,slimDOMOptions:{},collectFonts:!1,inlineStylesheet:!0,recordCrossOriginIframes:!1},n=this.instance.config.session_recording
for(var[i,r]of Object.entries(n||{}))i in t&&("maskInputOptions"===i?t.maskInputOptions=ue({password:!0},r):t[i]=r)
if(this.canvasRecording&&this.canvasRecording.enabled&&(t.recordCanvas=!0,t.sampling={canvas:this.canvasRecording.fps},t.dataURLOptions={type:"image/webp",quality:this.canvasRecording.quality}),this.rrwebRecord){this.mutationRateLimiter=null!==(e=this.mutationRateLimiter)&&void 0!==e?e:new ci(this.rrwebRecord,{refillRate:this.instance.config.session_recording.__mutationRateLimiterRefillRate,bucketSize:this.instance.config.session_recording.__mutationRateLimiterBucketSize,onBlockedNode:(e,t)=>{var n="Too many mutations on node '".concat(e,"'. Rate limiting. This could be due to SVG animations or something similar")
ae.info(n,{node:t}),this.log(Ki+" "+n,"warn")}})
var s=this._gatherRRWebPlugins()
this.stopRrweb=this.rrwebRecord(ue({emit:e=>{this.onRRwebEmit(e)},plugins:s},t)),this._lastActivityTimestamp=Date.now(),this.isIdle=!1,this._tryAddCustomEvent("$session_options",{sessionRecordingOptions:t,activePlugins:s.map((e=>null==e?void 0:e.name))}),this._tryAddCustomEvent("$posthog_config",{config:this.instance.config})}else ae.error(Ki+"onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")}_scheduleFullSnapshot(){if(this._fullSnapshotTimer&&clearInterval(this._fullSnapshotTimer),!this.isIdle){var e=this.fullSnapshotIntervalMillis
e&&(this._fullSnapshotTimer=setInterval((()=>{this._tryTakeFullSnapshot()}),e))}}_gatherRRWebPlugins(){var e,t,n,i,r=[],s=null===(e=E.__PosthogExtensions__)||void 0===e||null===(t=e.rrwebPlugins)||void 0===t?void 0:t.getRecordConsolePlugin
s&&this.isConsoleLogCaptureEnabled&&r.push(s())
var o=null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.rrwebPlugins)||void 0===i?void 0:i.getRecordNetworkPlugin
return this.networkPayloadCapture&&Q(o)&&(!mt.includes(location.hostname)||this._forceAllowLocalhostNetworkCapture?r.push(o(((e,t)=>{var n,i,r,s={payloadSizeLimitBytes:ni.payloadSizeLimitBytes,performanceEntryTypeToObserve:[...ni.performanceEntryTypeToObserve],payloadHostDenyList:[...t.payloadHostDenyList||[],...ni.payloadHostDenyList]},o=!1!==e.session_recording.recordHeaders&&t.recordHeaders,a=!1!==e.session_recording.recordBody&&t.recordBody,l=!1!==e.capture_performance&&t.recordPerformance,c=(n=s,r=Math.min(1e6,null!==(i=n.payloadSizeLimitBytes)&&void 0!==i?i:1e6),e=>(null!=e&&e.requestBody&&(e.requestBody=oi(e.requestBody,e.requestHeaders,r,"Request")),null!=e&&e.responseBody&&(e.responseBody=oi(e.responseBody,e.responseHeaders,r,"Response")),e)),u=t=>{return c(((e,t)=>{var n,i=yt(e.name),r=0===t.indexOf("http")?null===(n=yt(t))||void 0===n?void 0:n.pathname:t
"/"===r&&(r="")
var s=null==i?void 0:i.pathname.replace(r||"","")
if(!(i&&s&&si.some((e=>0===s.indexOf(e)))))return e})((i=(n=t).requestHeaders,te(i)||I(Object.keys(null!=i?i:{}),(e=>{ii.includes(e.toLowerCase())&&(i[e]=ti)})),n),e.api_host))
var n,i},d=Q(e.session_recording.maskNetworkRequestFn)
return d&&Q(e.session_recording.maskCapturedNetworkRequestFn)&&ae.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."),d&&(e.session_recording.maskCapturedNetworkRequestFn=t=>{var n=e.session_recording.maskNetworkRequestFn({url:t.name})
return ue(ue({},t),{},{name:null==n?void 0:n.url})}),s.maskRequestFn=Q(e.session_recording.maskCapturedNetworkRequestFn)?t=>{var n,i,r,s=u(t)
return s&&null!==(n=null===(i=(r=e.session_recording).maskCapturedNetworkRequestFn)||void 0===i?void 0:i.call(r,s))&&void 0!==n?n:void 0}:e=>function(e){if(!X(e))return e.requestBody=ai(e.requestBody,"Request"),e.responseBody=ai(e.responseBody,"Response"),e}(u(e)),ue(ue(ue({},ni),s),{},{recordHeaders:o,recordBody:a,recordPerformance:l,recordInitialRequests:l})})(this.instance.config,this.networkPayloadCapture))):ae.info(Ki+" NetworkCapture not started because we are on localhost.")),r}onRRwebEmit(e){var t
if(this._processQueuedEvents(),e&&J(e)){if(e.type===xn.Meta){var n=this._maskUrl(e.data.href)
if(this._lastHref=n,!n)return
e.data.href=n}else this._pageViewFallBack()
if(this._checkUrlTriggerConditions(),"paused"!==this.status||function(e){return e.type===xn.Custom&&"recording paused"===e.data.tag}(e)){e.type===xn.FullSnapshot&&this._scheduleFullSnapshot(),e.type===xn.FullSnapshot&&"trigger_pending"===this.triggerStatus&&this.clearBuffer()
var i=this.mutationRateLimiter?this.mutationRateLimiter.throttleMutations(e):e
if(i){var r=function(e){var t=e
if(t&&J(t)&&6===t.type&&J(t.data)&&"rrweb/console@1"===t.data.plugin){t.data.payload.payload.length>10&&(t.data.payload.payload=t.data.payload.payload.slice(0,10),t.data.payload.payload.push("...[truncated]"))
for(var n=[],i=0;i<t.data.payload.payload.length;i++)t.data.payload.payload[i]&&t.data.payload.payload[i].length>2e3?n.push(t.data.payload.payload[i].slice(0,2e3)+"...[truncated]"):n.push(t.data.payload.payload[i])
return t.data.payload.payload=n,e}return e}(i)
if(this._updateWindowAndSessionIds(r),!this.isIdle||Yi(r)){if(Yi(r)){var s=r.data.payload
if(s){var o=s.lastActivityTimestamp,a=s.threshold
r.timestamp=o+a}}var l=null===(t=this.instance.config.session_recording.compress_events)||void 0===t||t?function(e){if(Sn(e)<1024)return e
try{if(e.type===xn.FullSnapshot)return ue(ue({},e),{},{data:Xi(e.data),cv:"2024-10"})
if(e.type===xn.IncrementalSnapshot&&e.data.source===Pn.Mutation)return ue(ue({},e),{},{cv:"2024-10",data:ue(ue({},e.data),{},{texts:Xi(e.data.texts),attributes:Xi(e.data.attributes),removes:Xi(e.data.removes),adds:Xi(e.data.adds)})})
if(e.type===xn.IncrementalSnapshot&&e.data.source===Pn.StyleSheetRule)return ue(ue({},e),{},{cv:"2024-10",data:ue(ue({},e.data),{},{adds:Xi(e.data.adds),removes:Xi(e.data.removes)})})}catch(e){ae.error(Ki+" could not compress event - will use uncompressed event",e)}return e}(r):r,c={$snapshot_bytes:Sn(l),$snapshot_data:l,$session_id:this.sessionId,$window_id:this.windowId}
"disabled"!==this.status?this._captureSnapshotBuffered(c):this.clearBuffer()}}}}}_pageViewFallBack(){if(!this.instance.config.capture_pageview&&h){var e=this._maskUrl(h.location.href)
this._lastHref!==e&&(this._tryAddCustomEvent("$url_changed",{href:e}),this._lastHref=e)}}_processQueuedEvents(){if(this.queuedRRWebEvents.length){var e=[...this.queuedRRWebEvents]
this.queuedRRWebEvents=[],e.forEach((e=>{Date.now()-e.enqueuedAt<=2e3&&this._tryRRWebMethod(e)}))}}_maskUrl(e){var t=this.instance.config.session_recording
if(t.maskNetworkRequestFn){var n,i={url:e}
return null===(n=i=t.maskNetworkRequestFn(i))||void 0===n?void 0:n.url}return e}clearBuffer(){return this.buffer={size:0,data:[],sessionId:this.sessionId,windowId:this.windowId},this.buffer}_flushBuffer(){this.flushBufferTimer&&(clearTimeout(this.flushBufferTimer),this.flushBufferTimer=void 0)
var e=this.minimumDuration,t=this.sessionDuration,n=ne(t)&&t>=0,i=ne(e)&&n&&t<e
return"buffering"===this.status||i?(this.flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3),this.buffer):(this.buffer.data.length>0&&En(this.buffer).forEach((e=>{this._captureSnapshot({$snapshot_bytes:e.size,$snapshot_data:e.data,$session_id:e.sessionId,$window_id:e.windowId})})),this.clearBuffer())}_captureSnapshotBuffered(e){var t,n=2+((null===(t=this.buffer)||void 0===t?void 0:t.data.length)||0)
!this.isIdle&&(this.buffer.size+e.$snapshot_bytes+n>943718.4||this.buffer.sessionId!==this.sessionId)&&(this.buffer=this._flushBuffer()),this.buffer.size+=e.$snapshot_bytes,this.buffer.data.push(e.$snapshot_data),this.flushBufferTimer||this.isIdle||(this.flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3))}_captureSnapshot(e){this.instance.capture("$snapshot",e,{_url:this.instance.requestRouter.endpointFor("api",this._endpoint),_noTruncate:!0,_batchKey:"recordings",skip_client_rate_limiting:!0})}_checkUrlTriggerConditions(){if(void 0!==h&&h.location.href){var e=h.location.href,t="paused"===this.status,n=Zi(e,this._urlBlocklist)
n&&!t?this._pauseRecording():!n&&t&&this._resumeRecording(),Zi(e,this._urlTriggers)&&this._activateTrigger("url")}}_activateTrigger(e){var t,n
"trigger_pending"===this.triggerStatus&&(null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n||n.register({["url"===e?Ie:Le]:this.sessionId}),this._flushBuffer(),this._reportStarted(e+"_trigger_matched"))}_pauseRecording(){var e,t
"paused"!==this.status&&(this._urlBlocked=!0,null==m||null===(e=m.body)||void 0===e||null===(t=e.classList)||void 0===t||t.add("ph-no-capture"),clearInterval(this._fullSnapshotTimer),setTimeout((()=>{this._flushBuffer()}),100),ae.info(Ki+" recording paused due to URL blocker"),this._tryAddCustomEvent("recording paused",{reason:"url blocker"}))}_resumeRecording(){var e,t
"paused"===this.status&&(this._urlBlocked=!1,null==m||null===(e=m.body)||void 0===e||null===(t=e.classList)||void 0===t||t.remove("ph-no-capture"),this._tryTakeFullSnapshot(),this._scheduleFullSnapshot(),this._tryAddCustomEvent("recording resumed",{reason:"left blocked url"}),ae.info(Ki+" recording resumed"))}_addEventTriggerListener(){0!==this._eventTriggers.length&&te(this._removeEventTriggerCaptureHook)&&(this._removeEventTriggerCaptureHook=this.instance.on("eventCaptured",(e=>{try{this._eventTriggers.includes(e.event)&&this._activateTrigger("event")}catch(e){ae.error(Ki+"Could not activate event trigger",e)}})))}overrideLinkedFlag(){this._linkedFlagSeen=!0,this._reportStarted("linked_flag_overridden")}overrideSampling(){var e
null===(e=this.instance.persistence)||void 0===e||e.register({[$e]:!0}),this._reportStarted("sampling_overridden")}overrideTrigger(e){this._activateTrigger(e)}_reportStarted(e,t){this.instance.register_for_session({$session_recording_start_reason:e}),ae.info(Ki+" "+e.replace("_"," "),t),R(["recording_initialized","session_id_changed"],e)||this._tryAddCustomEvent(e,t)}}class tr{constructor(e){this.instance=e,this.instance.decideEndpointWasHit=this.instance._hasBootstrappedFeatureFlags()}call(){var e={token:this.instance.config.token,distinct_id:this.instance.get_distinct_id(),groups:this.instance.getGroups(),person_properties:this.instance.get_property(Fe),group_properties:this.instance.get_property(Ae),disable_flags:this.instance.config.advanced_disable_feature_flags||this.instance.config.advanced_disable_feature_flags_on_first_load||void 0}
this.instance._send_request({method:"POST",url:this.instance.requestRouter.endpointFor("api","/decide/?v=3"),data:e,compression:this.instance.config.disable_compression?void 0:B.Base64,timeout:this.instance.config.feature_flag_request_timeout_ms,callback:e=>this.parseDecideResponse(e.json)})}parseDecideResponse(e){this.instance.featureFlags.setReloadingPaused(!1),this.instance.featureFlags._startReloadTimer()
var t=!e
if(this.instance.config.advanced_disable_feature_flags_on_first_load||this.instance.config.advanced_disable_feature_flags||this.instance.featureFlags.receivedFeatureFlags(null!=e?e:{},t),!t)return m&&m.body?void this.instance._afterDecideResponse(e):(ae.info("document not ready yet, trying again in 500 milliseconds..."),void setTimeout((()=>{this.parseDecideResponse(e)}),500))
ae.error("Failed to fetch feature flags from PostHog.")}}var nr,ir=null!=h&&h.location?kt(h.location.hash,"__posthog")||kt(location.hash,"state"):null,rr="_postHogToolbarParams"
!function(e){e[e.UNINITIALIZED=0]="UNINITIALIZED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(nr||(nr={}))
class sr{constructor(e){this.instance=e}setToolbarState(e){E.ph_toolbar_state=e}getToolbarState(){var e
return null!==(e=E.ph_toolbar_state)&&void 0!==e?e:nr.UNINITIALIZED}maybeLoadToolbar(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
if(!h||!m)return!1
n=null!==(e=n)&&void 0!==e?e:h.location,r=null!==(t=r)&&void 0!==t?t:h.history
try{if(!i){try{h.localStorage.setItem("test","test"),h.localStorage.removeItem("test")}catch(e){return!1}i=null==h?void 0:h.localStorage}var s,o=ir||kt(n.hash,"__posthog")||kt(n.hash,"state"),a=o?F((()=>JSON.parse(atob(decodeURIComponent(o)))))||F((()=>JSON.parse(decodeURIComponent(o)))):null
return a&&"ph_authorize"===a.action?((s=a).source="url",s&&Object.keys(s).length>0&&(a.desiredHash?n.hash=a.desiredHash:r?r.replaceState(r.state,"",n.pathname+n.search):n.hash="")):((s=JSON.parse(i.getItem(rr)||"{}")).source="localstorage",delete s.userIntent),!(!s.token||this.instance.config.token!==s.token||(this.loadToolbar(s),0))}catch(e){return!1}}_callLoadToolbar(e){(E.ph_load_toolbar||E.ph_load_editor)(e,this.instance)}loadToolbar(e){var t=!(null==m||!m.getElementById(ze))
if(!h||t)return!1
var n="custom"===this.instance.requestRouter.region&&this.instance.config.advanced_disable_toolbar_metrics,i=ue(ue({token:this.instance.config.token},e),{},{apiURL:this.instance.requestRouter.endpointFor("ui")},n?{instrument:!1}:{})
if(h.localStorage.setItem(rr,JSON.stringify(ue(ue({},i),{},{source:void 0}))),this.getToolbarState()===nr.LOADED)this._callLoadToolbar(i)
else if(this.getToolbarState()===nr.UNINITIALIZED){var r,s
this.setToolbarState(nr.LOADING),null===(r=E.__PosthogExtensions__)||void 0===r||null===(s=r.loadExternalDependency)||void 0===s||s.call(r,this.instance,"toolbar",(e=>{if(e)return ae.error("Failed to load toolbar",e),void this.setToolbarState(nr.UNINITIALIZED)
this.setToolbarState(nr.LOADED),this._callLoadToolbar(i)})),N(h,"turbolinks:load",(()=>{this.setToolbarState(nr.UNINITIALIZED),this.loadToolbar(i)}))}return!0}_loadEditor(e){return this.loadToolbar(e)}maybeLoadEditor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
return this.maybeLoadToolbar(e,t,n)}}class or{constructor(e){de(this,"isPaused",!0),de(this,"queue",[]),de(this,"flushTimeoutMs",3e3),this.sendRequest=e}enqueue(e){this.queue.push(e),this.flushTimeout||this.setFlushTimeout()}unload(){this.clearFlushTimeout()
var e=this.queue.length>0?this.formatQueue():{},t=Object.values(e),n=[...t.filter((e=>0===e.url.indexOf("/e"))),...t.filter((e=>0!==e.url.indexOf("/e")))]
n.map((e=>{this.sendRequest(ue(ue({},e),{},{transport:"sendBeacon"}))}))}enable(){this.isPaused=!1,this.setFlushTimeout()}setFlushTimeout(){var e=this
this.isPaused||(this.flushTimeout=setTimeout((()=>{if(this.clearFlushTimeout(),this.queue.length>0){var t=this.formatQueue(),n=function(n){var i=t[n],r=(new Date).getTime()
i.data&&V(i.data)&&I(i.data,(e=>{e.offset=Math.abs(e.timestamp-r),delete e.timestamp})),e.sendRequest(i)}
for(var i in t)n(i)}}),this.flushTimeoutMs))}clearFlushTimeout(){clearTimeout(this.flushTimeout),this.flushTimeout=void 0}formatQueue(){var e={}
return I(this.queue,(t=>{var n,i=t,r=(i?i.batchKey:null)||i.url
X(e[r])&&(e[r]=ue(ue({},i),{},{data:[]})),null===(n=e[r].data)||void 0===n||n.push(i.data)})),this.queue=[],e}}var ar=!!w||!!b,lr="text/plain",cr=(e,t)=>{var[n,i]=e.split("?"),r=ue({},t)
null==i||i.split("&").forEach((e=>{var[t]=e.split("=")
delete r[t]}))
var s=function(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",r=[]
return I(e,(function(e,i){X(e)||X(i)||"undefined"===i||(t=encodeURIComponent((e=>e instanceof File)(e)?e.name:e.toString()),n=encodeURIComponent(i),r[r.length]=n+"="+t)})),r.join(i)}(r)
return s=s?(i?i+"&":"")+s:i,"".concat(n,"?").concat(s)},ur=e=>{var{data:t,compression:n}=e
if(t){if(n===B.GZipJS){var i=zi(Vi(JSON.stringify(t)),{mtime:0}),r=new Blob([i],{type:lr})
return{contentType:lr,body:r,estimatedSize:r.size}}if(n===B.Base64){var s=function(e){var t,n,i,r,s,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a=0,l=0,c="",u=[]
if(!e)return e
e=function(e){var t,n,i,r,s=""
for(t=n=0,i=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,r=0;r<i;r++){var o=e.charCodeAt(r),a=null
o<128?n++:a=o>127&&o<2048?String.fromCharCode(o>>6|192,63&o|128):String.fromCharCode(o>>12|224,o>>6&63|128,63&o|128),ee(a)||(n>t&&(s+=e.substring(t,n)),s+=a,t=n=r+1)}return n>t&&(s+=e.substring(t,e.length)),s}(e)
do{t=(s=e.charCodeAt(a++)<<16|e.charCodeAt(a++)<<8|e.charCodeAt(a++))>>18&63,n=s>>12&63,i=s>>6&63,r=63&s,u[l++]=o.charAt(t)+o.charAt(n)+o.charAt(i)+o.charAt(r)}while(a<e.length)
switch(c=u.join(""),e.length%3){case 1:c=c.slice(0,-2)+"=="
break
case 2:c=c.slice(0,-1)+"="}return c}(JSON.stringify(t)),o=(e=>"data="+encodeURIComponent("string"==typeof e?e:JSON.stringify(e)))(s)
return{contentType:"application/x-www-form-urlencoded",body:o,estimatedSize:new Blob([o]).size}}var a=JSON.stringify(t)
return{contentType:"application/json",body:a,estimatedSize:new Blob([a]).size}}},dr=[]
w&&dr.push({transport:"XHR",method:e=>{var t,n=new w
n.open(e.method||"GET",e.url,!0)
var{contentType:i,body:r}=null!==(t=ur(e))&&void 0!==t?t:{}
I(e.headers,(function(e,t){n.setRequestHeader(t,e)})),i&&n.setRequestHeader("Content-Type",i),e.timeout&&(n.timeout=e.timeout),n.withCredentials=!0,n.onreadystatechange=()=>{if(4===n.readyState){var t,i={statusCode:n.status,text:n.responseText}
if(200===n.status)try{i.json=JSON.parse(n.responseText)}catch(e){}null===(t=e.callback)||void 0===t||t.call(e,i)}},n.send(r)}}),b&&dr.push({transport:"fetch",method:e=>{var t,n,{contentType:i,body:r,estimatedSize:s}=null!==(t=ur(e))&&void 0!==t?t:{},o=new Headers
I(e.headers,(function(e,t){o.append(t,e)})),i&&o.append("Content-Type",i)
var a=e.url,l=null
if(k){var c=new k
l={signal:c.signal,timeout:setTimeout((()=>c.abort()),e.timeout)}}b(a,{method:(null==e?void 0:e.method)||"GET",headers:o,keepalive:"POST"===e.method&&(s||0)<52428.8,body:r,signal:null===(n=l)||void 0===n?void 0:n.signal}).then((t=>t.text().then((n=>{var i,r={statusCode:t.status,text:n}
if(200===t.status)try{r.json=JSON.parse(n)}catch(e){ae.error(e)}null===(i=e.callback)||void 0===i||i.call(e,r)})))).catch((t=>{var n
ae.error(t),null===(n=e.callback)||void 0===n||n.call(e,{statusCode:0,text:t})})).finally((()=>l?clearTimeout(l.timeout):null))}}),null!=v&&v.sendBeacon&&dr.push({transport:"sendBeacon",method:e=>{var t=cr(e.url,{beacon:"1"})
try{var n,{contentType:i,body:r}=null!==(n=ur(e))&&void 0!==n?n:{},s="string"==typeof r?new Blob([r],{type:i}):r
v.sendBeacon(t,s)}catch(e){}}})
var hr,fr=["retriesPerformedSoFar"]
class pr{constructor(e){de(this,"isPolling",!1),de(this,"pollIntervalMs",3e3),de(this,"queue",[]),this.instance=e,this.queue=[],this.areWeOnline=!0,!X(h)&&"onLine"in h.navigator&&(this.areWeOnline=h.navigator.onLine,h.addEventListener("online",(()=>{this.areWeOnline=!0,this.flush()})),h.addEventListener("offline",(()=>{this.areWeOnline=!1})))}retriableRequest(e){var{retriesPerformedSoFar:t}=e,n=he(e,fr)
ne(t)&&t>0&&(n.url=cr(n.url,{retry_count:t})),this.instance._send_request(ue(ue({},n),{},{callback:e=>{var i
200!==e.statusCode&&(e.statusCode<400||e.statusCode>=500)&&(null!=t?t:0)<10?this.enqueue(ue({retriesPerformedSoFar:t},n)):null===(i=n.callback)||void 0===i||i.call(n,e)}}))}enqueue(e){var t=e.retriesPerformedSoFar||0
e.retriesPerformedSoFar=t+1
var n=function(e){var t=3e3*Math.pow(2,e),n=t/2,i=Math.min(18e5,t),r=(Math.random()-.5)*(i-n)
return Math.ceil(i+r)}(t),i=Date.now()+n
this.queue.push({retryAt:i,requestOptions:e})
var r="Enqueued failed request for retry in ".concat(n)
navigator.onLine||(r+=" (Browser is offline)"),ae.warn(r),this.isPolling||(this.isPolling=!0,this.poll())}poll(){this.poller&&clearTimeout(this.poller),this.poller=setTimeout((()=>{this.areWeOnline&&this.queue.length>0&&this.flush(),this.poll()}),this.pollIntervalMs)}flush(){var e=Date.now(),t=[],n=this.queue.filter((n=>n.retryAt<e||(t.push(n),!1)))
if(this.queue=t,n.length>0)for(var{requestOptions:i}of n)this.retriableRequest(i)}unload(){for(var{requestOptions:e}of(this.poller&&(clearTimeout(this.poller),this.poller=void 0),this.queue))try{this.instance._send_request(ue(ue({},e),{},{transport:"sendBeacon"}))}catch(e){ae.error(e)}this.queue=[]}}class gr{constructor(e,t,n,i){var r
de(this,"_sessionIdChangedHandlers",[]),this.config=e,this.persistence=t,this._windowId=void 0,this._sessionId=void 0,this._sessionStartTimestamp=null,this._sessionActivityTimestamp=null,this._sessionIdGenerator=n||st,this._windowIdGenerator=i||st
var s=e.persistence_name||e.token,o=e.session_idle_timeout_seconds||1800
if(this._sessionTimeoutMs=1e3*li(o,60,1800,"session_idle_timeout_seconds"),this._window_id_storage_key="ph_"+s+"_window_id",this._primary_window_exists_storage_key="ph_"+s+"_primary_window_exists",this._canUseSessionStorage()){var a=vt.parse(this._window_id_storage_key),l=vt.parse(this._primary_window_exists_storage_key)
a&&!l?this._windowId=a:vt.remove(this._window_id_storage_key),vt.set(this._primary_window_exists_storage_key,!0)}if(null!==(r=this.config.bootstrap)&&void 0!==r&&r.sessionID)try{var c=(e=>{var t=this.config.bootstrap.sessionID.replace(/-/g,"")
if(32!==t.length)throw new Error("Not a valid UUID")
if("7"!==t[12])throw new Error("Not a UUIDv7")
return parseInt(t.substring(0,12),16)})()
this._setSessionId(this.config.bootstrap.sessionID,(new Date).getTime(),c)}catch(e){ae.error("Invalid sessionID in bootstrap",e)}this._listenToReloadWindow()}get sessionTimeoutMs(){return this._sessionTimeoutMs}onSessionId(e){return X(this._sessionIdChangedHandlers)&&(this._sessionIdChangedHandlers=[]),this._sessionIdChangedHandlers.push(e),this._sessionId&&e(this._sessionId,this._windowId),()=>{this._sessionIdChangedHandlers=this._sessionIdChangedHandlers.filter((t=>t!==e))}}_canUseSessionStorage(){return"memory"!==this.config.persistence&&!this.persistence.disabled&&vt.is_supported()}_setWindowId(e){e!==this._windowId&&(this._windowId=e,this._canUseSessionStorage()&&vt.set(this._window_id_storage_key,e))}_getWindowId(){return this._windowId?this._windowId:this._canUseSessionStorage()?vt.parse(this._window_id_storage_key):null}_setSessionId(e,t,n){e===this._sessionId&&t===this._sessionActivityTimestamp&&n===this._sessionStartTimestamp||(this._sessionStartTimestamp=n,this._sessionActivityTimestamp=t,this._sessionId=e,this.persistence.register({[Te]:[t,e,n]}))}_getSessionId(){if(this._sessionId&&this._sessionActivityTimestamp&&this._sessionStartTimestamp)return[this._sessionActivityTimestamp,this._sessionId,this._sessionStartTimestamp]
var e=this.persistence.props[Te]
return V(e)&&2===e.length&&e.push(e[0]),e||[0,null,0]}resetSessionId(){this._setSessionId(null,null,null)}_listenToReloadWindow(){null==h||h.addEventListener("beforeunload",(()=>{this._canUseSessionStorage()&&vt.remove(this._primary_window_exists_storage_key)}))}checkAndGetSessionAndWindowId(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:null)||(new Date).getTime(),[n,i,r]=this._getSessionId(),s=this._getWindowId(),o=ne(r)&&r>0&&Math.abs(t-r)>864e5,a=!1,l=!i,c=!e&&Math.abs(t-n)>this.sessionTimeoutMs
l||c||o?(i=this._sessionIdGenerator(),s=this._windowIdGenerator(),ae.info("[SessionId] new session ID generated",{sessionId:i,windowId:s,changeReason:{noSessionId:l,activityTimeout:c,sessionPastMaximumLength:o}}),r=t,a=!0):s||(s=this._windowIdGenerator(),a=!0)
var u=0===n||!e||o?t:n,d=0===r?(new Date).getTime():r
return this._setWindowId(s),this._setSessionId(i,u,d),a&&this._sessionIdChangedHandlers.forEach((e=>e(i,s,a?{noSessionId:l,activityTimeout:c,sessionPastMaximumLength:o}:void 0))),{sessionId:i,windowId:s,sessionStartTimestamp:d,changeReason:a?{noSessionId:l,activityTimeout:c,sessionPastMaximumLength:o}:void 0,lastActivityTimestamp:n}}}!function(e){e.US="us",e.EU="eu",e.CUSTOM="custom"}(hr||(hr={}))
var _r="i.posthog.com"
class vr{constructor(e){de(this,"_regionCache",{}),this.instance=e}get apiHost(){var e=this.instance.config.api_host.trim().replace(/\/$/,"")
return"https://app.posthog.com"===e?"https://us.i.posthog.com":e}get uiHost(){var e,t=null===(e=this.instance.config.ui_host)||void 0===e?void 0:e.replace(/\/$/,"")
return t||(t=this.apiHost.replace(".".concat(_r),".posthog.com")),"https://app.posthog.com"===t?"https://us.posthog.com":t}get region(){return this._regionCache[this.apiHost]||(/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=hr.US:/https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=hr.EU:this._regionCache[this.apiHost]=hr.CUSTOM),this._regionCache[this.apiHost]}endpointFor(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
if(t&&(t="/"===t[0]?t:"/".concat(t)),"ui"===e)return this.uiHost+t
if(this.region===hr.CUSTOM)return this.apiHost+t
var n=_r+t
switch(e){case"assets":return"https://".concat(this.region,"-assets.").concat(n)
case"api":return"https://".concat(this.region,".").concat(n)}}}var mr,yr,br,wr="posthog-js"
function kr(e){var{organization:t,projectId:n,prefix:i,severityAllowList:r=["error"]}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return s=>{var o,a,l,c,u
if("*"!==r&&!r.includes(s.level)||!e.__loaded)return s
s.tags||(s.tags={})
var d=e.requestRouter.endpointFor("ui","/project/".concat(e.config.token,"/person/").concat(e.get_distinct_id()))
s.tags["PostHog Person URL"]=d,e.sessionRecordingStarted()&&(s.tags["PostHog Recording URL"]=e.get_session_replay_url({withTimestamp:!0}))
var h=(null===(o=s.exception)||void 0===o?void 0:o.values)||[]
h.map((e=>{e.stacktrace&&(e.stacktrace.type="raw")}))
var f={$exception_message:(null===(a=h[0])||void 0===a?void 0:a.value)||s.message,$exception_type:null===(l=h[0])||void 0===l?void 0:l.type,$exception_personURL:d,$exception_level:s.level,$exception_list:h,$sentry_event_id:s.event_id,$sentry_exception:s.exception,$sentry_exception_message:(null===(c=h[0])||void 0===c?void 0:c.value)||s.message,$sentry_exception_type:null===(u=h[0])||void 0===u?void 0:u.type,$sentry_tags:s.tags}
return t&&n&&(f.$sentry_url=(i||"https://sentry.io/organizations/")+t+"/issues/?project="+n+"&query="+s.event_id),e.exceptions.sendExceptionEvent(f),s}}class Sr{constructor(e,t,n,i,r){this.name=wr,this.setupOnce=function(s){s(kr(e,{organization:t,projectId:n,prefix:i,severityAllowList:r}))}}}class Er{constructor(e){this._instance=e}doPageView(e){var t,n=this._previousPageViewProperties(e)
return this._currentPath=null!==(t=null==h?void 0:h.location.pathname)&&void 0!==t?t:"",this._instance.scrollManager.resetContext(),this._prevPageviewTimestamp=e,n}doPageLeave(e){return this._previousPageViewProperties(e)}_previousPageViewProperties(e){var t=this._currentPath,n=this._prevPageviewTimestamp,i=this._instance.scrollManager.getContext()
if(!n)return{}
var r={}
if(i){var{maxScrollHeight:s,lastScrollY:o,maxScrollY:a,maxContentHeight:l,lastContentY:c,maxContentY:u}=i
X(s)||X(o)||X(a)||X(l)||X(c)||X(u)||(s=Math.ceil(s),o=Math.ceil(o),a=Math.ceil(a),l=Math.ceil(l),c=Math.ceil(c),u=Math.ceil(u),r={$prev_pageview_last_scroll:o,$prev_pageview_last_scroll_percentage:s<=1?1:li(o/s,0,1),$prev_pageview_max_scroll:a,$prev_pageview_max_scroll_percentage:s<=1?1:li(a/s,0,1),$prev_pageview_last_content:c,$prev_pageview_last_content_percentage:l<=1?1:li(c/l,0,1),$prev_pageview_max_content:u,$prev_pageview_max_content_percentage:l<=1?1:li(u/l,0,1)})}return t&&(r.$prev_pageview_pathname=t),n&&(r.$prev_pageview_duration=(e.getTime()-n.getTime())/1e3),r}}!function(e){e.Popover="popover",e.API="api",e.Widget="widget"}(mr||(mr={})),function(e){e.Open="open",e.MultipleChoice="multiple_choice",e.SingleChoice="single_choice",e.Rating="rating",e.Link="link"}(yr||(yr={})),function(e){e.NextQuestion="next_question",e.End="end",e.ResponseBased="response_based",e.SpecificQuestion="specific_question"}(br||(br={}))
class xr{constructor(){de(this,"events",{}),this.events={}}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),()=>{this.events[e]=this.events[e].filter((e=>e!==t))}}emit(e,t){for(var n of this.events[e]||[])n(t)
for(var i of this.events["*"]||[])i(e,t)}}class Pr{constructor(e){de(this,"_debugEventEmitter",new xr),de(this,"checkStep",((e,t)=>this.checkStepEvent(e,t)&&this.checkStepUrl(e,t)&&this.checkStepElement(e,t))),de(this,"checkStepEvent",((e,t)=>null==t||!t.event||(null==e?void 0:e.event)===(null==t?void 0:t.event))),this.instance=e,this.actionEvents=new Set,this.actionRegistry=new Set}init(){var e,t
X(null===(e=this.instance)||void 0===e?void 0:e._addCaptureHook)||(null===(t=this.instance)||void 0===t||t._addCaptureHook(((e,t)=>{this.on(e,t)})))}register(e){var t,n
if(!X(null===(t=this.instance)||void 0===t?void 0:t._addCaptureHook)&&(e.forEach((e=>{var t,n
null===(t=this.actionRegistry)||void 0===t||t.add(e),null===(n=e.steps)||void 0===n||n.forEach((e=>{var t
null===(t=this.actionEvents)||void 0===t||t.add((null==e?void 0:e.event)||"")}))})),null!==(n=this.instance)&&void 0!==n&&n.autocapture)){var i,r=new Set
e.forEach((e=>{var t
null===(t=e.steps)||void 0===t||t.forEach((e=>{null!=e&&e.selector&&r.add(null==e?void 0:e.selector)}))})),null===(i=this.instance)||void 0===i||i.autocapture.setElementSelectors(r)}}on(e,t){var n
null!=t&&0!=e.length&&(this.actionEvents.has(e)||this.actionEvents.has(null==t?void 0:t.event))&&this.actionRegistry&&(null===(n=this.actionRegistry)||void 0===n?void 0:n.size)>0&&this.actionRegistry.forEach((e=>{this.checkAction(t,e)&&this._debugEventEmitter.emit("actionCaptured",e.name)}))}_addActionHook(e){this.onAction("actionCaptured",(t=>e(t)))}checkAction(e,t){if(null==(null==t?void 0:t.steps))return!1
for(var n of t.steps)if(this.checkStep(e,n))return!0
return!1}onAction(e,t){return this._debugEventEmitter.on(e,t)}checkStepUrl(e,t){if(null!=t&&t.url){var n,i=null==e||null===(n=e.properties)||void 0===n?void 0:n.$current_url
if(!i||"string"!=typeof i)return!1
if(!Pr.matchString(i,null==t?void 0:t.url,(null==t?void 0:t.url_matching)||"contains"))return!1}return!0}static matchString(e,t,n){switch(n){case"regex":return!!h&&bt(e,t)
case"exact":return t===e
case"contains":var i=Pr.escapeStringRegexp(t).replace(/_/g,".").replace(/%/g,".*")
return bt(e,i)
default:return!1}}static escapeStringRegexp(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}checkStepElement(e,t){if((null!=t&&t.href||null!=t&&t.tag_name||null!=t&&t.text)&&!this.getElementsList(e).some((e=>!(null!=t&&t.href&&!Pr.matchString(e.href||"",null==t?void 0:t.href,(null==t?void 0:t.href_matching)||"exact")||null!=t&&t.tag_name&&e.tag_name!==(null==t?void 0:t.tag_name)||null!=t&&t.text&&!Pr.matchString(e.text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")&&!Pr.matchString(e.$el_text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")))))return!1
if(null!=t&&t.selector){var n,i=null==e||null===(n=e.properties)||void 0===n?void 0:n.$element_selectors
if(!i)return!1
if(!i.includes(null==t?void 0:t.selector))return!1}return!0}getElementsList(e){return null==(null==e?void 0:e.properties.$elements)?[]:null==e?void 0:e.properties.$elements}}class Cr{constructor(e){this.instance=e,this.eventToSurveys=new Map,this.actionToSurveys=new Map}register(e){var t
X(null===(t=this.instance)||void 0===t?void 0:t._addCaptureHook)||(this.setupEventBasedSurveys(e),this.setupActionBasedSurveys(e))}setupActionBasedSurveys(e){var t=e.filter((e=>{var t,n,i,r
return(null===(t=e.conditions)||void 0===t?void 0:t.actions)&&(null===(n=e.conditions)||void 0===n||null===(i=n.actions)||void 0===i||null===(r=i.values)||void 0===r?void 0:r.length)>0}))
0!==t.length&&(null==this.actionMatcher&&(this.actionMatcher=new Pr(this.instance),this.actionMatcher.init(),this.actionMatcher._addActionHook((e=>{this.onAction(e)}))),t.forEach((e=>{var t,n,i,r,s,o,a,l,c,u
e.conditions&&null!==(t=e.conditions)&&void 0!==t&&t.actions&&null!==(n=e.conditions)&&void 0!==n&&null!==(i=n.actions)&&void 0!==i&&i.values&&(null===(r=e.conditions)||void 0===r||null===(s=r.actions)||void 0===s||null===(o=s.values)||void 0===o?void 0:o.length)>0&&(null===(a=this.actionMatcher)||void 0===a||a.register(e.conditions.actions.values),null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c||null===(u=c.values)||void 0===u||u.forEach((t=>{if(t&&t.name){var n=this.actionToSurveys.get(t.name)
n&&n.push(e.id),this.actionToSurveys.set(t.name,n||[e.id])}})))})))}setupEventBasedSurveys(e){var t
0!==e.filter((e=>{var t,n,i,r
return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(i=n.events)||void 0===i||null===(r=i.values)||void 0===r?void 0:r.length)>0})).length&&(null===(t=this.instance)||void 0===t||t._addCaptureHook(((e,t)=>{this.onEvent(e,t)})),e.forEach((e=>{var t,n,i
null===(t=e.conditions)||void 0===t||null===(n=t.events)||void 0===n||null===(i=n.values)||void 0===i||i.forEach((t=>{if(t&&t.name){var n=this.eventToSurveys.get(t.name)
n&&n.push(e.id),this.eventToSurveys.set(t.name,n||[e.id])}}))})))}onEvent(e,t){var n,i,r=(null===(n=this.instance)||void 0===n||null===(i=n.persistence)||void 0===i?void 0:i.props[je])||[]
if(Cr.SURVEY_SHOWN_EVENT_NAME==e&&t&&r.length>0){var s,o=null==t||null===(s=t.properties)||void 0===s?void 0:s.$survey_id
if(o){var a=r.indexOf(o)
a>=0&&(r.splice(a,1),this._updateActivatedSurveys(r))}}else this.eventToSurveys.has(e)&&this._updateActivatedSurveys(r.concat(this.eventToSurveys.get(e)||[]))}onAction(e){var t,n,i=(null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n?void 0:n.props[je])||[]
this.actionToSurveys.has(e)&&this._updateActivatedSurveys(i.concat(this.actionToSurveys.get(e)||[]))}_updateActivatedSurveys(e){var t,n
null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n||n.register({[je]:[...new Set(e)]})}getSurveys(){var e,t
return(null===(e=this.instance)||void 0===e||null===(t=e.persistence)||void 0===t?void 0:t.props[je])||[]}getEventToSurveys(){return this.eventToSurveys}_getActionMatcher(){return this.actionMatcher}}de(Cr,"SURVEY_SHOWN_EVENT_NAME","survey shown")
var Tr,$r,Ir,Lr,Rr,Or,Fr,Ar,Mr={},jr=[],Nr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Dr=Array.isArray
function Br(e,t){for(var n in t)e[n]=t[n]
return e}function Hr(e){var t=e.parentNode
t&&t.removeChild(e)}function qr(e,t,n,i,r){var s={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++Ir:r,__i:-1,__u:0}
return null==r&&null!=$r.vnode&&$r.vnode(s),s}function Ur(e){return e.children}function Gr(e,t){this.props=e,this.context=t}function Wr(e,t){if(null==t)return e.__?Wr(e.__,e.__i+1):null
for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e
return"function"==typeof e.type?Wr(e):null}function zr(e){var t,n
if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e
break}return zr(e)}}function Vr(e){(!e.__d&&(e.__d=!0)&&Lr.push(e)&&!Qr.__r++||Rr!==$r.debounceRendering)&&((Rr=$r.debounceRendering)||Or)(Qr)}function Qr(){var e,t,n,i,r,s,o,a,l
for(Lr.sort(Fr);e=Lr.shift();)e.__d&&(t=Lr.length,i=void 0,s=(r=(n=e).__v).__e,a=[],l=[],(o=n.__P)&&((i=Br({},r)).__v=r.__v+1,$r.vnode&&$r.vnode(i),ns(o,i,r,n.__n,void 0!==o.ownerSVGElement,32&r.__u?[s]:null,a,null==s?Wr(r):s,!!(32&r.__u),l),i.__.__k[i.__i]=i,is(a,i,l),i.__e!=s&&zr(i)),Lr.length>t&&Lr.sort(Fr))
Qr.__r=0}function Jr(e,t,n,i,r,s,o,a,l,c,u){var d,h,f,p,g,_=i&&i.__k||jr,v=t.length
for(n.__d=l,function(e,t,n){var i,r,s,o,a,l=t.length,c=n.length,u=c,d=0
for(e.__k=[],i=0;i<l;i++)null!=(r=e.__k[i]=null==(r=t[i])||"boolean"==typeof r||"function"==typeof r?null:"string"==typeof r||"number"==typeof r||"bigint"==typeof r||r.constructor==String?qr(null,r,null,null,r):Dr(r)?qr(Ur,{children:r},null,null,null):void 0===r.constructor&&r.__b>0?qr(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)?(r.__=e,r.__b=e.__b+1,a=Xr(r,n,o=i+d,u),r.__i=a,s=null,-1!==a&&(u--,(s=n[a])&&(s.__u|=131072)),null==s||null===s.__v?(-1==a&&d--,"function"!=typeof r.type&&(r.__u|=65536)):a!==o&&(a===o+1?d++:a>o?u>l-o?d+=a-o:d--:d=a<o&&a==o-1?a-o:0,a!==i+d&&(r.__u|=65536))):(s=n[i])&&null==s.key&&s.__e&&(s.__e==e.__d&&(e.__d=Wr(s)),ss(s,s,!1),n[i]=null,u--)
if(u)for(i=0;i<c;i++)null!=(s=n[i])&&0==(131072&s.__u)&&(s.__e==e.__d&&(e.__d=Wr(s)),ss(s,s))}(n,t,_),l=n.__d,d=0;d<v;d++)null!=(f=n.__k[d])&&"boolean"!=typeof f&&"function"!=typeof f&&(h=-1===f.__i?Mr:_[f.__i]||Mr,f.__i=d,ns(e,f,h,r,s,o,a,l,c,u),p=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&rs(h.ref,null,f),u.push(f.ref,f.__c||p,f)),null==g&&null!=p&&(g=p),65536&f.__u||h.__k===f.__k?l=Kr(f,l,e):"function"==typeof f.type&&void 0!==f.__d?l=f.__d:p&&(l=p.nextSibling),f.__d=void 0,f.__u&=-196609)
n.__d=l,n.__e=g}function Kr(e,t,n){var i,r
if("function"==typeof e.type){for(i=e.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=e,t=Kr(i[r],t,n))
return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function Xr(e,t,n,i){var r=e.key,s=e.type,o=n-1,a=n+1,l=t[n]
if(null===l||l&&r==l.key&&s===l.type)return n
if(i>(null!=l&&0==(131072&l.__u)?1:0))for(;o>=0||a<t.length;){if(o>=0){if((l=t[o])&&0==(131072&l.__u)&&r==l.key&&s===l.type)return o
o--}if(a<t.length){if((l=t[a])&&0==(131072&l.__u)&&r==l.key&&s===l.type)return a
a++}}return-1}function Yr(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||Nr.test(t)?n:n+"px"}function Zr(e,t,n,i,r){var s
e:if("style"===t)if("string"==typeof n)e.style.cssText=n
else{if("string"==typeof i&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||Yr(e.style,t,"")
if(n)for(t in n)i&&n[t]===i[t]||Yr(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])s=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=n,n?i?n.u=i.u:(n.u=Date.now(),e.addEventListener(t,s?ts:es,s)):e.removeEventListener(t,s?ts:es,s)
else{if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s")
else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&"role"!==t&&t in e)try{e[t]=null==n?"":n
break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function es(e){var t=this.l[e.type+!1]
if(e.t){if(e.t<=t.u)return}else e.t=Date.now()
return t($r.event?$r.event(e):e)}function ts(e){return this.l[e.type+!0]($r.event?$r.event(e):e)}function ns(e,t,n,i,r,s,o,a,l,c){var u,d,h,f,p,g,_,v,m,y,b,w,k,S,E,x=t.type
if(void 0!==t.constructor)return null
128&n.__u&&(l=!!(32&n.__u),s=[a=t.__e=n.__e]),(u=$r.__b)&&u(t)
e:if("function"==typeof x)try{if(v=t.props,m=(u=x.contextType)&&i[u.__c],y=u?m?m.props.value:u.__:i,n.__c?_=(d=t.__c=n.__c).__=d.__E:("prototype"in x&&x.prototype.render?t.__c=d=new x(v,y):(t.__c=d=new Gr(v,y),d.constructor=x,d.render=os),m&&m.sub(d),d.props=v,d.state||(d.state={}),d.context=y,d.__n=i,h=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=x.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=Br({},d.__s)),Br(d.__s,x.getDerivedStateFromProps(v,d.__s))),f=d.props,p=d.state,d.__v=t,h)null==x.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount)
else{if(null==x.getDerivedStateFromProps&&v!==f&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(v,y),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(v,d.__s,y)||t.__v===n.__v)){for(t.__v!==n.__v&&(d.props=v,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),b=0;b<d._sb.length;b++)d.__h.push(d._sb[b])
d._sb=[],d.__h.length&&o.push(d)
break e}null!=d.componentWillUpdate&&d.componentWillUpdate(v,d.__s,y),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(f,p,g)}))}if(d.context=y,d.props=v,d.__P=e,d.__e=!1,w=$r.__r,k=0,"prototype"in x&&x.prototype.render){for(d.state=d.__s,d.__d=!1,w&&w(t),u=d.render(d.props,d.state,d.context),S=0;S<d._sb.length;S++)d.__h.push(d._sb[S])
d._sb=[]}else do{d.__d=!1,w&&w(t),u=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++k<25)
d.state=d.__s,null!=d.getChildContext&&(i=Br(Br({},i),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(g=d.getSnapshotBeforeUpdate(f,p)),Jr(e,Dr(E=null!=u&&u.type===Ur&&null==u.key?u.props.children:u)?E:[E],t,n,i,r,s,o,a,l,c),d.base=t.__e,t.__u&=-161,d.__h.length&&o.push(d),_&&(d.__E=d.__=null)}catch(e){t.__v=null,l||null!=s?(t.__e=a,t.__u|=l?160:32,s[s.indexOf(a)]=null):(t.__e=n.__e,t.__k=n.__k),$r.__e(e,t,n)}else null==s&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=function(e,t,n,i,r,s,o,a,l){var c,u,d,h,f,p,g,_=n.props,v=t.props,m=t.type
if("svg"===m&&(r=!0),null!=s)for(c=0;c<s.length;c++)if((f=s[c])&&"setAttribute"in f==!!m&&(m?f.localName===m:3===f.nodeType)){e=f,s[c]=null
break}if(null==e){if(null===m)return document.createTextNode(v)
e=r?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,v.is&&v),s=null,a=!1}if(null===m)_===v||a&&e.data===v||(e.data=v)
else{if(s=s&&Tr.call(e.childNodes),_=n.props||Mr,!a&&null!=s)for(_={},c=0;c<e.attributes.length;c++)_[(f=e.attributes[c]).name]=f.value
for(c in _)f=_[c],"children"==c||("dangerouslySetInnerHTML"==c?d=f:"key"===c||c in v||Zr(e,c,null,f,r))
for(c in v)f=v[c],"children"==c?h=f:"dangerouslySetInnerHTML"==c?u=f:"value"==c?p=f:"checked"==c?g=f:"key"===c||a&&"function"!=typeof f||_[c]===f||Zr(e,c,f,_[c],r)
if(u)a||d&&(u.__html===d.__html||u.__html===e.innerHTML)||(e.innerHTML=u.__html),t.__k=[]
else if(d&&(e.innerHTML=""),Jr(e,Dr(h)?h:[h],t,n,i,r&&"foreignObject"!==m,s,o,s?s[0]:n.__k&&Wr(n,0),a,l),null!=s)for(c=s.length;c--;)null!=s[c]&&Hr(s[c])
a||(c="value",void 0!==p&&(p!==e[c]||"progress"===m&&!p||"option"===m&&p!==_[c])&&Zr(e,c,p,_[c],!1),c="checked",void 0!==g&&g!==e[c]&&Zr(e,c,g,_[c],!1))}return e}(n.__e,t,n,i,r,s,o,l,c);(u=$r.diffed)&&u(t)}function is(e,t,n){t.__d=void 0
for(var i=0;i<n.length;i++)rs(n[i],n[++i],n[++i])
$r.__c&&$r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){$r.__e(e,t.__v)}}))}function rs(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){$r.__e(e,n)}}function ss(e,t,n){var i,r
if($r.unmount&&$r.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||rs(i,null,t)),null!=(i=e.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){$r.__e(e,t)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(r=0;r<i.length;r++)i[r]&&ss(i[r],t,n||"function"!=typeof e.type)
n||null==e.__e||Hr(e.__e),e.__=e.__e=e.__d=void 0}function os(e,t,n){return this.constructor(e,n)}Tr=jr.slice,$r={__e:function(e,t,n,i){for(var r,s,o;t=t.__;)if((r=t.__c)&&!r.__)try{if((s=r.constructor)&&null!=s.getDerivedStateFromError&&(r.setState(s.getDerivedStateFromError(e)),o=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,i||{}),o=r.__d),o)return r.__E=r}catch(t){e=t}throw e}},Ir=0,Gr.prototype.setState=function(e,t){var n
n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=Br({},this.state),"function"==typeof e&&(e=e(Br({},n),this.props)),e&&Br(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),Vr(this))},Gr.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Vr(this))},Gr.prototype.render=Ur,Lr=[],Or="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Fr=function(e,t){return e.__v.__b-t.__v.__b},Qr.__r=0,Ar=0,function(e,t){var n={__c:t="__cC"+Ar++,__:{isPreviewMode:!1,previewPageIndex:0,handleCloseSurveyPopup:()=>{},isPopup:!0},Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,i
return this.getChildContext||(n=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some((function(e){e.__e=!0,Vr(e)}))},this.sub=function(e){n.push(e)
var t=e.componentWillUnmount
e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}}
n.Provider.__=n.Consumer.contextType=n}()
var as="[Surveys]",ls={icontains:e=>!!h&&h.location.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:e=>!!h&&-1===h.location.href.toLowerCase().indexOf(e.toLowerCase()),regex:e=>!!h&&bt(h.location.href,e),not_regex:e=>!!h&&!bt(h.location.href,e),exact:e=>(null==h?void 0:h.location.href)===e,is_not:e=>(null==h?void 0:h.location.href)!==e}
class cs{constructor(e){this.instance=e,this._surveyEventReceiver=null}afterDecideResponse(e){this._decideServerResponse=!!e.surveys,this.loadIfEnabled()}reset(){localStorage.removeItem("lastSeenSurveyDate")
var e=(()=>{for(var e=[],t=0;t<localStorage.length;t++){var n=localStorage.key(t)
null!=n&&n.startsWith("seenSurvey_")&&e.push(n)}return e})()
e.forEach((e=>localStorage.removeItem(e)))}loadIfEnabled(){var e,t,n,i=null==E||null===(e=E.__PosthogExtensions__)||void 0===e?void 0:e.generateSurveys
this.instance.config.disable_surveys||!this._decideServerResponse||i||(null==this._surveyEventReceiver&&(this._surveyEventReceiver=new Cr(this.instance)),null===(t=E.__PosthogExtensions__)||void 0===t||null===(n=t.loadExternalDependency)||void 0===n||n.call(t,this.instance,"surveys",(e=>{var t,n
if(e)return ae.error(as,"Could not load surveys script",e)
this._surveyManager=null===(t=E.__PosthogExtensions__)||void 0===t||null===(n=t.generateSurveys)||void 0===n?void 0:n.call(t,this.instance)})))}getSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(this.instance.config.disable_surveys)return e([])
null==this._surveyEventReceiver&&(this._surveyEventReceiver=new Cr(this.instance))
var n=this.instance.get_property(Me)
if(n&&!t)return e(n)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api","/api/surveys/?token=".concat(this.instance.config.token)),method:"GET",transport:"XHR",callback:t=>{var n
if(200!==t.statusCode||!t.json)return e([])
var i,r=t.json.surveys||[],s=r.filter((e=>{var t,n,i,r,s,o,a,l,c,u,d,h
return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(i=n.events)||void 0===i?void 0:i.values)&&(null===(r=e.conditions)||void 0===r||null===(s=r.events)||void 0===s||null===(o=s.values)||void 0===o?void 0:o.length)>0||(null===(a=e.conditions)||void 0===a?void 0:a.actions)&&(null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c?void 0:c.values)&&(null===(u=e.conditions)||void 0===u||null===(d=u.actions)||void 0===d||null===(h=d.values)||void 0===h?void 0:h.length)>0}))
return s.length>0&&(null===(i=this._surveyEventReceiver)||void 0===i||i.register(s)),null===(n=this.instance.persistence)||void 0===n||n.register({[Me]:r}),e(r)}})}getActiveMatchingSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.getSurveys((t=>{var n,i=t.filter((e=>!(!e.start_date||e.end_date))).filter((e=>{var t,n,i,r
if(!e.conditions)return!0
var s=null===(t=e.conditions)||void 0===t||!t.url||ls[null!==(n=null===(i=e.conditions)||void 0===i?void 0:i.urlMatchType)&&void 0!==n?n:"icontains"](e.conditions.url),o=null===(r=e.conditions)||void 0===r||!r.selector||(null==m?void 0:m.querySelector(e.conditions.selector))
return s&&o})),r=null===(n=this._surveyEventReceiver)||void 0===n?void 0:n.getSurveys(),s=i.filter((e=>{var t,n,i,s,o,a,l,c,u,d,h
if(!(e.linked_flag_key||e.targeting_flag_key||e.internal_targeting_flag_key||null!==(t=e.feature_flag_keys)&&void 0!==t&&t.length))return!0
var f=!e.linked_flag_key||this.instance.featureFlags.isFeatureEnabled(e.linked_flag_key),p=!e.targeting_flag_key||this.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key),g=(null===(n=e.conditions)||void 0===n?void 0:n.events)&&(null===(i=e.conditions)||void 0===i||null===(s=i.events)||void 0===s?void 0:s.values)&&(null===(o=e.conditions)||void 0===o||null===(a=o.events)||void 0===a?void 0:a.values.length)>0,_=(null===(l=e.conditions)||void 0===l?void 0:l.actions)&&(null===(c=e.conditions)||void 0===c||null===(u=c.actions)||void 0===u?void 0:u.values)&&(null===(d=e.conditions)||void 0===d||null===(h=d.actions)||void 0===h?void 0:h.values.length)>0,v=!g&&!_||(null==r?void 0:r.includes(e.id)),m=this._canActivateRepeatedly(e),y=!(e.internal_targeting_flag_key&&!m)||this.instance.featureFlags.isFeatureEnabled(e.internal_targeting_flag_key),b=this.checkFlags(e)
return f&&p&&y&&v&&b}))
return e(s)}),t)}checkFlags(e){var t
return null===(t=e.feature_flag_keys)||void 0===t||!t.length||e.feature_flag_keys.every((e=>{var{key:t,value:n}=e
return!t||!n||this.instance.featureFlags.isFeatureEnabled(n)}))}getNextSurveyStep(e,t,n){var i,r=e.questions[t],s=t+1
if(null===(i=r.branching)||void 0===i||!i.type)return t===e.questions.length-1?br.End:s
if(r.branching.type===br.End)return br.End
if(r.branching.type===br.SpecificQuestion){if(Number.isInteger(r.branching.index))return r.branching.index}else if(r.branching.type===br.ResponseBased){if(r.type===yr.SingleChoice){var o,a,l=r.choices.indexOf("".concat(n))
if(null!==(o=r.branching)&&void 0!==o&&null!==(a=o.responseValues)&&void 0!==a&&a.hasOwnProperty(l)){var c=r.branching.responseValues[l]
return Number.isInteger(c)?c:c===br.End?br.End:s}}else if(r.type===yr.Rating){var u,d
if("number"!=typeof n||!Number.isInteger(n))throw new Error("The response type must be an integer")
var h=function(e,t){if(3===t){if(e<1||e>3)throw new Error("The response must be in range 1-3")
return 1===e?"negative":2===e?"neutral":"positive"}if(5===t){if(e<1||e>5)throw new Error("The response must be in range 1-5")
return e<=2?"negative":3===e?"neutral":"positive"}if(7===t){if(e<1||e>7)throw new Error("The response must be in range 1-7")
return e<=3?"negative":4===e?"neutral":"positive"}if(10===t){if(e<0||e>10)throw new Error("The response must be in range 0-10")
return e<=6?"detractors":e<=8?"passives":"promoters"}throw new Error("The scale must be one of: 3, 5, 7, 10")}(n,r.scale)
if(null!==(u=r.branching)&&void 0!==u&&null!==(d=u.responseValues)&&void 0!==d&&d.hasOwnProperty(h)){var f=r.branching.responseValues[h]
return Number.isInteger(f)?f:f===br.End?br.End:s}}return s}return ae.warn(as,"Falling back to next question index due to unexpected branching type"),s}_canActivateRepeatedly(e){var t
return te(null===(t=E.__PosthogExtensions__)||void 0===t?void 0:t.canActivateRepeatedly)?(ae.warn(as,"canActivateRepeatedly is not defined, must init before calling"),!1):E.__PosthogExtensions__.canActivateRepeatedly(e)}canRenderSurvey(e){te(this._surveyManager)?ae.warn(as,"canActivateRepeatedly is not defined, must init before calling"):this.getSurveys((t=>{var n=t.filter((t=>t.id===e))[0]
this._surveyManager.canRenderSurvey(n)}))}renderSurvey(e,t){te(this._surveyManager)?ae.warn(as,"canActivateRepeatedly is not defined, must init before calling"):this.getSurveys((n=>{var i=n.filter((t=>t.id===e))[0]
this._surveyManager.renderSurvey(i,null==m?void 0:m.querySelector(t))}))}}class us{constructor(e){var t,n
de(this,"serverLimits",{}),de(this,"lastEventRateLimited",!1),de(this,"checkForLimiting",(e=>{var t=e.text
if(t&&t.length)try{(JSON.parse(t).quota_limited||[]).forEach((e=>{ae.info("[RateLimiter] ".concat(e||"events"," is quota limited.")),this.serverLimits[e]=(new Date).getTime()+6e4}))}catch(e){return void ae.warn('[RateLimiter] could not rate limit - continuing. Error: "'.concat(null==e?void 0:e.message,'"'),{text:t})}})),this.instance=e,this.captureEventsPerSecond=(null===(t=e.config.rate_limiting)||void 0===t?void 0:t.events_per_second)||10,this.captureEventsBurstLimit=Math.max((null===(n=e.config.rate_limiting)||void 0===n?void 0:n.events_burst_limit)||10*this.captureEventsPerSecond,this.captureEventsPerSecond),this.lastEventRateLimited=this.clientRateLimitContext(!0).isRateLimited}clientRateLimitContext(){var e,t,n,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=(new Date).getTime(),s=null!==(e=null===(t=this.instance.persistence)||void 0===t?void 0:t.get_property(He))&&void 0!==e?e:{tokens:this.captureEventsBurstLimit,last:r}
s.tokens+=(r-s.last)/1e3*this.captureEventsPerSecond,s.last=r,s.tokens>this.captureEventsBurstLimit&&(s.tokens=this.captureEventsBurstLimit)
var o=s.tokens<1
return o||i||(s.tokens=Math.max(0,s.tokens-1)),!o||this.lastEventRateLimited||i||this.instance.capture("$$client_ingestion_warning",{$$client_ingestion_warning_message:"posthog-js client rate limited. Config is set to ".concat(this.captureEventsPerSecond," events per second and ").concat(this.captureEventsBurstLimit," events burst limit.")},{skip_client_rate_limiting:!0}),this.lastEventRateLimited=o,null===(n=this.instance.persistence)||void 0===n||n.set_property(He,s),{isRateLimited:o,remainingTokens:s.tokens}}isServerRateLimited(e){var t=this.serverLimits[e||"events"]||!1
return!1!==t&&(new Date).getTime()<t}}var ds=()=>ue({initialPathName:(null==y?void 0:y.pathname)||"",referringDomain:bn.referringDomain()},bn.campaignParams())
class hs{constructor(e,t,n){de(this,"_onSessionIdCallback",(e=>{var t=this._getStoredProps()
if(!t||t.sessionId!==e){var n={sessionId:e,props:this._sessionSourceParamGenerator()}
this._persistence.register({[Be]:n})}})),this._sessionIdManager=e,this._persistence=t,this._sessionSourceParamGenerator=n||ds,this._sessionIdManager.onSessionId(this._onSessionIdCallback)}_getStoredProps(){return this._persistence.props[Be]}getSessionProps(){var e,t=null===(e=this._getStoredProps())||void 0===e?void 0:e.props
return t?{$client_session_initial_referring_host:t.referringDomain,$client_session_initial_pathname:t.initialPathName,$client_session_initial_utm_source:t.utm_source,$client_session_initial_utm_campaign:t.utm_campaign,$client_session_initial_utm_medium:t.utm_medium,$client_session_initial_utm_content:t.utm_content,$client_session_initial_utm_term:t.utm_term}:{}}}var fs=["ahrefsbot","ahrefssiteaudit","applebot","baiduspider","bingbot","bingpreview","bot.htm","bot.php","crawler","deepscan","duckduckbot","facebookexternal","facebookcatalog","gptbot","http://yandex.com/bots","hubspot","ia_archiver","linkedinbot","mj12bot","msnbot","nessus","petalbot","pinterest","prerender","rogerbot","screaming frog","semrushbot","sitebulb","slurp","turnitin","twitterbot","vercelbot","yahoo! slurp","yandexbot","headlesschrome","cypress","Google-HotelAdsVerifier","adsbot-google","apis-google","duplexweb-google","feedfetcher-google","google favicon","google web preview","google-read-aloud","googlebot","googleweblight","mediapartners-google","storebot-google","Bytespider;"],ps=function(e,t){if(!e)return!1
var n=e.toLowerCase()
return fs.concat(t||[]).some((e=>{var t=e.toLowerCase()
return-1!==n.indexOf(t)}))},gs=function(e,t){if(!e)return!1
var n=e.userAgent
if(n&&ps(n,t))return!0
try{var i=null==e?void 0:e.userAgentData
if(null!=i&&i.brands&&i.brands.some((e=>ps(null==e?void 0:e.brand,t))))return!0}catch(e){}return!!e.webdriver}
class _s{constructor(){this.clicks=[]}isRageClick(e,t,n){var i=this.clicks[this.clicks.length-1]
if(i&&Math.abs(e-i.x)+Math.abs(t-i.y)<30&&n-i.timestamp<1e3){if(this.clicks.push({x:e,y:t,timestamp:n}),3===this.clicks.length)return!0}else this.clicks=[{x:e,y:t,timestamp:n}]
return!1}}var vs,ms="[Dead Clicks]",ys=()=>!0,bs=e=>{var t,n=!(null===(t=e.instance.persistence)||void 0===t||!t.get_property(be)),i=e.instance.config.capture_dead_clicks
return ie(i)?i:n}
class ws{get lazyLoadedDeadClicksAutocapture(){return this._lazyLoadedDeadClicksAutocapture}constructor(e,t,n){this.instance=e,this.isEnabled=t,this.onCapture=n,this.startIfEnabled()}afterDecideResponse(e){this.instance.persistence&&this.instance.persistence.register({[be]:null==e?void 0:e.captureDeadClicks}),this.startIfEnabled()}startIfEnabled(){this.isEnabled(this)&&this.loadScript((()=>{this.start()}))}loadScript(e){var t,n,i
null!==(t=E.__PosthogExtensions__)&&void 0!==t&&t.initDeadClicksAutocapture&&e(),null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"dead-clicks-autocapture",(t=>{t?ae.error(ms+" failed to load script",t):e()}))}start(){var e
if(m){if(!this._lazyLoadedDeadClicksAutocapture&&null!==(e=E.__PosthogExtensions__)&&void 0!==e&&e.initDeadClicksAutocapture){var t=J(this.instance.config.capture_dead_clicks)?this.instance.config.capture_dead_clicks:{}
t.__onCapture=this.onCapture,this._lazyLoadedDeadClicksAutocapture=E.__PosthogExtensions__.initDeadClicksAutocapture(this.instance,t),this._lazyLoadedDeadClicksAutocapture.start(m),ae.info("".concat(ms," starting..."))}}else ae.error(ms+" `document` not found. Cannot start.")}stop(){this._lazyLoadedDeadClicksAutocapture&&(this._lazyLoadedDeadClicksAutocapture.stop(),this._lazyLoadedDeadClicksAutocapture=void 0,ae.info("".concat(ms," stopping...")))}}class ks{constructor(e){var t
de(this,"rageclicks",new _s),de(this,"_enabledServerSide",!1),de(this,"_initialized",!1),de(this,"_flushInterval",null),this.instance=e,this._enabledServerSide=!(null===(t=this.instance.persistence)||void 0===t||!t.props[ve]),null==h||h.addEventListener("beforeunload",(()=>{this.flush()}))}get flushIntervalMilliseconds(){var e=5e3
return J(this.instance.config.capture_heatmaps)&&this.instance.config.capture_heatmaps.flush_interval_milliseconds&&(e=this.instance.config.capture_heatmaps.flush_interval_milliseconds),e}get isEnabled(){return X(this.instance.config.capture_heatmaps)?X(this.instance.config.enable_heatmaps)?this._enabledServerSide:this.instance.config.enable_heatmaps:!1!==this.instance.config.capture_heatmaps}startIfEnabled(){if(this.isEnabled){if(this._initialized)return
ae.info("[heatmaps] starting..."),this._setupListeners(),this._flushInterval=setInterval(this.flush.bind(this),this.flushIntervalMilliseconds)}else{var e,t
clearInterval(null!==(e=this._flushInterval)&&void 0!==e?e:void 0),null===(t=this.deadClicksCapture)||void 0===t||t.stop(),this.getAndClearBuffer()}}afterDecideResponse(e){var t=!!e.heatmaps
this.instance.persistence&&this.instance.persistence.register({[ve]:t}),this._enabledServerSide=t,this.startIfEnabled()}getAndClearBuffer(){var e=this.buffer
return this.buffer=void 0,e}_onDeadClick(e){this._onClick(e.originalEvent,"deadclick")}_setupListeners(){h&&m&&(N(m,"click",(e=>this._onClick(e||(null==h?void 0:h.event))),!1,!0),N(m,"mousemove",(e=>this._onMouseMove(e||(null==h?void 0:h.event))),!1,!0),this.deadClicksCapture=new ws(this.instance,ys,this._onDeadClick.bind(this)),this.deadClicksCapture.startIfEnabled(),this._initialized=!0)}_getProperties(e,t){var n=this.instance.scrollManager.scrollY(),i=this.instance.scrollManager.scrollX(),r=this.instance.scrollManager.scrollElement(),s=function(e,t,n){for(var i=e;i&&Tn(i)&&!$n(i,"body");){if(i===n)return!1
if(R(t,null==h?void 0:h.getComputedStyle(i).position))return!0
i=Dn(i)}return!1}(jn(e),["fixed","sticky"],r)
return{x:e.clientX+(s?0:i),y:e.clientY+(s?0:n),target_fixed:s,type:t}}_onClick(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"click"
if(!Cn(e.target)){var i=this._getProperties(e,n)
null!==(t=this.rageclicks)&&void 0!==t&&t.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._capture(ue(ue({},i),{},{type:"rageclick"})),this._capture(i)}}_onMouseMove(e){Cn(e.target)||(clearTimeout(this._mouseMoveTimeout),this._mouseMoveTimeout=setTimeout((()=>{this._capture(this._getProperties(e,"mousemove"))}),500))}_capture(e){if(h){var t=h.location.href
this.buffer=this.buffer||{},this.buffer[t]||(this.buffer[t]=[]),this.buffer[t].push(e)}}flush(){this.buffer&&!K(this.buffer)&&this.instance.capture("$$heatmap",{$heatmap_data:this.getAndClearBuffer()})}}class Ss{constructor(e){de(this,"_updateScrollData",(()=>{var e,t,n,i
this.context||(this.context={})
var r=this.scrollElement(),s=this.scrollY(),o=r?Math.max(0,r.scrollHeight-r.clientHeight):0,a=s+((null==r?void 0:r.clientHeight)||0),l=(null==r?void 0:r.scrollHeight)||0
this.context.lastScrollY=Math.ceil(s),this.context.maxScrollY=Math.max(s,null!==(e=this.context.maxScrollY)&&void 0!==e?e:0),this.context.maxScrollHeight=Math.max(o,null!==(t=this.context.maxScrollHeight)&&void 0!==t?t:0),this.context.lastContentY=a,this.context.maxContentY=Math.max(a,null!==(n=this.context.maxContentY)&&void 0!==n?n:0),this.context.maxContentHeight=Math.max(l,null!==(i=this.context.maxContentHeight)&&void 0!==i?i:0)})),this.instance=e}getContext(){return this.context}resetContext(){var e=this.context
return setTimeout(this._updateScrollData,0),e}startMeasuringScrollPosition(){null==h||h.addEventListener("scroll",this._updateScrollData,!0),null==h||h.addEventListener("scrollend",this._updateScrollData,!0),null==h||h.addEventListener("resize",this._updateScrollData)}scrollElement(){if(!this.instance.config.scroll_root_selector)return null==h?void 0:h.document.documentElement
var e=V(this.instance.config.scroll_root_selector)?this.instance.config.scroll_root_selector:[this.instance.config.scroll_root_selector]
for(var t of e){var n=null==h?void 0:h.document.querySelector(t)
if(n)return n}}scrollY(){if(this.instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollTop||0}return h&&(h.scrollY||h.pageYOffset||h.document.documentElement.scrollTop)||0}scrollX(){if(this.instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollLeft||0}return h&&(h.scrollX||h.pageXOffset||h.document.documentElement.scrollLeft)||0}}function Es(e,t){return t.length>e?t.slice(0,e)+"...":t}function xs(e){if(e.previousElementSibling)return e.previousElementSibling
var t=e
do{t=t.previousSibling}while(t&&!Tn(t))
return t}function Ps(e,t){for(var n,i,{e:r,maskAllElementAttributes:s,maskAllText:o,elementAttributeIgnoreList:a,elementsChainAsString:l}=t,c=[e],u=e;u.parentNode&&!$n(u,"body");)Ln(u.parentNode)?(c.push(u.parentNode.host),u=u.parentNode.host):(c.push(u.parentNode),u=u.parentNode)
var d,f=[],p={},g=!1,_=!1
if(I(c,(e=>{var t=Bn(e)
"a"===e.tagName.toLowerCase()&&(g=e.getAttribute("href"),g=t&&g&&Qn(g)&&g),R(Fn(e),"ph-no-capture")&&(_=!0),f.push(function(e,t,n,i){var r=e.tagName.toLowerCase(),s={tag_name:r}
Nn.indexOf(r)>-1&&!n&&("a"===r.toLowerCase()||"button"===r.toLowerCase()?s.$el_text=Es(1024,Jn(e)):s.$el_text=Es(1024,Mn(e)))
var o=Fn(e)
o.length>0&&(s.classes=o.filter((function(e){return""!==e}))),I(e.attributes,(function(n){var r
if((!Hn(e)||-1!==["name","id","class","aria-label"].indexOf(n.name))&&(null==i||!i.includes(n.name))&&!t&&Qn(n.value)&&(r=n.name,!Y(r)||"_ngcontent"!==r.substring(0,10)&&"_nghost"!==r.substring(0,7))){var o=n.value
"class"===n.name&&(o=Rn(o).join(" ")),s["attr__"+n.name]=Es(1024,o)}}))
for(var a=1,l=1,c=e;c=xs(c);)a++,c.tagName===e.tagName&&l++
return s.nth_child=a,s.nth_of_type=l,s}(e,s,o,a))
var n=function(e){if(!Bn(e))return{}
var t={}
return I(e.attributes,(function(e){if(e.name&&0===e.name.indexOf("data-ph-capture-attribute")){var n=e.name.replace("data-ph-capture-attribute-",""),i=e.value
n&&i&&Qn(i)&&(t[n]=i)}})),t}(e)
L(p,n)})),_)return{props:{},explicitNoCapture:_}
if(o||("a"===e.tagName.toLowerCase()||"button"===e.tagName.toLowerCase()?f[0].$el_text=Jn(e):f[0].$el_text=Mn(e)),g){var v,m
f[0].attr__href=g
var y=null===(v=yt(g))||void 0===v?void 0:v.host,b=null==h||null===(m=h.location)||void 0===m?void 0:m.host
y&&b&&y!==b&&(d=g)}return{props:L({$event_type:r.type,$ce_version:1},l?{}:{$elements:f},{$elements_chain:Xn(f)},null!==(n=f[0])&&void 0!==n&&n.$el_text?{$el_text:null===(i=f[0])||void 0===i?void 0:i.$el_text}:{},d&&"click"===r.type?{$external_click_url:d}:{},p)}}class Cs{constructor(e){de(this,"_initialized",!1),de(this,"_isDisabledServerSide",null),de(this,"rageclicks",new _s),de(this,"_elementsChainAsString",!1),this.instance=e,this._elementSelectors=null}get config(){var e,t,n=J(this.instance.config.autocapture)?this.instance.config.autocapture:{}
return n.url_allowlist=null===(e=n.url_allowlist)||void 0===e?void 0:e.map((e=>new RegExp(e))),n.url_ignorelist=null===(t=n.url_ignorelist)||void 0===t?void 0:t.map((e=>new RegExp(e))),n}_addDomEventHandlers(){if(this.isBrowserSupported()){if(h&&m){var e=e=>{e=e||(null==h?void 0:h.event)
try{this._captureEvent(e)}catch(e){ae.error("Failed to capture event",e)}},t=e=>{e=e||(null==h?void 0:h.event),this._captureEvent(e,H)}
N(m,"submit",e,!1,!0),N(m,"change",e,!1,!0),N(m,"click",e,!1,!0),this.config.capture_copied_text&&(N(m,"copy",t,!1,!0),N(m,"cut",t,!1,!0))}}else ae.info("Disabling Automatic Event Collection because this browser is not supported")}startIfEnabled(){this.isEnabled&&!this._initialized&&(this._addDomEventHandlers(),this._initialized=!0)}afterDecideResponse(e){e.elementsChainAsString&&(this._elementsChainAsString=e.elementsChainAsString),this.instance.persistence&&this.instance.persistence.register({[_e]:!!e.autocapture_opt_out}),this._isDisabledServerSide=!!e.autocapture_opt_out,this.startIfEnabled()}setElementSelectors(e){this._elementSelectors=e}getElementSelectors(e){var t,n=[]
return null===(t=this._elementSelectors)||void 0===t||t.forEach((t=>{var i=null==m?void 0:m.querySelectorAll(t)
null==i||i.forEach((i=>{e===i&&n.push(t)}))})),n}get isEnabled(){var e,t,n=null===(e=this.instance.persistence)||void 0===e?void 0:e.props[_e],i=this._isDisabledServerSide
if(ee(i)&&!ie(n)&&!this.instance.config.advanced_disable_decide)return!1
var r=null!==(t=this._isDisabledServerSide)&&void 0!==t?t:!!n
return!!this.instance.config.autocapture&&!r}_captureEvent(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$autocapture"
if(this.isEnabled){var n,i=jn(e)
In(i)&&(i=i.parentNode||null),"$autocapture"===t&&"click"===e.type&&e instanceof MouseEvent&&this.instance.config.rageclick&&null!==(n=this.rageclicks)&&void 0!==n&&n.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._captureEvent(e,"$rageclick")
var r=t===H
if(i&&function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0
if(!h||!e||$n(e,"html")||!Tn(e))return!1
if(null!=n&&n.url_allowlist&&!On(n.url_allowlist))return!1
if(null!=n&&n.url_ignorelist&&On(n.url_ignorelist))return!1
if(null!=n&&n.dom_event_allowlist){var s=n.dom_event_allowlist
if(s&&!s.some((e=>t.type===e)))return!1}for(var o=!1,a=[e],l=!0,c=e;c.parentNode&&!$n(c,"body");)if(Ln(c.parentNode))a.push(c.parentNode.host),c=c.parentNode.host
else{if(!(l=Dn(c)))break
if(i||Nn.indexOf(l.tagName.toLowerCase())>-1)o=!0
else{var u=h.getComputedStyle(l)
u&&"pointer"===u.getPropertyValue("cursor")&&(o=!0)}a.push(l),c=l}if(!function(e,t){var n=null==t?void 0:t.element_allowlist
if(X(n))return!0
var i=function(e){if(n.some((t=>e.tagName.toLowerCase()===t)))return{v:!0}}
for(var r of e){var s=i(r)
if("object"==typeof s)return s.v}return!1}(a,n))return!1
if(!function(e,t){var n=null==t?void 0:t.css_selector_allowlist
if(X(n))return!0
var i=function(e){if(n.some((t=>e.matches(t))))return{v:!0}}
for(var r of e){var s=i(r)
if("object"==typeof s)return s.v}return!1}(a,n))return!1
var d=h.getComputedStyle(e)
if(d&&"pointer"===d.getPropertyValue("cursor")&&"click"===t.type)return!0
var f=e.tagName.toLowerCase()
switch(f){case"html":return!1
case"form":return(r||["submit"]).indexOf(t.type)>=0
case"input":case"select":case"textarea":return(r||["change","click"]).indexOf(t.type)>=0
default:return o?(r||["click"]).indexOf(t.type)>=0:(r||["click"]).indexOf(t.type)>=0&&(Nn.indexOf(f)>-1||"true"===e.getAttribute("contenteditable"))}}(i,e,this.config,r,r?["copy","cut"]:void 0)){var{props:s,explicitNoCapture:o}=Ps(i,{e:e,maskAllElementAttributes:this.instance.config.mask_all_element_attributes,maskAllText:this.instance.config.mask_all_text,elementAttributeIgnoreList:this.config.element_attribute_ignorelist,elementsChainAsString:this._elementsChainAsString})
if(o)return!1
var a=this.getElementSelectors(i)
if(a&&a.length>0&&(s.$element_selectors=a),t===H){var l,c=An(null==h||null===(l=h.getSelection())||void 0===l?void 0:l.toString()),u=e.type||"clipboard"
if(!c)return!1
s.$selected_content=c,s.$copy_type=u}return this.instance.capture(t,s),!0}}}isBrowserSupported(){return Q(null==m?void 0:m.querySelectorAll)}}class Ts{constructor(e){de(this,"_restoreXHRPatch",void 0),de(this,"_restoreFetchPatch",void 0),de(this,"_startCapturing",(()=>{var e,t,n,i
X(this._restoreXHRPatch)&&(null===(e=E.__PosthogExtensions__)||void 0===e||null===(t=e.tracingHeadersPatchFns)||void 0===t||t._patchXHR(this.instance.sessionManager)),X(this._restoreFetchPatch)&&(null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.tracingHeadersPatchFns)||void 0===i||i._patchFetch(this.instance.sessionManager))})),this.instance=e}_loadScript(e){var t,n,i
null!==(t=E.__PosthogExtensions__)&&void 0!==t&&t.tracingHeadersPatchFns&&e(),null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"tracing-headers",(t=>{if(t)return ae.error("[TRACING-HEADERS] failed to load script",t)
e()}))}startIfEnabledOrStop(){var e,t
this.instance.config.__add_tracing_headers?this._loadScript(this._startCapturing):(null===(e=this._restoreXHRPatch)||void 0===e||e.call(this),null===(t=this._restoreFetchPatch)||void 0===t||t.call(this),this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0)}}!function(e){e[e.PENDING=-1]="PENDING",e[e.DENIED=0]="DENIED",e[e.GRANTED=1]="GRANTED"}(vs||(vs={}))
class $s{constructor(e){this.instance=e}get config(){return this.instance.config}get consent(){return this.getDnt()?vs.DENIED:this.storedConsent}isOptedOut(){return this.consent===vs.DENIED||this.consent===vs.PENDING&&this.config.opt_out_capturing_by_default}isOptedIn(){return!this.isOptedOut()}optInOut(e){this.storage.set(this.storageKey,e?1:0,this.config.cookie_expiration,this.config.cross_subdomain_cookie,this.config.secure_cookie)}reset(){this.storage.remove(this.storageKey,this.config.cross_subdomain_cookie)}get storageKey(){var{token:e,opt_out_capturing_cookie_prefix:t}=this.instance.config
return(t||"__ph_opt_in_out_")+e}get storedConsent(){var e=this.storage.get(this.storageKey)
return"1"===e?vs.GRANTED:"0"===e?vs.DENIED:vs.PENDING}get storage(){if(!this._storage){var e=this.config.opt_out_capturing_persistence_type
this._storage="localStorage"===e?dt:ct
var t="localStorage"===e?ct:dt
t.get(this.storageKey)&&(this._storage.get(this.storageKey)||this.optInOut("1"===t.get(this.storageKey)),t.remove(this.storageKey,this.config.cross_subdomain_cookie))}return this._storage}getDnt(){return!!this.config.respect_dnt&&!!D([null==v?void 0:v.doNotTrack,null==v?void 0:v.msDoNotTrack,E.doNotTrack],(e=>R([!0,1,"1","yes"],e)))}}var Is="[Exception Autocapture]"
class Ls{constructor(e){var t
de(this,"originalOnUnhandledRejectionHandler",void 0),de(this,"startCapturing",(()=>{var e,t,n,i
if(h&&this.isEnabled&&!this.hasHandlers&&!this.isCapturing){var r=null===(e=E.__PosthogExtensions__)||void 0===e||null===(t=e.errorWrappingFunctions)||void 0===t?void 0:t.wrapOnError,s=null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.errorWrappingFunctions)||void 0===i?void 0:i.wrapUnhandledRejection
if(r&&s)try{this.unwrapOnError=r(this.captureException.bind(this)),this.unwrapUnhandledRejection=s(this.captureException.bind(this))}catch(e){ae.error(Is+" failed to start",e),this.stopCapturing()}else ae.error(Is+" failed to load error wrapping functions - cannot start")}})),this.instance=e,this.remoteEnabled=!(null===(t=this.instance.persistence)||void 0===t||!t.props[me]),this.startIfEnabled()}get isEnabled(){var e
return null!==(e=this.remoteEnabled)&&void 0!==e&&e}get isCapturing(){var e
return!(null==h||null===(e=h.onerror)||void 0===e||!e.__POSTHOG_INSTRUMENTED__)}get hasHandlers(){return this.originalOnUnhandledRejectionHandler||this.unwrapOnError}startIfEnabled(){this.isEnabled&&!this.isCapturing&&(ae.info(Is+" enabled, starting..."),this.loadScript(this.startCapturing))}loadScript(e){var t,n
this.hasHandlers&&e(),null===(t=E.__PosthogExtensions__)||void 0===t||null===(n=t.loadExternalDependency)||void 0===n||n.call(t,this.instance,"exception-autocapture",(t=>{if(t)return ae.error(Is+" failed to load script",t)
e()}))}stopCapturing(){var e,t
null===(e=this.unwrapOnError)||void 0===e||e.call(this),null===(t=this.unwrapUnhandledRejection)||void 0===t||t.call(this)}afterDecideResponse(e){var t=e.autocaptureExceptions
this.remoteEnabled=!!t||!1,this.instance.persistence&&this.instance.persistence.register({[me]:this.remoteEnabled}),this.startIfEnabled()}captureException(e){var t=this.instance.requestRouter.endpointFor("ui")
e.$exception_personURL="".concat(t,"/project/").concat(this.instance.config.token,"/person/").concat(this.instance.get_distinct_id()),this.instance.exceptions.sendExceptionEvent(e)}}var Rs=9e5,Os="[Web Vitals]"
class Fs{constructor(e){var t
de(this,"_enabledServerSide",!1),de(this,"_initialized",!1),de(this,"buffer",{url:void 0,metrics:[],firstMetricTimestamp:void 0}),de(this,"_flushToCapture",(()=>{clearTimeout(this._delayedFlushTimer),0!==this.buffer.metrics.length&&(this.instance.capture("$web_vitals",this.buffer.metrics.reduce(((e,t)=>ue(ue({},e),{},{["$web_vitals_".concat(t.name,"_event")]:ue({},t),["$web_vitals_".concat(t.name,"_value")]:t.value})),{})),this.buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0})})),de(this,"_addToBuffer",(e=>{var t,n=null===(t=this.instance.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0)
if(X(n))ae.error(Os+"Could not read session ID. Dropping metrics!")
else{this.buffer=this.buffer||{url:void 0,metrics:[],firstMetricTimestamp:void 0}
var i=this._currentURL()
X(i)||(te(null==e?void 0:e.name)||te(null==e?void 0:e.value)?ae.error(Os+"Invalid metric received",e):this._maxAllowedValue&&e.value>=this._maxAllowedValue?ae.error(Os+"Ignoring metric with value >= "+this._maxAllowedValue,e):(this.buffer.url!==i&&(this._flushToCapture(),this._delayedFlushTimer=setTimeout(this._flushToCapture,this.flushToCaptureTimeoutMs)),X(this.buffer.url)&&(this.buffer.url=i),this.buffer.firstMetricTimestamp=X(this.buffer.firstMetricTimestamp)?Date.now():this.buffer.firstMetricTimestamp,e.attribution&&e.attribution.interactionTargetElement&&(e.attribution.interactionTargetElement=void 0),this.buffer.metrics.push(ue(ue({},e),{},{$current_url:i,$session_id:n.sessionId,$window_id:n.windowId,timestamp:Date.now()})),this.buffer.metrics.length===this.allowedMetrics.length&&this._flushToCapture()))}})),de(this,"_startCapturing",(()=>{var e,t,n,i,r=E.__PosthogExtensions__
X(r)||X(r.postHogWebVitalsCallbacks)||({onLCP:e,onCLS:t,onFCP:n,onINP:i}=r.postHogWebVitalsCallbacks),e&&t&&n&&i?(this.allowedMetrics.indexOf("LCP")>-1&&e(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("CLS")>-1&&t(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("FCP")>-1&&n(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("INP")>-1&&i(this._addToBuffer.bind(this)),this._initialized=!0):ae.error(Os+"web vitals callbacks not loaded - not starting")})),this.instance=e,this._enabledServerSide=!(null===(t=this.instance.persistence)||void 0===t||!t.props[ye]),this.startIfEnabled()}get allowedMetrics(){var e,t,n=J(this.instance.config.capture_performance)?null===(e=this.instance.config.capture_performance)||void 0===e?void 0:e.web_vitals_allowed_metrics:void 0
return X(n)?(null===(t=this.instance.persistence)||void 0===t?void 0:t.props[we])||["CLS","FCP","INP","LCP"]:n}get flushToCaptureTimeoutMs(){return(J(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals_delayed_flush_ms:void 0)||5e3}get _maxAllowedValue(){var e=J(this.instance.config.capture_performance)&&ne(this.instance.config.capture_performance.__web_vitals_max_value)?this.instance.config.capture_performance.__web_vitals_max_value:Rs
return 0<e&&e<=6e4?Rs:e}get isEnabled(){var e=J(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals:void 0
return ie(e)?e:this._enabledServerSide}startIfEnabled(){this.isEnabled&&!this._initialized&&(ae.info(Os+" enabled, starting..."),this.loadScript(this._startCapturing))}afterDecideResponse(e){var t=J(e.capturePerformance)&&!!e.capturePerformance.web_vitals,n=J(e.capturePerformance)?e.capturePerformance.web_vitals_allowed_metrics:void 0
this.instance.persistence&&(this.instance.persistence.register({[ye]:t}),this.instance.persistence.register({[we]:n})),this._enabledServerSide=t,this.startIfEnabled()}loadScript(e){var t,n,i
null!==(t=E.__PosthogExtensions__)&&void 0!==t&&t.postHogWebVitalsCallbacks&&e(),null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"web-vitals",(t=>{t?ae.error(Os+" failed to load script",t):e()}))}_currentURL(){var e=h?h.location.href:void 0
return e||ae.error(Os+"Could not determine current URL"),e}}var As={icontains:(e,t)=>!!h&&t.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:(e,t)=>!!h&&-1===t.href.toLowerCase().indexOf(e.toLowerCase()),regex:(e,t)=>!!h&&bt(t.href,e),not_regex:(e,t)=>!!h&&!bt(t.href,e),exact:(e,t)=>t.href===e,is_not:(e,t)=>t.href!==e}
class Ms{constructor(e){var t=this
de(this,"getWebExperimentsAndEvaluateDisplayLogic",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
t.getWebExperiments((e=>{Ms.logInfo("retrieved web experiments from the server"),t._flagToExperiments=new Map,e.forEach((e=>{if(e.feature_flag_key&&t._featureFlags&&t._featureFlags[e.feature_flag_key]){var n
t._flagToExperiments&&(Ms.logInfo("setting flag key ",e.feature_flag_key," to web experiment ",e),null===(n=t._flagToExperiments)||void 0===n||n.set(e.feature_flag_key,e))
var i=t._featureFlags[e.feature_flag_key]
i&&e.variants[i]&&t.applyTransforms(e.name,i,e.variants[i].transforms)}else if(e.variants)for(var r in e.variants){var s=e.variants[r]
Ms.matchesTestVariant(s)&&t.applyTransforms(e.name,r,s.transforms)}}))}),e)})),this.instance=e,this.instance.onFeatureFlags&&this.instance.onFeatureFlags((e=>{this.applyFeatureFlagChanges(e)})),this._flagToExperiments=new Map}applyFeatureFlagChanges(e){te(this._flagToExperiments)||this.instance.config.disable_web_experiments||(Ms.logInfo("applying feature flags",e),e.forEach((e=>{var t
if(this._flagToExperiments&&null!==(t=this._flagToExperiments)&&void 0!==t&&t.has(e)){var n,i=this.instance.getFeatureFlag(e),r=null===(n=this._flagToExperiments)||void 0===n?void 0:n.get(e)
i&&null!=r&&r.variants[i]&&this.applyTransforms(r.name,i,r.variants[i].transforms)}})))}afterDecideResponse(e){this._is_bot()?Ms.logInfo("Refusing to render web experiment since the viewer is a likely bot"):(this._featureFlags=e.featureFlags,this.loadIfEnabled(),this.previewWebExperiment())}previewWebExperiment(){var e=Ms.getWindowLocation()
if(null!=e&&e.search){var t=wt(null==e?void 0:e.search,"__experiment_id"),n=wt(null==e?void 0:e.search,"__experiment_variant")
t&&n&&(Ms.logInfo("previewing web experiments ".concat(t," && ").concat(n)),this.getWebExperiments((e=>{this.showPreviewWebExperiment(parseInt(t),n,e)}),!1,!0))}}loadIfEnabled(){this.instance.config.disable_web_experiments||this.getWebExperimentsAndEvaluateDisplayLogic()}getWebExperiments(e,t,n){if(this.instance.config.disable_web_experiments&&!n)return e([])
var i=this.instance.get_property("$web_experiments")
if(i&&!t)return e(i)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api","/api/web_experiments/?token=".concat(this.instance.config.token)),method:"GET",transport:"XHR",callback:t=>{if(200!==t.statusCode||!t.json)return e([])
var n=t.json.experiments||[]
return e(n)}})}showPreviewWebExperiment(e,t,n){var i=n.filter((t=>t.id===e))
i&&i.length>0&&(Ms.logInfo("Previewing web experiment [".concat(i[0].name,"] with variant [").concat(t,"]")),this.applyTransforms(i[0].name,t,i[0].variants[t].transforms,!0))}static matchesTestVariant(e){return!te(e.conditions)&&Ms.matchUrlConditions(e)&&Ms.matchUTMConditions(e)}static matchUrlConditions(e){var t
if(te(e.conditions)||te(null===(t=e.conditions)||void 0===t?void 0:t.url))return!0
var n,i,r,s=Ms.getWindowLocation()
return!!s&&(null===(n=e.conditions)||void 0===n||!n.url||As[null!==(i=null===(r=e.conditions)||void 0===r?void 0:r.urlMatchType)&&void 0!==i?i:"icontains"](e.conditions.url,s))}static getWindowLocation(){return null==h?void 0:h.location}static matchUTMConditions(e){var t
if(te(e.conditions)||te(null===(t=e.conditions)||void 0===t?void 0:t.utm))return!0
var n=bn.campaignParams()
if(n.utm_source){var i,r,s,o,a,l,c,u,d,h,f,p,g,_,v,m,y=null===(i=e.conditions)||void 0===i||null===(r=i.utm)||void 0===r||!r.utm_campaign||(null===(s=e.conditions)||void 0===s||null===(o=s.utm)||void 0===o?void 0:o.utm_campaign)==n.utm_campaign,b=null===(a=e.conditions)||void 0===a||null===(l=a.utm)||void 0===l||!l.utm_source||(null===(c=e.conditions)||void 0===c||null===(u=c.utm)||void 0===u?void 0:u.utm_source)==n.utm_source,w=null===(d=e.conditions)||void 0===d||null===(h=d.utm)||void 0===h||!h.utm_medium||(null===(f=e.conditions)||void 0===f||null===(p=f.utm)||void 0===p?void 0:p.utm_medium)==n.utm_medium,k=null===(g=e.conditions)||void 0===g||null===(_=g.utm)||void 0===_||!_.utm_term||(null===(v=e.conditions)||void 0===v||null===(m=v.utm)||void 0===m?void 0:m.utm_term)==n.utm_term
return y&&w&&k&&b}return!1}static logInfo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
ae.info("[WebExperiments] ".concat(e),n)}applyTransforms(e,t,n,i){var r
this._is_bot()?Ms.logInfo("Refusing to render web experiment since the viewer is a likely bot"):"control"!==t?n.forEach((n=>{if(n.selector){var r
Ms.logInfo("applying transform of variant ".concat(t," for experiment ").concat(e," "),n)
var s,o=0,a=null===(r=document)||void 0===r?void 0:r.querySelectorAll(n.selector)
null==a||a.forEach((e=>{var t=e
o+=1,n.attributes&&n.attributes.forEach((e=>{switch(e.name){case"text":t.innerText=e.value
break
case"html":t.innerHTML=e.value
break
case"cssClass":t.className=e.value
break
default:t.setAttribute(e.name,e.value)}})),n.text&&(t.innerText=n.text),n.html&&(t.parentElement?t.parentElement.innerHTML=n.html:t.innerHTML=n.html),n.css&&t.setAttribute("style",n.css)})),this.instance&&this.instance.capture&&this.instance.capture("$web_experiment_applied",{$web_experiment_name:e,$web_experiment_variant:t,$web_experiment_preview:i,$web_experiment_document_url:null===(s=Ms.getWindowLocation())||void 0===s?void 0:s.href,$web_experiment_elements_modified:o})}})):(Ms.logInfo("Control variants leave the page unmodified."),this.instance&&this.instance.capture&&this.instance.capture("$web_experiment_applied",{$web_experiment_name:e,$web_experiment_preview:i,$web_experiment_variant:t,$web_experiment_document_url:null===(r=Ms.getWindowLocation())||void 0===r?void 0:r.href,$web_experiment_elements_modified:0}))}_is_bot(){return v&&this.instance?gs(v,this.instance.config.custom_blocked_useragents):void 0}}class js{constructor(e){this.instance=e}sendExceptionEvent(e){this.instance.capture("$exception",e,{_noTruncate:!0,_batchKey:"exceptionEvent"})}}var Ns=["$set_once","$set"]
class Ds{constructor(e){this.instance=e,this.enabled=!!this.instance.config.opt_in_site_apps&&!this.instance.config.advanced_disable_decide,this.missedInvocations=[],this.loaded=!1,this.appsLoading=new Set}eventCollector(e,t){if(this.enabled&&!this.loaded&&t){var n=this.globalsForEvent(t)
this.missedInvocations.push(n),this.missedInvocations.length>1e3&&(this.missedInvocations=this.missedInvocations.slice(10))}}init(){var e
null===(e=this.instance)||void 0===e||e._addCaptureHook(this.eventCollector.bind(this))}globalsForEvent(e){var t,n,i,r,s,o,a
if(!e)throw new Error("Event payload is required")
var l={},c=this.instance.get_property("$groups")||[],u=this.instance.get_property("$stored_group_properties")||{}
for(var[d,h]of Object.entries(u))l[d]={id:c[d],type:d,properties:h}
var{$set_once:f,$set:p}=e
return{event:ue(ue({},he(e,Ns)),{},{properties:ue(ue(ue({},e.properties),p?{$set:ue(ue({},null!==(t=null===(n=e.properties)||void 0===n?void 0:n.$set)&&void 0!==t?t:{}),p)}:{}),f?{$set_once:ue(ue({},null!==(i=null===(r=e.properties)||void 0===r?void 0:r.$set_once)&&void 0!==i?i:{}),f)}:{}),elements_chain:null!==(s=null===(o=e.properties)||void 0===o?void 0:o.$elements_chain)&&void 0!==s?s:"",distinct_id:null===(a=e.properties)||void 0===a?void 0:a.distinct_id}),person:{properties:this.instance.get_property("$stored_person_properties")},groups:l}}afterDecideResponse(e){var t=this
V(null==e?void 0:e.siteApps)&&e.siteApps.length>0?this.enabled&&this.instance.config.opt_in_site_apps?function(){var n=()=>{0===t.appsLoading.size&&(t.loaded=!0,t.missedInvocations=[])},i=function(e,i){var r,s
t.appsLoading.add(e),E["__$$ph_site_app_".concat(e,"_posthog")]=t.instance,E["__$$ph_site_app_".concat(e,"_missed_invocations")]=()=>t.missedInvocations,E["__$$ph_site_app_".concat(e,"_callback")]=()=>{t.appsLoading.delete(e),n()},null===(r=E.__PosthogExtensions__)||void 0===r||null===(s=r.loadSiteApp)||void 0===s||s.call(r,t.instance,i,(i=>{if(i)return t.appsLoading.delete(e),n(),ae.error("Error while initializing PostHog app with config id ".concat(e),i)}))}
for(var{id:r,url:s}of e.siteApps)i(r,s)}():e.siteApps.length>0?(ae.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.'),this.loaded=!0):this.loaded=!0:(this.loaded=!0,this.enabled=!1)}}var Bs={},Hs=()=>{},qs="posthog",Us=!ar&&-1===(null==S?void 0:S.indexOf("MSIE"))&&-1===(null==S?void 0:S.indexOf("Mozilla")),Gs=()=>{var e,t,n
return{api_host:"https://us.i.posthog.com",ui_host:null,token:"",autocapture:!0,rageclick:!0,cross_subdomain_cookie:(t=null==m?void 0:m.location,n=null==t?void 0:t.hostname,!!Y(n)&&"herokuapp.com"!==n.split(".").slice(-2).join(".")),persistence:"localStorage+cookie",persistence_name:"",loaded:Hs,store_google:!0,custom_campaign_params:[],custom_blocked_useragents:[],save_referrer:!0,capture_pageview:!0,capture_pageleave:"if_capture_pageview",debug:y&&Y(null==y?void 0:y.search)&&-1!==y.search.indexOf("__posthog_debug=true")||!1,verbose:!1,cookie_expiration:365,upgrade:!1,disable_session_recording:!1,disable_persistence:!1,disable_web_experiments:!0,disable_surveys:!1,enable_recording_console_log:void 0,secure_cookie:"https:"===(null==h||null===(e=h.location)||void 0===e?void 0:e.protocol),ip:!0,opt_out_capturing_by_default:!1,opt_out_persistence_by_default:!1,opt_out_useragent_filter:!1,opt_out_capturing_persistence_type:"localStorage",opt_out_capturing_cookie_prefix:null,opt_in_site_apps:!1,property_denylist:[],respect_dnt:!1,sanitize_properties:null,request_headers:{},inapp_protocol:"//",inapp_link_new_window:!1,request_batching:!0,properties_string_max_length:65535,session_recording:{},mask_all_element_attributes:!1,mask_all_text:!1,advanced_disable_decide:!1,advanced_disable_feature_flags:!1,advanced_disable_feature_flags_on_first_load:!1,advanced_disable_toolbar_metrics:!1,feature_flag_request_timeout_ms:3e3,on_request_error:e=>{var t="Bad HTTP status: "+e.statusCode+" "+e.text
ae.error(t)},get_device_id:e=>e,_onCapture:Hs,capture_performance:void 0,name:"posthog",bootstrap:{},disable_compression:!1,session_idle_timeout_seconds:1800,person_profiles:"identified_only",__add_tracing_headers:!1,before_send:void 0}},Ws=e=>{var t={}
X(e.process_person)||(t.person_profiles=e.process_person),X(e.xhr_headers)||(t.request_headers=e.xhr_headers),X(e.cookie_name)||(t.persistence_name=e.cookie_name),X(e.disable_cookie)||(t.disable_persistence=e.disable_cookie)
var n=L({},t,e)
return V(e.property_blacklist)&&(X(e.property_denylist)?n.property_denylist=e.property_blacklist:V(e.property_denylist)?n.property_denylist=[...e.property_blacklist,...e.property_denylist]:ae.error("Invalid value for property_denylist config: "+e.property_denylist)),n}
class zs{constructor(){de(this,"__forceAllowLocalhost",!1)}get _forceAllowLocalhost(){return this.__forceAllowLocalhost}set _forceAllowLocalhost(e){ae.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),this.__forceAllowLocalhost=e}}class Vs{constructor(){de(this,"webPerformance",new zs),de(this,"version",x.LIB_VERSION),de(this,"_internalEventEmitter",new xr),this.config=Gs(),this.decideEndpointWasHit=!1,this.SentryIntegration=Sr,this.sentryIntegration=e=>function(e,t){var n=kr(e,t)
return{name:wr,processEvent:e=>n(e)}}(this,e),this.__request_queue=[],this.__loaded=!1,this.analyticsDefaultEndpoint="/e/",this._initialPageviewCaptured=!1,this._initialPersonProfilesConfig=null,this.featureFlags=new Ye(this),this.toolbar=new sr(this),this.scrollManager=new Ss(this),this.pageViewManager=new Er(this),this.surveys=new cs(this),this.experiments=new Ms(this),this.exceptions=new js(this),this.rateLimiter=new us(this),this.requestRouter=new vr(this),this.consent=new $s(this),this.people={set:(e,t,n)=>{var i=Y(e)?{[e]:t}:e
this.setPersonProperties(i),null==n||n({})},set_once:(e,t,n)=>{var i=Y(e)?{[e]:t}:e
this.setPersonProperties(void 0,i),null==n||n({})}},this.on("eventCaptured",(e=>ae.info('send "'.concat(null==e?void 0:e.event,'"'),e)))}init(e,t,n){if(n&&n!==qs){var i,r=null!==(i=Bs[n])&&void 0!==i?i:new Vs
return r._init(e,t,n),Bs[n]=r,Bs[qs][n]=r,r}return this._init(e,t,n)}_init(e){var t,n,i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0
if(X(e)||Z(e))return ae.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),this
if(this.__loaded)return ae.warn("You have already initialized PostHog! Re-initializing is a no-op"),this
this.__loaded=!0,this.config={},this._triggered_notifs=[],r.person_profiles&&(this._initialPersonProfilesConfig=r.person_profiles),this.set_config(L({},Gs(),Ws(r),{name:s,token:e})),this.config.on_xhr_error&&ae.error("[posthog] on_xhr_error is deprecated. Use on_request_error instead"),this.compression=r.disable_compression?void 0:B.GZipJS,this.persistence=new kn(this.config),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new kn(ue(ue({},this.config),{},{persistence:"sessionStorage"}))
var o=ue({},this.persistence.props),a=ue({},this.sessionPersistence.props)
if(this._requestQueue=new or((e=>this._send_retriable_request(e))),this._retryQueue=new pr(this),this.__request_queue=[],this.sessionManager=new gr(this.config,this.persistence),this.sessionPropsManager=new hs(this.sessionManager,this.persistence),new Ts(this).startIfEnabledOrStop(),this.siteApps=new Ds(this),null===(t=this.siteApps)||void 0===t||t.init(),this.sessionRecording=new er(this),this.sessionRecording.startIfEnabledOrStop(),this.config.disable_scroll_properties||this.scrollManager.startMeasuringScrollPosition(),this.autocapture=new Cs(this),this.autocapture.startIfEnabled(),this.surveys.loadIfEnabled(),this.heatmaps=new ks(this),this.heatmaps.startIfEnabled(),this.webVitalsAutocapture=new Fs(this),this.exceptionObserver=new Ls(this),this.exceptionObserver.startIfEnabled(),this.deadClicksAutocapture=new ws(this,bs),this.deadClicksAutocapture.startIfEnabled(),x.DEBUG=x.DEBUG||this.config.debug,x.DEBUG&&ae.info("Starting in debug mode",{this:this,config:r,thisC:ue({},this.config),p:o,s:a}),this._sync_opt_out_with_persistence(),void 0!==(null===(n=r.bootstrap)||void 0===n?void 0:n.distinctID)){var l,c,u=this.config.get_device_id(st()),d=null!==(l=r.bootstrap)&&void 0!==l&&l.isIdentifiedID?u:r.bootstrap.distinctID
this.persistence.set_property(De,null!==(c=r.bootstrap)&&void 0!==c&&c.isIdentifiedID?"identified":"anonymous"),this.register({distinct_id:r.bootstrap.distinctID,$device_id:d})}if(this._hasBootstrappedFeatureFlags()){var f,p,g=Object.keys((null===(f=r.bootstrap)||void 0===f?void 0:f.featureFlags)||{}).filter((e=>{var t,n
return!(null===(t=r.bootstrap)||void 0===t||null===(n=t.featureFlags)||void 0===n||!n[e])})).reduce(((e,t)=>{var n,i
return e[t]=(null===(n=r.bootstrap)||void 0===n||null===(i=n.featureFlags)||void 0===i?void 0:i[t])||!1,e}),{}),_=Object.keys((null===(p=r.bootstrap)||void 0===p?void 0:p.featureFlagPayloads)||{}).filter((e=>g[e])).reduce(((e,t)=>{var n,i,s,o
return null!==(n=r.bootstrap)&&void 0!==n&&null!==(i=n.featureFlagPayloads)&&void 0!==i&&i[t]&&(e[t]=null===(s=r.bootstrap)||void 0===s||null===(o=s.featureFlagPayloads)||void 0===o?void 0:o[t]),e}),{})
this.featureFlags.receivedFeatureFlags({featureFlags:g,featureFlagPayloads:_})}if(!this.get_distinct_id()){var v=this.config.get_device_id(st())
this.register_once({distinct_id:v,$device_id:v},""),this.persistence.set_property(De,"anonymous")}return null==h||null===(i=h.addEventListener)||void 0===i||i.call(h,"onpagehide"in self?"pagehide":"unload",this._handle_unload.bind(this)),this.toolbar.maybeLoadToolbar(),r.segment?function(e,t){var n=e.config.segment
if(!n)return t()
!function(e,t){var n=e.config.segment
if(!n)return t()
var i=n=>{var i=()=>n.anonymousId()||st()
e.config.get_device_id=i,n.id()&&(e.register({distinct_id:n.id(),$device_id:i()}),e.persistence.set_property(De,"identified")),t()},r=n.user()
"then"in r&&Q(r.then)?r.then((e=>i(e))):i(r)}(e,(()=>{n.register((e=>{Promise&&Promise.resolve||ae.warn("This browser does not have Promise support, and can not use the segment integration")
var t=(t,n)=>{var i
if(!n)return t
t.event.userId||t.event.anonymousId===e.get_distinct_id()||(ae.info("Segment integration does not have a userId set, resetting PostHog"),e.reset()),t.event.userId&&t.event.userId!==e.get_distinct_id()&&(ae.info("Segment integration has a userId set, identifying with PostHog"),e.identify(t.event.userId))
var r=e._calculate_event_properties(n,null!==(i=t.event.properties)&&void 0!==i?i:{},new Date)
return t.event.properties=Object.assign({},r,t.event.properties),t}
return{name:"PostHog JS",type:"enrichment",version:"1.0.0",isLoaded:()=>!0,load:()=>Promise.resolve(),track:e=>t(e,e.event.event),page:e=>t(e,"$pageview"),identify:e=>t(e,"$identify"),screen:e=>t(e,"$screen")}})(e)).then((()=>{t()}))}))}(this,(()=>this._loaded())):this._loaded(),Q(this.config._onCapture)&&this.config._onCapture!==Hs&&(ae.warn("onCapture is deprecated. Please use `before_send` instead"),this.on("eventCaptured",(e=>this.config._onCapture(e.event,e)))),this}_afterDecideResponse(e){var t,n,i,r,s,o,a,l,c,u
this.compression=void 0,e.supportedCompression&&!this.config.disable_compression&&(this.compression=R(e.supportedCompression,B.GZipJS)?B.GZipJS:R(e.supportedCompression,B.Base64)?B.Base64:void 0),null!==(t=e.analytics)&&void 0!==t&&t.endpoint&&(this.analyticsDefaultEndpoint=e.analytics.endpoint),this.set_config({person_profiles:this._initialPersonProfilesConfig?this._initialPersonProfilesConfig:e.defaultIdentifiedOnly?"identified_only":"always"}),null===(n=this.siteApps)||void 0===n||n.afterDecideResponse(e),null===(i=this.sessionRecording)||void 0===i||i.afterDecideResponse(e),null===(r=this.autocapture)||void 0===r||r.afterDecideResponse(e),null===(s=this.heatmaps)||void 0===s||s.afterDecideResponse(e),null===(o=this.experiments)||void 0===o||o.afterDecideResponse(e),null===(a=this.surveys)||void 0===a||a.afterDecideResponse(e),null===(l=this.webVitalsAutocapture)||void 0===l||l.afterDecideResponse(e),null===(c=this.exceptionObserver)||void 0===c||c.afterDecideResponse(e),null===(u=this.deadClicksAutocapture)||void 0===u||u.afterDecideResponse(e)}_loaded(){var e=this.config.advanced_disable_decide
e||this.featureFlags.setReloadingPaused(!0)
try{this.config.loaded(this)}catch(e){ae.critical("`loaded` function failed",e)}this._start_queue_if_opted_in(),this.config.capture_pageview&&setTimeout((()=>{this.consent.isOptedIn()&&this._captureInitialPageview()}),1),e||(new tr(this).call(),this.featureFlags.resetRequestQueue())}_start_queue_if_opted_in(){var e
this.has_opted_out_capturing()||this.config.request_batching&&(null===(e=this._requestQueue)||void 0===e||e.enable())}_dom_loaded(){this.has_opted_out_capturing()||T(this.__request_queue,(e=>this._send_retriable_request(e))),this.__request_queue=[],this._start_queue_if_opted_in()}_handle_unload(){var e,t
this.config.request_batching?(this._shouldCapturePageleave()&&this.capture("$pageleave"),null===(e=this._requestQueue)||void 0===e||e.unload(),null===(t=this._retryQueue)||void 0===t||t.unload()):this._shouldCapturePageleave()&&this.capture("$pageleave",null,{transport:"sendBeacon"})}_send_request(e){this.__loaded&&(Us?this.__request_queue.push(e):this.rateLimiter.isServerRateLimited(e.batchKey)||(e.transport=e.transport||this.config.api_transport,e.url=cr(e.url,{ip:this.config.ip?1:0}),e.headers=ue({},this.config.request_headers),e.compression="best-available"===e.compression?this.compression:e.compression,(e=>{var t,n,i,r=ue({},e)
r.timeout=r.timeout||6e4,r.url=cr(r.url,{_:(new Date).getTime().toString(),ver:x.LIB_VERSION,compression:r.compression})
var s=null!==(t=r.transport)&&void 0!==t?t:"XHR",o=null!==(n=null===(i=D(dr,(e=>e.transport===s)))||void 0===i?void 0:i.method)&&void 0!==n?n:dr[0].method
if(!o)throw new Error("No available transport method")
o(r)})(ue(ue({},e),{},{callback:t=>{var n,i,r
this.rateLimiter.checkForLimiting(t),t.statusCode>=400&&(null===(i=(r=this.config).on_request_error)||void 0===i||i.call(r,t)),null===(n=e.callback)||void 0===n||n.call(e,t)}}))))}_send_retriable_request(e){this._retryQueue?this._retryQueue.retriableRequest(e):this._send_request(e)}_execute_array(e){var t,n=[],i=[],r=[]
T(e,(e=>{e&&(t=e[0],V(t)?r.push(e):Q(e)?e.call(this):V(e)&&"alias"===t?n.push(e):V(e)&&-1!==t.indexOf("capture")&&Q(this[t])?r.push(e):i.push(e))}))
var s=function(e,t){T(e,(function(e){if(V(e[0])){var n=t
I(e,(function(e){n=n[e[0]].apply(n,e.slice(1))}))}else this[e[0]].apply(this,e.slice(1))}),t)}
s(n,this),s(i,this),s(r,this)}_hasBootstrappedFeatureFlags(){var e,t
return(null===(e=this.config.bootstrap)||void 0===e?void 0:e.featureFlags)&&Object.keys(null===(t=this.config.bootstrap)||void 0===t?void 0:t.featureFlags).length>0||!1}push(e){this._execute_array([e])}capture(e,t,n){var i
if(this.__loaded&&this.persistence&&this.sessionPersistence&&this._requestQueue){if(!this.consent.isOptedOut())if(!X(e)&&Y(e)){if(this.config.opt_out_useragent_filter||!this._is_bot()){var r=null!=n&&n.skip_client_rate_limiting?void 0:this.rateLimiter.clientRateLimitContext()
if(null==r||!r.isRateLimited){this.sessionPersistence.update_search_keyword(),this.config.store_google&&this.sessionPersistence.update_campaign_params(),this.config.save_referrer&&this.sessionPersistence.update_referrer_info(),(this.config.store_google||this.config.save_referrer)&&this.persistence.set_initial_person_info()
var s=new Date,o=(null==n?void 0:n.timestamp)||s,a={uuid:st(),event:e,properties:this._calculate_event_properties(e,t||{},o)}
r&&(a.properties.$lib_rate_limit_remaining_tokens=r.remainingTokens),(null==n?void 0:n.$set)&&(a.$set=null==n?void 0:n.$set)
var l=this._calculate_set_once_properties(null==n?void 0:n.$set_once)
l&&(a.$set_once=l),(a=function(e,t){return n=e,i=e=>Y(e)&&!ee(t)?e.slice(0,t):e,r=new Set,function e(t,n){return t!==Object(t)?i?i(t):t:r.has(t)?void 0:(r.add(t),V(t)?(s=[],T(t,(t=>{s.push(e(t))}))):(s={},I(t,((t,n)=>{r.has(t)||(s[n]=e(t,n))}))),s)
var s}(n)
var n,i,r}(a,null!=n&&n._noTruncate?null:this.config.properties_string_max_length)).timestamp=o,X(null==n?void 0:n.timestamp)||(a.properties.$event_time_override_provided=!0,a.properties.$event_time_override_system_time=s)
var c=ue(ue({},a.properties.$set),a.$set)
if(K(c)||this.setPersonPropertiesForFlags(c),!te(this.config.before_send)){var u=this._runBeforeSend(a)
if(!u)return
a=u}this._internalEventEmitter.emit("eventCaptured",a)
var d={method:"POST",url:null!==(i=null==n?void 0:n._url)&&void 0!==i?i:this.requestRouter.endpointFor("api",this.analyticsDefaultEndpoint),data:a,compression:"best-available",batchKey:null==n?void 0:n._batchKey}
return!this.config.request_batching||n&&(null==n||!n._batchKey)||null!=n&&n.send_instantly?this._send_retriable_request(d):this._requestQueue.enqueue(d),a}ae.critical("This capture call is ignored due to client rate limiting.")}}else ae.error("No event name provided to posthog.capture")}else ae.uninitializedWarning("posthog.capture")}_addCaptureHook(e){return this.on("eventCaptured",(t=>e(t.event,t)))}_calculate_event_properties(e,t,n){if(n=n||new Date,!this.persistence||!this.sessionPersistence)return t
var i=this.persistence.remove_event_timer(e),r=ue({},t)
if(r.token=this.config.token,"$snapshot"===e){var s=ue(ue({},this.persistence.properties()),this.sessionPersistence.properties())
return r.distinct_id=s.distinct_id,(!Y(r.distinct_id)&&!ne(r.distinct_id)||Z(r.distinct_id))&&ae.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),r}var o=bn.properties()
if(this.sessionManager){var{sessionId:a,windowId:l}=this.sessionManager.checkAndGetSessionAndWindowId()
r.$session_id=a,r.$window_id=l}if(this.requestRouter.region===hr.CUSTOM&&(r.$lib_custom_api_host=this.config.api_host),this.sessionPropsManager&&this.config.__preview_send_client_session_params&&("$pageview"===e||"$pageleave"===e||"$autocapture"===e)){var c=this.sessionPropsManager.getSessionProps()
r=L(r,c)}if(!this.config.disable_scroll_properties){var u={}
"$pageview"===e?u=this.pageViewManager.doPageView(n):"$pageleave"===e&&(u=this.pageViewManager.doPageLeave(n)),r=L(r,u)}if("$pageview"===e&&m&&(r.title=m.title),!X(i)){var d=n.getTime()-i
r.$duration=parseFloat((d/1e3).toFixed(3))}S&&this.config.opt_out_useragent_filter&&(r.$browser_type=this._is_bot()?"bot":"browser"),(r=L({},o,this.persistence.properties(),this.sessionPersistence.properties(),r)).$is_identified=this._isIdentified(),V(this.config.property_denylist)?I(this.config.property_denylist,(function(e){delete r[e]})):ae.error("Invalid value for property_denylist config: "+this.config.property_denylist+" or property_blacklist config: "+this.config.property_blacklist)
var h=this.config.sanitize_properties
h&&(r=h(r,e))
var f=this._hasPersonProcessing()
return r.$process_person_profile=f,f&&this._requirePersonProcessing("_calculate_event_properties"),r}_calculate_set_once_properties(e){if(!this.persistence||!this._hasPersonProcessing())return e
var t=L({},this.persistence.get_initial_props(),e||{}),n=this.config.sanitize_properties
return n&&(t=n(t,"$set_once")),K(t)?void 0:t}register(e,t){var n
null===(n=this.persistence)||void 0===n||n.register(e,t)}register_once(e,t,n){var i
null===(i=this.persistence)||void 0===i||i.register_once(e,t,n)}register_for_session(e){var t
null===(t=this.sessionPersistence)||void 0===t||t.register(e)}unregister(e){var t
null===(t=this.persistence)||void 0===t||t.unregister(e)}unregister_for_session(e){var t
null===(t=this.sessionPersistence)||void 0===t||t.unregister(e)}_register_single(e,t){this.register({[e]:t})}getFeatureFlag(e,t){return this.featureFlags.getFeatureFlag(e,t)}getFeatureFlagPayload(e){var t=this.featureFlags.getFeatureFlagPayload(e)
try{return JSON.parse(t)}catch(e){return t}}isFeatureEnabled(e,t){return this.featureFlags.isFeatureEnabled(e,t)}reloadFeatureFlags(){this.featureFlags.reloadFeatureFlags()}updateEarlyAccessFeatureEnrollment(e,t){this.featureFlags.updateEarlyAccessFeatureEnrollment(e,t)}getEarlyAccessFeatures(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return this.featureFlags.getEarlyAccessFeatures(e,t)}on(e,t){return this._internalEventEmitter.on(e,t)}onFeatureFlags(e){return this.featureFlags.onFeatureFlags(e)}onSessionId(e){var t,n
return null!==(t=null===(n=this.sessionManager)||void 0===n?void 0:n.onSessionId(e))&&void 0!==t?t:()=>{}}getSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.surveys.getSurveys(e,t)}getActiveMatchingSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.surveys.getActiveMatchingSurveys(e,t)}renderSurvey(e,t){this.surveys.renderSurvey(e,t)}canRenderSurvey(e){this.surveys.canRenderSurvey(e)}getNextSurveyStep(e,t,n){return this.surveys.getNextSurveyStep(e,t,n)}identify(e,t,n){if(!this.__loaded||!this.persistence)return ae.uninitializedWarning("posthog.identify")
if(ne(e)&&(e=e.toString(),ae.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")),e){if(["distinct_id","distinctid"].includes(e.toLowerCase()))ae.critical('The string "'.concat(e,'" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'))
else if(this._requirePersonProcessing("posthog.identify")){var i=this.get_distinct_id()
if(this.register({$user_id:e}),!this.get_property("$device_id")){var r=i
this.register_once({$had_persisted_distinct_id:!0,$device_id:r},"")}e!==i&&e!==this.get_property(pe)&&(this.unregister(pe),this.register({distinct_id:e}))
var s="anonymous"===(this.persistence.get_property(De)||"anonymous")
e!==i&&s?(this.persistence.set_property(De,"identified"),this.setPersonPropertiesForFlags(t||{},!1),this.capture("$identify",{distinct_id:e,$anon_distinct_id:i},{$set:t||{},$set_once:n||{}}),this.featureFlags.setAnonymousDistinctId(i)):(t||n)&&this.setPersonProperties(t,n),e!==i&&(this.reloadFeatureFlags(),this.unregister(Ne))}}else ae.error("Unique user id has not been set in posthog.identify")}setPersonProperties(e,t){(e||t)&&this._requirePersonProcessing("posthog.setPersonProperties")&&(this.setPersonPropertiesForFlags(e||{}),this.capture("$set",{$set:e||{},$set_once:t||{}}))}group(e,t,n){if(e&&t){if(this._requirePersonProcessing("posthog.group")){var i=this.getGroups()
i[e]!==t&&this.resetGroupPropertiesForFlags(e),this.register({$groups:ue(ue({},i),{},{[e]:t})}),n&&(this.capture("$groupidentify",{$group_type:e,$group_key:t,$group_set:n}),this.setGroupPropertiesForFlags({[e]:n})),i[e]===t||n||this.reloadFeatureFlags()}}else ae.error("posthog.group requires a group type and group key")}resetGroups(){this.register({$groups:{}}),this.resetGroupPropertiesForFlags(),this.reloadFeatureFlags()}setPersonPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this._requirePersonProcessing("posthog.setPersonPropertiesForFlags")&&this.featureFlags.setPersonPropertiesForFlags(e,t)}resetPersonPropertiesForFlags(){this.featureFlags.resetPersonPropertiesForFlags()}setGroupPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this._requirePersonProcessing("posthog.setGroupPropertiesForFlags")&&this.featureFlags.setGroupPropertiesForFlags(e,t)}resetGroupPropertiesForFlags(e){this.featureFlags.resetGroupPropertiesForFlags(e)}reset(e){var t,n,i,r,s
if(ae.info("reset"),!this.__loaded)return ae.uninitializedWarning("posthog.reset")
var o=this.get_property("$device_id")
this.consent.reset(),null===(t=this.persistence)||void 0===t||t.clear(),null===(n=this.sessionPersistence)||void 0===n||n.clear(),null===(i=this.surveys)||void 0===i||i.reset(),null===(r=this.persistence)||void 0===r||r.set_property(De,"anonymous"),null===(s=this.sessionManager)||void 0===s||s.resetSessionId()
var a=this.config.get_device_id(st())
this.register_once({distinct_id:a,$device_id:e?a:o},"")}get_distinct_id(){return this.get_property("distinct_id")}getGroups(){return this.get_property("$groups")||{}}get_session_id(){var e,t
return null!==(e=null===(t=this.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0).sessionId)&&void 0!==e?e:""}get_session_replay_url(e){if(!this.sessionManager)return""
var{sessionId:t,sessionStartTimestamp:n}=this.sessionManager.checkAndGetSessionAndWindowId(!0),i=this.requestRouter.endpointFor("ui","/project/".concat(this.config.token,"/replay/").concat(t))
if(null!=e&&e.withTimestamp&&n){var r,s=null!==(r=e.timestampLookBack)&&void 0!==r?r:10
if(!n)return i
var o=Math.max(Math.floor(((new Date).getTime()-n)/1e3)-s,0)
i+="?t=".concat(o)}return i}alias(e,t){return e===this.get_property(fe)?(ae.critical("Attempting to create alias for existing People user - aborting."),-2):this._requirePersonProcessing("posthog.alias")?(X(t)&&(t=this.get_distinct_id()),e!==t?(this._register_single(pe,e),this.capture("$create_alias",{alias:e,distinct_id:t})):(ae.warn("alias matches current distinct_id - skipping api call."),this.identify(e),-1)):void 0}set_config(e){var t,n,i,r,s=ue({},this.config)
J(e)&&(L(this.config,Ws(e)),null===(t=this.persistence)||void 0===t||t.update_config(this.config,s),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new kn(ue(ue({},this.config),{},{persistence:"sessionStorage"})),dt.is_supported()&&"true"===dt.get("ph_debug")&&(this.config.debug=!0),this.config.debug&&(x.DEBUG=!0,ae.info("set_config",{config:e,oldConfig:s,newConfig:ue({},this.config)})),null===(n=this.sessionRecording)||void 0===n||n.startIfEnabledOrStop(),null===(i=this.autocapture)||void 0===i||i.startIfEnabled(),null===(r=this.heatmaps)||void 0===r||r.startIfEnabled(),this.surveys.loadIfEnabled(),this._sync_opt_out_with_persistence())}startSessionRecording(e){var t,n,i,r,s,o=!0===e,a={sampling:o||!(null==e||!e.sampling),linked_flag:o||!(null==e||!e.linked_flag),url_trigger:o||!(null==e||!e.url_trigger),event_trigger:o||!(null==e||!e.event_trigger)}
Object.values(a).some(Boolean)&&(null===(t=this.sessionManager)||void 0===t||t.checkAndGetSessionAndWindowId(),a.sampling&&(null===(n=this.sessionRecording)||void 0===n||n.overrideSampling()),a.linked_flag&&(null===(i=this.sessionRecording)||void 0===i||i.overrideLinkedFlag()),a.url_trigger&&(null===(r=this.sessionRecording)||void 0===r||r.overrideTrigger("url")),a.event_trigger&&(null===(s=this.sessionRecording)||void 0===s||s.overrideTrigger("event")))
this.set_config({disable_session_recording:!1})}stopSessionRecording(){this.set_config({disable_session_recording:!0})}sessionRecordingStarted(){var e
return!(null===(e=this.sessionRecording)||void 0===e||!e.started)}captureException(e,t){var n,i=new Error("PostHog syntheticException"),r=Q(null===(n=E.__PosthogExtensions__)||void 0===n?void 0:n.parseErrorAsProperties)?E.__PosthogExtensions__.parseErrorAsProperties([e.message,void 0,void 0,void 0,e],{syntheticException:i}):ue({$exception_level:"error",$exception_list:[{type:e.name,value:e.message,mechanism:{handled:!0,synthetic:!1}}]},t)
this.exceptions.sendExceptionEvent(r)}loadToolbar(e){return this.toolbar.loadToolbar(e)}get_property(e){var t
return null===(t=this.persistence)||void 0===t?void 0:t.props[e]}getSessionProperty(e){var t
return null===(t=this.sessionPersistence)||void 0===t?void 0:t.props[e]}toString(){var e,t=null!==(e=this.config.name)&&void 0!==e?e:qs
return t!==qs&&(t=qs+"."+t),t}_isIdentified(){var e,t
return"identified"===(null===(e=this.persistence)||void 0===e?void 0:e.get_property(De))||"identified"===(null===(t=this.sessionPersistence)||void 0===t?void 0:t.get_property(De))}_hasPersonProcessing(){var e,t,n,i
return!("never"===this.config.person_profiles||"identified_only"===this.config.person_profiles&&!this._isIdentified()&&K(this.getGroups())&&(null===(e=this.persistence)||void 0===e||null===(t=e.props)||void 0===t||!t[pe])&&(null===(n=this.persistence)||void 0===n||null===(i=n.props)||void 0===i||!i[We]))}_shouldCapturePageleave(){return!0===this.config.capture_pageleave||"if_capture_pageview"===this.config.capture_pageleave&&this.config.capture_pageview}createPersonProfile(){this._hasPersonProcessing()||this._requirePersonProcessing("posthog.createPersonProfile")&&this.setPersonProperties({},{})}_requirePersonProcessing(e){return"never"===this.config.person_profiles?(ae.error(e+' was called, but process_person is set to "never". This call will be ignored.'),!1):(this._register_single(We,!0),!0)}_sync_opt_out_with_persistence(){var e,t,n,i,r=this.consent.isOptedOut(),s=this.config.opt_out_persistence_by_default,o=this.config.disable_persistence||r&&!!s;(null===(e=this.persistence)||void 0===e?void 0:e.disabled)!==o&&(null===(n=this.persistence)||void 0===n||n.set_disabled(o)),(null===(t=this.sessionPersistence)||void 0===t?void 0:t.disabled)!==o&&(null===(i=this.sessionPersistence)||void 0===i||i.set_disabled(o))}opt_in_capturing(e){var t
this.consent.optInOut(!0),this._sync_opt_out_with_persistence(),(X(null==e?void 0:e.captureEventName)||null!=e&&e.captureEventName)&&this.capture(null!==(t=null==e?void 0:e.captureEventName)&&void 0!==t?t:"$opt_in",null==e?void 0:e.captureProperties,{send_instantly:!0}),this.config.capture_pageview&&this._captureInitialPageview()}opt_out_capturing(){this.consent.optInOut(!1),this._sync_opt_out_with_persistence()}has_opted_in_capturing(){return this.consent.isOptedIn()}has_opted_out_capturing(){return this.consent.isOptedOut()}clear_opt_in_out_capturing(){this.consent.reset(),this._sync_opt_out_with_persistence()}_is_bot(){return v?gs(v,this.config.custom_blocked_useragents):void 0}_captureInitialPageview(){m&&!this._initialPageviewCaptured&&(this._initialPageviewCaptured=!0,this.capture("$pageview",{title:m.title},{send_instantly:!0}))}debug(e){!1===e?(null==h||h.console.log("You've disabled debug mode."),localStorage&&localStorage.removeItem("ph_debug"),this.set_config({debug:!1})):(null==h||h.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),localStorage&&localStorage.setItem("ph_debug","true"),this.set_config({debug:!0}))}_runBeforeSend(e){if(te(this.config.before_send))return e
var t=V(this.config.before_send)?this.config.before_send:[this.config.before_send],n=e
for(var i of t){if(n=i(n),te(n)){var r="Event '".concat(e.event,"' was rejected in beforeSend function")
return se(e.event)?ae.warn("".concat(r,". This can cause unexpected behavior.")):ae.info(r),null}n.properties&&!K(n.properties)||ae.warn("Event '".concat(e.event,"' has no properties after beforeSend function, this is likely an error."))}return n}}!function(e,t){for(var n=0;n<t.length;n++)e.prototype[t[n]]=A(e.prototype[t[n]])}(Vs,["identify"])
var Qs,Js=(Qs=Bs[qs]=new Vs,function(){function e(){e.done||(e.done=!0,Us=!1,I(Bs,(function(e){e._dom_loaded()})))}null!=m&&m.addEventListener&&("complete"===m.readyState?e():m.addEventListener("DOMContentLoaded",e,!1)),h&&N(h,"load",e,!0)}(),Qs)
function Ks(...e){console.log(...e)}function Xs(e,t){Js.capture(e,t)}function Ys(){"string"==typeof window.self&&(s(),window.self=window),function(){try{Js.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N",{advanced_disable_decide:!0,advanced_disable_feature_flags:!0,advanced_disable_feature_flags_on_first_load:!0,advanced_disable_toolbar_metrics:!0,api_host:"https://us.i.posthog.com",autocapture:!1,capture_pageview:!1,disable_compression:!1,disable_persistence:!0,disable_session_recording:!0,disable_surveys:!0,person_profiles:"identified_only"})}catch(e){Ks(e)}}()}let Zs=0,eo=0,to=0,no=0,io=0,ro=0,so=0
const oo=()=>Date.now(),ao=()=>Math.floor(oo()/1e3)
function lo(){return Zs||(Zs=oo()),Zs}function co(){return eo||(eo=lo()-3e5),eo}function uo(){return to||(to=lo()-1728e5),to}function ho(){return no||(no=Math.floor(lo()/1e3)),no}function fo(){return io||(io=ho()-120),io}function po(){return ro||(ro=ho()-86400),ro}function go(){return so||(so=ho()-604800),so}function _o(e){return null===e}function vo(e){return void 0===e}const mo=`${document.location.protocol}//${document.location.host}/`,yo=window.HCS?.defines?.cdn,bo=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],wo=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],ko=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],So=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,Eo=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,xo=/guild_id=(?<guildId>\d+)/,Po=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,Co=/player_id=(?<playerId>\d+)/,To=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,$o=/VL:.+?(?<vl>\d+)/,Io=.2,Lo="joinallgroupsundersize",Ro="index.php",Oo="?cmd=",Fo=`${Ro}${Oo}`,Ao="&subcmd=",Mo="&target_username=",jo=`${Fo}auctionhouse`,No=`${jo}&search=`,Do=`${Fo}log`,Bo=`${Fo}ignore${Ao}add&ignore_username=`,Ho=`${Fo}profile`,qo=`${Ho}&player_id=`,Uo=`${Ho}${Ao}dropitems`,Go=`${Fo}trade&target_player=`,Wo=`${Fo}trade${Ao}createsecure${Mo}`,zo=`${Fo}arena${Ao}`,Vo=`${Ro}${`${Oo}notepad&blank=1${Ao}`}`,Qo=`${Vo}auctionsearch`,Jo=`${Fo}points`,Ko=`${Fo}guild${Ao}`,Xo=`${Ko}log`,Yo=`${Ko}scouttower`,Zo=`${Ko}groups&subcmd2=`,ea=`${Ko}inventory&subcmd2=report&user=`,ta=`${Ko}view&guild_id=`,na=`${Zo}joinall`,ia=`${Zo}${Lo}`,ra=`${Fo}world`,sa=`${Fo}findplayer`,oa=`${sa}&search_show_first=1&search_username=`,aa=`${Fo}blacksmith`,la=`${Fo}quickbuff`,ca=`${Fo}composing`,ua=`${Fo}attackplayer${Mo}`,da=`${Fo}${Ao}viewupdatearchive`,ha=`${Fo}${Ao}viewarchive`,fa=`${Fo}bounty`,pa=`${Fo}inventing${Ao}viewrecipe&recipe_id=`,ga=`https://guide.fallensword.com/${Fo}`,_a="after-update.actionlist",va="buffs.player",ma="update.player",ya="level.stats-player",ba="gold.stats-player",wa="prompt.worldDialogShop",ka="keydown.controls",Sa="update.realm",Ea="-success.action-response",xa=`-1${Ea}`,Pa=`1${Ea}`,Ca=`2${Ea}`,Ta=`9${Ea}`,$a=`5${Ea}`,Ia=`25${Ea}`,La=1,Ra=2,Oa=16,Fa=128,Aa=256,Ma="needToCompose",ja="lastComposeCheck",Na="characterVirtualLevel",Da="enableGuildActivityTracker",Ba="lastLadderReset",Ha="form",qa="table",Ua="td",Ga="tr",Wa="fsh_buffLog",za="statbar-level-tooltip-general",Va="stat-level",Qa="stat-defense",Ja="stat-attack",Ka="stat-damage",Xa="stat-armor",Ya="stat-hp",Za="stat-vl",el="GM_",tl=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],nl=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],il=`${yo}ui/world/action_spinner.gif`,rl=".fa-envelope",sl='a[href*="&player_id="]',ol=.002,al=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],ll='input[name="blockedSkillList[]"]'
var cl={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addServerNode:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252",compactRanks:!1,lastModalGuildLogCheck:0}
const ul=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function dl(e,t){const n=window.localStorage.getItem(el+e)
return _o(n)||vo(n)?t:function(e){const t=ul.find((t=>e.startsWith(t[0])))
return t?t[1](e):e}(n)}function hl(e){return dl(e,cl[e])}function fl(e){return"boolean"==typeof e}function pl(e){return"string"==typeof e}function gl(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(el+e,t+n)}const _l=[[pl,(e,t)=>{gl(e,"S]",t)}],[e=>"number"==typeof e,(e,t)=>{t.toString().indexOf(".")<0&&gl(e,"N]",t)}],[fl,(e,t)=>{gl(e,"B]",t)}]]
function vl(e,t){const n=_l.find((e=>e[0](t)))
n&&n[1](e,t)}function ml(e){const t=`screenview__${e}`,n=hl(t)
Number.isFinite(n)&&n>po()||(Xs(t),vl(t,ho()))}function yl(e){return"function"==typeof e}function bl(e){return"object"==typeof e}function wl(e,t){try{return JSON.parse(e,t)}catch(e){}}function kl(e,t){return t?t.querySelector(e):document.querySelector(e)}function Sl(e){const t=kl("link",document.body)
return new Promise((n=>{const i=document.createElement("link")
i.type="text/css",i.rel="stylesheet",i.onload=()=>{n()},i.href=e,t?t.before(i):document.body.append(i)}))}var El="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function xl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pl,Cl={exports:{}}
var Tl=(Pl||(Pl=1,Cl.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==El?El:"undefined"!=typeof self?self:{}
function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){var t=e.default
if("function"==typeof t){var n=function(){return t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),n}var i={},r={},s={},o={},a="<unknown>"
function l(e){return e.split("\n").reduce((function(e,t){var n=d(t)||f(t)||_(t)||b(t)||m(t)
return n&&e.push(n),e}),[])}var c=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,u=/\((\S*)(?::(\d+))(?::(\d+))\)/
function d(e){var t=c.exec(e)
if(!t)return null
var n=t[2]&&0===t[2].indexOf("native"),i=t[2]&&0===t[2].indexOf("eval"),r=u.exec(t[2])
return i&&null!=r&&(t[2]=r[1],t[3]=r[2],t[4]=r[3]),{file:n?null:t[2],methodName:t[1]||a,arguments:n?[t[2]]:[],lineNumber:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}var h=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
function f(e){var t=h.exec(e)
return t?{file:t[2],methodName:t[1]||a,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var p=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,g=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i
function _(e){var t=p.exec(e)
if(!t)return null
var n=t[3]&&t[3].indexOf(" > eval")>-1,i=g.exec(t[3])
return n&&null!=i&&(t[3]=i[1],t[4]=i[2],t[5]=null),{file:t[3],methodName:t[1]||a,arguments:t[2]?t[2].split(","):[],lineNumber:t[4]?+t[4]:null,column:t[5]?+t[5]:null}}var v=/^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i
function m(e){var t=v.exec(e)
return t?{file:t[3],methodName:t[1]||a,arguments:[],lineNumber:+t[4],column:t[5]?+t[5]:null}:null}var y=/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i
function b(e){var t=y.exec(e)
return t?{file:t[2],methodName:t[1]||a,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var w=n(Object.freeze({__proto__:null,parse:l}));(function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n)
var r=Object.getOwnPropertyDescriptor(t,n)
r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),i=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r)
return i(t,e),t},s=e&&e.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function o(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):r(e.value).then(o,a)}l((i=i.apply(e,t||[])).next())}))},o=e&&e.__generator||function(e,t){var n,i,r,s,o={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,i&&(r=2&s[0]?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r
switch(i=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,i=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){o.label=s[1]
break}if(6===s[0]&&o.label<r[1]){o.label=r[1],r=s
break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(s)
break}r[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],i=0}finally{n=r=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}}
Object.defineProperty(t,"__esModule",{value:!0}),t.logDeprecatedMethod=t.globalThisOrWindow=t.isBrowserConfig=t.clone=t.formatCGIData=t.filterUrl=t.filter=t.generateStackTrace=t.endpoint=t.instrumentConsole=t.instrument=t.isErrorObject=t.makeNotice=t.logger=t.sanitize=t.shallowClone=t.runAfterNotifyHandlers=t.runBeforeNotifyHandlers=t.getSourceForBacktrace=t.getCauses=t.calculateBacktraceShift=t.DEFAULT_BACKTRACE_SHIFT=t.makeBacktrace=t.objectIsExtensible=t.objectIsEmpty=t.mergeNotice=t.merge=void 0
var a=r(w)
function l(e,t){var n={}
for(var i in e)n[i]=e[i]
for(var i in t)n[i]=t[i]
return n}function c(e,t){var n=l(e,t)
return e.context&&t.context&&(n.context=l(e.context,t.context)),n}function u(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1
return!0}function d(e){return"function"!=typeof Object.isExtensible||Object.isExtensible(e)}function h(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=console),!e)return[]
try{var i=a.parse(e).map((function(e){return{file:e.file,method:e.methodName,number:e.lineNumber,column:e.column}}))
return t&&i.splice(0,p(i)),i}catch(e){return n.debug(e),[]}}function f(e){var t=!1,n=!1
return e.file&&(t=e.file.toLowerCase().indexOf("@honeybadger-io")>-1),e.method&&(n=e.method.toLowerCase().indexOf("@honeybadger-io")>-1),t||n}function p(e){for(var n=0,i=0;i<e.length;i++){var r=e[i]
if(!f(r)){if(!r.file||"<anonymous>"===r.file){var s=e[i+1]
if(s&&f(s)){n++
continue}}break}n++}return n||t.DEFAULT_BACKTRACE_SHIFT}function g(e,t){if(e.cause){for(var n=[],i=e;n.length<3&&(i=i.cause);)n.push({class:i.name,message:i.message,backtrace:"string"==typeof i.stack?h(i.stack,!1,t):null})
return n}return[]}function _(e,t){return s(this,void 0,void 0,(function(){var n,i,r,s
return o(this,(function(o){switch(o.label){case 0:if(n=[],!t||!e||!e.length)return[2,n]
i=0,o.label=1
case 1:return e.length?(r=e.splice(0)[i],[4,t(r.file)]):[3,3]
case 2:return s=o.sent(),n[i]=j(s,r.number),i++,[3,1]
case 3:return[2,n]}}))}))}function v(e,t){for(var n=[],i=!0,r=0,s=t.length;r<s;r++){var o=(0,t[r])(e)
!1===o&&(i=!1),n.push(o)}return{results:n,result:i}}function m(e,t,n){e&&e.afterNotify&&e.afterNotify(n,e)
for(var i=0,r=t.length;i<r;i++)t[i](n,e)
return!0}function y(e){if("object"!=typeof e||null===e)return{}
var t={}
for(var n in e)t[n]=e[n]
return t}function b(e,t){void 0===t&&(t=8)
var n=[]
function i(e){if(!e||"object"!=typeof e)return!1
for(var t=0;t<n.length;t++)if(n[t]===e)return!0
return n.push(e),!1}function r(e){var t=typeof e
return/function/.test(t)?"toJSON"===e.name:!/symbol/.test(t)&&null!==e&&("object"!=typeof e||void 0!==e.hasOwnProperty)}function s(e,n){if(void 0===n&&(n=0),n>=t)return"[DEPTH]"
if(!r(e))return Object.prototype.toString.call(e)
if(i(e))return"[RECURSION]"
if(Array.isArray(e))return e.map((function(e){return o(e,n+1)}))
if("object"==typeof e){var s={}
for(var a in e){var l=e[a]
Object.prototype.hasOwnProperty.call(e,a)&&null!=a&&null!=l&&(s[a]=o(l,n+1))}return s}return e}function o(e,t){void 0===t&&(t=0)
try{return s(e,t)}catch(e){return"[ERROR] ".concat(e)}}return o(e)}function k(e){var t=function(t){return function(){for(var n,i=[],r=0;r<arguments.length;r++)i[r]=arguments[r]
if("debug"===t){if(!e.config.debug)return
t="log"}i.unshift("[Honeybadger]"),(n=e.config.logger)[t].apply(n,i)}}
return{log:t("log"),info:t("info"),debug:t("debug"),warn:t("warn"),error:t("error")}}function S(e){var t
if(e)if(E(e)){var n=e
t=l(e,{name:n.name,message:n.message,stack:n.stack,cause:n.cause})}else t="object"==typeof e?y(e):{message:String(e)}
else t={}
return t}function E(e){return e instanceof Error||"[object Error]"===Object.prototype.toString.call(e)}function x(e,t,n){if(e&&t&&n&&t in e)try{for(var i=e[t];i&&i.__hb_original;)i=i.__hb_original
e[t]=n(i),e[t].__hb_original=i}catch(e){}}t.merge=l,t.mergeNotice=c,t.objectIsEmpty=u,t.objectIsExtensible=d,t.makeBacktrace=h,t.DEFAULT_BACKTRACE_SHIFT=3,t.calculateBacktraceShift=p,t.getCauses=g,t.getSourceForBacktrace=_,t.runBeforeNotifyHandlers=v,t.runAfterNotifyHandlers=m,t.shallowClone=y,t.sanitize=b,t.logger=k,t.makeNotice=S,t.isErrorObject=E,t.instrument=x
var P=!1,C=[]
function T(e,t){e&&e.console&&t&&(C.push(t),P||(P=!0,["debug","info","warn","error","log"].forEach((function(t){x(e.console,t,(function(n){return function(){var i=Array.prototype.slice.call(arguments)
C.forEach((function(e){try{e(t,i)}catch(e){}})),"function"==typeof n&&Function.prototype.apply.call(n,e.console,arguments)}}))}))))}function $(e,t){var n=e.trim().replace(/\/$/,"")
return t=t.trim().replace(/(^\/|\/$)/g,""),"".concat(n,"/").concat(t)}function I(){try{throw new Error("")}catch(e){if(e.stack)return e.stack}for(var e=10,t=[],n=arguments.callee;n&&t.length<e;){/function(?:\s+([\w$]+))+\s*\(/.test(n.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>")
try{n=n.caller}catch(e){break}}return t.join("\n")}function L(e,t){if(O("Object",e)){O("Array",t)||(t=[])
var n=[]
return i(e)}function i(e){var r,s
if(O("Object",e)||O("Array",e)){if(-1!==n.indexOf(e))return"[CIRCULAR DATA STRUCTURE]"
n.push(e)}if(O("Object",e)){for(r in s={},e)R(r,t)?s[r]="[FILTERED]":s[r]=i(e[r])
return s}return O("Array",e)?e.map((function(e){return i(e)})):O("Function",e)?"[FUNC]":e}}function R(e,t){for(var n=0;n<t.length;n++)if(-1!==e.toLowerCase().indexOf(t[n].toLowerCase()))return!0
return!1}function O(e,t){var n=Object.prototype.toString.call(t).slice(8,-1)
return null!=t&&n===e}function F(e,t){if(!t)return e
if("string"!=typeof e)return e
var n=e.split(/\?/,2)[1]
if(!n)return e
var i=e
return n.split(/[&]\s?/).forEach((function(e){var n=e.split("=",2),r=n[0],s=n[1]
R(r,t)&&(i=i.replace("".concat(r,"=").concat(s),"".concat(r,"=[FILTERED]")))})),i}function A(e,t){void 0===t&&(t="")
var n={}
return Object.keys(e).forEach((function(i){var r=t+i.replace(/\W/g,"_").toUpperCase()
n[r]=e[i]})),n}function M(e){return JSON.parse(JSON.stringify(e))}function j(e,t,n){if(void 0===n&&(n=2),!e)return null
var i=e.split("\n")
i.unshift("")
for(var r=t+n,s={},o=t-n;o<=r;o++){var a=i[o]
"string"==typeof a&&(s[o]=a)}return s}function N(e){return void 0!==e.async}function D(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window}t.instrumentConsole=T,t.endpoint=$,t.generateStackTrace=I,t.filter=L,t.filterUrl=F,t.formatCGIData=A,t.clone=M,t.isBrowserConfig=N,t.globalThisOrWindow=D
var B={}
function H(e,t,n,i){void 0===i&&(i=100)
var r="".concat(t,"-").concat(n)
if(void 0===B[r]&&(B[r]=0),B[r]%i==0){var s="Deprecation warning: ".concat(t," has been deprecated; please use ").concat(n," instead.")
e.warn(s),B[r]++}else B[r]++}t.logDeprecatedMethod=H})(o),Object.defineProperty(s,"__esModule",{value:!0})
var k=o
function S(e){return void 0===e&&(e=(0,k.globalThisOrWindow)()),{shouldReloadOnConfigure:!1,load:function(t){function n(){return t.config.eventsEnabled}n()&&(0,k.instrumentConsole)(e,(function(e,i){if(n()&&0!==i.length){var r={severity:e}
"string"==typeof i[0]?(r.message=i[0],r.args=i.slice(1)):r.args=i,t.event("log",r)}}))}}}s.default=S
var E={},x={}
Object.defineProperty(x,"__esModule",{value:!0}),x.GlobalStore=void 0
var P=o,C=function(){function e(e,t){this.contents=e,this.breadcrumbsLimit=t}return e.create=function(t,n){return new e(t,n)},e.prototype.available=function(){return!0},e.prototype.getContents=function(e){var t=e?this.contents[e]:this.contents
return JSON.parse(JSON.stringify(t))},e.prototype.setContext=function(e){this.contents.context=(0,P.merge)(this.contents.context,e||{})},e.prototype.addBreadcrumb=function(e){this.contents.breadcrumbs.length==this.breadcrumbsLimit&&this.contents.breadcrumbs.shift(),this.contents.breadcrumbs.push(e)},e.prototype.clear=function(){this.contents.context={},this.contents.breadcrumbs=[]},e.prototype.run=function(e){return e()},e}()
x.GlobalStore=C
var T={}
class ${static parse(e){return e.trim().split("\n").map((e=>JSON.parse(e)))}static stringify(e){return e.map((e=>JSON.stringify(e))).join("\n")}}var I=Object.freeze({__proto__:null,NdJson:$}),L=n(I),R={}
Object.defineProperty(R,"__esModule",{value:!0}),R.CONFIG=void 0,R.CONFIG={apiKey:null,endpoint:"https://api.honeybadger.io",environment:null,hostname:null,projectRoot:null,component:null,action:null,revision:null,reportData:null,breadcrumbsEnabled:!0,eventsEnabled:!1,maxBreadcrumbs:40,maxObjectDepth:8,logger:console,developmentEnvironments:["dev","development","test"],debug:!1,tags:null,enableUncaught:!0,enableUnhandledRejection:!0,afterUncaught:function(){return!0},filters:["creditcard","password"],__plugins:[]}
var O=e&&e.__assign||function(){return O=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},O.apply(this,arguments)},F=e&&e.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function o(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):r(e.value).then(o,a)}l((i=i.apply(e,t||[])).next())}))},A=e&&e.__generator||function(e,t){var n,i,r,s,o={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,i&&(r=2&s[0]?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r
switch(i=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,i=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){o.label=s[1]
break}if(6===s[0]&&o.label<r[1]){o.label=r[1],r=s
break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(s)
break}r[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],i=0}finally{n=r=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}}
Object.defineProperty(T,"__esModule",{value:!0}),T.ThrottledEventsLogger=void 0
var M=L,j=o,N=R,D=function(){function e(e,t){this.config=e,this.transport=t,this.queue=[],this.isProcessing=!1,this.config=O(O({},N.CONFIG),e),this.logger=this.originalLogger()}return e.prototype.configure=function(e){for(var t in e)this.config[t]=e[t]},e.prototype.log=function(e){this.queue.push(e),this.isProcessing||this.processQueue()},e.prototype.processQueue=function(){var e=this
if(0!==this.queue.length&&!this.isProcessing){this.isProcessing=!0
var t=this.queue.slice()
this.queue=[]
var n=M.NdJson.stringify(t)
this.makeHttpRequest(n).then((function(){setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)})).catch((function(t){e.logger.error("[Honeybadger] Error making HTTP request:",t),setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)}))}},e.prototype.makeHttpRequest=function(e){return F(this,void 0,void 0,(function(){var t=this
return A(this,(function(n){return[2,this.transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json"},method:"POST",endpoint:(0,j.endpoint)(this.config.endpoint,"/v1/events"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},e).then((function(){t.config.debug&&t.logger.debug("[Honeybadger] Events sent successfully")})).catch((function(e){t.logger.error("[Honeybadger] Error sending events: ".concat(e.message))}))]}))}))},e.prototype.originalLogger=function(){var e,t,n,i,r
return{log:null!==(e=console.log.__hb_original)&&void 0!==e?e:console.log,info:null!==(t=console.info.__hb_original)&&void 0!==t?t:console.info,debug:null!==(n=console.debug.__hb_original)&&void 0!==n?n:console.debug,warn:null!==(i=console.warn.__hb_original)&&void 0!==i?i:console.warn,error:null!==(r=console.error.__hb_original)&&void 0!==r?r:console.error}},e}()
T.ThrottledEventsLogger=D
var B=e&&e.__assign||function(){return B=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},B.apply(this,arguments)},H=e&&e.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function o(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):r(e.value).then(o,a)}l((i=i.apply(e,t||[])).next())}))},q=e&&e.__generator||function(e,t){var n,i,r,s,o={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,i&&(r=2&s[0]?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r
switch(i=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,i=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){o.label=s[1]
break}if(6===s[0]&&o.label<r[1]){o.label=r[1],r=s
break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(s)
break}r[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],i=0}finally{n=r=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}}
Object.defineProperty(E,"__esModule",{value:!0}),E.Client=void 0
var U=o,G=x,W=T,z=R,V=/,|\s+/,Q=/\S/,J=function(){function e(e,t){void 0===e&&(e={}),this.__pluginsLoaded=!1,this.__store=null,this.__beforeNotifyHandlers=[],this.__afterNotifyHandlers=[],this.__notifier={name:"@honeybadger-io/core",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",version:"6.10.1"},this.config=B(B({},z.CONFIG),e),this.__initStore(),this.__transport=t,this.__eventsLogger=new W.ThrottledEventsLogger(this.config,this.__transport),this.logger=(0,U.logger)(this)}return e.prototype.getVersion=function(){return this.__notifier.version},e.prototype.getNotifier=function(){return this.__notifier},e.prototype.setNotifier=function(e){this.__notifier=e},e.prototype.configure=function(e){for(var t in void 0===e&&(e={}),e)this.config[t]=e[t]
return this.__eventsLogger.configure(this.config),this.loadPlugins(),this},e.prototype.loadPlugins=function(){var e=this;(this.__pluginsLoaded?this.config.__plugins.filter((function(e){return e.shouldReloadOnConfigure})):this.config.__plugins).forEach((function(t){return t.load(e)})),this.__pluginsLoaded=!0},e.prototype.__initStore=function(){this.__store=new G.GlobalStore({context:{},breadcrumbs:[]},this.config.maxBreadcrumbs)},e.prototype.beforeNotify=function(e){return this.__beforeNotifyHandlers.push(e),this},e.prototype.afterNotify=function(e){return this.__afterNotifyHandlers.push(e),this},e.prototype.setContext=function(e){return"object"==typeof e&&null!=e&&this.__store.setContext(e),this},e.prototype.resetContext=function(e){return this.logger.warn("Deprecation warning: `Honeybadger.resetContext()` has been deprecated; please use `Honeybadger.clear()` instead."),this.__store.clear(),"object"==typeof e&&null!==e&&this.__store.setContext(e),this},e.prototype.clear=function(){return this.__store.clear(),this},e.prototype.notify=function(e,t,n){var i=this
void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var r=this.makeNotice(e,t,n),s=r&&r.backtrace?r.backtrace.map((function(e){return(0,U.shallowClone)(e)})):null,o=this.__runPreconditions(r)
return o instanceof Error?((0,U.runAfterNotifyHandlers)(r,this.__afterNotifyHandlers,o),!1):o instanceof Promise?(o.then((function(e){return e instanceof Error?((0,U.runAfterNotifyHandlers)(r,i.__afterNotifyHandlers,e),!1):i.__send(r,s)})),!0):(this.__send(r,s).catch((function(e){})),!0)},e.prototype.notifyAsync=function(e,t,n){var i=this
return void 0===t&&(t=void 0),void 0===n&&(n=void 0),new Promise((function(r,s){var o,a
o=e.afterNotify?e:t&&t.afterNotify?t:n&&n.afterNotify?n:t&&"object"==typeof t?t:n||(t={}),a=o.afterNotify,o.afterNotify=function(e){if(null==a||a.call(i,e),e)return s(e)
r()},i.notify(e,t,n)}))},e.prototype.makeNotice=function(e,t,n){void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var i=(0,U.makeNotice)(e)
if(t&&"object"!=typeof t&&(t={name:String(t)}),t&&(i=(0,U.mergeNotice)(i,t)),"object"==typeof n&&null!==n&&(i=(0,U.mergeNotice)(i,n)),(0,U.objectIsEmpty)(i))return null
var r=this.__store.getContents("context"),s=this.__constructTags(i.tags),o=this.__constructTags(r.tags),a=this.__constructTags(this.config.tags),l=s.concat(o).concat(a),c=l.filter((function(e,t){return l.indexOf(e)===t}))
return i=(0,U.merge)(i,{name:i.name||"Error",context:(0,U.merge)(r,i.context),projectRoot:i.projectRoot||this.config.projectRoot,environment:i.environment||this.config.environment,component:i.component||this.config.component,action:i.action||this.config.action,revision:i.revision||this.config.revision,tags:c}),Array.isArray(i.backtrace)&&i.backtrace.length||("string"==typeof i.stack&&i.stack.trim()?i.backtrace=(0,U.makeBacktrace)(i.stack,!1,this.logger):(i.stack=(0,U.generateStackTrace)(),i.backtrace=(0,U.makeBacktrace)(i.stack,!0,this.logger))),i},e.prototype.addBreadcrumb=function(e,t){if(this.config.breadcrumbsEnabled){t=t||{}
var n=(0,U.shallowClone)(t.metadata),i=t.category||"custom",r=(new Date).toISOString()
return this.__store.addBreadcrumb({category:i,message:e,metadata:n,timestamp:r}),this}},e.prototype.logEvent=function(e){(0,U.logDeprecatedMethod)(this.logger,"Honeybadger.logEvent","Honeybadger.event"),this.event("log",e)},e.prototype.event=function(e,t){var n
"object"==typeof e&&(t=e,e=null!==(n=e.event_type)&&void 0!==n?n:void 0),this.__eventsLogger.log(B({event_type:e,ts:(new Date).toISOString()},t))},e.prototype.__getBreadcrumbs=function(){return this.__store.getContents("breadcrumbs").slice()},e.prototype.__getContext=function(){return this.__store.getContents("context")},e.prototype.__developmentMode=function(){return!0!==this.config.reportData&&this.config.environment&&this.config.developmentEnvironments.includes(this.config.environment)},e.prototype.__buildPayload=function(e){var t=(0,U.filter)(e.headers,this.config.filters)||{},n=(0,U.filter)(B(B({},e.cgiData),(0,U.formatCGIData)(t,"HTTP_")),this.config.filters)
return{notifier:this.__notifier,breadcrumbs:{enabled:!!this.config.breadcrumbsEnabled,trail:e.__breadcrumbs||[]},error:{class:e.name,message:e.message,backtrace:e.backtrace,fingerprint:e.fingerprint,tags:e.tags,causes:(0,U.getCauses)(e,this.logger)},request:{url:(0,U.filterUrl)(e.url,this.config.filters),component:e.component,action:e.action,context:e.context,cgi_data:n,params:(0,U.filter)(e.params,this.config.filters)||{},session:(0,U.filter)(e.session,this.config.filters)||{}},server:{project_root:e.projectRoot,environment_name:e.environment,revision:e.revision,hostname:this.config.hostname,time:(new Date).toUTCString()},details:e.details||{}}},e.prototype.__constructTags=function(e){return e?e.toString().split(V).filter((function(e){return Q.test(e)})):[]},e.prototype.__runPreconditions=function(e){var t=this,n=null
e||(this.logger.debug("failed to build error report"),n=new Error("failed to build error report")),!1===this.config.reportData&&(this.logger.debug("skipping error report: honeybadger.js is disabled",e),n=new Error("honeybadger.js is disabled")),this.__developmentMode()&&(this.logger.log("honeybadger.js is in development mode; the following error report will be sent in production.",e),n=new Error("honeybadger.js is in development mode")),this.config.apiKey||(this.logger.warn("could not send error report: no API key has been configured",e),n=new Error("missing API key"))
var i=(0,U.runBeforeNotifyHandlers)(e,this.__beforeNotifyHandlers)
return n||i.result||(this.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers returned false")),i.results.length&&i.results.some((function(e){return e instanceof Promise}))?Promise.allSettled(i.results).then((function(i){if(!n&&i.some((function(e){return"rejected"===e.status||!1===e.value}))&&(t.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers (async) returned false")),n)return n})):n},e.prototype.__send=function(e,t){var n=this
return this.config.breadcrumbsEnabled?(this.addBreadcrumb("Honeybadger Notice",{category:"notice",metadata:{message:e.message,name:e.name,stack:e.stack}}),e.__breadcrumbs=this.__store.getContents("breadcrumbs")):e.__breadcrumbs=[],(0,U.getSourceForBacktrace)(t,this.__getSourceFileHandler).then((function(t){return H(n,void 0,void 0,(function(){var n
return q(this,(function(i){return t.forEach((function(t,n){e.backtrace[n].source=t})),n=this.__buildPayload(e),[2,this.__transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json",Accept:"text/json, application/json"},method:"POST",endpoint:(0,U.endpoint)(this.config.endpoint,"/v1/notices/js"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},n)]}))}))})).then((function(t){if(201!==t.statusCode)return(0,U.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,new Error("Bad HTTP response: ".concat(t.statusCode))),n.logger.warn("Error report failed: unknown response from server. code=".concat(t.statusCode)),!1
var i=JSON.parse(t.body).id
return(0,U.runAfterNotifyHandlers)((0,U.merge)(e,{id:i}),n.__afterNotifyHandlers),n.logger.info("Error report sent ⚡ https://app.honeybadger.io/notice/".concat(i)),!0})).catch((function(t){return n.logger.error("Error report failed: an unknown error occurred.","message=".concat(t.message)),(0,U.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,t),!1}))},e}()
E.Client=J
var K={}
Object.defineProperty(K,"__esModule",{value:!0}),function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n)
var r=Object.getOwnPropertyDescriptor(t,n)
r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),i=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||n(t,e,i)},a=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r)
return i(t,e),t},l=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Plugins=t.Util=t.Types=t.Client=void 0
var c=l(s),u=E
Object.defineProperty(t,"Client",{enumerable:!0,get:function(){return u.Client}}),r(x,t),t.Types=a(K),t.Util=a(o),t.Plugins={events:c.default}}(r)
var X={}
Object.defineProperty(X,"__esModule",{value:!0}),X.preferCatch=X.encodeCookie=X.decodeCookie=X.localURLPathname=X.parseURL=X.nativeFetch=X.stringTextOfElement=X.stringSelectorOfElement=X.stringNameOfElement=void 0
var Y=r.Util.globalThisOrWindow
function Z(e){if(!e||!e.tagName)return""
var t=e.tagName.toLowerCase()
if("html"===t)return""
e.id&&(t+="#".concat(e.id))
var n=e.getAttribute("class")
n&&n.split(/\s+/).forEach((function(e){t+=".".concat(e)})),["alt","name","title","type"].forEach((function(n){var i=e.getAttribute(n)
i&&(t+="[".concat(n,'="').concat(i,'"]'))}))
var i=le(e)
return i.length>1&&(t+=":nth-child(".concat(Array.prototype.indexOf.call(i,e)+1,")")),t}function ee(e){var t=Z(e)
if(e.parentNode&&e.parentNode.tagName){var n=ee(e.parentNode)
if(n.length>0)return"".concat(n," > ").concat(t)}return t}function te(e){var t=e.textContent||e.innerText||""
return t||"submit"!==e.type&&"button"!==e.type||(t=e.value),ce(t.trim(),300)}function ne(){var e=Y()
if(!e.fetch)return!1
if(ie(e.fetch))return!0
if("undefined"==typeof document)return!1
try{var t=document.createElement("iframe")
t.style.display="none",document.head.appendChild(t)
var n=t.contentWindow.fetch&&ie(t.contentWindow.fetch)
return document.head.removeChild(t),n}catch(e){console&&console.warn&&console.warn("failed to detect native fetch via iframe: "+e)}return!1}function ie(e){return-1!==e.toString().indexOf("native")}function re(e){var t=e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)||{}
return{protocol:t[2],host:t[4],pathname:t[5]}}function se(e){var t=re(e),n=re(document.URL)
return t.host&&t.protocol?t.protocol===n.protocol&&t.host===n.host?t.pathname:"".concat(t.protocol,"://").concat(t.host).concat(t.pathname):t.pathname}function oe(e){var t={}
return e.split(/[;,]\s?/).forEach((function(e){var n=e.split("=",2),i=n[0],r=n[1]
t[i]=r})),t}function ae(e){if("object"==typeof e){var t=[]
for(var n in e)t.push(n+"="+e[n])
return t.join(";")}}function le(e){try{var t=e.parentNode.childNodes,n=[]
return Array.prototype.forEach.call(t,(function(t){t.tagName&&t.tagName===e.tagName&&n.push(t)})),n}catch(e){return[]}}function ce(e,t){return e.length>t&&(e=e.substr(0,t)+"..."),e}X.stringNameOfElement=Z,X.stringSelectorOfElement=ee,X.stringTextOfElement=te,X.nativeFetch=ne,X.parseURL=re,X.localURLPathname=se,X.decodeCookie=oe,X.encodeCookie=ae,X.preferCatch=function(){var e=!0
if("undefined"==typeof window)return e
if(window.atob||(e=!1),window.ErrorEvent)try{0===new window.ErrorEvent("").colno&&(e=!1)}catch(e){}return e}()
var ue={}
Object.defineProperty(ue,"__esModule",{value:!0}),ue.onError=ue.ignoreNextOnError=void 0
var de,he=r,fe=he.Util.instrument,pe=he.Util.makeNotice,ge=he.Util.globalThisOrWindow,_e=0
function ve(){_e+=1,clearTimeout(de),de=setTimeout((function(){_e=0}))}function me(e){return void 0===e&&(e=ge()),{load:function(t){fe(e,"onerror",(function(n){var i=function(e,n,i,r,s){if(t.logger.debug("window.onerror callback invoked",arguments),_e>0)return t.logger.debug("Ignoring window.onerror (error likely reported earlier)",arguments),void(_e-=1)
if(0===i&&/Script error\.?/.test(e))t.config.enableUncaught&&t.logger.warn("Ignoring cross-domain script error: enable CORS to track these types of errors",arguments)
else{var o=pe(s)
o.name||(o.name="window.onerror"),o.message||(o.message=e),o.stack||(o.stack=[o.message,"\n    at ? (",n||"unknown",":",i||0,":",r||0,")"].join("")),t.addBreadcrumb("window.onerror"!==o.name&&o.name?"window.onerror: ".concat(o.name):"window.onerror",{category:"error",metadata:{name:o.name,message:o.message,stack:o.stack}}),t.config.enableUncaught&&t.notify(o)}}
return function(t,r,s,o,a){return i(t,r,s,o,a),"function"==typeof n&&n.apply(e,arguments)}}))}}}ue.ignoreNextOnError=ve,ue.onError=me
var ye={}
Object.defineProperty(ye,"__esModule",{value:!0})
var be=r,we=be.Util.instrument,ke=be.Util.globalThisOrWindow
function Se(e){return void 0===e&&(e=ke()),{load:function(t){t.config.enableUnhandledRejection&&we(e,"onunhandledrejection",(function(e){function n(e){var n
if(t.logger.debug("window.onunhandledrejection callback invoked",arguments),t.config.enableUnhandledRejection){var i=e.reason
if(i instanceof Error){var r="unknown",s=0,o="".concat(i.message,"\n    at ? (").concat(r,":").concat(s,")"),a=i.stack||o,l={name:i.name,message:"UnhandledPromiseRejectionWarning: ".concat(i),stack:a}
return t.addBreadcrumb("window.onunhandledrejection: ".concat(l.name),{category:"error",metadata:l}),void t.notify(l)}var c="string"==typeof i?i:null!==(n=JSON.stringify(i))&&void 0!==n?n:"Unspecified reason"
t.notify({name:"window.onunhandledrejection",message:"UnhandledPromiseRejectionWarning: ".concat(c)})}}return function(t){n(t),"function"==typeof e&&e.apply(this,arguments)}}))}}}ye.default=Se
var Ee={}
Object.defineProperty(Ee,"__esModule",{value:!0})
var xe=r,Pe=X,Ce=xe.Util.sanitize,Te=xe.Util.instrument,$e=xe.Util.instrumentConsole,Ie=xe.Util.globalThisOrWindow
function Le(e){return void 0===e&&(e=Ie()),{load:function(t){function n(e){return!0===t.config.breadcrumbsEnabled||(e?!0===t.config.breadcrumbsEnabled[e]:!1!==t.config.breadcrumbsEnabled)}!function(){function i(e){return Array.isArray(e)?e.map((function(e){try{return String(e)}catch(e){return"[unknown]"}})).join(" "):""}n("console")&&$e(e,(function(e,n){var r=i(n),s={category:"log",metadata:{level:e,arguments:Ce(n,3)}}
t.addBreadcrumb(r,s)}))}(),n("dom")&&"function"==typeof e.addEventListener&&e.addEventListener("click",(function(e){var n,i,r
try{n=(0,Pe.stringNameOfElement)(e.target),i=(0,Pe.stringSelectorOfElement)(e.target),r=(0,Pe.stringTextOfElement)(e.target)}catch(e){n="UI Click",i="[unknown]",r="[unknown]"}0!==n.length&&t.addBreadcrumb(n,{category:"ui.click",metadata:{selector:i,text:r,event:e}})}),!!e.location),n("network")&&"undefined"!=typeof XMLHttpRequest&&(Te(XMLHttpRequest.prototype,"open",(function(e){return function(){var t=this,n=arguments[1],i="string"==typeof n?n:String(n),r="string"==typeof arguments[0]?arguments[0].toUpperCase():arguments[0],s="".concat(r," ").concat((0,Pe.localURLPathname)(i))
this.__hb_xhr={type:"xhr",method:r,url:i,message:s},"function"==typeof e&&e.apply(t,arguments)}})),Te(XMLHttpRequest.prototype,"send",(function(e){return function(){var n=this
function i(){if(4===n.readyState){var e=void 0
n.__hb_xhr&&(n.__hb_xhr.status_code=n.status,e=n.__hb_xhr.message,delete n.__hb_xhr.message),t.addBreadcrumb(e||"XMLHttpRequest",{category:"request",metadata:n.__hb_xhr})}}"onreadystatechange"in n&&"function"==typeof n.onreadystatechange?Te(n,"onreadystatechange",(function(e){return function(){i(),"function"==typeof e&&e.apply(this,arguments)}})):n.onreadystatechange=i,"function"==typeof e&&e.apply(n,arguments)}}))),n("network")&&(0,Pe.nativeFetch)()&&Te(e,"fetch",(function(n){return function(){var i,r=arguments[0],s="GET"
"string"==typeof r?i=r:"Request"in e&&r instanceof Request?(i=r.url,r.method&&(s=r.method)):i=String(r),arguments[1]&&arguments[1].method&&(s=arguments[1].method),"string"==typeof s&&(s=s.toUpperCase())
var o="".concat(s," ").concat("undefined"==typeof document?i:(0,Pe.localURLPathname)(i)),a={type:"fetch",method:s,url:i}
return n.apply(this,arguments).then((function(e){return a.status_code=e.status,t.addBreadcrumb(o,{category:"request",metadata:a}),e})).catch((function(e){throw t.addBreadcrumb("fetch error",{category:"error",metadata:a}),e}))}})),function(){if(n("navigation")&&null!=e.location){var i=e.location.href
"function"==typeof addEventListener&&addEventListener("popstate",(function(t){r(i,e.location.href)})),void 0!==e.history&&(Te(e.history,"pushState",s),Te(e.history,"replaceState",s))}function r(e,n){i=n,t.addBreadcrumb("Page changed",{category:"navigation",metadata:{from:e,to:n}})}function s(e){return function(){var t=arguments.length>2?arguments[2]:void 0
return t&&r(i,String(t)),e.apply(this,arguments)}}}()}}}Ee.default=Le
var Re={}
Object.defineProperty(Re,"__esModule",{value:!0})
var Oe=r,Fe=Oe.Util.instrument,Ae=Oe.Util.globalThisOrWindow
function Me(e){return void 0===e&&(e=Ae()),{load:function(t){!function(){function n(e){return function(n){return function(i,r){if("function"==typeof i){var s=Array.prototype.slice.call(arguments,2)
return i=t.__wrap(i,e),n((function(){i.apply(void 0,s)}),r)}return n(i,r)}}}Fe(e,"setTimeout",n({component:"setTimeout"})),Fe(e,"setInterval",n({component:"setInterval"}))}()}}}Re.default=Me
var je={}
Object.defineProperty(je,"__esModule",{value:!0})
var Ne=r,De=Ne.Util.instrument,Be=Ne.Util.globalThisOrWindow
function He(e){return void 0===e&&(e=Be()),{load:function(t){["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"].forEach((function(n){var i=e[n]&&e[n].prototype
i&&Object.prototype.hasOwnProperty.call(i,"addEventListener")&&(De(i,"addEventListener",(function(e){var i={component:"".concat(n,".prototype.addEventListener")}
return function(n,r,s,o){try{r&&null!=r.handleEvent&&(r.handleEvent=t.__wrap(r.handleEvent,i))}catch(e){t.logger.error(e)}return e.call(this,n,t.__wrap(r,i),s,o)}})),De(i,"removeEventListener",(function(e){return function(n,i,r,s){return e.call(this,n,i,r,s),e.call(this,n,t.__wrap(i),r,s)}})))}))}}}je.default=He
var qe={},Ue=e&&e.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function o(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):r(e.value).then(o,a)}l((i=i.apply(e,t||[])).next())}))},Ge=e&&e.__generator||function(e,t){var n,i,r,s,o={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,i&&(r=2&s[0]?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r
switch(i=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,i=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){o.label=s[1]
break}if(6===s[0]&&o.label<r[1]){o.label=r[1],r=s
break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(s)
break}r[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],i=0}finally{n=r=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}}
Object.defineProperty(qe,"__esModule",{value:!0}),qe.BrowserTransport=void 0
var We=r,ze=We.Util.sanitize,Ve=We.Util.globalThisOrWindow
function Qe(e){return Object.entries(e)}var Je=function(){function e(e){void 0===e&&(e={}),this.headers={},this.headers=e}return e.prototype.defaultHeaders=function(){return this.headers},e.prototype.send=function(e,t){return Ue(this,void 0,void 0,(function(){var n,i,r,s,o
return Ge(this,(function(a){switch(a.label){case 0:return n=e.headers?Qe(e.headers):[],i=this.defaultHeaders(),n.forEach((function(e){var t=e[0],n=e[1]
null!=t&&null!=n&&(i[String(t)]=String(n))})),r={method:e.method,headers:i},"POST"===e.method&&t&&(r.body="string"==typeof t?t:JSON.stringify(ze(t,e.maxObjectDepth))),[4,Ve().fetch(e.endpoint,r)]
case 1:return[4,(s=a.sent()).text()]
case 2:return o=a.sent(),[2,Promise.resolve({statusCode:s.status,body:o})]}}))}))},e}()
qe.BrowserTransport=Je
var Ke={},Xe=e&&e.__assign||function(){return Xe=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},Xe.apply(this,arguments)}
Object.defineProperty(Ke,"__esModule",{value:!0}),Ke.BrowserFeedbackForm=void 0
var Ye=r.Util.globalThisOrWindow,Ze=function(){function t(e,t,n){this.config=e,this.logger=t,this.scriptUrl=n}return t.prototype.appendUserFeedbackTag=function(t,n){void 0===n&&(n={})
var i=t.document.createElement("script")
i.setAttribute("src",this.scriptUrl),i.setAttribute("async","true"),n.onLoad&&(i.onload=n.onLoad),(e.document.head||e.document.body).appendChild(i)},t.prototype.isUserFeedbackUrlAlreadyVisible=function(){for(var e=Ye(),t=this.scriptUrl,n=0;n<e.document.scripts.length;n++)if(e.document.scripts[n].src===t)return!0
return!1},t.prototype.show=function(e,t){if(void 0===t&&(t={}),"function"==typeof this.appendUserFeedbackTag)if(this.config&&this.config.apiKey)if(e){var n=Ye()
void 0!==n.document?this.isUserFeedbackUrlAlreadyVisible()?this.logger.debug("User feedback form is already visible"):(n.honeybadgerUserFeedbackOptions=Xe(Xe({},t),{apiKey:this.config.apiKey,endpoint:this.config.userFeedbackEndpoint,noticeId:e}),this.appendUserFeedbackTag(n,t)):this.logger.debug("global.document is undefined. Cannot attach script")}else this.logger.debug("Can't show user feedback form without a notice already reported")
else this.logger.debug("Client not initialized")
else this.logger.debug("Feedback form is not available in this environment")},t}()
Ke.BrowserFeedbackForm=Ze,function(t){var n,i=e&&e.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),s=e&&e.__assign||function(){return s=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},s.apply(this,arguments)},o=e&&e.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function o(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):r(e.value).then(o,a)}l((i=i.apply(e,t||[])).next())}))},a=e&&e.__generator||function(e,t){var n,i,r,s,o={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.")
for(;o;)try{if(n=1,i&&(r=2&s[0]?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r
switch(i=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s
break
case 4:return o.label++,{value:s[1],done:!1}
case 5:o.label++,i=s[1],s=[0]
continue
case 7:s=o.ops.pop(),o.trys.pop()
continue
default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){o=0
continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){o.label=s[1]
break}if(6===s[0]&&o.label<r[1]){o.label=r[1],r=s
break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(s)
break}r[2]&&o.ops.pop(),o.trys.pop()
continue}s=t.call(e,o)}catch(e){s=[6,e],i=0}finally{n=r=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}},l=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Types=t.getUserFeedbackScriptUrl=void 0
var c=r,u=X,d=ue,h=l(ye),f=l(Ee),p=l(Re),g=l(je),_=qe,v=Ke,m=c.Util.merge,y=c.Util.filter,b=c.Util.objectIsExtensible,w=c.Util.globalThisOrWindow,k=function(){var e=w(),t=""
return null!=e.location&&(t=e.location.protocol+"//"+e.location.host),t},S=function(e){var t=e.split(".").slice(0,2).join(".")
return"https://js.honeybadger.io/v".concat(t,"/honeybadger-feedback-form.js")}
t.getUserFeedbackScriptUrl=S
var E=function(e){function n(t){void 0===t&&(t={})
var n=e.call(this,s({userFeedbackEndpoint:"https://api.honeybadger.io/v2/feedback",async:!0,maxErrors:null,projectRoot:k()},t),new _.BrowserTransport({"User-Agent":P()}))||this
return n.__errorsSent=0,n.__lastWrapErr=void 0,n.__lastNoticeId=void 0,n.__beforeNotifyHandlers=[function(e){return n.__exceedsMaxErrors()?(n.logger.debug("Dropping notice: max errors exceeded",e),!1):(e&&!e.url&&"undefined"!=typeof document&&(e.url=document.URL),n.__incrementErrorsCount(),!0)}],n.__afterNotifyHandlers=[function(e,t){t&&(n.__lastNoticeId=t.id)}],n}return i(n,e),n.prototype.configure=function(t){return void 0===t&&(t={}),e.prototype.configure.call(this,t)},n.prototype.resetMaxErrors=function(){return this.__errorsSent=0},n.prototype.factory=function(e){var t=new n(e)
return t.setNotifier(this.getNotifier()),t},n.prototype.checkIn=function(e){throw new Error("Honeybadger.checkIn() is not supported on the browser")},n.prototype.showUserFeedbackForm=function(e){return void 0===e&&(e={}),o(this,void 0,void 0,(function(){return a(this,(function(t){return new v.BrowserFeedbackForm(this.config,this.logger,this.getUserFeedbackSubmitUrl()).show(this.__lastNoticeId,e),[2]}))}))},n.prototype.getUserFeedbackSubmitUrl=function(){return(0,t.getUserFeedbackScriptUrl)(this.getVersion())},n.prototype.__buildPayload=function(t){var n,i={HTTP_USER_AGENT:void 0,HTTP_REFERER:void 0,HTTP_COOKIE:void 0}
"undefined"!=typeof navigator&&navigator.userAgent&&(i.HTTP_USER_AGENT=navigator.userAgent),"undefined"!=typeof document&&document.referrer.match(/\S/)&&(i.HTTP_REFERER=document.referrer),(n="string"==typeof t.cookies?(0,u.decodeCookie)(t.cookies):t.cookies)&&(i.HTTP_COOKIE=(0,u.encodeCookie)(y(n,this.config.filters)))
var r=e.prototype.__buildPayload.call(this,t)
return r.request.cgi_data=m(i,r.request.cgi_data),r},n.prototype.__wrap=function(e,t){void 0===t&&(t={})
var n=e
t||(t={})
try{if("function"!=typeof n)return n
if(!b(n))return n
if(!n.___hb){var i=this
n.___hb=function(){if(!u.preferCatch)return n.apply(this,arguments)
try{return n.apply(this,arguments)}catch(e){if(i.__lastWrapErr===e)throw e
throw i.__lastWrapErr=e,(0,d.ignoreNextOnError)(),i.addBreadcrumb(t.component?"".concat(t.component,": ").concat(e.name):e.name,{category:"error",metadata:{message:e.message,name:e.name,stack:e.stack}}),i.config.enableUncaught&&i.notify(e),e}}}return n.___hb.___hb=n.___hb,n.___hb}catch(e){return n}},n.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},n.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},n}(c.Client),x={name:"@honeybadger-io/js",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",version:"6.10.1"},P=function(){return"undefined"!=typeof navigator?"Honeybadger JS Browser Client ".concat(x.version,"; ").concat(navigator.userAgent):"Honeybadger JS Browser Client ".concat(x.version,"; n/a; n/a")},C=new E({__plugins:[(0,d.onError)(),(0,h.default)(),(0,p.default)(),(0,g.default)(),(0,f.default)(),c.Plugins.events()]})
C.setNotifier(x)
var T=r
Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return T.Types}}),t.default=C}(i)
var et=t(i)
return et}()),Cl.exports),$l=xl(Tl)
const Il=["(reading'$$')","attackplayer.min.js","Discord-Message-Checks-for-Updates.user.js","dynamically imported module","Fallen-Sword-Champion-and-Super-Elite-Alert.user.js","Fallen-Sword-Message-Alert.user.js","Fallen-Sword-Super-Elite-Notifier.user.js","Fallensword-GvG-Target-Checker-with-Button-and-Buff-Check.user.js","fs.min.js","GVG-and-Relics-Notifications.user.js","GvG-Initiate-Enhanced.user.js","GvG-List-v2.user.js","GVG%252FRelics-Discord.user.js","GVG%252FRelics-Notifications.user.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","openuserjs.org","Permission denied to access object","play method is not allowed","Superelite-searcher.user.js","world.min.js"],Ll=e=>Il.some((t=>e.includes(t)))
function Rl(e){if(Ll(e.stack))return!1}function Ol(){!function(){$l.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.142"})
const e=s()
e&&$l.setContext({user_id:e}),$l.afterNotify((e=>{if(e)return Ks(`Honeybadger notification failed: ${e}`)})),$l.beforeNotify(Rl)}()}var Fl={}
function Al(e,t,n,i){e instanceof EventTarget&&e.addEventListener(t,n,i)}function Ml(e){hl("betaOptIn")&&Ks("sendException",e),$l.notify(e,"sendException")}function jl(e,t){return e||t}const Nl=[null]
function Dl(e,t){return Nl[e]&&Nl[e].priority<Nl[t].priority}function Bl(e,t){const n=Nl[e]
Nl[e]=Nl[t],Nl[t]=n}function Hl(e,t){return e?2*t:2*t+1}function ql(){if(1===Nl.length)return
const e=Nl[1].data,t=Nl.pop()
return Nl.length>1&&(Nl[1]=t,function(e){let t=e
for(;2*t<Nl.length;){const e=Hl(!Dl(2*t+1,2*t),t)
if(Dl(t,e))break
Bl(t,e),t=e}}(1)),e}function Ul(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!Dl(t,e))break
Bl(t,e),t=e}}(Nl.push({data:e,priority:t})-1)}let Gl=!0
const Wl="fshMessage"
let zl=0
function Vl(){Nl.length-1==0?Gl=!0:(Gl=!1,window.postMessage(Wl,window.location.origin))}function Ql(){const e=ql()
yl(e)?e():function(e){vo(e)||Ml(`pop() was not a function (${typeof e})`)}(e)}function Jl(e){const t=e.data
e.origin===window.location.origin&&t===Wl&&function(){try{Ql()}catch(e){$l.notify(e,"taskFailure")}finally{Vl()}}()}function Kl(e,t,n,i){if(yl(t)){zl||(Al(window,"message",Jl),zl=!0)
const r=jl(i,window),s=jl(n,[])
Ul(t.bind(r,...s),e),Gl&&Vl()}}function Xl(e,t){return new URLSearchParams(e).get(t)}function Yl(e){try{return Xl(decodeURIComponent(window.location.search),e)}catch(e){return Ks(e),""}}function Zl(){}const ec=e=>e
function tc(e,t){for(const n in t)e[n]=t[n]
return e}function nc(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}function ic(e){return e()}function rc(){return Object.create(null)}function sc(e){e.forEach(ic)}function oc(e){return"function"==typeof e}function ac(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let lc
function cc(e,t){return e===t||(lc||(lc=document.createElement("a")),lc.href=t,e===lc.href)}function uc(e,...t){if(null==e){for(const e of t)e(void 0)
return Zl}const n=e.subscribe(...t)
return n.unsubscribe?()=>n.unsubscribe():n}function dc(e){let t
return uc(e,(e=>t=e))(),t}function hc(e,t,n){e.$$.on_destroy.push(uc(t,n))}function fc(e,t,n,i){if(e){const r=pc(e,t,n,i)
return e[0](r)}}function pc(e,t,n,i){return e[1]&&i?tc(n.ctx.slice(),e[1](i(t))):n.ctx}function gc(e,t,n,i){if(e[2]&&i){const r=e[2](i(n))
if(void 0===t.dirty)return r
if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length)
for(let i=0;i<n;i+=1)e[i]=t.dirty[i]|r[i]
return e}return t.dirty|r}return t.dirty}function _c(e,t,n,i,r,s){if(r){const o=pc(t,n,i,s)
e.p(o,r)}}function vc(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32
for(let e=0;e<n;e++)t[e]=-1
return t}return-1}function mc(e){const t={}
for(const n in e)t[n]=!0
return t}function yc(e){let t=!1
return function(...n){t||(t=!0,e.call(this,...n))}}function bc(e){return null==e?"":e}function wc(e){return e&&oc(e.destroy)?e.destroy:Zl}function kc(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const Sc="undefined"!=typeof window
let Ec=Sc?()=>window.performance.now():()=>Date.now(),xc=Sc?e=>requestAnimationFrame(e):Zl
const Pc=new Set
function Cc(e){Pc.forEach((t=>{t.c(e)||(Pc.delete(t),t.f())})),0!==Pc.size&&xc(Cc)}function Tc(e,t){e.appendChild(t)}function $c(e){if(!e)return document
const t=e.getRootNode?e.getRootNode():e.ownerDocument
return t&&t.host?t:e.ownerDocument}function Ic(e){const t=Fc("style")
return t.textContent="/* empty */",function(e,t){Tc(e.head||e,t),t.sheet}($c(e),t),t.sheet}function Lc(e,t,n){e.insertBefore(t,n||null)}function Rc(e){e.parentNode&&e.parentNode.removeChild(e)}function Oc(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function Fc(e){return document.createElement(e)}function Ac(e){return document.createTextNode(e)}function Mc(){return Ac(" ")}function jc(){return Ac("")}function Nc(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function Dc(e){return function(t){return t.preventDefault(),e.call(this,t)}}function Bc(e){return function(t){t.target===this&&e.call(this,t)}}function Hc(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function qc(e,t,n){const i=t.toLowerCase()
i in e?e[i]="boolean"==typeof e[i]&&""===n||n:t in e?e[t]="boolean"==typeof e[t]&&""===n||n:Hc(e,t,n)}function Uc(e){return""===e?null:+e}function Gc(e,t){t=""+t,e.data!==t&&(e.data=t)}function Wc(e,t){e.value=null==t?"":t}function zc(e,t,n,i){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function Vc(e,t,n){for(let n=0;n<e.options.length;n+=1){const i=e.options[n]
if(i.__value===t)return void(i.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}function Qc(e){const t=e.querySelector(":checked")
return t&&t.__value}let Jc
function Kc(){if(void 0===Jc){Jc=!1
try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){Jc=!0}}return Jc}function Xc(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative")
const n=Fc("iframe")
n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1
const i=Kc()
let r
return i?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=Nc(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=Nc(n.contentWindow,"resize",t),t()}),Tc(e,n),()=>{(i||r&&n.contentWindow)&&r(),Rc(n)}}function Yc(e,t,n){e.classList.toggle(t,!!n)}function Zc(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}class eu{is_svg=!1
e=void 0
n=void 0
t=void 0
a=void 0
constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){var i
this.e||(this.is_svg?this.e=(i=t.nodeName,document.createElementNS("http://www.w3.org/2000/svg",i)):this.e=Fc(11===t.nodeType?"TEMPLATE":t.nodeName),this.t="TEMPLATE"!==t.tagName?t:t.content,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)Lc(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(Rc)}}function tu(e,t){return new e(t)}const nu=new Map
let iu,ru=0
function su(e,t,n,i,r,s,o,a=0){const l=16.666/i
let c="{\n"
for(let e=0;e<=1;e+=l){const i=t+(n-t)*s(e)
c+=100*e+`%{${o(i,1-i)}}\n`}const u=c+`100% {${o(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length
for(;n--;)t=(t<<5)-t^e.charCodeAt(n)
return t>>>0}(u)}_${a}`,h=$c(e),{stylesheet:f,rules:p}=nu.get(h)||function(e,t){const n={stylesheet:Ic(t),rules:{}}
return nu.set(e,n),n}(h,e)
p[d]||(p[d]=!0,f.insertRule(`@keyframes ${d} ${u}`,f.cssRules.length))
const g=e.style.animation||""
return e.style.animation=`${g?`${g}, `:""}${d} ${i}ms linear ${r}ms 1 both`,ru+=1,d}function ou(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-i.length
r&&(e.style.animation=i.join(", "),ru-=r,ru||xc((()=>{ru||(nu.forEach((e=>{const{ownerNode:t}=e.stylesheet
t&&Rc(t)})),nu.clear())})))}function au(e){iu=e}function lu(){if(!iu)throw new Error("Function called outside component initialization")
return iu}function cu(e){lu().$$.on_mount.push(e)}function uu(e){lu().$$.after_update.push(e)}function du(e){lu().$$.on_destroy.push(e)}function hu(){const e=lu()
return(t,n,{cancelable:i=!1}={})=>{const r=e.$$.callbacks[t]
if(r){const s=Zc(t,n,{cancelable:i})
return r.slice().forEach((t=>{t.call(e,s)})),!s.defaultPrevented}return!0}}function fu(e,t){const n=e.$$.callbacks[t.type]
n&&n.slice().forEach((e=>e.call(this,t)))}const pu=[],gu=[]
let _u=[]
const vu=[],mu=Promise.resolve()
let yu=!1
function bu(){yu||(yu=!0,mu.then(Cu))}function wu(){return bu(),mu}function ku(e){_u.push(e)}function Su(e){vu.push(e)}const Eu=new Set
let xu,Pu=0
function Cu(){if(0!==Pu)return
const e=iu
do{try{for(;Pu<pu.length;){const e=pu[Pu]
Pu++,au(e),Tu(e.$$)}}catch(e){throw pu.length=0,Pu=0,e}for(au(null),pu.length=0,Pu=0;gu.length;)gu.pop()()
for(let e=0;e<_u.length;e+=1){const t=_u[e]
Eu.has(t)||(Eu.add(t),t())}_u.length=0}while(pu.length)
for(;vu.length;)vu.pop()()
yu=!1,Eu.clear(),au(e)}function Tu(e){if(null!==e.fragment){e.update(),sc(e.before_update)
const t=e.dirty
e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ku)}}function $u(e,t,n){e.dispatchEvent(Zc(`${t?"intro":"outro"}${n}`))}const Iu=new Set
let Lu
function Ru(){Lu={r:0,c:[],p:Lu}}function Ou(){Lu.r||sc(Lu.c),Lu=Lu.p}function Fu(e,t){e&&e.i&&(Iu.delete(e),e.i(t))}function Au(e,t,n,i){if(e&&e.o){if(Iu.has(e))return
Iu.add(e),Lu.c.push((()=>{Iu.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}else i&&i()}const Mu={duration:0}
function ju(e,t,n,i){let r,s=t(e,n,{direction:"both"}),o=i?0:1,a=null,l=null,c=null
function u(){c&&ou(e,c)}function d(e,t){const n=e.b-o
return t*=Math.abs(n),{a:o,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function h(t){const{delay:n=0,duration:i=300,easing:h=ec,tick:f=Zl,css:p}=s||Mu,g={start:Ec()+n,b:t}
t||(g.group=Lu,Lu.r+=1),"inert"in e&&(t?void 0!==r&&(e.inert=r):(r=e.inert,e.inert=!0)),a||l?l=g:(p&&(u(),c=su(e,o,t,i,n,h,p)),t&&f(0,1),a=d(g,i),ku((()=>$u(e,t,"start"))),function(e){let t
0===Pc.size&&xc(Cc),new Promise((n=>{Pc.add(t={c:e,f:n})}))}((t=>{if(l&&t>l.start&&(a=d(l,i),l=null,$u(e,a.b,"start"),p&&(u(),c=su(e,o,a.b,a.duration,0,h,s.css))),a)if(t>=a.end)f(o=a.b,1-o),$u(e,a.b,"end"),l||(a.b?u():--a.group.r||sc(a.group.c)),a=null
else if(t>=a.start){const e=t-a.start
o=a.a+a.d*h(e/a.duration),f(o,1-o)}return!(!a&&!l)})))}return{run(e){oc(s)?(xu||(xu=Promise.resolve(),xu.then((()=>{xu=null}))),xu).then((()=>{s=s({direction:e?"in":"out"}),h(e)})):h(e)},end(){u(),a=l=null}}}function Nu(e){return void 0!==e?.length?e:Array.from(e)}function Du(e,t){e.d(1),t.delete(e.key)}function Bu(e,t){Au(e,1,1,(()=>{t.delete(e.key)}))}function Hu(e,t,n,i,r,s,o,a,l,c,u,d){let h=e.length,f=s.length,p=h
const g={}
for(;p--;)g[e[p].key]=p
const _=[],v=new Map,m=new Map,y=[]
for(p=f;p--;){const e=d(r,s,p),i=n(e)
let a=o.get(i)
a?y.push((()=>a.p(e,t))):(a=c(i,e),a.c()),v.set(i,_[p]=a),i in g&&m.set(i,Math.abs(p-g[i]))}const b=new Set,w=new Set
function k(e){Fu(e,1),e.m(a,u),o.set(e.key,e),u=e.first,f--}for(;h&&f;){const t=_[f-1],n=e[h-1],i=t.key,r=n.key
t===n?(u=t.first,h--,f--):v.has(r)?!o.has(i)||b.has(i)?k(t):w.has(r)?h--:m.get(i)>m.get(r)?(w.add(i),k(t)):(b.add(r),h--):(l(n,o),h--)}for(;h--;){const t=e[h]
v.has(t.key)||l(t,o)}for(;f;)k(_[f-1])
return sc(y),_}function qu(e,t,n){const i=e.$$.props[t]
void 0!==i&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function Uu(e){e&&e.c()}function Gu(e,t,n){const{fragment:i,after_update:r}=e.$$
i&&i.m(t,n),ku((()=>{const t=e.$$.on_mount.map(ic).filter(oc)
e.$$.on_destroy?e.$$.on_destroy.push(...t):sc(t),e.$$.on_mount=[]})),r.forEach(ku)}function Wu(e,t){const n=e.$$
null!==n.fragment&&(!function(e){const t=[],n=[]
_u.forEach((i=>-1===e.indexOf(i)?t.push(i):n.push(i))),n.forEach((e=>e())),_u=t}(n.after_update),sc(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function zu(e,t,n,i,r,s,o=null,a=[-1]){const l=iu
au(e)
const c=e.$$={fragment:null,ctx:[],props:s,update:Zl,not_equal:r,bound:rc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:rc(),dirty:a,skip_bound:!1,root:t.target||l.$$.root}
o&&o(c.root)
let u=!1
if(c.ctx=n?n(e,t.props||{},((t,n,...i)=>{const s=i.length?i[0]:n
return c.ctx&&r(c.ctx[t],c.ctx[t]=s)&&(!c.skip_bound&&c.bound[t]&&c.bound[t](s),u&&function(e,t){-1===e.$$.dirty[0]&&(pu.push(e),bu(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n})):[],c.update(),u=!0,sc(c.before_update),c.fragment=!!i&&i(c.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target)
c.fragment&&c.fragment.l(e),e.forEach(Rc)}else c.fragment&&c.fragment.c()
t.intro&&Fu(e.$$.fragment),Gu(e,t.target,t.anchor),Cu()}au(l)}class Vu{$$=void 0
$$set=void 0
$destroy(){Wu(this,1),this.$destroy=Zl}$on(e,t){if(!oc(t))return Zl
const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[])
return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t
this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Qu=[]
function Ju(e,t=Zl){let n
const i=new Set
function r(t){if(ac(e,t)&&(e=t,n)){const t=!Qu.length
for(const t of i)t[1](),Qu.push(t,e)
if(t){for(let e=0;e<Qu.length;e+=2)Qu[e][0](Qu[e+1])
Qu.length=0}}}function s(t){r(t(e))}return{set:r,update:s,subscribe:function(o,a=Zl){const l=[o,a]
return i.add(l),1===i.size&&(n=t(r,s)||Zl),o(e),()=>{i.delete(l),0===i.size&&n&&(n(),n=null)}}}}function Ku(e,t,n){const i=!Array.isArray(e),r=i?[e]:e
if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const s=t.length<2
return o=(e,n)=>{let o=!1
const a=[]
let l=0,c=Zl
const u=()=>{if(l)return
c()
const r=t(i?a[0]:a,e,n)
s?e(r):c=oc(r)?r:Zl},d=r.map(((e,t)=>uc(e,(e=>{a[t]=e,l&=~(1<<t),o&&u()}),(()=>{l|=1<<t}))))
return o=!0,u(),function(){sc(d),c(),o=!1}},{subscribe:Ju(n,o).subscribe}
var o}const Xu=Ju("")
function Yu(e){const t=e-1
return t*t*t+1}function Zu(e,{delay:t=0,duration:n=400,easing:i=ec}={}){const r=+getComputedStyle(e).opacity
return{delay:t,duration:n,easing:i,css:e=>"opacity: "+e*r}}function ed(e,{delay:t=0,duration:n=400,easing:i=Yu,x:r=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-o),[d,h]=kc(r),[f,p]=kc(s)
return{delay:t,duration:n,easing:i,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*d}${h}, ${(1-e)*f}${p});\n\t\t\topacity: ${l-u*t}`}}function td(e,{delay:t=0,duration:n=400,easing:i=Yu,axis:r="y"}={}){const s=getComputedStyle(e),o=+s.opacity,a="y"===r?"height":"width",l=parseFloat(s[a]),c="y"===r?["top","bottom"]:["left","right"],u=c.map((e=>`${e[0].toUpperCase()}${e.slice(1)}`)),d=parseFloat(s[`padding${u[0]}`]),h=parseFloat(s[`padding${u[1]}`]),f=parseFloat(s[`margin${u[0]}`]),p=parseFloat(s[`margin${u[1]}`]),g=parseFloat(s[`border${u[0]}Width`]),_=parseFloat(s[`border${u[1]}Width`])
return{delay:t,duration:n,easing:i,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*o};${a}: ${e*l}px;padding-${c[0]}: ${e*d}px;padding-${c[1]}: ${e*h}px;margin-${c[0]}: ${e*f}px;margin-${c[1]}: ${e*p}px;border-${c[0]}-width: ${e*g}px;border-${c[1]}-width: ${e*_}px;`}}function nd(e){let t,n,i,r,s,o,a
return{c(){t=Fc("div"),n=Fc("p"),i=Ac(e[0]),Hc(n,"class","svelte-1c416no"),Hc(t,"role","alert"),Hc(t,"class","svelte-1c416no"),zc(t,"transform",e[2])},m(r,l){Lc(r,t,l),Tc(t,n),Tc(n,i),s=!0,o||(a=Nc(t,"click",e[4]),o=!0)},p(e,n){(!s||1&n)&&Gc(i,e[0]),4&n&&zc(t,"transform",e[2])},i(e){s||(e&&ku((()=>{s&&(r||(r=ju(t,ed,{delay:250,duration:300,x:0,y:-100,opacity:.5},!0)),r.run(1))})),s=!0)},o(e){e&&(r||(r=ju(t,ed,{delay:250,duration:300,x:0,y:-100,opacity:.5},!1)),r.run(0)),s=!1},d(e){e&&Rc(t),e&&r&&r.end(),o=!1,a()}}}function id(e){let t,n=e[1]&&nd(e)
return{c(){n&&n.c(),t=jc()},m(e,i){n&&n.m(e,i),Lc(e,t,i)},p(e,[i]){e[1]?n?(n.p(e,i),2&i&&Fu(n,1)):(n=nd(e),n.c(),Fu(n,1),n.m(t.parentNode,t)):n&&(Ru(),Au(n,1,1,(()=>{n=null})),Ou())},i(e){Fu(n)},o(e){Au(n)},d(e){e&&Rc(t),n&&n.d(e)}}}function rd(e,t,n){let i
hc(e,Xu,(e=>n(0,i=e)))
let{ms:r=3e3}=t,s=!1,o=0,a=""
const l=(e,t)=>{clearTimeout(o),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
n(2,a=`translate(${t}px, ${e.offsetTop}px)`),n(1,s=!0)}(),t>0&&(o=setTimeout((()=>{var e
n(1,s=!1),i="",e=i,Xu.set(e)}),t))):n(1,s=!1)}
du((()=>clearTimeout(o)))
return e.$$set=e=>{"ms"in e&&n(3,r=e.ms)},e.$$.update=()=>{9&e.$$.dirty&&l(i,r)},[i,s,a,r,()=>{n(1,s=!1)}]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4")
class sd extends Vu{constructor(e){super(),zu(this,e,rd,id,ac,{ms:3})}}let od
function ad(e){e&&(!function(){if(!od)od=!0,new sd({target:document.body})}(),Xu.set(e))}function ld(e,t){return Array.from(e,t)}function cd(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function ud(e,t){return ld(cd(e,t))}function dd(e){return e.trim()}function hd(e){const t=n(e)
if(pl(t))return dd(t)}function fd(e,t){return hd(t).includes(e)}function pd(e,...t){return(...n)=>e(...t,...n)}let gd=0,_d=0,vd=0
function md(){return gd||(gd=t("pCL")),gd}function yd(){return _d||(_d=t("pCC")),_d}function bd(){const e=ud("a",md()).filter(function(e){return pd(fd,e)}("message"))
e.length&&async function(){const e=new Audio(hl("defaultMessageSound"))
try{await e.play()}catch(e){ad("Message Sound Not Allowed")}}()}function wd(e,t,n,i){var r
Al(e,t,n,{once:!0,...(r=i,fl(r)?{capture:r}:r)})}let kd=0,Sd=0,Ed=0,xd=0,Pd=0,Cd=0
function Td(e){Sd=e.clientX,Ed=e.clientY}function $d(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(kd,null).transform)
xd=e[0]-Sd,Pd=e[1]-Ed}function Id(e){e.clientX===Sd&&e.clientY===Ed||(kd.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+xd).toString()}, ${(e.clientY+Pd).toString()})`,Td(e))}function Ld(e){return function(e){const t=performance.now()
t-Cd>16&&(Id(e),Cd=t)}(e),e.preventDefault(),!1}function Rd(e){return Id(e),function(e,t,n,i){e instanceof EventTarget&&e.removeEventListener(t,n,i)}(document.body,"dragover",Ld),e.preventDefault(),!1}function Od(e,t){!function(e,t){kd=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),Td(t),$d(),Cd=0,t.dataTransfer.setData("text/plain",""),Al(document.body,"dragover",Ld),wd(document.body,"drop",Rd)}function Fd(e,t){e.draggable=!0,Al(e,"dragstart",pd(Od,t))}function Ad(e){return String(e).replaceAll(" ","_")}const Md={}
function jd(e,t,n){if(!e)return
const i=function(e,t){let n=Ad(e)
return t&&(n+=`__${Ad(t)}`),n}(e,t),r=function(e,t){let n=e
return t&&(n+=`__${Ad(t)}`),n}(i,n)
Md[r]||(Md[r]=!0,Xs(i,function(e){return e?{eventLabel:e}:null}(n)))}let Nd=0
function Dd(e){const t=l(/\sguildId: (?<id>\d{1,6}),/,n(e))
t&&(Nd=Number(t))}function Bd(){return Nd||ud("script",document.body).forEach(Dd),Nd}function Hd(e){return Object.entries(e)}function qd(e,t,[n,i]){bl(i)&&null!==i?e(t[n],i):t[n]=i}function Ud(e,t){Hd(t).forEach(pd(qd,Ud,e))}function Gd(e,t){const n=document.createElement(e)
return t&&Ud(n,t),n}function Wd(e){return Gd("div",e)}function zd(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function Vd(e,t){return ld(zd(e,t))}function Qd(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function Jd(e,t){t instanceof Element&&(t.innerHTML=String(e))}const Kd={id:"content",style:{display:"none"}},Xd={width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}
function Yd(e){let n=t("content")
n?Jd("",n):(n=Wd(Kd),Qd(document.body,n)),$(n).dialog(Xd),Vd("ui-dialog-titlebar-close").forEach((e=>e.blur())),e(n)}async function Zd(e){(await e).default()}function eh(){Zd(import("./buffLog-C1TXc81v.js"))}function th(){Zd(import("./combatLog-nTjrRlxC.js"))}function nh(){Zd(import("./creatureLog-D5HUaYYS.js"))}function ih(){Zd(import("./fsboxlog-D_NjIl3D.js"))}function rh(){Zd(import("./guildLog-CHWK17h4.js"))}function sh(){Zd(import("./guildTracker-MkikHjWy.js"))}async function oh(e){(await import("./injectAuctionSearch-BOth2cBo.js")).default(e)}async function ah(e){(await import("./findBuffs-CXXFIvv9.js")).injectFindBuffs(e)}async function lh(e){(await import("./findBuffs-CXXFIvv9.js")).injectFindOther(e)}async function ch(e){(await import("./injectOnlinePlayers-CugG2ZZ3.js")).default(e)}function uh(){Zd(import("./potReport-C_-jybaq.js"))}function dh(){Zd(import("./quickExtract-rGF1SQiR.js"))}function hh(){Zd(import("./quickLinksManager-DKcxpaJl.js"))}async function fh(e){(await import("./quickWear-3T_oOLRA.js")).default(e)}function ph(){Zd(import("./recipeMgr-BG3rBdTu.js"))}function gh(){Zd(import("./reliclist-CuX3pCEI.js"))}function _h(){Zd(import("./superelite-B97BSDXr.js"))}function vh(e){return new Promise((t=>{setTimeout(t,e)}))}function mh(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class yh extends Error{constructor([e,t,n,i],...r){super(function(e,t,n,i){const r=`${t.status} ${t.statusText} - `
if(t.statusText===i.toString())return r+mh(e)
const s=`${r+n} ${i} - ${mh(e)}`
return"parsererror"===n?`${s} - ${t.responseText}`:s}(e,t,n,i),...r),Error.captureStackTrace&&Error.captureStackTrace(this,yh),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=i}}function bh(e){Al(window,"beforeunload",(()=>e.abort()))}const wh=900
let kh=0
const Sh=5
let Eh=0
async function xh(){Eh<Sh-$.active&&performance.now()-kh>=wh?(Eh=Sh-$.active,kh=performance.now()):await vh(100)}async function Ph(e,t=10){await async function(){for(;Eh<1;)await xh()
Eh-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=bh,$.ajax(t).fail(((e,t,n)=>{e.textStatus=t,e.errorThrown=n}))}(e)}catch(n){if(t&&n.status>500)return Ph(e,t-1)
!function(e,t){if(![0,500,503].includes(t.status))throw new yh([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}function Ch(e){return Ud(e,{url:Ro,data:{no_mobile:1}}),Ph(e)}async function Th(e){return wl(await Ch({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function $h(e){return Th({cmd:"export",...e})}function Ih(){return $h({inc_tagged:"1",subcmd:"guild_store"})}function Lh(e){return Gd("a",e)}function Rh(e){e instanceof Element&&e.click()}function Oh(e,t){const n=URL.createObjectURL(e),i=Lh({download:t,href:n,style:{display:"none"}})
Qd(document.body,i),Rh(i),document.body.removeChild(i),setTimeout((()=>{URL.revokeObjectURL(n)}),0)}async function Fh(e,t){return wl(await Ph({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function Ah(e){return Fh(e,{method:"POST"})}function Mh(e,t){const n=[]
for(let i=0;i<t.length;i+=e)n.push(t.slice(i,i+e))
return n}let jh,Nh=null
function Dh(){const e=t("holdtext")
if(e&&!Nh){const t=l(/fallensword.com\/\?ref=(?<id>\d+)/,n(e))
t&&(Nh=Number(t))}return Nh}function Bh(e){return new Promise(((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)}))}function Hh(){return jh||(jh=function(e,t){const n=indexedDB.open(e)
n.onupgradeneeded=()=>n.result.createObjectStore(t)
const i=Bh(n)
return(e,n)=>i.then((i=>n(i.transaction(t,e).objectStore(t))))}("keyval-store","keyval")),jh}const qh=e=>{["QuotaExceededError","NotFoundError"].includes(e?.name)||$l.notify(e,"idbkeyval")}
async function Uh(e,t){try{return await function(e,t=Hh()){return t("readonly",(t=>Bh(t.get(e))))}(e,t)}catch(e){qh(e)}}async function Gh(e,t,n){try{return await function(e,t,n=Hh()){return n("readwrite",(n=>(n.put(t,e),Bh(n.transaction))))}(e,t,n)}catch(e){qh(e)}}const Wh=({folder_id:e})=>-2!==(e??-2),zh=({folder_id:e})=>-2===e,Vh=({player_id:e})=>-1!==(e??-1),Qh=({player_id:e})=>e,Jh=({player_id:e})=>-1===e,Kh=([e,t,n])=>Mh(20,e).map((e=>[e,t,n])),Xh=e=>({inv_id:t})=>t===e.inv_id,Yh=(e,t)=>e.attributes.find((({id:e})=>e===t))?.value??0,Zh=(e,t)=>({...t,armor:Yh(e,2),attack:Yh(e,0),damage:Yh(e,4),defense:Yh(e,1),hp:Yh(e,3),set_name:e.set_name??""}),ef=(e,t)=>t.forge||t.stats?.set_name,tf=e=>e?.s?e.r.items:[],nf=e=>[[e.filter(Wh),Dh,0],[e.filter(zh),Dh,1],[e.filter(Vh),Qh,7],[e.filter(Jh),Dh,4]].flatMap(Kh)
function rf(e){return function(){const t=this.data(),n=e.find(Xh(t))
n?.attributes&&(t.stats=Zh(n,t.stats),this.invalidate())}}const sf=async()=>await Uh(`fsh_${Fl.subcmd}_cache`)??[],of=e=>Gh(`fsh_${Fl.subcmd}_cache`,e),af=e=>t=>e.every((e=>e.inv_id!==t.inv_id))
async function lf(e,t,n){const i=await(r={item_id:e.map((({item_id:e})=>e)),inv_id:e.map((({inv_id:e})=>e)),p:e.map(t),t:e.map((()=>n))},Ah({cmd:"fetchitem",compare:0,...r}))
var r
return i?.s&&(i.r.items=((e,t)=>t.map(((t,n)=>({...t,inv_id:e[n].inv_id}))))(e,i.r.items),await async function(e){const t=(await sf()).filter(af(e))
await of(t.concat(e))}(i.r.items)),i}const cf=(e,t)=>{return t.filter((n=ld(e.data()),e=>n.some((t=>e.inv_id===t.inv_id))))
var n}
async function uf(e){const t=e.rows(ef),n=await async function(e){const t=await sf(),n=cf(e,t)
return await of(n),n}(t)
t.every(rf(n))}async function df(e){const t=new DataTable(e)
await uf(t),t.draw()}const hf=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],ff=e=>{return[...hf(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??"",t?.set_attack??"",t?.set_defense??"",t?.set_armor??"",t?.set_hp??"",t?.set_damage??""]),e.cached].join(",")
var t}
function pf(e){return()=>Yd(e)}var gf=[{section:"Character",menu:[{label:"Buff Log",fn:eh},{label:"Combat Log",fn:th},{label:"Creature Log",fn:nh},{label:"Recipe Manager",fn:ph},{label:"Quick Links",fn:hh},{label:"Inventory Manager",href:`${Vo}invmanagernew`}]},{section:"Actions",menu:[{label:"Find Buffs",fn:pf(ah)},{label:"Find Other",fn:pf(lh)},{label:"Online Players",fn:pf(ch)},{label:"AH Quick Search",fn:pf(oh)}]},...Bd()?[{section:"Guild",menu:[{label:"Guild Inventory",href:`${Vo}guildinvmgr`},{label:"New Guild Log",fn:rh},{label:"Merc Hunter",fn:function(){Zd(import("./mercs-Dyt9A70K.js"))}},{label:"Pot Report",fn:uh},{label:"Guild Tracker",fn:sh}]}]:[],{section:"Extra",menu:[{label:"Quick Extract",fn:dh},{label:"Quick Wear",fn:pf(fh)},{label:"FS Box Log",fn:ih},{label:"SE Tracker",fn:_h}]},...hl("betaOptIn")&&Bd()?[{section:"Beta Features",menu:[{label:"Relic List",fn:gh,beta:!0},{label:"GS Export",fn:async function(){if(!Bd())return
const e=await Ih(),t=await Uh("fsh_guildinvmgr_cache")??[],n=e.items.map((e=>t=>{const n=e.find((({inv_id:e})=>e===t.inv_id))
return n?.attributes?{...t,stats:{...t.stats,armor:Yh(n,2),attack:Yh(n,0),damage:Yh(n,4),defense:Yh(n,1),hp:Yh(n,3),set_name:n.set_name??"",...n.set_name&&{set_armor:Yh(n.set_bonuses,2)},...n.set_name&&{set_attack:Yh(n.set_bonuses,0)},...n.set_name&&{set_damage:Yh(n.set_bonuses,4)},...n.set_name&&{set_defense:Yh(n.set_bonuses,1)},...n.set_name&&{set_hp:Yh(n.set_bonuses,3)}},cached:!0}:{...t,cached:!1}})(t))
var i
Oh((i=`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name,set_attack,set_defense,set_armor,set_hp,set_damage,cached\n${(e=>e.map(ff).join("\n"))(n)}\n`,new Blob([i],{type:"text/csv"})),"gs_export.csv")},beta:!0},{label:"Who's Got What",fn:function(){Zd(import("./whosGotWhat-B2LZoGxn.js"))},beta:!0}]}]:[],{section:"FSH developer quick links",menu:[{playerId:1963510,playerName:"PointyHair"},{playerId:1674838,playerName:"Lusterless"}]}]
function _f(e,t,n){const i=e.slice()
return i[7]=t[n],i}function vf(e,t,n){const i=e.slice()
return i[10]=t[n],i}function mf(e){let t,n,i,r,s
function o(){return e[5](e[10])}return{c(){t=Fc("button"),t.textContent="PM",n=Mc(),i=Fc("a"),i.textContent=`${e[10].playerName}`,Hc(t,"type","button"),Hc(t,"class","helperDevBtn svelte-8sy7i5"),Hc(i,"href",qo+"menuItem.playerId"),Hc(i,"class","svelte-8sy7i5")},m(e,a){Lc(e,t,a),Lc(e,n,a),Lc(e,i,a),r||(s=Nc(t,"click",o),r=!0)},p(t,n){e=t},d(e){e&&(Rc(t),Rc(n),Rc(i)),r=!1,s()}}}function yf(e){let t,n,i
function r(){return e[4](e[10])}return{c(){t=Fc("a"),t.textContent=`${e[10].label}`,Hc(t,"href",e[10].href),Hc(t,"class","svelte-8sy7i5")},m(e,s){Lc(e,t,s),n||(i=Nc(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&Rc(t),n=!1,i()}}}function bf(e){let t,n,i
function r(){return e[3](e[10])}return{c(){t=Fc("button"),t.textContent=`${e[10].label}`,Hc(t,"type","button"),Hc(t,"class","svelte-8sy7i5")},m(e,s){Lc(e,t,s),n||(i=Nc(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&Rc(t),n=!1,i()}}}function wf(e){let t,n
let i=function(e,t){return e[10].fn?bf:e[10].href?yf:e[10].playerName?mf:void 0}(e),r=i&&i(e),s=e[10].beta&&function(e){let t
return{c(){t=Fc("sup"),t.textContent="beta",Hc(t,"class","fshRed")},m(e,n){Lc(e,t,n)},d(e){e&&Rc(t)}}}()
return{c(){t=Fc("li"),r&&r.c(),n=Mc(),s&&s.c()},m(e,i){Lc(e,t,i),r&&r.m(t,null),Tc(t,n),s&&s.m(t,null)},p(e,t){r&&r.p(e,t)},d(e){e&&Rc(t),r&&r.d(),s&&s.d()}}}function kf(e){let t,n,i,r,s=Nu(e[7].menu),o=[]
for(let t=0;t<s.length;t+=1)o[t]=wf(vf(e,s,t))
return{c(){t=Fc("h2"),t.textContent=`${e[7].section}`,n=Mc(),i=Fc("ul")
for(let e=0;e<o.length;e+=1)o[e].c()
r=Mc(),Hc(t,"class","svelte-8sy7i5")},m(e,s){Lc(e,t,s),Lc(e,n,s),Lc(e,i,s)
for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(i,null)
Tc(i,r)},p(e,t){if(7&t){let n
for(s=Nu(e[7].menu),n=0;n<s.length;n+=1){const a=vf(e,s,n)
o[n]?o[n].p(a,t):(o[n]=wf(a),o[n].c(),o[n].m(i,r))}for(;n<o.length;n+=1)o[n].d(1)
o.length=s.length}},d(e){e&&(Rc(t),Rc(n),Rc(i)),Oc(o,e)}}}function Sf(e){let t,n=Nu(gf),i=[]
for(let t=0;t<n.length;t+=1)i[t]=kf(_f(e,n,t))
return{c(){for(let e=0;e<i.length;e+=1)i[e].c()
t=jc()},m(e,n){for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,n)
Lc(e,t,n)},p(e,[r]){if(7&r){let s
for(n=Nu(gf),s=0;s<n.length;s+=1){const o=_f(e,n,s)
i[s]?i[s].p(o,r):(i[s]=kf(o),i[s].c(),i[s].m(t.parentNode,t))}for(;s<i.length;s+=1)i[s].d(1)
i.length=n.length}},i:Zl,o:Zl,d(e){e&&Rc(t),Oc(i,e)}}}function Ef(e){const t=hu()
function n(e){jd("helperMenu",e)}function i(e,i){yl(i)&&(n(e),t("toggle"),i())}function r(e){t("toggle"),n("sendMsg"),window.openQuickMsgDialog(e)}return[n,i,r,e=>i(e.label,e.fn),e=>n(e.label),e=>r(e.playerName)]}class xf extends Vu{constructor(e){super(),zu(this,e,Ef,Sf,ac,{})}}function Pf(e){let t,n,i,r
return n=new xf({}),n.$on("toggle",e[4]),{c(){t=Fc("div"),Uu(n.$$.fragment),Hc(t,"class","modal svelte-gt76l6")},m(e,i){Lc(e,t,i),Gu(n,t,null),r=!0},p:Zl,i(e){r||(Fu(n.$$.fragment,e),e&&ku((()=>{r&&(i||(i=ju(t,Zu,{duration:100},!0)),i.run(1))})),r=!0)},o(e){Au(n.$$.fragment,e),e&&(i||(i=ju(t,Zu,{duration:100},!1)),i.run(0)),r=!1},d(e){e&&Rc(t),Wu(n),e&&i&&i.end()}}}function Cf(e){let t,n,i,r,s,o,a=e[1]&&Pf(e)
return{c(){t=Fc("div"),n=Fc("button"),n.textContent="Helper Menu",i=Mc(),a&&a.c(),Hc(n,"type","button"),Hc(n,"class","toggle svelte-gt76l6"),Yc(n,"helper-menu-move",e[3]),Hc(t,"class","helper-menu svelte-gt76l6"),Yc(t,"helper-menu-fixed",e[2])},m(l,c){Lc(l,t,c),Tc(t,n),Tc(t,i),a&&a.m(t,null),e[5](t),r=!0,s||(o=Nc(n,"click",e[4]),s=!0)},p(e,[n]){e[1]?a?(a.p(e,n),2&n&&Fu(a,1)):(a=Pf(e),a.c(),Fu(a,1),a.m(t,null)):a&&(Ru(),Au(a,1,1,(()=>{a=null})),Ou())},i(e){r||(Fu(a),r=!0)},o(e){Au(a),r=!1},d(n){n&&Rc(t),a&&a.d(),e[5](null),s=!1,o()}}}function Tf(e,t,n){const i=hl("keepHelperMenuOnScreen"),r=hl("draggableHelperMenu")
let s=0
cu((()=>{r&&Fd(s)}))
let o=!1
return[s,o,i,r,function(){n(1,o=!o)},function(e){gu[e?"unshift":"push"]((()=>{s=e,n(0,s)}))}]}class $f extends Vu{constructor(e){super(),zu(this,e,Tf,Cf,ac,{})}}function If(){const e=kl(".mainbody")
e&&function(e,t){new $f({target:t.parentElement,props:{props:e}})}({},e)}function Lf(e){return(new DOMParser).parseFromString(e,"text/html")}function Rf(e){return Ch({data:e})}async function Of(e){const t=await Rf(e)
if(t)return Lf(t)}function Ff(e){const n=t("info-msg",e)
if(n){const e=n.innerHTML
return e?e.replace(/<br.*/,""):""}}let Af=0
const Mf=()=>Af
function jf(){Af=hl("sendGoldonWorld")}async function Nf(){if(!Mf())return
jd("NewMap","doSendGold")
const e=await Of({cmd:"trade",subcmd:"sendgold",xc:window.ajaxXC,target_username:$("#HelperSendTo").html(),gold_amount:$("#HelperSendAmt").html().replace(/[^\d]/g,"")})
e&&function(e){const t=Ff(e)
"You successfully sent gold!"!==t&&""!==t||(vl("currentGoldSentTotal",parseInt(hl("currentGoldSentTotal"),10)+parseInt(hl("goldAmount"),10)),GameData.fetch(La))}(e)}function Df(e){window.location=e}function Bf(e){hl("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function Hf(e){jd("keyHandler",e)}function qf(e){return e?.toLowerCase?.()}function Uf(e,t){return qf(e)<qf(t)?-1:qf(e)>qf(t)?1:0}function Gf(e){return Fh(e,{method:"GET"})}function Wf(e){return Gf({cmd:"profile",...e})}async function zf(){const e=await Wf({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort(((e,t)=>Uf(e.name,t.name)))}:e}function Vf(e,t,...n){return e(...n)}function Qf(){return Vf(zf)}const Jf=[e=>e?.s,(e,t)=>e.r?.length>t]
async function Kf(e){const t=await Qf()
if(((e,t)=>Jf.every((n=>n(t,e))))(e,t)){Hf("changeCombatSet")
const n=t.r[e].id
Bf("2"),Df(`${Ho+Ao}managecombatset&submit=Use&combatSetId=${n}`)}}function Xf(e,n){t("worldPage")||(Hf(e),Df(n))}function Yf(){Fl.enableMaxGroupSizeToJoin?Df(ia):Df(na)}function Zf(){Hf("logPage"),Bf("2"),Df(Do)}function ep(e){const t=kl(`#pCC input[value="${e}"]`)
t&&(Hf("movePage"),Rh(t))}const tp=[["!",Kf,0],["@",Kf,1],['"',Kf,1],["#",Kf,2],["£",Kf,2],["$",Kf,3],["%",Kf,4],["^",Kf,5],["&",Kf,6],["*",Kf,7],["(",Kf,8],["0",function(){Xf("toWorld",ra)}],["<",ep,"<"],[">",ep,">"],["G",function(){Hf("createGroup"),Bf("4"),Df(`${Zo}create`)}],["L",Zf],["b",function(){Hf("backpack"),Bf("2"),Df(Uo)}],["g",function(){Hf("gotoGuild"),Bf("4"),Df(`${Ko}manage`)}],["j",function(){Hf("joinAllGroup"),Bf("4"),Yf()}],["l",Zf],["p",function(){Hf("profile"),Bf("2"),Df(Ho)}],["r",function(){Xf("doRepair",`${aa+Ao}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in Fl&&!Fl.dialogIsClosed()||(Hf("insertQuickWear"),Yd(fh))}],["y",Nf]]
const np=[e=>["HTML","BODY"].every((t=>e.target.tagName!==t)),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function ip(e){var t;(t=e,np.some((e=>e(t))))||function(e){const t=tp.find((([t])=>e===t))
t&&t[1](t[2])}(e.key)}function rp(){Al(document,"keyup",ip)}function sp(e,t){return hd(t)===e}function op(e){return pd(sp,e)}function ap(e,t,n){Al(e,"click",t,n)}function lp(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function cp(e,t){return ld(lp(e,t))}function up(e){ap(e,(()=>{jd("chrome","Game Help link")})),Jd(`<a href="${Fo}settings">Game Help</a>`,e)}function dp(){cp("#pCR h3").filter(op("Game Help")).forEach(up)}function hp(e){Fl[e]=hl(e)}function fp(e,t){if(t instanceof Element)return t.closest(e)}function pp(e){e?.classList&&e.classList.add("fshHide")}function gp(e){const n=fp("a",e.target)
n?.getAttribute("href")===Xo&&(jd("useNewGuildLog","Alter Href"),e.preventDefault(),rh(),pp(t("notification-guild-log")))}function _p(){return Fl.huntingMode&&window.realmKeyHandler}function vp(e){e.forEach((e=>Kl(3,e)))}function mp(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function yp(){return yl(window.jQuery)}function bp(){return!yp()}var wp=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function kp(e){return function(e){return-1!==e&&0===kl(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?(jd("accordion","collapse"),-1):e}const Sp=(e,t,n)=>$(e).data(`${n}${t}`)
function Ep(e,t,n){return new Promise((i=>{const r=Sp(e,t,n)
r?i(r):function(e,t,n,i){$(e).on(`${qf(t)}create`,(()=>{i(Sp(e,t,n))}))}(e,t,n,i)}))}const xp=[[e=>!bl(e),()=>Ml("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>Ml("$('#nav').data('hcsNav').heights does not exist")]]
async function Pp(){const e=t("nav"),n=await Ep(e,"Nav","hcs")
return function(e){const t=xp.find((([t])=>t(e)))
return!t||(t[1](),!1)}(n)?{theNav:e,myNav:n}:{}}function Cp(){!function(){const e=hl("lastActiveQuestPage")
hl("storeLastQuestPage")&&e.length>0&&(t("nav-character-questbook").href=e)}(),function(){const e=hl("lastScavPage")
hl("storeLastScavPage")&&e.length>0&&(t("nav-actions-artisanship-scavenging").href=e)}()}async function Tp(){const{theNav:e,myNav:t}=await Pp()
e&&t&&(Cp(),async function(e,t){const n=wp.map((e=>[e,hl(e)]))
n.some((([,e])=>e))&&(await import("./injectItems-RqkAK9ZJ.js")).default(e,t,mp(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,kp(n))}}(t))}function $p(e,t){return t?.classList?.contains(e)}function Ip(e,t){t instanceof Node&&(t.textContent=String(e))}let Lp
function Rp(){return Lp||(Lp=t("quickMessageDialog")),Lp}let Op,Fp=0
function Ap(e){(function(){if(!Fp){const e=zd("validateTips",Rp())
1===e.length&&([Fp]=e)}return Fp})()&&Ip(jl(e,""),Fp)}function Mp(){return Op||(Op=t("quickMsgDialog_msg"),Op.maxLength=512),Op}let jp,Np=null,Dp=0,Bp=0
function Hp(e){"Enter"!==e.key||e.shiftKey||(jd("messaging","sendOnEnter"),e.preventDefault(),function(){if(!Bp){const e=$(Rp()).dialog("option","buttons")
Bp=e["Send Message"]}return Bp}()())}function qp(){_o(Np)&&(Np=hl("enterForSendMessage")),Np&&!Dp&&(Al(Mp(),"keypress",Hp),Dp=!0)}function Up(e,t){return $p(t[0],e)}function Gp(e,t,n){const{target:i}=n,r=t.find(pd(e,i))
if(r)return r[1](i)}function Wp(e){return pd(Gp,Up,e)}function zp(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function Vp(e,t){zp(e,"beforeend",t)}function Qp(e,t){if("string"==typeof t){const e=a(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function Jp(e){const t=hl(e)
if(t)return wl(t,Qp)}function Kp(e,t,n){return JSON.stringify(e,t,n)}function Xp(e,t){vl(e,Kp(t))}let Yp=0,Zp=0,eg=0
function tg(e,t,n){const i=Zp.insertRow(e)
let r=i.insertCell(-1)
Vp(r,t),r=i.insertCell(-1),Vp(r,n)}function ng(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function ig(e,t){tg(e,ng("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const rg=[["del-button",function(e){jd("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
Zp.deleteRow(t),Yp.splice(t-2,1),Xp("quickMsg",Yp)}],["add-button",function(e){jd("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){ig(e.parentNode.parentNode.rowIndex,n),t.value="",Yp.push(n),Xp("quickMsg",Yp)}}],["add-template",function(e){jd("messaging","insertTemplate"),Mp().value+=`${n(e).replace(/\{playername\}/g,jp)}`}]]
function sg(e){ig(-1,e)}function og(){hl("enableMessageTemplates")&&!eg&&(ap((Zp||(Zp=Rp().lastElementChild),Zp),Wp(rg)),(Yp||(Yp=Jp("quickMsg")),Yp).forEach(sg),tg(-1,ng("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),eg=!0)}function ag(e,n,i){const r=Rp()
$p("ui-dialog-content",r)&&(!function(e){jp=e,Ip(e,t("quickMsgDialog_targetUsername"))}(e),function(e){const t=Mp()
t.value=jl(e,""),t.disabled=!1}(n),Ap(i),og(),qp(),$(r).dialog("open"))}function lg(e){const n=t(e)
n&&(n.classList.add("pCR"),Qd(md(),n))}function cg(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function ug(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?cg(t,e.firstChild):Qd(e,t)}(e,t)}function dg(e){const n=t(e)
n&&ug((vd||(vd=t("pCR")),vd),n)}const hg=[function(){hl("moveGuildList")&&dg("minibox-guild")},function(){hl("moveOnlineAlliesList")&&dg("minibox-allies")},function(){hl("moveXmasBox")&&lg("minibox-xmas")},function(){hl("moveDailyQuest")&&lg("minibox-daily-quest")},function(){hl("moveFSBox")&&lg("minibox-fsbox")},function(){(Fl.enableAllyOnlineList||Fl.enableEnemyOnlineList)&&Zd(import("./allyEnemy-BKP9JKty.js"))},function(){(Fl.enableWantedList||Fl.enableActiveBountyList)&&Zd(import("./activeWantedBounties-B2ZjMh3M.js"))},function(){Fl.enableGuildInfoWidgets&&Zd(import("./addGuildInfoWidgets-DCLljo3d.js"))},function(){Fl.enableOnlineAlliesWidgets&&Zd(import("./addOnlineAlliesWidgets-EEulOrD7.js"))},function(){Fl.enableTempleAlert&&Zd(import("./injectTempleAlert-5wRn2fw-.js"))},function(){Fl.enableUpgradeAlert&&Zd(import("./injectUpgradeAlert-BbgF-yws.js"))},function(){Fl.enableComposingAlert&&Zd(import("./injectComposeAlert-BuCYkit0.js"))},function(){md()&&!bp()&&Tp()},function(){bp()||(window.openQuickMsgDialog=ag)},function(){hl("statBarLinks")&&Zd(import("./statBar-Cd0ZtOx8.js"))},function(){hl("staminaCalculator")&&Zd(import("./injectStaminaCalculator-BLY5-eqj.js"))},function(){hl("levelUpCalculator")&&Zd(import("./injectLevelupCalculator-Nti8TBFl.js"))},function(){hl("fsboxlog")&&Zd(import("./fsbox-CE25MxRJ.js"))},function(){hl("resizeQuickBuff")&&Zd(import("./interceptQuickBuff-ChKAKeB0.js"))},function(){hl("joinAllLink")&&Zd(import("./injectJoinAllLink-CMDUqcQ2.js"))},function(){hl("addServerNode")&&Zd(import("./injectServerNode-BEqt3qo8.js"))},function(){hl("addScoutTowerLink")&&Zd(import("./scoutTowerLink-D52kx7yZ.js"))},function(){yp()&&hl(Da)&&Zd(import("./guildActivity-Dv3U73h0.js"))},async function(){if(yp()&&Fl.enableSeTracker){const e=await import("./trackerPrefStore-l6RUnAKF.js").then((function(e){return e.a}))
e.default.set(Fl.enableSeTracker)}}]
const fg=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function pg(){_p()||(fg.forEach(hp),Fl.allyEnemyOnlineRefreshTime=1e3*hl("allyEnemyOnlineRefreshTime"),Fl.useNewGuildLog&&(Al(document.body,"click",gp),Al(document.body,"auxclick",gp)),vp(hg))}function gg(e){const t=wl(e)
t?.["new-ui"]&&(hl("gameHelpLink")&&Kl(3,dp),Fl.huntingMode=hl("huntingMode"),Kl(3,rp),pg(),hl("hideHelperMenu")||Kl(3,If))}function _g(){const e=function(){const e=t("html")
if(e?.dataset)return e.dataset.hcs}()
e&&gg(e)}function vg(){yp()&&t("worldPage")&&window.GameData&&Zd(import("./newMap-DHFCpW90.js"))}function mg(e){$(e).qtip("hide")}function yg(e){vl("needToPray",e),vl("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}let bg=0
const wg='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',kg=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${Fo}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
async function Sg(e){const t=e.target.getAttribute("praytype")
t&&(jd("notification","prayToGods"),mg(e.target),await Rf({cmd:"temple",subcmd:"pray",type:t}),bg.outerHTML=wg,yg(!1))}function Eg(){Vp(t("notifications"),kg),bg=t("helperPrayToGods"),wd(bg,"click",Sg)}async function xg(){if(!Fl.enableTempleAlert)return
const e="temple"===Fl.cmd?document:await Of({cmd:"temple"})
if(!e)return
const t=kl("#pCC",e)
if(!t)return
const n="You are currently praying at the temple."!==hd(t)
n&&Eg(),yg(n)}const Pg={"-":{"-":()=>{Zd(import("./arena-CBEsg6Xv.js").then((function(e){return e.c})))}},dojoin:{"-":()=>{Zd(import("./arenaDoJoin-B3bPqNRq.js"))}},join:{"-":()=>{Zd(import("./arenaJoin-Dc-i5Jxc.js"))}},completed:{"-":()=>{Zd(import("./completedArenas-iMnL8nAr.js"))}},pickmove:{"-":()=>{Zd(import("./storeMoves-1xYsRhna.js"))}},setup:{"-":()=>{Zd(import("./setupMoves-DmuTTNqQ.js"))}}}
function Cg(){Zd(import("./bioWidgets-DBfXW1tE.js"))}function Tg(){Zd(import("./injectGuild-CB2OPmsi.js"))}const $g=()=>{Zd(import("./guildAdvisor-CcG76Jk_.js"))}
const Ig=()=>{Zd(import("./groups-Bh9wNWBH.js"))}
const Lg=()=>{Zd(import("./addRemoveTags-CV-7PTsn.js"))}
const Rg=()=>{Zd(import("./guildChat-nN2LChVC.js"))}
function Og(){Zd(import("./viewRecipe-CQZdhfbt.js"))}function Fg(){Zd(import("./ufsgAllowBack-zKzT8gOi.js"))}function Ag(){Zd(import("./profile-B3zI9-KB.js").then((function(e){return e.p})))}function Mg(){Zd(import("./news-B3SwD5_t.js"))}function jg(){Zd(import("./viewArchive-CsZ1fHqI.js"))}const Ng=()=>{Zd(import("./inventory-DFl9R-tl.js"))},Dg=()=>{Zd(import("./bazaar-Dn2oyspB.js"))}
function Bg(){Zd(import("./injectQuestBookFull-Bk7zLVgS.js"))}const Hg=()=>{Zd(import("./scavenging-CdQYzN67.js"))}
const qg=()=>{Zd(import("./toprated-CbCyomKk.js"))}
const Ug=()=>{Zd(import("./trade-dNRqg-u3.js"))}
var Gg={creatures:{"-":{"-":Fg}},items:{"-":{"-":Fg},view:{"-":()=>{Zd(import("./itemsView-BHUnjQ2Z.js"))}}},masterrealms:{"-":{"-":Fg}},quests:{"-":{"-":Fg},view:{"-":()=>{Zd(import("./showAllQuestSteps--HphtXi1.js"))}}},realms:{"-":{"-":Fg}},relics:{"-":{"-":Fg}},shops:{"-":{"-":Fg}},"-":{news:{"-":Mg},viewupdatearchive:{"-":jg},viewarchive:{"-":jg},"-":{"-":()=>{Zd(import("./unknownPage-CaNF-uNw.js"))}}},arena:Pg,auctionhouse:{"-":{"-":()=>{Zd(import("./injectAuctionHouse-BfrC2BIa.js"))}},quickcreate:{"-":()=>{Zd(import("./quickCreate-BB_1BRoS.js"))}}},bank:{"-":{"-":()=>{Zd(import("./injectBank-DepK66C6.js"))}}},blacksmith:{repairall:{"-":function(){Yl("fromworld")&&vg()}}},buffmarket:{"-":{"-":()=>{Zd(import("./injectBuffmarket-DLXiddC4.js"))}}},combat:{attackplayer:{"-":Ag}},composing:{"-":{"-":()=>{Zd(import("./composing-BO_wT84A.js"))}},breakdown:{"-":()=>{Zd(import("./breakdown-BFKuTSiz.js"))}},create:{"-":()=>{Zd(import("./composingCreate-CmWbNLuJ.js"))}}},findplayer:{"-":{"-":()=>{Zd(import("./findplayer-CHNNUBKE.js"))}}},guild:{inventory:{report:()=>{Zd(import("./guildReport-D9a9SH80.js"))},addtags:Lg,removetags:Lg,storeitems:()=>{Zd(import("./storeitems-DoI3jyRB.js"))}},chat:{"-":Rg},dochat:{"-":Rg},log:{"-":()=>{Zd(import("./guildLog-sN3m7bzv.js"))}},groups:{viewstats:()=>{Zd(import("./injectGroupStats-Cg3YrVrI.js"))},joinallgroupsundersize:Ig,joinall:Ig,"-":Ig},manage:{"-":Tg},advisor:{"-":$g,weekly:$g},history:{"-":Cg},view:{"-":Tg},scouttower:{"-":()=>{Zd(import("./injectScouttower-Dt9emJvx.js"))}},mailbox:{"-":()=>{Zd(import("./guildMailbox-F-7wh2uL.js"))}},ranks:{"-":()=>{Zd(import("./rank-ClwZu8s3.js"))}},conflicts:{rpupgrades:()=>{Zd(import("./injectRPUpgrades-BmC06bST.js"))}},bank:{"-":()=>{Zd(import("./injectGuildBank-BRa-_52O.js"))}},hall:{"-":()=>{Zd(import("./hall-55lZz45M.js"))},post:Cg},"-":{"-":Tg}},hellforge:{"-":{"-":()=>{Zd(import("./hellforge-CBfPgCaX.js"))}}},inventing:{"-":{"-":function(){Zd(import("./inventing-DNJQ0xrt.js"))}},doinvent:{"-":Og},viewrecipe:{"-":Og}},log:{"-":{"-":()=>{Zd(import("./playerLog-Bh-OONgV.js"))}}},marketplace:{createreq:{"-":()=>{Zd(import("./marketplace-Dg0Z5hP1.js"))}}},news:{fsbox:{"-":()=>{Zd(import("./newsFsbox-D0elkccn.js"))}},"-":{"-":Mg},shoutbox:{"-":()=>{Zd(import("./newsShoutbox-CxO0sxoU.js"))}},viewupdatearchive:{"-":jg},viewarchive:{"-":jg}},notepad:{showlogs:{"-":th},invmanagernew:{"-":Ng},guildinvmgr:{"-":Ng},recipemanager:{"-":ph},auctionsearch:{"-":oh},onlineplayers:{"-":ch},quicklinkmanager:{"-":hh},monsterlog:{"-":nh},quickextract:{"-":dh},quickwear:{"-":fh},fsboxcontent:{"-":ih},bufflogcontent:{"-":eh},newguildlog:{"-":rh},findbuffs:{"-":ah},findother:{"-":lh},savesettings:{"-":()=>{Zd(import("./load-ibuSVGBq.js"))}},reliclist:{"-":gh}},points:{"-":{"-":()=>{Zd(import("./points-SQpeqPSz.js"))}}},potionbazaar:{"-":{"-":Dg},buyitem:{"-":Dg}},privatemessage:{"-":{"-":()=>{Zd(import("./privateMsg-Dxw6RgBH.js"))}}},profile:{"-":{"-":Ag},managecombatset:{"-":Ag},report:{"-":Ag},equipitem:{"-":Ag},useitem:{"-":Ag},changebio:{"-":Cg},dropitems:{"-":function(){Zd(import("./injectProfileDropItems-hUiqc9wV.js"))}}},pvpladder:{"-":{"-":()=>{Zd(import("./ladder-DEpMYS2f.js"))}}},questbook:{"-":{"-":Bg},atoz:{"-":Bg},viewquest:{"-":()=>{Zd(import("./injectQuestTracker-Vve1Go3Z.js"))}}},quickbuff:{"-":{"-":()=>{Zd(import("./quickBuff-8nbmKd2p.js"))}}},scavenging:{"-":{"-":Hg},process:{"-":Hg}},settings:{"-":{"-":()=>{Zd(import("./injectSettings-B2pPWyI9.js"))}}},skills:{"-":{"-":()=>{}}},superelite:{"-":{"-":()=>{Zd(import("./superelite-CJyKkfHe.js"))}}},tempinv:{"-":{"-":()=>{Zd(import("./mailbox-DeE6X5nX.js"))}}},temple:{"-":{"-":xg}},titan:{"-":{"-":()=>{Zd(import("./injectTitan-B-wbijTe.js"))}}},toprated:{xp:{"-":qg},monthlyxp:{"-":qg},gold:{"-":qg},killstreak:{"-":qg},bounties:{"-":qg},risingstars:{"-":qg},arena:{"-":qg},superelites:{"-":qg},smasher:{"-":qg},globalquest:{"-":()=>{Zd(import("./globalQuest-Bmr5O4v6.js"))}}},trade:{"-":{"-":Ug},sendgold:{"-":Ug},createsecure:{"-":Ug},docreatesecure:{"-":Ug}},world:{"-":{"-":vg}}}
function Wg(e){return Gd("li",e)}function zg(e){return Gd("ul",e)}const Vg=()=>Wd({className:"fshQuickLinks",style:{left:`${hl("quickLinksLeftPx")}px`,top:`${hl("quickLinksTopPx")}px`}}),Qg=e=>"newWindow"in e&&e.url&&e.name
function Jg(e,t){const n=Qd(t,zg())
e.filter(Qg).forEach((e=>{Qd(Qd(n,Wg()),function(e){const t=Lh({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return ap(t,(()=>jd("chrome","quick link",e.name))),t}(e))}))}function Kg(){if(!kl(".mainbody"))return
const e=Jp("quickLinks")||[]
e.length&&function(e){const t=Vg()
t.classList.toggle("fshFixed",hl("keepHelperMenuOnScreen")),hl("draggableQuickLinks")&&(t.classList.add("fshMove"),Fd(t)),Jg(e,t),Qd(document.body,t)}(e)}let Xg=0,Yg=0,Zg=0,e_="",t_=0,n_=0
function i_(e){return Yl(e)||"-"}function r_(e){const t=kl(e)
return t?.value||"-"}function s_(){if(bl(Gg[Xg])&&bl(Gg[Xg][Yg])&&yl(Gg[Xg][Yg][Zg]))return Gg[Xg][Yg][Zg]}function o_(){""!==document.location.search?(Xg=i_("cmd"),Yg=i_("subcmd"),Zg=i_("subcmd2"),["points","privatemessage"].includes(Xg)&&(e_=`/${i_("type")}`)):(Xg=r_('input[name="cmd"]'),Yg=r_('input[name="subcmd"]'),Zg=r_('input[name="subcmd2"]')),Fl.cmd=Xg,Fl.subcmd=Yg,Fl.subcmd2=Zg,n_=`${Xg}/${Yg}/${Zg}${e_}`,t_=s_()}function a_(){yl(t_)&&(ml(n_),t_())}async function l_(e){o_(),await e,_g(),Kl(3,a_),hl("playNewMessageSound")&&Kl(3,bd),_p()||Kl(3,Kg)}const c_=[()=>!("showPicker"in HTMLSelectElement.prototype),()=>!navigator.cookieEnabled,()=>window!==window.parent,function(){if(!d){const e=l(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
u=c.includes(e),d=!0}return u}]
function u_(e,t){if(c_.some((e=>e())))return
const n=Sl("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
Ol(),function(e,t){Fl.gmInfo=wl(decodeURIComponent(t)),Fl.gmInfo?Fl.fshVer=e:Fl.fshVer=`${e}_native`,Fl.calfVer="142"}(e,t),o(),Ys(),l_(n)}export{Vf as $,Eo as A,zg as B,Hd as C,$p as D,Mh as E,Ah as F,Rf as G,Lf as H,al as I,ll as J,lp as K,zu as L,ac as M,Nu as N,Fc as O,Mc as P,Hc as Q,ku as R,Vu as S,Lc as T,Tc as U,Vc as V,Wc as W,Nc as X,Bc as Y,Hu as Z,Du as _,Gf as a,Ya as a$,Zl as a0,Rc as a1,sc as a2,Jp as a3,Ac as a4,Gc as a5,Qc as a6,Xp as a7,n as a8,Ip as a9,rl as aA,cd as aB,s as aC,_h as aD,Oa as aE,va as aF,ma as aG,Sa as aH,ya as aI,mg as aJ,Dh as aK,ra as aL,Ao as aM,ga as aN,Rh as aO,yo as aP,Uh as aQ,Ca as aR,Gh as aS,Ph as aT,wl as aU,Kl as aV,zd as aW,Ja as aX,Qa as aY,Xa as aZ,Ka as a_,Yl as aa,ad as ab,th as ac,nh as ad,vl as ae,Ep as af,Fl as ag,Kp as ah,hl as ai,Vd as aj,Yo as ak,fl as al,jc as am,Ba as an,uo as ao,lo as ap,mo as aq,Fo as ar,hd as as,qf as at,Up as au,Go as av,Wo as aw,Xl as ax,ua as ay,Bo as az,Al as b,Ml as b$,ld as b0,dd as b1,vo as b2,yl as b3,_a as b4,zc as b5,Oc as b6,oa as b7,cc as b8,ta as b9,ka as bA,Ra as bB,Fa as bC,Aa as bD,jf as bE,Mf as bF,Nf as bG,ba as bH,wa as bI,Ia as bJ,ao as bK,Pa as bL,pp as bM,Ff as bN,ho as bO,Wf as bP,bc as bQ,nl as bR,Qf as bS,bl as bT,cl as bU,qa as bV,Bd as bW,Df as bX,zo as bY,il as bZ,ug as b_,wu as ba,ko as bb,xa as bc,$a as bd,Fu as be,Ru as bf,Ou as bg,Au as bh,hu as bi,Uu as bj,Gu as bk,Wu as bl,wo as bm,la as bn,Ku as bo,Ju as bp,Io as bq,jl as br,ol as bs,qo as bt,Uf as bu,fo as bv,go as bw,hc as bx,du as by,Ta as bz,pd as c,Oo as c$,ca as c0,Ch as c1,Ma as c2,op as c3,ja as c4,So as c5,yp as c6,Gd as c7,Ko as c8,Na as c9,Sl as cA,Ua as cB,Zd as cC,wc as cD,sp as cE,No as cF,_o as cG,Za as cH,Po as cI,Wa as cJ,ml as cK,Mg as cL,Bg as cM,Og as cN,Ks as cO,Ih as cP,bo as cQ,df as cR,ef as cS,nf as cT,rf as cU,tf as cV,lf as cW,tl as cX,el as cY,Uc as cZ,oc as c_,Va as ca,Ro as cb,a as cc,Ga as cd,Gp as ce,fc as cf,Yc as cg,_c as ch,vc as ci,gc as cj,fu as ck,gu as cl,qu as cm,Su as cn,nc as co,lu as cp,au as cq,Cu as cr,zp as cs,po as ct,co as cu,$h as cv,oo as cw,Jo as cx,Wg as cy,e as cz,Jd as d,xo as d0,To as d1,$o as d2,Da as d3,sh as d4,ea as d5,Lo as d6,Wp as d7,Co as d8,uh as d9,oh as dA,ch as dB,lh as dC,ah as dD,rh as dE,md as dF,fa as dG,xg as dH,Eg as dI,ih as dJ,Oh as dK,na as dL,ia as dM,za as dN,vh as dO,aa as dP,Uo as dQ,eu as dR,tc as dS,Yf as dT,jo as dU,yc as dV,dh as dW,dc as dX,fh as dY,u_ as dZ,Tg as da,Dc as db,ju as dc,td as dd,da as de,ha as df,cu as dg,Fd as dh,pl as di,qc as dj,Xc as dk,Bu as dl,Xo as dm,Ho as dn,tu as dp,uu as dq,mc as dr,Qo as ds,pa as dt,vp as du,Yd as dv,ph as dw,Vo as dx,eh as dy,hh as dz,Of as e,mp as f,t as g,fp as h,Qd as i,Ha as j,cp as k,sl as l,Wd as m,Lh as n,ap as o,yd as p,kl as q,l as r,jd as s,sa as t,Th as u,Vp as v,bp as w,ud as x,cg as y,wd as z}
//# sourceMappingURL=calfSystem-KuDT30_2.js.map
