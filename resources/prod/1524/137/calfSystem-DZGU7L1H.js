function e(e){return new Promise((t=>{const n=document.createElement("script")
n.async=!0,n.onload=t,n.src=e,document.body.appendChild(n)}))}function t(e,t){return t?t.getElementById(e):document.getElementById(e)}function n(e){if(e instanceof Node)return e.textContent}let i=null
const r=()=>function(){const e=t("statbar-character")
return e&&n(e)}()||"string"==typeof window.self&&window.self
function o(){if(!i){const e=r()
e&&(i=e)}return i}function s(){!function(){e("https://www.googletagmanager.com/gtag/js?id=G-14Y99WX8XL"),window.dataLayer=window.dataLayer||[],window.gtag=window.gtag||function(){window.dataLayer.push(arguments)},gtag("js",new Date)
const t=o()
t&&gtag("config","G-14Y99WX8XL",{user_id:t})}()}function a(e,t){return e.exec(t)}function l(e,t){const n=a(e,t)
if(n)return n[1]}const c=["www.keeprefreshing.com"]
let u=!1,d=!1
const f="undefined"!=typeof window?window:void 0,h="undefined"!=typeof globalThis?globalThis:f,p=Array.prototype,g=p.forEach,_=p.indexOf,v=null==h?void 0:h.navigator,m=null==h?void 0:h.document,y=null==h?void 0:h.location,b=null==h?void 0:h.fetch,w=null!=h&&h.XMLHttpRequest&&"withCredentials"in new h.XMLHttpRequest?h.XMLHttpRequest:void 0,k=null==h?void 0:h.AbortController,S=null==v?void 0:v.userAgent,E=null!=f?f:{},x={DEBUG:!1,LIB_VERSION:"1.176.0"},P=Array.isArray,T=Object.prototype,C=T.hasOwnProperty,I=T.toString,L=P||function(e){return"[object Array]"===I.call(e)},R=function(e){return"function"==typeof e},F=function(e){return e===Object(e)&&!L(e)},O=function(e){if(F(e)){for(const t in e)if(C.call(e,t))return!1
return!0}return!1},A=function(e){return void 0===e},M=function(e){return"[object String]"==I.call(e)},N=function(e){return M(e)&&0===e.trim().length},j=function(e){return null===e},D=function(e){return A(e)||j(e)},B=function(e){return"[object Number]"==I.call(e)},H=function(e){return"[object Boolean]"===I.call(e)},q=e=>e instanceof FormData,U="[PostHog.js]",G={_log:function(e){if(f&&(x.DEBUG||E.POSTHOG_DEBUG)&&!A(f.console)&&f.console){const r="__rrweb_original__"in f.console[e]?f.console[e].__rrweb_original__:f.console[e]
for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
r(U,...n)}},info:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
G._log("log",...t)},warn:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
G._log("warn",...t)},error:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
G._log("error",...t)},critical:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
console.error(U,...t)},uninitializedWarning:e=>{G.error(`You must initialize PostHog before calling ${e}`)}},W=(e,t,n)=>{if(e.config.disable_external_dependency_loading)return G.warn(`${t} was requested but loading of external scripts is disabled.`),n("Loading of external scripts is disabled")
const i=()=>{if(!m)return n("document not found")
const e=m.createElement("script")
e.type="text/javascript",e.crossOrigin="anonymous",e.src=t,e.onload=e=>n(void 0,e),e.onerror=e=>n(e)
const i=m.querySelectorAll("body > script")
var r
i.length>0?null===(r=i[0].parentNode)||void 0===r||r.insertBefore(e,i[0]):m.body.appendChild(e)}
null!=m&&m.body?i():null==m||m.addEventListener("DOMContentLoaded",i)}
E.__PosthogExtensions__=E.__PosthogExtensions__||{},E.__PosthogExtensions__.loadExternalDependency=(e,t,n)=>{let i=`/static/${t}.js?v=${e.version}`
if("toolbar"===t){const e=3e5
i=`${i}?&=${Math.floor(Date.now()/e)*e}`}const r=e.requestRouter.endpointFor("assets",i)
W(e,r,n)},E.__PosthogExtensions__.loadSiteApp=(e,t,n)=>{const i=e.requestRouter.endpointFor("api",t)
W(e,i,n)}
const z={},V=function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}
function Q(e,t,n){if(L(e))if(g&&e.forEach===g)e.forEach(t,n)
else if("length"in e&&e.length===+e.length)for(let i=0,r=e.length;i<r;i++)if(i in e&&t.call(n,e[i],i)===z)return}function J(e,t,n){if(!D(e)){if(L(e))return Q(e,t,n)
if(q(e)){for(const i of e.entries())if(t.call(n,i[1],i[0])===z)return}else for(const i in e)if(C.call(e,i)&&t.call(n,e[i],i)===z)return}}const K=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
return Q(n,(function(t){for(const n in t)void 0!==t[n]&&(e[n]=t[n])})),e}
function X(e,t){return-1!==e.indexOf(t)}function Y(e){const t=Object.keys(e)
let n=t.length
const i=new Array(n)
for(;n--;)i[n]=[t[n],e[t[n]]]
return i}const Z=function(e){try{return e()}catch{return}},ee=function(e){return function(){try{for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i]
return e.apply(this,n)}catch(e){G.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."),G.critical(e)}}},te=function(e){const t={}
return J(e,(function(e,n){M(e)&&e.length>0&&(t[n]=e)})),t},ne=function(e){return e.replace(/^\$/,"")}
const ie=function(){function e(t){return t&&(t.preventDefault=e.preventDefault,t.stopPropagation=e.stopPropagation),t}return e.preventDefault=function(){this.returnValue=!1},e.stopPropagation=function(){this.cancelBubble=!0},function(t,n,i,r,o){if(t)if(t.addEventListener&&!r)t.addEventListener(n,i,!!o)
else{const r="on"+n,o=t[r]
t[r]=function(t,n,i){return function(r){if(!(r=r||e(null==f?void 0:f.event)))return
let o,s=!0
R(i)&&(o=i(r))
const a=n.call(t,r)
return!1!==o&&!1!==a||(s=!1),s}}(t,i,o)}else G.error("No valid element provided to register_event")}}()
function re(e){const t=null==e?void 0:e.hostname
return!!M(t)&&"herokuapp.com"!==t.split(".").slice(-2).join(".")}function oe(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return e[n]}let se
!function(e){e.GZipJS="gzip-js",e.Base64="base64"}(se||(se={}))
const ae="$people_distinct_id",le="__alias",ce="__timers",ue="$autocapture_disabled_server_side",de="$heatmaps_enabled_server_side",fe="$exception_capture_enabled_server_side",he="$exception_capture_endpoint_suffix",pe="$web_vitals_enabled_server_side",ge="$web_vitals_allowed_metrics",_e="$session_recording_enabled_server_side",ve="$console_log_recording_enabled_server_side",me="$session_recording_network_payload_capture",ye="$session_recording_canvas_recording",be="$replay_sample_rate",we="$replay_minimum_duration",ke="$sesid",Se="$session_is_sampled",Ee="$session_recording_url_trigger_activated_session",xe="$session_recording_url_trigger_status",Pe="$enabled_feature_flags",$e="$early_access_features",Te="$stored_person_properties",Ce="$stored_group_properties",Ie="$surveys",Le="$surveys_activated",Re="$flag_call_reported",Fe="$user_state",Oe="$client_session_props",Ae="$capture_rate_limit",Me="$initial_campaign_params",Ne="$initial_referrer_info",je="$initial_person_info",De="$epp",Be="__POSTHOG_TOOLBAR__",He=[ae,le,"__cmpns",ce,_e,de,ke,Pe,Fe,$e,Ce,Te,Ie,Re,Oe,Ae,Me,Ne,De],qe="$active_feature_flags",Ue="$override_feature_flags",Ge="$feature_flag_payloads",We=e=>{const t={}
for(const[n,i]of Y(e||{}))i&&(t[n]=i)
return t}
class ze{constructor(e){this.instance=e,this._override_warning=!1,this.featureFlagEventHandlers=[],this.reloadFeatureFlagsQueued=!1,this.reloadFeatureFlagsInAction=!1}getFlags(){return Object.keys(this.getFlagVariants())}getFlagVariants(){const e=this.instance.get_property(Pe),t=this.instance.get_property(Ue)
if(!t)return e||{}
const n=K({},e),i=Object.keys(t)
for(let e=0;e<i.length;e++)n[i[e]]=t[i[e]]
return this._override_warning||(G.warn(" Overriding feature flags!",{enabledFlags:e,overriddenFlags:t,finalFlags:n}),this._override_warning=!0),n}getFlagPayloads(){return this.instance.get_property(Ge)||{}}reloadFeatureFlags(){this.reloadFeatureFlagsQueued||(this.reloadFeatureFlagsQueued=!0,this._startReloadTimer())}setAnonymousDistinctId(e){this.$anon_distinct_id=e}setReloadingPaused(e){this.reloadFeatureFlagsInAction=e}resetRequestQueue(){this.reloadFeatureFlagsQueued=!1}_startReloadTimer(){this.reloadFeatureFlagsQueued&&!this.reloadFeatureFlagsInAction&&setTimeout((()=>{!this.reloadFeatureFlagsInAction&&this.reloadFeatureFlagsQueued&&(this.reloadFeatureFlagsQueued=!1,this._reloadFeatureFlagsRequest())}),5)}_reloadFeatureFlagsRequest(){if(this.instance.config.advanced_disable_feature_flags)return
this.setReloadingPaused(!0)
const e=this.instance.config.token,t=this.instance.get_property(Te),n=this.instance.get_property(Ce),i={token:e,distinct_id:this.instance.get_distinct_id(),groups:this.instance.getGroups(),$anon_distinct_id:this.$anon_distinct_id,person_properties:t,group_properties:n,disable_flags:this.instance.config.advanced_disable_feature_flags||void 0}
this.instance._send_request({method:"POST",url:this.instance.requestRouter.endpointFor("api","/decide/?v=3"),data:i,compression:this.instance.config.disable_compression?void 0:se.Base64,timeout:this.instance.config.feature_flag_request_timeout_ms,callback:e=>{var t
this.setReloadingPaused(!1)
let n=!0
200===e.statusCode&&(this.$anon_distinct_id=void 0,n=!1),this.receivedFeatureFlags(null!==(t=e.json)&&void 0!==t?t:{},n),this._startReloadTimer()}})}getFeatureFlag(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!(this.instance.decideEndpointWasHit||this.getFlags()&&this.getFlags().length>0))return void G.warn('getFeatureFlag for key "'+e+"\" failed. Feature flags didn't load in time.")
const n=this.getFlagVariants()[e],i=`${n}`,r=this.instance.get_property(Re)||{}
var o
return!t.send_event&&"send_event"in t||e in r&&r[e].includes(i)||(L(r[e])?r[e].push(i):r[e]=[i],null===(o=this.instance.persistence)||void 0===o||o.register({[Re]:r}),this.instance.capture("$feature_flag_called",{$feature_flag:e,$feature_flag_response:n})),n}getFeatureFlagPayload(e){return this.getFlagPayloads()[e]}isFeatureEnabled(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(this.instance.decideEndpointWasHit||this.getFlags()&&this.getFlags().length>0)return!!this.getFeatureFlag(e,t)
G.warn('isFeatureEnabled for key "'+e+"\" failed. Feature flags didn't load in time.")}addFeatureFlagsHandler(e){this.featureFlagEventHandlers.push(e)}removeFeatureFlagsHandler(e){this.featureFlagEventHandlers=this.featureFlagEventHandlers.filter((t=>t!==e))}receivedFeatureFlags(e,t){if(!this.instance.persistence)return
this.instance.decideEndpointWasHit=!0
const n=this.getFlagVariants(),i=this.getFlagPayloads()
!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
const r=e.featureFlags,o=e.featureFlagPayloads
if(!r)return
if(L(r)){const e={}
if(r)for(let t=0;t<r.length;t++)e[r[t]]=!0
return void(t&&t.register({[qe]:r,[Pe]:e}))}let s=r,a=o
e.errorsWhileComputingFlags&&(s={...n,...s},a={...i,...a}),t&&t.register({[qe]:Object.keys(We(s)),[Pe]:s||{},[Ge]:a||{}})}(e,this.instance.persistence,n,i),this._fireFeatureFlagsCallbacks(t)}override(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(!this.instance.__loaded||!this.instance.persistence)return G.uninitializedWarning("posthog.feature_flags.override")
if(this._override_warning=t,!1===e)this.instance.persistence.unregister(Ue)
else if(L(e)){const t={}
for(let n=0;n<e.length;n++)t[e[n]]=!0
this.instance.persistence.register({[Ue]:t})}else this.instance.persistence.register({[Ue]:e})}onFeatureFlags(e){if(this.addFeatureFlagsHandler(e),this.instance.decideEndpointWasHit){const{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
e(t,n)}return()=>this.removeFeatureFlagsHandler(e)}updateEarlyAccessFeatureEnrollment(e,t){var n
const i={[`$feature_enrollment/${e}`]:t}
this.instance.capture("$feature_enrollment_update",{$feature_flag:e,$feature_enrollment:t,$set:i}),this.setPersonPropertiesForFlags(i,!1)
const r={...this.getFlagVariants(),[e]:t}
null===(n=this.instance.persistence)||void 0===n||n.register({[qe]:Object.keys(We(r)),[Pe]:r}),this._fireFeatureFlagsCallbacks()}getEarlyAccessFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
const n=this.instance.get_property($e)
if(n&&!t)return e(n)
this.instance._send_request({transport:"XHR",url:this.instance.requestRouter.endpointFor("api",`/api/early_access_features/?token=${this.instance.config.token}`),method:"GET",callback:t=>{var n
if(!t.json)return
const i=t.json.earlyAccessFeatures
return null===(n=this.instance.persistence)||void 0===n||n.register({[$e]:i}),e(i)}})}_prepareFeatureFlagsForCallbacks(){const e=this.getFlags(),t=this.getFlagVariants()
return{flags:e.filter((e=>t[e])),flagVariants:Object.keys(t).filter((e=>t[e])).reduce(((e,n)=>(e[n]=t[n],e)),{})}}_fireFeatureFlagsCallbacks(e){const{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
this.featureFlagEventHandlers.forEach((i=>i(t,n,{errorsLoading:e})))}setPersonPropertiesForFlags(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
const n=this.instance.get_property(Te)||{}
this.instance.register({[Te]:{...n,...e}}),t&&this.instance.reloadFeatureFlags()}resetPersonPropertiesForFlags(){this.instance.unregister(Te)}setGroupPropertiesForFlags(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
const n=this.instance.get_property(Ce)||{}
0!==Object.keys(n).length&&Object.keys(n).forEach((t=>{n[t]={...n[t],...e[t]},delete e[t]})),this.instance.register({[Ce]:{...n,...e}}),t&&this.instance.reloadFeatureFlags()}resetGroupPropertiesForFlags(e){if(e){const t=this.instance.get_property(Ce)||{}
this.instance.register({[Ce]:{...t,[e]:{}}})}else this.instance.unregister(Ce)}}
/**
 * uuidv7: An experimental implementation of the proposed UUID Version 7
 *
 * @license Apache-2.0
 * @copyright 2021-2023 LiosK
 * @packageDocumentation
 *
 * from https://github.com/LiosK/uuidv7/blob/e501462ea3d23241de13192ceae726956f9b3b7d/src/index.ts
 */Math.trunc||(Math.trunc=function(e){return e<0?Math.ceil(e):Math.floor(e)}),Number.isInteger||(Number.isInteger=function(e){return B(e)&&isFinite(e)&&Math.floor(e)===e})
