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
for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _,v={DEBUG:!1,LIB_VERSION:"1.203.2"},m="undefined"!=typeof window?window:void 0,b="undefined"!=typeof globalThis?globalThis:m,y=Array.prototype,w=y.forEach,k=y.indexOf,S=null==b?void 0:b.navigator,x=null==b?void 0:b.document,E=null==b?void 0:b.location,C=null==b?void 0:b.fetch,T=null!=b&&b.XMLHttpRequest&&"withCredentials"in new b.XMLHttpRequest?b.XMLHttpRequest:void 0,P=null==b?void 0:b.AbortController,L=null==S?void 0:S.userAgent,I=null!=m?m:{},R="$copy_autocapture",O=["$snapshot","$pageview","$pageleave","$set","survey dismissed","survey sent","survey shown","$identify","$groupidentify","$create_alias","$$client_ingestion_warning","$web_experiment_applied","$feature_enrollment_update","$feature_flag_called"]
function M(e,t){return-1!==e.indexOf(t)}!function(e){e.GZipJS="gzip-js",e.Base64="base64"}(_||(_={}))
var F=function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},A=function(e){return e.replace(/^\$/,"")},N=Array.isArray,j=Object.prototype,D=j.hasOwnProperty,B=j.toString,H=N||function(e){return"[object Array]"===B.call(e)},U=e=>"function"==typeof e,q=e=>e===Object(e)&&!H(e),G=e=>{if(q(e)){for(var t in e)if(D.call(e,t))return!1
return!0}return!1},W=e=>void 0===e,z=e=>"[object String]"==B.call(e),V=e=>z(e)&&0===e.trim().length,Q=e=>null===e,J=e=>W(e)||Q(e),K=e=>"[object Number]"==B.call(e),X=e=>"[object Boolean]"===B.call(e),Y=e=>e instanceof FormData,Z=e=>M(O,e),ee=e=>{var t={_log:function(t){if(m&&(v.DEBUG||I.POSTHOG_DEBUG)&&!W(m.console)&&m.console){for(var n=("__rrweb_original__"in m.console[t]?m.console[t].__rrweb_original__:m.console[t]),i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o]
n(e,...r)}},info:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i]
t._log("log",...n)},warn:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i]
t._log("warn",...n)},error:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i]
t._log("error",...n)},critical:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i]
console.error(e,...n)},uninitializedWarning:e=>{t.error("You must initialize PostHog before calling ".concat(e))},createLogger:t=>ee("".concat(e," ").concat(t))}
return t},te=ee("[PostHog.js]"),ne=te.createLogger,ie={}
function re(e,t,n){if(H(e))if(w&&e.forEach===w)e.forEach(t,n)
else if("length"in e&&e.length===+e.length)for(var i=0,r=e.length;i<r;i++)if(i in e&&t.call(n,e[i],i)===ie)return}function oe(e,t,n){if(!J(e)){if(H(e))return re(e,t,n)
if(Y(e)){for(var i of e.entries())if(t.call(n,i[1],i[0])===ie)return}else for(var r in e)if(D.call(e,r)&&t.call(n,e[r],r)===ie)return}}var se=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
return re(n,(function(t){for(var n in t)void 0!==t[n]&&(e[n]=t[n])})),e}
function ae(e){for(var t=Object.keys(e),n=t.length,i=new Array(n);n--;)i[n]=[t[n],e[t[n]]]
return i}var le=function(e){try{return e()}catch(e){return}},ce=function(e){return function(){try{for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i]
return e.apply(this,n)}catch(e){te.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."),te.critical(e)}}},ue=function(e){var t={}
return oe(e,(function(e,n){z(e)&&e.length>0&&(t[n]=e)})),t}
var de=function(){function e(t){return t&&(t.preventDefault=e.preventDefault,t.stopPropagation=e.stopPropagation),t}return e.preventDefault=function(){this.returnValue=!1},e.stopPropagation=function(){this.cancelBubble=!0},function(t,n,i,r,o){if(t)if(t.addEventListener&&!r)t.addEventListener(n,i,!!o)
else{var s="on"+n,a=t[s]
t[s]=function(t,n,i){return function(r){if(r=r||e(null==m?void 0:m.event)){var o,s=!0
U(i)&&(o=i(r))
var a=n.call(t,r)
return!1!==o&&!1!==a||(s=!1),s}}}(t,i,a)}else te.error("No valid element provided to register_event")}}()
function fe(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}var he="$people_distinct_id",pe="__alias",ge="__timers",_e="$autocapture_disabled_server_side",ve="$heatmaps_enabled_server_side",me="$exception_capture_enabled_server_side",be="$web_vitals_enabled_server_side",ye="$dead_clicks_enabled_server_side",we="$web_vitals_allowed_metrics",ke="$session_recording_enabled_server_side",Se="$console_log_recording_enabled_server_side",xe="$session_recording_network_payload_capture",Ee="$session_recording_canvas_recording",Ce="$replay_sample_rate",$e="$replay_minimum_duration",Te="$replay_script_config",Pe="$sesid",Le="$session_is_sampled",Ie="$session_recording_url_trigger_activated_session",Re="$session_recording_event_trigger_activated_session",Oe="$enabled_feature_flags",Me="$early_access_features",Fe="$stored_person_properties",Ae="$stored_group_properties",Ne="$surveys",je="$surveys_activated",De="$flag_call_reported",Be="$user_state",He="$client_session_props",Ue="$capture_rate_limit",qe="$initial_campaign_params",Ge="$initial_referrer_info",We="$initial_person_info",ze="$epp",Ve="__POSTHOG_TOOLBAR__",Qe="$posthog_cklsh",Je=[he,pe,"__cmpns",ge,ke,ve,Pe,Oe,Be,Me,Ae,Fe,Ne,De,He,Ue,qe,Ge,ze],Ke=ne("[FeatureFlags]"),Xe="$active_feature_flags",Ye="$override_feature_flags",Ze="$feature_flag_payloads",et=e=>{var t={}
for(var[n,i]of ae(e||{}))i&&(t[n]=i)
return t}
class tt{constructor(e){p(this,"_override_warning",!1),p(this,"_hasLoadedFlags",!1),p(this,"_requestInFlight",!1),p(this,"_reloadingDisabled",!1),p(this,"_additionalReloadRequested",!1),p(this,"_decideCalled",!1),p(this,"_flagsLoadedFromRemote",!1),this.instance=e,this.featureFlagEventHandlers=[]}decide(){if(this.instance.config.__preview_remote_config)this._decideCalled=!0
else{var e=!this._reloadDebouncer&&(this.instance.config.advanced_disable_feature_flags||this.instance.config.advanced_disable_feature_flags_on_first_load)
this._callDecideEndpoint({disableFlags:e})}}get hasLoadedFlags(){return this._hasLoadedFlags}getFlags(){return Object.keys(this.getFlagVariants())}getFlagVariants(){var e=this.instance.get_property(Oe),t=this.instance.get_property(Ye)
if(!t)return e||{}
for(var n=se({},e),i=Object.keys(t),r=0;r<i.length;r++)n[i[r]]=t[i[r]]
return this._override_warning||(Ke.warn(" Overriding feature flags!",{enabledFlags:e,overriddenFlags:t,finalFlags:n}),this._override_warning=!0),n}getFlagPayloads(){return this.instance.get_property(Ze)||{}}reloadFeatureFlags(){this._reloadingDisabled||this.instance.config.advanced_disable_feature_flags||this._reloadDebouncer||(this._reloadDebouncer=setTimeout((()=>{this._callDecideEndpoint()}),5))}clearDebouncer(){clearTimeout(this._reloadDebouncer),this._reloadDebouncer=void 0}ensureFlagsLoaded(){this._hasLoadedFlags||this._requestInFlight||this._reloadDebouncer||this.reloadFeatureFlags()}setAnonymousDistinctId(e){this.$anon_distinct_id=e}setReloadingPaused(e){this._reloadingDisabled=e}_callDecideEndpoint(e){if(this.clearDebouncer(),!this.instance.config.advanced_disable_decide)if(this._requestInFlight)this._additionalReloadRequested=!0
else{var t={token:this.instance.config.token,distinct_id:this.instance.get_distinct_id(),groups:this.instance.getGroups(),$anon_distinct_id:this.$anon_distinct_id,person_properties:this.instance.get_property(Fe),group_properties:this.instance.get_property(Ae)};(null!=e&&e.disableFlags||this.instance.config.advanced_disable_feature_flags)&&(t.disable_flags=!0),this._requestInFlight=!0,this.instance._send_request({method:"POST",url:this.instance.requestRouter.endpointFor("api","/decide/?v=3"),data:t,compression:this.instance.config.disable_compression?void 0:_.Base64,timeout:this.instance.config.feature_flag_request_timeout_ms,callback:e=>{var n,i,r=!0
200===e.statusCode&&(this.$anon_distinct_id=void 0,r=!1),this._requestInFlight=!1,this._decideCalled||(this._decideCalled=!0,this.instance._onRemoteConfig(null!==(i=e.json)&&void 0!==i?i:{})),t.disable_flags||(this._flagsLoadedFromRemote=!r,this.receivedFeatureFlags(null!==(n=e.json)&&void 0!==n?n:{},r),this._additionalReloadRequested&&(this._additionalReloadRequested=!1,this._callDecideEndpoint()))}})}}getFeatureFlag(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0){var n,i,r,o,s,a=this.getFlagVariants()[e],l="".concat(a),c=this.instance.get_property(De)||{}
return!t.send_event&&"send_event"in t||e in c&&c[e].includes(l)||(H(c[e])?c[e].push(l):c[e]=[l],null===(n=this.instance.persistence)||void 0===n||n.register({[De]:c}),this.instance.capture("$feature_flag_called",{$feature_flag:e,$feature_flag_response:a,$feature_flag_payload:this.getFeatureFlagPayload(e)||null,$feature_flag_bootstrapped_response:(null===(i=this.instance.config.bootstrap)||void 0===i||null===(r=i.featureFlags)||void 0===r?void 0:r[e])||null,$feature_flag_bootstrapped_payload:(null===(o=this.instance.config.bootstrap)||void 0===o||null===(s=o.featureFlagPayloads)||void 0===s?void 0:s[e])||null,$used_bootstrap_value:!this._flagsLoadedFromRemote})),a}Ke.warn('getFeatureFlag for key "'+e+"\" failed. Feature flags didn't load in time.")}getFeatureFlagPayload(e){return this.getFlagPayloads()[e]}isFeatureEnabled(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0)return!!this.getFeatureFlag(e,t)
Ke.warn('isFeatureEnabled for key "'+e+"\" failed. Feature flags didn't load in time.")}addFeatureFlagsHandler(e){this.featureFlagEventHandlers.push(e)}removeFeatureFlagsHandler(e){this.featureFlagEventHandlers=this.featureFlagEventHandlers.filter((t=>t!==e))}receivedFeatureFlags(e,t){if(this.instance.persistence){this._hasLoadedFlags=!0
var n=this.getFlagVariants(),i=this.getFlagPayloads()
!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=e.featureFlags,o=e.featureFlagPayloads
if(r)if(H(r)){var s={}
if(r)for(var a=0;a<r.length;a++)s[r[a]]=!0
t&&t.register({[Xe]:r,[Oe]:s})}else{var l=r,c=o
e.errorsWhileComputingFlags&&(l=h(h({},n),l),c=h(h({},i),c)),t&&t.register({[Xe]:Object.keys(et(l)),[Oe]:l||{},[Ze]:c||{}})}}(e,this.instance.persistence,n,i),this._fireFeatureFlagsCallbacks(t)}}override(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(!this.instance.__loaded||!this.instance.persistence)return Ke.uninitializedWarning("posthog.feature_flags.override")
if(this._override_warning=t,!1===e)this.instance.persistence.unregister(Ye)
else if(H(e)){for(var n={},i=0;i<e.length;i++)n[e[i]]=!0
this.instance.persistence.register({[Ye]:n})}else this.instance.persistence.register({[Ye]:e})}onFeatureFlags(e){if(this.addFeatureFlagsHandler(e),this._hasLoadedFlags){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
e(t,n)}return()=>this.removeFeatureFlagsHandler(e)}updateEarlyAccessFeatureEnrollment(e,t){var n,i=(this.instance.get_property(Me)||[]).find((t=>t.flagKey===e)),r={["$feature_enrollment/".concat(e)]:t},o={$feature_flag:e,$feature_enrollment:t,$set:r}
i&&(o.$early_access_feature_name=i.name),this.instance.capture("$feature_enrollment_update",o),this.setPersonPropertiesForFlags(r,!1)
var s=h(h({},this.getFlagVariants()),{},{[e]:t})
null===(n=this.instance.persistence)||void 0===n||n.register({[Xe]:Object.keys(et(s)),[Oe]:s}),this._fireFeatureFlagsCallbacks()}getEarlyAccessFeatures(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.instance.get_property(Me)
if(n&&!t)return e(n)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api","/api/early_access_features/?token=".concat(this.instance.config.token)),method:"GET",callback:t=>{var n
if(t.json){var i=t.json.earlyAccessFeatures
return null===(n=this.instance.persistence)||void 0===n||n.register({[Me]:i}),e(i)}}})}_prepareFeatureFlagsForCallbacks(){var e=this.getFlags(),t=this.getFlagVariants()
return{flags:e.filter((e=>t[e])),flagVariants:Object.keys(t).filter((e=>t[e])).reduce(((e,n)=>(e[n]=t[n],e)),{})}}_fireFeatureFlagsCallbacks(e){var{flags:t,flagVariants:n}=this._prepareFeatureFlagsForCallbacks()
this.featureFlagEventHandlers.forEach((i=>i(t,n,{errorsLoading:e})))}setPersonPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.instance.get_property(Fe)||{}
this.instance.register({[Fe]:h(h({},n),e)}),t&&this.instance.reloadFeatureFlags()}resetPersonPropertiesForFlags(){this.instance.unregister(Fe)}setGroupPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.instance.get_property(Ae)||{}
0!==Object.keys(n).length&&Object.keys(n).forEach((t=>{n[t]=h(h({},n[t]),e[t]),delete e[t]})),this.instance.register({[Ae]:h(h({},n),e)}),t&&this.instance.reloadFeatureFlags()}resetGroupPropertiesForFlags(e){if(e){var t=this.instance.get_property(Ae)||{}
this.instance.register({[Ae]:h(h({},t),{},{[e]:{}})})}else this.instance.unregister(Ae)}}Math.trunc||(Math.trunc=function(e){return e<0?Math.ceil(e):Math.floor(e)}),Number.isInteger||(Number.isInteger=function(e){return K(e)&&isFinite(e)&&Math.floor(e)===e})
var nt="0123456789abcdef"
class it{constructor(e){if(this.bytes=e,16!==e.length)throw new TypeError("not 128-bit length")}static fromFieldsV7(e,t,n,i){if(!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(n)||!Number.isInteger(i)||e<0||t<0||n<0||i<0||e>0xffffffffffff||t>4095||n>1073741823||i>4294967295)throw new RangeError("invalid field value")
var r=new Uint8Array(16)
return r[0]=e/Math.pow(2,40),r[1]=e/Math.pow(2,32),r[2]=e/Math.pow(2,24),r[3]=e/Math.pow(2,16),r[4]=e/Math.pow(2,8),r[5]=e,r[6]=112|t>>>8,r[7]=t,r[8]=128|n>>>24,r[9]=n>>>16,r[10]=n>>>8,r[11]=n,r[12]=i>>>24,r[13]=i>>>16,r[14]=i>>>8,r[15]=i,new it(r)}toString(){for(var e="",t=0;t<this.bytes.length;t++)e=e+nt.charAt(this.bytes[t]>>>4)+nt.charAt(15&this.bytes[t]),3!==t&&5!==t&&7!==t&&9!==t||(e+="-")
if(36!==e.length)throw new Error("Invalid UUIDv7 was generated")
return e}clone(){return new it(this.bytes.slice(0))}equals(e){return 0===this.compareTo(e)}compareTo(e){for(var t=0;t<16;t++){var n=this.bytes[t]-e.bytes[t]
if(0!==n)return Math.sign(n)}return 0}}class rt{constructor(){p(this,"timestamp",0),p(this,"counter",0),p(this,"random",new at)}generate(){var e=this.generateOrAbort()
if(W(e)){this.timestamp=0
var t=this.generateOrAbort()
if(W(t))throw new Error("Could not generate UUID after timestamp reset")
return t}return e}generateOrAbort(){var e=Date.now()
if(e>this.timestamp)this.timestamp=e,this.resetCounter()
else{if(!(e+1e4>this.timestamp))return
this.counter++,this.counter>4398046511103&&(this.timestamp++,this.resetCounter())}return it.fromFieldsV7(this.timestamp,Math.trunc(this.counter/Math.pow(2,30)),this.counter&Math.pow(2,30)-1,this.random.nextUint32())}resetCounter(){this.counter=1024*this.random.nextUint32()+(1023&this.random.nextUint32())}}var ot,st=e=>{if("undefined"!=typeof UUIDV7_DENY_WEAK_RNG&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available")
for(var t=0;t<e.length;t++)e[t]=65536*Math.trunc(65536*Math.random())+Math.trunc(65536*Math.random())
return e}
m&&!W(m.crypto)&&crypto.getRandomValues&&(st=e=>crypto.getRandomValues(e))
class at{constructor(){p(this,"buffer",new Uint32Array(8)),p(this,"cursor",1/0)}nextUint32(){return this.cursor>=this.buffer.length&&(st(this.buffer),this.cursor=0),this.buffer[this.cursor++]}}var lt=()=>ct().toString(),ct=()=>(ot||(ot=new rt)).generate(),ut="",dt=/[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i
var ft={is_supported:()=>!!x,error:function(e){te.error("cookieStore error: "+e)},get:function(e){if(x){try{for(var t=e+"=",n=x.cookie.split(";").filter((e=>e.length)),i=0;i<n.length;i++){for(var r=n[i];" "==r.charAt(0);)r=r.substring(1,r.length)
if(0===r.indexOf(t))return decodeURIComponent(r.substring(t.length,r.length))}}catch(e){}return null}},parse:function(e){var t
try{t=JSON.parse(ft.get(e))||{}}catch(e){}return t},set:function(e,t,n,i,r){if(x)try{var o="",s="",a=function(e,t){if(t){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x
if(ut)return ut
if(!t)return""
if(["localhost","127.0.0.1"].includes(e))return""
for(var n=e.split("."),i=Math.min(n.length,8),r="dmn_chk_"+lt(),o=new RegExp("(^|;)\\s*"+r+"=1");!ut&&i--;){var s=n.slice(i).join("."),a=r+"=1;domain=."+s
t.cookie=a,o.test(t.cookie)&&(t.cookie=a+";expires=Thu, 01 Jan 1970 00:00:00 GMT",ut=s)}return ut}(e)
if(!n){var i=(e=>{var t=e.match(dt)
return t?t[0]:""})(e)
i!==n&&te.info("Warning: cookie subdomain discovery mismatch",i,n),n=i}return n?"; domain=."+n:""}return""}(x.location.hostname,i)
if(n){var l=new Date
l.setTime(l.getTime()+24*n*60*60*1e3),o="; expires="+l.toUTCString()}r&&(s="; secure")
var c=e+"="+encodeURIComponent(JSON.stringify(t))+o+"; SameSite=Lax; path=/"+a+s
return c.length>3686.4&&te.warn("cookieStore warning: large cookie, len="+c.length),x.cookie=c,c}catch(e){return}},remove:function(e,t){try{ft.set(e,"",-1,t)}catch(e){return}}},ht=null,pt={is_supported:function(){if(!Q(ht))return ht
var e=!0
if(W(m))e=!1
else try{var t="__mplssupport__"
pt.set(t,"xyz"),'"xyz"'!==pt.get(t)&&(e=!1),pt.remove(t)}catch(t){e=!1}return e||te.error("localStorage unsupported; falling back to cookie store"),ht=e,e},error:function(e){te.error("localStorage error: "+e)},get:function(e){try{return null==m?void 0:m.localStorage.getItem(e)}catch(e){pt.error(e)}return null},parse:function(e){try{return JSON.parse(pt.get(e))||{}}catch(e){}return null},set:function(e,t){try{null==m||m.localStorage.setItem(e,JSON.stringify(t))}catch(e){pt.error(e)}},remove:function(e){try{null==m||m.localStorage.removeItem(e)}catch(e){pt.error(e)}}},gt=["distinct_id",Pe,Le,ze,We],_t=h(h({},pt),{},{parse:function(e){try{var t={}
try{t=ft.parse(e)||{}}catch(e){}var n=se(t,JSON.parse(pt.get(e)||"{}"))
return pt.set(e,n),n}catch(e){}return null},set:function(e,t,n,i,r,o){try{pt.set(e,t,void 0,void 0,o)
var s={}
gt.forEach((e=>{t[e]&&(s[e]=t[e])})),Object.keys(s).length&&ft.set(e,s,n,i,r,o)}catch(e){pt.error(e)}},remove:function(e,t){try{null==m||m.localStorage.removeItem(e),ft.remove(e,t)}catch(e){pt.error(e)}}}),vt={},mt={is_supported:function(){return!0},error:function(e){te.error("memoryStorage error: "+e)},get:function(e){return vt[e]||null},parse:function(e){return vt[e]||null},set:function(e,t){vt[e]=t},remove:function(e){delete vt[e]}},bt=null,yt={is_supported:function(){if(!Q(bt))return bt
if(bt=!0,W(m))bt=!1
else try{var e="__support__"
yt.set(e,"xyz"),'"xyz"'!==yt.get(e)&&(bt=!1),yt.remove(e)}catch(e){bt=!1}return bt},error:function(e){te.error("sessionStorage error: ",e)},get:function(e){try{return null==m?void 0:m.sessionStorage.getItem(e)}catch(e){yt.error(e)}return null},parse:function(e){try{return JSON.parse(yt.get(e))||null}catch(e){}return null},set:function(e,t){try{null==m||m.sessionStorage.setItem(e,JSON.stringify(t))}catch(e){yt.error(e)}},remove:function(e){try{null==m||m.sessionStorage.removeItem(e)}catch(e){yt.error(e)}}},wt=["localhost","127.0.0.1"],kt=e=>{var t=null==x?void 0:x.createElement("a")
return W(t)?null:(t.href=e,t)},St=function(e,t){return!!function(e){try{new RegExp(e)}catch(e){return!1}return!0}(t)&&new RegExp(t).test(e)},xt=function(e,t){for(var n,i=((e.split("#")[0]||"").split("?")[1]||"").split("&"),r=0;r<i.length;r++){var o=i[r].split("=")
if(o[0]===t){n=o
break}}if(!H(n)||n.length<2)return""
var s=n[1]
try{s=decodeURIComponent(s)}catch(e){te.error("Skipping decoding for malformed query param: "+s)}return s.replace(/\+/g," ")},Et=function(e,t){var n=e.match(new RegExp(t+"=([^&]*)"))
return n?n[1]:null},Ct="Mobile",$t="iOS",Tt="Android",Pt="Tablet",Lt=Tt+" "+Pt,It="iPad",Rt="Apple",Ot=Rt+" Watch",Mt="Safari",Ft="BlackBerry",At="Samsung",Nt=At+"Browser",jt=At+" Internet",Dt="Chrome",Bt=Dt+" OS",Ht=Dt+" "+$t,Ut="Internet Explorer",qt=Ut+" "+Ct,Gt="Opera",Wt=Gt+" Mini",zt="Edge",Vt="Microsoft "+zt,Qt="Firefox",Jt=Qt+" "+$t,Kt="Nintendo",Xt="PlayStation",Yt="Xbox",Zt=Tt+" "+Ct,en=Ct+" "+Mt,tn="Windows",nn=tn+" Phone",rn="Nokia",on="Ouya",sn="Generic",an=sn+" "+Ct.toLowerCase(),ln=sn+" "+Pt.toLowerCase(),cn="Konqueror",un="(\\d+(\\.\\d+)?)",dn=new RegExp("Version/"+un),fn=new RegExp(Yt,"i"),hn=new RegExp(Xt+" \\w+","i"),pn=new RegExp(Kt+" \\w+","i"),gn=new RegExp(Ft+"|PlayBook|BB10","i"),_n={"NT3.51":"NT 3.11","NT4.0":"NT 4.0","5.0":"2000",5.1:"XP",5.2:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1",6.4:"10","10.0":"10"},vn=function(e,t){return t=t||"",M(e," OPR/")&&M(e,"Mini")?Wt:M(e," OPR/")?Gt:gn.test(e)?Ft:M(e,"IE"+Ct)||M(e,"WPDesktop")?qt:M(e,Nt)?jt:M(e,zt)||M(e,"Edg/")?Vt:M(e,"FBIOS")?"Facebook "+Ct:M(e,"UCWEB")||M(e,"UCBrowser")?"UC Browser":M(e,"CriOS")?Ht:M(e,"CrMo")||M(e,Dt)?Dt:M(e,Tt)&&M(e,Mt)?Zt:M(e,"FxiOS")?Jt:M(e.toLowerCase(),cn.toLowerCase())?cn:((e,t)=>t&&M(t,Rt)||function(e){return M(e,Mt)&&!M(e,Dt)&&!M(e,Tt)}(e))(e,t)?M(e,Ct)?en:Mt:M(e,Qt)?Qt:M(e,"MSIE")||M(e,"Trident/")?Ut:M(e,"Gecko")?Qt:""},mn={[qt]:[new RegExp("rv:"+un)],[Vt]:[new RegExp(zt+"?\\/"+un)],[Dt]:[new RegExp("("+Dt+"|CrMo)\\/"+un)],[Ht]:[new RegExp("CriOS\\/"+un)],"UC Browser":[new RegExp("(UCBrowser|UCWEB)\\/"+un)],[Mt]:[dn],[en]:[dn],[Gt]:[new RegExp("(Opera|OPR)\\/"+un)],[Qt]:[new RegExp(Qt+"\\/"+un)],[Jt]:[new RegExp("FxiOS\\/"+un)],[cn]:[new RegExp("Konqueror[:/]?"+un,"i")],[Ft]:[new RegExp(Ft+" "+un),dn],[Zt]:[new RegExp("android\\s"+un,"i")],[jt]:[new RegExp(Nt+"\\/"+un)],[Ut]:[new RegExp("(rv:|MSIE )"+un)],Mozilla:[new RegExp("rv:"+un)]},bn=[[new RegExp(Yt+"; "+Yt+" (.*?)[);]","i"),e=>[Yt,e&&e[1]||""]],[new RegExp(Kt,"i"),[Kt,""]],[new RegExp(Xt,"i"),[Xt,""]],[gn,[Ft,""]],[new RegExp(tn,"i"),(e,t)=>{if(/Phone/.test(t)||/WPDesktop/.test(t))return[nn,""]
if(new RegExp(Ct).test(t)&&!/IEMobile\b/.test(t))return[tn+" "+Ct,""]
var n=/Windows NT ([0-9.]+)/i.exec(t)
if(n&&n[1]){var i=n[1],r=_n[i]||""
return/arm/i.test(t)&&(r="RT"),[tn,r]}return[tn,""]}],[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,e=>{if(e&&e[3]){var t=[e[3],e[4],e[5]||"0"]
return[$t,t.join(".")]}return[$t,""]}],[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,e=>{var t=""
return e&&e.length>=3&&(t=W(e[2])?e[3]:e[2]),["watchOS",t]}],[new RegExp("("+Tt+" (\\d+)\\.(\\d+)\\.?(\\d+)?|"+Tt+")","i"),e=>{if(e&&e[2]){var t=[e[2],e[3],e[4]||"0"]
return[Tt,t.join(".")]}return[Tt,""]}],[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,e=>{var t=["Mac OS X",""]
if(e&&e[1]){var n=[e[1],e[2],e[3]||"0"]
t[1]=n.join(".")}return t}],[/Mac/i,["Mac OS X",""]],[/CrOS/,[Bt,""]],[/Linux|debian/i,["Linux",""]]],yn=function(e){return pn.test(e)?Kt:hn.test(e)?Xt:fn.test(e)?Yt:new RegExp(on,"i").test(e)?on:new RegExp("("+nn+"|WPDesktop)","i").test(e)?nn:/iPad/.test(e)?It:/iPod/.test(e)?"iPod Touch":/iPhone/.test(e)?"iPhone":/(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)?Ot:gn.test(e)?Ft:/(kobo)\s(ereader|touch)/i.test(e)?"Kobo":new RegExp(rn,"i").test(e)?rn:/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e)||/(kf[a-z]+)( bui|\)).+silk\//i.test(e)?"Kindle Fire":/(Android|ZTE)/i.test(e)?!new RegExp(Ct).test(e)||/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e)?/pixel[\daxl ]{1,6}/i.test(e)&&!/pixel c/i.test(e)||/(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e)||/lmy47v/i.test(e)&&!/QTAQZ3/i.test(e)?Tt:Lt:Tt:new RegExp("(pda|"+Ct+")","i").test(e)?an:new RegExp(Pt,"i").test(e)&&!new RegExp(Pt+" pc","i").test(e)?ln:""},wn="https?://(.*)",kn=["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gclid","gad_source","gclsrc","dclid","gbraid","wbraid","fbclid","msclkid","twclid","li_fat_id","mc_cid","igshid","ttclid","rdt_cid"],Sn={campaignParams:function(e){return x?this._campaignParamsFromUrl(x.URL,e):{}},_campaignParamsFromUrl:function(e,t){var n=kn.concat(t||[]),i={}
return oe(n,(function(t){var n=xt(e,t)
i[t]=n||null})),i},_searchEngine:function(e){return e?0===e.search(wn+"google.([^/?]*)")?"google":0===e.search(wn+"bing.com")?"bing":0===e.search(wn+"yahoo.com")?"yahoo":0===e.search(wn+"duckduckgo.com")?"duckduckgo":null:null},_searchInfoFromReferrer:function(e){var t=Sn._searchEngine(e),n="yahoo"!=t?"q":"p",i={}
if(!Q(t)){i.$search_engine=t
var r=x?xt(x.referrer,n):""
r.length&&(i.ph_keyword=r)}return i},searchInfo:function(){var e=null==x?void 0:x.referrer
return e?this._searchInfoFromReferrer(e):{}},browser:vn,browserVersion:function(e,t){var n=vn(e,t),i=mn[n]
if(W(i))return null
for(var r=0;r<i.length;r++){var o=i[r],s=e.match(o)
if(s)return parseFloat(s[s.length-2])}return null},browserLanguage:function(){return navigator.language||navigator.userLanguage},browserLanguagePrefix:function(){var e=this.browserLanguage()
return"string"==typeof e?e.split("-")[0]:void 0},os:function(e){for(var t=0;t<bn.length;t++){var[n,i]=bn[t],r=n.exec(e),o=r&&(U(i)?i(r,e):i)
if(o)return o}return["",""]},device:yn,deviceType:function(e){var t=yn(e)
return t===It||t===Lt||"Kobo"===t||"Kindle Fire"===t||t===ln?Pt:t===Kt||t===Yt||t===Xt||t===on?"Console":t===Ot?"Wearable":t?Ct:"Desktop"},referrer:function(){return(null==x?void 0:x.referrer)||"$direct"},referringDomain:function(){var e
return null!=x&&x.referrer&&(null===(e=kt(x.referrer))||void 0===e?void 0:e.host)||"$direct"},referrerInfo:function(){return{$referrer:this.referrer(),$referring_domain:this.referringDomain()}},initialPersonInfo:function(){return{r:this.referrer().substring(0,1e3),u:null==E?void 0:E.href.substring(0,1e3)}},initialPersonPropsFromInfo:function(e){var t,{r:n,u:i}=e,r={$initial_referrer:n,$initial_referring_domain:null==n?void 0:"$direct"==n?"$direct":null===(t=kt(n))||void 0===t?void 0:t.host}
if(i){r.$initial_current_url=i
var o=kt(i)
r.$initial_host=null==o?void 0:o.host,r.$initial_pathname=null==o?void 0:o.pathname,oe(this._campaignParamsFromUrl(i),(function(e,t){r["$initial_"+A(t)]=e}))}return n&&oe(this._searchInfoFromReferrer(n),(function(e,t){r["$initial_"+A(t)]=e})),r},timezone:function(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){return}},timezoneOffset:function(){try{return(new Date).getTimezoneOffset()}catch(e){return}},properties:function(){if(!L)return{}
var[e,t]=Sn.os(L)
return se(ue({$os:e,$os_version:t,$browser:Sn.browser(L,navigator.vendor),$device:Sn.device(L),$device_type:Sn.deviceType(L),$timezone:Sn.timezone(),$timezone_offset:Sn.timezoneOffset()}),{$current_url:null==E?void 0:E.href,$host:null==E?void 0:E.host,$pathname:null==E?void 0:E.pathname,$raw_user_agent:L.length>1e3?L.substring(0,997)+"...":L,$browser_version:Sn.browserVersion(L,navigator.vendor),$browser_language:Sn.browserLanguage(),$browser_language_prefix:Sn.browserLanguagePrefix(),$screen_height:null==m?void 0:m.screen.height,$screen_width:null==m?void 0:m.screen.width,$viewport_height:null==m?void 0:m.innerHeight,$viewport_width:null==m?void 0:m.innerWidth,$lib:"web",$lib_version:v.LIB_VERSION,$insert_id:Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10),$time:Date.now()/1e3})},people_properties:function(){if(!L)return{}
var[e,t]=Sn.os(L)
return se(ue({$os:e,$os_version:t,$browser:Sn.browser(L,navigator.vendor)}),{$browser_version:Sn.browserVersion(L,navigator.vendor)})}},xn=["cookie","localstorage","localstorage+cookie","sessionstorage","memory"]
class En{constructor(e){this.config=e,this.props={},this.campaign_params_saved=!1,this.name=(e=>{var t=""
return e.token&&(t=e.token.replace(/\+/g,"PL").replace(/\//g,"SL").replace(/=/g,"EQ")),e.persistence_name?"ph_"+e.persistence_name:"ph_"+t+"_posthog"})(e),this.storage=this.buildStorage(e),this.load(),e.debug&&te.info("Persistence loaded",e.persistence,h({},this.props)),this.update_config(e,e),this.save()}buildStorage(e){-1===xn.indexOf(e.persistence.toLowerCase())&&(te.critical("Unknown persistence type "+e.persistence+"; falling back to localStorage+cookie"),e.persistence="localStorage+cookie")
var t=e.persistence.toLowerCase()
return"localstorage"===t&&pt.is_supported()?pt:"localstorage+cookie"===t&&_t.is_supported()?_t:"sessionstorage"===t&&yt.is_supported()?yt:"memory"===t?mt:"cookie"===t?ft:_t.is_supported()?_t:ft}properties(){var e={}
return oe(this.props,(function(t,n){if(n===Oe&&q(t))for(var i=Object.keys(t),r=0;r<i.length;r++)e["$feature/".concat(i[r])]=t[i[r]]
else s=n,a=!1,(Q(o=Je)?a:k&&o.indexOf===k?-1!=o.indexOf(s):(oe(o,(function(e){if(a||(a=e===s))return ie})),a))||(e[n]=t)
var o,s,a})),e}load(){if(!this.disabled){var e=this.storage.parse(this.name)
e&&(this.props=se({},e))}}save(){this.disabled||this.storage.set(this.name,this.props,this.expire_days,this.cross_subdomain,this.secure,this.config.debug)}remove(){this.storage.remove(this.name,!1),this.storage.remove(this.name,!0)}clear(){this.remove(),this.props={}}register_once(e,t,n){if(q(e)){W(t)&&(t="None"),this.expire_days=W(n)?this.default_expiry:n
var i=!1
if(oe(e,((e,n)=>{this.props.hasOwnProperty(n)&&this.props[n]!==t||(this.props[n]=e,i=!0)})),i)return this.save(),!0}return!1}register(e,t){if(q(e)){this.expire_days=W(t)?this.default_expiry:t
var n=!1
if(oe(e,((t,i)=>{e.hasOwnProperty(i)&&this.props[i]!==t&&(this.props[i]=t,n=!0)})),n)return this.save(),!0}return!1}unregister(e){e in this.props&&(delete this.props[e],this.save())}update_campaign_params(){if(!this.campaign_params_saved){var e=Sn.campaignParams(this.config.custom_campaign_params)
G(ue(e))||this.register(e),this.campaign_params_saved=!0}}update_search_keyword(){this.register(Sn.searchInfo())}update_referrer_info(){this.register_once(Sn.referrerInfo(),void 0)}set_initial_person_info(){this.props[qe]||this.props[Ge]||this.register_once({[We]:Sn.initialPersonInfo()},void 0)}get_referrer_info(){return ue({$referrer:this.props.$referrer,$referring_domain:this.props.$referring_domain})}get_initial_props(){var e={}
oe([Ge,qe],(t=>{var n=this.props[t]
n&&oe(n,(function(t,n){e["$initial_"+A(n)]=t}))}))
var t=this.props[We]
if(t){var n=Sn.initialPersonPropsFromInfo(t)
se(e,n)}return e}safe_merge(e){return oe(this.props,(function(t,n){n in e||(e[n]=t)})),e}update_config(e,t){if(this.default_expiry=this.expire_days=e.cookie_expiration,this.set_disabled(e.disable_persistence),this.set_cross_subdomain(e.cross_subdomain_cookie),this.set_secure(e.secure_cookie),e.persistence!==t.persistence){var n=this.buildStorage(e),i=this.props
this.clear(),this.storage=n,this.props=i,this.save()}}set_disabled(e){this.disabled=e,this.disabled?this.remove():this.save()}set_cross_subdomain(e){e!==this.cross_subdomain&&(this.cross_subdomain=e,this.remove(),this.save())}get_cross_subdomain(){return!!this.cross_subdomain}set_secure(e){e!==this.secure&&(this.secure=e,this.remove(),this.save())}set_event_timer(e,t){var n=this.props[ge]||{}
n[e]=t,this.props[ge]=n,this.save()}remove_event_timer(e){var t=(this.props[ge]||{})[e]
return W(t)||(delete this.props[ge][e],this.save()),t}get_property(e){return this.props[e]}set_property(e,t){this.props[e]=t,this.save()}}function Cn(e){var t,n
return(null===(t=JSON.stringify(e,(n=[],function(e,t){if(q(t)){for(;n.length>0&&n[n.length-1]!==this;)n.pop()
return n.includes(t)?"[Circular]":(n.push(t),t)}return t})))||void 0===t?void 0:t.length)||0}function $n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6606028.8
if(e.size>=t&&e.data.length>1){var n=Math.floor(e.data.length/2),i=e.data.slice(0,n),r=e.data.slice(n)
return[$n({size:Cn(i),data:i,sessionId:e.sessionId,windowId:e.windowId}),$n({size:Cn(r),data:r,sessionId:e.sessionId,windowId:e.windowId})].flatMap((e=>e))}return[e]}var Tn=(e=>(e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin",e))(Tn||{}),Pn=(e=>(e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration",e[e.Selection=14]="Selection",e[e.AdoptedStyleSheet=15]="AdoptedStyleSheet",e[e.CustomElement=16]="CustomElement",e))(Pn||{})
function Ln(e){var t
return e instanceof Element&&(e.id===Ve||!(null===(t=e.closest)||void 0===t||!t.call(e,".toolbar-global-fade-container")))}function In(e){return!!e&&1===e.nodeType}function Rn(e,t){return!!e&&!!e.tagName&&e.tagName.toLowerCase()===t.toLowerCase()}function On(e){return!!e&&3===e.nodeType}function Mn(e){return!!e&&11===e.nodeType}function Fn(e){return e?F(e).split(/\s+/):[]}function An(e){var t=null==m?void 0:m.location.href
return!!(t&&e&&e.some((e=>t.match(e))))}function Nn(e){var t=""
switch(typeof e.className){case"string":t=e.className
break
case"object":t=(e.className&&"baseVal"in e.className?e.className.baseVal:null)||e.getAttribute("class")||""
break
default:t=""}return Fn(t)}function jn(e){return J(e)?null:F(e).split(/(\s+)/).filter((e=>Xn(e))).join("").replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)}function Dn(e){var t=""
return qn(e)&&!Gn(e)&&e.childNodes&&e.childNodes.length&&oe(e.childNodes,(function(e){var n
On(e)&&e.textContent&&(t+=null!==(n=jn(e.textContent))&&void 0!==n?n:"")})),F(t)}function Bn(e){return W(e.target)?e.srcElement||null:null!==(t=e.target)&&void 0!==t&&t.shadowRoot?e.composedPath()[0]||null:e.target||null
var t}var Hn=["a","button","form","input","select","textarea","label"]
function Un(e){var t=e.parentNode
return!(!t||!In(t))&&t}function qn(e){for(var t=e;t.parentNode&&!Rn(t,"body");t=t.parentNode){var n=Nn(t)
if(M(n,"ph-sensitive")||M(n,"ph-no-capture"))return!1}if(M(Nn(e),"ph-include"))return!0
var i=e.type||""
if(z(i))switch(i.toLowerCase()){case"hidden":case"password":return!1}var r=e.name||e.id||""
return!z(r)||!/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(r.replace(/[^a-zA-Z0-9]/g,""))}function Gn(e){return!!(Rn(e,"input")&&!["button","checkbox","submit","reset"].includes(e.type)||Rn(e,"select")||Rn(e,"textarea")||"true"===e.getAttribute("contenteditable"))}var Wn="(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",zn=new RegExp("^(?:".concat(Wn,")$")),Vn=new RegExp(Wn),Qn="\\d{3}-?\\d{2}-?\\d{4}",Jn=new RegExp("^(".concat(Qn,")$")),Kn=new RegExp("(".concat(Qn,")"))
function Xn(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(J(e))return!1
if(z(e)){if(e=F(e),(t?zn:Vn).test((e||"").replace(/[- ]/g,"")))return!1
if((t?Jn:Kn).test(e))return!1}return!0}function Yn(e){var t=Dn(e)
return Xn(t="".concat(t," ").concat(Zn(e)).trim())?t:""}function Zn(e){var t=""
return e&&e.childNodes&&e.childNodes.length&&oe(e.childNodes,(function(e){var n
if(e&&"span"===(null===(n=e.tagName)||void 0===n?void 0:n.toLowerCase()))try{var i=Dn(e)
t="".concat(t," ").concat(i).trim(),e.childNodes&&e.childNodes.length&&(t="".concat(t," ").concat(Zn(e)).trim())}catch(e){te.error("[AutoCapture]",e)}})),t}function ei(e){return function(e){var t=e.map((e=>{var t,n,i=""
if(e.tag_name&&(i+=e.tag_name),e.attr_class)for(var r of(e.attr_class.sort(),e.attr_class))i+=".".concat(r.replace(/"/g,""))
var o=h(h(h(h({},e.text?{text:e.text}:{}),{},{"nth-child":null!==(t=e.nth_child)&&void 0!==t?t:0,"nth-of-type":null!==(n=e.nth_of_type)&&void 0!==n?n:0},e.href?{href:e.href}:{}),e.attr_id?{attr_id:e.attr_id}:{}),e.attributes),s={}
return ae(o).sort(((e,t)=>{var[n]=e,[i]=t
return n.localeCompare(i)})).forEach((e=>{var[t,n]=e
return s[ti(t.toString())]=ti(n.toString())})),(i+=":")+ae(o).map((e=>{var[t,n]=e
return"".concat(t,'="').concat(n,'"')})).join("")}))
return t.join(";")}(function(e){return e.map((e=>{var t,n,i={text:null===(t=e.$el_text)||void 0===t?void 0:t.slice(0,400),tag_name:e.tag_name,href:null===(n=e.attr__href)||void 0===n?void 0:n.slice(0,2048),attr_class:ni(e),attr_id:e.attr__id,nth_child:e.nth_child,nth_of_type:e.nth_of_type,attributes:{}}
return ae(e).filter((e=>{var[t]=e
return 0===t.indexOf("attr__")})).forEach((e=>{var[t,n]=e
return i.attributes[t]=n})),i}))}(e))}function ti(e){return e.replace(/"|\\"/g,'\\"')}function ni(e){var t=e.attr__class
return t?H(t)?t:Fn(t):void 0}var ii="[SessionRecording]",ri="redacted",oi={initiatorTypes:["audio","beacon","body","css","early-hint","embed","fetch","frame","iframe","icon","image","img","input","link","navigation","object","ping","script","track","video","xmlhttprequest"],maskRequestFn:e=>e,recordHeaders:!1,recordBody:!1,recordInitialRequests:!1,recordPerformance:!1,performanceEntryTypeToObserve:["first-input","navigation","paint","resource"],payloadSizeLimitBytes:1e6,payloadHostDenyList:[".lr-ingest.io",".ingest.sentry.io",".clarity.ms","analytics.google.com"]},si=["authorization","x-forwarded-for","authorization","cookie","set-cookie","x-api-key","x-real-ip","remote-addr","forwarded","proxy-authorization","x-csrf-token","x-csrftoken","x-xsrf-token"],ai=["password","secret","passwd","api_key","apikey","auth","credentials","mysql_pwd","privatekey","private_key","token"],li=["/s/","/e/","/i/"]
function ci(e,t,n,i){if(J(e))return e
var r=(null==t?void 0:t["content-length"])||function(e){return new Blob([e]).size}(e)
return z(r)&&(r=parseInt(r)),r>n?ii+" ".concat(i," body too large to record (").concat(r," bytes)"):e}function ui(e,t){if(J(e))return e
var n=e
return Xn(n,!1)||(n=ii+" "+t+" body "+ri),oe(ai,(e=>{var i,r
null!==(i=n)&&void 0!==i&&i.length&&-1!==(null===(r=n)||void 0===r?void 0:r.indexOf(e))&&(n=ii+" "+t+" body "+ri+" as might contain: "+e)})),n}var di=(e,t)=>{var n,i,r,o={payloadSizeLimitBytes:oi.payloadSizeLimitBytes,performanceEntryTypeToObserve:[...oi.performanceEntryTypeToObserve],payloadHostDenyList:[...t.payloadHostDenyList||[],...oi.payloadHostDenyList]},s=!1!==e.session_recording.recordHeaders&&t.recordHeaders,a=!1!==e.session_recording.recordBody&&t.recordBody,l=!1!==e.capture_performance&&t.recordPerformance,c=(n=o,r=Math.min(1e6,null!==(i=n.payloadSizeLimitBytes)&&void 0!==i?i:1e6),e=>(null!=e&&e.requestBody&&(e.requestBody=ci(e.requestBody,e.requestHeaders,r,"Request")),null!=e&&e.responseBody&&(e.responseBody=ci(e.responseBody,e.responseHeaders,r,"Response")),e)),u=t=>{return c(((e,t)=>{var n,i=kt(e.name),r=0===t.indexOf("http")?null===(n=kt(t))||void 0===n?void 0:n.pathname:t
"/"===r&&(r="")
var o=null==i?void 0:i.pathname.replace(r||"","")
if(!(i&&o&&li.some((e=>0===o.indexOf(e)))))return e})((i=(n=t).requestHeaders,J(i)||oe(Object.keys(null!=i?i:{}),(e=>{si.includes(e.toLowerCase())&&(i[e]=ri)})),n),e.api_host))
var n,i},d=U(e.session_recording.maskNetworkRequestFn)
return d&&U(e.session_recording.maskCapturedNetworkRequestFn)&&te.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."),d&&(e.session_recording.maskCapturedNetworkRequestFn=t=>{var n=e.session_recording.maskNetworkRequestFn({url:t.name})
return h(h({},t),{},{name:null==n?void 0:n.url})}),o.maskRequestFn=U(e.session_recording.maskCapturedNetworkRequestFn)?t=>{var n,i,r,o=u(t)
return o&&null!==(n=null===(i=(r=e.session_recording).maskCapturedNetworkRequestFn)||void 0===i?void 0:i.call(r,o))&&void 0!==n?n:void 0}:e=>function(e){if(!W(e))return e.requestBody=ui(e.requestBody,"Request"),e.responseBody=ui(e.responseBody,"Response"),e}(u(e)),h(h(h({},oi),o),{},{recordHeaders:s,recordBody:a,recordPerformance:l,recordInitialRequests:l})}
function fi(e,t,n,i,r){return t>n&&(te.warn("min cannot be greater than max."),t=n),K(e)?e>n?(i&&te.warn(i+" cannot be  greater than max: "+n+". Using max value instead."),n):e<t?(i&&te.warn(i+" cannot be less than min: "+t+". Using min value instead."),t):e:(i&&te.warn(i+" must be a number. using max or fallback. max: "+n+", fallback: "+r),fi(r||n,t,n,i))}class hi{constructor(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
p(this,"bucketSize",100),p(this,"refillRate",10),p(this,"mutationBuckets",{}),p(this,"loggedTracker",{}),p(this,"refillBuckets",(()=>{Object.keys(this.mutationBuckets).forEach((e=>{this.mutationBuckets[e]=this.mutationBuckets[e]+this.refillRate,this.mutationBuckets[e]>=this.bucketSize&&delete this.mutationBuckets[e]}))})),p(this,"getNodeOrRelevantParent",(e=>{var t=this.rrweb.mirror.getNode(e)
if("svg"!==(null==t?void 0:t.nodeName)&&t instanceof Element){var n=t.closest("svg")
if(n)return[this.rrweb.mirror.getId(n),n]}return[e,t]})),p(this,"numberOfChanges",(e=>{var t,n,i,r,o,s,a,l
return(null!==(t=null===(n=e.removes)||void 0===n?void 0:n.length)&&void 0!==t?t:0)+(null!==(i=null===(r=e.attributes)||void 0===r?void 0:r.length)&&void 0!==i?i:0)+(null!==(o=null===(s=e.texts)||void 0===s?void 0:s.length)&&void 0!==o?o:0)+(null!==(a=null===(l=e.adds)||void 0===l?void 0:l.length)&&void 0!==a?a:0)})),p(this,"throttleMutations",(e=>{if(3!==e.type||0!==e.data.source)return e
var t=e.data,n=this.numberOfChanges(t)
t.attributes&&(t.attributes=t.attributes.filter((e=>{var t,n,i,[r,o]=this.getNodeOrRelevantParent(e.id)
return 0!==this.mutationBuckets[r]&&(this.mutationBuckets[r]=null!==(t=this.mutationBuckets[r])&&void 0!==t?t:this.bucketSize,this.mutationBuckets[r]=Math.max(this.mutationBuckets[r]-1,0),0===this.mutationBuckets[r]&&(this.loggedTracker[r]||(this.loggedTracker[r]=!0,null===(n=(i=this.options).onBlockedNode)||void 0===n||n.call(i,r,o))),e)})))
var i=this.numberOfChanges(t)
return 0!==i||n===i?e:void 0})),this.rrweb=e,this.options=i,this.refillRate=fi(null!==(t=this.options.refillRate)&&void 0!==t?t:this.refillRate,0,100,"mutation throttling refill rate"),this.bucketSize=fi(null!==(n=this.options.bucketSize)&&void 0!==n?n:this.bucketSize,0,100,"mutation throttling bucket size"),setInterval((()=>{this.refillBuckets()}),1e3)}}var pi=Uint8Array,gi=Uint16Array,_i=Uint32Array,vi=new pi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),mi=new pi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),bi=new pi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),yi=function(e,t){for(var n=new gi(31),i=0;i<31;++i)n[i]=t+=1<<e[i-1]
var r=new _i(n[30])
for(i=1;i<30;++i)for(var o=n[i];o<n[i+1];++o)r[o]=o-n[i]<<5|i
return[n,r]},wi=yi(vi,2),ki=wi[0],Si=wi[1]
ki[28]=258,Si[258]=28
for(var xi=yi(mi,0)[1],Ei=new gi(32768),Ci=0;Ci<32768;++Ci){var $i=(43690&Ci)>>>1|(21845&Ci)<<1
$i=(61680&($i=(52428&$i)>>>2|(13107&$i)<<2))>>>4|(3855&$i)<<4,Ei[Ci]=((65280&$i)>>>8|(255&$i)<<8)>>>1}var Ti=function(e,t,n){for(var i=e.length,r=0,o=new gi(t);r<i;++r)++o[e[r]-1]
var s,a=new gi(t)
for(r=0;r<t;++r)a[r]=a[r-1]+o[r-1]<<1
for(s=new gi(i),r=0;r<i;++r)s[r]=Ei[a[e[r]-1]++]>>>15-e[r]
return s},Pi=new pi(288)
for(Ci=0;Ci<144;++Ci)Pi[Ci]=8
for(Ci=144;Ci<256;++Ci)Pi[Ci]=9
for(Ci=256;Ci<280;++Ci)Pi[Ci]=7
for(Ci=280;Ci<288;++Ci)Pi[Ci]=8
var Li=new pi(32)
for(Ci=0;Ci<32;++Ci)Li[Ci]=5
var Ii=Ti(Pi,9),Ri=Ti(Li,5),Oi=function(e){return(e/8>>0)+(7&e&&1)},Mi=function(e,t,n){(null==n||n>e.length)&&(n=e.length)
var i=new(e instanceof gi?gi:e instanceof _i?_i:pi)(n-t)
return i.set(e.subarray(t,n)),i},Fi=function(e,t,n){n<<=7&t
var i=t/8>>0
e[i]|=n,e[i+1]|=n>>>8},Ai=function(e,t,n){n<<=7&t
var i=t/8>>0
e[i]|=n,e[i+1]|=n>>>8,e[i+2]|=n>>>16},Ni=function(e,t){for(var n=[],i=0;i<e.length;++i)e[i]&&n.push({s:i,f:e[i]})
var r=n.length,o=n.slice()
if(!r)return[new pi(0),0]
if(1==r){var s=new pi(n[0].s+1)
return s[n[0].s]=1,[s,1]}n.sort((function(e,t){return e.f-t.f})),n.push({s:-1,f:25001})
var a=n[0],l=n[1],c=0,u=1,d=2
for(n[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=n[n[c].f<n[d].f?c++:d++],l=n[c!=u&&n[c].f<n[d].f?c++:d++],n[u++]={s:-1,f:a.f+l.f,l:a,r:l}
var f=o[0].s
for(i=1;i<r;++i)o[i].s>f&&(f=o[i].s)
var h=new gi(f+1),p=ji(n[u-1],h,0)
if(p>t){i=0
var g=0,_=p-t,v=1<<_
for(o.sort((function(e,t){return h[t.s]-h[e.s]||e.f-t.f}));i<r;++i){var m=o[i].s
if(!(h[m]>t))break
g+=v-(1<<p-h[m]),h[m]=t}for(g>>>=_;g>0;){var b=o[i].s
h[b]<t?g-=1<<t-h[b]++-1:++i}for(;i>=0&&g;--i){var y=o[i].s
h[y]==t&&(--h[y],++g)}p=t}return[new pi(h),p]},ji=function(e,t,n){return-1==e.s?Math.max(ji(e.l,t,n+1),ji(e.r,t,n+1)):t[e.s]=n},Di=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new gi(++t),i=0,r=e[0],o=1,s=function(e){n[i++]=e},a=1;a<=t;++a)if(e[a]==r&&a!=t)++o
else{if(!r&&o>2){for(;o>138;o-=138)s(32754)
o>2&&(s(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(s(r),--o;o>6;o-=6)s(8304)
o>2&&(s(o-3<<5|8208),o=0)}for(;o--;)s(r)
o=1,r=e[a]}return[n.subarray(0,i),t]},Bi=function(e,t){for(var n=0,i=0;i<t.length;++i)n+=e[i]*t[i]
return n},Hi=function(e,t,n){var i=n.length,r=Oi(t+2)
e[r]=255&i,e[r+1]=i>>>8,e[r+2]=255^e[r],e[r+3]=255^e[r+1]
for(var o=0;o<i;++o)e[r+o+4]=n[o]
return 8*(r+4+i)},Ui=function(e,t,n,i,r,o,s,a,l,c,u){Fi(t,u++,n),++r[256]
for(var d=Ni(r,15),f=d[0],h=d[1],p=Ni(o,15),g=p[0],_=p[1],v=Di(f),m=v[0],b=v[1],y=Di(g),w=y[0],k=y[1],S=new gi(19),x=0;x<m.length;++x)S[31&m[x]]++
for(x=0;x<w.length;++x)S[31&w[x]]++
for(var E=Ni(S,7),C=E[0],$=E[1],T=19;T>4&&!C[bi[T-1]];--T);var P,L,I,R,O=c+5<<3,M=Bi(r,Pi)+Bi(o,Li)+s,F=Bi(r,f)+Bi(o,g)+s+14+3*T+Bi(S,C)+(2*S[16]+3*S[17]+7*S[18])
if(O<=M&&O<=F)return Hi(t,u,e.subarray(l,l+c))
if(Fi(t,u,1+(F<M)),u+=2,F<M){P=Ti(f,h),L=f,I=Ti(g,_),R=g
var A=Ti(C,$)
for(Fi(t,u,b-257),Fi(t,u+5,k-1),Fi(t,u+10,T-4),u+=14,x=0;x<T;++x)Fi(t,u+3*x,C[bi[x]])
u+=3*T
for(var N=[m,w],j=0;j<2;++j){var D=N[j]
for(x=0;x<D.length;++x){var B=31&D[x]
Fi(t,u,A[B]),u+=C[B],B>15&&(Fi(t,u,D[x]>>>5&127),u+=D[x]>>>12)}}}else P=Ii,L=Pi,I=Ri,R=Li
for(x=0;x<a;++x)if(i[x]>255){B=i[x]>>>18&31,Ai(t,u,P[B+257]),u+=L[B+257],B>7&&(Fi(t,u,i[x]>>>23&31),u+=vi[B])
var H=31&i[x]
Ai(t,u,I[H]),u+=R[H],H>3&&(Ai(t,u,i[x]>>>5&8191),u+=mi[H])}else Ai(t,u,P[i[x]]),u+=L[i[x]]
return Ai(t,u,P[256]),u+L[256]},qi=new _i([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Gi=function(){for(var e=new _i(256),t=0;t<256;++t){for(var n=t,i=9;--i;)n=(1&n&&3988292384)^n>>>1
e[t]=n}return e}(),Wi=function(){var e=4294967295
return{p:function(t){for(var n=e,i=0;i<t.length;++i)n=Gi[255&n^t[i]]^n>>>8
e=n},d:function(){return 4294967295^e}}},zi=function(e,t,n,i,r){return function(e,t,n,i,r,o){var s=e.length,a=new pi(i+s+5*(1+Math.floor(s/7e3))+r),l=a.subarray(i,a.length-r),c=0
if(!t||s<8)for(var u=0;u<=s;u+=65535){var d=u+65535
d<s?c=Hi(l,c,e.subarray(u,d)):(l[u]=o,c=Hi(l,c,e.subarray(u,s)))}else{for(var f=qi[t-1],h=f>>>13,p=8191&f,g=(1<<n)-1,_=new gi(32768),v=new gi(g+1),m=Math.ceil(n/3),b=2*m,y=function(t){return(e[t]^e[t+1]<<m^e[t+2]<<b)&g},w=new _i(25e3),k=new gi(288),S=new gi(32),x=0,E=0,C=(u=0,0),$=0,T=0;u<s;++u){var P=y(u),L=32767&u,I=v[P]
if(_[L]=I,v[P]=L,$<=u){var R=s-u
if((x>7e3||C>24576)&&R>423){c=Ui(e,l,0,w,k,S,E,C,T,u-T,c),C=x=E=0,T=u
for(var O=0;O<286;++O)k[O]=0
for(O=0;O<30;++O)S[O]=0}var M=2,F=0,A=p,N=L-I&32767
if(R>2&&P==y(u-N))for(var j=Math.min(h,R)-1,D=Math.min(32767,u),B=Math.min(258,R);N<=D&&--A&&L!=I;){if(e[u+M]==e[u+M-N]){for(var H=0;H<B&&e[u+H]==e[u+H-N];++H);if(H>M){if(M=H,F=N,H>j)break
var U=Math.min(N,H-2),q=0
for(O=0;O<U;++O){var G=u-N+O+32768&32767,W=G-_[G]+32768&32767
W>q&&(q=W,I=G)}}}N+=(L=I)-(I=_[L])+32768&32767}if(F){w[C++]=268435456|Si[M]<<18|xi[F]
var z=31&Si[M],V=31&xi[F]
E+=vi[z]+mi[V],++k[257+z],++S[V],$=u+M,++x}else w[C++]=e[u],++k[e[u]]}}c=Ui(e,l,o,w,k,S,E,C,T,u-T,c)}return Mi(a,0,i+Oi(c)+r)}(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,n,i,!r)},Vi=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},Qi=function(e,t){var n=t.filename
if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:9==t.level?2:0,e[9]=3,0!=t.mtime&&Vi(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8
for(var i=0;i<=n.length;++i)e[i+10]=n.charCodeAt(i)}},Ji=function(e){return 10+(e.filename&&e.filename.length+1||0)}
function Ki(e,t){void 0===t&&(t={})
var n=Wi(),i=e.length
n.p(e)
var r=zi(e,t,Ji(t),8),o=r.length
return Qi(r,t),Vi(r,o-8,n.d()),Vi(r,o-4,i),r}function Xi(e,t){var n=e.length
if("undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e)
for(var i=new pi(e.length+(e.length>>>1)),r=0,o=function(e){i[r++]=e},s=0;s<n;++s){if(r+5>i.length){var a=new pi(r+8+(n-s<<1))
a.set(i),i=a}var l=e.charCodeAt(s)
l<128||t?o(l):l<2048?(o(192|l>>>6),o(128|63&l)):l>55295&&l<57344?(o(240|(l=65536+(1047552&l)|1023&e.charCodeAt(++s))>>>18),o(128|l>>>12&63),o(128|l>>>6&63),o(128|63&l)):(o(224|l>>>12),o(128|l>>>6&63),o(128|63&l))}return Mi(i,0,r)}var Yi="[SessionRecording]",Zi=ne(Yi),er=[Pn.MouseMove,Pn.MouseInteraction,Pn.Scroll,Pn.ViewportResize,Pn.Input,Pn.TouchMove,Pn.MediaInteraction,Pn.Drag],tr=e=>({rrwebMethod:e,enqueuedAt:Date.now(),attempt:1})
function nr(e){return function(e,t){for(var n="",i=0;i<e.length;){var r=e[i++]
n+=String.fromCharCode(r)}return n}(Ki(Xi(JSON.stringify(e))))}function ir(e){return e.type===Tn.Custom&&"sessionIdle"===e.data.tag}function rr(e,t){return t.some((t=>"regex"===t.matching&&new RegExp(t.url).test(e)))}class or{get sessionIdleThresholdMilliseconds(){return this.instance.config.session_recording.session_idle_threshold_ms||3e5}get rrwebRecord(){var e,t
return null==I||null===(e=I.__PosthogExtensions__)||void 0===e||null===(t=e.rrweb)||void 0===t?void 0:t.record}get started(){return this._captureStarted}get sessionManager(){if(!this.instance.sessionManager)throw new Error(Yi+" must be started with a valid sessionManager.")
return this.instance.sessionManager}get fullSnapshotIntervalMillis(){var e,t
return"trigger_pending"===this.triggerStatus?6e4:null!==(e=null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.full_snapshot_interval_millis)&&void 0!==e?e:3e5}get isSampled(){var e=this.instance.get_property(Le)
return X(e)?e:null}get sessionDuration(){var e,t,n=null===(e=this.buffer)||void 0===e?void 0:e.data[(null===(t=this.buffer)||void 0===t?void 0:t.data.length)-1],{sessionStartTimestamp:i}=this.sessionManager.checkAndGetSessionAndWindowId(!0)
return n?n.timestamp-i:null}get isRecordingEnabled(){var e=!!this.instance.get_property(ke),t=!this.instance.config.disable_session_recording
return m&&e&&t}get isConsoleLogCaptureEnabled(){var e=!!this.instance.get_property(Se),t=this.instance.config.enable_recording_console_log
return null!=t?t:e}get canvasRecording(){var e,t,n,i,r,o,s=this.instance.config.session_recording.captureCanvas,a=this.instance.get_property(Ee),l=null!==(e=null!==(t=null==s?void 0:s.recordCanvas)&&void 0!==t?t:null==a?void 0:a.enabled)&&void 0!==e&&e,c=null!==(n=null!==(i=null==s?void 0:s.canvasFps)&&void 0!==i?i:null==a?void 0:a.fps)&&void 0!==n?n:0,u=null!==(r=null!==(o=null==s?void 0:s.canvasQuality)&&void 0!==o?o:null==a?void 0:a.quality)&&void 0!==r?r:0
return{enabled:l,fps:fi(c,0,12,"canvas recording fps"),quality:fi(u,0,1,"canvas recording quality")}}get networkPayloadCapture(){var e,t,n=this.instance.get_property(xe),i={recordHeaders:null===(e=this.instance.config.session_recording)||void 0===e?void 0:e.recordHeaders,recordBody:null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.recordBody},r=(null==i?void 0:i.recordHeaders)||(null==n?void 0:n.recordHeaders),o=(null==i?void 0:i.recordBody)||(null==n?void 0:n.recordBody),s=q(this.instance.config.capture_performance)?this.instance.config.capture_performance.network_timing:this.instance.config.capture_performance,a=!!(X(s)?s:null==n?void 0:n.capturePerformance)
return r||o||a?{recordHeaders:r,recordBody:o,recordPerformance:a}:void 0}get sampleRate(){var e=this.instance.get_property(Ce)
return K(e)?e:null}get minimumDuration(){var e=this.instance.get_property($e)
return K(e)?e:null}get status(){return this.receivedDecide?this.isRecordingEnabled?this._urlBlocked?"paused":J(this._linkedFlag)||this._linkedFlagSeen?"trigger_pending"===this.triggerStatus?"buffering":X(this.isSampled)?this.isSampled?"sampled":"disabled":"active":"buffering":"disabled":"buffering"}get urlTriggerStatus(){var e
return 0===this._urlTriggers.length?"trigger_disabled":(null===(e=this.instance)||void 0===e?void 0:e.get_property(Ie))===this.sessionId?"trigger_activated":"trigger_pending"}get eventTriggerStatus(){var e
return 0===this._eventTriggers.length?"trigger_disabled":(null===(e=this.instance)||void 0===e?void 0:e.get_property(Re))===this.sessionId?"trigger_activated":"trigger_pending"}get triggerStatus(){var e="trigger_activated"===this.eventTriggerStatus||"trigger_activated"===this.urlTriggerStatus,t="trigger_pending"===this.eventTriggerStatus||"trigger_pending"===this.urlTriggerStatus
return e?"trigger_activated":t?"trigger_pending":"trigger_disabled"}constructor(e){if(p(this,"queuedRRWebEvents",[]),p(this,"isIdle",!1),p(this,"_linkedFlagSeen",!1),p(this,"_lastActivityTimestamp",Date.now()),p(this,"_linkedFlag",null),p(this,"_removePageViewCaptureHook",void 0),p(this,"_onSessionIdListener",void 0),p(this,"_persistDecideOnSessionListener",void 0),p(this,"_samplingSessionListener",void 0),p(this,"_urlTriggers",[]),p(this,"_urlBlocklist",[]),p(this,"_urlBlocked",!1),p(this,"_eventTriggers",[]),p(this,"_removeEventTriggerCaptureHook",void 0),p(this,"_forceAllowLocalhostNetworkCapture",!1),p(this,"_onBeforeUnload",(()=>{this._flushBuffer()})),p(this,"_onOffline",(()=>{this._tryAddCustomEvent("browser offline",{})})),p(this,"_onOnline",(()=>{this._tryAddCustomEvent("browser online",{})})),p(this,"_onVisibilityChange",(()=>{if(null!=x&&x.visibilityState){var e="window "+x.visibilityState
this._tryAddCustomEvent(e,{})}})),this.instance=e,this._captureStarted=!1,this._endpoint="/s/",this.stopRrweb=void 0,this.receivedDecide=!1,!this.instance.sessionManager)throw Zi.error("started without valid sessionManager"),new Error(Yi+" started without valid sessionManager. This is a bug.")
if(this.instance.config.__preview_experimental_cookieless_mode)throw new Error(Yi+" cannot be used with __preview_experimental_cookieless_mode.")
var{sessionId:t,windowId:n}=this.sessionManager.checkAndGetSessionAndWindowId()
this.sessionId=t,this.windowId=n,this.buffer=this.clearBuffer(),this.sessionIdleThresholdMilliseconds>=this.sessionManager.sessionTimeoutMs&&Zi.warn("session_idle_threshold_ms (".concat(this.sessionIdleThresholdMilliseconds,") is greater than the session timeout (").concat(this.sessionManager.sessionTimeoutMs,"). Session will never be detected as idle"))}startIfEnabledOrStop(e){this.isRecordingEnabled?(this._startCapture(e),null==m||m.addEventListener("beforeunload",this._onBeforeUnload),null==m||m.addEventListener("offline",this._onOffline),null==m||m.addEventListener("online",this._onOnline),null==m||m.addEventListener("visibilitychange",this._onVisibilityChange),this._setupSampling(),this._addEventTriggerListener(),J(this._removePageViewCaptureHook)&&(this._removePageViewCaptureHook=this.instance.on("eventCaptured",(e=>{try{if("$pageview"===e.event){var t=null!=e&&e.properties.$current_url?this._maskUrl(null==e?void 0:e.properties.$current_url):""
if(!t)return
this._tryAddCustomEvent("$pageview",{href:t})}}catch(e){Zi.error("Could not add $pageview to rrweb session",e)}}))),this._onSessionIdListener||(this._onSessionIdListener=this.sessionManager.onSessionId(((e,t,n)=>{var i,r,o,s
n&&(this._tryAddCustomEvent("$session_id_change",{sessionId:e,windowId:t,changeReason:n}),null===(i=this.instance)||void 0===i||null===(r=i.persistence)||void 0===r||r.unregister(Re),null===(o=this.instance)||void 0===o||null===(s=o.persistence)||void 0===s||s.unregister(Ie))})))):this.stopRecording()}stopRecording(){var e,t,n,i
this._captureStarted&&this.stopRrweb&&(this.stopRrweb(),this.stopRrweb=void 0,this._captureStarted=!1,null==m||m.removeEventListener("beforeunload",this._onBeforeUnload),null==m||m.removeEventListener("offline",this._onOffline),null==m||m.removeEventListener("online",this._onOnline),null==m||m.removeEventListener("visibilitychange",this._onVisibilityChange),this.clearBuffer(),clearInterval(this._fullSnapshotTimer),null===(e=this._removePageViewCaptureHook)||void 0===e||e.call(this),this._removePageViewCaptureHook=void 0,null===(t=this._removeEventTriggerCaptureHook)||void 0===t||t.call(this),this._removeEventTriggerCaptureHook=void 0,null===(n=this._onSessionIdListener)||void 0===n||n.call(this),this._onSessionIdListener=void 0,null===(i=this._samplingSessionListener)||void 0===i||i.call(this),this._samplingSessionListener=void 0,Zi.info("stopped"))}makeSamplingDecision(e){var t,n=this.sessionId!==e,i=this.sampleRate
if(K(i)){var r,o=this.isSampled,s=n||!X(o)
r=s?Math.random()<i:o,s&&(r?this._reportStarted("sampled"):Zi.warn("Sample rate (".concat(i,") has determined that this sessionId (").concat(e,") will not be sent to the server.")),this._tryAddCustomEvent("samplingDecisionMade",{sampleRate:i,isSampled:r})),null===(t=this.instance.persistence)||void 0===t||t.register({[Le]:r})}else{var a
null===(a=this.instance.persistence)||void 0===a||a.register({[Le]:null})}}onRemoteConfig(e){var t,n,i,r,o,s
if(this._tryAddCustomEvent("$remote_config_received",e),this._persistRemoteConfig(e),this._linkedFlag=(null===(t=e.sessionRecording)||void 0===t?void 0:t.linkedFlag)||null,null!==(n=e.sessionRecording)&&void 0!==n&&n.endpoint&&(this._endpoint=null===(s=e.sessionRecording)||void 0===s?void 0:s.endpoint),this._setupSampling(),!J(this._linkedFlag)&&!this._linkedFlagSeen){var a=z(this._linkedFlag)?this._linkedFlag:this._linkedFlag.flag,l=z(this._linkedFlag)?null:this._linkedFlag.variant
this.instance.onFeatureFlags(((e,t)=>{var n=q(t)&&a in t,i=l?t[a]===l:n
i&&this._reportStarted("linked_flag_matched",{linkedFlag:a,linkedVariant:l}),this._linkedFlagSeen=i}))}null!==(i=e.sessionRecording)&&void 0!==i&&i.urlTriggers&&(this._urlTriggers=e.sessionRecording.urlTriggers),null!==(r=e.sessionRecording)&&void 0!==r&&r.urlBlocklist&&(this._urlBlocklist=e.sessionRecording.urlBlocklist),null!==(o=e.sessionRecording)&&void 0!==o&&o.eventTriggers&&(this._eventTriggers=e.sessionRecording.eventTriggers),this.receivedDecide=!0,this.startIfEnabledOrStop()}_setupSampling(){K(this.sampleRate)&&J(this._samplingSessionListener)&&(this._samplingSessionListener=this.sessionManager.onSessionId((e=>{this.makeSamplingDecision(e)})))}_persistRemoteConfig(e){if(this.instance.persistence){var t,n=this.instance.persistence,i=()=>{var t,i,r,o,s,a,l,c,u=null===(t=e.sessionRecording)||void 0===t?void 0:t.sampleRate,d=J(u)?null:parseFloat(u),f=null===(i=e.sessionRecording)||void 0===i?void 0:i.minimumDurationMilliseconds
n.register({[ke]:!!e.sessionRecording,[Se]:null===(r=e.sessionRecording)||void 0===r?void 0:r.consoleLogRecordingEnabled,[xe]:h({capturePerformance:e.capturePerformance},null===(o=e.sessionRecording)||void 0===o?void 0:o.networkPayloadCapture),[Ee]:{enabled:null===(s=e.sessionRecording)||void 0===s?void 0:s.recordCanvas,fps:null===(a=e.sessionRecording)||void 0===a?void 0:a.canvasFps,quality:null===(l=e.sessionRecording)||void 0===l?void 0:l.canvasQuality},[Ce]:d,[$e]:W(f)?null:f,[Te]:null===(c=e.sessionRecording)||void 0===c?void 0:c.scriptConfig})}
i(),null===(t=this._persistDecideOnSessionListener)||void 0===t||t.call(this),this._persistDecideOnSessionListener=this.sessionManager.onSessionId(i)}}log(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log"
null===(t=this.instance.sessionRecording)||void 0===t||t.onRRwebEmit({type:6,data:{plugin:"rrweb/console@1",payload:{level:n,trace:[],payload:[JSON.stringify(e)]}},timestamp:Date.now()})}_startCapture(e){var t,n
W(Object.assign)||W(Array.from)||(this._captureStarted||this.instance.config.disable_session_recording||this.instance.consent.isOptedOut())||(this._captureStarted=!0,this.sessionManager.checkAndGetSessionAndWindowId(),this.rrwebRecord?this._onScriptLoaded():null===(t=I.__PosthogExtensions__)||void 0===t||null===(n=t.loadExternalDependency)||void 0===n||n.call(t,this.instance,this.scriptName,(e=>{if(e)return Zi.error("could not load recorder",e)
this._onScriptLoaded()})),Zi.info("starting"),"active"===this.status&&this._reportStarted(e||"recording_initialized"))}get scriptName(){var e,t,n
return(null===(e=this.instance)||void 0===e||null===(t=e.persistence)||void 0===t||null===(n=t.get_property(Te))||void 0===n?void 0:n.script)||"recorder"}isInteractiveEvent(e){var t
return 3===e.type&&-1!==er.indexOf(null===(t=e.data)||void 0===t?void 0:t.source)}_updateWindowAndSessionIds(e){var t=this.isInteractiveEvent(e)
t||this.isIdle||e.timestamp-this._lastActivityTimestamp>this.sessionIdleThresholdMilliseconds&&(this.isIdle=!0,clearInterval(this._fullSnapshotTimer),this._tryAddCustomEvent("sessionIdle",{eventTimestamp:e.timestamp,lastActivityTimestamp:this._lastActivityTimestamp,threshold:this.sessionIdleThresholdMilliseconds,bufferLength:this.buffer.data.length,bufferSize:this.buffer.size}),this._flushBuffer())
var n=!1
if(t&&(this._lastActivityTimestamp=e.timestamp,this.isIdle&&(this.isIdle=!1,this._tryAddCustomEvent("sessionNoLongerIdle",{reason:"user activity",type:e.type}),n=!0)),!this.isIdle){var{windowId:i,sessionId:r}=this.sessionManager.checkAndGetSessionAndWindowId(!t,e.timestamp),o=this.sessionId!==r,s=this.windowId!==i
this.windowId=i,this.sessionId=r,o||s?(this.stopRecording(),this.startIfEnabledOrStop("session_id_changed")):n&&this._scheduleFullSnapshot()}}_tryRRWebMethod(e){try{return e.rrwebMethod(),!0}catch(t){return this.queuedRRWebEvents.length<10?this.queuedRRWebEvents.push({enqueuedAt:e.enqueuedAt||Date.now(),attempt:e.attempt++,rrwebMethod:e.rrwebMethod}):Zi.warn("could not emit queued rrweb event.",t,e),!1}}_tryAddCustomEvent(e,t){return this._tryRRWebMethod(tr((()=>this.rrwebRecord.addCustomEvent(e,t))))}_tryTakeFullSnapshot(){return this._tryRRWebMethod(tr((()=>this.rrwebRecord.takeFullSnapshot())))}_onScriptLoaded(){var e,t={blockClass:"ph-no-capture",blockSelector:void 0,ignoreClass:"ph-ignore-input",maskTextClass:"ph-mask",maskTextSelector:void 0,maskTextFn:void 0,maskAllInputs:!0,maskInputOptions:{password:!0},maskInputFn:void 0,slimDOMOptions:{},collectFonts:!1,inlineStylesheet:!0,recordCrossOriginIframes:!1},n=this.instance.config.session_recording
for(var[i,r]of Object.entries(n||{}))i in t&&("maskInputOptions"===i?t.maskInputOptions=h({password:!0},r):t[i]=r)
if(this.canvasRecording&&this.canvasRecording.enabled&&(t.recordCanvas=!0,t.sampling={canvas:this.canvasRecording.fps},t.dataURLOptions={type:"image/webp",quality:this.canvasRecording.quality}),this.rrwebRecord){this.mutationRateLimiter=null!==(e=this.mutationRateLimiter)&&void 0!==e?e:new hi(this.rrwebRecord,{refillRate:this.instance.config.session_recording.__mutationRateLimiterRefillRate,bucketSize:this.instance.config.session_recording.__mutationRateLimiterBucketSize,onBlockedNode:(e,t)=>{var n="Too many mutations on node '".concat(e,"'. Rate limiting. This could be due to SVG animations or something similar")
Zi.info(n,{node:t}),this.log(Yi+" "+n,"warn")}})
var o=this._gatherRRWebPlugins()
this.stopRrweb=this.rrwebRecord(h({emit:e=>{this.onRRwebEmit(e)},plugins:o},t)),this._lastActivityTimestamp=Date.now(),this.isIdle=!1,this._tryAddCustomEvent("$session_options",{sessionRecordingOptions:t,activePlugins:o.map((e=>null==e?void 0:e.name))}),this._tryAddCustomEvent("$posthog_config",{config:this.instance.config})}else Zi.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")}_scheduleFullSnapshot(){if(this._fullSnapshotTimer&&clearInterval(this._fullSnapshotTimer),!this.isIdle){var e=this.fullSnapshotIntervalMillis
e&&(this._fullSnapshotTimer=setInterval((()=>{this._tryTakeFullSnapshot()}),e))}}_gatherRRWebPlugins(){var e,t,n,i,r=[],o=null===(e=I.__PosthogExtensions__)||void 0===e||null===(t=e.rrwebPlugins)||void 0===t?void 0:t.getRecordConsolePlugin
o&&this.isConsoleLogCaptureEnabled&&r.push(o())
var s=null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.rrwebPlugins)||void 0===i?void 0:i.getRecordNetworkPlugin
return this.networkPayloadCapture&&U(s)&&(!wt.includes(location.hostname)||this._forceAllowLocalhostNetworkCapture?r.push(s(di(this.instance.config,this.networkPayloadCapture))):Zi.info("NetworkCapture not started because we are on localhost.")),r}onRRwebEmit(e){var t
if(this._processQueuedEvents(),e&&q(e)){if(e.type===Tn.Meta){var n=this._maskUrl(e.data.href)
if(this._lastHref=n,!n)return
e.data.href=n}else this._pageViewFallBack()
if(this._checkUrlTriggerConditions(),"paused"!==this.status||function(e){return e.type===Tn.Custom&&"recording paused"===e.data.tag}(e)){e.type===Tn.FullSnapshot&&this._scheduleFullSnapshot(),e.type===Tn.FullSnapshot&&"trigger_pending"===this.triggerStatus&&this.clearBuffer()
var i=this.mutationRateLimiter?this.mutationRateLimiter.throttleMutations(e):e
if(i){var r=function(e){var t=e
if(t&&q(t)&&6===t.type&&q(t.data)&&"rrweb/console@1"===t.data.plugin){t.data.payload.payload.length>10&&(t.data.payload.payload=t.data.payload.payload.slice(0,10),t.data.payload.payload.push("...[truncated]"))
for(var n=[],i=0;i<t.data.payload.payload.length;i++)t.data.payload.payload[i]&&t.data.payload.payload[i].length>2e3?n.push(t.data.payload.payload[i].slice(0,2e3)+"...[truncated]"):n.push(t.data.payload.payload[i])
return t.data.payload.payload=n,e}return e}(i)
if(this._updateWindowAndSessionIds(r),!this.isIdle||ir(r)){if(ir(r)){var o=r.data.payload
if(o){var s=o.lastActivityTimestamp,a=o.threshold
r.timestamp=s+a}}var l=null===(t=this.instance.config.session_recording.compress_events)||void 0===t||t?function(e){if(Cn(e)<1024)return e
try{if(e.type===Tn.FullSnapshot)return h(h({},e),{},{data:nr(e.data),cv:"2024-10"})
if(e.type===Tn.IncrementalSnapshot&&e.data.source===Pn.Mutation)return h(h({},e),{},{cv:"2024-10",data:h(h({},e.data),{},{texts:nr(e.data.texts),attributes:nr(e.data.attributes),removes:nr(e.data.removes),adds:nr(e.data.adds)})})
if(e.type===Tn.IncrementalSnapshot&&e.data.source===Pn.StyleSheetRule)return h(h({},e),{},{cv:"2024-10",data:h(h({},e.data),{},{adds:nr(e.data.adds),removes:nr(e.data.removes)})})}catch(e){Zi.error("could not compress event - will use uncompressed event",e)}return e}(r):r,c={$snapshot_bytes:Cn(l),$snapshot_data:l,$session_id:this.sessionId,$window_id:this.windowId}
"disabled"!==this.status?this._captureSnapshotBuffered(c):this.clearBuffer()}}}}}_pageViewFallBack(){if(!this.instance.config.capture_pageview&&m){var e=this._maskUrl(m.location.href)
this._lastHref!==e&&(this._tryAddCustomEvent("$url_changed",{href:e}),this._lastHref=e)}}_processQueuedEvents(){if(this.queuedRRWebEvents.length){var e=[...this.queuedRRWebEvents]
this.queuedRRWebEvents=[],e.forEach((e=>{Date.now()-e.enqueuedAt<=2e3&&this._tryRRWebMethod(e)}))}}_maskUrl(e){var t=this.instance.config.session_recording
if(t.maskNetworkRequestFn){var n,i={url:e}
return null===(n=i=t.maskNetworkRequestFn(i))||void 0===n?void 0:n.url}return e}clearBuffer(){return this.buffer={size:0,data:[],sessionId:this.sessionId,windowId:this.windowId},this.buffer}_flushBuffer(){this.flushBufferTimer&&(clearTimeout(this.flushBufferTimer),this.flushBufferTimer=void 0)
var e=this.minimumDuration,t=this.sessionDuration,n=K(t)&&t>=0,i=K(e)&&n&&t<e
return"buffering"===this.status||"paused"===this.status||i?(this.flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3),this.buffer):(this.buffer.data.length>0&&$n(this.buffer).forEach((e=>{this._captureSnapshot({$snapshot_bytes:e.size,$snapshot_data:e.data,$session_id:e.sessionId,$window_id:e.windowId,$lib:"web",$lib_version:v.LIB_VERSION})})),this.clearBuffer())}_captureSnapshotBuffered(e){var t,n=2+((null===(t=this.buffer)||void 0===t?void 0:t.data.length)||0)
!this.isIdle&&(this.buffer.size+e.$snapshot_bytes+n>943718.4||this.buffer.sessionId!==this.sessionId)&&(this.buffer=this._flushBuffer()),this.buffer.size+=e.$snapshot_bytes,this.buffer.data.push(e.$snapshot_data),this.flushBufferTimer||this.isIdle||(this.flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3))}_captureSnapshot(e){this.instance.capture("$snapshot",e,{_url:this.instance.requestRouter.endpointFor("api",this._endpoint),_noTruncate:!0,_batchKey:"recordings",skip_client_rate_limiting:!0})}_checkUrlTriggerConditions(){if(void 0!==m&&m.location.href){var e=m.location.href,t="paused"===this.status,n=rr(e,this._urlBlocklist)
n&&!t?this._pauseRecording():!n&&t&&this._resumeRecording(),rr(e,this._urlTriggers)&&this._activateTrigger("url")}}_activateTrigger(e){var t,n
"trigger_pending"===this.triggerStatus&&(null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n||n.register({["url"===e?Ie:Re]:this.sessionId}),this._flushBuffer(),this._reportStarted(e+"_trigger_matched"))}_pauseRecording(){"paused"!==this.status&&(this._urlBlocked=!0,clearInterval(this._fullSnapshotTimer),Zi.info("recording paused due to URL blocker"),this._tryAddCustomEvent("recording paused",{reason:"url blocker"}))}_resumeRecording(){"paused"===this.status&&(this._urlBlocked=!1,this._tryTakeFullSnapshot(),this._scheduleFullSnapshot(),this._tryAddCustomEvent("recording resumed",{reason:"left blocked url"}),Zi.info("recording resumed"))}_addEventTriggerListener(){0!==this._eventTriggers.length&&J(this._removeEventTriggerCaptureHook)&&(this._removeEventTriggerCaptureHook=this.instance.on("eventCaptured",(e=>{try{this._eventTriggers.includes(e.event)&&this._activateTrigger("event")}catch(e){Zi.error("Could not activate event trigger",e)}})))}overrideLinkedFlag(){this._linkedFlagSeen=!0,this._reportStarted("linked_flag_overridden")}overrideSampling(){var e
null===(e=this.instance.persistence)||void 0===e||e.register({[Le]:!0}),this._reportStarted("sampling_overridden")}overrideTrigger(e){this._activateTrigger(e)}_reportStarted(e,t){this.instance.register_for_session({$session_recording_start_reason:e}),Zi.info(e.replace("_"," "),t),M(["recording_initialized","session_id_changed"],e)||this._tryAddCustomEvent(e,t)}}var sr=ne("[RemoteConfig]")
class ar{constructor(e){this.instance=e}get remoteConfig(){var e,t
return null===(e=I._POSTHOG_REMOTE_CONFIG)||void 0===e||null===(t=e[this.instance.config.token])||void 0===t?void 0:t.config}_loadRemoteConfigJs(e){var t,n,i
null!==(t=I.__PosthogExtensions__)&&void 0!==t&&t.loadExternalDependency?null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"remote-config",(()=>e(this.remoteConfig))):(sr.error("PostHog Extensions not found. Cannot load remote config."),e())}_loadRemoteConfigJSON(e){this.instance._send_request({method:"GET",url:this.instance.requestRouter.endpointFor("assets","/array/".concat(this.instance.config.token,"/config")),callback:t=>{e(t.json)}})}load(){try{if(this.remoteConfig)return sr.info("Using preloaded remote config",this.remoteConfig),void this.onRemoteConfig(this.remoteConfig)
if(this.instance.config.advanced_disable_decide)return void sr.warn("Remote config is disabled. Falling back to local config.")
this._loadRemoteConfigJs((e=>{if(!e)return sr.info("No config found after loading remote JS config. Falling back to JSON."),void this._loadRemoteConfigJSON((e=>{this.onRemoteConfig(e)}))
this.onRemoteConfig(e)}))}catch(e){sr.error("Error loading remote config",e)}}onRemoteConfig(e){e?this.instance.config.__preview_remote_config?(this.instance._onRemoteConfig(e),!1!==e.hasFeatureFlags&&this.instance.featureFlags.ensureFlagsLoaded()):sr.info("__preview_remote_config is disabled. Logging config instead",e):sr.error("Failed to fetch remote config from PostHog.")}}var lr,cr=null!=m&&m.location?Et(m.location.hash,"__posthog")||Et(location.hash,"state"):null,ur="_postHogToolbarParams"
!function(e){e[e.UNINITIALIZED=0]="UNINITIALIZED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(lr||(lr={}))
class dr{constructor(e){this.instance=e}setToolbarState(e){I.ph_toolbar_state=e}getToolbarState(){var e
return null!==(e=I.ph_toolbar_state)&&void 0!==e?e:lr.UNINITIALIZED}maybeLoadToolbar(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
if(!m||!x)return!1
n=null!==(e=n)&&void 0!==e?e:m.location,r=null!==(t=r)&&void 0!==t?t:m.history
try{if(!i){try{m.localStorage.setItem("test","test"),m.localStorage.removeItem("test")}catch(e){return!1}i=null==m?void 0:m.localStorage}var o,s=cr||Et(n.hash,"__posthog")||Et(n.hash,"state"),a=s?le((()=>JSON.parse(atob(decodeURIComponent(s)))))||le((()=>JSON.parse(decodeURIComponent(s)))):null
return a&&"ph_authorize"===a.action?((o=a).source="url",o&&Object.keys(o).length>0&&(a.desiredHash?n.hash=a.desiredHash:r?r.replaceState(r.state,"",n.pathname+n.search):n.hash="")):((o=JSON.parse(i.getItem(ur)||"{}")).source="localstorage",delete o.userIntent),!(!o.token||this.instance.config.token!==o.token||(this.loadToolbar(o),0))}catch(e){return!1}}_callLoadToolbar(e){(I.ph_load_toolbar||I.ph_load_editor)(e,this.instance)}loadToolbar(e){var t=!(null==x||!x.getElementById(Ve))
if(!m||t)return!1
var n="custom"===this.instance.requestRouter.region&&this.instance.config.advanced_disable_toolbar_metrics,i=h(h({token:this.instance.config.token},e),{},{apiURL:this.instance.requestRouter.endpointFor("ui")},n?{instrument:!1}:{})
if(m.localStorage.setItem(ur,JSON.stringify(h(h({},i),{},{source:void 0}))),this.getToolbarState()===lr.LOADED)this._callLoadToolbar(i)
else if(this.getToolbarState()===lr.UNINITIALIZED){var r,o
this.setToolbarState(lr.LOADING),null===(r=I.__PosthogExtensions__)||void 0===r||null===(o=r.loadExternalDependency)||void 0===o||o.call(r,this.instance,"toolbar",(e=>{if(e)return te.error("[Toolbar] Failed to load",e),void this.setToolbarState(lr.UNINITIALIZED)
this.setToolbarState(lr.LOADED),this._callLoadToolbar(i)})),de(m,"turbolinks:load",(()=>{this.setToolbarState(lr.UNINITIALIZED),this.loadToolbar(i)}))}return!0}_loadEditor(e){return this.loadToolbar(e)}maybeLoadEditor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
return this.maybeLoadToolbar(e,t,n)}}class fr{constructor(e){p(this,"isPaused",!0),p(this,"queue",[]),p(this,"flushTimeoutMs",3e3),this.sendRequest=e}enqueue(e){this.queue.push(e),this.flushTimeout||this.setFlushTimeout()}unload(){this.clearFlushTimeout()
var e=this.queue.length>0?this.formatQueue():{},t=Object.values(e),n=[...t.filter((e=>0===e.url.indexOf("/e"))),...t.filter((e=>0!==e.url.indexOf("/e")))]
n.map((e=>{this.sendRequest(h(h({},e),{},{transport:"sendBeacon"}))}))}enable(){this.isPaused=!1,this.setFlushTimeout()}setFlushTimeout(){var e=this
this.isPaused||(this.flushTimeout=setTimeout((()=>{if(this.clearFlushTimeout(),this.queue.length>0){var t=this.formatQueue(),n=function(n){var i=t[n],r=(new Date).getTime()
i.data&&H(i.data)&&oe(i.data,(e=>{e.offset=Math.abs(e.timestamp-r),delete e.timestamp})),e.sendRequest(i)}
for(var i in t)n(i)}}),this.flushTimeoutMs))}clearFlushTimeout(){clearTimeout(this.flushTimeout),this.flushTimeout=void 0}formatQueue(){var e={}
return oe(this.queue,(t=>{var n,i=t,r=(i?i.batchKey:null)||i.url
W(e[r])&&(e[r]=h(h({},i),{},{data:[]})),null===(n=e[r].data)||void 0===n||n.push(i.data)})),this.queue=[],e}}var hr=!!T||!!C,pr="text/plain",gr=(e,t)=>{var[n,i]=e.split("?"),r=h({},t)
null==i||i.split("&").forEach((e=>{var[t]=e.split("=")
delete r[t]}))
var o=function(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",r=[]
return oe(e,(function(e,i){W(e)||W(i)||"undefined"===i||(t=encodeURIComponent((e=>e instanceof File)(e)?e.name:e.toString()),n=encodeURIComponent(i),r[r.length]=n+"="+t)})),r.join(i)}(r)
return o=o?(i?i+"&":"")+o:i,"".concat(n,"?").concat(o)},_r=(e,t)=>JSON.stringify(e,((e,t)=>"bigint"==typeof t?t.toString():t),t),vr=e=>{var{data:t,compression:n}=e
if(t){if(n===_.GZipJS){var i=Ki(Xi(_r(t)),{mtime:0}),r=new Blob([i],{type:pr})
return{contentType:pr,body:r,estimatedSize:r.size}}if(n===_.Base64){var o=function(e){var t,n,i,r,o,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a=0,l=0,c="",u=[]
if(!e)return e
e=function(e){var t,n,i,r,o=""
for(t=n=0,i=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,r=0;r<i;r++){var s=e.charCodeAt(r),a=null
s<128?n++:a=s>127&&s<2048?String.fromCharCode(s>>6|192,63&s|128):String.fromCharCode(s>>12|224,s>>6&63|128,63&s|128),Q(a)||(n>t&&(o+=e.substring(t,n)),o+=a,t=n=r+1)}return n>t&&(o+=e.substring(t,e.length)),o}(e)
do{t=(o=e.charCodeAt(a++)<<16|e.charCodeAt(a++)<<8|e.charCodeAt(a++))>>18&63,n=o>>12&63,i=o>>6&63,r=63&o,u[l++]=s.charAt(t)+s.charAt(n)+s.charAt(i)+s.charAt(r)}while(a<e.length)
switch(c=u.join(""),e.length%3){case 1:c=c.slice(0,-2)+"=="
break
case 2:c=c.slice(0,-1)+"="}return c}(_r(t)),s=(e=>"data="+encodeURIComponent("string"==typeof e?e:_r(e)))(o)
return{contentType:"application/x-www-form-urlencoded",body:s,estimatedSize:new Blob([s]).size}}var a=_r(t)
return{contentType:"application/json",body:a,estimatedSize:new Blob([a]).size}}},mr=[]
C&&mr.push({transport:"fetch",method:e=>{var t,n,{contentType:i,body:r,estimatedSize:o}=null!==(t=vr(e))&&void 0!==t?t:{},s=new Headers
oe(e.headers,(function(e,t){s.append(t,e)})),i&&s.append("Content-Type",i)
var a=e.url,l=null
if(P){var c=new P
l={signal:c.signal,timeout:setTimeout((()=>c.abort()),e.timeout)}}C(a,h({method:(null==e?void 0:e.method)||"GET",headers:s,keepalive:"POST"===e.method&&(o||0)<52428.8,body:r,signal:null===(n=l)||void 0===n?void 0:n.signal},e.fetchOptions)).then((t=>t.text().then((n=>{var i,r={statusCode:t.status,text:n}
if(200===t.status)try{r.json=JSON.parse(n)}catch(e){te.error(e)}null===(i=e.callback)||void 0===i||i.call(e,r)})))).catch((t=>{var n
te.error(t),null===(n=e.callback)||void 0===n||n.call(e,{statusCode:0,text:t})})).finally((()=>l?clearTimeout(l.timeout):null))}}),T&&mr.push({transport:"XHR",method:e=>{var t,n=new T
n.open(e.method||"GET",e.url,!0)
var{contentType:i,body:r}=null!==(t=vr(e))&&void 0!==t?t:{}
oe(e.headers,(function(e,t){n.setRequestHeader(t,e)})),i&&n.setRequestHeader("Content-Type",i),e.timeout&&(n.timeout=e.timeout),n.withCredentials=!0,n.onreadystatechange=()=>{if(4===n.readyState){var t,i={statusCode:n.status,text:n.responseText}
if(200===n.status)try{i.json=JSON.parse(n.responseText)}catch(e){}null===(t=e.callback)||void 0===t||t.call(e,i)}},n.send(r)}}),null!=S&&S.sendBeacon&&mr.push({transport:"sendBeacon",method:e=>{var t=gr(e.url,{beacon:"1"})
try{var n,{contentType:i,body:r}=null!==(n=vr(e))&&void 0!==n?n:{},o="string"==typeof r?new Blob([r],{type:i}):r
S.sendBeacon(t,o)}catch(e){}}})
var br=["retriesPerformedSoFar"]
class yr{constructor(e){p(this,"isPolling",!1),p(this,"pollIntervalMs",3e3),p(this,"queue",[]),this.instance=e,this.queue=[],this.areWeOnline=!0,!W(m)&&"onLine"in m.navigator&&(this.areWeOnline=m.navigator.onLine,m.addEventListener("online",(()=>{this.areWeOnline=!0,this.flush()})),m.addEventListener("offline",(()=>{this.areWeOnline=!1})))}retriableRequest(e){var{retriesPerformedSoFar:t}=e,n=g(e,br)
K(t)&&t>0&&(n.url=gr(n.url,{retry_count:t})),this.instance._send_request(h(h({},n),{},{callback:e=>{var i
200!==e.statusCode&&(e.statusCode<400||e.statusCode>=500)&&(null!=t?t:0)<10?this.enqueue(h({retriesPerformedSoFar:t},n)):null===(i=n.callback)||void 0===i||i.call(n,e)}}))}enqueue(e){var t=e.retriesPerformedSoFar||0
e.retriesPerformedSoFar=t+1
var n=function(e){var t=3e3*Math.pow(2,e),n=t/2,i=Math.min(18e5,t),r=(Math.random()-.5)*(i-n)
return Math.ceil(i+r)}(t),i=Date.now()+n
this.queue.push({retryAt:i,requestOptions:e})
var r="Enqueued failed request for retry in ".concat(n)
navigator.onLine||(r+=" (Browser is offline)"),te.warn(r),this.isPolling||(this.isPolling=!0,this.poll())}poll(){this.poller&&clearTimeout(this.poller),this.poller=setTimeout((()=>{this.areWeOnline&&this.queue.length>0&&this.flush(),this.poll()}),this.pollIntervalMs)}flush(){var e=Date.now(),t=[],n=this.queue.filter((n=>n.retryAt<e||(t.push(n),!1)))
if(this.queue=t,n.length>0)for(var{requestOptions:i}of n)this.retriableRequest(i)}unload(){for(var{requestOptions:e}of(this.poller&&(clearTimeout(this.poller),this.poller=void 0),this.queue))try{this.instance._send_request(h(h({},e),{},{transport:"sendBeacon"}))}catch(e){te.error(e)}this.queue=[]}}var wr,kr=ne("[SessionId]")
class Sr{constructor(e,t,n){var i
if(p(this,"_sessionIdChangedHandlers",[]),!e.persistence)throw new Error("SessionIdManager requires a PostHogPersistence instance")
if(e.config.__preview_experimental_cookieless_mode)throw new Error("SessionIdManager cannot be used with __preview_experimental_cookieless_mode")
this.config=e.config,this.persistence=e.persistence,this._windowId=void 0,this._sessionId=void 0,this._sessionStartTimestamp=null,this._sessionActivityTimestamp=null,this._sessionIdGenerator=t||lt,this._windowIdGenerator=n||lt
var r=this.config.persistence_name||this.config.token,o=this.config.session_idle_timeout_seconds||1800
if(this._sessionTimeoutMs=1e3*fi(o,60,36e3,"session_idle_timeout_seconds",1800),e.register({$configured_session_timeout_ms:this._sessionTimeoutMs}),this.resetIdleTimer(),this._window_id_storage_key="ph_"+r+"_window_id",this._primary_window_exists_storage_key="ph_"+r+"_primary_window_exists",this._canUseSessionStorage()){var s=yt.parse(this._window_id_storage_key),a=yt.parse(this._primary_window_exists_storage_key)
s&&!a?this._windowId=s:yt.remove(this._window_id_storage_key),yt.set(this._primary_window_exists_storage_key,!0)}if(null!==(i=this.config.bootstrap)&&void 0!==i&&i.sessionID)try{var l=(e=>{var t=this.config.bootstrap.sessionID.replace(/-/g,"")
if(32!==t.length)throw new Error("Not a valid UUID")
if("7"!==t[12])throw new Error("Not a UUIDv7")
return parseInt(t.substring(0,12),16)})()
this._setSessionId(this.config.bootstrap.sessionID,(new Date).getTime(),l)}catch(e){kr.error("Invalid sessionID in bootstrap",e)}this._listenToReloadWindow()}get sessionTimeoutMs(){return this._sessionTimeoutMs}onSessionId(e){return W(this._sessionIdChangedHandlers)&&(this._sessionIdChangedHandlers=[]),this._sessionIdChangedHandlers.push(e),this._sessionId&&e(this._sessionId,this._windowId),()=>{this._sessionIdChangedHandlers=this._sessionIdChangedHandlers.filter((t=>t!==e))}}_canUseSessionStorage(){return"memory"!==this.config.persistence&&!this.persistence.disabled&&yt.is_supported()}_setWindowId(e){e!==this._windowId&&(this._windowId=e,this._canUseSessionStorage()&&yt.set(this._window_id_storage_key,e))}_getWindowId(){return this._windowId?this._windowId:this._canUseSessionStorage()?yt.parse(this._window_id_storage_key):null}_setSessionId(e,t,n){e===this._sessionId&&t===this._sessionActivityTimestamp&&n===this._sessionStartTimestamp||(this._sessionStartTimestamp=n,this._sessionActivityTimestamp=t,this._sessionId=e,this.persistence.register({[Pe]:[t,e,n]}))}_getSessionId(){if(this._sessionId&&this._sessionActivityTimestamp&&this._sessionStartTimestamp)return[this._sessionActivityTimestamp,this._sessionId,this._sessionStartTimestamp]
var e=this.persistence.props[Pe]
return H(e)&&2===e.length&&e.push(e[0]),e||[0,null,0]}resetSessionId(){this._setSessionId(null,null,null)}_listenToReloadWindow(){null==m||m.addEventListener("beforeunload",(()=>{this._canUseSessionStorage()&&yt.remove(this._primary_window_exists_storage_key)}))}checkAndGetSessionAndWindowId(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(this.config.__preview_experimental_cookieless_mode)throw new Error("checkAndGetSessionAndWindowId should not be called in __preview_experimental_cookieless_mode")
var n=t||(new Date).getTime(),[i,r,o]=this._getSessionId(),s=this._getWindowId(),a=K(o)&&o>0&&Math.abs(n-o)>864e5,l=!1,c=!r,u=!e&&Math.abs(n-i)>this.sessionTimeoutMs
c||u||a?(r=this._sessionIdGenerator(),s=this._windowIdGenerator(),kr.info("new session ID generated",{sessionId:r,windowId:s,changeReason:{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}}),o=n,l=!0):s||(s=this._windowIdGenerator(),l=!0)
var d=0===i||!e||a?n:i,f=0===o?(new Date).getTime():o
return this._setWindowId(s),this._setSessionId(r,d,f),e||this.resetIdleTimer(),l&&this._sessionIdChangedHandlers.forEach((e=>e(r,s,l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0))),{sessionId:r,windowId:s,sessionStartTimestamp:f,changeReason:l?{noSessionId:c,activityTimeout:u,sessionPastMaximumLength:a}:void 0,lastActivityTimestamp:i}}resetIdleTimer(){clearTimeout(this._enforceIdleTimeout),this._enforceIdleTimeout=setTimeout((()=>{this.resetSessionId()}),1.1*this.sessionTimeoutMs)}}!function(e){e.US="us",e.EU="eu",e.CUSTOM="custom"}(wr||(wr={}))
var xr="i.posthog.com"
class Er{constructor(e){p(this,"_regionCache",{}),this.instance=e}get apiHost(){var e=this.instance.config.api_host.trim().replace(/\/$/,"")
return"https://app.posthog.com"===e?"https://us.i.posthog.com":e}get uiHost(){var e,t=null===(e=this.instance.config.ui_host)||void 0===e?void 0:e.replace(/\/$/,"")
return t||(t=this.apiHost.replace(".".concat(xr),".posthog.com")),"https://app.posthog.com"===t?"https://us.posthog.com":t}get region(){return this._regionCache[this.apiHost]||(/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=wr.US:/https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=wr.EU:this._regionCache[this.apiHost]=wr.CUSTOM),this._regionCache[this.apiHost]}endpointFor(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
if(t&&(t="/"===t[0]?t:"/".concat(t)),"ui"===e)return this.uiHost+t
if(this.region===wr.CUSTOM)return this.apiHost+t
var n=xr+t
switch(e){case"assets":return"https://".concat(this.region,"-assets.").concat(n)
case"api":return"https://".concat(this.region,".").concat(n)}}}var Cr="posthog-js"
function $r(e){var{organization:t,projectId:n,prefix:i,severityAllowList:r=["error"]}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return o=>{var s,a,l,c,u
if("*"!==r&&!r.includes(o.level)||!e.__loaded)return o
o.tags||(o.tags={})
var d=e.requestRouter.endpointFor("ui","/project/".concat(e.config.token,"/person/").concat(e.get_distinct_id()))
o.tags["PostHog Person URL"]=d,e.sessionRecordingStarted()&&(o.tags["PostHog Recording URL"]=e.get_session_replay_url({withTimestamp:!0}))
var f=(null===(s=o.exception)||void 0===s?void 0:s.values)||[]
f.map((e=>{e.stacktrace&&(e.stacktrace.type="raw")}))
var h={$exception_message:(null===(a=f[0])||void 0===a?void 0:a.value)||o.message,$exception_type:null===(l=f[0])||void 0===l?void 0:l.type,$exception_personURL:d,$exception_level:o.level,$exception_list:f,$sentry_event_id:o.event_id,$sentry_exception:o.exception,$sentry_exception_message:(null===(c=f[0])||void 0===c?void 0:c.value)||o.message,$sentry_exception_type:null===(u=f[0])||void 0===u?void 0:u.type,$sentry_tags:o.tags}
return t&&n&&(h.$sentry_url=(i||"https://sentry.io/organizations/")+t+"/issues/?project="+n+"&query="+o.event_id),e.exceptions.sendExceptionEvent(h),o}}class Tr{constructor(e,t,n,i,r){this.name=Cr,this.setupOnce=function(o){o($r(e,{organization:t,projectId:n,prefix:i,severityAllowList:r}))}}}var Pr,Lr,Ir,Rr=ne("[SegmentIntegration]")
class Or{constructor(e){this._instance=e}doPageView(e){var t,n=this._previousPageViewProperties(e)
return this._currentPath=null!==(t=null==m?void 0:m.location.pathname)&&void 0!==t?t:"",this._instance.scrollManager.resetContext(),this._prevPageviewTimestamp=e,n}doPageLeave(e){return this._previousPageViewProperties(e)}_previousPageViewProperties(e){var t=this._currentPath,n=this._prevPageviewTimestamp,i=this._instance.scrollManager.getContext()
if(!n)return{}
var r={}
if(i){var{maxScrollHeight:o,lastScrollY:s,maxScrollY:a,maxContentHeight:l,lastContentY:c,maxContentY:u}=i
W(o)||W(s)||W(a)||W(l)||W(c)||W(u)||(o=Math.ceil(o),s=Math.ceil(s),a=Math.ceil(a),l=Math.ceil(l),c=Math.ceil(c),u=Math.ceil(u),r={$prev_pageview_last_scroll:s,$prev_pageview_last_scroll_percentage:o<=1?1:fi(s/o,0,1),$prev_pageview_max_scroll:a,$prev_pageview_max_scroll_percentage:o<=1?1:fi(a/o,0,1),$prev_pageview_last_content:c,$prev_pageview_last_content_percentage:l<=1?1:fi(c/l,0,1),$prev_pageview_max_content:u,$prev_pageview_max_content_percentage:l<=1?1:fi(u/l,0,1)})}return t&&(r.$prev_pageview_pathname=t),n&&(r.$prev_pageview_duration=(e.getTime()-n.getTime())/1e3),r}}!function(e){e.Popover="popover",e.API="api",e.Widget="widget"}(Pr||(Pr={})),function(e){e.Open="open",e.MultipleChoice="multiple_choice",e.SingleChoice="single_choice",e.Rating="rating",e.Link="link"}(Lr||(Lr={})),function(e){e.NextQuestion="next_question",e.End="end",e.ResponseBased="response_based",e.SpecificQuestion="specific_question"}(Ir||(Ir={}))
class Mr{constructor(){p(this,"events",{}),this.events={}}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),()=>{this.events[e]=this.events[e].filter((e=>e!==t))}}emit(e,t){for(var n of this.events[e]||[])n(t)
for(var i of this.events["*"]||[])i(e,t)}}class Fr{constructor(e){p(this,"_debugEventEmitter",new Mr),p(this,"checkStep",((e,t)=>this.checkStepEvent(e,t)&&this.checkStepUrl(e,t)&&this.checkStepElement(e,t))),p(this,"checkStepEvent",((e,t)=>null==t||!t.event||(null==e?void 0:e.event)===(null==t?void 0:t.event))),this.instance=e,this.actionEvents=new Set,this.actionRegistry=new Set}init(){var e,t
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
if(!Fr.matchString(i,null==t?void 0:t.url,(null==t?void 0:t.url_matching)||"contains"))return!1}return!0}static matchString(e,t,n){switch(n){case"regex":return!!m&&St(e,t)
case"exact":return t===e
case"contains":var i=Fr.escapeStringRegexp(t).replace(/_/g,".").replace(/%/g,".*")
return St(e,i)
default:return!1}}static escapeStringRegexp(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}checkStepElement(e,t){if((null!=t&&t.href||null!=t&&t.tag_name||null!=t&&t.text)&&!this.getElementsList(e).some((e=>!(null!=t&&t.href&&!Fr.matchString(e.href||"",null==t?void 0:t.href,(null==t?void 0:t.href_matching)||"exact")||null!=t&&t.tag_name&&e.tag_name!==(null==t?void 0:t.tag_name)||null!=t&&t.text&&!Fr.matchString(e.text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")&&!Fr.matchString(e.$el_text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")))))return!1
if(null!=t&&t.selector){var n,i=null==e||null===(n=e.properties)||void 0===n?void 0:n.$element_selectors
if(!i)return!1
if(!i.includes(null==t?void 0:t.selector))return!1}return!0}getElementsList(e){return null==(null==e?void 0:e.properties.$elements)?[]:null==e?void 0:e.properties.$elements}}class Ar{constructor(e){this.instance=e,this.eventToSurveys=new Map,this.actionToSurveys=new Map}register(e){var t
W(null===(t=this.instance)||void 0===t?void 0:t._addCaptureHook)||(this.setupEventBasedSurveys(e),this.setupActionBasedSurveys(e))}setupActionBasedSurveys(e){var t=e.filter((e=>{var t,n,i,r
return(null===(t=e.conditions)||void 0===t?void 0:t.actions)&&(null===(n=e.conditions)||void 0===n||null===(i=n.actions)||void 0===i||null===(r=i.values)||void 0===r?void 0:r.length)>0}))
0!==t.length&&(null==this.actionMatcher&&(this.actionMatcher=new Fr(this.instance),this.actionMatcher.init(),this.actionMatcher._addActionHook((e=>{this.onAction(e)}))),t.forEach((e=>{var t,n,i,r,o,s,a,l,c,u
e.conditions&&null!==(t=e.conditions)&&void 0!==t&&t.actions&&null!==(n=e.conditions)&&void 0!==n&&null!==(i=n.actions)&&void 0!==i&&i.values&&(null===(r=e.conditions)||void 0===r||null===(o=r.actions)||void 0===o||null===(s=o.values)||void 0===s?void 0:s.length)>0&&(null===(a=this.actionMatcher)||void 0===a||a.register(e.conditions.actions.values),null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c||null===(u=c.values)||void 0===u||u.forEach((t=>{if(t&&t.name){var n=this.actionToSurveys.get(t.name)
n&&n.push(e.id),this.actionToSurveys.set(t.name,n||[e.id])}})))})))}setupEventBasedSurveys(e){var t
0!==e.filter((e=>{var t,n,i,r
return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(i=n.events)||void 0===i||null===(r=i.values)||void 0===r?void 0:r.length)>0})).length&&(null===(t=this.instance)||void 0===t||t._addCaptureHook(((e,t)=>{this.onEvent(e,t)})),e.forEach((e=>{var t,n,i
null===(t=e.conditions)||void 0===t||null===(n=t.events)||void 0===n||null===(i=n.values)||void 0===i||i.forEach((t=>{if(t&&t.name){var n=this.eventToSurveys.get(t.name)
n&&n.push(e.id),this.eventToSurveys.set(t.name,n||[e.id])}}))})))}onEvent(e,t){var n,i,r=(null===(n=this.instance)||void 0===n||null===(i=n.persistence)||void 0===i?void 0:i.props[je])||[]
if(Ar.SURVEY_SHOWN_EVENT_NAME==e&&t&&r.length>0){var o,s=null==t||null===(o=t.properties)||void 0===o?void 0:o.$survey_id
if(s){var a=r.indexOf(s)
a>=0&&(r.splice(a,1),this._updateActivatedSurveys(r))}}else this.eventToSurveys.has(e)&&this._updateActivatedSurveys(r.concat(this.eventToSurveys.get(e)||[]))}onAction(e){var t,n,i=(null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n?void 0:n.props[je])||[]
this.actionToSurveys.has(e)&&this._updateActivatedSurveys(i.concat(this.actionToSurveys.get(e)||[]))}_updateActivatedSurveys(e){var t,n
null===(t=this.instance)||void 0===t||null===(n=t.persistence)||void 0===n||n.register({[je]:[...new Set(e)]})}getSurveys(){var e,t
return(null===(e=this.instance)||void 0===e||null===(t=e.persistence)||void 0===t?void 0:t.props[je])||[]}getEventToSurveys(){return this.eventToSurveys}_getActionMatcher(){return this.actionMatcher}}p(Ar,"SURVEY_SHOWN_EVENT_NAME","survey shown")
var Nr,jr,Dr,Br,Hr,Ur,qr,Gr,Wr={},zr=[],Vr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Qr=Array.isArray
function Jr(e,t){for(var n in t)e[n]=t[n]
return e}function Kr(e){var t=e.parentNode
t&&t.removeChild(e)}function Xr(e,t,n,i,r){var o={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++Dr:r,__i:-1,__u:0}
return null==r&&null!=jr.vnode&&jr.vnode(o),o}function Yr(e){return e.children}function Zr(e,t){this.props=e,this.context=t}function eo(e,t){if(null==t)return e.__?eo(e.__,e.__i+1):null
for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e
return"function"==typeof e.type?eo(e):null}function to(e){var t,n
if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e
break}return to(e)}}function no(e){(!e.__d&&(e.__d=!0)&&Br.push(e)&&!io.__r++||Hr!==jr.debounceRendering)&&((Hr=jr.debounceRendering)||Ur)(io)}function io(){var e,t,n,i,r,o,s,a,l
for(Br.sort(qr);e=Br.shift();)e.__d&&(t=Br.length,i=void 0,o=(r=(n=e).__v).__e,a=[],l=[],(s=n.__P)&&((i=Jr({},r)).__v=r.__v+1,jr.vnode&&jr.vnode(i),fo(s,i,r,n.__n,void 0!==s.ownerSVGElement,32&r.__u?[o]:null,a,null==o?eo(r):o,!!(32&r.__u),l),i.__.__k[i.__i]=i,ho(a,i,l),i.__e!=o&&to(i)),Br.length>t&&Br.sort(qr))
io.__r=0}function ro(e,t,n,i,r,o,s,a,l,c,u){var d,f,h,p,g,_=i&&i.__k||zr,v=t.length
for(n.__d=l,function(e,t,n){var i,r,o,s,a,l=t.length,c=n.length,u=c,d=0
for(e.__k=[],i=0;i<l;i++)null!=(r=e.__k[i]=null==(r=t[i])||"boolean"==typeof r||"function"==typeof r?null:"string"==typeof r||"number"==typeof r||"bigint"==typeof r||r.constructor==String?Xr(null,r,null,null,r):Qr(r)?Xr(Yr,{children:r},null,null,null):void 0===r.constructor&&r.__b>0?Xr(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)?(r.__=e,r.__b=e.__b+1,a=so(r,n,s=i+d,u),r.__i=a,o=null,-1!==a&&(u--,(o=n[a])&&(o.__u|=131072)),null==o||null===o.__v?(-1==a&&d--,"function"!=typeof r.type&&(r.__u|=65536)):a!==s&&(a===s+1?d++:a>s?u>l-s?d+=a-s:d--:d=a<s&&a==s-1?a-s:0,a!==i+d&&(r.__u|=65536))):(o=n[i])&&null==o.key&&o.__e&&(o.__e==e.__d&&(e.__d=eo(o)),go(o,o,!1),n[i]=null,u--)
if(u)for(i=0;i<c;i++)null!=(o=n[i])&&0==(131072&o.__u)&&(o.__e==e.__d&&(e.__d=eo(o)),go(o,o))}(n,t,_),l=n.__d,d=0;d<v;d++)null!=(h=n.__k[d])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?Wr:_[h.__i]||Wr,h.__i=d,fo(e,h,f,r,o,s,a,l,c,u),p=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&po(f.ref,null,h),u.push(h.ref,h.__c||p,h)),null==g&&null!=p&&(g=p),65536&h.__u||f.__k===h.__k?l=oo(h,l,e):"function"==typeof h.type&&void 0!==h.__d?l=h.__d:p&&(l=p.nextSibling),h.__d=void 0,h.__u&=-196609)
n.__d=l,n.__e=g}function oo(e,t,n){var i,r
if("function"==typeof e.type){for(i=e.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=e,t=oo(i[r],t,n))
return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function so(e,t,n,i){var r=e.key,o=e.type,s=n-1,a=n+1,l=t[n]
if(null===l||l&&r==l.key&&o===l.type)return n
if(i>(null!=l&&0==(131072&l.__u)?1:0))for(;s>=0||a<t.length;){if(s>=0){if((l=t[s])&&0==(131072&l.__u)&&r==l.key&&o===l.type)return s
s--}if(a<t.length){if((l=t[a])&&0==(131072&l.__u)&&r==l.key&&o===l.type)return a
a++}}return-1}function ao(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||Vr.test(t)?n:n+"px"}function lo(e,t,n,i,r){var o
e:if("style"===t)if("string"==typeof n)e.style.cssText=n
else{if("string"==typeof i&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||ao(e.style,t,"")
if(n)for(t in n)i&&n[t]===i[t]||ao(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?i?n.u=i.u:(n.u=Date.now(),e.addEventListener(t,o?uo:co,o)):e.removeEventListener(t,o?uo:co,o)
else{if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s")
else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&"role"!==t&&t in e)try{e[t]=null==n?"":n
break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function co(e){var t=this.l[e.type+!1]
if(e.t){if(e.t<=t.u)return}else e.t=Date.now()
return t(jr.event?jr.event(e):e)}function uo(e){return this.l[e.type+!0](jr.event?jr.event(e):e)}function fo(e,t,n,i,r,o,s,a,l,c){var u,d,f,h,p,g,_,v,m,b,y,w,k,S,x,E=t.type
if(void 0!==t.constructor)return null
128&n.__u&&(l=!!(32&n.__u),o=[a=t.__e=n.__e]),(u=jr.__b)&&u(t)
e:if("function"==typeof E)try{if(v=t.props,m=(u=E.contextType)&&i[u.__c],b=u?m?m.props.value:u.__:i,n.__c?_=(d=t.__c=n.__c).__=d.__E:("prototype"in E&&E.prototype.render?t.__c=d=new E(v,b):(t.__c=d=new Zr(v,b),d.constructor=E,d.render=_o),m&&m.sub(d),d.props=v,d.state||(d.state={}),d.context=b,d.__n=i,f=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=E.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=Jr({},d.__s)),Jr(d.__s,E.getDerivedStateFromProps(v,d.__s))),h=d.props,p=d.state,d.__v=t,f)null==E.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount)
else{if(null==E.getDerivedStateFromProps&&v!==h&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(v,b),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(v,d.__s,b)||t.__v===n.__v)){for(t.__v!==n.__v&&(d.props=v,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),y=0;y<d._sb.length;y++)d.__h.push(d._sb[y])
d._sb=[],d.__h.length&&s.push(d)
break e}null!=d.componentWillUpdate&&d.componentWillUpdate(v,d.__s,b),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(h,p,g)}))}if(d.context=b,d.props=v,d.__P=e,d.__e=!1,w=jr.__r,k=0,"prototype"in E&&E.prototype.render){for(d.state=d.__s,d.__d=!1,w&&w(t),u=d.render(d.props,d.state,d.context),S=0;S<d._sb.length;S++)d.__h.push(d._sb[S])
d._sb=[]}else do{d.__d=!1,w&&w(t),u=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++k<25)
d.state=d.__s,null!=d.getChildContext&&(i=Jr(Jr({},i),d.getChildContext())),f||null==d.getSnapshotBeforeUpdate||(g=d.getSnapshotBeforeUpdate(h,p)),ro(e,Qr(x=null!=u&&u.type===Yr&&null==u.key?u.props.children:u)?x:[x],t,n,i,r,o,s,a,l,c),d.base=t.__e,t.__u&=-161,d.__h.length&&s.push(d),_&&(d.__E=d.__=null)}catch(e){t.__v=null,l||null!=o?(t.__e=a,t.__u|=l?160:32,o[o.indexOf(a)]=null):(t.__e=n.__e,t.__k=n.__k),jr.__e(e,t,n)}else null==o&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=function(e,t,n,i,r,o,s,a,l){var c,u,d,f,h,p,g,_=n.props,v=t.props,m=t.type
if("svg"===m&&(r=!0),null!=o)for(c=0;c<o.length;c++)if((h=o[c])&&"setAttribute"in h==!!m&&(m?h.localName===m:3===h.nodeType)){e=h,o[c]=null
break}if(null==e){if(null===m)return document.createTextNode(v)
e=r?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,v.is&&v),o=null,a=!1}if(null===m)_===v||a&&e.data===v||(e.data=v)
else{if(o=o&&Nr.call(e.childNodes),_=n.props||Wr,!a&&null!=o)for(_={},c=0;c<e.attributes.length;c++)_[(h=e.attributes[c]).name]=h.value
for(c in _)h=_[c],"children"==c||("dangerouslySetInnerHTML"==c?d=h:"key"===c||c in v||lo(e,c,null,h,r))
for(c in v)h=v[c],"children"==c?f=h:"dangerouslySetInnerHTML"==c?u=h:"value"==c?p=h:"checked"==c?g=h:"key"===c||a&&"function"!=typeof h||_[c]===h||lo(e,c,h,_[c],r)
if(u)a||d&&(u.__html===d.__html||u.__html===e.innerHTML)||(e.innerHTML=u.__html),t.__k=[]
else if(d&&(e.innerHTML=""),ro(e,Qr(f)?f:[f],t,n,i,r&&"foreignObject"!==m,o,s,o?o[0]:n.__k&&eo(n,0),a,l),null!=o)for(c=o.length;c--;)null!=o[c]&&Kr(o[c])
a||(c="value",void 0!==p&&(p!==e[c]||"progress"===m&&!p||"option"===m&&p!==_[c])&&lo(e,c,p,_[c],!1),c="checked",void 0!==g&&g!==e[c]&&lo(e,c,g,_[c],!1))}return e}(n.__e,t,n,i,r,o,s,l,c);(u=jr.diffed)&&u(t)}function ho(e,t,n){t.__d=void 0
for(var i=0;i<n.length;i++)po(n[i],n[++i],n[++i])
jr.__c&&jr.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){jr.__e(e,t.__v)}}))}function po(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){jr.__e(e,n)}}function go(e,t,n){var i,r
if(jr.unmount&&jr.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||po(i,null,t)),null!=(i=e.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){jr.__e(e,t)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(r=0;r<i.length;r++)i[r]&&go(i[r],t,n||"function"!=typeof e.type)
n||null==e.__e||Kr(e.__e),e.__=e.__e=e.__d=void 0}function _o(e,t,n){return this.constructor(e,n)}Nr=zr.slice,jr={__e:function(e,t,n,i){for(var r,o,s;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&null!=o.getDerivedStateFromError&&(r.setState(o.getDerivedStateFromError(e)),s=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,i||{}),s=r.__d),s)return r.__E=r}catch(t){e=t}throw e}},Dr=0,Zr.prototype.setState=function(e,t){var n
n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=Jr({},this.state),"function"==typeof e&&(e=e(Jr({},n),this.props)),e&&Jr(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),no(this))},Zr.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),no(this))},Zr.prototype.render=Yr,Br=[],Ur="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,qr=function(e,t){return e.__v.__b-t.__v.__b},io.__r=0,Gr=0,function(e,t){var n={__c:t="__cC"+Gr++,__:{isPreviewMode:!1,previewPageIndex:0,handleCloseSurveyPopup:()=>{},isPopup:!0},Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,i
return this.getChildContext||(n=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some((function(e){e.__e=!0,no(e)}))},this.sub=function(e){n.push(e)
var t=e.componentWillUnmount
e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}}
n.Provider.__=n.Consumer.contextType=n}()
var vo=ne("[Surveys]"),mo={icontains:e=>!!m&&m.location.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:e=>!!m&&-1===m.location.href.toLowerCase().indexOf(e.toLowerCase()),regex:e=>!!m&&St(m.location.href,e),not_regex:e=>!!m&&!St(m.location.href,e),exact:e=>(null==m?void 0:m.location.href)===e,is_not:e=>(null==m?void 0:m.location.href)!==e}
class bo{constructor(e){this.instance=e,this._surveyEventReceiver=null}onRemoteConfig(e){this._decideServerResponse=!!e.surveys,this.loadIfEnabled()}reset(){localStorage.removeItem("lastSeenSurveyDate")
var e=(()=>{for(var e=[],t=0;t<localStorage.length;t++){var n=localStorage.key(t)
null!=n&&n.startsWith("seenSurvey_")&&e.push(n)}return e})()
e.forEach((e=>localStorage.removeItem(e)))}loadIfEnabled(){var e,t,n,i=null==I||null===(e=I.__PosthogExtensions__)||void 0===e?void 0:e.generateSurveys
this.instance.config.disable_surveys||!this._decideServerResponse||i||(null==this._surveyEventReceiver&&(this._surveyEventReceiver=new Ar(this.instance)),null===(t=I.__PosthogExtensions__)||void 0===t||null===(n=t.loadExternalDependency)||void 0===n||n.call(t,this.instance,"surveys",(e=>{var t,n
if(e)return vo.error("Could not load surveys script",e)
this._surveyManager=null===(t=I.__PosthogExtensions__)||void 0===t||null===(n=t.generateSurveys)||void 0===n?void 0:n.call(t,this.instance)})))}getSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(this.instance.config.disable_surveys)return e([])
null==this._surveyEventReceiver&&(this._surveyEventReceiver=new Ar(this.instance))
var n=this.instance.get_property(Ne)
if(n&&!t)return e(n)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api","/api/surveys/?token=".concat(this.instance.config.token)),method:"GET",callback:t=>{var n
if(200!==t.statusCode||!t.json)return e([])
var i,r=t.json.surveys||[],o=r.filter((e=>{var t,n,i,r,o,s,a,l,c,u,d,f
return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(n=e.conditions)||void 0===n||null===(i=n.events)||void 0===i?void 0:i.values)&&(null===(r=e.conditions)||void 0===r||null===(o=r.events)||void 0===o||null===(s=o.values)||void 0===s?void 0:s.length)>0||(null===(a=e.conditions)||void 0===a?void 0:a.actions)&&(null===(l=e.conditions)||void 0===l||null===(c=l.actions)||void 0===c?void 0:c.values)&&(null===(u=e.conditions)||void 0===u||null===(d=u.actions)||void 0===d||null===(f=d.values)||void 0===f?void 0:f.length)>0}))
return o.length>0&&(null===(i=this._surveyEventReceiver)||void 0===i||i.register(o)),null===(n=this.instance.persistence)||void 0===n||n.register({[Ne]:r}),e(r)}})}getActiveMatchingSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.getSurveys((t=>{var n,i=t.filter((e=>!(!e.start_date||e.end_date))).filter((e=>{var t,n,i,r
if(!e.conditions)return!0
var o=null===(t=e.conditions)||void 0===t||!t.url||mo[null!==(n=null===(i=e.conditions)||void 0===i?void 0:i.urlMatchType)&&void 0!==n?n:"icontains"](e.conditions.url),s=null===(r=e.conditions)||void 0===r||!r.selector||(null==x?void 0:x.querySelector(e.conditions.selector))
return o&&s})),r=null===(n=this._surveyEventReceiver)||void 0===n?void 0:n.getSurveys(),o=i.filter((e=>{var t,n,i,o,s,a,l,c,u,d,f
if(!(e.linked_flag_key||e.targeting_flag_key||e.internal_targeting_flag_key||null!==(t=e.feature_flag_keys)&&void 0!==t&&t.length))return!0
var h=!e.linked_flag_key||this.instance.featureFlags.isFeatureEnabled(e.linked_flag_key),p=!e.targeting_flag_key||this.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key),g=(null===(n=e.conditions)||void 0===n?void 0:n.events)&&(null===(i=e.conditions)||void 0===i||null===(o=i.events)||void 0===o?void 0:o.values)&&(null===(s=e.conditions)||void 0===s||null===(a=s.events)||void 0===a?void 0:a.values.length)>0,_=(null===(l=e.conditions)||void 0===l?void 0:l.actions)&&(null===(c=e.conditions)||void 0===c||null===(u=c.actions)||void 0===u?void 0:u.values)&&(null===(d=e.conditions)||void 0===d||null===(f=d.actions)||void 0===f?void 0:f.values.length)>0,v=!g&&!_||(null==r?void 0:r.includes(e.id)),m=this._canActivateRepeatedly(e),b=!(e.internal_targeting_flag_key&&!m)||this.instance.featureFlags.isFeatureEnabled(e.internal_targeting_flag_key),y=this.checkFlags(e)
return h&&p&&b&&v&&y}))
return e(o)}),t)}checkFlags(e){var t
return null===(t=e.feature_flag_keys)||void 0===t||!t.length||e.feature_flag_keys.every((e=>{var{key:t,value:n}=e
return!t||!n||this.instance.featureFlags.isFeatureEnabled(n)}))}getNextSurveyStep(e,t,n){var i,r=e.questions[t],o=t+1
if(null===(i=r.branching)||void 0===i||!i.type)return t===e.questions.length-1?Ir.End:o
if(r.branching.type===Ir.End)return Ir.End
if(r.branching.type===Ir.SpecificQuestion){if(Number.isInteger(r.branching.index))return r.branching.index}else if(r.branching.type===Ir.ResponseBased){if(r.type===Lr.SingleChoice){var s,a,l=r.choices.indexOf("".concat(n))
if(null!==(s=r.branching)&&void 0!==s&&null!==(a=s.responseValues)&&void 0!==a&&a.hasOwnProperty(l)){var c=r.branching.responseValues[l]
return Number.isInteger(c)?c:c===Ir.End?Ir.End:o}}else if(r.type===Lr.Rating){var u,d
if("number"!=typeof n||!Number.isInteger(n))throw new Error("The response type must be an integer")
var f=function(e,t){if(3===t){if(e<1||e>3)throw new Error("The response must be in range 1-3")
return 1===e?"negative":2===e?"neutral":"positive"}if(5===t){if(e<1||e>5)throw new Error("The response must be in range 1-5")
return e<=2?"negative":3===e?"neutral":"positive"}if(7===t){if(e<1||e>7)throw new Error("The response must be in range 1-7")
return e<=3?"negative":4===e?"neutral":"positive"}if(10===t){if(e<0||e>10)throw new Error("The response must be in range 0-10")
return e<=6?"detractors":e<=8?"passives":"promoters"}throw new Error("The scale must be one of: 3, 5, 7, 10")}(n,r.scale)
if(null!==(u=r.branching)&&void 0!==u&&null!==(d=u.responseValues)&&void 0!==d&&d.hasOwnProperty(f)){var h=r.branching.responseValues[f]
return Number.isInteger(h)?h:h===Ir.End?Ir.End:o}}return o}return vo.warn("Falling back to next question index due to unexpected branching type"),o}_canActivateRepeatedly(e){var t
return J(null===(t=I.__PosthogExtensions__)||void 0===t?void 0:t.canActivateRepeatedly)?(vo.warn("init was not called"),!1):I.__PosthogExtensions__.canActivateRepeatedly(e)}canRenderSurvey(e){J(this._surveyManager)?vo.warn("init was not called"):this.getSurveys((t=>{var n=t.filter((t=>t.id===e))[0]
this._surveyManager.canRenderSurvey(n)}))}renderSurvey(e,t){J(this._surveyManager)?vo.warn("init was not called"):this.getSurveys((n=>{var i=n.filter((t=>t.id===e))[0]
this._surveyManager.renderSurvey(i,null==x?void 0:x.querySelector(t))}))}}var yo=ne("[RateLimiter]")
class wo{constructor(e){var t,n
p(this,"serverLimits",{}),p(this,"lastEventRateLimited",!1),p(this,"checkForLimiting",(e=>{var t=e.text
if(t&&t.length)try{(JSON.parse(t).quota_limited||[]).forEach((e=>{yo.info("".concat(e||"events"," is quota limited.")),this.serverLimits[e]=(new Date).getTime()+6e4}))}catch(e){return void yo.warn('could not rate limit - continuing. Error: "'.concat(null==e?void 0:e.message,'"'),{text:t})}})),this.instance=e,this.captureEventsPerSecond=(null===(t=e.config.rate_limiting)||void 0===t?void 0:t.events_per_second)||10,this.captureEventsBurstLimit=Math.max((null===(n=e.config.rate_limiting)||void 0===n?void 0:n.events_burst_limit)||10*this.captureEventsPerSecond,this.captureEventsPerSecond),this.lastEventRateLimited=this.clientRateLimitContext(!0).isRateLimited}clientRateLimitContext(){var e,t,n,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=(new Date).getTime(),o=null!==(e=null===(t=this.instance.persistence)||void 0===t?void 0:t.get_property(Ue))&&void 0!==e?e:{tokens:this.captureEventsBurstLimit,last:r}
o.tokens+=(r-o.last)/1e3*this.captureEventsPerSecond,o.last=r,o.tokens>this.captureEventsBurstLimit&&(o.tokens=this.captureEventsBurstLimit)
var s=o.tokens<1
return s||i||(o.tokens=Math.max(0,o.tokens-1)),!s||this.lastEventRateLimited||i||this.instance.capture("$$client_ingestion_warning",{$$client_ingestion_warning_message:"posthog-js client rate limited. Config is set to ".concat(this.captureEventsPerSecond," events per second and ").concat(this.captureEventsBurstLimit," events burst limit.")},{skip_client_rate_limiting:!0}),this.lastEventRateLimited=s,null===(n=this.instance.persistence)||void 0===n||n.set_property(Ue,o),{isRateLimited:s,remainingTokens:o.tokens}}isServerRateLimited(e){var t=this.serverLimits[e||"events"]||!1
return!1!==t&&(new Date).getTime()<t}}var ko=()=>h({initialPathName:(null==E?void 0:E.pathname)||"",referringDomain:Sn.referringDomain()},Sn.campaignParams())
class So{constructor(e,t,n){p(this,"_onSessionIdCallback",(e=>{var t=this._getStoredProps()
if(!t||t.sessionId!==e){var n={sessionId:e,props:this._sessionSourceParamGenerator()}
this._persistence.register({[He]:n})}})),this._sessionIdManager=e,this._persistence=t,this._sessionSourceParamGenerator=n||ko,this._sessionIdManager.onSessionId(this._onSessionIdCallback)}_getStoredProps(){return this._persistence.props[He]}getSessionProps(){var e,t=null===(e=this._getStoredProps())||void 0===e?void 0:e.props
return t?{$client_session_initial_referring_host:t.referringDomain,$client_session_initial_pathname:t.initialPathName,$client_session_initial_utm_source:t.utm_source,$client_session_initial_utm_campaign:t.utm_campaign,$client_session_initial_utm_medium:t.utm_medium,$client_session_initial_utm_content:t.utm_content,$client_session_initial_utm_term:t.utm_term}:{}}}var xo=["ahrefsbot","ahrefssiteaudit","applebot","baiduspider","bingbot","bingpreview","bot.htm","bot.php","crawler","deepscan","duckduckbot","facebookexternal","facebookcatalog","gptbot","http://yandex.com/bots","hubspot","ia_archiver","linkedinbot","mj12bot","msnbot","nessus","petalbot","pinterest","prerender","rogerbot","screaming frog","semrushbot","sitebulb","slurp","turnitin","twitterbot","vercelbot","yahoo! slurp","yandexbot","headlesschrome","cypress","Google-HotelAdsVerifier","adsbot-google","apis-google","duplexweb-google","feedfetcher-google","google favicon","google web preview","google-read-aloud","googlebot","googleweblight","mediapartners-google","storebot-google","Bytespider;"],Eo=function(e,t){if(!e)return!1
var n=e.toLowerCase()
return xo.concat(t||[]).some((e=>{var t=e.toLowerCase()
return-1!==n.indexOf(t)}))},Co=function(e,t){if(!e)return!1
var n=e.userAgent
if(n&&Eo(n,t))return!0
try{var i=null==e?void 0:e.userAgentData
if(null!=i&&i.brands&&i.brands.some((e=>Eo(null==e?void 0:e.brand,t))))return!0}catch(e){}return!!e.webdriver}
class $o{constructor(){this.clicks=[]}isRageClick(e,t,n){var i=this.clicks[this.clicks.length-1]
if(i&&Math.abs(e-i.x)+Math.abs(t-i.y)<30&&n-i.timestamp<1e3){if(this.clicks.push({x:e,y:t,timestamp:n}),3===this.clicks.length)return!0}else this.clicks=[{x:e,y:t,timestamp:n}]
return!1}}var To=ne("[Dead Clicks]"),Po=()=>!0,Lo=e=>{var t,n=!(null===(t=e.instance.persistence)||void 0===t||!t.get_property(ye)),i=e.instance.config.capture_dead_clicks
return X(i)?i:n}
class Io{get lazyLoadedDeadClicksAutocapture(){return this._lazyLoadedDeadClicksAutocapture}constructor(e,t,n){this.instance=e,this.isEnabled=t,this.onCapture=n,this.startIfEnabled()}onRemoteConfig(e){this.instance.persistence&&this.instance.persistence.register({[ye]:null==e?void 0:e.captureDeadClicks}),this.startIfEnabled()}startIfEnabled(){this.isEnabled(this)&&this.loadScript((()=>{this.start()}))}loadScript(e){var t,n,i
null!==(t=I.__PosthogExtensions__)&&void 0!==t&&t.initDeadClicksAutocapture&&e(),null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"dead-clicks-autocapture",(t=>{t?To.error("failed to load script",t):e()}))}start(){var e
if(x){if(!this._lazyLoadedDeadClicksAutocapture&&null!==(e=I.__PosthogExtensions__)&&void 0!==e&&e.initDeadClicksAutocapture){var t=q(this.instance.config.capture_dead_clicks)?this.instance.config.capture_dead_clicks:{}
t.__onCapture=this.onCapture,this._lazyLoadedDeadClicksAutocapture=I.__PosthogExtensions__.initDeadClicksAutocapture(this.instance,t),this._lazyLoadedDeadClicksAutocapture.start(x),To.info("starting...")}}else To.error("`document` not found. Cannot start.")}stop(){this._lazyLoadedDeadClicksAutocapture&&(this._lazyLoadedDeadClicksAutocapture.stop(),this._lazyLoadedDeadClicksAutocapture=void 0,To.info("stopping..."))}}var Ro=ne("[Heatmaps]")
function Oo(e){return q(e)&&"clientX"in e&&"clientY"in e&&K(e.clientX)&&K(e.clientY)}class Mo{constructor(e){var t
p(this,"rageclicks",new $o),p(this,"_enabledServerSide",!1),p(this,"_initialized",!1),p(this,"_flushInterval",null),this.instance=e,this._enabledServerSide=!(null===(t=this.instance.persistence)||void 0===t||!t.props[ve]),null==m||m.addEventListener("beforeunload",(()=>{this.flush()}))}get flushIntervalMilliseconds(){var e=5e3
return q(this.instance.config.capture_heatmaps)&&this.instance.config.capture_heatmaps.flush_interval_milliseconds&&(e=this.instance.config.capture_heatmaps.flush_interval_milliseconds),e}get isEnabled(){return W(this.instance.config.capture_heatmaps)?W(this.instance.config.enable_heatmaps)?this._enabledServerSide:this.instance.config.enable_heatmaps:!1!==this.instance.config.capture_heatmaps}startIfEnabled(){if(this.isEnabled){if(this._initialized)return
Ro.info("starting..."),this._setupListeners(),this._flushInterval=setInterval(this.flush.bind(this),this.flushIntervalMilliseconds)}else{var e,t
clearInterval(null!==(e=this._flushInterval)&&void 0!==e?e:void 0),null===(t=this.deadClicksCapture)||void 0===t||t.stop(),this.getAndClearBuffer()}}onRemoteConfig(e){var t=!!e.heatmaps
this.instance.persistence&&this.instance.persistence.register({[ve]:t}),this._enabledServerSide=t,this.startIfEnabled()}getAndClearBuffer(){var e=this.buffer
return this.buffer=void 0,e}_onDeadClick(e){this._onClick(e.originalEvent,"deadclick")}_setupListeners(){m&&x&&(de(x,"click",(e=>this._onClick(e||(null==m?void 0:m.event))),!1,!0),de(x,"mousemove",(e=>this._onMouseMove(e||(null==m?void 0:m.event))),!1,!0),this.deadClicksCapture=new Io(this.instance,Po,this._onDeadClick.bind(this)),this.deadClicksCapture.startIfEnabled(),this._initialized=!0)}_getProperties(e,t){var n=this.instance.scrollManager.scrollY(),i=this.instance.scrollManager.scrollX(),r=this.instance.scrollManager.scrollElement(),o=function(e,t,n){for(var i=e;i&&In(i)&&!Rn(i,"body");){if(i===n)return!1
if(M(t,null==m?void 0:m.getComputedStyle(i).position))return!0
i=Un(i)}return!1}(Bn(e),["fixed","sticky"],r)
return{x:e.clientX+(o?0:i),y:e.clientY+(o?0:n),target_fixed:o,type:t}}_onClick(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"click"
if(!Ln(e.target)&&Oo(e)){var i=this._getProperties(e,n)
null!==(t=this.rageclicks)&&void 0!==t&&t.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._capture(h(h({},i),{},{type:"rageclick"})),this._capture(i)}}_onMouseMove(e){!Ln(e.target)&&Oo(e)&&(clearTimeout(this._mouseMoveTimeout),this._mouseMoveTimeout=setTimeout((()=>{this._capture(this._getProperties(e,"mousemove"))}),500))}_capture(e){if(m){var t=m.location.href
this.buffer=this.buffer||{},this.buffer[t]||(this.buffer[t]=[]),this.buffer[t].push(e)}}flush(){this.buffer&&!G(this.buffer)&&this.instance.capture("$$heatmap",{$heatmap_data:this.getAndClearBuffer()})}}class Fo{constructor(e){p(this,"_updateScrollData",(()=>{var e,t,n,i
this.context||(this.context={})
var r=this.scrollElement(),o=this.scrollY(),s=r?Math.max(0,r.scrollHeight-r.clientHeight):0,a=o+((null==r?void 0:r.clientHeight)||0),l=(null==r?void 0:r.scrollHeight)||0
this.context.lastScrollY=Math.ceil(o),this.context.maxScrollY=Math.max(o,null!==(e=this.context.maxScrollY)&&void 0!==e?e:0),this.context.maxScrollHeight=Math.max(s,null!==(t=this.context.maxScrollHeight)&&void 0!==t?t:0),this.context.lastContentY=a,this.context.maxContentY=Math.max(a,null!==(n=this.context.maxContentY)&&void 0!==n?n:0),this.context.maxContentHeight=Math.max(l,null!==(i=this.context.maxContentHeight)&&void 0!==i?i:0)})),this.instance=e}getContext(){return this.context}resetContext(){var e=this.context
return setTimeout(this._updateScrollData,0),e}startMeasuringScrollPosition(){null==m||m.addEventListener("scroll",this._updateScrollData,!0),null==m||m.addEventListener("scrollend",this._updateScrollData,!0),null==m||m.addEventListener("resize",this._updateScrollData)}scrollElement(){if(!this.instance.config.scroll_root_selector)return null==m?void 0:m.document.documentElement
var e=H(this.instance.config.scroll_root_selector)?this.instance.config.scroll_root_selector:[this.instance.config.scroll_root_selector]
for(var t of e){var n=null==m?void 0:m.document.querySelector(t)
if(n)return n}}scrollY(){if(this.instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollTop||0}return m&&(m.scrollY||m.pageYOffset||m.document.documentElement.scrollTop)||0}scrollX(){if(this.instance.config.scroll_root_selector){var e=this.scrollElement()
return e&&e.scrollLeft||0}return m&&(m.scrollX||m.pageXOffset||m.document.documentElement.scrollLeft)||0}}var Ao=ne("[AutoCapture]")
function No(e,t){return t.length>e?t.slice(0,e)+"...":t}function jo(e){if(e.previousElementSibling)return e.previousElementSibling
var t=e
do{t=t.previousSibling}while(t&&!In(t))
return t}function Do(e,t){for(var n,i,{e:r,maskAllElementAttributes:o,maskAllText:s,elementAttributeIgnoreList:a,elementsChainAsString:l}=t,c=[e],u=e;u.parentNode&&!Rn(u,"body");)Mn(u.parentNode)?(c.push(u.parentNode.host),u=u.parentNode.host):(c.push(u.parentNode),u=u.parentNode)
var d,f=[],h={},p=!1,g=!1
if(oe(c,(e=>{var t=qn(e)
"a"===e.tagName.toLowerCase()&&(p=e.getAttribute("href"),p=t&&p&&Xn(p)&&p),M(Nn(e),"ph-no-capture")&&(g=!0),f.push(function(e,t,n,i){var r=e.tagName.toLowerCase(),o={tag_name:r}
Hn.indexOf(r)>-1&&!n&&("a"===r.toLowerCase()||"button"===r.toLowerCase()?o.$el_text=No(1024,Yn(e)):o.$el_text=No(1024,Dn(e)))
var s=Nn(e)
s.length>0&&(o.classes=s.filter((function(e){return""!==e}))),oe(e.attributes,(function(n){var r
if((!Gn(e)||-1!==["name","id","class","aria-label"].indexOf(n.name))&&(null==i||!i.includes(n.name))&&!t&&Xn(n.value)&&(r=n.name,!z(r)||"_ngcontent"!==r.substring(0,10)&&"_nghost"!==r.substring(0,7))){var s=n.value
"class"===n.name&&(s=Fn(s).join(" ")),o["attr__"+n.name]=No(1024,s)}}))
for(var a=1,l=1,c=e;c=jo(c);)a++,c.tagName===e.tagName&&l++
return o.nth_child=a,o.nth_of_type=l,o}(e,o,s,a))
var n=function(e){if(!qn(e))return{}
var t={}
return oe(e.attributes,(function(e){if(e.name&&0===e.name.indexOf("data-ph-capture-attribute")){var n=e.name.replace("data-ph-capture-attribute-",""),i=e.value
n&&i&&Xn(i)&&(t[n]=i)}})),t}(e)
se(h,n)})),g)return{props:{},explicitNoCapture:g}
if(s||("a"===e.tagName.toLowerCase()||"button"===e.tagName.toLowerCase()?f[0].$el_text=Yn(e):f[0].$el_text=Dn(e)),p){var _,v
f[0].attr__href=p
var b=null===(_=kt(p))||void 0===_?void 0:_.host,y=null==m||null===(v=m.location)||void 0===v?void 0:v.host
b&&y&&b!==y&&(d=p)}return{props:se({$event_type:r.type,$ce_version:1},l?{}:{$elements:f},{$elements_chain:ei(f)},null!==(n=f[0])&&void 0!==n&&n.$el_text?{$el_text:null===(i=f[0])||void 0===i?void 0:i.$el_text}:{},d&&"click"===r.type?{$external_click_url:d}:{},h)}}class Bo{constructor(e){p(this,"_initialized",!1),p(this,"_isDisabledServerSide",null),p(this,"rageclicks",new $o),p(this,"_elementsChainAsString",!1),this.instance=e,this._elementSelectors=null}get config(){var e,t,n=q(this.instance.config.autocapture)?this.instance.config.autocapture:{}
return n.url_allowlist=null===(e=n.url_allowlist)||void 0===e?void 0:e.map((e=>new RegExp(e))),n.url_ignorelist=null===(t=n.url_ignorelist)||void 0===t?void 0:t.map((e=>new RegExp(e))),n}_addDomEventHandlers(){if(this.isBrowserSupported()){if(m&&x){var e=e=>{e=e||(null==m?void 0:m.event)
try{this._captureEvent(e)}catch(e){Ao.error("Failed to capture event",e)}},t=e=>{e=e||(null==m?void 0:m.event),this._captureEvent(e,R)}
de(x,"submit",e,!1,!0),de(x,"change",e,!1,!0),de(x,"click",e,!1,!0),this.config.capture_copied_text&&(de(x,"copy",t,!1,!0),de(x,"cut",t,!1,!0))}}else Ao.info("Disabling Automatic Event Collection because this browser is not supported")}startIfEnabled(){this.isEnabled&&!this._initialized&&(this._addDomEventHandlers(),this._initialized=!0)}onRemoteConfig(e){e.elementsChainAsString&&(this._elementsChainAsString=e.elementsChainAsString),this.instance.persistence&&this.instance.persistence.register({[_e]:!!e.autocapture_opt_out}),this._isDisabledServerSide=!!e.autocapture_opt_out,this.startIfEnabled()}setElementSelectors(e){this._elementSelectors=e}getElementSelectors(e){var t,n=[]
return null===(t=this._elementSelectors)||void 0===t||t.forEach((t=>{var i=null==x?void 0:x.querySelectorAll(t)
null==i||i.forEach((i=>{e===i&&n.push(t)}))})),n}get isEnabled(){var e,t,n=null===(e=this.instance.persistence)||void 0===e?void 0:e.props[_e],i=this._isDisabledServerSide
if(Q(i)&&!X(n)&&!this.instance.config.advanced_disable_decide)return!1
var r=null!==(t=this._isDisabledServerSide)&&void 0!==t?t:!!n
return!!this.instance.config.autocapture&&!r}_captureEvent(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$autocapture"
if(this.isEnabled){var n,i=Bn(e)
On(i)&&(i=i.parentNode||null),"$autocapture"===t&&"click"===e.type&&e instanceof MouseEvent&&this.instance.config.rageclick&&null!==(n=this.rageclicks)&&void 0!==n&&n.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._captureEvent(e,"$rageclick")
var r=t===R
if(i&&function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0
if(!m||!e||Rn(e,"html")||!In(e))return!1
if(null!=n&&n.url_allowlist&&!An(n.url_allowlist))return!1
if(null!=n&&n.url_ignorelist&&An(n.url_ignorelist))return!1
if(null!=n&&n.dom_event_allowlist){var o=n.dom_event_allowlist
if(o&&!o.some((e=>t.type===e)))return!1}for(var s=!1,a=[e],l=!0,c=e;c.parentNode&&!Rn(c,"body");)if(Mn(c.parentNode))a.push(c.parentNode.host),c=c.parentNode.host
else{if(!(l=Un(c)))break
if(i||Hn.indexOf(l.tagName.toLowerCase())>-1)s=!0
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
default:return s?(r||["click"]).indexOf(t.type)>=0:(r||["click"]).indexOf(t.type)>=0&&(Hn.indexOf(f)>-1||"true"===e.getAttribute("contenteditable"))}}(i,e,this.config,r,r?["copy","cut"]:void 0)){var{props:o,explicitNoCapture:s}=Do(i,{e:e,maskAllElementAttributes:this.instance.config.mask_all_element_attributes,maskAllText:this.instance.config.mask_all_text,elementAttributeIgnoreList:this.config.element_attribute_ignorelist,elementsChainAsString:this._elementsChainAsString})
if(s)return!1
var a=this.getElementSelectors(i)
if(a&&a.length>0&&(o.$element_selectors=a),t===R){var l,c=jn(null==m||null===(l=m.getSelection())||void 0===l?void 0:l.toString()),u=e.type||"clipboard"
if(!c)return!1
o.$selected_content=c,o.$copy_type=u}return this.instance.capture(t,o),!0}}}isBrowserSupported(){return U(null==x?void 0:x.querySelectorAll)}}var Ho,Uo=ne("[TracingHeaders]")
class qo{constructor(e){p(this,"_restoreXHRPatch",void 0),p(this,"_restoreFetchPatch",void 0),p(this,"_startCapturing",(()=>{var e,t,n,i
W(this._restoreXHRPatch)&&(null===(e=I.__PosthogExtensions__)||void 0===e||null===(t=e.tracingHeadersPatchFns)||void 0===t||t._patchXHR(this.instance.sessionManager)),W(this._restoreFetchPatch)&&(null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.tracingHeadersPatchFns)||void 0===i||i._patchFetch(this.instance.sessionManager))})),this.instance=e}_loadScript(e){var t,n,i
null!==(t=I.__PosthogExtensions__)&&void 0!==t&&t.tracingHeadersPatchFns&&e(),null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"tracing-headers",(t=>{if(t)return Uo.error("failed to load script",t)
e()}))}startIfEnabledOrStop(){var e,t
this.instance.config.__add_tracing_headers?this._loadScript(this._startCapturing):(null===(e=this._restoreXHRPatch)||void 0===e||e.call(this),null===(t=this._restoreFetchPatch)||void 0===t||t.call(this),this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0)}}!function(e){e[e.PENDING=-1]="PENDING",e[e.DENIED=0]="DENIED",e[e.GRANTED=1]="GRANTED"}(Ho||(Ho={}))
class Go{constructor(e){this.instance=e}get config(){return this.instance.config}get consent(){return this.getDnt()?Ho.DENIED:this.storedConsent}isOptedOut(){return this.consent===Ho.DENIED||this.consent===Ho.PENDING&&this.config.opt_out_capturing_by_default}isOptedIn(){return!this.isOptedOut()}optInOut(e){this.storage.set(this.storageKey,e?1:0,this.config.cookie_expiration,this.config.cross_subdomain_cookie,this.config.secure_cookie)}reset(){this.storage.remove(this.storageKey,this.config.cross_subdomain_cookie)}get storageKey(){var{token:e,opt_out_capturing_cookie_prefix:t}=this.instance.config
return(t||"__ph_opt_in_out_")+e}get storedConsent(){var e=this.storage.get(this.storageKey)
return"1"===e?Ho.GRANTED:"0"===e?Ho.DENIED:Ho.PENDING}get storage(){if(!this._storage){var e=this.config.opt_out_capturing_persistence_type
this._storage="localStorage"===e?pt:ft
var t="localStorage"===e?ft:pt
t.get(this.storageKey)&&(this._storage.get(this.storageKey)||this.optInOut("1"===t.get(this.storageKey)),t.remove(this.storageKey,this.config.cross_subdomain_cookie))}return this._storage}getDnt(){return!!this.config.respect_dnt&&!!fe([null==S?void 0:S.doNotTrack,null==S?void 0:S.msDoNotTrack,I.doNotTrack],(e=>M([!0,1,"1","yes"],e)))}}var Wo=ne("[ExceptionAutocapture]")
class zo{constructor(e){var t
p(this,"originalOnUnhandledRejectionHandler",void 0),p(this,"startCapturing",(()=>{var e,t,n,i
if(m&&this.isEnabled&&!this.hasHandlers&&!this.isCapturing){var r=null===(e=I.__PosthogExtensions__)||void 0===e||null===(t=e.errorWrappingFunctions)||void 0===t?void 0:t.wrapOnError,o=null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.errorWrappingFunctions)||void 0===i?void 0:i.wrapUnhandledRejection
if(r&&o)try{this.unwrapOnError=r(this.captureException.bind(this)),this.unwrapUnhandledRejection=o(this.captureException.bind(this))}catch(e){Wo.error("failed to start",e),this.stopCapturing()}else Wo.error("failed to load error wrapping functions - cannot start")}})),this.instance=e,this.remoteEnabled=!(null===(t=this.instance.persistence)||void 0===t||!t.props[me]),this.startIfEnabled()}get isEnabled(){var e
return null!==(e=this.remoteEnabled)&&void 0!==e&&e}get isCapturing(){var e
return!(null==m||null===(e=m.onerror)||void 0===e||!e.__POSTHOG_INSTRUMENTED__)}get hasHandlers(){return this.originalOnUnhandledRejectionHandler||this.unwrapOnError}startIfEnabled(){this.isEnabled&&!this.isCapturing&&(Wo.info("enabled, starting..."),this.loadScript(this.startCapturing))}loadScript(e){var t,n
this.hasHandlers&&e(),null===(t=I.__PosthogExtensions__)||void 0===t||null===(n=t.loadExternalDependency)||void 0===n||n.call(t,this.instance,"exception-autocapture",(t=>{if(t)return Wo.error("failed to load script",t)
e()}))}stopCapturing(){var e,t
null===(e=this.unwrapOnError)||void 0===e||e.call(this),null===(t=this.unwrapUnhandledRejection)||void 0===t||t.call(this)}onRemoteConfig(e){var t=e.autocaptureExceptions
this.remoteEnabled=!!t||!1,this.instance.persistence&&this.instance.persistence.register({[me]:this.remoteEnabled}),this.startIfEnabled()}captureException(e){var t=this.instance.requestRouter.endpointFor("ui")
e.$exception_personURL="".concat(t,"/project/").concat(this.instance.config.token,"/person/").concat(this.instance.get_distinct_id()),this.instance.exceptions.sendExceptionEvent(e)}}var Vo=ne("[Web Vitals]"),Qo=9e5
class Jo{constructor(e){var t
p(this,"_enabledServerSide",!1),p(this,"_initialized",!1),p(this,"buffer",{url:void 0,metrics:[],firstMetricTimestamp:void 0}),p(this,"_flushToCapture",(()=>{clearTimeout(this._delayedFlushTimer),0!==this.buffer.metrics.length&&(this.instance.capture("$web_vitals",this.buffer.metrics.reduce(((e,t)=>h(h({},e),{},{["$web_vitals_".concat(t.name,"_event")]:h({},t),["$web_vitals_".concat(t.name,"_value")]:t.value})),{})),this.buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0})})),p(this,"_addToBuffer",(e=>{var t,n=null===(t=this.instance.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0)
if(W(n))Vo.error("Could not read session ID. Dropping metrics!")
else{this.buffer=this.buffer||{url:void 0,metrics:[],firstMetricTimestamp:void 0}
var i=this._currentURL()
W(i)||(J(null==e?void 0:e.name)||J(null==e?void 0:e.value)?Vo.error("Invalid metric received",e):this._maxAllowedValue&&e.value>=this._maxAllowedValue?Vo.error("Ignoring metric with value >= "+this._maxAllowedValue,e):(this.buffer.url!==i&&(this._flushToCapture(),this._delayedFlushTimer=setTimeout(this._flushToCapture,this.flushToCaptureTimeoutMs)),W(this.buffer.url)&&(this.buffer.url=i),this.buffer.firstMetricTimestamp=W(this.buffer.firstMetricTimestamp)?Date.now():this.buffer.firstMetricTimestamp,e.attribution&&e.attribution.interactionTargetElement&&(e.attribution.interactionTargetElement=void 0),this.buffer.metrics.push(h(h({},e),{},{$current_url:i,$session_id:n.sessionId,$window_id:n.windowId,timestamp:Date.now()})),this.buffer.metrics.length===this.allowedMetrics.length&&this._flushToCapture()))}})),p(this,"_startCapturing",(()=>{var e,t,n,i,r=I.__PosthogExtensions__
W(r)||W(r.postHogWebVitalsCallbacks)||({onLCP:e,onCLS:t,onFCP:n,onINP:i}=r.postHogWebVitalsCallbacks),e&&t&&n&&i?(this.allowedMetrics.indexOf("LCP")>-1&&e(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("CLS")>-1&&t(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("FCP")>-1&&n(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("INP")>-1&&i(this._addToBuffer.bind(this)),this._initialized=!0):Vo.error("web vitals callbacks not loaded - not starting")})),this.instance=e,this._enabledServerSide=!(null===(t=this.instance.persistence)||void 0===t||!t.props[be]),this.startIfEnabled()}get allowedMetrics(){var e,t,n=q(this.instance.config.capture_performance)?null===(e=this.instance.config.capture_performance)||void 0===e?void 0:e.web_vitals_allowed_metrics:void 0
return W(n)?(null===(t=this.instance.persistence)||void 0===t?void 0:t.props[we])||["CLS","FCP","INP","LCP"]:n}get flushToCaptureTimeoutMs(){return(q(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals_delayed_flush_ms:void 0)||5e3}get _maxAllowedValue(){var e=q(this.instance.config.capture_performance)&&K(this.instance.config.capture_performance.__web_vitals_max_value)?this.instance.config.capture_performance.__web_vitals_max_value:Qo
return 0<e&&e<=6e4?Qo:e}get isEnabled(){var e=q(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals:void 0
return X(e)?e:this._enabledServerSide}startIfEnabled(){this.isEnabled&&!this._initialized&&(Vo.info("enabled, starting..."),this.loadScript(this._startCapturing))}onRemoteConfig(e){var t=q(e.capturePerformance)&&!!e.capturePerformance.web_vitals,n=q(e.capturePerformance)?e.capturePerformance.web_vitals_allowed_metrics:void 0
this.instance.persistence&&(this.instance.persistence.register({[be]:t}),this.instance.persistence.register({[we]:n})),this._enabledServerSide=t,this.startIfEnabled()}loadScript(e){var t,n,i
null!==(t=I.__PosthogExtensions__)&&void 0!==t&&t.postHogWebVitalsCallbacks&&e(),null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.loadExternalDependency)||void 0===i||i.call(n,this.instance,"web-vitals",(t=>{t?Vo.error("failed to load script",t):e()}))}_currentURL(){var e=m?m.location.href:void 0
return e||Vo.error("Could not determine current URL"),e}}var Ko={icontains:(e,t)=>!!m&&t.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:(e,t)=>!!m&&-1===t.href.toLowerCase().indexOf(e.toLowerCase()),regex:(e,t)=>!!m&&St(t.href,e),not_regex:(e,t)=>!!m&&!St(t.href,e),exact:(e,t)=>t.href===e,is_not:(e,t)=>t.href!==e}
class Xo{constructor(e){var t=this
p(this,"getWebExperimentsAndEvaluateDisplayLogic",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
t.getWebExperiments((e=>{Xo.logInfo("retrieved web experiments from the server"),t._flagToExperiments=new Map,e.forEach((e=>{if(e.feature_flag_key){var n
t._flagToExperiments&&(Xo.logInfo("setting flag key ",e.feature_flag_key," to web experiment ",e),null===(n=t._flagToExperiments)||void 0===n||n.set(e.feature_flag_key,e))
var i=t.instance.getFeatureFlag(e.feature_flag_key)
z(i)&&e.variants[i]&&t.applyTransforms(e.name,i,e.variants[i].transforms)}else if(e.variants)for(var r in e.variants){var o=e.variants[r]
Xo.matchesTestVariant(o)&&t.applyTransforms(e.name,r,o.transforms)}}))}),e)})),this.instance=e,this.instance.onFeatureFlags((e=>{this.onFeatureFlags(e)}))}onFeatureFlags(e){if(this._is_bot())Xo.logInfo("Refusing to render web experiment since the viewer is a likely bot")
else if(!this.instance.config.disable_web_experiments){if(J(this._flagToExperiments))return this._flagToExperiments=new Map,this.loadIfEnabled(),void this.previewWebExperiment()
Xo.logInfo("applying feature flags",e),e.forEach((e=>{var t
if(this._flagToExperiments&&null!==(t=this._flagToExperiments)&&void 0!==t&&t.has(e)){var n,i=this.instance.getFeatureFlag(e),r=null===(n=this._flagToExperiments)||void 0===n?void 0:n.get(e)
i&&null!=r&&r.variants[i]&&this.applyTransforms(r.name,i,r.variants[i].transforms)}}))}}previewWebExperiment(){var e=Xo.getWindowLocation()
if(null!=e&&e.search){var t=xt(null==e?void 0:e.search,"__experiment_id"),n=xt(null==e?void 0:e.search,"__experiment_variant")
t&&n&&(Xo.logInfo("previewing web experiments ".concat(t," && ").concat(n)),this.getWebExperiments((e=>{this.showPreviewWebExperiment(parseInt(t),n,e)}),!1,!0))}}loadIfEnabled(){this.instance.config.disable_web_experiments||this.getWebExperimentsAndEvaluateDisplayLogic()}getWebExperiments(e,t,n){if(this.instance.config.disable_web_experiments&&!n)return e([])
var i=this.instance.get_property("$web_experiments")
if(i&&!t)return e(i)
this.instance._send_request({url:this.instance.requestRouter.endpointFor("api","/api/web_experiments/?token=".concat(this.instance.config.token)),method:"GET",callback:t=>{if(200!==t.statusCode||!t.json)return e([])
var n=t.json.experiments||[]
return e(n)}})}showPreviewWebExperiment(e,t,n){var i=n.filter((t=>t.id===e))
i&&i.length>0&&(Xo.logInfo("Previewing web experiment [".concat(i[0].name,"] with variant [").concat(t,"]")),this.applyTransforms(i[0].name,t,i[0].variants[t].transforms,!0))}static matchesTestVariant(e){return!J(e.conditions)&&Xo.matchUrlConditions(e)&&Xo.matchUTMConditions(e)}static matchUrlConditions(e){var t
if(J(e.conditions)||J(null===(t=e.conditions)||void 0===t?void 0:t.url))return!0
var n,i,r,o=Xo.getWindowLocation()
return!!o&&(null===(n=e.conditions)||void 0===n||!n.url||Ko[null!==(i=null===(r=e.conditions)||void 0===r?void 0:r.urlMatchType)&&void 0!==i?i:"icontains"](e.conditions.url,o))}static getWindowLocation(){return null==m?void 0:m.location}static matchUTMConditions(e){var t
if(J(e.conditions)||J(null===(t=e.conditions)||void 0===t?void 0:t.utm))return!0
var n=Sn.campaignParams()
if(n.utm_source){var i,r,o,s,a,l,c,u,d,f,h,p,g,_,v,m,b=null===(i=e.conditions)||void 0===i||null===(r=i.utm)||void 0===r||!r.utm_campaign||(null===(o=e.conditions)||void 0===o||null===(s=o.utm)||void 0===s?void 0:s.utm_campaign)==n.utm_campaign,y=null===(a=e.conditions)||void 0===a||null===(l=a.utm)||void 0===l||!l.utm_source||(null===(c=e.conditions)||void 0===c||null===(u=c.utm)||void 0===u?void 0:u.utm_source)==n.utm_source,w=null===(d=e.conditions)||void 0===d||null===(f=d.utm)||void 0===f||!f.utm_medium||(null===(h=e.conditions)||void 0===h||null===(p=h.utm)||void 0===p?void 0:p.utm_medium)==n.utm_medium,k=null===(g=e.conditions)||void 0===g||null===(_=g.utm)||void 0===_||!_.utm_term||(null===(v=e.conditions)||void 0===v||null===(m=v.utm)||void 0===m?void 0:m.utm_term)==n.utm_term
return b&&w&&k&&y}return!1}static logInfo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
te.info("[WebExperiments] ".concat(e),n)}applyTransforms(e,t,n,i){var r
this._is_bot()?Xo.logInfo("Refusing to render web experiment since the viewer is a likely bot"):"control"!==t?n.forEach((n=>{if(n.selector){var r
Xo.logInfo("applying transform of variant ".concat(t," for experiment ").concat(e," "),n)
var o,s=0,a=null===(r=document)||void 0===r?void 0:r.querySelectorAll(n.selector)
null==a||a.forEach((e=>{var t=e
s+=1,n.attributes&&n.attributes.forEach((e=>{switch(e.name){case"text":t.innerText=e.value
break
case"html":t.innerHTML=e.value
break
case"cssClass":t.className=e.value
break
default:t.setAttribute(e.name,e.value)}})),n.text&&(t.innerText=n.text),n.html&&(t.parentElement?t.parentElement.innerHTML=n.html:t.innerHTML=n.html),n.css&&t.setAttribute("style",n.css)})),this.instance&&this.instance.capture&&this.instance.capture("$web_experiment_applied",{$web_experiment_name:e,$web_experiment_variant:t,$web_experiment_preview:i,$web_experiment_document_url:null===(o=Xo.getWindowLocation())||void 0===o?void 0:o.href,$web_experiment_elements_modified:s})}})):(Xo.logInfo("Control variants leave the page unmodified."),this.instance&&this.instance.capture&&this.instance.capture("$web_experiment_applied",{$web_experiment_name:e,$web_experiment_preview:i,$web_experiment_variant:t,$web_experiment_document_url:null===(r=Xo.getWindowLocation())||void 0===r?void 0:r.href,$web_experiment_elements_modified:0}))}_is_bot(){return S&&this.instance?Co(S,this.instance.config.custom_blocked_useragents):void 0}}class Yo{constructor(e){this.instance=e}sendExceptionEvent(e){this.instance.capture("$exception",e,{_noTruncate:!0,_batchKey:"exceptionEvent"})}}var Zo=["$set_once","$set"],es=ne("[SiteApps]")
class ts{constructor(e){this.instance=e,this.bufferedInvocations=[],this.apps={}}get isEnabled(){return!!this.instance.config.opt_in_site_apps}eventCollector(e,t){if(t){var n=this.globalsForEvent(t)
this.bufferedInvocations.push(n),this.bufferedInvocations.length>1e3&&(this.bufferedInvocations=this.bufferedInvocations.slice(10))}}get siteAppLoaders(){var e,t
return null===(e=I._POSTHOG_REMOTE_CONFIG)||void 0===e||null===(t=e[this.instance.config.token])||void 0===t?void 0:t.siteApps}init(){if(this.isEnabled){var e=this.instance._addCaptureHook(this.eventCollector.bind(this))
this.stopBuffering=()=>{e(),this.bufferedInvocations=[],this.stopBuffering=void 0}}}globalsForEvent(e){var t,n,i,r,o,s,a
if(!e)throw new Error("Event payload is required")
var l={},c=this.instance.get_property("$groups")||[],u=this.instance.get_property("$stored_group_properties")||{}
for(var[d,f]of Object.entries(u))l[d]={id:c[d],type:d,properties:f}
var{$set_once:p,$set:_}=e
return{event:h(h({},g(e,Zo)),{},{properties:h(h(h({},e.properties),_?{$set:h(h({},null!==(t=null===(n=e.properties)||void 0===n?void 0:n.$set)&&void 0!==t?t:{}),_)}:{}),p?{$set_once:h(h({},null!==(i=null===(r=e.properties)||void 0===r?void 0:r.$set_once)&&void 0!==i?i:{}),p)}:{}),elements_chain:null!==(o=null===(s=e.properties)||void 0===s?void 0:s.$elements_chain)&&void 0!==o?o:"",distinct_id:null===(a=e.properties)||void 0===a?void 0:a.distinct_id}),person:{properties:this.instance.get_property("$stored_person_properties")},groups:l}}setupSiteApp(e){var t={id:e.id,loaded:!1,errored:!1}
this.apps[e.id]=t
var n=n=>{var i
for(var r of(this.apps[e.id].errored=!n,this.apps[e.id].loaded=!0,es.info("Site app with id ".concat(e.id," ").concat(n?"loaded":"errored")),n&&this.bufferedInvocations.length&&(es.info("Processing ".concat(this.bufferedInvocations.length," events for site app with id ").concat(e.id)),this.bufferedInvocations.forEach((e=>{var n
return null===(n=t.processEvent)||void 0===n?void 0:n.call(t,e)}))),Object.values(this.apps)))if(!r.loaded)return
null===(i=this.stopBuffering)||void 0===i||i.call(this)}
try{var{processEvent:i}=e.init({posthog:this.instance,callback:e=>{n(e)}})
i&&(t.processEvent=i)}catch(t){es.error("Error while initializing PostHog app with config id ".concat(e.id),t),n(!1)}}onCapturedEvent(e){if(0!==Object.keys(this.apps).length){var t=this.globalsForEvent(e)
for(var n of Object.values(this.apps))try{var i
null===(i=n.processEvent)||void 0===i||i.call(n,t)}catch(t){es.error("Error while processing event ".concat(e.event," for site app ").concat(n.id),t)}}}onRemoteConfig(e){var t,n,i,r=this
if(null!==(t=this.siteAppLoaders)&&void 0!==t&&t.length){if(!this.isEnabled)return void es.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
for(var o of this.siteAppLoaders)this.setupSiteApp(o)
this.instance.on("eventCaptured",(e=>this.onCapturedEvent(e)))}else if(null===(n=this.stopBuffering)||void 0===n||n.call(this),null!==(i=e.siteApps)&&void 0!==i&&i.length)if(this.isEnabled){var s=function(e,t){var n,i
I["__$$ph_site_app_".concat(e)]=r.instance,null===(n=I.__PosthogExtensions__)||void 0===n||null===(i=n.loadSiteApp)||void 0===i||i.call(n,r.instance,t,(t=>{if(t)return es.error("Error while initializing PostHog app with config id ".concat(e),t)}))}
for(var{id:a,url:l}of e.siteApps)s(a,l)}else es.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')}}var ns={},is=()=>{},rs="posthog",os=!hr&&-1===(null==L?void 0:L.indexOf("MSIE"))&&-1===(null==L?void 0:L.indexOf("Mozilla")),ss=()=>{var e,t,n
return{api_host:"https://us.i.posthog.com",ui_host:null,token:"",autocapture:!0,rageclick:!0,cross_subdomain_cookie:(t=null==x?void 0:x.location,n=null==t?void 0:t.hostname,!!z(n)&&"herokuapp.com"!==n.split(".").slice(-2).join(".")),persistence:"localStorage+cookie",persistence_name:"",loaded:is,store_google:!0,custom_campaign_params:[],custom_blocked_useragents:[],save_referrer:!0,capture_pageview:!0,capture_pageleave:"if_capture_pageview",debug:E&&z(null==E?void 0:E.search)&&-1!==E.search.indexOf("__posthog_debug=true")||!1,verbose:!1,cookie_expiration:365,upgrade:!1,disable_session_recording:!1,disable_persistence:!1,disable_web_experiments:!0,disable_surveys:!1,enable_recording_console_log:void 0,secure_cookie:"https:"===(null==m||null===(e=m.location)||void 0===e?void 0:e.protocol),ip:!0,opt_out_capturing_by_default:!1,opt_out_persistence_by_default:!1,opt_out_useragent_filter:!1,opt_out_capturing_persistence_type:"localStorage",opt_out_capturing_cookie_prefix:null,opt_in_site_apps:!1,property_denylist:[],respect_dnt:!1,sanitize_properties:null,request_headers:{},inapp_protocol:"//",inapp_link_new_window:!1,request_batching:!0,properties_string_max_length:65535,session_recording:{},mask_all_element_attributes:!1,mask_all_text:!1,advanced_disable_decide:!1,advanced_disable_feature_flags:!1,advanced_disable_feature_flags_on_first_load:!1,advanced_disable_toolbar_metrics:!1,feature_flag_request_timeout_ms:3e3,on_request_error:e=>{var t="Bad HTTP status: "+e.statusCode+" "+e.text
te.error(t)},get_device_id:e=>e,_onCapture:is,capture_performance:void 0,name:"posthog",bootstrap:{},disable_compression:!1,session_idle_timeout_seconds:1800,person_profiles:"identified_only",__add_tracing_headers:!1,before_send:void 0}},as=e=>{var t={}
W(e.process_person)||(t.person_profiles=e.process_person),W(e.xhr_headers)||(t.request_headers=e.xhr_headers),W(e.cookie_name)||(t.persistence_name=e.cookie_name),W(e.disable_cookie)||(t.disable_persistence=e.disable_cookie)
var n=se({},t,e)
return H(e.property_blacklist)&&(W(e.property_denylist)?n.property_denylist=e.property_blacklist:H(e.property_denylist)?n.property_denylist=[...e.property_blacklist,...e.property_denylist]:te.error("Invalid value for property_denylist config: "+e.property_denylist)),n}
class ls{constructor(){p(this,"__forceAllowLocalhost",!1)}get _forceAllowLocalhost(){return this.__forceAllowLocalhost}set _forceAllowLocalhost(e){te.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),this.__forceAllowLocalhost=e}}class cs{get decideEndpointWasHit(){var e,t
return null!==(e=null===(t=this.featureFlags)||void 0===t?void 0:t.hasLoadedFlags)&&void 0!==e&&e}constructor(){p(this,"webPerformance",new ls),p(this,"version",v.LIB_VERSION),p(this,"_internalEventEmitter",new Mr),this.config=ss(),this.SentryIntegration=Tr,this.sentryIntegration=e=>function(e,t){var n=$r(e,t)
return{name:Cr,processEvent:e=>n(e)}}(this,e),this.__request_queue=[],this.__loaded=!1,this.analyticsDefaultEndpoint="/e/",this._initialPageviewCaptured=!1,this._initialPersonProfilesConfig=null,this.featureFlags=new tt(this),this.toolbar=new dr(this),this.scrollManager=new Fo(this),this.pageViewManager=new Or(this),this.surveys=new bo(this),this.experiments=new Xo(this),this.exceptions=new Yo(this),this.rateLimiter=new wo(this),this.requestRouter=new Er(this),this.consent=new Go(this),this.people={set:(e,t,n)=>{var i=z(e)?{[e]:t}:e
this.setPersonProperties(i),null==n||n({})},set_once:(e,t,n)=>{var i=z(e)?{[e]:t}:e
this.setPersonProperties(void 0,i),null==n||n({})}},this.on("eventCaptured",(e=>te.info('send "'.concat(null==e?void 0:e.event,'"'),e)))}init(e,t,n){if(n&&n!==rs){var i,r=null!==(i=ns[n])&&void 0!==i?i:new cs
return r._init(e,t,n),ns[n]=r,ns[rs][n]=r,r}return this._init(e,t,n)}_init(e){var t,n,i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0
if(W(e)||V(e))return te.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),this
if(this.__loaded)return te.warn("You have already initialized PostHog! Re-initializing is a no-op"),this
this.__loaded=!0,this.config={},this._triggered_notifs=[],r.person_profiles&&(this._initialPersonProfilesConfig=r.person_profiles),this.set_config(se({},ss(),as(r),{name:o,token:e})),this.config.on_xhr_error&&te.error("on_xhr_error is deprecated. Use on_request_error instead"),this.compression=r.disable_compression?void 0:_.GZipJS,this.persistence=new En(this.config),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new En(h(h({},this.config),{},{persistence:"sessionStorage"}))
var s=h({},this.persistence.props),a=h({},this.sessionPersistence.props)
if(this._requestQueue=new fr((e=>this._send_retriable_request(e))),this._retryQueue=new yr(this),this.__request_queue=[],this.config.__preview_experimental_cookieless_mode||(this.sessionManager=new Sr(this),this.sessionPropsManager=new So(this.sessionManager,this.persistence)),new qo(this).startIfEnabledOrStop(),this.siteApps=new ts(this),null===(t=this.siteApps)||void 0===t||t.init(),this.config.__preview_experimental_cookieless_mode||(this.sessionRecording=new or(this),this.sessionRecording.startIfEnabledOrStop()),this.config.disable_scroll_properties||this.scrollManager.startMeasuringScrollPosition(),this.autocapture=new Bo(this),this.autocapture.startIfEnabled(),this.surveys.loadIfEnabled(),this.heatmaps=new Mo(this),this.heatmaps.startIfEnabled(),this.webVitalsAutocapture=new Jo(this),this.exceptionObserver=new zo(this),this.exceptionObserver.startIfEnabled(),this.deadClicksAutocapture=new Io(this,Lo),this.deadClicksAutocapture.startIfEnabled(),v.DEBUG=v.DEBUG||this.config.debug,v.DEBUG&&te.info("Starting in debug mode",{this:this,config:r,thisC:h({},this.config),p:s,s:a}),this._sync_opt_out_with_persistence(),void 0!==(null===(n=r.bootstrap)||void 0===n?void 0:n.distinctID)){var l,c,u=this.config.get_device_id(lt()),d=null!==(l=r.bootstrap)&&void 0!==l&&l.isIdentifiedID?u:r.bootstrap.distinctID
this.persistence.set_property(Be,null!==(c=r.bootstrap)&&void 0!==c&&c.isIdentifiedID?"identified":"anonymous"),this.register({distinct_id:r.bootstrap.distinctID,$device_id:d})}if(this._hasBootstrappedFeatureFlags()){var f,p,g=Object.keys((null===(f=r.bootstrap)||void 0===f?void 0:f.featureFlags)||{}).filter((e=>{var t,n
return!(null===(t=r.bootstrap)||void 0===t||null===(n=t.featureFlags)||void 0===n||!n[e])})).reduce(((e,t)=>{var n,i
return e[t]=(null===(n=r.bootstrap)||void 0===n||null===(i=n.featureFlags)||void 0===i?void 0:i[t])||!1,e}),{}),b=Object.keys((null===(p=r.bootstrap)||void 0===p?void 0:p.featureFlagPayloads)||{}).filter((e=>g[e])).reduce(((e,t)=>{var n,i,o,s
return null!==(n=r.bootstrap)&&void 0!==n&&null!==(i=n.featureFlagPayloads)&&void 0!==i&&i[t]&&(e[t]=null===(o=r.bootstrap)||void 0===o||null===(s=o.featureFlagPayloads)||void 0===s?void 0:s[t]),e}),{})
this.featureFlags.receivedFeatureFlags({featureFlags:g,featureFlagPayloads:b})}if(this.config.__preview_experimental_cookieless_mode)this.register_once({distinct_id:Qe,$device_id:null},"")
else if(!this.get_distinct_id()){var y=this.config.get_device_id(lt())
this.register_once({distinct_id:y,$device_id:y},""),this.persistence.set_property(Be,"anonymous")}return null==m||null===(i=m.addEventListener)||void 0===i||i.call(m,"onpagehide"in self?"pagehide":"unload",this._handle_unload.bind(this)),this.toolbar.maybeLoadToolbar(),r.segment?function(e,t){var n=e.config.segment
if(!n)return t()
!function(e,t){var n=e.config.segment
if(!n)return t()
var i=n=>{var i=()=>n.anonymousId()||lt()
e.config.get_device_id=i,n.id()&&(e.register({distinct_id:n.id(),$device_id:i()}),e.persistence.set_property(Be,"identified")),t()},r=n.user()
"then"in r&&U(r.then)?r.then((e=>i(e))):i(r)}(e,(()=>{n.register((e=>{Promise&&Promise.resolve||Rr.warn("This browser does not have Promise support, and can not use the segment integration")
var t=(t,n)=>{var i
if(!n)return t
t.event.userId||t.event.anonymousId===e.get_distinct_id()||(Rr.info("No userId set, resetting PostHog"),e.reset()),t.event.userId&&t.event.userId!==e.get_distinct_id()&&(Rr.info("UserId set, identifying with PostHog"),e.identify(t.event.userId))
var r=e._calculate_event_properties(n,null!==(i=t.event.properties)&&void 0!==i?i:{},new Date)
return t.event.properties=Object.assign({},r,t.event.properties),t}
return{name:"PostHog JS",type:"enrichment",version:"1.0.0",isLoaded:()=>!0,load:()=>Promise.resolve(),track:e=>t(e,e.event.event),page:e=>t(e,"$pageview"),identify:e=>t(e,"$identify"),screen:e=>t(e,"$screen")}})(e)).then((()=>{t()}))}))}(this,(()=>this._loaded())):this._loaded(),U(this.config._onCapture)&&this.config._onCapture!==is&&(te.warn("onCapture is deprecated. Please use `before_send` instead"),this.on("eventCaptured",(e=>this.config._onCapture(e.event,e)))),this}_onRemoteConfig(e){var t,n,i,r,o,s,a,l,c
if(!x||!x.body)return te.info("document not ready yet, trying again in 500 milliseconds..."),void setTimeout((()=>{this._onRemoteConfig(e)}),500)
this.compression=void 0,e.supportedCompression&&!this.config.disable_compression&&(this.compression=M(e.supportedCompression,_.GZipJS)?_.GZipJS:M(e.supportedCompression,_.Base64)?_.Base64:void 0),null!==(t=e.analytics)&&void 0!==t&&t.endpoint&&(this.analyticsDefaultEndpoint=e.analytics.endpoint),this.set_config({person_profiles:this._initialPersonProfilesConfig?this._initialPersonProfilesConfig:e.defaultIdentifiedOnly?"identified_only":"always"}),null===(n=this.siteApps)||void 0===n||n.onRemoteConfig(e),null===(i=this.sessionRecording)||void 0===i||i.onRemoteConfig(e),null===(r=this.autocapture)||void 0===r||r.onRemoteConfig(e),null===(o=this.heatmaps)||void 0===o||o.onRemoteConfig(e),null===(s=this.surveys)||void 0===s||s.onRemoteConfig(e),null===(a=this.webVitalsAutocapture)||void 0===a||a.onRemoteConfig(e),null===(l=this.exceptionObserver)||void 0===l||l.onRemoteConfig(e),null===(c=this.deadClicksAutocapture)||void 0===c||c.onRemoteConfig(e)}_loaded(){try{this.config.loaded(this)}catch(e){te.critical("`loaded` function failed",e)}this._start_queue_if_opted_in(),this.config.capture_pageview&&setTimeout((()=>{this.consent.isOptedIn()&&this._captureInitialPageview()}),1),new ar(this).load(),this.featureFlags.decide()}_start_queue_if_opted_in(){var e
this.has_opted_out_capturing()||this.config.request_batching&&(null===(e=this._requestQueue)||void 0===e||e.enable())}_dom_loaded(){this.has_opted_out_capturing()||re(this.__request_queue,(e=>this._send_retriable_request(e))),this.__request_queue=[],this._start_queue_if_opted_in()}_handle_unload(){var e,t
this.config.request_batching?(this._shouldCapturePageleave()&&this.capture("$pageleave"),null===(e=this._requestQueue)||void 0===e||e.unload(),null===(t=this._retryQueue)||void 0===t||t.unload()):this._shouldCapturePageleave()&&this.capture("$pageleave",null,{transport:"sendBeacon"})}_send_request(e){this.__loaded&&(os?this.__request_queue.push(e):this.rateLimiter.isServerRateLimited(e.batchKey)||(e.transport=e.transport||this.config.api_transport,e.url=gr(e.url,{ip:this.config.ip?1:0}),e.headers=h({},this.config.request_headers),e.compression="best-available"===e.compression?this.compression:e.compression,e.fetchOptions=e.fetchOptions||this.config.fetch_options,(e=>{var t,n,i,r=h({},e)
r.timeout=r.timeout||6e4,r.url=gr(r.url,{_:(new Date).getTime().toString(),ver:v.LIB_VERSION,compression:r.compression})
var o=null!==(t=r.transport)&&void 0!==t?t:"fetch",s=null!==(n=null===(i=fe(mr,(e=>e.transport===o)))||void 0===i?void 0:i.method)&&void 0!==n?n:mr[0].method
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
var o=new Date,s=(null==n?void 0:n.timestamp)||o,a={uuid:lt(),event:e,properties:this._calculate_event_properties(e,t||{},s)}
r&&(a.properties.$lib_rate_limit_remaining_tokens=r.remainingTokens),(null==n?void 0:n.$set)&&(a.$set=null==n?void 0:n.$set)
var l=this._calculate_set_once_properties(null==n?void 0:n.$set_once)
l&&(a.$set_once=l),(a=function(e,t){return n=e,i=e=>z(e)&&!Q(t)?e.slice(0,t):e,r=new Set,function e(t,n){return t!==Object(t)?i?i(t):t:r.has(t)?void 0:(r.add(t),H(t)?(o=[],re(t,(t=>{o.push(e(t))}))):(o={},oe(t,((t,n)=>{r.has(t)||(o[n]=e(t,n))}))),o)
var o}(n)
var n,i,r}(a,null!=n&&n._noTruncate?null:this.config.properties_string_max_length)).timestamp=s,W(null==n?void 0:n.timestamp)||(a.properties.$event_time_override_provided=!0,a.properties.$event_time_override_system_time=o)
var c=h(h({},a.properties.$set),a.$set)
if(G(c)||this.setPersonPropertiesForFlags(c),!J(this.config.before_send)){var u=this._runBeforeSend(a)
if(!u)return
a=u}this._internalEventEmitter.emit("eventCaptured",a)
var d={method:"POST",url:null!==(i=null==n?void 0:n._url)&&void 0!==i?i:this.requestRouter.endpointFor("api",this.analyticsDefaultEndpoint),data:a,compression:"best-available",batchKey:null==n?void 0:n._batchKey}
return!this.config.request_batching||n&&(null==n||!n._batchKey)||null!=n&&n.send_instantly?this._send_retriable_request(d):this._requestQueue.enqueue(d),a}te.critical("This capture call is ignored due to client rate limiting.")}}else te.error("No event name provided to posthog.capture")}else te.uninitializedWarning("posthog.capture")}_addCaptureHook(e){return this.on("eventCaptured",(t=>e(t.event,t)))}_calculate_event_properties(e,t,n){if(n=n||new Date,!this.persistence||!this.sessionPersistence)return t
var i=this.persistence.remove_event_timer(e),r=h({},t)
if(r.token=this.config.token,this.config.__preview_experimental_cookieless_mode&&(r.$cklsh_mode=!0),"$snapshot"===e){var o=h(h({},this.persistence.properties()),this.sessionPersistence.properties())
return r.distinct_id=o.distinct_id,(!z(r.distinct_id)&&!K(r.distinct_id)||V(r.distinct_id))&&te.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),r}var s=Sn.properties()
if(this.sessionManager){var{sessionId:a,windowId:l}=this.sessionManager.checkAndGetSessionAndWindowId()
r.$session_id=a,r.$window_id=l}if(this.sessionRecording&&(r.$recording_status=this.sessionRecording.status),this.requestRouter.region===wr.CUSTOM&&(r.$lib_custom_api_host=this.config.api_host),this.sessionPropsManager&&this.config.__preview_send_client_session_params&&("$pageview"===e||"$pageleave"===e||"$autocapture"===e)){var c=this.sessionPropsManager.getSessionProps()
r=se(r,c)}if(!this.config.disable_scroll_properties){var u={}
"$pageview"===e?u=this.pageViewManager.doPageView(n):"$pageleave"===e&&(u=this.pageViewManager.doPageLeave(n)),r=se(r,u)}if("$pageview"===e&&x&&(r.title=x.title),!W(i)){var d=n.getTime()-i
r.$duration=parseFloat((d/1e3).toFixed(3))}L&&this.config.opt_out_useragent_filter&&(r.$browser_type=this._is_bot()?"bot":"browser"),(r=se({},s,this.persistence.properties(),this.sessionPersistence.properties(),r)).$is_identified=this._isIdentified(),H(this.config.property_denylist)?oe(this.config.property_denylist,(function(e){delete r[e]})):te.error("Invalid value for property_denylist config: "+this.config.property_denylist+" or property_blacklist config: "+this.config.property_blacklist)
var f=this.config.sanitize_properties
f&&(r=f(r,e))
var p=this._hasPersonProcessing()
return r.$process_person_profile=p,p&&this._requirePersonProcessing("_calculate_event_properties"),r}_calculate_set_once_properties(e){if(!this.persistence||!this._hasPersonProcessing())return e
var t=se({},this.persistence.get_initial_props(),e||{}),n=this.config.sanitize_properties
return n&&(t=n(t,"$set_once")),G(t)?void 0:t}register(e,t){var n
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
this.register_once({$had_persisted_distinct_id:!0,$device_id:r},"")}e!==i&&e!==this.get_property(pe)&&(this.unregister(pe),this.register({distinct_id:e}))
var o="anonymous"===(this.persistence.get_property(Be)||"anonymous")
e!==i&&o?(this.persistence.set_property(Be,"identified"),this.setPersonPropertiesForFlags(t||{},!1),this.capture("$identify",{distinct_id:e,$anon_distinct_id:i},{$set:t||{},$set_once:n||{}}),this.featureFlags.setAnonymousDistinctId(i)):(t||n)&&this.setPersonProperties(t,n),e!==i&&(this.reloadFeatureFlags(),this.unregister(De))}}else te.error("Unique user id has not been set in posthog.identify")}setPersonProperties(e,t){(e||t)&&this._requirePersonProcessing("posthog.setPersonProperties")&&(this.setPersonPropertiesForFlags(e||{}),this.capture("$set",{$set:e||{},$set_once:t||{}}))}group(e,t,n){if(e&&t){if(this._requirePersonProcessing("posthog.group")){var i=this.getGroups()
i[e]!==t&&this.resetGroupPropertiesForFlags(e),this.register({$groups:h(h({},i),{},{[e]:t})}),n&&(this.capture("$groupidentify",{$group_type:e,$group_key:t,$group_set:n}),this.setGroupPropertiesForFlags({[e]:n})),i[e]===t||n||this.reloadFeatureFlags()}}else te.error("posthog.group requires a group type and group key")}resetGroups(){this.register({$groups:{}}),this.resetGroupPropertiesForFlags(),this.reloadFeatureFlags()}setPersonPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this.featureFlags.setPersonPropertiesForFlags(e,t)}resetPersonPropertiesForFlags(){this.featureFlags.resetPersonPropertiesForFlags()}setGroupPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
this._requirePersonProcessing("posthog.setGroupPropertiesForFlags")&&this.featureFlags.setGroupPropertiesForFlags(e,t)}resetGroupPropertiesForFlags(e){this.featureFlags.resetGroupPropertiesForFlags(e)}reset(e){var t,n,i,r,o
if(te.info("reset"),!this.__loaded)return te.uninitializedWarning("posthog.reset")
var s=this.get_property("$device_id")
if(this.consent.reset(),null===(t=this.persistence)||void 0===t||t.clear(),null===(n=this.sessionPersistence)||void 0===n||n.clear(),null===(i=this.surveys)||void 0===i||i.reset(),null===(r=this.persistence)||void 0===r||r.set_property(Be,"anonymous"),null===(o=this.sessionManager)||void 0===o||o.resetSessionId(),this.config.__preview_experimental_cookieless_mode)this.register_once({distinct_id:Qe,$device_id:null},"")
else{var a=this.config.get_device_id(lt())
this.register_once({distinct_id:a,$device_id:e?a:s},"")}}get_distinct_id(){return this.get_property("distinct_id")}getGroups(){return this.get_property("$groups")||{}}get_session_id(){var e,t
return null!==(e=null===(t=this.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0).sessionId)&&void 0!==e?e:""}get_session_replay_url(e){if(!this.sessionManager)return""
var{sessionId:t,sessionStartTimestamp:n}=this.sessionManager.checkAndGetSessionAndWindowId(!0),i=this.requestRouter.endpointFor("ui","/project/".concat(this.config.token,"/replay/").concat(t))
if(null!=e&&e.withTimestamp&&n){var r,o=null!==(r=e.timestampLookBack)&&void 0!==r?r:10
if(!n)return i
var s=Math.max(Math.floor(((new Date).getTime()-n)/1e3)-o,0)
i+="?t=".concat(s)}return i}alias(e,t){return e===this.get_property(he)?(te.critical("Attempting to create alias for existing People user - aborting."),-2):this._requirePersonProcessing("posthog.alias")?(W(t)&&(t=this.get_distinct_id()),e!==t?(this._register_single(pe,e),this.capture("$create_alias",{alias:e,distinct_id:t})):(te.warn("alias matches current distinct_id - skipping api call."),this.identify(e),-1)):void 0}set_config(e){var t,n,i,r,o=h({},this.config)
q(e)&&(se(this.config,as(e)),null===(t=this.persistence)||void 0===t||t.update_config(this.config,o),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new En(h(h({},this.config),{},{persistence:"sessionStorage"})),pt.is_supported()&&"true"===pt.get("ph_debug")&&(this.config.debug=!0),this.config.debug&&(v.DEBUG=!0,te.info("set_config",{config:e,oldConfig:o,newConfig:h({},this.config)})),null===(n=this.sessionRecording)||void 0===n||n.startIfEnabledOrStop(),null===(i=this.autocapture)||void 0===i||i.startIfEnabled(),null===(r=this.heatmaps)||void 0===r||r.startIfEnabled(),this.surveys.loadIfEnabled(),this._sync_opt_out_with_persistence())}startSessionRecording(e){var t,n,i,r,o,s=!0===e,a={sampling:s||!(null==e||!e.sampling),linked_flag:s||!(null==e||!e.linked_flag),url_trigger:s||!(null==e||!e.url_trigger),event_trigger:s||!(null==e||!e.event_trigger)}
Object.values(a).some(Boolean)&&(null===(t=this.sessionManager)||void 0===t||t.checkAndGetSessionAndWindowId(),a.sampling&&(null===(n=this.sessionRecording)||void 0===n||n.overrideSampling()),a.linked_flag&&(null===(i=this.sessionRecording)||void 0===i||i.overrideLinkedFlag()),a.url_trigger&&(null===(r=this.sessionRecording)||void 0===r||r.overrideTrigger("url")),a.event_trigger&&(null===(o=this.sessionRecording)||void 0===o||o.overrideTrigger("event")))
this.set_config({disable_session_recording:!1})}stopSessionRecording(){this.set_config({disable_session_recording:!0})}sessionRecordingStarted(){var e
return!(null===(e=this.sessionRecording)||void 0===e||!e.started)}captureException(e,t){var n,i=new Error("PostHog syntheticException"),r=U(null===(n=I.__PosthogExtensions__)||void 0===n?void 0:n.parseErrorAsProperties)?I.__PosthogExtensions__.parseErrorAsProperties([e.message,void 0,void 0,void 0,e],{syntheticException:i}):h({$exception_level:"error",$exception_list:[{type:e.name,value:e.message,mechanism:{handled:!0,synthetic:!1}}]},t)
this.exceptions.sendExceptionEvent(r)}loadToolbar(e){return this.toolbar.loadToolbar(e)}get_property(e){var t
return null===(t=this.persistence)||void 0===t?void 0:t.props[e]}getSessionProperty(e){var t
return null===(t=this.sessionPersistence)||void 0===t?void 0:t.props[e]}toString(){var e,t=null!==(e=this.config.name)&&void 0!==e?e:rs
return t!==rs&&(t=rs+"."+t),t}_isIdentified(){var e,t
return"identified"===(null===(e=this.persistence)||void 0===e?void 0:e.get_property(Be))||"identified"===(null===(t=this.sessionPersistence)||void 0===t?void 0:t.get_property(Be))}_hasPersonProcessing(){var e,t,n,i
return!("never"===this.config.person_profiles||"identified_only"===this.config.person_profiles&&!this._isIdentified()&&G(this.getGroups())&&(null===(e=this.persistence)||void 0===e||null===(t=e.props)||void 0===t||!t[pe])&&(null===(n=this.persistence)||void 0===n||null===(i=n.props)||void 0===i||!i[ze]))}_shouldCapturePageleave(){return!0===this.config.capture_pageleave||"if_capture_pageview"===this.config.capture_pageleave&&this.config.capture_pageview}createPersonProfile(){this._hasPersonProcessing()||this._requirePersonProcessing("posthog.createPersonProfile")&&this.setPersonProperties({},{})}_requirePersonProcessing(e){return"never"===this.config.person_profiles?(te.error(e+' was called, but process_person is set to "never". This call will be ignored.'),!1):(this._register_single(ze,!0),!0)}_sync_opt_out_with_persistence(){var e,t,n,i,r=this.consent.isOptedOut(),o=this.config.opt_out_persistence_by_default,s=this.config.disable_persistence||r&&!!o;(null===(e=this.persistence)||void 0===e?void 0:e.disabled)!==s&&(null===(n=this.persistence)||void 0===n||n.set_disabled(s)),(null===(t=this.sessionPersistence)||void 0===t?void 0:t.disabled)!==s&&(null===(i=this.sessionPersistence)||void 0===i||i.set_disabled(s))}opt_in_capturing(e){var t
this.consent.optInOut(!0),this._sync_opt_out_with_persistence(),(W(null==e?void 0:e.captureEventName)||null!=e&&e.captureEventName)&&this.capture(null!==(t=null==e?void 0:e.captureEventName)&&void 0!==t?t:"$opt_in",null==e?void 0:e.captureProperties,{send_instantly:!0}),this.config.capture_pageview&&this._captureInitialPageview()}opt_out_capturing(){this.consent.optInOut(!1),this._sync_opt_out_with_persistence()}has_opted_in_capturing(){return this.consent.isOptedIn()}has_opted_out_capturing(){return this.consent.isOptedOut()}clear_opt_in_out_capturing(){this.consent.reset(),this._sync_opt_out_with_persistence()}_is_bot(){return S?Co(S,this.config.custom_blocked_useragents):void 0}_captureInitialPageview(){x&&!this._initialPageviewCaptured&&(this._initialPageviewCaptured=!0,this.capture("$pageview",{title:x.title},{send_instantly:!0}))}debug(e){!1===e?(null==m||m.console.log("You've disabled debug mode."),localStorage&&localStorage.removeItem("ph_debug"),this.set_config({debug:!1})):(null==m||m.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),localStorage&&localStorage.setItem("ph_debug","true"),this.set_config({debug:!0}))}_runBeforeSend(e){if(J(this.config.before_send))return e
var t=H(this.config.before_send)?this.config.before_send:[this.config.before_send],n=e
for(var i of t){if(n=i(n),J(n)){var r="Event '".concat(e.event,"' was rejected in beforeSend function")
return Z(e.event)?te.warn("".concat(r,". This can cause unexpected behavior.")):te.info(r),null}n.properties&&!G(n.properties)||te.warn("Event '".concat(e.event,"' has no properties after beforeSend function, this is likely an error."))}return n}}!function(e,t){for(var n=0;n<t.length;n++)e.prototype[t[n]]=ce(e.prototype[t[n]])}(cs,["identify"])
var us,ds=(us=ns[rs]=new cs,function(){function e(){e.done||(e.done=!0,os=!1,oe(ns,(function(e){e._dom_loaded()})))}null!=x&&x.addEventListener&&("complete"===x.readyState?e():x.addEventListener("DOMContentLoaded",e,!1)),m&&de(m,"load",e,!0)}(),us)
function fs(...e){console.log(...e)}function hs(e,t){ds.capture(e,t)}function ps(){"string"==typeof window.self&&(o(),window.self=window),function(){try{ds.init("phc_rlYc31x7Pvbc1XzLuePdrHh1JIFq4ClkniLjoqs0V1N",{advanced_disable_decide:!0,advanced_disable_feature_flags:!0,advanced_disable_feature_flags_on_first_load:!0,advanced_disable_toolbar_metrics:!0,api_host:"https://us.i.posthog.com",autocapture:!1,capture_pageview:!1,disable_compression:!1,disable_persistence:!0,disable_session_recording:!0,disable_surveys:!0,person_profiles:"identified_only"})}catch(e){fs(e)}}()}let gs=0,_s=0,vs=0,ms=0,bs=0,ys=0,ws=0
const ks=()=>Date.now(),Ss=()=>Math.floor(ks()/1e3)
function xs(){return gs||(gs=ks()),gs}function Es(){return _s||(_s=xs()-3e5),_s}function Cs(){return vs||(vs=xs()-1728e5),vs}function $s(){return ms||(ms=Math.floor(xs()/1e3)),ms}function Ts(){return bs||(bs=$s()-120),bs}function Ps(){return ys||(ys=$s()-86400),ys}function Ls(){return ws||(ws=$s()-604800),ws}function Is(e){return null===e}function Rs(e){return void 0===e}const Os=`${document.location.protocol}//${document.location.host}/`,Ms=window.HCS?.defines?.cdn,Fs=[{colour:"#ffffff",clas:"fshCommon"},{colour:"#0099ff",clas:"fshRare"},{colour:"#cc00ff",clas:"fshUnique"},{colour:"#ffff33",clas:"fshLegendary"},{colour:"#cc0033",clas:"fshSuper"},{colour:"#6633ff",clas:"fshCrystal"},{colour:"#009900",clas:"fshEpic"}],As=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth"],Ns=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],js=/ETA:\s*(?<h>\d+)h\s*(?<m>\d+)m\s*(?<s>\d+)s/,Ds=/fetchitem.php\?item_id=(?<itemId>\d+)&inv_id=(?<invId>[-\d]+)&t=(?<t>\d+)&p=(?<p>\d+)(?:&vcode=(?<vcode>[a-z0-9]+))?/i,Bs=/guild_id=(?<guildId>\d+)/,Hs=/<td>Last Activity:<\/td><td>(?<d>\d+)d (?<h>\d+)h (?<m>\d+)m (?<s>\d+)s<\/td>/,Us=/player_id=(?<playerId>\d+)/,qs=/Stamina:<\/td><td>(?<stam>\d{1,12}) \/ (?<max>\d{1,12})<\/td>/,Gs=/VL:.+?(?<vl>\d+)/,Ws=.2,zs="joinallgroupsundersize",Vs="index.php",Qs="?cmd=",Js=`${Vs}${Qs}`,Ks="&subcmd=",Xs="&target_username=",Ys=`${Js}auctionhouse`,Zs=`${Ys}&search=`,ea=`${Js}log`,ta=`${Js}ignore${Ks}add&ignore_username=`,na=`${Js}profile`,ia=`${na}&player_id=`,ra=`${na}${Ks}dropitems`,oa=`${Js}trade&target_player=`,sa=`${Js}trade${Ks}createsecure${Xs}`,aa=`${Js}arena${Ks}`,la=`${Vs}${`${Qs}notepad&blank=1${Ks}`}`,ca=`${la}auctionsearch`,ua=`${Js}points`,da=`${Js}guild${Ks}`,fa=`${da}log`,ha=`${da}scouttower`,pa=`${da}groups&subcmd2=`,ga=`${da}inventory&subcmd2=report&user=`,_a=`${da}view&guild_id=`,va=`${pa}joinall`,ma=`${pa}${zs}`,ba=`${Js}world`,ya=`${Js}findplayer`,wa=`${ya}&search_show_first=1&search_username=`,ka=`${Js}blacksmith`,Sa=`${Js}quickbuff`,xa=`${Js}composing`,Ea=`${Js}attackplayer${Xs}`,Ca=`${Js}${Ks}viewupdatearchive`,$a=`${Js}${Ks}viewarchive`,Ta=`${Js}bounty`,Pa=`${Js}inventing${Ks}viewrecipe&recipe_id=`,La=`https://guide.fallensword.com/${Js}`,Ia="after-update.actionlist",Ra="buffs.player",Oa="update.player",Ma="level.stats-player",Fa="gold.stats-player",Aa="prompt.worldDialogShop",Na="keydown.controls",ja="update.realm",Da="-success.action-response",Ba=`-1${Da}`,Ha=`1${Da}`,Ua=`2${Da}`,qa=`9${Da}`,Ga=`5${Da}`,Wa=`25${Da}`,za=1,Va=2,Qa=16,Ja=128,Ka=256,Xa="needToCompose",Ya="lastComposeCheck",Za="characterVirtualLevel",el="enableGuildActivityTracker",tl="lastLadderReset",nl="form",il="table",rl="td",ol="fsh_buffLog",sl="stat-level",al="stat-defense",ll="stat-attack",cl="stat-damage",ul="stat-armor",dl="stat-hp",fl="stat-vl",hl="GM_",pl=["Common","Rare","Unique","Legendary","Super Elite","Crystalline"],gl=["Helmet","Armor","Gloves","Boots","Weapon","Shield","Ring","Amulet","Rune","Quest Item","Potion","Component","Resource","Recipe","Container","Composed","Frag Stash"],_l=`${Ms}ui/world/action_spinner.gif`,vl=".fa-envelope",ml='a[href*="&player_id="]',bl=.002,yl=[[54,"ca_default"],[101,"sc_default"],[60,"nv_default"],[98,"barricade_default"],[179,"relentless_default"],[181,"aegis_shield_default"]],wl='input[name="blockedSkillList[]"]'
var kl={lastScavPage:"",lastActiveQuestPage:"",lastNormalActiveQuestPage:"",lastNormalCompletedQuestPage:"",lastNormalNotStartedQuestPage:"",lastSeasonalActiveQuestPage:"",lastSeasonalCompletedQuestPage:"",lastSeasonalNotStartedQuestPage:"",enableLogColoring:!1,enableChatParsing:!1,enableCreatureColoring:!1,showCombatLog:!1,showCreatureInfo:!1,keepLogs:!1,showExtraLinks:!1,huntingBuffs:"Doubler,Librarian,Adept Learner,Merchant,Treasure Hunter,Animal Magnetism,Conserve",huntingBuffsName:"default",huntingBuffs2:"Deflect",huntingBuffs2Name:"PvP",huntingBuffs3:"Super Elite Slayer",huntingBuffs3Name:"SE",showHuntingBuffs:!1,moveFSBox:!1,moveDailyQuest:!1,guildSelf:"",guildSelfMessage:"Member of your own guild!",guildFrnd:"",guildFrndMessage:"Do not attack - Guild is friendly!",guildPast:"",guildPastMessage:"Do not attack - You've been in that guild once!",guildEnmy:"",guildEnmyMessage:"Enemy guild. Attack at will!",goldRecipient:"",goldAmount:"",sendGoldonWorld:!1,hideQuests:!1,hideQuestNames:"",hideRecipes:!1,hideRecipeNames:"",enableGuildInfoWidgets:!1,enableOnlineAlliesWidgets:!1,guildOnlineRefreshTime:300,hideGuildInfoSecureTrade:!1,hideGuildInfoTrade:!1,hideGuildInfoMessage:!1,hideGuildInfoBuff:!1,buyBuffsGreeting:"Hello {playername}, can I buy {buffs} for {cost} please?",renderSelfBio:!1,bioEditLines:10,renderOtherBios:!1,playNewMessageSound:!1,showSpeakerOnWorld:!1,defaultMessageSound:"https://fallenswordhelper.github.io/fallenswordhelper/audio/sms-alert-2-daniel_simon.wav",highlightPlayersNearMyLvl:!1,highlightGvGPlayersNearMyLvl:!1,detailedConflictInfo:!1,gameHelpLink:!0,enableAllyOnlineList:!1,enableEnemyOnlineList:!1,allyEnemyOnlineRefreshTime:300,moveGuildList:!1,moveOnlineAlliesList:!1,hideMatchesForCompletedMoves:!1,doNotKillList:"",enableBioCompressor:!1,currentGoldSentTotal:0,keepBuffLog:!1,buffLog:"",enableActiveBountyList:!1,bountyListRefreshTime:300,enableWantedList:!1,wantedNames:"",wantedGuildMembers:!1,bwNeedsRefresh:!0,fsboxlog:!1,fsboxcontent:"",itemRecipient:"",quickLinks:"[]",minGroupLevel:1,combatEvaluatorBias:0,huntingMode:!1,messageStack:!1,enabledHuntingMode:"1",hideRelicOffline:!1,enterForSendMessage:!1,trackKillStreak:!1,storeLastQuestPage:!1,addAttackLinkToLog:!1,showStatBonusTotal:!1,newGuildLogHistoryPages:3,useNewGuildLog:!1,enhanceChatTextEntry:!1,ajaxifyRankControls:!1,enableMaxGroupSizeToJoin:!1,maxGroupSizeToJoin:11,enableTempleAlert:!1,enableUpgradeAlert:!1,enableComposingAlert:!1,autoFillMinBidPrice:!1,showPvPSummaryInLog:!1,enableQuickDrink:!1,enhanceOnlineDots:!1,hideBuffSelected:!1,hideHelperMenu:!1,keepHelperMenuOnScreen:!0,draggableHelperMenu:!1,quickLinksTopPx:22,quickLinksLeftPx:0,draggableQuickLinks:!1,showNextQuestSteps:!0,showRecallMessages:!0,showRelicMessages:!0,showMercenaryMessages:!0,showGroupCombatMessages:!0,showDonationMessages:!0,showRankingMessages:!0,showGvGMessages:!0,showTaggingMessages:!0,showTitanMessages:!0,showQuickDropLinks:!1,onlinePlayerMinLvl:1,onlinePlayerMaxLvl:9999,arenaMinLvl:1,arenaMaxLvl:9999,showMonsterLog:!1,lastTempleCheck:0,needToPray:!0,lastChatCheck:"0",lastGuildLogCheck:"0",lastOutBoxCheck:"0",lastPlayerLogCheck:"0",showAdmin:!1,alliestotal:0,enemiestotal:0,footprints:!1,hideNonPlayerGuildLogMessages:!1,listOfAllies:"",listOfEnemies:"",contactList:"",lastUpgradeCheck:0,needToDoUpgrade:!1,characterVirtualLevel:0,guildLogoControl:!1,statisticsControl:!1,guildStructureControl:!1,lastMembrListCheck:0,showQuickSendLinks:!1,needToCompose:!1,lastComposeCheck:0,lastOnlineCheck:0,bountyList:"",wantedList:"",lowestLevelInTop250:0,quickMsg:'["Thank you very much ^_^","Happy hunting, {playername}"]',sendClasses:'["Composed Pots", "13699"], ["Amber", "5611"], ["Amethyst Weed", "9145"], ["Blood Bloom", "5563"], ["Cerulean Rose", "9156"], ["Coleoptera Body", "9287"], ["Dark Shade", "5564"], ["Deathbloom", "9140"], ["Deathly Mold", "9153"], ["Greenskin Fungus", "9148"], ["Heffle", "5565"], ["Jademare", "5566"], ["Ruby Thistle", "9143"], ["Toad Corpse","9288"], ["Trinettle", "5567"], ["Viridian Vine", "9151"], ["Mortar & Pestle", "9157"], ["Beetle Juice", "9158"]',quickSearchList:'[{"category":"Plants","searchname":"Amber","nickname":""},{"category":"Plants","searchname":"Blood Bloom","nickname":""},{"category":"Plants","searchname":"Jademare","nickname":""},{"category":"Plants","searchname":"Dark Shade","nickname":""},{"category":"Plants","searchname":"Trinettle","nickname":""},{"category":"Plants","searchname":"Heffle Wart","nickname":""},{"category":"Potions","searchname":"Sludge Brew","nickname":"DC 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Black Death","nickname":"DC 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Aid","nickname":"Assist","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Doubling","nickname":"DB 450","displayOnAH":true},{"category":"Potions","searchname":"Potion of Acceleration","nickname":"DB 500","displayOnAH":true},{"category":"Potions","searchname":"Potion of Lesser Death Dealer","nickname":"DD","displayOnAH":true},{"category":"Potions","searchname":"Runic Potion","nickname":"FI 250","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Bookworm","nickname":"Lib 225","displayOnAH":true},{"category":"Potions","searchname":"Potion of Truth","nickname":"EW 1k","displayOnAH":true},{"category":"Potions","searchname":"Dull Edge","nickname":"DE 25","displayOnAH":true},{"category":"Potions","searchname":"Notched Blade","nickname":"DE 80","displayOnAH":true},{"category":"Potions","searchname":"Potion of Death","nickname":"DW 125","displayOnAH":true},{"category":"Potions","searchname":"Potion of Decay","nickname":"WI 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fatality","nickname":"WI 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Annihilation","nickname":"DW 150","displayOnAH":true},{"category":"Potions","searchname":"Potion of the Wise","nickname":"Lib 200","displayOnAH":true},{"category":"Potions","searchname":"Potion of Shattering","nickname":"SA","displayOnAH":true},{"category":"Potions","searchname":"Dragons Blood Potion","nickname":"ZK 200","displayOnAH":true},{"category":"Potions","searchname":"Berserkers Potion","nickname":"ZK 300","displayOnAH":true},{"category":"Potions","searchname":"Potion of Fury","nickname":"ZK 350","displayOnAH":true},{"category":"Potions","searchname":"Potion of Supreme Luck","nickname":"FI 1k","displayOnAH":true}]',arenaMoves:"[]",arenaMatches:"[]",CombatLog:"",hideChampionsGroup:!1,hideElitesGroup:!1,hideSEGroup:!1,hideTitanGroup:!1,hideLegendaryGroup:!1,disableDeactivatePrompts:!1,moveComposingButtons:!1,expandMenuOnKeyPress:!1,disableBreakdownPrompts:!1,collapseNewsArchive:!1,collapseHallPosts:!1,lastmyGuildLogCheck:0,hideSubLvlCreature:!1,hidePlayerActions:!1,extraProfile:"",textToSearchFor:"",lastLadderReset:0,disableQuickWearPrompts:!1,enableGuildActivityTracker:!1,enableSeTracker:!1,showTitanInfo:!1,highlightPvpProtection:!1,showBuffInfo:!1,enableHistoryCompressor:!1,enableStamBars:!1,appBad:[0,!1],ajaxifyDestroy:!1,statBarLinks:!1,staminaCalculator:!1,levelUpCalculator:!1,resizeQuickBuff:!1,joinAllLink:!1,pageTwoLinks:!1,addUfsgLinks:!1,trackLadderReset:!1,addServerNode:!1,addScoutTowerLink:!1,storeLastScavPage:!1,recipeManagerLink:!1,medalGuideLink:!1,inventoryManagerLink:!1,buffLogLink:!1,combatLogLink:!1,creatureLogLink:!1,quickLinksLink:!1,auctionSearchLink:!1,onlinePlayersLink:!1,findOtherLink:!1,findBuffsLink:!1,guildInventoryLink:!1,newGuildLogLink:!1,topRatedLink:!1,enableMessageTemplates:!1,wrapGuildChat:!1,colorPlayerNames:!1,addIgnoreLink:!1,changeButtonLabels:!1,fastDebuff:!1,countAllyEnemy:!1,componentWidgets:!1,quickWearLink:!1,selectAllLink:!1,nekidButton:!1,ajaxifyProfileSections:!1,injectBuffGuide:!1,statisticsWrap:!1,showGuildRelationship:!1,showQuickButtons:!1,showBuffLevel:!1,enableItemColoring:!1,checkAllOfType:!1,enableFolderFilter:!1,moveXmasBox:!1,lastPrivateMsgCheck:0,lastLeaderCheck:0,privateMsgButtons:!1,optInOnLadderPage:!1,betaOptIn:!1,showBuffLinks:!1,disableDestroyPrompts:!1,blockedSkillLists:"[]",ajaxifyMoveRecipe:!1,selectST:!1,selectMain:!0,disableQuickExtractPrompts:!1,qbSortBuffsAlphabetically:!1,groupCombatItems:!1,footprintColor:"#ee9252",compactRanks:!1,lastModalGuildLogCheck:0}
const Sl=[["S]",e=>e.slice(2)],["N]",e=>parseInt(e.slice(2),10)],["B]",e=>"true"===e.slice(2)]]
function xl(e,t){const n=window.localStorage.getItem(hl+e)
return Is(n)||Rs(n)?t:function(e){const t=Sl.find((t=>e.startsWith(t[0])))
return t?t[1](e):e}(n)}function El(e){return xl(e,kl[e])}function Cl(e){return"boolean"==typeof e}function $l(e){return"string"==typeof e}function Tl(e,t,n){window.Modernizr?.localstorage&&window.localStorage.setItem(hl+e,t+n)}const Pl=[[$l,(e,t)=>{Tl(e,"S]",t)}],[e=>"number"==typeof e,(e,t)=>{t.toString().indexOf(".")<0&&Tl(e,"N]",t)}],[Cl,(e,t)=>{Tl(e,"B]",t)}]]
function Ll(e,t){const n=Pl.find((e=>e[0](t)))
n&&n[1](e,t)}function Il(e){const t=`screenview__${e}`,n=El(t)
Number.isFinite(n)&&n>Ps()||(hs(t),Ll(t,$s()))}function Rl(e){return"function"==typeof e}function Ol(e){return"object"==typeof e}function Ml(e,t){try{return JSON.parse(e,t)}catch(e){}}function Fl(e,t){return t?t.querySelector(e):document.querySelector(e)}function Al(e){const t=Fl("link",document.body)
return new Promise((n=>{const i=document.createElement("link")
i.type="text/css",i.rel="stylesheet",i.onload=()=>{n()},i.href=e,t?t.before(i):document.body.append(i)}))}var Nl="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function jl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dl,Bl={exports:{}}
var Hl=(Dl||(Dl=1,Bl.exports=function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==Nl?Nl:"undefined"!=typeof self?self:{}
function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){var t=e.default
if("function"==typeof t){var n=function(){return t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),n}var i={},r={},o={},s={},a="<unknown>"
function l(e){return e.split("\n").reduce((function(e,t){var n=d(t)||h(t)||_(t)||y(t)||m(t)
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
return n}return[]}function _(e,t){return o(this,void 0,void 0,(function(){var n,i,r,o
return s(this,(function(s){switch(s.label){case 0:if(n=[],!t||!e||!e.length)return[2,n]
i=0,s.label=1
case 1:return e.length?(r=e.splice(0)[i],[4,t(r.file)]):[3,3]
case 2:return o=s.sent(),n[i]=N(o,r.number),i++,[3,1]
case 3:return[2,n]}}))}))}function v(e,t){for(var n=[],i=!0,r=0,o=t.length;r<o;r++){var s=(0,t[r])(e)
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
e[t]=n(i),e[t].__hb_original=i}catch(e){}}t.merge=l,t.mergeNotice=c,t.objectIsEmpty=u,t.objectIsExtensible=d,t.makeBacktrace=f,t.DEFAULT_BACKTRACE_SHIFT=3,t.calculateBacktraceShift=p,t.getCauses=g,t.getSourceForBacktrace=_,t.runBeforeNotifyHandlers=v,t.runAfterNotifyHandlers=m,t.shallowClone=b,t.sanitize=y,t.logger=k,t.makeNotice=S,t.isErrorObject=x,t.instrument=E
var C=!1,$=[]
function T(e,t){e&&e.console&&t&&($.push(t),C||(C=!0,["debug","info","warn","error","log"].forEach((function(t){E(e.console,t,(function(n){return function(){var i=Array.prototype.slice.call(arguments)
$.forEach((function(e){try{e(t,i)}catch(e){}})),"function"==typeof n&&Function.prototype.apply.call(n,e.console,arguments)}}))}))))}function P(e,t){var n=e.trim().replace(/\/$/,"")
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
"string"==typeof a&&(o[s]=a)}return o}function j(e){return void 0!==e.async}function D(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:window}t.instrumentConsole=T,t.endpoint=P,t.generateStackTrace=L,t.filter=I,t.filterUrl=M,t.formatCGIData=F,t.clone=A,t.isBrowserConfig=j,t.globalThisOrWindow=D
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
var C=s,$=function(){function e(e,t){this.contents=e,this.breadcrumbsLimit=t}return e.create=function(t,n){return new e(t,n)},e.prototype.available=function(){return!0},e.prototype.getContents=function(e){var t=e?this.contents[e]:this.contents
return JSON.parse(JSON.stringify(t))},e.prototype.setContext=function(e){this.contents.context=(0,C.merge)(this.contents.context,e||{})},e.prototype.addBreadcrumb=function(e){this.contents.breadcrumbs.length==this.breadcrumbsLimit&&this.contents.breadcrumbs.shift(),this.contents.breadcrumbs.push(e)},e.prototype.clear=function(){this.contents.context={},this.contents.breadcrumbs=[]},e.prototype.run=function(e){return e()},e}()
E.GlobalStore=$
var T={}
class P{static parse(e){return e.trim().split("\n").map((e=>JSON.parse(e)))}static stringify(e){return e.map((e=>JSON.stringify(e))).join("\n")}}var L=Object.freeze({__proto__:null,NdJson:P}),I=n(L),R={}
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
Object.defineProperty(T,"__esModule",{value:!0}),T.ThrottledEventsLogger=void 0
var A=I,N=s,j=R,D=function(){function e(e,t){this.config=e,this.transport=t,this.queue=[],this.isProcessing=!1,this.config=O(O({},j.CONFIG),e),this.logger=this.originalLogger()}return e.prototype.configure=function(e){for(var t in e)this.config[t]=e[t]},e.prototype.log=function(e){this.queue.push(e),this.isProcessing||this.processQueue()},e.prototype.processQueue=function(){var e=this
if(0!==this.queue.length&&!this.isProcessing){this.isProcessing=!0
var t=this.queue.slice()
this.queue=[]
var n=A.NdJson.stringify(t)
this.makeHttpRequest(n).then((function(){setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)})).catch((function(t){e.logger.error("[Honeybadger] Error making HTTP request:",t),setTimeout((function(){e.isProcessing=!1,e.processQueue()}),50)}))}},e.prototype.makeHttpRequest=function(e){return M(this,void 0,void 0,(function(){var t=this
return F(this,(function(n){return[2,this.transport.send({headers:{"X-API-Key":this.config.apiKey,"Content-Type":"application/json"},method:"POST",endpoint:(0,N.endpoint)(this.config.endpoint,"/v1/events"),maxObjectDepth:this.config.maxObjectDepth,logger:this.logger},e).then((function(){t.config.debug&&t.logger.debug("[Honeybadger] Events sent successfully")})).catch((function(e){t.logger.error("[Honeybadger] Error sending events: ".concat(e.message))}))]}))}))},e.prototype.originalLogger=function(){var e,t,n,i,r
return{log:null!==(e=console.log.__hb_original)&&void 0!==e?e:console.log,info:null!==(t=console.info.__hb_original)&&void 0!==t?t:console.info,debug:null!==(n=console.debug.__hb_original)&&void 0!==n?n:console.debug,warn:null!==(i=console.warn.__hb_original)&&void 0!==i?i:console.warn,error:null!==(r=console.error.__hb_original)&&void 0!==r?r:console.error}},e}()
T.ThrottledEventsLogger=D
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
Object.defineProperty(x,"__esModule",{value:!0}),x.Client=void 0
var q=s,G=E,W=T,z=R,V=/,|\s+/,Q=/\S/,J=function(){function e(e,t){void 0===e&&(e={}),this.__pluginsLoaded=!1,this.__store=null,this.__beforeNotifyHandlers=[],this.__afterNotifyHandlers=[],this.__notifier={name:"@honeybadger-io/core",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/core",version:"6.10.1"},this.config=B(B({},z.CONFIG),e),this.__initStore(),this.__transport=t,this.__eventsLogger=new W.ThrottledEventsLogger(this.config,this.__transport),this.logger=(0,q.logger)(this)}return e.prototype.getVersion=function(){return this.__notifier.version},e.prototype.getNotifier=function(){return this.__notifier},e.prototype.setNotifier=function(e){this.__notifier=e},e.prototype.configure=function(e){for(var t in void 0===e&&(e={}),e)this.config[t]=e[t]
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
var de,fe=r,he=fe.Util.instrument,pe=fe.Util.makeNotice,ge=fe.Util.globalThisOrWindow,_e=0
function ve(){_e+=1,clearTimeout(de),de=setTimeout((function(){_e=0}))}function me(e){return void 0===e&&(e=ge()),{load:function(t){he(e,"onerror",(function(n){var i=function(e,n,i,r,o){if(t.logger.debug("window.onerror callback invoked",arguments),_e>0)return t.logger.debug("Ignoring window.onerror (error likely reported earlier)",arguments),void(_e-=1)
if(0===i&&/Script error\.?/.test(e))t.config.enableUncaught&&t.logger.warn("Ignoring cross-domain script error: enable CORS to track these types of errors",arguments)
else{var s=pe(o)
s.name||(s.name="window.onerror"),s.message||(s.message=e),s.stack||(s.stack=[s.message,"\n    at ? (",n||"unknown",":",i||0,":",r||0,")"].join("")),t.addBreadcrumb("window.onerror"!==s.name&&s.name?"window.onerror: ".concat(s.name):"window.onerror",{category:"error",metadata:{name:s.name,message:s.message,stack:s.stack}}),t.config.enableUncaught&&t.notify(s)}}
return function(t,r,o,s,a){return i(t,r,o,s,a),"function"==typeof n&&n.apply(e,arguments)}}))}}}ue.ignoreNextOnError=ve,ue.onError=me
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
var Ee=r,Ce=X,$e=Ee.Util.sanitize,Te=Ee.Util.instrument,Pe=Ee.Util.instrumentConsole,Le=Ee.Util.globalThisOrWindow
function Ie(e){return void 0===e&&(e=Le()),{load:function(t){function n(e){return!0===t.config.breadcrumbsEnabled||(e?!0===t.config.breadcrumbsEnabled[e]:!1!==t.config.breadcrumbsEnabled)}!function(){function i(e){return Array.isArray(e)?e.map((function(e){try{return String(e)}catch(e){return"[unknown]"}})).join(" "):""}n("console")&&Pe(e,(function(e,n){var r=i(n),o={category:"log",metadata:{level:e,arguments:$e(n,3)}}
t.addBreadcrumb(r,o)}))}(),n("dom")&&"function"==typeof e.addEventListener&&e.addEventListener("click",(function(e){var n,i,r
try{n=(0,Ce.stringNameOfElement)(e.target),i=(0,Ce.stringSelectorOfElement)(e.target),r=(0,Ce.stringTextOfElement)(e.target)}catch(e){n="UI Click",i="[unknown]",r="[unknown]"}0!==n.length&&t.addBreadcrumb(n,{category:"ui.click",metadata:{selector:i,text:r,event:e}})}),!!e.location),n("network")&&"undefined"!=typeof XMLHttpRequest&&(Te(XMLHttpRequest.prototype,"open",(function(e){return function(){var t=this,n=arguments[1],i="string"==typeof n?n:String(n),r="string"==typeof arguments[0]?arguments[0].toUpperCase():arguments[0],o="".concat(r," ").concat((0,Ce.localURLPathname)(i))
this.__hb_xhr={type:"xhr",method:r,url:i,message:o},"function"==typeof e&&e.apply(t,arguments)}})),Te(XMLHttpRequest.prototype,"send",(function(e){return function(){var n=this
function i(){if(4===n.readyState){var e=void 0
n.__hb_xhr&&(n.__hb_xhr.status_code=n.status,e=n.__hb_xhr.message,delete n.__hb_xhr.message),t.addBreadcrumb(e||"XMLHttpRequest",{category:"request",metadata:n.__hb_xhr})}}"onreadystatechange"in n&&"function"==typeof n.onreadystatechange?Te(n,"onreadystatechange",(function(e){return function(){i(),"function"==typeof e&&e.apply(this,arguments)}})):n.onreadystatechange=i,"function"==typeof e&&e.apply(n,arguments)}}))),n("network")&&(0,Ce.nativeFetch)()&&Te(e,"fetch",(function(n){return function(){var i,r=arguments[0],o="GET"
"string"==typeof r?i=r:"Request"in e&&r instanceof Request?(i=r.url,r.method&&(o=r.method)):i=String(r),arguments[1]&&arguments[1].method&&(o=arguments[1].method),"string"==typeof o&&(o=o.toUpperCase())
var s="".concat(o," ").concat("undefined"==typeof document?i:(0,Ce.localURLPathname)(i)),a={type:"fetch",method:o,url:i}
return n.apply(this,arguments).then((function(e){return a.status_code=e.status,t.addBreadcrumb(s,{category:"request",metadata:a}),e})).catch((function(e){throw t.addBreadcrumb("fetch error",{category:"error",metadata:a}),e}))}})),function(){if(n("navigation")&&null!=e.location){var i=e.location.href
"function"==typeof addEventListener&&addEventListener("popstate",(function(t){r(i,e.location.href)})),void 0!==e.history&&(Te(e.history,"pushState",o),Te(e.history,"replaceState",o))}function r(e,n){i=n,t.addBreadcrumb("Page changed",{category:"navigation",metadata:{from:e,to:n}})}function o(e){return function(){var t=arguments.length>2?arguments[2]:void 0
return t&&r(i,String(t)),e.apply(this,arguments)}}}()}}}xe.default=Ie
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
var c=r,u=X,d=ue,f=l(be),h=l(xe),p=l(Re),g=l(Ne),_=Ue,v=Ke,m=c.Util.merge,b=c.Util.filter,y=c.Util.objectIsExtensible,w=c.Util.globalThisOrWindow,k=function(){var e=w(),t=""
return null!=e.location&&(t=e.location.protocol+"//"+e.location.host),t},S=function(e){var t=e.split(".").slice(0,2).join(".")
return"https://js.honeybadger.io/v".concat(t,"/honeybadger-feedback-form.js")}
t.getUserFeedbackScriptUrl=S
var x=function(e){function n(t){void 0===t&&(t={})
var n=e.call(this,o({userFeedbackEndpoint:"https://api.honeybadger.io/v2/feedback",async:!0,maxErrors:null,projectRoot:k()},t),new _.BrowserTransport({"User-Agent":C()}))||this
return n.__errorsSent=0,n.__lastWrapErr=void 0,n.__lastNoticeId=void 0,n.__beforeNotifyHandlers=[function(e){return n.__exceedsMaxErrors()?(n.logger.debug("Dropping notice: max errors exceeded",e),!1):(e&&!e.url&&"undefined"!=typeof document&&(e.url=document.URL),n.__incrementErrorsCount(),!0)}],n.__afterNotifyHandlers=[function(e,t){t&&(n.__lastNoticeId=t.id)}],n}return i(n,e),n.prototype.configure=function(t){return void 0===t&&(t={}),e.prototype.configure.call(this,t)},n.prototype.resetMaxErrors=function(){return this.__errorsSent=0},n.prototype.factory=function(e){var t=new n(e)
return t.setNotifier(this.getNotifier()),t},n.prototype.checkIn=function(e){throw new Error("Honeybadger.checkIn() is not supported on the browser")},n.prototype.showUserFeedbackForm=function(e){return void 0===e&&(e={}),s(this,void 0,void 0,(function(){return a(this,(function(t){return new v.BrowserFeedbackForm(this.config,this.logger,this.getUserFeedbackSubmitUrl()).show(this.__lastNoticeId,e),[2]}))}))},n.prototype.getUserFeedbackSubmitUrl=function(){return(0,t.getUserFeedbackScriptUrl)(this.getVersion())},n.prototype.__buildPayload=function(t){var n,i={HTTP_USER_AGENT:void 0,HTTP_REFERER:void 0,HTTP_COOKIE:void 0}
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
throw i.__lastWrapErr=e,(0,d.ignoreNextOnError)(),i.addBreadcrumb(t.component?"".concat(t.component,": ").concat(e.name):e.name,{category:"error",metadata:{message:e.message,name:e.name,stack:e.stack}}),i.config.enableUncaught&&i.notify(e),e}}}return n.___hb.___hb=n.___hb,n.___hb}catch(e){return n}},n.prototype.__incrementErrorsCount=function(){return this.__errorsSent++},n.prototype.__exceedsMaxErrors=function(){return this.config.maxErrors&&this.__errorsSent>=this.config.maxErrors},n}(c.Client),E={name:"@honeybadger-io/js",url:"https://github.com/honeybadger-io/honeybadger-js/tree/master/packages/js",version:"6.10.1"},C=function(){return"undefined"!=typeof navigator?"Honeybadger JS Browser Client ".concat(E.version,"; ").concat(navigator.userAgent):"Honeybadger JS Browser Client ".concat(E.version,"; n/a; n/a")},$=new x({__plugins:[(0,d.onError)(),(0,f.default)(),(0,p.default)(),(0,g.default)(),(0,h.default)(),c.Plugins.events()]})
$.setNotifier(E)
var T=r
Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return T.Types}}),t.default=$}(i)
var et=t(i)
return et}()),Bl.exports),Ul=jl(Hl)
const ql=["(reading'$$')","attackplayer.min.js","Auction-House-Monitor.user.js","Discord-Message-Checks-for-Updates.user.js","dynamically imported module","Fallen-Sword-Champion-and-Super-Elite-Alert.user.js","Fallen-Sword-Message-Alert.user.js","Fallen-Sword-Super-Elite-Notifier.user.js","Fallen-Sword-Win%252FLoss-Checker.user.js","Fallen-Sword-Win%252FLoss-Checker-with-Buffs-and-Buff-Levels.user.js","Fallensword-GvG-Target-Checker-with-Button-and-Buff-Check.user.js","Fetch-Auction-and-Send-to-Discord.user.js","fs.min.js","GVG-and-Relics-Notifications.user.js","GvG-Initiate-Enhanced.user.js","GvG-List-v2.user.js","GVG%252FRelics-Discord.user.js","GVG%252FRelics-Notifications.user.js","hcsBar","index.php?cmd=auctionhouse&subcmd=quickcreate","index.php?cmd=composing&subcmd=breakdown","index.php?cmd=trade&target_player=","layerClick","New-Userscript.user.js","openuserjs.org","Permission denied to access object","play method is not allowed","Quick-Kill.user.js","se-searcher-v2-draft.user.js","Superelite-searcher.user.js","Titan-Quick-Kill.user.js","UFSG-dodatki.user.js","UnhandledPromiseRejectionWarning: 404","world.min.js"],Gl=e=>ql.some((t=>e.includes(t)))
function Wl(e){if(Gl(e.message)||Gl(e.stack))return!1}function zl(){!function(){Ul.configure({apiKey:"hbp_qQyOzugJoUNgE5xn8tHwTjvFuTXcB91ThqhP",environment:"production",maxErrors:20,revision:"15.24.143"})
const e=o()
e&&Ul.setContext({user_id:e}),Ul.afterNotify((e=>{if(e)return fs(`Honeybadger notification failed: ${e}`)})),Ul.beforeNotify(Wl)}()}var Vl={}
function Ql(e){return Array.isArray(e)}function Jl(e,t,n,i){e instanceof EventTarget&&e.addEventListener(t,n,i)}function Kl(e){El("betaOptIn")&&fs("sendException",e),Ul.notify(e,"sendException")}function Xl(e,t){return e||t}const Yl=[null]
function Zl(e,t){return Yl[e]&&Yl[e].priority<Yl[t].priority}function ec(e,t){const n=Yl[e]
Yl[e]=Yl[t],Yl[t]=n}function tc(e,t){return e?2*t:2*t+1}function nc(){if(1===Yl.length)return
const e=Yl[1].data,t=Yl.pop()
return Yl.length>1&&(Yl[1]=t,function(e){let t=e
for(;2*t<Yl.length;){const e=tc(!Zl(2*t+1,2*t),t)
if(Zl(t,e))break
ec(t,e),t=e}}(1)),e}function ic(e,t){!function(e){let t=e
for(;t>1;){const e=t>>1
if(!Zl(t,e))break
ec(t,e),t=e}}(Yl.push({data:e,priority:t})-1)}let rc=!0
const oc="fshMessage"
let sc=0
function ac(){Yl.length-1==0?rc=!0:(rc=!1,window.postMessage(oc,window.location.origin))}function lc(){const e=nc()
Rl(e)?e():function(e){Rs(e)||Kl(`pop() was not a function (${typeof e})`)}(e)}function cc(e){const t=e.data
e.origin===window.location.origin&&t===oc&&function(){try{lc()}catch(e){Ul.notify(e,"taskFailure")}finally{ac()}}()}function uc(e,t,n,i){if(Rl(t)){sc||(Jl(window,"message",cc),sc=!0)
const r=Xl(i,window),o=Xl(n,[])
ic(t.bind(r,...o),e),rc&&ac()}}function dc(e,t){return new URLSearchParams(e).get(t)}function fc(e){try{return dc(decodeURIComponent(window.location.search),e)}catch(e){return fs(e),""}}function hc(){}const pc=e=>e
function gc(e,t){for(const n in t)e[n]=t[n]
return e}function _c(e){return e()}function vc(){return Object.create(null)}function mc(e){e.forEach(_c)}function bc(e){return"function"==typeof e}function yc(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let wc
function kc(e,t){return e===t||(wc||(wc=document.createElement("a")),wc.href=t,e===wc.href)}function Sc(e,...t){if(null==e){for(const e of t)e(void 0)
return hc}const n=e.subscribe(...t)
return n.unsubscribe?()=>n.unsubscribe():n}function xc(e){let t
return Sc(e,(e=>t=e))(),t}function Ec(e,t,n){e.$$.on_destroy.push(Sc(t,n))}function Cc(e,t,n,i){if(e){const r=$c(e,t,n,i)
return e[0](r)}}function $c(e,t,n,i){return e[1]&&i?gc(n.ctx.slice(),e[1](i(t))):n.ctx}function Tc(e,t,n,i){if(e[2]&&i){const r=e[2](i(n))
if(void 0===t.dirty)return r
if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length)
for(let i=0;i<n;i+=1)e[i]=t.dirty[i]|r[i]
return e}return t.dirty|r}return t.dirty}function Pc(e,t,n,i,r,o){if(r){const s=$c(t,n,i,o)
e.p(s,r)}}function Lc(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32
for(let e=0;e<n;e++)t[e]=-1
return t}return-1}function Ic(e){const t={}
for(const n in e)t[n]=!0
return t}function Rc(e){let t=!1
return function(...n){t||(t=!0,e.call(this,...n))}}function Oc(e){return null==e?"":e}function Mc(e){return e&&bc(e.destroy)?e.destroy:hc}function Fc(e){const t="string"==typeof e&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/)
return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const Ac="undefined"!=typeof window
let Nc=Ac?()=>window.performance.now():()=>Date.now(),jc=Ac?e=>requestAnimationFrame(e):hc
const Dc=new Set
function Bc(e){Dc.forEach((t=>{t.c(e)||(Dc.delete(t),t.f())})),0!==Dc.size&&jc(Bc)}function Hc(e,t){e.appendChild(t)}function Uc(e){if(!e)return document
const t=e.getRootNode?e.getRootNode():e.ownerDocument
return t&&t.host?t:e.ownerDocument}function qc(e){const t=Vc("style")
return t.textContent="/* empty */",function(e,t){Hc(e.head||e,t),t.sheet}(Uc(e),t),t.sheet}function Gc(e,t,n){e.insertBefore(t,n||null)}function Wc(e){e.parentNode&&e.parentNode.removeChild(e)}function zc(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function Vc(e){return document.createElement(e)}function Qc(e){return document.createTextNode(e)}function Jc(){return Qc(" ")}function Kc(){return Qc("")}function Xc(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function Yc(e){return function(t){return t.preventDefault(),e.call(this,t)}}function Zc(e){return function(t){t.target===this&&e.call(this,t)}}function eu(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function tu(e,t,n){const i=t.toLowerCase()
i in e?e[i]="boolean"==typeof e[i]&&""===n||n:t in e?e[t]="boolean"==typeof e[t]&&""===n||n:eu(e,t,n)}function nu(e){return""===e?null:+e}function iu(e,t){t=""+t,e.data!==t&&(e.data=t)}function ru(e,t){e.value=null==t?"":t}function ou(e,t,n,i){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function su(e,t,n){for(let n=0;n<e.options.length;n+=1){const i=e.options[n]
if(i.__value===t)return void(i.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}function au(e){const t=e.querySelector(":checked")
return t&&t.__value}let lu
function cu(){if(void 0===lu){lu=!1
try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){lu=!0}}return lu}function uu(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative")
const n=Vc("iframe")
n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1
const i=cu()
let r
return i?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=Xc(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=Xc(n.contentWindow,"resize",t),t()}),Hc(e,n),()=>{(i||r&&n.contentWindow)&&r(),Wc(n)}}function du(e,t,n){e.classList.toggle(t,!!n)}function fu(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}class hu{is_svg=!1
e=void 0
n=void 0
t=void 0
a=void 0
constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){var i
this.e||(this.is_svg?this.e=(i=t.nodeName,document.createElementNS("http://www.w3.org/2000/svg",i)):this.e=Vc(11===t.nodeType?"TEMPLATE":t.nodeName),this.t="TEMPLATE"!==t.tagName?t:t.content,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)Gc(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(Wc)}}function pu(e,t){return new e(t)}const gu=new Map
let _u,vu=0
function mu(e,t,n,i,r,o,s,a=0){const l=16.666/i
let c="{\n"
for(let e=0;e<=1;e+=l){const i=t+(n-t)*o(e)
c+=100*e+`%{${s(i,1-i)}}\n`}const u=c+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length
for(;n--;)t=(t<<5)-t^e.charCodeAt(n)
return t>>>0}(u)}_${a}`,f=Uc(e),{stylesheet:h,rules:p}=gu.get(f)||function(e,t){const n={stylesheet:qc(t),rules:{}}
return gu.set(e,n),n}(f,e)
p[d]||(p[d]=!0,h.insertRule(`@keyframes ${d} ${u}`,h.cssRules.length))
const g=e.style.animation||""
return e.style.animation=`${g?`${g}, `:""}${d} ${i}ms linear ${r}ms 1 both`,vu+=1,d}function bu(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-i.length
r&&(e.style.animation=i.join(", "),vu-=r,vu||jc((()=>{vu||(gu.forEach((e=>{const{ownerNode:t}=e.stylesheet
t&&Wc(t)})),gu.clear())})))}function yu(e){_u=e}function wu(){if(!_u)throw new Error("Function called outside component initialization")
return _u}function ku(e){wu().$$.on_mount.push(e)}function Su(e){wu().$$.after_update.push(e)}function xu(e){wu().$$.on_destroy.push(e)}function Eu(){const e=wu()
return(t,n,{cancelable:i=!1}={})=>{const r=e.$$.callbacks[t]
if(r){const o=fu(t,n,{cancelable:i})
return r.slice().forEach((t=>{t.call(e,o)})),!o.defaultPrevented}return!0}}function Cu(e,t){const n=e.$$.callbacks[t.type]
n&&n.slice().forEach((e=>e.call(this,t)))}const $u=[],Tu=[]
let Pu=[]
const Lu=[],Iu=Promise.resolve()
let Ru=!1
function Ou(){Ru||(Ru=!0,Iu.then(Bu))}function Mu(){return Ou(),Iu}function Fu(e){Pu.push(e)}function Au(e){Lu.push(e)}const Nu=new Set
let ju,Du=0
function Bu(){if(0!==Du)return
const e=_u
do{try{for(;Du<$u.length;){const e=$u[Du]
Du++,yu(e),Hu(e.$$)}}catch(e){throw $u.length=0,Du=0,e}for(yu(null),$u.length=0,Du=0;Tu.length;)Tu.pop()()
for(let e=0;e<Pu.length;e+=1){const t=Pu[e]
Nu.has(t)||(Nu.add(t),t())}Pu.length=0}while($u.length)
for(;Lu.length;)Lu.pop()()
Ru=!1,Nu.clear(),yu(e)}function Hu(e){if(null!==e.fragment){e.update(),mc(e.before_update)
const t=e.dirty
e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Fu)}}function Uu(e,t,n){e.dispatchEvent(fu(`${t?"intro":"outro"}${n}`))}const qu=new Set
let Gu
function Wu(){Gu={r:0,c:[],p:Gu}}function zu(){Gu.r||mc(Gu.c),Gu=Gu.p}function Vu(e,t){e&&e.i&&(qu.delete(e),e.i(t))}function Qu(e,t,n,i){if(e&&e.o){if(qu.has(e))return
qu.add(e),Gu.c.push((()=>{qu.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}else i&&i()}const Ju={duration:0}
function Ku(e,t,n,i){let r,o=t(e,n,{direction:"both"}),s=i?0:1,a=null,l=null,c=null
function u(){c&&bu(e,c)}function d(e,t){const n=e.b-s
return t*=Math.abs(n),{a:s,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function f(t){const{delay:n=0,duration:i=300,easing:f=pc,tick:h=hc,css:p}=o||Ju,g={start:Nc()+n,b:t}
t||(g.group=Gu,Gu.r+=1),"inert"in e&&(t?void 0!==r&&(e.inert=r):(r=e.inert,e.inert=!0)),a||l?l=g:(p&&(u(),c=mu(e,s,t,i,n,f,p)),t&&h(0,1),a=d(g,i),Fu((()=>Uu(e,t,"start"))),function(e){let t
0===Dc.size&&jc(Bc),new Promise((n=>{Dc.add(t={c:e,f:n})}))}((t=>{if(l&&t>l.start&&(a=d(l,i),l=null,Uu(e,a.b,"start"),p&&(u(),c=mu(e,s,a.b,a.duration,0,f,o.css))),a)if(t>=a.end)h(s=a.b,1-s),Uu(e,a.b,"end"),l||(a.b?u():--a.group.r||mc(a.group.c)),a=null
else if(t>=a.start){const e=t-a.start
s=a.a+a.d*f(e/a.duration),h(s,1-s)}return!(!a&&!l)})))}return{run(e){bc(o)?(ju||(ju=Promise.resolve(),ju.then((()=>{ju=null}))),ju).then((()=>{o=o({direction:e?"in":"out"}),f(e)})):f(e)},end(){u(),a=l=null}}}function Xu(e,t){const n=t.token={}
function i(e,i,r,o){if(t.token!==n)return
t.resolved=o
let s=t.ctx
void 0!==r&&(s=s.slice(),s[r]=o)
const a=e&&(t.current=e)(s)
let l=!1
t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==i&&e&&(Wu(),Qu(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),zu())})):t.block.d(1),a.c(),Vu(a,1),a.m(t.mount(),t.anchor),l=!0),t.block=a,t.blocks&&(t.blocks[i]=a),l&&Bu()}if(!(r=e)||"object"!=typeof r&&"function"!=typeof r||"function"!=typeof r.then){if(t.current!==t.then)return i(t.then,1,t.value,e),!0
t.resolved=e}else{const n=wu()
if(e.then((e=>{yu(n),i(t.then,1,t.value,e),yu(null)}),(e=>{if(yu(n),i(t.catch,2,t.error,e),yu(null),!t.hasCatch)throw e})),t.current!==t.pending)return i(t.pending,0),!0}var r}function Yu(e,t,n){const i=t.slice(),{resolved:r}=e
e.current===e.then&&(i[e.value]=r),e.current===e.catch&&(i[e.error]=r),e.block.p(i,n)}function Zu(e){return void 0!==e?.length?e:Array.from(e)}function ed(e,t){e.d(1),t.delete(e.key)}function td(e,t){Qu(e,1,1,(()=>{t.delete(e.key)}))}function nd(e,t,n,i,r,o,s,a,l,c,u,d){let f=e.length,h=o.length,p=f
const g={}
for(;p--;)g[e[p].key]=p
const _=[],v=new Map,m=new Map,b=[]
for(p=h;p--;){const e=d(r,o,p),i=n(e)
let a=s.get(i)
a?b.push((()=>a.p(e,t))):(a=c(i,e),a.c()),v.set(i,_[p]=a),i in g&&m.set(i,Math.abs(p-g[i]))}const y=new Set,w=new Set
function k(e){Vu(e,1),e.m(a,u),s.set(e.key,e),u=e.first,h--}for(;f&&h;){const t=_[h-1],n=e[f-1],i=t.key,r=n.key
t===n?(u=t.first,f--,h--):v.has(r)?!s.has(i)||y.has(i)?k(t):w.has(r)?f--:m.get(i)>m.get(r)?(w.add(i),k(t)):(y.add(r),f--):(l(n,s),f--)}for(;f--;){const t=e[f]
v.has(t.key)||l(t,s)}for(;h;)k(_[h-1])
return mc(b),_}function id(e,t,n){const i=e.$$.props[t]
void 0!==i&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function rd(e){e&&e.c()}function od(e,t,n){const{fragment:i,after_update:r}=e.$$
i&&i.m(t,n),Fu((()=>{const t=e.$$.on_mount.map(_c).filter(bc)
e.$$.on_destroy?e.$$.on_destroy.push(...t):mc(t),e.$$.on_mount=[]})),r.forEach(Fu)}function sd(e,t){const n=e.$$
null!==n.fragment&&(!function(e){const t=[],n=[]
Pu.forEach((i=>-1===e.indexOf(i)?t.push(i):n.push(i))),n.forEach((e=>e())),Pu=t}(n.after_update),mc(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ad(e,t,n,i,r,o,s=null,a=[-1]){const l=_u
yu(e)
const c=e.$$={fragment:null,ctx:[],props:o,update:hc,not_equal:r,bound:vc(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:vc(),dirty:a,skip_bound:!1,root:t.target||l.$$.root}
s&&s(c.root)
let u=!1
if(c.ctx=n?n(e,t.props||{},((t,n,...i)=>{const o=i.length?i[0]:n
return c.ctx&&r(c.ctx[t],c.ctx[t]=o)&&(!c.skip_bound&&c.bound[t]&&c.bound[t](o),u&&function(e,t){-1===e.$$.dirty[0]&&($u.push(e),Ou(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n})):[],c.update(),u=!0,mc(c.before_update),c.fragment=!!i&&i(c.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target)
c.fragment&&c.fragment.l(e),e.forEach(Wc)}else c.fragment&&c.fragment.c()
t.intro&&Vu(e.$$.fragment),od(e,t.target,t.anchor),Bu()}yu(l)}class ld{$$=void 0
$$set=void 0
$destroy(){sd(this,1),this.$destroy=hc}$on(e,t){if(!bc(t))return hc
const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[])
return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t
this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const cd=[]
function ud(e,t=hc){let n
const i=new Set
function r(t){if(yc(e,t)&&(e=t,n)){const t=!cd.length
for(const t of i)t[1](),cd.push(t,e)
if(t){for(let e=0;e<cd.length;e+=2)cd[e][0](cd[e+1])
cd.length=0}}}function o(t){r(t(e))}return{set:r,update:o,subscribe:function(s,a=hc){const l=[s,a]
return i.add(l),1===i.size&&(n=t(r,o)||hc),s(e),()=>{i.delete(l),0===i.size&&n&&(n(),n=null)}}}}function dd(e,t,n){const i=!Array.isArray(e),r=i?[e]:e
if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value")
const o=t.length<2
return s=(e,n)=>{let s=!1
const a=[]
let l=0,c=hc
const u=()=>{if(l)return
c()
const r=t(i?a[0]:a,e,n)
o?e(r):c=bc(r)?r:hc},d=r.map(((e,t)=>Sc(e,(e=>{a[t]=e,l&=~(1<<t),s&&u()}),(()=>{l|=1<<t}))))
return s=!0,u(),function(){mc(d),c(),s=!1}},{subscribe:ud(n,s).subscribe}
var s}const fd=ud("")
function hd(e){const t=e-1
return t*t*t+1}function pd(e,{delay:t=0,duration:n=400,easing:i=pc}={}){const r=+getComputedStyle(e).opacity
return{delay:t,duration:n,easing:i,css:e=>"opacity: "+e*r}}function gd(e,{delay:t=0,duration:n=400,easing:i=hd,x:r=0,y:o=0,opacity:s=0}={}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-s),[d,f]=Fc(r),[h,p]=Fc(o)
return{delay:t,duration:n,easing:i,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*d}${f}, ${(1-e)*h}${p});\n\t\t\topacity: ${l-u*t}`}}function _d(e,{delay:t=0,duration:n=400,easing:i=hd,axis:r="y"}={}){const o=getComputedStyle(e),s=+o.opacity,a="y"===r?"height":"width",l=parseFloat(o[a]),c="y"===r?["top","bottom"]:["left","right"],u=c.map((e=>`${e[0].toUpperCase()}${e.slice(1)}`)),d=parseFloat(o[`padding${u[0]}`]),f=parseFloat(o[`padding${u[1]}`]),h=parseFloat(o[`margin${u[0]}`]),p=parseFloat(o[`margin${u[1]}`]),g=parseFloat(o[`border${u[0]}Width`]),_=parseFloat(o[`border${u[1]}Width`])
return{delay:t,duration:n,easing:i,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*s};${a}: ${e*l}px;padding-${c[0]}: ${e*d}px;padding-${c[1]}: ${e*f}px;margin-${c[0]}: ${e*h}px;margin-${c[1]}: ${e*p}px;border-${c[0]}-width: ${e*g}px;border-${c[1]}-width: ${e*_}px;`}}function vd(e){let t,n,i,r,o,s,a
return{c(){t=Vc("div"),n=Vc("p"),i=Qc(e[0]),eu(n,"class","svelte-1c416no"),eu(t,"role","alert"),eu(t,"class","svelte-1c416no"),ou(t,"transform",e[2])},m(r,l){Gc(r,t,l),Hc(t,n),Hc(n,i),o=!0,s||(a=Xc(t,"click",e[4]),s=!0)},p(e,n){(!o||1&n)&&iu(i,e[0]),4&n&&ou(t,"transform",e[2])},i(e){o||(e&&Fu((()=>{o&&(r||(r=Ku(t,gd,{delay:250,duration:300,x:0,y:-100,opacity:.5},!0)),r.run(1))})),o=!0)},o(e){e&&(r||(r=Ku(t,gd,{delay:250,duration:300,x:0,y:-100,opacity:.5},!1)),r.run(0)),o=!1},d(e){e&&Wc(t),e&&r&&r.end(),s=!1,a()}}}function md(e){let t,n=e[1]&&vd(e)
return{c(){n&&n.c(),t=Kc()},m(e,i){n&&n.m(e,i),Gc(e,t,i)},p(e,[i]){e[1]?n?(n.p(e,i),2&i&&Vu(n,1)):(n=vd(e),n.c(),Vu(n,1),n.m(t.parentNode,t)):n&&(Wu(),Qu(n,1,1,(()=>{n=null})),zu())},i(e){Vu(n)},o(e){Qu(n)},d(e){e&&Wc(t),n&&n.d(e)}}}function bd(e,t,n){let i
Ec(e,fd,(e=>n(0,i=e)))
let{ms:r=3e3}=t,o=!1,s=0,a=""
const l=(e,t)=>{clearTimeout(s),e?(!async function(){const e=window.visualViewport,t=e.offsetLeft+e.width-window.innerWidth
n(2,a=`translate(${t}px, ${e.offsetTop}px)`),n(1,o=!0)}(),t>0&&(s=setTimeout((()=>{var e
n(1,o=!1),i="",e=i,fd.set(e)}),t))):n(1,o=!1)}
xu((()=>clearTimeout(s)))
return e.$$set=e=>{"ms"in e&&n(3,r=e.ms)},e.$$.update=()=>{9&e.$$.dirty&&l(i,r)},[i,o,a,r,()=>{n(1,o=!1)}]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4")
class yd extends ld{constructor(e){super(),ad(this,e,bd,md,yc,{ms:3})}}let wd
function kd(e){e&&(!function(){if(!wd)wd=!0,new yd({target:document.body})}(),fd.set(e))}function Sd(e,t){return Array.from(e,t)}function xd(e,t){return t?t.getElementsByTagName(e):document.getElementsByTagName(e)}function Ed(e,t){return Sd(xd(e,t))}function Cd(e){return e.trim()}function $d(e){const t=n(e)
if($l(t))return Cd(t)}function Td(e,t){return $d(t).includes(e)}function Pd(e,...t){return(...n)=>e(...t,...n)}let Ld=0,Id=0,Rd=0
function Od(){return Ld||(Ld=t("pCL")),Ld}function Md(){return Id||(Id=t("pCC")),Id}function Fd(){const e=Ed("a",Od()).filter(function(e){return Pd(Td,e)}("message"))
e.length&&async function(){const e=new Audio(El("defaultMessageSound"))
try{await e.play()}catch(e){kd("Message Sound Not Allowed")}}()}function Ad(e,t,n,i){var r
Jl(e,t,n,{once:!0,...(r=i,Cl(r)?{capture:r}:r)})}let Nd=0,jd=0,Dd=0,Bd=0,Hd=0,Ud=0
function qd(e){jd=e.clientX,Dd=e.clientY}function Gd(){const e=function(e){if("none"===e)return[0,0]
const t=e.split(/[()]/)[1].split(", ")
return[Number(t[4]),Number(t[5])]}(window.getComputedStyle(Nd,null).transform)
Bd=e[0]-jd,Hd=e[1]-Dd}function Wd(e){e.clientX===jd&&e.clientY===Dd||(Nd.style.transform=`matrix(1, 0, 0, 1, ${(e.clientX+Bd).toString()}, ${(e.clientY+Hd).toString()})`,qd(e))}function zd(e){return function(e){const t=performance.now()
t-Ud>16&&(Wd(e),Ud=t)}(e),e.preventDefault(),!1}function Vd(e){return Wd(e),function(e,t,n,i){e instanceof EventTarget&&e.removeEventListener(t,n,i)}(document.body,"dragover",zd),e.preventDefault(),!1}function Qd(e,t){!function(e,t){Nd=e||t.target}(e,t),function(e){const t=new Image
t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.dataTransfer.setDragImage(t,0,0)}(t),qd(t),Gd(),Ud=0,t.dataTransfer.setData("text/plain",""),Jl(document.body,"dragover",zd),Ad(document.body,"drop",Vd)}function Jd(e,t){e.draggable=!0,Jl(e,"dragstart",Pd(Qd,t))}function Kd(e){return String(e).replaceAll(" ","_")}const Xd={}
function Yd(e,t,n){if(!e)return
const i=function(e,t){let n=Kd(e)
return t&&(n+=`__${Kd(t)}`),n}(e,t),r=function(e,t){let n=e
return t&&(n+=`__${Kd(t)}`),n}(i,n)
Xd[r]||(Xd[r]=!0,hs(i,function(e){return e?{eventLabel:e}:null}(n)))}let Zd=0
function ef(e){const t=l(/\sguildId: (?<id>\d{1,6}),/,n(e))
t&&(Zd=Number(t))}function tf(){return Zd||Ed("script",document.body).forEach(ef),Zd}function nf(e){return Object.entries(e)}function rf(e,t,[n,i]){Ol(i)&&null!==i?e(t[n],i):t[n]=i}function of(e,t){nf(t).forEach(Pd(rf,of,e))}function sf(e,t){const n=document.createElement(e)
return t&&of(n,t),n}function af(e){return sf("div",e)}function lf(e,t){return t?t.getElementsByClassName(e):document.getElementsByClassName(e)}function cf(e,t){return Sd(lf(e,t))}function uf(e,t){return e instanceof Node&&t instanceof Node&&e.appendChild(t),t}function df(e,t){t instanceof Element&&(t.innerHTML=String(e))}const ff={id:"content",style:{display:"none"}},hf={width:640,modal:!0,position:{my:"top",at:"top",offset:"0 60",collision:"none"},resizable:!1}
function pf(e){let n=t("content")
n?df("",n):(n=af(ff),uf(document.body,n)),$(n).dialog(hf),cf("ui-dialog-titlebar-close").forEach((e=>e.blur())),e(n)}async function gf(e){(await e).default()}function _f(){gf(import("./buffLog-DB4Urp1z.js"))}function vf(){gf(import("./combatLog-A3f5DTor.js"))}function mf(){gf(import("./creatureLog-bsXmRAjq.js"))}function bf(){gf(import("./fsboxlog-DTv-2Ypy.js"))}function yf(){gf(import("./guildLog-zYmluCqR.js"))}function wf(){gf(import("./guildTracker-DXKR-GSq.js"))}async function kf(e){(await import("./injectAuctionSearch-CwUGi3zb.js")).default(e)}async function Sf(e){(await import("./findBuffs-BQy6DOCP.js")).injectFindBuffs(e)}async function xf(e){(await import("./findBuffs-BQy6DOCP.js")).injectFindOther(e)}async function Ef(e){(await import("./injectOnlinePlayers-WQe2aHeF.js")).default(e)}function Cf(){gf(import("./potReport-CNo79x4P.js"))}function $f(){gf(import("./quickExtract-C9OnncYJ.js"))}function Tf(){gf(import("./quickLinksManager-C3OS3PMR.js"))}async function Pf(e){(await import("./quickWear-Dh8oOeIC.js")).default(e)}function Lf(){gf(import("./recipeMgr-SUKMl-rp.js"))}function If(){gf(import("./reliclist-CQqsc3n8.js"))}function Rf(){gf(import("./superelite-Cf3SM_IH.js"))}function Of(e){return new Promise((t=>{setTimeout(t,e)}))}function Mf(e){return e.data?(delete e.data.fshrnd,$.param(e.data)):e.url}class Ff extends Error{constructor([e,t,n,i],...r){super(function(e,t,n,i){const r=`${t.status} ${t.statusText} - `
if(t.statusText===i.toString())return r+Mf(e)
const o=`${r+n} ${i} - ${Mf(e)}`
return"parsererror"===n?`${o} - ${t.responseText}`:o}(e,t,n,i),...r),Error.captureStackTrace&&Error.captureStackTrace(this,Ff),this.jqSettings=e,this.jqXhr=t,this.jqTextStatus=n,this.jqErrorThrown=i}}function Af(e){Jl(window,"beforeunload",(()=>e.abort()))}const Nf=900
let jf=0
const Df=5
let Bf=0
async function Hf(){Bf<Df-$.active&&performance.now()-jf>=Nf?(Bf=Df-$.active,jf=performance.now()):await Of(100)}async function Uf(e,t=10){await async function(){for(;Bf<1;)await Hf()
Bf-=1}()
let n=null
try{n=await function(e){const t=function(e){return"string"==typeof e?{url:e}:e}(e)
return t.beforeSend=Af,$.ajax(t).fail(((e,t,n)=>{e.textStatus=t,e.errorThrown=n}))}(e)}catch(n){if(t&&n.status>500)return Uf(e,t-1)
!function(e,t){if(![0,500,503].includes(t.status))throw new Ff([e,t,t.textStatus,t.errorThrown])}(e,n)}return n}function qf(e){return of(e,{url:Vs,data:{no_mobile:1}}),Uf(e)}async function Gf(e){return Ml(await qf({data:e,dataType:"text"}))??{r:1,m:"Server Error"}}function Wf(e){return Gf({cmd:"export",...e})}function zf(){return Wf({inc_tagged:"1",subcmd:"guild_store"})}function Vf(e){return sf("a",e)}function Qf(e){e instanceof Element&&e.click()}function Jf(e,t){const n=URL.createObjectURL(e),i=Vf({download:t,href:n,style:{display:"none"}})
uf(document.body,i),Qf(i),document.body.removeChild(i),setTimeout((()=>{URL.revokeObjectURL(n)}),0)}async function Kf(e,t){return Ml(await Uf({url:"app.php",data:{browser:1,v:9,...e},dataType:"text",...t}))??{e:{code:0,message:"Server Error"},s:!1}}function Xf(e){return Kf(e,{method:"POST"})}function Yf(e,t){const n=[]
for(let i=0;i<t.length;i+=e)n.push(t.slice(i,i+e))
return n}let Zf,eh=null
function th(){const e=t("holdtext")
if(e&&!eh){const t=l(/fallensword.com\/\?ref=(?<id>\d+)/,n(e))
t&&(eh=Number(t))}return eh}function nh(e){return new Promise(((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)}))}function ih(){return Zf||(Zf=function(e,t){const n=indexedDB.open(e)
n.onupgradeneeded=()=>n.result.createObjectStore(t)
const i=nh(n)
return(e,n)=>i.then((i=>n(i.transaction(t,e).objectStore(t))))}("keyval-store","keyval")),Zf}async function rh(e,t){try{return await function(e,t=ih()){return t("readonly",(t=>nh(t.get(e))))}(e,t)}catch(e){fs(e)}}async function oh(e,t,n){try{return await function(e,t,n=ih()){return n("readwrite",(n=>(n.put(t,e),nh(n.transaction))))}(e,t,n)}catch(e){fs(e)}}const sh=({folder_id:e})=>-2!==(e??-2),ah=({folder_id:e})=>-2===e,lh=({player_id:e})=>-1!==(e??-1),ch=({player_id:e})=>e,uh=({player_id:e})=>-1===e,dh=([e,t,n])=>Yf(20,e).map((e=>[e,t,n])),fh=e=>({inv_id:t})=>t===e.inv_id,hh=(e,t)=>e.attributes.find((({id:e})=>e===t))?.value??0,ph=(e,t)=>({...t,armor:hh(e,2),attack:hh(e,0),damage:hh(e,4),defense:hh(e,1),hp:hh(e,3),set_name:e.set_name??""}),gh=(e,t)=>t.forge||t.stats?.set_name,_h=e=>e?.s?e.r.items:[],vh=e=>[[e.filter(sh),th,0],[e.filter(ah),th,1],[e.filter(lh),ch,7],[e.filter(uh),th,4]].flatMap(dh)
function mh(e){return function(){const t=this.data(),n=e.find(fh(t))
n?.attributes&&(t.stats=ph(n,t.stats),this.invalidate())}}const bh=async()=>await rh(`fsh_${Vl.subcmd}_cache`)??[],yh=e=>oh(`fsh_${Vl.subcmd}_cache`,e),wh=e=>t=>e.every((e=>e.inv_id!==t.inv_id))
async function kh(e,t,n){const i=await(r={item_id:e.map((({item_id:e})=>e)),inv_id:e.map((({inv_id:e})=>e)),p:e.map(t),t:e.map((()=>n))},Xf({cmd:"fetchitem",compare:0,...r}))
var r
return i?.s&&(i.r.items=((e,t)=>t.map(((t,n)=>({...t,inv_id:e[n].inv_id}))))(e,i.r.items),await async function(e){const t=(await bh()).filter(wh(e))
await yh(t.concat(e))}(i.r.items)),i}const Sh=(e,t)=>{return t.filter((n=Sd(e.data()),e=>n.some((t=>e.inv_id===t.inv_id))))
var n}
async function xh(e){const t=e.rows(gh),n=await async function(e){const t=await bh(),n=Sh(e,t)
return await yh(n),n}(t)
t.every(mh(n))}async function Eh(e){const t=new DataTable(e)
await xh(t),t.draw()}const Ch=e=>[e.item_id,e.inv_id,e.item_name,e.rarity,e.type,e.durability,e.max_durability,e.guild_tag,e.in_guide,e.player_id,e.equipped,e.craft,e.forge],$h=e=>{return[...Ch(e),...(t=e.stats,[t?.attack??"",t?.defense??"",t?.armor??"",t?.hp??"",t?.damage??"",t?.stamina??"",t?.min_level??"",t?.set_name??"",t?.set_attack??"",t?.set_defense??"",t?.set_armor??"",t?.set_hp??"",t?.set_damage??""]),e.cached].join(",")
var t}
function Th(e){return()=>pf(e)}var Ph=[{section:"Character",menu:[{label:"Buff Log",fn:_f},{label:"Combat Log",fn:vf},{label:"Creature Log",fn:mf},{label:"Recipe Manager",fn:Lf},{label:"Quick Links",fn:Tf},{label:"Inventory Manager",href:`${la}invmanagernew`}]},{section:"Actions",menu:[{label:"Find Buffs",fn:Th(Sf)},{label:"Find Other",fn:Th(xf)},{label:"Online Players",fn:Th(Ef)},{label:"AH Quick Search",fn:Th(kf)}]},...tf()?[{section:"Guild",menu:[{label:"Guild Inventory",href:`${la}guildinvmgr`},{label:"New Guild Log",fn:yf},{label:"Merc Hunter",fn:function(){gf(import("./mercs-Dl7ZCPCx.js"))}},{label:"Pot Report",fn:Cf},{label:"Guild Tracker",fn:wf}]}]:[],{section:"Extra",menu:[{label:"Quick Extract",fn:$f},{label:"Quick Wear",fn:Th(Pf)},{label:"FS Box Log",fn:bf},{label:"SE Tracker",fn:Rf}]},...El("betaOptIn")&&tf()?[{section:"Beta Features",menu:[{label:"Relic List",fn:If,beta:!0},{label:"GS Export",fn:async function(){if(!tf())return
const e=await zf(),t=await rh("fsh_guildinvmgr_cache")??[],n=e.items.map((e=>t=>{const n=e.find((({inv_id:e})=>e===t.inv_id))
return n?.attributes?{...t,stats:{...t.stats,armor:hh(n,2),attack:hh(n,0),damage:hh(n,4),defense:hh(n,1),hp:hh(n,3),set_name:n.set_name??"",...n.set_name&&{set_armor:hh(n.set_bonuses,2)},...n.set_name&&{set_attack:hh(n.set_bonuses,0)},...n.set_name&&{set_damage:hh(n.set_bonuses,4)},...n.set_name&&{set_defense:hh(n.set_bonuses,1)},...n.set_name&&{set_hp:hh(n.set_bonuses,3)}},cached:!0}:{...t,cached:!1}})(t))
var i
Jf((i=`item_id,inv_id,item_name,rarity,type,durability,max_durability,guild_tag,in_guide,player_id,equipped,craft,forge,attack,defense,armor,hp,damage,stamina,min_level,set_name,set_attack,set_defense,set_armor,set_hp,set_damage,cached\n${(e=>e.map($h).join("\n"))(n)}\n`,new Blob([i],{type:"text/csv"})),"gs_export.csv")},beta:!0},{label:"Who's Got What",fn:function(){gf(import("./whosGotWhat-CZTla7ln.js"))},beta:!0}]}]:[],{section:"FSH developer quick links",menu:[{playerId:1963510,playerName:"PointyHair"},{playerId:1674838,playerName:"Lusterless"}]}]
function Lh(e,t,n){const i=e.slice()
return i[7]=t[n],i}function Ih(e,t,n){const i=e.slice()
return i[10]=t[n],i}function Rh(e){let t,n,i,r,o
function s(){return e[5](e[10])}return{c(){t=Vc("button"),t.textContent="PM",n=Jc(),i=Vc("a"),i.textContent=`${e[10].playerName}`,eu(t,"type","button"),eu(t,"class","helperDevBtn svelte-8sy7i5"),eu(i,"href",ia+"menuItem.playerId"),eu(i,"class","svelte-8sy7i5")},m(e,a){Gc(e,t,a),Gc(e,n,a),Gc(e,i,a),r||(o=Xc(t,"click",s),r=!0)},p(t,n){e=t},d(e){e&&(Wc(t),Wc(n),Wc(i)),r=!1,o()}}}function Oh(e){let t,n,i
function r(){return e[4](e[10])}return{c(){t=Vc("a"),t.textContent=`${e[10].label}`,eu(t,"href",e[10].href),eu(t,"class","svelte-8sy7i5")},m(e,o){Gc(e,t,o),n||(i=Xc(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&Wc(t),n=!1,i()}}}function Mh(e){let t,n,i
function r(){return e[3](e[10])}return{c(){t=Vc("button"),t.textContent=`${e[10].label}`,eu(t,"type","button"),eu(t,"class","svelte-8sy7i5")},m(e,o){Gc(e,t,o),n||(i=Xc(t,"click",r),n=!0)},p(t,n){e=t},d(e){e&&Wc(t),n=!1,i()}}}function Fh(e){let t,n
let i=function(e,t){return e[10].fn?Mh:e[10].href?Oh:e[10].playerName?Rh:void 0}(e),r=i&&i(e),o=e[10].beta&&function(e){let t
return{c(){t=Vc("sup"),t.textContent="beta",eu(t,"class","fshRed")},m(e,n){Gc(e,t,n)},d(e){e&&Wc(t)}}}()
return{c(){t=Vc("li"),r&&r.c(),n=Jc(),o&&o.c()},m(e,i){Gc(e,t,i),r&&r.m(t,null),Hc(t,n),o&&o.m(t,null)},p(e,t){r&&r.p(e,t)},d(e){e&&Wc(t),r&&r.d(),o&&o.d()}}}function Ah(e){let t,n,i,r,o=Zu(e[7].menu),s=[]
for(let t=0;t<o.length;t+=1)s[t]=Fh(Ih(e,o,t))
return{c(){t=Vc("h2"),t.textContent=`${e[7].section}`,n=Jc(),i=Vc("ul")
for(let e=0;e<s.length;e+=1)s[e].c()
r=Jc(),eu(t,"class","svelte-8sy7i5")},m(e,o){Gc(e,t,o),Gc(e,n,o),Gc(e,i,o)
for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(i,null)
Hc(i,r)},p(e,t){if(7&t){let n
for(o=Zu(e[7].menu),n=0;n<o.length;n+=1){const a=Ih(e,o,n)
s[n]?s[n].p(a,t):(s[n]=Fh(a),s[n].c(),s[n].m(i,r))}for(;n<s.length;n+=1)s[n].d(1)
s.length=o.length}},d(e){e&&(Wc(t),Wc(n),Wc(i)),zc(s,e)}}}function Nh(e){let t,n=Zu(Ph),i=[]
for(let t=0;t<n.length;t+=1)i[t]=Ah(Lh(e,n,t))
return{c(){for(let e=0;e<i.length;e+=1)i[e].c()
t=Kc()},m(e,n){for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,n)
Gc(e,t,n)},p(e,[r]){if(7&r){let o
for(n=Zu(Ph),o=0;o<n.length;o+=1){const s=Lh(e,n,o)
i[o]?i[o].p(s,r):(i[o]=Ah(s),i[o].c(),i[o].m(t.parentNode,t))}for(;o<i.length;o+=1)i[o].d(1)
i.length=n.length}},i:hc,o:hc,d(e){e&&Wc(t),zc(i,e)}}}function jh(e){const t=Eu()
function n(e){Yd("helperMenu",e)}function i(e,i){Rl(i)&&(n(e),t("toggle"),i())}function r(e){t("toggle"),n("sendMsg"),window.openQuickMsgDialog(e)}return[n,i,r,e=>i(e.label,e.fn),e=>n(e.label),e=>r(e.playerName)]}class Dh extends ld{constructor(e){super(),ad(this,e,jh,Nh,yc,{})}}function Bh(e){let t,n,i,r
return n=new Dh({}),n.$on("toggle",e[4]),{c(){t=Vc("div"),rd(n.$$.fragment),eu(t,"class","modal svelte-gt76l6")},m(e,i){Gc(e,t,i),od(n,t,null),r=!0},p:hc,i(e){r||(Vu(n.$$.fragment,e),e&&Fu((()=>{r&&(i||(i=Ku(t,pd,{duration:100},!0)),i.run(1))})),r=!0)},o(e){Qu(n.$$.fragment,e),e&&(i||(i=Ku(t,pd,{duration:100},!1)),i.run(0)),r=!1},d(e){e&&Wc(t),sd(n),e&&i&&i.end()}}}function Hh(e){let t,n,i,r,o,s,a=e[1]&&Bh(e)
return{c(){t=Vc("div"),n=Vc("button"),n.textContent="Helper Menu",i=Jc(),a&&a.c(),eu(n,"type","button"),eu(n,"class","toggle svelte-gt76l6"),du(n,"helper-menu-move",e[3]),eu(t,"class","helper-menu svelte-gt76l6"),du(t,"helper-menu-fixed",e[2])},m(l,c){Gc(l,t,c),Hc(t,n),Hc(t,i),a&&a.m(t,null),e[5](t),r=!0,o||(s=Xc(n,"click",e[4]),o=!0)},p(e,[n]){e[1]?a?(a.p(e,n),2&n&&Vu(a,1)):(a=Bh(e),a.c(),Vu(a,1),a.m(t,null)):a&&(Wu(),Qu(a,1,1,(()=>{a=null})),zu())},i(e){r||(Vu(a),r=!0)},o(e){Qu(a),r=!1},d(n){n&&Wc(t),a&&a.d(),e[5](null),o=!1,s()}}}function Uh(e,t,n){const i=El("keepHelperMenuOnScreen"),r=El("draggableHelperMenu")
let o=0
ku((()=>{r&&Jd(o)}))
let s=!1
return[o,s,i,r,function(){n(1,s=!s)},function(e){Tu[e?"unshift":"push"]((()=>{o=e,n(0,o)}))}]}class qh extends ld{constructor(e){super(),ad(this,e,Uh,Hh,yc,{})}}function Gh(){const e=Fl(".mainbody")
e&&function(e,t){new qh({target:t.parentElement,props:{props:e}})}({},e)}function Wh(e){return(new DOMParser).parseFromString(e,"text/html")}function zh(e){return qf({data:e})}async function Vh(e){const t=await zh(e)
if(t)return Wh(t)}function Qh(e){const n=t("info-msg",e)
if(n){const e=n.innerHTML
return e?e.replace(/<br.*/,""):""}}let Jh=0
const Kh=()=>Jh
function Xh(){Jh=El("sendGoldonWorld")}async function Yh(){if(!Kh())return
Yd("NewMap","doSendGold")
const e=await Vh({cmd:"trade",subcmd:"sendgold",xc:window.ajaxXC,target_username:$("#HelperSendTo").html(),gold_amount:$("#HelperSendAmt").html().replace(/[^\d]/g,"")})
e&&function(e){const t=Qh(e)
"You successfully sent gold!"!==t&&""!==t||(Ll("currentGoldSentTotal",parseInt(El("currentGoldSentTotal"),10)+parseInt(El("goldAmount"),10)),GameData.fetch(za))}(e)}function Zh(e){window.location=e}function ep(e){El("expandMenuOnKeyPress")&&localStorage.setItem("hcs.nav.openIndex",e)}function tp(e){Yd("keyHandler",e)}function np(e){return e?.toLowerCase?.()}function ip(e,t){return np(e)<np(t)?-1:np(e)>np(t)?1:0}function rp(e){return Kf(e,{method:"GET"})}function op(e){return rp({cmd:"profile",...e})}async function sp(){const e=await op({subcmd:"viewcombatset"})
return e?.r?{...e,r:e.r.sort(((e,t)=>ip(e.name,t.name)))}:e}function ap(e,t,...n){return e(...n)}function lp(){return ap(sp)}const cp=[e=>e?.s,(e,t)=>e.r?.length>t]
async function up(e){const t=await lp()
if(((e,t)=>cp.every((n=>n(t,e))))(e,t)){tp("changeCombatSet")
const n=t.r[e].id
ep("2"),Zh(`${na+Ks}managecombatset&submit=Use&combatSetId=${n}`)}}function dp(e,n){t("worldPage")||(tp(e),Zh(n))}function fp(){Vl.enableMaxGroupSizeToJoin?Zh(ma):Zh(va)}function hp(){tp("logPage"),ep("2"),Zh(ea)}function pp(e){const t=Fl(`#pCC input[value="${e}"]`)
t&&(tp("movePage"),Qf(t))}const gp=[["!",up,0],["@",up,1],['"',up,1],["#",up,2],["£",up,2],["$",up,3],["%",up,4],["^",up,5],["&",up,6],["*",up,7],["(",up,8],["0",function(){dp("toWorld",ba)}],["<",pp,"<"],[">",pp,">"],["G",function(){tp("createGroup"),ep("4"),Zh(`${pa}create`)}],["L",hp],["b",function(){tp("backpack"),ep("2"),Zh(ra)}],["g",function(){tp("gotoGuild"),ep("4"),Zh(`${da}manage`)}],["j",function(){tp("joinAllGroup"),ep("4"),fp()}],["l",hp],["p",function(){tp("profile"),ep("2"),Zh(na)}],["r",function(){dp("doRepair",`${ka+Ks}repairall&fromworld=1`)}],["v",function(){"dialogIsClosed"in Vl&&!Vl.dialogIsClosed()||(tp("insertQuickWear"),pf(Pf))}],["y",Yh]]
const _p=[e=>["HTML","BODY"].every((t=>e.target.tagName!==t)),e=>e.ctrlKey,e=>e.metaKey,e=>e.altKey]
function vp(e){var t;(t=e,_p.some((e=>e(t))))||function(e){const t=gp.find((([t])=>e===t))
t&&t[1](t[2])}(e.key)}function mp(){Jl(document,"keyup",vp)}function bp(e,t){return $d(t)===e}function yp(e){return Pd(bp,e)}function wp(e,t,n){Jl(e,"click",t,n)}function kp(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}function Sp(e,t){return Sd(kp(e,t))}function xp(e){wp(e,(()=>{Yd("chrome","Game Help link")})),df(`<a href="${Js}settings">Game Help</a>`,e)}function Ep(){Sp("#pCR h3").filter(yp("Game Help")).forEach(xp)}function Cp(e){Vl[e]=El(e)}function $p(e,t){if(t instanceof Element)return t.closest(e)}function Tp(e){e?.classList&&e.classList.add("fshHide")}function Pp(e){const n=$p("a",e.target)
n?.getAttribute("href")===fa&&(Yd("useNewGuildLog","Alter Href"),e.preventDefault(),yf(),Tp(t("notification-guild-log")))}function Lp(){return Vl.huntingMode&&window.realmKeyHandler}function Ip(e){e.forEach((e=>uc(3,e)))}function Rp(){return zh({cmd:"guild",subcmd:"manage"})}function Op(e){return $p("tr",e)}function Mp(e,t){return a(e,t)?.groups??{}}function Fp(e){const{d:t,h:n,m:i,s:r}=Mp(Hs,e),o=Number(t),s=Number(n)+24*o,a=Number(i)+60*s,l=Number(r)+60*a
return{day:t,days:o,hour:n,hours:s,min:i,mins:a,sec:r,secs:l,timestamp:$s()-l}}function Ap(e,t){if(t){const n=new Set
return e.filter((e=>n.has(e[t])?0:n.add(e[t])))}return Sd(new Set(e))}const Np=e=>Number($d(Op(e)?.cells[4])?.replaceAll(",","")),jp=e=>Number(l(Us,e.href)),Dp=e=>$d(Op(e)?.cells[3]),Bp=e=>Number(l(Gs,e))
function Hp(e){return{guild_xp:Np(e),id:jp(e),name:$d(e),rank:Dp(e)}}function Up(e){const{stam:t,max:n}=Mp(qs,e)
return{current_stamina:Number(t),last_activity:Fp(e).timestamp,level:Number(l(/Level:.+?(?<l>\d+)/,e)),max_stamina:Number(n),vl:Bp(e)}}function qp(e){return{guild_id:tf(),image_version:0,xp:-1,...Hp(e),...Up(e.dataset.tipped)}}function Gp(e,t,n){return{id:n,members:e.filter((e=>e.rank===t.rank)),name:t.rank,permissions:0,tax:-1}}async function Wp(){const e=Wh(await Rp()).getElementById("pCC")
if(!e)return{e:{code:0,message:"Failure"},s:!1}
const t=Sp(ml,e).map(qp)
return{r:Ap(t,"rank").map(Pd(Gp,t)),s:!0}}function zp(e){if(t=e,"function"==typeof t?.[Symbol.iterator])return Object.fromEntries(e)
var t}function Vp(){return Rl(window.jQuery)}function Qp(e){return Object.keys(e)}function Jp(e){return Math.floor(Math.max(0,$s()-e)/86400)}function Kp(e){return Number.isNaN(e)}const Xp=0,Yp=1,Zp=2,eg=3,tg=4,ng=5,ig=6,rg="fsh_guildActivity"
function og(e){return Wf({guild_id:e,subcmd:"guild_members"})}function sg(e){return Promise.all(e)}function ag(e){let t=e.toString()
return e<10&&(t=`0${t}`),t}function lg(e){return`${e[0]}-${e[1]}-${e[2]} ${e[3]}:${e[4]}:${e[5]}`}function cg(e){return"[object Date]"===Object.prototype.toString.call(e)&&!Kp(e.getTime())}function ug(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(ag)}(e))}function dg(e){if(cg(e))return lg(ug(e))}async function fg(){return await rh(rg)??{lastUpdate:0,members:{}}}const hg=e=>dg(new Date(1e3*e)),pg=e=>[e[0],e[1],e[2],e[3],hg(e[4]),e[5],e[6]]
function gg(e){const{lastUpdate:t,members:n}=e
var i
return`Last Update,Member,Last Activity,Stam,Level,Max Stam,Date,VL,GXP\n${nf(n).flatMap((i=hg(t),([e,t])=>t.map(pg).map((t=>[i,e,...t].join(","))))).join("\n")}`}const _g=e=>`${e[0]}${e[1]}${e[2]}${e[3]}${e[4]}${e[5]}`,vg=[e=>e.getFullYear().toString(),e=>e.getMonth()+1,e=>e.getDate(),e=>e.getHours(),e=>e.getMinutes(),e=>e.getSeconds()],mg=e=>t=>t(e)
async function bg(e,t){const n=await fg()
if(!n.lastUpdate||!n.members)return
const i=e(n)
Jf(new Blob([i],{type:t}),`${_g(vg.map(mg(new Date)).map(ag))}_GuildTracker.${t.split("/")[1]}`)}async function yg(e){const t=await fg(),n={lastUpdate:t.lastUpdate,members:zp(nf(t.members).filter((([t])=>t!==e)))}
oh(rg,n)}async function wg(e){const t=await fg(),n={lastUpdate:t.lastUpdate,members:zp(nf(t.members).map((([t,n])=>[t,n.filter((t=>t[4]>e))])))}
oh(rg,n)}async function kg(){const[e,t]=await sg([fg(),og(tf())]),n=t.map((({username:e})=>e))
return Qp(e.members).filter((e=>t=>!e.find((e=>e===t)))(n)).sort(ip)}const Sg=e=>[e.name,[Jp(e.last_activity),e.current_stamina,e.level,e.max_stamina,$s(),e.vl,e.guild_xp]],xg=e=>e.members.map(Sg),Eg=e=>e.r.flatMap(xg),Cg=[e=>!e,(e,t)=>e[1]!==t[1],(e,t)=>e[2]!==t[2],(e,t)=>e[3]>t[3],(e,t)=>e[5]!==t[5],(e,t)=>e[6]!==t[6]],$g=e=>!e.some(Is),Tg=e=>!e.some(Kp),Pg=([,e])=>e.length,Lg=([e,t])=>[e,t.filter($g).filter(Tg)],Ig=e=>nf(e.members||{}).map(Lg).filter(Pg),Rg=(e,t)=>e[4]>t[4]?e:t,Og=([e,t])=>[e,t.reduce(Rg)],Mg=([e,t])=>[e,[t]],Fg=e=>([t])=>!e[t]||$s()-e[t][4]>=86100,Ag=(e,t,n)=>{return((e,t,n)=>({lastUpdate:$s(),members:zp(Qp({...e,...t,...n}).map((i=>[i,[...e[i]??[],...t[i]??[],...n[i]??[]]])))}))(zp(e.map((e=>([t,n])=>[t,n.filter((n=>n[4]!==e[t][4]))])(t))),zp(nf(t).filter((i=n,([e,t])=>Cg.some((n=>n(i[e]?.[0],t))))).map(Mg)),n)
var i}
function Ng(e,t){const n=Ig(e),i=zp(n.map(Og)),r=Eg(t).filter(Fg(i))
r.length?function(e,t,n){e&&t&&n&&oh(rg,Ag(t,n,zp(e.map(Mg))))}(r,n,i):function(e){e&&oh(rg,{lastUpdate:$s(),members:zp(e)})}(n)}const jg=e=>$s()>Xl(e.lastUpdate,0)+300
function Dg(e){jg(e)&&async function(e){const t=await Wp()
t.s&&Ng(e,t)}(e)}function Bg(){return!Vp()}function Hg(e){return sf("li",e)}function Ug(e,t){if(function(e){return e instanceof Node&&e.parentNode instanceof Node}(t))return t.parentNode.insertBefore(e,t)}function qg(e,t){if(t instanceof Node&&t.parentNode instanceof Node)return function(e,t){return t.nextSibling instanceof Node?Ug(e,t.nextSibling):uf(t.parentNode,e)}(e,t)}const Gg=["Buff Log","Combat Logs","Creature Logs","Quick Links","Recipe Manager","New Guild Log"]
function Wg(e,t){Yd("accordion",e),Gg.includes(e)?t():pf(t)}function zg(e,t,n,i){const r=function(e,t,n){const i=Hg({className:`nav-level-${e}`}),r=Vf({className:"nav-link fshPoint",textContent:t})
return uf(i,r),qg(i,n.parentNode),r}(e,t,i)
Rl(n)?wp(r,Pd(Wg,t,n)):(r.href=n,wp(r,(()=>Yd("accordion",t))))}const Vg=[[e=>e.recipeManagerLink,"1","Recipe Manager",Lf,"nav-character-log"],[e=>e.inventoryManagerLink,"1","Inventory Manager",`${la}invmanagernew`,"nav-character-log"],[e=>e.medalGuideLink,"1","Medal Guide",`${na}${Ks}medalguide`,"nav-character-log"],[e=>e.buffLogLink&&El("keepBuffLog"),"1","Buff Log",_f,"nav-character-log"],[e=>e.combatLogLink&&El("keepLogs"),"1","Combat Logs",vf,"nav-character-notepad"],[e=>e.creatureLogLink&&El("showMonsterLog"),"1","Creature Logs",mf,"nav-character-notepad"],[e=>e.quickLinksLink,"1","Quick Links",Tf,"nav-character-notepad"],[e=>e.auctionSearchLink,"2","AH Quick Search",kf,"nav-actions-trade-auctionhouse"],[e=>e.onlinePlayersLink,"2","Online Players",Ef,"nav-actions-interaction-findplayer"],[e=>e.findOtherLink,"2","Find Other",xf,"nav-actions-interaction-findplayer"],[e=>e.findBuffsLink,"2","Find Buffs",Sf,"nav-actions-interaction-findplayer"],[e=>e.guildInventoryLink&&tf(),"2","Guild Inventory",`${la}guildinvmgr`,"nav-guild-storehouse-inventory"],[e=>e.newGuildLogLink&&tf()&&!El("useNewGuildLog"),"2","New Guild Log",yf,"nav-guild-ledger-advisor"],[e=>e.topRatedLink,"2","Top 250 Players",`${Js}toprated${Ks}xp`,"nav-toprated-players-level"]]
function Qg(e){Vg.forEach((([n,i,r,o,s])=>{n(e)&&function(e,n,i,r){const o=t(r)
o instanceof Node&&zg(e,n,i,o)}(i,r,o,s)}))}const Jg=e=>22*Sp("li",e).length||null
function Kg(e,t,n){Qg(n),function(e,t){t.heights=Sp("#nav > li").map(Jg)
const n=Number(t.state)
n&&n>-1&&n<e.children.length&&(e.children[t.state].children[1].style.height=`${t.heights[t.state]}px`)}(e,t)}var Xg=["recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink"]
function Yg(e){return function(e){return-1!==e&&0===Fl(`#nav li.nav-level-0:nth-child(${e+1}) ul`).offsetHeight}(e)?(Yd("accordion","collapse"),-1):e}const Zg=(e,t,n)=>$(e).data(`${n}${t}`)
function e_(e,t,n){return new Promise((i=>{const r=Zg(e,t,n)
r?i(r):function(e,t,n,i){$(e).on(`${np(t)}create`,(()=>{i(Zg(e,t,n))}))}(e,t,n,i)}))}const t_=[[e=>!Ol(e),()=>Kl("$('#nav').data('hcsNav') is not an object")],[e=>!("heights"in e),()=>Kl("$('#nav').data('hcsNav').heights does not exist")]]
async function n_(){const e=t("nav"),n=await e_(e,"Nav","hcs")
return function(e){const t=t_.find((([t])=>t(e)))
return!t||(t[1](),!1)}(n)?{theNav:e,myNav:n}:{}}function i_(){!function(){const e=El("lastActiveQuestPage")
El("storeLastQuestPage")&&e.length>0&&(t("nav-character-questbook").href=e)}(),function(){const e=El("lastScavPage")
El("storeLastScavPage")&&e.length>0&&(t("nav-actions-artisanship-scavenging").href=e)}()}async function r_(){const{theNav:e,myNav:t}=await n_()
e&&t&&(i_(),function(e,t){const n=Xg.map((e=>[e,El(e)]))
n.some((([,e])=>e))&&Kg(e,t,zp(n))}(e,t),function(e){const t=e._saveState
e._saveState=function(n){t.call(e,Yg(n))}}(t))}function o_(e){return zh({cmd:"bounty",page:e})}function s_(e){return e()}function a_(e,t,n){return JSON.stringify(e,t,n)}function l_(e,t){Ll(e,a_(t))}let c_=0,u_=0
const d_=()=>c_,f_=()=>u_
function h_(){return af({className:"minibox"})}function p_(e){return sf("span",e)}function g_(e,t,n){e instanceof Element&&e.insertAdjacentHTML(t,n)}function __(e,t){g_(e,"beforeend",t)}function v_([e,t,n,i,r]){const o=e(),s=n()
if(s)return l_(t,s),df("",o),function(e,t,n,i){const r=af({innerHTML:`<a class="fshBountyHeader" href="${Ta}">${n} Bounties</a> `}),o=p_({className:"xxsLink",textContent:"Reset"})
return uf(r,o),uf(e,r),__(e,function(e,t,n){const i=e.bounty
return 0===i.length?`<div class="xsOrange">[No ${t.toLowerCase()} bounties]</div>`:i.map(n).join("")}(t,n,i)),o}(o,s,i,r)}function m_(e,t){return`<a href="${e.link}" class="xsKhaki tip-static" data-tipped="${t(e)}">${e.target}</a><br>`}function b_(e,t){if("string"==typeof t){const e=a(/^(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})T(?<hr>\d{2}):(?<min>\d{2}):(?<sec>\d{2}(?:\.\d*)?)Z$/,t)
if(e)return new Date(Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3]),Number(e[4]),Number(e[5]),Number(e[6])))}return t}function y_(e){const t=El(e)
if(t)return Ml(t,b_)}function w_(e){return e.split(",").map(Cd)}function k_(e){const t=El(e)
return t?w_(t):[]}function S_(e){return Fl("img",e[2]).title}function x_(e){const t="A"===(i=e[0]).children[0].tagName?i.children[0]:i.children[0].children[0]
var i
return{target:n(t),link:t.href,lvl:n(t.nextSibling).replace(/[[|\]]/g,""),reward:n(e[2]),rewardType:S_(e),xpLoss:n(e[3]),posted:n(e[4])}}let E_=0,C_={},$_={},T_=!1,P_=!1,L_=[]
const I_=()=>C_,R_=()=>$_,O_=()=>T_,M_=()=>L_
function F_(e){return{...x_(e),progress:n(e[5])}}function A_(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=F_(e.rows[t].cells)
C_.bounty.push(n)}}(e)}function N_(e,t){return function(e){if(e)return C_&&$s()-C_.lastUpdate>E_}(e)||function(e){if(e)return $_&&$s()-$_.lastUpdate>E_}(t)}let j_=0
const D_=()=>j_
function B_(e){return`Level:  ${e.lvl}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Progress:  ${e.progress}`}function H_(e){return m_(e,B_)}function U_(){j_=v_([d_,"bountyList",I_,"Active",H_])}let q_=0
const G_=()=>q_
function W_(e){return`Target Level:  ${e.lvl}<br>Offerer: ${e.offerer}<br>Reward: ${e.reward} ${e.rewardType}<br>XP Loss Remaining: ${e.xpLoss}<br>Posted: ${e.posted}<br>Tickets Req.:  ${e.tickets}`}function z_(e){return e.accept?`<span class="xsGreen" onclick="${e.accept}">[a]</span>&nbsp;`:""}function V_(e){return[z_(e),m_(e,W_)].join("")}function Q_(){q_=v_([f_,"wantedList",R_,"Wanted",V_])}function J_(e){const t=e[6]
return"[n/a]"!==$d(t)?t.children[0].children[0].getAttribute("onclick"):""}const K_=[()=>M_().includes("*"),e=>M_().includes(e),(e,t)=>Vl.wantedGuildMembers&&"[n/a]"===$d(t.cells[6])]
function X_(e,t){var n;(function(e,t){return"[active]"!==$d(t.cells[6])&&K_.some((n=>n(e,t)))})(e,t)&&R_().bounty.push({...x_(n=t.cells),offerer:$d(n[1].children[0].children[0]),tickets:$d(n[5]),accept:J_(n)})}let Y_=0,Z_=0
function ev(e){const n=Fl('#pCC input[name="page"]',e)
if(!n)return
Y_=Number(n.value),Z_=Number(l(/of&nbsp;(?<of>\d*)/,n.parentNode.innerHTML))
const i=t("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
i&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],i=$d(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===i)break
X_(i,n)}}(i)}function tv(e){Vl.enableActiveBountyList&&!O_()&&(!function(e){const n=t("bounty-info",e)
if(!n)return
const i=n.parentNode.parentNode.previousElementSibling.children[0].children[0]
C_={},C_.bounty=[],C_.isRefreshed=!0,C_.lastUpdate=$s(),i&&A_(i),T_=!0}(e),U_())}async function nv(e){const t=Wh(e)
if(tv(t),Vl.enableWantedList)if(ev(t),Y_<Z_){nv(await o_(Y_+1))}else Q_()}const iv=[()=>!I_(),()=>!R_(),()=>P_]
async function rv(){if(function(e,t){C_=y_("bountyList"),$_=y_("wantedList"),E_=El("bountyListRefreshTime"),P_=El("bwNeedsRefresh"),P_||N_(e,t)&&(P_=!0)}(Vl.enableActiveBountyList,Vl.enableWantedList),iv.some(s_)){$_={},$_.bounty=[],$_.isRefreshed=!0,$_.lastUpdate=$s(),T_=!1,L_=k_("wantedNames"),Ll("bwNeedsRefresh",!1)
nv(await o_(1))}else!function(e,t){t&&(R_().isRefreshed=!1,Q_()),e&&(I_().isRefreshed=!1,U_())}(Vl.enableActiveBountyList,Vl.enableWantedList)}function ov(e,t){Yd("activeWantedBounties",e),l_(t,null),rv()}function sv(e){e.target===D_()&&ov("getBountyListReset","bountyList"),e.target===G_()&&ov("getWantedListReset","wantedList")}function av(e,t){return Wf({subcmd:"profile",player_username:e,...t&&{_:ks()}})}async function lv(e){const t=await av(o(),e),n=t?.username===o(),i=n?{...t,lastUpdate:xs()}:t
return n&&oh("fsh_selfProfile",i),i}const cv=e=>xs()-Vl.allyEnemyOnlineRefreshTime<e?.lastUpdate
async function uv(e){if(e)return lv(e)
return function(e){return cv(e)?e:lv()}(await rh("fsh_selfProfile"))}function dv(e,t){return t?.classList?.contains(e)}function fv(e,t){return dv(t[0],e)}function hv(e,t,n){const{target:i}=n,r=t.find(Pd(e,i))
if(r)return r[1](i)}function pv(e){return Pd(hv,fv,e)}function gv(e){return dc(e,"player_id")}function _v(e,t,n){return Math.floor(Math.max(e-t,0)/2+n)}function vv(e,t,n,i,r){let o=i
500===i&&(o=1e3)
const s=_v(window.screen.availHeight,o,window.screenY),a=_v(document.documentElement.clientWidth,n,window.screenX)
window.open(e,t,`width=${n}, height=${o}, left=${a}, top=${s}${r}`)}function mv(e,t){let n=""
t&&(n=`&blist=${t}`),vv(`${Sa}&t=${e}${n}`,"fsQuickBuff",618,1e3,",scrollbars")}function bv(e){let t=e,n=Math.floor(t/60)
t%=60
let i=Math.floor(n/60)
n%=60
const r=Math.floor(i/24)
return i%=24,[r,i,n,t]}function yv(e,t){return 0===e?"":String(e)+t}function wv(e){const t=bv(Math.abs($s()-e))
return`${yv(t[0]," days, ")+yv(t[1]," hours, ")+yv(t[2]," mins, ")+t[3]} secs`}const kv="enemy-buff-check-on",Sv="enemy-buff-check-off",xv="enemy-send-message",Ev="enemy-quickbuff",Cv="enemy-quick-buff",$v=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function Tv(e,t){return t[0]($s()-e)}function Pv(e,t){return`<a class="player-name tip-static ${function(e,t){const n=$v.find(Pd(Tv,e))
return n?function(e,t){return e?t[1]:t[2]}(t,n):"fshWhite"}(e.last_login,t)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${wv(e.last_login)}</td></tr></tbody></table>" href="${ia}${e.id}">${e.username}</a>`}function Lv(e){return $s()-e.last_login<1800}function Iv(e,t){return`<li class="player"><div class="player-row">${Vl.hideBuffSelected?"":`<span class="${kv}"></span>`}${Pv(t,e)}</div><div class="guild-minibox-actions">${Vl.hideGuildInfoMessage?"":`<span class="${xv} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}${Vl.hideGuildInfoBuff?"":`<span class="${Ev} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}${function(e){return Vl.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${sa}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return Vl.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${oa}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function Rv(e,t){return e.filter(Lv).map(Pd(Iv,t)).join("")}const Ov=[(e,t)=>e.length+t.length,(e,t)=>{if(!Vl.enableAllyOnlineList)return t.length},e=>{if(!Vl.enableEnemyOnlineList)return e.length}]
function Mv(e){Yd("allyEnemy",e)}function Fv(e,t,n){return 0===n(e,t)}function Av(e){const n=Xl(e._allies,[]),i=Xl(e._enemies,[]);(function(e,t){return Ov.every(Pd(Fv,e,t))})(n,i)||function(e,n){let i=""
Vl.enableAllyOnlineList&&(i+=Rv(e,!0)),Vl.enableEnemyOnlineList&&(i+=Rv(n,!1))
const r=t("fshContactList")
df("",r),__(r,i)}(n,i)}function Nv(e){Mv("toggleBuffSelected"),e.classList.toggle(kv),e.classList.toggle(Sv)}const jv=[[kv,Nv],[Sv,Nv],[xv,function(e){Mv("msgPlayer"),window.openQuickMsgDialog(n(e.parentNode.previousElementSibling.lastElementChild))}],[Ev,function(e){Mv("buffPlayer"),mv(gv(e.parentNode.previousElementSibling.lastElementChild.href))}],[Cv,function(){Mv("selectedBuff"),mv(cf(kv,t("fshContactList")).map((e=>gv(e.nextElementSibling.href))).join(","))}]]
function Dv(e){const{target:t}=e
"fshResetEnemy"!==t.id?pv(jv)(e):async function(){Mv("resetList"),Av(await uv(!0))}()}function Bv(e){const t=af({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>'
Vl.hideBuffSelected||(n+=`<ul class="${Cv}">Quick Buff Selected</ul>`),n+="</div></div>",__(t,n),uf(Od(),t),wp(t,Dv),Av(e)}function Hv(e){if(e?.length)return n(e[0].nextElementSibling)}function Uv(e){return e?Number(e.replace(/,/g,"")):0}function qv(e){return Uv(Hv(lf(e)))}function Gv(e,t){const n=e?.split(" ").map((e=>e.slice(0,-1)))
var i
if(n)return`<dd>${i=new Date(xs()+1e3*(60*(60*t+Number(n[0]))+Number(n[1]))),`${ag(i.getHours())}:${ag(i.getMinutes())} ${i.toLocaleString("en",{weekday:"short"})} ${ag(i.getDate())}/${Ns[i.getMonth()]}/${i.getFullYear()}`}</dd>`}function Wv(e){return sf("button",{...e,type:"button"})}function zv(e,t){__(e,t)}function Vv(){Yd("fsbox","open log"),bf()}function Qv(e,t){const n=p_({className:`fsh-fsbox ${e}`,textContent:"[ "})
return uf(n,t),zv(n," ]"),n}function Jv(e){const t=Fl(ml,e)
t&&(function(e,t){const i=Vf({href:`${ta}${n(t)}`,textContent:"Ignore"})
wp(i,(()=>Yd("fsbox","ignore link"))),uf(e,Qv("fs-box-ignore",i))}(e,t),async function(e){const t=await rh("fsh_fsboxcontent")??"",n=Cd(Fl(".message",e).innerHTML)
if(t.includes(n))return
oh("fsh_fsboxcontent",`<br>${n}${t}`.slice(0,9999))}(e))}function Kv(e){e.classList.add("fshRelative"),function(e){const t=Wv({textContent:"Log"})
wp(t,Vv),uf(e,Qv("fs-box-log",t))}(e),Jv(e)}function Xv(e,t){const i=t.nextElementSibling.children[0]
8===i.children.length&&(!function(e,t){uf(e,af({className:"tooltip-bottom",dataset:{tooltip:"Server"},textContent:`Server: ${n(t.children[7])}`}))}(e,i),function(e,t){df(`Online: ${t.children[3].innerHTML}`,e.children[0])}(e,i),t.parentNode.classList.add("fshInvisible"))}function Yv(e,t){t instanceof Node&&(t.textContent=String(e))}let Zv
function em(){return Zv||(Zv=t("quickMessageDialog")),Zv}let tm,nm=0
function im(e){(function(){if(!nm){const e=lf("validateTips",em())
1===e.length&&([nm]=e)}return nm})()&&Yv(Xl(e,""),nm)}function rm(){return tm||(tm=t("quickMsgDialog_msg"),tm.maxLength=512),tm}let om,sm=null,am=0,lm=0
function cm(e){"Enter"!==e.key||e.shiftKey||(Yd("messaging","sendOnEnter"),e.preventDefault(),function(){if(!lm){const e=$(em()).dialog("option","buttons")
lm=e["Send Message"]}return lm}()())}function um(){Is(sm)&&(sm=El("enterForSendMessage")),sm&&!am&&(Jl(rm(),"keypress",cm),am=!0)}let dm=0,fm=0,hm=0
function pm(e,t,n){const i=fm.insertRow(e)
let r=i.insertCell(-1)
__(r,t),r=i.insertCell(-1),__(r,n)}function gm(e,t){return`<button class="fshButton ui-corner-all ${e}-button">${t}</button>`}function _m(e,t){pm(e,gm("del","Del"),`<span class="ui-widget-content fshBlck add-template">${t}</span>`)}const vm=[["del-button",function(e){Yd("messaging","deleteTemplate")
const t=e.parentNode.parentNode.rowIndex
fm.deleteRow(t),dm.splice(t-2,1),l_("quickMsg",dm)}],["add-button",function(e){Yd("messaging","addNewTemplate")
const t=e.parentNode.nextElementSibling.children[0],n=t.value
if(""!==n){_m(e.parentNode.parentNode.rowIndex,n),t.value="",dm.push(n),l_("quickMsg",dm)}}],["add-template",function(e){Yd("messaging","insertTemplate"),rm().value+=`${n(e).replace(/\{playername\}/g,om)}`}]]
function mm(e){_m(-1,e)}function bm(){El("enableMessageTemplates")&&!hm&&(wp((fm||(fm=em().lastElementChild),fm),pv(vm)),(dm||(dm=y_("quickMsg")),dm).forEach(mm),pm(-1,gm("add","Add"),'<input id="newTmpl" class="ui-widget-content fshTmpl">'),hm=!0)}function ym(e,n,i){const r=em()
dv("ui-dialog-content",r)&&(!function(e){om=e,Yv(e,t("quickMsgDialog_targetUsername"))}(e),function(e){const t=rm()
t.value=Xl(e,""),t.disabled=!1}(n),im(i),bm(),um(),$(r).dialog("open"))}function wm(e){return rp({cmd:"composing",...e})}function km(){return wm({subcmd:"view"})}function Sm(){return ap(km)}function xm(e,n,i){const r=Hg({className:"notification"}),o=Vf({href:i,innerHTML:`<span class="notification-icon"></span><p class="notification-content">${n}</p>`})
wp(o,(()=>{Yd("notification",e)})),uf(r,o),uf(t("notifications"),r)}function Em(){xm("composing","Composing to do",xa)}function Cm(e){return e.time_remaining}function $m(){Em(),Ll(Xa,!0)}const Tm=52
function Pm(e){const t=e.h.p.find((({k:e})=>e===Tm))?.v
e.r.potions.length!==t?$m():function(e){const t=Math.min.apply(null,e.map(Cm))
t>0?(Ll(Xa,!1),Ll(Ya,xs()+1e3*t)):$m()}(e.r.potions)}function Lm(){El(Xa)?Em():async function(){const e=El(Ya)
if(e&&xs()<e)return
const t=await Sm()
t?.s&&Pm(t)}()}function Im(e){return rp({cmd:"guild",...e})}function Rm(e){return Im({subcmd:"groups",...e})}function Om(e){return Rm({subcmd2:"joinall",group:e})}function Mm(){return Rm({subcmd2:"view"})}function Fm(){return ap(Mm)}function Am(e){let t,n,i,r,o,s,a
return{c(){t=Vc("p"),n=Vc("button"),i=Qc("Join all attack groups"),r=Qc(e[2]),o=Qc("."),eu(n,"type","button"),eu(n,"class","svelte-44dw92"),eu(t,"class","notification-content")},m(l,c){Gc(l,t,c),Hc(t,n),Hc(n,i),Hc(n,r),Hc(n,o),s||(a=Xc(n,"click",e[4],{once:!0}),s=!0)},p(e,t){4&t&&iu(r,e[2])},d(e){e&&Wc(t),s=!1,a()}}}function Nm(e){let t,n={ctx:e,current:null,token:null,hasCatch:!1,pending:Bm,then:Dm,catch:jm}
return Xu(e[3](),n),{c(){t=Kc(),n.block.c()},m(e,i){Gc(e,t,i),n.block.m(e,n.anchor=i),n.mount=()=>t.parentNode,n.anchor=t},p(t,n){e=t},d(e){e&&Wc(t),n.block.d(e),n.token=null,n=null}}}function jm(e){return{c:hc,m:hc,d:hc}}function Dm(e){let t
return{c(){t=Vc("p"),t.textContent="Joined.",eu(t,"class","notification-content"),ou(t,"line-height","32px")},m(e,n){Gc(e,t,n)},d(e){e&&Wc(t)}}}function Bm(e){let t
return{c(){t=Vc("span"),eu(t,"class","notification-content fshSpinner fix-classic-theme svelte-44dw92")},m(e,n){Gc(e,t,n)},d(e){e&&Wc(t)}}}function Hm(e){let t,n,i
function r(e,t){return e[0]?Nm:Am}let o=r(e),s=o(e)
return{c(){t=Vc("a"),n=Vc("span"),i=Jc(),s.c(),eu(n,"id","notification-icon-guild-group"),eu(n,"class","notification-icon"),eu(t,"href",e[1])},m(e,r){Gc(e,t,r),Hc(t,n),Hc(t,i),s.m(t,null)},p(e,[n]){o===(o=r(e))&&s?s.p(e,n):(s.d(1),s=o(e),s&&(s.c(),s.m(t,null))),2&n&&eu(t,"href",e[1])},i:hc,o:hc,d(e){e&&Wc(t),s.d()}}}function Um(e,t,n){const i=e=>!Vl.enableMaxGroupSizeToJoin||e.members.length<Vl.maxGroupSizeToJoin,r=e=>e.name===o(),s=e=>!e.members.find(r),a=e=>e.id
let l=0,c=va,u=""
async function d(e){const t=e.r.filter(i).filter(s).map(a)
var n
t.length&&await(n=t,ap(Om,0,n))}return Vl.enableMaxGroupSizeToJoin&&(c=ma,u=` less than size ${Vl.maxGroupSizeToJoin}`),[l,c,u,async function(){const e=await Fm()
e?.s&&await d(e)},function(e){e.preventDefault(),Yd("notification","Join All"),n(0,l=1)}]}class qm extends ld{constructor(e){super(),ad(this,e,Um,Hm,yc,{})}}function Gm(e){$(e).qtip("hide")}function Wm(e){Ll("needToPray",e),Ll("lastTempleCheck",(new Date).setUTCHours(23,59,59,999)+1)}let zm=0
const Vm='<span class="notification-icon"></span><p class="notification-content">You are currently praying at the temple.</p>',Qm=`<li class="notification"><span id="helperPrayToGods" class="fastPray"><table><tbody><tr><td><span class="fshTempleZero" data-tooltip="Pray to Sahria" praytype="0"></span></td><td><span class="fshTempleOne" data-tooltip="Pray to Osverin" praytype="1"></span></td></tr><tr><td><span class="fshTempleTwo" data-tooltip="Pray to Gurgriss" praytype="2"></span></td><td><span class="fshTempleThree" data-tooltip="Pray to Lindarsil" praytype="3"></span></td></tr></tbody></table><a href="${Js}temple"><p class="notification-content">Bow down to the gods</p></a></span></li>`
async function Jm(e){const t=e.target.getAttribute("praytype")
t&&(Yd("notification","prayToGods"),Gm(e.target),await zh({cmd:"temple",subcmd:"pray",type:t}),zm.outerHTML=Vm,Wm(!1))}function Km(){__(t("notifications"),Qm),zm=t("helperPrayToGods"),Ad(zm,"click",Jm)}async function Xm(){if(!Vl.enableTempleAlert)return
const e="temple"===Vl.cmd?document:await Vh({cmd:"temple"})
if(!e)return
const t=Fl("#pCC",e)
if(!t)return
const n="You are currently praying at the temple."!==$d(t)
n&&Km(),Wm(n)}function Ym(){var e
!(e=El("lastTempleCheck"))||xs()>e?Xm():El("needToPray")&&Km()}function Zm(){return-1===window.location.search.indexOf("cmd=points&type=1")}function eb(){Zm()&&xm("stamina","Upgrade stamina with gold",`${ua}&type=1`)}function tb(e){if(!Vl.enableUpgradeAlert)return
const t=function(e){if(Zm())return Wh(e)
const t=kp('#pCC input[name="quantity"]')
return t[0].value="100",t[1].value="10",document}(e),n=kp("#pCC > table",t)
if(n.length>0){!function(e){const t=$d(e).split(" / ")
t[0]!==t[1]?(eb(),Ll("needToDoUpgrade",!0)):(Ll("needToDoUpgrade",!1),Ll("lastUpgradeCheck",Date.parse(`${$d(e.nextElementSibling)} GMT`)))}(n[n.length-1].rows[3].cells[2])}}async function nb(){const e=El("lastUpgradeCheck")
if(e&&xs()<e)return
!function(e){uc(3,tb,[e])}(await zh({cmd:"points",type:1}))}function ib(e,t){if(e instanceof Element)return function(e,t){return e.firstChild instanceof Node?Ug(t,e.firstChild):uf(e,t)}(e,t)}function rb(e,t){t.stopPropagation(),Yd("chrome","statbar",e)}function ob(e,n){const i=t(`statbar-${n}`)
if(!i)return
const r=Vf({href:e}),o=i.parentNode
uf(r,i),ib(o,r),wp(r,Pd(rb,n),!0)}function sb(e,t){cf("player-name",e).forEach(t)}const ab=/Last Activity:<\/td><td>(?<mins>\d+) mins/
function lb(e,t){const n=e.dataset.tipped,i=l(ab,n)
i<2?e.classList.add(t.l1):i<5?e.classList.add(t.l2):e.classList.add(t.l3)}const cb=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function ub(e,t){cb.forEach((n=>{Vl[n[0]]&&Sd(kp(n[t],e)).forEach(Tp)}))}function db(e){e?.classList&&e.classList.add("fshInvisible")}function fb(e,n){Vl.hideBuffSelected&&(Sd(lf(`${n}-buff-check-on`,e)).forEach(db),db(t(`${n}-quick-buff`)))}function hb(e){lb(e,{l1:"fshGreen",l2:"fshWhite",l3:"fshGrey"})}function pb(e,t,n){Sp(`#pCR h${e}`).filter(yp(t)).forEach((e=>{const i=Vf({href:`${da}${n}`,textContent:t})
wp(i,(()=>{Yd("widgets",`guild ${n}`)})),e.replaceChild(i,e.firstChild)}))}function gb(e){lb(e,{l1:"fshDodgerBlue",l2:"fshLightSkyBlue",l3:"fshPowderBlue"})}function _b(e){const n=t(e)
n&&(n.classList.add("pCR"),uf(Od(),n))}function vb(e){const n=t(e)
n&&ib((Rd||(Rd=t("pCR")),Rd),n)}function mb(){return rp({cmd:"superelite"})}function bb(e){return nf(e?.se??{}).flatMap((([t,n])=>Ql(n)?n.map((([n,i])=>[n,t,i,e?.loc[i]])):[[n,t.replaceAll(" ","_"),0,""]]))}const yb=e=>e.join("|"),wb=(e,t)=>e.r.map((e=>[t-e.time,e.creature.name.replace(" (Super Elite)","").replaceAll(" ","_"),e.realm.realm.id,e.realm.realm.name])),kb=(e,t)=>Ap(e.map(yb).concat(t.map(yb))).map((e=>e.split("|"))).map((([e,t,n,i])=>[Number(e),t,Number(n),i])).sort((([e],[t])=>t-e)),Sb=e=>zp(Ap(e.map((([,e])=>e))).map((t=>[t,e.filter((([,e])=>e===t)).map((([e,,t])=>[e,t])).slice(0,10)]))),xb=e=>zp(Ap(e.map((([,,e])=>e))).map((t=>[t,e.find((([,,e])=>e===t))[3]]))),Eb=e=>({se:Sb(e),loc:xb(e)})
const Cb=ud()
let $b=!1,Tb={},Pb=0,Lb=!1
const Ib=e=>Math.max(0,600-(Ss()-(e?.lastUpdate??0)),600-(Ss()-Pb))
async function Rb(){Pb=Ss()
const e=await ap(mb)
e?.s&&(Tb=function(e,t){const n=Number(t.t.split(" ")[1]),i=wb(t,n),r=bb(e),o=kb(i,r)
return{lastUpdate:n,...Eb(o)}}(Tb,e),oh("fsh_seLog",Tb),Cb.set(Tb))}function Ob(e,t){Lb=t,e(Lb),Lb&&!$b&&async function(){for($b=!0,Tb=await rh("fsh_seLog"),Cb.set(Tb);Lb;)$b=!0,await Of(1e3*Ib(Tb)),Lb&&await Rb(),$b=!1}()}const Mb=function(){const{subscribe:e,set:t}=ud(0)
return{subscribe:e,set:Pd(Ob,t)}}()
const Fb=[function(){El("moveGuildList")&&vb("minibox-guild")},function(){El("moveOnlineAlliesList")&&vb("minibox-allies")},function(){El("moveXmasBox")&&_b("minibox-xmas")},function(){El("moveDailyQuest")&&_b("minibox-daily-quest")},function(){El("moveFSBox")&&_b("minibox-fsbox")},async function(){if(!Vl.enableAllyOnlineList&&!Vl.enableEnemyOnlineList||Bg())return
!function(e){e&&uc(3,Bv,[e])}(await uv(!1))},function(){!Vl.enableWantedList&&!Vl.enableActiveBountyList||Bg()||(Vl.enableActiveBountyList&&(c_=h_(),uf(Od(),c_)),Vl.enableWantedList&&(u_=h_(),uf(Od(),u_)),d_()&&wp(d_(),sv),f_()&&wp(f_(),sv),rv())},function(){if(!Vl.enableGuildInfoWidgets)return
const e=t("minibox-guild-members-list")
e&&(ub(e,1),fb(e,"guild"),sb(e,hb),pb(4,"Chat","chat"),pb(3,"Guild","manage"))},function(){if(!Vl.enableOnlineAlliesWidgets)return
const e=t("minibox-allies-list")
e&&(ub(e,2),fb(e,"ally"),sb(e,gb))},function(){Vl.enableTempleAlert&&"temple"!==Vl.cmd&&!Bg()&&Ym()},function(){Vl.enableUpgradeAlert&&Vp()&&Zm()&&(El("needToDoUpgrade")?eb():nb())},function(){Vl.enableComposingAlert&&"composing"!==Vl.cmd&&Vp()&&Lm()},function(){Od()&&!Bg()&&r_()},function(){Bg()||(window.openQuickMsgDialog=ym)},function(){El("statBarLinks")&&(ob(na,"character"),ob(`${ua+Ks}reserve`,"stamina"),ob(ka,"equipment"),ob(ra,"inventory"),ob(ua,"fsp"),ob(`${Js}bank`,"gold"))},function(){if(!El("staminaCalculator"))return
const e=lf("stat-stamina-nextGain")
if(0===e.length)return
const n=t("statbar-stamina-tooltip-stamina"),i=(e=>Hv(lf("stat-name",e)).split(" / "))(n)
2===i.length&&__(n,function(e,t){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${Gv(Hv(e),Math.floor((Uv(t[1])-Uv(t[0]))/qv("stat-stamina-gainPerHour")))}`}(e,i))},function(){if(!El("levelUpCalculator"))return
const e=lf("stat-xp-nextGain")
0!==e.length&&__(t("statbar-level-tooltip-general"),`<dt class="stat-xp-nextLevel">Next Level At</dt>${Gv(Hv(e),Math.ceil(qv("stat-xp-remaining")/qv("stat-xp-gainPerHour")))}`)},function(){if(!El("fsboxlog"))return
const e=t("minibox-fsbox")
e&&Kv(e)},function(){El("resizeQuickBuff")&&(window.openWindow=function(e,t,n,i,r){Yd("chrome","interceptQuickBuff"),vv(e,t,n,i,r)})},function(){if(!El("joinAllLink"))return
const e=t("notification-guild-group")
e&&function(e){df("",e),new qm({target:e})}(e)},function(){if(!El("addServerNode"))return
const e=t("topbanner-stats"),n=Sp("#pCR h3").find(yp("Game Stats"));(function(e,t){return!(e&&dv("topbanner-stats-hidden",e))&&t})(e,n)&&Xv(e,n)},function(){if(!El("addScoutTowerLink"))return
const e=t("minibox-spoilsofwar")
if(!e)return
const n=e.children[1]
if(!n)return
const i=n.children[0]
__(i,"&nbsp;"),uf(i,function(){const e=Vf({dataset:{tooltip:"View Scout Report"},href:ha,innerHTML:`<img id="fshScoutTower" src="${Ms}structures/27.png">`})
return wp(e,(()=>Yd("chrome","scout tower link"))),e}())},async function(){if(Vp()&&El(el)){Dg(await fg())}},function(){Vp()&&Vl.enableSeTracker&&Mb.set(Vl.enableSeTracker)}]
const Ab=["enableAllyOnlineList","enableEnemyOnlineList","enableGuildInfoWidgets","enableOnlineAlliesWidgets","enableSeTracker","hideGuildInfoTrade","hideGuildInfoSecureTrade","hideGuildInfoBuff","hideGuildInfoMessage","hideBuffSelected","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enableActiveBountyList","enableWantedList","wantedGuildMembers","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","useNewGuildLog"]
function Nb(){Lp()||(Ab.forEach(Cp),Vl.allyEnemyOnlineRefreshTime=1e3*El("allyEnemyOnlineRefreshTime"),Vl.useNewGuildLog&&(Jl(document.body,"click",Pp),Jl(document.body,"auxclick",Pp)),Ip(Fb))}function jb(e){const t=Ml(e)
t?.["new-ui"]&&(El("gameHelpLink")&&uc(3,Ep),Vl.huntingMode=El("huntingMode"),uc(3,mp),Nb(),El("hideHelperMenu")||uc(3,Gh))}function Db(){const e=function(){const e=t("html")
if(e?.dataset)return e.dataset.hcs}()
e&&jb(e)}function Bb(){Vp()&&t("worldPage")&&window.GameData&&gf(import("./newMap-ssIjVD5V.js"))}const Hb={"-":{"-":()=>{gf(import("./arena-BS3L4Aqu.js").then((function(e){return e.c})))}},dojoin:{"-":()=>{gf(import("./arenaDoJoin-CXZAWtRi.js"))}},join:{"-":()=>{gf(import("./arenaJoin-B8ZGTYGo.js"))}},completed:{"-":()=>{gf(import("./completedArenas-Drfo_YTm.js"))}},pickmove:{"-":()=>{gf(import("./storeMoves-BEJPcznj.js"))}},setup:{"-":()=>{gf(import("./setupMoves-CffrgC_K.js"))}}}
function Ub(){gf(import("./bioWidgets-CZWi-uXd.js"))}function qb(){gf(import("./injectGuild-R0LptprW.js"))}const Gb=()=>{gf(import("./guildAdvisor-D1MFQqQ_.js"))}
const Wb=()=>{gf(import("./groups-IiMy-xUF.js"))}
const zb=()=>{gf(import("./addRemoveTags-BnwYt5jC.js"))}
const Vb=()=>{gf(import("./guildChat-B1Sqb0aI.js"))}
function Qb(){gf(import("./viewRecipe-BcHjg_7v.js"))}function Jb(){gf(import("./ufsgAllowBack-BrptAHOv.js"))}function Kb(){gf(import("./profile-nR9pBkFJ.js").then((function(e){return e.p})))}function Xb(){gf(import("./news-j1KLm9Az.js"))}function Yb(){gf(import("./viewArchive-BmFuiMoU.js"))}const Zb=()=>{gf(import("./inventory-BEUqtF_m.js"))},ey=()=>{gf(import("./bazaar-DamcWxhm.js"))}
function ty(){gf(import("./injectQuestBookFull-Cmkgms3C.js"))}const ny=()=>{gf(import("./scavenging-DCSbP1pp.js"))}
const iy=()=>{gf(import("./toprated-BRKOJN9i.js"))}
const ry=()=>{gf(import("./trade-DNBMMfqf.js"))}
var oy={creatures:{"-":{"-":Jb}},items:{"-":{"-":Jb},view:{"-":()=>{gf(import("./itemsView-wj8Z8kAf.js"))}}},masterrealms:{"-":{"-":Jb}},quests:{"-":{"-":Jb},view:{"-":()=>{gf(import("./showAllQuestSteps-s7xd9v5U.js"))}}},realms:{"-":{"-":Jb}},relics:{"-":{"-":Jb}},shops:{"-":{"-":Jb}},"-":{news:{"-":Xb},viewupdatearchive:{"-":Yb},viewarchive:{"-":Yb},"-":{"-":()=>{gf(import("./unknownPage-C9UwM1jZ.js"))}}},arena:Hb,auctionhouse:{"-":{"-":()=>{gf(import("./injectAuctionHouse-C0596x4k.js"))}},quickcreate:{"-":()=>{gf(import("./quickCreate-CLnWy4Cq.js"))}}},bank:{"-":{"-":()=>{gf(import("./injectBank-BJH9zsyh.js"))}}},blacksmith:{repairall:{"-":function(){fc("fromworld")&&Bb()}}},buffmarket:{"-":{"-":()=>{gf(import("./injectBuffmarket-BxhVpG33.js"))}}},combat:{attackplayer:{"-":Kb}},composing:{"-":{"-":()=>{gf(import("./composing-Cml4Yp89.js"))}},breakdown:{"-":()=>{gf(import("./breakdown-jujhP6Wy.js"))}},create:{"-":()=>{gf(import("./composingCreate-DkJYSNSJ.js"))}}},findplayer:{"-":{"-":()=>{gf(import("./findplayer-wmOqEPYI.js"))}}},guild:{inventory:{report:()=>{gf(import("./guildReport-5RBLC2fU.js"))},addtags:zb,removetags:zb,storeitems:()=>{gf(import("./storeitems-BK_jdpbW.js"))}},chat:{"-":Vb},dochat:{"-":Vb},log:{"-":()=>{gf(import("./guildLog-Dpa-wVmL.js"))}},groups:{viewstats:()=>{gf(import("./injectGroupStats-B6tUmipN.js"))},joinallgroupsundersize:Wb,joinall:Wb,"-":Wb},manage:{"-":qb},advisor:{"-":Gb,weekly:Gb},history:{"-":Ub},view:{"-":qb},scouttower:{"-":()=>{gf(import("./injectScouttower-CaFTEE04.js"))}},mailbox:{"-":()=>{gf(import("./guildMailbox-CKa586kB.js"))}},ranks:{"-":()=>{gf(import("./rank-8hlBcXi-.js"))}},conflicts:{rpupgrades:()=>{gf(import("./injectRPUpgrades-BeTraj1n.js"))}},bank:{"-":()=>{gf(import("./injectGuildBank-V8bUVFcb.js"))}},hall:{"-":()=>{gf(import("./hall-DL5HrSLQ.js"))},post:Ub},"-":{"-":qb}},hellforge:{"-":{"-":()=>{gf(import("./hellforge-VTnpRRxk.js"))}}},inventing:{"-":{"-":function(){gf(import("./inventing-CSU-ICf8.js"))}},doinvent:{"-":Qb},viewrecipe:{"-":Qb}},log:{"-":{"-":()=>{gf(import("./playerLog-DTlmizrH.js"))}}},marketplace:{createreq:{"-":()=>{gf(import("./marketplace-DP4e8C2r.js"))}}},news:{fsbox:{"-":()=>{gf(import("./newsFsbox-C4QQSUYJ.js"))}},"-":{"-":Xb},shoutbox:{"-":()=>{gf(import("./newsShoutbox-q69-rsHr.js"))}},viewupdatearchive:{"-":Yb},viewarchive:{"-":Yb}},notepad:{showlogs:{"-":vf},invmanagernew:{"-":Zb},guildinvmgr:{"-":Zb},recipemanager:{"-":Lf},auctionsearch:{"-":kf},onlineplayers:{"-":Ef},quicklinkmanager:{"-":Tf},monsterlog:{"-":mf},quickextract:{"-":$f},quickwear:{"-":Pf},fsboxcontent:{"-":bf},bufflogcontent:{"-":_f},newguildlog:{"-":yf},findbuffs:{"-":Sf},findother:{"-":xf},savesettings:{"-":()=>{gf(import("./load-DrLQp59D.js"))}},reliclist:{"-":If}},points:{"-":{"-":()=>{gf(import("./points-BQG08xkh.js"))}}},potionbazaar:{"-":{"-":ey},buyitem:{"-":ey}},privatemessage:{"-":{"-":()=>{gf(import("./privateMsg-R-hpWGg0.js"))}}},profile:{"-":{"-":Kb},managecombatset:{"-":Kb},report:{"-":Kb},equipitem:{"-":Kb},useitem:{"-":Kb},changebio:{"-":Ub},dropitems:{"-":function(){gf(import("./injectProfileDropItems-BVFQHqFp.js"))}}},pvpladder:{"-":{"-":()=>{gf(import("./ladder-DWDmL9aP.js"))}}},questbook:{"-":{"-":ty},atoz:{"-":ty},viewquest:{"-":()=>{gf(import("./injectQuestTracker-Bf4JM0Vr.js"))}}},quickbuff:{"-":{"-":()=>{gf(import("./quickBuff-CIXcAkXk.js"))}}},scavenging:{"-":{"-":ny},process:{"-":ny}},settings:{"-":{"-":()=>{gf(import("./injectSettings-DzOfUMi7.js"))}}},skills:{"-":{"-":()=>{}}},superelite:{"-":{"-":()=>{gf(import("./superelite-0U8rlnPH.js"))}}},tempinv:{"-":{"-":()=>{gf(import("./mailbox-w5YiVZHT.js"))}}},temple:{"-":{"-":Xm}},titan:{"-":{"-":()=>{gf(import("./injectTitan-B4ae7Scs.js"))}}},toprated:{xp:{"-":iy},monthlyxp:{"-":iy},gold:{"-":iy},killstreak:{"-":iy},bounties:{"-":iy},risingstars:{"-":iy},arena:{"-":iy},superelites:{"-":iy},smasher:{"-":iy},globalquest:{"-":()=>{gf(import("./globalQuest-BTH6-ihY.js"))}}},trade:{"-":{"-":ry},sendgold:{"-":ry},createsecure:{"-":ry},docreatesecure:{"-":ry}},world:{"-":{"-":Bb}}}
function sy(e){return sf("ul",e)}const ay=()=>af({className:"fshQuickLinks",style:{left:`${El("quickLinksLeftPx")}px`,top:`${El("quickLinksTopPx")}px`}}),ly=e=>"newWindow"in e&&e.url&&e.name
function cy(e,t){const n=uf(t,sy())
e.filter(ly).forEach((e=>{uf(uf(n,Hg()),function(e){const t=Vf({href:e.url,...e.newWindow&&{target:"new"},text:e.name})
return wp(t,(()=>Yd("chrome","quick link",e.name))),t}(e))}))}function uy(){if(!Fl(".mainbody"))return
const e=y_("quickLinks")||[]
e.length&&function(e){const t=ay()
t.classList.toggle("fshFixed",El("keepHelperMenuOnScreen")),El("draggableQuickLinks")&&(t.classList.add("fshMove"),Jd(t)),cy(e,t),uf(document.body,t)}(e)}let dy=0,fy=0,hy=0,py="",gy=0,_y=0
function vy(e){return fc(e)||"-"}function my(e){const t=Fl(e)
return t?.value||"-"}function by(){if(Ol(oy[dy])&&Ol(oy[dy][fy])&&Rl(oy[dy][fy][hy]))return oy[dy][fy][hy]}function yy(){""!==document.location.search?(dy=vy("cmd"),fy=vy("subcmd"),hy=vy("subcmd2"),["points","privatemessage"].includes(dy)&&(py=`/${vy("type")}`)):(dy=my('input[name="cmd"]'),fy=my('input[name="subcmd"]'),hy=my('input[name="subcmd2"]')),Vl.cmd=dy,Vl.subcmd=fy,Vl.subcmd2=hy,_y=`${dy}/${fy}/${hy}${py}`,gy=by()}function wy(){Rl(gy)&&(Il(_y),gy())}async function ky(e){yy(),await e,Db(),uc(3,wy),El("playNewMessageSound")&&uc(3,Fd),Lp()||uc(3,uy)}const Sy=[()=>!("showPicker"in HTMLSelectElement.prototype),()=>!navigator.cookieEnabled,()=>window!==window.parent,function(){if(!d){const e=l(/^https?:\/\/(?<id>[^/?#]+)(?:[/?#]|$)/i,document.referrer)
u=c.includes(e),d=!0}return u}]
function xy(e,t){if(Sy.some((e=>e())))return
const n=Al("https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.css")
zl(),function(e,t){Vl.gmInfo=Ml(decodeURIComponent(t)),Vl.gmInfo?Vl.fshVer=e:Vl.fshVer=`${e}_native`,Vl.calfVer="143"}(e,t),s(),ps(),ky(n)}export{ap as $,Ad as A,Mp as B,Ds as C,sy as D,nf as E,dv as F,Yf as G,Ql as H,Xf as I,zh as J,Wh as K,yl as L,wl as M,kp as N,ad as O,yc as P,Zu as Q,Vc as R,ld as S,Jc as T,eu as U,Fu as V,Gc as W,Hc as X,su as Y,ru as Z,Xc as _,rp as a,Gm as a$,Zc as a0,nd as a1,ed as a2,hc as a3,Wc as a4,mc as a5,y_ as a6,Qc as a7,iu as a8,au as a9,Uv as aA,Os as aB,Js as aC,p_ as aD,tb as aE,$d as aF,mv as aG,gv as aH,w_ as aI,np as aJ,fv as aK,oa as aL,sa as aM,dc as aN,Ea as aO,ta as aP,vl as aQ,wv as aR,xd as aS,qg as aT,o as aU,Rf as aV,Qa as aW,Ra as aX,Oa as aY,ja as aZ,Ma as a_,l_ as aa,Wv as ab,n as ac,Yv as ad,fc as ae,kd as af,vf as ag,mf as ah,Op as ai,Ll as aj,Kp as ak,e_ as al,Vl as am,a_ as an,El as ao,cf as ap,ha as aq,zv as ar,Xu as as,Yu as at,Cl as au,Kc as av,tl as aw,Cs as ax,xs as ay,yv as az,Jl as b,Va as b$,th as b0,ba as b1,Ks as b2,La as b3,Qf as b4,Ms as b5,rh as b6,Ua as b7,oh as b8,Uf as b9,Vu as bA,Wu as bB,zu as bC,Qu as bD,Eu as bE,rd as bF,od as bG,sd as bH,As as bI,vv as bJ,Sa as bK,dd as bL,ud as bM,av as bN,Ws as bO,Fm as bP,Xl as bQ,bl as bR,ia as bS,og as bT,ip as bU,Ts as bV,Ls as bW,Ec as bX,xu as bY,qa as bZ,Na as b_,Ml as ba,uc as bb,Hv as bc,lf as bd,ll as be,al as bf,ul as bg,cl as bh,dl as bi,Sd as bj,Cd as bk,Rs as bl,Rl as bm,Ia as bn,ou as bo,zc as bp,wa as bq,kc as br,_a as bs,Mu as bt,Ap as bu,Im as bv,ag as bw,Ns as bx,Ba as by,Ga as bz,Pd as c,bp as c$,Ja as c0,Ka as c1,Xh as c2,Kh as c3,Yh as c4,Fa as c5,Aa as c6,Wa as c7,Ss as c8,Ha as c9,Vp as cA,sf as cB,da as cC,Za as cD,qv as cE,sl as cF,Vs as cG,hv as cH,Cc as cI,du as cJ,Pc as cK,Lc as cL,Tc as cM,Cu as cN,Tu as cO,id as cP,Au as cQ,g_ as cR,Ps as cS,Es as cT,a as cU,Rm as cV,e as cW,Al as cX,rl as cY,gf as cZ,Mc as c_,uv as ca,Tp as cb,k_ as cc,Qh as cd,$s as ce,op as cf,Oc as cg,gl as ch,lp as ci,Ol as cj,kl as ck,il as cl,tf as cm,Zh as cn,aa as co,_l as cp,ib as cq,Kl as cr,xa as cs,qf as ct,Sm as cu,Xa as cv,yp as cw,Ya as cx,js as cy,wm as cz,df as d,fg as d$,Zs as d0,Is as d1,fl as d2,Fp as d3,ol as d4,Il as d5,Xb as d6,ty as d7,Qb as d8,fs as d9,zs as dA,pv as dB,Us as dC,Cf as dD,qb as dE,Yc as dF,Ku as dG,_d as dH,Ca as dI,$a as dJ,ku as dK,Jd as dL,$l as dM,tu as dN,uu as dO,td as dP,fa as dQ,dg as dR,Rp as dS,na as dT,pu as dU,Su as dV,Ic as dW,ca as dX,Pa as dY,bv as dZ,Ip as d_,cg as da,lg as db,Wf as dc,zf as dd,Fs as de,Eh as df,gh as dg,vh as dh,mh as di,_h as dj,kh as dk,pl as dl,hl as dm,Qp as dn,nu as dp,bc as dq,Qs as dr,Bs as ds,s_ as dt,qs as du,Gs as dv,el as dw,wf as dx,ga as dy,Hg as dz,Vh as e,tg as e0,Zp as e1,ng as e2,Yp as e3,eg as e4,Xp as e5,ig as e6,rg as e7,bg as e8,wg as e9,kg as ea,yg as eb,gg as ec,Mb as ed,Cb as ee,bb as ef,hu as eg,gc as eh,Wp as ei,Jp as ej,fp as ek,Ys as el,ua as em,Rc as en,$f as eo,xc as ep,pf as eq,Pf as er,ra as es,xy as et,zp as f,t as g,$p as h,uf as i,nl as j,Sp as k,ml as l,af as m,Vf as n,wp as o,Md as p,Fl as q,l as r,Yd as s,ya as t,sg as u,Gf as v,__ as w,Bg as x,Ed as y,Ug as z}
//# sourceMappingURL=calfSystem-ChzN4Q-P.js.map
