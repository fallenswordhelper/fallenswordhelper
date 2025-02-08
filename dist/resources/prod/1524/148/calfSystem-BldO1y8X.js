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
for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var v,_={DEBUG:!1,LIB_VERSION:"1.215.6"},m="undefined"!=typeof window?window:void 0,b="undefined"!=typeof globalThis?globalThis:m,y=Array.prototype,w=y.forEach,k=y.indexOf,S=null==b?void 0:b.navigator,x=null==b?void 0:b.document,E=null==b?void 0:b.location,C=null==b?void 0:b.fetch,P=null!=b&&b.XMLHttpRequest&&"withCredentials"in new b.XMLHttpRequest?b.XMLHttpRequest:void 0,T=null==b?void 0:b.AbortController,L=null==S?void 0:S.userAgent,I=null!=m?m:{},R="$copy_autocapture",O=["$snapshot","$pageview","$pageleave","$set","survey dismissed","survey sent","survey shown","$identify","$groupidentify","$create_alias","$$client_ingestion_warning","$web_experiment_applied","$feature_enrollment_update","$feature_flag_called"]
function F(e,t){return-1!==e.indexOf(t)}!function(e){e.GZipJS="gzip-js",e.Base64="base64"}(v||(v={}))
var M=function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},A=function(e){return e.replace(/^\$/,"")},N=function(e,t){if(!ue(t))return!1
try{return new RegExp(t).test(e)}catch(e){return!1}},j=Array.isArray,D=Object.prototype,B=D.hasOwnProperty,H=D.toString,q=j||function(e){return"[object Array]"===H.call(e)},U=e=>"function"==typeof e,G=e=>e===Object(e)&&!q(e),W=e=>{if(G(e)){for(var t in e)if(B.call(e,t))return!1
return!0}return!1},z=e=>void 0===e,V=e=>"[object String]"==H.call(e),Q=e=>V(e)&&0===e.trim().length,J=e=>null===e,K=e=>z(e)||J(e),X=e=>"[object Number]"==H.call(e),Y=e=>"[object Boolean]"===H.call(e),Z=e=>e instanceof FormData,ee=e=>F(O,e),te=e=>{var t={_log:function(t){if(m&&(_.DEBUG||I.POSTHOG_DEBUG)&&!z(m.console)&&m.console){for(var n=("__rrweb_original__"in m.console[t]?m.console[t].__rrweb_original__:m.console[t]),i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o]
n(e,...r)}},info:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i]
t._log("log",...n)},warn:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i]
t._log("warn",...n)},error:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i]
t._log("error",...n)},critical:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i]
console.error(e,...n)},uninitializedWarning:e=>{t.error("You must initialize PostHog before calling ".concat(e))},createLogger:t=>te("".concat(e," ").concat(t))}
return t},ne=te("[PostHog.js]"),ie=ne.createLogger,re={}
function oe(e,t,n){if(q(e))if(w&&e.forEach===w)e.forEach(t,n)
else if("length"in e&&e.length===+e.length)for(var i=0,r=e.length;i<r;i++)if(i in e&&t.call(n,e[i],i)===re)return}function se(e,t,n){if(!K(e)){if(q(e))return oe(e,t,n)
if(Z(e)){for(var i of e.entries())if(t.call(n,i[1],i[0])===re)return}else for(var r in e)if(B.call(e,r)&&t.call(n,e[r],r)===re)return}}var ae=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
return oe(n,(function(t){for(var n in t)void 0!==t[n]&&(e[n]=t[n])})),e},le=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
return oe(n,(function(t){oe(t,(function(t){e.push(t)}))})),e}
function ce(e){for(var t=Object.keys(e),n=t.length,i=new Array(n);n--;)i[n]=[t[n],e[t[n]]]
return i}var ue=function(e){try{new RegExp(e)}catch(e){return!1}return!0},de=function(e){try{return e()}catch(e){return}},fe=function(e){return function(){try{for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i]
return e.apply(this,n)}catch(e){ne.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."),ne.critical(e)}}},he=function(e){var t={}
return se(e,(function(e,n){V(e)&&e.length>0&&(t[n]=e)})),t}
var pe=["herokuapp.com","vercel.app","netlify.app"]
function ge(e){var t=null==e?void 0:e.hostname
if(!V(t))return!1
var n=t.split(".").slice(-2).join(".")
for(var i of pe)if(n===i)return!1
return!0}function ve(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}function _e(e,t,n,i){var{capture:r=!1,passive:o=!0}=null!=i?i:{}
null==e||e.addEventListener(t,n,{capture:r,passive:o})}var me="$people_distinct_id",be="__alias",ye="__timers",we="$autocapture_disabled_server_side",ke="$heatmaps_enabled_server_side",Se="$exception_capture_enabled_server_side",xe="$web_vitals_enabled_server_side",Ee="$dead_clicks_enabled_server_side",$e="$web_vitals_allowed_metrics",Ce="$session_recording_enabled_server_side",Pe="$console_log_recording_enabled_server_side",Te="$session_recording_network_payload_capture",Le="$session_recording_canvas_recording",Ie="$replay_sample_rate",Re="$replay_minimum_duration",Oe="$replay_script_config",Fe="$sesid",Me="$session_is_sampled",Ae="$session_recording_url_trigger_activated_session",Ne="$session_recording_event_trigger_activated_session",je="$enabled_feature_flags",De="$early_access_features",Be="$stored_person_properties",He="$stored_group_properties",qe="$surveys",Ue="$surveys_activated",Ge="$flag_call_reported",We="$user_state",ze="$client_session_props",Ve="$capture_rate_limit",Qe="$initial_campaign_params",Je="$initial_referrer_info",Ke="$initial_person_info",Xe="$epp",Ye="__POSTHOG_TOOLBAR__",Ze="$posthog_cookieless",et=[me,be,"__cmpns",ye,Ce,ke,Fe,je,We,De,He,Be,qe,Ge,ze,Ve,Qe,Je,Xe],tt=ie("[FeatureFlags]"),nt="$active_feature_flags",it="$override_feature_flags",rt="$feature_flag_payloads",ot="$override_feature_flag_payloads",st=e=>{var t={}
for(var[n,i]of ce(e||{}))i&&(t[n]=i)
return t}
class at{constructor(e){p(this,"_override_warning",!1),p(this,"_hasLoadedFlags",!1),p(this,"_requestInFlight",!1),p(this,"_reloadingDisabled",!1),p(this,"_additionalReloadRequested",!1),p(this,"_decideCalled",!1),p(this,"_flagsLoadedFromRemote",!1),this.instance=e,this.featureFlagEventHandlers=[]}decide(){if(this.instance.config.__preview_remote_config)this._decideCalled=!0
else{var e=!this._reloadDebouncer&&(this.instance.config.advanced_disable_feature_flags||this.instance.config.advanced_disable_feature_flags_on_first_load)
this._callDecideEndpoint({disableFlags:e})}}get hasLoadedFlags(){return this._hasLoadedFlags}getFlags(){return Object.keys(this.getFlagVariants())}getFlagVariants(){var e=this.instance.get_property(je),t=this.instance.get_property(it)
if(!t)return e||{}
for(var n=ae({},e),i=Object.keys(t),r=0;r<i.length;r++)n[i[r]]=t[i[r]]
return this._override_warning||(tt.warn(" Overriding feature flags!",{enabledFlags:e,overriddenFlags:t,finalFlags:n}),this._override_warning=!0),n}getFlagPayloads(){var e=this.instance.get_property(rt),t=this.instance.get_property(ot)
if(!t)return e||{}
for(var n=ae({},e||{}),i=Object.keys(t),r=0;r<i.length;r++)n[i[r]]=t[i[r]]
return this._override_warning||(tt.warn(" Overriding feature flag payloads!",{flagPayloads:e,overriddenPayloads:t,finalPayloads:n}),this._override_warning=!0),n}reloadFeatureFlags(){this._reloadingDisabled||this.instance.config.advanced_disable_feature_flags||this._reloadDebouncer||(this._reloadDebouncer=setTimeout((()=>{this._callDecideEndpoint()}),5))}clearDebouncer(){clearTimeout(this._reloadDebouncer),this._reloadDebouncer=void 0}ensureFlagsLoaded(){this._hasLoadedFlags||this._requestInFlight||this._reloadDebouncer||this.reloadFeatureFlags()}setAnonymousDistinctId(e){this.$anon_distinct_id=e}setReloadingPaused(e){this._reloadingDisabled=e}_callDecideEndpoint(e){if(this.clearDebouncer(),!this.instance.config.advanced_disable_decide)if(this._requestInFlight)this._additionalReloadRequested=!0
else{var t={token:this.instance.config.token,distinct_id:this.instance.get_distinct_id(),groups:this.instance.getGroups(),$anon_distinct_id:this.$anon_distinct_id,person_properties:this.instance.get_property(Be),group_properties:this.instance.get_property(He)};(null!=e&&e.disableFlags||this.instance.config.advanced_disable_feature_flags)&&(t.disable_flags=!0),this._requestInFlight=!0,this.instance._send_request({method:"POST",url:this.instance.requestRouter.endpointFor("api","/decide/?v=3"),data:t,compression:this.instance.config.disable_compression?void 0:v.Base64,timeout:this.instance.config.feature_flag_request_timeout_ms,callback:e=>{var n,i,r=!0
200===e.statusCode&&(this.$anon_distinct_id=void 0,r=!1),this._requestInFlight=!1,this._decideCalled||(this._decideCalled=!0,this.instance._onRemoteConfig(null!==(i=e.json)&&void 0!==i?i:{})),t.disable_flags||(this._flagsLoadedFromRemote=!r,this.receivedFeatureFlags(null!==(n=e.json)&&void 0!==n?n:{},r),this._additionalReloadRequested&&(this._additionalReloadRequested=!1,this._callDecideEndpoint()))}})}}getFeatureFlag(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0){var n,i,r,o,s,a=this.getFlagVariants()[e],l="".concat(a),c=this.instance.get_property(Ge)||{}
return!t.send_event&&"send_event"in t||e in c&&c[e].includes(l)||(q(c[e])?c[e].push(l):c[e]=[l],null===(n=this.instance.persistence)||void 0===n||n.register({[Ge]:c}),this.instance.capture("$feature_flag_called",{$feature_flag:e,$feature_flag_response:a,$feature_flag_payload:this.getFeatureFlagPayload(e)||null,$feature_flag_bootstrapped_response:(null===(i=this.instance.config.bootstrap)||void 0===i||null===(r=i.featureFlags)||void 0===r?void 0:r[e])||null,$feature_flag_bootstrapped_payload:(null===(o=this.instance.config.bootstrap)||void 0===o||null===(s=o.featureFlagPayloads)||void 0===s?void 0:s[e])||null,$used_bootstrap_value:!this._flagsLoadedFromRemote})),a}tt.warn('getFeatureFlag for key "'+e+"\" failed. Feature flags didn't load in time.")}getFeatureFlagPayload(e){return this.getFlagPayloads()[e]}isFeatureEnabled(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0)return!!this.getFeatureFlag(e,t)
tt.warn('isFeatureEnabled for key "'+e+"\" failed. Feature flags didn't load in time.")}addFeatureFlagsHandler(e){this.featureFlagEventHandlers.push(e)}removeFeatureFlagsHandler(e){this.featureFlagEventHandlers=this.featureFlagEventHandlers.filter((t=>t!==e))}receivedFeatureFlags(e,t){if(this.instance.persistence){this._hasLoadedFlags=!0
var n=this.getFlagVariants(),i=this.getFlagPayloads()
!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=e.featureFlags,o=e.featureFlagPayloads
if(r)if(q(r)){var s={}
if(r)for(var a=0;a<r.length;a++)s[r[a]]=!0
t&&t.register({[nt]:r,[je]:s})}else{var l=r,c=o
e.errorsWhileComputingFlags&&(l=h(h({},n),l),c=h(h({},i),c)),t&&t.register({[nt]:Object.keys(st(l)),[je]:l||{},[rt]:c||{}})}}(e,this.instance.persistence,n,i),this._fireFeatureFlagsCallbacks(t)}}override(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
tt.warn("override is deprecated. Please use overrideFeatureFlags instead."),this.overrideFeatureFlags({flags:e,suppressWarning:t})}overrideFeatureFlags(e){if(!this.instance.__loaded||!this.instance.persistence)return tt.uninitializedWarning("posthog.feature_flags.overrideFeatureFlags")
if(!1===e)return this.instance.persistence.unregister(it),this.instance.persistence.unregister(ot),void this._fireFeatureFlagsCallbacks()
if(e&&"object"==typeof e&&("flags"in e||"payloads"in e)){var t,n=e
if(this._override_warning=Boolean(null!==(t=n.suppressWarning)&&void 0!==t&&t),"flags"in n)if(!1===n.flags)this.instance.persistence.unregister(it)
else if(n.flags)if(q(n.flags)){for(var i={},r=0;r<n.flags.length;r++)i[n.flags[r]]=!0
this.instance.persistence.register({[it]:i})}else this.instance.persistence.register({[it]:n.flags})
return"payloads"in n&&(!1===n.payloads?this.instance.persistence.unregister(ot):n.payloads&&this.instance.persistence.register({[ot]:n.payloads})),void this._fireFeatureFlagsCallbacks()}this._fireFeatureFlagsCallbacks()}onFeatureFlags(e){if(this.addFeatureFlagsHandler(e),this._hasLoadedFlags){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
e(t,n)}return()=>this.removeFeatureFlagsHandler(e)}updateEarlyAccessFeatureEnrollment(e,t){var n,i=(this.instance.get_property(De)||[]).find((t=>t.flagKey===e)),r={["$feature_enrollment/".concat(e)]:t},o={$feature_flag:e,$feature_enrollment:t,$set:r}
i&&(o.$early_access_feature_name=i.name),this.instance.capture("$feature_enrollment_update",o),this.setPersonPropertiesForFlags(r,!1)
var s=h(h({},this.getFlagVariants()),{},{[e]:t})
null===(n=this.instance.persistence)||void 0===n||n.register({[nt]:Object.keys(st(s)),[je]:s}),this._fireFeatureFlagsCallbacks()}getEarlyAccessFeatures(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.instance.get_property(De)
if(n&&!t)return e(n)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api","/api/early_access_features/?token=".concat(this.instance.config.token)),method:"GET",callback:t=>{var n
if(t.json){var i=t.json.earlyAccessFeatures
return null===(n=this.instance.persistence)||void 0===n||n.register({[De]:i}),e(i)}}})}_prepareFeatureFlagsForCallbacks(){var e=this.getFlags(),t=this.getFlagVariants()
return{flags:e.filter((e=>t[e])),flagVariants:Object.keys(t).filter((e=>t[e])).reduce(((e,n)=>(e[n]=t[n],e)),{})}}_fireFeatureFlagsCallbacks(e){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
this.featureFlagEventHandlers.forEach((i=>i(t,n,{errorsLoading:e})))}setPersonPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.instance.get_property(Be)||{}
this.instance.register({[Be]:h(h({},n),e)}),t&&this.instance.reloadFeatureFlags()}resetPersonPropertiesForFlags(){this.instance.unregister(Be)}setGroupPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.instance.get_property(He)||{}
0!==Object.keys(n).length&&Object.keys(n).forEach((t=>{n[t]=h(h({},n[t]),e[t]),delete e[t]})),this.instance.register({[He]:h(h({},n),e)}),t&&this.instance.reloadFeatureFlags()}resetGroupPropertiesForFlags(e){if(e){var t=this.instance.get_property(He)||{}
this.instance.register({[He]:h(h({},t),{},{[e]:{}})})}else this.instance.unregister(He)}}Math.trunc||(Math.trunc=function(e){return e<0?Math.ceil(e):Math.floor(e)}),Number.isInteger||(Number.isInteger=function(e){return X(e)&&isFinite(e)&&Math.floor(e)===e})
var lt="0123456789abcdef"
class ct{constructor(e){if(this.bytes=e,16!==e.length)throw new TypeError("not 128-bit length")}static fromFieldsV7(e,t,n,i){if(!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(n)||!Number.isInteger(i)||e<0||t<0||n<0||i<0||e>0xffffffffffff||t>4095||n>1073741823||i>4294967295)throw new RangeError("invalid field value")
var r=new Uint8Array(16)
return r[0]=e/Math.pow(2,40),r[1]=e/Math.pow(2,32),r[2]=e/Math.pow(2,24),r[3]=e/Math.pow(2,16),r[4]=e/Math.pow(2,8),r[5]=e,r[6]=112|t>>>8,r[7]=t,r[8]=128|n>>>24,r[9]=n>>>16,r[10]=n>>>8,r[11]=n,r[12]=i>>>24,r[13]=i>>>16,r[14]=i>>>8,r[15]=i,new ct(r)}toString(){for(var e="",t=0;t<this.bytes.length;t++)e=e+lt.charAt(this.bytes[t]>>>4)+lt.charAt(15&this.bytes[t]),3!==t&&5!==t&&7!==t&&9!==t||(e+="-")
if(36!==e.length)throw new Error("Invalid UUIDv7 was generated")
return e}clone(){return new ct(this.bytes.slice(0))}equals(e){return 0===this.compareTo(e)}compareTo(e){for(var t=0;t<16;t++){var n=this.bytes[t]-e.bytes[t]
if(0!==n)return Math.sign(n)}return 0}}class ut{constructor(){p(this,"timestamp",0),p(this,"counter",0),p(this,"random",new ht)}generate(){var e=this.generateOrAbort()
if(z(e)){this.timestamp=0
var t=this.generateOrAbort()
if(z(t))throw new Error("Could not generate UUID after timestamp reset")
return t}return e}generateOrAbort(){var e=Date.now()
if(e>this.timestamp)this.timestamp=e,this.resetCounter()
else{if(!(e+1e4>this.timestamp))return
this.counter++,this.counter>4398046511103&&(this.timestamp++,this.resetCounter())}return ct.fromFieldsV7(this.timestamp,Math.trunc(this.counter/Math.pow(2,30)),this.counter&Math.pow(2,30)-1,this.random.nextUint32())}resetCounter(){this.counter=1024*this.random.nextUint32()+(1023&this.random.nextUint32())}}var dt,ft=e=>{if("undefined"!=typeof UUIDV7_DENY_WEAK_RNG&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available")
for(var t=0;t<e.length;t++)e[t]=65536*Math.trunc(65536*Math.random())+Math.trunc(65536*Math.random())
return e}
m&&!z(m.crypto)&&crypto.getRandomValues&&(ft=e=>crypto.getRandomValues(e))
class ht{constructor(){p(this,"buffer",new Uint32Array(8)),p(this,"cursor",1/0)}nextUint32(){return this.cursor>=this.buffer.length&&(ft(this.buffer),this.cursor=0),this.buffer[this.cursor++]}}var pt=()=>gt().toString(),gt=()=>(dt||(dt=new ut)).generate(),vt="",_t=/[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i
var mt={is_supported:()=>!!x,error:function(e){ne.error("cookieStore error: "+e)},get:function(e){if(x){try{for(var t=e+"=",n=x.cookie.split(";").filter((e=>e.length)),i=0;i<n.length;i++){for(var r=n[i];" "==r.charAt(0);)r=r.substring(1,r.length)
if(0===r.indexOf(t))return decodeURIComponent(r.substring(t.length,r.length))}}catch(e){}return null}},parse:function(e){var t
try{t=JSON.parse(mt.get(e))||{}}catch(e){}return t},set:function(e,t,n,i,r){if(x)try{var o="",s="",a=function(e,t){if(t){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x
if(vt)return vt
if(!t)return""
if(["localhost","127.0.0.1"].includes(e))return""
for(var n=e.split("."),i=Math.min(n.length,8),r="dmn_chk_"+pt(),o=new RegExp("(^|;)\\s*"+r+"=1");!vt&&i--;){var s=n.slice(i).join("."),a=r+"=1;domain=."+s
t.cookie=a,o.test(t.cookie)&&(t.cookie=a+";expires=Thu, 01 Jan 1970 00:00:00 GMT",vt=s)}return vt}(e)
if(!n){var i=(e=>{var t=e.match(_t)
return t?t[0]:""})(e)
i!==n&&ne.info("Warning: cookie subdomain discovery mismatch",i,n),n=i}return n?"; domain=."+n:""}return""}(x.location.hostname,i)
if(n){var l=new Date
l.setTime(l.getTime()+24*n*60*60*1e3),o="; expires="+l.toUTCString()}r&&(s="; secure")
var c=e+"="+encodeURIComponent(JSON.stringify(t))+o+"; SameSite=Lax; path=/"+a+s
return c.length>3686.4&&ne.warn("cookieStore warning: large cookie, len="+c.length),x.cookie=c,c}catch(e){return}},remove:function(e,t){try{mt.set(e,"",-1,t)}catch(e){return}}},bt=null,yt={is_supported:function(){if(!J(bt))return bt
var e=!0
if(z(m))e=!1
else try{var t="__mplssupport__"
yt.set(t,"xyz"),'"xyz"'!==yt.get(t)&&(e=!1),yt.remove(t)}catch(t){e=!1}return e||ne.error("localStorage unsupported; falling back to cookie store"),bt=e,e},error:function(e){ne.error("localStorage error: "+e)},get:function(e){try{return null==m?void 0:m.localStorage.getItem(e)}catch(e){yt.error(e)}return null},parse:function(e){try{return JSON.parse(yt.get(e))||{}}catch(e){}return null},set:function(e,t){try{null==m||m.localStorage.setItem(e,JSON.stringify(t))}catch(e){yt.error(e)}},remove:function(e){try{null==m||m.localStorage.removeItem(e)}catch(e){yt.error(e)}}},wt=["distinct_id",Fe,Me,Xe,Ke],kt=h(h({},yt),{},{parse:function(e){try{var t={}
try{t=mt.parse(e)||{}}catch(e){}var n=ae(t,JSON.parse(yt.get(e)||"{}"))
return yt.set(e,n),n}catch(e){}return null},set:function(e,t,n,i,r,o){try{yt.set(e,t,void 0,void 0,o)
var s={}
wt.forEach((e=>{t[e]&&(s[e]=t[e])})),Object.keys(s).length&&mt.set(e,s,n,i,r,o)}catch(e){yt.error(e)}},remove:function(e,t){try{null==m||m.localStorage.removeItem(e),mt.remove(e,t)}catch(e){yt.error(e)}}}),St={},xt={is_supported:function(){return!0},error:function(e){ne.error("memoryStorage error: "+e)},get:function(e){return St[e]||null},parse:function(e){return St[e]||null},set:function(e,t){St[e]=t},remove:function(e){delete St[e]}},Et=null,$t={is_supported:function(){if(!J(Et))return Et
if(Et=!0,z(m))Et=!1
else try{var e="__support__"
$t.set(e,"xyz"),'"xyz"'!==$t.get(e)&&(Et=!1),$t.remove(e)}catch(e){Et=!1}return Et},error:function(e){ne.error("sessionStorage error: ",e)},get:function(e){try{return null==m?void 0:m.sessionStorage.getItem(e)}catch(e){$t.error(e)}return null},parse:function(e){try{return JSON.parse($t.get(e))||null}catch(e){}return null},set:function(e,t){try{null==m||m.sessionStorage.setItem(e,JSON.stringify(t))}catch(e){$t.error(e)}},remove:function(e){try{null==m||m.sessionStorage.removeItem(e)}catch(e){$t.error(e)}}},Ct=["localhost","127.0.0.1"],Pt=e=>{var t=null==x?void 0:x.createElement("a")
return z(t)?null:(t.href=e,t)},Tt=function(e,t){for(var n,i=((e.split("#")[0]||"").split("?")[1]||"").split("&"),r=0;r<i.length;r++){var o=i[r].split("=")
if(o[0]===t){n=o
break}}if(!q(n)||n.length<2)return""
var s=n[1]
try{s=decodeURIComponent(s)}catch(e){ne.error("Skipping decoding for malformed query param: "+s)}return s.replace(/\+/g," ")},Lt=function(e,t,n){if(!e||!t||!t.length)return e
for(var i=e.split("#"),r=i[0]||"",o=i[1],s=r.split("?"),a=s[1],l=s[0],c=(a||"").split("&"),u=[],d=0;d<c.length;d++){var f=c[d].split("=")
q(f)&&(t.includes(f[0])?u.push(f[0]+"="+n):u.push(c[d]))}var h=l
return null!=a&&(h+="?"+u.join("&")),null!=o&&(h+="#"+o),h},It=function(e,t){var n=e.match(new RegExp(t+"=([^&]*)"))
return n?n[1]:null},Rt="Mobile",Ot="iOS",Ft="Android",Mt="Tablet",At=Ft+" "+Mt,Nt="iPad",jt="Apple",Dt=jt+" Watch",Bt="Safari",Ht="BlackBerry",qt="Samsung",Ut=qt+"Browser",Gt=qt+" Internet",Wt="Chrome",zt=Wt+" OS",Vt=Wt+" "+Ot,Qt="Internet Explorer",Jt=Qt+" "+Rt,Kt="Opera",Xt=Kt+" Mini",Yt="Edge",Zt="Microsoft "+Yt,en="Firefox",tn=en+" "+Ot,nn="Nintendo",rn="PlayStation",on="Xbox",sn=Ft+" "+Rt,an=Rt+" "+Bt,ln="Windows",cn=ln+" Phone",un="Nokia",dn="Ouya",fn="Generic",hn=fn+" "+Rt.toLowerCase(),pn=fn+" "+Mt.toLowerCase(),gn="Konqueror",vn="(\\d+(\\.\\d+)?)",_n=new RegExp("Version/"+vn),mn=new RegExp(on,"i"),bn=new RegExp(rn+" \\w+","i"),yn=new RegExp(nn+" \\w+","i"),wn=new RegExp(Ht+"|PlayBook|BB10","i"),kn={"NT3.51":"NT 3.11","NT4.0":"NT 4.0","5.0":"2000",5.1:"XP",5.2:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1",6.4:"10","10.0":"10"},Sn=function(e,t){return t=t||"",F(e," OPR/")&&F(e,"Mini")?Xt:F(e," OPR/")?Kt:wn.test(e)?Ht:F(e,"IE"+Rt)||F(e,"WPDesktop")?Jt:F(e,Ut)?Gt:F(e,Yt)||F(e,"Edg/")?Zt:F(e,"FBIOS")?"Facebook "+Rt:F(e,"UCWEB")||F(e,"UCBrowser")?"UC Browser":F(e,"CriOS")?Vt:F(e,"CrMo")||F(e,Wt)?Wt:F(e,Ft)&&F(e,Bt)?sn:F(e,"FxiOS")?tn:F(e.toLowerCase(),gn.toLowerCase())?gn:((e,t)=>t&&F(t,jt)||function(e){return F(e,Bt)&&!F(e,Wt)&&!F(e,Ft)}(e))(e,t)?F(e,Rt)?an:Bt:F(e,en)?en:F(e,"MSIE")||F(e,"Trident/")?Qt:F(e,"Gecko")?en:""},xn={[Jt]:[new RegExp("rv:"+vn)],[Zt]:[new RegExp(Yt+"?\\/"+vn)],[Wt]:[new RegExp("("+Wt+"|CrMo)\\/"+vn)],[Vt]:[new RegExp("CriOS\\/"+vn)],"UC Browser":[new RegExp("(UCBrowser|UCWEB)\\/"+vn)],[Bt]:[_n],[an]:[_n],[Kt]:[new RegExp("(Opera|OPR)\\/"+vn)],[en]:[new RegExp(en+"\\/"+vn)],[tn]:[new RegExp("FxiOS\\/"+vn)],[gn]:[new RegExp("Konqueror[:/]?"+vn,"i")],[Ht]:[new RegExp(Ht+" "+vn),_n],[sn]:[new RegExp("android\\s"+vn,"i")],[Gt]:[new RegExp(Ut+"\\/"+vn)],[Qt]:[new RegExp("(rv:|MSIE )"+vn)],Mozilla:[new RegExp("rv:"+vn)]},En=[[new RegExp(on+"; "+on+" (.*?)[);]","i"),e=>[on,e&&e[1]||""]],[new RegExp(nn,"i"),[nn,""]],[new RegExp(rn,"i"),[rn,""]],[wn,[Ht,""]],[new RegExp(ln,"i"),(e,t)=>{if(/Phone/.test(t)||/WPDesktop/.test(t))return[cn,""]
if(new RegExp(Rt).test(t)&&!/IEMobile\b/.test(t))return[ln+" "+Rt,""]
var n=/Windows NT ([0-9.]+)/i.exec(t)
if(n&&n[1]){var i=n[1],r=kn[i]||""
return/arm/i.test(t)&&(r="RT"),[ln,r]}return[ln,""]}],[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,e=>{if(e&&e[3]){var t=[e[3],e[4],e[5]||"0"]
return[Ot,t.join(".")]}return[Ot,""]}],[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,e=>{var t=""
return e&&e.length>=3&&(t=z(e[2])?e[3]:e[2]),["watchOS",t]}],[new RegExp("("+Ft+" (\\d+)\\.(\\d+)\\.?(\\d+)?|"+Ft+")","i"),e=>{if(e&&e[2]){var t=[e[2],e[3],e[4]||"0"]
return[Ft,t.join(".")]}return[Ft,""]}],[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,e=>{var t=["Mac OS X",""]
if(e&&e[1]){var n=[e[1],e[2],e[3]||"0"]
t[1]=n.join(".")}return t}],[/Mac/i,["Mac OS X",""]],[/CrOS/,[zt,""]],[/Linux|debian/i,["Linux",""]]],$n=function(e){return yn.test(e)?nn:bn.test(e)?rn:mn.test(e)?on:new RegExp(dn,"i").test(e)?dn:new RegExp("("+cn+"|WPDesktop)","i").test(e)?cn:/iPad/.test(e)?Nt:/iPod/.test(e)?"iPod Touch":/iPhone/.test(e)?"iPhone":/(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)?Dt:wn.test(e)?Ht:/(kobo)\s(ereader|touch)/i.test(e)?"Kobo":new RegExp(un,"i").test(e)?un:/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e)||/(kf[a-z]+)( bui|\)).+silk\//i.test(e)?"Kindle Fire":/(Android|ZTE)/i.test(e)?!new RegExp(Rt).test(e)||/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e)?/pixel[\daxl ]{1,6}/i.test(e)&&!/pixel c/i.test(e)||/(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e)||/lmy47v/i.test(e)&&!/QTAQZ3/i.test(e)?Ft:At:Ft:new RegExp("(pda|"+Rt+")","i").test(e)?hn:new RegExp(Mt,"i").test(e)&&!new RegExp(Mt+" pc","i").test(e)?pn:""},Cn="https?://(.*)",Pn=["gclid","gclsrc","dclid","gbraid","wbraid","fbclid","msclkid","twclid","li_fat_id","igshid","ttclid","rdt_cid","irclid","_kx"],Tn=le(["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gad_source","mc_cid"],Pn),Ln="<masked>",In={campaignParams:function(){var{customTrackedParams:e,maskPersonalDataProperties:t,customPersonalDataProperties:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!x)return{}
var i=t?le([],Pn,n||[]):[]
return this._campaignParamsFromUrl(Lt(x.URL,i,Ln),e)},_campaignParamsFromUrl:function(e,t){var n=Tn.concat(t||[]),i={}
return se(n,(function(t){var n=Tt(e,t)
i[t]=n||null})),i},_searchEngine:function(e){return e?0===e.search(Cn+"google.([^/?]*)")?"google":0===e.search(Cn+"bing.com")?"bing":0===e.search(Cn+"yahoo.com")?"yahoo":0===e.search(Cn+"duckduckgo.com")?"duckduckgo":null:null},_searchInfoFromReferrer:function(e){var t=In._searchEngine(e),n="yahoo"!=t?"q":"p",i={}
if(!J(t)){i.$search_engine=t
var r=x?Tt(x.referrer,n):""
r.length&&(i.ph_keyword=r)}return i},searchInfo:function(){var e=null==x?void 0:x.referrer
return e?this._searchInfoFromReferrer(e):{}},browser:Sn,browserVersion:function(e,t){var n=Sn(e,t),i=xn[n]
if(z(i))return null
for(var r=0;r<i.length;r++){var o=i[r],s=e.match(o)
if(s)return parseFloat(s[s.length-2])}return null},browserLanguage:function(){return navigator.language||navigator.userLanguage},browserLanguagePrefix:function(){var e=this.browserLanguage()
return"string"==typeof e?e.split("-")[0]:void 0},os:function(e){for(var t=0;t<En.length;t++){var[n,i]=En[t],r=n.exec(e),o=r&&(U(i)?i(r,e):i)
if(o)return o}return["",""]},device:$n,deviceType:function(e){var t=$n(e)
return t===Nt||t===At||"Kobo"===t||"Kindle Fire"===t||t===pn?Mt:t===nn||t===on||t===rn||t===dn?"Console":t===Dt?"Wearable":t?Rt:"Desktop"},referrer:function(){return(null==x?void 0:x.referrer)||"$direct"},referringDomain:function(){var e
return null!=x&&x.referrer&&(null===(e=Pt(x.referrer))||void 0===e?void 0:e.host)||"$direct"},referrerInfo:function(){return{$referrer:this.referrer(),$referring_domain:this.referringDomain()}},initialPersonInfo:function(){return{r:this.referrer().substring(0,1e3),u:null==E?void 0:E.href.substring(0,1e3)}},initialPersonPropsFromInfo:function(e){var t,{r:n,u:i}=e,r={$initial_referrer:n,$initial_referring_domain:null==n?void 0:"$direct"==n?"$direct":null===(t=Pt(n))||void 0===t?void 0:t.host}
if(i){r.$initial_current_url=i
var o=Pt(i)
r.$initial_host=null==o?void 0:o.host,r.$initial_pathname=null==o?void 0:o.pathname,se(this._campaignParamsFromUrl(i),(function(e,t){r["$initial_"+A(t)]=e}))}return n&&se(this._searchInfoFromReferrer(n),(function(e,t){r["$initial_"+A(t)]=e})),r},timezone:function(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){return}},timezoneOffset:function(){try{return(new Date).getTimezoneOffset()}catch(e){return}},properties:function(){var{maskPersonalDataProperties:e,customPersonalDataProperties:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!L)return{}
var n=e?le([],Pn,t||[]):[],[i,r]=In.os(L)
return ae(he({$os:i,$os_version:r,$browser:In.browser(L,navigator.vendor),$device:In.device(L),$device_type:In.deviceType(L),$timezone:In.timezone(),$timezone_offset:In.timezoneOffset()}),{$current_url:Lt(null==E?void 0:E.href,n,Ln),$host:null==E?void 0:E.host,$pathname:null==E?void 0:E.pathname,$raw_user_agent:L.length>1e3?L.substring(0,997)+"...":L,$browser_version:In.browserVersion(L,navigator.vendor),$browser_language:In.browserLanguage(),$browser_language_prefix:In.browserLanguagePrefix(),$screen_height:null==m?void 0:m.screen.height,$screen_width:null==m?void 0:m.screen.width,$viewport_height:null==m?void 0:m.innerHeight,$viewport_width:null==m?void 0:m.innerWidth,$lib:"web",$lib_version:_.LIB_VERSION,$insert_id:Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10),$time:Date.now()/1e3})},people_properties:function(){if(!L)return{}
var[e,t]=In.os(L)
return ae(he({$os:e,$os_version:t,$browser:In.browser(L,navigator.vendor)}),{$browser_version:In.browserVersion(L,navigator.vendor)})}},Rn=["cookie","localstorage","localstorage+cookie","sessionstorage","memory"]
class On{constructor(e){this.config=e,this.props={},this.campaign_params_saved=!1,this.name=(e=>{var t=""
return e.token&&(t=e.token.replace(/\+/g,"PL").replace(/\//g,"SL").replace(/=/g,"EQ")),e.persistence_name?"ph_"+e.persistence_name:"ph_"+t+"_posthog"})(e),this.storage=this.buildStorage(e),this.load(),e.debug&&ne.info("Persistence loaded",e.persistence,h({},this.props)),this.update_config(e,e),this.save()}buildStorage(e){-1===Rn.indexOf(e.persistence.toLowerCase())&&(ne.critical("Unknown persistence type "+e.persistence+"; falling back to localStorage+cookie"),e.persistence="localStorage+cookie")
var t=e.persistence.toLowerCase()
return"localstorage"===t&&yt.is_supported()?yt:"localstorage+cookie"===t&&kt.is_supported()?kt:"sessionstorage"===t&&$t.is_supported()?$t:"memory"===t?xt:"cookie"===t?mt:kt.is_supported()?kt:mt}properties(){var e={}
return se(this.props,(function(t,n){if(n===je&&G(t))for(var i=Object.keys(t),r=0;r<i.length;r++)e["$feature/".concat(i[r])]=t[i[r]]
else s=n,a=!1,(J(o=et)?a:k&&o.indexOf===k?-1!=o.indexOf(s):(se(o,(function(e){if(a||(a=e===s))return re})),a))||(e[n]=t)
var o,s,a})),e}load(){if(!this.disabled){var e=this.storage.parse(this.name)
e&&(this.props=ae({},e))}}save(){this.disabled||this.storage.set(this.name,this.props,this.expire_days,this.cross_subdomain,this.secure,this.config.debug)}remove(){this.storage.remove(this.name,!1),this.storage.remove(this.name,!0)}clear(){this.remove(),this.props={}}register_once(e,t,n){if(G(e)){z(t)&&(t="None"),this.expire_days=z(n)?this.default_expiry:n
var i=!1
if(se(e,((e,n)=>{this.props.hasOwnProperty(n)&&this.props[n]!==t||(this.props[n]=e,i=!0)})),i)return this.save(),!0}return!1}register(e,t){if(G(e)){this.expire_days=z(t)?this.default_expiry:t
var n=!1
if(se(e,((t,i)=>{e.hasOwnProperty(i)&&this.props[i]!==t&&(this.props[i]=t,n=!0)})),n)return this.save(),!0}return!1}unregister(e){e in this.props&&(delete this.props[e],this.save())}update_campaign_params(){if(!this.campaign_params_saved){var e=In.campaignParams({customTrackedParams:this.config.custom_campaign_params,maskPersonalDataProperties:this.config.mask_personal_data_properties,customPersonalDataProperties:this.config.custom_personal_data_properties})
W(he(e))||this.register(e),this.campaign_params_saved=!0}}update_search_keyword(){this.register(In.searchInfo())}update_referrer_info(){this.register_once(In.referrerInfo(),void 0)}set_initial_person_info(){this.props[Qe]||this.props[Je]||this.register_once({[Ke]:In.initialPersonInfo()},void 0)}get_referrer_info(){return he({$referrer:this.props.$referrer,$referring_domain:this.props.$referring_domain})}get_initial_props(){var e={}
se([Je,Qe],(t=>{var n=this.props[t]
n&&se(n,(function(t,n){e["$initial_"+A(n)]=t}))}))
var t=this.props[Ke]
if(t){var n=In.initialPersonPropsFromInfo(t)
ae(e,n)}return e}safe_merge(e){return se(this.props,(function(t,n){n in e||(e[n]=t)})),e}update_config(e,t){if(this.default_expiry=this.expire_days=e.cookie_expiration,this.set_disabled(e.disable_persistence),this.set_cross_subdomain(e.cross_subdomain_cookie),this.set_secure(e.secure_cookie),e.persistence!==t.persistence){var n=this.buildStorage(e),i=this.props
this.clear(),this.storage=n,this.props=i,this.save()}}set_disabled(e){this.disabled=e,this.disabled?this.remove():this.save()}set_cross_subdomain(e){e!==this.cross_subdomain&&(this.cross_subdomain=e,this.remove(),this.save())}get_cross_subdomain(){return!!this.cross_subdomain}set_secure(e){e!==this.secure&&(this.secure=e,this.remove(),this.save())}set_event_timer(e,t){var n=this.props[ye]||{}
n[e]=t,this.props[ye]=n,this.save()}remove_event_timer(e){var t=(this.props[ye]||{})[e]
return z(t)||(delete this.props[ye][e],this.save()),t}get_property(e){return this.props[e]}set_property(e,t){this.props[e]=t,this.save()}}function Fn(e){var t,n
return(null===(t=JSON.stringify(e,(n=[],function(e,t){if(G(t)){for(;n.length>0&&n[n.length-1]!==this;)n.pop()
return n.includes(t)?"[Circular]":(n.push(t),t)}return t})))||void 0===t?void 0:t.length)||0}function Mn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6606028.8
if(e.size>=t&&e.data.length>1){var n=Math.floor(e.data.length/2),i=e.data.slice(0,n),r=e.data.slice(n)
return[Mn({size:Fn(i),data:i,sessionId:e.sessionId,windowId:e.windowId}),Mn({size:Fn(r),data:r,sessionId:e.sessionId,windowId:e.windowId})].flatMap((e=>e))}return[e]}var An=(e=>(e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin",e))(An||{}),Nn=(e=>(e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration",e[e.Selection=14]="Selection",e[e.AdoptedStyleSheet=15]="AdoptedStyleSheet",e[e.CustomElement=16]="CustomElement",e))(Nn||{})
function jn(e){var t
return e instanceof Element&&(e.id===Ye||!(null===(t=e.closest)||void 0===t||!t.call(e,".toolbar-global-fade-container")))}function Dn(e){return!!e&&1===e.nodeType}function Bn(e,t){return!!e&&!!e.tagName&&e.tagName.toLowerCase()===t.toLowerCase()}function Hn(e){return!!e&&3===e.nodeType}function qn(e){return!!e&&11===e.nodeType}function Un(e){return e?M(e).split(/\s+/):[]}function Gn(e){var t=null==m?void 0:m.location.href
return!!(t&&e&&e.some((e=>t.match(e))))}function Wn(e){var t=""
switch(typeof e.className){case"string":t=e.className
break
case"object":t=(e.className&&"baseVal"in e.className?e.className.baseVal:null)||e.getAttribute("class")||""
break
default:t=""}return Un(t)}function zn(e){return K(e)?null:M(e).split(/(\s+)/).filter((e=>oi(e))).join("").replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)}function Vn(e){var t=""
return Xn(e)&&!Yn(e)&&e.childNodes&&e.childNodes.length&&se(e.childNodes,(function(e){var n
Hn(e)&&e.textContent&&(t+=null!==(n=zn(e.textContent))&&void 0!==n?n:"")})),M(t)}function Qn(e){return z(e.target)?e.srcElement||null:null!==(t=e.target)&&void 0!==t&&t.shadowRoot?e.composedPath()[0]||null:e.target||null
var t}var Jn=["a","button","form","input","select","textarea","label"]
function Kn(e){var t=e.parentNode
return!(!t||!Dn(t))&&t}function Xn(e){for(var t=e;t.parentNode&&!Bn(t,"body");t=t.parentNode){var n=Wn(t)
if(F(n,"ph-sensitive")||F(n,"ph-no-capture"))return!1}if(F(Wn(e),"ph-include"))return!0
var i=e.type||""
if(V(i))switch(i.toLowerCase()){case"hidden":case"password":return!1}var r=e.name||e.id||""
return!V(r)||!/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(r.replace(/[^a-zA-Z0-9]/g,""))}function Yn(e){return!!(Bn(e,"input")&&!["button","checkbox","submit","reset"].includes(e.type)||Bn(e,"select")||Bn(e,"textarea")||"true"===e.getAttribute("contenteditable"))}var Zn="(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",ei=new RegExp("^(?:".concat(Zn,")$")),ti=new RegExp(Zn),ni="\\d{3}-?\\d{2}-?\\d{4}",ii=new RegExp("^(".concat(ni,")$")),ri=new RegExp("(".concat(ni,")"))
function oi(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(K(e))return!1
if(V(e)){if(e=M(e),(t?ei:ti).test((e||"").replace(/[- ]/g,"")))return!1
if((t?ii:ri).test(e))return!1}return!0}function si(e){var t=Vn(e)
return oi(t="".concat(t," ").concat(ai(e)).trim())?t:""}function ai(e){var t=""
return e&&e.childNodes&&e.childNodes.length&&se(e.childNodes,(function(e){var n
if(e&&"span"===(null===(n=e.tagName)||void 0===n?void 0:n.toLowerCase()))try{var i=Vn(e)
t="".concat(t," ").concat(i).trim(),e.childNodes&&e.childNodes.length&&(t="".concat(t," ").concat(ai(e)).trim())}catch(e){ne.error("[AutoCapture]",e)}})),t}function li(e){return function(e){var t=e.map((e=>{var t,n,i=""
if(e.tag_name&&(i+=e.tag_name),e.attr_class)for(var r of(e.attr_class.sort(),e.attr_class))i+=".".concat(r.replace(/"/g,""))
var o=h(h(h(h({},e.text?{text:e.text}:{}),{},{"nth-child":null!==(t=e.nth_child)&&void 0!==t?t:0,"nth-of-type":null!==(n=e.nth_of_type)&&void 0!==n?n:0},e.href?{href:e.href}:{}),e.attr_id?{attr_id:e.attr_id}:{}),e.attributes),s={}
return ce(o).sort(((e,t)=>{var[n]=e,[i]=t
return n.localeCompare(i)})).forEach((e=>{var[t,n]=e
return s[ci(t.toString())]=ci(n.toString())})),(i+=":")+ce(o).map((e=>{var[t,n]=e
return"".concat(t,'="').concat(n,'"')})).join("")}))
return t.join(";")}(function(e){return e.map((e=>{var t,n,i={text:null===(t=e.$el_text)||void 0===t?void 0:t.slice(0,400),tag_name:e.tag_name,href:null===(n=e.attr__href)||void 0===n?void 0:n.slice(0,2048),attr_class:ui(e),attr_id:e.attr__id,nth_child:e.nth_child,nth_of_type:e.nth_of_type,attributes:{}}
return ce(e).filter((e=>{var[t]=e
return 0===t.indexOf("attr__")})).forEach((e=>{var[t,n]=e
return i.attributes[t]=n})),i}))}(e))}function ci(e){return e.replace(/"|\\"/g,'\\"')}function ui(e){var t=e.attr__class
return t?q(t)?t:Un(t):void 0}var di="[SessionRecording]",fi="redacted",hi={initiatorTypes:["audio","beacon","body","css","early-hint","embed","fetch","frame","iframe","icon","image","img","input","link","navigation","object","ping","script","track","video","xmlhttprequest"],maskRequestFn:e=>e,recordHeaders:!1,recordBody:!1,recordInitialRequests:!1,recordPerformance:!1,performanceEntryTypeToObserve:["first-input","navigation","paint","resource"],payloadSizeLimitBytes:1e6,payloadHostDenyList:[".lr-ingest.io",".ingest.sentry.io",".clarity.ms","analytics.google.com"]},pi=["authorization","x-forwarded-for","authorization","cookie","set-cookie","x-api-key","x-real-ip","remote-addr","forwarded","proxy-authorization","x-csrf-token","x-csrftoken","x-xsrf-token"],gi=["password","secret","passwd","api_key","apikey","auth","credentials","mysql_pwd","privatekey","private_key","token"],vi=["/s/","/e/","/i/"]
function _i(e,t,n,i){if(K(e))return e
var r=(null==t?void 0:t["content-length"])||function(e){return new Blob([e]).size}(e)
return V(r)&&(r=parseInt(r)),r>n?di+" ".concat(i," body too large to record (").concat(r," bytes)"):e}function mi(e,t){if(K(e))return e
var n=e
return oi(n,!1)||(n=di+" "+t+" body "+fi),se(gi,(e=>{var i,r
null!==(i=n)&&void 0!==i&&i.length&&-1!==(null===(r=n)||void 0===r?void 0:r.indexOf(e))&&(n=di+" "+t+" body "+fi+" as might contain: "+e)})),n}var bi=(e,t)=>{var n,i,r,o={payloadSizeLimitBytes:hi.payloadSizeLimitBytes,performanceEntryTypeToObserve:[...hi.performanceEntryTypeToObserve],payloadHostDenyList:[...t.payloadHostDenyList||[],...hi.payloadHostDenyList]},s=!1!==e.session_recording.recordHeaders&&t.recordHeaders,a=!1!==e.session_recording.recordBody&&t.recordBody,l=!1!==e.capture_performance&&t.recordPerformance,c=(n=o,r=Math.min(1e6,null!==(i=n.payloadSizeLimitBytes)&&void 0!==i?i:1e6),e=>(null!=e&&e.requestBody&&(e.requestBody=_i(e.requestBody,e.requestHeaders,r,"Request")),null!=e&&e.responseBody&&(e.responseBody=_i(e.responseBody,e.responseHeaders,r,"Response")),e)),u=t=>{return c(((e,t)=>{var n,i=Pt(e.name),r=0===t.indexOf("http")?null===(n=Pt(t))||void 0===n?void 0:n.pathname:t
"/"===r&&(r="")
var o=null==i?void 0:i.pathname.replace(r||"","")
if(!(i&&o&&vi.some((e=>0===o.indexOf(e)))))return e})((i=(n=t).requestHeaders,K(i)||se(Object.keys(null!=i?i:{}),(e=>{pi.includes(e.toLowerCase())&&(i[e]=fi)})),n),e.api_host))
var n,i},d=U(e.session_recording.maskNetworkRequestFn)
return d&&U(e.session_recording.maskCapturedNetworkRequestFn)&&ne.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."),d&&(e.session_recording.maskCapturedNetworkRequestFn=t=>{var n=e.session_recording.maskNetworkRequestFn({url:t.name})
return h(h({},t),{},{name:null==n?void 0:n.url})}),o.maskRequestFn=U(e.session_recording.maskCapturedNetworkRequestFn)?t=>{var n,i,r,o=u(t)
return o&&null!==(n=null===(i=(r=e.session_recording).maskCapturedNetworkRequestFn)||void 0===i?void 0:i.call(r,o))&&void 0!==n?n:void 0}:e=>function(e){if(!z(e))return e.requestBody=mi(e.requestBody,"Request"),e.responseBody=mi(e.responseBody,"Response"),e}(u(e)),h(h(h({},hi),o),{},{recordHeaders:s,recordBody:a,recordPerformance:l,recordInitialRequests:l})}
function yi(e,t,n,i,r){return t>n&&(ne.warn("min cannot be greater than max."),t=n),X(e)?e>n?(i&&ne.warn(i+" cannot be  greater than max: "+n+". Using max value instead."),n):e<t?(i&&ne.warn(i+" cannot be less than min: "+t+". Using min value instead."),t):e:(i&&ne.warn(i+" must be a number. using max or fallback. max: "+n+", fallback: "+r),yi(r||n,t,n,i))}class wi{constructor(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
p(this,"bucketSize",100),p(this,"refillRate",10),p(this,"mutationBuckets",{}),p(this,"loggedTracker",{}),p(this,"refillBuckets",(()=>{Object.keys(this.mutationBuckets).forEach((e=>{this.mutationBuckets[e]=this.mutationBuckets[e]+this.refillRate,this.mutationBuckets[e]>=this.bucketSize&&delete this.mutationBuckets[e]}))})),p(this,"getNodeOrRelevantParent",(e=>{var t=this.rrweb.mirror.getNode(e)
if("svg"!==(null==t?void 0:t.nodeName)&&t instanceof Element){var n=t.closest("svg")
if(n)return[this.rrweb.mirror.getId(n),n]}return[e,t]})),p(this,"numberOfChanges",(e=>{var t,n,i,r,o,s,a,l
return(null!==(t=null===(n=e.removes)||void 0===n?void 0:n.length)&&void 0!==t?t:0)+(null!==(i=null===(r=e.attributes)||void 0===r?void 0:r.length)&&void 0!==i?i:0)+(null!==(o=null===(s=e.texts)||void 0===s?void 0:s.length)&&void 0!==o?o:0)+(null!==(a=null===(l=e.adds)||void 0===l?void 0:l.length)&&void 0!==a?a:0)})),p(this,"throttleMutations",(e=>{if(3!==e.type||0!==e.data.source)return e
var t=e.data,n=this.numberOfChanges(t)
t.attributes&&(t.attributes=t.attributes.filter((e=>{var t,n,i,[r,o]=this.getNodeOrRelevantParent(e.id)
return 0!==this.mutationBuckets[r]&&(this.mutationBuckets[r]=null!==(t=this.mutationBuckets[r])&&void 0!==t?t:this.bucketSize,this.mutationBuckets[r]=Math.max(this.mutationBuckets[r]-1,0),0===this.mutationBuckets[r]&&(this.loggedTracker[r]||(this.loggedTracker[r]=!0,null===(n=(i=this.options).onBlockedNode)||void 0===n||n.call(i,r,o))),e)})))
var i=this.numberOfChanges(t)
return 0!==i||n===i?e:void 0})),this.rrweb=e,this.options=i,this.refillRate=yi(null!==(t=this.options.refillRate)&&void 0!==t?t:this.refillRate,0,100,"mutation throttling refill rate"),this.bucketSize=yi(null!==(n=this.options.bucketSize)&&void 0!==n?n:this.bucketSize,0,100,"mutation throttling bucket size"),setInterval((()=>{this.refillBuckets()}),1e3)}}var ki=Uint8Array,Si=Uint16Array,xi=Uint32Array,Ei=new ki([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),$i=new ki([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ci=new ki([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Pi=function(e,t){for(var n=new Si(31),i=0;i<31;++i)n[i]=t+=1<<e[i-1]
var r=new xi(n[30])
for(i=1;i<30;++i)for(var o=n[i];o<n[i+1];++o)r[o]=o-n[i]<<5|i
return[n,r]},Ti=Pi(Ei,2),Li=Ti[0],Ii=Ti[1]
Li[28]=258,Ii[258]=28
for(var Ri=Pi($i,0)[1],Oi=new Si(32768),Fi=0;Fi<32768;++Fi){var Mi=(43690&Fi)>>>1|(21845&Fi)<<1
Mi=(61680&(Mi=(52428&Mi)>>>2|(13107&Mi)<<2))>>>4|(3855&Mi)<<4,Oi[Fi]=((65280&Mi)>>>8|(255&Mi)<<8)>>>1}var Ai=function(e,t,n){for(var i=e.length,r=0,o=new Si(t);r<i;++r)++o[e[r]-1]
var s,a=new Si(t)
for(r=0;r<t;++r)a[r]=a[r-1]+o[r-1]<<1
for(s=new Si(i),r=0;r<i;++r)s[r]=Oi[a[e[r]-1]++]>>>15-e[r]
return s},Ni=new ki(288)
for(Fi=0;Fi<144;++Fi)Ni[Fi]=8
for(Fi=144;Fi<256;++Fi)Ni[Fi]=9
for(Fi=256;Fi<280;++Fi)Ni[Fi]=7
for(Fi=280;Fi<288;++Fi)Ni[Fi]=8
var ji=new ki(32)
for(Fi=0;Fi<32;++Fi)ji[Fi]=5
var Di=Ai(Ni,9),Bi=Ai(ji,5),Hi=function(e){return(e/8>>0)+(7&e&&1)},qi=function(e,t,n){(null==n||n>e.length)&&(n=e.length)
var i=new(e instanceof Si?Si:e instanceof xi?xi:ki)(n-t)
return i.set(e.subarray(t,n)),i},Ui=function(e,t,n){n<<=7&t
var i=t/8>>0
e[i]|=n,e[i+1]|=n>>>8},Gi=function(e,t,n){n<<=7&t
var i=t/8>>0
e[i]|=n,e[i+1]|=n>>>8,e[i+2]|=n>>>16},Wi=function(e,t){for(var n=[],i=0;i<e.length;++i)e[i]&&n.push({s:i,f:e[i]})
var r=n.length,o=n.slice()
if(!r)return[new ki(0),0]
if(1==r){var s=new ki(n[0].s+1)
return s[n[0].s]=1,[s,1]}n.sort((function(e,t){return e.f-t.f})),n.push({s:-1,f:25001})
var a=n[0],l=n[1],c=0,u=1,d=2
for(n[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=n[n[c].f<n[d].f?c++:d++],l=n[c!=u&&n[c].f<n[d].f?c++:d++],n[u++]={s:-1,f:a.f+l.f,l:a,r:l}
var f=o[0].s
for(i=1;i<r;++i)o[i].s>f&&(f=o[i].s)
var h=new Si(f+1),p=zi(n[u-1],h,0)
if(p>t){i=0
var g=0,v=p-t,_=1<<v
for(o.sort((function(e,t){return h[t.s]-h[e.s]||e.f-t.f}));i<r;++i){var m=o[i].s
if(!(h[m]>t))break
g+=_-(1<<p-h[m]),h[m]=t}for(g>>>=v;g>0;){var b=o[i].s
h[b]<t?g-=1<<t-h[b]++-1:++i}for(;i>=0&&g;--i){var y=o[i].s
h[y]==t&&(--h[y],++g)}p=t}return[new ki(h),p]},zi=function(e,t,n){return-1==e.s?Math.max(zi(e.l,t,n+1),zi(e.r,t,n+1)):t[e.s]=n},Vi=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new Si(++t),i=0,r=e[0],o=1,s=function(e){n[i++]=e},a=1;a<=t;++a)if(e[a]==r&&a!=t)++o
else{if(!r&&o>2){for(;o>138;o-=138)s(32754)
o>2&&(s(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(s(r),--o;o>6;o-=6)s(8304)
o>2&&(s(o-3<<5|8208),o=0)}for(;o--;)s(r)
o=1,r=e[a]}return[n.subarray(0,i),t]},Qi=function(e,t){for(var n=0,i=0;i<t.length;++i)n+=e[i]*t[i]
return n},Ji=function(e,t,n){var i=n.length,r=Hi(t+2)
e[r]=255&i,e[r+1]=i>>>8,e[r+2]=255^e[r],e[r+3]=255^e[r+1]
for(var o=0;o<i;++o)e[r+o+4]=n[o]
return 8*(r+4+i)},Ki=function(e,t,n,i,r,o,s,a,l,c,u){Ui(t,u++,n),++r[256]
for(var d=Wi(r,15),f=d[0],h=d[1],p=Wi(o,15),g=p[0],v=p[1],_=Vi(f),m=_[0],b=_[1],y=Vi(g),w=y[0],k=y[1],S=new Si(19),x=0;x<m.length;++x)S[31&m[x]]++
for(x=0;x<w.length;++x)S[31&w[x]]++
for(var E=Wi(S,7),$=E[0],C=E[1],P=19;P>4&&!$[Ci[P-1]];--P);var T,L,I,R,O=c+5<<3,F=Qi(r,Ni)+Qi(o,ji)+s,M=Qi(r,f)+Qi(o,g)+s+14+3*P+Qi(S,$)+(2*S[16]+3*S[17]+7*S[18])
if(O<=F&&O<=M)return Ji(t,u,e.subarray(l,l+c))
if(Ui(t,u,1+(M<F)),u+=2,M<F){T=Ai(f,h),L=f,I=Ai(g,v),R=g
var A=Ai($,C)
for(Ui(t,u,b-257),Ui(t,u+5,k-1),Ui(t,u+10,P-4),u+=14,x=0;x<P;++x)Ui(t,u+3*x,$[Ci[x]])
u+=3*P
for(var N=[m,w],j=0;j<2;++j){var D=N[j]
for(x=0;x<D.length;++x){var B=31&D[x]
Ui(t,u,A[B]),u+=$[B],B>15&&(Ui(t,u,D[x]>>>5&127),u+=D[x]>>>12)}}}else T=Di,L=Ni,I=Bi,R=ji
for(x=0;x<a;++x)if(i[x]>255){B=i[x]>>>18&31,Gi(t,u,T[B+257]),u+=L[B+257],B>7&&(Ui(t,u,i[x]>>>23&31),u+=Ei[B])
var H=31&i[x]
Gi(t,u,I[H]),u+=R[H],H>3&&(Gi(t,u,i[x]>>>5&8191),u+=$i[H])}else Gi(t,u,T[i[x]]),u+=L[i[x]]
return Gi(t,u,T[256]),u+L[256]},Xi=new xi([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Yi=function(){for(var e=new xi(256),t=0;t<256;++t){for(var n=t,i=9;--i;)n=(1&n&&3988292384)^n>>>1
e[t]=n}return e}(),Zi=function(){var e=4294967295
return{p:function(t){for(var n=e,i=0;i<t.length;++i)n=Yi[255&n^t[i]]^n>>>8
e=n},d:function(){return 4294967295^e}}},er=function(e,t,n,i,r){return function(e,t,n,i,r,o){var s=e.length,a=new ki(i+s+5*(1+Math.floor(s/7e3))+r),l=a.subarray(i,a.length-r),c=0
if(!t||s<8)for(var u=0;u<=s;u+=65535){var d=u+65535
d<s?c=Ji(l,c,e.subarray(u,d)):(l[u]=true,c=Ji(l,c,e.subarray(u,s)))}else{for(var f=Xi[t-1],h=f>>>13,p=8191&f,g=(1<<n)-1,v=new Si(32768),_=new Si(g+1),m=Math.ceil(n/3),b=2*m,y=function(t){return(e[t]^e[t+1]<<m^e[t+2]<<b)&g},w=new xi(25e3),k=new Si(288),S=new Si(32),x=0,E=0,$=(u=0,0),C=0,P=0;u<s;++u){var T=y(u),L=32767&u,I=_[T]
if(v[L]=I,_[T]=L,C<=u){var R=s-u
if((x>7e3||$>24576)&&R>423){c=Ki(e,l,0,w,k,S,E,$,P,u-P,c),$=x=E=0,P=u
for(var O=0;O<286;++O)k[O]=0
for(O=0;O<30;++O)S[O]=0}var F=2,M=0,A=p,N=L-I&32767
if(R>2&&T==y(u-N))for(var j=Math.min(h,R)-1,D=Math.min(32767,u),B=Math.min(258,R);N<=D&&--A&&L!=I;){if(e[u+F]==e[u+F-N]){for(var H=0;H<B&&e[u+H]==e[u+H-N];++H);if(H>F){if(F=H,M=N,H>j)break
var q=Math.min(N,H-2),U=0
for(O=0;O<q;++O){var G=u-N+O+32768&32767,W=G-v[G]+32768&32767
W>U&&(U=W,I=G)}}}N+=(L=I)-(I=v[L])+32768&32767}if(M){w[$++]=268435456|Ii[F]<<18|Ri[M]
var z=31&Ii[F],V=31&Ri[M]
E+=Ei[z]+$i[V],++k[257+z],++S[V],C=u+F,++x}else w[$++]=e[u],++k[e[u]]}}c=Ki(e,l,true,w,k,S,E,$,P,u-P,c)}return qi(a,0,i+Hi(c)+r)}(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,n,i)},tr=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},nr=function(e,t){var n=t.filename
if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:9==t.level?2:0,e[9]=3,0!=t.mtime&&tr(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8
for(var i=0;i<=n.length;++i)e[i+10]=n.charCodeAt(i)}},ir=function(e){return 10+(e.filename&&e.filename.length+1||0)}
function rr(e,t){void 0===t&&(t={})
var n=Zi(),i=e.length
n.p(e)
var r=er(e,t,ir(t),8),o=r.length
return nr(r,t),tr(r,o-8,n.d()),tr(r,o-4,i),r}function or(e,t){var n=e.length
if("undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e)
for(var i=new ki(e.length+(e.length>>>1)),r=0,o=function(e){i[r++]=e},s=0;s<n;++s){if(r+5>i.length){var a=new ki(r+8+(n-s<<1))
a.set(i),i=a}var l=e.charCodeAt(s)
l<128||t?o(l):l<2048?(o(192|l>>>6),o(128|63&l)):l>55295&&l<57344?(o(240|(l=65536+(1047552&l)|1023&e.charCodeAt(++s))>>>18),o(128|l>>>12&63),o(128|l>>>6&63),o(128|63&l)):(o(224|l>>>12),o(128|l>>>6&63),o(128|63&l))}return qi(i,0,r)}var sr="[SessionRecording]",ar=ie(sr),lr=[Nn.MouseMove,Nn.MouseInteraction,Nn.Scroll,Nn.ViewportResize,Nn.Input,Nn.TouchMove,Nn.MediaInteraction,Nn.Drag],cr=e=>({rrwebMethod:e,enqueuedAt:Date.now(),attempt:1})
function ur(e){return function(e,t){for(var n="",i=0;i<e.length;){var r=e[i++]
n+=String.fromCharCode(r)}return n}(rr(or(JSON.stringify(e))))}function dr(e){return e.type===An.Custom&&"sessionIdle"===e.data.tag}function fr(e,t){return t.some((t=>"regex"===t.matching&&new RegExp(t.url).test(e)))}class hr{get sessionIdleThresholdMilliseconds(){return this.instance.config.session_recording.session_idle_threshold_ms||3e5}get rrwebRecord(){var e,t
return null==I||null===(e=I.__PosthogExtensions__)||void 0===e||null===(t=e.rrweb)||void 0===t?void 0:t.record}get started(){return this._captureStarted}get sessionManager(){if(!this.instance.sessionManager)throw new Error(sr+" must be started with a valid sessionManager.")
return this.instance.sessionManager}get fullSnapshotIntervalMillis(){var e,t
return"trigger_pending"===this.triggerStatus?6e4:null!==(e=null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.full_snapshot_interval_millis)&&void 0!==e?e:3e5}get isSampled(){var e=this.instance.get_property(Me)
return Y(e)?e:null}get sessionDuration(){var e,t,n=null===(e=this.buffer)||void 0===e?void 0:e.data[(null===(t=this.buffer)||void 0===t?void 0:t.data.length)-1],{sessionStartTimestamp:i}=this.sessionManager.checkAndGetSessionAndWindowId(!0)
return n?n.timestamp-i:null}get isRecordingEnabled(){var e=!!this.instance.get_property(Ce),t=!this.instance.config.disable_session_recording
return m&&e&&t}get isConsoleLogCaptureEnabled(){var e=!!this.instance.get_property(Pe),t=this.instance.config.enable_recording_console_log
return null!=t?t:e}get canvasRecording(){var e,t,n,i,r,o,s=this.instance.config.session_recording.captureCanvas,a=this.instance.get_property(Le),l=null!==(e=null!==(t=null==s?void 0:s.recordCanvas)&&void 0!==t?t:null==a?void 0:a.enabled)&&void 0!==e&&e,c=null!==(n=null!==(i=null==s?void 0:s.canvasFps)&&void 0!==i?i:null==a?void 0:a.fps)&&void 0!==n?n:0,u=null!==(r=null!==(o=null==s?void 0:s.canvasQuality)&&void 0!==o?o:null==a?void 0:a.quality)&&void 0!==r?r:0
return{enabled:l,fps:yi(c,0,12,"canvas recording fps"),quality:yi(u,0,1,"canvas recording quality")}}get networkPayloadCapture(){var e,t,n=this.instance.get_property(Te),i={recordHeaders:null===(e=this.instance.config.session_recording)||void 0===e?void 0:e.recordHeaders,recordBody:null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.recordBody},r=(null==i?void 0:i.recordHeaders)||(null==n?void 0:n.recordHeaders),o=(null==i?void 0:i.recordBody)||(null==n?void 0:n.recordBody),s=G(this.instance.config.capture_performance)?this.instance.config.capture_performance.network_timing:this.instance.config.capture_performance,a=!!(Y(s)?s:null==n?void 0:n.capturePerformance)
return r||o||a?{recordHeaders:r,recordBody:o,recordPerformance:a}:void 0}get sampleRate(){var e=this.instance.get_property(Ie)
return X(e)?e:null}get minimumDuration(){var e=this.instance.get_property(Re)
return X(e)?e:null}get status(){return this.receivedDecide?this.isRecordingEnabled?!1===this.isSampled?"disabled":this._urlBlocked?"paused":K(this._linkedFlag)||this._linkedFlagSeen?"trigger_pending"===this.triggerStatus?"buffering":Y(this.isSampled)?this.isSampled?"sampled":"disabled":"active":"buffering":"disabled":"buffering"}get urlTriggerStatus(){var e
return 0===this._urlTriggers.length?"trigger_disabled":(null===(e=this.instance)||void 0===e?void 0:e.get_property(Ae))===this.sessionId?"trigger_activated":"trigger_pending"}get eventTriggerStatus(){var e
return 0===this._eventTriggers.length?"trigger_disabled":(null===(e=this.instance)||void 0===e?void 0:e.get_property(Ne))===this.sessionId?"trigger_activated":"trigger_pending"}get triggerStatus(){var e="trigger_activated"===this.eventTriggerStatus||"trigger_activated"===this.urlTriggerStatus,t="trigger_pending"===this.eventTriggerStatus||"trigger_pending"===this.urlTriggerStatus
return e?"trigger_activated":t?"trigger_pending":"trigger_disabled"}constructor(e){if(p(this,"queuedRRWebEvents",[]),p(this,"isIdle",!1),p(this,"_linkedFlagSeen",!1),p(this,"_lastActivityTimestamp",Date.now()),p(this,"_linkedFlag",null),p(this,"_removePageViewCaptureHook",void 0),p(this,"_onSessionIdListener",void 0),p(this,"_persistDecideOnSessionListener",void 0),p(this,"_samplingSessionListener",void 0),p(this,"_urlTriggers",[]),p(this,"_urlBlocklist",[]),p(this,"_urlBlocked",!1),p(this,"_eventTriggers",[]),p(this,"_removeEventTriggerCaptureHook",void 0),p(this,"_forceAllowLocalhostNetworkCapture",!1),p(this,"_onBeforeUnload",(()=>{this._flushBuffer()})),p(this,"_onOffline",(()=>{this._tryAddCustomEvent("browser offline",{})})),p(this,"_onOnline",(()=>{this._tryAddCustomEvent("browser online",{})})),p(this,"_onVisibilityChange",(()=>{if(null!=x&&x.visibilityState){var e="window "+x.visibilityState
this._tryAddCustomEvent(e,{})}})),this.instance=e,this._captureStarted=!1,this._endpoint="/s/",this.stopRrweb=void 0,this.receivedDecide=!1,!this.instance.sessionManager)throw ar.error("started without valid sessionManager"),new Error(sr+" started without valid sessionManager. This is a bug.")
if(this.instance.config.__preview_experimental_cookieless_mode)throw new Error(sr+" cannot be used with __preview_experimental_cookieless_mode.")
var{sessionId:t,windowId:n}=this.sessionManager.checkAndGetSessionAndWindowId()
this.sessionId=t,this.windowId=n,this.buffer=this.clearBuffer(),this.sessionIdleThresholdMilliseconds>=this.sessionManager.sessionTimeoutMs&&ar.warn("session_idle_threshold_ms (".concat(this.sessionIdleThresholdMilliseconds,") is greater than the session timeout (").concat(this.sessionManager.sessionTimeoutMs,"). Session will never be detected as idle"))}startIfEnabledOrStop(e){this.isRecordingEnabled?(this._startCapture(e),_e(m,"beforeunload",this._onBeforeUnload),_e(m,"offline",this._onOffline),_e(m,"online",this._onOnline),_e(m,"visibilitychange",this._onVisibilityChange),this._setupSampling(),this._addEventTriggerListener(),K(this._removePageViewCaptureHook)&&(this._removePageViewCaptureHook=this.instance.on("eventCaptured",(e=>{try{if("$pageview"===e.event){var t=null!=e&&e.properties.$current_url?this._maskUrl(null==e?void 0:e.properties.$current_url):""
if(!t)return
this._tryAddCustomEvent("$pageview",{href:t})}}catch(e){ar.error("Could not add $pageview to rrweb session",e)}}))),this._onSessionIdListener||(this._onSessionIdListener=this.sessionManager.onSessionId(((e,t,n)=>{var i,r,o,s
n&&(this._tryAddCustomEvent("$session_id_change",{sessionId:e,windowId:t,changeReason:n}),null===(i=this.instance)||void 0===i||null===(r=i.persistence)||void 0===r||r.unregister(Ne),null===(o=this.instance)||void 0===o||null===(s=o.persistence)||void 0===s||s.unregister(Ae))})))):this.stopRecording()}stopRecording(){var e,t,n,i
this._captureStarted&&this.stopRrweb&&(this.stopRrweb(),this.stopRrweb=void 0,this._captureStarted=!1,null==m||m.removeEventListener("beforeunload",this._onBeforeUnload),null==m||m.removeEventListener("offline",this._onOffline),null==m||m.removeEventListener("online",this._onOnline),null==m||m.removeEventListener("visibilitychange",this._onVisibilityChange),this.clearBuffer(),clearInterval(this._fullSnapshotTimer),null===(e=this._removePageViewCaptureHook)||void 0===e||e.call(this),this._removePageViewCaptureHook=void 0,null===(t=this._removeEventTriggerCaptureHook)||void 0===t||t.call(this),this._removeEventTriggerCaptureHook=void 0,null===(n=this._onSessionIdListener)||void 0===n||n.call(this),this._onSessionIdListener=void 0,null===(i=this._samplingSessionListener)||void 0===i||i.call(this),this._samplingSessionListener=void 0,ar.info("stopped"))}makeSamplingDecision(e){var t,n=this.sessionId!==e,i=this.sampleRate
if(X(i)){var r=this.isSampled,o=n||!Y(r),s=o?function(e,t){return function(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0
return Math.abs(t)}(e)%100<yi(100*t,0,100)}(e,i):r
o&&(s?this._reportStarted("sampled"):ar.warn("Sample rate (".concat(i,") has determined that this sessionId (").concat(e,") will not be sent to the server.")),this._tryAddCustomEvent("samplingDecisionMade",{sampleRate:i,isSampled:s})),null===(t=this.instance.persistence)||void 0===t||t.register({[Me]:s})}else{var a
null===(a=this.instance.persistence)||void 0===a||a.register({[Me]:null})}}onRemoteConfig(e){var t,n,i,r,o,s
if(this._tryAddCustomEvent("$remote_config_received",e),this._persistRemoteConfig(e),this._linkedFlag=(null===(t=e.sessionRecording)||void 0===t?void 0:t.linkedFlag)||null,null!==(n=e.sessionRecording)&&void 0!==n&&n.endpoint&&(this._endpoint=null===(s=e.sessionRecording)||void 0===s?void 0:s.endpoint),this._setupSampling(),!K(this._linkedFlag)&&!this._linkedFlagSeen){var a=V(this._linkedFlag)?this._linkedFlag:this._linkedFlag.flag,l=V(this._linkedFlag)?null:this._linkedFlag.variant
this.instance.onFeatureFlags(((e,t)=>{var n=G(t)&&a in t,i=l?t[a]===l:n
i&&this._reportStarted("linked_flag_matched",{linkedFlag:a,linkedVariant:l}),this._linkedFlagSeen=i}))}null!==(i=e.sessionRecording)&&void 0!==i&&i.urlTriggers&&(this._urlTriggers=e.sessionRecording.urlTriggers),null!==(r=e.sessionRecording)&&void 0!==r&&r.urlBlocklist&&(this._urlBlocklist=e.sessionRecording.urlBlocklist),null!==(o=e.sessionRecording)&&void 0!==o&&o.eventTriggers&&(this._eventTriggers=e.sessionRecording.eventTriggers),this.receivedDecide=!0,this.startIfEnabledOrStop()}_setupSampling(){X(this.sampleRate)&&K(this._samplingSessionListener)&&(this._samplingSessionListener=this.sessionManager.onSessionId((e=>{this.makeSamplingDecision(e)})))}_persistRemoteConfig(e){if(this.instance.persistence){var t,n=this.instance.persistence,i=()=>{var t,i,r,o,s,a,l,c,u=null===(t=e.sessionRecording)||void 0===t?void 0:t.sampleRate,d=K(u)?null:parseFloat(u),f=null===(i=e.sessionRecording)||void 0===i?void 0:i.minimumDurationMilliseconds
n.register({[Ce]:!!e.sessionRecording,[Pe]:null===(r=e.sessionRecording)||void 0===r?void 0:r.consoleLogRecordingEnabled,[Te]:h({capturePerformance:e.capturePerformance},null===(o=e.sessionRecording)||void 0===o?void 0:o.networkPayloadCapture),[Le]:{enabled:null===(s=e.sessionRecording)||void 0===s?void 0:s.recordCanvas,fps:null===(a=e.sessionRecording)||void 0===a?void 0:a.canvasFps,quality:null===(l=e.sessionRecording)||void 0===l?void 0:l.canvasQuality},[Ie]:d,[Re]:z(f)?null:f,[Oe]:null===(c=e.sessionRecording)||void 0===c?void 0:c.scriptConfig})}
i(),null===(t=this._persistDecideOnSessionListener)||void 0===t||t.call(this),this._persistDecideOnSessionListener=this.sessionManager.onSessionId(i)}}log(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log"
null===(t=this.instance.sessionRecording)||void 0===t||t.onRRwebEmit({type:6,data:{plugin:"rrweb/console@1",payload:{level:n,trace:[],payload:[JSON.stringify(e)]}},timestamp:Date.now()})}_startCapture(e){var t,n
z(Object.assign)||z(Array.from)||(this._captureStarted||this.instance.config.disable_session_recording||this.instance.consent.isOptedOut())||(this._captureStarted=!0,this.sessionManager.checkAndGetSessionAndWindowId(),this.rrwebRecord?this._onScriptLoaded():null===(t=I.__PosthogExtensions__)||void 0===t||null===(n=t.loadExternalDependency)||void 0===n||n.call(t,this.instance,this.scriptName,(e=>{if(e)return ar.error("could not load recorder",e)
this._onScriptLoaded()})),ar.info("starting"),"active"===this.status&&this._reportStarted(e||"recording_initialized"))}get scriptName(){var e,t,n
return(null===(e=this.instance)||void 0===e||null===(t=e.persistence)||void 0===t||null===(n=t.get_property(Oe))||void 0===n?void 0:n.script)||"recorder"}isInteractiveEvent(e){var t
return 3===e.type&&-1!==lr.indexOf(null===(t=e.data)||void 0===t?void 0:t.source)}_updateWindowAndSessionIds(e){var t=this.isInteractiveEvent(e)
t||this.isIdle||e.timestamp-this._lastActivityTimestamp>this.sessionIdleThresholdMilliseconds&&(this.isIdle=!0,clearInterval(this._fullSnapshotTimer),this._tryAddCustomEvent("sessionIdle",{eventTimestamp:e.timestamp,lastActivityTimestamp:this._lastActivityTimestamp,threshold:this.sessionIdleThresholdMilliseconds,bufferLength:this.buffer.data.length,bufferSize:this.buffer.size}),this._flushBuffer())
var n=!1
if(t&&(this._lastActivityTimestamp=e.timestamp,this.isIdle&&(this.isIdle=!1,this._tryAddCustomEvent("sessionNoLongerIdle",{reason:"user activity",type:e.type}),n=!0)),!this.isIdle){var{windowId:i,sessionId:r}=this.sessionManager.checkAndGetSessionAndWindowId(!t,e.timestamp),o=this.sessionId!==r,s=this.windowId!==i
this.windowId=i,this.sessionId=r,o||s?(this.stopRecording(),this.startIfEnabledOrStop("session_id_changed")):n&&this._scheduleFullSnapshot()}}_tryRRWebMethod(e){try{return e.rrwebMethod(),!0}catch(t){return this.queuedRRWebEvents.length<10?this.queuedRRWebEvents.push({enqueuedAt:e.enqueuedAt||Date.now(),attempt:e.attempt++,rrwebMethod:e.rrwebMethod}):ar.warn("could not emit queued rrweb event.",t,e),!1}}_tryAddCustomEvent(e,t){return this._tryRRWebMethod(cr((()=>this.rrwebRecord.addCustomEvent(e,t))))}_tryTakeFullSnapshot(){return this._tryRRWebMethod(cr((()=>this.rrwebRecord.takeFullSnapshot())))}_onScriptLoaded(){var e,t={blockClass:"ph-no-capture",blockSelector:void 0,ignoreClass:"ph-ignore-input",maskTextClass:"ph-mask",maskTextSelector:void 0,maskTextFn:void 0,maskAllInputs:!0,maskInputOptions:{password:!0},maskInputFn:void 0,slimDOMOptions:{},collectFonts:!1,inlineStylesheet:!0,recordCrossOriginIframes:!1},n=this.instance.config.session_recording
for(var[i,r]of Object.entries(n||{}))i in t&&("maskInputOptions"===i?t.maskInputOptions=h({password:!0},r):t[i]=r)
if(this.canvasRecording&&this.canvasRecording.enabled&&(t.recordCanvas=!0,t.sampling={canvas:this.canvasRecording.fps},t.dataURLOptions={type:"image/webp",quality:this.canvasRecording.quality}),this.rrwebRecord){this.mutationRateLimiter=null!==(e=this.mutationRateLimiter)&&void 0!==e?e:new wi(this.rrwebRecord,{refillRate:this.instance.config.session_recording.__mutationRateLimiterRefillRate,bucketSize:this.instance.config.session_recording.__mutationRateLimiterBucketSize,onBlockedNode:(e,t)=>{var n="Too many mutations on node '".concat(e,"'. Rate limiting. This could be due to SVG animations or something similar")
ar.info(n,{node:t}),this.log(sr+" "+n,"warn")}})
var o=this._gatherRRWebPlugins()
this.stopRrweb=this.rrwebRecord(h({emit:e=>{this.onRRwebEmit(e)},plugins:o},t)),this._lastActivityTimestamp=Date.now(),this.isIdle=!1,this._tryAddCustomEvent("$session_options",{sessionRecordingOptions:t,activePlugins:o.map((e=>null==e?void 0:e.name))}),this._tryAddCustomEvent("$posthog_config",{config:this.instance.config})}else ar.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")}_scheduleFullSnapshot(){if(this._fullSnapshotTimer&&clearInterval(this._fullSnapshotTimer),!this.isIdle){var e=this.fullSnapshotIntervalMillis
e&&(this._fullSnapshotTimer=setInterval((()=>{this._tryTakeFullSnapshot()}),e))}}_gatherRRWebPlugins(){var e,t,n,i,r=[],o=null===(e=I.__PosthogExtensions__)||void 0===e||null===(t=e.rrwebPlugins)||void 0===t?void 0:t.getRecordConsolePlugin
o&&this.isConsoleLogCaptureEnabled&&r.push(o())
var s=null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.rrwebPlugins)||void 0===i?void 0:i.getRecordNetworkPlugin
return this.networkPayloadCapture&&U(s)&&(!Ct.includes(location.hostname)||this._forceAllowLocalhostNetworkCapture?r.push(s(bi(this.instance.config,this.networkPayloadCapture))):ar.info("NetworkCapture not started because we are on localhost.")),r}onRRwebEmit(e){var t
if(this._processQueuedEvents(),e&&G(e)){if(e.type===An.Meta){var n=this._maskUrl(e.data.href)
if(this._lastHref=n,!n)return
e.data.href=n}else this._pageViewFallBack()
if(this._checkUrlTriggerConditions(),!this._urlBlocked||function(e){return e.type===An.Custom&&"recording paused"===e.data.tag}(e)){e.type===An.FullSnapshot&&this._scheduleFullSnapshot(),e.type===An.FullSnapshot&&"trigger_pending"===this.triggerStatus&&this.clearBuffer()
var i=this.mutationRateLimiter?this.mutationRateLimiter.throttleMutations(e):e
if(i){var r=function(e){var t=e
if(t&&G(t)&&6===t.type&&G(t.data)&&"rrweb/console@1"===t.data.plugin){t.data.payload.payload.length>10&&(t.data.payload.payload=t.data.payload.payload.slice(0,10),t.data.payload.payload.push("...[truncated]"))
for(var n=[],i=0;i<t.data.payload.payload.length;i++)t.data.payload.payload[i]&&t.data.payload.payload[i].length>2e3?n.push(t.data.payload.payload[i].slice(0,2e3)+"...[truncated]"):n.push(t.data.payload.payload[i])
return t.data.payload.payload=n,e}return e}(i)
if(this._updateWindowAndSessionIds(r),!this.isIdle||dr(r)){if(dr(r)){var o=r.data.payload
if(o){var s=o.lastActivityTimestamp,a=o.threshold
r.timestamp=s+a}}var l=null===(t=this.instance.config.session_recording.compress_events)||void 0===t||t?function(e){if(Fn(e)<1024)return e
try{if(e.type===An.FullSnapshot)return h(h({},e),{},{data:ur(e.data),cv:"2024-10"})
if(e.type===An.IncrementalSnapshot&&e.data.source===Nn.Mutation)return h(h({},e),{},{cv:"2024-10",data:h(h({},e.data),{},{texts:ur(e.data.texts),attributes:ur(e.data.attributes),removes:ur(e.data.removes),adds:ur(e.data.adds)})})
if(e.type===An.IncrementalSnapshot&&e.data.source===Nn.StyleSheetRule)return h(h({},e),{},{cv:"2024-10",data:h(h({},e.data),{},{adds:ur(e.data.adds),removes:ur(e.data.removes)})})}catch(e){ar.error("could not compress event - will use uncompressed event",e)}return e}(r):r,c={$snapshot_bytes:Fn(l),$snapshot_data:l,$session_id:this.sessionId,$window_id:this.windowId}
"disabled"!==this.status?this._captureSnapshotBuffered(c):this.clearBuffer()}}}}}_pageViewFallBack(){if(!this.instance.config.capture_pageview&&m){var e=this._maskUrl(m.location.href)
this._lastHref!==e&&(this._tryAddCustomEvent("$url_changed",{href:e}),this._lastHref=e)}}_processQueuedEvents(){if(this.queuedRRWebEvents.length){var e=[...this.queuedRRWebEvents]
this.queuedRRWebEvents=[],e.forEach((e=>{Date.now()-e.enqueuedAt<=2e3&&this._tryRRWebMethod(e)}))}}_maskUrl(e){var t=this.instance.config.session_recording
if(t.maskNetworkRequestFn){var n,i={url:e}
return null===(n=i=t.maskNetworkRequestFn(i))||void 0===n?void 0:n.url}return e}clearBuffer(){return this.buffer={size:0,data:[],sessionId:this.sessionId,windowId:this.windowId},this.buffer}_flushBuffer(){this.flushBufferTimer&&(clearTimeout(this.flushBufferTimer),this.flushBufferTimer=void 0)
var e=this.minimumDuration,t=this.sessionDuration,n=X(t)&&t>=0,i=X(e)&&n&&t<e
return"buffering"===this.status||"paused"===this.status||"disabled"===this.status||i?(this.flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3),this.buffer):(this.buffer.data.length>0&&Mn(this.buffer).forEach((e=>{this._captureSnapshot({$snapshot_bytes:e.size,$snapshot_data:e.data,$session_id:e.sessionId,$window_id:e.windowId,$lib:"web",$lib_version:_.LIB_VERSION})})),this.clearBuffer())}_captureSnapshotBuffered(e){var t,n=2+((null===(t=this.buffer)||void 0===t?void 0:t.data.length)||0)
!this.isIdle&&(this.buffer.size+e.$snapshot_bytes+n>943718.4||this.buffer.sessionId!==this.sessionId)&&(this.buffer=this._flushBuffer()),this.buffer.size+=e.$snapshot_bytes,this.buffer.data.push(e.$snapshot_data),this.flushBufferTimer||this.isIdle||(this.flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3))}_captureSnapshot(e){this.instance.capture("$snapshot",e,{_url:this.instance.requestRouter.endpointFor("api",this._endpoint),_noTruncate:!0,_batchKey:"recordings",skip_client_rate_limiting:!0})}_checkUrlTriggerConditions(){if(void 0!==m&&m.location.href){var e=m.location.href,t=this._urlBlocked,n=fr(e,this._urlBlocklist)
n&&!t?this._pauseRecording():!n&&t&&this._resumeRecording(),fr(e,this._urlTriggers)&&this._activateTrigger("url")}}_activateTrigger(e){var t,n
"trigger_pending"===this.triggerStatus&&(null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n||n.register({["url"===e?Ae:Ne]:this.sessionId}),this._flushBuffer(),this._reportStarted(e+"_trigger_matched"))}_pauseRecording(){this._urlBlocked||(this._urlBlocked=!0,clearInterval(this._fullSnapshotTimer),ar.info("recording paused due to URL blocker"),this._tryAddCustomEvent("recording paused",{reason:"url blocker"}))}_resumeRecording(){this._urlBlocked&&(this._urlBlocked=!1,this._tryTakeFullSnapshot(),this._scheduleFullSnapshot(),this._tryAddCustomEvent("recording resumed",{reason:"left blocked url"}),ar.info("recording resumed"))}_addEventTriggerListener(){0!==this._eventTriggers.length&&K(this._removeEventTriggerCaptureHook)&&(this._removeEventTriggerCaptureHook=this.instance.on("eventCaptured",(e=>{try{this._eventTriggers.includes(e.event)&&this._activateTrigger("event")}catch(e){ar.error("Could not activate event trigger",e)}})))}overrideLinkedFlag(){this._linkedFlagSeen=!0,this._tryTakeFullSnapshot(),this._reportStarted("linked_flag_overridden")}overrideSampling(){var e
null===(e=this.instance.persistence)||void 0===e||e.register({[Me]:!0}),this._tryTakeFullSnapshot(),this._reportStarted("sampling_overridden")}overrideTrigger(e){this._activateTrigger(e)}_reportStarted(e,t){this.instance.register_for_session({$session_recording_start_reason:e}),ar.info(e.replace("_"," "),t),F(["recording_initialized","session_id_changed"],e)||this._tryAddCustomEvent(e,t)}}var pr=ie("[RemoteConfig]")
class gr{constructor(e){this.instance=e}get remoteConfig(){var e,t
return null===(e=I._POSTHOG_REMOTE_CONFIG)||void 0===e||null===(t=e[this.instance.config.token])||void 0===t?void 0:t.config}_loadRemoteConfigJs(e){var t,n,i
null!==(t=I.__PosthogExtensions__)&&void 0!==t&&t.loadExternalDependency?null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"remote-config",(()=>e(this.remoteConfig))):(pr.error("PostHog Extensions not found. Cannot load remote config."),e())}_loadRemoteConfigJSON(e){this.instance._send_request({method:"GET",url:this.instance.requestRouter.endpointFor("assets","/array/".concat(this.instance.config.token,"/config")),callback:t=>{e(t.json)}})}load(){try{if(this.remoteConfig)return pr.info("Using preloaded remote config",this.remoteConfig),void this.onRemoteConfig(this.remoteConfig)
if(this.instance.config.advanced_disable_decide)return void pr.warn("Remote config is disabled. Falling back to local config.")
this._loadRemoteConfigJs((e=>{if(!e)return pr.info("No config found after loading remote JS config. Falling back to JSON."),void this._loadRemoteConfigJSON((e=>{this.onRemoteConfig(e)}))
this.onRemoteConfig(e)}))}catch(e){pr.error("Error loading remote config",e)}}onRemoteConfig(e){e?this.instance.config.__preview_remote_config?(this.instance._onRemoteConfig(e),!1!==e.hasFeatureFlags&&this.instance.featureFlags.ensureFlagsLoaded()):pr.info("__preview_remote_config is disabled. Logging config instead",e):pr.error("Failed to fetch remote config from PostHog.")}}var vr,_r=null!=m&&m.location?It(m.location.hash,"__posthog")||It(location.hash,"state"):null,mr="_postHogToolbarParams",br=ie("[Toolbar]")
!function(e){e[e.UNINITIALIZED=0]="UNINITIALIZED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(vr||(vr={}))
class yr{constructor(e){this.instance=e}setToolbarState(e){I.ph_toolbar_state=e}getToolbarState(){var e
return null!==(e=I.ph_toolbar_state)&&void 0!==e?e:vr.UNINITIALIZED}maybeLoadToolbar(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
if(!m||!x)return!1
n=null!==(e=n)&&void 0!==e?e:m.location,r=null!==(t=r)&&void 0!==t?t:m.history
try{if(!i){try{m.localStorage.setItem("test","test"),m.localStorage.removeItem("test")}catch(e){return!1}i=null==m?void 0:m.localStorage}var o,s=_r||It(n.hash,"__posthog")||It(n.hash,"state"),a=s?de((()=>JSON.parse(atob(decodeURIComponent(s)))))||de((()=>JSON.parse(decodeURIComponent(s)))):null
return a&&"ph_authorize"===a.action?((o=a).source="url",o&&Object.keys(o).length>0&&(a.desiredHash?n.hash=a.desiredHash:r?r.replaceState(r.state,"",n.pathname+n.search):n.hash="")):((o=JSON.parse(i.getItem(mr)||"{}")).source="localstorage",delete o.userIntent),!(!o.token||this.instance.config.token!==o.token||(this.loadToolbar(o),0))}catch(e){return!1}}_callLoadToolbar(e){var t=I.ph_load_toolbar||I.ph_load_editor
!K(t)&&U(t)?t(e,this.instance):br.warn("No toolbar load function found")}loadToolbar(e){var t=!(null==x||!x.getElementById(Ye))
if(!m||t)return!1
var n="custom"===this.instance.requestRouter.region&&this.instance.config.advanced_disable_toolbar_metrics,i=h(h({token:this.instance.config.token},e),{},{apiURL:this.instance.requestRouter.endpointFor("ui")},n?{instrument:!1}:{})
if(m.localStorage.setItem(mr,JSON.stringify(h(h({},i),{},{source:void 0}))),this.getToolbarState()===vr.LOADED)this._callLoadToolbar(i)
else if(this.getToolbarState()===vr.UNINITIALIZED){var r,o
this.setToolbarState(vr.LOADING),null===(r=I.__PosthogExtensions__)||void 0===r||null===(o=r.loadExternalDependency)||void 0===o||o.call(r,this.instance,"toolbar",(e=>{if(e)return br.error("[Toolbar] Failed to load",e),void this.setToolbarState(vr.UNINITIALIZED)
this.setToolbarState(vr.LOADED),this._callLoadToolbar(i)})),_e(m,"turbolinks:load",(()=>{this.setToolbarState(vr.UNINITIALIZED),this.loadToolbar(i)}))}return!0}_loadEditor(e){return this.loadToolbar(e)}maybeLoadEditor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
return this.maybeLoadToolbar(e,t,n)}}var wr=3e3
class kr{constructor(e,t){p(this,"isPaused",!0),p(this,"queue",[]),this.flushTimeoutMs=yi((null==t?void 0:t.flush_interval_ms)||wr,250,5e3,"flush interval",wr),this.sendRequest=e}enqueue(e){this.queue.push(e),this.flushTimeout||this.setFlushTimeout()}unload(){this.clearFlushTimeout()
var e=this.queue.length>0?this.formatQueue():{},t=Object.values(e),n=[...t.filter((e=>0===e.url.indexOf("/e"))),...t.filter((e=>0!==e.url.indexOf("/e")))]
n.map((e=>{this.sendRequest(h(h({},e),{},{transport:"sendBeacon"}))}))}enable(){this.isPaused=!1,this.setFlushTimeout()}setFlushTimeout(){var e=this
this.isPaused||(this.flushTimeout=setTimeout((()=>{if(this.clearFlushTimeout(),this.queue.length>0){var t=this.formatQueue(),n=function(n){var i=t[n],r=(new Date).getTime()
i.data&&q(i.data)&&se(i.data,(e=>{e.offset=Math.abs(e.timestamp-r),delete e.timestamp})),e.sendRequest(i)}
for(var i in t)n(i)}}),this.flushTimeoutMs))}clearFlushTimeout(){clearTimeout(this.flushTimeout),this.flushTimeout=void 0}formatQueue(){var e={}
return se(this.queue,(t=>{var n,i=t,r=(i?i.batchKey:null)||i.url
z(e[r])&&(e[r]=h(h({},i),{},{data:[]})),null===(n=e[r].data)||void 0===n||n.push(i.data)})),this.queue=[],e}}var Sr=!!P||!!C,xr="text/plain",Er=(e,t)=>{var[n,i]=e.split("?"),r=h({},t)
null==i||i.split("&").forEach((e=>{var[t]=e.split("=")
delete r[t]}))
var o=function(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",r=[]
return se(e,(function(e,i){z(e)||z(i)||"undefined"===i||(t=encodeURIComponent((e=>e instanceof File)(e)?e.name:e.toString()),n=encodeURIComponent(i),r[r.length]=n+"="+t)})),r.join(i)}(r)
return o=o?(i?i+"&":"")+o:i,"".concat(n,"?").concat(o)},$r=(e,t)=>JSON.stringify(e,((e,t)=>"bigint"==typeof t?t.toString():t),t),Cr=e=>{var{data:t,compression:n}=e
if(t){if(n===v.GZipJS){var i=rr(or($r(t)),{mtime:0}),r=new Blob([i],{type:xr})
return{contentType:xr,body:r,estimatedSize:r.size}}if(n===v.Base64){var o=function(e){var t,n,i,r,o,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a=0,l=0,c="",u=[]
if(!e)return e
e=function(e){var t,n,i,r,o=""
for(t=n=0,i=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,r=0;r<i;r++){var s=e.charCodeAt(r),a=null
s<128?n++:a=s>127&&s<2048?String.fromCharCode(s>>6|192,63&s|128):String.fromCharCode(s>>12|224,s>>6&63|128,63&s|128),J(a)||(n>t&&(o+=e.substring(t,n)),o+=a,t=n=r+1)}return n>t&&(o+=e.substring(t,e.length)),o}(e)
do{t=(o=e.charCodeAt(a++)<<16|e.charCodeAt(a++)<<8|e.charCodeAt(a++))>>18&63,n=o>>12&63,i=o>>6&63,r=63&o,u[l++]=s.charAt(t)+s.charAt(n)+s.charAt(i)+s.charAt(r)}while(a<e.length)
switch(c=u.join(""),e.length%3){case 1:c=c.slice(0,-2)+"=="
break
case 2:c=c.slice(0,-1)+"="}return c}($r(t)),s=(e=>"data="+encodeURIComponent("string"==typeof e?e:$r(e)))(o)
return{contentType:"application/x-www-form-urlencoded",body:s,estimatedSize:new Blob([s]).size}}var a=$r(t)
return{contentType:"application/json",body:a,estimatedSize:new Blob([a]).size}}},Pr=[]
C&&Pr.push({transport:"fetch",method:e=>{var t,n,{contentType:i,body:r,estimatedSize:o}=null!==(t=Cr(e))&&void 0!==t?t:{},s=new Headers
se(e.headers,(function(e,t){s.append(t,e)})),i&&s.append("Content-Type",i)
var a=e.url,l=null
if(T){var c=new T
l={signal:c.signal,timeout:setTimeout((()=>c.abort()),e.timeout)}}C(a,h({method:(null==e?void 0:e.method)||"GET",headers:s,keepalive:"POST"===e.method&&(o||0)<52428.8,body:r,signal:null===(n=l)||void 0===n?void 0:n.signal},e.fetchOptions)).then((t=>t.text().then((n=>{var i,r={statusCode:t.status,text:n}
if(200===t.status)try{r.json=JSON.parse(n)}catch(e){ne.error(e)}null===(i=e.callback)||void 0===i||i.call(e,r)})))).catch((t=>{var n
ne.error(t),null===(n=e.callback)||void 0===n||n.call(e,{statusCode:0,text:t})})).finally((()=>l?clearTimeout(l.timeout):null))}}),P&&Pr.push({transport:"XHR",method:e=>{var t,n=new P
n.open(e.method||"GET",e.url,!0)
var{contentType:i,body:r}=null!==(t=Cr(e))&&void 0!==t?t:{}
se(e.headers,(function(e,t){n.setRequestHeader(t,e)})),i&&n.setRequestHeader("Content-Type",i),e.timeout&&(n.timeout=e.timeout),n.withCredentials=!0,n.onreadystatechange=()=>{if(4===n.readyState){var t,i={statusCode:n.status,text:n.responseText}
if(200===n.status)try{i.json=JSON.parse(n.responseText)}catch(e){}null===(t=e.callback)||void 0===t||t.call(e,i)}},n.send(r)}}),null!=S&&S.sendBeacon&&Pr.push({transport:"sendBeacon",method:e=>{var t=Er(e.url,{beacon:"1"})
try{var n,{contentType:i,body:r}=null!==(n=Cr(e))&&void 0!==n?n:{},o="string"==typeof r?new Blob([r],{type:i}):r
S.sendBeacon(t,o)}catch(e){}}})
var Tr=["retriesPerformedSoFar"]
class Lr{constructor(e){p(this,"isPolling",!1),p(this,"pollIntervalMs",3e3),p(this,"queue",[]),this.instance=e,this.queue=[],this.areWeOnline=!0,!z(m)&&"onLine"in m.navigator&&(this.areWeOnline=m.navigator.onLine,_e(m,"online",(()=>{this.areWeOnline=!0,this.flush()})),_e(m,"offline",(()=>{this.areWeOnline=!1})))}retriableRequest(e){var{retriesPerformedSoFar:t}=e,n=g(e,Tr)
X(t)&&t>0&&(n.url=Er(n.url,{retry_count:t})),this.instance._send_request(h(h({},n),{},{callback:e=>{var i
200!==e.statusCode&&(e.statusCode<400||e.statusCode>=500)&&(null!=t?t:0)<10?this.enqueue(h({retriesPerformedSoFar:t},n)):null===(i=n.callback)||void 0===i||i.call(n,e)}}))}enqueue(e){var t=e.retriesPerformedSoFar||0
e.retriesPerformedSoFar=t+1
var n=function(e){var t=3e3*Math.pow(2,e),n=t/2,i=Math.min(18e5,t),r=(Math.random()-.5)*(i-n)
return Math.ceil(i+r)}(t),i=Date.now()+n
this.queue.push({retryAt:i,requestOptions:e})
var r="Enqueued failed request for retry in ".concat(n)
navigator.onLine||(r+=" (Browser is offline)"),ne.warn(r),this.isPolling||(this.isPolling=!0,this.poll())}poll(){this.poller&&clearTimeout(this.poller),this.poller=setTimeout((()=>{this.areWeOnline&&this.queue.length>0&&this.flush(),this.poll()}),this.pollIntervalMs)}flush(){var e=Date.now(),t=[],n=this.queue.filter((n=>n.retryAt<e||(t.push(n),!1)))
if(this.queue=t,n.length>0)for(var{requestOptions:i}of n)this.retriableRequest(i)}unload(){for(var{requestOptions:e}of(this.poller&&(clearTimeout(this.poller),this.poller=void 0),this.queue))try{this.instance._send_request(h(h({},e),{},{transport:"sendBeacon"}))}catch(e){ne.error(e)}this.queue=[]}}var Ir,Rr=ie("[SessionId]")
class Or{constructor(e,t,n){var i
if(p(this,"_sessionIdChangedHandlers",[]),!e.persistence)throw new Error("SessionIdManager requires a PostHogPersistence instance")
if(e.config.__preview_experimental_cookieless_mode)throw new Error("SessionIdManager cannot be used with __preview_experimental_cookieless_mode")
this.config=e.config,this.persistence=e.persistence,this._windowId=void 0,this._sessionId=void 0,this._sessionStartTimestamp=null,this._sessionActivityTimestamp=null,this._sessionIdGenerator=t||pt,this._windowIdGenerator=n||pt
var r=this.config.persistence_name||this.config.token,o=this.config.session_idle_timeout_seconds||1800
if(this._sessionTimeoutMs=1e3*yi(o,60,36e3,"session_idle_timeout_seconds",1800),e.register({$configured_session_timeout_ms:this._sessionTimeoutMs}),this.resetIdleTimer(),this._window_id_storage_key="ph_"+r+"_window_id",this._primary_window_exists_storage_key="ph_"+r+"_primary_window_exists",this._canUseSessionStorage()){var s=$t.parse(this._window_id_storage_key),a=$t.parse(this._primary_window_exists_storage_key)
s&&!a?this._windowId=s:$t.remove(this._window_id_storage_key),$t.set(this._primary_window_exists_storage_key,!0)}if(null!==(i=this.config.bootstrap)&&void 0!==i&&i.sessionID)try{var l=(e=>{var t=this.config.bootstrap.sessionID.replace(/-/g,"")
if(32!==t.length)throw new Error("Not a valid UUID")
if("7"!==t[12])throw new Error("Not a UUIDv7")
return parseInt(t.substring(0,12),16)})()
this._setSessionId(this.config.bootstrap.sessionID,(new Date).getTime(),l)}catch(e){Rr.error("Invalid sessionID in bootstrap",e)}this._listenToReloadWindow()}get sessionTimeoutMs(){return this._sessionTimeoutMs}onSessionId(e){return z(this._sessionIdChangedHandlers)&&(this._sessionIdChangedHandlers=[]),this._sessionIdChangedHandlers.push(e),this._sessionId&&e(this._sessionId,this._windowId),()=>{this._sessionIdChangedHandlers=this._sessionIdChangedHandlers.filter((t=>t!==e))}}_canUseSessionStorage(){return"memory"!==this.config.persistence&&!this.persistence.disabled&&$t.is_supported()}_setWindowId(e){e!==this._windowId&&(this._windowId=e,this._canUseSessionStorage()&&$t.set(this._window_id_storage_key,e))}_getWindowId(){return this._windowId?this._windowId:this._canUseSessionStorage()?$t.parse(this._window_id_storage_key):null}_setSessionId(e,t,n){e===this._sessionId&&t===this._sessionActivityTimestamp&&n===this._sessionStartTimestamp||(this._sessionStartTimestamp=n,this._sessionActivityTimestamp=t,this._sessionId=e,this.persistence.register({[Fe]:[t,e,n]}))}_getSessionId(){if(this._sessionId&&this._sessionActivityTimestamp&&this._sessionStartTimestamp)return[this._sessionActivityTimestamp,this._sessionId,this._sessionStartTimestamp]
var e=this.persistence.props[Fe]
return q(e)&&2===e.length&&e.push(e[0]),e||[0,null,0]}resetSessionId(){this._setSessionId(null,null,null)}_listenToReloadWindow(){_e(m,"beforeunload",(()=>{this._canUseSessionStorage()&&$t.remove(this._primary_window_exists_storage_key)}),{capture:!1})}checkAndGetSessionAndWindowId(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(this.config.__preview_experimental_cookieless_mode)throw new Error("checkAndGetSessionAndWindowId should not be called in __preview_experimental_cookieless_mode")
var n=t||(new Date).getTime(),[i,r,o]=this._getSessionId(),s=this._getWindowId(),a=X(o)&&o>0&&Math.abs(n-o)>864e5,l=!1,c=!r,u=!e&&Math.abs(n-i)>this.sessionTimeoutMs
c||u||a?(r=this._sessionIdGenerator(),s=this._windowIdGenerator(),Rr.info("new session ID generated",{sessionId:r,windowId:s,changeReason:{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}}),o=n,l=!0):s||(s=this._windowIdGenerator(),l=!0)
var d=0===i||!e||a?n:i,f=0===o?(new Date).getTime():o
return this._setWindowId(s),this._setSessionId(r,d,f),e||this.resetIdleTimer(),l&&this._sessionIdChangedHandlers.forEach((e=>e(r,s,l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0))),{sessionId:r,windowId:s,sessionStartTimestamp:f,changeReason:l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0,lastActivityTimestamp:i}}resetIdleTimer(){clearTimeout(this._enforceIdleTimeout),this._enforceIdleTimeout=setTimeout((()=>{this.resetSessionId()}),1.1*this.sessionTimeoutMs)}}!function(e){e.US="us",e.EU="eu",e.CUSTOM="custom"}(Ir||(Ir={}))
var Fr="i.posthog.com"
class Mr{constructor(e){p(this,"_regionCache",{}),this.instance=e}get apiHost(){var e=this.instance.config.api_host.trim().replace(/\/$/,"")
return"https://app.posthog.com"===e?"https://us.i.posthog.com":e}get uiHost(){var e,t=null===(e=this.instance.config.ui_host)||void 0===e?void 0:e.replace(/\/$/,"")
return t||(t=this.apiHost.replace(".".concat(Fr),".posthog.com")),"https://app.posthog.com"===t?"https://us.posthog.com":t}get region(){return this._regionCache[this.apiHost]||(/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=Ir.US:/https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=Ir.EU:this._regionCache[this.apiHost]=Ir.CUSTOM),this._regionCache[this.apiHost]}endpointFor(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
if(t&&(t="/"===t[0]?t:"/".concat(t)),"ui"===e)return this.uiHost+t
if(this.region===Ir.CUSTOM)return this.apiHost+t
var n=Fr+t
switch(e){case"assets":return"https://".concat(this.region,"-assets.").concat(n)
case"api":return"https://".concat(this.region,".").concat(n)}}}var Ar="posthog-js"
function Nr(e){var{organization:t,projectId:n,prefix:i,severityAllowList:r=["error"]}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return o=>{var s,a,l,c,u
if("*"!==r&&!r.includes(o.level)||!e.__loaded)return o
o.tags||(o.tags={})
var d=e.requestRouter.endpointFor("ui","/project/".concat(e.config.token,"/person/").concat(e.get_distinct_id()))
o.tags["PostHog Person URL"]=d,e.sessionRecordingStarted()&&(o.tags["PostHog Recording URL"]=e.get_session_replay_url({withTimestamp:!0}))
var f=(null===(s=o.exception)||void 0===s?void 0:s.values)||[]
f.forEach((e=>{e.stacktrace&&(e.stacktrace.type="raw",e.stacktrace.frames.forEach((e=>{e.platform="web:javascript"})))}))
var h={$exception_message:(null===(a=f[0])||void 0===a?void 0:a.value)||o.message,$exception_type:null===(l=f[0])||void 0===l?void 0:l.type,$exception_personURL:d,$exception_level:o.level,$exception_list:f,$sentry_event_id:o.event_id,$sentry_exception:o.exception,$sentry_exception_message:(null===(c=f[0])||void 0===c?void 0:c.value)||o.message,$sentry_exception_type:null===(u=f[0])||void 0===u?void 0:u.type,$sentry_tags:o.tags}
return t&&n&&(h.$sentry_url=(i||"https://sentry.io/organizations/")+t+"/issues/?project="+n+"&query="+o.event_id),e.exceptions.sendExceptionEvent(h),o}}class jr{constructor(e,t,n,i,r){this.name=Ar,this.setupOnce=function(o){o(Nr(e,{organization:t,projectId:n,prefix:i,severityAllowList:r}))}}}var Dr=ie("[SegmentIntegration]")
class Br{constructor(e){this._instance=e}doPageView(e,t){var n,i=this._previousPageViewProperties(e,t)
return this._currentPageview={pathname:null!==(n=null==m?void 0:m.location.pathname)&&void 0!==n?n:"",pageViewId:t,timestamp:e},this._instance.scrollManager.resetContext(),i}doPageLeave(e){var t
return this._previousPageViewProperties(e,null===(t=this._currentPageview)||void 0===t?void 0:t.pageViewId)}doEvent(){var e
return{$pageview_id:null===(e=this._currentPageview)||void 0===e?void 0:e.pageViewId}}_previousPageViewProperties(e,t){var n=this._currentPageview
if(!n)return{$pageview_id:t}
var i={$pageview_id:t,$prev_pageview_id:n.pageViewId},r=this._instance.scrollManager.getContext()
if(r&&!this._instance.config.disable_scroll_properties){var{maxScrollHeight:o,lastScrollY:s,maxScrollY:a,maxContentHeight:l,lastContentY:c,maxContentY:u}=r
if(!(z(o)||z(s)||z(a)||z(l)||z(c)||z(u))){o=Math.ceil(o),s=Math.ceil(s),a=Math.ceil(a),l=Math.ceil(l),c=Math.ceil(c),u=Math.ceil(u)
var d=o<=1?1:yi(s/o,0,1),f=o<=1?1:yi(a/o,0,1),h=l<=1?1:yi(c/l,0,1),p=l<=1?1:yi(u/l,0,1)
i=ae(i,{$prev_pageview_last_scroll:s,$prev_pageview_last_scroll_percentage:d,$prev_pageview_max_scroll:a,$prev_pageview_max_scroll_percentage:f,$prev_pageview_last_content:c,$prev_pageview_last_content_percentage:h,$prev_pageview_max_content:u,$prev_pageview_max_content_percentage:p})}}return n.pathname&&(i.$prev_pageview_pathname=n.pathname),n.timestamp&&(i.$prev_pageview_duration=(e.getTime()-n.timestamp.getTime())/1e3),i}}var Hr,qr,Ur,Gr,Wr,zr,Vr,Qr,Jr,Kr,Xr,Yr={},Zr=[],eo=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,to=Array.isArray
function no(e,t){for(var n in t)e[n]=t[n]
return e}function io(e){var t=e.parentNode
t&&t.removeChild(e)}function ro(e,t,n,i,r){var o={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++Ur:r,__i:-1,__u:0}
return null==r&&null!=qr.vnode&&qr.vnode(o),o}function oo(e){return e.children}function so(e,t){this.props=e,this.context=t}function ao(e,t){if(null==t)return e.__?ao(e.__,e.__i+1):null
for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e
return"function"==typeof e.type?ao(e):null}function lo(e){var t,n
if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e
break}return lo(e)}}function co(e){(!e.__d&&(e.__d=!0)&&Gr.push(e)&&!uo.__r++||Wr!==qr.debounceRendering)&&((Wr=qr.debounceRendering)||zr)(uo)}function uo(){var e,t,n,i,r,o,s,a,l
for(Gr.sort(Vr);e=Gr.shift();)e.__d&&(t=Gr.length,i=void 0,o=(r=(n=e).__v).__e,a=[],l=[],(s=n.__P)&&((i=no({},r)).__v=r.__v+1,qr.vnode&&qr.vnode(i),bo(s,i,r,n.__n,void 0!==s.ownerSVGElement,32&r.__u?[o]:null,a,null==o?ao(r):o,!!(32&r.__u),l),i.__.__k[i.__i]=i,yo(a,i,l),i.__e!=o&&lo(i)),Gr.length>t&&Gr.sort(Vr))
uo.__r=0}function fo(e,t,n,i,r,o,s,a,l,c,u){var d,f,h,p,g,v=i&&i.__k||Zr,_=t.length
for(n.__d=l,function(e,t,n){var i,r,o,s,a,l=t.length,c=n.length,u=c,d=0
for(e.__k=[],i=0;i<l;i++)null!=(r=e.__k[i]=null==(r=t[i])||"boolean"==typeof r||"function"==typeof r?null:"string"==typeof r||"number"==typeof r||"bigint"==typeof r||r.constructor==String?ro(null,r,null,null,r):to(r)?ro(oo,{children:r},null,null,null):void 0===r.constructor&&r.__b>0?ro(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)?(r.__=e,r.__b=e.__b+1,a=po(r,n,s=i+d,u),r.__i=a,o=null,-1!==a&&(u--,(o=n[a])&&(o.__u|=131072)),null==o||null===o.__v?(-1==a&&d--,"function"!=typeof r.type&&(r.__u|=65536)):a!==s&&(a===s+1?d++:a>s?u>l-s?d+=a-s:d--:d=a<s&&a==s-1?a-s:0,a!==i+d&&(r.__u|=65536))):(o=n[i])&&null==o.key&&o.__e&&(o.__e==e.__d&&(e.__d=ao(o)),ko(o,o,!1),n[i]=null,u--)
if(u)for(i=0;i<c;i++)null!=(o=n[i])&&0==(131072&o.__u)&&(o.__e==e.__d&&(e.__d=ao(o)),ko(o,o))}(n,t,v),l=n.__d,d=0;d<_;d++)null!=(h=n.__k[d])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?Yr:v[h.__i]||Yr,h.__i=d,bo(e,h,f,r,o,s,a,l,c,u),p=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&wo(f.ref,null,h),u.push(h.ref,h.__c||p,h)),null==g&&null!=p&&(g=p),65536&h.__u||f.__k===h.__k?l=ho(h,l,e):"function"==typeof h.type&&void 0!==h.__d?l=h.__d:p&&(l=p.nextSibling),h.__d=void 0,h.__u&=-196609)
n.__d=l,n.__e=g}function ho(e,t,n){var i,r
if("function"==typeof e.type){for(i=e.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=e,t=ho(i[r],t,n))
return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function po(e,t,n,i){var r=e.key,o=e.type,s=n-1,a=n+1,l=t[n]
if(null===l||l&&r==l.key&&o===l.type)return n
if(i>(null!=l&&0==(131072&l.__u)?1:0))for(;s>=0||a<t.length;){if(s>=0){if((l=t[s])&&0==(131072&l.__u)&&r==l.key&&o===l.type)return s
s--}if(a<t.length){if((l=t[a])&&0==(131072&l.__u)&&r==l.key&&o===l.type)return a
a++}}return-1}function go(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||eo.test(t)?n:n+"px"}function vo(e,t,n,i,r){var o
e:if("style"===t)if("string"==typeof n)e.style.cssText=n
else{if("string"==typeof i&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||go(e.style,t,"")
if(n)for(t in n)i&&n[t]===i[t]||go(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?i?n.u=i.u:(n.u=Date.now(),e.addEventListener(t,o?mo:_o,o)):e.removeEventListener(t,o?mo:_o,o)
else{if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s")
else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&"role"!==t&&t in e)try{e[t]=null==n?"":n
break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function _o(e){var t=this.l[e.type+!1]
if(e.t){if(e.t<=t.u)return}else e.t=Date.now()
return t(qr.event?qr.event(e):e)}function mo(e){return this.l[e.type+!0](qr.event?qr.event(e):e)}function bo(e,t,n,i,r,o,s,a,l,c){var u,d,f,h,p,g,v,_,m,b,y,w,k,S,x,E=t.type
if(void 0!==t.constructor)return null
128&n.__u&&(l=!!(32&n.__u),o=[a=t.__e=n.__e]),(u=qr.__b)&&u(t)
e:if("function"==typeof E)try{if(_=t.props,m=(u=E.contextType)&&i[u.__c],b=u?m?m.props.value:u.__:i,n.__c?v=(d=t.__c=n.__c).__=d.__E:("prototype"in E&&E.prototype.render?t.__c=d=new E(_,b):(t.__c=d=new so(_,b),d.constructor=E,d.render=So),m&&m.sub(d),d.props=_,d.state||(d.state={}),d.context=b,d.__n=i,f=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=E.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=no({},d.__s)),no(d.__s,E.getDerivedStateFromProps(_,d.__s))),h=d.props,p=d.state,d.__v=t,f)null==E.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount)
else{if(null==E.getDerivedStateFromProps&&_!==h&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(_,b),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(_,d.__s,b)||t.__v===n.__v)){for(t.__v!==n.__v&&(d.props=_,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),y=0;y<d._sb.length;y++)d.__h.push(d._sb[y])
d._sb=[],d.__h.length&&s.push(d)
break e}null!=d.componentWillUpdate&&d.componentWillUpdate(_,d.__s,b),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(h,p,g)}))}if(d.context=b,d.props=_,d.__P=e,d.__e=!1,w=qr.__r,k=0,"prototype"in E&&E.prototype.render){for(d.state=d.__s,d.__d=!1,w&&w(t),u=d.render(d.props,d.state,d.context),S=0;S<d._sb.length;S++)d.__h.push(d._sb[S])
d._sb=[]}else do{d.__d=!1,w&&w(t),u=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++k<25)
d.state=d.__s,null!=d.getChildContext&&(i=no(no({},i),d.getChildContext())),f||null==d.getSnapshotBeforeUpdate||(g=d.getSnapshotBeforeUpdate(h,p)),fo(e,to(x=null!=u&&u.type===oo&&null==u.key?u.props.children:u)?x:[x],t,n,i,r,o,s,a,l,c),d.base=t.__e,t.__u&=-161,d.__h.length&&s.push(d),v&&(d.__E=d.__=null)}catch(e){t.__v=null,l||null!=o?(t.__e=a,t.__u|=l?160:32,o[o.indexOf(a)]=null):(t.__e=n.__e,t.__k=n.__k),qr.__e(e,t,n)}else null==o&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=function(e,t,n,i,r,o,s,a,l){var c,u,d,f,h,p,g,v=n.props,_=t.props,m=t.type
if("svg"===m&&(r=!0),null!=o)for(c=0;c<o.length;c++)if((h=o[c])&&"setAttribute"in h==!!m&&(m?h.localName===m:3===h.nodeType)){e=h,o[c]=null
break}if(null==e){if(null===m)return document.createTextNode(_)
e=r?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,_.is&&_),o=null,a=!1}if(null===m)v===_||a&&e.data===_||(e.data=_)
else{if(o=o&&Hr.call(e.childNodes),v=n.props||Yr,!a&&null!=o)for(v={},c=0;c<e.attributes.length;c++)v[(h=e.attributes[c]).name]=h.value
for(c in v)h=v[c],"children"==c||("dangerouslySetInnerHTML"==c?d=h:"key"===c||c in _||vo(e,c,null,h,r))
for(c in _)h=_[c],"children"==c?f=h:"dangerouslySetInnerHTML"==c?u=h:"value"==c?p=h:"checked"==c?g=h:"key"===c||a&&"function"!=typeof h||v[c]===h||vo(e,c,h,v[c],r)
if(u)a||d&&(u.__html===d.__html||u.__html===e.innerHTML)||(e.innerHTML=u.__html),t.__k=[]
else if(d&&(e.innerHTML=""),fo(e,to(f)?f:[f],t,n,i,r&&"foreignObject"!==m,o,s,o?o[0]:n.__k&&ao(n,0),a,l),null!=o)for(c=o.length;c--;)null!=o[c]&&io(o[c])
a||(c="value",void 0!==p&&(p!==e[c]||"progress"===m&&!p||"option"===m&&p!==v[c])&&vo(e,c,p,v[c],!1),c="checked",void 0!==g&&g!==e[c]&&vo(e,c,g,v[c],!1))}return e}(n.__e,t,n,i,r,o,s,l,c);(u=qr.diffed)&&u(t)}function yo(e,t,n){t.__d=void 0
for(var i=0;i<n.length;i++)wo(n[i],n[++i],n[++i])
qr.__c&&qr.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){qr.__e(e,t.__v)}}))}function wo(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){qr.__e(e,n)}}function ko(e,t,n){var i,r
if(qr.unmount&&qr.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||wo(i,null,t)),null!=(i=e.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){qr.__e(e,t)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(r=0;r<i.length;r++)i[r]&&ko(i[r],t,n||"function"!=typeof e.type)
n||null==e.__e||io(e.__e),e.__=e.__e=e.__d=void 0}function So(e,t,n){return this.constructor(e,n)}Hr=Zr.slice,qr={__e:function(e,t,n,i){for(var r,o,s;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&null!=o.getDerivedStateFromError&&(r.setState(o.getDerivedStateFromError(e)),s=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,i||{}),s=r.__d),s)return r.__E=r}catch(t){e=t}throw e}},Ur=0,so.prototype.setState=function(e,t){var n
n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=no({},this.state),"function"==typeof e&&(e=e(no({},n),this.props)),e&&no(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),co(this))},so.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),co(this))},so.prototype.render=oo,Gr=[],zr="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Vr=function(e,t){return e.__v.__b-t.__v.__b},uo.__r=0,Qr=0,function(e,t){var n={__c:t="__cC"+Qr++,__:{isPreviewMode:!1,previewPageIndex:0,handleCloseSurveyPopup:()=>{},isPopup:!0,onPreviewSubmit:()=>{}},Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,i
return this.getChildContext||(n=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some((function(e){e.__e=!0,co(e)}))},this.sub=function(e){n.push(e)
var t=e.componentWillUnmount
e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}}
n.Provider.__=n.Consumer.contextType=n}(),function(e){e.Popover="popover",e.API="api",e.Widget="widget"}(Jr||(Jr={})),function(e){e.Open="open",e.MultipleChoice="multiple_choice",e.SingleChoice="single_choice",e.Rating="rating",e.Link="link"}(Kr||(Kr={})),function(e){e.NextQuestion="next_question",e.End="end",e.ResponseBased="response_based",e.SpecificQuestion="specific_question"}(Xr||(Xr={}))
class xo{constructor(){p(this,"events",{}),this.events={}}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),()=>{this.events[e]=this.events[e].filter((e=>e!==t))}}emit(e,t){for(var n of this.events[e]||[])n(t)
for(var i of this.events["*"]||[])i(e,t)}}class Eo{constructor(e){p(this,"_debugEventEmitter",new xo),p(this,"checkStep",((e,t)=>this.checkStepEvent(e,t)&&this.checkStepUrl(e,t)&&this.checkStepElement(e,t))),p(this,"checkStepEvent",((e,t)=>null==t||!t.event||(null==e?void 0:e.event)===(null==t?void 0:t.event))),this.instance=e,this.actionEvents=new Set,this.actionRegistry=new Set}init(){var e,t
z(null===(e=this.instance)||void 0===e?void 0:e._addCaptureHook)||(null===(t=this.instance)||void 0===t||t._addCaptureHook(((e,t)=>{this.on(e,t)})))}register(e){var t,n
if(!z(null===(t=this.instance)||void 0===t?void 0:t._addCaptureHook)&&(e.forEach((e=>{var t,n
null===(t=this.actionRegistry)||void 0===t||t.add(e),null===(n=e.steps)||void 0===n||n.forEach((e=>{var t
null===(t=this.actionEvents)||void 0===t||t.add((null==e?void 0:e.event)||"")}))})),null!==(n=this.instance)&&void 0!==n&&n.autocapture)){var i,r=new Set
e.forEach((e=>{var t
null===(t=e.steps)||void 0===t||t.forEach((e=>{null!=e&&e.selector&&r.add(null==e?void 0:e.selector)}))})),null===(i=this.instance)||void 0===i||i.autocapture.setElementSelectors(r)}}on(e,t){var n
null!=t&&0!=e.length&&(this.actionEvents.has(e)||this.actionEvents.has(null==t?void 0:t.event))&&this.actionRegistry&&(null===(n=this.actionRegistry)||void 0===n?void 0:n.size)>0&&this.actionRegistry.forEach((e=>{this.checkAction(t,e)&&this._debugEventEmitter.emit("actionCaptured",e.name)}))}_addActionHook(e){this.onAction("actionCaptured",(t=>e(t)))}checkAction(e,t){if(null==(null==t?void 0:t.steps))return!1
for(var n of t.steps)if(this.checkStep(e,n))return!0
return!1}onAction(e,t){return this._debugEventEmitter.on(e,t)}checkStepUrl(e,t){if(null!=t&&t.url){var n,i=null==e||null===(n=e.properties)||void 0===n?void 0:n.$current_url
if(!i||"string"!=typeof i)return!1
if(!Eo.matchString(i,null==t?void 0:t.url,(null==t?void 0:t.url_matching)||"contains"))return!1}return!0}static matchString(e,t,n){switch(n){case"regex":return!!m&&N(e,t)
case"exact":return t===e
case"contains":var i=Eo.escapeStringRegexp(t).replace(/_/g,".").replace(/%/g,".*")
return N(e,i)
default:return!1}}static escapeStringRegexp(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}checkStepElement(e,t){if((null!=t&&t.href||null!=t&&t.tag_name||null!=t&&t.text)&&!this.getElementsList(e).some((e=>!(null!=t&&t.href&&!Eo.matchString(e.href||"",null==t?void 0:t.href,(null==t?void 0:t.href_matching)||"exact")||null!=t&&t.tag_name&&e.tag_name!==(null==t?void 0:t.tag_name)||null!=t&&t.text&&!Eo.matchString(e.text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")&&!Eo.matchString(e.$el_text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")))))return!1
if(null!=t&&t.selector){var n,i=null==e||null===(n=e.properties)||void 0===n?void 0:n.$element_selectors
if(!i)return!1
if(!i.includes(null==t?void 0:t.selector))return!1}return!0}getElementsList(e){return null==(null==e?void 0:e.properties.$elements)?[]:null==e?void 0:e.properties.$elements}}class $o{constructor(e){this.instance=e,this.eventToSurveys=new Map,this.actionToSurveys=new Map}register(e){var t
z(null===(t=this.instance)||void 0===t?void 0:t._addCaptureHook)||(this.setupEventBasedSurveys(e),this.setupActionBasedSurveys(e))}setupActionBasedSurveys(e){var t=e.filter((e=>{var t,n,i,r
return(null===(t=e.conditions)||void 0===t?void 0:t.actions)&&(null===(n=e.conditions)||void 0===n||null===(i=n.actions)||void 0===i||null===(r=i.values)||void 0===r?void 0:r.length)>0}))
0!==t.length&&(null==this.actionMatcher&&(this.actionMatcher=new Eo(this.instance),this.actionMatcher.init(),this.actionMatcher._addActionHook((e=>{this.onAction(e)}))),t.forEach((e=>{var t,n,i,r,o,s,a,l,c,u
e.conditions&&null!==(t=e.conditions)&&void 0!==t&&t.actions&&null!==(n=e.conditions)&&void 0!==n&&null!==(i=n.actions)&&void 0!==i&&i.values&&(null===(r=e.conditions)||void 0===r||null===(o=r.actions)||void 0===o||null===(s=o.values)||void 0===s?void 0:s.length)>0&&(null===(a=this.actionMatcher)||void 0===a||a.register(e.conditions.actions.values),null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c||null===(u=c.values)||void 0===u||u.forEach((t=>{if(t&&t.name){var n=this.actionToSurveys.get(t.name)
n&&n.push(e.id),this.actionToSurveys.set(t.name,n||[e.id])}})))})))}setupEventBasedSurveys(e){var t
0!==e.filter((e=>{var t,n,i,r
return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(i=n.events)||void 0===i||null===(r=i.values)||void 0===r?void 0:r.length)>0})).length&&(null===(t=this.instance)||void 0===t||t._addCaptureHook(((e,t)=>{this.onEvent(e,t)})),e.forEach((e=>{var t,n,i
null===(t=e.conditions)||void 0===t||null===(n=t.events)||void 0===n||null===(i=n.values)||void 0===i||i.forEach((t=>{if(t&&t.name){var n=this.eventToSurveys.get(t.name)
n&&n.push(e.id),this.eventToSurveys.set(t.name,n||[e.id])}}))})))}onEvent(e,t){var n,i,r=(null===(n=this.instance)||void 0===n||null===(i=n.persistence)||void 0===i?void 0:i.props[Ue])||[]
if($o.SURVEY_SHOWN_EVENT_NAME==e&&t&&r.length>0){var o,s=null==t||null===(o=t.properties)||void 0===o?void 0:o.$survey_id
if(s){var a=r.indexOf(s)
a>=0&&(r.splice(a,1),this._updateActivatedSurveys(r))}}else this.eventToSurveys.has(e)&&this._updateActivatedSurveys(r.concat(this.eventToSurveys.get(e)||[]))}onAction(e){var t,n,i=(null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n?void 0:n.props[Ue])||[]
this.actionToSurveys.has(e)&&this._updateActivatedSurveys(i.concat(this.actionToSurveys.get(e)||[]))}_updateActivatedSurveys(e){var t,n
null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n||n.register({[Ue]:[...new Set(e)]})}getSurveys(){var e,t
return(null===(e=this.instance)||void 0===e||null===(t=e.persistence)||void 0===t?void 0:t.props[Ue])||[]}getEventToSurveys(){return this.eventToSurveys}_getActionMatcher(){return this.actionMatcher}}p($o,"SURVEY_SHOWN_EVENT_NAME","survey shown")
var Co=ie("[Surveys]"),Po={icontains:(e,t)=>e.some((e=>t.toLowerCase().includes(e.toLowerCase()))),not_icontains:(e,t)=>e.every((e=>!t.toLowerCase().includes(e.toLowerCase()))),regex:(e,t)=>e.some((e=>N(t,e))),not_regex:(e,t)=>e.every((e=>!N(t,e))),exact:(e,t)=>e.some((e=>t===e)),is_not:(e,t)=>e.every((e=>t!==e))}
function To(e,t,n){var i,r=e.questions[t],o=t+1
if(null===(i=r.branching)||void 0===i||!i.type)return t===e.questions.length-1?Xr.End:o
if(r.branching.type===Xr.End)return Xr.End
if(r.branching.type===Xr.SpecificQuestion){if(Number.isInteger(r.branching.index))return r.branching.index}else if(r.branching.type===Xr.ResponseBased){if(r.type===Kr.SingleChoice){var s,a,l=r.choices.indexOf("".concat(n))
if(null!==(s=r.branching)&&void 0!==s&&null!==(a=s.responseValues)&&void 0!==a&&a.hasOwnProperty(l)){var c=r.branching.responseValues[l]
return Number.isInteger(c)?c:c===Xr.End?Xr.End:o}}else if(r.type===Kr.Rating){var u,d
if("number"!=typeof n||!Number.isInteger(n))throw new Error("The response type must be an integer")
var f=function(e,t){if(3===t){if(e<1||e>3)throw new Error("The response must be in range 1-3")
return 1===e?"negative":2===e?"neutral":"positive"}if(5===t){if(e<1||e>5)throw new Error("The response must be in range 1-5")
return e<=2?"negative":3===e?"neutral":"positive"}if(7===t){if(e<1||e>7)throw new Error("The response must be in range 1-7")
return e<=3?"negative":4===e?"neutral":"positive"}if(10===t){if(e<0||e>10)throw new Error("The response must be in range 0-10")
return e<=6?"detractors":e<=8?"passives":"promoters"}throw new Error("The scale must be one of: 3, 5, 7, 10")}(n,r.scale)
if(null!==(u=r.branching)&&void 0!==u&&null!==(d=u.responseValues)&&void 0!==d&&d.hasOwnProperty(f)){var h=r.branching.responseValues[f]
return Number.isInteger(h)?h:h===Xr.End?Xr.End:o}}return o}return Co.warn("Falling back to next question index due to unexpected branching type"),o}function Lo(e){return null!=e?e:"icontains"}class Io{constructor(e){p(this,"getNextSurveyStep",To),this.instance=e,this._surveyEventReceiver=null}onRemoteConfig(e){this._decideServerResponse=!!e.surveys,Co.info("decideServerResponse set to ".concat(this._decideServerResponse)),this.loadIfEnabled()}reset(){localStorage.removeItem("lastSeenSurveyDate")
var e=(()=>{for(var e=[],t=0;t<localStorage.length;t++){var n=localStorage.key(t)
null!=n&&n.startsWith("seenSurvey_")&&e.push(n)}return e})()
e.forEach((e=>localStorage.removeItem(e)))}loadIfEnabled(){if(!this._surveyManager)if(this.instance.config.disable_surveys)Co.info("Disabled. Not loading surveys.")
else{var e=null==I?void 0:I.__PosthogExtensions__
if(e){var t=e.generateSurveys
if(this._decideServerResponse)if(null==this._surveyEventReceiver&&(this._surveyEventReceiver=new $o(this.instance)),t)this._surveyManager=t(this.instance)
else{var n=e.loadExternalDependency
n?n(this.instance,"surveys",(t=>{var n
t?Co.error("Could not load surveys script",t):this._surveyManager=null===(n=e.generateSurveys)||void 0===n?void 0:n.call(e,this.instance)})):Co.error("PostHog loadExternalDependency extension not found. Cannot load remote config.")}else Co.warn("Decide not loaded yet. Not loading surveys.")}else Co.error("PostHog Extensions not found.")}}getSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(this.instance.config.disable_surveys)return Co.info("Disabled. Not loading surveys."),e([])
null==this._surveyEventReceiver&&(this._surveyEventReceiver=new $o(this.instance))
var n=this.instance.get_property(qe)
if(n&&!t)return e(n)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api","/api/surveys/?token=".concat(this.instance.config.token)),method:"GET",callback:t=>{var n,i=t.statusCode
if(200!==i||!t.json)return Co.error("Surveys API could not be loaded, status: ".concat(i)),e([])
var r,o=t.json.surveys||[],s=o.filter((e=>{var t,n,i,r,o,s,a,l,c,u,d,f
return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(i=n.events)||void 0===i?void 0:i.values)&&(null===(r=e.conditions)||void 0===r||null===(o=r.events)||void 0===o||null===(s=o.values)||void 0===s?void 0:s.length)>0||(null===(a=e.conditions)||void 0===a?void 0:a.actions)&&(null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c?void 0:c.values)&&(null===(u=e.conditions)||void 0===u||null===(d=u.actions)||void 0===d||null===(f=d.values)||void 0===f?void 0:f.length)>0}))
return s.length>0&&(null===(r=this._surveyEventReceiver)||void 0===r||r.register(s)),null===(n=this.instance.persistence)||void 0===n||n.register({[qe]:o}),e(o)}})}isSurveyFeatureFlagEnabled(e){return!e||this.instance.featureFlags.isFeatureEnabled(e)}getActiveMatchingSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.getSurveys((t=>{var n,i=t.filter((e=>!(!e.start_date||e.end_date))).filter((e=>{var t
if(!e.conditions)return!0
var n=function(e){var t,n,i
if(null===(t=e.conditions)||void 0===t||!t.url)return!0
var r=null==m||null===(n=m.location)||void 0===n?void 0:n.href
if(!r)return!1
var o=[e.conditions.url]
return Po[Lo(null===(i=e.conditions)||void 0===i?void 0:i.urlMatchType)](o,r)}(e),i=null===(t=e.conditions)||void 0===t||!t.selector||(null==x?void 0:x.querySelector(e.conditions.selector)),r=function(e){var t,n
if(null===(t=e.conditions)||void 0===t||!t.deviceTypes)return!0
if(!L)return!1
var i=In.deviceType(L)
return Po[Lo(null===(n=e.conditions)||void 0===n?void 0:n.deviceTypesMatchType)](e.conditions.deviceTypes,i)}(e)
return n&&i&&r})),r=null===(n=this._surveyEventReceiver)||void 0===n?void 0:n.getSurveys(),o=i.filter((e=>{var t,n,i,o,s,a,l,c,u
if(!(e.linked_flag_key||e.targeting_flag_key||e.internal_targeting_flag_key||null!==(t=e.feature_flag_keys)&&void 0!==t&&t.length))return!0
var d=this.isSurveyFeatureFlagEnabled(e.linked_flag_key),f=this.isSurveyFeatureFlagEnabled(e.targeting_flag_key),h=(null!==(n=null===(i=e.conditions)||void 0===i||null===(o=i.events)||void 0===o||null===(s=o.values)||void 0===s?void 0:s.length)&&void 0!==n?n:0)>0,p=(null!==(a=null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c||null===(u=c.values)||void 0===u?void 0:u.length)&&void 0!==a?a:0)>0,g=!h&&!p||(null==r?void 0:r.includes(e.id)),v=this._canActivateRepeatedly(e)||this.isSurveyFeatureFlagEnabled(e.internal_targeting_flag_key),_=this.checkFlags(e)
return d&&f&&v&&g&&_}))
return e(o)}),t)}checkFlags(e){var t
return null===(t=e.feature_flag_keys)||void 0===t||!t.length||e.feature_flag_keys.every((e=>{var{key:t,value:n}=e
return!t||!n||this.instance.featureFlags.isFeatureEnabled(n)}))}_canActivateRepeatedly(e){var t
return K(null===(t=I.__PosthogExtensions__)||void 0===t?void 0:t.canActivateRepeatedly)?(Co.warn("init was not called"),!1):I.__PosthogExtensions__.canActivateRepeatedly(e)}canRenderSurvey(e){K(this._surveyManager)?Co.warn("init was not called"):this.getSurveys((t=>{var n=t.filter((t=>t.id===e))[0]
this._surveyManager.canRenderSurvey(n)}))}renderSurvey(e,t){K(this._surveyManager)?Co.warn("init was not called"):this.getSurveys((n=>{var i=n.filter((t=>t.id===e))[0]
this._surveyManager.renderSurvey(i,null==x?void 0:x.querySelector(t))}))}}var Ro=ie("[RateLimiter]")
class Oo{constructor(e){var t,n
p(this,"serverLimits",{}),p(this,"lastEventRateLimited",!1),p(this,"checkForLimiting",(e=>{var t=e.text
if(t&&t.length)try{(JSON.parse(t).quota_limited||[]).forEach((e=>{Ro.info("".concat(e||"events"," is quota limited.")),this.serverLimits[e]=(new Date).getTime()+6e4}))}catch(e){return void Ro.warn('could not rate limit - continuing. Error: "'.concat(null==e?void 0:e.message,'"'),{text:t})}})),this.instance=e,this.captureEventsPerSecond=(null===(t=e.config.rate_limiting)||void 0===t?void 0:t.events_per_second)||10,this.captureEventsBurstLimit=Math.max((null===(n=e.config.rate_limiting)||void 0===n?void 0:n.events_burst_limit)||10*this.captureEventsPerSecond,this.captureEventsPerSecond),this.lastEventRateLimited=this.clientRateLimitContext(!0).isRateLimited}clientRateLimitContext(){var e,t,n,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=(new Date).getTime(),o=null!==(e=null===(t=this.instance.persistence)||void 0===t?void 0:t.get_property(Ve))&&void 0!==e?e:{tokens:this.captureEventsBurstLimit,last:r}
o.tokens+=(r-o.last)/1e3*this.captureEventsPerSecond,o.last=r,o.tokens>this.captureEventsBurstLimit&&(o.tokens=this.captureEventsBurstLimit)
var s=o.tokens<1
return s||i||(o.tokens=Math.max(0,o.tokens-1)),!s||this.lastEventRateLimited||i||this.instance.capture("$$client_ingestion_warning",{$$client_ingestion_warning_message:"posthog-js client rate limited. Config is set to ".concat(this.captureEventsPerSecond," events per second and ").concat(this.captureEventsBurstLimit," events burst limit.")},{skip_client_rate_limiting:!0}),this.lastEventRateLimited=s,null===(n=this.instance.persistence)||void 0===n||n.set_property(Ve,o),{isRateLimited:s,remainingTokens:o.tokens}}isServerRateLimited(e){var t=this.serverLimits[e||"events"]||!1
return!1!==t&&(new Date).getTime()<t}}var Fo=e=>{var t=null==e?void 0:e.config
return h({initialPathName:(null==E?void 0:E.pathname)||"",referringDomain:In.referringDomain()},In.campaignParams({customTrackedParams:null==t?void 0:t.custom_campaign_params,maskPersonalDataProperties:null==t?void 0:t.mask_personal_data_properties,customPersonalDataProperties:null==t?void 0:t.custom_personal_data_properties}))}
class Mo{constructor(e,t,n,i){p(this,"_onSessionIdCallback",(e=>{var t=this._getStoredProps()
if(!t||t.sessionId!==e){var n={sessionId:e,props:this._sessionSourceParamGenerator(this.instance)}
this._persistence.register({[ze]:n})}})),this.instance=e,this._sessionIdManager=t,this._persistence=n,this._sessionSourceParamGenerator=i||Fo,this._sessionIdManager.onSessionId(this._onSessionIdCallback)}_getStoredProps(){return this._persistence.props[ze]}getSessionProps(){var e,t=null===(e=this._getStoredProps())||void 0===e?void 0:e.props
return t?{$client_session_initial_referring_host:t.referringDomain,$client_session_initial_pathname:t.initialPathName,$client_session_initial_utm_source:t.utm_source,$client_session_initial_utm_campaign:t.utm_campaign,$client_session_initial_utm_medium:t.utm_medium,$client_session_initial_utm_content:t.utm_content,$client_session_initial_utm_term:t.utm_term}:{}}}var Ao=["ahrefsbot","ahrefssiteaudit","applebot","baiduspider","better uptime bot","bingbot","bingpreview","bot.htm","bot.php","crawler","deepscan","duckduckbot","facebookexternal","facebookcatalog","http://yandex.com/bots","hubspot","ia_archiver","linkedinbot","mj12bot","msnbot","nessus","petalbot","pinterest","prerender","rogerbot","screaming frog","semrushbot","sitebulb","slurp","turnitin","twitterbot","vercelbot","yahoo! slurp","yandexbot","gptbot","oai-searchbot","chatgpt-user","headlesschrome","cypress","Google-HotelAdsVerifier","adsbot-google","apis-google","duplexweb-google","feedfetcher-google","google favicon","google web preview","google-read-aloud","googlebot","googleweblight","mediapartners-google","storebot-google","Bytespider;"],No=function(e,t){if(!e)return!1
var n=e.toLowerCase()
return Ao.concat(t||[]).some((e=>{var t=e.toLowerCase()
return-1!==n.indexOf(t)}))},jo=function(e,t){if(!e)return!1
var n=e.userAgent
if(n&&No(n,t))return!0
try{var i=null==e?void 0:e.userAgentData
if(null!=i&&i.brands&&i.brands.some((e=>No(null==e?void 0:e.brand,t))))return!0}catch(e){}return!!e.webdriver}
class Do{constructor(){this.clicks=[]}isRageClick(e,t,n){var i=this.clicks[this.clicks.length-1]
if(i&&Math.abs(e-i.x)+Math.abs(t-i.y)<30&&n-i.timestamp<1e3){if(this.clicks.push({x:e,y:t,timestamp:n}),3===this.clicks.length)return!0}else this.clicks=[{x:e,y:t,timestamp:n}]
return!1}}var Bo=ie("[Dead Clicks]"),Ho=()=>!0,qo=e=>{var t,n=!(null===(t=e.instance.persistence)||void 0===t||!t.get_property(Ee)),i=e.instance.config.capture_dead_clicks
return Y(i)?i:n}
class Uo{get lazyLoadedDeadClicksAutocapture(){return this._lazyLoadedDeadClicksAutocapture}constructor(e,t,n){this.instance=e,this.isEnabled=t,this.onCapture=n,this.startIfEnabled()}onRemoteConfig(e){this.instance.persistence&&this.instance.persistence.register({[Ee]:null==e?void 0:e.captureDeadClicks}),this.startIfEnabled()}startIfEnabled(){this.isEnabled(this)&&this.loadScript((()=>{this.start()}))}loadScript(e){var t,n,i
null!==(t=I.__PosthogExtensions__)&&void 0!==t&&t.initDeadClicksAutocapture&&e(),null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"dead-clicks-autocapture",(t=>{t?Bo.error("failed to load script",t):e()}))}start(){var e
if(x){if(!this._lazyLoadedDeadClicksAutocapture&&null!==(e=I.__PosthogExtensions__)&&void 0!==e&&e.initDeadClicksAutocapture){var t=G(this.instance.config.capture_dead_clicks)?this.instance.config.capture_dead_clicks:{}
t.__onCapture=this.onCapture,this._lazyLoadedDeadClicksAutocapture=I.__PosthogExtensions__.initDeadClicksAutocapture(this.instance,t),this._lazyLoadedDeadClicksAutocapture.start(x),Bo.info("starting...")}}else Bo.error("`document` not found. Cannot start.")}stop(){this._lazyLoadedDeadClicksAutocapture&&(this._lazyLoadedDeadClicksAutocapture.stop(),this._lazyLoadedDeadClicksAutocapture=void 0,Bo.info("stopping..."))}}var Go=ie("[Heatmaps]")
function Wo(e){return G(e)&&"clientX"in e&&"clientY"in e&&X(e.clientX)&&X(e.clientY)}class zo{constructor(e){var t
p(this,"rageclicks",new Do),p(this,"_enabledServerSide",!1),p(this,"_initialized",!1),p(this,"_flushInterval",null),this.instance=e,this._enabledServerSide=!(null===(t=this.instance.persistence)||void 0===t||!t.props[ke]),_e(m,"beforeunload",this.flush)}get flushIntervalMilliseconds(){var e=5e3
return G(this.instance.config.capture_heatmaps)&&this.instance.config.capture_heatmaps.flush_interval_milliseconds&&(e=this.instance.config.capture_heatmaps.flush_interval_milliseconds),e}get isEnabled(){return z(this.instance.config.capture_heatmaps)?z(this.instance.config.enable_heatmaps)?this._enabledServerSide:this.instance.config.enable_heatmaps:!1!==this.instance.config.capture_heatmaps}startIfEnabled(){if(this.isEnabled){if(this._initialized)return
Go.info("starting..."),this._setupListeners(),this._flushInterval=setInterval(this.flush.bind(this),this.flushIntervalMilliseconds)}else{var e,t
clearInterval(null!==(e=this._flushInterval)&&void 0!==e?e:void 0),null===(t=this.deadClicksCapture)||void 0===t||t.stop(),this.getAndClearBuffer()}}onRemoteConfig(e){var t=!!e.heatmaps
this.instance.persistence&&this.instance.persistence.register({[ke]:t}),this._enabledServerSide=t,this.startIfEnabled()}getAndClearBuffer(){var e=this.buffer
return this.buffer=void 0,e}_onDeadClick(e){this._onClick(e.originalEvent,"deadclick")}_setupListeners(){m&&x&&(_e(x,"click",(e=>this._onClick(e||(null==m?void 0:m.event))),{capture:!0}),_e(x,"mousemove",(e=>this._onMouseMove(e||(null==m?void 0:m.event))),{capture:!0}),this.deadClicksCapture=new Uo(this.instance,Ho,this._onDeadClick.bind(this)),this.deadClicksCapture.startIfEnabled(),this._initialized=!0)}_getProperties(e,t){var n=this.instance.scrollManager.scrollY(),i=this.instance.scrollManager.scrollX(),r=this.instance.scrollManager.scrollElement(),o=function(e,t,n){for(var i=e;i&&Dn(i)&&!Bn(i,"body");){if(i===n)return!1
if(F(t,null==m?void 0:m.getComputedStyle(i).position))return!0
i=Kn(i)}return!1}(Qn(e),["fixed","sticky"],r)
return{x:e.clientX+(o?0:i),y:e.clientY+(o?0:n),target_fixed:o,type:t}}_onClick(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"click"
if(!jn(e.target)&&Wo(e)){var i=this._getProperties(e,n)
null!==(t=this.rageclicks)&&void 0!==t&&t.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._capture(h(h({},i),{},{type:"rageclick"})),this._capture(i)}}_onMouseMove(e){!jn(e.target)&&Wo(e)&&(clearTimeout(this._mouseMoveTimeout),this._mouseMoveTimeout=setTimeout((()=>{this._capture(this._getProperties(e,"mousemove"))}),500))}_capture(e){if(m){var t=m.location.href
this.buffer=this.buffer||{},this.buffer[t]||(this.buffer[t]=[]),this.buffer[t].push(e)}}flush(){this.buffer&&!W(this.buffer)&&this.instance.capture("$$heatmap",{$heatmap_data:this.getAndClearBuffer()})}}class Vo{constructor(e){p(this,"_updateScrollData",(()=>{var e,t,n,i
this.context||(this.context={})
var r=this.scrollElement(),o=this.scrollY(),s=r?Math.max(0,r.scrollHeight-r.clientHeight):0,a=o+((null==r?void 0:r.clientHeight)||0),l=(null==r?void 0:r.scrollHeight)||0
this.context.lastScrollY=Math.ceil(o),this.context.maxScrollY=Math.max(o,null!==(e=this.context.maxScrollY)&&void 0!==e?e:0),this.context.maxScrollHeight=Math.max(s,null!==(t=this.context.maxScrollHeight)&&void 0!==t?t:0),this.context.lastContentY=a,this.context.maxContentY=Math.max(a,null!==(n=this.context.maxContentY)&&void 0!==n?n:0),this.context.maxContentHeight=Math.max(l,null!==(i=this.context.maxContentHeight)&&void 0!==i?i:0)})),this.instance=e}getContext(){return this.context}resetContext(){var e=this.context
return setTimeout(this._updateScrollData,0),e}startMeasuringScrollPosition(){_e(m,"scroll",this._updateScrollData,{capture:!0}),_e(m,"scrollend",this._updateScrollData,{capture:!0}),_e(m,"resize",this._updateScrollData)}scrollElement(){if(!this.instance.config.scroll_root_selector)return null==m?void 0:m.document.documentElement
var e=q(this.instance.config.scroll_root_selector)?this.instance.config.scroll_root_selector:[this.instance.config.scroll_root_selector]
for(var t of e){var n=null==m?void 0:m.document.querySelector(t)
if(n)return n}}scrollY(){if(this.instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollTop||0}return m&&(m.scrollY||m.pageYOffset||m.document.documentElement.scrollTop)||0}scrollX(){if(this.instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollLeft||0}return m&&(m.scrollX||m.pageXOffset||m.document.documentElement.scrollLeft)||0}}var Qo=ie("[AutoCapture]")
function Jo(e,t){return t.length>e?t.slice(0,e)+"...":t}function Ko(e){if(e.previousElementSibling)return e.previousElementSibling
var t=e
do{t=t.previousSibling}while(t&&!Dn(t))
return t}function Xo(e,t){for(var n,i,{e:r,maskAllElementAttributes:o,maskAllText:s,elementAttributeIgnoreList:a,elementsChainAsString:l}=t,c=[e],u=e;u.parentNode&&!Bn(u,"body");)qn(u.parentNode)?(c.push(u.parentNode.host),u=u.parentNode.host):(c.push(u.parentNode),u=u.parentNode)
var d,f=[],h={},p=!1,g=!1
if(se(c,(e=>{var t=Xn(e)
"a"===e.tagName.toLowerCase()&&(p=e.getAttribute("href"),p=t&&p&&oi(p)&&p),F(Wn(e),"ph-no-capture")&&(g=!0),f.push(function(e,t,n,i){var r=e.tagName.toLowerCase(),o={tag_name:r}
Jn.indexOf(r)>-1&&!n&&("a"===r.toLowerCase()||"button"===r.toLowerCase()?o.$el_text=Jo(1024,si(e)):o.$el_text=Jo(1024,Vn(e)))
var s=Wn(e)
s.length>0&&(o.classes=s.filter((function(e){return""!==e}))),se(e.attributes,(function(n){var r
if((!Yn(e)||-1!==["name","id","class","aria-label"].indexOf(n.name))&&(null==i||!i.includes(n.name))&&!t&&oi(n.value)&&(r=n.name,!V(r)||"_ngcontent"!==r.substring(0,10)&&"_nghost"!==r.substring(0,7))){var s=n.value
"class"===n.name&&(s=Un(s).join(" ")),o["attr__"+n.name]=Jo(1024,s)}}))
for(var a=1,l=1,c=e;c=Ko(c);)a++,c.tagName===e.tagName&&l++
return o.nth_child=a,o.nth_of_type=l,o}(e,o,s,a))
var n=function(e){if(!Xn(e))return{}
var t={}
return se(e.attributes,(function(e){if(e.name&&0===e.name.indexOf("data-ph-capture-attribute")){var n=e.name.replace("data-ph-capture-attribute-",""),i=e.value
n&&i&&oi(i)&&(t[n]=i)}})),t}(e)
ae(h,n)})),g)return{props:{},explicitNoCapture:g}
if(s||("a"===e.tagName.toLowerCase()||"button"===e.tagName.toLowerCase()?f[0].$el_text=si(e):f[0].$el_text=Vn(e)),p){var v,_
f[0].attr__href=p
var b=null===(v=Pt(p))||void 0===v?void 0:v.host,y=null==m||null===(_=m.location)||void 0===_?void 0:_.host
b&&y&&b!==y&&(d=p)}return{props:ae({$event_type:r.type,$ce_version:1},l?{}:{$elements:f},{$elements_chain:li(f)},null!==(n=f[0])&&void 0!==n&&n.$el_text?{$el_text:null===(i=f[0])||void 0===i?void 0:i.$el_text}:{},d&&"click"===r.type?{$external_click_url:d}:{},h)}}class Yo{constructor(e){p(this,"_initialized",!1),p(this,"_isDisabledServerSide",null),p(this,"rageclicks",new Do),p(this,"_elementsChainAsString",!1),this.instance=e,this._elementSelectors=null}get config(){var e,t,n=G(this.instance.config.autocapture)?this.instance.config.autocapture:{}
return n.url_allowlist=null===(e=n.url_allowlist)||void 0===e?void 0:e.map((e=>new RegExp(e))),n.url_ignorelist=null===(t=n.url_ignorelist)||void 0===t?void 0:t.map((e=>new RegExp(e))),n}_addDomEventHandlers(){if(this.isBrowserSupported()){if(m&&x){var e=e=>{e=e||(null==m?void 0:m.event)
try{this._captureEvent(e)}catch(e){Qo.error("Failed to capture event",e)}}
if(_e(x,"submit",e,{capture:!0}),_e(x,"change",e,{capture:!0}),_e(x,"click",e,{capture:!0}),this.config.capture_copied_text){var t=e=>{e=e||(null==m?void 0:m.event),this._captureEvent(e,R)}
_e(x,"copy",t,{capture:!0}),_e(x,"cut",t,{capture:!0})}}}else Qo.info("Disabling Automatic Event Collection because this browser is not supported")}startIfEnabled(){this.isEnabled&&!this._initialized&&(this._addDomEventHandlers(),this._initialized=!0)}onRemoteConfig(e){e.elementsChainAsString&&(this._elementsChainAsString=e.elementsChainAsString),this.instance.persistence&&this.instance.persistence.register({[we]:!!e.autocapture_opt_out}),this._isDisabledServerSide=!!e.autocapture_opt_out,this.startIfEnabled()}setElementSelectors(e){this._elementSelectors=e}getElementSelectors(e){var t,n=[]
return null===(t=this._elementSelectors)||void 0===t||t.forEach((t=>{var i=null==x?void 0:x.querySelectorAll(t)
null==i||i.forEach((i=>{e===i&&n.push(t)}))})),n}get isEnabled(){var e,t,n=null===(e=this.instance.persistence)||void 0===e?void 0:e.props[we],i=this._isDisabledServerSide
if(J(i)&&!Y(n)&&!this.instance.config.advanced_disable_decide)return!1
var r=null!==(t=this._isDisabledServerSide)&&void 0!==t?t:!!n
return!!this.instance.config.autocapture&&!r}_captureEvent(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$autocapture"
if(this.isEnabled){var n,i=Qn(e)
Hn(i)&&(i=i.parentNode||null),"$autocapture"===t&&"click"===e.type&&e instanceof MouseEvent&&this.instance.config.rageclick&&null!==(n=this.rageclicks)&&void 0!==n&&n.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._captureEvent(e,"$rageclick")
var r=t===R
if(i&&function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0
if(!m||!e||Bn(e,"html")||!Dn(e))return!1
if(null!=n&&n.url_allowlist&&!Gn(n.url_allowlist))return!1
if(null!=n&&n.url_ignorelist&&Gn(n.url_ignorelist))return!1
if(null!=n&&n.dom_event_allowlist){var o=n.dom_event_allowlist
if(o&&!o.some((e=>t.type===e)))return!1}for(var s=!1,a=[e],l=!0,c=e;c.parentNode&&!Bn(c,"body");)if(qn(c.parentNode))a.push(c.parentNode.host),c=c.parentNode.host
else{if(!(l=Kn(c)))break
if(i||Jn.indexOf(l.tagName.toLowerCase())>-1)s=!0
else{var u=m.getComputedStyle(l)
u&&"pointer"===u.getPropertyValue("cursor")&&(s=!0)}a.push(l),c=l}if(!function(e,t){var n=null==t?void 0:t.element_allowlist
if(z(n))return!0
var i=function(e){if(n.some((t=>e.tagName.toLowerCase()===t)))return{v:!0}}
for(var r of e){var o=i(r)
if("object"==typeof o)return o.v}return!1}(a,n))return!1
if(!function(e,t){var n=null==t?void 0:t.css_selector_allowlist
if(z(n))return!0
var i=function(e){if(n.some((t=>e.matches(t))))return{v:!0}}
for(var r of e){var o=i(r)
if("object"==typeof o)return o.v}return!1}(a,n))return!1
var d=m.getComputedStyle(e)
if(d&&"pointer"===d.getPropertyValue("cursor")&&"click"===t.type)return!0
var f=e.tagName.toLowerCase()
switch(f){case"html":return!1
case"form":return(r||["submit"]).indexOf(t.type)>=0
case"input":case"select":case"textarea":return(r||["change","click"]).indexOf(t.type)>=0
default:return s?(r||["click"]).indexOf(t.type)>=0:(r||["click"]).indexOf(t.type)>=0&&(Jn.indexOf(f)>-1||"true"===e.getAttribute("contenteditable"))}}(i,e,this.config,r,r?["copy","cut"]:void 0)){var{props:o,explicitNoCapture:s}=Xo(i,{e:e,maskAllElementAttributes:this.instance.config.mask_all_element_attributes,maskAllText:this.instance.config.mask_all_text,elementAttributeIgnoreList:this.config.element_attribute_ignorelist,elementsChainAsString:this._elementsChainAsString})
if(s)return!1
var a=this.getElementSelectors(i)
if(a&&a.length>0&&(o.$element_selectors=a),t===R){var l,c=zn(null==m||null===(l=m.getSelection())||void 0===l?void 0:l.toString()),u=e.type||"clipboard"
if(!c)return!1
o.$selected_content=c,o.$copy_type=u}return this.instance.capture(t,o),!0}}}isBrowserSupported(){return U(null==x?void 0:x.querySelectorAll)}}var Zo,es=ie("[TracingHeaders]")
class ts{constructor(e){p(this,"_restoreXHRPatch",void 0),p(this,"_restoreFetchPatch",void 0),p(this,"_startCapturing",(()=>{var e,t,n,i
z(this._restoreXHRPatch)&&(null===(e=I.__PosthogExtensions__)||void 0===e||null===(t=e.tracingHeadersPatchFns)||void 0===t||t._patchXHR(this.instance.sessionManager)),z(this._restoreFetchPatch)&&(null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.tracingHeadersPatchFns)||void 0===i||i._patchFetch(this.instance.sessionManager))})),this.instance=e}_loadScript(e){var t,n,i
null!==(t=I.__PosthogExtensions__)&&void 0!==t&&t.tracingHeadersPatchFns&&e(),null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"tracing-headers",(t=>{if(t)return es.error("failed to load script",t)
e()}))}startIfEnabledOrStop(){var e,t
this.instance.config.__add_tracing_headers?this._loadScript(this._startCapturing):(null===(e=this._restoreXHRPatch)||void 0===e||e.call(this),null===(t=this._restoreFetchPatch)||void 0===t||t.call(this),this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0)}}!function(e){e[e.PENDING=-1]="PENDING",e[e.DENIED=0]="DENIED",e[e.GRANTED=1]="GRANTED"}(Zo||(Zo={}))
class ns{constructor(e){this.instance=e}get config(){return this.instance.config}get consent(){return this.getDnt()?Zo.DENIED:this.storedConsent}isOptedOut(){return this.consent===Zo.DENIED||this.consent===Zo.PENDING&&this.config.opt_out_capturing_by_default}isOptedIn(){return!this.isOptedOut()}optInOut(e){this.storage.set(this.storageKey,e?1:0,this.config.cookie_expiration,this.config.cross_subdomain_cookie,this.config.secure_cookie)}reset(){this.storage.remove(this.storageKey,this.config.cross_subdomain_cookie)}get storageKey(){var{token:e,opt_out_capturing_cookie_prefix:t}=this.instance.config
return(t||"__ph_opt_in_out_")+e}get storedConsent(){var e=this.storage.get(this.storageKey)
return"1"===e?Zo.GRANTED:"0"===e?Zo.DENIED:Zo.PENDING}get storage(){if(!this._storage){var e=this.config.opt_out_capturing_persistence_type
this._storage="localStorage"===e?yt:mt
var t="localStorage"===e?mt:yt
t.get(this.storageKey)&&(this._storage.get(this.storageKey)||this.optInOut("1"===t.get(this.storageKey)),t.remove(this.storageKey,this.config.cross_subdomain_cookie))}return this._storage}getDnt(){return!!this.config.respect_dnt&&!!ve([null==S?void 0:S.doNotTrack,null==S?void 0:S.msDoNotTrack,I.doNotTrack],(e=>F([!0,1,"1","yes"],e)))}}var is=ie("[ExceptionAutocapture]")
class rs{constructor(e){var t
p(this,"originalOnUnhandledRejectionHandler",void 0),p(this,"startCapturing",(()=>{var e,t,n,i
if(m&&this.isEnabled&&!this.hasHandlers&&!this.isCapturing){var r=null===(e=I.__PosthogExtensions__)||void 0===e||null===(t=e.errorWrappingFunctions)||void 0===t?void 0:t.wrapOnError,o=null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.errorWrappingFunctions)||void 0===i?void 0:i.wrapUnhandledRejection
if(r&&o)try{this.unwrapOnError=r(this.captureException.bind(this)),this.unwrapUnhandledRejection=o(this.captureException.bind(this))}catch(e){is.error("failed to start",e),this.stopCapturing()}else is.error("failed to load error wrapping functions - cannot start")}})),this.instance=e,this.remoteEnabled=!(null===(t=this.instance.persistence)||void 0===t||!t.props[Se]),this.startIfEnabled()}get isEnabled(){var e
return null!==(e=this.remoteEnabled)&&void 0!==e&&e}get isCapturing(){var e
return!(null==m||null===(e=m.onerror)||void 0===e||!e.__POSTHOG_INSTRUMENTED__)}get hasHandlers(){return this.originalOnUnhandledRejectionHandler||this.unwrapOnError}startIfEnabled(){this.isEnabled&&!this.isCapturing&&(is.info("enabled, starting..."),this.loadScript(this.startCapturing))}loadScript(e){var t,n
this.hasHandlers&&e(),null===(t=I.__PosthogExtensions__)||void 0===t||null===(n=t.loadExternalDependency)||void 0===n||n.call(t,this.instance,"exception-autocapture",(t=>{if(t)return is.error("failed to load script",t)
e()}))}stopCapturing(){var e,t
null===(e=this.unwrapOnError)||void 0===e||e.call(this),null===(t=this.unwrapUnhandledRejection)||void 0===t||t.call(this)}onRemoteConfig(e){var t=e.autocaptureExceptions
this.remoteEnabled=!!t||!1,this.instance.persistence&&this.instance.persistence.register({[Se]:this.remoteEnabled}),this.startIfEnabled()}captureException(e){var t=this.instance.requestRouter.endpointFor("ui")
e.$exception_personURL="".concat(t,"/project/").concat(this.instance.config.token,"/person/").concat(this.instance.get_distinct_id()),this.instance.exceptions.sendExceptionEvent(e)}}var os=ie("[Web Vitals]"),ss=9e5
class as{constructor(e){var t
p(this,"_enabledServerSide",!1),p(this,"_initialized",!1),p(this,"buffer",{url:void 0,metrics:[],firstMetricTimestamp:void 0}),p(this,"_flushToCapture",(()=>{clearTimeout(this._delayedFlushTimer),0!==this.buffer.metrics.length&&(this.instance.capture("$web_vitals",this.buffer.metrics.reduce(((e,t)=>h(h({},e),{},{["$web_vitals_".concat(t.name,"_event")]:h({},t),["$web_vitals_".concat(t.name,"_value")]:t.value})),{})),this.buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0})})),p(this,"_addToBuffer",(e=>{var t,n=null===(t=this.instance.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0)
if(z(n))os.error("Could not read session ID. Dropping metrics!")
else{this.buffer=this.buffer||{url:void 0,metrics:[],firstMetricTimestamp:void 0}
var i=this._currentURL()
z(i)||(K(null==e?void 0:e.name)||K(null==e?void 0:e.value)?os.error("Invalid metric received",e):this._maxAllowedValue&&e.value>=this._maxAllowedValue?os.error("Ignoring metric with value >= "+this._maxAllowedValue,e):(this.buffer.url!==i&&(this._flushToCapture(),this._delayedFlushTimer=setTimeout(this._flushToCapture,this.flushToCaptureTimeoutMs)),z(this.buffer.url)&&(this.buffer.url=i),this.buffer.firstMetricTimestamp=z(this.buffer.firstMetricTimestamp)?Date.now():this.buffer.firstMetricTimestamp,e.attribution&&e.attribution.interactionTargetElement&&(e.attribution.interactionTargetElement=void 0),this.buffer.metrics.push(h(h({},e),{},{$current_url:i,$session_id:n.sessionId,$window_id:n.windowId,timestamp:Date.now()})),this.buffer.metrics.length===this.allowedMetrics.length&&this._flushToCapture()))}})),p(this,"_startCapturing",(()=>{var e,t,n,i,r=I.__PosthogExtensions__
z(r)||z(r.postHogWebVitalsCallbacks)||({onLCP:e,onCLS:t,onFCP:n,onINP:i}=r.postHogWebVitalsCallbacks),e&&t&&n&&i?(this.allowedMetrics.indexOf("LCP")>-1&&e(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("CLS")>-1&&t(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("FCP")>-1&&n(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("INP")>-1&&i(this._addToBuffer.bind(this)),this._initialized=!0):os.error("web vitals callbacks not loaded - not starting")})),this.instance=e,this._enabledServerSide=!(null===(t=this.instance.persistence)||void 0===t||!t.props[xe]),this.startIfEnabled()}get allowedMetrics(){var e,t,n=G(this.instance.config.capture_performance)?null===(e=this.instance.config.capture_performance)||void 0===e?void 0:e.web_vitals_allowed_metrics:void 0
return z(n)?(null===(t=this.instance.persistence)||void 0===t?void 0:t.props[$e])||["CLS","FCP","INP","LCP"]:n}get flushToCaptureTimeoutMs(){return(G(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals_delayed_flush_ms:void 0)||5e3}get _maxAllowedValue(){var e=G(this.instance.config.capture_performance)&&X(this.instance.config.capture_performance.__web_vitals_max_value)?this.instance.config.capture_performance.__web_vitals_max_value:ss
return 0<e&&e<=6e4?ss:e}get isEnabled(){var e=G(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals:void 0
return Y(e)?e:this._enabledServerSide}startIfEnabled(){this.isEnabled&&!this._initialized&&(os.info("enabled, starting..."),this.loadScript(this._startCapturing))}onRemoteConfig(e){var t=G(e.capturePerformance)&&!!e.capturePerformance.web_vitals,n=G(e.capturePerformance)?e.capturePerformance.web_vitals_allowed_metrics:void 0
this.instance.persistence&&(this.instance.persistence.register({[xe]:t}),this.instance.persistence.register({[$e]:n})),this._enabledServerSide=t,this.startIfEnabled()}loadScript(e){var t,n,i
null!==(t=I.__PosthogExtensions__)&&void 0!==t&&t.postHogWebVitalsCallbacks&&e(),null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"web-vitals",(t=>{t?os.error("failed to load script",t):e()}))}_currentURL(){var e=m?m.location.href:void 0
return e||os.error("Could not determine current URL"),e}}var ls={icontains:(e,t)=>!!m&&t.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:(e,t)=>!!m&&-1===t.href.toLowerCase().indexOf(e.toLowerCase()),regex:(e,t)=>!!m&&N(t.href,e),not_regex:(e,t)=>!!m&&!N(t.href,e),exact:(e,t)=>t.href===e,is_not:(e,t)=>t.href!==e}
class cs{constructor(e){var t=this
p(this,"getWebExperimentsAndEvaluateDisplayLogic",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
t.getWebExperiments((e=>{cs.logInfo("retrieved web experiments from the server"),t._flagToExperiments=new Map,e.forEach((e=>{if(e.feature_flag_key){var n
t._flagToExperiments&&(cs.logInfo("setting flag key ",e.feature_flag_key," to web experiment ",e),null===(n=t._flagToExperiments)||void 0===n||n.set(e.feature_flag_key,e))
var i=t.instance.getFeatureFlag(e.feature_flag_key)
V(i)&&e.variants[i]&&t.applyTransforms(e.name,i,e.variants[i].transforms)}else if(e.variants)for(var r in e.variants){var o=e.variants[r]
cs.matchesTestVariant(o)&&t.applyTransforms(e.name,r,o.transforms)}}))}),e)})),this.instance=e,this.instance.onFeatureFlags((e=>{this.onFeatureFlags(e)}))}onFeatureFlags(e){if(this._is_bot())cs.logInfo("Refusing to render web experiment since the viewer is a likely bot")
else if(!this.instance.config.disable_web_experiments){if(K(this._flagToExperiments))return this._flagToExperiments=new Map,this.loadIfEnabled(),void this.previewWebExperiment()
cs.logInfo("applying feature flags",e),e.forEach((e=>{var t
if(this._flagToExperiments&&null!==(t=this._flagToExperiments)&&void 0!==t&&t.has(e)){var n,i=this.instance.getFeatureFlag(e),r=null===(n=this._flagToExperiments)||void 0===n?void 0:n.get(e)
i&&null!=r&&r.variants[i]&&this.applyTransforms(r.name,i,r.variants[i].transforms)}}))}}previewWebExperiment(){var e=cs.getWindowLocation()
if(null!=e&&e.search){var t=Tt(null==e?void 0:e.search,"__experiment_id"),n=Tt(null==e?void 0:e.search,"__experiment_variant")
t&&n&&(cs.logInfo("previewing web experiments ".concat(t," && ").concat(n)),this.getWebExperiments((e=>{this.showPreviewWebExperiment(parseInt(t),n,e)}),!1,!0))}}loadIfEnabled(){this.instance.config.disable_web_experiments||this.getWebExperimentsAndEvaluateDisplayLogic()}getWebExperiments(e,t,n){if(this.instance.config.disable_web_experiments&&!n)return e([])
var i=this.instance.get_property("$web_experiments")
if(i&&!t)return e(i)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api","/api/web_experiments/?token=".concat(this.instance.config.token)),method:"GET",callback:t=>{if(200!==t.statusCode||!t.json)return e([])
var n=t.json.experiments||[]
return e(n)}})}showPreviewWebExperiment(e,t,n){var i=n.filter((t=>t.id===e))
i&&i.length>0&&(cs.logInfo("Previewing web experiment [".concat(i[0].name,"] with variant [").concat(t,"]")),this.applyTransforms(i[0].name,t,i[0].variants[t].transforms))}static matchesTestVariant(e){return!K(e.conditions)&&cs.matchUrlConditions(e)&&cs.matchUTMConditions(e)}static matchUrlConditions(e){var t
if(K(e.conditions)||K(null===(t=e.conditions)||void 0===t?void 0:t.url))return!0
var n,i,r,o=cs.getWindowLocation()
return!!o&&(null===(n=e.conditions)||void 0===n||!n.url||ls[null!==(i=null===(r=e.conditions)||void 0===r?void 0:r.urlMatchType)&&void 0!==i?i:"icontains"](e.conditions.url,o))}static getWindowLocation(){return null==m?void 0:m.location}static matchUTMConditions(e){var t
if(K(e.conditions)||K(null===(t=e.conditions)||void 0===t?void 0:t.utm))return!0
var n=In.campaignParams()
if(n.utm_source){var i,r,o,s,a,l,c,u,d,f,h,p,g,v,_,m,b=null===(i=e.conditions)||void 0===i||null===(r=i.utm)||void 0===r||!r.utm_campaign||(null===(o=e.conditions)||void 0===o||null===(s=o.utm)||void 0===s?void 0:s.utm_campaign)==n.utm_campaign,y=null===(a=e.conditions)||void 0===a||null===(l=a.utm)||void 0===l||!l.utm_source||(null===(c=e.conditions)||void 0===c||null===(u=c.utm)||void 0===u?void 0:u.utm_source)==n.utm_source,w=null===(d=e.conditions)||void 0===d||null===(f=d.utm)||void 0===f||!f.utm_medium||(null===(h=e.conditions)||void 0===h||null===(p=h.utm)||void 0===p?void 0:p.utm_medium)==n.utm_medium,k=null===(g=e.conditions)||void 0===g||null===(v=g.utm)||void 0===v||!v.utm_term||(null===(_=e.conditions)||void 0===_||null===(m=_.utm)||void 0===m?void 0:m.utm_term)==n.utm_term
return b&&w&&k&&y}return!1}static logInfo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
ne.info("[WebExperiments] ".concat(e),n)}applyTransforms(e,t,n){this._is_bot()?cs.logInfo("Refusing to render web experiment since the viewer is a likely bot"):"control"!==t?n.forEach((n=>{if(n.selector){var i
cs.logInfo("applying transform of variant ".concat(t," for experiment ").concat(e," "),n)
var r=null===(i=document)||void 0===i?void 0:i.querySelectorAll(n.selector)
null==r||r.forEach((e=>{var t=e
n.attributes&&n.attributes.forEach((e=>{switch(e.name){case"text":t.innerText=e.value
break
case"html":t.innerHTML=e.value
break
case"cssClass":t.className=e.value
break
default:t.setAttribute(e.name,e.value)}})),n.text&&(t.innerText=n.text),n.html&&(t.parentElement?t.parentElement.innerHTML=n.html:t.innerHTML=n.html),n.css&&t.setAttribute("style",n.css)}))}})):cs.logInfo("Control variants leave the page unmodified.")}_is_bot(){return S&&this.instance?jo(S,this.instance.config.custom_blocked_useragents):void 0}}class us{constructor(e){this.instance=e}sendExceptionEvent(e){this.instance.capture("$exception",e,{_noTruncate:!0,_batchKey:"exceptionEvent"})}}var ds=["$set_once","$set"],fs=ie("[SiteApps]")
class hs{constructor(e){this.instance=e,this.bufferedInvocations=[],this.apps={}}get isEnabled(){return!!this.instance.config.opt_in_site_apps}eventCollector(e,t){if(t){var n=this.globalsForEvent(t)
this.bufferedInvocations.push(n),this.bufferedInvocations.length>1e3&&(this.bufferedInvocations=this.bufferedInvocations.slice(10))}}get siteAppLoaders(){var e,t
return null===(e=I._POSTHOG_REMOTE_CONFIG)||void 0===e||null===(t=e[this.instance.config.token])||void 0===t?void 0:t.siteApps}init(){if(this.isEnabled){var e=this.instance._addCaptureHook(this.eventCollector.bind(this))
this.stopBuffering=()=>{e(),this.bufferedInvocations=[],this.stopBuffering=void 0}}}globalsForEvent(e){var t,n,i,r,o,s,a
if(!e)throw new Error("Event payload is required")
var l={},c=this.instance.get_property("$groups")||[],u=this.instance.get_property("$stored_group_properties")||{}
for(var[d,f]of Object.entries(u))l[d]={id:c[d],type:d,properties:f}
var{$set_once:p,$set:v}=e
return{event:h(h({},g(e,ds)),{},{properties:h(h(h({},e.properties),v?{$set:h(h({},null!==(t=null===(n=e.properties)||void 0===n?void 0:n.$set)&&void 0!==t?t:{}),v)}:{}),p?{$set_once:h(h({},null!==(i=null===(r=e.properties)||void 0===r?void 0:r.$set_once)&&void 0!==i?i:{}),p)}:{}),elements_chain:null!==(o=null===(s=e.properties)||void 0===s?void 0:s.$elements_chain)&&void 0!==o?o:"",distinct_id:null===(a=e.properties)||void 0===a?void 0:a.distinct_id}),person:{properties:this.instance.get_property("$stored_person_properties")},groups:l}}setupSiteApp(e){var t={id:e.id,loaded:!1,errored:!1}
this.apps[e.id]=t
var n=n=>{var i
for(var r of(this.apps[e.id].errored=!n,this.apps[e.id].loaded=!0,fs.info("Site app with id ".concat(e.id," ").concat(n?"loaded":"errored")),n&&this.bufferedInvocations.length&&(fs.info("Processing ".concat(this.bufferedInvocations.length," events for site app with id ").concat(e.id)),this.bufferedInvocations.forEach((e=>{var n
return null===(n=t.processEvent)||void 0===n?void 0:n.call(t,e)}))),Object.values(this.apps)))if(!r.loaded)return
null===(i=this.stopBuffering)||void 0===i||i.call(this)}
try{var{processEvent:i}=e.init({posthog:this.instance,callback:e=>{n(e)}})
i&&(t.processEvent=i)}catch(t){fs.error("Error while initializing PostHog app with config id ".concat(e.id),t),n(!1)}}onCapturedEvent(e){if(0!==Object.keys(this.apps).length){var t=this.globalsForEvent(e)
for(var n of Object.values(this.apps))try{var i
null===(i=n.processEvent)||void 0===i||i.call(n,t)}catch(t){fs.error("Error while processing event ".concat(e.event," for site app ").concat(n.id),t)}}}onRemoteConfig(e){var t,n,i,r=this
if(null!==(t=this.siteAppLoaders)&&void 0!==t&&t.length){if(!this.isEnabled)return void fs.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
for(var o of this.siteAppLoaders)this.setupSiteApp(o)
this.instance.on("eventCaptured",(e=>this.onCapturedEvent(e)))}else if(null===(n=this.stopBuffering)||void 0===n||n.call(this),null!==(i=e.siteApps)&&void 0!==i&&i.length)if(this.isEnabled){var s=function(e,t){var n,i
I["__$$ph_site_app_".concat(e)]=r.instance,null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.loadSiteApp)||void 0===i||i.call(n,r.instance,t,(t=>{if(t)return fs.error("Error while initializing PostHog app with config id ".concat(e),t)}))}
for(var{id:a,url:l}of e.siteApps)s(a,l)}else fs.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')}}function ps(e,t,n){return $r({distinct_id:e,userPropertiesToSet:t,userPropertiesToSetOnce:n})}var gs={},vs=()=>{},_s="posthog",ms=!Sr&&-1===(null==L?void 0:L.indexOf("MSIE"))&&-1===(null==L?void 0:L.indexOf("Mozilla")),bs=()=>{var e
return{api_host:"https://us.i.posthog.com",ui_host:null,token:"",autocapture:!0,rageclick:!0,cross_subdomain_cookie:ge(null==x?void 0:x.location),persistence:"localStorage+cookie",persistence_name:"",loaded:vs,save_campaign_params:!0,custom_campaign_params:[],custom_blocked_useragents:[],save_referrer:!0,capture_pageview:!0,capture_pageleave:"if_capture_pageview",debug:E&&V(null==E?void 0:E.search)&&-1!==E.search.indexOf("__posthog_debug=true")||!1,cookie_expiration:365,upgrade:!1,disable_session_recording:!1,disable_persistence:!1,disable_web_experiments:!0,disable_surveys:!1,disable_external_dependency_loading:!1,enable_recording_console_log:void 0,secure_cookie:"https:"===(null==m||null===(e=m.location)||void 0===e?void 0:e.protocol),ip:!0,opt_out_capturing_by_default:!1,opt_out_persistence_by_default:!1,opt_out_useragent_filter:!1,opt_out_capturing_persistence_type:"localStorage",opt_out_capturing_cookie_prefix:null,opt_in_site_apps:!1,property_denylist:[],respect_dnt:!1,sanitize_properties:null,request_headers:{},request_batching:!0,properties_string_max_length:65535,session_recording:{},mask_all_element_attributes:!1,mask_all_text:!1,mask_personal_data_properties:!1,custom_personal_data_properties:[],advanced_disable_decide:!1,advanced_disable_feature_flags:!1,advanced_disable_feature_flags_on_first_load:!1,advanced_disable_toolbar_metrics:!1,feature_flag_request_timeout_ms:3e3,on_request_error:e=>{var t="Bad HTTP status: "+e.statusCode+" "+e.text
ne.error(t)},get_device_id:e=>e,capture_performance:void 0,name:"posthog",bootstrap:{},disable_compression:!1,session_idle_timeout_seconds:1800,person_profiles:"identified_only",before_send:void 0,request_queue_config:{flush_interval_ms:wr},_onCapture:vs}},ys=e=>{var t={}
z(e.process_person)||(t.person_profiles=e.process_person),z(e.xhr_headers)||(t.request_headers=e.xhr_headers),z(e.cookie_name)||(t.persistence_name=e.cookie_name),z(e.disable_cookie)||(t.disable_persistence=e.disable_cookie),z(e.store_google)||(t.save_campaign_params=e.store_google),z(e.verbose)||(t.debug=e.verbose)
var n=ae({},t,e)
return q(e.property_blacklist)&&(z(e.property_denylist)?n.property_denylist=e.property_blacklist:q(e.property_denylist)?n.property_denylist=[...e.property_blacklist,...e.property_denylist]:ne.error("Invalid value for property_denylist config: "+e.property_denylist)),n}
class ws{constructor(){p(this,"__forceAllowLocalhost",!1)}get _forceAllowLocalhost(){return this.__forceAllowLocalhost}set _forceAllowLocalhost(e){ne.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),this.__forceAllowLocalhost=e}}class ks{get decideEndpointWasHit(){var e,t
return null!==(e=null===(t=this.featureFlags)||void 0===t?void 0:t.hasLoadedFlags)&&void 0!==e&&e}constructor(){p(this,"webPerformance",new ws),p(this,"version",_.LIB_VERSION),p(this,"_internalEventEmitter",new xo),this.config=bs(),this.SentryIntegration=jr,this.sentryIntegration=e=>function(e,t){var n=Nr(e,t)
return{name:Ar,processEvent:e=>n(e)}}(this,e),this.__request_queue=[],this.__loaded=!1,this.analyticsDefaultEndpoint="/e/",this._initialPageviewCaptured=!1,this._initialPersonProfilesConfig=null,this._cachedIdentify=null,this.featureFlags=new at(this),this.toolbar=new yr(this),this.scrollManager=new Vo(this),this.pageViewManager=new Br(this),this.surveys=new Io(this),this.experiments=new cs(this),this.exceptions=new us(this),this.rateLimiter=new Oo(this),this.requestRouter=new Mr(this),this.consent=new ns(this),this.people={set:(e,t,n)=>{var i=V(e)?{[e]:t}:e
this.setPersonProperties(i),null==n||n({})},set_once:(e,t,n)=>{var i=V(e)?{[e]:t}:e
this.setPersonProperties(void 0,i),null==n||n({})}},this.on("eventCaptured",(e=>ne.info('send "'.concat(null==e?void 0:e.event,'"'),e)))}init(e,t,n){if(n&&n!==_s){var i,r=null!==(i=gs[n])&&void 0!==i?i:new ks
return r._init(e,t,n),gs[n]=r,gs[_s][n]=r,r}return this._init(e,t,n)}_init(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0
if(z(e)||Q(e))return ne.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),this
if(this.__loaded)return ne.warn("You have already initialized PostHog! Re-initializing is a no-op"),this
this.__loaded=!0,this.config={},this._triggered_notifs=[],i.person_profiles&&(this._initialPersonProfilesConfig=i.person_profiles),this.set_config(ae({},bs(),ys(i),{name:r,token:e})),this.config.on_xhr_error&&ne.error("on_xhr_error is deprecated. Use on_request_error instead"),this.compression=i.disable_compression?void 0:v.GZipJS,this.persistence=new On(this.config),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new On(h(h({},this.config),{},{persistence:"sessionStorage"}))
var o=h({},this.persistence.props),s=h({},this.sessionPersistence.props)
if(this._requestQueue=new kr((e=>this._send_retriable_request(e)),this.config.request_queue_config),this._retryQueue=new Lr(this),this.__request_queue=[],this.config.__preview_experimental_cookieless_mode||(this.sessionManager=new Or(this),this.sessionPropsManager=new Mo(this,this.sessionManager,this.persistence)),new ts(this).startIfEnabledOrStop(),this.siteApps=new hs(this),null===(t=this.siteApps)||void 0===t||t.init(),this.config.__preview_experimental_cookieless_mode||(this.sessionRecording=new hr(this),this.sessionRecording.startIfEnabledOrStop()),this.config.disable_scroll_properties||this.scrollManager.startMeasuringScrollPosition(),this.autocapture=new Yo(this),this.autocapture.startIfEnabled(),this.surveys.loadIfEnabled(),this.heatmaps=new zo(this),this.heatmaps.startIfEnabled(),this.webVitalsAutocapture=new as(this),this.exceptionObserver=new rs(this),this.exceptionObserver.startIfEnabled(),this.deadClicksAutocapture=new Uo(this,qo),this.deadClicksAutocapture.startIfEnabled(),_.DEBUG=_.DEBUG||this.config.debug,_.DEBUG&&ne.info("Starting in debug mode",{this:this,config:i,thisC:h({},this.config),p:o,s:s}),this._sync_opt_out_with_persistence(),void 0!==(null===(n=i.bootstrap)||void 0===n?void 0:n.distinctID)){var a,l,c=this.config.get_device_id(pt()),u=null!==(a=i.bootstrap)&&void 0!==a&&a.isIdentifiedID?c:i.bootstrap.distinctID
this.persistence.set_property(We,null!==(l=i.bootstrap)&&void 0!==l&&l.isIdentifiedID?"identified":"anonymous"),this.register({distinct_id:i.bootstrap.distinctID,$device_id:u})}if(this._hasBootstrappedFeatureFlags()){var d,f,p=Object.keys((null===(d=i.bootstrap)||void 0===d?void 0:d.featureFlags)||{}).filter((e=>{var t,n
return!(null===(t=i.bootstrap)||void 0===t||null===(n=t.featureFlags)||void 0===n||!n[e])})).reduce(((e,t)=>{var n,r
return e[t]=(null===(n=i.bootstrap)||void 0===n||null===(r=n.featureFlags)||void 0===r?void 0:r[t])||!1,e}),{}),g=Object.keys((null===(f=i.bootstrap)||void 0===f?void 0:f.featureFlagPayloads)||{}).filter((e=>p[e])).reduce(((e,t)=>{var n,r,o,s
return null!==(n=i.bootstrap)&&void 0!==n&&null!==(r=n.featureFlagPayloads)&&void 0!==r&&r[t]&&(e[t]=null===(o=i.bootstrap)||void 0===o||null===(s=o.featureFlagPayloads)||void 0===s?void 0:s[t]),e}),{})
this.featureFlags.receivedFeatureFlags({featureFlags:p,featureFlagPayloads:g})}if(this.config.__preview_experimental_cookieless_mode)this.register_once({distinct_id:Ze,$device_id:null},"")
else if(!this.get_distinct_id()){var b=this.config.get_device_id(pt())
this.register_once({distinct_id:b,$device_id:b},""),this.persistence.set_property(We,"anonymous")}return _e(m,"onpagehide"in self?"pagehide":"unload",this._handle_unload.bind(this),{passive:!1}),this.toolbar.maybeLoadToolbar(),i.segment?function(e,t){var n=e.config.segment
if(!n)return t()
!function(e,t){var n=e.config.segment
if(!n)return t()
var i=n=>{var i=()=>n.anonymousId()||pt()
e.config.get_device_id=i,n.id()&&(e.register({distinct_id:n.id(),$device_id:i()}),e.persistence.set_property(We,"identified")),t()},r=n.user()
"then"in r&&U(r.then)?r.then((e=>i(e))):i(r)}(e,(()=>{n.register((e=>{Promise&&Promise.resolve||Dr.warn("This browser does not have Promise support, and can not use the segment integration")
var t=(t,n)=>{var i
if(!n)return t
t.event.userId||t.event.anonymousId===e.get_distinct_id()||(Dr.info("No userId set, resetting PostHog"),e.reset()),t.event.userId&&t.event.userId!==e.get_distinct_id()&&(Dr.info("UserId set, identifying with PostHog"),e.identify(t.event.userId))
var r=e._calculate_event_properties(n,null!==(i=t.event.properties)&&void 0!==i?i:{},new Date)
return t.event.properties=Object.assign({},r,t.event.properties),t}
return{name:"PostHog JS",type:"enrichment",version:"1.0.0",isLoaded:()=>!0,load:()=>Promise.resolve(),track:e=>t(e,e.event.event),page:e=>t(e,"$pageview"),identify:e=>t(e,"$identify"),screen:e=>t(e,"$screen")}})(e)).then((()=>{t()}))}))}(this,(()=>this._loaded())):this._loaded(),U(this.config._onCapture)&&this.config._onCapture!==vs&&(ne.warn("onCapture is deprecated. Please use `before_send` instead"),this.on("eventCaptured",(e=>this.config._onCapture(e.event,e)))),this}_onRemoteConfig(e){var t,n,i,r,o,s,a,l
if(!x||!x.body)return ne.info("document not ready yet, trying again in 500 milliseconds..."),void setTimeout((()=>{this._onRemoteConfig(e)}),500)
this.compression=void 0,e.supportedCompression&&!this.config.disable_compression&&(this.compression=F(e.supportedCompression,v.GZipJS)?v.GZipJS:F(e.supportedCompression,v.Base64)?v.Base64:void 0),null!==(t=e.analytics)&&void 0!==t&&t.endpoint&&(this.analyticsDefaultEndpoint=e.analytics.endpoint),this.set_config({person_profiles:this._initialPersonProfilesConfig?this._initialPersonProfilesConfig:"identified_only"}),null===(n=this.siteApps)||void 0===n||n.onRemoteConfig(e),null===(i=this.sessionRecording)||void 0===i||i.onRemoteConfig(e),null===(r=this.autocapture)||void 0===r||r.onRemoteConfig(e),null===(o=this.heatmaps)||void 0===o||o.onRemoteConfig(e),this.surveys.onRemoteConfig(e),null===(s=this.webVitalsAutocapture)||void 0===s||s.onRemoteConfig(e),null===(a=this.exceptionObserver)||void 0===a||a.onRemoteConfig(e),null===(l=this.deadClicksAutocapture)||void 0===l||l.onRemoteConfig(e)}_loaded(){try{this.config.loaded(this)}catch(e){ne.critical("`loaded` function failed",e)}this._start_queue_if_opted_in(),this.config.capture_pageview&&setTimeout((()=>{this.consent.isOptedIn()&&this._captureInitialPageview()}),1),new gr(this).load(),this.featureFlags.decide()}_start_queue_if_opted_in(){var e
this.has_opted_out_capturing()||this.config.request_batching&&(null===(e=this._requestQueue)||void 0===e||e.enable())}_dom_loaded(){this.has_opted_out_capturing()||oe(this.__request_queue,(e=>this._send_retriable_request(e))),this.__request_queue=[],this._start_queue_if_opted_in()}_handle_unload(){var e,t
this.config.request_batching?(this._shouldCapturePageleave()&&this.capture("$pageleave"),null===(e=this._requestQueue)||void 0===e||e.unload(),null===(t=this._retryQueue)||void 0===t||t.unload()):this._shouldCapturePageleave()&&this.capture("$pageleave",null,{transport:"sendBeacon"})}_send_request(e){this.__loaded&&(ms?this.__request_queue.push(e):this.rateLimiter.isServerRateLimited(e.batchKey)||(e.transport=e.transport||this.config.api_transport,e.url=Er(e.url,{ip:this.config.ip?1:0}),e.headers=h({},this.config.request_headers),e.compression="best-available"===e.compression?this.compression:e.compression,e.fetchOptions=e.fetchOptions||this.config.fetch_options,(e=>{var t,n,i,r=h({},e)
r.timeout=r.timeout||6e4,r.url=Er(r.url,{_:(new Date).getTime().toString(),ver:_.LIB_VERSION,compression:r.compression})
var o=null!==(t=r.transport)&&void 0!==t?t:"fetch",s=null!==(n=null===(i=ve(Pr,(e=>e.transport===o)))||void 0===i?void 0:i.method)&&void 0!==n?n:Pr[0].method
if(!s)throw new Error("No available transport method")
s(r)})(h(h({},e),{},{callback:t=>{var n,i,r
this.rateLimiter.checkForLimiting(t),t.statusCode>=400&&(null===(i=(r=this.config).on_request_error)||void 0===i||i.call(r,t)),null===(n=e.callback)||void 0===n||n.call(e,t)}}))))}_send_retriable_request(e){this._retryQueue?this._retryQueue.retriableRequest(e):this._send_request(e)}_execute_array(e){var t,n=[],i=[],r=[]
oe(e,(e=>{e&&(t=e[0],q(t)?r.push(e):U(e)?e.call(this):q(e)&&"alias"===t?n.push(e):q(e)&&-1!==t.indexOf("capture")&&U(this[t])?r.push(e):i.push(e))}))
var o=function(e,t){oe(e,(function(e){if(q(e[0])){var n=t
se(e,(function(e){n=n[e[0]].apply(n,e.slice(1))}))}else this[e[0]].apply(this,e.slice(1))}),t)}
o(n,this),o(i,this),o(r,this)}_hasBootstrappedFeatureFlags(){var e,t
return(null===(e=this.config.bootstrap)||void 0===e?void 0:e.featureFlags)&&Object.keys(null===(t=this.config.bootstrap)||void 0===t?void 0:t.featureFlags).length>0||!1}push(e){this._execute_array([e])}capture(e,t,n){var i
if(this.__loaded&&this.persistence&&this.sessionPersistence&&this._requestQueue){if(!this.consent.isOptedOut())if(!z(e)&&V(e)){if(this.config.opt_out_useragent_filter||!this._is_bot()){var r=null!=n&&n.skip_client_rate_limiting?void 0:this.rateLimiter.clientRateLimitContext()
if(null==r||!r.isRateLimited){this.sessionPersistence.update_search_keyword(),this.config.save_campaign_params&&this.sessionPersistence.update_campaign_params(),this.config.save_referrer&&this.sessionPersistence.update_referrer_info(),(this.config.save_campaign_params||this.config.save_referrer)&&this.persistence.set_initial_person_info()
var o=new Date,s=(null==n?void 0:n.timestamp)||o,a=pt(),l={uuid:a,event:e,properties:this._calculate_event_properties(e,t||{},s,a)}
r&&(l.properties.$lib_rate_limit_remaining_tokens=r.remainingTokens),(null==n?void 0:n.$set)&&(l.$set=null==n?void 0:n.$set)
var c=this._calculate_set_once_properties(null==n?void 0:n.$set_once)
c&&(l.$set_once=c),(l=function(e,t){return n=e,i=e=>V(e)&&!J(t)?e.slice(0,t):e,r=new Set,function e(t,n){return t!==Object(t)?i?i(t):t:r.has(t)?void 0:(r.add(t),q(t)?(o=[],oe(t,(t=>{o.push(e(t))}))):(o={},se(t,((t,n)=>{r.has(t)||(o[n]=e(t,n))}))),o)
var o}(n)
var n,i,r}(l,null!=n&&n._noTruncate?null:this.config.properties_string_max_length)).timestamp=s,z(null==n?void 0:n.timestamp)||(l.properties.$event_time_override_provided=!0,l.properties.$event_time_override_system_time=o)
var u=h(h({},l.properties.$set),l.$set)
if(W(u)||this.setPersonPropertiesForFlags(u),!K(this.config.before_send)){var d=this._runBeforeSend(l)
if(!d)return
l=d}this._internalEventEmitter.emit("eventCaptured",l)
var f={method:"POST",url:null!==(i=null==n?void 0:n._url)&&void 0!==i?i:this.requestRouter.endpointFor("api",this.analyticsDefaultEndpoint),data:l,compression:"best-available",batchKey:null==n?void 0:n._batchKey}
return!this.config.request_batching||n&&(null==n||!n._batchKey)||null!=n&&n.send_instantly?this._send_retriable_request(f):this._requestQueue.enqueue(f),l}ne.critical("This capture call is ignored due to client rate limiting.")}}else ne.error("No event name provided to posthog.capture")}else ne.uninitializedWarning("posthog.capture")}_addCaptureHook(e){return this.on("eventCaptured",(t=>e(t.event,t)))}_calculate_event_properties(e,t,n,i){if(n=n||new Date,!this.persistence||!this.sessionPersistence)return t
var r=this.persistence.remove_event_timer(e),o=h({},t)
if(o.token=this.config.token,this.config.__preview_experimental_cookieless_mode&&(o.$cookieless_mode=!0),"$snapshot"===e){var s=h(h({},this.persistence.properties()),this.sessionPersistence.properties())
return o.distinct_id=s.distinct_id,(!V(o.distinct_id)&&!X(o.distinct_id)||Q(o.distinct_id))&&ne.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),o}var a,l=In.properties({maskPersonalDataProperties:this.config.mask_personal_data_properties,customPersonalDataProperties:this.config.custom_personal_data_properties})
if(this.sessionManager){var{sessionId:c,windowId:u}=this.sessionManager.checkAndGetSessionAndWindowId()
o.$session_id=c,o.$window_id=u}if(this.sessionRecording&&(o.$recording_status=this.sessionRecording.status),this.requestRouter.region===Ir.CUSTOM&&(o.$lib_custom_api_host=this.config.api_host),a="$pageview"===e?this.pageViewManager.doPageView(n,i):"$pageleave"===e?this.pageViewManager.doPageLeave(n):this.pageViewManager.doEvent(),o=ae(o,a),"$pageview"===e&&x&&(o.title=x.title),!z(r)){var d=n.getTime()-r
o.$duration=parseFloat((d/1e3).toFixed(3))}L&&this.config.opt_out_useragent_filter&&(o.$browser_type=this._is_bot()?"bot":"browser"),(o=ae({},l,this.persistence.properties(),this.sessionPersistence.properties(),o)).$is_identified=this._isIdentified(),q(this.config.property_denylist)?se(this.config.property_denylist,(function(e){delete o[e]})):ne.error("Invalid value for property_denylist config: "+this.config.property_denylist+" or property_blacklist config: "+this.config.property_blacklist)
var f=this.config.sanitize_properties
f&&(ne.error("sanitize_properties is deprecated. Use before_send instead"),o=f(o,e))
var p=this._hasPersonProcessing()
return o.$process_person_profile=p,p&&this._requirePersonProcessing("_calculate_event_properties"),o}_calculate_set_once_properties(e){if(!this.persistence||!this._hasPersonProcessing())return e
var t=ae({},this.persistence.get_initial_props(),e||{}),n=this.config.sanitize_properties
return n&&(ne.error("sanitize_properties is deprecated. Use before_send instead"),t=n(t,"$set_once")),W(t)?void 0:t}register(e,t){var n
null===(n=this.persistence)||void 0===n||n.register(e,t)}register_once(e,t,n){var i
null===(i=this.persistence)||void 0===i||i.register_once(e,t,n)}register_for_session(e){var t
null===(t=this.sessionPersistence)||void 0===t||t.register(e)}unregister(e){var t
null===(t=this.persistence)||void 0===t||t.unregister(e)}unregister_for_session(e){var t
null===(t=this.sessionPersistence)||void 0===t||t.unregister(e)}_register_single(e,t){this.register({[e]:t})}getFeatureFlag(e,t){return this.featureFlags.getFeatureFlag(e,t)}getFeatureFlagPayload(e){var t=this.featureFlags.getFeatureFlagPayload(e)
try{return JSON.parse(t)}catch(e){return t}}isFeatureEnabled(e,t){return this.featureFlags.isFeatureEnabled(e,t)}reloadFeatureFlags(){this.featureFlags.reloadFeatureFlags()}updateEarlyAccessFeatureEnrollment(e,t){this.featureFlags.updateEarlyAccessFeatureEnrollment(e,t)}getEarlyAccessFeatures(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return this.featureFlags.getEarlyAccessFeatures(e,t)}on(e,t){return this._internalEventEmitter.on(e,t)}onFeatureFlags(e){return this.featureFlags.onFeatureFlags(e)}onSessionId(e){var t,n
return null!==(t=null===(n=this.sessionManager)||void 0===n?void 0:n.onSessionId(e))&&void 0!==t?t:()=>{}}getSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.surveys.getSurveys(e,t)}getActiveMatchingSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.surveys.getActiveMatchingSurveys(e,t)}renderSurvey(e,t){this.surveys.renderSurvey(e,t)}canRenderSurvey(e){this.surveys.canRenderSurvey(e)}getNextSurveyStep(e,t,n){return this.surveys.getNextSurveyStep(e,t,n)}identify(e,t,n){if(!this.__loaded||!this.persistence)return ne.uninitializedWarning("posthog.identify")
if(X(e)&&(e=e.toString(),ne.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")),e){if(["distinct_id","distinctid"].includes(e.toLowerCase()))ne.critical('The string "'.concat(e,'" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'))
else if(this._requirePersonProcessing("posthog.identify")){var i=this.get_distinct_id()
if(this.register({$user_id:e}),!this.get_property("$device_id")){var r=i
this.register_once({$had_persisted_distinct_id:!0,$device_id:r},"")}e!==i&&e!==this.get_property(be)&&(this.unregister(be),this.register({distinct_id:e}))
var o="anonymous"===(this.persistence.get_property(We)||"anonymous")
e!==i&&o?(this.persistence.set_property(We,"identified"),this.setPersonPropertiesForFlags(h(h({},n||{}),t||{}),!1),this.capture("$identify",{distinct_id:e,$anon_distinct_id:i},{$set:t||{},$set_once:n||{}}),this.featureFlags.setAnonymousDistinctId(i),this._cachedIdentify=ps(e,t,n)):(t||n)&&(this._cachedIdentify!==ps(e,t,n)?(this.setPersonProperties(t,n),this._cachedIdentify=ps(e,t,n)):ne.info("A duplicate posthog.identify call was made with the same properties. It has been ignored.")),e!==i&&(this.reloadFeatureFlags(),this.unregister(Ge))}}else ne.error("Unique user id has not been set in posthog.identify")}setPersonProperties(e,t){(e||t)&&this._requirePersonProcessing("posthog.setPersonProperties")&&(this.setPersonPropertiesForFlags(h(h({},t||{}),e||{})),this.capture("$set",{$set:e||{},$set_once:t||{}}))}group(e,t,n){if(e&&t){if(this._requirePersonProcessing("posthog.group")){var i=this.getGroups()
i[e]!==t&&this.resetGroupPropertiesForFlags(e),this.register({$groups:h(h({},i),{},{[e]:t})}),n&&(this.capture("$groupidentify",{$group_type:e,$group_key:t,$group_set:n}),this.setGroupPropertiesForFlags({[e]:n})),i[e]===t||n||this.reloadFeatureFlags()}}else ne.error("posthog.group requires a group type and group key")}resetGroups(){this.register({$groups:{}}),this.resetGroupPropertiesForFlags(),this.reloadFeatureFlags()}setPersonPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this.featureFlags.setPersonPropertiesForFlags(e,t)}resetPersonPropertiesForFlags(){this.featureFlags.resetPersonPropertiesForFlags()}setGroupPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this._requirePersonProcessing("posthog.setGroupPropertiesForFlags")&&this.featureFlags.setGroupPropertiesForFlags(e,t)}resetGroupPropertiesForFlags(e){this.featureFlags.resetGroupPropertiesForFlags(e)}reset(e){var t,n,i,r
if(ne.info("reset"),!this.__loaded)return ne.uninitializedWarning("posthog.reset")
var o=this.get_property("$device_id")
if(this.consent.reset(),null===(t=this.persistence)||void 0===t||t.clear(),null===(n=this.sessionPersistence)||void 0===n||n.clear(),this.surveys.reset(),null===(i=this.persistence)||void 0===i||i.set_property(We,"anonymous"),null===(r=this.sessionManager)||void 0===r||r.resetSessionId(),this._cachedIdentify=null,this.config.__preview_experimental_cookieless_mode)this.register_once({distinct_id:Ze,$device_id:null},"")
else{var s=this.config.get_device_id(pt())
this.register_once({distinct_id:s,$device_id:e?s:o},"")}this.register({$last_posthog_reset:(new Date).toISOString()},1)}get_distinct_id(){return this.get_property("distinct_id")}getGroups(){return this.get_property("$groups")||{}}get_session_id(){var e,t
return null!==(e=null===(t=this.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0).sessionId)&&void 0!==e?e:""}get_session_replay_url(e){if(!this.sessionManager)return""
var{sessionId:t,sessionStartTimestamp:n}=this.sessionManager.checkAndGetSessionAndWindowId(!0),i=this.requestRouter.endpointFor("ui","/project/".concat(this.config.token,"/replay/").concat(t))
if(null!=e&&e.withTimestamp&&n){var r,o=null!==(r=e.timestampLookBack)&&void 0!==r?r:10
if(!n)return i
var s=Math.max(Math.floor(((new Date).getTime()-n)/1e3)-o,0)
i+="?t=".concat(s)}return i}alias(e,t){return e===this.get_property(me)?(ne.critical("Attempting to create alias for existing People user - aborting."),-2):this._requirePersonProcessing("posthog.alias")?(z(t)&&(t=this.get_distinct_id()),e!==t?(this._register_single(be,e),this.capture("$create_alias",{alias:e,distinct_id:t})):(ne.warn("alias matches current distinct_id - skipping api call."),this.identify(e),-1)):void 0}set_config(e){var t,n,i,r,o=h({},this.config)
G(e)&&(ae(this.config,ys(e)),null===(t=this.persistence)||void 0===t||t.update_config(this.config,o),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new On(h(h({},this.config),{},{persistence:"sessionStorage"})),yt.is_supported()&&"true"===yt.get("ph_debug")&&(this.config.debug=!0),this.config.debug&&(_.DEBUG=!0,ne.info("set_config",{config:e,oldConfig:o,newConfig:h({},this.config)})),null===(n=this.sessionRecording)||void 0===n||n.startIfEnabledOrStop(),null===(i=this.autocapture)||void 0===i||i.startIfEnabled(),null===(r=this.heatmaps)||void 0===r||r.startIfEnabled(),this.surveys.loadIfEnabled(),this._sync_opt_out_with_persistence())}startSessionRecording(e){var t,n,i,r,o,s=!0===e,a={sampling:s||!(null==e||!e.sampling),linked_flag:s||!(null==e||!e.linked_flag),url_trigger:s||!(null==e||!e.url_trigger),event_trigger:s||!(null==e||!e.event_trigger)}
Object.values(a).some(Boolean)&&(null===(t=this.sessionManager)||void 0===t||t.checkAndGetSessionAndWindowId(),a.sampling&&(null===(n=this.sessionRecording)||void 0===n||n.overrideSampling()),a.linked_flag&&(null===(i=this.sessionRecording)||void 0===i||i.overrideLinkedFlag()),a.url_trigger&&(null===(r=this.sessionRecording)||void 0===r||r.overrideTrigger("url")),a.event_trigger&&(null===(o=this.sessionRecording)||void 0===o||o.overrideTrigger("event")))
this.set_config({disable_session_recording:!1})}stopSessionRecording(){this.set_config({disable_session_recording:!0})}sessionRecordingStarted(){var e
return!(null===(e=this.sessionRecording)||void 0===e||!e.started)}captureException(e,t){var n,i=new Error("PostHog syntheticException"),r=U(null===(n=I.__PosthogExtensions__)||void 0===n?void 0:n.parseErrorAsProperties)?h(h({},I.__PosthogExtensions__.parseErrorAsProperties([e.message,void 0,void 0,void 0,e],{syntheticException:i})),t):h({$exception_level:"error",$exception_list:[{type:e.name,value:e.message,mechanism:{handled:!0,synthetic:!1}}]},t)
this.exceptions.sendExceptionEvent(r)}loadToolbar(e){return this.toolbar.loadToolbar(e)}get_property(e){var t
return null===(t=this.persistence)||void 0===t?void 0:t.props[e]}getSessionProperty(e){var t
return null===(t=this.sessionPersistence)||void 0===t?void 0:t.props[e]}toString(){var e,t=null!==(e=this.config.name)&&void 0!==e?e:_s
return t!==_s&&(t=_s+"."+t),t}_isIdentified(){var e,t
return"identified"===(null===(e=this.persistence)||void 0===e?void 0:e.get_property(We))||"identified"===(null===(t=this.sessionPersistence)||void 0===t?void 0:t.get_property(We))}_hasPersonProcessing(){var e,t,n,i
return!("never"===this.config.person_profiles||"identified_only"===this.config.person_profiles&&!this._isIdentified()&&W(this.getGroups())&&(null===(e=this.persistence)||void 0===e||null===(t=e.props)||void 0===t||!t[be])&&(null===(n=this.persistence)||void 0===n||null===(i=n.props)||void 0===i||!i[Xe]))}_shouldCapturePageleave(){return!0===this.config.capture_pageleave||"if_capture_pageview"===this.config.capture_pageleave&&this.config.capture_pageview}createPersonProfile(){this._hasPersonProcessing()||this._requirePersonProcessing("posthog.createPersonProfile")&&this.setPersonProperties({},{})}_requirePersonProcessing(e){return"never"===this.config.person_profiles?(ne.error(e+' was called, but process_person is set to "never". This call will be ignored.'),!1):(this._register_single(Xe,!0),!0)}_sync_opt_out_with_persistence(){var e,t,n,i,r=this.consent.isOptedOut(),o=this.config.opt_out_persistence_by_default,s=this.config.disable_persistence||r&&!!o;(null===(e=this.persistence)||void 0===e?void 0:e.disabled)!==s&&(null===(n=this.persistence)||void 0===n||n.set_disabled(s)),(null===(t=this.sessionPersistence)||void 0===t?void 0:t.disabled)!==s&&(null===(i=this.sessionPersistence)||void 0===i||i.set_disabled(s))}opt_in_capturing(e){var t
this.consent.optInOut(!0),this._sync_opt_out_with_persistence(),(z(null==e?void 0:e.captureEventName)||null!=e&&e.captureEventName)&&this.capture(null!==(t=null==e?void 0:e.captureEventName)&&void 0!==t?t:"$opt_in",null==e?void 0:e.captureProperties,{send_instantly:!0}),this.config.capture_pageview&&this._captureInitialPageview()}opt_out_capturing(){this.consent.optInOut(!1),this._sync_opt_out_with_persistence()}has_opted_in_capturing(){return this.consent.isOptedIn()}has_opted_out_capturing(){return this.consent.isOptedOut()}clear_opt_in_out_capturing(){this.consent.reset(),this._sync_opt_out_with_persistence()}_is_bot(){return S?jo(S,this.config.custom_blocked_useragents):void 0}_captureInitialPageview(){x&&!this._initialPageviewCaptured&&(this._initialPageviewCaptured=!0,this.capture("$pageview",{title:x.title},{send_instantly:!0}))}debug(e){!1===e?(null==m||m.console.log("You've disabled debug mode."),localStorage&&localStorage.removeItem("ph_debug"),this.set_config({debug:!1})):(null==m||m.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),localStorage&&localStorage.setItem("ph_debug","true"),this.set_config({debug:!0}))}_runBeforeSend(e){if(K(this.config.before_send))return e
var t=q(this.config.before_send)?this.config.before_send:[this.config.before_send],n=e
for(var i of t){if(n=i(n),K(n)){var r="Event '".concat(e.event,"' was rejected in beforeSend function")
return ee(e.event)?ne.warn("".concat(r,". This can cause unexpected behavior.")):ne.info(r),null}n.properties&&!W(n.properties)||ne.warn("Event '".concat(e.event,"' has no properties after beforeSend function, this is likely an error."))}return n}getPageViewId(){var e
return null===(e=this.pageViewManager._currentPageview)||void 0===e?void 0:e.pageViewId}}!function(e,t){for(var n=0;n<t.length;n++)e.prototype[t[n]]=fe(e.prototype[t[n]])}(ks,["identify"])
var Ss,xs=(Ss=gs[_s]=new ks,function(){function e(){e.done||(e.done=!0,ms=!1,se(gs,(function(e){e._dom_loaded()})))}null!=x&&x.addEventListener?"complete"===x.readyState?e():_e(x,"DOMContentLoaded",e,{capture:!1}):m&&ne.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")}(),Ss)
function Es(...e){console.log(...e)}function $s(e,t){xs.capture(e,t)}function Cs(){"string"==typeof window.self&&(o(),window.self=window),function(){try{xs.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N",{advanced_disable_decide:!0,advanced_disable_feature_flags:!0,advanced_disable_feature_flags_on_first_load:!0,advanced_disable_toolbar_metrics:!0,api_host:"https://us.i.posthog.com",autocapture:!1,capture_pageview:!1,disable_compression:!1,disable_persistence:!0,disable_session_recording:!0,disable_surveys:!0,person_profiles:"identified_only"})}catch(e){Es(e)}}()}let Ps=0,Ts=0,Ls=0,Is=0,Rs=0,Os=0,Fs=0
const Ms=()=>Date.now(),As=()=>Math.floor(Ms()/1e3)
function Ns(){return Ps||(Ps=Ms()),Ps}function js(){return Ts||(Ts=Ns()-3e5),Ts}function Ds(){return Ls||(Ls=Ns()-1728e5),Ls}function Bs(){return Is||(Is=Math.floor(Ns()/1e3)),Is}function Hs(){return Rs||(Rs=Bs()-120),Rs}function qs(){return Os||(Os=Bs()-86400),Os}function Us(){return Fs||(Fs=Bs()-604800),Fs}function Gs(e){return null===e}function Ws(e){return void 0===e}const zs=`${document.location.protocol}//${document.location.host}/`,Vs=window.HCS?.defines?.cdn,Qs=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],Js=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],Ks=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Xs=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,Ys=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,Zs=/guild_id=(?<guildId>\d+)/,ea=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,ta=/player_id=(?<playerId>\d+)/,na=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,ia=/VL:.+?(?<vl>\d+)/,ra=.2,oa="joinallgroupsundersize",sa="index.php",aa="?cmd=",la=`${sa}${aa}`,ca="&subcmd=",ua="&target_username=",da=`${la}auctionhouse`,fa=`${da}&search=`,ha=`${la}log`,pa=`${la}ignore${ca}add&ignore_username=`,ga=`${la}profile`,va=`${ga}&player_id=`,_a=`${ga}${ca}dropitems`,ma=`${la}trade&target_player=`,ba=`${la}trade${ca}createsecure${ua}`,ya=`${la}arena${ca}`,wa=`${sa}${`${aa}notepad&blank=1${ca}`}`,ka=`${wa}auctionsearch`,Sa=`${la}points`,xa=`${la}guild${ca}`,Ea=`${xa}log`,$a=`${xa}scouttower`,Ca=`${xa}groups&subcmd2=`,Pa=`${xa}inventory&subcmd2=report&user=`,Ta=`${xa}view&guild_id=`,La=`${Ca}joinall`,Ia=`${Ca}${oa}`,Ra=`${la}world`,Oa=`${la}findplayer`,Fa=`${Oa}&search_show_first=1&search_username=`,Ma=`${la}blacksmith`,Aa=`${la}quickbuff`,Na=`${la}composing`,ja=`${la}attackplayer${ua}`,Da=`${la}${ca}viewupdatearchive`,Ba=`${la}${ca}viewarchive`,Ha=`${la}bounty`,qa=`${la}inventing${ca}viewrecipe&recipe_id=`,Ua=`https://guide.fallensword.com/${la}`,Ga="after-update.actionlist",Wa="buffs.player",za="update.player",Va="level.stats-player",Qa="gold.stats-player",Ja="prompt.worldDialogShop",Ka="keydown.controls",Xa="update.realm",Ya="-success.action-response",Za=`-1${Ya}`,el=`1${Ya}`,tl=`2${Ya}`,nl=`9${Ya}`,il=`5${Ya}`,rl=`25${Ya}`,ol=1,sl=2,al=16,ll=128,cl=256,ul="needToCompose",dl="lastComposeCheck",fl="characterVirtualLevel",hl="enableGuildActivityTracker",pl="lastLadderReset",gl="form",vl="table",_l="td",ml="fsh_buffLog",bl="stat-level",yl="stat-defense",wl="stat-attack",kl="stat-damage",Sl="stat-armor",xl="stat-hp",El="stat-vl",$l="GM_",Cl=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],Pl=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],Tl=`${Vs}ui/world/action_spinner.gif`,Ll=".fa-envelope",Il='a[href*="&player_id="]',Rl=.002,Ol=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],Fl='input[name="blockedSkillList[]"]'
var Ml={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addServerNode:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252",compactRanks:!1,lastModalGuildLogCheck:0,dailyQuestReRoll:!1}
const Al=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function Nl(e,t){const n=window.localStorage.getItem($l+e)
return Gs(n)||Ws(n)?t:function(e){const t=Al.find((t=>e.startsWith(t[0])))
return t?t[1](e):e}(n)}function jl(e){return Nl(e,Ml[e])}function Dl(e){return"boolean"==typeof e}function Bl(e){return"string"==typeof e}function Hl(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem($l+e,t+n)}const ql=[[Bl,(e,t)=>{Hl(e,"S]",t)}],[e=>"number"==typeof e,(e,t)=>{t.toString().indexOf(".")<0&&Hl(e,"N]",t)}],[Dl,(e,t)=>{Hl(e,"B]",t)}]]
function Ul(e,t){const n=ql.find((e=>e[0](t)))
n&&n[1](e,t)}function Gl(e){const t=`screenview__${e}`,n=jl(t)
Number.isFinite(n)&&n>qs()||($s(t),Ul(t,Bs()))}function Wl(e){return"function"==typeof e}function zl(e){return"object"==typeof e}function Vl(e,t){try{return JSON.parse(e,t)}catch(e){}}function Ql(e,t){return t?t.querySelector(e):document.querySelector(e)}function Jl(e){const t=Ql("link",document.body)
return new Promise((n=>{const i=document.createElement("link")
i.type="text/css",i.rel="stylesheet",i.onload=()=>{n()},i.href=e,t?t.before(i):document.body.append(i)}))}var Kl="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function Xl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yl,Zl={exports:{}}
var ec=(Yl||(Yl=1,Zl.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==Kl?Kl:"undefined"!=typeof self?self:{}
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
if(e)if(x(e)){var n=e
t=l(e,{name:n.name,message:n.message,stack:n.stack,cause:n.cause})}else t="object"==typeof e?b(e):{message:String(e)}
else t={}
return t}function x(e){return e instanceof Error||"[object Error]"===Object.prototype.toString.call(e)}function E(e,t,n){if(e&&t&&n&&t in e)try{for(var i=e[t];i&&i.__hb_original;)i=i.__hb_original
e[t]=n(i),e[t].__hb_original=i}catch(e){}}t.merge=l,t.mergeNotice=c,t.objectIsEmpty=u,t.objectIsExtensible=d,t.makeBacktrace=f,t.DEFAULT_BACKTRACE_SHIFT=3,t.calculateBacktraceShift=p,t.getCauses=g,t.getSourceForBacktrace=v,t.runBeforeNotifyHandlers=_,t.runAfterNotifyHandlers=m,t.shallowClone=b,t.sanitize=y,t.logger=k,t.makeNotice=S,t.isErrorObject=x,t.instrument=E
var $=!1,C=[]
function P(e,t){e&&e.console&&t&&(C.push(t),$||($=!0,["debug","info","warn","error","log"].forEach((function(t){E(e.console,t,(function(n){return function(){var i=Array.prototype.slice.call(arguments)
C.forEach((function(e){try{e(t,i)}catch(e){}})),"function"==typeof n&&Function.prototype.apply.call(n,e.console,arguments)}}))}))))}function T(e,t){var n=e.trim().replace(/\/$/,"")
return t=t.trim().replace(/(^\/|\/$)/g,""),"".concat(n,"/").concat(t)}function L(){try{throw new Error("")}catch(e){if(e.stack)return e.stack}for(var e=10,t=[],n=arguments.callee;n&&t.length<e;){/function(?:\s+([\w$]+))+\s*\(/.test(n.toString())?t.push(RegExp.$1||"<anonymous>"):t.push("<anonymous>")
try{n=n.caller}catch(e){break}}return t.join("\n")}function I(e,t){if(O("Object",e)){O("Array",t)||(t=[])
var n=[]
return i(e)}function i(e){var r,o
if(O("Object",e)||O("Array",e)){if(-1!==n.indexOf(e))return"[CIRCULAR DATA STRUCTURE]"
n.push(e)}if(O("Object",e)){for(r in o={},e)R(r,t)?o[r]="[FILTERED]":o[r]=i(e[r])
return o}return O("Array",e)?e.map((function(e){return i(e)})):O("Function",e)?"[FUNC]":e}}function R(e,t){for(var n=0;n<t.length;n++)if(-1!==e.toLowerCase().indexOf(t[n].toLowerCase()))return!0
return!1}function O(e,t){var n=Object.prototype.toString.call(t).slice(8,-1)
return null!=t&&n===e}function F(e,t){if(!t)return e
if("string"!=typeof e)return e
var n=e.split(/\?/,2)[1]
if(!n)return e
var i=e
return n.split(/[&]\s?/).forEach((function(e){var n=e.split("=",2),r=n[0],o=n[1]
R(r,t)&&(i=i.replace("".concat(r,"=").concat(o),"".concat(r,"=[FILTERED]")))})),i}function M(e,t){void 0===t&&(t="")
var n={}
return Object.keys(e).forEach((function(i){var r=t+i.replace(/\W/g,"_").toUpperCase()
n[r]=e[i]})),n}function A(e){return JSON.parse(JSON.stringify(e))}function N(e,t,n){if(void 0===n&&(n=2),!e)return null
var i=e.split("\n")
i.unshift("")
for(var r=t+n,o={},s=t-n;s<=r;s++){var a=i[s]
"string"==typeof a&&(o[s]=a)}return o}function j(e){return void 0!==e.async}function D(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window}t.instrumentConsole=P,t.endpoint=T,t.generateStackTrace=L,t.filter=I,t.filterUrl=F,t.formatCGIData=M,t.clone=A,t.isBrowserConfig=j,t.globalThisOrWindow=D
var B={}
function H(e,t,n,i){void 0===i&&(i=100)
var r="".concat(t,"-").concat(n)
if(void 0===B[r]&&(B[r]=0),B[r]%i==0){var o="Deprecation warning: ".concat(t," has been deprecated; please use ").concat(n," instead.")
e.warn(o),B[r]++}else B[r]++}t.logDeprecatedMethod=H})(s),Object.defineProperty(o,"__esModule",{value:!0})
var k=s
function S(e){return void 0===e&&(e=(0,k.globalThisOrWindow)()),{shouldReloadOnConfigure:!1,load:function(t){function n(){return t.config.eventsEnabled}n()&&(0,k.instrumentConsole)(e,(function(e,i){if(n()&&0!==i.length){var r={severity:e}
"string"==typeof i[0]?(r.message=i[0],r.args=i.slice(1)):r.args=i,t.event("log",r)}}))}}}o.default=S
var x={},E={}
Object.defineProperty(E,"__esModule",{value:!0}),E.GlobalStore=void 0
var $=s,C=function(){function e(e,t){this.contents=e,this.breadcrumbsLimit=t}return e.create=function(t,n){return new e(t,n)},e.prototype.available=function(){return!0},e.prototype.getContents=function(e){var t=e?this.contents[e]:this.contents
return JSON.parse(JSON.stringify(t))},e.prototype.setContext=function(e){this.contents.context=(0,$.merge)(this.contents.context,e||{})},e.prototype.addBreadcrumb=function(e){this.contents.breadcrumbs.length==this.breadcrumbsLimit&&this.contents.breadcrumbs.shift(),this.contents.breadcrumbs.push(e)},e.prototype.clear=function(){this.contents.context={},this.contents.breadcrumbs=[]},e.prototype.run=function(e){return e()},e}()
E.GlobalStore=C
var P={}
class T{static parse(e){return e.trim().split("\n").map((e=>JSON.parse(e)))}static stringify(e){return e.map((e=>JSON.stringify(e))).join("\n")}}var L=Object.freeze({__proto__:null,NdJson:T}),I=n(L),R={}
Object.defineProperty(R,"__esModule",{value:!0}),R.CONFIG=void 0,R.CONFIG={apiKey:null,endpoint:"https://api.honeybadger.io",environment:null,hostname:null,projectRoot:null,component:null,action:null,revision:null,reportData:null,breadcrumbsEnabled:!0,eventsEnabled:!1,maxBreadcrumbs:40,maxObjectDepth:8,logger:console,developmentEnvironments:["dev","development","test"],debug:!1,tags:null,enableUncaught:!0,enableUnhandledRejection:!0,afterUncaught:function(){return!0},filters:["creditcard","password"],__plugins:[]}
var O=e&&e.__assign||function(){return O=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])
return e},O.apply(this,arguments)},F=e&&e.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){e.done?n(e.value):r(e.value).then(s,a)}l((i=i.apply(e,t||[])).next())}))},M=e&&e.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1]
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
Object.defineProperty(P,"__esModule",{value:!0}),P.ThrottledEventsLogger=void 0
var A=I,N=s,j=R,D=function(){function e(e,t){this.config=e,this.transport=t,this.queue=[],this.isProcessing=!1,this.config=O(O({},j.CONFIG),e),this.logger=this.originalLogger()}return e.prototype.configure=function(e){for(var t in e)this.config[t]=e[t]},e.prototype.log=function(e){this.queue.push(e),this.isProcessing||this.processQueue()},e.prototype.processQueue=function(){var e=this
if(0!==this.queue.length&&!this.isProcessing){this.isProcessing=!0
var t=this.queue.slice()
this.queue=[]
var n=A.NdJson.stringify(t)
this.makeHttpRequest(n).then((function(){setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)})).catch((function(t){e.logger.error("[Honeybadger] Error making HTTP request:",t),setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)}))}},e.prototype.makeHttpRequest=function(e){return F(this,void 0,void 0,(function(){var t=this
return M(this,(function(n){return[2,this.transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json"},method:"POST",endpoint:(0,N.endpoint)(this.config.endpoint,"/v1/events"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},e).then((function(){t.config.debug&&t.logger.debug("[Honeybadger] Events sent successfully")})).catch((function(e){t.logger.error("[Honeybadger] Error sending events: ".concat(e.message))}))]}))}))},e.prototype.originalLogger=function(){var e,t,n,i,r
return{log:null!==(e=console.log.__hb_original)&&void 0!==e?e:console.log,info:null!==(t=console.info.__hb_original)&&void 0!==t?t:console.info,debug:null!==(n=console.debug.__hb_original)&&void 0!==n?n:console.debug,warn:null!==(i=console.warn.__hb_original)&&void 0!==i?i:console.warn,error:null!==(r=console.error.__hb_original)&&void 0!==r?r:console.error}},e}()
P.ThrottledEventsLogger=D
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
Object.defineProperty(x,"__esModule",{value:!0}),x.Client=void 0
var U=s,G=E,W=P,z=R,V=/,|\s+/,Q=/\S/,J=function(){function e(e,t){void 0===e&&(e={}),this.__pluginsLoaded=!1,this.__store=null,this.__beforeNotifyHandlers=[],this.__afterNotifyHandlers=[],this.__notifier={name:"@honeybadger-io/core",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",version:"6.10.1"},this.config=B(B({},z.CONFIG),e),this.__initStore(),this.__transport=t,this.__eventsLogger=new W.ThrottledEventsLogger(this.config,this.__transport),this.logger=(0,U.logger)(this)}return e.prototype.getVersion=function(){return this.__notifier.version},e.prototype.getNotifier=function(){return this.__notifier},e.prototype.setNotifier=function(e){this.__notifier=e},e.prototype.configure=function(e){for(var t in void 0===e&&(e={}),e)this.config[t]=e[t]
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
x.Client=J
var K={}
Object.defineProperty(K,"__esModule",{value:!0}),function(t){var n=e&&e.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n)
var r=Object.getOwnPropertyDescriptor(t,n)
r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),i=e&&e.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=e&&e.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||n(t,e,i)},a=e&&e.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r)
return i(t,e),t},l=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.Plugins=t.Util=t.Types=t.Client=void 0
var c=l(o),u=x
Object.defineProperty(t,"Client",{enumerable:!0,get:function(){return u.Client}}),r(E,t),t.Types=a(K),t.Util=a(s),t.Plugins={events:c.default}}(r)
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
var xe={}
Object.defineProperty(xe,"__esModule",{value:!0})
var Ee=r,$e=X,Ce=Ee.Util.sanitize,Pe=Ee.Util.instrument,Te=Ee.Util.instrumentConsole,Le=Ee.Util.globalThisOrWindow
function Ie(e){return void 0===e&&(e=Le()),{load:function(t){function n(e){return!0===t.config.breadcrumbsEnabled||(e?!0===t.config.breadcrumbsEnabled[e]:!1!==t.config.breadcrumbsEnabled)}!function(){function i(e){return Array.isArray(e)?e.map((function(e){try{return String(e)}catch(e){return"[unknown]"}})).join(" "):""}n("console")&&Te(e,(function(e,n){var r=i(n),o={category:"log",metadata:{level:e,arguments:Ce(n,3)}}
t.addBreadcrumb(r,o)}))}(),n("dom")&&"function"==typeof e.addEventListener&&e.addEventListener("click",(function(e){var n,i,r
try{n=(0,$e.stringNameOfElement)(e.target),i=(0,$e.stringSelectorOfElement)(e.target),r=(0,$e.stringTextOfElement)(e.target)}catch(e){n="UI Click",i="[unknown]",r="[unknown]"}0!==n.length&&t.addBreadcrumb(n,{category:"ui.click",metadata:{selector:i,text:r,event:e}})}),!!e.location),n("network")&&"undefined"!=typeof XMLHttpRequest&&(Pe(XMLHttpRequest.prototype,"open",(function(e){return function(){var t=this,n=arguments[1],i="string"==typeof n?n:String(n),r="string"==typeof arguments[0]?arguments[0].toUpperCase():arguments[0],o="".concat(r," ").concat((0,$e.localURLPathname)(i))
this.__hb_xhr={type:"xhr",method:r,url:i,message:o},"function"==typeof e&&e.apply(t,arguments)}})),Pe(XMLHttpRequest.prototype,"send",(function(e){return function(){var n=this
function i(){if(4===n.readyState){var e=void 0
n.__hb_xhr&&(n.__hb_xhr.status_code=n.status,e=n.__hb_xhr.message,delete n.__hb_xhr.message),t.addBreadcrumb(e||"XMLHttpRequest",{category:"request",metadata:n.__hb_xhr})}}"onreadystatechange"in n&&"function"==typeof n.onreadystatechange?Pe(n,"onreadystatechange",(function(e){return function(){i(),"function"==typeof e&&e.apply(this,arguments)}})):n.onreadystatechange=i,"function"==typeof e&&e.apply(n,arguments)}}))),n("network")&&(0,$e.nativeFetch)()&&Pe(e,"fetch",(function(n){return function(){var i,r=arguments[0],o="GET"
"string"==typeof r?i=r:"Request"in e&&r instanceof Request?(i=r.url,r.method&&(o=r.method)):i=String(r),arguments[1]&&arguments[1].method&&(o=arguments[1].method),"string"==typeof o&&(o=o.toUpperCase())
var s="".concat(o," ").concat("undefined"==typeof document?i:(0,$e.localURLPathname)(i)),a={type:"fetch",method:o,url:i}
return n.apply(this,arguments).then((function(e){return a.status_code=e.status,t.addBreadcrumb(s,{category:"request",metadata:a}),e})).catch((function(e){throw t.addBreadcrumb("fetch error",{category:"error",metadata:a}),e}))}})),function(){if(n("navigation")&&null!=e.location){var i=e.location.href
"function"==typeof addEventListener&&addEventListener("popstate",(function(t){r(i,e.location.href)})),void 0!==e.history&&(Pe(e.history,"pushState",o),Pe(e.history,"replaceState",o))}function r(e,n){i=n,t.addBreadcrumb("Page changed",{category:"navigation",metadata:{from:e,to:n}})}function o(e){return function(){var t=arguments.length>2?arguments[2]:void 0
return t&&r(i,String(t)),e.apply(this,arguments)}}}()}}}xe.default=Ie
var Re={}
Object.defineProperty(Re,"__esModule",{value:!0})
var Oe=r,Fe=Oe.Util.instrument,Me=Oe.Util.globalThisOrWindow
function Ae(e){return void 0===e&&(e=Me()),{load:function(t){!function(){function n(e){return function(n){return function(i,r){if("function"==typeof i){var o=Array.prototype.slice.call(arguments,2)
return i=t.__wrap(i,e),n((function(){i.apply(void 0,o)}),r)}return n(i,r)}}}Fe(e,"setTimeout",n({component:"setTimeout"})),Fe(e,"setInterval",n({component:"setInterval"}))}()}}}Re.default=Ae
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
var c=r,u=X,d=ue,f=l(be),h=l(xe),p=l(Re),g=l(Ne),v=qe,_=Ke,m=c.Util.merge,b=c.Util.filter,y=c.Util.objectIsExtensible,w=c.Util.globalThisOrWindow,k=function(){var e=w(),t=""
return null!=e.location&&(t=e.location.protocol+"//"+e.location.host),t},S=function(e){var t=e.split(".").slice(0,2).join(".")
return"https://js.honeybadger.io/v".concat(t,"/honeybadger-feedback-form.js")}
t.getUserFeedbackScriptUrl=S
var x=function(e){function n(t){void 0===t&&(t={})
var n=e.call(this,o({userFeedbackEndpoint:"https://api.honeybadger.io/v2/feedback",async:!0,maxErrors:null,projectRoot:k()},t),new v.BrowserTransport({"User-Agent":$()}))||this
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
throw i.__lastWrapErr=e,(0,d.ignoreNextOnError)(),i.addBreadcrumb(t.component?"".concat(t.component,": ").concat(e.name):e.name,{category:"error",metadata:{message:e.message,name:e.name,stack:e.stack}}),i.config.enableUncaught&&i.notify(e),e}}}return n.___hb.___hb=n.___hb,n.___hb}catch(e){return n}},n.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},n.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},n}(c.Client),E={name:"@honeybadger-io/js",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",version:"6.10.1"},$=function(){return"undefined"!=typeof navigator?"Honeybadger JS Browser Client ".concat(E.version,"; ").concat(navigator.userAgent):"Honeybadger JS Browser Client ".concat(E.version,"; n/a; n/a")},C=new x({__plugins:[(0,d.onError)(),(0,f.default)(),(0,p.default)(),(0,g.default)(),(0,h.default)(),c.Plugins.events()]})
C.setNotifier(E)
var P=r
Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return P.Types}}),t.default=C}(i)
var et=t(i)
return et}()),Zl.exports),tc=Xl(ec)
const nc=["attackplayer.min.js","Auction-House-Monitor.user.js","Compra-%2526-Venda-de-Recursos-%25E2%259C%2585.user.js","Discord-Message-Checks-for-Updates.user.js","dynamically imported module","Fallen-Sword-Champion-and-Super-Elite-Alert.user.js","Fallen-Sword-Message-Alert.user.js","Fallen-Sword-Super-Elite-%2526-Crate-Notifier.user.js","Fallen-Sword-Super-Elite-Notifier.user.js","Fallen-Sword-Win%252FLoss-Checker-with-Buffs-and-Buff-Levels.user.js","Fallen-Sword-Win%252FLoss-Checker.user.js","Fallensword-GvG-Target-Checker-with-Button-and-Buff-Check.user.js","Fetch-Auction-and-Send-to-Discord.user.js","fs.min.js","GVG-and-Relics-Notifications.user.js","GvG-Initiate-Enhanced.user.js","GvG-List-v2.user.js","GVG%252FRelics-Discord.user.js","GVG%252FRelics-Notifications.user.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","New-Userscript.user.js","openuserjs.org","Permission denied to access object","play method is not allowed","Quick-Kill.user.js","se-searcher-v2-draft.user.js","Superelite-searcher.user.js","Titan-Quick-Kill.user.js","UFSG-dodatki.user.js","UnhandledPromiseRejectionWarning: 404","world.min.js","(reading '$$')"],ic=e=>nc.some((t=>e.includes(t)))
function rc(e){if(ic(e.message)||ic(e.stack))return!1}function oc(){!function(){tc.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.148"})
const e=o()
e&&tc.setContext({user_id:e}),tc.afterNotify((e=>{if(e)return Es(`Honeybadger notification failed: ${e}`)})),tc.beforeNotify(rc)}()}function sc(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class ac extends Error{constructor([e,t,n,i],...r){super(function(e,t,n,i){const r=`${t.status} ${t.statusText} - `
if(t.statusText===i.toString())return r+sc(e)
const o=`${r+n} ${i} - ${sc(e)}`
return"parsererror"===n?`${o} - ${t.responseText}`:o}(e,t,n,i),...r),Error.captureStackTrace&&Error.captureStackTrace(this,ac),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=i}}function lc(e,t,n,i){e instanceof EventTarget&&e.addEventListener(t,n,i)}function cc(e,t,n){return JSON.stringify(e,t,n)}function uc(e){jl("betaOptIn")&&Es("sendException",e),tc.notify(e,"sendException")}var dc={}
function fc(e){return Array.isArray(e)}function hc(e,t){return e||t}const pc=[null]
function gc(e,t){return pc[e]&&pc[e].priority<pc[t].priority}function vc(e,t){const n=pc[e]
pc[e]=pc[t],pc[t]=n}function _c(e,t){return e?2*t:2*t+1}function mc(){if(1===pc.length)return
const e=pc[1].data,t=pc.pop()
return pc.length>1&&(pc[1]=t,function(e){let t=e
for(;2*t<pc.length;){const e=_c(!gc(2*t+1,2*t),t)
if(gc(t,e))break
vc(t,e),t=e}}(1)),e}function bc(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!gc(t,e))break
vc(t,e),t=e}}(pc.push({data:e,priority:t})-1)}let yc=!0
const wc="fshMessage"
let kc=0
function Sc(){pc.length-1==0?yc=!0:(yc=!1,window.postMessage(wc,window.location.origin))}function xc(){const e=mc()
Wl(e)?e():function(e){Ws(e)||uc(`pop() was not a function (${typeof e})`)}(e)}function Ec(e){const t=e.data
e.origin===window.location.origin&&t===wc&&function(){try{xc()}catch(e){tc.notify(e,"taskFailure")}finally{Sc()}}()}function $c(e,t,n,i){if(Wl(t)){kc||(lc(window,"message",Ec),kc=!0)
const r=hc(i,window),o=hc(n,[])
bc(t.bind(r,...o),e),yc&&Sc()}}function Cc(e,t){return new URLSearchParams(e).get(t)}function Pc(e){try{return Cc(decodeURIComponent(window.location.search),e)}catch(e){return Es(e),""}}function Tc(){}const Lc=e=>e
function Ic(e,t){for(const n in t)e[n]=t[n]
return e}function Rc(e){return e()}function Oc(){return Object.create(null)}function Fc(e){e.forEach(Rc)}function Mc(e){return"function"==typeof e}function Ac(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let Nc
function jc(e,t){return e===t||(Nc||(Nc=document.createElement("a")),Nc.href=t,e===Nc.href)}function Dc(e,...t){if(null==e){for(const e of t)e(void 0)
return Tc}const n=e.subscribe(...t)
return n.unsubscribe?()=>n.unsubscribe():n}function Bc(e){let t
return Dc(e,(e=>t=e))(),t}function Hc(e,t,n){e.$$.on_destroy.push(Dc(t,n))}function qc(e,t,n,i){if(e){const r=Uc(e,t,n,i)
return e[0](r)}}function Uc(e,t,n,i){return e[1]&&i?Ic(n.ctx.slice(),e[1](i(t))):n.ctx}function Gc(e,t,n,i){if(e[2]&&i){const r=e[2](i(n))
if(void 0===t.dirty)return r
if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length)
for(let i=0;i<n;i+=1)e[i]=t.dirty[i]|r[i]
return e}return t.dirty|r}return t.dirty}function Wc(e,t,n,i,r,o){if(r){const s=Uc(t,n,i,o)
e.p(s,r)}}function zc(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32
for(let e=0;e<n;e++)t[e]=-1
return t}return-1}function Vc(e){const t={}
for(const n in e)t[n]=!0
return t}function Qc(e){let t=!1
return function(...n){t||(t=!0,e.call(this,...n))}}function Jc(e){return null==e?"":e}function Kc(e){return e&&Mc(e.destroy)?e.destroy:Tc}function Xc(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const Yc="undefined"!=typeof window
let Zc=Yc?()=>window.performance.now():()=>Date.now(),eu=Yc?e=>requestAnimationFrame(e):Tc
const tu=new Set
function nu(e){tu.forEach((t=>{t.c(e)||(tu.delete(t),t.f())})),0!==tu.size&&eu(nu)}function iu(e,t){e.appendChild(t)}function ru(e){if(!e)return document
const t=e.getRootNode?e.getRootNode():e.ownerDocument
return t&&t.host?t:e.ownerDocument}function ou(e){const t=cu("style")
return t.textContent="/* empty */",function(e,t){iu(e.head||e,t),t.sheet}(ru(e),t),t.sheet}function su(e,t,n){e.insertBefore(t,n||null)}function au(e){e.parentNode&&e.parentNode.removeChild(e)}function lu(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function cu(e){return document.createElement(e)}function uu(e){return document.createTextNode(e)}function du(){return uu(" ")}function fu(){return uu("")}function hu(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function pu(e){return function(t){return t.preventDefault(),e.call(this,t)}}function gu(e){return function(t){t.target===this&&e.call(this,t)}}function vu(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _u(e,t,n){const i=t.toLowerCase()
i in e?e[i]="boolean"==typeof e[i]&&""===n||n:t in e?e[t]="boolean"==typeof e[t]&&""===n||n:vu(e,t,n)}function mu(e){return""===e?null:+e}function bu(e,t){t=""+t,e.data!==t&&(e.data=t)}function yu(e,t){e.value=null==t?"":t}function wu(e,t,n,i){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function ku(e,t,n){for(let n=0;n<e.options.length;n+=1){const i=e.options[n]
if(i.__value===t)return void(i.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}function Su(e){const t=e.querySelector(":checked")
return t&&t.__value}let xu
function Eu(){if(void 0===xu){xu=!1
try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){xu=!0}}return xu}function $u(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative")
const n=cu("iframe")
n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1
const i=Eu()
let r
return i?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=hu(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=hu(n.contentWindow,"resize",t),t()}),iu(e,n),()=>{(i||r&&n.contentWindow)&&r(),au(n)}}function Cu(e,t,n){e.classList.toggle(t,!!n)}function Pu(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}class Tu{is_svg=!1
e=void 0
n=void 0
t=void 0
a=void 0
constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){var i
this.e||(this.is_svg?this.e=(i=t.nodeName,document.createElementNS("http://www.w3.org/2000/svg",i)):this.e=cu(11===t.nodeType?"TEMPLATE":t.nodeName),this.t="TEMPLATE"!==t.tagName?t:t.content,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)su(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(au)}}function Lu(e,t){return new e(t)}const Iu=new Map
let Ru,Ou=0
function Fu(e,t,n,i,r,o,s,a=0){const l=16.666/i
let c="{\n"
for(let e=0;e<=1;e+=l){const i=t+(n-t)*o(e)
c+=100*e+`%{${s(i,1-i)}}\n`}const u=c+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length
for(;n--;)t=(t<<5)-t^e.charCodeAt(n)
return t>>>0}(u)}_${a}`,f=ru(e),{stylesheet:h,rules:p}=Iu.get(f)||function(e,t){const n={stylesheet:ou(t),rules:{}}
return Iu.set(e,n),n}(f,e)
p[d]||(p[d]=!0,h.insertRule(`@keyframes ${d} ${u}`,h.cssRules.length))
const g=e.style.animation||""
return e.style.animation=`${g?`${g}, `:""}${d} ${i}ms linear ${r}ms 1 both`,Ou+=1,d}function Mu(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-i.length
r&&(e.style.animation=i.join(", "),Ou-=r,Ou||eu((()=>{Ou||(Iu.forEach((e=>{const{ownerNode:t}=e.stylesheet
t&&au(t)})),Iu.clear())})))}function Au(e){Ru=e}function Nu(){if(!Ru)throw new Error("Function called outside component initialization")
return Ru}function ju(e){Nu().$$.on_mount.push(e)}function Du(e){Nu().$$.after_update.push(e)}function Bu(e){Nu().$$.on_destroy.push(e)}function Hu(){const e=Nu()
return(t,n,{cancelable:i=!1}={})=>{const r=e.$$.callbacks[t]
if(r){const o=Pu(t,n,{cancelable:i})
return r.slice().forEach((t=>{t.call(e,o)})),!o.defaultPrevented}return!0}}function qu(e,t){const n=e.$$.callbacks[t.type]
n&&n.slice().forEach((e=>e.call(this,t)))}const Uu=[],Gu=[]
let Wu=[]
const zu=[],Vu=Promise.resolve()
let Qu=!1
function Ju(){Qu||(Qu=!0,Vu.then(nd))}function Ku(){return Ju(),Vu}function Xu(e){Wu.push(e)}function Yu(e){zu.push(e)}const Zu=new Set
let ed,td=0
function nd(){if(0!==td)return
const e=Ru
do{try{for(;td<Uu.length;){const e=Uu[td]
td++,Au(e),id(e.$$)}}catch(e){throw Uu.length=0,td=0,e}for(Au(null),Uu.length=0,td=0;Gu.length;)Gu.pop()()
for(let e=0;e<Wu.length;e+=1){const t=Wu[e]
Zu.has(t)||(Zu.add(t),t())}Wu.length=0}while(Uu.length)
for(;zu.length;)zu.pop()()
Qu=!1,Zu.clear(),Au(e)}function id(e){if(null!==e.fragment){e.update(),Fc(e.before_update)
const t=e.dirty
e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Xu)}}function rd(e,t,n){e.dispatchEvent(Pu(`${t?"intro":"outro"}${n}`))}const od=new Set
let sd
function ad(){sd={r:0,c:[],p:sd}}function ld(){sd.r||Fc(sd.c),sd=sd.p}function cd(e,t){e&&e.i&&(od.delete(e),e.i(t))}function ud(e,t,n,i){if(e&&e.o){if(od.has(e))return
od.add(e),sd.c.push((()=>{od.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}else i&&i()}const dd={duration:0}
function fd(e,t,n,i){let r,o=t(e,n,{direction:"both"}),s=i?0:1,a=null,l=null,c=null
function u(){c&&Mu(e,c)}function d(e,t){const n=e.b-s
return t*=Math.abs(n),{a:s,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function f(t){const{delay:n=0,duration:i=300,easing:f=Lc,tick:h=Tc,css:p}=o||dd,g={start:Zc()+n,b:t}
t||(g.group=sd,sd.r+=1),"inert"in e&&(t?void 0!==r&&(e.inert=r):(r=e.inert,e.inert=!0)),a||l?l=g:(p&&(u(),c=Fu(e,s,t,i,n,f,p)),t&&h(0,1),a=d(g,i),Xu((()=>rd(e,t,"start"))),function(e){let t
0===tu.size&&eu(nu),new Promise((n=>{tu.add(t={c:e,f:n})}))}((t=>{if(l&&t>l.start&&(a=d(l,i),l=null,rd(e,a.b,"start"),p&&(u(),c=Fu(e,s,a.b,a.duration,0,f,o.css))),a)if(t>=a.end)h(s=a.b,1-s),rd(e,a.b,"end"),l||(a.b?u():--a.group.r||Fc(a.group.c)),a=null
else if(t>=a.start){const e=t-a.start
s=a.a+a.d*f(e/a.duration),h(s,1-s)}return!(!a&&!l)})))}return{run(e){Mc(o)?(ed||(ed=Promise.resolve(),ed.then((()=>{ed=null}))),ed).then((()=>{o=o({direction:e?"in":"out"}),f(e)})):f(e)},end(){u(),a=l=null}}}function hd(e,t){const n=t.token={}
function i(e,i,r,o){if(t.token!==n)return
t.resolved=o
let s=t.ctx
void 0!==r&&(s=s.slice(),s[r]=o)
const a=e&&(t.current=e)(s)
let l=!1
t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==i&&e&&(ad(),ud(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),ld())})):t.block.d(1),a.c(),cd(a,1),a.m(t.mount(),t.anchor),l=!0),t.block=a,t.blocks&&(t.blocks[i]=a),l&&nd()}if(!(r=e)||"object"!=typeof r&&"function"!=typeof r||"function"!=typeof r.then){if(t.current!==t.then)return i(t.then,1,t.value,e),!0
t.resolved=e}else{const n=Nu()
if(e.then((e=>{Au(n),i(t.then,1,t.value,e),Au(null)}),(e=>{if(Au(n),i(t.catch,2,t.error,e),Au(null),!t.hasCatch)throw e})),t.current!==t.pending)return i(t.pending,0),!0}var r}function pd(e,t,n){const i=t.slice(),{resolved:r}=e
e.current===e.then&&(i[e.value]=r),e.current===e.catch&&(i[e.error]=r),e.block.p(i,n)}function gd(e){return void 0!==e?.length?e:Array.from(e)}function vd(e,t){e.d(1),t.delete(e.key)}function _d(e,t){ud(e,1,1,(()=>{t.delete(e.key)}))}function md(e,t,n,i,r,o,s,a,l,c,u,d){let f=e.length,h=o.length,p=f
const g={}
for(;p--;)g[e[p].key]=p
const v=[],_=new Map,m=new Map,b=[]
for(p=h;p--;){const e=d(r,o,p),i=n(e)
let a=s.get(i)
a?b.push((()=>a.p(e,t))):(a=c(i,e),a.c()),_.set(i,v[p]=a),i in g&&m.set(i,Math.abs(p-g[i]))}const y=new Set,w=new Set
function k(e){cd(e,1),e.m(a,u),s.set(e.key,e),u=e.first,h--}for(;f&&h;){const t=v[h-1],n=e[f-1],i=t.key,r=n.key
t===n?(u=t.first,f--,h--):_.has(r)?!s.has(i)||y.has(i)?k(t):w.has(r)?f--:m.get(i)>m.get(r)?(w.add(i),k(t)):(y.add(r),f--):(l(n,s),f--)}for(;f--;){const t=e[f]
_.has(t.key)||l(t,s)}for(;h;)k(v[h-1])
return Fc(b),v}function bd(e,t,n){const i=e.$$.props[t]
void 0!==i&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function yd(e){e&&e.c()}function wd(e,t,n){const{fragment:i,after_update:r}=e.$$
i&&i.m(t,n),Xu((()=>{const t=e.$$.on_mount.map(Rc).filter(Mc)
e.$$.on_destroy?e.$$.on_destroy.push(...t):Fc(t),e.$$.on_mount=[]})),r.forEach(Xu)}function kd(e,t){const n=e.$$
null!==n.fragment&&(!function(e){const t=[],n=[]
Wu.forEach((i=>-1===e.indexOf(i)?t.push(i):n.push(i))),n.forEach((e=>e())),Wu=t}(n.after_update),Fc(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Sd(e,t,n,i,r,o,s=null,a=[-1]){const l=Ru
Au(e)
const c=e.$$={fragment:null,ctx:[],props:o,update:Tc,not_equal:r,bound:Oc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:Oc(),dirty:a,skip_bound:!1,root:t.target||l.$$.root}
s&&s(c.root)
let u=!1
if(c.ctx=n?n(e,t.props||{},((t,n,...i)=>{const o=i.length?i[0]:n
return c.ctx&&r(c.ctx[t],c.ctx[t]=o)&&(!c.skip_bound&&c.bound[t]&&c.bound[t](o),u&&function(e,t){-1===e.$$.dirty[0]&&(Uu.push(e),Ju(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n})):[],c.update(),u=!0,Fc(c.before_update),c.fragment=!!i&&i(c.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target)
c.fragment&&c.fragment.l(e),e.forEach(au)}else c.fragment&&c.fragment.c()
t.intro&&cd(e.$$.fragment),wd(e,t.target,t.anchor),nd()}Au(l)}class xd{$$=void 0
$$set=void 0
$destroy(){kd(this,1),this.$destroy=Tc}$on(e,t){if(!Mc(t))return Tc
const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[])
return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t
this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ed=[]
function $d(e,t=Tc){let n
const i=new Set
function r(t){if(Ac(e,t)&&(e=t,n)){const t=!Ed.length
for(const t of i)t[1](),Ed.push(t,e)
if(t){for(let e=0;e<Ed.length;e+=2)Ed[e][0](Ed[e+1])
Ed.length=0}}}function o(t){r(t(e))}return{set:r,update:o,subscribe:function(s,a=Tc){const l=[s,a]
return i.add(l),1===i.size&&(n=t(r,o)||Tc),s(e),()=>{i.delete(l),0===i.size&&n&&(n(),n=null)}}}}function Cd(e,t,n){const i=!Array.isArray(e),r=i?[e]:e
if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const o=t.length<2
return s=(e,n)=>{let s=!1
const a=[]
let l=0,c=Tc
const u=()=>{if(l)return
c()
const r=t(i?a[0]:a,e,n)
o?e(r):c=Mc(r)?r:Tc},d=r.map(((e,t)=>Dc(e,(e=>{a[t]=e,l&=~(1<<t),s&&u()}),(()=>{l|=1<<t}))))
return s=!0,u(),function(){Fc(d),c(),s=!1}},{subscribe:$d(n,s).subscribe}
var s}const Pd=$d("")
function Td(e){const t=e-1
return t*t*t+1}function Ld(e,{delay:t=0,duration:n=400,easing:i=Lc}={}){const r=+getComputedStyle(e).opacity
return{delay:t,duration:n,easing:i,css:e=>"opacity: "+e*r}}function Id(e,{delay:t=0,duration:n=400,easing:i=Td,x:r=0,y:o=0,opacity:s=0}={}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-s),[d,f]=Xc(r),[h,p]=Xc(o)
return{delay:t,duration:n,easing:i,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*d}${f}, ${(1-e)*h}${p});\n\t\t\topacity: ${l-u*t}`}}function Rd(e,{delay:t=0,duration:n=400,easing:i=Td,axis:r="y"}={}){const o=getComputedStyle(e),s=+o.opacity,a="y"===r?"height":"width",l=parseFloat(o[a]),c="y"===r?["top","bottom"]:["left","right"],u=c.map((e=>`${e[0].toUpperCase()}${e.slice(1)}`)),d=parseFloat(o[`padding${u[0]}`]),f=parseFloat(o[`padding${u[1]}`]),h=parseFloat(o[`margin${u[0]}`]),p=parseFloat(o[`margin${u[1]}`]),g=parseFloat(o[`border${u[0]}Width`]),v=parseFloat(o[`border${u[1]}Width`])
return{delay:t,duration:n,easing:i,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*s};${a}: ${e*l}px;padding-${c[0]}: ${e*d}px;padding-${c[1]}: ${e*f}px;margin-${c[0]}: ${e*h}px;margin-${c[1]}: ${e*p}px;border-${c[0]}-width: ${e*g}px;border-${c[1]}-width: ${e*v}px;`}}function Od(e){let t,n,i,r,o,s,a
return{c(){t=cu("div"),n=cu("p"),i=uu(e[0]),vu(n,"class","svelte-1c416no"),vu(t,"role","alert"),vu(t,"class","svelte-1c416no"),wu(t,"transform",e[2])},m(r,l){su(r,t,l),iu(t,n),iu(n,i),o=!0,s||(a=hu(t,"click",e[4]),s=!0)},p(e,n){(!o||1&n)&&bu(i,e[0]),4&n&&wu(t,"transform",e[2])},i(e){o||(e&&Xu((()=>{o&&(r||(r=fd(t,Id,{delay:250,duration:300,x:0,y:-100,opacity:.5},!0)),r.run(1))})),o=!0)},o(e){e&&(r||(r=fd(t,Id,{delay:250,duration:300,x:0,y:-100,opacity:.5},!1)),r.run(0)),o=!1},d(e){e&&au(t),e&&r&&r.end(),s=!1,a()}}}function Fd(e){let t,n=e[1]&&Od(e)
return{c(){n&&n.c(),t=fu()},m(e,i){n&&n.m(e,i),su(e,t,i)},p(e,[i]){e[1]?n?(n.p(e,i),2&i&&cd(n,1)):(n=Od(e),n.c(),cd(n,1),n.m(t.parentNode,t)):n&&(ad(),ud(n,1,1,(()=>{n=null})),ld())},i(e){cd(n)},o(e){ud(n)},d(e){e&&au(t),n&&n.d(e)}}}function Md(e,t,n){let i
Hc(e,Pd,(e=>n(0,i=e)))
let{ms:r=3e3}=t,o=!1,s=0,a=""
const l=(e,t)=>{clearTimeout(s),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
n(2,a=`translate(${t}px, ${e.offsetTop}px)`),n(1,o=!0)}(),t>0&&(s=setTimeout((()=>{var e
n(1,o=!1),i="",e=i,Pd.set(e)}),t))):n(1,o=!1)}
Bu((()=>clearTimeout(s)))
return e.$$set=e=>{"ms"in e&&n(3,r=e.ms)},e.$$.update=()=>{9&e.$$.dirty&&l(i,r)},[i,o,a,r,()=>{n(1,o=!1)}]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4")
class Ad extends xd{constructor(e){super(),Sd(this,e,Md,Fd,Ac,{ms:3})}}let Nd
function jd(e){e&&(!function(){if(!Nd)Nd=!0,new Ad({target:document.body})}(),Pd.set(e))}function Dd(e,t){return Array.from(e,t)}function Bd(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function Hd(e,t){return Dd(Bd(e,t))}function qd(e){return e.trim()}function Ud(e){const t=n(e)
if(Bl(t))return qd(t)}function Gd(e,t){return Ud(t).includes(e)}function Wd(e,...t){return(...n)=>e(...t,...n)}let zd=0,Vd=0,Qd=0
function Jd(){return zd||(zd=t("pCL")),zd}function Kd(){return Vd||(Vd=t("pCC")),Vd}function Xd(){const e=Hd("a",Jd()).filter(function(e){return Wd(Gd,e)}("message"))
e.length&&async function(){const e=new Audio(jl("defaultMessageSound"))
try{await e.play()}catch(e){jd("Message Sound Not Allowed")}}()}function Yd(e,t,n,i){var r
lc(e,t,n,{once:!0,...(r=i,Dl(r)?{capture:r}:r)})}let Zd=0,ef=0,tf=0,nf=0,rf=0,of=0
function sf(e){ef=e.clientX,tf=e.clientY}function af(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(Zd,null).transform)
nf=e[0]-ef,rf=e[1]-tf}function lf(e){e.clientX===ef&&e.clientY===tf||(Zd.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+nf).toString()}, ${(e.clientY+rf).toString()})`,sf(e))}function cf(e){return function(e){const t=performance.now()
t-of>16&&(lf(e),of=t)}(e),e.preventDefault(),!1}function uf(e){return lf(e),function(e,t,n,i){e instanceof EventTarget&&e.removeEventListener(t,n,i)}(document.body,"dragover",cf),e.preventDefault(),!1}function df(e,t){!function(e,t){Zd=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),sf(t),af(),of=0,t.dataTransfer.setData("text/plain",""),lc(document.body,"dragover",cf),Yd(document.body,"drop",uf)}function ff(e,t){e.draggable=!0,lc(e,"dragstart",Wd(df,t))}function hf(e){return String(e).replaceAll(" ","_")}const pf={}
function gf(e,t,n){if(!e)return
const i=function(e,t){let n=hf(e)
return t&&(n+=`__${hf(t)}`),n}(e,t),r=function(e,t){let n=e
return t&&(n+=`__${hf(t)}`),n}(i,n)
pf[r]||(pf[r]=!0,$s(i,function(e){return e?{eventLabel:e}:null}(n)))}let vf=0
function _f(e){const t=l(/\sguildId: (?<id>\d{1,6}),/,n(e))
t&&(vf=Number(t))}function mf(){return vf||Hd("script",document.body).forEach(_f),vf}function bf(e){return Object.entries(e)}function yf(e,t,[n,i]){zl(i)&&null!==i?e(t[n],i):t[n]=i}function wf(e,t){bf(t).forEach(Wd(yf,wf,e))}function kf(e,t){const n=document.createElement(e)
return t&&wf(n,t),n}function Sf(e){return kf("div",e)}function xf(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function Ef(e,t){return Dd(xf(e,t))}function $f(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function Cf(e,t){t instanceof Element&&(t.innerHTML=String(e))}const Pf={id:"content",style:{display:"none"}},Tf={width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}
function Lf(e){let n=t("content")
n?Cf("",n):(n=Sf(Pf),$f(document.body,n)),$(n).dialog(Tf),Ef("ui-dialog-titlebar-close").forEach((e=>e.blur())),e(n)}async function If(e){(await e).default()}function Rf(){If(import("./buffLog-BttS0ira.js"))}function Of(){If(import("./combatLog-Ct8HHnlh.js"))}function Ff(){If(import("./creatureLog-CJnl6W4i.js"))}function Mf(){If(import("./fsboxlog-B6oHBCJG.js"))}function Af(){If(import("./guildLog-D5YGXV8A.js"))}function Nf(){If(import("./guildTracker-CSVaG6JA.js"))}async function jf(e){(await import("./injectAuctionSearch-uDZcOACg.js")).default(e)}async function Df(e){const{injectFindBuffs:t}=await import("./findBuffs-1AwwXFo1.js")
t(e)}async function Bf(e){const{injectFindOther:t}=await import("./findBuffs-1AwwXFo1.js")
t(e)}async function Hf(e){(await import("./injectOnlinePlayers-Be-SAZSZ.js")).default(e)}function qf(){If(import("./potReport-QgLZo95i.js"))}function Uf(){If(import("./quickExtract-EZAjqiSH.js"))}function Gf(){If(import("./quickLinksManager-eijaKIKZ.js"))}async function Wf(e){(await import("./quickWear-CF2TbwfX.js")).default(e)}function zf(){If(import("./recipeMgr-CGoBRhJ8.js"))}function Vf(){If(import("./reliclist-CMG9YgkV.js"))}function Qf(){If(import("./superelite-CSfryYgw.js"))}function Jf(e){return new Promise((t=>{setTimeout(t,e)}))}function Kf(e){lc(window,"beforeunload",(()=>e.abort()))}const Xf=900
let Yf=0
const Zf=5
let eh=0
async function th(){eh<Zf-$.active&&performance.now()-Yf>=Xf?(eh=Zf-$.active,Yf=performance.now()):await Jf(100)}async function nh(e,t=10){await async function(){for(;eh<1;)await th()
eh-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=Kf,$.ajax(t).fail(((e,t,n)=>{e.textStatus=t,e.errorThrown=n}))}(e)}catch(n){if(t&&n.status>500)return nh(e,t-1)
!function(e,t){if(![0,500,503].includes(t.status))throw new ac([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}function ih(e){return wf(e,{url:sa,data:{no_mobile:1}}),nh(e)}async function rh(e){return Vl(await ih({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function oh(e){return rh({cmd:"export",...e})}function sh(){return oh({inc_tagged:"1",subcmd:"guild_store"})}function ah(e){return kf("a",e)}function lh(e){e instanceof Element&&e.click()}function ch(e,t){const n=URL.createObjectURL(e),i=ah({download:t,href:n,style:{display:"none"}})
$f(document.body,i),lh(i),document.body.removeChild(i),setTimeout((()=>{URL.revokeObjectURL(n)}),0)}async function uh(e,t){return Vl(await nh({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function dh(e){return uh(e,{method:"POST"})}function fh(e,t){const n=[]
for(let i=0;i<t.length;i+=e)n.push(t.slice(i,i+e))
return n}let hh=null
function ph(){const e=t("holdtext")
if(e&&!hh){const t=l(/fallensword.com\/\?ref=(?<id>\d+)/,n(e))
t&&(hh=Number(t))}return hh}const gh=(e,t)=>t.some((t=>e instanceof t))
let vh,_h
const mh=new WeakMap,bh=new WeakMap,yh=new WeakMap
let wh={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return mh.get(e)
if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Eh(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}
function kh(e){wh=e(wh)}function Sh(e){return(_h||(_h=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply($h(this),t),Eh(this.request)}:function(...t){return Eh(e.apply($h(this),t))}}function xh(e){return"function"==typeof e?Sh(e):(e instanceof IDBTransaction&&function(e){if(mh.has(e))return
const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()}
e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)}))
mh.set(e,t)}(e),gh(e,vh||(vh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,wh):e)}function Eh(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{t(Eh(e.result)),i()},o=()=>{n(e.error),i()}
e.addEventListener("success",r),e.addEventListener("error",o)}))
return yh.set(t,e),t}(e)
if(bh.has(e))return bh.get(e)
const t=xh(e)
return t!==e&&(bh.set(e,t),yh.set(t,e)),t}const $h=e=>yh.get(e)
function Ch(e,t,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const s=indexedDB.open(e,t),a=Eh(s)
return i&&s.addEventListener("upgradeneeded",(e=>{i(Eh(s.result),e.oldVersion,e.newVersion,Eh(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{o&&e.addEventListener("close",(()=>o())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const Ph=["get","getKey","getAll","getAllKeys","count"],Th=["put","add","delete","clear"],Lh=new Map
function Ih(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return
if(Lh.get(t))return Lh.get(t)
const n=t.replace(/FromIndex$/,""),i=t!==n,r=Th.includes(n)
if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Ph.includes(n))return
const o=async function(e,...t){const o=this.transaction(e,r?"readwrite":"readonly")
let s=o.store
return i&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),r&&o.done]))[0]}
return Lh.set(t,o),o}kh((e=>({...e,get:(t,n,i)=>Ih(t,n)||e.get(t,n,i),has:(t,n)=>!!Ih(t,n)||e.has(t,n)})))
const Rh=["continue","continuePrimaryKey","advance"],Oh={},Fh=new WeakMap,Mh=new WeakMap,Ah={get(e,t){if(!Rh.includes(t))return e[t]
let n=Oh[t]
return n||(n=Oh[t]=function(...e){Fh.set(this,Mh.get(this)[t](...e))}),n}}
async function*Nh(...e){let t=this
if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return
const n=new Proxy(t,Ah)
for(Mh.set(n,t),yh.set(n,$h(t));t;)yield n,t=await(Fh.get(n)||t.continue()),Fh.delete(n)}function jh(e,t){return t===Symbol.asyncIterator&&gh(e,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===t&&gh(e,[IDBIndex,IDBObjectStore])}kh((e=>({...e,get:(t,n,i)=>jh(t,n)?Nh:e.get(t,n,i),has:(t,n)=>jh(t,n)||e.has(t,n)})))
let Dh=Promise.resolve(),Bh=!1
function Hh(){return Bh||(Dh=Ch("keyval-store",1,{upgrade(e){e.createObjectStore("keyval")}}),Bh=!0),Dh}async function qh(e){try{return(await Hh()).get("keyval",e)}catch(e){Es(e)}}async function Uh(e,t){try{return(await Hh()).put("keyval",t,e)}catch(e){Es(e)}}async function Gh(e){try{return(await Hh()).delete("keyval",e)}catch(e){Es(e)}}const Wh=({folder_id:e})=>-2!==(e??-2),zh=({folder_id:e})=>-2===e,Vh=({player_id:e})=>-1!==(e??-1),Qh=({player_id:e})=>e,Jh=({player_id:e})=>-1===e,Kh=([e,t,n])=>fh(20,e).map((e=>[e,t,n])),Xh=e=>({inv_id:t})=>t===e.inv_id,Yh=(e,t)=>e.attributes.find((({id:e})=>e===t))?.value??0,Zh=(e,t)=>({...t,armor:Yh(e,2),attack:Yh(e,0),damage:Yh(e,4),defense:Yh(e,1),hp:Yh(e,3),set_name:e.set_name??""}),ep=(e,t)=>t.forge||t.stats?.set_name,tp=e=>e?.s?e.r.items:[],np=e=>[[e.filter(Wh),ph,0],[e.filter(zh),ph,1],[e.filter(Vh),Qh,7],[e.filter(Jh),ph,4]].flatMap(Kh)
function ip(e){return function(){const t=this.data(),n=e.find(Xh(t))
n?.attributes&&(t.stats=Zh(n,t.stats),this.invalidate())}}const rp=async()=>await qh(`fsh_${dc.subcmd}_cache`)??[],op=e=>Uh(`fsh_${dc.subcmd}_cache`,e),sp=e=>t=>e.every((e=>e.inv_id!==t.inv_id))
async function ap(e,t,n){const i=await(r={item_id:e.map((({item_id:e})=>e)),inv_id:e.map((({inv_id:e})=>e)),p:e.map(t),t:e.map((()=>n))},dh({cmd:"fetchitem",compare:0,...r}))
var r
return i?.s&&(i.r.items=((e,t)=>t.map(((t,n)=>({...t,inv_id:e[n].inv_id}))))(e,i.r.items),await async function(e){const t=(await rp()).filter(sp(e))
await op(t.concat(e))}(i.r.items)),i}const lp=(e,t)=>{return t.filter((n=Dd(e.data()),e=>n.some((t=>e.inv_id===t.inv_id))))
var n}
async function cp(e){const t=e.rows(ep),n=await async function(e){const t=await rp(),n=lp(e,t)
return await op(n),n}(t)
t.every(ip(n))}async function up(e){const t=new DataTable(e)
await cp(t),t.draw()}const dp=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],fp=e=>{return[...dp(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??"",t?.set_attack??"",t?.set_defense??"",t?.set_armor??"",t?.set_hp??"",t?.set_damage??""]),e.cached].join(",")
var t}
function hp(e){return()=>Lf(e)}var pp=[{section:"Character",menu:[{label:"Buff Log",fn:Rf},{label:"Combat Log",fn:Of},{label:"Creature Log",fn:Ff},{label:"Recipe Manager",fn:zf},{label:"Quick Links",fn:Gf},{label:"Inventory Manager",href:`${wa}invmanagernew`}]},{section:"Actions",menu:[{label:"Find Buffs",fn:hp(Df)},{label:"Find Other",fn:hp(Bf)},{label:"Online Players",fn:hp(Hf)},{label:"AH Quick Search",fn:hp(jf)}]},...mf()?[{section:"Guild",menu:[{label:"Guild Inventory",href:`${wa}guildinvmgr`},{label:"New Guild Log",fn:Af},{label:"Merc Hunter",fn:function(){If(import("./mercs-DC0-ayRD.js"))}},{label:"Pot Report",fn:qf},{label:"Guild Tracker",fn:Nf}]}]:[],{section:"Extra",menu:[{label:"Quick Extract",fn:Uf},{label:"Quick Wear",fn:hp(Wf)},{label:"FS Box Log",fn:Mf},{label:"SE Tracker",fn:Qf}]},...jl("betaOptIn")&&mf()?[{section:"Beta Features",menu:[{label:"Relic List",fn:Vf,beta:!0},{label:"GS Export",fn:async function(){if(!mf())return
const e=await sh(),t=await qh("fsh_guildinvmgr_cache")??[],n=e.items.map((e=>t=>{const n=e.find((({inv_id:e})=>e===t.inv_id))
return n?.attributes?{...t,stats:{...t.stats,armor:Yh(n,2),attack:Yh(n,0),damage:Yh(n,4),defense:Yh(n,1),hp:Yh(n,3),set_name:n.set_name??"",...n.set_name&&{set_armor:Yh(n.set_bonuses,2)},...n.set_name&&{set_attack:Yh(n.set_bonuses,0)},...n.set_name&&{set_damage:Yh(n.set_bonuses,4)},...n.set_name&&{set_defense:Yh(n.set_bonuses,1)},...n.set_name&&{set_hp:Yh(n.set_bonuses,3)}},cached:!0}:{...t,cached:!1}})(t))
var i
ch((i=`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name,set_attack,set_defense,set_armor,set_hp,set_damage,cached\n${(e=>e.map(fp).join("\n"))(n)}\n`,new Blob([i],{type:"text/csv"})),"gs_export.csv")},beta:!0},{label:"Who's Got What",fn:function(){If(import("./whosGotWhat-BSsYLq3w.js"))},beta:!0}]}]:[],{section:"FSH developer quick links",menu:[{playerId:1963510,playerName:"PointyHair"},{playerId:1674838,playerName:"Lusterless"}]}]
function gp(e,t,n){const i=e.slice()
return i[7]=t[n],i}function vp(e,t,n){const i=e.slice()
return i[10]=t[n],i}function _p(e){let t,n,i,r,o
function s(){return e[5](e[10])}return{c(){t=cu("button"),t.textContent="PM",n=du(),i=cu("a"),i.textContent=`${e[10].playerName}`,vu(t,"type","button"),vu(t,"class","helperDevBtn svelte-8sy7i5"),vu(i,"href",va+"menuItem.playerId"),vu(i,"class","svelte-8sy7i5")},m(e,a){su(e,t,a),su(e,n,a),su(e,i,a),r||(o=hu(t,"click",s),r=!0)},p(t,n){e=t},d(e){e&&(au(t),au(n),au(i)),r=!1,o()}}}function mp(e){let t,n,i
function r(){return e[4](e[10])}return{c(){t=cu("a"),t.textContent=`${e[10].label}`,vu(t,"href",e[10].href),vu(t,"class","svelte-8sy7i5")},m(e,o){su(e,t,o),n||(i=hu(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&au(t),n=!1,i()}}}function bp(e){let t,n,i
function r(){return e[3](e[10])}return{c(){t=cu("button"),t.textContent=`${e[10].label}`,vu(t,"type","button"),vu(t,"class","svelte-8sy7i5")},m(e,o){su(e,t,o),n||(i=hu(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&au(t),n=!1,i()}}}function yp(e){let t,n
let i=function(e,t){return e[10].fn?bp:e[10].href?mp:e[10].playerName?_p:void 0}(e),r=i&&i(e),o=e[10].beta&&function(e){let t
return{c(){t=cu("sup"),t.textContent="beta",vu(t,"class","fshRed")},m(e,n){su(e,t,n)},d(e){e&&au(t)}}}()
return{c(){t=cu("li"),r&&r.c(),n=du(),o&&o.c()},m(e,i){su(e,t,i),r&&r.m(t,null),iu(t,n),o&&o.m(t,null)},p(e,t){r&&r.p(e,t)},d(e){e&&au(t),r&&r.d(),o&&o.d()}}}function wp(e){let t,n,i,r,o=gd(e[7].menu),s=[]
for(let t=0;t<o.length;t+=1)s[t]=yp(vp(e,o,t))
return{c(){t=cu("h2"),t.textContent=`${e[7].section}`,n=du(),i=cu("ul")
for(let e=0;e<s.length;e+=1)s[e].c()
r=du(),vu(t,"class","svelte-8sy7i5")},m(e,o){su(e,t,o),su(e,n,o),su(e,i,o)
for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(i,null)
iu(i,r)},p(e,t){if(7&t){let n
for(o=gd(e[7].menu),n=0;n<o.length;n+=1){const a=vp(e,o,n)
s[n]?s[n].p(a,t):(s[n]=yp(a),s[n].c(),s[n].m(i,r))}for(;n<s.length;n+=1)s[n].d(1)
s.length=o.length}},d(e){e&&(au(t),au(n),au(i)),lu(s,e)}}}function kp(e){let t,n=gd(pp),i=[]
for(let t=0;t<n.length;t+=1)i[t]=wp(gp(e,n,t))
return{c(){for(let e=0;e<i.length;e+=1)i[e].c()
t=fu()},m(e,n){for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,n)
su(e,t,n)},p(e,[r]){if(7&r){let o
for(n=gd(pp),o=0;o<n.length;o+=1){const s=gp(e,n,o)
i[o]?i[o].p(s,r):(i[o]=wp(s),i[o].c(),i[o].m(t.parentNode,t))}for(;o<i.length;o+=1)i[o].d(1)
i.length=n.length}},i:Tc,o:Tc,d(e){e&&au(t),lu(i,e)}}}function Sp(e){const t=Hu()
function n(e){gf("helperMenu",e)}function i(e,i){Wl(i)&&(n(e),t("toggle"),i())}function r(e){t("toggle"),n("sendMsg"),window.openQuickMsgDialog(e)}return[n,i,r,e=>i(e.label,e.fn),e=>n(e.label),e=>r(e.playerName)]}class xp extends xd{constructor(e){super(),Sd(this,e,Sp,kp,Ac,{})}}function Ep(e){let t,n,i,r
return n=new xp({}),n.$on("toggle",e[4]),{c(){t=cu("div"),yd(n.$$.fragment),vu(t,"class","modal svelte-gt76l6")},m(e,i){su(e,t,i),wd(n,t,null),r=!0},p:Tc,i(e){r||(cd(n.$$.fragment,e),e&&Xu((()=>{r&&(i||(i=fd(t,Ld,{duration:100},!0)),i.run(1))})),r=!0)},o(e){ud(n.$$.fragment,e),e&&(i||(i=fd(t,Ld,{duration:100},!1)),i.run(0)),r=!1},d(e){e&&au(t),kd(n),e&&i&&i.end()}}}function $p(e){let t,n,i,r,o,s,a=e[1]&&Ep(e)
return{c(){t=cu("div"),n=cu("button"),n.textContent="Helper Menu",i=du(),a&&a.c(),vu(n,"type","button"),vu(n,"class","toggle svelte-gt76l6"),Cu(n,"helper-menu-move",e[3]),vu(t,"class","helper-menu svelte-gt76l6"),Cu(t,"helper-menu-fixed",e[2])},m(l,c){su(l,t,c),iu(t,n),iu(t,i),a&&a.m(t,null),e[5](t),r=!0,o||(s=hu(n,"click",e[4]),o=!0)},p(e,[n]){e[1]?a?(a.p(e,n),2&n&&cd(a,1)):(a=Ep(e),a.c(),cd(a,1),a.m(t,null)):a&&(ad(),ud(a,1,1,(()=>{a=null})),ld())},i(e){r||(cd(a),r=!0)},o(e){ud(a),r=!1},d(n){n&&au(t),a&&a.d(),e[5](null),o=!1,s()}}}function Cp(e,t,n){const i=jl("keepHelperMenuOnScreen"),r=jl("draggableHelperMenu")
let o=0
ju((()=>{r&&ff(o)}))
let s=!1
return[o,s,i,r,function(){n(1,s=!s)},function(e){Gu[e?"unshift":"push"]((()=>{o=e,n(0,o)}))}]}class Pp extends xd{constructor(e){super(),Sd(this,e,Cp,$p,Ac,{})}}function Tp(){const e=Ql(".mainbody")
e&&function(e,t){new Pp({target:t.parentElement,props:{props:e}})}({},e)}function Lp(e){return uh(e,{method:"GET"})}function Ip(e){return Lp({cmd:"trade",...e})}function Rp(e,t){return Ip({subcmd:"sendgold",xc:window.ajaxXC,target_username:e,gold_amount:t})}function Op(e,t,...n){return e(...n)}function Fp(e){return(new DOMParser).parseFromString(e,"text/html")}function Mp(e){return ih({data:e})}async function Ap(e){const t=await Mp(e)
if(t)return Fp(t)}function Np(e){const n=t("info-msg",e)
if(n){const e=n.innerHTML
return e?e.replace(/<br.*/,""):""}}async function jp(e,t){const n=await Ap(e)
if(!n)return{s:!1}
const i=Np(n)
return i===t?{s:!0}:{s:!1,e:{message:i}}}let Dp=0
const Bp=()=>Dp
function Hp(){Dp=jl("sendGoldonWorld")}async function qp(){if(!Bp())return
gf("NewMap","doSendGold")
const e=await function(e,t){return Op(Rp,0,e,t)}($("#HelperSendTo").html(),$("#HelperSendAmt").html().replace(/[^\d]/g,""))
e.s&&(Ul("currentGoldSentTotal",parseInt(jl("currentGoldSentTotal"),10)+parseInt(jl("goldAmount"),10)),GameData.fetch(ol))}function Up(e){window.location=e}function Gp(e){jl("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function Wp(e){gf("keyHandler",e)}function zp(e){return e?.toLowerCase?.()}function Vp(e,t){return zp(e)<zp(t)?-1:zp(e)>zp(t)?1:0}function Qp(e){return Lp({cmd:"profile",...e})}async function Jp(){const e=await Qp({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort(((e,t)=>Vp(e.name,t.name)))}:e}function Kp(){return Op(Jp)}const Xp=[e=>e?.s,(e,t)=>e.r?.length>t]
async function Yp(e){const t=await Kp()
if(((e,t)=>Xp.every((n=>n(t,e))))(e,t)){Wp("changeCombatSet")
const n=t.r[e].id
Gp("2"),Up(`${ga+ca}managecombatset&submit=Use&combatSetId=${n}`)}}function Zp(e,n){t("worldPage")||(Wp(e),Up(n))}function eg(){dc.enableMaxGroupSizeToJoin?Up(Ia):Up(La)}function tg(){Wp("logPage"),Gp("2"),Up(ha)}function ng(e){const t=Ql(`#pCC input[value="${e}"]`)
t&&(Wp("movePage"),lh(t))}const ig=[["!",Yp,0],["@",Yp,1],['"',Yp,1],["#",Yp,2],["£",Yp,2],["$",Yp,3],["%",Yp,4],["^",Yp,5],["&",Yp,6],["*",Yp,7],["(",Yp,8],["0",function(){Zp("toWorld",Ra)}],["<",ng,"<"],[">",ng,">"],["G",function(){Wp("createGroup"),Gp("4"),Up(`${Ca}create`)}],["L",tg],["b",function(){Wp("backpack"),Gp("2"),Up(_a)}],["g",function(){Wp("gotoGuild"),Gp("4"),Up(`${xa}manage`)}],["j",function(){Wp("joinAllGroup"),Gp("4"),eg()}],["l",tg],["p",function(){Wp("profile"),Gp("2"),Up(ga)}],["r",function(){Zp("doRepair",`${Ma+ca}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in dc&&!dc.dialogIsClosed()||(Wp("insertQuickWear"),Lf(Wf))}],["y",qp]]
const rg=[e=>["HTML","BODY"].every((t=>e.target.tagName!==t)),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function og(e){var t;(t=e,rg.some((e=>e(t))))||function(e){const t=ig.find((([t])=>e===t))
t&&t[1](t[2])}(e.key)}function sg(){lc(document,"keyup",og)}function ag(e,t){return Ud(t)===e}function lg(e){return Wd(ag,e)}function cg(e,t,n){lc(e,"click",t,n)}function ug(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function dg(e,t){return Dd(ug(e,t))}function fg(e){cg(e,(()=>{gf("chrome","Game Help link")})),Cf(`<a href="${la}settings">Game Help</a>`,e)}function hg(){dg("#pCR h3").filter(lg("Game Help")).forEach(fg)}function pg(e){dc[e]=jl(e)}function gg(e,t){if(t instanceof Element)return t.closest(e)}function vg(e){e?.classList&&e.classList.add("fshHide")}function _g(e){const n=gg("a",e.target)
n?.getAttribute("href")===Ea&&(gf("useNewGuildLog","Alter Href"),e.preventDefault(),Af(),vg(t("notification-guild-log")))}function mg(){return dc.huntingMode&&window.realmKeyHandler}function bg(e){e.forEach((e=>$c(3,e)))}function yg(){return Mp({cmd:"guild",subcmd:"manage"})}function wg(e){return gg("tr",e)}function kg(e,t){return a(e,t)?.groups??{}}function Sg(e){const{d:t,h:n,m:i,s:r}=kg(ea,e),o=Number(t),s=Number(n)+24*o,a=Number(i)+60*s,l=Number(r)+60*a
return{day:t,days:o,hour:n,hours:s,min:i,mins:a,sec:r,secs:l,timestamp:Bs()-l}}function xg(e,t){if(t){const n=new Set
return e.filter((e=>n.has(e[t])?0:n.add(e[t])))}return Dd(new Set(e))}const Eg=e=>Number(Ud(wg(e)?.cells[4])?.replaceAll(",","")),$g=e=>Number(l(ta,e.href)),Cg=e=>Ud(wg(e)?.cells[3]),Pg=e=>Number(l(ia,e))
function Tg(e){return{guild_xp:Eg(e),id:$g(e),name:Ud(e),rank:Cg(e)}}function Lg(e){const{stam:t,max:n}=kg(na,e)
return{current_stamina:Number(t),last_activity:Sg(e).timestamp,level:Number(l(/Level:.+?(?<l>\d+)/,e)),max_stamina:Number(n),vl:Pg(e)}}function Ig(e){return{guild_id:mf(),image_version:0,xp:-1,...Tg(e),...Lg(e.dataset.tipped)}}function Rg(e,t,n){return{id:n,members:e.filter((e=>e.rank===t.rank)),name:t.rank,permissions:0,tax:-1}}async function Og(){const e=Fp(await yg()).getElementById("pCC")
if(!e)return{e:{code:0,message:"Failure"},s:!1}
const t=dg(Il,e).map(Ig)
return{r:xg(t,"rank").map(Wd(Rg,t)),s:!0}}function Fg(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function Mg(){return Wl(window.jQuery)}function Ag(e){return Object.keys(e)}function Ng(e){return Math.floor(Math.max(0,Bs()-e)/86400)}function jg(e){return Number.isNaN(e)}const Dg=0,Bg=1,Hg=2,qg=3,Ug=4,Gg=5,Wg=6,zg="fsh_guildActivity"
function Vg(e){return oh({guild_id:e,subcmd:"guild_members"})}function Qg(e){return Promise.all(e)}function Jg(e){let t=e.toString()
return e<10&&(t=`0${t}`),t}function Kg(e){return`${e[0]}-${e[1]}-${e[2]} ${e[3]}:${e[4]}:${e[5]}`}function Xg(e){return"[object Date]"===Object.prototype.toString.call(e)&&!jg(e.getTime())}function Yg(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(Jg)}(e))}function Zg(e){if(Xg(e))return Kg(Yg(e))}async function ev(){return await qh(zg)??{lastUpdate:0,members:{}}}const tv=e=>Zg(new Date(1e3*e)),nv=e=>[e[0],e[1],e[2],e[3],tv(e[4]),e[5],e[6]]
function iv(e){const{lastUpdate:t,members:n}=e
var i
return`Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n${bf(n).flatMap((i=tv(t),([e,t])=>t.map(nv).map((t=>[i,e,...t].join(","))))).join("\n")}`}const rv=e=>`${e[0]}${e[1]}${e[2]}${e[3]}${e[4]}${e[5]}`,ov=[e=>e.getFullYear().toString(),e=>e.getMonth()+1,e=>e.getDate(),e=>e.getHours(),e=>e.getMinutes(),e=>e.getSeconds()],sv=e=>t=>t(e)
async function av(e,t){const n=await ev()
if(!n.lastUpdate||!n.members)return
const i=e(n)
ch(new Blob([i],{type:t}),`${rv(ov.map(sv(new Date)).map(Jg))}_GuildTracker.${t.split("/")[1]}`)}async function lv(e){const t=await ev(),n={lastUpdate:t.lastUpdate,members:Fg(bf(t.members).filter((([t])=>t!==e)))}
Uh(zg,n)}async function cv(e){const t=await ev(),n={lastUpdate:t.lastUpdate,members:Fg(bf(t.members).map((([t,n])=>[t,n.filter((t=>t[4]>e))])))}
Uh(zg,n)}async function uv(){const[e,t]=await Qg([ev(),Vg(mf())]),n=t.map((({username:e})=>e))
return Ag(e.members).filter((e=>t=>!e.find((e=>e===t)))(n)).sort(Vp)}const dv=e=>[e.name,[Ng(e.last_activity),e.current_stamina,e.level,e.max_stamina,Bs(),e.vl,e.guild_xp]],fv=e=>e.members.map(dv),hv=e=>e.r.flatMap(fv),pv=[e=>!e,(e,t)=>e[1]!==t[1],(e,t)=>e[2]!==t[2],(e,t)=>e[3]>t[3],(e,t)=>e[5]!==t[5],(e,t)=>e[6]!==t[6]],gv=e=>!e.some(Gs),vv=e=>!e.some(jg),_v=([,e])=>e.length,mv=([e,t])=>[e,t.filter(gv).filter(vv)],bv=e=>bf(e.members||{}).map(mv).filter(_v),yv=(e,t)=>e[4]>t[4]?e:t,wv=([e,t])=>[e,t.reduce(yv)],kv=([e,t])=>[e,[t]],Sv=e=>([t])=>!e[t]||Bs()-e[t][4]>=86100,xv=(e,t,n)=>{return((e,t,n)=>({lastUpdate:Bs(),members:Fg(Ag({...e,...t,...n}).map((i=>[i,[...e[i]??[],...t[i]??[],...n[i]??[]]])))}))(Fg(e.map((e=>([t,n])=>[t,n.filter((n=>n[4]!==e[t][4]))])(t))),Fg(bf(t).filter((i=n,([e,t])=>pv.some((n=>n(i[e]?.[0],t))))).map(kv)),n)
var i}
function Ev(e,t){const n=bv(e),i=Fg(n.map(wv)),r=hv(t).filter(Sv(i))
r.length?function(e,t,n){e&&t&&n&&Uh(zg,xv(t,n,Fg(e.map(kv))))}(r,n,i):function(e){e&&Uh(zg,{lastUpdate:Bs(),members:Fg(e)})}(n)}const $v=e=>Bs()>hc(e.lastUpdate,0)+300
function Cv(e){$v(e)&&async function(e){const t=await Og()
t.s&&Ev(e,t)}(e)}function Pv(){return!Mg()}function Tv(e){return kf("li",e)}function Lv(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function Iv(e,t){if(t instanceof Node&&t.parentNode instanceof Node)return function(e,t){return t.nextSibling instanceof Node?Lv(e,t.nextSibling):$f(t.parentNode,e)}(e,t)}const Rv=["Buff Log","Combat Logs","Creature Logs","Quick Links","Recipe Manager","New Guild Log"]
function Ov(e,t){gf("accordion",e),Rv.includes(e)?t():Lf(t)}function Fv(e,t,n,i){const r=function(e,t,n){const i=Tv({className:`nav-level-${e}`}),r=ah({className:"nav-link fshPoint",textContent:t})
return $f(i,r),Iv(i,n.parentNode),r}(e,t,i)
Wl(n)?cg(r,Wd(Ov,t,n)):(r.href=n,cg(r,(()=>gf("accordion",t))))}const Mv=[[e=>e.recipeManagerLink,"1","Recipe Manager",zf,"nav-character-log"],[e=>e.inventoryManagerLink,"1","Inventory Manager",`${wa}invmanagernew`,"nav-character-log"],[e=>e.medalGuideLink,"1","Medal Guide",`${ga}${ca}medalguide`,"nav-character-log"],[e=>e.buffLogLink&&jl("keepBuffLog"),"1","Buff Log",Rf,"nav-character-log"],[e=>e.combatLogLink&&jl("keepLogs"),"1","Combat Logs",Of,"nav-character-notepad"],[e=>e.creatureLogLink&&jl("showMonsterLog"),"1","Creature Logs",Ff,"nav-character-notepad"],[e=>e.quickLinksLink,"1","Quick Links",Gf,"nav-character-notepad"],[e=>e.auctionSearchLink,"2","AH Quick Search",jf,"nav-actions-trade-auctionhouse"],[e=>e.onlinePlayersLink,"2","Online Players",Hf,"nav-actions-interaction-findplayer"],[e=>e.findOtherLink,"2","Find Other",Bf,"nav-actions-interaction-findplayer"],[e=>e.findBuffsLink,"2","Find Buffs",Df,"nav-actions-interaction-findplayer"],[e=>e.guildInventoryLink&&mf(),"2","Guild Inventory",`${wa}guildinvmgr`,"nav-guild-storehouse-inventory"],[e=>e.newGuildLogLink&&mf()&&!jl("useNewGuildLog"),"2","New Guild Log",Af,"nav-guild-ledger-advisor"],[e=>e.topRatedLink,"2","Top 250 Players",`${la}toprated${ca}xp`,"nav-toprated-players-level"]]
function Av(e){Mv.forEach((([n,i,r,o,s])=>{n(e)&&function(e,n,i,r){const o=t(r)
o instanceof Node&&Fv(e,n,i,o)}(i,r,o,s)}))}const Nv=e=>22*dg("li",e).length||null
function jv(e,t,n){Av(n),function(e,t){t.heights=dg("#nav > li").map(Nv)
const n=Number(t.state)
n&&n>-1&&n<e.children.length&&(e.children[t.state].children[1].style.height=`${t.heights[t.state]}px`)}(e,t)}var Dv=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function Bv(e){return function(e){return-1!==e&&0===Ql(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?(gf("accordion","collapse"),-1):e}const Hv=(e,t,n)=>$(e).data(`${n}${t}`)
function qv(e,t,n){return new Promise((i=>{const r=Hv(e,t,n)
r?i(r):function(e,t,n,i){$(e).on(`${zp(t)}create`,(()=>{i(Hv(e,t,n))}))}(e,t,n,i)}))}const Uv=[[e=>!zl(e),()=>uc("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>uc("$('#nav').data('hcsNav').heights does not exist")]]
async function Gv(){const e=t("nav"),n=await qv(e,"Nav","hcs")
return function(e){const t=Uv.find((([t])=>t(e)))
return!t||(t[1](),!1)}(n)?{theNav:e,myNav:n}:{}}function Wv(){!function(){const e=jl("lastActiveQuestPage")
jl("storeLastQuestPage")&&e.length>0&&(t("nav-character-questbook").href=e)}(),function(){const e=jl("lastScavPage")
jl("storeLastScavPage")&&e.length>0&&(t("nav-actions-artisanship-scavenging").href=e)}()}async function zv(){const{theNav:e,myNav:t}=await Gv()
e&&t&&(Wv(),function(e,t){const n=Dv.map((e=>[e,jl(e)]))
n.some((([,e])=>e))&&jv(e,t,Fg(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,Bv(n))}}(t))}function Vv(e){return Mp({cmd:"bounty",page:e})}function Qv(e){return e()}function Jv(e,t){Ul(e,cc(t))}let Kv=0,Xv=0
const Yv=()=>Kv,Zv=()=>Xv
function e_(){return Sf({className:"minibox"})}function t_(e){return kf("span",e)}function n_(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function i_(e,t){n_(e,"beforeend",t)}function r_([e,t,n,i,r]){const o=e(),s=n()
if(s)return Jv(t,s),Cf("",o),function(e,t,n,i){const r=Sf({innerHTML:`<a class="fshBountyHeader" href="${Ha}">${n} Bounties</a> `}),o=t_({className:"xxsLink",textContent:"Reset"})
return $f(r,o),$f(e,r),i_(e,function(e,t,n){const i=e.bounty
return 0===i.length?`<div class="xsOrange">[No ${t.toLowerCase()} bounties]</div>`:i.map(n).join("")}(t,n,i)),o}(o,s,i,r)}function o_(e,t){return`<a href="${e.link}" class="xsKhaki tip-static" data-tipped="${t(e)}">${e.target}</a><br>`}function s_(e,t){if("string"==typeof t){const e=a(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function a_(e){const t=jl(e)
if(t)return Vl(t,s_)}function l_(e){return e.split(",").map(qd)}function c_(e){const t=jl(e)
return t?l_(t):[]}function u_(e){return Ql("img",e[2]).title}function d_(e){const t="A"===(i=e[0]).children[0].tagName?i.children[0]:i.children[0].children[0]
var i
return{target:n(t),link:t.href,lvl:n(t.nextSibling).replace(/[[|\]]/g,""),reward:n(e[2]),rewardType:u_(e),xpLoss:n(e[3]),posted:n(e[4])}}let f_=0,h_={},p_={},g_=!1,v_=!1,__=[]
const m_=()=>h_,b_=()=>p_,y_=()=>g_,w_=()=>__
function k_(e){return{...d_(e),progress:n(e[5])}}function S_(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=k_(e.rows[t].cells)
h_.bounty.push(n)}}(e)}function x_(e,t){return function(e){if(e)return h_&&Bs()-h_.lastUpdate>f_}(e)||function(e){if(e)return p_&&Bs()-p_.lastUpdate>f_}(t)}let E_=0
const $_=()=>E_
function C_(e){return`Level:  ${e.lvl}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Progress:  ${e.progress}`}function P_(e){return o_(e,C_)}function T_(){E_=r_([Yv,"bountyList",m_,"Active",P_])}let L_=0
const I_=()=>L_
function R_(e){return`Target Level:  ${e.lvl}<br>Offerer: ${e.offerer}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Posted: ${e.posted}<br>Tickets Req.:  ${e.tickets}`}function O_(e){return e.accept?`<span class="xsGreen" onclick="${e.accept}">[a]</span>&nbsp;`:""}function F_(e){return[O_(e),o_(e,R_)].join("")}function M_(){L_=r_([Zv,"wantedList",b_,"Wanted",F_])}function A_(e){const t=e[6]
return"[n/a]"!==Ud(t)?t.children[0].children[0].getAttribute("onclick"):""}const N_=[()=>w_().includes("*"),e=>w_().includes(e),(e,t)=>dc.wantedGuildMembers&&"[n/a]"===Ud(t.cells[6])]
function j_(e,t){var n;(function(e,t){return"[active]"!==Ud(t.cells[6])&&N_.some((n=>n(e,t)))})(e,t)&&b_().bounty.push({...d_(n=t.cells),offerer:Ud(n[1].children[0].children[0]),tickets:Ud(n[5]),accept:A_(n)})}let D_=0,B_=0
function H_(e){const n=Ql('#pCC input[name="page"]',e)
if(!n)return
D_=Number(n.value),B_=Number(l(/of&nbsp;(?<of>\d*)/,n.parentNode.innerHTML))
const i=t("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
i&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],i=Ud(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===i)break
j_(i,n)}}(i)}function q_(e){dc.enableActiveBountyList&&!y_()&&(!function(e){const n=t("bounty-info",e)
if(!n)return
const i=n.parentNode.parentNode.previousElementSibling.children[0].children[0]
h_={},h_.bounty=[],h_.isRefreshed=!0,h_.lastUpdate=Bs(),i&&S_(i),g_=!0}(e),T_())}async function U_(e){const t=Fp(e)
if(q_(t),dc.enableWantedList)if(H_(t),D_<B_){U_(await Vv(D_+1))}else M_()}const G_=[()=>!m_(),()=>!b_(),()=>v_]
async function W_(){if(function(e,t){h_=a_("bountyList"),p_=a_("wantedList"),f_=jl("bountyListRefreshTime"),v_=jl("bwNeedsRefresh"),v_||x_(e,t)&&(v_=!0)}(dc.enableActiveBountyList,dc.enableWantedList),G_.some(Qv)){p_={},p_.bounty=[],p_.isRefreshed=!0,p_.lastUpdate=Bs(),g_=!1,__=c_("wantedNames"),Ul("bwNeedsRefresh",!1)
U_(await Vv(1))}else!function(e,t){t&&(b_().isRefreshed=!1,M_()),e&&(m_().isRefreshed=!1,T_())}(dc.enableActiveBountyList,dc.enableWantedList)}function z_(e,t){gf("activeWantedBounties",e),Jv(t,null),W_()}function V_(e){e.target===$_()&&z_("getBountyListReset","bountyList"),e.target===I_()&&z_("getWantedListReset","wantedList")}function Q_(e,t){return oh({subcmd:"profile",player_username:e,...t&&{_:Ms()}})}async function J_(e){const t=await Q_(o(),e),n=t?.username===o(),i=n?{...t,lastUpdate:Ns()}:t
return n&&Uh("fsh_selfProfile",i),i}const K_=e=>Ns()-dc.allyEnemyOnlineRefreshTime<e?.lastUpdate
async function X_(e){if(e)return J_(e)
return function(e){return K_(e)?e:J_()}(await qh("fsh_selfProfile"))}function Y_(e,t){return t?.classList?.contains(e)}function Z_(e,t){return Y_(t[0],e)}function em(e,t,n){const{target:i}=n,r=t.find(Wd(e,i))
if(r)return r[1](i)}function tm(e){return Wd(em,Z_,e)}function nm(e){return Cc(e,"player_id")}function im(e,t,n){return Math.floor(Math.max(e-t,0)/2+n)}function rm(e,t,n,i,r){let o=i
500===i&&(o=1e3)
const s=im(window.screen.availHeight,o,window.screenY),a=im(document.documentElement.clientWidth,n,window.screenX)
window.open(e,t,`width=${n}, height=${o}, left=${a}, top=${s}${r}`)}function om(e,t){let n=""
t&&(n=`&blist=${t}`),rm(`${Aa}&t=${e}${n}`,"fsQuickBuff",618,1e3,",scrollbars")}function sm(e){let t=e,n=Math.floor(t/60)
t%=60
let i=Math.floor(n/60)
n%=60
const r=Math.floor(i/24)
return i%=24,[r,i,n,t]}function am(e,t){return 0===e?"":String(e)+t}function lm(e){const t=sm(Math.abs(Bs()-e))
return`${am(t[0]," days, ")+am(t[1]," hours, ")+am(t[2]," mins, ")+t[3]} secs`}const cm="enemy-buff-check-on",um="enemy-buff-check-off",dm="enemy-send-message",fm="enemy-quickbuff",hm="enemy-quick-buff",pm=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function gm(e,t){return t[0](Bs()-e)}function vm(e,t){return`<a class="player-name tip-static ${function(e,t){const n=pm.find(Wd(gm,e))
return n?function(e,t){return e?t[1]:t[2]}(t,n):"fshWhite"}(e.last_login,t)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${lm(e.last_login)}</td></tr></tbody></table>" href="${va}${e.id}">${e.username}</a>`}function _m(e){return Bs()-e.last_login<1800}function mm(e,t){return`<li class="player"><div class="player-row">${dc.hideBuffSelected?"":`<span class="${cm}"></span>`}${vm(t,e)}</div><div class="guild-minibox-actions">${dc.hideGuildInfoMessage?"":`<span class="${dm} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}${dc.hideGuildInfoBuff?"":`<span class="${fm} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}${function(e){return dc.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${ba}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return dc.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${ma}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function bm(e,t){return e.filter(_m).map(Wd(mm,t)).join("")}const ym=[(e,t)=>e.length+t.length,(e,t)=>{if(!dc.enableAllyOnlineList)return t.length},e=>{if(!dc.enableEnemyOnlineList)return e.length}]
function wm(e){gf("allyEnemy",e)}function km(e,t,n){return 0===n(e,t)}function Sm(e){const n=hc(e._allies,[]),i=hc(e._enemies,[]);(function(e,t){return ym.every(Wd(km,e,t))})(n,i)||function(e,n){let i=""
dc.enableAllyOnlineList&&(i+=bm(e,!0)),dc.enableEnemyOnlineList&&(i+=bm(n,!1))
const r=t("fshContactList")
Cf("",r),i_(r,i)}(n,i)}function xm(e){wm("toggleBuffSelected"),e.classList.toggle(cm),e.classList.toggle(um)}const Em=[[cm,xm],[um,xm],[dm,function(e){wm("msgPlayer"),window.openQuickMsgDialog(n(e.parentNode.previousElementSibling.lastElementChild))}],[fm,function(e){wm("buffPlayer"),om(nm(e.parentNode.previousElementSibling.lastElementChild.href))}],[hm,function(){wm("selectedBuff"),om(Ef(cm,t("fshContactList")).map((e=>nm(e.nextElementSibling.href))).join(","))}]]
function $m(e){const{target:t}=e
"fshResetEnemy"!==t.id?tm(Em)(e):async function(){wm("resetList"),Sm(await X_(!0))}()}function Cm(e){const t=Sf({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>'
dc.hideBuffSelected||(n+=`<ul class="${hm}">Quick Buff Selected</ul>`),n+="</div></div>",i_(t,n),$f(Jd(),t),cg(t,$m),Sm(e)}function Pm(e){if(e?.length)return n(e[0].nextElementSibling)}function Tm(e){return e?Number(e.replace(/,/g,"")):0}function Lm(e){return Tm(Pm(xf(e)))}function Im(e,t){const n=e?.split(" ").map((e=>e.slice(0,-1)))
var i
if(n)return`<dd>${i=new Date(Ns()+1e3*(60*(60*t+Number(n[0]))+Number(n[1]))),`${Jg(i.getHours())}:${Jg(i.getMinutes())} ${i.toLocaleString("en",{weekday:"short"})} ${Jg(i.getDate())}/${Ks[i.getMonth()]}/${i.getFullYear()}`}</dd>`}function Rm(e){let t,n,i,r
const o=e[2].default,s=qc(o,e,e[1],null)
return{c(){t=cu("div"),s&&s.c(),vu(t,"class","svelte-5b5wnh"),Cu(t,"visible",e[0])},m(o,a){su(o,t,a),s&&s.m(t,null),n=!0,i||(r=hu(t,"click",gu(e[3])),i=!0)},p(e,[i]){s&&s.p&&(!n||2&i)&&Wc(s,o,e,e[1],n?Gc(o,e[1],i,null):zc(e[1]),null),(!n||1&i)&&Cu(t,"visible",e[0])},i(e){n||(cd(s,e),n=!0)},o(e){ud(s,e),n=!1},d(e){e&&au(t),s&&s.d(e),i=!1,r()}}}function Om(e,t,n){let i,r,o,{$$slots:s={},$$scope:a}=t,{visible:l=!0}=t
return e.$$set=e=>{"visible"in e&&n(0,l=e.visible),"$$scope"in e&&n(1,a=e.$$scope)},e.$$.update=()=>{1&e.$$.dirty&&(l?document.body.classList.contains("noscroll")||(i=!0,r=window.scrollY,o=document.body.style.top,document.body.classList.add("noscroll"),document.body.style.top=`-${r}px`):i&&(document.body.classList.remove("noscroll"),document.body.style.top=o||"",window.scrollTo(0,r)))},[l,a,s,function(t){qu.call(this,e,t)}]}class Fm extends xd{constructor(e){super(),Sd(this,e,Om,Rm,Ac,{visible:0})}}function Mm(e){let t,n,i,r
const o=e[7].default,s=qc(o,e,e[6],null)
return{c(){t=cu("div"),s&&s.c(),vu(t,"class","ui-dialog svelte-61qae0"),vu(t,"role","dialog"),vu(t,"aria-modal","true"),Cu(t,"modalVisible",e[1])},m(o,a){su(o,t,a),s&&s.m(t,null),e[8](t),n=!0,i||(r=hu(window,"keydown",e[2]),i=!0)},p(e,[i]){s&&s.p&&(!n||64&i)&&Wc(s,o,e,e[6],n?Gc(o,e[6],i,null):zc(e[6]),null),(!n||2&i)&&Cu(t,"modalVisible",e[1])},i(e){n||(cd(s,e),n=!0)},o(e){ud(s,e),n=!1},d(n){n&&au(t),s&&s.d(n),e[8](null),i=!1,r()}}}let Am
function Nm(e,t,n){let i,{$$slots:r={},$$scope:o}=t,{modal:s}=t,{visible:a=!0}=t
const l=Hu()
let c,u
const d=e=>e.tabIndex>=0&&e.offsetWidth>0&&e.offsetHeight>0&&!e.disabled
return e.$$set=e=>{"modal"in e&&n(0,s=e.modal),"visible"in e&&n(3,a=e.visible),"$$scope"in e&&n(6,o=e.$$scope)},e.$$.update=()=>{8&e.$$.dirty&&n(1,i=a),9&e.$$.dirty&&s&&a&&(n(5,u=Am),Am=s),41&e.$$.dirty&&s&&!a&&(Am=u),24&e.$$.dirty&&(a?n(4,c=document?.activeElement):c?.focus())},[s,i,function(e){if(a)if("Escape"!==e.key||Am!==s){if("Tab"===e.key){const t=dg("*",s).filter(d)
let n=t.indexOf(document.activeElement);-1===n&&e.shiftKey&&(n=0),n+=t.length+(e.shiftKey?-1:1),n%=t.length,t[n].focus(),e.preventDefault()}}else l("close")},a,c,u,o,r,function(e){Gu[e?"unshift":"push"]((()=>{s=e,n(0,s)}))}]}class jm extends xd{constructor(e){super(),Sd(this,e,Nm,Mm,Ac,{modal:0,visible:3})}}function Dm(e){let t
const n=e[3].default,i=qc(n,e,e[6],null)
return{c(){i&&i.c()},m(e,n){i&&i.m(e,n),t=!0},p(e,r){i&&i.p&&(!t||64&r)&&Wc(i,n,e,e[6],t?Gc(n,e[6],r,null):zc(e[6]),null)},i(e){t||(cd(i,e),t=!0)},o(e){ud(i,e),t=!1},d(e){i&&i.d(e)}}}function Bm(e){let t,n,i
function r(t){e[4](t)}let o={visible:e[1],$$slots:{default:[Dm]},$$scope:{ctx:e}}
return void 0!==e[0]&&(o.modal=e[0]),t=new jm({props:o}),Gu.push((()=>bd(t,"modal",r))),t.$on("close",e[5]),{c(){yd(t.$$.fragment)},m(e,n){wd(t,e,n),i=!0},p(e,i){const r={}
2&i&&(r.visible=e[1]),64&i&&(r.$$scope={dirty:i,ctx:e}),!n&&1&i&&(n=!0,r.modal=e[0],Yu((()=>n=!1))),t.$set(r)},i(e){i||(cd(t.$$.fragment,e),i=!0)},o(e){ud(t.$$.fragment,e),i=!1},d(e){kd(t,e)}}}function Hm(e){let t,n
return t=new Fm({props:{visible:e[1],$$slots:{default:[Bm]},$$scope:{ctx:e}}}),t.$on("click",e[2]),{c(){yd(t.$$.fragment)},m(e,i){wd(t,e,i),n=!0},p(e,[n]){const i={}
2&n&&(i.visible=e[1]),67&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i)},i(e){n||(cd(t.$$.fragment,e),n=!0)},o(e){ud(t.$$.fragment,e),n=!1},d(e){kd(t,e)}}}function qm(e,t,n){let{$$slots:i={},$$scope:r}=t,{modal:o}=t,{visible:s=!0}=t
const a=Hu()
let l
return e.$$set=e=>{"modal"in e&&n(0,o=e.modal),"visible"in e&&n(1,s=e.visible),"$$scope"in e&&n(6,r=e.$$scope)},e.$$.update=()=>{2&e.$$.dirty&&(s?(dc.dialogIsClosed&&(l=dc.dialogIsClosed),dc.dialogIsClosed=()=>!s):l&&(dc.dialogIsClosed=l))},[o,s,()=>a("close"),i,function(e){o=e,n(0,o)},function(t){qu.call(this,e,t)},r]}class Um extends xd{constructor(e){super(),Sd(this,e,qm,Hm,Ac,{modal:0,visible:1})}}function Gm(e){let t,n,i,r,o,s,a,l,c
return{c(){t=cu("div"),n=uu(e[1]),i=du(),r=cu("div"),o=cu("button"),o.textContent="Yes",s=du(),a=cu("button"),a.textContent="No",vu(t,"class","svelte-1gd1a38"),vu(o,"type","button"),vu(o,"class","svelte-1gd1a38"),vu(a,"type","button"),vu(a,"class","svelte-1gd1a38"),vu(r,"class","svelte-1gd1a38")},m(u,d){su(u,t,d),iu(t,n),su(u,i,d),su(u,r,d),iu(r,o),iu(r,s),iu(r,a),l||(c=[hu(o,"click",e[3]),hu(a,"click",e[2])],l=!0)},p(e,t){2&t&&bu(n,e[1])},d(e){e&&(au(t),au(i),au(r)),l=!1,Fc(c)}}}function Wm(e){let t,n
return t=new Um({props:{visible:e[0],$$slots:{default:[Gm]},$$scope:{ctx:e}}}),t.$on("close",e[2]),{c(){yd(t.$$.fragment)},m(e,i){wd(t,e,i),n=!0},p(e,[n]){const i={}
1&n&&(i.visible=e[0]),34&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i)},i(e){n||(cd(t.$$.fragment,e),n=!0)},o(e){ud(t.$$.fragment,e),n=!1},d(e){kd(t,e)}}}function zm(e,t,n){let{msg:i="Are you sure?"}=t,{visible:r=!0}=t
const o=Hu()
return e.$$set=e=>{"msg"in e&&n(1,i=e.msg),"visible"in e&&n(0,r=e.visible)},[r,i,function(){n(0,r=!1),o("no")},function(){n(0,r=!1),o("yes")}]}class Vm extends xd{constructor(e){super(),Sd(this,e,zm,Wm,Ac,{msg:1,visible:0})}}function Qm(e,t,n){return t?(t.$set(e),t):new n({props:e,target:document.body})}const Jm={visible:!0}
let Km,Xm
function Ym(e){Km=Qm(Jm,Km,Vm),Km.$on("yes",(()=>e(!0))),Km.$on("no",(()=>e(!1)))}function Zm(e){return Jm.msg=e,new Promise(Ym)}async function eb(e){e.stopPropagation()
await Zm("Are you sure you want to re-roll the Daily Quest?")&&async function(){const e=t("minibox-daily-quest")
if(!e)return
gf("dailyQuest","reroll")
const n=await Ap({cmd:"dailyquests",subcmd:"reroll"})
if(!n)return
const i=t("minibox-daily-quest",n)
i&&e.replaceWith(i)}()}function tb(e){return kf("button",{...e,type:"button"})}function nb(e,t){i_(e,t)}function ib(){gf("fsbox","open log"),Mf()}function rb(e,t){const n=t_({className:`fsh-fsbox ${e}`,textContent:"[ "})
return $f(n,t),nb(n," ]"),n}function ob(e){const t=Ql(Il,e)
t&&(function(e,t){const i=ah({href:`${pa}${n(t)}`,textContent:"Ignore"})
cg(i,(()=>gf("fsbox","ignore link"))),$f(e,rb("fs-box-ignore",i))}(e,t),async function(e){const t=await qh("fsh_fsboxcontent")??"",n=qd(Ql(".message",e).innerHTML)
if(t.includes(n))return
Uh("fsh_fsboxcontent",`<br>${n}${t}`.slice(0,9999))}(e))}function sb(e){e.classList.add("fshRelative"),function(e){const t=tb({textContent:"Log"})
cg(t,ib),$f(e,rb("fs-box-log",t))}(e),ob(e)}function ab(e,t){const i=t.nextElementSibling.children[0]
8===i.children.length&&(!function(e,t){$f(e,Sf({className:"tooltip-bottom",dataset:{tooltip:"Server"},textContent:`Server: ${n(t.children[7])}`}))}(e,i),function(e,t){Cf(`Online: ${t.children[3].innerHTML}`,e.children[0])}(e,i),t.parentNode.classList.add("fshInvisible"))}function lb(e,t){t instanceof Node&&(t.textContent=String(e))}function cb(){return Xm||(Xm=t("quickMessageDialog")),Xm}let ub,db=0
function fb(e){(function(){if(!db){const e=xf("validateTips",cb())
1===e.length&&([db]=e)}return db})()&&lb(hc(e,""),db)}function hb(){return ub||(ub=t("quickMsgDialog_msg"),ub.maxLength=512),ub}let pb,gb=null,vb=0,_b=0
function mb(e){"Enter"!==e.key||e.shiftKey||(gf("messaging","sendOnEnter"),e.preventDefault(),function(){if(!_b){const e=$(cb()).dialog("option","buttons")
_b=e["Send Message"]}return _b}()())}function bb(){Gs(gb)&&(gb=jl("enterForSendMessage")),gb&&!vb&&(lc(hb(),"keypress",mb),vb=!0)}let yb=0,wb=0,kb=0
function Sb(e,t,n){const i=wb.insertRow(e)
let r=i.insertCell(-1)
i_(r,t),r=i.insertCell(-1),i_(r,n)}function xb(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function Eb(e,t){Sb(e,xb("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const $b=[["del-button",function(e){gf("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
wb.deleteRow(t),yb.splice(t-2,1),Jv("quickMsg",yb)}],["add-button",function(e){gf("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){Eb(e.parentNode.parentNode.rowIndex,n),t.value="",yb.push(n),Jv("quickMsg",yb)}}],["add-template",function(e){gf("messaging","insertTemplate"),hb().value+=`${n(e).replace(/\{playername\}/g,pb)}`}]]
function Cb(e){Eb(-1,e)}function Pb(){jl("enableMessageTemplates")&&!kb&&(cg((wb||(wb=cb().lastElementChild),wb),tm($b)),(yb||(yb=a_("quickMsg")),yb).forEach(Cb),Sb(-1,xb("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),kb=!0)}function Tb(e,n,i){const r=cb()
Y_("ui-dialog-content",r)&&(!function(e){pb=e,lb(e,t("quickMsgDialog_targetUsername"))}(e),function(e){const t=hb()
t.value=hc(e,""),t.disabled=!1}(n),fb(i),Pb(),bb(),$(r).dialog("open"))}function Lb(e){return Lp({cmd:"composing",...e})}function Ib(){return Lb({subcmd:"view"})}function Rb(){return Op(Ib)}function Ob(e,n,i){const r=Tv({className:"notification"}),o=ah({href:i,innerHTML:`<span class="notification-icon"></span><p class="notification-content">${n}</p>`})
cg(o,(()=>{gf("notification",e)})),$f(r,o),$f(t("notifications"),r)}function Fb(){Ob("composing","Composing to do",Na)}function Mb(e){return e.time_remaining}function Ab(){Fb(),Ul(ul,!0)}const Nb=52
function jb(e){const t=e.h.p.find((({k:e})=>e===Nb))?.v
e.r.potions.length!==t?Ab():function(e){const t=Math.min.apply(null,e.map(Mb))
t>0?(Ul(ul,!1),Ul(dl,Ns()+1e3*t)):Ab()}(e.r.potions)}function Db(){jl(ul)?Fb():async function(){const e=jl(dl)
if(e&&Ns()<e)return
const t=await Rb()
t?.s&&jb(t)}()}function Bb(e){return Lp({cmd:"guild",...e})}function Hb(e){return Bb({subcmd:"groups",...e})}function qb(e){return Hb({subcmd2:"joinall",group:e})}function Ub(e){return Op(qb,0,e)}function Gb(){return Hb({subcmd2:"view"})}function Wb(){return Op(Gb)}function zb(e){let t,n,i,r,o,s,a
return{c(){t=cu("p"),n=cu("button"),i=uu("Join all attack groups"),r=uu(e[2]),o=uu("."),vu(n,"type","button"),vu(n,"class","svelte-44dw92"),vu(t,"class","notification-content")},m(l,c){su(l,t,c),iu(t,n),iu(n,i),iu(n,r),iu(n,o),s||(a=hu(n,"click",e[4],{once:!0}),s=!0)},p(e,t){4&t&&bu(r,e[2])},d(e){e&&au(t),s=!1,a()}}}function Vb(e){let t,n={ctx:e,current:null,token:null,hasCatch:!1,pending:Kb,then:Jb,catch:Qb}
return hd(e[3](),n),{c(){t=fu(),n.block.c()},m(e,i){su(e,t,i),n.block.m(e,n.anchor=i),n.mount=()=>t.parentNode,n.anchor=t},p(t,n){e=t},d(e){e&&au(t),n.block.d(e),n.token=null,n=null}}}function Qb(e){return{c:Tc,m:Tc,d:Tc}}function Jb(e){let t
return{c(){t=cu("p"),t.textContent="Joined.",vu(t,"class","notification-content"),wu(t,"line-height","32px")},m(e,n){su(e,t,n)},d(e){e&&au(t)}}}function Kb(e){let t
return{c(){t=cu("span"),vu(t,"class","notification-content fshSpinner fix-classic-theme svelte-44dw92")},m(e,n){su(e,t,n)},d(e){e&&au(t)}}}function Xb(e){let t,n,i
function r(e,t){return e[0]?Vb:zb}let o=r(e),s=o(e)
return{c(){t=cu("a"),n=cu("span"),i=du(),s.c(),vu(n,"id","notification-icon-guild-group"),vu(n,"class","notification-icon"),vu(t,"href",e[1])},m(e,r){su(e,t,r),iu(t,n),iu(t,i),s.m(t,null)},p(e,[n]){o===(o=r(e))&&s?s.p(e,n):(s.d(1),s=o(e),s&&(s.c(),s.m(t,null))),2&n&&vu(t,"href",e[1])},i:Tc,o:Tc,d(e){e&&au(t),s.d()}}}function Yb(e,t,n){const i=e=>!dc.enableMaxGroupSizeToJoin||e.members.length<dc.maxGroupSizeToJoin,r=e=>e.name===o(),s=e=>!e.members.find(r),a=e=>e.id
let l=0,c=La,u=""
return dc.enableMaxGroupSizeToJoin&&(c=Ia,u=` less than size ${dc.maxGroupSizeToJoin}`),[l,c,u,async function(){const e=await Wb()
e?.s&&await async function(e){const t=e.r.filter(i).filter(s).map(a)
t.length&&await Ub(t)}(e)},function(e){e.preventDefault(),gf("notification","Join All"),n(0,l=1)}]}class Zb extends xd{constructor(e){super(),Sd(this,e,Yb,Xb,Ac,{})}}function ey(e){return Lp({cmd:"temple",...e})}function ty(e){return ey({subcmd:"pray",type:e})}function ny(){return ey({subcmd:"view"})}function iy(e){$(e).qtip("hide")}let ry=Element
const oy='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',sy=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${la}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
function ay(e){Ul("needToPray",e),Ul("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}async function ly(e){const t=e.target.getAttribute("praytype")
t&&(gf("notification","prayToGods"),iy(e.target),await function(e){return Op(ty,0,e)}(t),ry.outerHTML=oy,ay(!1))}function cy(){i_(t("notifications"),sy),ry=t("helperPrayToGods"),Yd(ry,"click",ly)}async function uy(){if(!dc.enableTempleAlert)return
const e="temple"===dc.cmd?function(e){if(!e)return{s:!1}
const t=Ql("#pCC",e)
return t?{s:!0,r:{pray_index:"You are currently praying at the temple."===Ud(t)?0:-1}}:{s:!1}}(document):await Op(ny)
if(!e.s)return
const t=-1===e.r.pray_index
t&&cy(),ay(t)}function dy(){var e
!(e=jl("lastTempleCheck"))||Ns()>e?uy():jl("needToPray")&&cy()}function fy(){return e={subcmd:"goldupgrades"},Lp({cmd:"points",...e})
var e}function hy(e,t,n){if(e?.rows)return Dd(e.rows).filter(((e,i)=>e.children.length===t&&i>n))}function py(e,t){const n=Number(Ud(e.cells[2]).split(" / ")[0]),i=Ud(e.cells[3])
return{id:t,...!["-","n/a"].includes(i)&&{reset_time:Date.parse(`${i} GMT`)/1e3},current:jg(n)?0:n}}function gy(){return-1!==window.location.search.indexOf("cmd=points&type=1")}function vy(){gy()||Ob("stamina","Upgrade stamina with gold",`${Sa}&type=1`)}async function _y(){if(gy()&&function(){const e=ug('#pCC input[name="quantity"]')
e?.length<2||(e[0].value="100",e[1].value="10")}(),!dc.enableUpgradeAlert)return
const e=gy()?function(e){if(!e)return{s:!1}
const t=Ql("#pCC > table",e)
return t?{s:!0,r:hy(t,5,0).map(py)}:{s:!1}}(document):await Op(fy)
Ws(e?.r?.[1]?.current)||function(e){10!==e.current?(vy(),Ul("needToDoUpgrade",!0)):(Ul("needToDoUpgrade",!1),Ul("lastUpgradeCheck",1e3*e.reset_time))}(e.r[1])}function my(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?Lv(t,e.firstChild):$f(e,t)}(e,t)}function by(e,t){t.stopPropagation(),gf("chrome","statbar",e)}function yy(e,n){const i=t(`statbar-${n}`)
if(!i)return
const r=ah({href:e}),o=i.parentNode
$f(r,i),my(o,r),cg(r,Wd(by,n),!0)}function wy(e,t){Ef("player-name",e).forEach(t)}const ky=/Last Activity:<\/td><td>(?<mins>\d+) mins/
function Sy(e,t){const n=e.dataset.tipped,i=l(ky,n)
i<2?e.classList.add(t.l1):i<5?e.classList.add(t.l2):e.classList.add(t.l3)}const xy=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function Ey(e,t){xy.forEach((n=>{dc[n[0]]&&Dd(ug(n[t],e)).forEach(vg)}))}function $y(e){e?.classList&&e.classList.add("fshInvisible")}function Cy(e,n){dc.hideBuffSelected&&(Dd(xf(`${n}-buff-check-on`,e)).forEach($y),$y(t(`${n}-quick-buff`)))}function Py(e){Sy(e,{l1:"fshGreen",l2:"fshWhite",l3:"fshGrey"})}function Ty(e,t,n){dg(`#pCR h${e}`).filter(lg(t)).forEach((e=>{const i=ah({href:`${xa}${n}`,textContent:t})
cg(i,(()=>{gf("widgets",`guild ${n}`)})),e.replaceChild(i,e.firstChild)}))}function Ly(e){Sy(e,{l1:"fshDodgerBlue",l2:"fshLightSkyBlue",l3:"fshPowderBlue"})}function Iy(e){const n=t(e)
n&&(n.classList.add("pCR"),$f(Jd(),n))}function Ry(e){const n=t(e)
n&&my((Qd||(Qd=t("pCR")),Qd),n)}function Oy(){return Lp({cmd:"superelite"})}function Fy(e){return bf(e?.se??{}).flatMap((([t,n])=>fc(n)?n.map((([n,i])=>[n,t,i,e?.loc[i]])):[[n,t.replaceAll(" ","_"),0,""]]))}const My=e=>e.join("|"),Ay=(e,t)=>e.r.map((e=>[t-e.time,e.creature.name.replace(" (Super Elite)","").replaceAll(" ","_"),e.realm.realm.id,e.realm.realm.name])),Ny=(e,t)=>xg(e.map(My).concat(t.map(My))).map((e=>e.split("|"))).map((([e,t,n,i])=>[Number(e),t,Number(n),i])).sort((([e],[t])=>t-e)),jy=e=>Fg(xg(e.map((([,e])=>e))).map((t=>[t,e.filter((([,e])=>e===t)).map((([e,,t])=>[e,t])).slice(0,10)]))),Dy=e=>Fg(xg(e.map((([,,e])=>e))).map((t=>[t,e.find((([,,e])=>e===t))[3]]))),By=e=>({se:jy(e),loc:Dy(e)})
const Hy=$d()
let qy=!1,Uy={},Gy=0,Wy=!1
const zy=e=>Math.max(0,600-(As()-(e?.lastUpdate??0)),600-(As()-Gy))
async function Vy(){Gy=As()
const e=await Op(Oy)
e?.s&&(Uy=function(e,t){const n=Number(t.t.split(" ")[1]),i=Ay(t,n),r=Fy(e),o=Ny(i,r)
return{lastUpdate:n,...By(o)}}(Uy,e),Uh("fsh_seLog",Uy),Hy.set(Uy))}function Qy(e,t){Wy=t,e(Wy),Wy&&!qy&&async function(){for(qy=!0,Uy=await qh("fsh_seLog"),Hy.set(Uy);Wy;)qy=!0,await Jf(1e3*zy(Uy)),Wy&&await Vy(),qy=!1}()}const Jy=function(){const{subscribe:e,set:t}=$d(0)
return{subscribe:e,set:Wd(Qy,t)}}()
const Ky=[function(){jl("moveGuildList")&&Ry("minibox-guild")},function(){jl("moveOnlineAlliesList")&&Ry("minibox-allies")},function(){jl("moveXmasBox")&&Iy("minibox-xmas")},function(){jl("moveDailyQuest")&&Iy("minibox-daily-quest")},function(){jl("moveFSBox")&&Iy("minibox-fsbox")},async function(){if(!dc.enableAllyOnlineList&&!dc.enableEnemyOnlineList||Pv())return
!function(e){e&&$c(3,Cm,[e])}(await X_(!1))},function(){!dc.enableWantedList&&!dc.enableActiveBountyList||Pv()||(dc.enableActiveBountyList&&(Kv=e_(),$f(Jd(),Kv)),dc.enableWantedList&&(Xv=e_(),$f(Jd(),Xv)),Yv()&&cg(Yv(),V_),Zv()&&cg(Zv(),V_),W_())},function(){if(!dc.enableGuildInfoWidgets)return
const e=t("minibox-guild-members-list")
e&&(Ey(e,1),Cy(e,"guild"),wy(e,Py),Ty(4,"Chat","chat"),Ty(3,"Guild","manage"))},function(){if(!dc.enableOnlineAlliesWidgets)return
const e=t("minibox-allies-list")
e&&(Ey(e,2),Cy(e,"ally"),wy(e,Ly))},function(){dc.enableTempleAlert&&"temple"!==dc.cmd&&!Pv()&&dy()},function(){dc.enableUpgradeAlert&&Mg()&&!gy()&&function(){if(jl("needToDoUpgrade"))return void vy()
const e=jl("lastUpgradeCheck");(!e||Ns()>e)&&_y()}()},function(){dc.enableComposingAlert&&"composing"!==dc.cmd&&Mg()&&Db()},function(){Jd()&&!Pv()&&zv()},function(){Pv()||(window.openQuickMsgDialog=Tb)},function(){jl("statBarLinks")&&(yy(ga,"character"),yy(`${Sa+ca}reserve`,"stamina"),yy(Ma,"equipment"),yy(_a,"inventory"),yy(Sa,"fsp"),yy(`${la}bank`,"gold"))},function(){if(!jl("staminaCalculator"))return
const e=xf("stat-stamina-nextGain")
if(0===e.length)return
const n=t("statbar-stamina-tooltip-stamina"),i=(e=>Pm(xf("stat-name",e)).split(" / "))(n)
2===i.length&&i_(n,function(e,t){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${Im(Pm(e),Math.floor((Tm(t[1])-Tm(t[0]))/Lm("stat-stamina-gainPerHour")))}`}(e,i))},function(){if(!jl("levelUpCalculator"))return
const e=xf("stat-xp-nextGain")
0!==e.length&&i_(t("statbar-level-tooltip-general"),`<dt class="stat-xp-nextLevel">Next Level At</dt>${Im(Pm(e),Math.ceil(Lm("stat-xp-remaining")/Lm("stat-xp-gainPerHour")))}`)},function(){if(!jl("fsboxlog"))return
const e=t("minibox-fsbox")
e&&sb(e)},function(){jl("resizeQuickBuff")&&(window.openWindow=function(e,t,n,i,r){gf("chrome","interceptQuickBuff"),rm(e,t,n,i,r)})},function(){if(!jl("joinAllLink"))return
const e=t("notification-guild-group")
e&&function(e){Cf("",e),new Zb({target:e})}(e)},function(){if(!jl("addServerNode"))return
const e=t("topbanner-stats"),n=dg("#pCR h3").find(lg("Game Stats"));(function(e,t){return!(e&&Y_("topbanner-stats-hidden",e))&&t})(e,n)&&ab(e,n)},function(){if(!jl("addScoutTowerLink"))return
const e=t("minibox-spoilsofwar")
if(!e)return
const n=e.children[1]
if(!n)return
const i=n.children[0]
i_(i,"&nbsp;"),$f(i,function(){const e=ah({dataset:{tooltip:"View Scout Report"},href:$a,innerHTML:`<img id="fshScoutTower" src="${Vs}structures/27.png">`})
return cg(e,(()=>gf("chrome","scout tower link"))),e}())},async function(){if(Mg()&&jl(hl)){Cv(await ev())}},function(){Mg()&&dc.enableSeTracker&&Jy.set(dc.enableSeTracker)},function(){if(!jl("dailyQuestReRoll"))return
const e=t("daily-quest-reroll-button")
e&&cg(e,eb,!0)}]
const Xy=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function Yy(){mg()||(Xy.forEach(pg),dc.allyEnemyOnlineRefreshTime=1e3*jl("allyEnemyOnlineRefreshTime"),dc.useNewGuildLog&&(lc(document.body,"click",_g),lc(document.body,"auxclick",_g)),bg(Ky))}function Zy(e){const t=Vl(e)
t?.["new-ui"]&&(jl("gameHelpLink")&&$c(3,hg),dc.huntingMode=jl("huntingMode"),$c(3,sg),Yy(),jl("hideHelperMenu")||$c(3,Tp))}function ew(){const e=function(){const e=t("html")
if(e?.dataset)return e.dataset.hcs}()
e&&Zy(e)}function tw(){Mg()&&t("worldPage")&&window.GameData&&If(import("./newMap-oXlKhOhY.js"))}const nw={"-":{"-":()=>{If(import("./arena-JFCVoSoG.js").then((function(e){return e.b})))}},dojoin:{"-":()=>{If(import("./arenaDoJoin-lJJr1ECh.js"))}},join:{"-":()=>{If(import("./arenaJoin-BfjC81Kz.js"))}},completed:{"-":()=>{If(import("./completedArenas-l5cnz9C2.js"))}},pickmove:{"-":()=>{If(import("./storeMoves-C_6DMCbn.js"))}},setup:{"-":()=>{If(import("./setupMoves-De-LgRpw.js"))}}}
function iw(){If(import("./bioWidgets-CgptpSB1.js"))}function rw(){If(import("./injectGuild-DNrP3_0N.js"))}const ow=()=>{If(import("./guildAdvisor-TT_7WzTq.js"))}
const sw=()=>{If(import("./groups-B6LLxvo7.js"))}
const aw=()=>{If(import("./addRemoveTags-dVIcgc9L.js"))}
const lw=()=>{If(import("./guildChat-D0cZCYKZ.js"))}
function cw(){If(import("./viewRecipe-D9r2gK5D.js"))}function uw(){If(import("./ufsgAllowBack-CWa0M5jN.js"))}function dw(){If(import("./profile-DR_nIV2j.js").then((function(e){return e.p})))}function fw(){If(import("./news-DTzBW4c2.js"))}function hw(){If(import("./viewArchive-DBoJoKSn.js"))}const pw=()=>{If(import("./inventory-W4LY2lSU.js"))},gw=()=>{If(import("./bazaar-CQk1slYl.js"))}
function vw(){If(import("./injectQuestBookFull-CiVGkNDB.js"))}const _w=()=>{If(import("./scavenging-Nx0JPvh6.js"))}
const mw=()=>{If(import("./toprated-B8rbGa0k.js"))}
const bw=()=>{If(import("./trade-DEAWH6sX.js"))}
var yw={creatures:{"-":{"-":uw}},items:{"-":{"-":uw},view:{"-":()=>{If(import("./itemsView-BbgGQxqn.js"))}}},masterrealms:{"-":{"-":uw}},quests:{"-":{"-":uw},view:{"-":()=>{If(import("./showAllQuestSteps-BR2rsN_Q.js"))}}},realms:{"-":{"-":uw}},relics:{"-":{"-":uw}},shops:{"-":{"-":uw}},"-":{news:{"-":fw},viewupdatearchive:{"-":hw},viewarchive:{"-":hw},"-":{"-":()=>{If(import("./unknownPage-8gjzw-Tp.js"))}}},arena:nw,auctionhouse:{"-":{"-":()=>{If(import("./injectAuctionHouse-BbufPGkW.js"))}},quickcreate:{"-":()=>{If(import("./quickCreate-nJ-cjN7O.js"))}}},bank:{"-":{"-":()=>{If(import("./injectBank-CeAHxpHt.js"))}}},blacksmith:{repairall:{"-":function(){Pc("fromworld")&&tw()}}},buffmarket:{"-":{"-":()=>{If(import("./injectBuffmarket-B9xzF4Qb.js"))}}},combat:{attackplayer:{"-":dw}},composing:{"-":{"-":()=>{If(import("./composing-CaJ12v0z.js"))}},breakdown:{"-":()=>{If(import("./breakdown-DO47joLq.js"))}},create:{"-":()=>{If(import("./composingCreate-DnorH57n.js"))}}},findplayer:{"-":{"-":()=>{If(import("./findplayer-IIw4dvHx.js"))}}},guild:{inventory:{report:()=>{If(import("./guildReport-bhFT8rrk.js"))},addtags:aw,removetags:aw,storeitems:()=>{If(import("./storeitems-BKgYY7r_.js"))}},chat:{"-":lw},dochat:{"-":lw},log:{"-":()=>{If(import("./guildLog-D4caWSHv.js"))}},groups:{viewstats:()=>{If(import("./injectGroupStats-DQCTR9uG.js"))},joinallgroupsundersize:sw,joinall:sw,"-":sw},manage:{"-":rw},advisor:{"-":ow,weekly:ow},history:{"-":iw},view:{"-":rw},scouttower:{"-":()=>{If(import("./injectScouttower-CGkXwDb6.js"))}},mailbox:{"-":()=>{If(import("./guildMailbox-B_TwD92m.js"))}},ranks:{"-":()=>{If(import("./rank-BdjXxlqV.js"))}},conflicts:{rpupgrades:()=>{If(import("./injectRPUpgrades-LC-jpDbD.js"))}},bank:{"-":()=>{If(import("./injectGuildBank-wLLLt5Ns.js"))}},hall:{"-":()=>{If(import("./hall-DwqBDp_i.js"))},post:iw},"-":{"-":rw},titanrewards:{"-":()=>{If(import("./titanrewards-eJ32u_aA.js"))}}},hellforge:{"-":{"-":()=>{If(import("./hellforge-Cnw9L1RY.js"))}}},inventing:{"-":{"-":function(){If(import("./inventing-DGZ4iIEt.js"))}},doinvent:{"-":cw},viewrecipe:{"-":cw}},log:{"-":{"-":()=>{If(import("./playerLog-CEtwxmfa.js"))}}},marketplace:{createreq:{"-":()=>{If(import("./marketplace-B3AWP-tp.js"))}}},news:{fsbox:{"-":()=>{If(import("./newsFsbox-Cx0dkj6r.js"))}},"-":{"-":fw},shoutbox:{"-":()=>{If(import("./newsShoutbox-BUJ-NR0L.js"))}},viewupdatearchive:{"-":hw},viewarchive:{"-":hw}},notepad:{showlogs:{"-":Of},invmanagernew:{"-":pw},guildinvmgr:{"-":pw},recipemanager:{"-":zf},auctionsearch:{"-":jf},onlineplayers:{"-":Hf},quicklinkmanager:{"-":Gf},monsterlog:{"-":Ff},quickextract:{"-":Uf},quickwear:{"-":Wf},fsboxcontent:{"-":Mf},bufflogcontent:{"-":Rf},newguildlog:{"-":Af},findbuffs:{"-":Df},findother:{"-":Bf},savesettings:{"-":()=>{If(import("./load-CspzWc5B.js"))}},reliclist:{"-":Vf}},points:{"-":{"-":()=>{If(import("./points-DBS1dKQf.js"))}}},potionbazaar:{"-":{"-":gw},buyitem:{"-":gw}},privatemessage:{"-":{"-":()=>{If(import("./privateMsg-Ck5oms8X.js"))}}},profile:{"-":{"-":dw},managecombatset:{"-":dw},report:{"-":dw},equipitem:{"-":dw},useitem:{"-":dw},changebio:{"-":iw},dropitems:{"-":function(){If(import("./injectProfileDropItems-OzfCDP5n.js"))}}},pvpladder:{"-":{"-":()=>{If(import("./ladder-CC2HjDt4.js"))}}},questbook:{"-":{"-":vw},atoz:{"-":vw},viewquest:{"-":()=>{If(import("./injectQuestTracker-CNw9OOnm.js"))}}},quickbuff:{"-":{"-":()=>{If(import("./quickBuff-DEgCqa6v.js"))}}},scavenging:{"-":{"-":_w},process:{"-":_w}},settings:{"-":{"-":()=>{If(import("./injectSettings-C-Ql0iNh.js"))}}},skills:{"-":{"-":()=>{}}},superelite:{"-":{"-":()=>{If(import("./superelite-DIlecoFJ.js"))}}},tempinv:{"-":{"-":()=>{If(import("./mailbox-D7Tr4Bte.js"))}}},temple:{"-":{"-":uy}},titan:{"-":{"-":()=>{If(import("./injectTitan-DeeY9F4p.js"))}}},toprated:{xp:{"-":mw},monthlyxp:{"-":mw},gold:{"-":mw},killstreak:{"-":mw},bounties:{"-":mw},risingstars:{"-":mw},arena:{"-":mw},superelites:{"-":mw},smasher:{"-":mw},globalquest:{"-":()=>{If(import("./globalQuest-BcT0j6Ew.js"))}}},trade:{"-":{"-":bw},sendgold:{"-":bw},createsecure:{"-":bw},docreatesecure:{"-":bw}},world:{"-":{"-":tw}}}
function ww(e){return kf("ul",e)}const kw=()=>Sf({className:"fshQuickLinks",style:{left:`${jl("quickLinksLeftPx")}px`,top:`${jl("quickLinksTopPx")}px`}}),Sw=e=>"newWindow"in e&&e.url&&e.name
function xw(e,t){const n=$f(t,ww())
e.filter(Sw).forEach((e=>{$f($f(n,Tv()),function(e){const t=ah({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return cg(t,(()=>gf("chrome","quick link",e.name))),t}(e))}))}function Ew(){if(!Ql(".mainbody"))return
const e=a_("quickLinks")||[]
e.length&&function(e){const t=kw()
t.classList.toggle("fshFixed",jl("keepHelperMenuOnScreen")),jl("draggableQuickLinks")&&(t.classList.add("fshMove"),ff(t)),xw(e,t),$f(document.body,t)}(e)}let $w=0,Cw=0,Pw=0,Tw="",Lw=0,Iw=0
function Rw(e){return Pc(e)||"-"}function Ow(e){const t=Ql(e)
return t?.value||"-"}function Fw(){if(zl(yw[$w])&&zl(yw[$w][Cw])&&Wl(yw[$w][Cw][Pw]))return yw[$w][Cw][Pw]}function Mw(){""!==document.location.search?($w=Rw("cmd"),Cw=Rw("subcmd"),Pw=Rw("subcmd2"),["points","privatemessage"].includes($w)&&(Tw=`/${Rw("type")}`)):($w=Ow('input[name="cmd"]'),Cw=Ow('input[name="subcmd"]'),Pw=Ow('input[name="subcmd2"]')),dc.cmd=$w,dc.subcmd=Cw,dc.subcmd2=Pw,Iw=`${$w}/${Cw}/${Pw}${Tw}`,Lw=Fw()}function Aw(){Wl(Lw)&&(Gl(Iw),Lw())}async function Nw(e){Mw(),await e,ew(),$c(3,Aw),jl("playNewMessageSound")&&$c(3,Xd),mg()||$c(3,Ew)}const jw=[()=>!("showPicker"in HTMLSelectElement.prototype),()=>!navigator.cookieEnabled,()=>window!==window.parent,function(){if(!d){const e=l(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
u=c.includes(e),d=!0}return u}]
function Dw(e,t){if(jw.some((e=>e())))return
const n=Jl("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
oc(),function(e,t){dc.gmInfo=Vl(decodeURIComponent(t)),dc.gmInfo?dc.fshVer=e:dc.fshVer=`${e}_native`,dc.calfVer="148"}(e,t),s(),Cs(),Nw(n)}export{Op as $,Lv as A,Yd as B,kg as C,Ys as D,ww as E,bf as F,Y_ as G,fh as H,fc as I,dh as J,Mp as K,Fp as L,Ol as M,Fl as N,ug as O,Sd as P,Ac as Q,gd as R,xd as S,Tc as T,au as U,Fc as V,md as W,vd as X,ku as Y,yu as Z,su as _,Lp as a,za as a$,iu as a0,hu as a1,gu as a2,cu as a3,du as a4,vu as a5,Xu as a6,a_ as a7,bu as a8,uu as a9,am as aA,pl as aB,Tm as aC,zs as aD,la as aE,t_ as aF,_y as aG,Ud as aH,om as aI,nm as aJ,l_ as aK,zp as aL,Z_ as aM,hy as aN,ma as aO,ba as aP,Cc as aQ,ja as aR,pa as aS,Ll as aT,lm as aU,Bd as aV,Iv as aW,o as aX,Qf as aY,al as aZ,Wa as a_,Su as aa,Jv as ab,tb as ac,n as ad,lb as ae,Pc as af,Zm as ag,Of as ah,Ff as ai,jd as aj,wg as ak,Ul as al,jg as am,qv as an,dc as ao,cc as ap,jl as aq,Ef as ar,$a as as,nb as at,hd as au,pd as av,Dl as aw,fu as ax,Ds as ay,Ns as az,jp as b,Bu as b$,Xa as b0,Va as b1,iy as b2,ph as b3,Ra as b4,ca as b5,Ua as b6,lh as b7,Vs as b8,tl as b9,Ks as bA,Za as bB,il as bC,ud as bD,cd as bE,ad as bF,ld as bG,Hu as bH,Js as bI,kd as bJ,wd as bK,yd as bL,rm as bM,Aa as bN,Cd as bO,$d as bP,Q_ as bQ,ra as bR,Wb as bS,hc as bT,Rl as bU,va as bV,Vg as bW,Vp as bX,Hs as bY,Us as bZ,Hc as b_,nh as ba,Vl as bb,$c as bc,Pm as bd,xf as be,wl as bf,yl as bg,Sl as bh,kl as bi,xl as bj,Dd as bk,qd as bl,Wl as bm,Ws as bn,Ga as bo,wu as bp,lu as bq,Fa as br,jc as bs,Ta as bt,xg as bu,Ku as bv,qh as bw,Uh as bx,Bb as by,Jg as bz,lc as c,_l as c$,nl as c0,Ka as c1,sl as c2,ll as c3,cl as c4,Hp as c5,Bp as c6,qp as c7,Qa as c8,Ja as c9,dl as cA,Xs as cB,Lb as cC,Mg as cD,kf as cE,xa as cF,Lm as cG,bl as cH,fl as cI,sa as cJ,em as cK,n_ as cL,qs as cM,js as cN,a as cO,Es as cP,Ch as cQ,Gh as cR,Hb as cS,qc as cT,Wc as cU,zc as cV,Gc as cW,qu as cX,e as cY,Jl as cZ,Cu as c_,rl as ca,As as cb,el as cc,X_ as cd,vg as ce,c_ as cf,Np as cg,Bs as ch,Qp as ci,Jc as cj,Pl as ck,Kp as cl,zl as cm,Ml as cn,vl as co,mf as cp,Up as cq,ya as cr,Tl as cs,my as ct,uc as cu,Na as cv,ih as cw,Rb as cx,ul as cy,lg as cz,Wd as d,yg as d$,If as d0,Gu as d1,bd as d2,Yu as d3,Kc as d4,Ip as d5,ag as d6,fa as d7,Gs as d8,El as d9,na as dA,ia as dB,hl as dC,Nf as dD,Pa as dE,Tv as dF,oa as dG,Ub as dH,tm as dI,ta as dJ,qf as dK,rw as dL,pu as dM,fd as dN,Rd as dO,Da as dP,Ba as dQ,Qm as dR,Um as dS,ju as dT,ff as dU,Bl as dV,_d as dW,$u as dX,_u as dY,Ea as dZ,Zg as d_,Sg as da,ml as db,Gl as dc,fw as dd,vw as de,cw as df,Xg as dg,Kg as dh,oh as di,sh as dj,Qs as dk,up as dl,ep as dm,np as dn,ip as dp,tp as dq,ap as dr,Cl as ds,$l as dt,Ag as du,mu as dv,Mc as dw,aa as dx,Zs as dy,Qv as dz,Cf as e,ga as e0,Lu as e1,Du as e2,Vc as e3,ka as e4,qa as e5,sm as e6,bg as e7,ev as e8,Ug as e9,Wf as eA,_a as eB,Dw as eC,Hg as ea,Gg as eb,Bg as ec,qg as ed,Dg as ee,Wg as ef,zg as eg,uv as eh,av as ei,cv as ej,lv as ek,iv as el,Jy as em,Hy as en,Fy as eo,Tu as ep,Ic as eq,Og as er,Ng as es,eg as et,da as eu,Sa as ev,Qc as ew,Uf as ex,Bc as ey,Lf as ez,Fg as f,t as g,Ap as h,$f as i,gg as j,gl as k,dg as l,Il as m,Sf as n,cg as o,Kd as p,Ql as q,l as r,gf as s,ah as t,Oa as u,Qg as v,rh as w,i_ as x,Pv as y,Hd as z}
//# sourceMappingURL=calfSystem-BldO1y8X.js.map