const Ve="0123456789abcdef"
class Qe{constructor(e){if(this.bytes=e,16!==e.length)throw new TypeError("not 128-bit length")}static fromFieldsV7(e,t,n,i){if(!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(n)||!Number.isInteger(i)||e<0||t<0||n<0||i<0||e>0xffffffffffff||t>4095||n>1073741823||i>4294967295)throw new RangeError("invalid field value")
const r=new Uint8Array(16)
return r[0]=e/2**40,r[1]=e/2**32,r[2]=e/2**24,r[3]=e/65536,r[4]=e/256,r[5]=e,r[6]=112|t>>>8,r[7]=t,r[8]=128|n>>>24,r[9]=n>>>16,r[10]=n>>>8,r[11]=n,r[12]=i>>>24,r[13]=i>>>16,r[14]=i>>>8,r[15]=i,new Qe(r)}toString(){let e=""
for(let t=0;t<this.bytes.length;t++)e=e+Ve.charAt(this.bytes[t]>>>4)+Ve.charAt(15&this.bytes[t]),3!==t&&5!==t&&7!==t&&9!==t||(e+="-")
if(36!==e.length)throw new Error("Invalid UUIDv7 was generated")
return e}clone(){return new Qe(this.bytes.slice(0))}equals(e){return 0===this.compareTo(e)}compareTo(e){for(let t=0;t<16;t++){const n=this.bytes[t]-e.bytes[t]
if(0!==n)return Math.sign(n)}return 0}}class Je{timestamp=0
counter=0
random=new Ye
generate(){const e=this.generateOrAbort()
if(A(e)){this.timestamp=0
const e=this.generateOrAbort()
if(A(e))throw new Error("Could not generate UUID after timestamp reset")
return e}return e}generateOrAbort(){const e=Date.now()
if(e>this.timestamp)this.timestamp=e,this.resetCounter()
else{if(!(e+1e4>this.timestamp))return
this.counter++,this.counter>4398046511103&&(this.timestamp++,this.resetCounter())}return Qe.fromFieldsV7(this.timestamp,Math.trunc(this.counter/2**30),this.counter&2**30-1,this.random.nextUint32())}resetCounter(){this.counter=1024*this.random.nextUint32()+(1023&this.random.nextUint32())}}let Ke,Xe=e=>{if("undefined"!=typeof UUIDV7_DENY_WEAK_RNG&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available")
for(let t=0;t<e.length;t++)e[t]=65536*Math.trunc(65536*Math.random())+Math.trunc(65536*Math.random())
return e}
f&&!A(f.crypto)&&crypto.getRandomValues&&(Xe=e=>crypto.getRandomValues(e))
class Ye{buffer=new Uint32Array(8)
cursor=1/0
nextUint32(){return this.cursor>=this.buffer.length&&(Xe(this.buffer),this.cursor=0),this.buffer[this.cursor++]}}const Ze=()=>et().toString(),et=()=>(Ke||(Ke=new Je)).generate()
let tt=""
const nt=/[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i
const it={is_supported:()=>!!m,error:function(e){G.error("cookieStore error: "+e)},get:function(e){if(m){try{const t=e+"=",n=m.cookie.split(";").filter((e=>e.length))
for(let e=0;e<n.length;e++){let i=n[e]
for(;" "==i.charAt(0);)i=i.substring(1,i.length)
if(0===i.indexOf(t))return decodeURIComponent(i.substring(t.length,i.length))}}catch{}return null}},parse:function(e){let t
try{t=JSON.parse(it.get(e))||{}}catch{}return t},set:function(e,t,n,i,r){if(m)try{let o="",s=""
const a=function(e,t){if(t){let t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m
if(tt)return tt
if(!t)return""
if(["localhost","127.0.0.1"].includes(e))return""
const n=e.split(".")
let i=Math.min(n.length,8)
const r="dmn_chk_"+Ze(),o=new RegExp("(^|;)\\s*"+r+"=1")
for(;!tt&&i--;){const e=n.slice(i).join("."),s=r+"=1;domain=."+e
t.cookie=s,o.test(t.cookie)&&(t.cookie=s+";expires=Thu, 01 Jan 1970 00:00:00 GMT",tt=e)}return tt}(e)
if(!t){const n=(e=>{const t=e.match(nt)
return t?t[0]:""})(e)
n!==t&&G.info("Warning: cookie subdomain discovery mismatch",n,t),t=n}return t?"; domain=."+t:""}return""}(m.location.hostname,i)
if(n){const e=new Date
e.setTime(e.getTime()+24*n*60*60*1e3),o="; expires="+e.toUTCString()}r&&(s="; secure")
const l=e+"="+encodeURIComponent(JSON.stringify(t))+o+"; SameSite=Lax; path=/"+a+s
return l.length>3686.4&&G.warn("cookieStore warning: large cookie, len="+l.length),m.cookie=l,l}catch{return}},remove:function(e,t){try{it.set(e,"",-1,t)}catch{return}}}
let rt=null
const ot={is_supported:function(){if(!j(rt))return rt
let e=!0
if(A(f))e=!1
else try{const t="__mplssupport__",n="xyz"
ot.set(t,n),'"xyz"'!==ot.get(t)&&(e=!1),ot.remove(t)}catch{e=!1}return e||G.error("localStorage unsupported; falling back to cookie store"),rt=e,e},error:function(e){G.error("localStorage error: "+e)},get:function(e){try{return null==f?void 0:f.localStorage.getItem(e)}catch(e){ot.error(e)}return null},parse:function(e){try{return JSON.parse(ot.get(e))||{}}catch{}return null},set:function(e,t){try{null==f||f.localStorage.setItem(e,JSON.stringify(t))}catch(e){ot.error(e)}},remove:function(e){try{null==f||f.localStorage.removeItem(e)}catch(e){ot.error(e)}}},st=["distinct_id",ke,Se,De],at={...ot,parse:function(e){try{let t={}
try{t=it.parse(e)||{}}catch{}const n=K(t,JSON.parse(ot.get(e)||"{}"))
return ot.set(e,n),n}catch{}return null},set:function(e,t,n,i,r,o){try{ot.set(e,t,void 0,void 0,o)
const s={}
st.forEach((e=>{t[e]&&(s[e]=t[e])})),Object.keys(s).length&&it.set(e,s,n,i,r,o)}catch(e){ot.error(e)}},remove:function(e,t){try{null==f||f.localStorage.removeItem(e),it.remove(e,t)}catch(e){ot.error(e)}}},lt={},ct={is_supported:function(){return!0},error:function(e){G.error("memoryStorage error: "+e)},get:function(e){return lt[e]||null},parse:function(e){return lt[e]||null},set:function(e,t){lt[e]=t},remove:function(e){delete lt[e]}}
let ut=null
const dt={is_supported:function(){if(!j(ut))return ut
if(ut=!0,A(f))ut=!1
else try{const e="__support__",t="xyz"
dt.set(e,t),'"xyz"'!==dt.get(e)&&(ut=!1),dt.remove(e)}catch{ut=!1}return ut},error:function(e){G.error("sessionStorage error: ",e)},get:function(e){try{return null==f?void 0:f.sessionStorage.getItem(e)}catch(e){dt.error(e)}return null},parse:function(e){try{return JSON.parse(dt.get(e))||null}catch{}return null},set:function(e,t){try{null==f||f.sessionStorage.setItem(e,JSON.stringify(t))}catch(e){dt.error(e)}},remove:function(e){try{null==f||f.sessionStorage.removeItem(e)}catch(e){dt.error(e)}}},ft=["localhost","127.0.0.1"],ht=e=>{const t=null==m?void 0:m.createElement("a")
return A(t)?null:(t.href=e,t)},pt=function(e,t){return!!function(e){try{new RegExp(e)}catch{return!1}return!0}(t)&&new RegExp(t).test(e)},gt=function(e,t){const n=((e.split("#")[0]||"").split("?")[1]||"").split("&")
let i
for(let e=0;e<n.length;e++){const r=n[e].split("=")
if(r[0]===t){i=r
break}}if(!L(i)||i.length<2)return""
{let e=i[1]
try{e=decodeURIComponent(e)}catch{G.error("Skipping decoding for malformed query param: "+e)}return e.replace(/\+/g," ")}},_t=function(e,t){const n=e.match(new RegExp(t+"=([^&]*)"))
return n?n[1]:null},vt="Mobile",mt="iOS",yt="Android",bt="Tablet",wt=yt+" "+bt,kt="iPad",St="Apple",Et=St+" Watch",xt="Safari",Pt="BlackBerry",$t="Samsung",Tt=$t+"Browser",Ct=$t+" Internet",It="Chrome",Lt=It+" OS",Rt=It+" "+mt,Ft="Internet Explorer",Ot=Ft+" "+vt,At="Opera",Mt=At+" Mini",Nt="Edge",jt="Microsoft "+Nt,Dt="Firefox",Bt=Dt+" "+mt,Ht="Nintendo",qt="PlayStation",Ut="Xbox",Gt=yt+" "+vt,Wt=vt+" "+xt,zt="Windows",Vt=zt+" Phone",Qt="Nokia",Jt="Ouya",Kt="Generic",Xt=Kt+" "+vt.toLowerCase(),Yt=Kt+" "+bt.toLowerCase(),Zt="Konqueror",en="(\\d+(\\.\\d+)?)",tn=new RegExp("Version/"+en),nn=new RegExp(Ut,"i"),rn=new RegExp(qt+" \\w+","i"),on=new RegExp(Ht+" \\w+","i"),sn=new RegExp(Pt+"|PlayBook|BB10","i"),an={"NT3.51":"NT 3.11","NT4.0":"NT 4.0","5.0":"2000",5.1:"XP",5.2:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1",6.4:"10","10.0":"10"},ln=function(e,t){return t=t||"",X(e," OPR/")&&X(e,"Mini")?Mt:X(e," OPR/")?At:sn.test(e)?Pt:X(e,"IE"+vt)||X(e,"WPDesktop")?Ot:X(e,Tt)?Ct:X(e,Nt)||X(e,"Edg/")?jt:X(e,"FBIOS")?"Facebook "+vt:X(e,"UCWEB")||X(e,"UCBrowser")?"UC Browser":X(e,"CriOS")?Rt:X(e,"CrMo")?It:X(e,yt)&&X(e,xt)?Gt:X(e,It)?It:X(e,"FxiOS")?Bt:X(e.toLowerCase(),Zt.toLowerCase())?Zt:((e,t)=>t&&X(t,St)||function(e){return X(e,xt)&&!X(e,It)&&!X(e,yt)}(e))(e,t)?X(e,vt)?Wt:xt:X(e,Dt)?Dt:X(e,"MSIE")||X(e,"Trident/")?Ft:X(e,"Gecko")?Dt:""},cn={[Ot]:[new RegExp("rv:"+en)],[jt]:[new RegExp(Nt+"?\\/"+en)],[It]:[new RegExp("("+It+"|CrMo)\\/"+en)],[Rt]:[new RegExp("CriOS\\/"+en)],"UC Browser":[new RegExp("(UCBrowser|UCWEB)\\/"+en)],[xt]:[tn],[Wt]:[tn],[At]:[new RegExp("(Opera|OPR)\\/"+en)],[Dt]:[new RegExp(Dt+"\\/"+en)],[Bt]:[new RegExp("FxiOS\\/"+en)],[Zt]:[new RegExp("Konqueror[:/]?"+en,"i")],[Pt]:[new RegExp(Pt+" "+en),tn],[Gt]:[new RegExp("android\\s"+en,"i")],[Ct]:[new RegExp(Tt+"\\/"+en)],[Ft]:[new RegExp("(rv:|MSIE )"+en)],Mozilla:[new RegExp("rv:"+en)]},un=[[new RegExp(Ut+"; "+Ut+" (.*?)[);]","i"),e=>[Ut,e&&e[1]||""]],[new RegExp(Ht,"i"),[Ht,""]],[new RegExp(qt,"i"),[qt,""]],[sn,[Pt,""]],[new RegExp(zt,"i"),(e,t)=>{if(/Phone/.test(t)||/WPDesktop/.test(t))return[Vt,""]
if(new RegExp(vt).test(t)&&!/IEMobile\b/.test(t))return[zt+" "+vt,""]
const n=/Windows NT ([0-9.]+)/i.exec(t)
if(n&&n[1]){const e=n[1]
let i=an[e]||""
return/arm/i.test(t)&&(i="RT"),[zt,i]}return[zt,""]}],[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,e=>{if(e&&e[3]){const t=[e[3],e[4],e[5]||"0"]
return[mt,t.join(".")]}return[mt,""]}],[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,e=>{let t=""
return e&&e.length>=3&&(t=A(e[2])?e[3]:e[2]),["watchOS",t]}],[new RegExp("("+yt+" (\\d+)\\.(\\d+)\\.?(\\d+)?|"+yt+")","i"),e=>{if(e&&e[2]){const t=[e[2],e[3],e[4]||"0"]
return[yt,t.join(".")]}return[yt,""]}],[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,e=>{const t=["Mac OS X",""]
if(e&&e[1]){const n=[e[1],e[2],e[3]||"0"]
t[1]=n.join(".")}return t}],[/Mac/i,["Mac OS X",""]],[/CrOS/,[Lt,""]],[/Linux|debian/i,["Linux",""]]],dn=function(e){return on.test(e)?Ht:rn.test(e)?qt:nn.test(e)?Ut:new RegExp(Jt,"i").test(e)?Jt:new RegExp("("+Vt+"|WPDesktop)","i").test(e)?Vt:/iPad/.test(e)?kt:/iPod/.test(e)?"iPod Touch":/iPhone/.test(e)?"iPhone":/(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)?Et:sn.test(e)?Pt:/(kobo)\s(ereader|touch)/i.test(e)?"Kobo":new RegExp(Qt,"i").test(e)?Qt:/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e)||/(kf[a-z]+)( bui|\)).+silk\//i.test(e)?"Kindle Fire":/(Android|ZTE)/i.test(e)?!new RegExp(vt).test(e)||/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e)?/pixel[\daxl ]{1,6}/i.test(e)&&!/pixel c/i.test(e)||/(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e)||/lmy47v/i.test(e)&&!/QTAQZ3/i.test(e)?yt:wt:yt:new RegExp("(pda|"+vt+")","i").test(e)?Xt:new RegExp(bt,"i").test(e)&&!new RegExp(bt+" pc","i").test(e)?Yt:""},fn="https?://(.*)",hn=["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gclid","gad_source","gclsrc","dclid","gbraid","wbraid","fbclid","msclkid","twclid","li_fat_id","mc_cid","igshid","ttclid","rdt_cid"],pn={campaignParams:function(e){return m?this._campaignParamsFromUrl(m.URL,e):{}},_campaignParamsFromUrl:function(e,t){const n=hn.concat(t||[]),i={}
return J(n,(function(t){const n=gt(e,t)
i[t]=n||null})),i},_searchEngine:function(e){return e?0===e.search(fn+"google.([^/?]*)")?"google":0===e.search(fn+"bing.com")?"bing":0===e.search(fn+"yahoo.com")?"yahoo":0===e.search(fn+"duckduckgo.com")?"duckduckgo":null:null},_searchInfoFromReferrer:function(e){const t=pn._searchEngine(e),n="yahoo"!=t?"q":"p",i={}
if(!j(t)){i.$search_engine=t
const e=m?gt(m.referrer,n):""
e.length&&(i.ph_keyword=e)}return i},searchInfo:function(){const e=null==m?void 0:m.referrer
return e?this._searchInfoFromReferrer(e):{}},browser:ln,browserVersion:function(e,t){const n=ln(e,t),i=cn[n]
if(A(i))return null
for(let t=0;t<i.length;t++){const n=i[t],r=e.match(n)
if(r)return parseFloat(r[r.length-2])}return null},browserLanguage:function(){return navigator.language||navigator.userLanguage},os:function(e){for(let t=0;t<un.length;t++){const[n,i]=un[t],r=n.exec(e),o=r&&(R(i)?i(r,e):i)
if(o)return o}return["",""]},device:dn,deviceType:function(e){const t=dn(e)
return t===kt||t===wt||"Kobo"===t||"Kindle Fire"===t||t===Yt?bt:t===Ht||t===Ut||t===qt||t===Jt?"Console":t===Et?"Wearable":t?vt:"Desktop"},referrer:function(){return(null==m?void 0:m.referrer)||"$direct"},referringDomain:function(){var e
return null!=m&&m.referrer&&(null===(e=ht(m.referrer))||void 0===e?void 0:e.host)||"$direct"},referrerInfo:function(){return{$referrer:this.referrer(),$referring_domain:this.referringDomain()}},initialPersonInfo:function(){return{r:this.referrer(),u:null==y?void 0:y.href}},initialPersonPropsFromInfo:function(e){var t
const{r:n,u:i}=e,r={$initial_referrer:n,$initial_referring_domain:null==n?void 0:"$direct"==n?"$direct":null===(t=ht(n))||void 0===t?void 0:t.host}
if(i){r.$initial_current_url=i
const e=ht(i)
r.$initial_host=null==e?void 0:e.host,r.$initial_pathname=null==e?void 0:e.pathname,J(this._campaignParamsFromUrl(i),(function(e,t){r["$initial_"+ne(t)]=e}))}return n&&J(this._searchInfoFromReferrer(n),(function(e,t){r["$initial_"+ne(t)]=e})),r},properties:function(){if(!S)return{}
const[e,t]=pn.os(S)
return K(te({$os:e,$os_version:t,$browser:pn.browser(S,navigator.vendor),$device:pn.device(S),$device_type:pn.deviceType(S)}),{$current_url:null==y?void 0:y.href,$host:null==y?void 0:y.host,$pathname:null==y?void 0:y.pathname,$raw_user_agent:S.length>1e3?S.substring(0,997)+"...":S,$browser_version:pn.browserVersion(S,navigator.vendor),$browser_language:pn.browserLanguage(),$screen_height:null==f?void 0:f.screen.height,$screen_width:null==f?void 0:f.screen.width,$viewport_height:null==f?void 0:f.innerHeight,$viewport_width:null==f?void 0:f.innerWidth,$lib:"web",$lib_version:x.LIB_VERSION,$insert_id:Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10),$time:Date.now()/1e3})},people_properties:function(){if(!S)return{}
const[e,t]=pn.os(S)
return K(te({$os:e,$os_version:t,$browser:pn.browser(S,navigator.vendor)}),{$browser_version:pn.browserVersion(S,navigator.vendor)})}},gn=["cookie","localstorage","localstorage+cookie","sessionstorage","memory"]
class _n{constructor(e){this.config=e,this.props={},this.campaign_params_saved=!1,this.name=(e=>{let t=""
return e.token&&(t=e.token.replace(/\+/g,"PL").replace(/\//g,"SL").replace(/=/g,"EQ")),e.persistence_name?"ph_"+e.persistence_name:"ph_"+t+"_posthog"})(e),this.storage=this.buildStorage(e),this.load(),e.debug&&G.info("Persistence loaded",e.persistence,{...this.props}),this.update_config(e,e),this.save()}buildStorage(e){let t;-1===gn.indexOf(e.persistence.toLowerCase())&&(G.critical("Unknown persistence type "+e.persistence+"; falling back to localStorage+cookie"),e.persistence="localStorage+cookie")
const n=e.persistence.toLowerCase()
return t="localstorage"===n&&ot.is_supported()?ot:"localstorage+cookie"===n&&at.is_supported()?at:"sessionstorage"===n&&dt.is_supported()?dt:"memory"===n?ct:"cookie"===n?it:at.is_supported()?at:it,t}properties(){const e={}
return J(this.props,(function(t,n){if(n===Pe&&F(t)){const n=Object.keys(t)
for(let i=0;i<n.length;i++)e[`$feature/${n[i]}`]=t[n[i]]}else(function(e,t){let n=!1
return j(e)?n:_&&e.indexOf===_?-1!=e.indexOf(t):(J(e,(function(e){if(n||(n=e===t))return z})),n)})(He,n)||(e[n]=t)})),e}load(){if(this.disabled)return
const e=this.storage.parse(this.name)
e&&(this.props=K({},e))}save(){this.disabled||this.storage.set(this.name,this.props,this.expire_days,this.cross_subdomain,this.secure,this.config.debug)}remove(){this.storage.remove(this.name,!1),this.storage.remove(this.name,!0)}clear(){this.remove(),this.props={}}register_once(e,t,n){if(F(e)){A(t)&&(t="None"),this.expire_days=A(n)?this.default_expiry:n
let i=!1
if(J(e,((e,n)=>{this.props.hasOwnProperty(n)&&this.props[n]!==t||(this.props[n]=e,i=!0)})),i)return this.save(),!0}return!1}register(e,t){if(F(e)){this.expire_days=A(t)?this.default_expiry:t
let n=!1
if(J(e,((t,i)=>{e.hasOwnProperty(i)&&this.props[i]!==t&&(this.props[i]=t,n=!0)})),n)return this.save(),!0}return!1}unregister(e){e in this.props&&(delete this.props[e],this.save())}update_campaign_params(){this.campaign_params_saved||(this.register(pn.campaignParams(this.config.custom_campaign_params)),this.campaign_params_saved=!0)}update_search_keyword(){this.register(pn.searchInfo())}update_referrer_info(){this.register_once(pn.referrerInfo(),void 0)}set_initial_person_info(){this.props[Me]||this.props[Ne]||this.register_once({[je]:pn.initialPersonInfo()},void 0)}get_referrer_info(){return te({$referrer:this.props.$referrer,$referring_domain:this.props.$referring_domain})}get_initial_props(){const e={}
J([Ne,Me],(t=>{const n=this.props[t]
n&&J(n,(function(t,n){e["$initial_"+ne(n)]=t}))}))
const t=this.props[je]
if(t){const n=pn.initialPersonPropsFromInfo(t)
K(e,n)}return e}safe_merge(e){return J(this.props,(function(t,n){n in e||(e[n]=t)})),e}update_config(e,t){if(this.default_expiry=this.expire_days=e.cookie_expiration,this.set_disabled(e.disable_persistence),this.set_cross_subdomain(e.cross_subdomain_cookie),this.set_secure(e.secure_cookie),e.persistence!==t.persistence){const t=this.buildStorage(e),n=this.props
this.clear(),this.storage=t,this.props=n,this.save()}}set_disabled(e){this.disabled=e,this.disabled?this.remove():this.save()}set_cross_subdomain(e){e!==this.cross_subdomain&&(this.cross_subdomain=e,this.remove(),this.save())}get_cross_subdomain(){return!!this.cross_subdomain}set_secure(e){e!==this.secure&&(this.secure=e,this.remove(),this.save())}set_event_timer(e,t){const n=this.props[ce]||{}
n[e]=t,this.props[ce]=n,this.save()}remove_event_timer(e){const t=(this.props[ce]||{})[e]
return A(t)||(delete this.props[ce][e],this.save()),t}get_property(e){return this.props[e]}set_property(e,t){this.props[e]=t,this.save()}}function vn(e){var t
return(null===(t=JSON.stringify(e,function(){const e=[]
return function(t,n){if(F(n)){for(;e.length>0&&e.at(-1)!==this;)e.pop()
return e.includes(n)?"[Circular]":(e.push(n),n)}return n}}()))||void 0===t?void 0:t.length)||0}function mn(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6606028.8
if(e.size>=t&&e.data.length>1){const t=Math.floor(e.data.length/2),n=e.data.slice(0,t),i=e.data.slice(t)
return[mn({size:vn(n),data:n,sessionId:e.sessionId,windowId:e.windowId}),mn({size:vn(i),data:i,sessionId:e.sessionId,windowId:e.windowId})].flatMap((e=>e))}return[e]}var yn=(e=>(e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin",e))(yn||{}),bn=(e=>(e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration",e[e.Selection=14]="Selection",e[e.AdoptedStyleSheet=15]="AdoptedStyleSheet",e[e.CustomElement=16]="CustomElement",e))(bn||{})
function wn(e){return e?V(e).split(/\s+/):[]}function kn(e){const t=null==f?void 0:f.location.href
return!!(t&&e&&e.some((e=>t.match(e))))}function Sn(e){let t=""
switch(typeof e.className){case"string":t=e.className
break
case"object":t=(e.className&&"baseVal"in e.className?e.className.baseVal:null)||e.getAttribute("class")||""
break
default:t=""}return wn(t)}function En(e){return D(e)?null:V(e).split(/(\s+)/).filter((e=>Hn(e))).join("").replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)}function xn(e){let t=""
return Fn(e)&&!On(e)&&e.childNodes&&e.childNodes.length&&J(e.childNodes,(function(e){var n
Cn(e)&&e.textContent&&(t+=null!==(n=En(e.textContent))&&void 0!==n?n:"")})),V(t)}function Pn(e){return A(e.target)?e.srcElement||null:null!==(t=e.target)&&void 0!==t&&t.shadowRoot?e.composedPath()[0]||null:e.target||null
var t}function $n(e){return!!e&&1===e.nodeType}function Tn(e,t){return!!e&&!!e.tagName&&e.tagName.toLowerCase()===t.toLowerCase()}function Cn(e){return!!e&&3===e.nodeType}function In(e){return!!e&&11===e.nodeType}const Ln=["a","button","form","input","select","textarea","label"]
function Rn(e){const t=e.parentNode
return!(!t||!$n(t))&&t}function Fn(e){for(let t=e;t.parentNode&&!Tn(t,"body");t=t.parentNode){const e=Sn(t)
if(X(e,"ph-sensitive")||X(e,"ph-no-capture"))return!1}if(X(Sn(e),"ph-include"))return!0
const t=e.type||""
if(M(t))switch(t.toLowerCase()){case"hidden":case"password":return!1}const n=e.name||e.id||""
return!M(n)||!/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(n.replace(/[^a-zA-Z0-9]/g,""))}function On(e){return!!(Tn(e,"input")&&!["button","checkbox","submit","reset"].includes(e.type)||Tn(e,"select")||Tn(e,"textarea")||"true"===e.getAttribute("contenteditable"))}const An="(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",Mn=new RegExp(`^(?:${An})$`),Nn=new RegExp(An),jn="\\d{3}-?\\d{2}-?\\d{4}",Dn=new RegExp(`^(${jn})$`),Bn=new RegExp(`(${jn})`)
function Hn(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(D(e))return!1
if(M(e)){if(e=V(e),(t?Mn:Nn).test((e||"").replace(/[- ]/g,"")))return!1
if((t?Dn:Bn).test(e))return!1}return!0}function qn(e){let t=xn(e)
return t=`${t} ${Un(e)}`.trim(),Hn(t)?t:""}function Un(e){let t=""
return e&&e.childNodes&&e.childNodes.length&&J(e.childNodes,(function(e){var n
if(e&&"span"===(null===(n=e.tagName)||void 0===n?void 0:n.toLowerCase()))try{const n=xn(e)
t=`${t} ${n}`.trim(),e.childNodes&&e.childNodes.length&&(t=`${t} ${Un(e)}`.trim())}catch(e){G.error(e)}})),t}function Gn(e){return function(e){const t=e.map((e=>{var t,n
let i=""
if(e.tag_name&&(i+=e.tag_name),e.attr_class){e.attr_class.sort()
for(const t of e.attr_class)i+=`.${t.replace(/"/g,"")}`}const r={...e.text?{text:e.text}:{},"nth-child":null!==(t=e.nth_child)&&void 0!==t?t:0,"nth-of-type":null!==(n=e.nth_of_type)&&void 0!==n?n:0,...e.href?{href:e.href}:{},...e.attr_id?{attr_id:e.attr_id}:{},...e.attributes},o={}
return Y(r).sort(((e,t)=>{let[n]=e,[i]=t
return n.localeCompare(i)})).forEach((e=>{let[t,n]=e
return o[Wn(t.toString())]=Wn(n.toString())})),i+=":",i+=Y(r).map((e=>{let[t,n]=e
return`${t}="${n}"`})).join(""),i}))
return t.join(";")}(function(e){return e.map((e=>{var t,n
const i={text:null===(t=e.$el_text)||void 0===t?void 0:t.slice(0,400),tag_name:e.tag_name,href:null===(n=e.attr__href)||void 0===n?void 0:n.slice(0,2048),attr_class:zn(e),attr_id:e.attr__id,nth_child:e.nth_child,nth_of_type:e.nth_of_type,attributes:{}}
return Y(e).filter((e=>{let[t]=e
return 0===t.indexOf("attr__")})).forEach((e=>{let[t,n]=e
return i.attributes[t]=n})),i}))}(e))}function Wn(e){return e.replace(/"|\\"/g,'\\"')}function zn(e){const t=e.attr__class
return t?L(t)?t:wn(t):void 0}const Vn="[SessionRecording]",Qn="redacted",Jn={initiatorTypes:["audio","beacon","body","css","early-hint","embed","fetch","frame","iframe","icon","image","img","input","link","navigation","object","ping","script","track","video","xmlhttprequest"],maskRequestFn:e=>e,recordHeaders:!1,recordBody:!1,recordInitialRequests:!1,recordPerformance:!1,performanceEntryTypeToObserve:["first-input","navigation","paint","resource"],payloadSizeLimitBytes:1e6,payloadHostDenyList:[".lr-ingest.io",".ingest.sentry.io"]},Kn=["authorization","x-forwarded-for","authorization","cookie","set-cookie","x-api-key","x-real-ip","remote-addr","forwarded","proxy-authorization","x-csrf-token","x-csrftoken","x-xsrf-token"],Xn=["password","secret","passwd","api_key","apikey","auth","credentials","mysql_pwd","privatekey","private_key","token"],Yn=["/s/","/e/","/i/"]
function Zn(e,t,n,i){if(D(e))return e
let r=(null==t?void 0:t["content-length"])||function(e){return new Blob([e]).size}(e)
return M(r)&&(r=parseInt(r)),r>n?Vn+` ${i} body too large to record (${r} bytes)`:e}function ei(e,t){if(D(e))return e
let n=e
return Hn(n,!1)||(n=Vn+" "+t+" body "+Qn),J(Xn,(e=>{var i,r
null!==(i=n)&&void 0!==i&&i.length&&-1!==(null===(r=n)||void 0===r?void 0:r.indexOf(e))&&(n=Vn+" "+t+" body "+Qn+" as might contain: "+e)})),n}class ti{bucketSize=100
refillRate=10
mutationBuckets={}
loggedTracker={}
constructor(e){var t,n
let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this.rrweb=e,this.options=i,this.refillRate=null!==(t=this.options.refillRate)&&void 0!==t?t:this.refillRate,this.bucketSize=null!==(n=this.options.bucketSize)&&void 0!==n?n:this.bucketSize,setInterval((()=>{this.refillBuckets()}),1e3)}refillBuckets=()=>{Object.keys(this.mutationBuckets).forEach((e=>{this.mutationBuckets[e]=this.mutationBuckets[e]+this.refillRate,this.mutationBuckets[e]>=this.bucketSize&&delete this.mutationBuckets[e]}))}
getNodeOrRelevantParent=e=>{const t=this.rrweb.mirror.getNode(e)
if("svg"!==(null==t?void 0:t.nodeName)&&t instanceof Element){const e=t.closest("svg")
if(e)return[this.rrweb.mirror.getId(e),e]}return[e,t]}
numberOfChanges=e=>{var t,n,i,r,o,s,a,l
return(null!==(t=null===(n=e.removes)||void 0===n?void 0:n.length)&&void 0!==t?t:0)+(null!==(i=null===(r=e.attributes)||void 0===r?void 0:r.length)&&void 0!==i?i:0)+(null!==(o=null===(s=e.texts)||void 0===s?void 0:s.length)&&void 0!==o?o:0)+(null!==(a=null===(l=e.adds)||void 0===l?void 0:l.length)&&void 0!==a?a:0)}
throttleMutations=e=>{if(3!==e.type||0!==e.data.source)return e
const t=e.data,n=this.numberOfChanges(t)
t.attributes&&(t.attributes=t.attributes.filter((e=>{var t
const[n,i]=this.getNodeOrRelevantParent(e.id)
return 0!==this.mutationBuckets[n]&&(this.mutationBuckets[n]=null!==(t=this.mutationBuckets[n])&&void 0!==t?t:this.bucketSize,this.mutationBuckets[n]=Math.max(this.mutationBuckets[n]-1,0),0===this.mutationBuckets[n]&&(this.loggedTracker[n]||(this.loggedTracker[n]=!0,null===(r=(o=this.options).onBlockedNode)||void 0===r||r.call(o,n,i))),e)
var r,o})))
const i=this.numberOfChanges(t)
return 0!==i||n===i?e:void 0}}var ni=Uint8Array,ii=Uint16Array,ri=Uint32Array,oi=new ni([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),si=new ni([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ai=new ni([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),li=function(e,t){for(var n=new ii(31),i=0;i<31;++i)n[i]=t+=1<<e[i-1]
var r=new ri(n[30])
for(i=1;i<30;++i)for(var o=n[i];o<n[i+1];++o)r[o]=o-n[i]<<5|i
return[n,r]},ci=li(oi,2),ui=ci[0],di=ci[1]
ui[28]=258,di[258]=28
for(var fi=li(si,0)[1],hi=new ii(32768),pi=0;pi<32768;++pi){var gi=(43690&pi)>>>1|(21845&pi)<<1
gi=(61680&(gi=(52428&gi)>>>2|(13107&gi)<<2))>>>4|(3855&gi)<<4,hi[pi]=((65280&gi)>>>8|(255&gi)<<8)>>>1}var _i=function(e,t,n){for(var i=e.length,r=0,o=new ii(t);r<i;++r)++o[e[r]-1]
var s,a=new ii(t)
for(r=0;r<t;++r)a[r]=a[r-1]+o[r-1]<<1
for(s=new ii(i),r=0;r<i;++r)s[r]=hi[a[e[r]-1]++]>>>15-e[r]
return s},vi=new ni(288)
for(pi=0;pi<144;++pi)vi[pi]=8
for(pi=144;pi<256;++pi)vi[pi]=9
for(pi=256;pi<280;++pi)vi[pi]=7
for(pi=280;pi<288;++pi)vi[pi]=8
var mi=new ni(32)
for(pi=0;pi<32;++pi)mi[pi]=5
var yi=_i(vi,9),bi=_i(mi,5),wi=function(e){return(e/8>>0)+(7&e&&1)},ki=function(e,t,n){(null==n||n>e.length)&&(n=e.length)
var i=new(e instanceof ii?ii:e instanceof ri?ri:ni)(n-t)
return i.set(e.subarray(t,n)),i},Si=function(e,t,n){n<<=7&t
var i=t/8>>0
e[i]|=n,e[i+1]|=n>>>8},Ei=function(e,t,n){n<<=7&t
var i=t/8>>0
e[i]|=n,e[i+1]|=n>>>8,e[i+2]|=n>>>16},xi=function(e,t){for(var n=[],i=0;i<e.length;++i)e[i]&&n.push({s:i,f:e[i]})
var r=n.length,o=n.slice()
if(!r)return[new ni(0),0]
if(1==r){var s=new ni(n[0].s+1)
return s[n[0].s]=1,[s,1]}n.sort((function(e,t){return e.f-t.f})),n.push({s:-1,f:25001})
var a=n[0],l=n[1],c=0,u=1,d=2
for(n[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=n[n[c].f<n[d].f?c++:d++],l=n[c!=u&&n[c].f<n[d].f?c++:d++],n[u++]={s:-1,f:a.f+l.f,l:a,r:l}
var f=o[0].s
for(i=1;i<r;++i)o[i].s>f&&(f=o[i].s)
var h=new ii(f+1),p=Pi(n[u-1],h,0)
if(p>t){i=0
var g=0,_=p-t,v=1<<_
for(o.sort((function(e,t){return h[t.s]-h[e.s]||e.f-t.f}));i<r;++i){var m=o[i].s
if(!(h[m]>t))break
g+=v-(1<<p-h[m]),h[m]=t}for(g>>>=_;g>0;){var y=o[i].s
h[y]<t?g-=1<<t-h[y]++-1:++i}for(;i>=0&&g;--i){var b=o[i].s
h[b]==t&&(--h[b],++g)}p=t}return[new ni(h),p]},Pi=function(e,t,n){return-1==e.s?Math.max(Pi(e.l,t,n+1),Pi(e.r,t,n+1)):t[e.s]=n},$i=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new ii(++t),i=0,r=e[0],o=1,s=function(e){n[i++]=e},a=1;a<=t;++a)if(e[a]==r&&a!=t)++o
else{if(!r&&o>2){for(;o>138;o-=138)s(32754)
o>2&&(s(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(s(r),--o;o>6;o-=6)s(8304)
o>2&&(s(o-3<<5|8208),o=0)}for(;o--;)s(r)
o=1,r=e[a]}return[n.subarray(0,i),t]},Ti=function(e,t){for(var n=0,i=0;i<t.length;++i)n+=e[i]*t[i]
return n},Ci=function(e,t,n){var i=n.length,r=wi(t+2)
e[r]=255&i,e[r+1]=i>>>8,e[r+2]=255^e[r],e[r+3]=255^e[r+1]
for(var o=0;o<i;++o)e[r+o+4]=n[o]
return 8*(r+4+i)},Ii=function(e,t,n,i,r,o,s,a,l,c,u){Si(t,u++,n),++r[256]
for(var d=xi(r,15),f=d[0],h=d[1],p=xi(o,15),g=p[0],_=p[1],v=$i(f),m=v[0],y=v[1],b=$i(g),w=b[0],k=b[1],S=new ii(19),E=0;E<m.length;++E)S[31&m[E]]++
for(E=0;E<w.length;++E)S[31&w[E]]++
for(var x=xi(S,7),P=x[0],$=x[1],T=19;T>4&&!P[ai[T-1]];--T);var C,I,L,R,F=c+5<<3,O=Ti(r,vi)+Ti(o,mi)+s,A=Ti(r,f)+Ti(o,g)+s+14+3*T+Ti(S,P)+(2*S[16]+3*S[17]+7*S[18])
if(F<=O&&F<=A)return Ci(t,u,e.subarray(l,l+c))
if(Si(t,u,1+(A<O)),u+=2,A<O){C=_i(f,h),I=f,L=_i(g,_),R=g
var M=_i(P,$)
for(Si(t,u,y-257),Si(t,u+5,k-1),Si(t,u+10,T-4),u+=14,E=0;E<T;++E)Si(t,u+3*E,P[ai[E]])
u+=3*T
for(var N=[m,w],j=0;j<2;++j){var D=N[j]
for(E=0;E<D.length;++E){var B=31&D[E]
Si(t,u,M[B]),u+=P[B],B>15&&(Si(t,u,D[E]>>>5&127),u+=D[E]>>>12)}}}else C=yi,I=vi,L=bi,R=mi
for(E=0;E<a;++E)if(i[E]>255){B=i[E]>>>18&31,Ei(t,u,C[B+257]),u+=I[B+257],B>7&&(Si(t,u,i[E]>>>23&31),u+=oi[B])
var H=31&i[E]
Ei(t,u,L[H]),u+=R[H],H>3&&(Ei(t,u,i[E]>>>5&8191),u+=si[H])}else Ei(t,u,C[i[E]]),u+=I[i[E]]
return Ei(t,u,C[256]),u+I[256]},Li=new ri([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Ri=function(){for(var e=new ri(256),t=0;t<256;++t){for(var n=t,i=9;--i;)n=(1&n&&3988292384)^n>>>1
e[t]=n}return e}(),Fi=function(){var e=4294967295
return{p:function(t){for(var n=e,i=0;i<t.length;++i)n=Ri[255&n^t[i]]^n>>>8
e=n},d:function(){return 4294967295^e}}},Oi=function(e,t,n,i,r){return function(e,t,n,i,r,o){var s=e.length,a=new ni(i+s+5*(1+Math.floor(s/7e3))+r),l=a.subarray(i,a.length-r),c=0
if(!t||s<8)for(var u=0;u<=s;u+=65535){var d=u+65535
d<s?c=Ci(l,c,e.subarray(u,d)):(l[u]=o,c=Ci(l,c,e.subarray(u,s)))}else{for(var f=Li[t-1],h=f>>>13,p=8191&f,g=(1<<n)-1,_=new ii(32768),v=new ii(g+1),m=Math.ceil(n/3),y=2*m,b=function(t){return(e[t]^e[t+1]<<m^e[t+2]<<y)&g},w=new ri(25e3),k=new ii(288),S=new ii(32),E=0,x=0,P=(u=0,0),$=0,T=0;u<s;++u){var C=b(u),I=32767&u,L=v[C]
if(_[I]=L,v[C]=I,$<=u){var R=s-u
if((E>7e3||P>24576)&&R>423){c=Ii(e,l,0,w,k,S,x,P,T,u-T,c),P=E=x=0,T=u
for(var F=0;F<286;++F)k[F]=0
for(F=0;F<30;++F)S[F]=0}var O=2,A=0,M=p,N=I-L&32767
if(R>2&&C==b(u-N))for(var j=Math.min(h,R)-1,D=Math.min(32767,u),B=Math.min(258,R);N<=D&&--M&&I!=L;){if(e[u+O]==e[u+O-N]){for(var H=0;H<B&&e[u+H]==e[u+H-N];++H);if(H>O){if(O=H,A=N,H>j)break
var q=Math.min(N,H-2),U=0
for(F=0;F<q;++F){var G=u-N+F+32768&32767,W=G-_[G]+32768&32767
W>U&&(U=W,L=G)}}}N+=(I=L)-(L=_[I])+32768&32767}if(A){w[P++]=268435456|di[O]<<18|fi[A]
var z=31&di[O],V=31&fi[A]
x+=oi[z]+si[V],++k[257+z],++S[V],$=u+O,++E}else w[P++]=e[u],++k[e[u]]}}c=Ii(e,l,o,w,k,S,x,P,T,u-T,c)}return ki(a,0,i+wi(c)+r)}(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,n,i,!r)},Ai=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},Mi=function(e,t){var n=t.filename
if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:9==t.level?2:0,e[9]=3,0!=t.mtime&&Ai(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8
for(var i=0;i<=n.length;++i)e[i+10]=n.charCodeAt(i)}},Ni=function(e){return 10+(e.filename&&e.filename.length+1||0)}
function ji(e,t){void 0===t&&(t={})
var n=Fi(),i=e.length
n.p(e)
var r=Oi(e,t,Ni(t),8),o=r.length
return Mi(r,t),Ai(r,o-8,n.d()),Ai(r,o-4,i),r}function Di(e,t){var n=e.length
if("undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e)
for(var i=new ni(e.length+(e.length>>>1)),r=0,o=function(e){i[r++]=e},s=0;s<n;++s){if(r+5>i.length){var a=new ni(r+8+(n-s<<1))
a.set(i),i=a}var l=e.charCodeAt(s)
l<128||t?o(l):l<2048?(o(192|l>>>6),o(128|63&l)):l>55295&&l<57344?(o(240|(l=65536+(1047552&l)|1023&e.charCodeAt(++s))>>>18),o(128|l>>>12&63),o(128|l>>>6&63),o(128|63&l)):(o(224|l>>>12),o(128|l>>>6&63),o(128|63&l))}return ki(i,0,r)}function Bi(e,t,n,i){return B(e)?e>n?(i&&G.warn(i+" cannot be  greater than max: "+n+". Using max value instead."),n):e<t?(i&&G.warn(i+" cannot be less than min: "+t+". Using min value instead."),t):e:(i&&G.warn(i+" must be a number. Defaulting to max value:"+n),n)}const Hi=[bn.MouseMove,bn.MouseInteraction,bn.Scroll,bn.ViewportResize,bn.Input,bn.TouchMove,bn.MediaInteraction,bn.Drag],qi=["trigger_activated","trigger_pending","trigger_disabled"],Ui=e=>({rrwebMethod:e,enqueuedAt:Date.now(),attempt:1}),Gi="[SessionRecording]"
function Wi(e){return function(e,t){for(var n="",i=0;i<e.length;){var r=e[i++]
n+=String.fromCharCode(r)}return n}(ji(Di(JSON.stringify(e))))}function zi(e){return e.type===yn.Custom&&"sessionIdle"===e.data.tag}class Vi{queuedRRWebEvents=[]
isIdle=!1
_linkedFlagSeen=!1
_lastActivityTimestamp=Date.now()
_linkedFlag=null
_removePageViewCaptureHook=void 0
_onSessionIdListener=void 0
_persistDecideOnSessionListener=void 0
_samplingSessionListener=void 0
_urlTriggers=[]
_forceAllowLocalhostNetworkCapture=!1
get sessionIdleThresholdMilliseconds(){return this.instance.config.session_recording.session_idle_threshold_ms||3e5}get rrwebRecord(){var e,t
return null==E||null===(e=E.__PosthogExtensions__)||void 0===e||null===(t=e.rrweb)||void 0===t?void 0:t.record}get started(){return this._captureStarted}get sessionManager(){if(!this.instance.sessionManager)throw new Error(Gi+" must be started with a valid sessionManager.")
return this.instance.sessionManager}get fullSnapshotIntervalMillis(){var e,t
return"trigger_pending"===this.urlTriggerStatus?6e4:null!==(e=null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.full_snapshot_interval_millis)&&void 0!==e?e:3e5}get isSampled(){const e=this.instance.get_property(Se)
return H(e)?e:null}get sessionDuration(){var e,t
const n=null===(e=this.buffer)||void 0===e?void 0:e.data[(null===(t=this.buffer)||void 0===t?void 0:t.data.length)-1],{sessionStartTimestamp:i}=this.sessionManager.checkAndGetSessionAndWindowId(!0)
return n?n.timestamp-i:null}get isRecordingEnabled(){const e=!!this.instance.get_property(_e),t=!this.instance.config.disable_session_recording
return f&&e&&t}get isConsoleLogCaptureEnabled(){const e=!!this.instance.get_property(ve),t=this.instance.config.enable_recording_console_log
return null!=t?t:e}get canvasRecording(){var e,t,n,i,r,o
const s=this.instance.config.session_recording.captureCanvas,a=this.instance.get_property(ye),l=null!==(e=null!==(t=null==s?void 0:s.recordCanvas)&&void 0!==t?t:null==a?void 0:a.enabled)&&void 0!==e&&e,c=null!==(n=null!==(i=null==s?void 0:s.canvasFps)&&void 0!==i?i:null==a?void 0:a.fps)&&void 0!==n?n:0,u=null!==(r=null!==(o=null==s?void 0:s.canvasQuality)&&void 0!==o?o:null==a?void 0:a.quality)&&void 0!==r?r:0
return{enabled:l,fps:Bi(c,0,12,"canvas recording fps"),quality:Bi(u,0,1,"canvas recording quality")}}get networkPayloadCapture(){var e,t
const n=this.instance.get_property(me),i={recordHeaders:null===(e=this.instance.config.session_recording)||void 0===e?void 0:e.recordHeaders,recordBody:null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.recordBody},r=(null==i?void 0:i.recordHeaders)||(null==n?void 0:n.recordHeaders),o=(null==i?void 0:i.recordBody)||(null==n?void 0:n.recordBody),s=F(this.instance.config.capture_performance)?this.instance.config.capture_performance.network_timing:this.instance.config.capture_performance,a=!!(H(s)?s:null==n?void 0:n.capturePerformance)
return r||o||a?{recordHeaders:r,recordBody:o,recordPerformance:a}:void 0}get sampleRate(){const e=this.instance.get_property(be)
return B(e)?e:null}get minimumDuration(){const e=this.instance.get_property(we)
return B(e)?e:null}get status(){return this.receivedDecide?this.isRecordingEnabled?D(this._linkedFlag)||this._linkedFlagSeen?"trigger_pending"===this.urlTriggerStatus?"buffering":H(this.isSampled)?this.isSampled?"sampled":"disabled":"active":"buffering":"disabled":"buffering"}get urlTriggerStatus(){var e,t
if(this.receivedDecide&&0===this._urlTriggers.length)return"trigger_disabled"
const n=null===(e=this.instance)||void 0===e?void 0:e.get_property(xe)
var i,r,o,s
return(null===(t=this.instance)||void 0===t?void 0:t.get_property(Ee))!==this.sessionId?(null===(i=this.instance)||void 0===i||null===(r=i.persistence)||void 0===r||r.unregister(Ee),null===(o=this.instance)||void 0===o||null===(s=o.persistence)||void 0===s||s.unregister(xe),"trigger_pending"):qi.includes(n)?n:"trigger_pending"}set urlTriggerStatus(e){var t,n
null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n||n.register({[Ee]:this.sessionId,[xe]:e})}constructor(e){if(this.instance=e,this._captureStarted=!1,this._endpoint="/s/",this.stopRrweb=void 0,this.receivedDecide=!1,!this.instance.sessionManager)throw G.error(Gi+" started without valid sessionManager"),new Error(Gi+" started without valid sessionManager. This is a bug.")
const{sessionId:t,windowId:n}=this.sessionManager.checkAndGetSessionAndWindowId()
this.sessionId=t,this.windowId=n,this.buffer=this.clearBuffer(),this.sessionIdleThresholdMilliseconds>=this.sessionManager.sessionTimeoutMs&&G.warn(Gi+` session_idle_threshold_ms (${this.sessionIdleThresholdMilliseconds}) is greater than the session timeout (${this.sessionManager.sessionTimeoutMs}). Session will never be detected as idle`)}_onBeforeUnload=()=>{this._flushBuffer()}
_onOffline=()=>{this._tryAddCustomEvent("browser offline",{})}
_onOnline=()=>{this._tryAddCustomEvent("browser online",{})}
_onVisibilityChange=()=>{if(null!=m&&m.visibilityState){const e="window "+m.visibilityState
this._tryAddCustomEvent(e,{})}}
startIfEnabledOrStop(e){this.isRecordingEnabled?(this._startCapture(e),null==f||f.addEventListener("beforeunload",this._onBeforeUnload),null==f||f.addEventListener("offline",this._onOffline),null==f||f.addEventListener("online",this._onOnline),null==f||f.addEventListener("visibilitychange",this._onVisibilityChange),this._setupSampling(),D(this._removePageViewCaptureHook)&&(this._removePageViewCaptureHook=this.instance._addCaptureHook((e=>{try{if("$pageview"===e){const e=f?this._maskUrl(f.location.href):""
if(!e)return
this._tryAddCustomEvent("$pageview",{href:e})}}catch(e){G.error("Could not add $pageview to rrweb session",e)}}))),this._onSessionIdListener||(this._onSessionIdListener=this.sessionManager.onSessionId(((e,t,n)=>{var i,r,o,s
n&&(this._tryAddCustomEvent("$session_id_change",{sessionId:e,windowId:t,changeReason:n}),null===(i=this.instance)||void 0===i||null===(r=i.persistence)||void 0===r||r.unregister(Ee),null===(o=this.instance)||void 0===o||null===(s=o.persistence)||void 0===s||s.unregister(xe))})))):this.stopRecording()}stopRecording(){var e,t,n
this._captureStarted&&this.stopRrweb&&(this.stopRrweb(),this.stopRrweb=void 0,this._captureStarted=!1,null==f||f.removeEventListener("beforeunload",this._onBeforeUnload),null==f||f.removeEventListener("offline",this._onOffline),null==f||f.removeEventListener("online",this._onOnline),null==f||f.removeEventListener("visibilitychange",this._onVisibilityChange),this.clearBuffer(),clearInterval(this._fullSnapshotTimer),null===(e=this._removePageViewCaptureHook)||void 0===e||e.call(this),this._removePageViewCaptureHook=void 0,null===(t=this._onSessionIdListener)||void 0===t||t.call(this),this._onSessionIdListener=void 0,null===(n=this._samplingSessionListener)||void 0===n||n.call(this),this._samplingSessionListener=void 0,G.info(Gi+" stopped"))}makeSamplingDecision(e){var t
const n=this.sessionId!==e,i=this.sampleRate
var r
if(!B(i))return void(null===(r=this.instance.persistence)||void 0===r||r.register({[Se]:null}))
const o=this.isSampled
let s
const a=n||!H(o)
s=a?Math.random()<i:o,a&&(s?this._reportStarted("sampling"):G.warn(Gi+` Sample rate (${i}) has determined that this sessionId (${e}) will not be sent to the server.`),this._tryAddCustomEvent("samplingDecisionMade",{sampleRate:i,isSampled:s})),null===(t=this.instance.persistence)||void 0===t||t.register({[Se]:s})}afterDecideResponse(e){var t,n,i,r
if(this._persistDecideResponse(e),this._linkedFlag=(null===(t=e.sessionRecording)||void 0===t?void 0:t.linkedFlag)||null,null!==(n=e.sessionRecording)&&void 0!==n&&n.endpoint&&(this._endpoint=null===(r=e.sessionRecording)||void 0===r?void 0:r.endpoint),this._setupSampling(),!D(this._linkedFlag)&&!this._linkedFlagSeen){const e=M(this._linkedFlag)?this._linkedFlag:this._linkedFlag.flag,t=M(this._linkedFlag)?null:this._linkedFlag.variant
this.instance.onFeatureFlags(((n,i)=>{const r=F(i)&&e in i,o=t?i[e]===t:r
if(o){const n={linkedFlag:e,linkedVariant:t},i="linked flag matched"
G.info(Gi+" "+i,n),this._tryAddCustomEvent(i,n),this._reportStarted("linked_flag_match")}this._linkedFlagSeen=o}))}null!==(i=e.sessionRecording)&&void 0!==i&&i.urlTriggers&&(this._urlTriggers=e.sessionRecording.urlTriggers),this.receivedDecide=!0,this.startIfEnabledOrStop()}_setupSampling(){B(this.sampleRate)&&D(this._samplingSessionListener)&&(this._samplingSessionListener=this.sessionManager.onSessionId((e=>{this.makeSamplingDecision(e)})))}_persistDecideResponse(e){if(this.instance.persistence){var t
const n=this.instance.persistence,i=()=>{var t,i,r,o,s,a,l
const c=null===(t=e.sessionRecording)||void 0===t?void 0:t.sampleRate,u=D(c)?null:parseFloat(c),d=null===(i=e.sessionRecording)||void 0===i?void 0:i.minimumDurationMilliseconds
n.register({[_e]:!!e.sessionRecording,[ve]:null===(r=e.sessionRecording)||void 0===r?void 0:r.consoleLogRecordingEnabled,[me]:{capturePerformance:e.capturePerformance,...null===(o=e.sessionRecording)||void 0===o?void 0:o.networkPayloadCapture},[ye]:{enabled:null===(s=e.sessionRecording)||void 0===s?void 0:s.recordCanvas,fps:null===(a=e.sessionRecording)||void 0===a?void 0:a.canvasFps,quality:null===(l=e.sessionRecording)||void 0===l?void 0:l.canvasQuality},[be]:u,[we]:A(d)?null:d})}
i(),null===(t=this._persistDecideOnSessionListener)||void 0===t||t.call(this),this._persistDecideOnSessionListener=this.sessionManager.onSessionId(i)}}log(e){var t
let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log"
null===(t=this.instance.sessionRecording)||void 0===t||t.onRRwebEmit({type:6,data:{plugin:"rrweb/console@1",payload:{level:n,trace:[],payload:[JSON.stringify(e)]}},timestamp:Date.now()})}_startCapture(e){var t,n
A(Object.assign)||A(Array.from)||(this._captureStarted||this.instance.config.disable_session_recording||this.instance.consent.isOptedOut())||(this._captureStarted=!0,this.sessionManager.checkAndGetSessionAndWindowId(),this.rrwebRecord?this._onScriptLoaded():null===(t=E.__PosthogExtensions__)||void 0===t||null===(n=t.loadExternalDependency)||void 0===n||n.call(t,this.instance,"recorder",(e=>{if(e)return G.error(Gi+" could not load recorder",e)
this._onScriptLoaded()})),G.info(Gi+" starting"),"active"===this.status&&this._reportStarted(e||"recording_initialized"))}isInteractiveEvent(e){var t
return 3===e.type&&-1!==Hi.indexOf(null===(t=e.data)||void 0===t?void 0:t.source)}_updateWindowAndSessionIds(e){const t=this.isInteractiveEvent(e)
t||this.isIdle||e.timestamp-this._lastActivityTimestamp>this.sessionIdleThresholdMilliseconds&&(this.isIdle=!0,clearInterval(this._fullSnapshotTimer),this._tryAddCustomEvent("sessionIdle",{eventTimestamp:e.timestamp,lastActivityTimestamp:this._lastActivityTimestamp,threshold:this.sessionIdleThresholdMilliseconds,bufferLength:this.buffer.data.length,bufferSize:this.buffer.size}),this._flushBuffer())
let n=!1
if(t&&(this._lastActivityTimestamp=e.timestamp,this.isIdle&&(this.isIdle=!1,this._tryAddCustomEvent("sessionNoLongerIdle",{reason:"user activity",type:e.type}),n=!0)),this.isIdle)return
const{windowId:i,sessionId:r}=this.sessionManager.checkAndGetSessionAndWindowId(!t,e.timestamp),o=this.sessionId!==r,s=this.windowId!==i
this.windowId=i,this.sessionId=r,o||s?(this.stopRecording(),this.startIfEnabledOrStop("session_id_changed")):n&&this._scheduleFullSnapshot()}_tryRRWebMethod(e){try{return e.rrwebMethod(),!0}catch(t){return this.queuedRRWebEvents.length<10?this.queuedRRWebEvents.push({enqueuedAt:e.enqueuedAt||Date.now(),attempt:e.attempt++,rrwebMethod:e.rrwebMethod}):G.warn(Gi+" could not emit queued rrweb event.",t,e),!1}}_tryAddCustomEvent(e,t){return this._tryRRWebMethod(Ui((()=>this.rrwebRecord.addCustomEvent(e,t))))}_tryTakeFullSnapshot(){return this._tryRRWebMethod(Ui((()=>this.rrwebRecord.takeFullSnapshot())))}_onScriptLoaded(){var e
const t={blockClass:"ph-no-capture",blockSelector:void 0,ignoreClass:"ph-ignore-input",maskTextClass:"ph-mask",maskTextSelector:void 0,maskTextFn:void 0,maskAllInputs:!0,maskInputOptions:{password:!0},maskInputFn:void 0,slimDOMOptions:{},collectFonts:!1,inlineStylesheet:!0,recordCrossOriginIframes:!1},n=this.instance.config.session_recording
for(const[e,i]of Object.entries(n||{}))e in t&&("maskInputOptions"===e?t.maskInputOptions={password:!0,...i}:t[e]=i)
if(this.canvasRecording&&this.canvasRecording.enabled&&(t.recordCanvas=!0,t.sampling={canvas:this.canvasRecording.fps},t.dataURLOptions={type:"image/webp",quality:this.canvasRecording.quality}),!this.rrwebRecord)return void G.error(Gi+"onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")
this.mutationRateLimiter=null!==(e=this.mutationRateLimiter)&&void 0!==e?e:new ti(this.rrwebRecord,{onBlockedNode:(e,t)=>{const n=`Too many mutations on node '${e}'. Rate limiting. This could be due to SVG animations or something similar`
G.info(n,{node:t}),this.log(Gi+" "+n,"warn")}})
const i=this._gatherRRWebPlugins()
this.stopRrweb=this.rrwebRecord({emit:e=>{this.onRRwebEmit(e)},plugins:i,...t}),this._lastActivityTimestamp=Date.now(),this.isIdle=!1,this._tryAddCustomEvent("$session_options",{sessionRecordingOptions:t,activePlugins:i.map((e=>null==e?void 0:e.name))}),this._tryAddCustomEvent("$posthog_config",{config:this.instance.config})}_scheduleFullSnapshot(){if(this._fullSnapshotTimer&&clearInterval(this._fullSnapshotTimer),this.isIdle)return
const e=this.fullSnapshotIntervalMillis
e&&(this._fullSnapshotTimer=setInterval((()=>{this._tryTakeFullSnapshot()}),e))}_gatherRRWebPlugins(){var e,t,n,i
const r=[],o=null===(e=E.__PosthogExtensions__)||void 0===e||null===(t=e.rrwebPlugins)||void 0===t?void 0:t.getRecordConsolePlugin
o&&this.isConsoleLogCaptureEnabled&&r.push(o())
const s=null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.rrwebPlugins)||void 0===i?void 0:i.getRecordNetworkPlugin
return this.networkPayloadCapture&&R(s)&&(!ft.includes(location.hostname)||this._forceAllowLocalhostNetworkCapture?r.push(s(((e,t)=>{const n={payloadSizeLimitBytes:Jn.payloadSizeLimitBytes,performanceEntryTypeToObserve:[...Jn.performanceEntryTypeToObserve],payloadHostDenyList:[...t.payloadHostDenyList||[],...Jn.payloadHostDenyList]},i=!1!==e.session_recording.recordHeaders&&t.recordHeaders,r=!1!==e.session_recording.recordBody&&t.recordBody,o=!1!==e.capture_performance&&t.recordPerformance,s=(e=>{var t
const n=Math.min(1e6,null!==(t=e.payloadSizeLimitBytes)&&void 0!==t?t:1e6)
return e=>(null!=e&&e.requestBody&&(e.requestBody=Zn(e.requestBody,e.requestHeaders,n,"Request")),null!=e&&e.responseBody&&(e.responseBody=Zn(e.responseBody,e.responseHeaders,n,"Response")),e)})(n),a=e=>s((e=>{const t=ht(e.name)
if(!(t&&t.pathname&&Yn.some((e=>0===t.pathname.indexOf(e)))))return e})((e=>{const t=e.requestHeaders
return D(t)||J(Object.keys(null!=t?t:{}),(e=>{Kn.includes(e.toLowerCase())&&(t[e]=Qn)})),e})(e))),l=R(e.session_recording.maskNetworkRequestFn)
return l&&R(e.session_recording.maskCapturedNetworkRequestFn)&&G.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."),l&&(e.session_recording.maskCapturedNetworkRequestFn=t=>{const n=e.session_recording.maskNetworkRequestFn({url:t.name})
return{...t,name:null==n?void 0:n.url}}),n.maskRequestFn=R(e.session_recording.maskCapturedNetworkRequestFn)?t=>{var n,i,r
const o=a(t)
return o&&null!==(n=null===(i=(r=e.session_recording).maskCapturedNetworkRequestFn)||void 0===i?void 0:i.call(r,o))&&void 0!==n?n:void 0}:e=>function(e){if(!A(e))return e.requestBody=ei(e.requestBody,"Request"),e.responseBody=ei(e.responseBody,"Response"),e}(a(e)),{...Jn,...n,recordHeaders:i,recordBody:r,recordPerformance:o,recordInitialRequests:o}})(this.instance.config,this.networkPayloadCapture))):G.info(Gi+" NetworkCapture not started because we are on localhost.")),r}onRRwebEmit(e){var t
if(this._processQueuedEvents(),!e||!F(e))return
if(e.type===yn.Meta){const t=this._maskUrl(e.data.href)
if(this._lastHref=t,!t)return
e.data.href=t}else this._pageViewFallBack()
this._checkUrlTrigger(),e.type===yn.FullSnapshot&&this._scheduleFullSnapshot(),e.type===yn.FullSnapshot&&"trigger_pending"===this.urlTriggerStatus&&this.clearBuffer()
const n=this.mutationRateLimiter?this.mutationRateLimiter.throttleMutations(e):e
if(!n)return
const i=function(e){const t=e
if(t&&F(t)&&6===t.type&&F(t.data)&&"rrweb/console@1"===t.data.plugin){t.data.payload.payload.length>10&&(t.data.payload.payload=t.data.payload.payload.slice(0,10),t.data.payload.payload.push("...[truncated]"))
const n=[]
for(let e=0;e<t.data.payload.payload.length;e++)t.data.payload.payload[e]&&t.data.payload.payload[e].length>2e3?n.push(t.data.payload.payload[e].slice(0,2e3)+"...[truncated]"):n.push(t.data.payload.payload[e])
return t.data.payload.payload=n,e}return e}(n)
if(this._updateWindowAndSessionIds(i),this.isIdle&&!zi(i))return
if(zi(i)){const e=i.data.payload
if(e){const t=e.lastActivityTimestamp,n=e.threshold
i.timestamp=t+n}}const r=null===(t=this.instance.config.session_recording.compress_events)||void 0===t||t?function(e){if(vn(e)<1024)return e
try{if(e.type===yn.FullSnapshot)return{...e,data:Wi(e.data),cv:"2024-10"}
if(e.type===yn.IncrementalSnapshot&&e.data.source===bn.Mutation)return{...e,cv:"2024-10",data:{...e.data,texts:Wi(e.data.texts),attributes:Wi(e.data.attributes),removes:Wi(e.data.removes),adds:Wi(e.data.adds)}}
if(e.type===yn.IncrementalSnapshot&&e.data.source===bn.StyleSheetRule)return{...e,cv:"2024-10",data:{...e.data,adds:Wi(e.data.adds),removes:Wi(e.data.removes)}}}catch(e){G.error(Gi+" could not compress event - will use uncompressed event",e)}return e}(i):i,o={$snapshot_bytes:vn(r),$snapshot_data:r,$session_id:this.sessionId,$window_id:this.windowId}
"disabled"!==this.status?this._captureSnapshotBuffered(o):this.clearBuffer()}_pageViewFallBack(){if(this.instance.config.capture_pageview||!f)return
const e=this._maskUrl(f.location.href)
this._lastHref!==e&&(this._tryAddCustomEvent("$url_changed",{href:e}),this._lastHref=e)}_processQueuedEvents(){if(this.queuedRRWebEvents.length){const e=[...this.queuedRRWebEvents]
this.queuedRRWebEvents=[],e.forEach((e=>{Date.now()-e.enqueuedAt<=2e3&&this._tryRRWebMethod(e)}))}}_maskUrl(e){const t=this.instance.config.session_recording
if(t.maskNetworkRequestFn){var n
let i={url:e}
return i=t.maskNetworkRequestFn(i),null===(n=i)||void 0===n?void 0:n.url}return e}clearBuffer(){return this.buffer={size:0,data:[],sessionId:this.sessionId,windowId:this.windowId},this.buffer}_flushBuffer(){this.flushBufferTimer&&(clearTimeout(this.flushBufferTimer),this.flushBufferTimer=void 0)
const e=this.minimumDuration,t=this.sessionDuration,n=B(t)&&t>=0,i=B(e)&&n&&t<e
return"buffering"===this.status||i?(this.flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3),this.buffer):(this.buffer.data.length>0&&mn(this.buffer).forEach((e=>{this._captureSnapshot({$snapshot_bytes:e.size,$snapshot_data:e.data,$session_id:e.sessionId,$window_id:e.windowId})})),this.clearBuffer())}_captureSnapshotBuffered(e){var t
const n=2+((null===(t=this.buffer)||void 0===t?void 0:t.data.length)||0)
!this.isIdle&&(this.buffer.size+e.$snapshot_bytes+n>943718.4||this.buffer.sessionId!==this.sessionId)&&(this.buffer=this._flushBuffer()),this.buffer.size+=e.$snapshot_bytes,this.buffer.data.push(e.$snapshot_data),this.flushBufferTimer||this.isIdle||(this.flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3))}_captureSnapshot(e){this.instance.capture("$snapshot",e,{_url:this.instance.requestRouter.endpointFor("api",this._endpoint),_noTruncate:!0,_batchKey:"recordings",skip_client_rate_limiting:!0})}_checkUrlTrigger(){if(void 0===f||!f.location.href)return
const e=f.location.href
this._urlTriggers.some((t=>"regex"===t.matching&&new RegExp(t.url).test(e)))&&this._activateUrlTrigger()}_activateUrlTrigger(){"trigger_pending"===this.urlTriggerStatus&&(this.urlTriggerStatus="trigger_activated",this._tryAddCustomEvent("url trigger activated",{}),this._flushBuffer(),G.info(Gi+" recording triggered by URL pattern match"))}overrideLinkedFlag(){this._linkedFlagSeen=!0,this._reportStarted("linked_flag_override")}overrideSampling(){var e
null===(e=this.instance.persistence)||void 0===e||e.register({[Se]:!0}),this._reportStarted("sampling_override")}_reportStarted(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>!0)()&&this.instance.register_for_session({$session_recording_start_reason:e})}}class Qi{constructor(e){this.instance=e,this.instance.decideEndpointWasHit=this.instance._hasBootstrappedFeatureFlags()}call(){const e={token:this.instance.config.token,distinct_id:this.instance.get_distinct_id(),groups:this.instance.getGroups(),person_properties:this.instance.get_property(Te),group_properties:this.instance.get_property(Ce),disable_flags:this.instance.config.advanced_disable_feature_flags||this.instance.config.advanced_disable_feature_flags_on_first_load||void 0}
this.instance._send_request({method:"POST",url:this.instance.requestRouter.endpointFor("api","/decide/?v=3"),data:e,compression:this.instance.config.disable_compression?void 0:se.Base64,timeout:this.instance.config.feature_flag_request_timeout_ms,callback:e=>this.parseDecideResponse(e.json)})}parseDecideResponse(e){this.instance.featureFlags.setReloadingPaused(!1),this.instance.featureFlags._startReloadTimer()
const t=!e
if(this.instance.config.advanced_disable_feature_flags_on_first_load||this.instance.config.advanced_disable_feature_flags||this.instance.featureFlags.receivedFeatureFlags(null!=e?e:{},t),t)G.error("Failed to fetch feature flags from PostHog.")
else{if(!m||!m.body)return G.info("document not ready yet, trying again in 500 milliseconds..."),void setTimeout((()=>{this.parseDecideResponse(e)}),500)
if(this.instance._afterDecideResponse(e),e.siteApps)if(this.instance.config.opt_in_site_apps)for(const{id:t,url:o}of e.siteApps){var n,i,r
E[`__$$ph_site_app_${t}`]=this.instance,null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=(r=n).loadSiteApp)||void 0===i||i.call(r,this.instance,o,(e=>{if(e)return G.error(`Error while initializing PostHog app with config id ${t}`,e)}))}else e.siteApps.length>0&&G.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')}}}const Ji=null!=f&&f.location?_t(f.location.hash,"__posthog")||_t(location.hash,"state"):null,Ki="_postHogToolbarParams"
var Xi
!function(e){e[e.UNINITIALIZED=0]="UNINITIALIZED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(Xi||(Xi={}))
class Yi{constructor(e){this.instance=e}setToolbarState(e){E.ph_toolbar_state=e}getToolbarState(){var e
return null!==(e=E.ph_toolbar_state)&&void 0!==e?e:Xi.UNINITIALIZED}maybeLoadToolbar(){var e,t
let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
if(!f||!m)return!1
n=null!==(e=n)&&void 0!==e?e:f.location,r=null!==(t=r)&&void 0!==t?t:f.history
try{if(!i){try{f.localStorage.setItem("test","test"),f.localStorage.removeItem("test")}catch{return!1}i=null==f?void 0:f.localStorage}const e=Ji||_t(n.hash,"__posthog")||_t(n.hash,"state")
let t
const o=e?Z((()=>JSON.parse(atob(decodeURIComponent(e)))))||Z((()=>JSON.parse(decodeURIComponent(e)))):null
return o&&"ph_authorize"===o.action?(t=o,t.source="url",t&&Object.keys(t).length>0&&(o.desiredHash?n.hash=o.desiredHash:r?r.replaceState(r.state,"",n.pathname+n.search):n.hash="")):(t=JSON.parse(i.getItem(Ki)||"{}"),t.source="localstorage",delete t.userIntent),!(!t.token||this.instance.config.token!==t.token||(this.loadToolbar(t),0))}catch{return!1}}_callLoadToolbar(e){(E.ph_load_toolbar||E.ph_load_editor)(e,this.instance)}loadToolbar(e){const t=!(null==m||!m.getElementById(Be))
if(!f||t)return!1
const n="custom"===this.instance.requestRouter.region&&this.instance.config.advanced_disable_toolbar_metrics,i={token:this.instance.config.token,...e,apiURL:this.instance.requestRouter.endpointFor("ui"),...n?{instrument:!1}:{}}
if(f.localStorage.setItem(Ki,JSON.stringify({...i,source:void 0})),this.getToolbarState()===Xi.LOADED)this._callLoadToolbar(i)
else if(this.getToolbarState()===Xi.UNINITIALIZED){var r,o
this.setToolbarState(Xi.LOADING),null===(r=E.__PosthogExtensions__)||void 0===r||null===(o=r.loadExternalDependency)||void 0===o||o.call(r,this.instance,"toolbar",(e=>{if(e)return G.error("Failed to load toolbar",e),void this.setToolbarState(Xi.UNINITIALIZED)
this.setToolbarState(Xi.LOADED),this._callLoadToolbar(i)})),ie(f,"turbolinks:load",(()=>{this.setToolbarState(Xi.UNINITIALIZED),this.loadToolbar(i)}))}return!0}_loadEditor(e){return this.loadToolbar(e)}maybeLoadEditor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
return this.maybeLoadToolbar(e,t,n)}}class Zi{isPaused=!0
queue=[]
flushTimeoutMs=3e3
constructor(e){this.sendRequest=e}enqueue(e){this.queue.push(e),this.flushTimeout||this.setFlushTimeout()}unload(){this.clearFlushTimeout()
const e=this.queue.length>0?this.formatQueue():{},t=Object.values(e),n=[...t.filter((e=>0===e.url.indexOf("/e"))),...t.filter((e=>0!==e.url.indexOf("/e")))]
n.map((e=>{this.sendRequest({...e,transport:"sendBeacon"})}))}enable(){this.isPaused=!1,this.setFlushTimeout()}setFlushTimeout(){this.isPaused||(this.flushTimeout=setTimeout((()=>{if(this.clearFlushTimeout(),this.queue.length>0){const e=this.formatQueue()
for(const t in e){const n=e[t],i=(new Date).getTime()
n.data&&L(n.data)&&J(n.data,(e=>{e.offset=Math.abs(e.timestamp-i),delete e.timestamp})),this.sendRequest(n)}}}),this.flushTimeoutMs))}clearFlushTimeout(){clearTimeout(this.flushTimeout),this.flushTimeout=void 0}formatQueue(){const e={}
return J(this.queue,(t=>{var n
const i=t,r=(i?i.batchKey:null)||i.url
A(e[r])&&(e[r]={...i,data:[]}),null===(n=e[r].data)||void 0===n||n.push(i.data)})),this.queue=[],e}}const er=!!w||!!b,tr="text/plain",nr=(e,t)=>{const[n,i]=e.split("?"),r={...t}
null==i||i.split("&").forEach((e=>{const[t]=e.split("=")
delete r[t]}))
let o=function(e){let t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&"
const r=[]
return J(e,(function(e,i){A(e)||A(i)||"undefined"===i||(t=encodeURIComponent((e=>e instanceof File)(e)?e.name:e.toString()),n=encodeURIComponent(i),r[r.length]=n+"="+t)})),r.join(i)}(r)
return o=o?(i?i+"&":"")+o:i,`${n}?${o}`},ir=e=>{let{data:t,compression:n}=e
if(!t)return
if(n===se.GZipJS){const e=ji(Di(JSON.stringify(t)),{mtime:0}),n=new Blob([e],{type:tr})
return{contentType:tr,body:n,estimatedSize:n.size}}if(n===se.Base64){const e=function(e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
let n,i,r,o,s,a,l,c,u=0,d=0,f=""
const h=[]
if(!e)return e
e=function(e){let t,n,i,r="",o=0
for(t=n=0,o=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,i=0;i<o;i++){const o=e.charCodeAt(i)
let s=null
o<128?n++:s=o>127&&o<2048?String.fromCharCode(o>>6|192,63&o|128):String.fromCharCode(o>>12|224,o>>6&63|128,63&o|128),j(s)||(n>t&&(r+=e.substring(t,n)),r+=s,t=n=i+1)}return n>t&&(r+=e.substring(t,e.length)),r}(e)
do{n=e.charCodeAt(u++),i=e.charCodeAt(u++),r=e.charCodeAt(u++),c=n<<16|i<<8|r,o=c>>18&63,s=c>>12&63,a=c>>6&63,l=63&c,h[d++]=t.charAt(o)+t.charAt(s)+t.charAt(a)+t.charAt(l)}while(u<e.length)
switch(f=h.join(""),e.length%3){case 1:f=f.slice(0,-2)+"=="
break
case 2:f=f.slice(0,-1)+"="}return f}(JSON.stringify(t)),n=(e=>"data="+encodeURIComponent("string"==typeof e?e:JSON.stringify(e)))(e)
return{contentType:"application/x-www-form-urlencoded",body:n,estimatedSize:new Blob([n]).size}}const i=JSON.stringify(t)
return{contentType:"application/json",body:i,estimatedSize:new Blob([i]).size}},rr=[]
w&&rr.push({transport:"XHR",method:e=>{var t
const n=new w
n.open(e.method||"GET",e.url,!0)
const{contentType:i,body:r}=null!==(t=ir(e))&&void 0!==t?t:{}
J(e.headers,(function(e,t){n.setRequestHeader(t,e)})),i&&n.setRequestHeader("Content-Type",i),e.timeout&&(n.timeout=e.timeout),n.withCredentials=!0,n.onreadystatechange=()=>{if(4===n.readyState){var t
const i={statusCode:n.status,text:n.responseText}
if(200===n.status)try{i.json=JSON.parse(n.responseText)}catch{}null===(t=e.callback)||void 0===t||t.call(e,i)}},n.send(r)}}),b&&rr.push({transport:"fetch",method:e=>{var t,n
const{contentType:i,body:r,estimatedSize:o}=null!==(t=ir(e))&&void 0!==t?t:{},s=new Headers
J(e.headers,(function(e,t){s.append(t,e)})),i&&s.append("Content-Type",i)
const a=e.url
let l=null
if(k){const t=new k
l={signal:t.signal,timeout:setTimeout((()=>t.abort()),e.timeout)}}b(a,{method:(null==e?void 0:e.method)||"GET",headers:s,keepalive:"POST"===e.method&&(o||0)<65536,body:r,signal:null===(n=l)||void 0===n?void 0:n.signal}).then((t=>t.text().then((n=>{var i
const r={statusCode:t.status,text:n}
if(200===t.status)try{r.json=JSON.parse(n)}catch(e){G.error(e)}null===(i=e.callback)||void 0===i||i.call(e,r)})))).catch((t=>{var n
G.error(t),null===(n=e.callback)||void 0===n||n.call(e,{statusCode:0,text:t})})).finally((()=>l?clearTimeout(l.timeout):null))}}),null!=v&&v.sendBeacon&&rr.push({transport:"sendBeacon",method:e=>{const t=nr(e.url,{beacon:"1"})
try{var n
const{contentType:i,body:r}=null!==(n=ir(e))&&void 0!==n?n:{},o="string"==typeof r?new Blob([r],{type:i}):r
v.sendBeacon(t,o)}catch{}}})
class or{isPolling=!1
pollIntervalMs=3e3
queue=[]
constructor(e){this.instance=e,this.queue=[],this.areWeOnline=!0,!A(f)&&"onLine"in f.navigator&&(this.areWeOnline=f.navigator.onLine,f.addEventListener("online",(()=>{this.areWeOnline=!0,this.flush()})),f.addEventListener("offline",(()=>{this.areWeOnline=!1})))}retriableRequest(e){let{retriesPerformedSoFar:t,...n}=e
B(t)&&t>0&&(n.url=nr(n.url,{retry_count:t})),this.instance._send_request({...n,callback:e=>{var i
200!==e.statusCode&&(e.statusCode<400||e.statusCode>=500)&&(null!=t?t:0)<10?this.enqueue({retriesPerformedSoFar:t,...n}):null===(i=n.callback)||void 0===i||i.call(n,e)}})}enqueue(e){const t=e.retriesPerformedSoFar||0
e.retriesPerformedSoFar=t+1
const n=function(e){const t=3e3*2**e,n=t/2,i=Math.min(18e5,t),r=(Math.random()-.5)*(i-n)
return Math.ceil(i+r)}(t),i=Date.now()+n
this.queue.push({retryAt:i,requestOptions:e})
let r=`Enqueued failed request for retry in ${n}`
navigator.onLine||(r+=" (Browser is offline)"),G.warn(r),this.isPolling||(this.isPolling=!0,this.poll())}poll(){this.poller&&clearTimeout(this.poller),this.poller=setTimeout((()=>{this.areWeOnline&&this.queue.length>0&&this.flush(),this.poll()}),this.pollIntervalMs)}flush(){const e=Date.now(),t=[],n=this.queue.filter((n=>n.retryAt<e||(t.push(n),!1)))
if(this.queue=t,n.length>0)for(const{requestOptions:e}of n)this.retriableRequest(e)}unload(){this.poller&&(clearTimeout(this.poller),this.poller=void 0)
for(const{requestOptions:e}of this.queue)try{this.instance._send_request({...e,transport:"sendBeacon"})}catch(e){G.error(e)}this.queue=[]}}class sr{_sessionIdChangedHandlers=[]
constructor(e,t,n,i){var r
this.config=e,this.persistence=t,this._windowId=void 0,this._sessionId=void 0,this._sessionStartTimestamp=null,this._sessionActivityTimestamp=null,this._sessionIdGenerator=n||Ze,this._windowIdGenerator=i||Ze
const o=e.persistence_name||e.token,s=e.session_idle_timeout_seconds||1800
if(this._sessionTimeoutMs=1e3*Bi(s,60,1800,"session_idle_timeout_seconds"),this._window_id_storage_key="ph_"+o+"_window_id",this._primary_window_exists_storage_key="ph_"+o+"_primary_window_exists",this._canUseSessionStorage()){const e=dt.parse(this._window_id_storage_key),t=dt.parse(this._primary_window_exists_storage_key)
e&&!t?this._windowId=e:dt.remove(this._window_id_storage_key),dt.set(this._primary_window_exists_storage_key,!0)}if(null!==(r=this.config.bootstrap)&&void 0!==r&&r.sessionID)try{const e=(e=>{const t=this.config.bootstrap.sessionID.replace(/-/g,"")
if(32!==t.length)throw new Error("Not a valid UUID")
if("7"!==t[12])throw new Error("Not a UUIDv7")
return parseInt(t.substring(0,12),16)})()
this._setSessionId(this.config.bootstrap.sessionID,(new Date).getTime(),e)}catch(e){G.error("Invalid sessionID in bootstrap",e)}this._listenToReloadWindow()}get sessionTimeoutMs(){return this._sessionTimeoutMs}onSessionId(e){return A(this._sessionIdChangedHandlers)&&(this._sessionIdChangedHandlers=[]),this._sessionIdChangedHandlers.push(e),this._sessionId&&e(this._sessionId,this._windowId),()=>{this._sessionIdChangedHandlers=this._sessionIdChangedHandlers.filter((t=>t!==e))}}_canUseSessionStorage(){return"memory"!==this.config.persistence&&!this.persistence.disabled&&dt.is_supported()}_setWindowId(e){e!==this._windowId&&(this._windowId=e,this._canUseSessionStorage()&&dt.set(this._window_id_storage_key,e))}_getWindowId(){return this._windowId?this._windowId:this._canUseSessionStorage()?dt.parse(this._window_id_storage_key):null}_setSessionId(e,t,n){e===this._sessionId&&t===this._sessionActivityTimestamp&&n===this._sessionStartTimestamp||(this._sessionStartTimestamp=n,this._sessionActivityTimestamp=t,this._sessionId=e,this.persistence.register({[ke]:[t,e,n]}))}_getSessionId(){if(this._sessionId&&this._sessionActivityTimestamp&&this._sessionStartTimestamp)return[this._sessionActivityTimestamp,this._sessionId,this._sessionStartTimestamp]
const e=this.persistence.props[ke]
return L(e)&&2===e.length&&e.push(e[0]),e||[0,null,0]}resetSessionId(){this._setSessionId(null,null,null)}_listenToReloadWindow(){null==f||f.addEventListener("beforeunload",(()=>{this._canUseSessionStorage()&&dt.remove(this._primary_window_exists_storage_key)}))}checkAndGetSessionAndWindowId(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
const t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:null)||(new Date).getTime()
let[n,i,r]=this._getSessionId(),o=this._getWindowId()
const s=B(r)&&r>0&&Math.abs(t-r)>864e5
let a=!1
const l=!i,c=!e&&Math.abs(t-n)>this.sessionTimeoutMs
l||c||s?(i=this._sessionIdGenerator(),o=this._windowIdGenerator(),G.info("[SessionId] new session ID generated",{sessionId:i,windowId:o,changeReason:{noSessionId:l,activityTimeout:c,sessionPastMaximumLength:s}}),r=t,a=!0):o||(o=this._windowIdGenerator(),a=!0)
const u=0===n||!e||s?t:n,d=0===r?(new Date).getTime():r
return this._setWindowId(o),this._setSessionId(i,u,d),a&&this._sessionIdChangedHandlers.forEach((e=>e(i,o,a?{noSessionId:l,activityTimeout:c,sessionPastMaximumLength:s}:void 0))),{sessionId:i,windowId:o,sessionStartTimestamp:d,changeReason:a?{noSessionId:l,activityTimeout:c,sessionPastMaximumLength:s}:void 0,lastActivityTimestamp:n}}}let ar
!function(e){e.US="us",e.EU="eu",e.CUSTOM="custom"}(ar||(ar={}))
const lr="i.posthog.com"
class cr{_regionCache={}
constructor(e){this.instance=e}get apiHost(){const e=this.instance.config.api_host.trim().replace(/\/$/,"")
return"https://app.posthog.com"===e?"https://us.i.posthog.com":e}get uiHost(){var e
let t=null===(e=this.instance.config.ui_host)||void 0===e?void 0:e.replace(/\/$/,"")
return t||(t=this.apiHost.replace(`.${lr}`,".posthog.com")),"https://app.posthog.com"===t?"https://us.posthog.com":t}get region(){return this._regionCache[this.apiHost]||(/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=ar.US:/https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=ar.EU:this._regionCache[this.apiHost]=ar.CUSTOM),this._regionCache[this.apiHost]}endpointFor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
if(t&&(t="/"===t[0]?t:`/${t}`),"ui"===e)return this.uiHost+t
if(this.region===ar.CUSTOM)return this.apiHost+t
const n=lr+t
switch(e){case"assets":return`https://${this.region}-assets.${n}`
case"api":return`https://${this.region}.${n}`}}}const ur="posthog-js"
function dr(e){let{organization:t,projectId:n,prefix:i,severityAllowList:r=["error"]}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return o=>{var s,a,l,c,u
if("*"!==r&&!r.includes(o.level)||!e.__loaded)return o
o.tags||(o.tags={})
const d=e.requestRouter.endpointFor("ui",`/project/${e.config.token}/person/${e.get_distinct_id()}`)
o.tags["PostHog Person URL"]=d,e.sessionRecordingStarted()&&(o.tags["PostHog Recording URL"]=e.get_session_replay_url({withTimestamp:!0}))
const f=(null===(s=o.exception)||void 0===s?void 0:s.values)||[],h={$exception_message:(null===(a=f[0])||void 0===a?void 0:a.value)||o.message,$exception_type:null===(l=f[0])||void 0===l?void 0:l.type,$exception_personURL:d,$exception_level:o.level,$exception_list:f,$sentry_event_id:o.event_id,$sentry_exception:o.exception,$sentry_exception_message:(null===(c=f[0])||void 0===c?void 0:c.value)||o.message,$sentry_exception_type:null===(u=f[0])||void 0===u?void 0:u.type,$sentry_tags:o.tags,$level:o.level}
return t&&n&&(h.$sentry_url=(i||"https://sentry.io/organizations/")+t+"/issues/?project="+n+"&query="+o.event_id),e.exceptions.sendExceptionEvent(h),o}}class fr{constructor(e,t,n,i,r){this.name=ur,this.setupOnce=function(o){o(dr(e,{organization:t,projectId:n,prefix:i,severityAllowList:r}))}}}class hr{constructor(e){this._instance=e}doPageView(e){var t
const n=this._previousPageViewProperties(e)
return this._currentPath=null!==(t=null==f?void 0:f.location.pathname)&&void 0!==t?t:"",this._instance.scrollManager.resetContext(),this._prevPageviewTimestamp=e,n}doPageLeave(e){return this._previousPageViewProperties(e)}_previousPageViewProperties(e){const t=this._currentPath,n=this._prevPageviewTimestamp,i=this._instance.scrollManager.getContext()
if(!n)return{}
let r={}
if(i){let{maxScrollHeight:e,lastScrollY:t,maxScrollY:n,maxContentHeight:o,lastContentY:s,maxContentY:a}=i
A(e)||A(t)||A(n)||A(o)||A(s)||A(a)||(e=Math.ceil(e),t=Math.ceil(t),n=Math.ceil(n),o=Math.ceil(o),s=Math.ceil(s),a=Math.ceil(a),r={$prev_pageview_last_scroll:t,$prev_pageview_last_scroll_percentage:e<=1?1:Bi(t/e,0,1),$prev_pageview_max_scroll:n,$prev_pageview_max_scroll_percentage:e<=1?1:Bi(n/e,0,1),$prev_pageview_last_content:s,$prev_pageview_last_content_percentage:o<=1?1:Bi(s/o,0,1),$prev_pageview_max_content:a,$prev_pageview_max_content_percentage:o<=1?1:Bi(a/o,0,1)})}return t&&(r.$prev_pageview_pathname=t),n&&(r.$prev_pageview_duration=(e.getTime()-n.getTime())/1e3),r}}let pr,gr,_r
!function(e){e.Popover="popover",e.API="api",e.Widget="widget"}(pr||(pr={})),function(e){e.Open="open",e.MultipleChoice="multiple_choice",e.SingleChoice="single_choice",e.Rating="rating",e.Link="link"}(gr||(gr={})),function(e){e.NextQuestion="next_question",e.End="end",e.ResponseBased="response_based",e.SpecificQuestion="specific_question"}(_r||(_r={}))
class vr{events={}
constructor(){this.events={}}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),()=>{this.events[e]=this.events[e].filter((e=>e!==t))}}emit(e,t){for(const n of this.events[e]||[])n(t)
for(const n of this.events["*"]||[])n(e,t)}}class mr{_debugEventEmitter=new vr
constructor(e){this.instance=e,this.actionEvents=new Set,this.actionRegistry=new Set}init(){var e
if(!A(null===(e=this.instance)||void 0===e?void 0:e._addCaptureHook)){var t
const e=(e,t)=>{this.on(e,t)}
null===(t=this.instance)||void 0===t||t._addCaptureHook(e)}}register(e){var t,n
if(!A(null===(t=this.instance)||void 0===t?void 0:t._addCaptureHook)&&(e.forEach((e=>{var t,n
null===(t=this.actionRegistry)||void 0===t||t.add(e),null===(n=e.steps)||void 0===n||n.forEach((e=>{var t
null===(t=this.actionEvents)||void 0===t||t.add((null==e?void 0:e.event)||"")}))})),null!==(n=this.instance)&&void 0!==n&&n.autocapture)){var i
const t=new Set
e.forEach((e=>{var n
null===(n=e.steps)||void 0===n||n.forEach((e=>{null!=e&&e.selector&&t.add(null==e?void 0:e.selector)}))})),null===(i=this.instance)||void 0===i||i.autocapture.setElementSelectors(t)}}on(e,t){var n
null!=t&&0!=e.length&&(this.actionEvents.has(e)||this.actionEvents.has(null==t?void 0:t.event))&&this.actionRegistry&&(null===(n=this.actionRegistry)||void 0===n?void 0:n.size)>0&&this.actionRegistry.forEach((e=>{this.checkAction(t,e)&&this._debugEventEmitter.emit("actionCaptured",e.name)}))}_addActionHook(e){this.onAction("actionCaptured",(t=>e(t)))}checkAction(e,t){if(null==(null==t?void 0:t.steps))return!1
for(const n of t.steps)if(this.checkStep(e,n))return!0
return!1}onAction(e,t){return this._debugEventEmitter.on(e,t)}checkStep=(e,t)=>this.checkStepEvent(e,t)&&this.checkStepUrl(e,t)&&this.checkStepElement(e,t)
checkStepEvent=(e,t)=>null==t||!t.event||(null==e?void 0:e.event)===(null==t?void 0:t.event)
checkStepUrl(e,t){if(null!=t&&t.url){var n
const i=null==e||null===(n=e.properties)||void 0===n?void 0:n.$current_url
if(!i||"string"!=typeof i)return!1
if(!mr.matchString(i,null==t?void 0:t.url,(null==t?void 0:t.url_matching)||"contains"))return!1}return!0}static matchString(e,t,n){switch(n){case"regex":return!!f&&pt(e,t)
case"exact":return t===e
case"contains":const n=mr.escapeStringRegexp(t).replace(/_/g,".").replace(/%/g,".*")
return pt(e,n)
default:return!1}}static escapeStringRegexp(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}checkStepElement(e,t){if((null!=t&&t.href||null!=t&&t.tag_name||null!=t&&t.text)&&!this.getElementsList(e).some((e=>!(null!=t&&t.href&&!mr.matchString(e.href||"",null==t?void 0:t.href,(null==t?void 0:t.href_matching)||"exact")||null!=t&&t.tag_name&&e.tag_name!==(null==t?void 0:t.tag_name)||null!=t&&t.text&&!mr.matchString(e.text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")&&!mr.matchString(e.$el_text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")))))return!1
if(null!=t&&t.selector){var n
const i=null==e||null===(n=e.properties)||void 0===n?void 0:n.$element_selectors
if(!i)return!1
if(!i.includes(null==t?void 0:t.selector))return!1}return!0}getElementsList(e){return null==(null==e?void 0:e.properties.$elements)?[]:null==e?void 0:e.properties.$elements}}class yr{static SURVEY_SHOWN_EVENT_NAME="survey shown"
constructor(e){this.instance=e,this.eventToSurveys=new Map,this.actionToSurveys=new Map}register(e){var t
A(null===(t=this.instance)||void 0===t?void 0:t._addCaptureHook)||(this.setupEventBasedSurveys(e),this.setupActionBasedSurveys(e))}setupActionBasedSurveys(e){const t=e.filter((e=>{var t,n,i,r
return(null===(t=e.conditions)||void 0===t?void 0:t.actions)&&(null===(n=e.conditions)||void 0===n||null===(i=n.actions)||void 0===i||null===(r=i.values)||void 0===r?void 0:r.length)>0}))
if(0!==t.length){if(null==this.actionMatcher){this.actionMatcher=new mr(this.instance),this.actionMatcher.init()
const e=e=>{this.onAction(e)}
this.actionMatcher._addActionHook(e)}t.forEach((e=>{var t,n,i,r,o,s,a,l,c,u
e.conditions&&null!==(t=e.conditions)&&void 0!==t&&t.actions&&null!==(n=e.conditions)&&void 0!==n&&null!==(i=n.actions)&&void 0!==i&&i.values&&(null===(r=e.conditions)||void 0===r||null===(o=r.actions)||void 0===o||null===(s=o.values)||void 0===s?void 0:s.length)>0&&(null===(a=this.actionMatcher)||void 0===a||a.register(e.conditions.actions.values),null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c||null===(u=c.values)||void 0===u||u.forEach((t=>{if(t&&t.name){const n=this.actionToSurveys.get(t.name)
n&&n.push(e.id),this.actionToSurveys.set(t.name,n||[e.id])}})))}))}}setupEventBasedSurveys(e){var t
0!==e.filter((e=>{var t,n,i,r
return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(i=n.events)||void 0===i||null===(r=i.values)||void 0===r?void 0:r.length)>0})).length&&(null===(t=this.instance)||void 0===t||t._addCaptureHook(((e,t)=>{this.onEvent(e,t)})),e.forEach((e=>{var t,n,i
null===(t=e.conditions)||void 0===t||null===(n=t.events)||void 0===n||null===(i=n.values)||void 0===i||i.forEach((t=>{if(t&&t.name){const n=this.eventToSurveys.get(t.name)
n&&n.push(e.id),this.eventToSurveys.set(t.name,n||[e.id])}}))})))}onEvent(e,t){var n,i
const r=(null===(n=this.instance)||void 0===n||null===(i=n.persistence)||void 0===i?void 0:i.props[Le])||[]
if(yr.SURVEY_SHOWN_EVENT_NAME==e&&t&&r.length>0){var o
const e=null==t||null===(o=t.properties)||void 0===o?void 0:o.$survey_id
if(e){const t=r.indexOf(e)
t>=0&&(r.splice(t,1),this._updateActivatedSurveys(r))}}else this.eventToSurveys.has(e)&&this._updateActivatedSurveys(r.concat(this.eventToSurveys.get(e)||[]))}onAction(e){var t,n
const i=(null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n?void 0:n.props[Le])||[]
this.actionToSurveys.has(e)&&this._updateActivatedSurveys(i.concat(this.actionToSurveys.get(e)||[]))}_updateActivatedSurveys(e){var t,n
null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n||n.register({[Le]:[...new Set(e)]})}getSurveys(){var e,t
return(null===(e=this.instance)||void 0===e||null===(t=e.persistence)||void 0===t?void 0:t.props[Le])||[]}getEventToSurveys(){return this.eventToSurveys}_getActionMatcher(){return this.actionMatcher}}var br,wr,kr,Sr,Er,xr,Pr,$r,Tr={},Cr=[],Ir=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Lr=Array.isArray
function Rr(e,t){for(var n in t)e[n]=t[n]
return e}function Fr(e){var t=e.parentNode
t&&t.removeChild(e)}function Or(e,t,n,i,r){var o={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++kr:r,__i:-1,__u:0}
return null==r&&null!=wr.vnode&&wr.vnode(o),o}function Ar(e){return e.children}function Mr(e,t){this.props=e,this.context=t}function Nr(e,t){if(null==t)return e.__?Nr(e.__,e.__i+1):null
for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e
return"function"==typeof e.type?Nr(e):null}function jr(e){var t,n
if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e
break}return jr(e)}}function Dr(e){(!e.__d&&(e.__d=!0)&&Sr.push(e)&&!Br.__r++||Er!==wr.debounceRendering)&&((Er=wr.debounceRendering)||xr)(Br)}function Br(){var e,t,n,i,r,o,s,a,l
for(Sr.sort(Pr);e=Sr.shift();)e.__d&&(t=Sr.length,i=void 0,o=(r=(n=e).__v).__e,a=[],l=[],(s=n.__P)&&((i=Rr({},r)).__v=r.__v+1,wr.vnode&&wr.vnode(i),Qr(s,i,r,n.__n,void 0!==s.ownerSVGElement,32&r.__u?[o]:null,a,null==o?Nr(r):o,!!(32&r.__u),l),i.__.__k[i.__i]=i,Jr(a,i,l),i.__e!=o&&jr(i)),Sr.length>t&&Sr.sort(Pr))
Br.__r=0}function Hr(e,t,n,i,r,o,s,a,l,c,u){var d,f,h,p,g,_=i&&i.__k||Cr,v=t.length
for(n.__d=l,function(e,t,n){var i,r,o,s,a,l=t.length,c=n.length,u=c,d=0
for(e.__k=[],i=0;i<l;i++)null!=(r=e.__k[i]=null==(r=t[i])||"boolean"==typeof r||"function"==typeof r?null:"string"==typeof r||"number"==typeof r||"bigint"==typeof r||r.constructor==String?Or(null,r,null,null,r):Lr(r)?Or(Ar,{children:r},null,null,null):void 0===r.constructor&&r.__b>0?Or(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)?(r.__=e,r.__b=e.__b+1,a=Ur(r,n,s=i+d,u),r.__i=a,o=null,-1!==a&&(u--,(o=n[a])&&(o.__u|=131072)),null==o||null===o.__v?(-1==a&&d--,"function"!=typeof r.type&&(r.__u|=65536)):a!==s&&(a===s+1?d++:a>s?u>l-s?d+=a-s:d--:d=a<s&&a==s-1?a-s:0,a!==i+d&&(r.__u|=65536))):(o=n[i])&&null==o.key&&o.__e&&(o.__e==e.__d&&(e.__d=Nr(o)),Xr(o,o,!1),n[i]=null,u--)
if(u)for(i=0;i<c;i++)null!=(o=n[i])&&0==(131072&o.__u)&&(o.__e==e.__d&&(e.__d=Nr(o)),Xr(o,o))}(n,t,_),l=n.__d,d=0;d<v;d++)null!=(h=n.__k[d])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?Tr:_[h.__i]||Tr,h.__i=d,Qr(e,h,f,r,o,s,a,l,c,u),p=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&Kr(f.ref,null,h),u.push(h.ref,h.__c||p,h)),null==g&&null!=p&&(g=p),65536&h.__u||f.__k===h.__k?l=qr(h,l,e):"function"==typeof h.type&&void 0!==h.__d?l=h.__d:p&&(l=p.nextSibling),h.__d=void 0,h.__u&=-196609)
n.__d=l,n.__e=g}function qr(e,t,n){var i,r
if("function"==typeof e.type){for(i=e.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=e,t=qr(i[r],t,n))
return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function Ur(e,t,n,i){var r=e.key,o=e.type,s=n-1,a=n+1,l=t[n]
if(null===l||l&&r==l.key&&o===l.type)return n
if(i>(null!=l&&0==(131072&l.__u)?1:0))for(;s>=0||a<t.length;){if(s>=0){if((l=t[s])&&0==(131072&l.__u)&&r==l.key&&o===l.type)return s
s--}if(a<t.length){if((l=t[a])&&0==(131072&l.__u)&&r==l.key&&o===l.type)return a
a++}}return-1}function Gr(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||Ir.test(t)?n:n+"px"}function Wr(e,t,n,i,r){var o
e:if("style"===t)if("string"==typeof n)e.style.cssText=n
else{if("string"==typeof i&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||Gr(e.style,t,"")
if(n)for(t in n)i&&n[t]===i[t]||Gr(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?i?n.u=i.u:(n.u=Date.now(),e.addEventListener(t,o?Vr:zr,o)):e.removeEventListener(t,o?Vr:zr,o)
else{if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s")
else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&"role"!==t&&t in e)try{e[t]=null==n?"":n
break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function zr(e){var t=this.l[e.type+!1]
if(e.t){if(e.t<=t.u)return}else e.t=Date.now()
return t(wr.event?wr.event(e):e)}function Vr(e){return this.l[e.type+!0](wr.event?wr.event(e):e)}function Qr(e,t,n,i,r,o,s,a,l,c){var u,d,f,h,p,g,_,v,m,y,b,w,k,S,E,x=t.type
if(void 0!==t.constructor)return null
128&n.__u&&(l=!!(32&n.__u),o=[a=t.__e=n.__e]),(u=wr.__b)&&u(t)
e:if("function"==typeof x)try{if(v=t.props,m=(u=x.contextType)&&i[u.__c],y=u?m?m.props.value:u.__:i,n.__c?_=(d=t.__c=n.__c).__=d.__E:("prototype"in x&&x.prototype.render?t.__c=d=new x(v,y):(t.__c=d=new Mr(v,y),d.constructor=x,d.render=Yr),m&&m.sub(d),d.props=v,d.state||(d.state={}),d.context=y,d.__n=i,f=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=x.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=Rr({},d.__s)),Rr(d.__s,x.getDerivedStateFromProps(v,d.__s))),h=d.props,p=d.state,d.__v=t,f)null==x.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount)
else{if(null==x.getDerivedStateFromProps&&v!==h&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(v,y),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(v,d.__s,y)||t.__v===n.__v)){for(t.__v!==n.__v&&(d.props=v,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),b=0;b<d._sb.length;b++)d.__h.push(d._sb[b])
d._sb=[],d.__h.length&&s.push(d)
break e}null!=d.componentWillUpdate&&d.componentWillUpdate(v,d.__s,y),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(h,p,g)}))}if(d.context=y,d.props=v,d.__P=e,d.__e=!1,w=wr.__r,k=0,"prototype"in x&&x.prototype.render){for(d.state=d.__s,d.__d=!1,w&&w(t),u=d.render(d.props,d.state,d.context),S=0;S<d._sb.length;S++)d.__h.push(d._sb[S])
d._sb=[]}else do{d.__d=!1,w&&w(t),u=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++k<25)
d.state=d.__s,null!=d.getChildContext&&(i=Rr(Rr({},i),d.getChildContext())),f||null==d.getSnapshotBeforeUpdate||(g=d.getSnapshotBeforeUpdate(h,p)),Hr(e,Lr(E=null!=u&&u.type===Ar&&null==u.key?u.props.children:u)?E:[E],t,n,i,r,o,s,a,l,c),d.base=t.__e,t.__u&=-161,d.__h.length&&s.push(d),_&&(d.__E=d.__=null)}catch(e){t.__v=null,l||null!=o?(t.__e=a,t.__u|=l?160:32,o[o.indexOf(a)]=null):(t.__e=n.__e,t.__k=n.__k),wr.__e(e,t,n)}else null==o&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=function(e,t,n,i,r,o,s,a,l){var c,u,d,f,h,p,g,_=n.props,v=t.props,m=t.type
if("svg"===m&&(r=!0),null!=o)for(c=0;c<o.length;c++)if((h=o[c])&&"setAttribute"in h==!!m&&(m?h.localName===m:3===h.nodeType)){e=h,o[c]=null
break}if(null==e){if(null===m)return document.createTextNode(v)
e=r?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,v.is&&v),o=null,a=!1}if(null===m)_===v||a&&e.data===v||(e.data=v)
else{if(o=o&&br.call(e.childNodes),_=n.props||Tr,!a&&null!=o)for(_={},c=0;c<e.attributes.length;c++)_[(h=e.attributes[c]).name]=h.value
for(c in _)h=_[c],"children"==c||("dangerouslySetInnerHTML"==c?d=h:"key"===c||c in v||Wr(e,c,null,h,r))
for(c in v)h=v[c],"children"==c?f=h:"dangerouslySetInnerHTML"==c?u=h:"value"==c?p=h:"checked"==c?g=h:"key"===c||a&&"function"!=typeof h||_[c]===h||Wr(e,c,h,_[c],r)
if(u)a||d&&(u.__html===d.__html||u.__html===e.innerHTML)||(e.innerHTML=u.__html),t.__k=[]
else if(d&&(e.innerHTML=""),Hr(e,Lr(f)?f:[f],t,n,i,r&&"foreignObject"!==m,o,s,o?o[0]:n.__k&&Nr(n,0),a,l),null!=o)for(c=o.length;c--;)null!=o[c]&&Fr(o[c])
a||(c="value",void 0!==p&&(p!==e[c]||"progress"===m&&!p||"option"===m&&p!==_[c])&&Wr(e,c,p,_[c],!1),c="checked",void 0!==g&&g!==e[c]&&Wr(e,c,g,_[c],!1))}return e}(n.__e,t,n,i,r,o,s,l,c);(u=wr.diffed)&&u(t)}function Jr(e,t,n){t.__d=void 0
for(var i=0;i<n.length;i++)Kr(n[i],n[++i],n[++i])
wr.__c&&wr.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){wr.__e(e,t.__v)}}))}function Kr(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){wr.__e(e,n)}}function Xr(e,t,n){var i,r
if(wr.unmount&&wr.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Kr(i,null,t)),null!=(i=e.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){wr.__e(e,t)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(r=0;r<i.length;r++)i[r]&&Xr(i[r],t,n||"function"!=typeof e.type)
n||null==e.__e||Fr(e.__e),e.__=e.__e=e.__d=void 0}function Yr(e,t,n){return this.constructor(e,n)}br=Cr.slice,wr={__e:function(e,t,n,i){for(var r,o,s;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&null!=o.getDerivedStateFromError&&(r.setState(o.getDerivedStateFromError(e)),s=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,i||{}),s=r.__d),s)return r.__E=r}catch(t){e=t}throw e}},kr=0,Mr.prototype.setState=function(e,t){var n
n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=Rr({},this.state),"function"==typeof e&&(e=e(Rr({},n),this.props)),e&&Rr(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),Dr(this))},Mr.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Dr(this))},Mr.prototype.render=Ar,Sr=[],xr="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Pr=function(e,t){return e.__v.__b-t.__v.__b},Br.__r=0,$r=0,function(e,t){var n={__c:t="__cC"+$r++,__:{isPreviewMode:!1,previewPageIndex:0,handleCloseSurveyPopup:()=>{},isPopup:!0},Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,i
return this.getChildContext||(n=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some((function(e){e.__e=!0,Dr(e)}))},this.sub=function(e){n.push(e)
var t=e.componentWillUnmount
e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}}
n.Provider.__=n.Consumer.contextType=n}()
const Zr="[Surveys]",eo={icontains:e=>!!f&&f.location.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:e=>!!f&&-1===f.location.href.toLowerCase().indexOf(e.toLowerCase()),regex:e=>!!f&&pt(f.location.href,e),not_regex:e=>!!f&&!pt(f.location.href,e),exact:e=>(null==f?void 0:f.location.href)===e,is_not:e=>(null==f?void 0:f.location.href)!==e}
class to{constructor(e){this.instance=e,this._surveyEventReceiver=null}afterDecideResponse(e){this._decideServerResponse=!!e.surveys,this.loadIfEnabled()}reset(){localStorage.removeItem("lastSeenSurveyDate")
const e=(()=>{const e=[]
for(let t=0;t<localStorage.length;t++){const n=localStorage.key(t)
null!=n&&n.startsWith("seenSurvey_")&&e.push(n)}return e})()
e.forEach((e=>localStorage.removeItem(e)))}loadIfEnabled(){var e
const t=null==E||null===(e=E.__PosthogExtensions__)||void 0===e?void 0:e.generateSurveys
var n,i
this.instance.config.disable_surveys||!this._decideServerResponse||t||(null==this._surveyEventReceiver&&(this._surveyEventReceiver=new yr(this.instance)),null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"surveys",(e=>{var t,n
if(e)return G.error(Zr,"Could not load surveys script",e)
this._surveyManager=null===(t=E.__PosthogExtensions__)||void 0===t||null===(n=t.generateSurveys)||void 0===n?void 0:n.call(t,this.instance)})))}getSurveys(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(this.instance.config.disable_surveys)return e([])
null==this._surveyEventReceiver&&(this._surveyEventReceiver=new yr(this.instance))
const n=this.instance.get_property(Ie)
if(n&&!t)return e(n)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api",`/api/surveys/?token=${this.instance.config.token}`),method:"GET",transport:"XHR",callback:t=>{var n
if(200!==t.statusCode||!t.json)return e([])
const i=t.json.surveys||[],r=i.filter((e=>{var t,n,i,r,o,s,a,l,c,u,d,f
return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(i=n.events)||void 0===i?void 0:i.values)&&(null===(r=e.conditions)||void 0===r||null===(o=r.events)||void 0===o||null===(s=o.values)||void 0===s?void 0:s.length)>0||(null===(a=e.conditions)||void 0===a?void 0:a.actions)&&(null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c?void 0:c.values)&&(null===(u=e.conditions)||void 0===u||null===(d=u.actions)||void 0===d||null===(f=d.values)||void 0===f?void 0:f.length)>0}))
var o
return r.length>0&&(null===(o=this._surveyEventReceiver)||void 0===o||o.register(r)),null===(n=this.instance.persistence)||void 0===n||n.register({[Ie]:i}),e(i)}})}getActiveMatchingSurveys(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.getSurveys((t=>{var n
const i=t.filter((e=>!(!e.start_date||e.end_date))).filter((e=>{var t,n,i,r
if(!e.conditions)return!0
const o=null===(t=e.conditions)||void 0===t||!t.url||eo[null!==(n=null===(i=e.conditions)||void 0===i?void 0:i.urlMatchType)&&void 0!==n?n:"icontains"](e.conditions.url),s=null===(r=e.conditions)||void 0===r||!r.selector||(null==m?void 0:m.querySelector(e.conditions.selector))
return o&&s})),r=null===(n=this._surveyEventReceiver)||void 0===n?void 0:n.getSurveys(),o=i.filter((e=>{var t,n,i,o,s,a,l,c,u,d
if(!e.linked_flag_key&&!e.targeting_flag_key&&!e.internal_targeting_flag_key)return!0
const f=!e.linked_flag_key||this.instance.featureFlags.isFeatureEnabled(e.linked_flag_key),h=!e.targeting_flag_key||this.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key),p=(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(i=n.events)||void 0===i?void 0:i.values)&&(null===(o=e.conditions)||void 0===o||null===(s=o.events)||void 0===s?void 0:s.values.length)>0,g=(null===(a=e.conditions)||void 0===a?void 0:a.actions)&&(null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c?void 0:c.values)&&(null===(u=e.conditions)||void 0===u||null===(d=u.actions)||void 0===d?void 0:d.values.length)>0,_=!p&&!g||(null==r?void 0:r.includes(e.id)),v=this._canActivateRepeatedly(e),m=!(e.internal_targeting_flag_key&&!v)||this.instance.featureFlags.isFeatureEnabled(e.internal_targeting_flag_key)
return f&&h&&m&&_}))
return e(o)}),t)}getNextSurveyStep(e,t,n){var i
const r=e.questions[t],o=t+1
if(null===(i=r.branching)||void 0===i||!i.type)return t===e.questions.length-1?_r.End:o
if(r.branching.type===_r.End)return _r.End
if(r.branching.type===_r.SpecificQuestion){if(Number.isInteger(r.branching.index))return r.branching.index}else if(r.branching.type===_r.ResponseBased){if(r.type===gr.SingleChoice){var s,a
const e=r.choices.indexOf(`${n}`)
if(null!==(s=r.branching)&&void 0!==s&&null!==(a=s.responseValues)&&void 0!==a&&a.hasOwnProperty(e)){const t=r.branching.responseValues[e]
return Number.isInteger(t)?t:t===_r.End?_r.End:o}}else if(r.type===gr.Rating){var l,c
if("number"!=typeof n||!Number.isInteger(n))throw new Error("The response type must be an integer")
const e=function(e,t){if(3===t){if(e<1||e>3)throw new Error("The response must be in range 1-3")
return 1===e?"negative":2===e?"neutral":"positive"}if(5===t){if(e<1||e>5)throw new Error("The response must be in range 1-5")
return e<=2?"negative":3===e?"neutral":"positive"}if(7===t){if(e<1||e>7)throw new Error("The response must be in range 1-7")
return e<=3?"negative":4===e?"neutral":"positive"}if(10===t){if(e<0||e>10)throw new Error("The response must be in range 0-10")
return e<=6?"detractors":e<=8?"passives":"promoters"}throw new Error("The scale must be one of: 3, 5, 7, 10")}(n,r.scale)
if(null!==(l=r.branching)&&void 0!==l&&null!==(c=l.responseValues)&&void 0!==c&&c.hasOwnProperty(e)){const t=r.branching.responseValues[e]
return Number.isInteger(t)?t:t===_r.End?_r.End:o}}return o}return G.warn(Zr,"Falling back to next question index due to unexpected branching type"),o}_canActivateRepeatedly(e){var t
return D(null===(t=E.__PosthogExtensions__)||void 0===t?void 0:t.canActivateRepeatedly)?(G.warn(Zr,"canActivateRepeatedly is not defined, must init before calling"),!1):E.__PosthogExtensions__.canActivateRepeatedly(e)}canRenderSurvey(e){D(this._surveyManager)?G.warn(Zr,"canActivateRepeatedly is not defined, must init before calling"):this.getSurveys((t=>{const n=t.filter((t=>t.id===e))[0]
this._surveyManager.canRenderSurvey(n)}))}renderSurvey(e,t){D(this._surveyManager)?G.warn(Zr,"canActivateRepeatedly is not defined, must init before calling"):this.getSurveys((n=>{const i=n.filter((t=>t.id===e))[0]
this._surveyManager.renderSurvey(i,null==m?void 0:m.querySelector(t))}))}}class no{serverLimits={}
lastEventRateLimited=!1
constructor(e){var t,n
this.instance=e,this.captureEventsPerSecond=(null===(t=e.config.rate_limiting)||void 0===t?void 0:t.events_per_second)||10,this.captureEventsBurstLimit=Math.max((null===(n=e.config.rate_limiting)||void 0===n?void 0:n.events_burst_limit)||10*this.captureEventsPerSecond,this.captureEventsPerSecond),this.lastEventRateLimited=this.clientRateLimitContext(!0).isRateLimited}clientRateLimitContext(){var e,t,n
let i=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
const r=(new Date).getTime(),o=null!==(e=null===(t=this.instance.persistence)||void 0===t?void 0:t.get_property(Ae))&&void 0!==e?e:{tokens:this.captureEventsBurstLimit,last:r}
o.tokens+=(r-o.last)/1e3*this.captureEventsPerSecond,o.last=r,o.tokens>this.captureEventsBurstLimit&&(o.tokens=this.captureEventsBurstLimit)
const s=o.tokens<1
return s||i||(o.tokens=Math.max(0,o.tokens-1)),!s||this.lastEventRateLimited||i||this.instance.capture("$$client_ingestion_warning",{$$client_ingestion_warning_message:`posthog-js client rate limited. Config is set to ${this.captureEventsPerSecond} events per second and ${this.captureEventsBurstLimit} events burst limit.`},{skip_client_rate_limiting:!0}),this.lastEventRateLimited=s,null===(n=this.instance.persistence)||void 0===n||n.set_property(Ae,o),{isRateLimited:s,remainingTokens:o.tokens}}isServerRateLimited(e){const t=this.serverLimits[e||"events"]||!1
return!1!==t&&(new Date).getTime()<t}checkForLimiting=e=>{const t=e.text
if(t&&t.length)try{(JSON.parse(t).quota_limited||[]).forEach((e=>{G.info(`[RateLimiter] ${e||"events"} is quota limited.`),this.serverLimits[e]=(new Date).getTime()+6e4}))}catch(e){return void G.warn(`[RateLimiter] could not rate limit - continuing. Error: "${null==e?void 0:e.message}"`,{text:t})}}}const io=()=>({initialPathName:(null==y?void 0:y.pathname)||"",referringDomain:pn.referringDomain(),...pn.campaignParams()})
class ro{constructor(e,t,n){this._sessionIdManager=e,this._persistence=t,this._sessionSourceParamGenerator=n||io,this._sessionIdManager.onSessionId(this._onSessionIdCallback)}_getStoredProps(){return this._persistence.props[Oe]}_onSessionIdCallback=e=>{const t=this._getStoredProps()
if(t&&t.sessionId===e)return
const n={sessionId:e,props:this._sessionSourceParamGenerator()}
this._persistence.register({[Oe]:n})}
getSessionProps(){var e
const t=null===(e=this._getStoredProps())||void 0===e?void 0:e.props
return t?{$client_session_initial_referring_host:t.referringDomain,$client_session_initial_pathname:t.initialPathName,$client_session_initial_utm_source:t.utm_source,$client_session_initial_utm_campaign:t.utm_campaign,$client_session_initial_utm_medium:t.utm_medium,$client_session_initial_utm_content:t.utm_content,$client_session_initial_utm_term:t.utm_term}:{}}}const oo=["ahrefsbot","ahrefssiteaudit","applebot","baiduspider","bingbot","bingpreview","bot.htm","bot.php","crawler","deepscan","duckduckbot","facebookexternal","facebookcatalog","gptbot","http://yandex.com/bots","hubspot","ia_archiver","linkedinbot","mj12bot","msnbot","nessus","petalbot","pinterest","prerender","rogerbot","screaming frog","semrushbot","sitebulb","slurp","turnitin","twitterbot","vercelbot","yahoo! slurp","yandexbot","headlesschrome","cypress","Google-HotelAdsVerifier","adsbot-google","apis-google","duplexweb-google","feedfetcher-google","google favicon","google web preview","google-read-aloud","googlebot","googleweblight","mediapartners-google","storebot-google","Bytespider;"],so=function(e,t){if(!e)return!1
const n=e.toLowerCase()
return oo.concat(t||[]).some((e=>{const t=e.toLowerCase()
return-1!==n.indexOf(t)}))},ao=function(e,t){if(!e)return!1
const n=e.userAgent
if(n&&so(n,t))return!0
try{const n=null==e?void 0:e.userAgentData
if(null!=n&&n.brands&&n.brands.some((e=>so(null==e?void 0:e.brand,t))))return!0}catch{}return!!e.webdriver}
class lo{constructor(){this.clicks=[]}isRageClick(e,t,n){const i=this.clicks[this.clicks.length-1]
if(i&&Math.abs(e-i.x)+Math.abs(t-i.y)<30&&n-i.timestamp<1e3){if(this.clicks.push({x:e,y:t,timestamp:n}),3===this.clicks.length)return!0}else this.clicks=[{x:e,y:t,timestamp:n}]
return!1}}function co(e){var t
return e.id===Be||!(null===(t=e.closest)||void 0===t||!t.call(e,"#"+Be))}class uo{rageclicks=new lo
_enabledServerSide=!1
_initialized=!1
_flushInterval=null
constructor(e){var t
this.instance=e,this._enabledServerSide=!(null===(t=this.instance.persistence)||void 0===t||!t.props[de]),null==f||f.addEventListener("beforeunload",(()=>{this.flush()}))}get flushIntervalMilliseconds(){let e=5e3
return F(this.instance.config.capture_heatmaps)&&this.instance.config.capture_heatmaps.flush_interval_milliseconds&&(e=this.instance.config.capture_heatmaps.flush_interval_milliseconds),e}get isEnabled(){return A(this.instance.config.capture_heatmaps)?A(this.instance.config.enable_heatmaps)?this._enabledServerSide:this.instance.config.enable_heatmaps:!1!==this.instance.config.capture_heatmaps}startIfEnabled(){if(this.isEnabled){if(this._initialized)return
G.info("[heatmaps] starting..."),this._setupListeners(),this._flushInterval=setInterval(this.flush.bind(this),this.flushIntervalMilliseconds)}else{var e
clearInterval(null!==(e=this._flushInterval)&&void 0!==e?e:void 0),this.getAndClearBuffer()}}afterDecideResponse(e){const t=!!e.heatmaps
this.instance.persistence&&this.instance.persistence.register({[de]:t}),this._enabledServerSide=t,this.startIfEnabled()}getAndClearBuffer(){const e=this.buffer
return this.buffer=void 0,e}_setupListeners(){f&&m&&(ie(m,"click",(e=>this._onClick(e||(null==f?void 0:f.event))),!1,!0),ie(m,"mousemove",(e=>this._onMouseMove(e||(null==f?void 0:f.event))),!1,!0),this._initialized=!0)}_getProperties(e,t){const n=this.instance.scrollManager.scrollY(),i=this.instance.scrollManager.scrollX(),r=this.instance.scrollManager.scrollElement(),o=function(e,t,n){let i=e
for(;i&&$n(i)&&!Tn(i,"body");){if(i===n)return!1
if(X(t,null==f?void 0:f.getComputedStyle(i).position))return!0
i=Rn(i)}return!1}(Pn(e),["fixed","sticky"],r)
return{x:e.clientX+(o?0:i),y:e.clientY+(o?0:n),target_fixed:o,type:t}}_onClick(e){var t
if(co(e.target))return
const n=this._getProperties(e,"click")
null!==(t=this.rageclicks)&&void 0!==t&&t.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._capture({...n,type:"rageclick"}),this._capture(n)}_onMouseMove(e){co(e.target)||(clearTimeout(this._mouseMoveTimeout),this._mouseMoveTimeout=setTimeout((()=>{this._capture(this._getProperties(e,"mousemove"))}),500))}_capture(e){if(!f)return
const t=f.location.href
this.buffer=this.buffer||{},this.buffer[t]||(this.buffer[t]=[]),this.buffer[t].push(e)}flush(){this.buffer&&!O(this.buffer)&&this.instance.capture("$$heatmap",{$heatmap_data:this.getAndClearBuffer()})}}class fo{constructor(e){this.instance=e}getContext(){return this.context}resetContext(){const e=this.context
return setTimeout(this._updateScrollData,0),e}_updateScrollData=()=>{var e,t,n,i
this.context||(this.context={})
const r=this.scrollElement(),o=this.scrollY(),s=r?Math.max(0,r.scrollHeight-r.clientHeight):0,a=o+((null==r?void 0:r.clientHeight)||0),l=(null==r?void 0:r.scrollHeight)||0
this.context.lastScrollY=Math.ceil(o),this.context.maxScrollY=Math.max(o,null!==(e=this.context.maxScrollY)&&void 0!==e?e:0),this.context.maxScrollHeight=Math.max(s,null!==(t=this.context.maxScrollHeight)&&void 0!==t?t:0),this.context.lastContentY=a,this.context.maxContentY=Math.max(a,null!==(n=this.context.maxContentY)&&void 0!==n?n:0),this.context.maxContentHeight=Math.max(l,null!==(i=this.context.maxContentHeight)&&void 0!==i?i:0)}
startMeasuringScrollPosition(){null==f||f.addEventListener("scroll",this._updateScrollData,!0),null==f||f.addEventListener("scrollend",this._updateScrollData,!0),null==f||f.addEventListener("resize",this._updateScrollData)}scrollElement(){if(!this.instance.config.scroll_root_selector)return null==f?void 0:f.document.documentElement
{const e=L(this.instance.config.scroll_root_selector)?this.instance.config.scroll_root_selector:[this.instance.config.scroll_root_selector]
for(const t of e){const e=null==f?void 0:f.document.querySelector(t)
if(e)return e}}}scrollY(){if(this.instance.config.scroll_root_selector){const e=this.scrollElement()
return e&&e.scrollTop||0}return f&&(f.scrollY||f.pageYOffset||f.document.documentElement.scrollTop)||0}scrollX(){if(this.instance.config.scroll_root_selector){const e=this.scrollElement()
return e&&e.scrollLeft||0}return f&&(f.scrollX||f.pageXOffset||f.document.documentElement.scrollLeft)||0}}const ho="$copy_autocapture"
function po(e,t){return t.length>e?t.slice(0,e)+"...":t}class go{_initialized=!1
_isDisabledServerSide=null
rageclicks=new lo
_elementsChainAsString=!1
constructor(e){this.instance=e,this._elementSelectors=null}get config(){var e,t
const n=F(this.instance.config.autocapture)?this.instance.config.autocapture:{}
return n.url_allowlist=null===(e=n.url_allowlist)||void 0===e?void 0:e.map((e=>new RegExp(e))),n.url_ignorelist=null===(t=n.url_ignorelist)||void 0===t?void 0:t.map((e=>new RegExp(e))),n}_addDomEventHandlers(){if(!this.isBrowserSupported())return void G.info("Disabling Automatic Event Collection because this browser is not supported")
if(!f||!m)return
const e=e=>{e=e||(null==f?void 0:f.event)
try{this._captureEvent(e)}catch(e){G.error("Failed to capture event",e)}},t=e=>{e=e||(null==f?void 0:f.event),this._captureEvent(e,ho)}
ie(m,"submit",e,!1,!0),ie(m,"change",e,!1,!0),ie(m,"click",e,!1,!0),this.config.capture_copied_text&&(ie(m,"copy",t,!1,!0),ie(m,"cut",t,!1,!0))}startIfEnabled(){this.isEnabled&&!this._initialized&&(this._addDomEventHandlers(),this._initialized=!0)}afterDecideResponse(e){e.elementsChainAsString&&(this._elementsChainAsString=e.elementsChainAsString),this.instance.persistence&&this.instance.persistence.register({[ue]:!!e.autocapture_opt_out}),this._isDisabledServerSide=!!e.autocapture_opt_out,this.startIfEnabled()}setElementSelectors(e){this._elementSelectors=e}getElementSelectors(e){var t
const n=[]
return null===(t=this._elementSelectors)||void 0===t||t.forEach((t=>{const i=null==m?void 0:m.querySelectorAll(t)
null==i||i.forEach((i=>{e===i&&n.push(t)}))})),n}get isEnabled(){var e,t
const n=null===(e=this.instance.persistence)||void 0===e?void 0:e.props[ue],i=this._isDisabledServerSide
if(j(i)&&!H(n)&&!this.instance.config.advanced_disable_decide)return!1
const r=null!==(t=this._isDisabledServerSide)&&void 0!==t?t:!!n
return!!this.instance.config.autocapture&&!r}_previousElementSibling(e){if(e.previousElementSibling)return e.previousElementSibling
let t=e
do{t=t.previousSibling}while(t&&!$n(t))
return t}_getAugmentPropertiesFromElement(e){if(!Fn(e))return{}
const t={}
return J(e.attributes,(function(e){if(e.name&&0===e.name.indexOf("data-ph-capture-attribute")){const n=e.name.replace("data-ph-capture-attribute-",""),i=e.value
n&&i&&Hn(i)&&(t[n]=i)}})),t}_getPropertiesFromElement(e,t,n){var i
const r=e.tagName.toLowerCase(),o={tag_name:r}
Ln.indexOf(r)>-1&&!n&&("a"===r.toLowerCase()||"button"===r.toLowerCase()?o.$el_text=po(1024,qn(e)):o.$el_text=po(1024,xn(e)))
const s=Sn(e)
s.length>0&&(o.classes=s.filter((function(e){return""!==e})))
const a=null===(i=this.config)||void 0===i?void 0:i.element_attribute_ignorelist
J(e.attributes,(function(n){var i
if((!On(e)||-1!==["name","id","class","aria-label"].indexOf(n.name))&&(null==a||!a.includes(n.name))&&!t&&Hn(n.value)&&(i=n.name,!M(i)||"_ngcontent"!==i.substring(0,10)&&"_nghost"!==i.substring(0,7))){let e=n.value
"class"===n.name&&(e=wn(e).join(" ")),o["attr__"+n.name]=po(1024,e)}}))
let l=1,c=1,u=e
for(;u=this._previousElementSibling(u);)l++,u.tagName===e.tagName&&c++
return o.nth_child=l,o.nth_of_type=c,o}_getDefaultProperties(e){return{$event_type:e,$ce_version:1}}_captureEvent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$autocapture"
if(!this.isEnabled)return
let n=Pn(e)
var i
Cn(n)&&(n=n.parentNode||null),"$autocapture"===t&&"click"===e.type&&e instanceof MouseEvent&&this.instance.config.rageclick&&null!==(i=this.rageclicks)&&void 0!==i&&i.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._captureEvent(e,"$rageclick")
const r=t===ho
if(n&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0
if(!f||!e||Tn(e,"html")||!$n(e))return!1
if(null!=n&&n.url_allowlist&&!kn(n.url_allowlist))return!1
if(null!=n&&n.url_ignorelist&&kn(n.url_ignorelist))return!1
if(null!=n&&n.dom_event_allowlist){const e=n.dom_event_allowlist
if(e&&!e.some((e=>t.type===e)))return!1}let o=!1
const s=[e]
let a=!0,l=e
for(;l.parentNode&&!Tn(l,"body");)if(In(l.parentNode))s.push(l.parentNode.host),l=l.parentNode.host
else{if(a=Rn(l),!a)break
if(i||Ln.indexOf(a.tagName.toLowerCase())>-1)o=!0
else{const e=f.getComputedStyle(a)
e&&"pointer"===e.getPropertyValue("cursor")&&(o=!0)}s.push(a),l=a}if(!function(e,t){const n=null==t?void 0:t.element_allowlist
if(A(n))return!0
for(const t of e)if(n.some((e=>t.tagName.toLowerCase()===e)))return!0
return!1}(s,n))return!1
if(!function(e,t){const n=null==t?void 0:t.css_selector_allowlist
if(A(n))return!0
for(const t of e)if(n.some((e=>t.matches(e))))return!0
return!1}(s,n))return!1
const c=f.getComputedStyle(e)
if(c&&"pointer"===c.getPropertyValue("cursor")&&"click"===t.type)return!0
const u=e.tagName.toLowerCase()
switch(u){case"html":return!1
case"form":return(r||["submit"]).indexOf(t.type)>=0
case"input":case"select":case"textarea":return(r||["change","click"]).indexOf(t.type)>=0
default:return o?(r||["click"]).indexOf(t.type)>=0:(r||["click"]).indexOf(t.type)>=0&&(Ln.indexOf(u)>-1||"true"===e.getAttribute("contenteditable"))}}(n,e,this.config,r,r?["copy","cut"]:void 0)){var o,s
const i=[n]
let r=n
for(;r.parentNode&&!Tn(r,"body");)In(r.parentNode)?(i.push(r.parentNode.host),r=r.parentNode.host):(i.push(r.parentNode),r=r.parentNode)
const u=[],d={}
let h,p,g=!1
if(J(i,(e=>{const t=Fn(e)
"a"===e.tagName.toLowerCase()&&(h=e.getAttribute("href"),h=t&&Hn(h)&&h),X(Sn(e),"ph-no-capture")&&(g=!0),u.push(this._getPropertiesFromElement(e,this.instance.config.mask_all_element_attributes,this.instance.config.mask_all_text))
const n=this._getAugmentPropertiesFromElement(e)
K(d,n)})),this.instance.config.mask_all_text||("a"===n.tagName.toLowerCase()||"button"===n.tagName.toLowerCase()?u[0].$el_text=qn(n):u[0].$el_text=xn(n)),h){var a,l
u[0].attr__href=h
const e=null===(a=ht(h))||void 0===a?void 0:a.host,t=null==f||null===(l=f.location)||void 0===l?void 0:l.host
e&&t&&e!==t&&(p=h)}if(g)return!1
const _=K(this._getDefaultProperties(e.type),this._elementsChainAsString?{$elements_chain:Gn(u)}:{$elements:u},null!==(o=u[0])&&void 0!==o&&o.$el_text?{$el_text:null===(s=u[0])||void 0===s?void 0:s.$el_text}:{},p&&"click"===e.type?{$external_click_url:p}:{},d),v=this.getElementSelectors(n)
if(v&&v.length>0&&(_.$element_selectors=v),t===ho){var c
const t=En(null==f||null===(c=f.getSelection())||void 0===c?void 0:c.toString()),n=e.type||"clipboard"
if(!t)return!1
_.$selected_content=t,_.$copy_type=n}return this.instance.capture(t,_),!0}}isBrowserSupported(){return R(null==m?void 0:m.querySelectorAll)}}class _o{_restoreXHRPatch=void 0
_restoreFetchPatch=void 0
constructor(e){this.instance=e}_loadScript(e){var t,n,i
null!==(t=E.__PosthogExtensions__)&&void 0!==t&&t.tracingHeadersPatchFns&&e(),null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"tracing-headers",(t=>{if(t)return G.error("[TRACING-HEADERS] failed to load script",t)
e()}))}startIfEnabledOrStop(){var e,t
this.instance.config.__add_tracing_headers?this._loadScript(this._startCapturing):(null===(e=this._restoreXHRPatch)||void 0===e||e.call(this),null===(t=this._restoreFetchPatch)||void 0===t||t.call(this),this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0)}_startCapturing=()=>{var e,t,n,i
A(this._restoreXHRPatch)&&(null===(e=E.__PosthogExtensions__)||void 0===e||null===(t=e.tracingHeadersPatchFns)||void 0===t||t._patchXHR(this.instance.sessionManager)),A(this._restoreFetchPatch)&&(null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.tracingHeadersPatchFns)||void 0===i||i._patchFetch(this.instance.sessionManager))}}let vo
!function(e){e[e.PENDING=-1]="PENDING",e[e.DENIED=0]="DENIED",e[e.GRANTED=1]="GRANTED"}(vo||(vo={}))
class mo{constructor(e){this.instance=e}get config(){return this.instance.config}get consent(){return this.getDnt()?vo.DENIED:this.storedConsent}isOptedOut(){return this.consent===vo.DENIED||this.consent===vo.PENDING&&this.config.opt_out_capturing_by_default}isOptedIn(){return!this.isOptedOut()}optInOut(e){this.storage.set(this.storageKey,e?1:0,this.config.cookie_expiration,this.config.cross_subdomain_cookie,this.config.secure_cookie)}reset(){this.storage.remove(this.storageKey,this.config.cross_subdomain_cookie)}get storageKey(){const{token:e,opt_out_capturing_cookie_prefix:t}=this.instance.config
return(t||"__ph_opt_in_out_")+e}get storedConsent(){const e=this.storage.get(this.storageKey)
return"1"===e?vo.GRANTED:"0"===e?vo.DENIED:vo.PENDING}get storage(){if(!this._storage){const e=this.config.opt_out_capturing_persistence_type
this._storage="localStorage"===e?ot:it
const t="localStorage"===e?it:ot
t.get(this.storageKey)&&(this._storage.get(this.storageKey)||this.optInOut("1"===t.get(this.storageKey)),t.remove(this.storageKey,this.config.cross_subdomain_cookie))}return this._storage}getDnt(){return!!this.config.respect_dnt&&!!oe([null==v?void 0:v.doNotTrack,null==v?void 0:v.msDoNotTrack,E.doNotTrack],(e=>X([!0,1,"1","yes"],e)))}}const yo="[Exception Autocapture]"
class bo{originalOnUnhandledRejectionHandler=void 0
constructor(e){var t
this.instance=e,this.remoteEnabled=!(null===(t=this.instance.persistence)||void 0===t||!t.props[fe]),this.startIfEnabled()}get isEnabled(){var e
return null!==(e=this.remoteEnabled)&&void 0!==e&&e}get isCapturing(){var e
return!(null==f||null===(e=f.onerror)||void 0===e||!e.__POSTHOG_INSTRUMENTED__)}get hasHandlers(){return this.originalOnUnhandledRejectionHandler||this.unwrapOnError}startIfEnabled(){this.isEnabled&&!this.isCapturing&&(G.info(yo+" enabled, starting..."),this.loadScript(this.startCapturing))}loadScript(e){var t,n
this.hasHandlers&&e(),null===(t=E.__PosthogExtensions__)||void 0===t||null===(n=t.loadExternalDependency)||void 0===n||n.call(t,this.instance,"exception-autocapture",(t=>{if(t)return G.error(yo+" failed to load script",t)
e()}))}startCapturing=()=>{var e,t,n,i
if(!f||!this.isEnabled||this.hasHandlers||this.isCapturing)return
const r=null===(e=E.__PosthogExtensions__)||void 0===e||null===(t=e.errorWrappingFunctions)||void 0===t?void 0:t.wrapOnError,o=null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.errorWrappingFunctions)||void 0===i?void 0:i.wrapUnhandledRejection
if(r&&o)try{this.unwrapOnError=r(this.captureException.bind(this)),this.unwrapUnhandledRejection=o(this.captureException.bind(this))}catch(e){G.error(yo+" failed to start",e),this.stopCapturing()}else G.error(yo+" failed to load error wrapping functions - cannot start")}
stopCapturing(){var e,t
null===(e=this.unwrapOnError)||void 0===e||e.call(this),null===(t=this.unwrapUnhandledRejection)||void 0===t||t.call(this)}afterDecideResponse(e){const t=e.autocaptureExceptions
this.remoteEnabled=!!t||!1,this.instance.persistence&&this.instance.persistence.register({[fe]:this.remoteEnabled}),this.startIfEnabled()}captureException(e){const t=this.instance.requestRouter.endpointFor("ui")
e.$exception_personURL=`${t}/project/${this.instance.config.token}/person/${this.instance.get_distinct_id()}`,this.instance.exceptions.sendExceptionEvent(e)}}const wo=9e5,ko="[Web Vitals]"
class So{_enabledServerSide=!1
_initialized=!1
buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0}
constructor(e){var t
this.instance=e,this._enabledServerSide=!(null===(t=this.instance.persistence)||void 0===t||!t.props[pe]),this.startIfEnabled()}get allowedMetrics(){var e,t
const n=F(this.instance.config.capture_performance)?null===(e=this.instance.config.capture_performance)||void 0===e?void 0:e.web_vitals_allowed_metrics:void 0
return A(n)?(null===(t=this.instance.persistence)||void 0===t?void 0:t.props[ge])||["CLS","FCP","INP","LCP"]:n}get flushToCaptureTimeoutMs(){return(F(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals_delayed_flush_ms:void 0)||5e3}get _maxAllowedValue(){const e=F(this.instance.config.capture_performance)&&B(this.instance.config.capture_performance.__web_vitals_max_value)?this.instance.config.capture_performance.__web_vitals_max_value:wo
return 0<e&&e<=6e4?wo:e}get isEnabled(){const e=F(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals:void 0
return H(e)?e:this._enabledServerSide}startIfEnabled(){this.isEnabled&&!this._initialized&&(G.info(ko+" enabled, starting..."),this.loadScript(this._startCapturing))}afterDecideResponse(e){const t=F(e.capturePerformance)&&!!e.capturePerformance.web_vitals,n=F(e.capturePerformance)?e.capturePerformance.web_vitals_allowed_metrics:void 0
this.instance.persistence&&(this.instance.persistence.register({[pe]:t}),this.instance.persistence.register({[ge]:n})),this._enabledServerSide=t,this.startIfEnabled()}loadScript(e){var t,n,i
null!==(t=E.__PosthogExtensions__)&&void 0!==t&&t.postHogWebVitalsCallbacks&&e(),null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"web-vitals",(t=>{t?G.error(ko+" failed to load script",t):e()}))}_currentURL(){const e=f?f.location.href:void 0
return e||G.error(ko+"Could not determine current URL"),e}_flushToCapture=()=>{clearTimeout(this._delayedFlushTimer),0!==this.buffer.metrics.length&&(this.instance.capture("$web_vitals",this.buffer.metrics.reduce(((e,t)=>({...e,[`$web_vitals_${t.name}_event`]:{...t},[`$web_vitals_${t.name}_value`]:t.value})),{})),this.buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0})}
_addToBuffer=e=>{var t
const n=null===(t=this.instance.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0)
if(A(n))return void G.error(ko+"Could not read session ID. Dropping metrics!")
this.buffer=this.buffer||{url:void 0,metrics:[],firstMetricTimestamp:void 0}
const i=this._currentURL()
A(i)||(D(null==e?void 0:e.name)||D(null==e?void 0:e.value)?G.error(ko+"Invalid metric received",e):this._maxAllowedValue&&e.value>=this._maxAllowedValue?G.error(ko+"Ignoring metric with value >= "+this._maxAllowedValue,e):(this.buffer.url!==i&&(this._flushToCapture(),this._delayedFlushTimer=setTimeout(this._flushToCapture,this.flushToCaptureTimeoutMs)),A(this.buffer.url)&&(this.buffer.url=i),this.buffer.firstMetricTimestamp=A(this.buffer.firstMetricTimestamp)?Date.now():this.buffer.firstMetricTimestamp,e.attribution&&e.attribution.interactionTargetElement&&(e.attribution.interactionTargetElement=void 0),this.buffer.metrics.push({...e,$current_url:i,$session_id:n.sessionId,$window_id:n.windowId,timestamp:Date.now()}),this.buffer.metrics.length===this.allowedMetrics.length&&this._flushToCapture()))}
_startCapturing=()=>{let e,t,n,i
const r=E.__PosthogExtensions__
A(r)||A(r.postHogWebVitalsCallbacks)||({onLCP:e,onCLS:t,onFCP:n,onINP:i}=r.postHogWebVitalsCallbacks),e&&t&&n&&i?(this.allowedMetrics.indexOf("LCP")>-1&&e(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("CLS")>-1&&t(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("FCP")>-1&&n(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("INP")>-1&&i(this._addToBuffer.bind(this)),this._initialized=!0):G.error(ko+"web vitals callbacks not loaded - not starting")}}const Eo={icontains:(e,t)=>!!f&&t.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:(e,t)=>!!f&&-1===t.href.toLowerCase().indexOf(e.toLowerCase()),regex:(e,t)=>!!f&&pt(t.href,e),not_regex:(e,t)=>!!f&&!pt(t.href,e),exact:(e,t)=>t.href===e,is_not:(e,t)=>t.href!==e}
class xo{constructor(e){this.instance=e
this.instance.onFeatureFlags&&this.instance.onFeatureFlags((e=>{this.applyFeatureFlagChanges(e)})),this._flagToExperiments=new Map}applyFeatureFlagChanges(e){D(this._flagToExperiments)||this.instance.config.disable_web_experiments||(xo.logInfo("applying feature flags",e),e.forEach((e=>{var t
if(this._flagToExperiments&&null!==(t=this._flagToExperiments)&&void 0!==t&&t.has(e)){var n
const t=this.instance.getFeatureFlag(e),i=null===(n=this._flagToExperiments)||void 0===n?void 0:n.get(e)
t&&null!=i&&i.variants[t]&&this.applyTransforms(i.name,t,i.variants[t].transforms)}})))}afterDecideResponse(e){this._is_bot()?xo.logInfo("Refusing to render web experiment since the viewer is a likely bot"):(this._featureFlags=e.featureFlags,this.loadIfEnabled(),this.previewWebExperiment())}previewWebExperiment(){const e=xo.getWindowLocation()
if(null!=e&&e.search){const t=gt(null==e?void 0:e.search,"__experiment_id"),n=gt(null==e?void 0:e.search,"__experiment_variant")
t&&n&&(xo.logInfo(`previewing web experiments ${t} && ${n}`),this.getWebExperiments((e=>{this.showPreviewWebExperiment(parseInt(t),n,e)}),!1,!0))}}loadIfEnabled(){this.instance.config.disable_web_experiments||this.getWebExperimentsAndEvaluateDisplayLogic()}getWebExperimentsAndEvaluateDisplayLogic=(()=>{var e=this
return function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
e.getWebExperiments((t=>{xo.logInfo("retrieved web experiments from the server"),e._flagToExperiments=new Map,t.forEach((t=>{if(t.feature_flag_key&&e._featureFlags&&e._featureFlags[t.feature_flag_key]){var n
e._flagToExperiments&&(xo.logInfo("setting flag key ",t.feature_flag_key," to web experiment ",t),null===(n=e._flagToExperiments)||void 0===n||n.set(t.feature_flag_key,t))
const i=e._featureFlags[t.feature_flag_key]
i&&t.variants[i]&&e.applyTransforms(t.name,i,t.variants[i].transforms)}else if(t.variants)for(const n in t.variants){const i=t.variants[n]
xo.matchesTestVariant(i)&&e.applyTransforms(t.name,n,i.transforms)}}))}),t)}})()
getWebExperiments(e,t,n){if(this.instance.config.disable_web_experiments&&!n)return e([])
const i=this.instance.get_property("$web_experiments")
if(i&&!t)return e(i)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api",`/api/web_experiments/?token=${this.instance.config.token}`),method:"GET",transport:"XHR",callback:t=>{if(200!==t.statusCode||!t.json)return e([])
const n=t.json.experiments||[]
return e(n)}})}showPreviewWebExperiment(e,t,n){const i=n.filter((t=>t.id===e))
i&&i.length>0&&(xo.logInfo(`Previewing web experiment [${i[0].name}] with variant [${t}]`),this.applyTransforms(i[0].name,t,i[0].variants[t].transforms,!0))}static matchesTestVariant(e){return!D(e.conditions)&&xo.matchUrlConditions(e)&&xo.matchUTMConditions(e)}static matchUrlConditions(e){var t
if(D(e.conditions)||D(null===(t=e.conditions)||void 0===t?void 0:t.url))return!0
const n=xo.getWindowLocation()
var i,r,o
return!!n&&(null===(i=e.conditions)||void 0===i||!i.url||Eo[null!==(r=null===(o=e.conditions)||void 0===o?void 0:o.urlMatchType)&&void 0!==r?r:"icontains"](e.conditions.url,n))}static getWindowLocation(){return null==f?void 0:f.location}static matchUTMConditions(e){var t
if(D(e.conditions)||D(null===(t=e.conditions)||void 0===t?void 0:t.utm))return!0
const n=pn.campaignParams()
if(n.utm_source){var i,r,o,s,a,l,c,u,d,f,h,p,g,_,v,m
const t=null===(i=e.conditions)||void 0===i||null===(r=i.utm)||void 0===r||!r.utm_campaign||(null===(o=e.conditions)||void 0===o||null===(s=o.utm)||void 0===s?void 0:s.utm_campaign)==n.utm_campaign,y=null===(a=e.conditions)||void 0===a||null===(l=a.utm)||void 0===l||!l.utm_source||(null===(c=e.conditions)||void 0===c||null===(u=c.utm)||void 0===u?void 0:u.utm_source)==n.utm_source,b=null===(d=e.conditions)||void 0===d||null===(f=d.utm)||void 0===f||!f.utm_medium||(null===(h=e.conditions)||void 0===h||null===(p=h.utm)||void 0===p?void 0:p.utm_medium)==n.utm_medium,w=null===(g=e.conditions)||void 0===g||null===(_=g.utm)||void 0===_||!_.utm_term||(null===(v=e.conditions)||void 0===v||null===(m=v.utm)||void 0===m?void 0:m.utm_term)==n.utm_term
return t&&b&&w&&y}return!1}static logInfo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
G.info(`[WebExperiments] ${e}`,n)}applyTransforms(e,t,n,i){var r
this._is_bot()?xo.logInfo("Refusing to render web experiment since the viewer is a likely bot"):"control"!==t?n.forEach((n=>{if(n.selector){var r
xo.logInfo(`applying transform of variant ${t} for experiment ${e} `,n)
let s=0
const a=null===(r=document)||void 0===r?void 0:r.querySelectorAll(n.selector)
var o
null==a||a.forEach((e=>{const t=e
s+=1,n.attributes&&n.attributes.forEach((e=>{switch(e.name){case"text":t.innerText=e.value
break
case"html":t.innerHTML=e.value
break
case"cssClass":t.className=e.value
break
default:t.setAttribute(e.name,e.value)}})),n.text&&(t.innerText=n.text),n.html&&(t.parentElement?t.parentElement.innerHTML=n.html:t.innerHTML=n.html),n.css&&t.setAttribute("style",n.css)})),this.instance&&this.instance.capture&&this.instance.capture("$web_experiment_applied",{$web_experiment_name:e,$web_experiment_variant:t,$web_experiment_preview:i,$web_experiment_document_url:null===(o=xo.getWindowLocation())||void 0===o?void 0:o.href,$web_experiment_elements_modified:s})}})):(xo.logInfo("Control variants leave the page unmodified."),this.instance&&this.instance.capture&&this.instance.capture("$web_experiment_applied",{$web_experiment_name:e,$web_experiment_preview:i,$web_experiment_variant:t,$web_experiment_document_url:null===(r=xo.getWindowLocation())||void 0===r?void 0:r.href,$web_experiment_elements_modified:0}))}_is_bot(){return v&&this.instance?ao(v,this.instance.config.custom_blocked_useragents):void 0}}class Po{constructor(e){var t
this.instance=e,this._endpointSuffix=(null===(t=this.instance.persistence)||void 0===t?void 0:t.props[he])||"/e/"}get endpoint(){return this.instance.requestRouter.endpointFor("api",this._endpointSuffix)}afterDecideResponse(e){const t=e.autocaptureExceptions
this._endpointSuffix=F(t)&&t.endpoint||"/e/",this.instance.persistence&&this.instance.persistence.register({[he]:this._endpointSuffix})}sendExceptionEvent(e){this.instance.capture("$exception",e,{_noTruncate:!0,_batchKey:"exceptionEvent",_url:this.endpoint})}}const $o={},To=()=>{},Co="posthog"
let Io=!er&&-1===(null==S?void 0:S.indexOf("MSIE"))&&-1===(null==S?void 0:S.indexOf("Mozilla"))
const Lo=()=>{var e
return{api_host:"https://us.i.posthog.com",ui_host:null,token:"",autocapture:!0,rageclick:!0,cross_subdomain_cookie:re(null==m?void 0:m.location),persistence:"localStorage+cookie",persistence_name:"",loaded:To,store_google:!0,custom_campaign_params:[],custom_blocked_useragents:[],save_referrer:!0,capture_pageview:!0,capture_pageleave:"if_capture_pageview",debug:y&&M(null==y?void 0:y.search)&&-1!==y.search.indexOf("__posthog_debug=true")||!1,verbose:!1,cookie_expiration:365,upgrade:!1,disable_session_recording:!1,disable_persistence:!1,disable_web_experiments:!0,disable_surveys:!1,enable_recording_console_log:void 0,secure_cookie:"https:"===(null==f||null===(e=f.location)||void 0===e?void 0:e.protocol),ip:!0,opt_out_capturing_by_default:!1,opt_out_persistence_by_default:!1,opt_out_useragent_filter:!1,opt_out_capturing_persistence_type:"localStorage",opt_out_capturing_cookie_prefix:null,opt_in_site_apps:!1,property_denylist:[],respect_dnt:!1,sanitize_properties:null,request_headers:{},inapp_protocol:"//",inapp_link_new_window:!1,request_batching:!0,properties_string_max_length:65535,session_recording:{},mask_all_element_attributes:!1,mask_all_text:!1,advanced_disable_decide:!1,advanced_disable_feature_flags:!1,advanced_disable_feature_flags_on_first_load:!1,advanced_disable_toolbar_metrics:!1,feature_flag_request_timeout_ms:3e3,on_request_error:e=>{const t="Bad HTTP status: "+e.statusCode+" "+e.text
G.error(t)},get_device_id:e=>e,_onCapture:To,capture_performance:void 0,name:"posthog",bootstrap:{},disable_compression:!1,session_idle_timeout_seconds:1800,person_profiles:"identified_only",__add_tracing_headers:!1}},Ro=e=>{const t={}
A(e.process_person)||(t.person_profiles=e.process_person),A(e.xhr_headers)||(t.request_headers=e.xhr_headers),A(e.cookie_name)||(t.persistence_name=e.cookie_name),A(e.disable_cookie)||(t.disable_persistence=e.disable_cookie)
const n=K({},t,e)
return L(e.property_blacklist)&&(A(e.property_denylist)?n.property_denylist=e.property_blacklist:L(e.property_denylist)?n.property_denylist=[...e.property_blacklist,...e.property_denylist]:G.error("Invalid value for property_denylist config: "+e.property_denylist)),n}
class Fo{get _forceAllowLocalhost(){return this.__forceAllowLocalhost}set _forceAllowLocalhost(e){G.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),this.__forceAllowLocalhost=e}__forceAllowLocalhost=!1}class Oo{webPerformance=new Fo
version=x.LIB_VERSION
_internalEventEmitter=new vr
constructor(){this.config=Lo(),this.decideEndpointWasHit=!1,this.SentryIntegration=fr,this.sentryIntegration=e=>function(e,t){const n=dr(e,t)
return{name:ur,processEvent:e=>n(e)}}(this,e),this.__request_queue=[],this.__loaded=!1,this.analyticsDefaultEndpoint="/e/",this._initialPageviewCaptured=!1,this._initialPersonProfilesConfig=null,this.featureFlags=new ze(this),this.toolbar=new Yi(this),this.scrollManager=new fo(this),this.pageViewManager=new hr(this),this.surveys=new to(this),this.experiments=new xo(this),this.exceptions=new Po(this),this.rateLimiter=new no(this),this.requestRouter=new cr(this),this.consent=new mo(this),this.people={set:(e,t,n)=>{const i=M(e)?{[e]:t}:e
this.setPersonProperties(i),null==n||n({})},set_once:(e,t,n)=>{const i=M(e)?{[e]:t}:e
this.setPersonProperties(void 0,i),null==n||n({})}},this.on("eventCaptured",(e=>G.info(`send "${null==e?void 0:e.event}"`,e)))}init(e,t,n){if(n&&n!==Co){var i
const r=null!==(i=$o[n])&&void 0!==i?i:new Oo
return r._init(e,t,n),$o[n]=r,$o[Co][n]=r,r}return this._init(e,t,n)}_init(e){var t,n
let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0
if(A(e)||N(e))return G.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),this
if(this.__loaded)return G.warn("You have already initialized PostHog! Re-initializing is a no-op"),this
this.__loaded=!0,this.config={},this._triggered_notifs=[],i.person_profiles&&(this._initialPersonProfilesConfig=i.person_profiles),this.set_config(K({},Lo(),Ro(i),{name:r,token:e})),this.config.on_xhr_error&&G.error("[posthog] on_xhr_error is deprecated. Use on_request_error instead"),this.compression=i.disable_compression?void 0:se.GZipJS,this.persistence=new _n(this.config),this.sessionPersistence="sessionStorage"===this.config.persistence?this.persistence:new _n({...this.config,persistence:"sessionStorage"})
const o={...this.persistence.props},s={...this.sessionPersistence.props}
if(this._requestQueue=new Zi((e=>this._send_retriable_request(e))),this._retryQueue=new or(this),this.__request_queue=[],this.sessionManager=new sr(this.config,this.persistence),this.sessionPropsManager=new ro(this.sessionManager,this.persistence),new _o(this).startIfEnabledOrStop(),this.sessionRecording=new Vi(this),this.sessionRecording.startIfEnabledOrStop(),this.config.disable_scroll_properties||this.scrollManager.startMeasuringScrollPosition(),this.autocapture=new go(this),this.autocapture.startIfEnabled(),this.surveys.loadIfEnabled(),this.heatmaps=new uo(this),this.heatmaps.startIfEnabled(),this.webVitalsAutocapture=new So(this),this.exceptionObserver=new bo(this),this.exceptionObserver.startIfEnabled(),x.DEBUG=x.DEBUG||this.config.debug,x.DEBUG&&G.info("Starting in debug mode",{this:this,config:i,thisC:{...this.config},p:o,s:s}),this._sync_opt_out_with_persistence(),void 0!==(null===(t=i.bootstrap)||void 0===t?void 0:t.distinctID)){var a,l
const e=this.config.get_device_id(Ze()),t=null!==(a=i.bootstrap)&&void 0!==a&&a.isIdentifiedID?e:i.bootstrap.distinctID
this.persistence.set_property(Fe,null!==(l=i.bootstrap)&&void 0!==l&&l.isIdentifiedID?"identified":"anonymous"),this.register({distinct_id:i.bootstrap.distinctID,$device_id:t})}if(this._hasBootstrappedFeatureFlags()){var c,u
const e=Object.keys((null===(c=i.bootstrap)||void 0===c?void 0:c.featureFlags)||{}).filter((e=>{var t,n
return!(null===(t=i.bootstrap)||void 0===t||null===(n=t.featureFlags)||void 0===n||!n[e])})).reduce(((e,t)=>{var n,r
return e[t]=(null===(n=i.bootstrap)||void 0===n||null===(r=n.featureFlags)||void 0===r?void 0:r[t])||!1,e}),{}),t=Object.keys((null===(u=i.bootstrap)||void 0===u?void 0:u.featureFlagPayloads)||{}).filter((t=>e[t])).reduce(((e,t)=>{var n,r,o,s
return null!==(n=i.bootstrap)&&void 0!==n&&null!==(r=n.featureFlagPayloads)&&void 0!==r&&r[t]&&(e[t]=null===(o=i.bootstrap)||void 0===o||null===(s=o.featureFlagPayloads)||void 0===s?void 0:s[t]),e}),{})
this.featureFlags.receivedFeatureFlags({featureFlags:e,featureFlagPayloads:t})}if(!this.get_distinct_id()){const e=this.config.get_device_id(Ze())
this.register_once({distinct_id:e,$device_id:e},""),this.persistence.set_property(Fe,"anonymous")}return null==f||null===(n=f.addEventListener)||void 0===n||n.call(f,"onpagehide"in self?"pagehide":"unload",this._handle_unload.bind(this)),this.toolbar.maybeLoadToolbar(),i.segment?function(e,t){const n=e.config.segment
if(!n)return t()
!function(e,t){const n=e.config.segment
if(!n)return t()
const i=n=>{const i=()=>n.anonymousId()||Ze()
e.config.get_device_id=i,n.id()&&(e.register({distinct_id:n.id(),$device_id:i()}),e.persistence.set_property(Fe,"identified")),t()},r=n.user()
"then"in r&&R(r.then)?r.then((e=>i(e))):i(r)}(e,(()=>{n.register((e=>{Promise&&Promise.resolve||G.warn("This browser does not have Promise support, and can not use the segment integration")
const t=(t,n)=>{var i
if(!n)return t
t.event.userId||t.event.anonymousId===e.get_distinct_id()||(G.info("Segment integration does not have a userId set, resetting PostHog"),e.reset()),t.event.userId&&t.event.userId!==e.get_distinct_id()&&(G.info("Segment integration has a userId set, identifying with PostHog"),e.identify(t.event.userId))
const r=e._calculate_event_properties(n,null!==(i=t.event.properties)&&void 0!==i?i:{},new Date)
return t.event.properties=Object.assign({},r,t.event.properties),t}
return{name:"PostHog JS",type:"enrichment",version:"1.0.0",isLoaded:()=>!0,load:()=>Promise.resolve(),track:e=>t(e,e.event.event),page:e=>t(e,"$pageview"),identify:e=>t(e,"$identify"),screen:e=>t(e,"$screen")}})(e)).then((()=>{t()}))}))}(this,(()=>this._loaded())):this._loaded(),R(this.config._onCapture)&&this.on("eventCaptured",(e=>this.config._onCapture(e.event,e))),this}_afterDecideResponse(e){var t,n,i,r,o,s,a,l,c
this.compression=void 0,e.supportedCompression&&!this.config.disable_compression&&(this.compression=X(e.supportedCompression,se.GZipJS)?se.GZipJS:X(e.supportedCompression,se.Base64)?se.Base64:void 0),null!==(t=e.analytics)&&void 0!==t&&t.endpoint&&(this.analyticsDefaultEndpoint=e.analytics.endpoint),this.set_config({person_profiles:this._initialPersonProfilesConfig?this._initialPersonProfilesConfig:e.defaultIdentifiedOnly?"identified_only":"always"}),null===(n=this.sessionRecording)||void 0===n||n.afterDecideResponse(e),null===(i=this.autocapture)||void 0===i||i.afterDecideResponse(e),null===(r=this.heatmaps)||void 0===r||r.afterDecideResponse(e),null===(o=this.experiments)||void 0===o||o.afterDecideResponse(e),null===(s=this.surveys)||void 0===s||s.afterDecideResponse(e),null===(a=this.webVitalsAutocapture)||void 0===a||a.afterDecideResponse(e),null===(l=this.exceptions)||void 0===l||l.afterDecideResponse(e),null===(c=this.exceptionObserver)||void 0===c||c.afterDecideResponse(e)}_loaded(){const e=this.config.advanced_disable_decide
e||this.featureFlags.setReloadingPaused(!0)
try{this.config.loaded(this)}catch(e){G.critical("`loaded` function failed",e)}this._start_queue_if_opted_in(),this.config.capture_pageview&&setTimeout((()=>{this.consent.isOptedIn()&&this._captureInitialPageview()}),1),e||(new Qi(this).call(),this.featureFlags.resetRequestQueue())}_start_queue_if_opted_in(){var e
this.has_opted_out_capturing()||this.config.request_batching&&(null===(e=this._requestQueue)||void 0===e||e.enable())}_dom_loaded(){this.has_opted_out_capturing()||Q(this.__request_queue,(e=>this._send_retriable_request(e))),this.__request_queue=[],this._start_queue_if_opted_in()}_handle_unload(){var e,t
this.config.request_batching?(this._shouldCapturePageleave()&&this.capture("$pageleave"),null===(e=this._requestQueue)||void 0===e||e.unload(),null===(t=this._retryQueue)||void 0===t||t.unload()):this._shouldCapturePageleave()&&this.capture("$pageleave",null,{transport:"sendBeacon"})}_send_request(e){this.__loaded&&(Io?this.__request_queue.push(e):this.rateLimiter.isServerRateLimited(e.batchKey)||(e.transport=e.transport||this.config.api_transport,e.url=nr(e.url,{ip:this.config.ip?1:0}),e.headers={...this.config.request_headers},e.compression="best-available"===e.compression?this.compression:e.compression,(e=>{var t,n,i
const r={...e}
r.timeout=r.timeout||6e4,r.url=nr(r.url,{_:(new Date).getTime().toString(),ver:x.LIB_VERSION,compression:r.compression})
const o=null!==(t=r.transport)&&void 0!==t?t:"XHR",s=null!==(n=null===(i=oe(rr,(e=>e.transport===o)))||void 0===i?void 0:i.method)&&void 0!==n?n:rr[0].method
if(!s)throw new Error("No available transport method")
s(r)})({...e,callback:t=>{var n,i,r
this.rateLimiter.checkForLimiting(t),t.statusCode>=400&&(null===(i=(r=this.config).on_request_error)||void 0===i||i.call(r,t)),null===(n=e.callback)||void 0===n||n.call(e,t)}})))}_send_retriable_request(e){this._retryQueue?this._retryQueue.retriableRequest(e):this._send_request(e)}_execute_array(e){let t
const n=[],i=[],r=[]
Q(e,(e=>{e&&(t=e[0],L(t)?r.push(e):R(e)?e.call(this):L(e)&&"alias"===t?n.push(e):L(e)&&-1!==t.indexOf("capture")&&R(this[t])?r.push(e):i.push(e))}))
const o=function(e,t){Q(e,(function(e){if(L(e[0])){let n=t
J(e,(function(e){n=n[e[0]].apply(n,e.slice(1))}))}else this[e[0]].apply(this,e.slice(1))}),t)}
o(n,this),o(i,this),o(r,this)}_hasBootstrappedFeatureFlags(){var e,t
return(null===(e=this.config.bootstrap)||void 0===e?void 0:e.featureFlags)&&Object.keys(null===(t=this.config.bootstrap)||void 0===t?void 0:t.featureFlags).length>0||!1}push(e){this._execute_array([e])}capture(e,t,n){var i
if(!(this.__loaded&&this.persistence&&this.sessionPersistence&&this._requestQueue))return void G.uninitializedWarning("posthog.capture")
if(this.consent.isOptedOut())return
if(A(e)||!M(e))return void G.error("No event name provided to posthog.capture")
if(!this.config.opt_out_useragent_filter&&this._is_bot())return
const r=null!=n&&n.skip_client_rate_limiting?void 0:this.rateLimiter.clientRateLimitContext()
if(null!=r&&r.isRateLimited)return void G.critical("This capture call is ignored due to client rate limiting.")
this.sessionPersistence.update_search_keyword(),this.config.store_google&&this.sessionPersistence.update_campaign_params(),this.config.save_referrer&&this.sessionPersistence.update_referrer_info(),(this.config.store_google||this.config.save_referrer)&&this.persistence.set_initial_person_info()
const o=new Date,s=(null==n?void 0:n.timestamp)||o
let a={uuid:Ze(),event:e,properties:this._calculate_event_properties(e,t||{},s)}
r&&(a.properties.$lib_rate_limit_remaining_tokens=r.remainingTokens),(null==n?void 0:n.$set)&&(a.$set=null==n?void 0:n.$set)
const l=this._calculate_set_once_properties(null==n?void 0:n.$set_once)
l&&(a.$set_once=l),a=function(e,t){return function(e,t){const n=new Set
return function e(i,r){if(i!==Object(i))return t?t(i):i
if(n.has(i))return
let o
return n.add(i),L(i)?(o=[],Q(i,(t=>{o.push(e(t))}))):(o={},J(i,((t,i)=>{n.has(t)||(o[i]=e(t,i))}))),o}(e)}(e,(e=>M(e)&&!j(t)?e.slice(0,t):e))}(a,null!=n&&n._noTruncate?null:this.config.properties_string_max_length),a.timestamp=s,A(null==n?void 0:n.timestamp)||(a.properties.$event_time_override_provided=!0,a.properties.$event_time_override_system_time=o)
const c={...a.properties.$set,...a.$set}
O(c)||this.setPersonPropertiesForFlags(c),this._internalEventEmitter.emit("eventCaptured",a)
const u={method:"POST",url:null!==(i=null==n?void 0:n._url)&&void 0!==i?i:this.requestRouter.endpointFor("api",this.analyticsDefaultEndpoint),data:a,compression:"best-available",batchKey:null==n?void 0:n._batchKey}
return!this.config.request_batching||n&&(null==n||!n._batchKey)||null!=n&&n.send_instantly?this._send_retriable_request(u):this._requestQueue.enqueue(u),a}_addCaptureHook(e){return this.on("eventCaptured",(t=>e(t.event,t)))}_calculate_event_properties(e,t,n){if(n=n||new Date,!this.persistence||!this.sessionPersistence)return t
const i=this.persistence.remove_event_timer(e)
let r={...t}
if(r.token=this.config.token,"$snapshot"===e){const e={...this.persistence.properties(),...this.sessionPersistence.properties()}
return r.distinct_id=e.distinct_id,(!M(r.distinct_id)&&!B(r.distinct_id)||N(r.distinct_id))&&G.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),r}const o=pn.properties()
if(this.sessionManager){const{sessionId:e,windowId:t}=this.sessionManager.checkAndGetSessionAndWindowId()
r.$session_id=e,r.$window_id=t}if(this.requestRouter.region===ar.CUSTOM&&(r.$lib_custom_api_host=this.config.api_host),this.sessionPropsManager&&this.config.__preview_send_client_session_params&&("$pageview"===e||"$pageleave"===e||"$autocapture"===e)){const e=this.sessionPropsManager.getSessionProps()
r=K(r,e)}if(!this.config.disable_scroll_properties){let t={}
"$pageview"===e?t=this.pageViewManager.doPageView(n):"$pageleave"===e&&(t=this.pageViewManager.doPageLeave(n)),r=K(r,t)}if("$pageview"===e&&m&&(r.title=m.title),!A(i)){const e=n.getTime()-i
r.$duration=parseFloat((e/1e3).toFixed(3))}S&&this.config.opt_out_useragent_filter&&(r.$browser_type=this._is_bot()?"bot":"browser"),r=K({},o,this.persistence.properties(),this.sessionPersistence.properties(),r),r.$is_identified=this._isIdentified(),L(this.config.property_denylist)?J(this.config.property_denylist,(function(e){delete r[e]})):G.error("Invalid value for property_denylist config: "+this.config.property_denylist+" or property_blacklist config: "+this.config.property_blacklist)
const s=this.config.sanitize_properties
s&&(r=s(r,e))
const a=this._hasPersonProcessing()
return r.$process_person_profile=a,a&&this._requirePersonProcessing("_calculate_event_properties"),r}_calculate_set_once_properties(e){if(!this.persistence||!this._hasPersonProcessing())return e
let t=K({},this.persistence.get_initial_props(),e||{})
const n=this.config.sanitize_properties
return n&&(t=n(t,"$set_once")),O(t)?void 0:t}register(e,t){var n
null===(n=this.persistence)||void 0===n||n.register(e,t)}register_once(e,t,n){var i
null===(i=this.persistence)||void 0===i||i.register_once(e,t,n)}register_for_session(e){var t
null===(t=this.sessionPersistence)||void 0===t||t.register(e)}unregister(e){var t
null===(t=this.persistence)||void 0===t||t.unregister(e)}unregister_for_session(e){var t
null===(t=this.sessionPersistence)||void 0===t||t.unregister(e)}_register_single(e,t){this.register({[e]:t})}getFeatureFlag(e,t){return this.featureFlags.getFeatureFlag(e,t)}getFeatureFlagPayload(e){const t=this.featureFlags.getFeatureFlagPayload(e)
try{return JSON.parse(t)}catch{return t}}isFeatureEnabled(e,t){return this.featureFlags.isFeatureEnabled(e,t)}reloadFeatureFlags(){this.featureFlags.reloadFeatureFlags()}updateEarlyAccessFeatureEnrollment(e,t){this.featureFlags.updateEarlyAccessFeatureEnrollment(e,t)}getEarlyAccessFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return this.featureFlags.getEarlyAccessFeatures(e,t)}on(e,t){return this._internalEventEmitter.on(e,t)}onFeatureFlags(e){return this.featureFlags.onFeatureFlags(e)}onSessionId(e){var t,n
return null!==(t=null===(n=this.sessionManager)||void 0===n?void 0:n.onSessionId(e))&&void 0!==t?t:()=>{}}getSurveys(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.surveys.getSurveys(e,t)}getActiveMatchingSurveys(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.surveys.getActiveMatchingSurveys(e,t)}renderSurvey(e,t){this.surveys.renderSurvey(e,t)}canRenderSurvey(e){this.surveys.canRenderSurvey(e)}getNextSurveyStep(e,t,n){return this.surveys.getNextSurveyStep(e,t,n)}identify(e,t,n){if(!this.__loaded||!this.persistence)return G.uninitializedWarning("posthog.identify")
if(B(e)&&(e=e.toString(),G.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")),!e)return void G.error("Unique user id has not been set in posthog.identify")
if(["distinct_id","distinctid"].includes(e.toLowerCase()))return void G.critical(`The string "${e}" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`)
if(!this._requirePersonProcessing("posthog.identify"))return
const i=this.get_distinct_id()
if(this.register({$user_id:e}),!this.get_property("$device_id")){const e=i
this.register_once({$had_persisted_distinct_id:!0,$device_id:e},"")}e!==i&&e!==this.get_property(le)&&(this.unregister(le),this.register({distinct_id:e}))
const r="anonymous"===(this.persistence.get_property(Fe)||"anonymous")
e!==i&&r?(this.persistence.set_property(Fe,"identified"),this.setPersonPropertiesForFlags(t||{},!1),this.capture("$identify",{distinct_id:e,$anon_distinct_id:i},{$set:t||{},$set_once:n||{}}),this.featureFlags.setAnonymousDistinctId(i)):(t||n)&&this.setPersonProperties(t,n),e!==i&&(this.reloadFeatureFlags(),this.unregister(Re))}setPersonProperties(e,t){(e||t)&&this._requirePersonProcessing("posthog.setPersonProperties")&&(this.setPersonPropertiesForFlags(e||{}),this.capture("$set",{$set:e||{},$set_once:t||{}}))}group(e,t,n){if(!e||!t)return void G.error("posthog.group requires a group type and group key")
if(!this._requirePersonProcessing("posthog.group"))return
const i=this.getGroups()
i[e]!==t&&this.resetGroupPropertiesForFlags(e),this.register({$groups:{...i,[e]:t}}),n&&(this.capture("$groupidentify",{$group_type:e,$group_key:t,$group_set:n}),this.setGroupPropertiesForFlags({[e]:n})),i[e]===t||n||this.reloadFeatureFlags()}resetGroups(){this.register({$groups:{}}),this.resetGroupPropertiesForFlags(),this.reloadFeatureFlags()}setPersonPropertiesForFlags(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this._requirePersonProcessing("posthog.setPersonPropertiesForFlags")&&this.featureFlags.setPersonPropertiesForFlags(e,t)}resetPersonPropertiesForFlags(){this.featureFlags.resetPersonPropertiesForFlags()}setGroupPropertiesForFlags(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this._requirePersonProcessing("posthog.setGroupPropertiesForFlags")&&this.featureFlags.setGroupPropertiesForFlags(e,t)}resetGroupPropertiesForFlags(e){this.featureFlags.resetGroupPropertiesForFlags(e)}reset(e){var t,n,i,r,o
if(G.info("reset"),!this.__loaded)return G.uninitializedWarning("posthog.reset")
const s=this.get_property("$device_id")
this.consent.reset(),null===(t=this.persistence)||void 0===t||t.clear(),null===(n=this.sessionPersistence)||void 0===n||n.clear(),null===(i=this.surveys)||void 0===i||i.reset(),null===(r=this.persistence)||void 0===r||r.set_property(Fe,"anonymous"),null===(o=this.sessionManager)||void 0===o||o.resetSessionId()
const a=this.config.get_device_id(Ze())
this.register_once({distinct_id:a,$device_id:e?a:s},"")}get_distinct_id(){return this.get_property("distinct_id")}getGroups(){return this.get_property("$groups")||{}}get_session_id(){var e,t
return null!==(e=null===(t=this.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0).sessionId)&&void 0!==e?e:""}get_session_replay_url(e){if(!this.sessionManager)return""
const{sessionId:t,sessionStartTimestamp:n}=this.sessionManager.checkAndGetSessionAndWindowId(!0)
let i=this.requestRouter.endpointFor("ui",`/project/${this.config.token}/replay/${t}`)
if(null!=e&&e.withTimestamp&&n){var r
const t=null!==(r=e.timestampLookBack)&&void 0!==r?r:10
if(!n)return i
i+=`?t=${Math.max(Math.floor(((new Date).getTime()-n)/1e3)-t,0)}`}return i}alias(e,t){return e===this.get_property(ae)?(G.critical("Attempting to create alias for existing People user - aborting."),-2):this._requirePersonProcessing("posthog.alias")?(A(t)&&(t=this.get_distinct_id()),e!==t?(this._register_single(le,e),this.capture("$create_alias",{alias:e,distinct_id:t})):(G.warn("alias matches current distinct_id - skipping api call."),this.identify(e),-1)):void 0}set_config(e){const t={...this.config}
var n,i,r,o
F(e)&&(K(this.config,Ro(e)),null===(n=this.persistence)||void 0===n||n.update_config(this.config,t),this.sessionPersistence="sessionStorage"===this.config.persistence?this.persistence:new _n({...this.config,persistence:"sessionStorage"}),ot.is_supported()&&"true"===ot.get("ph_debug")&&(this.config.debug=!0),this.config.debug&&(x.DEBUG=!0,G.info("set_config",{config:e,oldConfig:t,newConfig:{...this.config}})),null===(i=this.sessionRecording)||void 0===i||i.startIfEnabledOrStop(),null===(r=this.autocapture)||void 0===r||r.startIfEnabled(),null===(o=this.heatmaps)||void 0===o||o.startIfEnabled(),this.surveys.loadIfEnabled(),this._sync_opt_out_with_persistence())}startSessionRecording(e){const t=H(e)&&e
if(t||null!=e&&e.sampling||null!=e&&e.linked_flag){var n
const o=null===(n=this.sessionManager)||void 0===n?void 0:n.checkAndGetSessionAndWindowId()
var i,r;(t||null!=e&&e.sampling)&&(null===(i=this.sessionRecording)||void 0===i||i.overrideSampling(),G.info("Session recording started with sampling override for session: ",null==o?void 0:o.sessionId)),(t||null!=e&&e.linked_flag)&&(null===(r=this.sessionRecording)||void 0===r||r.overrideLinkedFlag(),G.info("Session recording started with linked_flags override"))}this.set_config({disable_session_recording:!1})}stopSessionRecording(){this.set_config({disable_session_recording:!0})}sessionRecordingStarted(){var e
return!(null===(e=this.sessionRecording)||void 0===e||!e.started)}captureException(e,t){var n
const i=new Error("PostHog syntheticException"),r=R(null===(n=E.__PosthogExtensions__)||void 0===n?void 0:n.parseErrorAsProperties)?E.__PosthogExtensions__.parseErrorAsProperties([e.message,void 0,void 0,void 0,e],{syntheticException:i}):{$exception_level:"error",$exception_list:[{type:e.name,value:e.message,mechanism:{handled:!0,synthetic:!1}}],...t}
this.exceptions.sendExceptionEvent(r)}loadToolbar(e){return this.toolbar.loadToolbar(e)}get_property(e){var t
return null===(t=this.persistence)||void 0===t?void 0:t.props[e]}getSessionProperty(e){var t
return null===(t=this.sessionPersistence)||void 0===t?void 0:t.props[e]}toString(){var e
let t=null!==(e=this.config.name)&&void 0!==e?e:Co
return t!==Co&&(t=Co+"."+t),t}_isIdentified(){var e,t
return"identified"===(null===(e=this.persistence)||void 0===e?void 0:e.get_property(Fe))||"identified"===(null===(t=this.sessionPersistence)||void 0===t?void 0:t.get_property(Fe))}_hasPersonProcessing(){var e,t,n,i
return!("never"===this.config.person_profiles||"identified_only"===this.config.person_profiles&&!this._isIdentified()&&O(this.getGroups())&&(null===(e=this.persistence)||void 0===e||null===(t=e.props)||void 0===t||!t[le])&&(null===(n=this.persistence)||void 0===n||null===(i=n.props)||void 0===i||!i[De]))}_shouldCapturePageleave(){return!0===this.config.capture_pageleave||"if_capture_pageview"===this.config.capture_pageleave&&this.config.capture_pageview}createPersonProfile(){this._hasPersonProcessing()||this._requirePersonProcessing("posthog.createPersonProfile")&&this.setPersonProperties({},{})}_requirePersonProcessing(e){return"never"===this.config.person_profiles?(G.error(e+' was called, but process_person is set to "never". This call will be ignored.'),!1):(this._register_single(De,!0),!0)}_sync_opt_out_with_persistence(){var e,t
const n=this.consent.isOptedOut(),i=this.config.opt_out_persistence_by_default,r=this.config.disable_persistence||n&&!!i
var o,s;(null===(e=this.persistence)||void 0===e?void 0:e.disabled)!==r&&(null===(o=this.persistence)||void 0===o||o.set_disabled(r)),(null===(t=this.sessionPersistence)||void 0===t?void 0:t.disabled)!==r&&(null===(s=this.sessionPersistence)||void 0===s||s.set_disabled(r))}opt_in_capturing(e){var t
this.consent.optInOut(!0),this._sync_opt_out_with_persistence(),(A(null==e?void 0:e.captureEventName)||null!=e&&e.captureEventName)&&this.capture(null!==(t=null==e?void 0:e.captureEventName)&&void 0!==t?t:"$opt_in",null==e?void 0:e.captureProperties,{send_instantly:!0}),this.config.capture_pageview&&this._captureInitialPageview()}opt_out_capturing(){this.consent.optInOut(!1),this._sync_opt_out_with_persistence()}has_opted_in_capturing(){return this.consent.isOptedIn()}has_opted_out_capturing(){return this.consent.isOptedOut()}clear_opt_in_out_capturing(){this.consent.reset(),this._sync_opt_out_with_persistence()}_is_bot(){return v?ao(v,this.config.custom_blocked_useragents):void 0}_captureInitialPageview(){m&&!this._initialPageviewCaptured&&(this._initialPageviewCaptured=!0,this.capture("$pageview",{title:m.title},{send_instantly:!0}))}debug(e){!1===e?(null==f||f.console.log("You've disabled debug mode."),localStorage&&localStorage.removeItem("ph_debug"),this.set_config({debug:!1})):(null==f||f.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),localStorage&&localStorage.setItem("ph_debug","true"),this.set_config({debug:!0}))}}!function(e,t){for(let n=0;n<t.length;n++)e.prototype[t[n]]=ee(e.prototype[t[n]])}(Oo,["identify"])
const Ao=function(){const e=$o[Co]=new Oo
return function(){function e(){e.done||(e.done=!0,Io=!1,J($o,(function(e){e._dom_loaded()})))}null!=m&&m.addEventListener&&("complete"===m.readyState?e():m.addEventListener("DOMContentLoaded",e,!1)),f&&ie(f,"load",e,!0)}(),e}()
function Mo(...e){console.log(...e)}function No(e,t){Ao.capture(e,t)}function jo(){"string"==typeof window.self&&(o(),window.self=window),function(){try{Ao.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N",{advanced_disable_decide:!0,advanced_disable_feature_flags:!0,advanced_disable_feature_flags_on_first_load:!0,advanced_disable_toolbar_metrics:!0,api_host:"https://us.i.posthog.com",autocapture:!1,capture_pageview:!1,disable_compression:!1,disable_persistence:!0,disable_session_recording:!0,disable_surveys:!0,person_profiles:"identified_only"})}catch(e){Mo(e)}}()}let Do=0,Bo=0,Ho=0,qo=0,Uo=0,Go=0,Wo=0
const zo=()=>Date.now(),Vo=()=>Math.floor(zo()/1e3)
function Qo(){return Do||(Do=zo()),Do}function Jo(){return Bo||(Bo=Qo()-3e5),Bo}function Ko(){return Ho||(Ho=Qo()-1728e5),Ho}function Xo(){return qo||(qo=Math.floor(Qo()/1e3)),qo}function Yo(){return Uo||(Uo=Xo()-120),Uo}function Zo(){return Go||(Go=Xo()-86400),Go}function es(){return Wo||(Wo=Xo()-604800),Wo}function ts(e){return null===e}function ns(e){return void 0===e}const is=`${document.location.protocol}//${document.location.host}/`,rs=window.HCS?.defines?.cdn,os=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],ss=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],as=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ls=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,cs=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,us=/guild_id=(?<guildId>\d+)/,ds=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,fs=/player_id=(?<playerId>\d+)/,hs=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,ps=/VL:.+?(?<vl>\d+)/,gs=.2,_s="joinallgroupsundersize",vs="index.php",ms="?cmd=",ys=`${vs}${ms}`,bs="&subcmd=",ws="&target_username=",ks=`${ys}auctionhouse`,Ss=`${ks}&search=`,Es=`${ys}log`,xs=`${ys}ignore${bs}add&ignore_username=`,Ps=`${ys}profile`,$s=`${Ps}&player_id=`,Ts=`${Ps}${bs}dropitems`,Cs=`${ys}trade&target_player=`,Is=`${ys}trade${bs}createsecure${ws}`,Ls=`${ys}arena${bs}`,Rs=`${vs}${`${ms}notepad&blank=1${bs}`}`,Fs=`${Rs}auctionsearch`,Os=`${ys}points`,As=`${ys}guild${bs}`,Ms=`${As}log`,Ns=`${As}scouttower`,js=`${As}groups&subcmd2=`,Ds=`${As}inventory&subcmd2=report&user=`,Bs=`${As}view&guild_id=`,Hs=`${js}joinall`,qs=`${js}${_s}`,Us=`${ys}world`,Gs=`${ys}findplayer`,Ws=`${Gs}&search_show_first=1&search_username=`,zs=`${ys}blacksmith`,Vs=`${ys}quickbuff`,Qs=`${ys}composing`,Js=`${ys}attackplayer${ws}`,Ks=`${ys}${bs}viewupdatearchive`,Xs=`${ys}${bs}viewarchive`,Ys=`${ys}bounty`,Zs=`${ys}inventing${bs}viewrecipe&recipe_id=`,ea=`https://guide.fallensword.com/${ys}`,ta="after-update.actionlist",na="buffs.player",ia="update.player",ra="level.stats-player",oa="gold.stats-player",sa="prompt.worldDialogShop",aa="keydown.controls",la="update.realm",ca="-success.action-response",ua=`-1${ca}`,da=`1${ca}`,fa=`2${ca}`,ha=`9${ca}`,pa=`5${ca}`,ga=`25${ca}`,_a=1,va=2,ma=16,ya=128,ba=256,wa="needToCompose",ka="lastComposeCheck",Sa="characterVirtualLevel",Ea="enableGuildActivityTracker",xa="lastLadderReset",Pa="form",$a="table",Ta="td",Ca="tr",Ia="fsh_buffLog",La="statbar-level-tooltip-general",Ra="stat-level",Fa="stat-defense",Oa="stat-attack",Aa="stat-damage",Ma="stat-armor",Na="stat-hp",ja="stat-vl",Da="GM_",Ba=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],Ha=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],qa=`${rs}ui/world/action_spinner.gif`,Ua=".fa-envelope",Ga='a[href*="&player_id="]',Wa=.002,za=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],Va='input[name="blockedSkillList[]"]'
var Qa={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addServerNode:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252",compactRanks:!1,lastModalGuildLogCheck:0}
const Ja=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function Ka(e,t){const n=window.localStorage.getItem(Da+e)
return ts(n)||ns(n)?t:function(e){const t=Ja.find((t=>e.startsWith(t[0])))
return t?t[1](e):e}(n)}function Xa(e){return Ka(e,Qa[e])}function Ya(e){return"boolean"==typeof e}function Za(e){return"string"==typeof e}function el(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(Da+e,t+n)}const tl=[[Za,(e,t)=>{el(e,"S]",t)}],[e=>"number"==typeof e,(e,t)=>{t.toString().indexOf(".")<0&&el(e,"N]",t)}],[Ya,(e,t)=>{el(e,"B]",t)}]]
function nl(e,t){const n=tl.find((e=>e[0](t)))
n&&n[1](e,t)}function il(e){const t=`screenview__${e}`,n=Xa(t)
Number.isFinite(n)&&n>Zo()||(No(t),nl(t,Xo()))}function rl(e){return"function"==typeof e}function ol(e){return"object"==typeof e}function sl(e,t){try{return JSON.parse(e,t)}catch(e){}}function al(e,t){return t?t.querySelector(e):document.querySelector(e)}function ll(e){const t=al("link",document.body)
return new Promise((n=>{const i=document.createElement("link")
i.type="text/css",i.rel="stylesheet",i.onload=()=>{n()},i.href=e,t?t.before(i):document.body.append(i)}))}var cl="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function ul(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dl,fl={exports:{}}
var hl=(dl||(dl=1,fl.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==cl?cl:"undefined"!=typeof self?self:{}
function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){var t=e.default
if("function"==typeof t){var n=function(){return t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),n}var i={},r={},o={},s={},a="<unknown>"
function l(e){return e.split("\n").reduce((function(e,t){var n=d(t)||h(t)||_(t)||b(t)||m(t)
return n&&e.push(n),e}),[])}var c=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,u=/\((\S*)(?::(\d+))(?::(\d+))\)/
function d(e){var t=c.exec(e)
if(!t)return null
var n=t[2]&&0===t[2].indexOf("native"),i=t[2]&&0===t[2].indexOf("eval"),r=u.exec(t[2])
return i&&null!=r&&(t[2]=r[1],t[3]=r[2],t[4]=r[3]),{file:n?null:t[2],methodName:t[1]||a,arguments:n?[t[2]]:[],lineNumber:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}var f=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
function h(e){var t=f.exec(e)
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
return i(t,e),t},o=e&&e.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){e.done?n(e.value):r(e.value).then(s,a)}l((i=i.apply(e,t||[])).next())}))},s=e&&e.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r
switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,i=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){s=0
continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1]
break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o
break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o)
break}r[2]&&s.ops.pop(),s.trys.pop()
continue}o=t.call(e,s)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}}
Object.defineProperty(t,"__esModule",{value:!0}),t.logDeprecatedMethod=t.globalThisOrWindow=t.isBrowserConfig=t.clone=t.formatCGIData=t.filterUrl=t.filter=t.generateStackTrace=t.endpoint=t.instrumentConsole=t.instrument=t.isErrorObject=t.makeNotice=t.logger=t.sanitize=t.shallowClone=t.runAfterNotifyHandlers=t.runBeforeNotifyHandlers=t.getSourceForBacktrace=t.getCauses=t.calculateBacktraceShift=t.DEFAULT_BACKTRACE_SHIFT=t.makeBacktrace=t.objectIsExtensible=t.objectIsEmpty=t.mergeNotice=t.merge=void 0
var a=r(w)
function l(e,t){var n={}
for(var i in e)n[i]=e[i]
for(var i in t)n[i]=t[i]
return n}function c(e,t){var n=l(e,t)
return e.context&&t.context&&(n.context=l(e.context,t.context)),n}function u(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1
return!0}function d(e){return"function"!=typeof Object.isExtensible||Object.isExtensible(e)}function f(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=console),!e)return[]
try{var i=a.parse(e).map((function(e){return{file:e.file,method:e.methodName,number:e.lineNumber,column:e.column}}))
return t&&i.splice(0,p(i)),i}catch(e){return n.debug(e),[]}}function h(e){var t=!1,n=!1
return e.file&&(t=e.file.toLowerCase().indexOf("@honeybadger-io")>-1),e.method&&(n=e.method.toLowerCase().indexOf("@honeybadger-io")>-1),t||n}function p(e){for(var n=0,i=0;i<e.length;i++){var r=e[i]
if(!h(r)){if(!r.file||"<anonymous>"===r.file){var o=e[i+1]
if(o&&h(o)){n++
continue}}break}n++}return n||t.DEFAULT_BACKTRACE_SHIFT}function g(e,t){if(e.cause){for(var n=[],i=e;n.length<3&&(i=i.cause);)n.push({class:i.name,message:i.message,backtrace:"string"==typeof i.stack?f(i.stack,!1,t):null})
return n}return[]}function _(e,t){return o(this,void 0,void 0,(function(){var n,i,r,o
return s(this,(function(s){switch(s.label){case 0:if(n=[],!t||!e||!e.length)return[2,n]
i=0,s.label=1
case 1:return e.length?(r=e.splice(0)[i],[4,t(r.file)]):[3,3]
case 2:return o=s.sent(),n[i]=N(o,r.number),i++,[3,1]
case 3:return[2,n]}}))}))}function v(e,t){for(var n=[],i=!0,r=0,o=t.length;r<o;r++){var s=(0,t[r])(e)
!1===s&&(i=!1),n.push(s)}return{results:n,result:i}}function m(e,t,n){e&&e.afterNotify&&e.afterNotify(n,e)
for(var i=0,r=t.length;i<r;i++)t[i](n,e)
return!0}function y(e){if("object"!=typeof e||null===e)return{}
var t={}
for(var n in e)t[n]=e[n]
return t}function b(e,t){void 0===t&&(t=8)
var n=[]
function i(e){if(!e||"object"!=typeof e)return!1
for(var t=0;t<n.length;t++)if(n[t]===e)return!0
return n.push(e),!1}function r(e){var t=typeof e
return/function/.test(t)?"toJSON"===e.name:!/symbol/.test(t)&&null!==e&&("object"!=typeof e||void 0!==e.hasOwnProperty)}function o(e,n){if(void 0===n&&(n=0),n>=t)return"[DEPTH]"
if(!r(e))return Object.prototype.toString.call(e)
if(i(e))return"[RECURSION]"
if(Array.isArray(e))return e.map((function(e){return s(e,n+1)}))
if("object"==typeof e){var o={}
for(var a in e){var l=e[a]
Object.prototype.hasOwnProperty.call(e,a)&&null!=a&&null!=l&&(o[a]=s(l,n+1))}return o}return e}function s(e,t){void 0===t&&(t=0)
try{return o(e,t)}catch(e){return"[ERROR] ".concat(e)}}return s(e)}function k(e){var t=function(t){return function(){for(var n,i=[],r=0;r<arguments.length;r++)i[r]=arguments[r]
if("debug"===t){if(!e.config.debug)return
t="log"}i.unshift("[Honeybadger]"),(n=e.config.logger)[t].apply(n,i)}}
return{log:t("log"),info:t("info"),debug:t("debug"),warn:t("warn"),error:t("error")}}function S(e){var t
if(e)if(E(e)){var n=e
t=l(e,{name:n.name,message:n.message,stack:n.stack,cause:n.cause})}else t="object"==typeof e?y(e):{message:String(e)}
else t={}
return t}function E(e){return e instanceof Error||"[object Error]"===Object.prototype.toString.call(e)}function x(e,t,n){if(e&&t&&n&&t in e)try{for(var i=e[t];i&&i.__hb_original;)i=i.__hb_original
e[t]=n(i),e[t].__hb_original=i}catch(e){}}t.merge=l,t.mergeNotice=c,t.objectIsEmpty=u,t.objectIsExtensible=d,t.makeBacktrace=f,t.DEFAULT_BACKTRACE_SHIFT=3,t.calculateBacktraceShift=p,t.getCauses=g,t.getSourceForBacktrace=_,t.runBeforeNotifyHandlers=v,t.runAfterNotifyHandlers=m,t.shallowClone=y,t.sanitize=b,t.logger=k,t.makeNotice=S,t.isErrorObject=E,t.instrument=x
var P=!1,$=[]
function T(e,t){e&&e.console&&t&&($.push(t),P||(P=!0,["debug","info","warn","error","log"].forEach((function(t){x(e.console,t,(function(n){return function(){var i=Array.prototype.slice.call(arguments)
$.forEach((function(e){try{e(t,i)}catch(e){}})),"function"==typeof n&&Function.prototype.apply.call(n,e.console,arguments)}}))}))))}function C(e,t){var n=e.trim().replace(/\/$/,"")
return t=t.trim().replace(/(^\/|\/$)/g,""),"".concat(n,"/").concat(t)}function I(){try{throw new Error("")}catch(e){if(e.stack)return e.stack}for(var e=10,t=[],n=arguments.callee;n&&t.length<e;){/function(?:\s+([\w$]+))+\s*\(/.test(n.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>")
try{n=n.caller}catch(e){break}}return t.join("\n")}function L(e,t){if(F("Object",e)){F("Array",t)||(t=[])
var n=[]
return i(e)}function i(e){var r,o
if(F("Object",e)||F("Array",e)){if(-1!==n.indexOf(e))return"[CIRCULAR DATA STRUCTURE]"
n.push(e)}if(F("Object",e)){for(r in o={},e)R(r,t)?o[r]="[FILTERED]":o[r]=i(e[r])
return o}return F("Array",e)?e.map((function(e){return i(e)})):F("Function",e)?"[FUNC]":e}}function R(e,t){for(var n=0;n<t.length;n++)if(-1!==e.toLowerCase().indexOf(t[n].toLowerCase()))return!0
return!1}function F(e,t){var n=Object.prototype.toString.call(t).slice(8,-1)
return null!=t&&n===e}function O(e,t){if(!t)return e
if("string"!=typeof e)return e
var n=e.split(/\?/,2)[1]
if(!n)return e
var i=e
return n.split(/[&]\s?/).forEach((function(e){var n=e.split("=",2),r=n[0],o=n[1]
R(r,t)&&(i=i.replace("".concat(r,"=").concat(o),"".concat(r,"=[FILTERED]")))})),i}function A(e,t){void 0===t&&(t="")
var n={}
return Object.keys(e).forEach((function(i){var r=t+i.replace(/\W/g,"_").toUpperCase()
n[r]=e[i]})),n}function M(e){return JSON.parse(JSON.stringify(e))}function N(e,t,n){if(void 0===n&&(n=2),!e)return null
var i=e.split("\n")
i.unshift("")
for(var r=t+n,o={},s=t-n;s<=r;s++){var a=i[s]
"string"==typeof a&&(o[s]=a)}return o}function j(e){return void 0!==e.async}function D(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window}t.instrumentConsole=T,t.endpoint=C,t.generateStackTrace=I,t.filter=L,t.filterUrl=O,t.formatCGIData=A,t.clone=M,t.isBrowserConfig=j,t.globalThisOrWindow=D
var B={}
function H(e,t,n,i){void 0===i&&(i=100)
var r="".concat(t,"-").concat(n)
if(void 0===B[r]&&(B[r]=0),B[r]%i==0){var o="Deprecation warning: ".concat(t," has been deprecated; please use ").concat(n," instead.")
e.warn(o),B[r]++}else B[r]++}t.logDeprecatedMethod=H})(s),Object.defineProperty(o,"__esModule",{value:!0})
var k=s
function S(e){return void 0===e&&(e=(0,k.globalThisOrWindow)()),{shouldReloadOnConfigure:!1,load:function(t){function n(){return t.config.eventsEnabled}n()&&(0,k.instrumentConsole)(e,(function(e,i){if(n()&&0!==i.length){var r={severity:e}
"string"==typeof i[0]?(r.message=i[0],r.args=i.slice(1)):r.args=i,t.event("log",r)}}))}}}o.default=S
var E={},x={}
Object.defineProperty(x,"__esModule",{value:!0}),x.GlobalStore=void 0
var P=s,$=function(){function e(e,t){this.contents=e,this.breadcrumbsLimit=t}return e.create=function(t,n){return new e(t,n)},e.prototype.available=function(){return!0},e.prototype.getContents=function(e){var t=e?this.contents[e]:this.contents
return JSON.parse(JSON.stringify(t))},e.prototype.setContext=function(e){this.contents.context=(0,P.merge)(this.contents.context,e||{})},e.prototype.addBreadcrumb=function(e){this.contents.breadcrumbs.length==this.breadcrumbsLimit&&this.contents.breadcrumbs.shift(),this.contents.breadcrumbs.push(e)},e.prototype.clear=function(){this.contents.context={},this.contents.breadcrumbs=[]},e.prototype.run=function(e){return e()},e}()
x.GlobalStore=$
var T={}
class C{static parse(e){return e.trim().split("\n").map((e=>JSON.parse(e)))}static stringify(e){return e.map((e=>JSON.stringify(e))).join("\n")}}var I=Object.freeze({__proto__:null,NdJson:C}),L=n(I),R={}
Object.defineProperty(R,"__esModule",{value:!0}),R.CONFIG=void 0,R.CONFIG={apiKey:null,endpoint:"https://api.honeybadger.io",environment:null,hostname:null,projectRoot:null,component:null,action:null,revision:null,reportData:null,breadcrumbsEnabled:!0,eventsEnabled:!1,maxBreadcrumbs:40,maxObjectDepth:8,logger:console,developmentEnvironments:["dev","development","test"],debug:!1,tags:null,enableUncaught:!0,enableUnhandledRejection:!0,afterUncaught:function(){return!0},filters:["creditcard","password"],__plugins:[]}
var F=e&&e.__assign||function(){return F=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},F.apply(this,arguments)},O=e&&e.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){e.done?n(e.value):r(e.value).then(s,a)}l((i=i.apply(e,t||[])).next())}))},A=e&&e.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r
switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,i=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){s=0
continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1]
break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o
break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o)
break}r[2]&&s.ops.pop(),s.trys.pop()
continue}o=t.call(e,s)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}}
Object.defineProperty(T,"__esModule",{value:!0}),T.ThrottledEventsLogger=void 0
var M=L,N=s,j=R,D=function(){function e(e,t){this.config=e,this.transport=t,this.queue=[],this.isProcessing=!1,this.config=F(F({},j.CONFIG),e),this.logger=this.originalLogger()}return e.prototype.configure=function(e){for(var t in e)this.config[t]=e[t]},e.prototype.log=function(e){this.queue.push(e),this.isProcessing||this.processQueue()},e.prototype.processQueue=function(){var e=this
if(0!==this.queue.length&&!this.isProcessing){this.isProcessing=!0
var t=this.queue.slice()
this.queue=[]
var n=M.NdJson.stringify(t)
this.makeHttpRequest(n).then((function(){setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)})).catch((function(t){e.logger.error("[Honeybadger] Error making HTTP request:",t),setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)}))}},e.prototype.makeHttpRequest=function(e){return O(this,void 0,void 0,(function(){var t=this
return A(this,(function(n){return[2,this.transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json"},method:"POST",endpoint:(0,N.endpoint)(this.config.endpoint,"/v1/events"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},e).then((function(){t.config.debug&&t.logger.debug("[Honeybadger] Events sent successfully")})).catch((function(e){t.logger.error("[Honeybadger] Error sending events: ".concat(e.message))}))]}))}))},e.prototype.originalLogger=function(){var e,t,n,i,r
return{log:null!==(e=console.log.__hb_original)&&void 0!==e?e:console.log,info:null!==(t=console.info.__hb_original)&&void 0!==t?t:console.info,debug:null!==(n=console.debug.__hb_original)&&void 0!==n?n:console.debug,warn:null!==(i=console.warn.__hb_original)&&void 0!==i?i:console.warn,error:null!==(r=console.error.__hb_original)&&void 0!==r?r:console.error}},e}()
T.ThrottledEventsLogger=D
var B=e&&e.__assign||function(){return B=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},B.apply(this,arguments)},H=e&&e.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){e.done?n(e.value):r(e.value).then(s,a)}l((i=i.apply(e,t||[])).next())}))},q=e&&e.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r
switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,i=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){s=0
continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1]
break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o
break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o)
break}r[2]&&s.ops.pop(),s.trys.pop()
continue}o=t.call(e,s)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}}
Object.defineProperty(E,"__esModule",{value:!0}),E.Client=void 0
var U=s,G=x,W=T,z=R,V=/,|\s+/,Q=/\S/,J=function(){function e(e,t){void 0===e&&(e={}),this.__pluginsLoaded=!1,this.__store=null,this.__beforeNotifyHandlers=[],this.__afterNotifyHandlers=[],this.__notifier={name:"@honeybadger-io/core",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",version:"6.10.1"},this.config=B(B({},z.CONFIG),e),this.__initStore(),this.__transport=t,this.__eventsLogger=new W.ThrottledEventsLogger(this.config,this.__transport),this.logger=(0,U.logger)(this)}return e.prototype.getVersion=function(){return this.__notifier.version},e.prototype.getNotifier=function(){return this.__notifier},e.prototype.setNotifier=function(e){this.__notifier=e},e.prototype.configure=function(e){for(var t in void 0===e&&(e={}),e)this.config[t]=e[t]
return this.__eventsLogger.configure(this.config),this.loadPlugins(),this},e.prototype.loadPlugins=function(){var e=this;(this.__pluginsLoaded?this.config.__plugins.filter((function(e){return e.shouldReloadOnConfigure})):this.config.__plugins).forEach((function(t){return t.load(e)})),this.__pluginsLoaded=!0},e.prototype.__initStore=function(){this.__store=new G.GlobalStore({context:{},breadcrumbs:[]},this.config.maxBreadcrumbs)},e.prototype.beforeNotify=function(e){return this.__beforeNotifyHandlers.push(e),this},e.prototype.afterNotify=function(e){return this.__afterNotifyHandlers.push(e),this},e.prototype.setContext=function(e){return"object"==typeof e&&null!=e&&this.__store.setContext(e),this},e.prototype.resetContext=function(e){return this.logger.warn("Deprecation warning: `Honeybadger.resetContext()` has been deprecated; please use `Honeybadger.clear()` instead."),this.__store.clear(),"object"==typeof e&&null!==e&&this.__store.setContext(e),this},e.prototype.clear=function(){return this.__store.clear(),this},e.prototype.notify=function(e,t,n){var i=this
void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var r=this.makeNotice(e,t,n),o=r&&r.backtrace?r.backtrace.map((function(e){return(0,U.shallowClone)(e)})):null,s=this.__runPreconditions(r)
return s instanceof Error?((0,U.runAfterNotifyHandlers)(r,this.__afterNotifyHandlers,s),!1):s instanceof Promise?(s.then((function(e){return e instanceof Error?((0,U.runAfterNotifyHandlers)(r,i.__afterNotifyHandlers,e),!1):i.__send(r,o)})),!0):(this.__send(r,o).catch((function(e){})),!0)},e.prototype.notifyAsync=function(e,t,n){var i=this
return void 0===t&&(t=void 0),void 0===n&&(n=void 0),new Promise((function(r,o){var s,a
s=e.afterNotify?e:t&&t.afterNotify?t:n&&n.afterNotify?n:t&&"object"==typeof t?t:n||(t={}),a=s.afterNotify,s.afterNotify=function(e){if(null==a||a.call(i,e),e)return o(e)
r()},i.notify(e,t,n)}))},e.prototype.makeNotice=function(e,t,n){void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var i=(0,U.makeNotice)(e)
if(t&&"object"!=typeof t&&(t={name:String(t)}),t&&(i=(0,U.mergeNotice)(i,t)),"object"==typeof n&&null!==n&&(i=(0,U.mergeNotice)(i,n)),(0,U.objectIsEmpty)(i))return null
var r=this.__store.getContents("context"),o=this.__constructTags(i.tags),s=this.__constructTags(r.tags),a=this.__constructTags(this.config.tags),l=o.concat(s).concat(a),c=l.filter((function(e,t){return l.indexOf(e)===t}))
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
var c=l(o),u=E
Object.defineProperty(t,"Client",{enumerable:!0,get:function(){return u.Client}}),r(x,t),t.Types=a(K),t.Util=a(s),t.Plugins={events:c.default}}(r)
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
return{protocol:t[2],host:t[4],pathname:t[5]}}function oe(e){var t=re(e),n=re(document.URL)
return t.host&&t.protocol?t.protocol===n.protocol&&t.host===n.host?t.pathname:"".concat(t.protocol,"://").concat(t.host).concat(t.pathname):t.pathname}function se(e){var t={}
return e.split(/[;,]\s?/).forEach((function(e){var n=e.split("=",2),i=n[0],r=n[1]
t[i]=r})),t}function ae(e){if("object"==typeof e){var t=[]
for(var n in e)t.push(n+"="+e[n])
return t.join(";")}}function le(e){try{var t=e.parentNode.childNodes,n=[]
return Array.prototype.forEach.call(t,(function(t){t.tagName&&t.tagName===e.tagName&&n.push(t)})),n}catch(e){return[]}}function ce(e,t){return e.length>t&&(e=e.substr(0,t)+"..."),e}X.stringNameOfElement=Z,X.stringSelectorOfElement=ee,X.stringTextOfElement=te,X.nativeFetch=ne,X.parseURL=re,X.localURLPathname=oe,X.decodeCookie=se,X.encodeCookie=ae,X.preferCatch=function(){var e=!0
if("undefined"==typeof window)return e
if(window.atob||(e=!1),window.ErrorEvent)try{0===new window.ErrorEvent("").colno&&(e=!1)}catch(e){}return e}()
var ue={}
Object.defineProperty(ue,"__esModule",{value:!0}),ue.onError=ue.ignoreNextOnError=void 0
var de,fe=r,he=fe.Util.instrument,pe=fe.Util.makeNotice,ge=fe.Util.globalThisOrWindow,_e=0
function ve(){_e+=1,clearTimeout(de),de=setTimeout((function(){_e=0}))}function me(e){return void 0===e&&(e=ge()),{load:function(t){he(e,"onerror",(function(n){var i=function(e,n,i,r,o){if(t.logger.debug("window.onerror callback invoked",arguments),_e>0)return t.logger.debug("Ignoring window.onerror (error likely reported earlier)",arguments),void(_e-=1)
if(0===i&&/Script error\.?/.test(e))t.config.enableUncaught&&t.logger.warn("Ignoring cross-domain script error: enable CORS to track these types of errors",arguments)
else{var s=pe(o)
s.name||(s.name="window.onerror"),s.message||(s.message=e),s.stack||(s.stack=[s.message,"\n    at ? (",n||"unknown",":",i||0,":",r||0,")"].join("")),t.addBreadcrumb("window.onerror"!==s.name&&s.name?"window.onerror: ".concat(s.name):"window.onerror",{category:"error",metadata:{name:s.name,message:s.message,stack:s.stack}}),t.config.enableUncaught&&t.notify(s)}}
return function(t,r,o,s,a){return i(t,r,o,s,a),"function"==typeof n&&n.apply(e,arguments)}}))}}}ue.ignoreNextOnError=ve,ue.onError=me
var ye={}
Object.defineProperty(ye,"__esModule",{value:!0})
var be=r,we=be.Util.instrument,ke=be.Util.globalThisOrWindow
function Se(e){return void 0===e&&(e=ke()),{load:function(t){t.config.enableUnhandledRejection&&we(e,"onunhandledrejection",(function(e){function n(e){var n
if(t.logger.debug("window.onunhandledrejection callback invoked",arguments),t.config.enableUnhandledRejection){var i=e.reason
if(i instanceof Error){var r="unknown",o=0,s="".concat(i.message,"\n    at ? (").concat(r,":").concat(o,")"),a=i.stack||s,l={name:i.name,message:"UnhandledPromiseRejectionWarning: ".concat(i),stack:a}
return t.addBreadcrumb("window.onunhandledrejection: ".concat(l.name),{category:"error",metadata:l}),void t.notify(l)}var c="string"==typeof i?i:null!==(n=JSON.stringify(i))&&void 0!==n?n:"Unspecified reason"
t.notify({name:"window.onunhandledrejection",message:"UnhandledPromiseRejectionWarning: ".concat(c)})}}return function(t){n(t),"function"==typeof e&&e.apply(this,arguments)}}))}}}ye.default=Se
var Ee={}
Object.defineProperty(Ee,"__esModule",{value:!0})
var xe=r,Pe=X,$e=xe.Util.sanitize,Te=xe.Util.instrument,Ce=xe.Util.instrumentConsole,Ie=xe.Util.globalThisOrWindow
function Le(e){return void 0===e&&(e=Ie()),{load:function(t){function n(e){return!0===t.config.breadcrumbsEnabled||(e?!0===t.config.breadcrumbsEnabled[e]:!1!==t.config.breadcrumbsEnabled)}!function(){function i(e){return Array.isArray(e)?e.map((function(e){try{return String(e)}catch(e){return"[unknown]"}})).join(" "):""}n("console")&&Ce(e,(function(e,n){var r=i(n),o={category:"log",metadata:{level:e,arguments:$e(n,3)}}
t.addBreadcrumb(r,o)}))}(),n("dom")&&"function"==typeof e.addEventListener&&e.addEventListener("click",(function(e){var n,i,r
try{n=(0,Pe.stringNameOfElement)(e.target),i=(0,Pe.stringSelectorOfElement)(e.target),r=(0,Pe.stringTextOfElement)(e.target)}catch(e){n="UI Click",i="[unknown]",r="[unknown]"}0!==n.length&&t.addBreadcrumb(n,{category:"ui.click",metadata:{selector:i,text:r,event:e}})}),!!e.location),n("network")&&"undefined"!=typeof XMLHttpRequest&&(Te(XMLHttpRequest.prototype,"open",(function(e){return function(){var t=this,n=arguments[1],i="string"==typeof n?n:String(n),r="string"==typeof arguments[0]?arguments[0].toUpperCase():arguments[0],o="".concat(r," ").concat((0,Pe.localURLPathname)(i))
this.__hb_xhr={type:"xhr",method:r,url:i,message:o},"function"==typeof e&&e.apply(t,arguments)}})),Te(XMLHttpRequest.prototype,"send",(function(e){return function(){var n=this
function i(){if(4===n.readyState){var e=void 0
n.__hb_xhr&&(n.__hb_xhr.status_code=n.status,e=n.__hb_xhr.message,delete n.__hb_xhr.message),t.addBreadcrumb(e||"XMLHttpRequest",{category:"request",metadata:n.__hb_xhr})}}"onreadystatechange"in n&&"function"==typeof n.onreadystatechange?Te(n,"onreadystatechange",(function(e){return function(){i(),"function"==typeof e&&e.apply(this,arguments)}})):n.onreadystatechange=i,"function"==typeof e&&e.apply(n,arguments)}}))),n("network")&&(0,Pe.nativeFetch)()&&Te(e,"fetch",(function(n){return function(){var i,r=arguments[0],o="GET"
"string"==typeof r?i=r:"Request"in e&&r instanceof Request?(i=r.url,r.method&&(o=r.method)):i=String(r),arguments[1]&&arguments[1].method&&(o=arguments[1].method),"string"==typeof o&&(o=o.toUpperCase())
var s="".concat(o," ").concat("undefined"==typeof document?i:(0,Pe.localURLPathname)(i)),a={type:"fetch",method:o,url:i}
return n.apply(this,arguments).then((function(e){return a.status_code=e.status,t.addBreadcrumb(s,{category:"request",metadata:a}),e})).catch((function(e){throw t.addBreadcrumb("fetch error",{category:"error",metadata:a}),e}))}})),function(){if(n("navigation")&&null!=e.location){var i=e.location.href
"function"==typeof addEventListener&&addEventListener("popstate",(function(t){r(i,e.location.href)})),void 0!==e.history&&(Te(e.history,"pushState",o),Te(e.history,"replaceState",o))}function r(e,n){i=n,t.addBreadcrumb("Page changed",{category:"navigation",metadata:{from:e,to:n}})}function o(e){return function(){var t=arguments.length>2?arguments[2]:void 0
return t&&r(i,String(t)),e.apply(this,arguments)}}}()}}}Ee.default=Le
var Re={}
Object.defineProperty(Re,"__esModule",{value:!0})
var Fe=r,Oe=Fe.Util.instrument,Ae=Fe.Util.globalThisOrWindow
function Me(e){return void 0===e&&(e=Ae()),{load:function(t){!function(){function n(e){return function(n){return function(i,r){if("function"==typeof i){var o=Array.prototype.slice.call(arguments,2)
return i=t.__wrap(i,e),n((function(){i.apply(void 0,o)}),r)}return n(i,r)}}}Oe(e,"setTimeout",n({component:"setTimeout"})),Oe(e,"setInterval",n({component:"setInterval"}))}()}}}Re.default=Me
var Ne={}
Object.defineProperty(Ne,"__esModule",{value:!0})
var je=r,De=je.Util.instrument,Be=je.Util.globalThisOrWindow
function He(e){return void 0===e&&(e=Be()),{load:function(t){["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"].forEach((function(n){var i=e[n]&&e[n].prototype
i&&Object.prototype.hasOwnProperty.call(i,"addEventListener")&&(De(i,"addEventListener",(function(e){var i={component:"".concat(n,".prototype.addEventListener")}
return function(n,r,o,s){try{r&&null!=r.handleEvent&&(r.handleEvent=t.__wrap(r.handleEvent,i))}catch(e){t.logger.error(e)}return e.call(this,n,t.__wrap(r,i),o,s)}})),De(i,"removeEventListener",(function(e){return function(n,i,r,o){return e.call(this,n,i,r,o),e.call(this,n,t.__wrap(i),r,o)}})))}))}}}Ne.default=He
var qe={},Ue=e&&e.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){e.done?n(e.value):r(e.value).then(s,a)}l((i=i.apply(e,t||[])).next())}))},Ge=e&&e.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r
switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,i=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){s=0
continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1]
break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o
break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o)
break}r[2]&&s.ops.pop(),s.trys.pop()
continue}o=t.call(e,s)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}}
Object.defineProperty(qe,"__esModule",{value:!0}),qe.BrowserTransport=void 0
var We=r,ze=We.Util.sanitize,Ve=We.Util.globalThisOrWindow
function Qe(e){return Object.entries(e)}var Je=function(){function e(e){void 0===e&&(e={}),this.headers={},this.headers=e}return e.prototype.defaultHeaders=function(){return this.headers},e.prototype.send=function(e,t){return Ue(this,void 0,void 0,(function(){var n,i,r,o,s
return Ge(this,(function(a){switch(a.label){case 0:return n=e.headers?Qe(e.headers):[],i=this.defaultHeaders(),n.forEach((function(e){var t=e[0],n=e[1]
null!=t&&null!=n&&(i[String(t)]=String(n))})),r={method:e.method,headers:i},"POST"===e.method&&t&&(r.body="string"==typeof t?t:JSON.stringify(ze(t,e.maxObjectDepth))),[4,Ve().fetch(e.endpoint,r)]
case 1:return[4,(o=a.sent()).text()]
case 2:return s=a.sent(),[2,Promise.resolve({statusCode:o.status,body:s})]}}))}))},e}()
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
function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),o=e&&e.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},o.apply(this,arguments)},s=e&&e.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){e.done?n(e.value):r(e.value).then(s,a)}l((i=i.apply(e,t||[])).next())}))},a=e&&e.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1]
return r[1]},trys:[],ops:[]}
return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function a(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.")
for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r
switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o
break
case 4:return s.label++,{value:o[1],done:!1}
case 5:s.label++,i=o[1],o=[0]
continue
case 7:o=s.ops.pop(),s.trys.pop()
continue
default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){s=0
continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1]
break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o
break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o)
break}r[2]&&s.ops.pop(),s.trys.pop()
continue}o=t.call(e,s)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}},l=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Types=t.getUserFeedbackScriptUrl=void 0
var c=r,u=X,d=ue,f=l(ye),h=l(Ee),p=l(Re),g=l(Ne),_=qe,v=Ke,m=c.Util.merge,y=c.Util.filter,b=c.Util.objectIsExtensible,w=c.Util.globalThisOrWindow,k=function(){var e=w(),t=""
return null!=e.location&&(t=e.location.protocol+"//"+e.location.host),t},S=function(e){var t=e.split(".").slice(0,2).join(".")
return"https://js.honeybadger.io/v".concat(t,"/honeybadger-feedback-form.js")}
t.getUserFeedbackScriptUrl=S
var E=function(e){function n(t){void 0===t&&(t={})
var n=e.call(this,o({userFeedbackEndpoint:"https://api.honeybadger.io/v2/feedback",async:!0,maxErrors:null,projectRoot:k()},t),new _.BrowserTransport({"User-Agent":P()}))||this
return n.__errorsSent=0,n.__lastWrapErr=void 0,n.__lastNoticeId=void 0,n.__beforeNotifyHandlers=[function(e){return n.__exceedsMaxErrors()?(n.logger.debug("Dropping notice: max errors exceeded",e),!1):(e&&!e.url&&"undefined"!=typeof document&&(e.url=document.URL),n.__incrementErrorsCount(),!0)}],n.__afterNotifyHandlers=[function(e,t){t&&(n.__lastNoticeId=t.id)}],n}return i(n,e),n.prototype.configure=function(t){return void 0===t&&(t={}),e.prototype.configure.call(this,t)},n.prototype.resetMaxErrors=function(){return this.__errorsSent=0},n.prototype.factory=function(e){var t=new n(e)
return t.setNotifier(this.getNotifier()),t},n.prototype.checkIn=function(e){throw new Error("Honeybadger.checkIn() is not supported on the browser")},n.prototype.showUserFeedbackForm=function(e){return void 0===e&&(e={}),s(this,void 0,void 0,(function(){return a(this,(function(t){return new v.BrowserFeedbackForm(this.config,this.logger,this.getUserFeedbackSubmitUrl()).show(this.__lastNoticeId,e),[2]}))}))},n.prototype.getUserFeedbackSubmitUrl=function(){return(0,t.getUserFeedbackScriptUrl)(this.getVersion())},n.prototype.__buildPayload=function(t){var n,i={HTTP_USER_AGENT:void 0,HTTP_REFERER:void 0,HTTP_COOKIE:void 0}
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
throw i.__lastWrapErr=e,(0,d.ignoreNextOnError)(),i.addBreadcrumb(t.component?"".concat(t.component,": ").concat(e.name):e.name,{category:"error",metadata:{message:e.message,name:e.name,stack:e.stack}}),i.config.enableUncaught&&i.notify(e),e}}}return n.___hb.___hb=n.___hb,n.___hb}catch(e){return n}},n.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},n.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},n}(c.Client),x={name:"@honeybadger-io/js",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",version:"6.10.1"},P=function(){return"undefined"!=typeof navigator?"Honeybadger JS Browser Client ".concat(x.version,"; ").concat(navigator.userAgent):"Honeybadger JS Browser Client ".concat(x.version,"; n/a; n/a")},$=new E({__plugins:[(0,d.onError)(),(0,f.default)(),(0,p.default)(),(0,g.default)(),(0,h.default)(),c.Plugins.events()]})
$.setNotifier(x)
var T=r
Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return T.Types}}),t.default=$}(i)
var et=t(i)
return et}()),fl.exports),pl=ul(hl)
const gl=["attackplayer.min.js","dynamically imported module","fs.min.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","play method is not allowed","world.min.js","openuserjs.org"],_l=e=>gl.some((t=>e.includes(t)))
function vl(e){if(_l(e.stack))return!1}function ml(){!function(){pl.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.137"})
const e=o()
e&&pl.setContext({user_id:e}),pl.beforeNotify(vl)}()}var yl={}
function bl(e,t,n,i){e instanceof EventTarget&&e.addEventListener(t,n,i)}function wl(e){Xa("betaOptIn")&&Mo("sendException",e),pl.notify(e)}function kl(e,t){return e||t}const Sl=[null]
function El(e,t){return Sl[e]&&Sl[e].priority<Sl[t].priority}function xl(e,t){const n=Sl[e]
Sl[e]=Sl[t],Sl[t]=n}function Pl(e,t){return e?2*t:2*t+1}function $l(){if(1===Sl.length)return
const e=Sl[1].data,t=Sl.pop()
return Sl.length>1&&(Sl[1]=t,function(e){let t=e
for(;2*t<Sl.length;){const e=Pl(!El(2*t+1,2*t),t)
if(El(t,e))break
xl(t,e),t=e}}(1)),e}function Tl(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!El(t,e))break
xl(t,e),t=e}}(Sl.push({data:e,priority:t})-1)}let Cl=!0
const Il="fshMessage"
let Ll=0
function Rl(){Sl.length-1==0?Cl=!0:(Cl=!1,window.postMessage(Il,window.location.origin))}function Fl(){const e=$l()
rl(e)?e():function(e){ns(e)||wl(`pop() was not a function (${typeof e})`)}(e)}function Ol(e){const t=e.data
e.origin===window.location.origin&&t===Il&&function(){try{Fl()}catch(e){pl.notify(e)}finally{Rl()}}()}function Al(e,t,n,i){if(rl(t)){Ll||(bl(window,"message",Ol),Ll=!0)
const r=kl(i,window),o=kl(n,[])
Tl(t.bind(r,...o),e),Cl&&Rl()}}function Ml(e,t){return new URLSearchParams(e).get(t)}function Nl(e){try{return Ml(decodeURIComponent(window.location.search),e)}catch(e){return Mo(e),""}}function jl(){}const Dl=e=>e
function Bl(e,t){for(const n in t)e[n]=t[n]
return e}function Hl(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}function ql(e){return e()}function Ul(){return Object.create(null)}function Gl(e){e.forEach(ql)}function Wl(e){return"function"==typeof e}function zl(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let Vl
function Ql(e,t){return e===t||(Vl||(Vl=document.createElement("a")),Vl.href=t,e===Vl.href)}function Jl(e,...t){if(null==e){for(const e of t)e(void 0)
return jl}const n=e.subscribe(...t)
return n.unsubscribe?()=>n.unsubscribe():n}function Kl(e){let t
return Jl(e,(e=>t=e))(),t}function Xl(e,t,n){e.$$.on_destroy.push(Jl(t,n))}function Yl(e,t,n,i){if(e){const r=Zl(e,t,n,i)
return e[0](r)}}function Zl(e,t,n,i){return e[1]&&i?Bl(n.ctx.slice(),e[1](i(t))):n.ctx}function ec(e,t,n,i){if(e[2]&&i){const r=e[2](i(n))
if(void 0===t.dirty)return r
if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length)
for(let i=0;i<n;i+=1)e[i]=t.dirty[i]|r[i]
return e}return t.dirty|r}return t.dirty}function tc(e,t,n,i,r,o){if(r){const s=Zl(t,n,i,o)
e.p(s,r)}}function nc(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32
for(let e=0;e<n;e++)t[e]=-1
return t}return-1}function ic(e){const t={}
for(const n in e)t[n]=!0
return t}function rc(e){let t=!1
return function(...n){t||(t=!0,e.call(this,...n))}}function oc(e){return null==e?"":e}function sc(e){return e&&Wl(e.destroy)?e.destroy:jl}function ac(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const lc="undefined"!=typeof window
let cc=lc?()=>window.performance.now():()=>Date.now(),uc=lc?e=>requestAnimationFrame(e):jl
const dc=new Set
function fc(e){dc.forEach((t=>{t.c(e)||(dc.delete(t),t.f())})),0!==dc.size&&uc(fc)}function hc(e,t){e.appendChild(t)}function pc(e){if(!e)return document
const t=e.getRootNode?e.getRootNode():e.ownerDocument
return t&&t.host?t:e.ownerDocument}function gc(e){const t=yc("style")
return t.textContent="/* empty */",function(e,t){hc(e.head||e,t),t.sheet}(pc(e),t),t.sheet}function _c(e,t,n){e.insertBefore(t,n||null)}function vc(e){e.parentNode&&e.parentNode.removeChild(e)}function mc(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function yc(e){return document.createElement(e)}function bc(e){return document.createTextNode(e)}function wc(){return bc(" ")}function kc(){return bc("")}function Sc(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function Ec(e){return function(t){return t.preventDefault(),e.call(this,t)}}function xc(e){return function(t){t.target===this&&e.call(this,t)}}function Pc(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function $c(e,t,n){const i=t.toLowerCase()
i in e?e[i]="boolean"==typeof e[i]&&""===n||n:t in e?e[t]="boolean"==typeof e[t]&&""===n||n:Pc(e,t,n)}function Tc(e){return""===e?null:+e}function Cc(e,t){t=""+t,e.data!==t&&(e.data=t)}function Ic(e,t){e.value=null==t?"":t}function Lc(e,t,n,i){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function Rc(e,t,n){for(let n=0;n<e.options.length;n+=1){const i=e.options[n]
if(i.__value===t)return void(i.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}function Fc(e){const t=e.querySelector(":checked")
return t&&t.__value}let Oc
function Ac(){if(void 0===Oc){Oc=!1
try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){Oc=!0}}return Oc}function Mc(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative")
const n=yc("iframe")
n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1
const i=Ac()
let r
return i?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=Sc(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=Sc(n.contentWindow,"resize",t),t()}),hc(e,n),()=>{(i||r&&n.contentWindow)&&r(),vc(n)}}function Nc(e,t,n){e.classList.toggle(t,!!n)}function jc(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}class Dc{is_svg=!1
e=void 0
n=void 0
t=void 0
a=void 0
constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){var i
this.e||(this.is_svg?this.e=(i=t.nodeName,document.createElementNS("http://www.w3.org/2000/svg",i)):this.e=yc(11===t.nodeType?"TEMPLATE":t.nodeName),this.t="TEMPLATE"!==t.tagName?t:t.content,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)_c(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(vc)}}function Bc(e,t){return new e(t)}const Hc=new Map
let qc,Uc=0
function Gc(e,t,n,i,r,o,s,a=0){const l=16.666/i
let c="{\n"
for(let e=0;e<=1;e+=l){const i=t+(n-t)*o(e)
c+=100*e+`%{${s(i,1-i)}}\n`}const u=c+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length
for(;n--;)t=(t<<5)-t^e.charCodeAt(n)
return t>>>0}(u)}_${a}`,f=pc(e),{stylesheet:h,rules:p}=Hc.get(f)||function(e,t){const n={stylesheet:gc(t),rules:{}}
return Hc.set(e,n),n}(f,e)
p[d]||(p[d]=!0,h.insertRule(`@keyframes ${d} ${u}`,h.cssRules.length))
const g=e.style.animation||""
return e.style.animation=`${g?`${g}, `:""}${d} ${i}ms linear ${r}ms 1 both`,Uc+=1,d}function Wc(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-i.length
r&&(e.style.animation=i.join(", "),Uc-=r,Uc||uc((()=>{Uc||(Hc.forEach((e=>{const{ownerNode:t}=e.stylesheet
t&&vc(t)})),Hc.clear())})))}function zc(e){qc=e}function Vc(){if(!qc)throw new Error("Function called outside component initialization")
return qc}function Qc(e){Vc().$$.on_mount.push(e)}function Jc(e){Vc().$$.after_update.push(e)}function Kc(e){Vc().$$.on_destroy.push(e)}function Xc(){const e=Vc()
return(t,n,{cancelable:i=!1}={})=>{const r=e.$$.callbacks[t]
if(r){const o=jc(t,n,{cancelable:i})
return r.slice().forEach((t=>{t.call(e,o)})),!o.defaultPrevented}return!0}}function Yc(e,t){const n=e.$$.callbacks[t.type]
n&&n.slice().forEach((e=>e.call(this,t)))}const Zc=[],eu=[]
let tu=[]
const nu=[],iu=Promise.resolve()
let ru=!1
function ou(){ru||(ru=!0,iu.then(fu))}function su(){return ou(),iu}function au(e){tu.push(e)}function lu(e){nu.push(e)}const cu=new Set
let uu,du=0
function fu(){if(0!==du)return
const e=qc
do{try{for(;du<Zc.length;){const e=Zc[du]
du++,zc(e),hu(e.$$)}}catch(e){throw Zc.length=0,du=0,e}for(zc(null),Zc.length=0,du=0;eu.length;)eu.pop()()
for(let e=0;e<tu.length;e+=1){const t=tu[e]
cu.has(t)||(cu.add(t),t())}tu.length=0}while(Zc.length)
for(;nu.length;)nu.pop()()
ru=!1,cu.clear(),zc(e)}function hu(e){if(null!==e.fragment){e.update(),Gl(e.before_update)
const t=e.dirty
e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(au)}}function pu(e,t,n){e.dispatchEvent(jc(`${t?"intro":"outro"}${n}`))}const gu=new Set
let _u
function vu(){_u={r:0,c:[],p:_u}}function mu(){_u.r||Gl(_u.c),_u=_u.p}function yu(e,t){e&&e.i&&(gu.delete(e),e.i(t))}function bu(e,t,n,i){if(e&&e.o){if(gu.has(e))return
gu.add(e),_u.c.push((()=>{gu.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}else i&&i()}const wu={duration:0}
function ku(e,t,n,i){let r,o=t(e,n,{direction:"both"}),s=i?0:1,a=null,l=null,c=null
function u(){c&&Wc(e,c)}function d(e,t){const n=e.b-s
return t*=Math.abs(n),{a:s,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function f(t){const{delay:n=0,duration:i=300,easing:f=Dl,tick:h=jl,css:p}=o||wu,g={start:cc()+n,b:t}
t||(g.group=_u,_u.r+=1),"inert"in e&&(t?void 0!==r&&(e.inert=r):(r=e.inert,e.inert=!0)),a||l?l=g:(p&&(u(),c=Gc(e,s,t,i,n,f,p)),t&&h(0,1),a=d(g,i),au((()=>pu(e,t,"start"))),function(e){let t
0===dc.size&&uc(fc),new Promise((n=>{dc.add(t={c:e,f:n})}))}((t=>{if(l&&t>l.start&&(a=d(l,i),l=null,pu(e,a.b,"start"),p&&(u(),c=Gc(e,s,a.b,a.duration,0,f,o.css))),a)if(t>=a.end)h(s=a.b,1-s),pu(e,a.b,"end"),l||(a.b?u():--a.group.r||Gl(a.group.c)),a=null
else if(t>=a.start){const e=t-a.start
s=a.a+a.d*f(e/a.duration),h(s,1-s)}return!(!a&&!l)})))}return{run(e){Wl(o)?(uu||(uu=Promise.resolve(),uu.then((()=>{uu=null}))),uu).then((()=>{o=o({direction:e?"in":"out"}),f(e)})):f(e)},end(){u(),a=l=null}}}function Su(e){return void 0!==e?.length?e:Array.from(e)}function Eu(e,t){e.d(1),t.delete(e.key)}function xu(e,t){bu(e,1,1,(()=>{t.delete(e.key)}))}function Pu(e,t,n,i,r,o,s,a,l,c,u,d){let f=e.length,h=o.length,p=f
const g={}
for(;p--;)g[e[p].key]=p
const _=[],v=new Map,m=new Map,y=[]
for(p=h;p--;){const e=d(r,o,p),i=n(e)
let a=s.get(i)
a?y.push((()=>a.p(e,t))):(a=c(i,e),a.c()),v.set(i,_[p]=a),i in g&&m.set(i,Math.abs(p-g[i]))}const b=new Set,w=new Set
function k(e){yu(e,1),e.m(a,u),s.set(e.key,e),u=e.first,h--}for(;f&&h;){const t=_[h-1],n=e[f-1],i=t.key,r=n.key
t===n?(u=t.first,f--,h--):v.has(r)?!s.has(i)||b.has(i)?k(t):w.has(r)?f--:m.get(i)>m.get(r)?(w.add(i),k(t)):(b.add(r),f--):(l(n,s),f--)}for(;f--;){const t=e[f]
v.has(t.key)||l(t,s)}for(;h;)k(_[h-1])
return Gl(y),_}function $u(e,t,n){const i=e.$$.props[t]
void 0!==i&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function Tu(e){e&&e.c()}function Cu(e,t,n){const{fragment:i,after_update:r}=e.$$
i&&i.m(t,n),au((()=>{const t=e.$$.on_mount.map(ql).filter(Wl)
e.$$.on_destroy?e.$$.on_destroy.push(...t):Gl(t),e.$$.on_mount=[]})),r.forEach(au)}function Iu(e,t){const n=e.$$
null!==n.fragment&&(!function(e){const t=[],n=[]
tu.forEach((i=>-1===e.indexOf(i)?t.push(i):n.push(i))),n.forEach((e=>e())),tu=t}(n.after_update),Gl(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Lu(e,t,n,i,r,o,s=null,a=[-1]){const l=qc
zc(e)
const c=e.$$={fragment:null,ctx:[],props:o,update:jl,not_equal:r,bound:Ul(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:Ul(),dirty:a,skip_bound:!1,root:t.target||l.$$.root}
s&&s(c.root)
let u=!1
if(c.ctx=n?n(e,t.props||{},((t,n,...i)=>{const o=i.length?i[0]:n
return c.ctx&&r(c.ctx[t],c.ctx[t]=o)&&(!c.skip_bound&&c.bound[t]&&c.bound[t](o),u&&function(e,t){-1===e.$$.dirty[0]&&(Zc.push(e),ou(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n})):[],c.update(),u=!0,Gl(c.before_update),c.fragment=!!i&&i(c.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target)
c.fragment&&c.fragment.l(e),e.forEach(vc)}else c.fragment&&c.fragment.c()
t.intro&&yu(e.$$.fragment),Cu(e,t.target,t.anchor),fu()}zc(l)}class Ru{$$=void 0
$$set=void 0
$destroy(){Iu(this,1),this.$destroy=jl}$on(e,t){if(!Wl(t))return jl
const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[])
return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t
this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Fu=[]
function Ou(e,t=jl){let n
const i=new Set
function r(t){if(zl(e,t)&&(e=t,n)){const t=!Fu.length
for(const t of i)t[1](),Fu.push(t,e)
if(t){for(let e=0;e<Fu.length;e+=2)Fu[e][0](Fu[e+1])
Fu.length=0}}}function o(t){r(t(e))}return{set:r,update:o,subscribe:function(s,a=jl){const l=[s,a]
return i.add(l),1===i.size&&(n=t(r,o)||jl),s(e),()=>{i.delete(l),0===i.size&&n&&(n(),n=null)}}}}function Au(e,t,n){const i=!Array.isArray(e),r=i?[e]:e
if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const o=t.length<2
return s=(e,n)=>{let s=!1
const a=[]
let l=0,c=jl
const u=()=>{if(l)return
c()
const r=t(i?a[0]:a,e,n)
o?e(r):c=Wl(r)?r:jl},d=r.map(((e,t)=>Jl(e,(e=>{a[t]=e,l&=~(1<<t),s&&u()}),(()=>{l|=1<<t}))))
return s=!0,u(),function(){Gl(d),c(),s=!1}},{subscribe:Ou(n,s).subscribe}
var s}const Mu=Ou("")
function Nu(e){const t=e-1
return t*t*t+1}function ju(e,{delay:t=0,duration:n=400,easing:i=Dl}={}){const r=+getComputedStyle(e).opacity
return{delay:t,duration:n,easing:i,css:e=>"opacity: "+e*r}}function Du(e,{delay:t=0,duration:n=400,easing:i=Nu,x:r=0,y:o=0,opacity:s=0}={}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-s),[d,f]=ac(r),[h,p]=ac(o)
return{delay:t,duration:n,easing:i,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*d}${f}, ${(1-e)*h}${p});\n\t\t\topacity: ${l-u*t}`}}function Bu(e,{delay:t=0,duration:n=400,easing:i=Nu,axis:r="y"}={}){const o=getComputedStyle(e),s=+o.opacity,a="y"===r?"height":"width",l=parseFloat(o[a]),c="y"===r?["top","bottom"]:["left","right"],u=c.map((e=>`${e[0].toUpperCase()}${e.slice(1)}`)),d=parseFloat(o[`padding${u[0]}`]),f=parseFloat(o[`padding${u[1]}`]),h=parseFloat(o[`margin${u[0]}`]),p=parseFloat(o[`margin${u[1]}`]),g=parseFloat(o[`border${u[0]}Width`]),_=parseFloat(o[`border${u[1]}Width`])
return{delay:t,duration:n,easing:i,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*s};${a}: ${e*l}px;padding-${c[0]}: ${e*d}px;padding-${c[1]}: ${e*f}px;margin-${c[0]}: ${e*h}px;margin-${c[1]}: ${e*p}px;border-${c[0]}-width: ${e*g}px;border-${c[1]}-width: ${e*_}px;`}}function Hu(e){let t,n,i,r,o,s,a
return{c(){t=yc("div"),n=yc("p"),i=bc(e[0]),Pc(n,"class","svelte-1c416no"),Pc(t,"role","alert"),Pc(t,"class","svelte-1c416no"),Lc(t,"transform",e[2])},m(r,l){_c(r,t,l),hc(t,n),hc(n,i),o=!0,s||(a=Sc(t,"click",e[4]),s=!0)},p(e,n){(!o||1&n)&&Cc(i,e[0]),4&n&&Lc(t,"transform",e[2])},i(e){o||(e&&au((()=>{o&&(r||(r=ku(t,Du,{delay:250,duration:300,x:0,y:-100,opacity:.5},!0)),r.run(1))})),o=!0)},o(e){e&&(r||(r=ku(t,Du,{delay:250,duration:300,x:0,y:-100,opacity:.5},!1)),r.run(0)),o=!1},d(e){e&&vc(t),e&&r&&r.end(),s=!1,a()}}}function qu(e){let t,n=e[1]&&Hu(e)
return{c(){n&&n.c(),t=kc()},m(e,i){n&&n.m(e,i),_c(e,t,i)},p(e,[i]){e[1]?n?(n.p(e,i),2&i&&yu(n,1)):(n=Hu(e),n.c(),yu(n,1),n.m(t.parentNode,t)):n&&(vu(),bu(n,1,1,(()=>{n=null})),mu())},i(e){yu(n)},o(e){bu(n)},d(e){e&&vc(t),n&&n.d(e)}}}function Uu(e,t,n){let i
Xl(e,Mu,(e=>n(0,i=e)))
let{ms:r=3e3}=t,o=!1,s=0,a=""
const l=(e,t)=>{clearTimeout(s),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
n(2,a=`translate(${t}px, ${e.offsetTop}px)`),n(1,o=!0)}(),t>0&&(s=setTimeout((()=>{var e
n(1,o=!1),i="",e=i,Mu.set(e)}),t))):n(1,o=!1)}
Kc((()=>clearTimeout(s)))
return e.$$set=e=>{"ms"in e&&n(3,r=e.ms)},e.$$.update=()=>{9&e.$$.dirty&&l(i,r)},[i,o,a,r,()=>{n(1,o=!1)}]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4")
class Gu extends Ru{constructor(e){super(),Lu(this,e,Uu,qu,zl,{ms:3})}}let Wu
function zu(e){e&&(!function(){if(!Wu)Wu=!0,new Gu({target:document.body})}(),Mu.set(e))}function Vu(e,t){return Array.from(e,t)}function Qu(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function Ju(e,t){return Vu(Qu(e,t))}function Ku(e){return e.trim()}function Xu(e){const t=n(e)
if(Za(t))return Ku(t)}function Yu(e,t){return Xu(t).includes(e)}function Zu(e,...t){return(...n)=>e(...t,...n)}let ed=0,td=0,nd=0
function id(){return ed||(ed=t("pCL")),ed}function rd(){return td||(td=t("pCC")),td}function od(){const e=Ju("a",id()).filter(function(e){return Zu(Yu,e)}("message"))
e.length&&async function(){const e=new Audio(Xa("defaultMessageSound"))
try{await e.play()}catch(e){zu("Message Sound Not Allowed")}}()}function sd(e,t,n,i){var r
bl(e,t,n,{once:!0,...(r=i,Ya(r)?{capture:r}:r)})}let ad=0,ld=0,cd=0,ud=0,dd=0,fd=0
function hd(e){ld=e.clientX,cd=e.clientY}function pd(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(ad,null).transform)
ud=e[0]-ld,dd=e[1]-cd}function gd(e){e.clientX===ld&&e.clientY===cd||(ad.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+ud).toString()}, ${(e.clientY+dd).toString()})`,hd(e))}function _d(e){return function(e){const t=performance.now()
t-fd>16&&(gd(e),fd=t)}(e),e.preventDefault(),!1}function vd(e){return gd(e),function(e,t,n,i){e instanceof EventTarget&&e.removeEventListener(t,n,i)}(document.body,"dragover",_d),e.preventDefault(),!1}function md(e,t){!function(e,t){ad=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),hd(t),pd(),fd=0,t.dataTransfer.setData("text/plain",""),bl(document.body,"dragover",_d),sd(document.body,"drop",vd)}function yd(e,t){e.draggable=!0,bl(e,"dragstart",Zu(md,t))}function bd(e){return String(e).replaceAll(" ","_")}const wd={}
function kd(e,t,n){if(!e)return
const i=function(e,t){let n=bd(e)
return t&&(n+=`__${bd(t)}`),n}(e,t),r=function(e,t){let n=e
return t&&(n+=`__${bd(t)}`),n}(i,n)
wd[r]||(wd[r]=!0,No(i,function(e){return e?{eventLabel:e}:null}(n)))}let Sd=0
function Ed(e){const t=l(/\sguildId: (?<id>\d{1,6}),/,n(e))
t&&(Sd=Number(t))}function xd(){return Sd||Ju("script",document.body).forEach(Ed),Sd}function Pd(e){return Object.entries(e)}function $d(e,t,[n,i]){ol(i)&&null!==i?e(t[n],i):t[n]=i}function Td(e,t){Pd(t).forEach(Zu($d,Td,e))}function Cd(e,t){const n=document.createElement(e)
return t&&Td(n,t),n}function Id(e){return Cd("div",e)}function Ld(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function Rd(e,t){return Vu(Ld(e,t))}function Fd(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function Od(e,t){t instanceof Element&&(t.innerHTML=String(e))}const Ad={id:"content",style:{display:"none"}},Md={width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}
function Nd(e){let n=t("content")
n?Od("",n):(n=Id(Ad),Fd(document.body,n)),$(n).dialog(Md),Rd("ui-dialog-titlebar-close").forEach((e=>e.blur())),e(n)}async function jd(e){(await e).default()}function Dd(){jd(import("./buffLog-rKY16D1B.js"))}function Bd(){jd(import("./combatLog-DOSHUs0B.js"))}function Hd(){jd(import("./creatureLog-BnaAFhTN.js"))}function qd(){jd(import("./fsboxlog-DP9qwhQj.js"))}function Ud(){jd(import("./guildLog-C4X_7a_A.js"))}function Gd(){jd(import("./guildTracker-BSbvvQrB.js"))}async function Wd(e){(await import("./injectAuctionSearch-A4BB3rdt.js")).default(e)}async function zd(e){(await import("./findBuffs-DgHJV7NM.js")).injectFindBuffs(e)}async function Vd(e){(await import("./findBuffs-DgHJV7NM.js")).injectFindOther(e)}async function Qd(e){(await import("./injectOnlinePlayers-0PsCzMTs.js")).default(e)}function Jd(){jd(import("./potReport-BClzlIJb.js"))}function Kd(){jd(import("./quickExtract-BRl1Xn65.js"))}function Xd(){jd(import("./quickLinksManager-vm1WCxiU.js"))}async function Yd(e){(await import("./quickWear-sulBb6F-.js")).default(e)}function Zd(){jd(import("./recipeMgr-DuAv88Z7.js"))}function ef(){jd(import("./reliclist-BQbzxWYV.js"))}function tf(){jd(import("./superelite-CCpgobYC.js"))}function nf(e){return new Promise((t=>{setTimeout(t,e)}))}function rf(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class of extends Error{constructor([e,t,n,i],...r){super(function(e,t,n,i){const r=`${t.status} ${t.statusText} - `
if(t.statusText===i.toString())return r+rf(e)
const o=`${r+n} ${i} - ${rf(e)}`
return"parsererror"===n?`${o} - ${t.responseText}`:o}(e,t,n,i),...r),Error.captureStackTrace&&Error.captureStackTrace(this,of),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=i}}function sf(e){bl(window,"beforeunload",(()=>e.abort()))}const af=900
let lf=0
const cf=5
let uf=0
async function df(){uf<cf-$.active&&performance.now()-lf>=af?(uf=cf-$.active,lf=performance.now()):await nf(100)}async function ff(e,t=10){await async function(){for(;uf<1;)await df()
uf-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=sf,$.ajax(t).fail(((e,t,n)=>{e.textStatus=t,e.errorThrown=n}))}(e)}catch(n){if(t&&n.status>500)return ff(e,t-1)
!function(e,t){if(![0,500,503].includes(t.status))throw new of([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}function hf(e){return Td(e,{url:vs,data:{no_mobile:1}}),ff(e)}async function pf(e){return sl(await hf({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function gf(e){return pf({cmd:"export",...e})}function _f(){return gf({inc_tagged:"1",subcmd:"guild_store"})}function vf(e){return Cd("a",e)}function mf(e){e instanceof Element&&e.click()}function yf(e,t){const n=URL.createObjectURL(e),i=vf({download:t,href:n,style:{display:"none"}})
Fd(document.body,i),mf(i),document.body.removeChild(i),setTimeout((()=>{URL.revokeObjectURL(n)}),0)}async function bf(e,t){return sl(await ff({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function wf(e){return bf(e,{method:"POST"})}function kf(e,t){const n=[]
for(let i=0;i<t.length;i+=e)n.push(t.slice(i,i+e))
return n}let Sf,Ef=null
function xf(){const e=t("holdtext")
if(e&&!Ef){const t=l(/fallensword.com\/\?ref=(?<id>\d+)/,n(e))
t&&(Ef=Number(t))}return Ef}function Pf(e){return new Promise(((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)}))}function $f(){return Sf||(Sf=function(e,t){const n=indexedDB.open(e)
n.onupgradeneeded=()=>n.result.createObjectStore(t)
const i=Pf(n)
return(e,n)=>i.then((i=>n(i.transaction(t,e).objectStore(t))))}("keyval-store","keyval")),Sf}const Tf=e=>{e&&"NotFoundError"!==e.name&&pl.notify(e)}
async function Cf(e,t){try{return await function(e,t=$f()){return t("readonly",(t=>Pf(t.get(e))))}(e,t)}catch(e){Tf(e)}}async function If(e,t,n){try{return await function(e,t,n=$f()){return n("readwrite",(n=>(n.put(t,e),Pf(n.transaction))))}(e,t,n)}catch(e){Tf(e)}}const Lf=({folder_id:e})=>-2!==(e??-2),Rf=({folder_id:e})=>-2===e,Ff=({player_id:e})=>-1!==(e??-1),Of=({player_id:e})=>e,Af=({player_id:e})=>-1===e,Mf=([e,t,n])=>kf(20,e).map((e=>[e,t,n])),Nf=e=>({inv_id:t})=>t===e.inv_id,jf=(e,t)=>e.attributes.find((({id:e})=>e===t))?.value??0,Df=(e,t)=>({...t,armor:jf(e,2),attack:jf(e,0),damage:jf(e,4),defense:jf(e,1),hp:jf(e,3),set_name:e.set_name??""}),Bf=(e,t)=>t.forge||t.stats?.set_name,Hf=e=>e?.s?e.r.items:[],qf=e=>[[e.filter(Lf),xf,0],[e.filter(Rf),xf,1],[e.filter(Ff),Of,7],[e.filter(Af),xf,4]].flatMap(Mf)
function Uf(e){return function(){const t=this.data(),n=e.find(Nf(t))
n?.attributes&&(t.stats=Df(n,t.stats),this.invalidate())}}const Gf=async()=>await Cf(`fsh_${yl.subcmd}_cache`)??[],Wf=e=>If(`fsh_${yl.subcmd}_cache`,e),zf=e=>t=>e.every((e=>e.inv_id!==t.inv_id))
async function Vf(e,t,n){const i=await(r={item_id:e.map((({item_id:e})=>e)),inv_id:e.map((({inv_id:e})=>e)),p:e.map(t),t:e.map((()=>n))},wf({cmd:"fetchitem",compare:0,...r}))
var r
return i?.s&&(i.r.items=((e,t)=>t.map(((t,n)=>({...t,inv_id:e[n].inv_id}))))(e,i.r.items),await async function(e){const t=(await Gf()).filter(zf(e))
await Wf(t.concat(e))}(i.r.items)),i}const Qf=(e,t)=>{return t.filter((n=Vu(e.data()),e=>n.some((t=>e.inv_id===t.inv_id))))
var n}
async function Jf(e){const t=e.rows(Bf),n=await async function(e){const t=await Gf(),n=Qf(e,t)
return await Wf(n),n}(t)
t.every(Uf(n))}async function Kf(e){const t=new DataTable(e)
await Jf(t),t.draw()}const Xf=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],Yf=e=>{return[...Xf(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??"",t?.set_attack??"",t?.set_defense??"",t?.set_armor??"",t?.set_hp??"",t?.set_damage??""]),e.cached].join(",")
var t}
function Zf(e){return()=>Nd(e)}var eh=[{section:"Character",menu:[{label:"Buff Log",fn:Dd},{label:"Combat Log",fn:Bd},{label:"Creature Log",fn:Hd},{label:"Recipe Manager",fn:Zd},{label:"Quick Links",fn:Xd},{label:"Inventory Manager",href:`${Rs}invmanagernew`}]},{section:"Actions",menu:[{label:"Find Buffs",fn:Zf(zd)},{label:"Find Other",fn:Zf(Vd)},{label:"Online Players",fn:Zf(Qd)},{label:"AH Quick Search",fn:Zf(Wd)}]},...xd()?[{section:"Guild",menu:[{label:"Guild Inventory",href:`${Rs}guildinvmgr`},{label:"New Guild Log",fn:Ud},{label:"Merc Hunter",fn:function(){jd(import("./mercs-llQwPhW1.js"))}},{label:"Pot Report",fn:Jd},{label:"Guild Tracker",fn:Gd}]}]:[],{section:"Extra",menu:[{label:"Quick Extract",fn:Kd},{label:"Quick Wear",fn:Zf(Yd)},{label:"FS Box Log",fn:qd},{label:"SE Tracker",fn:tf}]},...Xa("betaOptIn")&&xd()?[{section:"Beta Features",menu:[{label:"Relic List",fn:ef,beta:!0},{label:"GS Export",fn:async function(){if(!xd())return
const e=await _f(),t=await Cf("fsh_guildinvmgr_cache")??[],n=e.items.map((e=>t=>{const n=e.find((({inv_id:e})=>e===t.inv_id))
return n?.attributes?{...t,stats:{...t.stats,armor:jf(n,2),attack:jf(n,0),damage:jf(n,4),defense:jf(n,1),hp:jf(n,3),set_name:n.set_name??"",...n.set_name&&{set_armor:jf(n.set_bonuses,2)},...n.set_name&&{set_attack:jf(n.set_bonuses,0)},...n.set_name&&{set_damage:jf(n.set_bonuses,4)},...n.set_name&&{set_defense:jf(n.set_bonuses,1)},...n.set_name&&{set_hp:jf(n.set_bonuses,3)}},cached:!0}:{...t,cached:!1}})(t))
var i
yf((i=`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name,set_attack,set_defense,set_armor,set_hp,set_damage,cached\n${(e=>e.map(Yf).join("\n"))(n)}\n`,new Blob([i],{type:"text/csv"})),"gs_export.csv")},beta:!0},{label:"Who's Got What",fn:function(){jd(import("./whosGotWhat-BUdz2IKc.js"))},beta:!0}]}]:[],{section:"FSH developer quick links",menu:[{playerId:1963510,playerName:"PointyHair"},{playerId:1674838,playerName:"Lusterless"}]}]
function th(e,t,n){const i=e.slice()
return i[7]=t[n],i}function nh(e,t,n){const i=e.slice()
return i[10]=t[n],i}function ih(e){let t,n,i,r,o
function s(){return e[5](e[10])}return{c(){t=yc("button"),t.textContent="PM",n=wc(),i=yc("a"),i.textContent=`${e[10].playerName}`,Pc(t,"type","button"),Pc(t,"class","helperDevBtn svelte-8sy7i5"),Pc(i,"href",$s+"menuItem.playerId"),Pc(i,"class","svelte-8sy7i5")},m(e,a){_c(e,t,a),_c(e,n,a),_c(e,i,a),r||(o=Sc(t,"click",s),r=!0)},p(t,n){e=t},d(e){e&&(vc(t),vc(n),vc(i)),r=!1,o()}}}function rh(e){let t,n,i
function r(){return e[4](e[10])}return{c(){t=yc("a"),t.textContent=`${e[10].label}`,Pc(t,"href",e[10].href),Pc(t,"class","svelte-8sy7i5")},m(e,o){_c(e,t,o),n||(i=Sc(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&vc(t),n=!1,i()}}}function oh(e){let t,n,i
function r(){return e[3](e[10])}return{c(){t=yc("button"),t.textContent=`${e[10].label}`,Pc(t,"type","button"),Pc(t,"class","svelte-8sy7i5")},m(e,o){_c(e,t,o),n||(i=Sc(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&vc(t),n=!1,i()}}}function sh(e){let t,n
let i=function(e,t){return e[10].fn?oh:e[10].href?rh:e[10].playerName?ih:void 0}(e),r=i&&i(e),o=e[10].beta&&function(e){let t
return{c(){t=yc("sup"),t.textContent="beta",Pc(t,"class","fshRed")},m(e,n){_c(e,t,n)},d(e){e&&vc(t)}}}()
return{c(){t=yc("li"),r&&r.c(),n=wc(),o&&o.c()},m(e,i){_c(e,t,i),r&&r.m(t,null),hc(t,n),o&&o.m(t,null)},p(e,t){r&&r.p(e,t)},d(e){e&&vc(t),r&&r.d(),o&&o.d()}}}function ah(e){let t,n,i,r,o=Su(e[7].menu),s=[]
for(let t=0;t<o.length;t+=1)s[t]=sh(nh(e,o,t))
return{c(){t=yc("h2"),t.textContent=`${e[7].section}`,n=wc(),i=yc("ul")
for(let e=0;e<s.length;e+=1)s[e].c()
r=wc(),Pc(t,"class","svelte-8sy7i5")},m(e,o){_c(e,t,o),_c(e,n,o),_c(e,i,o)
for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(i,null)
hc(i,r)},p(e,t){if(7&t){let n
for(o=Su(e[7].menu),n=0;n<o.length;n+=1){const a=nh(e,o,n)
s[n]?s[n].p(a,t):(s[n]=sh(a),s[n].c(),s[n].m(i,r))}for(;n<s.length;n+=1)s[n].d(1)
s.length=o.length}},d(e){e&&(vc(t),vc(n),vc(i)),mc(s,e)}}}function lh(e){let t,n=Su(eh),i=[]
for(let t=0;t<n.length;t+=1)i[t]=ah(th(e,n,t))
return{c(){for(let e=0;e<i.length;e+=1)i[e].c()
t=kc()},m(e,n){for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,n)
_c(e,t,n)},p(e,[r]){if(7&r){let o
for(n=Su(eh),o=0;o<n.length;o+=1){const s=th(e,n,o)
i[o]?i[o].p(s,r):(i[o]=ah(s),i[o].c(),i[o].m(t.parentNode,t))}for(;o<i.length;o+=1)i[o].d(1)
i.length=n.length}},i:jl,o:jl,d(e){e&&vc(t),mc(i,e)}}}function ch(e){const t=Xc()
function n(e){kd("helperMenu",e)}function i(e,i){rl(i)&&(n(e),t("toggle"),i())}function r(e){t("toggle"),n("sendMsg"),window.openQuickMsgDialog(e)}return[n,i,r,e=>i(e.label,e.fn),e=>n(e.label),e=>r(e.playerName)]}class uh extends Ru{constructor(e){super(),Lu(this,e,ch,lh,zl,{})}}function dh(e){let t,n,i,r
return n=new uh({}),n.$on("toggle",e[4]),{c(){t=yc("div"),Tu(n.$$.fragment),Pc(t,"class","modal svelte-gt76l6")},m(e,i){_c(e,t,i),Cu(n,t,null),r=!0},p:jl,i(e){r||(yu(n.$$.fragment,e),e&&au((()=>{r&&(i||(i=ku(t,ju,{duration:100},!0)),i.run(1))})),r=!0)},o(e){bu(n.$$.fragment,e),e&&(i||(i=ku(t,ju,{duration:100},!1)),i.run(0)),r=!1},d(e){e&&vc(t),Iu(n),e&&i&&i.end()}}}function fh(e){let t,n,i,r,o,s,a=e[1]&&dh(e)
return{c(){t=yc("div"),n=yc("button"),n.textContent="Helper Menu",i=wc(),a&&a.c(),Pc(n,"type","button"),Pc(n,"class","toggle svelte-gt76l6"),Nc(n,"helper-menu-move",e[3]),Pc(t,"class","helper-menu svelte-gt76l6"),Nc(t,"helper-menu-fixed",e[2])},m(l,c){_c(l,t,c),hc(t,n),hc(t,i),a&&a.m(t,null),e[5](t),r=!0,o||(s=Sc(n,"click",e[4]),o=!0)},p(e,[n]){e[1]?a?(a.p(e,n),2&n&&yu(a,1)):(a=dh(e),a.c(),yu(a,1),a.m(t,null)):a&&(vu(),bu(a,1,1,(()=>{a=null})),mu())},i(e){r||(yu(a),r=!0)},o(e){bu(a),r=!1},d(n){n&&vc(t),a&&a.d(),e[5](null),o=!1,s()}}}function hh(e,t,n){const i=Xa("keepHelperMenuOnScreen"),r=Xa("draggableHelperMenu")
let o=0
Qc((()=>{r&&yd(o)}))
let s=!1
return[o,s,i,r,function(){n(1,s=!s)},function(e){eu[e?"unshift":"push"]((()=>{o=e,n(0,o)}))}]}class ph extends Ru{constructor(e){super(),Lu(this,e,hh,fh,zl,{})}}function gh(){const e=al(".mainbody")
e&&function(e,t){new ph({target:t.parentElement,props:{props:e}})}({},e)}function _h(e){return(new DOMParser).parseFromString(e,"text/html")}function vh(e){return hf({data:e})}async function mh(e){const t=await vh(e)
if(t)return _h(t)}function yh(e){const n=t("info-msg",e)
if(n){const e=n.innerHTML
return e?e.replace(/<br.*/,""):""}}let bh=0
const wh=()=>bh
function kh(){bh=Xa("sendGoldonWorld")}async function Sh(){if(!wh())return
kd("NewMap","doSendGold")
const e=await mh({cmd:"trade",subcmd:"sendgold",xc:window.ajaxXC,target_username:$("#HelperSendTo").html(),gold_amount:$("#HelperSendAmt").html().replace(/[^\d]/g,"")})
e&&function(e){const t=yh(e)
"You successfully sent gold!"!==t&&""!==t||(nl("currentGoldSentTotal",parseInt(Xa("currentGoldSentTotal"),10)+parseInt(Xa("goldAmount"),10)),GameData.fetch(_a))}(e)}function Eh(e){window.location=e}function xh(e){Xa("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function Ph(e){kd("keyHandler",e)}function $h(e){return e?.toLowerCase?.()}function Th(e,t){return $h(e)<$h(t)?-1:$h(e)>$h(t)?1:0}function Ch(e){return bf(e,{method:"GET"})}function Ih(e){return Ch({cmd:"profile",...e})}async function Lh(){const e=await Ih({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort(((e,t)=>Th(e.name,t.name)))}:e}function Rh(e,t,...n){return e(...n)}function Fh(){return Rh(Lh)}const Oh=[e=>e?.s,(e,t)=>e.r?.length>t]
async function Ah(e){const t=await Fh()
if(((e,t)=>Oh.every((n=>n(t,e))))(e,t)){Ph("changeCombatSet")
const n=t.r[e].id
xh("2"),Eh(`${Ps+bs}managecombatset&submit=Use&combatSetId=${n}`)}}function Mh(e,n){t("worldPage")||(Ph(e),Eh(n))}function Nh(){yl.enableMaxGroupSizeToJoin?Eh(qs):Eh(Hs)}function jh(){Ph("logPage"),xh("2"),Eh(Es)}function Dh(e){const t=al(`#pCC input[value="${e}"]`)
t&&(Ph("movePage"),mf(t))}const Bh=[["!",Ah,0],["@",Ah,1],['"',Ah,1],["#",Ah,2],["£",Ah,2],["$",Ah,3],["%",Ah,4],["^",Ah,5],["&",Ah,6],["*",Ah,7],["(",Ah,8],["0",function(){Mh("toWorld",Us)}],["<",Dh,"<"],[">",Dh,">"],["G",function(){Ph("createGroup"),xh("4"),Eh(`${js}create`)}],["L",jh],["b",function(){Ph("backpack"),xh("2"),Eh(Ts)}],["g",function(){Ph("gotoGuild"),xh("4"),Eh(`${As}manage`)}],["j",function(){Ph("joinAllGroup"),xh("4"),Nh()}],["l",jh],["p",function(){Ph("profile"),xh("2"),Eh(Ps)}],["r",function(){Mh("doRepair",`${zs+bs}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in yl&&!yl.dialogIsClosed()||(Ph("insertQuickWear"),Nd(Yd))}],["y",Sh]]
const Hh=[e=>["HTML","BODY"].every((t=>e.target.tagName!==t)),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function qh(e){var t;(t=e,Hh.some((e=>e(t))))||function(e){const t=Bh.find((([t])=>e===t))
t&&t[1](t[2])}(e.key)}function Uh(){bl(document,"keyup",qh)}function Gh(e,t){return Xu(t)===e}function Wh(e){return Zu(Gh,e)}function zh(e,t,n){bl(e,"click",t,n)}function Vh(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function Qh(e,t){return Vu(Vh(e,t))}function Jh(e){zh(e,(()=>{kd("chrome","Game Help link")})),Od(`<a href="${ys}settings">Game Help</a>`,e)}function Kh(){Qh("#pCR h3").filter(Wh("Game Help")).forEach(Jh)}function Xh(e){yl[e]=Xa(e)}function Yh(e,t){if(t instanceof Element)return t.closest(e)}function Zh(e){e?.classList&&e.classList.add("fshHide")}function ep(e){const n=Yh("a",e.target)
n?.getAttribute("href")===Ms&&(kd("useNewGuildLog","Alter Href"),e.preventDefault(),Ud(),Zh(t("notification-guild-log")))}function tp(){return yl.huntingMode&&window.realmKeyHandler}function np(e){e.forEach((e=>Al(3,e)))}function ip(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function rp(){return rl(window.jQuery)}function op(){return!rp()}var sp=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function ap(e){return function(e){return-1!==e&&0===al(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?(kd("accordion","collapse"),-1):e}const lp=(e,t,n)=>$(e).data(`${n}${t}`)
function cp(e,t,n){return new Promise((i=>{const r=lp(e,t,n)
r?i(r):function(e,t,n,i){$(e).on(`${$h(t)}create`,(()=>{i(lp(e,t,n))}))}(e,t,n,i)}))}const up=[[e=>!ol(e),()=>wl("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>wl("$('#nav').data('hcsNav').heights does not exist")]]
async function dp(){const e=t("nav"),n=await cp(e,"Nav","hcs")
return function(e){const t=up.find((([t])=>t(e)))
return!t||(t[1](),!1)}(n)?{theNav:e,myNav:n}:{}}function fp(){!function(){const e=Xa("lastActiveQuestPage")
Xa("storeLastQuestPage")&&e.length>0&&(t("nav-character-questbook").href=e)}(),function(){const e=Xa("lastScavPage")
Xa("storeLastScavPage")&&e.length>0&&(t("nav-actions-artisanship-scavenging").href=e)}()}async function hp(){const{theNav:e,myNav:t}=await dp()
e&&t&&(fp(),async function(e,t){const n=sp.map((e=>[e,Xa(e)]))
n.some((([,e])=>e))&&(await import("./injectItems-es9yzqi8.js")).default(e,t,ip(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,ap(n))}}(t))}function pp(e,t){return t?.classList?.contains(e)}function gp(e,t){t instanceof Node&&(t.textContent=String(e))}let _p
function vp(){return _p||(_p=t("quickMessageDialog")),_p}let mp,yp=0
function bp(e){(function(){if(!yp){const e=Ld("validateTips",vp())
1===e.length&&([yp]=e)}return yp})()&&gp(kl(e,""),yp)}function wp(){return mp||(mp=t("quickMsgDialog_msg"),mp.maxLength=512),mp}let kp,Sp=null,Ep=0,xp=0
function Pp(e){"Enter"!==e.key||e.shiftKey||(kd("messaging","sendOnEnter"),e.preventDefault(),function(){if(!xp){const e=$(vp()).dialog("option","buttons")
xp=e["Send Message"]}return xp}()())}function $p(){ts(Sp)&&(Sp=Xa("enterForSendMessage")),Sp&&!Ep&&(bl(wp(),"keypress",Pp),Ep=!0)}function Tp(e,t){return pp(t[0],e)}function Cp(e,t,n){const{target:i}=n,r=t.find(Zu(e,i))
if(r)return r[1](i)}function Ip(e){return Zu(Cp,Tp,e)}function Lp(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function Rp(e,t){Lp(e,"beforeend",t)}function Fp(e,t){if("string"==typeof t){const e=a(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function Op(e){const t=Xa(e)
if(t)return sl(t,Fp)}function Ap(e,t,n){return JSON.stringify(e,t,n)}function Mp(e,t){nl(e,Ap(t))}let Np=0,jp=0,Dp=0
function Bp(e,t,n){const i=jp.insertRow(e)
let r=i.insertCell(-1)
Rp(r,t),r=i.insertCell(-1),Rp(r,n)}function Hp(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function qp(e,t){Bp(e,Hp("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const Up=[["del-button",function(e){kd("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
jp.deleteRow(t),Np.splice(t-2,1),Mp("quickMsg",Np)}],["add-button",function(e){kd("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){qp(e.parentNode.parentNode.rowIndex,n),t.value="",Np.push(n),Mp("quickMsg",Np)}}],["add-template",function(e){kd("messaging","insertTemplate"),wp().value+=`${n(e).replace(/\{playername\}/g,kp)}`}]]
function Gp(e){qp(-1,e)}function Wp(){Xa("enableMessageTemplates")&&!Dp&&(zh((jp||(jp=vp().lastElementChild),jp),Ip(Up)),(Np||(Np=Op("quickMsg")),Np).forEach(Gp),Bp(-1,Hp("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),Dp=!0)}function zp(e,n,i){const r=vp()
pp("ui-dialog-content",r)&&(!function(e){kp=e,gp(e,t("quickMsgDialog_targetUsername"))}(e),function(e){const t=wp()
t.value=kl(e,""),t.disabled=!1}(n),bp(i),Wp(),$p(),$(r).dialog("open"))}function Vp(e){const n=t(e)
n&&(n.classList.add("pCR"),Fd(id(),n))}function Qp(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function Jp(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?Qp(t,e.firstChild):Fd(e,t)}(e,t)}function Kp(e){const n=t(e)
n&&Jp((nd||(nd=t("pCR")),nd),n)}const Xp=[function(){Xa("moveGuildList")&&Kp("minibox-guild")},function(){Xa("moveOnlineAlliesList")&&Kp("minibox-allies")},function(){Xa("moveXmasBox")&&Vp("minibox-xmas")},function(){Xa("moveDailyQuest")&&Vp("minibox-daily-quest")},function(){Xa("moveFSBox")&&Vp("minibox-fsbox")},function(){(yl.enableAllyOnlineList||yl.enableEnemyOnlineList)&&jd(import("./allyEnemy-BPvHn_z2.js"))},function(){(yl.enableWantedList||yl.enableActiveBountyList)&&jd(import("./activeWantedBounties-4mZYacGw.js"))},function(){yl.enableGuildInfoWidgets&&jd(import("./addGuildInfoWidgets-BmKarts8.js"))},function(){yl.enableOnlineAlliesWidgets&&jd(import("./addOnlineAlliesWidgets-C-Q5M92P.js"))},function(){yl.enableTempleAlert&&jd(import("./injectTempleAlert-Coet5S-I.js"))},function(){yl.enableUpgradeAlert&&jd(import("./injectUpgradeAlert-DxFWfDqD.js"))},function(){yl.enableComposingAlert&&jd(import("./injectComposeAlert-BFbLDyJ-.js"))},function(){id()&&!op()&&hp()},function(){op()||(window.openQuickMsgDialog=zp)},function(){Xa("statBarLinks")&&jd(import("./statBar-C3NTrtLR.js"))},function(){Xa("staminaCalculator")&&jd(import("./injectStaminaCalculator-rSq6L6Kx.js"))},function(){Xa("levelUpCalculator")&&jd(import("./injectLevelupCalculator-BjpE6tmY.js"))},function(){Xa("fsboxlog")&&jd(import("./fsbox-DqI-34SC.js"))},function(){Xa("resizeQuickBuff")&&jd(import("./interceptQuickBuff-DoJ3v-Sy.js"))},function(){Xa("joinAllLink")&&jd(import("./injectJoinAllLink-CN-sMBjz.js"))},function(){Xa("addServerNode")&&jd(import("./injectServerNode-Bphx7igo.js"))},function(){Xa("addScoutTowerLink")&&jd(import("./scoutTowerLink-_LZg6Wol.js"))},function(){rp()&&Xa(Ea)&&jd(import("./guildActivity-CpWiYYpr.js"))},async function(){if(rp()&&yl.enableSeTracker){const e=await import("./trackerPrefStore-CRJ_D4rM.js").then((function(e){return e.a}))
e.default.set(yl.enableSeTracker)}}]
const Yp=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function Zp(){tp()||(Yp.forEach(Xh),yl.allyEnemyOnlineRefreshTime=1e3*Xa("allyEnemyOnlineRefreshTime"),yl.useNewGuildLog&&(bl(document.body,"click",ep),bl(document.body,"auxclick",ep)),np(Xp))}function eg(e){const t=sl(e)
t?.["new-ui"]&&(Xa("gameHelpLink")&&Al(3,Kh),yl.huntingMode=Xa("huntingMode"),Al(3,Uh),Zp(),Xa("hideHelperMenu")||Al(3,gh))}function tg(){const e=function(){const e=t("html")
if(e?.dataset)return e.dataset.hcs}()
e&&eg(e)}function ng(){rp()&&t("worldPage")&&window.GameData&&jd(import("./newMap-DWRAz7pf.js"))}function ig(e){$(e).qtip("hide")}function rg(e){nl("needToPray",e),nl("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}let og=0
const sg='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',ag=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${ys}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
async function lg(e){const t=e.target.getAttribute("praytype")
t&&(kd("notification","prayToGods"),ig(e.target),await vh({cmd:"temple",subcmd:"pray",type:t}),og.outerHTML=sg,rg(!1))}function cg(){Rp(t("notifications"),ag),og=t("helperPrayToGods"),sd(og,"click",lg)}async function ug(){if(!yl.enableTempleAlert)return
const e="temple"===yl.cmd?document:await mh({cmd:"temple"})
if(!e)return
const t=al("#pCC",e)
if(!t)return
const n="You are currently praying at the temple."!==Xu(t)
n&&cg(),rg(n)}const dg={"-":{"-":()=>{jd(import("./arena-CFgEFZMy.js").then((function(e){return e.c})))}},dojoin:{"-":()=>{jd(import("./arenaDoJoin-D_J5UptZ.js"))}},join:{"-":()=>{jd(import("./arenaJoin-D1lXTXzN.js"))}},completed:{"-":()=>{jd(import("./completedArenas-BzXLvk_u.js"))}},pickmove:{"-":()=>{jd(import("./storeMoves-CcE7hRZZ.js"))}},setup:{"-":()=>{jd(import("./setupMoves-CPeXdzSn.js"))}}}
function fg(){jd(import("./bioWidgets-D504jDBL.js"))}function hg(){jd(import("./injectGuild-RNg-Rtvr.js"))}const pg=()=>{jd(import("./guildAdvisor-6ANC0ovN.js"))}
const gg=()=>{jd(import("./groups-ChpCBnc_.js"))}
const _g=()=>{jd(import("./addRemoveTags-Ubbhq4mI.js"))}
const vg=()=>{jd(import("./guildChat-BpJTo7QZ.js"))}
function mg(){jd(import("./viewRecipe-DSn_DXda.js"))}function yg(){jd(import("./ufsgAllowBack-BVD7zBtI.js"))}function bg(){jd(import("./profile-DETzIrR5.js").then((function(e){return e.p})))}function wg(){jd(import("./news-TDoIXxCy.js"))}function kg(){jd(import("./viewArchive-DrviyECO.js"))}const Sg=()=>{jd(import("./inventory-DRmj7P68.js"))},Eg=()=>{jd(import("./bazaar-ClwBEM2I.js"))}
function xg(){jd(import("./injectQuestBookFull-Dr-VK0Cc.js"))}const Pg=()=>{jd(import("./scavenging-rBDBF70u.js"))}
const $g=()=>{jd(import("./toprated-BIUc_-f-.js"))}
const Tg=()=>{jd(import("./trade-BvV1i8qQ.js"))}
var Cg={creatures:{"-":{"-":yg}},items:{"-":{"-":yg},view:{"-":()=>{jd(import("./itemsView-1Q2Vi-3q.js"))}}},masterrealms:{"-":{"-":yg}},quests:{"-":{"-":yg},view:{"-":()=>{jd(import("./showAllQuestSteps-BqwqPfV4.js"))}}},realms:{"-":{"-":yg}},relics:{"-":{"-":yg}},shops:{"-":{"-":yg}},"-":{news:{"-":wg},viewupdatearchive:{"-":kg},viewarchive:{"-":kg},"-":{"-":()=>{jd(import("./unknownPage-DiSULiXO.js"))}}},arena:dg,auctionhouse:{"-":{"-":()=>{jd(import("./injectAuctionHouse-LgVTnY4B.js"))}},quickcreate:{"-":()=>{jd(import("./quickCreate-Dxkq77Mz.js"))}}},bank:{"-":{"-":()=>{jd(import("./injectBank-uky-OcyP.js"))}}},blacksmith:{repairall:{"-":function(){Nl("fromworld")&&ng()}}},buffmarket:{"-":{"-":()=>{jd(import("./injectBuffmarket-D21ZyXr2.js"))}}},combat:{attackplayer:{"-":bg}},composing:{"-":{"-":()=>{jd(import("./composing-CZcfGWiO.js"))}},breakdown:{"-":()=>{jd(import("./breakdown-Dfmmaeu8.js"))}},create:{"-":()=>{jd(import("./composingCreate-BY2uRess.js"))}}},findplayer:{"-":{"-":()=>{jd(import("./findplayer-Db3hE43W.js"))}}},guild:{inventory:{report:()=>{jd(import("./guildReport-D6tQDmuo.js"))},addtags:_g,removetags:_g,storeitems:()=>{jd(import("./storeitems-ClBmCNzz.js"))}},chat:{"-":vg},dochat:{"-":vg},log:{"-":()=>{jd(import("./guildLog-Cv65jL00.js"))}},groups:{viewstats:()=>{jd(import("./injectGroupStats-C9GE1Z5Z.js"))},joinallgroupsundersize:gg,joinall:gg,"-":gg},manage:{"-":hg},advisor:{"-":pg,weekly:pg},history:{"-":fg},view:{"-":hg},scouttower:{"-":()=>{jd(import("./injectScouttower-GYukVapq.js"))}},mailbox:{"-":()=>{jd(import("./guildMailbox-DxYCyKn6.js"))}},ranks:{"-":()=>{jd(import("./rank-UxTeuFSu.js"))}},conflicts:{rpupgrades:()=>{jd(import("./injectRPUpgrades-eXKu8rSK.js"))}},bank:{"-":()=>{jd(import("./injectGuildBank-BTVFt1rT.js"))}},hall:{"-":()=>{jd(import("./hall-D7fgQD-X.js"))},post:fg},"-":{"-":hg}},hellforge:{"-":{"-":()=>{jd(import("./hellforge-CUSSAfEz.js"))}}},inventing:{"-":{"-":function(){jd(import("./inventing-CFRtrkJs.js"))}},doinvent:{"-":mg},viewrecipe:{"-":mg}},log:{"-":{"-":()=>{jd(import("./playerLog-B3SzttHl.js"))}}},marketplace:{createreq:{"-":()=>{jd(import("./marketplace-BvVzSB2g.js"))}}},news:{fsbox:{"-":()=>{jd(import("./newsFsbox-0xwIxpBc.js"))}},"-":{"-":wg},shoutbox:{"-":()=>{jd(import("./newsShoutbox-DlCkdmOl.js"))}},viewupdatearchive:{"-":kg},viewarchive:{"-":kg}},notepad:{showlogs:{"-":Bd},invmanagernew:{"-":Sg},guildinvmgr:{"-":Sg},recipemanager:{"-":Zd},auctionsearch:{"-":Wd},onlineplayers:{"-":Qd},quicklinkmanager:{"-":Xd},monsterlog:{"-":Hd},quickextract:{"-":Kd},quickwear:{"-":Yd},fsboxcontent:{"-":qd},bufflogcontent:{"-":Dd},newguildlog:{"-":Ud},findbuffs:{"-":zd},findother:{"-":Vd},savesettings:{"-":()=>{jd(import("./load-CWgG9g_p.js"))}},reliclist:{"-":ef}},points:{"-":{"-":()=>{jd(import("./points-OjwoaWYa.js"))}}},potionbazaar:{"-":{"-":Eg},buyitem:{"-":Eg}},privatemessage:{"-":{"-":()=>{jd(import("./privateMsg-C3tOsu-U.js"))}}},profile:{"-":{"-":bg},managecombatset:{"-":bg},report:{"-":bg},equipitem:{"-":bg},useitem:{"-":bg},changebio:{"-":fg},dropitems:{"-":function(){jd(import("./injectProfileDropItems-Cug8sWVL.js"))}}},pvpladder:{"-":{"-":()=>{jd(import("./ladder-7WQntb4-.js"))}}},questbook:{"-":{"-":xg},atoz:{"-":xg},viewquest:{"-":()=>{jd(import("./injectQuestTracker-Cd7HrFII.js"))}}},quickbuff:{"-":{"-":()=>{jd(import("./quickBuff-3_HVKmN-.js"))}}},scavenging:{"-":{"-":Pg},process:{"-":Pg}},settings:{"-":{"-":()=>{jd(import("./injectSettings-6Se9j0VX.js"))}}},skills:{"-":{"-":()=>{}}},superelite:{"-":{"-":()=>{jd(import("./superelite-BC34fmw6.js"))}}},tempinv:{"-":{"-":()=>{jd(import("./mailbox-CpqVMWgn.js"))}}},temple:{"-":{"-":ug}},titan:{"-":{"-":()=>{jd(import("./injectTitan-CRQO5GL6.js"))}}},toprated:{xp:{"-":$g},monthlyxp:{"-":$g},gold:{"-":$g},killstreak:{"-":$g},bounties:{"-":$g},risingstars:{"-":$g},arena:{"-":$g},superelites:{"-":$g},smasher:{"-":$g},globalquest:{"-":()=>{jd(import("./globalQuest-CCRiK5qo.js"))}}},trade:{"-":{"-":Tg},sendgold:{"-":Tg},createsecure:{"-":Tg},docreatesecure:{"-":Tg}},world:{"-":{"-":ng}}}
function Ig(e){return Cd("li",e)}function Lg(e){return Cd("ul",e)}const Rg=()=>Id({className:"fshQuickLinks",style:{left:`${Xa("quickLinksLeftPx")}px`,top:`${Xa("quickLinksTopPx")}px`}}),Fg=e=>"newWindow"in e&&e.url&&e.name
function Og(e,t){const n=Fd(t,Lg())
e.filter(Fg).forEach((e=>{Fd(Fd(n,Ig()),function(e){const t=vf({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return zh(t,(()=>kd("chrome","quick link",e.name))),t}(e))}))}function Ag(){if(!al(".mainbody"))return
const e=Op("quickLinks")||[]
e.length&&function(e){const t=Rg()
t.classList.toggle("fshFixed",Xa("keepHelperMenuOnScreen")),Xa("draggableQuickLinks")&&(t.classList.add("fshMove"),yd(t)),Og(e,t),Fd(document.body,t)}(e)}let Mg=0,Ng=0,jg=0,Dg="",Bg=0,Hg=0
function qg(e){return Nl(e)||"-"}function Ug(e){const t=al(e)
return t?.value||"-"}function Gg(){if(ol(Cg[Mg])&&ol(Cg[Mg][Ng])&&rl(Cg[Mg][Ng][jg]))return Cg[Mg][Ng][jg]}function Wg(){""!==document.location.search?(Mg=qg("cmd"),Ng=qg("subcmd"),jg=qg("subcmd2"),["points","privatemessage"].includes(Mg)&&(Dg=`/${qg("type")}`)):(Mg=Ug('input[name="cmd"]'),Ng=Ug('input[name="subcmd"]'),jg=Ug('input[name="subcmd2"]')),yl.cmd=Mg,yl.subcmd=Ng,yl.subcmd2=jg,Hg=`${Mg}/${Ng}/${jg}${Dg}`,Bg=Gg()}function zg(){rl(Bg)&&(il(Hg),Bg())}async function Vg(e){Wg(),await e,tg(),Al(3,zg),Xa("playNewMessageSound")&&Al(3,od),tp()||Al(3,Ag)}const Qg=[()=>!("showPicker"in HTMLSelectElement.prototype),()=>!navigator.cookieEnabled,()=>window!==window.parent,function(){if(!d){const e=l(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
u=c.includes(e),d=!0}return u}]
function Jg(e,t){if(Qg.some((e=>e())))return
const n=ll("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
ml(),function(e,t){yl.gmInfo=sl(decodeURIComponent(t)),yl.gmInfo?yl.fshVer=e:yl.fshVer=`${e}_native`,yl.calfVer="137"}(e,t),s(),jo(),Vg(n)}export{Rh as $,cs as A,Lg as B,Pd as C,pp as D,kf as E,wf as F,vh as G,_h as H,za as I,Va as J,Vh as K,Lu as L,zl as M,Su as N,yc as O,wc as P,Pc as Q,au as R,Ru as S,_c as T,hc as U,Rc as V,Ic as W,Sc as X,xc as Y,Pu as Z,Eu as _,Ch as a,Na as a$,jl as a0,vc as a1,Gl as a2,Op as a3,bc as a4,Cc as a5,Fc as a6,Mp as a7,n as a8,gp as a9,Ua as aA,Qu as aB,o as aC,tf as aD,ma as aE,na as aF,ia as aG,la as aH,ra as aI,ig as aJ,xf as aK,Us as aL,bs as aM,ea as aN,mf as aO,rs as aP,Cf as aQ,fa as aR,If as aS,ff as aT,sl as aU,Al as aV,Ld as aW,Oa as aX,Fa as aY,Ma as aZ,Aa as a_,Nl as aa,zu as ab,Bd as ac,Hd as ad,nl as ae,cp as af,yl as ag,Ap as ah,Xa as ai,Rd as aj,Ns as ak,Ya as al,kc as am,xa as an,Ko as ao,Qo as ap,is as aq,ys as ar,Xu as as,$h as at,Tp as au,Cs as av,Is as aw,Ml as ax,Js as ay,xs as az,bl as b,wl as b$,Vu as b0,Ku as b1,ns as b2,rl as b3,ta as b4,Lc as b5,mc as b6,Ws as b7,Ql as b8,Bs as b9,aa as bA,va as bB,ya as bC,ba as bD,kh as bE,wh as bF,Sh as bG,oa as bH,sa as bI,ga as bJ,Vo as bK,da as bL,Zh as bM,yh as bN,Xo as bO,Ih as bP,oc as bQ,Ha as bR,Fh as bS,ol as bT,Qa as bU,$a as bV,xd as bW,Eh as bX,Ls as bY,qa as bZ,Jp as b_,su as ba,as as bb,ua as bc,pa as bd,yu as be,vu as bf,mu as bg,bu as bh,Xc as bi,Tu as bj,Cu as bk,Iu as bl,ss as bm,Vs as bn,Au as bo,Ou as bp,gs as bq,kl as br,Wa as bs,$s as bt,Th as bu,Yo as bv,es as bw,Xl as bx,Kc as by,ha as bz,Zu as c,ms as c$,Qs as c0,hf as c1,wa as c2,Wh as c3,ka as c4,ls as c5,rp as c6,Cd as c7,As as c8,Sa as c9,ll as cA,Ta as cB,jd as cC,sc as cD,Gh as cE,Ss as cF,ts as cG,ja as cH,ds as cI,Ia as cJ,il as cK,wg as cL,xg as cM,mg as cN,Mo as cO,_f as cP,os as cQ,Kf as cR,Bf as cS,qf as cT,Uf as cU,Hf as cV,Vf as cW,Ba as cX,Da as cY,Tc as cZ,Wl as c_,Ra as ca,vs as cb,a as cc,Ca as cd,Cp as ce,Yl as cf,Nc as cg,tc as ch,nc as ci,ec as cj,Yc as ck,eu as cl,$u as cm,lu as cn,Hl as co,Vc as cp,zc as cq,fu as cr,Lp as cs,Zo as ct,Jo as cu,gf as cv,zo as cw,Os as cx,Ig as cy,e as cz,Od as d,us as d0,hs as d1,ps as d2,Ea as d3,Gd as d4,Ds as d5,_s as d6,Ip as d7,fs as d8,Jd as d9,Wd as dA,Qd as dB,Vd as dC,zd as dD,Ud as dE,id as dF,Ys as dG,ug as dH,cg as dI,qd as dJ,yf as dK,Hs as dL,qs as dM,La as dN,nf as dO,zs as dP,Ts as dQ,Dc as dR,Bl as dS,Nh as dT,ks as dU,rc as dV,Kd as dW,Kl as dX,Yd as dY,Jg as dZ,hg as da,Ec as db,ku as dc,Bu as dd,Ks as de,Xs as df,Qc as dg,yd as dh,Za as di,$c as dj,Mc as dk,xu as dl,Ms as dm,Ps as dn,Bc as dp,Jc as dq,ic as dr,Fs as ds,Zs as dt,np as du,Nd as dv,Zd as dw,Rs as dx,Dd as dy,Xd as dz,mh as e,ip as f,t as g,Yh as h,Fd as i,Pa as j,Qh as k,Ga as l,Id as m,vf as n,zh as o,rd as p,al as q,l as r,kd as s,Gs as t,pf as u,Rp as v,op as w,Ju as x,Qp as y,sd as z}
//# sourceMappingURL=calfSystem-DZGU7L1H.js.map
