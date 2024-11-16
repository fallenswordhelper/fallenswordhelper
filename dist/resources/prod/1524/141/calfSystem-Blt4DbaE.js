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
const h="undefined"!=typeof window?window:void 0,f="undefined"!=typeof globalThis?globalThis:h,p=Array.prototype,g=p.forEach,_=p.indexOf,v=null==f?void 0:f.navigator,m=null==f?void 0:f.document,y=null==f?void 0:f.location,b=null==f?void 0:f.fetch,w=null!=f&&f.XMLHttpRequest&&"withCredentials"in new f.XMLHttpRequest?f.XMLHttpRequest:void 0,k=null==f?void 0:f.AbortController,S=null==v?void 0:v.userAgent,E=null!=h?h:{},x={DEBUG:!1,LIB_VERSION:"1.186.1"},P=Array.isArray,T=Object.prototype,C=T.hasOwnProperty,I=T.toString,L=P||function(e){return"[object Array]"===I.call(e)},R=function(e){return"function"==typeof e},F=function(e){return e===Object(e)&&!L(e)},O=function(e){if(F(e)){for(const t in e)if(C.call(e,t))return!1
return!0}return!1},A=function(e){return void 0===e},M=function(e){return"[object String]"==I.call(e)},N=function(e){return M(e)&&0===e.trim().length},j=function(e){return null===e},D=function(e){return A(e)||j(e)},B=function(e){return"[object Number]"==I.call(e)},H=function(e){return"[object Boolean]"===I.call(e)},q=e=>e instanceof FormData,U="[PostHog.js]",G={_log:function(e){if(h&&(x.DEBUG||E.POSTHOG_DEBUG)&&!A(h.console)&&h.console){const r="__rrweb_original__"in h.console[e]?h.console[e].__rrweb_original__:h.console[e]
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
i=`${i}&t=${Math.floor(Date.now()/e)*e}`}const r=e.requestRouter.endpointFor("assets",i)
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
const ie=function(){function e(t){return t&&(t.preventDefault=e.preventDefault,t.stopPropagation=e.stopPropagation),t}return e.preventDefault=function(){this.returnValue=!1},e.stopPropagation=function(){this.cancelBubble=!0},function(t,n,i,r,s){if(t)if(t.addEventListener&&!r)t.addEventListener(n,i,!!s)
else{const r="on"+n,s=t[r]
t[r]=function(t,n,i){return function(r){if(!(r=r||e(null==h?void 0:h.event)))return
let s,o=!0
R(i)&&(s=i(r))
const a=n.call(t,r)
return!1!==s&&!1!==a||(o=!1),o}}(t,i,s)}else G.error("No valid element provided to register_event")}}()
function re(e){const t=null==e?void 0:e.hostname
return!!M(t)&&"herokuapp.com"!==t.split(".").slice(-2).join(".")}function se(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return e[n]}let oe
!function(e){e.GZipJS="gzip-js",e.Base64="base64"}(oe||(oe={}))
const ae="$people_distinct_id",le="__alias",ce="__timers",ue="$autocapture_disabled_server_side",de="$heatmaps_enabled_server_side",he="$exception_capture_enabled_server_side",fe="$exception_capture_endpoint_suffix",pe="$web_vitals_enabled_server_side",ge="$dead_clicks_enabled_server_side",_e="$web_vitals_allowed_metrics",ve="$session_recording_enabled_server_side",me="$console_log_recording_enabled_server_side",ye="$session_recording_network_payload_capture",be="$session_recording_canvas_recording",we="$replay_sample_rate",ke="$replay_minimum_duration",Se="$sesid",Ee="$session_is_sampled",xe="$session_recording_url_trigger_activated_session",Pe="$session_recording_event_trigger_activated_session",Te="$enabled_feature_flags",$e="$early_access_features",Ce="$stored_person_properties",Ie="$stored_group_properties",Le="$surveys",Re="$surveys_activated",Fe="$flag_call_reported",Oe="$user_state",Ae="$client_session_props",Me="$capture_rate_limit",Ne="$initial_campaign_params",je="$initial_referrer_info",De="$initial_person_info",Be="$epp",He="__POSTHOG_TOOLBAR__",qe=[ae,le,"__cmpns",ce,ve,de,Se,Te,Oe,$e,Ie,Ce,Le,Fe,Ae,Me,Ne,je,Be],Ue="$active_feature_flags",Ge="$override_feature_flags",We="$feature_flag_payloads",ze=e=>{const t={}
for(const[n,i]of Y(e||{}))i&&(t[n]=i)
return t}
class Ve{constructor(e){this.instance=e,this._override_warning=!1,this.featureFlagEventHandlers=[],this.reloadFeatureFlagsQueued=!1,this.reloadFeatureFlagsInAction=!1}getFlags(){return Object.keys(this.getFlagVariants())}getFlagVariants(){const e=this.instance.get_property(Te),t=this.instance.get_property(Ge)
if(!t)return e||{}
const n=K({},e),i=Object.keys(t)
for(let e=0;e<i.length;e++)n[i[e]]=t[i[e]]
return this._override_warning||(G.warn(" Overriding feature flags!",{enabledFlags:e,overriddenFlags:t,finalFlags:n}),this._override_warning=!0),n}getFlagPayloads(){return this.instance.get_property(We)||{}}reloadFeatureFlags(){this.reloadFeatureFlagsQueued||(this.reloadFeatureFlagsQueued=!0,this._startReloadTimer())}setAnonymousDistinctId(e){this.$anon_distinct_id=e}setReloadingPaused(e){this.reloadFeatureFlagsInAction=e}resetRequestQueue(){this.reloadFeatureFlagsQueued=!1}_startReloadTimer(){this.reloadFeatureFlagsQueued&&!this.reloadFeatureFlagsInAction&&setTimeout((()=>{!this.reloadFeatureFlagsInAction&&this.reloadFeatureFlagsQueued&&(this.reloadFeatureFlagsQueued=!1,this._reloadFeatureFlagsRequest())}),5)}_reloadFeatureFlagsRequest(){if(this.instance.config.advanced_disable_feature_flags)return
this.setReloadingPaused(!0)
const e=this.instance.config.token,t=this.instance.get_property(Ce),n=this.instance.get_property(Ie),i={token:e,distinct_id:this.instance.get_distinct_id(),groups:this.instance.getGroups(),$anon_distinct_id:this.$anon_distinct_id,person_properties:t,group_properties:n,disable_flags:this.instance.config.advanced_disable_feature_flags||void 0}
this.instance._send_request({method:"POST",url:this.instance.requestRouter.endpointFor("api","/decide/?v=3"),data:i,compression:this.instance.config.disable_compression?void 0:oe.Base64,timeout:this.instance.config.feature_flag_request_timeout_ms,callback:e=>{var t
this.setReloadingPaused(!1)
let n=!0
200===e.statusCode&&(this.$anon_distinct_id=void 0,n=!1),this.receivedFeatureFlags(null!==(t=e.json)&&void 0!==t?t:{},n),this._startReloadTimer()}})}getFeatureFlag(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!(this.instance.decideEndpointWasHit||this.getFlags()&&this.getFlags().length>0))return void G.warn('getFeatureFlag for key "'+e+"\" failed. Feature flags didn't load in time.")
const n=this.getFlagVariants()[e],i=`${n}`,r=this.instance.get_property(Fe)||{}
var s
return!t.send_event&&"send_event"in t||e in r&&r[e].includes(i)||(L(r[e])?r[e].push(i):r[e]=[i],null===(s=this.instance.persistence)||void 0===s||s.register({[Fe]:r}),this.instance.capture("$feature_flag_called",{$feature_flag:e,$feature_flag_response:n})),n}getFeatureFlagPayload(e){return this.getFlagPayloads()[e]}isFeatureEnabled(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(this.instance.decideEndpointWasHit||this.getFlags()&&this.getFlags().length>0)return!!this.getFeatureFlag(e,t)
G.warn('isFeatureEnabled for key "'+e+"\" failed. Feature flags didn't load in time.")}addFeatureFlagsHandler(e){this.featureFlagEventHandlers.push(e)}removeFeatureFlagsHandler(e){this.featureFlagEventHandlers=this.featureFlagEventHandlers.filter((t=>t!==e))}receivedFeatureFlags(e,t){if(!this.instance.persistence)return
this.instance.decideEndpointWasHit=!0
const n=this.getFlagVariants(),i=this.getFlagPayloads()
!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
const r=e.featureFlags,s=e.featureFlagPayloads
if(!r)return
if(L(r)){const e={}
if(r)for(let t=0;t<r.length;t++)e[r[t]]=!0
return void(t&&t.register({[Ue]:r,[Te]:e}))}let o=r,a=s
e.errorsWhileComputingFlags&&(o={...n,...o},a={...i,...a}),t&&t.register({[Ue]:Object.keys(ze(o)),[Te]:o||{},[We]:a||{}})}(e,this.instance.persistence,n,i),this._fireFeatureFlagsCallbacks(t)}override(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(!this.instance.__loaded||!this.instance.persistence)return G.uninitializedWarning("posthog.feature_flags.override")
if(this._override_warning=t,!1===e)this.instance.persistence.unregister(Ge)
else if(L(e)){const t={}
for(let n=0;n<e.length;n++)t[e[n]]=!0
this.instance.persistence.register({[Ge]:t})}else this.instance.persistence.register({[Ge]:e})}onFeatureFlags(e){if(this.addFeatureFlagsHandler(e),this.instance.decideEndpointWasHit){const{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
e(t,n)}return()=>this.removeFeatureFlagsHandler(e)}updateEarlyAccessFeatureEnrollment(e,t){var n
const i={[`$feature_enrollment/${e}`]:t}
this.instance.capture("$feature_enrollment_update",{$feature_flag:e,$feature_enrollment:t,$set:i}),this.setPersonPropertiesForFlags(i,!1)
const r={...this.getFlagVariants(),[e]:t}
null===(n=this.instance.persistence)||void 0===n||n.register({[Ue]:Object.keys(ze(r)),[Te]:r}),this._fireFeatureFlagsCallbacks()}getEarlyAccessFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
const n=this.instance.get_property($e)
if(n&&!t)return e(n)
this.instance._send_request({transport:"XHR",url:this.instance.requestRouter.endpointFor("api",`/api/early_access_features/?token=${this.instance.config.token}`),method:"GET",callback:t=>{var n
if(!t.json)return
const i=t.json.earlyAccessFeatures
return null===(n=this.instance.persistence)||void 0===n||n.register({[$e]:i}),e(i)}})}_prepareFeatureFlagsForCallbacks(){const e=this.getFlags(),t=this.getFlagVariants()
return{flags:e.filter((e=>t[e])),flagVariants:Object.keys(t).filter((e=>t[e])).reduce(((e,n)=>(e[n]=t[n],e)),{})}}_fireFeatureFlagsCallbacks(e){const{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
this.featureFlagEventHandlers.forEach((i=>i(t,n,{errorsLoading:e})))}setPersonPropertiesForFlags(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
const n=this.instance.get_property(Ce)||{}
this.instance.register({[Ce]:{...n,...e}}),t&&this.instance.reloadFeatureFlags()}resetPersonPropertiesForFlags(){this.instance.unregister(Ce)}setGroupPropertiesForFlags(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
const n=this.instance.get_property(Ie)||{}
0!==Object.keys(n).length&&Object.keys(n).forEach((t=>{n[t]={...n[t],...e[t]},delete e[t]})),this.instance.register({[Ie]:{...n,...e}}),t&&this.instance.reloadFeatureFlags()}resetGroupPropertiesForFlags(e){if(e){const t=this.instance.get_property(Ie)||{}
this.instance.register({[Ie]:{...t,[e]:{}}})}else this.instance.unregister(Ie)}}
/**
 * uuidv7: An experimental implementation of the proposed UUID Version 7
 *
 * @license Apache-2.0
 * @copyright 2021-2023 LiosK
 * @packageDocumentation
 *
 * from https://github.com/LiosK/uuidv7/blob/e501462ea3d23241de13192ceae726956f9b3b7d/src/index.ts
 */Math.trunc||(Math.trunc=function(e){return e<0?Math.ceil(e):Math.floor(e)}),Number.isInteger||(Number.isInteger=function(e){return B(e)&&isFinite(e)&&Math.floor(e)===e})
const Qe="0123456789abcdef"
class Je{constructor(e){if(this.bytes=e,16!==e.length)throw new TypeError("not 128-bit length")}static fromFieldsV7(e,t,n,i){if(!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(n)||!Number.isInteger(i)||e<0||t<0||n<0||i<0||e>0xffffffffffff||t>4095||n>1073741823||i>4294967295)throw new RangeError("invalid field value")
const r=new Uint8Array(16)
return r[0]=e/2**40,r[1]=e/2**32,r[2]=e/2**24,r[3]=e/65536,r[4]=e/256,r[5]=e,r[6]=112|t>>>8,r[7]=t,r[8]=128|n>>>24,r[9]=n>>>16,r[10]=n>>>8,r[11]=n,r[12]=i>>>24,r[13]=i>>>16,r[14]=i>>>8,r[15]=i,new Je(r)}toString(){let e=""
for(let t=0;t<this.bytes.length;t++)e=e+Qe.charAt(this.bytes[t]>>>4)+Qe.charAt(15&this.bytes[t]),3!==t&&5!==t&&7!==t&&9!==t||(e+="-")
if(36!==e.length)throw new Error("Invalid UUIDv7 was generated")
return e}clone(){return new Je(this.bytes.slice(0))}equals(e){return 0===this.compareTo(e)}compareTo(e){for(let t=0;t<16;t++){const n=this.bytes[t]-e.bytes[t]
if(0!==n)return Math.sign(n)}return 0}}class Ke{timestamp=0
counter=0
random=new Ze
generate(){const e=this.generateOrAbort()
if(A(e)){this.timestamp=0
const e=this.generateOrAbort()
if(A(e))throw new Error("Could not generate UUID after timestamp reset")
return e}return e}generateOrAbort(){const e=Date.now()
if(e>this.timestamp)this.timestamp=e,this.resetCounter()
else{if(!(e+1e4>this.timestamp))return
this.counter++,this.counter>4398046511103&&(this.timestamp++,this.resetCounter())}return Je.fromFieldsV7(this.timestamp,Math.trunc(this.counter/2**30),this.counter&2**30-1,this.random.nextUint32())}resetCounter(){this.counter=1024*this.random.nextUint32()+(1023&this.random.nextUint32())}}let Xe,Ye=e=>{if("undefined"!=typeof UUIDV7_DENY_WEAK_RNG&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available")
for(let t=0;t<e.length;t++)e[t]=65536*Math.trunc(65536*Math.random())+Math.trunc(65536*Math.random())
return e}
h&&!A(h.crypto)&&crypto.getRandomValues&&(Ye=e=>crypto.getRandomValues(e))
class Ze{buffer=new Uint32Array(8)
cursor=1/0
nextUint32(){return this.cursor>=this.buffer.length&&(Ye(this.buffer),this.cursor=0),this.buffer[this.cursor++]}}const et=()=>tt().toString(),tt=()=>(Xe||(Xe=new Ke)).generate()
let nt=""
const it=/[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i
const rt={is_supported:()=>!!m,error:function(e){G.error("cookieStore error: "+e)},get:function(e){if(m){try{const t=e+"=",n=m.cookie.split(";").filter((e=>e.length))
for(let e=0;e<n.length;e++){let i=n[e]
for(;" "==i.charAt(0);)i=i.substring(1,i.length)
if(0===i.indexOf(t))return decodeURIComponent(i.substring(t.length,i.length))}}catch{}return null}},parse:function(e){let t
try{t=JSON.parse(rt.get(e))||{}}catch{}return t},set:function(e,t,n,i,r){if(m)try{let s="",o=""
const a=function(e,t){if(t){let t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m
if(nt)return nt
if(!t)return""
if(["localhost","127.0.0.1"].includes(e))return""
const n=e.split(".")
let i=Math.min(n.length,8)
const r="dmn_chk_"+et(),s=new RegExp("(^|;)\\s*"+r+"=1")
for(;!nt&&i--;){const e=n.slice(i).join("."),o=r+"=1;domain=."+e
t.cookie=o,s.test(t.cookie)&&(t.cookie=o+";expires=Thu, 01 Jan 1970 00:00:00 GMT",nt=e)}return nt}(e)
if(!t){const n=(e=>{const t=e.match(it)
return t?t[0]:""})(e)
n!==t&&G.info("Warning: cookie subdomain discovery mismatch",n,t),t=n}return t?"; domain=."+t:""}return""}(m.location.hostname,i)
if(n){const e=new Date
e.setTime(e.getTime()+24*n*60*60*1e3),s="; expires="+e.toUTCString()}r&&(o="; secure")
const l=e+"="+encodeURIComponent(JSON.stringify(t))+s+"; SameSite=Lax; path=/"+a+o
return l.length>3686.4&&G.warn("cookieStore warning: large cookie, len="+l.length),m.cookie=l,l}catch{return}},remove:function(e,t){try{rt.set(e,"",-1,t)}catch{return}}}
let st=null
const ot={is_supported:function(){if(!j(st))return st
let e=!0
if(A(h))e=!1
else try{const t="__mplssupport__",n="xyz"
ot.set(t,n),'"xyz"'!==ot.get(t)&&(e=!1),ot.remove(t)}catch{e=!1}return e||G.error("localStorage unsupported; falling back to cookie store"),st=e,e},error:function(e){G.error("localStorage error: "+e)},get:function(e){try{return null==h?void 0:h.localStorage.getItem(e)}catch(e){ot.error(e)}return null},parse:function(e){try{return JSON.parse(ot.get(e))||{}}catch{}return null},set:function(e,t){try{null==h||h.localStorage.setItem(e,JSON.stringify(t))}catch(e){ot.error(e)}},remove:function(e){try{null==h||h.localStorage.removeItem(e)}catch(e){ot.error(e)}}},at=["distinct_id",Se,Ee,Be],lt={...ot,parse:function(e){try{let t={}
try{t=rt.parse(e)||{}}catch{}const n=K(t,JSON.parse(ot.get(e)||"{}"))
return ot.set(e,n),n}catch{}return null},set:function(e,t,n,i,r,s){try{ot.set(e,t,void 0,void 0,s)
const o={}
at.forEach((e=>{t[e]&&(o[e]=t[e])})),Object.keys(o).length&&rt.set(e,o,n,i,r,s)}catch(e){ot.error(e)}},remove:function(e,t){try{null==h||h.localStorage.removeItem(e),rt.remove(e,t)}catch(e){ot.error(e)}}},ct={},ut={is_supported:function(){return!0},error:function(e){G.error("memoryStorage error: "+e)},get:function(e){return ct[e]||null},parse:function(e){return ct[e]||null},set:function(e,t){ct[e]=t},remove:function(e){delete ct[e]}}
let dt=null
const ht={is_supported:function(){if(!j(dt))return dt
if(dt=!0,A(h))dt=!1
else try{const e="__support__",t="xyz"
ht.set(e,t),'"xyz"'!==ht.get(e)&&(dt=!1),ht.remove(e)}catch{dt=!1}return dt},error:function(e){G.error("sessionStorage error: ",e)},get:function(e){try{return null==h?void 0:h.sessionStorage.getItem(e)}catch(e){ht.error(e)}return null},parse:function(e){try{return JSON.parse(ht.get(e))||null}catch{}return null},set:function(e,t){try{null==h||h.sessionStorage.setItem(e,JSON.stringify(t))}catch(e){ht.error(e)}},remove:function(e){try{null==h||h.sessionStorage.removeItem(e)}catch(e){ht.error(e)}}},ft=["localhost","127.0.0.1"],pt=e=>{const t=null==m?void 0:m.createElement("a")
return A(t)?null:(t.href=e,t)},gt=function(e,t){return!!function(e){try{new RegExp(e)}catch{return!1}return!0}(t)&&new RegExp(t).test(e)},_t=function(e,t){const n=((e.split("#")[0]||"").split("?")[1]||"").split("&")
let i
for(let e=0;e<n.length;e++){const r=n[e].split("=")
if(r[0]===t){i=r
break}}if(!L(i)||i.length<2)return""
{let e=i[1]
try{e=decodeURIComponent(e)}catch{G.error("Skipping decoding for malformed query param: "+e)}return e.replace(/\+/g," ")}},vt=function(e,t){const n=e.match(new RegExp(t+"=([^&]*)"))
return n?n[1]:null},mt="Mobile",yt="iOS",bt="Android",wt="Tablet",kt=bt+" "+wt,St="iPad",Et="Apple",xt=Et+" Watch",Pt="Safari",Tt="BlackBerry",$t="Samsung",Ct=$t+"Browser",It=$t+" Internet",Lt="Chrome",Rt=Lt+" OS",Ft=Lt+" "+yt,Ot="Internet Explorer",At=Ot+" "+mt,Mt="Opera",Nt=Mt+" Mini",jt="Edge",Dt="Microsoft "+jt,Bt="Firefox",Ht=Bt+" "+yt,qt="Nintendo",Ut="PlayStation",Gt="Xbox",Wt=bt+" "+mt,zt=mt+" "+Pt,Vt="Windows",Qt=Vt+" Phone",Jt="Nokia",Kt="Ouya",Xt="Generic",Yt=Xt+" "+mt.toLowerCase(),Zt=Xt+" "+wt.toLowerCase(),en="Konqueror",tn="(\\d+(\\.\\d+)?)",nn=new RegExp("Version/"+tn),rn=new RegExp(Gt,"i"),sn=new RegExp(Ut+" \\w+","i"),on=new RegExp(qt+" \\w+","i"),an=new RegExp(Tt+"|PlayBook|BB10","i"),ln={"NT3.51":"NT 3.11","NT4.0":"NT 4.0","5.0":"2000",5.1:"XP",5.2:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1",6.4:"10","10.0":"10"},cn=function(e,t){return t=t||"",X(e," OPR/")&&X(e,"Mini")?Nt:X(e," OPR/")?Mt:an.test(e)?Tt:X(e,"IE"+mt)||X(e,"WPDesktop")?At:X(e,Ct)?It:X(e,jt)||X(e,"Edg/")?Dt:X(e,"FBIOS")?"Facebook "+mt:X(e,"UCWEB")||X(e,"UCBrowser")?"UC Browser":X(e,"CriOS")?Ft:X(e,"CrMo")?Lt:X(e,bt)&&X(e,Pt)?Wt:X(e,Lt)?Lt:X(e,"FxiOS")?Ht:X(e.toLowerCase(),en.toLowerCase())?en:((e,t)=>t&&X(t,Et)||function(e){return X(e,Pt)&&!X(e,Lt)&&!X(e,bt)}(e))(e,t)?X(e,mt)?zt:Pt:X(e,Bt)?Bt:X(e,"MSIE")||X(e,"Trident/")?Ot:X(e,"Gecko")?Bt:""},un={[At]:[new RegExp("rv:"+tn)],[Dt]:[new RegExp(jt+"?\\/"+tn)],[Lt]:[new RegExp("("+Lt+"|CrMo)\\/"+tn)],[Ft]:[new RegExp("CriOS\\/"+tn)],"UC Browser":[new RegExp("(UCBrowser|UCWEB)\\/"+tn)],[Pt]:[nn],[zt]:[nn],[Mt]:[new RegExp("(Opera|OPR)\\/"+tn)],[Bt]:[new RegExp(Bt+"\\/"+tn)],[Ht]:[new RegExp("FxiOS\\/"+tn)],[en]:[new RegExp("Konqueror[:/]?"+tn,"i")],[Tt]:[new RegExp(Tt+" "+tn),nn],[Wt]:[new RegExp("android\\s"+tn,"i")],[It]:[new RegExp(Ct+"\\/"+tn)],[Ot]:[new RegExp("(rv:|MSIE )"+tn)],Mozilla:[new RegExp("rv:"+tn)]},dn=[[new RegExp(Gt+"; "+Gt+" (.*?)[);]","i"),e=>[Gt,e&&e[1]||""]],[new RegExp(qt,"i"),[qt,""]],[new RegExp(Ut,"i"),[Ut,""]],[an,[Tt,""]],[new RegExp(Vt,"i"),(e,t)=>{if(/Phone/.test(t)||/WPDesktop/.test(t))return[Qt,""]
if(new RegExp(mt).test(t)&&!/IEMobile\b/.test(t))return[Vt+" "+mt,""]
const n=/Windows NT ([0-9.]+)/i.exec(t)
if(n&&n[1]){const e=n[1]
let i=ln[e]||""
return/arm/i.test(t)&&(i="RT"),[Vt,i]}return[Vt,""]}],[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,e=>{if(e&&e[3]){const t=[e[3],e[4],e[5]||"0"]
return[yt,t.join(".")]}return[yt,""]}],[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,e=>{let t=""
return e&&e.length>=3&&(t=A(e[2])?e[3]:e[2]),["watchOS",t]}],[new RegExp("("+bt+" (\\d+)\\.(\\d+)\\.?(\\d+)?|"+bt+")","i"),e=>{if(e&&e[2]){const t=[e[2],e[3],e[4]||"0"]
return[bt,t.join(".")]}return[bt,""]}],[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,e=>{const t=["Mac OS X",""]
if(e&&e[1]){const n=[e[1],e[2],e[3]||"0"]
t[1]=n.join(".")}return t}],[/Mac/i,["Mac OS X",""]],[/CrOS/,[Rt,""]],[/Linux|debian/i,["Linux",""]]],hn=function(e){return on.test(e)?qt:sn.test(e)?Ut:rn.test(e)?Gt:new RegExp(Kt,"i").test(e)?Kt:new RegExp("("+Qt+"|WPDesktop)","i").test(e)?Qt:/iPad/.test(e)?St:/iPod/.test(e)?"iPod Touch":/iPhone/.test(e)?"iPhone":/(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)?xt:an.test(e)?Tt:/(kobo)\s(ereader|touch)/i.test(e)?"Kobo":new RegExp(Jt,"i").test(e)?Jt:/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e)||/(kf[a-z]+)( bui|\)).+silk\//i.test(e)?"Kindle Fire":/(Android|ZTE)/i.test(e)?!new RegExp(mt).test(e)||/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e)?/pixel[\daxl ]{1,6}/i.test(e)&&!/pixel c/i.test(e)||/(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e)||/lmy47v/i.test(e)&&!/QTAQZ3/i.test(e)?bt:kt:bt:new RegExp("(pda|"+mt+")","i").test(e)?Yt:new RegExp(wt,"i").test(e)&&!new RegExp(wt+" pc","i").test(e)?Zt:""},fn="https?://(.*)",pn=["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gclid","gad_source","gclsrc","dclid","gbraid","wbraid","fbclid","msclkid","twclid","li_fat_id","mc_cid","igshid","ttclid","rdt_cid"],gn={campaignParams:function(e){return m?this._campaignParamsFromUrl(m.URL,e):{}},_campaignParamsFromUrl:function(e,t){const n=pn.concat(t||[]),i={}
return J(n,(function(t){const n=_t(e,t)
i[t]=n||null})),i},_searchEngine:function(e){return e?0===e.search(fn+"google.([^/?]*)")?"google":0===e.search(fn+"bing.com")?"bing":0===e.search(fn+"yahoo.com")?"yahoo":0===e.search(fn+"duckduckgo.com")?"duckduckgo":null:null},_searchInfoFromReferrer:function(e){const t=gn._searchEngine(e),n="yahoo"!=t?"q":"p",i={}
if(!j(t)){i.$search_engine=t
const e=m?_t(m.referrer,n):""
e.length&&(i.ph_keyword=e)}return i},searchInfo:function(){const e=null==m?void 0:m.referrer
return e?this._searchInfoFromReferrer(e):{}},browser:cn,browserVersion:function(e,t){const n=cn(e,t),i=un[n]
if(A(i))return null
for(let t=0;t<i.length;t++){const n=i[t],r=e.match(n)
if(r)return parseFloat(r[r.length-2])}return null},browserLanguage:function(){return navigator.language||navigator.userLanguage},os:function(e){for(let t=0;t<dn.length;t++){const[n,i]=dn[t],r=n.exec(e),s=r&&(R(i)?i(r,e):i)
if(s)return s}return["",""]},device:hn,deviceType:function(e){const t=hn(e)
return t===St||t===kt||"Kobo"===t||"Kindle Fire"===t||t===Zt?wt:t===qt||t===Gt||t===Ut||t===Kt?"Console":t===xt?"Wearable":t?mt:"Desktop"},referrer:function(){return(null==m?void 0:m.referrer)||"$direct"},referringDomain:function(){var e
return null!=m&&m.referrer&&(null===(e=pt(m.referrer))||void 0===e?void 0:e.host)||"$direct"},referrerInfo:function(){return{$referrer:this.referrer(),$referring_domain:this.referringDomain()}},initialPersonInfo:function(){return{r:this.referrer(),u:null==y?void 0:y.href}},initialPersonPropsFromInfo:function(e){var t
const{r:n,u:i}=e,r={$initial_referrer:n,$initial_referring_domain:null==n?void 0:"$direct"==n?"$direct":null===(t=pt(n))||void 0===t?void 0:t.host}
if(i){r.$initial_current_url=i
const e=pt(i)
r.$initial_host=null==e?void 0:e.host,r.$initial_pathname=null==e?void 0:e.pathname,J(this._campaignParamsFromUrl(i),(function(e,t){r["$initial_"+ne(t)]=e}))}return n&&J(this._searchInfoFromReferrer(n),(function(e,t){r["$initial_"+ne(t)]=e})),r},timezone:function(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{return}},properties:function(){if(!S)return{}
const[e,t]=gn.os(S)
return K(te({$os:e,$os_version:t,$browser:gn.browser(S,navigator.vendor),$device:gn.device(S),$device_type:gn.deviceType(S),$timezone:gn.timezone()}),{$current_url:null==y?void 0:y.href,$host:null==y?void 0:y.host,$pathname:null==y?void 0:y.pathname,$raw_user_agent:S.length>1e3?S.substring(0,997)+"...":S,$browser_version:gn.browserVersion(S,navigator.vendor),$browser_language:gn.browserLanguage(),$screen_height:null==h?void 0:h.screen.height,$screen_width:null==h?void 0:h.screen.width,$viewport_height:null==h?void 0:h.innerHeight,$viewport_width:null==h?void 0:h.innerWidth,$lib:"web",$lib_version:x.LIB_VERSION,$insert_id:Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10),$time:Date.now()/1e3})},people_properties:function(){if(!S)return{}
const[e,t]=gn.os(S)
return K(te({$os:e,$os_version:t,$browser:gn.browser(S,navigator.vendor)}),{$browser_version:gn.browserVersion(S,navigator.vendor)})}},_n=["cookie","localstorage","localstorage+cookie","sessionstorage","memory"]
class vn{constructor(e){this.config=e,this.props={},this.campaign_params_saved=!1,this.name=(e=>{let t=""
return e.token&&(t=e.token.replace(/\+/g,"PL").replace(/\//g,"SL").replace(/=/g,"EQ")),e.persistence_name?"ph_"+e.persistence_name:"ph_"+t+"_posthog"})(e),this.storage=this.buildStorage(e),this.load(),e.debug&&G.info("Persistence loaded",e.persistence,{...this.props}),this.update_config(e,e),this.save()}buildStorage(e){let t;-1===_n.indexOf(e.persistence.toLowerCase())&&(G.critical("Unknown persistence type "+e.persistence+"; falling back to localStorage+cookie"),e.persistence="localStorage+cookie")
const n=e.persistence.toLowerCase()
return t="localstorage"===n&&ot.is_supported()?ot:"localstorage+cookie"===n&&lt.is_supported()?lt:"sessionstorage"===n&&ht.is_supported()?ht:"memory"===n?ut:"cookie"===n?rt:lt.is_supported()?lt:rt,t}properties(){const e={}
return J(this.props,(function(t,n){if(n===Te&&F(t)){const n=Object.keys(t)
for(let i=0;i<n.length;i++)e[`$feature/${n[i]}`]=t[n[i]]}else(function(e,t){let n=!1
return j(e)?n:_&&e.indexOf===_?-1!=e.indexOf(t):(J(e,(function(e){if(n||(n=e===t))return z})),n)})(qe,n)||(e[n]=t)})),e}load(){if(this.disabled)return
const e=this.storage.parse(this.name)
e&&(this.props=K({},e))}save(){this.disabled||this.storage.set(this.name,this.props,this.expire_days,this.cross_subdomain,this.secure,this.config.debug)}remove(){this.storage.remove(this.name,!1),this.storage.remove(this.name,!0)}clear(){this.remove(),this.props={}}register_once(e,t,n){if(F(e)){A(t)&&(t="None"),this.expire_days=A(n)?this.default_expiry:n
let i=!1
if(J(e,((e,n)=>{this.props.hasOwnProperty(n)&&this.props[n]!==t||(this.props[n]=e,i=!0)})),i)return this.save(),!0}return!1}register(e,t){if(F(e)){this.expire_days=A(t)?this.default_expiry:t
let n=!1
if(J(e,((t,i)=>{e.hasOwnProperty(i)&&this.props[i]!==t&&(this.props[i]=t,n=!0)})),n)return this.save(),!0}return!1}unregister(e){e in this.props&&(delete this.props[e],this.save())}update_campaign_params(){if(!this.campaign_params_saved){const e=gn.campaignParams(this.config.custom_campaign_params)
O(te(e))||this.register(gn.campaignParams(this.config.custom_campaign_params)),this.campaign_params_saved=!0}}update_search_keyword(){this.register(gn.searchInfo())}update_referrer_info(){this.register_once(gn.referrerInfo(),void 0)}set_initial_person_info(){this.props[Ne]||this.props[je]||this.register_once({[De]:gn.initialPersonInfo()},void 0)}get_referrer_info(){return te({$referrer:this.props.$referrer,$referring_domain:this.props.$referring_domain})}get_initial_props(){const e={}
J([je,Ne],(t=>{const n=this.props[t]
n&&J(n,(function(t,n){e["$initial_"+ne(n)]=t}))}))
const t=this.props[De]
if(t){const n=gn.initialPersonPropsFromInfo(t)
K(e,n)}return e}safe_merge(e){return J(this.props,(function(t,n){n in e||(e[n]=t)})),e}update_config(e,t){if(this.default_expiry=this.expire_days=e.cookie_expiration,this.set_disabled(e.disable_persistence),this.set_cross_subdomain(e.cross_subdomain_cookie),this.set_secure(e.secure_cookie),e.persistence!==t.persistence){const t=this.buildStorage(e),n=this.props
this.clear(),this.storage=t,this.props=n,this.save()}}set_disabled(e){this.disabled=e,this.disabled?this.remove():this.save()}set_cross_subdomain(e){e!==this.cross_subdomain&&(this.cross_subdomain=e,this.remove(),this.save())}get_cross_subdomain(){return!!this.cross_subdomain}set_secure(e){e!==this.secure&&(this.secure=e,this.remove(),this.save())}set_event_timer(e,t){const n=this.props[ce]||{}
n[e]=t,this.props[ce]=n,this.save()}remove_event_timer(e){const t=(this.props[ce]||{})[e]
return A(t)||(delete this.props[ce][e],this.save()),t}get_property(e){return this.props[e]}set_property(e,t){this.props[e]=t,this.save()}}function mn(e){var t
return(null===(t=JSON.stringify(e,function(){const e=[]
return function(t,n){if(F(n)){for(;e.length>0&&e.at(-1)!==this;)e.pop()
return e.includes(n)?"[Circular]":(e.push(n),n)}return n}}()))||void 0===t?void 0:t.length)||0}function yn(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6606028.8
if(e.size>=t&&e.data.length>1){const t=Math.floor(e.data.length/2),n=e.data.slice(0,t),i=e.data.slice(t)
return[yn({size:mn(n),data:n,sessionId:e.sessionId,windowId:e.windowId}),yn({size:mn(i),data:i,sessionId:e.sessionId,windowId:e.windowId})].flatMap((e=>e))}return[e]}var bn=(e=>(e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin",e))(bn||{}),wn=(e=>(e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration",e[e.Selection=14]="Selection",e[e.AdoptedStyleSheet=15]="AdoptedStyleSheet",e[e.CustomElement=16]="CustomElement",e))(wn||{})
function kn(e){var t
return e.id===He||!(null===(t=e.closest)||void 0===t||!t.call(e,".toolbar-global-fade-container"))}function Sn(e){return!!e&&1===e.nodeType}function En(e,t){return!!e&&!!e.tagName&&e.tagName.toLowerCase()===t.toLowerCase()}function xn(e){return!!e&&3===e.nodeType}function Pn(e){return!!e&&11===e.nodeType}function Tn(e){return e?V(e).split(/\s+/):[]}function $n(e){const t=null==h?void 0:h.location.href
return!!(t&&e&&e.some((e=>t.match(e))))}function Cn(e){let t=""
switch(typeof e.className){case"string":t=e.className
break
case"object":t=(e.className&&"baseVal"in e.className?e.className.baseVal:null)||e.getAttribute("class")||""
break
default:t=""}return Tn(t)}function In(e){return D(e)?null:V(e).split(/(\s+)/).filter((e=>Un(e))).join("").replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)}function Ln(e){let t=""
return An(e)&&!Mn(e)&&e.childNodes&&e.childNodes.length&&J(e.childNodes,(function(e){var n
xn(e)&&e.textContent&&(t+=null!==(n=In(e.textContent))&&void 0!==n?n:"")})),V(t)}function Rn(e){return A(e.target)?e.srcElement||null:null!==(t=e.target)&&void 0!==t&&t.shadowRoot?e.composedPath()[0]||null:e.target||null
var t}const Fn=["a","button","form","input","select","textarea","label"]
function On(e){const t=e.parentNode
return!(!t||!Sn(t))&&t}function An(e){for(let t=e;t.parentNode&&!En(t,"body");t=t.parentNode){const e=Cn(t)
if(X(e,"ph-sensitive")||X(e,"ph-no-capture"))return!1}if(X(Cn(e),"ph-include"))return!0
const t=e.type||""
if(M(t))switch(t.toLowerCase()){case"hidden":case"password":return!1}const n=e.name||e.id||""
return!M(n)||!/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(n.replace(/[^a-zA-Z0-9]/g,""))}function Mn(e){return!!(En(e,"input")&&!["button","checkbox","submit","reset"].includes(e.type)||En(e,"select")||En(e,"textarea")||"true"===e.getAttribute("contenteditable"))}const Nn="(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",jn=new RegExp(`^(?:${Nn})$`),Dn=new RegExp(Nn),Bn="\\d{3}-?\\d{2}-?\\d{4}",Hn=new RegExp(`^(${Bn})$`),qn=new RegExp(`(${Bn})`)
function Un(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(D(e))return!1
if(M(e)){if(e=V(e),(t?jn:Dn).test((e||"").replace(/[- ]/g,"")))return!1
if((t?Hn:qn).test(e))return!1}return!0}function Gn(e){let t=Ln(e)
return t=`${t} ${Wn(e)}`.trim(),Un(t)?t:""}function Wn(e){let t=""
return e&&e.childNodes&&e.childNodes.length&&J(e.childNodes,(function(e){var n
if(e&&"span"===(null===(n=e.tagName)||void 0===n?void 0:n.toLowerCase()))try{const n=Ln(e)
t=`${t} ${n}`.trim(),e.childNodes&&e.childNodes.length&&(t=`${t} ${Wn(e)}`.trim())}catch(e){G.error(e)}})),t}function zn(e){return function(e){const t=e.map((e=>{var t,n
let i=""
if(e.tag_name&&(i+=e.tag_name),e.attr_class){e.attr_class.sort()
for(const t of e.attr_class)i+=`.${t.replace(/"/g,"")}`}const r={...e.text?{text:e.text}:{},"nth-child":null!==(t=e.nth_child)&&void 0!==t?t:0,"nth-of-type":null!==(n=e.nth_of_type)&&void 0!==n?n:0,...e.href?{href:e.href}:{},...e.attr_id?{attr_id:e.attr_id}:{},...e.attributes},s={}
return Y(r).sort(((e,t)=>{let[n]=e,[i]=t
return n.localeCompare(i)})).forEach((e=>{let[t,n]=e
return s[Vn(t.toString())]=Vn(n.toString())})),i+=":",i+=Y(r).map((e=>{let[t,n]=e
return`${t}="${n}"`})).join(""),i}))
return t.join(";")}(function(e){return e.map((e=>{var t,n
const i={text:null===(t=e.$el_text)||void 0===t?void 0:t.slice(0,400),tag_name:e.tag_name,href:null===(n=e.attr__href)||void 0===n?void 0:n.slice(0,2048),attr_class:Qn(e),attr_id:e.attr__id,nth_child:e.nth_child,nth_of_type:e.nth_of_type,attributes:{}}
return Y(e).filter((e=>{let[t]=e
return 0===t.indexOf("attr__")})).forEach((e=>{let[t,n]=e
return i.attributes[t]=n})),i}))}(e))}function Vn(e){return e.replace(/"|\\"/g,'\\"')}function Qn(e){const t=e.attr__class
return t?L(t)?t:Tn(t):void 0}const Jn="[SessionRecording]",Kn="redacted",Xn={initiatorTypes:["audio","beacon","body","css","early-hint","embed","fetch","frame","iframe","icon","image","img","input","link","navigation","object","ping","script","track","video","xmlhttprequest"],maskRequestFn:e=>e,recordHeaders:!1,recordBody:!1,recordInitialRequests:!1,recordPerformance:!1,performanceEntryTypeToObserve:["first-input","navigation","paint","resource"],payloadSizeLimitBytes:1e6,payloadHostDenyList:[".lr-ingest.io",".ingest.sentry.io"]},Yn=["authorization","x-forwarded-for","authorization","cookie","set-cookie","x-api-key","x-real-ip","remote-addr","forwarded","proxy-authorization","x-csrf-token","x-csrftoken","x-xsrf-token"],Zn=["password","secret","passwd","api_key","apikey","auth","credentials","mysql_pwd","privatekey","private_key","token"],ei=["/s/","/e/","/i/"]
function ti(e,t,n,i){if(D(e))return e
let r=(null==t?void 0:t["content-length"])||function(e){return new Blob([e]).size}(e)
return M(r)&&(r=parseInt(r)),r>n?Jn+` ${i} body too large to record (${r} bytes)`:e}function ni(e,t){if(D(e))return e
let n=e
return Un(n,!1)||(n=Jn+" "+t+" body "+Kn),J(Zn,(e=>{var i,r
null!==(i=n)&&void 0!==i&&i.length&&-1!==(null===(r=n)||void 0===r?void 0:r.indexOf(e))&&(n=Jn+" "+t+" body "+Kn+" as might contain: "+e)})),n}function ii(e,t,n,i){return t>n&&(G.warn("min cannot be greater than max."),t=n),B(e)?e>n?(i&&G.warn(i+" cannot be  greater than max: "+n+". Using max value instead."),n):e<t?(i&&G.warn(i+" cannot be less than min: "+t+". Using min value instead."),t):e:(i&&G.warn(i+" must be a number. Defaulting to max value:"+n),n)}class ri{bucketSize=100
refillRate=10
mutationBuckets={}
loggedTracker={}
constructor(e){var t,n
let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this.rrweb=e,this.options=i,this.refillRate=ii(null!==(t=this.options.refillRate)&&void 0!==t?t:this.refillRate,0,100,"mutation throttling refill rate"),this.bucketSize=ii(null!==(n=this.options.bucketSize)&&void 0!==n?n:this.bucketSize,0,100,"mutation throttling bucket size"),setInterval((()=>{this.refillBuckets()}),1e3)}refillBuckets=()=>{Object.keys(this.mutationBuckets).forEach((e=>{this.mutationBuckets[e]=this.mutationBuckets[e]+this.refillRate,this.mutationBuckets[e]>=this.bucketSize&&delete this.mutationBuckets[e]}))}
getNodeOrRelevantParent=e=>{const t=this.rrweb.mirror.getNode(e)
if("svg"!==(null==t?void 0:t.nodeName)&&t instanceof Element){const e=t.closest("svg")
if(e)return[this.rrweb.mirror.getId(e),e]}return[e,t]}
numberOfChanges=e=>{var t,n,i,r,s,o,a,l
return(null!==(t=null===(n=e.removes)||void 0===n?void 0:n.length)&&void 0!==t?t:0)+(null!==(i=null===(r=e.attributes)||void 0===r?void 0:r.length)&&void 0!==i?i:0)+(null!==(s=null===(o=e.texts)||void 0===o?void 0:o.length)&&void 0!==s?s:0)+(null!==(a=null===(l=e.adds)||void 0===l?void 0:l.length)&&void 0!==a?a:0)}
throttleMutations=e=>{if(3!==e.type||0!==e.data.source)return e
const t=e.data,n=this.numberOfChanges(t)
t.attributes&&(t.attributes=t.attributes.filter((e=>{var t
const[n,i]=this.getNodeOrRelevantParent(e.id)
return 0!==this.mutationBuckets[n]&&(this.mutationBuckets[n]=null!==(t=this.mutationBuckets[n])&&void 0!==t?t:this.bucketSize,this.mutationBuckets[n]=Math.max(this.mutationBuckets[n]-1,0),0===this.mutationBuckets[n]&&(this.loggedTracker[n]||(this.loggedTracker[n]=!0,null===(r=(s=this.options).onBlockedNode)||void 0===r||r.call(s,n,i))),e)
var r,s})))
const i=this.numberOfChanges(t)
return 0!==i||n===i?e:void 0}}var si=Uint8Array,oi=Uint16Array,ai=Uint32Array,li=new si([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ci=new si([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ui=new si([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),di=function(e,t){for(var n=new oi(31),i=0;i<31;++i)n[i]=t+=1<<e[i-1]
var r=new ai(n[30])
for(i=1;i<30;++i)for(var s=n[i];s<n[i+1];++s)r[s]=s-n[i]<<5|i
return[n,r]},hi=di(li,2),fi=hi[0],pi=hi[1]
fi[28]=258,pi[258]=28
for(var gi=di(ci,0)[1],_i=new oi(32768),vi=0;vi<32768;++vi){var mi=(43690&vi)>>>1|(21845&vi)<<1
mi=(61680&(mi=(52428&mi)>>>2|(13107&mi)<<2))>>>4|(3855&mi)<<4,_i[vi]=((65280&mi)>>>8|(255&mi)<<8)>>>1}var yi=function(e,t,n){for(var i=e.length,r=0,s=new oi(t);r<i;++r)++s[e[r]-1]
var o,a=new oi(t)
for(r=0;r<t;++r)a[r]=a[r-1]+s[r-1]<<1
for(o=new oi(i),r=0;r<i;++r)o[r]=_i[a[e[r]-1]++]>>>15-e[r]
return o},bi=new si(288)
for(vi=0;vi<144;++vi)bi[vi]=8
for(vi=144;vi<256;++vi)bi[vi]=9
for(vi=256;vi<280;++vi)bi[vi]=7
for(vi=280;vi<288;++vi)bi[vi]=8
var wi=new si(32)
for(vi=0;vi<32;++vi)wi[vi]=5
var ki=yi(bi,9),Si=yi(wi,5),Ei=function(e){return(e/8>>0)+(7&e&&1)},xi=function(e,t,n){(null==n||n>e.length)&&(n=e.length)
var i=new(e instanceof oi?oi:e instanceof ai?ai:si)(n-t)
return i.set(e.subarray(t,n)),i},Pi=function(e,t,n){n<<=7&t
var i=t/8>>0
e[i]|=n,e[i+1]|=n>>>8},Ti=function(e,t,n){n<<=7&t
var i=t/8>>0
e[i]|=n,e[i+1]|=n>>>8,e[i+2]|=n>>>16},$i=function(e,t){for(var n=[],i=0;i<e.length;++i)e[i]&&n.push({s:i,f:e[i]})
var r=n.length,s=n.slice()
if(!r)return[new si(0),0]
if(1==r){var o=new si(n[0].s+1)
return o[n[0].s]=1,[o,1]}n.sort((function(e,t){return e.f-t.f})),n.push({s:-1,f:25001})
var a=n[0],l=n[1],c=0,u=1,d=2
for(n[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=n[n[c].f<n[d].f?c++:d++],l=n[c!=u&&n[c].f<n[d].f?c++:d++],n[u++]={s:-1,f:a.f+l.f,l:a,r:l}
var h=s[0].s
for(i=1;i<r;++i)s[i].s>h&&(h=s[i].s)
var f=new oi(h+1),p=Ci(n[u-1],f,0)
if(p>t){i=0
var g=0,_=p-t,v=1<<_
for(s.sort((function(e,t){return f[t.s]-f[e.s]||e.f-t.f}));i<r;++i){var m=s[i].s
if(!(f[m]>t))break
g+=v-(1<<p-f[m]),f[m]=t}for(g>>>=_;g>0;){var y=s[i].s
f[y]<t?g-=1<<t-f[y]++-1:++i}for(;i>=0&&g;--i){var b=s[i].s
f[b]==t&&(--f[b],++g)}p=t}return[new si(f),p]},Ci=function(e,t,n){return-1==e.s?Math.max(Ci(e.l,t,n+1),Ci(e.r,t,n+1)):t[e.s]=n},Ii=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new oi(++t),i=0,r=e[0],s=1,o=function(e){n[i++]=e},a=1;a<=t;++a)if(e[a]==r&&a!=t)++s
else{if(!r&&s>2){for(;s>138;s-=138)o(32754)
s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304)
s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r)
s=1,r=e[a]}return[n.subarray(0,i),t]},Li=function(e,t){for(var n=0,i=0;i<t.length;++i)n+=e[i]*t[i]
return n},Ri=function(e,t,n){var i=n.length,r=Ei(t+2)
e[r]=255&i,e[r+1]=i>>>8,e[r+2]=255^e[r],e[r+3]=255^e[r+1]
for(var s=0;s<i;++s)e[r+s+4]=n[s]
return 8*(r+4+i)},Fi=function(e,t,n,i,r,s,o,a,l,c,u){Pi(t,u++,n),++r[256]
for(var d=$i(r,15),h=d[0],f=d[1],p=$i(s,15),g=p[0],_=p[1],v=Ii(h),m=v[0],y=v[1],b=Ii(g),w=b[0],k=b[1],S=new oi(19),E=0;E<m.length;++E)S[31&m[E]]++
for(E=0;E<w.length;++E)S[31&w[E]]++
for(var x=$i(S,7),P=x[0],T=x[1],$=19;$>4&&!P[ui[$-1]];--$);var C,I,L,R,F=c+5<<3,O=Li(r,bi)+Li(s,wi)+o,A=Li(r,h)+Li(s,g)+o+14+3*$+Li(S,P)+(2*S[16]+3*S[17]+7*S[18])
if(F<=O&&F<=A)return Ri(t,u,e.subarray(l,l+c))
if(Pi(t,u,1+(A<O)),u+=2,A<O){C=yi(h,f),I=h,L=yi(g,_),R=g
var M=yi(P,T)
for(Pi(t,u,y-257),Pi(t,u+5,k-1),Pi(t,u+10,$-4),u+=14,E=0;E<$;++E)Pi(t,u+3*E,P[ui[E]])
u+=3*$
for(var N=[m,w],j=0;j<2;++j){var D=N[j]
for(E=0;E<D.length;++E){var B=31&D[E]
Pi(t,u,M[B]),u+=P[B],B>15&&(Pi(t,u,D[E]>>>5&127),u+=D[E]>>>12)}}}else C=ki,I=bi,L=Si,R=wi
for(E=0;E<a;++E)if(i[E]>255){B=i[E]>>>18&31,Ti(t,u,C[B+257]),u+=I[B+257],B>7&&(Pi(t,u,i[E]>>>23&31),u+=li[B])
var H=31&i[E]
Ti(t,u,L[H]),u+=R[H],H>3&&(Ti(t,u,i[E]>>>5&8191),u+=ci[H])}else Ti(t,u,C[i[E]]),u+=I[i[E]]
return Ti(t,u,C[256]),u+I[256]},Oi=new ai([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Ai=function(){for(var e=new ai(256),t=0;t<256;++t){for(var n=t,i=9;--i;)n=(1&n&&3988292384)^n>>>1
e[t]=n}return e}(),Mi=function(){var e=4294967295
return{p:function(t){for(var n=e,i=0;i<t.length;++i)n=Ai[255&n^t[i]]^n>>>8
e=n},d:function(){return 4294967295^e}}},Ni=function(e,t,n,i,r){return function(e,t,n,i,r,s){var o=e.length,a=new si(i+o+5*(1+Math.floor(o/7e3))+r),l=a.subarray(i,a.length-r),c=0
if(!t||o<8)for(var u=0;u<=o;u+=65535){var d=u+65535
d<o?c=Ri(l,c,e.subarray(u,d)):(l[u]=s,c=Ri(l,c,e.subarray(u,o)))}else{for(var h=Oi[t-1],f=h>>>13,p=8191&h,g=(1<<n)-1,_=new oi(32768),v=new oi(g+1),m=Math.ceil(n/3),y=2*m,b=function(t){return(e[t]^e[t+1]<<m^e[t+2]<<y)&g},w=new ai(25e3),k=new oi(288),S=new oi(32),E=0,x=0,P=(u=0,0),T=0,$=0;u<o;++u){var C=b(u),I=32767&u,L=v[C]
if(_[I]=L,v[C]=I,T<=u){var R=o-u
if((E>7e3||P>24576)&&R>423){c=Fi(e,l,0,w,k,S,x,P,$,u-$,c),P=E=x=0,$=u
for(var F=0;F<286;++F)k[F]=0
for(F=0;F<30;++F)S[F]=0}var O=2,A=0,M=p,N=I-L&32767
if(R>2&&C==b(u-N))for(var j=Math.min(f,R)-1,D=Math.min(32767,u),B=Math.min(258,R);N<=D&&--M&&I!=L;){if(e[u+O]==e[u+O-N]){for(var H=0;H<B&&e[u+H]==e[u+H-N];++H);if(H>O){if(O=H,A=N,H>j)break
var q=Math.min(N,H-2),U=0
for(F=0;F<q;++F){var G=u-N+F+32768&32767,W=G-_[G]+32768&32767
W>U&&(U=W,L=G)}}}N+=(I=L)-(L=_[I])+32768&32767}if(A){w[P++]=268435456|pi[O]<<18|gi[A]
var z=31&pi[O],V=31&gi[A]
x+=li[z]+ci[V],++k[257+z],++S[V],T=u+O,++E}else w[P++]=e[u],++k[e[u]]}}c=Fi(e,l,s,w,k,S,x,P,$,u-$,c)}return xi(a,0,i+Ei(c)+r)}(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,n,i,!r)},ji=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},Di=function(e,t){var n=t.filename
if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:9==t.level?2:0,e[9]=3,0!=t.mtime&&ji(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8
for(var i=0;i<=n.length;++i)e[i+10]=n.charCodeAt(i)}},Bi=function(e){return 10+(e.filename&&e.filename.length+1||0)}
function Hi(e,t){void 0===t&&(t={})
var n=Mi(),i=e.length
n.p(e)
var r=Ni(e,t,Bi(t),8),s=r.length
return Di(r,t),ji(r,s-8,n.d()),ji(r,s-4,i),r}function qi(e,t){var n=e.length
if("undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e)
for(var i=new si(e.length+(e.length>>>1)),r=0,s=function(e){i[r++]=e},o=0;o<n;++o){if(r+5>i.length){var a=new si(r+8+(n-o<<1))
a.set(i),i=a}var l=e.charCodeAt(o)
l<128||t?s(l):l<2048?(s(192|l>>>6),s(128|63&l)):l>55295&&l<57344?(s(240|(l=65536+(1047552&l)|1023&e.charCodeAt(++o))>>>18),s(128|l>>>12&63),s(128|l>>>6&63),s(128|63&l)):(s(224|l>>>12),s(128|l>>>6&63),s(128|63&l))}return xi(i,0,r)}const Ui=[wn.MouseMove,wn.MouseInteraction,wn.Scroll,wn.ViewportResize,wn.Input,wn.TouchMove,wn.MediaInteraction,wn.Drag],Gi=e=>({rrwebMethod:e,enqueuedAt:Date.now(),attempt:1}),Wi="[SessionRecording]"
function zi(e){return function(e,t){for(var n="",i=0;i<e.length;){var r=e[i++]
n+=String.fromCharCode(r)}return n}(Hi(qi(JSON.stringify(e))))}function Vi(e){return e.type===bn.Custom&&"sessionIdle"===e.data.tag}function Qi(e,t){return t.some((t=>"regex"===t.matching&&new RegExp(t.url).test(e)))}class Ji{queuedRRWebEvents=[]
isIdle=!1
_linkedFlagSeen=!1
_lastActivityTimestamp=Date.now()
_linkedFlag=null
_removePageViewCaptureHook=void 0
_onSessionIdListener=void 0
_persistDecideOnSessionListener=void 0
_samplingSessionListener=void 0
_urlTriggers=[]
_urlBlocklist=[]
_urlBlocked=!1
_eventTriggers=[]
_removeEventTriggerCaptureHook=void 0
_forceAllowLocalhostNetworkCapture=!1
get sessionIdleThresholdMilliseconds(){return this.instance.config.session_recording.session_idle_threshold_ms||3e5}get rrwebRecord(){var e,t
return null==E||null===(e=E.__PosthogExtensions__)||void 0===e||null===(t=e.rrweb)||void 0===t?void 0:t.record}get started(){return this._captureStarted}get sessionManager(){if(!this.instance.sessionManager)throw new Error(Wi+" must be started with a valid sessionManager.")
return this.instance.sessionManager}get fullSnapshotIntervalMillis(){var e,t
return"trigger_pending"===this.triggerStatus?6e4:null!==(e=null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.full_snapshot_interval_millis)&&void 0!==e?e:3e5}get isSampled(){const e=this.instance.get_property(Ee)
return H(e)?e:null}get sessionDuration(){var e,t
const n=null===(e=this.buffer)||void 0===e?void 0:e.data[(null===(t=this.buffer)||void 0===t?void 0:t.data.length)-1],{sessionStartTimestamp:i}=this.sessionManager.checkAndGetSessionAndWindowId(!0)
return n?n.timestamp-i:null}get isRecordingEnabled(){const e=!!this.instance.get_property(ve),t=!this.instance.config.disable_session_recording
return h&&e&&t}get isConsoleLogCaptureEnabled(){const e=!!this.instance.get_property(me),t=this.instance.config.enable_recording_console_log
return null!=t?t:e}get canvasRecording(){var e,t,n,i,r,s
const o=this.instance.config.session_recording.captureCanvas,a=this.instance.get_property(be),l=null!==(e=null!==(t=null==o?void 0:o.recordCanvas)&&void 0!==t?t:null==a?void 0:a.enabled)&&void 0!==e&&e,c=null!==(n=null!==(i=null==o?void 0:o.canvasFps)&&void 0!==i?i:null==a?void 0:a.fps)&&void 0!==n?n:0,u=null!==(r=null!==(s=null==o?void 0:o.canvasQuality)&&void 0!==s?s:null==a?void 0:a.quality)&&void 0!==r?r:0
return{enabled:l,fps:ii(c,0,12,"canvas recording fps"),quality:ii(u,0,1,"canvas recording quality")}}get networkPayloadCapture(){var e,t
const n=this.instance.get_property(ye),i={recordHeaders:null===(e=this.instance.config.session_recording)||void 0===e?void 0:e.recordHeaders,recordBody:null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.recordBody},r=(null==i?void 0:i.recordHeaders)||(null==n?void 0:n.recordHeaders),s=(null==i?void 0:i.recordBody)||(null==n?void 0:n.recordBody),o=F(this.instance.config.capture_performance)?this.instance.config.capture_performance.network_timing:this.instance.config.capture_performance,a=!!(H(o)?o:null==n?void 0:n.capturePerformance)
return r||s||a?{recordHeaders:r,recordBody:s,recordPerformance:a}:void 0}get sampleRate(){const e=this.instance.get_property(we)
return B(e)?e:null}get minimumDuration(){const e=this.instance.get_property(ke)
return B(e)?e:null}get status(){return this.receivedDecide?this.isRecordingEnabled?D(this._linkedFlag)||this._linkedFlagSeen?"trigger_pending"===this.triggerStatus?"buffering":this._urlBlocked?"paused":H(this.isSampled)?this.isSampled?"sampled":"disabled":"active":"buffering":"disabled":"buffering"}get urlTriggerStatus(){var e
return 0===this._urlTriggers.length?"trigger_disabled":(null===(e=this.instance)||void 0===e?void 0:e.get_property(xe))===this.sessionId?"trigger_activated":"trigger_pending"}get eventTriggerStatus(){var e
return 0===this._eventTriggers.length?"trigger_disabled":(null===(e=this.instance)||void 0===e?void 0:e.get_property(Pe))===this.sessionId?"trigger_activated":"trigger_pending"}get triggerStatus(){const e="trigger_activated"===this.eventTriggerStatus||"trigger_activated"===this.urlTriggerStatus,t="trigger_pending"===this.eventTriggerStatus||"trigger_pending"===this.urlTriggerStatus
return e?"trigger_activated":t?"trigger_pending":"trigger_disabled"}constructor(e){if(this.instance=e,this._captureStarted=!1,this._endpoint="/s/",this.stopRrweb=void 0,this.receivedDecide=!1,!this.instance.sessionManager)throw G.error(Wi+" started without valid sessionManager"),new Error(Wi+" started without valid sessionManager. This is a bug.")
const{sessionId:t,windowId:n}=this.sessionManager.checkAndGetSessionAndWindowId()
this.sessionId=t,this.windowId=n,this.buffer=this.clearBuffer(),this.sessionIdleThresholdMilliseconds>=this.sessionManager.sessionTimeoutMs&&G.warn(Wi+` session_idle_threshold_ms (${this.sessionIdleThresholdMilliseconds}) is greater than the session timeout (${this.sessionManager.sessionTimeoutMs}). Session will never be detected as idle`)}_onBeforeUnload=()=>{this._flushBuffer()}
_onOffline=()=>{this._tryAddCustomEvent("browser offline",{})}
_onOnline=()=>{this._tryAddCustomEvent("browser online",{})}
_onVisibilityChange=()=>{if(null!=m&&m.visibilityState){const e="window "+m.visibilityState
this._tryAddCustomEvent(e,{})}}
startIfEnabledOrStop(e){this.isRecordingEnabled?(this._startCapture(e),null==h||h.addEventListener("beforeunload",this._onBeforeUnload),null==h||h.addEventListener("offline",this._onOffline),null==h||h.addEventListener("online",this._onOnline),null==h||h.addEventListener("visibilitychange",this._onVisibilityChange),this._setupSampling(),this._addEventTriggerListener(),D(this._removePageViewCaptureHook)&&(this._removePageViewCaptureHook=this.instance._addCaptureHook((e=>{try{if("$pageview"===e){const e=h?this._maskUrl(h.location.href):""
if(!e)return
this._tryAddCustomEvent("$pageview",{href:e})}}catch(e){G.error("Could not add $pageview to rrweb session",e)}}))),this._onSessionIdListener||(this._onSessionIdListener=this.sessionManager.onSessionId(((e,t,n)=>{var i,r,s,o
n&&(this._tryAddCustomEvent("$session_id_change",{sessionId:e,windowId:t,changeReason:n}),null===(i=this.instance)||void 0===i||null===(r=i.persistence)||void 0===r||r.unregister(Pe),null===(s=this.instance)||void 0===s||null===(o=s.persistence)||void 0===o||o.unregister(xe))})))):this.stopRecording()}stopRecording(){var e,t,n,i
this._captureStarted&&this.stopRrweb&&(this.stopRrweb(),this.stopRrweb=void 0,this._captureStarted=!1,null==h||h.removeEventListener("beforeunload",this._onBeforeUnload),null==h||h.removeEventListener("offline",this._onOffline),null==h||h.removeEventListener("online",this._onOnline),null==h||h.removeEventListener("visibilitychange",this._onVisibilityChange),this.clearBuffer(),clearInterval(this._fullSnapshotTimer),null===(e=this._removePageViewCaptureHook)||void 0===e||e.call(this),this._removePageViewCaptureHook=void 0,null===(t=this._removeEventTriggerCaptureHook)||void 0===t||t.call(this),this._removeEventTriggerCaptureHook=void 0,null===(n=this._onSessionIdListener)||void 0===n||n.call(this),this._onSessionIdListener=void 0,null===(i=this._samplingSessionListener)||void 0===i||i.call(this),this._samplingSessionListener=void 0,G.info(Wi+" stopped"))}makeSamplingDecision(e){var t
const n=this.sessionId!==e,i=this.sampleRate
var r
if(!B(i))return void(null===(r=this.instance.persistence)||void 0===r||r.register({[Ee]:null}))
const s=this.isSampled
let o
const a=n||!H(s)
o=a?Math.random()<i:s,a&&(o?this._reportStarted("sampled"):G.warn(Wi+` Sample rate (${i}) has determined that this sessionId (${e}) will not be sent to the server.`),this._tryAddCustomEvent("samplingDecisionMade",{sampleRate:i,isSampled:o})),null===(t=this.instance.persistence)||void 0===t||t.register({[Ee]:o})}afterDecideResponse(e){var t,n,i,r,s,o
if(this._persistDecideResponse(e),this._linkedFlag=(null===(t=e.sessionRecording)||void 0===t?void 0:t.linkedFlag)||null,null!==(n=e.sessionRecording)&&void 0!==n&&n.endpoint&&(this._endpoint=null===(o=e.sessionRecording)||void 0===o?void 0:o.endpoint),this._setupSampling(),!D(this._linkedFlag)&&!this._linkedFlagSeen){const e=M(this._linkedFlag)?this._linkedFlag:this._linkedFlag.flag,t=M(this._linkedFlag)?null:this._linkedFlag.variant
this.instance.onFeatureFlags(((n,i)=>{const r=F(i)&&e in i,s=t?i[e]===t:r
s&&this._reportStarted("linked_flag_matched",{linkedFlag:e,linkedVariant:t}),this._linkedFlagSeen=s}))}null!==(i=e.sessionRecording)&&void 0!==i&&i.urlTriggers&&(this._urlTriggers=e.sessionRecording.urlTriggers),null!==(r=e.sessionRecording)&&void 0!==r&&r.urlBlocklist&&(this._urlBlocklist=e.sessionRecording.urlBlocklist),null!==(s=e.sessionRecording)&&void 0!==s&&s.eventTriggers&&(this._eventTriggers=e.sessionRecording.eventTriggers),this.receivedDecide=!0,this.startIfEnabledOrStop()}_setupSampling(){B(this.sampleRate)&&D(this._samplingSessionListener)&&(this._samplingSessionListener=this.sessionManager.onSessionId((e=>{this.makeSamplingDecision(e)})))}_persistDecideResponse(e){if(this.instance.persistence){var t
const n=this.instance.persistence,i=()=>{var t,i,r,s,o,a,l
const c=null===(t=e.sessionRecording)||void 0===t?void 0:t.sampleRate,u=D(c)?null:parseFloat(c),d=null===(i=e.sessionRecording)||void 0===i?void 0:i.minimumDurationMilliseconds
n.register({[ve]:!!e.sessionRecording,[me]:null===(r=e.sessionRecording)||void 0===r?void 0:r.consoleLogRecordingEnabled,[ye]:{capturePerformance:e.capturePerformance,...null===(s=e.sessionRecording)||void 0===s?void 0:s.networkPayloadCapture},[be]:{enabled:null===(o=e.sessionRecording)||void 0===o?void 0:o.recordCanvas,fps:null===(a=e.sessionRecording)||void 0===a?void 0:a.canvasFps,quality:null===(l=e.sessionRecording)||void 0===l?void 0:l.canvasQuality},[we]:u,[ke]:A(d)?null:d})}
i(),null===(t=this._persistDecideOnSessionListener)||void 0===t||t.call(this),this._persistDecideOnSessionListener=this.sessionManager.onSessionId(i)}}log(e){var t
let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log"
null===(t=this.instance.sessionRecording)||void 0===t||t.onRRwebEmit({type:6,data:{plugin:"rrweb/console@1",payload:{level:n,trace:[],payload:[JSON.stringify(e)]}},timestamp:Date.now()})}_startCapture(e){var t,n
A(Object.assign)||A(Array.from)||(this._captureStarted||this.instance.config.disable_session_recording||this.instance.consent.isOptedOut())||(this._captureStarted=!0,this.sessionManager.checkAndGetSessionAndWindowId(),this.rrwebRecord?this._onScriptLoaded():null===(t=E.__PosthogExtensions__)||void 0===t||null===(n=t.loadExternalDependency)||void 0===n||n.call(t,this.instance,"recorder",(e=>{if(e)return G.error(Wi+" could not load recorder",e)
this._onScriptLoaded()})),G.info(Wi+" starting"),"active"===this.status&&this._reportStarted(e||"recording_initialized"))}isInteractiveEvent(e){var t
return 3===e.type&&-1!==Ui.indexOf(null===(t=e.data)||void 0===t?void 0:t.source)}_updateWindowAndSessionIds(e){const t=this.isInteractiveEvent(e)
t||this.isIdle||e.timestamp-this._lastActivityTimestamp>this.sessionIdleThresholdMilliseconds&&(this.isIdle=!0,clearInterval(this._fullSnapshotTimer),this._tryAddCustomEvent("sessionIdle",{eventTimestamp:e.timestamp,lastActivityTimestamp:this._lastActivityTimestamp,threshold:this.sessionIdleThresholdMilliseconds,bufferLength:this.buffer.data.length,bufferSize:this.buffer.size}),this._flushBuffer())
let n=!1
if(t&&(this._lastActivityTimestamp=e.timestamp,this.isIdle&&(this.isIdle=!1,this._tryAddCustomEvent("sessionNoLongerIdle",{reason:"user activity",type:e.type}),n=!0)),this.isIdle)return
const{windowId:i,sessionId:r}=this.sessionManager.checkAndGetSessionAndWindowId(!t,e.timestamp),s=this.sessionId!==r,o=this.windowId!==i
this.windowId=i,this.sessionId=r,s||o?(this.stopRecording(),this.startIfEnabledOrStop("session_id_changed")):n&&this._scheduleFullSnapshot()}_tryRRWebMethod(e){try{return e.rrwebMethod(),!0}catch(t){return this.queuedRRWebEvents.length<10?this.queuedRRWebEvents.push({enqueuedAt:e.enqueuedAt||Date.now(),attempt:e.attempt++,rrwebMethod:e.rrwebMethod}):G.warn(Wi+" could not emit queued rrweb event.",t,e),!1}}_tryAddCustomEvent(e,t){return this._tryRRWebMethod(Gi((()=>this.rrwebRecord.addCustomEvent(e,t))))}_tryTakeFullSnapshot(){return this._tryRRWebMethod(Gi((()=>this.rrwebRecord.takeFullSnapshot())))}_onScriptLoaded(){var e
const t={blockClass:"ph-no-capture",blockSelector:void 0,ignoreClass:"ph-ignore-input",maskTextClass:"ph-mask",maskTextSelector:void 0,maskTextFn:void 0,maskAllInputs:!0,maskInputOptions:{password:!0},maskInputFn:void 0,slimDOMOptions:{},collectFonts:!1,inlineStylesheet:!0,recordCrossOriginIframes:!1},n=this.instance.config.session_recording
for(const[e,i]of Object.entries(n||{}))e in t&&("maskInputOptions"===e?t.maskInputOptions={password:!0,...i}:t[e]=i)
if(this.canvasRecording&&this.canvasRecording.enabled&&(t.recordCanvas=!0,t.sampling={canvas:this.canvasRecording.fps},t.dataURLOptions={type:"image/webp",quality:this.canvasRecording.quality}),!this.rrwebRecord)return void G.error(Wi+"onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")
this.mutationRateLimiter=null!==(e=this.mutationRateLimiter)&&void 0!==e?e:new ri(this.rrwebRecord,{refillRate:this.instance.config.session_recording.__mutationRateLimiterRefillRate,bucketSize:this.instance.config.session_recording.__mutationRateLimiterBucketSize,onBlockedNode:(e,t)=>{const n=`Too many mutations on node '${e}'. Rate limiting. This could be due to SVG animations or something similar`
G.info(n,{node:t}),this.log(Wi+" "+n,"warn")}})
const i=this._gatherRRWebPlugins()
this.stopRrweb=this.rrwebRecord({emit:e=>{this.onRRwebEmit(e)},plugins:i,...t}),this._lastActivityTimestamp=Date.now(),this.isIdle=!1,this._tryAddCustomEvent("$session_options",{sessionRecordingOptions:t,activePlugins:i.map((e=>null==e?void 0:e.name))}),this._tryAddCustomEvent("$posthog_config",{config:this.instance.config})}_scheduleFullSnapshot(){if(this._fullSnapshotTimer&&clearInterval(this._fullSnapshotTimer),this.isIdle)return
const e=this.fullSnapshotIntervalMillis
e&&(this._fullSnapshotTimer=setInterval((()=>{this._tryTakeFullSnapshot()}),e))}_gatherRRWebPlugins(){var e,t,n,i
const r=[],s=null===(e=E.__PosthogExtensions__)||void 0===e||null===(t=e.rrwebPlugins)||void 0===t?void 0:t.getRecordConsolePlugin
s&&this.isConsoleLogCaptureEnabled&&r.push(s())
const o=null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.rrwebPlugins)||void 0===i?void 0:i.getRecordNetworkPlugin
return this.networkPayloadCapture&&R(o)&&(!ft.includes(location.hostname)||this._forceAllowLocalhostNetworkCapture?r.push(o(((e,t)=>{const n={payloadSizeLimitBytes:Xn.payloadSizeLimitBytes,performanceEntryTypeToObserve:[...Xn.performanceEntryTypeToObserve],payloadHostDenyList:[...t.payloadHostDenyList||[],...Xn.payloadHostDenyList]},i=!1!==e.session_recording.recordHeaders&&t.recordHeaders,r=!1!==e.session_recording.recordBody&&t.recordBody,s=!1!==e.capture_performance&&t.recordPerformance,o=(e=>{var t
const n=Math.min(1e6,null!==(t=e.payloadSizeLimitBytes)&&void 0!==t?t:1e6)
return e=>(null!=e&&e.requestBody&&(e.requestBody=ti(e.requestBody,e.requestHeaders,n,"Request")),null!=e&&e.responseBody&&(e.responseBody=ti(e.responseBody,e.responseHeaders,n,"Response")),e)})(n),a=e=>o((e=>{const t=pt(e.name)
if(!(t&&t.pathname&&ei.some((e=>0===t.pathname.indexOf(e)))))return e})((e=>{const t=e.requestHeaders
return D(t)||J(Object.keys(null!=t?t:{}),(e=>{Yn.includes(e.toLowerCase())&&(t[e]=Kn)})),e})(e))),l=R(e.session_recording.maskNetworkRequestFn)
return l&&R(e.session_recording.maskCapturedNetworkRequestFn)&&G.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."),l&&(e.session_recording.maskCapturedNetworkRequestFn=t=>{const n=e.session_recording.maskNetworkRequestFn({url:t.name})
return{...t,name:null==n?void 0:n.url}}),n.maskRequestFn=R(e.session_recording.maskCapturedNetworkRequestFn)?t=>{var n,i,r
const s=a(t)
return s&&null!==(n=null===(i=(r=e.session_recording).maskCapturedNetworkRequestFn)||void 0===i?void 0:i.call(r,s))&&void 0!==n?n:void 0}:e=>function(e){if(!A(e))return e.requestBody=ni(e.requestBody,"Request"),e.responseBody=ni(e.responseBody,"Response"),e}(a(e)),{...Xn,...n,recordHeaders:i,recordBody:r,recordPerformance:s,recordInitialRequests:s}})(this.instance.config,this.networkPayloadCapture))):G.info(Wi+" NetworkCapture not started because we are on localhost.")),r}onRRwebEmit(e){var t
if(this._processQueuedEvents(),!e||!F(e))return
if(e.type===bn.Meta){const t=this._maskUrl(e.data.href)
if(this._lastHref=t,!t)return
e.data.href=t}else this._pageViewFallBack()
if(this._checkUrlTriggerConditions(),"paused"===this.status&&!function(e){return e.type===bn.Custom&&"recording paused"===e.data.tag}(e))return
e.type===bn.FullSnapshot&&this._scheduleFullSnapshot(),e.type===bn.FullSnapshot&&"trigger_pending"===this.triggerStatus&&this.clearBuffer()
const n=this.mutationRateLimiter?this.mutationRateLimiter.throttleMutations(e):e
if(!n)return
const i=function(e){const t=e
if(t&&F(t)&&6===t.type&&F(t.data)&&"rrweb/console@1"===t.data.plugin){t.data.payload.payload.length>10&&(t.data.payload.payload=t.data.payload.payload.slice(0,10),t.data.payload.payload.push("...[truncated]"))
const n=[]
for(let e=0;e<t.data.payload.payload.length;e++)t.data.payload.payload[e]&&t.data.payload.payload[e].length>2e3?n.push(t.data.payload.payload[e].slice(0,2e3)+"...[truncated]"):n.push(t.data.payload.payload[e])
return t.data.payload.payload=n,e}return e}(n)
if(this._updateWindowAndSessionIds(i),this.isIdle&&!Vi(i))return
if(Vi(i)){const e=i.data.payload
if(e){const t=e.lastActivityTimestamp,n=e.threshold
i.timestamp=t+n}}const r=null===(t=this.instance.config.session_recording.compress_events)||void 0===t||t?function(e){if(mn(e)<1024)return e
try{if(e.type===bn.FullSnapshot)return{...e,data:zi(e.data),cv:"2024-10"}
if(e.type===bn.IncrementalSnapshot&&e.data.source===wn.Mutation)return{...e,cv:"2024-10",data:{...e.data,texts:zi(e.data.texts),attributes:zi(e.data.attributes),removes:zi(e.data.removes),adds:zi(e.data.adds)}}
if(e.type===bn.IncrementalSnapshot&&e.data.source===wn.StyleSheetRule)return{...e,cv:"2024-10",data:{...e.data,adds:zi(e.data.adds),removes:zi(e.data.removes)}}}catch(e){G.error(Wi+" could not compress event - will use uncompressed event",e)}return e}(i):i,s={$snapshot_bytes:mn(r),$snapshot_data:r,$session_id:this.sessionId,$window_id:this.windowId}
"disabled"!==this.status?this._captureSnapshotBuffered(s):this.clearBuffer()}_pageViewFallBack(){if(this.instance.config.capture_pageview||!h)return
const e=this._maskUrl(h.location.href)
this._lastHref!==e&&(this._tryAddCustomEvent("$url_changed",{href:e}),this._lastHref=e)}_processQueuedEvents(){if(this.queuedRRWebEvents.length){const e=[...this.queuedRRWebEvents]
this.queuedRRWebEvents=[],e.forEach((e=>{Date.now()-e.enqueuedAt<=2e3&&this._tryRRWebMethod(e)}))}}_maskUrl(e){const t=this.instance.config.session_recording
if(t.maskNetworkRequestFn){var n
let i={url:e}
return i=t.maskNetworkRequestFn(i),null===(n=i)||void 0===n?void 0:n.url}return e}clearBuffer(){return this.buffer={size:0,data:[],sessionId:this.sessionId,windowId:this.windowId},this.buffer}_flushBuffer(){this.flushBufferTimer&&(clearTimeout(this.flushBufferTimer),this.flushBufferTimer=void 0)
const e=this.minimumDuration,t=this.sessionDuration,n=B(t)&&t>=0,i=B(e)&&n&&t<e
return"buffering"===this.status||i?(this.flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3),this.buffer):(this.buffer.data.length>0&&yn(this.buffer).forEach((e=>{this._captureSnapshot({$snapshot_bytes:e.size,$snapshot_data:e.data,$session_id:e.sessionId,$window_id:e.windowId})})),this.clearBuffer())}_captureSnapshotBuffered(e){var t
const n=2+((null===(t=this.buffer)||void 0===t?void 0:t.data.length)||0)
!this.isIdle&&(this.buffer.size+e.$snapshot_bytes+n>943718.4||this.buffer.sessionId!==this.sessionId)&&(this.buffer=this._flushBuffer()),this.buffer.size+=e.$snapshot_bytes,this.buffer.data.push(e.$snapshot_data),this.flushBufferTimer||this.isIdle||(this.flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3))}_captureSnapshot(e){this.instance.capture("$snapshot",e,{_url:this.instance.requestRouter.endpointFor("api",this._endpoint),_noTruncate:!0,_batchKey:"recordings",skip_client_rate_limiting:!0})}_checkUrlTriggerConditions(){if(void 0===h||!h.location.href)return
const e=h.location.href,t="paused"===this.status,n=Qi(e,this._urlBlocklist)
n&&!t?this._pauseRecording():!n&&t&&this._resumeRecording(),Qi(e,this._urlTriggers)&&this._activateTrigger("url")}_activateTrigger(e){var t,n
"trigger_pending"===this.triggerStatus&&(null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n||n.register({["url"===e?xe:Pe]:this.sessionId}),this._flushBuffer(),this._reportStarted(e+"_trigger_matched"))}_pauseRecording(){var e,t
"paused"!==this.status&&(this._urlBlocked=!0,null==m||null===(e=m.body)||void 0===e||null===(t=e.classList)||void 0===t||t.add("ph-no-capture"),clearInterval(this._fullSnapshotTimer),setTimeout((()=>{this._flushBuffer()}),100),G.info(Wi+" recording paused due to URL blocker"),this._tryAddCustomEvent("recording paused",{reason:"url blocker"}))}_resumeRecording(){var e,t
"paused"===this.status&&(this._urlBlocked=!1,null==m||null===(e=m.body)||void 0===e||null===(t=e.classList)||void 0===t||t.remove("ph-no-capture"),this._tryTakeFullSnapshot(),this._scheduleFullSnapshot(),this._tryAddCustomEvent("recording resumed",{reason:"left blocked url"}),G.info(Wi+" recording resumed"))}_addEventTriggerListener(){0!==this._eventTriggers.length&&D(this._removeEventTriggerCaptureHook)&&(this._removeEventTriggerCaptureHook=this.instance.on("eventCaptured",(e=>{try{this._eventTriggers.includes(e.event)&&this._activateTrigger("event")}catch(e){G.error(Wi+"Could not activate event trigger",e)}})))}overrideLinkedFlag(){this._linkedFlagSeen=!0,this._reportStarted("linked_flag_overridden")}overrideSampling(){var e
null===(e=this.instance.persistence)||void 0===e||e.register({[Ee]:!0}),this._reportStarted("sampling_overridden")}overrideTrigger(e){this._activateTrigger(e)}_reportStarted(e,t){this.instance.register_for_session({$session_recording_start_reason:e}),G.info(Wi+" "+e.replace("_"," "),t),X(["recording_initialized","session_id_changed"],e)||this._tryAddCustomEvent(e,t)}}class Ki{constructor(e){this.instance=e,this.instance.decideEndpointWasHit=this.instance._hasBootstrappedFeatureFlags()}call(){const e={token:this.instance.config.token,distinct_id:this.instance.get_distinct_id(),groups:this.instance.getGroups(),person_properties:this.instance.get_property(Ce),group_properties:this.instance.get_property(Ie),disable_flags:this.instance.config.advanced_disable_feature_flags||this.instance.config.advanced_disable_feature_flags_on_first_load||void 0}
this.instance._send_request({method:"POST",url:this.instance.requestRouter.endpointFor("api","/decide/?v=3"),data:e,compression:this.instance.config.disable_compression?void 0:oe.Base64,timeout:this.instance.config.feature_flag_request_timeout_ms,callback:e=>this.parseDecideResponse(e.json)})}parseDecideResponse(e){this.instance.featureFlags.setReloadingPaused(!1),this.instance.featureFlags._startReloadTimer()
const t=!e
if(this.instance.config.advanced_disable_feature_flags_on_first_load||this.instance.config.advanced_disable_feature_flags||this.instance.featureFlags.receivedFeatureFlags(null!=e?e:{},t),t)G.error("Failed to fetch feature flags from PostHog.")
else{if(!m||!m.body)return G.info("document not ready yet, trying again in 500 milliseconds..."),void setTimeout((()=>{this.parseDecideResponse(e)}),500)
if(this.instance._afterDecideResponse(e),e.siteApps)if(this.instance.config.opt_in_site_apps)for(const{id:t,url:s}of e.siteApps){var n,i,r
E[`__$$ph_site_app_${t}`]=this.instance,null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=(r=n).loadSiteApp)||void 0===i||i.call(r,this.instance,s,(e=>{if(e)return G.error(`Error while initializing PostHog app with config id ${t}`,e)}))}else e.siteApps.length>0&&G.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')}}}const Xi=null!=h&&h.location?vt(h.location.hash,"__posthog")||vt(location.hash,"state"):null,Yi="_postHogToolbarParams"
var Zi
!function(e){e[e.UNINITIALIZED=0]="UNINITIALIZED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(Zi||(Zi={}))
class er{constructor(e){this.instance=e}setToolbarState(e){E.ph_toolbar_state=e}getToolbarState(){var e
return null!==(e=E.ph_toolbar_state)&&void 0!==e?e:Zi.UNINITIALIZED}maybeLoadToolbar(){var e,t
let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
if(!h||!m)return!1
n=null!==(e=n)&&void 0!==e?e:h.location,r=null!==(t=r)&&void 0!==t?t:h.history
try{if(!i){try{h.localStorage.setItem("test","test"),h.localStorage.removeItem("test")}catch{return!1}i=null==h?void 0:h.localStorage}const e=Xi||vt(n.hash,"__posthog")||vt(n.hash,"state")
let t
const s=e?Z((()=>JSON.parse(atob(decodeURIComponent(e)))))||Z((()=>JSON.parse(decodeURIComponent(e)))):null
return s&&"ph_authorize"===s.action?(t=s,t.source="url",t&&Object.keys(t).length>0&&(s.desiredHash?n.hash=s.desiredHash:r?r.replaceState(r.state,"",n.pathname+n.search):n.hash="")):(t=JSON.parse(i.getItem(Yi)||"{}"),t.source="localstorage",delete t.userIntent),!(!t.token||this.instance.config.token!==t.token||(this.loadToolbar(t),0))}catch{return!1}}_callLoadToolbar(e){(E.ph_load_toolbar||E.ph_load_editor)(e,this.instance)}loadToolbar(e){const t=!(null==m||!m.getElementById(He))
if(!h||t)return!1
const n="custom"===this.instance.requestRouter.region&&this.instance.config.advanced_disable_toolbar_metrics,i={token:this.instance.config.token,...e,apiURL:this.instance.requestRouter.endpointFor("ui"),...n?{instrument:!1}:{}}
if(h.localStorage.setItem(Yi,JSON.stringify({...i,source:void 0})),this.getToolbarState()===Zi.LOADED)this._callLoadToolbar(i)
else if(this.getToolbarState()===Zi.UNINITIALIZED){var r,s
this.setToolbarState(Zi.LOADING),null===(r=E.__PosthogExtensions__)||void 0===r||null===(s=r.loadExternalDependency)||void 0===s||s.call(r,this.instance,"toolbar",(e=>{if(e)return G.error("Failed to load toolbar",e),void this.setToolbarState(Zi.UNINITIALIZED)
this.setToolbarState(Zi.LOADED),this._callLoadToolbar(i)})),ie(h,"turbolinks:load",(()=>{this.setToolbarState(Zi.UNINITIALIZED),this.loadToolbar(i)}))}return!0}_loadEditor(e){return this.loadToolbar(e)}maybeLoadEditor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
return this.maybeLoadToolbar(e,t,n)}}class tr{isPaused=!0
queue=[]
flushTimeoutMs=3e3
constructor(e){this.sendRequest=e}enqueue(e){this.queue.push(e),this.flushTimeout||this.setFlushTimeout()}unload(){this.clearFlushTimeout()
const e=this.queue.length>0?this.formatQueue():{},t=Object.values(e),n=[...t.filter((e=>0===e.url.indexOf("/e"))),...t.filter((e=>0!==e.url.indexOf("/e")))]
n.map((e=>{this.sendRequest({...e,transport:"sendBeacon"})}))}enable(){this.isPaused=!1,this.setFlushTimeout()}setFlushTimeout(){this.isPaused||(this.flushTimeout=setTimeout((()=>{if(this.clearFlushTimeout(),this.queue.length>0){const e=this.formatQueue()
for(const t in e){const n=e[t],i=(new Date).getTime()
n.data&&L(n.data)&&J(n.data,(e=>{e.offset=Math.abs(e.timestamp-i),delete e.timestamp})),this.sendRequest(n)}}}),this.flushTimeoutMs))}clearFlushTimeout(){clearTimeout(this.flushTimeout),this.flushTimeout=void 0}formatQueue(){const e={}
return J(this.queue,(t=>{var n
const i=t,r=(i?i.batchKey:null)||i.url
A(e[r])&&(e[r]={...i,data:[]}),null===(n=e[r].data)||void 0===n||n.push(i.data)})),this.queue=[],e}}const nr=!!w||!!b,ir="text/plain",rr=(e,t)=>{const[n,i]=e.split("?"),r={...t}
null==i||i.split("&").forEach((e=>{const[t]=e.split("=")
delete r[t]}))
let s=function(e){let t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&"
const r=[]
return J(e,(function(e,i){A(e)||A(i)||"undefined"===i||(t=encodeURIComponent((e=>e instanceof File)(e)?e.name:e.toString()),n=encodeURIComponent(i),r[r.length]=n+"="+t)})),r.join(i)}(r)
return s=s?(i?i+"&":"")+s:i,`${n}?${s}`},sr=e=>{let{data:t,compression:n}=e
if(!t)return
if(n===oe.GZipJS){const e=Hi(qi(JSON.stringify(t)),{mtime:0}),n=new Blob([e],{type:ir})
return{contentType:ir,body:n,estimatedSize:n.size}}if(n===oe.Base64){const e=function(e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
let n,i,r,s,o,a,l,c,u=0,d=0,h=""
const f=[]
if(!e)return e
e=function(e){let t,n,i,r="",s=0
for(t=n=0,s=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,i=0;i<s;i++){const s=e.charCodeAt(i)
let o=null
s<128?n++:o=s>127&&s<2048?String.fromCharCode(s>>6|192,63&s|128):String.fromCharCode(s>>12|224,s>>6&63|128,63&s|128),j(o)||(n>t&&(r+=e.substring(t,n)),r+=o,t=n=i+1)}return n>t&&(r+=e.substring(t,e.length)),r}(e)
do{n=e.charCodeAt(u++),i=e.charCodeAt(u++),r=e.charCodeAt(u++),c=n<<16|i<<8|r,s=c>>18&63,o=c>>12&63,a=c>>6&63,l=63&c,f[d++]=t.charAt(s)+t.charAt(o)+t.charAt(a)+t.charAt(l)}while(u<e.length)
switch(h=f.join(""),e.length%3){case 1:h=h.slice(0,-2)+"=="
break
case 2:h=h.slice(0,-1)+"="}return h}(JSON.stringify(t)),n=(e=>"data="+encodeURIComponent("string"==typeof e?e:JSON.stringify(e)))(e)
return{contentType:"application/x-www-form-urlencoded",body:n,estimatedSize:new Blob([n]).size}}const i=JSON.stringify(t)
return{contentType:"application/json",body:i,estimatedSize:new Blob([i]).size}},or=[]
w&&or.push({transport:"XHR",method:e=>{var t
const n=new w
n.open(e.method||"GET",e.url,!0)
const{contentType:i,body:r}=null!==(t=sr(e))&&void 0!==t?t:{}
J(e.headers,(function(e,t){n.setRequestHeader(t,e)})),i&&n.setRequestHeader("Content-Type",i),e.timeout&&(n.timeout=e.timeout),n.withCredentials=!0,n.onreadystatechange=()=>{if(4===n.readyState){var t
const i={statusCode:n.status,text:n.responseText}
if(200===n.status)try{i.json=JSON.parse(n.responseText)}catch{}null===(t=e.callback)||void 0===t||t.call(e,i)}},n.send(r)}}),b&&or.push({transport:"fetch",method:e=>{var t,n
const{contentType:i,body:r,estimatedSize:s}=null!==(t=sr(e))&&void 0!==t?t:{},o=new Headers
J(e.headers,(function(e,t){o.append(t,e)})),i&&o.append("Content-Type",i)
const a=e.url
let l=null
if(k){const t=new k
l={signal:t.signal,timeout:setTimeout((()=>t.abort()),e.timeout)}}b(a,{method:(null==e?void 0:e.method)||"GET",headers:o,keepalive:"POST"===e.method&&(s||0)<52428.8,body:r,signal:null===(n=l)||void 0===n?void 0:n.signal}).then((t=>t.text().then((n=>{var i
const r={statusCode:t.status,text:n}
if(200===t.status)try{r.json=JSON.parse(n)}catch(e){G.error(e)}null===(i=e.callback)||void 0===i||i.call(e,r)})))).catch((t=>{var n
G.error(t),null===(n=e.callback)||void 0===n||n.call(e,{statusCode:0,text:t})})).finally((()=>l?clearTimeout(l.timeout):null))}}),null!=v&&v.sendBeacon&&or.push({transport:"sendBeacon",method:e=>{const t=rr(e.url,{beacon:"1"})
try{var n
const{contentType:i,body:r}=null!==(n=sr(e))&&void 0!==n?n:{},s="string"==typeof r?new Blob([r],{type:i}):r
v.sendBeacon(t,s)}catch{}}})
class ar{isPolling=!1
pollIntervalMs=3e3
queue=[]
constructor(e){this.instance=e,this.queue=[],this.areWeOnline=!0,!A(h)&&"onLine"in h.navigator&&(this.areWeOnline=h.navigator.onLine,h.addEventListener("online",(()=>{this.areWeOnline=!0,this.flush()})),h.addEventListener("offline",(()=>{this.areWeOnline=!1})))}retriableRequest(e){let{retriesPerformedSoFar:t,...n}=e
B(t)&&t>0&&(n.url=rr(n.url,{retry_count:t})),this.instance._send_request({...n,callback:e=>{var i
200!==e.statusCode&&(e.statusCode<400||e.statusCode>=500)&&(null!=t?t:0)<10?this.enqueue({retriesPerformedSoFar:t,...n}):null===(i=n.callback)||void 0===i||i.call(n,e)}})}enqueue(e){const t=e.retriesPerformedSoFar||0
e.retriesPerformedSoFar=t+1
const n=function(e){const t=3e3*2**e,n=t/2,i=Math.min(18e5,t),r=(Math.random()-.5)*(i-n)
return Math.ceil(i+r)}(t),i=Date.now()+n
this.queue.push({retryAt:i,requestOptions:e})
let r=`Enqueued failed request for retry in ${n}`
navigator.onLine||(r+=" (Browser is offline)"),G.warn(r),this.isPolling||(this.isPolling=!0,this.poll())}poll(){this.poller&&clearTimeout(this.poller),this.poller=setTimeout((()=>{this.areWeOnline&&this.queue.length>0&&this.flush(),this.poll()}),this.pollIntervalMs)}flush(){const e=Date.now(),t=[],n=this.queue.filter((n=>n.retryAt<e||(t.push(n),!1)))
if(this.queue=t,n.length>0)for(const{requestOptions:e}of n)this.retriableRequest(e)}unload(){this.poller&&(clearTimeout(this.poller),this.poller=void 0)
for(const{requestOptions:e}of this.queue)try{this.instance._send_request({...e,transport:"sendBeacon"})}catch(e){G.error(e)}this.queue=[]}}class lr{_sessionIdChangedHandlers=[]
constructor(e,t,n,i){var r
this.config=e,this.persistence=t,this._windowId=void 0,this._sessionId=void 0,this._sessionStartTimestamp=null,this._sessionActivityTimestamp=null,this._sessionIdGenerator=n||et,this._windowIdGenerator=i||et
const s=e.persistence_name||e.token,o=e.session_idle_timeout_seconds||1800
if(this._sessionTimeoutMs=1e3*ii(o,60,1800,"session_idle_timeout_seconds"),this._window_id_storage_key="ph_"+s+"_window_id",this._primary_window_exists_storage_key="ph_"+s+"_primary_window_exists",this._canUseSessionStorage()){const e=ht.parse(this._window_id_storage_key),t=ht.parse(this._primary_window_exists_storage_key)
e&&!t?this._windowId=e:ht.remove(this._window_id_storage_key),ht.set(this._primary_window_exists_storage_key,!0)}if(null!==(r=this.config.bootstrap)&&void 0!==r&&r.sessionID)try{const e=(e=>{const t=this.config.bootstrap.sessionID.replace(/-/g,"")
if(32!==t.length)throw new Error("Not a valid UUID")
if("7"!==t[12])throw new Error("Not a UUIDv7")
return parseInt(t.substring(0,12),16)})()
this._setSessionId(this.config.bootstrap.sessionID,(new Date).getTime(),e)}catch(e){G.error("Invalid sessionID in bootstrap",e)}this._listenToReloadWindow()}get sessionTimeoutMs(){return this._sessionTimeoutMs}onSessionId(e){return A(this._sessionIdChangedHandlers)&&(this._sessionIdChangedHandlers=[]),this._sessionIdChangedHandlers.push(e),this._sessionId&&e(this._sessionId,this._windowId),()=>{this._sessionIdChangedHandlers=this._sessionIdChangedHandlers.filter((t=>t!==e))}}_canUseSessionStorage(){return"memory"!==this.config.persistence&&!this.persistence.disabled&&ht.is_supported()}_setWindowId(e){e!==this._windowId&&(this._windowId=e,this._canUseSessionStorage()&&ht.set(this._window_id_storage_key,e))}_getWindowId(){return this._windowId?this._windowId:this._canUseSessionStorage()?ht.parse(this._window_id_storage_key):null}_setSessionId(e,t,n){e===this._sessionId&&t===this._sessionActivityTimestamp&&n===this._sessionStartTimestamp||(this._sessionStartTimestamp=n,this._sessionActivityTimestamp=t,this._sessionId=e,this.persistence.register({[Se]:[t,e,n]}))}_getSessionId(){if(this._sessionId&&this._sessionActivityTimestamp&&this._sessionStartTimestamp)return[this._sessionActivityTimestamp,this._sessionId,this._sessionStartTimestamp]
const e=this.persistence.props[Se]
return L(e)&&2===e.length&&e.push(e[0]),e||[0,null,0]}resetSessionId(){this._setSessionId(null,null,null)}_listenToReloadWindow(){null==h||h.addEventListener("beforeunload",(()=>{this._canUseSessionStorage()&&ht.remove(this._primary_window_exists_storage_key)}))}checkAndGetSessionAndWindowId(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
const t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:null)||(new Date).getTime()
let[n,i,r]=this._getSessionId(),s=this._getWindowId()
const o=B(r)&&r>0&&Math.abs(t-r)>864e5
let a=!1
const l=!i,c=!e&&Math.abs(t-n)>this.sessionTimeoutMs
l||c||o?(i=this._sessionIdGenerator(),s=this._windowIdGenerator(),G.info("[SessionId] new session ID generated",{sessionId:i,windowId:s,changeReason:{noSessionId:l,activityTimeout:c,sessionPastMaximumLength:o}}),r=t,a=!0):s||(s=this._windowIdGenerator(),a=!0)
const u=0===n||!e||o?t:n,d=0===r?(new Date).getTime():r
return this._setWindowId(s),this._setSessionId(i,u,d),a&&this._sessionIdChangedHandlers.forEach((e=>e(i,s,a?{noSessionId:l,activityTimeout:c,sessionPastMaximumLength:o}:void 0))),{sessionId:i,windowId:s,sessionStartTimestamp:d,changeReason:a?{noSessionId:l,activityTimeout:c,sessionPastMaximumLength:o}:void 0,lastActivityTimestamp:n}}}let cr
!function(e){e.US="us",e.EU="eu",e.CUSTOM="custom"}(cr||(cr={}))
const ur="i.posthog.com"
class dr{_regionCache={}
constructor(e){this.instance=e}get apiHost(){const e=this.instance.config.api_host.trim().replace(/\/$/,"")
return"https://app.posthog.com"===e?"https://us.i.posthog.com":e}get uiHost(){var e
let t=null===(e=this.instance.config.ui_host)||void 0===e?void 0:e.replace(/\/$/,"")
return t||(t=this.apiHost.replace(`.${ur}`,".posthog.com")),"https://app.posthog.com"===t?"https://us.posthog.com":t}get region(){return this._regionCache[this.apiHost]||(/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=cr.US:/https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=cr.EU:this._regionCache[this.apiHost]=cr.CUSTOM),this._regionCache[this.apiHost]}endpointFor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
if(t&&(t="/"===t[0]?t:`/${t}`),"ui"===e)return this.uiHost+t
if(this.region===cr.CUSTOM)return this.apiHost+t
const n=ur+t
switch(e){case"assets":return`https://${this.region}-assets.${n}`
case"api":return`https://${this.region}.${n}`}}}const hr="posthog-js"
function fr(e){let{organization:t,projectId:n,prefix:i,severityAllowList:r=["error"]}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return s=>{var o,a,l,c,u
if("*"!==r&&!r.includes(s.level)||!e.__loaded)return s
s.tags||(s.tags={})
const d=e.requestRouter.endpointFor("ui",`/project/${e.config.token}/person/${e.get_distinct_id()}`)
s.tags["PostHog Person URL"]=d,e.sessionRecordingStarted()&&(s.tags["PostHog Recording URL"]=e.get_session_replay_url({withTimestamp:!0}))
const h=(null===(o=s.exception)||void 0===o?void 0:o.values)||[]
h.map((e=>{e.stacktrace&&(e.stacktrace.type="raw")}))
const f={$exception_message:(null===(a=h[0])||void 0===a?void 0:a.value)||s.message,$exception_type:null===(l=h[0])||void 0===l?void 0:l.type,$exception_personURL:d,$exception_level:s.level,$exception_list:h,$sentry_event_id:s.event_id,$sentry_exception:s.exception,$sentry_exception_message:(null===(c=h[0])||void 0===c?void 0:c.value)||s.message,$sentry_exception_type:null===(u=h[0])||void 0===u?void 0:u.type,$sentry_tags:s.tags,$level:s.level}
return t&&n&&(f.$sentry_url=(i||"https://sentry.io/organizations/")+t+"/issues/?project="+n+"&query="+s.event_id),e.exceptions.sendExceptionEvent(f),s}}class pr{constructor(e,t,n,i,r){this.name=hr,this.setupOnce=function(s){s(fr(e,{organization:t,projectId:n,prefix:i,severityAllowList:r}))}}}class gr{constructor(e){this._instance=e}doPageView(e){var t
const n=this._previousPageViewProperties(e)
return this._currentPath=null!==(t=null==h?void 0:h.location.pathname)&&void 0!==t?t:"",this._instance.scrollManager.resetContext(),this._prevPageviewTimestamp=e,n}doPageLeave(e){return this._previousPageViewProperties(e)}_previousPageViewProperties(e){const t=this._currentPath,n=this._prevPageviewTimestamp,i=this._instance.scrollManager.getContext()
if(!n)return{}
let r={}
if(i){let{maxScrollHeight:e,lastScrollY:t,maxScrollY:n,maxContentHeight:s,lastContentY:o,maxContentY:a}=i
A(e)||A(t)||A(n)||A(s)||A(o)||A(a)||(e=Math.ceil(e),t=Math.ceil(t),n=Math.ceil(n),s=Math.ceil(s),o=Math.ceil(o),a=Math.ceil(a),r={$prev_pageview_last_scroll:t,$prev_pageview_last_scroll_percentage:e<=1?1:ii(t/e,0,1),$prev_pageview_max_scroll:n,$prev_pageview_max_scroll_percentage:e<=1?1:ii(n/e,0,1),$prev_pageview_last_content:o,$prev_pageview_last_content_percentage:s<=1?1:ii(o/s,0,1),$prev_pageview_max_content:a,$prev_pageview_max_content_percentage:s<=1?1:ii(a/s,0,1)})}return t&&(r.$prev_pageview_pathname=t),n&&(r.$prev_pageview_duration=(e.getTime()-n.getTime())/1e3),r}}let _r,vr,mr
!function(e){e.Popover="popover",e.API="api",e.Widget="widget"}(_r||(_r={})),function(e){e.Open="open",e.MultipleChoice="multiple_choice",e.SingleChoice="single_choice",e.Rating="rating",e.Link="link"}(vr||(vr={})),function(e){e.NextQuestion="next_question",e.End="end",e.ResponseBased="response_based",e.SpecificQuestion="specific_question"}(mr||(mr={}))
class yr{events={}
constructor(){this.events={}}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),()=>{this.events[e]=this.events[e].filter((e=>e!==t))}}emit(e,t){for(const n of this.events[e]||[])n(t)
for(const n of this.events["*"]||[])n(e,t)}}class br{_debugEventEmitter=new yr
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
if(!br.matchString(i,null==t?void 0:t.url,(null==t?void 0:t.url_matching)||"contains"))return!1}return!0}static matchString(e,t,n){switch(n){case"regex":return!!h&&gt(e,t)
case"exact":return t===e
case"contains":const n=br.escapeStringRegexp(t).replace(/_/g,".").replace(/%/g,".*")
return gt(e,n)
default:return!1}}static escapeStringRegexp(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}checkStepElement(e,t){if((null!=t&&t.href||null!=t&&t.tag_name||null!=t&&t.text)&&!this.getElementsList(e).some((e=>!(null!=t&&t.href&&!br.matchString(e.href||"",null==t?void 0:t.href,(null==t?void 0:t.href_matching)||"exact")||null!=t&&t.tag_name&&e.tag_name!==(null==t?void 0:t.tag_name)||null!=t&&t.text&&!br.matchString(e.text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")&&!br.matchString(e.$el_text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")))))return!1
if(null!=t&&t.selector){var n
const i=null==e||null===(n=e.properties)||void 0===n?void 0:n.$element_selectors
if(!i)return!1
if(!i.includes(null==t?void 0:t.selector))return!1}return!0}getElementsList(e){return null==(null==e?void 0:e.properties.$elements)?[]:null==e?void 0:e.properties.$elements}}class wr{static SURVEY_SHOWN_EVENT_NAME="survey shown"
constructor(e){this.instance=e,this.eventToSurveys=new Map,this.actionToSurveys=new Map}register(e){var t
A(null===(t=this.instance)||void 0===t?void 0:t._addCaptureHook)||(this.setupEventBasedSurveys(e),this.setupActionBasedSurveys(e))}setupActionBasedSurveys(e){const t=e.filter((e=>{var t,n,i,r
return(null===(t=e.conditions)||void 0===t?void 0:t.actions)&&(null===(n=e.conditions)||void 0===n||null===(i=n.actions)||void 0===i||null===(r=i.values)||void 0===r?void 0:r.length)>0}))
if(0!==t.length){if(null==this.actionMatcher){this.actionMatcher=new br(this.instance),this.actionMatcher.init()
const e=e=>{this.onAction(e)}
this.actionMatcher._addActionHook(e)}t.forEach((e=>{var t,n,i,r,s,o,a,l,c,u
e.conditions&&null!==(t=e.conditions)&&void 0!==t&&t.actions&&null!==(n=e.conditions)&&void 0!==n&&null!==(i=n.actions)&&void 0!==i&&i.values&&(null===(r=e.conditions)||void 0===r||null===(s=r.actions)||void 0===s||null===(o=s.values)||void 0===o?void 0:o.length)>0&&(null===(a=this.actionMatcher)||void 0===a||a.register(e.conditions.actions.values),null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c||null===(u=c.values)||void 0===u||u.forEach((t=>{if(t&&t.name){const n=this.actionToSurveys.get(t.name)
n&&n.push(e.id),this.actionToSurveys.set(t.name,n||[e.id])}})))}))}}setupEventBasedSurveys(e){var t
0!==e.filter((e=>{var t,n,i,r
return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(i=n.events)||void 0===i||null===(r=i.values)||void 0===r?void 0:r.length)>0})).length&&(null===(t=this.instance)||void 0===t||t._addCaptureHook(((e,t)=>{this.onEvent(e,t)})),e.forEach((e=>{var t,n,i
null===(t=e.conditions)||void 0===t||null===(n=t.events)||void 0===n||null===(i=n.values)||void 0===i||i.forEach((t=>{if(t&&t.name){const n=this.eventToSurveys.get(t.name)
n&&n.push(e.id),this.eventToSurveys.set(t.name,n||[e.id])}}))})))}onEvent(e,t){var n,i
const r=(null===(n=this.instance)||void 0===n||null===(i=n.persistence)||void 0===i?void 0:i.props[Re])||[]
if(wr.SURVEY_SHOWN_EVENT_NAME==e&&t&&r.length>0){var s
const e=null==t||null===(s=t.properties)||void 0===s?void 0:s.$survey_id
if(e){const t=r.indexOf(e)
t>=0&&(r.splice(t,1),this._updateActivatedSurveys(r))}}else this.eventToSurveys.has(e)&&this._updateActivatedSurveys(r.concat(this.eventToSurveys.get(e)||[]))}onAction(e){var t,n
const i=(null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n?void 0:n.props[Re])||[]
this.actionToSurveys.has(e)&&this._updateActivatedSurveys(i.concat(this.actionToSurveys.get(e)||[]))}_updateActivatedSurveys(e){var t,n
null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n||n.register({[Re]:[...new Set(e)]})}getSurveys(){var e,t
return(null===(e=this.instance)||void 0===e||null===(t=e.persistence)||void 0===t?void 0:t.props[Re])||[]}getEventToSurveys(){return this.eventToSurveys}_getActionMatcher(){return this.actionMatcher}}var kr,Sr,Er,xr,Pr,Tr,$r,Cr,Ir={},Lr=[],Rr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Fr=Array.isArray
function Or(e,t){for(var n in t)e[n]=t[n]
return e}function Ar(e){var t=e.parentNode
t&&t.removeChild(e)}function Mr(e,t,n,i,r){var s={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++Er:r,__i:-1,__u:0}
return null==r&&null!=Sr.vnode&&Sr.vnode(s),s}function Nr(e){return e.children}function jr(e,t){this.props=e,this.context=t}function Dr(e,t){if(null==t)return e.__?Dr(e.__,e.__i+1):null
for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e
return"function"==typeof e.type?Dr(e):null}function Br(e){var t,n
if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e
break}return Br(e)}}function Hr(e){(!e.__d&&(e.__d=!0)&&xr.push(e)&&!qr.__r++||Pr!==Sr.debounceRendering)&&((Pr=Sr.debounceRendering)||Tr)(qr)}function qr(){var e,t,n,i,r,s,o,a,l
for(xr.sort($r);e=xr.shift();)e.__d&&(t=xr.length,i=void 0,s=(r=(n=e).__v).__e,a=[],l=[],(o=n.__P)&&((i=Or({},r)).__v=r.__v+1,Sr.vnode&&Sr.vnode(i),Kr(o,i,r,n.__n,void 0!==o.ownerSVGElement,32&r.__u?[s]:null,a,null==s?Dr(r):s,!!(32&r.__u),l),i.__.__k[i.__i]=i,Xr(a,i,l),i.__e!=s&&Br(i)),xr.length>t&&xr.sort($r))
qr.__r=0}function Ur(e,t,n,i,r,s,o,a,l,c,u){var d,h,f,p,g,_=i&&i.__k||Lr,v=t.length
for(n.__d=l,function(e,t,n){var i,r,s,o,a,l=t.length,c=n.length,u=c,d=0
for(e.__k=[],i=0;i<l;i++)null!=(r=e.__k[i]=null==(r=t[i])||"boolean"==typeof r||"function"==typeof r?null:"string"==typeof r||"number"==typeof r||"bigint"==typeof r||r.constructor==String?Mr(null,r,null,null,r):Fr(r)?Mr(Nr,{children:r},null,null,null):void 0===r.constructor&&r.__b>0?Mr(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)?(r.__=e,r.__b=e.__b+1,a=Wr(r,n,o=i+d,u),r.__i=a,s=null,-1!==a&&(u--,(s=n[a])&&(s.__u|=131072)),null==s||null===s.__v?(-1==a&&d--,"function"!=typeof r.type&&(r.__u|=65536)):a!==o&&(a===o+1?d++:a>o?u>l-o?d+=a-o:d--:d=a<o&&a==o-1?a-o:0,a!==i+d&&(r.__u|=65536))):(s=n[i])&&null==s.key&&s.__e&&(s.__e==e.__d&&(e.__d=Dr(s)),Zr(s,s,!1),n[i]=null,u--)
if(u)for(i=0;i<c;i++)null!=(s=n[i])&&0==(131072&s.__u)&&(s.__e==e.__d&&(e.__d=Dr(s)),Zr(s,s))}(n,t,_),l=n.__d,d=0;d<v;d++)null!=(f=n.__k[d])&&"boolean"!=typeof f&&"function"!=typeof f&&(h=-1===f.__i?Ir:_[f.__i]||Ir,f.__i=d,Kr(e,f,h,r,s,o,a,l,c,u),p=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&Yr(h.ref,null,f),u.push(f.ref,f.__c||p,f)),null==g&&null!=p&&(g=p),65536&f.__u||h.__k===f.__k?l=Gr(f,l,e):"function"==typeof f.type&&void 0!==f.__d?l=f.__d:p&&(l=p.nextSibling),f.__d=void 0,f.__u&=-196609)
n.__d=l,n.__e=g}function Gr(e,t,n){var i,r
if("function"==typeof e.type){for(i=e.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=e,t=Gr(i[r],t,n))
return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function Wr(e,t,n,i){var r=e.key,s=e.type,o=n-1,a=n+1,l=t[n]
if(null===l||l&&r==l.key&&s===l.type)return n
if(i>(null!=l&&0==(131072&l.__u)?1:0))for(;o>=0||a<t.length;){if(o>=0){if((l=t[o])&&0==(131072&l.__u)&&r==l.key&&s===l.type)return o
o--}if(a<t.length){if((l=t[a])&&0==(131072&l.__u)&&r==l.key&&s===l.type)return a
a++}}return-1}function zr(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||Rr.test(t)?n:n+"px"}function Vr(e,t,n,i,r){var s
e:if("style"===t)if("string"==typeof n)e.style.cssText=n
else{if("string"==typeof i&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||zr(e.style,t,"")
if(n)for(t in n)i&&n[t]===i[t]||zr(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])s=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=n,n?i?n.u=i.u:(n.u=Date.now(),e.addEventListener(t,s?Jr:Qr,s)):e.removeEventListener(t,s?Jr:Qr,s)
else{if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s")
else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&"role"!==t&&t in e)try{e[t]=null==n?"":n
break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function Qr(e){var t=this.l[e.type+!1]
if(e.t){if(e.t<=t.u)return}else e.t=Date.now()
return t(Sr.event?Sr.event(e):e)}function Jr(e){return this.l[e.type+!0](Sr.event?Sr.event(e):e)}function Kr(e,t,n,i,r,s,o,a,l,c){var u,d,h,f,p,g,_,v,m,y,b,w,k,S,E,x=t.type
if(void 0!==t.constructor)return null
128&n.__u&&(l=!!(32&n.__u),s=[a=t.__e=n.__e]),(u=Sr.__b)&&u(t)
e:if("function"==typeof x)try{if(v=t.props,m=(u=x.contextType)&&i[u.__c],y=u?m?m.props.value:u.__:i,n.__c?_=(d=t.__c=n.__c).__=d.__E:("prototype"in x&&x.prototype.render?t.__c=d=new x(v,y):(t.__c=d=new jr(v,y),d.constructor=x,d.render=es),m&&m.sub(d),d.props=v,d.state||(d.state={}),d.context=y,d.__n=i,h=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=x.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=Or({},d.__s)),Or(d.__s,x.getDerivedStateFromProps(v,d.__s))),f=d.props,p=d.state,d.__v=t,h)null==x.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount)
else{if(null==x.getDerivedStateFromProps&&v!==f&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(v,y),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(v,d.__s,y)||t.__v===n.__v)){for(t.__v!==n.__v&&(d.props=v,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),b=0;b<d._sb.length;b++)d.__h.push(d._sb[b])
d._sb=[],d.__h.length&&o.push(d)
break e}null!=d.componentWillUpdate&&d.componentWillUpdate(v,d.__s,y),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(f,p,g)}))}if(d.context=y,d.props=v,d.__P=e,d.__e=!1,w=Sr.__r,k=0,"prototype"in x&&x.prototype.render){for(d.state=d.__s,d.__d=!1,w&&w(t),u=d.render(d.props,d.state,d.context),S=0;S<d._sb.length;S++)d.__h.push(d._sb[S])
d._sb=[]}else do{d.__d=!1,w&&w(t),u=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++k<25)
d.state=d.__s,null!=d.getChildContext&&(i=Or(Or({},i),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(g=d.getSnapshotBeforeUpdate(f,p)),Ur(e,Fr(E=null!=u&&u.type===Nr&&null==u.key?u.props.children:u)?E:[E],t,n,i,r,s,o,a,l,c),d.base=t.__e,t.__u&=-161,d.__h.length&&o.push(d),_&&(d.__E=d.__=null)}catch(e){t.__v=null,l||null!=s?(t.__e=a,t.__u|=l?160:32,s[s.indexOf(a)]=null):(t.__e=n.__e,t.__k=n.__k),Sr.__e(e,t,n)}else null==s&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=function(e,t,n,i,r,s,o,a,l){var c,u,d,h,f,p,g,_=n.props,v=t.props,m=t.type
if("svg"===m&&(r=!0),null!=s)for(c=0;c<s.length;c++)if((f=s[c])&&"setAttribute"in f==!!m&&(m?f.localName===m:3===f.nodeType)){e=f,s[c]=null
break}if(null==e){if(null===m)return document.createTextNode(v)
e=r?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,v.is&&v),s=null,a=!1}if(null===m)_===v||a&&e.data===v||(e.data=v)
else{if(s=s&&kr.call(e.childNodes),_=n.props||Ir,!a&&null!=s)for(_={},c=0;c<e.attributes.length;c++)_[(f=e.attributes[c]).name]=f.value
for(c in _)f=_[c],"children"==c||("dangerouslySetInnerHTML"==c?d=f:"key"===c||c in v||Vr(e,c,null,f,r))
for(c in v)f=v[c],"children"==c?h=f:"dangerouslySetInnerHTML"==c?u=f:"value"==c?p=f:"checked"==c?g=f:"key"===c||a&&"function"!=typeof f||_[c]===f||Vr(e,c,f,_[c],r)
if(u)a||d&&(u.__html===d.__html||u.__html===e.innerHTML)||(e.innerHTML=u.__html),t.__k=[]
else if(d&&(e.innerHTML=""),Ur(e,Fr(h)?h:[h],t,n,i,r&&"foreignObject"!==m,s,o,s?s[0]:n.__k&&Dr(n,0),a,l),null!=s)for(c=s.length;c--;)null!=s[c]&&Ar(s[c])
a||(c="value",void 0!==p&&(p!==e[c]||"progress"===m&&!p||"option"===m&&p!==_[c])&&Vr(e,c,p,_[c],!1),c="checked",void 0!==g&&g!==e[c]&&Vr(e,c,g,_[c],!1))}return e}(n.__e,t,n,i,r,s,o,l,c);(u=Sr.diffed)&&u(t)}function Xr(e,t,n){t.__d=void 0
for(var i=0;i<n.length;i++)Yr(n[i],n[++i],n[++i])
Sr.__c&&Sr.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){Sr.__e(e,t.__v)}}))}function Yr(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){Sr.__e(e,n)}}function Zr(e,t,n){var i,r
if(Sr.unmount&&Sr.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Yr(i,null,t)),null!=(i=e.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){Sr.__e(e,t)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(r=0;r<i.length;r++)i[r]&&Zr(i[r],t,n||"function"!=typeof e.type)
n||null==e.__e||Ar(e.__e),e.__=e.__e=e.__d=void 0}function es(e,t,n){return this.constructor(e,n)}kr=Lr.slice,Sr={__e:function(e,t,n,i){for(var r,s,o;t=t.__;)if((r=t.__c)&&!r.__)try{if((s=r.constructor)&&null!=s.getDerivedStateFromError&&(r.setState(s.getDerivedStateFromError(e)),o=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,i||{}),o=r.__d),o)return r.__E=r}catch(t){e=t}throw e}},Er=0,jr.prototype.setState=function(e,t){var n
n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=Or({},this.state),"function"==typeof e&&(e=e(Or({},n),this.props)),e&&Or(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),Hr(this))},jr.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Hr(this))},jr.prototype.render=Nr,xr=[],Tr="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,$r=function(e,t){return e.__v.__b-t.__v.__b},qr.__r=0,Cr=0,function(e,t){var n={__c:t="__cC"+Cr++,__:{isPreviewMode:!1,previewPageIndex:0,handleCloseSurveyPopup:()=>{},isPopup:!0},Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,i
return this.getChildContext||(n=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some((function(e){e.__e=!0,Hr(e)}))},this.sub=function(e){n.push(e)
var t=e.componentWillUnmount
e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}}
n.Provider.__=n.Consumer.contextType=n}()
const ts="[Surveys]",ns={icontains:e=>!!h&&h.location.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:e=>!!h&&-1===h.location.href.toLowerCase().indexOf(e.toLowerCase()),regex:e=>!!h&&gt(h.location.href,e),not_regex:e=>!!h&&!gt(h.location.href,e),exact:e=>(null==h?void 0:h.location.href)===e,is_not:e=>(null==h?void 0:h.location.href)!==e}
class is{constructor(e){this.instance=e,this._surveyEventReceiver=null}afterDecideResponse(e){this._decideServerResponse=!!e.surveys,this.loadIfEnabled()}reset(){localStorage.removeItem("lastSeenSurveyDate")
const e=(()=>{const e=[]
for(let t=0;t<localStorage.length;t++){const n=localStorage.key(t)
null!=n&&n.startsWith("seenSurvey_")&&e.push(n)}return e})()
e.forEach((e=>localStorage.removeItem(e)))}loadIfEnabled(){var e
const t=null==E||null===(e=E.__PosthogExtensions__)||void 0===e?void 0:e.generateSurveys
var n,i
this.instance.config.disable_surveys||!this._decideServerResponse||t||(null==this._surveyEventReceiver&&(this._surveyEventReceiver=new wr(this.instance)),null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"surveys",(e=>{var t,n
if(e)return G.error(ts,"Could not load surveys script",e)
this._surveyManager=null===(t=E.__PosthogExtensions__)||void 0===t||null===(n=t.generateSurveys)||void 0===n?void 0:n.call(t,this.instance)})))}getSurveys(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(this.instance.config.disable_surveys)return e([])
null==this._surveyEventReceiver&&(this._surveyEventReceiver=new wr(this.instance))
const n=this.instance.get_property(Le)
if(n&&!t)return e(n)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api",`/api/surveys/?token=${this.instance.config.token}`),method:"GET",transport:"XHR",callback:t=>{var n
if(200!==t.statusCode||!t.json)return e([])
const i=t.json.surveys||[],r=i.filter((e=>{var t,n,i,r,s,o,a,l,c,u,d,h
return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(i=n.events)||void 0===i?void 0:i.values)&&(null===(r=e.conditions)||void 0===r||null===(s=r.events)||void 0===s||null===(o=s.values)||void 0===o?void 0:o.length)>0||(null===(a=e.conditions)||void 0===a?void 0:a.actions)&&(null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c?void 0:c.values)&&(null===(u=e.conditions)||void 0===u||null===(d=u.actions)||void 0===d||null===(h=d.values)||void 0===h?void 0:h.length)>0}))
var s
return r.length>0&&(null===(s=this._surveyEventReceiver)||void 0===s||s.register(r)),null===(n=this.instance.persistence)||void 0===n||n.register({[Le]:i}),e(i)}})}getActiveMatchingSurveys(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.getSurveys((t=>{var n
const i=t.filter((e=>!(!e.start_date||e.end_date))).filter((e=>{var t,n,i,r
if(!e.conditions)return!0
const s=null===(t=e.conditions)||void 0===t||!t.url||ns[null!==(n=null===(i=e.conditions)||void 0===i?void 0:i.urlMatchType)&&void 0!==n?n:"icontains"](e.conditions.url),o=null===(r=e.conditions)||void 0===r||!r.selector||(null==m?void 0:m.querySelector(e.conditions.selector))
return s&&o})),r=null===(n=this._surveyEventReceiver)||void 0===n?void 0:n.getSurveys(),s=i.filter((e=>{var t,n,i,s,o,a,l,c,u,d
if(!e.linked_flag_key&&!e.targeting_flag_key&&!e.internal_targeting_flag_key)return!0
const h=!e.linked_flag_key||this.instance.featureFlags.isFeatureEnabled(e.linked_flag_key),f=!e.targeting_flag_key||this.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key),p=(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(i=n.events)||void 0===i?void 0:i.values)&&(null===(s=e.conditions)||void 0===s||null===(o=s.events)||void 0===o?void 0:o.values.length)>0,g=(null===(a=e.conditions)||void 0===a?void 0:a.actions)&&(null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c?void 0:c.values)&&(null===(u=e.conditions)||void 0===u||null===(d=u.actions)||void 0===d?void 0:d.values.length)>0,_=!p&&!g||(null==r?void 0:r.includes(e.id)),v=this._canActivateRepeatedly(e),m=!(e.internal_targeting_flag_key&&!v)||this.instance.featureFlags.isFeatureEnabled(e.internal_targeting_flag_key)
return h&&f&&m&&_}))
return e(s)}),t)}getNextSurveyStep(e,t,n){var i
const r=e.questions[t],s=t+1
if(null===(i=r.branching)||void 0===i||!i.type)return t===e.questions.length-1?mr.End:s
if(r.branching.type===mr.End)return mr.End
if(r.branching.type===mr.SpecificQuestion){if(Number.isInteger(r.branching.index))return r.branching.index}else if(r.branching.type===mr.ResponseBased){if(r.type===vr.SingleChoice){var o,a
const e=r.choices.indexOf(`${n}`)
if(null!==(o=r.branching)&&void 0!==o&&null!==(a=o.responseValues)&&void 0!==a&&a.hasOwnProperty(e)){const t=r.branching.responseValues[e]
return Number.isInteger(t)?t:t===mr.End?mr.End:s}}else if(r.type===vr.Rating){var l,c
if("number"!=typeof n||!Number.isInteger(n))throw new Error("The response type must be an integer")
const e=function(e,t){if(3===t){if(e<1||e>3)throw new Error("The response must be in range 1-3")
return 1===e?"negative":2===e?"neutral":"positive"}if(5===t){if(e<1||e>5)throw new Error("The response must be in range 1-5")
return e<=2?"negative":3===e?"neutral":"positive"}if(7===t){if(e<1||e>7)throw new Error("The response must be in range 1-7")
return e<=3?"negative":4===e?"neutral":"positive"}if(10===t){if(e<0||e>10)throw new Error("The response must be in range 0-10")
return e<=6?"detractors":e<=8?"passives":"promoters"}throw new Error("The scale must be one of: 3, 5, 7, 10")}(n,r.scale)
if(null!==(l=r.branching)&&void 0!==l&&null!==(c=l.responseValues)&&void 0!==c&&c.hasOwnProperty(e)){const t=r.branching.responseValues[e]
return Number.isInteger(t)?t:t===mr.End?mr.End:s}}return s}return G.warn(ts,"Falling back to next question index due to unexpected branching type"),s}_canActivateRepeatedly(e){var t
return D(null===(t=E.__PosthogExtensions__)||void 0===t?void 0:t.canActivateRepeatedly)?(G.warn(ts,"canActivateRepeatedly is not defined, must init before calling"),!1):E.__PosthogExtensions__.canActivateRepeatedly(e)}canRenderSurvey(e){D(this._surveyManager)?G.warn(ts,"canActivateRepeatedly is not defined, must init before calling"):this.getSurveys((t=>{const n=t.filter((t=>t.id===e))[0]
this._surveyManager.canRenderSurvey(n)}))}renderSurvey(e,t){D(this._surveyManager)?G.warn(ts,"canActivateRepeatedly is not defined, must init before calling"):this.getSurveys((n=>{const i=n.filter((t=>t.id===e))[0]
this._surveyManager.renderSurvey(i,null==m?void 0:m.querySelector(t))}))}}class rs{serverLimits={}
lastEventRateLimited=!1
constructor(e){var t,n
this.instance=e,this.captureEventsPerSecond=(null===(t=e.config.rate_limiting)||void 0===t?void 0:t.events_per_second)||10,this.captureEventsBurstLimit=Math.max((null===(n=e.config.rate_limiting)||void 0===n?void 0:n.events_burst_limit)||10*this.captureEventsPerSecond,this.captureEventsPerSecond),this.lastEventRateLimited=this.clientRateLimitContext(!0).isRateLimited}clientRateLimitContext(){var e,t,n
let i=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
const r=(new Date).getTime(),s=null!==(e=null===(t=this.instance.persistence)||void 0===t?void 0:t.get_property(Me))&&void 0!==e?e:{tokens:this.captureEventsBurstLimit,last:r}
s.tokens+=(r-s.last)/1e3*this.captureEventsPerSecond,s.last=r,s.tokens>this.captureEventsBurstLimit&&(s.tokens=this.captureEventsBurstLimit)
const o=s.tokens<1
return o||i||(s.tokens=Math.max(0,s.tokens-1)),!o||this.lastEventRateLimited||i||this.instance.capture("$$client_ingestion_warning",{$$client_ingestion_warning_message:`posthog-js client rate limited. Config is set to ${this.captureEventsPerSecond} events per second and ${this.captureEventsBurstLimit} events burst limit.`},{skip_client_rate_limiting:!0}),this.lastEventRateLimited=o,null===(n=this.instance.persistence)||void 0===n||n.set_property(Me,s),{isRateLimited:o,remainingTokens:s.tokens}}isServerRateLimited(e){const t=this.serverLimits[e||"events"]||!1
return!1!==t&&(new Date).getTime()<t}checkForLimiting=e=>{const t=e.text
if(t&&t.length)try{(JSON.parse(t).quota_limited||[]).forEach((e=>{G.info(`[RateLimiter] ${e||"events"} is quota limited.`),this.serverLimits[e]=(new Date).getTime()+6e4}))}catch(e){return void G.warn(`[RateLimiter] could not rate limit - continuing. Error: "${null==e?void 0:e.message}"`,{text:t})}}}const ss=()=>({initialPathName:(null==y?void 0:y.pathname)||"",referringDomain:gn.referringDomain(),...gn.campaignParams()})
class os{constructor(e,t,n){this._sessionIdManager=e,this._persistence=t,this._sessionSourceParamGenerator=n||ss,this._sessionIdManager.onSessionId(this._onSessionIdCallback)}_getStoredProps(){return this._persistence.props[Ae]}_onSessionIdCallback=e=>{const t=this._getStoredProps()
if(t&&t.sessionId===e)return
const n={sessionId:e,props:this._sessionSourceParamGenerator()}
this._persistence.register({[Ae]:n})}
getSessionProps(){var e
const t=null===(e=this._getStoredProps())||void 0===e?void 0:e.props
return t?{$client_session_initial_referring_host:t.referringDomain,$client_session_initial_pathname:t.initialPathName,$client_session_initial_utm_source:t.utm_source,$client_session_initial_utm_campaign:t.utm_campaign,$client_session_initial_utm_medium:t.utm_medium,$client_session_initial_utm_content:t.utm_content,$client_session_initial_utm_term:t.utm_term}:{}}}const as=["ahrefsbot","ahrefssiteaudit","applebot","baiduspider","bingbot","bingpreview","bot.htm","bot.php","crawler","deepscan","duckduckbot","facebookexternal","facebookcatalog","gptbot","http://yandex.com/bots","hubspot","ia_archiver","linkedinbot","mj12bot","msnbot","nessus","petalbot","pinterest","prerender","rogerbot","screaming frog","semrushbot","sitebulb","slurp","turnitin","twitterbot","vercelbot","yahoo! slurp","yandexbot","headlesschrome","cypress","Google-HotelAdsVerifier","adsbot-google","apis-google","duplexweb-google","feedfetcher-google","google favicon","google web preview","google-read-aloud","googlebot","googleweblight","mediapartners-google","storebot-google","Bytespider;"],ls=function(e,t){if(!e)return!1
const n=e.toLowerCase()
return as.concat(t||[]).some((e=>{const t=e.toLowerCase()
return-1!==n.indexOf(t)}))},cs=function(e,t){if(!e)return!1
const n=e.userAgent
if(n&&ls(n,t))return!0
try{const n=null==e?void 0:e.userAgentData
if(null!=n&&n.brands&&n.brands.some((e=>ls(null==e?void 0:e.brand,t))))return!0}catch{}return!!e.webdriver}
class us{constructor(){this.clicks=[]}isRageClick(e,t,n){const i=this.clicks[this.clicks.length-1]
if(i&&Math.abs(e-i.x)+Math.abs(t-i.y)<30&&n-i.timestamp<1e3){if(this.clicks.push({x:e,y:t,timestamp:n}),3===this.clicks.length)return!0}else this.clicks=[{x:e,y:t,timestamp:n}]
return!1}}const ds="[Dead Clicks]",hs=()=>!0,fs=e=>{var t
const n=!(null===(t=e.instance.persistence)||void 0===t||!t.get_property(ge)),i=e.instance.config.capture_dead_clicks
return H(i)?i:n}
class ps{get lazyLoadedDeadClicksAutocapture(){return this._lazyLoadedDeadClicksAutocapture}constructor(e,t,n){this.instance=e,this.isEnabled=t,this.onCapture=n,this.startIfEnabled()}afterDecideResponse(e){this.instance.persistence&&this.instance.persistence.register({[ge]:null==e?void 0:e.captureDeadClicks}),this.startIfEnabled()}startIfEnabled(){this.isEnabled(this)&&this.loadScript((()=>{this.start()}))}loadScript(e){var t,n,i
null!==(t=E.__PosthogExtensions__)&&void 0!==t&&t.initDeadClicksAutocapture&&e(),null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"dead-clicks-autocapture",(t=>{t?G.error(ds+" failed to load script",t):e()}))}start(){var e
if(m){if(!this._lazyLoadedDeadClicksAutocapture&&null!==(e=E.__PosthogExtensions__)&&void 0!==e&&e.initDeadClicksAutocapture){const e=F(this.instance.config.capture_dead_clicks)?this.instance.config.capture_dead_clicks:{}
e.__onCapture=this.onCapture,this._lazyLoadedDeadClicksAutocapture=E.__PosthogExtensions__.initDeadClicksAutocapture(this.instance,e),this._lazyLoadedDeadClicksAutocapture.start(m),G.info(`${ds} starting...`)}}else G.error(ds+" `document` not found. Cannot start.")}stop(){this._lazyLoadedDeadClicksAutocapture&&(this._lazyLoadedDeadClicksAutocapture.stop(),this._lazyLoadedDeadClicksAutocapture=void 0,G.info(`${ds} stopping...`))}}class gs{rageclicks=new us
_enabledServerSide=!1
_initialized=!1
_flushInterval=null
constructor(e){var t
this.instance=e,this._enabledServerSide=!(null===(t=this.instance.persistence)||void 0===t||!t.props[de]),null==h||h.addEventListener("beforeunload",(()=>{this.flush()}))}get flushIntervalMilliseconds(){let e=5e3
return F(this.instance.config.capture_heatmaps)&&this.instance.config.capture_heatmaps.flush_interval_milliseconds&&(e=this.instance.config.capture_heatmaps.flush_interval_milliseconds),e}get isEnabled(){return A(this.instance.config.capture_heatmaps)?A(this.instance.config.enable_heatmaps)?this._enabledServerSide:this.instance.config.enable_heatmaps:!1!==this.instance.config.capture_heatmaps}startIfEnabled(){if(this.isEnabled){if(this._initialized)return
G.info("[heatmaps] starting..."),this._setupListeners(),this._flushInterval=setInterval(this.flush.bind(this),this.flushIntervalMilliseconds)}else{var e,t
clearInterval(null!==(e=this._flushInterval)&&void 0!==e?e:void 0),null===(t=this.deadClicksCapture)||void 0===t||t.stop(),this.getAndClearBuffer()}}afterDecideResponse(e){const t=!!e.heatmaps
this.instance.persistence&&this.instance.persistence.register({[de]:t}),this._enabledServerSide=t,this.startIfEnabled()}getAndClearBuffer(){const e=this.buffer
return this.buffer=void 0,e}_onDeadClick(e){this._onClick(e.originalEvent,"deadclick")}_setupListeners(){h&&m&&(ie(m,"click",(e=>this._onClick(e||(null==h?void 0:h.event))),!1,!0),ie(m,"mousemove",(e=>this._onMouseMove(e||(null==h?void 0:h.event))),!1,!0),this.deadClicksCapture=new ps(this.instance,hs,this._onDeadClick.bind(this)),this.deadClicksCapture.startIfEnabled(),this._initialized=!0)}_getProperties(e,t){const n=this.instance.scrollManager.scrollY(),i=this.instance.scrollManager.scrollX(),r=this.instance.scrollManager.scrollElement(),s=function(e,t,n){let i=e
for(;i&&Sn(i)&&!En(i,"body");){if(i===n)return!1
if(X(t,null==h?void 0:h.getComputedStyle(i).position))return!0
i=On(i)}return!1}(Rn(e),["fixed","sticky"],r)
return{x:e.clientX+(s?0:i),y:e.clientY+(s?0:n),target_fixed:s,type:t}}_onClick(e){var t
let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"click"
if(kn(e.target))return
const i=this._getProperties(e,n)
null!==(t=this.rageclicks)&&void 0!==t&&t.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._capture({...i,type:"rageclick"}),this._capture(i)}_onMouseMove(e){kn(e.target)||(clearTimeout(this._mouseMoveTimeout),this._mouseMoveTimeout=setTimeout((()=>{this._capture(this._getProperties(e,"mousemove"))}),500))}_capture(e){if(!h)return
const t=h.location.href
this.buffer=this.buffer||{},this.buffer[t]||(this.buffer[t]=[]),this.buffer[t].push(e)}flush(){this.buffer&&!O(this.buffer)&&this.instance.capture("$$heatmap",{$heatmap_data:this.getAndClearBuffer()})}}class _s{constructor(e){this.instance=e}getContext(){return this.context}resetContext(){const e=this.context
return setTimeout(this._updateScrollData,0),e}_updateScrollData=()=>{var e,t,n,i
this.context||(this.context={})
const r=this.scrollElement(),s=this.scrollY(),o=r?Math.max(0,r.scrollHeight-r.clientHeight):0,a=s+((null==r?void 0:r.clientHeight)||0),l=(null==r?void 0:r.scrollHeight)||0
this.context.lastScrollY=Math.ceil(s),this.context.maxScrollY=Math.max(s,null!==(e=this.context.maxScrollY)&&void 0!==e?e:0),this.context.maxScrollHeight=Math.max(o,null!==(t=this.context.maxScrollHeight)&&void 0!==t?t:0),this.context.lastContentY=a,this.context.maxContentY=Math.max(a,null!==(n=this.context.maxContentY)&&void 0!==n?n:0),this.context.maxContentHeight=Math.max(l,null!==(i=this.context.maxContentHeight)&&void 0!==i?i:0)}
startMeasuringScrollPosition(){null==h||h.addEventListener("scroll",this._updateScrollData,!0),null==h||h.addEventListener("scrollend",this._updateScrollData,!0),null==h||h.addEventListener("resize",this._updateScrollData)}scrollElement(){if(!this.instance.config.scroll_root_selector)return null==h?void 0:h.document.documentElement
{const e=L(this.instance.config.scroll_root_selector)?this.instance.config.scroll_root_selector:[this.instance.config.scroll_root_selector]
for(const t of e){const e=null==h?void 0:h.document.querySelector(t)
if(e)return e}}}scrollY(){if(this.instance.config.scroll_root_selector){const e=this.scrollElement()
return e&&e.scrollTop||0}return h&&(h.scrollY||h.pageYOffset||h.document.documentElement.scrollTop)||0}scrollX(){if(this.instance.config.scroll_root_selector){const e=this.scrollElement()
return e&&e.scrollLeft||0}return h&&(h.scrollX||h.pageXOffset||h.document.documentElement.scrollLeft)||0}}const vs="$copy_autocapture"
function ms(e,t){return t.length>e?t.slice(0,e)+"...":t}function ys(e){if(e.previousElementSibling)return e.previousElementSibling
let t=e
do{t=t.previousSibling}while(t&&!Sn(t))
return t}function bs(e,t){var n,i
let{e:r,maskAllElementAttributes:s,maskAllText:o,elementAttributeIgnoreList:a,elementsChainAsString:l}=t
const c=[e]
let u=e
for(;u.parentNode&&!En(u,"body");)Pn(u.parentNode)?(c.push(u.parentNode.host),u=u.parentNode.host):(c.push(u.parentNode),u=u.parentNode)
const d=[],f={}
let p,g=!1,_=!1
if(J(c,(e=>{const t=An(e)
"a"===e.tagName.toLowerCase()&&(g=e.getAttribute("href"),g=t&&g&&Un(g)&&g),X(Cn(e),"ph-no-capture")&&(_=!0),d.push(function(e,t,n,i){const r=e.tagName.toLowerCase(),s={tag_name:r}
Fn.indexOf(r)>-1&&!n&&("a"===r.toLowerCase()||"button"===r.toLowerCase()?s.$el_text=ms(1024,Gn(e)):s.$el_text=ms(1024,Ln(e)))
const o=Cn(e)
o.length>0&&(s.classes=o.filter((function(e){return""!==e}))),J(e.attributes,(function(n){var r
if((!Mn(e)||-1!==["name","id","class","aria-label"].indexOf(n.name))&&(null==i||!i.includes(n.name))&&!t&&Un(n.value)&&(r=n.name,!M(r)||"_ngcontent"!==r.substring(0,10)&&"_nghost"!==r.substring(0,7))){let e=n.value
"class"===n.name&&(e=Tn(e).join(" ")),s["attr__"+n.name]=ms(1024,e)}}))
let a=1,l=1,c=e
for(;c=ys(c);)a++,c.tagName===e.tagName&&l++
return s.nth_child=a,s.nth_of_type=l,s}(e,s,o,a))
const n=function(e){if(!An(e))return{}
const t={}
return J(e.attributes,(function(e){if(e.name&&0===e.name.indexOf("data-ph-capture-attribute")){const n=e.name.replace("data-ph-capture-attribute-",""),i=e.value
n&&i&&Un(i)&&(t[n]=i)}})),t}(e)
K(f,n)})),_)return{props:{},explicitNoCapture:_}
if(o||("a"===e.tagName.toLowerCase()||"button"===e.tagName.toLowerCase()?d[0].$el_text=Gn(e):d[0].$el_text=Ln(e)),g){var v,m
d[0].attr__href=g
const e=null===(v=pt(g))||void 0===v?void 0:v.host,t=null==h||null===(m=h.location)||void 0===m?void 0:m.host
e&&t&&e!==t&&(p=g)}return{props:K({$event_type:r.type,$ce_version:1},l?{$elements_chain:zn(d)}:{$elements:d},null!==(n=d[0])&&void 0!==n&&n.$el_text?{$el_text:null===(i=d[0])||void 0===i?void 0:i.$el_text}:{},p&&"click"===r.type?{$external_click_url:p}:{},f)}}class ws{_initialized=!1
_isDisabledServerSide=null
rageclicks=new us
_elementsChainAsString=!1
constructor(e){this.instance=e,this._elementSelectors=null}get config(){var e,t
const n=F(this.instance.config.autocapture)?this.instance.config.autocapture:{}
return n.url_allowlist=null===(e=n.url_allowlist)||void 0===e?void 0:e.map((e=>new RegExp(e))),n.url_ignorelist=null===(t=n.url_ignorelist)||void 0===t?void 0:t.map((e=>new RegExp(e))),n}_addDomEventHandlers(){if(!this.isBrowserSupported())return void G.info("Disabling Automatic Event Collection because this browser is not supported")
if(!h||!m)return
const e=e=>{e=e||(null==h?void 0:h.event)
try{this._captureEvent(e)}catch(e){G.error("Failed to capture event",e)}},t=e=>{e=e||(null==h?void 0:h.event),this._captureEvent(e,vs)}
ie(m,"submit",e,!1,!0),ie(m,"change",e,!1,!0),ie(m,"click",e,!1,!0),this.config.capture_copied_text&&(ie(m,"copy",t,!1,!0),ie(m,"cut",t,!1,!0))}startIfEnabled(){this.isEnabled&&!this._initialized&&(this._addDomEventHandlers(),this._initialized=!0)}afterDecideResponse(e){e.elementsChainAsString&&(this._elementsChainAsString=e.elementsChainAsString),this.instance.persistence&&this.instance.persistence.register({[ue]:!!e.autocapture_opt_out}),this._isDisabledServerSide=!!e.autocapture_opt_out,this.startIfEnabled()}setElementSelectors(e){this._elementSelectors=e}getElementSelectors(e){var t
const n=[]
return null===(t=this._elementSelectors)||void 0===t||t.forEach((t=>{const i=null==m?void 0:m.querySelectorAll(t)
null==i||i.forEach((i=>{e===i&&n.push(t)}))})),n}get isEnabled(){var e,t
const n=null===(e=this.instance.persistence)||void 0===e?void 0:e.props[ue],i=this._isDisabledServerSide
if(j(i)&&!H(n)&&!this.instance.config.advanced_disable_decide)return!1
const r=null!==(t=this._isDisabledServerSide)&&void 0!==t?t:!!n
return!!this.instance.config.autocapture&&!r}_captureEvent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$autocapture"
if(!this.isEnabled)return
let n=Rn(e)
var i
xn(n)&&(n=n.parentNode||null),"$autocapture"===t&&"click"===e.type&&e instanceof MouseEvent&&this.instance.config.rageclick&&null!==(i=this.rageclicks)&&void 0!==i&&i.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._captureEvent(e,"$rageclick")
const r=t===vs
if(n&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0
if(!h||!e||En(e,"html")||!Sn(e))return!1
if(null!=n&&n.url_allowlist&&!$n(n.url_allowlist))return!1
if(null!=n&&n.url_ignorelist&&$n(n.url_ignorelist))return!1
if(null!=n&&n.dom_event_allowlist){const e=n.dom_event_allowlist
if(e&&!e.some((e=>t.type===e)))return!1}let s=!1
const o=[e]
let a=!0,l=e
for(;l.parentNode&&!En(l,"body");)if(Pn(l.parentNode))o.push(l.parentNode.host),l=l.parentNode.host
else{if(a=On(l),!a)break
if(i||Fn.indexOf(a.tagName.toLowerCase())>-1)s=!0
else{const e=h.getComputedStyle(a)
e&&"pointer"===e.getPropertyValue("cursor")&&(s=!0)}o.push(a),l=a}if(!function(e,t){const n=null==t?void 0:t.element_allowlist
if(A(n))return!0
for(const t of e)if(n.some((e=>t.tagName.toLowerCase()===e)))return!0
return!1}(o,n))return!1
if(!function(e,t){const n=null==t?void 0:t.css_selector_allowlist
if(A(n))return!0
for(const t of e)if(n.some((e=>t.matches(e))))return!0
return!1}(o,n))return!1
const c=h.getComputedStyle(e)
if(c&&"pointer"===c.getPropertyValue("cursor")&&"click"===t.type)return!0
const u=e.tagName.toLowerCase()
switch(u){case"html":return!1
case"form":return(r||["submit"]).indexOf(t.type)>=0
case"input":case"select":case"textarea":return(r||["change","click"]).indexOf(t.type)>=0
default:return s?(r||["click"]).indexOf(t.type)>=0:(r||["click"]).indexOf(t.type)>=0&&(Fn.indexOf(u)>-1||"true"===e.getAttribute("contenteditable"))}}(n,e,this.config,r,r?["copy","cut"]:void 0)){const{props:i,explicitNoCapture:r}=bs(n,{e:e,maskAllElementAttributes:this.instance.config.mask_all_element_attributes,maskAllText:this.instance.config.mask_all_text,elementAttributeIgnoreList:this.config.element_attribute_ignorelist,elementsChainAsString:this._elementsChainAsString})
if(r)return!1
const o=this.getElementSelectors(n)
if(o&&o.length>0&&(i.$element_selectors=o),t===vs){var s
const t=In(null==h||null===(s=h.getSelection())||void 0===s?void 0:s.toString()),n=e.type||"clipboard"
if(!t)return!1
i.$selected_content=t,i.$copy_type=n}return this.instance.capture(t,i),!0}}isBrowserSupported(){return R(null==m?void 0:m.querySelectorAll)}}class ks{_restoreXHRPatch=void 0
_restoreFetchPatch=void 0
constructor(e){this.instance=e}_loadScript(e){var t,n,i
null!==(t=E.__PosthogExtensions__)&&void 0!==t&&t.tracingHeadersPatchFns&&e(),null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"tracing-headers",(t=>{if(t)return G.error("[TRACING-HEADERS] failed to load script",t)
e()}))}startIfEnabledOrStop(){var e,t
this.instance.config.__add_tracing_headers?this._loadScript(this._startCapturing):(null===(e=this._restoreXHRPatch)||void 0===e||e.call(this),null===(t=this._restoreFetchPatch)||void 0===t||t.call(this),this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0)}_startCapturing=()=>{var e,t,n,i
A(this._restoreXHRPatch)&&(null===(e=E.__PosthogExtensions__)||void 0===e||null===(t=e.tracingHeadersPatchFns)||void 0===t||t._patchXHR(this.instance.sessionManager)),A(this._restoreFetchPatch)&&(null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.tracingHeadersPatchFns)||void 0===i||i._patchFetch(this.instance.sessionManager))}}let Ss
!function(e){e[e.PENDING=-1]="PENDING",e[e.DENIED=0]="DENIED",e[e.GRANTED=1]="GRANTED"}(Ss||(Ss={}))
class Es{constructor(e){this.instance=e}get config(){return this.instance.config}get consent(){return this.getDnt()?Ss.DENIED:this.storedConsent}isOptedOut(){return this.consent===Ss.DENIED||this.consent===Ss.PENDING&&this.config.opt_out_capturing_by_default}isOptedIn(){return!this.isOptedOut()}optInOut(e){this.storage.set(this.storageKey,e?1:0,this.config.cookie_expiration,this.config.cross_subdomain_cookie,this.config.secure_cookie)}reset(){this.storage.remove(this.storageKey,this.config.cross_subdomain_cookie)}get storageKey(){const{token:e,opt_out_capturing_cookie_prefix:t}=this.instance.config
return(t||"__ph_opt_in_out_")+e}get storedConsent(){const e=this.storage.get(this.storageKey)
return"1"===e?Ss.GRANTED:"0"===e?Ss.DENIED:Ss.PENDING}get storage(){if(!this._storage){const e=this.config.opt_out_capturing_persistence_type
this._storage="localStorage"===e?ot:rt
const t="localStorage"===e?rt:ot
t.get(this.storageKey)&&(this._storage.get(this.storageKey)||this.optInOut("1"===t.get(this.storageKey)),t.remove(this.storageKey,this.config.cross_subdomain_cookie))}return this._storage}getDnt(){return!!this.config.respect_dnt&&!!se([null==v?void 0:v.doNotTrack,null==v?void 0:v.msDoNotTrack,E.doNotTrack],(e=>X([!0,1,"1","yes"],e)))}}const xs="[Exception Autocapture]"
class Ps{originalOnUnhandledRejectionHandler=void 0
constructor(e){var t
this.instance=e,this.remoteEnabled=!(null===(t=this.instance.persistence)||void 0===t||!t.props[he]),this.startIfEnabled()}get isEnabled(){var e
return null!==(e=this.remoteEnabled)&&void 0!==e&&e}get isCapturing(){var e
return!(null==h||null===(e=h.onerror)||void 0===e||!e.__POSTHOG_INSTRUMENTED__)}get hasHandlers(){return this.originalOnUnhandledRejectionHandler||this.unwrapOnError}startIfEnabled(){this.isEnabled&&!this.isCapturing&&(G.info(xs+" enabled, starting..."),this.loadScript(this.startCapturing))}loadScript(e){var t,n
this.hasHandlers&&e(),null===(t=E.__PosthogExtensions__)||void 0===t||null===(n=t.loadExternalDependency)||void 0===n||n.call(t,this.instance,"exception-autocapture",(t=>{if(t)return G.error(xs+" failed to load script",t)
e()}))}startCapturing=()=>{var e,t,n,i
if(!h||!this.isEnabled||this.hasHandlers||this.isCapturing)return
const r=null===(e=E.__PosthogExtensions__)||void 0===e||null===(t=e.errorWrappingFunctions)||void 0===t?void 0:t.wrapOnError,s=null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.errorWrappingFunctions)||void 0===i?void 0:i.wrapUnhandledRejection
if(r&&s)try{this.unwrapOnError=r(this.captureException.bind(this)),this.unwrapUnhandledRejection=s(this.captureException.bind(this))}catch(e){G.error(xs+" failed to start",e),this.stopCapturing()}else G.error(xs+" failed to load error wrapping functions - cannot start")}
stopCapturing(){var e,t
null===(e=this.unwrapOnError)||void 0===e||e.call(this),null===(t=this.unwrapUnhandledRejection)||void 0===t||t.call(this)}afterDecideResponse(e){const t=e.autocaptureExceptions
this.remoteEnabled=!!t||!1,this.instance.persistence&&this.instance.persistence.register({[he]:this.remoteEnabled}),this.startIfEnabled()}captureException(e){const t=this.instance.requestRouter.endpointFor("ui")
e.$exception_personURL=`${t}/project/${this.instance.config.token}/person/${this.instance.get_distinct_id()}`,this.instance.exceptions.sendExceptionEvent(e)}}const Ts=9e5,$s="[Web Vitals]"
class Cs{_enabledServerSide=!1
_initialized=!1
buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0}
constructor(e){var t
this.instance=e,this._enabledServerSide=!(null===(t=this.instance.persistence)||void 0===t||!t.props[pe]),this.startIfEnabled()}get allowedMetrics(){var e,t
const n=F(this.instance.config.capture_performance)?null===(e=this.instance.config.capture_performance)||void 0===e?void 0:e.web_vitals_allowed_metrics:void 0
return A(n)?(null===(t=this.instance.persistence)||void 0===t?void 0:t.props[_e])||["CLS","FCP","INP","LCP"]:n}get flushToCaptureTimeoutMs(){return(F(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals_delayed_flush_ms:void 0)||5e3}get _maxAllowedValue(){const e=F(this.instance.config.capture_performance)&&B(this.instance.config.capture_performance.__web_vitals_max_value)?this.instance.config.capture_performance.__web_vitals_max_value:Ts
return 0<e&&e<=6e4?Ts:e}get isEnabled(){const e=F(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals:void 0
return H(e)?e:this._enabledServerSide}startIfEnabled(){this.isEnabled&&!this._initialized&&(G.info($s+" enabled, starting..."),this.loadScript(this._startCapturing))}afterDecideResponse(e){const t=F(e.capturePerformance)&&!!e.capturePerformance.web_vitals,n=F(e.capturePerformance)?e.capturePerformance.web_vitals_allowed_metrics:void 0
this.instance.persistence&&(this.instance.persistence.register({[pe]:t}),this.instance.persistence.register({[_e]:n})),this._enabledServerSide=t,this.startIfEnabled()}loadScript(e){var t,n,i
null!==(t=E.__PosthogExtensions__)&&void 0!==t&&t.postHogWebVitalsCallbacks&&e(),null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"web-vitals",(t=>{t?G.error($s+" failed to load script",t):e()}))}_currentURL(){const e=h?h.location.href:void 0
return e||G.error($s+"Could not determine current URL"),e}_flushToCapture=()=>{clearTimeout(this._delayedFlushTimer),0!==this.buffer.metrics.length&&(this.instance.capture("$web_vitals",this.buffer.metrics.reduce(((e,t)=>({...e,[`$web_vitals_${t.name}_event`]:{...t},[`$web_vitals_${t.name}_value`]:t.value})),{})),this.buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0})}
_addToBuffer=e=>{var t
const n=null===(t=this.instance.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0)
if(A(n))return void G.error($s+"Could not read session ID. Dropping metrics!")
this.buffer=this.buffer||{url:void 0,metrics:[],firstMetricTimestamp:void 0}
const i=this._currentURL()
A(i)||(D(null==e?void 0:e.name)||D(null==e?void 0:e.value)?G.error($s+"Invalid metric received",e):this._maxAllowedValue&&e.value>=this._maxAllowedValue?G.error($s+"Ignoring metric with value >= "+this._maxAllowedValue,e):(this.buffer.url!==i&&(this._flushToCapture(),this._delayedFlushTimer=setTimeout(this._flushToCapture,this.flushToCaptureTimeoutMs)),A(this.buffer.url)&&(this.buffer.url=i),this.buffer.firstMetricTimestamp=A(this.buffer.firstMetricTimestamp)?Date.now():this.buffer.firstMetricTimestamp,e.attribution&&e.attribution.interactionTargetElement&&(e.attribution.interactionTargetElement=void 0),this.buffer.metrics.push({...e,$current_url:i,$session_id:n.sessionId,$window_id:n.windowId,timestamp:Date.now()}),this.buffer.metrics.length===this.allowedMetrics.length&&this._flushToCapture()))}
_startCapturing=()=>{let e,t,n,i
const r=E.__PosthogExtensions__
A(r)||A(r.postHogWebVitalsCallbacks)||({onLCP:e,onCLS:t,onFCP:n,onINP:i}=r.postHogWebVitalsCallbacks),e&&t&&n&&i?(this.allowedMetrics.indexOf("LCP")>-1&&e(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("CLS")>-1&&t(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("FCP")>-1&&n(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("INP")>-1&&i(this._addToBuffer.bind(this)),this._initialized=!0):G.error($s+"web vitals callbacks not loaded - not starting")}}const Is={icontains:(e,t)=>!!h&&t.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:(e,t)=>!!h&&-1===t.href.toLowerCase().indexOf(e.toLowerCase()),regex:(e,t)=>!!h&&gt(t.href,e),not_regex:(e,t)=>!!h&&!gt(t.href,e),exact:(e,t)=>t.href===e,is_not:(e,t)=>t.href!==e}
class Ls{constructor(e){this.instance=e
this.instance.onFeatureFlags&&this.instance.onFeatureFlags((e=>{this.applyFeatureFlagChanges(e)})),this._flagToExperiments=new Map}applyFeatureFlagChanges(e){D(this._flagToExperiments)||this.instance.config.disable_web_experiments||(Ls.logInfo("applying feature flags",e),e.forEach((e=>{var t
if(this._flagToExperiments&&null!==(t=this._flagToExperiments)&&void 0!==t&&t.has(e)){var n
const t=this.instance.getFeatureFlag(e),i=null===(n=this._flagToExperiments)||void 0===n?void 0:n.get(e)
t&&null!=i&&i.variants[t]&&this.applyTransforms(i.name,t,i.variants[t].transforms)}})))}afterDecideResponse(e){this._is_bot()?Ls.logInfo("Refusing to render web experiment since the viewer is a likely bot"):(this._featureFlags=e.featureFlags,this.loadIfEnabled(),this.previewWebExperiment())}previewWebExperiment(){const e=Ls.getWindowLocation()
if(null!=e&&e.search){const t=_t(null==e?void 0:e.search,"__experiment_id"),n=_t(null==e?void 0:e.search,"__experiment_variant")
t&&n&&(Ls.logInfo(`previewing web experiments ${t} && ${n}`),this.getWebExperiments((e=>{this.showPreviewWebExperiment(parseInt(t),n,e)}),!1,!0))}}loadIfEnabled(){this.instance.config.disable_web_experiments||this.getWebExperimentsAndEvaluateDisplayLogic()}getWebExperimentsAndEvaluateDisplayLogic=(()=>{var e=this
return function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
e.getWebExperiments((t=>{Ls.logInfo("retrieved web experiments from the server"),e._flagToExperiments=new Map,t.forEach((t=>{if(t.feature_flag_key&&e._featureFlags&&e._featureFlags[t.feature_flag_key]){var n
e._flagToExperiments&&(Ls.logInfo("setting flag key ",t.feature_flag_key," to web experiment ",t),null===(n=e._flagToExperiments)||void 0===n||n.set(t.feature_flag_key,t))
const i=e._featureFlags[t.feature_flag_key]
i&&t.variants[i]&&e.applyTransforms(t.name,i,t.variants[i].transforms)}else if(t.variants)for(const n in t.variants){const i=t.variants[n]
Ls.matchesTestVariant(i)&&e.applyTransforms(t.name,n,i.transforms)}}))}),t)}})()
getWebExperiments(e,t,n){if(this.instance.config.disable_web_experiments&&!n)return e([])
const i=this.instance.get_property("$web_experiments")
if(i&&!t)return e(i)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api",`/api/web_experiments/?token=${this.instance.config.token}`),method:"GET",transport:"XHR",callback:t=>{if(200!==t.statusCode||!t.json)return e([])
const n=t.json.experiments||[]
return e(n)}})}showPreviewWebExperiment(e,t,n){const i=n.filter((t=>t.id===e))
i&&i.length>0&&(Ls.logInfo(`Previewing web experiment [${i[0].name}] with variant [${t}]`),this.applyTransforms(i[0].name,t,i[0].variants[t].transforms,!0))}static matchesTestVariant(e){return!D(e.conditions)&&Ls.matchUrlConditions(e)&&Ls.matchUTMConditions(e)}static matchUrlConditions(e){var t
if(D(e.conditions)||D(null===(t=e.conditions)||void 0===t?void 0:t.url))return!0
const n=Ls.getWindowLocation()
var i,r,s
return!!n&&(null===(i=e.conditions)||void 0===i||!i.url||Is[null!==(r=null===(s=e.conditions)||void 0===s?void 0:s.urlMatchType)&&void 0!==r?r:"icontains"](e.conditions.url,n))}static getWindowLocation(){return null==h?void 0:h.location}static matchUTMConditions(e){var t
if(D(e.conditions)||D(null===(t=e.conditions)||void 0===t?void 0:t.utm))return!0
const n=gn.campaignParams()
if(n.utm_source){var i,r,s,o,a,l,c,u,d,h,f,p,g,_,v,m
const t=null===(i=e.conditions)||void 0===i||null===(r=i.utm)||void 0===r||!r.utm_campaign||(null===(s=e.conditions)||void 0===s||null===(o=s.utm)||void 0===o?void 0:o.utm_campaign)==n.utm_campaign,y=null===(a=e.conditions)||void 0===a||null===(l=a.utm)||void 0===l||!l.utm_source||(null===(c=e.conditions)||void 0===c||null===(u=c.utm)||void 0===u?void 0:u.utm_source)==n.utm_source,b=null===(d=e.conditions)||void 0===d||null===(h=d.utm)||void 0===h||!h.utm_medium||(null===(f=e.conditions)||void 0===f||null===(p=f.utm)||void 0===p?void 0:p.utm_medium)==n.utm_medium,w=null===(g=e.conditions)||void 0===g||null===(_=g.utm)||void 0===_||!_.utm_term||(null===(v=e.conditions)||void 0===v||null===(m=v.utm)||void 0===m?void 0:m.utm_term)==n.utm_term
return t&&b&&w&&y}return!1}static logInfo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
G.info(`[WebExperiments] ${e}`,n)}applyTransforms(e,t,n,i){var r
this._is_bot()?Ls.logInfo("Refusing to render web experiment since the viewer is a likely bot"):"control"!==t?n.forEach((n=>{if(n.selector){var r
Ls.logInfo(`applying transform of variant ${t} for experiment ${e} `,n)
let o=0
const a=null===(r=document)||void 0===r?void 0:r.querySelectorAll(n.selector)
var s
null==a||a.forEach((e=>{const t=e
o+=1,n.attributes&&n.attributes.forEach((e=>{switch(e.name){case"text":t.innerText=e.value
break
case"html":t.innerHTML=e.value
break
case"cssClass":t.className=e.value
break
default:t.setAttribute(e.name,e.value)}})),n.text&&(t.innerText=n.text),n.html&&(t.parentElement?t.parentElement.innerHTML=n.html:t.innerHTML=n.html),n.css&&t.setAttribute("style",n.css)})),this.instance&&this.instance.capture&&this.instance.capture("$web_experiment_applied",{$web_experiment_name:e,$web_experiment_variant:t,$web_experiment_preview:i,$web_experiment_document_url:null===(s=Ls.getWindowLocation())||void 0===s?void 0:s.href,$web_experiment_elements_modified:o})}})):(Ls.logInfo("Control variants leave the page unmodified."),this.instance&&this.instance.capture&&this.instance.capture("$web_experiment_applied",{$web_experiment_name:e,$web_experiment_preview:i,$web_experiment_variant:t,$web_experiment_document_url:null===(r=Ls.getWindowLocation())||void 0===r?void 0:r.href,$web_experiment_elements_modified:0}))}_is_bot(){return v&&this.instance?cs(v,this.instance.config.custom_blocked_useragents):void 0}}class Rs{constructor(e){var t
this.instance=e,this._endpointSuffix=(null===(t=this.instance.persistence)||void 0===t?void 0:t.props[fe])||"/e/"}get endpoint(){return this.instance.requestRouter.endpointFor("api",this._endpointSuffix)}afterDecideResponse(e){const t=e.autocaptureExceptions
this._endpointSuffix=F(t)&&t.endpoint||"/e/",this.instance.persistence&&this.instance.persistence.register({[fe]:this._endpointSuffix})}sendExceptionEvent(e){this.instance.capture("$exception",e,{_noTruncate:!0,_batchKey:"exceptionEvent",_url:this.endpoint})}}const Fs={},Os=()=>{},As="posthog"
let Ms=!nr&&-1===(null==S?void 0:S.indexOf("MSIE"))&&-1===(null==S?void 0:S.indexOf("Mozilla"))
const Ns=()=>{var e
return{api_host:"https://us.i.posthog.com",ui_host:null,token:"",autocapture:!0,rageclick:!0,cross_subdomain_cookie:re(null==m?void 0:m.location),persistence:"localStorage+cookie",persistence_name:"",loaded:Os,store_google:!0,custom_campaign_params:[],custom_blocked_useragents:[],save_referrer:!0,capture_pageview:!0,capture_pageleave:"if_capture_pageview",debug:y&&M(null==y?void 0:y.search)&&-1!==y.search.indexOf("__posthog_debug=true")||!1,verbose:!1,cookie_expiration:365,upgrade:!1,disable_session_recording:!1,disable_persistence:!1,disable_web_experiments:!0,disable_surveys:!1,enable_recording_console_log:void 0,secure_cookie:"https:"===(null==h||null===(e=h.location)||void 0===e?void 0:e.protocol),ip:!0,opt_out_capturing_by_default:!1,opt_out_persistence_by_default:!1,opt_out_useragent_filter:!1,opt_out_capturing_persistence_type:"localStorage",opt_out_capturing_cookie_prefix:null,opt_in_site_apps:!1,property_denylist:[],respect_dnt:!1,sanitize_properties:null,request_headers:{},inapp_protocol:"//",inapp_link_new_window:!1,request_batching:!0,properties_string_max_length:65535,session_recording:{},mask_all_element_attributes:!1,mask_all_text:!1,advanced_disable_decide:!1,advanced_disable_feature_flags:!1,advanced_disable_feature_flags_on_first_load:!1,advanced_disable_toolbar_metrics:!1,feature_flag_request_timeout_ms:3e3,on_request_error:e=>{const t="Bad HTTP status: "+e.statusCode+" "+e.text
G.error(t)},get_device_id:e=>e,_onCapture:Os,capture_performance:void 0,name:"posthog",bootstrap:{},disable_compression:!1,session_idle_timeout_seconds:1800,person_profiles:"identified_only",__add_tracing_headers:!1}},js=e=>{const t={}
A(e.process_person)||(t.person_profiles=e.process_person),A(e.xhr_headers)||(t.request_headers=e.xhr_headers),A(e.cookie_name)||(t.persistence_name=e.cookie_name),A(e.disable_cookie)||(t.disable_persistence=e.disable_cookie)
const n=K({},t,e)
return L(e.property_blacklist)&&(A(e.property_denylist)?n.property_denylist=e.property_blacklist:L(e.property_denylist)?n.property_denylist=[...e.property_blacklist,...e.property_denylist]:G.error("Invalid value for property_denylist config: "+e.property_denylist)),n}
class Ds{get _forceAllowLocalhost(){return this.__forceAllowLocalhost}set _forceAllowLocalhost(e){G.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),this.__forceAllowLocalhost=e}__forceAllowLocalhost=!1}class Bs{webPerformance=new Ds
version=x.LIB_VERSION
_internalEventEmitter=new yr
constructor(){this.config=Ns(),this.decideEndpointWasHit=!1,this.SentryIntegration=pr,this.sentryIntegration=e=>function(e,t){const n=fr(e,t)
return{name:hr,processEvent:e=>n(e)}}(this,e),this.__request_queue=[],this.__loaded=!1,this.analyticsDefaultEndpoint="/e/",this._initialPageviewCaptured=!1,this._initialPersonProfilesConfig=null,this.featureFlags=new Ve(this),this.toolbar=new er(this),this.scrollManager=new _s(this),this.pageViewManager=new gr(this),this.surveys=new is(this),this.experiments=new Ls(this),this.exceptions=new Rs(this),this.rateLimiter=new rs(this),this.requestRouter=new dr(this),this.consent=new Es(this),this.people={set:(e,t,n)=>{const i=M(e)?{[e]:t}:e
this.setPersonProperties(i),null==n||n({})},set_once:(e,t,n)=>{const i=M(e)?{[e]:t}:e
this.setPersonProperties(void 0,i),null==n||n({})}},this.on("eventCaptured",(e=>G.info(`send "${null==e?void 0:e.event}"`,e)))}init(e,t,n){if(n&&n!==As){var i
const r=null!==(i=Fs[n])&&void 0!==i?i:new Bs
return r._init(e,t,n),Fs[n]=r,Fs[As][n]=r,r}return this._init(e,t,n)}_init(e){var t,n
let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0
if(A(e)||N(e))return G.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),this
if(this.__loaded)return G.warn("You have already initialized PostHog! Re-initializing is a no-op"),this
this.__loaded=!0,this.config={},this._triggered_notifs=[],i.person_profiles&&(this._initialPersonProfilesConfig=i.person_profiles),this.set_config(K({},Ns(),js(i),{name:r,token:e})),this.config.on_xhr_error&&G.error("[posthog] on_xhr_error is deprecated. Use on_request_error instead"),this.compression=i.disable_compression?void 0:oe.GZipJS,this.persistence=new vn(this.config),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new vn({...this.config,persistence:"sessionStorage"})
const s={...this.persistence.props},o={...this.sessionPersistence.props}
if(this._requestQueue=new tr((e=>this._send_retriable_request(e))),this._retryQueue=new ar(this),this.__request_queue=[],this.sessionManager=new lr(this.config,this.persistence),this.sessionPropsManager=new os(this.sessionManager,this.persistence),new ks(this).startIfEnabledOrStop(),this.sessionRecording=new Ji(this),this.sessionRecording.startIfEnabledOrStop(),this.config.disable_scroll_properties||this.scrollManager.startMeasuringScrollPosition(),this.autocapture=new ws(this),this.autocapture.startIfEnabled(),this.surveys.loadIfEnabled(),this.heatmaps=new gs(this),this.heatmaps.startIfEnabled(),this.webVitalsAutocapture=new Cs(this),this.exceptionObserver=new Ps(this),this.exceptionObserver.startIfEnabled(),this.deadClicksAutocapture=new ps(this,fs),this.deadClicksAutocapture.startIfEnabled(),x.DEBUG=x.DEBUG||this.config.debug,x.DEBUG&&G.info("Starting in debug mode",{this:this,config:i,thisC:{...this.config},p:s,s:o}),this._sync_opt_out_with_persistence(),void 0!==(null===(t=i.bootstrap)||void 0===t?void 0:t.distinctID)){var a,l
const e=this.config.get_device_id(et()),t=null!==(a=i.bootstrap)&&void 0!==a&&a.isIdentifiedID?e:i.bootstrap.distinctID
this.persistence.set_property(Oe,null!==(l=i.bootstrap)&&void 0!==l&&l.isIdentifiedID?"identified":"anonymous"),this.register({distinct_id:i.bootstrap.distinctID,$device_id:t})}if(this._hasBootstrappedFeatureFlags()){var c,u
const e=Object.keys((null===(c=i.bootstrap)||void 0===c?void 0:c.featureFlags)||{}).filter((e=>{var t,n
return!(null===(t=i.bootstrap)||void 0===t||null===(n=t.featureFlags)||void 0===n||!n[e])})).reduce(((e,t)=>{var n,r
return e[t]=(null===(n=i.bootstrap)||void 0===n||null===(r=n.featureFlags)||void 0===r?void 0:r[t])||!1,e}),{}),t=Object.keys((null===(u=i.bootstrap)||void 0===u?void 0:u.featureFlagPayloads)||{}).filter((t=>e[t])).reduce(((e,t)=>{var n,r,s,o
return null!==(n=i.bootstrap)&&void 0!==n&&null!==(r=n.featureFlagPayloads)&&void 0!==r&&r[t]&&(e[t]=null===(s=i.bootstrap)||void 0===s||null===(o=s.featureFlagPayloads)||void 0===o?void 0:o[t]),e}),{})
this.featureFlags.receivedFeatureFlags({featureFlags:e,featureFlagPayloads:t})}if(!this.get_distinct_id()){const e=this.config.get_device_id(et())
this.register_once({distinct_id:e,$device_id:e},""),this.persistence.set_property(Oe,"anonymous")}return null==h||null===(n=h.addEventListener)||void 0===n||n.call(h,"onpagehide"in self?"pagehide":"unload",this._handle_unload.bind(this)),this.toolbar.maybeLoadToolbar(),i.segment?function(e,t){const n=e.config.segment
if(!n)return t()
!function(e,t){const n=e.config.segment
if(!n)return t()
const i=n=>{const i=()=>n.anonymousId()||et()
e.config.get_device_id=i,n.id()&&(e.register({distinct_id:n.id(),$device_id:i()}),e.persistence.set_property(Oe,"identified")),t()},r=n.user()
"then"in r&&R(r.then)?r.then((e=>i(e))):i(r)}(e,(()=>{n.register((e=>{Promise&&Promise.resolve||G.warn("This browser does not have Promise support, and can not use the segment integration")
const t=(t,n)=>{var i
if(!n)return t
t.event.userId||t.event.anonymousId===e.get_distinct_id()||(G.info("Segment integration does not have a userId set, resetting PostHog"),e.reset()),t.event.userId&&t.event.userId!==e.get_distinct_id()&&(G.info("Segment integration has a userId set, identifying with PostHog"),e.identify(t.event.userId))
const r=e._calculate_event_properties(n,null!==(i=t.event.properties)&&void 0!==i?i:{},new Date)
return t.event.properties=Object.assign({},r,t.event.properties),t}
return{name:"PostHog JS",type:"enrichment",version:"1.0.0",isLoaded:()=>!0,load:()=>Promise.resolve(),track:e=>t(e,e.event.event),page:e=>t(e,"$pageview"),identify:e=>t(e,"$identify"),screen:e=>t(e,"$screen")}})(e)).then((()=>{t()}))}))}(this,(()=>this._loaded())):this._loaded(),R(this.config._onCapture)&&this.on("eventCaptured",(e=>this.config._onCapture(e.event,e))),this}_afterDecideResponse(e){var t,n,i,r,s,o,a,l,c,u
this.compression=void 0,e.supportedCompression&&!this.config.disable_compression&&(this.compression=X(e.supportedCompression,oe.GZipJS)?oe.GZipJS:X(e.supportedCompression,oe.Base64)?oe.Base64:void 0),null!==(t=e.analytics)&&void 0!==t&&t.endpoint&&(this.analyticsDefaultEndpoint=e.analytics.endpoint),this.set_config({person_profiles:this._initialPersonProfilesConfig?this._initialPersonProfilesConfig:e.defaultIdentifiedOnly?"identified_only":"always"}),null===(n=this.sessionRecording)||void 0===n||n.afterDecideResponse(e),null===(i=this.autocapture)||void 0===i||i.afterDecideResponse(e),null===(r=this.heatmaps)||void 0===r||r.afterDecideResponse(e),null===(s=this.experiments)||void 0===s||s.afterDecideResponse(e),null===(o=this.surveys)||void 0===o||o.afterDecideResponse(e),null===(a=this.webVitalsAutocapture)||void 0===a||a.afterDecideResponse(e),null===(l=this.exceptions)||void 0===l||l.afterDecideResponse(e),null===(c=this.exceptionObserver)||void 0===c||c.afterDecideResponse(e),null===(u=this.deadClicksAutocapture)||void 0===u||u.afterDecideResponse(e)}_loaded(){const e=this.config.advanced_disable_decide
e||this.featureFlags.setReloadingPaused(!0)
try{this.config.loaded(this)}catch(e){G.critical("`loaded` function failed",e)}this._start_queue_if_opted_in(),this.config.capture_pageview&&setTimeout((()=>{this.consent.isOptedIn()&&this._captureInitialPageview()}),1),e||(new Ki(this).call(),this.featureFlags.resetRequestQueue())}_start_queue_if_opted_in(){var e
this.has_opted_out_capturing()||this.config.request_batching&&(null===(e=this._requestQueue)||void 0===e||e.enable())}_dom_loaded(){this.has_opted_out_capturing()||Q(this.__request_queue,(e=>this._send_retriable_request(e))),this.__request_queue=[],this._start_queue_if_opted_in()}_handle_unload(){var e,t
this.config.request_batching?(this._shouldCapturePageleave()&&this.capture("$pageleave"),null===(e=this._requestQueue)||void 0===e||e.unload(),null===(t=this._retryQueue)||void 0===t||t.unload()):this._shouldCapturePageleave()&&this.capture("$pageleave",null,{transport:"sendBeacon"})}_send_request(e){this.__loaded&&(Ms?this.__request_queue.push(e):this.rateLimiter.isServerRateLimited(e.batchKey)||(e.transport=e.transport||this.config.api_transport,e.url=rr(e.url,{ip:this.config.ip?1:0}),e.headers={...this.config.request_headers},e.compression="best-available"===e.compression?this.compression:e.compression,(e=>{var t,n,i
const r={...e}
r.timeout=r.timeout||6e4,r.url=rr(r.url,{_:(new Date).getTime().toString(),ver:x.LIB_VERSION,compression:r.compression})
const s=null!==(t=r.transport)&&void 0!==t?t:"XHR",o=null!==(n=null===(i=se(or,(e=>e.transport===s)))||void 0===i?void 0:i.method)&&void 0!==n?n:or[0].method
if(!o)throw new Error("No available transport method")
o(r)})({...e,callback:t=>{var n,i,r
this.rateLimiter.checkForLimiting(t),t.statusCode>=400&&(null===(i=(r=this.config).on_request_error)||void 0===i||i.call(r,t)),null===(n=e.callback)||void 0===n||n.call(e,t)}})))}_send_retriable_request(e){this._retryQueue?this._retryQueue.retriableRequest(e):this._send_request(e)}_execute_array(e){let t
const n=[],i=[],r=[]
Q(e,(e=>{e&&(t=e[0],L(t)?r.push(e):R(e)?e.call(this):L(e)&&"alias"===t?n.push(e):L(e)&&-1!==t.indexOf("capture")&&R(this[t])?r.push(e):i.push(e))}))
const s=function(e,t){Q(e,(function(e){if(L(e[0])){let n=t
J(e,(function(e){n=n[e[0]].apply(n,e.slice(1))}))}else this[e[0]].apply(this,e.slice(1))}),t)}
s(n,this),s(i,this),s(r,this)}_hasBootstrappedFeatureFlags(){var e,t
return(null===(e=this.config.bootstrap)||void 0===e?void 0:e.featureFlags)&&Object.keys(null===(t=this.config.bootstrap)||void 0===t?void 0:t.featureFlags).length>0||!1}push(e){this._execute_array([e])}capture(e,t,n){var i
if(!(this.__loaded&&this.persistence&&this.sessionPersistence&&this._requestQueue))return void G.uninitializedWarning("posthog.capture")
if(this.consent.isOptedOut())return
if(A(e)||!M(e))return void G.error("No event name provided to posthog.capture")
if(!this.config.opt_out_useragent_filter&&this._is_bot())return
const r=null!=n&&n.skip_client_rate_limiting?void 0:this.rateLimiter.clientRateLimitContext()
if(null!=r&&r.isRateLimited)return void G.critical("This capture call is ignored due to client rate limiting.")
this.sessionPersistence.update_search_keyword(),this.config.store_google&&this.sessionPersistence.update_campaign_params(),this.config.save_referrer&&this.sessionPersistence.update_referrer_info(),(this.config.store_google||this.config.save_referrer)&&this.persistence.set_initial_person_info()
const s=new Date,o=(null==n?void 0:n.timestamp)||s
let a={uuid:et(),event:e,properties:this._calculate_event_properties(e,t||{},o)}
r&&(a.properties.$lib_rate_limit_remaining_tokens=r.remainingTokens),(null==n?void 0:n.$set)&&(a.$set=null==n?void 0:n.$set)
const l=this._calculate_set_once_properties(null==n?void 0:n.$set_once)
l&&(a.$set_once=l),a=function(e,t){return function(e,t){const n=new Set
return function e(i,r){if(i!==Object(i))return t?t(i):i
if(n.has(i))return
let s
return n.add(i),L(i)?(s=[],Q(i,(t=>{s.push(e(t))}))):(s={},J(i,((t,i)=>{n.has(t)||(s[i]=e(t,i))}))),s}(e)}(e,(e=>M(e)&&!j(t)?e.slice(0,t):e))}(a,null!=n&&n._noTruncate?null:this.config.properties_string_max_length),a.timestamp=o,A(null==n?void 0:n.timestamp)||(a.properties.$event_time_override_provided=!0,a.properties.$event_time_override_system_time=s)
const c={...a.properties.$set,...a.$set}
O(c)||this.setPersonPropertiesForFlags(c),this._internalEventEmitter.emit("eventCaptured",a)
const u={method:"POST",url:null!==(i=null==n?void 0:n._url)&&void 0!==i?i:this.requestRouter.endpointFor("api",this.analyticsDefaultEndpoint),data:a,compression:"best-available",batchKey:null==n?void 0:n._batchKey}
return!this.config.request_batching||n&&(null==n||!n._batchKey)||null!=n&&n.send_instantly?this._send_retriable_request(u):this._requestQueue.enqueue(u),a}_addCaptureHook(e){return this.on("eventCaptured",(t=>e(t.event,t)))}_calculate_event_properties(e,t,n){if(n=n||new Date,!this.persistence||!this.sessionPersistence)return t
const i=this.persistence.remove_event_timer(e)
let r={...t}
if(r.token=this.config.token,"$snapshot"===e){const e={...this.persistence.properties(),...this.sessionPersistence.properties()}
return r.distinct_id=e.distinct_id,(!M(r.distinct_id)&&!B(r.distinct_id)||N(r.distinct_id))&&G.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),r}const s=gn.properties()
if(this.sessionManager){const{sessionId:e,windowId:t}=this.sessionManager.checkAndGetSessionAndWindowId()
r.$session_id=e,r.$window_id=t}if(this.requestRouter.region===cr.CUSTOM&&(r.$lib_custom_api_host=this.config.api_host),this.sessionPropsManager&&this.config.__preview_send_client_session_params&&("$pageview"===e||"$pageleave"===e||"$autocapture"===e)){const e=this.sessionPropsManager.getSessionProps()
r=K(r,e)}if(!this.config.disable_scroll_properties){let t={}
"$pageview"===e?t=this.pageViewManager.doPageView(n):"$pageleave"===e&&(t=this.pageViewManager.doPageLeave(n)),r=K(r,t)}if("$pageview"===e&&m&&(r.title=m.title),!A(i)){const e=n.getTime()-i
r.$duration=parseFloat((e/1e3).toFixed(3))}S&&this.config.opt_out_useragent_filter&&(r.$browser_type=this._is_bot()?"bot":"browser"),r=K({},s,this.persistence.properties(),this.sessionPersistence.properties(),r),r.$is_identified=this._isIdentified(),L(this.config.property_denylist)?J(this.config.property_denylist,(function(e){delete r[e]})):G.error("Invalid value for property_denylist config: "+this.config.property_denylist+" or property_blacklist config: "+this.config.property_blacklist)
const o=this.config.sanitize_properties
o&&(r=o(r,e))
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
const r="anonymous"===(this.persistence.get_property(Oe)||"anonymous")
e!==i&&r?(this.persistence.set_property(Oe,"identified"),this.setPersonPropertiesForFlags(t||{},!1),this.capture("$identify",{distinct_id:e,$anon_distinct_id:i},{$set:t||{},$set_once:n||{}}),this.featureFlags.setAnonymousDistinctId(i)):(t||n)&&this.setPersonProperties(t,n),e!==i&&(this.reloadFeatureFlags(),this.unregister(Fe))}setPersonProperties(e,t){(e||t)&&this._requirePersonProcessing("posthog.setPersonProperties")&&(this.setPersonPropertiesForFlags(e||{}),this.capture("$set",{$set:e||{},$set_once:t||{}}))}group(e,t,n){if(!e||!t)return void G.error("posthog.group requires a group type and group key")
if(!this._requirePersonProcessing("posthog.group"))return
const i=this.getGroups()
i[e]!==t&&this.resetGroupPropertiesForFlags(e),this.register({$groups:{...i,[e]:t}}),n&&(this.capture("$groupidentify",{$group_type:e,$group_key:t,$group_set:n}),this.setGroupPropertiesForFlags({[e]:n})),i[e]===t||n||this.reloadFeatureFlags()}resetGroups(){this.register({$groups:{}}),this.resetGroupPropertiesForFlags(),this.reloadFeatureFlags()}setPersonPropertiesForFlags(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this._requirePersonProcessing("posthog.setPersonPropertiesForFlags")&&this.featureFlags.setPersonPropertiesForFlags(e,t)}resetPersonPropertiesForFlags(){this.featureFlags.resetPersonPropertiesForFlags()}setGroupPropertiesForFlags(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this._requirePersonProcessing("posthog.setGroupPropertiesForFlags")&&this.featureFlags.setGroupPropertiesForFlags(e,t)}resetGroupPropertiesForFlags(e){this.featureFlags.resetGroupPropertiesForFlags(e)}reset(e){var t,n,i,r,s
if(G.info("reset"),!this.__loaded)return G.uninitializedWarning("posthog.reset")
const o=this.get_property("$device_id")
this.consent.reset(),null===(t=this.persistence)||void 0===t||t.clear(),null===(n=this.sessionPersistence)||void 0===n||n.clear(),null===(i=this.surveys)||void 0===i||i.reset(),null===(r=this.persistence)||void 0===r||r.set_property(Oe,"anonymous"),null===(s=this.sessionManager)||void 0===s||s.resetSessionId()
const a=this.config.get_device_id(et())
this.register_once({distinct_id:a,$device_id:e?a:o},"")}get_distinct_id(){return this.get_property("distinct_id")}getGroups(){return this.get_property("$groups")||{}}get_session_id(){var e,t
return null!==(e=null===(t=this.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0).sessionId)&&void 0!==e?e:""}get_session_replay_url(e){if(!this.sessionManager)return""
const{sessionId:t,sessionStartTimestamp:n}=this.sessionManager.checkAndGetSessionAndWindowId(!0)
let i=this.requestRouter.endpointFor("ui",`/project/${this.config.token}/replay/${t}`)
if(null!=e&&e.withTimestamp&&n){var r
const t=null!==(r=e.timestampLookBack)&&void 0!==r?r:10
if(!n)return i
i+=`?t=${Math.max(Math.floor(((new Date).getTime()-n)/1e3)-t,0)}`}return i}alias(e,t){return e===this.get_property(ae)?(G.critical("Attempting to create alias for existing People user - aborting."),-2):this._requirePersonProcessing("posthog.alias")?(A(t)&&(t=this.get_distinct_id()),e!==t?(this._register_single(le,e),this.capture("$create_alias",{alias:e,distinct_id:t})):(G.warn("alias matches current distinct_id - skipping api call."),this.identify(e),-1)):void 0}set_config(e){const t={...this.config}
var n,i,r,s
F(e)&&(K(this.config,js(e)),null===(n=this.persistence)||void 0===n||n.update_config(this.config,t),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new vn({...this.config,persistence:"sessionStorage"}),ot.is_supported()&&"true"===ot.get("ph_debug")&&(this.config.debug=!0),this.config.debug&&(x.DEBUG=!0,G.info("set_config",{config:e,oldConfig:t,newConfig:{...this.config}})),null===(i=this.sessionRecording)||void 0===i||i.startIfEnabledOrStop(),null===(r=this.autocapture)||void 0===r||r.startIfEnabled(),null===(s=this.heatmaps)||void 0===s||s.startIfEnabled(),this.surveys.loadIfEnabled(),this._sync_opt_out_with_persistence())}startSessionRecording(e){const t=!0===e,n={sampling:t||!(null==e||!e.sampling),linked_flag:t||!(null==e||!e.linked_flag),url_trigger:t||!(null==e||!e.url_trigger),event_trigger:t||!(null==e||!e.event_trigger)}
var i,r,s,o,a
Object.values(n).some(Boolean)&&(null===(i=this.sessionManager)||void 0===i||i.checkAndGetSessionAndWindowId(),n.sampling&&(null===(r=this.sessionRecording)||void 0===r||r.overrideSampling()),n.linked_flag&&(null===(s=this.sessionRecording)||void 0===s||s.overrideLinkedFlag()),n.url_trigger&&(null===(o=this.sessionRecording)||void 0===o||o.overrideTrigger("url")),n.event_trigger&&(null===(a=this.sessionRecording)||void 0===a||a.overrideTrigger("event")))
this.set_config({disable_session_recording:!1})}stopSessionRecording(){this.set_config({disable_session_recording:!0})}sessionRecordingStarted(){var e
return!(null===(e=this.sessionRecording)||void 0===e||!e.started)}captureException(e,t){var n
const i=new Error("PostHog syntheticException"),r=R(null===(n=E.__PosthogExtensions__)||void 0===n?void 0:n.parseErrorAsProperties)?E.__PosthogExtensions__.parseErrorAsProperties([e.message,void 0,void 0,void 0,e],{syntheticException:i}):{$exception_level:"error",$exception_list:[{type:e.name,value:e.message,mechanism:{handled:!0,synthetic:!1}}],...t}
this.exceptions.sendExceptionEvent(r)}loadToolbar(e){return this.toolbar.loadToolbar(e)}get_property(e){var t
return null===(t=this.persistence)||void 0===t?void 0:t.props[e]}getSessionProperty(e){var t
return null===(t=this.sessionPersistence)||void 0===t?void 0:t.props[e]}toString(){var e
let t=null!==(e=this.config.name)&&void 0!==e?e:As
return t!==As&&(t=As+"."+t),t}_isIdentified(){var e,t
return"identified"===(null===(e=this.persistence)||void 0===e?void 0:e.get_property(Oe))||"identified"===(null===(t=this.sessionPersistence)||void 0===t?void 0:t.get_property(Oe))}_hasPersonProcessing(){var e,t,n,i
return!("never"===this.config.person_profiles||"identified_only"===this.config.person_profiles&&!this._isIdentified()&&O(this.getGroups())&&(null===(e=this.persistence)||void 0===e||null===(t=e.props)||void 0===t||!t[le])&&(null===(n=this.persistence)||void 0===n||null===(i=n.props)||void 0===i||!i[Be]))}_shouldCapturePageleave(){return!0===this.config.capture_pageleave||"if_capture_pageview"===this.config.capture_pageleave&&this.config.capture_pageview}createPersonProfile(){this._hasPersonProcessing()||this._requirePersonProcessing("posthog.createPersonProfile")&&this.setPersonProperties({},{})}_requirePersonProcessing(e){return"never"===this.config.person_profiles?(G.error(e+' was called, but process_person is set to "never". This call will be ignored.'),!1):(this._register_single(Be,!0),!0)}_sync_opt_out_with_persistence(){var e,t
const n=this.consent.isOptedOut(),i=this.config.opt_out_persistence_by_default,r=this.config.disable_persistence||n&&!!i
var s,o;(null===(e=this.persistence)||void 0===e?void 0:e.disabled)!==r&&(null===(s=this.persistence)||void 0===s||s.set_disabled(r)),(null===(t=this.sessionPersistence)||void 0===t?void 0:t.disabled)!==r&&(null===(o=this.sessionPersistence)||void 0===o||o.set_disabled(r))}opt_in_capturing(e){var t
this.consent.optInOut(!0),this._sync_opt_out_with_persistence(),(A(null==e?void 0:e.captureEventName)||null!=e&&e.captureEventName)&&this.capture(null!==(t=null==e?void 0:e.captureEventName)&&void 0!==t?t:"$opt_in",null==e?void 0:e.captureProperties,{send_instantly:!0}),this.config.capture_pageview&&this._captureInitialPageview()}opt_out_capturing(){this.consent.optInOut(!1),this._sync_opt_out_with_persistence()}has_opted_in_capturing(){return this.consent.isOptedIn()}has_opted_out_capturing(){return this.consent.isOptedOut()}clear_opt_in_out_capturing(){this.consent.reset(),this._sync_opt_out_with_persistence()}_is_bot(){return v?cs(v,this.config.custom_blocked_useragents):void 0}_captureInitialPageview(){m&&!this._initialPageviewCaptured&&(this._initialPageviewCaptured=!0,this.capture("$pageview",{title:m.title},{send_instantly:!0}))}debug(e){!1===e?(null==h||h.console.log("You've disabled debug mode."),localStorage&&localStorage.removeItem("ph_debug"),this.set_config({debug:!1})):(null==h||h.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),localStorage&&localStorage.setItem("ph_debug","true"),this.set_config({debug:!0}))}}!function(e,t){for(let n=0;n<t.length;n++)e.prototype[t[n]]=ee(e.prototype[t[n]])}(Bs,["identify"])
const Hs=function(){const e=Fs[As]=new Bs
return function(){function e(){e.done||(e.done=!0,Ms=!1,J(Fs,(function(e){e._dom_loaded()})))}null!=m&&m.addEventListener&&("complete"===m.readyState?e():m.addEventListener("DOMContentLoaded",e,!1)),h&&ie(h,"load",e,!0)}(),e}()
function qs(...e){console.log(...e)}function Us(e,t){Hs.capture(e,t)}function Gs(){"string"==typeof window.self&&(s(),window.self=window),function(){try{Hs.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N",{advanced_disable_decide:!0,advanced_disable_feature_flags:!0,advanced_disable_feature_flags_on_first_load:!0,advanced_disable_toolbar_metrics:!0,api_host:"https://us.i.posthog.com",autocapture:!1,capture_pageview:!1,disable_compression:!1,disable_persistence:!0,disable_session_recording:!0,disable_surveys:!0,person_profiles:"identified_only"})}catch(e){qs(e)}}()}let Ws=0,zs=0,Vs=0,Qs=0,Js=0,Ks=0,Xs=0
const Ys=()=>Date.now(),Zs=()=>Math.floor(Ys()/1e3)
function eo(){return Ws||(Ws=Ys()),Ws}function to(){return zs||(zs=eo()-3e5),zs}function no(){return Vs||(Vs=eo()-1728e5),Vs}function io(){return Qs||(Qs=Math.floor(eo()/1e3)),Qs}function ro(){return Js||(Js=io()-120),Js}function so(){return Ks||(Ks=io()-86400),Ks}function oo(){return Xs||(Xs=io()-604800),Xs}function ao(e){return null===e}function lo(e){return void 0===e}const co=`${document.location.protocol}//${document.location.host}/`,uo=window.HCS?.defines?.cdn,ho=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],fo=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],po=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],go=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,_o=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,vo=/guild_id=(?<guildId>\d+)/,mo=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,yo=/player_id=(?<playerId>\d+)/,bo=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,wo=/VL:.+?(?<vl>\d+)/,ko=.2,So="joinallgroupsundersize",Eo="index.php",xo="?cmd=",Po=`${Eo}${xo}`,To="&subcmd=",$o="&target_username=",Co=`${Po}auctionhouse`,Io=`${Co}&search=`,Lo=`${Po}log`,Ro=`${Po}ignore${To}add&ignore_username=`,Fo=`${Po}profile`,Oo=`${Fo}&player_id=`,Ao=`${Fo}${To}dropitems`,Mo=`${Po}trade&target_player=`,No=`${Po}trade${To}createsecure${$o}`,jo=`${Po}arena${To}`,Do=`${Eo}${`${xo}notepad&blank=1${To}`}`,Bo=`${Do}auctionsearch`,Ho=`${Po}points`,qo=`${Po}guild${To}`,Uo=`${qo}log`,Go=`${qo}scouttower`,Wo=`${qo}groups&subcmd2=`,zo=`${qo}inventory&subcmd2=report&user=`,Vo=`${qo}view&guild_id=`,Qo=`${Wo}joinall`,Jo=`${Wo}${So}`,Ko=`${Po}world`,Xo=`${Po}findplayer`,Yo=`${Xo}&search_show_first=1&search_username=`,Zo=`${Po}blacksmith`,ea=`${Po}quickbuff`,ta=`${Po}composing`,na=`${Po}attackplayer${$o}`,ia=`${Po}${To}viewupdatearchive`,ra=`${Po}${To}viewarchive`,sa=`${Po}bounty`,oa=`${Po}inventing${To}viewrecipe&recipe_id=`,aa=`https://guide.fallensword.com/${Po}`,la="after-update.actionlist",ca="buffs.player",ua="update.player",da="level.stats-player",ha="gold.stats-player",fa="prompt.worldDialogShop",pa="keydown.controls",ga="update.realm",_a="-success.action-response",va=`-1${_a}`,ma=`1${_a}`,ya=`2${_a}`,ba=`9${_a}`,wa=`5${_a}`,ka=`25${_a}`,Sa=1,Ea=2,xa=16,Pa=128,Ta=256,$a="needToCompose",Ca="lastComposeCheck",Ia="characterVirtualLevel",La="enableGuildActivityTracker",Ra="lastLadderReset",Fa="form",Oa="table",Aa="td",Ma="tr",Na="fsh_buffLog",ja="statbar-level-tooltip-general",Da="stat-level",Ba="stat-defense",Ha="stat-attack",qa="stat-damage",Ua="stat-armor",Ga="stat-hp",Wa="stat-vl",za="GM_",Va=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],Qa=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],Ja=`${uo}ui/world/action_spinner.gif`,Ka=".fa-envelope",Xa='a[href*="&player_id="]',Ya=.002,Za=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],el='input[name="blockedSkillList[]"]'
var tl={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addServerNode:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252",compactRanks:!1,lastModalGuildLogCheck:0}
const nl=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function il(e,t){const n=window.localStorage.getItem(za+e)
return ao(n)||lo(n)?t:function(e){const t=nl.find((t=>e.startsWith(t[0])))
return t?t[1](e):e}(n)}function rl(e){return il(e,tl[e])}function sl(e){return"boolean"==typeof e}function ol(e){return"string"==typeof e}function al(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(za+e,t+n)}const ll=[[ol,(e,t)=>{al(e,"S]",t)}],[e=>"number"==typeof e,(e,t)=>{t.toString().indexOf(".")<0&&al(e,"N]",t)}],[sl,(e,t)=>{al(e,"B]",t)}]]
function cl(e,t){const n=ll.find((e=>e[0](t)))
n&&n[1](e,t)}function ul(e){const t=`screenview__${e}`,n=rl(t)
Number.isFinite(n)&&n>so()||(Us(t),cl(t,io()))}function dl(e){return"function"==typeof e}function hl(e){return"object"==typeof e}function fl(e,t){try{return JSON.parse(e,t)}catch(e){}}function pl(e,t){return t?t.querySelector(e):document.querySelector(e)}function gl(e){const t=pl("link",document.body)
return new Promise((n=>{const i=document.createElement("link")
i.type="text/css",i.rel="stylesheet",i.onload=()=>{n()},i.href=e,t?t.before(i):document.body.append(i)}))}var _l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function vl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ml,yl={exports:{}}
var bl=(ml||(ml=1,yl.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==_l?_l:"undefined"!=typeof self?self:{}
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
case 2:return s=o.sent(),n[i]=N(s,r.number),i++,[3,1]
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
var P=!1,T=[]
function $(e,t){e&&e.console&&t&&(T.push(t),P||(P=!0,["debug","info","warn","error","log"].forEach((function(t){x(e.console,t,(function(n){return function(){var i=Array.prototype.slice.call(arguments)
T.forEach((function(e){try{e(t,i)}catch(e){}})),"function"==typeof n&&Function.prototype.apply.call(n,e.console,arguments)}}))}))))}function C(e,t){var n=e.trim().replace(/\/$/,"")
return t=t.trim().replace(/(^\/|\/$)/g,""),"".concat(n,"/").concat(t)}function I(){try{throw new Error("")}catch(e){if(e.stack)return e.stack}for(var e=10,t=[],n=arguments.callee;n&&t.length<e;){/function(?:\s+([\w$]+))+\s*\(/.test(n.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>")
try{n=n.caller}catch(e){break}}return t.join("\n")}function L(e,t){if(F("Object",e)){F("Array",t)||(t=[])
var n=[]
return i(e)}function i(e){var r,s
if(F("Object",e)||F("Array",e)){if(-1!==n.indexOf(e))return"[CIRCULAR DATA STRUCTURE]"
n.push(e)}if(F("Object",e)){for(r in s={},e)R(r,t)?s[r]="[FILTERED]":s[r]=i(e[r])
return s}return F("Array",e)?e.map((function(e){return i(e)})):F("Function",e)?"[FUNC]":e}}function R(e,t){for(var n=0;n<t.length;n++)if(-1!==e.toLowerCase().indexOf(t[n].toLowerCase()))return!0
return!1}function F(e,t){var n=Object.prototype.toString.call(t).slice(8,-1)
return null!=t&&n===e}function O(e,t){if(!t)return e
if("string"!=typeof e)return e
var n=e.split(/\?/,2)[1]
if(!n)return e
var i=e
return n.split(/[&]\s?/).forEach((function(e){var n=e.split("=",2),r=n[0],s=n[1]
R(r,t)&&(i=i.replace("".concat(r,"=").concat(s),"".concat(r,"=[FILTERED]")))})),i}function A(e,t){void 0===t&&(t="")
var n={}
return Object.keys(e).forEach((function(i){var r=t+i.replace(/\W/g,"_").toUpperCase()
n[r]=e[i]})),n}function M(e){return JSON.parse(JSON.stringify(e))}function N(e,t,n){if(void 0===n&&(n=2),!e)return null
var i=e.split("\n")
i.unshift("")
for(var r=t+n,s={},o=t-n;o<=r;o++){var a=i[o]
"string"==typeof a&&(s[o]=a)}return s}function j(e){return void 0!==e.async}function D(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window}t.instrumentConsole=$,t.endpoint=C,t.generateStackTrace=I,t.filter=L,t.filterUrl=O,t.formatCGIData=A,t.clone=M,t.isBrowserConfig=j,t.globalThisOrWindow=D
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
var P=o,T=function(){function e(e,t){this.contents=e,this.breadcrumbsLimit=t}return e.create=function(t,n){return new e(t,n)},e.prototype.available=function(){return!0},e.prototype.getContents=function(e){var t=e?this.contents[e]:this.contents
return JSON.parse(JSON.stringify(t))},e.prototype.setContext=function(e){this.contents.context=(0,P.merge)(this.contents.context,e||{})},e.prototype.addBreadcrumb=function(e){this.contents.breadcrumbs.length==this.breadcrumbsLimit&&this.contents.breadcrumbs.shift(),this.contents.breadcrumbs.push(e)},e.prototype.clear=function(){this.contents.context={},this.contents.breadcrumbs=[]},e.prototype.run=function(e){return e()},e}()
x.GlobalStore=T
var $={}
class C{static parse(e){return e.trim().split("\n").map((e=>JSON.parse(e)))}static stringify(e){return e.map((e=>JSON.stringify(e))).join("\n")}}var I=Object.freeze({__proto__:null,NdJson:C}),L=n(I),R={}
Object.defineProperty(R,"__esModule",{value:!0}),R.CONFIG=void 0,R.CONFIG={apiKey:null,endpoint:"https://api.honeybadger.io",environment:null,hostname:null,projectRoot:null,component:null,action:null,revision:null,reportData:null,breadcrumbsEnabled:!0,eventsEnabled:!1,maxBreadcrumbs:40,maxObjectDepth:8,logger:console,developmentEnvironments:["dev","development","test"],debug:!1,tags:null,enableUncaught:!0,enableUnhandledRejection:!0,afterUncaught:function(){return!0},filters:["creditcard","password"],__plugins:[]}
var F=e&&e.__assign||function(){return F=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},F.apply(this,arguments)},O=e&&e.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function o(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){e.done?n(e.value):r(e.value).then(o,a)}l((i=i.apply(e,t||[])).next())}))},A=e&&e.__generator||function(e,t){var n,i,r,s,o={label:0,sent:function(){if(1&r[0])throw r[1]
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
Object.defineProperty($,"__esModule",{value:!0}),$.ThrottledEventsLogger=void 0
var M=L,N=o,j=R,D=function(){function e(e,t){this.config=e,this.transport=t,this.queue=[],this.isProcessing=!1,this.config=F(F({},j.CONFIG),e),this.logger=this.originalLogger()}return e.prototype.configure=function(e){for(var t in e)this.config[t]=e[t]},e.prototype.log=function(e){this.queue.push(e),this.isProcessing||this.processQueue()},e.prototype.processQueue=function(){var e=this
if(0!==this.queue.length&&!this.isProcessing){this.isProcessing=!0
var t=this.queue.slice()
this.queue=[]
var n=M.NdJson.stringify(t)
this.makeHttpRequest(n).then((function(){setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)})).catch((function(t){e.logger.error("[Honeybadger] Error making HTTP request:",t),setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)}))}},e.prototype.makeHttpRequest=function(e){return O(this,void 0,void 0,(function(){var t=this
return A(this,(function(n){return[2,this.transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json"},method:"POST",endpoint:(0,N.endpoint)(this.config.endpoint,"/v1/events"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},e).then((function(){t.config.debug&&t.logger.debug("[Honeybadger] Events sent successfully")})).catch((function(e){t.logger.error("[Honeybadger] Error sending events: ".concat(e.message))}))]}))}))},e.prototype.originalLogger=function(){var e,t,n,i,r
return{log:null!==(e=console.log.__hb_original)&&void 0!==e?e:console.log,info:null!==(t=console.info.__hb_original)&&void 0!==t?t:console.info,debug:null!==(n=console.debug.__hb_original)&&void 0!==n?n:console.debug,warn:null!==(i=console.warn.__hb_original)&&void 0!==i?i:console.warn,error:null!==(r=console.error.__hb_original)&&void 0!==r?r:console.error}},e}()
$.ThrottledEventsLogger=D
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
var U=o,G=x,W=$,z=R,V=/,|\s+/,Q=/\S/,J=function(){function e(e,t){void 0===e&&(e={}),this.__pluginsLoaded=!1,this.__store=null,this.__beforeNotifyHandlers=[],this.__afterNotifyHandlers=[],this.__notifier={name:"@honeybadger-io/core",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",version:"6.10.1"},this.config=B(B({},z.CONFIG),e),this.__initStore(),this.__transport=t,this.__eventsLogger=new W.ThrottledEventsLogger(this.config,this.__transport),this.logger=(0,U.logger)(this)}return e.prototype.getVersion=function(){return this.__notifier.version},e.prototype.getNotifier=function(){return this.__notifier},e.prototype.setNotifier=function(e){this.__notifier=e},e.prototype.configure=function(e){for(var t in void 0===e&&(e={}),e)this.config[t]=e[t]
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
var xe=r,Pe=X,Te=xe.Util.sanitize,$e=xe.Util.instrument,Ce=xe.Util.instrumentConsole,Ie=xe.Util.globalThisOrWindow
function Le(e){return void 0===e&&(e=Ie()),{load:function(t){function n(e){return!0===t.config.breadcrumbsEnabled||(e?!0===t.config.breadcrumbsEnabled[e]:!1!==t.config.breadcrumbsEnabled)}!function(){function i(e){return Array.isArray(e)?e.map((function(e){try{return String(e)}catch(e){return"[unknown]"}})).join(" "):""}n("console")&&Ce(e,(function(e,n){var r=i(n),s={category:"log",metadata:{level:e,arguments:Te(n,3)}}
t.addBreadcrumb(r,s)}))}(),n("dom")&&"function"==typeof e.addEventListener&&e.addEventListener("click",(function(e){var n,i,r
try{n=(0,Pe.stringNameOfElement)(e.target),i=(0,Pe.stringSelectorOfElement)(e.target),r=(0,Pe.stringTextOfElement)(e.target)}catch(e){n="UI Click",i="[unknown]",r="[unknown]"}0!==n.length&&t.addBreadcrumb(n,{category:"ui.click",metadata:{selector:i,text:r,event:e}})}),!!e.location),n("network")&&"undefined"!=typeof XMLHttpRequest&&($e(XMLHttpRequest.prototype,"open",(function(e){return function(){var t=this,n=arguments[1],i="string"==typeof n?n:String(n),r="string"==typeof arguments[0]?arguments[0].toUpperCase():arguments[0],s="".concat(r," ").concat((0,Pe.localURLPathname)(i))
this.__hb_xhr={type:"xhr",method:r,url:i,message:s},"function"==typeof e&&e.apply(t,arguments)}})),$e(XMLHttpRequest.prototype,"send",(function(e){return function(){var n=this
function i(){if(4===n.readyState){var e=void 0
n.__hb_xhr&&(n.__hb_xhr.status_code=n.status,e=n.__hb_xhr.message,delete n.__hb_xhr.message),t.addBreadcrumb(e||"XMLHttpRequest",{category:"request",metadata:n.__hb_xhr})}}"onreadystatechange"in n&&"function"==typeof n.onreadystatechange?$e(n,"onreadystatechange",(function(e){return function(){i(),"function"==typeof e&&e.apply(this,arguments)}})):n.onreadystatechange=i,"function"==typeof e&&e.apply(n,arguments)}}))),n("network")&&(0,Pe.nativeFetch)()&&$e(e,"fetch",(function(n){return function(){var i,r=arguments[0],s="GET"
"string"==typeof r?i=r:"Request"in e&&r instanceof Request?(i=r.url,r.method&&(s=r.method)):i=String(r),arguments[1]&&arguments[1].method&&(s=arguments[1].method),"string"==typeof s&&(s=s.toUpperCase())
var o="".concat(s," ").concat("undefined"==typeof document?i:(0,Pe.localURLPathname)(i)),a={type:"fetch",method:s,url:i}
return n.apply(this,arguments).then((function(e){return a.status_code=e.status,t.addBreadcrumb(o,{category:"request",metadata:a}),e})).catch((function(e){throw t.addBreadcrumb("fetch error",{category:"error",metadata:a}),e}))}})),function(){if(n("navigation")&&null!=e.location){var i=e.location.href
"function"==typeof addEventListener&&addEventListener("popstate",(function(t){r(i,e.location.href)})),void 0!==e.history&&($e(e.history,"pushState",s),$e(e.history,"replaceState",s))}function r(e,n){i=n,t.addBreadcrumb("Page changed",{category:"navigation",metadata:{from:e,to:n}})}function s(e){return function(){var t=arguments.length>2?arguments[2]:void 0
return t&&r(i,String(t)),e.apply(this,arguments)}}}()}}}Ee.default=Le
var Re={}
Object.defineProperty(Re,"__esModule",{value:!0})
var Fe=r,Oe=Fe.Util.instrument,Ae=Fe.Util.globalThisOrWindow
function Me(e){return void 0===e&&(e=Ae()),{load:function(t){!function(){function n(e){return function(n){return function(i,r){if("function"==typeof i){var s=Array.prototype.slice.call(arguments,2)
return i=t.__wrap(i,e),n((function(){i.apply(void 0,s)}),r)}return n(i,r)}}}Oe(e,"setTimeout",n({component:"setTimeout"})),Oe(e,"setInterval",n({component:"setInterval"}))}()}}}Re.default=Me
var Ne={}
Object.defineProperty(Ne,"__esModule",{value:!0})
var je=r,De=je.Util.instrument,Be=je.Util.globalThisOrWindow
function He(e){return void 0===e&&(e=Be()),{load:function(t){["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"].forEach((function(n){var i=e[n]&&e[n].prototype
i&&Object.prototype.hasOwnProperty.call(i,"addEventListener")&&(De(i,"addEventListener",(function(e){var i={component:"".concat(n,".prototype.addEventListener")}
return function(n,r,s,o){try{r&&null!=r.handleEvent&&(r.handleEvent=t.__wrap(r.handleEvent,i))}catch(e){t.logger.error(e)}return e.call(this,n,t.__wrap(r,i),s,o)}})),De(i,"removeEventListener",(function(e){return function(n,i,r,s){return e.call(this,n,i,r,s),e.call(this,n,t.__wrap(i),r,s)}})))}))}}}Ne.default=He
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
var c=r,u=X,d=ue,h=l(ye),f=l(Ee),p=l(Re),g=l(Ne),_=qe,v=Ke,m=c.Util.merge,y=c.Util.filter,b=c.Util.objectIsExtensible,w=c.Util.globalThisOrWindow,k=function(){var e=w(),t=""
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
throw i.__lastWrapErr=e,(0,d.ignoreNextOnError)(),i.addBreadcrumb(t.component?"".concat(t.component,": ").concat(e.name):e.name,{category:"error",metadata:{message:e.message,name:e.name,stack:e.stack}}),i.config.enableUncaught&&i.notify(e),e}}}return n.___hb.___hb=n.___hb,n.___hb}catch(e){return n}},n.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},n.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},n}(c.Client),x={name:"@honeybadger-io/js",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",version:"6.10.1"},P=function(){return"undefined"!=typeof navigator?"Honeybadger JS Browser Client ".concat(x.version,"; ").concat(navigator.userAgent):"Honeybadger JS Browser Client ".concat(x.version,"; n/a; n/a")},T=new E({__plugins:[(0,d.onError)(),(0,h.default)(),(0,p.default)(),(0,g.default)(),(0,f.default)(),c.Plugins.events()]})
T.setNotifier(x)
var $=r
Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return $.Types}}),t.default=T}(i)
var et=t(i)
return et}()),yl.exports),wl=vl(bl)
const kl=["(reading'$$')","attackplayer.min.js","Discord-Message-Checks-for-Updates.user.js","dynamically imported module","Fallen-Sword-Champion-and-Super-Elite-Alert.user.js","Fallen-Sword-Super-Elite-Notifier.user.js","fs.min.js","GVG-and-Relics-Notifications.user.js","GvG-List-v2.user.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","openuserjs.org","play method is not allowed","world.min.js"],Sl=e=>kl.some((t=>e.includes(t)))
function El(e){if(Sl(e.stack))return!1}function xl(){!function(){wl.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.141"})
const e=s()
e&&wl.setContext({user_id:e}),wl.afterNotify((e=>{if(e)return qs(`Honeybadger notification failed: ${e}`)})),wl.beforeNotify(El)}()}var Pl={}
function Tl(e,t,n,i){e instanceof EventTarget&&e.addEventListener(t,n,i)}function $l(e){rl("betaOptIn")&&qs("sendException",e),wl.notify(e,"sendException")}function Cl(e,t){return e||t}const Il=[null]
function Ll(e,t){return Il[e]&&Il[e].priority<Il[t].priority}function Rl(e,t){const n=Il[e]
Il[e]=Il[t],Il[t]=n}function Fl(e,t){return e?2*t:2*t+1}function Ol(){if(1===Il.length)return
const e=Il[1].data,t=Il.pop()
return Il.length>1&&(Il[1]=t,function(e){let t=e
for(;2*t<Il.length;){const e=Fl(!Ll(2*t+1,2*t),t)
if(Ll(t,e))break
Rl(t,e),t=e}}(1)),e}function Al(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!Ll(t,e))break
Rl(t,e),t=e}}(Il.push({data:e,priority:t})-1)}let Ml=!0
const Nl="fshMessage"
let jl=0
function Dl(){Il.length-1==0?Ml=!0:(Ml=!1,window.postMessage(Nl,window.location.origin))}function Bl(){const e=Ol()
dl(e)?e():function(e){lo(e)||$l(`pop() was not a function (${typeof e})`)}(e)}function Hl(e){const t=e.data
e.origin===window.location.origin&&t===Nl&&function(){try{Bl()}catch(e){wl.notify(e,"taskFailure")}finally{Dl()}}()}function ql(e,t,n,i){if(dl(t)){jl||(Tl(window,"message",Hl),jl=!0)
const r=Cl(i,window),s=Cl(n,[])
Al(t.bind(r,...s),e),Ml&&Dl()}}function Ul(e,t){return new URLSearchParams(e).get(t)}function Gl(e){try{return Ul(decodeURIComponent(window.location.search),e)}catch(e){return qs(e),""}}function Wl(){}const zl=e=>e
function Vl(e,t){for(const n in t)e[n]=t[n]
return e}function Ql(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}function Jl(e){return e()}function Kl(){return Object.create(null)}function Xl(e){e.forEach(Jl)}function Yl(e){return"function"==typeof e}function Zl(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let ec
function tc(e,t){return e===t||(ec||(ec=document.createElement("a")),ec.href=t,e===ec.href)}function nc(e,...t){if(null==e){for(const e of t)e(void 0)
return Wl}const n=e.subscribe(...t)
return n.unsubscribe?()=>n.unsubscribe():n}function ic(e){let t
return nc(e,(e=>t=e))(),t}function rc(e,t,n){e.$$.on_destroy.push(nc(t,n))}function sc(e,t,n,i){if(e){const r=oc(e,t,n,i)
return e[0](r)}}function oc(e,t,n,i){return e[1]&&i?Vl(n.ctx.slice(),e[1](i(t))):n.ctx}function ac(e,t,n,i){if(e[2]&&i){const r=e[2](i(n))
if(void 0===t.dirty)return r
if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length)
for(let i=0;i<n;i+=1)e[i]=t.dirty[i]|r[i]
return e}return t.dirty|r}return t.dirty}function lc(e,t,n,i,r,s){if(r){const o=oc(t,n,i,s)
e.p(o,r)}}function cc(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32
for(let e=0;e<n;e++)t[e]=-1
return t}return-1}function uc(e){const t={}
for(const n in e)t[n]=!0
return t}function dc(e){let t=!1
return function(...n){t||(t=!0,e.call(this,...n))}}function hc(e){return null==e?"":e}function fc(e){return e&&Yl(e.destroy)?e.destroy:Wl}function pc(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const gc="undefined"!=typeof window
let _c=gc?()=>window.performance.now():()=>Date.now(),vc=gc?e=>requestAnimationFrame(e):Wl
const mc=new Set
function yc(e){mc.forEach((t=>{t.c(e)||(mc.delete(t),t.f())})),0!==mc.size&&vc(yc)}function bc(e,t){e.appendChild(t)}function wc(e){if(!e)return document
const t=e.getRootNode?e.getRootNode():e.ownerDocument
return t&&t.host?t:e.ownerDocument}function kc(e){const t=Pc("style")
return t.textContent="/* empty */",function(e,t){bc(e.head||e,t),t.sheet}(wc(e),t),t.sheet}function Sc(e,t,n){e.insertBefore(t,n||null)}function Ec(e){e.parentNode&&e.parentNode.removeChild(e)}function xc(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function Pc(e){return document.createElement(e)}function Tc(e){return document.createTextNode(e)}function $c(){return Tc(" ")}function Cc(){return Tc("")}function Ic(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function Lc(e){return function(t){return t.preventDefault(),e.call(this,t)}}function Rc(e){return function(t){t.target===this&&e.call(this,t)}}function Fc(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Oc(e,t,n){const i=t.toLowerCase()
i in e?e[i]="boolean"==typeof e[i]&&""===n||n:t in e?e[t]="boolean"==typeof e[t]&&""===n||n:Fc(e,t,n)}function Ac(e){return""===e?null:+e}function Mc(e,t){t=""+t,e.data!==t&&(e.data=t)}function Nc(e,t){e.value=null==t?"":t}function jc(e,t,n,i){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function Dc(e,t,n){for(let n=0;n<e.options.length;n+=1){const i=e.options[n]
if(i.__value===t)return void(i.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}function Bc(e){const t=e.querySelector(":checked")
return t&&t.__value}let Hc
function qc(){if(void 0===Hc){Hc=!1
try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){Hc=!0}}return Hc}function Uc(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative")
const n=Pc("iframe")
n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1
const i=qc()
let r
return i?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=Ic(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=Ic(n.contentWindow,"resize",t),t()}),bc(e,n),()=>{(i||r&&n.contentWindow)&&r(),Ec(n)}}function Gc(e,t,n){e.classList.toggle(t,!!n)}function Wc(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}class zc{is_svg=!1
e=void 0
n=void 0
t=void 0
a=void 0
constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){var i
this.e||(this.is_svg?this.e=(i=t.nodeName,document.createElementNS("http://www.w3.org/2000/svg",i)):this.e=Pc(11===t.nodeType?"TEMPLATE":t.nodeName),this.t="TEMPLATE"!==t.tagName?t:t.content,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)Sc(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(Ec)}}function Vc(e,t){return new e(t)}const Qc=new Map
let Jc,Kc=0
function Xc(e,t,n,i,r,s,o,a=0){const l=16.666/i
let c="{\n"
for(let e=0;e<=1;e+=l){const i=t+(n-t)*s(e)
c+=100*e+`%{${o(i,1-i)}}\n`}const u=c+`100% {${o(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length
for(;n--;)t=(t<<5)-t^e.charCodeAt(n)
return t>>>0}(u)}_${a}`,h=wc(e),{stylesheet:f,rules:p}=Qc.get(h)||function(e,t){const n={stylesheet:kc(t),rules:{}}
return Qc.set(e,n),n}(h,e)
p[d]||(p[d]=!0,f.insertRule(`@keyframes ${d} ${u}`,f.cssRules.length))
const g=e.style.animation||""
return e.style.animation=`${g?`${g}, `:""}${d} ${i}ms linear ${r}ms 1 both`,Kc+=1,d}function Yc(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-i.length
r&&(e.style.animation=i.join(", "),Kc-=r,Kc||vc((()=>{Kc||(Qc.forEach((e=>{const{ownerNode:t}=e.stylesheet
t&&Ec(t)})),Qc.clear())})))}function Zc(e){Jc=e}function eu(){if(!Jc)throw new Error("Function called outside component initialization")
return Jc}function tu(e){eu().$$.on_mount.push(e)}function nu(e){eu().$$.after_update.push(e)}function iu(e){eu().$$.on_destroy.push(e)}function ru(){const e=eu()
return(t,n,{cancelable:i=!1}={})=>{const r=e.$$.callbacks[t]
if(r){const s=Wc(t,n,{cancelable:i})
return r.slice().forEach((t=>{t.call(e,s)})),!s.defaultPrevented}return!0}}function su(e,t){const n=e.$$.callbacks[t.type]
n&&n.slice().forEach((e=>e.call(this,t)))}const ou=[],au=[]
let lu=[]
const cu=[],uu=Promise.resolve()
let du=!1
function hu(){du||(du=!0,uu.then(yu))}function fu(){return hu(),uu}function pu(e){lu.push(e)}function gu(e){cu.push(e)}const _u=new Set
let vu,mu=0
function yu(){if(0!==mu)return
const e=Jc
do{try{for(;mu<ou.length;){const e=ou[mu]
mu++,Zc(e),bu(e.$$)}}catch(e){throw ou.length=0,mu=0,e}for(Zc(null),ou.length=0,mu=0;au.length;)au.pop()()
for(let e=0;e<lu.length;e+=1){const t=lu[e]
_u.has(t)||(_u.add(t),t())}lu.length=0}while(ou.length)
for(;cu.length;)cu.pop()()
du=!1,_u.clear(),Zc(e)}function bu(e){if(null!==e.fragment){e.update(),Xl(e.before_update)
const t=e.dirty
e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(pu)}}function wu(e,t,n){e.dispatchEvent(Wc(`${t?"intro":"outro"}${n}`))}const ku=new Set
let Su
function Eu(){Su={r:0,c:[],p:Su}}function xu(){Su.r||Xl(Su.c),Su=Su.p}function Pu(e,t){e&&e.i&&(ku.delete(e),e.i(t))}function Tu(e,t,n,i){if(e&&e.o){if(ku.has(e))return
ku.add(e),Su.c.push((()=>{ku.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}else i&&i()}const $u={duration:0}
function Cu(e,t,n,i){let r,s=t(e,n,{direction:"both"}),o=i?0:1,a=null,l=null,c=null
function u(){c&&Yc(e,c)}function d(e,t){const n=e.b-o
return t*=Math.abs(n),{a:o,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function h(t){const{delay:n=0,duration:i=300,easing:h=zl,tick:f=Wl,css:p}=s||$u,g={start:_c()+n,b:t}
t||(g.group=Su,Su.r+=1),"inert"in e&&(t?void 0!==r&&(e.inert=r):(r=e.inert,e.inert=!0)),a||l?l=g:(p&&(u(),c=Xc(e,o,t,i,n,h,p)),t&&f(0,1),a=d(g,i),pu((()=>wu(e,t,"start"))),function(e){let t
0===mc.size&&vc(yc),new Promise((n=>{mc.add(t={c:e,f:n})}))}((t=>{if(l&&t>l.start&&(a=d(l,i),l=null,wu(e,a.b,"start"),p&&(u(),c=Xc(e,o,a.b,a.duration,0,h,s.css))),a)if(t>=a.end)f(o=a.b,1-o),wu(e,a.b,"end"),l||(a.b?u():--a.group.r||Xl(a.group.c)),a=null
else if(t>=a.start){const e=t-a.start
o=a.a+a.d*h(e/a.duration),f(o,1-o)}return!(!a&&!l)})))}return{run(e){Yl(s)?(vu||(vu=Promise.resolve(),vu.then((()=>{vu=null}))),vu).then((()=>{s=s({direction:e?"in":"out"}),h(e)})):h(e)},end(){u(),a=l=null}}}function Iu(e){return void 0!==e?.length?e:Array.from(e)}function Lu(e,t){e.d(1),t.delete(e.key)}function Ru(e,t){Tu(e,1,1,(()=>{t.delete(e.key)}))}function Fu(e,t,n,i,r,s,o,a,l,c,u,d){let h=e.length,f=s.length,p=h
const g={}
for(;p--;)g[e[p].key]=p
const _=[],v=new Map,m=new Map,y=[]
for(p=f;p--;){const e=d(r,s,p),i=n(e)
let a=o.get(i)
a?y.push((()=>a.p(e,t))):(a=c(i,e),a.c()),v.set(i,_[p]=a),i in g&&m.set(i,Math.abs(p-g[i]))}const b=new Set,w=new Set
function k(e){Pu(e,1),e.m(a,u),o.set(e.key,e),u=e.first,f--}for(;h&&f;){const t=_[f-1],n=e[h-1],i=t.key,r=n.key
t===n?(u=t.first,h--,f--):v.has(r)?!o.has(i)||b.has(i)?k(t):w.has(r)?h--:m.get(i)>m.get(r)?(w.add(i),k(t)):(b.add(r),h--):(l(n,o),h--)}for(;h--;){const t=e[h]
v.has(t.key)||l(t,o)}for(;f;)k(_[f-1])
return Xl(y),_}function Ou(e,t,n){const i=e.$$.props[t]
void 0!==i&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function Au(e){e&&e.c()}function Mu(e,t,n){const{fragment:i,after_update:r}=e.$$
i&&i.m(t,n),pu((()=>{const t=e.$$.on_mount.map(Jl).filter(Yl)
e.$$.on_destroy?e.$$.on_destroy.push(...t):Xl(t),e.$$.on_mount=[]})),r.forEach(pu)}function Nu(e,t){const n=e.$$
null!==n.fragment&&(!function(e){const t=[],n=[]
lu.forEach((i=>-1===e.indexOf(i)?t.push(i):n.push(i))),n.forEach((e=>e())),lu=t}(n.after_update),Xl(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ju(e,t,n,i,r,s,o=null,a=[-1]){const l=Jc
Zc(e)
const c=e.$$={fragment:null,ctx:[],props:s,update:Wl,not_equal:r,bound:Kl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:Kl(),dirty:a,skip_bound:!1,root:t.target||l.$$.root}
o&&o(c.root)
let u=!1
if(c.ctx=n?n(e,t.props||{},((t,n,...i)=>{const s=i.length?i[0]:n
return c.ctx&&r(c.ctx[t],c.ctx[t]=s)&&(!c.skip_bound&&c.bound[t]&&c.bound[t](s),u&&function(e,t){-1===e.$$.dirty[0]&&(ou.push(e),hu(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n})):[],c.update(),u=!0,Xl(c.before_update),c.fragment=!!i&&i(c.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target)
c.fragment&&c.fragment.l(e),e.forEach(Ec)}else c.fragment&&c.fragment.c()
t.intro&&Pu(e.$$.fragment),Mu(e,t.target,t.anchor),yu()}Zc(l)}class Du{$$=void 0
$$set=void 0
$destroy(){Nu(this,1),this.$destroy=Wl}$on(e,t){if(!Yl(t))return Wl
const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[])
return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t
this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Bu=[]
function Hu(e,t=Wl){let n
const i=new Set
function r(t){if(Zl(e,t)&&(e=t,n)){const t=!Bu.length
for(const t of i)t[1](),Bu.push(t,e)
if(t){for(let e=0;e<Bu.length;e+=2)Bu[e][0](Bu[e+1])
Bu.length=0}}}function s(t){r(t(e))}return{set:r,update:s,subscribe:function(o,a=Wl){const l=[o,a]
return i.add(l),1===i.size&&(n=t(r,s)||Wl),o(e),()=>{i.delete(l),0===i.size&&n&&(n(),n=null)}}}}function qu(e,t,n){const i=!Array.isArray(e),r=i?[e]:e
if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const s=t.length<2
return o=(e,n)=>{let o=!1
const a=[]
let l=0,c=Wl
const u=()=>{if(l)return
c()
const r=t(i?a[0]:a,e,n)
s?e(r):c=Yl(r)?r:Wl},d=r.map(((e,t)=>nc(e,(e=>{a[t]=e,l&=~(1<<t),o&&u()}),(()=>{l|=1<<t}))))
return o=!0,u(),function(){Xl(d),c(),o=!1}},{subscribe:Hu(n,o).subscribe}
var o}const Uu=Hu("")
function Gu(e){const t=e-1
return t*t*t+1}function Wu(e,{delay:t=0,duration:n=400,easing:i=zl}={}){const r=+getComputedStyle(e).opacity
return{delay:t,duration:n,easing:i,css:e=>"opacity: "+e*r}}function zu(e,{delay:t=0,duration:n=400,easing:i=Gu,x:r=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-o),[d,h]=pc(r),[f,p]=pc(s)
return{delay:t,duration:n,easing:i,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*d}${h}, ${(1-e)*f}${p});\n\t\t\topacity: ${l-u*t}`}}function Vu(e,{delay:t=0,duration:n=400,easing:i=Gu,axis:r="y"}={}){const s=getComputedStyle(e),o=+s.opacity,a="y"===r?"height":"width",l=parseFloat(s[a]),c="y"===r?["top","bottom"]:["left","right"],u=c.map((e=>`${e[0].toUpperCase()}${e.slice(1)}`)),d=parseFloat(s[`padding${u[0]}`]),h=parseFloat(s[`padding${u[1]}`]),f=parseFloat(s[`margin${u[0]}`]),p=parseFloat(s[`margin${u[1]}`]),g=parseFloat(s[`border${u[0]}Width`]),_=parseFloat(s[`border${u[1]}Width`])
return{delay:t,duration:n,easing:i,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*o};${a}: ${e*l}px;padding-${c[0]}: ${e*d}px;padding-${c[1]}: ${e*h}px;margin-${c[0]}: ${e*f}px;margin-${c[1]}: ${e*p}px;border-${c[0]}-width: ${e*g}px;border-${c[1]}-width: ${e*_}px;`}}function Qu(e){let t,n,i,r,s,o,a
return{c(){t=Pc("div"),n=Pc("p"),i=Tc(e[0]),Fc(n,"class","svelte-1c416no"),Fc(t,"role","alert"),Fc(t,"class","svelte-1c416no"),jc(t,"transform",e[2])},m(r,l){Sc(r,t,l),bc(t,n),bc(n,i),s=!0,o||(a=Ic(t,"click",e[4]),o=!0)},p(e,n){(!s||1&n)&&Mc(i,e[0]),4&n&&jc(t,"transform",e[2])},i(e){s||(e&&pu((()=>{s&&(r||(r=Cu(t,zu,{delay:250,duration:300,x:0,y:-100,opacity:.5},!0)),r.run(1))})),s=!0)},o(e){e&&(r||(r=Cu(t,zu,{delay:250,duration:300,x:0,y:-100,opacity:.5},!1)),r.run(0)),s=!1},d(e){e&&Ec(t),e&&r&&r.end(),o=!1,a()}}}function Ju(e){let t,n=e[1]&&Qu(e)
return{c(){n&&n.c(),t=Cc()},m(e,i){n&&n.m(e,i),Sc(e,t,i)},p(e,[i]){e[1]?n?(n.p(e,i),2&i&&Pu(n,1)):(n=Qu(e),n.c(),Pu(n,1),n.m(t.parentNode,t)):n&&(Eu(),Tu(n,1,1,(()=>{n=null})),xu())},i(e){Pu(n)},o(e){Tu(n)},d(e){e&&Ec(t),n&&n.d(e)}}}function Ku(e,t,n){let i
rc(e,Uu,(e=>n(0,i=e)))
let{ms:r=3e3}=t,s=!1,o=0,a=""
const l=(e,t)=>{clearTimeout(o),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
n(2,a=`translate(${t}px, ${e.offsetTop}px)`),n(1,s=!0)}(),t>0&&(o=setTimeout((()=>{var e
n(1,s=!1),i="",e=i,Uu.set(e)}),t))):n(1,s=!1)}
iu((()=>clearTimeout(o)))
return e.$$set=e=>{"ms"in e&&n(3,r=e.ms)},e.$$.update=()=>{9&e.$$.dirty&&l(i,r)},[i,s,a,r,()=>{n(1,s=!1)}]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4")
class Xu extends Du{constructor(e){super(),ju(this,e,Ku,Ju,Zl,{ms:3})}}let Yu
function Zu(e){e&&(!function(){if(!Yu)Yu=!0,new Xu({target:document.body})}(),Uu.set(e))}function ed(e,t){return Array.from(e,t)}function td(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function nd(e,t){return ed(td(e,t))}function id(e){return e.trim()}function rd(e){const t=n(e)
if(ol(t))return id(t)}function sd(e,t){return rd(t).includes(e)}function od(e,...t){return(...n)=>e(...t,...n)}let ad=0,ld=0,cd=0
function ud(){return ad||(ad=t("pCL")),ad}function dd(){return ld||(ld=t("pCC")),ld}function hd(){const e=nd("a",ud()).filter(function(e){return od(sd,e)}("message"))
e.length&&async function(){const e=new Audio(rl("defaultMessageSound"))
try{await e.play()}catch(e){Zu("Message Sound Not Allowed")}}()}function fd(e,t,n,i){var r
Tl(e,t,n,{once:!0,...(r=i,sl(r)?{capture:r}:r)})}let pd=0,gd=0,_d=0,vd=0,md=0,yd=0
function bd(e){gd=e.clientX,_d=e.clientY}function wd(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(pd,null).transform)
vd=e[0]-gd,md=e[1]-_d}function kd(e){e.clientX===gd&&e.clientY===_d||(pd.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+vd).toString()}, ${(e.clientY+md).toString()})`,bd(e))}function Sd(e){return function(e){const t=performance.now()
t-yd>16&&(kd(e),yd=t)}(e),e.preventDefault(),!1}function Ed(e){return kd(e),function(e,t,n,i){e instanceof EventTarget&&e.removeEventListener(t,n,i)}(document.body,"dragover",Sd),e.preventDefault(),!1}function xd(e,t){!function(e,t){pd=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),bd(t),wd(),yd=0,t.dataTransfer.setData("text/plain",""),Tl(document.body,"dragover",Sd),fd(document.body,"drop",Ed)}function Pd(e,t){e.draggable=!0,Tl(e,"dragstart",od(xd,t))}function Td(e){return String(e).replaceAll(" ","_")}const $d={}
function Cd(e,t,n){if(!e)return
const i=function(e,t){let n=Td(e)
return t&&(n+=`__${Td(t)}`),n}(e,t),r=function(e,t){let n=e
return t&&(n+=`__${Td(t)}`),n}(i,n)
$d[r]||($d[r]=!0,Us(i,function(e){return e?{eventLabel:e}:null}(n)))}let Id=0
function Ld(e){const t=l(/\sguildId: (?<id>\d{1,6}),/,n(e))
t&&(Id=Number(t))}function Rd(){return Id||nd("script",document.body).forEach(Ld),Id}function Fd(e){return Object.entries(e)}function Od(e,t,[n,i]){hl(i)&&null!==i?e(t[n],i):t[n]=i}function Ad(e,t){Fd(t).forEach(od(Od,Ad,e))}function Md(e,t){const n=document.createElement(e)
return t&&Ad(n,t),n}function Nd(e){return Md("div",e)}function jd(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function Dd(e,t){return ed(jd(e,t))}function Bd(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function Hd(e,t){t instanceof Element&&(t.innerHTML=String(e))}const qd={id:"content",style:{display:"none"}},Ud={width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}
function Gd(e){let n=t("content")
n?Hd("",n):(n=Nd(qd),Bd(document.body,n)),$(n).dialog(Ud),Dd("ui-dialog-titlebar-close").forEach((e=>e.blur())),e(n)}async function Wd(e){(await e).default()}function zd(){Wd(import("./buffLog-B9hJX7mi.js"))}function Vd(){Wd(import("./combatLog-CONFMPTK.js"))}function Qd(){Wd(import("./creatureLog-D-zBlP8D.js"))}function Jd(){Wd(import("./fsboxlog-B6PxFYQP.js"))}function Kd(){Wd(import("./guildLog-Bl8igHb6.js"))}function Xd(){Wd(import("./guildTracker-Ctb3e-ne.js"))}async function Yd(e){(await import("./injectAuctionSearch-0SXUGXHS.js")).default(e)}async function Zd(e){(await import("./findBuffs-N2sWAZmC.js")).injectFindBuffs(e)}async function eh(e){(await import("./findBuffs-N2sWAZmC.js")).injectFindOther(e)}async function th(e){(await import("./injectOnlinePlayers-BYe33QwJ.js")).default(e)}function nh(){Wd(import("./potReport-D1yhT9fC.js"))}function ih(){Wd(import("./quickExtract-B4Ypdu_k.js"))}function rh(){Wd(import("./quickLinksManager-DfCTMtIS.js"))}async function sh(e){(await import("./quickWear-D8gUDlxp.js")).default(e)}function oh(){Wd(import("./recipeMgr-D3zZe3ud.js"))}function ah(){Wd(import("./reliclist-C8Rrb5Bx.js"))}function lh(){Wd(import("./superelite-DJAd1ajS.js"))}function ch(e){return new Promise((t=>{setTimeout(t,e)}))}function uh(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class dh extends Error{constructor([e,t,n,i],...r){super(function(e,t,n,i){const r=`${t.status} ${t.statusText} - `
if(t.statusText===i.toString())return r+uh(e)
const s=`${r+n} ${i} - ${uh(e)}`
return"parsererror"===n?`${s} - ${t.responseText}`:s}(e,t,n,i),...r),Error.captureStackTrace&&Error.captureStackTrace(this,dh),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=i}}function hh(e){Tl(window,"beforeunload",(()=>e.abort()))}const fh=900
let ph=0
const gh=5
let _h=0
async function vh(){_h<gh-$.active&&performance.now()-ph>=fh?(_h=gh-$.active,ph=performance.now()):await ch(100)}async function mh(e,t=10){await async function(){for(;_h<1;)await vh()
_h-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=hh,$.ajax(t).fail(((e,t,n)=>{e.textStatus=t,e.errorThrown=n}))}(e)}catch(n){if(t&&n.status>500)return mh(e,t-1)
!function(e,t){if(![0,500,503].includes(t.status))throw new dh([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}function yh(e){return Ad(e,{url:Eo,data:{no_mobile:1}}),mh(e)}async function bh(e){return fl(await yh({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function wh(e){return bh({cmd:"export",...e})}function kh(){return wh({inc_tagged:"1",subcmd:"guild_store"})}function Sh(e){return Md("a",e)}function Eh(e){e instanceof Element&&e.click()}function xh(e,t){const n=URL.createObjectURL(e),i=Sh({download:t,href:n,style:{display:"none"}})
Bd(document.body,i),Eh(i),document.body.removeChild(i),setTimeout((()=>{URL.revokeObjectURL(n)}),0)}async function Ph(e,t){return fl(await mh({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function Th(e){return Ph(e,{method:"POST"})}function $h(e,t){const n=[]
for(let i=0;i<t.length;i+=e)n.push(t.slice(i,i+e))
return n}let Ch,Ih=null
function Lh(){const e=t("holdtext")
if(e&&!Ih){const t=l(/fallensword.com\/\?ref=(?<id>\d+)/,n(e))
t&&(Ih=Number(t))}return Ih}function Rh(e){return new Promise(((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)}))}function Fh(){return Ch||(Ch=function(e,t){const n=indexedDB.open(e)
n.onupgradeneeded=()=>n.result.createObjectStore(t)
const i=Rh(n)
return(e,n)=>i.then((i=>n(i.transaction(t,e).objectStore(t))))}("keyval-store","keyval")),Ch}const Oh=e=>{["QuotaExceededError","NotFoundError"].includes(e?.name)||wl.notify(e,"idbkeyval")}
async function Ah(e,t){try{return await function(e,t=Fh()){return t("readonly",(t=>Rh(t.get(e))))}(e,t)}catch(e){Oh(e)}}async function Mh(e,t,n){try{return await function(e,t,n=Fh()){return n("readwrite",(n=>(n.put(t,e),Rh(n.transaction))))}(e,t,n)}catch(e){Oh(e)}}const Nh=({folder_id:e})=>-2!==(e??-2),jh=({folder_id:e})=>-2===e,Dh=({player_id:e})=>-1!==(e??-1),Bh=({player_id:e})=>e,Hh=({player_id:e})=>-1===e,qh=([e,t,n])=>$h(20,e).map((e=>[e,t,n])),Uh=e=>({inv_id:t})=>t===e.inv_id,Gh=(e,t)=>e.attributes.find((({id:e})=>e===t))?.value??0,Wh=(e,t)=>({...t,armor:Gh(e,2),attack:Gh(e,0),damage:Gh(e,4),defense:Gh(e,1),hp:Gh(e,3),set_name:e.set_name??""}),zh=(e,t)=>t.forge||t.stats?.set_name,Vh=e=>e?.s?e.r.items:[],Qh=e=>[[e.filter(Nh),Lh,0],[e.filter(jh),Lh,1],[e.filter(Dh),Bh,7],[e.filter(Hh),Lh,4]].flatMap(qh)
function Jh(e){return function(){const t=this.data(),n=e.find(Uh(t))
n?.attributes&&(t.stats=Wh(n,t.stats),this.invalidate())}}const Kh=async()=>await Ah(`fsh_${Pl.subcmd}_cache`)??[],Xh=e=>Mh(`fsh_${Pl.subcmd}_cache`,e),Yh=e=>t=>e.every((e=>e.inv_id!==t.inv_id))
async function Zh(e,t,n){const i=await(r={item_id:e.map((({item_id:e})=>e)),inv_id:e.map((({inv_id:e})=>e)),p:e.map(t),t:e.map((()=>n))},Th({cmd:"fetchitem",compare:0,...r}))
var r
return i?.s&&(i.r.items=((e,t)=>t.map(((t,n)=>({...t,inv_id:e[n].inv_id}))))(e,i.r.items),await async function(e){const t=(await Kh()).filter(Yh(e))
await Xh(t.concat(e))}(i.r.items)),i}const ef=(e,t)=>{return t.filter((n=ed(e.data()),e=>n.some((t=>e.inv_id===t.inv_id))))
var n}
async function tf(e){const t=e.rows(zh),n=await async function(e){const t=await Kh(),n=ef(e,t)
return await Xh(n),n}(t)
t.every(Jh(n))}async function nf(e){const t=new DataTable(e)
await tf(t),t.draw()}const rf=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],sf=e=>{return[...rf(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??"",t?.set_attack??"",t?.set_defense??"",t?.set_armor??"",t?.set_hp??"",t?.set_damage??""]),e.cached].join(",")
var t}
function of(e){return()=>Gd(e)}var af=[{section:"Character",menu:[{label:"Buff Log",fn:zd},{label:"Combat Log",fn:Vd},{label:"Creature Log",fn:Qd},{label:"Recipe Manager",fn:oh},{label:"Quick Links",fn:rh},{label:"Inventory Manager",href:`${Do}invmanagernew`}]},{section:"Actions",menu:[{label:"Find Buffs",fn:of(Zd)},{label:"Find Other",fn:of(eh)},{label:"Online Players",fn:of(th)},{label:"AH Quick Search",fn:of(Yd)}]},...Rd()?[{section:"Guild",menu:[{label:"Guild Inventory",href:`${Do}guildinvmgr`},{label:"New Guild Log",fn:Kd},{label:"Merc Hunter",fn:function(){Wd(import("./mercs-boO3ibsZ.js"))}},{label:"Pot Report",fn:nh},{label:"Guild Tracker",fn:Xd}]}]:[],{section:"Extra",menu:[{label:"Quick Extract",fn:ih},{label:"Quick Wear",fn:of(sh)},{label:"FS Box Log",fn:Jd},{label:"SE Tracker",fn:lh}]},...rl("betaOptIn")&&Rd()?[{section:"Beta Features",menu:[{label:"Relic List",fn:ah,beta:!0},{label:"GS Export",fn:async function(){if(!Rd())return
const e=await kh(),t=await Ah("fsh_guildinvmgr_cache")??[],n=e.items.map((e=>t=>{const n=e.find((({inv_id:e})=>e===t.inv_id))
return n?.attributes?{...t,stats:{...t.stats,armor:Gh(n,2),attack:Gh(n,0),damage:Gh(n,4),defense:Gh(n,1),hp:Gh(n,3),set_name:n.set_name??"",...n.set_name&&{set_armor:Gh(n.set_bonuses,2)},...n.set_name&&{set_attack:Gh(n.set_bonuses,0)},...n.set_name&&{set_damage:Gh(n.set_bonuses,4)},...n.set_name&&{set_defense:Gh(n.set_bonuses,1)},...n.set_name&&{set_hp:Gh(n.set_bonuses,3)}},cached:!0}:{...t,cached:!1}})(t))
var i
xh((i=`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name,set_attack,set_defense,set_armor,set_hp,set_damage,cached\n${(e=>e.map(sf).join("\n"))(n)}\n`,new Blob([i],{type:"text/csv"})),"gs_export.csv")},beta:!0},{label:"Who's Got What",fn:function(){Wd(import("./whosGotWhat-DqtCNEcJ.js"))},beta:!0}]}]:[],{section:"FSH developer quick links",menu:[{playerId:1963510,playerName:"PointyHair"},{playerId:1674838,playerName:"Lusterless"}]}]
function lf(e,t,n){const i=e.slice()
return i[7]=t[n],i}function cf(e,t,n){const i=e.slice()
return i[10]=t[n],i}function uf(e){let t,n,i,r,s
function o(){return e[5](e[10])}return{c(){t=Pc("button"),t.textContent="PM",n=$c(),i=Pc("a"),i.textContent=`${e[10].playerName}`,Fc(t,"type","button"),Fc(t,"class","helperDevBtn svelte-8sy7i5"),Fc(i,"href",Oo+"menuItem.playerId"),Fc(i,"class","svelte-8sy7i5")},m(e,a){Sc(e,t,a),Sc(e,n,a),Sc(e,i,a),r||(s=Ic(t,"click",o),r=!0)},p(t,n){e=t},d(e){e&&(Ec(t),Ec(n),Ec(i)),r=!1,s()}}}function df(e){let t,n,i
function r(){return e[4](e[10])}return{c(){t=Pc("a"),t.textContent=`${e[10].label}`,Fc(t,"href",e[10].href),Fc(t,"class","svelte-8sy7i5")},m(e,s){Sc(e,t,s),n||(i=Ic(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&Ec(t),n=!1,i()}}}function hf(e){let t,n,i
function r(){return e[3](e[10])}return{c(){t=Pc("button"),t.textContent=`${e[10].label}`,Fc(t,"type","button"),Fc(t,"class","svelte-8sy7i5")},m(e,s){Sc(e,t,s),n||(i=Ic(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&Ec(t),n=!1,i()}}}function ff(e){let t,n
let i=function(e,t){return e[10].fn?hf:e[10].href?df:e[10].playerName?uf:void 0}(e),r=i&&i(e),s=e[10].beta&&function(e){let t
return{c(){t=Pc("sup"),t.textContent="beta",Fc(t,"class","fshRed")},m(e,n){Sc(e,t,n)},d(e){e&&Ec(t)}}}()
return{c(){t=Pc("li"),r&&r.c(),n=$c(),s&&s.c()},m(e,i){Sc(e,t,i),r&&r.m(t,null),bc(t,n),s&&s.m(t,null)},p(e,t){r&&r.p(e,t)},d(e){e&&Ec(t),r&&r.d(),s&&s.d()}}}function pf(e){let t,n,i,r,s=Iu(e[7].menu),o=[]
for(let t=0;t<s.length;t+=1)o[t]=ff(cf(e,s,t))
return{c(){t=Pc("h2"),t.textContent=`${e[7].section}`,n=$c(),i=Pc("ul")
for(let e=0;e<o.length;e+=1)o[e].c()
r=$c(),Fc(t,"class","svelte-8sy7i5")},m(e,s){Sc(e,t,s),Sc(e,n,s),Sc(e,i,s)
for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(i,null)
bc(i,r)},p(e,t){if(7&t){let n
for(s=Iu(e[7].menu),n=0;n<s.length;n+=1){const a=cf(e,s,n)
o[n]?o[n].p(a,t):(o[n]=ff(a),o[n].c(),o[n].m(i,r))}for(;n<o.length;n+=1)o[n].d(1)
o.length=s.length}},d(e){e&&(Ec(t),Ec(n),Ec(i)),xc(o,e)}}}function gf(e){let t,n=Iu(af),i=[]
for(let t=0;t<n.length;t+=1)i[t]=pf(lf(e,n,t))
return{c(){for(let e=0;e<i.length;e+=1)i[e].c()
t=Cc()},m(e,n){for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,n)
Sc(e,t,n)},p(e,[r]){if(7&r){let s
for(n=Iu(af),s=0;s<n.length;s+=1){const o=lf(e,n,s)
i[s]?i[s].p(o,r):(i[s]=pf(o),i[s].c(),i[s].m(t.parentNode,t))}for(;s<i.length;s+=1)i[s].d(1)
i.length=n.length}},i:Wl,o:Wl,d(e){e&&Ec(t),xc(i,e)}}}function _f(e){const t=ru()
function n(e){Cd("helperMenu",e)}function i(e,i){dl(i)&&(n(e),t("toggle"),i())}function r(e){t("toggle"),n("sendMsg"),window.openQuickMsgDialog(e)}return[n,i,r,e=>i(e.label,e.fn),e=>n(e.label),e=>r(e.playerName)]}class vf extends Du{constructor(e){super(),ju(this,e,_f,gf,Zl,{})}}function mf(e){let t,n,i,r
return n=new vf({}),n.$on("toggle",e[4]),{c(){t=Pc("div"),Au(n.$$.fragment),Fc(t,"class","modal svelte-gt76l6")},m(e,i){Sc(e,t,i),Mu(n,t,null),r=!0},p:Wl,i(e){r||(Pu(n.$$.fragment,e),e&&pu((()=>{r&&(i||(i=Cu(t,Wu,{duration:100},!0)),i.run(1))})),r=!0)},o(e){Tu(n.$$.fragment,e),e&&(i||(i=Cu(t,Wu,{duration:100},!1)),i.run(0)),r=!1},d(e){e&&Ec(t),Nu(n),e&&i&&i.end()}}}function yf(e){let t,n,i,r,s,o,a=e[1]&&mf(e)
return{c(){t=Pc("div"),n=Pc("button"),n.textContent="Helper Menu",i=$c(),a&&a.c(),Fc(n,"type","button"),Fc(n,"class","toggle svelte-gt76l6"),Gc(n,"helper-menu-move",e[3]),Fc(t,"class","helper-menu svelte-gt76l6"),Gc(t,"helper-menu-fixed",e[2])},m(l,c){Sc(l,t,c),bc(t,n),bc(t,i),a&&a.m(t,null),e[5](t),r=!0,s||(o=Ic(n,"click",e[4]),s=!0)},p(e,[n]){e[1]?a?(a.p(e,n),2&n&&Pu(a,1)):(a=mf(e),a.c(),Pu(a,1),a.m(t,null)):a&&(Eu(),Tu(a,1,1,(()=>{a=null})),xu())},i(e){r||(Pu(a),r=!0)},o(e){Tu(a),r=!1},d(n){n&&Ec(t),a&&a.d(),e[5](null),s=!1,o()}}}function bf(e,t,n){const i=rl("keepHelperMenuOnScreen"),r=rl("draggableHelperMenu")
let s=0
tu((()=>{r&&Pd(s)}))
let o=!1
return[s,o,i,r,function(){n(1,o=!o)},function(e){au[e?"unshift":"push"]((()=>{s=e,n(0,s)}))}]}class wf extends Du{constructor(e){super(),ju(this,e,bf,yf,Zl,{})}}function kf(){const e=pl(".mainbody")
e&&function(e,t){new wf({target:t.parentElement,props:{props:e}})}({},e)}function Sf(e){return(new DOMParser).parseFromString(e,"text/html")}function Ef(e){return yh({data:e})}async function xf(e){const t=await Ef(e)
if(t)return Sf(t)}function Pf(e){const n=t("info-msg",e)
if(n){const e=n.innerHTML
return e?e.replace(/<br.*/,""):""}}let Tf=0
const $f=()=>Tf
function Cf(){Tf=rl("sendGoldonWorld")}async function If(){if(!$f())return
Cd("NewMap","doSendGold")
const e=await xf({cmd:"trade",subcmd:"sendgold",xc:window.ajaxXC,target_username:$("#HelperSendTo").html(),gold_amount:$("#HelperSendAmt").html().replace(/[^\d]/g,"")})
e&&function(e){const t=Pf(e)
"You successfully sent gold!"!==t&&""!==t||(cl("currentGoldSentTotal",parseInt(rl("currentGoldSentTotal"),10)+parseInt(rl("goldAmount"),10)),GameData.fetch(Sa))}(e)}function Lf(e){window.location=e}function Rf(e){rl("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function Ff(e){Cd("keyHandler",e)}function Of(e){return e?.toLowerCase?.()}function Af(e,t){return Of(e)<Of(t)?-1:Of(e)>Of(t)?1:0}function Mf(e){return Ph(e,{method:"GET"})}function Nf(e){return Mf({cmd:"profile",...e})}async function jf(){const e=await Nf({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort(((e,t)=>Af(e.name,t.name)))}:e}function Df(e,t,...n){return e(...n)}function Bf(){return Df(jf)}const Hf=[e=>e?.s,(e,t)=>e.r?.length>t]
async function qf(e){const t=await Bf()
if(((e,t)=>Hf.every((n=>n(t,e))))(e,t)){Ff("changeCombatSet")
const n=t.r[e].id
Rf("2"),Lf(`${Fo+To}managecombatset&submit=Use&combatSetId=${n}`)}}function Uf(e,n){t("worldPage")||(Ff(e),Lf(n))}function Gf(){Pl.enableMaxGroupSizeToJoin?Lf(Jo):Lf(Qo)}function Wf(){Ff("logPage"),Rf("2"),Lf(Lo)}function zf(e){const t=pl(`#pCC input[value="${e}"]`)
t&&(Ff("movePage"),Eh(t))}const Vf=[["!",qf,0],["@",qf,1],['"',qf,1],["#",qf,2],["£",qf,2],["$",qf,3],["%",qf,4],["^",qf,5],["&",qf,6],["*",qf,7],["(",qf,8],["0",function(){Uf("toWorld",Ko)}],["<",zf,"<"],[">",zf,">"],["G",function(){Ff("createGroup"),Rf("4"),Lf(`${Wo}create`)}],["L",Wf],["b",function(){Ff("backpack"),Rf("2"),Lf(Ao)}],["g",function(){Ff("gotoGuild"),Rf("4"),Lf(`${qo}manage`)}],["j",function(){Ff("joinAllGroup"),Rf("4"),Gf()}],["l",Wf],["p",function(){Ff("profile"),Rf("2"),Lf(Fo)}],["r",function(){Uf("doRepair",`${Zo+To}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in Pl&&!Pl.dialogIsClosed()||(Ff("insertQuickWear"),Gd(sh))}],["y",If]]
const Qf=[e=>["HTML","BODY"].every((t=>e.target.tagName!==t)),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function Jf(e){var t;(t=e,Qf.some((e=>e(t))))||function(e){const t=Vf.find((([t])=>e===t))
t&&t[1](t[2])}(e.key)}function Kf(){Tl(document,"keyup",Jf)}function Xf(e,t){return rd(t)===e}function Yf(e){return od(Xf,e)}function Zf(e,t,n){Tl(e,"click",t,n)}function ep(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function tp(e,t){return ed(ep(e,t))}function np(e){Zf(e,(()=>{Cd("chrome","Game Help link")})),Hd(`<a href="${Po}settings">Game Help</a>`,e)}function ip(){tp("#pCR h3").filter(Yf("Game Help")).forEach(np)}function rp(e){Pl[e]=rl(e)}function sp(e,t){if(t instanceof Element)return t.closest(e)}function op(e){e?.classList&&e.classList.add("fshHide")}function ap(e){const n=sp("a",e.target)
n?.getAttribute("href")===Uo&&(Cd("useNewGuildLog","Alter Href"),e.preventDefault(),Kd(),op(t("notification-guild-log")))}function lp(){return Pl.huntingMode&&window.realmKeyHandler}function cp(e){e.forEach((e=>ql(3,e)))}function up(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function dp(){return dl(window.jQuery)}function hp(){return!dp()}var fp=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function pp(e){return function(e){return-1!==e&&0===pl(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?(Cd("accordion","collapse"),-1):e}const gp=(e,t,n)=>$(e).data(`${n}${t}`)
function _p(e,t,n){return new Promise((i=>{const r=gp(e,t,n)
r?i(r):function(e,t,n,i){$(e).on(`${Of(t)}create`,(()=>{i(gp(e,t,n))}))}(e,t,n,i)}))}const vp=[[e=>!hl(e),()=>$l("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>$l("$('#nav').data('hcsNav').heights does not exist")]]
async function mp(){const e=t("nav"),n=await _p(e,"Nav","hcs")
return function(e){const t=vp.find((([t])=>t(e)))
return!t||(t[1](),!1)}(n)?{theNav:e,myNav:n}:{}}function yp(){!function(){const e=rl("lastActiveQuestPage")
rl("storeLastQuestPage")&&e.length>0&&(t("nav-character-questbook").href=e)}(),function(){const e=rl("lastScavPage")
rl("storeLastScavPage")&&e.length>0&&(t("nav-actions-artisanship-scavenging").href=e)}()}async function bp(){const{theNav:e,myNav:t}=await mp()
e&&t&&(yp(),async function(e,t){const n=fp.map((e=>[e,rl(e)]))
n.some((([,e])=>e))&&(await import("./injectItems-DfgtL81u.js")).default(e,t,up(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,pp(n))}}(t))}function wp(e,t){return t?.classList?.contains(e)}function kp(e,t){t instanceof Node&&(t.textContent=String(e))}let Sp
function Ep(){return Sp||(Sp=t("quickMessageDialog")),Sp}let xp,Pp=0
function Tp(e){(function(){if(!Pp){const e=jd("validateTips",Ep())
1===e.length&&([Pp]=e)}return Pp})()&&kp(Cl(e,""),Pp)}function $p(){return xp||(xp=t("quickMsgDialog_msg"),xp.maxLength=512),xp}let Cp,Ip=null,Lp=0,Rp=0
function Fp(e){"Enter"!==e.key||e.shiftKey||(Cd("messaging","sendOnEnter"),e.preventDefault(),function(){if(!Rp){const e=$(Ep()).dialog("option","buttons")
Rp=e["Send Message"]}return Rp}()())}function Op(){ao(Ip)&&(Ip=rl("enterForSendMessage")),Ip&&!Lp&&(Tl($p(),"keypress",Fp),Lp=!0)}function Ap(e,t){return wp(t[0],e)}function Mp(e,t,n){const{target:i}=n,r=t.find(od(e,i))
if(r)return r[1](i)}function Np(e){return od(Mp,Ap,e)}function jp(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function Dp(e,t){jp(e,"beforeend",t)}function Bp(e,t){if("string"==typeof t){const e=a(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function Hp(e){const t=rl(e)
if(t)return fl(t,Bp)}function qp(e,t,n){return JSON.stringify(e,t,n)}function Up(e,t){cl(e,qp(t))}let Gp=0,Wp=0,zp=0
function Vp(e,t,n){const i=Wp.insertRow(e)
let r=i.insertCell(-1)
Dp(r,t),r=i.insertCell(-1),Dp(r,n)}function Qp(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function Jp(e,t){Vp(e,Qp("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const Kp=[["del-button",function(e){Cd("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
Wp.deleteRow(t),Gp.splice(t-2,1),Up("quickMsg",Gp)}],["add-button",function(e){Cd("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){Jp(e.parentNode.parentNode.rowIndex,n),t.value="",Gp.push(n),Up("quickMsg",Gp)}}],["add-template",function(e){Cd("messaging","insertTemplate"),$p().value+=`${n(e).replace(/\{playername\}/g,Cp)}`}]]
function Xp(e){Jp(-1,e)}function Yp(){rl("enableMessageTemplates")&&!zp&&(Zf((Wp||(Wp=Ep().lastElementChild),Wp),Np(Kp)),(Gp||(Gp=Hp("quickMsg")),Gp).forEach(Xp),Vp(-1,Qp("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),zp=!0)}function Zp(e,n,i){const r=Ep()
wp("ui-dialog-content",r)&&(!function(e){Cp=e,kp(e,t("quickMsgDialog_targetUsername"))}(e),function(e){const t=$p()
t.value=Cl(e,""),t.disabled=!1}(n),Tp(i),Yp(),Op(),$(r).dialog("open"))}function eg(e){const n=t(e)
n&&(n.classList.add("pCR"),Bd(ud(),n))}function tg(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function ng(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?tg(t,e.firstChild):Bd(e,t)}(e,t)}function ig(e){const n=t(e)
n&&ng((cd||(cd=t("pCR")),cd),n)}const rg=[function(){rl("moveGuildList")&&ig("minibox-guild")},function(){rl("moveOnlineAlliesList")&&ig("minibox-allies")},function(){rl("moveXmasBox")&&eg("minibox-xmas")},function(){rl("moveDailyQuest")&&eg("minibox-daily-quest")},function(){rl("moveFSBox")&&eg("minibox-fsbox")},function(){(Pl.enableAllyOnlineList||Pl.enableEnemyOnlineList)&&Wd(import("./allyEnemy-CJPhd6KF.js"))},function(){(Pl.enableWantedList||Pl.enableActiveBountyList)&&Wd(import("./activeWantedBounties-D3vXvW3w.js"))},function(){Pl.enableGuildInfoWidgets&&Wd(import("./addGuildInfoWidgets-Da0giaHZ.js"))},function(){Pl.enableOnlineAlliesWidgets&&Wd(import("./addOnlineAlliesWidgets-DdVs2HQM.js"))},function(){Pl.enableTempleAlert&&Wd(import("./injectTempleAlert-DTEtV4i3.js"))},function(){Pl.enableUpgradeAlert&&Wd(import("./injectUpgradeAlert-BERxJoEB.js"))},function(){Pl.enableComposingAlert&&Wd(import("./injectComposeAlert-DPdFtqlw.js"))},function(){ud()&&!hp()&&bp()},function(){hp()||(window.openQuickMsgDialog=Zp)},function(){rl("statBarLinks")&&Wd(import("./statBar-C6qSD2zd.js"))},function(){rl("staminaCalculator")&&Wd(import("./injectStaminaCalculator-B0DBK5A7.js"))},function(){rl("levelUpCalculator")&&Wd(import("./injectLevelupCalculator-C4k8VDaX.js"))},function(){rl("fsboxlog")&&Wd(import("./fsbox-DPZZLQQx.js"))},function(){rl("resizeQuickBuff")&&Wd(import("./interceptQuickBuff-WQ0HxbiY.js"))},function(){rl("joinAllLink")&&Wd(import("./injectJoinAllLink-BSTyS8wi.js"))},function(){rl("addServerNode")&&Wd(import("./injectServerNode-Bg40T1OR.js"))},function(){rl("addScoutTowerLink")&&Wd(import("./scoutTowerLink-CSbNvEfv.js"))},function(){dp()&&rl(La)&&Wd(import("./guildActivity-BEPefOwO.js"))},async function(){if(dp()&&Pl.enableSeTracker){const e=await import("./trackerPrefStore-Da3PKx5-.js").then((function(e){return e.a}))
e.default.set(Pl.enableSeTracker)}}]
const sg=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function og(){lp()||(sg.forEach(rp),Pl.allyEnemyOnlineRefreshTime=1e3*rl("allyEnemyOnlineRefreshTime"),Pl.useNewGuildLog&&(Tl(document.body,"click",ap),Tl(document.body,"auxclick",ap)),cp(rg))}function ag(e){const t=fl(e)
t?.["new-ui"]&&(rl("gameHelpLink")&&ql(3,ip),Pl.huntingMode=rl("huntingMode"),ql(3,Kf),og(),rl("hideHelperMenu")||ql(3,kf))}function lg(){const e=function(){const e=t("html")
if(e?.dataset)return e.dataset.hcs}()
e&&ag(e)}function cg(){dp()&&t("worldPage")&&window.GameData&&Wd(import("./newMap-RGW3Szrq.js"))}function ug(e){$(e).qtip("hide")}function dg(e){cl("needToPray",e),cl("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}let hg=0
const fg='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',pg=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${Po}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
async function gg(e){const t=e.target.getAttribute("praytype")
t&&(Cd("notification","prayToGods"),ug(e.target),await Ef({cmd:"temple",subcmd:"pray",type:t}),hg.outerHTML=fg,dg(!1))}function _g(){Dp(t("notifications"),pg),hg=t("helperPrayToGods"),fd(hg,"click",gg)}async function vg(){if(!Pl.enableTempleAlert)return
const e="temple"===Pl.cmd?document:await xf({cmd:"temple"})
if(!e)return
const t=pl("#pCC",e)
if(!t)return
const n="You are currently praying at the temple."!==rd(t)
n&&_g(),dg(n)}const mg={"-":{"-":()=>{Wd(import("./arena-Duo_VrxA.js").then((function(e){return e.c})))}},dojoin:{"-":()=>{Wd(import("./arenaDoJoin-B9lpNKhK.js"))}},join:{"-":()=>{Wd(import("./arenaJoin-DTAaWKjk.js"))}},completed:{"-":()=>{Wd(import("./completedArenas-Dk8Yyp31.js"))}},pickmove:{"-":()=>{Wd(import("./storeMoves-CBbw4ozl.js"))}},setup:{"-":()=>{Wd(import("./setupMoves-45FUX-9w.js"))}}}
function yg(){Wd(import("./bioWidgets-CUMkHgXE.js"))}function bg(){Wd(import("./injectGuild-D4A8K08t.js"))}const wg=()=>{Wd(import("./guildAdvisor-BmPdmvYy.js"))}
const kg=()=>{Wd(import("./groups-Bh7_OBUt.js"))}
const Sg=()=>{Wd(import("./addRemoveTags-CduZ368w.js"))}
const Eg=()=>{Wd(import("./guildChat-DRwEKRME.js"))}
function xg(){Wd(import("./viewRecipe-egAQ7D_U.js"))}function Pg(){Wd(import("./ufsgAllowBack-DCoX5MrT.js"))}function Tg(){Wd(import("./profile-rC6r94F5.js").then((function(e){return e.p})))}function $g(){Wd(import("./news-DaHmuS2l.js"))}function Cg(){Wd(import("./viewArchive-Td8PkvRL.js"))}const Ig=()=>{Wd(import("./inventory-ypKKn_ae.js"))},Lg=()=>{Wd(import("./bazaar-DgkfcZz1.js"))}
function Rg(){Wd(import("./injectQuestBookFull-uK-zV1fx.js"))}const Fg=()=>{Wd(import("./scavenging-Bm92xCIo.js"))}
const Og=()=>{Wd(import("./toprated-BHupi9jf.js"))}
const Ag=()=>{Wd(import("./trade-BRDknqQq.js"))}
var Mg={creatures:{"-":{"-":Pg}},items:{"-":{"-":Pg},view:{"-":()=>{Wd(import("./itemsView-f3USoRqH.js"))}}},masterrealms:{"-":{"-":Pg}},quests:{"-":{"-":Pg},view:{"-":()=>{Wd(import("./showAllQuestSteps-DE5b8YfN.js"))}}},realms:{"-":{"-":Pg}},relics:{"-":{"-":Pg}},shops:{"-":{"-":Pg}},"-":{news:{"-":$g},viewupdatearchive:{"-":Cg},viewarchive:{"-":Cg},"-":{"-":()=>{Wd(import("./unknownPage-C7Ccx_KG.js"))}}},arena:mg,auctionhouse:{"-":{"-":()=>{Wd(import("./injectAuctionHouse-htpVGXDd.js"))}},quickcreate:{"-":()=>{Wd(import("./quickCreate-Sc5aaE1p.js"))}}},bank:{"-":{"-":()=>{Wd(import("./injectBank-pGl4HR1Y.js"))}}},blacksmith:{repairall:{"-":function(){Gl("fromworld")&&cg()}}},buffmarket:{"-":{"-":()=>{Wd(import("./injectBuffmarket-VQUlwx4u.js"))}}},combat:{attackplayer:{"-":Tg}},composing:{"-":{"-":()=>{Wd(import("./composing-CMKoXn9o.js"))}},breakdown:{"-":()=>{Wd(import("./breakdown-BJjbdRuJ.js"))}},create:{"-":()=>{Wd(import("./composingCreate-_MQVfLNr.js"))}}},findplayer:{"-":{"-":()=>{Wd(import("./findplayer-BhrlwkCt.js"))}}},guild:{inventory:{report:()=>{Wd(import("./guildReport-BuxdcS_n.js"))},addtags:Sg,removetags:Sg,storeitems:()=>{Wd(import("./storeitems-BZlEgC5B.js"))}},chat:{"-":Eg},dochat:{"-":Eg},log:{"-":()=>{Wd(import("./guildLog-Bnq5-Jmr.js"))}},groups:{viewstats:()=>{Wd(import("./injectGroupStats-TIb71gov.js"))},joinallgroupsundersize:kg,joinall:kg,"-":kg},manage:{"-":bg},advisor:{"-":wg,weekly:wg},history:{"-":yg},view:{"-":bg},scouttower:{"-":()=>{Wd(import("./injectScouttower-vZA4yng_.js"))}},mailbox:{"-":()=>{Wd(import("./guildMailbox-wfYteCR5.js"))}},ranks:{"-":()=>{Wd(import("./rank-qIFM9a_j.js"))}},conflicts:{rpupgrades:()=>{Wd(import("./injectRPUpgrades-BisR5Lu5.js"))}},bank:{"-":()=>{Wd(import("./injectGuildBank-DYw8Exhb.js"))}},hall:{"-":()=>{Wd(import("./hall-B7gCCwNQ.js"))},post:yg},"-":{"-":bg}},hellforge:{"-":{"-":()=>{Wd(import("./hellforge-DlTWbj0I.js"))}}},inventing:{"-":{"-":function(){Wd(import("./inventing-c3O6bGSh.js"))}},doinvent:{"-":xg},viewrecipe:{"-":xg}},log:{"-":{"-":()=>{Wd(import("./playerLog-KlXdW37i.js"))}}},marketplace:{createreq:{"-":()=>{Wd(import("./marketplace-22XRjQ8M.js"))}}},news:{fsbox:{"-":()=>{Wd(import("./newsFsbox-CseyOErw.js"))}},"-":{"-":$g},shoutbox:{"-":()=>{Wd(import("./newsShoutbox-CZDl7m56.js"))}},viewupdatearchive:{"-":Cg},viewarchive:{"-":Cg}},notepad:{showlogs:{"-":Vd},invmanagernew:{"-":Ig},guildinvmgr:{"-":Ig},recipemanager:{"-":oh},auctionsearch:{"-":Yd},onlineplayers:{"-":th},quicklinkmanager:{"-":rh},monsterlog:{"-":Qd},quickextract:{"-":ih},quickwear:{"-":sh},fsboxcontent:{"-":Jd},bufflogcontent:{"-":zd},newguildlog:{"-":Kd},findbuffs:{"-":Zd},findother:{"-":eh},savesettings:{"-":()=>{Wd(import("./load-QRI_TKMb.js"))}},reliclist:{"-":ah}},points:{"-":{"-":()=>{Wd(import("./points-pvZTU-s6.js"))}}},potionbazaar:{"-":{"-":Lg},buyitem:{"-":Lg}},privatemessage:{"-":{"-":()=>{Wd(import("./privateMsg-CvgJsLJf.js"))}}},profile:{"-":{"-":Tg},managecombatset:{"-":Tg},report:{"-":Tg},equipitem:{"-":Tg},useitem:{"-":Tg},changebio:{"-":yg},dropitems:{"-":function(){Wd(import("./injectProfileDropItems-DkOhbnWC.js"))}}},pvpladder:{"-":{"-":()=>{Wd(import("./ladder-g0H5q-6k.js"))}}},questbook:{"-":{"-":Rg},atoz:{"-":Rg},viewquest:{"-":()=>{Wd(import("./injectQuestTracker-EtDeYDQi.js"))}}},quickbuff:{"-":{"-":()=>{Wd(import("./quickBuff-CWwWAvMc.js"))}}},scavenging:{"-":{"-":Fg},process:{"-":Fg}},settings:{"-":{"-":()=>{Wd(import("./injectSettings-D7Dk1acz.js"))}}},skills:{"-":{"-":()=>{}}},superelite:{"-":{"-":()=>{Wd(import("./superelite-VWPexufW.js"))}}},tempinv:{"-":{"-":()=>{Wd(import("./mailbox-B0qX2Jpd.js"))}}},temple:{"-":{"-":vg}},titan:{"-":{"-":()=>{Wd(import("./injectTitan-BZu2pil7.js"))}}},toprated:{xp:{"-":Og},monthlyxp:{"-":Og},gold:{"-":Og},killstreak:{"-":Og},bounties:{"-":Og},risingstars:{"-":Og},arena:{"-":Og},superelites:{"-":Og},smasher:{"-":Og},globalquest:{"-":()=>{Wd(import("./globalQuest-CLtUbSn5.js"))}}},trade:{"-":{"-":Ag},sendgold:{"-":Ag},createsecure:{"-":Ag},docreatesecure:{"-":Ag}},world:{"-":{"-":cg}}}
function Ng(e){return Md("li",e)}function jg(e){return Md("ul",e)}const Dg=()=>Nd({className:"fshQuickLinks",style:{left:`${rl("quickLinksLeftPx")}px`,top:`${rl("quickLinksTopPx")}px`}}),Bg=e=>"newWindow"in e&&e.url&&e.name
function Hg(e,t){const n=Bd(t,jg())
e.filter(Bg).forEach((e=>{Bd(Bd(n,Ng()),function(e){const t=Sh({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return Zf(t,(()=>Cd("chrome","quick link",e.name))),t}(e))}))}function qg(){if(!pl(".mainbody"))return
const e=Hp("quickLinks")||[]
e.length&&function(e){const t=Dg()
t.classList.toggle("fshFixed",rl("keepHelperMenuOnScreen")),rl("draggableQuickLinks")&&(t.classList.add("fshMove"),Pd(t)),Hg(e,t),Bd(document.body,t)}(e)}let Ug=0,Gg=0,Wg=0,zg="",Vg=0,Qg=0
function Jg(e){return Gl(e)||"-"}function Kg(e){const t=pl(e)
return t?.value||"-"}function Xg(){if(hl(Mg[Ug])&&hl(Mg[Ug][Gg])&&dl(Mg[Ug][Gg][Wg]))return Mg[Ug][Gg][Wg]}function Yg(){""!==document.location.search?(Ug=Jg("cmd"),Gg=Jg("subcmd"),Wg=Jg("subcmd2"),["points","privatemessage"].includes(Ug)&&(zg=`/${Jg("type")}`)):(Ug=Kg('input[name="cmd"]'),Gg=Kg('input[name="subcmd"]'),Wg=Kg('input[name="subcmd2"]')),Pl.cmd=Ug,Pl.subcmd=Gg,Pl.subcmd2=Wg,Qg=`${Ug}/${Gg}/${Wg}${zg}`,Vg=Xg()}function Zg(){dl(Vg)&&(ul(Qg),Vg())}async function e_(e){Yg(),await e,lg(),ql(3,Zg),rl("playNewMessageSound")&&ql(3,hd),lp()||ql(3,qg)}const t_=[()=>!("showPicker"in HTMLSelectElement.prototype),()=>!navigator.cookieEnabled,()=>window!==window.parent,function(){if(!d){const e=l(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
u=c.includes(e),d=!0}return u}]
function n_(e,t){if(t_.some((e=>e())))return
const n=gl("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
xl(),function(e,t){Pl.gmInfo=fl(decodeURIComponent(t)),Pl.gmInfo?Pl.fshVer=e:Pl.fshVer=`${e}_native`,Pl.calfVer="141"}(e,t),o(),Gs(),e_(n)}export{Df as $,_o as A,jg as B,Fd as C,wp as D,$h as E,Th as F,Ef as G,Za as H,el as I,Sf as J,ep as K,ju as L,Zl as M,Iu as N,Ec as O,Mc as P,Nc as Q,Sc as R,Du as S,bc as T,Pc as U,Tc as V,$c as W,Fc as X,Xl as Y,Wl as Z,Fu as _,Mf as a,Ga as a$,Lu as a0,Dc as a1,Ic as a2,Rc as a3,pu as a4,Hp as a5,Up as a6,Bc as a7,n as a8,kp as a9,Ka as aA,td as aB,s as aC,lh as aD,xa as aE,ca as aF,ua as aG,ug as aH,Lh as aI,Ko as aJ,To as aK,aa as aL,ga as aM,da as aN,uo as aO,Eh as aP,Ah as aQ,ya as aR,Mh as aS,mh as aT,fl as aU,ql as aV,jd as aW,Ha as aX,Ba as aY,Ua as aZ,qa as a_,Gl as aa,Vd as ab,Qd as ac,cl as ad,Zu as ae,_p as af,Pl as ag,qp as ah,rl as ai,Dd as aj,Go as ak,sl as al,Cc as am,Ra as an,no as ao,eo as ap,co as aq,Po as ar,rd as as,Of as at,Ap as au,Mo as av,No as aw,Ul as ax,na as ay,Ro as az,od as b,$l as b$,ed as b0,id as b1,dl as b2,lo as b3,la as b4,jc as b5,tc as b6,Vo as b7,Yo as b8,xc as b9,pa as bA,Ea as bB,Pa as bC,Ta as bD,Cf as bE,$f as bF,If as bG,ha as bH,fa as bI,Zs as bJ,ka as bK,ma as bL,op as bM,Pf as bN,io as bO,Nf as bP,hc as bQ,Qa as bR,Bf as bS,hl as bT,tl as bU,Oa as bV,Rd as bW,Lf as bX,jo as bY,Ja as bZ,ng as b_,fu as ba,po as bb,va as bc,wa as bd,Nu as be,Tu as bf,Pu as bg,Mu as bh,Au as bi,Eu as bj,xu as bk,ru as bl,fo as bm,ea as bn,qu as bo,Hu as bp,ko as bq,Cl as br,Ya as bs,Oo as bt,ro as bu,oo as bv,Af as bw,rc as bx,iu as by,ba as bz,Hd as c,xo as c$,ta as c0,yh as c1,$a as c2,Yf as c3,go as c4,Ca as c5,dp as c6,Md as c7,qo as c8,Ia as c9,gl as cA,Aa as cB,Wd as cC,fc as cD,Xf as cE,Io as cF,ao as cG,Wa as cH,mo as cI,Na as cJ,ul as cK,$g as cL,Rg as cM,xg as cN,qs as cO,kh as cP,ho as cQ,nf as cR,zh as cS,Qh as cT,Zh as cU,Jh as cV,Vh as cW,Va as cX,za as cY,Yl as cZ,Ac as c_,Da as ca,Eo as cb,a as cc,Ma as cd,Mp as ce,sc as cf,lc as cg,cc as ch,ac as ci,Gc as cj,su as ck,au as cl,Ou as cm,gu as cn,Ql as co,eu as cp,Zc as cq,yu as cr,jp as cs,so as ct,to as cu,wh as cv,Ys as cw,Ho as cx,Ng as cy,e as cz,xf as d,vo as d0,bo as d1,wo as d2,La as d3,Xd as d4,zo as d5,So as d6,Np as d7,yo as d8,nh as d9,Yd as dA,th as dB,eh as dC,Zd as dD,Kd as dE,ud as dF,sa as dG,vg as dH,_g as dI,Jd as dJ,xh as dK,Qo as dL,Jo as dM,ja as dN,ch as dO,Zo as dP,Ao as dQ,zc as dR,Vl as dS,Gf as dT,Co as dU,dc as dV,ih as dW,ic as dX,sh as dY,n_ as dZ,bg as da,Cu as db,Vu as dc,Lc as dd,ia as de,ra as df,tu as dg,Pd as dh,ol as di,Oc as dj,Ru as dk,Uc as dl,Uo as dm,Fo as dn,Vc as dp,nu as dq,uc as dr,Bo as ds,oa as dt,cp as du,Gd as dv,oh as dw,Do as dx,zd as dy,rh as dz,Zf as e,up as f,t as g,sp as h,Bd as i,Fa as j,Nd as k,Sh as l,Xo as m,tp as n,Tl as o,dd as p,pl as q,l as r,Cd as s,Xa as t,bh as u,Dp as v,hp as w,nd as x,tg as y,fd as z}
//# sourceMappingURL=calfSystem-Blt4DbaE.js.map
