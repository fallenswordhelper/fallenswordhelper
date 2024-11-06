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
const h="undefined"!=typeof window?window:void 0,f="undefined"!=typeof globalThis?globalThis:h,p=Array.prototype,g=p.forEach,_=p.indexOf,v=null==f?void 0:f.navigator,m=null==f?void 0:f.document,y=null==f?void 0:f.location,b=null==f?void 0:f.fetch,w=null!=f&&f.XMLHttpRequest&&"withCredentials"in new f.XMLHttpRequest?f.XMLHttpRequest:void 0,k=null==f?void 0:f.AbortController,S=null==v?void 0:v.userAgent,E=null!=h?h:{},x={DEBUG:!1,LIB_VERSION:"1.181.0"},P=Array.isArray,T=Object.prototype,C=T.hasOwnProperty,I=T.toString,L=P||function(e){return"[object Array]"===I.call(e)},R=function(e){return"function"==typeof e},F=function(e){return e===Object(e)&&!L(e)},O=function(e){if(F(e)){for(const t in e)if(C.call(e,t))return!1
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
const ie=function(){function e(t){return t&&(t.preventDefault=e.preventDefault,t.stopPropagation=e.stopPropagation),t}return e.preventDefault=function(){this.returnValue=!1},e.stopPropagation=function(){this.cancelBubble=!0},function(t,n,i,r,o){if(t)if(t.addEventListener&&!r)t.addEventListener(n,i,!!o)
else{const r="on"+n,o=t[r]
t[r]=function(t,n,i){return function(r){if(!(r=r||e(null==h?void 0:h.event)))return
let o,s=!0
R(i)&&(o=i(r))
const a=n.call(t,r)
return!1!==o&&!1!==a||(s=!1),s}}(t,i,o)}else G.error("No valid element provided to register_event")}}()
function re(e){const t=null==e?void 0:e.hostname
return!!M(t)&&"herokuapp.com"!==t.split(".").slice(-2).join(".")}function oe(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return e[n]}let se
!function(e){e.GZipJS="gzip-js",e.Base64="base64"}(se||(se={}))
const ae="$people_distinct_id",le="__alias",ce="__timers",ue="$autocapture_disabled_server_side",de="$heatmaps_enabled_server_side",he="$exception_capture_enabled_server_side",fe="$exception_capture_endpoint_suffix",pe="$web_vitals_enabled_server_side",ge="$dead_clicks_enabled_server_side",_e="$web_vitals_allowed_metrics",ve="$session_recording_enabled_server_side",me="$console_log_recording_enabled_server_side",ye="$session_recording_network_payload_capture",be="$session_recording_canvas_recording",we="$replay_sample_rate",ke="$replay_minimum_duration",Se="$sesid",Ee="$session_is_sampled",xe="$session_recording_url_trigger_activated_session",Pe="$session_recording_url_trigger_status",$e="$enabled_feature_flags",Te="$early_access_features",Ce="$stored_person_properties",Ie="$stored_group_properties",Le="$surveys",Re="$surveys_activated",Fe="$flag_call_reported",Oe="$user_state",Ae="$client_session_props",Me="$capture_rate_limit",Ne="$initial_campaign_params",je="$initial_referrer_info",De="$initial_person_info",Be="$epp",He="__POSTHOG_TOOLBAR__",qe=[ae,le,"__cmpns",ce,ve,de,Se,$e,Oe,Te,Ie,Ce,Le,Fe,Ae,Me,Ne,je,Be],Ue="$active_feature_flags",Ge="$override_feature_flags",We="$feature_flag_payloads",ze=e=>{const t={}
for(const[n,i]of Y(e||{}))i&&(t[n]=i)
return t}
class Ve{constructor(e){this.instance=e,this._override_warning=!1,this.featureFlagEventHandlers=[],this.reloadFeatureFlagsQueued=!1,this.reloadFeatureFlagsInAction=!1}getFlags(){return Object.keys(this.getFlagVariants())}getFlagVariants(){const e=this.instance.get_property($e),t=this.instance.get_property(Ge)
if(!t)return e||{}
const n=K({},e),i=Object.keys(t)
for(let e=0;e<i.length;e++)n[i[e]]=t[i[e]]
return this._override_warning||(G.warn(" Overriding feature flags!",{enabledFlags:e,overriddenFlags:t,finalFlags:n}),this._override_warning=!0),n}getFlagPayloads(){return this.instance.get_property(We)||{}}reloadFeatureFlags(){this.reloadFeatureFlagsQueued||(this.reloadFeatureFlagsQueued=!0,this._startReloadTimer())}setAnonymousDistinctId(e){this.$anon_distinct_id=e}setReloadingPaused(e){this.reloadFeatureFlagsInAction=e}resetRequestQueue(){this.reloadFeatureFlagsQueued=!1}_startReloadTimer(){this.reloadFeatureFlagsQueued&&!this.reloadFeatureFlagsInAction&&setTimeout((()=>{!this.reloadFeatureFlagsInAction&&this.reloadFeatureFlagsQueued&&(this.reloadFeatureFlagsQueued=!1,this._reloadFeatureFlagsRequest())}),5)}_reloadFeatureFlagsRequest(){if(this.instance.config.advanced_disable_feature_flags)return
this.setReloadingPaused(!0)
const e=this.instance.config.token,t=this.instance.get_property(Ce),n=this.instance.get_property(Ie),i={token:e,distinct_id:this.instance.get_distinct_id(),groups:this.instance.getGroups(),$anon_distinct_id:this.$anon_distinct_id,person_properties:t,group_properties:n,disable_flags:this.instance.config.advanced_disable_feature_flags||void 0}
this.instance._send_request({method:"POST",url:this.instance.requestRouter.endpointFor("api","/decide/?v=3"),data:i,compression:this.instance.config.disable_compression?void 0:se.Base64,timeout:this.instance.config.feature_flag_request_timeout_ms,callback:e=>{var t
this.setReloadingPaused(!1)
let n=!0
200===e.statusCode&&(this.$anon_distinct_id=void 0,n=!1),this.receivedFeatureFlags(null!==(t=e.json)&&void 0!==t?t:{},n),this._startReloadTimer()}})}getFeatureFlag(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!(this.instance.decideEndpointWasHit||this.getFlags()&&this.getFlags().length>0))return void G.warn('getFeatureFlag for key "'+e+"\" failed. Feature flags didn't load in time.")
const n=this.getFlagVariants()[e],i=`${n}`,r=this.instance.get_property(Fe)||{}
var o
return!t.send_event&&"send_event"in t||e in r&&r[e].includes(i)||(L(r[e])?r[e].push(i):r[e]=[i],null===(o=this.instance.persistence)||void 0===o||o.register({[Fe]:r}),this.instance.capture("$feature_flag_called",{$feature_flag:e,$feature_flag_response:n})),n}getFeatureFlagPayload(e){return this.getFlagPayloads()[e]}isFeatureEnabled(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(this.instance.decideEndpointWasHit||this.getFlags()&&this.getFlags().length>0)return!!this.getFeatureFlag(e,t)
G.warn('isFeatureEnabled for key "'+e+"\" failed. Feature flags didn't load in time.")}addFeatureFlagsHandler(e){this.featureFlagEventHandlers.push(e)}removeFeatureFlagsHandler(e){this.featureFlagEventHandlers=this.featureFlagEventHandlers.filter((t=>t!==e))}receivedFeatureFlags(e,t){if(!this.instance.persistence)return
this.instance.decideEndpointWasHit=!0
const n=this.getFlagVariants(),i=this.getFlagPayloads()
!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
const r=e.featureFlags,o=e.featureFlagPayloads
if(!r)return
if(L(r)){const e={}
if(r)for(let t=0;t<r.length;t++)e[r[t]]=!0
return void(t&&t.register({[Ue]:r,[$e]:e}))}let s=r,a=o
e.errorsWhileComputingFlags&&(s={...n,...s},a={...i,...a}),t&&t.register({[Ue]:Object.keys(ze(s)),[$e]:s||{},[We]:a||{}})}(e,this.instance.persistence,n,i),this._fireFeatureFlagsCallbacks(t)}override(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(!this.instance.__loaded||!this.instance.persistence)return G.uninitializedWarning("posthog.feature_flags.override")
if(this._override_warning=t,!1===e)this.instance.persistence.unregister(Ge)
else if(L(e)){const t={}
for(let n=0;n<e.length;n++)t[e[n]]=!0
this.instance.persistence.register({[Ge]:t})}else this.instance.persistence.register({[Ge]:e})}onFeatureFlags(e){if(this.addFeatureFlagsHandler(e),this.instance.decideEndpointWasHit){const{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
e(t,n)}return()=>this.removeFeatureFlagsHandler(e)}updateEarlyAccessFeatureEnrollment(e,t){var n
const i={[`$feature_enrollment/${e}`]:t}
this.instance.capture("$feature_enrollment_update",{$feature_flag:e,$feature_enrollment:t,$set:i}),this.setPersonPropertiesForFlags(i,!1)
const r={...this.getFlagVariants(),[e]:t}
null===(n=this.instance.persistence)||void 0===n||n.register({[Ue]:Object.keys(ze(r)),[$e]:r}),this._fireFeatureFlagsCallbacks()}getEarlyAccessFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
const n=this.instance.get_property(Te)
if(n&&!t)return e(n)
this.instance._send_request({transport:"XHR",url:this.instance.requestRouter.endpointFor("api",`/api/early_access_features/?token=${this.instance.config.token}`),method:"GET",callback:t=>{var n
if(!t.json)return
const i=t.json.earlyAccessFeatures
return null===(n=this.instance.persistence)||void 0===n||n.register({[Te]:i}),e(i)}})}_prepareFeatureFlagsForCallbacks(){const e=this.getFlags(),t=this.getFlagVariants()
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
try{t=JSON.parse(rt.get(e))||{}}catch{}return t},set:function(e,t,n,i,r){if(m)try{let o="",s=""
const a=function(e,t){if(t){let t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m
if(nt)return nt
if(!t)return""
if(["localhost","127.0.0.1"].includes(e))return""
const n=e.split(".")
let i=Math.min(n.length,8)
const r="dmn_chk_"+et(),o=new RegExp("(^|;)\\s*"+r+"=1")
for(;!nt&&i--;){const e=n.slice(i).join("."),s=r+"=1;domain=."+e
t.cookie=s,o.test(t.cookie)&&(t.cookie=s+";expires=Thu, 01 Jan 1970 00:00:00 GMT",nt=e)}return nt}(e)
if(!t){const n=(e=>{const t=e.match(it)
return t?t[0]:""})(e)
n!==t&&G.info("Warning: cookie subdomain discovery mismatch",n,t),t=n}return t?"; domain=."+t:""}return""}(m.location.hostname,i)
if(n){const e=new Date
e.setTime(e.getTime()+24*n*60*60*1e3),o="; expires="+e.toUTCString()}r&&(s="; secure")
const l=e+"="+encodeURIComponent(JSON.stringify(t))+o+"; SameSite=Lax; path=/"+a+s
return l.length>3686.4&&G.warn("cookieStore warning: large cookie, len="+l.length),m.cookie=l,l}catch{return}},remove:function(e,t){try{rt.set(e,"",-1,t)}catch{return}}}
let ot=null
const st={is_supported:function(){if(!j(ot))return ot
let e=!0
if(A(h))e=!1
else try{const t="__mplssupport__",n="xyz"
st.set(t,n),'"xyz"'!==st.get(t)&&(e=!1),st.remove(t)}catch{e=!1}return e||G.error("localStorage unsupported; falling back to cookie store"),ot=e,e},error:function(e){G.error("localStorage error: "+e)},get:function(e){try{return null==h?void 0:h.localStorage.getItem(e)}catch(e){st.error(e)}return null},parse:function(e){try{return JSON.parse(st.get(e))||{}}catch{}return null},set:function(e,t){try{null==h||h.localStorage.setItem(e,JSON.stringify(t))}catch(e){st.error(e)}},remove:function(e){try{null==h||h.localStorage.removeItem(e)}catch(e){st.error(e)}}},at=["distinct_id",Se,Ee,Be],lt={...st,parse:function(e){try{let t={}
try{t=rt.parse(e)||{}}catch{}const n=K(t,JSON.parse(st.get(e)||"{}"))
return st.set(e,n),n}catch{}return null},set:function(e,t,n,i,r,o){try{st.set(e,t,void 0,void 0,o)
const s={}
at.forEach((e=>{t[e]&&(s[e]=t[e])})),Object.keys(s).length&&rt.set(e,s,n,i,r,o)}catch(e){st.error(e)}},remove:function(e,t){try{null==h||h.localStorage.removeItem(e),rt.remove(e,t)}catch(e){st.error(e)}}},ct={},ut={is_supported:function(){return!0},error:function(e){G.error("memoryStorage error: "+e)},get:function(e){return ct[e]||null},parse:function(e){return ct[e]||null},set:function(e,t){ct[e]=t},remove:function(e){delete ct[e]}}
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
return n?n[1]:null},mt="Mobile",yt="iOS",bt="Android",wt="Tablet",kt=bt+" "+wt,St="iPad",Et="Apple",xt=Et+" Watch",Pt="Safari",$t="BlackBerry",Tt="Samsung",Ct=Tt+"Browser",It=Tt+" Internet",Lt="Chrome",Rt=Lt+" OS",Ft=Lt+" "+yt,Ot="Internet Explorer",At=Ot+" "+mt,Mt="Opera",Nt=Mt+" Mini",jt="Edge",Dt="Microsoft "+jt,Bt="Firefox",Ht=Bt+" "+yt,qt="Nintendo",Ut="PlayStation",Gt="Xbox",Wt=bt+" "+mt,zt=mt+" "+Pt,Vt="Windows",Qt=Vt+" Phone",Jt="Nokia",Kt="Ouya",Xt="Generic",Yt=Xt+" "+mt.toLowerCase(),Zt=Xt+" "+wt.toLowerCase(),en="Konqueror",tn="(\\d+(\\.\\d+)?)",nn=new RegExp("Version/"+tn),rn=new RegExp(Gt,"i"),on=new RegExp(Ut+" \\w+","i"),sn=new RegExp(qt+" \\w+","i"),an=new RegExp($t+"|PlayBook|BB10","i"),ln={"NT3.51":"NT 3.11","NT4.0":"NT 4.0","5.0":"2000",5.1:"XP",5.2:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1",6.4:"10","10.0":"10"},cn=function(e,t){return t=t||"",X(e," OPR/")&&X(e,"Mini")?Nt:X(e," OPR/")?Mt:an.test(e)?$t:X(e,"IE"+mt)||X(e,"WPDesktop")?At:X(e,Ct)?It:X(e,jt)||X(e,"Edg/")?Dt:X(e,"FBIOS")?"Facebook "+mt:X(e,"UCWEB")||X(e,"UCBrowser")?"UC Browser":X(e,"CriOS")?Ft:X(e,"CrMo")?Lt:X(e,bt)&&X(e,Pt)?Wt:X(e,Lt)?Lt:X(e,"FxiOS")?Ht:X(e.toLowerCase(),en.toLowerCase())?en:((e,t)=>t&&X(t,Et)||function(e){return X(e,Pt)&&!X(e,Lt)&&!X(e,bt)}(e))(e,t)?X(e,mt)?zt:Pt:X(e,Bt)?Bt:X(e,"MSIE")||X(e,"Trident/")?Ot:X(e,"Gecko")?Bt:""},un={[At]:[new RegExp("rv:"+tn)],[Dt]:[new RegExp(jt+"?\\/"+tn)],[Lt]:[new RegExp("("+Lt+"|CrMo)\\/"+tn)],[Ft]:[new RegExp("CriOS\\/"+tn)],"UC Browser":[new RegExp("(UCBrowser|UCWEB)\\/"+tn)],[Pt]:[nn],[zt]:[nn],[Mt]:[new RegExp("(Opera|OPR)\\/"+tn)],[Bt]:[new RegExp(Bt+"\\/"+tn)],[Ht]:[new RegExp("FxiOS\\/"+tn)],[en]:[new RegExp("Konqueror[:/]?"+tn,"i")],[$t]:[new RegExp($t+" "+tn),nn],[Wt]:[new RegExp("android\\s"+tn,"i")],[It]:[new RegExp(Ct+"\\/"+tn)],[Ot]:[new RegExp("(rv:|MSIE )"+tn)],Mozilla:[new RegExp("rv:"+tn)]},dn=[[new RegExp(Gt+"; "+Gt+" (.*?)[);]","i"),e=>[Gt,e&&e[1]||""]],[new RegExp(qt,"i"),[qt,""]],[new RegExp(Ut,"i"),[Ut,""]],[an,[$t,""]],[new RegExp(Vt,"i"),(e,t)=>{if(/Phone/.test(t)||/WPDesktop/.test(t))return[Qt,""]
if(new RegExp(mt).test(t)&&!/IEMobile\b/.test(t))return[Vt+" "+mt,""]
const n=/Windows NT ([0-9.]+)/i.exec(t)
if(n&&n[1]){const e=n[1]
let i=ln[e]||""
return/arm/i.test(t)&&(i="RT"),[Vt,i]}return[Vt,""]}],[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,e=>{if(e&&e[3]){const t=[e[3],e[4],e[5]||"0"]
return[yt,t.join(".")]}return[yt,""]}],[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,e=>{let t=""
return e&&e.length>=3&&(t=A(e[2])?e[3]:e[2]),["watchOS",t]}],[new RegExp("("+bt+" (\\d+)\\.(\\d+)\\.?(\\d+)?|"+bt+")","i"),e=>{if(e&&e[2]){const t=[e[2],e[3],e[4]||"0"]
return[bt,t.join(".")]}return[bt,""]}],[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,e=>{const t=["Mac OS X",""]
if(e&&e[1]){const n=[e[1],e[2],e[3]||"0"]
t[1]=n.join(".")}return t}],[/Mac/i,["Mac OS X",""]],[/CrOS/,[Rt,""]],[/Linux|debian/i,["Linux",""]]],hn=function(e){return sn.test(e)?qt:on.test(e)?Ut:rn.test(e)?Gt:new RegExp(Kt,"i").test(e)?Kt:new RegExp("("+Qt+"|WPDesktop)","i").test(e)?Qt:/iPad/.test(e)?St:/iPod/.test(e)?"iPod Touch":/iPhone/.test(e)?"iPhone":/(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)?xt:an.test(e)?$t:/(kobo)\s(ereader|touch)/i.test(e)?"Kobo":new RegExp(Jt,"i").test(e)?Jt:/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e)||/(kf[a-z]+)( bui|\)).+silk\//i.test(e)?"Kindle Fire":/(Android|ZTE)/i.test(e)?!new RegExp(mt).test(e)||/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e)?/pixel[\daxl ]{1,6}/i.test(e)&&!/pixel c/i.test(e)||/(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e)||/lmy47v/i.test(e)&&!/QTAQZ3/i.test(e)?bt:kt:bt:new RegExp("(pda|"+mt+")","i").test(e)?Yt:new RegExp(wt,"i").test(e)&&!new RegExp(wt+" pc","i").test(e)?Zt:""},fn="https?://(.*)",pn=["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gclid","gad_source","gclsrc","dclid","gbraid","wbraid","fbclid","msclkid","twclid","li_fat_id","mc_cid","igshid","ttclid","rdt_cid"],gn={campaignParams:function(e){return m?this._campaignParamsFromUrl(m.URL,e):{}},_campaignParamsFromUrl:function(e,t){const n=pn.concat(t||[]),i={}
return J(n,(function(t){const n=_t(e,t)
i[t]=n||null})),i},_searchEngine:function(e){return e?0===e.search(fn+"google.([^/?]*)")?"google":0===e.search(fn+"bing.com")?"bing":0===e.search(fn+"yahoo.com")?"yahoo":0===e.search(fn+"duckduckgo.com")?"duckduckgo":null:null},_searchInfoFromReferrer:function(e){const t=gn._searchEngine(e),n="yahoo"!=t?"q":"p",i={}
if(!j(t)){i.$search_engine=t
const e=m?_t(m.referrer,n):""
e.length&&(i.ph_keyword=e)}return i},searchInfo:function(){const e=null==m?void 0:m.referrer
return e?this._searchInfoFromReferrer(e):{}},browser:cn,browserVersion:function(e,t){const n=cn(e,t),i=un[n]
if(A(i))return null
for(let t=0;t<i.length;t++){const n=i[t],r=e.match(n)
if(r)return parseFloat(r[r.length-2])}return null},browserLanguage:function(){return navigator.language||navigator.userLanguage},os:function(e){for(let t=0;t<dn.length;t++){const[n,i]=dn[t],r=n.exec(e),o=r&&(R(i)?i(r,e):i)
if(o)return o}return["",""]},device:hn,deviceType:function(e){const t=hn(e)
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
return t="localstorage"===n&&st.is_supported()?st:"localstorage+cookie"===n&&lt.is_supported()?lt:"sessionstorage"===n&&ht.is_supported()?ht:"memory"===n?ut:"cookie"===n?rt:lt.is_supported()?lt:rt,t}properties(){const e={}
return J(this.props,(function(t,n){if(n===$e&&F(t)){const n=Object.keys(t)
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
return e.id===He||!(null===(t=e.closest)||void 0===t||!t.call(e,"#"+He))}function Sn(e){return!!e&&1===e.nodeType}function En(e,t){return!!e&&!!e.tagName&&e.tagName.toLowerCase()===t.toLowerCase()}function xn(e){return!!e&&3===e.nodeType}function Pn(e){return!!e&&11===e.nodeType}function $n(e){return e?V(e).split(/\s+/):[]}function Tn(e){const t=null==h?void 0:h.location.href
return!!(t&&e&&e.some((e=>t.match(e))))}function Cn(e){let t=""
switch(typeof e.className){case"string":t=e.className
break
case"object":t=(e.className&&"baseVal"in e.className?e.className.baseVal:null)||e.getAttribute("class")||""
break
default:t=""}return $n(t)}function In(e){return D(e)?null:V(e).split(/(\s+)/).filter((e=>Un(e))).join("").replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)}function Ln(e){let t=""
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
for(const t of e.attr_class)i+=`.${t.replace(/"/g,"")}`}const r={...e.text?{text:e.text}:{},"nth-child":null!==(t=e.nth_child)&&void 0!==t?t:0,"nth-of-type":null!==(n=e.nth_of_type)&&void 0!==n?n:0,...e.href?{href:e.href}:{},...e.attr_id?{attr_id:e.attr_id}:{},...e.attributes},o={}
return Y(r).sort(((e,t)=>{let[n]=e,[i]=t
return n.localeCompare(i)})).forEach((e=>{let[t,n]=e
return o[Vn(t.toString())]=Vn(n.toString())})),i+=":",i+=Y(r).map((e=>{let[t,n]=e
return`${t}="${n}"`})).join(""),i}))
return t.join(";")}(function(e){return e.map((e=>{var t,n
const i={text:null===(t=e.$el_text)||void 0===t?void 0:t.slice(0,400),tag_name:e.tag_name,href:null===(n=e.attr__href)||void 0===n?void 0:n.slice(0,2048),attr_class:Qn(e),attr_id:e.attr__id,nth_child:e.nth_child,nth_of_type:e.nth_of_type,attributes:{}}
return Y(e).filter((e=>{let[t]=e
return 0===t.indexOf("attr__")})).forEach((e=>{let[t,n]=e
return i.attributes[t]=n})),i}))}(e))}function Vn(e){return e.replace(/"|\\"/g,'\\"')}function Qn(e){const t=e.attr__class
return t?L(t)?t:$n(t):void 0}const Jn="[SessionRecording]",Kn="redacted",Xn={initiatorTypes:["audio","beacon","body","css","early-hint","embed","fetch","frame","iframe","icon","image","img","input","link","navigation","object","ping","script","track","video","xmlhttprequest"],maskRequestFn:e=>e,recordHeaders:!1,recordBody:!1,recordInitialRequests:!1,recordPerformance:!1,performanceEntryTypeToObserve:["first-input","navigation","paint","resource"],payloadSizeLimitBytes:1e6,payloadHostDenyList:[".lr-ingest.io",".ingest.sentry.io"]},Yn=["authorization","x-forwarded-for","authorization","cookie","set-cookie","x-api-key","x-real-ip","remote-addr","forwarded","proxy-authorization","x-csrf-token","x-csrftoken","x-xsrf-token"],Zn=["password","secret","passwd","api_key","apikey","auth","credentials","mysql_pwd","privatekey","private_key","token"],ei=["/s/","/e/","/i/"]
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
numberOfChanges=e=>{var t,n,i,r,o,s,a,l
return(null!==(t=null===(n=e.removes)||void 0===n?void 0:n.length)&&void 0!==t?t:0)+(null!==(i=null===(r=e.attributes)||void 0===r?void 0:r.length)&&void 0!==i?i:0)+(null!==(o=null===(s=e.texts)||void 0===s?void 0:s.length)&&void 0!==o?o:0)+(null!==(a=null===(l=e.adds)||void 0===l?void 0:l.length)&&void 0!==a?a:0)}
throttleMutations=e=>{if(3!==e.type||0!==e.data.source)return e
const t=e.data,n=this.numberOfChanges(t)
t.attributes&&(t.attributes=t.attributes.filter((e=>{var t
const[n,i]=this.getNodeOrRelevantParent(e.id)
return 0!==this.mutationBuckets[n]&&(this.mutationBuckets[n]=null!==(t=this.mutationBuckets[n])&&void 0!==t?t:this.bucketSize,this.mutationBuckets[n]=Math.max(this.mutationBuckets[n]-1,0),0===this.mutationBuckets[n]&&(this.loggedTracker[n]||(this.loggedTracker[n]=!0,null===(r=(o=this.options).onBlockedNode)||void 0===r||r.call(o,n,i))),e)
var r,o})))
const i=this.numberOfChanges(t)
return 0!==i||n===i?e:void 0}}var oi=Uint8Array,si=Uint16Array,ai=Uint32Array,li=new oi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ci=new oi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ui=new oi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),di=function(e,t){for(var n=new si(31),i=0;i<31;++i)n[i]=t+=1<<e[i-1]
var r=new ai(n[30])
for(i=1;i<30;++i)for(var o=n[i];o<n[i+1];++o)r[o]=o-n[i]<<5|i
return[n,r]},hi=di(li,2),fi=hi[0],pi=hi[1]
fi[28]=258,pi[258]=28
for(var gi=di(ci,0)[1],_i=new si(32768),vi=0;vi<32768;++vi){var mi=(43690&vi)>>>1|(21845&vi)<<1
mi=(61680&(mi=(52428&mi)>>>2|(13107&mi)<<2))>>>4|(3855&mi)<<4,_i[vi]=((65280&mi)>>>8|(255&mi)<<8)>>>1}var yi=function(e,t,n){for(var i=e.length,r=0,o=new si(t);r<i;++r)++o[e[r]-1]
var s,a=new si(t)
for(r=0;r<t;++r)a[r]=a[r-1]+o[r-1]<<1
for(s=new si(i),r=0;r<i;++r)s[r]=_i[a[e[r]-1]++]>>>15-e[r]
return s},bi=new oi(288)
for(vi=0;vi<144;++vi)bi[vi]=8
for(vi=144;vi<256;++vi)bi[vi]=9
for(vi=256;vi<280;++vi)bi[vi]=7
for(vi=280;vi<288;++vi)bi[vi]=8
var wi=new oi(32)
for(vi=0;vi<32;++vi)wi[vi]=5
var ki=yi(bi,9),Si=yi(wi,5),Ei=function(e){return(e/8>>0)+(7&e&&1)},xi=function(e,t,n){(null==n||n>e.length)&&(n=e.length)
var i=new(e instanceof si?si:e instanceof ai?ai:oi)(n-t)
return i.set(e.subarray(t,n)),i},Pi=function(e,t,n){n<<=7&t
var i=t/8>>0
e[i]|=n,e[i+1]|=n>>>8},$i=function(e,t,n){n<<=7&t
var i=t/8>>0
e[i]|=n,e[i+1]|=n>>>8,e[i+2]|=n>>>16},Ti=function(e,t){for(var n=[],i=0;i<e.length;++i)e[i]&&n.push({s:i,f:e[i]})
var r=n.length,o=n.slice()
if(!r)return[new oi(0),0]
if(1==r){var s=new oi(n[0].s+1)
return s[n[0].s]=1,[s,1]}n.sort((function(e,t){return e.f-t.f})),n.push({s:-1,f:25001})
var a=n[0],l=n[1],c=0,u=1,d=2
for(n[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=n[n[c].f<n[d].f?c++:d++],l=n[c!=u&&n[c].f<n[d].f?c++:d++],n[u++]={s:-1,f:a.f+l.f,l:a,r:l}
var h=o[0].s
for(i=1;i<r;++i)o[i].s>h&&(h=o[i].s)
var f=new si(h+1),p=Ci(n[u-1],f,0)
if(p>t){i=0
var g=0,_=p-t,v=1<<_
for(o.sort((function(e,t){return f[t.s]-f[e.s]||e.f-t.f}));i<r;++i){var m=o[i].s
if(!(f[m]>t))break
g+=v-(1<<p-f[m]),f[m]=t}for(g>>>=_;g>0;){var y=o[i].s
f[y]<t?g-=1<<t-f[y]++-1:++i}for(;i>=0&&g;--i){var b=o[i].s
f[b]==t&&(--f[b],++g)}p=t}return[new oi(f),p]},Ci=function(e,t,n){return-1==e.s?Math.max(Ci(e.l,t,n+1),Ci(e.r,t,n+1)):t[e.s]=n},Ii=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new si(++t),i=0,r=e[0],o=1,s=function(e){n[i++]=e},a=1;a<=t;++a)if(e[a]==r&&a!=t)++o
else{if(!r&&o>2){for(;o>138;o-=138)s(32754)
o>2&&(s(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(s(r),--o;o>6;o-=6)s(8304)
o>2&&(s(o-3<<5|8208),o=0)}for(;o--;)s(r)
o=1,r=e[a]}return[n.subarray(0,i),t]},Li=function(e,t){for(var n=0,i=0;i<t.length;++i)n+=e[i]*t[i]
return n},Ri=function(e,t,n){var i=n.length,r=Ei(t+2)
e[r]=255&i,e[r+1]=i>>>8,e[r+2]=255^e[r],e[r+3]=255^e[r+1]
for(var o=0;o<i;++o)e[r+o+4]=n[o]
return 8*(r+4+i)},Fi=function(e,t,n,i,r,o,s,a,l,c,u){Pi(t,u++,n),++r[256]
for(var d=Ti(r,15),h=d[0],f=d[1],p=Ti(o,15),g=p[0],_=p[1],v=Ii(h),m=v[0],y=v[1],b=Ii(g),w=b[0],k=b[1],S=new si(19),E=0;E<m.length;++E)S[31&m[E]]++
for(E=0;E<w.length;++E)S[31&w[E]]++
for(var x=Ti(S,7),P=x[0],$=x[1],T=19;T>4&&!P[ui[T-1]];--T);var C,I,L,R,F=c+5<<3,O=Li(r,bi)+Li(o,wi)+s,A=Li(r,h)+Li(o,g)+s+14+3*T+Li(S,P)+(2*S[16]+3*S[17]+7*S[18])
if(F<=O&&F<=A)return Ri(t,u,e.subarray(l,l+c))
if(Pi(t,u,1+(A<O)),u+=2,A<O){C=yi(h,f),I=h,L=yi(g,_),R=g
var M=yi(P,$)
for(Pi(t,u,y-257),Pi(t,u+5,k-1),Pi(t,u+10,T-4),u+=14,E=0;E<T;++E)Pi(t,u+3*E,P[ui[E]])
u+=3*T
for(var N=[m,w],j=0;j<2;++j){var D=N[j]
for(E=0;E<D.length;++E){var B=31&D[E]
Pi(t,u,M[B]),u+=P[B],B>15&&(Pi(t,u,D[E]>>>5&127),u+=D[E]>>>12)}}}else C=ki,I=bi,L=Si,R=wi
for(E=0;E<a;++E)if(i[E]>255){B=i[E]>>>18&31,$i(t,u,C[B+257]),u+=I[B+257],B>7&&(Pi(t,u,i[E]>>>23&31),u+=li[B])
var H=31&i[E]
$i(t,u,L[H]),u+=R[H],H>3&&($i(t,u,i[E]>>>5&8191),u+=ci[H])}else $i(t,u,C[i[E]]),u+=I[i[E]]
return $i(t,u,C[256]),u+I[256]},Oi=new ai([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Ai=function(){for(var e=new ai(256),t=0;t<256;++t){for(var n=t,i=9;--i;)n=(1&n&&3988292384)^n>>>1
e[t]=n}return e}(),Mi=function(){var e=4294967295
return{p:function(t){for(var n=e,i=0;i<t.length;++i)n=Ai[255&n^t[i]]^n>>>8
e=n},d:function(){return 4294967295^e}}},Ni=function(e,t,n,i,r){return function(e,t,n,i,r,o){var s=e.length,a=new oi(i+s+5*(1+Math.floor(s/7e3))+r),l=a.subarray(i,a.length-r),c=0
if(!t||s<8)for(var u=0;u<=s;u+=65535){var d=u+65535
d<s?c=Ri(l,c,e.subarray(u,d)):(l[u]=o,c=Ri(l,c,e.subarray(u,s)))}else{for(var h=Oi[t-1],f=h>>>13,p=8191&h,g=(1<<n)-1,_=new si(32768),v=new si(g+1),m=Math.ceil(n/3),y=2*m,b=function(t){return(e[t]^e[t+1]<<m^e[t+2]<<y)&g},w=new ai(25e3),k=new si(288),S=new si(32),E=0,x=0,P=(u=0,0),$=0,T=0;u<s;++u){var C=b(u),I=32767&u,L=v[C]
if(_[I]=L,v[C]=I,$<=u){var R=s-u
if((E>7e3||P>24576)&&R>423){c=Fi(e,l,0,w,k,S,x,P,T,u-T,c),P=E=x=0,T=u
for(var F=0;F<286;++F)k[F]=0
for(F=0;F<30;++F)S[F]=0}var O=2,A=0,M=p,N=I-L&32767
if(R>2&&C==b(u-N))for(var j=Math.min(f,R)-1,D=Math.min(32767,u),B=Math.min(258,R);N<=D&&--M&&I!=L;){if(e[u+O]==e[u+O-N]){for(var H=0;H<B&&e[u+H]==e[u+H-N];++H);if(H>O){if(O=H,A=N,H>j)break
var q=Math.min(N,H-2),U=0
for(F=0;F<q;++F){var G=u-N+F+32768&32767,W=G-_[G]+32768&32767
W>U&&(U=W,L=G)}}}N+=(I=L)-(L=_[I])+32768&32767}if(A){w[P++]=268435456|pi[O]<<18|gi[A]
var z=31&pi[O],V=31&gi[A]
x+=li[z]+ci[V],++k[257+z],++S[V],$=u+O,++E}else w[P++]=e[u],++k[e[u]]}}c=Fi(e,l,o,w,k,S,x,P,T,u-T,c)}return xi(a,0,i+Ei(c)+r)}(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,n,i,!r)},ji=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},Di=function(e,t){var n=t.filename
if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:9==t.level?2:0,e[9]=3,0!=t.mtime&&ji(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8
for(var i=0;i<=n.length;++i)e[i+10]=n.charCodeAt(i)}},Bi=function(e){return 10+(e.filename&&e.filename.length+1||0)}
function Hi(e,t){void 0===t&&(t={})
var n=Mi(),i=e.length
n.p(e)
var r=Ni(e,t,Bi(t),8),o=r.length
return Di(r,t),ji(r,o-8,n.d()),ji(r,o-4,i),r}function qi(e,t){var n=e.length
if("undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e)
for(var i=new oi(e.length+(e.length>>>1)),r=0,o=function(e){i[r++]=e},s=0;s<n;++s){if(r+5>i.length){var a=new oi(r+8+(n-s<<1))
a.set(i),i=a}var l=e.charCodeAt(s)
l<128||t?o(l):l<2048?(o(192|l>>>6),o(128|63&l)):l>55295&&l<57344?(o(240|(l=65536+(1047552&l)|1023&e.charCodeAt(++s))>>>18),o(128|l>>>12&63),o(128|l>>>6&63),o(128|63&l)):(o(224|l>>>12),o(128|l>>>6&63),o(128|63&l))}return xi(i,0,r)}const Ui=[wn.MouseMove,wn.MouseInteraction,wn.Scroll,wn.ViewportResize,wn.Input,wn.TouchMove,wn.MediaInteraction,wn.Drag],Gi=["trigger_activated","trigger_pending","trigger_disabled"],Wi=e=>({rrwebMethod:e,enqueuedAt:Date.now(),attempt:1}),zi="[SessionRecording]"
function Vi(e){return function(e,t){for(var n="",i=0;i<e.length;){var r=e[i++]
n+=String.fromCharCode(r)}return n}(Hi(qi(JSON.stringify(e))))}function Qi(e){return e.type===bn.Custom&&"sessionIdle"===e.data.tag}class Ji{queuedRRWebEvents=[]
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
return null==E||null===(e=E.__PosthogExtensions__)||void 0===e||null===(t=e.rrweb)||void 0===t?void 0:t.record}get started(){return this._captureStarted}get sessionManager(){if(!this.instance.sessionManager)throw new Error(zi+" must be started with a valid sessionManager.")
return this.instance.sessionManager}get fullSnapshotIntervalMillis(){var e,t
return"trigger_pending"===this.urlTriggerStatus?6e4:null!==(e=null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.full_snapshot_interval_millis)&&void 0!==e?e:3e5}get isSampled(){const e=this.instance.get_property(Ee)
return H(e)?e:null}get sessionDuration(){var e,t
const n=null===(e=this.buffer)||void 0===e?void 0:e.data[(null===(t=this.buffer)||void 0===t?void 0:t.data.length)-1],{sessionStartTimestamp:i}=this.sessionManager.checkAndGetSessionAndWindowId(!0)
return n?n.timestamp-i:null}get isRecordingEnabled(){const e=!!this.instance.get_property(ve),t=!this.instance.config.disable_session_recording
return h&&e&&t}get isConsoleLogCaptureEnabled(){const e=!!this.instance.get_property(me),t=this.instance.config.enable_recording_console_log
return null!=t?t:e}get canvasRecording(){var e,t,n,i,r,o
const s=this.instance.config.session_recording.captureCanvas,a=this.instance.get_property(be),l=null!==(e=null!==(t=null==s?void 0:s.recordCanvas)&&void 0!==t?t:null==a?void 0:a.enabled)&&void 0!==e&&e,c=null!==(n=null!==(i=null==s?void 0:s.canvasFps)&&void 0!==i?i:null==a?void 0:a.fps)&&void 0!==n?n:0,u=null!==(r=null!==(o=null==s?void 0:s.canvasQuality)&&void 0!==o?o:null==a?void 0:a.quality)&&void 0!==r?r:0
return{enabled:l,fps:ii(c,0,12,"canvas recording fps"),quality:ii(u,0,1,"canvas recording quality")}}get networkPayloadCapture(){var e,t
const n=this.instance.get_property(ye),i={recordHeaders:null===(e=this.instance.config.session_recording)||void 0===e?void 0:e.recordHeaders,recordBody:null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.recordBody},r=(null==i?void 0:i.recordHeaders)||(null==n?void 0:n.recordHeaders),o=(null==i?void 0:i.recordBody)||(null==n?void 0:n.recordBody),s=F(this.instance.config.capture_performance)?this.instance.config.capture_performance.network_timing:this.instance.config.capture_performance,a=!!(H(s)?s:null==n?void 0:n.capturePerformance)
return r||o||a?{recordHeaders:r,recordBody:o,recordPerformance:a}:void 0}get sampleRate(){const e=this.instance.get_property(we)
return B(e)?e:null}get minimumDuration(){const e=this.instance.get_property(ke)
return B(e)?e:null}get status(){return this.receivedDecide?this.isRecordingEnabled?D(this._linkedFlag)||this._linkedFlagSeen?"trigger_pending"===this.urlTriggerStatus?"buffering":H(this.isSampled)?this.isSampled?"sampled":"disabled":"active":"buffering":"disabled":"buffering"}get urlTriggerStatus(){var e,t
if(this.receivedDecide&&0===this._urlTriggers.length)return"trigger_disabled"
const n=null===(e=this.instance)||void 0===e?void 0:e.get_property(Pe)
var i,r,o,s
return(null===(t=this.instance)||void 0===t?void 0:t.get_property(xe))!==this.sessionId?(null===(i=this.instance)||void 0===i||null===(r=i.persistence)||void 0===r||r.unregister(xe),null===(o=this.instance)||void 0===o||null===(s=o.persistence)||void 0===s||s.unregister(Pe),"trigger_pending"):Gi.includes(n)?n:"trigger_pending"}set urlTriggerStatus(e){var t,n
null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n||n.register({[xe]:this.sessionId,[Pe]:e})}constructor(e){if(this.instance=e,this._captureStarted=!1,this._endpoint="/s/",this.stopRrweb=void 0,this.receivedDecide=!1,!this.instance.sessionManager)throw G.error(zi+" started without valid sessionManager"),new Error(zi+" started without valid sessionManager. This is a bug.")
const{sessionId:t,windowId:n}=this.sessionManager.checkAndGetSessionAndWindowId()
this.sessionId=t,this.windowId=n,this.buffer=this.clearBuffer(),this.sessionIdleThresholdMilliseconds>=this.sessionManager.sessionTimeoutMs&&G.warn(zi+` session_idle_threshold_ms (${this.sessionIdleThresholdMilliseconds}) is greater than the session timeout (${this.sessionManager.sessionTimeoutMs}). Session will never be detected as idle`)}_onBeforeUnload=()=>{this._flushBuffer()}
_onOffline=()=>{this._tryAddCustomEvent("browser offline",{})}
_onOnline=()=>{this._tryAddCustomEvent("browser online",{})}
_onVisibilityChange=()=>{if(null!=m&&m.visibilityState){const e="window "+m.visibilityState
this._tryAddCustomEvent(e,{})}}
startIfEnabledOrStop(e){this.isRecordingEnabled?(this._startCapture(e),null==h||h.addEventListener("beforeunload",this._onBeforeUnload),null==h||h.addEventListener("offline",this._onOffline),null==h||h.addEventListener("online",this._onOnline),null==h||h.addEventListener("visibilitychange",this._onVisibilityChange),this._setupSampling(),D(this._removePageViewCaptureHook)&&(this._removePageViewCaptureHook=this.instance._addCaptureHook((e=>{try{if("$pageview"===e){const e=h?this._maskUrl(h.location.href):""
if(!e)return
this._tryAddCustomEvent("$pageview",{href:e})}}catch(e){G.error("Could not add $pageview to rrweb session",e)}}))),this._onSessionIdListener||(this._onSessionIdListener=this.sessionManager.onSessionId(((e,t,n)=>{var i,r,o,s
n&&(this._tryAddCustomEvent("$session_id_change",{sessionId:e,windowId:t,changeReason:n}),null===(i=this.instance)||void 0===i||null===(r=i.persistence)||void 0===r||r.unregister(xe),null===(o=this.instance)||void 0===o||null===(s=o.persistence)||void 0===s||s.unregister(Pe))})))):this.stopRecording()}stopRecording(){var e,t,n
this._captureStarted&&this.stopRrweb&&(this.stopRrweb(),this.stopRrweb=void 0,this._captureStarted=!1,null==h||h.removeEventListener("beforeunload",this._onBeforeUnload),null==h||h.removeEventListener("offline",this._onOffline),null==h||h.removeEventListener("online",this._onOnline),null==h||h.removeEventListener("visibilitychange",this._onVisibilityChange),this.clearBuffer(),clearInterval(this._fullSnapshotTimer),null===(e=this._removePageViewCaptureHook)||void 0===e||e.call(this),this._removePageViewCaptureHook=void 0,null===(t=this._onSessionIdListener)||void 0===t||t.call(this),this._onSessionIdListener=void 0,null===(n=this._samplingSessionListener)||void 0===n||n.call(this),this._samplingSessionListener=void 0,G.info(zi+" stopped"))}makeSamplingDecision(e){var t
const n=this.sessionId!==e,i=this.sampleRate
var r
if(!B(i))return void(null===(r=this.instance.persistence)||void 0===r||r.register({[Ee]:null}))
const o=this.isSampled
let s
const a=n||!H(o)
s=a?Math.random()<i:o,a&&(s?this._reportStarted("sampling"):G.warn(zi+` Sample rate (${i}) has determined that this sessionId (${e}) will not be sent to the server.`),this._tryAddCustomEvent("samplingDecisionMade",{sampleRate:i,isSampled:s})),null===(t=this.instance.persistence)||void 0===t||t.register({[Ee]:s})}afterDecideResponse(e){var t,n,i,r
if(this._persistDecideResponse(e),this._linkedFlag=(null===(t=e.sessionRecording)||void 0===t?void 0:t.linkedFlag)||null,null!==(n=e.sessionRecording)&&void 0!==n&&n.endpoint&&(this._endpoint=null===(r=e.sessionRecording)||void 0===r?void 0:r.endpoint),this._setupSampling(),!D(this._linkedFlag)&&!this._linkedFlagSeen){const e=M(this._linkedFlag)?this._linkedFlag:this._linkedFlag.flag,t=M(this._linkedFlag)?null:this._linkedFlag.variant
this.instance.onFeatureFlags(((n,i)=>{const r=F(i)&&e in i,o=t?i[e]===t:r
if(o){const n={linkedFlag:e,linkedVariant:t},i="linked flag matched"
G.info(zi+" "+i,n),this._tryAddCustomEvent(i,n),this._reportStarted("linked_flag_match")}this._linkedFlagSeen=o}))}null!==(i=e.sessionRecording)&&void 0!==i&&i.urlTriggers&&(this._urlTriggers=e.sessionRecording.urlTriggers),this.receivedDecide=!0,this.startIfEnabledOrStop()}_setupSampling(){B(this.sampleRate)&&D(this._samplingSessionListener)&&(this._samplingSessionListener=this.sessionManager.onSessionId((e=>{this.makeSamplingDecision(e)})))}_persistDecideResponse(e){if(this.instance.persistence){var t
const n=this.instance.persistence,i=()=>{var t,i,r,o,s,a,l
const c=null===(t=e.sessionRecording)||void 0===t?void 0:t.sampleRate,u=D(c)?null:parseFloat(c),d=null===(i=e.sessionRecording)||void 0===i?void 0:i.minimumDurationMilliseconds
n.register({[ve]:!!e.sessionRecording,[me]:null===(r=e.sessionRecording)||void 0===r?void 0:r.consoleLogRecordingEnabled,[ye]:{capturePerformance:e.capturePerformance,...null===(o=e.sessionRecording)||void 0===o?void 0:o.networkPayloadCapture},[be]:{enabled:null===(s=e.sessionRecording)||void 0===s?void 0:s.recordCanvas,fps:null===(a=e.sessionRecording)||void 0===a?void 0:a.canvasFps,quality:null===(l=e.sessionRecording)||void 0===l?void 0:l.canvasQuality},[we]:u,[ke]:A(d)?null:d})}
i(),null===(t=this._persistDecideOnSessionListener)||void 0===t||t.call(this),this._persistDecideOnSessionListener=this.sessionManager.onSessionId(i)}}log(e){var t
let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log"
null===(t=this.instance.sessionRecording)||void 0===t||t.onRRwebEmit({type:6,data:{plugin:"rrweb/console@1",payload:{level:n,trace:[],payload:[JSON.stringify(e)]}},timestamp:Date.now()})}_startCapture(e){var t,n
A(Object.assign)||A(Array.from)||(this._captureStarted||this.instance.config.disable_session_recording||this.instance.consent.isOptedOut())||(this._captureStarted=!0,this.sessionManager.checkAndGetSessionAndWindowId(),this.rrwebRecord?this._onScriptLoaded():null===(t=E.__PosthogExtensions__)||void 0===t||null===(n=t.loadExternalDependency)||void 0===n||n.call(t,this.instance,"recorder",(e=>{if(e)return G.error(zi+" could not load recorder",e)
this._onScriptLoaded()})),G.info(zi+" starting"),"active"===this.status&&this._reportStarted(e||"recording_initialized"))}isInteractiveEvent(e){var t
return 3===e.type&&-1!==Ui.indexOf(null===(t=e.data)||void 0===t?void 0:t.source)}_updateWindowAndSessionIds(e){const t=this.isInteractiveEvent(e)
t||this.isIdle||e.timestamp-this._lastActivityTimestamp>this.sessionIdleThresholdMilliseconds&&(this.isIdle=!0,clearInterval(this._fullSnapshotTimer),this._tryAddCustomEvent("sessionIdle",{eventTimestamp:e.timestamp,lastActivityTimestamp:this._lastActivityTimestamp,threshold:this.sessionIdleThresholdMilliseconds,bufferLength:this.buffer.data.length,bufferSize:this.buffer.size}),this._flushBuffer())
let n=!1
if(t&&(this._lastActivityTimestamp=e.timestamp,this.isIdle&&(this.isIdle=!1,this._tryAddCustomEvent("sessionNoLongerIdle",{reason:"user activity",type:e.type}),n=!0)),this.isIdle)return
const{windowId:i,sessionId:r}=this.sessionManager.checkAndGetSessionAndWindowId(!t,e.timestamp),o=this.sessionId!==r,s=this.windowId!==i
this.windowId=i,this.sessionId=r,o||s?(this.stopRecording(),this.startIfEnabledOrStop("session_id_changed")):n&&this._scheduleFullSnapshot()}_tryRRWebMethod(e){try{return e.rrwebMethod(),!0}catch(t){return this.queuedRRWebEvents.length<10?this.queuedRRWebEvents.push({enqueuedAt:e.enqueuedAt||Date.now(),attempt:e.attempt++,rrwebMethod:e.rrwebMethod}):G.warn(zi+" could not emit queued rrweb event.",t,e),!1}}_tryAddCustomEvent(e,t){return this._tryRRWebMethod(Wi((()=>this.rrwebRecord.addCustomEvent(e,t))))}_tryTakeFullSnapshot(){return this._tryRRWebMethod(Wi((()=>this.rrwebRecord.takeFullSnapshot())))}_onScriptLoaded(){var e
const t={blockClass:"ph-no-capture",blockSelector:void 0,ignoreClass:"ph-ignore-input",maskTextClass:"ph-mask",maskTextSelector:void 0,maskTextFn:void 0,maskAllInputs:!0,maskInputOptions:{password:!0},maskInputFn:void 0,slimDOMOptions:{},collectFonts:!1,inlineStylesheet:!0,recordCrossOriginIframes:!1},n=this.instance.config.session_recording
for(const[e,i]of Object.entries(n||{}))e in t&&("maskInputOptions"===e?t.maskInputOptions={password:!0,...i}:t[e]=i)
if(this.canvasRecording&&this.canvasRecording.enabled&&(t.recordCanvas=!0,t.sampling={canvas:this.canvasRecording.fps},t.dataURLOptions={type:"image/webp",quality:this.canvasRecording.quality}),!this.rrwebRecord)return void G.error(zi+"onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")
this.mutationRateLimiter=null!==(e=this.mutationRateLimiter)&&void 0!==e?e:new ri(this.rrwebRecord,{refillRate:this.instance.config.session_recording.__mutationRateLimiterRefillRate,bucketSize:this.instance.config.session_recording.__mutationRateLimiterBucketSize,onBlockedNode:(e,t)=>{const n=`Too many mutations on node '${e}'. Rate limiting. This could be due to SVG animations or something similar`
G.info(n,{node:t}),this.log(zi+" "+n,"warn")}})
const i=this._gatherRRWebPlugins()
this.stopRrweb=this.rrwebRecord({emit:e=>{this.onRRwebEmit(e)},plugins:i,...t}),this._lastActivityTimestamp=Date.now(),this.isIdle=!1,this._tryAddCustomEvent("$session_options",{sessionRecordingOptions:t,activePlugins:i.map((e=>null==e?void 0:e.name))}),this._tryAddCustomEvent("$posthog_config",{config:this.instance.config})}_scheduleFullSnapshot(){if(this._fullSnapshotTimer&&clearInterval(this._fullSnapshotTimer),this.isIdle)return
const e=this.fullSnapshotIntervalMillis
e&&(this._fullSnapshotTimer=setInterval((()=>{this._tryTakeFullSnapshot()}),e))}_gatherRRWebPlugins(){var e,t,n,i
const r=[],o=null===(e=E.__PosthogExtensions__)||void 0===e||null===(t=e.rrwebPlugins)||void 0===t?void 0:t.getRecordConsolePlugin
o&&this.isConsoleLogCaptureEnabled&&r.push(o())
const s=null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.rrwebPlugins)||void 0===i?void 0:i.getRecordNetworkPlugin
return this.networkPayloadCapture&&R(s)&&(!ft.includes(location.hostname)||this._forceAllowLocalhostNetworkCapture?r.push(s(((e,t)=>{const n={payloadSizeLimitBytes:Xn.payloadSizeLimitBytes,performanceEntryTypeToObserve:[...Xn.performanceEntryTypeToObserve],payloadHostDenyList:[...t.payloadHostDenyList||[],...Xn.payloadHostDenyList]},i=!1!==e.session_recording.recordHeaders&&t.recordHeaders,r=!1!==e.session_recording.recordBody&&t.recordBody,o=!1!==e.capture_performance&&t.recordPerformance,s=(e=>{var t
const n=Math.min(1e6,null!==(t=e.payloadSizeLimitBytes)&&void 0!==t?t:1e6)
return e=>(null!=e&&e.requestBody&&(e.requestBody=ti(e.requestBody,e.requestHeaders,n,"Request")),null!=e&&e.responseBody&&(e.responseBody=ti(e.responseBody,e.responseHeaders,n,"Response")),e)})(n),a=e=>s((e=>{const t=pt(e.name)
if(!(t&&t.pathname&&ei.some((e=>0===t.pathname.indexOf(e)))))return e})((e=>{const t=e.requestHeaders
return D(t)||J(Object.keys(null!=t?t:{}),(e=>{Yn.includes(e.toLowerCase())&&(t[e]=Kn)})),e})(e))),l=R(e.session_recording.maskNetworkRequestFn)
return l&&R(e.session_recording.maskCapturedNetworkRequestFn)&&G.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."),l&&(e.session_recording.maskCapturedNetworkRequestFn=t=>{const n=e.session_recording.maskNetworkRequestFn({url:t.name})
return{...t,name:null==n?void 0:n.url}}),n.maskRequestFn=R(e.session_recording.maskCapturedNetworkRequestFn)?t=>{var n,i,r
const o=a(t)
return o&&null!==(n=null===(i=(r=e.session_recording).maskCapturedNetworkRequestFn)||void 0===i?void 0:i.call(r,o))&&void 0!==n?n:void 0}:e=>function(e){if(!A(e))return e.requestBody=ni(e.requestBody,"Request"),e.responseBody=ni(e.responseBody,"Response"),e}(a(e)),{...Xn,...n,recordHeaders:i,recordBody:r,recordPerformance:o,recordInitialRequests:o}})(this.instance.config,this.networkPayloadCapture))):G.info(zi+" NetworkCapture not started because we are on localhost.")),r}onRRwebEmit(e){var t
if(this._processQueuedEvents(),!e||!F(e))return
if(e.type===bn.Meta){const t=this._maskUrl(e.data.href)
if(this._lastHref=t,!t)return
e.data.href=t}else this._pageViewFallBack()
this._checkUrlTrigger(),e.type===bn.FullSnapshot&&this._scheduleFullSnapshot(),e.type===bn.FullSnapshot&&"trigger_pending"===this.urlTriggerStatus&&this.clearBuffer()
const n=this.mutationRateLimiter?this.mutationRateLimiter.throttleMutations(e):e
if(!n)return
const i=function(e){const t=e
if(t&&F(t)&&6===t.type&&F(t.data)&&"rrweb/console@1"===t.data.plugin){t.data.payload.payload.length>10&&(t.data.payload.payload=t.data.payload.payload.slice(0,10),t.data.payload.payload.push("...[truncated]"))
const n=[]
for(let e=0;e<t.data.payload.payload.length;e++)t.data.payload.payload[e]&&t.data.payload.payload[e].length>2e3?n.push(t.data.payload.payload[e].slice(0,2e3)+"...[truncated]"):n.push(t.data.payload.payload[e])
return t.data.payload.payload=n,e}return e}(n)
if(this._updateWindowAndSessionIds(i),this.isIdle&&!Qi(i))return
if(Qi(i)){const e=i.data.payload
if(e){const t=e.lastActivityTimestamp,n=e.threshold
i.timestamp=t+n}}const r=null===(t=this.instance.config.session_recording.compress_events)||void 0===t||t?function(e){if(mn(e)<1024)return e
try{if(e.type===bn.FullSnapshot)return{...e,data:Vi(e.data),cv:"2024-10"}
if(e.type===bn.IncrementalSnapshot&&e.data.source===wn.Mutation)return{...e,cv:"2024-10",data:{...e.data,texts:Vi(e.data.texts),attributes:Vi(e.data.attributes),removes:Vi(e.data.removes),adds:Vi(e.data.adds)}}
if(e.type===bn.IncrementalSnapshot&&e.data.source===wn.StyleSheetRule)return{...e,cv:"2024-10",data:{...e.data,adds:Vi(e.data.adds),removes:Vi(e.data.removes)}}}catch(e){G.error(zi+" could not compress event - will use uncompressed event",e)}return e}(i):i,o={$snapshot_bytes:mn(r),$snapshot_data:r,$session_id:this.sessionId,$window_id:this.windowId}
"disabled"!==this.status?this._captureSnapshotBuffered(o):this.clearBuffer()}_pageViewFallBack(){if(this.instance.config.capture_pageview||!h)return
const e=this._maskUrl(h.location.href)
this._lastHref!==e&&(this._tryAddCustomEvent("$url_changed",{href:e}),this._lastHref=e)}_processQueuedEvents(){if(this.queuedRRWebEvents.length){const e=[...this.queuedRRWebEvents]
this.queuedRRWebEvents=[],e.forEach((e=>{Date.now()-e.enqueuedAt<=2e3&&this._tryRRWebMethod(e)}))}}_maskUrl(e){const t=this.instance.config.session_recording
if(t.maskNetworkRequestFn){var n
let i={url:e}
return i=t.maskNetworkRequestFn(i),null===(n=i)||void 0===n?void 0:n.url}return e}clearBuffer(){return this.buffer={size:0,data:[],sessionId:this.sessionId,windowId:this.windowId},this.buffer}_flushBuffer(){this.flushBufferTimer&&(clearTimeout(this.flushBufferTimer),this.flushBufferTimer=void 0)
const e=this.minimumDuration,t=this.sessionDuration,n=B(t)&&t>=0,i=B(e)&&n&&t<e
return"buffering"===this.status||i?(this.flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3),this.buffer):(this.buffer.data.length>0&&yn(this.buffer).forEach((e=>{this._captureSnapshot({$snapshot_bytes:e.size,$snapshot_data:e.data,$session_id:e.sessionId,$window_id:e.windowId})})),this.clearBuffer())}_captureSnapshotBuffered(e){var t
const n=2+((null===(t=this.buffer)||void 0===t?void 0:t.data.length)||0)
!this.isIdle&&(this.buffer.size+e.$snapshot_bytes+n>943718.4||this.buffer.sessionId!==this.sessionId)&&(this.buffer=this._flushBuffer()),this.buffer.size+=e.$snapshot_bytes,this.buffer.data.push(e.$snapshot_data),this.flushBufferTimer||this.isIdle||(this.flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3))}_captureSnapshot(e){this.instance.capture("$snapshot",e,{_url:this.instance.requestRouter.endpointFor("api",this._endpoint),_noTruncate:!0,_batchKey:"recordings",skip_client_rate_limiting:!0})}_checkUrlTrigger(){if(void 0===h||!h.location.href)return
const e=h.location.href
this._urlTriggers.some((t=>"regex"===t.matching&&new RegExp(t.url).test(e)))&&this._activateUrlTrigger()}_activateUrlTrigger(){"trigger_pending"===this.urlTriggerStatus&&(this.urlTriggerStatus="trigger_activated",this._tryAddCustomEvent("url trigger activated",{}),this._flushBuffer(),G.info(zi+" recording triggered by URL pattern match"))}overrideLinkedFlag(){this._linkedFlagSeen=!0,this._reportStarted("linked_flag_override")}overrideSampling(){var e
null===(e=this.instance.persistence)||void 0===e||e.register({[Ee]:!0}),this._reportStarted("sampling_override")}_reportStarted(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>!0)()&&this.instance.register_for_session({$session_recording_start_reason:e})}}class Ki{constructor(e){this.instance=e,this.instance.decideEndpointWasHit=this.instance._hasBootstrappedFeatureFlags()}call(){const e={token:this.instance.config.token,distinct_id:this.instance.get_distinct_id(),groups:this.instance.getGroups(),person_properties:this.instance.get_property(Ce),group_properties:this.instance.get_property(Ie),disable_flags:this.instance.config.advanced_disable_feature_flags||this.instance.config.advanced_disable_feature_flags_on_first_load||void 0}
this.instance._send_request({method:"POST",url:this.instance.requestRouter.endpointFor("api","/decide/?v=3"),data:e,compression:this.instance.config.disable_compression?void 0:se.Base64,timeout:this.instance.config.feature_flag_request_timeout_ms,callback:e=>this.parseDecideResponse(e.json)})}parseDecideResponse(e){this.instance.featureFlags.setReloadingPaused(!1),this.instance.featureFlags._startReloadTimer()
const t=!e
if(this.instance.config.advanced_disable_feature_flags_on_first_load||this.instance.config.advanced_disable_feature_flags||this.instance.featureFlags.receivedFeatureFlags(null!=e?e:{},t),t)G.error("Failed to fetch feature flags from PostHog.")
else{if(!m||!m.body)return G.info("document not ready yet, trying again in 500 milliseconds..."),void setTimeout((()=>{this.parseDecideResponse(e)}),500)
if(this.instance._afterDecideResponse(e),e.siteApps)if(this.instance.config.opt_in_site_apps)for(const{id:t,url:o}of e.siteApps){var n,i,r
E[`__$$ph_site_app_${t}`]=this.instance,null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=(r=n).loadSiteApp)||void 0===i||i.call(r,this.instance,o,(e=>{if(e)return G.error(`Error while initializing PostHog app with config id ${t}`,e)}))}else e.siteApps.length>0&&G.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')}}}const Xi=null!=h&&h.location?vt(h.location.hash,"__posthog")||vt(location.hash,"state"):null,Yi="_postHogToolbarParams"
var Zi
!function(e){e[e.UNINITIALIZED=0]="UNINITIALIZED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(Zi||(Zi={}))
class er{constructor(e){this.instance=e}setToolbarState(e){E.ph_toolbar_state=e}getToolbarState(){var e
return null!==(e=E.ph_toolbar_state)&&void 0!==e?e:Zi.UNINITIALIZED}maybeLoadToolbar(){var e,t
let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
if(!h||!m)return!1
n=null!==(e=n)&&void 0!==e?e:h.location,r=null!==(t=r)&&void 0!==t?t:h.history
try{if(!i){try{h.localStorage.setItem("test","test"),h.localStorage.removeItem("test")}catch{return!1}i=null==h?void 0:h.localStorage}const e=Xi||vt(n.hash,"__posthog")||vt(n.hash,"state")
let t
const o=e?Z((()=>JSON.parse(atob(decodeURIComponent(e)))))||Z((()=>JSON.parse(decodeURIComponent(e)))):null
return o&&"ph_authorize"===o.action?(t=o,t.source="url",t&&Object.keys(t).length>0&&(o.desiredHash?n.hash=o.desiredHash:r?r.replaceState(r.state,"",n.pathname+n.search):n.hash="")):(t=JSON.parse(i.getItem(Yi)||"{}"),t.source="localstorage",delete t.userIntent),!(!t.token||this.instance.config.token!==t.token||(this.loadToolbar(t),0))}catch{return!1}}_callLoadToolbar(e){(E.ph_load_toolbar||E.ph_load_editor)(e,this.instance)}loadToolbar(e){const t=!(null==m||!m.getElementById(He))
if(!h||t)return!1
const n="custom"===this.instance.requestRouter.region&&this.instance.config.advanced_disable_toolbar_metrics,i={token:this.instance.config.token,...e,apiURL:this.instance.requestRouter.endpointFor("ui"),...n?{instrument:!1}:{}}
if(h.localStorage.setItem(Yi,JSON.stringify({...i,source:void 0})),this.getToolbarState()===Zi.LOADED)this._callLoadToolbar(i)
else if(this.getToolbarState()===Zi.UNINITIALIZED){var r,o
this.setToolbarState(Zi.LOADING),null===(r=E.__PosthogExtensions__)||void 0===r||null===(o=r.loadExternalDependency)||void 0===o||o.call(r,this.instance,"toolbar",(e=>{if(e)return G.error("Failed to load toolbar",e),void this.setToolbarState(Zi.UNINITIALIZED)
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
let o=function(e){let t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&"
const r=[]
return J(e,(function(e,i){A(e)||A(i)||"undefined"===i||(t=encodeURIComponent((e=>e instanceof File)(e)?e.name:e.toString()),n=encodeURIComponent(i),r[r.length]=n+"="+t)})),r.join(i)}(r)
return o=o?(i?i+"&":"")+o:i,`${n}?${o}`},or=e=>{let{data:t,compression:n}=e
if(!t)return
if(n===se.GZipJS){const e=Hi(qi(JSON.stringify(t)),{mtime:0}),n=new Blob([e],{type:ir})
return{contentType:ir,body:n,estimatedSize:n.size}}if(n===se.Base64){const e=function(e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
let n,i,r,o,s,a,l,c,u=0,d=0,h=""
const f=[]
if(!e)return e
e=function(e){let t,n,i,r="",o=0
for(t=n=0,o=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,i=0;i<o;i++){const o=e.charCodeAt(i)
let s=null
o<128?n++:s=o>127&&o<2048?String.fromCharCode(o>>6|192,63&o|128):String.fromCharCode(o>>12|224,o>>6&63|128,63&o|128),j(s)||(n>t&&(r+=e.substring(t,n)),r+=s,t=n=i+1)}return n>t&&(r+=e.substring(t,e.length)),r}(e)
do{n=e.charCodeAt(u++),i=e.charCodeAt(u++),r=e.charCodeAt(u++),c=n<<16|i<<8|r,o=c>>18&63,s=c>>12&63,a=c>>6&63,l=63&c,f[d++]=t.charAt(o)+t.charAt(s)+t.charAt(a)+t.charAt(l)}while(u<e.length)
switch(h=f.join(""),e.length%3){case 1:h=h.slice(0,-2)+"=="
break
case 2:h=h.slice(0,-1)+"="}return h}(JSON.stringify(t)),n=(e=>"data="+encodeURIComponent("string"==typeof e?e:JSON.stringify(e)))(e)
return{contentType:"application/x-www-form-urlencoded",body:n,estimatedSize:new Blob([n]).size}}const i=JSON.stringify(t)
return{contentType:"application/json",body:i,estimatedSize:new Blob([i]).size}},sr=[]
w&&sr.push({transport:"XHR",method:e=>{var t
const n=new w
n.open(e.method||"GET",e.url,!0)
const{contentType:i,body:r}=null!==(t=or(e))&&void 0!==t?t:{}
J(e.headers,(function(e,t){n.setRequestHeader(t,e)})),i&&n.setRequestHeader("Content-Type",i),e.timeout&&(n.timeout=e.timeout),n.withCredentials=!0,n.onreadystatechange=()=>{if(4===n.readyState){var t
const i={statusCode:n.status,text:n.responseText}
if(200===n.status)try{i.json=JSON.parse(n.responseText)}catch{}null===(t=e.callback)||void 0===t||t.call(e,i)}},n.send(r)}}),b&&sr.push({transport:"fetch",method:e=>{var t,n
const{contentType:i,body:r,estimatedSize:o}=null!==(t=or(e))&&void 0!==t?t:{},s=new Headers
J(e.headers,(function(e,t){s.append(t,e)})),i&&s.append("Content-Type",i)
const a=e.url
let l=null
if(k){const t=new k
l={signal:t.signal,timeout:setTimeout((()=>t.abort()),e.timeout)}}b(a,{method:(null==e?void 0:e.method)||"GET",headers:s,keepalive:"POST"===e.method&&(o||0)<52428.8,body:r,signal:null===(n=l)||void 0===n?void 0:n.signal}).then((t=>t.text().then((n=>{var i
const r={statusCode:t.status,text:n}
if(200===t.status)try{r.json=JSON.parse(n)}catch(e){G.error(e)}null===(i=e.callback)||void 0===i||i.call(e,r)})))).catch((t=>{var n
G.error(t),null===(n=e.callback)||void 0===n||n.call(e,{statusCode:0,text:t})})).finally((()=>l?clearTimeout(l.timeout):null))}}),null!=v&&v.sendBeacon&&sr.push({transport:"sendBeacon",method:e=>{const t=rr(e.url,{beacon:"1"})
try{var n
const{contentType:i,body:r}=null!==(n=or(e))&&void 0!==n?n:{},o="string"==typeof r?new Blob([r],{type:i}):r
v.sendBeacon(t,o)}catch{}}})
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
const o=e.persistence_name||e.token,s=e.session_idle_timeout_seconds||1800
if(this._sessionTimeoutMs=1e3*ii(s,60,1800,"session_idle_timeout_seconds"),this._window_id_storage_key="ph_"+o+"_window_id",this._primary_window_exists_storage_key="ph_"+o+"_primary_window_exists",this._canUseSessionStorage()){const e=ht.parse(this._window_id_storage_key),t=ht.parse(this._primary_window_exists_storage_key)
e&&!t?this._windowId=e:ht.remove(this._window_id_storage_key),ht.set(this._primary_window_exists_storage_key,!0)}if(null!==(r=this.config.bootstrap)&&void 0!==r&&r.sessionID)try{const e=(e=>{const t=this.config.bootstrap.sessionID.replace(/-/g,"")
if(32!==t.length)throw new Error("Not a valid UUID")
if("7"!==t[12])throw new Error("Not a UUIDv7")
return parseInt(t.substring(0,12),16)})()
this._setSessionId(this.config.bootstrap.sessionID,(new Date).getTime(),e)}catch(e){G.error("Invalid sessionID in bootstrap",e)}this._listenToReloadWindow()}get sessionTimeoutMs(){return this._sessionTimeoutMs}onSessionId(e){return A(this._sessionIdChangedHandlers)&&(this._sessionIdChangedHandlers=[]),this._sessionIdChangedHandlers.push(e),this._sessionId&&e(this._sessionId,this._windowId),()=>{this._sessionIdChangedHandlers=this._sessionIdChangedHandlers.filter((t=>t!==e))}}_canUseSessionStorage(){return"memory"!==this.config.persistence&&!this.persistence.disabled&&ht.is_supported()}_setWindowId(e){e!==this._windowId&&(this._windowId=e,this._canUseSessionStorage()&&ht.set(this._window_id_storage_key,e))}_getWindowId(){return this._windowId?this._windowId:this._canUseSessionStorage()?ht.parse(this._window_id_storage_key):null}_setSessionId(e,t,n){e===this._sessionId&&t===this._sessionActivityTimestamp&&n===this._sessionStartTimestamp||(this._sessionStartTimestamp=n,this._sessionActivityTimestamp=t,this._sessionId=e,this.persistence.register({[Se]:[t,e,n]}))}_getSessionId(){if(this._sessionId&&this._sessionActivityTimestamp&&this._sessionStartTimestamp)return[this._sessionActivityTimestamp,this._sessionId,this._sessionStartTimestamp]
const e=this.persistence.props[Se]
return L(e)&&2===e.length&&e.push(e[0]),e||[0,null,0]}resetSessionId(){this._setSessionId(null,null,null)}_listenToReloadWindow(){null==h||h.addEventListener("beforeunload",(()=>{this._canUseSessionStorage()&&ht.remove(this._primary_window_exists_storage_key)}))}checkAndGetSessionAndWindowId(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
const t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:null)||(new Date).getTime()
let[n,i,r]=this._getSessionId(),o=this._getWindowId()
const s=B(r)&&r>0&&Math.abs(t-r)>864e5
let a=!1
const l=!i,c=!e&&Math.abs(t-n)>this.sessionTimeoutMs
l||c||s?(i=this._sessionIdGenerator(),o=this._windowIdGenerator(),G.info("[SessionId] new session ID generated",{sessionId:i,windowId:o,changeReason:{noSessionId:l,activityTimeout:c,sessionPastMaximumLength:s}}),r=t,a=!0):o||(o=this._windowIdGenerator(),a=!0)
const u=0===n||!e||s?t:n,d=0===r?(new Date).getTime():r
return this._setWindowId(o),this._setSessionId(i,u,d),a&&this._sessionIdChangedHandlers.forEach((e=>e(i,o,a?{noSessionId:l,activityTimeout:c,sessionPastMaximumLength:s}:void 0))),{sessionId:i,windowId:o,sessionStartTimestamp:d,changeReason:a?{noSessionId:l,activityTimeout:c,sessionPastMaximumLength:s}:void 0,lastActivityTimestamp:n}}}let cr
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
return o=>{var s,a,l,c,u
if("*"!==r&&!r.includes(o.level)||!e.__loaded)return o
o.tags||(o.tags={})
const d=e.requestRouter.endpointFor("ui",`/project/${e.config.token}/person/${e.get_distinct_id()}`)
o.tags["PostHog Person URL"]=d,e.sessionRecordingStarted()&&(o.tags["PostHog Recording URL"]=e.get_session_replay_url({withTimestamp:!0}))
const h=(null===(s=o.exception)||void 0===s?void 0:s.values)||[],f={$exception_message:(null===(a=h[0])||void 0===a?void 0:a.value)||o.message,$exception_type:null===(l=h[0])||void 0===l?void 0:l.type,$exception_personURL:d,$exception_level:o.level,$exception_list:h,$sentry_event_id:o.event_id,$sentry_exception:o.exception,$sentry_exception_message:(null===(c=h[0])||void 0===c?void 0:c.value)||o.message,$sentry_exception_type:null===(u=h[0])||void 0===u?void 0:u.type,$sentry_tags:o.tags,$level:o.level}
return t&&n&&(f.$sentry_url=(i||"https://sentry.io/organizations/")+t+"/issues/?project="+n+"&query="+o.event_id),e.exceptions.sendExceptionEvent(f),o}}class pr{constructor(e,t,n,i,r){this.name=hr,this.setupOnce=function(o){o(fr(e,{organization:t,projectId:n,prefix:i,severityAllowList:r}))}}}class gr{constructor(e){this._instance=e}doPageView(e){var t
const n=this._previousPageViewProperties(e)
return this._currentPath=null!==(t=null==h?void 0:h.location.pathname)&&void 0!==t?t:"",this._instance.scrollManager.resetContext(),this._prevPageviewTimestamp=e,n}doPageLeave(e){return this._previousPageViewProperties(e)}_previousPageViewProperties(e){const t=this._currentPath,n=this._prevPageviewTimestamp,i=this._instance.scrollManager.getContext()
if(!n)return{}
let r={}
if(i){let{maxScrollHeight:e,lastScrollY:t,maxScrollY:n,maxContentHeight:o,lastContentY:s,maxContentY:a}=i
A(e)||A(t)||A(n)||A(o)||A(s)||A(a)||(e=Math.ceil(e),t=Math.ceil(t),n=Math.ceil(n),o=Math.ceil(o),s=Math.ceil(s),a=Math.ceil(a),r={$prev_pageview_last_scroll:t,$prev_pageview_last_scroll_percentage:e<=1?1:ii(t/e,0,1),$prev_pageview_max_scroll:n,$prev_pageview_max_scroll_percentage:e<=1?1:ii(n/e,0,1),$prev_pageview_last_content:s,$prev_pageview_last_content_percentage:o<=1?1:ii(s/o,0,1),$prev_pageview_max_content:a,$prev_pageview_max_content_percentage:o<=1?1:ii(a/o,0,1)})}return t&&(r.$prev_pageview_pathname=t),n&&(r.$prev_pageview_duration=(e.getTime()-n.getTime())/1e3),r}}let _r,vr,mr
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
this.actionMatcher._addActionHook(e)}t.forEach((e=>{var t,n,i,r,o,s,a,l,c,u
e.conditions&&null!==(t=e.conditions)&&void 0!==t&&t.actions&&null!==(n=e.conditions)&&void 0!==n&&null!==(i=n.actions)&&void 0!==i&&i.values&&(null===(r=e.conditions)||void 0===r||null===(o=r.actions)||void 0===o||null===(s=o.values)||void 0===s?void 0:s.length)>0&&(null===(a=this.actionMatcher)||void 0===a||a.register(e.conditions.actions.values),null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c||null===(u=c.values)||void 0===u||u.forEach((t=>{if(t&&t.name){const n=this.actionToSurveys.get(t.name)
n&&n.push(e.id),this.actionToSurveys.set(t.name,n||[e.id])}})))}))}}setupEventBasedSurveys(e){var t
0!==e.filter((e=>{var t,n,i,r
return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(i=n.events)||void 0===i||null===(r=i.values)||void 0===r?void 0:r.length)>0})).length&&(null===(t=this.instance)||void 0===t||t._addCaptureHook(((e,t)=>{this.onEvent(e,t)})),e.forEach((e=>{var t,n,i
null===(t=e.conditions)||void 0===t||null===(n=t.events)||void 0===n||null===(i=n.values)||void 0===i||i.forEach((t=>{if(t&&t.name){const n=this.eventToSurveys.get(t.name)
n&&n.push(e.id),this.eventToSurveys.set(t.name,n||[e.id])}}))})))}onEvent(e,t){var n,i
const r=(null===(n=this.instance)||void 0===n||null===(i=n.persistence)||void 0===i?void 0:i.props[Re])||[]
if(wr.SURVEY_SHOWN_EVENT_NAME==e&&t&&r.length>0){var o
const e=null==t||null===(o=t.properties)||void 0===o?void 0:o.$survey_id
if(e){const t=r.indexOf(e)
t>=0&&(r.splice(t,1),this._updateActivatedSurveys(r))}}else this.eventToSurveys.has(e)&&this._updateActivatedSurveys(r.concat(this.eventToSurveys.get(e)||[]))}onAction(e){var t,n
const i=(null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n?void 0:n.props[Re])||[]
this.actionToSurveys.has(e)&&this._updateActivatedSurveys(i.concat(this.actionToSurveys.get(e)||[]))}_updateActivatedSurveys(e){var t,n
null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n||n.register({[Re]:[...new Set(e)]})}getSurveys(){var e,t
return(null===(e=this.instance)||void 0===e||null===(t=e.persistence)||void 0===t?void 0:t.props[Re])||[]}getEventToSurveys(){return this.eventToSurveys}_getActionMatcher(){return this.actionMatcher}}var kr,Sr,Er,xr,Pr,$r,Tr,Cr,Ir={},Lr=[],Rr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Fr=Array.isArray
function Or(e,t){for(var n in t)e[n]=t[n]
return e}function Ar(e){var t=e.parentNode
t&&t.removeChild(e)}function Mr(e,t,n,i,r){var o={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++Er:r,__i:-1,__u:0}
return null==r&&null!=Sr.vnode&&Sr.vnode(o),o}function Nr(e){return e.children}function jr(e,t){this.props=e,this.context=t}function Dr(e,t){if(null==t)return e.__?Dr(e.__,e.__i+1):null
for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e
return"function"==typeof e.type?Dr(e):null}function Br(e){var t,n
if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e
break}return Br(e)}}function Hr(e){(!e.__d&&(e.__d=!0)&&xr.push(e)&&!qr.__r++||Pr!==Sr.debounceRendering)&&((Pr=Sr.debounceRendering)||$r)(qr)}function qr(){var e,t,n,i,r,o,s,a,l
for(xr.sort(Tr);e=xr.shift();)e.__d&&(t=xr.length,i=void 0,o=(r=(n=e).__v).__e,a=[],l=[],(s=n.__P)&&((i=Or({},r)).__v=r.__v+1,Sr.vnode&&Sr.vnode(i),Kr(s,i,r,n.__n,void 0!==s.ownerSVGElement,32&r.__u?[o]:null,a,null==o?Dr(r):o,!!(32&r.__u),l),i.__.__k[i.__i]=i,Xr(a,i,l),i.__e!=o&&Br(i)),xr.length>t&&xr.sort(Tr))
qr.__r=0}function Ur(e,t,n,i,r,o,s,a,l,c,u){var d,h,f,p,g,_=i&&i.__k||Lr,v=t.length
for(n.__d=l,function(e,t,n){var i,r,o,s,a,l=t.length,c=n.length,u=c,d=0
for(e.__k=[],i=0;i<l;i++)null!=(r=e.__k[i]=null==(r=t[i])||"boolean"==typeof r||"function"==typeof r?null:"string"==typeof r||"number"==typeof r||"bigint"==typeof r||r.constructor==String?Mr(null,r,null,null,r):Fr(r)?Mr(Nr,{children:r},null,null,null):void 0===r.constructor&&r.__b>0?Mr(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)?(r.__=e,r.__b=e.__b+1,a=Wr(r,n,s=i+d,u),r.__i=a,o=null,-1!==a&&(u--,(o=n[a])&&(o.__u|=131072)),null==o||null===o.__v?(-1==a&&d--,"function"!=typeof r.type&&(r.__u|=65536)):a!==s&&(a===s+1?d++:a>s?u>l-s?d+=a-s:d--:d=a<s&&a==s-1?a-s:0,a!==i+d&&(r.__u|=65536))):(o=n[i])&&null==o.key&&o.__e&&(o.__e==e.__d&&(e.__d=Dr(o)),Zr(o,o,!1),n[i]=null,u--)
if(u)for(i=0;i<c;i++)null!=(o=n[i])&&0==(131072&o.__u)&&(o.__e==e.__d&&(e.__d=Dr(o)),Zr(o,o))}(n,t,_),l=n.__d,d=0;d<v;d++)null!=(f=n.__k[d])&&"boolean"!=typeof f&&"function"!=typeof f&&(h=-1===f.__i?Ir:_[f.__i]||Ir,f.__i=d,Kr(e,f,h,r,o,s,a,l,c,u),p=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&Yr(h.ref,null,f),u.push(f.ref,f.__c||p,f)),null==g&&null!=p&&(g=p),65536&f.__u||h.__k===f.__k?l=Gr(f,l,e):"function"==typeof f.type&&void 0!==f.__d?l=f.__d:p&&(l=p.nextSibling),f.__d=void 0,f.__u&=-196609)
n.__d=l,n.__e=g}function Gr(e,t,n){var i,r
if("function"==typeof e.type){for(i=e.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=e,t=Gr(i[r],t,n))
return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function Wr(e,t,n,i){var r=e.key,o=e.type,s=n-1,a=n+1,l=t[n]
if(null===l||l&&r==l.key&&o===l.type)return n
if(i>(null!=l&&0==(131072&l.__u)?1:0))for(;s>=0||a<t.length;){if(s>=0){if((l=t[s])&&0==(131072&l.__u)&&r==l.key&&o===l.type)return s
s--}if(a<t.length){if((l=t[a])&&0==(131072&l.__u)&&r==l.key&&o===l.type)return a
a++}}return-1}function zr(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||Rr.test(t)?n:n+"px"}function Vr(e,t,n,i,r){var o
e:if("style"===t)if("string"==typeof n)e.style.cssText=n
else{if("string"==typeof i&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||zr(e.style,t,"")
if(n)for(t in n)i&&n[t]===i[t]||zr(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?i?n.u=i.u:(n.u=Date.now(),e.addEventListener(t,o?Jr:Qr,o)):e.removeEventListener(t,o?Jr:Qr,o)
else{if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s")
else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&"role"!==t&&t in e)try{e[t]=null==n?"":n
break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function Qr(e){var t=this.l[e.type+!1]
if(e.t){if(e.t<=t.u)return}else e.t=Date.now()
return t(Sr.event?Sr.event(e):e)}function Jr(e){return this.l[e.type+!0](Sr.event?Sr.event(e):e)}function Kr(e,t,n,i,r,o,s,a,l,c){var u,d,h,f,p,g,_,v,m,y,b,w,k,S,E,x=t.type
if(void 0!==t.constructor)return null
128&n.__u&&(l=!!(32&n.__u),o=[a=t.__e=n.__e]),(u=Sr.__b)&&u(t)
e:if("function"==typeof x)try{if(v=t.props,m=(u=x.contextType)&&i[u.__c],y=u?m?m.props.value:u.__:i,n.__c?_=(d=t.__c=n.__c).__=d.__E:("prototype"in x&&x.prototype.render?t.__c=d=new x(v,y):(t.__c=d=new jr(v,y),d.constructor=x,d.render=eo),m&&m.sub(d),d.props=v,d.state||(d.state={}),d.context=y,d.__n=i,h=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=x.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=Or({},d.__s)),Or(d.__s,x.getDerivedStateFromProps(v,d.__s))),f=d.props,p=d.state,d.__v=t,h)null==x.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount)
else{if(null==x.getDerivedStateFromProps&&v!==f&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(v,y),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(v,d.__s,y)||t.__v===n.__v)){for(t.__v!==n.__v&&(d.props=v,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),b=0;b<d._sb.length;b++)d.__h.push(d._sb[b])
d._sb=[],d.__h.length&&s.push(d)
break e}null!=d.componentWillUpdate&&d.componentWillUpdate(v,d.__s,y),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(f,p,g)}))}if(d.context=y,d.props=v,d.__P=e,d.__e=!1,w=Sr.__r,k=0,"prototype"in x&&x.prototype.render){for(d.state=d.__s,d.__d=!1,w&&w(t),u=d.render(d.props,d.state,d.context),S=0;S<d._sb.length;S++)d.__h.push(d._sb[S])
d._sb=[]}else do{d.__d=!1,w&&w(t),u=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++k<25)
d.state=d.__s,null!=d.getChildContext&&(i=Or(Or({},i),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(g=d.getSnapshotBeforeUpdate(f,p)),Ur(e,Fr(E=null!=u&&u.type===Nr&&null==u.key?u.props.children:u)?E:[E],t,n,i,r,o,s,a,l,c),d.base=t.__e,t.__u&=-161,d.__h.length&&s.push(d),_&&(d.__E=d.__=null)}catch(e){t.__v=null,l||null!=o?(t.__e=a,t.__u|=l?160:32,o[o.indexOf(a)]=null):(t.__e=n.__e,t.__k=n.__k),Sr.__e(e,t,n)}else null==o&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=function(e,t,n,i,r,o,s,a,l){var c,u,d,h,f,p,g,_=n.props,v=t.props,m=t.type
if("svg"===m&&(r=!0),null!=o)for(c=0;c<o.length;c++)if((f=o[c])&&"setAttribute"in f==!!m&&(m?f.localName===m:3===f.nodeType)){e=f,o[c]=null
break}if(null==e){if(null===m)return document.createTextNode(v)
e=r?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,v.is&&v),o=null,a=!1}if(null===m)_===v||a&&e.data===v||(e.data=v)
else{if(o=o&&kr.call(e.childNodes),_=n.props||Ir,!a&&null!=o)for(_={},c=0;c<e.attributes.length;c++)_[(f=e.attributes[c]).name]=f.value
for(c in _)f=_[c],"children"==c||("dangerouslySetInnerHTML"==c?d=f:"key"===c||c in v||Vr(e,c,null,f,r))
for(c in v)f=v[c],"children"==c?h=f:"dangerouslySetInnerHTML"==c?u=f:"value"==c?p=f:"checked"==c?g=f:"key"===c||a&&"function"!=typeof f||_[c]===f||Vr(e,c,f,_[c],r)
if(u)a||d&&(u.__html===d.__html||u.__html===e.innerHTML)||(e.innerHTML=u.__html),t.__k=[]
else if(d&&(e.innerHTML=""),Ur(e,Fr(h)?h:[h],t,n,i,r&&"foreignObject"!==m,o,s,o?o[0]:n.__k&&Dr(n,0),a,l),null!=o)for(c=o.length;c--;)null!=o[c]&&Ar(o[c])
a||(c="value",void 0!==p&&(p!==e[c]||"progress"===m&&!p||"option"===m&&p!==_[c])&&Vr(e,c,p,_[c],!1),c="checked",void 0!==g&&g!==e[c]&&Vr(e,c,g,_[c],!1))}return e}(n.__e,t,n,i,r,o,s,l,c);(u=Sr.diffed)&&u(t)}function Xr(e,t,n){t.__d=void 0
for(var i=0;i<n.length;i++)Yr(n[i],n[++i],n[++i])
Sr.__c&&Sr.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){Sr.__e(e,t.__v)}}))}function Yr(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){Sr.__e(e,n)}}function Zr(e,t,n){var i,r
if(Sr.unmount&&Sr.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Yr(i,null,t)),null!=(i=e.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){Sr.__e(e,t)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(r=0;r<i.length;r++)i[r]&&Zr(i[r],t,n||"function"!=typeof e.type)
n||null==e.__e||Ar(e.__e),e.__=e.__e=e.__d=void 0}function eo(e,t,n){return this.constructor(e,n)}kr=Lr.slice,Sr={__e:function(e,t,n,i){for(var r,o,s;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&null!=o.getDerivedStateFromError&&(r.setState(o.getDerivedStateFromError(e)),s=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,i||{}),s=r.__d),s)return r.__E=r}catch(t){e=t}throw e}},Er=0,jr.prototype.setState=function(e,t){var n
n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=Or({},this.state),"function"==typeof e&&(e=e(Or({},n),this.props)),e&&Or(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),Hr(this))},jr.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Hr(this))},jr.prototype.render=Nr,xr=[],$r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Tr=function(e,t){return e.__v.__b-t.__v.__b},qr.__r=0,Cr=0,function(e,t){var n={__c:t="__cC"+Cr++,__:{isPreviewMode:!1,previewPageIndex:0,handleCloseSurveyPopup:()=>{},isPopup:!0},Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,i
return this.getChildContext||(n=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some((function(e){e.__e=!0,Hr(e)}))},this.sub=function(e){n.push(e)
var t=e.componentWillUnmount
e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}}
n.Provider.__=n.Consumer.contextType=n}()
const to="[Surveys]",no={icontains:e=>!!h&&h.location.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:e=>!!h&&-1===h.location.href.toLowerCase().indexOf(e.toLowerCase()),regex:e=>!!h&&gt(h.location.href,e),not_regex:e=>!!h&&!gt(h.location.href,e),exact:e=>(null==h?void 0:h.location.href)===e,is_not:e=>(null==h?void 0:h.location.href)!==e}
class io{constructor(e){this.instance=e,this._surveyEventReceiver=null}afterDecideResponse(e){this._decideServerResponse=!!e.surveys,this.loadIfEnabled()}reset(){localStorage.removeItem("lastSeenSurveyDate")
const e=(()=>{const e=[]
for(let t=0;t<localStorage.length;t++){const n=localStorage.key(t)
null!=n&&n.startsWith("seenSurvey_")&&e.push(n)}return e})()
e.forEach((e=>localStorage.removeItem(e)))}loadIfEnabled(){var e
const t=null==E||null===(e=E.__PosthogExtensions__)||void 0===e?void 0:e.generateSurveys
var n,i
this.instance.config.disable_surveys||!this._decideServerResponse||t||(null==this._surveyEventReceiver&&(this._surveyEventReceiver=new wr(this.instance)),null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"surveys",(e=>{var t,n
if(e)return G.error(to,"Could not load surveys script",e)
this._surveyManager=null===(t=E.__PosthogExtensions__)||void 0===t||null===(n=t.generateSurveys)||void 0===n?void 0:n.call(t,this.instance)})))}getSurveys(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(this.instance.config.disable_surveys)return e([])
null==this._surveyEventReceiver&&(this._surveyEventReceiver=new wr(this.instance))
const n=this.instance.get_property(Le)
if(n&&!t)return e(n)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api",`/api/surveys/?token=${this.instance.config.token}`),method:"GET",transport:"XHR",callback:t=>{var n
if(200!==t.statusCode||!t.json)return e([])
const i=t.json.surveys||[],r=i.filter((e=>{var t,n,i,r,o,s,a,l,c,u,d,h
return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(i=n.events)||void 0===i?void 0:i.values)&&(null===(r=e.conditions)||void 0===r||null===(o=r.events)||void 0===o||null===(s=o.values)||void 0===s?void 0:s.length)>0||(null===(a=e.conditions)||void 0===a?void 0:a.actions)&&(null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c?void 0:c.values)&&(null===(u=e.conditions)||void 0===u||null===(d=u.actions)||void 0===d||null===(h=d.values)||void 0===h?void 0:h.length)>0}))
var o
return r.length>0&&(null===(o=this._surveyEventReceiver)||void 0===o||o.register(r)),null===(n=this.instance.persistence)||void 0===n||n.register({[Le]:i}),e(i)}})}getActiveMatchingSurveys(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.getSurveys((t=>{var n
const i=t.filter((e=>!(!e.start_date||e.end_date))).filter((e=>{var t,n,i,r
if(!e.conditions)return!0
const o=null===(t=e.conditions)||void 0===t||!t.url||no[null!==(n=null===(i=e.conditions)||void 0===i?void 0:i.urlMatchType)&&void 0!==n?n:"icontains"](e.conditions.url),s=null===(r=e.conditions)||void 0===r||!r.selector||(null==m?void 0:m.querySelector(e.conditions.selector))
return o&&s})),r=null===(n=this._surveyEventReceiver)||void 0===n?void 0:n.getSurveys(),o=i.filter((e=>{var t,n,i,o,s,a,l,c,u,d
if(!e.linked_flag_key&&!e.targeting_flag_key&&!e.internal_targeting_flag_key)return!0
const h=!e.linked_flag_key||this.instance.featureFlags.isFeatureEnabled(e.linked_flag_key),f=!e.targeting_flag_key||this.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key),p=(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(i=n.events)||void 0===i?void 0:i.values)&&(null===(o=e.conditions)||void 0===o||null===(s=o.events)||void 0===s?void 0:s.values.length)>0,g=(null===(a=e.conditions)||void 0===a?void 0:a.actions)&&(null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c?void 0:c.values)&&(null===(u=e.conditions)||void 0===u||null===(d=u.actions)||void 0===d?void 0:d.values.length)>0,_=!p&&!g||(null==r?void 0:r.includes(e.id)),v=this._canActivateRepeatedly(e),m=!(e.internal_targeting_flag_key&&!v)||this.instance.featureFlags.isFeatureEnabled(e.internal_targeting_flag_key)
return h&&f&&m&&_}))
return e(o)}),t)}getNextSurveyStep(e,t,n){var i
const r=e.questions[t],o=t+1
if(null===(i=r.branching)||void 0===i||!i.type)return t===e.questions.length-1?mr.End:o
if(r.branching.type===mr.End)return mr.End
if(r.branching.type===mr.SpecificQuestion){if(Number.isInteger(r.branching.index))return r.branching.index}else if(r.branching.type===mr.ResponseBased){if(r.type===vr.SingleChoice){var s,a
const e=r.choices.indexOf(`${n}`)
if(null!==(s=r.branching)&&void 0!==s&&null!==(a=s.responseValues)&&void 0!==a&&a.hasOwnProperty(e)){const t=r.branching.responseValues[e]
return Number.isInteger(t)?t:t===mr.End?mr.End:o}}else if(r.type===vr.Rating){var l,c
if("number"!=typeof n||!Number.isInteger(n))throw new Error("The response type must be an integer")
const e=function(e,t){if(3===t){if(e<1||e>3)throw new Error("The response must be in range 1-3")
return 1===e?"negative":2===e?"neutral":"positive"}if(5===t){if(e<1||e>5)throw new Error("The response must be in range 1-5")
return e<=2?"negative":3===e?"neutral":"positive"}if(7===t){if(e<1||e>7)throw new Error("The response must be in range 1-7")
return e<=3?"negative":4===e?"neutral":"positive"}if(10===t){if(e<0||e>10)throw new Error("The response must be in range 0-10")
return e<=6?"detractors":e<=8?"passives":"promoters"}throw new Error("The scale must be one of: 3, 5, 7, 10")}(n,r.scale)
if(null!==(l=r.branching)&&void 0!==l&&null!==(c=l.responseValues)&&void 0!==c&&c.hasOwnProperty(e)){const t=r.branching.responseValues[e]
return Number.isInteger(t)?t:t===mr.End?mr.End:o}}return o}return G.warn(to,"Falling back to next question index due to unexpected branching type"),o}_canActivateRepeatedly(e){var t
return D(null===(t=E.__PosthogExtensions__)||void 0===t?void 0:t.canActivateRepeatedly)?(G.warn(to,"canActivateRepeatedly is not defined, must init before calling"),!1):E.__PosthogExtensions__.canActivateRepeatedly(e)}canRenderSurvey(e){D(this._surveyManager)?G.warn(to,"canActivateRepeatedly is not defined, must init before calling"):this.getSurveys((t=>{const n=t.filter((t=>t.id===e))[0]
this._surveyManager.canRenderSurvey(n)}))}renderSurvey(e,t){D(this._surveyManager)?G.warn(to,"canActivateRepeatedly is not defined, must init before calling"):this.getSurveys((n=>{const i=n.filter((t=>t.id===e))[0]
this._surveyManager.renderSurvey(i,null==m?void 0:m.querySelector(t))}))}}class ro{serverLimits={}
lastEventRateLimited=!1
constructor(e){var t,n
this.instance=e,this.captureEventsPerSecond=(null===(t=e.config.rate_limiting)||void 0===t?void 0:t.events_per_second)||10,this.captureEventsBurstLimit=Math.max((null===(n=e.config.rate_limiting)||void 0===n?void 0:n.events_burst_limit)||10*this.captureEventsPerSecond,this.captureEventsPerSecond),this.lastEventRateLimited=this.clientRateLimitContext(!0).isRateLimited}clientRateLimitContext(){var e,t,n
let i=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
const r=(new Date).getTime(),o=null!==(e=null===(t=this.instance.persistence)||void 0===t?void 0:t.get_property(Me))&&void 0!==e?e:{tokens:this.captureEventsBurstLimit,last:r}
o.tokens+=(r-o.last)/1e3*this.captureEventsPerSecond,o.last=r,o.tokens>this.captureEventsBurstLimit&&(o.tokens=this.captureEventsBurstLimit)
const s=o.tokens<1
return s||i||(o.tokens=Math.max(0,o.tokens-1)),!s||this.lastEventRateLimited||i||this.instance.capture("$$client_ingestion_warning",{$$client_ingestion_warning_message:`posthog-js client rate limited. Config is set to ${this.captureEventsPerSecond} events per second and ${this.captureEventsBurstLimit} events burst limit.`},{skip_client_rate_limiting:!0}),this.lastEventRateLimited=s,null===(n=this.instance.persistence)||void 0===n||n.set_property(Me,o),{isRateLimited:s,remainingTokens:o.tokens}}isServerRateLimited(e){const t=this.serverLimits[e||"events"]||!1
return!1!==t&&(new Date).getTime()<t}checkForLimiting=e=>{const t=e.text
if(t&&t.length)try{(JSON.parse(t).quota_limited||[]).forEach((e=>{G.info(`[RateLimiter] ${e||"events"} is quota limited.`),this.serverLimits[e]=(new Date).getTime()+6e4}))}catch(e){return void G.warn(`[RateLimiter] could not rate limit - continuing. Error: "${null==e?void 0:e.message}"`,{text:t})}}}const oo=()=>({initialPathName:(null==y?void 0:y.pathname)||"",referringDomain:gn.referringDomain(),...gn.campaignParams()})
class so{constructor(e,t,n){this._sessionIdManager=e,this._persistence=t,this._sessionSourceParamGenerator=n||oo,this._sessionIdManager.onSessionId(this._onSessionIdCallback)}_getStoredProps(){return this._persistence.props[Ae]}_onSessionIdCallback=e=>{const t=this._getStoredProps()
if(t&&t.sessionId===e)return
const n={sessionId:e,props:this._sessionSourceParamGenerator()}
this._persistence.register({[Ae]:n})}
getSessionProps(){var e
const t=null===(e=this._getStoredProps())||void 0===e?void 0:e.props
return t?{$client_session_initial_referring_host:t.referringDomain,$client_session_initial_pathname:t.initialPathName,$client_session_initial_utm_source:t.utm_source,$client_session_initial_utm_campaign:t.utm_campaign,$client_session_initial_utm_medium:t.utm_medium,$client_session_initial_utm_content:t.utm_content,$client_session_initial_utm_term:t.utm_term}:{}}}const ao=["ahrefsbot","ahrefssiteaudit","applebot","baiduspider","bingbot","bingpreview","bot.htm","bot.php","crawler","deepscan","duckduckbot","facebookexternal","facebookcatalog","gptbot","http://yandex.com/bots","hubspot","ia_archiver","linkedinbot","mj12bot","msnbot","nessus","petalbot","pinterest","prerender","rogerbot","screaming frog","semrushbot","sitebulb","slurp","turnitin","twitterbot","vercelbot","yahoo! slurp","yandexbot","headlesschrome","cypress","Google-HotelAdsVerifier","adsbot-google","apis-google","duplexweb-google","feedfetcher-google","google favicon","google web preview","google-read-aloud","googlebot","googleweblight","mediapartners-google","storebot-google","Bytespider;"],lo=function(e,t){if(!e)return!1
const n=e.toLowerCase()
return ao.concat(t||[]).some((e=>{const t=e.toLowerCase()
return-1!==n.indexOf(t)}))},co=function(e,t){if(!e)return!1
const n=e.userAgent
if(n&&lo(n,t))return!0
try{const n=null==e?void 0:e.userAgentData
if(null!=n&&n.brands&&n.brands.some((e=>lo(null==e?void 0:e.brand,t))))return!0}catch{}return!!e.webdriver}
class uo{constructor(){this.clicks=[]}isRageClick(e,t,n){const i=this.clicks[this.clicks.length-1]
if(i&&Math.abs(e-i.x)+Math.abs(t-i.y)<30&&n-i.timestamp<1e3){if(this.clicks.push({x:e,y:t,timestamp:n}),3===this.clicks.length)return!0}else this.clicks=[{x:e,y:t,timestamp:n}]
return!1}}class ho{rageclicks=new uo
_enabledServerSide=!1
_initialized=!1
_flushInterval=null
constructor(e){var t
this.instance=e,this._enabledServerSide=!(null===(t=this.instance.persistence)||void 0===t||!t.props[de]),null==h||h.addEventListener("beforeunload",(()=>{this.flush()}))}get flushIntervalMilliseconds(){let e=5e3
return F(this.instance.config.capture_heatmaps)&&this.instance.config.capture_heatmaps.flush_interval_milliseconds&&(e=this.instance.config.capture_heatmaps.flush_interval_milliseconds),e}get isEnabled(){return A(this.instance.config.capture_heatmaps)?A(this.instance.config.enable_heatmaps)?this._enabledServerSide:this.instance.config.enable_heatmaps:!1!==this.instance.config.capture_heatmaps}startIfEnabled(){if(this.isEnabled){if(this._initialized)return
G.info("[heatmaps] starting..."),this._setupListeners(),this._flushInterval=setInterval(this.flush.bind(this),this.flushIntervalMilliseconds)}else{var e
clearInterval(null!==(e=this._flushInterval)&&void 0!==e?e:void 0),this.getAndClearBuffer()}}afterDecideResponse(e){const t=!!e.heatmaps
this.instance.persistence&&this.instance.persistence.register({[de]:t}),this._enabledServerSide=t,this.startIfEnabled()}getAndClearBuffer(){const e=this.buffer
return this.buffer=void 0,e}_setupListeners(){h&&m&&(ie(m,"click",(e=>this._onClick(e||(null==h?void 0:h.event))),!1,!0),ie(m,"mousemove",(e=>this._onMouseMove(e||(null==h?void 0:h.event))),!1,!0),this._initialized=!0)}_getProperties(e,t){const n=this.instance.scrollManager.scrollY(),i=this.instance.scrollManager.scrollX(),r=this.instance.scrollManager.scrollElement(),o=function(e,t,n){let i=e
for(;i&&Sn(i)&&!En(i,"body");){if(i===n)return!1
if(X(t,null==h?void 0:h.getComputedStyle(i).position))return!0
i=On(i)}return!1}(Rn(e),["fixed","sticky"],r)
return{x:e.clientX+(o?0:i),y:e.clientY+(o?0:n),target_fixed:o,type:t}}_onClick(e){var t
if(kn(e.target))return
const n=this._getProperties(e,"click")
null!==(t=this.rageclicks)&&void 0!==t&&t.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._capture({...n,type:"rageclick"}),this._capture(n)}_onMouseMove(e){kn(e.target)||(clearTimeout(this._mouseMoveTimeout),this._mouseMoveTimeout=setTimeout((()=>{this._capture(this._getProperties(e,"mousemove"))}),500))}_capture(e){if(!h)return
const t=h.location.href
this.buffer=this.buffer||{},this.buffer[t]||(this.buffer[t]=[]),this.buffer[t].push(e)}flush(){this.buffer&&!O(this.buffer)&&this.instance.capture("$$heatmap",{$heatmap_data:this.getAndClearBuffer()})}}class fo{constructor(e){this.instance=e}getContext(){return this.context}resetContext(){const e=this.context
return setTimeout(this._updateScrollData,0),e}_updateScrollData=()=>{var e,t,n,i
this.context||(this.context={})
const r=this.scrollElement(),o=this.scrollY(),s=r?Math.max(0,r.scrollHeight-r.clientHeight):0,a=o+((null==r?void 0:r.clientHeight)||0),l=(null==r?void 0:r.scrollHeight)||0
this.context.lastScrollY=Math.ceil(o),this.context.maxScrollY=Math.max(o,null!==(e=this.context.maxScrollY)&&void 0!==e?e:0),this.context.maxScrollHeight=Math.max(s,null!==(t=this.context.maxScrollHeight)&&void 0!==t?t:0),this.context.lastContentY=a,this.context.maxContentY=Math.max(a,null!==(n=this.context.maxContentY)&&void 0!==n?n:0),this.context.maxContentHeight=Math.max(l,null!==(i=this.context.maxContentHeight)&&void 0!==i?i:0)}
startMeasuringScrollPosition(){null==h||h.addEventListener("scroll",this._updateScrollData,!0),null==h||h.addEventListener("scrollend",this._updateScrollData,!0),null==h||h.addEventListener("resize",this._updateScrollData)}scrollElement(){if(!this.instance.config.scroll_root_selector)return null==h?void 0:h.document.documentElement
{const e=L(this.instance.config.scroll_root_selector)?this.instance.config.scroll_root_selector:[this.instance.config.scroll_root_selector]
for(const t of e){const e=null==h?void 0:h.document.querySelector(t)
if(e)return e}}}scrollY(){if(this.instance.config.scroll_root_selector){const e=this.scrollElement()
return e&&e.scrollTop||0}return h&&(h.scrollY||h.pageYOffset||h.document.documentElement.scrollTop)||0}scrollX(){if(this.instance.config.scroll_root_selector){const e=this.scrollElement()
return e&&e.scrollLeft||0}return h&&(h.scrollX||h.pageXOffset||h.document.documentElement.scrollLeft)||0}}const po="$copy_autocapture"
function go(e,t){return t.length>e?t.slice(0,e)+"...":t}function _o(e){if(e.previousElementSibling)return e.previousElementSibling
let t=e
do{t=t.previousSibling}while(t&&!Sn(t))
return t}function vo(e,t){var n,i
let{e:r,maskAllElementAttributes:o,maskAllText:s,elementAttributeIgnoreList:a,elementsChainAsString:l}=t
const c=[e]
let u=e
for(;u.parentNode&&!En(u,"body");)Pn(u.parentNode)?(c.push(u.parentNode.host),u=u.parentNode.host):(c.push(u.parentNode),u=u.parentNode)
const d=[],f={}
let p,g=!1,_=!1
if(J(c,(e=>{const t=An(e)
"a"===e.tagName.toLowerCase()&&(g=e.getAttribute("href"),g=t&&g&&Un(g)&&g),X(Cn(e),"ph-no-capture")&&(_=!0),d.push(function(e,t,n,i){const r=e.tagName.toLowerCase(),o={tag_name:r}
Fn.indexOf(r)>-1&&!n&&("a"===r.toLowerCase()||"button"===r.toLowerCase()?o.$el_text=go(1024,Gn(e)):o.$el_text=go(1024,Ln(e)))
const s=Cn(e)
s.length>0&&(o.classes=s.filter((function(e){return""!==e}))),J(e.attributes,(function(n){var r
if((!Mn(e)||-1!==["name","id","class","aria-label"].indexOf(n.name))&&(null==i||!i.includes(n.name))&&!t&&Un(n.value)&&(r=n.name,!M(r)||"_ngcontent"!==r.substring(0,10)&&"_nghost"!==r.substring(0,7))){let e=n.value
"class"===n.name&&(e=$n(e).join(" ")),o["attr__"+n.name]=go(1024,e)}}))
let a=1,l=1,c=e
for(;c=_o(c);)a++,c.tagName===e.tagName&&l++
return o.nth_child=a,o.nth_of_type=l,o}(e,o,s,a))
const n=function(e){if(!An(e))return{}
const t={}
return J(e.attributes,(function(e){if(e.name&&0===e.name.indexOf("data-ph-capture-attribute")){const n=e.name.replace("data-ph-capture-attribute-",""),i=e.value
n&&i&&Un(i)&&(t[n]=i)}})),t}(e)
K(f,n)})),_)return{props:{},explicitNoCapture:_}
if(s||("a"===e.tagName.toLowerCase()||"button"===e.tagName.toLowerCase()?d[0].$el_text=Gn(e):d[0].$el_text=Ln(e)),g){var v,m
d[0].attr__href=g
const e=null===(v=pt(g))||void 0===v?void 0:v.host,t=null==h||null===(m=h.location)||void 0===m?void 0:m.host
e&&t&&e!==t&&(p=g)}return{props:K({$event_type:r.type,$ce_version:1},l?{$elements_chain:zn(d)}:{$elements:d},null!==(n=d[0])&&void 0!==n&&n.$el_text?{$el_text:null===(i=d[0])||void 0===i?void 0:i.$el_text}:{},p&&"click"===r.type?{$external_click_url:p}:{},f)}}class mo{_initialized=!1
_isDisabledServerSide=null
rageclicks=new uo
_elementsChainAsString=!1
constructor(e){this.instance=e,this._elementSelectors=null}get config(){var e,t
const n=F(this.instance.config.autocapture)?this.instance.config.autocapture:{}
return n.url_allowlist=null===(e=n.url_allowlist)||void 0===e?void 0:e.map((e=>new RegExp(e))),n.url_ignorelist=null===(t=n.url_ignorelist)||void 0===t?void 0:t.map((e=>new RegExp(e))),n}_addDomEventHandlers(){if(!this.isBrowserSupported())return void G.info("Disabling Automatic Event Collection because this browser is not supported")
if(!h||!m)return
const e=e=>{e=e||(null==h?void 0:h.event)
try{this._captureEvent(e)}catch(e){G.error("Failed to capture event",e)}},t=e=>{e=e||(null==h?void 0:h.event),this._captureEvent(e,po)}
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
const r=t===po
if(n&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0
if(!h||!e||En(e,"html")||!Sn(e))return!1
if(null!=n&&n.url_allowlist&&!Tn(n.url_allowlist))return!1
if(null!=n&&n.url_ignorelist&&Tn(n.url_ignorelist))return!1
if(null!=n&&n.dom_event_allowlist){const e=n.dom_event_allowlist
if(e&&!e.some((e=>t.type===e)))return!1}let o=!1
const s=[e]
let a=!0,l=e
for(;l.parentNode&&!En(l,"body");)if(Pn(l.parentNode))s.push(l.parentNode.host),l=l.parentNode.host
else{if(a=On(l),!a)break
if(i||Fn.indexOf(a.tagName.toLowerCase())>-1)o=!0
else{const e=h.getComputedStyle(a)
e&&"pointer"===e.getPropertyValue("cursor")&&(o=!0)}s.push(a),l=a}if(!function(e,t){const n=null==t?void 0:t.element_allowlist
if(A(n))return!0
for(const t of e)if(n.some((e=>t.tagName.toLowerCase()===e)))return!0
return!1}(s,n))return!1
if(!function(e,t){const n=null==t?void 0:t.css_selector_allowlist
if(A(n))return!0
for(const t of e)if(n.some((e=>t.matches(e))))return!0
return!1}(s,n))return!1
const c=h.getComputedStyle(e)
if(c&&"pointer"===c.getPropertyValue("cursor")&&"click"===t.type)return!0
const u=e.tagName.toLowerCase()
switch(u){case"html":return!1
case"form":return(r||["submit"]).indexOf(t.type)>=0
case"input":case"select":case"textarea":return(r||["change","click"]).indexOf(t.type)>=0
default:return o?(r||["click"]).indexOf(t.type)>=0:(r||["click"]).indexOf(t.type)>=0&&(Fn.indexOf(u)>-1||"true"===e.getAttribute("contenteditable"))}}(n,e,this.config,r,r?["copy","cut"]:void 0)){const{props:i,explicitNoCapture:r}=vo(n,{e:e,maskAllElementAttributes:this.instance.config.mask_all_element_attributes,maskAllText:this.instance.config.mask_all_text,elementAttributeIgnoreList:this.config.element_attribute_ignorelist,elementsChainAsString:this._elementsChainAsString})
if(r)return!1
const s=this.getElementSelectors(n)
if(s&&s.length>0&&(i.$element_selectors=s),t===po){var o
const t=In(null==h||null===(o=h.getSelection())||void 0===o?void 0:o.toString()),n=e.type||"clipboard"
if(!t)return!1
i.$selected_content=t,i.$copy_type=n}return this.instance.capture(t,i),!0}}isBrowserSupported(){return R(null==m?void 0:m.querySelectorAll)}}class yo{_restoreXHRPatch=void 0
_restoreFetchPatch=void 0
constructor(e){this.instance=e}_loadScript(e){var t,n,i
null!==(t=E.__PosthogExtensions__)&&void 0!==t&&t.tracingHeadersPatchFns&&e(),null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"tracing-headers",(t=>{if(t)return G.error("[TRACING-HEADERS] failed to load script",t)
e()}))}startIfEnabledOrStop(){var e,t
this.instance.config.__add_tracing_headers?this._loadScript(this._startCapturing):(null===(e=this._restoreXHRPatch)||void 0===e||e.call(this),null===(t=this._restoreFetchPatch)||void 0===t||t.call(this),this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0)}_startCapturing=()=>{var e,t,n,i
A(this._restoreXHRPatch)&&(null===(e=E.__PosthogExtensions__)||void 0===e||null===(t=e.tracingHeadersPatchFns)||void 0===t||t._patchXHR(this.instance.sessionManager)),A(this._restoreFetchPatch)&&(null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.tracingHeadersPatchFns)||void 0===i||i._patchFetch(this.instance.sessionManager))}}let bo
!function(e){e[e.PENDING=-1]="PENDING",e[e.DENIED=0]="DENIED",e[e.GRANTED=1]="GRANTED"}(bo||(bo={}))
class wo{constructor(e){this.instance=e}get config(){return this.instance.config}get consent(){return this.getDnt()?bo.DENIED:this.storedConsent}isOptedOut(){return this.consent===bo.DENIED||this.consent===bo.PENDING&&this.config.opt_out_capturing_by_default}isOptedIn(){return!this.isOptedOut()}optInOut(e){this.storage.set(this.storageKey,e?1:0,this.config.cookie_expiration,this.config.cross_subdomain_cookie,this.config.secure_cookie)}reset(){this.storage.remove(this.storageKey,this.config.cross_subdomain_cookie)}get storageKey(){const{token:e,opt_out_capturing_cookie_prefix:t}=this.instance.config
return(t||"__ph_opt_in_out_")+e}get storedConsent(){const e=this.storage.get(this.storageKey)
return"1"===e?bo.GRANTED:"0"===e?bo.DENIED:bo.PENDING}get storage(){if(!this._storage){const e=this.config.opt_out_capturing_persistence_type
this._storage="localStorage"===e?st:rt
const t="localStorage"===e?rt:st
t.get(this.storageKey)&&(this._storage.get(this.storageKey)||this.optInOut("1"===t.get(this.storageKey)),t.remove(this.storageKey,this.config.cross_subdomain_cookie))}return this._storage}getDnt(){return!!this.config.respect_dnt&&!!oe([null==v?void 0:v.doNotTrack,null==v?void 0:v.msDoNotTrack,E.doNotTrack],(e=>X([!0,1,"1","yes"],e)))}}const ko="[Exception Autocapture]"
class So{originalOnUnhandledRejectionHandler=void 0
constructor(e){var t
this.instance=e,this.remoteEnabled=!(null===(t=this.instance.persistence)||void 0===t||!t.props[he]),this.startIfEnabled()}get isEnabled(){var e
return null!==(e=this.remoteEnabled)&&void 0!==e&&e}get isCapturing(){var e
return!(null==h||null===(e=h.onerror)||void 0===e||!e.__POSTHOG_INSTRUMENTED__)}get hasHandlers(){return this.originalOnUnhandledRejectionHandler||this.unwrapOnError}startIfEnabled(){this.isEnabled&&!this.isCapturing&&(G.info(ko+" enabled, starting..."),this.loadScript(this.startCapturing))}loadScript(e){var t,n
this.hasHandlers&&e(),null===(t=E.__PosthogExtensions__)||void 0===t||null===(n=t.loadExternalDependency)||void 0===n||n.call(t,this.instance,"exception-autocapture",(t=>{if(t)return G.error(ko+" failed to load script",t)
e()}))}startCapturing=()=>{var e,t,n,i
if(!h||!this.isEnabled||this.hasHandlers||this.isCapturing)return
const r=null===(e=E.__PosthogExtensions__)||void 0===e||null===(t=e.errorWrappingFunctions)||void 0===t?void 0:t.wrapOnError,o=null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.errorWrappingFunctions)||void 0===i?void 0:i.wrapUnhandledRejection
if(r&&o)try{this.unwrapOnError=r(this.captureException.bind(this)),this.unwrapUnhandledRejection=o(this.captureException.bind(this))}catch(e){G.error(ko+" failed to start",e),this.stopCapturing()}else G.error(ko+" failed to load error wrapping functions - cannot start")}
stopCapturing(){var e,t
null===(e=this.unwrapOnError)||void 0===e||e.call(this),null===(t=this.unwrapUnhandledRejection)||void 0===t||t.call(this)}afterDecideResponse(e){const t=e.autocaptureExceptions
this.remoteEnabled=!!t||!1,this.instance.persistence&&this.instance.persistence.register({[he]:this.remoteEnabled}),this.startIfEnabled()}captureException(e){const t=this.instance.requestRouter.endpointFor("ui")
e.$exception_personURL=`${t}/project/${this.instance.config.token}/person/${this.instance.get_distinct_id()}`,this.instance.exceptions.sendExceptionEvent(e)}}const Eo=9e5,xo="[Web Vitals]"
class Po{_enabledServerSide=!1
_initialized=!1
buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0}
constructor(e){var t
this.instance=e,this._enabledServerSide=!(null===(t=this.instance.persistence)||void 0===t||!t.props[pe]),this.startIfEnabled()}get allowedMetrics(){var e,t
const n=F(this.instance.config.capture_performance)?null===(e=this.instance.config.capture_performance)||void 0===e?void 0:e.web_vitals_allowed_metrics:void 0
return A(n)?(null===(t=this.instance.persistence)||void 0===t?void 0:t.props[_e])||["CLS","FCP","INP","LCP"]:n}get flushToCaptureTimeoutMs(){return(F(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals_delayed_flush_ms:void 0)||5e3}get _maxAllowedValue(){const e=F(this.instance.config.capture_performance)&&B(this.instance.config.capture_performance.__web_vitals_max_value)?this.instance.config.capture_performance.__web_vitals_max_value:Eo
return 0<e&&e<=6e4?Eo:e}get isEnabled(){const e=F(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals:void 0
return H(e)?e:this._enabledServerSide}startIfEnabled(){this.isEnabled&&!this._initialized&&(G.info(xo+" enabled, starting..."),this.loadScript(this._startCapturing))}afterDecideResponse(e){const t=F(e.capturePerformance)&&!!e.capturePerformance.web_vitals,n=F(e.capturePerformance)?e.capturePerformance.web_vitals_allowed_metrics:void 0
this.instance.persistence&&(this.instance.persistence.register({[pe]:t}),this.instance.persistence.register({[_e]:n})),this._enabledServerSide=t,this.startIfEnabled()}loadScript(e){var t,n,i
null!==(t=E.__PosthogExtensions__)&&void 0!==t&&t.postHogWebVitalsCallbacks&&e(),null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"web-vitals",(t=>{t?G.error(xo+" failed to load script",t):e()}))}_currentURL(){const e=h?h.location.href:void 0
return e||G.error(xo+"Could not determine current URL"),e}_flushToCapture=()=>{clearTimeout(this._delayedFlushTimer),0!==this.buffer.metrics.length&&(this.instance.capture("$web_vitals",this.buffer.metrics.reduce(((e,t)=>({...e,[`$web_vitals_${t.name}_event`]:{...t},[`$web_vitals_${t.name}_value`]:t.value})),{})),this.buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0})}
_addToBuffer=e=>{var t
const n=null===(t=this.instance.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0)
if(A(n))return void G.error(xo+"Could not read session ID. Dropping metrics!")
this.buffer=this.buffer||{url:void 0,metrics:[],firstMetricTimestamp:void 0}
const i=this._currentURL()
A(i)||(D(null==e?void 0:e.name)||D(null==e?void 0:e.value)?G.error(xo+"Invalid metric received",e):this._maxAllowedValue&&e.value>=this._maxAllowedValue?G.error(xo+"Ignoring metric with value >= "+this._maxAllowedValue,e):(this.buffer.url!==i&&(this._flushToCapture(),this._delayedFlushTimer=setTimeout(this._flushToCapture,this.flushToCaptureTimeoutMs)),A(this.buffer.url)&&(this.buffer.url=i),this.buffer.firstMetricTimestamp=A(this.buffer.firstMetricTimestamp)?Date.now():this.buffer.firstMetricTimestamp,e.attribution&&e.attribution.interactionTargetElement&&(e.attribution.interactionTargetElement=void 0),this.buffer.metrics.push({...e,$current_url:i,$session_id:n.sessionId,$window_id:n.windowId,timestamp:Date.now()}),this.buffer.metrics.length===this.allowedMetrics.length&&this._flushToCapture()))}
_startCapturing=()=>{let e,t,n,i
const r=E.__PosthogExtensions__
A(r)||A(r.postHogWebVitalsCallbacks)||({onLCP:e,onCLS:t,onFCP:n,onINP:i}=r.postHogWebVitalsCallbacks),e&&t&&n&&i?(this.allowedMetrics.indexOf("LCP")>-1&&e(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("CLS")>-1&&t(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("FCP")>-1&&n(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("INP")>-1&&i(this._addToBuffer.bind(this)),this._initialized=!0):G.error(xo+"web vitals callbacks not loaded - not starting")}}const $o={icontains:(e,t)=>!!h&&t.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:(e,t)=>!!h&&-1===t.href.toLowerCase().indexOf(e.toLowerCase()),regex:(e,t)=>!!h&&gt(t.href,e),not_regex:(e,t)=>!!h&&!gt(t.href,e),exact:(e,t)=>t.href===e,is_not:(e,t)=>t.href!==e}
class To{constructor(e){this.instance=e
this.instance.onFeatureFlags&&this.instance.onFeatureFlags((e=>{this.applyFeatureFlagChanges(e)})),this._flagToExperiments=new Map}applyFeatureFlagChanges(e){D(this._flagToExperiments)||this.instance.config.disable_web_experiments||(To.logInfo("applying feature flags",e),e.forEach((e=>{var t
if(this._flagToExperiments&&null!==(t=this._flagToExperiments)&&void 0!==t&&t.has(e)){var n
const t=this.instance.getFeatureFlag(e),i=null===(n=this._flagToExperiments)||void 0===n?void 0:n.get(e)
t&&null!=i&&i.variants[t]&&this.applyTransforms(i.name,t,i.variants[t].transforms)}})))}afterDecideResponse(e){this._is_bot()?To.logInfo("Refusing to render web experiment since the viewer is a likely bot"):(this._featureFlags=e.featureFlags,this.loadIfEnabled(),this.previewWebExperiment())}previewWebExperiment(){const e=To.getWindowLocation()
if(null!=e&&e.search){const t=_t(null==e?void 0:e.search,"__experiment_id"),n=_t(null==e?void 0:e.search,"__experiment_variant")
t&&n&&(To.logInfo(`previewing web experiments ${t} && ${n}`),this.getWebExperiments((e=>{this.showPreviewWebExperiment(parseInt(t),n,e)}),!1,!0))}}loadIfEnabled(){this.instance.config.disable_web_experiments||this.getWebExperimentsAndEvaluateDisplayLogic()}getWebExperimentsAndEvaluateDisplayLogic=(()=>{var e=this
return function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
e.getWebExperiments((t=>{To.logInfo("retrieved web experiments from the server"),e._flagToExperiments=new Map,t.forEach((t=>{if(t.feature_flag_key&&e._featureFlags&&e._featureFlags[t.feature_flag_key]){var n
e._flagToExperiments&&(To.logInfo("setting flag key ",t.feature_flag_key," to web experiment ",t),null===(n=e._flagToExperiments)||void 0===n||n.set(t.feature_flag_key,t))
const i=e._featureFlags[t.feature_flag_key]
i&&t.variants[i]&&e.applyTransforms(t.name,i,t.variants[i].transforms)}else if(t.variants)for(const n in t.variants){const i=t.variants[n]
To.matchesTestVariant(i)&&e.applyTransforms(t.name,n,i.transforms)}}))}),t)}})()
getWebExperiments(e,t,n){if(this.instance.config.disable_web_experiments&&!n)return e([])
const i=this.instance.get_property("$web_experiments")
if(i&&!t)return e(i)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api",`/api/web_experiments/?token=${this.instance.config.token}`),method:"GET",transport:"XHR",callback:t=>{if(200!==t.statusCode||!t.json)return e([])
const n=t.json.experiments||[]
return e(n)}})}showPreviewWebExperiment(e,t,n){const i=n.filter((t=>t.id===e))
i&&i.length>0&&(To.logInfo(`Previewing web experiment [${i[0].name}] with variant [${t}]`),this.applyTransforms(i[0].name,t,i[0].variants[t].transforms,!0))}static matchesTestVariant(e){return!D(e.conditions)&&To.matchUrlConditions(e)&&To.matchUTMConditions(e)}static matchUrlConditions(e){var t
if(D(e.conditions)||D(null===(t=e.conditions)||void 0===t?void 0:t.url))return!0
const n=To.getWindowLocation()
var i,r,o
return!!n&&(null===(i=e.conditions)||void 0===i||!i.url||$o[null!==(r=null===(o=e.conditions)||void 0===o?void 0:o.urlMatchType)&&void 0!==r?r:"icontains"](e.conditions.url,n))}static getWindowLocation(){return null==h?void 0:h.location}static matchUTMConditions(e){var t
if(D(e.conditions)||D(null===(t=e.conditions)||void 0===t?void 0:t.utm))return!0
const n=gn.campaignParams()
if(n.utm_source){var i,r,o,s,a,l,c,u,d,h,f,p,g,_,v,m
const t=null===(i=e.conditions)||void 0===i||null===(r=i.utm)||void 0===r||!r.utm_campaign||(null===(o=e.conditions)||void 0===o||null===(s=o.utm)||void 0===s?void 0:s.utm_campaign)==n.utm_campaign,y=null===(a=e.conditions)||void 0===a||null===(l=a.utm)||void 0===l||!l.utm_source||(null===(c=e.conditions)||void 0===c||null===(u=c.utm)||void 0===u?void 0:u.utm_source)==n.utm_source,b=null===(d=e.conditions)||void 0===d||null===(h=d.utm)||void 0===h||!h.utm_medium||(null===(f=e.conditions)||void 0===f||null===(p=f.utm)||void 0===p?void 0:p.utm_medium)==n.utm_medium,w=null===(g=e.conditions)||void 0===g||null===(_=g.utm)||void 0===_||!_.utm_term||(null===(v=e.conditions)||void 0===v||null===(m=v.utm)||void 0===m?void 0:m.utm_term)==n.utm_term
return t&&b&&w&&y}return!1}static logInfo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
G.info(`[WebExperiments] ${e}`,n)}applyTransforms(e,t,n,i){var r
this._is_bot()?To.logInfo("Refusing to render web experiment since the viewer is a likely bot"):"control"!==t?n.forEach((n=>{if(n.selector){var r
To.logInfo(`applying transform of variant ${t} for experiment ${e} `,n)
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
default:t.setAttribute(e.name,e.value)}})),n.text&&(t.innerText=n.text),n.html&&(t.parentElement?t.parentElement.innerHTML=n.html:t.innerHTML=n.html),n.css&&t.setAttribute("style",n.css)})),this.instance&&this.instance.capture&&this.instance.capture("$web_experiment_applied",{$web_experiment_name:e,$web_experiment_variant:t,$web_experiment_preview:i,$web_experiment_document_url:null===(o=To.getWindowLocation())||void 0===o?void 0:o.href,$web_experiment_elements_modified:s})}})):(To.logInfo("Control variants leave the page unmodified."),this.instance&&this.instance.capture&&this.instance.capture("$web_experiment_applied",{$web_experiment_name:e,$web_experiment_preview:i,$web_experiment_variant:t,$web_experiment_document_url:null===(r=To.getWindowLocation())||void 0===r?void 0:r.href,$web_experiment_elements_modified:0}))}_is_bot(){return v&&this.instance?co(v,this.instance.config.custom_blocked_useragents):void 0}}class Co{constructor(e){var t
this.instance=e,this._endpointSuffix=(null===(t=this.instance.persistence)||void 0===t?void 0:t.props[fe])||"/e/"}get endpoint(){return this.instance.requestRouter.endpointFor("api",this._endpointSuffix)}afterDecideResponse(e){const t=e.autocaptureExceptions
this._endpointSuffix=F(t)&&t.endpoint||"/e/",this.instance.persistence&&this.instance.persistence.register({[fe]:this._endpointSuffix})}sendExceptionEvent(e){this.instance.capture("$exception",e,{_noTruncate:!0,_batchKey:"exceptionEvent",_url:this.endpoint})}}const Io="[Dead Clicks]"
class Lo{get lazyLoadedDeadClicksAutocapture(){return this._lazyLoadedDeadClicksAutocapture}constructor(e){this.instance=e,this.startIfEnabled()}get isRemoteEnabled(){var e
return!(null===(e=this.instance.persistence)||void 0===e||!e.get_property(ge))}get isEnabled(){const e=this.instance.config.capture_dead_clicks
return H(e)?e:this.isRemoteEnabled}afterDecideResponse(e){this.instance.persistence&&this.instance.persistence.register({[ge]:null==e?void 0:e.captureDeadClicks}),this.startIfEnabled()}startIfEnabled(){this.isEnabled&&this.loadScript(this.start.bind(this))}loadScript(e){var t,n,i
null!==(t=E.__PosthogExtensions__)&&void 0!==t&&t.initDeadClicksAutocapture&&e(),null===(n=E.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"dead-clicks-autocapture",(t=>{t?G.error(Io+" failed to load script",t):e()}))}start(){var e
m?!this._lazyLoadedDeadClicksAutocapture&&null!==(e=E.__PosthogExtensions__)&&void 0!==e&&e.initDeadClicksAutocapture&&(this._lazyLoadedDeadClicksAutocapture=E.__PosthogExtensions__.initDeadClicksAutocapture(this.instance,F(this.instance.config.capture_dead_clicks)?this.instance.config.capture_dead_clicks:void 0),this._lazyLoadedDeadClicksAutocapture.start(m),G.info(`${Io} starting...`)):G.error(Io+" `document` not found. Cannot start.")}stop(){this._lazyLoadedDeadClicksAutocapture&&(this._lazyLoadedDeadClicksAutocapture.stop(),this._lazyLoadedDeadClicksAutocapture=void 0,G.info(`${Io} stopping...`))}}const Ro={},Fo=()=>{},Oo="posthog"
let Ao=!nr&&-1===(null==S?void 0:S.indexOf("MSIE"))&&-1===(null==S?void 0:S.indexOf("Mozilla"))
const Mo=()=>{var e
return{api_host:"https://us.i.posthog.com",ui_host:null,token:"",autocapture:!0,rageclick:!0,cross_subdomain_cookie:re(null==m?void 0:m.location),persistence:"localStorage+cookie",persistence_name:"",loaded:Fo,store_google:!0,custom_campaign_params:[],custom_blocked_useragents:[],save_referrer:!0,capture_pageview:!0,capture_pageleave:"if_capture_pageview",debug:y&&M(null==y?void 0:y.search)&&-1!==y.search.indexOf("__posthog_debug=true")||!1,verbose:!1,cookie_expiration:365,upgrade:!1,disable_session_recording:!1,disable_persistence:!1,disable_web_experiments:!0,disable_surveys:!1,enable_recording_console_log:void 0,secure_cookie:"https:"===(null==h||null===(e=h.location)||void 0===e?void 0:e.protocol),ip:!0,opt_out_capturing_by_default:!1,opt_out_persistence_by_default:!1,opt_out_useragent_filter:!1,opt_out_capturing_persistence_type:"localStorage",opt_out_capturing_cookie_prefix:null,opt_in_site_apps:!1,property_denylist:[],respect_dnt:!1,sanitize_properties:null,request_headers:{},inapp_protocol:"//",inapp_link_new_window:!1,request_batching:!0,properties_string_max_length:65535,session_recording:{},mask_all_element_attributes:!1,mask_all_text:!1,advanced_disable_decide:!1,advanced_disable_feature_flags:!1,advanced_disable_feature_flags_on_first_load:!1,advanced_disable_toolbar_metrics:!1,feature_flag_request_timeout_ms:3e3,on_request_error:e=>{const t="Bad HTTP status: "+e.statusCode+" "+e.text
G.error(t)},get_device_id:e=>e,_onCapture:Fo,capture_performance:void 0,name:"posthog",bootstrap:{},disable_compression:!1,session_idle_timeout_seconds:1800,person_profiles:"identified_only",__add_tracing_headers:!1}},No=e=>{const t={}
A(e.process_person)||(t.person_profiles=e.process_person),A(e.xhr_headers)||(t.request_headers=e.xhr_headers),A(e.cookie_name)||(t.persistence_name=e.cookie_name),A(e.disable_cookie)||(t.disable_persistence=e.disable_cookie)
const n=K({},t,e)
return L(e.property_blacklist)&&(A(e.property_denylist)?n.property_denylist=e.property_blacklist:L(e.property_denylist)?n.property_denylist=[...e.property_blacklist,...e.property_denylist]:G.error("Invalid value for property_denylist config: "+e.property_denylist)),n}
class jo{get _forceAllowLocalhost(){return this.__forceAllowLocalhost}set _forceAllowLocalhost(e){G.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),this.__forceAllowLocalhost=e}__forceAllowLocalhost=!1}class Do{webPerformance=new jo
version=x.LIB_VERSION
_internalEventEmitter=new yr
constructor(){this.config=Mo(),this.decideEndpointWasHit=!1,this.SentryIntegration=pr,this.sentryIntegration=e=>function(e,t){const n=fr(e,t)
return{name:hr,processEvent:e=>n(e)}}(this,e),this.__request_queue=[],this.__loaded=!1,this.analyticsDefaultEndpoint="/e/",this._initialPageviewCaptured=!1,this._initialPersonProfilesConfig=null,this.featureFlags=new Ve(this),this.toolbar=new er(this),this.scrollManager=new fo(this),this.pageViewManager=new gr(this),this.surveys=new io(this),this.experiments=new To(this),this.exceptions=new Co(this),this.rateLimiter=new ro(this),this.requestRouter=new dr(this),this.consent=new wo(this),this.people={set:(e,t,n)=>{const i=M(e)?{[e]:t}:e
this.setPersonProperties(i),null==n||n({})},set_once:(e,t,n)=>{const i=M(e)?{[e]:t}:e
this.setPersonProperties(void 0,i),null==n||n({})}},this.on("eventCaptured",(e=>G.info(`send "${null==e?void 0:e.event}"`,e)))}init(e,t,n){if(n&&n!==Oo){var i
const r=null!==(i=Ro[n])&&void 0!==i?i:new Do
return r._init(e,t,n),Ro[n]=r,Ro[Oo][n]=r,r}return this._init(e,t,n)}_init(e){var t,n
let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0
if(A(e)||N(e))return G.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),this
if(this.__loaded)return G.warn("You have already initialized PostHog! Re-initializing is a no-op"),this
this.__loaded=!0,this.config={},this._triggered_notifs=[],i.person_profiles&&(this._initialPersonProfilesConfig=i.person_profiles),this.set_config(K({},Mo(),No(i),{name:r,token:e})),this.config.on_xhr_error&&G.error("[posthog] on_xhr_error is deprecated. Use on_request_error instead"),this.compression=i.disable_compression?void 0:se.GZipJS,this.persistence=new vn(this.config),this.sessionPersistence="sessionStorage"===this.config.persistence?this.persistence:new vn({...this.config,persistence:"sessionStorage"})
const o={...this.persistence.props},s={...this.sessionPersistence.props}
if(this._requestQueue=new tr((e=>this._send_retriable_request(e))),this._retryQueue=new ar(this),this.__request_queue=[],this.sessionManager=new lr(this.config,this.persistence),this.sessionPropsManager=new so(this.sessionManager,this.persistence),new yo(this).startIfEnabledOrStop(),this.sessionRecording=new Ji(this),this.sessionRecording.startIfEnabledOrStop(),this.config.disable_scroll_properties||this.scrollManager.startMeasuringScrollPosition(),this.autocapture=new mo(this),this.autocapture.startIfEnabled(),this.surveys.loadIfEnabled(),this.heatmaps=new ho(this),this.heatmaps.startIfEnabled(),this.webVitalsAutocapture=new Po(this),this.exceptionObserver=new So(this),this.exceptionObserver.startIfEnabled(),this.deadClicksAutocapture=new Lo(this),this.deadClicksAutocapture.startIfEnabled(),x.DEBUG=x.DEBUG||this.config.debug,x.DEBUG&&G.info("Starting in debug mode",{this:this,config:i,thisC:{...this.config},p:o,s:s}),this._sync_opt_out_with_persistence(),void 0!==(null===(t=i.bootstrap)||void 0===t?void 0:t.distinctID)){var a,l
const e=this.config.get_device_id(et()),t=null!==(a=i.bootstrap)&&void 0!==a&&a.isIdentifiedID?e:i.bootstrap.distinctID
this.persistence.set_property(Oe,null!==(l=i.bootstrap)&&void 0!==l&&l.isIdentifiedID?"identified":"anonymous"),this.register({distinct_id:i.bootstrap.distinctID,$device_id:t})}if(this._hasBootstrappedFeatureFlags()){var c,u
const e=Object.keys((null===(c=i.bootstrap)||void 0===c?void 0:c.featureFlags)||{}).filter((e=>{var t,n
return!(null===(t=i.bootstrap)||void 0===t||null===(n=t.featureFlags)||void 0===n||!n[e])})).reduce(((e,t)=>{var n,r
return e[t]=(null===(n=i.bootstrap)||void 0===n||null===(r=n.featureFlags)||void 0===r?void 0:r[t])||!1,e}),{}),t=Object.keys((null===(u=i.bootstrap)||void 0===u?void 0:u.featureFlagPayloads)||{}).filter((t=>e[t])).reduce(((e,t)=>{var n,r,o,s
return null!==(n=i.bootstrap)&&void 0!==n&&null!==(r=n.featureFlagPayloads)&&void 0!==r&&r[t]&&(e[t]=null===(o=i.bootstrap)||void 0===o||null===(s=o.featureFlagPayloads)||void 0===s?void 0:s[t]),e}),{})
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
return{name:"PostHog JS",type:"enrichment",version:"1.0.0",isLoaded:()=>!0,load:()=>Promise.resolve(),track:e=>t(e,e.event.event),page:e=>t(e,"$pageview"),identify:e=>t(e,"$identify"),screen:e=>t(e,"$screen")}})(e)).then((()=>{t()}))}))}(this,(()=>this._loaded())):this._loaded(),R(this.config._onCapture)&&this.on("eventCaptured",(e=>this.config._onCapture(e.event,e))),this}_afterDecideResponse(e){var t,n,i,r,o,s,a,l,c,u
this.compression=void 0,e.supportedCompression&&!this.config.disable_compression&&(this.compression=X(e.supportedCompression,se.GZipJS)?se.GZipJS:X(e.supportedCompression,se.Base64)?se.Base64:void 0),null!==(t=e.analytics)&&void 0!==t&&t.endpoint&&(this.analyticsDefaultEndpoint=e.analytics.endpoint),this.set_config({person_profiles:this._initialPersonProfilesConfig?this._initialPersonProfilesConfig:e.defaultIdentifiedOnly?"identified_only":"always"}),null===(n=this.sessionRecording)||void 0===n||n.afterDecideResponse(e),null===(i=this.autocapture)||void 0===i||i.afterDecideResponse(e),null===(r=this.heatmaps)||void 0===r||r.afterDecideResponse(e),null===(o=this.experiments)||void 0===o||o.afterDecideResponse(e),null===(s=this.surveys)||void 0===s||s.afterDecideResponse(e),null===(a=this.webVitalsAutocapture)||void 0===a||a.afterDecideResponse(e),null===(l=this.exceptions)||void 0===l||l.afterDecideResponse(e),null===(c=this.exceptionObserver)||void 0===c||c.afterDecideResponse(e),null===(u=this.deadClicksAutocapture)||void 0===u||u.afterDecideResponse(e)}_loaded(){const e=this.config.advanced_disable_decide
e||this.featureFlags.setReloadingPaused(!0)
try{this.config.loaded(this)}catch(e){G.critical("`loaded` function failed",e)}this._start_queue_if_opted_in(),this.config.capture_pageview&&setTimeout((()=>{this.consent.isOptedIn()&&this._captureInitialPageview()}),1),e||(new Ki(this).call(),this.featureFlags.resetRequestQueue())}_start_queue_if_opted_in(){var e
this.has_opted_out_capturing()||this.config.request_batching&&(null===(e=this._requestQueue)||void 0===e||e.enable())}_dom_loaded(){this.has_opted_out_capturing()||Q(this.__request_queue,(e=>this._send_retriable_request(e))),this.__request_queue=[],this._start_queue_if_opted_in()}_handle_unload(){var e,t
this.config.request_batching?(this._shouldCapturePageleave()&&this.capture("$pageleave"),null===(e=this._requestQueue)||void 0===e||e.unload(),null===(t=this._retryQueue)||void 0===t||t.unload()):this._shouldCapturePageleave()&&this.capture("$pageleave",null,{transport:"sendBeacon"})}_send_request(e){this.__loaded&&(Ao?this.__request_queue.push(e):this.rateLimiter.isServerRateLimited(e.batchKey)||(e.transport=e.transport||this.config.api_transport,e.url=rr(e.url,{ip:this.config.ip?1:0}),e.headers={...this.config.request_headers},e.compression="best-available"===e.compression?this.compression:e.compression,(e=>{var t,n,i
const r={...e}
r.timeout=r.timeout||6e4,r.url=rr(r.url,{_:(new Date).getTime().toString(),ver:x.LIB_VERSION,compression:r.compression})
const o=null!==(t=r.transport)&&void 0!==t?t:"XHR",s=null!==(n=null===(i=oe(sr,(e=>e.transport===o)))||void 0===i?void 0:i.method)&&void 0!==n?n:sr[0].method
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
let a={uuid:et(),event:e,properties:this._calculate_event_properties(e,t||{},s)}
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
return r.distinct_id=e.distinct_id,(!M(r.distinct_id)&&!B(r.distinct_id)||N(r.distinct_id))&&G.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),r}const o=gn.properties()
if(this.sessionManager){const{sessionId:e,windowId:t}=this.sessionManager.checkAndGetSessionAndWindowId()
r.$session_id=e,r.$window_id=t}if(this.requestRouter.region===cr.CUSTOM&&(r.$lib_custom_api_host=this.config.api_host),this.sessionPropsManager&&this.config.__preview_send_client_session_params&&("$pageview"===e||"$pageleave"===e||"$autocapture"===e)){const e=this.sessionPropsManager.getSessionProps()
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
const r="anonymous"===(this.persistence.get_property(Oe)||"anonymous")
e!==i&&r?(this.persistence.set_property(Oe,"identified"),this.setPersonPropertiesForFlags(t||{},!1),this.capture("$identify",{distinct_id:e,$anon_distinct_id:i},{$set:t||{},$set_once:n||{}}),this.featureFlags.setAnonymousDistinctId(i)):(t||n)&&this.setPersonProperties(t,n),e!==i&&(this.reloadFeatureFlags(),this.unregister(Fe))}setPersonProperties(e,t){(e||t)&&this._requirePersonProcessing("posthog.setPersonProperties")&&(this.setPersonPropertiesForFlags(e||{}),this.capture("$set",{$set:e||{},$set_once:t||{}}))}group(e,t,n){if(!e||!t)return void G.error("posthog.group requires a group type and group key")
if(!this._requirePersonProcessing("posthog.group"))return
const i=this.getGroups()
i[e]!==t&&this.resetGroupPropertiesForFlags(e),this.register({$groups:{...i,[e]:t}}),n&&(this.capture("$groupidentify",{$group_type:e,$group_key:t,$group_set:n}),this.setGroupPropertiesForFlags({[e]:n})),i[e]===t||n||this.reloadFeatureFlags()}resetGroups(){this.register({$groups:{}}),this.resetGroupPropertiesForFlags(),this.reloadFeatureFlags()}setPersonPropertiesForFlags(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this._requirePersonProcessing("posthog.setPersonPropertiesForFlags")&&this.featureFlags.setPersonPropertiesForFlags(e,t)}resetPersonPropertiesForFlags(){this.featureFlags.resetPersonPropertiesForFlags()}setGroupPropertiesForFlags(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this._requirePersonProcessing("posthog.setGroupPropertiesForFlags")&&this.featureFlags.setGroupPropertiesForFlags(e,t)}resetGroupPropertiesForFlags(e){this.featureFlags.resetGroupPropertiesForFlags(e)}reset(e){var t,n,i,r,o
if(G.info("reset"),!this.__loaded)return G.uninitializedWarning("posthog.reset")
const s=this.get_property("$device_id")
this.consent.reset(),null===(t=this.persistence)||void 0===t||t.clear(),null===(n=this.sessionPersistence)||void 0===n||n.clear(),null===(i=this.surveys)||void 0===i||i.reset(),null===(r=this.persistence)||void 0===r||r.set_property(Oe,"anonymous"),null===(o=this.sessionManager)||void 0===o||o.resetSessionId()
const a=this.config.get_device_id(et())
this.register_once({distinct_id:a,$device_id:e?a:s},"")}get_distinct_id(){return this.get_property("distinct_id")}getGroups(){return this.get_property("$groups")||{}}get_session_id(){var e,t
return null!==(e=null===(t=this.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0).sessionId)&&void 0!==e?e:""}get_session_replay_url(e){if(!this.sessionManager)return""
const{sessionId:t,sessionStartTimestamp:n}=this.sessionManager.checkAndGetSessionAndWindowId(!0)
let i=this.requestRouter.endpointFor("ui",`/project/${this.config.token}/replay/${t}`)
if(null!=e&&e.withTimestamp&&n){var r
const t=null!==(r=e.timestampLookBack)&&void 0!==r?r:10
if(!n)return i
i+=`?t=${Math.max(Math.floor(((new Date).getTime()-n)/1e3)-t,0)}`}return i}alias(e,t){return e===this.get_property(ae)?(G.critical("Attempting to create alias for existing People user - aborting."),-2):this._requirePersonProcessing("posthog.alias")?(A(t)&&(t=this.get_distinct_id()),e!==t?(this._register_single(le,e),this.capture("$create_alias",{alias:e,distinct_id:t})):(G.warn("alias matches current distinct_id - skipping api call."),this.identify(e),-1)):void 0}set_config(e){const t={...this.config}
var n,i,r,o
F(e)&&(K(this.config,No(e)),null===(n=this.persistence)||void 0===n||n.update_config(this.config,t),this.sessionPersistence="sessionStorage"===this.config.persistence?this.persistence:new vn({...this.config,persistence:"sessionStorage"}),st.is_supported()&&"true"===st.get("ph_debug")&&(this.config.debug=!0),this.config.debug&&(x.DEBUG=!0,G.info("set_config",{config:e,oldConfig:t,newConfig:{...this.config}})),null===(i=this.sessionRecording)||void 0===i||i.startIfEnabledOrStop(),null===(r=this.autocapture)||void 0===r||r.startIfEnabled(),null===(o=this.heatmaps)||void 0===o||o.startIfEnabled(),this.surveys.loadIfEnabled(),this._sync_opt_out_with_persistence())}startSessionRecording(e){const t=H(e)&&e
if(t||null!=e&&e.sampling||null!=e&&e.linked_flag){var n
const o=null===(n=this.sessionManager)||void 0===n?void 0:n.checkAndGetSessionAndWindowId()
var i,r;(t||null!=e&&e.sampling)&&(null===(i=this.sessionRecording)||void 0===i||i.overrideSampling(),G.info("Session recording started with sampling override for session: ",null==o?void 0:o.sessionId)),(t||null!=e&&e.linked_flag)&&(null===(r=this.sessionRecording)||void 0===r||r.overrideLinkedFlag(),G.info("Session recording started with linked_flags override"))}this.set_config({disable_session_recording:!1})}stopSessionRecording(){this.set_config({disable_session_recording:!0})}sessionRecordingStarted(){var e
return!(null===(e=this.sessionRecording)||void 0===e||!e.started)}captureException(e,t){var n
const i=new Error("PostHog syntheticException"),r=R(null===(n=E.__PosthogExtensions__)||void 0===n?void 0:n.parseErrorAsProperties)?E.__PosthogExtensions__.parseErrorAsProperties([e.message,void 0,void 0,void 0,e],{syntheticException:i}):{$exception_level:"error",$exception_list:[{type:e.name,value:e.message,mechanism:{handled:!0,synthetic:!1}}],...t}
this.exceptions.sendExceptionEvent(r)}loadToolbar(e){return this.toolbar.loadToolbar(e)}get_property(e){var t
return null===(t=this.persistence)||void 0===t?void 0:t.props[e]}getSessionProperty(e){var t
return null===(t=this.sessionPersistence)||void 0===t?void 0:t.props[e]}toString(){var e
let t=null!==(e=this.config.name)&&void 0!==e?e:Oo
return t!==Oo&&(t=Oo+"."+t),t}_isIdentified(){var e,t
return"identified"===(null===(e=this.persistence)||void 0===e?void 0:e.get_property(Oe))||"identified"===(null===(t=this.sessionPersistence)||void 0===t?void 0:t.get_property(Oe))}_hasPersonProcessing(){var e,t,n,i
return!("never"===this.config.person_profiles||"identified_only"===this.config.person_profiles&&!this._isIdentified()&&O(this.getGroups())&&(null===(e=this.persistence)||void 0===e||null===(t=e.props)||void 0===t||!t[le])&&(null===(n=this.persistence)||void 0===n||null===(i=n.props)||void 0===i||!i[Be]))}_shouldCapturePageleave(){return!0===this.config.capture_pageleave||"if_capture_pageview"===this.config.capture_pageleave&&this.config.capture_pageview}createPersonProfile(){this._hasPersonProcessing()||this._requirePersonProcessing("posthog.createPersonProfile")&&this.setPersonProperties({},{})}_requirePersonProcessing(e){return"never"===this.config.person_profiles?(G.error(e+' was called, but process_person is set to "never". This call will be ignored.'),!1):(this._register_single(Be,!0),!0)}_sync_opt_out_with_persistence(){var e,t
const n=this.consent.isOptedOut(),i=this.config.opt_out_persistence_by_default,r=this.config.disable_persistence||n&&!!i
var o,s;(null===(e=this.persistence)||void 0===e?void 0:e.disabled)!==r&&(null===(o=this.persistence)||void 0===o||o.set_disabled(r)),(null===(t=this.sessionPersistence)||void 0===t?void 0:t.disabled)!==r&&(null===(s=this.sessionPersistence)||void 0===s||s.set_disabled(r))}opt_in_capturing(e){var t
this.consent.optInOut(!0),this._sync_opt_out_with_persistence(),(A(null==e?void 0:e.captureEventName)||null!=e&&e.captureEventName)&&this.capture(null!==(t=null==e?void 0:e.captureEventName)&&void 0!==t?t:"$opt_in",null==e?void 0:e.captureProperties,{send_instantly:!0}),this.config.capture_pageview&&this._captureInitialPageview()}opt_out_capturing(){this.consent.optInOut(!1),this._sync_opt_out_with_persistence()}has_opted_in_capturing(){return this.consent.isOptedIn()}has_opted_out_capturing(){return this.consent.isOptedOut()}clear_opt_in_out_capturing(){this.consent.reset(),this._sync_opt_out_with_persistence()}_is_bot(){return v?co(v,this.config.custom_blocked_useragents):void 0}_captureInitialPageview(){m&&!this._initialPageviewCaptured&&(this._initialPageviewCaptured=!0,this.capture("$pageview",{title:m.title},{send_instantly:!0}))}debug(e){!1===e?(null==h||h.console.log("You've disabled debug mode."),localStorage&&localStorage.removeItem("ph_debug"),this.set_config({debug:!1})):(null==h||h.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),localStorage&&localStorage.setItem("ph_debug","true"),this.set_config({debug:!0}))}}!function(e,t){for(let n=0;n<t.length;n++)e.prototype[t[n]]=ee(e.prototype[t[n]])}(Do,["identify"])
const Bo=function(){const e=Ro[Oo]=new Do
return function(){function e(){e.done||(e.done=!0,Ao=!1,J(Ro,(function(e){e._dom_loaded()})))}null!=m&&m.addEventListener&&("complete"===m.readyState?e():m.addEventListener("DOMContentLoaded",e,!1)),h&&ie(h,"load",e,!0)}(),e}()
function Ho(...e){console.log(...e)}function qo(e,t){Bo.capture(e,t)}function Uo(){"string"==typeof window.self&&(o(),window.self=window),function(){try{Bo.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N",{advanced_disable_decide:!0,advanced_disable_feature_flags:!0,advanced_disable_feature_flags_on_first_load:!0,advanced_disable_toolbar_metrics:!0,api_host:"https://us.i.posthog.com",autocapture:!1,capture_pageview:!1,disable_compression:!1,disable_persistence:!0,disable_session_recording:!0,disable_surveys:!0,person_profiles:"identified_only"})}catch(e){Ho(e)}}()}let Go=0,Wo=0,zo=0,Vo=0,Qo=0,Jo=0,Ko=0
const Xo=()=>Date.now(),Yo=()=>Math.floor(Xo()/1e3)
function Zo(){return Go||(Go=Xo()),Go}function es(){return Wo||(Wo=Zo()-3e5),Wo}function ts(){return zo||(zo=Zo()-1728e5),zo}function ns(){return Vo||(Vo=Math.floor(Zo()/1e3)),Vo}function is(){return Qo||(Qo=ns()-120),Qo}function rs(){return Jo||(Jo=ns()-86400),Jo}function os(){return Ko||(Ko=ns()-604800),Ko}function ss(e){return null===e}function as(e){return void 0===e}const ls=`${document.location.protocol}//${document.location.host}/`,cs=window.HCS?.defines?.cdn,us=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],ds=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],hs=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],fs=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,ps=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,gs=/guild_id=(?<guildId>\d+)/,_s=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,vs=/player_id=(?<playerId>\d+)/,ms=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,ys=/VL:.+?(?<vl>\d+)/,bs=.2,ws="joinallgroupsundersize",ks="index.php",Ss="?cmd=",Es=`${ks}${Ss}`,xs="&subcmd=",Ps="&target_username=",$s=`${Es}auctionhouse`,Ts=`${$s}&search=`,Cs=`${Es}log`,Is=`${Es}ignore${xs}add&ignore_username=`,Ls=`${Es}profile`,Rs=`${Ls}&player_id=`,Fs=`${Ls}${xs}dropitems`,Os=`${Es}trade&target_player=`,As=`${Es}trade${xs}createsecure${Ps}`,Ms=`${Es}arena${xs}`,Ns=`${ks}${`${Ss}notepad&blank=1${xs}`}`,js=`${Ns}auctionsearch`,Ds=`${Es}points`,Bs=`${Es}guild${xs}`,Hs=`${Bs}log`,qs=`${Bs}scouttower`,Us=`${Bs}groups&subcmd2=`,Gs=`${Bs}inventory&subcmd2=report&user=`,Ws=`${Bs}view&guild_id=`,zs=`${Us}joinall`,Vs=`${Us}${ws}`,Qs=`${Es}world`,Js=`${Es}findplayer`,Ks=`${Js}&search_show_first=1&search_username=`,Xs=`${Es}blacksmith`,Ys=`${Es}quickbuff`,Zs=`${Es}composing`,ea=`${Es}attackplayer${Ps}`,ta=`${Es}${xs}viewupdatearchive`,na=`${Es}${xs}viewarchive`,ia=`${Es}bounty`,ra=`${Es}inventing${xs}viewrecipe&recipe_id=`,oa=`https://guide.fallensword.com/${Es}`,sa="after-update.actionlist",aa="buffs.player",la="update.player",ca="level.stats-player",ua="gold.stats-player",da="prompt.worldDialogShop",ha="keydown.controls",fa="update.realm",pa="-success.action-response",ga=`-1${pa}`,_a=`1${pa}`,va=`2${pa}`,ma=`9${pa}`,ya=`5${pa}`,ba=`25${pa}`,wa=1,ka=2,Sa=16,Ea=128,xa=256,Pa="needToCompose",$a="lastComposeCheck",Ta="characterVirtualLevel",Ca="enableGuildActivityTracker",Ia="lastLadderReset",La="form",Ra="table",Fa="td",Oa="tr",Aa="fsh_buffLog",Ma="statbar-level-tooltip-general",Na="stat-level",ja="stat-defense",Da="stat-attack",Ba="stat-damage",Ha="stat-armor",qa="stat-hp",Ua="stat-vl",Ga="GM_",Wa=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],za=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],Va=`${cs}ui/world/action_spinner.gif`,Qa=".fa-envelope",Ja='a[href*="&player_id="]',Ka=.002,Xa=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],Ya='input[name="blockedSkillList[]"]'
var Za={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addServerNode:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252",compactRanks:!1,lastModalGuildLogCheck:0}
const el=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function tl(e,t){const n=window.localStorage.getItem(Ga+e)
return ss(n)||as(n)?t:function(e){const t=el.find((t=>e.startsWith(t[0])))
return t?t[1](e):e}(n)}function nl(e){return tl(e,Za[e])}function il(e){return"boolean"==typeof e}function rl(e){return"string"==typeof e}function ol(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(Ga+e,t+n)}const sl=[[rl,(e,t)=>{ol(e,"S]",t)}],[e=>"number"==typeof e,(e,t)=>{t.toString().indexOf(".")<0&&ol(e,"N]",t)}],[il,(e,t)=>{ol(e,"B]",t)}]]
function al(e,t){const n=sl.find((e=>e[0](t)))
n&&n[1](e,t)}function ll(e){const t=`screenview__${e}`,n=nl(t)
Number.isFinite(n)&&n>rs()||(qo(t),al(t,ns()))}function cl(e){return"function"==typeof e}function ul(e){return"object"==typeof e}function dl(e,t){try{return JSON.parse(e,t)}catch(e){}}function hl(e,t){return t?t.querySelector(e):document.querySelector(e)}function fl(e){const t=hl("link",document.body)
return new Promise((n=>{const i=document.createElement("link")
i.type="text/css",i.rel="stylesheet",i.onload=()=>{n()},i.href=e,t?t.before(i):document.body.append(i)}))}var pl="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function gl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _l,vl={exports:{}}
var ml=(_l||(_l=1,vl.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==pl?pl:"undefined"!=typeof self?self:{}
function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){var t=e.default
if("function"==typeof t){var n=function(){return t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),n}var i={},r={},o={},s={},a="<unknown>"
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
return!0}function d(e){return"function"!=typeof Object.isExtensible||Object.isExtensible(e)}function h(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=console),!e)return[]
try{var i=a.parse(e).map((function(e){return{file:e.file,method:e.methodName,number:e.lineNumber,column:e.column}}))
return t&&i.splice(0,p(i)),i}catch(e){return n.debug(e),[]}}function f(e){var t=!1,n=!1
return e.file&&(t=e.file.toLowerCase().indexOf("@honeybadger-io")>-1),e.method&&(n=e.method.toLowerCase().indexOf("@honeybadger-io")>-1),t||n}function p(e){for(var n=0,i=0;i<e.length;i++){var r=e[i]
if(!f(r)){if(!r.file||"<anonymous>"===r.file){var o=e[i+1]
if(o&&f(o)){n++
continue}}break}n++}return n||t.DEFAULT_BACKTRACE_SHIFT}function g(e,t){if(e.cause){for(var n=[],i=e;n.length<3&&(i=i.cause);)n.push({class:i.name,message:i.message,backtrace:"string"==typeof i.stack?h(i.stack,!1,t):null})
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
e[t]=n(i),e[t].__hb_original=i}catch(e){}}t.merge=l,t.mergeNotice=c,t.objectIsEmpty=u,t.objectIsExtensible=d,t.makeBacktrace=h,t.DEFAULT_BACKTRACE_SHIFT=3,t.calculateBacktraceShift=p,t.getCauses=g,t.getSourceForBacktrace=_,t.runBeforeNotifyHandlers=v,t.runAfterNotifyHandlers=m,t.shallowClone=y,t.sanitize=b,t.logger=k,t.makeNotice=S,t.isErrorObject=E,t.instrument=x
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
var de,he=r,fe=he.Util.instrument,pe=he.Util.makeNotice,ge=he.Util.globalThisOrWindow,_e=0
function ve(){_e+=1,clearTimeout(de),de=setTimeout((function(){_e=0}))}function me(e){return void 0===e&&(e=ge()),{load:function(t){fe(e,"onerror",(function(n){var i=function(e,n,i,r,o){if(t.logger.debug("window.onerror callback invoked",arguments),_e>0)return t.logger.debug("Ignoring window.onerror (error likely reported earlier)",arguments),void(_e-=1)
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
var c=r,u=X,d=ue,h=l(ye),f=l(Ee),p=l(Re),g=l(Ne),_=qe,v=Ke,m=c.Util.merge,y=c.Util.filter,b=c.Util.objectIsExtensible,w=c.Util.globalThisOrWindow,k=function(){var e=w(),t=""
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
throw i.__lastWrapErr=e,(0,d.ignoreNextOnError)(),i.addBreadcrumb(t.component?"".concat(t.component,": ").concat(e.name):e.name,{category:"error",metadata:{message:e.message,name:e.name,stack:e.stack}}),i.config.enableUncaught&&i.notify(e),e}}}return n.___hb.___hb=n.___hb,n.___hb}catch(e){return n}},n.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},n.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},n}(c.Client),x={name:"@honeybadger-io/js",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",version:"6.10.1"},P=function(){return"undefined"!=typeof navigator?"Honeybadger JS Browser Client ".concat(x.version,"; ").concat(navigator.userAgent):"Honeybadger JS Browser Client ".concat(x.version,"; n/a; n/a")},$=new E({__plugins:[(0,d.onError)(),(0,h.default)(),(0,p.default)(),(0,g.default)(),(0,f.default)(),c.Plugins.events()]})
$.setNotifier(x)
var T=r
Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return T.Types}}),t.default=$}(i)
var et=t(i)
return et}()),vl.exports),yl=gl(ml)
const bl=["attackplayer.min.js","dynamically imported module","fs.min.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","openuserjs.org","play method is not allowed","world.min.js"],wl=e=>bl.some((t=>e.includes(t)))
function kl(e){if(wl(e.stack))return!1}function Sl(){!function(){yl.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.140"})
const e=o()
e&&yl.setContext({user_id:e}),yl.afterNotify((e=>{if(e)return Ho(`Honeybadger notification failed: ${e}`)})),yl.beforeNotify(kl)}()}var El={}
function xl(e,t,n,i){e instanceof EventTarget&&e.addEventListener(t,n,i)}function Pl(e){nl("betaOptIn")&&Ho("sendException",e),yl.notify(e,"sendException")}function $l(e,t){return e||t}const Tl=[null]
function Cl(e,t){return Tl[e]&&Tl[e].priority<Tl[t].priority}function Il(e,t){const n=Tl[e]
Tl[e]=Tl[t],Tl[t]=n}function Ll(e,t){return e?2*t:2*t+1}function Rl(){if(1===Tl.length)return
const e=Tl[1].data,t=Tl.pop()
return Tl.length>1&&(Tl[1]=t,function(e){let t=e
for(;2*t<Tl.length;){const e=Ll(!Cl(2*t+1,2*t),t)
if(Cl(t,e))break
Il(t,e),t=e}}(1)),e}function Fl(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!Cl(t,e))break
Il(t,e),t=e}}(Tl.push({data:e,priority:t})-1)}let Ol=!0
const Al="fshMessage"
let Ml=0
function Nl(){Tl.length-1==0?Ol=!0:(Ol=!1,window.postMessage(Al,window.location.origin))}function jl(){const e=Rl()
cl(e)?e():function(e){as(e)||Pl(`pop() was not a function (${typeof e})`)}(e)}function Dl(e){const t=e.data
e.origin===window.location.origin&&t===Al&&function(){try{jl()}catch(e){yl.notify(e,"taskFailure")}finally{Nl()}}()}function Bl(e,t,n,i){if(cl(t)){Ml||(xl(window,"message",Dl),Ml=!0)
const r=$l(i,window),o=$l(n,[])
Fl(t.bind(r,...o),e),Ol&&Nl()}}function Hl(e,t){return new URLSearchParams(e).get(t)}function ql(e){try{return Hl(decodeURIComponent(window.location.search),e)}catch(e){return Ho(e),""}}function Ul(){}const Gl=e=>e
function Wl(e,t){for(const n in t)e[n]=t[n]
return e}function zl(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}function Vl(e){return e()}function Ql(){return Object.create(null)}function Jl(e){e.forEach(Vl)}function Kl(e){return"function"==typeof e}function Xl(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let Yl
function Zl(e,t){return e===t||(Yl||(Yl=document.createElement("a")),Yl.href=t,e===Yl.href)}function ec(e,...t){if(null==e){for(const e of t)e(void 0)
return Ul}const n=e.subscribe(...t)
return n.unsubscribe?()=>n.unsubscribe():n}function tc(e){let t
return ec(e,(e=>t=e))(),t}function nc(e,t,n){e.$$.on_destroy.push(ec(t,n))}function ic(e,t,n,i){if(e){const r=rc(e,t,n,i)
return e[0](r)}}function rc(e,t,n,i){return e[1]&&i?Wl(n.ctx.slice(),e[1](i(t))):n.ctx}function oc(e,t,n,i){if(e[2]&&i){const r=e[2](i(n))
if(void 0===t.dirty)return r
if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length)
for(let i=0;i<n;i+=1)e[i]=t.dirty[i]|r[i]
return e}return t.dirty|r}return t.dirty}function sc(e,t,n,i,r,o){if(r){const s=rc(t,n,i,o)
e.p(s,r)}}function ac(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32
for(let e=0;e<n;e++)t[e]=-1
return t}return-1}function lc(e){const t={}
for(const n in e)t[n]=!0
return t}function cc(e){let t=!1
return function(...n){t||(t=!0,e.call(this,...n))}}function uc(e){return null==e?"":e}function dc(e){return e&&Kl(e.destroy)?e.destroy:Ul}function hc(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const fc="undefined"!=typeof window
let pc=fc?()=>window.performance.now():()=>Date.now(),gc=fc?e=>requestAnimationFrame(e):Ul
const _c=new Set
function vc(e){_c.forEach((t=>{t.c(e)||(_c.delete(t),t.f())})),0!==_c.size&&gc(vc)}function mc(e,t){e.appendChild(t)}function yc(e){if(!e)return document
const t=e.getRootNode?e.getRootNode():e.ownerDocument
return t&&t.host?t:e.ownerDocument}function bc(e){const t=Ec("style")
return t.textContent="/* empty */",function(e,t){mc(e.head||e,t),t.sheet}(yc(e),t),t.sheet}function wc(e,t,n){e.insertBefore(t,n||null)}function kc(e){e.parentNode&&e.parentNode.removeChild(e)}function Sc(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function Ec(e){return document.createElement(e)}function xc(e){return document.createTextNode(e)}function Pc(){return xc(" ")}function $c(){return xc("")}function Tc(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function Cc(e){return function(t){return t.preventDefault(),e.call(this,t)}}function Ic(e){return function(t){t.target===this&&e.call(this,t)}}function Lc(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Rc(e,t,n){const i=t.toLowerCase()
i in e?e[i]="boolean"==typeof e[i]&&""===n||n:t in e?e[t]="boolean"==typeof e[t]&&""===n||n:Lc(e,t,n)}function Fc(e){return""===e?null:+e}function Oc(e,t){t=""+t,e.data!==t&&(e.data=t)}function Ac(e,t){e.value=null==t?"":t}function Mc(e,t,n,i){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function Nc(e,t,n){for(let n=0;n<e.options.length;n+=1){const i=e.options[n]
if(i.__value===t)return void(i.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}function jc(e){const t=e.querySelector(":checked")
return t&&t.__value}let Dc
function Bc(){if(void 0===Dc){Dc=!1
try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){Dc=!0}}return Dc}function Hc(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative")
const n=Ec("iframe")
n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1
const i=Bc()
let r
return i?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=Tc(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=Tc(n.contentWindow,"resize",t),t()}),mc(e,n),()=>{(i||r&&n.contentWindow)&&r(),kc(n)}}function qc(e,t,n){e.classList.toggle(t,!!n)}function Uc(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}class Gc{is_svg=!1
e=void 0
n=void 0
t=void 0
a=void 0
constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){var i
this.e||(this.is_svg?this.e=(i=t.nodeName,document.createElementNS("http://www.w3.org/2000/svg",i)):this.e=Ec(11===t.nodeType?"TEMPLATE":t.nodeName),this.t="TEMPLATE"!==t.tagName?t:t.content,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)wc(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(kc)}}function Wc(e,t){return new e(t)}const zc=new Map
let Vc,Qc=0
function Jc(e,t,n,i,r,o,s,a=0){const l=16.666/i
let c="{\n"
for(let e=0;e<=1;e+=l){const i=t+(n-t)*o(e)
c+=100*e+`%{${s(i,1-i)}}\n`}const u=c+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length
for(;n--;)t=(t<<5)-t^e.charCodeAt(n)
return t>>>0}(u)}_${a}`,h=yc(e),{stylesheet:f,rules:p}=zc.get(h)||function(e,t){const n={stylesheet:bc(t),rules:{}}
return zc.set(e,n),n}(h,e)
p[d]||(p[d]=!0,f.insertRule(`@keyframes ${d} ${u}`,f.cssRules.length))
const g=e.style.animation||""
return e.style.animation=`${g?`${g}, `:""}${d} ${i}ms linear ${r}ms 1 both`,Qc+=1,d}function Kc(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-i.length
r&&(e.style.animation=i.join(", "),Qc-=r,Qc||gc((()=>{Qc||(zc.forEach((e=>{const{ownerNode:t}=e.stylesheet
t&&kc(t)})),zc.clear())})))}function Xc(e){Vc=e}function Yc(){if(!Vc)throw new Error("Function called outside component initialization")
return Vc}function Zc(e){Yc().$$.on_mount.push(e)}function eu(e){Yc().$$.after_update.push(e)}function tu(e){Yc().$$.on_destroy.push(e)}function nu(){const e=Yc()
return(t,n,{cancelable:i=!1}={})=>{const r=e.$$.callbacks[t]
if(r){const o=Uc(t,n,{cancelable:i})
return r.slice().forEach((t=>{t.call(e,o)})),!o.defaultPrevented}return!0}}function iu(e,t){const n=e.$$.callbacks[t.type]
n&&n.slice().forEach((e=>e.call(this,t)))}const ru=[],ou=[]
let su=[]
const au=[],lu=Promise.resolve()
let cu=!1
function uu(){cu||(cu=!0,lu.then(vu))}function du(){return uu(),lu}function hu(e){su.push(e)}function fu(e){au.push(e)}const pu=new Set
let gu,_u=0
function vu(){if(0!==_u)return
const e=Vc
do{try{for(;_u<ru.length;){const e=ru[_u]
_u++,Xc(e),mu(e.$$)}}catch(e){throw ru.length=0,_u=0,e}for(Xc(null),ru.length=0,_u=0;ou.length;)ou.pop()()
for(let e=0;e<su.length;e+=1){const t=su[e]
pu.has(t)||(pu.add(t),t())}su.length=0}while(ru.length)
for(;au.length;)au.pop()()
cu=!1,pu.clear(),Xc(e)}function mu(e){if(null!==e.fragment){e.update(),Jl(e.before_update)
const t=e.dirty
e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(hu)}}function yu(e,t,n){e.dispatchEvent(Uc(`${t?"intro":"outro"}${n}`))}const bu=new Set
let wu
function ku(){wu={r:0,c:[],p:wu}}function Su(){wu.r||Jl(wu.c),wu=wu.p}function Eu(e,t){e&&e.i&&(bu.delete(e),e.i(t))}function xu(e,t,n,i){if(e&&e.o){if(bu.has(e))return
bu.add(e),wu.c.push((()=>{bu.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}else i&&i()}const Pu={duration:0}
function $u(e,t,n,i){let r,o=t(e,n,{direction:"both"}),s=i?0:1,a=null,l=null,c=null
function u(){c&&Kc(e,c)}function d(e,t){const n=e.b-s
return t*=Math.abs(n),{a:s,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function h(t){const{delay:n=0,duration:i=300,easing:h=Gl,tick:f=Ul,css:p}=o||Pu,g={start:pc()+n,b:t}
t||(g.group=wu,wu.r+=1),"inert"in e&&(t?void 0!==r&&(e.inert=r):(r=e.inert,e.inert=!0)),a||l?l=g:(p&&(u(),c=Jc(e,s,t,i,n,h,p)),t&&f(0,1),a=d(g,i),hu((()=>yu(e,t,"start"))),function(e){let t
0===_c.size&&gc(vc),new Promise((n=>{_c.add(t={c:e,f:n})}))}((t=>{if(l&&t>l.start&&(a=d(l,i),l=null,yu(e,a.b,"start"),p&&(u(),c=Jc(e,s,a.b,a.duration,0,h,o.css))),a)if(t>=a.end)f(s=a.b,1-s),yu(e,a.b,"end"),l||(a.b?u():--a.group.r||Jl(a.group.c)),a=null
else if(t>=a.start){const e=t-a.start
s=a.a+a.d*h(e/a.duration),f(s,1-s)}return!(!a&&!l)})))}return{run(e){Kl(o)?(gu||(gu=Promise.resolve(),gu.then((()=>{gu=null}))),gu).then((()=>{o=o({direction:e?"in":"out"}),h(e)})):h(e)},end(){u(),a=l=null}}}function Tu(e){return void 0!==e?.length?e:Array.from(e)}function Cu(e,t){e.d(1),t.delete(e.key)}function Iu(e,t){xu(e,1,1,(()=>{t.delete(e.key)}))}function Lu(e,t,n,i,r,o,s,a,l,c,u,d){let h=e.length,f=o.length,p=h
const g={}
for(;p--;)g[e[p].key]=p
const _=[],v=new Map,m=new Map,y=[]
for(p=f;p--;){const e=d(r,o,p),i=n(e)
let a=s.get(i)
a?y.push((()=>a.p(e,t))):(a=c(i,e),a.c()),v.set(i,_[p]=a),i in g&&m.set(i,Math.abs(p-g[i]))}const b=new Set,w=new Set
function k(e){Eu(e,1),e.m(a,u),s.set(e.key,e),u=e.first,f--}for(;h&&f;){const t=_[f-1],n=e[h-1],i=t.key,r=n.key
t===n?(u=t.first,h--,f--):v.has(r)?!s.has(i)||b.has(i)?k(t):w.has(r)?h--:m.get(i)>m.get(r)?(w.add(i),k(t)):(b.add(r),h--):(l(n,s),h--)}for(;h--;){const t=e[h]
v.has(t.key)||l(t,s)}for(;f;)k(_[f-1])
return Jl(y),_}function Ru(e,t,n){const i=e.$$.props[t]
void 0!==i&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function Fu(e){e&&e.c()}function Ou(e,t,n){const{fragment:i,after_update:r}=e.$$
i&&i.m(t,n),hu((()=>{const t=e.$$.on_mount.map(Vl).filter(Kl)
e.$$.on_destroy?e.$$.on_destroy.push(...t):Jl(t),e.$$.on_mount=[]})),r.forEach(hu)}function Au(e,t){const n=e.$$
null!==n.fragment&&(!function(e){const t=[],n=[]
su.forEach((i=>-1===e.indexOf(i)?t.push(i):n.push(i))),n.forEach((e=>e())),su=t}(n.after_update),Jl(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Mu(e,t,n,i,r,o,s=null,a=[-1]){const l=Vc
Xc(e)
const c=e.$$={fragment:null,ctx:[],props:o,update:Ul,not_equal:r,bound:Ql(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:Ql(),dirty:a,skip_bound:!1,root:t.target||l.$$.root}
s&&s(c.root)
let u=!1
if(c.ctx=n?n(e,t.props||{},((t,n,...i)=>{const o=i.length?i[0]:n
return c.ctx&&r(c.ctx[t],c.ctx[t]=o)&&(!c.skip_bound&&c.bound[t]&&c.bound[t](o),u&&function(e,t){-1===e.$$.dirty[0]&&(ru.push(e),uu(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n})):[],c.update(),u=!0,Jl(c.before_update),c.fragment=!!i&&i(c.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target)
c.fragment&&c.fragment.l(e),e.forEach(kc)}else c.fragment&&c.fragment.c()
t.intro&&Eu(e.$$.fragment),Ou(e,t.target,t.anchor),vu()}Xc(l)}class Nu{$$=void 0
$$set=void 0
$destroy(){Au(this,1),this.$destroy=Ul}$on(e,t){if(!Kl(t))return Ul
const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[])
return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t
this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ju=[]
function Du(e,t=Ul){let n
const i=new Set
function r(t){if(Xl(e,t)&&(e=t,n)){const t=!ju.length
for(const t of i)t[1](),ju.push(t,e)
if(t){for(let e=0;e<ju.length;e+=2)ju[e][0](ju[e+1])
ju.length=0}}}function o(t){r(t(e))}return{set:r,update:o,subscribe:function(s,a=Ul){const l=[s,a]
return i.add(l),1===i.size&&(n=t(r,o)||Ul),s(e),()=>{i.delete(l),0===i.size&&n&&(n(),n=null)}}}}function Bu(e,t,n){const i=!Array.isArray(e),r=i?[e]:e
if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const o=t.length<2
return s=(e,n)=>{let s=!1
const a=[]
let l=0,c=Ul
const u=()=>{if(l)return
c()
const r=t(i?a[0]:a,e,n)
o?e(r):c=Kl(r)?r:Ul},d=r.map(((e,t)=>ec(e,(e=>{a[t]=e,l&=~(1<<t),s&&u()}),(()=>{l|=1<<t}))))
return s=!0,u(),function(){Jl(d),c(),s=!1}},{subscribe:Du(n,s).subscribe}
var s}const Hu=Du("")
function qu(e){const t=e-1
return t*t*t+1}function Uu(e,{delay:t=0,duration:n=400,easing:i=Gl}={}){const r=+getComputedStyle(e).opacity
return{delay:t,duration:n,easing:i,css:e=>"opacity: "+e*r}}function Gu(e,{delay:t=0,duration:n=400,easing:i=qu,x:r=0,y:o=0,opacity:s=0}={}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-s),[d,h]=hc(r),[f,p]=hc(o)
return{delay:t,duration:n,easing:i,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*d}${h}, ${(1-e)*f}${p});\n\t\t\topacity: ${l-u*t}`}}function Wu(e,{delay:t=0,duration:n=400,easing:i=qu,axis:r="y"}={}){const o=getComputedStyle(e),s=+o.opacity,a="y"===r?"height":"width",l=parseFloat(o[a]),c="y"===r?["top","bottom"]:["left","right"],u=c.map((e=>`${e[0].toUpperCase()}${e.slice(1)}`)),d=parseFloat(o[`padding${u[0]}`]),h=parseFloat(o[`padding${u[1]}`]),f=parseFloat(o[`margin${u[0]}`]),p=parseFloat(o[`margin${u[1]}`]),g=parseFloat(o[`border${u[0]}Width`]),_=parseFloat(o[`border${u[1]}Width`])
return{delay:t,duration:n,easing:i,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*s};${a}: ${e*l}px;padding-${c[0]}: ${e*d}px;padding-${c[1]}: ${e*h}px;margin-${c[0]}: ${e*f}px;margin-${c[1]}: ${e*p}px;border-${c[0]}-width: ${e*g}px;border-${c[1]}-width: ${e*_}px;`}}function zu(e){let t,n,i,r,o,s,a
return{c(){t=Ec("div"),n=Ec("p"),i=xc(e[0]),Lc(n,"class","svelte-1c416no"),Lc(t,"role","alert"),Lc(t,"class","svelte-1c416no"),Mc(t,"transform",e[2])},m(r,l){wc(r,t,l),mc(t,n),mc(n,i),o=!0,s||(a=Tc(t,"click",e[4]),s=!0)},p(e,n){(!o||1&n)&&Oc(i,e[0]),4&n&&Mc(t,"transform",e[2])},i(e){o||(e&&hu((()=>{o&&(r||(r=$u(t,Gu,{delay:250,duration:300,x:0,y:-100,opacity:.5},!0)),r.run(1))})),o=!0)},o(e){e&&(r||(r=$u(t,Gu,{delay:250,duration:300,x:0,y:-100,opacity:.5},!1)),r.run(0)),o=!1},d(e){e&&kc(t),e&&r&&r.end(),s=!1,a()}}}function Vu(e){let t,n=e[1]&&zu(e)
return{c(){n&&n.c(),t=$c()},m(e,i){n&&n.m(e,i),wc(e,t,i)},p(e,[i]){e[1]?n?(n.p(e,i),2&i&&Eu(n,1)):(n=zu(e),n.c(),Eu(n,1),n.m(t.parentNode,t)):n&&(ku(),xu(n,1,1,(()=>{n=null})),Su())},i(e){Eu(n)},o(e){xu(n)},d(e){e&&kc(t),n&&n.d(e)}}}function Qu(e,t,n){let i
nc(e,Hu,(e=>n(0,i=e)))
let{ms:r=3e3}=t,o=!1,s=0,a=""
const l=(e,t)=>{clearTimeout(s),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
n(2,a=`translate(${t}px, ${e.offsetTop}px)`),n(1,o=!0)}(),t>0&&(s=setTimeout((()=>{var e
n(1,o=!1),i="",e=i,Hu.set(e)}),t))):n(1,o=!1)}
tu((()=>clearTimeout(s)))
return e.$$set=e=>{"ms"in e&&n(3,r=e.ms)},e.$$.update=()=>{9&e.$$.dirty&&l(i,r)},[i,o,a,r,()=>{n(1,o=!1)}]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4")
class Ju extends Nu{constructor(e){super(),Mu(this,e,Qu,Vu,Xl,{ms:3})}}let Ku
function Xu(e){e&&(!function(){if(!Ku)Ku=!0,new Ju({target:document.body})}(),Hu.set(e))}function Yu(e,t){return Array.from(e,t)}function Zu(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function ed(e,t){return Yu(Zu(e,t))}function td(e){return e.trim()}function nd(e){const t=n(e)
if(rl(t))return td(t)}function id(e,t){return nd(t).includes(e)}function rd(e,...t){return(...n)=>e(...t,...n)}let od=0,sd=0,ad=0
function ld(){return od||(od=t("pCL")),od}function cd(){return sd||(sd=t("pCC")),sd}function ud(){const e=ed("a",ld()).filter(function(e){return rd(id,e)}("message"))
e.length&&async function(){const e=new Audio(nl("defaultMessageSound"))
try{await e.play()}catch(e){Xu("Message Sound Not Allowed")}}()}function dd(e,t,n,i){var r
xl(e,t,n,{once:!0,...(r=i,il(r)?{capture:r}:r)})}let hd=0,fd=0,pd=0,gd=0,_d=0,vd=0
function md(e){fd=e.clientX,pd=e.clientY}function yd(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(hd,null).transform)
gd=e[0]-fd,_d=e[1]-pd}function bd(e){e.clientX===fd&&e.clientY===pd||(hd.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+gd).toString()}, ${(e.clientY+_d).toString()})`,md(e))}function wd(e){return function(e){const t=performance.now()
t-vd>16&&(bd(e),vd=t)}(e),e.preventDefault(),!1}function kd(e){return bd(e),function(e,t,n,i){e instanceof EventTarget&&e.removeEventListener(t,n,i)}(document.body,"dragover",wd),e.preventDefault(),!1}function Sd(e,t){!function(e,t){hd=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),md(t),yd(),vd=0,t.dataTransfer.setData("text/plain",""),xl(document.body,"dragover",wd),dd(document.body,"drop",kd)}function Ed(e,t){e.draggable=!0,xl(e,"dragstart",rd(Sd,t))}function xd(e){return String(e).replaceAll(" ","_")}const Pd={}
function $d(e,t,n){if(!e)return
const i=function(e,t){let n=xd(e)
return t&&(n+=`__${xd(t)}`),n}(e,t),r=function(e,t){let n=e
return t&&(n+=`__${xd(t)}`),n}(i,n)
Pd[r]||(Pd[r]=!0,qo(i,function(e){return e?{eventLabel:e}:null}(n)))}let Td=0
function Cd(e){const t=l(/\sguildId: (?<id>\d{1,6}),/,n(e))
t&&(Td=Number(t))}function Id(){return Td||ed("script",document.body).forEach(Cd),Td}function Ld(e){return Object.entries(e)}function Rd(e,t,[n,i]){ul(i)&&null!==i?e(t[n],i):t[n]=i}function Fd(e,t){Ld(t).forEach(rd(Rd,Fd,e))}function Od(e,t){const n=document.createElement(e)
return t&&Fd(n,t),n}function Ad(e){return Od("div",e)}function Md(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function Nd(e,t){return Yu(Md(e,t))}function jd(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function Dd(e,t){t instanceof Element&&(t.innerHTML=String(e))}const Bd={id:"content",style:{display:"none"}},Hd={width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}
function qd(e){let n=t("content")
n?Dd("",n):(n=Ad(Bd),jd(document.body,n)),$(n).dialog(Hd),Nd("ui-dialog-titlebar-close").forEach((e=>e.blur())),e(n)}async function Ud(e){(await e).default()}function Gd(){Ud(import("./buffLog-JzBNAG0a.js"))}function Wd(){Ud(import("./combatLog-DbmoHYQX.js"))}function zd(){Ud(import("./creatureLog-oaTLnekz.js"))}function Vd(){Ud(import("./fsboxlog-DLtrk_xx.js"))}function Qd(){Ud(import("./guildLog-CZYoSsnT.js"))}function Jd(){Ud(import("./guildTracker-CXmC1g0U.js"))}async function Kd(e){(await import("./injectAuctionSearch-CTcclcEs.js")).default(e)}async function Xd(e){(await import("./findBuffs-fgnYKBpj.js")).injectFindBuffs(e)}async function Yd(e){(await import("./findBuffs-fgnYKBpj.js")).injectFindOther(e)}async function Zd(e){(await import("./injectOnlinePlayers-CeC2fPSV.js")).default(e)}function eh(){Ud(import("./potReport-DX0JXKtF.js"))}function th(){Ud(import("./quickExtract-Ch4xG4Ic.js"))}function nh(){Ud(import("./quickLinksManager-Nxc_jQPF.js"))}async function ih(e){(await import("./quickWear-caPSL9-Q.js")).default(e)}function rh(){Ud(import("./recipeMgr-WJoW85fX.js"))}function oh(){Ud(import("./reliclist-BD1-VxTP.js"))}function sh(){Ud(import("./superelite-CMU7Ykwv.js"))}function ah(e){return new Promise((t=>{setTimeout(t,e)}))}function lh(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class ch extends Error{constructor([e,t,n,i],...r){super(function(e,t,n,i){const r=`${t.status} ${t.statusText} - `
if(t.statusText===i.toString())return r+lh(e)
const o=`${r+n} ${i} - ${lh(e)}`
return"parsererror"===n?`${o} - ${t.responseText}`:o}(e,t,n,i),...r),Error.captureStackTrace&&Error.captureStackTrace(this,ch),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=i}}function uh(e){xl(window,"beforeunload",(()=>e.abort()))}const dh=900
let hh=0
const fh=5
let ph=0
async function gh(){ph<fh-$.active&&performance.now()-hh>=dh?(ph=fh-$.active,hh=performance.now()):await ah(100)}async function _h(e,t=10){await async function(){for(;ph<1;)await gh()
ph-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=uh,$.ajax(t).fail(((e,t,n)=>{e.textStatus=t,e.errorThrown=n}))}(e)}catch(n){if(t&&n.status>500)return _h(e,t-1)
!function(e,t){if(![0,500,503].includes(t.status))throw new ch([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}function vh(e){return Fd(e,{url:ks,data:{no_mobile:1}}),_h(e)}async function mh(e){return dl(await vh({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function yh(e){return mh({cmd:"export",...e})}function bh(){return yh({inc_tagged:"1",subcmd:"guild_store"})}function wh(e){return Od("a",e)}function kh(e){e instanceof Element&&e.click()}function Sh(e,t){const n=URL.createObjectURL(e),i=wh({download:t,href:n,style:{display:"none"}})
jd(document.body,i),kh(i),document.body.removeChild(i),setTimeout((()=>{URL.revokeObjectURL(n)}),0)}async function Eh(e,t){return dl(await _h({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function xh(e){return Eh(e,{method:"POST"})}function Ph(e,t){const n=[]
for(let i=0;i<t.length;i+=e)n.push(t.slice(i,i+e))
return n}let $h,Th=null
function Ch(){const e=t("holdtext")
if(e&&!Th){const t=l(/fallensword.com\/\?ref=(?<id>\d+)/,n(e))
t&&(Th=Number(t))}return Th}function Ih(e){return new Promise(((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)}))}function Lh(){return $h||($h=function(e,t){const n=indexedDB.open(e)
n.onupgradeneeded=()=>n.result.createObjectStore(t)
const i=Ih(n)
return(e,n)=>i.then((i=>n(i.transaction(t,e).objectStore(t))))}("keyval-store","keyval")),$h}const Rh=e=>{e&&"NotFoundError"!==e.name&&yl.notify(e,"idbkeyval")}
async function Fh(e,t){try{return await function(e,t=Lh()){return t("readonly",(t=>Ih(t.get(e))))}(e,t)}catch(e){Rh(e)}}async function Oh(e,t,n){try{return await function(e,t,n=Lh()){return n("readwrite",(n=>(n.put(t,e),Ih(n.transaction))))}(e,t,n)}catch(e){Rh(e)}}const Ah=({folder_id:e})=>-2!==(e??-2),Mh=({folder_id:e})=>-2===e,Nh=({player_id:e})=>-1!==(e??-1),jh=({player_id:e})=>e,Dh=({player_id:e})=>-1===e,Bh=([e,t,n])=>Ph(20,e).map((e=>[e,t,n])),Hh=e=>({inv_id:t})=>t===e.inv_id,qh=(e,t)=>e.attributes.find((({id:e})=>e===t))?.value??0,Uh=(e,t)=>({...t,armor:qh(e,2),attack:qh(e,0),damage:qh(e,4),defense:qh(e,1),hp:qh(e,3),set_name:e.set_name??""}),Gh=(e,t)=>t.forge||t.stats?.set_name,Wh=e=>e?.s?e.r.items:[],zh=e=>[[e.filter(Ah),Ch,0],[e.filter(Mh),Ch,1],[e.filter(Nh),jh,7],[e.filter(Dh),Ch,4]].flatMap(Bh)
function Vh(e){return function(){const t=this.data(),n=e.find(Hh(t))
n?.attributes&&(t.stats=Uh(n,t.stats),this.invalidate())}}const Qh=async()=>await Fh(`fsh_${El.subcmd}_cache`)??[],Jh=e=>Oh(`fsh_${El.subcmd}_cache`,e),Kh=e=>t=>e.every((e=>e.inv_id!==t.inv_id))
async function Xh(e,t,n){const i=await(r={item_id:e.map((({item_id:e})=>e)),inv_id:e.map((({inv_id:e})=>e)),p:e.map(t),t:e.map((()=>n))},xh({cmd:"fetchitem",compare:0,...r}))
var r
return i?.s&&(i.r.items=((e,t)=>t.map(((t,n)=>({...t,inv_id:e[n].inv_id}))))(e,i.r.items),await async function(e){const t=(await Qh()).filter(Kh(e))
await Jh(t.concat(e))}(i.r.items)),i}const Yh=(e,t)=>{return t.filter((n=Yu(e.data()),e=>n.some((t=>e.inv_id===t.inv_id))))
var n}
async function Zh(e){const t=e.rows(Gh),n=await async function(e){const t=await Qh(),n=Yh(e,t)
return await Jh(n),n}(t)
t.every(Vh(n))}async function ef(e){const t=new DataTable(e)
await Zh(t),t.draw()}const tf=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],nf=e=>{return[...tf(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??"",t?.set_attack??"",t?.set_defense??"",t?.set_armor??"",t?.set_hp??"",t?.set_damage??""]),e.cached].join(",")
var t}
function rf(e){return()=>qd(e)}var of=[{section:"Character",menu:[{label:"Buff Log",fn:Gd},{label:"Combat Log",fn:Wd},{label:"Creature Log",fn:zd},{label:"Recipe Manager",fn:rh},{label:"Quick Links",fn:nh},{label:"Inventory Manager",href:`${Ns}invmanagernew`}]},{section:"Actions",menu:[{label:"Find Buffs",fn:rf(Xd)},{label:"Find Other",fn:rf(Yd)},{label:"Online Players",fn:rf(Zd)},{label:"AH Quick Search",fn:rf(Kd)}]},...Id()?[{section:"Guild",menu:[{label:"Guild Inventory",href:`${Ns}guildinvmgr`},{label:"New Guild Log",fn:Qd},{label:"Merc Hunter",fn:function(){Ud(import("./mercs-DREsmR4r.js"))}},{label:"Pot Report",fn:eh},{label:"Guild Tracker",fn:Jd}]}]:[],{section:"Extra",menu:[{label:"Quick Extract",fn:th},{label:"Quick Wear",fn:rf(ih)},{label:"FS Box Log",fn:Vd},{label:"SE Tracker",fn:sh}]},...nl("betaOptIn")&&Id()?[{section:"Beta Features",menu:[{label:"Relic List",fn:oh,beta:!0},{label:"GS Export",fn:async function(){if(!Id())return
const e=await bh(),t=await Fh("fsh_guildinvmgr_cache")??[],n=e.items.map((e=>t=>{const n=e.find((({inv_id:e})=>e===t.inv_id))
return n?.attributes?{...t,stats:{...t.stats,armor:qh(n,2),attack:qh(n,0),damage:qh(n,4),defense:qh(n,1),hp:qh(n,3),set_name:n.set_name??"",...n.set_name&&{set_armor:qh(n.set_bonuses,2)},...n.set_name&&{set_attack:qh(n.set_bonuses,0)},...n.set_name&&{set_damage:qh(n.set_bonuses,4)},...n.set_name&&{set_defense:qh(n.set_bonuses,1)},...n.set_name&&{set_hp:qh(n.set_bonuses,3)}},cached:!0}:{...t,cached:!1}})(t))
var i
Sh((i=`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name,set_attack,set_defense,set_armor,set_hp,set_damage,cached\n${(e=>e.map(nf).join("\n"))(n)}\n`,new Blob([i],{type:"text/csv"})),"gs_export.csv")},beta:!0},{label:"Who's Got What",fn:function(){Ud(import("./whosGotWhat-BAsbq31U.js"))},beta:!0}]}]:[],{section:"FSH developer quick links",menu:[{playerId:1963510,playerName:"PointyHair"},{playerId:1674838,playerName:"Lusterless"}]}]
function sf(e,t,n){const i=e.slice()
return i[7]=t[n],i}function af(e,t,n){const i=e.slice()
return i[10]=t[n],i}function lf(e){let t,n,i,r,o
function s(){return e[5](e[10])}return{c(){t=Ec("button"),t.textContent="PM",n=Pc(),i=Ec("a"),i.textContent=`${e[10].playerName}`,Lc(t,"type","button"),Lc(t,"class","helperDevBtn svelte-8sy7i5"),Lc(i,"href",Rs+"menuItem.playerId"),Lc(i,"class","svelte-8sy7i5")},m(e,a){wc(e,t,a),wc(e,n,a),wc(e,i,a),r||(o=Tc(t,"click",s),r=!0)},p(t,n){e=t},d(e){e&&(kc(t),kc(n),kc(i)),r=!1,o()}}}function cf(e){let t,n,i
function r(){return e[4](e[10])}return{c(){t=Ec("a"),t.textContent=`${e[10].label}`,Lc(t,"href",e[10].href),Lc(t,"class","svelte-8sy7i5")},m(e,o){wc(e,t,o),n||(i=Tc(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&kc(t),n=!1,i()}}}function uf(e){let t,n,i
function r(){return e[3](e[10])}return{c(){t=Ec("button"),t.textContent=`${e[10].label}`,Lc(t,"type","button"),Lc(t,"class","svelte-8sy7i5")},m(e,o){wc(e,t,o),n||(i=Tc(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&kc(t),n=!1,i()}}}function df(e){let t,n
let i=function(e,t){return e[10].fn?uf:e[10].href?cf:e[10].playerName?lf:void 0}(e),r=i&&i(e),o=e[10].beta&&function(e){let t
return{c(){t=Ec("sup"),t.textContent="beta",Lc(t,"class","fshRed")},m(e,n){wc(e,t,n)},d(e){e&&kc(t)}}}()
return{c(){t=Ec("li"),r&&r.c(),n=Pc(),o&&o.c()},m(e,i){wc(e,t,i),r&&r.m(t,null),mc(t,n),o&&o.m(t,null)},p(e,t){r&&r.p(e,t)},d(e){e&&kc(t),r&&r.d(),o&&o.d()}}}function hf(e){let t,n,i,r,o=Tu(e[7].menu),s=[]
for(let t=0;t<o.length;t+=1)s[t]=df(af(e,o,t))
return{c(){t=Ec("h2"),t.textContent=`${e[7].section}`,n=Pc(),i=Ec("ul")
for(let e=0;e<s.length;e+=1)s[e].c()
r=Pc(),Lc(t,"class","svelte-8sy7i5")},m(e,o){wc(e,t,o),wc(e,n,o),wc(e,i,o)
for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(i,null)
mc(i,r)},p(e,t){if(7&t){let n
for(o=Tu(e[7].menu),n=0;n<o.length;n+=1){const a=af(e,o,n)
s[n]?s[n].p(a,t):(s[n]=df(a),s[n].c(),s[n].m(i,r))}for(;n<s.length;n+=1)s[n].d(1)
s.length=o.length}},d(e){e&&(kc(t),kc(n),kc(i)),Sc(s,e)}}}function ff(e){let t,n=Tu(of),i=[]
for(let t=0;t<n.length;t+=1)i[t]=hf(sf(e,n,t))
return{c(){for(let e=0;e<i.length;e+=1)i[e].c()
t=$c()},m(e,n){for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,n)
wc(e,t,n)},p(e,[r]){if(7&r){let o
for(n=Tu(of),o=0;o<n.length;o+=1){const s=sf(e,n,o)
i[o]?i[o].p(s,r):(i[o]=hf(s),i[o].c(),i[o].m(t.parentNode,t))}for(;o<i.length;o+=1)i[o].d(1)
i.length=n.length}},i:Ul,o:Ul,d(e){e&&kc(t),Sc(i,e)}}}function pf(e){const t=nu()
function n(e){$d("helperMenu",e)}function i(e,i){cl(i)&&(n(e),t("toggle"),i())}function r(e){t("toggle"),n("sendMsg"),window.openQuickMsgDialog(e)}return[n,i,r,e=>i(e.label,e.fn),e=>n(e.label),e=>r(e.playerName)]}class gf extends Nu{constructor(e){super(),Mu(this,e,pf,ff,Xl,{})}}function _f(e){let t,n,i,r
return n=new gf({}),n.$on("toggle",e[4]),{c(){t=Ec("div"),Fu(n.$$.fragment),Lc(t,"class","modal svelte-gt76l6")},m(e,i){wc(e,t,i),Ou(n,t,null),r=!0},p:Ul,i(e){r||(Eu(n.$$.fragment,e),e&&hu((()=>{r&&(i||(i=$u(t,Uu,{duration:100},!0)),i.run(1))})),r=!0)},o(e){xu(n.$$.fragment,e),e&&(i||(i=$u(t,Uu,{duration:100},!1)),i.run(0)),r=!1},d(e){e&&kc(t),Au(n),e&&i&&i.end()}}}function vf(e){let t,n,i,r,o,s,a=e[1]&&_f(e)
return{c(){t=Ec("div"),n=Ec("button"),n.textContent="Helper Menu",i=Pc(),a&&a.c(),Lc(n,"type","button"),Lc(n,"class","toggle svelte-gt76l6"),qc(n,"helper-menu-move",e[3]),Lc(t,"class","helper-menu svelte-gt76l6"),qc(t,"helper-menu-fixed",e[2])},m(l,c){wc(l,t,c),mc(t,n),mc(t,i),a&&a.m(t,null),e[5](t),r=!0,o||(s=Tc(n,"click",e[4]),o=!0)},p(e,[n]){e[1]?a?(a.p(e,n),2&n&&Eu(a,1)):(a=_f(e),a.c(),Eu(a,1),a.m(t,null)):a&&(ku(),xu(a,1,1,(()=>{a=null})),Su())},i(e){r||(Eu(a),r=!0)},o(e){xu(a),r=!1},d(n){n&&kc(t),a&&a.d(),e[5](null),o=!1,s()}}}function mf(e,t,n){const i=nl("keepHelperMenuOnScreen"),r=nl("draggableHelperMenu")
let o=0
Zc((()=>{r&&Ed(o)}))
let s=!1
return[o,s,i,r,function(){n(1,s=!s)},function(e){ou[e?"unshift":"push"]((()=>{o=e,n(0,o)}))}]}class yf extends Nu{constructor(e){super(),Mu(this,e,mf,vf,Xl,{})}}function bf(){const e=hl(".mainbody")
e&&function(e,t){new yf({target:t.parentElement,props:{props:e}})}({},e)}function wf(e){return(new DOMParser).parseFromString(e,"text/html")}function kf(e){return vh({data:e})}async function Sf(e){const t=await kf(e)
if(t)return wf(t)}function Ef(e){const n=t("info-msg",e)
if(n){const e=n.innerHTML
return e?e.replace(/<br.*/,""):""}}let xf=0
const Pf=()=>xf
function $f(){xf=nl("sendGoldonWorld")}async function Tf(){if(!Pf())return
$d("NewMap","doSendGold")
const e=await Sf({cmd:"trade",subcmd:"sendgold",xc:window.ajaxXC,target_username:$("#HelperSendTo").html(),gold_amount:$("#HelperSendAmt").html().replace(/[^\d]/g,"")})
e&&function(e){const t=Ef(e)
"You successfully sent gold!"!==t&&""!==t||(al("currentGoldSentTotal",parseInt(nl("currentGoldSentTotal"),10)+parseInt(nl("goldAmount"),10)),GameData.fetch(wa))}(e)}function Cf(e){window.location=e}function If(e){nl("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function Lf(e){$d("keyHandler",e)}function Rf(e){return e?.toLowerCase?.()}function Ff(e,t){return Rf(e)<Rf(t)?-1:Rf(e)>Rf(t)?1:0}function Of(e){return Eh(e,{method:"GET"})}function Af(e){return Of({cmd:"profile",...e})}async function Mf(){const e=await Af({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort(((e,t)=>Ff(e.name,t.name)))}:e}function Nf(e,t,...n){return e(...n)}function jf(){return Nf(Mf)}const Df=[e=>e?.s,(e,t)=>e.r?.length>t]
async function Bf(e){const t=await jf()
if(((e,t)=>Df.every((n=>n(t,e))))(e,t)){Lf("changeCombatSet")
const n=t.r[e].id
If("2"),Cf(`${Ls+xs}managecombatset&submit=Use&combatSetId=${n}`)}}function Hf(e,n){t("worldPage")||(Lf(e),Cf(n))}function qf(){El.enableMaxGroupSizeToJoin?Cf(Vs):Cf(zs)}function Uf(){Lf("logPage"),If("2"),Cf(Cs)}function Gf(e){const t=hl(`#pCC input[value="${e}"]`)
t&&(Lf("movePage"),kh(t))}const Wf=[["!",Bf,0],["@",Bf,1],['"',Bf,1],["#",Bf,2],["£",Bf,2],["$",Bf,3],["%",Bf,4],["^",Bf,5],["&",Bf,6],["*",Bf,7],["(",Bf,8],["0",function(){Hf("toWorld",Qs)}],["<",Gf,"<"],[">",Gf,">"],["G",function(){Lf("createGroup"),If("4"),Cf(`${Us}create`)}],["L",Uf],["b",function(){Lf("backpack"),If("2"),Cf(Fs)}],["g",function(){Lf("gotoGuild"),If("4"),Cf(`${Bs}manage`)}],["j",function(){Lf("joinAllGroup"),If("4"),qf()}],["l",Uf],["p",function(){Lf("profile"),If("2"),Cf(Ls)}],["r",function(){Hf("doRepair",`${Xs+xs}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in El&&!El.dialogIsClosed()||(Lf("insertQuickWear"),qd(ih))}],["y",Tf]]
const zf=[e=>["HTML","BODY"].every((t=>e.target.tagName!==t)),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function Vf(e){var t;(t=e,zf.some((e=>e(t))))||function(e){const t=Wf.find((([t])=>e===t))
t&&t[1](t[2])}(e.key)}function Qf(){xl(document,"keyup",Vf)}function Jf(e,t){return nd(t)===e}function Kf(e){return rd(Jf,e)}function Xf(e,t,n){xl(e,"click",t,n)}function Yf(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function Zf(e,t){return Yu(Yf(e,t))}function ep(e){Xf(e,(()=>{$d("chrome","Game Help link")})),Dd(`<a href="${Es}settings">Game Help</a>`,e)}function tp(){Zf("#pCR h3").filter(Kf("Game Help")).forEach(ep)}function np(e){El[e]=nl(e)}function ip(e,t){if(t instanceof Element)return t.closest(e)}function rp(e){e?.classList&&e.classList.add("fshHide")}function op(e){const n=ip("a",e.target)
n?.getAttribute("href")===Hs&&($d("useNewGuildLog","Alter Href"),e.preventDefault(),Qd(),rp(t("notification-guild-log")))}function sp(){return El.huntingMode&&window.realmKeyHandler}function ap(e){e.forEach((e=>Bl(3,e)))}function lp(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function cp(){return cl(window.jQuery)}function up(){return!cp()}var dp=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function hp(e){return function(e){return-1!==e&&0===hl(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?($d("accordion","collapse"),-1):e}const fp=(e,t,n)=>$(e).data(`${n}${t}`)
function pp(e,t,n){return new Promise((i=>{const r=fp(e,t,n)
r?i(r):function(e,t,n,i){$(e).on(`${Rf(t)}create`,(()=>{i(fp(e,t,n))}))}(e,t,n,i)}))}const gp=[[e=>!ul(e),()=>Pl("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>Pl("$('#nav').data('hcsNav').heights does not exist")]]
async function _p(){const e=t("nav"),n=await pp(e,"Nav","hcs")
return function(e){const t=gp.find((([t])=>t(e)))
return!t||(t[1](),!1)}(n)?{theNav:e,myNav:n}:{}}function vp(){!function(){const e=nl("lastActiveQuestPage")
nl("storeLastQuestPage")&&e.length>0&&(t("nav-character-questbook").href=e)}(),function(){const e=nl("lastScavPage")
nl("storeLastScavPage")&&e.length>0&&(t("nav-actions-artisanship-scavenging").href=e)}()}async function mp(){const{theNav:e,myNav:t}=await _p()
e&&t&&(vp(),async function(e,t){const n=dp.map((e=>[e,nl(e)]))
n.some((([,e])=>e))&&(await import("./injectItems-BoPWYS4_.js")).default(e,t,lp(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,hp(n))}}(t))}function yp(e,t){return t?.classList?.contains(e)}function bp(e,t){t instanceof Node&&(t.textContent=String(e))}let wp
function kp(){return wp||(wp=t("quickMessageDialog")),wp}let Sp,Ep=0
function xp(e){(function(){if(!Ep){const e=Md("validateTips",kp())
1===e.length&&([Ep]=e)}return Ep})()&&bp($l(e,""),Ep)}function Pp(){return Sp||(Sp=t("quickMsgDialog_msg"),Sp.maxLength=512),Sp}let $p,Tp=null,Cp=0,Ip=0
function Lp(e){"Enter"!==e.key||e.shiftKey||($d("messaging","sendOnEnter"),e.preventDefault(),function(){if(!Ip){const e=$(kp()).dialog("option","buttons")
Ip=e["Send Message"]}return Ip}()())}function Rp(){ss(Tp)&&(Tp=nl("enterForSendMessage")),Tp&&!Cp&&(xl(Pp(),"keypress",Lp),Cp=!0)}function Fp(e,t){return yp(t[0],e)}function Op(e,t,n){const{target:i}=n,r=t.find(rd(e,i))
if(r)return r[1](i)}function Ap(e){return rd(Op,Fp,e)}function Mp(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function Np(e,t){Mp(e,"beforeend",t)}function jp(e,t){if("string"==typeof t){const e=a(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function Dp(e){const t=nl(e)
if(t)return dl(t,jp)}function Bp(e,t,n){return JSON.stringify(e,t,n)}function Hp(e,t){al(e,Bp(t))}let qp=0,Up=0,Gp=0
function Wp(e,t,n){const i=Up.insertRow(e)
let r=i.insertCell(-1)
Np(r,t),r=i.insertCell(-1),Np(r,n)}function zp(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function Vp(e,t){Wp(e,zp("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const Qp=[["del-button",function(e){$d("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
Up.deleteRow(t),qp.splice(t-2,1),Hp("quickMsg",qp)}],["add-button",function(e){$d("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){Vp(e.parentNode.parentNode.rowIndex,n),t.value="",qp.push(n),Hp("quickMsg",qp)}}],["add-template",function(e){$d("messaging","insertTemplate"),Pp().value+=`${n(e).replace(/\{playername\}/g,$p)}`}]]
function Jp(e){Vp(-1,e)}function Kp(){nl("enableMessageTemplates")&&!Gp&&(Xf((Up||(Up=kp().lastElementChild),Up),Ap(Qp)),(qp||(qp=Dp("quickMsg")),qp).forEach(Jp),Wp(-1,zp("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),Gp=!0)}function Xp(e,n,i){const r=kp()
yp("ui-dialog-content",r)&&(!function(e){$p=e,bp(e,t("quickMsgDialog_targetUsername"))}(e),function(e){const t=Pp()
t.value=$l(e,""),t.disabled=!1}(n),xp(i),Kp(),Rp(),$(r).dialog("open"))}function Yp(e){const n=t(e)
n&&(n.classList.add("pCR"),jd(ld(),n))}function Zp(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function eg(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?Zp(t,e.firstChild):jd(e,t)}(e,t)}function tg(e){const n=t(e)
n&&eg((ad||(ad=t("pCR")),ad),n)}const ng=[function(){nl("moveGuildList")&&tg("minibox-guild")},function(){nl("moveOnlineAlliesList")&&tg("minibox-allies")},function(){nl("moveXmasBox")&&Yp("minibox-xmas")},function(){nl("moveDailyQuest")&&Yp("minibox-daily-quest")},function(){nl("moveFSBox")&&Yp("minibox-fsbox")},function(){(El.enableAllyOnlineList||El.enableEnemyOnlineList)&&Ud(import("./allyEnemy-CkOgAX5i.js"))},function(){(El.enableWantedList||El.enableActiveBountyList)&&Ud(import("./activeWantedBounties-BnT3nuXq.js"))},function(){El.enableGuildInfoWidgets&&Ud(import("./addGuildInfoWidgets-BB6IlME2.js"))},function(){El.enableOnlineAlliesWidgets&&Ud(import("./addOnlineAlliesWidgets-UiHN8zw1.js"))},function(){El.enableTempleAlert&&Ud(import("./injectTempleAlert-BG6Vd_o-.js"))},function(){El.enableUpgradeAlert&&Ud(import("./injectUpgradeAlert-BEh-RcIC.js"))},function(){El.enableComposingAlert&&Ud(import("./injectComposeAlert-6GBxWiEs.js"))},function(){ld()&&!up()&&mp()},function(){up()||(window.openQuickMsgDialog=Xp)},function(){nl("statBarLinks")&&Ud(import("./statBar-vApVdLg2.js"))},function(){nl("staminaCalculator")&&Ud(import("./injectStaminaCalculator-BC0_DXYu.js"))},function(){nl("levelUpCalculator")&&Ud(import("./injectLevelupCalculator-vQjSt2Yl.js"))},function(){nl("fsboxlog")&&Ud(import("./fsbox-BX9H9lzC.js"))},function(){nl("resizeQuickBuff")&&Ud(import("./interceptQuickBuff-DV0X5jhD.js"))},function(){nl("joinAllLink")&&Ud(import("./injectJoinAllLink-DdRQmtqG.js"))},function(){nl("addServerNode")&&Ud(import("./injectServerNode-BHBEDHI4.js"))},function(){nl("addScoutTowerLink")&&Ud(import("./scoutTowerLink-BN1NFIT9.js"))},function(){cp()&&nl(Ca)&&Ud(import("./guildActivity-D8iLA9ez.js"))},async function(){if(cp()&&El.enableSeTracker){const e=await import("./trackerPrefStore--KSgIPKI.js").then((function(e){return e.a}))
e.default.set(El.enableSeTracker)}}]
const ig=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function rg(){sp()||(ig.forEach(np),El.allyEnemyOnlineRefreshTime=1e3*nl("allyEnemyOnlineRefreshTime"),El.useNewGuildLog&&(xl(document.body,"click",op),xl(document.body,"auxclick",op)),ap(ng))}function og(e){const t=dl(e)
t?.["new-ui"]&&(nl("gameHelpLink")&&Bl(3,tp),El.huntingMode=nl("huntingMode"),Bl(3,Qf),rg(),nl("hideHelperMenu")||Bl(3,bf))}function sg(){const e=function(){const e=t("html")
if(e?.dataset)return e.dataset.hcs}()
e&&og(e)}function ag(){cp()&&t("worldPage")&&window.GameData&&Ud(import("./newMap-QVwzj0Gc.js"))}function lg(e){$(e).qtip("hide")}function cg(e){al("needToPray",e),al("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}let ug=0
const dg='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',hg=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${Es}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
async function fg(e){const t=e.target.getAttribute("praytype")
t&&($d("notification","prayToGods"),lg(e.target),await kf({cmd:"temple",subcmd:"pray",type:t}),ug.outerHTML=dg,cg(!1))}function pg(){Np(t("notifications"),hg),ug=t("helperPrayToGods"),dd(ug,"click",fg)}async function gg(){if(!El.enableTempleAlert)return
const e="temple"===El.cmd?document:await Sf({cmd:"temple"})
if(!e)return
const t=hl("#pCC",e)
if(!t)return
const n="You are currently praying at the temple."!==nd(t)
n&&pg(),cg(n)}const _g={"-":{"-":()=>{Ud(import("./arena-DWRYviny.js").then((function(e){return e.c})))}},dojoin:{"-":()=>{Ud(import("./arenaDoJoin--X1uWUDk.js"))}},join:{"-":()=>{Ud(import("./arenaJoin-qMeVkCb6.js"))}},completed:{"-":()=>{Ud(import("./completedArenas-CebkliUX.js"))}},pickmove:{"-":()=>{Ud(import("./storeMoves-CTqJb1Na.js"))}},setup:{"-":()=>{Ud(import("./setupMoves-BuXCrGoJ.js"))}}}
function vg(){Ud(import("./bioWidgets-5Y3rSfAz.js"))}function mg(){Ud(import("./injectGuild-DY4x7sY4.js"))}const yg=()=>{Ud(import("./guildAdvisor-rAsmjfT7.js"))}
const bg=()=>{Ud(import("./groups-DHd2lRKr.js"))}
const wg=()=>{Ud(import("./addRemoveTags-Cnz0Pehk.js"))}
const kg=()=>{Ud(import("./guildChat-C6ojI02R.js"))}
function Sg(){Ud(import("./viewRecipe-Diu9dQJx.js"))}function Eg(){Ud(import("./ufsgAllowBack-DUWHoCvF.js"))}function xg(){Ud(import("./profile-Cds2v8CV.js").then((function(e){return e.p})))}function Pg(){Ud(import("./news-By7aBLth.js"))}function $g(){Ud(import("./viewArchive-CrQj-Z1o.js"))}const Tg=()=>{Ud(import("./inventory-CSt2x-s3.js"))},Cg=()=>{Ud(import("./bazaar-Db1ilRyV.js"))}
function Ig(){Ud(import("./injectQuestBookFull-COvvjabp.js"))}const Lg=()=>{Ud(import("./scavenging-BW487hhc.js"))}
const Rg=()=>{Ud(import("./toprated-Cz7ePcJf.js"))}
const Fg=()=>{Ud(import("./trade-CxTnTZc3.js"))}
var Og={creatures:{"-":{"-":Eg}},items:{"-":{"-":Eg},view:{"-":()=>{Ud(import("./itemsView-D1x1LOTJ.js"))}}},masterrealms:{"-":{"-":Eg}},quests:{"-":{"-":Eg},view:{"-":()=>{Ud(import("./showAllQuestSteps-DoeQcUIW.js"))}}},realms:{"-":{"-":Eg}},relics:{"-":{"-":Eg}},shops:{"-":{"-":Eg}},"-":{news:{"-":Pg},viewupdatearchive:{"-":$g},viewarchive:{"-":$g},"-":{"-":()=>{Ud(import("./unknownPage-BnNxGrDp.js"))}}},arena:_g,auctionhouse:{"-":{"-":()=>{Ud(import("./injectAuctionHouse-uboG7VEE.js"))}},quickcreate:{"-":()=>{Ud(import("./quickCreate-1kLVUqL-.js"))}}},bank:{"-":{"-":()=>{Ud(import("./injectBank-UUOUtv9X.js"))}}},blacksmith:{repairall:{"-":function(){ql("fromworld")&&ag()}}},buffmarket:{"-":{"-":()=>{Ud(import("./injectBuffmarket-DiViTZgT.js"))}}},combat:{attackplayer:{"-":xg}},composing:{"-":{"-":()=>{Ud(import("./composing-CFxo_E83.js"))}},breakdown:{"-":()=>{Ud(import("./breakdown-8k5XWWCb.js"))}},create:{"-":()=>{Ud(import("./composingCreate-B_Jv_j3M.js"))}}},findplayer:{"-":{"-":()=>{Ud(import("./findplayer-BN4SD6Ss.js"))}}},guild:{inventory:{report:()=>{Ud(import("./guildReport-CglzD1eW.js"))},addtags:wg,removetags:wg,storeitems:()=>{Ud(import("./storeitems-B9ui3_kb.js"))}},chat:{"-":kg},dochat:{"-":kg},log:{"-":()=>{Ud(import("./guildLog-BnjT3_r-.js"))}},groups:{viewstats:()=>{Ud(import("./injectGroupStats-iW7dQIxm.js"))},joinallgroupsundersize:bg,joinall:bg,"-":bg},manage:{"-":mg},advisor:{"-":yg,weekly:yg},history:{"-":vg},view:{"-":mg},scouttower:{"-":()=>{Ud(import("./injectScouttower-qQI3A09i.js"))}},mailbox:{"-":()=>{Ud(import("./guildMailbox-BXzlT-_W.js"))}},ranks:{"-":()=>{Ud(import("./rank-DPU3E0h1.js"))}},conflicts:{rpupgrades:()=>{Ud(import("./injectRPUpgrades-BdQhVMRC.js"))}},bank:{"-":()=>{Ud(import("./injectGuildBank-CSnnmG9S.js"))}},hall:{"-":()=>{Ud(import("./hall-BxmG8OLD.js"))},post:vg},"-":{"-":mg}},hellforge:{"-":{"-":()=>{Ud(import("./hellforge-DwH_9G0W.js"))}}},inventing:{"-":{"-":function(){Ud(import("./inventing-nJOIEU3g.js"))}},doinvent:{"-":Sg},viewrecipe:{"-":Sg}},log:{"-":{"-":()=>{Ud(import("./playerLog-pn4stwne.js"))}}},marketplace:{createreq:{"-":()=>{Ud(import("./marketplace-DYB5Lw9_.js"))}}},news:{fsbox:{"-":()=>{Ud(import("./newsFsbox-LyJi7gIf.js"))}},"-":{"-":Pg},shoutbox:{"-":()=>{Ud(import("./newsShoutbox-Cm4SEAC2.js"))}},viewupdatearchive:{"-":$g},viewarchive:{"-":$g}},notepad:{showlogs:{"-":Wd},invmanagernew:{"-":Tg},guildinvmgr:{"-":Tg},recipemanager:{"-":rh},auctionsearch:{"-":Kd},onlineplayers:{"-":Zd},quicklinkmanager:{"-":nh},monsterlog:{"-":zd},quickextract:{"-":th},quickwear:{"-":ih},fsboxcontent:{"-":Vd},bufflogcontent:{"-":Gd},newguildlog:{"-":Qd},findbuffs:{"-":Xd},findother:{"-":Yd},savesettings:{"-":()=>{Ud(import("./load-RH-opc-F.js"))}},reliclist:{"-":oh}},points:{"-":{"-":()=>{Ud(import("./points-BS73yIi_.js"))}}},potionbazaar:{"-":{"-":Cg},buyitem:{"-":Cg}},privatemessage:{"-":{"-":()=>{Ud(import("./privateMsg-Do4yCTOR.js"))}}},profile:{"-":{"-":xg},managecombatset:{"-":xg},report:{"-":xg},equipitem:{"-":xg},useitem:{"-":xg},changebio:{"-":vg},dropitems:{"-":function(){Ud(import("./injectProfileDropItems-BuJlcRgD.js"))}}},pvpladder:{"-":{"-":()=>{Ud(import("./ladder-DJLb_ZFu.js"))}}},questbook:{"-":{"-":Ig},atoz:{"-":Ig},viewquest:{"-":()=>{Ud(import("./injectQuestTracker-DVhFQsU-.js"))}}},quickbuff:{"-":{"-":()=>{Ud(import("./quickBuff-BX5WwGKI.js"))}}},scavenging:{"-":{"-":Lg},process:{"-":Lg}},settings:{"-":{"-":()=>{Ud(import("./injectSettings-CceVoAV7.js"))}}},skills:{"-":{"-":()=>{}}},superelite:{"-":{"-":()=>{Ud(import("./superelite-CCQTqhqu.js"))}}},tempinv:{"-":{"-":()=>{Ud(import("./mailbox-lbI6jR1-.js"))}}},temple:{"-":{"-":gg}},titan:{"-":{"-":()=>{Ud(import("./injectTitan-BiB7NlBN.js"))}}},toprated:{xp:{"-":Rg},monthlyxp:{"-":Rg},gold:{"-":Rg},killstreak:{"-":Rg},bounties:{"-":Rg},risingstars:{"-":Rg},arena:{"-":Rg},superelites:{"-":Rg},smasher:{"-":Rg},globalquest:{"-":()=>{Ud(import("./globalQuest-3XzD9RyF.js"))}}},trade:{"-":{"-":Fg},sendgold:{"-":Fg},createsecure:{"-":Fg},docreatesecure:{"-":Fg}},world:{"-":{"-":ag}}}
function Ag(e){return Od("li",e)}function Mg(e){return Od("ul",e)}const Ng=()=>Ad({className:"fshQuickLinks",style:{left:`${nl("quickLinksLeftPx")}px`,top:`${nl("quickLinksTopPx")}px`}}),jg=e=>"newWindow"in e&&e.url&&e.name
function Dg(e,t){const n=jd(t,Mg())
e.filter(jg).forEach((e=>{jd(jd(n,Ag()),function(e){const t=wh({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return Xf(t,(()=>$d("chrome","quick link",e.name))),t}(e))}))}function Bg(){if(!hl(".mainbody"))return
const e=Dp("quickLinks")||[]
e.length&&function(e){const t=Ng()
t.classList.toggle("fshFixed",nl("keepHelperMenuOnScreen")),nl("draggableQuickLinks")&&(t.classList.add("fshMove"),Ed(t)),Dg(e,t),jd(document.body,t)}(e)}let Hg=0,qg=0,Ug=0,Gg="",Wg=0,zg=0
function Vg(e){return ql(e)||"-"}function Qg(e){const t=hl(e)
return t?.value||"-"}function Jg(){if(ul(Og[Hg])&&ul(Og[Hg][qg])&&cl(Og[Hg][qg][Ug]))return Og[Hg][qg][Ug]}function Kg(){""!==document.location.search?(Hg=Vg("cmd"),qg=Vg("subcmd"),Ug=Vg("subcmd2"),["points","privatemessage"].includes(Hg)&&(Gg=`/${Vg("type")}`)):(Hg=Qg('input[name="cmd"]'),qg=Qg('input[name="subcmd"]'),Ug=Qg('input[name="subcmd2"]')),El.cmd=Hg,El.subcmd=qg,El.subcmd2=Ug,zg=`${Hg}/${qg}/${Ug}${Gg}`,Wg=Jg()}function Xg(){cl(Wg)&&(ll(zg),Wg())}async function Yg(e){Kg(),await e,sg(),Bl(3,Xg),nl("playNewMessageSound")&&Bl(3,ud),sp()||Bl(3,Bg)}const Zg=[()=>!("showPicker"in HTMLSelectElement.prototype),()=>!navigator.cookieEnabled,()=>window!==window.parent,function(){if(!d){const e=l(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
u=c.includes(e),d=!0}return u}]
function e_(e,t){if(Zg.some((e=>e())))return
const n=fl("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
Sl(),function(e,t){El.gmInfo=dl(decodeURIComponent(t)),El.gmInfo?El.fshVer=e:El.fshVer=`${e}_native`,El.calfVer="140"}(e,t),s(),Uo(),Yg(n)}export{Nf as $,ps as A,Mg as B,Ld as C,yp as D,Ph as E,xh as F,kf as G,wf as H,Xa as I,Ya as J,Yf as K,Mu as L,Xl as M,Tu as N,Ec as O,Pc as P,Lc as Q,hu as R,Nu as S,wc as T,mc as U,Nc as V,Ac as W,Tc as X,Ic as Y,Lu as Z,Cu as _,Of as a,qa as a$,Ul as a0,kc as a1,Jl as a2,Dp as a3,xc as a4,Oc as a5,jc as a6,Hp as a7,n as a8,bp as a9,Qa as aA,Zu as aB,o as aC,sh as aD,Sa as aE,aa as aF,la as aG,fa as aH,ca as aI,lg as aJ,Ch as aK,Qs as aL,xs as aM,oa as aN,kh as aO,cs as aP,Fh as aQ,va as aR,Oh as aS,_h as aT,dl as aU,Bl as aV,Md as aW,Da as aX,ja as aY,Ha as aZ,Ba as a_,ql as aa,Xu as ab,Wd as ac,zd as ad,al as ae,pp as af,El as ag,Bp as ah,nl as ai,Nd as aj,qs as ak,il as al,$c as am,Ia as an,ts as ao,Zo as ap,ls as aq,Es as ar,nd as as,Rf as at,Fp as au,Os as av,As as aw,Hl as ax,ea as ay,Is as az,xl as b,Pl as b$,Yu as b0,td as b1,as as b2,cl as b3,sa as b4,Mc as b5,Sc as b6,Ks as b7,Zl as b8,Ws as b9,ha as bA,ka as bB,Ea as bC,xa as bD,$f as bE,Pf as bF,Tf as bG,ua as bH,da as bI,ba as bJ,Yo as bK,_a as bL,rp as bM,Ef as bN,ns as bO,Af as bP,uc as bQ,za as bR,jf as bS,ul as bT,Za as bU,Ra as bV,Id as bW,Cf as bX,Ms as bY,Va as bZ,eg as b_,du as ba,hs as bb,ga as bc,ya as bd,Eu as be,ku as bf,Su as bg,xu as bh,nu as bi,Fu as bj,Ou as bk,Au as bl,ds as bm,Ys as bn,Bu as bo,Du as bp,bs as bq,$l as br,Ka as bs,Rs as bt,Ff as bu,is as bv,os as bw,nc as bx,tu as by,ma as bz,rd as c,Ss as c$,Zs as c0,vh as c1,Pa as c2,Kf as c3,$a as c4,fs as c5,cp as c6,Od as c7,Bs as c8,Ta as c9,fl as cA,Fa as cB,Ud as cC,dc as cD,Jf as cE,Ts as cF,ss as cG,Ua as cH,_s as cI,Aa as cJ,ll as cK,Pg as cL,Ig as cM,Sg as cN,Ho as cO,bh as cP,us as cQ,ef as cR,Gh as cS,zh as cT,Vh as cU,Wh as cV,Xh as cW,Wa as cX,Ga as cY,Fc as cZ,Kl as c_,Na as ca,ks as cb,a as cc,Oa as cd,Op as ce,ic as cf,qc as cg,sc as ch,ac as ci,oc as cj,iu as ck,ou as cl,Ru as cm,fu as cn,zl as co,Yc as cp,Xc as cq,vu as cr,Mp as cs,rs as ct,es as cu,yh as cv,Xo as cw,Ds as cx,Ag as cy,e as cz,Dd as d,gs as d0,ms as d1,ys as d2,Ca as d3,Jd as d4,Gs as d5,ws as d6,Ap as d7,vs as d8,eh as d9,Kd as dA,Zd as dB,Yd as dC,Xd as dD,Qd as dE,ld as dF,ia as dG,gg as dH,pg as dI,Vd as dJ,Sh as dK,zs as dL,Vs as dM,Ma as dN,ah as dO,Xs as dP,Fs as dQ,Gc as dR,Wl as dS,qf as dT,$s as dU,cc as dV,th as dW,tc as dX,ih as dY,e_ as dZ,mg as da,Cc as db,$u as dc,Wu as dd,ta as de,na as df,Zc as dg,Ed as dh,rl as di,Rc as dj,Hc as dk,Iu as dl,Hs as dm,Ls as dn,Wc as dp,eu as dq,lc as dr,js as ds,ra as dt,ap as du,qd as dv,rh as dw,Ns as dx,Gd as dy,nh as dz,Sf as e,lp as f,t as g,ip as h,jd as i,La as j,Zf as k,Ja as l,Ad as m,wh as n,Xf as o,cd as p,hl as q,l as r,$d as s,Js as t,mh as u,Np as v,up as w,ed as x,Zp as y,dd as z}
//# sourceMappingURL=calfSystem-BhNMi9iJ.js.map
