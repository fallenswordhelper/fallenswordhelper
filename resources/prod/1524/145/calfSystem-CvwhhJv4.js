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
function f(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){if(null==e)return{}
var n,i,r=function(e,t){if(null==e)return{}
var n,i,r={},o=Object.keys(e)
for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n])
return r}(e,t)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var v,_={DEBUG:!1,LIB_VERSION:"1.209.3"},m="undefined"!=typeof window?window:void 0,b="undefined"!=typeof globalThis?globalThis:m,y=Array.prototype,w=y.forEach,k=y.indexOf,S=null==b?void 0:b.navigator,E=null==b?void 0:b.document,x=null==b?void 0:b.location,C=null==b?void 0:b.fetch,P=null!=b&&b.XMLHttpRequest&&"withCredentials"in new b.XMLHttpRequest?b.XMLHttpRequest:void 0,T=null==b?void 0:b.AbortController,L=null==S?void 0:S.userAgent,I=null!=m?m:{},R="$copy_autocapture",O=["$snapshot","$pageview","$pageleave","$set","survey dismissed","survey sent","survey shown","$identify","$groupidentify","$create_alias","$$client_ingestion_warning","$web_experiment_applied","$feature_enrollment_update","$feature_flag_called"]
function M(e,t){return-1!==e.indexOf(t)}!function(e){e.GZipJS="gzip-js",e.Base64="base64"}(v||(v={}))
var F=function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},A=function(e){return e.replace(/^\$/,"")},N=Array.isArray,j=Object.prototype,D=j.hasOwnProperty,B=j.toString,H=N||function(e){return"[object Array]"===B.call(e)},U=e=>"function"==typeof e,q=e=>e===Object(e)&&!H(e),G=e=>{if(q(e)){for(var t in e)if(D.call(e,t))return!1
return!0}return!1},W=e=>void 0===e,z=e=>"[object String]"==B.call(e),V=e=>z(e)&&0===e.trim().length,Q=e=>null===e,J=e=>W(e)||Q(e),K=e=>"[object Number]"==B.call(e),X=e=>"[object Boolean]"===B.call(e),Y=e=>e instanceof FormData,Z=e=>M(O,e),ee=e=>{var t={_log:function(t){if(m&&(_.DEBUG||I.POSTHOG_DEBUG)&&!W(m.console)&&m.console){for(var n=("__rrweb_original__"in m.console[t]?m.console[t].__rrweb_original__:m.console[t]),i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o]
n(e,...r)}},info:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i]
t._log("log",...n)},warn:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i]
t._log("warn",...n)},error:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i]
t._log("error",...n)},critical:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i]
console.error(e,...n)},uninitializedWarning:e=>{t.error("You must initialize PostHog before calling ".concat(e))},createLogger:t=>ee("".concat(e," ").concat(t))}
return t},te=ee("[PostHog.js]"),ne=te.createLogger,ie={}
function re(e,t,n){if(H(e))if(w&&e.forEach===w)e.forEach(t,n)
else if("length"in e&&e.length===+e.length)for(var i=0,r=e.length;i<r;i++)if(i in e&&t.call(n,e[i],i)===ie)return}function oe(e,t,n){if(!J(e)){if(H(e))return re(e,t,n)
if(Y(e)){for(var i of e.entries())if(t.call(n,i[1],i[0])===ie)return}else for(var r in e)if(D.call(e,r)&&t.call(n,e[r],r)===ie)return}}var se=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
return re(n,(function(t){for(var n in t)void 0!==t[n]&&(e[n]=t[n])})),e},ae=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
return re(n,(function(t){re(t,(function(t){e.push(t)}))})),e}
function le(e){for(var t=Object.keys(e),n=t.length,i=new Array(n);n--;)i[n]=[t[n],e[t[n]]]
return i}var ce=function(e){try{return e()}catch(e){return}},ue=function(e){return function(){try{for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i]
return e.apply(this,n)}catch(e){te.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."),te.critical(e)}}},de=function(e){var t={}
return oe(e,(function(e,n){z(e)&&e.length>0&&(t[n]=e)})),t}
var fe=function(){function e(t){return t&&(t.preventDefault=e.preventDefault,t.stopPropagation=e.stopPropagation),t}return e.preventDefault=function(){this.returnValue=!1},e.stopPropagation=function(){this.cancelBubble=!0},function(t,n,i,r,o){if(t)if(t.addEventListener&&!r)t.addEventListener(n,i,!!o)
else{var s="on"+n,a=t[s]
t[s]=function(t,n,i){return function(r){if(r=r||e(null==m?void 0:m.event)){var o,s=!0
U(i)&&(o=i(r))
var a=n.call(t,r)
return!1!==o&&!1!==a||(s=!1),s}}}(t,i,a)}else te.error("No valid element provided to register_event")}}()
function he(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}var pe="$people_distinct_id",ge="__alias",ve="__timers",_e="$autocapture_disabled_server_side",me="$heatmaps_enabled_server_side",be="$exception_capture_enabled_server_side",ye="$web_vitals_enabled_server_side",we="$dead_clicks_enabled_server_side",ke="$web_vitals_allowed_metrics",Se="$session_recording_enabled_server_side",Ee="$console_log_recording_enabled_server_side",xe="$session_recording_network_payload_capture",Ce="$session_recording_canvas_recording",Pe="$replay_sample_rate",$e="$replay_minimum_duration",Te="$replay_script_config",Le="$sesid",Ie="$session_is_sampled",Re="$session_recording_url_trigger_activated_session",Oe="$session_recording_event_trigger_activated_session",Me="$enabled_feature_flags",Fe="$early_access_features",Ae="$stored_person_properties",Ne="$stored_group_properties",je="$surveys",De="$surveys_activated",Be="$flag_call_reported",He="$user_state",Ue="$client_session_props",qe="$capture_rate_limit",Ge="$initial_campaign_params",We="$initial_referrer_info",ze="$initial_person_info",Ve="$epp",Qe="__POSTHOG_TOOLBAR__",Je="$posthog_cookieless",Ke=[pe,ge,"__cmpns",ve,Se,me,Le,Me,He,Fe,Ne,Ae,je,Be,Ue,qe,Ge,We,Ve],Xe=ne("[FeatureFlags]"),Ye="$active_feature_flags",Ze="$override_feature_flags",et="$feature_flag_payloads",tt=e=>{var t={}
for(var[n,i]of le(e||{}))i&&(t[n]=i)
return t}
class nt{constructor(e){p(this,"_override_warning",!1),p(this,"_hasLoadedFlags",!1),p(this,"_requestInFlight",!1),p(this,"_reloadingDisabled",!1),p(this,"_additionalReloadRequested",!1),p(this,"_decideCalled",!1),p(this,"_flagsLoadedFromRemote",!1),this.instance=e,this.featureFlagEventHandlers=[]}decide(){if(this.instance.config.__preview_remote_config)this._decideCalled=!0
else{var e=!this._reloadDebouncer&&(this.instance.config.advanced_disable_feature_flags||this.instance.config.advanced_disable_feature_flags_on_first_load)
this._callDecideEndpoint({disableFlags:e})}}get hasLoadedFlags(){return this._hasLoadedFlags}getFlags(){return Object.keys(this.getFlagVariants())}getFlagVariants(){var e=this.instance.get_property(Me),t=this.instance.get_property(Ze)
if(!t)return e||{}
for(var n=se({},e),i=Object.keys(t),r=0;r<i.length;r++)n[i[r]]=t[i[r]]
return this._override_warning||(Xe.warn(" Overriding feature flags!",{enabledFlags:e,overriddenFlags:t,finalFlags:n}),this._override_warning=!0),n}getFlagPayloads(){return this.instance.get_property(et)||{}}reloadFeatureFlags(){this._reloadingDisabled||this.instance.config.advanced_disable_feature_flags||this._reloadDebouncer||(this._reloadDebouncer=setTimeout((()=>{this._callDecideEndpoint()}),5))}clearDebouncer(){clearTimeout(this._reloadDebouncer),this._reloadDebouncer=void 0}ensureFlagsLoaded(){this._hasLoadedFlags||this._requestInFlight||this._reloadDebouncer||this.reloadFeatureFlags()}setAnonymousDistinctId(e){this.$anon_distinct_id=e}setReloadingPaused(e){this._reloadingDisabled=e}_callDecideEndpoint(e){if(this.clearDebouncer(),!this.instance.config.advanced_disable_decide)if(this._requestInFlight)this._additionalReloadRequested=!0
else{var t={token:this.instance.config.token,distinct_id:this.instance.get_distinct_id(),groups:this.instance.getGroups(),$anon_distinct_id:this.$anon_distinct_id,person_properties:this.instance.get_property(Ae),group_properties:this.instance.get_property(Ne)};(null!=e&&e.disableFlags||this.instance.config.advanced_disable_feature_flags)&&(t.disable_flags=!0),this._requestInFlight=!0,this.instance._send_request({method:"POST",url:this.instance.requestRouter.endpointFor("api","/decide/?v=3"),data:t,compression:this.instance.config.disable_compression?void 0:v.Base64,timeout:this.instance.config.feature_flag_request_timeout_ms,callback:e=>{var n,i,r=!0
200===e.statusCode&&(this.$anon_distinct_id=void 0,r=!1),this._requestInFlight=!1,this._decideCalled||(this._decideCalled=!0,this.instance._onRemoteConfig(null!==(i=e.json)&&void 0!==i?i:{})),t.disable_flags||(this._flagsLoadedFromRemote=!r,this.receivedFeatureFlags(null!==(n=e.json)&&void 0!==n?n:{},r),this._additionalReloadRequested&&(this._additionalReloadRequested=!1,this._callDecideEndpoint()))}})}}getFeatureFlag(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0){var n,i,r,o,s,a=this.getFlagVariants()[e],l="".concat(a),c=this.instance.get_property(Be)||{}
return!t.send_event&&"send_event"in t||e in c&&c[e].includes(l)||(H(c[e])?c[e].push(l):c[e]=[l],null===(n=this.instance.persistence)||void 0===n||n.register({[Be]:c}),this.instance.capture("$feature_flag_called",{$feature_flag:e,$feature_flag_response:a,$feature_flag_payload:this.getFeatureFlagPayload(e)||null,$feature_flag_bootstrapped_response:(null===(i=this.instance.config.bootstrap)||void 0===i||null===(r=i.featureFlags)||void 0===r?void 0:r[e])||null,$feature_flag_bootstrapped_payload:(null===(o=this.instance.config.bootstrap)||void 0===o||null===(s=o.featureFlagPayloads)||void 0===s?void 0:s[e])||null,$used_bootstrap_value:!this._flagsLoadedFromRemote})),a}Xe.warn('getFeatureFlag for key "'+e+"\" failed. Feature flags didn't load in time.")}getFeatureFlagPayload(e){return this.getFlagPayloads()[e]}isFeatureEnabled(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0)return!!this.getFeatureFlag(e,t)
Xe.warn('isFeatureEnabled for key "'+e+"\" failed. Feature flags didn't load in time.")}addFeatureFlagsHandler(e){this.featureFlagEventHandlers.push(e)}removeFeatureFlagsHandler(e){this.featureFlagEventHandlers=this.featureFlagEventHandlers.filter((t=>t!==e))}receivedFeatureFlags(e,t){if(this.instance.persistence){this._hasLoadedFlags=!0
var n=this.getFlagVariants(),i=this.getFlagPayloads()
!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=e.featureFlags,o=e.featureFlagPayloads
if(r)if(H(r)){var s={}
if(r)for(var a=0;a<r.length;a++)s[r[a]]=!0
t&&t.register({[Ye]:r,[Me]:s})}else{var l=r,c=o
e.errorsWhileComputingFlags&&(l=h(h({},n),l),c=h(h({},i),c)),t&&t.register({[Ye]:Object.keys(tt(l)),[Me]:l||{},[et]:c||{}})}}(e,this.instance.persistence,n,i),this._fireFeatureFlagsCallbacks(t)}}override(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(!this.instance.__loaded||!this.instance.persistence)return Xe.uninitializedWarning("posthog.feature_flags.override")
if(this._override_warning=t,!1===e)this.instance.persistence.unregister(Ze)
else if(H(e)){for(var n={},i=0;i<e.length;i++)n[e[i]]=!0
this.instance.persistence.register({[Ze]:n})}else this.instance.persistence.register({[Ze]:e})}onFeatureFlags(e){if(this.addFeatureFlagsHandler(e),this._hasLoadedFlags){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
e(t,n)}return()=>this.removeFeatureFlagsHandler(e)}updateEarlyAccessFeatureEnrollment(e,t){var n,i=(this.instance.get_property(Fe)||[]).find((t=>t.flagKey===e)),r={["$feature_enrollment/".concat(e)]:t},o={$feature_flag:e,$feature_enrollment:t,$set:r}
i&&(o.$early_access_feature_name=i.name),this.instance.capture("$feature_enrollment_update",o),this.setPersonPropertiesForFlags(r,!1)
var s=h(h({},this.getFlagVariants()),{},{[e]:t})
null===(n=this.instance.persistence)||void 0===n||n.register({[Ye]:Object.keys(tt(s)),[Me]:s}),this._fireFeatureFlagsCallbacks()}getEarlyAccessFeatures(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.instance.get_property(Fe)
if(n&&!t)return e(n)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api","/api/early_access_features/?token=".concat(this.instance.config.token)),method:"GET",callback:t=>{var n
if(t.json){var i=t.json.earlyAccessFeatures
return null===(n=this.instance.persistence)||void 0===n||n.register({[Fe]:i}),e(i)}}})}_prepareFeatureFlagsForCallbacks(){var e=this.getFlags(),t=this.getFlagVariants()
return{flags:e.filter((e=>t[e])),flagVariants:Object.keys(t).filter((e=>t[e])).reduce(((e,n)=>(e[n]=t[n],e)),{})}}_fireFeatureFlagsCallbacks(e){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
this.featureFlagEventHandlers.forEach((i=>i(t,n,{errorsLoading:e})))}setPersonPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.instance.get_property(Ae)||{}
this.instance.register({[Ae]:h(h({},n),e)}),t&&this.instance.reloadFeatureFlags()}resetPersonPropertiesForFlags(){this.instance.unregister(Ae)}setGroupPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.instance.get_property(Ne)||{}
0!==Object.keys(n).length&&Object.keys(n).forEach((t=>{n[t]=h(h({},n[t]),e[t]),delete e[t]})),this.instance.register({[Ne]:h(h({},n),e)}),t&&this.instance.reloadFeatureFlags()}resetGroupPropertiesForFlags(e){if(e){var t=this.instance.get_property(Ne)||{}
this.instance.register({[Ne]:h(h({},t),{},{[e]:{}})})}else this.instance.unregister(Ne)}}Math.trunc||(Math.trunc=function(e){return e<0?Math.ceil(e):Math.floor(e)}),Number.isInteger||(Number.isInteger=function(e){return K(e)&&isFinite(e)&&Math.floor(e)===e})
var it="0123456789abcdef"
class rt{constructor(e){if(this.bytes=e,16!==e.length)throw new TypeError("not 128-bit length")}static fromFieldsV7(e,t,n,i){if(!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(n)||!Number.isInteger(i)||e<0||t<0||n<0||i<0||e>0xffffffffffff||t>4095||n>1073741823||i>4294967295)throw new RangeError("invalid field value")
var r=new Uint8Array(16)
return r[0]=e/Math.pow(2,40),r[1]=e/Math.pow(2,32),r[2]=e/Math.pow(2,24),r[3]=e/Math.pow(2,16),r[4]=e/Math.pow(2,8),r[5]=e,r[6]=112|t>>>8,r[7]=t,r[8]=128|n>>>24,r[9]=n>>>16,r[10]=n>>>8,r[11]=n,r[12]=i>>>24,r[13]=i>>>16,r[14]=i>>>8,r[15]=i,new rt(r)}toString(){for(var e="",t=0;t<this.bytes.length;t++)e=e+it.charAt(this.bytes[t]>>>4)+it.charAt(15&this.bytes[t]),3!==t&&5!==t&&7!==t&&9!==t||(e+="-")
if(36!==e.length)throw new Error("Invalid UUIDv7 was generated")
return e}clone(){return new rt(this.bytes.slice(0))}equals(e){return 0===this.compareTo(e)}compareTo(e){for(var t=0;t<16;t++){var n=this.bytes[t]-e.bytes[t]
if(0!==n)return Math.sign(n)}return 0}}class ot{constructor(){p(this,"timestamp",0),p(this,"counter",0),p(this,"random",new lt)}generate(){var e=this.generateOrAbort()
if(W(e)){this.timestamp=0
var t=this.generateOrAbort()
if(W(t))throw new Error("Could not generate UUID after timestamp reset")
return t}return e}generateOrAbort(){var e=Date.now()
if(e>this.timestamp)this.timestamp=e,this.resetCounter()
else{if(!(e+1e4>this.timestamp))return
this.counter++,this.counter>4398046511103&&(this.timestamp++,this.resetCounter())}return rt.fromFieldsV7(this.timestamp,Math.trunc(this.counter/Math.pow(2,30)),this.counter&Math.pow(2,30)-1,this.random.nextUint32())}resetCounter(){this.counter=1024*this.random.nextUint32()+(1023&this.random.nextUint32())}}var st,at=e=>{if("undefined"!=typeof UUIDV7_DENY_WEAK_RNG&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available")
for(var t=0;t<e.length;t++)e[t]=65536*Math.trunc(65536*Math.random())+Math.trunc(65536*Math.random())
return e}
m&&!W(m.crypto)&&crypto.getRandomValues&&(at=e=>crypto.getRandomValues(e))
class lt{constructor(){p(this,"buffer",new Uint32Array(8)),p(this,"cursor",1/0)}nextUint32(){return this.cursor>=this.buffer.length&&(at(this.buffer),this.cursor=0),this.buffer[this.cursor++]}}var ct=()=>ut().toString(),ut=()=>(st||(st=new ot)).generate(),dt="",ft=/[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i
var ht={is_supported:()=>!!E,error:function(e){te.error("cookieStore error: "+e)},get:function(e){if(E){try{for(var t=e+"=",n=E.cookie.split(";").filter((e=>e.length)),i=0;i<n.length;i++){for(var r=n[i];" "==r.charAt(0);)r=r.substring(1,r.length)
if(0===r.indexOf(t))return decodeURIComponent(r.substring(t.length,r.length))}}catch(e){}return null}},parse:function(e){var t
try{t=JSON.parse(ht.get(e))||{}}catch(e){}return t},set:function(e,t,n,i,r){if(E)try{var o="",s="",a=function(e,t){if(t){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E
if(dt)return dt
if(!t)return""
if(["localhost","127.0.0.1"].includes(e))return""
for(var n=e.split("."),i=Math.min(n.length,8),r="dmn_chk_"+ct(),o=new RegExp("(^|;)\\s*"+r+"=1");!dt&&i--;){var s=n.slice(i).join("."),a=r+"=1;domain=."+s
t.cookie=a,o.test(t.cookie)&&(t.cookie=a+";expires=Thu, 01 Jan 1970 00:00:00 GMT",dt=s)}return dt}(e)
if(!n){var i=(e=>{var t=e.match(ft)
return t?t[0]:""})(e)
i!==n&&te.info("Warning: cookie subdomain discovery mismatch",i,n),n=i}return n?"; domain=."+n:""}return""}(E.location.hostname,i)
if(n){var l=new Date
l.setTime(l.getTime()+24*n*60*60*1e3),o="; expires="+l.toUTCString()}r&&(s="; secure")
var c=e+"="+encodeURIComponent(JSON.stringify(t))+o+"; SameSite=Lax; path=/"+a+s
return c.length>3686.4&&te.warn("cookieStore warning: large cookie, len="+c.length),E.cookie=c,c}catch(e){return}},remove:function(e,t){try{ht.set(e,"",-1,t)}catch(e){return}}},pt=null,gt={is_supported:function(){if(!Q(pt))return pt
var e=!0
if(W(m))e=!1
else try{var t="__mplssupport__"
gt.set(t,"xyz"),'"xyz"'!==gt.get(t)&&(e=!1),gt.remove(t)}catch(t){e=!1}return e||te.error("localStorage unsupported; falling back to cookie store"),pt=e,e},error:function(e){te.error("localStorage error: "+e)},get:function(e){try{return null==m?void 0:m.localStorage.getItem(e)}catch(e){gt.error(e)}return null},parse:function(e){try{return JSON.parse(gt.get(e))||{}}catch(e){}return null},set:function(e,t){try{null==m||m.localStorage.setItem(e,JSON.stringify(t))}catch(e){gt.error(e)}},remove:function(e){try{null==m||m.localStorage.removeItem(e)}catch(e){gt.error(e)}}},vt=["distinct_id",Le,Ie,Ve,ze],_t=h(h({},gt),{},{parse:function(e){try{var t={}
try{t=ht.parse(e)||{}}catch(e){}var n=se(t,JSON.parse(gt.get(e)||"{}"))
return gt.set(e,n),n}catch(e){}return null},set:function(e,t,n,i,r,o){try{gt.set(e,t,void 0,void 0,o)
var s={}
vt.forEach((e=>{t[e]&&(s[e]=t[e])})),Object.keys(s).length&&ht.set(e,s,n,i,r,o)}catch(e){gt.error(e)}},remove:function(e,t){try{null==m||m.localStorage.removeItem(e),ht.remove(e,t)}catch(e){gt.error(e)}}}),mt={},bt={is_supported:function(){return!0},error:function(e){te.error("memoryStorage error: "+e)},get:function(e){return mt[e]||null},parse:function(e){return mt[e]||null},set:function(e,t){mt[e]=t},remove:function(e){delete mt[e]}},yt=null,wt={is_supported:function(){if(!Q(yt))return yt
if(yt=!0,W(m))yt=!1
else try{var e="__support__"
wt.set(e,"xyz"),'"xyz"'!==wt.get(e)&&(yt=!1),wt.remove(e)}catch(e){yt=!1}return yt},error:function(e){te.error("sessionStorage error: ",e)},get:function(e){try{return null==m?void 0:m.sessionStorage.getItem(e)}catch(e){wt.error(e)}return null},parse:function(e){try{return JSON.parse(wt.get(e))||null}catch(e){}return null},set:function(e,t){try{null==m||m.sessionStorage.setItem(e,JSON.stringify(t))}catch(e){wt.error(e)}},remove:function(e){try{null==m||m.sessionStorage.removeItem(e)}catch(e){wt.error(e)}}},kt=["localhost","127.0.0.1"],St=e=>{var t=null==E?void 0:E.createElement("a")
return W(t)?null:(t.href=e,t)},Et=function(e,t){return!!function(e){try{new RegExp(e)}catch(e){return!1}return!0}(t)&&new RegExp(t).test(e)},xt=function(e,t){for(var n,i=((e.split("#")[0]||"").split("?")[1]||"").split("&"),r=0;r<i.length;r++){var o=i[r].split("=")
if(o[0]===t){n=o
break}}if(!H(n)||n.length<2)return""
var s=n[1]
try{s=decodeURIComponent(s)}catch(e){te.error("Skipping decoding for malformed query param: "+s)}return s.replace(/\+/g," ")},Ct=function(e,t,n){if(!e||!t||!t.length)return e
for(var i=e.split("#"),r=i[0]||"",o=i[1],s=r.split("?"),a=s[1],l=s[0],c=(a||"").split("&"),u=[],d=0;d<c.length;d++){var f=c[d].split("=")
H(f)&&(t.includes(f[0])?u.push(f[0]+"="+n):u.push(c[d]))}var h=l
return null!=a&&(h+="?"+u.join("&")),null!=o&&(h+="#"+o),h},Pt=function(e,t){var n=e.match(new RegExp(t+"=([^&]*)"))
return n?n[1]:null},$t="Mobile",Tt="iOS",Lt="Android",It="Tablet",Rt=Lt+" "+It,Ot="iPad",Mt="Apple",Ft=Mt+" Watch",At="Safari",Nt="BlackBerry",jt="Samsung",Dt=jt+"Browser",Bt=jt+" Internet",Ht="Chrome",Ut=Ht+" OS",qt=Ht+" "+Tt,Gt="Internet Explorer",Wt=Gt+" "+$t,zt="Opera",Vt=zt+" Mini",Qt="Edge",Jt="Microsoft "+Qt,Kt="Firefox",Xt=Kt+" "+Tt,Yt="Nintendo",Zt="PlayStation",en="Xbox",tn=Lt+" "+$t,nn=$t+" "+At,rn="Windows",on=rn+" Phone",sn="Nokia",an="Ouya",ln="Generic",cn=ln+" "+$t.toLowerCase(),un=ln+" "+It.toLowerCase(),dn="Konqueror",fn="(\\d+(\\.\\d+)?)",hn=new RegExp("Version/"+fn),pn=new RegExp(en,"i"),gn=new RegExp(Zt+" \\w+","i"),vn=new RegExp(Yt+" \\w+","i"),_n=new RegExp(Nt+"|PlayBook|BB10","i"),mn={"NT3.51":"NT 3.11","NT4.0":"NT 4.0","5.0":"2000",5.1:"XP",5.2:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1",6.4:"10","10.0":"10"},bn=function(e,t){return t=t||"",M(e," OPR/")&&M(e,"Mini")?Vt:M(e," OPR/")?zt:_n.test(e)?Nt:M(e,"IE"+$t)||M(e,"WPDesktop")?Wt:M(e,Dt)?Bt:M(e,Qt)||M(e,"Edg/")?Jt:M(e,"FBIOS")?"Facebook "+$t:M(e,"UCWEB")||M(e,"UCBrowser")?"UC Browser":M(e,"CriOS")?qt:M(e,"CrMo")||M(e,Ht)?Ht:M(e,Lt)&&M(e,At)?tn:M(e,"FxiOS")?Xt:M(e.toLowerCase(),dn.toLowerCase())?dn:((e,t)=>t&&M(t,Mt)||function(e){return M(e,At)&&!M(e,Ht)&&!M(e,Lt)}(e))(e,t)?M(e,$t)?nn:At:M(e,Kt)?Kt:M(e,"MSIE")||M(e,"Trident/")?Gt:M(e,"Gecko")?Kt:""},yn={[Wt]:[new RegExp("rv:"+fn)],[Jt]:[new RegExp(Qt+"?\\/"+fn)],[Ht]:[new RegExp("("+Ht+"|CrMo)\\/"+fn)],[qt]:[new RegExp("CriOS\\/"+fn)],"UC Browser":[new RegExp("(UCBrowser|UCWEB)\\/"+fn)],[At]:[hn],[nn]:[hn],[zt]:[new RegExp("(Opera|OPR)\\/"+fn)],[Kt]:[new RegExp(Kt+"\\/"+fn)],[Xt]:[new RegExp("FxiOS\\/"+fn)],[dn]:[new RegExp("Konqueror[:/]?"+fn,"i")],[Nt]:[new RegExp(Nt+" "+fn),hn],[tn]:[new RegExp("android\\s"+fn,"i")],[Bt]:[new RegExp(Dt+"\\/"+fn)],[Gt]:[new RegExp("(rv:|MSIE )"+fn)],Mozilla:[new RegExp("rv:"+fn)]},wn=[[new RegExp(en+"; "+en+" (.*?)[);]","i"),e=>[en,e&&e[1]||""]],[new RegExp(Yt,"i"),[Yt,""]],[new RegExp(Zt,"i"),[Zt,""]],[_n,[Nt,""]],[new RegExp(rn,"i"),(e,t)=>{if(/Phone/.test(t)||/WPDesktop/.test(t))return[on,""]
if(new RegExp($t).test(t)&&!/IEMobile\b/.test(t))return[rn+" "+$t,""]
var n=/Windows NT ([0-9.]+)/i.exec(t)
if(n&&n[1]){var i=n[1],r=mn[i]||""
return/arm/i.test(t)&&(r="RT"),[rn,r]}return[rn,""]}],[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,e=>{if(e&&e[3]){var t=[e[3],e[4],e[5]||"0"]
return[Tt,t.join(".")]}return[Tt,""]}],[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,e=>{var t=""
return e&&e.length>=3&&(t=W(e[2])?e[3]:e[2]),["watchOS",t]}],[new RegExp("("+Lt+" (\\d+)\\.(\\d+)\\.?(\\d+)?|"+Lt+")","i"),e=>{if(e&&e[2]){var t=[e[2],e[3],e[4]||"0"]
return[Lt,t.join(".")]}return[Lt,""]}],[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,e=>{var t=["Mac OS X",""]
if(e&&e[1]){var n=[e[1],e[2],e[3]||"0"]
t[1]=n.join(".")}return t}],[/Mac/i,["Mac OS X",""]],[/CrOS/,[Ut,""]],[/Linux|debian/i,["Linux",""]]],kn=function(e){return vn.test(e)?Yt:gn.test(e)?Zt:pn.test(e)?en:new RegExp(an,"i").test(e)?an:new RegExp("("+on+"|WPDesktop)","i").test(e)?on:/iPad/.test(e)?Ot:/iPod/.test(e)?"iPod Touch":/iPhone/.test(e)?"iPhone":/(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)?Ft:_n.test(e)?Nt:/(kobo)\s(ereader|touch)/i.test(e)?"Kobo":new RegExp(sn,"i").test(e)?sn:/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e)||/(kf[a-z]+)( bui|\)).+silk\//i.test(e)?"Kindle Fire":/(Android|ZTE)/i.test(e)?!new RegExp($t).test(e)||/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e)?/pixel[\daxl ]{1,6}/i.test(e)&&!/pixel c/i.test(e)||/(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e)||/lmy47v/i.test(e)&&!/QTAQZ3/i.test(e)?Lt:Rt:Lt:new RegExp("(pda|"+$t+")","i").test(e)?cn:new RegExp(It,"i").test(e)&&!new RegExp(It+" pc","i").test(e)?un:""},Sn="https?://(.*)",En=["gclid","gclsrc","dclid","gbraid","wbraid","fbclid","msclkid","twclid","li_fat_id","igshid","ttclid","rdt_cid","irclid","_kx"],xn=ae(["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gad_source","mc_cid"],En),Cn="<masked>",Pn={campaignParams:function(){var{customTrackedParams:e,maskPersonalDataProperties:t,customPersonalDataProperties:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!E)return{}
var i=t?ae([],En,n||[]):[]
return this._campaignParamsFromUrl(Ct(E.URL,i,Cn),e)},_campaignParamsFromUrl:function(e,t){var n=xn.concat(t||[]),i={}
return oe(n,(function(t){var n=xt(e,t)
i[t]=n||null})),i},_searchEngine:function(e){return e?0===e.search(Sn+"google.([^/?]*)")?"google":0===e.search(Sn+"bing.com")?"bing":0===e.search(Sn+"yahoo.com")?"yahoo":0===e.search(Sn+"duckduckgo.com")?"duckduckgo":null:null},_searchInfoFromReferrer:function(e){var t=Pn._searchEngine(e),n="yahoo"!=t?"q":"p",i={}
if(!Q(t)){i.$search_engine=t
var r=E?xt(E.referrer,n):""
r.length&&(i.ph_keyword=r)}return i},searchInfo:function(){var e=null==E?void 0:E.referrer
return e?this._searchInfoFromReferrer(e):{}},browser:bn,browserVersion:function(e,t){var n=bn(e,t),i=yn[n]
if(W(i))return null
for(var r=0;r<i.length;r++){var o=i[r],s=e.match(o)
if(s)return parseFloat(s[s.length-2])}return null},browserLanguage:function(){return navigator.language||navigator.userLanguage},browserLanguagePrefix:function(){var e=this.browserLanguage()
return"string"==typeof e?e.split("-")[0]:void 0},os:function(e){for(var t=0;t<wn.length;t++){var[n,i]=wn[t],r=n.exec(e),o=r&&(U(i)?i(r,e):i)
if(o)return o}return["",""]},device:kn,deviceType:function(e){var t=kn(e)
return t===Ot||t===Rt||"Kobo"===t||"Kindle Fire"===t||t===un?It:t===Yt||t===en||t===Zt||t===an?"Console":t===Ft?"Wearable":t?$t:"Desktop"},referrer:function(){return(null==E?void 0:E.referrer)||"$direct"},referringDomain:function(){var e
return null!=E&&E.referrer&&(null===(e=St(E.referrer))||void 0===e?void 0:e.host)||"$direct"},referrerInfo:function(){return{$referrer:this.referrer(),$referring_domain:this.referringDomain()}},initialPersonInfo:function(){return{r:this.referrer().substring(0,1e3),u:null==x?void 0:x.href.substring(0,1e3)}},initialPersonPropsFromInfo:function(e){var t,{r:n,u:i}=e,r={$initial_referrer:n,$initial_referring_domain:null==n?void 0:"$direct"==n?"$direct":null===(t=St(n))||void 0===t?void 0:t.host}
if(i){r.$initial_current_url=i
var o=St(i)
r.$initial_host=null==o?void 0:o.host,r.$initial_pathname=null==o?void 0:o.pathname,oe(this._campaignParamsFromUrl(i),(function(e,t){r["$initial_"+A(t)]=e}))}return n&&oe(this._searchInfoFromReferrer(n),(function(e,t){r["$initial_"+A(t)]=e})),r},timezone:function(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){return}},timezoneOffset:function(){try{return(new Date).getTimezoneOffset()}catch(e){return}},properties:function(){var{maskPersonalDataProperties:e,customPersonalDataProperties:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!L)return{}
var n=e?ae([],En,t||[]):[],[i,r]=Pn.os(L)
return se(de({$os:i,$os_version:r,$browser:Pn.browser(L,navigator.vendor),$device:Pn.device(L),$device_type:Pn.deviceType(L),$timezone:Pn.timezone(),$timezone_offset:Pn.timezoneOffset()}),{$current_url:Ct(null==x?void 0:x.href,n,Cn),$host:null==x?void 0:x.host,$pathname:null==x?void 0:x.pathname,$raw_user_agent:L.length>1e3?L.substring(0,997)+"...":L,$browser_version:Pn.browserVersion(L,navigator.vendor),$browser_language:Pn.browserLanguage(),$browser_language_prefix:Pn.browserLanguagePrefix(),$screen_height:null==m?void 0:m.screen.height,$screen_width:null==m?void 0:m.screen.width,$viewport_height:null==m?void 0:m.innerHeight,$viewport_width:null==m?void 0:m.innerWidth,$lib:"web",$lib_version:_.LIB_VERSION,$insert_id:Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10),$time:Date.now()/1e3})},people_properties:function(){if(!L)return{}
var[e,t]=Pn.os(L)
return se(de({$os:e,$os_version:t,$browser:Pn.browser(L,navigator.vendor)}),{$browser_version:Pn.browserVersion(L,navigator.vendor)})}},$n=["cookie","localstorage","localstorage+cookie","sessionstorage","memory"]
class Tn{constructor(e){this.config=e,this.props={},this.campaign_params_saved=!1,this.name=(e=>{var t=""
return e.token&&(t=e.token.replace(/\+/g,"PL").replace(/\//g,"SL").replace(/=/g,"EQ")),e.persistence_name?"ph_"+e.persistence_name:"ph_"+t+"_posthog"})(e),this.storage=this.buildStorage(e),this.load(),e.debug&&te.info("Persistence loaded",e.persistence,h({},this.props)),this.update_config(e,e),this.save()}buildStorage(e){-1===$n.indexOf(e.persistence.toLowerCase())&&(te.critical("Unknown persistence type "+e.persistence+"; falling back to localStorage+cookie"),e.persistence="localStorage+cookie")
var t=e.persistence.toLowerCase()
return"localstorage"===t&&gt.is_supported()?gt:"localstorage+cookie"===t&&_t.is_supported()?_t:"sessionstorage"===t&&wt.is_supported()?wt:"memory"===t?bt:"cookie"===t?ht:_t.is_supported()?_t:ht}properties(){var e={}
return oe(this.props,(function(t,n){if(n===Me&&q(t))for(var i=Object.keys(t),r=0;r<i.length;r++)e["$feature/".concat(i[r])]=t[i[r]]
else s=n,a=!1,(Q(o=Ke)?a:k&&o.indexOf===k?-1!=o.indexOf(s):(oe(o,(function(e){if(a||(a=e===s))return ie})),a))||(e[n]=t)
var o,s,a})),e}load(){if(!this.disabled){var e=this.storage.parse(this.name)
e&&(this.props=se({},e))}}save(){this.disabled||this.storage.set(this.name,this.props,this.expire_days,this.cross_subdomain,this.secure,this.config.debug)}remove(){this.storage.remove(this.name,!1),this.storage.remove(this.name,!0)}clear(){this.remove(),this.props={}}register_once(e,t,n){if(q(e)){W(t)&&(t="None"),this.expire_days=W(n)?this.default_expiry:n
var i=!1
if(oe(e,((e,n)=>{this.props.hasOwnProperty(n)&&this.props[n]!==t||(this.props[n]=e,i=!0)})),i)return this.save(),!0}return!1}register(e,t){if(q(e)){this.expire_days=W(t)?this.default_expiry:t
var n=!1
if(oe(e,((t,i)=>{e.hasOwnProperty(i)&&this.props[i]!==t&&(this.props[i]=t,n=!0)})),n)return this.save(),!0}return!1}unregister(e){e in this.props&&(delete this.props[e],this.save())}update_campaign_params(){if(!this.campaign_params_saved){var e=Pn.campaignParams({customTrackedParams:this.config.custom_campaign_params,maskPersonalDataProperties:this.config.mask_personal_data_properties,customPersonalDataProperties:this.config.custom_personal_data_properties})
G(de(e))||this.register(e),this.campaign_params_saved=!0}}update_search_keyword(){this.register(Pn.searchInfo())}update_referrer_info(){this.register_once(Pn.referrerInfo(),void 0)}set_initial_person_info(){this.props[Ge]||this.props[We]||this.register_once({[ze]:Pn.initialPersonInfo()},void 0)}get_referrer_info(){return de({$referrer:this.props.$referrer,$referring_domain:this.props.$referring_domain})}get_initial_props(){var e={}
oe([We,Ge],(t=>{var n=this.props[t]
n&&oe(n,(function(t,n){e["$initial_"+A(n)]=t}))}))
var t=this.props[ze]
if(t){var n=Pn.initialPersonPropsFromInfo(t)
se(e,n)}return e}safe_merge(e){return oe(this.props,(function(t,n){n in e||(e[n]=t)})),e}update_config(e,t){if(this.default_expiry=this.expire_days=e.cookie_expiration,this.set_disabled(e.disable_persistence),this.set_cross_subdomain(e.cross_subdomain_cookie),this.set_secure(e.secure_cookie),e.persistence!==t.persistence){var n=this.buildStorage(e),i=this.props
this.clear(),this.storage=n,this.props=i,this.save()}}set_disabled(e){this.disabled=e,this.disabled?this.remove():this.save()}set_cross_subdomain(e){e!==this.cross_subdomain&&(this.cross_subdomain=e,this.remove(),this.save())}get_cross_subdomain(){return!!this.cross_subdomain}set_secure(e){e!==this.secure&&(this.secure=e,this.remove(),this.save())}set_event_timer(e,t){var n=this.props[ve]||{}
n[e]=t,this.props[ve]=n,this.save()}remove_event_timer(e){var t=(this.props[ve]||{})[e]
return W(t)||(delete this.props[ve][e],this.save()),t}get_property(e){return this.props[e]}set_property(e,t){this.props[e]=t,this.save()}}function Ln(e){var t,n
return(null===(t=JSON.stringify(e,(n=[],function(e,t){if(q(t)){for(;n.length>0&&n[n.length-1]!==this;)n.pop()
return n.includes(t)?"[Circular]":(n.push(t),t)}return t})))||void 0===t?void 0:t.length)||0}function In(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6606028.8
if(e.size>=t&&e.data.length>1){var n=Math.floor(e.data.length/2),i=e.data.slice(0,n),r=e.data.slice(n)
return[In({size:Ln(i),data:i,sessionId:e.sessionId,windowId:e.windowId}),In({size:Ln(r),data:r,sessionId:e.sessionId,windowId:e.windowId})].flatMap((e=>e))}return[e]}var Rn=(e=>(e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin",e))(Rn||{}),On=(e=>(e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration",e[e.Selection=14]="Selection",e[e.AdoptedStyleSheet=15]="AdoptedStyleSheet",e[e.CustomElement=16]="CustomElement",e))(On||{})
function Mn(e){var t
return e instanceof Element&&(e.id===Qe||!(null===(t=e.closest)||void 0===t||!t.call(e,".toolbar-global-fade-container")))}function Fn(e){return!!e&&1===e.nodeType}function An(e,t){return!!e&&!!e.tagName&&e.tagName.toLowerCase()===t.toLowerCase()}function Nn(e){return!!e&&3===e.nodeType}function jn(e){return!!e&&11===e.nodeType}function Dn(e){return e?F(e).split(/\s+/):[]}function Bn(e){var t=null==m?void 0:m.location.href
return!!(t&&e&&e.some((e=>t.match(e))))}function Hn(e){var t=""
switch(typeof e.className){case"string":t=e.className
break
case"object":t=(e.className&&"baseVal"in e.className?e.className.baseVal:null)||e.getAttribute("class")||""
break
default:t=""}return Dn(t)}function Un(e){return J(e)?null:F(e).split(/(\s+)/).filter((e=>ti(e))).join("").replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)}function qn(e){var t=""
return Vn(e)&&!Qn(e)&&e.childNodes&&e.childNodes.length&&oe(e.childNodes,(function(e){var n
Nn(e)&&e.textContent&&(t+=null!==(n=Un(e.textContent))&&void 0!==n?n:"")})),F(t)}function Gn(e){return W(e.target)?e.srcElement||null:null!==(t=e.target)&&void 0!==t&&t.shadowRoot?e.composedPath()[0]||null:e.target||null
var t}var Wn=["a","button","form","input","select","textarea","label"]
function zn(e){var t=e.parentNode
return!(!t||!Fn(t))&&t}function Vn(e){for(var t=e;t.parentNode&&!An(t,"body");t=t.parentNode){var n=Hn(t)
if(M(n,"ph-sensitive")||M(n,"ph-no-capture"))return!1}if(M(Hn(e),"ph-include"))return!0
var i=e.type||""
if(z(i))switch(i.toLowerCase()){case"hidden":case"password":return!1}var r=e.name||e.id||""
return!z(r)||!/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(r.replace(/[^a-zA-Z0-9]/g,""))}function Qn(e){return!!(An(e,"input")&&!["button","checkbox","submit","reset"].includes(e.type)||An(e,"select")||An(e,"textarea")||"true"===e.getAttribute("contenteditable"))}var Jn="(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",Kn=new RegExp("^(?:".concat(Jn,")$")),Xn=new RegExp(Jn),Yn="\\d{3}-?\\d{2}-?\\d{4}",Zn=new RegExp("^(".concat(Yn,")$")),ei=new RegExp("(".concat(Yn,")"))
function ti(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(J(e))return!1
if(z(e)){if(e=F(e),(t?Kn:Xn).test((e||"").replace(/[- ]/g,"")))return!1
if((t?Zn:ei).test(e))return!1}return!0}function ni(e){var t=qn(e)
return ti(t="".concat(t," ").concat(ii(e)).trim())?t:""}function ii(e){var t=""
return e&&e.childNodes&&e.childNodes.length&&oe(e.childNodes,(function(e){var n
if(e&&"span"===(null===(n=e.tagName)||void 0===n?void 0:n.toLowerCase()))try{var i=qn(e)
t="".concat(t," ").concat(i).trim(),e.childNodes&&e.childNodes.length&&(t="".concat(t," ").concat(ii(e)).trim())}catch(e){te.error("[AutoCapture]",e)}})),t}function ri(e){return function(e){var t=e.map((e=>{var t,n,i=""
if(e.tag_name&&(i+=e.tag_name),e.attr_class)for(var r of(e.attr_class.sort(),e.attr_class))i+=".".concat(r.replace(/"/g,""))
var o=h(h(h(h({},e.text?{text:e.text}:{}),{},{"nth-child":null!==(t=e.nth_child)&&void 0!==t?t:0,"nth-of-type":null!==(n=e.nth_of_type)&&void 0!==n?n:0},e.href?{href:e.href}:{}),e.attr_id?{attr_id:e.attr_id}:{}),e.attributes),s={}
return le(o).sort(((e,t)=>{var[n]=e,[i]=t
return n.localeCompare(i)})).forEach((e=>{var[t,n]=e
return s[oi(t.toString())]=oi(n.toString())})),(i+=":")+le(o).map((e=>{var[t,n]=e
return"".concat(t,'="').concat(n,'"')})).join("")}))
return t.join(";")}(function(e){return e.map((e=>{var t,n,i={text:null===(t=e.$el_text)||void 0===t?void 0:t.slice(0,400),tag_name:e.tag_name,href:null===(n=e.attr__href)||void 0===n?void 0:n.slice(0,2048),attr_class:si(e),attr_id:e.attr__id,nth_child:e.nth_child,nth_of_type:e.nth_of_type,attributes:{}}
return le(e).filter((e=>{var[t]=e
return 0===t.indexOf("attr__")})).forEach((e=>{var[t,n]=e
return i.attributes[t]=n})),i}))}(e))}function oi(e){return e.replace(/"|\\"/g,'\\"')}function si(e){var t=e.attr__class
return t?H(t)?t:Dn(t):void 0}var ai="[SessionRecording]",li="redacted",ci={initiatorTypes:["audio","beacon","body","css","early-hint","embed","fetch","frame","iframe","icon","image","img","input","link","navigation","object","ping","script","track","video","xmlhttprequest"],maskRequestFn:e=>e,recordHeaders:!1,recordBody:!1,recordInitialRequests:!1,recordPerformance:!1,performanceEntryTypeToObserve:["first-input","navigation","paint","resource"],payloadSizeLimitBytes:1e6,payloadHostDenyList:[".lr-ingest.io",".ingest.sentry.io",".clarity.ms","analytics.google.com"]},ui=["authorization","x-forwarded-for","authorization","cookie","set-cookie","x-api-key","x-real-ip","remote-addr","forwarded","proxy-authorization","x-csrf-token","x-csrftoken","x-xsrf-token"],di=["password","secret","passwd","api_key","apikey","auth","credentials","mysql_pwd","privatekey","private_key","token"],fi=["/s/","/e/","/i/"]
function hi(e,t,n,i){if(J(e))return e
var r=(null==t?void 0:t["content-length"])||function(e){return new Blob([e]).size}(e)
return z(r)&&(r=parseInt(r)),r>n?ai+" ".concat(i," body too large to record (").concat(r," bytes)"):e}function pi(e,t){if(J(e))return e
var n=e
return ti(n,!1)||(n=ai+" "+t+" body "+li),oe(di,(e=>{var i,r
null!==(i=n)&&void 0!==i&&i.length&&-1!==(null===(r=n)||void 0===r?void 0:r.indexOf(e))&&(n=ai+" "+t+" body "+li+" as might contain: "+e)})),n}var gi=(e,t)=>{var n,i,r,o={payloadSizeLimitBytes:ci.payloadSizeLimitBytes,performanceEntryTypeToObserve:[...ci.performanceEntryTypeToObserve],payloadHostDenyList:[...t.payloadHostDenyList||[],...ci.payloadHostDenyList]},s=!1!==e.session_recording.recordHeaders&&t.recordHeaders,a=!1!==e.session_recording.recordBody&&t.recordBody,l=!1!==e.capture_performance&&t.recordPerformance,c=(n=o,r=Math.min(1e6,null!==(i=n.payloadSizeLimitBytes)&&void 0!==i?i:1e6),e=>(null!=e&&e.requestBody&&(e.requestBody=hi(e.requestBody,e.requestHeaders,r,"Request")),null!=e&&e.responseBody&&(e.responseBody=hi(e.responseBody,e.responseHeaders,r,"Response")),e)),u=t=>{return c(((e,t)=>{var n,i=St(e.name),r=0===t.indexOf("http")?null===(n=St(t))||void 0===n?void 0:n.pathname:t
"/"===r&&(r="")
var o=null==i?void 0:i.pathname.replace(r||"","")
if(!(i&&o&&fi.some((e=>0===o.indexOf(e)))))return e})((i=(n=t).requestHeaders,J(i)||oe(Object.keys(null!=i?i:{}),(e=>{ui.includes(e.toLowerCase())&&(i[e]=li)})),n),e.api_host))
var n,i},d=U(e.session_recording.maskNetworkRequestFn)
return d&&U(e.session_recording.maskCapturedNetworkRequestFn)&&te.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."),d&&(e.session_recording.maskCapturedNetworkRequestFn=t=>{var n=e.session_recording.maskNetworkRequestFn({url:t.name})
return h(h({},t),{},{name:null==n?void 0:n.url})}),o.maskRequestFn=U(e.session_recording.maskCapturedNetworkRequestFn)?t=>{var n,i,r,o=u(t)
return o&&null!==(n=null===(i=(r=e.session_recording).maskCapturedNetworkRequestFn)||void 0===i?void 0:i.call(r,o))&&void 0!==n?n:void 0}:e=>function(e){if(!W(e))return e.requestBody=pi(e.requestBody,"Request"),e.responseBody=pi(e.responseBody,"Response"),e}(u(e)),h(h(h({},ci),o),{},{recordHeaders:s,recordBody:a,recordPerformance:l,recordInitialRequests:l})}
function vi(e,t,n,i,r){return t>n&&(te.warn("min cannot be greater than max."),t=n),K(e)?e>n?(i&&te.warn(i+" cannot be  greater than max: "+n+". Using max value instead."),n):e<t?(i&&te.warn(i+" cannot be less than min: "+t+". Using min value instead."),t):e:(i&&te.warn(i+" must be a number. using max or fallback. max: "+n+", fallback: "+r),vi(r||n,t,n,i))}class _i{constructor(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
p(this,"bucketSize",100),p(this,"refillRate",10),p(this,"mutationBuckets",{}),p(this,"loggedTracker",{}),p(this,"refillBuckets",(()=>{Object.keys(this.mutationBuckets).forEach((e=>{this.mutationBuckets[e]=this.mutationBuckets[e]+this.refillRate,this.mutationBuckets[e]>=this.bucketSize&&delete this.mutationBuckets[e]}))})),p(this,"getNodeOrRelevantParent",(e=>{var t=this.rrweb.mirror.getNode(e)
if("svg"!==(null==t?void 0:t.nodeName)&&t instanceof Element){var n=t.closest("svg")
if(n)return[this.rrweb.mirror.getId(n),n]}return[e,t]})),p(this,"numberOfChanges",(e=>{var t,n,i,r,o,s,a,l
return(null!==(t=null===(n=e.removes)||void 0===n?void 0:n.length)&&void 0!==t?t:0)+(null!==(i=null===(r=e.attributes)||void 0===r?void 0:r.length)&&void 0!==i?i:0)+(null!==(o=null===(s=e.texts)||void 0===s?void 0:s.length)&&void 0!==o?o:0)+(null!==(a=null===(l=e.adds)||void 0===l?void 0:l.length)&&void 0!==a?a:0)})),p(this,"throttleMutations",(e=>{if(3!==e.type||0!==e.data.source)return e
var t=e.data,n=this.numberOfChanges(t)
t.attributes&&(t.attributes=t.attributes.filter((e=>{var t,n,i,[r,o]=this.getNodeOrRelevantParent(e.id)
return 0!==this.mutationBuckets[r]&&(this.mutationBuckets[r]=null!==(t=this.mutationBuckets[r])&&void 0!==t?t:this.bucketSize,this.mutationBuckets[r]=Math.max(this.mutationBuckets[r]-1,0),0===this.mutationBuckets[r]&&(this.loggedTracker[r]||(this.loggedTracker[r]=!0,null===(n=(i=this.options).onBlockedNode)||void 0===n||n.call(i,r,o))),e)})))
var i=this.numberOfChanges(t)
return 0!==i||n===i?e:void 0})),this.rrweb=e,this.options=i,this.refillRate=vi(null!==(t=this.options.refillRate)&&void 0!==t?t:this.refillRate,0,100,"mutation throttling refill rate"),this.bucketSize=vi(null!==(n=this.options.bucketSize)&&void 0!==n?n:this.bucketSize,0,100,"mutation throttling bucket size"),setInterval((()=>{this.refillBuckets()}),1e3)}}var mi=Uint8Array,bi=Uint16Array,yi=Uint32Array,wi=new mi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ki=new mi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Si=new mi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ei=function(e,t){for(var n=new bi(31),i=0;i<31;++i)n[i]=t+=1<<e[i-1]
var r=new yi(n[30])
for(i=1;i<30;++i)for(var o=n[i];o<n[i+1];++o)r[o]=o-n[i]<<5|i
return[n,r]},xi=Ei(wi,2),Ci=xi[0],Pi=xi[1]
Ci[28]=258,Pi[258]=28
for(var $i=Ei(ki,0)[1],Ti=new bi(32768),Li=0;Li<32768;++Li){var Ii=(43690&Li)>>>1|(21845&Li)<<1
Ii=(61680&(Ii=(52428&Ii)>>>2|(13107&Ii)<<2))>>>4|(3855&Ii)<<4,Ti[Li]=((65280&Ii)>>>8|(255&Ii)<<8)>>>1}var Ri=function(e,t,n){for(var i=e.length,r=0,o=new bi(t);r<i;++r)++o[e[r]-1]
var s,a=new bi(t)
for(r=0;r<t;++r)a[r]=a[r-1]+o[r-1]<<1
for(s=new bi(i),r=0;r<i;++r)s[r]=Ti[a[e[r]-1]++]>>>15-e[r]
return s},Oi=new mi(288)
for(Li=0;Li<144;++Li)Oi[Li]=8
for(Li=144;Li<256;++Li)Oi[Li]=9
for(Li=256;Li<280;++Li)Oi[Li]=7
for(Li=280;Li<288;++Li)Oi[Li]=8
var Mi=new mi(32)
for(Li=0;Li<32;++Li)Mi[Li]=5
var Fi=Ri(Oi,9),Ai=Ri(Mi,5),Ni=function(e){return(e/8>>0)+(7&e&&1)},ji=function(e,t,n){(null==n||n>e.length)&&(n=e.length)
var i=new(e instanceof bi?bi:e instanceof yi?yi:mi)(n-t)
return i.set(e.subarray(t,n)),i},Di=function(e,t,n){n<<=7&t
var i=t/8>>0
e[i]|=n,e[i+1]|=n>>>8},Bi=function(e,t,n){n<<=7&t
var i=t/8>>0
e[i]|=n,e[i+1]|=n>>>8,e[i+2]|=n>>>16},Hi=function(e,t){for(var n=[],i=0;i<e.length;++i)e[i]&&n.push({s:i,f:e[i]})
var r=n.length,o=n.slice()
if(!r)return[new mi(0),0]
if(1==r){var s=new mi(n[0].s+1)
return s[n[0].s]=1,[s,1]}n.sort((function(e,t){return e.f-t.f})),n.push({s:-1,f:25001})
var a=n[0],l=n[1],c=0,u=1,d=2
for(n[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=n[n[c].f<n[d].f?c++:d++],l=n[c!=u&&n[c].f<n[d].f?c++:d++],n[u++]={s:-1,f:a.f+l.f,l:a,r:l}
var f=o[0].s
for(i=1;i<r;++i)o[i].s>f&&(f=o[i].s)
var h=new bi(f+1),p=Ui(n[u-1],h,0)
if(p>t){i=0
var g=0,v=p-t,_=1<<v
for(o.sort((function(e,t){return h[t.s]-h[e.s]||e.f-t.f}));i<r;++i){var m=o[i].s
if(!(h[m]>t))break
g+=_-(1<<p-h[m]),h[m]=t}for(g>>>=v;g>0;){var b=o[i].s
h[b]<t?g-=1<<t-h[b]++-1:++i}for(;i>=0&&g;--i){var y=o[i].s
h[y]==t&&(--h[y],++g)}p=t}return[new mi(h),p]},Ui=function(e,t,n){return-1==e.s?Math.max(Ui(e.l,t,n+1),Ui(e.r,t,n+1)):t[e.s]=n},qi=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new bi(++t),i=0,r=e[0],o=1,s=function(e){n[i++]=e},a=1;a<=t;++a)if(e[a]==r&&a!=t)++o
else{if(!r&&o>2){for(;o>138;o-=138)s(32754)
o>2&&(s(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(s(r),--o;o>6;o-=6)s(8304)
o>2&&(s(o-3<<5|8208),o=0)}for(;o--;)s(r)
o=1,r=e[a]}return[n.subarray(0,i),t]},Gi=function(e,t){for(var n=0,i=0;i<t.length;++i)n+=e[i]*t[i]
return n},Wi=function(e,t,n){var i=n.length,r=Ni(t+2)
e[r]=255&i,e[r+1]=i>>>8,e[r+2]=255^e[r],e[r+3]=255^e[r+1]
for(var o=0;o<i;++o)e[r+o+4]=n[o]
return 8*(r+4+i)},zi=function(e,t,n,i,r,o,s,a,l,c,u){Di(t,u++,n),++r[256]
for(var d=Hi(r,15),f=d[0],h=d[1],p=Hi(o,15),g=p[0],v=p[1],_=qi(f),m=_[0],b=_[1],y=qi(g),w=y[0],k=y[1],S=new bi(19),E=0;E<m.length;++E)S[31&m[E]]++
for(E=0;E<w.length;++E)S[31&w[E]]++
for(var x=Hi(S,7),C=x[0],P=x[1],$=19;$>4&&!C[Si[$-1]];--$);var T,L,I,R,O=c+5<<3,M=Gi(r,Oi)+Gi(o,Mi)+s,F=Gi(r,f)+Gi(o,g)+s+14+3*$+Gi(S,C)+(2*S[16]+3*S[17]+7*S[18])
if(O<=M&&O<=F)return Wi(t,u,e.subarray(l,l+c))
if(Di(t,u,1+(F<M)),u+=2,F<M){T=Ri(f,h),L=f,I=Ri(g,v),R=g
var A=Ri(C,P)
for(Di(t,u,b-257),Di(t,u+5,k-1),Di(t,u+10,$-4),u+=14,E=0;E<$;++E)Di(t,u+3*E,C[Si[E]])
u+=3*$
for(var N=[m,w],j=0;j<2;++j){var D=N[j]
for(E=0;E<D.length;++E){var B=31&D[E]
Di(t,u,A[B]),u+=C[B],B>15&&(Di(t,u,D[E]>>>5&127),u+=D[E]>>>12)}}}else T=Fi,L=Oi,I=Ai,R=Mi
for(E=0;E<a;++E)if(i[E]>255){B=i[E]>>>18&31,Bi(t,u,T[B+257]),u+=L[B+257],B>7&&(Di(t,u,i[E]>>>23&31),u+=wi[B])
var H=31&i[E]
Bi(t,u,I[H]),u+=R[H],H>3&&(Bi(t,u,i[E]>>>5&8191),u+=ki[H])}else Bi(t,u,T[i[E]]),u+=L[i[E]]
return Bi(t,u,T[256]),u+L[256]},Vi=new yi([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Qi=function(){for(var e=new yi(256),t=0;t<256;++t){for(var n=t,i=9;--i;)n=(1&n&&3988292384)^n>>>1
e[t]=n}return e}(),Ji=function(){var e=4294967295
return{p:function(t){for(var n=e,i=0;i<t.length;++i)n=Qi[255&n^t[i]]^n>>>8
e=n},d:function(){return 4294967295^e}}},Ki=function(e,t,n,i,r){return function(e,t,n,i,r,o){var s=e.length,a=new mi(i+s+5*(1+Math.floor(s/7e3))+r),l=a.subarray(i,a.length-r),c=0
if(!t||s<8)for(var u=0;u<=s;u+=65535){var d=u+65535
d<s?c=Wi(l,c,e.subarray(u,d)):(l[u]=true,c=Wi(l,c,e.subarray(u,s)))}else{for(var f=Vi[t-1],h=f>>>13,p=8191&f,g=(1<<n)-1,v=new bi(32768),_=new bi(g+1),m=Math.ceil(n/3),b=2*m,y=function(t){return(e[t]^e[t+1]<<m^e[t+2]<<b)&g},w=new yi(25e3),k=new bi(288),S=new bi(32),E=0,x=0,C=(u=0,0),P=0,$=0;u<s;++u){var T=y(u),L=32767&u,I=_[T]
if(v[L]=I,_[T]=L,P<=u){var R=s-u
if((E>7e3||C>24576)&&R>423){c=zi(e,l,0,w,k,S,x,C,$,u-$,c),C=E=x=0,$=u
for(var O=0;O<286;++O)k[O]=0
for(O=0;O<30;++O)S[O]=0}var M=2,F=0,A=p,N=L-I&32767
if(R>2&&T==y(u-N))for(var j=Math.min(h,R)-1,D=Math.min(32767,u),B=Math.min(258,R);N<=D&&--A&&L!=I;){if(e[u+M]==e[u+M-N]){for(var H=0;H<B&&e[u+H]==e[u+H-N];++H);if(H>M){if(M=H,F=N,H>j)break
var U=Math.min(N,H-2),q=0
for(O=0;O<U;++O){var G=u-N+O+32768&32767,W=G-v[G]+32768&32767
W>q&&(q=W,I=G)}}}N+=(L=I)-(I=v[L])+32768&32767}if(F){w[C++]=268435456|Pi[M]<<18|$i[F]
var z=31&Pi[M],V=31&$i[F]
x+=wi[z]+ki[V],++k[257+z],++S[V],P=u+M,++E}else w[C++]=e[u],++k[e[u]]}}c=zi(e,l,true,w,k,S,x,C,$,u-$,c)}return ji(a,0,i+Ni(c)+r)}(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,n,i)},Xi=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},Yi=function(e,t){var n=t.filename
if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:9==t.level?2:0,e[9]=3,0!=t.mtime&&Xi(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8
for(var i=0;i<=n.length;++i)e[i+10]=n.charCodeAt(i)}},Zi=function(e){return 10+(e.filename&&e.filename.length+1||0)}
function er(e,t){void 0===t&&(t={})
var n=Ji(),i=e.length
n.p(e)
var r=Ki(e,t,Zi(t),8),o=r.length
return Yi(r,t),Xi(r,o-8,n.d()),Xi(r,o-4,i),r}function tr(e,t){var n=e.length
if("undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e)
for(var i=new mi(e.length+(e.length>>>1)),r=0,o=function(e){i[r++]=e},s=0;s<n;++s){if(r+5>i.length){var a=new mi(r+8+(n-s<<1))
a.set(i),i=a}var l=e.charCodeAt(s)
l<128||t?o(l):l<2048?(o(192|l>>>6),o(128|63&l)):l>55295&&l<57344?(o(240|(l=65536+(1047552&l)|1023&e.charCodeAt(++s))>>>18),o(128|l>>>12&63),o(128|l>>>6&63),o(128|63&l)):(o(224|l>>>12),o(128|l>>>6&63),o(128|63&l))}return ji(i,0,r)}var nr="[SessionRecording]",ir=ne(nr),rr=[On.MouseMove,On.MouseInteraction,On.Scroll,On.ViewportResize,On.Input,On.TouchMove,On.MediaInteraction,On.Drag],or=e=>({rrwebMethod:e,enqueuedAt:Date.now(),attempt:1})
function sr(e){return function(e,t){for(var n="",i=0;i<e.length;){var r=e[i++]
n+=String.fromCharCode(r)}return n}(er(tr(JSON.stringify(e))))}function ar(e){return e.type===Rn.Custom&&"sessionIdle"===e.data.tag}function lr(e,t){return t.some((t=>"regex"===t.matching&&new RegExp(t.url).test(e)))}class cr{get sessionIdleThresholdMilliseconds(){return this.instance.config.session_recording.session_idle_threshold_ms||3e5}get rrwebRecord(){var e,t
return null==I||null===(e=I.__PosthogExtensions__)||void 0===e||null===(t=e.rrweb)||void 0===t?void 0:t.record}get started(){return this._captureStarted}get sessionManager(){if(!this.instance.sessionManager)throw new Error(nr+" must be started with a valid sessionManager.")
return this.instance.sessionManager}get fullSnapshotIntervalMillis(){var e,t
return"trigger_pending"===this.triggerStatus?6e4:null!==(e=null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.full_snapshot_interval_millis)&&void 0!==e?e:3e5}get isSampled(){var e=this.instance.get_property(Ie)
return X(e)?e:null}get sessionDuration(){var e,t,n=null===(e=this.buffer)||void 0===e?void 0:e.data[(null===(t=this.buffer)||void 0===t?void 0:t.data.length)-1],{sessionStartTimestamp:i}=this.sessionManager.checkAndGetSessionAndWindowId(!0)
return n?n.timestamp-i:null}get isRecordingEnabled(){var e=!!this.instance.get_property(Se),t=!this.instance.config.disable_session_recording
return m&&e&&t}get isConsoleLogCaptureEnabled(){var e=!!this.instance.get_property(Ee),t=this.instance.config.enable_recording_console_log
return null!=t?t:e}get canvasRecording(){var e,t,n,i,r,o,s=this.instance.config.session_recording.captureCanvas,a=this.instance.get_property(Ce),l=null!==(e=null!==(t=null==s?void 0:s.recordCanvas)&&void 0!==t?t:null==a?void 0:a.enabled)&&void 0!==e&&e,c=null!==(n=null!==(i=null==s?void 0:s.canvasFps)&&void 0!==i?i:null==a?void 0:a.fps)&&void 0!==n?n:0,u=null!==(r=null!==(o=null==s?void 0:s.canvasQuality)&&void 0!==o?o:null==a?void 0:a.quality)&&void 0!==r?r:0
return{enabled:l,fps:vi(c,0,12,"canvas recording fps"),quality:vi(u,0,1,"canvas recording quality")}}get networkPayloadCapture(){var e,t,n=this.instance.get_property(xe),i={recordHeaders:null===(e=this.instance.config.session_recording)||void 0===e?void 0:e.recordHeaders,recordBody:null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.recordBody},r=(null==i?void 0:i.recordHeaders)||(null==n?void 0:n.recordHeaders),o=(null==i?void 0:i.recordBody)||(null==n?void 0:n.recordBody),s=q(this.instance.config.capture_performance)?this.instance.config.capture_performance.network_timing:this.instance.config.capture_performance,a=!!(X(s)?s:null==n?void 0:n.capturePerformance)
return r||o||a?{recordHeaders:r,recordBody:o,recordPerformance:a}:void 0}get sampleRate(){var e=this.instance.get_property(Pe)
return K(e)?e:null}get minimumDuration(){var e=this.instance.get_property($e)
return K(e)?e:null}get status(){return this.receivedDecide?this.isRecordingEnabled?this._urlBlocked?"paused":J(this._linkedFlag)||this._linkedFlagSeen?"trigger_pending"===this.triggerStatus?"buffering":X(this.isSampled)?this.isSampled?"sampled":"disabled":"active":"buffering":"disabled":"buffering"}get urlTriggerStatus(){var e
return 0===this._urlTriggers.length?"trigger_disabled":(null===(e=this.instance)||void 0===e?void 0:e.get_property(Re))===this.sessionId?"trigger_activated":"trigger_pending"}get eventTriggerStatus(){var e
return 0===this._eventTriggers.length?"trigger_disabled":(null===(e=this.instance)||void 0===e?void 0:e.get_property(Oe))===this.sessionId?"trigger_activated":"trigger_pending"}get triggerStatus(){var e="trigger_activated"===this.eventTriggerStatus||"trigger_activated"===this.urlTriggerStatus,t="trigger_pending"===this.eventTriggerStatus||"trigger_pending"===this.urlTriggerStatus
return e?"trigger_activated":t?"trigger_pending":"trigger_disabled"}constructor(e){if(p(this,"queuedRRWebEvents",[]),p(this,"isIdle",!1),p(this,"_linkedFlagSeen",!1),p(this,"_lastActivityTimestamp",Date.now()),p(this,"_linkedFlag",null),p(this,"_removePageViewCaptureHook",void 0),p(this,"_onSessionIdListener",void 0),p(this,"_persistDecideOnSessionListener",void 0),p(this,"_samplingSessionListener",void 0),p(this,"_urlTriggers",[]),p(this,"_urlBlocklist",[]),p(this,"_urlBlocked",!1),p(this,"_eventTriggers",[]),p(this,"_removeEventTriggerCaptureHook",void 0),p(this,"_forceAllowLocalhostNetworkCapture",!1),p(this,"_onBeforeUnload",(()=>{this._flushBuffer()})),p(this,"_onOffline",(()=>{this._tryAddCustomEvent("browser offline",{})})),p(this,"_onOnline",(()=>{this._tryAddCustomEvent("browser online",{})})),p(this,"_onVisibilityChange",(()=>{if(null!=E&&E.visibilityState){var e="window "+E.visibilityState
this._tryAddCustomEvent(e,{})}})),this.instance=e,this._captureStarted=!1,this._endpoint="/s/",this.stopRrweb=void 0,this.receivedDecide=!1,!this.instance.sessionManager)throw ir.error("started without valid sessionManager"),new Error(nr+" started without valid sessionManager. This is a bug.")
if(this.instance.config.__preview_experimental_cookieless_mode)throw new Error(nr+" cannot be used with __preview_experimental_cookieless_mode.")
var{sessionId:t,windowId:n}=this.sessionManager.checkAndGetSessionAndWindowId()
this.sessionId=t,this.windowId=n,this.buffer=this.clearBuffer(),this.sessionIdleThresholdMilliseconds>=this.sessionManager.sessionTimeoutMs&&ir.warn("session_idle_threshold_ms (".concat(this.sessionIdleThresholdMilliseconds,") is greater than the session timeout (").concat(this.sessionManager.sessionTimeoutMs,"). Session will never be detected as idle"))}startIfEnabledOrStop(e){this.isRecordingEnabled?(this._startCapture(e),null==m||m.addEventListener("beforeunload",this._onBeforeUnload),null==m||m.addEventListener("offline",this._onOffline),null==m||m.addEventListener("online",this._onOnline),null==m||m.addEventListener("visibilitychange",this._onVisibilityChange),this._setupSampling(),this._addEventTriggerListener(),J(this._removePageViewCaptureHook)&&(this._removePageViewCaptureHook=this.instance.on("eventCaptured",(e=>{try{if("$pageview"===e.event){var t=null!=e&&e.properties.$current_url?this._maskUrl(null==e?void 0:e.properties.$current_url):""
if(!t)return
this._tryAddCustomEvent("$pageview",{href:t})}}catch(e){ir.error("Could not add $pageview to rrweb session",e)}}))),this._onSessionIdListener||(this._onSessionIdListener=this.sessionManager.onSessionId(((e,t,n)=>{var i,r,o,s
n&&(this._tryAddCustomEvent("$session_id_change",{sessionId:e,windowId:t,changeReason:n}),null===(i=this.instance)||void 0===i||null===(r=i.persistence)||void 0===r||r.unregister(Oe),null===(o=this.instance)||void 0===o||null===(s=o.persistence)||void 0===s||s.unregister(Re))})))):this.stopRecording()}stopRecording(){var e,t,n,i
this._captureStarted&&this.stopRrweb&&(this.stopRrweb(),this.stopRrweb=void 0,this._captureStarted=!1,null==m||m.removeEventListener("beforeunload",this._onBeforeUnload),null==m||m.removeEventListener("offline",this._onOffline),null==m||m.removeEventListener("online",this._onOnline),null==m||m.removeEventListener("visibilitychange",this._onVisibilityChange),this.clearBuffer(),clearInterval(this._fullSnapshotTimer),null===(e=this._removePageViewCaptureHook)||void 0===e||e.call(this),this._removePageViewCaptureHook=void 0,null===(t=this._removeEventTriggerCaptureHook)||void 0===t||t.call(this),this._removeEventTriggerCaptureHook=void 0,null===(n=this._onSessionIdListener)||void 0===n||n.call(this),this._onSessionIdListener=void 0,null===(i=this._samplingSessionListener)||void 0===i||i.call(this),this._samplingSessionListener=void 0,ir.info("stopped"))}makeSamplingDecision(e){var t,n=this.sessionId!==e,i=this.sampleRate
if(K(i)){var r,o=this.isSampled,s=n||!X(o)
r=s?Math.random()<i:o,s&&(r?this._reportStarted("sampled"):ir.warn("Sample rate (".concat(i,") has determined that this sessionId (").concat(e,") will not be sent to the server.")),this._tryAddCustomEvent("samplingDecisionMade",{sampleRate:i,isSampled:r})),null===(t=this.instance.persistence)||void 0===t||t.register({[Ie]:r})}else{var a
null===(a=this.instance.persistence)||void 0===a||a.register({[Ie]:null})}}onRemoteConfig(e){var t,n,i,r,o,s
if(this._tryAddCustomEvent("$remote_config_received",e),this._persistRemoteConfig(e),this._linkedFlag=(null===(t=e.sessionRecording)||void 0===t?void 0:t.linkedFlag)||null,null!==(n=e.sessionRecording)&&void 0!==n&&n.endpoint&&(this._endpoint=null===(s=e.sessionRecording)||void 0===s?void 0:s.endpoint),this._setupSampling(),!J(this._linkedFlag)&&!this._linkedFlagSeen){var a=z(this._linkedFlag)?this._linkedFlag:this._linkedFlag.flag,l=z(this._linkedFlag)?null:this._linkedFlag.variant
this.instance.onFeatureFlags(((e,t)=>{var n=q(t)&&a in t,i=l?t[a]===l:n
i&&this._reportStarted("linked_flag_matched",{linkedFlag:a,linkedVariant:l}),this._linkedFlagSeen=i}))}null!==(i=e.sessionRecording)&&void 0!==i&&i.urlTriggers&&(this._urlTriggers=e.sessionRecording.urlTriggers),null!==(r=e.sessionRecording)&&void 0!==r&&r.urlBlocklist&&(this._urlBlocklist=e.sessionRecording.urlBlocklist),null!==(o=e.sessionRecording)&&void 0!==o&&o.eventTriggers&&(this._eventTriggers=e.sessionRecording.eventTriggers),this.receivedDecide=!0,this.startIfEnabledOrStop()}_setupSampling(){K(this.sampleRate)&&J(this._samplingSessionListener)&&(this._samplingSessionListener=this.sessionManager.onSessionId((e=>{this.makeSamplingDecision(e)})))}_persistRemoteConfig(e){if(this.instance.persistence){var t,n=this.instance.persistence,i=()=>{var t,i,r,o,s,a,l,c,u=null===(t=e.sessionRecording)||void 0===t?void 0:t.sampleRate,d=J(u)?null:parseFloat(u),f=null===(i=e.sessionRecording)||void 0===i?void 0:i.minimumDurationMilliseconds
n.register({[Se]:!!e.sessionRecording,[Ee]:null===(r=e.sessionRecording)||void 0===r?void 0:r.consoleLogRecordingEnabled,[xe]:h({capturePerformance:e.capturePerformance},null===(o=e.sessionRecording)||void 0===o?void 0:o.networkPayloadCapture),[Ce]:{enabled:null===(s=e.sessionRecording)||void 0===s?void 0:s.recordCanvas,fps:null===(a=e.sessionRecording)||void 0===a?void 0:a.canvasFps,quality:null===(l=e.sessionRecording)||void 0===l?void 0:l.canvasQuality},[Pe]:d,[$e]:W(f)?null:f,[Te]:null===(c=e.sessionRecording)||void 0===c?void 0:c.scriptConfig})}
i(),null===(t=this._persistDecideOnSessionListener)||void 0===t||t.call(this),this._persistDecideOnSessionListener=this.sessionManager.onSessionId(i)}}log(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log"
null===(t=this.instance.sessionRecording)||void 0===t||t.onRRwebEmit({type:6,data:{plugin:"rrweb/console@1",payload:{level:n,trace:[],payload:[JSON.stringify(e)]}},timestamp:Date.now()})}_startCapture(e){var t,n
W(Object.assign)||W(Array.from)||(this._captureStarted||this.instance.config.disable_session_recording||this.instance.consent.isOptedOut())||(this._captureStarted=!0,this.sessionManager.checkAndGetSessionAndWindowId(),this.rrwebRecord?this._onScriptLoaded():null===(t=I.__PosthogExtensions__)||void 0===t||null===(n=t.loadExternalDependency)||void 0===n||n.call(t,this.instance,this.scriptName,(e=>{if(e)return ir.error("could not load recorder",e)
this._onScriptLoaded()})),ir.info("starting"),"active"===this.status&&this._reportStarted(e||"recording_initialized"))}get scriptName(){var e,t,n
return(null===(e=this.instance)||void 0===e||null===(t=e.persistence)||void 0===t||null===(n=t.get_property(Te))||void 0===n?void 0:n.script)||"recorder"}isInteractiveEvent(e){var t
return 3===e.type&&-1!==rr.indexOf(null===(t=e.data)||void 0===t?void 0:t.source)}_updateWindowAndSessionIds(e){var t=this.isInteractiveEvent(e)
t||this.isIdle||e.timestamp-this._lastActivityTimestamp>this.sessionIdleThresholdMilliseconds&&(this.isIdle=!0,clearInterval(this._fullSnapshotTimer),this._tryAddCustomEvent("sessionIdle",{eventTimestamp:e.timestamp,lastActivityTimestamp:this._lastActivityTimestamp,threshold:this.sessionIdleThresholdMilliseconds,bufferLength:this.buffer.data.length,bufferSize:this.buffer.size}),this._flushBuffer())
var n=!1
if(t&&(this._lastActivityTimestamp=e.timestamp,this.isIdle&&(this.isIdle=!1,this._tryAddCustomEvent("sessionNoLongerIdle",{reason:"user activity",type:e.type}),n=!0)),!this.isIdle){var{windowId:i,sessionId:r}=this.sessionManager.checkAndGetSessionAndWindowId(!t,e.timestamp),o=this.sessionId!==r,s=this.windowId!==i
this.windowId=i,this.sessionId=r,o||s?(this.stopRecording(),this.startIfEnabledOrStop("session_id_changed")):n&&this._scheduleFullSnapshot()}}_tryRRWebMethod(e){try{return e.rrwebMethod(),!0}catch(t){return this.queuedRRWebEvents.length<10?this.queuedRRWebEvents.push({enqueuedAt:e.enqueuedAt||Date.now(),attempt:e.attempt++,rrwebMethod:e.rrwebMethod}):ir.warn("could not emit queued rrweb event.",t,e),!1}}_tryAddCustomEvent(e,t){return this._tryRRWebMethod(or((()=>this.rrwebRecord.addCustomEvent(e,t))))}_tryTakeFullSnapshot(){return this._tryRRWebMethod(or((()=>this.rrwebRecord.takeFullSnapshot())))}_onScriptLoaded(){var e,t={blockClass:"ph-no-capture",blockSelector:void 0,ignoreClass:"ph-ignore-input",maskTextClass:"ph-mask",maskTextSelector:void 0,maskTextFn:void 0,maskAllInputs:!0,maskInputOptions:{password:!0},maskInputFn:void 0,slimDOMOptions:{},collectFonts:!1,inlineStylesheet:!0,recordCrossOriginIframes:!1},n=this.instance.config.session_recording
for(var[i,r]of Object.entries(n||{}))i in t&&("maskInputOptions"===i?t.maskInputOptions=h({password:!0},r):t[i]=r)
if(this.canvasRecording&&this.canvasRecording.enabled&&(t.recordCanvas=!0,t.sampling={canvas:this.canvasRecording.fps},t.dataURLOptions={type:"image/webp",quality:this.canvasRecording.quality}),this.rrwebRecord){this.mutationRateLimiter=null!==(e=this.mutationRateLimiter)&&void 0!==e?e:new _i(this.rrwebRecord,{refillRate:this.instance.config.session_recording.__mutationRateLimiterRefillRate,bucketSize:this.instance.config.session_recording.__mutationRateLimiterBucketSize,onBlockedNode:(e,t)=>{var n="Too many mutations on node '".concat(e,"'. Rate limiting. This could be due to SVG animations or something similar")
ir.info(n,{node:t}),this.log(nr+" "+n,"warn")}})
var o=this._gatherRRWebPlugins()
this.stopRrweb=this.rrwebRecord(h({emit:e=>{this.onRRwebEmit(e)},plugins:o},t)),this._lastActivityTimestamp=Date.now(),this.isIdle=!1,this._tryAddCustomEvent("$session_options",{sessionRecordingOptions:t,activePlugins:o.map((e=>null==e?void 0:e.name))}),this._tryAddCustomEvent("$posthog_config",{config:this.instance.config})}else ir.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")}_scheduleFullSnapshot(){if(this._fullSnapshotTimer&&clearInterval(this._fullSnapshotTimer),!this.isIdle){var e=this.fullSnapshotIntervalMillis
e&&(this._fullSnapshotTimer=setInterval((()=>{this._tryTakeFullSnapshot()}),e))}}_gatherRRWebPlugins(){var e,t,n,i,r=[],o=null===(e=I.__PosthogExtensions__)||void 0===e||null===(t=e.rrwebPlugins)||void 0===t?void 0:t.getRecordConsolePlugin
o&&this.isConsoleLogCaptureEnabled&&r.push(o())
var s=null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.rrwebPlugins)||void 0===i?void 0:i.getRecordNetworkPlugin
return this.networkPayloadCapture&&U(s)&&(!kt.includes(location.hostname)||this._forceAllowLocalhostNetworkCapture?r.push(s(gi(this.instance.config,this.networkPayloadCapture))):ir.info("NetworkCapture not started because we are on localhost.")),r}onRRwebEmit(e){var t
if(this._processQueuedEvents(),e&&q(e)){if(e.type===Rn.Meta){var n=this._maskUrl(e.data.href)
if(this._lastHref=n,!n)return
e.data.href=n}else this._pageViewFallBack()
if(this._checkUrlTriggerConditions(),"paused"!==this.status||function(e){return e.type===Rn.Custom&&"recording paused"===e.data.tag}(e)){e.type===Rn.FullSnapshot&&this._scheduleFullSnapshot(),e.type===Rn.FullSnapshot&&"trigger_pending"===this.triggerStatus&&this.clearBuffer()
var i=this.mutationRateLimiter?this.mutationRateLimiter.throttleMutations(e):e
if(i){var r=function(e){var t=e
if(t&&q(t)&&6===t.type&&q(t.data)&&"rrweb/console@1"===t.data.plugin){t.data.payload.payload.length>10&&(t.data.payload.payload=t.data.payload.payload.slice(0,10),t.data.payload.payload.push("...[truncated]"))
for(var n=[],i=0;i<t.data.payload.payload.length;i++)t.data.payload.payload[i]&&t.data.payload.payload[i].length>2e3?n.push(t.data.payload.payload[i].slice(0,2e3)+"...[truncated]"):n.push(t.data.payload.payload[i])
return t.data.payload.payload=n,e}return e}(i)
if(this._updateWindowAndSessionIds(r),!this.isIdle||ar(r)){if(ar(r)){var o=r.data.payload
if(o){var s=o.lastActivityTimestamp,a=o.threshold
r.timestamp=s+a}}var l=null===(t=this.instance.config.session_recording.compress_events)||void 0===t||t?function(e){if(Ln(e)<1024)return e
try{if(e.type===Rn.FullSnapshot)return h(h({},e),{},{data:sr(e.data),cv:"2024-10"})
if(e.type===Rn.IncrementalSnapshot&&e.data.source===On.Mutation)return h(h({},e),{},{cv:"2024-10",data:h(h({},e.data),{},{texts:sr(e.data.texts),attributes:sr(e.data.attributes),removes:sr(e.data.removes),adds:sr(e.data.adds)})})
if(e.type===Rn.IncrementalSnapshot&&e.data.source===On.StyleSheetRule)return h(h({},e),{},{cv:"2024-10",data:h(h({},e.data),{},{adds:sr(e.data.adds),removes:sr(e.data.removes)})})}catch(e){ir.error("could not compress event - will use uncompressed event",e)}return e}(r):r,c={$snapshot_bytes:Ln(l),$snapshot_data:l,$session_id:this.sessionId,$window_id:this.windowId}
"disabled"!==this.status?this._captureSnapshotBuffered(c):this.clearBuffer()}}}}}_pageViewFallBack(){if(!this.instance.config.capture_pageview&&m){var e=this._maskUrl(m.location.href)
this._lastHref!==e&&(this._tryAddCustomEvent("$url_changed",{href:e}),this._lastHref=e)}}_processQueuedEvents(){if(this.queuedRRWebEvents.length){var e=[...this.queuedRRWebEvents]
this.queuedRRWebEvents=[],e.forEach((e=>{Date.now()-e.enqueuedAt<=2e3&&this._tryRRWebMethod(e)}))}}_maskUrl(e){var t=this.instance.config.session_recording
if(t.maskNetworkRequestFn){var n,i={url:e}
return null===(n=i=t.maskNetworkRequestFn(i))||void 0===n?void 0:n.url}return e}clearBuffer(){return this.buffer={size:0,data:[],sessionId:this.sessionId,windowId:this.windowId},this.buffer}_flushBuffer(){this.flushBufferTimer&&(clearTimeout(this.flushBufferTimer),this.flushBufferTimer=void 0)
var e=this.minimumDuration,t=this.sessionDuration,n=K(t)&&t>=0,i=K(e)&&n&&t<e
return"buffering"===this.status||"paused"===this.status||i?(this.flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3),this.buffer):(this.buffer.data.length>0&&In(this.buffer).forEach((e=>{this._captureSnapshot({$snapshot_bytes:e.size,$snapshot_data:e.data,$session_id:e.sessionId,$window_id:e.windowId,$lib:"web",$lib_version:_.LIB_VERSION})})),this.clearBuffer())}_captureSnapshotBuffered(e){var t,n=2+((null===(t=this.buffer)||void 0===t?void 0:t.data.length)||0)
!this.isIdle&&(this.buffer.size+e.$snapshot_bytes+n>943718.4||this.buffer.sessionId!==this.sessionId)&&(this.buffer=this._flushBuffer()),this.buffer.size+=e.$snapshot_bytes,this.buffer.data.push(e.$snapshot_data),this.flushBufferTimer||this.isIdle||(this.flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3))}_captureSnapshot(e){this.instance.capture("$snapshot",e,{_url:this.instance.requestRouter.endpointFor("api",this._endpoint),_noTruncate:!0,_batchKey:"recordings",skip_client_rate_limiting:!0})}_checkUrlTriggerConditions(){if(void 0!==m&&m.location.href){var e=m.location.href,t="paused"===this.status,n=lr(e,this._urlBlocklist)
n&&!t?this._pauseRecording():!n&&t&&this._resumeRecording(),lr(e,this._urlTriggers)&&this._activateTrigger("url")}}_activateTrigger(e){var t,n
"trigger_pending"===this.triggerStatus&&(null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n||n.register({["url"===e?Re:Oe]:this.sessionId}),this._flushBuffer(),this._reportStarted(e+"_trigger_matched"))}_pauseRecording(){"paused"!==this.status&&(this._urlBlocked=!0,clearInterval(this._fullSnapshotTimer),ir.info("recording paused due to URL blocker"),this._tryAddCustomEvent("recording paused",{reason:"url blocker"}))}_resumeRecording(){"paused"===this.status&&(this._urlBlocked=!1,this._tryTakeFullSnapshot(),this._scheduleFullSnapshot(),this._tryAddCustomEvent("recording resumed",{reason:"left blocked url"}),ir.info("recording resumed"))}_addEventTriggerListener(){0!==this._eventTriggers.length&&J(this._removeEventTriggerCaptureHook)&&(this._removeEventTriggerCaptureHook=this.instance.on("eventCaptured",(e=>{try{this._eventTriggers.includes(e.event)&&this._activateTrigger("event")}catch(e){ir.error("Could not activate event trigger",e)}})))}overrideLinkedFlag(){this._linkedFlagSeen=!0,this._tryTakeFullSnapshot(),this._reportStarted("linked_flag_overridden")}overrideSampling(){var e
null===(e=this.instance.persistence)||void 0===e||e.register({[Ie]:!0}),this._tryTakeFullSnapshot(),this._reportStarted("sampling_overridden")}overrideTrigger(e){this._activateTrigger(e)}_reportStarted(e,t){this.instance.register_for_session({$session_recording_start_reason:e}),ir.info(e.replace("_"," "),t),M(["recording_initialized","session_id_changed"],e)||this._tryAddCustomEvent(e,t)}}var ur=ne("[RemoteConfig]")
class dr{constructor(e){this.instance=e}get remoteConfig(){var e,t
return null===(e=I._POSTHOG_REMOTE_CONFIG)||void 0===e||null===(t=e[this.instance.config.token])||void 0===t?void 0:t.config}_loadRemoteConfigJs(e){var t,n,i
null!==(t=I.__PosthogExtensions__)&&void 0!==t&&t.loadExternalDependency?null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"remote-config",(()=>e(this.remoteConfig))):(ur.error("PostHog Extensions not found. Cannot load remote config."),e())}_loadRemoteConfigJSON(e){this.instance._send_request({method:"GET",url:this.instance.requestRouter.endpointFor("assets","/array/".concat(this.instance.config.token,"/config")),callback:t=>{e(t.json)}})}load(){try{if(this.remoteConfig)return ur.info("Using preloaded remote config",this.remoteConfig),void this.onRemoteConfig(this.remoteConfig)
if(this.instance.config.advanced_disable_decide)return void ur.warn("Remote config is disabled. Falling back to local config.")
this._loadRemoteConfigJs((e=>{if(!e)return ur.info("No config found after loading remote JS config. Falling back to JSON."),void this._loadRemoteConfigJSON((e=>{this.onRemoteConfig(e)}))
this.onRemoteConfig(e)}))}catch(e){ur.error("Error loading remote config",e)}}onRemoteConfig(e){e?this.instance.config.__preview_remote_config?(this.instance._onRemoteConfig(e),!1!==e.hasFeatureFlags&&this.instance.featureFlags.ensureFlagsLoaded()):ur.info("__preview_remote_config is disabled. Logging config instead",e):ur.error("Failed to fetch remote config from PostHog.")}}var fr,hr=null!=m&&m.location?Pt(m.location.hash,"__posthog")||Pt(location.hash,"state"):null,pr="_postHogToolbarParams",gr=ne("[Toolbar]")
!function(e){e[e.UNINITIALIZED=0]="UNINITIALIZED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(fr||(fr={}))
class vr{constructor(e){this.instance=e}setToolbarState(e){I.ph_toolbar_state=e}getToolbarState(){var e
return null!==(e=I.ph_toolbar_state)&&void 0!==e?e:fr.UNINITIALIZED}maybeLoadToolbar(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
if(!m||!E)return!1
n=null!==(e=n)&&void 0!==e?e:m.location,r=null!==(t=r)&&void 0!==t?t:m.history
try{if(!i){try{m.localStorage.setItem("test","test"),m.localStorage.removeItem("test")}catch(e){return!1}i=null==m?void 0:m.localStorage}var o,s=hr||Pt(n.hash,"__posthog")||Pt(n.hash,"state"),a=s?ce((()=>JSON.parse(atob(decodeURIComponent(s)))))||ce((()=>JSON.parse(decodeURIComponent(s)))):null
return a&&"ph_authorize"===a.action?((o=a).source="url",o&&Object.keys(o).length>0&&(a.desiredHash?n.hash=a.desiredHash:r?r.replaceState(r.state,"",n.pathname+n.search):n.hash="")):((o=JSON.parse(i.getItem(pr)||"{}")).source="localstorage",delete o.userIntent),!(!o.token||this.instance.config.token!==o.token||(this.loadToolbar(o),0))}catch(e){return!1}}_callLoadToolbar(e){var t=I.ph_load_toolbar||I.ph_load_editor
!J(t)&&U(t)?t(e,this.instance):gr.warn("No toolbar load function found")}loadToolbar(e){var t=!(null==E||!E.getElementById(Qe))
if(!m||t)return!1
var n="custom"===this.instance.requestRouter.region&&this.instance.config.advanced_disable_toolbar_metrics,i=h(h({token:this.instance.config.token},e),{},{apiURL:this.instance.requestRouter.endpointFor("ui")},n?{instrument:!1}:{})
if(m.localStorage.setItem(pr,JSON.stringify(h(h({},i),{},{source:void 0}))),this.getToolbarState()===fr.LOADED)this._callLoadToolbar(i)
else if(this.getToolbarState()===fr.UNINITIALIZED){var r,o
this.setToolbarState(fr.LOADING),null===(r=I.__PosthogExtensions__)||void 0===r||null===(o=r.loadExternalDependency)||void 0===o||o.call(r,this.instance,"toolbar",(e=>{if(e)return gr.error("[Toolbar] Failed to load",e),void this.setToolbarState(fr.UNINITIALIZED)
this.setToolbarState(fr.LOADED),this._callLoadToolbar(i)})),fe(m,"turbolinks:load",(()=>{this.setToolbarState(fr.UNINITIALIZED),this.loadToolbar(i)}))}return!0}_loadEditor(e){return this.loadToolbar(e)}maybeLoadEditor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
return this.maybeLoadToolbar(e,t,n)}}class _r{constructor(e){p(this,"isPaused",!0),p(this,"queue",[]),p(this,"flushTimeoutMs",3e3),this.sendRequest=e}enqueue(e){this.queue.push(e),this.flushTimeout||this.setFlushTimeout()}unload(){this.clearFlushTimeout()
var e=this.queue.length>0?this.formatQueue():{},t=Object.values(e),n=[...t.filter((e=>0===e.url.indexOf("/e"))),...t.filter((e=>0!==e.url.indexOf("/e")))]
n.map((e=>{this.sendRequest(h(h({},e),{},{transport:"sendBeacon"}))}))}enable(){this.isPaused=!1,this.setFlushTimeout()}setFlushTimeout(){var e=this
this.isPaused||(this.flushTimeout=setTimeout((()=>{if(this.clearFlushTimeout(),this.queue.length>0){var t=this.formatQueue(),n=function(n){var i=t[n],r=(new Date).getTime()
i.data&&H(i.data)&&oe(i.data,(e=>{e.offset=Math.abs(e.timestamp-r),delete e.timestamp})),e.sendRequest(i)}
for(var i in t)n(i)}}),this.flushTimeoutMs))}clearFlushTimeout(){clearTimeout(this.flushTimeout),this.flushTimeout=void 0}formatQueue(){var e={}
return oe(this.queue,(t=>{var n,i=t,r=(i?i.batchKey:null)||i.url
W(e[r])&&(e[r]=h(h({},i),{},{data:[]})),null===(n=e[r].data)||void 0===n||n.push(i.data)})),this.queue=[],e}}var mr=!!P||!!C,br="text/plain",yr=(e,t)=>{var[n,i]=e.split("?"),r=h({},t)
null==i||i.split("&").forEach((e=>{var[t]=e.split("=")
delete r[t]}))
var o=function(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",r=[]
return oe(e,(function(e,i){W(e)||W(i)||"undefined"===i||(t=encodeURIComponent((e=>e instanceof File)(e)?e.name:e.toString()),n=encodeURIComponent(i),r[r.length]=n+"="+t)})),r.join(i)}(r)
return o=o?(i?i+"&":"")+o:i,"".concat(n,"?").concat(o)},wr=(e,t)=>JSON.stringify(e,((e,t)=>"bigint"==typeof t?t.toString():t),t),kr=e=>{var{data:t,compression:n}=e
if(t){if(n===v.GZipJS){var i=er(tr(wr(t)),{mtime:0}),r=new Blob([i],{type:br})
return{contentType:br,body:r,estimatedSize:r.size}}if(n===v.Base64){var o=function(e){var t,n,i,r,o,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a=0,l=0,c="",u=[]
if(!e)return e
e=function(e){var t,n,i,r,o=""
for(t=n=0,i=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,r=0;r<i;r++){var s=e.charCodeAt(r),a=null
s<128?n++:a=s>127&&s<2048?String.fromCharCode(s>>6|192,63&s|128):String.fromCharCode(s>>12|224,s>>6&63|128,63&s|128),Q(a)||(n>t&&(o+=e.substring(t,n)),o+=a,t=n=r+1)}return n>t&&(o+=e.substring(t,e.length)),o}(e)
do{t=(o=e.charCodeAt(a++)<<16|e.charCodeAt(a++)<<8|e.charCodeAt(a++))>>18&63,n=o>>12&63,i=o>>6&63,r=63&o,u[l++]=s.charAt(t)+s.charAt(n)+s.charAt(i)+s.charAt(r)}while(a<e.length)
switch(c=u.join(""),e.length%3){case 1:c=c.slice(0,-2)+"=="
break
case 2:c=c.slice(0,-1)+"="}return c}(wr(t)),s=(e=>"data="+encodeURIComponent("string"==typeof e?e:wr(e)))(o)
return{contentType:"application/x-www-form-urlencoded",body:s,estimatedSize:new Blob([s]).size}}var a=wr(t)
return{contentType:"application/json",body:a,estimatedSize:new Blob([a]).size}}},Sr=[]
C&&Sr.push({transport:"fetch",method:e=>{var t,n,{contentType:i,body:r,estimatedSize:o}=null!==(t=kr(e))&&void 0!==t?t:{},s=new Headers
oe(e.headers,(function(e,t){s.append(t,e)})),i&&s.append("Content-Type",i)
var a=e.url,l=null
if(T){var c=new T
l={signal:c.signal,timeout:setTimeout((()=>c.abort()),e.timeout)}}C(a,h({method:(null==e?void 0:e.method)||"GET",headers:s,keepalive:"POST"===e.method&&(o||0)<52428.8,body:r,signal:null===(n=l)||void 0===n?void 0:n.signal},e.fetchOptions)).then((t=>t.text().then((n=>{var i,r={statusCode:t.status,text:n}
if(200===t.status)try{r.json=JSON.parse(n)}catch(e){te.error(e)}null===(i=e.callback)||void 0===i||i.call(e,r)})))).catch((t=>{var n
te.error(t),null===(n=e.callback)||void 0===n||n.call(e,{statusCode:0,text:t})})).finally((()=>l?clearTimeout(l.timeout):null))}}),P&&Sr.push({transport:"XHR",method:e=>{var t,n=new P
n.open(e.method||"GET",e.url,!0)
var{contentType:i,body:r}=null!==(t=kr(e))&&void 0!==t?t:{}
oe(e.headers,(function(e,t){n.setRequestHeader(t,e)})),i&&n.setRequestHeader("Content-Type",i),e.timeout&&(n.timeout=e.timeout),n.withCredentials=!0,n.onreadystatechange=()=>{if(4===n.readyState){var t,i={statusCode:n.status,text:n.responseText}
if(200===n.status)try{i.json=JSON.parse(n.responseText)}catch(e){}null===(t=e.callback)||void 0===t||t.call(e,i)}},n.send(r)}}),null!=S&&S.sendBeacon&&Sr.push({transport:"sendBeacon",method:e=>{var t=yr(e.url,{beacon:"1"})
try{var n,{contentType:i,body:r}=null!==(n=kr(e))&&void 0!==n?n:{},o="string"==typeof r?new Blob([r],{type:i}):r
S.sendBeacon(t,o)}catch(e){}}})
var Er=["retriesPerformedSoFar"]
class xr{constructor(e){p(this,"isPolling",!1),p(this,"pollIntervalMs",3e3),p(this,"queue",[]),this.instance=e,this.queue=[],this.areWeOnline=!0,!W(m)&&"onLine"in m.navigator&&(this.areWeOnline=m.navigator.onLine,m.addEventListener("online",(()=>{this.areWeOnline=!0,this.flush()})),m.addEventListener("offline",(()=>{this.areWeOnline=!1})))}retriableRequest(e){var{retriesPerformedSoFar:t}=e,n=g(e,Er)
K(t)&&t>0&&(n.url=yr(n.url,{retry_count:t})),this.instance._send_request(h(h({},n),{},{callback:e=>{var i
200!==e.statusCode&&(e.statusCode<400||e.statusCode>=500)&&(null!=t?t:0)<10?this.enqueue(h({retriesPerformedSoFar:t},n)):null===(i=n.callback)||void 0===i||i.call(n,e)}}))}enqueue(e){var t=e.retriesPerformedSoFar||0
e.retriesPerformedSoFar=t+1
var n=function(e){var t=3e3*Math.pow(2,e),n=t/2,i=Math.min(18e5,t),r=(Math.random()-.5)*(i-n)
return Math.ceil(i+r)}(t),i=Date.now()+n
this.queue.push({retryAt:i,requestOptions:e})
var r="Enqueued failed request for retry in ".concat(n)
navigator.onLine||(r+=" (Browser is offline)"),te.warn(r),this.isPolling||(this.isPolling=!0,this.poll())}poll(){this.poller&&clearTimeout(this.poller),this.poller=setTimeout((()=>{this.areWeOnline&&this.queue.length>0&&this.flush(),this.poll()}),this.pollIntervalMs)}flush(){var e=Date.now(),t=[],n=this.queue.filter((n=>n.retryAt<e||(t.push(n),!1)))
if(this.queue=t,n.length>0)for(var{requestOptions:i}of n)this.retriableRequest(i)}unload(){for(var{requestOptions:e}of(this.poller&&(clearTimeout(this.poller),this.poller=void 0),this.queue))try{this.instance._send_request(h(h({},e),{},{transport:"sendBeacon"}))}catch(e){te.error(e)}this.queue=[]}}var Cr,Pr=ne("[SessionId]")
class $r{constructor(e,t,n){var i
if(p(this,"_sessionIdChangedHandlers",[]),!e.persistence)throw new Error("SessionIdManager requires a PostHogPersistence instance")
if(e.config.__preview_experimental_cookieless_mode)throw new Error("SessionIdManager cannot be used with __preview_experimental_cookieless_mode")
this.config=e.config,this.persistence=e.persistence,this._windowId=void 0,this._sessionId=void 0,this._sessionStartTimestamp=null,this._sessionActivityTimestamp=null,this._sessionIdGenerator=t||ct,this._windowIdGenerator=n||ct
var r=this.config.persistence_name||this.config.token,o=this.config.session_idle_timeout_seconds||1800
if(this._sessionTimeoutMs=1e3*vi(o,60,36e3,"session_idle_timeout_seconds",1800),e.register({$configured_session_timeout_ms:this._sessionTimeoutMs}),this.resetIdleTimer(),this._window_id_storage_key="ph_"+r+"_window_id",this._primary_window_exists_storage_key="ph_"+r+"_primary_window_exists",this._canUseSessionStorage()){var s=wt.parse(this._window_id_storage_key),a=wt.parse(this._primary_window_exists_storage_key)
s&&!a?this._windowId=s:wt.remove(this._window_id_storage_key),wt.set(this._primary_window_exists_storage_key,!0)}if(null!==(i=this.config.bootstrap)&&void 0!==i&&i.sessionID)try{var l=(e=>{var t=this.config.bootstrap.sessionID.replace(/-/g,"")
if(32!==t.length)throw new Error("Not a valid UUID")
if("7"!==t[12])throw new Error("Not a UUIDv7")
return parseInt(t.substring(0,12),16)})()
this._setSessionId(this.config.bootstrap.sessionID,(new Date).getTime(),l)}catch(e){Pr.error("Invalid sessionID in bootstrap",e)}this._listenToReloadWindow()}get sessionTimeoutMs(){return this._sessionTimeoutMs}onSessionId(e){return W(this._sessionIdChangedHandlers)&&(this._sessionIdChangedHandlers=[]),this._sessionIdChangedHandlers.push(e),this._sessionId&&e(this._sessionId,this._windowId),()=>{this._sessionIdChangedHandlers=this._sessionIdChangedHandlers.filter((t=>t!==e))}}_canUseSessionStorage(){return"memory"!==this.config.persistence&&!this.persistence.disabled&&wt.is_supported()}_setWindowId(e){e!==this._windowId&&(this._windowId=e,this._canUseSessionStorage()&&wt.set(this._window_id_storage_key,e))}_getWindowId(){return this._windowId?this._windowId:this._canUseSessionStorage()?wt.parse(this._window_id_storage_key):null}_setSessionId(e,t,n){e===this._sessionId&&t===this._sessionActivityTimestamp&&n===this._sessionStartTimestamp||(this._sessionStartTimestamp=n,this._sessionActivityTimestamp=t,this._sessionId=e,this.persistence.register({[Le]:[t,e,n]}))}_getSessionId(){if(this._sessionId&&this._sessionActivityTimestamp&&this._sessionStartTimestamp)return[this._sessionActivityTimestamp,this._sessionId,this._sessionStartTimestamp]
var e=this.persistence.props[Le]
return H(e)&&2===e.length&&e.push(e[0]),e||[0,null,0]}resetSessionId(){this._setSessionId(null,null,null)}_listenToReloadWindow(){null==m||m.addEventListener("beforeunload",(()=>{this._canUseSessionStorage()&&wt.remove(this._primary_window_exists_storage_key)}))}checkAndGetSessionAndWindowId(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(this.config.__preview_experimental_cookieless_mode)throw new Error("checkAndGetSessionAndWindowId should not be called in __preview_experimental_cookieless_mode")
var n=t||(new Date).getTime(),[i,r,o]=this._getSessionId(),s=this._getWindowId(),a=K(o)&&o>0&&Math.abs(n-o)>864e5,l=!1,c=!r,u=!e&&Math.abs(n-i)>this.sessionTimeoutMs
c||u||a?(r=this._sessionIdGenerator(),s=this._windowIdGenerator(),Pr.info("new session ID generated",{sessionId:r,windowId:s,changeReason:{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}}),o=n,l=!0):s||(s=this._windowIdGenerator(),l=!0)
var d=0===i||!e||a?n:i,f=0===o?(new Date).getTime():o
return this._setWindowId(s),this._setSessionId(r,d,f),e||this.resetIdleTimer(),l&&this._sessionIdChangedHandlers.forEach((e=>e(r,s,l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0))),{sessionId:r,windowId:s,sessionStartTimestamp:f,changeReason:l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0,lastActivityTimestamp:i}}resetIdleTimer(){clearTimeout(this._enforceIdleTimeout),this._enforceIdleTimeout=setTimeout((()=>{this.resetSessionId()}),1.1*this.sessionTimeoutMs)}}!function(e){e.US="us",e.EU="eu",e.CUSTOM="custom"}(Cr||(Cr={}))
var Tr="i.posthog.com"
class Lr{constructor(e){p(this,"_regionCache",{}),this.instance=e}get apiHost(){var e=this.instance.config.api_host.trim().replace(/\/$/,"")
return"https://app.posthog.com"===e?"https://us.i.posthog.com":e}get uiHost(){var e,t=null===(e=this.instance.config.ui_host)||void 0===e?void 0:e.replace(/\/$/,"")
return t||(t=this.apiHost.replace(".".concat(Tr),".posthog.com")),"https://app.posthog.com"===t?"https://us.posthog.com":t}get region(){return this._regionCache[this.apiHost]||(/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=Cr.US:/https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=Cr.EU:this._regionCache[this.apiHost]=Cr.CUSTOM),this._regionCache[this.apiHost]}endpointFor(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
if(t&&(t="/"===t[0]?t:"/".concat(t)),"ui"===e)return this.uiHost+t
if(this.region===Cr.CUSTOM)return this.apiHost+t
var n=Tr+t
switch(e){case"assets":return"https://".concat(this.region,"-assets.").concat(n)
case"api":return"https://".concat(this.region,".").concat(n)}}}var Ir="posthog-js"
function Rr(e){var{organization:t,projectId:n,prefix:i,severityAllowList:r=["error"]}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return o=>{var s,a,l,c,u
if("*"!==r&&!r.includes(o.level)||!e.__loaded)return o
o.tags||(o.tags={})
var d=e.requestRouter.endpointFor("ui","/project/".concat(e.config.token,"/person/").concat(e.get_distinct_id()))
o.tags["PostHog Person URL"]=d,e.sessionRecordingStarted()&&(o.tags["PostHog Recording URL"]=e.get_session_replay_url({withTimestamp:!0}))
var f=(null===(s=o.exception)||void 0===s?void 0:s.values)||[]
f.forEach((e=>{e.stacktrace&&(e.stacktrace.type="raw",e.stacktrace.frames.forEach((e=>{e.platform="web:javascript"})))}))
var h={$exception_message:(null===(a=f[0])||void 0===a?void 0:a.value)||o.message,$exception_type:null===(l=f[0])||void 0===l?void 0:l.type,$exception_personURL:d,$exception_level:o.level,$exception_list:f,$sentry_event_id:o.event_id,$sentry_exception:o.exception,$sentry_exception_message:(null===(c=f[0])||void 0===c?void 0:c.value)||o.message,$sentry_exception_type:null===(u=f[0])||void 0===u?void 0:u.type,$sentry_tags:o.tags}
return t&&n&&(h.$sentry_url=(i||"https://sentry.io/organizations/")+t+"/issues/?project="+n+"&query="+o.event_id),e.exceptions.sendExceptionEvent(h),o}}class Or{constructor(e,t,n,i,r){this.name=Ir,this.setupOnce=function(o){o(Rr(e,{organization:t,projectId:n,prefix:i,severityAllowList:r}))}}}var Mr=ne("[SegmentIntegration]")
class Fr{constructor(e){this._instance=e}doPageView(e,t){var n,i=this._previousPageViewProperties(e,t)
return this._currentPageview={pathname:null!==(n=null==m?void 0:m.location.pathname)&&void 0!==n?n:"",pageViewId:t,timestamp:e},this._instance.scrollManager.resetContext(),i}doPageLeave(e){var t
return this._previousPageViewProperties(e,null===(t=this._currentPageview)||void 0===t?void 0:t.pageViewId)}doEvent(){var e
return{$pageview_id:null===(e=this._currentPageview)||void 0===e?void 0:e.pageViewId}}_previousPageViewProperties(e,t){var n=this._currentPageview
if(!n)return{$pageview_id:t}
var i={$pageview_id:t,$prev_pageview_id:n.pageViewId},r=this._instance.scrollManager.getContext()
if(r&&!this._instance.config.disable_scroll_properties){var{maxScrollHeight:o,lastScrollY:s,maxScrollY:a,maxContentHeight:l,lastContentY:c,maxContentY:u}=r
if(!(W(o)||W(s)||W(a)||W(l)||W(c)||W(u))){o=Math.ceil(o),s=Math.ceil(s),a=Math.ceil(a),l=Math.ceil(l),c=Math.ceil(c),u=Math.ceil(u)
var d=o<=1?1:vi(s/o,0,1),f=o<=1?1:vi(a/o,0,1),h=l<=1?1:vi(c/l,0,1),p=l<=1?1:vi(u/l,0,1)
i=se(i,{$prev_pageview_last_scroll:s,$prev_pageview_last_scroll_percentage:d,$prev_pageview_max_scroll:a,$prev_pageview_max_scroll_percentage:f,$prev_pageview_last_content:c,$prev_pageview_last_content_percentage:h,$prev_pageview_max_content:u,$prev_pageview_max_content_percentage:p})}}return n.pathname&&(i.$prev_pageview_pathname=n.pathname),n.timestamp&&(i.$prev_pageview_duration=(e.getTime()-n.timestamp.getTime())/1e3),i}}var Ar,Nr,jr,Dr,Br,Hr,Ur,qr,Gr,Wr,zr,Vr={},Qr=[],Jr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Kr=Array.isArray
function Xr(e,t){for(var n in t)e[n]=t[n]
return e}function Yr(e){var t=e.parentNode
t&&t.removeChild(e)}function Zr(e,t,n,i,r){var o={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++jr:r,__i:-1,__u:0}
return null==r&&null!=Nr.vnode&&Nr.vnode(o),o}function eo(e){return e.children}function to(e,t){this.props=e,this.context=t}function no(e,t){if(null==t)return e.__?no(e.__,e.__i+1):null
for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e
return"function"==typeof e.type?no(e):null}function io(e){var t,n
if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e
break}return io(e)}}function ro(e){(!e.__d&&(e.__d=!0)&&Dr.push(e)&&!oo.__r++||Br!==Nr.debounceRendering)&&((Br=Nr.debounceRendering)||Hr)(oo)}function oo(){var e,t,n,i,r,o,s,a,l
for(Dr.sort(Ur);e=Dr.shift();)e.__d&&(t=Dr.length,i=void 0,o=(r=(n=e).__v).__e,a=[],l=[],(s=n.__P)&&((i=Xr({},r)).__v=r.__v+1,Nr.vnode&&Nr.vnode(i),po(s,i,r,n.__n,void 0!==s.ownerSVGElement,32&r.__u?[o]:null,a,null==o?no(r):o,!!(32&r.__u),l),i.__.__k[i.__i]=i,go(a,i,l),i.__e!=o&&io(i)),Dr.length>t&&Dr.sort(Ur))
oo.__r=0}function so(e,t,n,i,r,o,s,a,l,c,u){var d,f,h,p,g,v=i&&i.__k||Qr,_=t.length
for(n.__d=l,function(e,t,n){var i,r,o,s,a,l=t.length,c=n.length,u=c,d=0
for(e.__k=[],i=0;i<l;i++)null!=(r=e.__k[i]=null==(r=t[i])||"boolean"==typeof r||"function"==typeof r?null:"string"==typeof r||"number"==typeof r||"bigint"==typeof r||r.constructor==String?Zr(null,r,null,null,r):Kr(r)?Zr(eo,{children:r},null,null,null):void 0===r.constructor&&r.__b>0?Zr(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)?(r.__=e,r.__b=e.__b+1,a=lo(r,n,s=i+d,u),r.__i=a,o=null,-1!==a&&(u--,(o=n[a])&&(o.__u|=131072)),null==o||null===o.__v?(-1==a&&d--,"function"!=typeof r.type&&(r.__u|=65536)):a!==s&&(a===s+1?d++:a>s?u>l-s?d+=a-s:d--:d=a<s&&a==s-1?a-s:0,a!==i+d&&(r.__u|=65536))):(o=n[i])&&null==o.key&&o.__e&&(o.__e==e.__d&&(e.__d=no(o)),_o(o,o,!1),n[i]=null,u--)
if(u)for(i=0;i<c;i++)null!=(o=n[i])&&0==(131072&o.__u)&&(o.__e==e.__d&&(e.__d=no(o)),_o(o,o))}(n,t,v),l=n.__d,d=0;d<_;d++)null!=(h=n.__k[d])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?Vr:v[h.__i]||Vr,h.__i=d,po(e,h,f,r,o,s,a,l,c,u),p=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&vo(f.ref,null,h),u.push(h.ref,h.__c||p,h)),null==g&&null!=p&&(g=p),65536&h.__u||f.__k===h.__k?l=ao(h,l,e):"function"==typeof h.type&&void 0!==h.__d?l=h.__d:p&&(l=p.nextSibling),h.__d=void 0,h.__u&=-196609)
n.__d=l,n.__e=g}function ao(e,t,n){var i,r
if("function"==typeof e.type){for(i=e.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=e,t=ao(i[r],t,n))
return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function lo(e,t,n,i){var r=e.key,o=e.type,s=n-1,a=n+1,l=t[n]
if(null===l||l&&r==l.key&&o===l.type)return n
if(i>(null!=l&&0==(131072&l.__u)?1:0))for(;s>=0||a<t.length;){if(s>=0){if((l=t[s])&&0==(131072&l.__u)&&r==l.key&&o===l.type)return s
s--}if(a<t.length){if((l=t[a])&&0==(131072&l.__u)&&r==l.key&&o===l.type)return a
a++}}return-1}function co(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||Jr.test(t)?n:n+"px"}function uo(e,t,n,i,r){var o
e:if("style"===t)if("string"==typeof n)e.style.cssText=n
else{if("string"==typeof i&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||co(e.style,t,"")
if(n)for(t in n)i&&n[t]===i[t]||co(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?i?n.u=i.u:(n.u=Date.now(),e.addEventListener(t,o?ho:fo,o)):e.removeEventListener(t,o?ho:fo,o)
else{if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s")
else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&"role"!==t&&t in e)try{e[t]=null==n?"":n
break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function fo(e){var t=this.l[e.type+!1]
if(e.t){if(e.t<=t.u)return}else e.t=Date.now()
return t(Nr.event?Nr.event(e):e)}function ho(e){return this.l[e.type+!0](Nr.event?Nr.event(e):e)}function po(e,t,n,i,r,o,s,a,l,c){var u,d,f,h,p,g,v,_,m,b,y,w,k,S,E,x=t.type
if(void 0!==t.constructor)return null
128&n.__u&&(l=!!(32&n.__u),o=[a=t.__e=n.__e]),(u=Nr.__b)&&u(t)
e:if("function"==typeof x)try{if(_=t.props,m=(u=x.contextType)&&i[u.__c],b=u?m?m.props.value:u.__:i,n.__c?v=(d=t.__c=n.__c).__=d.__E:("prototype"in x&&x.prototype.render?t.__c=d=new x(_,b):(t.__c=d=new to(_,b),d.constructor=x,d.render=mo),m&&m.sub(d),d.props=_,d.state||(d.state={}),d.context=b,d.__n=i,f=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=x.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=Xr({},d.__s)),Xr(d.__s,x.getDerivedStateFromProps(_,d.__s))),h=d.props,p=d.state,d.__v=t,f)null==x.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount)
else{if(null==x.getDerivedStateFromProps&&_!==h&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(_,b),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(_,d.__s,b)||t.__v===n.__v)){for(t.__v!==n.__v&&(d.props=_,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),y=0;y<d._sb.length;y++)d.__h.push(d._sb[y])
d._sb=[],d.__h.length&&s.push(d)
break e}null!=d.componentWillUpdate&&d.componentWillUpdate(_,d.__s,b),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(h,p,g)}))}if(d.context=b,d.props=_,d.__P=e,d.__e=!1,w=Nr.__r,k=0,"prototype"in x&&x.prototype.render){for(d.state=d.__s,d.__d=!1,w&&w(t),u=d.render(d.props,d.state,d.context),S=0;S<d._sb.length;S++)d.__h.push(d._sb[S])
d._sb=[]}else do{d.__d=!1,w&&w(t),u=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++k<25)
d.state=d.__s,null!=d.getChildContext&&(i=Xr(Xr({},i),d.getChildContext())),f||null==d.getSnapshotBeforeUpdate||(g=d.getSnapshotBeforeUpdate(h,p)),so(e,Kr(E=null!=u&&u.type===eo&&null==u.key?u.props.children:u)?E:[E],t,n,i,r,o,s,a,l,c),d.base=t.__e,t.__u&=-161,d.__h.length&&s.push(d),v&&(d.__E=d.__=null)}catch(e){t.__v=null,l||null!=o?(t.__e=a,t.__u|=l?160:32,o[o.indexOf(a)]=null):(t.__e=n.__e,t.__k=n.__k),Nr.__e(e,t,n)}else null==o&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=function(e,t,n,i,r,o,s,a,l){var c,u,d,f,h,p,g,v=n.props,_=t.props,m=t.type
if("svg"===m&&(r=!0),null!=o)for(c=0;c<o.length;c++)if((h=o[c])&&"setAttribute"in h==!!m&&(m?h.localName===m:3===h.nodeType)){e=h,o[c]=null
break}if(null==e){if(null===m)return document.createTextNode(_)
e=r?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,_.is&&_),o=null,a=!1}if(null===m)v===_||a&&e.data===_||(e.data=_)
else{if(o=o&&Ar.call(e.childNodes),v=n.props||Vr,!a&&null!=o)for(v={},c=0;c<e.attributes.length;c++)v[(h=e.attributes[c]).name]=h.value
for(c in v)h=v[c],"children"==c||("dangerouslySetInnerHTML"==c?d=h:"key"===c||c in _||uo(e,c,null,h,r))
for(c in _)h=_[c],"children"==c?f=h:"dangerouslySetInnerHTML"==c?u=h:"value"==c?p=h:"checked"==c?g=h:"key"===c||a&&"function"!=typeof h||v[c]===h||uo(e,c,h,v[c],r)
if(u)a||d&&(u.__html===d.__html||u.__html===e.innerHTML)||(e.innerHTML=u.__html),t.__k=[]
else if(d&&(e.innerHTML=""),so(e,Kr(f)?f:[f],t,n,i,r&&"foreignObject"!==m,o,s,o?o[0]:n.__k&&no(n,0),a,l),null!=o)for(c=o.length;c--;)null!=o[c]&&Yr(o[c])
a||(c="value",void 0!==p&&(p!==e[c]||"progress"===m&&!p||"option"===m&&p!==v[c])&&uo(e,c,p,v[c],!1),c="checked",void 0!==g&&g!==e[c]&&uo(e,c,g,v[c],!1))}return e}(n.__e,t,n,i,r,o,s,l,c);(u=Nr.diffed)&&u(t)}function go(e,t,n){t.__d=void 0
for(var i=0;i<n.length;i++)vo(n[i],n[++i],n[++i])
Nr.__c&&Nr.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){Nr.__e(e,t.__v)}}))}function vo(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){Nr.__e(e,n)}}function _o(e,t,n){var i,r
if(Nr.unmount&&Nr.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||vo(i,null,t)),null!=(i=e.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){Nr.__e(e,t)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(r=0;r<i.length;r++)i[r]&&_o(i[r],t,n||"function"!=typeof e.type)
n||null==e.__e||Yr(e.__e),e.__=e.__e=e.__d=void 0}function mo(e,t,n){return this.constructor(e,n)}Ar=Qr.slice,Nr={__e:function(e,t,n,i){for(var r,o,s;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&null!=o.getDerivedStateFromError&&(r.setState(o.getDerivedStateFromError(e)),s=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,i||{}),s=r.__d),s)return r.__E=r}catch(t){e=t}throw e}},jr=0,to.prototype.setState=function(e,t){var n
n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=Xr({},this.state),"function"==typeof e&&(e=e(Xr({},n),this.props)),e&&Xr(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),ro(this))},to.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ro(this))},to.prototype.render=eo,Dr=[],Hr="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ur=function(e,t){return e.__v.__b-t.__v.__b},oo.__r=0,qr=0,function(e,t){var n={__c:t="__cC"+qr++,__:{isPreviewMode:!1,previewPageIndex:0,handleCloseSurveyPopup:()=>{},isPopup:!0,onPreviewSubmit:()=>{}},Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,i
return this.getChildContext||(n=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some((function(e){e.__e=!0,ro(e)}))},this.sub=function(e){n.push(e)
var t=e.componentWillUnmount
e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}}
n.Provider.__=n.Consumer.contextType=n}(),function(e){e.Popover="popover",e.API="api",e.Widget="widget"}(Gr||(Gr={})),function(e){e.Open="open",e.MultipleChoice="multiple_choice",e.SingleChoice="single_choice",e.Rating="rating",e.Link="link"}(Wr||(Wr={})),function(e){e.NextQuestion="next_question",e.End="end",e.ResponseBased="response_based",e.SpecificQuestion="specific_question"}(zr||(zr={}))
class bo{constructor(){p(this,"events",{}),this.events={}}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),()=>{this.events[e]=this.events[e].filter((e=>e!==t))}}emit(e,t){for(var n of this.events[e]||[])n(t)
for(var i of this.events["*"]||[])i(e,t)}}class yo{constructor(e){p(this,"_debugEventEmitter",new bo),p(this,"checkStep",((e,t)=>this.checkStepEvent(e,t)&&this.checkStepUrl(e,t)&&this.checkStepElement(e,t))),p(this,"checkStepEvent",((e,t)=>null==t||!t.event||(null==e?void 0:e.event)===(null==t?void 0:t.event))),this.instance=e,this.actionEvents=new Set,this.actionRegistry=new Set}init(){var e,t
W(null===(e=this.instance)||void 0===e?void 0:e._addCaptureHook)||(null===(t=this.instance)||void 0===t||t._addCaptureHook(((e,t)=>{this.on(e,t)})))}register(e){var t,n
if(!W(null===(t=this.instance)||void 0===t?void 0:t._addCaptureHook)&&(e.forEach((e=>{var t,n
null===(t=this.actionRegistry)||void 0===t||t.add(e),null===(n=e.steps)||void 0===n||n.forEach((e=>{var t
null===(t=this.actionEvents)||void 0===t||t.add((null==e?void 0:e.event)||"")}))})),null!==(n=this.instance)&&void 0!==n&&n.autocapture)){var i,r=new Set
e.forEach((e=>{var t
null===(t=e.steps)||void 0===t||t.forEach((e=>{null!=e&&e.selector&&r.add(null==e?void 0:e.selector)}))})),null===(i=this.instance)||void 0===i||i.autocapture.setElementSelectors(r)}}on(e,t){var n
null!=t&&0!=e.length&&(this.actionEvents.has(e)||this.actionEvents.has(null==t?void 0:t.event))&&this.actionRegistry&&(null===(n=this.actionRegistry)||void 0===n?void 0:n.size)>0&&this.actionRegistry.forEach((e=>{this.checkAction(t,e)&&this._debugEventEmitter.emit("actionCaptured",e.name)}))}_addActionHook(e){this.onAction("actionCaptured",(t=>e(t)))}checkAction(e,t){if(null==(null==t?void 0:t.steps))return!1
for(var n of t.steps)if(this.checkStep(e,n))return!0
return!1}onAction(e,t){return this._debugEventEmitter.on(e,t)}checkStepUrl(e,t){if(null!=t&&t.url){var n,i=null==e||null===(n=e.properties)||void 0===n?void 0:n.$current_url
if(!i||"string"!=typeof i)return!1
if(!yo.matchString(i,null==t?void 0:t.url,(null==t?void 0:t.url_matching)||"contains"))return!1}return!0}static matchString(e,t,n){switch(n){case"regex":return!!m&&Et(e,t)
case"exact":return t===e
case"contains":var i=yo.escapeStringRegexp(t).replace(/_/g,".").replace(/%/g,".*")
return Et(e,i)
default:return!1}}static escapeStringRegexp(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}checkStepElement(e,t){if((null!=t&&t.href||null!=t&&t.tag_name||null!=t&&t.text)&&!this.getElementsList(e).some((e=>!(null!=t&&t.href&&!yo.matchString(e.href||"",null==t?void 0:t.href,(null==t?void 0:t.href_matching)||"exact")||null!=t&&t.tag_name&&e.tag_name!==(null==t?void 0:t.tag_name)||null!=t&&t.text&&!yo.matchString(e.text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")&&!yo.matchString(e.$el_text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")))))return!1
if(null!=t&&t.selector){var n,i=null==e||null===(n=e.properties)||void 0===n?void 0:n.$element_selectors
if(!i)return!1
if(!i.includes(null==t?void 0:t.selector))return!1}return!0}getElementsList(e){return null==(null==e?void 0:e.properties.$elements)?[]:null==e?void 0:e.properties.$elements}}class wo{constructor(e){this.instance=e,this.eventToSurveys=new Map,this.actionToSurveys=new Map}register(e){var t
W(null===(t=this.instance)||void 0===t?void 0:t._addCaptureHook)||(this.setupEventBasedSurveys(e),this.setupActionBasedSurveys(e))}setupActionBasedSurveys(e){var t=e.filter((e=>{var t,n,i,r
return(null===(t=e.conditions)||void 0===t?void 0:t.actions)&&(null===(n=e.conditions)||void 0===n||null===(i=n.actions)||void 0===i||null===(r=i.values)||void 0===r?void 0:r.length)>0}))
0!==t.length&&(null==this.actionMatcher&&(this.actionMatcher=new yo(this.instance),this.actionMatcher.init(),this.actionMatcher._addActionHook((e=>{this.onAction(e)}))),t.forEach((e=>{var t,n,i,r,o,s,a,l,c,u
e.conditions&&null!==(t=e.conditions)&&void 0!==t&&t.actions&&null!==(n=e.conditions)&&void 0!==n&&null!==(i=n.actions)&&void 0!==i&&i.values&&(null===(r=e.conditions)||void 0===r||null===(o=r.actions)||void 0===o||null===(s=o.values)||void 0===s?void 0:s.length)>0&&(null===(a=this.actionMatcher)||void 0===a||a.register(e.conditions.actions.values),null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c||null===(u=c.values)||void 0===u||u.forEach((t=>{if(t&&t.name){var n=this.actionToSurveys.get(t.name)
n&&n.push(e.id),this.actionToSurveys.set(t.name,n||[e.id])}})))})))}setupEventBasedSurveys(e){var t
0!==e.filter((e=>{var t,n,i,r
return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(i=n.events)||void 0===i||null===(r=i.values)||void 0===r?void 0:r.length)>0})).length&&(null===(t=this.instance)||void 0===t||t._addCaptureHook(((e,t)=>{this.onEvent(e,t)})),e.forEach((e=>{var t,n,i
null===(t=e.conditions)||void 0===t||null===(n=t.events)||void 0===n||null===(i=n.values)||void 0===i||i.forEach((t=>{if(t&&t.name){var n=this.eventToSurveys.get(t.name)
n&&n.push(e.id),this.eventToSurveys.set(t.name,n||[e.id])}}))})))}onEvent(e,t){var n,i,r=(null===(n=this.instance)||void 0===n||null===(i=n.persistence)||void 0===i?void 0:i.props[De])||[]
if(wo.SURVEY_SHOWN_EVENT_NAME==e&&t&&r.length>0){var o,s=null==t||null===(o=t.properties)||void 0===o?void 0:o.$survey_id
if(s){var a=r.indexOf(s)
a>=0&&(r.splice(a,1),this._updateActivatedSurveys(r))}}else this.eventToSurveys.has(e)&&this._updateActivatedSurveys(r.concat(this.eventToSurveys.get(e)||[]))}onAction(e){var t,n,i=(null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n?void 0:n.props[De])||[]
this.actionToSurveys.has(e)&&this._updateActivatedSurveys(i.concat(this.actionToSurveys.get(e)||[]))}_updateActivatedSurveys(e){var t,n
null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n||n.register({[De]:[...new Set(e)]})}getSurveys(){var e,t
return(null===(e=this.instance)||void 0===e||null===(t=e.persistence)||void 0===t?void 0:t.props[De])||[]}getEventToSurveys(){return this.eventToSurveys}_getActionMatcher(){return this.actionMatcher}}p(wo,"SURVEY_SHOWN_EVENT_NAME","survey shown")
var ko=ne("[Surveys]"),So={icontains:e=>!!m&&m.location.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:e=>!!m&&-1===m.location.href.toLowerCase().indexOf(e.toLowerCase()),regex:e=>!!m&&Et(m.location.href,e),not_regex:e=>!!m&&!Et(m.location.href,e),exact:e=>(null==m?void 0:m.location.href)===e,is_not:e=>(null==m?void 0:m.location.href)!==e}
function Eo(e,t,n){var i,r=e.questions[t],o=t+1
if(null===(i=r.branching)||void 0===i||!i.type)return t===e.questions.length-1?zr.End:o
if(r.branching.type===zr.End)return zr.End
if(r.branching.type===zr.SpecificQuestion){if(Number.isInteger(r.branching.index))return r.branching.index}else if(r.branching.type===zr.ResponseBased){if(r.type===Wr.SingleChoice){var s,a,l=r.choices.indexOf("".concat(n))
if(null!==(s=r.branching)&&void 0!==s&&null!==(a=s.responseValues)&&void 0!==a&&a.hasOwnProperty(l)){var c=r.branching.responseValues[l]
return Number.isInteger(c)?c:c===zr.End?zr.End:o}}else if(r.type===Wr.Rating){var u,d
if("number"!=typeof n||!Number.isInteger(n))throw new Error("The response type must be an integer")
var f=function(e,t){if(3===t){if(e<1||e>3)throw new Error("The response must be in range 1-3")
return 1===e?"negative":2===e?"neutral":"positive"}if(5===t){if(e<1||e>5)throw new Error("The response must be in range 1-5")
return e<=2?"negative":3===e?"neutral":"positive"}if(7===t){if(e<1||e>7)throw new Error("The response must be in range 1-7")
return e<=3?"negative":4===e?"neutral":"positive"}if(10===t){if(e<0||e>10)throw new Error("The response must be in range 0-10")
return e<=6?"detractors":e<=8?"passives":"promoters"}throw new Error("The scale must be one of: 3, 5, 7, 10")}(n,r.scale)
if(null!==(u=r.branching)&&void 0!==u&&null!==(d=u.responseValues)&&void 0!==d&&d.hasOwnProperty(f)){var h=r.branching.responseValues[f]
return Number.isInteger(h)?h:h===zr.End?zr.End:o}}return o}return ko.warn("Falling back to next question index due to unexpected branching type"),o}class xo{constructor(e){p(this,"getNextSurveyStep",Eo),this.instance=e,this._surveyEventReceiver=null}onRemoteConfig(e){this._decideServerResponse=!!e.surveys,ko.info("decideServerResponse set to ".concat(this._decideServerResponse)),this.loadIfEnabled()}reset(){localStorage.removeItem("lastSeenSurveyDate")
var e=(()=>{for(var e=[],t=0;t<localStorage.length;t++){var n=localStorage.key(t)
null!=n&&n.startsWith("seenSurvey_")&&e.push(n)}return e})()
e.forEach((e=>localStorage.removeItem(e)))}loadIfEnabled(){if(!this._surveyManager)if(this.instance.config.disable_surveys)ko.info("Disabled. Not loading surveys.")
else{var e=null==I?void 0:I.__PosthogExtensions__
if(e){var t=e.generateSurveys
if(this._decideServerResponse)if(null==this._surveyEventReceiver&&(this._surveyEventReceiver=new wo(this.instance)),t)this._surveyManager=t(this.instance)
else{var n=e.loadExternalDependency
n?n(this.instance,"surveys",(t=>{var n
t?ko.error("Could not load surveys script",t):this._surveyManager=null===(n=e.generateSurveys)||void 0===n?void 0:n.call(e,this.instance)})):ko.error("PostHog loadExternalDependency extension not found. Cannot load remote config.")}else ko.warn("Decide not loaded yet. Not loading surveys.")}else ko.error("PostHog Extensions not found.")}}getSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(this.instance.config.disable_surveys)return ko.info("Disabled. Not loading surveys."),e([])
null==this._surveyEventReceiver&&(this._surveyEventReceiver=new wo(this.instance))
var n=this.instance.get_property(je)
if(n&&!t)return ko.info("Surveys already loaded, using existing data."),e(n)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api","/api/surveys/?token=".concat(this.instance.config.token)),method:"GET",callback:t=>{var n,i=t.statusCode
if(200!==i||!t.json)return ko.error("Surveys API could not be loaded, status: ".concat(i)),e([])
var r,o=t.json.surveys||[],s=o.filter((e=>{var t,n,i,r,o,s,a,l,c,u,d,f
return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(i=n.events)||void 0===i?void 0:i.values)&&(null===(r=e.conditions)||void 0===r||null===(o=r.events)||void 0===o||null===(s=o.values)||void 0===s?void 0:s.length)>0||(null===(a=e.conditions)||void 0===a?void 0:a.actions)&&(null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c?void 0:c.values)&&(null===(u=e.conditions)||void 0===u||null===(d=u.actions)||void 0===d||null===(f=d.values)||void 0===f?void 0:f.length)>0}))
return s.length>0&&(null===(r=this._surveyEventReceiver)||void 0===r||r.register(s)),null===(n=this.instance.persistence)||void 0===n||n.register({[je]:o}),e(o)}})}getActiveMatchingSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.getSurveys((t=>{var n,i=t.filter((e=>!(!e.start_date||e.end_date))).filter((e=>{var t,n,i,r
if(!e.conditions)return!0
var o=null===(t=e.conditions)||void 0===t||!t.url||So[null!==(n=null===(i=e.conditions)||void 0===i?void 0:i.urlMatchType)&&void 0!==n?n:"icontains"](e.conditions.url),s=null===(r=e.conditions)||void 0===r||!r.selector||(null==E?void 0:E.querySelector(e.conditions.selector))
return o&&s})),r=null===(n=this._surveyEventReceiver)||void 0===n?void 0:n.getSurveys(),o=i.filter((e=>{var t,n,i,o,s,a,l,c,u,d,f
if(!(e.linked_flag_key||e.targeting_flag_key||e.internal_targeting_flag_key||null!==(t=e.feature_flag_keys)&&void 0!==t&&t.length))return!0
var h=!e.linked_flag_key||this.instance.featureFlags.isFeatureEnabled(e.linked_flag_key),p=!e.targeting_flag_key||this.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key),g=(null===(n=e.conditions)||void 0===n?void 0:n.events)&&(null===(i=e.conditions)||void 0===i||null===(o=i.events)||void 0===o?void 0:o.values)&&(null===(s=e.conditions)||void 0===s||null===(a=s.events)||void 0===a?void 0:a.values.length)>0,v=(null===(l=e.conditions)||void 0===l?void 0:l.actions)&&(null===(c=e.conditions)||void 0===c||null===(u=c.actions)||void 0===u?void 0:u.values)&&(null===(d=e.conditions)||void 0===d||null===(f=d.actions)||void 0===f?void 0:f.values.length)>0,_=!g&&!v||(null==r?void 0:r.includes(e.id)),m=this._canActivateRepeatedly(e),b=!(e.internal_targeting_flag_key&&!m)||this.instance.featureFlags.isFeatureEnabled(e.internal_targeting_flag_key),y=this.checkFlags(e)
return h&&p&&b&&_&&y}))
return e(o)}),t)}checkFlags(e){var t
return null===(t=e.feature_flag_keys)||void 0===t||!t.length||e.feature_flag_keys.every((e=>{var{key:t,value:n}=e
return!t||!n||this.instance.featureFlags.isFeatureEnabled(n)}))}_canActivateRepeatedly(e){var t
return J(null===(t=I.__PosthogExtensions__)||void 0===t?void 0:t.canActivateRepeatedly)?(ko.warn("init was not called"),!1):I.__PosthogExtensions__.canActivateRepeatedly(e)}canRenderSurvey(e){J(this._surveyManager)?ko.warn("init was not called"):this.getSurveys((t=>{var n=t.filter((t=>t.id===e))[0]
this._surveyManager.canRenderSurvey(n)}))}renderSurvey(e,t){J(this._surveyManager)?ko.warn("init was not called"):this.getSurveys((n=>{var i=n.filter((t=>t.id===e))[0]
this._surveyManager.renderSurvey(i,null==E?void 0:E.querySelector(t))}))}}var Co=ne("[RateLimiter]")
class Po{constructor(e){var t,n
p(this,"serverLimits",{}),p(this,"lastEventRateLimited",!1),p(this,"checkForLimiting",(e=>{var t=e.text
if(t&&t.length)try{(JSON.parse(t).quota_limited||[]).forEach((e=>{Co.info("".concat(e||"events"," is quota limited.")),this.serverLimits[e]=(new Date).getTime()+6e4}))}catch(e){return void Co.warn('could not rate limit - continuing. Error: "'.concat(null==e?void 0:e.message,'"'),{text:t})}})),this.instance=e,this.captureEventsPerSecond=(null===(t=e.config.rate_limiting)||void 0===t?void 0:t.events_per_second)||10,this.captureEventsBurstLimit=Math.max((null===(n=e.config.rate_limiting)||void 0===n?void 0:n.events_burst_limit)||10*this.captureEventsPerSecond,this.captureEventsPerSecond),this.lastEventRateLimited=this.clientRateLimitContext(!0).isRateLimited}clientRateLimitContext(){var e,t,n,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=(new Date).getTime(),o=null!==(e=null===(t=this.instance.persistence)||void 0===t?void 0:t.get_property(qe))&&void 0!==e?e:{tokens:this.captureEventsBurstLimit,last:r}
o.tokens+=(r-o.last)/1e3*this.captureEventsPerSecond,o.last=r,o.tokens>this.captureEventsBurstLimit&&(o.tokens=this.captureEventsBurstLimit)
var s=o.tokens<1
return s||i||(o.tokens=Math.max(0,o.tokens-1)),!s||this.lastEventRateLimited||i||this.instance.capture("$$client_ingestion_warning",{$$client_ingestion_warning_message:"posthog-js client rate limited. Config is set to ".concat(this.captureEventsPerSecond," events per second and ").concat(this.captureEventsBurstLimit," events burst limit.")},{skip_client_rate_limiting:!0}),this.lastEventRateLimited=s,null===(n=this.instance.persistence)||void 0===n||n.set_property(qe,o),{isRateLimited:s,remainingTokens:o.tokens}}isServerRateLimited(e){var t=this.serverLimits[e||"events"]||!1
return!1!==t&&(new Date).getTime()<t}}var $o=e=>{var t=null==e?void 0:e.config
return h({initialPathName:(null==x?void 0:x.pathname)||"",referringDomain:Pn.referringDomain()},Pn.campaignParams({customTrackedParams:null==t?void 0:t.custom_campaign_params,maskPersonalDataProperties:null==t?void 0:t.mask_personal_data_properties,customPersonalDataProperties:null==t?void 0:t.custom_personal_data_properties}))}
class To{constructor(e,t,n,i){p(this,"_onSessionIdCallback",(e=>{var t=this._getStoredProps()
if(!t||t.sessionId!==e){var n={sessionId:e,props:this._sessionSourceParamGenerator(this.instance)}
this._persistence.register({[Ue]:n})}})),this.instance=e,this._sessionIdManager=t,this._persistence=n,this._sessionSourceParamGenerator=i||$o,this._sessionIdManager.onSessionId(this._onSessionIdCallback)}_getStoredProps(){return this._persistence.props[Ue]}getSessionProps(){var e,t=null===(e=this._getStoredProps())||void 0===e?void 0:e.props
return t?{$client_session_initial_referring_host:t.referringDomain,$client_session_initial_pathname:t.initialPathName,$client_session_initial_utm_source:t.utm_source,$client_session_initial_utm_campaign:t.utm_campaign,$client_session_initial_utm_medium:t.utm_medium,$client_session_initial_utm_content:t.utm_content,$client_session_initial_utm_term:t.utm_term}:{}}}var Lo=["ahrefsbot","ahrefssiteaudit","applebot","baiduspider","better uptime bot","bingbot","bingpreview","bot.htm","bot.php","crawler","deepscan","duckduckbot","facebookexternal","facebookcatalog","gptbot","http://yandex.com/bots","hubspot","ia_archiver","linkedinbot","mj12bot","msnbot","nessus","petalbot","pinterest","prerender","rogerbot","screaming frog","semrushbot","sitebulb","slurp","turnitin","twitterbot","vercelbot","yahoo! slurp","yandexbot","headlesschrome","cypress","Google-HotelAdsVerifier","adsbot-google","apis-google","duplexweb-google","feedfetcher-google","google favicon","google web preview","google-read-aloud","googlebot","googleweblight","mediapartners-google","storebot-google","Bytespider;"],Io=function(e,t){if(!e)return!1
var n=e.toLowerCase()
return Lo.concat(t||[]).some((e=>{var t=e.toLowerCase()
return-1!==n.indexOf(t)}))},Ro=function(e,t){if(!e)return!1
var n=e.userAgent
if(n&&Io(n,t))return!0
try{var i=null==e?void 0:e.userAgentData
if(null!=i&&i.brands&&i.brands.some((e=>Io(null==e?void 0:e.brand,t))))return!0}catch(e){}return!!e.webdriver}
class Oo{constructor(){this.clicks=[]}isRageClick(e,t,n){var i=this.clicks[this.clicks.length-1]
if(i&&Math.abs(e-i.x)+Math.abs(t-i.y)<30&&n-i.timestamp<1e3){if(this.clicks.push({x:e,y:t,timestamp:n}),3===this.clicks.length)return!0}else this.clicks=[{x:e,y:t,timestamp:n}]
return!1}}var Mo=ne("[Dead Clicks]"),Fo=()=>!0,Ao=e=>{var t,n=!(null===(t=e.instance.persistence)||void 0===t||!t.get_property(we)),i=e.instance.config.capture_dead_clicks
return X(i)?i:n}
class No{get lazyLoadedDeadClicksAutocapture(){return this._lazyLoadedDeadClicksAutocapture}constructor(e,t,n){this.instance=e,this.isEnabled=t,this.onCapture=n,this.startIfEnabled()}onRemoteConfig(e){this.instance.persistence&&this.instance.persistence.register({[we]:null==e?void 0:e.captureDeadClicks}),this.startIfEnabled()}startIfEnabled(){this.isEnabled(this)&&this.loadScript((()=>{this.start()}))}loadScript(e){var t,n,i
null!==(t=I.__PosthogExtensions__)&&void 0!==t&&t.initDeadClicksAutocapture&&e(),null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"dead-clicks-autocapture",(t=>{t?Mo.error("failed to load script",t):e()}))}start(){var e
if(E){if(!this._lazyLoadedDeadClicksAutocapture&&null!==(e=I.__PosthogExtensions__)&&void 0!==e&&e.initDeadClicksAutocapture){var t=q(this.instance.config.capture_dead_clicks)?this.instance.config.capture_dead_clicks:{}
t.__onCapture=this.onCapture,this._lazyLoadedDeadClicksAutocapture=I.__PosthogExtensions__.initDeadClicksAutocapture(this.instance,t),this._lazyLoadedDeadClicksAutocapture.start(E),Mo.info("starting...")}}else Mo.error("`document` not found. Cannot start.")}stop(){this._lazyLoadedDeadClicksAutocapture&&(this._lazyLoadedDeadClicksAutocapture.stop(),this._lazyLoadedDeadClicksAutocapture=void 0,Mo.info("stopping..."))}}var jo=ne("[Heatmaps]")
function Do(e){return q(e)&&"clientX"in e&&"clientY"in e&&K(e.clientX)&&K(e.clientY)}class Bo{constructor(e){var t
p(this,"rageclicks",new Oo),p(this,"_enabledServerSide",!1),p(this,"_initialized",!1),p(this,"_flushInterval",null),this.instance=e,this._enabledServerSide=!(null===(t=this.instance.persistence)||void 0===t||!t.props[me]),null==m||m.addEventListener("beforeunload",(()=>{this.flush()}))}get flushIntervalMilliseconds(){var e=5e3
return q(this.instance.config.capture_heatmaps)&&this.instance.config.capture_heatmaps.flush_interval_milliseconds&&(e=this.instance.config.capture_heatmaps.flush_interval_milliseconds),e}get isEnabled(){return W(this.instance.config.capture_heatmaps)?W(this.instance.config.enable_heatmaps)?this._enabledServerSide:this.instance.config.enable_heatmaps:!1!==this.instance.config.capture_heatmaps}startIfEnabled(){if(this.isEnabled){if(this._initialized)return
jo.info("starting..."),this._setupListeners(),this._flushInterval=setInterval(this.flush.bind(this),this.flushIntervalMilliseconds)}else{var e,t
clearInterval(null!==(e=this._flushInterval)&&void 0!==e?e:void 0),null===(t=this.deadClicksCapture)||void 0===t||t.stop(),this.getAndClearBuffer()}}onRemoteConfig(e){var t=!!e.heatmaps
this.instance.persistence&&this.instance.persistence.register({[me]:t}),this._enabledServerSide=t,this.startIfEnabled()}getAndClearBuffer(){var e=this.buffer
return this.buffer=void 0,e}_onDeadClick(e){this._onClick(e.originalEvent,"deadclick")}_setupListeners(){m&&E&&(fe(E,"click",(e=>this._onClick(e||(null==m?void 0:m.event))),!1,!0),fe(E,"mousemove",(e=>this._onMouseMove(e||(null==m?void 0:m.event))),!1,!0),this.deadClicksCapture=new No(this.instance,Fo,this._onDeadClick.bind(this)),this.deadClicksCapture.startIfEnabled(),this._initialized=!0)}_getProperties(e,t){var n=this.instance.scrollManager.scrollY(),i=this.instance.scrollManager.scrollX(),r=this.instance.scrollManager.scrollElement(),o=function(e,t,n){for(var i=e;i&&Fn(i)&&!An(i,"body");){if(i===n)return!1
if(M(t,null==m?void 0:m.getComputedStyle(i).position))return!0
i=zn(i)}return!1}(Gn(e),["fixed","sticky"],r)
return{x:e.clientX+(o?0:i),y:e.clientY+(o?0:n),target_fixed:o,type:t}}_onClick(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"click"
if(!Mn(e.target)&&Do(e)){var i=this._getProperties(e,n)
null!==(t=this.rageclicks)&&void 0!==t&&t.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._capture(h(h({},i),{},{type:"rageclick"})),this._capture(i)}}_onMouseMove(e){!Mn(e.target)&&Do(e)&&(clearTimeout(this._mouseMoveTimeout),this._mouseMoveTimeout=setTimeout((()=>{this._capture(this._getProperties(e,"mousemove"))}),500))}_capture(e){if(m){var t=m.location.href
this.buffer=this.buffer||{},this.buffer[t]||(this.buffer[t]=[]),this.buffer[t].push(e)}}flush(){this.buffer&&!G(this.buffer)&&this.instance.capture("$$heatmap",{$heatmap_data:this.getAndClearBuffer()})}}class Ho{constructor(e){p(this,"_updateScrollData",(()=>{var e,t,n,i
this.context||(this.context={})
var r=this.scrollElement(),o=this.scrollY(),s=r?Math.max(0,r.scrollHeight-r.clientHeight):0,a=o+((null==r?void 0:r.clientHeight)||0),l=(null==r?void 0:r.scrollHeight)||0
this.context.lastScrollY=Math.ceil(o),this.context.maxScrollY=Math.max(o,null!==(e=this.context.maxScrollY)&&void 0!==e?e:0),this.context.maxScrollHeight=Math.max(s,null!==(t=this.context.maxScrollHeight)&&void 0!==t?t:0),this.context.lastContentY=a,this.context.maxContentY=Math.max(a,null!==(n=this.context.maxContentY)&&void 0!==n?n:0),this.context.maxContentHeight=Math.max(l,null!==(i=this.context.maxContentHeight)&&void 0!==i?i:0)})),this.instance=e}getContext(){return this.context}resetContext(){var e=this.context
return setTimeout(this._updateScrollData,0),e}startMeasuringScrollPosition(){null==m||m.addEventListener("scroll",this._updateScrollData,!0),null==m||m.addEventListener("scrollend",this._updateScrollData,!0),null==m||m.addEventListener("resize",this._updateScrollData)}scrollElement(){if(!this.instance.config.scroll_root_selector)return null==m?void 0:m.document.documentElement
var e=H(this.instance.config.scroll_root_selector)?this.instance.config.scroll_root_selector:[this.instance.config.scroll_root_selector]
for(var t of e){var n=null==m?void 0:m.document.querySelector(t)
if(n)return n}}scrollY(){if(this.instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollTop||0}return m&&(m.scrollY||m.pageYOffset||m.document.documentElement.scrollTop)||0}scrollX(){if(this.instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollLeft||0}return m&&(m.scrollX||m.pageXOffset||m.document.documentElement.scrollLeft)||0}}var Uo=ne("[AutoCapture]")
function qo(e,t){return t.length>e?t.slice(0,e)+"...":t}function Go(e){if(e.previousElementSibling)return e.previousElementSibling
var t=e
do{t=t.previousSibling}while(t&&!Fn(t))
return t}function Wo(e,t){for(var n,i,{e:r,maskAllElementAttributes:o,maskAllText:s,elementAttributeIgnoreList:a,elementsChainAsString:l}=t,c=[e],u=e;u.parentNode&&!An(u,"body");)jn(u.parentNode)?(c.push(u.parentNode.host),u=u.parentNode.host):(c.push(u.parentNode),u=u.parentNode)
var d,f=[],h={},p=!1,g=!1
if(oe(c,(e=>{var t=Vn(e)
"a"===e.tagName.toLowerCase()&&(p=e.getAttribute("href"),p=t&&p&&ti(p)&&p),M(Hn(e),"ph-no-capture")&&(g=!0),f.push(function(e,t,n,i){var r=e.tagName.toLowerCase(),o={tag_name:r}
Wn.indexOf(r)>-1&&!n&&("a"===r.toLowerCase()||"button"===r.toLowerCase()?o.$el_text=qo(1024,ni(e)):o.$el_text=qo(1024,qn(e)))
var s=Hn(e)
s.length>0&&(o.classes=s.filter((function(e){return""!==e}))),oe(e.attributes,(function(n){var r
if((!Qn(e)||-1!==["name","id","class","aria-label"].indexOf(n.name))&&(null==i||!i.includes(n.name))&&!t&&ti(n.value)&&(r=n.name,!z(r)||"_ngcontent"!==r.substring(0,10)&&"_nghost"!==r.substring(0,7))){var s=n.value
"class"===n.name&&(s=Dn(s).join(" ")),o["attr__"+n.name]=qo(1024,s)}}))
for(var a=1,l=1,c=e;c=Go(c);)a++,c.tagName===e.tagName&&l++
return o.nth_child=a,o.nth_of_type=l,o}(e,o,s,a))
var n=function(e){if(!Vn(e))return{}
var t={}
return oe(e.attributes,(function(e){if(e.name&&0===e.name.indexOf("data-ph-capture-attribute")){var n=e.name.replace("data-ph-capture-attribute-",""),i=e.value
n&&i&&ti(i)&&(t[n]=i)}})),t}(e)
se(h,n)})),g)return{props:{},explicitNoCapture:g}
if(s||("a"===e.tagName.toLowerCase()||"button"===e.tagName.toLowerCase()?f[0].$el_text=ni(e):f[0].$el_text=qn(e)),p){var v,_
f[0].attr__href=p
var b=null===(v=St(p))||void 0===v?void 0:v.host,y=null==m||null===(_=m.location)||void 0===_?void 0:_.host
b&&y&&b!==y&&(d=p)}return{props:se({$event_type:r.type,$ce_version:1},l?{}:{$elements:f},{$elements_chain:ri(f)},null!==(n=f[0])&&void 0!==n&&n.$el_text?{$el_text:null===(i=f[0])||void 0===i?void 0:i.$el_text}:{},d&&"click"===r.type?{$external_click_url:d}:{},h)}}class zo{constructor(e){p(this,"_initialized",!1),p(this,"_isDisabledServerSide",null),p(this,"rageclicks",new Oo),p(this,"_elementsChainAsString",!1),this.instance=e,this._elementSelectors=null}get config(){var e,t,n=q(this.instance.config.autocapture)?this.instance.config.autocapture:{}
return n.url_allowlist=null===(e=n.url_allowlist)||void 0===e?void 0:e.map((e=>new RegExp(e))),n.url_ignorelist=null===(t=n.url_ignorelist)||void 0===t?void 0:t.map((e=>new RegExp(e))),n}_addDomEventHandlers(){if(this.isBrowserSupported()){if(m&&E){var e=e=>{e=e||(null==m?void 0:m.event)
try{this._captureEvent(e)}catch(e){Uo.error("Failed to capture event",e)}},t=e=>{e=e||(null==m?void 0:m.event),this._captureEvent(e,R)}
fe(E,"submit",e,!1,!0),fe(E,"change",e,!1,!0),fe(E,"click",e,!1,!0),this.config.capture_copied_text&&(fe(E,"copy",t,!1,!0),fe(E,"cut",t,!1,!0))}}else Uo.info("Disabling Automatic Event Collection because this browser is not supported")}startIfEnabled(){this.isEnabled&&!this._initialized&&(this._addDomEventHandlers(),this._initialized=!0)}onRemoteConfig(e){e.elementsChainAsString&&(this._elementsChainAsString=e.elementsChainAsString),this.instance.persistence&&this.instance.persistence.register({[_e]:!!e.autocapture_opt_out}),this._isDisabledServerSide=!!e.autocapture_opt_out,this.startIfEnabled()}setElementSelectors(e){this._elementSelectors=e}getElementSelectors(e){var t,n=[]
return null===(t=this._elementSelectors)||void 0===t||t.forEach((t=>{var i=null==E?void 0:E.querySelectorAll(t)
null==i||i.forEach((i=>{e===i&&n.push(t)}))})),n}get isEnabled(){var e,t,n=null===(e=this.instance.persistence)||void 0===e?void 0:e.props[_e],i=this._isDisabledServerSide
if(Q(i)&&!X(n)&&!this.instance.config.advanced_disable_decide)return!1
var r=null!==(t=this._isDisabledServerSide)&&void 0!==t?t:!!n
return!!this.instance.config.autocapture&&!r}_captureEvent(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$autocapture"
if(this.isEnabled){var n,i=Gn(e)
Nn(i)&&(i=i.parentNode||null),"$autocapture"===t&&"click"===e.type&&e instanceof MouseEvent&&this.instance.config.rageclick&&null!==(n=this.rageclicks)&&void 0!==n&&n.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._captureEvent(e,"$rageclick")
var r=t===R
if(i&&function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0
if(!m||!e||An(e,"html")||!Fn(e))return!1
if(null!=n&&n.url_allowlist&&!Bn(n.url_allowlist))return!1
if(null!=n&&n.url_ignorelist&&Bn(n.url_ignorelist))return!1
if(null!=n&&n.dom_event_allowlist){var o=n.dom_event_allowlist
if(o&&!o.some((e=>t.type===e)))return!1}for(var s=!1,a=[e],l=!0,c=e;c.parentNode&&!An(c,"body");)if(jn(c.parentNode))a.push(c.parentNode.host),c=c.parentNode.host
else{if(!(l=zn(c)))break
if(i||Wn.indexOf(l.tagName.toLowerCase())>-1)s=!0
else{var u=m.getComputedStyle(l)
u&&"pointer"===u.getPropertyValue("cursor")&&(s=!0)}a.push(l),c=l}if(!function(e,t){var n=null==t?void 0:t.element_allowlist
if(W(n))return!0
var i=function(e){if(n.some((t=>e.tagName.toLowerCase()===t)))return{v:!0}}
for(var r of e){var o=i(r)
if("object"==typeof o)return o.v}return!1}(a,n))return!1
if(!function(e,t){var n=null==t?void 0:t.css_selector_allowlist
if(W(n))return!0
var i=function(e){if(n.some((t=>e.matches(t))))return{v:!0}}
for(var r of e){var o=i(r)
if("object"==typeof o)return o.v}return!1}(a,n))return!1
var d=m.getComputedStyle(e)
if(d&&"pointer"===d.getPropertyValue("cursor")&&"click"===t.type)return!0
var f=e.tagName.toLowerCase()
switch(f){case"html":return!1
case"form":return(r||["submit"]).indexOf(t.type)>=0
case"input":case"select":case"textarea":return(r||["change","click"]).indexOf(t.type)>=0
default:return s?(r||["click"]).indexOf(t.type)>=0:(r||["click"]).indexOf(t.type)>=0&&(Wn.indexOf(f)>-1||"true"===e.getAttribute("contenteditable"))}}(i,e,this.config,r,r?["copy","cut"]:void 0)){var{props:o,explicitNoCapture:s}=Wo(i,{e:e,maskAllElementAttributes:this.instance.config.mask_all_element_attributes,maskAllText:this.instance.config.mask_all_text,elementAttributeIgnoreList:this.config.element_attribute_ignorelist,elementsChainAsString:this._elementsChainAsString})
if(s)return!1
var a=this.getElementSelectors(i)
if(a&&a.length>0&&(o.$element_selectors=a),t===R){var l,c=Un(null==m||null===(l=m.getSelection())||void 0===l?void 0:l.toString()),u=e.type||"clipboard"
if(!c)return!1
o.$selected_content=c,o.$copy_type=u}return this.instance.capture(t,o),!0}}}isBrowserSupported(){return U(null==E?void 0:E.querySelectorAll)}}var Vo,Qo=ne("[TracingHeaders]")
class Jo{constructor(e){p(this,"_restoreXHRPatch",void 0),p(this,"_restoreFetchPatch",void 0),p(this,"_startCapturing",(()=>{var e,t,n,i
W(this._restoreXHRPatch)&&(null===(e=I.__PosthogExtensions__)||void 0===e||null===(t=e.tracingHeadersPatchFns)||void 0===t||t._patchXHR(this.instance.sessionManager)),W(this._restoreFetchPatch)&&(null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.tracingHeadersPatchFns)||void 0===i||i._patchFetch(this.instance.sessionManager))})),this.instance=e}_loadScript(e){var t,n,i
null!==(t=I.__PosthogExtensions__)&&void 0!==t&&t.tracingHeadersPatchFns&&e(),null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"tracing-headers",(t=>{if(t)return Qo.error("failed to load script",t)
e()}))}startIfEnabledOrStop(){var e,t
this.instance.config.__add_tracing_headers?this._loadScript(this._startCapturing):(null===(e=this._restoreXHRPatch)||void 0===e||e.call(this),null===(t=this._restoreFetchPatch)||void 0===t||t.call(this),this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0)}}!function(e){e[e.PENDING=-1]="PENDING",e[e.DENIED=0]="DENIED",e[e.GRANTED=1]="GRANTED"}(Vo||(Vo={}))
class Ko{constructor(e){this.instance=e}get config(){return this.instance.config}get consent(){return this.getDnt()?Vo.DENIED:this.storedConsent}isOptedOut(){return this.consent===Vo.DENIED||this.consent===Vo.PENDING&&this.config.opt_out_capturing_by_default}isOptedIn(){return!this.isOptedOut()}optInOut(e){this.storage.set(this.storageKey,e?1:0,this.config.cookie_expiration,this.config.cross_subdomain_cookie,this.config.secure_cookie)}reset(){this.storage.remove(this.storageKey,this.config.cross_subdomain_cookie)}get storageKey(){var{token:e,opt_out_capturing_cookie_prefix:t}=this.instance.config
return(t||"__ph_opt_in_out_")+e}get storedConsent(){var e=this.storage.get(this.storageKey)
return"1"===e?Vo.GRANTED:"0"===e?Vo.DENIED:Vo.PENDING}get storage(){if(!this._storage){var e=this.config.opt_out_capturing_persistence_type
this._storage="localStorage"===e?gt:ht
var t="localStorage"===e?ht:gt
t.get(this.storageKey)&&(this._storage.get(this.storageKey)||this.optInOut("1"===t.get(this.storageKey)),t.remove(this.storageKey,this.config.cross_subdomain_cookie))}return this._storage}getDnt(){return!!this.config.respect_dnt&&!!he([null==S?void 0:S.doNotTrack,null==S?void 0:S.msDoNotTrack,I.doNotTrack],(e=>M([!0,1,"1","yes"],e)))}}var Xo=ne("[ExceptionAutocapture]")
class Yo{constructor(e){var t
p(this,"originalOnUnhandledRejectionHandler",void 0),p(this,"startCapturing",(()=>{var e,t,n,i
if(m&&this.isEnabled&&!this.hasHandlers&&!this.isCapturing){var r=null===(e=I.__PosthogExtensions__)||void 0===e||null===(t=e.errorWrappingFunctions)||void 0===t?void 0:t.wrapOnError,o=null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.errorWrappingFunctions)||void 0===i?void 0:i.wrapUnhandledRejection
if(r&&o)try{this.unwrapOnError=r(this.captureException.bind(this)),this.unwrapUnhandledRejection=o(this.captureException.bind(this))}catch(e){Xo.error("failed to start",e),this.stopCapturing()}else Xo.error("failed to load error wrapping functions - cannot start")}})),this.instance=e,this.remoteEnabled=!(null===(t=this.instance.persistence)||void 0===t||!t.props[be]),this.startIfEnabled()}get isEnabled(){var e
return null!==(e=this.remoteEnabled)&&void 0!==e&&e}get isCapturing(){var e
return!(null==m||null===(e=m.onerror)||void 0===e||!e.__POSTHOG_INSTRUMENTED__)}get hasHandlers(){return this.originalOnUnhandledRejectionHandler||this.unwrapOnError}startIfEnabled(){this.isEnabled&&!this.isCapturing&&(Xo.info("enabled, starting..."),this.loadScript(this.startCapturing))}loadScript(e){var t,n
this.hasHandlers&&e(),null===(t=I.__PosthogExtensions__)||void 0===t||null===(n=t.loadExternalDependency)||void 0===n||n.call(t,this.instance,"exception-autocapture",(t=>{if(t)return Xo.error("failed to load script",t)
e()}))}stopCapturing(){var e,t
null===(e=this.unwrapOnError)||void 0===e||e.call(this),null===(t=this.unwrapUnhandledRejection)||void 0===t||t.call(this)}onRemoteConfig(e){var t=e.autocaptureExceptions
this.remoteEnabled=!!t||!1,this.instance.persistence&&this.instance.persistence.register({[be]:this.remoteEnabled}),this.startIfEnabled()}captureException(e){var t=this.instance.requestRouter.endpointFor("ui")
e.$exception_personURL="".concat(t,"/project/").concat(this.instance.config.token,"/person/").concat(this.instance.get_distinct_id()),this.instance.exceptions.sendExceptionEvent(e)}}var Zo=ne("[Web Vitals]"),es=9e5
class ts{constructor(e){var t
p(this,"_enabledServerSide",!1),p(this,"_initialized",!1),p(this,"buffer",{url:void 0,metrics:[],firstMetricTimestamp:void 0}),p(this,"_flushToCapture",(()=>{clearTimeout(this._delayedFlushTimer),0!==this.buffer.metrics.length&&(this.instance.capture("$web_vitals",this.buffer.metrics.reduce(((e,t)=>h(h({},e),{},{["$web_vitals_".concat(t.name,"_event")]:h({},t),["$web_vitals_".concat(t.name,"_value")]:t.value})),{})),this.buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0})})),p(this,"_addToBuffer",(e=>{var t,n=null===(t=this.instance.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0)
if(W(n))Zo.error("Could not read session ID. Dropping metrics!")
else{this.buffer=this.buffer||{url:void 0,metrics:[],firstMetricTimestamp:void 0}
var i=this._currentURL()
W(i)||(J(null==e?void 0:e.name)||J(null==e?void 0:e.value)?Zo.error("Invalid metric received",e):this._maxAllowedValue&&e.value>=this._maxAllowedValue?Zo.error("Ignoring metric with value >= "+this._maxAllowedValue,e):(this.buffer.url!==i&&(this._flushToCapture(),this._delayedFlushTimer=setTimeout(this._flushToCapture,this.flushToCaptureTimeoutMs)),W(this.buffer.url)&&(this.buffer.url=i),this.buffer.firstMetricTimestamp=W(this.buffer.firstMetricTimestamp)?Date.now():this.buffer.firstMetricTimestamp,e.attribution&&e.attribution.interactionTargetElement&&(e.attribution.interactionTargetElement=void 0),this.buffer.metrics.push(h(h({},e),{},{$current_url:i,$session_id:n.sessionId,$window_id:n.windowId,timestamp:Date.now()})),this.buffer.metrics.length===this.allowedMetrics.length&&this._flushToCapture()))}})),p(this,"_startCapturing",(()=>{var e,t,n,i,r=I.__PosthogExtensions__
W(r)||W(r.postHogWebVitalsCallbacks)||({onLCP:e,onCLS:t,onFCP:n,onINP:i}=r.postHogWebVitalsCallbacks),e&&t&&n&&i?(this.allowedMetrics.indexOf("LCP")>-1&&e(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("CLS")>-1&&t(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("FCP")>-1&&n(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("INP")>-1&&i(this._addToBuffer.bind(this)),this._initialized=!0):Zo.error("web vitals callbacks not loaded - not starting")})),this.instance=e,this._enabledServerSide=!(null===(t=this.instance.persistence)||void 0===t||!t.props[ye]),this.startIfEnabled()}get allowedMetrics(){var e,t,n=q(this.instance.config.capture_performance)?null===(e=this.instance.config.capture_performance)||void 0===e?void 0:e.web_vitals_allowed_metrics:void 0
return W(n)?(null===(t=this.instance.persistence)||void 0===t?void 0:t.props[ke])||["CLS","FCP","INP","LCP"]:n}get flushToCaptureTimeoutMs(){return(q(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals_delayed_flush_ms:void 0)||5e3}get _maxAllowedValue(){var e=q(this.instance.config.capture_performance)&&K(this.instance.config.capture_performance.__web_vitals_max_value)?this.instance.config.capture_performance.__web_vitals_max_value:es
return 0<e&&e<=6e4?es:e}get isEnabled(){var e=q(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals:void 0
return X(e)?e:this._enabledServerSide}startIfEnabled(){this.isEnabled&&!this._initialized&&(Zo.info("enabled, starting..."),this.loadScript(this._startCapturing))}onRemoteConfig(e){var t=q(e.capturePerformance)&&!!e.capturePerformance.web_vitals,n=q(e.capturePerformance)?e.capturePerformance.web_vitals_allowed_metrics:void 0
this.instance.persistence&&(this.instance.persistence.register({[ye]:t}),this.instance.persistence.register({[ke]:n})),this._enabledServerSide=t,this.startIfEnabled()}loadScript(e){var t,n,i
null!==(t=I.__PosthogExtensions__)&&void 0!==t&&t.postHogWebVitalsCallbacks&&e(),null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"web-vitals",(t=>{t?Zo.error("failed to load script",t):e()}))}_currentURL(){var e=m?m.location.href:void 0
return e||Zo.error("Could not determine current URL"),e}}var ns={icontains:(e,t)=>!!m&&t.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:(e,t)=>!!m&&-1===t.href.toLowerCase().indexOf(e.toLowerCase()),regex:(e,t)=>!!m&&Et(t.href,e),not_regex:(e,t)=>!!m&&!Et(t.href,e),exact:(e,t)=>t.href===e,is_not:(e,t)=>t.href!==e}
class is{constructor(e){var t=this
p(this,"getWebExperimentsAndEvaluateDisplayLogic",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
t.getWebExperiments((e=>{is.logInfo("retrieved web experiments from the server"),t._flagToExperiments=new Map,e.forEach((e=>{if(e.feature_flag_key){var n
t._flagToExperiments&&(is.logInfo("setting flag key ",e.feature_flag_key," to web experiment ",e),null===(n=t._flagToExperiments)||void 0===n||n.set(e.feature_flag_key,e))
var i=t.instance.getFeatureFlag(e.feature_flag_key)
z(i)&&e.variants[i]&&t.applyTransforms(e.name,i,e.variants[i].transforms)}else if(e.variants)for(var r in e.variants){var o=e.variants[r]
is.matchesTestVariant(o)&&t.applyTransforms(e.name,r,o.transforms)}}))}),e)})),this.instance=e,this.instance.onFeatureFlags((e=>{this.onFeatureFlags(e)}))}onFeatureFlags(e){if(this._is_bot())is.logInfo("Refusing to render web experiment since the viewer is a likely bot")
else if(!this.instance.config.disable_web_experiments){if(J(this._flagToExperiments))return this._flagToExperiments=new Map,this.loadIfEnabled(),void this.previewWebExperiment()
is.logInfo("applying feature flags",e),e.forEach((e=>{var t
if(this._flagToExperiments&&null!==(t=this._flagToExperiments)&&void 0!==t&&t.has(e)){var n,i=this.instance.getFeatureFlag(e),r=null===(n=this._flagToExperiments)||void 0===n?void 0:n.get(e)
i&&null!=r&&r.variants[i]&&this.applyTransforms(r.name,i,r.variants[i].transforms)}}))}}previewWebExperiment(){var e=is.getWindowLocation()
if(null!=e&&e.search){var t=xt(null==e?void 0:e.search,"__experiment_id"),n=xt(null==e?void 0:e.search,"__experiment_variant")
t&&n&&(is.logInfo("previewing web experiments ".concat(t," && ").concat(n)),this.getWebExperiments((e=>{this.showPreviewWebExperiment(parseInt(t),n,e)}),!1,!0))}}loadIfEnabled(){this.instance.config.disable_web_experiments||this.getWebExperimentsAndEvaluateDisplayLogic()}getWebExperiments(e,t,n){if(this.instance.config.disable_web_experiments&&!n)return e([])
var i=this.instance.get_property("$web_experiments")
if(i&&!t)return e(i)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api","/api/web_experiments/?token=".concat(this.instance.config.token)),method:"GET",callback:t=>{if(200!==t.statusCode||!t.json)return e([])
var n=t.json.experiments||[]
return e(n)}})}showPreviewWebExperiment(e,t,n){var i=n.filter((t=>t.id===e))
i&&i.length>0&&(is.logInfo("Previewing web experiment [".concat(i[0].name,"] with variant [").concat(t,"]")),this.applyTransforms(i[0].name,t,i[0].variants[t].transforms))}static matchesTestVariant(e){return!J(e.conditions)&&is.matchUrlConditions(e)&&is.matchUTMConditions(e)}static matchUrlConditions(e){var t
if(J(e.conditions)||J(null===(t=e.conditions)||void 0===t?void 0:t.url))return!0
var n,i,r,o=is.getWindowLocation()
return!!o&&(null===(n=e.conditions)||void 0===n||!n.url||ns[null!==(i=null===(r=e.conditions)||void 0===r?void 0:r.urlMatchType)&&void 0!==i?i:"icontains"](e.conditions.url,o))}static getWindowLocation(){return null==m?void 0:m.location}static matchUTMConditions(e){var t
if(J(e.conditions)||J(null===(t=e.conditions)||void 0===t?void 0:t.utm))return!0
var n=Pn.campaignParams()
if(n.utm_source){var i,r,o,s,a,l,c,u,d,f,h,p,g,v,_,m,b=null===(i=e.conditions)||void 0===i||null===(r=i.utm)||void 0===r||!r.utm_campaign||(null===(o=e.conditions)||void 0===o||null===(s=o.utm)||void 0===s?void 0:s.utm_campaign)==n.utm_campaign,y=null===(a=e.conditions)||void 0===a||null===(l=a.utm)||void 0===l||!l.utm_source||(null===(c=e.conditions)||void 0===c||null===(u=c.utm)||void 0===u?void 0:u.utm_source)==n.utm_source,w=null===(d=e.conditions)||void 0===d||null===(f=d.utm)||void 0===f||!f.utm_medium||(null===(h=e.conditions)||void 0===h||null===(p=h.utm)||void 0===p?void 0:p.utm_medium)==n.utm_medium,k=null===(g=e.conditions)||void 0===g||null===(v=g.utm)||void 0===v||!v.utm_term||(null===(_=e.conditions)||void 0===_||null===(m=_.utm)||void 0===m?void 0:m.utm_term)==n.utm_term
return b&&w&&k&&y}return!1}static logInfo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
te.info("[WebExperiments] ".concat(e),n)}applyTransforms(e,t,n){this._is_bot()?is.logInfo("Refusing to render web experiment since the viewer is a likely bot"):"control"!==t?n.forEach((n=>{if(n.selector){var i
is.logInfo("applying transform of variant ".concat(t," for experiment ").concat(e," "),n)
var r=null===(i=document)||void 0===i?void 0:i.querySelectorAll(n.selector)
null==r||r.forEach((e=>{var t=e
n.attributes&&n.attributes.forEach((e=>{switch(e.name){case"text":t.innerText=e.value
break
case"html":t.innerHTML=e.value
break
case"cssClass":t.className=e.value
break
default:t.setAttribute(e.name,e.value)}})),n.text&&(t.innerText=n.text),n.html&&(t.parentElement?t.parentElement.innerHTML=n.html:t.innerHTML=n.html),n.css&&t.setAttribute("style",n.css)}))}})):is.logInfo("Control variants leave the page unmodified.")}_is_bot(){return S&&this.instance?Ro(S,this.instance.config.custom_blocked_useragents):void 0}}class rs{constructor(e){this.instance=e}sendExceptionEvent(e){this.instance.capture("$exception",e,{_noTruncate:!0,_batchKey:"exceptionEvent"})}}var os=["$set_once","$set"],ss=ne("[SiteApps]")
class as{constructor(e){this.instance=e,this.bufferedInvocations=[],this.apps={}}get isEnabled(){return!!this.instance.config.opt_in_site_apps}eventCollector(e,t){if(t){var n=this.globalsForEvent(t)
this.bufferedInvocations.push(n),this.bufferedInvocations.length>1e3&&(this.bufferedInvocations=this.bufferedInvocations.slice(10))}}get siteAppLoaders(){var e,t
return null===(e=I._POSTHOG_REMOTE_CONFIG)||void 0===e||null===(t=e[this.instance.config.token])||void 0===t?void 0:t.siteApps}init(){if(this.isEnabled){var e=this.instance._addCaptureHook(this.eventCollector.bind(this))
this.stopBuffering=()=>{e(),this.bufferedInvocations=[],this.stopBuffering=void 0}}}globalsForEvent(e){var t,n,i,r,o,s,a
if(!e)throw new Error("Event payload is required")
var l={},c=this.instance.get_property("$groups")||[],u=this.instance.get_property("$stored_group_properties")||{}
for(var[d,f]of Object.entries(u))l[d]={id:c[d],type:d,properties:f}
var{$set_once:p,$set:v}=e
return{event:h(h({},g(e,os)),{},{properties:h(h(h({},e.properties),v?{$set:h(h({},null!==(t=null===(n=e.properties)||void 0===n?void 0:n.$set)&&void 0!==t?t:{}),v)}:{}),p?{$set_once:h(h({},null!==(i=null===(r=e.properties)||void 0===r?void 0:r.$set_once)&&void 0!==i?i:{}),p)}:{}),elements_chain:null!==(o=null===(s=e.properties)||void 0===s?void 0:s.$elements_chain)&&void 0!==o?o:"",distinct_id:null===(a=e.properties)||void 0===a?void 0:a.distinct_id}),person:{properties:this.instance.get_property("$stored_person_properties")},groups:l}}setupSiteApp(e){var t={id:e.id,loaded:!1,errored:!1}
this.apps[e.id]=t
var n=n=>{var i
for(var r of(this.apps[e.id].errored=!n,this.apps[e.id].loaded=!0,ss.info("Site app with id ".concat(e.id," ").concat(n?"loaded":"errored")),n&&this.bufferedInvocations.length&&(ss.info("Processing ".concat(this.bufferedInvocations.length," events for site app with id ").concat(e.id)),this.bufferedInvocations.forEach((e=>{var n
return null===(n=t.processEvent)||void 0===n?void 0:n.call(t,e)}))),Object.values(this.apps)))if(!r.loaded)return
null===(i=this.stopBuffering)||void 0===i||i.call(this)}
try{var{processEvent:i}=e.init({posthog:this.instance,callback:e=>{n(e)}})
i&&(t.processEvent=i)}catch(t){ss.error("Error while initializing PostHog app with config id ".concat(e.id),t),n(!1)}}onCapturedEvent(e){if(0!==Object.keys(this.apps).length){var t=this.globalsForEvent(e)
for(var n of Object.values(this.apps))try{var i
null===(i=n.processEvent)||void 0===i||i.call(n,t)}catch(t){ss.error("Error while processing event ".concat(e.event," for site app ").concat(n.id),t)}}}onRemoteConfig(e){var t,n,i,r=this
if(null!==(t=this.siteAppLoaders)&&void 0!==t&&t.length){if(!this.isEnabled)return void ss.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
for(var o of this.siteAppLoaders)this.setupSiteApp(o)
this.instance.on("eventCaptured",(e=>this.onCapturedEvent(e)))}else if(null===(n=this.stopBuffering)||void 0===n||n.call(this),null!==(i=e.siteApps)&&void 0!==i&&i.length)if(this.isEnabled){var s=function(e,t){var n,i
I["__$$ph_site_app_".concat(e)]=r.instance,null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.loadSiteApp)||void 0===i||i.call(n,r.instance,t,(t=>{if(t)return ss.error("Error while initializing PostHog app with config id ".concat(e),t)}))}
for(var{id:a,url:l}of e.siteApps)s(a,l)}else ss.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')}}function ls(e,t,n){return wr({distinct_id:e,userPropertiesToSet:t,userPropertiesToSetOnce:n})}var cs={},us=()=>{},ds="posthog",fs=!mr&&-1===(null==L?void 0:L.indexOf("MSIE"))&&-1===(null==L?void 0:L.indexOf("Mozilla")),hs=()=>{var e,t,n
return{api_host:"https://us.i.posthog.com",ui_host:null,token:"",autocapture:!0,rageclick:!0,cross_subdomain_cookie:(t=null==E?void 0:E.location,n=null==t?void 0:t.hostname,!!z(n)&&"herokuapp.com"!==n.split(".").slice(-2).join(".")),persistence:"localStorage+cookie",persistence_name:"",loaded:us,store_google:!0,custom_campaign_params:[],custom_blocked_useragents:[],save_referrer:!0,capture_pageview:!0,capture_pageleave:"if_capture_pageview",debug:x&&z(null==x?void 0:x.search)&&-1!==x.search.indexOf("__posthog_debug=true")||!1,verbose:!1,cookie_expiration:365,upgrade:!1,disable_session_recording:!1,disable_persistence:!1,disable_web_experiments:!0,disable_surveys:!1,enable_recording_console_log:void 0,secure_cookie:"https:"===(null==m||null===(e=m.location)||void 0===e?void 0:e.protocol),ip:!0,opt_out_capturing_by_default:!1,opt_out_persistence_by_default:!1,opt_out_useragent_filter:!1,opt_out_capturing_persistence_type:"localStorage",opt_out_capturing_cookie_prefix:null,opt_in_site_apps:!1,property_denylist:[],respect_dnt:!1,sanitize_properties:null,request_headers:{},inapp_protocol:"//",inapp_link_new_window:!1,request_batching:!0,properties_string_max_length:65535,session_recording:{},mask_all_element_attributes:!1,mask_all_text:!1,mask_personal_data_properties:!1,custom_personal_data_properties:[],advanced_disable_decide:!1,advanced_disable_feature_flags:!1,advanced_disable_feature_flags_on_first_load:!1,advanced_disable_toolbar_metrics:!1,feature_flag_request_timeout_ms:3e3,on_request_error:e=>{var t="Bad HTTP status: "+e.statusCode+" "+e.text
te.error(t)},get_device_id:e=>e,_onCapture:us,capture_performance:void 0,name:"posthog",bootstrap:{},disable_compression:!1,session_idle_timeout_seconds:1800,person_profiles:"identified_only",__add_tracing_headers:!1,before_send:void 0}},ps=e=>{var t={}
W(e.process_person)||(t.person_profiles=e.process_person),W(e.xhr_headers)||(t.request_headers=e.xhr_headers),W(e.cookie_name)||(t.persistence_name=e.cookie_name),W(e.disable_cookie)||(t.disable_persistence=e.disable_cookie)
var n=se({},t,e)
return H(e.property_blacklist)&&(W(e.property_denylist)?n.property_denylist=e.property_blacklist:H(e.property_denylist)?n.property_denylist=[...e.property_blacklist,...e.property_denylist]:te.error("Invalid value for property_denylist config: "+e.property_denylist)),n}
class gs{constructor(){p(this,"__forceAllowLocalhost",!1)}get _forceAllowLocalhost(){return this.__forceAllowLocalhost}set _forceAllowLocalhost(e){te.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),this.__forceAllowLocalhost=e}}class vs{get decideEndpointWasHit(){var e,t
return null!==(e=null===(t=this.featureFlags)||void 0===t?void 0:t.hasLoadedFlags)&&void 0!==e&&e}constructor(){p(this,"webPerformance",new gs),p(this,"version",_.LIB_VERSION),p(this,"_internalEventEmitter",new bo),this.config=hs(),this.SentryIntegration=Or,this.sentryIntegration=e=>function(e,t){var n=Rr(e,t)
return{name:Ir,processEvent:e=>n(e)}}(this,e),this.__request_queue=[],this.__loaded=!1,this.analyticsDefaultEndpoint="/e/",this._initialPageviewCaptured=!1,this._initialPersonProfilesConfig=null,this._cachedIdentify=null,this.featureFlags=new nt(this),this.toolbar=new vr(this),this.scrollManager=new Ho(this),this.pageViewManager=new Fr(this),this.surveys=new xo(this),this.experiments=new is(this),this.exceptions=new rs(this),this.rateLimiter=new Po(this),this.requestRouter=new Lr(this),this.consent=new Ko(this),this.people={set:(e,t,n)=>{var i=z(e)?{[e]:t}:e
this.setPersonProperties(i),null==n||n({})},set_once:(e,t,n)=>{var i=z(e)?{[e]:t}:e
this.setPersonProperties(void 0,i),null==n||n({})}},this.on("eventCaptured",(e=>te.info('send "'.concat(null==e?void 0:e.event,'"'),e)))}init(e,t,n){if(n&&n!==ds){var i,r=null!==(i=cs[n])&&void 0!==i?i:new vs
return r._init(e,t,n),cs[n]=r,cs[ds][n]=r,r}return this._init(e,t,n)}_init(e){var t,n,i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0
if(W(e)||V(e))return te.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),this
if(this.__loaded)return te.warn("You have already initialized PostHog! Re-initializing is a no-op"),this
this.__loaded=!0,this.config={},this._triggered_notifs=[],r.person_profiles&&(this._initialPersonProfilesConfig=r.person_profiles),this.set_config(se({},hs(),ps(r),{name:o,token:e})),this.config.on_xhr_error&&te.error("on_xhr_error is deprecated. Use on_request_error instead"),this.compression=r.disable_compression?void 0:v.GZipJS,this.persistence=new Tn(this.config),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new Tn(h(h({},this.config),{},{persistence:"sessionStorage"}))
var s=h({},this.persistence.props),a=h({},this.sessionPersistence.props)
if(this._requestQueue=new _r((e=>this._send_retriable_request(e))),this._retryQueue=new xr(this),this.__request_queue=[],this.config.__preview_experimental_cookieless_mode||(this.sessionManager=new $r(this),this.sessionPropsManager=new To(this,this.sessionManager,this.persistence)),new Jo(this).startIfEnabledOrStop(),this.siteApps=new as(this),null===(t=this.siteApps)||void 0===t||t.init(),this.config.__preview_experimental_cookieless_mode||(this.sessionRecording=new cr(this),this.sessionRecording.startIfEnabledOrStop()),this.config.disable_scroll_properties||this.scrollManager.startMeasuringScrollPosition(),this.autocapture=new zo(this),this.autocapture.startIfEnabled(),this.surveys.loadIfEnabled(),this.heatmaps=new Bo(this),this.heatmaps.startIfEnabled(),this.webVitalsAutocapture=new ts(this),this.exceptionObserver=new Yo(this),this.exceptionObserver.startIfEnabled(),this.deadClicksAutocapture=new No(this,Ao),this.deadClicksAutocapture.startIfEnabled(),_.DEBUG=_.DEBUG||this.config.debug,_.DEBUG&&te.info("Starting in debug mode",{this:this,config:r,thisC:h({},this.config),p:s,s:a}),this._sync_opt_out_with_persistence(),void 0!==(null===(n=r.bootstrap)||void 0===n?void 0:n.distinctID)){var l,c,u=this.config.get_device_id(ct()),d=null!==(l=r.bootstrap)&&void 0!==l&&l.isIdentifiedID?u:r.bootstrap.distinctID
this.persistence.set_property(He,null!==(c=r.bootstrap)&&void 0!==c&&c.isIdentifiedID?"identified":"anonymous"),this.register({distinct_id:r.bootstrap.distinctID,$device_id:d})}if(this._hasBootstrappedFeatureFlags()){var f,p,g=Object.keys((null===(f=r.bootstrap)||void 0===f?void 0:f.featureFlags)||{}).filter((e=>{var t,n
return!(null===(t=r.bootstrap)||void 0===t||null===(n=t.featureFlags)||void 0===n||!n[e])})).reduce(((e,t)=>{var n,i
return e[t]=(null===(n=r.bootstrap)||void 0===n||null===(i=n.featureFlags)||void 0===i?void 0:i[t])||!1,e}),{}),b=Object.keys((null===(p=r.bootstrap)||void 0===p?void 0:p.featureFlagPayloads)||{}).filter((e=>g[e])).reduce(((e,t)=>{var n,i,o,s
return null!==(n=r.bootstrap)&&void 0!==n&&null!==(i=n.featureFlagPayloads)&&void 0!==i&&i[t]&&(e[t]=null===(o=r.bootstrap)||void 0===o||null===(s=o.featureFlagPayloads)||void 0===s?void 0:s[t]),e}),{})
this.featureFlags.receivedFeatureFlags({featureFlags:g,featureFlagPayloads:b})}if(this.config.__preview_experimental_cookieless_mode)this.register_once({distinct_id:Je,$device_id:null},"")
else if(!this.get_distinct_id()){var y=this.config.get_device_id(ct())
this.register_once({distinct_id:y,$device_id:y},""),this.persistence.set_property(He,"anonymous")}return null==m||null===(i=m.addEventListener)||void 0===i||i.call(m,"onpagehide"in self?"pagehide":"unload",this._handle_unload.bind(this)),this.toolbar.maybeLoadToolbar(),r.segment?function(e,t){var n=e.config.segment
if(!n)return t()
!function(e,t){var n=e.config.segment
if(!n)return t()
var i=n=>{var i=()=>n.anonymousId()||ct()
e.config.get_device_id=i,n.id()&&(e.register({distinct_id:n.id(),$device_id:i()}),e.persistence.set_property(He,"identified")),t()},r=n.user()
"then"in r&&U(r.then)?r.then((e=>i(e))):i(r)}(e,(()=>{n.register((e=>{Promise&&Promise.resolve||Mr.warn("This browser does not have Promise support, and can not use the segment integration")
var t=(t,n)=>{var i
if(!n)return t
t.event.userId||t.event.anonymousId===e.get_distinct_id()||(Mr.info("No userId set, resetting PostHog"),e.reset()),t.event.userId&&t.event.userId!==e.get_distinct_id()&&(Mr.info("UserId set, identifying with PostHog"),e.identify(t.event.userId))
var r=e._calculate_event_properties(n,null!==(i=t.event.properties)&&void 0!==i?i:{},new Date)
return t.event.properties=Object.assign({},r,t.event.properties),t}
return{name:"PostHog JS",type:"enrichment",version:"1.0.0",isLoaded:()=>!0,load:()=>Promise.resolve(),track:e=>t(e,e.event.event),page:e=>t(e,"$pageview"),identify:e=>t(e,"$identify"),screen:e=>t(e,"$screen")}})(e)).then((()=>{t()}))}))}(this,(()=>this._loaded())):this._loaded(),U(this.config._onCapture)&&this.config._onCapture!==us&&(te.warn("onCapture is deprecated. Please use `before_send` instead"),this.on("eventCaptured",(e=>this.config._onCapture(e.event,e)))),this}_onRemoteConfig(e){var t,n,i,r,o,s,a,l
if(!E||!E.body)return te.info("document not ready yet, trying again in 500 milliseconds..."),void setTimeout((()=>{this._onRemoteConfig(e)}),500)
this.compression=void 0,e.supportedCompression&&!this.config.disable_compression&&(this.compression=M(e.supportedCompression,v.GZipJS)?v.GZipJS:M(e.supportedCompression,v.Base64)?v.Base64:void 0),null!==(t=e.analytics)&&void 0!==t&&t.endpoint&&(this.analyticsDefaultEndpoint=e.analytics.endpoint),this.set_config({person_profiles:this._initialPersonProfilesConfig?this._initialPersonProfilesConfig:"identified_only"}),null===(n=this.siteApps)||void 0===n||n.onRemoteConfig(e),null===(i=this.sessionRecording)||void 0===i||i.onRemoteConfig(e),null===(r=this.autocapture)||void 0===r||r.onRemoteConfig(e),null===(o=this.heatmaps)||void 0===o||o.onRemoteConfig(e),this.surveys.onRemoteConfig(e),null===(s=this.webVitalsAutocapture)||void 0===s||s.onRemoteConfig(e),null===(a=this.exceptionObserver)||void 0===a||a.onRemoteConfig(e),null===(l=this.deadClicksAutocapture)||void 0===l||l.onRemoteConfig(e)}_loaded(){try{this.config.loaded(this)}catch(e){te.critical("`loaded` function failed",e)}this._start_queue_if_opted_in(),this.config.capture_pageview&&setTimeout((()=>{this.consent.isOptedIn()&&this._captureInitialPageview()}),1),new dr(this).load(),this.featureFlags.decide()}_start_queue_if_opted_in(){var e
this.has_opted_out_capturing()||this.config.request_batching&&(null===(e=this._requestQueue)||void 0===e||e.enable())}_dom_loaded(){this.has_opted_out_capturing()||re(this.__request_queue,(e=>this._send_retriable_request(e))),this.__request_queue=[],this._start_queue_if_opted_in()}_handle_unload(){var e,t
this.config.request_batching?(this._shouldCapturePageleave()&&this.capture("$pageleave"),null===(e=this._requestQueue)||void 0===e||e.unload(),null===(t=this._retryQueue)||void 0===t||t.unload()):this._shouldCapturePageleave()&&this.capture("$pageleave",null,{transport:"sendBeacon"})}_send_request(e){this.__loaded&&(fs?this.__request_queue.push(e):this.rateLimiter.isServerRateLimited(e.batchKey)||(e.transport=e.transport||this.config.api_transport,e.url=yr(e.url,{ip:this.config.ip?1:0}),e.headers=h({},this.config.request_headers),e.compression="best-available"===e.compression?this.compression:e.compression,e.fetchOptions=e.fetchOptions||this.config.fetch_options,(e=>{var t,n,i,r=h({},e)
r.timeout=r.timeout||6e4,r.url=yr(r.url,{_:(new Date).getTime().toString(),ver:_.LIB_VERSION,compression:r.compression})
var o=null!==(t=r.transport)&&void 0!==t?t:"fetch",s=null!==(n=null===(i=he(Sr,(e=>e.transport===o)))||void 0===i?void 0:i.method)&&void 0!==n?n:Sr[0].method
if(!s)throw new Error("No available transport method")
s(r)})(h(h({},e),{},{callback:t=>{var n,i,r
this.rateLimiter.checkForLimiting(t),t.statusCode>=400&&(null===(i=(r=this.config).on_request_error)||void 0===i||i.call(r,t)),null===(n=e.callback)||void 0===n||n.call(e,t)}}))))}_send_retriable_request(e){this._retryQueue?this._retryQueue.retriableRequest(e):this._send_request(e)}_execute_array(e){var t,n=[],i=[],r=[]
re(e,(e=>{e&&(t=e[0],H(t)?r.push(e):U(e)?e.call(this):H(e)&&"alias"===t?n.push(e):H(e)&&-1!==t.indexOf("capture")&&U(this[t])?r.push(e):i.push(e))}))
var o=function(e,t){re(e,(function(e){if(H(e[0])){var n=t
oe(e,(function(e){n=n[e[0]].apply(n,e.slice(1))}))}else this[e[0]].apply(this,e.slice(1))}),t)}
o(n,this),o(i,this),o(r,this)}_hasBootstrappedFeatureFlags(){var e,t
return(null===(e=this.config.bootstrap)||void 0===e?void 0:e.featureFlags)&&Object.keys(null===(t=this.config.bootstrap)||void 0===t?void 0:t.featureFlags).length>0||!1}push(e){this._execute_array([e])}capture(e,t,n){var i
if(this.__loaded&&this.persistence&&this.sessionPersistence&&this._requestQueue){if(!this.consent.isOptedOut())if(!W(e)&&z(e)){if(this.config.opt_out_useragent_filter||!this._is_bot()){var r=null!=n&&n.skip_client_rate_limiting?void 0:this.rateLimiter.clientRateLimitContext()
if(null==r||!r.isRateLimited){this.sessionPersistence.update_search_keyword(),this.config.store_google&&this.sessionPersistence.update_campaign_params(),this.config.save_referrer&&this.sessionPersistence.update_referrer_info(),(this.config.store_google||this.config.save_referrer)&&this.persistence.set_initial_person_info()
var o=new Date,s=(null==n?void 0:n.timestamp)||o,a=ct(),l={uuid:a,event:e,properties:this._calculate_event_properties(e,t||{},s,a)}
r&&(l.properties.$lib_rate_limit_remaining_tokens=r.remainingTokens),(null==n?void 0:n.$set)&&(l.$set=null==n?void 0:n.$set)
var c=this._calculate_set_once_properties(null==n?void 0:n.$set_once)
c&&(l.$set_once=c),(l=function(e,t){return n=e,i=e=>z(e)&&!Q(t)?e.slice(0,t):e,r=new Set,function e(t,n){return t!==Object(t)?i?i(t):t:r.has(t)?void 0:(r.add(t),H(t)?(o=[],re(t,(t=>{o.push(e(t))}))):(o={},oe(t,((t,n)=>{r.has(t)||(o[n]=e(t,n))}))),o)
var o}(n)
var n,i,r}(l,null!=n&&n._noTruncate?null:this.config.properties_string_max_length)).timestamp=s,W(null==n?void 0:n.timestamp)||(l.properties.$event_time_override_provided=!0,l.properties.$event_time_override_system_time=o)
var u=h(h({},l.properties.$set),l.$set)
if(G(u)||this.setPersonPropertiesForFlags(u),!J(this.config.before_send)){var d=this._runBeforeSend(l)
if(!d)return
l=d}this._internalEventEmitter.emit("eventCaptured",l)
var f={method:"POST",url:null!==(i=null==n?void 0:n._url)&&void 0!==i?i:this.requestRouter.endpointFor("api",this.analyticsDefaultEndpoint),data:l,compression:"best-available",batchKey:null==n?void 0:n._batchKey}
return!this.config.request_batching||n&&(null==n||!n._batchKey)||null!=n&&n.send_instantly?this._send_retriable_request(f):this._requestQueue.enqueue(f),l}te.critical("This capture call is ignored due to client rate limiting.")}}else te.error("No event name provided to posthog.capture")}else te.uninitializedWarning("posthog.capture")}_addCaptureHook(e){return this.on("eventCaptured",(t=>e(t.event,t)))}_calculate_event_properties(e,t,n,i){if(n=n||new Date,!this.persistence||!this.sessionPersistence)return t
var r=this.persistence.remove_event_timer(e),o=h({},t)
if(o.token=this.config.token,this.config.__preview_experimental_cookieless_mode&&(o.$cookieless_mode=!0),"$snapshot"===e){var s=h(h({},this.persistence.properties()),this.sessionPersistence.properties())
return o.distinct_id=s.distinct_id,(!z(o.distinct_id)&&!K(o.distinct_id)||V(o.distinct_id))&&te.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),o}var a,l=Pn.properties({maskPersonalDataProperties:this.config.mask_personal_data_properties,customPersonalDataProperties:this.config.custom_personal_data_properties})
if(this.sessionManager){var{sessionId:c,windowId:u}=this.sessionManager.checkAndGetSessionAndWindowId()
o.$session_id=c,o.$window_id=u}if(this.sessionRecording&&(o.$recording_status=this.sessionRecording.status),this.requestRouter.region===Cr.CUSTOM&&(o.$lib_custom_api_host=this.config.api_host),this.sessionPropsManager&&this.config.__preview_send_client_session_params&&("$pageview"===e||"$pageleave"===e||"$autocapture"===e)){var d=this.sessionPropsManager.getSessionProps()
o=se(o,d)}if(a="$pageview"===e?this.pageViewManager.doPageView(n,i):"$pageleave"===e?this.pageViewManager.doPageLeave(n):this.pageViewManager.doEvent(),o=se(o,a),"$pageview"===e&&E&&(o.title=E.title),!W(r)){var f=n.getTime()-r
o.$duration=parseFloat((f/1e3).toFixed(3))}L&&this.config.opt_out_useragent_filter&&(o.$browser_type=this._is_bot()?"bot":"browser"),(o=se({},l,this.persistence.properties(),this.sessionPersistence.properties(),o)).$is_identified=this._isIdentified(),H(this.config.property_denylist)?oe(this.config.property_denylist,(function(e){delete o[e]})):te.error("Invalid value for property_denylist config: "+this.config.property_denylist+" or property_blacklist config: "+this.config.property_blacklist)
var p=this.config.sanitize_properties
p&&(te.error("sanitize_properties is deprecated. Use before_send instead"),o=p(o,e))
var g=this._hasPersonProcessing()
return o.$process_person_profile=g,g&&this._requirePersonProcessing("_calculate_event_properties"),o}_calculate_set_once_properties(e){if(!this.persistence||!this._hasPersonProcessing())return e
var t=se({},this.persistence.get_initial_props(),e||{}),n=this.config.sanitize_properties
return n&&(te.error("sanitize_properties is deprecated. Use before_send instead"),t=n(t,"$set_once")),G(t)?void 0:t}register(e,t){var n
null===(n=this.persistence)||void 0===n||n.register(e,t)}register_once(e,t,n){var i
null===(i=this.persistence)||void 0===i||i.register_once(e,t,n)}register_for_session(e){var t
null===(t=this.sessionPersistence)||void 0===t||t.register(e)}unregister(e){var t
null===(t=this.persistence)||void 0===t||t.unregister(e)}unregister_for_session(e){var t
null===(t=this.sessionPersistence)||void 0===t||t.unregister(e)}_register_single(e,t){this.register({[e]:t})}getFeatureFlag(e,t){return this.featureFlags.getFeatureFlag(e,t)}getFeatureFlagPayload(e){var t=this.featureFlags.getFeatureFlagPayload(e)
try{return JSON.parse(t)}catch(e){return t}}isFeatureEnabled(e,t){return this.featureFlags.isFeatureEnabled(e,t)}reloadFeatureFlags(){this.featureFlags.reloadFeatureFlags()}updateEarlyAccessFeatureEnrollment(e,t){this.featureFlags.updateEarlyAccessFeatureEnrollment(e,t)}getEarlyAccessFeatures(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return this.featureFlags.getEarlyAccessFeatures(e,t)}on(e,t){return this._internalEventEmitter.on(e,t)}onFeatureFlags(e){return this.featureFlags.onFeatureFlags(e)}onSessionId(e){var t,n
return null!==(t=null===(n=this.sessionManager)||void 0===n?void 0:n.onSessionId(e))&&void 0!==t?t:()=>{}}getSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.surveys.getSurveys(e,t)}getActiveMatchingSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.surveys.getActiveMatchingSurveys(e,t)}renderSurvey(e,t){this.surveys.renderSurvey(e,t)}canRenderSurvey(e){this.surveys.canRenderSurvey(e)}getNextSurveyStep(e,t,n){return this.surveys.getNextSurveyStep(e,t,n)}identify(e,t,n){if(!this.__loaded||!this.persistence)return te.uninitializedWarning("posthog.identify")
if(K(e)&&(e=e.toString(),te.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")),e){if(["distinct_id","distinctid"].includes(e.toLowerCase()))te.critical('The string "'.concat(e,'" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'))
else if(this._requirePersonProcessing("posthog.identify")){var i=this.get_distinct_id()
if(this.register({$user_id:e}),!this.get_property("$device_id")){var r=i
this.register_once({$had_persisted_distinct_id:!0,$device_id:r},"")}e!==i&&e!==this.get_property(ge)&&(this.unregister(ge),this.register({distinct_id:e}))
var o="anonymous"===(this.persistence.get_property(He)||"anonymous")
e!==i&&o?(this.persistence.set_property(He,"identified"),this.setPersonPropertiesForFlags(t||{},!1),this.capture("$identify",{distinct_id:e,$anon_distinct_id:i},{$set:t||{},$set_once:n||{}}),this.featureFlags.setAnonymousDistinctId(i),this._cachedIdentify=ls(e,t,n)):(t||n)&&(this._cachedIdentify!==ls(e,t,n)?(this.setPersonProperties(t,n),this._cachedIdentify=ls(e,t,n)):te.info("A duplicate posthog.identify call was made with the same properties. It has been ignored.")),e!==i&&(this.reloadFeatureFlags(),this.unregister(Be))}}else te.error("Unique user id has not been set in posthog.identify")}setPersonProperties(e,t){(e||t)&&this._requirePersonProcessing("posthog.setPersonProperties")&&(this.setPersonPropertiesForFlags(e||{}),this.capture("$set",{$set:e||{},$set_once:t||{}}))}group(e,t,n){if(e&&t){if(this._requirePersonProcessing("posthog.group")){var i=this.getGroups()
i[e]!==t&&this.resetGroupPropertiesForFlags(e),this.register({$groups:h(h({},i),{},{[e]:t})}),n&&(this.capture("$groupidentify",{$group_type:e,$group_key:t,$group_set:n}),this.setGroupPropertiesForFlags({[e]:n})),i[e]===t||n||this.reloadFeatureFlags()}}else te.error("posthog.group requires a group type and group key")}resetGroups(){this.register({$groups:{}}),this.resetGroupPropertiesForFlags(),this.reloadFeatureFlags()}setPersonPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this.featureFlags.setPersonPropertiesForFlags(e,t)}resetPersonPropertiesForFlags(){this.featureFlags.resetPersonPropertiesForFlags()}setGroupPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this._requirePersonProcessing("posthog.setGroupPropertiesForFlags")&&this.featureFlags.setGroupPropertiesForFlags(e,t)}resetGroupPropertiesForFlags(e){this.featureFlags.resetGroupPropertiesForFlags(e)}reset(e){var t,n,i,r
if(te.info("reset"),!this.__loaded)return te.uninitializedWarning("posthog.reset")
var o=this.get_property("$device_id")
if(this.consent.reset(),null===(t=this.persistence)||void 0===t||t.clear(),null===(n=this.sessionPersistence)||void 0===n||n.clear(),this.surveys.reset(),null===(i=this.persistence)||void 0===i||i.set_property(He,"anonymous"),null===(r=this.sessionManager)||void 0===r||r.resetSessionId(),this._cachedIdentify=null,this.config.__preview_experimental_cookieless_mode)this.register_once({distinct_id:Je,$device_id:null},"")
else{var s=this.config.get_device_id(ct())
this.register_once({distinct_id:s,$device_id:e?s:o},"")}this.register({$last_posthog_reset:(new Date).toISOString()},1)}get_distinct_id(){return this.get_property("distinct_id")}getGroups(){return this.get_property("$groups")||{}}get_session_id(){var e,t
return null!==(e=null===(t=this.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0).sessionId)&&void 0!==e?e:""}get_session_replay_url(e){if(!this.sessionManager)return""
var{sessionId:t,sessionStartTimestamp:n}=this.sessionManager.checkAndGetSessionAndWindowId(!0),i=this.requestRouter.endpointFor("ui","/project/".concat(this.config.token,"/replay/").concat(t))
if(null!=e&&e.withTimestamp&&n){var r,o=null!==(r=e.timestampLookBack)&&void 0!==r?r:10
if(!n)return i
var s=Math.max(Math.floor(((new Date).getTime()-n)/1e3)-o,0)
i+="?t=".concat(s)}return i}alias(e,t){return e===this.get_property(pe)?(te.critical("Attempting to create alias for existing People user - aborting."),-2):this._requirePersonProcessing("posthog.alias")?(W(t)&&(t=this.get_distinct_id()),e!==t?(this._register_single(ge,e),this.capture("$create_alias",{alias:e,distinct_id:t})):(te.warn("alias matches current distinct_id - skipping api call."),this.identify(e),-1)):void 0}set_config(e){var t,n,i,r,o=h({},this.config)
q(e)&&(se(this.config,ps(e)),null===(t=this.persistence)||void 0===t||t.update_config(this.config,o),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new Tn(h(h({},this.config),{},{persistence:"sessionStorage"})),gt.is_supported()&&"true"===gt.get("ph_debug")&&(this.config.debug=!0),this.config.debug&&(_.DEBUG=!0,te.info("set_config",{config:e,oldConfig:o,newConfig:h({},this.config)})),null===(n=this.sessionRecording)||void 0===n||n.startIfEnabledOrStop(),null===(i=this.autocapture)||void 0===i||i.startIfEnabled(),null===(r=this.heatmaps)||void 0===r||r.startIfEnabled(),this.surveys.loadIfEnabled(),this._sync_opt_out_with_persistence())}startSessionRecording(e){var t,n,i,r,o,s=!0===e,a={sampling:s||!(null==e||!e.sampling),linked_flag:s||!(null==e||!e.linked_flag),url_trigger:s||!(null==e||!e.url_trigger),event_trigger:s||!(null==e||!e.event_trigger)}
Object.values(a).some(Boolean)&&(null===(t=this.sessionManager)||void 0===t||t.checkAndGetSessionAndWindowId(),a.sampling&&(null===(n=this.sessionRecording)||void 0===n||n.overrideSampling()),a.linked_flag&&(null===(i=this.sessionRecording)||void 0===i||i.overrideLinkedFlag()),a.url_trigger&&(null===(r=this.sessionRecording)||void 0===r||r.overrideTrigger("url")),a.event_trigger&&(null===(o=this.sessionRecording)||void 0===o||o.overrideTrigger("event")))
this.set_config({disable_session_recording:!1})}stopSessionRecording(){this.set_config({disable_session_recording:!0})}sessionRecordingStarted(){var e
return!(null===(e=this.sessionRecording)||void 0===e||!e.started)}captureException(e,t){var n,i=new Error("PostHog syntheticException"),r=U(null===(n=I.__PosthogExtensions__)||void 0===n?void 0:n.parseErrorAsProperties)?h(h({},I.__PosthogExtensions__.parseErrorAsProperties([e.message,void 0,void 0,void 0,e],{syntheticException:i})),t):h({$exception_level:"error",$exception_list:[{type:e.name,value:e.message,mechanism:{handled:!0,synthetic:!1}}]},t)
this.exceptions.sendExceptionEvent(r)}loadToolbar(e){return this.toolbar.loadToolbar(e)}get_property(e){var t
return null===(t=this.persistence)||void 0===t?void 0:t.props[e]}getSessionProperty(e){var t
return null===(t=this.sessionPersistence)||void 0===t?void 0:t.props[e]}toString(){var e,t=null!==(e=this.config.name)&&void 0!==e?e:ds
return t!==ds&&(t=ds+"."+t),t}_isIdentified(){var e,t
return"identified"===(null===(e=this.persistence)||void 0===e?void 0:e.get_property(He))||"identified"===(null===(t=this.sessionPersistence)||void 0===t?void 0:t.get_property(He))}_hasPersonProcessing(){var e,t,n,i
return!("never"===this.config.person_profiles||"identified_only"===this.config.person_profiles&&!this._isIdentified()&&G(this.getGroups())&&(null===(e=this.persistence)||void 0===e||null===(t=e.props)||void 0===t||!t[ge])&&(null===(n=this.persistence)||void 0===n||null===(i=n.props)||void 0===i||!i[Ve]))}_shouldCapturePageleave(){return!0===this.config.capture_pageleave||"if_capture_pageview"===this.config.capture_pageleave&&this.config.capture_pageview}createPersonProfile(){this._hasPersonProcessing()||this._requirePersonProcessing("posthog.createPersonProfile")&&this.setPersonProperties({},{})}_requirePersonProcessing(e){return"never"===this.config.person_profiles?(te.error(e+' was called, but process_person is set to "never". This call will be ignored.'),!1):(this._register_single(Ve,!0),!0)}_sync_opt_out_with_persistence(){var e,t,n,i,r=this.consent.isOptedOut(),o=this.config.opt_out_persistence_by_default,s=this.config.disable_persistence||r&&!!o;(null===(e=this.persistence)||void 0===e?void 0:e.disabled)!==s&&(null===(n=this.persistence)||void 0===n||n.set_disabled(s)),(null===(t=this.sessionPersistence)||void 0===t?void 0:t.disabled)!==s&&(null===(i=this.sessionPersistence)||void 0===i||i.set_disabled(s))}opt_in_capturing(e){var t
this.consent.optInOut(!0),this._sync_opt_out_with_persistence(),(W(null==e?void 0:e.captureEventName)||null!=e&&e.captureEventName)&&this.capture(null!==(t=null==e?void 0:e.captureEventName)&&void 0!==t?t:"$opt_in",null==e?void 0:e.captureProperties,{send_instantly:!0}),this.config.capture_pageview&&this._captureInitialPageview()}opt_out_capturing(){this.consent.optInOut(!1),this._sync_opt_out_with_persistence()}has_opted_in_capturing(){return this.consent.isOptedIn()}has_opted_out_capturing(){return this.consent.isOptedOut()}clear_opt_in_out_capturing(){this.consent.reset(),this._sync_opt_out_with_persistence()}_is_bot(){return S?Ro(S,this.config.custom_blocked_useragents):void 0}_captureInitialPageview(){E&&!this._initialPageviewCaptured&&(this._initialPageviewCaptured=!0,this.capture("$pageview",{title:E.title},{send_instantly:!0}))}debug(e){!1===e?(null==m||m.console.log("You've disabled debug mode."),localStorage&&localStorage.removeItem("ph_debug"),this.set_config({debug:!1})):(null==m||m.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),localStorage&&localStorage.setItem("ph_debug","true"),this.set_config({debug:!0}))}_runBeforeSend(e){if(J(this.config.before_send))return e
var t=H(this.config.before_send)?this.config.before_send:[this.config.before_send],n=e
for(var i of t){if(n=i(n),J(n)){var r="Event '".concat(e.event,"' was rejected in beforeSend function")
return Z(e.event)?te.warn("".concat(r,". This can cause unexpected behavior.")):te.info(r),null}n.properties&&!G(n.properties)||te.warn("Event '".concat(e.event,"' has no properties after beforeSend function, this is likely an error."))}return n}getPageViewId(){var e
return null===(e=this.pageViewManager._currentPageview)||void 0===e?void 0:e.pageViewId}}!function(e,t){for(var n=0;n<t.length;n++)e.prototype[t[n]]=ue(e.prototype[t[n]])}(vs,["identify"])
var _s,ms=(_s=cs[ds]=new vs,function(){function e(){e.done||(e.done=!0,fs=!1,oe(cs,(function(e){e._dom_loaded()})))}null!=E&&E.addEventListener&&("complete"===E.readyState?e():E.addEventListener("DOMContentLoaded",e,!1)),m&&fe(m,"load",e,!0)}(),_s)
function bs(...e){console.log(...e)}function ys(e,t){ms.capture(e,t)}function ws(){"string"==typeof window.self&&(o(),window.self=window),function(){try{ms.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N",{advanced_disable_decide:!0,advanced_disable_feature_flags:!0,advanced_disable_feature_flags_on_first_load:!0,advanced_disable_toolbar_metrics:!0,api_host:"https://us.i.posthog.com",autocapture:!1,capture_pageview:!1,disable_compression:!1,disable_persistence:!0,disable_session_recording:!0,disable_surveys:!0,person_profiles:"identified_only"})}catch(e){bs(e)}}()}let ks=0,Ss=0,Es=0,xs=0,Cs=0,Ps=0,$s=0
const Ts=()=>Date.now(),Ls=()=>Math.floor(Ts()/1e3)
function Is(){return ks||(ks=Ts()),ks}function Rs(){return Ss||(Ss=Is()-3e5),Ss}function Os(){return Es||(Es=Is()-1728e5),Es}function Ms(){return xs||(xs=Math.floor(Is()/1e3)),xs}function Fs(){return Cs||(Cs=Ms()-120),Cs}function As(){return Ps||(Ps=Ms()-86400),Ps}function Ns(){return $s||($s=Ms()-604800),$s}function js(e){return null===e}function Ds(e){return void 0===e}const Bs=`${document.location.protocol}//${document.location.host}/`,Hs=window.HCS?.defines?.cdn,Us=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],qs=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],Gs=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ws=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,zs=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,Vs=/guild_id=(?<guildId>\d+)/,Qs=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,Js=/player_id=(?<playerId>\d+)/,Ks=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,Xs=/VL:.+?(?<vl>\d+)/,Ys=.2,Zs="joinallgroupsundersize",ea="index.php",ta="?cmd=",na=`${ea}${ta}`,ia="&subcmd=",ra="&target_username=",oa=`${na}auctionhouse`,sa=`${oa}&search=`,aa=`${na}log`,la=`${na}ignore${ia}add&ignore_username=`,ca=`${na}profile`,ua=`${ca}&player_id=`,da=`${ca}${ia}dropitems`,fa=`${na}trade&target_player=`,ha=`${na}trade${ia}createsecure${ra}`,pa=`${na}arena${ia}`,ga=`${ea}${`${ta}notepad&blank=1${ia}`}`,va=`${ga}auctionsearch`,_a=`${na}points`,ma=`${na}guild${ia}`,ba=`${ma}log`,ya=`${ma}scouttower`,wa=`${ma}groups&subcmd2=`,ka=`${ma}inventory&subcmd2=report&user=`,Sa=`${ma}view&guild_id=`,Ea=`${wa}joinall`,xa=`${wa}${Zs}`,Ca=`${na}world`,Pa=`${na}findplayer`,$a=`${Pa}&search_show_first=1&search_username=`,Ta=`${na}blacksmith`,La=`${na}quickbuff`,Ia=`${na}composing`,Ra=`${na}attackplayer${ra}`,Oa=`${na}${ia}viewupdatearchive`,Ma=`${na}${ia}viewarchive`,Fa=`${na}bounty`,Aa=`${na}inventing${ia}viewrecipe&recipe_id=`,Na=`https://guide.fallensword.com/${na}`,ja="after-update.actionlist",Da="buffs.player",Ba="update.player",Ha="level.stats-player",Ua="gold.stats-player",qa="prompt.worldDialogShop",Ga="keydown.controls",Wa="update.realm",za="-success.action-response",Va=`-1${za}`,Qa=`1${za}`,Ja=`2${za}`,Ka=`9${za}`,Xa=`5${za}`,Ya=`25${za}`,Za=1,el=2,tl=16,nl=128,il=256,rl="needToCompose",ol="lastComposeCheck",sl="characterVirtualLevel",al="enableGuildActivityTracker",ll="lastLadderReset",cl="form",ul="table",dl="td",fl="fsh_buffLog",hl="stat-level",pl="stat-defense",gl="stat-attack",vl="stat-damage",_l="stat-armor",ml="stat-hp",bl="stat-vl",yl="GM_",wl=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],kl=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],Sl=`${Hs}ui/world/action_spinner.gif`,El=".fa-envelope",xl='a[href*="&player_id="]',Cl=.002,Pl=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],$l='input[name="blockedSkillList[]"]'
var Tl={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addServerNode:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252",compactRanks:!1,lastModalGuildLogCheck:0}
const Ll=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function Il(e,t){const n=window.localStorage.getItem(yl+e)
return js(n)||Ds(n)?t:function(e){const t=Ll.find((t=>e.startsWith(t[0])))
return t?t[1](e):e}(n)}function Rl(e){return Il(e,Tl[e])}function Ol(e){return"boolean"==typeof e}function Ml(e){return"string"==typeof e}function Fl(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(yl+e,t+n)}const Al=[[Ml,(e,t)=>{Fl(e,"S]",t)}],[e=>"number"==typeof e,(e,t)=>{t.toString().indexOf(".")<0&&Fl(e,"N]",t)}],[Ol,(e,t)=>{Fl(e,"B]",t)}]]
function Nl(e,t){const n=Al.find((e=>e[0](t)))
n&&n[1](e,t)}function jl(e){const t=`screenview__${e}`,n=Rl(t)
Number.isFinite(n)&&n>As()||(ys(t),Nl(t,Ms()))}function Dl(e){return"function"==typeof e}function Bl(e){return"object"==typeof e}function Hl(e,t){try{return JSON.parse(e,t)}catch(e){}}function Ul(e,t){return t?t.querySelector(e):document.querySelector(e)}function ql(e){const t=Ul("link",document.body)
return new Promise((n=>{const i=document.createElement("link")
i.type="text/css",i.rel="stylesheet",i.onload=()=>{n()},i.href=e,t?t.before(i):document.body.append(i)}))}var Gl="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function Wl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zl,Vl={exports:{}}
var Ql=(zl||(zl=1,Vl.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==Gl?Gl:"undefined"!=typeof self?self:{}
function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){var t=e.default
if("function"==typeof t){var n=function(){return t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),n}var i={},r={},o={},s={},a="<unknown>"
function l(e){return e.split("\n").reduce((function(e,t){var n=d(t)||h(t)||v(t)||y(t)||m(t)
return n&&e.push(n),e}),[])}var c=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,u=/\((\S*)(?::(\d+))(?::(\d+))\)/
function d(e){var t=c.exec(e)
if(!t)return null
var n=t[2]&&0===t[2].indexOf("native"),i=t[2]&&0===t[2].indexOf("eval"),r=u.exec(t[2])
return i&&null!=r&&(t[2]=r[1],t[3]=r[2],t[4]=r[3]),{file:n?null:t[2],methodName:t[1]||a,arguments:n?[t[2]]:[],lineNumber:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}var f=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
function h(e){var t=f.exec(e)
return t?{file:t[2],methodName:t[1]||a,arguments:[],lineNumber:+t[3],column:t[4]?+t[4]:null}:null}var p=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,g=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i
function v(e){var t=p.exec(e)
if(!t)return null
var n=t[3]&&t[3].indexOf(" > eval")>-1,i=g.exec(t[3])
return n&&null!=i&&(t[3]=i[1],t[4]=i[2],t[5]=null),{file:t[3],methodName:t[1]||a,arguments:t[2]?t[2].split(","):[],lineNumber:t[4]?+t[4]:null,column:t[5]?+t[5]:null}}var _=/^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i
function m(e){var t=_.exec(e)
return t?{file:t[3],methodName:t[1]||a,arguments:[],lineNumber:+t[4],column:t[5]?+t[5]:null}:null}var b=/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i
function y(e){var t=b.exec(e)
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
return n}return[]}function v(e,t){return o(this,void 0,void 0,(function(){var n,i,r,o
return s(this,(function(s){switch(s.label){case 0:if(n=[],!t||!e||!e.length)return[2,n]
i=0,s.label=1
case 1:return e.length?(r=e.splice(0)[i],[4,t(r.file)]):[3,3]
case 2:return o=s.sent(),n[i]=N(o,r.number),i++,[3,1]
case 3:return[2,n]}}))}))}function _(e,t){for(var n=[],i=!0,r=0,o=t.length;r<o;r++){var s=(0,t[r])(e)
!1===s&&(i=!1),n.push(s)}return{results:n,result:i}}function m(e,t,n){e&&e.afterNotify&&e.afterNotify(n,e)
for(var i=0,r=t.length;i<r;i++)t[i](n,e)
return!0}function b(e){if("object"!=typeof e||null===e)return{}
var t={}
for(var n in e)t[n]=e[n]
return t}function y(e,t){void 0===t&&(t=8)
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
t=l(e,{name:n.name,message:n.message,stack:n.stack,cause:n.cause})}else t="object"==typeof e?b(e):{message:String(e)}
else t={}
return t}function E(e){return e instanceof Error||"[object Error]"===Object.prototype.toString.call(e)}function x(e,t,n){if(e&&t&&n&&t in e)try{for(var i=e[t];i&&i.__hb_original;)i=i.__hb_original
e[t]=n(i),e[t].__hb_original=i}catch(e){}}t.merge=l,t.mergeNotice=c,t.objectIsEmpty=u,t.objectIsExtensible=d,t.makeBacktrace=f,t.DEFAULT_BACKTRACE_SHIFT=3,t.calculateBacktraceShift=p,t.getCauses=g,t.getSourceForBacktrace=v,t.runBeforeNotifyHandlers=_,t.runAfterNotifyHandlers=m,t.shallowClone=b,t.sanitize=y,t.logger=k,t.makeNotice=S,t.isErrorObject=E,t.instrument=x
var C=!1,P=[]
function $(e,t){e&&e.console&&t&&(P.push(t),C||(C=!0,["debug","info","warn","error","log"].forEach((function(t){x(e.console,t,(function(n){return function(){var i=Array.prototype.slice.call(arguments)
P.forEach((function(e){try{e(t,i)}catch(e){}})),"function"==typeof n&&Function.prototype.apply.call(n,e.console,arguments)}}))}))))}function T(e,t){var n=e.trim().replace(/\/$/,"")
return t=t.trim().replace(/(^\/|\/$)/g,""),"".concat(n,"/").concat(t)}function L(){try{throw new Error("")}catch(e){if(e.stack)return e.stack}for(var e=10,t=[],n=arguments.callee;n&&t.length<e;){/function(?:\s+([\w$]+))+\s*\(/.test(n.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>")
try{n=n.caller}catch(e){break}}return t.join("\n")}function I(e,t){if(O("Object",e)){O("Array",t)||(t=[])
var n=[]
return i(e)}function i(e){var r,o
if(O("Object",e)||O("Array",e)){if(-1!==n.indexOf(e))return"[CIRCULAR DATA STRUCTURE]"
n.push(e)}if(O("Object",e)){for(r in o={},e)R(r,t)?o[r]="[FILTERED]":o[r]=i(e[r])
return o}return O("Array",e)?e.map((function(e){return i(e)})):O("Function",e)?"[FUNC]":e}}function R(e,t){for(var n=0;n<t.length;n++)if(-1!==e.toLowerCase().indexOf(t[n].toLowerCase()))return!0
return!1}function O(e,t){var n=Object.prototype.toString.call(t).slice(8,-1)
return null!=t&&n===e}function M(e,t){if(!t)return e
if("string"!=typeof e)return e
var n=e.split(/\?/,2)[1]
if(!n)return e
var i=e
return n.split(/[&]\s?/).forEach((function(e){var n=e.split("=",2),r=n[0],o=n[1]
R(r,t)&&(i=i.replace("".concat(r,"=").concat(o),"".concat(r,"=[FILTERED]")))})),i}function F(e,t){void 0===t&&(t="")
var n={}
return Object.keys(e).forEach((function(i){var r=t+i.replace(/\W/g,"_").toUpperCase()
n[r]=e[i]})),n}function A(e){return JSON.parse(JSON.stringify(e))}function N(e,t,n){if(void 0===n&&(n=2),!e)return null
var i=e.split("\n")
i.unshift("")
for(var r=t+n,o={},s=t-n;s<=r;s++){var a=i[s]
"string"==typeof a&&(o[s]=a)}return o}function j(e){return void 0!==e.async}function D(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window}t.instrumentConsole=$,t.endpoint=T,t.generateStackTrace=L,t.filter=I,t.filterUrl=M,t.formatCGIData=F,t.clone=A,t.isBrowserConfig=j,t.globalThisOrWindow=D
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
var C=s,P=function(){function e(e,t){this.contents=e,this.breadcrumbsLimit=t}return e.create=function(t,n){return new e(t,n)},e.prototype.available=function(){return!0},e.prototype.getContents=function(e){var t=e?this.contents[e]:this.contents
return JSON.parse(JSON.stringify(t))},e.prototype.setContext=function(e){this.contents.context=(0,C.merge)(this.contents.context,e||{})},e.prototype.addBreadcrumb=function(e){this.contents.breadcrumbs.length==this.breadcrumbsLimit&&this.contents.breadcrumbs.shift(),this.contents.breadcrumbs.push(e)},e.prototype.clear=function(){this.contents.context={},this.contents.breadcrumbs=[]},e.prototype.run=function(e){return e()},e}()
x.GlobalStore=P
var $={}
class T{static parse(e){return e.trim().split("\n").map((e=>JSON.parse(e)))}static stringify(e){return e.map((e=>JSON.stringify(e))).join("\n")}}var L=Object.freeze({__proto__:null,NdJson:T}),I=n(L),R={}
Object.defineProperty(R,"__esModule",{value:!0}),R.CONFIG=void 0,R.CONFIG={apiKey:null,endpoint:"https://api.honeybadger.io",environment:null,hostname:null,projectRoot:null,component:null,action:null,revision:null,reportData:null,breadcrumbsEnabled:!0,eventsEnabled:!1,maxBreadcrumbs:40,maxObjectDepth:8,logger:console,developmentEnvironments:["dev","development","test"],debug:!1,tags:null,enableUncaught:!0,enableUnhandledRejection:!0,afterUncaught:function(){return!0},filters:["creditcard","password"],__plugins:[]}
var O=e&&e.__assign||function(){return O=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},O.apply(this,arguments)},M=e&&e.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){e.done?n(e.value):r(e.value).then(s,a)}l((i=i.apply(e,t||[])).next())}))},F=e&&e.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1]
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
Object.defineProperty($,"__esModule",{value:!0}),$.ThrottledEventsLogger=void 0
var A=I,N=s,j=R,D=function(){function e(e,t){this.config=e,this.transport=t,this.queue=[],this.isProcessing=!1,this.config=O(O({},j.CONFIG),e),this.logger=this.originalLogger()}return e.prototype.configure=function(e){for(var t in e)this.config[t]=e[t]},e.prototype.log=function(e){this.queue.push(e),this.isProcessing||this.processQueue()},e.prototype.processQueue=function(){var e=this
if(0!==this.queue.length&&!this.isProcessing){this.isProcessing=!0
var t=this.queue.slice()
this.queue=[]
var n=A.NdJson.stringify(t)
this.makeHttpRequest(n).then((function(){setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)})).catch((function(t){e.logger.error("[Honeybadger] Error making HTTP request:",t),setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)}))}},e.prototype.makeHttpRequest=function(e){return M(this,void 0,void 0,(function(){var t=this
return F(this,(function(n){return[2,this.transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json"},method:"POST",endpoint:(0,N.endpoint)(this.config.endpoint,"/v1/events"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},e).then((function(){t.config.debug&&t.logger.debug("[Honeybadger] Events sent successfully")})).catch((function(e){t.logger.error("[Honeybadger] Error sending events: ".concat(e.message))}))]}))}))},e.prototype.originalLogger=function(){var e,t,n,i,r
return{log:null!==(e=console.log.__hb_original)&&void 0!==e?e:console.log,info:null!==(t=console.info.__hb_original)&&void 0!==t?t:console.info,debug:null!==(n=console.debug.__hb_original)&&void 0!==n?n:console.debug,warn:null!==(i=console.warn.__hb_original)&&void 0!==i?i:console.warn,error:null!==(r=console.error.__hb_original)&&void 0!==r?r:console.error}},e}()
$.ThrottledEventsLogger=D
var B=e&&e.__assign||function(){return B=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},B.apply(this,arguments)},H=e&&e.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){e.done?n(e.value):r(e.value).then(s,a)}l((i=i.apply(e,t||[])).next())}))},U=e&&e.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1]
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
var q=s,G=x,W=$,z=R,V=/,|\s+/,Q=/\S/,J=function(){function e(e,t){void 0===e&&(e={}),this.__pluginsLoaded=!1,this.__store=null,this.__beforeNotifyHandlers=[],this.__afterNotifyHandlers=[],this.__notifier={name:"@honeybadger-io/core",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",version:"6.10.1"},this.config=B(B({},z.CONFIG),e),this.__initStore(),this.__transport=t,this.__eventsLogger=new W.ThrottledEventsLogger(this.config,this.__transport),this.logger=(0,q.logger)(this)}return e.prototype.getVersion=function(){return this.__notifier.version},e.prototype.getNotifier=function(){return this.__notifier},e.prototype.setNotifier=function(e){this.__notifier=e},e.prototype.configure=function(e){for(var t in void 0===e&&(e={}),e)this.config[t]=e[t]
return this.__eventsLogger.configure(this.config),this.loadPlugins(),this},e.prototype.loadPlugins=function(){var e=this;(this.__pluginsLoaded?this.config.__plugins.filter((function(e){return e.shouldReloadOnConfigure})):this.config.__plugins).forEach((function(t){return t.load(e)})),this.__pluginsLoaded=!0},e.prototype.__initStore=function(){this.__store=new G.GlobalStore({context:{},breadcrumbs:[]},this.config.maxBreadcrumbs)},e.prototype.beforeNotify=function(e){return this.__beforeNotifyHandlers.push(e),this},e.prototype.afterNotify=function(e){return this.__afterNotifyHandlers.push(e),this},e.prototype.setContext=function(e){return"object"==typeof e&&null!=e&&this.__store.setContext(e),this},e.prototype.resetContext=function(e){return this.logger.warn("Deprecation warning: `Honeybadger.resetContext()` has been deprecated; please use `Honeybadger.clear()` instead."),this.__store.clear(),"object"==typeof e&&null!==e&&this.__store.setContext(e),this},e.prototype.clear=function(){return this.__store.clear(),this},e.prototype.notify=function(e,t,n){var i=this
void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var r=this.makeNotice(e,t,n),o=r&&r.backtrace?r.backtrace.map((function(e){return(0,q.shallowClone)(e)})):null,s=this.__runPreconditions(r)
return s instanceof Error?((0,q.runAfterNotifyHandlers)(r,this.__afterNotifyHandlers,s),!1):s instanceof Promise?(s.then((function(e){return e instanceof Error?((0,q.runAfterNotifyHandlers)(r,i.__afterNotifyHandlers,e),!1):i.__send(r,o)})),!0):(this.__send(r,o).catch((function(e){})),!0)},e.prototype.notifyAsync=function(e,t,n){var i=this
return void 0===t&&(t=void 0),void 0===n&&(n=void 0),new Promise((function(r,o){var s,a
s=e.afterNotify?e:t&&t.afterNotify?t:n&&n.afterNotify?n:t&&"object"==typeof t?t:n||(t={}),a=s.afterNotify,s.afterNotify=function(e){if(null==a||a.call(i,e),e)return o(e)
r()},i.notify(e,t,n)}))},e.prototype.makeNotice=function(e,t,n){void 0===t&&(t=void 0),void 0===n&&(n=void 0)
var i=(0,q.makeNotice)(e)
if(t&&"object"!=typeof t&&(t={name:String(t)}),t&&(i=(0,q.mergeNotice)(i,t)),"object"==typeof n&&null!==n&&(i=(0,q.mergeNotice)(i,n)),(0,q.objectIsEmpty)(i))return null
var r=this.__store.getContents("context"),o=this.__constructTags(i.tags),s=this.__constructTags(r.tags),a=this.__constructTags(this.config.tags),l=o.concat(s).concat(a),c=l.filter((function(e,t){return l.indexOf(e)===t}))
return i=(0,q.merge)(i,{name:i.name||"Error",context:(0,q.merge)(r,i.context),projectRoot:i.projectRoot||this.config.projectRoot,environment:i.environment||this.config.environment,component:i.component||this.config.component,action:i.action||this.config.action,revision:i.revision||this.config.revision,tags:c}),Array.isArray(i.backtrace)&&i.backtrace.length||("string"==typeof i.stack&&i.stack.trim()?i.backtrace=(0,q.makeBacktrace)(i.stack,!1,this.logger):(i.stack=(0,q.generateStackTrace)(),i.backtrace=(0,q.makeBacktrace)(i.stack,!0,this.logger))),i},e.prototype.addBreadcrumb=function(e,t){if(this.config.breadcrumbsEnabled){t=t||{}
var n=(0,q.shallowClone)(t.metadata),i=t.category||"custom",r=(new Date).toISOString()
return this.__store.addBreadcrumb({category:i,message:e,metadata:n,timestamp:r}),this}},e.prototype.logEvent=function(e){(0,q.logDeprecatedMethod)(this.logger,"Honeybadger.logEvent","Honeybadger.event"),this.event("log",e)},e.prototype.event=function(e,t){var n
"object"==typeof e&&(t=e,e=null!==(n=e.event_type)&&void 0!==n?n:void 0),this.__eventsLogger.log(B({event_type:e,ts:(new Date).toISOString()},t))},e.prototype.__getBreadcrumbs=function(){return this.__store.getContents("breadcrumbs").slice()},e.prototype.__getContext=function(){return this.__store.getContents("context")},e.prototype.__developmentMode=function(){return!0!==this.config.reportData&&this.config.environment&&this.config.developmentEnvironments.includes(this.config.environment)},e.prototype.__buildPayload=function(e){var t=(0,q.filter)(e.headers,this.config.filters)||{},n=(0,q.filter)(B(B({},e.cgiData),(0,q.formatCGIData)(t,"HTTP_")),this.config.filters)
return{notifier:this.__notifier,breadcrumbs:{enabled:!!this.config.breadcrumbsEnabled,trail:e.__breadcrumbs||[]},error:{class:e.name,message:e.message,backtrace:e.backtrace,fingerprint:e.fingerprint,tags:e.tags,causes:(0,q.getCauses)(e,this.logger)},request:{url:(0,q.filterUrl)(e.url,this.config.filters),component:e.component,action:e.action,context:e.context,cgi_data:n,params:(0,q.filter)(e.params,this.config.filters)||{},session:(0,q.filter)(e.session,this.config.filters)||{}},server:{project_root:e.projectRoot,environment_name:e.environment,revision:e.revision,hostname:this.config.hostname,time:(new Date).toUTCString()},details:e.details||{}}},e.prototype.__constructTags=function(e){return e?e.toString().split(V).filter((function(e){return Q.test(e)})):[]},e.prototype.__runPreconditions=function(e){var t=this,n=null
e||(this.logger.debug("failed to build error report"),n=new Error("failed to build error report")),!1===this.config.reportData&&(this.logger.debug("skipping error report: honeybadger.js is disabled",e),n=new Error("honeybadger.js is disabled")),this.__developmentMode()&&(this.logger.log("honeybadger.js is in development mode; the following error report will be sent in production.",e),n=new Error("honeybadger.js is in development mode")),this.config.apiKey||(this.logger.warn("could not send error report: no API key has been configured",e),n=new Error("missing API key"))
var i=(0,q.runBeforeNotifyHandlers)(e,this.__beforeNotifyHandlers)
return n||i.result||(this.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers returned false")),i.results.length&&i.results.some((function(e){return e instanceof Promise}))?Promise.allSettled(i.results).then((function(i){if(!n&&i.some((function(e){return"rejected"===e.status||!1===e.value}))&&(t.logger.debug("skipping error report: one or more beforeNotify handlers returned false",e),n=new Error("beforeNotify handlers (async) returned false")),n)return n})):n},e.prototype.__send=function(e,t){var n=this
return this.config.breadcrumbsEnabled?(this.addBreadcrumb("Honeybadger Notice",{category:"notice",metadata:{message:e.message,name:e.name,stack:e.stack}}),e.__breadcrumbs=this.__store.getContents("breadcrumbs")):e.__breadcrumbs=[],(0,q.getSourceForBacktrace)(t,this.__getSourceFileHandler).then((function(t){return H(n,void 0,void 0,(function(){var n
return U(this,(function(i){return t.forEach((function(t,n){e.backtrace[n].source=t})),n=this.__buildPayload(e),[2,this.__transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json",Accept:"text/json, application/json"},method:"POST",endpoint:(0,q.endpoint)(this.config.endpoint,"/v1/notices/js"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},n)]}))}))})).then((function(t){if(201!==t.statusCode)return(0,q.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,new Error("Bad HTTP response: ".concat(t.statusCode))),n.logger.warn("Error report failed: unknown response from server. code=".concat(t.statusCode)),!1
var i=JSON.parse(t.body).id
return(0,q.runAfterNotifyHandlers)((0,q.merge)(e,{id:i}),n.__afterNotifyHandlers),n.logger.info("Error report sent ⚡ https://app.honeybadger.io/notice/".concat(i)),!0})).catch((function(t){return n.logger.error("Error report failed: an unknown error occurred.","message=".concat(t.message)),(0,q.runAfterNotifyHandlers)(e,n.__afterNotifyHandlers,t),!1}))},e}()
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
var de,fe=r,he=fe.Util.instrument,pe=fe.Util.makeNotice,ge=fe.Util.globalThisOrWindow,ve=0
function _e(){ve+=1,clearTimeout(de),de=setTimeout((function(){ve=0}))}function me(e){return void 0===e&&(e=ge()),{load:function(t){he(e,"onerror",(function(n){var i=function(e,n,i,r,o){if(t.logger.debug("window.onerror callback invoked",arguments),ve>0)return t.logger.debug("Ignoring window.onerror (error likely reported earlier)",arguments),void(ve-=1)
if(0===i&&/Script error\.?/.test(e))t.config.enableUncaught&&t.logger.warn("Ignoring cross-domain script error: enable CORS to track these types of errors",arguments)
else{var s=pe(o)
s.name||(s.name="window.onerror"),s.message||(s.message=e),s.stack||(s.stack=[s.message,"\n    at ? (",n||"unknown",":",i||0,":",r||0,")"].join("")),t.addBreadcrumb("window.onerror"!==s.name&&s.name?"window.onerror: ".concat(s.name):"window.onerror",{category:"error",metadata:{name:s.name,message:s.message,stack:s.stack}}),t.config.enableUncaught&&t.notify(s)}}
return function(t,r,o,s,a){return i(t,r,o,s,a),"function"==typeof n&&n.apply(e,arguments)}}))}}}ue.ignoreNextOnError=_e,ue.onError=me
var be={}
Object.defineProperty(be,"__esModule",{value:!0})
var ye=r,we=ye.Util.instrument,ke=ye.Util.globalThisOrWindow
function Se(e){return void 0===e&&(e=ke()),{load:function(t){t.config.enableUnhandledRejection&&we(e,"onunhandledrejection",(function(e){function n(e){var n
if(t.logger.debug("window.onunhandledrejection callback invoked",arguments),t.config.enableUnhandledRejection){var i=e.reason
if(i instanceof Error){var r="unknown",o=0,s="".concat(i.message,"\n    at ? (").concat(r,":").concat(o,")"),a=i.stack||s,l={name:i.name,message:"UnhandledPromiseRejectionWarning: ".concat(i),stack:a}
return t.addBreadcrumb("window.onunhandledrejection: ".concat(l.name),{category:"error",metadata:l}),void t.notify(l)}var c="string"==typeof i?i:null!==(n=JSON.stringify(i))&&void 0!==n?n:"Unspecified reason"
t.notify({name:"window.onunhandledrejection",message:"UnhandledPromiseRejectionWarning: ".concat(c)})}}return function(t){n(t),"function"==typeof e&&e.apply(this,arguments)}}))}}}be.default=Se
var Ee={}
Object.defineProperty(Ee,"__esModule",{value:!0})
var xe=r,Ce=X,Pe=xe.Util.sanitize,$e=xe.Util.instrument,Te=xe.Util.instrumentConsole,Le=xe.Util.globalThisOrWindow
function Ie(e){return void 0===e&&(e=Le()),{load:function(t){function n(e){return!0===t.config.breadcrumbsEnabled||(e?!0===t.config.breadcrumbsEnabled[e]:!1!==t.config.breadcrumbsEnabled)}!function(){function i(e){return Array.isArray(e)?e.map((function(e){try{return String(e)}catch(e){return"[unknown]"}})).join(" "):""}n("console")&&Te(e,(function(e,n){var r=i(n),o={category:"log",metadata:{level:e,arguments:Pe(n,3)}}
t.addBreadcrumb(r,o)}))}(),n("dom")&&"function"==typeof e.addEventListener&&e.addEventListener("click",(function(e){var n,i,r
try{n=(0,Ce.stringNameOfElement)(e.target),i=(0,Ce.stringSelectorOfElement)(e.target),r=(0,Ce.stringTextOfElement)(e.target)}catch(e){n="UI Click",i="[unknown]",r="[unknown]"}0!==n.length&&t.addBreadcrumb(n,{category:"ui.click",metadata:{selector:i,text:r,event:e}})}),!!e.location),n("network")&&"undefined"!=typeof XMLHttpRequest&&($e(XMLHttpRequest.prototype,"open",(function(e){return function(){var t=this,n=arguments[1],i="string"==typeof n?n:String(n),r="string"==typeof arguments[0]?arguments[0].toUpperCase():arguments[0],o="".concat(r," ").concat((0,Ce.localURLPathname)(i))
this.__hb_xhr={type:"xhr",method:r,url:i,message:o},"function"==typeof e&&e.apply(t,arguments)}})),$e(XMLHttpRequest.prototype,"send",(function(e){return function(){var n=this
function i(){if(4===n.readyState){var e=void 0
n.__hb_xhr&&(n.__hb_xhr.status_code=n.status,e=n.__hb_xhr.message,delete n.__hb_xhr.message),t.addBreadcrumb(e||"XMLHttpRequest",{category:"request",metadata:n.__hb_xhr})}}"onreadystatechange"in n&&"function"==typeof n.onreadystatechange?$e(n,"onreadystatechange",(function(e){return function(){i(),"function"==typeof e&&e.apply(this,arguments)}})):n.onreadystatechange=i,"function"==typeof e&&e.apply(n,arguments)}}))),n("network")&&(0,Ce.nativeFetch)()&&$e(e,"fetch",(function(n){return function(){var i,r=arguments[0],o="GET"
"string"==typeof r?i=r:"Request"in e&&r instanceof Request?(i=r.url,r.method&&(o=r.method)):i=String(r),arguments[1]&&arguments[1].method&&(o=arguments[1].method),"string"==typeof o&&(o=o.toUpperCase())
var s="".concat(o," ").concat("undefined"==typeof document?i:(0,Ce.localURLPathname)(i)),a={type:"fetch",method:o,url:i}
return n.apply(this,arguments).then((function(e){return a.status_code=e.status,t.addBreadcrumb(s,{category:"request",metadata:a}),e})).catch((function(e){throw t.addBreadcrumb("fetch error",{category:"error",metadata:a}),e}))}})),function(){if(n("navigation")&&null!=e.location){var i=e.location.href
"function"==typeof addEventListener&&addEventListener("popstate",(function(t){r(i,e.location.href)})),void 0!==e.history&&($e(e.history,"pushState",o),$e(e.history,"replaceState",o))}function r(e,n){i=n,t.addBreadcrumb("Page changed",{category:"navigation",metadata:{from:e,to:n}})}function o(e){return function(){var t=arguments.length>2?arguments[2]:void 0
return t&&r(i,String(t)),e.apply(this,arguments)}}}()}}}Ee.default=Ie
var Re={}
Object.defineProperty(Re,"__esModule",{value:!0})
var Oe=r,Me=Oe.Util.instrument,Fe=Oe.Util.globalThisOrWindow
function Ae(e){return void 0===e&&(e=Fe()),{load:function(t){!function(){function n(e){return function(n){return function(i,r){if("function"==typeof i){var o=Array.prototype.slice.call(arguments,2)
return i=t.__wrap(i,e),n((function(){i.apply(void 0,o)}),r)}return n(i,r)}}}Me(e,"setTimeout",n({component:"setTimeout"})),Me(e,"setInterval",n({component:"setInterval"}))}()}}}Re.default=Ae
var Ne={}
Object.defineProperty(Ne,"__esModule",{value:!0})
var je=r,De=je.Util.instrument,Be=je.Util.globalThisOrWindow
function He(e){return void 0===e&&(e=Be()),{load:function(t){["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"].forEach((function(n){var i=e[n]&&e[n].prototype
i&&Object.prototype.hasOwnProperty.call(i,"addEventListener")&&(De(i,"addEventListener",(function(e){var i={component:"".concat(n,".prototype.addEventListener")}
return function(n,r,o,s){try{r&&null!=r.handleEvent&&(r.handleEvent=t.__wrap(r.handleEvent,i))}catch(e){t.logger.error(e)}return e.call(this,n,t.__wrap(r,i),o,s)}})),De(i,"removeEventListener",(function(e){return function(n,i,r,o){return e.call(this,n,i,r,o),e.call(this,n,t.__wrap(i),r,o)}})))}))}}}Ne.default=He
var Ue={},qe=e&&e.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){e.done?n(e.value):r(e.value).then(s,a)}l((i=i.apply(e,t||[])).next())}))},Ge=e&&e.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1]
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
Object.defineProperty(Ue,"__esModule",{value:!0}),Ue.BrowserTransport=void 0
var We=r,ze=We.Util.sanitize,Ve=We.Util.globalThisOrWindow
function Qe(e){return Object.entries(e)}var Je=function(){function e(e){void 0===e&&(e={}),this.headers={},this.headers=e}return e.prototype.defaultHeaders=function(){return this.headers},e.prototype.send=function(e,t){return qe(this,void 0,void 0,(function(){var n,i,r,o,s
return Ge(this,(function(a){switch(a.label){case 0:return n=e.headers?Qe(e.headers):[],i=this.defaultHeaders(),n.forEach((function(e){var t=e[0],n=e[1]
null!=t&&null!=n&&(i[String(t)]=String(n))})),r={method:e.method,headers:i},"POST"===e.method&&t&&(r.body="string"==typeof t?t:JSON.stringify(ze(t,e.maxObjectDepth))),[4,Ve().fetch(e.endpoint,r)]
case 1:return[4,(o=a.sent()).text()]
case 2:return s=a.sent(),[2,Promise.resolve({statusCode:o.status,body:s})]}}))}))},e}()
Ue.BrowserTransport=Je
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
var c=r,u=X,d=ue,f=l(be),h=l(Ee),p=l(Re),g=l(Ne),v=Ue,_=Ke,m=c.Util.merge,b=c.Util.filter,y=c.Util.objectIsExtensible,w=c.Util.globalThisOrWindow,k=function(){var e=w(),t=""
return null!=e.location&&(t=e.location.protocol+"//"+e.location.host),t},S=function(e){var t=e.split(".").slice(0,2).join(".")
return"https://js.honeybadger.io/v".concat(t,"/honeybadger-feedback-form.js")}
t.getUserFeedbackScriptUrl=S
var E=function(e){function n(t){void 0===t&&(t={})
var n=e.call(this,o({userFeedbackEndpoint:"https://api.honeybadger.io/v2/feedback",async:!0,maxErrors:null,projectRoot:k()},t),new v.BrowserTransport({"User-Agent":C()}))||this
return n.__errorsSent=0,n.__lastWrapErr=void 0,n.__lastNoticeId=void 0,n.__beforeNotifyHandlers=[function(e){return n.__exceedsMaxErrors()?(n.logger.debug("Dropping notice: max errors exceeded",e),!1):(e&&!e.url&&"undefined"!=typeof document&&(e.url=document.URL),n.__incrementErrorsCount(),!0)}],n.__afterNotifyHandlers=[function(e,t){t&&(n.__lastNoticeId=t.id)}],n}return i(n,e),n.prototype.configure=function(t){return void 0===t&&(t={}),e.prototype.configure.call(this,t)},n.prototype.resetMaxErrors=function(){return this.__errorsSent=0},n.prototype.factory=function(e){var t=new n(e)
return t.setNotifier(this.getNotifier()),t},n.prototype.checkIn=function(e){throw new Error("Honeybadger.checkIn() is not supported on the browser")},n.prototype.showUserFeedbackForm=function(e){return void 0===e&&(e={}),s(this,void 0,void 0,(function(){return a(this,(function(t){return new _.BrowserFeedbackForm(this.config,this.logger,this.getUserFeedbackSubmitUrl()).show(this.__lastNoticeId,e),[2]}))}))},n.prototype.getUserFeedbackSubmitUrl=function(){return(0,t.getUserFeedbackScriptUrl)(this.getVersion())},n.prototype.__buildPayload=function(t){var n,i={HTTP_USER_AGENT:void 0,HTTP_REFERER:void 0,HTTP_COOKIE:void 0}
"undefined"!=typeof navigator&&navigator.userAgent&&(i.HTTP_USER_AGENT=navigator.userAgent),"undefined"!=typeof document&&document.referrer.match(/\S/)&&(i.HTTP_REFERER=document.referrer),(n="string"==typeof t.cookies?(0,u.decodeCookie)(t.cookies):t.cookies)&&(i.HTTP_COOKIE=(0,u.encodeCookie)(b(n,this.config.filters)))
var r=e.prototype.__buildPayload.call(this,t)
return r.request.cgi_data=m(i,r.request.cgi_data),r},n.prototype.__wrap=function(e,t){void 0===t&&(t={})
var n=e
t||(t={})
try{if("function"!=typeof n)return n
if(!y(n))return n
if(!n.___hb){var i=this
n.___hb=function(){if(!u.preferCatch)return n.apply(this,arguments)
try{return n.apply(this,arguments)}catch(e){if(i.__lastWrapErr===e)throw e
throw i.__lastWrapErr=e,(0,d.ignoreNextOnError)(),i.addBreadcrumb(t.component?"".concat(t.component,": ").concat(e.name):e.name,{category:"error",metadata:{message:e.message,name:e.name,stack:e.stack}}),i.config.enableUncaught&&i.notify(e),e}}}return n.___hb.___hb=n.___hb,n.___hb}catch(e){return n}},n.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},n.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},n}(c.Client),x={name:"@honeybadger-io/js",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",version:"6.10.1"},C=function(){return"undefined"!=typeof navigator?"Honeybadger JS Browser Client ".concat(x.version,"; ").concat(navigator.userAgent):"Honeybadger JS Browser Client ".concat(x.version,"; n/a; n/a")},P=new E({__plugins:[(0,d.onError)(),(0,f.default)(),(0,p.default)(),(0,g.default)(),(0,h.default)(),c.Plugins.events()]})
P.setNotifier(x)
var $=r
Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return $.Types}}),t.default=P}(i)
var et=t(i)
return et}()),Vl.exports),Jl=Wl(Ql)
const Kl=["attackplayer.min.js","Auction-House-Monitor.user.js","Compra-%2526-Venda-de-Recursos-%25E2%259C%2585.user.js","Discord-Message-Checks-for-Updates.user.js","dynamically imported module","Fallen-Sword-Champion-and-Super-Elite-Alert.user.js","Fallen-Sword-Message-Alert.user.js","Fallen-Sword-Super-Elite-%2526-Crate-Notifier.user.js","Fallen-Sword-Super-Elite-Notifier.user.js","Fallen-Sword-Win%252FLoss-Checker-with-Buffs-and-Buff-Levels.user.js","Fallen-Sword-Win%252FLoss-Checker.user.js","Fallensword-GvG-Target-Checker-with-Button-and-Buff-Check.user.js","Fetch-Auction-and-Send-to-Discord.user.js","fs.min.js","GVG-and-Relics-Notifications.user.js","GvG-Initiate-Enhanced.user.js","GvG-List-v2.user.js","GVG%252FRelics-Discord.user.js","GVG%252FRelics-Notifications.user.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","New-Userscript.user.js","openuserjs.org","Permission denied to access object","play method is not allowed","Quick-Kill.user.js","se-searcher-v2-draft.user.js","Superelite-searcher.user.js","Titan-Quick-Kill.user.js","UFSG-dodatki.user.js","UnhandledPromiseRejectionWarning: 404","world.min.js","(reading '$$')"],Xl=e=>Kl.some((t=>e.includes(t)))
function Yl(e){if(Xl(e.message)||Xl(e.stack))return!1}function Zl(){!function(){Jl.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.145"})
const e=o()
e&&Jl.setContext({user_id:e}),Jl.afterNotify((e=>{if(e)return bs(`Honeybadger notification failed: ${e}`)})),Jl.beforeNotify(Yl)}()}var ec={}
function tc(e){return Array.isArray(e)}function nc(e,t,n,i){e instanceof EventTarget&&e.addEventListener(t,n,i)}function ic(e){Rl("betaOptIn")&&bs("sendException",e),Jl.notify(e,"sendException")}function rc(e,t){return e||t}const oc=[null]
function sc(e,t){return oc[e]&&oc[e].priority<oc[t].priority}function ac(e,t){const n=oc[e]
oc[e]=oc[t],oc[t]=n}function lc(e,t){return e?2*t:2*t+1}function cc(){if(1===oc.length)return
const e=oc[1].data,t=oc.pop()
return oc.length>1&&(oc[1]=t,function(e){let t=e
for(;2*t<oc.length;){const e=lc(!sc(2*t+1,2*t),t)
if(sc(t,e))break
ac(t,e),t=e}}(1)),e}function uc(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!sc(t,e))break
ac(t,e),t=e}}(oc.push({data:e,priority:t})-1)}let dc=!0
const fc="fshMessage"
let hc=0
function pc(){oc.length-1==0?dc=!0:(dc=!1,window.postMessage(fc,window.location.origin))}function gc(){const e=cc()
Dl(e)?e():function(e){Ds(e)||ic(`pop() was not a function (${typeof e})`)}(e)}function vc(e){const t=e.data
e.origin===window.location.origin&&t===fc&&function(){try{gc()}catch(e){Jl.notify(e,"taskFailure")}finally{pc()}}()}function _c(e,t,n,i){if(Dl(t)){hc||(nc(window,"message",vc),hc=!0)
const r=rc(i,window),o=rc(n,[])
uc(t.bind(r,...o),e),dc&&pc()}}function mc(e,t){return new URLSearchParams(e).get(t)}function bc(e){try{return mc(decodeURIComponent(window.location.search),e)}catch(e){return bs(e),""}}function yc(){}const wc=e=>e
function kc(e,t){for(const n in t)e[n]=t[n]
return e}function Sc(e){return e()}function Ec(){return Object.create(null)}function xc(e){e.forEach(Sc)}function Cc(e){return"function"==typeof e}function Pc(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let $c
function Tc(e,t){return e===t||($c||($c=document.createElement("a")),$c.href=t,e===$c.href)}function Lc(e,...t){if(null==e){for(const e of t)e(void 0)
return yc}const n=e.subscribe(...t)
return n.unsubscribe?()=>n.unsubscribe():n}function Ic(e){let t
return Lc(e,(e=>t=e))(),t}function Rc(e,t,n){e.$$.on_destroy.push(Lc(t,n))}function Oc(e,t,n,i){if(e){const r=Mc(e,t,n,i)
return e[0](r)}}function Mc(e,t,n,i){return e[1]&&i?kc(n.ctx.slice(),e[1](i(t))):n.ctx}function Fc(e,t,n,i){if(e[2]&&i){const r=e[2](i(n))
if(void 0===t.dirty)return r
if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length)
for(let i=0;i<n;i+=1)e[i]=t.dirty[i]|r[i]
return e}return t.dirty|r}return t.dirty}function Ac(e,t,n,i,r,o){if(r){const s=Mc(t,n,i,o)
e.p(s,r)}}function Nc(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32
for(let e=0;e<n;e++)t[e]=-1
return t}return-1}function jc(e){const t={}
for(const n in e)t[n]=!0
return t}function Dc(e){let t=!1
return function(...n){t||(t=!0,e.call(this,...n))}}function Bc(e){return null==e?"":e}function Hc(e){return e&&Cc(e.destroy)?e.destroy:yc}function Uc(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const qc="undefined"!=typeof window
let Gc=qc?()=>window.performance.now():()=>Date.now(),Wc=qc?e=>requestAnimationFrame(e):yc
const zc=new Set
function Vc(e){zc.forEach((t=>{t.c(e)||(zc.delete(t),t.f())})),0!==zc.size&&Wc(Vc)}function Qc(e,t){e.appendChild(t)}function Jc(e){if(!e)return document
const t=e.getRootNode?e.getRootNode():e.ownerDocument
return t&&t.host?t:e.ownerDocument}function Kc(e){const t=eu("style")
return t.textContent="/* empty */",function(e,t){Qc(e.head||e,t),t.sheet}(Jc(e),t),t.sheet}function Xc(e,t,n){e.insertBefore(t,n||null)}function Yc(e){e.parentNode&&e.parentNode.removeChild(e)}function Zc(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function eu(e){return document.createElement(e)}function tu(e){return document.createTextNode(e)}function nu(){return tu(" ")}function iu(){return tu("")}function ru(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function ou(e){return function(t){return t.preventDefault(),e.call(this,t)}}function su(e){return function(t){t.target===this&&e.call(this,t)}}function au(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function lu(e,t,n){const i=t.toLowerCase()
i in e?e[i]="boolean"==typeof e[i]&&""===n||n:t in e?e[t]="boolean"==typeof e[t]&&""===n||n:au(e,t,n)}function cu(e){return""===e?null:+e}function uu(e,t){t=""+t,e.data!==t&&(e.data=t)}function du(e,t){e.value=null==t?"":t}function fu(e,t,n,i){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function hu(e,t,n){for(let n=0;n<e.options.length;n+=1){const i=e.options[n]
if(i.__value===t)return void(i.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}function pu(e){const t=e.querySelector(":checked")
return t&&t.__value}let gu
function vu(){if(void 0===gu){gu=!1
try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){gu=!0}}return gu}function _u(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative")
const n=eu("iframe")
n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1
const i=vu()
let r
return i?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=ru(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=ru(n.contentWindow,"resize",t),t()}),Qc(e,n),()=>{(i||r&&n.contentWindow)&&r(),Yc(n)}}function mu(e,t,n){e.classList.toggle(t,!!n)}function bu(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}class yu{is_svg=!1
e=void 0
n=void 0
t=void 0
a=void 0
constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){var i
this.e||(this.is_svg?this.e=(i=t.nodeName,document.createElementNS("http://www.w3.org/2000/svg",i)):this.e=eu(11===t.nodeType?"TEMPLATE":t.nodeName),this.t="TEMPLATE"!==t.tagName?t:t.content,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)Xc(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(Yc)}}function wu(e,t){return new e(t)}const ku=new Map
let Su,Eu=0
function xu(e,t,n,i,r,o,s,a=0){const l=16.666/i
let c="{\n"
for(let e=0;e<=1;e+=l){const i=t+(n-t)*o(e)
c+=100*e+`%{${s(i,1-i)}}\n`}const u=c+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length
for(;n--;)t=(t<<5)-t^e.charCodeAt(n)
return t>>>0}(u)}_${a}`,f=Jc(e),{stylesheet:h,rules:p}=ku.get(f)||function(e,t){const n={stylesheet:Kc(t),rules:{}}
return ku.set(e,n),n}(f,e)
p[d]||(p[d]=!0,h.insertRule(`@keyframes ${d} ${u}`,h.cssRules.length))
const g=e.style.animation||""
return e.style.animation=`${g?`${g}, `:""}${d} ${i}ms linear ${r}ms 1 both`,Eu+=1,d}function Cu(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-i.length
r&&(e.style.animation=i.join(", "),Eu-=r,Eu||Wc((()=>{Eu||(ku.forEach((e=>{const{ownerNode:t}=e.stylesheet
t&&Yc(t)})),ku.clear())})))}function Pu(e){Su=e}function $u(){if(!Su)throw new Error("Function called outside component initialization")
return Su}function Tu(e){$u().$$.on_mount.push(e)}function Lu(e){$u().$$.after_update.push(e)}function Iu(e){$u().$$.on_destroy.push(e)}function Ru(){const e=$u()
return(t,n,{cancelable:i=!1}={})=>{const r=e.$$.callbacks[t]
if(r){const o=bu(t,n,{cancelable:i})
return r.slice().forEach((t=>{t.call(e,o)})),!o.defaultPrevented}return!0}}function Ou(e,t){const n=e.$$.callbacks[t.type]
n&&n.slice().forEach((e=>e.call(this,t)))}const Mu=[],Fu=[]
let Au=[]
const Nu=[],ju=Promise.resolve()
let Du=!1
function Bu(){Du||(Du=!0,ju.then(Vu))}function Hu(){return Bu(),ju}function Uu(e){Au.push(e)}function qu(e){Nu.push(e)}const Gu=new Set
let Wu,zu=0
function Vu(){if(0!==zu)return
const e=Su
do{try{for(;zu<Mu.length;){const e=Mu[zu]
zu++,Pu(e),Qu(e.$$)}}catch(e){throw Mu.length=0,zu=0,e}for(Pu(null),Mu.length=0,zu=0;Fu.length;)Fu.pop()()
for(let e=0;e<Au.length;e+=1){const t=Au[e]
Gu.has(t)||(Gu.add(t),t())}Au.length=0}while(Mu.length)
for(;Nu.length;)Nu.pop()()
Du=!1,Gu.clear(),Pu(e)}function Qu(e){if(null!==e.fragment){e.update(),xc(e.before_update)
const t=e.dirty
e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Uu)}}function Ju(e,t,n){e.dispatchEvent(bu(`${t?"intro":"outro"}${n}`))}const Ku=new Set
let Xu
function Yu(){Xu={r:0,c:[],p:Xu}}function Zu(){Xu.r||xc(Xu.c),Xu=Xu.p}function ed(e,t){e&&e.i&&(Ku.delete(e),e.i(t))}function td(e,t,n,i){if(e&&e.o){if(Ku.has(e))return
Ku.add(e),Xu.c.push((()=>{Ku.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}else i&&i()}const nd={duration:0}
function id(e,t,n,i){let r,o=t(e,n,{direction:"both"}),s=i?0:1,a=null,l=null,c=null
function u(){c&&Cu(e,c)}function d(e,t){const n=e.b-s
return t*=Math.abs(n),{a:s,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function f(t){const{delay:n=0,duration:i=300,easing:f=wc,tick:h=yc,css:p}=o||nd,g={start:Gc()+n,b:t}
t||(g.group=Xu,Xu.r+=1),"inert"in e&&(t?void 0!==r&&(e.inert=r):(r=e.inert,e.inert=!0)),a||l?l=g:(p&&(u(),c=xu(e,s,t,i,n,f,p)),t&&h(0,1),a=d(g,i),Uu((()=>Ju(e,t,"start"))),function(e){let t
0===zc.size&&Wc(Vc),new Promise((n=>{zc.add(t={c:e,f:n})}))}((t=>{if(l&&t>l.start&&(a=d(l,i),l=null,Ju(e,a.b,"start"),p&&(u(),c=xu(e,s,a.b,a.duration,0,f,o.css))),a)if(t>=a.end)h(s=a.b,1-s),Ju(e,a.b,"end"),l||(a.b?u():--a.group.r||xc(a.group.c)),a=null
else if(t>=a.start){const e=t-a.start
s=a.a+a.d*f(e/a.duration),h(s,1-s)}return!(!a&&!l)})))}return{run(e){Cc(o)?(Wu||(Wu=Promise.resolve(),Wu.then((()=>{Wu=null}))),Wu).then((()=>{o=o({direction:e?"in":"out"}),f(e)})):f(e)},end(){u(),a=l=null}}}function rd(e,t){const n=t.token={}
function i(e,i,r,o){if(t.token!==n)return
t.resolved=o
let s=t.ctx
void 0!==r&&(s=s.slice(),s[r]=o)
const a=e&&(t.current=e)(s)
let l=!1
t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==i&&e&&(Yu(),td(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),Zu())})):t.block.d(1),a.c(),ed(a,1),a.m(t.mount(),t.anchor),l=!0),t.block=a,t.blocks&&(t.blocks[i]=a),l&&Vu()}if(!(r=e)||"object"!=typeof r&&"function"!=typeof r||"function"!=typeof r.then){if(t.current!==t.then)return i(t.then,1,t.value,e),!0
t.resolved=e}else{const n=$u()
if(e.then((e=>{Pu(n),i(t.then,1,t.value,e),Pu(null)}),(e=>{if(Pu(n),i(t.catch,2,t.error,e),Pu(null),!t.hasCatch)throw e})),t.current!==t.pending)return i(t.pending,0),!0}var r}function od(e,t,n){const i=t.slice(),{resolved:r}=e
e.current===e.then&&(i[e.value]=r),e.current===e.catch&&(i[e.error]=r),e.block.p(i,n)}function sd(e){return void 0!==e?.length?e:Array.from(e)}function ad(e,t){e.d(1),t.delete(e.key)}function ld(e,t){td(e,1,1,(()=>{t.delete(e.key)}))}function cd(e,t,n,i,r,o,s,a,l,c,u,d){let f=e.length,h=o.length,p=f
const g={}
for(;p--;)g[e[p].key]=p
const v=[],_=new Map,m=new Map,b=[]
for(p=h;p--;){const e=d(r,o,p),i=n(e)
let a=s.get(i)
a?b.push((()=>a.p(e,t))):(a=c(i,e),a.c()),_.set(i,v[p]=a),i in g&&m.set(i,Math.abs(p-g[i]))}const y=new Set,w=new Set
function k(e){ed(e,1),e.m(a,u),s.set(e.key,e),u=e.first,h--}for(;f&&h;){const t=v[h-1],n=e[f-1],i=t.key,r=n.key
t===n?(u=t.first,f--,h--):_.has(r)?!s.has(i)||y.has(i)?k(t):w.has(r)?f--:m.get(i)>m.get(r)?(w.add(i),k(t)):(y.add(r),f--):(l(n,s),f--)}for(;f--;){const t=e[f]
_.has(t.key)||l(t,s)}for(;h;)k(v[h-1])
return xc(b),v}function ud(e,t,n){const i=e.$$.props[t]
void 0!==i&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function dd(e){e&&e.c()}function fd(e,t,n){const{fragment:i,after_update:r}=e.$$
i&&i.m(t,n),Uu((()=>{const t=e.$$.on_mount.map(Sc).filter(Cc)
e.$$.on_destroy?e.$$.on_destroy.push(...t):xc(t),e.$$.on_mount=[]})),r.forEach(Uu)}function hd(e,t){const n=e.$$
null!==n.fragment&&(!function(e){const t=[],n=[]
Au.forEach((i=>-1===e.indexOf(i)?t.push(i):n.push(i))),n.forEach((e=>e())),Au=t}(n.after_update),xc(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function pd(e,t,n,i,r,o,s=null,a=[-1]){const l=Su
Pu(e)
const c=e.$$={fragment:null,ctx:[],props:o,update:yc,not_equal:r,bound:Ec(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:Ec(),dirty:a,skip_bound:!1,root:t.target||l.$$.root}
s&&s(c.root)
let u=!1
if(c.ctx=n?n(e,t.props||{},((t,n,...i)=>{const o=i.length?i[0]:n
return c.ctx&&r(c.ctx[t],c.ctx[t]=o)&&(!c.skip_bound&&c.bound[t]&&c.bound[t](o),u&&function(e,t){-1===e.$$.dirty[0]&&(Mu.push(e),Bu(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n})):[],c.update(),u=!0,xc(c.before_update),c.fragment=!!i&&i(c.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target)
c.fragment&&c.fragment.l(e),e.forEach(Yc)}else c.fragment&&c.fragment.c()
t.intro&&ed(e.$$.fragment),fd(e,t.target,t.anchor),Vu()}Pu(l)}class gd{$$=void 0
$$set=void 0
$destroy(){hd(this,1),this.$destroy=yc}$on(e,t){if(!Cc(t))return yc
const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[])
return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t
this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const vd=[]
function _d(e,t=yc){let n
const i=new Set
function r(t){if(Pc(e,t)&&(e=t,n)){const t=!vd.length
for(const t of i)t[1](),vd.push(t,e)
if(t){for(let e=0;e<vd.length;e+=2)vd[e][0](vd[e+1])
vd.length=0}}}function o(t){r(t(e))}return{set:r,update:o,subscribe:function(s,a=yc){const l=[s,a]
return i.add(l),1===i.size&&(n=t(r,o)||yc),s(e),()=>{i.delete(l),0===i.size&&n&&(n(),n=null)}}}}function md(e,t,n){const i=!Array.isArray(e),r=i?[e]:e
if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const o=t.length<2
return s=(e,n)=>{let s=!1
const a=[]
let l=0,c=yc
const u=()=>{if(l)return
c()
const r=t(i?a[0]:a,e,n)
o?e(r):c=Cc(r)?r:yc},d=r.map(((e,t)=>Lc(e,(e=>{a[t]=e,l&=~(1<<t),s&&u()}),(()=>{l|=1<<t}))))
return s=!0,u(),function(){xc(d),c(),s=!1}},{subscribe:_d(n,s).subscribe}
var s}const bd=_d("")
function yd(e){const t=e-1
return t*t*t+1}function wd(e,{delay:t=0,duration:n=400,easing:i=wc}={}){const r=+getComputedStyle(e).opacity
return{delay:t,duration:n,easing:i,css:e=>"opacity: "+e*r}}function kd(e,{delay:t=0,duration:n=400,easing:i=yd,x:r=0,y:o=0,opacity:s=0}={}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-s),[d,f]=Uc(r),[h,p]=Uc(o)
return{delay:t,duration:n,easing:i,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*d}${f}, ${(1-e)*h}${p});\n\t\t\topacity: ${l-u*t}`}}function Sd(e,{delay:t=0,duration:n=400,easing:i=yd,axis:r="y"}={}){const o=getComputedStyle(e),s=+o.opacity,a="y"===r?"height":"width",l=parseFloat(o[a]),c="y"===r?["top","bottom"]:["left","right"],u=c.map((e=>`${e[0].toUpperCase()}${e.slice(1)}`)),d=parseFloat(o[`padding${u[0]}`]),f=parseFloat(o[`padding${u[1]}`]),h=parseFloat(o[`margin${u[0]}`]),p=parseFloat(o[`margin${u[1]}`]),g=parseFloat(o[`border${u[0]}Width`]),v=parseFloat(o[`border${u[1]}Width`])
return{delay:t,duration:n,easing:i,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*s};${a}: ${e*l}px;padding-${c[0]}: ${e*d}px;padding-${c[1]}: ${e*f}px;margin-${c[0]}: ${e*h}px;margin-${c[1]}: ${e*p}px;border-${c[0]}-width: ${e*g}px;border-${c[1]}-width: ${e*v}px;`}}function Ed(e){let t,n,i,r,o,s,a
return{c(){t=eu("div"),n=eu("p"),i=tu(e[0]),au(n,"class","svelte-1c416no"),au(t,"role","alert"),au(t,"class","svelte-1c416no"),fu(t,"transform",e[2])},m(r,l){Xc(r,t,l),Qc(t,n),Qc(n,i),o=!0,s||(a=ru(t,"click",e[4]),s=!0)},p(e,n){(!o||1&n)&&uu(i,e[0]),4&n&&fu(t,"transform",e[2])},i(e){o||(e&&Uu((()=>{o&&(r||(r=id(t,kd,{delay:250,duration:300,x:0,y:-100,opacity:.5},!0)),r.run(1))})),o=!0)},o(e){e&&(r||(r=id(t,kd,{delay:250,duration:300,x:0,y:-100,opacity:.5},!1)),r.run(0)),o=!1},d(e){e&&Yc(t),e&&r&&r.end(),s=!1,a()}}}function xd(e){let t,n=e[1]&&Ed(e)
return{c(){n&&n.c(),t=iu()},m(e,i){n&&n.m(e,i),Xc(e,t,i)},p(e,[i]){e[1]?n?(n.p(e,i),2&i&&ed(n,1)):(n=Ed(e),n.c(),ed(n,1),n.m(t.parentNode,t)):n&&(Yu(),td(n,1,1,(()=>{n=null})),Zu())},i(e){ed(n)},o(e){td(n)},d(e){e&&Yc(t),n&&n.d(e)}}}function Cd(e,t,n){let i
Rc(e,bd,(e=>n(0,i=e)))
let{ms:r=3e3}=t,o=!1,s=0,a=""
const l=(e,t)=>{clearTimeout(s),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
n(2,a=`translate(${t}px, ${e.offsetTop}px)`),n(1,o=!0)}(),t>0&&(s=setTimeout((()=>{var e
n(1,o=!1),i="",e=i,bd.set(e)}),t))):n(1,o=!1)}
Iu((()=>clearTimeout(s)))
return e.$$set=e=>{"ms"in e&&n(3,r=e.ms)},e.$$.update=()=>{9&e.$$.dirty&&l(i,r)},[i,o,a,r,()=>{n(1,o=!1)}]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4")
class Pd extends gd{constructor(e){super(),pd(this,e,Cd,xd,Pc,{ms:3})}}let $d
function Td(e){e&&(!function(){if(!$d)$d=!0,new Pd({target:document.body})}(),bd.set(e))}function Ld(e,t){return Array.from(e,t)}function Id(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function Rd(e,t){return Ld(Id(e,t))}function Od(e){return e.trim()}function Md(e){const t=n(e)
if(Ml(t))return Od(t)}function Fd(e,t){return Md(t).includes(e)}function Ad(e,...t){return(...n)=>e(...t,...n)}let Nd=0,jd=0,Dd=0
function Bd(){return Nd||(Nd=t("pCL")),Nd}function Hd(){return jd||(jd=t("pCC")),jd}function Ud(){const e=Rd("a",Bd()).filter(function(e){return Ad(Fd,e)}("message"))
e.length&&async function(){const e=new Audio(Rl("defaultMessageSound"))
try{await e.play()}catch(e){Td("Message Sound Not Allowed")}}()}function qd(e,t,n,i){var r
nc(e,t,n,{once:!0,...(r=i,Ol(r)?{capture:r}:r)})}let Gd=0,Wd=0,zd=0,Vd=0,Qd=0,Jd=0
function Kd(e){Wd=e.clientX,zd=e.clientY}function Xd(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(Gd,null).transform)
Vd=e[0]-Wd,Qd=e[1]-zd}function Yd(e){e.clientX===Wd&&e.clientY===zd||(Gd.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+Vd).toString()}, ${(e.clientY+Qd).toString()})`,Kd(e))}function Zd(e){return function(e){const t=performance.now()
t-Jd>16&&(Yd(e),Jd=t)}(e),e.preventDefault(),!1}function ef(e){return Yd(e),function(e,t,n,i){e instanceof EventTarget&&e.removeEventListener(t,n,i)}(document.body,"dragover",Zd),e.preventDefault(),!1}function tf(e,t){!function(e,t){Gd=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),Kd(t),Xd(),Jd=0,t.dataTransfer.setData("text/plain",""),nc(document.body,"dragover",Zd),qd(document.body,"drop",ef)}function nf(e,t){e.draggable=!0,nc(e,"dragstart",Ad(tf,t))}function rf(e){return String(e).replaceAll(" ","_")}const of={}
function sf(e,t,n){if(!e)return
const i=function(e,t){let n=rf(e)
return t&&(n+=`__${rf(t)}`),n}(e,t),r=function(e,t){let n=e
return t&&(n+=`__${rf(t)}`),n}(i,n)
of[r]||(of[r]=!0,ys(i,function(e){return e?{eventLabel:e}:null}(n)))}let af=0
function lf(e){const t=l(/\sguildId: (?<id>\d{1,6}),/,n(e))
t&&(af=Number(t))}function cf(){return af||Rd("script",document.body).forEach(lf),af}function uf(e){return Object.entries(e)}function df(e,t,[n,i]){Bl(i)&&null!==i?e(t[n],i):t[n]=i}function ff(e,t){uf(t).forEach(Ad(df,ff,e))}function hf(e,t){const n=document.createElement(e)
return t&&ff(n,t),n}function pf(e){return hf("div",e)}function gf(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function vf(e,t){return Ld(gf(e,t))}function _f(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function mf(e,t){t instanceof Element&&(t.innerHTML=String(e))}const bf={id:"content",style:{display:"none"}},yf={width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}
function wf(e){let n=t("content")
n?mf("",n):(n=pf(bf),_f(document.body,n)),$(n).dialog(yf),vf("ui-dialog-titlebar-close").forEach((e=>e.blur())),e(n)}async function kf(e){(await e).default()}function Sf(){kf(import("./buffLog-DOU_lSNT.js"))}function Ef(){kf(import("./combatLog-CgPM_4iv.js"))}function xf(){kf(import("./creatureLog-BVMun_A-.js"))}function Cf(){kf(import("./fsboxlog-D8-zpuAA.js"))}function Pf(){kf(import("./guildLog-jdWEpWIs.js"))}function $f(){kf(import("./guildTracker-Dz0fn2Ce.js"))}async function Tf(e){(await import("./injectAuctionSearch-Bxqklk4D.js")).default(e)}async function Lf(e){(await import("./findBuffs-B3W5j8cr.js")).injectFindBuffs(e)}async function If(e){(await import("./findBuffs-B3W5j8cr.js")).injectFindOther(e)}async function Rf(e){(await import("./injectOnlinePlayers-D1otMMNm.js")).default(e)}function Of(){kf(import("./potReport-DWBrnA4Y.js"))}function Mf(){kf(import("./quickExtract-CkfEYR8Y.js"))}function Ff(){kf(import("./quickLinksManager-BJdNjNRJ.js"))}async function Af(e){(await import("./quickWear-BWtuFrPo.js")).default(e)}function Nf(){kf(import("./recipeMgr-BiDd8gRk.js"))}function jf(){kf(import("./reliclist-D5aPO56c.js"))}function Df(){kf(import("./superelite-CKwGVCQw.js"))}function Bf(e){return new Promise((t=>{setTimeout(t,e)}))}function Hf(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class Uf extends Error{constructor([e,t,n,i],...r){super(function(e,t,n,i){const r=`${t.status} ${t.statusText} - `
if(t.statusText===i.toString())return r+Hf(e)
const o=`${r+n} ${i} - ${Hf(e)}`
return"parsererror"===n?`${o} - ${t.responseText}`:o}(e,t,n,i),...r),Error.captureStackTrace&&Error.captureStackTrace(this,Uf),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=i}}function qf(e){nc(window,"beforeunload",(()=>e.abort()))}const Gf=900
let Wf=0
const zf=5
let Vf=0
async function Qf(){Vf<zf-$.active&&performance.now()-Wf>=Gf?(Vf=zf-$.active,Wf=performance.now()):await Bf(100)}async function Jf(e,t=10){await async function(){for(;Vf<1;)await Qf()
Vf-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=qf,$.ajax(t).fail(((e,t,n)=>{e.textStatus=t,e.errorThrown=n}))}(e)}catch(n){if(t&&n.status>500)return Jf(e,t-1)
!function(e,t){if(![0,500,503].includes(t.status))throw new Uf([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}function Kf(e){return ff(e,{url:ea,data:{no_mobile:1}}),Jf(e)}async function Xf(e){return Hl(await Kf({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function Yf(e){return Xf({cmd:"export",...e})}function Zf(){return Yf({inc_tagged:"1",subcmd:"guild_store"})}function eh(e){return hf("a",e)}function th(e){e instanceof Element&&e.click()}function nh(e,t){const n=URL.createObjectURL(e),i=eh({download:t,href:n,style:{display:"none"}})
_f(document.body,i),th(i),document.body.removeChild(i),setTimeout((()=>{URL.revokeObjectURL(n)}),0)}async function ih(e,t){return Hl(await Jf({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function rh(e){return ih(e,{method:"POST"})}function oh(e,t){const n=[]
for(let i=0;i<t.length;i+=e)n.push(t.slice(i,i+e))
return n}let sh,ah=null
function lh(){const e=t("holdtext")
if(e&&!ah){const t=l(/fallensword.com\/\?ref=(?<id>\d+)/,n(e))
t&&(ah=Number(t))}return ah}function ch(e){return new Promise(((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)}))}function uh(){return sh||(sh=function(e,t){const n=indexedDB.open(e)
n.onupgradeneeded=()=>n.result.createObjectStore(t)
const i=ch(n)
return(e,n)=>i.then((i=>n(i.transaction(t,e).objectStore(t))))}("keyval-store","keyval")),sh}async function dh(e,t){try{return await function(e,t=uh()){return t("readonly",(t=>ch(t.get(e))))}(e,t)}catch(e){bs(e)}}async function fh(e,t,n){try{return await function(e,t,n=uh()){return n("readwrite",(n=>(n.put(t,e),ch(n.transaction))))}(e,t,n)}catch(e){bs(e)}}const hh=({folder_id:e})=>-2!==(e??-2),ph=({folder_id:e})=>-2===e,gh=({player_id:e})=>-1!==(e??-1),vh=({player_id:e})=>e,_h=({player_id:e})=>-1===e,mh=([e,t,n])=>oh(20,e).map((e=>[e,t,n])),bh=e=>({inv_id:t})=>t===e.inv_id,yh=(e,t)=>e.attributes.find((({id:e})=>e===t))?.value??0,wh=(e,t)=>({...t,armor:yh(e,2),attack:yh(e,0),damage:yh(e,4),defense:yh(e,1),hp:yh(e,3),set_name:e.set_name??""}),kh=(e,t)=>t.forge||t.stats?.set_name,Sh=e=>e?.s?e.r.items:[],Eh=e=>[[e.filter(hh),lh,0],[e.filter(ph),lh,1],[e.filter(gh),vh,7],[e.filter(_h),lh,4]].flatMap(mh)
function xh(e){return function(){const t=this.data(),n=e.find(bh(t))
n?.attributes&&(t.stats=wh(n,t.stats),this.invalidate())}}const Ch=async()=>await dh(`fsh_${ec.subcmd}_cache`)??[],Ph=e=>fh(`fsh_${ec.subcmd}_cache`,e),$h=e=>t=>e.every((e=>e.inv_id!==t.inv_id))
async function Th(e,t,n){const i=await(r={item_id:e.map((({item_id:e})=>e)),inv_id:e.map((({inv_id:e})=>e)),p:e.map(t),t:e.map((()=>n))},rh({cmd:"fetchitem",compare:0,...r}))
var r
return i?.s&&(i.r.items=((e,t)=>t.map(((t,n)=>({...t,inv_id:e[n].inv_id}))))(e,i.r.items),await async function(e){const t=(await Ch()).filter($h(e))
await Ph(t.concat(e))}(i.r.items)),i}const Lh=(e,t)=>{return t.filter((n=Ld(e.data()),e=>n.some((t=>e.inv_id===t.inv_id))))
var n}
async function Ih(e){const t=e.rows(kh),n=await async function(e){const t=await Ch(),n=Lh(e,t)
return await Ph(n),n}(t)
t.every(xh(n))}async function Rh(e){const t=new DataTable(e)
await Ih(t),t.draw()}const Oh=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],Mh=e=>{return[...Oh(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??"",t?.set_attack??"",t?.set_defense??"",t?.set_armor??"",t?.set_hp??"",t?.set_damage??""]),e.cached].join(",")
var t}
function Fh(e){return()=>wf(e)}var Ah=[{section:"Character",menu:[{label:"Buff Log",fn:Sf},{label:"Combat Log",fn:Ef},{label:"Creature Log",fn:xf},{label:"Recipe Manager",fn:Nf},{label:"Quick Links",fn:Ff},{label:"Inventory Manager",href:`${ga}invmanagernew`}]},{section:"Actions",menu:[{label:"Find Buffs",fn:Fh(Lf)},{label:"Find Other",fn:Fh(If)},{label:"Online Players",fn:Fh(Rf)},{label:"AH Quick Search",fn:Fh(Tf)}]},...cf()?[{section:"Guild",menu:[{label:"Guild Inventory",href:`${ga}guildinvmgr`},{label:"New Guild Log",fn:Pf},{label:"Merc Hunter",fn:function(){kf(import("./mercs-Ctb7wlx-.js"))}},{label:"Pot Report",fn:Of},{label:"Guild Tracker",fn:$f}]}]:[],{section:"Extra",menu:[{label:"Quick Extract",fn:Mf},{label:"Quick Wear",fn:Fh(Af)},{label:"FS Box Log",fn:Cf},{label:"SE Tracker",fn:Df}]},...Rl("betaOptIn")&&cf()?[{section:"Beta Features",menu:[{label:"Relic List",fn:jf,beta:!0},{label:"GS Export",fn:async function(){if(!cf())return
const e=await Zf(),t=await dh("fsh_guildinvmgr_cache")??[],n=e.items.map((e=>t=>{const n=e.find((({inv_id:e})=>e===t.inv_id))
return n?.attributes?{...t,stats:{...t.stats,armor:yh(n,2),attack:yh(n,0),damage:yh(n,4),defense:yh(n,1),hp:yh(n,3),set_name:n.set_name??"",...n.set_name&&{set_armor:yh(n.set_bonuses,2)},...n.set_name&&{set_attack:yh(n.set_bonuses,0)},...n.set_name&&{set_damage:yh(n.set_bonuses,4)},...n.set_name&&{set_defense:yh(n.set_bonuses,1)},...n.set_name&&{set_hp:yh(n.set_bonuses,3)}},cached:!0}:{...t,cached:!1}})(t))
var i
nh((i=`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name,set_attack,set_defense,set_armor,set_hp,set_damage,cached\n${(e=>e.map(Mh).join("\n"))(n)}\n`,new Blob([i],{type:"text/csv"})),"gs_export.csv")},beta:!0},{label:"Who's Got What",fn:function(){kf(import("./whosGotWhat-BaXksDtv.js"))},beta:!0}]}]:[],{section:"FSH developer quick links",menu:[{playerId:1963510,playerName:"PointyHair"},{playerId:1674838,playerName:"Lusterless"}]}]
function Nh(e,t,n){const i=e.slice()
return i[7]=t[n],i}function jh(e,t,n){const i=e.slice()
return i[10]=t[n],i}function Dh(e){let t,n,i,r,o
function s(){return e[5](e[10])}return{c(){t=eu("button"),t.textContent="PM",n=nu(),i=eu("a"),i.textContent=`${e[10].playerName}`,au(t,"type","button"),au(t,"class","helperDevBtn svelte-8sy7i5"),au(i,"href",ua+"menuItem.playerId"),au(i,"class","svelte-8sy7i5")},m(e,a){Xc(e,t,a),Xc(e,n,a),Xc(e,i,a),r||(o=ru(t,"click",s),r=!0)},p(t,n){e=t},d(e){e&&(Yc(t),Yc(n),Yc(i)),r=!1,o()}}}function Bh(e){let t,n,i
function r(){return e[4](e[10])}return{c(){t=eu("a"),t.textContent=`${e[10].label}`,au(t,"href",e[10].href),au(t,"class","svelte-8sy7i5")},m(e,o){Xc(e,t,o),n||(i=ru(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&Yc(t),n=!1,i()}}}function Hh(e){let t,n,i
function r(){return e[3](e[10])}return{c(){t=eu("button"),t.textContent=`${e[10].label}`,au(t,"type","button"),au(t,"class","svelte-8sy7i5")},m(e,o){Xc(e,t,o),n||(i=ru(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&Yc(t),n=!1,i()}}}function Uh(e){let t,n
let i=function(e,t){return e[10].fn?Hh:e[10].href?Bh:e[10].playerName?Dh:void 0}(e),r=i&&i(e),o=e[10].beta&&function(e){let t
return{c(){t=eu("sup"),t.textContent="beta",au(t,"class","fshRed")},m(e,n){Xc(e,t,n)},d(e){e&&Yc(t)}}}()
return{c(){t=eu("li"),r&&r.c(),n=nu(),o&&o.c()},m(e,i){Xc(e,t,i),r&&r.m(t,null),Qc(t,n),o&&o.m(t,null)},p(e,t){r&&r.p(e,t)},d(e){e&&Yc(t),r&&r.d(),o&&o.d()}}}function qh(e){let t,n,i,r,o=sd(e[7].menu),s=[]
for(let t=0;t<o.length;t+=1)s[t]=Uh(jh(e,o,t))
return{c(){t=eu("h2"),t.textContent=`${e[7].section}`,n=nu(),i=eu("ul")
for(let e=0;e<s.length;e+=1)s[e].c()
r=nu(),au(t,"class","svelte-8sy7i5")},m(e,o){Xc(e,t,o),Xc(e,n,o),Xc(e,i,o)
for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(i,null)
Qc(i,r)},p(e,t){if(7&t){let n
for(o=sd(e[7].menu),n=0;n<o.length;n+=1){const a=jh(e,o,n)
s[n]?s[n].p(a,t):(s[n]=Uh(a),s[n].c(),s[n].m(i,r))}for(;n<s.length;n+=1)s[n].d(1)
s.length=o.length}},d(e){e&&(Yc(t),Yc(n),Yc(i)),Zc(s,e)}}}function Gh(e){let t,n=sd(Ah),i=[]
for(let t=0;t<n.length;t+=1)i[t]=qh(Nh(e,n,t))
return{c(){for(let e=0;e<i.length;e+=1)i[e].c()
t=iu()},m(e,n){for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,n)
Xc(e,t,n)},p(e,[r]){if(7&r){let o
for(n=sd(Ah),o=0;o<n.length;o+=1){const s=Nh(e,n,o)
i[o]?i[o].p(s,r):(i[o]=qh(s),i[o].c(),i[o].m(t.parentNode,t))}for(;o<i.length;o+=1)i[o].d(1)
i.length=n.length}},i:yc,o:yc,d(e){e&&Yc(t),Zc(i,e)}}}function Wh(e){const t=Ru()
function n(e){sf("helperMenu",e)}function i(e,i){Dl(i)&&(n(e),t("toggle"),i())}function r(e){t("toggle"),n("sendMsg"),window.openQuickMsgDialog(e)}return[n,i,r,e=>i(e.label,e.fn),e=>n(e.label),e=>r(e.playerName)]}class zh extends gd{constructor(e){super(),pd(this,e,Wh,Gh,Pc,{})}}function Vh(e){let t,n,i,r
return n=new zh({}),n.$on("toggle",e[4]),{c(){t=eu("div"),dd(n.$$.fragment),au(t,"class","modal svelte-gt76l6")},m(e,i){Xc(e,t,i),fd(n,t,null),r=!0},p:yc,i(e){r||(ed(n.$$.fragment,e),e&&Uu((()=>{r&&(i||(i=id(t,wd,{duration:100},!0)),i.run(1))})),r=!0)},o(e){td(n.$$.fragment,e),e&&(i||(i=id(t,wd,{duration:100},!1)),i.run(0)),r=!1},d(e){e&&Yc(t),hd(n),e&&i&&i.end()}}}function Qh(e){let t,n,i,r,o,s,a=e[1]&&Vh(e)
return{c(){t=eu("div"),n=eu("button"),n.textContent="Helper Menu",i=nu(),a&&a.c(),au(n,"type","button"),au(n,"class","toggle svelte-gt76l6"),mu(n,"helper-menu-move",e[3]),au(t,"class","helper-menu svelte-gt76l6"),mu(t,"helper-menu-fixed",e[2])},m(l,c){Xc(l,t,c),Qc(t,n),Qc(t,i),a&&a.m(t,null),e[5](t),r=!0,o||(s=ru(n,"click",e[4]),o=!0)},p(e,[n]){e[1]?a?(a.p(e,n),2&n&&ed(a,1)):(a=Vh(e),a.c(),ed(a,1),a.m(t,null)):a&&(Yu(),td(a,1,1,(()=>{a=null})),Zu())},i(e){r||(ed(a),r=!0)},o(e){td(a),r=!1},d(n){n&&Yc(t),a&&a.d(),e[5](null),o=!1,s()}}}function Jh(e,t,n){const i=Rl("keepHelperMenuOnScreen"),r=Rl("draggableHelperMenu")
let o=0
Tu((()=>{r&&nf(o)}))
let s=!1
return[o,s,i,r,function(){n(1,s=!s)},function(e){Fu[e?"unshift":"push"]((()=>{o=e,n(0,o)}))}]}class Kh extends gd{constructor(e){super(),pd(this,e,Jh,Qh,Pc,{})}}function Xh(){const e=Ul(".mainbody")
e&&function(e,t){new Kh({target:t.parentElement,props:{props:e}})}({},e)}function Yh(e){return(new DOMParser).parseFromString(e,"text/html")}function Zh(e){return Kf({data:e})}async function ep(e){const t=await Zh(e)
if(t)return Yh(t)}function tp(e){const n=t("info-msg",e)
if(n){const e=n.innerHTML
return e?e.replace(/<br.*/,""):""}}let np=0
const ip=()=>np
function rp(){np=Rl("sendGoldonWorld")}async function op(){if(!ip())return
sf("NewMap","doSendGold")
const e=await ep({cmd:"trade",subcmd:"sendgold",xc:window.ajaxXC,target_username:$("#HelperSendTo").html(),gold_amount:$("#HelperSendAmt").html().replace(/[^\d]/g,"")})
e&&function(e){const t=tp(e)
"You successfully sent gold!"!==t&&""!==t||(Nl("currentGoldSentTotal",parseInt(Rl("currentGoldSentTotal"),10)+parseInt(Rl("goldAmount"),10)),GameData.fetch(Za))}(e)}function sp(e){window.location=e}function ap(e){Rl("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function lp(e){sf("keyHandler",e)}function cp(e){return e?.toLowerCase?.()}function up(e,t){return cp(e)<cp(t)?-1:cp(e)>cp(t)?1:0}function dp(e){return ih(e,{method:"GET"})}function fp(e){return dp({cmd:"profile",...e})}async function hp(){const e=await fp({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort(((e,t)=>up(e.name,t.name)))}:e}function pp(e,t,...n){return e(...n)}function gp(){return pp(hp)}const vp=[e=>e?.s,(e,t)=>e.r?.length>t]
async function _p(e){const t=await gp()
if(((e,t)=>vp.every((n=>n(t,e))))(e,t)){lp("changeCombatSet")
const n=t.r[e].id
ap("2"),sp(`${ca+ia}managecombatset&submit=Use&combatSetId=${n}`)}}function mp(e,n){t("worldPage")||(lp(e),sp(n))}function bp(){ec.enableMaxGroupSizeToJoin?sp(xa):sp(Ea)}function yp(){lp("logPage"),ap("2"),sp(aa)}function wp(e){const t=Ul(`#pCC input[value="${e}"]`)
t&&(lp("movePage"),th(t))}const kp=[["!",_p,0],["@",_p,1],['"',_p,1],["#",_p,2],["£",_p,2],["$",_p,3],["%",_p,4],["^",_p,5],["&",_p,6],["*",_p,7],["(",_p,8],["0",function(){mp("toWorld",Ca)}],["<",wp,"<"],[">",wp,">"],["G",function(){lp("createGroup"),ap("4"),sp(`${wa}create`)}],["L",yp],["b",function(){lp("backpack"),ap("2"),sp(da)}],["g",function(){lp("gotoGuild"),ap("4"),sp(`${ma}manage`)}],["j",function(){lp("joinAllGroup"),ap("4"),bp()}],["l",yp],["p",function(){lp("profile"),ap("2"),sp(ca)}],["r",function(){mp("doRepair",`${Ta+ia}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in ec&&!ec.dialogIsClosed()||(lp("insertQuickWear"),wf(Af))}],["y",op]]
const Sp=[e=>["HTML","BODY"].every((t=>e.target.tagName!==t)),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function Ep(e){var t;(t=e,Sp.some((e=>e(t))))||function(e){const t=kp.find((([t])=>e===t))
t&&t[1](t[2])}(e.key)}function xp(){nc(document,"keyup",Ep)}function Cp(e,t){return Md(t)===e}function Pp(e){return Ad(Cp,e)}function $p(e,t,n){nc(e,"click",t,n)}function Tp(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function Lp(e,t){return Ld(Tp(e,t))}function Ip(e){$p(e,(()=>{sf("chrome","Game Help link")})),mf(`<a href="${na}settings">Game Help</a>`,e)}function Rp(){Lp("#pCR h3").filter(Pp("Game Help")).forEach(Ip)}function Op(e){ec[e]=Rl(e)}function Mp(e,t){if(t instanceof Element)return t.closest(e)}function Fp(e){e?.classList&&e.classList.add("fshHide")}function Ap(e){const n=Mp("a",e.target)
n?.getAttribute("href")===ba&&(sf("useNewGuildLog","Alter Href"),e.preventDefault(),Pf(),Fp(t("notification-guild-log")))}function Np(){return ec.huntingMode&&window.realmKeyHandler}function jp(e){e.forEach((e=>_c(3,e)))}function Dp(){return Zh({cmd:"guild",subcmd:"manage"})}function Bp(e){return Mp("tr",e)}function Hp(e,t){return a(e,t)?.groups??{}}function Up(e){const{d:t,h:n,m:i,s:r}=Hp(Qs,e),o=Number(t),s=Number(n)+24*o,a=Number(i)+60*s,l=Number(r)+60*a
return{day:t,days:o,hour:n,hours:s,min:i,mins:a,sec:r,secs:l,timestamp:Ms()-l}}function qp(e,t){if(t){const n=new Set
return e.filter((e=>n.has(e[t])?0:n.add(e[t])))}return Ld(new Set(e))}const Gp=e=>Number(Md(Bp(e)?.cells[4])?.replaceAll(",","")),Wp=e=>Number(l(Js,e.href)),zp=e=>Md(Bp(e)?.cells[3]),Vp=e=>Number(l(Xs,e))
function Qp(e){return{guild_xp:Gp(e),id:Wp(e),name:Md(e),rank:zp(e)}}function Jp(e){const{stam:t,max:n}=Hp(Ks,e)
return{current_stamina:Number(t),last_activity:Up(e).timestamp,level:Number(l(/Level:.+?(?<l>\d+)/,e)),max_stamina:Number(n),vl:Vp(e)}}function Kp(e){return{guild_id:cf(),image_version:0,xp:-1,...Qp(e),...Jp(e.dataset.tipped)}}function Xp(e,t,n){return{id:n,members:e.filter((e=>e.rank===t.rank)),name:t.rank,permissions:0,tax:-1}}async function Yp(){const e=Yh(await Dp()).getElementById("pCC")
if(!e)return{e:{code:0,message:"Failure"},s:!1}
const t=Lp(xl,e).map(Kp)
return{r:qp(t,"rank").map(Ad(Xp,t)),s:!0}}function Zp(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function eg(){return Dl(window.jQuery)}function tg(e){return Object.keys(e)}function ng(e){return Math.floor(Math.max(0,Ms()-e)/86400)}function ig(e){return Number.isNaN(e)}const rg=0,og=1,sg=2,ag=3,lg=4,cg=5,ug=6,dg="fsh_guildActivity"
function fg(e){return Yf({guild_id:e,subcmd:"guild_members"})}function hg(e){return Promise.all(e)}function pg(e){let t=e.toString()
return e<10&&(t=`0${t}`),t}function gg(e){return`${e[0]}-${e[1]}-${e[2]} ${e[3]}:${e[4]}:${e[5]}`}function vg(e){return"[object Date]"===Object.prototype.toString.call(e)&&!ig(e.getTime())}function _g(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(pg)}(e))}function mg(e){if(vg(e))return gg(_g(e))}async function bg(){return await dh(dg)??{lastUpdate:0,members:{}}}const yg=e=>mg(new Date(1e3*e)),wg=e=>[e[0],e[1],e[2],e[3],yg(e[4]),e[5],e[6]]
function kg(e){const{lastUpdate:t,members:n}=e
var i
return`Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n${uf(n).flatMap((i=yg(t),([e,t])=>t.map(wg).map((t=>[i,e,...t].join(","))))).join("\n")}`}const Sg=e=>`${e[0]}${e[1]}${e[2]}${e[3]}${e[4]}${e[5]}`,Eg=[e=>e.getFullYear().toString(),e=>e.getMonth()+1,e=>e.getDate(),e=>e.getHours(),e=>e.getMinutes(),e=>e.getSeconds()],xg=e=>t=>t(e)
async function Cg(e,t){const n=await bg()
if(!n.lastUpdate||!n.members)return
const i=e(n)
nh(new Blob([i],{type:t}),`${Sg(Eg.map(xg(new Date)).map(pg))}_GuildTracker.${t.split("/")[1]}`)}async function Pg(e){const t=await bg(),n={lastUpdate:t.lastUpdate,members:Zp(uf(t.members).filter((([t])=>t!==e)))}
fh(dg,n)}async function $g(e){const t=await bg(),n={lastUpdate:t.lastUpdate,members:Zp(uf(t.members).map((([t,n])=>[t,n.filter((t=>t[4]>e))])))}
fh(dg,n)}async function Tg(){const[e,t]=await hg([bg(),fg(cf())]),n=t.map((({username:e})=>e))
return tg(e.members).filter((e=>t=>!e.find((e=>e===t)))(n)).sort(up)}const Lg=e=>[e.name,[ng(e.last_activity),e.current_stamina,e.level,e.max_stamina,Ms(),e.vl,e.guild_xp]],Ig=e=>e.members.map(Lg),Rg=e=>e.r.flatMap(Ig),Og=[e=>!e,(e,t)=>e[1]!==t[1],(e,t)=>e[2]!==t[2],(e,t)=>e[3]>t[3],(e,t)=>e[5]!==t[5],(e,t)=>e[6]!==t[6]],Mg=e=>!e.some(js),Fg=e=>!e.some(ig),Ag=([,e])=>e.length,Ng=([e,t])=>[e,t.filter(Mg).filter(Fg)],jg=e=>uf(e.members||{}).map(Ng).filter(Ag),Dg=(e,t)=>e[4]>t[4]?e:t,Bg=([e,t])=>[e,t.reduce(Dg)],Hg=([e,t])=>[e,[t]],Ug=e=>([t])=>!e[t]||Ms()-e[t][4]>=86100,qg=(e,t,n)=>{return((e,t,n)=>({lastUpdate:Ms(),members:Zp(tg({...e,...t,...n}).map((i=>[i,[...e[i]??[],...t[i]??[],...n[i]??[]]])))}))(Zp(e.map((e=>([t,n])=>[t,n.filter((n=>n[4]!==e[t][4]))])(t))),Zp(uf(t).filter((i=n,([e,t])=>Og.some((n=>n(i[e]?.[0],t))))).map(Hg)),n)
var i}
function Gg(e,t){const n=jg(e),i=Zp(n.map(Bg)),r=Rg(t).filter(Ug(i))
r.length?function(e,t,n){e&&t&&n&&fh(dg,qg(t,n,Zp(e.map(Hg))))}(r,n,i):function(e){e&&fh(dg,{lastUpdate:Ms(),members:Zp(e)})}(n)}const Wg=e=>Ms()>rc(e.lastUpdate,0)+300
function zg(e){Wg(e)&&async function(e){const t=await Yp()
t.s&&Gg(e,t)}(e)}function Vg(){return!eg()}function Qg(e){return hf("li",e)}function Jg(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function Kg(e,t){if(t instanceof Node&&t.parentNode instanceof Node)return function(e,t){return t.nextSibling instanceof Node?Jg(e,t.nextSibling):_f(t.parentNode,e)}(e,t)}const Xg=["Buff Log","Combat Logs","Creature Logs","Quick Links","Recipe Manager","New Guild Log"]
function Yg(e,t){sf("accordion",e),Xg.includes(e)?t():wf(t)}function Zg(e,t,n,i){const r=function(e,t,n){const i=Qg({className:`nav-level-${e}`}),r=eh({className:"nav-link fshPoint",textContent:t})
return _f(i,r),Kg(i,n.parentNode),r}(e,t,i)
Dl(n)?$p(r,Ad(Yg,t,n)):(r.href=n,$p(r,(()=>sf("accordion",t))))}const ev=[[e=>e.recipeManagerLink,"1","Recipe Manager",Nf,"nav-character-log"],[e=>e.inventoryManagerLink,"1","Inventory Manager",`${ga}invmanagernew`,"nav-character-log"],[e=>e.medalGuideLink,"1","Medal Guide",`${ca}${ia}medalguide`,"nav-character-log"],[e=>e.buffLogLink&&Rl("keepBuffLog"),"1","Buff Log",Sf,"nav-character-log"],[e=>e.combatLogLink&&Rl("keepLogs"),"1","Combat Logs",Ef,"nav-character-notepad"],[e=>e.creatureLogLink&&Rl("showMonsterLog"),"1","Creature Logs",xf,"nav-character-notepad"],[e=>e.quickLinksLink,"1","Quick Links",Ff,"nav-character-notepad"],[e=>e.auctionSearchLink,"2","AH Quick Search",Tf,"nav-actions-trade-auctionhouse"],[e=>e.onlinePlayersLink,"2","Online Players",Rf,"nav-actions-interaction-findplayer"],[e=>e.findOtherLink,"2","Find Other",If,"nav-actions-interaction-findplayer"],[e=>e.findBuffsLink,"2","Find Buffs",Lf,"nav-actions-interaction-findplayer"],[e=>e.guildInventoryLink&&cf(),"2","Guild Inventory",`${ga}guildinvmgr`,"nav-guild-storehouse-inventory"],[e=>e.newGuildLogLink&&cf()&&!Rl("useNewGuildLog"),"2","New Guild Log",Pf,"nav-guild-ledger-advisor"],[e=>e.topRatedLink,"2","Top 250 Players",`${na}toprated${ia}xp`,"nav-toprated-players-level"]]
function tv(e){ev.forEach((([n,i,r,o,s])=>{n(e)&&function(e,n,i,r){const o=t(r)
o instanceof Node&&Zg(e,n,i,o)}(i,r,o,s)}))}const nv=e=>22*Lp("li",e).length||null
function iv(e,t,n){tv(n),function(e,t){t.heights=Lp("#nav > li").map(nv)
const n=Number(t.state)
n&&n>-1&&n<e.children.length&&(e.children[t.state].children[1].style.height=`${t.heights[t.state]}px`)}(e,t)}var rv=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function ov(e){return function(e){return-1!==e&&0===Ul(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?(sf("accordion","collapse"),-1):e}const sv=(e,t,n)=>$(e).data(`${n}${t}`)
function av(e,t,n){return new Promise((i=>{const r=sv(e,t,n)
r?i(r):function(e,t,n,i){$(e).on(`${cp(t)}create`,(()=>{i(sv(e,t,n))}))}(e,t,n,i)}))}const lv=[[e=>!Bl(e),()=>ic("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>ic("$('#nav').data('hcsNav').heights does not exist")]]
async function cv(){const e=t("nav"),n=await av(e,"Nav","hcs")
return function(e){const t=lv.find((([t])=>t(e)))
return!t||(t[1](),!1)}(n)?{theNav:e,myNav:n}:{}}function uv(){!function(){const e=Rl("lastActiveQuestPage")
Rl("storeLastQuestPage")&&e.length>0&&(t("nav-character-questbook").href=e)}(),function(){const e=Rl("lastScavPage")
Rl("storeLastScavPage")&&e.length>0&&(t("nav-actions-artisanship-scavenging").href=e)}()}async function dv(){const{theNav:e,myNav:t}=await cv()
e&&t&&(uv(),function(e,t){const n=rv.map((e=>[e,Rl(e)]))
n.some((([,e])=>e))&&iv(e,t,Zp(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,ov(n))}}(t))}function fv(e){return Zh({cmd:"bounty",page:e})}function hv(e){return e()}function pv(e,t,n){return JSON.stringify(e,t,n)}function gv(e,t){Nl(e,pv(t))}let vv=0,_v=0
const mv=()=>vv,bv=()=>_v
function yv(){return pf({className:"minibox"})}function wv(e){return hf("span",e)}function kv(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function Sv(e,t){kv(e,"beforeend",t)}function Ev([e,t,n,i,r]){const o=e(),s=n()
if(s)return gv(t,s),mf("",o),function(e,t,n,i){const r=pf({innerHTML:`<a class="fshBountyHeader" href="${Fa}">${n} Bounties</a> `}),o=wv({className:"xxsLink",textContent:"Reset"})
return _f(r,o),_f(e,r),Sv(e,function(e,t,n){const i=e.bounty
return 0===i.length?`<div class="xsOrange">[No ${t.toLowerCase()} bounties]</div>`:i.map(n).join("")}(t,n,i)),o}(o,s,i,r)}function xv(e,t){return`<a href="${e.link}" class="xsKhaki tip-static" data-tipped="${t(e)}">${e.target}</a><br>`}function Cv(e,t){if("string"==typeof t){const e=a(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function Pv(e){const t=Rl(e)
if(t)return Hl(t,Cv)}function $v(e){return e.split(",").map(Od)}function Tv(e){const t=Rl(e)
return t?$v(t):[]}function Lv(e){return Ul("img",e[2]).title}function Iv(e){const t="A"===(i=e[0]).children[0].tagName?i.children[0]:i.children[0].children[0]
var i
return{target:n(t),link:t.href,lvl:n(t.nextSibling).replace(/[[|\]]/g,""),reward:n(e[2]),rewardType:Lv(e),xpLoss:n(e[3]),posted:n(e[4])}}let Rv=0,Ov={},Mv={},Fv=!1,Av=!1,Nv=[]
const jv=()=>Ov,Dv=()=>Mv,Bv=()=>Fv,Hv=()=>Nv
function Uv(e){return{...Iv(e),progress:n(e[5])}}function qv(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=Uv(e.rows[t].cells)
Ov.bounty.push(n)}}(e)}function Gv(e,t){return function(e){if(e)return Ov&&Ms()-Ov.lastUpdate>Rv}(e)||function(e){if(e)return Mv&&Ms()-Mv.lastUpdate>Rv}(t)}let Wv=0
const zv=()=>Wv
function Vv(e){return`Level:  ${e.lvl}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Progress:  ${e.progress}`}function Qv(e){return xv(e,Vv)}function Jv(){Wv=Ev([mv,"bountyList",jv,"Active",Qv])}let Kv=0
const Xv=()=>Kv
function Yv(e){return`Target Level:  ${e.lvl}<br>Offerer: ${e.offerer}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Posted: ${e.posted}<br>Tickets Req.:  ${e.tickets}`}function Zv(e){return e.accept?`<span class="xsGreen" onclick="${e.accept}">[a]</span>&nbsp;`:""}function e_(e){return[Zv(e),xv(e,Yv)].join("")}function t_(){Kv=Ev([bv,"wantedList",Dv,"Wanted",e_])}function n_(e){const t=e[6]
return"[n/a]"!==Md(t)?t.children[0].children[0].getAttribute("onclick"):""}const i_=[()=>Hv().includes("*"),e=>Hv().includes(e),(e,t)=>ec.wantedGuildMembers&&"[n/a]"===Md(t.cells[6])]
function r_(e,t){var n;(function(e,t){return"[active]"!==Md(t.cells[6])&&i_.some((n=>n(e,t)))})(e,t)&&Dv().bounty.push({...Iv(n=t.cells),offerer:Md(n[1].children[0].children[0]),tickets:Md(n[5]),accept:n_(n)})}let o_=0,s_=0
function a_(e){const n=Ul('#pCC input[name="page"]',e)
if(!n)return
o_=Number(n.value),s_=Number(l(/of&nbsp;(?<of>\d*)/,n.parentNode.innerHTML))
const i=t("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
i&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],i=Md(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===i)break
r_(i,n)}}(i)}function l_(e){ec.enableActiveBountyList&&!Bv()&&(!function(e){const n=t("bounty-info",e)
if(!n)return
const i=n.parentNode.parentNode.previousElementSibling.children[0].children[0]
Ov={},Ov.bounty=[],Ov.isRefreshed=!0,Ov.lastUpdate=Ms(),i&&qv(i),Fv=!0}(e),Jv())}async function c_(e){const t=Yh(e)
if(l_(t),ec.enableWantedList)if(a_(t),o_<s_){c_(await fv(o_+1))}else t_()}const u_=[()=>!jv(),()=>!Dv(),()=>Av]
async function d_(){if(function(e,t){Ov=Pv("bountyList"),Mv=Pv("wantedList"),Rv=Rl("bountyListRefreshTime"),Av=Rl("bwNeedsRefresh"),Av||Gv(e,t)&&(Av=!0)}(ec.enableActiveBountyList,ec.enableWantedList),u_.some(hv)){Mv={},Mv.bounty=[],Mv.isRefreshed=!0,Mv.lastUpdate=Ms(),Fv=!1,Nv=Tv("wantedNames"),Nl("bwNeedsRefresh",!1)
c_(await fv(1))}else!function(e,t){t&&(Dv().isRefreshed=!1,t_()),e&&(jv().isRefreshed=!1,Jv())}(ec.enableActiveBountyList,ec.enableWantedList)}function f_(e,t){sf("activeWantedBounties",e),gv(t,null),d_()}function h_(e){e.target===zv()&&f_("getBountyListReset","bountyList"),e.target===Xv()&&f_("getWantedListReset","wantedList")}function p_(e,t){return Yf({subcmd:"profile",player_username:e,...t&&{_:Ts()}})}async function g_(e){const t=await p_(o(),e),n=t?.username===o(),i=n?{...t,lastUpdate:Is()}:t
return n&&fh("fsh_selfProfile",i),i}const v_=e=>Is()-ec.allyEnemyOnlineRefreshTime<e?.lastUpdate
async function __(e){if(e)return g_(e)
return function(e){return v_(e)?e:g_()}(await dh("fsh_selfProfile"))}function m_(e,t){return t?.classList?.contains(e)}function b_(e,t){return m_(t[0],e)}function y_(e,t,n){const{target:i}=n,r=t.find(Ad(e,i))
if(r)return r[1](i)}function w_(e){return Ad(y_,b_,e)}function k_(e){return mc(e,"player_id")}function S_(e,t,n){return Math.floor(Math.max(e-t,0)/2+n)}function E_(e,t,n,i,r){let o=i
500===i&&(o=1e3)
const s=S_(window.screen.availHeight,o,window.screenY),a=S_(document.documentElement.clientWidth,n,window.screenX)
window.open(e,t,`width=${n}, height=${o}, left=${a}, top=${s}${r}`)}function x_(e,t){let n=""
t&&(n=`&blist=${t}`),E_(`${La}&t=${e}${n}`,"fsQuickBuff",618,1e3,",scrollbars")}function C_(e){let t=e,n=Math.floor(t/60)
t%=60
let i=Math.floor(n/60)
n%=60
const r=Math.floor(i/24)
return i%=24,[r,i,n,t]}function P_(e,t){return 0===e?"":String(e)+t}function $_(e){const t=C_(Math.abs(Ms()-e))
return`${P_(t[0]," days, ")+P_(t[1]," hours, ")+P_(t[2]," mins, ")+t[3]} secs`}const T_="enemy-buff-check-on",L_="enemy-buff-check-off",I_="enemy-send-message",R_="enemy-quickbuff",O_="enemy-quick-buff",M_=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function F_(e,t){return t[0](Ms()-e)}function A_(e,t){return`<a class="player-name tip-static ${function(e,t){const n=M_.find(Ad(F_,e))
return n?function(e,t){return e?t[1]:t[2]}(t,n):"fshWhite"}(e.last_login,t)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${$_(e.last_login)}</td></tr></tbody></table>" href="${ua}${e.id}">${e.username}</a>`}function N_(e){return Ms()-e.last_login<1800}function j_(e,t){return`<li class="player"><div class="player-row">${ec.hideBuffSelected?"":`<span class="${T_}"></span>`}${A_(t,e)}</div><div class="guild-minibox-actions">${ec.hideGuildInfoMessage?"":`<span class="${I_} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}${ec.hideGuildInfoBuff?"":`<span class="${R_} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}${function(e){return ec.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${ha}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return ec.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${fa}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function D_(e,t){return e.filter(N_).map(Ad(j_,t)).join("")}const B_=[(e,t)=>e.length+t.length,(e,t)=>{if(!ec.enableAllyOnlineList)return t.length},e=>{if(!ec.enableEnemyOnlineList)return e.length}]
function H_(e){sf("allyEnemy",e)}function U_(e,t,n){return 0===n(e,t)}function q_(e){const n=rc(e._allies,[]),i=rc(e._enemies,[]);(function(e,t){return B_.every(Ad(U_,e,t))})(n,i)||function(e,n){let i=""
ec.enableAllyOnlineList&&(i+=D_(e,!0)),ec.enableEnemyOnlineList&&(i+=D_(n,!1))
const r=t("fshContactList")
mf("",r),Sv(r,i)}(n,i)}function G_(e){H_("toggleBuffSelected"),e.classList.toggle(T_),e.classList.toggle(L_)}const W_=[[T_,G_],[L_,G_],[I_,function(e){H_("msgPlayer"),window.openQuickMsgDialog(n(e.parentNode.previousElementSibling.lastElementChild))}],[R_,function(e){H_("buffPlayer"),x_(k_(e.parentNode.previousElementSibling.lastElementChild.href))}],[O_,function(){H_("selectedBuff"),x_(vf(T_,t("fshContactList")).map((e=>k_(e.nextElementSibling.href))).join(","))}]]
function z_(e){const{target:t}=e
"fshResetEnemy"!==t.id?w_(W_)(e):async function(){H_("resetList"),q_(await __(!0))}()}function V_(e){const t=pf({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>'
ec.hideBuffSelected||(n+=`<ul class="${O_}">Quick Buff Selected</ul>`),n+="</div></div>",Sv(t,n),_f(Bd(),t),$p(t,z_),q_(e)}function Q_(e){if(e?.length)return n(e[0].nextElementSibling)}function J_(e){return e?Number(e.replace(/,/g,"")):0}function K_(e){return J_(Q_(gf(e)))}function X_(e,t){const n=e?.split(" ").map((e=>e.slice(0,-1)))
var i
if(n)return`<dd>${i=new Date(Is()+1e3*(60*(60*t+Number(n[0]))+Number(n[1]))),`${pg(i.getHours())}:${pg(i.getMinutes())} ${i.toLocaleString("en",{weekday:"short"})} ${pg(i.getDate())}/${Gs[i.getMonth()]}/${i.getFullYear()}`}</dd>`}function Y_(e){return hf("button",{...e,type:"button"})}function Z_(e,t){Sv(e,t)}function em(){sf("fsbox","open log"),Cf()}function tm(e,t){const n=wv({className:`fsh-fsbox ${e}`,textContent:"[ "})
return _f(n,t),Z_(n," ]"),n}function nm(e){const t=Ul(xl,e)
t&&(function(e,t){const i=eh({href:`${la}${n(t)}`,textContent:"Ignore"})
$p(i,(()=>sf("fsbox","ignore link"))),_f(e,tm("fs-box-ignore",i))}(e,t),async function(e){const t=await dh("fsh_fsboxcontent")??"",n=Od(Ul(".message",e).innerHTML)
if(t.includes(n))return
fh("fsh_fsboxcontent",`<br>${n}${t}`.slice(0,9999))}(e))}function im(e){e.classList.add("fshRelative"),function(e){const t=Y_({textContent:"Log"})
$p(t,em),_f(e,tm("fs-box-log",t))}(e),nm(e)}function rm(e,t){const i=t.nextElementSibling.children[0]
8===i.children.length&&(!function(e,t){_f(e,pf({className:"tooltip-bottom",dataset:{tooltip:"Server"},textContent:`Server: ${n(t.children[7])}`}))}(e,i),function(e,t){mf(`Online: ${t.children[3].innerHTML}`,e.children[0])}(e,i),t.parentNode.classList.add("fshInvisible"))}function om(e,t){t instanceof Node&&(t.textContent=String(e))}let sm
function am(){return sm||(sm=t("quickMessageDialog")),sm}let lm,cm=0
function um(e){(function(){if(!cm){const e=gf("validateTips",am())
1===e.length&&([cm]=e)}return cm})()&&om(rc(e,""),cm)}function dm(){return lm||(lm=t("quickMsgDialog_msg"),lm.maxLength=512),lm}let fm,hm=null,pm=0,gm=0
function vm(e){"Enter"!==e.key||e.shiftKey||(sf("messaging","sendOnEnter"),e.preventDefault(),function(){if(!gm){const e=$(am()).dialog("option","buttons")
gm=e["Send Message"]}return gm}()())}function _m(){js(hm)&&(hm=Rl("enterForSendMessage")),hm&&!pm&&(nc(dm(),"keypress",vm),pm=!0)}let mm=0,bm=0,ym=0
function wm(e,t,n){const i=bm.insertRow(e)
let r=i.insertCell(-1)
Sv(r,t),r=i.insertCell(-1),Sv(r,n)}function km(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function Sm(e,t){wm(e,km("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const Em=[["del-button",function(e){sf("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
bm.deleteRow(t),mm.splice(t-2,1),gv("quickMsg",mm)}],["add-button",function(e){sf("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){Sm(e.parentNode.parentNode.rowIndex,n),t.value="",mm.push(n),gv("quickMsg",mm)}}],["add-template",function(e){sf("messaging","insertTemplate"),dm().value+=`${n(e).replace(/\{playername\}/g,fm)}`}]]
function xm(e){Sm(-1,e)}function Cm(){Rl("enableMessageTemplates")&&!ym&&($p((bm||(bm=am().lastElementChild),bm),w_(Em)),(mm||(mm=Pv("quickMsg")),mm).forEach(xm),wm(-1,km("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),ym=!0)}function Pm(e,n,i){const r=am()
m_("ui-dialog-content",r)&&(!function(e){fm=e,om(e,t("quickMsgDialog_targetUsername"))}(e),function(e){const t=dm()
t.value=rc(e,""),t.disabled=!1}(n),um(i),Cm(),_m(),$(r).dialog("open"))}function $m(e){return dp({cmd:"composing",...e})}function Tm(){return $m({subcmd:"view"})}function Lm(){return pp(Tm)}function Im(e,n,i){const r=Qg({className:"notification"}),o=eh({href:i,innerHTML:`<span class="notification-icon"></span><p class="notification-content">${n}</p>`})
$p(o,(()=>{sf("notification",e)})),_f(r,o),_f(t("notifications"),r)}function Rm(){Im("composing","Composing to do",Ia)}function Om(e){return e.time_remaining}function Mm(){Rm(),Nl(rl,!0)}const Fm=52
function Am(e){const t=e.h.p.find((({k:e})=>e===Fm))?.v
e.r.potions.length!==t?Mm():function(e){const t=Math.min.apply(null,e.map(Om))
t>0?(Nl(rl,!1),Nl(ol,Is()+1e3*t)):Mm()}(e.r.potions)}function Nm(){Rl(rl)?Rm():async function(){const e=Rl(ol)
if(e&&Is()<e)return
const t=await Lm()
t?.s&&Am(t)}()}function jm(e){return dp({cmd:"guild",...e})}function Dm(e){return jm({subcmd:"groups",...e})}function Bm(e){return Dm({subcmd2:"joinall",group:e})}function Hm(){return Dm({subcmd2:"view"})}function Um(){return pp(Hm)}function qm(e){let t,n,i,r,o,s,a
return{c(){t=eu("p"),n=eu("button"),i=tu("Join all attack groups"),r=tu(e[2]),o=tu("."),au(n,"type","button"),au(n,"class","svelte-44dw92"),au(t,"class","notification-content")},m(l,c){Xc(l,t,c),Qc(t,n),Qc(n,i),Qc(n,r),Qc(n,o),s||(a=ru(n,"click",e[4],{once:!0}),s=!0)},p(e,t){4&t&&uu(r,e[2])},d(e){e&&Yc(t),s=!1,a()}}}function Gm(e){let t,n={ctx:e,current:null,token:null,hasCatch:!1,pending:Vm,then:zm,catch:Wm}
return rd(e[3](),n),{c(){t=iu(),n.block.c()},m(e,i){Xc(e,t,i),n.block.m(e,n.anchor=i),n.mount=()=>t.parentNode,n.anchor=t},p(t,n){e=t},d(e){e&&Yc(t),n.block.d(e),n.token=null,n=null}}}function Wm(e){return{c:yc,m:yc,d:yc}}function zm(e){let t
return{c(){t=eu("p"),t.textContent="Joined.",au(t,"class","notification-content"),fu(t,"line-height","32px")},m(e,n){Xc(e,t,n)},d(e){e&&Yc(t)}}}function Vm(e){let t
return{c(){t=eu("span"),au(t,"class","notification-content fshSpinner fix-classic-theme svelte-44dw92")},m(e,n){Xc(e,t,n)},d(e){e&&Yc(t)}}}function Qm(e){let t,n,i
function r(e,t){return e[0]?Gm:qm}let o=r(e),s=o(e)
return{c(){t=eu("a"),n=eu("span"),i=nu(),s.c(),au(n,"id","notification-icon-guild-group"),au(n,"class","notification-icon"),au(t,"href",e[1])},m(e,r){Xc(e,t,r),Qc(t,n),Qc(t,i),s.m(t,null)},p(e,[n]){o===(o=r(e))&&s?s.p(e,n):(s.d(1),s=o(e),s&&(s.c(),s.m(t,null))),2&n&&au(t,"href",e[1])},i:yc,o:yc,d(e){e&&Yc(t),s.d()}}}function Jm(e,t,n){const i=e=>!ec.enableMaxGroupSizeToJoin||e.members.length<ec.maxGroupSizeToJoin,r=e=>e.name===o(),s=e=>!e.members.find(r),a=e=>e.id
let l=0,c=Ea,u=""
async function d(e){const t=e.r.filter(i).filter(s).map(a)
var n
t.length&&await(n=t,pp(Bm,0,n))}return ec.enableMaxGroupSizeToJoin&&(c=xa,u=` less than size ${ec.maxGroupSizeToJoin}`),[l,c,u,async function(){const e=await Um()
e?.s&&await d(e)},function(e){e.preventDefault(),sf("notification","Join All"),n(0,l=1)}]}class Km extends gd{constructor(e){super(),pd(this,e,Jm,Qm,Pc,{})}}function Xm(e){$(e).qtip("hide")}function Ym(e){Nl("needToPray",e),Nl("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}let Zm=0
const eb='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',tb=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${na}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
async function nb(e){const t=e.target.getAttribute("praytype")
t&&(sf("notification","prayToGods"),Xm(e.target),await Zh({cmd:"temple",subcmd:"pray",type:t}),Zm.outerHTML=eb,Ym(!1))}function ib(){Sv(t("notifications"),tb),Zm=t("helperPrayToGods"),qd(Zm,"click",nb)}async function rb(){if(!ec.enableTempleAlert)return
const e="temple"===ec.cmd?document:await ep({cmd:"temple"})
if(!e)return
const t=Ul("#pCC",e)
if(!t)return
const n="You are currently praying at the temple."!==Md(t)
n&&ib(),Ym(n)}function ob(){var e
!(e=Rl("lastTempleCheck"))||Is()>e?rb():Rl("needToPray")&&ib()}function sb(){return-1===window.location.search.indexOf("cmd=points&type=1")}function ab(){sb()&&Im("stamina","Upgrade stamina with gold",`${_a}&type=1`)}function lb(e){if(!ec.enableUpgradeAlert)return
const t=function(e){if(sb())return Yh(e)
const t=Tp('#pCC input[name="quantity"]')
return t[0].value="100",t[1].value="10",document}(e),n=Tp("#pCC > table",t)
if(n.length>0){!function(e){const t=Md(e).split(" / ")
t[0]!==t[1]?(ab(),Nl("needToDoUpgrade",!0)):(Nl("needToDoUpgrade",!1),Nl("lastUpgradeCheck",Date.parse(`${Md(e.nextElementSibling)} GMT`)))}(n[n.length-1].rows[3].cells[2])}}async function cb(){const e=Rl("lastUpgradeCheck")
if(e&&Is()<e)return
!function(e){_c(3,lb,[e])}(await Zh({cmd:"points",type:1}))}function ub(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?Jg(t,e.firstChild):_f(e,t)}(e,t)}function db(e,t){t.stopPropagation(),sf("chrome","statbar",e)}function fb(e,n){const i=t(`statbar-${n}`)
if(!i)return
const r=eh({href:e}),o=i.parentNode
_f(r,i),ub(o,r),$p(r,Ad(db,n),!0)}function hb(e,t){vf("player-name",e).forEach(t)}const pb=/Last Activity:<\/td><td>(?<mins>\d+) mins/
function gb(e,t){const n=e.dataset.tipped,i=l(pb,n)
i<2?e.classList.add(t.l1):i<5?e.classList.add(t.l2):e.classList.add(t.l3)}const vb=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function _b(e,t){vb.forEach((n=>{ec[n[0]]&&Ld(Tp(n[t],e)).forEach(Fp)}))}function mb(e){e?.classList&&e.classList.add("fshInvisible")}function bb(e,n){ec.hideBuffSelected&&(Ld(gf(`${n}-buff-check-on`,e)).forEach(mb),mb(t(`${n}-quick-buff`)))}function yb(e){gb(e,{l1:"fshGreen",l2:"fshWhite",l3:"fshGrey"})}function wb(e,t,n){Lp(`#pCR h${e}`).filter(Pp(t)).forEach((e=>{const i=eh({href:`${ma}${n}`,textContent:t})
$p(i,(()=>{sf("widgets",`guild ${n}`)})),e.replaceChild(i,e.firstChild)}))}function kb(e){gb(e,{l1:"fshDodgerBlue",l2:"fshLightSkyBlue",l3:"fshPowderBlue"})}function Sb(e){const n=t(e)
n&&(n.classList.add("pCR"),_f(Bd(),n))}function Eb(e){const n=t(e)
n&&ub((Dd||(Dd=t("pCR")),Dd),n)}function xb(){return dp({cmd:"superelite"})}function Cb(e){return uf(e?.se??{}).flatMap((([t,n])=>tc(n)?n.map((([n,i])=>[n,t,i,e?.loc[i]])):[[n,t.replaceAll(" ","_"),0,""]]))}const Pb=e=>e.join("|"),$b=(e,t)=>e.r.map((e=>[t-e.time,e.creature.name.replace(" (Super Elite)","").replaceAll(" ","_"),e.realm.realm.id,e.realm.realm.name])),Tb=(e,t)=>qp(e.map(Pb).concat(t.map(Pb))).map((e=>e.split("|"))).map((([e,t,n,i])=>[Number(e),t,Number(n),i])).sort((([e],[t])=>t-e)),Lb=e=>Zp(qp(e.map((([,e])=>e))).map((t=>[t,e.filter((([,e])=>e===t)).map((([e,,t])=>[e,t])).slice(0,10)]))),Ib=e=>Zp(qp(e.map((([,,e])=>e))).map((t=>[t,e.find((([,,e])=>e===t))[3]]))),Rb=e=>({se:Lb(e),loc:Ib(e)})
const Ob=_d()
let Mb=!1,Fb={},Ab=0,Nb=!1
const jb=e=>Math.max(0,600-(Ls()-(e?.lastUpdate??0)),600-(Ls()-Ab))
async function Db(){Ab=Ls()
const e=await pp(xb)
e?.s&&(Fb=function(e,t){const n=Number(t.t.split(" ")[1]),i=$b(t,n),r=Cb(e),o=Tb(i,r)
return{lastUpdate:n,...Rb(o)}}(Fb,e),fh("fsh_seLog",Fb),Ob.set(Fb))}function Bb(e,t){Nb=t,e(Nb),Nb&&!Mb&&async function(){for(Mb=!0,Fb=await dh("fsh_seLog"),Ob.set(Fb);Nb;)Mb=!0,await Bf(1e3*jb(Fb)),Nb&&await Db(),Mb=!1}()}const Hb=function(){const{subscribe:e,set:t}=_d(0)
return{subscribe:e,set:Ad(Bb,t)}}()
const Ub=[function(){Rl("moveGuildList")&&Eb("minibox-guild")},function(){Rl("moveOnlineAlliesList")&&Eb("minibox-allies")},function(){Rl("moveXmasBox")&&Sb("minibox-xmas")},function(){Rl("moveDailyQuest")&&Sb("minibox-daily-quest")},function(){Rl("moveFSBox")&&Sb("minibox-fsbox")},async function(){if(!ec.enableAllyOnlineList&&!ec.enableEnemyOnlineList||Vg())return
!function(e){e&&_c(3,V_,[e])}(await __(!1))},function(){!ec.enableWantedList&&!ec.enableActiveBountyList||Vg()||(ec.enableActiveBountyList&&(vv=yv(),_f(Bd(),vv)),ec.enableWantedList&&(_v=yv(),_f(Bd(),_v)),mv()&&$p(mv(),h_),bv()&&$p(bv(),h_),d_())},function(){if(!ec.enableGuildInfoWidgets)return
const e=t("minibox-guild-members-list")
e&&(_b(e,1),bb(e,"guild"),hb(e,yb),wb(4,"Chat","chat"),wb(3,"Guild","manage"))},function(){if(!ec.enableOnlineAlliesWidgets)return
const e=t("minibox-allies-list")
e&&(_b(e,2),bb(e,"ally"),hb(e,kb))},function(){ec.enableTempleAlert&&"temple"!==ec.cmd&&!Vg()&&ob()},function(){ec.enableUpgradeAlert&&eg()&&sb()&&(Rl("needToDoUpgrade")?ab():cb())},function(){ec.enableComposingAlert&&"composing"!==ec.cmd&&eg()&&Nm()},function(){Bd()&&!Vg()&&dv()},function(){Vg()||(window.openQuickMsgDialog=Pm)},function(){Rl("statBarLinks")&&(fb(ca,"character"),fb(`${_a+ia}reserve`,"stamina"),fb(Ta,"equipment"),fb(da,"inventory"),fb(_a,"fsp"),fb(`${na}bank`,"gold"))},function(){if(!Rl("staminaCalculator"))return
const e=gf("stat-stamina-nextGain")
if(0===e.length)return
const n=t("statbar-stamina-tooltip-stamina"),i=(e=>Q_(gf("stat-name",e)).split(" / "))(n)
2===i.length&&Sv(n,function(e,t){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${X_(Q_(e),Math.floor((J_(t[1])-J_(t[0]))/K_("stat-stamina-gainPerHour")))}`}(e,i))},function(){if(!Rl("levelUpCalculator"))return
const e=gf("stat-xp-nextGain")
0!==e.length&&Sv(t("statbar-level-tooltip-general"),`<dt class="stat-xp-nextLevel">Next Level At</dt>${X_(Q_(e),Math.ceil(K_("stat-xp-remaining")/K_("stat-xp-gainPerHour")))}`)},function(){if(!Rl("fsboxlog"))return
const e=t("minibox-fsbox")
e&&im(e)},function(){Rl("resizeQuickBuff")&&(window.openWindow=function(e,t,n,i,r){sf("chrome","interceptQuickBuff"),E_(e,t,n,i,r)})},function(){if(!Rl("joinAllLink"))return
const e=t("notification-guild-group")
e&&function(e){mf("",e),new Km({target:e})}(e)},function(){if(!Rl("addServerNode"))return
const e=t("topbanner-stats"),n=Lp("#pCR h3").find(Pp("Game Stats"));(function(e,t){return!(e&&m_("topbanner-stats-hidden",e))&&t})(e,n)&&rm(e,n)},function(){if(!Rl("addScoutTowerLink"))return
const e=t("minibox-spoilsofwar")
if(!e)return
const n=e.children[1]
if(!n)return
const i=n.children[0]
Sv(i,"&nbsp;"),_f(i,function(){const e=eh({dataset:{tooltip:"View Scout Report"},href:ya,innerHTML:`<img id="fshScoutTower" src="${Hs}structures/27.png">`})
return $p(e,(()=>sf("chrome","scout tower link"))),e}())},async function(){if(eg()&&Rl(al)){zg(await bg())}},function(){eg()&&ec.enableSeTracker&&Hb.set(ec.enableSeTracker)}]
const qb=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function Gb(){Np()||(qb.forEach(Op),ec.allyEnemyOnlineRefreshTime=1e3*Rl("allyEnemyOnlineRefreshTime"),ec.useNewGuildLog&&(nc(document.body,"click",Ap),nc(document.body,"auxclick",Ap)),jp(Ub))}function Wb(e){const t=Hl(e)
t?.["new-ui"]&&(Rl("gameHelpLink")&&_c(3,Rp),ec.huntingMode=Rl("huntingMode"),_c(3,xp),Gb(),Rl("hideHelperMenu")||_c(3,Xh))}function zb(){const e=function(){const e=t("html")
if(e?.dataset)return e.dataset.hcs}()
e&&Wb(e)}function Vb(){eg()&&t("worldPage")&&window.GameData&&kf(import("./newMap-DpcRjzac.js"))}const Qb={"-":{"-":()=>{kf(import("./arena-DYWbSDq_.js").then((function(e){return e.c})))}},dojoin:{"-":()=>{kf(import("./arenaDoJoin-DaVQC4FU.js"))}},join:{"-":()=>{kf(import("./arenaJoin-CM7x4jYu.js"))}},completed:{"-":()=>{kf(import("./completedArenas-CvoZt4ky.js"))}},pickmove:{"-":()=>{kf(import("./storeMoves-Dptgipau.js"))}},setup:{"-":()=>{kf(import("./setupMoves-Mwwc-rE9.js"))}}}
function Jb(){kf(import("./bioWidgets-BV-67a5U.js"))}function Kb(){kf(import("./injectGuild-CwcGXAhw.js"))}const Xb=()=>{kf(import("./guildAdvisor-mofS6RnR.js"))}
const Yb=()=>{kf(import("./groups-G3vRNBjY.js"))}
const Zb=()=>{kf(import("./addRemoveTags-CJTveQPT.js"))}
const ey=()=>{kf(import("./guildChat--uPW4GCm.js"))}
function ty(){kf(import("./viewRecipe-BEEFgNh8.js"))}function ny(){kf(import("./ufsgAllowBack-BWuQfNnW.js"))}function iy(){kf(import("./profile-I4Wlbmg7.js").then((function(e){return e.p})))}function ry(){kf(import("./news-ZWtmKvE2.js"))}function oy(){kf(import("./viewArchive-Z-Pk1mxB.js"))}const sy=()=>{kf(import("./inventory-SGpXkvsh.js"))},ay=()=>{kf(import("./bazaar-CW00DlqT.js"))}
function ly(){kf(import("./injectQuestBookFull-D8hAMb2b.js"))}const cy=()=>{kf(import("./scavenging-CjMePkWi.js"))}
const uy=()=>{kf(import("./toprated-CG_e2j7C.js"))}
const dy=()=>{kf(import("./trade-DOg0Xhaa.js"))}
var fy={creatures:{"-":{"-":ny}},items:{"-":{"-":ny},view:{"-":()=>{kf(import("./itemsView-De7_66St.js"))}}},masterrealms:{"-":{"-":ny}},quests:{"-":{"-":ny},view:{"-":()=>{kf(import("./showAllQuestSteps-04lqiscM.js"))}}},realms:{"-":{"-":ny}},relics:{"-":{"-":ny}},shops:{"-":{"-":ny}},"-":{news:{"-":ry},viewupdatearchive:{"-":oy},viewarchive:{"-":oy},"-":{"-":()=>{kf(import("./unknownPage-X-Lhskyn.js"))}}},arena:Qb,auctionhouse:{"-":{"-":()=>{kf(import("./injectAuctionHouse-BBsZue_E.js"))}},quickcreate:{"-":()=>{kf(import("./quickCreate-CrdabFRi.js"))}}},bank:{"-":{"-":()=>{kf(import("./injectBank-CjHK4ef9.js"))}}},blacksmith:{repairall:{"-":function(){bc("fromworld")&&Vb()}}},buffmarket:{"-":{"-":()=>{kf(import("./injectBuffmarket-BsyM_s3S.js"))}}},combat:{attackplayer:{"-":iy}},composing:{"-":{"-":()=>{kf(import("./composing-zMTL4CIC.js"))}},breakdown:{"-":()=>{kf(import("./breakdown-DxMLZyay.js"))}},create:{"-":()=>{kf(import("./composingCreate-Dp6-hUZb.js"))}}},findplayer:{"-":{"-":()=>{kf(import("./findplayer-8l62Vaas.js"))}}},guild:{inventory:{report:()=>{kf(import("./guildReport-Baieu6DK.js"))},addtags:Zb,removetags:Zb,storeitems:()=>{kf(import("./storeitems-CRh66cIQ.js"))}},chat:{"-":ey},dochat:{"-":ey},log:{"-":()=>{kf(import("./guildLog-C3slNueq.js"))}},groups:{viewstats:()=>{kf(import("./injectGroupStats-Cz3wW_wh.js"))},joinallgroupsundersize:Yb,joinall:Yb,"-":Yb},manage:{"-":Kb},advisor:{"-":Xb,weekly:Xb},history:{"-":Jb},view:{"-":Kb},scouttower:{"-":()=>{kf(import("./injectScouttower-BibONof3.js"))}},mailbox:{"-":()=>{kf(import("./guildMailbox-8y8KnBcS.js"))}},ranks:{"-":()=>{kf(import("./rank-BSumNBtv.js"))}},conflicts:{rpupgrades:()=>{kf(import("./injectRPUpgrades-DLmJRsdm.js"))}},bank:{"-":()=>{kf(import("./injectGuildBank-CyFuk_04.js"))}},hall:{"-":()=>{kf(import("./hall-BZ8SmHQt.js"))},post:Jb},"-":{"-":Kb},titanrewards:{"-":()=>{kf(import("./titanrewards-C-bJJr7X.js"))}}},hellforge:{"-":{"-":()=>{kf(import("./hellforge-DHWY4DpO.js"))}}},inventing:{"-":{"-":function(){kf(import("./inventing-C4YsYb3p.js"))}},doinvent:{"-":ty},viewrecipe:{"-":ty}},log:{"-":{"-":()=>{kf(import("./playerLog-Dbqg75ru.js"))}}},marketplace:{createreq:{"-":()=>{kf(import("./marketplace-DaxEYdRz.js"))}}},news:{fsbox:{"-":()=>{kf(import("./newsFsbox-Pni7L-9S.js"))}},"-":{"-":ry},shoutbox:{"-":()=>{kf(import("./newsShoutbox-CgOLxSuZ.js"))}},viewupdatearchive:{"-":oy},viewarchive:{"-":oy}},notepad:{showlogs:{"-":Ef},invmanagernew:{"-":sy},guildinvmgr:{"-":sy},recipemanager:{"-":Nf},auctionsearch:{"-":Tf},onlineplayers:{"-":Rf},quicklinkmanager:{"-":Ff},monsterlog:{"-":xf},quickextract:{"-":Mf},quickwear:{"-":Af},fsboxcontent:{"-":Cf},bufflogcontent:{"-":Sf},newguildlog:{"-":Pf},findbuffs:{"-":Lf},findother:{"-":If},savesettings:{"-":()=>{kf(import("./load-CLuubxXu.js"))}},reliclist:{"-":jf}},points:{"-":{"-":()=>{kf(import("./points-Dtw5qooY.js"))}}},potionbazaar:{"-":{"-":ay},buyitem:{"-":ay}},privatemessage:{"-":{"-":()=>{kf(import("./privateMsg-BuCJwFqj.js"))}}},profile:{"-":{"-":iy},managecombatset:{"-":iy},report:{"-":iy},equipitem:{"-":iy},useitem:{"-":iy},changebio:{"-":Jb},dropitems:{"-":function(){kf(import("./injectProfileDropItems-DWIokEpH.js"))}}},pvpladder:{"-":{"-":()=>{kf(import("./ladder-jB4xsiKN.js"))}}},questbook:{"-":{"-":ly},atoz:{"-":ly},viewquest:{"-":()=>{kf(import("./injectQuestTracker-CvTg3A-z.js"))}}},quickbuff:{"-":{"-":()=>{kf(import("./quickBuff-B4mW7yTS.js"))}}},scavenging:{"-":{"-":cy},process:{"-":cy}},settings:{"-":{"-":()=>{kf(import("./injectSettings-Bgo5o5Sf.js"))}}},skills:{"-":{"-":()=>{}}},superelite:{"-":{"-":()=>{kf(import("./superelite-DUAq2_N8.js"))}}},tempinv:{"-":{"-":()=>{kf(import("./mailbox-x4pjjRrG.js"))}}},temple:{"-":{"-":rb}},titan:{"-":{"-":()=>{kf(import("./injectTitan-nlus5mz7.js"))}}},toprated:{xp:{"-":uy},monthlyxp:{"-":uy},gold:{"-":uy},killstreak:{"-":uy},bounties:{"-":uy},risingstars:{"-":uy},arena:{"-":uy},superelites:{"-":uy},smasher:{"-":uy},globalquest:{"-":()=>{kf(import("./globalQuest-ByjAkHwO.js"))}}},trade:{"-":{"-":dy},sendgold:{"-":dy},createsecure:{"-":dy},docreatesecure:{"-":dy}},world:{"-":{"-":Vb}}}
function hy(e){return hf("ul",e)}const py=()=>pf({className:"fshQuickLinks",style:{left:`${Rl("quickLinksLeftPx")}px`,top:`${Rl("quickLinksTopPx")}px`}}),gy=e=>"newWindow"in e&&e.url&&e.name
function vy(e,t){const n=_f(t,hy())
e.filter(gy).forEach((e=>{_f(_f(n,Qg()),function(e){const t=eh({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return $p(t,(()=>sf("chrome","quick link",e.name))),t}(e))}))}function _y(){if(!Ul(".mainbody"))return
const e=Pv("quickLinks")||[]
e.length&&function(e){const t=py()
t.classList.toggle("fshFixed",Rl("keepHelperMenuOnScreen")),Rl("draggableQuickLinks")&&(t.classList.add("fshMove"),nf(t)),vy(e,t),_f(document.body,t)}(e)}let my=0,by=0,yy=0,wy="",ky=0,Sy=0
function Ey(e){return bc(e)||"-"}function xy(e){const t=Ul(e)
return t?.value||"-"}function Cy(){if(Bl(fy[my])&&Bl(fy[my][by])&&Dl(fy[my][by][yy]))return fy[my][by][yy]}function Py(){""!==document.location.search?(my=Ey("cmd"),by=Ey("subcmd"),yy=Ey("subcmd2"),["points","privatemessage"].includes(my)&&(wy=`/${Ey("type")}`)):(my=xy('input[name="cmd"]'),by=xy('input[name="subcmd"]'),yy=xy('input[name="subcmd2"]')),ec.cmd=my,ec.subcmd=by,ec.subcmd2=yy,Sy=`${my}/${by}/${yy}${wy}`,ky=Cy()}function $y(){Dl(ky)&&(jl(Sy),ky())}async function Ty(e){Py(),await e,zb(),_c(3,$y),Rl("playNewMessageSound")&&_c(3,Ud),Np()||_c(3,_y)}const Ly=[()=>!("showPicker"in HTMLSelectElement.prototype),()=>!navigator.cookieEnabled,()=>window!==window.parent,function(){if(!d){const e=l(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
u=c.includes(e),d=!0}return u}]
function Iy(e,t){if(Ly.some((e=>e())))return
const n=ql("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
Zl(),function(e,t){ec.gmInfo=Hl(decodeURIComponent(t)),ec.gmInfo?ec.fshVer=e:ec.fshVer=`${e}_native`,ec.calfVer="145"}(e,t),s(),ws(),Ty(n)}export{pp as $,qd as A,Hp as B,zs as C,hy as D,uf as E,m_ as F,oh as G,tc as H,rh as I,Zh as J,Yh as K,Pl as L,$l as M,Tp as N,pd as O,Pc as P,sd as Q,eu as R,gd as S,nu as T,au as U,Uu as V,Xc as W,Qc as X,hu as Y,du as Z,ru as _,dp as a,Xm as a$,su as a0,cd as a1,ad as a2,yc as a3,Yc as a4,xc as a5,Pv as a6,tu as a7,uu as a8,pu as a9,J_ as aA,Bs as aB,na as aC,wv as aD,lb as aE,Md as aF,x_ as aG,k_ as aH,$v as aI,cp as aJ,b_ as aK,fa as aL,ha as aM,mc as aN,Ra as aO,la as aP,El as aQ,$_ as aR,Id as aS,Kg as aT,o as aU,Df as aV,tl as aW,Da as aX,Ba as aY,Wa as aZ,Ha as a_,gv as aa,Y_ as ab,n as ac,om as ad,bc as ae,Td as af,Ef as ag,xf as ah,Bp as ai,Nl as aj,ig as ak,av as al,ec as am,pv as an,Rl as ao,vf as ap,ya as aq,Z_ as ar,rd as as,od as at,Ol as au,iu as av,ll as aw,Os as ax,Is as ay,P_ as az,nc as b,el as b$,lh as b0,Ca as b1,ia as b2,Na as b3,th as b4,Hs as b5,dh as b6,Ja as b7,fh as b8,Jf as b9,ed as bA,Yu as bB,Zu as bC,td as bD,Ru as bE,dd as bF,fd as bG,hd as bH,qs as bI,E_ as bJ,La as bK,md as bL,_d as bM,p_ as bN,Ys as bO,Um as bP,rc as bQ,Cl as bR,ua as bS,fg as bT,up as bU,Fs as bV,Ns as bW,Rc as bX,Iu as bY,Ka as bZ,Ga as b_,Hl as ba,_c as bb,Q_ as bc,gf as bd,gl as be,pl as bf,_l as bg,vl as bh,ml as bi,Ld as bj,Od as bk,Ds as bl,Dl as bm,ja as bn,fu as bo,Zc as bp,$a as bq,Tc as br,Sa as bs,Hu as bt,qp as bu,jm as bv,pg as bw,Gs as bx,Va as by,Xa as bz,Ad as c,Cp as c$,nl as c0,il as c1,rp as c2,ip as c3,op as c4,Ua as c5,qa as c6,Ya as c7,Ls as c8,Qa as c9,eg as cA,hf as cB,ma as cC,sl as cD,K_ as cE,hl as cF,ea as cG,y_ as cH,Oc as cI,mu as cJ,Ac as cK,Nc as cL,Fc as cM,Ou as cN,Fu as cO,ud as cP,qu as cQ,kv as cR,As as cS,Rs as cT,a as cU,Dm as cV,e as cW,ql as cX,dl as cY,kf as cZ,Hc as c_,__ as ca,Fp as cb,Tv as cc,tp as cd,Ms as ce,fp as cf,Bc as cg,kl as ch,gp as ci,Bl as cj,Tl as ck,ul as cl,cf as cm,sp as cn,pa as co,Sl as cp,ub as cq,ic as cr,Ia as cs,Kf as ct,Lm as cu,rl as cv,Pp as cw,ol as cx,Ws as cy,$m as cz,mf as d,bg as d$,sa as d0,js as d1,bl as d2,Up as d3,fl as d4,jl as d5,ry as d6,ly as d7,ty as d8,bs as d9,Zs as dA,w_ as dB,Js as dC,Of as dD,Kb as dE,ou as dF,id as dG,Sd as dH,Oa as dI,Ma as dJ,Tu as dK,nf as dL,Ml as dM,lu as dN,_u as dO,ld as dP,ba as dQ,mg as dR,Dp as dS,ca as dT,wu as dU,Lu as dV,jc as dW,va as dX,Aa as dY,C_ as dZ,jp as d_,vg as da,gg as db,Yf as dc,Zf as dd,Us as de,Rh as df,kh as dg,Eh as dh,xh as di,Sh as dj,Th as dk,wl as dl,yl as dm,tg as dn,cu as dp,Cc as dq,ta as dr,Vs as ds,hv as dt,Ks as du,Xs as dv,al as dw,$f as dx,ka as dy,Qg as dz,ep as e,lg as e0,sg as e1,cg as e2,og as e3,ag as e4,rg as e5,ug as e6,dg as e7,Cg as e8,$g as e9,Tg as ea,Pg as eb,kg as ec,Hb as ed,Ob as ee,Cb as ef,yu as eg,kc as eh,Yp as ei,ng as ej,bp as ek,oa as el,_a as em,Dc as en,Mf as eo,Ic as ep,wf as eq,Af as er,da as es,Iy as et,Zp as f,t as g,Mp as h,_f as i,cl as j,Lp as k,xl as l,pf as m,eh as n,$p as o,Hd as p,Ul as q,l as r,sf as s,Pa as t,hg as u,Xf as v,Sv as w,Vg as x,Rd as y,Jg as z}
//# sourceMappingURL=calfSystem-CvwhhJv4.js.map
